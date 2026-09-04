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
if(a[b]!==s){A.Ot(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Ed(b)
return new s(c,this)}:function(){if(s===null)s=A.Ed(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Ed(a).prototype
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
En(a,b,c,d){return{i:a,p:b,e:c,x:d}},
Cs(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.El==null){A.O_()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.FJ("Return interceptor for "+A.q(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.AD
if(o==null)o=$.AD=A.Cr(n)
p=q[o]}if(p!=null)return p
p=A.O7(a)
if(p!=null)return p
if(typeof a=="function")return B.cv
s=Object.getPrototypeOf(a)
if(s==null)return B.bf
if(s===Object.prototype)return B.bf
if(typeof q=="function"){o=$.AD
if(o==null)o=$.AD=A.Cr(n)
Object.defineProperty(q,o,{value:B.aO,enumerable:false,writable:true,configurable:true})
return B.aO}return B.aO},
Dh(a,b){if(a<0||a>4294967295)throw A.b(A.ax(a,0,4294967295,"length",null))
return J.Fa(new Array(a),b)},
Di(a,b){if(a<0)throw A.b(A.R("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
F9(a,b){if(a<0)throw A.b(A.R("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
Fa(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
Jy(a,b){return J.EE(a,b)},
Fb(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
JB(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Fb(r))break;++b}return b},
Fc(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Fb(r))break}return b},
cE(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iS.prototype
return J.mw.prototype}if(typeof a=="string")return J.dF.prototype
if(a==null)return J.iT.prototype
if(typeof a=="boolean")return J.mv.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bx.prototype
return a}if(a instanceof A.k)return a
return J.Cs(a)},
K(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bx.prototype
return a}if(a instanceof A.k)return a
return J.Cs(a)},
aA(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bx.prototype
return a}if(a instanceof A.k)return a
return J.Cs(a)},
NS(a){if(typeof a=="number")return J.eA.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dX.prototype
return a},
NT(a){if(typeof a=="number")return J.eA.prototype
if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dX.prototype
return a},
Cq(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dX.prototype
return a},
kR(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bx.prototype
return a}if(a instanceof A.k)return a
return J.Cs(a)},
y(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cE(a).P(a,b)},
V(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Hw(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)},
d3(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Hw(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).j(a,b,c)},
aM(a,b){return J.aA(a).u(a,b)},
EB(a,b){return J.aA(a).D(a,b)},
CY(a,b){return J.Cq(a).hN(a,b)},
pO(a){return J.kR(a).mK(a)},
EC(a,b,c){return J.kR(a).hO(a,b,c)},
ED(a,b,c){return J.kR(a).mL(a,b,c)},
Iy(a){return J.kR(a).mM(a)},
bO(a,b,c){return J.kR(a).hP(a,b,c)},
pP(a,b){return J.aA(a).f5(a,b)},
Iz(a,b,c){return J.NS(a).br(a,b,c)},
EE(a,b){return J.NT(a).a2(a,b)},
CZ(a,b){return J.K(a).E(a,b)},
pQ(a,b){return J.aA(a).a9(a,b)},
l1(a,b){return J.aA(a).cL(a,b)},
IA(a,b,c){return J.aA(a).cf(a,b,c)},
IB(a){return J.kR(a).gac(a)},
bP(a){return J.aA(a).gH(a)},
a9(a){return J.cE(a).gJ(a)},
bD(a){return J.K(a).gF(a)},
du(a){return J.K(a).gT(a)},
E(a){return J.aA(a).gt(a)},
pR(a){return J.aA(a).ga3(a)},
au(a){return J.K(a).gm(a)},
c2(a){return J.cE(a).gal(a)},
D_(a){return J.aA(a).gaq(a)},
IC(a,b,c){return J.aA(a).fW(a,b,c)},
ID(a,b,c){return J.aA(a).aE(a,b,c)},
c3(a,b,c){return J.aA(a).cl(a,b,c)},
IE(a,b,c){return J.Cq(a).eq(a,b,c)},
IF(a,b){return J.K(a).sm(a,b)},
IG(a,b,c,d,e){return J.aA(a).ai(a,b,c,d,e)},
pS(a,b){return J.aA(a).bm(a,b)},
EF(a,b){return J.aA(a).cq(a,b)},
IH(a,b){return J.Cq(a).d2(a,b)},
II(a,b){return J.Cq(a).S(a,b)},
IJ(a,b,c){return J.aA(a).U(a,b,c)},
D0(a,b){return J.aA(a).cY(a,b)},
IK(a){return J.aA(a).cZ(a)},
D1(a){return J.aA(a).co(a)},
Z(a){return J.cE(a).l(a)},
IL(a,b){return J.aA(a).dB(a,b)},
mt:function mt(){},
mv:function mv(){},
iT:function iT(){},
aI:function aI(){},
dH:function dH(){},
n2:function n2(){},
dX:function dX(){},
bS:function bS(){},
bx:function bx(){},
fM:function fM(){},
z:function z(a){this.$ti=a},
mu:function mu(){},
u_:function u_(a){this.$ti=a},
fp:function fp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eA:function eA(){},
iS:function iS(){},
mw:function mw(){},
dF:function dF(){}},A={Dl:function Dl(){},
fr(a,b,c){if(t.O.b(a))return new A.k7(a,b.i("@<0>").Z(c).i("k7<1,2>"))
return new A.en(a,b.i("@<0>").Z(c).i("en<1,2>"))},
Fe(a){return new A.dG("Field '"+a+"' has been assigned during initialization.")},
Ff(a){return new A.dG("Field '"+a+"' has not been initialized.")},
JF(a){return new A.dG("Field '"+a+"' has already been initialized.")},
eO(a){return new A.ne(a)},
Cw(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
az(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hn(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cD(a,b,c){return a},
Em(a){var s,r
for(s=$.fb.length,r=0;r<s;++r)if(a===$.fb[r])return!0
return!1},
cx(a,b,c,d){A.bf(b,"start")
if(c!=null){A.bf(c,"end")
if(b>c)A.v(A.ax(b,0,c,"start",null))}return new A.cw(a,b,c,d.i("cw<0>"))},
dK(a,b,c,d){if(t.O.b(a))return new A.ev(a,b,c.i("@<0>").Z(d).i("ev<1,2>"))
return new A.co(a,b,c.i("@<0>").Z(d).i("co<1,2>"))},
FE(a,b,c){var s="takeCount"
A.l8(b,s)
A.bf(b,s)
if(t.O.b(a))return new A.iz(a,b,c.i("iz<0>"))
return new A.eS(a,b,c.i("eS<0>"))},
FC(a,b,c){var s="count"
if(t.O.b(a)){A.l8(b,s)
A.bf(b,s)
return new A.fC(a,b,c.i("fC<0>"))}A.l8(b,s)
A.bf(b,s)
return new A.de(a,b,c.i("de<0>"))},
aH(){return new A.bp("No element")},
iQ(){return new A.bp("Too many elements")},
F7(){return new A.bp("Too few elements")},
nv(a,b,c,d){if(c-b<=32)A.Ko(a,b,c,d)
else A.Kn(a,b,c,d)},
Ko(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.K(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Kn(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.K(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
p=J.y(a6.$2(a,a1),0)
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
A.nv(a3,a4,r-2,a6)
A.nv(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.y(a6.$2(c.h(a3,r),a),0))++r
while(J.y(a6.$2(c.h(a3,q),a1),0))--q
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
break}}A.nv(a3,r,q,a6)}else A.nv(a3,r,q,a6)},
zV:function zV(a){this.a=0
this.b=a},
zt:function zt(a){this.a=0
this.b=a},
e1:function e1(){},
lr:function lr(a,b){this.a=a
this.$ti=b},
en:function en(a,b){this.a=a
this.$ti=b},
k7:function k7(a,b){this.a=a
this.$ti=b},
k4:function k4(){},
zu:function zu(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
eo:function eo(a,b){this.a=a
this.$ti=b},
qk:function qk(a,b){this.a=a
this.b=b},
qj:function qj(a){this.a=a},
dG:function dG(a){this.a=a},
ne:function ne(a){this.a=a},
cm:function cm(a){this.a=a},
CD:function CD(){},
xC:function xC(){},
L:function L(){},
a1:function a1(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
ev:function ev(a,b,c){this.a=a
this.b=b
this.$ti=c},
mI:function mI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.$ti=c},
ao:function ao(a,b,c){this.a=a
this.b=b
this.$ti=c},
cY:function cY(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.$ti=c},
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eS:function eS(a,b,c){this.a=a
this.b=b
this.$ti=c},
iz:function iz(a,b,c){this.a=a
this.b=b
this.$ti=c},
nW:function nW(a,b,c){this.a=a
this.b=b
this.$ti=c},
de:function de(a,b,c){this.a=a
this.b=b
this.$ti=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.$ti=c},
nu:function nu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ew:function ew(a){this.$ti=a},
lV:function lV(a){this.$ti=a},
e_:function e_(a,b){this.a=a
this.$ti=b},
ol:function ol(a,b){this.a=a
this.$ti=b},
iH:function iH(){},
o7:function o7(){},
hr:function hr(){},
bA:function bA(a,b){this.a=a
this.$ti=b},
jQ:function jQ(a){this.a=a},
kF:function kF(){},
J2(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bI(new A.S(a,m.i("S<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aL(q,A.bI(new A.am(a,m.i("am<2>")),!0,c),b.i("@<0>").Z(c).i("aL<1,2>"))
n.$keys=l
return n}return new A.iv(A.bo(a,b,c),b.i("@<0>").Z(c).i("iv<1,2>"))},
J3(){throw A.b(A.a_("Cannot modify unmodifiable Map"))},
J4(){throw A.b(A.a_("Cannot modify constant Set"))},
HR(a){var s=A.HQ(a)
if(s!=null)return s
return"minified:"+a},
Hw(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
return s},
eL(a){var s,r=$.Fr
if(r==null)r=$.Fr=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
h0(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
K5(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.c0(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
n5(a){var s,r,q,p
if(a instanceof A.k)return A.c_(A.bk(a),null)
s=J.cE(a)
if(s===B.cu||s===B.cw||t.cx.b(a)){r=B.aW(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.c_(A.bk(a),null)},
Ft(a){var s,r,q
if(a==null||typeof a=="number"||A.bv(a))return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eq)return a.l(0)
if(a instanceof A.hM)return a.mx(!0)
s=$.Is()
for(r=0;r<1;++r){q=s[r].xy(a)
if(q!=null)return q}return"Instance of '"+A.n5(a)+"'"},
K1(){return Date.now()},
K4(){var s,r
if($.wJ!==0)return
$.wJ=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.wJ=1e6
$.n6=new A.wI(r)},
K0(){if(!!self.location)return self.location.href
return null},
Fq(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
K6(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
if(!A.al(q))throw A.b(A.fd(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ag(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fd(q))}return A.Fq(p)},
Fu(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.al(q))throw A.b(A.fd(q))
if(q<0)throw A.b(A.fd(q))
if(q>65535)return A.K6(a)}return A.Fq(a)},
K7(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bz(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ag(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ax(a,0,1114111,null,null))},
K8(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.am(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
by(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Dw(a){return a.c?A.by(a).getUTCFullYear()+0:A.by(a).getFullYear()+0},
Du(a){return a.c?A.by(a).getUTCMonth()+1:A.by(a).getMonth()+1},
wH(a){return a.c?A.by(a).getUTCDate()+0:A.by(a).getDate()+0},
Ds(a){return a.c?A.by(a).getUTCHours()+0:A.by(a).getHours()+0},
Dt(a){return a.c?A.by(a).getUTCMinutes()+0:A.by(a).getMinutes()+0},
Dv(a){return a.c?A.by(a).getUTCSeconds()+0:A.by(a).getSeconds()+0},
Fs(a){return a.c?A.by(a).getUTCMilliseconds()+0:A.by(a).getMilliseconds()+0},
K3(a){return B.c.am((a.c?A.by(a).getUTCDay()+0:A.by(a).getDay()+0)+6,7)+1},
K2(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
n7(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aR(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
Ck(a,b){var s,r="index"
if(!A.al(b))return new A.bE(!0,b,r,null)
s=J.au(a)
if(b<0||b>=s)return A.mq(b,s,a,null,r)
return A.xn(b,r)},
NH(a,b,c){if(a<0||a>c)return A.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ax(b,a,c,"end",null)
return new A.bE(!0,b,"end",null)},
fd(a){return new A.bE(!0,a,null,null)},
b(a){return A.aR(a,new Error())},
aR(a,b){var s
if(a==null)a=new A.dj()
b.dartException=a
s=A.Ou
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Ou(){return J.Z(this.dartException)},
v(a,b){throw A.aR(a,b==null?new Error():b)},
I(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.v(A.M7(a,b,c),s)},
M7(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cX("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.b(A.aC(a))},
dk(a){var s,r,q,p,o,n
a=A.HF(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.yq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
yr(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
FI(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Dm(a,b){var s=b==null,r=s?null:b.method
return new A.mx(a,r,s?null:b.receiver)},
D(a){if(a==null)return new A.mW(a)
if(a instanceof A.iB)return A.eg(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.eg(a,a.dartException)
return A.N2(a)},
eg(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
N2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ag(r,16)&8191)===10)switch(q){case 438:return A.eg(a,A.Dm(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.eg(a,new A.jl())}}if(a instanceof TypeError){p=$.I_()
o=$.I0()
n=$.I1()
m=$.I2()
l=$.I5()
k=$.I6()
j=$.I4()
$.I3()
i=$.I8()
h=$.I7()
g=p.bW(s)
if(g!=null)return A.eg(a,A.Dm(s,g))
else{g=o.bW(s)
if(g!=null){g.method="call"
return A.eg(a,A.Dm(s,g))}else if(n.bW(s)!=null||m.bW(s)!=null||l.bW(s)!=null||k.bW(s)!=null||j.bW(s)!=null||m.bW(s)!=null||i.bW(s)!=null||h.bW(s)!=null)return A.eg(a,new A.jl())}return A.eg(a,new A.o6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eg(a,new A.bE(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jK()
return a},
ad(a){var s
if(a instanceof A.iB)return a.b
if(a==null)return new A.kq(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.kq(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kT(a){if(a==null)return J.a9(a)
if(typeof a=="object")return A.eL(a)
return J.a9(a)},
Nv(a){if(typeof a=="number")return B.w.gJ(a)
if(a instanceof A.pm)return A.eL(a)
if(a instanceof A.hM)return a.gJ(a)
if(a instanceof A.jQ)return a.gJ(0)
return A.kT(a)},
Ht(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
NQ(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
Mk(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.EY("Unsupported number of arguments for wrapped closure"))},
ef(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.NA(a,b)
a.$identity=s
return s},
NA(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Mk)},
IX(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.xN().constructor.prototype):Object.create(new A.il(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ES(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.IT(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ES(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
IT(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.IO)}throw A.b("Error in functionType of tearoff")},
IU(a,b,c,d){var s=A.EP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ES(a,b,c,d){if(c)return A.IW(a,b,d)
return A.IU(b.length,d,a,b)},
IV(a,b,c,d){var s=A.EP,r=A.IP
switch(b?-1:a){case 0:throw A.b(new A.nn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
IW(a,b,c){var s,r
if($.EN==null)$.EN=A.EM("interceptor")
if($.EO==null)$.EO=A.EM("receiver")
s=b.length
r=A.IV(s,c,a,b)
return r},
Ed(a){return A.IX(a)},
IO(a,b){return A.kz(v.typeUniverse,A.bk(a.a),b)},
EP(a){return a.a},
IP(a){return a.b},
EM(a){var s,r,q,p=new A.il("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.R("Field name "+a+" not found.",null))},
Cr(a){return v.getIsolateTag(a)},
Ox(a,b){var s=$.B
if(s===B.i)return a
return s.hS(a,b)},
HK(){return v.G},
PE(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
O7(a){var s,r,q,p,o,n=$.Hu.$1(a),m=$.Cl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.CA[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.He.$2(a,n)
if(q!=null){m=$.Cl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.CA[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.CC(s)
$.Cl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.CA[n]=s
return s}if(p==="-"){o=A.CC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.HC(a,s)
if(p==="*")throw A.b(A.FJ(n))
if(v.leafTags[n]===true){o=A.CC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.HC(a,s)},
HC(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.En(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
CC(a){return J.En(a,!1,null,!!a.$ibT)},
O9(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.CC(s)
else return J.En(s,c,null,null)},
O_(){if(!0===$.El)return
$.El=!0
A.O0()},
O0(){var s,r,q,p,o,n,m,l
$.Cl=Object.create(null)
$.CA=Object.create(null)
A.NZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.HE.$1(o)
if(n!=null){m=A.O9(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
NZ(){var s,r,q,p,o,n,m=B.bP()
m=A.i3(B.bQ,A.i3(B.bR,A.i3(B.aX,A.i3(B.aX,A.i3(B.bS,A.i3(B.bT,A.i3(B.bU(B.aW),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Hu=new A.Cx(p)
$.He=new A.Cy(o)
$.HE=new A.Cz(n)},
i3(a,b){return a(b)||b},
Ll(a,b){var s
for(s=0;s<a.length;++s)if(!J.y(a[s],b[s]))return!1
return!0},
NE(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Dk(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.aa("Illegal RegExp pattern ("+String(o)+")",a,null))},
On(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eB){s=B.a.ab(a,c)
return b.b.test(s)}else return!J.CY(b,B.a.ab(a,c)).gF(0)},
Hr(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
HF(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C(a,b,c){var s
if(typeof b=="string")return A.Op(a,b,c)
if(b instanceof A.eB){s=b.gm1()
s.lastIndex=0
return a.replace(s,A.Hr(c))}return A.Oo(a,b,c)},
Oo(a,b,c){var s,r,q,p
for(s=J.CY(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Op(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.HF(b),"g"),A.Hr(c))},
H5(a){return a},
HL(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hN(0,a),s=new A.os(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.q(A.H5(B.a.B(a,q,m)))+A.q(c.$1(o))
q=m+n[0].length}s=p+A.q(A.H5(B.a.ab(a,q)))
return s.charCodeAt(0)==0?s:s},
Oq(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.HM(a,s,s+b.length,c)},
HM(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a6:function a6(a,b){this.a=a
this.b=b},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
p4:function p4(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.a=a},
p5:function p5(a){this.a=a},
iv:function iv(a,b){this.a=a
this.$ti=b},
fx:function fx(){},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
f3:function f3(a,b){this.a=a
this.$ti=b},
hJ:function hJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iL:function iL(a,b){this.a=a
this.$ti=b},
iw:function iw(){},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
tU:function tU(){},
iP:function iP(a,b){this.a=a
this.$ti=b},
wI:function wI(a){this.a=a},
jC:function jC(){},
yq:function yq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jl:function jl(){},
mx:function mx(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function o6(a){this.a=a},
mW:function mW(a){this.a=a},
iB:function iB(a,b){this.a=a
this.b=b},
kq:function kq(a){this.a=a
this.b=null},
eq:function eq(){},
qp:function qp(){},
qq:function qq(){},
ye:function ye(){},
xN:function xN(){},
il:function il(a,b){this.a=a
this.b=b},
nn:function nn(a){this.a=a},
bG:function bG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
u0:function u0(a){this.a=a},
v3:function v3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
S:function S(a,b){this.a=a
this.$ti=b},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
am:function am(a,b){this.a=a
this.$ti=b},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
mF:function mF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iV:function iV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iU:function iU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Cx:function Cx(a){this.a=a},
Cy:function Cy(a){this.a=a},
Cz:function Cz(a){this.a=a},
hM:function hM(){},
p1:function p1(){},
p2:function p2(){},
p3:function p3(){},
eB:function eB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a){this.b=a},
or:function or(a,b,c){this.a=a
this.b=b
this.c=c},
os:function os(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hk:function hk(a,b){this.a=a
this.c=b},
ph:function ph(a,b,c){this.a=a
this.b=b
this.c=c},
Bb:function Bb(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Ot(a){throw A.aR(A.Fe(a),new Error())},
t(){throw A.aR(A.Ff(""),new Error())},
eh(){throw A.aR(A.JF(""),new Error())},
CT(){throw A.aR(A.Fe(""),new Error())},
oB(){var s=new A.oA("")
return s.b=s},
zv(a){var s=new A.oA(a)
return s.b=s},
oA:function oA(a){this.a=a
this.b=null},
hZ(a,b,c){},
bc(a){var s,r,q
if(t.iy.b(a))return a
s=J.K(a)
r=A.a8(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
JT(a){return new DataView(new ArrayBuffer(a))},
Fl(a,b,c){A.hZ(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d9(a,b,c){A.hZ(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
JU(a){return new Int8Array(a)},
JV(a){return new Uint16Array(a)},
Fm(a,b,c){A.hZ(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
vQ(a){return new Uint8Array(a)},
bV(a,b,c){A.hZ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dr(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.Ck(b,a))},
ds(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.NH(a,b,c))
if(b==null)return c
return b},
fV:function fV(){},
fU:function fU(){},
jg:function jg(){},
pp:function pp(a){this.a=a},
jf:function jf(){},
fW:function fW(){},
dO:function dO(){},
bU:function bU(){},
mP:function mP(){},
mQ:function mQ(){},
mR:function mR(){},
mS:function mS(){},
mT:function mT(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
eH:function eH(){},
kj:function kj(){},
kk:function kk(){},
kl:function kl(){},
km:function km(){},
Dz(a,b){var s=b.c
return s==null?b.c=A.kx(a,"x",[b.x]):s},
Fz(a){var s=a.w
if(s===6||s===7)return A.Fz(a.x)
return s===11||s===12},
Ki(a){return a.as},
HB(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ae(a){return A.Bh(v.typeUniverse,a,!1)},
O2(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.ed(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
ed(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ed(a1,s,a3,a4)
if(r===s)return a2
return A.Ge(a1,r,!0)
case 7:s=a2.x
r=A.ed(a1,s,a3,a4)
if(r===s)return a2
return A.Gd(a1,r,!0)
case 8:q=a2.y
p=A.i2(a1,q,a3,a4)
if(p===q)return a2
return A.kx(a1,a2.x,p)
case 9:o=a2.x
n=A.ed(a1,o,a3,a4)
m=a2.y
l=A.i2(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.DV(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.i2(a1,j,a3,a4)
if(i===j)return a2
return A.Gf(a1,k,i)
case 11:h=a2.x
g=A.ed(a1,h,a3,a4)
f=a2.y
e=A.MY(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Gc(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.i2(a1,d,a3,a4)
o=a2.x
n=A.ed(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.DW(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.lc("Attempted to substitute unexpected RTI kind "+a0))}},
i2(a,b,c,d){var s,r,q,p,o=b.length,n=A.Br(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ed(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
MZ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.Br(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ed(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
MY(a,b,c,d){var s,r=b.a,q=A.i2(a,r,c,d),p=b.b,o=A.i2(a,p,c,d),n=b.c,m=A.MZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.oP()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
pG(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.NU(s)
return a.$S()}return null},
O1(a,b){var s
if(A.Fz(b))if(a instanceof A.eq){s=A.pG(a)
if(s!=null)return s}return A.bk(a)},
bk(a){if(a instanceof A.k)return A.n(a)
if(Array.isArray(a))return A.a0(a)
return A.E5(J.cE(a))},
a0(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.E5(a)},
E5(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Mi(a,s)},
Mi(a,b){var s=a instanceof A.eq?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Lv(v.typeUniverse,s.name)
b.$ccache=r
return r},
NU(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.Bh(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
d2(a){return A.bM(A.n(a))},
Ek(a){var s=A.pG(a)
return A.bM(s==null?A.bk(a):s)},
E9(a){var s
if(a instanceof A.hM)return a.lQ()
s=a instanceof A.eq?A.pG(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c2(a).a
if(Array.isArray(a))return A.a0(a)
return A.bk(a)},
bM(a){var s=a.r
return s==null?a.r=new A.pm(a):s},
NL(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kz(v.typeUniverse,A.E9(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Gh(v.typeUniverse,s,A.E9(q[r]))
return A.kz(v.typeUniverse,s,a)},
aY(a){return A.bM(A.Bh(v.typeUniverse,a,!1))},
Mh(a){var s=this
s.b=A.MW(s)
return s.b(a)},
MW(a){var s,r,q,p
if(a===t.K)return A.Mq
if(A.fg(a))return A.Mu
s=a.w
if(s===6)return A.Me
if(s===1)return A.GM
if(s===7)return A.Ml
r=A.MV(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fg)){a.f="$i"+q
if(q==="r")return A.Mo
if(a===t.m)return A.Mn
return A.Mt}}else if(s===10){p=A.NE(a.x,a.y)
return p==null?A.GM:p}return A.Mc},
MV(a){if(a.w===8){if(a===t.S)return A.al
if(a===t.W||a===t.cZ)return A.Mp
if(a===t.N)return A.Ms
if(a===t.y)return A.bv}return null},
Mg(a){var s=this,r=A.Mb
if(A.fg(s))r=A.LJ
else if(s===t.K)r=A.LI
else if(A.i6(s)){r=A.Md
if(s===t.aV)r=A.bh
else if(s===t.U)r=A.a7
else if(s===t.o9)r=A.Gw
else if(s===t.jh)r=A.BD
else if(s===t.dA)r=A.Gx
else if(s===t.B)r=A.Gy}else if(s===t.S)r=A.ap
else if(s===t.N)r=A.G
else if(s===t.y)r=A.hY
else if(s===t.cZ)r=A.Gz
else if(s===t.W)r=A.f9
else if(s===t.m)r=A.bi
s.a=r
return s.a(a)},
Mc(a){var s=this
if(a==null)return A.i6(s)
return A.O5(v.typeUniverse,A.O1(a,s),s)},
Me(a){if(a==null)return!0
return this.x.b(a)},
Mt(a){var s,r=this
if(a==null)return A.i6(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cE(a)[s]},
Mo(a){var s,r=this
if(a==null)return A.i6(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cE(a)[s]},
Mn(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
GL(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Mb(a){var s=this
if(a==null){if(A.i6(s))return a}else if(s.b(a))return a
throw A.aR(A.GF(a,s),new Error())},
Md(a){var s=this
if(a==null||s.b(a))return a
throw A.aR(A.GF(a,s),new Error())},
GF(a,b){return new A.kv("TypeError: "+A.G3(a,A.c_(b,null)))},
G3(a,b){return A.iA(a)+": type '"+A.c_(A.E9(a),null)+"' is not a subtype of type '"+b+"'"},
cj(a,b){return new A.kv("TypeError: "+A.G3(a,b))},
Ml(a){var s=this
return s.x.b(a)||A.Dz(v.typeUniverse,s).b(a)},
Mq(a){return a!=null},
LI(a){if(a!=null)return a
throw A.aR(A.cj(a,"Object"),new Error())},
Mu(a){return!0},
LJ(a){return a},
GM(a){return!1},
bv(a){return!0===a||!1===a},
hY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aR(A.cj(a,"bool"),new Error())},
Gw(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aR(A.cj(a,"bool?"),new Error())},
f9(a){if(typeof a=="number")return a
throw A.aR(A.cj(a,"double"),new Error())},
Gx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cj(a,"double?"),new Error())},
al(a){return typeof a=="number"&&Math.floor(a)===a},
ap(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aR(A.cj(a,"int"),new Error())},
bh(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aR(A.cj(a,"int?"),new Error())},
Mp(a){return typeof a=="number"},
Gz(a){if(typeof a=="number")return a
throw A.aR(A.cj(a,"num"),new Error())},
BD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cj(a,"num?"),new Error())},
Ms(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.aR(A.cj(a,"String"),new Error())},
a7(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aR(A.cj(a,"String?"),new Error())},
bi(a){if(A.GL(a))return a
throw A.aR(A.cj(a,"JSObject"),new Error())},
Gy(a){if(a==null)return a
if(A.GL(a))return a
throw A.aR(A.cj(a,"JSObject?"),new Error())},
H0(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.c_(a[q],b)
return s},
MJ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.H0(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.c_(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
GJ(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.c_(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.c_(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.c_(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.c_(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.c_(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
c_(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.c_(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.c_(a.x,b)+">"
if(m===8){p=A.N1(a.x)
o=a.y
return o.length>0?p+("<"+A.H0(o,b)+">"):p}if(m===10)return A.MJ(a,b)
if(m===11)return A.GJ(a,b,null)
if(m===12)return A.GJ(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
N1(a){var s=A.HQ(a)
if(s!=null)return s
return"minified:"+a},
Lw(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Lv(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.Bh(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ky(a,5,"#")
q=A.Br(s)
for(p=0;p<s;++p)q[p]=r
o=A.kx(a,b,q)
n[b]=o
return o}else return m},
Lu(a,b){return A.Gu(a.tR,b)},
Lt(a,b){return A.Gu(a.eT,b)},
Bh(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Gg(a,null,b,!1)
r.set(b,s)
return s},
kz(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Gg(a,b,c,!0)
q.set(c,r)
return r},
Gh(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.DV(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Gg(a,b,c,d){return A.Lj(A.Ld(a,b,c,d))},
eb(a,b){b.a=A.Mg
b.b=A.Mh
return b},
ky(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cs(null,null)
s.w=b
s.as=c
r=A.eb(a,s)
a.eC.set(c,r)
return r},
Ge(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Lr(a,b,r,c)
a.eC.set(r,s)
return s},
Lr(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fg(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.i6(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cs(null,null)
q.w=6
q.x=b
q.as=c
return A.eb(a,q)},
Gd(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Lp(a,b,r,c)
a.eC.set(r,s)
return s},
Lp(a,b,c,d){var s,r
if(d){s=b.w
if(A.fg(b)||b===t.K)return b
else if(s===1)return A.kx(a,"x",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cs(null,null)
r.w=7
r.x=b
r.as=c
return A.eb(a,r)},
Ls(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cs(null,null)
s.w=13
s.x=b
s.as=q
r=A.eb(a,s)
a.eC.set(q,r)
return r},
kw(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Lo(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kx(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kw(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cs(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eb(a,r)
a.eC.set(p,q)
return q},
DV(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kw(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cs(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eb(a,o)
a.eC.set(q,n)
return n},
Gf(a,b,c){var s,r,q="+"+(b+"("+A.kw(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cs(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eb(a,s)
a.eC.set(q,r)
return r},
Gc(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kw(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kw(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Lo(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cs(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eb(a,p)
a.eC.set(r,o)
return o},
DW(a,b,c,d){var s,r=b.as+("<"+A.kw(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Lq(a,b,c,r,d)
a.eC.set(r,s)
return s},
Lq(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.Br(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ed(a,b,r,0)
m=A.i2(a,c,r,0)
return A.DW(a,n,m,c!==m)}}l=new A.cs(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eb(a,l)},
Ld(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Lj(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Lf(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.G8(a,r,l,k,!1)
else if(q===46)r=A.G8(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f5(a.u,a.e,k.pop()))
break
case 94:k.push(A.Ls(a.u,k.pop()))
break
case 35:k.push(A.ky(a.u,5,"#"))
break
case 64:k.push(A.ky(a.u,2,"@"))
break
case 126:k.push(A.ky(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Lh(a,k)
break
case 38:A.Lg(a,k)
break
case 63:p=a.u
k.push(A.Ge(p,A.f5(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Gd(p,A.f5(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Le(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.G9(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Lk(a.u,a.e,o)
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
return A.f5(a.u,a.e,m)},
Lf(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
G8(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Lw(s,o.x)[p]
if(n==null)A.v('No "'+p+'" in "'+A.Ki(o)+'"')
d.push(A.kz(s,o,n))}else d.push(p)
return m},
Lh(a,b){var s,r=a.u,q=A.G7(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kx(r,p,q))
else{s=A.f5(r,a.e,p)
switch(s.w){case 11:b.push(A.DW(r,s,q,a.n))
break
default:b.push(A.DV(r,s,q))
break}}},
Le(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.G7(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f5(p,a.e,o)
q=new A.oP()
q.a=s
q.b=n
q.c=m
b.push(A.Gc(p,r,q))
return
case-4:b.push(A.Gf(p,b.pop(),s))
return
default:throw A.b(A.lc("Unexpected state under `()`: "+A.q(o)))}},
Lg(a,b){var s=b.pop()
if(0===s){b.push(A.ky(a.u,1,"0&"))
return}if(1===s){b.push(A.ky(a.u,4,"1&"))
return}throw A.b(A.lc("Unexpected extended operation "+A.q(s)))},
G7(a,b){var s=b.splice(a.p)
A.G9(a.u,a.e,s)
a.p=b.pop()
return s},
f5(a,b,c){if(typeof c=="string")return A.kx(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Li(a,b,c)}else return c},
G9(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f5(a,b,c[s])},
Lk(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f5(a,b,c[s])},
Li(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.lc("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.lc("Bad index "+c+" for "+b.l(0)))},
O5(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aW(a,b,null,c,null)
r.set(c,s)}return s},
aW(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fg(d))return!0
s=b.w
if(s===4)return!0
if(A.fg(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aW(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aW(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aW(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aW(a,b.x,c,d,e))return!1
return A.aW(a,A.Dz(a,b),c,d,e)}if(s===6)return A.aW(a,p,c,d,e)&&A.aW(a,b.x,c,d,e)
if(q===7){if(A.aW(a,b,c,d.x,e))return!0
return A.aW(a,b,c,A.Dz(a,d),e)}if(q===6)return A.aW(a,b,c,p,e)||A.aW(a,b,c,d.x,e)
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
if(!A.aW(a,j,c,i,e)||!A.aW(a,i,e,j,c))return!1}return A.GK(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.GK(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Mm(a,b,c,d,e)}if(o&&q===10)return A.Mr(a,b,c,d,e)
return!1},
GK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aW(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aW(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aW(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aW(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aW(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Mm(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kz(a,b,r[o])
return A.Gv(a,p,null,c,d.y,e)}return A.Gv(a,b.y,null,c,d.y,e)},
Gv(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aW(a,b[s],d,e[s],f))return!1
return!0},
Mr(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aW(a,r[s],c,q[s],e))return!1
return!0},
i6(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fg(a))if(s!==6)r=s===7&&A.i6(a.x)
return r},
fg(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Gu(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
Br(a){return a>0?new Array(a):v.typeUniverse.sEA},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
oP:function oP(){this.c=this.b=this.a=null},
pm:function pm(a){this.a=a},
oM:function oM(){},
kv:function kv(a){this.a=a},
KK(){var s,r,q
if(self.scheduleImmediate!=null)return A.N4()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ef(new A.zb(s),1)).observe(r,{childList:true})
return new A.za(s,r,q)}else if(self.setImmediate!=null)return A.N5()
return A.N6()},
KL(a){self.scheduleImmediate(A.ef(new A.zc(a),0))},
KM(a){self.setImmediate(A.ef(new A.zd(a),0))},
KN(a){A.DJ(B.D,a)},
DJ(a,b){var s=B.c.M(a.a,1000)
return A.Lm(s<0?0:s,b)},
FF(a,b){var s=B.c.M(a.a,1000)
return A.Ln(s<0?0:s,b)},
Lm(a,b){var s=new A.ku(!0)
s.pk(a,b)
return s},
Ln(a,b){var s=new A.ku(!1)
s.pl(a,b)
return s},
h(a){return new A.jY(new A.w($.B,a.i("w<0>")),a.i("jY<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.GA(a,b)},
e(a,b){b.aA(a)},
d(a,b){b.bt(A.D(a),A.ad(a))},
GA(a,b){var s,r,q=new A.BG(b),p=new A.BH(b)
if(a instanceof A.w)a.mv(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.b0(q,p,s)
else{r=new A.w($.B,t._)
r.a=8
r.c=a
r.mv(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.B.fE(new A.C5(s),t.H,t.S,t.z)},
bY(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.d5(null)
else{s=c.a
s===$&&A.t()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.D(a)
q=A.ad(a)
s.an(new A.aq(r,q))}else{s=A.D(a)
r=A.ad(a)
q=c.a
q===$&&A.t()
q.bg(s,r)
c.a.q()}return}if(a instanceof A.kf){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.t()
r.u(0,s)
A.kW(new A.BE(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.t()
s.u6(p,!1).W(new A.BF(c,b),t.P)
return}}A.GA(a,b)},
H4(a){var s=a.a
s===$&&A.t()
return new A.ba(s,A.n(s).i("ba<1>"))},
KO(a,b){var s=new A.ou(b.i("ou<0>"))
s.pg(a,b)
return s},
GN(a,b){return A.KO(a,b)},
L9(a){return new A.kf(a,1)},
e4(a){return new A.kf(a,0)},
Gb(a,b,c){return 0},
ig(a){var s
if(t.C.b(a)){s=a.gcr()
if(s!=null)return s}return B.R},
iK(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.D(q)
r=A.ad(q)
p=new A.w($.B,b.i("w<0>"))
o=s
n=r
m=A.kG(o,n)
if(m==null)o=new A.aq(o,n==null?A.ig(o):n)
else o=m
p.ct(o)
return p}return b.i("x<0>").b(l)?l:A.bB(l,b)},
bd(a,b){var s=a==null?b.a(a):a,r=new A.w($.B,b.i("w<0>"))
r.aF(s)
return r},
Jp(a,b){var s
if(!b.b(null))throw A.b(A.aB(null,"computation","The type parameter is not nullable"))
s=new A.w($.B,b.i("w<0>"))
A.bX(a,new A.tp(null,s,b))
return s},
Dd(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.B,b.i("w<r<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.tr(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.b0(new A.tq(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.d5(A.l([],b.i("z<0>")))
return n}i.a=A.a8(n,null,!1,b.i("0?"))}catch(l){p=A.D(l)
o=A.ad(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kG(m,k)
if(j==null)m=new A.aq(m,k==null?A.ig(m):k)
else m=j
n.ct(m)
return n}else{i.d=p
i.c=o}}return f},
Dc(a,b,c,d){var s=new A.tk(d,null,b,c),r=$.B,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fE(s,c.i("0/"),t.K,t.l)
a.dK(new A.ch(q,2,null,s,a.$ti.i("@<1>").Z(c).i("ch<1,2>")))
return q},
Jn(a,b){var s,r,q,p=A.l([],b.i("z<kd<0>>"))
for(s=a.length,r=b.i("kd<0>"),q=0;q<a.length;a.length===s||(0,A.p)(a),++q)p.push(new A.kd(a[q],r))
if(p.length===0)return A.bd(A.l([],b.i("z<0>")),b.i("r<0>"))
s=new A.w($.B,b.i("w<r<0>>"))
A.L3(p,new A.tl(new A.as(s,b.i("as<r<0>>")),p,b))
return s},
My(a){return a!=null},
L3(a,b){var s,r={},q=r.a=r.b=0,p=new A.Aa(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.p)(a),++q)a[q].tO(p)},
kG(a,b){var s,r,q,p=$.B
if(p===B.i)return null
s=p.n2(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.n7(r,q)
return s},
fa(a,b){var s
if($.B!==B.i){s=A.kG(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcr()
if(b==null){A.n7(a,B.R)
b=B.R}}else b=B.R
else if(t.C.b(a))A.n7(a,b)
return new A.aq(a,b)},
L2(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bB(a,b){var s=new A.w($.B,b.i("w<0>"))
s.a=8
s.c=a
return s},
Ag(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.DC()
b.ct(new A.aq(new A.bE(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.m8(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eX()
b.h6(p.a)
A.f1(b,q)
return}b.a^=2
b.b.d0(new A.Ah(p,b))},
f1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fl(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.f1(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gce()===k.gce())}else f=!1
if(f){f=g.a
r=f.c
f.b.fl(r.a,r.b)
return}j=$.B
if(j!==k)$.B=k
else j=null
f=s.a.c
if((f&15)===8)new A.Al(s,g,p).$0()
else if(q){if((f&1)!==0)new A.Ak(s,m).$0()}else if((f&2)!==0)new A.Aj(g,s).$0()
if(j!=null)$.B=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("x<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hw(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.Ag(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hw(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
GT(a,b){if(t.ng.b(a))return b.fE(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.du(a,t.z,t.K)
throw A.b(A.aB(a,"onError",u.w))},
Mx(){var s,r
for(s=$.i0;s!=null;s=$.i0){$.kI=null
r=s.b
$.i0=r
if(r==null)$.kH=null
s.a.$0()}},
MX(){$.E6=!0
try{A.Mx()}finally{$.kI=null
$.E6=!1
if($.i0!=null)$.Ew().$1(A.Hh())}},
H2(a){var s=new A.ot(a),r=$.kH
if(r==null){$.i0=$.kH=s
if(!$.E6)$.Ew().$1(A.Hh())}else $.kH=r.b=s},
MU(a){var s,r,q,p=$.i0
if(p==null){A.H2(a)
$.kI=$.kH
return}s=new A.ot(a)
r=$.kI
if(r==null){s.b=p
$.i0=$.kI=s}else{q=r.b
s.b=q
$.kI=r.b=s
if(q==null)$.kH=s}},
kW(a){var s,r=null,q=$.B
if(B.i===q){A.C3(r,r,B.i,a)
return}if(B.i===q.gjP().a)s=B.i.gce()===q.gce()
else s=!1
if(s){A.C3(r,r,q,q.bZ(a,t.H))
return}s=$.B
s.d0(s.f4(a))},
DE(a,b){var s=null,r=b.i("cZ<0>"),q=new A.cZ(s,s,s,s,r)
q.aC(a)
q.lo()
return new A.ba(q,r.i("ba<1>"))},
OS(a,b){return new A.cC(A.cD(a,"stream",t.K),b.i("cC<0>"))},
nE(a,b,c,d,e,f){return e?new A.hT(b,c,d,a,f.i("hT<0>")):new A.cZ(b,c,d,a,f.i("cZ<0>"))},
dT(a,b,c){return new A.jZ(b,a,c.i("jZ<0>"))},
pC(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.D(q)
r=A.ad(q)
$.B.fl(s,r)}},
L0(a,b,c,d,e,f){var s=$.B,r=e?1:0,q=c!=null?32:0,p=A.oy(s,b,f),o=A.zq(s,c),n=d==null?A.C7():d
return new A.e2(a,p,o,s.bZ(n,t.H),s,r|q,f.i("e2<0>"))},
KJ(a){return new A.z7(a)},
oy(a,b,c){var s=b==null?A.N8():b
return a.du(s,t.H,c)},
zq(a,b){if(b==null)b=A.N9()
if(t.b9.b(b))return a.fE(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.du(b,t.z,t.K)
throw A.b(A.R("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Mz(a){},
MB(a,b){$.B.fl(a,b)},
MA(){},
G2(a,b){var s=$.B,r=new A.hF(s,b.i("hF<0>"))
A.kW(r.gm4())
if(a!=null)r.c=s.bZ(a,t.H)
return r},
LR(a,b,c){var s=a.v()
if(s!==$.ei())s.b2(new A.BJ(b,c))
else b.an(c)},
LS(a,b,c){var s=a.v()
if(s!==$.ei())s.b2(new A.BK(b,c))
else b.cu(c)},
bX(a,b){var s=$.B
if(s===B.i)return s.kc(a,b)
return s.kc(a,s.f4(b))},
yf(a,b){var s,r=$.B
if(r===B.i)return r.kb(a,b)
s=r.hS(b,t.hU)
return $.B.kb(a,s)},
pJ(a,b,c,d){return A.MT(a,c,b,d)},
MT(a,b,c,d){return $.B.n6(c,b).b_(a,d)},
MR(a,b,c,d,e){A.kM(d,e)},
kM(a,b){A.MU(new A.C0(a,b))},
C1(a,b,c,d){var s,r=$.B
if(r===c)return d.$0()
$.B=c
s=r
try{r=d.$0()
return r}finally{$.B=s}},
C2(a,b,c,d,e){var s,r=$.B
if(r===c)return d.$1(e)
$.B=c
s=r
try{r=d.$1(e)
return r}finally{$.B=s}},
E8(a,b,c,d,e,f){var s,r=$.B
if(r===c)return d.$2(e,f)
$.B=c
s=r
try{r=d.$2(e,f)
return r}finally{$.B=s}},
GZ(a,b,c,d){return d},
H_(a,b,c,d){return d},
GY(a,b,c,d){return d},
MQ(a,b,c,d,e){return null},
C3(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gce()
r=c.gce()
d=s!==r?c.f4(d):c.k6(d,t.H)}A.H2(d)},
MP(a,b,c,d,e){return A.DJ(d,B.i!==c?c.k6(e,t.H):e)},
MO(a,b,c,d,e){e=c.uk(e,t.H,t.hU)
return A.FF(d,e)},
MS(a,b,c,d){A.HD(d)},
GX(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.De(o,o,o,s,s)
r.D(0,e)}else r=o
s=new A.oF(c.gmi(),c.gmm(),c.gmk(),c.gme(),c.gmf(),c.gmd(),c.glI(),c.gjP(),c.glz(),c.gly(),c.gm9(),c.glN(),c.gjy(),c.gjZ(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.pv(s,q)
p=d.a
if(p!=null)s.as=new A.pu(s,p)}if(r!=null)s.at=new A.pw(s,r)
return s},
zb:function zb(a){this.a=a},
za:function za(a,b,c){this.a=a
this.b=b
this.c=c},
zc:function zc(a){this.a=a},
zd:function zd(a){this.a=a},
ku:function ku(a){this.a=a
this.b=null
this.c=0},
Bf:function Bf(a,b){this.a=a
this.b=b},
Be:function Be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jY:function jY(a,b){this.a=a
this.b=!1
this.$ti=b},
BG:function BG(a){this.a=a},
BH:function BH(a){this.a=a},
C5:function C5(a){this.a=a},
BE:function BE(a,b){this.a=a
this.b=b},
BF:function BF(a,b){this.a=a
this.b=b},
ou:function ou(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
zf:function zf(a){this.a=a},
zg:function zg(a){this.a=a},
zi:function zi(a){this.a=a},
zj:function zj(a,b){this.a=a
this.b=b},
zh:function zh(a,b){this.a=a
this.b=b},
ze:function ze(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
pj:function pj(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hS:function hS(a,b){this.a=a
this.$ti=b},
aq:function aq(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.$ti=b},
eY:function eY(a,b,c,d,e,f,g){var _=this
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
k3:function k3(){},
jZ:function jZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
tp:function tp(a,b,c){this.a=a
this.b=b
this.c=c},
tr:function tr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tq:function tq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tk:function tk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nX:function nX(a,b){this.a=a
this.b=b},
tl:function tl(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b,c){this.c=a
this.d=b
this.$ti=c},
kd:function kd(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
Ab:function Ab(a,b){this.a=a
this.b=b},
Ac:function Ac(a,b){this.a=a
this.b=b},
Aa:function Aa(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(){},
aE:function aE(a,b){this.a=a
this.$ti=b},
as:function as(a,b){this.a=a
this.$ti=b},
ch:function ch(a,b,c,d,e){var _=this
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
Ad:function Ad(a,b){this.a=a
this.b=b},
Ai:function Ai(a,b){this.a=a
this.b=b},
Ah:function Ah(a,b){this.a=a
this.b=b},
Af:function Af(a,b){this.a=a
this.b=b},
Ae:function Ae(a,b){this.a=a
this.b=b},
Al:function Al(a,b,c){this.a=a
this.b=b
this.c=c},
Am:function Am(a,b){this.a=a
this.b=b},
An:function An(a){this.a=a},
Ak:function Ak(a,b){this.a=a
this.b=b},
Aj:function Aj(a,b){this.a=a
this.b=b},
Ao:function Ao(a,b){this.a=a
this.b=b},
Ap:function Ap(a,b,c){this.a=a
this.b=b
this.c=c},
Aq:function Aq(a,b){this.a=a
this.b=b},
ot:function ot(a){this.a=a
this.b=null},
ab:function ab(){},
xR:function xR(a,b){this.a=a
this.b=b},
xS:function xS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xT:function xT(a,b){this.a=a
this.b=b},
xU:function xU(a,b){this.a=a
this.b=b},
xP:function xP(a){this.a=a},
xQ:function xQ(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(){},
e9:function e9(){},
B7:function B7(a){this.a=a},
B6:function B6(a){this.a=a},
pk:function pk(){},
k_:function k_(){},
cZ:function cZ(a,b,c,d,e){var _=this
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
ba:function ba(a,b){this.a=a
this.$ti=b},
e2:function e2(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
oq:function oq(){},
z7:function z7(a){this.a=a},
z6:function z6(a){this.a=a},
kr:function kr(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b5:function b5(){},
zs:function zs(a,b,c){this.a=a
this.b=b
this.c=c},
zr:function zr(a){this.a=a},
hR:function hR(){},
oL:function oL(){},
cg:function cg(a,b){this.b=a
this.a=null
this.$ti=b},
hE:function hE(a,b){this.b=a
this.c=b
this.a=null},
A3:function A3(){},
e7:function e7(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
AP:function AP(a,b){this.a=a
this.b=b},
hF:function hF(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cC:function cC(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
k8:function k8(a){this.$ti=a},
dp:function dp(a,b){this.b=a
this.$ti=b},
AN:function AN(a,b){this.a=a
this.b=b},
ki:function ki(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
BJ:function BJ(a,b){this.a=a
this.b=b},
BK:function BK(a,b){this.a=a
this.b=b},
kb:function kb(){},
hI:function hI(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
f4:function f4(a,b,c){this.b=a
this.a=b
this.$ti=c},
k9:function k9(a,b){this.a=a
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
k2:function k2(a,b,c){this.a=a
this.b=b
this.$ti=c},
BA:function BA(a,b){this.a=a
this.b=b},
BC:function BC(a,b){this.a=a
this.b=b},
BB:function BB(a,b){this.a=a
this.b=b},
By:function By(a,b){this.a=a
this.b=b},
Bz:function Bz(a,b){this.a=a
this.b=b},
Bx:function Bx(a,b){this.a=a
this.b=b},
Bu:function Bu(a,b){this.a=a
this.b=b},
pv:function pv(a,b){this.a=a
this.b=b},
Bt:function Bt(a,b){this.a=a
this.b=b},
Bs:function Bs(a,b){this.a=a
this.b=b},
Bw:function Bw(a,b){this.a=a
this.b=b},
Bv:function Bv(a,b){this.a=a
this.b=b},
pu:function pu(a,b){this.a=a
this.b=b},
pw:function pw(a,b){this.a=a
this.b=b},
pt:function pt(){},
oF:function oF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
A_:function A_(a,b,c){this.a=a
this.b=b
this.c=c},
A1:function A1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zZ:function zZ(a,b){this.a=a
this.b=b},
A0:function A0(a,b,c){this.a=a
this.b=b
this.c=c},
p8:function p8(){},
AW:function AW(a,b,c){this.a=a
this.b=b
this.c=c},
AV:function AV(a,b){this.a=a
this.b=b},
AX:function AX(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
C0:function C0(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
De(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dn(d.i("@<0>").Z(e).i("dn<1,2>"))
b=A.Ef()}else{if(A.Hm()===b&&A.Hl()===a)return new A.e3(d.i("@<0>").Z(e).i("e3<1,2>"))
if(a==null)a=A.Ee()}else{if(b==null)b=A.Ef()
if(a==null)a=A.Ee()}return A.L1(a,b,c,d,e)},
G4(a,b){var s=a[b]
return s===a?null:s},
DT(a,b,c){if(c==null)a[b]=a
else a[b]=c},
DS(){var s=Object.create(null)
A.DT(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
L1(a,b,c,d,e){var s=c!=null?c:new A.zY(d)
return new A.k5(a,b,s,d.i("@<0>").Z(e).i("k5<1,2>"))},
dI(a,b,c,d){if(b==null){if(a==null)return new A.bG(c.i("@<0>").Z(d).i("bG<1,2>"))
b=A.Ef()}else{if(A.Hm()===b&&A.Hl()===a)return new A.iV(c.i("@<0>").Z(d).i("iV<1,2>"))
if(a==null)a=A.Ee()}return A.Lc(a,b,null,c,d)},
m(a,b,c){return A.Ht(a,new A.bG(b.i("@<0>").Z(c).i("bG<1,2>")))},
u(a,b){return new A.bG(a.i("@<0>").Z(b).i("bG<1,2>"))},
Lc(a,b,c,d,e){return new A.kg(a,b,new A.AL(d),d.i("@<0>").Z(e).i("kg<1,2>"))},
v5(a){return new A.cB(a.i("cB<0>"))},
aO(a){return new A.cB(a.i("cB<0>"))},
an(a,b){return A.NQ(a,new A.cB(b.i("cB<0>")))},
DU(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
e6(a,b,c){var s=new A.e5(a,b,c.i("e5<0>"))
s.c=a.e
return s},
M2(a,b){return J.y(a,b)},
M3(a){return J.a9(a)},
F8(a){if(a.length===0)return null
return B.b.ga3(a)},
bo(a,b,c){var s=A.dI(null,null,b,c)
a.a4(0,new A.v4(s,b,c))
return s},
c9(a,b,c){var s=A.dI(null,null,b,c)
s.D(0,a)
return s},
mG(a,b){var s,r,q=A.v5(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.u(0,b.a(a[r]))
return q},
ca(a,b){var s=A.v5(b)
s.D(0,a)
return s},
JG(a,b){var s=t.bP
return J.EE(s.a(a),s.a(b))},
vo(a){var s,r
if(A.Em(a))return"{...}"
s=new A.a4("")
try{r={}
$.fb.push(a)
s.a+="{"
r.a=!0
a.a4(0,new A.vp(r,s))
s.a+="}"}finally{$.fb.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Dn(a){return new A.iY(A.a8(A.JH(null),null,!1,a.i("0?")),a.i("iY<0>"))},
JH(a){return 8},
dn:function dn(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
As:function As(a){this.a=a},
Ar:function Ar(a){this.a=a},
e3:function e3(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
k5:function k5(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
zY:function zY(a){this.a=a},
f2:function f2(a,b){this.a=a
this.$ti=b},
oQ:function oQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
kg:function kg(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
AL:function AL(a){this.a=a},
cB:function cB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
AM:function AM(a){this.a=a
this.c=this.b=null},
e5:function e5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
v4:function v4(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
oX:function oX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b7:function b7(){},
J:function J(){},
X:function X(){},
vn:function vn(a){this.a=a},
vp:function vp(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.$ti=b},
oZ:function oZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
po:function po(){},
j1:function j1(){},
cW:function cW(a,b){this.a=a
this.$ti=b},
iY:function iY(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
oY:function oY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
ct:function ct(){},
kp:function kp(){},
kA:function kA(){},
GR(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.D(r)
q=A.aa(String(s),null,null)
throw A.b(q)}q=A.BM(p)
return q},
BM(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.oU(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.BM(a[s])
return a},
LH(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Ii()
else s=new Uint8Array(o)
for(r=J.K(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
LG(a,b,c,d){var s=a?$.Ih():$.Ig()
if(s==null)return null
if(0===c&&d===b.length)return A.Gs(s,b)
return A.Gs(s,b.subarray(c,d))},
Gs(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
EH(a,b,c,d,e,f){if(B.c.am(f,4)!==0)throw A.b(A.aa("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.aa("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.aa("Invalid base64 padding, more than two '=' characters",a,b))},
KS(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.K(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.I(f)
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
if(3-k===1){r&2&&A.I(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.I(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.aB(b,"Not a byte value at index "+q+": 0x"+B.c.kN(s.h(b,q),16),null))},
KR(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ag(f,2),i=f&3,h=$.Ex()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.I(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.aa(l,a,r))
s&2&&A.I(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.aa(l,a,r))
s&2&&A.I(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.FR(a,r+1,c,-m-1)}throw A.b(A.aa(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.aa(k,a,r))},
KP(a,b,c,d){var s=A.KQ(a,b,c),r=(d&3)+(s-b),q=B.c.ag(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.I9()},
KQ(a,b,c){var s,r=c,q=r,p=0
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
FR(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.aa("Invalid padding character",a,b))
return-s-1},
Jc(a){return B.d7.h(0,a.toLowerCase())},
Fd(a,b,c){return new A.iW(a,b)},
M6(a){return a.p()},
La(a,b){return new A.AH(a,[],A.NB())},
Lb(a,b,c){var s,r=new A.a4("")
A.G6(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
G6(a,b,c,d){var s=A.La(b,c)
s.iQ(a)},
Gt(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oU:function oU(a,b){this.a=a
this.b=b
this.c=null},
AG:function AG(a){this.a=a},
oV:function oV(a){this.a=a},
AE:function AE(a,b,c){this.b=a
this.c=b
this.a=c},
Bp:function Bp(){},
Bo:function Bo(){},
l9:function l9(){},
pn:function pn(){},
la:function la(a){this.a=a},
Bg:function Bg(a,b){this.a=a
this.b=b},
lg:function lg(a){this.a=a},
ii:function ii(a){this.a=a},
ow:function ow(a){this.a=0
this.b=a},
zp:function zp(a){this.c=null
this.a=0
this.b=a},
zl:function zl(){},
z8:function z8(a,b){this.a=a
this.b=b},
lh:function lh(){},
ov:function ov(){this.a=0},
zk:function zk(a,b){this.a=a
this.b=b},
qb:function qb(){},
hz:function hz(a){this.a=a},
oz:function oz(a,b){this.a=a
this.b=b
this.c=0},
ls:function ls(){},
pe:function pe(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b,c){this.a=a
this.b=b
this.$ti=c},
lu:function lu(){},
aF:function aF(){},
r5:function r5(a){this.a=a},
ex:function ex(){},
iW:function iW(a,b){this.a=a
this.b=b},
my:function my(a,b){this.a=a
this.b=b},
u1:function u1(){},
mA:function mA(a){this.b=a},
AF:function AF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mz:function mz(a){this.a=a},
AI:function AI(){},
AJ:function AJ(a,b){this.a=a
this.b=b},
AH:function AH(a,b,c){this.c=a
this.a=b
this.b=c},
mD:function mD(){},
mE:function mE(a){this.a=a},
nH:function nH(){},
Bc:function Bc(a,b){this.a=a
this.b=b},
kt:function kt(){},
pg:function pg(a){this.a=a},
Bn:function Bn(a,b,c){this.a=a
this.b=b
this.c=c},
oc:function oc(){},
od:function od(){},
pr:function pr(a){this.b=this.a=0
this.c=a},
Bq:function Bq(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jS:function jS(a){this.a=a},
dq:function dq(a){this.a=a
this.b=16
this.c=0},
px:function px(){},
G0(a,b){var s=A.KZ(a,b)
if(s==null)throw A.b(A.aa("Could not parse BigInt",a,null))
return s},
KW(a,b){var s,r,q=$.cl(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bk(0,$.Ey()).fS(0,A.k0(s))
s=0
o=0}}if(b)return q.bJ(0)
return q},
FT(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
KX(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.w.um(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.FT(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.FT(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cl()
l=A.bK(j,i)
return new A.aP(l===0?!1:c,i,l)},
KZ(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Ib().ei(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.KW(p,q)
if(o!=null)return A.KX(o,2,q)
return null},
bK(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
DQ(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
FS(a){var s
if(a===0)return $.cl()
if(a===1)return $.fk()
if(a===2)return $.Ic()
if(Math.abs(a)<4294967296)return A.k0(B.c.fN(a))
s=A.KT(a)
return s},
k0(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bK(4,s)
return new A.aP(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bK(1,s)
return new A.aP(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ag(a,16)
r=A.bK(2,s)
return new A.aP(r===0?!1:o,s,r)}r=B.c.M(B.c.gmP(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bK(r,s)
return new A.aP(r===0?!1:o,s,r)},
KT(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.R("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cl()
r=$.Ia()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.I(r)
r[p]=0}q=J.pO(B.f.gac(r))
q.$flags&2&&A.I(q,13)
q.setFloat64(0,a,!0)
q=r[7]
o=r[6]
n=(q<<4>>>0)+(o>>>4)-1075
m=new Uint16Array(4)
m[0]=(r[1]<<8>>>0)+r[0]
m[1]=(r[3]<<8>>>0)+r[2]
m[2]=(r[5]<<8>>>0)+r[4]
m[3]=o&15|16
l=new A.aP(!1,m,4)
if(n<0)k=l.dG(0,-n)
else k=n>0?l.bK(0,n):l
if(s)return k.bJ(0)
return k},
DR(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.I(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.I(d)
d[s]=0}return b+c},
FZ(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.am(c,16),l=16-m,k=B.c.bK(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dG(p,l)
r&2&&A.I(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bK((p&k)>>>0,m)}r&2&&A.I(d)
d[n]=q},
FU(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.am(c,16)===0)return A.DR(a,b,o,d)
s=b+o+1
A.FZ(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.I(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
KY(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.am(c,16),m=16-n,l=B.c.bK(1,n)-1,k=B.c.dG(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bK((q&l)>>>0,m)
s&2&&A.I(d)
d[r]=(p|k)>>>0
k=B.c.dG(q,n)}s&2&&A.I(d)
d[j]=k},
zm(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
KU(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ag(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ag(r,16)}s&2&&A.I(e)
e[b]=r},
ox(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}},
G_(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.I(d)
d[e]=p&65535
r=B.c.M(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.I(d)
d[e]=n&65535
r=B.c.M(n,65536)}},
KV(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.j0((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
NY(a){return A.kT(a)},
D9(a,b){return new A.lZ(new WeakMap(),a,b.i("lZ<0>"))},
Da(a){},
A9(a,b){var s=$.Id()
s=s==null?null:new s(A.ef(A.Ox(a,b),1))
return new A.oO(s,b.i("oO<0>"))},
aK(a){var s=A.h0(a,null)
if(s!=null)return s
throw A.b(A.aa(a,null,null))},
NJ(a){var s=A.K5(a)
if(s!=null)return s
throw A.b(A.aa("Invalid double",a,null))},
Jg(a,b){a=A.aR(a,new Error())
a.stack=b.l(0)
throw a},
a8(a,b,c,d){var s,r=c?J.Di(a,d):J.Dh(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bI(a,b,c){var s,r=A.l([],c.i("z<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("z<0>"))
s=A.l([],b.i("z<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fN(a,b){var s=A.bI(a,!1,b)
s.$flags=3
return s},
dV(a,b,c){var s,r,q,p,o
A.bf(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ax(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Fu(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Kv(a,b,c)
if(r)a=J.D0(a,c)
if(b>0)a=J.pS(a,b)
s=A.N(a,t.S)
return A.Fu(s)},
Kv(a,b,c){var s=a.length
if(b>=s)return""
return A.K7(a,b,c==null||c>s?s:c)},
ag(a,b,c){return new A.eB(a,A.Dk(a,!1,b,c,!1,""))},
NX(a,b){return a==null?b==null:a===b},
xV(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.q(s.gn())
while(s.k())}else{a+=A.q(s.gn())
while(s.k())a=a+c+A.q(s.gn())}return a},
DL(){var s,r,q=A.K0()
if(q==null)throw A.b(A.a_("'Uri.base' is not supported"))
s=$.FM
if(s!=null&&q===$.FL)return s
r=A.ob(q)
$.FM=r
$.FL=q
return r},
pq(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.Ie()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.A(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bz(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
LB(a){var s,r,q
if(!$.If())return A.LC(a)
s=new URLSearchParams()
a.a4(0,new A.Bm(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.B(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
DC(){return A.ad(new Error())},
D6(a,b,c,d,e,f,g){var s=A.K8(a,b,c,d,e,f,g,0,!0)
return new A.aG(s==null?new A.rJ(a,b,c,d,e,f,g,0).$0():s,0,!0)},
J7(){return new A.aG(Date.now(),0,!1)},
lQ(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ax(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ax(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aB(b,s,"Time including microseconds is outside valid range"))
A.cD(c,"isUtc",t.y)
return a},
J8(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
EV(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
lP(a){if(a>=10)return""+a
return"0"+a},
cK(a,b,c){return new A.aD(a+1000*b+1e6*c)},
fD(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aB(b,"name","No enum value with that name"))},
iA(a){if(typeof a=="number"||A.bv(a)||a==null)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Ft(a)},
EX(a,b){A.cD(a,"error",t.K)
A.cD(b,"stackTrace",t.l)
A.Jg(a,b)},
lc(a){return new A.lb(a)},
R(a,b){return new A.bE(!1,null,b,a)},
aB(a,b,c){return new A.bE(!0,a,b,c)},
l8(a,b){return a},
b2(a){var s=null
return new A.db(s,s,!1,s,s,a)},
xn(a,b){return new A.db(null,null,!0,a,b,"Value not in range")},
ax(a,b,c,d,e){return new A.db(b,c,!0,a,d,"Invalid value")},
Fy(a,b,c,d){if(a<b||a>c)throw A.b(A.ax(a,b,c,d,null))
return a},
Kc(a,b,c,d){return A.F6(a,d,b,null,c)},
bg(a,b,c){if(0>a||a>c)throw A.b(A.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ax(b,a,c,"end",null))
return b}return c},
bf(a,b){if(a<0)throw A.b(A.ax(a,0,null,b,null))
return a},
F5(a,b){var s=b.b
return new A.iN(s,!0,a,null,"Index out of range")},
mq(a,b,c,d,e){return new A.iN(b,!0,a,e,"Index out of range")},
F6(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.mq(a,b,c,d,e==null?"index":e))
return a},
a_(a){return new A.cX(a)},
FJ(a){return new A.o5(a)},
A(a){return new A.bp(a)},
aC(a){return new A.lx(a)},
EY(a){return new A.oN(a)},
aa(a,b,c){return new A.bn(a,b,c)},
Jw(a,b,c){var s,r
if(A.Em(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.fb.push(a)
try{A.Mv(a,s)}finally{$.fb.pop()}r=A.xV(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tZ(a,b,c){var s,r
if(A.Em(a))return b+"..."+c
s=new A.a4(b)
$.fb.push(a)
try{r=s
r.a=A.xV(r.a,a,", ")}finally{$.fb.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Mv(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.q(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.k()){if(j<=4){b.push(A.q(p))
return}r=A.q(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.k();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
Fg(a,b,c,d,e){return new A.eo(a,b.i("@<0>").Z(c).Z(d).Z(e).i("eo<1,2,3,4>"))},
cc(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a9(a)
b=J.a9(b)
return A.hn(A.az(A.az($.fl(),s),b))}if(B.d===d){s=J.a9(a)
b=J.a9(b)
c=J.a9(c)
return A.hn(A.az(A.az(A.az($.fl(),s),b),c))}if(B.d===e){s=J.a9(a)
b=J.a9(b)
c=J.a9(c)
d=J.a9(d)
return A.hn(A.az(A.az(A.az(A.az($.fl(),s),b),c),d))}if(B.d===f){s=J.a9(a)
b=J.a9(b)
c=J.a9(c)
d=J.a9(d)
e=J.a9(e)
return A.hn(A.az(A.az(A.az(A.az(A.az($.fl(),s),b),c),d),e))}if(B.d===g){s=J.a9(a)
b=J.a9(b)
c=J.a9(c)
d=J.a9(d)
e=J.a9(e)
f=J.a9(f)
return A.hn(A.az(A.az(A.az(A.az(A.az(A.az($.fl(),s),b),c),d),e),f))}s=J.a9(a)
b=J.a9(b)
c=J.a9(c)
d=J.a9(d)
e=J.a9(e)
f=J.a9(f)
g=J.a9(g)
g=A.hn(A.az(A.az(A.az(A.az(A.az(A.az(A.az($.fl(),s),b),c),d),e),f),g))
return g},
vR(a){var s,r=$.fl()
for(s=J.E(a);s.k();)r=A.az(r,J.a9(s.gn()))
return A.hn(r)},
GB(a,b){return 65536+((a&1023)<<10)+(b&1023)},
ob(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.FK(a4<a4?B.a.B(a5,0,a4):a5,5,a3).gnH()
else if(s===32)return A.FK(B.a.B(a5,5,a4),0,a3).gnH()}r=A.a8(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.H1(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.H1(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.af(a5,"\\",n))if(p>0)h=B.a.af(a5,"\\",p-1)||B.a.af(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.af(a5,"..",n)))h=m>n+2&&B.a.af(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.af(a5,"file",0)){if(p<=0){if(!B.a.af(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.B(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.dv(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.af(a5,"http",0)){if(i&&o+3===n&&B.a.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dv(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.af(a5,"https",0)){if(i&&o+4===n&&B.a.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dv(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.ci(a4<a5.length?B.a.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.DY(a5,0,q)
else{if(q===0)A.hV(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Go(a5,c,p-1):""
a=A.Gm(a5,p,o,!1)
i=o+1
if(i<n){a0=A.h0(B.a.B(a5,i,n),a3)
d=A.Bi(a0==null?A.v(A.aa("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Gn(a5,n,m,a3,j,a!=null)
a2=m<l?A.Bj(a5,m+1,l,a3):a3
return A.kC(j,b,a,d,a1,a2,l<a4?A.Gl(a5,l+1,a4):a3)},
KF(a){return A.E0(a,0,a.length,B.o,!1)},
oa(a,b,c){throw A.b(A.aa("Illegal IPv4 address, "+a,b,c))},
KC(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.oa("each part must be in the range 0..255",a,r)}A.oa("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.oa(k,a,q)}l=p+1
s&2&&A.I(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.oa(k,a,q)
p=l}A.oa("IPv4 address should contain exactly 4 parts",a,q)},
KD(a,b,c){var s
if(b===c)throw A.b(A.aa("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.KE(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.FN(a,b,c)
return!0},
KE(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bn(o,a,r)
s=r
break}return new A.bn("Unexpected character",a,r-1)}if(s-1===b)return new A.bn(o,a,s)
return new A.bn("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bn("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bn("Invalid IPvFuture address character",a,s)}},
FN(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.yw(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.KC(a1,o,a3,s,q*2)
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
B.f.ai(s,b,16,s,c)
B.f.km(s,c,b,0)}}return s},
kC(a,b,c,d,e,f,g){return new A.kB(a,b,c,d,e,f,g)},
Gi(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hV(a,b,c){throw A.b(A.aa(c,a,b))},
Ly(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.E(q,"/")){s=A.a_("Illegal path character "+q)
throw A.b(s)}}},
Bi(a,b){if(a!=null&&a===A.Gi(b))return null
return a},
Gm(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hV(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Lz(a,r,s)
if(p<s){o=p+1
q=A.Gr(a,B.a.af(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.KD(a,r,s)
m=B.a.B(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cg(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Gr(a,B.a.af(a,"25",o)?s+3:o,c,"%25")}else q=""
A.FN(a,b,s)
return"["+B.a.B(a,b,s)+q+"]"}return A.LE(a,b,c)},
Lz(a,b,c){var s=B.a.cg(a,"%",b)
return s>=b&&s<c?s:c},
Gr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a4(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.DZ(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a4("")
m=i.a+=B.a.B(a,r,s)
if(n)o=B.a.B(a,s,s+3)
else if(o==="%")A.hV(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a4("")
if(r<s){i.a+=B.a.B(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.B(a,r,s)
if(i==null){i=new A.a4("")
n=i}else n=i
n.a+=j
m=A.DX(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.B(a,b,c)
if(r<c){j=B.a.B(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
LE(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.DZ(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a4("")
l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.B(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a4("")
if(r<s){q.a+=B.a.B(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hV(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a4("")
m=q}else m=q
m.a+=l
k=A.DX(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.B(a,b,c)
if(r<c){l=B.a.B(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
DY(a,b,c){var s,r,q
if(b===c)return""
if(!A.Gk(a.charCodeAt(b)))A.hV(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hV(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.B(a,b,c)
return A.Lx(r?a.toLowerCase():a)},
Lx(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Go(a,b,c){if(a==null)return""
return A.kD(a,b,c,16,!1,!1)},
Gn(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kD(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.LD(s,e,f)},
LD(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.E_(a,!s||c)
return A.f8(a)},
Bj(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.R("Both query and queryParameters specified",null))
return A.kD(a,b,c,256,!0,!1)}if(d==null)return null
return A.LB(d)},
LC(a){var s={},r=new A.a4("")
s.a=""
a.a4(0,new A.Bk(new A.Bl(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Gl(a,b,c){if(a==null)return null
return A.kD(a,b,c,256,!0,!1)},
DZ(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.Cw(s)
p=A.Cw(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bz(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.B(a,b,b+3).toUpperCase()
return null},
DX(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.mr(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dV(s,0,null)},
kD(a,b,c,d,e,f){var s=A.Gq(a,b,c,d,e,f)
return s==null?B.a.B(a,b,c):s},
Gq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.DZ(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hV(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.DX(o)}if(p==null){p=new A.a4("")
l=p}else l=p
l.a=(l.a+=B.a.B(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.B(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Gp(a){if(B.a.S(a,"."))return!0
return B.a.bV(a,"/.")!==-1},
f8(a){var s,r,q,p,o,n
if(!A.Gp(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.C(s,"/")},
E_(a,b){var s,r,q,p,o,n
if(!A.Gp(a))return!b?A.Gj(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga3(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Gj(s[0])
return B.b.C(s,"/")},
Gj(a){var s,r,q=a.length
if(q>=2&&A.Gk(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.B(a,0,s)+"%3A"+B.a.ab(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
LF(a,b){if(a.wd("package")&&a.c==null)return A.H3(b,0,b.length)
return-1},
LA(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.R("Invalid URL encoding",null))}}return s},
E0(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.B(a,b,c)
else p=new A.cm(B.a.B(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.R("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.R("Truncated URI",null))
p.push(A.LA(a,o+1))
o+=2}else p.push(r)}}return d.f7(p)},
Gk(a){var s=a|32
return 97<=s&&s<=122},
FK(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.aa(k,a,r))}}if(q<0&&r>b)throw A.b(A.aa(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga3(j)
if(p!==44||r!==n+7||!B.a.af(a,"base64",n+1))throw A.b(A.aa("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.ar.wy(a,m,s)
else{l=A.Gq(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dv(a,m,s,l)}return new A.yv(a,j,c)},
H1(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Ga(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.H3(a.a,a.e,a.f)
return-1},
H3(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
LU(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
zn:function zn(){},
zo:function zo(){},
oO:function oO(a,b){this.a=a
this.$ti=b},
Bm:function Bm(a){this.a=a},
rJ:function rJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a){this.a=a},
A4:function A4(){},
af:function af(){},
lb:function lb(a){this.a=a},
dj:function dj(){},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
db:function db(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iN:function iN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cX:function cX(a){this.a=a},
o5:function o5(a){this.a=a},
bp:function bp(a){this.a=a},
lx:function lx(a){this.a=a},
mZ:function mZ(){},
jK:function jK(){},
oN:function oN(a){this.a=a},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
ms:function ms(){},
o:function o(){},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
k:function k(){},
pi:function pi(){},
jM:function jM(){this.b=this.a=0},
jB:function jB(a){this.a=a},
nm:function nm(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a4:function a4(a){this.a=a},
yw:function yw(a){this.a=a},
kB:function kB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
Bl:function Bl(a,b){this.a=a
this.b=b},
Bk:function Bk(a){this.a=a},
yv:function yv(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
oI:function oI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
lZ:function lZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
JI(a){return a},
Jz(a){return a},
DF(a){return a},
Jx(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.Gy(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Jo(a){return new v.G.Promise(A.bZ(new A.to(a)))},
mV:function mV(a){this.a=a},
to:function to(a){this.a=a},
tm:function tm(a){this.a=a},
tn:function tn(a){this.a=a},
BW(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.LL,a)
s[$.fj()]=a
return s},
d0(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.LM,a)
s[$.fj()]=a
return s},
bZ(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.LN,a)
s[$.fj()]=a
return s},
pz(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.LO,a)
s[$.fj()]=a
return s},
i_(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.LP,a)
s[$.fj()]=a
return s},
E4(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.LQ,a)
s[$.fj()]=a
return s},
LL(a){return a.$0()},
LM(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
LN(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
LO(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
LP(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
LQ(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
GP(a){return a==null||A.bv(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
kS(a){if(A.GP(a))return a
return new A.CB(new A.e3(t.mp)).$1(a)},
Ct(a,b){return a[b]},
Ec(a,b,c){return a[b].apply(a,c)},
No(a,b){var s,r
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
a2(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.aE(s,b.i("aE<0>"))
a.then(A.ef(new A.CH(r),1),A.ef(new A.CI(r),1))
return s},
GO(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
kO(a){if(A.GO(a))return a
return new A.Ch(new A.e3(t.mp)).$1(a)},
CB:function CB(a){this.a=a},
CH:function CH(a){this.a=a},
CI:function CI(a){this.a=a},
Ch:function Ch(a){this.a=a},
Hx(a,b){return Math.max(a,b)},
Fw(){return B.at},
Fx(){return $.CW()},
AB:function AB(){},
AC:function AC(a){this.a=a},
IQ(a,b,c){return J.EC(a,b,c)},
lW:function lW(){},
a5:function a5(){},
qd:function qd(a){this.a=a},
qe:function qe(a){this.a=a},
qf:function qf(a,b){this.a=a
this.b=b},
qg:function qg(a){this.a=a},
qh:function qh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qi:function qi(a){this.a=a},
lS:function lS(a){this.$ti=a},
iR:function iR(a,b){this.a=a
this.$ti=b},
eD:function eD(a,b){this.a=a
this.$ti=b},
hU:function hU(){},
hc:function hc(a,b){this.a=a
this.$ti=b},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b,c){this.a=a
this.b=b
this.$ti=c},
lR:function lR(){},
Fn(){throw A.b(A.a_(u.O))},
KB(){throw A.b(A.a_("Cannot modify an unmodifiable Map"))},
mU:function mU(){},
o8:function o8(){},
at(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dV(m,0,null)},
cn:function cn(a){this.a=a},
c6:function c6(){this.a=null},
mk:function mk(){},
tt:function tt(){},
d_(a){var s=new Uint32Array(A.bc(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.pc(s,r,a,q,new Uint32Array(16))},
pb:function pb(){},
AZ:function AZ(){},
pc:function pc(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
l4:function l4(){},
qo:function qo(){},
j_:function j_(a){this.a=a},
jF:function jF(){},
vi:function vi(){},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
xB:function xB(){},
jG:function jG(a,b){this.b=a
this.c=b},
nr:function nr(a){this.a=a},
bC(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lL(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bC(a5[0])
r=A.bC(a5[1])
q=A.bC(a5[2])
p=A.bC(a5[3])
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
g=B.c.am(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.am(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bK(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bC(s)
a5.$flags&2&&A.I(a5)
a5[0]=k
a5[1]=A.bC(r)
a5[2]=A.bC(q)
a5[3]=A.bC(p)},
EU(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.d1(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.am(q,n),!1)
p=J.bO(B.aC.gac(r),0,null)
o=new Uint32Array(4)
A.lL(o,a,b)
A.lL(o,a,p)
return J.bO(B.y.gac(o),0,null)},
lK:function lK(a,b,c){this.c=a
this.d=b
this.a=c},
rn:function rn(){},
oG:function oG(){},
oH:function oH(){},
pE(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kX()===B.P){a5=A.fc(a5)
a6=A.fc(a6)
a7=A.fc(a7)
a8=A.fc(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ak[a5>>>24&255]^B.ai[a6>>>16&255]^B.aj[a7>>>8&255]^B.am[a8&255]^b3[r]
o=B.ak[a6>>>24&255]^B.ai[a7>>>16&255]^B.aj[a8>>>8&255]^B.am[a5&255]^b3[r+1]
n=B.ak[a7>>>24&255]^B.ai[a8>>>16&255]^B.aj[a5>>>8&255]^B.am[a6&255]^b3[r+2]
m=B.ak[a8>>>24&255]^B.ai[a5>>>16&255]^B.aj[a6>>>8&255]^B.am[a7&255]^b3[r+3]
r+=4}o=B.n[a5>>>24&255]
n=B.n[a6>>>16&255]
m=B.n[a7>>>8&255]
l=B.n[a8&255]
k=B.n[a6>>>24&255]
j=B.n[a7>>>16&255]
i=B.n[a8>>>8&255]
h=B.n[a5&255]
g=B.n[a7>>>24&255]
f=B.n[a8>>>16&255]
e=B.n[a5>>>8&255]
d=B.n[a6&255]
c=B.n[a8>>>24&255]
b=B.n[a5>>>16&255]
a=B.n[a6>>>8&255]
a0=B.n[a7&255]
a1=(((o&255)<<24|(n&255)<<16|(m&255)<<8|l&255)^b3[r])>>>0
a2=(((k&255)<<24|(j&255)<<16|(i&255)<<8|h&255)^b3[r+1])>>>0
a3=(((g&255)<<24|(f&255)<<16|(e&255)<<8|d&255)^b3[r+2])>>>0
a4=(((c&255)<<24|(b&255)<<16|(a&255)<<8|a0&255)^b3[r+3])>>>0
if($.kX()===B.P){a1=A.fc(a1)
a2=A.fc(a2)
a3=A.fc(a3)
a4=A.fc(a4)}a9.$flags&2&&A.I(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Hd(a){var s,r,q,p,o,n,m,l,k,j,i=a.geb(),h=B.d6.h(0,i.gm(0))
if(h==null)throw A.b(A.R("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.EC(B.y.gac(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.I(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.kX()===B.P)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.am(m,k)
if(n===0)j=A.H8((j<<8|j>>>24)>>>0)^B.cH[B.c.j0(m,k)-1]<<24
else if(o&&n===4)j=A.H8(j)
r[m]=(j^r[m-k])>>>0}return r},
H8(a){return(B.n[a>>>24&255]<<24|B.n[a>>>16&255]<<16|B.n[a>>>8&255]<<8|B.n[a&255])>>>0},
fc(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
r8:function r8(){},
ro:function ro(){},
zU:function zU(){},
nh:function nh(a,b){this.a=a
this.b=b},
li:function li(){},
lj:function lj(){},
lk:function lk(){},
ll:function ll(){},
q7:function q7(){},
H9(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.nh("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.ep)){s=J.Z(a)
if(B.a.S(s,"TypeError: "))s=B.a.ab(s,11)
a=new A.ep(s,b.b)}return a},
GW(a,b,c){A.EX(A.H9(a,c),b)},
LK(a,b){return new A.dp(new A.BI(a,b),t.fb)},
i1(a,b,c){return A.MI(a,b,c)},
MI(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
a1.f=new A.BX(e)
a1.r=new A.BY(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a2(c.read(),k),$async$i1)
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
d=A.H9(m,a)
k=l
j=a1.b
if(j>=4)A.v(a1.bM())
if((j&1)!==0){j=a1.gaQ()
j.aL(d,k==null?B.R:k)}s=15
return A.a(a1.q(),$async$i1)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.uo()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.v(a1.bM())
if((f&1)!==0)a1.gaQ().aC(g)}g=a1.b
s=((g&1)!==0?(a1.gaQ().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aE(new A.w($.B,j),i):g).a,$async$i1)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i1,r)},
lp:function lp(a){this.b=!1
this.c=a},
qa:function qa(a){this.a=a},
BI:function BI(a,b){this.a=a
this.b=b},
BX:function BX(a){this.a=a},
BY:function BY(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a){this.a=a},
qc:function qc(a){this.a=a},
ER(a,b){return new A.ep(a,b)},
ep:function ep(a,b){this.a=a
this.b=b},
mN:function mN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
JS(a,b){var s=t.N,r=A.l([],t.e8),q=$.Er()
if(!q.b.test(a))A.v(A.aB(a,"method","Not a valid method"))
return new A.vJ(A.u(s,s),r,a,b,A.dI(new A.lk(),new A.ll(),s,s))},
vJ:function vJ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
vK:function vK(a,b){this.a=a
this.b=b},
Kf(a,b){var s=new Uint8Array(0),r=$.Er()
if(!r.b.test(a))A.v(A.aB(a,"method","Not a valid method"))
r=t.N
return new A.xq(s,a,b,A.dI(new A.lk(),new A.ll(),r,r))},
xq:function xq(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jO:function jO(){},
nG:function nG(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
IR(a){return a.toLowerCase()},
io:function io(a,b,c){this.a=a
this.c=b
this.$ti=c},
JL(a){return A.Ow("media type",a,new A.vq(a))},
Dp(a,b,c){var s=t.N
if(c==null)s=A.u(s,s)
else{s=new A.io(A.Np(),A.u(s,t.ag),t.fo)
s.D(0,c)}return new A.fP(a.toLowerCase(),b.toLowerCase(),new A.cW(s,t.ph))},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
vq:function vq(a){this.a=a},
vs:function vs(a){this.a=a},
vr:function vr(){},
NN(a){var s
a.n3($.Ip(),"quoted string")
s=a.gky().h(0,0)
return A.HL(B.a.B(s,1,s.length-1),$.Io(),new A.Cn(),null)},
Cn:function Cn(){},
q6:function q6(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jo:function jo(){},
w4:function w4(a,b){this.a=a
this.b=b},
w5:function w5(a){this.a=a},
n4:function n4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.db=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.as=_.Q=$
_.at=null
_.ch=_.ay=_.ax=!1
_.CW=m
_.cx=n
_.cy=o},
wB:function wB(){},
B4:function B4(a){this.a=a},
wq:function wq(){},
h_(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aU("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aU("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aU('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.k
else if(j.b(o))n=A.bo(o,t.N,t.X)
else throw A.b(A.aU('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.u
else if(t.j.b(m)){for(j=J.K(m),k=0;k<j.gm(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aU('Record field "imgs"['+k+"] is present but not a string."))
j=j.f5(m,t.N)
l=j.cZ(j)}else throw A.b(A.aU('Record field "imgs" is present but not a list.'))
return new A.dd(s,p,r,n,l)},
w8:function w8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wp:function wp(a){this.a=a},
wo:function wo(){},
wg:function wg(a,b,c){this.a=a
this.b=b
this.c=c},
wh:function wh(a,b,c){this.a=a
this.b=b
this.c=c},
wd:function wd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w9:function w9(a,b){this.a=a
this.b=b},
wb:function wb(a,b){this.a=a
this.b=b},
wa:function wa(a,b){this.a=a
this.b=b},
we:function we(a){this.a=a},
wf:function wf(a,b){this.a=a
this.b=b},
wc:function wc(a){this.a=a},
wk:function wk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wl:function wl(){},
wm:function wm(a,b){this.a=a
this.b=b},
wn:function wn(){},
wi:function wi(a,b){this.a=a
this.b=b},
wj:function wj(){},
JZ(a,b,c,d,e,f){var s=A.bd(null,t.H)
return new A.wr(b,c,f,new A.wA(a,B.U,null),e,d,s)},
K_(a){return 0.5+B.at.nk()},
jq:function jq(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
wr:function wr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.e=c
_.r=d
_.w=e
_.x=f
_.y=!1
_.as=_.Q=_.z=null
_.at=g
_.ax=0
_.ch=_.ay=null},
wA:function wA(a,b,c){this.a=a
this.b=b
this.c=c},
wu:function wu(){},
wy:function wy(a){this.a=a},
wz:function wz(a){this.a=a},
wv:function wv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ws:function ws(a,b,c){this.a=a
this.b=b
this.c=c},
wt:function wt(a){this.a=a},
ww:function ww(a){this.a=a},
wx:function wx(a){this.a=a},
B5:function B5(a,b){this.a=a
this.b=null
this.c=b},
Jt(a,b,c){return new A.cN(a,b,c)},
iM(a,b){return new A.dC(a)},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mn:function mn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a){this.a=a},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
w6:function w6(a){this.a=a},
w7:function w7(a){this.a=a},
J5(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="storePolicies",b2="recordId",b3="field",b4="imgs",b5="name",b6="expectedSha256",b7="allowVolatileBlobs",b8="session",b9="index",c0="refId",c1="token",c2="id",c3="spec",c4="store"
switch(c5){case"open":s=c6.h(0,"stores")
r=c6.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.O("Malformed open payload."))
q=c6.h(0,b1)
p=A.l([],t.d)
for(o=J.K(s),n=0;n<o.gm(s);++n)p.push(A.D5(o.h(s,n),"stores["+n+"]"))
o=t.N
m=A.u(o,o)
for(l=r.ga_(),l=l.gt(l);l.k();){k=l.gn()
m.j(0,J.Z(k.a),A.Eb(k.b,"fingerprint"))}if(q==null)o=null
else{o=A.u(o,t.X)
for(l=t.f.a(q).ga_(),l=l.gt(l);l.k();){k=l.gn()
o.j(0,J.Z(k.a),A.D5(k.b,b1))}}return new A.mY(p,m,o)
case"capabilities":return B.bK
case"health":return B.bN
case"close":return B.bL
case"fileBeginUpload":j=c6.h(0,"size")
if(!A.al(j))throw A.b(A.O("Malformed fileBeginUpload payload."))
return new A.m3(A.aS(c6),A.b6(c6,b2),A.kK(c6.h(0,b3),b3,b4),A.kK(c6.h(0,b5),b5,"blob.bin"),j,A.d1(c6.h(0,b6),b6),A.ec(c6.h(0,b7),b7,!1))
case"fileChunk":i=c6.h(0,"chunk")
if(!t.p.b(i))throw A.b(A.O("Malformed fileChunk payload."))
return new A.m4(A.b6(c6,b8),i)
case"fileFinish":return new A.m9(A.b6(c6,b8))
case"fileAbort":return new A.m2(A.b6(c6,b8))
case"filesList":return new A.mi(A.aS(c6),A.b6(c6,b2),A.kK(c6.h(0,b3),b3,b4))
case"fileOpen":return new A.mc(A.aS(c6),A.b6(c6,b2),A.kK(c6.h(0,b3),b3,b4),A.GQ(c6.h(0,b9),b9,0),A.d1(c6.h(0,c0),c0))
case"fileDownload":return new A.m7(A.aS(c6),A.b6(c6,b2),A.kK(c6.h(0,b3),b3,b4),A.d1(c6.h(0,c0),c0))
case"fileCredit":h=c6.h(0,"bytes")
if(!A.al(h))throw A.b(A.O("Malformed fileCredit payload."))
return new A.m6(A.b6(c6,"stream"),h)
case"fileClose":return new A.m5(A.b6(c6,"stream"))
case"fileRemove":return new A.mf(A.aS(c6),A.b6(c6,b2),A.kK(c6.h(0,b3),b3,b4),A.GQ(c6.h(0,b9),b9,0),A.d1(c6.h(0,c0),c0))
case"fileGc":g=c6.h(0,"blobGraceMs")
f=c6.h(0,"tmpGraceMs")
if(!A.al(g)||!A.al(f))throw A.b(A.O("Malformed fileGc payload."))
return new A.ma(g,f)
case"fileEnforceStorageCap":e=c6.h(0,"maxBytes")
if(!A.al(e))throw A.b(A.O("Malformed fileEnforceStorageCap payload."))
return new A.lX(e)
case"fileStorageStatus":return B.c0
case"syncStart":d=c6.h(0,"baseUrl")
if(typeof d!="string")throw A.b(A.O("Malformed syncStart payload."))
return new A.nP(d,A.d1(c6.h(0,"scopeId"),"scopeId"),A.d1(c6.h(0,c1),c1))
case"syncStop":return B.c5
case"syncNow":return B.c1
case"syncPause":return B.c2
case"syncResume":return B.c3
case"syncUpdateAuth":return new A.nV(A.d1(c6.h(0,c1),c1))
case"syncSetConnectivity":c=c6.h(0,"online")
if(!A.bv(c))throw A.b(A.O("Malformed syncSetConnectivity payload."))
return new A.nO(c)
case"syncStatus":return B.c4
case"get":return new A.mj(A.aS(c6),A.b6(c6,c2),A.cJ(c6))
case"rows":b=c6.h(0,"ids")
if(!t.j.b(b))throw A.b(A.O("Malformed rows payload."))
return new A.nk(A.aS(c6),A.Hb(b,"ids"),A.cJ(c6))
case"mutate":return new A.mO(A.aS(c6),A.M_(c6.h(0,"mutation")),A.cJ(c6))
case"query":return new A.nc(A.aS(c6),A.eN(c6.h(0,c3)),A.cJ(c6))
case"count":return new A.lG(A.aS(c6),A.eN(c6.h(0,c3)),A.cJ(c6))
case"countDistinct":return new A.lF(A.aS(c6),A.b6(c6,b3),A.eN(c6.h(0,c3)),A.cJ(c6))
case"distinct":p=A.aS(c6)
o=A.b6(c6,b3)
m=c6.h(0,c3)
return new A.lT(p,o,A.eN(m==null?B.k:m),A.cJ(c6))
case"ids":return new A.mo(A.aS(c6),A.eN(c6.h(0,c3)),A.cJ(c6))
case"aggregate":a=c6.h(0,"fn")
a0=A.Dg(new A.ao(B.cR,new A.r3(a),t.gx))
if(a0==null)throw A.b(A.O("Unknown aggregate: "+A.q(a)))
return new A.l5(A.aS(c6),a0,A.b6(c6,b3),A.eN(c6.h(0,c3)),A.cJ(c6))
case"explain":return new A.m_(A.aS(c6),A.eN(c6.h(0,c3)),A.cJ(c6))
case"search":return new A.nq(A.aS(c6),A.Km(c6.h(0,c3)),A.cJ(c6))
case"txBegin":a1=c6.h(0,"readOnly")
if(!A.bv(a1))throw A.b(A.O("Malformed txBegin payload."))
a2=c6.h(0,"durability")
if(a2==null)a3=B.br
else if(typeof a2=="string"){p=A.Dg(new A.ao(B.d3,new A.r4(a2),t.mE))
if(p==null)p=A.v(A.O("Unknown tx durability: "+a2))
a3=p}else{p=A.v(A.O("Malformed txBegin durability."))
a3=p}return new A.nZ(a1,a3)
case"txCommit":case"txRollback":a4=c6.h(0,b8)
if(typeof a4!="string")throw A.b(A.O("Malformed tx payload."))
return c5==="txCommit"?new A.o_(a4):new A.o1(a4)
case"txSavepoint":case"txRollbackTo":case"txRelease":a4=c6.h(0,b8)
a5=c6.h(0,b5)
if(typeof a4!="string"||typeof a5!="string")throw A.b(A.O("Malformed savepoint payload."))
A:{if("txSavepoint"===c5){p=new A.o3(a4,a5)
break A}if("txRollbackTo"===c5){p=new A.o2(a4,a5)
break A}p=new A.o0(a4,a5)
break A}return p
case"watchOne":return new A.oi(A.aS(c6),A.b6(c6,c2))
case"watch":return new A.oj(A.aS(c6),A.eN(c6.h(0,c3)))
case"watchCancel":a6=c6.h(0,"subscription")
if(typeof a6!="string")throw A.b(A.O("Malformed watchCancel payload."))
return new A.oh(a6)
case"analyze":return new A.l7(A.d1(c6.h(0,c4),c4))
case"walCheckpoint":return B.c7
case"vacuum":return B.c6
case"pruneOutbox":return B.bZ
case"compact":a7=c6.h(0,c4)
a8=c6.h(0,"olderThanMs")
if(typeof a7!="string"||!A.al(a8))throw A.b(A.O("Malformed compact payload."))
return new A.lw(a7,a8)
case"runMaintenance":a9=c6.h(0,"compactOlderThanMs")
if(!A.al(a9))throw A.b(A.O("Malformed runMaintenance payload."))
return new A.nl(a9)
case"conflictsList":return new A.lC(A.d1(c6.h(0,c4),c4))
case"conflictGet":return new A.lA(A.aS(c6),A.b6(c6,c2))
case"conflictsResolve":b0=c6.h(0,"merged")
if(!t.f.b(b0))throw A.b(A.O("Malformed conflictsResolve payload."))
return new A.ni(A.aS(c6),A.b6(c6,c2),A.D5(b0,"merged"))
case"conflictsAcceptLocal":return new A.l2(A.aS(c6),A.b6(c6,c2))
case"conflictsAcceptRemote":return new A.l3(A.aS(c6),A.b6(c6,c2))
case"conflictsWatch":return new A.lE(A.d1(c6.h(0,c4),c4))
default:return null}},
aS(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.O("Malformed store name."))
return s},
b6(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.O('Malformed field "'+b+'".'))
return s},
cJ(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.O("Malformed session id."))
return s},
D5(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga_(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.O('Malformed field "'+b+'".'))},
C9(a){var s,r=u.P
if(a instanceof A.dJ){A:{if(a instanceof A.dY){s="ValidationException"
break A}if(a instanceof A.hq){s="UniqueConstraintException"
break A}if(a instanceof A.fX){s="NotNullConstraintException"
break A}if(a instanceof A.ir){s="CheckConstraintException"
break A}if(a instanceof A.jr){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.iI){s="ForeignKeyConstraintException"
break A}if(a instanceof A.jR){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.iJ){s="FtsUnavailableError"
break A}if(a instanceof A.ha){s="SchemaRegistrationError"
break A}if(a instanceof A.jD){s="SchemaTooNewError"
break A}if(a instanceof A.dg){s="StorageError"
break A}if(a instanceof A.jA){s="RemoteOnlyError"
break A}if(a instanceof A.jy){s="RecordNotFoundException"
break A}if(a instanceof A.jL){s="StaleCursorError"
break A}if(a instanceof A.j4){s="MissingLimitError"
break A}if(a instanceof A.it){s="ConflictBlockedError"
break A}if(a instanceof A.fz){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.jx){s="ReadOnlyTxError"
break A}throw A.b(A.eO(r))}return s}if(t.b0.b(a))return"RangeError"
if(a instanceof A.bE)return"ArgumentError"
if(a instanceof A.bp)return"StateError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
if(a instanceof A.br){B:{if(a instanceof A.eT){s="TransientNetworkError"
break B}if(a instanceof A.dR){s="ServerBusyError"
break B}if(a instanceof A.jH){s="ServerError"
break B}if(a instanceof A.c4){s="AuthError"
break B}if(a instanceof A.cM){s="ForbiddenError"
break B}if(a instanceof A.cQ){s="NotFoundError"
break B}if(a instanceof A.eK){s="PayloadError"
break B}if(a instanceof A.h1){s="ProtocolError"
break B}if(a instanceof A.fB){s="DuplicateIdError"
break B}if(a instanceof A.el){s="BatchFailedError"
break B}if(a instanceof A.yb){s="SyncIdentityError"
break B}throw A.b(A.eO(r))}return s}if(a instanceof A.js)return"ProtocolEnvelopeException"
if(a instanceof A.eU)return"WireException"
return"unknown"},
b_(a){return new A.js(a)},
NK(a){var s,r,q,p=J.Z(a),o=null
if(a instanceof A.dJ){s=A.C9(a)
p=a.a
if(a instanceof A.dY&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.hq){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.fe(a.c))}catch(r){if(!(A.D(r) instanceof A.eU))throw r}}else if(a instanceof A.fX)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.br){s=A.C9(a)
p=a.a
if(a instanceof A.dR&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else{s=A.C9(a)
if(a instanceof A.eU)p=a.a
else if(a instanceof A.bp)p=a.a
else if(t.b0.b(a))p=A.q(a.d)
else if(a instanceof A.bE)p=A.q(a.d)}q=A.u(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
M8(a){var s
A:{if(a instanceof A.j9){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.jc){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.ja){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.jd){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.j6){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.j7){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.j5){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.jb){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.j8){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.eO(u.P))}return s},
M_(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.O("Malformed mutation payload."))
s=t.N
r=a.aX(0,new A.BQ(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.j9(A.pD(r.h(0,n),n))
case"upsert":return new A.jc(A.pD(r.h(0,n),n))
case"putAll":return new A.ja(A.H6(r.h(0,m),m))
case"upsertAll":return new A.jd(A.H6(r.h(0,m),m))
case"patch":return new A.j6(A.C_(r.h(0,l),l),A.pD(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.O("Malformed patchAll patches."))
k=A.u(s,t.G)
for(s=p.ga_(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.Z(o.a),A.pD(o.b,"patches"))}return new A.j7(k)
case"archive":return new A.j5(A.C_(r.h(0,l),l))
case"restore":return new A.jb(A.C_(r.h(0,l),l))
case"purge":return new A.j8(A.C_(r.h(0,l),l))
default:throw A.b(A.O("Unknown mutation kind: "+A.q(q)))}},
C_(a,b){if(typeof a=="string")return a
throw A.b(A.O('Malformed mutation field "'+b+'".'))},
pD(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga_(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.O('Malformed mutation field "'+b+'".'))},
H6(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.E(a);r.k();)s.push(A.pD(r.gn(),b))
return s}throw A.b(A.O('Malformed mutation field "'+b+'".'))},
eN(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.O("Malformed query spec."))
s=a0.aX(0,new A.xi(),t.N,t.z)
r=new A.xj()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.l([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.v(A.O("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.I(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.Dr(s.h(0,e)):A.v(A.O("Malformed query predicate."))
i=A.l([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.v(A.O("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.Kb(h.gn()))
h=m==null?null:A.Ea(m,"limit")
g=A.ec(s.h(0,"all"),"all",!1)
f=n==null?null:A.Hb(n,"select")
return new A.xh(k,j,a,i,h,g,f,A.ec(s.h(0,d),d,!1),A.ec(s.h(0,c),c,!1),A.d1(l,"cursor"),A.ec(s.h(0,b),b,!1))},
Fv(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.O(k))
s=a.aX(0,new A.xd(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.O(k))
p=A.Dg(new A.ao(B.cJ,new A.xe(q),t.mz))
if(p==null)throw A.b(A.O("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.O('Query condition "values" must be a list.'))
n=A.kP(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.kP(l.gn()))}else m=null
return new A.eM(r,p,n,m)},
Dr(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.O("Malformed predicate tree."))
s=a.aX(0,new A.wF(),t.N,t.z)
r=new A.wE()
switch(s.h(0,"kind")){case"leaf":return new A.iX(A.Fv(s))
case"not":return new A.jk(A.Dr(s.h(0,"child")))
case"all":return new A.id(r.$1(s.h(0,q)))
case"any":return new A.ie(r.$1(s.h(0,q)))
default:throw A.b(A.O("Unknown predicate node kind: "+A.q(s.h(0,"kind"))))}},
Kb(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.O(q))
s=a.aX(0,new A.xg(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.O(q))
return new A.nb(r,A.ec(s.h(0,"desc"),"desc",!1))},
Km(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.O("Malformed search spec."))
s=a.aX(0,new A.xA(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.O("Malformed search term."))
q=s.h(0,p)==null?null:A.Ea(s.h(0,p),p)
return new A.xz(r,q,A.ec(s.h(0,"all"),"all",!1),A.ec(s.h(0,o),o,!1),A.ec(s.h(0,n),n,!1))},
J6(a){return new A.fy(a)},
Jb(a){return new A.fA(a)},
Ju(a){return new A.fL(a)},
IN(a){return new A.fn(a)},
Jh(a){return new A.fE(a)},
fe(a){var s,r,q,p
if(a instanceof A.aG)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.ar.gfe().A(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.fe(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.u(s,t.X)
for(q=a.ga_(),q=q.gt(q);q.k();){p=q.gn()
r.j(0,J.Z(p.a),A.fe(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.u(t.N,t.X)
for(r=a.ga_(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),A.fe(q.b))}return s}if(a==null||A.bv(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.c2(a).l(0)+" is not wire-safe."))},
kP(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.cE(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.al(s))return new A.aG(A.lQ(s,0,!0),0,!0)
throw A.b(A.O("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.as.A(s)
return i}catch(p){if(t.Y.b(A.D(p)))throw A.b(A.O(k))
else throw p}throw A.b(A.O(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.O("Malformed map wire value."))
n=A.u(t.N,t.X)
for(i=o.ga_(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.O(j+A.q(m)))
n.j(0,m,A.kP(q.b))}return n}l=A.u(t.N,t.X)
for(i=a.ga_(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.O(j+A.q(m)))
l.j(0,m,A.kP(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.kP(q.gn()))
return i}return a},
O(a){return new A.eU(a)},
Eb(a,b){if(typeof a=="string")return a
throw A.b(A.O('Malformed wire field "'+b+'".'))},
Ea(a,b){if(A.al(a))return a
throw A.b(A.O('Malformed wire field "'+b+'".'))},
d1(a,b){if(a==null)return null
return A.Eb(a,b)},
GQ(a,b,c){if(a==null)return c
return A.Ea(a,b)},
ec(a,b,c){if(a==null)return!1
if(A.bv(a))return a
throw A.b(A.O('Malformed wire field "'+b+'".'))},
kK(a,b,c){if(a==null)return c
return A.Eb(a,b)},
Hb(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.l([],t.s)
for(r=J.K(a),q=0;q<r.gm(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.O(p+b+"["+q+']".'))
s.push(A.G(r.h(a,q)))}return s}throw A.b(A.O(p+b+'".'))},
r3:function r3(a){this.a=a},
r4:function r4(a){this.a=a},
lz:function lz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
js:function js(a){this.a=a},
c7:function c7(){},
lv:function lv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lD:function lD(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
me:function me(a,b,c,d,e,f,g,h,i,j){var _=this
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
m3:function m3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
m4:function m4(a,b){this.a=a
this.b=b},
m9:function m9(a){this.a=a},
m5:function m5(a){this.a=a},
m2:function m2(a){this.a=a},
mi:function mi(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function mc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m7:function m7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m6:function m6(a,b){this.a=a
this.b=b},
mf:function mf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ma:function ma(a,b){this.a=a
this.b=b},
lX:function lX(a){this.a=a},
nC:function nC(){},
mh:function mh(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
fI:function fI(a){this.a=a},
md:function md(a){this.a=a},
fH:function fH(a){this.a=a},
fF:function fF(a){this.a=a},
hi:function hi(a){this.a=a},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vL:function vL(){},
j9:function j9(a){this.a=a},
jc:function jc(a){this.a=a},
ja:function ja(a){this.a=a},
jd:function jd(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a){this.a=a},
j5:function j5(a){this.a=a},
jb:function jb(a){this.a=a},
j8:function j8(a){this.a=a},
BQ:function BQ(){},
xh:function xh(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
xi:function xi(){},
xj:function xj(){},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xd:function xd(){},
xe:function xe(a){this.a=a},
b1:function b1(a,b){this.a=a
this.b=b},
cR:function cR(){},
wF:function wF(){},
wE:function wE(){},
iX:function iX(a){this.a=a},
jk:function jk(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
nb:function nb(a,b){this.a=a
this.b=b},
xg:function xg(){},
cG:function cG(a,b){this.a=a
this.b=b},
xz:function xz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xA:function xA(){},
ng:function ng(){},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(){},
ml:function ml(){},
lt:function lt(){},
mj:function mj(a,b,c){this.a=a
this.b=b
this.c=c},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
mO:function mO(a,b,c){this.a=a
this.b=b
this.c=c},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function lG(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lT:function lT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mo:function mo(a,b,c){this.a=a
this.b=b
this.c=c},
l5:function l5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m_:function m_(a,b,c){this.a=a
this.b=b
this.c=c},
nq:function nq(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
this.b=b},
o_:function o_(a){this.a=a},
o1:function o1(a){this.a=a},
o3:function o3(a,b){this.a=a
this.b=b},
o2:function o2(a,b){this.a=a
this.b=b},
o0:function o0(a,b){this.a=a
this.b=b},
oi:function oi(a,b){this.a=a
this.b=b},
oj:function oj(a,b){this.a=a
this.b=b},
oh:function oh(a){this.a=a},
l7:function l7(a){this.a=a},
og:function og(){},
oe:function oe(){},
n8:function n8(){},
lw:function lw(a,b){this.a=a
this.b=b},
nl:function nl(a){this.a=a},
lC:function lC(a){this.a=a},
lA:function lA(a,b){this.a=a
this.b=b},
ni:function ni(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b){this.a=a
this.b=b},
l3:function l3(a,b){this.a=a
this.b=b},
lE:function lE(a){this.a=a},
ah:function ah(){},
fY:function fY(){},
im:function im(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mm:function mm(a,b){this.a=a
this.b=b},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
fT:function fT(a){this.a=a},
h5:function h5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fy:function fy(a){this.a=a},
fA:function fA(a){this.a=a},
fL:function fL(a){this.a=a},
fn:function fn(a){this.a=a},
fE:function fE(a){this.a=a},
hb:function hb(a){this.a=a},
np:function np(a,b){this.a=a
this.b=b},
fw:function fw(a){this.a=a},
fv:function fv(a){this.a=a},
ho:function ho(a){this.a=a},
hv:function hv(a){this.a=a},
h2:function h2(a){this.a=a},
fu:function fu(a){this.a=a},
eR:function eR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b8:function b8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nP:function nP(a,b,c){this.a=a
this.b=b
this.c=c},
nU:function nU(){},
nK:function nK(){},
nL:function nL(){},
nN:function nN(){},
nV:function nV(a){this.a=a},
nO:function nO(a){this.a=a},
nS:function nS(){},
nQ:function nQ(a){this.a=a},
nM:function nM(a){this.a=a},
nT:function nT(a){this.a=a},
nR:function nR(a){this.a=a},
le:function le(){},
eU:function eU(a){this.a=a},
ai(a){var s,r=new A.a4("")
A.ck(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Eq(a){var s,r,q
for(s=new A.nm(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
LT(a){var s
if(!isFinite(a))return B.w.l(a)
s=B.w.l(a)
if(B.a.bU(s,".0"))s=B.a.B(s,0,s.length-2)
return s==="-0"?"0":s},
ck(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(b==null){a.a+="null"
return 4}if(A.bv(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.al(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.LT(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.w.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a8(b,g)
a.a+=r
return A.Eq(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.K(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.ck(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
n=A.aO(t.N)
for(s=J.E(b.gK());s.k();){m=s.gn()
r=J.Z(m)
if(!n.u(0,r))throw A.b(A.R('Cannot canonicalize map: keys collide after toString() ("'+r+'").',g))
o.push(new A.a6(r,m))}B.b.cq(o,new A.CU())
a.a+="{"
for(s=o.length,q=1,l=!0,k=0;k<o.length;o.length===s||(0,A.p)(o),++k,l=!1){j=o[k]
if(!l){a.a+=",";++q}i=B.h.a8(j.a,g)
a.a+=i
h=A.Eq(i)
a.a+=":"
q=q+h+1+A.ck(a,b.h(0,j.b))}a.a+="}"
return q+1}throw A.b(A.R("Cannot canonicalize value of type "+J.c2(b).l(0),g))},
CU:function CU(){},
Kq(a){var s,r,q,p=A.ag("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ei(a)
if(p==null)return B.dG
s=p.b
r=s[1]
r.toString
r=A.aK(r)
q=s[2]
q.toString
q=A.aK(q)
s=s[3]
s=A.h0(s==null?"":s,null)
return new A.e8(r,q,s==null?0:s)},
FD(a,b,c){var s,r=A.Kq(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eQ(a,b){return A.Kr(a,b)},
Kr(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eQ=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b5("SELECT sqlite_version() AS v"),$async$eQ)
case 3:g=d.V(c.bP(a2),"v")
g.toString
A.G(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b5("PRAGMA compile_options"),$async$eQ)
case 4:j=d.N(new c.e_(b.c3(a2,new A.xK(),t.X),k),k.i("o.E"))
n=B.b.bp(j,new A.xL())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eQ)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$eQ)
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
k=a0===B.bg
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b5("PRAGMA journal_mode"),$async$eQ)
case 19:l=a2
if(J.du(l))m=A.a7(J.bP(J.bP(l).gaU()))
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
case 18:case 14:h=A.FD(g,3,37)
k=k&&J.y(m,"wal")
q=new A.nB(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eQ,r)},
n3:function n3(a,b){this.a=a
this.b=b},
nB:function nB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xK:function xK(){},
xL:function xL(){},
ip:function ip(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a3:function a3(a,b){this.a=a
this.b=b},
ql:function ql(a,b){this.a=a
this.b=b},
qm:function qm(){},
qn:function qn(){},
EG(a){return new Uint8Array(A.bc(a))},
rW:function rW(){},
pT:function pT(a,b,c){this.b=a
this.c=b
this.d=c},
Ei(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cz
if(r===B.J){r=a.f
r.toString
r=!B.b.E(r,b)}else r=!1
if(r)return B.cE
return s
case 1:case 4:return!A.al(b)?B.cA:s
case 2:if(typeof b!="number")return B.b6
if(!isFinite(b))return B.b6
return s
case 3:return!A.bv(b)?B.cB:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cC:s
case 7:return!t.j.b(b)?B.cD:s}},
dt(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=a.gdi(),i=t.N,h=t.X,g=A.m(["id",e],i,h)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
g.j(0,l,A.E3(n,f.h(0,l),new Uint8Array(A.bc(B.e.A(q+l+"\x00"+e))),m))}k=A.u(i,h)
for(i=f.ga_(),i=i.gt(i);i.k();){h=i.gn()
s=h.a
if(s==="id"||s==="archived"||j.E(0,s))continue
k.j(0,s,h.b)}g.j(0,"extra",k.a===0?"":A.ai(k))
g.j(0,"archived",b?1:0)
g.j(0,"hidden",0)
return g},
Eh(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.E3(b,c,new Uint8Array(A.bc(B.e.A(a.a+"\x00"+b.a+"\x00"+f))),s)},
N3(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gdi()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.E3(n,g.h(0,l),new Uint8Array(A.bc(B.e.A(q+l+"\x00"+f))),m))}k=A.u(t.N,t.X)
for(s=g.ga_(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.E(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ai(k))
a.push(c?1:0)
a.push(0)},
bN(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.u(j,i),g=b.h(0,"extra")
if(typeof g=="string"&&g.length!==0){s=B.h.aG(g,null)
if(t.f.b(s))for(j=A.bo(s,j,i),j=new A.aN(j,A.n(j).i("aN<1,2>")).gt(0);j.k();){r=j.d
i=r.a
if(B.aF.E(0,i))continue
h.j(0,i,r.b)}}h.j(0,"id",b.h(0,"id"))
for(j=a.c,i=j.length,q=a.a,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
n=o.a
m=b.h(0,n)
l=A.a7(b.h(0,"id"))
h.j(0,n,A.E2(o,m,c,d,l==null?"":l,q))}h.j(0,k,J.y(b.h(0,k),1))
return h},
NF(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.E(b);s.k();)r.push(A.bN(a,s.gn(),c,d))
return r},
NG(a,b,c,d,e){var s,r,q,p,o,n,m=A.l([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.p)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a6(p,a.eh(p)))}s=A.l([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.LX(o.gn(),m,r,c,e,n))
return s},
LX(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a7(a.h(0,"id"))
l.j(0,p,A.E2(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.y(a.h(0,m),1))
return l},
E2(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=null,k=' row: encrypted field "'
if(b==null)return l
if(a.e){if(c==null)p=l
else p=c
s=p
if(s==null)throw A.b(A.A('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.dh("Corrupt "+f+k+a.a+'" must be TEXT ciphertext but is '+J.c2(b).l(0)+"."))
r=null
try{r=B.o.f7(s.uF(B.as.A(b),new Uint8Array(A.bc(B.e.A(f+"\x00"+a.a+"\x00"+e)))))}catch(o){q=A.D(o)
n=A.dh("Corrupt "+f+k+a.a+'" failed to decrypt ('+A.q(q)+").")
throw A.b(n)}m=a.b
A:{if(B.B===m){n=J.y(r,"1")||J.y(r,"true")
break A}if(B.V===m||B.X===m){n=A.aK(r)
break A}if(B.W===m){n=A.NJ(r)
break A}if(B.Y===m||B.Z===m){n=B.h.aG(r,l)
break A}n=r
break A}return n}n=a.b
if(n===B.B)return J.y(b,1)
if(n===B.Y||n===B.Z){if(typeof b!="string")throw A.b(A.dh("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c2(b).l(0)+"."))
return B.h.aG(b,l)}return b},
E3(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.A('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.y(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.Z(b)
break
case 6:case 7:s=A.ai(b)
break
default:A.G(b)
s=b}r=d.vl(B.e.A(s),c)
return B.ar.gfe().A(r)}switch(a.b.a){case 3:return J.y(b,!0)?1:0
case 6:case 7:return A.ai(b)
default:return b}},
bj(a,b){var s,r,q,p,o,n="archived",m=a.gdi(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.p)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.y(o,!0):o)}for(l=b.ga_(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.E(0,p))continue
k.j(0,p,s.b)}if(J.y(b.h(0,n),!0))k.j(0,n,!0)
return k},
Ca(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gdi(),i=A.l([],t.iE)
i.push(new A.a6("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a6(o,p.b===B.B?J.y(n,!0):n))}for(s=c.ga_(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.E(0,o))continue
i.push(new A.a6(o,r.b))}if(J.y(c.h(0,"archived"),!0))i.push(B.dE)
B.b.cq(i,new A.Cb())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.p)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a8(r.a,null)
a.a+=k
o=A.Eq(k)
a.a+=":"
m=m+o+1+A.ck(a,r.b)}a.a+="}"
return m+1},
d7:function d7(a,b){this.a=a
this.b=b},
Cb:function Cb(){},
JC(a){var s=A.dT(null,null,t.fq),r=t.N
s=new A.u2(a,s,A.u(r,t.g8),A.u(r,t.dz),new A.tb(A.NP(),A.u(r,t.f6)),A.u(r,t.oX))
s.pa(a,B.cg)
return s},
CF(a){var s,r,q,p
A:{if(a instanceof A.iX){s=A.MF(a.a)
break A}if(a instanceof A.jk){s=new A.cb(A.CF(a.a))
break A}if(a instanceof A.id){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.CF(r[p]))
s=new A.dw(s)
break A}if(a instanceof A.ie){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.CF(r[p]))
s=new A.d4(s)
break A}throw A.b(A.eO(u.P))}return s},
MF(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.aj(m,n,B.j)
return new A.aj(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.R("neq(null) matches no rows; use isNotNull.",o))
return new A.cb(new A.aj(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.U('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.aj(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.j
if(B.b.E(q,o))throw A.b(A.U("inValues does not accept null \u2014 use isNull().",o))
return new A.aj(m,"inValues",q)
case 7:p=a.d
if(p==null)p=B.j
if(p.length!==2)throw A.b(A.R("between requires exactly two values.",o))
return new A.aj(m,"between",p)
case 8:return new A.aj(m,"startsWith",[a.c])
case 9:return new A.aj(m,"endsWith",[a.c])
case 10:return new A.aj(m,"contains",[a.c])
case 11:return new A.aj(m,n,B.j)
case 12:return new A.cb(new A.aj(m,n,B.j))}},
f7:function f7(){},
AK:function AK(a){this.a=a},
pl:function pl(a,b,c,d,e){var _=this
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
u2:function u2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.ax=_.at=_.as=_.Q=_.y=null
_.ay=0},
uw:function uw(a){this.a=a},
ux:function ux(){},
uy:function uy(a,b){this.a=a
this.b=b},
uz:function uz(){},
uK:function uK(a,b){this.a=a
this.b=b},
uV:function uV(){},
uW:function uW(a,b){this.a=a
this.b=b},
uX:function uX(a,b){this.a=a
this.b=b},
uY:function uY(a,b){this.a=a
this.b=b},
uZ:function uZ(a,b){this.a=a
this.b=b},
v_:function v_(a,b){this.a=a
this.b=b},
v0:function v0(a,b){this.a=a
this.b=b},
uA:function uA(){},
uB:function uB(){},
uC:function uC(){},
uD:function uD(){},
uE:function uE(){},
uF:function uF(){},
uG:function uG(a){this.a=a},
uH:function uH(a){this.a=a},
uI:function uI(){},
uJ:function uJ(){},
uL:function uL(){},
uM:function uM(a){this.a=a},
uN:function uN(){},
uO:function uO(){},
uP:function uP(){},
uQ:function uQ(){},
uR:function uR(){},
uS:function uS(a){this.a=a},
uT:function uT(a){this.a=a},
uU:function uU(a,b){this.a=a
this.b=b},
uh:function uh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ui:function ui(){},
uj:function uj(a,b,c){this.a=a
this.b=b
this.c=c},
uk:function uk(){},
un:function un(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uo:function uo(){},
u5:function u5(a){this.a=a},
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
u4:function u4(a){this.a=a},
um:function um(a){this.a=a},
ul:function ul(a){this.a=a},
us:function us(a,b){this.a=a
this.b=b},
ut:function ut(a,b,c){this.a=a
this.b=b
this.c=c},
uu:function uu(a,b){this.a=a
this.b=b},
uv:function uv(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(a){this.a=a},
ud:function ud(a){this.a=a},
ue:function ue(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ug:function ug(a,b){this.a=a
this.b=b},
uf:function uf(a,b){this.a=a
this.b=b},
u8:function u8(a){this.a=a},
u6:function u6(){},
u7:function u7(){},
up:function up(a){this.a=a},
uq:function uq(a){this.a=a},
ur:function ur(a,b){this.a=a
this.b=b},
ub:function ub(a,b){this.a=a
this.b=b},
u9:function u9(){},
ua:function ua(){},
EW(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
ly:function ly(a,b){this.a=a
this.b=b},
iy:function iy(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.d=!1
_.f=_.e=null},
rT:function rT(){},
rS:function rS(){},
rU:function rU(){},
rR:function rR(a){this.a=a},
Ja(a){return'"'+A.C(a,'"','""')+'"'},
J9(a,b){var s,r,q,p=a.a,o=J.K(p),n=b.a,m=J.K(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.y(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qI:function qI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ix:function ix(a){this.a=a},
rQ:function rQ(a){this.a=a},
rP:function rP(){},
rO:function rO(a){this.a=a},
rN:function rN(a,b){this.a=a
this.b=b},
rK:function rK(a){this.a=a},
rL:function rL(a){this.a=a},
rM:function rM(){},
U(a,b){return new A.dY(b,a)},
dh(a){return new A.dg(a)},
jz(a){return new A.jy(a)},
FA(a){return new A.jD(a)},
ay(a){return new A.ha(a)},
tj(a){return new A.iJ(a)},
DD(a){return new A.jL(a)},
Fk(a){return new A.j4(a)},
ET(a){return new A.it(a)},
D7(a){return new A.fz(a)},
HP(a,b){var s,r="UNIQUE constraint failed",q=J.Z(a),p=a instanceof A.ce,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.E(q,"PRIMARY KEY")&&!B.a.E(q,r)
else p=!0
if(p)return new A.jr("PRIMARY KEY constraint violated.")
if(o===2067||B.a.E(q,r)){s=A.GI(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.hq(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.E(q,"NOT NULL constraint failed")){p=A.GI(q,"NOT NULL constraint failed:")
return new A.fX(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.E(q,"CHECK constraint failed")||o===275||n===275)return new A.ir("CHECK constraint violated.")
if(B.a.E(q,"FOREIGN KEY")||o===787||n===787)return new A.iI("FOREIGN KEY constraint violated.")
if(B.a.E(q,"database or disk is full"))return new A.dg("Database full: "+A.q(a))
return new A.dg("SQLite error: "+A.q(a))},
GI(a,b){var s,r,q,p,o,n,m=B.a.bV(a,b)
if(m<0)return"?"
s=B.a.ab(a,m+b.length)
r=s.length
q=B.a.bV(s,",")
if(q>=0)r=q
p=B.a.bV(s,"(")
s=B.a.c0(B.a.B(s,0,p>=0&&p<r?p:r))
o=B.a.cQ(s,".")
s=B.a.c0(o>=0?B.a.ab(s,o+1):s)
if(B.a.S(s,'"')&&B.a.bU(s,'"')){n=B.a.B(s,1,s.length-1)
s=A.C(n,'""','"')}return s.length===0?"?":s},
dJ:function dJ(){},
dY:function dY(a,b){this.b=a
this.a=b},
hq:function hq(a,b,c){this.b=a
this.c=b
this.a=c},
fX:function fX(a,b){this.b=a
this.a=b},
ir:function ir(a){this.a=a},
jr:function jr(a){this.a=a},
iI:function iI(a){this.a=a},
dg:function dg(a){this.a=a},
jA:function jA(a){this.a=a},
jy:function jy(a){this.a=a},
jD:function jD(a){this.a=a},
ha:function ha(a){this.a=a},
jR:function jR(a){this.a=a},
iJ:function iJ(a){this.a=a},
jL:function jL(a){this.a=a},
j4:function j4(a){this.a=a},
it:function it(a){this.a=a},
fz:function fz(a){this.a=a},
jx:function jx(a){this.a=a},
iC:function iC(a){this.b=a},
F_(a){return A.pI("lp_file_refs",new A.rY(a))},
bm:function bm(a,b,c,d,e,f,g,h,i,j){var _=this
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
rY:function rY(a){this.a=a},
v9:function v9(a,b){this.a=a
this.b=b},
va:function va(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vc:function vc(a){this.a=a},
vd:function vd(a){this.a=a},
ve:function ve(a){this.a=a},
vf:function vf(a){this.a=a},
vg:function vg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vb:function vb(a,b){this.a=a
this.b=b},
N_(){return new A.aG(Date.now(),0,!1)},
cL:function cL(a,b,c,d,e,f,g,h,i,j){var _=this
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
tb:function tb(a,b){this.f=a
this.r=b},
te:function te(){},
tc:function tc(a){this.a=a},
td:function td(){},
m8:function m8(a){this.b=0
this.c=a
this.d=$},
lo(a){var s=$.Es()
if(!s.b.test(a))throw A.b(A.R('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
EL(a){return new A.fq(a)},
ik(a,b){return new A.ij(a,b)},
kU(a,b,c,d,e,f){return A.Og(a,b,c,d,e,f)},
Og(a,b,c,a0,a1,a2){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d
var $async$kU=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=t.i5
f=A.l([],g)
e=new A.hz(A.d_(new A.pe(new A.CG(f),A.l([],g),t.mI)))
d=0
g=new A.cC(A.cD(a,"stream",t.K),t.lj)
p=3
k=t.D
case 6:s=8
return A.a(g.k(),$async$kU)
case 8:if(!a4){s=7
break}m=g.gn()
j=a2.$1(m)
if(!(j instanceof A.w)){i=new A.w($.B,k)
i.a=8
i.c=j
j=i}s=9
return A.a(j,$async$kU)
case 9:e.a.u(0,m)
d+=J.au(m)
l=a1
if(l!=null&&d>l){k=A.A("Blob exceeds the "+A.q(l)+" byte ceiling (streamed "+A.q(d)+" bytes).")
throw A.b(k)}s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(g.v(),$async$kU)
case 10:s=n.pop()
break
case 5:e.a.q()
if(c!=null&&!J.y(d,c))throw A.b(A.A("Size mismatch: expected "+A.q(c)+" but got "+A.q(d)))
h=A.at(B.b.gaq(f).a)
A.lo(h)
if(b!=null&&h!==b)throw A.b(A.A("SHA-256 mismatch: expected "+b+" but got "+h))
q=new A.nF(h)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kU,r)},
q9:function q9(){},
fq:function fq(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
nF:function nF(a){this.a=a},
CG:function CG(a){this.a=a},
iF:function iF(a){this.d=a},
rZ:function rZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t0:function t0(a,b){this.a=a
this.b=b},
t1:function t1(a,b,c){this.a=a
this.b=b
this.c=c},
t_:function t_(a,b,c){this.a=a
this.b=b
this.c=c},
t2:function t2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
t3:function t3(a){this.a=a},
t4:function t4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t5:function t5(){},
t6:function t6(a){this.a=a},
t7:function t7(a){this.a=a},
t8:function t8(a){this.a=a},
t9:function t9(){},
Oj(a,b,c){a.uw(!0,new A.CM(c),"lp_norm_"+b)},
Ej(a,b,c,d){var s,r='"'+A.C(d,'"','""')+'"',q=b.a
if(q.gF(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.C(c,'"','""')+'".'+r
return'"'+A.C("lp_norm_"+a,'"','""')+'"('+s+")"},
CM:function CM(a){this.a=a},
v1:function v1(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.x=f
_.y=g
_.Q=h
_.as=i
_.at=j
_.ax=k
_.ay=l},
M4(){return Date.now()},
py(a){var s,r,q
if(t.G.b(a)){s=A.u(t.N,t.X)
for(r=a.ga_(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.py(q.b))}return s}if(t.f.b(a)){s=A.u(t.z,t.X)
for(r=a.ga_(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.py(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.py(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.bc(a))
return a},
d6(a,b,c,d,e,f,g,h,i,j){var s=null,r=B.D,q=null,p=null,o=B.U
return A.JE(a,b,c,d,e,f,g,h,i,j)},
JE(b2,b3,b4,b5,b6,b7,b8,b9,c0,c1){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$d6=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:a4=null
a5=B.D
a6=null
a7=null
a8=B.U
a9=null
a9=b4
p=4
s=7
return A.a(A.cO(a9,b9),$async$d6)
case 7:s=8
return A.a(A.eQ(a9,b9),$async$d6)
case 8:n=c3
i=0
case 9:if(!(i<3)){s=11
break}m=B.cO[i]
s=12
return A.a(a9.O(m),$async$d6)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.d4[i]
s=16
return A.a(a9.O(l),$async$d6)
case 16:case 14:++i
s=13
break
case 15:h=a9
g=n
f=a6
if(f==null)f=A.O6()
e=a7
d=a4
c=a5
b=a8
a=new A.n1()
a0=new A.mB(b8,h,g,a,b7,b5,c1,b3,e,b2,b6,d,f,A.u(t.N,t.nv),c,b,new A.ql(A.dT(null,null,t.iv),A.dT(null,null,t.oZ)))
a1=new A.z4(A.bd(null,t.H),a.gx0())
a0.z=a1
b=a0.a=new A.v1(a0,h,g,a1,a,f,e,b6,d,b3,c,b)
a0.b=new A.yg(b)
a0.c=new A.vM()
a0.d=new A.xp()
c=$.CW()
a0.dx=new A.vY(a0,c)
a0.dy=new A.vT(a0,c)
a0.fr=new A.qU(a0)
a0.fx=new A.v9(a0,b2)
a0.e=new A.vj(b)
a0.f=new A.xw(b)
b=A.JC(b)
a0.r!==$&&A.eh()
a0.r=b
k=a0
s=17
return A.a(A.mC(a9,k.db),$async$d6)
case 17:h=c0.length,i=0
case 18:if(!(i<c0.length)){s=20
break}j=c0[i]
g=k.f
g===$&&A.t()
s=21
return A.a(g.aT(j),$async$d6)
case 21:case 19:c0.length===h||(0,A.p)(c0),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
b0=o.pop()
p=23
s=26
return A.a(a9.q(),$async$d6)
case 26:p=3
s=25
break
case 23:p=22
b1=o.pop()
s=25
break
case 22:s=3
break
case 25:throw b0
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d6,r)},
cO(a,b){return A.JD(a,b)},
JD(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cO=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.bg?2:3
break
case 2:q=5
s=8
return A.a(a.O("PRAGMA journal_mode=WAL"),$async$cO)
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
return A.a(a.O("PRAGMA wal_autocheckpoint=0"),$async$cO)
case 9:s=10
return A.a(a.O("PRAGMA mmap_size=67108864"),$async$cO)
case 10:case 3:s=11
return A.a(a.O("PRAGMA synchronous=NORMAL"),$async$cO)
case 11:s=12
return A.a(a.O("PRAGMA foreign_keys=ON"),$async$cO)
case 12:s=13
return A.a(a.O("PRAGMA busy_timeout=5000"),$async$cO)
case 13:s=14
return A.a(a.O("PRAGMA cache_size=-8000"),$async$cO)
case 14:s=15
return A.a(a.O("PRAGMA temp_store=MEMORY"),$async$cO)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cO,r)},
mC(a,b){var s=0,r=A.h(t.H),q,p
var $async$mC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.bG("lp_migrations","version = ?",[1]),$async$mC)
case 3:if(p.du(d)){s=1
break}s=4
return A.a(a.aE(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$mC)
case 4:case 1:return A.e(q,r)}})
return A.f($async$mC,r)},
nD:function nD(a,b,c){this.a=a
this.c=b
this.e=c},
wC:function wC(a){this.a=a},
mB:function mB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.w=a
_.x=b
_.y=c
_.z=$
_.Q=d
_.as=e
_.at=f
_.ax=g
_.ay=h
_.ch=i
_.CW=j
_.cx=k
_.cy=l
_.db=m
_.fx=_.fr=_.dy=_.dx=$
_.fy=n
_.go=!1
_.k1=o
_.k2=p
_.a$=q},
oW:function oW(){},
vj:function vj(a){this.a=a},
vm:function vm(a){this.a=a},
vl:function vl(a,b){this.a=a
this.b=b},
vk:function vk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fR(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.x
h=b.x
g=A.a0(h).i("ao<1>")
f=A.N(new A.ao(h,new A.vH(c,b),g),g.i("o.E"))
B.b.cq(f,new A.vI())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.db,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.ay('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jM()
$.kY()
j.aB()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aT(a,b,m),$async$fR)
case 8:s=6
break
case 7:s=9
return A.a(A.j3(a,b,m),$async$fR)
case 9:case 6:if(j.b==null)j.b=$.n6.$0()
s=10
return A.a(A.fS(i,j.gn_(),o,q+l,p,l),$async$fR)
case 10:case 3:f.length===h||(0,A.p)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.ay('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fR)
case 11:return A.e(null,r)}})
return A.f($async$fR,r)},
fS(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fS=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b5("SELECT MAX(version) AS m FROM lp_migrations"),$async$fS)
case 2:q=p.ff(h)
if(q==null)q=0
s=3
return A.a(a.aE(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fS)
case 3:return A.e(null,r)}})
return A.f($async$fS,r)},
j3(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$j3=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.x
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b5("PRAGMA table_info("+('"'+A.C(k,'"','""')+'"')+")"),$async$j3)
case 2:i=h.ca(new g.e_(f.c3(e,new A.vD(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Et()
if(!m.b.test(n))A.v(A.ay('Field "'+n+u.Z))
if(o.c)throw A.b(A.ay('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.E(0,n)){s=4
break}m=A.C(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.C(n,'"','""')+'"')+" "+o.gl2()),$async$j3)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.p)(j),++p
s=3
break
case 5:s=c.d!=null?7:8
break
case 7:s=9
return A.a(A.eG(a,b,c),$async$j3)
case 9:case 8:return A.e(null,r)}})
return A.f($async$j3,r)},
eG(a4,a5,a6){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eG=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a=a4.x
a0=a5.a
a1="migration:"+a0+":"+a6.a+":cursor"
s=2
return A.a(A.mL(a,a1),$async$eG)
case 2:a2=a8
a3=A.h0(a2==null?"":a2,null)
if(a3==null)a3=0
q=t.af,p=t.b3,o=a4.cx,n=a4.cy,m=a6.d,l=t.kW,k=t.P
case 3:j={}
s=5
return A.a(a.ae("SELECT rowid, * FROM "+('"'+A.C(a0,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[a3,1e4]),$async$eG)
case 5:i=a8
h=J.K(i)
if(h.gF(i)){s=4
break}g=A.l([],l)
j.a=a3
f=h.gt(i)
case 6:if(!f.k()){s=7
break}e=f.gn()
d=e.h(0,"rowid")
d.toString
j.a=A.ap(d)
c=A.bN(a5,e,o,n)
e=m.$1(c)
if(!p.b(e)){d=new A.w($.B,q)
d.a=8
d.c=e
e=d}s=8
return A.a(e,$async$eG)
case 8:b=a8
if(b.gT(b)){e=j.a
d=A.a7(c.h(0,"id"))
g.push(new A.e8(e,d==null?"":d,b))}s=6
break
case 7:s=g.length!==0?9:11
break
case 9:s=12
return A.a(a.a0(new A.vE(j,g,a5,a4,a1),k),$async$eG)
case 12:s=10
break
case 11:s=13
return A.a(A.fQ(a,a1,B.c.l(j.a)),$async$eG)
case 13:case 10:if(h.gm(i)<1e4){s=4
break}a3=j.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$eG,r)},
aT(a,b,c){return A.JP(a,b,c)},
JP(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aT=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.x
if(!b0.at)throw A.b(A.D7('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.ix(b0.y).k9(b1)
j=A.JR(b0.w,a2,a3)
p=4
s=7
return A.a(A.mL(a7,l),$async$aT)
case 7:i=b4
a3=b0.f
a3===$&&A.t()
s=8
return A.a(a3.hR(j),$async$aT)
case 8:h=b4
if(J.y(i,"done")&&h){a3=A.D7('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.q(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.mM(a7,m),$async$aT)
case 9:g=b4
s=10
return A.a(A.mM(a7,n),$async$aT)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b5("SELECT COUNT(*) c FROM "+('"'+A.C(m,'"','""')+'"')),$async$aT)
case 13:a0=a9.ff(b4)
e=a0==null?0:a0
a3=A.C(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.C(n,'"','""')+'"')),$async$aT)
case 14:s=15
return A.a(A.cP(b0,a7,b1,k,l,e),$async$aT)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.C(m,'"','""')+'"')),$async$aT)
case 16:s=h?17:18
break
case 17:s=19
return A.a(a3.hZ(j),$async$aT)
case 19:case 18:s=20
return A.a(A.fQ(a7,l,"rebuilding"),$async$aT)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.C(j,"'","''")+"'"),$async$aT)
case 21:a3=k.b
a4=A.C(n,'"','""')
d=B.a.kJ(a3,'"'+a4+'"','"'+A.C(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aT)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ae("SELECT rowid, * FROM "+('"'+A.C(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aT)
case 25:b=b4
if(J.bD(b)){s=24
break}s=26
return A.a(a7.a0(new A.vG(b,b1,b0,b2,m),a3),$async$aT)
case 26:a4=J.V(J.pR(b),"rowid")
a4.toString
c=A.ap(a4)
if(J.au(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b5("SELECT COUNT(*) c FROM "+('"'+A.C(n,'"','""')+'"')),$async$aT)
case 27:a5=a9.ff(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b5("SELECT COUNT(*) c FROM "+('"'+A.C(m,'"','""')+'"')),$async$aT)
case 28:e=a9.ff(b4)
a0=e==null?0:e
if(!J.y(a,a0)){a3=A.A('Rebuild of "'+a2+'" count mismatch: '+A.q(a)+" vs "+A.q(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.C(n,'"','""')+'"')),$async$aT)
case 29:a3=A.C(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.C(n,'"','""')+'"')),$async$aT)
case 30:s=31
return A.a(A.cP(b0,a7,b1,k,l,a),$async$aT)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.D(a8)
if(a3 instanceof A.fz)throw a8
else if(a3 instanceof A.ce){a1=a3
throw A.b(A.D7('Destructive migration for "'+a2+'" failed: '+A.q(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aT,r)},
cP(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h
var $async$cP=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.O(q[o]),$async$cP)
case 5:case 3:q.length===p||(0,A.p)(q),++o
s=2
break
case 4:q=c.w
p=q!=null
s=p?6:7
break
case 6:s=8
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.C(c.a+"_fts",'"','""')+'"')),$async$cP)
case 8:case 7:n=d.d,m=n.length,o=0
case 9:if(!(o<n.length)){s=11
break}s=12
return A.a(b.O(n[o]),$async$cP)
case 12:case 10:n.length===m||(0,A.p)(n),++o
s=9
break
case 11:s=p?13:14
break
case 13:p=c.a
n=p+"_fts"
m=A.C(n,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+m+'"')+"("+('"'+A.C(n,'"','""')+'"')+") VALUES('delete-all')"),$async$cP)
case 15:m=q.a
l=m.$ti.i("Y<J.E,j>")
k=new A.Y(m,A.pH(),l).C(0,", ")
j=new A.Y(m,new A.vF(c,q),l).C(0,", ")
q=A.C(n,'"','""')
s=16
return A.a(b.O("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.C(p,'"','""')+'"')),$async$cP)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.b5("SELECT COUNT(*) c FROM "+('"'+A.C(q,'"','""')+'"')),$async$cP)
case 17:i=h.ff(a0)
if((i==null?0:i)!==f)throw A.b(A.A('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.fQ(b,e,"done"),$async$cP)
case 18:return A.e(null,r)}})
return A.f($async$cP,r)},
mM(a,b){var s=0,r=A.h(t.y),q,p
var $async$mM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ae("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mM)
case 3:q=p.du(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mM,r)},
JR(a,b,c){var s=null,r=$.ic(),q=r.uM(a),p=A.dP(a,r.a).gk5()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.nf(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
JN(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===b)return p}return null},
Fj(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.U('Field "'+s+'" is required.',s))}if(b==null)return
r=A.Ei(a,b)
if(r!=null)throw A.b(A.U(A.JO(a,b,r),a.a))},
JQ(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
A.Fj(p,b.h(0,p.a))}},
JO(a,b,c){var s,r=a.a,q=J.c2(b)
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
case 6:s='Field "'+r+'" has unknown enum value "'+A.q(b)+'".'
break
default:s=null}return s},
mL(a,b){var s=0,r=A.h(t.U),q,p,o
var $async$mL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.ns("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$mL)
case 3:p=d
o=J.K(p)
q=o.gF(p)?null:A.a7(J.V(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mL,r)},
fQ(a,b,c){var s=0,r=A.h(t.H)
var $async$fQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ci(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.S),$async$fQ)
case 2:return A.e(null,r)}})
return A.f($async$fQ,r)},
M5(){return Date.now()},
vH:function vH(a,b){this.a=a
this.b=b},
vI:function vI(){},
vD:function vD(){},
vE:function vE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vG:function vG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vF:function vF(a,b){this.a=a
this.b=b},
vM:function vM(){},
c1(a){var s=A.u(t.N,t.X)
a.a4(0,new A.CR(s))
return s},
K9(a,b,c,d){return new A.jt(new A.wQ(c,b,d,a))},
NM(a,b){var s=a.e,r=s.a
if(!(r!=null&&A.H7(r)==null))if(!s.b.gaU().bp(0,A.Oc()))if(a.z==null){r=a.y
if(!r.gT(r))B.b.bp(a.x,new A.Cm())}return!0},
MN(a){return a!=null&&A.H7(a)==null},
H7(a){var s,r,q=A.d2(a)
if(q===B.e9)return B.dc
if(q===B.e7)return B.de
if(q===B.ef)return B.da
if(q===B.dX)return B.dd
if(q===B.dY){t.ko.a(a)
return B.db}if(q===B.e0){t.d_.a(a)
s=A.u(t.N,t.X)
s.j(0,"kind","counter")
r=a.a
if(r!=null)s.j(0,"min",r)
r=a.b
if(r!=null)s.j(0,"max",r)
return s}return null},
Hi(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(b==null)return a
if(!t.f.b(b))throw A.b(A.U('Store policy for "'+a.a+'" must be a map.',null))
s=A.c1(b)
r=s.h(0,"conflictPolicy")
q=r==null?a.e:A.M0(r,a.a,c)
p=a.a
o=A.M1(s.h(0,"validator"),p,c)
n=A.LY(s.h(0,"documentMigrations"),a,c)
m=A.LZ(s.h(0,"migrationTransforms"),a,c)
if(q===a.e&&o==null&&n.gF(n)&&m==null)return a
l=m==null?a.x:m
k=n.gF(n)?a.y:n
j=o==null?a.z:o
return new A.c5(p,a.b,a.c,a.d,q,a.f,a.r,a.w,l,k,j,a.Q,t.bU)},
M0(a,b,c){var s,r,q=A.BZ(a,'conflictPolicy of "'+b+'"'),p=q.h(0,"collectionResolver"),o=q.h(0,"fieldOverrides"),n=A.u(t.N,t.pb)
if(o!=null)A.BZ(o,'fieldOverrides of "'+b+'"').a4(0,new A.BR(n,b,c))
s=p==null?null:A.GE(p,null,c,"record",'collectionResolver of "'+b+'"')
r=J.y(q.h(0,"editsUnarchive"),!0)
return new A.lB(s,n,r,typeof q.h(0,"missingRemote")=="string"?B.b.cf(B.cI,new A.BS(q),new A.BT(b,q)):B.aB)},
GE(a,b,c,d,e){var s,r,q,p=" must be a number.",o=A.BZ(a,e),n=A.GV(o.h(0,"kind"),e,"kind")
switch(n){case"remoteWins":return B.Q
case"localWins":return B.bW
case"setUnionDeletionWins":return B.c_
case"appendOnlyLines":return B.bH
case"appendOnlyList":return B.bI
case"counter":s=o.h(0,"min")
r=o.h(0,"max")
if(s!=null&&typeof s!="number")throw A.b(A.U('"min" at '+e+p,null))
if(r!=null&&typeof r!="number")throw A.b(A.U('"max" at '+e+p,null))
return new A.et(A.BD(s),A.BD(r))
case"custom":q=A.GV(o.h(0,"id"),e,"id")
return A.K9(b,q,c,d)
default:throw A.b(A.U('Unknown resolver kind "'+n+'" at '+e+".",null))}},
M1(a,b,c){if(a==null)return null
if(!A.bv(a)||!a)throw A.b(A.U('"validator" of "'+b+'" must be true when present.',null))
return new A.BU(c,b)},
LY(a,b,c){var s,r,q,p,o
if(a==null)return B.bb
s=A.GU(a,'documentMigrations of "'+b.a+'"')
r=A.u(t.S,t.mi)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p){o=s[p]
r.j(0,o,new A.BO(c,b,o))}return r},
LZ(a,b,c){var s,r,q,p,o,n,m,l
if(a==null)return null
s=A.GU(a,'migrationTransforms of "'+b.a+'"')
r=A.u(t.S,t.y)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.j(0,s[p],!0)
q=A.l([],t.c0)
for(o=b.x,n=o.length,p=0;p<o.length;o.length===n||(0,A.p)(o),++p){m=o[p]
l=m.a
q.push(r.I(l)?new A.bW(l,m.b,m.c,new A.BP(c,b,m)):m)}return q},
BZ(a,b){if(t.f.b(a))return A.c1(a)
throw A.b(A.U("The value at "+b+" must be a map.",null))},
E7(a,b,c){if(t.f.b(a))return A.c1(a)
throw A.b(A.U('"'+c+'" at '+b+" must be a map.",null))},
GV(a,b,c){if(typeof a=="string")return a
throw A.b(A.U('"'+c+'" at '+b+" must be a string.",null))},
MM(a,b,c){var s,r,q,p
if(!t.j.b(a))throw A.b(A.U('"'+c+'" at '+b+" must be a list.",null))
s=A.l([],t.s)
for(r=J.E(a),q='"'+c+'" at '+b+" must contain only strings.";r.k();){p=r.gn()
if(typeof p=="string")s.push(p)
else s.push(A.v(A.U(q,null)))}return s},
GU(a,b){var s,r,q,p
if(!t.j.b(a))throw A.b(A.U("The value at "+b+" must be a list.",null))
s=A.l([],t.t)
for(r=J.E(a),q="The value at "+b+" must contain only ints.";r.k();){p=r.gn()
if(A.al(p))s.push(p)
else s.push(A.v(A.U(q,null)))}return s},
CR:function CR(a){this.a=a},
CQ:function CQ(){},
jt:function jt(a){this.a=a},
wQ:function wQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Cm:function Cm(){},
BR:function BR(a,b,c){this.a=a
this.b=b
this.c=c},
BS:function BS(a){this.a=a},
BT:function BT(a,b){this.a=a
this.b=b},
BU:function BU(a,b){this.a=a
this.b=b},
BO:function BO(a,b,c){this.a=a
this.b=b
this.c=c},
BP:function BP(a,b,c){this.a=a
this.b=b
this.c=c},
n1:function n1(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
v2:function v2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Bd:function Bd(){},
xf:function xf(a,b){this.a=a
this.b=b},
kQ(a){var s=A.C(a,"\\","\\\\")
s=A.C(s,"%","\\%")
return A.C(s,"_","\\_")},
E1(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.aj){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.v(A.aB(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aB(q,l,'The "'+s+'" predicate carries exactly '+A.q(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aB(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gaq(a.c)==null)throw A.b(A.aB(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.cb){A.E1(a.a)
break A}p=a instanceof A.dw
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d4
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aB(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.p)(n),++m)A.E1(n[m])}break A}},
BL(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.aj)return A.GC(a,!1,b)
if(a instanceof A.cb){s=a.a
r=A.BL(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.d4||s instanceof A.cb){s=new A.a6("NOT "+q,p)
break A}s=new A.a6("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dw){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){l=A.BL(s[m],!1)
o.push(l.a)
B.b.D(p,l.b)}k=B.b.C(o," AND ")
return new A.a6(b?k:"("+k+")",p)}if(a instanceof A.d4){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){j=A.LV(s[m])
o.push(j.a)
B.b.D(p,j.b)}return new A.a6("("+B.b.C(o," OR ")+")",p)}throw A.b(A.eO(u.M))},
LV(a){var s
A:{if(a instanceof A.aj){s=A.GC(a,!0,!1)
break A}s=A.BL(a,!1)
break A}return s},
GC(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.C(a.a,'"','""')+'"',n=A.N(a.c,t.X),m=a.b
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
case"inValues":s=o+" IN ("+B.b.C(A.a8(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.kQ(A.G(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kQ(A.G(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kQ(A.G(r))+"%"
break
default:throw A.b(A.aB(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a6(q?"("+s+")":s,n)},
da:function da(){},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a){this.a=a},
dw:function dw(a){this.a=a},
d4:function d4(a){this.a=a},
Ka(a,b){var s,r=$.h4.G(0,a)
if(r!=null){$.h4.j(0,a,r)
return r}s=b.$0()
if($.h4.a>=512)$.h4.G(0,new A.S($.h4,A.n($.h4).i("S<1>")).gH(0))
$.h4.j(0,a,s)
return s},
b3:function b3(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
na:function na(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
xc:function xc(a,b,c){this.a=a
this.b=b
this.c=c},
x7:function x7(){},
x8:function x8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x9:function x9(a){this.a=a},
xa:function xa(){},
xb:function xb(){},
Kl(a){var s,r,q=B.a.c0(a)
if(q.length===0)return
s=!0
if(!B.a.E(q,'"')){r=A.ag("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.ag("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.U("Invalid search term: "+a,null))},
Kk(a){var s,r,q,p
for(s=B.a.d2(a,A.ag("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
if(p.length!==0&&new A.jB(p).gm(0)<3)throw A.b(A.U('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cS:function cS(a,b){this.a=a
this.b=b},
xy:function xy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xp:function xp(){},
kL(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.dJ)throw q
else{s=r
r=A.dh("Malformed schema JSON: "+A.q(s))
throw A.b(r)}}},
EZ(a){return A.kL(new A.rX(a))},
Jv(a){return A.kL(new A.tQ(a))},
Jm(a){return A.kL(new A.ti(a))},
F3(a,b){var s
if(new A.jB(a).gm(0)!==1)throw A.b(A.ay('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.ay('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Jl(a){return A.kL(new A.th(a))},
Jk(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga_(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Ku(a){return A.kL(new A.xO(a))},
qr(a,b){return A.kL(new A.qs(a,b))},
C6(a,b,c,d){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i
var $async$C6=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=c+1,o=a.y,n=t.af,m=t.b3,l=b
case 3:if(!(p<=d)){s=5
break}k=o.h(0,p)
s=k!=null?6:7
break
case 6:j=k.$1(l)
if(!m.b(j)){i=new A.w($.B,n)
i.a=8
i.c=j
j=i}s=8
return A.a(j,$async$C6)
case 8:l=f
case 7:case 4:++p
s=3
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$C6,r)},
c8:function c8(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rX:function rX(a){this.a=a},
iO:function iO(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
tQ:function tQ(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a){this.a=a},
ey:function ey(a){this.a=a},
th:function th(a){this.a=a},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xO:function xO(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.$ti=m},
qs:function qs(a,b){this.a=a
this.b=b},
DA(a){var s,r=A.LW(a),q=A.l([],t.s),p=a.e
if(p.a!=null)q.push("conflictResolver")
s=p.b
if(s.gT(s))q.push("fieldResolvers")
if(B.b.bp(a.x,new A.xs()))q.push("migrationTransform")
s=a.y
if(s.gT(s))q.push("documentMigrations")
if(a.z!=null)q.push("validatorCallback")
return new A.no(r,A.fN(q,t.N),1,a.a,a.b,2)},
Kj(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.ay("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aX(0,new A.xt(),s,r)
p=q.h(0,"formatVersion")
if(!A.al(p))throw A.b(A.ay("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.FA("Schema manifest format v"+A.q(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.al(n)||!j.b(m)||!t.j.b(l)||!A.al(k))throw A.b(A.ay('Malformed schema manifest for store "'+A.q(o==null?"???":o)+'"'))
return new A.no(m.aX(0,new A.xu(),s,t.X),A.fN(J.c3(l,new A.xv(),r),s),p,o,n,k)},
LW(a){var s,r,q,p,o,n,m=a.e,l=t.N,k=t.X,j=A.c9(a.p(),l,k),i=m.b.gK()
i=A.N(i,A.n(i).i("o.E"))
B.b.aJ(i)
j.j(0,"conflictPolicy",A.m(["editsUnarchive",m.c,"missingRemote",m.d.b,"hasCollectionResolver",m.a!=null,"fieldOverrideNames",i],l,t.K))
i=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.p()
n=A.dI(null,null,l,k)
n.D(0,o)
n.j(0,"hasTransform",p.d!=null)
i.push(n)}j.j(0,"migrations",i)
l=a.y.gK()
l=A.N(l,A.n(l).i("o.E"))
B.b.aJ(l)
j.j(0,"documentMigrationVersions",l)
j.j(0,"hasValidatorCallback",a.z!=null)
return j},
no:function no(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xs:function xs(){},
xt:function xt(){},
xu:function xu(){},
xv:function xv(){},
xw:function xw(a){this.a=a},
xx:function xx(a,b){this.a=a
this.b=b},
IY(a,b){var s,r=a.a
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
s='Field "'+r+'" must be one of '+B.b.C(s,", ")+"."
break
default:s=null}return s},
dN:function dN(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qE:function qE(a,b){this.a=a
this.b=b},
qH:function qH(a,b){this.a=a
this.b=b},
qD:function qD(a,b){this.a=a
this.b=b},
qG:function qG(a,b){this.a=a
this.b=b},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(a,b){this.a=a
this.b=b},
qw:function qw(a,b){this.a=a
this.b=b},
qF:function qF(a,b){this.a=a
this.b=b},
qB:function qB(a,b){this.a=a
this.b=b},
qy:function qy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qx:function qx(){},
qC:function qC(){},
qv:function qv(){},
qt:function qt(){},
qu:function qu(){},
hy:function hy(){},
oC:function oC(){},
pW:function pW(a){this.a=a},
pX:function pX(a,b){this.a=a
this.b=b},
pY:function pY(a){this.a=a},
pZ:function pZ(){},
D4(a){return A.pI("lp_conflicts",new A.qT(a))},
bl:function bl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
qZ:function qZ(a,b,c){this.a=a
this.b=b
this.c=c},
qY:function qY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qW:function qW(a,b){this.a=a
this.b=b},
qX:function qX(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nJ:function nJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ya:function ya(a){this.a=a},
y0:function y0(a){this.a=a},
y8:function y8(a,b){this.a=a
this.b=b},
y7:function y7(a){this.a=a},
y6:function y6(a,b){this.a=a
this.b=b},
y9:function y9(a){this.a=a},
y3:function y3(a,b){this.a=a
this.b=b},
y4:function y4(){},
y5:function y5(){},
y1:function y1(){},
y2:function y2(a){this.a=a},
eE(a){return new A.d8(a)},
Ep(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fh(a,b)
r=A.bj(a,s)
q=A.ai(r)
p=A.at(B.m.A(B.e.A(q)).a)
return new A.eI(b,s,q,p,k)}catch(m){l=A.D(m)
if(l instanceof A.d8){o=l
return new A.eI(b,k,k,k,o.a)}else{n=l
l=A.q(n)
return new A.eI(b,k,k,k,l)}}},
Ob(a,b){var s,r=A.l([],t.i7)
for(s=J.E(b);s.k();)r.push(A.Ep(a,s.gn()))
return r},
Eo(a,b){var s=0,r=A.h(t.eT),q
var $async$Eo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Ob(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Eo,r)},
fh(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bo(b.d,j,i),g=a.gdi(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.y(f,s))throw A.b(A.eE('data.id "'+A.q(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bv(r))throw A.b(A.eE('Field "archived" must be a boolean, got '+J.c2(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.eE('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Ei(o,n)
if(m!=null)throw A.b(A.eE(A.MK(o,n,m)))
q.j(0,s,n)}for(j=new A.aN(h,A.n(h).i("aN<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.E(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.y(r,!0))
return q},
MK(a,b,c){var s,r=a.a,q=J.c2(b)
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
case 6:s='Field "'+r+'" has unknown enum value "'+A.q(b)+'".'
break
default:s=null}return s},
i8(a){var s,r,q,p
if(a==null||a.length===0)return B.k
s=null
try{s=B.h.aG(a,null)}catch(q){r=A.D(q)
p=A.eE("Corrupt payload JSON: "+A.q(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.eE("Corrupt payload JSON: expected an object, got "+J.c2(s).l(0)+"."))
return A.bo(s,t.N,t.X)},
d8:function d8(a){this.a=a},
eI:function eI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bL(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aO(i),g=A.ca(a.gK(),i)
g.D(0,b.gK())
for(g=A.e6(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.p.V(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.l1(o.gK(),new A.Ce())&&J.l1(n.gK(),new A.Cf())){m=A.bL(A.bo(o,i,q),A.bo(n,i,q))
for(l=A.n(m),k=new A.e5(m,m.r,l.i("e5<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
Nu(a,b,c){var s,r,q,p,o,n=t.N,m=A.ca(a.gK(),n)
m.D(0,b.gK())
m.D(0,new A.S(c,A.n(c).i("S<1>")))
s=A.u(n,t.X)
for(n=A.e6(m,m.r,A.n(m).c),m=n.$ti.c;n.k();){r=n.d
if(r==null)r=m.a(r)
q=a.h(0,r)
p=b.h(0,r)
o=c.h(0,r)
if(B.p.V(p,o))s.j(0,r,p)
else if(B.p.V(p,q))s.j(0,r,o)
else if(B.p.V(o,q))s.j(0,r,p)
else s.j(0,r,o)}return s},
Fh(a,b,c,d,e,f,g){return new A.j2(g,e,a,d,f,b,c)},
HI(a,b,c,d,e){var s,r,q,p,o,n
if(e instanceof A.hd)return e.fI(b,c,d)
if(e instanceof A.et){s=typeof b=="number"?b:0
r=typeof c=="number"?c:0
q=typeof d=="number"?d:0
p=A.al(s)&&A.al(r)&&A.al(q)
o=s+(r-s)+(q-s)
n=e.a
if(n!=null&&o<n)o=n
n=e.b
if(n!=null&&o>n)o=n
return p?B.w.fN(o):o}if(e instanceof A.ej)return e.fI(b,c,d)
if(e instanceof A.fo)return e.fI(b,c,d)
if(e instanceof A.fO)return c
if(e instanceof A.h7)return d
return d},
ME(a,b){var s,r,q,p=a.b
if(p.gF(p))return null
for(s=b;;){r=p.h(0,s)
if(r!=null)return r
q=B.a.cQ(s,".")
if(q<=0)return null
s=B.a.B(s,0,q)}},
Dq(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$Dq=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.JM(B.c8,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Dq,r)},
JM(a,b,c,d,e,f,g){var s,r,q,p=A.bL(b,c),o=A.bL(b,f),n=A.Fh(b,p,o,c,e,f,g),m=p.a!==0&&o.a!==0,l=d.a
if(l!=null&&m){s=new A.vC(b,c,f,p,o)
r=l.ak(n)
if(t.op.b(r))return r.W(s,t.r)
return s.$1(r)}l=t.N
s=A.ca(c.gK(),l)
s.D(0,new A.S(f,A.n(f).i("S<1>")))
s.D(0,b.gK())
q=A.N(s,A.n(s).c)
return A.vz(a,b,p,o,0,q,c,A.u(l,t.X),d,e,f,new A.AT(),g)},
vz(a,b,c,d,e,f,g,h,i,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j="archived"
if(e>=f.length){if(i.c)if(!new A.ao(c,new A.vA(),A.n(c).i("ao<1>")).gF(0)&&J.y(h.h(0,j),!0))h.j(0,j,!1)
return new A.aQ(h,a2.a,null)}s=f[e]
r=g.h(0,s)
q=a1.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.y(p,!0)
n=J.y(r,!0)
m=J.y(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{l=i.b.h(0,s)
if(l!=null)h.j(0,s,A.HI(s,p,r,q,l))
else h.j(0,s,m)}return A.vz(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)}k=A.Fi(a,p,r,s,i,q,a0,a2,a3)
if(k instanceof A.w)return k.W(new A.vB(h,s,f,e,b,g,a1,i,a3,a0,a,c,d,a2),t.r)
h.j(0,s,k)
return A.vz(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)},
Fi(a2,a3,a4,a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(B.p.V(a4,a7))return a4
if(B.p.V(a4,a3))return a7
if(B.p.V(a7,a3))return a4
s=t.f
r=!1
if(s.b(a4))if(s.b(a7))if(J.l1(a4.gK(),new A.vt()))if(J.l1(a7.gK(),new A.vu()))if(a3!=null)r=s.b(a3)&&J.l1(a3.gK(),new A.vv())
else r=!0
if(r){r=t.N
q=t.X
p=A.bo(a4,r,q)
o=A.bo(a7,r,q)
n=a3==null?null:A.bo(s.a(a3),r,q)
s=A.aO(r)
m=n==null
l=m?null:new A.S(n,A.n(n).i("S<1>"))
if(l!=null)s.D(0,l)
s.D(0,new A.S(p,A.n(p).i("S<1>")))
s.D(0,new A.S(o,A.n(o).i("S<1>")))
k=A.u(r,q)
j=[]
for(r=s.$ti.c,l=A.e6(s,s.r,r),i=a5+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.Fi(a2,e,p.h(0,f),i+f,a6,o.h(0,f),a8,a9,b0)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.e6(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.Dd(new A.Y(j,new A.vw(),A.a0(j).i("Y<1,x<k?>>")),q).W(new A.vx(s,k),q)}a=A.ME(a6,a5)
if(a!=null){if(a instanceof A.jt){a0=B.a.ab(a5,B.a.cQ(a5,".")+1)
s=t.N
r=t.X
q=A.m([a0,a3],s,r)
m=A.m([a0,a4],s,r)
l=A.m([a0,a7],s,r)
a1=a.ak(A.Fh(q,A.an([a0],s),A.an([a0],s),m,a8,l,b0))
if(t.op.b(a1))return a1.W(new A.vy(a9,a7,a0),r)
if(a1==null||a1.b){a9.a=!0
return a7}return a1.a.h(0,a0)}return A.HI(a5,a3,a4,a7,a)}return a7},
Hy(a,b,c,d,e,f){return A.Dq(a,b,c,d,e,f)},
Ce:function Ce(){},
Cf:function Cf(){},
j2:function j2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(){},
h7:function h7(){},
fO:function fO(){},
hd:function hd(){},
et:function et(a,b){this.a=a
this.b=b},
ej:function ej(){},
pV:function pV(a){this.a=a},
fo:function fo(){},
pU:function pU(a){this.a=a},
lJ:function lJ(){},
mJ:function mJ(a,b,c){this.a=a
this.b=b
this.c=c},
AT:function AT(){this.a=!1},
AR:function AR(){},
z9:function z9(){},
vC:function vC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vA:function vA(){},
vB:function vB(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
vt:function vt(){},
vu:function vu(){},
vv:function vv(){},
vw:function vw(){},
vx:function vx(a,b){this.a=a
this.b=b},
vy:function vy(a,b,c){this.a=a
this.b=b
this.c=c},
vT:function vT(a,b){this.a=a
this.b=b},
vV:function vV(a){this.a=a},
vW:function vW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a){this.a=a},
jw:function jw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vY:function vY(a,b){this.a=a
this.b=b},
w3:function w3(a,b){this.a=a
this.b=b},
w1:function w1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w0:function w0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
w_:function w_(a,b,c){this.a=a
this.b=b
this.c=c},
w2:function w2(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.b=a
this.f=b},
wR:function wR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wZ:function wZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wY:function wY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wT:function wT(a,b,c){this.a=a
this.b=b
this.c=c},
wS:function wS(a,b,c){this.a=a
this.b=b
this.c=c},
wV:function wV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wU:function wU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wX:function wX(a,b,c){this.a=a
this.b=b
this.c=c},
wW:function wW(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
x_:function x_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
x1:function x1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x6:function x6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x4:function x4(a,b,c){this.a=a
this.b=b
this.c=c},
x3:function x3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x2:function x2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x0:function x0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x5:function x5(a,b,c,d,e,f,g,h,i,j){var _=this
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
cf:function cf(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
xY:function xY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xZ:function xZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FH(a){return new A.eT(a)},
ld(a){return new A.c4(a)},
Jj(a){return new A.cM(a)},
JW(a){return new A.cQ(a)},
JY(a){return new A.eK(a)},
aU(a){return new A.h1(a)},
NR(a){var s=a.xu(),r=new A.Cp()
return A.q(r.$2(A.Dw(s),4))+"-"+A.q(r.$1(A.Du(s)))+"-"+A.q(r.$1(A.wH(s)))+" "+A.q(r.$1(A.Ds(s)))+":"+A.q(r.$1(A.Dt(s)))+":"+A.q(r.$1(A.Dv(s)))+"."+A.q(r.$2(A.Fs(s),3))+"Z"},
FG(a){var s=Date.now()
return new A.nY(a,new A.aG(s,0,!1))},
br:function br(){},
eT:function eT(a){this.a=a},
dR:function dR(a,b){this.b=a
this.a=b},
jH:function jH(a){this.a=a},
c4:function c4(a){this.a=a},
cM:function cM(a){this.a=a},
cQ:function cQ(a){this.a=a},
eK:function eK(a){this.a=a},
h1:function h1(a){this.a=a},
fB:function fB(a){this.a=a},
yb:function yb(){},
el:function el(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h3:function h3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jv:function jv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lf:function lf(a,b){this.a=a
this.b=b},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
Cp:function Cp(){},
nY:function nY(a,b){this.a=a
this.c=b},
Kx(a){return 0.5+B.at.nk()},
DH(a){var s,r=a.toLowerCase()
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
Ky(a){var s,r,q,p,o,n,m,l,k=null,j=A.ag("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ei(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.DH(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aK(r)
p=s[1]
p.toString
p=A.aK(p)
o=s[4]
o.toString
o=A.aK(o)
n=s[5]
n.toString
n=A.aK(n)
s=s[6]
s.toString
return A.DI(r,q,p,o,n,A.aK(s))}j=A.ag("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ei(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.DH(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aK(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aK(r)
p=s[4]
p.toString
p=A.aK(p)
o=s[5]
o.toString
o=A.aK(o)
s=s[6]
s.toString
return A.DI(l,q,r,p,o,A.aK(s))}j=A.ag("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ei(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.DH(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aK(r)
p=s[2]
p.toString
p=A.aK(p)
o=s[3]
o.toString
o=A.aK(o)
n=s[4]
n.toString
n=A.aK(n)
s=s[5]
s.toString
return A.DI(r,q,p,o,n,A.aK(s))}return k},
DI(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.D6(a,b,c,d,e,f,0)
return s}catch(r){return null}},
y_:function y_(a,b){this.at=a
this.ay=b},
ju:function ju(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
yd:function yd(a,b){this.a=a
this.b=b},
Hj(a,b,c,d,e,f,g,h,i,j){var s,r=A.HA(a,b,c,null,d,e,f,g,h,i,j),q=A.u(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.a0[s],r[s])
return q},
HA(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.Hf(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
Hf(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Nn(a,b,c,d,e,f,g){var s,r=null,q=A.HN(B.a8,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.u(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.a_[s],q[s])
return p},
HN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.Hg(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
Hg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
HJ(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i9(a){return new A.Y(a,new A.CL(),A.a0(a).i("Y<1,j>")).C(0,", ")},
hm(a){return A.pI("lp_sync_row",new A.yc(a))},
jn(a){return A.pI("lp_outbox",new A.vZ(a))},
JX(a){return A.pI("lp_op_queue",new A.vU(a))},
kV(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aO(n)
l=A.N(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.C(A.a8(k,"?",!1,n),", ")
k=a.ae("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kV)
case 3:j.D(0,i.c3(h.a(d),new A.CJ(),n))
k=A.N(l,n)
k.push("pending")
k.push("failed")
k=a.ae("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kV)
case 4:j.D(0,i.c3(h.a(d),new A.CK(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kV,r)},
ib(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$ib=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.ev("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$ib)
case 5:s=p.bD(o.a(f))?2:4
break
case 2:q=a.aE(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$ib)
case 6:s=3
break
case 4:q=a.aH("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$ib)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ib,r)},
Cj(a,b){var s=0,r=A.h(t.H),q,p
var $async$Cj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aH(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$Cj)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Cj,r)},
cF(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cF=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.ns("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cF)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.X("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cF)
case 5:o=A.a7(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Cj(a,o),$async$cF)
case 8:case 7:s=3
break
case 4:m=a.X("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cF)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cF)
case 10:s=d?11:12
break
case 11:m=a.X("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cF)
case 13:n=a.X("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cF)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cF,r)},
cU:function cU(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
CL:function CL(){},
cT:function cT(a,b,c,d,e,f,g,h,i,j){var _=this
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
yc:function yc(a){this.a=a},
cq:function cq(a,b,c,d,e,f,g,h,i,j){var _=this
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
vZ:function vZ(a){this.a=a},
eJ:function eJ(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
vU:function vU(a){this.a=a},
CJ:function CJ(){},
CK:function CK(){},
DK(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bJ(a,b,c,s,d,new A.AY())},
o4(a){var s=$.B.h(0,$.l_())
if(s instanceof A.bJ&&s.a===a)return s
return null},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yp:function yp(){},
yo:function yo(a,b,c){this.a=a
this.b=b
this.c=c},
AY:function AY(){this.a=0
this.b=null},
lU:function lU(a,b){this.a=a
this.b=b},
yg:function yg(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
yn:function yn(a){this.a=a},
yj:function yj(a){this.a=a},
ym:function ym(a,b,c){this.a=a
this.b=b
this.c=c},
yl:function yl(a,b,c){this.a=a
this.b=b
this.c=c},
yk:function yk(a,b,c){this.a=a
this.b=b
this.c=c},
yi:function yi(a){this.a=a},
yh:function yh(){},
oD:function oD(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
zM:function zM(a,b){this.a=a
this.b=b},
zL:function zL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zJ:function zJ(a,b){this.a=a
this.b=b},
zK:function zK(a,b){this.a=a
this.b=b},
zI:function zI(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b},
Ns(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.E(a);s.k();){r=new A.a4("")
A.ck(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aJ(o)
p=B.b.C(o,"|")
b.$1(p.length)
return A.at(B.m.A(B.e.A(p)).a)},
nd:function nd(a,b,c){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
xl:function xl(){},
xk:function xk(a){this.a=a},
xm:function xm(a){this.a=a},
mX:function mX(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=null
_.a=c
_.b=d
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
vS:function vS(a){this.a=a},
fs:function fs(){},
z4:function z4(a,b){this.a=a
this.b=0
this.c=b},
z5:function z5(a,b,c){this.a=a
this.b=b
this.c=c},
KH(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.al(s))throw A.b(A.b_('Request "v" must be an int.'))
if(!A.al(r)||r<0)throw A.b(A.b_('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dJ.E(0,q))throw A.b(A.b_("Unknown request operation: "+A.q(q)))
if(!t.f.b(p))throw A.b(A.b_('Request "a" must be a map.'))
return new A.hw(s,r,q,p.aX(0,new A.yQ(),t.N,t.X))},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yQ:function yQ(){},
ok:function ok(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yN:function yN(a,b,c){this.a=a
this.b=b
this.c=c},
FO(a){var s
if(t.m.b(a))s=J.y(a.name,"NotFoundError")||J.y(a.name,"TypeMismatchError")
else s=!1
return s},
yL:function yL(a){var _=this
_.d=a
_.e=0
_.r=null
_.w=!1
_.x=null},
yM:function yM(a){this.a=a},
p0:function p0(a){this.a=a},
JJ(a){var s,r,q
try{s=A.kO(a)
if(t.f.b(s)){r=A.c1(s)
return r}}catch(q){}return null},
JK(a){if(a instanceof A.jW)return A.kS(new A.ok(3,a.a,a.b,null).p())
t.bp.a(a)
return A.Do(a.a,a.b,a.c,a.d)},
Do(a,b,c,d){return A.kS(new A.ok(3,a,null,new A.yN(b,c,d)).p())},
kJ(a){return A.MC(a)},
MC(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kJ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.ia()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a2(f.getDirectory(),k),$async$kJ)
case 7:n=c
j=$.ic()
i=A.N(j.d2(0,"drift_db"),t.N)
m=i
J.EB(m,j.d2(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.au(l)===0){s=9
break}s=11
return A.a(A.a2(n.getDirectoryHandle(l,{create:!1}),k),$async$kJ)
case 11:n=c
case 9:m.length===j||(0,A.p)(m),++h
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
return A.f($async$kJ,r)},
pA(a,b){return A.MD(a,b)},
MD(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pA=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kJ(a),$async$pA)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a2(m.getFileHandle(A.dP(b,$.ic().a).gk5(),{create:!1}),t.m),$async$pA)
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
return A.f($async$pA,r)},
pB(a,b){return A.ML(a,b)},
ML(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pB=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kJ(a),$async$pB)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.mg(m,A.dP(b,$.ic().a).gk5()),$async$pB)
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
return A.f($async$pB,r)},
v6:function v6(){},
v7:function v7(a){this.a=a},
v8:function v8(a){this.a=a},
mH:function mH(a,b,c){this.a=a
this.e=b
this.f=c},
vh:function vh(a,b,c){this.a=a
this.b=b
this.c=c},
oE:function oE(a){this.a=a
this.b=0},
zS:function zS(a){this.a=a},
zT:function zT(a){this.a=a},
Oe(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="maxDocBytes",d="destructiveBackup",c="storePolicies"
if(a==null)return A.u(t.N,t.X)
s=t.f
if(!s.b(a))throw A.b(A.b_("Open options must be a map."))
r=A.c1(a)
q=t.N
p=t.X
o=A.u(q,p)
n=r.h(0,"stores")
if(n!=null){if(!t.j.b(n))throw A.b(A.b_('"stores" must be a list.'))
m=A.l([],t.oq)
for(l=J.E(n);l.k();){k=l.gn()
if(!s.b(k))A.v(A.aa("Schema must be a map: "+A.q(k),null,null))
m.push(A.qr(A.c1(k),p))}o.j(0,"stores",m)}j=r.h(0,e)
if(j!=null){if(!A.al(j))throw A.b(A.b_('"maxDocBytes" must be an int.'))
o.j(0,e,j)}i=r.h(0,d)
if(i!=null){if(!A.bv(i))throw A.b(A.b_('"destructiveBackup" must be a bool.'))
o.j(0,d,i)}h=r.h(0,c)
if(h!=null){if(!s.b(h))throw A.b(A.b_('"storePolicies" must be a map.'))
q=A.u(q,t.G)
for(p=h.ga_(),p=p.gt(p);p.k();){m=p.gn()
l=m.a
g=J.cE(l)
f=g.l(l)
m=m.b
l=g.l(l)
if(!s.b(m))A.v(A.b_('The store policy for "'+l+'" must be a map.'))
q.j(0,f,A.c1(m))}o.j(0,c,q)}return o},
HG(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.c1(a).h(0,b)
return s}}catch(r){}return null},
NW(a,b){if(b!=null)return!1
return B.b.bp(a,new A.Cv())},
Cv:function Cv(){},
Cu:function Cu(){},
yS:function yS(a){this.a=a},
yT:function yT(a){this.b=a
this.c=0},
yU:function yU(a,b,c){this.a=a
this.b=b
this.c=c},
yV:function yV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yW:function yW(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(){},
jW:function jW(a,b){this.b=a
this.a=b},
eW:function eW(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
on:function on(){},
yZ:function yZ(a,b,c){var _=this
_.r=$
_.c=a
_.d=b
_.e=c
_.f=null},
z_:function z_(a){this.a=a},
om:function om(){},
yX:function yX(a){this.a=a},
yY:function yY(){},
ps:function ps(){},
GS(a){return a},
Ha(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a4("")
o=a+"("
p.a=o
n=A.a0(b)
m=n.i("cw<1>")
l=new A.cw(b,0,s,m)
l.j1(b,0,s,n.c)
m=o+new A.Y(l,new A.C4(),m.i("Y<a1.E,j>")).C(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.R(p.l(0),null))}},
r0:function r0(a){this.a=a},
r1:function r1(){},
r2:function r2(){},
C4:function C4(){},
tY:function tY(){},
dP(a,b){var s,r,q,p,o,n=b.oy(a),m=b.cP(a)
if(n!=null)a=B.a.ab(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.cj(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cj(a.charCodeAt(o))){r.push(B.a.B(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ab(a,p))
q.push("")}return new A.n_(b,n,m,r,q)},
n_:function n_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Fp(a){return new A.n0(a)},
n0:function n0(a){this.a=a},
Kw(){var s,r,q,p,o,n,m,l,k=null
if(A.DL().gb3()!=="file")return $.kZ()
if(!B.a.bU(A.DL().gbx(),"/"))return $.kZ()
s=A.Go(k,0,0)
r=A.Gm(k,0,0,!1)
q=A.Bj(k,0,0,k)
p=A.Gl(k,0,0)
o=A.Bi(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Gn("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.E_(l,m)
else l=A.f8(l)
if(A.kC("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kM()==="a\\b")return $.pL()
return $.HZ()},
xX:function xX(){},
wD:function wD(a,b,c){this.d=a
this.e=b
this.f=c},
yx:function yx(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
yR:function yR(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
Db(a,b){if(b<0)A.v(A.b2("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.v(A.b2("Offset "+b+u.D+a.gm(0)+"."))
return new A.mb(a,b)},
xG:function xG(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
mb:function mb(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
Jq(a,b){var s=A.Jr(A.l([A.L4(a,!0)],t.pg)),r=new A.tO(b).$0(),q=B.c.l(B.b.ga3(s).b+1),p=A.Js(s)?0:3,o=A.a0(s)
return new A.tu(s,r,null,1+Math.max(q.length,p),new A.Y(s,new A.tw(),o.i("Y<1,i>")).xc(0,B.bG),!A.O3(new A.Y(s,new A.tx(),o.i("Y<1,k?>"))),new A.a4(""))},
Js(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.y(r.c,q.c))return!1}return!0},
Jr(a){var s,r,q=A.NV(a,new A.tz(),t.nf,t.K)
for(s=A.n(q),r=new A.aV(q,q.r,q.e,s.i("aV<2>"));r.k();)J.EF(r.d,new A.tA())
s=s.i("aN<1,2>")
r=s.i("iD<o.E,cA>")
s=A.N(new A.iD(new A.aN(q,s),new A.tB(),r),r.i("o.E"))
return s},
L4(a,b){var s=new A.At(a).$0()
return new A.bu(s,!0,null)},
L6(a){var s,r,q,p,o,n,m=a.gaP()
if(!B.a.E(m,"\r\n"))return a
s=a.gN().gau()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga5()
o=a.gN().gah()
p=A.nw(s,a.gN().gar(),o,p)
o=A.C(m,"\r\n","\n")
n=a.gbh()
return A.xH(r,p,o,A.C(n,"\r\n","\n"))},
L7(a){var s,r,q,p,o,n,m
if(!B.a.bU(a.gbh(),"\n"))return a
if(B.a.bU(a.gaP(),"\n\n"))return a
s=B.a.B(a.gbh(),0,a.gbh().length-1)
r=a.gaP()
q=a.gR()
p=a.gN()
if(B.a.bU(a.gaP(),"\n")){o=A.Co(a.gbh(),a.gaP(),a.gR().gar())
o.toString
o=o+a.gR().gar()+a.gm(a)===a.gbh().length}else o=!1
if(o){r=B.a.B(a.gaP(),0,a.gaP().length-1)
if(r.length===0)p=q
else{o=a.gN().gau()
n=a.ga5()
m=a.gN().gah()
p=A.nw(o-1,A.G5(s),m-1,n)
q=a.gR().gau()===a.gN().gau()?p:a.gR()}}return A.xH(q,p,r,s)},
L5(a){var s,r,q,p,o
if(a.gN().gar()!==0)return a
if(a.gN().gah()===a.gR().gah())return a
s=B.a.B(a.gaP(),0,a.gaP().length-1)
r=a.gR()
q=a.gN().gau()
p=a.ga5()
o=a.gN().gah()
p=A.nw(q-1,s.length-B.a.cQ(s,"\n")-1,o-1,p)
return A.xH(r,p,s,B.a.bU(a.gbh(),"\n")?B.a.B(a.gbh(),0,a.gbh().length-1):a.gbh())},
G5(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.io(a,"\n",s-2)-1
else return s-B.a.cQ(a,"\n")-1},
tu:function tu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tO:function tO(a){this.a=a},
tw:function tw(){},
tv:function tv(){},
tx:function tx(){},
tz:function tz(){},
tA:function tA(){},
tB:function tB(){},
ty:function ty(a){this.a=a},
tP:function tP(){},
tC:function tC(a){this.a=a},
tJ:function tJ(a,b,c){this.a=a
this.b=b
this.c=c},
tK:function tK(a,b){this.a=a
this.b=b},
tL:function tL(a){this.a=a},
tM:function tM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tH:function tH(a,b){this.a=a
this.b=b},
tI:function tI(a,b){this.a=a
this.b=b},
tD:function tD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tF:function tF(a,b,c){this.a=a
this.b=b
this.c=c},
tG:function tG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
At:function At(a){this.a=a},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nw(a,b,c,d){if(a<0)A.v(A.b2("Offset may not be negative, was "+a+"."))
else if(c<0)A.v(A.b2("Line may not be negative, was "+c+"."))
else if(b<0)A.v(A.b2("Column may not be negative, was "+b+"."))
return new A.cu(d,a,c,b)},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nx:function nx(){},
nz:function nz(){},
Kp(a,b,c){return new A.hf(c,a,b)},
nA:function nA(){},
hf:function hf(a,b,c){this.c=a
this.a=b
this.b=c},
hg:function hg(){},
xH(a,b,c,d){var s=new A.df(d,a,b,c)
s.pe(a,b,c)
if(!B.a.E(d,c))A.v(A.R('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Co(d,c,a.gar())==null)A.v(A.R('The span text "'+c+'" must start at column '+(a.gar()+1)+' in a line within "'+d+'".',null))
return s},
df:function df(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Kt(a){var s
A:{if(18===a){s=B.dK
break A}if(23===a){s=B.dL
break A}if(9===a){s=B.dM
break A}s=null
break A}return s},
jJ:function jJ(a,b){this.a=a
this.b=b},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
Ks(a,b,c,d,e,f,g){return new A.ce(d,b,c,e,f,a,g)},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xM:function xM(){},
l6:function l6(a){this.a=a},
Ma(a,b,c){var s,r,q,p,o,n=new A.of(c,A.a8(c.b,null,!1,t.X))
try{A.GG(a,b.$1(n))}catch(r){s=A.D(r)
q=B.e.A(A.iA(s))
p=a.a
o=p.cI(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
GG(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.al(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.FS(b).l(0)))
break A}if(b instanceof A.aP){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EK(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bv(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.FS(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.A(b)
q=a.a
p=q.cI(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cI(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.au(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.GG(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.v(A.aB(b,"result","Unsupported type"))}return s},
rr:function rr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rA:function rA(a){this.a=a},
rz:function rz(a){this.a=a},
rB:function rB(a){this.a=a},
rx:function rx(a){this.a=a},
rw:function rw(a){this.a=a},
ry:function ry(a){this.a=a},
rt:function rt(a){this.a=a},
rs:function rs(a){this.a=a},
ru:function ru(a){this.a=a},
rC:function rC(a){this.a=a},
rv:function rv(a,b){this.a=a
this.b=b},
of:function of(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
B8:function B8(a,b){this.a=a
this.b=b},
B9:function B9(a,b,c){this.a=a
this.b=b
this.c=c},
Ba:function Ba(a,b,c){this.a=a
this.b=b
this.c=c},
xI:function xI(){},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
Df(a,b){var s=$.pK()
return new A.mp(A.u(t.N,t.a_),s,a)},
mp:function mp(a,b,c){this.d=a
this.b=b
this.a=c},
oR:function oR(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Of(a){var s=J.IH(new v.G.URL(a,"file:///").pathname,"/")
return new A.ao(s,new A.CE(),A.a0(s).i("ao<1>"))},
CE:function CE(){},
r6:function r6(){},
nj:function nj(a,b,c){this.d=a
this.a=b
this.c=c},
cd:function cd(a,b){this.a=a
this.b=b},
AS:function AS(a){this.a=a
this.b=-1},
p6:function p6(){},
p7:function p7(){},
p9:function p9(){},
pa:function pa(){},
vX:function vX(a,b){this.a=a
this.b=b},
Kd(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bH(r,"step")}return s},
er:function er(){},
bR:function bR(a){this.a=a},
lI:function lI(a){this.a=a},
hs(a){return new A.dl(a)},
EI(a,b){var s,r,q,p
if(b==null)b=$.pK()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cS(256)
r&2&&A.I(a)
a[q]=p}},
dl:function dl(a){this.a=a},
jI:function jI(a){this.a=a},
b9:function b9(){},
ln:function ln(){},
lm:function lm(){},
Ol(a,b){var s=null,r=new A.eC(t.kk)
return A.pJ(a,new A.jX(s,s,s,s,s,s,s,s,new A.CO(new A.CN(r,A.BW(new A.CP(r)))),s,s,s,s),s,b)},
eX:function eX(a){var _=this
_.d=a
_.c=_.b=_.a=null},
CP:function CP(a){this.a=a},
CN:function CN(a,b){this.a=a
this.b=b},
CO:function CO(a){this.a=a},
yI:function yI(a){this.a=a},
yD:function yD(a,b,c){this.a=a
this.b=b
this.c=c},
yK:function yK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yJ:function yJ(a,b,c){this.b=a
this.c=b
this.d=c},
dZ:function dZ(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
c0(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.D(r)
if(q instanceof A.dl){s=q
return s.a}else return 1}},
lM:function lM(a){this.b=this.a=$
this.d=a},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
re:function re(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rg:function rg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ri:function ri(a,b){this.a=a
this.b=b},
rb:function rb(a){this.a=a},
rh:function rh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rm:function rm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rk:function rk(a,b){this.a=a
this.b=b},
rj:function rj(a,b){this.a=a
this.b=b},
rd:function rd(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(a,b){this.a=a
this.b=b},
rl:function rl(a,b){this.a=a
this.b=b},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b){this.a=a
this.$ti=b},
q_:function q_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q1:function q1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
cI(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bt(a,"success",new A.qL(r,a,b),!1,q)
A.bt(a,"error",new A.qM(r,a),!1,q)
return s},
J1(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bt(a,"success",new A.qQ(r,a,b),!1,q)
A.bt(a,"error",new A.qR(r,a),!1,q)
A.bt(a,"blocked",new A.qS(r),!1,q)
return s},
f0:function f0(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
zW:function zW(a,b){this.a=a
this.b=b},
zX:function zX(a,b){this.a=a
this.b=b},
qL:function qL(a,b,c){this.a=a
this.b=b
this.c=c},
qM:function qM(a,b){this.a=a
this.b=b},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a,b){this.a=a
this.b=b},
qS:function qS(a){this.a=a},
ia(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
F1(a,b,c){var s=a.read(b,c)
return s},
F2(a,b,c){var s=a.write(b,c)
return s},
mg(a,b){return A.a2(a.removeEntry(b,{recursive:!1}),t.X)},
F0(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.v(A.R("Target object does not implement the async iterable interface",null))
return new A.f4(new A.ta(),new A.ih(a,s),s.i("f4<ab.T,M>"))},
ta:function ta(){},
yE:function yE(a){this.a=a},
yF:function yF(a){this.a=a},
yH(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$yH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a2(p.fetch(new p.URL(a,A.bi(p.location).href),null),t.m),$async$yH)
case 3:q=o.yG(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yH,r)},
yG(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$yG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lM(A.u(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.yE(p).iq(a),$async$yG)
case 3:q=new o.ht(new n.yI(m.KG(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yG,r)},
ht:function ht(a){this.a=a},
L8(a){var s=new A.ke(a,new A.as(new A.w($.B,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.pi(a)
return s},
mr(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$mr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.q2(a)
n=A.Df("dart-memory",null)
m=$.pK()
l=new A.dE(o,n,new A.eC(t.p3),A.aO(p),A.u(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.iw(),$async$mr)
case 3:s=4
return A.a(l.eV(),$async$mr)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mr,r)},
q2:function q2(a){this.a=null
this.b=a},
q5:function q5(a){this.a=a},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
q3:function q3(a){this.a=a},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
Aw:function Aw(a){this.a=a},
Ax:function Ax(a){this.a=a},
Av:function Av(a){this.a=a},
Ay:function Ay(a,b,c){this.a=a
this.b=b
this.c=c},
AA:function AA(a,b){this.a=a
this.b=b},
Az:function Az(a,b){this.a=a
this.b=b},
A7:function A7(a,b,c){this.a=a
this.b=b
this.c=c},
A8:function A8(a,b){this.a=a
this.b=b},
p_:function p_(a,b){this.a=a
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
tS:function tS(a,b,c){this.a=a
this.b=b
this.c=c},
tT:function tT(){},
tR:function tR(a,b){this.a=a
this.b=b},
oS:function oS(a,b,c){this.a=a
this.b=b
this.c=c},
Au:function Au(a,b){this.a=a
this.b=b},
bb:function bb(){},
kc:function kc(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
k6:function k6(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hD:function hD(a,b,c){var _=this
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
FB(a){var s=A.Df("dart-memory",null),r=$.pK()
return new A.he(s,r,a)},
ns(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$ns=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.ia()
if(j==null)throw A.b(A.hs(1))
p=t.m
s=3
return A.a(A.a2(j.getDirectory(),p),$async$ns)
case 3:o=d
n=A.Of(a),m=J.E(n.a),n=new A.cY(m,n.b,n.$ti.i("cY<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a2(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$ns)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a6(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ns,r)},
nt(a){var s=0,r=A.h(t.m),q
var $async$nt=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.ns(a,!0),$async$nt)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nt,r)},
xE(a,b){var s=0,r=A.h(t.g_),q,p
var $async$xE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.ia()==null)throw A.b(A.hs(1))
p=A
s=3
return A.a(A.nt(a),$async$xE)
case 3:q=p.xD(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xE,r)},
xD(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$xD=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.FB(c)
s=3
return A.a(p.cU(a,!1),$async$xD)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xD,r)},
fJ:function fJ(a,b,c){this.c=a
this.a=b
this.b=c},
he:function he(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
xF:function xF(a,b){this.a=a
this.b=b},
pf:function pf(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
AO:function AO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
KG(a,b){var s=A.bi(a.exports.memory)
b.b!==$&&A.eh()
b.b=s
s=new A.yy(s,b,a.exports)
s.pf(a,b)
return s},
op(a,b){var s,r=A.bV(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
e0(a,b,c){var s=a.buffer
return B.o.f7(A.bV(s,b,c==null?A.op(a,b):c))},
DM(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.f7(A.bV(s,b,c==null?A.op(a,b):c))},
FQ(a,b,c){var s=new Uint8Array(c)
B.f.d1(s,0,A.bV(a.buffer,b,c))
return s},
yy:function yy(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
yz:function yz(a){this.a=a},
yA:function yA(a){this.a=a},
yB:function yB(a){this.a=a},
yC:function yC(a){this.a=a},
Cg(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Cg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.l0()
s=l!=null?3:5
break
case 3:p=A.MH()
s=6
return A.a(A.jV(l,p,null,null,!1),$async$Cg)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a6({port:m.port1,lockName:p},new A.iu(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cg,r)},
MH(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bz(97+$.Iq().cS(26))
return r.charCodeAt(0)==0?r:r},
IS(a){return new A.iq(a)},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
wK:function wK(){},
wO:function wO(a){this.a=a},
wP:function wP(a){this.a=a},
wN:function wN(a){this.a=a},
wM:function wM(a){this.a=a},
wL:function wL(a){this.a=a},
iq:function iq(a){this.a=a},
rp:function rp(){},
lH:function lH(a){this.a=a},
r7:function r7(a){this.a=a},
eV:function eV(){},
m1(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$m1=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nt(a),$async$m1)
case 3:p=e
o=A.FB(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cU(p,!0),$async$m1)
case 6:case 5:q=new A.m0(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$m1,r)},
m0:function m0(a,b,c){this.a=a
this.b=b
this.c=c},
ts:function ts(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jV(a,b,c,d,e){var s,r,q={},p=new A.w($.B,t.nI),o=new A.as(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.Dc(A.a2(a.request(b,s,A.d0(new A.yO(q,o))),r),new A.yP(q,d,o),r,t.K)
return p},
yO:function yO(a,b){this.a=a
this.b=b},
yP:function yP(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a){this.a=a},
lN:function lN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rE:function rE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rD:function rD(a,b){this.a=a
this.b=b},
rF:function rF(a){this.a=a},
je:function je(a){this.a=!1
this.b=a},
vP:function vP(a,b){this.a=a
this.b=b},
vO:function vO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vN:function vN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
IZ(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bQ(n,A.a0(n).i("bQ<1,j>"))
for(s=J.K(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a6(A.fD(B.d2,s.h(m,q)),s.h(m,q+1)))}s=A.hY(a.b)
q=A.hY(a.c)
p=A.hY(a.d)
return new A.es(o,s,q,A.hY(a.g),p)},
es:function es(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Kg(a){var s
if(J.y(a.t,"errorResponse")){s=A.Jd(a)
if(s!=null&&s instanceof A.dv)return s
else return new A.h6(a.e)}else return new A.h6("Did not respond with expected type, got "+A.q(a))},
Jd(a){var s=a.s,r=s==null?null:A.ap(s)
A:{if(0===r){s=A.Je(t.c.a(a.r))
break A}if(1===r){s=B.aq
break A}s=null
break A}return s},
Je(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.A("Pattern matching error"))
n=new A.rV()
l=A.ap(A.f9(l))
A.G(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.eu(i,h,A.bV(h,0,o))}else p=o
n=n.$1(k)
A.Gx(g)
return new A.ce(s,r,l,g==null?o:A.ap(g),n,q,p)},
Jf(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.KA(l)
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
Kh(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.ts(a2,512,"transfer" in a2)
a5.mO(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Kd(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qE(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aI}else g=B.aJ
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aK
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.op(r,f)
f=new Uint8Array(e,f,d)
c=new A.dq(!1).d6(f,0,a,!0)
i=c
g=B.aL
break
case 4:i=s.l4(j)
g=B.aM
break
case 5:default:i=a
g=B.aN}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.op(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dq(!1).d6(a0,0,a,!0)}return A.Hz(!1,b,0,0,a1,a,a3.xs(0))},
O4(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rV:function rV(){},
Hz(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
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
NI(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mK:function mK(a,b,c){this.a=a
this.b=b
this.$ti=c},
xr:function xr(){},
Ji(a){var s,r
for(s=0;s<5;++s){r=B.cQ[s]
if(r.c===a)return r}throw A.b(A.R("Unknown FS implementation: "+a,null))},
Kz(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aN
break A}q=A.al(a)
p=q?a:j
if(q){s=p
r=B.aI
break A}q=a instanceof A.aP
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aJ
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aK
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aL
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aM
break A}q=A.bv(a)
k=q?a:j
if(q){s=k
r=B.bt
break A}throw A.b(A.R("Unsupported value: "+A.q(a),j))}return new A.a6(r,s)},
KA(a){var s,r,q,p,o,n
if(a instanceof A.eu)return new A.a6(a.a,a.b)
s=[]
r=J.K(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Kz(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a6(s,t.a.a(B.f.gac(p)))},
dA:function dA(a,b,c){this.c=a
this.a=b
this.b=c},
cy:function cy(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
pF(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pF=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bi(i.indexedDB)
i=$.l0()
i=i==null?null:A.jV(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bB(i,t.fm),$async$pF)
case 3:l=b
p=5
s=8
return A.a(A.J0(m.open("drift_mock_db"),t.m),$async$pF)
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
if(i!=null)i.a.aj()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$pF,r)},
Cc(a){return A.Nq(a)},
Nq(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$Cc=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bi(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.d0(new A.Cd(j,m))
s=7
return A.a(A.J_(m,t.m),$async$Cc)
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
return A.f($async$Cc,r)},
i7(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$i7=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.ia()
if(h==null){q=B.u
s=1
break}j=t.m
s=3
return A.a(A.a2(h.getDirectory(),j),$async$i7)
case 3:m=b
p=5
s=8
return A.a(A.a2(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$i7)
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
j=new A.cC(A.cD(A.F0(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$i7)
case 14:if(!b){s=13
break}k=j.gn()
if(J.y(k.kind,"directory"))J.aM(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.v(),$async$i7)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i7,r)},
J_(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bt(a,"success",new A.qJ(r,a,b),!1,q)
A.bt(a,"error",new A.qK(r,a),!1,q)
return s},
J0(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bt(a,"success",new A.qN(r,a,b),!1,q)
A.bt(a,"error",new A.qO(r,a),!1,q)
A.bt(a,"blocked",new A.qP(r,a),!1,q)
return s},
Cd:function Cd(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(a,b){this.a=a
this.b=b},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a,b){this.a=a
this.b=b},
qP:function qP(a,b){this.a=a
this.b=b},
wG:function wG(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
h6:function h6(a){this.a=a},
dv:function dv(a){this.a=a},
M9(a){var s=a.gn8()
return new A.f4(new A.BV(),s,A.n(s).i("f4<ab.T,M>"))},
G1(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hC(a,r,new A.ks(),new A.ks(),new A.ks(),s)},
L_(a,b,c){var s=t.S
s=new A.hA(c,A.l([],t.fV),a.a,new A.aE(new A.w($.B,t.D),t.h),A.u(s,t.br),A.u(s,t.m))
s.pc(a)
s.ph(a,b,c)
return s},
GH(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
ee(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ee=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.ia()
if(b==null){q=B.aE
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.l0()
d=d==null?null:A.jV(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bB(d,t.fm),$async$ee)
case 7:j=a1
d=t.m
s=8
return A.a(A.a2(b.getDirectory(),d),$async$ee)
case 8:m=a1
s=9
return A.a(A.a2(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$ee)
case 9:l=a1
s=10
return A.a(A.kN(l),$async$ee)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.Dj(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a2(A.bi(e),t.X),$async$ee)
case 13:q=B.aE
n=[1]
s=5
break
case 12:g=i
q=new A.kn(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.aE
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.aj()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.mg(m,"_drift_feature_detection"),$async$ee)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ee,r)},
kN(a){return A.N0(a)},
N0(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kN=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a2(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kN)
case 7:j=c
s=8
return A.a(A.a2(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kN)
case 8:n=c
n.close()
l=j
q=new A.a6(!0,l)
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
return A.a(A.a2(a.createSyncAccessHandle(),t.m),$async$kN)
case 9:m=c
q=new A.a6(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kN,r)},
BV:function BV(){},
ks:function ks(){this.a=null},
hC:function hC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
zN:function zN(a){this.a=a},
zR:function zR(a,b){this.a=a
this.b=b},
zO:function zO(a,b){this.a=a
this.b=b},
zP:function zP(a){this.a=a},
zQ:function zQ(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
zx:function zx(a){this.a=a},
zC:function zC(a,b){this.a=a
this.b=b},
zF:function zF(a,b,c){this.a=a
this.b=b
this.c=c},
zz:function zz(a,b){this.a=a
this.b=b},
zy:function zy(a,b){this.a=a
this.b=b},
zE:function zE(a,b){this.a=a
this.b=b},
zD:function zD(a,b){this.a=a
this.b=b},
zH:function zH(a,b){this.a=a
this.b=b},
zG:function zG(a,b){this.a=a
this.b=b},
zA:function zA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zB:function zB(a,b){this.a=a
this.b=b},
zw:function zw(a){this.a=a},
lO:function lO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
rI:function rI(a){this.a=a},
rH:function rH(a){this.a=a},
rG:function rG(a,b){this.a=a
this.b=b},
z0:function z0(a,b,c,d,e,f){var _=this
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
z1:function z1(a,b){this.a=a
this.b=b},
z2:function z2(a,b){this.a=a
this.b=b},
z3:function z3(a){this.a=a},
KI(){var s=v.G
if(A.Jx(s,"DedicatedWorkerGlobalScope"))return new A.oJ(s,new A.oK(s.location.href))
else return new A.pd(s,new A.oK(s.location.href))},
kE:function kE(){},
oJ:function oJ(a,b){this.a=a
this.b=b},
pd:function pd(a,b){this.a=a
this.b=b},
B2:function B2(a){this.a=a},
B3:function B3(a,b,c){this.a=a
this.b=b
this.c=c},
B1:function B1(a){this.a=a},
B_:function B_(a){this.a=a},
B0:function B0(a){this.a=a},
oK:function oK(a){this.a=a},
A2:function A2(a){this.a=a},
nI:function nI(a,b,c){this.c=a
this.a=b
this.b=c},
xW:function xW(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hp:function hp(){},
oT:function oT(){},
cz:function cz(a,b){this.a=a
this.b=b},
bt(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Hc(new A.A5(c),t.m)
s=s==null?null:A.d0(s)}s=new A.ka(a,b,s,!1,e.i("ka<0>"))
s.jT()
return s},
Hc(a,b){var s=$.B
if(s===B.i)return a
return s.hS(a,b)},
D8:function D8(a,b){this.a=a
this.$ti=b},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ka:function ka(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
A5:function A5(a){this.a=a},
A6:function A6(a){this.a=a},
HQ(a){return v.mangledGlobalNames[a]},
HD(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
JA(a,b){return b in a},
Dj(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
NV(a,b,c,d){var s,r,q,p,o,n=A.u(d,c.i("r<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aM(p,q)}return n},
Dg(a){var s=J.E(a.a)
if(new A.cY(s,a.b,a.$ti.i("cY<1>")).k())return s.gn()
return null},
C8(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.I(a)
a[r]=s&255
b=s/256|0;--r}},
Ov(a){return a},
HO(a){if(a instanceof A.dx)return a
return new A.dx(a)},
Ow(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.D(p)
if(q instanceof A.hf){s=q
throw A.b(A.Kp("Invalid "+a+": "+s.a,s.b,s.gh_()))}else if(t.Y.b(q)){r=q
throw A.b(A.aa("Invalid "+a+' "'+b+'": '+r.gis(),r.gh_(),r.gau()))}else throw p}},
fi(a){if(B.a.bU(a,"\\"))throw A.b(A.aU('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.C(a,"'","\\'")+"'"},
Or(a,b,c,d){var s="("+d+"="+A.fi(a)+" && id~"+A.fi(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.fi(c)+")"},
i5(){var s,r,q,p=$.Ir(),o=$.Ik()+1
$.Mf=o
s=B.a.iy(B.c.kN(o,36),8,"0")
r=J.F9(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cS(36)]
return B.a.B(s+B.b.en(r),0,15)},
Oh(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
Oi(a,b){var s,r,q=A.l([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.push(A.Oh(a[r],b))
return q},
pI(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.dg)throw q
else{s=r
r=A.dh("Corrupt "+a+" row: "+A.q(s))
throw A.b(r)}}},
Ci(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.k
try{s=B.h.aG(a,null)
if(t.f.b(s)){q=A.bo(s,t.N,t.X)
return q}return B.k}catch(p){r=A.D(p)
q=A.dh("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
Hp(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bj
try{s=B.h.aG(a,null)
if(t.j.b(s)){q=J.pP(s,t.N)
q=q.co(q)
return q}return B.bj}catch(p){r=A.D(p)
q=A.dh("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
Ho(a){var s,r,q,p,o=null
if(a==null)return B.u
A.G(a)
if(a.length===0)return B.u
s=B.h.aG(a,o)
if(!t.j.b(s))throw A.b(A.aa("expected a JSON array, got "+J.c2(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.v(A.aa("dirty-field member is "+J.c2(p).l(0)+", expected String",o,o)))}return r},
ff(a){var s,r=J.K(a)
if(r.gF(a))return null
s=J.bP(r.gH(a).gaU())
if(A.al(s))return s
if(typeof s=="string")return A.h0(s,null)
return null},
Hs(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.cK(B.w.xm(r*J.Iz(d.$1(o),0.5,1.5)),0,0)},
Od(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cr)
s=a.h(0,"type")
if(!J.y(s,"aes-gcm"))throw A.b(A.aa("Unsupported fieldCipher type: "+A.q(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.au(r)!==32)throw A.b(B.cq)
q=new Uint8Array(32)
for(p=J.K(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.al(n)||n<0||n>255)throw A.b(A.aa("Malformed AES-256-GCM key byte at index "+o+": "+A.q(n),m,m))
q[o]=n}A.EG(q)
p=$.CW()
if($.kX()!==B.P)A.v(A.A("BigEndian systems are unsupported"))
return new A.pT(new A.lK(12,32,m),new A.jG(new A.nr(A.EG(q)),m),p)},
O8(){var s=A.KI(),r=t.cj
new A.z0(s,B.bV,A.l([],t.az),A.u(t.S,t.lp),new A.je(A.Dn(r)),new A.je(A.Dn(r))).ek()},
Hn(){var s,r,q,p,o=null
try{o=A.DL()}catch(s){if(t.mA.b(A.D(s))){r=$.BN
if(r!=null)return r
throw s}else throw s}if(J.y(o,$.GD)){r=$.BN
r.toString
return r}$.GD=o
if($.Eu()===$.kZ())r=$.BN=o.ak(".").l(0)
else{q=o.kM()
p=q.length-1
r=$.BN=p===0?q:B.a.B(q,0,p)}return r},
Hv(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Hq(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Hv(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.B(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
O3(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gH(0)
for(r=A.cx(a,1,null,a.$ti.i("a1.E")),q=r.$ti,r=new A.ar(r,r.gm(0),q.i("ar<a1.E>")),q=q.i("a1.E");r.k();){p=r.d
if(!J.y(p==null?q.a(p):p,s))return!1}return!0},
Ok(a,b){var s=B.b.bV(a,null)
if(s<0)throw A.b(A.R(A.q(a)+" contains no null elements.",null))
a[s]=b},
HH(a,b){var s=B.b.bV(a,b)
if(s<0)throw A.b(A.R(A.q(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
ND(a,b){var s,r,q,p
for(s=new A.cm(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<J.E>")),r=r.i("J.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Co(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cg(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bV(a,b)
while(r!==-1){q=r===0?0:B.a.io(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cg(a,b,r+1)}return null},
Eg(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.ce(A.e0(r.b,p.sqlite3_errmsg(q),null),A.e0(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.q(o)+")",c,n,d,e,f)},
CS(a,b,c,d,e){throw A.b(A.Eg(a.a,a.b,b,c,d,e))},
EK(a){if(a.a2(0,$.HT())<0||a.a2(0,$.HS())>0)throw A.b(A.EY("BigInt value exceeds the range of 64 bits"))
return a},
Ke(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ap(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.e0(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.FQ(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
F4(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bz("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cS(61)))
return s.charCodeAt(0)==0?s:s},
xo(a){var s=0,r=A.h(t.lo),q
var $async$xo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a2(a.arrayBuffer(),t.a),$async$xo)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xo,r)}},B={}
var w=[A,J,B]
var $={}
A.Dl.prototype={}
J.mt.prototype={
P(a,b){return a===b},
gJ(a){return A.eL(a)},
l(a){return"Instance of '"+A.n5(a)+"'"},
gal(a){return A.bM(A.E5(this))}}
J.mv.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gal(a){return A.bM(t.y)},
$iak:1,
$iQ:1}
J.iT.prototype={
P(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gal(a){return A.bM(t.P)},
$iak:1,
$iW:1}
J.aI.prototype={$iM:1}
J.dH.prototype={
gJ(a){return 0},
gal(a){return B.e6},
l(a){return String(a)}}
J.n2.prototype={}
J.dX.prototype={}
J.bS.prototype={
l(a){var s=a[$.HW()]
if(s==null)s=a[$.fj()]
if(s==null)return this.oX(a)
return"JavaScript function for "+J.Z(s)}}
J.bx.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fM.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.z.prototype={
f5(a,b){return new A.bQ(a,A.a0(a).i("@<1>").Z(b).i("bQ<1,2>"))},
u(a,b){a.$flags&1&&A.I(a,29)
a.push(b)},
iI(a,b){var s
a.$flags&1&&A.I(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.xn(b,null))
return a.splice(b,1)[0]},
aE(a,b,c){var s
a.$flags&1&&A.I(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.xn(b,null))
a.splice(b,0,c)},
kt(a,b,c){var s,r
a.$flags&1&&A.I(a,"insertAll",2)
A.Fy(b,0,a.length,"index")
if(!t.O.b(c))c=J.IK(c)
s=J.au(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.az(a,b,r,c)},
kH(a){a.$flags&1&&A.I(a,"removeLast",1)
if(a.length===0)throw A.b(A.Ck(a,-1))
return a.pop()},
G(a,b){var s
a.$flags&1&&A.I(a,"remove",1)
for(s=0;s<a.length;++s)if(J.y(a[s],b)){a.splice(s,1)
return!0}return!1},
t4(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aC(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dB(a,b){return new A.ao(a,b,A.a0(a).i("ao<1>"))},
D(a,b){var s
a.$flags&1&&A.I(a,"addAll",2)
if(Array.isArray(b)){this.po(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
po(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aC(a))
for(s=0;s<r;++s)a.push(b[s])},
ao(a){a.$flags&1&&A.I(a,"clear","clear")
a.length=0},
cl(a,b,c){return new A.Y(a,b,A.a0(a).i("@<1>").Z(c).i("Y<1,2>"))},
C(a,b){var s,r=A.a8(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.q(a[s])
return r.join(b)},
en(a){return this.C(a,"")},
cY(a,b){return A.cx(a,0,A.cD(b,"count",t.S),A.a0(a).c)},
bm(a,b){return A.cx(a,b,null,A.a0(a).c)},
cf(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aC(a))}if(c!=null)return c.$0()
throw A.b(A.aH())},
n5(a,b){return this.cf(a,b,null)},
a9(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.ax(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ax(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a0(a))
return A.l(a.slice(b,c),A.a0(a))},
b9(a,b){return this.U(a,b,null)},
fW(a,b,c){A.bg(b,c,a.length)
return A.cx(a,b,c,A.a0(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.aH())},
ga3(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aH())},
gaq(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aH())
throw A.b(A.iQ())},
iJ(a,b,c){a.$flags&1&&A.I(a,18)
A.bg(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.I(a,5)
A.bg(b,c,a.length)
s=c-b
if(s===0)return
A.bf(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.pS(d,e).c_(0,!1)
q=0}p=J.K(r)
if(q+s>p.gm(r))throw A.b(A.F7())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
az(a,b,c,d){return this.ai(a,b,c,d,0)},
bp(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aC(a))}return!1},
cL(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aC(a))}return!0},
cq(a,b){var s,r,q,p,o
a.$flags&2&&A.I(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Mj()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a0(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.ef(b,2))
if(p>0)this.t5(a,p)},
aJ(a){return this.cq(a,null)},
t5(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bV(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.y(a[s],b))return s
return-1},
cQ(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.y(a[s],b))return s
return-1},
E(a,b){var s
for(s=0;s<a.length;++s)if(J.y(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gT(a){return a.length!==0},
l(a){return A.tZ(a,"[","]")},
c_(a,b){var s=A.l(a.slice(0),A.a0(a))
return s},
cZ(a){return this.c_(a,!0)},
co(a){return A.mG(a,A.a0(a).c)},
gt(a){return new J.fp(a,a.length,A.a0(a).i("fp<1>"))},
gJ(a){return A.eL(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.I(a,"set length","change the length of")
if(b<0)throw A.b(A.ax(b,0,null,"newLength",null))
if(b>a.length)A.a0(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.Ck(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
if(!(b>=0&&b<a.length))throw A.b(A.Ck(a,b))
a[b]=c},
n9(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gal(a){return A.bM(A.a0(a))},
$ibe:1,
$iL:1,
$io:1,
$ir:1}
J.mu.prototype={
xy(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.n5(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.u_.prototype={}
J.fp.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.eA.prototype={
a2(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkx(b)
if(this.gkx(a)===s)return 0
if(this.gkx(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkx(a){return a===0?1/a<0:a<0},
fN(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.a_(""+a+".toInt()"))},
um(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.a_(""+a+".ceil()"))},
vC(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.a_(""+a+".floor()"))},
xm(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.a_(""+a+".round()"))},
br(a,b,c){if(this.a2(b,c)>0)throw A.b(A.fd(b))
if(this.a2(a,b)<0)return b
if(this.a2(a,c)>0)return c
return a},
kN(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ax(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.v(A.a_("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bk("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fS(a,b){return a+b},
am(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
j0(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mt(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.mt(a,b)},
mt(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.a_("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
bK(a,b){if(b<0)throw A.b(A.fd(b))
return b>31?0:a<<b>>>0},
ts(a,b){return b>31?0:a<<b>>>0},
dG(a,b){var s
if(b<0)throw A.b(A.fd(b))
if(a>0)s=this.jR(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ag(a,b){var s
if(a>0)s=this.jR(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mr(a,b){if(0>b)throw A.b(A.fd(b))
return this.jR(a,b)},
jR(a,b){return b>31?0:a>>>b},
oz(a,b){return a>b},
gal(a){return A.bM(t.cZ)},
$iaw:1,
$iac:1,
$iaX:1}
J.iS.prototype={
gmP(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gal(a){return A.bM(t.S)},
$iak:1,
$ii:1}
J.mw.prototype={
gal(a){return A.bM(t.W)},
$iak:1}
J.dF.prototype={
k0(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.ph(b,a,c)},
hN(a,b){return this.k0(a,b,0)},
eq(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.hk(c,a)},
bU(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ab(a,r-s)},
kJ(a,b,c){A.Fy(0,0,a.length,"startIndex")
return A.Oq(a,b,c,0)},
d2(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.eB){s=b.e
s=!(s==null?b.e=b.pW():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.q7(a,b)}},
dv(a,b,c,d){var s=A.bg(b,c,a.length)
return A.HM(a,b,s,d)},
q7(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.CY(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
o=p.gR()
n=p.gN()
q=n-o
if(q===0&&r===o)continue
m.push(this.B(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ab(a,r))
return m},
af(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.af(a,b,0)},
B(a,b,c){return a.substring(b,A.bg(b,c,a.length))},
ab(a,b){return this.B(a,b,null)},
c0(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.JB(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Fc(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
xw(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.Fc(r,s))},
bk(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bX)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iy(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bk(c,s)+a},
wJ(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bk(" ",s)},
cg(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bV(a,b){return this.cg(a,b,0)},
io(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
cQ(a,b){return this.io(a,b,null)},
E(a,b){return A.On(a,b,0)},
a2(a,b){var s
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
gal(a){return A.bM(t.N)},
gm(a){return a.length},
$ibe:1,
$iak:1,
$iaw:1,
$ij:1}
A.zV.prototype={
u(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.K(b),i=j.gm(b)
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
B.f.az(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.az(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.I(r)
r[q+m]=l}k.a=s},
kL(){var s,r=this
if(r.a===0)return $.pM()
s=J.bO(B.f.gac(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.pM()
return s},
gm(a){return this.a}}
A.zt.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.bc(b))
this.b.push(s)
this.a=this.a+s.length},
kL(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.pM()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.ao(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.p)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.az(q,p,m,n)}l.a=0
B.b.ao(s)
return q},
gm(a){return this.a}}
A.e1.prototype={
gt(a){return new A.lr(J.E(this.gbf()),A.n(this).i("lr<1,2>"))},
gm(a){return J.au(this.gbf())},
gF(a){return J.bD(this.gbf())},
gT(a){return J.du(this.gbf())},
bm(a,b){var s=A.n(this)
return A.fr(J.pS(this.gbf(),b),s.c,s.y[1])},
cY(a,b){var s=A.n(this)
return A.fr(J.D0(this.gbf(),b),s.c,s.y[1])},
a9(a,b){return A.n(this).y[1].a(J.pQ(this.gbf(),b))},
gH(a){return A.n(this).y[1].a(J.bP(this.gbf()))},
ga3(a){return A.n(this).y[1].a(J.pR(this.gbf()))},
gaq(a){return A.n(this).y[1].a(J.D_(this.gbf()))},
E(a,b){return J.CZ(this.gbf(),b)},
l(a){return J.Z(this.gbf())}}
A.lr.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.en.prototype={
gbf(){return this.a}}
A.k7.prototype={$iL:1}
A.k4.prototype={
h(a,b){return this.$ti.y[1].a(J.V(this.a,b))},
j(a,b,c){J.d3(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.IF(this.a,b)},
u(a,b){J.aM(this.a,this.$ti.c.a(b))},
cq(a,b){var s=b==null?null:new A.zu(this,b)
J.EF(this.a,s)},
fW(a,b,c){var s=this.$ti
return A.fr(J.IC(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.IG(this.a,b,c,A.fr(d,s.y[1],s.c),e)},
az(a,b,c,d){return this.ai(0,b,c,d,0)},
$iL:1,
$ir:1}
A.zu.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bQ.prototype={
f5(a,b){return new A.bQ(this.a,this.$ti.i("@<1>").Z(b).i("bQ<1,2>"))},
gbf(){return this.a}}
A.eo.prototype={
cc(a,b,c){return new A.eo(this.a,this.$ti.i("@<1,2>").Z(b).Z(c).i("eo<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a4(a,b){this.a.a4(0,new A.qk(this,b))},
gK(){var s=this.$ti
return A.fr(this.a.gK(),s.c,s.y[2])},
gaU(){var s=this.$ti
return A.fr(this.a.gaU(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gT(a){var s=this.a
return s.gT(s)},
ga_(){var s=this.a.ga_()
return s.cl(s,new A.qj(this),this.$ti.i("T<3,4>"))}}
A.qk.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.qj.prototype={
$1(a){var s=this.a.$ti
return new A.T(s.y[2].a(a.a),s.y[3].a(a.b),s.i("T<3,4>"))},
$S(){return this.a.$ti.i("T<3,4>(T<1,2>)")}}
A.dG.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.ne.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cm.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.CD.prototype={
$0(){return A.bd(null,t.H)},
$S:3}
A.xC.prototype={}
A.L.prototype={}
A.a1.prototype={
gt(a){var s=this
return new A.ar(s,s.gm(s),A.n(s).i("ar<a1.E>"))},
gF(a){return this.gm(this)===0},
gH(a){if(this.gm(this)===0)throw A.b(A.aH())
return this.a9(0,0)},
ga3(a){var s=this
if(s.gm(s)===0)throw A.b(A.aH())
return s.a9(0,s.gm(s)-1)},
gaq(a){var s=this
if(s.gm(s)===0)throw A.b(A.aH())
if(s.gm(s)>1)throw A.b(A.iQ())
return s.a9(0,0)},
E(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.y(r.a9(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aC(r))}return!1},
cL(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a9(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.aC(r))}return!0},
C(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.a9(0,0))
if(o!==p.gm(p))throw A.b(A.aC(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aC(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aC(p))}return r.charCodeAt(0)==0?r:r}},
en(a){return this.C(0,"")},
dB(a,b){return this.oS(0,b)},
cl(a,b,c){return new A.Y(this,b,A.n(this).i("@<a1.E>").Z(c).i("Y<1,2>"))},
xc(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aH())
s=q.a9(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a9(0,r))
if(p!==q.gm(q))throw A.b(A.aC(q))}return s},
bm(a,b){return A.cx(this,b,null,A.n(this).i("a1.E"))},
cY(a,b){return A.cx(this,0,A.cD(b,"count",t.S),A.n(this).i("a1.E"))}}
A.cw.prototype={
j1(a,b,c,d){var s,r=this.b
A.bf(r,"start")
s=this.c
if(s!=null){A.bf(s,"end")
if(r>s)throw A.b(A.ax(r,0,s,"start",null))}},
gqh(){var s=J.au(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtw(){var s=J.au(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.au(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.gtw()+b
if(b<0||r>=s.gqh())throw A.b(A.mq(b,s.gm(0),s,null,"index"))
return J.pQ(s.a,r)},
bm(a,b){var s,r,q=this
A.bf(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ew(q.$ti.i("ew<1>"))
return A.cx(q.a,s,r,q.$ti.c)},
cY(a,b){var s,r,q,p=this
A.bf(b,"count")
s=p.c
r=p.b
if(s==null)return A.cx(p.a,r,B.c.fS(r,b),p.$ti.c)
else{q=B.c.fS(r,b)
if(s<q)return p
return A.cx(p.a,r,q,p.$ti.c)}},
c_(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.K(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Di(0,n):J.Dh(0,n)}r=A.a8(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a9(n,o+q)
if(m.gm(n)<l)throw A.b(A.aC(p))}return r},
cZ(a){return this.c_(0,!0)}}
A.ar.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.K(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.aC(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0}}
A.co.prototype={
gt(a){return new A.mI(J.E(this.a),this.b,A.n(this).i("mI<1,2>"))},
gm(a){return J.au(this.a)},
gF(a){return J.bD(this.a)},
gH(a){return this.b.$1(J.bP(this.a))},
ga3(a){return this.b.$1(J.pR(this.a))},
gaq(a){return this.b.$1(J.D_(this.a))},
a9(a,b){return this.b.$1(J.pQ(this.a,b))}}
A.ev.prototype={$iL:1}
A.mI.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.Y.prototype={
gm(a){return J.au(this.a)},
a9(a,b){return this.b.$1(J.pQ(this.a,b))}}
A.ao.prototype={
gt(a){return new A.cY(J.E(this.a),this.b,this.$ti.i("cY<1>"))},
cl(a,b,c){return new A.co(this,b,this.$ti.i("@<1>").Z(c).i("co<1,2>"))}}
A.cY.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iD.prototype={
gt(a){return new A.lY(J.E(this.a),this.b,B.aU,this.$ti.i("lY<1,2>"))}}
A.lY.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eS.prototype={
gt(a){var s=this.a
return new A.nW(s.gt(s),this.b,A.n(this).i("nW<1>"))}}
A.iz.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.oz(r,s))return s
return r},
$iL:1}
A.nW.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.de.prototype={
bm(a,b){A.l8(b,"count")
A.bf(b,"count")
return new A.de(this.a,this.b+b,A.n(this).i("de<1>"))},
gt(a){var s=this.a
return new A.nu(s.gt(s),this.b,A.n(this).i("nu<1>"))}}
A.fC.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bm(a,b){A.l8(b,"count")
A.bf(b,"count")
return new A.fC(this.a,this.b+b,this.$ti)},
$iL:1}
A.nu.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.ew.prototype={
gt(a){return B.aU},
gF(a){return!0},
gm(a){return 0},
gH(a){throw A.b(A.aH())},
ga3(a){throw A.b(A.aH())},
gaq(a){throw A.b(A.aH())},
a9(a,b){throw A.b(A.ax(b,0,0,"index",null))},
E(a,b){return!1},
cL(a,b){return!0},
dB(a,b){return this},
cl(a,b,c){return new A.ew(c.i("ew<0>"))},
bm(a,b){A.bf(b,"count")
return this},
cY(a,b){A.bf(b,"count")
return this},
c_(a,b){var s=J.Dh(0,this.$ti.c)
return s},
co(a){return A.v5(this.$ti.c)}}
A.lV.prototype={
k(){return!1},
gn(){throw A.b(A.aH())}}
A.e_.prototype={
gt(a){return new A.ol(J.E(this.a),this.$ti.i("ol<1>"))}}
A.ol.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iH.prototype={
sm(a,b){throw A.b(A.a_(u.O))},
u(a,b){throw A.b(A.a_("Cannot add to a fixed-length list"))}}
A.o7.prototype={
j(a,b,c){throw A.b(A.a_("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.a_("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.a_("Cannot add to an unmodifiable list"))},
cq(a,b){throw A.b(A.a_("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.a_("Cannot modify an unmodifiable list"))},
az(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.hr.prototype={}
A.bA.prototype={
gm(a){return J.au(this.a)},
a9(a,b){var s=this.a,r=J.K(s)
return r.a9(s,r.gm(s)-1-b)}}
A.jQ.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.jQ&&this.a===b.a}}
A.kF.prototype={}
A.a6.prototype={$r:"+(1,2)",$s:1}
A.kn.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.ko.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hN.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.p4.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.e8.prototype={$r:"+(1,2,3)",$s:7}
A.f6.prototype={$r:"+(1,2,3,4)",$s:8}
A.p5.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.iv.prototype={}
A.fx.prototype={
cc(a,b,c){var s=A.n(this)
return A.Fg(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gT(a){return this.gm(this)!==0},
l(a){return A.vo(this)},
j(a,b,c){A.J3()},
ga_(){return new A.hS(this.vo(),A.n(this).i("hS<T<1,2>>"))},
vo(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ga_(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gK(),o=o.gt(o),n=A.n(s).i("T<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.T(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aX(a,b,c,d){var s=A.u(c,d)
this.a4(0,new A.r_(this,b,s))
return s},
$iF:1}
A.r_.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aL.prototype={
gm(a){return this.b.length},
glV(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a4(a,b){var s,r,q=this.glV(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.f3(this.glV(),this.$ti.i("f3<1>"))},
gaU(){return new A.f3(this.b,this.$ti.i("f3<2>"))}}
A.f3.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gT(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hJ(s,s.length,this.$ti.i("hJ<1>"))}}
A.hJ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iL.prototype={
dS(){var s=this,r=s.$map
if(r==null){r=new A.iU(s.$ti.i("iU<1,2>"))
A.Ht(s.a,r)
s.$map=r}return r},
I(a){return this.dS().I(a)},
h(a,b){return this.dS().h(0,b)},
a4(a,b){this.dS().a4(0,b)},
gK(){var s=this.dS()
return new A.S(s,A.n(s).i("S<1>"))},
gaU(){var s=this.dS()
return new A.am(s,A.n(s).i("am<2>"))},
gm(a){return this.dS().a}}
A.iw.prototype={
u(a,b){A.J4()}}
A.dz.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gT(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hJ(s,s.length,r.$ti.i("hJ<1>"))},
E(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
co(a){return A.ca(this,this.$ti.c)}}
A.tU.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.iP&&this.a.P(0,b.a)&&A.Ek(this)===A.Ek(b)},
gJ(a){return A.cc(this.a,A.Ek(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.C([A.bM(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iP.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.O2(A.pG(this.a),this.$ti)}}
A.wI.prototype={
$0(){return B.w.vC(1000*this.a.now())},
$S:10}
A.jC.prototype={}
A.yq.prototype={
bW(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.jl.prototype={
l(a){return"Null check operator used on a null value"}}
A.mx.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.o6.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mW.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iH:1}
A.iB.prototype={}
A.kq.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaJ:1}
A.eq.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.HR(r==null?"unknown":r)+"'"},
gal(a){var s=A.pG(this)
return A.bM(s==null?A.bk(this):s)},
gyC(){return this},
$C:"$1",
$R:1,
$D:null}
A.qp.prototype={$C:"$0",$R:0}
A.qq.prototype={$C:"$2",$R:2}
A.ye.prototype={}
A.xN.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.HR(s)+"'"}}
A.il.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.il))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kT(this.a)^A.eL(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.n5(this.a)+"'")}}
A.nn.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bG.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gT(a){return this.a!==0},
gK(){return new A.S(this,A.n(this).i("S<1>"))},
gaU(){return new A.am(this,A.n(this).i("am<2>"))},
ga_(){return new A.aN(this,A.n(this).i("aN<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nb(a)},
nb(a){var s=this.d
if(s==null)return!1
return this.dq(this.lP(s,a),a)>=0},
D(a,b){b.a4(0,new A.u0(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nc(b)},
nc(a){var s,r,q=this.d
if(q==null)return null
s=this.lP(q,a)
r=this.dq(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.lc(s==null?q.b=q.jD():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.lc(r==null?q.c=q.jD():r,b,c)}else q.ne(b,c)},
ne(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jD()
s=p.el(a)
r=o[s]
if(r==null)o[s]=[p.j3(a,b)]
else{q=p.dq(r,a)
if(q>=0)r[q].b=b
else r.push(p.j3(a,b))}},
nr(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
G(a,b){var s=this
if(typeof b=="string")return s.mg(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.mg(s.c,b)
else return s.nd(b)},
nd(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.el(a)
r=n[s]
q=o.dq(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mz(p)
if(r.length===0)delete n[s]
return p.b},
ao(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.j2()}},
a4(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aC(s))
r=r.c}},
lc(a,b,c){var s=a[b]
if(s==null)a[b]=this.j3(b,c)
else s.b=c},
mg(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mz(s)
delete a[b]
return s.b},
j2(){this.r=this.r+1&1073741823},
j3(a,b){var s,r=this,q=new A.v3(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.j2()
return q},
mz(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.j2()},
el(a){return J.a9(a)&1073741823},
lP(a,b){return a[this.el(b)]},
dq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.y(a[r].a,b))return r
return-1},
l(a){return A.vo(this)},
jD(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.u0.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.v3.prototype={}
A.S.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bH(s,s.r,s.e,this.$ti.i("bH<1>"))},
E(a,b){return this.a.I(b)}}
A.bH.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aC(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.am.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aV(s,s.r,s.e,this.$ti.i("aV<1>"))}}
A.aV.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aC(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aN.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.mF(s,s.r,s.e,this.$ti.i("mF<1,2>"))}}
A.mF.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aC(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.T(s.a,s.b,r.$ti.i("T<1,2>"))
r.c=s.c
return!0}}}
A.iV.prototype={
el(a){return A.kT(a)&1073741823},
dq(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iU.prototype={
el(a){return A.Nv(a)&1073741823},
dq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.y(a[r].a,b))return r
return-1}}
A.Cx.prototype={
$1(a){return this.a(a)},
$S:38}
A.Cy.prototype={
$2(a,b){return this.a(a,b)},
$S:220}
A.Cz.prototype={
$1(a){return this.a(a)},
$S:71}
A.hM.prototype={
gal(a){return A.bM(this.lQ())},
lQ(){return A.NL(this.$r,this.hj())},
l(a){return this.mx(!1)},
mx(a){var s,r,q,p,o,n=this.qr(),m=this.hj(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Ft(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qr(){var s,r=this.$s
while($.AQ.length<=r)$.AQ.push(null)
s=$.AQ[r]
if(s==null){s=this.pV()
$.AQ[r]=s}return s},
pV(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.F9(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fN(j,k)}}
A.p1.prototype={
hj(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.p1&&this.$s===b.$s&&J.y(this.a,b.a)&&J.y(this.b,b.b)},
gJ(a){return A.cc(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.p2.prototype={
hj(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.p2&&s.$s===b.$s&&J.y(s.a,b.a)&&J.y(s.b,b.b)&&J.y(s.c,b.c)},
gJ(a){var s=this
return A.cc(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.p3.prototype={
hj(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.p3&&this.$s===b.$s&&A.Ll(this.a,b.a)},
gJ(a){return A.cc(this.$s,A.vR(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eB.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gm1(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Dk(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gr6(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Dk(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pW(){var s,r=this.a
if(!B.a.E(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ei(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hL(s)},
k0(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.or(this,b,c)},
hN(a,b){return this.k0(0,b,0)},
qo(a,b){var s,r=this.gm1()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hL(s)},
qn(a,b){var s,r=this.gr6()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hL(s)},
eq(a,b,c){if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,null,null))
return this.qn(b,c)}}
A.hL.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieF:1,
$inf:1}
A.or.prototype={
gt(a){return new A.os(this.a,this.b,this.c)}}
A.os.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.qo(l,s)
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
h(a,b){if(b!==0)throw A.b(A.xn(b,null))
return this.c},
$ieF:1,
gR(){return this.a}}
A.ph.prototype={
gt(a){return new A.Bb(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hk(r,s)
throw A.b(A.aH())}}
A.Bb.prototype={
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
A.oA.prototype={
aD(){var s=this.b
if(s===this)throw A.b(new A.dG("Local '"+this.a+"' has not been initialized."))
return s},
bB(){var s=this.b
if(s===this)throw A.b(A.Ff(this.a))
return s},
si5(a){var s=this
if(s.b!==s)throw A.b(new A.dG("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fV.prototype={
gal(a){return B.dZ},
hP(a,b,c){A.hZ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mM(a){return this.hP(a,0,null)},
mL(a,b,c){A.hZ(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hO(a,b,c){A.hZ(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mK(a){return this.hO(a,0,null)},
$iak:1,
$iem:1}
A.fU.prototype={$ifU:1}
A.jg.prototype={
gac(a){if(((a.$flags|0)&2)!==0)return new A.pp(a.buffer)
else return a.buffer},
qX(a,b,c,d){var s=A.ax(b,0,c,d,null)
throw A.b(s)},
ln(a,b,c,d){if(b>>>0!==b||b>c)this.qX(a,b,c,d)}}
A.pp.prototype={
hP(a,b,c){var s=A.bV(this.a,b,c)
s.$flags=3
return s},
mM(a){return this.hP(0,0,null)},
mL(a,b,c){var s=A.Fm(this.a,b,c)
s.$flags=3
return s},
hO(a,b,c){var s=A.Fl(this.a,b,c)
s.$flags=3
return s},
mK(a){return this.hO(0,0,null)},
$iem:1}
A.jf.prototype={
gal(a){return B.e_},
$iak:1,
$iD2:1}
A.fW.prototype={
gm(a){return a.length},
mq(a,b,c,d,e){var s,r,q=a.length
this.ln(a,b,q,"start")
this.ln(a,c,q,"end")
if(b>c)throw A.b(A.ax(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.R(e,null))
r=d.length
if(r-e<s)throw A.b(A.A("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibe:1,
$ibT:1}
A.dO.prototype={
h(a,b){A.dr(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
A.dr(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.dQ.b(d)){this.mq(a,b,c,d,e)
return}this.l9(a,b,c,d,e)},
az(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$ir:1}
A.bU.prototype={
j(a,b,c){a.$flags&2&&A.I(a)
A.dr(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.aj.b(d)){this.mq(a,b,c,d,e)
return}this.l9(a,b,c,d,e)},
az(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$ir:1}
A.mP.prototype={
gal(a){return B.e1},
U(a,b,c){return new Float32Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$itf:1}
A.mQ.prototype={
gal(a){return B.e2},
U(a,b,c){return new Float64Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$itg:1}
A.mR.prototype={
gal(a){return B.e3},
h(a,b){A.dr(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$itV:1}
A.mS.prototype={
gal(a){return B.e4},
h(a,b){A.dr(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$itW:1}
A.mT.prototype={
gal(a){return B.e5},
h(a,b){A.dr(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$itX:1}
A.jh.prototype={
gal(a){return B.eb},
h(a,b){A.dr(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$iys:1}
A.ji.prototype={
gal(a){return B.ec},
h(a,b){A.dr(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$iyt:1}
A.jj.prototype={
gal(a){return B.ed},
gm(a){return a.length},
h(a,b){A.dr(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$iyu:1}
A.eH.prototype={
gal(a){return B.ee},
gm(a){return a.length},
h(a,b){A.dr(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8Array(a.subarray(b,A.ds(b,c,a.length)))},
b9(a,b){return this.U(a,b,null)},
$iak:1,
$ieH:1,
$icV:1}
A.kj.prototype={}
A.kk.prototype={}
A.kl.prototype={}
A.km.prototype={}
A.cs.prototype={
i(a){return A.kz(v.typeUniverse,this,a)},
Z(a){return A.Gh(v.typeUniverse,this,a)}}
A.oP.prototype={}
A.pm.prototype={
l(a){return A.c_(this.a,null)}}
A.oM.prototype={
l(a){return this.a}}
A.kv.prototype={$idj:1}
A.zb.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:27}
A.za.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:204}
A.zc.prototype={
$0(){this.a.$0()},
$S:2}
A.zd.prototype={
$0(){this.a.$0()},
$S:2}
A.ku.prototype={
pk(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.ef(new A.Bf(this,b),0),a)
else throw A.b(A.a_("`setTimeout()` not found."))},
pl(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.ef(new A.Be(this,a,Date.now(),b),0),a)
else throw A.b(A.a_("Periodic timer."))},
v(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.a_("Canceling a timer."))},
$idi:1}
A.Bf.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.Be.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.j0(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.jY.prototype={
aA(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aF(a)
else{s=r.a
if(r.$ti.i("x<1>").b(a))s.lm(a)
else s.d5(a)}},
bt(a,b){var s
if(b==null)b=A.ig(a)
s=this.a
if(this.b)s.an(new A.aq(a,b))
else s.ct(new A.aq(a,b))},
aR(a){return this.bt(a,null)},
$iis:1}
A.BG.prototype={
$1(a){return this.a.$2(0,a)},
$S:28}
A.BH.prototype={
$2(a,b){this.a.$2(1,new A.iB(a,b))},
$S:84}
A.C5.prototype={
$2(a,b){this.a(a,b)},
$S:101}
A.BE.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.t()
s=q.b
if((s&1)!==0?(q.gaQ().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.BF.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:27}
A.ou.prototype={
pg(a,b){var s=new A.zf(a)
this.a=A.nE(new A.zh(this,a),new A.zi(s),null,new A.zj(this,s),!1,b)}}
A.zf.prototype={
$0(){A.kW(new A.zg(this.a))},
$S:2}
A.zg.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.zi.prototype={
$0(){this.a.$0()},
$S:0}
A.zj.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.zh.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.t()
if((r.b&4)===0){s.c=new A.w($.B,t._)
if(s.b){s.b=!1
A.kW(new A.ze(this.b))}return s.c}},
$S:134}
A.ze.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.kf.prototype={
l(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.pj.prototype={
gn(){return this.b},
t6(a,b){var s,r,q
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
o.d=null}q=o.t6(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Gb
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Gb
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.A("sync*"))}return!1},
yD(a){var s,r,q=this
if(a instanceof A.hS){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hS.prototype={
gt(a){return new A.pj(this.a(),this.$ti.i("pj<1>"))}}
A.aq.prototype={
l(a){return A.q(this.a)},
$iaf:1,
gcr(){return this.b}}
A.b4.prototype={}
A.eY.prototype={
bP(){},
bQ(){}}
A.k3.prototype={
gcs(){return new A.b4(this,A.n(this).i("b4<1>"))},
gim(){return(this.c&4)!==0},
gjB(){return this.c<4},
t3(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.G2(c,A.n(j).c)
s=A.n(j)
r=$.B
q=d?1:0
p=b!=null?32:0
o=A.oy(r,a,s.c)
n=A.zq(r,b)
m=c==null?A.C7():c
l=new A.eY(j,o,n,r.bZ(m,t.H),r,q|p,s.i("eY<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pC(j.a)
return l},
ma(a){var s,r=this
A.n(r).i("eY<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.t3(a)
if((r.c&2)===0&&r.d==null)r.pH()}return null},
mb(a){},
mc(a){},
j5(){if((this.c&4)!==0)return new A.bp("Cannot add new events after calling close")
return new A.bp("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjB())throw A.b(this.j5())
this.cD(b)},
bg(a,b){var s
if(!this.gjB())throw A.b(this.j5())
s=A.fa(a,b)
this.cE(s.a,s.b)},
k_(a){return this.bg(a,null)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjB())throw A.b(q.j5())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.B,t.D)
q.df()
return r},
aL(a,b){this.cE(a,b)},
aV(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aF(null)},
pH(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aF(null)}A.pC(this.b)},
$ibF:1}
A.jZ.prototype={
cD(a){var s,r
for(s=this.d,r=this.$ti.i("cg<1>");s!=null;s=s.ch)s.c3(new A.cg(a,r))},
cE(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.c3(new A.hE(a,b))},
df(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.c3(B.ad)
else this.r.aF(null)}}
A.tp.prototype={
$0(){this.c.a(null)
this.b.cu(null)},
$S:0}
A.tr.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.an(new A.aq(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.an(new A.aq(q,r))}},
$S:14}
A.tq.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.d3(j,m.b,a)
if(J.y(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aM(s,n)}m.c.d5(s)}}else if(J.y(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.an(new A.aq(s,l))}},
$S(){return this.d.i("W(0)")}}
A.tk.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(k,aJ)")}}
A.nX.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iH:1}
A.tl.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("z<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aA(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("z<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.p)(r),++p)n.push(r[p].b)
l.a.aR(new A.jp(B.b.n5(s,A.N7()),a,q.i("jp<r<0?>,r<aq?>>")))}},
$S:9}
A.jp.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.q(p.a)},
gcr(){var s=this.c
s=s==null?null:s.b
return s==null?A.af.prototype.gcr.call(this):s}}
A.kd.prototype={
tO(a){this.a.b0(new A.Ab(this,a),new A.Ac(this,a),t.P)}}
A.Ab.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.Ac.prototype={
$2(a,b){this.a.c=new A.aq(a,b)
this.b.$1(1)},
$S:6}
A.Aa.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.eZ.prototype={
bt(a,b){if((this.a.a&30)!==0)throw A.b(A.A("Future already completed"))
this.an(A.fa(a,b))},
aR(a){return this.bt(a,null)},
$iis:1}
A.aE.prototype={
aA(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.aF(a)},
aj(){return this.aA(null)},
an(a){this.a.ct(a)}}
A.as.prototype={
aA(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.cu(a)},
aj(){return this.aA(null)},
an(a){this.a.an(a)}}
A.ch.prototype={
wu(a){if((this.c&15)!==6)return!0
return this.b.b.eB(this.d,a.a,t.y,t.K)},
vQ(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kK(r,n,a.b,p,o,t.l)
else q=m.eB(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.D(s))){if((this.c&1)!==0)throw A.b(A.R("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.R("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
b0(a,b,c){var s,r,q=$.B
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aB(b,"onError",u.w))}else{a=q.du(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.GT(b,q)}s=new A.w($.B,c.i("w<0>"))
r=b==null?1:3
this.dK(new A.ch(s,r,a,b,this.$ti.i("@<1>").Z(c).i("ch<1,2>")))
return s},
W(a,b){return this.b0(a,null,b)},
mv(a,b,c){var s=new A.w($.B,c.i("w<0>"))
this.dK(new A.ch(s,19,a,b,this.$ti.i("@<1>").Z(c).i("ch<1,2>")))
return s},
k7(a){var s=this.$ti,r=$.B,q=new A.w(r,s)
if(r!==B.i)a=A.GT(a,r)
this.dK(new A.ch(q,2,null,a,s.i("ch<1,1>")))
return q},
b2(a){var s=this.$ti,r=$.B,q=new A.w(r,s)
if(r!==B.i)a=r.bZ(a,t.z)
this.dK(new A.ch(q,8,a,null,s.i("ch<1,1>")))
return q},
tl(a){this.a=this.a&1|16
this.c=a},
h6(a){this.a=a.a&30|this.a&1
this.c=a.c},
dK(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dK(a)
return}s.h6(r)}s.b.d0(new A.Ad(s,a))}},
m8(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.m8(a)
return}n.h6(s)}m.a=n.hw(a)
n.b.d0(new A.Ai(m,n))}},
eX(){var s=this.c
this.c=null
return this.hw(s)},
hw(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cu(a){var s,r=this
if(r.$ti.i("x<1>").b(a))A.Ag(a,r,!0)
else{s=r.eX()
r.a=8
r.c=a
A.f1(r,s)}},
d5(a){var s=this,r=s.eX()
s.a=8
s.c=a
A.f1(s,r)},
pU(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gce()===r.gce())}else s=!1
if(s)return
q=p.eX()
p.h6(a)
A.f1(p,q)},
an(a){var s=this.eX()
this.tl(a)
A.f1(this,s)},
pT(a,b){this.an(new A.aq(a,b))},
aF(a){if(this.$ti.i("x<1>").b(a)){this.lm(a)
return}this.lj(a)},
lj(a){this.a^=2
this.b.d0(new A.Af(this,a))},
lm(a){A.Ag(a,this,!1)
return},
ct(a){this.a^=2
this.b.d0(new A.Ae(this,a))},
fM(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.B,r.$ti)
q.aF(r)
return q}s=new A.w($.B,r.$ti)
q.a=null
q.a=A.bX(a,new A.Ao(s,a))
r.b0(new A.Ap(q,r,s),new A.Aq(q,s),t.P)
return s},
$ix:1}
A.Ad.prototype={
$0(){A.f1(this.a,this.b)},
$S:0}
A.Ai.prototype={
$0(){A.f1(this.b,this.a.a)},
$S:0}
A.Ah.prototype={
$0(){A.Ag(this.a.a,this.b,!0)},
$S:0}
A.Af.prototype={
$0(){this.a.d5(this.b)},
$S:0}
A.Ae.prototype={
$0(){this.a.an(this.b)},
$S:0}
A.Al.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b_(q.d,t.z)}catch(p){s=A.D(p)
r=A.ad(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ig(q)
n=k.a
n.c=new A.aq(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.b0(new A.Am(l,m),new A.An(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.Am.prototype={
$1(a){this.a.pU(this.b)},
$S:27}
A.An.prototype={
$2(a,b){this.a.an(new A.aq(a,b))},
$S:6}
A.Ak.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.eB(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.D(n)
r=A.ad(n)
q=s
p=r
if(p==null)p=A.ig(q)
o=this.a
o.c=new A.aq(q,p)
o.b=!0}},
$S:0}
A.Aj.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.wu(s)&&p.a.e!=null){p.c=p.a.vQ(s)
p.b=!1}}catch(o){r=A.D(o)
q=A.ad(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ig(p)
m=l.b
m.c=new A.aq(p,n)
p=m}p.b=!0}},
$S:0}
A.Ao.prototype={
$0(){var s=A.DC()
this.a.an(new A.aq(new A.nX("Future not completed",this.b),s))},
$S:0}
A.Ap.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.v()
this.c.d5(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.Aq.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.v()
this.b.an(new A.aq(a,b))}},
$S:6}
A.ot.prototype={}
A.ab.prototype={
en(a){var s=new A.w($.B,t.os),r=new A.a4(""),q=this.aa(null,!0,new A.xR(s,r),s.gjc())
q.iv(new A.xS(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.B,t.hy)
s.a=0
this.aa(new A.xT(s,this),!0,new A.xU(s,r),r.gjc())
return r},
gH(a){var s=new A.w($.B,A.n(this).i("w<ab.T>")),r=this.aa(null,!0,new A.xP(s),s.gjc())
r.iv(new A.xQ(this,r,s))
return s}}
A.xR.prototype={
$0(){var s=this.b.a
this.a.cu(s.charCodeAt(0)==0?s:s)},
$S:0}
A.xS.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.q(a)
q.a+=p}catch(o){s=A.D(o)
r=A.ad(o)
q=s
p=r
n=A.kG(q,p)
if(n==null)q=new A.aq(q,p)
else q=n
A.LR(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(ab.T)")}}
A.xT.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(ab.T)")}}
A.xU.prototype={
$0(){this.b.cu(this.a.a)},
$S:0}
A.xP.prototype={
$0(){var s,r=A.DC(),q=new A.bp("No element")
A.n7(q,r)
s=A.kG(q,r)
if(s==null)s=new A.aq(q,r)
this.a.an(s)},
$S:0}
A.xQ.prototype={
$1(a){A.LS(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(ab.T)")}}
A.jN.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bw(a,b,c){return this.aa(a,null,b,c)},
aW(a){return this.aa(a,null,null,null)}}
A.e9.prototype={
gcs(){return new A.ba(this,A.n(this).i("ba<1>"))},
gim(){return(this.b&4)!==0},
grv(){if((this.b&8)===0)return this.a
return this.a.c},
hb(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e7(A.n(q).i("e7<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e7(A.n(q).i("e7<1>")):s},
gaQ(){var s=this.a
return(this.b&8)!==0?s.c:s},
bM(){if((this.b&4)!==0)return new A.bp("Cannot add event after closing")
return new A.bp("Cannot add event while adding a stream")},
u6(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bM())
if((o&2)!==0){o=new A.w($.B,t._)
o.aF(null)
return o}o=p.a
s=b===!0
r=new A.w($.B,t._)
q=s?A.KJ(p):p.gpp()
q=a.aa(p.gpt(),s,p.gpK(),q)
s=p.b
if((s&1)!==0?(p.gaQ().e&4)!==0:(s&2)===0)q.b4()
p.a=new A.kr(o,r,q,A.n(p).i("kr<1>"))
p.b|=8
return r},
lG(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.ei():new A.w($.B,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bM())
this.aC(b)},
bg(a,b){var s
if(this.b>=4)throw A.b(this.bM())
s=A.fa(a,b)
this.aL(s.a,s.b)},
k_(a){return this.bg(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lG()
if(r>=4)throw A.b(s.bM())
s.lo()
return s.lG()},
lo(){var s=this.b|=4
if((s&1)!==0)this.df()
else if((s&3)===0)this.hb().u(0,B.ad)},
aC(a){var s=this,r=s.b
if((r&1)!==0)s.cD(a)
else if((r&3)===0)s.hb().u(0,new A.cg(a,A.n(s).i("cg<1>")))},
aL(a,b){var s=this.b
if((s&1)!==0)this.cE(a,b)
else if((s&3)===0)this.hb().u(0,new A.hE(a,b))},
aV(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aF(null)},
jS(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.A("Stream has already been listened to."))
s=A.L0(p,a,b,c,d,A.n(p).c)
r=p.grv()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.aY()}else p.a=s
s.tm(r)
s.jq(new A.B7(p))
return s},
ma(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.v()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.D(o)
p=A.ad(o)
n=new A.w($.B,t.D)
n.ct(new A.aq(q,p))
k=n}else k=k.b2(s)
m=new A.B6(l)
if(k!=null)k=k.b2(m)
else m.$0()
return k},
mb(a){if((this.b&8)!==0)this.a.b.b4()
A.pC(this.e)},
mc(a){if((this.b&8)!==0)this.a.b.aY()
A.pC(this.f)},
$ibF:1}
A.B7.prototype={
$0(){A.pC(this.a.d)},
$S:0}
A.B6.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aF(null)},
$S:0}
A.pk.prototype={
cD(a){this.gaQ().aC(a)},
cE(a,b){this.gaQ().aL(a,b)},
df(){this.gaQ().aV()}}
A.k_.prototype={
cD(a){this.gaQ().c3(new A.cg(a,A.n(this).i("cg<1>")))},
cE(a,b){this.gaQ().c3(new A.hE(a,b))},
df(){this.gaQ().c3(B.ad)}}
A.cZ.prototype={}
A.hT.prototype={}
A.ba.prototype={
gJ(a){return(A.eL(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ba&&b.a===this.a}}
A.e2.prototype={
ho(){return this.w.ma(this)},
bP(){this.w.mb(this)},
bQ(){this.w.mc(this)}}
A.oq.prototype={
v(){var s=this.b.v()
return s.b2(new A.z6(this))}}
A.z7.prototype={
$2(a,b){var s=this.a
s.aL(a,b)
s.aV()},
$S:6}
A.z6.prototype={
$0(){this.a.a.aF(null)},
$S:2}
A.kr.prototype={}
A.b5.prototype={
tm(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fX(s)}},
iv(a){this.a=A.oy(this.d,a,A.n(this).i("b5.T"))},
b4(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jq(q.geP())},
aY(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fX(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jq(s.geQ())}}},
v(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.j8()
r=s.f
return r==null?$.ei():r},
j8(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.ho()},
aC(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cD(a)
else s.c3(new A.cg(a,A.n(s).i("cg<b5.T>")))},
aL(a,b){var s
if(t.C.b(a))A.n7(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cE(a,b)
else this.c3(new A.hE(a,b))},
aV(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.df()
else s.c3(B.ad)},
bP(){},
bQ(){},
ho(){return null},
c3(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e7(A.n(r).i("e7<b5.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fX(r)}},
cD(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fL(s.a,a,A.n(s).i("b5.T"))
s.e=(s.e&4294967231)>>>0
s.ja((r&4)!==0)},
cE(a,b){var s,r=this,q=r.e,p=new A.zs(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.j8()
s=r.f
if(s!=null&&s!==$.ei())s.b2(p)
else p.$0()}else{p.$0()
r.ja((q&4)!==0)}},
df(){var s,r=this,q=new A.zr(r)
r.j8()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.ei())s.b2(q)
else q.$0()},
jq(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.ja((r&4)!==0)},
ja(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bP()
else q.bQ()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fX(q)},
$ibq:1}
A.zs.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nA(s,o,this.c,r,t.l)
else q.fL(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.zr.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fK(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hR.prototype={
aa(a,b,c,d){return this.a.jS(a,d,c,b===!0)},
bw(a,b,c){return this.aa(a,null,b,c)},
aW(a){return this.aa(a,null,null,null)},
ng(a,b){return this.aa(a,null,null,b)}}
A.oL.prototype={
ger(){return this.a},
ser(a){return this.a=a}}
A.cg.prototype={
kF(a){a.cD(this.b)}}
A.hE.prototype={
kF(a){a.cE(this.b,this.c)}}
A.A3.prototype={
kF(a){a.df()},
ger(){return null},
ser(a){throw A.b(A.A("No events after a done."))}}
A.e7.prototype={
fX(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kW(new A.AP(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.ser(b)
s.c=b}}}
A.AP.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.ger()
q.b=r
if(r==null)q.c=null
s.kF(this.b)},
$S:0}
A.hF.prototype={
iv(a){},
b4(){var s=this.a
if(s>=0)this.a=s+2},
aY(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kW(s.gm4())}else s.a=r},
v(){this.a=-1
this.c=null
return $.ei()},
rl(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fK(s)}}else r.a=q},
$ibq:1}
A.cC.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.B,t.g5)
r.b=s
r.c=!1
q.aY()
return s}throw A.b(A.A("Already waiting for next."))}return r.qW()},
qW(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.B,t.g5)
q.b=s
r=p.aa(q.grd(),!0,q.grf(),q.grh())
if(q.b!=null)q.a=r
return s}return $.HX()},
v(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aF(!1)
else s.c=!1
return r.v()}return $.ei()},
re(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cu(!0)
if(q.c){r=q.a
if(r!=null)r.b4()}},
ri(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.an(new A.aq(a,b))
else q.ct(new A.aq(a,b))},
rg(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.d5(!1)
else q.lj(!1)}}
A.k8.prototype={
aa(a,b,c,d){return A.G2(c,this.$ti.c)},
bw(a,b,c){return this.aa(a,null,b,c)}}
A.dp.prototype={
aa(a,b,c,d){var s=null,r=new A.ki(s,s,s,s,this.$ti.i("ki<1>"))
r.d=new A.AN(this,r)
return r.jS(a,d,c,b===!0)},
bw(a,b,c){return this.aa(a,null,b,c)},
aW(a){return this.aa(a,null,null,null)}}
A.AN.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.ki.prototype={
u7(a){var s=this.b
if(s>=4)throw A.b(this.bM())
if((s&1)!==0)this.gaQ().aC(a)},
uo(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bM())
r|=4
s.b=r
if((r&1)!==0)s.gaQ().aV()},
gcs(){throw A.b(A.a_("Not available"))},
$idM:1}
A.BJ.prototype={
$0(){return this.a.an(this.b)},
$S:0}
A.BK.prototype={
$0(){return this.a.cu(this.b)},
$S:0}
A.kb.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.B,q=b===!0?1:0,p=d!=null?32:0,o=A.oy(r,a,s.y[1]),n=A.zq(r,d),m=c==null?A.C7():c
s=new A.hI(this,o,n,r.bZ(m,t.H),r,q|p,s.i("hI<1,2>"))
s.x=this.a.bw(s.gjr(),s.gjt(),s.gjv())
return s},
bw(a,b,c){return this.aa(a,null,b,c)}}
A.hI.prototype={
aC(a){if((this.e&2)!==0)return
this.j_(a)},
aL(a,b){if((this.e&2)!==0)return
this.la(a,b)},
bP(){var s=this.x
if(s!=null)s.b4()},
bQ(){var s=this.x
if(s!=null)s.aY()},
ho(){var s=this.x
if(s!=null){this.x=null
return s.v()}return null},
js(a){this.w.qI(a,this)},
jw(a,b){this.aL(a,b)},
ju(){this.aV()}}
A.f4.prototype={
qI(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.D(q)
r=A.ad(q)
p=s
o=r
n=A.kG(p,o)
if(n!=null){p=n.a
o=n.b}b.aL(p,o)
return}b.aC(m)}}
A.k9.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.v(A.A("Stream is already closed"))
s.j_(b)},
bg(a,b){this.a.aL(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.v(A.A("Stream is already closed"))
s.lb()},
$ibF:1}
A.hP.prototype={
aC(a){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.j_(a)},
aL(a,b){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.la(a,b)},
aV(){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.lb()},
bP(){var s=this.x
if(s!=null)s.b4()},
bQ(){var s=this.x
if(s!=null)s.aY()},
ho(){var s=this.x
if(s!=null){this.x=null
return s.v()}return null},
js(a){var s,r,q,p
try{q=this.w
q===$&&A.t()
q.u(0,a)}catch(p){s=A.D(p)
r=A.ad(p)
this.aL(s,r)}},
jw(a,b){var s,r,q,p
try{q=this.w
q===$&&A.t()
q.bg(a,b)}catch(p){s=A.D(p)
r=A.ad(p)
if(s===a)this.aL(a,b)
else this.aL(s,r)}},
ju(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.t()
q.q()}catch(p){s=A.D(p)
r=A.ad(p)
this.aL(s,r)}}}
A.k2.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.B,q=b===!0?1:0,p=d!=null?32:0,o=A.oy(r,a,s.y[1]),n=A.zq(r,d),m=c==null?A.C7():c,l=new A.hP(o,n,r.bZ(m,t.H),r,q|p,s.i("hP<1,2>"))
l.w=this.a.$1(new A.k9(l,s.i("k9<2>")))
l.x=this.b.bw(l.gjr(),l.gjt(),l.gjv())
return l},
bw(a,b,c){return this.aa(a,null,b,c)}}
A.BA.prototype={}
A.BC.prototype={}
A.BB.prototype={}
A.By.prototype={}
A.Bz.prototype={}
A.Bx.prototype={}
A.Bu.prototype={}
A.pv.prototype={}
A.Bt.prototype={}
A.Bs.prototype={}
A.Bw.prototype={}
A.Bv.prototype={}
A.pu.prototype={
vI(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.pw.prototype={}
A.pt.prototype={
eT(a,b,c){var s,r,q,p,o,n,m=this.gjy(),l=m.a
if(l===B.i){A.kM(b,c)
return}o=l.gkC()
o.toString
s=o
r=$.B
try{$.B=s
m.vI(l,l.gbc(),a,b,c)
$.B=r}catch(n){q=A.D(n)
p=A.ad(n)
$.B=r
o=b===q?c:p
s.eT(l,q,o)}},
$iP:1}
A.oF.prototype={
glD(){var s=this.ax
return s==null?this.ax=new A.hX(this):s},
gbc(){return this.ay.glD()},
gce(){return this.as.a},
fK(a){var s,r,q
try{this.b_(a,t.H)}catch(q){s=A.D(q)
r=A.ad(q)
this.eT(this,s,r)}},
fL(a,b,c){var s,r,q
try{this.eB(a,b,t.H,c)}catch(q){s=A.D(q)
r=A.ad(q)
this.eT(this,s,r)}},
nA(a,b,c,d,e){var s,r,q
try{this.kK(a,b,c,t.H,d,e)}catch(q){s=A.D(q)
r=A.ad(q)
this.eT(this,s,r)}},
k6(a,b){return new A.A_(this,this.bZ(a,b),b)},
uk(a,b,c){return new A.A1(this,this.du(a,b,c),c,b)},
f4(a){return new A.zZ(this,this.bZ(a,t.H))},
hS(a,b){return new A.A0(this,this.du(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aQ)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.t0(q,b)},
t0(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkC().gjZ()
if(s===B.aQ)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fl(a,b){this.eT(this,a,b)},
n6(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gbc(),this,a,b)},
b_(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gbc(),this,a,b)},
eB(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gbc(),this,a,b,c,d)},
kK(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gbc(),this,a,b,c,d,e,f)},
bZ(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gbc(),this,a,b)},
du(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gbc(),this,a,b,c)},
fE(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gbc(),this,a,b,c,d)},
n2(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gbc(),this,a,b)},
d0(a){var s=this.w,r=s.a
return s.b.$4(r,r.gbc(),this,a)},
kc(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gbc(),this,a,b)},
kb(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gbc(),this,a,b)},
gmi(){return this.a},
gmm(){return this.b},
gmk(){return this.c},
gme(){return this.d},
gmf(){return this.e},
gmd(){return this.f},
glI(){return this.r},
gjP(){return this.w},
glz(){return this.x},
gly(){return this.y},
gm9(){return this.z},
glN(){return this.Q},
gjy(){return this.as},
gjZ(){return this.at},
gkC(){return this.ay}}
A.A_.prototype={
$0(){return this.a.b_(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.A1.prototype={
$1(a){var s=this
return s.a.eB(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").Z(this.c).i("1(2)")}}
A.zZ.prototype={
$0(){return this.a.fK(this.b)},
$S:0}
A.A0.prototype={
$1(a){return this.a.fL(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.p8.prototype={
gmi(){return B.ev},
gmm(){return B.eu},
gmk(){return B.et},
gme(){return B.er},
gmf(){return B.es},
gmd(){return B.eq},
glI(){return B.em},
gjP(){return B.ew},
glz(){return B.el},
gly(){return B.ek},
gm9(){return B.ep},
glN(){return B.en},
gjy(){return B.eo},
gjZ(){return B.aQ},
gkC(){return null},
glD(){var s=$.AU
return s==null?$.AU=new A.hX(this):s},
gbc(){var s=$.AU
return s==null?$.AU=new A.hX(this):s},
gce(){return this},
fK(a){var s,r,q
try{if(B.i===$.B){a.$0()
return}A.C1(null,null,this,a)}catch(q){s=A.D(q)
r=A.ad(q)
A.kM(s,r)}},
fL(a,b){var s,r,q
try{if(B.i===$.B){a.$1(b)
return}A.C2(null,null,this,a,b)}catch(q){s=A.D(q)
r=A.ad(q)
A.kM(s,r)}},
nA(a,b,c){var s,r,q
try{if(B.i===$.B){a.$2(b,c)
return}A.E8(null,null,this,a,b,c)}catch(q){s=A.D(q)
r=A.ad(q)
A.kM(s,r)}},
k6(a,b){return new A.AW(this,a,b)},
f4(a){return new A.AV(this,a)},
hS(a,b){return new A.AX(this,a,b)},
h(a,b){return null},
fl(a,b){A.kM(a,b)},
n6(a,b){return A.GX(null,null,this,a,b)},
b_(a){if($.B===B.i)return a.$0()
return A.C1(null,null,this,a)},
eB(a,b){if($.B===B.i)return a.$1(b)
return A.C2(null,null,this,a,b)},
kK(a,b,c){if($.B===B.i)return a.$2(b,c)
return A.E8(null,null,this,a,b,c)},
bZ(a){return a},
du(a){return a},
fE(a){return a},
n2(a,b){return null},
d0(a){A.C3(null,null,this,a)},
kc(a,b){return A.DJ(a,b)},
kb(a,b){return A.FF(a,b)}}
A.AW.prototype={
$0(){return this.a.b_(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.AV.prototype={
$0(){return this.a.fK(this.b)},
$S:0}
A.AX.prototype={
$1(a){return this.a.fL(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hX.prototype={$iav:1}
A.C0.prototype={
$0(){A.EX(this.a,this.b)},
$S:0}
A.jX.prototype={}
A.dn.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gT(a){return this.a!==0},
gK(){return new A.f2(this,A.n(this).i("f2<1>"))},
gaU(){var s=A.n(this)
return A.dK(new A.f2(this,s.i("f2<1>")),new A.As(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lu(a)},
lu(a){var s=this.d
if(s==null)return!1
return this.c7(this.lq(s,a),a)>=0},
D(a,b){b.a4(0,new A.Ar(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.G4(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.G4(q,b)
return r}else return this.lO(b)},
lO(a){var s,r,q=this.d
if(q==null)return null
s=this.lq(q,a)
r=this.c7(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.lg(s==null?q.b=A.DS():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.lg(r==null?q.c=A.DS():r,b,c)}else q.mp(b,c)},
mp(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.DS()
s=p.cv(a)
r=o[s]
if(r==null){A.DT(o,s,[a,b]);++p.a
p.e=null}else{q=p.c7(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a4(a,b){var s,r,q,p,o,n=this,m=n.lp()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aC(n))}},
lp(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.a8(i.a,null,!1,t.z)
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
lg(a,b,c){if(a[b]==null){++this.a
this.e=null}A.DT(a,b,c)},
cv(a){return J.a9(a)&1073741823},
lq(a,b){return a[this.cv(b)]},
c7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.y(a[r],b))return r
return-1}}
A.As.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.Ar.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.e3.prototype={
cv(a){return A.kT(a)&1073741823},
c7(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.k5.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.p0(b)},
j(a,b,c){this.p5(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.p_(a)},
cv(a){return this.r.$1(a)&1073741823},
c7(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.zY.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.f2.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gT(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.oQ(s,s.lp(),this.$ti.i("oQ<1>"))},
E(a,b){return this.a.I(b)}}
A.oQ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aC(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.kg.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.oU(b)},
j(a,b,c){this.oW(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.oT(a)},
G(a,b){if(!this.y.$1(b))return null
return this.oV(b)},
el(a){return this.x.$1(a)&1073741823},
dq(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.AL.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.cB.prototype={
m2(){return new A.cB(A.n(this).i("cB<1>"))},
gt(a){var s=this,r=new A.e5(s,s.r,A.n(s).i("e5<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gF(a){return this.a===0},
gT(a){return this.a!==0},
E(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.pZ(b)},
pZ(a){var s=this.d
if(s==null)return!1
return this.c7(s[this.cv(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.A("No elements"))
return s.a},
ga3(a){var s=this.f
if(s==null)throw A.b(A.A("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.lf(s==null?q.b=A.DU():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.lf(r==null?q.c=A.DU():r,b)}else return q.pn(b)},
pn(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.DU()
s=q.cv(a)
r=p[s]
if(r==null)p[s]=[q.jE(a)]
else{if(q.c7(r,a)>=0)return!1
r.push(q.jE(a))}return!0},
G(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lr(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lr(s.c,b)
else return s.jM(b)},
jM(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cv(a)
r=n[s]
q=o.c7(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ls(p)
return!0},
lf(a,b){if(a[b]!=null)return!1
a[b]=this.jE(b)
return!0},
lr(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.ls(s)
delete a[b]
return!0},
jC(){this.r=this.r+1&1073741823},
jE(a){var s,r=this,q=new A.AM(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jC()
return q},
ls(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jC()},
cv(a){return J.a9(a)&1073741823},
c7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.y(a[r].a,b))return r
return-1}}
A.AM.prototype={}
A.e5.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aC(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.v4.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:69}
A.eC.prototype={
E(a,b){return b instanceof A.b7&&this===b.a},
gt(a){var s=this
return new A.oX(s,s.a,s.c,s.$ti.i("oX<1>"))},
gm(a){return this.b},
ao(a){var s,r,q,p=this;++p.a
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
ga3(a){var s
if(this.b===0)throw A.b(A.A("No such element"))
s=this.c.c
s.toString
return s},
gaq(a){var s=this.b
if(s===0)throw A.b(A.A("No such element"))
if(s>1)throw A.b(A.A("Too many elements"))
s=this.c
s.toString
return s},
gF(a){return this.b===0},
hm(a,b,c){var s,r,q=this
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
jU(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.oX.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.aC(s))
if(r.b!==0)r=s.e&&s.d===r.gH(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b7.prototype={
gfz(){var s=this.a
if(s==null||this===s.gH(0))return null
return this.c}}
A.J.prototype={
gt(a){return new A.ar(a,this.gm(a),A.bk(a).i("ar<J.E>"))},
a9(a,b){return this.h(a,b)},
gF(a){return this.gm(a)===0},
gT(a){return!this.gF(a)},
gH(a){if(this.gm(a)===0)throw A.b(A.aH())
return this.h(a,0)},
ga3(a){if(this.gm(a)===0)throw A.b(A.aH())
return this.h(a,this.gm(a)-1)},
gaq(a){if(this.gm(a)===0)throw A.b(A.aH())
if(this.gm(a)>1)throw A.b(A.iQ())
return this.h(a,0)},
E(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.y(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aC(a))}return!1},
cL(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aC(a))}return!0},
cf(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aC(a))}q=c.$0()
return q},
C(a,b){var s
if(this.gm(a)===0)return""
s=A.xV("",a,b)
return s.charCodeAt(0)==0?s:s},
dB(a,b){return new A.ao(a,b,A.bk(a).i("ao<J.E>"))},
cl(a,b,c){return new A.Y(a,b,A.bk(a).i("@<J.E>").Z(c).i("Y<1,2>"))},
bm(a,b){return A.cx(a,b,null,A.bk(a).i("J.E"))},
cY(a,b){return A.cx(a,0,A.cD(b,"count",t.S),A.bk(a).i("J.E"))},
c_(a,b){var s,r,q,p,o=this
if(o.gF(a)){s=J.Di(0,A.bk(a).i("J.E"))
return s}r=o.h(a,0)
q=A.a8(o.gm(a),r,!0,A.bk(a).i("J.E"))
for(p=1;p<o.gm(a);++p)q[p]=o.h(a,p)
return q},
cZ(a){return this.c_(a,!0)},
co(a){var s,r=A.v5(A.bk(a).i("J.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
f5(a,b){return new A.bQ(a,A.bk(a).i("@<J.E>").Z(b).i("bQ<1,2>"))},
cq(a,b){var s=b==null?A.Nr():b
A.nv(a,0,this.gm(a)-1,s)},
U(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bg(b,c,r)
s=A.N(this.fW(a,b,c),A.bk(a).i("J.E"))
return s},
b9(a,b){return this.U(a,b,null)},
fW(a,b,c){A.bg(b,c,this.gm(a))
return A.cx(a,b,c,A.bk(a).i("J.E"))},
km(a,b,c,d){var s
A.bg(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.bg(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bf(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.pS(d,e).c_(0,!1)
r=0}p=J.K(q)
if(r+s>p.gm(q))throw A.b(A.F7())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
az(a,b,c,d){return this.ai(a,b,c,d,0)},
d1(a,b,c){var s,r
if(t.j.b(c))this.az(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tZ(a,"[","]")},
$iL:1,
$io:1,
$ir:1}
A.X.prototype={
cc(a,b,c){var s=A.n(this)
return A.Fg(this,s.i("X.K"),s.i("X.V"),b,c)},
a4(a,b){var s,r,q,p
for(s=J.E(this.gK()),r=A.n(this).i("X.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga_(){return J.c3(this.gK(),new A.vn(this),A.n(this).i("T<X.K,X.V>"))},
aX(a,b,c,d){var s,r,q,p,o,n=A.u(c,d)
for(s=J.E(this.gK()),r=A.n(this).i("X.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.CZ(this.gK(),a)},
gm(a){return J.au(this.gK())},
gF(a){return J.bD(this.gK())},
gT(a){return J.du(this.gK())},
gaU(){return new A.kh(this,A.n(this).i("kh<X.K,X.V>"))},
l(a){return A.vo(this)},
$iF:1}
A.vn.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("X.V").a(r)
return new A.T(a,r,A.n(s).i("T<X.K,X.V>"))},
$S(){return A.n(this.a).i("T<X.K,X.V>(X.K)")}}
A.vp.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:32}
A.kh.prototype={
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gT(a){var s=this.a
return s.gT(s)},
gH(a){var s=this.a
s=s.h(0,J.bP(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gaq(a){var s=this.a
s=s.h(0,J.D_(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga3(a){var s=this.a
s=s.h(0,J.pR(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.oZ(J.E(s.gK()),s,this.$ti.i("oZ<1,2>"))}}
A.oZ.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.po.prototype={
j(a,b,c){throw A.b(A.a_("Cannot modify unmodifiable map"))}}
A.j1.prototype={
cc(a,b,c){return this.a.cc(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a4(a,b){this.a.a4(0,b)},
gF(a){var s=this.a
return s.gF(s)},
gT(a){var s=this.a
return s.gT(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gaU(){return this.a.gaU()},
ga_(){return this.a.ga_()},
aX(a,b,c,d){return this.a.aX(0,b,c,d)},
$iF:1}
A.cW.prototype={
cc(a,b,c){return new A.cW(this.a.cc(0,b,c),b.i("@<0>").Z(c).i("cW<1,2>"))}}
A.iY.prototype={
gt(a){var s=this
return new A.oY(s,s.c,s.d,s.b,s.$ti.i("oY<1>"))},
gF(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gH(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aH())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga3(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aH())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gaq(a){var s,r=this
if(r.b===r.c)throw A.b(A.aH())
if(r.gm(0)>1)throw A.b(A.iQ())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a9(a,b){var s,r=this
A.F6(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
G(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.y(r.a[s],b)){r.jM(s);++r.d
return!0}return!1},
l(a){return A.tZ(this,"{","}")},
jM(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.oY.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.v(A.aC(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.ct.prototype={
gF(a){return this.gm(this)===0},
gT(a){return this.gm(this)!==0},
D(a,b){var s
for(s=J.E(b);s.k();)this.u(0,s.gn())},
nE(a){var s=this.co(0)
s.D(0,a)
return s},
cl(a,b,c){return new A.ev(this,b,A.n(this).i("@<1>").Z(c).i("ev<1,2>"))},
gaq(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iQ())
s=r.gt(r)
if(!s.k())throw A.b(A.aH())
return s.gn()},
l(a){return A.tZ(this,"{","}")},
dB(a,b){return new A.ao(this,b,A.n(this).i("ao<1>"))},
cL(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cY(a,b){return A.FE(this,b,A.n(this).c)},
bm(a,b){return A.FC(this,b,A.n(this).c)},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aH())
return s.gn()},
ga3(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aH())
do s=r.gn()
while(r.k())
return s},
a9(a,b){var s,r
A.bf(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mq(b,b-r,this,null,"index"))},
$iL:1,
$io:1,
$ieP:1}
A.kp.prototype={
f9(a){var s,r,q,p=this,o=p.m2()
for(s=A.e6(p,p.r,A.n(p).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!a.E(0,q))o.u(0,q)}return o},
co(a){var s=this.m2()
s.D(0,this)
return s}}
A.kA.prototype={}
A.oU.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rF(b):s}},
gm(a){return this.b==null?this.c.a:this.dN().length},
gF(a){return this.gm(0)===0},
gT(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.S(s,A.n(s).i("S<1>"))}return new A.oV(this)},
gaU(){var s,r=this
if(r.b==null){s=r.c
return new A.am(s,A.n(s).i("am<2>"))}return A.dK(r.dN(),new A.AG(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tJ().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a4(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a4(0,b)
s=o.dN()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.BM(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aC(o))}},
dN(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
tJ(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.u(t.N,t.z)
r=n.dN()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.ao(r)
n.a=n.b=null
return n.c=s},
rF(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.BM(this.a[a])
return this.b[a]=s}}
A.AG.prototype={
$1(a){return this.a.h(0,a)},
$S:71}
A.oV.prototype={
gm(a){return this.a.gm(0)},
a9(a,b){var s=this.a
return s.b==null?s.gK().a9(0,b):s.dN()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gt(s)}else{s=s.dN()
s=new J.fp(s,s.length,A.a0(s).i("fp<1>"))}return s},
E(a,b){return this.a.I(b)}}
A.AE.prototype={
q(){var s,r,q=this
q.p6()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aC(A.GR(r.charCodeAt(0)==0?r:r,q.b))
s.aV()}}
A.Bp.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:68}
A.Bo.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:68}
A.l9.prototype={
gaS(){return"us-ascii"},
kj(a){return B.bB.A(a)}}
A.pn.prototype={
A(a){var s,r,q,p=A.bg(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aB(a,"string","Contains invalid characters."))
o[r]=q}return o},
c2(a){return new A.Bg(new A.hz(a),this.a)}}
A.la.prototype={}
A.Bg.prototype={
q(){this.a.a.q()},
bT(a,b,c,d){var s,r,q,p
A.bg(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.R("Source contains invalid character with code point: "+q+".",null))}s=new A.cm(a)
p=this.a.a
p.u(0,s.U(s,b,c))
if(d)p.q()}}
A.lg.prototype={
gfe(){return this.a},
wy(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bg(a1,a2,a0.length)
s=$.Ex()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.Cw(a0.charCodeAt(l))
h=A.Cw(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a4("")
e=p}else e=p
e.a+=B.a.B(a0,q,r)
d=A.bz(k)
e.a+=d
q=l
continue}}throw A.b(A.aa("Invalid base64 data",a0,r))}if(p!=null){e=B.a.B(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.EH(a0,n,a2,o,m,d)
else{c=B.c.am(d-1,4)+1
if(c===1)throw A.b(A.aa(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dv(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.EH(a0,n,a2,o,m,b)
else{c=B.c.am(b,4)
if(c===1)throw A.b(A.aa(a,a0,a2))
if(c>1)a0=B.a.dv(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ii.prototype={
A(a){var s=a.length
if(s===0)return""
s=new A.ow(this.a?u.G:u.U).n1(a,0,s,!0)
s.toString
return A.dV(s,0,null)},
c2(a){return new A.z8(a,new A.zp(this.a?u.G:u.U))}}
A.ow.prototype={
mT(a){return new Uint8Array(a)},
n1(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mT(o)
r.a=A.KS(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.zp.prototype={
mT(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bO(B.f.gac(s),s.byteOffset,a)}}
A.zl.prototype={
u(a,b){this.lv(b,0,J.au(b),!1)},
q(){this.lv(B.cW,0,0,!0)}}
A.z8.prototype={
lv(a,b,c,d){var s=this.b.n1(a,b,c,d)
if(s!=null)this.a.a.aC(A.dV(s,0,null))
if(d)this.a.a.aV()}}
A.lh.prototype={
A(a){var s,r,q=A.bg(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.ov()
r=s.kd(a,0,q)
r.toString
s.k8(a,q)
return r},
c2(a){return new A.zk(a,new A.ov())}}
A.ov.prototype={
kd(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.FR(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.KP(a,b,c,q)
r.a=A.KR(a,b,c,s,0,r.a)
return s},
k8(a,b){var s=this.a
if(s<-1)throw A.b(A.aa("Missing padding character",a,b))
if(s>0)throw A.b(A.aa("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.zk.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.kd(b,0,r)
if(s!=null)this.a.a.aC(s)},
q(){this.b.k8(null,null)
this.a.a.aV()},
bT(a,b,c,d){var s,r
A.bg(b,c,a.length)
if(b===c)return
s=this.b
r=s.kd(a,b,c)
if(r!=null)this.a.a.aC(r)
if(d){s.k8(a,c)
this.a.a.aV()}}}
A.qb.prototype={}
A.hz.prototype={
u(a,b){this.a.u(0,b)},
q(){this.a.q()}}
A.oz.prototype={
u(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.K(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.ag(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.az(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.az(p,o,o+n.gm(b),b)
q.c=q.c+n.gm(b)},
q(){this.a.$1(B.f.U(this.b,0,this.c))}}
A.ls.prototype={}
A.pe.prototype={
u(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.f_.prototype={
u(a,b){this.b.u(0,b)},
bg(a,b){A.cD(a,"error",t.K)
this.a.bg(a,b)},
q(){this.b.q()},
$ibF:1}
A.lu.prototype={}
A.aF.prototype={
c2(a){throw A.b(A.a_("This converter does not support chunked conversions: "+this.l(0)))},
ui(a){return new A.k2(new A.r5(this),a,t.fM.Z(A.n(this).i("aF.T")).i("k2<1,2>"))}}
A.r5.prototype={
$1(a){return new A.f_(a,this.a.c2(a),t.oW)},
$S:103}
A.ex.prototype={}
A.iW.prototype={
l(a){var s=A.iA(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.my.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.u1.prototype={
aG(a,b){var s=A.GR(a,this.guE().a)
return s},
a8(a,b){var s=A.Lb(a,this.gfe().b,null)
return s},
gfe(){return B.cy},
guE(){return B.cx}}
A.mA.prototype={
c2(a){return new A.AF(null,this.b,new A.pg(a))}}
A.AF.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.A("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a4("")
q=new A.Bc(r,s)
A.G6(b,q,p.b,p.a)
if(r.a.length!==0)q.jp()
s.q()},
q(){}}
A.mz.prototype={
c2(a){return new A.AE(this.a,a,new A.a4(""))}}
A.AI.prototype={
nK(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iR(a,s,r)
s=r+1
n.ap(92)
n.ap(117)
n.ap(100)
p=q>>>8&15
n.ap(p<10?48+p:87+p)
p=q>>>4&15
n.ap(p<10?48+p:87+p)
p=q&15
n.ap(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iR(a,s,r)
s=r+1
n.ap(92)
switch(q){case 8:n.ap(98)
break
case 9:n.ap(116)
break
case 10:n.ap(110)
break
case 12:n.ap(102)
break
case 13:n.ap(114)
break
default:n.ap(117)
n.ap(48)
n.ap(48)
p=q>>>4&15
n.ap(p<10?48+p:87+p)
p=q&15
n.ap(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.iR(a,s,r)
s=r+1
n.ap(92)
n.ap(q)}}if(s===0)n.b7(a)
else if(s<m)n.iR(a,s,m)},
j9(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.my(a,null))}s.push(a)},
iQ(a){var s,r,q,p,o=this
if(o.nJ(a))return
o.j9(a)
try{s=o.b.$1(a)
if(!o.nJ(s)){q=A.Fd(a,null,o.gm6())
throw A.b(q)}o.a.pop()}catch(p){r=A.D(p)
q=A.Fd(a,r,o.gm6())
throw A.b(q)}},
nJ(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xZ(a)
return!0}else if(a===!0){r.b7("true")
return!0}else if(a===!1){r.b7("false")
return!0}else if(a==null){r.b7("null")
return!0}else if(typeof a=="string"){r.b7('"')
r.nK(a)
r.b7('"')
return!0}else if(t.j.b(a)){r.j9(a)
r.xX(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.j9(a)
s=r.xY(a)
r.a.pop()
return s}else return!1},
xX(a){var s,r,q=this
q.b7("[")
s=J.K(a)
if(s.gT(a)){q.iQ(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b7(",")
q.iQ(s.h(a,r))}}q.b7("]")},
xY(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.b7("{}")
return!0}s=a.gm(a)*2
r=A.a8(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a4(0,new A.AJ(n,r))
if(!n.b)return!1
o.b7("{")
for(p='"';q<s;q+=2,p=',"'){o.b7(p)
o.nK(A.G(r[q]))
o.b7('":')
o.iQ(r[q+1])}o.b7("}")
return!0}}
A.AJ.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:32}
A.AH.prototype={
gm6(){var s=this.c
return s instanceof A.a4?s.l(0):null},
xZ(a){this.c.iP(B.w.l(a))},
b7(a){this.c.iP(a)},
iR(a,b,c){this.c.iP(B.a.B(a,b,c))},
ap(a){this.c.ap(a)}}
A.mD.prototype={
gaS(){return"iso-8859-1"},
kj(a){return B.cF.A(a)}}
A.mE.prototype={}
A.nH.prototype={
u(a,b){this.bT(b,0,b.length,!1)}}
A.Bc.prototype={
ap(a){var s=this.a,r=A.bz(a)
if((s.a+=r).length>16)this.jp()},
iP(a){if(this.a.a.length!==0)this.jp()
this.b.u(0,a)},
jp(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.kt.prototype={
q(){},
bT(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bz(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
u(a,b){this.a.a+=b}}
A.pg.prototype={
u(a,b){this.a.a.aC(b)},
bT(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aC(a)
else r.aC(B.a.B(a,b,c))
if(d)r.aV()},
q(){this.a.a.aV()}}
A.Bn.prototype={
q(){var s,r,q,p=this.c
this.a.vE(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bT(q,0,q.length,!0)}else r.q()},
u(a,b){this.bT(b,0,J.au(b),!1)},
bT(a,b,c,d){var s,r=this.c,q=this.a.d6(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bT(s,0,s.length,!1)
r.a=""
return}}}
A.oc.prototype={
gaS(){return"utf-8"},
uA(a,b){return new A.dq((b===!0?B.eg:B.aP).a).d6(a,0,null,!0)},
f7(a){return this.uA(a,null)},
kj(a){return B.e.A(a)}}
A.od.prototype={
A(a){var s,r,q=A.bg(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.pr(s)
if(r.lM(a,0,q)!==q)r.hJ()
return B.f.U(s,0,r.b)},
c2(a){return new A.Bq(new A.hz(a),new Uint8Array(1024))}}
A.pr.prototype={
hJ(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.I(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mG(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.I(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.hJ()
return!1}},
lM(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.I(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mG(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hJ()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.I(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.I(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.Bq.prototype={
q(){if(this.a!==0){this.bT("",0,0,!0)
return}this.d.a.q()},
bT(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mG(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lM(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hJ()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.U(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jS.prototype={
c2(a){return new A.Bn(new A.dq(this.a),new A.pg(a),new A.a4(""))}}
A.dq.prototype={
d6(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bg(b,c,J.au(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.LH(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.LG(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.jg(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Gt(p)
m.b=0
throw A.b(A.aa(n,a,q+m.c))}return o},
jg(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.jg(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.jg(a,s,c,d)}return q.uD(a,b,c,d)},
vE(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bz(65533)
a.a+=s}else throw A.b(A.aa(A.Gt(77),null,null))},
uD(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a4(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bz(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bz(k)
h.a+=q
break
case 65:q=A.bz(k)
h.a+=q;--g
break
default:q=A.bz(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bz(a[m])
h.a+=q}else{q=A.dV(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bz(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.px.prototype={}
A.aP.prototype={
bJ(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bK(p,r)
return new A.aP(p===0?!1:s,r,p)},
qc(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cl()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bK(s,q)
return new A.aP(n===0?!1:o,q,n)},
qf(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cl()
s=k-a
if(s<=0)return l.a?$.Ez():$.cl()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bK(s,q)
m=new A.aP(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.h1(0,$.fk())
return m},
bK(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.R("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.am(b,16)===0)return n.qc(r)
q=s+r+1
p=new Uint16Array(q)
A.FZ(n.b,s,b,p)
s=n.a
o=A.bK(q,p)
return new A.aP(o===0?!1:s,p,o)},
dG(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.R("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.am(b,16)
if(q===0)return j.qf(r)
p=s-r
if(p<=0)return j.a?$.Ez():$.cl()
o=j.b
n=new Uint16Array(p)
A.KY(o,s,b,n)
s=j.a
m=A.bK(p,n)
l=new A.aP(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bK(1,q)-1)>>>0!==0)return l.h1(0,$.fk())
for(k=0;k<r;++k)if(o[k]!==0)return l.h1(0,$.fk())}return l},
a2(a,b){var s,r=this.a
if(r===b.a){s=A.zm(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
j4(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.j4(p,b)
if(o===0)return $.cl()
if(n===0)return p.a===b?p:p.bJ(0)
s=o+1
r=new Uint16Array(s)
A.KU(p.b,o,a.b,n,r)
q=A.bK(s,r)
return new A.aP(q===0?!1:b,r,q)},
h2(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cl()
s=a.c
if(s===0)return p.a===b?p:p.bJ(0)
r=new Uint16Array(o)
A.ox(p.b,o,a.b,s,r)
q=A.bK(o,r)
return new A.aP(q===0?!1:b,r,q)},
fS(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.j4(b,r)
if(A.zm(q.b,p,b.b,s)>=0)return q.h2(b,r)
return b.h2(q,!r)},
h1(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bJ(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.j4(b,r)
if(A.zm(q.b,p,b.b,s)>=0)return q.h2(b,r)
return b.h2(q,!r)},
bk(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cl()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.G_(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bK(s,p)
return new A.aP(m===0?!1:n,p,m)},
qb(a){var s,r,q,p
if(this.c<a.c)return $.cl()
this.lF(a)
s=$.DO.bB()-$.k1.bB()
r=A.DQ($.DN.bB(),$.k1.bB(),$.DO.bB(),s)
q=A.bK(s,r)
p=new A.aP(!1,r,q)
return this.a!==a.a&&q>0?p.bJ(0):p},
t2(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lF(a)
s=A.DQ($.DN.bB(),0,$.k1.bB(),$.k1.bB())
r=A.bK($.k1.bB(),s)
q=new A.aP(!1,s,r)
if($.DP.bB()>0)q=q.dG(0,$.DP.bB())
return p.a&&q.c>0?q.bJ(0):q},
lF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.FW&&a.c===$.FY&&c.b===$.FV&&a.b===$.FX)return
s=a.b
r=a.c
q=16-B.c.gmP(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.FU(s,r,q,p)
n=new Uint16Array(b+5)
m=A.FU(c.b,b,q,n)}else{n=A.DQ(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.DR(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.zm(n,m,j,i)>=0){g&2&&A.I(n)
n[m]=1
A.ox(n,h,j,i,n)}else{g&2&&A.I(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.ox(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.KV(l,n,e);--k
A.G_(d,f,0,n,k,o)
if(n[e]<d){i=A.DR(f,o,k,j)
A.ox(n,h,j,i,n)
while(--d,n[e]<d)A.ox(n,h,j,i,n)}--e}$.FV=c.b
$.FW=b
$.FX=s
$.FY=r
$.DN.b=n
$.DO.b=h
$.k1.b=o
$.DP.b=q},
gJ(a){var s,r,q,p=new A.zn(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.zo().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aP&&this.a2(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bJ(0):n
while(r.c>1){q=$.Ey()
if(q.c===0)A.v(B.bO)
p=r.t2(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.qb(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bA(s,t.hF).en(0)},
$iaw:1}
A.zn.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:106}
A.zo.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:129}
A.oO.prototype={
mN(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mZ(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.Bm.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a7(b)}},
$S:66}
A.rJ.prototype={
$0(){var s=this
return A.v(A.R("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:16}
A.aG.prototype={
j6(a){var s=1000,r=B.c.am(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.am(p,s),n=this.c
return new A.aG(A.lQ(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aG&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.cc(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kw(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a2(a,b){var s=B.c.a2(this.a,b.a)
if(s!==0)return s
return B.c.a2(this.b,b.b)},
xu(){var s=this
if(s.c)return s
return new A.aG(s.a,s.b,!0)},
l(a){var s=this,r=A.J8(A.Dw(s)),q=A.lP(A.Du(s)),p=A.lP(A.wH(s)),o=A.lP(A.Ds(s)),n=A.lP(A.Dt(s)),m=A.lP(A.Dv(s)),l=A.EV(A.Fs(s)),k=s.b,j=k===0?"":A.EV(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaw:1}
A.aD.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a===b.a},
gJ(a){return B.c.gJ(this.a)},
a2(a,b){return B.c.a2(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.M(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.M(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.M(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.iy(B.c.l(n%1e6),6,"0")},
$iaw:1}
A.A4.prototype={
l(a){return this.a6()}}
A.af.prototype={
gcr(){return A.K2(this)}}
A.lb.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iA(s)
return"Assertion failed"}}
A.dj.prototype={}
A.bE.prototype={
gjj(){return"Invalid argument"+(!this.a?"(s)":"")},
gji(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gjj()+q+o
if(!s.a)return n
return n+s.gji()+": "+A.iA(s.gkv())},
gkv(){return this.b}}
A.db.prototype={
gkv(){return this.b},
gjj(){return"RangeError"},
gji(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.iN.prototype={
gkv(){return this.b},
gjj(){return"RangeError"},
gji(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$idb:1,
gm(a){return this.f}}
A.cX.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.o5.prototype={
l(a){return"UnimplementedError: "+this.a},
$icX:1}
A.bp.prototype={
l(a){return"Bad state: "+this.a}}
A.lx.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iA(s)+"."}}
A.mZ.prototype={
l(a){return"Out of Memory"},
gcr(){return null},
$iaf:1}
A.jK.prototype={
l(a){return"Stack Overflow"},
gcr(){return null},
$iaf:1}
A.oN.prototype={
l(a){return"Exception: "+this.a},
$iH:1}
A.bn.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.B(e,0,75)+"..."
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
k=""}return g+l+B.a.B(e,i,j)+k+"\n"+B.a.bk(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g},
$iH:1,
gis(){return this.a},
gh_(){return this.b},
gau(){return this.c}}
A.ms.prototype={
gcr(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iaf:1,
$icX:1,
$iH:1}
A.o.prototype={
f5(a,b){return A.fr(this,A.n(this).i("o.E"),b)},
cl(a,b,c){return A.dK(this,b,A.n(this).i("o.E"),c)},
dB(a,b){return new A.ao(this,b,A.n(this).i("ao<o.E>"))},
E(a,b){var s
for(s=this.gt(this);s.k();)if(J.y(s.gn(),b))return!0
return!1},
vG(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
vH(a,b,c){return this.vG(0,b,c,t.z)},
cL(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
C(a,b){var s,r,q=this.gt(this)
if(!q.k())return""
s=J.Z(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.Z(q.gn())
while(q.k())}else{r=s
do r=r+b+J.Z(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bp(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
c_(a,b){var s=A.n(this).i("o.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
cZ(a){return this.c_(0,!0)},
co(a){return A.ca(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gt(this).k()},
gT(a){return!this.gF(this)},
cY(a,b){return A.FE(this,b,A.n(this).i("o.E"))},
bm(a,b){return A.FC(this,b,A.n(this).i("o.E"))},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aH())
return s.gn()},
ga3(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aH())
do s=r.gn()
while(r.k())
return s},
gaq(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aH())
s=r.gn()
if(r.k())throw A.b(A.iQ())
return s},
cf(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a9(a,b){var s,r
A.bf(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mq(b,b-r,this,null,"index"))},
l(a){return A.Jw(this,"(",")")}}
A.T.prototype={
l(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.W.prototype={
gJ(a){return A.k.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.k.prototype={$ik:1,
P(a,b){return this===b},
gJ(a){return A.eL(this)},
l(a){return"Instance of '"+A.n5(this)+"'"},
gal(a){return A.d2(this)},
toString(){return this.l(this)}}
A.pi.prototype={
l(a){return""},
$iaJ:1}
A.jM.prototype={
gvj(){var s=this.gn0()
if($.kY()===1e6)return s
return s*1000},
gn_(){var s=this.gn0()
if($.kY()===1000)return s
return B.c.M(s,1000)},
aB(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.n6.$0()-r)
s.b=null}},
gn0(){var s=this.b
if(s==null)s=$.n6.$0()
return s-this.a}}
A.jB.prototype={
gt(a){return new A.nm(this.a)},
ga3(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.A("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.GB(r,s)}return s}}
A.nm.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.GB(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a4.prototype={
gm(a){return this.a.length},
iP(a){var s=A.q(a)
this.a+=s},
ap(a){var s=A.bz(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.yw.prototype={
$2(a,b){throw A.b(A.aa("Illegal IPv6 address, "+a,this.a,b))},
$S:163}
A.kB.prototype={
gmu(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.q(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gwO(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ab(s,1)
r=s.length===0?B.u:A.fN(new A.Y(A.l(s.split("/"),t.s),A.NC(),t.iZ),t.N)
q.x!==$&&A.CT()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmu())
r.y!==$&&A.CT()
r.y=s
q=s}return q},
gkP(){return this.b},
gdn(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.af(s,"v",1))return B.a.B(s,1,s.length-1)
return s},
gfw(){var s=this.d
return s==null?A.Gi(this.a):s},
gfD(){var s=this.f
return s==null?"":s},
gi7(){var s=this.r
return s==null?"":s},
wd(a){var s=this.a
if(a.length!==s.length)return!1
return A.LU(a,s,0)>=0},
fH(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.DY(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.Bi(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.Bj(null,0,0,a)
else k=j.f
return A.kC(b,q,o,p,l,k,j.r)},
kI(a){return this.fH(a,null)},
ny(a){return this.fH(null,a)},
m0(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.af(b,"../",r);){r+=3;++s}q=B.a.cQ(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.io(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dv(a,q+1,null,B.a.ab(b,r-3*s))},
ak(a){return this.fJ(A.ob(a))},
fJ(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb3().length!==0)return a
else{s=h.a
if(a.gkq()){r=a.ny(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gn7())m=a.gij()?a.gfD():h.f
else{l=A.LF(h,n)
if(l>0){k=B.a.B(n,0,l)
n=a.gkp()?k+A.f8(a.gbx()):k+A.f8(h.m0(B.a.ab(n,k.length),a.gbx()))}else if(a.gkp())n=A.f8(a.gbx())
else if(n.length===0)if(p==null)n=s.length===0?a.gbx():A.f8(a.gbx())
else n=A.f8("/"+a.gbx())
else{j=h.m0(n,a.gbx())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f8(j)
else n=A.E_(j,!r||p!=null)}m=a.gij()?a.gfD():null}}}i=a.gkr()?a.gi7():null
return A.kC(s,q,p,o,n,m,i)},
gkq(){return this.c!=null},
gij(){return this.f!=null},
gkr(){return this.r!=null},
gn7(){return this.e.length===0},
gkp(){return B.a.S(this.e,"/")},
kM(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.a_("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.a_(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.a_(u.A))
if(r.c!=null&&r.gdn()!=="")A.v(A.a_(u.Q))
s=r.gwO()
A.Ly(s,!1)
q=A.xV(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmu()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb3())if(p.c!=null===b.gkq())if(p.b===b.gkP())if(p.gdn()===b.gdn())if(p.gfw()===b.gfw())if(p.e===b.gbx()){r=p.f
q=r==null
if(!q===b.gij()){if(q)r=""
if(r===b.gfD()){r=p.r
q=r==null
if(!q===b.gkr()){s=q?"":r
s=s===b.gi7()}}}}return s},
$io9:1,
gb3(){return this.a},
gbx(){return this.e}}
A.Bl.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.pq(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.pq(1,b,B.o,!0)
s.a+=r}},
$S:185}
A.Bk.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:66}
A.yv.prototype={
gnH(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cg(m,"?",s)
q=m.length
if(r>=0){p=A.kD(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.oI("data","",n,n,A.kD(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.ci.prototype={
gkq(){return this.c>0},
gks(){return this.c>0&&this.d+1<this.e},
gij(){return this.f<this.r},
gkr(){return this.r<this.a.length},
gkp(){return B.a.af(this.a,"/",this.e)},
gn7(){return this.e===this.f},
gb3(){var s=this.w
return s==null?this.w=this.pX():s},
pX(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.B(r.a,0,q)},
gkP(){var s=this.c,r=this.b+3
return s>r?B.a.B(this.a,r,s-1):""},
gdn(){var s=this.c
return s>0?B.a.B(this.a,s,this.d):""},
gfw(){var s,r=this
if(r.gks())return A.aK(B.a.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbx(){return B.a.B(this.a,this.e,this.f)},
gfD(){var s=this.f,r=this.r
return s<r?B.a.B(this.a,s+1,r):""},
gi7(){var s=this.r,r=this.a
return s<r.length?B.a.ab(r,s+1):""},
lU(a){var s=this.d+1
return s+a.length===this.e&&B.a.af(this.a,a,s)},
xi(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.ci(B.a.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.DY(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb3()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.B(h.a,h.b+3,q):""
o=h.gks()?h.gfw():g
if(s)o=A.Bi(o,b)
q=h.c
if(q>0)n=B.a.B(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.B(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.Bj(g,0,0,a)
else{k=h.r
j=m<k?B.a.B(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ab(q,m+1):g
return A.kC(b,p,n,o,l,j,i)},
kI(a){return this.fH(a,null)},
ny(a){return this.fH(null,a)},
ak(a){return this.fJ(A.ob(a))},
fJ(a){if(a instanceof A.ci)return this.tt(this,a)
return this.mw().fJ(a)},
tt(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lU("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lU("443")
if(p){o=r+1
return new A.ci(B.a.B(a.a,0,o)+B.a.ab(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mw().fJ(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.ci(B.a.B(a.a,0,r)+B.a.ab(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.ci(B.a.B(a.a,0,r)+B.a.ab(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.xi()}s=b.a
if(B.a.af(s,"/",n)){m=a.e
l=A.Ga(this)
k=l>0?l:m
o=k-n
return new A.ci(B.a.B(a.a,0,k)+B.a.ab(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.af(s,"../",n))n+=3
o=j-n+1
return new A.ci(B.a.B(a.a,0,j)+"/"+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Ga(this)
if(l>=0)g=l
else for(g=j;B.a.af(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.af(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.af(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.ci(B.a.B(h,0,i)+d+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kM(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.a_("Cannot extract a file path from a "+r.gb3()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.a_(u.z))
throw A.b(A.a_(u.A))}if(r.c<r.d)A.v(A.a_(u.Q))
q=B.a.B(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mw(){var s=this,r=null,q=s.gb3(),p=s.gkP(),o=s.c>0?s.gdn():r,n=s.gks()?s.gfw():r,m=s.a,l=s.f,k=B.a.B(m,s.e,l),j=s.r
l=l<j?s.gfD():r
return A.kC(q,p,o,n,k,l,j<m.length?s.gi7():r)},
l(a){return this.a},
$io9:1}
A.oI.prototype={}
A.lZ.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.q(this.b)}}
A.mV.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iH:1}
A.to.prototype={
$2(a,b){this.a.b0(new A.tm(a),new A.tn(b),t.X)},
$S:187}
A.tm.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:191}
A.tn.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.No(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.v("Attempting to box non-Dart object.")
s={}
s[$.Il()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:6}
A.CB.prototype={
$1(a){var s,r,q,p
if(A.GP(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.D(p,J.c3(a,this,t.z))
return p}else return a},
$S:39}
A.CH.prototype={
$1(a){return this.a.aA(a)},
$S:28}
A.CI.prototype={
$1(a){if(a==null)return this.a.aR(new A.mV(a===undefined))
return this.a.aR(a)},
$S:28}
A.Ch.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.GO(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aG(A.lQ(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.R("structured clone of RegExp",null))
if(a instanceof Promise)return A.a2(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.u(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aA(o),q=s.gt(o);q.k();)n.push(A.kO(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.K(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:39}
A.AB.prototype={
cS(a){if(a<=0||a>4294967296)throw A.b(A.b2(u.E+a))
return Math.random()*a>>>0},
nk(){return Math.random()}}
A.AC.prototype={
pj(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.a_("No source of cryptographically secure random numbers available."))},
cS(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b2(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.I(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ap(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bO(B.aC.gac(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.lW.prototype={}
A.a5.prototype={
h(a,b){var s,r=this
if(!r.jz(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a5.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jz(b))return
s.c.j(0,s.a.$1(b),new A.T(b,c,s.$ti.i("T<a5.K,a5.V>")))},
D(a,b){b.a4(0,new A.qd(this))},
cc(a,b,c){return this.c.cc(0,b,c)},
I(a){var s=this
if(!s.jz(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a5.K").a(a)))},
ga_(){var s=this.c,r=A.n(s).i("aN<1,2>")
return A.dK(new A.aN(s,r),new A.qe(this),r.i("o.E"),this.$ti.i("T<a5.K,a5.V>"))},
a4(a,b){this.c.a4(0,new A.qf(this,b))},
gF(a){return this.c.a===0},
gT(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("am<2>")
return A.dK(new A.am(s,r),new A.qg(this),r.i("o.E"),this.$ti.i("a5.K"))},
gm(a){return this.c.a},
aX(a,b,c,d){return this.c.aX(0,new A.qh(this,b,c,d),c,d)},
gaU(){var s=this.c,r=A.n(s).i("am<2>")
return A.dK(new A.am(s,r),new A.qi(this),r.i("o.E"),this.$ti.i("a5.V"))},
l(a){return A.vo(this)},
jz(a){return this.$ti.i("a5.K").b(a)},
$iF:1}
A.qd.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a5.K,a5.V)")}}
A.qe.prototype={
$1(a){var s=a.b
return new A.T(s.a,s.b,this.a.$ti.i("T<a5.K,a5.V>"))},
$S(){return this.a.$ti.i("T<a5.K,a5.V>(T<a5.C,T<a5.K,a5.V>>)")}}
A.qf.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a5.C,T<a5.K,a5.V>)")}}
A.qg.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a5.K(T<a5.K,a5.V>)")}}
A.qh.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.Z(this.c).Z(this.d).i("T<1,2>(a5.C,T<a5.K,a5.V>)")}}
A.qi.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a5.V(T<a5.K,a5.V>)")}}
A.lS.prototype={
V(a,b){return J.y(a,b)},
ad(a){return J.a9(a)}}
A.iR.prototype={
V(a,b){var s,r,q,p
if(a===b)return!0
s=J.E(a)
r=J.E(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.V(s.gn(),r.gn()))return!1}},
ad(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();){q=q+r.ad(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.eD.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.K(a)
r=s.gm(a)
q=J.K(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.V(s.h(a,o),q.h(b,o)))return!1
return!0},
ad(a){var s,r,q,p
for(s=J.K(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ad(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hU.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.De(s.gvp(),s.gw7(),s.gwe(),A.n(this).i("hU.E"),t.S)
for(s=J.E(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.E(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ad(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();)q=q+r.ad(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hc.prototype={}
A.hK.prototype={
gJ(a){var s=this.a
return 3*s.a.ad(this.b)+7*s.b.ad(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hK){s=this.a
s=s.a.V(this.b,b.b)&&s.b.V(this.c,b.c)}else s=!1
return s}}
A.j0.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.De(null,null,null,t.mB,t.S)
for(r=J.E(a.gK());r.k();){q=r.gn()
p=new A.hK(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gK());r.k();){q=r.gn()
p=new A.hK(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ad(a){var s,r,q,p,o,n,m,l
for(s=J.E(a.gK()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ad(n)
l=a.h(0,n)
o=o+3*m+7*q.ad(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.lR.prototype={
V(a,b){var s,r=this
if(a instanceof A.ct)return b instanceof A.ct&&new A.hc(r,t.cu).V(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.j0(r,r,t.a3).V(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.eD(r,t.hI).V(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iR(r,t.nZ).V(a,b)
return J.y(a,b)},
ad(a){var s=this
if(a instanceof A.ct)return new A.hc(s,t.cu).ad(a)
if(t.f.b(a))return new A.j0(s,s,t.a3).ad(a)
if(t.j.b(a))return new A.eD(s,t.hI).ad(a)
if(t.e7.b(a))return new A.iR(s,t.nZ).ad(a)
return J.a9(a)},
wf(a){return!0}}
A.mU.prototype={
sm(a,b){A.Fn()},
u(a,b){return A.Fn()}}
A.o8.prototype={
j(a,b,c){return A.KB()}}
A.cn.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cn){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.vR(this.a)},
l(a){return A.at(this.a)}}
A.c6.prototype={
u(a,b){if(this.a!=null)throw A.b(A.A("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.A("add must be called once."))}}
A.mk.prototype={
A(a){var s=new A.c6(),r=A.d_(s)
r.u(0,a)
r.q()
r=s.a
r.toString
return r}}
A.tt.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.A("Hash.add() called after close()."))
s.r=s.r+J.au(b)
s.le(b)},
le(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pO(B.f.gac(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.K(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ai(i,j,n,a,o)
k.e=n
return}B.f.ai(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.I(s)
s[m]=l;++m}while(m<q)
k.xA(s)}},
q(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.v(A.a_("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.pO(B.f.gac(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.I(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.le(q)
s=l.a
s.u(0,new A.cn(l.pF()))
s.q()},
pF(){var s,r,q,p,o,n,m
if(B.aV===$.kX())return J.Iy(B.y.gac(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pO(B.f.gac(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.I(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.pb.prototype={
c2(a){var s=new Uint32Array(A.bc(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hz(new A.pc(s,r,a,q,new Uint32Array(16)))}}
A.AZ.prototype={
xA(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.I(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.I(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cM[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.I(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.pc.prototype={}
A.l4.prototype={
gJ(a){return A.cc(B.dW,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lK&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.d2(s).l(0)+".with"+s.d*8+"bits()"
return A.d2(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.qo.prototype={}
A.j_.prototype={
gJ(a){return B.t.ad(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.j_&&B.t.V(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.C(s,",")+"])"}}
A.jF.prototype={
l(a){return A.d2(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iH:1}
A.vi.prototype={
l(a){return A.d2(this).l(0)+"()"}}
A.jE.prototype={
gJ(a){return(B.t.ad(this.b.a)^B.t.ad(this.c)^B.t.ad(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jE){s=B.t.V(this.b.a,b.b.a)
s=s&&B.t.V(this.c,b.c)&&B.t.V(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.C(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.xB.prototype={}
A.jG.prototype={
geb(){return this.b},
gJ(a){var s=A.eL(B.ea),r=B.t.ad(this.geb())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jG&&B.t.V(this.geb(),b.geb())},
l(a){return"SecretKeyData(...)"}}
A.nr.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.a_("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.a_("The bytes are unmodifiable."))}}
A.lK.prototype={
uG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.geb().gm(0),f=this.d
if(g!==f)throw A.b(A.aB(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Hd(c)
r=new Uint32Array(4)
A.pE(r,0,r,0,s)
r[0]=A.bC(r[0])
r[1]=A.bC(r[1])
r[2]=A.bC(r[2])
r[3]=A.bC(r[3])
q=A.EU(r,a.c)
p=J.ED(B.f.gac(q),0,null)
o=a.a
n=B.t.V(B.aT.ll(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jF())
A.C8(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pE(l,k,p,0,s)
A.C8(q,1)}j=J.bO(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.I(j)
j[k]=i^h}return j},
vm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.geb().gm(0),f=this.d
if(g!==f)throw A.b(A.aB(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Hd(d)
r=new Uint32Array(4)
A.pE(r,0,r,0,s)
r[0]=A.bC(r[0])
r[1]=A.bC(r[1])
r[2]=A.bC(r[2])
r[3]=A.bC(r[3])
q=A.EU(r,c)
p=J.ED(B.f.gac(q),0,null)
o=new Uint32Array(A.bc(p))
A.C8(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pE(l,k,p,0,s)
A.C8(q,1)}j=J.bO(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.I(j)
j[k]=i^h}return new A.jE(j,B.aT.ll(j,b,s,r,o),c)}}
A.rn.prototype={
l(a){return"DartGcm()"},
ll(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lL(n,d,b)
A.lL(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.am(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.am(r,o),!1)
A.lL(n,d,J.bO(B.aC.gac(q),0,null))
p=new Uint32Array(4)
A.pE(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.j_(J.bO(B.y.gac(n),0,null))}}
A.oG.prototype={}
A.oH.prototype={}
A.r8.prototype={}
A.ro.prototype={}
A.zU.prototype={
V(a,b){var s,r,q=J.K(a),p=J.K(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ad(a){var s,r,q,p,o
for(s=J.K(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.am(q,16)
r=(r^B.c.ts(p,o)^B.c.mr(p,16-o))>>>0}return r}}
A.nh.prototype={}
A.li.prototype={$iD3:1}
A.lj.prototype={
i6(){if(this.w)throw A.b(A.A("Can't finalize a finalized Request."))
this.w=!0
return B.bF},
l(a){return this.a+" "+this.b.l(0)}}
A.lk.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:88}
A.ll.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:93}
A.q7.prototype={
p9(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.R("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.R("Invalid content length "+A.q(s)+".",null))}}}
A.lp.prototype={
b8(a){return this.oE(a)},
oE(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b8=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.ER("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.i6().xt(),$async$b8)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.bD(k)?k:null
a9=t.N
f=A.u(a9,t.K)
e=b4.gmS()
d=null
if(e!=null){d=e
J.d3(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.n(b0).i("aN<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.d3(f,c.a,c.b)}f=A.kS(f)
f.toString
A.bi(f)
b0=l.signal
s=8
return A.a(A.a2(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b8)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.h0(a,null):null
if(a0==null&&a!=null){f=A.ER("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.u(a9,a9)
b.headers.forEach(A.pz(new A.qa(a1)))
f=A.LK(b4,b)
a4=b.status
a6=a1
a8=a0
A.ob(b.url)
a9=b.statusText
f=new A.nG(A.HO(f),a4,a8,a6)
f.p9(a4,a8,a6,!1,!0,a9,b4)
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
A.GW(a2,a3,b4)
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
return A.f($async$b8,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].abort()
this.b=!0}}
A.qa.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:95}
A.BI.prototype={
$1(a){return A.i1(this.a,this.b,a)},
$S:99}
A.BX.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.aj()}},
$S:0}
A.BY.prototype={
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
n=A.D(k)
m=A.ad(k)
if(!o.a.b)A.GW(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dx.prototype={
xt(){var s=new A.w($.B,t.jz),r=new A.aE(s,t.iq),q=new A.oz(new A.qc(r),new Uint8Array(1024))
this.aa(q.gu3(q),!0,q.ged(),r.gus())
return s}}
A.qc.prototype={
$1(a){return this.a.aA(new Uint8Array(A.bc(a)))},
$S:11}
A.ep.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iH:1}
A.mN.prototype={
gm(a){return this.b}}
A.vJ.prototype={
gmS(){var s,r,q,p=this,o={},n=o.a=0
p.x.a4(0,new A.vK(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.p)(s),++n){q=s[n]
o.a=o.a+(74+B.e.A(p.lS(q)).length+q.b+2)}return o.a+2+70+4},
i6(){var s=this,r=s.pB()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.l6()
return new A.dx(s.bo(r))},
bo(a){return this.qB(a)},
qB(a){var $async$bo=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.A(f+"\r\n")
d=B.e.A(f+"--\r\n")
f=m.x,f=new A.aN(f,A.n(f).i("aN<1,2>")).gt(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bY(A.e4(e),$async$bo,r)
case 5:k=l.b
j=$.CX()
l=A.C(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.C(l,'"',"%22")+'"'
l=$.EA()
s=6
q=[1]
return A.bY(A.e4(B.e.A((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bo,r)
case 6:s=7
q=[1]
return A.bY(A.e4(B.e.A(k)),$async$bo,r)
case 7:s=8
q=[1]
return A.bY(A.e4(B.b7),$async$bo,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bY(A.e4(e),$async$bo,r)
case 12:s=13
q=[1]
return A.bY(A.e4(B.e.A(m.lS(g))),$async$bo,r)
case 13:if(g.f)A.v(A.A("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bY(A.L9(g.e),$async$bo,r)
case 14:s=15
q=[1]
return A.bY(A.e4(B.b7),$async$bo,r)
case 15:case 10:f.length===l||(0,A.p)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bY(A.e4(d),$async$bo,r)
case 16:case 1:return A.bY(null,0,r)
case 2:return A.bY(o.at(-1),1,r)}})
var s=0,r=A.GN($async$bo,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.H4(r)},
qU(a,b){var s,r=$.CX()
r=A.C(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.C(r,'"',"%22")+'"'
r=$.EA()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lS(a){var s=a.d.l(0),r=$.CX(),q=A.C(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.C(q,'"',"%22")+'"'
s=A.C(a.c,r,"%0D%0A")
p=p+'; filename="'+A.C(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pB(){var s,r=J.Fa(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.d1[$.HY().cS(66)]
return"dart-http-boundary-"+A.dV(r,0,null)}}
A.vK.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.A(this.b.qU(a,b)).length+B.e.A(b).length+2)},
$S:33}
A.xq.prototype={
gmS(){return this.y.length},
gkk(){var s,r
if(this.gcw()==null||!this.gcw().c.a.I("charset"))return B.o
s=this.gcw().c.a.h(0,"charset")
s.toString
r=A.Jc(s)
return r==null?A.v(A.aa('Unsupported encoding "'+s+'".',null,null)):r},
i6(){this.l6()
return new A.dx(A.DE(this.y,t.L))},
gcw(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.JL(s)},
scw(a){this.r.j(0,"content-type",a.l(0))},
pI(){if(!this.w)return
throw A.b(A.A("Can't modify a finalized Request."))}}
A.jO.prototype={}
A.nG.prototype={}
A.io.prototype={}
A.fP.prototype={
l(a){var s=new A.a4(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a4(0,new A.vs(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.vq.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.xW(null,j),h=$.Ix()
i.iY(h)
s=$.Iw()
i.fg(s)
r=i.gky().h(0,0)
r.toString
i.fg("/")
i.fg(s)
q=i.gky().h(0,0)
q.toString
i.iY(h)
p=t.N
o=A.u(p,p)
for(;;){p=i.d=B.a.eq(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gN():n
if(!m)break
p=i.d=h.eq(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gN()
i.fg(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.fg("=")
n=i.d=s.eq(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gN()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.NN(i)
n=i.d=h.eq(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.vv()
return A.Dp(r,q,o)},
$S:105}
A.vs.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Iu()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.HL(b,$.Ij(),new A.vr(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:33}
A.vr.prototype={
$1(a){return"\\"+A.q(a.h(0,0))},
$S:65}
A.Cn.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:65}
A.q6.prototype={
dz(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eN(),$async$dz)
case 5:o=b
s=o.gnw()<0.25?6:7
break
case 6:s=8
return A.a(p.jL(o),$async$dz)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnw()<0.25?9:10
break
case 9:s=11
return A.a(p.jL(m),$async$dz)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
iG(){var s=0,r=A.h(t.q),q,p=this
var $async$iG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eN(),$async$iG)
case 3:q=p.jL(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iG,r)},
eN(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.cd():j
p=3
s=6
return A.a(l,$async$eN)
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
return A.f($async$eN,r)},
jL(a){var s=this.c
if(s!=null)return s
return this.c=this.ha(a)},
ha(a){return this.qe(a)},
qe(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$ha=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.ld("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iH(l),$async$ha)
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
return A.f($async$ha,r)}}
A.jo.prototype={
pb(a,b,c,d,e,f,g,h,i,j,k){var s=this,r=new A.q6(s.c)
s.Q!==$&&A.eh()
s.Q=r
s.as!==$&&A.eh()
s.as=new A.w8(s.z,s.b,r,s.x,s.a)},
iz(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$iz=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.ay){s=1
break}n.ay=!0
if(n.ch){s=1
break}p=4
m=n.as
m===$&&A.t()
s=7
return A.a(m.iB(),$async$iz)
case 7:n.ax=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.D(k)
if(m instanceof A.cM){n.ax=!1
n.ch=!0}else if(m instanceof A.br)n.ay=n.ax=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iz,r)},
h0(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$h0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.at!=null){s=1
break}o=p.as
o===$&&A.t()
n=A.JZ(B.ch,o,A.l(["data"],t.s),p.grm(),p.grj(),p.w)
p.at=n
s=3
return A.a(n.aB(),$async$h0)
case 3:case 1:return A.e(q,r)}})
return A.f($async$h0,r)},
eH(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.at
o=o==null?null:o.aK()
s=2
return A.a(o instanceof A.w?o:A.bB(o,t.H),$async$eH)
case 2:q.at=null
for(o=q.cx,p=new A.aV(o,o.r,o.e,A.n(o).i("aV<2>"));p.k();)p.d.v()
o.ao(0)
q.cy.ao(0)
return A.e(null,r)}})
return A.f($async$eH,r)},
h7(){var s=0,r=A.h(t.H),q=this
var $async$h7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.eH(),$async$h7)
case 2:q.z.a.q()
return A.e(null,r)}})
return A.f($async$h7,r)},
rk(){var s,r,q,p
for(s=this.db,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
this.eK(p,new A.cH(p,B.ac,null))}},
rn(a){var s=a.b,r=s.b
if(!B.b.E(this.db,r))return
if(a.a==="delete"){this.hF(s)
return}this.eK(r,new A.cH(r,B.ac,s))},
hF(a){return this.tN(a)},
tN(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hF=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.E(n.db,j)){s=1
break}m=null
p=4
l=n.as
l===$&&A.t()
s=7
return A.a(l.c1(a.a),$async$hF)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.D(i)
if(l instanceof A.cQ){n.eK(j,new A.cH(j,B.aS,null))
s=1
break}else if(l instanceof A.br){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eK(j,new A.cH(j,B.aS,null))
s=1
break}n.eK(j,new A.cH(j,B.ac,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hF,r)},
eK(a,b){var s,r,q=this
q.cy.j(0,a,b)
s=q.cx
r=s.h(0,a)
if(r!=null)r.v()
s.j(0,a,A.bX(q.d,new A.w4(q,a)))},
xC(a,b){return this.iL(null,a,null,b,null)},
iL(a,b,c,d,e){return this.xF(a,b,c,d,e)},
xE(a,b){return this.iL(null,a,null,null,b)},
xF(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iL=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aX(0,new A.w5(p),t.N,t.co)
n=p.as
n===$&&A.t()
q=n.iK(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iL,r)},
$iDG:1}
A.w4.prototype={
$0(){var s,r=this.a,q=this.b
r.cx.G(0,q)
s=r.cy.G(0,q)
if(s!=null&&(r.CW.c&4)===0)r.CW.u(0,s)},
$S:0}
A.w5.prototype={
$2(a,b){return new A.T(a,new A.dB("imgs+",b.a,b.b,b.c),t.ia)},
$S:115}
A.n4.prototype={}
A.wB.prototype={
hW(a,b,c,d){return this.uu(a,b,c,d)},
uu(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hW=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.B4(d)
n=t.hw
m=A.dT(null,null,n)
l=t.N
k=$.B.h(0,B.dP)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.lp(A.l([],t.kG))
j=new A.w6(j)
p=new A.n4(c,B.aY,a,o,B.b1,200,25,b,B.ag,B.ag,null,j,m,A.u(l,t.hU),A.u(l,n))
p.pb(a,B.ag,B.aY,b,25,200,null,B.b1,B.ag,o,null)
s=3
return A.a(p.h0(),$async$hW)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
i0(a){return this.vb(a)},
vb(a){var s=0,r=A.h(t.H),q
var $async$i0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.eH(),$async$i0)
case 2:a.h7()
q=a.CW
if((q.c&4)===0)q.q()
return A.e(null,r)}})
return A.f($async$i0,r)}}
A.B4.prototype={
cd(){var s=0,r=A.h(t.q),q,p=this,o
var $async$cd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cd(),$async$cd)
case 3:q=o.FG(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cd,r)},
iH(a){return this.xd(a)},
xd(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cd(),$async$iH)
case 3:q=o.FG(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iH,r)}}
A.wq.prototype={}
A.w8.prototype={
hQ(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hQ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dz(),$async$hQ)
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
l=A.ld("token provider failed: "+A.q(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hQ,r)},
fp(a,b,c,d,e,f){return this.wk(a,b,c,d,e,f)},
wk(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fp=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Or(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.fi(a)+" && updated>="+A.fi(n)+")"
o=c==null?m:m+" && (updated>"+A.fi(n)+" || (updated="+A.fi(n)+" && id>"+A.fi(c)+"))"}l=t.N
l=A.u(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.fN(B.c.br(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.C(b,","))
k=p.b.ak("/api/collections/data/records").kI(l)
s=3
return A.a(p.mn("GET",k),$async$fp)
case 3:j=a0
p.dP(j,A.l([200],t.t),k)
i=p.d8(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aU("List response has no items array."))
h=J.c3(i,new A.wp(p),t.Q)
h=A.N(h,h.$ti.i("a1.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
c1(a){return this.ox(a)},
ox(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$c1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jJ(a)
s=3
return A.a(p.mn("GET",o),$async$c1)
case 3:n=c
if(n.a===404)throw A.b(A.JW("not found"))
p.dP(n,A.l([200],t.t),o)
q=A.h_(p.d8(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c1,r)},
hY(a,b,c){return this.uz(a,b,c)},
uz(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.ak("/api/collections/data/records")
s=3
return A.a(p.f_("POST",o,B.h.a8(A.m(["id",b,"store",c,"data",p.jf(a)],t.N,t.X),null)),$async$hY)
case 3:n=e
if(n.a===400&&p.qY(n))throw A.b(new A.fB(p.eM(n)))
p.dP(n,A.l([200,201],t.t),o)
q=A.h_(p.d8(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hY,r)},
jf(a){var s,r,q
try{r=B.h.aG(a,null)
return r}catch(q){s=A.D(q)
r=A.JY("Corrupt local payload: "+A.q(s))
throw A.b(r)}},
qY(a){var s,r,q,p,o,n
try{s=this.d8(a)
r=J.V(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.y(p,"validation_not_unique")||J.y(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fO(a,b,c){return this.xB(a,b,c)},
xB(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jJ(c)
s=3
return A.a(p.f_("PATCH",o,B.h.a8(A.m(["data",p.jf(b)],t.N,t.X),null)),$async$fO)
case 3:n=e
p.dP(n,A.l([200],t.t),o)
q=A.h_(p.d8(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)},
iK(a,b,c,d,e){return this.xD(a,b,c,d,e)},
xD(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iK=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jJ(b)
m=t.N
l=A.u(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a8(d,null))
if(e==null)m=null
else{m=A.n(e).i("am<2>")
m=A.N(new A.am(e,m),m.i("o.E"))}s=3
return A.a(p.tk(new A.mn("PATCH",n,B.aA,l,m==null?B.cV:m)),$async$iK)
case 3:o=g
p.dP(o,A.l([200],t.t),n)
q=A.h_(p.d8(o),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iK,r)},
fb(a,b,c){return this.vf(a,b,c)},
vf(a,b,c){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$fb=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.u(i,i)
l=n.b.ak("/api/files/data/"+A.pq(2,b,B.o,!1)+"/"+A.pq(2,a,B.o,!1))
k=i.a===0?l:l.kI(i)
s=3
return A.a(n.rp(new A.ez("GET",k,B.aA,null)),$async$fb)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.aW(new A.wo()).v().fM(B.ci),$async$fb)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.lZ(A.Jt(m.a,m.b,""),k))
case 5:q=n.pJ(m.c)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fb,r)},
pJ(a){var s,r,q={},p=this.d
if(p.a<=0)return a
s=A.oB()
q.a=q.b=null
r=new A.wg(q,p,s)
s.b=A.nE(new A.wc(q),new A.wd(q,r,a,s),new A.we(q),new A.wf(q,r),!0,t.L)
return s.aD().gcs()},
fB(a){return this.wT(a)},
wT(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$fB=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.ak("/api/batch")
a6=A.l([],t.kf)
for(l=J.aA(a7),k=l.gt(a7),j=t.N,i=t.X,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",p.jf(g.d)],j,i)],j,h))}s=3
return A.a(p.f_("POST",a5,B.h.a8(A.m(["requests",a6],j,t.ew),null)),$async$fB)
case 3:o=b0
if(o.a===403)throw A.b(A.Jj(p.eM(o)))
if(o.a===400)throw A.b(new A.el(p.eM(o)))
p.dP(o,A.l([200],t.t),a5)
n=null
try{n=B.h.aG(o.c,null)}catch(a8){a6=A.D(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aU("Batch response is not valid JSON: "+m.gis()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aU("Batch response has no results array."))}else throw A.b(A.aU("Batch response is not a list or envelope."))
e=c}a6=J.K(e)
if(a6.gm(e)!==l.gm(a7))throw A.b(A.aU("Batch response has "+a6.gm(e)+" results for "+l.gm(a7)+" requests."))
b=A.l([],t.g2)
for(k=t.f,j=p.e,a=0;a<l.gm(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aU("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.cE(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.h_(a3,j):null
g=a2?null:p.ql(a0)
a4=a2&&k.b(a3)?B.h.a8(a3.h(0,"data"),null):null
b.push(new A.jv(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
iB(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f_("POST",p.b.ak("/api/batch"),B.h.a8(A.m(["requests",[]],t.N,t.kS),null)),$async$iB)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.ld(p.eM(o)))
if(n===408||n===429||n>=500)throw A.b(A.FH("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iB,r)},
jJ(a){return this.b.ak("/api/collections/data/records/"+A.pq(2,a,B.o,!1))},
f_(a,b,c){return this.cb(new A.wk(this,a,b,c),new A.wl(),t.w)},
mn(a,b){return this.f_(a,b,null)},
tk(a){return this.cb(new A.wm(this,a),new A.wn(),t.w)},
rp(a){return this.cb(new A.wi(this,a),new A.wj(),t.lI)},
cb(a,b,c){return this.tS(a,b,c,c)},
tS(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cb=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.h4(),$async$cb)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$cb)
case 8:l=f
s=J.y(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.j7(),$async$cb)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$cb)
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
throw A.b(A.FH(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cb,r)},
h4(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$h4=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dz(),$async$h4)
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
l=A.ld("token provider failed: "+A.q(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h4,r)},
ey(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$ey=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.iG(),$async$ey)
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
l=A.ld("token refresh failed: "+A.q(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ey,r)},
j7(){var s=0,r=A.h(t.q),q,p=this
var $async$j7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.ey()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j7,r)},
jQ(a,b,c,d){return this.ti(a,b,c,d)},
ti(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jQ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.u(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b8(new A.ez(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jQ,r)},
dP(a,b,c){if(B.b.E(b,a.a))return
throw A.b(this.lZ(a,c))},
lZ(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eM(a)
if(401===s)return new A.c4(q)
if(403===s)return new A.cM(q)
if(404===s)return new A.cQ(q)
if(408===s||429===s)return new A.dR(r,q)
if(400===s)return new A.eK(q)
if(s>=500)return new A.jH(q)
return new A.h1("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eM(a){var s,r,q,p,o
try{s=this.d8(a)
r=J.V(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.V(s,"data")
if(t.f.b(q)){p=q
p=p.gT(p)}else p=!1
if(p){p=B.h.a8(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.B(p,0,500)},
d8(a){var s,r,q,p=null
try{p=B.h.aG(a.c,null)}catch(r){q=A.D(r)
if(t.Y.b(q)){s=q
throw A.b(A.aU("Response is not valid JSON: "+s.gis()))}else throw r}if(t.f.b(p))return A.bo(p,t.N,t.X)
throw A.b(A.aU("Expected a JSON object, got "+J.c2(p).l(0)+"."))},
ql(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.q(r)+")"}}
A.wp.prototype={
$1(a){return A.h_(a,this.a.e)},
$S:117}
A.wo.prototype={
$1(a){},
$S:11}
A.wg.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.v()
r=this.b
s.b=A.bX(r,new A.wh(s,this.c,r))},
$S:0}
A.wh.prototype={
$0(){var s=this.b
s.aD().k_(new A.eT("download stalled: no chunk within "+this.c.l(0)))
s.aD().q()
s=this.a.a
if(s!=null)s.v()},
$S:0}
A.wd.prototype={
$0(){var s,r,q=this,p=q.b
p.$0()
s=q.d
r=q.a
r.a=q.c.bw(new A.w9(p,s),new A.wa(r,s),new A.wb(r,s))},
$S:0}
A.w9.prototype={
$1(a){this.a.$0()
J.aM(this.b.aD(),a)},
$S:11}
A.wb.prototype={
$2(a,b){var s=this.a.b
if(s!=null)s.v()
this.b.aD().bg(a,b)},
$S:6}
A.wa.prototype={
$0(){var s=this.a.b
if(s!=null)s.v()
this.b.aD().q()},
$S:0}
A.we.prototype={
$0(){var s=this.a.a
return s==null?null:s.b4()},
$S:0}
A.wf.prototype={
$0(){var s=this.a.a
if(s!=null)s.aY()
this.b.$0()},
$S:0}
A.wc.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.v()
s=s.a
return s==null?null:s.v()},
$S:120}
A.wk.prototype={
$1(a){var s=this
return s.a.jQ(s.b,s.c,s.d,a)},
$S:63}
A.wl.prototype={
$1(a){return a.a},
$S:59}
A.wm.prototype={
$1(a){var s=this.b,r=t.N
r=A.c9(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dE(new A.mn(s.a,s.b,r,s.d,s.e))},
$S:63}
A.wn.prototype={
$1(a){return a.a},
$S:59}
A.wi.prototype={
$1(a){var s=this.b,r=t.N
r=A.c9(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.eu(new A.ez(s.a,s.b,r,s.d))},
$S:136}
A.wj.prototype={
$1(a){return a.a},
$S:138}
A.jq.prototype={}
A.hQ.prototype={}
A.wr.prototype={
aB(){var s=0,r=A.h(t.H),q,p=this
var $async$aB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.y){s=1
break}p.y=!0
p.eZ()
case 1:return A.e(q,r)}})
return A.f($async$aB,r)},
aK(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.y=!1
n=q.Q
if(n!=null)n.v()
q.Q=null
n=q.z
n=n==null?null:n.v()
s=2
return A.a(n instanceof A.w?n:A.bB(n,t.H),$async$aK)
case 2:q.z=null
p=q.as
if(p!=null?(p.a.a&30)===0:o)p.aj()
return A.e(null,r)}})
return A.f($async$aK,r)},
eZ(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eZ=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.r,m=t.H
case 2:if(!o.y){s=3
break}q=5
s=8
return A.a(o.bN(),$async$eZ)
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
case 7:if(!o.y){s=3
break}s=9
return A.a(A.Jp(n.$1(k),m),$async$eZ)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eZ,r)},
m5(a){var s=this.a,r=t.N
return s.a.eu(new A.ez("GET",s.b.ak("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
mo(a,b){var s=this.a,r=t.N
return s.a.b8(new A.ez("POST",s.b.ak("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a8(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
bN(){return this.pY()},
pY(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$bN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.hQ(),$async$bN)
case 3:k=b
m.a=k
s=4
return A.a(p.m5(k),$async$bN)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.ey(),$async$bN)
case 7:k=b
m.a=k
s=8
return A.a(p.m5(k),$async$bN)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iM("realtime connect status "+l,null))
s=!p.y?9:10
break
case 9:s=11
return A.a(o.c.aW(new A.wu()).v(),$async$bN)
case 11:s=1
break
case 10:++p.ax
p.as=new A.aE(new A.w($.B,t.D),t.h)
l=$.pM()
n=A.l([],t.s)
m.b=m.c=!1
n=o.c.bw(new A.wv(m,p,new A.wy(p),new A.B5(new A.zV(l),n)),new A.ww(p),new A.wx(p))
p.z=n
s=!p.y?12:13
break
case 12:s=14
return A.a(n.v(),$async$bN)
case 14:p.z=null
s=1
break
case 13:s=15
return A.a(p.as.a,$async$bN)
case 15:l=p.Q
if(l!=null)l.v()
p.z=p.Q=null
if(m.b)throw A.b(A.iM("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
dU(a,b){return this.qJ(a,b)},
qJ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$dU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.mo(h,b),$async$dU)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.ey(),$async$dU)
case 10:s=9
return A.a(p.mo(g,d),$async$dU)
case 9:s=7
break
case 8:d=l
case 7:k=d.a
if(k!==204&&k!==200)throw A.b(A.iM("realtime subscribe status "+k,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
if(!t.f.b(n)){s=1
break}try{m=A.h_(n,p.a.e)
p.x.$1(new A.jq(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$dU,r)}}
A.wA.prototype={
$1(a){return A.Hs(a,this.a,this.b,A.Om())},
$S:143}
A.wu.prototype={
$1(a){},
$S:11}
A.wy.prototype={
$0(){var s,r=this.a,q=r.e
if(q.a<=0)return
s=r.Q
if(s!=null)s.v()
r.Q=A.bX(q,new A.wz(r))},
$S:0}
A.wz.prototype={
$0(){var s,r=this.a
if(!r.y)return
s=r.z
if(s!=null)s.v()
r=r.as
if((r.a.a&30)===0)r.aj()},
$S:0}
A.wv.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
l.c.$0()
s=l.d.vx(a)
for(r=s.length,q=l.b,p=l.a,o=t.P,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
q.at=q.at.W(new A.ws(p,q,m),o).k7(new A.wt(q))}},
$S:11}
A.ws.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.b){s=1
break}p=4
s=7
return A.a(n.b.dU(n.c,i.a),$async$$1)
case 7:p=2
s=6
break
case 4:p=3
h=o.pop()
i.b=!0
i=n.b
j=i.z
j=j==null?null:j.v()
s=8
return A.a(j instanceof A.w?j:A.bB(j,t.H),$async$$1)
case 8:i=i.as
if((i.a.a&30)===0)i.aj()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.c&&n.c.a!=null){i.c=!0
try{n.b.w.$0()}catch(g){m=A.D(g)
l=A.ad(g)
i=n.b
i.ay=m
i.ch=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:151}
A.wt.prototype={
$2(a,b){var s=this.a
if(s.ay==null)s.ay=a
if(s.ch==null)s.ch=b},
$S:6}
A.ww.prototype={
$0(){var s=this.a,r=s.Q
if(r!=null)r.v()
s=s.as
if((s.a.a&30)===0)s.aj()},
$S:0}
A.wx.prototype={
$1(a){var s=this.a,r=s.Q
if(r!=null)r.v()
s=s.as
if((s.a.a&30)===0)s.aj()},
$S:21}
A.B5.prototype={
vx(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.kL()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.qV(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.ds(p,o,q)))
p=o+1
m=this.qa(B.a.xw(new A.dq(!0).d6(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.b9(s,p))
return r},
qV(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qC(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.ao(k)
return l}s=m.b
r=B.b.C(k,"\n")
m.b=null
B.b.ao(k)
try{q=B.h.aG(r,l)
if(t.f.b(q)){p=A.bo(q,t.N,t.X)
o=J.V(p,"clientId")
if(J.y(s,"PB_CONNECT")&&typeof o=="string")return new A.hQ(o,l)
return new A.hQ(l,p)}}catch(n){}return l},
qa(a){var s,r=this,q=null
if(a.length===0)return r.qC()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.ao(r.c)
return new A.hQ(B.a.c0(B.a.ab(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.c0(B.a.ab(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.c0(B.a.ab(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.ez.prototype={}
A.dB.prototype={
oQ(){return this.d.$0()},
gm(a){return this.c}}
A.mn.prototype={}
A.cN.prototype={}
A.dC.prototype={
l(a){return"HttpTransportException: "+this.a},
$iH:1}
A.dU.prototype={}
A.w6.prototype={
b8(a){return this.oF(a)},
oF(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b8=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eu(a),$async$b8)
case 7:m=c
j=m.c
s=8
return A.a(B.aP.l8(j).en(0).fM(B.T),$async$b8)
case 8:l=c
j=m.a
i=m.b
q=new A.cN(j,i,l)
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
j=A.iM("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b8,r)},
dE(a){return this.oG(a)},
oG(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dE=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.JS(a6.a,a6.b)
h.r.D(0,a6.c)
h.x.D(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.oQ(),$async$dE)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.HO(a0)
a3=new A.fP("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cW(A.u(d,d),e))
b.push(new A.mN(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.p)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b8(m).fM(B.T),$async$dE)
case 11:k=a8
g=k.w
s=12
return A.a(B.aP.l8(g).en(0).fM(B.T),$async$dE)
case 12:j=a8
g=k.b
f=k.e
q=new A.cN(g,f,j)
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
g=A.iM("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dE,r)},
eu(a){return this.wG(a)},
wG(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eu=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.Kf(a,a0)
a1.r.D(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gkk().kj(j)
i.pI()
i.y=A.Ov(j)
h=i.gcw()
if(h==null){j=t.N
i.scw(A.Dp("text","plain",A.m(["charset",i.gkk().gaS()],j,j)))}else{j=i.gcw()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.bU(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gkk().gaS()],j,j)
e=h.a
d=h.b
c=A.bo(h.c,j,j)
c.D(0,f)
i.scw(A.Dp(e,d,c))}}}p=4
s=7
return A.a(n.a.b8(a1).fM(B.T),$async$eu)
case 7:m=a5
j=t.N
l=A.u(j,j)
m.e.a4(0,new A.w7(l))
j=m.b
i=m.w
q=new A.dU(j,l,i)
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
a=A.iM("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eu,r)}}
A.w7.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:33}
A.r3.prototype={
$1(a){return a.b===this.a},
$S:157}
A.r4.prototype={
$1(a){return a.b===this.a},
$S:158}
A.lz.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.N(s,A.n(s).c)
B.b.aJ(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.N(s,A.n(s).c)
B.b.aJ(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.js.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iH:1}
A.c7.prototype={}
A.lv.prototype={
gY(){return"committedChange"},
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
s=A.N(s,A.n(s).c)
B.b.aJ(s)
q.j(0,"changedFields",s)
return q}}
A.lD.prototype={
gY(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jU.prototype={
gY(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.me.prototype={
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
A.m3.prototype={
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
A.m4.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.m9.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.m5.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.m2.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.mi.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.mc.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.m7.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
s=r.d
if(s!=null)q.j(0,"refId",s)
return q}}
A.m6.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.mf.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.ma.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.lX.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.nC.prototype={
p(){return B.k}}
A.mh.prototype={
gY(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.iE.prototype={
gY(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fI.prototype={
gY(){return"fileRefs"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.md.prototype={
gY(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fH.prototype={
gY(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fF.prototype={
gY(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.hi.prototype={
gY(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fG.prototype={
gY(){return"fileChunk"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",r.b)
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.vL.prototype={}
A.j9.prototype={}
A.jc.prototype={}
A.ja.prototype={}
A.jd.prototype={}
A.j6.prototype={}
A.j7.prototype={}
A.j5.prototype={}
A.jb.prototype={}
A.j8.prototype={}
A.BQ.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.I)},
$S:12}
A.xh.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.u(k,j),h=t.d,g=A.l([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)g.push(s[q].p())
i.j(0,"where",g)
g=A.l([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=A.l([],h)
for(n=B.b.gt(p);n.k();)o.push(n.gn().p())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.p())
h=A.l([],h)
for(g=l.d,s=g.length,q=0;q<g.length;g.length===s||(0,A.p)(g),++q){m=g[q]
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
A.xi.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.I)},
$S:12}
A.xj.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.O("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Fv(r.gn()))
return s},
$S:165}
A.eM.prototype={
p(){var s,r,q,p,o=this,n=A.u(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.push(A.fe(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.fe(o.c))
return n}}
A.xd.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.I)},
$S:12}
A.xe.prototype={
$1(a){return a.b===this.a},
$S:166}
A.b1.prototype={
a6(){return"QueryConditionOp."+this.b}}
A.cR.prototype={}
A.wF.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.I)},
$S:12}
A.wE.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.O("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.E(a);r.k();)s.push(A.Dr(r.gn()))
return s},
$S:171}
A.iX.prototype={
p(){var s=A.u(t.N,t.X)
s.j(0,"kind","leaf")
s.D(0,this.a.p())
return s}}
A.jk.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.id.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.ie.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.nb.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.xg.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.I)},
$S:12}
A.cG.prototype={
a6(){return"AggregateFn."+this.b}}
A.xz.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.xA.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.I)},
$S:12}
A.ng.prototype={}
A.mY.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"stores",this.a)
r.j(0,"manifestFingerprints",this.b)
s=this.c
if(s!=null)r.j(0,"storePolicies",s)
return r}}
A.lq.prototype={
p(){return B.k}}
A.ml.prototype={
p(){return B.k}}
A.lt.prototype={
p(){return B.k}}
A.mj.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nk.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mO.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.M8(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nc.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lG.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lF.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lT.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.mo.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l5.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.m_.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nq.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dW.prototype={
a6(){return"TransactionDurability."+this.b}}
A.nZ.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.o_.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.o1.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.o3.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.o2.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.o0.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.oi.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.oj.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.oh.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.l7.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.og.prototype={
p(){return B.k}}
A.oe.prototype={
p(){return B.k}}
A.n8.prototype={
p(){return B.k}}
A.lw.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.nl.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lC.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.lA.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.ni.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.l2.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.l3.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.lE.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ah.prototype={}
A.fY.prototype={
gY(){return"ok"},
p(){return B.k}}
A.im.prototype={
gY(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.mm.prototype={
gY(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.h8.prototype={
gY(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.h9.prototype={
gY(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fT.prototype={
gY(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.h5.prototype={
gY(){return"queryRows"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fy.prototype={
gY(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fA.prototype={
gY(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fL.prototype={
gY(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fn.prototype={
gY(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fE.prototype={
gY(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.hb.prototype={
gY(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.np.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fw.prototype={
gY(){return"conflicts"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fv.prototype={
gY(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.ho.prototype={
gY(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hv.prototype={
gY(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.h2.prototype={
gY(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fu.prototype={
gY(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.eR.prototype={
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
A.b8.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.nP.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.nU.prototype={
p(){return B.k}}
A.nK.prototype={
p(){return B.k}}
A.nL.prototype={
p(){return B.k}}
A.nN.prototype={
p(){return B.k}}
A.nV.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.nO.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.nS.prototype={
p(){return B.k}}
A.nQ.prototype={
gY(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.nM.prototype={
gY(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.nT.prototype={
gY(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.nR.prototype={
gY(){return"syncStatusEvent"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.le.prototype={
gY(){return"authRequired"},
p(){return B.k}}
A.eU.prototype={
l(a){return"WireException: "+this.a},
$iH:1}
A.CU.prototype={
$2(a,b){return B.a.a2(a.a,b.a)},
$S:180}
A.n3.prototype={
a6(){return"PlatformProfile."+this.b}}
A.nB.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.xK.prototype={
$1(a){return J.bP(a.gaU())},
$S:41}
A.xL.prototype={
$1(a){return B.a.E(a,"ENABLE_FTS5")},
$S:13}
A.ip.prototype={
a6(){return"ChangeOrigin."+this.b}}
A.dy.prototype={
a6(){return"ChangeAction."+this.b}}
A.dQ.prototype={
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
s=A.N(s,A.n(s).c)
B.b.aJ(s)
q.j(0,"changedFields",s)
return q},
P(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.dQ))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.p.V(b.e,s.e)&&B.p.V(b.f,s.f)&&B.p.V(b.r,s.r)},
gJ(a){var s=this
return A.cc(s.a,s.b,s.c,s.d,B.p.ad(s.e),B.p.ad(s.f),B.p.ad(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a3.prototype={}
A.ql.prototype={
kh(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
vk(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.qm.prototype={}
A.qn.prototype={}
A.rW.prototype={}
A.pT.prototype={
vl(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cS(256)
q=this.b.vm(new Uint8Array(A.bc(a)),b,m,this.c)
s=q.a
p=s.length
o=29+p
n=new Uint8Array(o)
n[0]=1
B.f.az(n,1,13,q.c)
p=13+p
B.f.az(n,13,p,s)
B.f.az(n,p,o,q.b.a)
return n},
uF(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.R("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.A("Unsupported ciphertext version 0x"+B.a.iy(B.c.kN(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.bc(B.f.U(a,1,13)))
n-=16
r=new Uint8Array(A.bc(B.f.b9(a,n)))
q=new Uint8Array(A.bc(B.f.U(a,13,n)))
try{n=this.b.uG(new A.jE(q,new A.j_(r),s),b,this.c)
return n}catch(o){if(A.D(o) instanceof A.jF)throw A.b(A.A("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d7.prototype={
a6(){return"KindViolation."+this.b}}
A.Cb.prototype={
$2(a,b){return B.a.a2(a.a,b.a)},
$S:188}
A.f7.prototype={$iH:1}
A.AK.prototype={
cd(){var s=0,r=A.h(t.N),q,p=this,o
var $async$cd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cd,r)}}
A.pl.prototype={}
A.hO.prototype={}
A.u2.prototype={
pa(a,b){var s=this,r=s.a.a.a$.b
r=new A.b4(r,A.n(r).i("b4<1>")).aW(new A.uw(s))
s.c!==$&&A.eh()
s.c=r},
vJ(a){var s,r,q=this
A:{if(a instanceof A.mY){s=q.hp(a.a,a.b)
break A}if(a instanceof A.lq){s=A.bd(q.h5(),t.V)
break A}if(a instanceof A.ml){s=A.bd(new A.mm(!0,q.a.d.a),t.V)
break A}if(a instanceof A.lt){s=q.q().W(new A.ux(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mj){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bD(r,new A.uy(s,q),new A.uz())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.nk){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bD(r,new A.uK(s,q),new A.uV())
break A}if(a instanceof A.mO){s=q.r5(a.a,a.b,a.c)
break A}if(a instanceof A.nc){s=q.rq(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lG){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bD(r,new A.uW(s,q),A.Hk())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lF){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bD(r,new A.uX(s,q),A.Hk())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lT){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bD(r,new A.uY(s,q),A.Nx())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mo){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bD(r,new A.uZ(s,q),A.Nz())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.l5){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bD(r,new A.v_(s,q),A.Nw())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.m_){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bD(r,new A.v0(s,q),A.Ny())
break A}if(a instanceof A.nq){s=q.te(a.a,a.b,a.c)
break A}if(a instanceof A.nZ){s=q.pv(a.a,a.b)
break A}if(a instanceof A.o_){s=q.f0(a.a,!0)
break A}if(a instanceof A.o1){s=q.f0(a.a,!1)
break A}if(a instanceof A.o3){s=q.hy(a.a,a.b)
break A}if(a instanceof A.o2){s=q.hx(a.a,a.b)
break A}if(a instanceof A.o0){s=q.hv(a.a,a.b)
break A}if(a instanceof A.oi){s=q.hG(a.a,a.b)
break A}if(a instanceof A.oj){s=q.tP(a.a,a.b)
break A}if(a instanceof A.oh){s=q.jW(a.a)
break A}if(a instanceof A.l7){s=q.a.a.e
s===$&&A.t()
s=s.ea(a.a).W(new A.uA(),t.V)
break A}if(a instanceof A.og){s=q.a.a.e
s===$&&A.t()
s=s.fP().W(new A.uB(),t.V)
break A}if(a instanceof A.oe){s=q.a.a.e
s===$&&A.t()
s=s.iM().W(new A.uC(),t.V)
break A}if(a instanceof A.n8){s=q.a.a.e
s===$&&A.t()
s=s.fA().W(new A.uD(),t.V)
break A}if(a instanceof A.lw){s=q.a.a.e
s===$&&A.t()
s=s.ee(a.a,A.cK(0,a.b,0)).W(new A.uE(),t.V)
break A}if(a instanceof A.nl){s=q.a.a.e
s===$&&A.t()
s=s.cX(A.cK(0,a.a,0)).W(new A.uF(),t.V)
break A}if(a instanceof A.lC){s=q.a.a.fr
s===$&&A.t()
s=s.fo(a.a).W(new A.uG(q),t.V)
break A}if(a instanceof A.lA){s=q.a.a.fr
s===$&&A.t()
s=s.dD(a.a,a.b).W(new A.uH(q),t.V)
break A}if(a instanceof A.ni){s=q.a.a.fr
s===$&&A.t()
s=s.ez(a.b,a.c,a.a).W(new A.uI(),t.V)
break A}if(a instanceof A.l2){s=q.a.a.fr
s===$&&A.t()
s=s.f2(a.a,a.b).W(new A.uJ(),t.V)
break A}if(a instanceof A.l3){s=q.a.a.fr
s===$&&A.t()
s=s.e8(a.a,a.b).W(new A.uL(),t.V)
break A}if(a instanceof A.lE){s=q.tQ(a.a)
break A}if(a instanceof A.m3){s=q.jl(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.m4){s=q.jm(a.a,a.b)
break A}if(a instanceof A.m9){s=q.hh(a.a)
break A}if(a instanceof A.m2){s=q.jk(a.a)
break A}if(a instanceof A.mi){s=q.a.a.fx
s===$&&A.t()
s=s.cR(a.c,a.b,a.a).W(new A.uM(q),t.V)
break A}if(a instanceof A.mc){s=q.hi(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.m6){s=q.jn(a.a,a.b)
break A}if(a instanceof A.m5){s=q.hf(a.a)
break A}if(a instanceof A.mf){s=q.a.a.fx
s===$&&A.t()
s=s.fF(0,a.c,a.d,a.b,a.e,a.a).W(new A.uN(),t.V)
break A}if(a instanceof A.m7){s=q.hg(a.a,a.b,a.c,a.d)
break A}if(a instanceof A.ma){s=q.a.a.fx
s===$&&A.t()
s=s.bj(A.cK(0,a.a,0),A.cK(0,a.b,0)).W(new A.uO(),t.V)
break A}if(a instanceof A.lX){s=q.a.a.fx
s===$&&A.t()
s=s.cK(a.a).W(new A.uP(),t.V)
break A}if(a instanceof A.nC){s=q.a.a.fx
s===$&&A.t()
s=s.gil().W(new A.uQ(),t.V)
break A}if(a instanceof A.nP){s=q.e6(a.a,a.b,a.c)
break A}if(a instanceof A.nU){s=q.cG().W(new A.uR(),t.V)
break A}if(a instanceof A.nK){s=q.hA()
break A}if(a instanceof A.nL){s=q.e5(new A.uS(q))
break A}if(a instanceof A.nN){s=q.e5(new A.uT(q))
break A}if(a instanceof A.nV){s=q.hB(a.a)
break A}s={}
s.a=null
if(a instanceof A.nO){s.a=a.a
s=q.e5(new A.uU(s,q))
break A}if(a instanceof A.nS){s=q.ax
s=A.bd(new A.nT(s==null?B.dV:s),t.V)
break A}throw A.b(A.eO(u.P))}return s},
hp(a,b){return this.ro(a,b)},
ro(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hp=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.fy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.qr(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:h=n.f
h===$&&A.t()
s=9
return A.a(h.aT(j),$async$hp)
case 9:s=7
break
case 8:g=m.h(0,i)
if(g==null)A.v(A.A('No store "'+i+'" registered in this LocalPocket.'))
f=g.c
e=A.DA(j)
d=new A.a4("")
A.ck(d,f.p())
h=d.a
h=B.e.A(h.charCodeAt(0)==0?h:h)
c=new A.c6()
b=A.d_(c)
b.u(0,h)
b.q()
b=A.at(c.a.a)
d=new A.a4("")
A.ck(d,e.p())
h=d.a
h=B.e.A(h.charCodeAt(0)==0?h:h)
c=new A.c6()
a=A.d_(c)
a.u(0,h)
a.q()
if(b!==A.at(c.a.a))throw A.b(A.ay('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){g=m.h(0,i)
if(g==null)A.v(A.A('No store "'+i+'" registered in this LocalPocket.'))
d=new A.a4("")
A.ck(d,g.c.p())
h=d.a
h=B.e.A(h.charCodeAt(0)==0?h:h)
c=new A.c6()
b=A.d_(c)
b.u(0,h)
b.q()
b=a0!==A.at(c.a.a)
h=b}else h=!1
if(h)throw A.b(A.ay('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.p)(a1),++k
s=3
break
case 5:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
h5(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$h5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bP(B.b.gH(m.b.oD("PRAGMA journal_mode")).gaU())
m=m.a.fx
m===$&&A.t()
s=3
return A.a(m.gil(),$async$h5)
case 3:o=b
m=l.e===B.aD
n=m?"opfs":"file"
q=new A.im(l.a,l.b,l.c,l.d,m,n,o,J.Z(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)},
dM(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.av(a)
if(b!=null){s=this.de(b)
r=A.F8(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.v(A.A('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.de(b)
return new A.ft(n,m,new A.iC(q),p.r)}return new A.ft(n,m,o.gbu(),null)},
pL(a){return this.dM(a,null)},
r5(a,b,c){return this.bD(c,new A.uh(this,a,c,b),new A.ui())},
bz(a,b){var s
A.at(B.m.A(B.e.A(A.ai(this.a.a.av(a).c.p()))).a)
if(a.length===0)A.v(A.aB(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.v(A.aB(s,"spec.limit","must not be negative"))
return new A.xf(a,b)},
be(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.dM(a.a,a0),c=t.fC,b=new A.na(d.a,d.b.a,d.c.b,A.l([],c),A.l([],c),A.l([],t.k),A.l([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s)b=this.pr(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.p)(d),++s){o=d[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bi)throw A.b(A.U('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.wI(n)}j=e.c
if(j!=null){d=A.CF(j)
b.jX(d)
A.E1(d)
i=A.BL(d,!0)
h=b.h8()
h.d.push(new A.b3(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s,b=h){g=d[s]
q=g.a
b.d4(q)
h=b.h8()
h.r.push(new A.cp(q,g.b))}d=e.r
if(d!=null)b=b.lw(A.bI(d,!0,r))
if(e.w)b=b.q1(!0)
if(e.x)b=b.q2(!0)
if(e.f)b=b.q_(!0)
else{d=e.e
if(d!=null){if(d<0)A.v(A.U("Limit must be non-negative, got "+A.q(d)+".",f))
b=b.q3(d)}}return b},
pr(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.nI(0,b.a,!0)
return a.xK(0,b.a,s)
case 1:return a.xR(0,b.a,b.c)
case 2:return a.xL(0,b.a,b.c)
case 3:return a.xM(0,b.a,b.c)
case 4:return a.xP(0,b.a,b.c)
case 5:return a.xQ(0,b.a,b.c)
case 6:return a.xN(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.j
if(r.length!==2)throw A.b(A.R("between requires exactly two values.",null))
return a.xH(0,b.a,new A.a6(r[0],r[1]))
case 8:return a.xS(0,b.a,A.a7(b.c))
case 9:return a.xJ(0,b.a,A.a7(b.c))
case 10:return a.xI(0,b.a,A.a7(b.c))
case 11:return a.nI(0,b.a,!0)
case 12:return a.xO(0,b.a,!0)}},
rq(a,b,c){return this.bD(c,new A.uj(this,this.bz(a,b),c),new A.uk())},
te(a,b,c){return this.bD(c,new A.un(this,a,c,b),new A.uo())},
pv(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.A("A transaction session is already active on this database."))
s="tx"+ ++l.ay
r=$.B
q=t.D
p=t.h
o=new A.w(r,q)
n=new A.pl(s,new A.aE(new A.w(r,q),p),new A.aE(o,p),A.l([],t.mc),new A.aG(Date.now(),0,!1))
k.j(0,s,n)
l.qj()
m=l.a.a
k=new A.u5(n)
if(a){if(A.o4(m)!=null)A.v(A.A(u.L))
r=m.b
r===$&&A.t()
k=r.x5(k,t.H)}else{r=b===B.bs?B.b_:B.q
r=m.b1(k,r,t.H)
k=r}n.w!==$&&A.eh()
n.w=k
k.k7(new A.u3(l,n,s))
return o.W(new A.u4(s),t.V)},
f0(a,b){return this.tn(a,b)},
tn(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$f0=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.de(a)
for(l=h.e,k=A.a0(l).i("bA<1>"),l=new A.bA(l,k),l=new A.ar(l,l.gm(0),k.i("ar<a1.E>")),k=k.i("a1.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.v(A.A("Future already completed"))
j.aF(null)}h.f=!b
h.c.aj()
p=4
l=h.w
l===$&&A.t()
s=7
return A.a(l,$async$f0)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.D(g) instanceof A.f7){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.G(0,a)
s=n.pop()
break
case 6:q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f0,r)},
hy(a,b){return this.tb(a,b)},
tb(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.de(a)
n=$.B
m=t.D
l=t.h
k=new A.w(n,m)
j=new A.hO(b,new A.aE(new A.w(n,m),l),new A.aE(k,l))
l=o.r.a0(new A.um(j),t.H)
j.f!==$&&A.eh()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hy)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
hx(a,b){return this.t9(a,b)},
t9(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hx=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.de(a).e
f=B.b.n9(g,new A.ul(b))
if(f<0)throw A.b(A.A('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a0(g).i("bA<1>")
l=A.N(new A.bA(g,l),l.i("a1.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bV(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.v(A.A("Future already completed"))
i.aF(null)
p=7
i=m.f
i===$&&A.t()
s=10
return A.a(i,$async$hx)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.D(e) instanceof A.f7))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:B.b.iJ(g,f,g.length)
q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hx,r)},
hv(a,b){return this.t1(a,b)},
t1(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hv=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.de(a).e
j=A.F8(k)
if(j==null||j.a!==b)throw A.b(A.A('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.aj()
p=4
m=j.f
m===$&&A.t()
s=7
return A.a(m,$async$hv)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.D(i) instanceof A.f7)throw i
else throw i
s=6
break
case 3:s=2
break
case 6:k.pop()
q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hv,r)},
hG(a,b){return this.tR(a,b)},
tR(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.av(a)
s=3
return A.a(p.pL(a).bI(b),$async$hG)
case 3:o="w"+ ++p.ay
n=A.oB()
n.si5(new A.mX(l,b,m,B.b0).iZ().ng(new A.us(p,o),new A.ut(p,n,o)))
p.f.j(0,o,n.aD())
q=A.bd(new A.hv(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
tP(a,b){var s=this,r="w"+ ++s.ay,q=s.be(s.bz(a,b),null),p=A.oB()
p.si5(new A.nd(q,q.ge2(),B.b0).iZ().ng(new A.uu(s,r),new A.uv(s,p,r)))
s.f.j(0,r,p.aD())
return A.bd(new A.hv(r),t.V)},
jW(a){return this.tG(a)},
tG(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.G(0,a)
if(o!=null)o.v()
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jW,r)},
qk(){if(this.w!=null)return
this.w=A.yf(A.cK(9e8,0,0),new A.uc(this))},
jl(a,b,c,d,e,f,g){return this.qt(a,b,c,d,e,f,g)},
qt(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$jl=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.qk()
o=p.r
n="u"+ ++p.ay
o.n4()
m=o.r
if(m.a>=16)A.v(A.U("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.v(A.U("Invalid file size: "+c,null))
if(o.gnC()+c>536870912)A.v(A.U("Aggregate upload quota exceeded: "+o.gnC()+" + "+c+" > 536870912",null))
o=o.f.$0().j6(18e8)
m.j(0,n,new A.cL(n,a,b,d,e,c,f,g,A.l([],t.bs),o))
q=new A.mh("u"+p.ay,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jl,r)},
jm(a,b){return this.qu(a,b)},
qu(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$jm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.v(A.U("Unknown upload session: "+a,null))
l=l.f
if(!j.z.kw(l.$0())){k.G(0,a)
A.v(A.U("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.G(0,a)
A.v(A.U("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.G(0,a)
A.v(A.U("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().j6(18e8)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jm,r)},
hh(a){return this.qy(a)},
qy(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.G(0,a)
if(g==null)A.v(A.U("Unknown upload session: "+a,null))
if(!g.z.kw(h.f.$0()))A.v(A.U("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.v(A.U("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.fx
h===$&&A.t()
n=g.b
m=g.c
l=new A.ud(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.dh(g.w,l,i,o,k,j,m,n),$async$hh)
case 3:q=new f.iE(p.jo(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
jk(a){return this.qs(a)},
qs(a){var s=0,r=A.h(t.V),q,p=this
var $async$jk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.G(0,a)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jk,r)},
hi(a,b,c,d,e){return this.qA(a,b,c,d,e)},
qA(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$hi=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.fx
k===$&&A.t()
s=3
return A.a(k.fv(c,d,b,e,a),$async$hi)
case 3:o=g
n="f"+ ++p.ay
m=new A.m8(new A.aG(Date.now(),0,!1))
m.c=new A.aG(Date.now(),0,!1)
l=A.oB()
l.si5(o.bw(new A.ue(p,m,n,l),new A.uf(p,n),new A.ug(p,n)))
k=l.aD()
m.d!==$&&A.eh()
m.d=k
p.x.j(0,n,m)
p.qi()
q=new A.md(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
hg(a,b,c,d){return this.qx(a,b,c,d)},
qx(a,b,c,d){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hg=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.e3().x
o===$&&A.t()
n=A
s=3
return A.a(o.dk(c,b,d,a),$async$hg)
case 3:q=new n.iE(p.jo(f))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
jn(a,b){return this.qw(a,b)},
qw(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$jn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.A('Unknown file stream "'+a+'".'))
if((n.b-=b)<0)n.b=0
n.c=new A.aG(Date.now(),0,!1)
if(n.b<1048576){o=n.d
o===$&&A.t()
o.aY()}q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jn,r)},
qi(){if(this.y!=null)return
this.y=A.yf(A.cK(45e7,0,0),new A.u8(this))},
hf(a){return this.qv(a)},
qv(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.G(0,a)
s=n!=null?3:4
break
case 3:o=n.d
o===$&&A.t()
s=5
return A.a(o.v(),$async$hf)
case 5:case 4:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
jo(a){return new A.me(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
e6(a,b,c){return this.ty(a,b,c)},
ty(a,b,a0){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e6=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.U("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cG(),$async$e6)
case 3:if(b==null||b.length===0)throw A.b(A.U("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.AK(a0)
m=A.ob(a)
l=o.fy
k=A.n(l).i("S<1>")
l=A.N(new A.S(l,k),k.i("o.E"))
s=4
return A.a(o.ax.hW(m,b,l,n),$async$e6)
case 4:j=a2
m=A.dT(null,null,t.n6)
l=A.dT(null,null,t.ic)
k=t.H
i=A.bd(null,k)
h=new A.pW(A.bd(null,k))
g=A.bd(B.O,t.fD)
f=A.l([],t.s)
k=A.bd(null,k)
e=new A.y_(A.Os(),o.db)
d=new A.nJ(o,j,e,new A.up(p),B.N,m,l,i,h,A.aO(t.N),g,f,k)
c=j.r
m=d.e=new A.yd(o,B.a.B(A.at(B.m.A(B.e.A(j.b.l(0)+"|"+c)).a),0,12))
k=new A.rZ(o,j,e,o.CW)
d.x=k
k=new A.wR(o,j,e,m,k,h)
d.f=k
d.r=new A.xY(o,j,e,m,k)
d.w=new A.x_(o,j,e,d.gr9(),j.ax)
p.as=n
p.Q=d
p.at=new A.b4(l,A.n(l).i("b4<1>")).aW(new A.uq(p))
s=5
return A.a(d.aB(),$async$e6)
case 5:q=new A.nQ(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e6,r)},
e3(){var s=this.Q
return s==null?A.v(A.U("Sync is not started.",null)):s},
hA(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.e3()
o.c8("cycle")
n=A
s=3
return A.a(o.eY(),$async$hA)
case 3:q=new n.nM(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
e5(a){var s=0,r=A.h(t.V),q
var $async$e5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$e5)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
hB(a){return this.tz(a)},
tz(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.as
n=p.e3()
if(o==null)throw A.b(A.U("Sync is not started.",null))
o.a=a
s=3
return A.a(n.ep(),$async$hB)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hB,r)},
cG(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.Q
q.Q=null
p=q.at
p=p==null?null:p.v()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bB(p,o),$async$cG)
case 2:q.at=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aK(),$async$cG)
case 5:p=q.a.a.ax.i0(n)
s=6
return A.a(p,$async$cG)
case 6:case 4:q.ax=q.as=null
return A.e(null,r)}})
return A.f($async$cG,r)},
jd(a){return new A.lz(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
tQ(a){var s=this,r="w"+ ++s.ay,q=s.a.a.fr
q===$&&A.t()
s.f.j(0,r,q.xG(a).aW(new A.ur(s,r)))
return A.bd(new A.hv(r),t.V)},
de(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.A('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.A('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aG(Date.now(),0,!1)
return s},
qj(){var s,r,q=this
if(q.e!=null)return
s=q.a.ay
r=s.a
if(r<=0)return
q.e=A.yf(A.cK(B.c.M(r,4),0,0),new A.ub(q,s))},
hH(a,b,c){return this.tU(a,b,c)},
bD(a,b,c){return this.hH(a,b,c,t.z)},
tU(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.de(a)
o=c
s=3
return A.a(b.$0(),$async$hH)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cG(),$async$q)
case 2:p=q.f,o=new A.aV(p,p.r,p.e,A.n(p).i("aV<2>"))
case 3:if(!o.k()){s=4
break}s=5
return A.a(o.d.v(),$async$q)
case 5:s=3
break
case 4:p.ao(0)
p=q.w
if(p!=null)p.v()
q.w=null
p=q.e
if(p!=null)p.v()
q.e=null
p=q.y
if(p!=null)p.v()
q.y=null
q.r.r.ao(0)
for(p=q.x,o=new A.aV(p,p.r,p.e,A.n(p).i("aV<2>"));o.k();){n=o.d.d
n===$&&A.t()
n.v()}p.ao(0)
p=q.c
p===$&&A.t()
p.v()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.uw.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.c9(r,t.N,t.X)
s=a.f
s=s==null?null:A.c9(s,t.N,t.X)
this.a.b.u(0,new A.lv(a.a,a.b,a.c,a.d,r,s,A.ca(a.r,t.N)))},
$S:189}
A.ux.prototype={
$1(a){return B.l},
$S:8}
A.uy.prototype={
$0(){var s=this.a
return this.b.dM(s.c,s.a).bI(s.b)},
$S:195}
A.uz.prototype={
$1(a){return new A.h8(a)},
$S:196}
A.uK.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dM(o.c,o.a).bI(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.p)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:201}
A.uV.prototype={
$1(a){return new A.h9(a)},
$S:202}
A.uW.prototype={
$0(){var s=this.b,r=this.a
return s.be(s.bz(r.c,r.b),r.a).hT()},
$S:53}
A.uX.prototype={
$0(){var s=this.b,r=this.a
return s.be(s.bz(r.d,r.b),r.a).hV(r.c)},
$S:53}
A.uY.prototype={
$0(){var s=this.b,r=this.a
return s.be(s.bz(r.d,r.b),r.a).i1(r.c)},
$S:205}
A.uZ.prototype={
$0(){var s=this.b,r=this.a
return s.be(s.bz(r.c,r.b),r.a).ik()},
$S:52}
A.v_.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.be(s.bz(q.e,q.b),q.a).d3("SUM",q.c)
break
case 1:s=r.b
q=s.be(s.bz(q.e,q.b),q.a).d3("AVG",q.c)
break
case 2:s=r.b
q=s.be(s.bz(q.e,q.b),q.a).d3("MIN",q.c)
break
case 3:s=r.b
q=s.be(s.bz(q.e,q.b),q.a).d3("MAX",q.c)
break
default:q=null}return q},
$S:221}
A.v0.prototype={
$0(){var s=this.b,r=this.a
return s.be(s.bz(r.c,r.b),r.a).i2()},
$S:225}
A.uA.prototype={
$1(a){return B.l},
$S:8}
A.uB.prototype={
$1(a){return B.l},
$S:8}
A.uC.prototype={
$1(a){return B.l},
$S:8}
A.uD.prototype={
$1(a){return new A.h2(a)},
$S:229}
A.uE.prototype={
$1(a){return new A.fu(a)},
$S:244}
A.uF.prototype={
$1(a){return B.l},
$S:8}
A.uG.prototype={
$1(a){var s,r,q=A.l([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jd(s.gn()))
return new A.fw(q)},
$S:77}
A.uH.prototype={
$1(a){return new A.fv(a==null?null:this.a.jd(a))},
$S:78}
A.uI.prototype={
$1(a){return B.l},
$S:8}
A.uJ.prototype={
$1(a){return B.l},
$S:8}
A.uL.prototype={
$1(a){return B.l},
$S:8}
A.uM.prototype={
$1(a){var s,r,q=A.l([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jo(s.gn()))
return new A.fI(q)},
$S:79}
A.uN.prototype={
$1(a){return B.l},
$S:8}
A.uO.prototype={
$1(a){return new A.fH(a)},
$S:80}
A.uP.prototype={
$1(a){return new A.fF(a)},
$S:81}
A.uQ.prototype={
$1(a){return new A.hi(a)},
$S:82}
A.uR.prototype={
$1(a){return B.l},
$S:8}
A.uS.prototype={
$0(){return this.a.e3().b4()},
$S:3}
A.uT.prototype={
$0(){return this.a.e3().aY()},
$S:3}
A.uU.prototype={
$0(){return this.b.e3().fZ(this.a.a)},
$S:3}
A.uh.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dM(p.b,a1)
a0.a.a.c===$&&A.t()
o=p.d
n=o instanceof A.j9
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.iD(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.iu(B.a1,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 4:n=o instanceof A.jc
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nF(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.iu(B.a2,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 11:k=o instanceof A.ja
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.np(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.nq(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 18:k=o instanceof A.jd
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nG(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bF(i,B.a2),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 25:e=o instanceof A.j6
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.nm(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.wM(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.j7
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.nn(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.cV(a),$async$$0)
case 44:case 41:a0=A.n(a).i("S<1>")
a0=A.N(new A.S(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.j5
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mJ(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.it(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.jb
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.nz(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.it(B.E,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.j8
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.iC(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dt(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.eO(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:52}
A.ui.prototype={
$1(a){return new A.fT(a)},
$S:83}
A.uj.prototype={
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
return A.a(o.be(m,n).q4(!0,k).cM(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.be(m,n).q0(k).cM(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.be(m,p.c).cM()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:76}
A.uk.prototype={
$1(a){return new A.h5(a.a,a.d,a.e,a.b,a.c)},
$S:85}
A.un.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dM(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.xy(m,l,o.c.b,n.a)
if(l.w==null)A.v(A.tj('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.y.d)A.v(A.tj(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.v(A.U("Limit must be non-negative, got "+A.q(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cM()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:86}
A.uo.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.np(r.a,r.b))}return new A.hb(q)},
$S:87}
A.u5.prototype={
nU(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.aj()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aZ)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nU(a)},
$S:4}
A.u3.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.G(0,this.c)
s.bt(a,b)}},
$S:6}
A.u4.prototype={
$1(a){return new A.ho(this.a)},
$S:89}
A.um.prototype={
$1(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.aj()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aZ)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.ul.prototype={
$1(a){return a.a===this.a},
$S:90}
A.us.prototype={
$1(a){var s=a==null?B.ba:A.l([a],t.d)
this.a.b.u(0,new A.jU(this.b,s))},
$S:91}
A.ut.prototype={
$1(a){this.b.aD().v()
this.a.f.G(0,this.c)},
$S:21}
A.uu.prototype={
$1(a){this.a.b.u(0,new A.jU(this.b,a))},
$S:92}
A.uv.prototype={
$1(a){this.b.aD().v()
this.a.f.G(0,this.c)},
$S:21}
A.uc.prototype={
$1(a){return this.a.r.n4()},
$S:29}
A.ud.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bY(A.e4(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:case 1:return A.bY(null,0,r)
case 2:return A.bY(o.at(-1),1,r)}})
var s=0,r=A.GN($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.H4(r)},
$S:94}
A.ue.prototype={
$1(a){var s=this,r=new Uint8Array(A.bc(a)),q=s.b
q.b=q.b+r.length
q.c=new A.aG(Date.now(),0,!1)
s.a.b.u(0,new A.fG(s.c,r,!1,null))
if(q.b>=1048576)s.d.aD().b4()},
$S:11}
A.ug.prototype={
$1(a){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fG(r,new Uint8Array(0),!0,J.Z(a)))},
$S:21}
A.uf.prototype={
$0(){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fG(r,new Uint8Array(0),!0,null))},
$S:0}
A.u8.prototype={
$1(a){var s,r,q,p,o,n,m,l=this.a,k=l.x
if(k.a===0){k=l.y
if(k!=null)k.v()
l.y=null
return}l=Date.now()
s=A.n(k).i("aN<1,2>")
s=A.N(new A.aN(k,s),s.i("o.E"))
r=s.length
q=t.H
p=0
for(;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.b
m=n.c
if(0-m.b+1000*(l-m.a)<=18e8)continue
k.G(0,o.a)
n=n.d
n===$&&A.t()
n.v().b0(new A.u6(),new A.u7(),q)}},
$S:29}
A.u6.prototype={
$1(a){},
$S:30}
A.u7.prototype={
$2(a,b){},
$S:6}
A.up.prototype={
$0(){this.a.b.u(0,B.bJ)},
$S:2}
A.uq.prototype={
$1(a){var s=this.a
s.ax=a
s.b.u(0,new A.nR(a))},
$S:96}
A.ur.prototype={
$1(a){var s,r=this.a,q=A.l([],t.oS)
for(s=J.E(a);s.k();)q.push(r.jd(s.gn()))
r.b.u(0,new A.lD(this.b,q))},
$S:97}
A.ub.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.v()
j.e=null
return}j=Date.now()
s=A.n(i).i("am<2>")
s=A.N(new A.am(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a0(m).i("bA<1>"),m=new A.bA(m,l),m=new A.ar(m,m.gm(0),l.i("ar<a1.E>")),l=l.i("a1.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aF(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aF(null)
i.G(0,n.a)
m=n.w
m===$&&A.t()
m.b0(new A.u9(),new A.ua(),p)}}},
$S:29}
A.u9.prototype={
$1(a){},
$S:30}
A.ua.prototype={
$2(a,b){},
$S:6}
A.ly.prototype={
a6(){return"ConflictAlgorithm."+this.b}}
A.iy.prototype={
q(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aV(o,o.r,o.e,A.n(o).i("aV<2>"));n.k();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.ao(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
cp(a){var s,r=this.a,q=r.G(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.G(0,new A.S(r,A.n(r).i("S<1>")).gH(0))
if(s!=null)s.q()}q=this.b.wP(a)
r.j(0,a,q)
return q},
kY(a,b){var s=this.cp(a).kZ(new A.bR(b)),r=A.n(s).i("Y<J.E,F<j,k?>>")
r=A.N(new A.Y(s,new A.rT(),r),r.i("a1.E"))
return r},
oD(a){return this.kY(a,B.j)},
ff(a,b){this.cp(a).ef(new A.bR(b))},
kl(a){return this.ff(a,B.j)},
aH(a,b){return this.vs(a,b)},
O(a){return this.aH(a,B.j)},
vs(a,b){var s=0,r=A.h(t.H),q=this
var $async$aH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.ff(a,b)
return A.e(null,r)}})
return A.f($async$aH,r)},
ae(a,b){return this.x4(a,b)},
b5(a){return this.ae(a,B.j)},
x4(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kY(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ae,r)},
bX(a,b,c,d,e,f,g){return this.x_(a,b,c,d,e,f,g)},
aI(a,b,c,d){return this.bX(a,null,b,null,null,c,d)},
ev(a,b,c,d,e){return this.bX(a,b,c,null,null,d,e)},
ns(a,b,c,d){return this.bX(a,b,null,null,null,c,d)},
bG(a,b,c){var s=null
return this.bX(a,s,s,s,s,b,c)},
wY(a,b,c,d,e){return this.bX(a,null,b,null,c,d,e)},
wX(a,b,c,d,e){return this.bX(a,b,c,d,e,null,null)},
wZ(a,b,c,d,e,f){return this.bX(a,b,c,null,d,e,f)},
wW(a,b,c,d){return this.bX(a,null,null,null,b,c,d)},
x_(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bX=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.C(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.q(c)
if(d!=null)n+=" OFFSET "+A.q(d)
o=g==null?B.j:g
q=p.ae(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bX,r)},
ci(a,b,c,d){return this.wa(0,b,c,d)},
aE(a,b,c){return this.ci(0,b,c,null)},
wa(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$ci=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.R("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("S<1>")
m=t.N
l=A.dK(new A.S(c,n),new A.rS(),n.i("o.E"),m).C(0,", ")
k=B.b.C(A.a8(c.a,"?",!1,m),", ")
j=A.EW(d)
o=o.i("am<2>")
o=A.N(new A.am(c,o),o.i("o.E"))
p.ff("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ap(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ci,r)},
L(a,b,c,d){return this.xz(a,b,c,d)},
xz(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("S<1>")
m=A.dK(new A.S(b,n),new A.rU(),n.i("o.E"),t.N).C(0,", ")
n="UPDATE"+A.EW(null)+' "'+a+'" SET '+m
o=A.N(new A.am(b,o.i("am<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.D(o,d)}p.ff(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
X(a,b,c){return this.uI(a,b,c)},
uH(a,b){return this.X(a,b,null)},
uI(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$X=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
if(c!=null)B.b.D(n,c)}p.ff(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$X,r)},
uw(a,b,c){this.b.ux(B.bz,!0,!1,new A.rR(b),c)},
a0(a,b){return this.xv(a,b,b)},
xv(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$a0=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:if(n.d)throw A.b(A.dh("Database connection is wedged: an earlier rollback failed and left an open transaction. Reopen the database to recover."))
n.kl("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a0)
case 7:m=e
n.kl("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.D(g)
try{n.kl("ROLLBACK")}catch(f){k=A.D(f)
h=J.Z(k).toLowerCase()
if(!(B.a.E(h,"no transaction is active")||B.a.E(h,"cannot rollback"))){n.d=!0
throw A.b(A.dh("Rollback failed after a transaction error ("+A.q(k)+"); original error: "+A.q(l)+". The database connection is left in an open transaction; reopen to recover."))}}throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a0,r)},
$irq:1}
A.rT.prototype={
$1(a){return A.bo(a,t.N,t.X)},
$S:98}
A.rS.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.rU.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.rR.prototype={
$1(a){var s=a.gm(0)===0?null:a.gH(a)
return this.a.$1(s)},
$S:100}
A.qI.prototype={}
A.ix.prototype={
k9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aO(t.N),b=a.a
if(B.a.E(b,"'")||B.a.E(b,'"'))A.v(A.ay('Store name "'+b+"\" must not contain quote characters: a quote would break the FTS content reference and the database adapter's table quoting."))
if(B.a.S(b,"sqlite_")||B.a.S(b,"lp_"))A.v(A.ay('Store name "'+b+'" uses a reserved prefix (sqlite_ is SQLite-owned, lp_ is the engine metadata namespace).'))
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=$.Et()
if(!k.b.test(l))A.v(A.ay('Field "'+l+u.Z))
if(B.aF.E(0,l))throw A.b(A.ay('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.ay('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.ay(e+l+'" cannot be unique.'))
if(B.b.bp(o,new A.rQ(m)))throw A.b(A.ay(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.E(k,l)}else k=!1
if(k)throw A.b(A.ay(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.p)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ar(l,l.gm(0),k.i("ar<J.E>")),k=k.i("J.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.E(0,j)&&!B.aF.E(0,j))throw A.b(A.ay('Index column "'+j+'" is not a declared field of store "'+b+'".'))}for(b=l,i=0;i<b;b=r,i=h)for(h=i+1,b=h,g=0;r=o.length,g<r;++g){if(i===g)continue
if(B.az.V(o[i].a,o[g].a)){if(i<g){r=o[i].a
d.push("Duplicate index columns "+r.l(r)+" (declarations "+b+" and "+(g+1)+").")}}else if(A.J9(o[g].a,o[i].a)&&!o[g].b){r=o[g].a
r=r.l(r)
l=o[i].a
d.push("Index "+r+" is prefix-subsumed by index "+l.l(l)+".")}}if(p){b=f.a
if(!b.d)throw A.b(A.tj(u.r))
if(q.b&&!A.FD(b.a,3,34))throw A.b(A.tj("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+b.a+")."))
for(b=q.a,r=b.$ti,b=new A.ar(b,b.gm(0),r.i("ar<J.E>")),r=r.i("J.E");b.k();){p=b.d
if(p==null)p=r.a(p)
if(!c.E(0,p))throw A.b(A.ay('FTS field "'+p+'" is not a declared field.'))}for(b=q.c.a.ga_(),b=b.gt(b);b.k();){r=b.gn()
A.F3(r.a,r.b)}}for(b=s.length,n=0;n<b;++n){m=s[n]
r=m.b
if(r===B.J){q=m.f
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.ay('Enum field "'+m.a+'" must declare values.'))
if(r===B.K){r=m.r
r=r==null||r.length===0}else r=!1
if(r)throw A.b(A.ay('Ref field "'+m.a+'" must declare its target store.'))}return new A.qI(f.pE(a),f.pD(a),f.pC(a),d)},
pE(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.C(n,'"',i)+'"')+" "+o.gl2()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.J&&q){k=o.f
k.toString
j=new A.Y(k,new A.rP(),A.a0(k).i("Y<1,j>")).C(0,", ")
m+=" CHECK ("+('"'+A.C(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.K&&o.w){n=o.r
n.toString
n=A.C(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.C("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.C(a.a,'"',i)
r=B.b.C(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
pD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=m.b
j=l.$ti.i("Y<J.E,j>")
i=A.N(new A.Y(l,A.pH(),j),j.i("a1.E"))
if(!k&&!l.E(l,"id"))i.push('"'+A.C("id",e,d)+'"')
h=m.c===B.b5?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.C(l,"_")
l=A.C(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.C(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}else{l=l.C(l,"_")
l=A.C(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.C(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.p)(r),++n){g=r[n]
if(g.b!==B.K)continue
if(B.b.bp(s,new A.rO(g)))continue
k=g.a
j=A.C(p+k,e,d)
f=A.C(q,e,d)
k=A.C(k,e,d)
b.push("CREATE INDEX "+('"'+j+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.C("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.p)(r),++n){g=r[n]
if(g.d){s=g.a
p=A.C(o+s,e,d)
l=A.C(q,e,d)
j=A.C(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+j+'"')+") WHERE "+('"'+A.C(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
pC(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.u
s=a0.a
if(s.gm(0)===0)throw A.b(A.ay("FTS requires at least one field to index."))
r=A.l([],t.s)
q=a1.a
p=q+"_fts"
o=s.$ti.i("Y<J.E,j>")
n=A.N(new A.Y(s,A.pH(),o),o.i("a1.E"))
m=new A.rN(q,a0.c)
l=new A.Y(s,new A.rK(m),o).C(0,f)
k=new A.Y(s,new A.rL(m),o).C(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
r.push("CREATE VIRTUAL TABLE "+('"'+A.C(p,e,d)+'"')+" USING fts5(\n  "+B.b.C(n,f)+",\n  content = '"+q+"',\n  content_rowid = 'rowid'\n"+j)
s=A.C(q+"_ai",e,d)
o=A.C(q,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.C(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
s=A.C(q+"_ad",e,d)
o=A.C(q,e,d)
m=A.C(p,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.C(p,e,d)+'"')+", rowid, "+B.b.C(n,f)+a+k+");\nEND;")
i=new A.Y(n,new A.rM(),A.a0(n).i("Y<1,j>")).C(0," OR ")
s=A.C(q+"_au",e,d)
o=A.C(q,e,d)
m=A.C(p,e,d)
h=A.C(p,e,d)
g=B.b.C(n,f)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.C(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
return r}}
A.rQ.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:51}
A.rP.prototype={
$1(a){return"'"+A.C(a,"'","''")+"'"},
$S:7}
A.rO.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:51}
A.rN.prototype={
$2(a,b){return A.Ej(this.a,this.b,a,b)},
$S:102}
A.rK.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.rL.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.rM.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dJ.prototype={
l(a){return A.d2(this).l(0)+": "+this.a},
$iH:1}
A.dY.prototype={}
A.hq.prototype={}
A.fX.prototype={}
A.ir.prototype={}
A.jr.prototype={}
A.iI.prototype={}
A.dg.prototype={}
A.jA.prototype={}
A.jy.prototype={}
A.jD.prototype={}
A.ha.prototype={}
A.jR.prototype={}
A.iJ.prototype={}
A.jL.prototype={}
A.j4.prototype={}
A.it.prototype={}
A.fz.prototype={}
A.jx.prototype={}
A.iC.prototype={}
A.bm.prototype={}
A.rY.prototype={
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
o=A.a7(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.G(n)
m=A.bh(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bh(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bm(j,s,r,q,p,o,n,m,l,A.a7(k.h(0,"last_error")))},
$S:50}
A.v9.prototype={
gmh(){return this.b},
gil(){var s=0,r=A.h(t.y),q,p=this
var $async$gil=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.gfm()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gil,r)},
lL(a,b){return b},
cR(a,b,c){return this.wi(a,b,c)},
wi(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$cR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.t()
n=J
s=3
return A.a(o.gbu().b.bG("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.lL(c,a)]),$async$cR)
case 3:o=n.c3(e,A.NO(),t.A)
o=A.N(o,o.$ti.i("a1.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cR,r)},
dh(a,b,c,d,e,f,g,h){return this.ug(a,b,c,d,e,f,g,h)},
ug(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$dh=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gmh()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.gfm(),$async$dh)
case 5:j=!j
case 4:if(j)throw A.b(A.A("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.lL(h,e)
s=6
return A.a(l.cn(b,c,d),$async$dh)
case 6:n=j
s=7
return A.a(l.bl(n),$async$dh)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a0(new A.va(p,h,g,o,n,m,A.i5(),f),t.A),$async$dh)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
fv(a,b,c,d,e){return this.wC(a,b,c,d,e)},
wC(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fv=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cR(a,c,e),$async$fv)
case 3:k=g
j=J.K(k)
if(j.gF(k))throw A.b(A.A("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.cf(k,new A.vc(d),new A.vd(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(new A.jA("File is remote_only; call files.download(ref) to fetch its bytes, or enable prefetchFiles on the store and sync."))
n=p.gmh()
j=p.a
m=j.a
m===$&&A.t()
m=m.gbu()
j=j.db.$0()
l=o.e
s=4
return A.a(m.b.aH("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,l]),$async$fv)
case 4:q=n.cT(l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
fF(a,b,c,d,e,f){return this.xg(0,b,c,d,e,f)},
xg(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fF=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cR(b,d,f),$async$fF)
case 3:n=h
m=J.K(n)
if(m.gF(n)){s=1
break}o=e!=null?m.cf(n,new A.ve(e),new A.vf(e)):m.h(n,c)
s=4
return A.a(p.a.a0(new A.vg(p,o,f,d,b),t.P),$async$fF)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
bj(a,b){return this.ot(a,b)},
ot(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bj=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.ec(a8),$async$bj)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.db.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a0(new A.vb(a2,n),t.P),$async$bj)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fn(),$async$bj)
case 13:l=b0
s=J.du(l)?14:15
break
case 14:k=0
j=A.aO(t.N)
d=t.s
case 16:c=e.a
c===$&&A.t()
s=18
return A.a(c.gbu().b.wX("lp_blobs",A.l(["hash"],d),250,k,"hash ASC"),$async$bj)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.V(h,"hash")
b.toString
J.aM(j,A.G(b))}if(J.au(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.CZ(j,g)){s=19
break}p=22
b=new A.w($.B,c)
b.aF(null)
s=25
return A.a(b,$async$bj)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.dj(g),$async$bj)
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
case 12:case 8:d=e.x,c=t.s
case 27:b=e.a
b===$&&A.t()
s=29
return A.a(b.gbu().b.wZ("lp_blobs",A.l(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bj)
case 29:a0=b0
b=J.K(a0)
if(b.gF(a0)){s=28
break}b=b.gt(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.G(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.dj(a1),$async$bj)
case 34:case 33:s=35
return A.a(d.X("lp_blobs","hash = ?",[a1]),$async$bj)
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
return A.f($async$bj,r)},
cK(a){return this.vn(a)},
vn(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.t()
d=A
s=3
return A.a(e.gbu().b.b5("SELECT SUM(size) as total FROM lp_blobs"),$async$cK)
case 3:o=d.ff(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.x,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbu().b.b5("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cK)
case 6:k=c
j=J.K(k)
if(j.gF(k)){s=5
break}j=j.gt(k)
case 7:if(!j.k()){s=8
break}i=j.gn()
if(o<=a){s=8
break}h=i.h(0,"hash")
h.toString
A.G(h)
i=i.h(0,"size")
i.toString
A.ap(i)
s=9
return A.a(g.dj(h),$async$cK)
case 9:s=10
return A.a(e.gbu().b.L("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$cK)
case 10:s=11
return A.a(f.X("lp_blobs","hash = ?",[h]),$async$cK)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cK,r)}}
A.va.prototype={
$1(a){return this.nW(a)},
nW(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$$1=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:k=a.b
j=p.a.a.db.$0()
i=t.s
h=p.b
g=p.c
f=p.d
e=p.e
s=3
return A.a(k.ev("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],i),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[h,g,f,e]),$async$$1)
case 3:d=a0
c=J.K(d)
if(c.gT(d)){q=A.F_(c.gH(d))
s=1
break}s=4
return A.a(A.ib(k,e,j,p.f),$async$$1)
case 4:s=5
return A.a(k.ev("lp_outbox",A.l(["op_id","base_updated"],i),1,"store = ? AND record_id = ?",[h,g]),$async$$1)
case 5:o=a0
i=J.K(o)
n=i.gT(o)&&J.V(i.gH(o),"base_updated")==null?A.a7(J.V(i.gH(o),"op_id")):null
i=p.r
c=t.N
m=t.X
s=6
return A.a(k.ci(0,"lp_file_refs",A.m(["ref_id",i,"store",h,"record_id",g,"field",f,"hash",e,"remote_name",null,"state","pending_upload"],c,m),B.S),$async$$1)
case 6:l=A.i5()
s=7
return A.a(k.aE(0,"lp_op_queue",A.m(["op_id",l,"store",h,"record_id",g,"kind","fileUpload","payload_json",B.h.a8(A.m(["ref_id",i,"field",f,"hash",e,"name",p.w],c,c),null),"state","pending","depends_on_op",n,"created_at",j],c,m)),$async$$1)
case 7:a.a1(new A.a3(h,A.an([g],c)))
q=new A.bm(i,h,g,f,e,null,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:104}
A.vc.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vd.prototype={
$0(){return A.v(A.A("FileRef "+this.a+" not found"))},
$S:16}
A.ve.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vf.prototype={
$0(){return A.v(A.A("FileRef "+this.a+" not found"))},
$S:16}
A.vg.prototype={
$1(a){return this.nY(a)},
nY(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.a.a.db.$0()
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
return A.a(p.aH(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aE(0,"lp_op_queue",A.m(["op_id",A.i5(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a8(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.U),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a1(new A.a3(q.c,A.an([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vb.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.fy,p=new A.bH(p,p.r,p.e,A.n(p).i("bH<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ae('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.C(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
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
return A.a(i.X("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aH(u.y,[k]),$async$$1)
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
A.cL.prototype={}
A.tb.prototype={
gnC(){var s=this.r
return new A.am(s,A.n(s).i("am<2>")).vH(0,0,new A.te())},
n4(){var s,r=this.r,q=A.n(r).i("am<2>"),p=q.i("co<o.E,j>"),o=A.N(new A.co(new A.ao(new A.am(r,q),new A.tc(this.f.$0()),q.i("ao<o.E>")),new A.td(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.p)(o),++s)r.G(0,o[s])
return p}}
A.te.prototype={
$2(a,b){return a+b.f},
$S:107}
A.tc.prototype={
$1(a){return!a.z.kw(this.a)},
$S:108}
A.td.prototype={
$1(a){return a.a},
$S:109}
A.m8.prototype={}
A.q9.prototype={}
A.fq.prototype={
l(a){return"BlobMissingError: "+this.a},
$iH:1}
A.ij.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.q(this.a)},
$iH:1}
A.nF.prototype={}
A.CG.prototype={
$1(a){return B.b.D(this.a,a)},
$S:110}
A.iF.prototype={}
A.rZ.prototype={
by(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$by=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.ck
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.dy
a3===$&&A.t()
b5=J
s=3
return A.a(a3.fc(25),$async$by)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.bd?10:12
break
case 10:s=13
return A.a(n.cA(i,b2),$async$by)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.nj(i.b),$async$by)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.be?17:18
break
case 17:s=19
return A.a(n.eS(i),$async$by)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.nj(i.b),$async$by)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.D(b3)
j=!0
e=i.w+1
d=a5.mX(e)
a8=i.b
a9=J.Z(f)
b0=a6.$0()
s=23
return A.a(a3.ws(a8,a9,e,b0+B.c.M(d.a,1000)),$async$by)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.fy,a4=new A.bH(a3,a3.r,a3.e,A.n(a3).i("bH<1>")),a2=a2.x
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.v(A.A('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.bG("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$by)
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
a1=A.a7(J.V(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cJ(a0,a,a1,c),$async$by)
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
case 25:q=new A.iF(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$by,r)},
cA(a,b){return this.rH(a,b)},
rH(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cA=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aG(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.G(a1)
l=a0.h(0,"hash")
l.toString
A.G(l)
k=A.a7(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bv(l),$async$cA)
case 3:if(!a6)throw A.b(A.A("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bl(l),$async$cA)
case 4:j=a6
if(j==null)throw A.b(A.A("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.as
i===$&&A.t()
s=9
return A.a(i.c1(a3.d),$async$cA)
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
if(m!=null){f=B.a.B(l,0,B.c.br(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.xE(a3.d,A.m([k,new A.hj(k,j,new A.t0(a4,l))],t.N,t.h3)),$async$cA)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga3(l):k
case 11:s=14
return A.a(n.a.a0(new A.t1(a,a1,a3),t.P),$async$cA)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cA,r)},
eS(a){return this.rG(a)},
rG(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aG(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.G(l)
o=A.a7(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.G(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.xC(a.d,A.l([o],t.s)),$async$eS)
case 5:case 4:s=6
return A.a(p.a.a0(new A.t_(l,n,a),t.P),$async$eS)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eS,r)},
cJ(a,b,c,d){return this.ve(a,b,c,d)},
ve(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cJ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.as
l===$&&A.t()
k=m
s=4
return A.a(l.fb(c,a,null),$async$cJ)
case 4:s=3
return A.a(k.iD(f),$async$cJ)
case 3:o=f
s=5
return A.a(m.bl(o),$async$cJ)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a0(new A.t2(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cJ)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cJ,r)},
dk(a,b,c,d){return this.vg(a,b,c,d)},
vg(a,b,c,d){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i
var $async$dk=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:k=p.a
j=k.fx
j===$&&A.t()
s=3
return A.a(j.cR(a,b,d),$async$dk)
case 3:o=f
n=J.K(o)
if(n.gF(o))throw A.b(A.jz("No file references for "+d+"/"+b+"/"+a+"."))
m=c!=null?n.cf(o,new A.t3(c),new A.t4(c,d,b,a)):n.cf(o,new A.t5(),new A.t6(o))
i=J
s=4
return A.a(k.x.aI("lp_blobs",1,"hash = ?",[m.e]),$async$dk)
case 4:if(i.du(f)&&m.r!=="remote_only"){q=m
s=1
break}l=m.f
if(l==null)throw A.b(A.U("File "+m.a+" in "+d+"/"+b+"/"+a+" has no remote filename recorded and cannot be downloaded (state: "+m.r+"). Only remotely-known attachments are downloadable.",null))
s=5
return A.a(p.cJ(b,m.a,l,d),$async$dk)
case 5:i=J
s=6
return A.a(j.cR(a,b,d),$async$dk)
case 6:q=i.IA(f,new A.t7(m),new A.t8(m))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
dr(a,b,c,d){return this.wz(a,b,c,d)},
wz(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dr=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.bG("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dr)
case 2:e=a5
d=A.mG(a2,A.a0(a2).c)
c=J.aA(e)
b=t.v
a=A.ca(new A.e_(c.cl(e,new A.t9(),t.U),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.fy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.E(0,k)?6:7
break
case 6:j=A.i5()
i=n.h(0,a3)
if(i==null)A.v(A.A(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.ci(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.ce),$async$dr)
case 8:case 7:case 4:a2.length===b||(0,A.p)(a2),++l
s=3
break
case 5:c=c.gt(e)
case 9:if(!c.k()){s=10
break}b=c.gn()
g=A.a7(b.h(0,"remote_name"))
if(g==null){s=9
break}if(d.E(0,g)){s=9
break}p=b.h(0,"state")
p.toString
A.G(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.X("lp_file_refs","ref_id = ?",[p]),$async$dr)
case 11:f=A.a7(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.S(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aH(u.y,[f]),$async$dr)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dr,r)}}
A.t0.prototype={
$0(){return this.a.cT(this.b)},
$S:111}
A.t1.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a1(new A.a3(p.c,A.an([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t_.prototype={
$1(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.X("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aH(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a1(new A.a3(p.c,A.an([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t2.prototype={
$1(a){return this.nR(a)},
nR(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.ib(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a1(new A.a3(q.f,A.an([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t3.prototype={
$1(a){return a.a===this.a},
$S:25}
A.t4.prototype={
$0(){var s=this
return A.v(A.jz("FileRef "+s.a+" not found for "+s.b+"/"+s.c+"/"+s.d+"."))},
$S:16}
A.t5.prototype={
$1(a){return a.r==="remote_only"},
$S:25}
A.t6.prototype={
$0(){return J.bP(this.a)},
$S:50}
A.t7.prototype={
$1(a){return a.a===this.a.a},
$S:25}
A.t8.prototype={
$0(){return A.v(A.jz("FileRef "+this.a.a+" disappeared during download."))},
$S:16}
A.t9.prototype={
$1(a){return A.a7(a.h(0,"remote_name"))},
$S:112}
A.CM.prototype={
$1(a){if(typeof a!="string")return a
return this.a.es(a)},
$S:39}
A.v1.prototype={
gbu(){var s=this.c
return s===$?this.c=new A.iC(this.b):s}}
A.nD.prototype={}
A.wC.prototype={
bI(a){var s,r=this.a
if(!r.I(a))return null
s=r.G(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.py(s)
r.toString
t.G.a(r)}return r},
l_(a,b){var s,r=this.a
if(r.a>=256)r.G(0,new A.S(r,A.n(r).i("S<1>")).gH(0))
if(b==null)s=null
else{s=A.py(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
wb(a){var s,r,q,p=a.a
if(p===0){this.a.ao(0)
return}s=this.a
if(p>=s.a){s.ao(0)
return}for(p=A.e6(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.G(0,q==null?r.a(q):q)}}}
A.mB.prototype={
av(a){var s=this.fy.h(0,a)
if(s==null)throw A.b(A.A('No store "'+a+'" registered in this LocalPocket.'))
return s},
bs(a){var s,r,q=this
if(A.o4(q)!=null)A.v(A.A(u.L))
s=q.av(a)
r=q.a
r===$&&A.t()
return new A.ft(q,s,r.gbu(),null)},
b1(a,b,c){var s
if(A.o4(this)!=null)A.v(A.A(u.L))
s=this.b
s===$&&A.t()
return s.b1(a,b,c)},
a0(a,b){return this.b1(a,B.q,b)},
q(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$q=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.go){s=1
break}n.go=!0
m=n.a$
m.a.q()
m.b.q()
p=4
s=7
return A.a(n.x.O("PRAGMA optimize"),$async$q)
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
return A.a(n.x.q(),$async$q)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$q,r)}}
A.oW.prototype={}
A.vj.prototype={
nD(a,b){var s=this.a;++s.f.e
return s.b.aH(a,B.j)},
ea(a){return this.uc(a)},
ua(){return this.ea(null)},
uc(a){var s=0,r=A.h(t.H),q=this,p
var $async$ea=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$ea)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.C(a,'"','""')+'"')),$async$ea)
case 6:case 3:return A.e(null,r)}})
return A.f($async$ea,r)},
fP(){var s=0,r=A.h(t.H),q=this,p
var $async$fP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fP)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fP,r)},
iN(){var s=0,r=A.h(t.H),q=this,p
var $async$iN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iN)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iN,r)},
iM(){var s=0,r=A.h(t.H),q=this
var $async$iM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.b.O("VACUUM"),$async$iM)
case 2:return A.e(null,r)}})
return A.f($async$iM,r)},
fA(){return this.wQ()},
wQ(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a.a.a0(new A.vm(o),t.P),$async$fA)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
cX(a){return this.xq(a)},
xq(a){var s=0,r=A.h(t.H),q=this,p
var $async$cX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a.fy,p=new A.bH(p,p.r,p.e,A.n(p).i("bH<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.ee(p.d,a),$async$cX)
case 4:s=2
break
case 3:s=5
return A.a(q.fA(),$async$cX)
case 5:s=6
return A.a(q.fT(B.cj),$async$cX)
case 6:s=7
return A.a(q.fP(),$async$cX)
case 7:s=8
return A.a(q.ua(),$async$cX)
case 8:return A.e(null,r)}})
return A.f($async$cX,r)},
fT(a){return this.ou(a)},
ou(a){var s=0,r=A.h(t.H),q=this
var $async$fT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a.a0(new A.vl(q,a),t.P),$async$fT)
case 2:return A.e(null,r)}})
return A.f($async$fT,r)},
ee(a,b){return this.ur(a,b)},
ur(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ee=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.a
h=i.x.$0()
g=h-B.c.M(b.a,1000)
j.a=0
o=i.a
n=o.av(a).a
m=t.P,i=i.b
case 3:s=5
return A.a(i.ae("SELECT b.id FROM "+('"'+A.C(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",g,250]),$async$ee)
case 5:l=d
if(J.bD(l)){s=4
break}if(A.o4(o)!=null)A.v(A.A(u.L))
k=o.b
k===$&&A.t()
s=6
return A.a(k.b1(new A.vk(j,p,l,a,g,n),B.q,m),$async$ee)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ee,r)}}
A.vm.prototype={
$1(a){return this.o0(a)},
o0(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b5("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.E(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.G(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.X("lp_outbox","store = ? AND record_id = ?",[m,A.G(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vl.prototype={
$1(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
s=2
return A.a(p.uH("lp_op_queue","state = 'done'"),$async$$1)
case 2:s=3
return A.a(p.X("lp_dead_letter","at < ?",[q.a.a.x.$0()-B.c.M(q.b.a,1000)]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vk.prototype={
$1(a){return this.nZ(a)},
nZ(a1){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a=a1.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=t.X,k=a1.c,j=a1.a.Q,i=q.e,h=q.f,g=q.b.a,f=g.Q,g=g.as
case 2:if(!p.k()){s=3
break}e=p.gn().h(0,"id")
e.toString
A.G(e)
a0=J
s=4
return A.a(a.ae("SELECT b.id FROM "+('"'+A.C(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,e,"clean",i]),$async$$1)
case 4:if(a0.bD(a3)){s=2
break}s=5
return A.a(a.ae("SELECT * FROM "+('"'+A.C(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[e]),$async$$1)
case 5:d=a3
c=J.K(d)
b=c.gT(d)?A.bN(h,c.gH(d),f,g):null
s=6
return A.a(A.cF(a,n,e,!1),$async$$1)
case 6:s=7
return A.a(a.X("lp_outbox","store = ? AND record_id = ?",[n,e]),$async$$1)
case 7:s=8
return A.a(a.X(n,"id = ?",[e]),$async$$1)
case 8:s=9
return A.a(a.L("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.an([e],m)
k.push(new A.a3(n,c))
j.r+=c.a
if(b!=null)a1.ki(B.au,e,null,b,B.I,n);++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vH.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:43}
A.vI.prototype={
$2(a,b){return B.c.a2(a.a,b.a)},
$S:114}
A.vD.prototype={
$1(a){return a.h(0,"name")},
$S:41}
A.vE.prototype={
$1(a){return this.o1(a)},
o1(a0){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:p=q.b,o=p.length,n=q.c,m=n.a,l=q.d,k=l.cx,l=l.cy,j=t.N,i=t.X,h=0
case 2:if(!(h<p.length)){s=4
break}g=p[h]
f=g.b
e=A.u(j,i)
for(d=g.c.ga_(),d=d.gt(d);d.k();){c=d.gn()
b=c.a
a=A.JN(n,b)
if(a==null)throw A.b(A.ay('Backfill on "'+m+'" produced unknown field "'+b+'".'))
c=c.b
A.Fj(a,c)
e.j(0,b,A.Eh(n,a,c,k,l,f))}s=5
return A.a(a0.L(m,e,"rowid = ?",[g.a]),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++h
s=2
break
case 4:s=6
return A.a(A.fQ(a0,q.e,B.c.l(q.a.a)),$async$$1)
case 6:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:45}
A.vG.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.cx,j=j.cy,h=q.e,g=t.ji,f=t.d3,e=q.d.d
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.bN(k,p,i,j)
d=e==null?null:e.$1(o)
if(!f.b(d)){c=new A.w($.B,g)
c.a=8
c.c=d
d=c}s=4
return A.a(d,$async$$1)
case 4:b=a1
n=b==null?o:b
A.JQ(k,n)
d=J.V(o,"id")
d.toString
A.G(d)
m=A.dt(k,J.y(J.V(n,"archived"),!0),i,j,d,n)
s=5
return A.a(a.aE(0,h,m),$async$$1)
case 5:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:45}
A.vF.prototype={
$1(a){return A.Ej(this.a.a,this.b.c,"",a)},
$S:7}
A.vM.prototype={}
A.CR.prototype={
$2(a,b){var s,r,q=J.Z(a)
if(t.f.b(b))this.a.j(0,q,A.c1(b))
else{s=this.a
if(t.j.b(b)){r=J.c3(b,new A.CQ(),t.z)
r=A.N(r,r.$ti.i("a1.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:32}
A.CQ.prototype={
$1(a){return t.f.b(a)?A.c1(a):a},
$S:38}
A.jt.prototype={}
A.wQ.prototype={
$1(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.nh),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=t.N
h=t.X
g=A.u(i,h)
f=a.a
g.j(0,"store",f)
o=a.b
g.j(0,"recordId",o)
n=p.b
g.j(0,"id",n)
g.j(0,"scope",p.c)
m=p.d
if(m!=null)g.j(0,"field",m)
m=a.f
m=A.N(m,A.n(m).c)
l=a.r
l=A.N(l,A.n(l).c)
g.j(0,"ctx",A.m(["store",f,"recordId",o,"base",a.c,"local",a.d,"remote",a.e,"dirtyLocal",m,"dirtyRemote",l],i,h))
s=3
return A.a(p.a.em("resolver",g),$async$$1)
case 3:k=c
if(k==null){q=null
s=1
break}i='resolver "'+n+'"'
j=A.BZ(k,i)
i=A.E7(j.h(0,"merged"),i,"merged")
h=J.y(j.h(0,"needsReview"),!0)
if(typeof j.h(0,"note")=="string"){g=j.h(0,"note")
g.toString
A.G(g)}else g=null
q=new A.aQ(i,h,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:116}
A.Cm.prototype={
$1(a){return a.d!=null},
$S:43}
A.BR.prototype={
$2(a,b){this.a.j(0,a,A.GE(b,a,this.c,"field",'field override "'+a+'" of "'+this.b+'"'))},
$S:75}
A.BS.prototype={
$1(a){return a.b===this.a.h(0,"missingRemote")},
$S:118}
A.BT.prototype={
$0(){return A.v(A.U('"missingRemote" of "'+this.a+'" is not a known policy: '+A.q(this.b.h(0,"missingRemote")),null))},
$S:16}
A.BU.prototype={
$1(a){return this.os(a)},
os(a){var s=0,r=A.h(t.i),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b
n=A
s=3
return A.a(p.a.em("validator",A.m(["store",o,"record",a],t.N,t.X)),$async$$1)
case 3:q=n.MM(c,'validator of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:119}
A.BO.prototype={
$1(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c
m=A
s=3
return A.a(p.a.em("documentMigration",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.E7(c,"document migration v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:46}
A.BP.prototype={
$1(a){return this.or(a)},
or(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c.a
m=A
s=3
return A.a(p.a.em("migrationTransform",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.E7(c,"migration transform v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:46}
A.n1.prototype={
x3(a){if(a>this.w)this.w=a},
nu(){return this.f++}}
A.v2.prototype={
uB(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aG(B.o.f7(B.as.A(a)),null))
i=J.V(s,"store")
h=J.V(s,"schemaVer")
g=J.V(s,"shape")
f=J.V(s,"ir")
q=t.lH
p=q.a(J.V(s,"sort"))
if(p==null)p=B.al
e=A.bI(p,!0,t.N)
r=b?J.V(s,"pv"):J.V(s,"values")
q=q.a(r)
if(q==null)q=B.al
d=A.bI(q,!0,t.X)}catch(o){q=A.DD(j)
throw A.b(q)}n=k.c
if(!J.y(i,k.a)||!J.y(h,k.b)||!J.y(g,k.d)||!J.y(f,1)||!B.ca.V(e,n)||J.au(d)!==n.length)throw A.b(A.DD("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bv(l)&&!A.al(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.DD(j))}return d}}
A.Bd.prototype={
V(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.xf.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.q(s.e)+", backward: "+s.z+")"}}
A.da.prototype={}
A.aj.prototype={}
A.cb.prototype={}
A.dw.prototype={}
A.d4.prototype={}
A.b3.prototype={}
A.cp.prototype={}
A.na.prototype={
cC(a,b){var s=this.ge2()
s.Q.nu()
return this.c.ae(a,b)},
c5(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bI(i.d,!0,h)
h=A.bI(i.e,!0,h)
s=a0==null?A.bI(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bI(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bI(i.f,!0,t.jS)
return new A.na(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
h8(){var s=null
return this.c5(s,s,s,s,s,s,s,s,s)},
lw(a){var s=null
return this.c5(s,s,s,s,s,s,s,a,s)},
q1(a){var s=null
return this.c5(s,s,s,a,s,s,s,s,s)},
q2(a){var s=null
return this.c5(s,s,s,s,a,s,s,s,s)},
q_(a){var s=null
return this.c5(a,s,s,s,s,s,s,s,s)},
q3(a){var s=null
return this.c5(s,s,s,s,s,a,s,s,s)},
q5(a,b,c){var s=null
return this.c5(s,s,s,s,s,s,a,b,c)},
q4(a,b){var s=null
return this.c5(s,a,b,s,s,s,s,s,s)},
q0(a){var s=null
return this.c5(s,s,a,s,s,s,s,s,s)},
d4(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.ay('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.U('Unknown field "'+a+'" for query.',a))},
bi(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.d4(a0)
s='"'+A.C(a0,'"','""')+'"'
r=A.l([],t.fC)
q=a4!=null
if(q)r.push(new A.b3(s+" = ?",[a4]))
p=b2!=null
if(p)r.push(new A.b3(s+" <> ?",[b2]))
o=a5!=null
if(o)r.push(new A.b3(s+" > ?",[a5]))
n=a6!=null
if(n)r.push(new A.b3(s+" >= ?",[a6]))
m=b0!=null
if(m)r.push(new A.b3(s+" < ?",[b0]))
l=b1!=null
if(l)r.push(new A.b3(s+" <= ?",[b1]))
k=a7!=null
if(k)r.push(new A.b3(s+" IN ("+B.b.C(A.a8(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b3(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b3(s+b,[A.kQ(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b3(s+b,["%"+A.kQ(a3)]))
g=a2!=null
if(g)r.push(new A.b3(s+b,["%"+A.kQ(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b3(s+" IS NULL",B.j))
e=a8===!0
if(e)r.push(new A.b3(s+" IS NOT NULL",B.j))
d=this.h8()
B.b.D(d.d,r)
c=A.l([],t.k)
if(q)c.push(new A.aj(a0,"eq",[a4]))
if(p)c.push(new A.cb(new A.aj(a0,"eq",[b2])))
if(o)c.push(new A.aj(a0,"gt",[a5]))
if(n)c.push(new A.aj(a0,"gte",[a6]))
if(m)c.push(new A.aj(a0,"lt",[b0]))
if(l)c.push(new A.aj(a0,"lte",[b1]))
if(k)c.push(new A.aj(a0,"inValues",a7))
if(j)c.push(new A.aj(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.aj(a0,"startsWith",[b3]))
if(h)c.push(new A.aj(a0,"endsWith",[a3]))
if(g)c.push(new A.aj(a0,"contains",[a2]))
if(f)c.push(new A.aj(a0,"isNull",B.j))
if(e)c.push(new A.cb(new A.aj(a0,"isNull",B.j)))
B.b.D(d.f,c)
return d},
nI(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
xK(a,b,c){var s=null
return this.bi(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xR(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xL(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xM(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xP(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xQ(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xN(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
xH(a,b,c){var s=null
return this.bi(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xS(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
xJ(a,b,c){var s=null
return this.bi(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
xI(a,b,c){var s=null
return this.bi(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xO(a,b,c){var s=null
return this.bi(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
wI(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=A.l([],j)
q.a4(0,new A.xc(this,p,h))
if(p.length===0)continue
i.push("("+B.b.C(p," AND ")+")")}if(i.length===0)return this
o=this.h8()
o.e.push(new A.b3("("+B.b.C(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.p)(a),++r){q=a[r]
if(q.gT(0)){m=A.l([],j)
for(l=q.ga_().gt(0);l.k();){k=l.gn()
m.push(new A.aj(k.a,"eq",[k.b]))}s.push(new A.dw(m))}}o.f.push(new A.d4(s))
return o},
jX(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.aj
r=s?a.a:l
if(s){this.d4(r)
break A}s=a instanceof A.cb
q=s?a.a:l
if(s){this.jX(q)
break A}p=a instanceof A.dw
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d4
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.p)(n),++m)this.jX(n[m])
break A}},
gc6(){var s,r=A.N(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga3(r).a!=="id"
else s=!1
if(s)r.push(B.dn)
return r},
glt(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gc6(),q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.push(new A.cp(o.a,!o.b))}}else s=this.gc6()
return s},
gtu(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gc6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jN(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.Fk('Query on "'+this.gaS()+'" requires .limit(n) or .all().'))
return s},
gaS(){return this.b.a},
ge2(){return this.a},
eJ(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
e=f.z
if(!e)b.push("archived = 0")
s=f.Q
if(!s)b.push("hidden = 0")
if(b.length!==0)d.push(B.b.C(b," AND "))
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
d.push(o.a)
B.b.D(c,o.b)}for(r=f.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
d.push(o.a)
B.b.D(c,o.b)}r=f.as
if(r!=null){n=f.glA().uB(r,f.at)
m=f.lW(f.glt(),n)
d.push(m.a)
B.b.D(c,m.b)}l=d.length===0?"":" WHERE "+B.b.C(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.C(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.C(a,'"','""')+'"')+") AS v"}else r=f.gtg()
k=r}j=f.glt()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.Y(j,new A.x7(),A.a0(j).i("Y<1,j>")).C(0,", ")
h=A.Ka(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.C(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.q(a0)+"|af:"+A.q(a)+"|df:null",new A.x8(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jN():a3
g=e}return new A.a6(h+(g==null?"":" LIMIT "+A.q(g)),c)},
jb(a){return this.eJ(null,null,!1,!1,a)},
pR(a,b){return this.eJ(a,b,!1,!1,null)},
pP(){return this.eJ(null,null,!1,!1,null)},
pS(a,b,c){return this.eJ(a,null,b,c,null)},
pQ(a){return this.eJ(null,null,!1,a,null)},
gtg(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.lh())return"*"
o=A.N(o,t.N)
for(s=this.gc6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(!B.b.E(o,p))o.push(p)}return new A.Y(o,A.pH(),A.a0(o).i("Y<1,j>")).C(0,", ")},
glA(){var s=this.b
return new A.v2(s.a,s.b,this.gtu(),this.gtr())},
gtr(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a8(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cL(a,new A.x9(a)),c=B.b.cL(b,new A.xa())
if(a.length>=2&&d&&!B.b.gH(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
s.push('"'+A.C(p.a,'"','""')+'"')}o=B.b.C(s,", ")
n=B.b.gH(a).b?"<":">"
return new A.a6("("+o+") "+n+" ("+B.b.C(A.a8(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.l([],s)
l=[]
for(k=0;k<a.length;++k){j=A.l([],s)
i=[]
g=0
for(;;){if(!(g<=k)){h=!0
break}r=a[g]
f='"'+A.C(r.a,'"','""')+'"'
e=b[g]
if(g===k)if(e==null){if(a[g].b){h=!1
break}j.push(f+" IS NOT NULL")}else{r=a[g].b
n=r?"<":">"
if(r)j.push("("+f+" "+n+" ? OR "+f+" IS NULL)")
else j.push(f+" "+n+" ?")
i.push(e)}else if(e==null)j.push(f+" IS NULL")
else{j.push(f+" = ?")
i.push(e)}++g}if(h){m.push("("+B.b.C(j," AND ")+")")
B.b.D(l,i)}}if(m.length===0)return B.dF
return new A.a6("("+B.b.C(m," OR ")+")",l)},
lX(a,b){var s,r,q,p,o=this.glA(),n=[]
for(s=this.gc6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gc6(),p=r.length,q=0;q<r.length;r.length===p||(0,A.p)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.A(B.h.a8(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bC.gfe().A(o)},
eg(a){return this.vy(a)},
cM(){return this.eg(null)},
vy(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$eg=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.jN():a1
if(a0===0){q=B.dp
s=1
break}o=a0==null
n=p.jb(o?null:a0+1)
s=3
return A.a(p.cC(n.a,n.b),$async$eg)
case 3:m=a3
l=o?m:J.D0(m,a0).cZ(0)
k=!o&&J.au(m)>a0
o=p.y
j=o!=null
i=j&&p.lh()
h=p.b
if(i){i=A.N(o,t.N)
B.b.D(i,p.rI())
g=A.NG(h,l,p.ge2().cx,i,p.ge2().cy)}else g=A.NF(h,l,p.ge2().cx,p.ge2().cy)
i=p.at
if(i&&g.length!==0){h=A.a0(g).i("bA<1>")
f=A.N(new A.bA(g,h),h.i("a1.E"))
B.b.ao(g)
B.b.D(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hq(g),$async$eg)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.Oi(g,o):g
if(g.length!==0){b=e?p.lX(B.b.ga3(g),B.b.gH(g)):null
a=d?p.lX(B.b.ga3(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.cr(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
hq(a){return this.rC(a)},
rC(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga3(a)
e=p.gc6()
n=[]
for(m=p.gc6(),l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k)n.push(o.h(0,m[k].a))
j=p.lW(e,n)
e=t.s
i=A.l([],e)
h=[]
g=A.l([],e)
if(!p.z)g.push("archived = 0")
if(!p.Q)g.push("hidden = 0")
if(g.length!==0)i.push(B.b.C(g," AND "))
for(e=p.d,n=e.length,k=0;k<e.length;e.length===n||(0,A.p)(e),++k){f=e[k]
i.push(f.a)
B.b.D(h,f.b)}for(e=p.e,n=e.length,k=0;k<e.length;e.length===n||(0,A.p)(e),++k){f=e[k]
i.push(f.a)
B.b.D(h,f.b)}i.push(j.a)
B.b.D(h,j.b)
d=J
s=3
return A.a(p.cC("SELECT 1 FROM "+('"'+A.C(p.b.a,'"','""')+'"')+" WHERE "+B.b.C(i," AND ")+" LIMIT 1",h),$async$hq)
case 3:q=d.du(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
lh(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.eh(o)==null)return!1}return!0},
rI(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gc6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hT(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pQ(!0)
m=A
s=3
return A.a(p.cC(o.a,o.b),$async$hT)
case 3:n=m.ff(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
hV(a){return this.ut(a)},
ut(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.d4(a)
o=p.pS(a,!0,!0)
m=A
s=3
return A.a(p.cC(o.a,o.b),$async$hV)
case 3:n=m.ff(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
i1(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$i1=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:p.d4(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.q5(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.jb(h)
s=3
return A.a(i.cC(B.a.kJ(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$i1)
case 3:f=a0
o=p.b
e=o.eh(a)
n=[]
for(m=J.E(f),l=e==null,o=o.a,d=a==="archived";m.k();){c=m.gn().h(0,a)
if(l){if(d)c=J.y(c,1)}else c=A.E2(e,c,null,null,"",o)
n.push(c)}q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
r_(a){var s,r,q=this.b.eh(a)
if(q==null)return!1
s=q.b
A:{r=B.V===s||B.W===s||B.B===s||B.X===s
break A}return r},
d3(a,b){return this.pq(a,b)},
pq(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$d3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.d4(b)
if(!p.r_(b))throw A.b(A.U('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pR(b,a)
s=3
return A.a(p.cC(o.a,o.b),$async$d3)
case 3:n=d
m=J.K(n)
q=A.BD(m.gF(n)?null:J.V(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d3,r)},
ik(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$ik=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lw(A.l(["id"],m))
k=l.pP()
s=3
return A.a(l.cC(k.a,k.b),$async$ik)
case 3:j=b
m=A.l([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.G(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
i2(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$i2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.jb(p.jN())
n=J
s=3
return A.a(p.cC("EXPLAIN QUERY PLAN "+o.a,o.b),$async$i2)
case 3:q=n.c3(b,new A.xb(),t.X).C(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)}}
A.xc.prototype={
$2(a,b){this.a.d4(a)
this.b.push('"'+A.C(a,'"','""')+'" = ?')
this.c.push(b)},
$S:75}
A.x7.prototype={
$1(a){var s=A.C(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:121}
A.x8.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.C(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:122}
A.x9.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:123}
A.xa.prototype={
$1(a){return a!=null},
$S:15}
A.xb.prototype={
$1(a){return a.h(0,"detail")},
$S:41}
A.cS.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.q(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cS&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gJ(a){return A.cc(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.xy.prototype={
tf(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.Fk('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cM(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cM=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.c0(a3).length===0){q=B.cY
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.es(a3)
A.Kl(d)
if(e.b)A.Kk(d)
c=f.a
b=c+"_fts"
a=A.l(['"'+A.C(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.C(a," AND ")
a0=n.tf()
a1=a0==null?"":" LIMIT "+A.q(a0)
f=A.C(b,'"','""')
e=A.C(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.C(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.Q.nu()
s=7
return A.a(n.c.ae(m,l),$async$cM)
case 7:j=a6
i=A.l([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.V(h,"id")
f.toString
A.G(f)
e=J.V(h,"score")
e.toString
J.aM(i,new A.cS(f,A.Gz(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.D(a4)
if(i instanceof A.ce){g=i
throw A.b(A.U("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cM,r)}}
A.cr.prototype={}
A.xp.prototype={}
A.c8.prototype={
a6(){return"FieldKind."+this.b}}
A.aZ.prototype={
gl2(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.ax===s||B.J===s||B.Y===s||B.Z===s||B.K===s){r="TEXT"
break A}if(B.V===s||B.B===s||B.X===s){r="INTEGER"
break A}if(B.W===s){r="REAL"
break A}throw A.b(A.eO(u.P))}return r},
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
A.rX.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fD(B.cS,A.G(m))
m=n.h(0,"name")
m.toString
A.G(m)
r=J.y(n.h(0,"required"),!0)
q=J.y(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aZ(m,B.ax,r,J.y(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aZ(m,B.V,r,!1,q,o,o,!1)
case 2:return new A.aZ(m,B.W,r,!1,q,o,o,!1)
case 3:return new A.aZ(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aZ(m,B.X,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aZ(m,B.J,r,!1,!1,A.fN(J.pP(t.j.a(n),p),p),o,!1)
case 6:return new A.aZ(m,B.Y,!1,!1,q,o,o,!1)
case 7:return new A.aZ(m,B.Z,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aZ(m,B.K,!1,!1,!1,o,A.G(p),J.y(n.h(0,"enforceFk"),!0))}},
$S:124}
A.iO.prototype={
a6(){return"IndexScope."+this.b}}
A.dD.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.tQ.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.pP(t.j.a(q),t.N)
s=J.y(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dD(q,s,A.fD(B.cN,A.G(r)))},
$S:125}
A.fK.prototype={
p(){var s,r=t.N,q=t.X,p=A.u(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gT(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fK&&r.b===b.b&&B.az.V(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gJ(a){return A.cc(A.vR(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.ti.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.pP(t.j.a(p),s)
r=J.y(r.h(0,"fuzzy"),!0)
return new A.fK(p,r,t.f.b(q)?A.Jl(q.cc(0,s,t.X)):B.cs)},
$S:126}
A.ey.prototype={
es(a){var s,r,q,p
for(s=this.a.ga_(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.E(r,p))continue
q=q.b
r=A.C(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.ey&&A.Jk(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gK(),n=A.N(o,A.n(o).i("o.E"))
B.b.aJ(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.p)(n),++r){q=n[r]
o.push(A.cc(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.vR(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.th.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.u(s,s)
for(o=t.d2.a(o).ga_(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.G(p)
q=q.b
q.toString
A.G(q)
A.F3(p,q)
r.j(0,p,q)}return new A.ey(A.J2(r,s,s))},
$S:127}
A.bW.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.xO.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ap(o)
s=J.y(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.al:p)
q=t.G
while(p.k())r.push(A.EZ(q.a(p.gn())))
return new A.bW(o,s,r,null)},
$S:128}
A.dL.prototype={
a6(){return"MissingRemotePolicy."+this.b}}
A.lB.prototype={}
A.c5.prototype={
gdi(){var s,r,q,p,o=this,n=$.HU()
A.Da(o)
s=n.a.get(o)
if(s==null){s=A.aO(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
eh(a){var s,r,q,p,o,n=this,m=$.HV()
A.Da(n)
s=m.a.get(n)
if(s==null){s=A.u(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.V(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.u(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o)r.push(q[o].p())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.Q
if(l!=null)j.j(0,"attachmentField",l)
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.p)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.qs.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.G(h)
s=i.h(0,"version")
s.toString
A.ap(s)
r=A.l([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.EZ(o.a(q.gn())))
q=A.l([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.Jv(o.a(n.gn())))
p=J.y(i.h(0,"keepUnsyncedArchives"),!0)
n=J.y(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.G(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.Jm(o.a(l))}else l=null
k=A.l([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.al:i)
while(i.k())k.push(A.Ku(o.a(i.gn())))
return new A.c5(h,s,r,q,B.cf,n,p,l,k,B.bb,null,m,this.b.i("c5<0>"))},
$S(){return this.b.i("c5<0>()")}}
A.no.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.xs.prototype={
$1(a){return a.d!=null},
$S:43}
A.xt.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.I)},
$S:12}
A.xu.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.eB)},
$S:47}
A.xv.prototype={
$1(a){return J.Z(a)},
$S:130}
A.xw.prototype={
aT(a){return this.xe(a)},
xe(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$aT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.a
h=i.a
g=h.fy
f=a.a
if(g.I(f))throw A.b(A.ay('Duplicate store name "'+f+'" in this open call.'))
p=A.DA(a)
o=i.d
if(o.e===B.aD&&p.b.length!==0&&!A.NM(a,i.at))throw A.b(new A.jR('Store "'+f+'" declares executable features that cannot run on the worker runtime: '+B.b.C(p.b,", ")+"."))
s=2
return A.a(q.h3(a,p),$async$aT)
case 2:n=new A.ix(o).k9(a)
o=a.w
if(o!=null)A.Oj(i.b,f,o.c)
o=i.b
s=3
return A.a(o.aI("lp_stores",1,"store = ?",[f]),$async$aT)
case 3:m=c
l=J.K(m)
s=l.gF(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$aT)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$aT)
case 11:case 9:l.length===k||(0,A.p)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aT)
case 15:case 13:l.length===k||(0,A.p)(l),++j
s=12
break
case 14:l=a.b
i=i.x
s=16
return A.a(o.aE(0,"lp_stores",A.m(["store",f,"table_name",f,"schema_ver",l,"definition_json",B.h.a8(a.p(),null),"created_at",i.$0()],t.N,t.X)),$async$aT)
case 16:s=17
return A.a(A.fS(o,0,0,"create:"+f,i,l),$async$aT)
case 17:s=5
break
case 6:i=J.V(l.gH(m),"schema_ver")
i.toString
A.ap(i)
l=a.b
if(i>l)throw A.b(A.FA('Store "'+f+'" on disk is schema v'+i+", but this package supports v"+l+"."))
s=i<l?18:19
break
case 18:s=20
return A.a(A.fR(h,a,i),$async$aT)
case 20:case 19:s=21
return A.a(q.bR(a),$async$aT)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a8(a.p(),null),"schema_ver",l],t.N,t.X),"store = ?",[f]),$async$aT)
case 22:case 5:g.j(0,f,new A.nD(a,p,new A.wC(A.u(t.N,t.b))))
s=23
return A.a(q.dX(f,p),$async$aT)
case 23:return A.e(null,r)}})
return A.f($async$aT,r)},
h3(a,b){return this.ps(a,b)},
ps(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$h3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.a.b.aI("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$h3)
case 3:j=d
if(J.bD(j)){s=1
break}o=null
try{n=J.V(J.bP(j),"v")
o=A.Kj(typeof n=="string"?B.h.aG(n,null):n)}catch(i){if(A.D(i) instanceof A.dJ){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.at(B.m.A(B.e.A(A.ai(o.p()))).a)!==A.at(B.m.A(B.e.A(A.ai(b.p()))).a))throw A.b(A.ay('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$h3,r)},
dX(a,b){return this.rz(a,b)},
rz(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ai(b.p())
n=q.a.b
m=t.N
l=t.X
k=J
s=5
return A.a(n.aI("lp_meta",1,"k = ?",[p]),$async$dX)
case 5:s=k.bD(d)?2:4
break
case 2:s=6
return A.a(n.aE(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dX)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dX)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dX,r)},
hR(a){return this.uh(a)},
uh(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a.b.e
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hR)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
bR(a){return this.rX(a)},
rX(a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bR=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a0=p.a
a1=a0.b
a2=a4.a
s=3
return A.a(a1.ev("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a2]),$async$bR)
case 3:a3=a7
if(J.bD(a3)){s=1
break}o=null
try{n=J.V(J.bP(a3),"definition_json")
m=typeof n=="string"?B.h.aG(n,null):n
l=m
l.toString
k=t.X
o=A.qr(A.bo(t.f.a(l),t.N,k),k)}catch(a5){if(A.D(a5) instanceof A.dg){s=1
break}else throw a5}i=o.w
h=a4.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.az.V(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jM()
$.kY()
f.aB()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a1.O("DROP TRIGGER IF EXISTS "+('"'+A.C(a2+d,'"','""')+'"')),$async$bR)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a1.O("DROP TABLE IF EXISTS "+('"'+A.C(a2+"_fts",'"','""')+'"')),$async$bR)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.ix(a0.d).k9(a4).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a1.O(l[e]),$async$bR)
case 16:case 14:l.length===k||(0,A.p)(l),++e
s=13
break
case 15:l=a2+"_fts"
k=A.C(l,'"','""')
s=17
return A.a(a1.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.C(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bR)
case 17:k=h.a
c=k.$ti.i("Y<J.E,j>")
b=new A.Y(k,A.pH(),c).C(0,", ")
a=new A.Y(k,new A.xx(a4,h),c).C(0,", ")
l=A.C(l,'"','""')
s=18
return A.a(a1.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.C(a2,'"','""')+'"')),$async$bR)
case 18:case 12:if(f.b==null)f.b=$.n6.$0()
l=a4.b
s=19
return A.a(A.fS(a1,f.gn_(),l,"fts:"+a2,a0.x,l),$async$bR)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
hZ(a){return this.uK(a)},
uK(a){var s=0,r=A.h(t.H),q=this,p
var $async$hZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b.f
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hZ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hZ,r)}}
A.xx.prototype={
$1(a){return A.Ej(this.a.a,this.b.c,"",a)},
$S:7}
A.dN.prototype={
a6(){return"MutationAction."+this.b}}
A.ft.prototype={
gaS(){return this.b.a.a},
eL(){var s=this.d
if(s!=null&&s.e){s=this.gaS()
throw A.b(new A.jx('Cannot mutate "'+s+'" through a read-only Tx.'))}},
iD(a){var s=this
if(s.d!=null)return s.iu(B.a1,a)
return s.a.b1(new A.qE(s,a),B.q,t.H)},
nF(a){var s=this
if(s.d!=null)return s.iu(B.a2,a)
return s.a.b1(new A.qH(s,a),B.q,t.H)},
np(a){var s=this
if(s.d!=null)return s.nq(a)
return s.a.b1(new A.qD(s,a),B.q,t.H)},
nG(a){var s=this
if(s.d!=null)return s.bF(a,B.a2)
return s.a.b1(new A.qG(s,a),B.q,t.H)},
nm(a,b){var s=this
if(s.d!=null)return s.wL(a,b)
return s.a.b1(new A.qA(s,a,b),B.q,t.H)},
nn(a){var s=this
if(s.d!=null)return s.cV(a)
return s.a.b1(new A.qz(s,a),B.q,t.H)},
cV(a){return this.wK(a)},
wK(a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cV=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:p.eL()
if(a7.a===0){s=1
break}o=p.c.b
n=A.n(a7)
m=n.i("S<1>")
l=A.N(new A.S(a7,m),m.i("o.E"))
m=t.N
k=A.u(m,t.G)
j=p.b.a,i=p.a,h=i.cx,i=i.cy,g=j.a,f='SELECT * FROM "'+g+'" WHERE id IN (',e=0
case 3:if(!(d=l.length,e<d)){s=5
break}c=e+2000
b=B.b.U(l,e,B.c.br(c,0,d))
a6=J
s=6
return A.a(o.ae(f+B.b.C(A.a8(b.length,"?",!1,m),", ")+")",b),$async$cV)
case 6:d=a6.E(a9)
case 7:if(!d.k()){s=8
break}a=d.gn()
a0=a.h(0,"id")
a0.toString
k.j(0,A.G(a0),A.bN(j,a,h,i))
s=7
break
case 8:case 4:e=c
s=3
break
case 5:a1=A.u(m,t.o)
a2=A.u(m,t.dZ)
j=k.$ti.i("S<1>")
a3=A.N(new A.S(k,j),j.i("o.E"))
j=t.s,e=0
case 9:if(!(i=a3.length,e<i)){s=11
break}c=e+2000
b=B.b.U(a3,e,B.c.br(c,0,i))
a4=B.b.C(A.a8(b.length,"?",!1,m),", ")
i=A.l([g],j)
B.b.D(i,b)
h="store = ? AND record_id IN ("+a4+")"
a6=J
s=12
return A.a(o.bG("lp_sync_row",h,i),$async$cV)
case 12:f=a6.E(a9)
case 13:if(!f.k()){s=14
break}d=f.gn()
a=d.h(0,"record_id")
a.toString
a1.j(0,A.G(a),A.hm(d))
s=13
break
case 14:a6=J
s=15
return A.a(o.bG("lp_outbox",h,i),$async$cV)
case 15:i=a6.E(a9)
case 16:if(!i.k()){s=17
break}h=i.gn()
f=h.h(0,"record_id")
f.toString
a2.j(0,A.G(f),A.jn(h))
s=16
break
case 17:case 10:e=c
s=9
break
case 11:j=new A.aN(a7,n.i("aN<1,2>")).gt(0)
case 18:if(!j.k()){s=19
break}a5=j.d
i=a5.a
h=a5.b
f=k.h(0,i)
d=a1.h(0,i)
s=20
return A.a(p.cW(i,h,!0,f,a2.h(0,i),d),$async$cV)
case 20:s=18
break
case 19:j=p.d
j.toString
m=A.aO(m)
for(n=new A.bH(a7,a7.r,a7.e,n.i("bH<1>"));n.k();)m.u(0,n.d)
j.a1(new A.a3(g,m))
case 1:return A.e(q,r)}})
return A.f($async$cV,r)},
mJ(a){var s=this
if(s.d!=null)return s.it(B.C,a)
return s.a.b1(new A.qw(s,a),B.q,t.H)},
nz(a){var s=this
if(s.d!=null)return s.it(B.E,a)
return s.a.b1(new A.qF(s,a),B.q,t.H)},
iC(a){var s=this
if(s.d!=null)return s.dt(a)
return s.a.b1(new A.qB(s,a),B.q,t.H)},
dt(a){return this.wS(a)},
wS(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dt=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eL()
s=2
return A.a(q.e1(a),$async$dt)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cF(n,m,a,!0),$async$dt)
case 3:s=4
return A.a(n.X(m,"id = ?",[a]),$async$dt)
case 4:l=t.N
o.a1(new A.a3(m,A.an([a],l)))
if(p!=null){l=A.ca(p.gK(),l)
l.G(0,"id")
o.bE(B.au,l,a,null,p,B.I,m)}return A.e(null,r)}})
return A.f($async$dt,r)},
cW(a,b,c,d,e,f){return this.wN(a,b,c,d,e,f)},
wM(a,b,c){return this.cW(a,b,c,null,null,null)},
wL(a,b){return this.cW(a,b,!1,null,null,null)},
wN(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cW=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p.eL()
s=f!=null||e!=null?3:5
break
case 3:o=e
n=f
s=4
break
case 5:s=6
return A.a(p.c.b.ae("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cW)
case 6:m=h
l=J.K(m)
if(l.gT(m)){k=l.gH(m)
n=A.hm(k)
o=k.h(0,"o_kind")!=null?A.jn(A.m(["store",k.h(0,"o_store"),"record_id",k.h(0,"o_record_id"),"kind",k.h(0,"o_kind"),"payload_json",k.h(0,"o_payload_json"),"base_updated",k.h(0,"o_base_updated"),"base_hash",k.h(0,"o_base_hash"),"dirty_fields",k.h(0,"o_dirty_fields"),"op_id",k.h(0,"o_op_id"),"created_at",k.h(0,"o_created_at"),"updated_at",k.h(0,"o_updated_at"),"depends_on_op",k.h(0,"o_depends_on_op")],t.N,t.X)):null}else{n=null
o=null}case 4:s=n!=null&&n.w===B.H&&o!=null?7:8
break
case 7:s=9
return A.a(p.dW(a,b,n,o,c),$async$cW)
case 9:s=1
break
case 8:s=10
return A.a(p.dQ(a,b,c,o,d,n),$async$cW)
case 10:case 1:return A.e(q,r)}})
return A.f($async$cW,r)},
dQ(a,b,c,d,e,f){return this.qp(a,b,c,d,e,f)},
lK(a,b,c,d,e){return this.dQ(a,b,c,d,null,e)},
qp(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dQ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=e==null?2:4
break
case 2:s=5
return A.a(q.e1(a),$async$dQ)
case 5:s=3
break
case 4:h=e
case 3:m=h
if(m==null)throw A.b(A.jz("No record "+q.gaS()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.c9(m,p,o)
n.D(0,b)
o=A.u(p,o)
o.j(0,"id",a)
o.D(0,n)
s=6
return A.a(q.aO(B.L,c,m,a,d,f,o),$async$dQ)
case 6:return A.e(null,r)}})
return A.f($async$dQ,r)},
dW(a,b,c,d,e){return this.ru(a,b,c,d,e)},
ru(a8,a9,b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$dW=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a6=null
try{a6=B.h.aG(b1.d,null)}catch(b3){a6=null}if(!t.G.b(a6)){q=n.lK(a8,a9,b2,b1,b0)
s=1
break}i=a6.h(0,"id")
if(i!=null&&!J.y(i,a8)){q=n.lK(a8,a9,b2,b1,b0)
s=1
break}h=t.N
g=t.X
f=A.c9(a6,h,g)
f.D(0,a9)
m=f
J.d3(m,"id",a8)
e=new A.a4("")
f=n.b
d=f.a
c=A.Ca(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.c9(m,h,g)
b.G(0,"id")
a0=n.hC(a8,b,a,c)
s=a0 instanceof A.w?3:4
break
case 3:s=5
return A.a(a0,$async$dW)
case 5:case 4:a1=n.lE(a6,m,B.L)
l=null
b=a1.length===1&&d.gdi().E(0,B.b.gaq(a1))
a2=n.a
a3=a2.cx
a4=a2.cy
if(b){a5=d.eh(B.b.gaq(a1))
b=a5.a
l=A.m([b,A.Eh(d,a5,J.V(m,b),a3,a4,a8),"hidden",0],h,g)}else l=A.dt(d,J.y(J.V(m,"archived"),!0),a3,a4,a8,m)
p=7
s=10
return A.a(n.c.b.L(d.a,l,"id = ?",[a8]),$async$dW)
case 10:p=2
s=9
break
case 7:p=6
a7=o.pop()
k=A.D(a7)
h=A.HP(k,m)
throw A.b(h)
s=9
break
case 6:s=2
break
case 9:g=a2.dx
g===$&&A.t()
b=l
s=11
return A.a(g.bq(B.L,null,a1,n.c.b,a8,m,a6,b1,a,b,b0,f),$async$dW)
case 11:if(!b2){g=n.d
if(g!=null)g.a1(new A.a3(d.a,A.an([a8],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g){g=a6
h.bE(B.A,A.mG(a1,A.a0(a1).c),a8,m,g,B.I,d.a)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dW,r)},
aO(a,b,c,d,e,f,g){return this.wx(a,b,c,d,e,f,g)},
iu(a,b){var s=null
return this.aO(a,!1,s,s,s,s,b)},
it(a,b){var s=null
return this.aO(a,!1,s,b,s,s,s)},
wv(a,b,c){var s=null
return this.aO(a,b,s,s,s,s,c)},
ww(a,b,c,d,e,f){return this.aO(a,b,c,null,d,e,f)},
wx(c0,c1,c2,c3,c4,c5,c6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$aO=A.c(function(c7,c8){if(c7===1){o.push(c8)
s=p}for(;;)switch(s){case 0:b8={}
n.eL()
m=null
b8.a=c2
l=null
b8.b=b8.c=null
i=new A.qy(b8,n,c5,c4)
s=c0===B.a1?3:5
break
case 3:h=A.a7(c6.h(0,"id"))
if(h==null)h=A.i5()
g=$.pN()
if(!g.b.test(h))throw A.b(A.U('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aO)
case 6:l=n.eO(c6,m)
c0=b8.a==null?B.bc:B.L
s=4
break
case 5:s=c0===B.L?7:9
break
case 7:c3.toString
m=c3
s=10
return A.a(i.$1(m),$async$aO)
case 10:if(b8.a==null)throw A.b(A.jz("No record "+n.gaS()+"/"+A.q(m)+" to update."))
c6.toString
l=n.eO(c6,m)
s=8
break
case 9:s=c0===B.a2?11:13
break
case 11:h=A.a7(c6.h(0,"id"))
if(h==null)h=A.i5()
g=$.pN()
if(!g.b.test(h))throw A.b(A.U('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aO)
case 14:g=b8.a
if(g==null){l=n.eO(c6,m)
c0=B.bc}else{l=A.c9(g,t.N,t.X)
for(g=new A.aN(c6,A.n(c6).i("aN<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.d3(l,e,f.b)}c0=B.L}s=12
break
case 13:c3.toString
m=c3
s=15
return A.a(i.$1(m),$async$aO)
case 15:g=b8.a
if(g==null)throw A.b(A.jz("No record "+n.gaS()+"/"+A.q(m)+" to archive/restore."))
g=A.c9(g,t.N,t.X)
g.j(0,"archived",c0===B.C)
l=g
case 12:case 8:case 4:d=new A.a4("")
g=n.b
e=g.a
c=l
b=A.Ca(d,e,c,J.au(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
a0=n.hC(m,l,a,b)
s=a0 instanceof A.w?16:17
break
case 16:s=18
return A.a(a0,$async$aO)
case 18:case 17:s=b8.a==null?19:21
break
case 19:a1=null
s=20
break
case 21:c=c5==null?b8.c:c5
s=c==null?22:24
break
case 22:c=n.a.dx
c===$&&A.t()
s=25
return A.a(c.bY(n.c.b,e.a,m),$async$aO)
case 25:c=c8
a1=c
s=23
break
case 24:a1=c
case 23:case 20:s=b8.a==null?26:28
break
case 26:a2=null
s=27
break
case 28:c=c4==null?b8.b:c4
s=c==null?29:31
break
case 29:c=n.a.dx
c===$&&A.t()
s=32
return A.a(c.ex(n.c.b,e.a,m),$async$aO)
case 32:c=c8
a2=c
s=30
break
case 31:a2=c
case 30:case 27:c=a1==null
a3=!c
if(a3&&a1.w===B.a7)throw A.b(A.ET("Record "+n.gaS()+"/"+A.q(m)+u.W))
a4=b8.a
a5=a4!=null
if(a5)a6=!a3||a1.w===B.z
else a6=!1
if(a5&&a6){a7=A.ai(A.bj(e,a4))
a3=A.at(B.m.A(B.e.A(a7)).a)
a8=new A.q8(a7,a3,c?null:a1.c)}else a8=null
c=m
a3=l
a4=n.a
a5=a4.cx
a9=a4.cy
b0=A.dt(e,J.y(J.V(l,"archived"),!0),a5,a9,c,a3)
b1=n.lE(b8.a,l,c0)
k=null
if(b8.a!=null&&b1.length===1&&e.gdi().E(0,B.b.gaq(b1))){b2=e.eh(B.b.gaq(b1))
c=b2.a
k=A.m([c,A.Eh(e,b2,J.V(l,c),a5,a9,m),"hidden",0],t.N,t.X)}else k=b0
p=34
c=e.a
a3=n.c.b
s=b8.a==null?37:39
break
case 37:s=40
return A.a(a3.aE(0,c,k),$async$aO)
case 40:s=38
break
case 39:s=41
return A.a(a3.L(c,k,"id = ?",[m]),$async$aO)
case 41:case 38:p=2
s=36
break
case 34:p=33
b9=o.pop()
j=A.D(b9)
g=A.HP(j,l)
throw A.b(g)
s=36
break
case 33:s=2
break
case 36:c=a4.dx
c===$&&A.t()
a3=m
a4=b8.a
s=42
return A.a(c.bq(c0,a8,b1,n.c.b,a3,l,a4,a2,a,b0,a1,g),$async$aO)
case 42:b4=c8
b5=b4.a
if(b5)b6=B.au
else switch(c0.a){case 2:case 0:case 1:b6=b8.a==null?B.ae:B.A
break
case 3:b6=B.A
break
case 4:b6=B.cb
break
case 5:b6=B.cc
break
default:b6=null}if(b5){g=A.aO(t.N)
c=b8.a
c=J.E((c==null?l:c).gK())
while(c.k()){a3=c.gn()
if(a3!=="id")g.u(0,a3)}b7=g}else if(c0===B.C||c0===B.E)b7=A.an(["archived"],t.N)
else if(b8.a==null){g=l
c=A.n(g).i("S<1>")
a3=c.i("ao<o.E>")
b7=A.ca(new A.ao(new A.S(g,c),new A.qx(),a3),a3.i("o.E"))}else b7=A.mG(b1,A.a0(b1).c)
g=n.d
c=g==null
if(!c){a3=m
a4=b8.a
a5=b5?null:l
g.bE(b6,b7,a3,a5,a4,B.I,e.a)}if(!c1)if(!c)g.a1(new A.a3(e.a,A.an([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aO,r)},
bF(a,b){return this.wV(a,b)},
nq(a){return this.bF(a,B.a1)},
wV(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bF=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eL()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.l([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.p)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a7(a0)
a2=a1?A.i5():a0
a1=$.pN()
if(!a1.b.test(a2))throw A.b(A.U('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aM(l,new A.a6(a2,a))}if(!c){a3=A.u(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.am(a3,a3.$ti.i("am<2>")).bp(0,new A.qC())}else a5=!1
s=c3===B.a1&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.e0(m,l),$async$bF)
case 9:k=A.aO(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aM(k,i)}g.a1(new A.a3(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.D(c0) instanceof A.hy))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.u(k,t.G)
j=n.a,d=j.cx,j=j.cy,a1=t.s,a8=0
case 10:if(!(a8<J.au(l))){s=12
break}a9=a8+2000
b0=B.c.br(a9,0,J.au(l))
a4=A.l([],a1)
for(b1=J.IJ(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.p)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.bG(e,"id IN ("+B.b.C(A.a8(a4.length,"?",!1,k),", ")+")",a4),$async$bF)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.G(b2),A.bN(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.u(k,t.o)
b4=A.u(k,t.dZ)
j=a7.$ti.i("S<1>")
b5=A.N(new A.S(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.U(b5,a8,B.c.br(a9,0,j))
b7=B.b.C(A.a8(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.D(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.bG("lp_sync_row",f,j),$async$bF)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.G(b1),A.hm(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.bG("lp_outbox",f,j),$async$bF)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.G(d),A.jn(f))
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
return A.a(n.wv(c3,!0,a1),$async$bF)
case 31:s=29
break
case 30:a1=A.dI(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.ww(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bF)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.p)(j),++b
s=25
break
case 27:g.a1(new A.a3(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bF,r)},
e0(a,b){return this.rQ(a,b)},
rQ(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$e0=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.iy?3:4
break
case 3:s=5
return A.a(n.dd(a6,a7),$async$e0)
case 5:s=1
break
case 4:m=n.a.db.$0()
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
return A.a(n.dL(a6,a4,h,g,m),$async$e0)
case 13:e=a9
if(l)J.aM(k,new A.a6(h,e));++j
case 11:a7.length===a0||(0,A.p)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.D(a5) instanceof A.ce?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aM(d,a7[c].a)
b=d
s=17
return A.a(n.d9(a6,b),$async$e0)
case 17:throw A.b(new A.hy())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.p)(i),++a1){a3=i[a1]
a.ki(B.ae,a3.a,a3.b,null,B.I,a0)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e0,r)},
dd(a,b){return this.rR(a,b)},
rR(d7,d8){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6
var $async$dd=A.c(function(d9,e0){if(d9===1){p.push(e0)
s=q}for(;;)switch(s){case 0:d0=o.b.a
d1=o.a
d2=d1.db.$0()
d3=o.c.b
d4=t.s
d5=A.l(["id"],d4)
for(a8=d0.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.p)(a8),++b0)d5.push(a8[b0].a)
d5.push("extra")
d5.push("archived")
d5.push("hidden")
n=d5
d5=d0.a
m='INSERT INTO "'+d5+'" ('+A.i9(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.i9(B.a0)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i9(B.a_)+") VALUES "
j=new A.qv()
b1=new A.a4("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=d0.z!=null||b2
b4=b2?A.l([],t.jO):null
i=0,a9=b4==null,b5=d1.cx,b6=d1.cy,b7=d0.b
case 2:if(!(b8=i,b9=d8.length,b8<b9)){s=4
break}h=B.w.br(i+500,0,b9)
g=h-i
f=[]
e=[]
d=[]
c0=i
case 5:if(!(c0<h)){s=7
break}c1=d8[c0]
c2=c1.a
c3=c1.b
c4=b3?o.eO(c3,c2):c3
b1.a=""
c5=A.Ca(b1,d0,c4,c2)
b8=b1.a
c6=b8.charCodeAt(0)==0?b8:b8
c7=o.hC(c2,c4,c6,c5)
s=c7 instanceof A.w?8:9
break
case 8:s=10
return A.a(c7,$async$dd)
case 10:case 9:A.N3(f,d0,J.y(c4.h(0,"archived"),!0),b5,b6,c2,c4)
b8=d1.dx
b8===$&&A.t()
c8=b8.fU()
A.Hf(e,"",null,d2,null,'["*"]',B.v,c8,c6,c2,d5,d2)
A.Hg(d,B.a8,0,"",null,null,'["*"]',null,null,1,0,c8,c2,null,b7,d5,B.H)
if(!a9)b4.push(new A.a6(c2,c4))
case 6:++c0
s=5
break
case 7:c=!1
b=!1
q=12
b8=d3.cp(A.q(m)+A.q(j.$2(J.au(n),g)))
if(b8.r||b8.b.r)A.v(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eI(new A.bR(f))
b8.hd()
c=!0
b8=d3.cp(A.q(l)+A.q(j.$2(11,g)))
if(b8.r||b8.b.r)A.v(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eI(new A.bR(e))
b8.hd()
b=!0
b8=d3.cp(A.q(k)+A.q(j.$2(16,g)))
if(b8.r||b8.b.r)A.v(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eI(new A.bR(d))
b8.hd()
q=1
s=14
break
case 12:q=11
d6=p.pop()
s=A.D(d6) instanceof A.ce?15:17
break
case 15:a=A.l([],d4)
for(a0=0;a0<i;++a0)J.aM(a,d8[a0].a)
a1=a
s=18
return A.a(o.d9(d7,a1),$async$dd)
case 18:s=c||b?19:20
break
case 19:a2=A.l([],d4)
for(a3=i;a3<h;++a3)J.aM(a2,d8[a3].a)
a4=a2
a5=B.b.C(A.a8(J.au(a4),"?",!1,t.N),", ")
s=c?21:22
break
case 21:s=23
return A.a(d7.X(d5,"id IN ("+A.q(a5)+")",a4),$async$dd)
case 23:case 22:s=b?24:25
break
case 24:a6=A.l([d5],d4)
J.EB(a6,a4)
a7=a6
s=26
return A.a(d7.X("lp_outbox","store = ? AND record_id IN ("+A.q(a5)+")",a7),$async$dd)
case 26:case 25:case 20:throw A.b(new A.hy())
s=16
break
case 17:throw d6
case 16:s=14
break
case 11:s=1
break
case 14:case 3:i+=500
s=2
break
case 4:if(b2)for(a=b4.length,b0=0;b0<b4.length;b4.length===a||(0,A.p)(b4),++b0){a2=b4[b0]
a8.ki(B.ae,a2.a,a2.b,null,B.I,d5)}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dd,r)},
dL(a,b,c,d,e){return this.pu(a,b,c,d,e)},
pu(a9,b0,b1,b2,b3){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$dL=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eO(b2,b1)
a3=new A.a4("")
a4=A.Ca(a3,a1,a2,b1)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
a7=n.hC(b1,a2,a6,a4)
s=a7 instanceof A.w?3:4
break
case 3:s=5
return A.a(a7,$async$dL)
case 5:case 4:a5=n.a
m=A.dt(a1,J.y(a2.h(0,"archived"),!0),a5.cx,a5.cy,b1,a2)
a5=a5.dx
a5===$&&A.t()
e=a5.fU()
a5=a1.a
l=A.Hj("",null,b3,'["*"]',B.v,e,a6,b1,a5,b3)
k=A.Nn('["*"]',1,e,b1,a1.b,a5,B.H)
j=!1
i=!1
p=7
d=m
c=A.n(d).i("S<1>")
b=t.N
h=A.dK(new A.S(d,c),new A.qt(),c.i("o.E"),b).C(0,", ")
g=B.b.C(A.a8(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.q(h)+") VALUES ("+A.q(g)+")"
c=b0.cp(f)
d=m
a=A.n(d).i("am<2>")
d=A.N(new A.am(d,a),a.i("o.E"))
c.ef(new A.bR(d))
j=!0
b0.cp("INSERT INTO lp_outbox ("+A.i9(B.a0)+") VALUES ("+B.b.C(A.a8(11,"?",!1,b),", ")+")").ef(new A.bR(A.HJ(l,B.a0)))
i=!0
b0.cp("INSERT INTO lp_sync_row ("+A.i9(B.a_)+") VALUES ("+B.b.C(A.a8(16,"?",!1,b),", ")+")").ef(new A.bR(A.HJ(k,B.a_)))
p=2
s=9
break
case 7:p=6
a8=o.pop()
s=j?10:11
break
case 10:s=12
return A.a(a9.X(a5,"id = ?",[b1]),$async$dL)
case 12:case 11:s=i?13:14
break
case 13:s=15
return A.a(a9.X("lp_outbox","store = ? AND record_id = ?",[a5,b1]),$async$dL)
case 15:case 14:throw a8
s=9
break
case 6:s=2
break
case 9:q=a2
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dL,r)},
d9(a,b){return this.q8(a,b)},
q8(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$d9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.C(A.a8(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.X(m,"id IN ("+o+")",b),$async$d9)
case 3:m=A.l([m],t.s)
B.b.D(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.X("lp_outbox",n,m),$async$d9)
case 4:s=5
return A.a(a.X("lp_sync_row",n,m),$async$d9)
case 5:case 1:return A.e(q,r)}})
return A.f($async$d9,r)},
eO(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=a.ga_(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.nr("archived",new A.qu())
return p},
lE(a,b,c){var s,r,q,p,o
if(a==null)return B.cZ
s=t.N
r=A.aO(s)
s=A.ca(a.gK(),s)
s.D(0,new A.S(b,A.n(b).i("S<1>")))
for(s=A.e6(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.p.V(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.N(r,r.$ti.c)
B.b.aJ(o)
return o},
e1(a){return this.rV(a)},
rV(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$e1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ae('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$e1)
case 3:m=c
l=J.K(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.bN(n,l.gH(m),o.cx,o.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e1,r)},
hr(a){return this.rD(a)},
rD(a){var s=0,r=A.h(t.nw),q,p=this,o,n,m,l,k,j
var $async$hr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ae('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hr)
case 3:j=c
k=J.K(j)
if(k.gF(j)){q=B.dH
s=1
break}o=k.gH(j)
k=p.a
n=A.bN(l,o,k.cx,k.cy)
m=o.h(0,"s_sync_state")!=null?A.hm(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.e8(n,m,o.h(0,"o_kind")!=null?A.jn(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
bI(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.I(a)){q=p.b.e.bI(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ae("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bI)
case 6:s=4
break
case 5:s=7
return A.a(k.ae('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bI)
case 7:case 4:j=c
l=J.K(j)
if(l.gF(j)){if(f)o.e.l_(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.bN(n,i,l.cx,l.cy)
g=A.bh(i.h(0,"lp_schema_ver"))
if(g==null)g=1
s=g<m?8:9
break
case 8:s=10
return A.a(A.C6(n,h,g,m),$async$bI)
case 10:h=c
case 9:if(f)o.e.l_(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bI,r)},
hC(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=this.b.a,r=s.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
n=o.a
m=b.h(0,n)
if(o.c&&m==null)throw A.b(A.U('Field "'+n+'" is required.',n))
if(m==null)continue
l=A.Ei(o,m)
if(l!=null)throw A.b(A.U(A.IY(o,l),n))}k=s.z
if(k!=null){j=k.$1(b)
if(t.fB.b(j))return this.hD(j,b,c,d)
s=J.K(j)
if(s.gT(j))throw A.b(A.U(s.C(j,"; "),null))}this.mB(b,c,d)},
hD(a,b,c,d){return this.tL(a,b,c,d)},
tL(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o
var $async$hD=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a,$async$hD)
case 2:p=f
o=J.K(p)
if(o.gT(p))throw A.b(A.U(o.C(p,"; "),null))
q.mB(b,c,d)
return A.e(null,r)}})
return A.f($async$hD,r)},
mB(a,b,c){var s=this.a.as
if(c>s)throw A.b(A.U("Document exceeds max size ("+c+" > "+s+" bytes).",null))}}
A.qE.prototype={
$1(a){return a.bs(this.a.b.a.a).iD(this.b)},
$S:4}
A.qH.prototype={
$1(a){return a.bs(this.a.b.a.a).nF(this.b)},
$S:4}
A.qD.prototype={
$1(a){return a.bs(this.a.b.a.a).np(this.b)},
$S:4}
A.qG.prototype={
$1(a){return a.bs(this.a.b.a.a).nG(this.b)},
$S:4}
A.qA.prototype={
$1(a){return a.bs(this.a.b.a.a).nm(this.b,this.c)},
$S:4}
A.qz.prototype={
$1(a){return a.bs(this.a.b.a.a).nn(this.b)},
$S:4}
A.qw.prototype={
$1(a){return a.bs(this.a.b.a.a).mJ(this.b)},
$S:4}
A.qF.prototype={
$1(a){return a.bs(this.a.b.a.a).nz(this.b)},
$S:4}
A.qB.prototype={
$1(a){return a.bs(this.a.b.a.a).iC(this.b)},
$S:4}
A.qy.prototype={
nN(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.e1(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hr(a),$async$$1)
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
$1(a){return this.nN(a)},
$S:131}
A.qx.prototype={
$1(a){return a!=="id"},
$S:13}
A.qC.prototype={
$1(a){return a>1},
$S:132}
A.qv.prototype={
$2(a,b){var s=t.N
return B.b.C(A.a8(b,"("+B.b.C(A.a8(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:133}
A.qt.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.qu.prototype={
$0(){return!1},
$S:48}
A.hy.prototype={$iH:1}
A.oC.prototype={}
A.pW.prototype={
b_(a,b){var s=this.a.W(new A.pX(a,b),b)
this.a=s.b0(new A.pY(b),new A.pZ(),t.H)
return s}}
A.pX.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("x<0>(~)")}}
A.pY.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.pZ.prototype={
$2(a,b){},
$S:6}
A.bl.prototype={
gnx(){var s=this.e
return s.gm(s)===1&&J.y(s.h(0,"__lp_deleted__"),!0)}}
A.qT.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.G(d)
s=e.h(0,"record_id")
s.toString
A.G(s)
r=A.Ci(e.h(0,l),l,k)
q=A.Ci(e.h(0,j),j,k)
p=A.Ci(e.h(0,i),i,k)
o=A.Hp(e.h(0,h),h,k)
n=A.Hp(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ap(m)
return new A.bl(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Ci(e.h(0,f),f,k):null)},
$S:135}
A.qU.prototype={
fo(a){return this.wj(a)},
wj(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.t()
m=m.gbu()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.wW("lp_conflicts","detected_at ASC",n,o),$async$fo)
case 3:o=l.c3(c,A.Nt(),t.n8)
m=A.N(o,o.$ti.i("a1.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
dD(a,b){return this.ow(a,b)},
ow(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.t()
s=3
return A.a(n.gbu().b.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dD)
case 3:o=d
n=J.K(o)
if(n.gF(o)){q=null
s=1
break}q=A.D4(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dD,r)},
xG(a){var s={},r=A.oB()
s.a=null
r.si5(A.dT(new A.qX(s,r),new A.qY(s,this,a,new A.qZ(this,r,a)),t.ba))
return r.aD().gcs()},
ez(a,b,c){return this.xl(a,b,c)},
xl(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ez=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.av(c)
s=2
return A.a(p.a0(new A.qV(q,c,a,o.a,o,b),t.P),$async$ez)
case 2:return A.e(null,r)}})
return A.f($async$ez,r)},
f2(a,b){return this.u1(a,b)},
u1(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$f2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dD(a,b),$async$f2)
case 2:p=d
if(p==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=3
return A.a(q.ez(b,p.d,a),$async$f2)
case 3:return A.e(null,r)}})
return A.f($async$f2,r)},
e8(a,b){return this.u2(a,b)},
u2(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$e8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dD(a,b),$async$e8)
case 3:o=d
if(o==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=o.gnx()?4:5
break
case 4:s=6
return A.a(p.a.bs(a).iC(b),$async$e8)
case 6:s=1
break
case 5:s=7
return A.a(p.ez(b,o.e,a),$async$e8)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e8,r)}}
A.qZ.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.aD().gim()){s=1
break}p=4
s=7
return A.a(n.a.fo(n.c),$async$$0)
case 7:m=b
if(!i.aD().gim())J.aM(i.aD(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.D(h)
k=A.ad(h)
if(!i.aD().gim())i.aD().bg(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.qY.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b4(p,A.n(p).i("b4<1>")).aW(new A.qW(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qW.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:37}
A.qX.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.v()
s=2
return A.a(p instanceof A.w?p:A.bB(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.aD().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qV.prototype={
$1(a){return this.nO(a)},
nO(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.K(a3)
if(a4.gF(a3))throw A.b(A.A("No conflict found for "+a1+"/"+a2))
o=A.D4(a4.gH(a3))
n=o.gnx()
m=n?null:A.ai(o.e)
l=n?"":A.at(B.m.A(B.e.A(A.ai(A.bj(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aI(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bD(a8)?4:5
break
case 4:s=7
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.X("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.X("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a1(new A.a3(a1,A.an([a2],a4)))
a6.a1(new A.a3("lp_conflicts",A.an([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aI("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.K(k)
if(i.gT(k)){h=A.a7(J.V(i.gH(k),"base_updated"))
i=h==null?A.a7(J.V(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.c9(p.f,i,h)
g.j(0,"id",a2)
f=J.y(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dt(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bL(n?B.k:o.e,g)
d=A.N(a4,A.n(a4).c)
B.b.aJ(d)
c=A.ai(A.bj(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a8(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aI("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bD(a8)?14:16
break
case 14:a4=p.a.a
b=a4.db.$0()
h=f?B.M:B.v
e=B.h.a8(d,null)
a4=a4.dx
a4===$&&A.t()
s=18
return A.a(a0.aE(0,"lp_outbox",A.Hj(l,j,b,e,h,a4.fU(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a1(new A.a3(a1,A.an([a2],i)))
a6.a1(new A.a3("lp_conflicts",A.an([a2],i)))
a4=o.d
a=A.bL(a4,g)
a.G(0,"id")
a6.bE(B.A,a,a2,g,a4,B.af,a1)
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.nJ.prototype={
aB(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aB=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dT(null,null,t.n6)
n.ay=A.dT(null,null,t.ic)}n.z=!0
s=3
return A.a(n.aN(B.dQ),$async$aB)
case 3:p=5
l=n.b
s=8
return A.a(l.iz(),$async$aB)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.t()
k.f=l.ax
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
n.fr=new A.b4(l,A.n(l).i("b4<1>")).aW(n.gvX())
l=n.b.CW
n.fx=new A.b4(l,A.n(l).i("b4<1>")).aW(n.gvV())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aK(),$async$aB)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.yf(B.U,new A.ya(n))
s=14
return A.a(n.aN(n.dO()),$async$aB)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.c8("cycle")
s=17
return A.a(n.eY(),$async$aB)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aB,r)},
aK(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1;++p.db
o=p.fy
if(o!=null)o.v()
o=p.go
if(o!=null)o.v()
o=p.id
if(o!=null)o.v()
o=p.k1
if(o!=null)o.v()
s=3
return A.a(p.k4,$async$aK)
case 3:s=4
return A.a(p.dx,$async$aK)
case 4:s=5
return A.a(p.dy.a,$async$aK)
case 5:s=6
return A.a(p.p2,$async$aK)
case 6:o=p.fr
o=o==null?null:o.v()
n=t.H
s=7
return A.a(o instanceof A.w?o:A.bB(o,n),$async$aK)
case 7:o=p.fx
o=o==null?null:o.v()
s=8
return A.a(o instanceof A.w?o:A.bB(o,n),$async$aK)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.N
o.u(0,B.N)
s=12
return A.a(p.ax.q(),$async$aK)
case 12:s=10
break
case 11:p.y=B.N
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aK)
case 15:case 14:p.y=B.N
case 1:return A.e(q,r)}})
return A.f($async$aK,r)},
dO(){if(this.at)return B.bp
if(this.Q)return B.bm
if(this.as)return B.aG
return B.bn},
aN(a){return this.tD(a)},
tD(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.qg(),$async$aN)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aN,r)},
qg(){return this.p2=this.p2.W(new A.y0(this),t.H)},
h9(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$h9=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=n.z
if(!g){s=1
break}m=0
l=0
k=0
j=0
p=4
g=n.e
g===$&&A.t()
s=7
return A.a(g.hU(),$async$h9)
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
if((g.c&4)===0)g.u(0,new A.eR(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h9,r)},
vY(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.c8("push")
s.td(B.ah)},
vW(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.fy.I(s))return
r=a.c
if(r!=null&&a.b===B.ac){q.c8("fast:"+s)
q.dx=q.dx.W(new A.y8(q,r),t.H)
return}q.c8("pull:"+s)
q.hz(B.ah,A.l([s],t.s))},
he(a){return this.qq(a)},
qq(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$he=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hz(B.ah,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.t()
s=7
return A.a(l.i3(a),$async$he)
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
break}if(!m)n.hz(B.ah,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$he,r)},
w5(){if(!this.z)return
this.c8("cycle")
this.mj()},
hz(a,b){var s=this,r=s.go
if(r!=null)r.v()
if(b==null)s.k2=!0
else s.k3.D(0,b)
s.go=A.bX(a,new A.y7(s))},
td(a){return this.hz(a,null)},
tc(a){var s=this.id
if(s!=null)s.v()
this.id=A.bX(B.D,new A.y6(this,a))},
jF(){this.as=!0
this.aN(B.aG)
A.iK(this.d,t.H)},
ep(){var s=0,r=A.h(t.H),q,p=this,o
var $async$ep=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.dx
o===$&&A.t()
s=3
return A.a(o.xj(),$async$ep)
case 3:s=4
return A.a(p.aN(p.dO()),$async$ep)
case 4:p.c8("cycle")
s=5
return A.a(p.eY(),$async$ep)
case 5:case 1:return A.e(q,r)}})
return A.f($async$ep,r)},
fZ(a){return this.oI(a)},
oI(a){var s=0,r=A.h(t.H),q=this,p
var $async$fZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.v()
q.k1=A.bX(B.aw,new A.y9(q))
s=3
break
case 4:s=5
return A.a(q.aN(B.bm),$async$fZ)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fZ,r)},
b4(){var s=0,r=A.h(t.H),q=this
var $async$b4=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aN(B.bp),$async$b4)
case 2:return A.e(null,r)}})
return A.f($async$b4,r)},
aY(){var s=0,r=A.h(t.H),q,p=this
var $async$aY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aN(p.dO()),$async$aY)
case 3:p.c8("cycle")
s=4
return A.a(p.eY(),$async$aY)
case 4:case 1:return A.e(q,r)}})
return A.f($async$aY,r)},
ml(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.v()}s=t.fD
r=q.k4.W(new A.y3(q,a),s)
q.k4=r.b0(new A.y4(),new A.y5(),s)
return r},
eY(){return this.ml(null)},
c8(a){var s,r=this.p1
r.push(a)
s=r.length
if(s>1000)B.b.iJ(r,0,s-1000)},
jO(a){this.ml(a).b0(new A.y1(),new A.y2(this),t.H)},
mj(){return this.jO(null)},
ba(a){return this.qd(a)},
qd(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$ba=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aN(n.dO()),$async$ba)
case 5:q=B.O
s=1
break
case 4:b3=t.N
a4=t.S
m=A.u(b3,a4)
l=A.u(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
s=6
return A.a(n.aN(B.dR),$async$ba)
case 6:b3=b8==null
if(b3){a4=n.a.fy
a5=A.n(a4).i("S<1>")
a6=A.N(new A.S(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.t()
s=14
return A.a(a5.ds(h),$async$ba)
case 14:g=c0
J.d3(m,h,g.b)
if(g.f&&g.b>0)J.aM(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.D(b4)
if(a5 instanceof A.c4){n.jF()
s=9
break}else if(a5 instanceof A.br){f=a5
k=!0
j=!0
n.ch=f.a}else throw b4
s=13
break
case 10:s=2
break
case 13:case 8:a6.length===a4||(0,A.p)(a6),++a7
s=7
break
case 9:s=n.as?15:16
break
case 15:s=17
return A.a(n.aN(B.aG),$async$ba)
case 17:q=n.ok=new A.b8(m,B.an,0,0,0,0,!0)
s=1
break
case 16:s=b3?18:19
break
case 18:p=21
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.t()
s=24
return A.a(b3.dI(e),$async$ba)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.V(l,c.a)
if(a5==null)a5=0
J.d3(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.D(b5)
if(b3 instanceof A.br){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aN(B.dS),$async$ba)
case 25:a=B.a5
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.t()
s=33
return A.a(b3.fC(),$async$ba)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.x.b5("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$ba)
case 36:a0=c0
if(J.du(a0)&&typeof J.V(J.bP(a0),"last_error")=="string"){b3=J.V(J.bP(a0),"last_error")
b3.toString
n.ch=A.G(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.D(b6)
if(b3 instanceof A.c4)n.jF()
else if(b3 instanceof A.br){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b3=n.x
b3===$&&A.t()
s=41
return A.a(b3.by(),$async$ba)
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
n.ch=A.q(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.O
s=1
break}if(J.au(i)!==0)n.tc(i)
a9=k||a.f
b0=new A.aG(A.lQ(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dO()
s=42
return A.a(n.aN(a9&&b1===B.bn?B.bo:b1),$async$ba)
case 42:q=n.ok=new A.b8(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ba,r)}}
A.ya.prototype={
$1(a){return this.a.w5()},
$S:29}
A.y0.prototype={
$1(a){return this.a.h9()},
$S:40}
A.y8.prototype={
$1(a){return this.a.he(this.b)},
$S:40}
A.y7.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.N(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jC()}if(r||p.length===0)s.mj()
else s.jO(p)},
$S:0}
A.y6.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jO(this.b)},
$S:0}
A.y9.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aN(p.dO()),$async$$0)
case 2:p.c8("cycle")
s=3
return A.a(p.eY(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.y3.prototype={
$1(a){return this.a.ba(this.b)},
$S:139}
A.y4.prototype={
$1(a){return B.O},
$S:140}
A.y5.prototype={
$1(a){return B.O},
$S:141}
A.y1.prototype={
$1(a){},
$S:142}
A.y2.prototype={
$2(a,b){var s=this.a
if(s.ch==null)s.ch=A.q(a)
s.aN(B.bo)},
$S:6}
A.d8.prototype={
l(a){return"MapFailure: "+this.a},
$iH:1}
A.eI.prototype={}
A.Ce.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.Cf.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.j2.prototype={}
A.aQ.prototype={}
A.bw.prototype={}
A.h7.prototype={
ak(a){var s=A.c9(a.c,t.N,t.X)
s.D(0,a.d)
s.D(0,a.e)
return new A.aQ(s,!1,null)}}
A.fO.prototype={
ak(a){var s=A.c9(a.c,t.N,t.X)
s.D(0,a.e)
s.D(0,a.d)
return new A.aQ(s,!1,null)}}
A.hd.prototype={
ak(a){return B.Q.ak(a)},
fI(a,b,c){var s,r,q,p,o,n=t.j,m=n.b(a)?a:B.j,l=n.b(b)?b:B.j,k=n.b(c)?c:B.j,j=J.D1(m),i=J.D1(l),h=J.D1(k),g=i.f9(j),f=h.f9(j),e=j.f9(i),d=j.f9(h)
n=t.X
s=A.ca(e,n)
s.D(0,d)
r=j.nE(g).nE(f).f9(s)
q=[]
n=A.N(l,n)
B.b.D(n,k)
B.b.D(n,m)
s=n.length
p=0
for(;p<n.length;n.length===s||(0,A.p)(n),++p){o=n[p]
if(r.E(0,o)&&!B.b.E(q,o))q.push(o)}return q}}
A.et.prototype={
ak(a){return B.Q.ak(a)}}
A.ej.prototype={
ak(a){return B.Q.ak(a)},
fI(a,b,c){var s,r,q,p=t.j,o=p.b(a)?a:B.j,n=p.b(b)?b:B.j,m=p.b(c)?c:B.j,l=[]
p=A.N(o,t.X)
B.b.D(p,n)
B.b.D(p,m)
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.p)(p),++r){q=p[r]
if(!B.b.bp(l,new A.pV(q)))l.push(q)}return l}}
A.pV.prototype={
$1(a){return B.p.V(a,this.a)},
$S:15}
A.fo.prototype={
ak(a){return B.Q.ak(a)},
fI(a,b,c){var s,r,q,p=typeof a=="string"?a:"",o=typeof b=="string"?b:"",n=typeof c=="string"?c:"",m=A.l([],t.s),l=new A.pU(m)
for(s=p.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=o.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=n.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
return B.b.C(m,"\n")}}
A.pU.prototype={
$1(a){var s=B.a.c0(a)
if(s.length!==0&&!B.b.E(this.a,s))this.a.push(s)},
$S:144}
A.lJ.prototype={
ak(a){return this.a.$1(a)}}
A.mJ.prototype={}
A.AT.prototype={}
A.AR.prototype={}
A.z9.prototype={}
A.vC.prototype={
$1(a){if(a==null)return new A.aQ(A.Nu(this.a,this.b,this.c),!0,"Collection resolver declined resolution")
return new A.aQ(a.a,a.b,a.c)},
$S:145}
A.vA.prototype={
$1(a){return a!=="archived"},
$S:13}
A.vB.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.vz(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:146}
A.vt.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vu.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vv.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vw.prototype={
$1(a){return a instanceof A.w?a:A.bd(a,t.X)},
$S:147}
A.vx.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.e6(s,s.r,A.n(s).c),r=this.b,q=J.K(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:148}
A.vy.prototype={
$1(a){if(a==null||a.b){this.a.a=!0
return this.b}return a.a.h(0,this.c)},
$S:149}
A.vT.prototype={
fc(a){return this.vh(a)},
vh(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.db.$0()
e=e.x
s=3
return A.a(e.wY("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$fc)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.E(o);l.k();)m.push(A.JX(l.gn()))
l=A.aO(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.p)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.kV(e,l),$async$fc)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.p)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.E(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fc,r)},
nj(a){return this.a.a0(new A.vV(a),t.H)},
ws(a,b,c,d){return this.a.a0(new A.vW(c,d,b,a),t.H)}}
A.vV.prototype={
$1(a){return this.o3(a)},
o3(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vW.prototype={
$1(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.q8.prototype={}
A.iZ.prototype={}
A.jw.prototype={}
A.vY.prototype={
fU(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cS(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
ex(a,b,c){return this.x8(a,b,c)},
x8(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$ex=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aI("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$ex)
case 3:p=e
o=J.K(p)
q=o.gF(p)?null:A.jn(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
bY(a,b,c){return this.xa(a,b,c)},
xa(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aI("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bY)
case 3:p=e
o=J.K(p)
q=o.gF(p)?null:A.hm(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bY,r)},
bq(a,b,c,d,e,f,g,h,i,j,k,l){return this.ud(a,b,c,d,e,f,g,h,i,j,k,l)},
ud(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bq=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a7)throw A.b(A.ET("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ap
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.M
break A}if(B.E===a5){l=a6==null?B.v:B.a4
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.M
break B}if(B.E===a5){l=B.a4
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.E===a5){l=B.a4
break C}l=B.M
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.M
break D}if(B.E===a5){l=B.a4
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.X("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bq)
case 5:s=6
return A.a(a8.X("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bq)
case 6:s=7
return A.a(p.hE(a8,a2,a9),$async$bq)
case 7:s=8
return A.a(a8.X(a2,"id = ?",[a9]),$async$bq)
case 8:q=B.d5
s=1
break
case 4:k=p.a.db.$0()
j=a4?null:b2.w
if(j==null)j=p.fU()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.dh("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aO(l)
e=a4?null:b2.r
if(e!=null)f.D(0,e)
f.D(0,a7)
d=A.N(f,f.$ti.c)
B.b.aJ(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a8(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.i9(B.a0)
e=B.b.C(A.a8(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aH("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.HA(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bq)
case 12:s=10
break
case 11:s=13
return A.a(a8.aH('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bq)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.D(f,B.cT)
if(o)B.b.D(f,B.cG)
s=a3?14:16
break
case 14:a3=A.i9(B.a_)
l=B.b.C(A.a8(16,"?",!1,l),", ")
s=17
return A.a(a8.aH("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.HN(B.a8,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.H)),$async$bq)
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
return A.a(a8.aH(a3.charCodeAt(0)==0?a3:a3,a1),$async$bq)
case 18:case 15:q=new A.iZ(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bq,r)},
hE(a,b,c){return this.tM(a,b,c)},
tM(a,b,c){var s=0,r=A.h(t.H)
var $async$hE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cF(a,b,c,!1),$async$hE)
case 2:return A.e(null,r)}})
return A.f($async$hE,r)},
fd(a,b){return this.vi(a,b)},
vi(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.x
f=new A.a4("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.N([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ae("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$fd)
case 3:o=d
f=J.K(o)
if(f.gF(o)){q=B.cX
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.k();)n.push(A.jn(f.gn()))
f=A.aO(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.kV(g,f),$async$fd)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.p)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.E(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
l0(a){if(a.length===0)return A.bd(null,t.H)
return this.a.a0(new A.w3(this,a),t.H)},
aM(a,b){return this.tq(a,b)},
tq(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aM=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.av(a0).a
a4=a2.db.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aI("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 5:o=a9
n=J.K(o)
s=!(n.gT(o)&&!J.y(J.V(n.gH(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aI(a,1,"id = ?",[a1]),$async$aM)
case 8:m=a9
n=J.K(m)
l=n.gT(m)?A.bN(a3,n.gH(m),a2.cx,a2.cy):null
s=9
return A.a(b.L(a,A.dt(a3,J.y(a5.h(0,"archived"),!0),a2.cx,a2.cy,a1,a5),"id = ?",[a1]),$async$aM)
case 9:a6.a1(new A.a3(a0,A.an([a1],t.N)))
k=A.bL(l==null?B.k:l,a5)
k.G(0,"id")
a6.bE(B.A,k,a1,a5,l,B.af,a0)
case 7:case 4:a=a3.a
s=10
return A.a(b.aI(a,1,"id = ?",[a1]),$async$aM)
case 10:j=a9
a5=J.K(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 13:s=14
return A.a(p.da(b,a0,a1,a7.c,a4),$async$aM)
case 14:a6.a1(new A.a3(a0,A.an([a1],t.N)))
s=1
break
case 12:n=a2.cx
a2=a2.cy
i=A.bN(a3,a5.gH(j),n,a2)
h=A.at(B.m.A(B.e.A(A.ai(A.bj(a3,i)))).a)
a5=a7.b
g=A.at(B.m.A(B.e.A(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 18:s=19
return A.a(p.da(b,a0,a1,a7.c,a4),$async$aM)
case 19:a6.a1(new A.a3(a0,A.an([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aG(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bo(d,a5,f):A.u(a5,f)
s=23
return A.a(b.L(a,A.dt(a3,J.y(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aM)
case 23:s=24
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 24:s=25
return A.a(p.da(b,a0,a1,a7.c,a4),$async$aM)
case 25:a6.a1(new A.a3(a0,A.an([a1],a5)))
k=A.bL(i,c)
k.G(0,"id")
a6.bE(B.A,k,a1,c,i,B.af,a0)
s=21
break
case 22:g=A.at(B.m.A(B.e.A(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aM)
case 28:a6.a1(new A.a3(a0,A.an([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aM,r)},
da(a,b,c,d,e){return this.r1(a,b,c,d,e)},
r1(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$da=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$da)
case 2:s=3
return A.a(a.L(q.a.av(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$da)
case 3:return A.e(null,r)}})
return A.f($async$da,r)},
xb(a,b,c,d,e){return this.a.a0(new A.w1(c,e,d,B.H,a,b),t.H)},
ni(a,b,c,d,e,f){return this.a.a0(new A.w0(this,c,f,b,a,d,e),t.H)},
fq(a,b,c,d,e){return this.ni(a,b,c,d,B.ap,e)},
nh(a,b,c){return this.a.a0(new A.w_(a,c,b),t.H)},
xj(){return this.a.a0(new A.w2(null),t.S)},
f3(a,b,c,d,e,f,g){return this.u9(a,b,c,d,e,f,g)},
u9(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$f3=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$f3)
case 2:p=A.u(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$f3)
case 3:return A.e(null,r)}})
return A.f($async$f3,r)}}
A.w3.prototype={
$1(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=q.a
n=o.a.Q
m=n.at
l=q.b
k=l.length
n.at=m+k
p=0
case 2:if(!(p<l.length)){s=4
break}s=5
return A.a(o.aM(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.p)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w1.prototype={
$1(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w0.prototype={
$1(a){return this.o6(a)},
o6(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aE(0,"lp_dead_letter",A.m(["at",q.a.a.db.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w_.prototype={
$1(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w2.prototype={
$1(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:150}
A.ek.prototype={
a6(){return"ApplyResult."+this.b}}
A.n9.prototype={}
A.wR.prototype={
ds(a){return this.wR(a)},
wR(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ds=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iE(b4),$async$ds)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.In().ei(n)
if(m==null)A.v(A.aU('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aK(k)
k=l[2]
k.toString
i=A.aK(k)
k=l[3]
k.toString
h=A.aK(k)
k=l[4]
k.toString
g=A.aK(k)
k=l[5]
k.toString
f=A.aK(k)
k=l[6]
k.toString
e=A.aK(k)
l=l[7]
l.toString
d=A.aK(l)
if(i<1||i>12||g>23||f>59||e>59)A.v(A.aU('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.D6(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.wH(k))A.v(A.aU('Bad timestamp "'+n+'"'))
o=A.NR(A.D6(j,i,h,g,f,e,d).j6(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.fN(B.c.br(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.Q,k=k.fy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.as
a4===$&&A.t()
s=6
return A.a(a4.fp(b4,null,a2,o,null,b),$async$ds)
case 6:a5=b6
a4=J.K(a5)
if(a4.gF(a5)){s=5
break}++a.ax
a6=p.r3(a5)
a7=k.h(0,b4)
if(a7==null)A.v(A.A(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.Eo(a7.a,a5),$async$ds)
case 8:s=7
return A.a(b0.b_(new b1.wZ(b2,p,b3,b6,a6),l),$async$ds)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.n9(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ds,r)},
my(a,b){var s=B.a.a2(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a2(a.a,b.b)<=0},
tE(a,b){var s=B.a.a2(a.c,b.c)
if(s!==0)return s>0
return B.a.a2(a.a,b.a)>0},
r3(a){var s,r,q,p=J.aA(a),o=p.gH(a)
for(p=p.bm(a,1),s=p.$ti,p=new A.ar(p,p.gm(0),s.i("ar<a1.E>")),s=s.i("a1.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.tE(q,o))o=q}return o},
i3(a){return this.vw(a)},
vw(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$i3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.b_(new A.wT(o,p,a),t.P),$async$i3)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
dl(a,b){return this.vz(a,b)},
vz(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dl=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bI(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.fy,e=n.b,d=A.a0(j),c=d.c,d=d.i("cw<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cw(j,0,200,d)
a2.j1(j,0,200,c)
a3=a2.cZ(0)
a4=a3.length
b&1&&A.I(j,18)
A.bg(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.as
a7===$&&A.t()
s=12
return A.a(a7.c1(l),$async$dl)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.D(b1)
if(a7 instanceof A.cQ){J.aM(m,l)
s=6
break}else if(a7 instanceof A.c4)throw b1
else if(a7 instanceof A.br){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aM(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.p)(a3),++a6
s=5
break
case 7:s=J.au(m)!==0?13:14
break
case 13:s=15
return A.a(n.ft(b2,m),$async$dl)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.v(A.A(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.p)(a5),++a6)a2.push(A.Ep(b0,a5[a6]))
s=16
return A.a(i.b_(new A.wV(n,a2,b2,b0),h),$async$dl)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dl,r)},
dY(a,b,c,d){return this.rB(a,b,c,d)},
rB(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dY=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.u(c,t.o)
a=A.u(c,t.G)
o=p.a,n=o.cx,m=o.cy,o=o.fy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.U(a4,k,B.c.br(i,0,j))
g=B.b.C(A.a8(h.length,"?",!1,c),", ")
j=[a2]
B.b.D(j,h)
a0=J
s=6
return A.a(a1.ae(u.m+g+")",j),$async$dY)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.G(e),A.hm(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.v(A.A(l))
a0=J
s=9
return A.a(a1.bG(d.a.a,"id IN ("+g+")",h),$async$dY)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.G(e),A.bN(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a6(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
mI(a,b,c,d,e){return this.a7(a,b,A.Ep(this.a.av(b).a,c),null,!1,d,e)},
uf(a,b,c){return this.mI(a,b,c,null,!1)},
a7(a,b,c,d,e,f,g){return this.ue(a,b,c,d,e,f,g)},
mH(a,b,c){return this.a7(a,b,c,null,!1,null,!1)},
ue(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a7=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.av(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bA(a4,a7,b2,a8,a9),$async$a7)
case 5:q=B.aa
s=1
break
case 4:a9=b3.b
a9.toString
j=A.bj(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bA(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a7)
case 8:q=B.aa
s=1
break
case 7:g=a8.a
f=$.pN()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bA(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a7)
case 11:q=B.aa
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.dx
g===$&&A.t()
s=15
return A.a(g.bY(a4,b2,a8.a),$async$a7)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aI(a6.a,1,"id = ?",[a8.a]),$async$a7)
case 19:c=b9
g=J.K(c)
d=g.gF(c)?null:A.bN(a7,g.gH(c),a5.cx,a5.cy)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dr(a4,a8.a,a8.e,b2),$async$a7)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.ID(a4,a6.a,A.dt(a7,J.y(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9)),$async$a7)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.dg(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a7)
case 26:b1.a1(new A.a3(b2,A.an([a8.a],t.N)))
b=A.bL(B.k,a9)
b.G(0,"id")
b1.bE(B.ae,b,a8.a,a9,null,B.av,b2)
q=B.a9
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
return A.a(n.ca(b1,b2,a8.a,a8.c,!1),$async$a7)
case 31:q=B.ab
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dt(a7,J.y(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9),"id = ?",[a8.a]),$async$a7)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.dg(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a7)
case 33:b1.a1(new A.a3(b2,A.an([a8.a],t.N)))
b=A.bL(d,a9)
b.G(0,"id")
b1.bE(B.A,b,a8.a,a9,d,B.av,b2)
q=B.a9
s=1
break
case 28:s=a===B.H||a===B.bq||a===B.a7?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.ca(b1,b2,a8.a,a8.c,!1),$async$a7)
case 38:q=B.ab
s=1
break
case 37:s=a===B.a7?39:40
break
case 39:s=41
return A.a(n.ca(b1,b2,a8.a,a8.c,!1),$async$a7)
case 41:q=B.ab
s=1
break
case 40:a0=A.bj(a7,d)
s=A.ai(a0)===i?42:43
break
case 42:s=44
return A.a(a4.X("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a7)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.dg(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a7)
case 45:b1.a1(new A.a3(b2,A.an([a8.a],t.N)))
q=B.a9
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
s=a5 instanceof A.d8?50:52
break
case 50:k=a5
s=53
return A.a(n.bA(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a7)
case 53:q=B.aa
s=1
break
s=51
break
case 52:throw b0
case 51:s=49
break
case 46:s=2
break
case 49:a9=a7.e
g=a7.e
f=a7.e
f=A.Hy(l,a0,new A.mJ(a9.a,g.b,f.c),a8.a,j,b2)
s=54
return A.a(t.fr.b(f)?f:A.bB(f,t.r),$async$a7)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eW(a4,b2,a8,a7,m,a0,l,a2),$async$a7)
case 57:s=58
return A.a(n.ca(b1,b2,a8.a,a8.c,!1),$async$a7)
case 58:a5=t.N
b1.a1(new A.a3(b2,A.an([a8.a],a5)))
b1.a1(new A.a3("lp_conflicts",A.an([a8.a],a5)))
q=B.bA
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dt(a7,J.y(a3.h(0,"archived"),!0),a5.cx,a5.cy,a9,a3),"id = ?",[a8.a]),$async$a7)
case 59:a5=a5.dx
a5===$&&A.t()
s=60
return A.a(a5.f3(a4,b2,a8.a,h,i,a8.c,A.ai(a3)),$async$a7)
case 60:s=61
return A.a(n.tB(b1,b2,a8.a,a8.c),$async$a7)
case 61:b1.a1(new A.a3(b2,A.an([a8.a],t.N)))
b=A.bL(d,a3)
b.G(0,"id")
b1.bE(B.A,b,a8.a,a3,d,B.af,b2)
q=B.a9
s=1
break
case 35:q=B.ab
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a7,r)},
eW(a,b,c,d,e,f,g,h){return this.rZ(a,b,c,d,e,f,g,h)},
rZ(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eW=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bj(d,A.fh(d,c))
k=A.bL(g,f)
j=A.N(k,A.n(k).c)
B.b.aJ(j)
k=A.bL(g,l)
p=A.N(k,A.n(k).c)
B.b.aJ(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ai(g)
n=t.N
m=t.X
s=2
return A.a(a.ci(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ai(f),"remote_json",A.ai(l),"dirty_local",B.h.a8(j,null),"dirty_remote",B.h.a8(p,null),"detected_at",q.c.ay.$0()],n,m),B.S),$async$eW)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(l),"base_hash",A.at(B.m.A(B.e.A(A.ai(A.bj(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eW)
case 3:return A.e(null,r)}})
return A.f($async$eW,r)},
bA(a,b,c,d,e){return this.rS(a,b,c,d,e)},
rS(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bA=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a8(d.d,null)}catch(a1){o=t.N
e=B.h.a8(A.m(["raw",d.d.l(0)],o,o),null)}o=d.a
s=2
return A.a(a.X("lp_dead_letter","store = ? AND record_id = ?",[c,o]),$async$bA)
case 2:n=q.c
m=n.ay
l=t.N
k=t.X
s=3
return A.a(a.aE(0,"lp_dead_letter",A.m(["at",m.$0(),"kind","map_failure","store",c,"record_id",o,"error",a0,"payload_json",e],l,k)),$async$bA)
case 3:j=q.a.dx
j===$&&A.t()
s=4
return A.a(j.bY(a,c,o),$async$bA)
case 4:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=g>=8?253402300799e3:m.$0()+B.c.M(n.mX(g).a,1000)
n=d.c
s=j?5:7
break
case 5:s=8
return A.a(a.aE(0,"lp_sync_row",A.m(["store",c,"record_id",o,"remote_updated",n,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bA)
case 8:s=6
break
case 7:s=9
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",n,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,o]),$async$bA)
case 9:case 6:return A.e(null,r)}})
return A.f($async$bA,r)},
dg(a,b,c,d,e,f,g,h){return this.tK(a,b,c,d,e,f,g,!0)},
tK(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$dg=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.av(b)
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
return A.a(a.aE(0,"lp_sync_row",o),$async$dg)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$dg)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dg,r)},
ca(a,b,c,d,e){return this.tC(a,b,c,d,e)},
tB(a,b,c,d){return this.ca(a,b,c,d,!0)},
tC(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ca=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.u(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$ca)
case 2:s=3
return A.a(p.L(q.a.av(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$ca)
case 3:if(g>0)a.a1(new A.a3(b,A.an([c],o)))
return A.e(null,r)}})
return A.f($async$ca,r)},
ft(a,b){return this.wt(a,b)},
wt(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ft=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bI(b,!0,t.N)
n=A.a0(o),m=n.c,n=n.i("cw<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cw(o,0,500,n)
i.j1(o,0,500,m)
h=i.cZ(0)
g=h.length
l&1&&A.I(o,18)
A.bg(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.b_(new A.wX(p,a,h),j),$async$ft)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$ft,r)}}
A.wZ.prototype={
$0(){var s=this,r=s.b
return r.a.a0(new A.wY(s.a,r,s.c,s.d,s.e),t.P)},
$S:23}
A.wY.prototype={
$1(a){return this.of(a)},
of(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.av(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.aA(p),n=o.gt(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dY(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aO(t.N)
a2=o.gt(p),a0=a0.Q
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.my(i,c)){s=3
break}p=i.a
s=j.E(0,p)?5:7
break
case 5:s=8
return A.a(a.mH(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a7(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
case 9:h=a6
j.u(0,p)
case 6:switch(h.a){case 0:++d.d;++a0.ay
break
case 1:++d.c
break
case 2:++d.b
break
case 3:break}s=3
break
case 4:g=c==null||!a.my(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eC(b,a1,e,f),$async$$1)
case 10:d.a=new A.ju(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wT.prototype={
$0(){var s=this.b
return s.a.a0(new A.wS(this.a,s,this.c),t.P)},
$S:23}
A.wS.prototype={
$1(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.dx
k===$&&A.t()
o=p.c
n=o.b
s=3
return A.a(k.bY(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.uf(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a2(o.c,k)<=0){s=1
break}s=7
return A.a(l.mI(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.wV.prototype={
$0(){var s=this,r=s.a
return r.a.a0(new A.wU(r,s.b,s.c,s.d),t.P)},
$S:23}
A.wU.prototype={
$1(a){return this.od(a)},
od(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dY(a.b,m,q.d,e),$async$$1)
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
return A.a(o.mH(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a7(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.u(0,g)
case 7:case 4:p.length===e||(0,A.p)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wX.prototype={
$0(){var s=this.a
return s.a.a0(new A.wW(s,this.b,this.c),t.P)},
$S:23}
A.wW.prototype={
$1(a){return this.oe(a)},
oe(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.av(g).a
e=h.av(g).a.a
d=q.c
c=t.N
b=B.b.C(A.a8(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.u(c,t.G)
a1=J
s=2
return A.a(i.bG(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.cx,h=h.cy
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.G(m),A.bN(f,n,o,h))
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
case 6:a2.a1(new A.a3(g,A.mG(d,A.a0(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.p)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dI(null,null,c,h)
p.D(0,j)
p.j(0,"hidden",!0)
a2.bE(B.cd,B.dI,k,p,j,B.av,g)}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b0.prototype={}
A.x_.prototype={
fC(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.dx
f===$&&A.t()
s=3
return A.a(f.fd(25,p.c.ay.$0()),$async$fC)
case 3:o=b
f=J.K(o)
if(f.gF(o)){q=B.a5
s=1
break}if(p.f){q=p.bd(o)
s=1
break}f=f.gt(o),n=B.a5
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dZ(f.gn()),$async$fC)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.b0(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
dZ(a){return this.rM(a)},
rM(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.dx
l===$&&A.t()
m=m.x
s=3
return A.a(l.ex(m,a.a,a.b),$async$dZ)
case 3:o=c
if(o==null){q=B.a5
s=1
break}s=4
return A.a(l.bY(m,o.a,o.b),$async$dZ)
case 4:n=c
if(n==null){q=B.a5
s=1
break}if(o.e==null){q=p.rK(o,n)
s=1
break}q=p.jG(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
bO(a,b,c,d,e){return this.qT(a,b,c,d,e)},
qS(a,b,c,d){return this.bO(a,b,c,!1,d)},
qQ(a,b,c){return this.bO(a,b,c,!1,!1)},
qR(a,b,c,d){return this.bO(a,b,c,d,!1)},
qT(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bO=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bO)
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
s=k instanceof A.c4?8:10
break
case 8:n.e.$0()
q=B.ao
s=1
break
s=9
break
case 10:s=k instanceof A.cM?11:13
break
case 11:k=n.a.dx
k===$&&A.t()
s=14
return A.a(k.nh("forbidden_push",a.b,a.a),$async$bO)
case 14:q=B.dr
s=1
break
s=12
break
case 13:s=k instanceof A.eK?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.d7(a,"validation_push",m.a),$async$bO)
case 20:q=B.G
s=1
break
case 19:q=n.cB(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cQ){q=n.cz(a,b,!e)
s=1
break}else if(k instanceof A.br){l=k
q=n.cB(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bO,r)},
ht(a,b,c){return this.rL(a,b,c)},
rK(a,b){return this.ht(a,b,!1)},
rL(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$ht=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bO(a,b,new A.x1(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
jK(a,b,c){return this.t_(a,b,c)},
t_(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jK=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qS(a,b,new A.x6(p,a,p.a.av(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jK,r)},
jG(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qQ(a,b,new A.x4(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jG,r)},
dc(a,b,c,d){return this.rP(a,b,c,d)},
rO(a,b,c){return this.dc(a,b,c,!1)},
rP(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$dc=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.li(a,c)
j=n.a.av(a.a).a
i=a.d
s=A.at(B.m.A(B.e.A(A.ai(A.bj(j,A.fh(j,c))))).a)===A.at(B.m.A(B.e.A(i)).a)?3:4
break
case 3:s=5
return A.a(n.eU(a,c),$async$dc)
case 5:q=B.a6
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
s=i instanceof A.d8?10:12
break
case 10:k=i
s=13
return A.a(n.d7(a,"corrupt_payload",k.a),$async$dc)
case 13:q=B.G
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
return A.a(n.dV(a,b,c,j,m,l),$async$dc)
case 14:g=a0
if(g==null){q=B.bh
s=1
break}q=n.bO(a,b,new A.x2(n,a,A.ai(A.bj(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dc,r)},
bd(a){return this.rJ(a)},
rJ(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$bd=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.l([],t.k1)
c0=t.N
c1=A.u(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.u(c0,c0)
c0=J.E(d0),d=n.a,c=d.Q,b=n.b,a=d.fy,a0=d.x
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.dx
a2===$&&A.t()
s=5
return A.a(a2.ex(a0,a1.a,a1.b),$async$bd)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bY(a0,m.a,m.b),$async$bd)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.v(A.A('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.as
a5===$&&A.t()
s=11
return A.a(a5.c1(a1),$async$bd)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.D(c8)
s=a1 instanceof A.cQ?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lR(m,l),$async$bd)
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
case 14:s=a1 instanceof A.c4?18:20
break
case 18:n.e.$0()
q=B.ao
s=1
break
s=19
break
case 20:s=a1 instanceof A.cM?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.nh("forbidden_push",m.b,a1),$async$bd)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.br?25:27
break
case 25:i=a1
s=28
return A.a(n.cB(m,l,i),$async$bd)
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
if(a1!==a5)A.v(A.eE('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a4("")
A.ck(a7,A.bj(a4,A.fh(a4,k)))
a1=a7.a
a1=B.e.A(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c6()
a5=A.d_(a8)
a5.u(0,a1)
a5.q()
a9=A.at(a8.a.a)
a5=B.e.A(m.d)
a8=new A.c6()
a1=A.d_(a8)
a1.u(0,a5)
a1.q()
s=a9===A.at(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eU(m,k),$async$bd)
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
s=a1 instanceof A.d8?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fq(e.a,a5,"corrupt_payload",m.d,a1),$async$bd)
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
return A.a(n.dV(m,l,k,a4,g,f),$async$bd)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a4("")
A.ck(a7,A.bj(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.h3(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.h3(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.c9(B.b.U(b9,b5,b7<b6?b7:b6),c1,c7),$async$bd)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b0(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b0(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bd,r)},
dV(a,b,c,d,e,f){return this.r4(a,b,c,d,e,f)},
r4(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n
var $async$dV=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=d.e
n=A.Hy(e,f,new A.mJ(n.a,n.b,n.c),a.b,A.bj(d,A.fh(d,c)),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bB(n,t.r),$async$dV)
case 3:o=h
s=o.b?4:5
break
case 4:s=6
return A.a(p.hu(a,b,c,o,e,f),$async$dV)
case 6:q=null
s=1
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
c9(a,b,c){return this.tj(a,b,c)},
tj(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c9=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.as
a7===$&&A.t()
s=7
return A.a(a7.fB(b9),$async$c9)
case 7:m=c3
a7=t.N
l=A.u(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.p)(b9),++a9){k=b9[a9]
J.d3(l,k.a,k)}j=l
i=A.aO(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aM(i,h.a)){l=A.aU("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aU("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.V(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jA(e,c1.h(0,e.a))
b0=B.e.A(e.d)
b1=new A.c6()
b2=A.d_(b1)
b2.u(0,b0)
b2.q()
b2=A.at(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aM(g,new A.jw(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.dx
a8===$&&A.t()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.fq(b4,b2,b3,e.d,b0),$async$c9)
case 13:++b7
case 11:s=8
break
case 9:l=a7.dx
l===$&&A.t()
s=14
return A.a(l.l0(g),$async$c9)
case 14:l=b6
a7=b7
q=new A.b0(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.D(b8)
s=l instanceof A.el?15:17
break
case 15:q=n.c4(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cM?18:20
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
return A.a(n.dZ(n.lY(a0)),$async$c9)
case 24:a1=c3
b6+=a1.a
b7+=a1.b
d+=a1.c
c+=a1.d
b+=a1.e
a=a||a1.f
case 22:b9.length===l||(0,A.p)(b9),++a9
s=21
break
case 23:q=new A.b0(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.c4?25:27
break
case 25:n.e.$0()
q=B.ao
s=1
break
s=26
break
case 27:s=l instanceof A.br?28:30
break
case 28:a2=l
a3=a2 instanceof A.dR?a2:new A.eT("network error")
l=b9.length,a7=n.a,a8=a7.x,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.dx
b0===$&&A.t()
s=34
return A.a(b0.bY(a8,a4.b,a4.c),$async$c9)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cB(n.lY(a4),a5,a3),$async$c9)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.p)(b9),++a9
s=31
break
case 33:q=new A.b0(b6,b7,0,0,0,!0)
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
return A.f($async$c9,r)},
c4(a,b,c){return this.px(a,b,c)},
px(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$c4=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.K(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gaq(b5)
h=n.a.dx
h===$&&A.t()
b3=g.b
s=5
return A.a(h.fq("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$c4)
case 5:q=B.G
s=1
break
case 4:a0=B.c.M(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.U(b5,0,a0),b3.b9(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.as
a6===$&&A.t()
s=13
return A.a(a6.fB(j),$async$c4)
case 13:i=b9
h=A.u(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.d3(h,g.a,g)}f=h
e=A.aO(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aM(e,d.a)){a6=A.aU("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aU("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.V(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jA(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.e_(a7,a8,a9,b0==null?b.d:b0),$async$c4)
case 19:++m
s=17
break
case 18:a7=a1.dx
a7===$&&A.t()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.fq(b1,a9,b0,b.d,a8),$async$c4)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.D(b4)
s=a6 instanceof A.el?21:23
break
case 21:s=24
return A.a(n.c4(j,b6,b7),$async$c4)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.br){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.b0(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c4,r)},
jA(a,b){var s=b==null?a.d:b
return new A.cq(a.b,a.c,B.v,s,a.e,A.at(B.m.A(B.e.A(a.d)).a),B.u,a.a,0,null)},
lY(a){return this.jA(a,null)},
e_(a,b,c,d){return this.tp(a,b,c,d)},
eU(a,b){return this.e_(a,b,null,null)},
tp(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$e_=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.av(a.a).a
n=A.fh(o,b)
m=d==null
l=m?A.ai(A.bj(o,n)):d
p=p.dx
p===$&&A.t()
s=2
return A.a(p.l0(A.l([new A.jw(a,l,b.c,A.at(B.m.A(B.e.A(m?a.d:d)).a),c)],t.bo)),$async$e_)
case 2:return A.e(null,r)}})
return A.f($async$e_,r)},
li(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.eE('record id "'+s+'" does not match requested "'+r+'"'))},
cB(a,b,c){return this.t7(a,b,c)},
t7(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.dR?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.dx
o===$&&A.t()
s=5
return A.a(o.ni(c.a,a.b,"max_attempts",a.d,B.ap,a.a),$async$cB)
case 5:q=B.G
s=1
break
case 4:o=p.c
n=o.mY(l,k)
m=p.a.dx
m===$&&A.t()
s=6
return A.a(m.xb(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$cB)
case 6:q=B.ao
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cB,r)},
d7(a,b,c){return this.q6(a,b,c)},
lC(a,b){return this.d7(a,b,null)},
q6(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.dx
o===$&&A.t()
p=c==null?b:c
s=2
return A.a(o.fq(p,a.b,b,a.d,a.a),$async$d7)
case 2:return A.e(null,r)}})
return A.f($async$d7,r)},
cz(a,b,c){return this.qL(a,b,c)},
lR(a,b){return this.cz(a,b,!0)},
qL(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cz=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=n.a
h=a.a
case 3:switch(i.av(h).a.e.d.a){case 0:s=5
break
case 1:s=6
break
case 2:s=7
break
default:s=4
break}break
case 5:m=null
l=null
p=9
m=A.i8(b.r)
l=A.i8(a.d)
p=2
s=11
break
case 9:p=8
g=o.pop()
i=A.D(g)
s=i instanceof A.d8?12:14
break
case 12:k=i
s=15
return A.a(n.d7(a,"corrupt_payload",k.a),$async$cz)
case 15:q=B.G
s=1
break
s=13
break
case 14:throw g
case 13:s=11
break
case 8:s=2
break
case 11:s=16
return A.a(n.hc(a,b,m,l),$async$cz)
case 16:q=B.bh
s=1
break
case 6:s=!c?17:18
break
case 17:s=19
return A.a(n.lC(a,"missing_target"),$async$cz)
case 19:q=B.G
s=1
break
case 18:q=n.ht(a,b,!0)
s=1
break
case 7:s=20
return A.a(i.bs(h).iC(a.b),$async$cz)
case 20:q=B.dq
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cz,r)},
hc(a,b,c,d){return this.qm(a,b,c,d)},
qm(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$hc=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bL(c,d)
n=A.N(o,A.n(o).c)
B.b.aJ(n)
p=b.r
if(p==null)p=A.ai(c)
s=2
return A.a(q.a.a0(new A.x0(q,a,p,d,n),t.P),$async$hc)
case 2:return A.e(null,r)}})
return A.f($async$hc,r)},
hu(a,b,c,d,e,f){return this.rY(a,b,c,d,e,f)},
rY(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hu=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.av(a.a).a
m=A.bj(n,A.fh(n,c))
l=A.bL(e,f)
k=A.N(l,A.n(l).c)
B.b.aJ(k)
l=A.bL(e,m)
p=A.N(l,A.n(l).c)
B.b.aJ(p)
s=2
return A.a(o.a0(new A.x5(q,a,b,e,f,m,k,p,n,c),t.P),$async$hu)
case 2:return A.e(null,r)}})
return A.f($async$hu,r)}}
A.x1.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.as
j===$&&A.t()
s=7
return A.a(j.hY(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eU(k,m),$async$$0)
case 8:q=B.a6
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.D(h) instanceof A.fB){q=n.a.jK(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:22}
A.x6.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.as
l===$&&A.t()
s=3
return A.a(l.c1(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.lC(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.G
s=1
break
case 5:l=p.c
s=A.at(B.m.A(B.e.A(A.ai(A.bj(l,A.fh(l,o))))).a)===A.at(B.m.A(B.e.A(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eU(m,o),$async$$0)
case 9:q=B.a6
s=1
break
case 8:q=n.dc(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.x4.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.as
l===$&&A.t()
s=3
return A.a(l.c1(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lR(m,p.c)
s=1
break}n.li(m,o)
if(o.c===m.e){l=p.c
q=n.qR(m,l,new A.x3(n,m,o,l),!0)
s=1
break}q=n.rO(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.x3.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.as
j===$&&A.t()
s=7
return A.a(j.fO(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eU(k,m),$async$$0)
case 8:q=B.a6
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
$S:22}
A.x2.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.as
l===$&&A.t()
k=o
j=n
s=4
return A.a(l.fO(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.e_(j,b,p.e.a,m),$async$$0)
case 3:q=B.a6
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.x0.prototype={
$1(a){return this.og(a)},
og(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.ci(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ai(q.d),"remote_json",A.ai(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a8(q.e,null),"dirty_remote",B.h.a8(B.u,null),"detected_at",q.a.c.ay.$0()],k,j),B.S),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a1(new A.a3(n,A.an([m],k)))
a.a1(new A.a3("lp_conflicts",A.an([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.x5.prototype={
$1(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.ci(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ai(q.e),"remote_json",A.ai(o),"dirty_local",B.h.a8(q.r,null),"dirty_remote",B.h.a8(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.S),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(o),"base_hash",A.at(B.m.A(B.e.A(A.ai(A.bj(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a1(new A.a3(j,A.an([k],n)))
a.a1(new A.a3("lp_conflicts",A.an([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.cf.prototype={
a6(){return"SyncEngineState."+this.b}}
A.hl.prototype={}
A.xY.prototype={
glk(){return 36},
dI(a){return this.p8(a)},
p8(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dI=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.fy,g=new A.bH(g,g.r,g.e,A.n(g).i("bH<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iF(m),$async$dI)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glk():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.am(c.a+1,n.glk())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bL(m,a),$async$dI)
case 13:a5.aM(a6,a9)
case 11:++j
s=10
break
case 12:if(A.o4(h)!=null)A.v(A.A(u.L))
b=h.b
b===$&&A.t()
s=14
return A.a(b.b1(new A.xZ(c,n,m,a3),B.q,f),$async$dI)
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
return A.f($async$dI,r)},
bL(a,b){return this.p7(a,b)},
p7(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bL=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.R("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aO(t.N)
m=B.c.fN(B.c.br(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.as
g===$&&A.t()
s=5
return A.a(g.fp(a4,B.d0,h,null,o,m),$async$bL)
case 5:f=a7
g=J.K(f)
if(g.gF(f)){s=4
break}for(e=g.gt(f);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=g.gt(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hs(a4,e),$async$bL)
case 6:c=a7
b=A.l([],l)
for(e=g.gt(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aR||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dl(a4,b),$async$bL)
case 9:i+=b.length
case 8:h=g.ga3(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.x
g=o+"%"
s=10
return A.a(k.ae("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bL)
case 10:a1=a7
a2=A.l([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.G(a)
if(!n.E(0,a)){if(J.y(d.h(0,"access_state"),"hidden")||J.y(d.h(0,"access_state"),"purged"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.ft(a4,a2),$async$bL)
case 13:case 12:s=14
return A.a(k.ae("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bL)
case 14:a3=a7
k=J.K(a3)
s=k.gT(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.G(g))}s=17
return A.a(j.dl(a4,l),$async$bL)
case 17:case 16:q=new A.hl(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bL,r)},
hs(a,b){return this.rE(a,b)},
rE(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.u(g,t.o)
o=p.a.x,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.U(b,n,B.c.br(l,0,m))
j=B.b.C(A.a8(k.length,"?",!1,g),", ")
m=[a]
B.b.D(m,k)
e=J
s=6
return A.a(o.ae(u.m+j+")",m),$async$hs)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.G(h),A.hm(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)}}
A.xZ.prototype={
$1(a){return this.oj(a)},
oj(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eD(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.br.prototype={
l(a){return A.d2(this).l(0)+": "+this.a},
$iH:1}
A.eT.prototype={}
A.dR.prototype={}
A.jH.prototype={}
A.c4.prototype={}
A.cM.prototype={}
A.cQ.prototype={}
A.eK.prototype={}
A.h1.prototype={}
A.fB.prototype={}
A.yb.prototype={}
A.el.prototype={}
A.hj.prototype={
gm(a){return this.b}}
A.dd.prototype={}
A.h3.prototype={}
A.jv.prototype={}
A.lf.prototype={
a6(){return"BackendHintKind."+this.b}}
A.cH.prototype={}
A.Cp.prototype={
$2(a,b){return B.a.iy(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:153}
A.nY.prototype={
gnw(){return 1}}
A.y_.prototype={
mY(a,b){var s,r
if(b!=null){s=this.rs(b)
if(A.al(s))return A.cK(0,0,s<0?0:s)
if(s instanceof A.aG){r=s.a-this.ay.$0()
return r<=0?B.D:A.cK(0,r,0)}return B.aw}return A.Hs(a,B.aw,B.U,this.at)},
mX(a){return this.mY(a,null)},
rs(a){var s=B.a.c0(a),r=A.h0(s,null)
if(r!=null)return r
return A.Ky(s)}}
A.ju.prototype={}
A.jP.prototype={}
A.yd.prototype={
iE(a){return this.x7(a)},
x7(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.ev("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iE)
case 3:m=c
l=J.K(m)
if(l.gF(m)){q=null
s=1
break}o=A.a7(J.V(l.gH(m),"cursor_updated"))
n=A.a7(J.V(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.ju(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iE,r)},
eC(a,b,c,d){return this.xW(a,b,c,d)},
xW(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eC=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aI("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eC)
case 5:s=m.bD(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eC)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eC)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eC,r)},
iF(a){return this.x9(a)},
x9(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.ev("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iF)
case 3:n=c
m=J.K(n)
if(m.gF(n)){q=B.dO
s=1
break}o=A.bh(J.V(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jP(o,A.bh(J.V(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iF,r)},
eD(a,b,c,d){return this.y_(a,b,c,d)},
y_(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eD=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aI("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eD)
case 5:s=m.bD(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eD)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eD)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eD,r)},
hU(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.b5("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hU)
case 3:l=b
k=J.K(l)
j=k.gF(l)?B.k:k.gH(l)
k=A.bh(j.h(0,"pending"))
if(k==null)k=0
o=A.bh(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bh(j.h(0,"hidden"))
if(n==null)n=0
m=A.bh(j.h(0,"blocked"))
q=new A.p5([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)}}
A.cU.prototype={
a6(){return"SyncState."+this.b}}
A.fm.prototype={
a6(){return"AccessState."+this.b}}
A.fZ.prototype={
a6(){return"OutboxKind."+this.b}}
A.jm.prototype={
a6(){return"OpQueueKind."+this.b}}
A.CL.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cT.prototype={}
A.yc.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
i=j.h(0,"record_id")
i.toString
A.G(i)
i=A.a7(j.h(0,"remote_updated"))
s=A.bh(j.h(0,"last_seen_at"))
r=A.a7(j.h(0,"base_updated"))
A.a7(j.h(0,"base_hash"))
q=A.a7(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fD(B.cL,A.G(p))
A.Ho(j.h(0,"dirty_fields"))
o=A.bh(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fD(B.cK,A.G(n))
A.a7(j.h(0,"op_id"))
m=A.bh(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bh(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a7(j.h(0,"last_error"))
A.bh(j.h(0,"schema_ver"))
return new A.cT(i,s,r,q,p,o,n,m,l,k)},
$S:154}
A.cq.prototype={}
A.vZ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
s=j.h(0,"record_id")
s.toString
A.G(s)
r=j.h(0,"kind")
r.toString
r=A.fD(B.cU,A.G(r))
q=j.h(0,"payload_json")
q.toString
A.G(q)
p=A.a7(j.h(0,"base_updated"))
o=A.a7(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Ho(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.G(m)
l=j.h(0,"created_at")
l.toString
A.ap(l)
k=j.h(0,"updated_at")
k.toString
A.ap(k)
return new A.cq(i,s,r,q,p,o,n,m,l,A.a7(j.h(0,"depends_on_op")))},
$S:155}
A.eJ.prototype={}
A.vU.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ap(l)
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
q=A.fD(B.cP,A.G(q))
p=m.h(0,"payload_json")
p.toString
A.G(p)
o=m.h(0,"state")
o.toString
A.G(o)
o=A.bh(m.h(0,"attempt_count"))
if(o==null)o=0
A.bh(m.h(0,"next_retry_at"))
A.a7(m.h(0,"last_error"))
n=A.a7(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ap(m)
return new A.eJ(l,s,r,q,p,o,n)},
$S:156}
A.CJ.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:54}
A.CK.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:54}
A.bJ.prototype={
a1(a){this.c.push(a)
this.a.Q.r+=a.b.a},
u5(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bE(a,b,c,d,e,f,g){var s
if(this.a.a$.b.d==null)return
if(b==null){s=e==null?d:e
s=J.IL((s==null?B.k:s).gK(),new A.yp()).co(0)}else s=b
this.u5(new A.dQ(g,c,f,a,e,d,s))},
ki(a,b,c,d,e,f){return this.bE(a,null,b,c,d,e,f)},
bs(a){var s=this.a
return new A.ft(s,s.av(a),new A.iC(this.b),this)},
a0(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.A("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cH(o,a,b)},
cH(a,b,c){return this.tT(a,b,c,c)},
tT(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cH=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cH)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.Q
k=e.r
p=5
d=A.DK(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pJ(new A.yo(a3,j,a4),null,A.m([$.l_(),j],f,f),a4.i("x<0>")),$async$cH)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cH)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cH)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cH)
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
if(a>m)B.b.iJ(h,m,a)
a=g.length
if(a>l)B.b.iJ(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cH,r)}}
A.yp.prototype={
$1(a){return a!=="id"},
$S:13}
A.yo.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("x<0>()")}}
A.AY.prototype={}
A.lU.prototype={
a6(){return"DurabilityClass."+this.b}}
A.yg.prototype={
b1(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.B,t._)
r.c.push(new A.hB(a,new A.aE(s,t.jk)))
return s.W(new A.yn(c),c)}return this.tv(a,b,c)},
tv(a,b,c){var s,r,q,p=this
if(p.a.ax.a>0){s=p.c
if(s!=null)s.kn()}s=A.l([],t.i4)
r=new A.oD(p,b,s)
p.c=r
r.xk()
q=new A.w($.B,t._)
s.push(new A.hB(a,new A.aE(q,t.jk)))
return q.W(new A.yj(c),c)},
x5(a,b){var s,r=this.a
if(r.ax.a>0){s=this.c
if(s!=null)s.kn()}return r.e.b_(new A.ym(this,a,b),b)},
r8(){if(++this.d<64)return
this.d=0
A.bX(B.D,new A.yi(this))}}
A.yn.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yj.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.ym.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a0(new A.yl(s,this.b,r),r)},
$S(){return this.c.i("x<0>()")}}
A.yl.prototype={
$1(a){return this.ol(a,this.c)},
ol(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.DK(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pJ(new A.yk(p.b,o,n),null,A.m([$.l_(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("x<0>(rq)")}}
A.yk.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("x<0>()")}}
A.yi.prototype={
$0(){var s=this.a.a.a.e
s===$&&A.t()
s.iN().k7(new A.yh())},
$S:0}
A.yh.prototype={
$1(a){},
$S:21}
A.oD.prototype={
xk(){var s,r,q=this,p=new A.aE(new A.w($.B,t.D),t.h)
q.e=p
s=q.a.a
s.e.b_(new A.zM(q,p),t.H)
r=s.ax
s=q.gvF()
if(r.a>0)A.bX(r,s)
else A.bX(B.D,s)},
kn(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.aj()},
cN(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cN=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jM()
$.kY()
b3.aB()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.b_&&b4.w!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:b5=b4.e
b5===$&&A.t()
s=5
return A.a(b5.nD("PRAGMA synchronous=FULL",null),$async$cN)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a0(new A.zL(m,i,h,l,g),t.P),$async$cN)
case 10:for(b5=g,b6=b5.length,b7=0;b7<b5.length;b5.length===b6||(0,A.p)(b5),++b7){f=b5[b7]
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
if((b8.a.a&30)!==0)A.v(A.A("Future already completed"))
b8.an(A.fa(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.v(A.A("Future already completed"))
b8.aF(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.fy,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.wb(a0.b)
b6.kh(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a1=f[b7]
b6.vk(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.D(c2)
a3=A.ad(c2)
for(f=g,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a4=f[b7]
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
if((b6.a.a&30)!==0)A.v(A.A("Future already completed"))
b6.an(A.fa(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.v(A.A("Future already completed"))
b6.an(A.fa(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
f=b4.e
f===$&&A.t()
s=17
return A.a(f.nD("PRAGMA synchronous=NORMAL",null),$async$cN)
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
a4=k.gvj();++f.a
f.d+=a4
b1.r8()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.p)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.v(A.A("Future already completed"))
a4.an(A.fa(new A.bp("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cN,r)}}
A.zM.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cN(),$async$$0)
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
A.zL.prototype={
$1(a){return this.om(a)},
om(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.DK(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pJ(new A.zJ(a,a0),null,A.m([$.l_(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.f6([B.b.gaq(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.D(a1)
l=A.ad(a1)
o.e.push(new A.f6([B.b.gaq(a.c),null,m,l]))
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
return A.a(A.pJ(new A.zK(a0,k),null,A.m([$.l_(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.f6([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.D(a2)
h=A.ad(a2)
e.push(new A.f6([k,null,i,h]))
s=16
break
case 13:s=1
break
case 16:case 11:a.length===g||(0,A.p)(a),++b
s=10
break
case 12:case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:45}
A.zJ.prototype={
$0(){return B.b.gaq(this.a.c).a.$1(this.b)},
$S:55}
A.zK.prototype={
$0(){return this.a.a0(new A.zI(this.b),t.z)},
$S:55}
A.zI.prototype={
$1(a){return this.a.a.$1(a)},
$S:159}
A.hB.prototype={}
A.nd.prototype={
l1(a){return a.a===this.x.b.a},
fh(){var s=this.x
return s.eg(s.w==null&&!s.x?50:null).W(new A.xl(),t.J)},
mR(a){return A.Ns(a,new A.xk(this),this.x.r.length!==0)},
nl(a){var s=this.y
return s==null?null:s.u(0,a)},
kB(a,b){var s=this.y
return s==null?null:s.bg(a,b)},
iZ(){var s=this.y=A.nE(this.gkf(),new A.xm(this),null,null,!1,t.J)
return new A.ba(s,A.n(s).i("ba<1>"))},
fa(){this.l7()
var s=this.y
if(s!=null)s.q()}}
A.xl.prototype={
$1(a){return a.a},
$S:160}
A.xk.prototype={
$1(a){return this.a.a.Q.Q+=a},
$S:9}
A.xm.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aB()
s=2
return A.a(p.e7(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mX.prototype={
l1(a){var s
if(a.a!==this.x.a.a)return!1
s=a.b
if(s.a!==0&&!s.E(0,this.y))return!1
return!0},
fh(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$fh=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.t()
o=p.x.a
s=3
return A.a(l.gbu().b.aI(o.a,1,"id = ?",[p.y]),$async$fh)
case 3:n=b
l=J.K(n)
if(l.gF(n)){q=null
s=1
break}q=A.bN(o,l.gH(n),m.cx,m.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
mR(a){return a==null?"<null>":A.at(B.m.A(B.e.A(A.ai(a))).a)},
nl(a){var s=this.z
return s==null?null:s.u(0,a)},
kB(a,b){var s=this.z
return s==null?null:s.bg(a,b)},
iZ(){var s=this.z=A.nE(this.gkf(),new A.vS(this),null,null,!1,t.b)
return new A.ba(s,A.n(s).i("ba<1>"))},
fa(){this.l7()
var s=this.z
if(s!=null)s.q()}}
A.vS.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aB()
s=2
return A.a(p.e7(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fs.prototype={
kB(a,b){},
aB(){var s=this.a.a$.a
this.c=new A.b4(s,A.n(s).i("b4<1>")).aW(this.gra())},
rb(a){var s,r=this
if(!r.l1(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.v()
r.d=A.bX(r.b,r.gmC())},
e7(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$e7=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(m.r){s=1
break}m.e=!0
h=m.a.Q;++h.y
p=4
s=7
return A.a(m.fh(),$async$e7)
case 7:l=b
if(m.r){n=[1]
s=5
break}k=m.mR(l)
if(!J.y(k,m.w)){m.w=k;++h.z
m.nl(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.D(f)
i=A.ad(f)
if(!m.r)m.kB(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.v()
m.d=A.bX(m.b,m.gmC())}s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e7,r)},
fa(){var s,r=this
r.r=!0
s=r.d
if(s!=null)s.v()
r.f=!1
s=r.c
if(s!=null)s.v()}}
A.z4.prototype={
b_(a,b){var s,r=this;++r.b
r.m3()
s=new A.w($.B,b.i("w<0>"))
r.a=r.a.W(new A.z5(r,new A.aE(s,b.i("aE<0>")),a),t.H)
return s},
m3(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.z5.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.aA(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.D(i)
l=A.ad(i)
n.b.bt(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.m3()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:40}
A.hw.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.yQ.prototype={
$2(a,b){return new A.T(J.Z(a),b,t.eB)},
$S:47}
A.ok.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.yN.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.yL.prototype={
eR(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eR=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.ia()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a2(n.getDirectory(),l),$async$eR)
case 7:m=b
s=8
return A.a(A.a2(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eR)
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
return A.f($async$eR,r)},
hn(){var s=0,r=A.h(t.y),q,p=this,o
var $async$hn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.w){q=!1
s=1
break}o=p.r
s=o==null?3:5
break
case 3:s=6
return A.a(p.eR(),$async$hn)
case 6:b=p.r=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hn,r)},
bb(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bb=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.x
if(h!=null){q=h
s=1
break}s=3
return A.a(n.hn(),$async$bb)
case 3:if(!b){q=null
s=1
break}p=5
m=A.ia()
if(m==null){q=null
s=1
break}j=t.m
s=8
return A.a(A.a2(m.getDirectory(),j),$async$bb)
case 8:l=b
f=A
s=9
return A.a(A.a2(l.getDirectoryHandle("localpocket_blobs",{create:!0}),j),$async$bb)
case 9:k=new f.p0(b)
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
return A.f($async$bb,r)},
gfm(){var s=0,r=A.h(t.y),q,p=this
var $async$gfm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bb(),$async$gfm)
case 3:q=b!=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gfm,r)},
cn(a,b,c){return this.wU(a,b,c)},
iD(a){return this.cn(a,null,null)},
wU(a,a0,a1){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b
var $async$cn=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:f=new A.zt(A.l([],t.bs))
s=3
return A.a(A.kU(a,a0,a1,null,268435456,new A.yM(f)),$async$cn)
case 3:e=a3
d=f.kL()
s=4
return A.a(m.bb(),$async$cn)
case 4:c=a3
s=c!=null?5:7
break
case 5:l="tmp_"+e.a
p=8
s=11
return A.a(c.aw(l,d),$async$cn)
case 11:s=12
return A.a(c.aw(e.a,d),$async$cn)
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
p=14
s=17
return A.a(c.G(0,l),$async$cn)
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
if(h>134217728)A.v(A.ik(A.A("volatile blob memory cap exceeded: would reach "+h+" of 134217728 bytes"),j))
m.d.j(0,j,i)
m.e+=g
case 6:q=e.a
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cn,r)},
cT(a){return this.wE(a)},
wE(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cT=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.lo(a)
j=n.d
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.DE(j,t.L)
s=1
break}s=3
return A.a(n.bb(),$async$cT)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.ew(a),$async$cT)
case 10:l=c
j=A.DE(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.D(h)
if(!(k instanceof A.fq))throw A.b(A.ik(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.A("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cT,r)},
dj(a){return this.uJ(a)},
uJ(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$dj=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.lo(a)
l=o.d.G(0,a)
if(l!=null)o.e=o.e-l.length
s=2
return A.a(o.bb(),$async$dj)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.G(0,a),$async$dj)
case 9:q=1
s=8
break
case 6:q=5
j=p.pop()
m=A.D(j)
if(!(m instanceof A.fq))throw A.b(A.ik(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dj,r)},
bv(a){return this.vt(a)},
vt(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lo(a)
if(p.d.I(a)){q=!0
s=1
break}s=3
return A.a(p.bb(),$async$bv)
case 3:o=c
if(o!=null){q=o.bv(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bv,r)},
bl(a){return this.oJ(a)},
oJ(a){var s=0,r=A.h(t.aV),q,p=this,o,n
var $async$bl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lo(a)
o=p.d
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bb(),$async$bl)
case 3:n=c
if(n!=null){q=n.bl(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bl,r)},
ec(a){return this.un(a)},
un(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ec=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bb(),$async$ec)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.eo(),$async$ec)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.II(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.G(0,l),$async$ec)
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
return A.f($async$ec,r)},
fn(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fn=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.d
i=A.ca(new A.S(j,A.n(j).i("S<1>")),t.N)
s=3
return A.a(n.bb(),$async$fn)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.eo(),$async$fn)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Es()
if(l.b.test(m))J.aM(i,m)
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
j=A.N(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fn,r)}}
A.yM.prototype={
$1(a){return this.a.u(0,a)},
$S:11}
A.p0.prototype={
ew(a){return this.x6(a)},
x6(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$ew=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a2(n.a.getFileHandle(a,{create:!1}),i),$async$ew)
case 7:m=c
s=8
return A.a(A.a2(m.getFile(),i),$async$ew)
case 8:l=c
s=9
return A.a(A.a2(l.arrayBuffer(),t.a),$async$ew)
case 9:k=c
i=A.bV(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.D(g)
if(A.FO(j))throw A.b(A.EL(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ew,r)},
aw(a,b){return this.xV(a,b)},
xV(a1,a2){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$aw=A.c(function(a3,a4){if(a3===1){p.push(a4)
s=q}for(;;)switch(s){case 0:h=o.a
g=t.m
a0=A
s=3
return A.a(A.a2(h.getFileHandle(a1,{create:!0}),g),$async$aw)
case 3:s=2
return A.a(a0.a2(a4.createWritable(),g),$async$aw)
case 2:f=a4
q=5
j=t.X
s=8
return A.a(A.a2(f.write(t.a.a(B.f.gac(a2))),j),$async$aw)
case 8:s=9
return A.a(A.a2(f.close(),j),$async$aw)
case 9:q=1
s=7
break
case 5:q=4
e=p.pop()
n=A.D(e)
q=11
s=14
return A.a(A.a2(f.abort(),t.X),$async$aw)
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
return A.a(A.a2(h.getFileHandle(a1,{create:!1}),g),$async$aw)
case 19:m=a4
s=20
return A.a(A.a2(m.getFile(),g),$async$aw)
case 20:l=a4
g=a2.length
s=!J.y(l.size,g)?21:22
break
case 21:q=24
s=27
return A.a(A.mg(h,a1),$async$aw)
case 27:q=16
s=26
break
case 24:q=23
c=p.pop()
s=26
break
case 23:s=16
break
case 26:g=A.ik(A.A("write verification failed: persisted "+A.q(A.Ct(l,"size"))+" of "+g+" bytes"),a1)
throw A.b(g)
case 22:q=1
s=18
break
case 16:q=15
b=p.pop()
g=A.D(b)
s=g instanceof A.ij?28:30
break
case 28:throw b
s=29
break
case 30:k=g
q=32
s=35
return A.a(A.mg(h,a1),$async$aw)
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
return A.f($async$aw,r)},
G(a,b){return this.xh(0,b)},
xh(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$G=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.mg(o.a,b),$async$G)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.D(l)
if(A.FO(n))throw A.b(A.EL(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$G,r)},
bv(a){return this.vu(a)},
vu(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bv=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a2(n.a.getFileHandle(a,{create:!1}),t.m),$async$bv)
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
return A.f($async$bv,r)},
bl(a){return this.oK(a)},
oK(a){var s=0,r=A.h(t.aV),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bl=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a2(n.a.getFileHandle(a,{create:!1}),k),$async$bl)
case 7:m=c
s=8
return A.a(A.a2(m.getFile(),k),$async$bl)
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
return A.f($async$bl,r)},
eo(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$eo=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.cC(A.cD(A.F0(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$eo)
case 8:if(!b){s=7
break}l=j.gn()
J.aM(k,l.name)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=9
return A.a(j.v(),$async$eo)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eo,r)},
$iFo:1}
A.v6.prototype={
cO(a,b){return this.vO(a,b)},
vO(a,b){var s=0,r=A.h(t.X),q,p
var $async$cO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.kS(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cO,r)},
ix(a,b,c,d){return this.wF(a,b,c,d)},
wF(b5,b6,b7,b8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$ix=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b0=b5.wB(b6,b7)
b1=t.N
b2=new A.iy(A.u(b1,t.fw),b0)
b3=!1
p=4
a1=b8==null
n=A.HG(a1?null:A.kO(b8),"backupDbName")
if(n!=null&&typeof n!="string"){e=A.b_('"backupDbName" must be a string.')
throw A.b(e)}a2=A.a7(n)
m=a2==null?b6:a2
b2.e=new A.v7(m)
b2.f=new A.v8(m)
b0.O("PRAGMA journal_mode=TRUNCATE")
a3=b0.oA("PRAGMA journal_mode")
l=a3.gH(a3).b[0]
if(J.Z(l).toLowerCase()!=="truncate"){e=A.A("journal_mode read-back was "+A.q(l)+", expected truncate")
throw A.b(e)}k=A.Oe(a1?null:A.kO(b8))
a4=t.bE.a(J.V(k,"stores"))
j=a4==null?A.l([],t.aw):a4
a5=A.bh(J.V(k,"maxDocBytes"))
i=a5==null?19e5:a5
a3=A.Gw(J.V(k,"destructiveBackup"))
h=a3!==!1
a6=t.b.a(J.V(k,"storePolicies"))
g=a6==null?B.k:a6
f=new A.yT(A.l([],t.m2))
e=A.l([],t.oq)
for(a3=j,a7=a3.length,a8=0;a8<a3.length;a3.length===a7||(0,A.p)(a3),++a8){d=a3[a8]
J.aM(e,A.Hi(d,J.V(g,d.a),f))}c=e
b=A.Od(A.HG(a1?null:A.kO(b8),"fieldCipher"))
if(A.NW(j,b)){e=A.U("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(e)}a=new A.yL(A.u(b1,t.p))
s=7
return A.a(A.d6(a,f,b2,h,b,i,b6,B.aD,c,B.bY),$async$ix)
case 7:a0=c0
b3=!0
e=t.be
q=new A.mH(b0,new A.yZ(a0,f,A.aO(e)),A.u(t.eg,e))
s=1
break
p=2
s=6
break
case 4:p=3
b4=o.pop()
if(!b3)b0.q()
throw b4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ix,r)}}
A.v7.prototype={
$1(a){return A.pA(this.a,a)},
$S:161}
A.v8.prototype={
$1(a){return A.pB(this.a,a)},
$S:162}
A.mH.prototype={
cO(a,b){return this.vP(a,b)},
vP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.Do(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.JJ(j)
if(o==null){q=A.Do(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.f
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.oE(a)
k.a=l
n.j(0,a,l)
a.b.a.W(new A.vh(k,p,a),t.H)}i=A
s=3
return A.a(p.e.ie(k.a,o),$async$cO)
case 3:q=i.JK(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cO,r)}}
A.vh.prototype={
$1(a){var s,r=this.b
r.f.G(0,this.c)
r=r.e
s=this.a.a
r.e.G(0,s)
B.b.G(r.d.b,s)},
$S:30}
A.oE.prototype={
kh(a){var s=this,r=s.b
if(r>=128)return
s.b=r+1
s.a.f6(A.kS(a)).b0(new A.zS(s),new A.zT(s),t.H)},
$1(a){return this.on(a)},
on(a){var s=0,r=A.h(t.X),q,p=this,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.f6(A.kS(a)),$async$$1)
case 3:o=c
q=o==null?null:A.kO(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$ioo:1,
$iFP:1}
A.zS.prototype={
$1(a){--this.a.b},
$S:56}
A.zT.prototype={
$1(a){--this.a.b},
$S:27}
A.Cv.prototype={
$1(a){return B.b.bp(a.c,new A.Cu())},
$S:164}
A.Cu.prototype={
$1(a){return a.e},
$S:57}
A.yS.prototype={
wH(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.b_('Invalid "'+a+'" argument: expected '+A.bM(b).l(0)+", got "+J.c2(s).l(0)+"."))
return b.a(s)}}
A.yT.prototype={
em(a,b){return this.wc(a,b)},
wc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$em=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.b
k=l.length===0?null:B.b.gH(l)
if(k==null)throw A.b(A.U('No connected page can serve the "'+a+'" callback.',null))
l=p.c++
o=new A.w($.B,t.ny)
n=new A.aE(o,t.bF)
m=A.bX(B.T,new A.yU(p,n,a))
k.$1(A.m(["kind","callback_rpc","rpcId",l,"channel",a,"args",b],t.N,t.X)).b0(new A.yV(p,m,n,a),new A.yW(m,n,a),t.H)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$em,r)},
rr(a,b){var s
if(!t.f.b(a))throw A.b(A.b_('The "'+b+'" callback reply must be a map.'))
s=A.c1(a)
if(!J.y(s.h(0,"kind"),"callback_rpc_result"))throw A.b(A.b_('The "'+b+'" callback reply has kind "'+A.q(s.h(0,"kind"))+'".'))
if(J.y(s.h(0,"ok"),!0))return s.h(0,"value")
throw A.b(A.U('The "'+b+'" callback failed on the page: '+A.q(s.h(0,"error")),null))}}
A.yU.prototype={
$0(){var s=this.b
if((s.a.a&30)===0)s.aR(new A.dY(null,'The "'+this.c+'" callback did not answer within 30000 ms.'))},
$S:0}
A.yV.prototype={
$1(a){var s,r,q,p,o=this
o.b.v()
q=o.c
if((q.a.a&30)!==0)return
try{q.aA(o.a.rr(a,o.d))}catch(p){s=A.D(p)
r=A.ad(p)
q.bt(s,r)}},
$S:56}
A.yW.prototype={
$2(a,b){var s
this.a.v()
s=this.b
if((s.a.a&30)===0)s.bt(new A.dY(null,'The "'+this.c+'" callback failed: '+A.q(a)),b)},
$S:6}
A.hx.prototype={}
A.jW.prototype={}
A.eW.prototype={}
A.on.prototype={
hk(a,b){return this.qH(a,b)},
qH(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hk=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.b_('Contract envelope requires a "request" map.'))
j=A.c1(b)
i=j.h(0,"tag")
if(typeof i!="string")A.v(A.O("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.v(A.O("Missing request payload."))
g=A.kP(h)
j=t.G
if(!j.b(g))A.v(A.O("Malformed request payload."))
f=A.J5(i,g)
if(f==null)A.v(A.O("Unknown request tag: "+i))
m=f
p=4
e=n.c.r
e===$&&A.t()
s=7
return A.a(e.vJ(m),$async$hk)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gY(),"payload",A.fe(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.D(a)
j=A.m(["error",A.NK(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hk,r)}}
A.yZ.prototype={
ie(a,b){return this.w2(a,b)},
w2(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ie=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:n.e.u(0,a)
i=n.d.b
if(!B.b.E(i,a))i.push(a)
if(n.f==null){i=n.c.r
i===$&&A.t()
i=i.b
n.f=new A.b4(i,A.n(i).i("b4<1>")).aW(new A.z_(n))}m=null
try{m=A.KH(b)}catch(e){l=A.D(e)
i=J.Z(l)
q=new A.eW("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eW("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jh(a,m),$async$ie)
case 7:k=d
i=m.b
q=new A.jW(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
j=A.D(f)
i=m.b
g=J.Z(j)
q=new A.eW("localpocket",g,A.m(["type",A.C9(j)],t.N,t.X),i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ie,r)},
jh(a,b){return this.q9(a,b)},
q9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
if(l===$){o=A.m(["open",p.gqM(),"contract_request",p.gqG()],t.N,t.n1)
p.r!==$&&A.CT()
p.r=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.b_("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jh,r)}}
A.z_.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gY(),"payload",A.fe(a.p())],r,q)],r,q)
for(r=this.a.e,r=A.e6(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).kh(p)}},
$S:167}
A.om.prototype={
hl(a,b){return this.qN(a,b)},
qN(a8,a9){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$hl=A.c(function(b0,b1){if(b0===1)return A.d(b1,r)
for(;;)switch(s){case 0:a2=a9.d
a3=new A.yS(a2).wH("stores",t.kS)
a4=a2.h(0,"manifestFingerprints")
a5=t.N
a6=A.u(a5,a5)
a7=t.f
if(a7.b(a4))a4.a4(0,new A.yX(a6))
o=p.rt(a2)
s=a3!=null?3:4
break
case 3:a2=J.E(a3),n=p.c,m=n.fy,l=t.X,k=p.d,j=n.cx==null
case 5:if(!a2.k()){s=6
break}i=a2.gn()
if(!a7.b(i))A.v(A.aa("Schema must be a map: "+A.q(i),null,null))
h=A.qr(A.c1(i),l)
h=A.Hi(h,o.h(0,h.a),k)
if(B.b.bp(h.c,new A.yY())&&j)throw A.b(A.U('Store "'+h.a+'" declares encrypted fields but no fieldCipher was provided.',null))
g=A.DA(h)
f=h.a
e=a6.h(0,f)
if(e!=null){d=new A.a4("")
A.ck(d,g.p())
c=d.a
c=B.e.A(c.charCodeAt(0)==0?c:c)
b=new A.c6()
a=A.d_(b)
a.u(0,c)
a.q()
a=e!==A.at(b.a.a)
c=a}else c=!1
if(c)throw A.b(A.b_('Schema manifest mismatch for "'+f+'": the page and the worker compiled different schemas.'))
s=!m.I(f)?7:9
break
case 7:f=n.f
f===$&&A.t()
s=10
return A.a(f.aT(h),$async$hl)
case 10:s=8
break
case 9:a0=m.h(0,f)
if(a0==null)A.v(A.A('No store "'+f+'" registered in this LocalPocket.'))
d=new A.a4("")
A.ck(d,a0.c.p())
c=d.a
c=B.e.A(c.charCodeAt(0)==0?c:c)
b=new A.c6()
a=A.d_(b)
a.u(0,c)
a.q()
a=A.at(b.a.a)
d=new A.a4("")
A.ck(d,g.p())
c=d.a
c=B.e.A(c.charCodeAt(0)==0?c:c)
b=new A.c6()
a1=A.d_(b)
a1.u(0,c)
a1.q()
if(a!==A.at(b.a.a))throw A.b(A.b_('Schema manifest mismatch for "'+f+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a5,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
rt(a){var s,r,q,p,o,n,m,l=a.h(0,"storePolicies")
if(l==null)return B.k
s=t.f
if(!s.b(l))throw A.b(A.b_('"storePolicies" must be a map.'))
r=A.u(t.N,t.X)
for(q=l.ga_(),q=q.gt(q);q.k();){p=q.gn()
o=p.a
n=J.cE(o)
m=n.l(o)
p=p.b
o=n.l(o)
if(!s.b(p))A.v(A.b_('The store policy for "'+o+'" must be a map.'))
r.j(0,m,A.c1(p))}return r}}
A.yX.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:69}
A.yY.prototype={
$1(a){return a.e},
$S:57}
A.ps.prototype={}
A.r0.prototype={
u0(a){var s,r=null
A.Ha("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b6(a)>0&&!s.cP(a)
if(s)return a
s=A.Hn()
return this.nf(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
uM(a){var s,r,q=A.dP(a,this.a)
q.fG()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kH(s)
q.e.pop()
q.fG()
return q.l(0)},
nf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Ha("join",s)
return this.wg(new A.e_(s,t.v))},
wg(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.cY(s,new A.r1(),a.$ti.i("cY<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cP(m)&&o){l=A.dP(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.B(k,0,q.eA(k,!0))
l.b=n
if(q.fu(n))l.e[0]=q.gdF()
n=l.l(0)}else if(q.b6(m)>0){o=!q.cP(m)
n=m}else{if(!(m.length!==0&&q.ka(m[0])))if(p)n+=q.gdF()
n+=m}p=q.fu(m)}return n.charCodeAt(0)==0?n:n},
d2(a,b){var s=A.dP(b,this.a),r=s.d,q=A.a0(r).i("ao<1>")
r=A.N(new A.ao(r,new A.r2(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aE(r,0,q)
return s.d},
es(a){var s
if(!this.r7(a))return a
s=A.dP(a,this.a)
s.kA()
return s.l(0)},
r7(a){var s,r,q,p,o,n,m,l=this.a,k=l.b6(a)
if(k!==0){if(l===$.pL())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cj(n)){if(l===$.pL()&&n===47)return!0
if(q!=null&&l.cj(q))return!0
if(q===46)m=o==null||o===46||l.cj(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cj(q))return!0
if(q===46)l=o==null||l.cj(o)||o===46
else l=!1
if(l)return!0
return!1},
xf(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b6(a)
if(l<=0)return o.es(a)
s=A.Hn()
if(m.b6(s)<=0&&m.b6(a)>0)return o.es(a)
if(m.b6(a)<=0||m.cP(a))a=o.u0(a)
if(m.b6(a)<=0&&m.b6(s)>0)throw A.b(A.Fp(n+a+'" from "'+s+'".'))
r=A.dP(s,m)
r.kA()
q=A.dP(a,m)
q.kA()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kE(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kE(l[0],p[0])}else l=!1
if(!l)break
B.b.iI(r.d,0)
B.b.iI(r.e,1)
B.b.iI(q.d,0)
B.b.iI(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Fp(n+a+'" from "'+s+'".'))
l=t.N
B.b.kt(q.d,0,A.a8(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kt(p,1,A.a8(r.d.length,m.gdF(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga3(m)==="."){B.b.kH(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fG()
return q.l(0)},
no(a){var s,r,q=this,p=A.GS(a)
if(p.gb3()==="file"&&q.a===$.kZ())return p.l(0)
else if(p.gb3()!=="file"&&p.gb3()!==""&&q.a!==$.kZ())return p.l(0)
s=q.es(q.a.kD(A.GS(p)))
r=q.xf(s)
return q.d2(0,r).length>q.d2(0,s).length?s:r}}
A.r1.prototype={
$1(a){return a!==""},
$S:13}
A.r2.prototype={
$1(a){return a.length!==0},
$S:13}
A.C4.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:253}
A.tY.prototype={
oy(a){var s=this.b6(a)
if(s>0)return B.a.B(a,0,s)
return this.cP(a)?a[0]:null},
kE(a,b){return a===b}}
A.n_.prototype={
gk5(){var s=this,r=t.N,q=new A.n_(s.a,s.b,s.c,A.bI(s.d,!0,r),A.bI(s.e,!0,r))
q.fG()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga3(r)},
fG(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga3(s)===""))break
B.b.kH(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kA(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kt(m,0,A.a8(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.a8(m.length+1,s.gdF(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fu(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pL())n.b=A.C(r,"/","\\")
n.fG()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga3(q)
return o.charCodeAt(0)==0?o:o}}
A.n0.prototype={
l(a){return"PathException: "+this.a},
$iH:1}
A.xX.prototype={
l(a){return this.gaS()}}
A.wD.prototype={
ka(a){return B.a.E(a,"/")},
cj(a){return a===47},
fu(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eA(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b6(a){return this.eA(a,!1)},
cP(a){return!1},
kD(a){var s
if(a.gb3()===""||a.gb3()==="file"){s=a.gbx()
return A.E0(s,0,s.length,B.o,!1)}throw A.b(A.R("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaS(){return"posix"},
gdF(){return"/"}}
A.yx.prototype={
ka(a){return B.a.E(a,"/")},
cj(a){return a===47},
fu(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bU(a,"://")&&this.b6(a)===s},
eA(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cg(a,"/",B.a.af(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.Hq(a,q+1)
return p==null?q:p}}return 0},
b6(a){return this.eA(a,!1)},
cP(a){return a.length!==0&&a.charCodeAt(0)===47},
kD(a){return a.l(0)},
gaS(){return"url"},
gdF(){return"/"}}
A.yR.prototype={
ka(a){return B.a.E(a,"/")},
cj(a){return a===47||a===92},
fu(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eA(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cg(a,"\\",2)
if(s>0){s=B.a.cg(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Hv(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b6(a){return this.eA(a,!1)},
cP(a){return this.b6(a)===1},
kD(a){var s,r
if(a.gb3()!==""&&a.gb3()!=="file")throw A.b(A.R("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbx()
if(a.gdn()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Hq(s,1)!=null)s=B.a.kJ(s,"/","")}else s="\\\\"+a.gdn()+s
r=A.C(s,"/","\\")
return A.E0(r,0,r.length,B.o,!1)},
uq(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kE(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.uq(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaS(){return"windows"},
gdF(){return"\\"}}
A.xG.prototype={
gm(a){return this.c.length},
gwh(){return this.b.length},
pd(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.I(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eF(a){var s,r=this
if(a<0)throw A.b(A.b2("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b2("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga3(s))return s.length-1
if(r.qZ(a)){s=r.d
s.toString
return s}return r.d=r.pw(a)-1},
qZ(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pw(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iX(a){var s,r,q=this
if(a<0)throw A.b(A.b2("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b2("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.eF(a)
r=q.b[s]
if(r>a)throw A.b(A.b2("Line "+s+" comes after offset "+a+"."))
return a-r},
fV(a){var s,r,q,p
if(a<0)throw A.b(A.b2("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b2("Line "+a+" must be less than the number of lines in the file, "+this.gwh()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b2("Line "+a+" doesn't have 0 columns."))
return q}}
A.mb.prototype={
ga5(){return this.a.a},
gah(){return this.a.eF(this.b)},
gar(){return this.a.iX(this.b)},
gau(){return this.b}}
A.hH.prototype={
ga5(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.Db(this.a,this.b)},
gN(){return A.Db(this.a,this.c)},
gaP(){return A.dV(B.y.U(this.a.c,this.b,this.c),0,null)},
gbh(){var s=this,r=s.a,q=s.c,p=r.eF(q)
if(r.iX(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dV(B.y.U(r.c,r.fV(p),r.fV(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fV(p+1)
return A.dV(B.y.U(r.c,r.fV(r.eF(s.b)),q),0,null)},
a2(a,b){var s
if(!(b instanceof A.hH))return this.oZ(0,b)
s=B.c.a2(this.b,b.b)
return s===0?B.c.a2(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hH))return s.oY(0,b)
return s.b===b.b&&s.c===b.c&&J.y(s.a.a,b.a.a)},
gJ(a){return A.cc(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idf:1}
A.tu.prototype={
w8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mE(B.b.gH(a1).c)
s=a.e
r=A.a8(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.y(m.c,l)){a.hK("\u2575")
q.a+="\n"
a.mE(l)}else if(m.b+1!==n.b){a.u_("...")
q.a+="\n"}}for(l=n.d,k=A.a0(l).i("bA<1>"),j=new A.bA(l,k),j=new A.ar(j,j.gm(0),k.i("ar<a1.E>")),k=k.i("a1.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gah()!==f.gN().gah()&&f.gR().gah()===i&&a.r0(B.a.B(h,0,f.gR().gar()))){e=B.b.bV(r,a0)
if(e<0)A.v(A.R(A.q(r)+" contains no null elements.",a0))
r[e]=g}}a.tZ(i)
q.a+=" "
a.tY(n,r)
if(s)q.a+=" "
d=B.b.n9(l,new A.tP())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gah()===i?j.gR().gar():0
a.tW(h,g,j.gN().gah()===i?j.gN().gar():h.length,p)}else a.hM(h)
q.a+="\n"
if(k)a.tX(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hK("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mE(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hK("\u2577")
else{q.hK("\u250c")
q.bn(new A.tC(q),"\x1b[34m")
s=q.r
r=" "+$.ic().no(a)
s.a+=r}q.r.a+="\n"},
hI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gah()
i=k?null:l.a.gN().gah()
if(s&&l===c){h.bn(new A.tJ(h,j,a),r)
n=!0}else if(n)h.bn(new A.tK(h,l),r)
else if(k)if(g.a)h.bn(new A.tL(h),g.b)
else o.a+=" "
else h.bn(new A.tM(g,h,c,j,a,l,i),p)}},
tY(a,b){return this.hI(a,b,null)},
tW(a,b,c,d){var s=this
s.hM(B.a.B(a,0,b))
s.bn(new A.tD(s,a,b,c),d)
s.hM(B.a.B(a,c,a.length))},
tX(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gah()===p.gN().gah()){r.jY()
p=r.r
p.a+=" "
r.hI(a,c,b)
if(c.length!==0)p.a+=" "
r.mF(b,c,r.bn(new A.tE(r,a,b),q))}else{s=a.b
if(p.gR().gah()===s){if(B.b.E(c,b))return
A.Ok(c,b)
r.jY()
p=r.r
p.a+=" "
r.hI(a,c,b)
r.bn(new A.tF(r,a,b),q)
p.a+="\n"}else if(p.gN().gah()===s){p=p.gN().gar()
if(p===a.a.length){A.HH(c,b)
return}r.jY()
r.r.a+=" "
r.hI(a,c,b)
r.mF(b,c,r.bn(new A.tG(r,!1,a,b),q))
A.HH(c,b)}}},
mD(a,b,c){var s=c?0:1,r=this.r
s=B.a.bk("\u2500",1+b+this.je(B.a.B(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tV(a,b){return this.mD(a,b,!0)},
mF(a,b,c){this.r.a+="\n"
return},
hM(a){var s,r,q,p
for(s=new A.cm(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<J.E>")),q=this.r,r=r.i("J.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bk(" ",4)
else{p=A.bz(p)
q.a+=p}}},
hL(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bn(new A.tN(s,this,a),"\x1b[34m")},
hK(a){return this.hL(a,null,null)},
u_(a){return this.hL(null,null,a)},
tZ(a){return this.hL(null,a,null)},
jY(){return this.hL(null,null,null)},
je(a){var s,r,q,p
for(s=new A.cm(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<J.E>")),r=r.i("J.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
r0(a){var s,r,q
for(s=new A.cm(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<J.E>")),r=r.i("J.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pM(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bn(a,b){return this.pM(a,b,t.z)}}
A.tO.prototype={
$0(){return this.a},
$S:169}
A.tw.prototype={
$1(a){var s=a.d
return new A.ao(s,new A.tv(),A.a0(s).i("ao<1>")).gm(0)},
$S:170}
A.tv.prototype={
$1(a){var s=a.a
return s.gR().gah()!==s.gN().gah()},
$S:36}
A.tx.prototype={
$1(a){return a.c},
$S:172}
A.tz.prototype={
$1(a){var s=a.a.ga5()
return s==null?new A.k():s},
$S:173}
A.tA.prototype={
$2(a,b){return a.a.a2(0,b.a)},
$S:174}
A.tB.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aA(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbh()
n=A.Co(o,p.gaP(),p.gR().gar())
n.toString
m=B.a.hN("\n",B.a.B(o,0,n)).gm(0)
l=p.gR().gah()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga3(b).b)b.push(new A.cA(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.p)(b),++k){j=b[k]
h&1&&A.I(i,16)
B.b.t4(i,new A.ty(j),!0)
f=i.length
for(q=s.bm(c,g),p=q.$ti,q=new A.ar(q,q.gm(0),p.i("ar<a1.E>")),n=j.b,p=p.i("a1.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gah()>n)break
i.push(e)}g+=i.length-f
B.b.D(j.d,i)}return b},
$S:175}
A.ty.prototype={
$1(a){return a.a.gN().gah()<this.a.b},
$S:36}
A.tP.prototype={
$1(a){return!0},
$S:36}
A.tC.prototype={
$0(){this.a.r.a+=B.a.bk("\u2500",2)+">"
return null},
$S:0}
A.tJ.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.tK.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.tL.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.tM.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bn(new A.tH(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gar()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bn(new A.tI(r,o),p.b)}}},
$S:2}
A.tH.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.tI.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.tD.prototype={
$0(){var s=this
return s.a.hM(B.a.B(s.b,s.c,s.d))},
$S:0}
A.tE.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gar(),l=n.gN().gar()
n=this.b.a
s=q.je(B.a.B(n,0,m))
r=q.je(B.a.B(n,m,l))
m+=s*3
n=(p.a+=B.a.bk(" ",m))+B.a.bk("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.tF.prototype={
$0(){return this.a.tV(this.b,this.c.a.gR().gar())},
$S:0}
A.tG.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bk("\u2500",3)
else r.mD(s.c,Math.max(s.d.a.gN().gar()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.tN.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wJ(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bu.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gah()+":"+s.gR().gar()+"-"+s.gN().gah()+":"+s.gN().gar())
return s.charCodeAt(0)==0?s:s}}
A.At.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Co(o.gbh(),o.gaP(),o.gR().gar())!=null)){s=A.nw(o.gR().gau(),0,0,o.ga5())
r=o.gN().gau()
q=o.ga5()
p=A.ND(o.gaP(),10)
o=A.xH(s,A.nw(r,A.G5(o.gaP()),p,q),o.gaP(),o.gaP())}return A.L5(A.L7(A.L6(o)))},
$S:176}
A.cA.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.C(this.d,", ")+")"}}
A.cu.prototype={
kg(a){var s=this.a
if(!J.y(s,a.ga5()))throw A.b(A.R('Source URLs "'+A.q(s)+'" and "'+A.q(a.ga5())+"\" don't match.",null))
return Math.abs(this.b-a.gau())},
a2(a,b){var s=this.a
if(!J.y(s,b.ga5()))throw A.b(A.R('Source URLs "'+A.q(s)+'" and "'+A.q(b.ga5())+"\" don't match.",null))
return this.b-b.gau()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.y(this.a,b.ga5())&&this.b===b.gau()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.d2(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.q(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaw:1,
ga5(){return this.a},
gau(){return this.b},
gah(){return this.c},
gar(){return this.d}}
A.nx.prototype={
kg(a){if(!J.y(this.a.a,a.ga5()))throw A.b(A.R('Source URLs "'+A.q(this.ga5())+'" and "'+A.q(a.ga5())+"\" don't match.",null))
return Math.abs(this.b-a.gau())},
a2(a,b){if(!J.y(this.a.a,b.ga5()))throw A.b(A.R('Source URLs "'+A.q(this.ga5())+'" and "'+A.q(b.ga5())+"\" don't match.",null))
return this.b-b.gau()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.y(this.a.a,b.ga5())&&this.b===b.gau()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.d2(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.q(p==null?"unknown source":p)+":"+(q.eF(r)+1)+":"+(q.iX(r)+1))+">"},
$iaw:1,
$icu:1}
A.nz.prototype={
pe(a,b,c){var s,r=this.b,q=this.a
if(!J.y(r.ga5(),q.ga5()))throw A.b(A.R('Source URLs "'+A.q(q.ga5())+'" and  "'+A.q(r.ga5())+"\" don't match.",null))
else if(r.gau()<q.gau())throw A.b(A.R("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.kg(r))throw A.b(A.R('Text "'+s+'" must be '+q.kg(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaP(){return this.c}}
A.nA.prototype={
gis(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gah()+1)+", column "+(p.gR().gar()+1)
if(p.ga5()!=null){s=p.ga5()
r=$.ic()
s.toString
s=o+(" of "+r.no(s))
o=s}o+=": "+this.a
q=p.w9(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iH:1}
A.hf.prototype={
gau(){var s=this.b
s=A.Db(s.a,s.b)
return s.b},
$ibn:1,
gh_(){return this.c}}
A.hg.prototype={
ga5(){return this.gR().ga5()},
gm(a){return this.gN().gau()-this.gR().gau()},
a2(a,b){var s=this.gR().a2(0,b.gR())
return s===0?this.gN().a2(0,b.gN()):s},
w9(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.Jq(s,a).w8()},
P(a,b){if(b==null)return!1
return b instanceof A.hg&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gJ(a){return A.cc(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.d2(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaP()+'">'},
$iaw:1}
A.df.prototype={
gbh(){return this.d}}
A.jJ.prototype={
a6(){return"SqliteUpdateKind."+this.b}}
A.cv.prototype={
gJ(a){return A.cc(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.cv&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.ce.prototype={
l(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.q(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.c3(p,new A.xM(),t.N).C(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iH:1}
A.xM.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.Z(a)},
$S:177}
A.l6.prototype={}
A.rr.prototype={
tI(){var s=this,r=s.d
return r==null?s.d=new A.ea(s,A.l([],t.fU),new A.rA(s),new A.rB(s),t.jy):r},
t8(){var s=this,r=s.e
return r==null?s.e=new A.ea(s,A.l([],t.lw),new A.rx(s),new A.ry(s),t.lU):r},
pO(){var s=this,r=s.f
return r==null?s.f=new A.ea(s,A.l([],t.lw),new A.rt(s),new A.ru(s),t.ah):r},
ux(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.A(e)
if(m.length>255)A.v(A.aB(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.bc(m))
r=n.a
q=r.e9(s,1)
s=r.d
p=A.Ec(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.dc(new A.rC(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.CS(this,p,o,o,o)},
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
r=s.l3()
q=r!==0?A.Eg(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aH(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.v(A.A("This database has already been closed"))
r=p.b
q=r.a
s=q.e9(B.e.A(a),1)
q=q.d
r=A.Ec(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.CS(p,r,"executing",a,b)}else{s=p.iA(a,!0)
try{s.ef(new A.bR(b))}finally{s.q()}}},
O(a){return this.aH(a,B.j)},
rA(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.v(A.A("This database has already been closed"))
s=B.e.A(a)
r=e.b
q=r.a
p=q.cI(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.yK(r,p,n,o)
l=A.l([],t.lE)
k=new A.rv(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.l5(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.CS(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null)l.push(new A.hh(f,e,new A.dq(!1).d6(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.l5(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null){l.push(new A.hh(f,e,""))
k.$0()
throw A.b(A.aB(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aB(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
iA(a,b){var s=this.rA(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aB(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
wP(a){return this.iA(a,!1)},
oB(a,b){var s,r=this.iA(a,!0)
try{s=r.kZ(new A.bR(b))
return s}finally{r.q()}},
oA(a){return this.oB(a,B.j)}}
A.rA.prototype={
$0(){var s=this.a,r=s.b
r.a.mW(r.b,new A.rz(s))},
$S:0}
A.rz.prototype={
$3(a,b,c){var s=A.Kt(a)
if(s==null)return
this.a.d.ke(new A.cv(s,b,c))},
$S:178}
A.rB.prototype={
$0(){var s=this.a.b
s.a.mW(s.b,null)
return null},
$S:0}
A.rx.prototype={
$0(){var s=this.a,r=s.b
r.a.mV(r.b,new A.rw(s))
return null},
$S:0}
A.rw.prototype={
$0(){this.a.e.ke(null)},
$S:0}
A.ry.prototype={
$0(){var s=this.a.b
s.a.mV(s.b,null)
return null},
$S:0}
A.rt.prototype={
$0(){var s=this.a,r=s.b
r.a.mU(r.b,new A.rs(s))
return null},
$S:0}
A.rs.prototype={
$0(){var s=this.a.f
s.ke(null)
return 0},
$S:10}
A.ru.prototype={
$0(){var s=this.a.b
s.a.mU(s.b,null)
return null},
$S:0}
A.rC.prototype={
$2(a,b){A.Ma(a,this.a,b)},
$S:179}
A.rv.prototype={
$0(){var s,r,q,p,o,n
this.a.q()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
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
A.of.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.a_("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Kc(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.Ke(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.R("The argument list is unmodifiable",null))},
$ixJ:1}
A.ea.prototype={
gcs(){var s=this.r
return s==null?this.r=this.qD(!1):s},
qD(a){return new A.dp(new A.B8(this,!1),this.$ti.i("dp<1>"))},
ke(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.v(o.bM())
if((n&1)!==0)o.gaQ().aC(a)}else{n=o.b
if(n>=4)A.v(o.bM())
if((n&1)!==0)o.cD(a)
else if((n&3)===0){n=o.hb()
o=new A.cg(a,o.$ti.i("cg<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.ser(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.B8.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.B9(q,a,s)
a.r=a.e=new A.Ba(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dM<1>)")}}
A.B9.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.ko(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.Ba.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,new A.ko(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.xI.prototype={
na(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Ks(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wB(a,b){var s,r,q,p,o,n,m,l,k,j
this.na()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e9(B.e.A(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e9(B.e.A(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d9(r.b.buffer,0,null)[B.c.ag(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.k()
k=new A.yD(r,l,o)
r=r.r
if(r!=null)r.mN(k,l,o)
if(m!==0){j=A.Eg(s,k,m,"opening the database",null,null)
k.l3()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.rr(s,k,!1)}}
A.hh.prototype={
gpN(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.op(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dq(!1).d6(o,0,null,!0))}return q},
gtA(){return null},
bH(a,b){A.CS(this.b,a,b,this.d,this.e)},
lH(){if(this.r||this.b.r)throw A.b(A.A(u.f))},
hd(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dw()
if(s!==0?s!==101:q)r.bH(s,"executing statement")},
th(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rW(o))
l.push(p)}m.dw()
if(p!==0?p!==101:k)m.bH(p,"selecting from statement")
n=m.gpN()
m.gtA()
k=new A.nj(l,n,B.an)
k.pG()
return k},
rW(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ap(r.Number(s)):A.G0(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oO(a)
case 4:return s.l4(a)
case 5:default:return null}},
pz(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.v(A.aB(a,"parameters","Expected "+A.q(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.pA(a[s-1],s)
this.e=a},
pA(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.al(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aP){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.EK(a).l(0)))
break A}if(A.bv(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oN(b,a)
break A}if(t.L.b(a)){s=q.a.oM(b,a)
break A}s=q.py(a,b)
break A}if(s!==0)q.bH(s,"binding parameter")},
py(a,b){throw A.b(A.aB(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eI(a){A:{if(a instanceof A.bR){this.pz(a.a)
break A}if(a instanceof A.lI)a.a.$1(this)}},
dw(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dw()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mZ(s.d)}},
kZ(a){var s=this
s.lH()
s.dw()
s.eI(a)
return s.th()},
ef(a){var s=this
s.lH()
s.dw()
s.eI(a)
s.hd()}}
A.mp.prototype={
iS(a,b){return this.d.I(a)?1:0},
kS(a,b){this.d.G(0,a)},
kT(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r=a.a
if(r==null)r=A.F4(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cz(new Uint8Array(0),0))
else throw A.b(A.hs(14))
return new A.hN(new A.oR(this,r,(b&8)!==0),0)},
kV(a){}}
A.oR.prototype={
nt(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bO(B.f.gac(r.a),0,r.b),b)
return s},
kR(){return this.d>=2?1:0},
iT(){if(this.c)this.a.d.G(0,this.b)},
fQ(){return this.a.d.h(0,this.b).b},
kU(a){this.d=a},
kW(a){},
fR(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cz(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kX(a){this.d=a},
eE(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cz(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.az(0,b,s,a)}}
A.CE.prototype={
$1(a){return a.length!==0},
$S:13}
A.r6.prototype={
pG(){var s,r,q,p,o=A.u(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o.j(0,p,B.b.cQ(s,p))}this.c=o}}
A.nj.prototype={
gt(a){return new A.AS(this)},
h(a,b){return new A.cd(this,A.fN(this.d[b],t.X))},
j(a,b,c){throw A.b(A.a_("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iL:1,
$io:1,
$ir:1}
A.cd.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.al(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gaU(){return this.b},
$iF:1}
A.AS.prototype={
gn(){var s=this.a
return new A.cd(s,A.fN(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.p6.prototype={}
A.p7.prototype={}
A.p9.prototype={}
A.pa.prototype={}
A.vX.prototype={
a6(){return"OpenMode."+this.b}}
A.er.prototype={}
A.bR.prototype={}
A.lI.prototype={}
A.dl.prototype={
l(a){return"VfsException("+this.a+")"},
$iH:1}
A.jI.prototype={}
A.b9.prototype={}
A.ln.prototype={}
A.lm.prototype={
giU(){return 0},
nL(a,b){return 12},
giW(){return 4096},
iV(a,b){var s=this.nt(a,b),r=a.length
if(s<r){B.f.km(a,s,r,0)
throw A.b(B.ei)}},
$ibs:1,
$ijT:1}
A.eX.prototype={}
A.CP.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.v(A.A("No such element"))
r=s.c
q=r.a
q.toString
q.jU(A.n(r).i("b7.E").a(r))
r.d.$0()}},
$S:0}
A.CN.prototype={
$1(a){var s=this.a,r=s.b
s.hm(s.c,new A.eX(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:20}
A.CO.prototype={
$4(a,b,c,d){this.a.$1(c.f4(d))},
$S:181}
A.yI.prototype={}
A.yD.prototype={
l3(){var s=this.a,r=s.r
if(r!=null)r.mZ(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.yK.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
l5(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Ec(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d9(o.b.buffer,0,null)[B.c.ag(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.yJ(s,o,n)
o=o.w
if(o!=null)o.mN(r,s,n)}return new A.p4(r,p)}}
A.yJ.prototype={
oM(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cI(b),J.au(b))},
oN(a,b){var s=B.e.A(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cI(s),s.length)},
l4(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.FQ(s.b,q.sqlite3_column_blob(r,a),p)},
oO(a){var s=this.c
return A.e0(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dZ.prototype={$iDx:1}
A.dm.prototype={$iDy:1}
A.hu.prototype={
sm(a,b){throw A.b(A.a_("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dm(s,A.d9(s.b.buffer,0,null)[B.c.ag(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.a_("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lM.prototype={
wr(a){var s,r,q=this.b
q===$&&A.t()
s="[sqlite3] "+A.e0(q,a,null)
r=$.MG
if(r==null)A.HD(s)
else r.$1(s)},
wp(a,b){var s,r=new A.aG(A.lQ(A.ap(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.t()
s=A.Fm(q.buffer,b,8)
s.$flags&2&&A.I(s)
s[0]=A.Dv(r)
s[1]=A.Dt(r)
s[2]=A.Ds(r)
s[3]=A.wH(r)
s[4]=A.Du(r)-1
s[5]=A.Dw(r)-1900
s[6]=B.c.am(A.K3(r),7)},
ym(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.t()
s=new A.jI(A.DM(j,b,k))
try{r=a.dC(s,d)
if(e!==0){p=r.b
o=A.d9(j.buffer,0,k)
n=B.c.ag(e,2)
o.$flags&2&&A.I(o)
o[n]=p}p=A.d9(j.buffer,0,k)
o=B.c.ag(c,2)
p.$flags&2&&A.I(p)
p[o]=0
m=r.a
return m}catch(l){p=A.D(l)
if(p instanceof A.dl){q=p
p=q.a
j=A.d9(j.buffer,0,k)
o=B.c.ag(c,2)
j.$flags&2&&A.I(j)
j[o]=p}else{j=j.buffer
j=A.d9(j,0,k)
p=B.c.ag(c,2)
j.$flags&2&&A.I(j)
j[p]=1}}return k},
yb(a,b,c){var s=this.b
s===$&&A.t()
return A.c0(new A.rc(a,A.e0(s,b,null),c))},
y3(a,b,c,d){var s=this.b
s===$&&A.t()
return A.c0(new A.r9(this,a,A.e0(s,b,null),c,d))},
yi(a,b,c,d){var s=this.b
s===$&&A.t()
return A.c0(new A.re(this,a,A.e0(s,b,null),c,d))},
yo(a,b,c){return A.c0(new A.rg(this,c,b,a))},
yt(a,b){return A.c0(new A.ri(a,b))},
y9(a,b){var s,r=Date.now(),q=this.b
q===$&&A.t()
s=v.G.BigInt(r)
A.Dj(A.Fl(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
y7(a){return A.c0(new A.rb(a))},
yq(a,b,c,d){return A.c0(new A.rh(this,a,b,c,d))},
yB(a,b,c,d){return A.c0(new A.rm(this,a,b,c,d))},
yx(a,b){return A.c0(new A.rk(a,b))},
yv(a,b){return A.c0(new A.rj(a,b))},
yg(a,b){return A.c0(new A.rd(this,a,b))},
yk(a,b){return A.c0(new A.rf(a,b))},
yz(a,b){return A.c0(new A.rl(a,b))},
y5(a,b){return A.c0(new A.ra(this,a,b))},
yc(a){return a.giU()},
ye(a,b,c){if(t.j2.b(a))return a.nL(b,c)
return 12},
yr(a){if(t.j2.b(a))return a.giW()
return 4096},
uZ(a){a.$0()},
uU(a){return a.$0()},
uX(a,b,c,d,e){var s=this.b
s===$&&A.t()
a.$3(b,A.e0(s,d,null),A.ap(v.G.Number(e)))},
v4(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.t()
r.$2(new A.dZ(s,b),new A.hu(s,c,d))},
v8(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.t()
r.$2(new A.dZ(s,b),new A.hu(s,c,d))},
v6(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.t()
null.$2(new A.dZ(s,b),new A.hu(s,c,d))},
va(a,b){var s
null.toString
s=this.a
s===$&&A.t()
null.$1(new A.dZ(s,b))},
v2(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.t()
r.$1(new A.dZ(s,b))},
v0(a,b,c,d,e){var s=this.b
s===$&&A.t()
return null.$2(A.DM(s,c,b),A.DM(s,e,d))},
uS(a,b){return a.$1(b)},
uQ(a,b){return a.gyF().$1(b)},
uO(a,b,c){return a.gyE().$2(b,c)}}
A.rc.prototype={
$0(){return this.a.kS(this.b,this.c)},
$S:0}
A.r9.prototype={
$0(){var s,r=this,q=r.b.iS(r.c,r.d),p=r.a.b
p===$&&A.t()
p=A.d9(p.buffer,0,null)
s=B.c.ag(r.e,2)
p.$flags&2&&A.I(p)
p[s]=q},
$S:0}
A.re.prototype={
$0(){var s,r,q=this,p=B.e.A(q.b.kT(q.c)),o=p.length
if(o>q.d)throw A.b(A.hs(14))
s=q.a.b
s===$&&A.t()
s=A.bV(s.buffer,0,null)
r=q.e
B.f.d1(s,r,p)
s.$flags&2&&A.I(s)
s[r+o]=0},
$S:0}
A.rg.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.t()
s=A.bV(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.EI(s,q.b)
else return A.EI(s,null)},
$S:0}
A.ri.prototype={
$0(){this.a.kV(A.cK(this.b,0,0))},
$S:0}
A.rb.prototype={
$0(){return this.a.iT()},
$S:0}
A.rh.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.t()
s.b.iV(A.bV(r.buffer,s.c,s.d),A.ap(v.G.Number(s.e)))},
$S:0}
A.rm.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.t()
s.b.eE(A.bV(r.buffer,s.c,s.d),A.ap(v.G.Number(s.e)))},
$S:0}
A.rk.prototype={
$0(){return this.a.fR(A.ap(v.G.Number(this.b)))},
$S:0}
A.rj.prototype={
$0(){return this.a.kW(this.b)},
$S:0}
A.rd.prototype={
$0(){var s,r=this.b.fQ(),q=this.a.b
q===$&&A.t()
q=A.d9(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.rf.prototype={
$0(){return this.a.kU(this.b)},
$S:0}
A.rl.prototype={
$0(){return this.a.kX(this.b)},
$S:0}
A.ra.prototype={
$0(){var s,r=this.b.kR(),q=this.a.b
q===$&&A.t()
q=A.d9(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.dc.prototype={}
A.ih.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bi(A.Dj(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.nE(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.q_(q,this,p,o)
o.d=s
o.f=new A.q0(q,o,s)
return new A.ba(o,A.n(o).i("ba<1>")).aa(a,b,c,d)},
bw(a,b,c){return this.aa(a,null,b,c)}}
A.q_.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a2(q,t.m).b0(new A.q1(p,r.b,s,r),s.gu4(),t.P)},
$S:0}
A.q1.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaQ().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:18}
A.q0.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaQ().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.f0.prototype={
v(){var s=0,r=A.h(t.H),q=this,p
var $async$v=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.v()
p=q.c
if(p!=null)p.v()
q.c=q.b=null
return A.e(null,r)}})
return A.f($async$v,r)},
gn(){var s=this.a
return s==null?A.v(A.A("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.w($.B,t.g5)
s=new A.as(o,t.ex)
r=p.d
q=t.m
p.b=A.bt(r,"success",new A.zW(p,s),!1,q)
p.c=A.bt(r,"error",new A.zX(p,s),!1,q)
return o}}
A.zW.prototype={
$1(a){var s,r=this.a
r.v()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aA(s!=null)},
$S:1}
A.zX.prototype={
$1(a){var s=this.a
s.v()
s=s.d.error
if(s==null)s=a
this.b.aR(s)},
$S:1}
A.qL.prototype={
$1(a){this.a.aA(this.c.a(this.b.result))},
$S:1}
A.qM.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qQ.prototype={
$1(a){this.a.aA(this.c.a(this.b.result))},
$S:1}
A.qR.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qS.prototype={
$1(a){this.a.aR(new A.bp("IndexedDB open blocked"))},
$S:1}
A.ta.prototype={
$1(a){return A.bi(a[1])},
$S:203}
A.yE.prototype={
uy(){var s={}
s.dart=new A.yF(this).$0()
return s},
iq(a){return this.wl(a)},
wl(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a2(v.G.WebAssembly.instantiateStreaming(a,p.uy()),t.m),$async$iq)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iq,r)}}
A.yF.prototype={
$0(){var s=this.a.a,r=A.bi(v.G.Object),q=A.bi(r.create.apply(r,[null]))
q.error_log=A.d0(s.gwq())
q.localtime=A.bZ(s.gwo())
q.xOpen=A.E4(s.gyl())
q.xDelete=A.pz(s.gya())
q.xAccess=A.i_(s.gy0())
q.xFullPathname=A.i_(s.gyh())
q.xRandomness=A.pz(s.gyn())
q.xSleep=A.bZ(s.gys())
q.xCurrentTimeInt64=A.bZ(s.gy8())
q.xClose=A.d0(s.gy6())
q.xRead=A.i_(s.gyp())
q.xWrite=A.i_(s.gyA())
q.xTruncate=A.bZ(s.gyw())
q.xSync=A.bZ(s.gyu())
q.xFileSize=A.bZ(s.gyf())
q.xLock=A.bZ(s.gyj())
q.xUnlock=A.bZ(s.gyy())
q.xCheckReservedLock=A.bZ(s.gy4())
q.xDeviceCharacteristics=A.d0(s.giU())
q.xFileControl=A.pz(s.gyd())
q.xSectorSize=A.d0(s.giW())
q["dispatch_()v"]=A.d0(s.guY())
q["dispatch_()i"]=A.d0(s.guT())
q.dispatch_update=A.E4(s.guW())
q.dispatch_xFunc=A.i_(s.gv3())
q.dispatch_xStep=A.i_(s.gv7())
q.dispatch_xInverse=A.i_(s.gv5())
q.dispatch_xValue=A.bZ(s.gv9())
q.dispatch_xFinal=A.bZ(s.gv1())
q.dispatch_compare=A.E4(s.gv_())
q.dispatch_busy=A.bZ(s.guR())
q.changeset_apply_filter=A.bZ(s.guP())
q.changeset_apply_conflict=A.pz(s.guN())
return q},
$S:34}
A.ht.prototype={}
A.q2.prototype={
iw(){var s=0,r=A.h(t.H),q=this,p,o
var $async$iw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.B,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.d0(new A.q5(o))
new A.as(p,t.h1).aA(A.J1(o,t.m))
s=2
return A.a(p,$async$iw)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$iw,r)},
e4(a,b){return this.ta(a,b)},
ta(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$e4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.It(),b)
o=A.L8(p)
s=2
return A.a(A.Ol(new A.q4(a,o,p),t.mj),$async$e4)
case 2:s=3
return A.a(o.b.a,$async$e4)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$e4,r)},
rw(a){return this.e4(new A.q3(a),"readwrite")}}
A.q5.prototype={
$1(a){var s=A.bi(this.a.result)
if(J.y(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:18}
A.q4.prototype={
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
$S:23}
A.q3.prototype={
$1(a){return this.nM(a)},
nM(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aZ(a),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:26}
A.ke.prototype={
pi(a){var s=A.BW(new A.Aw(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.BW(new A.Ax(this))},
jH(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
rT(a){return this.jH(a,9007199254740992,0)},
rU(a,b){return this.jH(a,9007199254740992,b)},
ip(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ip=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.u(t.N,t.S)
k=new A.f0(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$ip)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.v(A.A("Await moveNext() first"))
n=o.key
n.toString
A.G(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ap(A.f9(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
i4(a){return this.vA(a)},
vA(a){var s=0,r=A.h(t.aV),q,p=this,o
var $async$i4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cI(p.d.index("fileName").getKey(a),t.W),$async$i4)
case 3:q=o.ap(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i4,r)},
jI(a){return A.cI(this.d.get(a),t.B).W(new A.Av(a),t.m)},
eG(a,b){return this.oP(a,b)},
oP(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jI(a),$async$eG)
case 3:h=d
g=h.length
f=new A.cz(new Uint8Array(g),g)
e=new A.f0(p.e.openCursor(p.rT(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eG)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.v(A.A("Await moveNext() first"))
k=n.a(l.key)
j=A.ap(A.f9(k[1]))
if(j>=h.length){s=5
break}i=new A.Ay(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.xo(A.bi(l.value)).W(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eG,r)},
hX(a){return this.uv(a)},
uv(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
o=A
s=3
return A.a(A.cI(p.d.put({name:a,length:0}),t.W),$async$hX)
case 3:q=o.ap(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
aw(a,b){return this.xU(a,b)},
xU(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
s=2
return A.a(q.jI(a),$async$aw)
case 2:p=d
o=b.b
n=A.n(o).i("S<1>")
m=A.N(new A.S(o,n),n.i("o.E"))
B.b.aJ(m)
s=3
return A.a(A.Dd(new A.Y(m,new A.Az(new A.AA(q,a),b),A.a0(m).i("Y<1,x<~>>")),t.H),$async$aw)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.f0(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$aw)
case 6:s=7
return A.a(A.cI(l.gn().update({name:p.name,length:b.c}),t.X),$async$aw)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aw,r)},
dA(a,b,c){return this.xx(0,b,c)},
xx(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
s=2
return A.a(q.jI(b),$async$dA)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cI(q.e.delete(q.rU(b,B.c.M(c,4096)*4096)),t.X),$async$dA)
case 5:case 4:o=new A.f0(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dA)
case 6:s=7
return A.a(A.cI(o.gn().update({name:p.name,length:c}),t.X),$async$dA)
case 7:return A.e(null,r)}})
return A.f($async$dA,r)},
i_(a){return this.uL(a)},
uL(a){var s=0,r=A.h(t.H),q=this,p
var $async$i_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.Dd(A.l([A.cI(q.e.delete(q.jH(a,9007199254740992,0)),p),A.cI(q.d.delete(a),p)],t.iw),t.H),$async$i_)
case 2:return A.e(null,r)}})
return A.f($async$i_,r)}}
A.Aw.prototype={
$0(){this.a.b.aj()},
$S:2}
A.Ax.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aR(r)},
$S:2}
A.Av.prototype={
$1(a){if(a==null)throw A.b(A.aB(this.a,"fileId","File not found in database"))
else return a},
$S:206}
A.Ay.prototype={
$1(a){var s=this.a
s.d1(s,this.b,J.bO(a,0,this.c))},
$S:207}
A.AA.prototype={
op(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cI(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gac(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cI(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cI(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.op(a,b)},
$S:208}
A.Az.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:209}
A.A7.prototype={
tH(a,b,c){B.f.d1(this.b.nr(a,new A.A8(this,a)),b,c)},
u8(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.am(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.tH(p*4096,o,J.bO(B.f.gac(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.A8.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.d1(s,0,J.bO(B.f.gac(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:210}
A.p_.prototype={}
A.dE.prototype={
f1(a){var s=this
if(s.e||s.d.a==null)A.v(A.hs(10))
if(a.ku(s.x)){s.cF(!0)
return a.d.a}else return A.bd(null,t.H)},
cF(a){return this.tx(a)},
tx(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.N(o,o.$ti.i("o.E"))
o.ao(0)
s=5
return A.a(p.d.rw(n).b2(new A.tS(p,n,a)),$async$cF)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cF,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.f1(new A.kc(new A.tT(),new A.as(new A.w($.B,t.D),t.F)))
p.e=!0
p.cF(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.ga3(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dR(a,b){return this.qz(a,b)},
qz(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dR=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.i4(b),$async$dR)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
eV(){var s=0,r=A.h(t.H),q=this,p
var $async$eV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.e4(new A.tR(q,p),"readonly"),$async$eV)
case 2:s=3
return A.a(A.Jn(p,t.H),$async$eV)
case 3:return A.e(null,r)}})
return A.f($async$eV,r)},
cN(){return this.cF(!1)},
iS(a,b){return this.w.d.I(a)?1:0},
kS(a,b){var s=this
s.w.d.G(0,a)
if(!s.y.G(0,a))s.f1(new A.k6(s,a,new A.as(new A.w($.B,t.D),t.F)))},
kT(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.F4(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dC(new A.jI(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.f1(new A.hD(p,o,new A.as(new A.w($.B,t.D),t.F)))
return new A.hN(new A.oS(p,q.a,o),0)},
kV(a){}}
A.tS.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.v(A.A("Future already completed"))
p.cu(null)}o.cF(this.c)},
$S:2}
A.tT.prototype={
$1(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:26}
A.tR.prototype={
$1(a){return this.nS(a)},
nS(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ip(),$async$$1)
case 2:m=c
l=q.a
l.z.D(0,m)
p=m.ga_(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.eG(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:26}
A.oS.prototype={
iV(a,b){this.b.iV(a,b)},
giU(){return 0},
giW(){return 4096},
kR(){return this.b.d>=2?1:0},
iT(){},
fQ(){return this.b.fQ()},
kU(a){this.b.d=a
return null},
kW(a){},
nL(a,b){return 12},
fR(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.v(A.hs(10))
s.b.fR(a)
if(!r.y.E(0,s.c))r.f1(new A.kc(new A.Au(s,a),new A.as(new A.w($.B,t.D),t.F)))},
kX(a){this.b.d=a
return null},
eE(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.v(A.hs(10))
s=m.c
if(l.y.E(0,s)){m.b.eE(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cz(new Uint8Array(0),0)
q=J.bO(B.f.gac(r.a),0,r.b)
m.b.eE(a,b)
p=new Uint8Array(a.length)
B.f.d1(p,0,a)
o=A.l([],t.p8)
n=$.B
o.push(new A.p_(b,p))
l.f1(new A.hW(l,s,q,o,new A.as(new A.w(n,t.D),t.F)))},
$ibs:1,
$ijT:1}
A.Au.prototype={
$1(a){return this.oo(a)},
oo(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dR(a,o.c),$async$$1)
case 3:q=n.dA(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:26}
A.bb.prototype={
ku(a){a.hm(a.c,this,!1)
return!0}}
A.kc.prototype={
aZ(a){return this.w.$1(a)}}
A.k6.prototype={
ku(a){var s,r,q,p
if(!a.gF(0)){s=a.ga3(0)
for(r=this.x;s!=null;)if(s instanceof A.k6)if(s.x===r)return!1
else s=s.gfz()
else if(s instanceof A.hW){q=s.gfz()
if(s.x===r){p=s.a
p.toString
p.jU(A.n(s).i("b7.E").a(s))}s=q}else if(s instanceof A.hD){if(s.x===r){r=s.a
r.toString
r.jU(A.n(s).i("b7.E").a(s))
return!1}s=s.gfz()}else break}a.hm(a.c,this,!1)
return!0},
aZ(a){return this.xo(a)},
xo(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dR(a,o),$async$aZ)
case 2:n=c
p.z.G(0,o)
s=3
return A.a(a.i_(n),$async$aZ)
case 3:return A.e(null,r)}})
return A.f($async$aZ,r)}}
A.hD.prototype={
aZ(a){return this.xn(a)},
xn(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hX(p),$async$aZ)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aZ,r)}}
A.hW.prototype={
ku(a){var s,r=a.b===0?null:a.ga3(0)
for(s=this.x;r!=null;)if(r instanceof A.hW)if(r.x===s){B.b.D(r.z,this.z)
return!1}else r=r.gfz()
else if(r instanceof A.hD){if(r.x===s)break
r=r.gfz()}else break
a.hm(a.c,this,!1)
return!0},
aZ(a){return this.xp(a)},
xp(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.A7(m,A.u(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.p)(m),++o){n=m[o]
l.u8(n.a,n.b)}k=a
s=3
return A.a(q.w.dR(a,q.x),$async$aZ)
case 3:s=2
return A.a(k.aw(c,l),$async$aZ)
case 2:return A.e(null,r)}})
return A.f($async$aZ,r)}}
A.fJ.prototype={
a6(){return"FileType."+this.b}}
A.he.prototype={
bS(){var s=this.d
if(s!=null)return s
throw A.b(A.A("VFS closed"))},
iS(a,b){var s=$.CV().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bS().bv(s)?1:0},
kS(a,b){var s=$.CV().h(0,a)
if(s==null){this.e.d.G(0,a)
return null}else this.bS().fs(s,!1)},
kT(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dC(a,b)
s=$.CV().h(0,p)
if(s==null)return q.e.dC(a,b)
r=q.bS()
if(!r.bv(s))if((b&4)!==0){r.dm(s).truncate(0)
r.fs(s,!0)}else throw A.b(B.eh)
return new A.hN(new A.pf(q,s,(b&8)!==0),0)},
kV(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cU(a,b){return this.wD(a,b)},
cT(a){return this.cU(a,!1)},
wD(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.xF(a,b)
s=2
return A.a(m.$1("meta"),$async$cU)
case 2:l=d
k=J.y(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cU)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cU)
case 4:o=d
n=q.d=new A.AO(new Uint8Array(2),l,p,o)
if(k){n.fs(B.b3,p.getSize()>0)
n.fs(B.b4,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cU,r)}}
A.xF.prototype={
oi(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.oi(a)},
$S:211}
A.pf.prototype={
nt(a,b){return A.F1(this.a.bS().dm(this.b),a,{at:b})},
kR(){return this.d>=2?1:0},
iT(){var s=this.a,r=this.b
s.bS().dm(r).flush()
if(this.c)s.bS().fs(r,!1)},
fQ(){return this.a.bS().dm(this.b).getSize()},
kU(a){this.d=a},
kW(a){this.a.bS().dm(this.b).flush()},
fR(a){this.a.bS().dm(this.b).truncate(a)},
kX(a){this.d=a},
eE(a,b){if(A.F2(this.a.bS().dm(this.b),a,{at:b})<a.length)throw A.b(B.ej)}}
A.AO.prototype={
bv(a){var s=this.a
A.F1(this.b,s,{at:0})
return s[a.a]!==0},
fs(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.I(s)
s[a.a]=r
A.F2(this.b,s,{at:0})},
dm(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.yy.prototype={
pf(a,b){var s=this,r=s.c
r.a!==$&&A.eh()
r.a=s
r=t.S
A.A9(new A.yz(s),r)
A.A9(new A.yA(s),r)
s.r=A.A9(new A.yB(s),r)
s.w=A.A9(new A.yC(s),r)},
e9(a,b){var s=J.K(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bV(this.b.buffer,0,null)
B.f.az(q,r,r+s.gm(a),a)
B.f.km(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cI(a){return this.e9(a,0)},
mW(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mU(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mV(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.yz.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.yA.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.yB.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.yC.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.iu.prototype={}
A.wK.prototype={
pc(a){var s,r=this,q=r.a
q.start()
r.c=A.bt(q,"message",new A.wO(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.l0()
q.toString
A.jV(q,s,null,null,!1).W(new A.wP(r),t.P)}},
jx(a){return this.qK(a)},
qK(a){var s=0,r=A.h(t.H),q=this
var $async$jx=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.NI(a,new A.wL(q),q.gvZ(),new A.wM(q),new A.wN(q))
return A.e(null,r)}})
return A.f($async$jx,r)},
fY(a,b,c){return this.oH(a,b,c,c)},
oH(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fY=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.IS(null))
o=p.e++
n=new A.w($.B,t.a7)
p.f.j(0,o,new A.as(n,t.h1))
a.i=o
p.a.postMessage(a,A.i4(a))
s=3
return A.a(n,$async$fY)
case 3:m=f
if(J.y(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Kg(m))
case 1:return A.e(q,r)}})
return A.f($async$fY,r)},
r2(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.v()
s=q.d
if(s!=null)s.v()
for(s=q.f,r=new A.aV(s,s.r,s.e,A.n(s).i("aV<2>"));r.k();)r.d.aR(new A.iq(a))
s.ao(0)
p.aj()},
m_(){return this.r2(null)}}
A.wO.prototype={
$1(a){if(a.data=="_disconnect"){this.a.m_()
return}this.a.jx(A.bi(a.data))},
$S:1}
A.wP.prototype={
$1(a){this.a.m_()
a.a.aj()},
$S:212}
A.wN.prototype={
$1(a){var s=this.a.f.G(0,a.i)
if(s!=null)s.aA(a)},
$S:18}
A.wM.prototype={
$1(a){return this.oa(a)},
oa(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.uV(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bB(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.D(a0)
k=A.ad(a0)
if(!(l instanceof A.dv)){b.console.error("Error in worker: "+J.Z(l))
b.console.error("Original trace: "+A.q(k))}b=l
if(b instanceof A.ce){h=A.Jf(b)
g=0}else{g=b instanceof A.dv?1:null
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
$S:213}
A.wL.prototype={
$1(a){var s=this.a.r.G(0,a.i)
if(s!=null)s.abort()},
$S:18}
A.iq.prototype={
l(a){return"Channel to database worker is closed: "+A.q(this.a)},
$iH:1}
A.rp.prototype={
ck(a){return this.wm(a)},
wm(a){var s=0,r=A.h(t.n),q
var $async$ck=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.yH(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ck,r)}}
A.lH.prototype={}
A.r7.prototype={}
A.eV.prototype={}
A.m0.prototype={
ir(){var s=0,r=A.h(t.H),q=this
var $async$ir=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cT(q.b),$async$ir)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ir,r)},
kG(){var s=0,r=A.h(t.H),q=this
var $async$kG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kG,r)}}
A.ts.prototype={
xs(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
qE(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.yO.prototype={
$1(a){var s=new A.w($.B,t.D),r=new A.d5(new A.as(s,t.F))
this.a.a=r
this.b.aA(r)
return A.Jo(s)},
$S:214}
A.yP.prototype={
$2(a,b){var s,r,q
A.bi(a)
s=J.y(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bt(new A.dv("Operation was cancelled"),b)
else q.bt(a,b)}return null},
$S:215}
A.d5.prototype={}
A.lN.prototype={
gul(){if(this.c.a)return!1
return!this.d||this.f!=null},
dJ(a){return this.pm(a)},
pm(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dJ=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.l0()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jV(n,o.a,null,o.gqO(),!0),$async$dJ)
case 6:m=c
s=7
return A.a(A.jV(n,o.b,a,null,!1),$async$dJ)
case 7:l=c
j=o.e
j=j==null?null:j.ir()
s=8
return A.a(j instanceof A.w?j:A.bB(j,t.H),$async$dJ)
case 8:o.f=new A.a6(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.aj()
j=l
if(j!=null)j.a.aj()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dJ,r)},
qP(){this.nv()},
kz(a,b,c){return this.c.iO(new A.rE(this,a,b,c),b,c)},
nv(){return this.c.kQ(new A.rF(this),t.H)}}
A.rE.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dJ(r.c).W(new A.rD(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rD.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rF.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kG()
s.a.aj()
r.a.aj()
p.f=null}},
$S:2}
A.je.prototype={
iO(a,b,c){return this.xT(a,b,c,c)},
kQ(a,b){return this.iO(a,null,b)},
xT(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iO=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.y(g?null:b.aborted,!0))throw A.b(B.aq)
h.a=!1
o=new A.vP(h,p)
if(!p.a){h.a=p.a=!0
q=A.iK(a,c).b2(o)
s=1
break}else{n={}
m=new A.w($.B,c.i("w<0>"))
l=new A.as(m,c.i("as<0>"))
n.a=null
h=new A.vO(h,n,l,a,c)
if(!g)n.a=A.bt(b,"abort",new A.vN(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.a8(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ai(j,0,i,h,n)
B.b.ai(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.b2(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iO,r)}}
A.vP.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gF(0)){s=r.b
if(s===r.c)A.v(A.aH());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.vO.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.v()
r.c.aA(A.iK(r.d,r.e))},
$S:0}
A.vN.prototype={
$1(a){var s,r=this
r.a.a.v()
s=r.c
if((s.a.a&30)===0){r.b.b.G(0,r.d)
s.aR(B.aq)}},
$S:1}
A.es.prototype={
gnB(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
B.b.D(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.rV.prototype={
$1(a){if(a!=null)return A.G(a)
return null},
$S:216}
A.mK.prototype={
a6(){return"MessageType."+this.b}}
A.xr.prototype={
uV(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.ib(a,b)
case"connect":return p.ko(a,b)
case"custom":return p.ej(a,b)
case"fileSystemExists":return p.fj(a,b)
case"fileSystemFlush":return p.fk(a,b)
case"fileSystemAccess":return p.fi(a,b)
case"runQuery":return p.ih(a,b)
case"exclusiveLock":return p.ia(a,b)
case"releaseLock":s=p.bC(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.v(A.A("Lock to be released is not active."))
q.b.aj()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.i8(a,b)
case"openAdditionalConnection":return p.ic(a,b)
case"updateRequest":return p.ii(a,b)
case"rollbackRequest":return p.ig(a,b)
case"commitRequest":return p.i9(a,b)
case"dedicatedCompatibilityCheck":return p.dT(a,b)
case"sharedCompatibilityCheck":return p.dT(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dT(a,b)
default:r=A.fa(new A.bE(!1,o,o,"Unsupported request "+A.q(a.t)),o)
q=new A.w($.B,t.hl)
q.ct(r)
return q}}}
A.dA.prototype={
a6(){return"FileSystemImplementation."+this.b}}
A.cy.prototype={
a6(){return"TypeCode."+this.b},
uC(a){var s=null
switch(this.a){case 0:s=A.v(A.R("Unsupported type code",null))
break
case 1:a=A.ap(A.f9(a))
s=a
break
case 2:s=A.G0(t.bJ.a(a).toString(),null)
break
case 3:A.f9(a)
s=a
break
case 4:A.G(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hY(a)
s=a
break
case 6:break}return s}}
A.eu.prototype={
mO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.R("Expected "+A.q(r)+" parameters, got "+A.q(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aH:B.b8[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ap(A.f9(h))))
if(k!==0)a.bH(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bH(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f9(h))
if(k!==0)a.bH(k,e)
break
case 4:g=B.e.A(A.G(h))
k=s.dart_sqlite3_bind_text(d,i,c.cI(g),g.length)
if(k!==0)a.bH(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cI(h),h.length)
if(k!==0)a.bH(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bH(k,e)
break
case 7:f=A.hY(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bH(k,e)
break
case 0:throw A.b(A.a_("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mA()},
h(a,b){var s=this.c[b],r=s>=8?B.aH:B.b8[s]
return r.uC(this.a[b])},
j(a,b,c){this.mA()},
mA(){throw A.b(A.a_("decodeValues list is unmodifiable"))}}
A.Cd.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:18}
A.qJ.prototype={
$1(a){this.a.aA(this.c.a(this.b.result))},
$S:1}
A.qK.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qN.prototype={
$1(a){this.a.aA(this.c.a(this.b.result))},
$S:1}
A.qO.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qP.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.wG.prototype={
vc(){var s,r,q,p
for(s=this.b,r=new A.aV(s,s.r,s.e,A.n(s).i("aV<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.ao(0)}}
A.iG.prototype={
a6(){return"FileType."+this.b}}
A.dS.prototype={
a6(){return"StorageMode."+this.b}}
A.h6.prototype={
l(a){return"Remote error: "+this.a},
$iH:1}
A.dv.prototype={}
A.BV.prototype={
$1(a){return A.bi(a.data)},
$S:218}
A.ks.prototype={
v(){var s=this.a
if(s!=null)s.v()
this.a=null}}
A.hC.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.v()
q.d.v()
q.e.v()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)p[n].abort()
B.b.ao(p)
p=q.f
if(p!=null)p.b.aj()
s=2
return A.a(q.a.f8(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
ms(a){var s=new v.G.AbortController()
a.onabort=A.BW(new A.zN(s))
this.w.push(s)
return s},
kO(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gul()){r=p.ms(b)
o=s.kz(c,r.signal,d).b2(new A.zR(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.A("Requested operation on inactive lock state."))}if(o==null)o=A.iK(c,d)
q=p.a.z
return q instanceof A.dE?o.b2(q.gvD()):o},
wA(a){var s=this,r=s.ms(a),q=new A.w($.B,t.hy),p=new A.aE(q,t.ho),o=t.H
A.Dc(s.a.f.kz(new A.zO(s,p),r.signal,o),new A.zP(p),o,t.K)
return q.b2(new A.zQ(s,r))}}
A.zN.prototype={
$0(){return this.a.abort()},
$S:0}
A.zR.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.zO.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.B,t.D)
s.f=new A.a6(r,new A.aE(q,t.h))
this.b.aA(r)
return q},
$S:3}
A.zP.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bt(a,b)},
$S:6}
A.zQ.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.hA.prototype={
ph(a,b,c){this.b.a.b2(new A.zx(this))},
dT(a,b){return this.qF(a,b)},
qF(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mQ(a),$async$dT)
case 3:q={r:d.gnB(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
ko(a,b){return this.vM(a,b)},
vM(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ko=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glT()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.i4(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ko,r)},
ej(a,b){return this.vN(a,b)},
vN(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ej=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lB(l)
n=a.r
s=7
return A.a(o.a.gcm(),$async$ej)
case 7:s=6
return A.a(d.cO(p,new A.r7(n)),$async$ej)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cO(p,new A.lH(a)),$async$ej)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ej,r)},
ib(a,b){return this.w0(a,b)},
w0(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ib=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kQ(new A.zC(p,a),t.m),$async$ib)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)},
ih(a,b){return this.w4(a,b)},
w4(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ih=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bC(a)
n=o.a
s=3
return A.a(n.gcm(),$async$ih)
case 3:m=d
q=o.kO(a.z,b,new A.zF(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)},
ia(a,b){return this.vR(a,b)},
vR(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ia=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bC(a).wA(b),$async$ia)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
i9(a,b){return this.vL(a,b)},
vL(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bC(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.zz(p,o),a),$async$i9)
case 6:q=d
s=1
break
s=4
break
case 5:n.v()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$i9,r)},
ig(a,b){return this.w3(a,b)},
w3(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ig=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bC(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.zE(p,o),a),$async$ig)
case 6:q=d
s=1
break
s=4
break
case 5:n.v()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$ig,r)},
ii(a,b){return this.w6(a,b)},
w6(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ii=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bC(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.zH(p,o),a),$async$ii)
case 6:q=d
s=1
break
s=4
break
case 5:n.v()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$ii,r)},
ic(a,b){return this.w1(a,b)},
w1(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ic=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bC(a).a;++m.w
s=3
return A.a(A.Cg(),$async$ic)
case 3:o=d
n=o.a
p.w.ld(o.b).x.push(A.G1(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ic,r)},
i8(a,b){return this.vK(a,b)},
vK(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$i8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bC(a)
B.b.G(p.x,o)
s=3
return A.a(o.q(),$async$i8)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
fk(a,b){return this.vU(a,b)},
vU(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bC(a).a.gd_(),$async$fk)
case 3:o=d
s=o instanceof A.dE?4:5
break
case 4:s=6
return A.a(o.cF(!1),$async$fk)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
fi(a,b){return this.vS(a,b)},
vS(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bC(a)
n=B.b9[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gd_(),$async$fi)
case 4:s=3
return A.a(l.kO(null,k,new j.zA(d,n,m,a),t.m),$async$fi)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
fj(a,b){return this.vT(a,b)},
vT(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bC(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gd_(),$async$fj)
case 4:s=3
return A.a(n.kO(null,m,new l.zB(d,a),t.y),$async$fj)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
dH(a,b,c){return this.oR(a,b,c)},
oR(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dH)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dH,r)},
w_(a){},
f6(a){var s=0,r=A.h(t.X),q,p=this
var $async$f6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fY({r:a,z:null,i:0,d:null,t:"custom"},B.df,t.m),$async$f6)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f6,r)},
lB(a){return B.b.n5(this.x,new A.zw(a))},
bC(a){var s=a.d
if(s!=null)return this.lB(s)
else throw A.b(A.R("Request requires database id",null))},
$iEQ:1}
A.zx.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.p)(p),++n
s=2
break
case 4:B.b.ao(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.zC.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.ck(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vB(h.d,A.Ji(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gd_():m.gcm(),$async$$0)
case 8:l=A.G1(m,null)
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
return A.a(m.f8(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:219}
A.zF.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.A("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.eu(s,r,A.bV(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oC(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ap(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.vr(l,k.s,q)
s=o.d
return A.Hz(s.sqlite3_get_autocommit(p)!==0,m,A.ap(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:34}
A.zz.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcm(),$async$$0)
case 3:q=b.a.pO().gcs().aW(new A.zy(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:72}
A.zy.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.i4(s))},
$S:73}
A.zE.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcm(),$async$$0)
case 3:q=b.a.t8().gcs().aW(new A.zD(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:72}
A.zD.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.i4(s))},
$S:73}
A.zH.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcm(),$async$$0)
case 3:q=b.a.tI().gcs().aW(new A.zG(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:222}
A.zG.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.i4(s))},
$S:223}
A.zA.prototype={
$0(){var s,r,q,p=this,o=p.a.dC(new A.jI(A.GH(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fR(s.byteLength)
o.eE(A.bV(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fQ()
r=new Uint8Array(q)
o.iV(r,0)
q={r:t.a.a(J.IB(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iT()}},
$S:34}
A.zB.prototype={
$0(){return this.a.iS(A.GH(B.b9[this.b.f]),0)===1},
$S:48}
A.zw.prototype={
$1(a){return a.b===this.a},
$S:224}
A.lO.prototype={
gd_(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gd_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iK(new A.rI(p),t.H):o,$async$gd_)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gd_,r)},
gcm(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iK(new A.rH(p),t.u):o,$async$gcm)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcm,r)},
f8(){var s=0,r=A.h(t.H),q=this
var $async$f8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$f8)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f8,r)},
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
if(j!=null)j.vc()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.Ev()
A.Da(m)
k=l.a.get(m)
if(k==null)A.v(A.A("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bB(j,t.H),$async$q)
case 6:q.f.nv()
return A.e(null,r)}})
return A.f($async$q,r)},
m7(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.G(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a6(s,!0)
p=a.iA(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.G(0,new A.S(n,A.n(n).i("S<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a6(p,!0)}return new A.a6(p,!1)},
vr(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aH(b,B.j)
else{s=null
r=null
q=this.m7(a,b)
s=q.a
r=q.b
try{s.ef(new A.lI(c.guj()))}finally{if(r)s.dw()
else s.q()}}},
oC(a,b,c){var s,r=null,q=null,p=this.m7(a,b)
r=p.a
q=p.b
try{s=A.Kh(r,c)
return s}finally{if(q)r.dw()
else r.q()}}}
A.rI.prototype={
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
return A.a(A.xE("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ged()
s=3
break
case 5:case 6:s=10
return A.a(A.m1("drift_db/"+l.c,k===B.ay,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ged()
s=3
break
case 7:s=11
return A.a(A.mr(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ged()
s=3
break
case 8:l.z=A.Df("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rH.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gd_(),$async$$0)
case 4:n=b
o.na()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e9(B.e.A(n.a),1),n,0)
if(m===0)A.v(A.A("could not register vfs"))
$.Ev().j(0,n,m)
s=5
return A.a(l.f.kz(new A.rG(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:74}
A.rG.prototype={
$0(){var s=this.a
return s.a.b.ix(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:74}
A.z0.prototype={
glT(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.oL()
r.Q!==$&&A.CT()
r.Q=s
q=s}return q},
ek(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ek=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cC(A.cD(A.M9(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ek)
case 7:if(!b){s=6
break}m=h.gn()
s=J.y(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.iu(i.port,i.lockName,null)
n.ld(l)
s=9
break
case 10:s=A.O4(m.t)?11:12
break
case 11:s=13
return A.a(n.mQ(m),$async$ek)
case 13:k=b
j.postMessage(k.gnB())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.v(),$async$ek)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ek,r)},
ld(a){var s=this,r=A.L_(a,s.d++,s)
s.c.push(r)
r.b.a.b2(new A.z1(s,r))
return r},
mQ(a){return this.x.kQ(new A.z2(this,a),t.p6)},
ck(a){return this.wn(a)},
wn(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ck=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bi(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.A("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.q(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bB(n,t.he),$async$ck)
case 5:s=3
break
case 4:o=A.Dc(q.b.ck(m),new A.z3(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$ck)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$ck,r)},
vB(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aV(s,s.r,s.e,A.n(s).i("aV<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ay||b===B.b2
o=A.Dn(t.cj)
n=c===0?null:new A.wG(c,A.dI(null,null,t.N,t.fw))
n=new A.lO(this,r,a,b,d,new A.lN(q+"-outer",q,new A.je(o),p),n)
s.j(0,r,n)
return n}}
A.z1.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.z2.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.y(d.t,"dedicatedCompatibilityCheck")||J.y(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.ee(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.y(d.t,"dedicatedCompatibilityCheck")||J.y(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.pF(),$async$$0)
case 9:case 8:j=a1
i=A.aO(t.cU)
s=J.y(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glT()
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
return A.a(new A.hG(n,"message",!1,t.d4).gH(0),$async$$0)
case 15:e=b.IZ(a.bi(a1.data))
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
break}i.u(0,new A.a6(B.bk,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.Cc(c),$async$$0)
case 23:if(a1)i.u(0,new A.a6(B.bl,c))
case 22:d=A.N(i,i.$ti.c)
q=new A.es(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:226}
A.z3.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:227}
A.kE.prototype={}
A.oJ.prototype={
gn8(){return new A.hG(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.pd.prototype={
gn8(){return new A.dp(new A.B2(this),t.k8)},
q(){}}
A.B2.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.bt(this.a.a,"connect",new A.B_(new A.B3(s,r,a)),!1,t.m))
a.r=new A.B0(r)},
$S:228}
A.B3.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bt(a,"message",new A.B1(this.c),!1,t.m))},
$S:1}
A.B1.prototype={
$1(a){this.a.u7(a)},
$S:1}
A.B_.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bQ(r,A.a0(r).i("bQ<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.B0.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].v()},
$S:2}
A.oK.prototype={
oL(){var s=v.G
if(!("Worker" in s))return null
return new A.A2(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.A2.prototype={}
A.nI.prototype={
gh_(){return A.G(this.c)}}
A.xW.prototype={
gky(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iY(a){var s,r=this,q=r.d=J.IE(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
n3(a,b){var s
if(this.iY(a))return
if(b==null)if(a instanceof A.eB)b="/"+a.a+"/"
else{s=J.Z(a)
s=A.C(s,"\\","\\\\")
b='"'+A.C(s,'"','\\"')+'"'}this.lJ(b)},
fg(a){return this.n3(a,null)},
vv(){if(this.c===this.b.length)return
this.lJ("no more input")},
vq(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.v(A.b2("position must be greater than or equal to 0."))
else if(c>n.length)A.v(A.b2("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.v(A.b2("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.xG(s,r,new Uint32Array(q))
p.pd(new A.cm(n),s)
o=c+b
if(o>q)A.v(A.b2("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.v(A.b2("Start may not be negative, was "+c+"."))
throw A.b(new A.nI(n,a,new A.hH(p,c,o)))},
lJ(a){this.vq("expected "+a+".",0,this.c)}}
A.hp.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.F5(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.F5(b,this))
s=this.a
s.$flags&2&&A.I(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.I(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lx(b)
B.f.az(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.tF(q)
q=r.a
s=r.b++
q.$flags&2&&A.I(q)
q[s]=b},
lx(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
tF(a){var s=this.lx(null)
B.f.az(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ax(c,0,s,null,null))
s=this.a
if(d instanceof A.cz)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
az(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.oT.prototype={}
A.cz.prototype={}
A.D8.prototype={}
A.hG.prototype={
aa(a,b,c,d){return A.bt(this.a,this.b,a,!1,this.$ti.c)},
bw(a,b,c){return this.aa(a,null,b,c)}}
A.ka.prototype={
v(){var s=this,r=A.bd(null,t.H)
if(s.b==null)return r
s.jV()
s.d=s.b=null
return r},
iv(a){var s,r=this
if(r.b==null)throw A.b(A.A("Subscription has been canceled."))
r.jV()
s=A.Hc(new A.A6(a),t.m)
s=s==null?null:A.d0(s)
r.d=s
r.jT()},
b4(){if(this.b==null)return;++this.a
this.jV()},
aY(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jT()},
jT(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jV(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibq:1}
A.A5.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.A6.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dH.prototype
s.oX=s.l
s=A.bG.prototype
s.oT=s.nb
s.oU=s.nc
s.oW=s.ne
s.oV=s.nd
s=A.b5.prototype
s.j_=s.aC
s.la=s.aL
s.lb=s.aV
s=A.dn.prototype
s.p_=s.lu
s.p0=s.lO
s.p5=s.mp
s=A.J.prototype
s.l9=s.ai
s=A.aF.prototype
s.l8=s.ui
s=A.kt.prototype
s.p6=s.q
s=A.o.prototype
s.oS=s.dB
s=A.lj.prototype
s.l6=s.i6
s=A.fs.prototype
s.l7=s.fa
s=A.hg.prototype
s.oZ=s.a2
s.oY=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Mj","Jy",49)
r(A,"Mw","K1",10)
q(A,"N4","KL",20)
q(A,"N5","KM",20)
q(A,"N6","KN",20)
q(A,"N7","My",15)
r(A,"Hh","MX",0)
q(A,"N8","Mz",28)
s(A,"N9","MB",14)
r(A,"C7","MA",0)
p(A,"Ne",5,null,["$5"],["MR"],230,0)
p(A,"Nj",4,null,["$1$4","$4"],["C1",function(a,b,c,d){return A.C1(a,b,c,d,t.z)}],231,0)
p(A,"Nl",5,null,["$2$5","$5"],["C2",function(a,b,c,d,e){var i=t.z
return A.C2(a,b,c,d,e,i,i)}],232,0)
p(A,"Nk",6,null,["$3$6"],["E8"],233,0)
p(A,"Nh",4,null,["$1$4","$4"],["GZ",function(a,b,c,d){return A.GZ(a,b,c,d,t.z)}],234,0)
p(A,"Ni",4,null,["$2$4","$4"],["H_",function(a,b,c,d){var i=t.z
return A.H_(a,b,c,d,i,i)}],235,0)
p(A,"Ng",4,null,["$3$4","$4"],["GY",function(a,b,c,d){var i=t.z
return A.GY(a,b,c,d,i,i,i)}],236,0)
p(A,"Nc",5,null,["$5"],["MQ"],237,0)
p(A,"Nm",4,null,["$4"],["C3"],238,0)
p(A,"Nb",5,null,["$5"],["MP"],239,0)
p(A,"Na",5,null,["$5"],["MO"],240,0)
p(A,"Nf",4,null,["$4"],["MS"],241,0)
p(A,"Nd",5,null,["$5"],["GX"],242,0)
var j
o(j=A.eY.prototype,"geP","bP",0)
o(j,"geQ","bQ",0)
n(A.eZ.prototype,"gus",0,1,null,["$2","$1"],["bt","aR"],70,0,0)
m(A.w.prototype,"gjc","pT",14)
n(j=A.e9.prototype,"gu4",0,1,null,["$2","$1"],["bg","k_"],70,0,0)
l(j,"gpt","aC",17)
m(j,"gpp","aL",14)
o(j,"gpK","aV",0)
o(j=A.e2.prototype,"geP","bP",0)
o(j,"geQ","bQ",0)
o(j=A.b5.prototype,"geP","bP",0)
o(j,"geQ","bQ",0)
o(A.hF.prototype,"gm4","rl",0)
l(j=A.cC.prototype,"grd","re",17)
m(j,"grh","ri",14)
o(j,"grf","rg",0)
o(j=A.hI.prototype,"geP","bP",0)
o(j,"geQ","bQ",0)
l(j,"gjr","js",17)
m(j,"gjv","jw",152)
o(j,"gjt","ju",0)
o(j=A.hP.prototype,"geP","bP",0)
o(j,"geQ","bQ",0)
l(j,"gjr","js",17)
m(j,"gjv","jw",14)
o(j,"gjt","ju",0)
s(A,"Ee","M2",42)
q(A,"Ef","M3",31)
s(A,"Nr","JG",49)
q(A,"NB","M6",38)
k(j=A.oz.prototype,"gu3","u",17)
o(j,"ged","q",0)
q(A,"Hm","NY",31)
s(A,"Hl","NX",42)
q(A,"NC","KF",7)
p(A,"Oa",2,null,["$1$2","$2"],["Hx",function(a,b){return A.Hx(a,b,t.cZ)}],243,0)
m(j=A.lR.prototype,"gvp","V",42)
l(j,"gw7","ad",31)
l(j,"gwe","wf",15)
q(A,"Np","IR",7)
o(j=A.jo.prototype,"grj","rk",0)
l(j,"grm","rn",113)
q(A,"Om","K_",60)
q(A,"Hk","J6",245)
q(A,"Nx","Jb",246)
q(A,"Nz","Ju",247)
q(A,"Nw","IN",248)
q(A,"Ny","Jh",249)
q(A,"pH","Ja",7)
q(A,"NO","F_",250)
r(A,"NP","N_",251)
r(A,"O6","M4",10)
r(A,"PF","M5",10)
q(A,"Oc","MN",252)
l(A.n1.prototype,"gx0","x3",9)
q(A,"Nt","D4",168)
l(j=A.nJ.prototype,"gvX","vY",37)
l(j,"gvV","vW",137)
o(j,"gr9","jF",0)
q(A,"Os","Kx",60)
o(A.oD.prototype,"gvF","kn",0)
o(A.nd.prototype,"gkf","fa",0)
o(A.mX.prototype,"gkf","fa",0)
l(j=A.fs.prototype,"gra","rb",37)
o(j,"gmC","e7",3)
m(A.on.prototype,"gqG","hk",58)
m(A.om.prototype,"gqM","hl",58)
l(j=A.lM.prototype,"gwq","wr",9)
m(j,"gwo","wp",182)
n(j,"gyl",0,5,null,["$5"],["ym"],183,0,0)
n(j,"gya",0,3,null,["$3"],["yb"],184,0,0)
n(j,"gy0",0,4,null,["$4"],["y3"],61,0,0)
n(j,"gyh",0,4,null,["$4"],["yi"],61,0,0)
n(j,"gyn",0,3,null,["$3"],["yo"],186,0,0)
m(j,"gys","yt",62)
m(j,"gy8","y9",62)
l(j,"gy6","y7",44)
n(j,"gyp",0,4,null,["$4"],["yq"],64,0,0)
n(j,"gyA",0,4,null,["$4"],["yB"],64,0,0)
m(j,"gyw","yx",190)
m(j,"gyu","yv",19)
m(j,"gyf","yg",19)
m(j,"gyj","yk",19)
m(j,"gyy","yz",19)
m(j,"gy4","y5",19)
l(j,"giU","yc",44)
n(j,"gyd",0,3,null,["$3"],["ye"],192,0,0)
l(j,"giW","yr",44)
l(j,"guY","uZ",20)
l(j,"guT","uU",193)
n(j,"guW",0,5,null,["$5"],["uX"],194,0,0)
n(j,"gv3",0,4,null,["$4"],["v4"],35,0,0)
n(j,"gv7",0,4,null,["$4"],["v8"],35,0,0)
n(j,"gv5",0,4,null,["$4"],["v6"],35,0,0)
m(j,"gv9","va",67)
m(j,"gv1","v2",67)
n(j,"gv_",0,5,null,["$5"],["v0"],197,0,0)
m(j,"guR","uS",198)
m(j,"guP","uQ",199)
n(j,"guN",0,3,null,["$3"],["uO"],200,0,0)
o(j=A.dE.prototype,"ged","q",3)
o(j,"gvD","cN",3)
o(A.he.prototype,"ged","q",0)
o(A.lN.prototype,"gqO","qP",0)
l(A.eu.prototype,"guj","mO",217)
l(A.hA.prototype,"gvZ","w_",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.Dl,J.mt,A.jC,J.fp,A.zV,A.zt,A.o,A.lr,A.eq,A.X,A.af,A.J,A.xC,A.ar,A.mI,A.cY,A.lY,A.nW,A.nu,A.lV,A.ol,A.iH,A.o7,A.jQ,A.hM,A.j1,A.fx,A.hJ,A.ct,A.yq,A.mW,A.iB,A.kq,A.v3,A.bH,A.aV,A.mF,A.eB,A.hL,A.os,A.hk,A.Bb,A.oA,A.pp,A.cs,A.oP,A.pm,A.ku,A.jY,A.ou,A.kf,A.pj,A.aq,A.ab,A.b5,A.k3,A.nX,A.kd,A.eZ,A.ch,A.w,A.ot,A.e9,A.pk,A.k_,A.oq,A.oL,A.A3,A.e7,A.hF,A.cC,A.k9,A.BA,A.BC,A.BB,A.By,A.Bz,A.Bx,A.Bu,A.pv,A.Bt,A.Bs,A.Bw,A.Bv,A.pu,A.pw,A.pt,A.hX,A.jX,A.oQ,A.AM,A.e5,A.oX,A.b7,A.oZ,A.po,A.oY,A.nH,A.lu,A.aF,A.ow,A.qb,A.ov,A.ls,A.pe,A.f_,A.AI,A.Bc,A.pr,A.dq,A.aP,A.oO,A.aG,A.aD,A.A4,A.mZ,A.jK,A.oN,A.bn,A.ms,A.T,A.W,A.pi,A.jM,A.nm,A.a4,A.kB,A.yv,A.ci,A.lZ,A.mV,A.AB,A.AC,A.lW,A.a5,A.lS,A.iR,A.eD,A.hU,A.hK,A.j0,A.lR,A.mU,A.o8,A.cn,A.c6,A.tt,A.qo,A.j_,A.jF,A.vi,A.jE,A.xB,A.r8,A.ro,A.zU,A.ep,A.li,A.lj,A.q7,A.mN,A.fP,A.q6,A.jo,A.wB,A.B4,A.wq,A.w8,A.jq,A.hQ,A.wr,A.B5,A.ez,A.dB,A.mn,A.cN,A.dC,A.dU,A.w6,A.lz,A.js,A.c7,A.me,A.ng,A.ah,A.vL,A.xh,A.eM,A.cR,A.nb,A.xz,A.np,A.eR,A.b8,A.eU,A.nB,A.dQ,A.a3,A.ql,A.qm,A.qn,A.rW,A.f7,A.AK,A.pl,A.hO,A.u2,A.iy,A.qI,A.ix,A.dJ,A.iC,A.bm,A.v9,A.cL,A.tb,A.m8,A.q9,A.fq,A.ij,A.nF,A.iF,A.rZ,A.v1,A.nD,A.wC,A.oW,A.vj,A.vM,A.bw,A.n1,A.v2,A.Bd,A.xf,A.da,A.b3,A.cp,A.na,A.cS,A.xy,A.cr,A.xp,A.aZ,A.dD,A.fK,A.ey,A.bW,A.lB,A.c5,A.no,A.xw,A.oC,A.hy,A.pW,A.bl,A.qU,A.nJ,A.d8,A.eI,A.j2,A.aQ,A.mJ,A.AT,A.AR,A.vT,A.q8,A.iZ,A.jw,A.vY,A.n9,A.wR,A.b0,A.x_,A.hl,A.xY,A.br,A.hj,A.dd,A.h3,A.jv,A.cH,A.nY,A.y_,A.ju,A.jP,A.yd,A.cT,A.cq,A.eJ,A.bJ,A.AY,A.yg,A.oD,A.hB,A.fs,A.z4,A.hw,A.ok,A.yN,A.p0,A.rp,A.eV,A.oE,A.yS,A.yT,A.hx,A.on,A.om,A.r0,A.xX,A.n_,A.n0,A.xG,A.nx,A.hg,A.tu,A.bu,A.cA,A.cu,A.nA,A.cv,A.ce,A.l6,A.rr,A.ea,A.xI,A.er,A.b9,A.lm,A.r6,A.p9,A.AS,A.bR,A.lI,A.dl,A.jI,A.yI,A.yD,A.yK,A.yJ,A.dZ,A.dm,A.lM,A.dc,A.f0,A.yE,A.q2,A.ke,A.A7,A.p_,A.oS,A.AO,A.yy,A.iu,A.xr,A.iq,A.lH,A.m0,A.ts,A.d5,A.lN,A.je,A.es,A.wG,A.h6,A.ks,A.hC,A.lO,A.z0,A.kE,A.oK,A.A2,A.xW,A.D8,A.ka])
q(J.mt,[J.mv,J.iT,J.aI,J.bx,J.fM,J.eA,J.dF])
q(J.aI,[J.dH,J.z,A.fV,A.jg])
q(J.dH,[J.n2,J.dX,J.bS])
r(J.mu,A.jC)
r(J.u_,J.z)
q(J.eA,[J.iS,J.mw])
q(A.o,[A.e1,A.L,A.co,A.ao,A.iD,A.eS,A.de,A.e_,A.f3,A.or,A.ph,A.hS,A.eC,A.jB])
q(A.e1,[A.en,A.kF])
r(A.k7,A.en)
r(A.k4,A.kF)
q(A.eq,[A.qq,A.qj,A.qp,A.tU,A.ye,A.Cx,A.Cz,A.zb,A.za,A.BG,A.BF,A.tq,A.tl,A.Ab,A.Aa,A.Am,A.Ap,A.xS,A.xT,A.xQ,A.A1,A.A0,A.AX,A.As,A.zY,A.AL,A.vn,A.AG,A.r5,A.zo,A.tm,A.CB,A.CH,A.CI,A.Ch,A.qe,A.qg,A.qi,A.ll,A.qa,A.BI,A.qc,A.vr,A.Cn,A.wp,A.wo,A.w9,A.wk,A.wl,A.wm,A.wn,A.wi,A.wj,A.wA,A.wu,A.wv,A.ws,A.wx,A.r3,A.r4,A.xj,A.xe,A.wE,A.xK,A.xL,A.uw,A.ux,A.uz,A.uV,A.uA,A.uB,A.uC,A.uD,A.uE,A.uF,A.uG,A.uH,A.uI,A.uJ,A.uL,A.uM,A.uN,A.uO,A.uP,A.uQ,A.uR,A.ui,A.uk,A.uo,A.u5,A.u4,A.um,A.ul,A.us,A.ut,A.uu,A.uv,A.uc,A.ue,A.ug,A.u8,A.u6,A.uq,A.ur,A.ub,A.u9,A.rT,A.rS,A.rU,A.rR,A.rQ,A.rP,A.rO,A.rK,A.rL,A.rM,A.va,A.vc,A.ve,A.vg,A.vb,A.tc,A.td,A.CG,A.t1,A.t_,A.t2,A.t3,A.t5,A.t7,A.t9,A.CM,A.vm,A.vl,A.vk,A.vH,A.vD,A.vE,A.vG,A.vF,A.CQ,A.wQ,A.Cm,A.BS,A.BU,A.BO,A.BP,A.x7,A.x9,A.xa,A.xb,A.xs,A.xv,A.xx,A.qE,A.qH,A.qD,A.qG,A.qA,A.qz,A.qw,A.qF,A.qB,A.qy,A.qx,A.qC,A.qt,A.pX,A.pY,A.qW,A.qV,A.ya,A.y0,A.y8,A.y3,A.y4,A.y5,A.y1,A.Ce,A.Cf,A.pV,A.pU,A.vC,A.vA,A.vB,A.vt,A.vu,A.vv,A.vw,A.vx,A.vy,A.vV,A.vW,A.w3,A.w1,A.w0,A.w_,A.w2,A.wY,A.wS,A.wU,A.wW,A.x0,A.x5,A.xZ,A.Cp,A.CL,A.CJ,A.CK,A.yp,A.yn,A.yj,A.yl,A.yh,A.zL,A.zI,A.xl,A.xk,A.z5,A.yM,A.v7,A.v8,A.vh,A.zS,A.zT,A.Cv,A.Cu,A.yV,A.z_,A.yY,A.r1,A.r2,A.C4,A.tw,A.tv,A.tx,A.tz,A.tB,A.ty,A.tP,A.xM,A.rz,A.B8,A.CE,A.CN,A.CO,A.q1,A.zW,A.zX,A.qL,A.qM,A.qQ,A.qR,A.qS,A.ta,A.q5,A.q3,A.Av,A.Ay,A.Az,A.tT,A.tR,A.Au,A.xF,A.yz,A.yA,A.yB,A.yC,A.wO,A.wP,A.wN,A.wM,A.wL,A.yO,A.rD,A.vN,A.rV,A.Cd,A.qJ,A.qK,A.qN,A.qO,A.qP,A.BV,A.zy,A.zD,A.zG,A.zw,A.B2,A.B3,A.B1,A.B_,A.A5,A.A6])
q(A.qq,[A.zu,A.qk,A.r_,A.u0,A.Cy,A.BH,A.C5,A.tr,A.tk,A.Ac,A.An,A.Aq,A.z7,A.Ar,A.v4,A.vp,A.AJ,A.zn,A.Bm,A.yw,A.Bl,A.Bk,A.to,A.tn,A.qd,A.qf,A.qh,A.lk,A.vK,A.vs,A.w5,A.wb,A.wt,A.w7,A.BQ,A.xi,A.xd,A.wF,A.xg,A.xA,A.CU,A.Cb,A.u3,A.u7,A.ua,A.rN,A.te,A.vI,A.CR,A.BR,A.xc,A.xt,A.xu,A.qv,A.pZ,A.y2,A.yQ,A.yW,A.yX,A.tA,A.rC,A.AA,A.yP,A.zP,A.z3])
r(A.bQ,A.k4)
q(A.X,[A.eo,A.bG,A.dn,A.oU])
q(A.af,[A.dG,A.ne,A.dj,A.mx,A.o6,A.nn,A.oM,A.jp,A.iW,A.lb,A.bE,A.cX,A.o5,A.bp,A.lx])
q(A.J,[A.hr,A.nr,A.of,A.hu,A.eu,A.hp])
r(A.cm,A.hr)
q(A.qp,[A.CD,A.wI,A.zc,A.zd,A.Bf,A.Be,A.BE,A.zf,A.zg,A.zi,A.zj,A.zh,A.ze,A.tp,A.Ad,A.Ai,A.Ah,A.Af,A.Ae,A.Al,A.Ak,A.Aj,A.Ao,A.xR,A.xU,A.xP,A.B7,A.B6,A.z6,A.zs,A.zr,A.AP,A.AN,A.BJ,A.BK,A.A_,A.zZ,A.AW,A.AV,A.C0,A.Bp,A.Bo,A.rJ,A.BX,A.BY,A.vq,A.w4,A.wg,A.wh,A.wd,A.wa,A.we,A.wf,A.wc,A.wy,A.wz,A.ww,A.uy,A.uK,A.uW,A.uX,A.uY,A.uZ,A.v_,A.v0,A.uS,A.uT,A.uU,A.uh,A.uj,A.un,A.ud,A.uf,A.up,A.rY,A.vd,A.vf,A.t0,A.t4,A.t6,A.t8,A.BT,A.x8,A.rX,A.tQ,A.ti,A.th,A.xO,A.qs,A.qu,A.qT,A.qZ,A.qY,A.qX,A.y7,A.y6,A.y9,A.wZ,A.wT,A.wV,A.wX,A.x1,A.x6,A.x4,A.x3,A.x2,A.yc,A.vZ,A.vU,A.yo,A.ym,A.yk,A.yi,A.zM,A.zJ,A.zK,A.xm,A.vS,A.yU,A.tO,A.tC,A.tJ,A.tK,A.tL,A.tM,A.tH,A.tI,A.tD,A.tE,A.tF,A.tG,A.tN,A.At,A.rA,A.rB,A.rx,A.rw,A.ry,A.rt,A.rs,A.ru,A.rv,A.B9,A.Ba,A.CP,A.rc,A.r9,A.re,A.rg,A.ri,A.rb,A.rh,A.rm,A.rk,A.rj,A.rd,A.rf,A.rl,A.ra,A.q_,A.q0,A.yF,A.q4,A.Aw,A.Ax,A.A8,A.tS,A.rE,A.rF,A.vP,A.vO,A.zN,A.zR,A.zO,A.zQ,A.zx,A.zC,A.zF,A.zz,A.zE,A.zH,A.zA,A.zB,A.rI,A.rH,A.rG,A.z1,A.z2,A.B0])
q(A.L,[A.a1,A.ew,A.S,A.am,A.aN,A.f2,A.kh])
q(A.a1,[A.cw,A.Y,A.bA,A.iY,A.oV])
r(A.ev,A.co)
r(A.iz,A.eS)
r(A.fC,A.de)
q(A.hM,[A.p1,A.p2,A.p3])
q(A.p1,[A.a6,A.kn,A.ko,A.hN,A.p4])
r(A.e8,A.p2)
q(A.p3,[A.f6,A.p5])
r(A.kA,A.j1)
r(A.cW,A.kA)
r(A.iv,A.cW)
q(A.fx,[A.aL,A.iL])
q(A.ct,[A.iw,A.kp])
r(A.dz,A.iw)
r(A.iP,A.tU)
r(A.jl,A.dj)
q(A.ye,[A.xN,A.il])
q(A.bG,[A.iV,A.iU,A.kg])
r(A.fU,A.fV)
q(A.jg,[A.jf,A.fW])
q(A.fW,[A.kj,A.kl])
r(A.kk,A.kj)
r(A.dO,A.kk)
r(A.km,A.kl)
r(A.bU,A.km)
q(A.dO,[A.mP,A.mQ])
q(A.bU,[A.mR,A.mS,A.mT,A.jh,A.ji,A.jj,A.eH])
r(A.kv,A.oM)
q(A.ab,[A.hR,A.jN,A.k8,A.dp,A.kb,A.k2,A.ih,A.hG])
r(A.ba,A.hR)
r(A.b4,A.ba)
q(A.b5,[A.e2,A.hI,A.hP])
r(A.eY,A.e2)
r(A.jZ,A.k3)
q(A.eZ,[A.aE,A.as])
q(A.e9,[A.cZ,A.hT])
r(A.kr,A.oq)
q(A.oL,[A.cg,A.hE])
r(A.ki,A.cZ)
r(A.f4,A.kb)
q(A.pt,[A.oF,A.p8])
q(A.dn,[A.e3,A.k5])
r(A.cB,A.kp)
q(A.nH,[A.kt,A.Bg,A.zk,A.pg])
r(A.AE,A.kt)
q(A.lu,[A.ex,A.lg,A.u1])
q(A.ex,[A.l9,A.mD,A.oc])
q(A.aF,[A.pn,A.ii,A.lh,A.mA,A.mz,A.od,A.jS,A.mk])
q(A.pn,[A.la,A.mE])
r(A.zp,A.ow)
q(A.qb,[A.zl,A.hz,A.oz,A.Bn])
r(A.z8,A.zl)
r(A.my,A.iW)
r(A.AF,A.ls)
r(A.AH,A.AI)
r(A.px,A.pr)
r(A.Bq,A.px)
q(A.bE,[A.db,A.iN])
r(A.oI,A.kB)
r(A.hc,A.hU)
r(A.pb,A.mk)
r(A.AZ,A.tt)
r(A.pc,A.AZ)
r(A.l4,A.qo)
r(A.jG,A.xB)
r(A.oG,A.l4)
r(A.lK,A.oG)
r(A.oH,A.vi)
r(A.rn,A.oH)
r(A.nh,A.ep)
r(A.lp,A.li)
r(A.dx,A.jN)
q(A.lj,[A.vJ,A.xq])
r(A.jO,A.q7)
r(A.nG,A.jO)
r(A.io,A.a5)
r(A.n4,A.jo)
q(A.c7,[A.lv,A.lD,A.jU,A.fG,A.nR,A.le])
q(A.ng,[A.m3,A.m4,A.m9,A.m5,A.m2,A.mi,A.mc,A.m7,A.m6,A.mf,A.ma,A.lX,A.nC,A.mY,A.lq,A.ml,A.lt,A.mj,A.nk,A.mO,A.nc,A.lG,A.lF,A.lT,A.mo,A.l5,A.m_,A.nq,A.nZ,A.o_,A.o1,A.o3,A.o2,A.o0,A.oi,A.oj,A.oh,A.l7,A.og,A.oe,A.n8,A.lw,A.nl,A.lC,A.lA,A.ni,A.l2,A.l3,A.lE,A.nP,A.nU,A.nK,A.nL,A.nN,A.nV,A.nO,A.nS])
q(A.ah,[A.mh,A.iE,A.fI,A.md,A.fH,A.fF,A.hi,A.fY,A.im,A.mm,A.h8,A.h9,A.fT,A.h5,A.fy,A.fA,A.fL,A.fn,A.fE,A.hb,A.fw,A.fv,A.ho,A.hv,A.h2,A.fu,A.nQ,A.nM,A.nT])
q(A.vL,[A.j9,A.jc,A.ja,A.jd,A.j6,A.j7,A.j5,A.jb,A.j8])
q(A.A4,[A.b1,A.cG,A.dW,A.n3,A.ip,A.dy,A.d7,A.ly,A.c8,A.iO,A.dL,A.dN,A.ek,A.cf,A.lf,A.cU,A.fm,A.fZ,A.jm,A.lU,A.jJ,A.vX,A.fJ,A.mK,A.dA,A.cy,A.iG,A.dS])
q(A.cR,[A.iX,A.jk,A.id,A.ie])
r(A.pT,A.rW)
q(A.dJ,[A.dY,A.hq,A.fX,A.ir,A.jr,A.iI,A.dg,A.jA,A.jy,A.jD,A.ha,A.jL,A.j4,A.it,A.fz,A.jx])
q(A.ha,[A.jR,A.iJ])
r(A.mB,A.oW)
q(A.bw,[A.lJ,A.h7,A.fO,A.hd,A.et,A.ej,A.fo])
r(A.jt,A.lJ)
q(A.da,[A.aj,A.cb,A.dw,A.d4])
r(A.ft,A.oC)
r(A.z9,A.AR)
q(A.br,[A.eT,A.dR,A.jH,A.c4,A.cM,A.cQ,A.eK,A.h1,A.fB,A.yb,A.el])
q(A.fs,[A.nd,A.mX])
r(A.yL,A.q9)
r(A.v6,A.rp)
r(A.mH,A.eV)
q(A.hx,[A.jW,A.eW])
r(A.ps,A.on)
r(A.yZ,A.ps)
r(A.tY,A.xX)
q(A.tY,[A.wD,A.yx,A.yR])
r(A.mb,A.nx)
q(A.hg,[A.hH,A.nz])
r(A.hf,A.nA)
r(A.df,A.nz)
r(A.hh,A.er)
r(A.ln,A.b9)
q(A.ln,[A.mp,A.dE,A.he])
q(A.lm,[A.oR,A.pf])
r(A.p6,A.r6)
r(A.p7,A.p6)
r(A.nj,A.p7)
r(A.pa,A.p9)
r(A.cd,A.pa)
q(A.b7,[A.eX,A.bb])
r(A.ht,A.xI)
q(A.bb,[A.kc,A.k6,A.hD,A.hW])
r(A.wK,A.xr)
r(A.r7,A.lH)
r(A.dv,A.h6)
r(A.hA,A.wK)
q(A.kE,[A.oJ,A.pd])
r(A.nI,A.hf)
r(A.oT,A.hp)
r(A.cz,A.oT)
s(A.hr,A.o7)
s(A.kF,A.J)
s(A.kj,A.J)
s(A.kk,A.iH)
s(A.kl,A.J)
s(A.km,A.iH)
s(A.cZ,A.k_)
s(A.hT,A.pk)
s(A.kA,A.po)
s(A.px,A.nH)
s(A.oG,A.r8)
s(A.oH,A.ro)
s(A.oW,A.qm)
s(A.oC,A.qn)
s(A.ps,A.om)
s(A.p6,A.J)
s(A.p7,A.mU)
s(A.p9,A.o8)
s(A.pa,A.X)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ac:"double",aX:"num",j:"String",Q:"bool",W:"Null",r:"List",k:"Object",F:"Map",M:"JSObject"},mangledNames:{},types:["~()","~(M)","W()","x<~>()","x<~>(bJ)","x<W>(bJ)","W(k,aJ)","j(j)","fY(~)","~(i)","i()","~(r<i>)","T<j,@>(@,@)","Q(j)","~(k,aJ)","Q(k?)","0&()","~(k?)","W(M)","i(bs,i)","~(~())","W(k)","x<b0>()","x<W>()","Q(@)","Q(bm)","x<~>(ke)","W(@)","~(@)","~(di)","W(~)","i(k?)","~(k?,k?)","~(j,j)","M()","~(dc,i,i,i)","Q(bu)","~(a3)","@(@)","k?(k?)","x<~>(~)","k?(F<j,k?>)","Q(k?,k?)","Q(bW)","i(bs)","x<W>(rq)","x<F<j,k?>>(F<j,k?>)","T<j,k?>(@,@)","Q()","i(@,@)","bm()","Q(dD)","x<r<j>>()","x<i>()","j(F<j,k?>)","x<@>()","W(k?)","Q(aZ)","x<k?>(oo,hw)","i(cN)","ac(i)","i(b9,i,i,i)","i(b9,i)","x<cN>(j)","i(bs,i,i,bx)","j(eF)","~(j,@)","~(dc,i)","@()","~(@,@)","~(k[aJ?])","@(j)","x<bq<~>>()","~(~)","x<eV>()","~(j,k?)","x<cr>()","fw(r<bl>)","fv(bl?)","fI(r<bm>)","fH(i)","fF(i)","hi(Q)","fT(r<j>)","W(@,aJ)","h5(cr)","x<r<cS>>()","hb(r<cS>)","Q(j,j)","ho(~)","Q(hO)","~(F<j,k?>?)","~(r<F<j,k?>>)","i(j)","ab<r<i>>()","W(j,j[k?])","~(eR)","~(r<bl>)","F<j,k?>(cd)","~(dM<r<i>>)","k?(xJ)","~(i,@)","j(j,j)","f_<@,@>(bF<@>)","x<bm>(bJ)","fP()","i(i,i)","i(i,cL)","Q(cL)","j(cL)","~(r<cn>)","x<ab<r<i>>>()","j?(F<j,k?>)","~(jq)","i(bW,bW)","T<j,dB>(j,hj)","x<aQ?>(j2)","dd(@)","Q(dL)","x<r<j>>(F<j,k?>)","x<~>?()","j(cp)","j()","Q(cp)","aZ()","dD()","fK()","ey()","bW()","i(i)","j(@)","x<F<j,k?>?>(j)","Q(i)","j(i,i)","w<@>?()","bl()","x<dU>(j)","~(cH)","i(dU)","x<b8>(b8)","b8(b8)","b8(k)","W(b8)","aD(i)","~(j)","aQ(aQ?)","aQ/(k?)","x<k?>(k?)","F<j,k?>(r<k?>)","k?(aQ?)","x<i>(bJ)","x<W>(~)","~(@,aJ)","j(i[i])","cT()","cq()","eJ()","Q(cG)","Q(dW)","x<@>(bJ)","r<F<j,k?>>(cr)","x<Q>(j)","x<~>(j)","0&(j,i?)","Q(c5<k?>)","r<eM>(k?)","Q(b1)","~(c7)","bl(F<j,k?>)","j?()","i(cA)","r<cR>(k?)","k(cA)","k(bu)","i(bu,bu)","r<cA>(T<k,r<bu>>)","df()","j(k?)","~(i,j,i)","~(Dx,r<Dy>)","i(+(j,k),+(j,k))","~(P,av,P,~())","~(bx,i)","bs?(b9,i,i,i,i)","i(b9,i,i)","~(j,j?)","i(b9?,i,i)","W(bS,bS)","i(+(j,k?),+(j,k?))","~(dQ)","i(bs,bx)","k?(~)","i(bs,i,i)","i(i())","~(~(i,j,i),i,i,i,bx)","x<F<j,k?>?>()","h8(F<j,k?>?)","i(dc,i,i,i,i)","i(i(i),i)","i(DB,i)","i(DB,i,i)","x<r<F<j,k?>?>>()","h9(r<F<j,k?>?>)","M(z<k?>)","W(~())","x<r<k?>>()","M(M?)","~(em)","x<~>(i,cV)","x<~>(i)","cV()","x<M>(j)","W(d5)","x<W>(M)","M(k)","W(k?,aJ)","j?(k?)","~(er)","M(M)","x<M>()","@(@,j)","x<aX?>()","x<bq<cv>>()","~(cv)","Q(hC)","x<j>()","x<es>()","0&(k?,aJ)","~(dM<M>)","h2(i)","~(P?,av?,P,k,aJ)","0^(P?,av?,P,0^())<k?>","0^(P?,av?,P,0^(1^),1^)<k?,k?>","0^(P?,av?,P,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(P,av,P,0^())<k?>","0^(1^)(P,av,P,0^(1^))<k?,k?>","0^(1^,2^)(P,av,P,0^(1^,2^))<k?,k?,k?>","aq?(P,av,P,k,aJ?)","~(P?,av?,P,~())","di(P,av,P,aD,~())","di(P,av,P,aD,~(di))","~(P,av,P,j)","P(P?,av?,P,jX?,F<k?,k?>?)","0^(0^,0^)<aX>","fu(i)","fy(i)","fA(r<k?>)","fL(r<j>)","fn(aX?)","fE(j)","bm(F<j,k?>)","aG()","Q(bw?)","j(j?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a6&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.kn&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.ko&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hN&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.p4&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.e8&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.f6&&A.HB(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.p5&&A.HB(a,b.a)}}
A.Lu(v.typeUniverse,JSON.parse('{"bS":"dH","n2":"dH","dX":"dH","OO":"fV","z":{"r":["1"],"aI":[],"L":["1"],"M":[],"o":["1"],"be":["1"]},"mv":{"Q":[],"ak":[]},"iT":{"W":[],"ak":[]},"aI":{"M":[]},"dH":{"aI":[],"M":[]},"mu":{"jC":[]},"u_":{"z":["1"],"r":["1"],"aI":[],"L":["1"],"M":[],"o":["1"],"be":["1"]},"eA":{"ac":[],"aX":[],"aw":["aX"]},"iS":{"ac":[],"i":[],"aX":[],"aw":["aX"],"ak":[]},"mw":{"ac":[],"aX":[],"aw":["aX"],"ak":[]},"dF":{"j":[],"aw":["j"],"be":["@"],"ak":[]},"e1":{"o":["2"]},"en":{"e1":["1","2"],"o":["2"],"o.E":"2"},"k7":{"en":["1","2"],"e1":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"k4":{"J":["2"],"r":["2"],"e1":["1","2"],"L":["2"],"o":["2"]},"bQ":{"k4":["1","2"],"J":["2"],"r":["2"],"e1":["1","2"],"L":["2"],"o":["2"],"J.E":"2","o.E":"2"},"eo":{"X":["3","4"],"F":["3","4"],"X.V":"4","X.K":"3"},"dG":{"af":[]},"ne":{"af":[]},"cm":{"J":["i"],"r":["i"],"L":["i"],"o":["i"],"J.E":"i"},"L":{"o":["1"]},"a1":{"L":["1"],"o":["1"]},"cw":{"a1":["1"],"L":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"co":{"o":["2"],"o.E":"2"},"ev":{"co":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"Y":{"a1":["2"],"L":["2"],"o":["2"],"a1.E":"2","o.E":"2"},"ao":{"o":["1"],"o.E":"1"},"iD":{"o":["2"],"o.E":"2"},"eS":{"o":["1"],"o.E":"1"},"iz":{"eS":["1"],"L":["1"],"o":["1"],"o.E":"1"},"de":{"o":["1"],"o.E":"1"},"fC":{"de":["1"],"L":["1"],"o":["1"],"o.E":"1"},"ew":{"L":["1"],"o":["1"],"o.E":"1"},"e_":{"o":["1"],"o.E":"1"},"hr":{"J":["1"],"r":["1"],"L":["1"],"o":["1"]},"bA":{"a1":["1"],"L":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"iv":{"cW":["1","2"],"F":["1","2"]},"fx":{"F":["1","2"]},"aL":{"fx":["1","2"],"F":["1","2"]},"f3":{"o":["1"],"o.E":"1"},"iL":{"fx":["1","2"],"F":["1","2"]},"iw":{"ct":["1"],"eP":["1"],"L":["1"],"o":["1"]},"dz":{"ct":["1"],"eP":["1"],"L":["1"],"o":["1"]},"jl":{"dj":[],"af":[]},"mx":{"af":[]},"o6":{"af":[]},"mW":{"H":[]},"kq":{"aJ":[]},"nn":{"af":[]},"bG":{"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"S":{"L":["1"],"o":["1"],"o.E":"1"},"am":{"L":["1"],"o":["1"],"o.E":"1"},"aN":{"L":["T<1,2>"],"o":["T<1,2>"],"o.E":"T<1,2>"},"iV":{"bG":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"iU":{"bG":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"hL":{"nf":[],"eF":[]},"or":{"o":["nf"],"o.E":"nf"},"hk":{"eF":[]},"ph":{"o":["eF"],"o.E":"eF"},"fU":{"aI":[],"M":[],"em":[],"ak":[]},"fV":{"aI":[],"M":[],"em":[],"ak":[]},"jg":{"aI":[],"M":[]},"pp":{"em":[]},"jf":{"aI":[],"D2":[],"M":[],"ak":[]},"fW":{"bT":["1"],"aI":[],"M":[],"be":["1"]},"dO":{"J":["ac"],"r":["ac"],"bT":["ac"],"aI":[],"L":["ac"],"M":[],"be":["ac"],"o":["ac"]},"bU":{"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"]},"mP":{"dO":[],"tf":[],"J":["ac"],"r":["ac"],"bT":["ac"],"aI":[],"L":["ac"],"M":[],"be":["ac"],"o":["ac"],"ak":[],"J.E":"ac"},"mQ":{"dO":[],"tg":[],"J":["ac"],"r":["ac"],"bT":["ac"],"aI":[],"L":["ac"],"M":[],"be":["ac"],"o":["ac"],"ak":[],"J.E":"ac"},"mR":{"bU":[],"tV":[],"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"],"ak":[],"J.E":"i"},"mS":{"bU":[],"tW":[],"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"],"ak":[],"J.E":"i"},"mT":{"bU":[],"tX":[],"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"],"ak":[],"J.E":"i"},"jh":{"bU":[],"ys":[],"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"],"ak":[],"J.E":"i"},"ji":{"bU":[],"yt":[],"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"],"ak":[],"J.E":"i"},"jj":{"bU":[],"yu":[],"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"],"ak":[],"J.E":"i"},"eH":{"bU":[],"cV":[],"J":["i"],"r":["i"],"bT":["i"],"aI":[],"L":["i"],"M":[],"be":["i"],"o":["i"],"ak":[],"J.E":"i"},"oM":{"af":[]},"kv":{"dj":[],"af":[]},"aq":{"af":[]},"w":{"x":["1"]},"dM":{"bF":["1"]},"ku":{"di":[]},"jY":{"is":["1"]},"hS":{"o":["1"],"o.E":"1"},"b4":{"ba":["1"],"hR":["1"],"ab":["1"],"ab.T":"1"},"eY":{"e2":["1"],"b5":["1"],"bq":["1"],"b5.T":"1"},"k3":{"bF":["1"]},"jZ":{"k3":["1"],"bF":["1"]},"nX":{"H":[]},"jp":{"af":[]},"eZ":{"is":["1"]},"aE":{"eZ":["1"],"is":["1"]},"as":{"eZ":["1"],"is":["1"]},"jN":{"ab":["1"]},"e9":{"bF":["1"]},"cZ":{"k_":["1"],"e9":["1"],"bF":["1"]},"hT":{"e9":["1"],"bF":["1"]},"ba":{"hR":["1"],"ab":["1"],"ab.T":"1"},"e2":{"b5":["1"],"bq":["1"],"b5.T":"1"},"kr":{"oq":["1"]},"b5":{"bq":["1"],"b5.T":"1"},"hR":{"ab":["1"]},"hF":{"bq":["1"]},"k8":{"ab":["1"],"ab.T":"1"},"dp":{"ab":["1"],"ab.T":"1"},"ki":{"cZ":["1"],"k_":["1"],"e9":["1"],"dM":["1"],"bF":["1"]},"kb":{"ab":["2"]},"hI":{"b5":["2"],"bq":["2"],"b5.T":"2"},"f4":{"kb":["1","2"],"ab":["2"],"ab.T":"2"},"k9":{"bF":["1"]},"hP":{"b5":["2"],"bq":["2"],"b5.T":"2"},"k2":{"ab":["2"],"ab.T":"2"},"pt":{"P":[]},"oF":{"P":[]},"p8":{"P":[]},"hX":{"av":[]},"dn":{"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"e3":{"dn":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"k5":{"dn":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"f2":{"L":["1"],"o":["1"],"o.E":"1"},"kg":{"bG":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"cB":{"ct":["1"],"eP":["1"],"L":["1"],"o":["1"]},"eC":{"o":["1"],"o.E":"1"},"J":{"r":["1"],"L":["1"],"o":["1"]},"X":{"F":["1","2"]},"kh":{"L":["2"],"o":["2"],"o.E":"2"},"j1":{"F":["1","2"]},"cW":{"F":["1","2"]},"iY":{"a1":["1"],"L":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"ct":{"eP":["1"],"L":["1"],"o":["1"]},"kp":{"ct":["1"],"eP":["1"],"L":["1"],"o":["1"]},"f_":{"bF":["1"]},"oU":{"X":["j","@"],"F":["j","@"],"X.V":"@","X.K":"j"},"oV":{"a1":["j"],"L":["j"],"o":["j"],"a1.E":"j","o.E":"j"},"l9":{"ex":[]},"pn":{"aF":["j","r<i>"]},"la":{"aF":["j","r<i>"],"aF.T":"r<i>"},"ii":{"aF":["r<i>","j"],"aF.T":"j"},"lh":{"aF":["j","r<i>"],"aF.T":"r<i>"},"iW":{"af":[]},"my":{"af":[]},"mA":{"aF":["k?","j"],"aF.T":"j"},"mz":{"aF":["j","k?"],"aF.T":"k?"},"mD":{"ex":[]},"mE":{"aF":["j","r<i>"],"aF.T":"r<i>"},"oc":{"ex":[]},"od":{"aF":["j","r<i>"],"aF.T":"r<i>"},"jS":{"aF":["r<i>","j"],"aF.T":"j"},"EJ":{"aw":["EJ"]},"aG":{"aw":["aG"]},"ac":{"aX":[],"aw":["aX"]},"aD":{"aw":["aD"]},"i":{"aX":[],"aw":["aX"]},"r":{"L":["1"],"o":["1"]},"aX":{"aw":["aX"]},"nf":{"eF":[]},"eP":{"L":["1"],"o":["1"]},"j":{"aw":["j"]},"aP":{"aw":["EJ"]},"lb":{"af":[]},"dj":{"af":[]},"bE":{"af":[]},"db":{"af":[]},"iN":{"db":[],"af":[]},"cX":{"af":[]},"o5":{"cX":[],"af":[]},"bp":{"af":[]},"lx":{"af":[]},"mZ":{"af":[]},"jK":{"af":[]},"oN":{"H":[]},"bn":{"H":[]},"ms":{"cX":[],"H":[],"af":[]},"pi":{"aJ":[]},"jB":{"o":["i"],"o.E":"i"},"kB":{"o9":[]},"ci":{"o9":[]},"oI":{"o9":[]},"mV":{"H":[]},"tX":{"r":["i"],"L":["i"],"o":["i"]},"cV":{"r":["i"],"L":["i"],"o":["i"]},"yu":{"r":["i"],"L":["i"],"o":["i"]},"tV":{"r":["i"],"L":["i"],"o":["i"]},"ys":{"r":["i"],"L":["i"],"o":["i"]},"tW":{"r":["i"],"L":["i"],"o":["i"]},"yt":{"r":["i"],"L":["i"],"o":["i"]},"tf":{"r":["ac"],"L":["ac"],"o":["ac"]},"tg":{"r":["ac"],"L":["ac"],"o":["ac"]},"a5":{"F":["2","3"]},"hc":{"hU":["1","eP<1>"],"hU.E":"1"},"mk":{"aF":["r<i>","cn"]},"pb":{"aF":["r<i>","cn"],"aF.T":"cn"},"jF":{"H":[]},"nr":{"J":["i"],"r":["i"],"L":["i"],"o":["i"],"J.E":"i"},"nh":{"H":[]},"li":{"D3":[]},"lp":{"D3":[]},"dx":{"ab":["r<i>"],"ab.T":"r<i>"},"ep":{"H":[]},"nG":{"jO":[]},"io":{"a5":["j","j","1"],"F":["j","1"],"a5.V":"1","a5.K":"j","a5.C":"j"},"jo":{"DG":[]},"n4":{"DG":[]},"dC":{"H":[]},"mh":{"ah":[]},"iE":{"ah":[]},"fI":{"ah":[]},"md":{"ah":[]},"fH":{"ah":[]},"fF":{"ah":[]},"hi":{"ah":[]},"fY":{"ah":[]},"im":{"ah":[]},"mm":{"ah":[]},"h8":{"ah":[]},"h9":{"ah":[]},"fT":{"ah":[]},"h5":{"ah":[]},"fy":{"ah":[]},"fA":{"ah":[]},"fL":{"ah":[]},"fn":{"ah":[]},"fE":{"ah":[]},"hb":{"ah":[]},"fw":{"ah":[]},"fv":{"ah":[]},"ho":{"ah":[]},"hv":{"ah":[]},"h2":{"ah":[]},"fu":{"ah":[]},"nQ":{"ah":[]},"nM":{"ah":[]},"nT":{"ah":[]},"js":{"H":[]},"lv":{"c7":[]},"lD":{"c7":[]},"jU":{"c7":[]},"fG":{"c7":[]},"iX":{"cR":[]},"jk":{"cR":[]},"id":{"cR":[]},"ie":{"cR":[]},"nR":{"c7":[]},"le":{"c7":[]},"eU":{"H":[]},"f7":{"H":[]},"iy":{"rq":[]},"dJ":{"H":[]},"dY":{"H":[]},"hq":{"H":[]},"fX":{"H":[]},"ir":{"H":[]},"jr":{"H":[]},"iI":{"H":[]},"dg":{"H":[]},"jA":{"H":[]},"jy":{"H":[]},"jD":{"H":[]},"ha":{"H":[]},"jR":{"H":[]},"iJ":{"H":[]},"jL":{"H":[]},"j4":{"H":[]},"it":{"H":[]},"fz":{"H":[]},"jx":{"H":[]},"fq":{"H":[]},"ij":{"H":[]},"jt":{"bw":[]},"aj":{"da":[]},"cb":{"da":[]},"dw":{"da":[]},"d4":{"da":[]},"hy":{"H":[]},"d8":{"H":[]},"h7":{"bw":[]},"fO":{"bw":[]},"hd":{"bw":[]},"et":{"bw":[]},"ej":{"bw":[]},"fo":{"bw":[]},"lJ":{"bw":[]},"br":{"H":[]},"eT":{"H":[]},"dR":{"H":[]},"jH":{"H":[]},"c4":{"H":[]},"cM":{"H":[]},"cQ":{"H":[]},"eK":{"H":[]},"h1":{"H":[]},"fB":{"H":[]},"el":{"H":[]},"p0":{"Fo":[]},"mH":{"eV":[]},"oE":{"oo":[],"FP":[]},"jW":{"hx":[]},"eW":{"hx":[]},"n0":{"H":[]},"mb":{"cu":[],"aw":["cu"]},"hH":{"df":[],"aw":["ny"]},"cu":{"aw":["cu"]},"nx":{"cu":[],"aw":["cu"]},"ny":{"aw":["ny"]},"nz":{"aw":["ny"]},"nA":{"H":[]},"hf":{"bn":[],"H":[]},"hg":{"aw":["ny"]},"df":{"aw":["ny"]},"ce":{"H":[]},"xJ":{"r":["k?"],"L":["k?"],"o":["k?"]},"of":{"J":["k?"],"xJ":[],"r":["k?"],"L":["k?"],"o":["k?"],"J.E":"k?"},"hh":{"er":[]},"mp":{"b9":[]},"oR":{"jT":[],"bs":[]},"cd":{"X":["j","@"],"F":["j","@"],"X.V":"@","X.K":"j"},"nj":{"J":["cd"],"r":["cd"],"L":["cd"],"o":["cd"],"J.E":"cd"},"dl":{"H":[]},"ln":{"b9":[]},"lm":{"jT":[],"bs":[]},"eX":{"b7":["eX"],"b7.E":"eX"},"dm":{"Dy":[]},"dZ":{"Dx":[]},"hu":{"J":["dm"],"r":["dm"],"L":["dm"],"o":["dm"],"J.E":"dm"},"ih":{"ab":["1"],"ab.T":"1"},"dE":{"b9":[]},"bb":{"b7":["bb"]},"oS":{"jT":[],"bs":[]},"kc":{"bb":[],"b7":["bb"],"b7.E":"bb"},"k6":{"bb":[],"b7":["bb"],"b7.E":"bb"},"hD":{"bb":[],"b7":["bb"],"b7.E":"bb"},"hW":{"bb":[],"b7":["bb"],"b7.E":"bb"},"he":{"b9":[]},"pf":{"jT":[],"bs":[]},"iq":{"H":[]},"eu":{"J":["k?"],"r":["k?"],"L":["k?"],"o":["k?"],"J.E":"k?"},"h6":{"H":[]},"dv":{"H":[]},"hA":{"EQ":[]},"oJ":{"kE":["M"]},"pd":{"kE":["M"]},"nI":{"bn":[],"H":[]},"cz":{"hp":["i"],"J":["i"],"r":["i"],"L":["i"],"o":["i"],"J.E":"i"},"hp":{"J":["1"],"r":["1"],"L":["1"],"o":["1"]},"oT":{"hp":["i"],"J":["i"],"r":["i"],"L":["i"],"o":["i"]},"hG":{"ab":["1"],"ab.T":"1"},"ka":{"bq":["1"]}}'))
A.Lt(v.typeUniverse,JSON.parse('{"iH":1,"o7":1,"hr":1,"kF":2,"iw":1,"fW":1,"bF":1,"jN":1,"pk":1,"oL":1,"po":2,"j1":2,"kp":1,"kA":2,"ls":1,"lu":2,"kt":1,"mU":1,"o8":2,"ng":1,"fs":1,"IM":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ae
return{fM:s("@<@>"),ie:s("IM<k?>"),ko:s("ej"),bG:s("ek"),om:s("ih<z<k?>>"),hw:s("cH"),lo:s("em"),fW:s("D2"),jA:s("im"),fo:s("io<j>"),iv:s("a3"),eg:s("EQ"),dF:s("D3()"),E:s("cm"),bU:s("c5<k?>"),fw:s("er"),bP:s("aw<@>"),p6:s("es"),br:s("is<M>"),n8:s("bl"),pb:s("bw"),x:s("aL<j,k?>"),M:s("dz<j>"),d_:s("et"),lp:s("lO"),O:s("L<@>"),C:s("af"),fq:s("c7"),mA:s("H"),eZ:s("m0"),d9:s("aZ"),oX:s("m8"),A:s("bm"),k4:s("iF"),f6:s("cL"),pk:s("tf"),kI:s("tg"),Y:s("bn"),gY:s("OK"),mi:s("F<j,k?>/(F<j,k?>)"),nW:s("x<M>"),fB:s("x<r<j>>"),b3:s("x<F<j,k?>>"),fr:s("x<aQ>"),mj:s("x<W>"),g7:s("x<@>"),fP:s("x<d5?>"),d3:s("x<F<j,k?>?>"),op:s("x<aQ?>"),n1:s("x<k?>(oo,hw)"),jN:s("x<ht?>"),co:s("dB"),w:s("cN"),cF:s("dE"),m6:s("tV"),bW:s("tW"),jx:s("tX"),nZ:s("iR<@>"),e7:s("o<@>"),gi:s("z<a3>"),aw:s("z<c5<@>>"),oq:s("z<c5<k?>>"),oS:s("z<lz>"),i5:s("z<cn>"),mK:s("z<aZ>"),kB:s("z<me>"),iw:s("z<x<~>>"),mr:s("z<dD>"),kG:s("z<M>"),bi:s("z<r<F<j,k?>>>"),h2:s("z<r<k>>"),ae:s("z<r<eM>>"),dO:s("z<r<k?>>"),kf:s("z<F<j,k>>"),d:s("z<F<j,k?>>"),e8:s("z<mN>"),i7:s("z<eI>"),hf:s("z<k>"),ox:s("z<eJ>"),fi:s("z<cp>"),my:s("z<cq>"),k:s("z<da>"),eK:s("z<cR>"),k1:s("z<h3>"),g2:s("z<jv>"),bo:s("z<jw>"),cM:s("z<eM>"),gc:s("z<nb>"),eb:s("z<dQ>"),fU:s("z<+controller,sync(dM<cv>,Q)>"),lw:s("z<+controller,sync(dM<~>,Q)>"),kC:s("z<+(dS,j)>"),jO:s("z<+(j,F<j,k?>)>"),l5:s("z<+(j,k)>"),fj:s("z<+(j,aZ?)>"),iE:s("z<+(j,k?)>"),kW:s("z<+(i,j,F<j,k?>)>"),aY:s("z<+(hB,k?,k?,aJ?)>"),g1:s("z<dd>"),cP:s("z<np>"),kj:s("z<cS>"),lE:s("z<hh>"),c0:s("z<bW>"),dw:s("z<bq<@>>"),s:s("z<j>"),en:s("z<hl>"),bs:s("z<cV>"),fC:s("z<b3>"),m2:s("z<FP>"),az:s("z<hA>"),i4:s("z<hB>"),fV:s("z<hC>"),pg:s("z<bu>"),dg:s("z<cA>"),p8:s("z<p_>"),mc:s("z<hO>"),gy:s("z<hQ>"),gk:s("z<ac>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<aq?>"),eU:s("z<F<j,k?>?>"),c:s("z<k?>"),mf:s("z<j?>"),iy:s("be<@>"),T:s("iT"),m:s("M"),bJ:s("bx"),g:s("bS"),dX:s("bT<@>"),aq:s("aI"),fZ:s("mB"),kk:s("eC<eX>"),p3:s("eC<bb>"),hI:s("eD<@>"),ba:s("r<bl>"),ck:s("r<bm>"),ip:s("r<M>"),ew:s("r<F<j,k>>"),J:s("r<F<j,k?>>"),eT:s("r<eI>"),hg:s("r<eJ>"),a6:s("r<cq>"),jX:s("r<jv>"),kR:s("r<dd>"),fE:s("r<cS>"),i:s("r<j>"),bR:s("r<hl>"),j:s("r<@>"),L:s("r<i>"),oz:s("r<F<j,k?>?>"),kS:s("r<k?>"),jD:s("iZ"),ia:s("T<j,dB>"),ag:s("T<j,j>"),I:s("T<j,@>"),eB:s("T<j,k?>"),a3:s("j0<@,@>"),cy:s("F<j,cT>"),dV:s("F<j,i>"),f:s("F<@,@>"),G:s("F<j,k?>"),d2:s("F<k?,k?>"),iZ:s("Y<j,@>"),r:s("aQ"),a:s("fU"),dQ:s("dO"),aj:s("bU"),Z:s("eH"),P:s("W"),K:s("k"),k5:s("cp"),dZ:s("cq"),i0:s("cr"),jS:s("da"),ot:s("n9"),gq:s("h3"),e:s("b0"),b0:s("db"),lZ:s("OQ"),oZ:s("dQ"),aK:s("+()"),ja:s("+(M,iu)"),hP:s("+(F<j,cT>,F<j,F<j,k?>>)"),cU:s("+(dS,j)"),mk:s("+(Q,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(Q,Q)"),mt:s("+(M?,M)"),po:s("+(k?,i)"),nw:s("+(F<j,k?>?,cT?,cq?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("nf"),Q:s("dd"),V:s("ah"),hF:s("bA<j>"),cu:s("hc<@>"),aJ:s("eP<j>"),g_:s("he"),hq:s("cu"),ol:s("df"),gE:s("nB"),l:s("aJ"),nv:s("nD"),h3:s("hj"),ha:s("bq<cv>"),dz:s("bq<@>"),ey:s("bq<~>"),bv:s("nF"),ku:s("ab<r<i>>"),lI:s("dU"),hL:s("jO"),N:s("j"),f_:s("hl"),k6:s("jP"),o8:s("DG"),n6:s("cf"),fD:s("b8"),o:s("cT"),ic:s("eR"),hU:s("di"),q:s("nY"),dH:s("ak"),do:s("dj"),hM:s("ys"),mC:s("yt"),oR:s("cz"),nn:s("yu"),p:s("cV"),cx:s("dX"),ph:s("cW<j,j>"),eo:s("cX"),jJ:s("o9"),e6:s("b9"),j2:s("jT"),n:s("ht"),fA:s("b3"),gx:s("ao<cG>"),mz:s("ao<b1>"),mE:s("ao<dW>"),v:s("e_<j>"),u:s("eV"),bp:s("eW"),be:s("oo"),ec:s("hx"),iq:s("aE<cV>"),jk:s("aE<@>"),ho:s("aE<i>"),bF:s("aE<k?>"),h:s("aE<~>"),oW:s("f_<@,@>"),R:s("f0<M>"),d4:s("hG<M>"),nI:s("w<d5>"),a7:s("w<M>"),af:s("w<F<j,k?>>"),hl:s("w<0&>"),os:s("w<j>"),jz:s("w<cV>"),g5:s("w<Q>"),_:s("w<@>"),hy:s("w<i>"),ji:s("w<F<j,k?>?>"),ny:s("w<k?>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("bu"),mp:s("e3<k?,k?>"),mB:s("hK"),k8:s("dp<M>"),fb:s("dp<r<i>>"),mI:s("pe<cn>"),jy:s("ea<cv,~()>"),ah:s("ea<~,Q()>"),lU:s("ea<~,~()>"),hT:s("cC<M>"),lj:s("cC<r<i>>"),aP:s("as<d5>"),h1:s("as<M>"),ex:s("as<Q>"),F:s("as<~>"),g8:s("pl"),y:s("Q"),W:s("ac"),z:s("@"),mq:s("@(k)"),ng:s("@(k,aJ)"),S:s("i"),ma:s("bl?"),gK:s("x<W>?"),fm:s("d5?"),B:s("M?"),bE:s("r<c5<@>>?"),lH:s("r<@>?"),b:s("F<j,k?>?"),nh:s("aQ?"),X:s("k?"),ad:s("Fo?"),dY:s("cq?"),lY:s("ju?"),jB:s("dd?"),U:s("j?"),f8:s("cT?"),a_:s("cz?"),he:s("ht?"),dd:s("bu?"),o9:s("Q?"),dA:s("ac?"),aV:s("i?"),jh:s("aX?"),cZ:s("aX"),H:s("~"),cj:s("~()"),i6:s("~(k)"),b9:s("~(k,aJ)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cu=J.mt.prototype
B.b=J.z.prototype
B.c=J.iS.prototype
B.w=J.eA.prototype
B.a=J.dF.prototype
B.cv=J.bS.prototype
B.cw=J.aI.prototype
B.aC=A.jf.prototype
B.di=A.jh.prototype
B.y=A.ji.prototype
B.f=A.eH.prototype
B.bf=J.n2.prototype
B.aO=J.dX.prototype
B.aq=new A.dv("Operation was cancelled")
B.a8=new A.fm(0,"visible")
B.aR=new A.fm(1,"hidden")
B.bz=new A.l6(1)
B.ex=new A.l6(-1)
B.a9=new A.ek(0,"applied")
B.aa=new A.ek(1,"quarantined")
B.bA=new A.ek(2,"conflict")
B.ab=new A.ek(3,"skipped")
B.bB=new A.la(127)
B.ac=new A.lf(0,"changed")
B.aS=new A.lf(1,"deleted")
B.bD=new A.ii(!1)
B.ar=new A.lg(B.bD)
B.bE=new A.ii(!0)
B.bC=new A.lg(B.bE)
B.c9=new A.k8(A.ae("k8<r<i>>"))
B.bF=new A.dx(B.c9)
B.bG=new A.iP(A.Oa(),A.ae("iP<i>"))
B.bH=new A.fo()
B.bI=new A.ej()
B.bJ=new A.le()
B.as=new A.lh()
B.bK=new A.lq()
B.bL=new A.lt()
B.aT=new A.rn()
B.bM=new A.lS(A.ae("lS<0&>"))
B.p=new A.lR()
B.aU=new A.lV(A.ae("lV<0&>"))
B.aV=new A.lW()
B.P=new A.lW()
B.bN=new A.ml()
B.bO=new A.ms()
B.aW=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bP=function() {
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
B.bU=function(getTagFallback) {
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
B.bQ=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bT=function(hooks) {
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
B.bS=function(hooks) {
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
B.bR=function(hooks) {
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
B.aX=function(hooks) { return hooks; }

B.h=new A.u1()
B.bV=new A.v6()
B.bW=new A.fO()
B.l=new A.fY()
B.bX=new A.mZ()
B.aY=new A.wq()
B.bY=new A.wB()
B.bZ=new A.n8()
B.Q=new A.h7()
B.d=new A.xC()
B.c_=new A.hd()
B.c0=new A.nC()
B.c1=new A.nK()
B.c2=new A.nL()
B.c3=new A.nN()
B.c4=new A.nS()
B.c5=new A.nU()
B.o=new A.oc()
B.e=new A.od()
B.c6=new A.oe()
B.c7=new A.og()
B.c8=new A.z9()
B.t=new A.zU()
B.ad=new A.A3()
B.at=new A.AB()
B.aZ=new A.f7()
B.i=new A.p8()
B.m=new A.pb()
B.ca=new A.Bd()
B.R=new A.pi()
B.ae=new A.dy(0,"create")
B.A=new A.dy(1,"update")
B.cb=new A.dy(2,"archive")
B.cc=new A.dy(3,"restore")
B.au=new A.dy(4,"purge")
B.cd=new A.dy(5,"hide")
B.I=new A.ip(0,"local")
B.av=new A.ip(1,"remote")
B.af=new A.ip(2,"resolution")
B.ce=new A.ly(3,"ignore")
B.S=new A.ly(4,"replace")
B.F={}
B.d8=new A.aL(B.F,[],A.ae("aL<j,bw>"))
B.aB=new A.dL(0,"conflict")
B.cf=new A.lB(null,B.d8,!1,B.aB)
B.q=new A.lU(0,"normal")
B.b_=new A.lU(1,"full")
B.D=new A.aD(0)
B.aw=new A.aD(1e6)
B.ag=new A.aD(12e7)
B.b0=new A.aD(16e3)
B.cg=new A.aD(18e8)
B.ch=new A.aD(2e5)
B.b1=new A.aD(3e5)
B.T=new A.aD(3e7)
B.U=new A.aD(3e8)
B.ah=new A.aD(5e5)
B.ci=new A.aD(5e6)
B.ey=new A.aD(6048e8)
B.cj=new A.aD(7776e9)
B.ez=new A.aD(864e8)
B.ax=new A.c8(0,"text")
B.V=new A.c8(1,"int")
B.W=new A.c8(2,"real")
B.B=new A.c8(3,"bool")
B.X=new A.c8(4,"date")
B.J=new A.c8(5,"enumValue")
B.Y=new A.c8(6,"json")
B.Z=new A.c8(7,"jsonList")
B.K=new A.c8(8,"ref")
B.ck=new A.iF(!1)
B.ay=new A.dA("x",1,"opfsExternalLocks")
B.b2=new A.dA("y",2,"opfsExternalLocksWorkaround")
B.b3=new A.fJ("/database",0,"database")
B.b4=new A.fJ("/database-journal",1,"journal")
B.cq=new A.bn("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cr=new A.bn("fieldCipher envelope must be a map.",null,null)
B.aA=new A.aL(B.F,[],A.ae("aL<j,j>"))
B.cs=new A.ey(B.aA)
B.b5=new A.iO(0,"live")
B.cx=new A.mz(null)
B.cy=new A.mA(null)
B.cz=new A.d7(0,"textExpected")
B.cA=new A.d7(1,"intExpected")
B.b6=new A.d7(2,"numberExpected")
B.cB=new A.d7(3,"boolExpected")
B.cC=new A.d7(4,"jsonExpected")
B.cD=new A.d7(5,"jsonListExpected")
B.cE=new A.d7(6,"enumValueRejected")
B.cF=new A.mE(255)
B.az=new A.eD(B.bM,A.ae("eD<j>"))
B.cG=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b7=s([13,10],t.t)
B.aH=new A.cy(0,"unknown")
B.aI=new A.cy(1,"integer")
B.aJ=new A.cy(2,"bigInt")
B.aK=new A.cy(3,"float")
B.aL=new A.cy(4,"text")
B.aM=new A.cy(5,"blob")
B.aN=new A.cy(6,"$null")
B.bt=new A.cy(7,"boolean")
B.b8=s([B.aH,B.aI,B.aJ,B.aK,B.aL,B.aM,B.aN,B.bt],A.ae("z<cy>"))
B.cH=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.dg=new A.dL(1,"recreate")
B.dh=new A.dL(2,"discardLocal")
B.cI=s([B.aB,B.dg,B.dh],A.ae("z<dL>"))
B.bi=new A.b1(0,"eq")
B.ds=new A.b1(1,"neq")
B.dw=new A.b1(2,"gt")
B.dx=new A.b1(3,"gte")
B.dy=new A.b1(4,"lt")
B.dz=new A.b1(5,"lte")
B.dA=new A.b1(6,"inValues")
B.dB=new A.b1(7,"between")
B.dC=new A.b1(8,"startsWith")
B.dD=new A.b1(9,"endsWith")
B.dt=new A.b1(10,"contains")
B.du=new A.b1(11,"isNull")
B.dv=new A.b1(12,"isNotNull")
B.cJ=s([B.bi,B.ds,B.dw,B.dx,B.dy,B.dz,B.dA,B.dB,B.dC,B.dD,B.dt,B.du,B.dv],A.ae("z<b1>"))
B.co=new A.iG(0,"database")
B.cp=new A.iG(1,"journal")
B.b9=s([B.co,B.cp],A.ae("z<iG>"))
B.bu=new A.fm(2,"purged")
B.cK=s([B.a8,B.aR,B.bu],A.ae("z<fm>"))
B.z=new A.cU(0,"clean")
B.H=new A.cU(1,"dirty")
B.bq=new A.cU(2,"inFlight")
B.a7=new A.cU(3,"conflict")
B.ap=new A.cU(4,"error")
B.dT=new A.cU(5,"quarantine")
B.dU=new A.cU(6,"blocked")
B.cL=s([B.z,B.H,B.bq,B.a7,B.ap,B.dT,B.dU],A.ae("z<cU>"))
B.a_=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ai=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cM=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.ct=new A.iO(1,"notArchived")
B.cN=s([B.b5,B.ct],A.ae("z<iO>"))
B.cO=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.bd=new A.jm(0,"fileUpload")
B.be=new A.jm(1,"fileRemove")
B.cP=s([B.bd,B.be],A.ae("z<jm>"))
B.cn=new A.dA("s",0,"opfsShared")
B.cl=new A.dA("i",3,"indexedDb")
B.cm=new A.dA("m",4,"inMemory")
B.cQ=s([B.cn,B.ay,B.b2,B.cl,B.cm],A.ae("z<dA>"))
B.aj=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bv=new A.cG(0,"sum")
B.bw=new A.cG(1,"avg")
B.bx=new A.cG(2,"min")
B.by=new A.cG(3,"max")
B.cR=s([B.bv,B.bw,B.bx,B.by],A.ae("z<cG>"))
B.cS=s([B.ax,B.V,B.W,B.B,B.X,B.J,B.Y,B.Z,B.K],A.ae("z<c8>"))
B.n=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ak=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.a0=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cT=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fZ(0,"upsert")
B.M=new A.fZ(1,"archive")
B.a4=new A.fZ(2,"restore")
B.cU=s([B.v,B.M,B.a4],A.ae("z<fZ>"))
B.cV=s([],A.ae("z<dB>"))
B.ba=s([],t.d)
B.cX=s([],t.my)
B.cY=s([],t.kj)
B.u=s([],t.s)
B.cW=s([],t.t)
B.al=s([],t.dG)
B.j=s([],t.c)
B.cZ=s(["*"],t.s)
B.d_=s([B.b3,B.b4],A.ae("z<fJ>"))
B.d0=s(["id","updated"],t.s)
B.d1=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bk=new A.dS(0,"opfs")
B.bl=new A.dS(1,"indexedDb")
B.dN=new A.dS(2,"inMemory")
B.d2=s([B.bk,B.bl,B.dN],A.ae("z<dS>"))
B.br=new A.dW(0,"normal")
B.bs=new A.dW(1,"full")
B.d3=s([B.br,B.bs],A.ae("z<dW>"))
B.am=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.d4=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.d5=new A.iZ(!0)
B.d6=new A.iL([16,10,24,12,32,14],A.ae("iL<i,i>"))
B.dk={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.x=new A.mD()
B.r=new A.l9()
B.d7=new A.aL(B.dk,[B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.o,B.o],A.ae("aL<j,ex>"))
B.an=new A.aL(B.F,[],A.ae("aL<j,i>"))
B.k=new A.aL(B.F,[],t.x)
B.bb=new A.aL(B.F,[],A.ae("aL<i,F<j,k?>/(F<j,k?>)>"))
B.a3={kind:0}
B.da=new A.aL(B.a3,["setUnionDeletionWins"],t.x)
B.db=new A.aL(B.a3,["appendOnlyList"],t.x)
B.dc=new A.aL(B.a3,["remoteWins"],t.x)
B.dd=new A.aL(B.a3,["appendOnlyLines"],t.x)
B.de=new A.aL(B.a3,["localWins"],t.x)
B.df=new A.mK(11,"simpleSuccessResponse",A.ae("mK<M>"))
B.a1=new A.dN(0,"createOrUpdate")
B.a2=new A.dN(1,"createOrUpdateMerge")
B.bc=new A.dN(2,"create")
B.L=new A.dN(3,"update")
B.C=new A.dN(4,"archive")
B.E=new A.dN(5,"restore")
B.eA=new A.vX(2,"readWriteCreate")
B.dn=new A.cp("id",!1)
B.dp=new A.cr(B.ba,null,null,!1,!1)
B.bg=new A.n3(0,"native")
B.aD=new A.n3(1,"web")
B.G=new A.b0(0,1,0,0,0,!1)
B.dq=new A.b0(0,0,0,0,1,!1)
B.ao=new A.b0(0,0,0,0,0,!0)
B.a5=new A.b0(0,0,0,0,0,!1)
B.dr=new A.b0(0,0,0,1,0,!1)
B.bh=new A.b0(0,0,1,0,0,!1)
B.a6=new A.b0(1,0,0,0,0,!1)
B.dE=new A.a6("archived",!0)
B.dF=new A.a6("0",B.j)
B.aE=new A.kn(!1,!1)
B.dG=new A.e8(0,0,0)
B.dH=new A.e8(null,null,null)
B.dm={id:0,archived:1,hidden:2,extra:3,rowid:4,_rowid_:5,oid:6}
B.aF=new A.dz(B.dm,7,t.M)
B.dj={hidden:0}
B.dI=new A.dz(B.dj,1,t.M)
B.dl={open:0,contract_request:1,contract_event:2}
B.dJ=new A.dz(B.dl,3,t.M)
B.bj=new A.dz(B.F,0,t.M)
B.dK=new A.jJ(0,"insert")
B.dL=new A.jJ(1,"update")
B.dM=new A.jJ(2,"delete")
B.dO=new A.jP(-1,null)
B.dP=new A.jQ("_clientToken")
B.N=new A.cf(0,"closed")
B.dQ=new A.cf(1,"opening")
B.bm=new A.cf(2,"offline")
B.aG=new A.cf(3,"authRequired")
B.bn=new A.cf(4,"idle")
B.dR=new A.cf(5,"pulling")
B.dS=new A.cf(6,"pushing")
B.bo=new A.cf(7,"backoff")
B.bp=new A.cf(8,"paused")
B.O=new A.b8(B.an,B.an,0,0,0,0,!1)
B.dV=new A.eR(B.N,0,0,0,0,null,null,null)
B.dW=A.aY("l4")
B.dX=A.aY("fo")
B.dY=A.aY("ej")
B.dZ=A.aY("em")
B.e_=A.aY("D2")
B.e0=A.aY("et")
B.e1=A.aY("tf")
B.e2=A.aY("tg")
B.e3=A.aY("tV")
B.e4=A.aY("tW")
B.e5=A.aY("tX")
B.e6=A.aY("M")
B.e7=A.aY("fO")
B.e8=A.aY("k")
B.e9=A.aY("h7")
B.ea=A.aY("jG")
B.eb=A.aY("ys")
B.ec=A.aY("yt")
B.ed=A.aY("yu")
B.ee=A.aY("cV")
B.ef=A.aY("hd")
B.aP=new A.jS(!1)
B.eg=new A.jS(!0)
B.eh=new A.dl(14)
B.ei=new A.dl(522)
B.ej=new A.dl(778)
B.ek=new A.Bs(B.i,A.Na())
B.el=new A.Bt(B.i,A.Nb())
B.em=new A.Bu(B.i,A.Nc())
B.en=new A.Bv(B.i,A.Nd())
B.eo=new A.pu(B.i,A.Ne())
B.ep=new A.Bw(B.i,A.Nf())
B.eq=new A.Bx(B.i,A.Ng())
B.er=new A.By(B.i,A.Nh())
B.es=new A.Bz(B.i,A.Ni())
B.et=new A.BB(B.i,A.Nk())
B.eu=new A.BC(B.i,A.Nl())
B.ev=new A.BA(B.i,A.Nj())
B.ew=new A.pv(B.i,A.Nm())
B.d9=new A.aL(B.F,[],A.ae("aL<k?,k?>"))
B.aQ=new A.pw(B.i,B.d9)})();(function staticFields(){$.AD=null
$.fb=A.l([],t.hf)
$.MG=null
$.Fr=null
$.wJ=0
$.n6=A.Mw()
$.EO=null
$.EN=null
$.Hu=null
$.He=null
$.HE=null
$.Cl=null
$.CA=null
$.El=null
$.AQ=A.l([],A.ae("z<r<k>?>"))
$.i0=null
$.kH=null
$.kI=null
$.E6=!1
$.B=B.i
$.AU=null
$.FV=null
$.FW=null
$.FX=null
$.FY=null
$.DN=A.zv("_lastQuoRemDigits")
$.DO=A.zv("_lastQuoRemUsed")
$.k1=A.zv("_lastRemUsed")
$.DP=A.zv("_lastRem_nsh")
$.FL=""
$.FM=null
$.h4=function(){var s=t.N
return A.u(s,s)}()
$.GD=null
$.BN=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"OG","HW",()=>A.Cr("_$dart_dartClosure"))
s($,"OF","fj",()=>A.Cr("_$dart_dartClosure_dartJSInterop"))
s($,"Pj","pM",()=>A.vQ(0))
s($,"PH","Iv",()=>B.i.b_(new A.CD(),A.ae("x<~>")))
s($,"PB","Is",()=>A.l([new J.mu()],A.ae("z<jC>")))
s($,"OY","I_",()=>A.dk(A.yr({
toString:function(){return"$receiver$"}})))
s($,"OZ","I0",()=>A.dk(A.yr({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"P_","I1",()=>A.dk(A.yr(null)))
s($,"P0","I2",()=>A.dk(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"P3","I5",()=>A.dk(A.yr(void 0)))
s($,"P4","I6",()=>A.dk(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"P2","I4",()=>A.dk(A.FI(null)))
s($,"P1","I3",()=>A.dk(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"P6","I8",()=>A.dk(A.FI(void 0)))
s($,"P5","I7",()=>A.dk(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"P9","Ew",()=>A.KK())
s($,"OM","ei",()=>$.Iv())
s($,"OL","HX",()=>A.L2(!1,B.i,t.y))
s($,"Pp","Ii",()=>A.vQ(4096))
s($,"Pn","Ig",()=>new A.Bp().$0())
s($,"Po","Ih",()=>new A.Bo().$0())
s($,"Pb","Ex",()=>A.JU(A.bc(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Pa","I9",()=>A.vQ(0))
s($,"Pi","cl",()=>A.k0(0))
s($,"Pg","fk",()=>A.k0(1))
s($,"Ph","Ic",()=>A.k0(2))
s($,"Pe","Ez",()=>$.fk().bJ(0))
s($,"Pc","Ey",()=>A.k0(1e4))
r($,"Pf","Ib",()=>A.ag("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Pd","Ia",()=>A.vQ(8))
s($,"Pk","Id",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Pl","Ie",()=>A.ag("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Pm","If",()=>typeof URLSearchParams=="function")
s($,"Ps","fl",()=>A.kT(B.e8))
s($,"OR","kY",()=>{A.K4()
return $.wJ})
s($,"Pt","Il",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"OP","CW",()=>{var q=new A.AC(A.JT(8))
q.pj()
return q})
s($,"OH","kX",()=>A.IQ(B.di.gac(A.JV(A.bc(A.l([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aV)
s($,"Oy","Er",()=>A.ag("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Pv","CX",()=>A.ag("\\r\\n|\\r|\\n",!0,!1))
s($,"ON","HY",()=>A.Fw())
s($,"Pq","EA",()=>A.ag("^[\\x00-\\x7F]+$",!0,!1))
s($,"Pr","Ij",()=>A.ag('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"PJ","Iw",()=>A.ag('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Pu","Im",()=>A.ag("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Py","Ip",()=>A.ag('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Px","Io",()=>A.ag("\\\\(.)",!0,!1))
s($,"PG","Iu",()=>A.ag('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"PK","Ix",()=>A.ag("(?:"+$.Im().a+")*",!0,!1))
s($,"OC","Es",()=>A.ag("^[0-9a-f]{64}$",!0,!1))
s($,"PA","Ir",()=>A.Fx())
s($,"PI","pN",()=>A.ag("^[a-z0-9]{15}$",!0,!1))
r($,"Mf","Ik",()=>A.J7().a)
s($,"OI","Et",()=>A.ag("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"OD","HU",()=>A.D9("declaredNames",t.aJ))
s($,"OE","HV",()=>A.D9("fieldByName",A.ae("F<j,aZ>")))
s($,"Pw","In",()=>A.ag("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"OX","l_",()=>new A.k())
s($,"PD","ic",()=>new A.r0($.Eu()))
s($,"OU","HZ",()=>new A.wD(A.ag("/",!0,!1),A.ag("[^/]$",!0,!1),A.ag("^/",!0,!1)))
s($,"OW","pL",()=>new A.yR(A.ag("[/\\\\]",!0,!1),A.ag("[^/\\\\]$",!0,!1),A.ag("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ag("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"OV","kZ",()=>new A.yx(A.ag("/",!0,!1),A.ag("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ag("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ag("^/",!0,!1)))
s($,"OT","Eu",()=>A.Kw())
s($,"OB","HT",()=>$.fk().bK(0,63).bJ(0))
s($,"OA","HS",()=>{var q=$.fk()
return q.bK(0,63).h1(0,q)})
s($,"Oz","pK",()=>A.Fx())
s($,"P7","Ev",()=>A.D9(null,t.S))
s($,"PC","It",()=>A.JI(A.l([A.DF("files"),A.DF("blocks")],t.s)))
s($,"OJ","CV",()=>{var q,p,o=A.u(t.N,A.ae("fJ"))
for(q=0;q<2;++q){p=B.d_[q]
o.j(0,p.c,p)}return o})
s($,"Pz","Iq",()=>A.Fw())
r($,"P8","l0",()=>{var q="navigator"
return A.Jz(A.JA(A.Ct(A.HK(),q),A.DF("locks")))?A.Ct(A.Ct(A.HK(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fV,ArrayBuffer:A.fU,ArrayBufferView:A.jg,DataView:A.jf,Float32Array:A.mP,Float64Array:A.mQ,Int16Array:A.mR,Int32Array:A.mS,Int8Array:A.mT,Uint16Array:A.jh,Uint32Array:A.ji,Uint8ClampedArray:A.jj,CanvasPixelArray:A.jj,Uint8Array:A.eH})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fW.$nativeSuperclassTag="ArrayBufferView"
A.kj.$nativeSuperclassTag="ArrayBufferView"
A.kk.$nativeSuperclassTag="ArrayBufferView"
A.dO.$nativeSuperclassTag="ArrayBufferView"
A.kl.$nativeSuperclassTag="ArrayBufferView"
A.km.$nativeSuperclassTag="ArrayBufferView"
A.bU.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.O8
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
