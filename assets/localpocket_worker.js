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
if(a[b]!==s){A.Pr(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.EN(b)
return new s(c,this)}:function(){if(s===null)s=A.EN(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.EN(a).prototype
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
EY(a,b,c,d){return{i:a,p:b,e:c,x:d}},
D_(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.EW==null){A.OY()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Gj("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.B3
if(o==null)o=$.B3=A.CZ(n)
p=q[o]}if(p!=null)return p
p=A.P5(a)
if(p!=null)return p
if(typeof a=="function")return B.cy
s=Object.getPrototypeOf(a)
if(s==null)return B.bh
if(s===Object.prototype)return B.bh
if(typeof q=="function"){o=$.B3
if(o==null)o=$.B3=A.CZ(n)
Object.defineProperty(q,o,{value:B.aQ,enumerable:false,writable:true,configurable:true})
return B.aQ}return B.aQ},
mJ(a,b){if(a<0||a>4294967295)throw A.b(A.aA(a,0,4294967295,"length",null))
return J.DO(new Array(a),b)},
ug(a,b){if(a<0)throw A.b(A.U("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
FL(a,b){if(a<0)throw A.b(A.U("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
DO(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
Ki(a,b){return J.Fe(a,b)},
FM(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Kl(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.FM(r))break;++b}return b},
FN(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.FM(r))break}return b},
cK(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.j4.prototype
return J.mL.prototype}if(typeof a=="string")return J.dS.prototype
if(a==null)return J.j5.prototype
if(typeof a=="boolean")return J.mK.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.D_(a)},
J(a){if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.D_(a)},
ax(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.D_(a)},
OQ(a){if(typeof a=="number")return J.eN.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ea.prototype
return a},
OR(a){if(typeof a=="number")return J.eN.prototype
if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ea.prototype
return a},
CY(a){if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ea.prototype
return a},
l3(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.D_(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cK(a).P(a,b)},
Q(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Id(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.J(a).h(a,b)},
b5(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Id(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.ax(a).j(a,b,c)},
aO(a,b){return J.ax(a).u(a,b)},
Fb(a,b){return J.ax(a).D(a,b)},
Dv(a,b){return J.CY(a).i_(a,b)},
q5(a){return J.l3(a).mY(a)},
Fc(a,b,c){return J.l3(a).i0(a,b,c)},
Fd(a,b,c){return J.l3(a).mZ(a,b,c)},
Jg(a){return J.l3(a).n_(a)},
bV(a,b,c){return J.l3(a).i1(a,b,c)},
q6(a,b){return J.ax(a).fn(a,b)},
Jh(a,b,c){return J.OQ(a).bx(a,b,c)},
Fe(a,b){return J.OR(a).a3(a,b)},
Dw(a,b){return J.J(a).E(a,b)},
le(a,b){return J.ax(a).a4(a,b)},
lf(a,b){return J.ax(a).ct(a,b)},
Ji(a,b,c){return J.ax(a).cu(a,b,c)},
Jj(a){return J.l3(a).gac(a)},
bH(a){return J.ax(a).gH(a)},
ab(a){return J.cK(a).gK(a)},
bq(a){return J.J(a).gF(a)},
d9(a){return J.J(a).gS(a)},
E(a){return J.ax(a).gt(a)},
q7(a){return J.ax(a).ga_(a)},
ag(a){return J.J(a).gm(a)},
c9(a){return J.cK(a).gam(a)},
q8(a){return J.ax(a).gao(a)},
Jk(a,b,c){return J.ax(a).h8(a,b,c)},
Jl(a,b,c){return J.ax(a).aF(a,b,c)},
Jm(a,b){return J.ax(a).C(a,b)},
bI(a,b,c){return J.ax(a).cE(a,b,c)},
Jn(a,b,c){return J.CY(a).eG(a,b,c)},
Jo(a,b){return J.J(a).sm(a,b)},
Jp(a,b,c,d,e){return J.ax(a).ai(a,b,c,d,e)},
fx(a,b){return J.ax(a).ba(a,b)},
Ff(a,b){return J.ax(a).cI(a,b)},
Jq(a,b){return J.CY(a).di(a,b)},
Jr(a,b){return J.CY(a).T(a,b)},
Fg(a,b,c){return J.ax(a).U(a,b,c)},
lg(a,b){return J.ax(a).ce(a,b)},
Js(a){return J.ax(a).bT(a)},
Dx(a){return J.ax(a).cG(a)},
X(a){return J.cK(a).l(a)},
Jt(a,b){return J.ax(a).dR(a,b)},
mH:function mH(){},
mK:function mK(){},
j5:function j5(){},
aJ:function aJ(){},
dU:function dU(){},
nh:function nh(){},
ea:function ea(){},
bZ:function bZ(){},
bB:function bB(){},
fX:function fX(){},
z:function z(a){this.$ti=a},
mI:function mI(){},
uh:function uh(a){this.$ti=a},
fB:function fB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eN:function eN(){},
j4:function j4(){},
mL:function mL(){},
dS:function dS(){}},A={DR:function DR(){},
fD(a,b,c){if(t.O.b(a))return new A.kj(a,b.i("@<0>").Z(c).i("kj<1,2>"))
return new A.ez(a,b.i("@<0>").Z(c).i("ez<1,2>"))},
FP(a){return new A.dT("Field '"+a+"' has been assigned during initialization.")},
FQ(a){return new A.dT("Field '"+a+"' has not been initialized.")},
Kp(a){return new A.dT("Field '"+a+"' has already been initialized.")},
e3(a){return new A.ns(a)},
D3(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aC(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hA(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cp(a,b,c){return a},
EX(a){var s,r
for(s=$.fm.length,r=0;r<s;++r)if(a===$.fm[r])return!0
return!1},
cF(a,b,c,d){A.aY(b,"start")
if(c!=null){A.aY(c,"end")
if(b>c)A.u(A.aA(b,0,c,"start",null))}return new A.cE(a,b,c,d.i("cE<0>"))},
dX(a,b,c,d){if(t.O.b(a))return new A.eI(a,b,c.i("@<0>").Z(d).i("eI<1,2>"))
return new A.cw(a,b,c.i("@<0>").Z(d).i("cw<1,2>"))},
Ge(a,b,c){var s="takeCount"
A.dH(b,s)
A.aY(b,s)
if(t.O.b(a))return new A.iM(a,b,c.i("iM<0>"))
return new A.f3(a,b,c.i("f3<0>"))},
Gc(a,b,c){var s="count"
if(t.O.b(a)){A.dH(b,s)
A.aY(b,s)
return new A.fN(a,b,c.i("fN<0>"))}A.dH(b,s)
A.aY(b,s)
return new A.dm(a,b,c.i("dm<0>"))},
DM(a,b,c){return new A.eH(a,b,c.i("eH<0>"))},
av(){return new A.bv("No element")},
j2(){return new A.bv("Too many elements")},
FJ(){return new A.bv("Too few elements")},
nJ(a,b,c,d){if(c-b<=32)A.L8(a,b,c,d)
else A.L7(a,b,c,d)},
L8(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.J(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
L7(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.L(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.L(a4+a5,2),e=f-i,d=f+i,c=J.J(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.nJ(a3,a4,r-2,a6)
A.nJ(a3,q+2,a5,a6)
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
break}}A.nJ(a3,r,q,a6)}else A.nJ(a3,r,q,a6)},
Al:function Al(a){this.a=0
this.b=a},
oQ:function oQ(a){this.a=0
this.b=a},
ef:function ef(){},
lF:function lF(a,b){this.a=a
this.$ti=b},
ez:function ez(a,b){this.a=a
this.$ti=b},
kj:function kj(a,b){this.a=a
this.$ti=b},
kg:function kg(){},
zV:function zV(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.$ti=b},
eA:function eA(a,b){this.a=a
this.$ti=b},
qB:function qB(a,b){this.a=a
this.b=b},
qA:function qA(a){this.a=a},
dT:function dT(a){this.a=a},
ns:function ns(a){this.a=a},
cu:function cu(a){this.a=a},
Da:function Da(){},
xY:function xY(){},
L:function L(){},
a0:function a0(){},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
eI:function eI(a,b,c){this.a=a
this.b=b
this.$ti=c},
mX:function mX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Z:function Z(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
mb:function mb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f3:function f3(a,b,c){this.a=a
this.b=b
this.$ti=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.$ti=c},
oa:function oa(a,b,c){this.a=a
this.b=b
this.$ti=c},
dm:function dm(a,b,c){this.a=a
this.b=b
this.$ti=c},
fN:function fN(a,b,c){this.a=a
this.b=b
this.$ti=c},
nI:function nI(a,b,c){this.a=a
this.b=b
this.$ti=c},
eJ:function eJ(a){this.$ti=a},
m8:function m8(a){this.$ti=a},
ed:function ed(a,b){this.a=a
this.$ti=b},
oA:function oA(a,b){this.a=a
this.$ti=b},
dd:function dd(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
iU:function iU(){},
om:function om(){},
hE:function hE(){},
bE:function bE(a,b){this.a=a
this.$ti=b},
k1:function k1(a){this.a=a},
kR:function kR(){},
JM(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bP(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aE(q,A.bP(new A.ao(a,m.i("ao<2>")),!0,c),b.i("@<0>").Z(c).i("aE<1,2>"))
n.$keys=l
return n}return new A.iI(A.bu(a,b,c),b.i("@<0>").Z(c).i("iI<1,2>"))},
JN(){throw A.b(A.a2("Cannot modify unmodifiable Map"))},
JO(){throw A.b(A.a2("Cannot modify constant Set"))},
Iz(a){var s=A.Iy(a)
if(s!=null)return s
return"minified:"+a},
Id(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.X(a)
return s},
eX(a){var s,r=$.G1
if(r==null)r=$.G1=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hb(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
KQ(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cf(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
nj(a){var s,r,q,p
if(a instanceof A.k)return A.c7(A.bo(a),null)
s=J.cK(a)
if(s===B.cx||s===B.cz||t.cx.b(a)){r=B.aX(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.c7(A.bo(a),null)},
G3(a){var s,r,q
if(a==null||typeof a=="number"||A.aT(a))return J.X(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eC)return a.l(0)
if(a instanceof A.hZ)return a.mL(!0)
s=$.Ja()
for(r=0;r<1;++r){q=s[r].yc(a)
if(q!=null)return q}return"Instance of '"+A.nj(a)+"'"},
KM(){return Date.now()},
KP(){var s,r
if($.x1!==0)return
$.x1=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.x1=1e6
$.nk=new A.x0(r)},
KL(){if(!!self.location)return self.location.href
return null},
G0(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
KR(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
if(!A.a5(q))throw A.b(A.fo(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ag(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fo(q))}return A.G0(p)},
G4(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.a5(q))throw A.b(A.fo(q))
if(q<0)throw A.b(A.fo(q))
if(q>65535)return A.KR(a)}return A.G0(a)},
KS(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bD(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ag(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aA(a,0,1114111,null,null))},
KT(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.an(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.L(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bC(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
E1(a){return a.c?A.bC(a).getUTCFullYear()+0:A.bC(a).getFullYear()+0},
E_(a){return a.c?A.bC(a).getUTCMonth()+1:A.bC(a).getMonth()+1},
x_(a){return a.c?A.bC(a).getUTCDate()+0:A.bC(a).getDate()+0},
DY(a){return a.c?A.bC(a).getUTCHours()+0:A.bC(a).getHours()+0},
DZ(a){return a.c?A.bC(a).getUTCMinutes()+0:A.bC(a).getMinutes()+0},
E0(a){return a.c?A.bC(a).getUTCSeconds()+0:A.bC(a).getSeconds()+0},
G2(a){return a.c?A.bC(a).getUTCMilliseconds()+0:A.bC(a).getMilliseconds()+0},
KO(a){return B.c.an((a.c?A.bC(a).getUTCDay()+0:A.bC(a).getDay()+0)+6,7)+1},
KN(a){var s=a.$thrownJsError
if(s==null)return null
return A.af(s)},
nl(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aU(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
CS(a,b){var s,r="index"
if(!A.a5(b))return new A.bJ(!0,b,r,null)
s=J.ag(a)
if(b<0||b>=s)return A.mE(b,s,a,null,r)
return A.xJ(b,r)},
OE(a,b,c){if(a<0||a>c)return A.aA(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aA(b,a,c,"end",null)
return new A.bJ(!0,b,"end",null)},
fo(a){return new A.bJ(!0,a,null,null)},
b(a){return A.aU(a,new Error())},
aU(a,b){var s
if(a==null)a=new A.du()
b.dartException=a
s=A.Ps
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Ps(){return J.X(this.dartException)},
u(a,b){throw A.aU(a,b==null?new Error():b)},
K(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.u(A.MV(a,b,c),s)},
MV(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.d0("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.b(A.az(a))},
dv(a){var s,r,q,p,o,n
a=A.Im(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.yL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
yM(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Gi(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
DS(a,b){var s=b==null,r=s?null:b.method
return new A.mM(a,r,s?null:b.receiver)},
B(a){if(a==null)return new A.na(a)
if(a instanceof A.iO)return A.et(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.et(a,a.dartException)
return A.NS(a)},
et(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
NS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ag(r,16)&8191)===10)switch(q){case 438:return A.et(a,A.DS(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.et(a,new A.jy())}}if(a instanceof TypeError){p=$.II()
o=$.IJ()
n=$.IK()
m=$.IL()
l=$.IO()
k=$.IP()
j=$.IN()
$.IM()
i=$.IR()
h=$.IQ()
g=p.cb(s)
if(g!=null)return A.et(a,A.DS(s,g))
else{g=o.cb(s)
if(g!=null){g.method="call"
return A.et(a,A.DS(s,g))}else if(n.cb(s)!=null||m.cb(s)!=null||l.cb(s)!=null||k.cb(s)!=null||j.cb(s)!=null||m.cb(s)!=null||i.cb(s)!=null||h.cb(s)!=null)return A.et(a,new A.jy())}return A.et(a,new A.ol(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jW()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.et(a,new A.bJ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jW()
return a},
af(a){var s
if(a instanceof A.iO)return a.b
if(a==null)return new A.kC(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.kC(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
l5(a){if(a==null)return J.ab(a)
if(typeof a=="object")return A.eX(a)
return J.ab(a)},
Ol(a){if(typeof a=="number")return B.w.gK(a)
if(a instanceof A.pD)return A.eX(a)
if(a instanceof A.hZ)return a.gK(a)
if(a instanceof A.k1)return a.gK(0)
return A.l5(a)},
Ia(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
OO(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
N7(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Fz("Unsupported number of arguments for wrapped closure"))},
er(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Oq(a,b)
a.$identity=s
return s},
Oq(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.N7)},
JG(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.y8().constructor.prototype):Object.create(new A.iz(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Ft(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.JC(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Ft(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
JC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Jx)}throw A.b("Error in functionType of tearoff")},
JD(a,b,c,d){var s=A.Fq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Ft(a,b,c,d){if(c)return A.JF(a,b,d)
return A.JD(b.length,d,a,b)},
JE(a,b,c,d){var s=A.Fq,r=A.Jy
switch(b?-1:a){case 0:throw A.b(new A.nB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
JF(a,b,c){var s,r
if($.Fo==null)$.Fo=A.Fn("interceptor")
if($.Fp==null)$.Fp=A.Fn("receiver")
s=b.length
r=A.JE(s,c,a,b)
return r},
EN(a){return A.JG(a)},
Jx(a,b){return A.kL(v.typeUniverse,A.bo(a.a),b)},
Fq(a){return a.a},
Jy(a){return a.b},
Fn(a){var s,r,q,p=new A.iz("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.U("Field name "+a+" not found.",null))},
CZ(a){return v.getIsolateTag(a)},
Pv(a,b){var s=$.C
if(s===B.i)return a
return s.i4(a,b)},
Ir(){return v.G},
QC(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
P5(a){var s,r,q,p,o,n=$.Ib.$1(a),m=$.CT[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.D7[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.HS.$2(a,n)
if(q!=null){m=$.CT[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.D7[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.D9(s)
$.CT[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.D7[n]=s
return s}if(p==="-"){o=A.D9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Ij(a,s)
if(p==="*")throw A.b(A.Gj(n))
if(v.leafTags[n]===true){o=A.D9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Ij(a,s)},
Ij(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.EY(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
D9(a){return J.EY(a,!1,null,!!a.$ic_)},
P7(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.D9(s)
else return J.EY(s,c,null,null)},
OY(){if(!0===$.EW)return
$.EW=!0
A.OZ()},
OZ(){var s,r,q,p,o,n,m,l
$.CT=Object.create(null)
$.D7=Object.create(null)
A.OX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Il.$1(o)
if(n!=null){m=A.P7(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
OX(){var s,r,q,p,o,n,m=B.bS()
m=A.ii(B.bT,A.ii(B.bU,A.ii(B.aY,A.ii(B.aY,A.ii(B.bV,A.ii(B.bW,A.ii(B.bX(B.aX),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Ib=new A.D4(p)
$.HS=new A.D5(o)
$.Il=new A.D6(n)},
ii(a,b){return a(b)||b},
M7(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
Ou(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
DQ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.ac("Illegal RegExp pattern ("+String(o)+")",a,null))},
Pl(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eO){s=B.a.ab(a,c)
return b.b.test(s)}else return!J.Dv(b,B.a.ab(a,c)).gF(0)},
I8(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Im(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
D(a,b,c){var s
if(typeof b=="string")return A.Pn(a,b,c)
if(b instanceof A.eO){s=b.gme()
s.lastIndex=0
return a.replace(s,A.I8(c))}return A.Pm(a,b,c)},
Pm(a,b,c){var s,r,q,p
for(s=J.Dv(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Pn(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Im(b),"g"),A.I8(c))},
HJ(a){return a},
Is(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.i_(0,a),s=new A.oI(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.HJ(B.a.B(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.HJ(B.a.ab(a,q)))
return s.charCodeAt(0)==0?s:s},
Po(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.It(a,s,s+b.length,c)},
It(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a_:function a_(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.b=b},
kA:function kA(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
pl:function pl(a,b){this.a=a
this.b=b},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a},
pm:function pm(a){this.a=a},
iI:function iI(a,b){this.a=a
this.$ti=b},
fJ:function fJ(){},
rg:function rg(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
fe:function fe(a,b){this.a=a
this.$ti=b},
hW:function hW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iY:function iY(a,b){this.a=a
this.$ti=b},
iJ:function iJ(){},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
ua:function ua(){},
j1:function j1(a,b){this.a=a
this.$ti=b},
x0:function x0(a){this.a=a},
jP:function jP(){},
yL:function yL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jy:function jy(){},
mM:function mM(a,b,c){this.a=a
this.b=b
this.c=c},
ol:function ol(a){this.a=a},
na:function na(a){this.a=a},
iO:function iO(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a
this.b=null},
eC:function eC(){},
qG:function qG(){},
qH:function qH(){},
yz:function yz(){},
y8:function y8(){},
iz:function iz(a,b){this.a=a
this.b=b},
nB:function nB(a){this.a=a},
bM:function bM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ui:function ui(a){this.a=a},
vl:function vl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
T:function T(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ao:function ao(a,b){this.a=a
this.$ti=b},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aK:function aK(a,b){this.a=a
this.$ti=b},
mU:function mU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
j7:function j7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j6:function j6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
D4:function D4(a){this.a=a},
D5:function D5(a){this.a=a},
D6:function D6(a){this.a=a},
hZ:function hZ(){},
pi:function pi(){},
pj:function pj(){},
pk:function pk(){},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hY:function hY(a){this.b=a},
oH:function oH(a,b,c){this.a=a
this.b=b
this.c=c},
oI:function oI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hw:function hw(a,b){this.a=a
this.c=b},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
BC:function BC(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Pr(a){throw A.aU(A.FP(a),new Error())},
v(){throw A.aU(A.FQ(""),new Error())},
dE(){throw A.aU(A.Kp(""),new Error())},
Dq(){throw A.aU(A.FP(""),new Error())},
oS(){var s=new A.oR("")
return s.b=s},
zW(a){var s=new A.oR(a)
return s.b=s},
oR:function oR(a){this.a=a
this.b=null},
ib(a,b,c){},
bc(a){var s,r,q
if(t.iy.b(a))return a
s=J.J(a)
r=A.a9(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
KD(a){return new DataView(new ArrayBuffer(a))},
FW(a,b,c){A.ib(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
dh(a,b,c){A.ib(a,b,c)
c=B.c.L(a.byteLength-b,4)
return new Int32Array(a,b,c)},
KE(a){return new Int8Array(a)},
KF(a){return new Uint16Array(a)},
FX(a,b,c){A.ib(a,b,c)
if(c==null)c=B.c.L(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
w8(a){return new Uint8Array(a)},
c2(a,b,c){A.ib(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dC(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.CS(b,a))},
d5(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.OE(a,b,c))
if(b==null)return c
return b},
h5:function h5(){},
h4:function h4(){},
jt:function jt(){},
pG:function pG(a){this.a=a},
js:function js(){},
h6:function h6(){},
e0:function e0(){},
c1:function c1(){},
n3:function n3(){},
n4:function n4(){},
n5:function n5(){},
n6:function n6(){},
n7:function n7(){},
ju:function ju(){},
jv:function jv(){},
jw:function jw(){},
eU:function eU(){},
kv:function kv(){},
kw:function kw(){},
kx:function kx(){},
ky:function ky(){},
E4(a,b){var s=b.c
return s==null?b.c=A.kJ(a,"y",[b.x]):s},
G9(a){var s=a.w
if(s===6||s===7)return A.G9(a.x)
return s===11||s===12},
L2(a){return a.as},
Ii(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aa(a){return A.BI(v.typeUniverse,a,!1)},
P0(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.ep(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
ep(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ep(a1,s,a3,a4)
if(r===s)return a2
return A.GR(a1,r,!0)
case 7:s=a2.x
r=A.ep(a1,s,a3,a4)
if(r===s)return a2
return A.GQ(a1,r,!0)
case 8:q=a2.y
p=A.ih(a1,q,a3,a4)
if(p===q)return a2
return A.kJ(a1,a2.x,p)
case 9:o=a2.x
n=A.ep(a1,o,a3,a4)
m=a2.y
l=A.ih(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Eq(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ih(a1,j,a3,a4)
if(i===j)return a2
return A.GS(a1,k,i)
case 11:h=a2.x
g=A.ep(a1,h,a3,a4)
f=a2.y
e=A.NN(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.GP(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ih(a1,d,a3,a4)
o=a2.x
n=A.ep(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Er(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.lq("Attempted to substitute unexpected RTI kind "+a0))}},
ih(a,b,c,d){var s,r,q,p,o=b.length,n=A.BS(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ep(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
NO(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.BS(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ep(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
NN(a,b,c,d){var s,r=b.a,q=A.ih(a,r,c,d),p=b.b,o=A.ih(a,p,c,d),n=b.c,m=A.NO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.p5()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
pY(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.OS(s)
return a.$S()}return null},
P_(a,b){var s
if(A.G9(b))if(a instanceof A.eC){s=A.pY(a)
if(s!=null)return s}return A.bo(a)},
bo(a){if(a instanceof A.k)return A.n(a)
if(Array.isArray(a))return A.a1(a)
return A.EB(J.cK(a))},
a1(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.EB(a)},
EB(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.N5(a,s)},
N5(a,b){var s=a instanceof A.eC?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Mh(v.typeUniverse,s.name)
b.$ccache=r
return r},
OS(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.BI(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
d8(a){return A.bT(A.n(a))},
EV(a){var s=A.pY(a)
return A.bT(s==null?A.bo(a):s)},
EJ(a){var s
if(a instanceof A.hZ)return a.m4()
s=a instanceof A.eC?A.pY(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c9(a).a
if(Array.isArray(a))return A.a1(a)
return A.bo(a)},
bT(a){var s=a.r
return s==null?a.r=new A.pD(a):s},
OJ(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kL(v.typeUniverse,A.EJ(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.GU(v.typeUniverse,s,A.EJ(q[r]))
return A.kL(v.typeUniverse,s,a)},
b4(a){return A.bT(A.BI(v.typeUniverse,a,!1))},
N4(a){var s=this
s.b=A.NL(s)
return s.b(a)},
NL(a){var s,r,q,p
if(a===t.K)return A.Nd
if(A.fr(a))return A.Nh
s=a.w
if(s===6)return A.N1
if(s===1)return A.Hn
if(s===7)return A.N8
r=A.NK(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fr)){a.f="$i"+q
if(q==="q")return A.Nb
if(a===t.m)return A.Na
return A.Ng}}else if(s===10){p=A.Ou(a.x,a.y)
return p==null?A.Hn:p}return A.N_},
NK(a){if(a.w===8){if(a===t.S)return A.a5
if(a===t.W||a===t.cZ)return A.Nc
if(a===t.N)return A.Nf
if(a===t.y)return A.aT}return null},
N3(a){var s=this,r=A.MZ
if(A.fr(s))r=A.Mv
else if(s===t.K)r=A.Mu
else if(A.il(s)){r=A.N0
if(s===t.u)r=A.b_
else if(s===t.jv)r=A.a3
else if(s===t.o9)r=A.C3
else if(s===t.jh)r=A.C4
else if(s===t.dA)r=A.H8
else if(s===t.mU)r=A.H9}else if(s===t.S)r=A.ak
else if(s===t.N)r=A.H
else if(s===t.y)r=A.ia
else if(s===t.cZ)r=A.Ha
else if(s===t.W)r=A.fk
else if(s===t.m)r=A.bm
s.a=r
return s.a(a)},
N_(a){var s=this
if(a==null)return A.il(s)
return A.P3(v.typeUniverse,A.P_(a,s),s)},
N1(a){if(a==null)return!0
return this.x.b(a)},
Ng(a){var s,r=this
if(a==null)return A.il(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cK(a)[s]},
Nb(a){var s,r=this
if(a==null)return A.il(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cK(a)[s]},
Na(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Hm(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
MZ(a){var s=this
if(a==null){if(A.il(s))return a}else if(s.b(a))return a
throw A.aU(A.Hg(a,s),new Error())},
N0(a){var s=this
if(a==null||s.b(a))return a
throw A.aU(A.Hg(a,s),new Error())},
Hg(a,b){return new A.kH("TypeError: "+A.GG(a,A.c7(b,null)))},
GG(a,b){return A.iN(a)+": type '"+A.c7(A.EJ(a),null)+"' is not a subtype of type '"+b+"'"},
co(a,b){return new A.kH("TypeError: "+A.GG(a,b))},
N8(a){var s=this
return s.x.b(a)||A.E4(v.typeUniverse,s).b(a)},
Nd(a){return a!=null},
Mu(a){if(a!=null)return a
throw A.aU(A.co(a,"Object"),new Error())},
Nh(a){return!0},
Mv(a){return a},
Hn(a){return!1},
aT(a){return!0===a||!1===a},
ia(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aU(A.co(a,"bool"),new Error())},
C3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aU(A.co(a,"bool?"),new Error())},
fk(a){if(typeof a=="number")return a
throw A.aU(A.co(a,"double"),new Error())},
H8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aU(A.co(a,"double?"),new Error())},
a5(a){return typeof a=="number"&&Math.floor(a)===a},
ak(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aU(A.co(a,"int"),new Error())},
b_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aU(A.co(a,"int?"),new Error())},
Nc(a){return typeof a=="number"},
Ha(a){if(typeof a=="number")return a
throw A.aU(A.co(a,"num"),new Error())},
C4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aU(A.co(a,"num?"),new Error())},
Nf(a){return typeof a=="string"},
H(a){if(typeof a=="string")return a
throw A.aU(A.co(a,"String"),new Error())},
a3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aU(A.co(a,"String?"),new Error())},
bm(a){if(A.Hm(a))return a
throw A.aU(A.co(a,"JSObject"),new Error())},
H9(a){if(a==null)return a
if(A.Hm(a))return a
throw A.aU(A.co(a,"JSObject?"),new Error())},
HE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.c7(a[q],b)
return s},
Nw(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.HE(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.c7(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Hk(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.c7(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.c7(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.c7(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.c7(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.c7(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
c7(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.c7(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.c7(a.x,b)+">"
if(m===8){p=A.NR(a.x)
o=a.y
return o.length>0?p+("<"+A.HE(o,b)+">"):p}if(m===10)return A.Nw(a,b)
if(m===11)return A.Hk(a,b,null)
if(m===12)return A.Hk(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
NR(a){var s=A.Iy(a)
if(s!=null)return s
return"minified:"+a},
Mi(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Mh(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.BI(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kK(a,5,"#")
q=A.BS(s)
for(p=0;p<s;++p)q[p]=r
o=A.kJ(a,b,q)
n[b]=o
return o}else return m},
Mg(a,b){return A.H6(a.tR,b)},
Mf(a,b){return A.H6(a.eT,b)},
BI(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.GT(a,null,b,!1)
r.set(b,s)
return s},
kL(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.GT(a,b,c,!0)
q.set(c,r)
return r},
GU(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Eq(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
GT(a,b,c,d){return A.M5(A.M_(a,b,c,d))},
en(a,b){b.a=A.N3
b.b=A.N4
return b},
kK(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cA(null,null)
s.w=b
s.as=c
r=A.en(a,s)
a.eC.set(c,r)
return r},
GR(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Md(a,b,r,c)
a.eC.set(r,s)
return s},
Md(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fr(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.il(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cA(null,null)
q.w=6
q.x=b
q.as=c
return A.en(a,q)},
GQ(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Mb(a,b,r,c)
a.eC.set(r,s)
return s},
Mb(a,b,c,d){var s,r
if(d){s=b.w
if(A.fr(b)||b===t.K)return b
else if(s===1)return A.kJ(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cA(null,null)
r.w=7
r.x=b
r.as=c
return A.en(a,r)},
Me(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cA(null,null)
s.w=13
s.x=b
s.as=q
r=A.en(a,s)
a.eC.set(q,r)
return r},
kI(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ma(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kJ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cA(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.en(a,r)
a.eC.set(p,q)
return q},
Eq(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cA(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.en(a,o)
a.eC.set(q,n)
return n},
GS(a,b,c){var s,r,q="+"+(b+"("+A.kI(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cA(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.en(a,s)
a.eC.set(q,r)
return r},
GP(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kI(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kI(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ma(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cA(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.en(a,p)
a.eC.set(r,o)
return o},
Er(a,b,c,d){var s,r=b.as+("<"+A.kI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Mc(a,b,c,r,d)
a.eC.set(r,s)
return s},
Mc(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.BS(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ep(a,b,r,0)
m=A.ih(a,c,r,0)
return A.Er(a,n,m,c!==m)}}l=new A.cA(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.en(a,l)},
M_(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
M5(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.M1(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.GL(a,r,l,k,!1)
else if(q===46)r=A.GL(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fg(a.u,a.e,k.pop()))
break
case 94:k.push(A.Me(a.u,k.pop()))
break
case 35:k.push(A.kK(a.u,5,"#"))
break
case 64:k.push(A.kK(a.u,2,"@"))
break
case 126:k.push(A.kK(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.M3(a,k)
break
case 38:A.M2(a,k)
break
case 63:p=a.u
k.push(A.GR(p,A.fg(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.GQ(p,A.fg(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.M0(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.GM(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.M6(a.u,a.e,o)
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
return A.fg(a.u,a.e,m)},
M1(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
GL(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Mi(s,o.x)[p]
if(n==null)A.u('No "'+p+'" in "'+A.L2(o)+'"')
d.push(A.kL(s,o,n))}else d.push(p)
return m},
M3(a,b){var s,r=a.u,q=A.GK(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kJ(r,p,q))
else{s=A.fg(r,a.e,p)
switch(s.w){case 11:b.push(A.Er(r,s,q,a.n))
break
default:b.push(A.Eq(r,s,q))
break}}},
M0(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.GK(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fg(p,a.e,o)
q=new A.p5()
q.a=s
q.b=n
q.c=m
b.push(A.GP(p,r,q))
return
case-4:b.push(A.GS(p,b.pop(),s))
return
default:throw A.b(A.lq("Unexpected state under `()`: "+A.r(o)))}},
M2(a,b){var s=b.pop()
if(0===s){b.push(A.kK(a.u,1,"0&"))
return}if(1===s){b.push(A.kK(a.u,4,"1&"))
return}throw A.b(A.lq("Unexpected extended operation "+A.r(s)))},
GK(a,b){var s=b.splice(a.p)
A.GM(a.u,a.e,s)
a.p=b.pop()
return s},
fg(a,b,c){if(typeof c=="string")return A.kJ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.M4(a,b,c)}else return c},
GM(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fg(a,b,c[s])},
M6(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fg(a,b,c[s])},
M4(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.lq("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.lq("Bad index "+c+" for "+b.l(0)))},
P3(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b2(a,b,null,c,null)
r.set(c,s)}return s},
b2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fr(d))return!0
s=b.w
if(s===4)return!0
if(A.fr(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b2(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.b2(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.b2(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b2(a,b.x,c,d,e))return!1
return A.b2(a,A.E4(a,b),c,d,e)}if(s===6)return A.b2(a,p,c,d,e)&&A.b2(a,b.x,c,d,e)
if(q===7){if(A.b2(a,b,c,d.x,e))return!0
return A.b2(a,b,c,A.E4(a,d),e)}if(q===6)return A.b2(a,b,c,p,e)||A.b2(a,b,c,d.x,e)
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
if(!A.b2(a,j,c,i,e)||!A.b2(a,i,e,j,c))return!1}return A.Hl(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.Hl(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.N9(a,b,c,d,e)}if(o&&q===10)return A.Ne(a,b,c,d,e)
return!1},
Hl(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b2(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b2(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b2(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b2(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b2(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
N9(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kL(a,b,r[o])
return A.H7(a,p,null,c,d.y,e)}return A.H7(a,b.y,null,c,d.y,e)},
H7(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b2(a,b[s],d,e[s],f))return!1
return!0},
Ne(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b2(a,r[s],c,q[s],e))return!1
return!0},
il(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fr(a))if(s!==6)r=s===7&&A.il(a.x)
return r},
fr(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
H6(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
BS(a){return a>0?new Array(a):v.typeUniverse.sEA},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
p5:function p5(){this.c=this.b=this.a=null},
pD:function pD(a){this.a=a},
p2:function p2(){},
kH:function kH(a){this.a=a},
Lw(){var s,r,q
if(self.scheduleImmediate!=null)return A.NU()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.er(new A.zD(s),1)).observe(r,{childList:true})
return new A.zC(s,r,q)}else if(self.setImmediate!=null)return A.NV()
return A.NW()},
Lx(a){self.scheduleImmediate(A.er(new A.zE(a),0))},
Ly(a){self.setImmediate(A.er(new A.zF(a),0))},
Lz(a){A.Ed(B.I,a)},
Ed(a,b){var s=B.c.L(a.a,1000)
return A.M8(s<0?0:s,b)},
Gf(a,b){var s=B.c.L(a.a,1000)
return A.M9(s<0?0:s,b)},
M8(a,b){var s=new A.kG(!0)
s.pD(a,b)
return s},
M9(a,b){var s=new A.kG(!1)
s.pE(a,b)
return s},
h(a){return new A.k9(new A.w($.C,a.i("w<0>")),a.i("k9<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.Hb(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.bz(A.B(a),A.af(a))},
Hb(a,b){var s,r,q=new A.C7(b),p=new A.C8(b)
if(a instanceof A.w)a.mJ(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.b6(q,p,s)
else{r=new A.w($.C,t._)
r.a=8
r.c=a
r.mJ(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fT(new A.CB(s),t.H,t.S,t.z)},
aR(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.dl(null)
else{s=c.a
s===$&&A.v()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.B(a)
q=A.af(a)
s.ap(new A.ar(r,q))}else{s=A.B(a)
r=A.af(a)
q=c.a
q===$&&A.v()
q.bo(s,r)
c.a.q()}return}if(a instanceof A.kr){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.u(0,s)
A.l8(new A.C5(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.uy(p,!1).W(new A.C6(c,b),t.P)
return}}A.Hb(a,b)},
Cz(a){var s=a.a
s===$&&A.v()
return new A.bi(s,A.n(s).i("bi<1>"))},
LA(a,b){var s=new A.oK(b.i("oK<0>"))
s.pz(a,b)
return s},
Co(a,b){return A.LA(a,b)},
LW(a){return new A.kr(a,1)},
d3(a){return new A.kr(a,0)},
GO(a,b,c){return 0},
iv(a){var s
if(t.C.b(a)){s=a.gcJ()
if(s!=null)return s}return B.T},
iX(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.B(q)
r=A.af(q)
p=new A.w($.C,b.i("w<0>"))
o=s
n=r
m=A.kS(o,n)
if(m==null)o=new A.ar(o,n==null?A.iv(o):n)
else o=m
p.cL(o)
return p}return b.i("y<0>").b(l)?l:A.bF(l,b)},
be(a,b){var s=a==null?b.a(a):a,r=new A.w($.C,b.i("w<0>"))
r.aN(s)
return r},
K9(a,b){var s
if(!b.b(null))throw A.b(A.aD(null,"computation","The type parameter is not nullable"))
s=new A.w($.C,b.i("w<0>"))
A.c4(a,new A.tG(null,s,b))
return s},
DJ(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.C,b.i("w<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.tI(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.b6(new A.tH(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.dl(A.l([],b.i("z<0>")))
return n}i.a=A.a9(n,null,!1,b.i("0?"))}catch(l){p=A.B(l)
o=A.af(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kS(m,k)
if(j==null)m=new A.ar(m,k==null?A.iv(m):k)
else m=j
n.cL(m)
return n}else{i.d=p
i.c=o}}return f},
DI(a,b,c,d){var s=new A.tB(d,null,b,c),r=$.C,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fT(s,c.i("0/"),t.K,t.l)
a.e_(new A.cm(q,2,null,s,a.$ti.i("@<1>").Z(c).i("cm<1,2>")))
return q},
K7(a,b){var s,r,q,p=A.l([],b.i("z<kp<0>>"))
for(s=a.length,r=b.i("kp<0>"),q=0;q<a.length;a.length===s||(0,A.p)(a),++q)p.push(new A.kp(a[q],r))
if(p.length===0)return A.be(A.l([],b.i("z<0>")),b.i("q<0>"))
s=new A.w($.C,b.i("w<q<0>>"))
A.LQ(p,new A.tC(new A.at(s,b.i("at<q<0>>")),p,b))
return s},
Nl(a){return a!=null},
LQ(a,b){var s,r={},q=r.a=r.b=0,p=new A.AB(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.p)(a),++q)a[q].ue(p)},
kS(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.ng(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.nl(r,q)
return s},
fl(a,b){var s
if($.C!==B.i){s=A.kS(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcJ()
if(b==null){A.nl(a,B.T)
b=B.T}}else b=B.T
else if(t.C.b(a))A.nl(a,b)
return new A.ar(a,b)},
LP(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bF(a,b){var s=new A.w($.C,b.i("w<0>"))
s.a=8
s.c=a
return s},
AH(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.E7()
b.cL(new A.ar(new A.bJ(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.ml(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.fd()
b.hj(p.a)
A.fc(b,q)
return}b.a^=2
b.b.dg(new A.AI(p,b))},
fc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fE(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.fc(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gcs()===k.gcs())}else f=!1
if(f){f=g.a
r=f.c
f.b.fE(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.AM(s,g,p).$0()
else if(q){if((f&1)!==0)new A.AL(s,m).$0()}else if((f&2)!==0)new A.AK(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hJ(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.AH(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hJ(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
Ht(a,b){if(t.ng.b(a))return b.fT(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dM(a,t.z,t.K)
throw A.b(A.aD(a,"onError",u.w))},
Nk(){var s,r
for(s=$.id;s!=null;s=$.id){$.kU=null
r=s.b
$.id=r
if(r==null)$.kT=null
s.a.$0()}},
NM(){$.EC=!0
try{A.Nk()}finally{$.kU=null
$.EC=!1
if($.id!=null)$.F6().$1(A.HV())}},
HG(a){var s=new A.oJ(a),r=$.kT
if(r==null){$.id=$.kT=s
if(!$.EC)$.F6().$1(A.HV())}else $.kT=r.b=s},
NJ(a){var s,r,q,p=$.id
if(p==null){A.HG(a)
$.kU=$.kT
return}s=new A.oJ(a)
r=$.kU
if(r==null){s.b=p
$.id=$.kU=s}else{q=r.b
s.b=q
$.kU=r.b=s
if(q==null)$.kT=s}},
l8(a){var s,r=null,q=$.C
if(B.i===q){A.Cy(r,r,B.i,a)
return}if(B.i===q.gk6().a)s=B.i.gcs()===q.gcs()
else s=!1
if(s){A.Cy(r,r,q,q.cd(a,t.H))
return}s=$.C
s.dg(s.fm(a))},
E9(a,b){var s=null,r=b.i("d2<0>"),q=new A.d2(s,s,s,s,r)
q.aD(a)
q.lD()
return new A.bi(q,r.i("bi<1>"))},
PQ(a,b){return new A.c5(A.cp(a,"stream",t.K),b.i("c5<0>"))},
nS(a,b,c,d,e,f){return e?new A.i5(b,c,d,a,f.i("i5<0>")):new A.d2(b,c,d,a,f.i("d2<0>"))},
dr(a,b,c){return new A.ka(b,a,c.i("ka<0>"))},
pU(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.B(q)
r=A.af(q)
$.C.fE(s,r)}},
LN(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.oO(s,b,f),o=A.zS(s,c),n=d==null?A.CD():d
return new A.eg(a,p,o,s.cd(n,t.H),s,r|q,f.i("eg<0>"))},
Lv(a){return new A.zz(a)},
oO(a,b,c){var s=b==null?A.NY():b
return a.dM(s,t.H,c)},
zS(a,b){if(b==null)b=A.NZ()
if(t.b9.b(b))return a.fT(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dM(b,t.z,t.K)
throw A.b(A.U("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Nm(a){},
No(a,b){$.C.fE(a,b)},
Nn(){},
GF(a,b){var s=$.C,r=new A.hS(s,b.i("hS<0>"))
A.l8(r.gmh())
if(a!=null)r.c=s.cd(a,t.H)
return r},
ME(a,b,c){var s=a.A()
if(s!==$.eu())s.b8(new A.Ca(b,c))
else b.ap(c)},
MF(a,b,c){var s=a.A()
if(s!==$.eu())s.b8(new A.Cb(b,c))
else b.cM(c)},
c4(a,b){var s=$.C
if(s===B.i)return s.kq(a,b)
return s.kq(a,s.fm(b))},
yA(a,b){var s,r=$.C
if(r===B.i)return r.kp(a,b)
s=r.i4(b,t.hU)
return $.C.kp(a,s)},
q0(a,b,c,d){return A.NI(a,c,b,d)},
NI(a,b,c,d){return $.C.nj(c,b).b5(a,d)},
NG(a,b,c,d,e){A.kZ(d,e)},
kZ(a,b){A.NJ(new A.Cv(a,b))},
Cw(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
Cx(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
EI(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
HC(a,b,c,d){return d},
HD(a,b,c,d){return d},
HB(a,b,c,d){return d},
NF(a,b,c,d,e){return null},
Cy(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gcs()
r=c.gcs()
d=s!==r?c.fm(d):c.kk(d,t.H)}A.HG(d)},
NE(a,b,c,d,e){return A.Ed(d,B.i!==c?c.kk(e,t.H):e)},
ND(a,b,c,d,e){e=c.uL(e,t.H,t.hU)
return A.Gf(d,e)},
NH(a,b,c,d){A.Ik(d)},
HA(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.DK(o,o,o,s,s)
r.D(0,e)}else r=o
s=new A.oW(c.gmw(),c.gmA(),c.gmy(),c.gms(),c.gmt(),c.gmr(),c.glX(),c.gk6(),c.glO(),c.glN(),c.gmm(),c.gm1(),c.gjL(),c.gkg(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.pN(s,q)
p=d.a
if(p!=null)s.as=new A.pM(s,p)}if(r!=null)s.at=new A.pO(s,r)
return s},
zD:function zD(a){this.a=a},
zC:function zC(a,b,c){this.a=a
this.b=b
this.c=c},
zE:function zE(a){this.a=a},
zF:function zF(a){this.a=a},
kG:function kG(a){this.a=a
this.b=null
this.c=0},
BG:function BG(a,b){this.a=a
this.b=b},
BF:function BF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k9:function k9(a,b){this.a=a
this.b=!1
this.$ti=b},
C7:function C7(a){this.a=a},
C8:function C8(a){this.a=a},
CB:function CB(a){this.a=a},
C5:function C5(a,b){this.a=a
this.b=b},
C6:function C6(a,b){this.a=a
this.b=b},
oK:function oK(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
zH:function zH(a){this.a=a},
zI:function zI(a){this.a=a},
zK:function zK(a){this.a=a},
zL:function zL(a,b){this.a=a
this.b=b},
zJ:function zJ(a,b){this.a=a
this.b=b},
zG:function zG(a){this.a=a},
kr:function kr(a,b){this.a=a
this.b=b},
pA:function pA(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
i4:function i4(a,b){this.a=a
this.$ti=b},
ar:function ar(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b,c,d,e,f,g){var _=this
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
kf:function kf(){},
ka:function ka(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
tG:function tG(a,b,c){this.a=a
this.b=b
this.c=c},
tI:function tI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tH:function tH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tB:function tB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ob:function ob(a,b){this.a=a
this.b=b},
tC:function tC(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a,b,c){this.c=a
this.d=b
this.$ti=c},
kp:function kp(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
AC:function AC(a,b){this.a=a
this.b=b},
AD:function AD(a,b){this.a=a
this.b=b},
AB:function AB(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(){},
aG:function aG(a,b){this.a=a
this.$ti=b},
at:function at(a,b){this.a=a
this.$ti=b},
cm:function cm(a,b,c,d,e){var _=this
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
AE:function AE(a,b){this.a=a
this.b=b},
AJ:function AJ(a,b){this.a=a
this.b=b},
AI:function AI(a,b){this.a=a
this.b=b},
AG:function AG(a,b){this.a=a
this.b=b},
AF:function AF(a,b){this.a=a
this.b=b},
AM:function AM(a,b,c){this.a=a
this.b=b
this.c=c},
AN:function AN(a,b){this.a=a
this.b=b},
AO:function AO(a){this.a=a},
AL:function AL(a,b){this.a=a
this.b=b},
AK:function AK(a,b){this.a=a
this.b=b},
AP:function AP(a,b){this.a=a
this.b=b},
AQ:function AQ(a,b,c){this.a=a
this.b=b
this.c=c},
AR:function AR(a,b){this.a=a
this.b=b},
oJ:function oJ(a){this.a=a
this.b=null},
ad:function ad(){},
yc:function yc(a,b){this.a=a
this.b=b},
yd:function yd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ye:function ye(a,b){this.a=a
this.b=b},
yf:function yf(a,b){this.a=a
this.b=b},
ya:function ya(a){this.a=a},
yb:function yb(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(){},
el:function el(){},
By:function By(a){this.a=a},
Bx:function Bx(a){this.a=a},
pB:function pB(){},
kb:function kb(){},
d2:function d2(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
i5:function i5(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
bi:function bi(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
oG:function oG(){},
zz:function zz(a){this.a=a},
zy:function zy(a){this.a=a},
kD:function kD(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
bb:function bb(){},
zU:function zU(a,b,c){this.a=a
this.b=b
this.c=c},
zT:function zT(a){this.a=a},
i3:function i3(){},
p1:function p1(){},
cl:function cl(a,b){this.b=a
this.a=null
this.$ti=b},
hR:function hR(a,b){this.b=a
this.c=b
this.a=null},
Au:function Au(){},
ej:function ej(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
Bf:function Bf(a,b){this.a=a
this.b=b},
hS:function hS(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
c5:function c5(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
kk:function kk(a){this.$ti=a},
dA:function dA(a,b){this.b=a
this.$ti=b},
Bd:function Bd(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
Ca:function Ca(a,b){this.a=a
this.b=b},
Cb:function Cb(a,b){this.a=a
this.b=b},
kn:function kn(){},
hV:function hV(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
ff:function ff(a,b,c){this.b=a
this.a=b
this.$ti=c},
kl:function kl(a,b){this.a=a
this.$ti=b},
i1:function i1(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
ke:function ke(a,b,c){this.a=a
this.b=b
this.$ti=c},
C0:function C0(a,b){this.a=a
this.b=b},
C2:function C2(a,b){this.a=a
this.b=b},
C1:function C1(a,b){this.a=a
this.b=b},
BZ:function BZ(a,b){this.a=a
this.b=b},
C_:function C_(a,b){this.a=a
this.b=b},
BY:function BY(a,b){this.a=a
this.b=b},
BV:function BV(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b},
BU:function BU(a,b){this.a=a
this.b=b},
BT:function BT(a,b){this.a=a
this.b=b},
BX:function BX(a,b){this.a=a
this.b=b},
BW:function BW(a,b){this.a=a
this.b=b},
pM:function pM(a,b){this.a=a
this.b=b},
pO:function pO(a,b){this.a=a
this.b=b},
pL:function pL(){},
oW:function oW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
Aq:function Aq(a,b,c){this.a=a
this.b=b
this.c=c},
As:function As(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ap:function Ap(a,b){this.a=a
this.b=b},
Ar:function Ar(a,b,c){this.a=a
this.b=b
this.c=c},
pp:function pp(){},
Bm:function Bm(a,b,c){this.a=a
this.b=b
this.c=c},
Bl:function Bl(a,b){this.a=a
this.b=b},
Bn:function Bn(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a){this.a=a},
Cv:function Cv(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
DK(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dy(d.i("@<0>").Z(e).i("dy<1,2>"))
b=A.EP()}else{if(A.I_()===b&&A.HZ()===a)return new A.eh(d.i("@<0>").Z(e).i("eh<1,2>"))
if(a==null)a=A.EO()}else{if(b==null)b=A.EP()
if(a==null)a=A.EO()}return A.LO(a,b,c,d,e)},
GH(a,b){var s=a[b]
return s===a?null:s},
Eo(a,b,c){if(c==null)a[b]=a
else a[b]=c},
En(){var s=Object.create(null)
A.Eo(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
LO(a,b,c,d,e){var s=c!=null?c:new A.Ao(d)
return new A.kh(a,b,s,d.i("@<0>").Z(e).i("kh<1,2>"))},
dV(a,b,c,d){if(b==null){if(a==null)return new A.bM(c.i("@<0>").Z(d).i("bM<1,2>"))
b=A.EP()}else{if(A.I_()===b&&A.HZ()===a)return new A.j7(c.i("@<0>").Z(d).i("j7<1,2>"))
if(a==null)a=A.EO()}return A.LZ(a,b,null,c,d)},
m(a,b,c){return A.Ia(a,new A.bM(b.i("@<0>").Z(c).i("bM<1,2>")))},
t(a,b){return new A.bM(a.i("@<0>").Z(b).i("bM<1,2>"))},
LZ(a,b,c,d,e){return new A.ks(a,b,new A.Bb(d),d.i("@<0>").Z(e).i("ks<1,2>"))},
vn(a){return new A.cJ(a.i("cJ<0>"))},
aP(a){return new A.cJ(a.i("cJ<0>"))},
ap(a,b){return A.OO(a,new A.cJ(b.i("cJ<0>")))},
Ep(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
dz(a,b,c){var s=new A.ei(a,b,c.i("ei<0>"))
s.c=a.e
return s},
MQ(a,b){return J.x(a,b)},
MR(a){return J.ab(a)},
FK(a){if(a.length===0)return null
return B.b.ga_(a)},
bu(a,b,c){var s=A.dV(null,null,b,c)
a.a5(0,new A.vm(s,b,c))
return s},
bO(a,b,c){var s=A.dV(null,null,b,c)
s.D(0,a)
return s},
mV(a,b){var s,r,q=A.vn(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.u(0,b.a(a[r]))
return q},
c0(a,b){var s=A.vn(b)
s.D(0,a)
return s},
Kq(a,b){var s=t.bP
return J.Fe(s.a(a),s.a(b))},
vH(a){var s,r
if(A.EX(a))return"{...}"
s=new A.a7("")
try{r={}
$.fm.push(a)
s.a+="{"
r.a=!0
a.a5(0,new A.vI(r,s))
s.a+="}"}finally{$.fm.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
DT(a){return new A.ja(A.a9(A.Kr(null),null,!1,a.i("0?")),a.i("ja<0>"))},
Kr(a){return 8},
dy:function dy(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
AT:function AT(a){this.a=a},
AS:function AS(a){this.a=a},
eh:function eh(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
kh:function kh(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
Ao:function Ao(a){this.a=a},
fd:function fd(a,b){this.a=a
this.$ti=b},
p6:function p6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ks:function ks(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
Bb:function Bb(a){this.a=a},
cJ:function cJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Bc:function Bc(a){this.a=a
this.c=this.b=null},
ei:function ei(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
vm:function vm(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
pd:function pd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
bf:function bf(){},
M:function M(){},
Y:function Y(){},
vG:function vG(a){this.a=a},
vI:function vI(a,b){this.a=a
this.b=b},
kt:function kt(a,b){this.a=a
this.$ti=b},
pf:function pf(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
pF:function pF(){},
je:function je(){},
d_:function d_(a,b){this.a=a
this.$ti=b},
ja:function ja(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
pe:function pe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cB:function cB(){},
kB:function kB(){},
kM:function kM(){},
Hr(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.B(r)
q=A.ac(String(s),null,null)
throw A.b(q)}q=A.Cd(p)
return q},
Cd(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.pa(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.Cd(a[s])
return a},
Mt(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.J0()
else s=new Uint8Array(o)
for(r=J.J(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Ms(a,b,c,d){var s=a?$.J_():$.IZ()
if(s==null)return null
if(0===c&&d===b.length)return A.H4(s,b)
return A.H4(s,b.subarray(c,d))},
H4(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Fi(a,b,c,d,e,f){if(B.c.an(f,4)!==0)throw A.b(A.ac("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.ac("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.ac("Invalid base64 padding, more than two '=' characters",a,b))},
LE(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.J(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.K(f)
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
if(3-k===1){r&2&&A.K(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.K(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.aD(b,"Not a byte value at index "+q+": 0x"+B.c.l0(s.h(b,q),16),null))},
LD(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ag(f,2),i=f&3,h=$.F7()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.K(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.ac(l,a,r))
s&2&&A.K(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.ac(l,a,r))
s&2&&A.K(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.Gt(a,r+1,c,-m-1)}throw A.b(A.ac(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.ac(k,a,r))},
LB(a,b,c,d){var s=A.LC(a,b,c),r=(d&3)+(s-b),q=B.c.ag(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.IS()},
LC(a,b,c){var s,r=c,q=r,p=0
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
Gt(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.ac("Invalid padding character",a,b))
return-s-1},
JX(a){return B.da.h(0,a.toLowerCase())},
FO(a,b,c){return new A.j8(a,b)},
MU(a){return a.p()},
LX(a,b){return new A.B7(a,[],A.Or())},
LY(a,b,c){var s,r=new A.a7("")
A.GJ(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
GJ(a,b,c,d){var s=A.LX(b,c)
s.j1(a)},
H5(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pa:function pa(a,b){this.a=a
this.b=b
this.c=null},
B6:function B6(a){this.a=a},
pb:function pb(a){this.a=a},
B4:function B4(a,b,c){this.b=a
this.c=b
this.a=c},
BQ:function BQ(){},
BP:function BP(){},
ln:function ln(){},
pE:function pE(){},
lo:function lo(a){this.a=a},
BH:function BH(a,b){this.a=a
this.b=b},
lu:function lu(a){this.a=a},
ix:function ix(a){this.a=a},
oM:function oM(a){this.a=0
this.b=a},
zR:function zR(a){this.c=null
this.a=0
this.b=a},
zN:function zN(){},
zA:function zA(a,b){this.a=a
this.b=b},
lv:function lv(){},
oL:function oL(){this.a=0},
zM:function zM(a,b){this.a=a
this.b=b},
qs:function qs(){},
hM:function hM(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b
this.c=0},
lG:function lG(){},
pv:function pv(a,b,c){this.a=a
this.b=b
this.$ti=c},
fa:function fa(a,b,c){this.a=a
this.b=b
this.$ti=c},
lI:function lI(){},
aH:function aH(){},
rm:function rm(a){this.a=a},
eK:function eK(){},
j8:function j8(a,b){this.a=a
this.b=b},
mN:function mN(a,b){this.a=a
this.b=b},
uj:function uj(){},
mP:function mP(a){this.b=a},
B5:function B5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mO:function mO(a){this.a=a},
B8:function B8(){},
B9:function B9(a,b){this.a=a
this.b=b},
B7:function B7(a,b,c){this.c=a
this.a=b
this.b=c},
mS:function mS(){},
mT:function mT(a){this.a=a},
nV:function nV(){},
BD:function BD(a,b){this.a=a
this.b=b},
kF:function kF(){},
px:function px(a){this.a=a},
BO:function BO(a,b,c){this.a=a
this.b=b
this.c=c},
or:function or(){},
os:function os(){},
pJ:function pJ(a){this.b=this.a=0
this.c=a},
BR:function BR(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
k3:function k3(a){this.a=a},
dB:function dB(a){this.a=a
this.b=16
this.c=0},
pP:function pP(){},
GD(a,b){var s=A.LL(a,b)
if(s==null)throw A.b(A.ac("Could not parse BigInt",a,null))
return s},
LI(a,b){var s,r,q=$.cr(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bt(0,$.F8()).o1(0,A.kc(s))
s=0
o=0}}if(b)return q.bW(0)
return q},
Gv(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
LJ(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.w.uN(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.Gv(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.Gv(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cr()
l=A.bR(j,i)
return new A.aQ(l===0?!1:c,i,l)},
LL(a,b){var s,r,q,p,o
if(a==="")return null
s=$.IU().ez(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.LI(p,q)
if(o!=null)return A.LJ(o,2,q)
return null},
bR(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
El(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
Gu(a){var s
if(a===0)return $.cr()
if(a===1)return $.fv()
if(a===2)return $.IV()
if(Math.abs(a)<4294967296)return A.kc(B.c.h1(a))
s=A.LF(a)
return s},
kc(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bR(4,s)
return new A.aQ(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bR(1,s)
return new A.aQ(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ag(a,16)
r=A.bR(2,s)
return new A.aQ(r===0?!1:o,s,r)}r=B.c.L(B.c.gn2(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.L(a,65536)}r=A.bR(r,s)
return new A.aQ(r===0?!1:o,s,r)},
LF(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.U("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cr()
r=$.IT()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.K(r)
r[p]=0}q=J.q5(B.f.gac(r))
q.$flags&2&&A.K(q,13)
q.setFloat64(0,a,!0)
q=r[7]
o=r[6]
n=(q<<4>>>0)+(o>>>4)-1075
m=new Uint16Array(4)
m[0]=(r[1]<<8>>>0)+r[0]
m[1]=(r[3]<<8>>>0)+r[2]
m[2]=(r[5]<<8>>>0)+r[4]
m[3]=o&15|16
l=new A.aQ(!1,m,4)
if(n<0)k=l.dW(0,-n)
else k=n>0?l.bX(0,n):l
if(s)return k.bW(0)
return k},
Em(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.K(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.K(d)
d[s]=0}return b+c},
GB(a,b,c,d){var s,r,q,p,o,n=B.c.L(c,16),m=B.c.an(c,16),l=16-m,k=B.c.bX(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dW(p,l)
r&2&&A.K(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bX((p&k)>>>0,m)}r&2&&A.K(d)
d[n]=q},
Gw(a,b,c,d){var s,r,q,p,o=B.c.L(c,16)
if(B.c.an(c,16)===0)return A.Em(a,b,o,d)
s=b+o+1
A.GB(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.K(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
LK(a,b,c,d){var s,r,q,p,o=B.c.L(c,16),n=B.c.an(c,16),m=16-n,l=B.c.bX(1,n)-1,k=B.c.dW(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bX((q&l)>>>0,m)
s&2&&A.K(d)
d[r]=(p|k)>>>0
k=B.c.dW(q,n)}s&2&&A.K(d)
d[j]=k},
zO(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
LG(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.K(e)
e[q]=r&65535
r=B.c.ag(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.K(e)
e[q]=r&65535
r=B.c.ag(r,16)}s&2&&A.K(e)
e[b]=r},
oN(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.K(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.K(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}},
GC(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.K(d)
d[e]=p&65535
r=B.c.L(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.K(d)
d[e]=n&65535
r=B.c.L(n,65536)}},
LH(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.jc((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
OW(a){return A.l5(a)},
DF(a,b){return new A.mc(new WeakMap(),a,b.i("mc<0>"))},
DG(a){},
AA(a,b){var s=$.IW()
s=s==null?null:new s(A.er(A.Pv(a,b),1))
return new A.p4(s,b.i("p4<0>"))},
aN(a){var s=A.hb(a,null)
if(s!=null)return s
throw A.b(A.ac(a,null,null))},
OG(a){var s=A.KQ(a)
if(s!=null)return s
throw A.b(A.ac("Invalid double",a,null))},
K0(a,b){a=A.aU(a,new Error())
a.stack=b.l(0)
throw a},
a9(a,b,c,d){var s,r=c?J.ug(a,d):J.mJ(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bP(a,b,c){var s,r=A.l([],c.i("z<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
O(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("z<0>"))
s=A.l([],b.i("z<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fY(a,b){var s=A.bP(a,!1,b)
s.$flags=3
return s},
e8(a,b,c){var s,r,q,p,o
A.aY(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.aA(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.G4(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Lf(a,b,c)
if(r)a=J.lg(a,c)
if(b>0)a=J.fx(a,b)
s=A.O(a,t.S)
return A.G4(s)},
Lf(a,b,c){var s=a.length
if(b>=s)return""
return A.KS(a,b,c==null||c>s?s:c)},
ai(a,b,c){return new A.eO(a,A.DQ(a,!1,b,c,!1,""))},
OV(a,b){return a==null?b==null:a===b},
yg(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
Ef(){var s,r,q=A.KL()
if(q==null)throw A.b(A.a2("'Uri.base' is not supported"))
s=$.Gm
if(s!=null&&q===$.Gl)return s
r=A.oq(q)
$.Gm=r
$.Gl=q
return r},
pI(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.IX()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bD(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Mn(a){var s,r,q
if(!$.IY())return A.Mo(a)
s=new URLSearchParams()
a.a5(0,new A.BN(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.B(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
E7(){return A.af(new Error())},
DC(a,b,c,d,e,f,g){var s=A.KT(a,b,c,d,e,f,g,0,!0)
return new A.aI(s==null?new A.t_(a,b,c,d,e,f,g,0).$0():s,0,!0)},
JR(){return new A.aI(Date.now(),0,!1)},
m3(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.aA(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.aA(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aD(b,s,"Time including microseconds is outside valid range"))
A.cp(c,"isUtc",t.y)
return a},
JS(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Fw(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
m2(a){if(a>=10)return""+a
return"0"+a},
bX(a,b,c){return new A.aF(a+1000*b+1e6*c)},
fO(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aD(b,"name","No enum value with that name"))},
iN(a){if(typeof a=="number"||A.aT(a)||a==null)return J.X(a)
if(typeof a=="string")return JSON.stringify(a)
return A.G3(a)},
Fy(a,b){A.cp(a,"error",t.K)
A.cp(b,"stackTrace",t.l)
A.K0(a,b)},
lq(a){return new A.lp(a)},
U(a,b){return new A.bJ(!1,null,b,a)},
aD(a,b,c){return new A.bJ(!0,a,b,c)},
dH(a,b){return a},
b8(a){var s=null
return new A.dk(s,s,!1,s,s,a)},
xJ(a,b){return new A.dk(null,null,!0,a,b,"Value not in range")},
aA(a,b,c,d,e){return new A.dk(b,c,!0,a,d,"Invalid value")},
G8(a,b,c,d){if(a<b||a>c)throw A.b(A.aA(a,b,c,d,null))
return a},
KX(a,b,c,d){return A.FI(a,d,b,null,c)},
bl(a,b,c){if(0>a||a>c)throw A.b(A.aA(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aA(b,a,c,"end",null))
return b}return c},
aY(a,b){if(a<0)throw A.b(A.aA(a,0,null,b,null))
return a},
FH(a,b){var s=b.b
return new A.j_(s,!0,a,null,"Index out of range")},
mE(a,b,c,d,e){return new A.j_(b,!0,a,e,"Index out of range")},
FI(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.mE(a,b,c,d,e==null?"index":e))
return a},
a2(a){return new A.d0(a)},
Gj(a){return new A.ok(a)},
A(a){return new A.bv(a)},
az(a){return new A.lL(a)},
Fz(a){return new A.p3(a)},
ac(a,b,c){return new A.bt(a,b,c)},
Kg(a,b,c){var s,r
if(A.EX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.fm.push(a)
try{A.Ni(a,s)}finally{$.fm.pop()}r=A.yg(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
uf(a,b,c){var s,r
if(A.EX(a))return b+"..."+c
s=new A.a7(b)
$.fm.push(a)
try{r=s
r.a=A.yg(r.a,a,", ")}finally{$.fm.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ni(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
FR(a,b,c,d,e){return new A.eA(a,b.i("@<0>").Z(c).Z(d).Z(e).i("eA<1,2,3,4>"))},
ch(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.ab(a)
b=J.ab(b)
return A.hA(A.aC(A.aC($.fw(),s),b))}if(B.d===d){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
return A.hA(A.aC(A.aC(A.aC($.fw(),s),b),c))}if(B.d===e){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
return A.hA(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d))}if(B.d===f){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
return A.hA(A.aC(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d),e))}if(B.d===g){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
f=J.ab(f)
return A.hA(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d),e),f))}s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
f=J.ab(f)
g=J.ab(g)
g=A.hA(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d),e),f),g))
return g},
w9(a){var s,r=$.fw()
for(s=J.E(a);s.k();)r=A.aC(r,J.ab(s.gn()))
return A.hA(r)},
Hc(a,b){return 65536+((a&1023)<<10)+(b&1023)},
oq(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Gk(a4<a4?B.a.B(a5,0,a4):a5,5,a3).gnX()
else if(s===32)return A.Gk(B.a.B(a5,5,a4),0,a3).gnX()}r=A.a9(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.HF(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.HF(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.dN(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.af(a5,"http",0)){if(i&&o+3===n&&B.a.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dN(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.af(a5,"https",0)){if(i&&o+4===n&&B.a.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dN(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cn(a4<a5.length?B.a.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Et(a5,0,q)
else{if(q===0)A.i7(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.H0(a5,c,p-1):""
a=A.GZ(a5,p,o,!1)
i=o+1
if(i<n){a0=A.hb(B.a.B(a5,i,n),a3)
d=A.BJ(a0==null?A.u(A.ac("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.H_(a5,n,m,a3,j,a!=null)
a2=m<l?A.BK(a5,m+1,l,a3):a3
return A.kO(j,b,a,d,a1,a2,l<a4?A.GY(a5,l+1,a4):a3)},
Lp(a){return A.Ew(a,0,a.length,B.o,!1)},
op(a,b,c){throw A.b(A.ac("Illegal IPv4 address, "+a,b,c))},
Lm(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.op("each part must be in the range 0..255",a,r)}A.op("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.op(k,a,q)}l=p+1
s&2&&A.K(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.op(k,a,q)
p=l}A.op("IPv4 address should contain exactly 4 parts",a,q)},
Ln(a,b,c){var s
if(b===c)throw A.b(A.ac("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Lo(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Gn(a,b,c)
return!0},
Lo(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bt(o,a,r)
s=r
break}return new A.bt("Unexpected character",a,r-1)}if(s-1===b)return new A.bt(o,a,s)
return new A.bt("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bt("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bt("Invalid IPvFuture address character",a,s)}},
Gn(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.yR(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Lm(a1,o,a3,s,q*2)
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
B.f.kA(s,c,b,0)}}return s},
kO(a,b,c,d,e,f,g){return new A.kN(a,b,c,d,e,f,g)},
GV(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i7(a,b,c){throw A.b(A.ac(c,a,b))},
Mk(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.E(q,"/")){s=A.a2("Illegal path character "+q)
throw A.b(s)}}},
BJ(a,b){if(a!=null&&a===A.GV(b))return null
return a},
GZ(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.i7(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Ml(a,r,s)
if(p<s){o=p+1
q=A.H3(a,B.a.af(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Ln(a,r,s)
m=B.a.B(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cv(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.H3(a,B.a.af(a,"25",o)?s+3:o,c,"%25")}else q=""
A.Gn(a,b,s)
return"["+B.a.B(a,b,s)+q+"]"}return A.Mq(a,b,c)},
Ml(a,b,c){var s=B.a.cv(a,"%",b)
return s>=b&&s<c?s:c},
H3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a7(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.Eu(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a7("")
m=i.a+=B.a.B(a,r,s)
if(n)o=B.a.B(a,s,s+3)
else if(o==="%")A.i7(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a7("")
if(r<s){i.a+=B.a.B(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.B(a,r,s)
if(i==null){i=new A.a7("")
n=i}else n=i
n.a+=j
m=A.Es(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.B(a,b,c)
if(r<c){j=B.a.B(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Mq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.Eu(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a7("")
l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.B(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a7("")
if(r<s){q.a+=B.a.B(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.i7(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a7("")
m=q}else m=q
m.a+=l
k=A.Es(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.B(a,b,c)
if(r<c){l=B.a.B(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
Et(a,b,c){var s,r,q
if(b===c)return""
if(!A.GX(a.charCodeAt(b)))A.i7(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.i7(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.B(a,b,c)
return A.Mj(r?a.toLowerCase():a)},
Mj(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
H0(a,b,c){if(a==null)return""
return A.kP(a,b,c,16,!1,!1)},
H_(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kP(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.T(s,"/"))s="/"+s
return A.Mp(s,e,f)},
Mp(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.T(a,"/")&&!B.a.T(a,"\\"))return A.Ev(a,!s||c)
return A.fj(a)},
BK(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.U("Both query and queryParameters specified",null))
return A.kP(a,b,c,256,!0,!1)}if(d==null)return null
return A.Mn(d)},
Mo(a){var s={},r=new A.a7("")
s.a=""
a.a5(0,new A.BL(new A.BM(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
GY(a,b,c){if(a==null)return null
return A.kP(a,b,c,256,!0,!1)},
Eu(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.D3(s)
p=A.D3(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bD(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.B(a,b,b+3).toUpperCase()
return null},
Es(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.mF(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.e8(s,0,null)},
kP(a,b,c,d,e,f){var s=A.H2(a,b,c,d,e,f)
return s==null?B.a.B(a,b,c):s},
H2(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.Eu(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.i7(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.Es(o)}if(p==null){p=new A.a7("")
l=p}else l=p
l.a=(l.a+=B.a.B(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.B(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
H1(a){if(B.a.T(a,"."))return!0
return B.a.ca(a,"/.")!==-1},
fj(a){var s,r,q,p,o,n
if(!A.H1(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.C(s,"/")},
Ev(a,b){var s,r,q,p,o,n
if(!A.H1(a))return!b?A.GW(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.GW(s[0])
return B.b.C(s,"/")},
GW(a){var s,r,q=a.length
if(q>=2&&A.GX(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.B(a,0,s)+"%3A"+B.a.ab(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Mr(a,b){if(a.wK("package")&&a.c==null)return A.HH(b,0,b.length)
return-1},
Mm(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.U("Invalid URL encoding",null))}}return s},
Ew(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.B(a,b,c)
else p=new A.cu(B.a.B(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.U("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.U("Truncated URI",null))
p.push(A.Mm(a,o+1))
o+=2}else p.push(r)}}return d.fp(p)},
GX(a){var s=a|32
return 97<=s&&s<=122},
Gk(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.ac(k,a,r))}}if(q<0&&r>b)throw A.b(A.ac(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga_(j)
if(p!==44||r!==n+7||!B.a.af(a,"base64",n+1))throw A.b(A.ac("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.Q.x8(a,m,s)
else{l=A.H2(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dN(a,m,s,l)}return new A.yQ(a,j,c)},
HF(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
GN(a){if(a.b===7&&B.a.T(a.a,"package")&&a.c<=0)return A.HH(a.a,a.e,a.f)
return-1},
HH(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
MH(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
zP:function zP(){},
zQ:function zQ(){},
p4:function p4(a,b){this.a=a
this.$ti=b},
BN:function BN(a){this.a=a},
t_:function t_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a},
Av:function Av(){},
ah:function ah(){},
lp:function lp(a){this.a=a},
du:function du(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j_:function j_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
d0:function d0(a){this.a=a},
ok:function ok(a){this.a=a},
bv:function bv(a){this.a=a},
lL:function lL(a){this.a=a},
nd:function nd(){},
jW:function jW(){},
p3:function p3(a){this.a=a},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
mG:function mG(){},
o:function o(){},
V:function V(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
k:function k(){},
pz:function pz(){},
jY:function jY(){this.b=this.a=0},
jO:function jO(a){this.a=a},
nA:function nA(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a7:function a7(a){this.a=a},
yR:function yR(a){this.a=a},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
BM:function BM(a,b){this.a=a
this.b=b},
BL:function BL(a){this.a=a},
yQ:function yQ(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
oZ:function oZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
mc:function mc(a,b,c){this.a=a
this.b=b
this.$ti=c},
Ks(a){return a},
Kj(a){return a},
Ea(a){return a},
Kh(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.H9(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
K8(a){return new v.G.Promise(A.c6(new A.tF(a)))},
n9:function n9(a){this.a=a},
tF:function tF(a){this.a=a},
tD:function tD(a){this.a=a},
tE:function tE(a){this.a=a},
Cn(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.My,a)
s[$.fu()]=a
return s},
d6(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Mz,a)
s[$.fu()]=a
return s},
c6(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.MA,a)
s[$.fu()]=a
return s},
pR(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.MB,a)
s[$.fu()]=a
return s},
ic(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.MC,a)
s[$.fu()]=a
return s},
EA(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.MD,a)
s[$.fu()]=a
return s},
My(a){return a.$0()},
Mz(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
MA(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
MB(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
MC(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
MD(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Hp(a){return a==null||A.aT(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
l4(a){if(A.Hp(a))return a
return new A.D8(new A.eh(t.mp)).$1(a)},
D0(a,b){return a[b]},
EM(a,b,c){return a[b].apply(a,c)},
Oe(a,b){var s,r
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
a4(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.aG(s,b.i("aG<0>"))
a.then(A.er(new A.De(r),1),A.er(new A.Df(r),1))
return s},
Ho(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
l0(a){if(A.Ho(a))return a
return new A.CN(new A.eh(t.mp)).$1(a)},
D8:function D8(a){this.a=a},
De:function De(a){this.a=a},
Df:function Df(a){this.a=a},
CN:function CN(a){this.a=a},
Ie(a,b){return Math.max(a,b)},
G6(){return B.au},
G7(){return $.Dt()},
B1:function B1(){},
B2:function B2(a){this.a=a},
Jz(a,b,c){return J.Fc(a,b,c)},
m9:function m9(){},
a8:function a8(){},
qu:function qu(a){this.a=a},
qv:function qv(a){this.a=a},
qw:function qw(a,b){this.a=a
this.b=b},
qx:function qx(a){this.a=a},
qy:function qy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qz:function qz(a){this.a=a},
m5:function m5(a){this.$ti=a},
j3:function j3(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
i6:function i6(){},
ho:function ho(a,b){this.a=a
this.$ti=b},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.$ti=c},
m4:function m4(){},
FY(){throw A.b(A.a2(u.O))},
Ll(){throw A.b(A.a2("Cannot modify an unmodifiable Map"))},
n8:function n8(){},
on:function on(){},
au(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.e8(m,0,null)},
cv:function cv(a){this.a=a},
cb:function cb(){this.a=null},
my:function my(){},
tK:function tK(){},
d4(a){var s=new Uint32Array(A.bc(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.pt(s,r,a,q,new Uint32Array(16))},
ps:function ps(){},
Bp:function Bp(){},
pt:function pt(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
lj:function lj(){},
qF:function qF(){},
jc:function jc(a){this.a=a},
jS:function jS(){},
vB:function vB(){},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
xX:function xX(){},
jT:function jT(a,b){this.b=a
this.c=b},
nF:function nF(a){this.a=a},
bG(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lZ(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bG(a5[0])
r=A.bG(a5[1])
q=A.bG(a5[2])
p=A.bG(a5[3])
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
g=B.c.an(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.an(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bX(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bG(s)
a5.$flags&2&&A.K(a5)
a5[0]=k
a5[1]=A.bG(r)
a5[2]=A.bG(q)
a5[3]=A.bG(p)},
Fv(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.dh(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.L(q,n),!1)
r.setUint32(12,B.c.an(q,n),!1)
p=J.bV(B.aE.gac(r),0,null)
o=new Uint32Array(4)
A.lZ(o,a,b)
A.lZ(o,a,p)
return J.bV(B.y.gac(o),0,null)},
lY:function lY(a,b,c){this.c=a
this.d=b
this.a=c},
rE:function rE(){},
oX:function oX(){},
oY:function oY(){},
pW(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.l9()===B.R){a5=A.fn(a5)
a6=A.fn(a6)
a7=A.fn(a7)
a8=A.fn(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.am[a5>>>24&255]^B.ak[a6>>>16&255]^B.al[a7>>>8&255]^B.ao[a8&255]^b3[r]
o=B.am[a6>>>24&255]^B.ak[a7>>>16&255]^B.al[a8>>>8&255]^B.ao[a5&255]^b3[r+1]
n=B.am[a7>>>24&255]^B.ak[a8>>>16&255]^B.al[a5>>>8&255]^B.ao[a6&255]^b3[r+2]
m=B.am[a8>>>24&255]^B.ak[a5>>>16&255]^B.al[a6>>>8&255]^B.ao[a7&255]^b3[r+3]
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
if($.l9()===B.R){a1=A.fn(a1)
a2=A.fn(a2)
a3=A.fn(a3)
a4=A.fn(a4)}a9.$flags&2&&A.K(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
HR(a){var s,r,q,p,o,n,m,l,k,j,i=a.ges(),h=B.d9.h(0,i.gm(0))
if(h==null)throw A.b(A.U("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.Fc(B.y.gac(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.K(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.l9()===B.R)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.an(m,k)
if(n===0)j=A.HM((j<<8|j>>>24)>>>0)^B.cK[B.c.jc(m,k)-1]<<24
else if(o&&n===4)j=A.HM(j)
r[m]=(j^r[m-k])>>>0}return r},
HM(a){return(B.n[a>>>24&255]<<24|B.n[a>>>16&255]<<16|B.n[a>>>8&255]<<8|B.n[a&255])>>>0},
fn(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
rp:function rp(){},
rF:function rF(){},
Ak:function Ak(){},
nv:function nv(a,b){this.a=a
this.b=b},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
qo:function qo(){},
HN(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.nv("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eB)){s=J.X(a)
if(B.a.T(s,"TypeError: "))s=B.a.ab(s,11)
a=new A.eB(s,b.b)}return a},
Hz(a,b,c){A.Fy(A.HN(a,c),b)},
Mw(a,b){return new A.dA(new A.C9(a,b),t.fb)},
ie(a,b,c){return A.Nv(a,b,c)},
Nv(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ie=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$ie)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.Cp(e)
a1.r=new A.Cq(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.Q
case 6:n=null
p=9
s=12
return A.a(A.a4(c.read(),k),$async$ie)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.B(b)
l=A.af(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.HN(m,a)
k=l
j=a1.b
if(j>=4)A.u(a1.bZ())
if((j&1)!==0){j=a1.gaW()
j.aM(d,k==null?B.T:k)}s=15
return A.a(a1.q(),$async$ie)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.uQ()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.u(a1.bZ())
if((f&1)!==0)a1.gaW().aD(g)}g=a1.b
s=((g&1)!==0?(a1.gaW().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aG(new A.w($.C,j),i):g).a,$async$ie)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ie,r)},
lD:function lD(a){this.b=!1
this.c=a},
qr:function qr(a){this.a=a},
C9:function C9(a,b){this.a=a
this.b=b},
Cp:function Cp(a){this.a=a},
Cq:function Cq(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.a=a},
qt:function qt(a){this.a=a},
Fs(a,b){return new A.eB(a,b)},
eB:function eB(a,b){this.a=a
this.b=b},
n1:function n1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
KC(a,b){var s=t.N,r=A.l([],t.e8),q=$.F1()
if(!q.b.test(a))A.u(A.aD(a,"method","Not a valid method"))
return new A.w1(A.t(s,s),r,a,b,A.dV(new A.ly(),new A.lz(),s,s))},
w1:function w1(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
w2:function w2(a,b){this.a=a
this.b=b},
L_(a,b){var s=new Uint8Array(0),r=$.F1()
if(!r.b.test(a))A.u(A.aD(a,"method","Not a valid method"))
r=t.N
return new A.xM(s,a,b,A.dV(new A.ly(),new A.lz(),r,r))},
xM:function xM(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
k_:function k_(){},
nU:function nU(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
JA(a){return a.toLowerCase()},
iB:function iB(a,b,c){this.a=a
this.c=b
this.$ti=c},
Kv(a){return A.Pu("media type",a,new A.vJ(a))},
DV(a,b,c){var s=t.N
if(c==null)s=A.t(s,s)
else{s=new A.iB(A.Of(),A.t(s,t.ag),t.fo)
s.D(0,c)}return new A.h_(a.toLowerCase(),b.toLowerCase(),new A.d_(s,t.ph))},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
vJ:function vJ(a){this.a=a},
vL:function vL(a){this.a=a},
vK:function vK(){},
OL(a){var s
a.nh($.J7(),"quoted string")
s=a.gkN().h(0,0)
return A.Is(B.a.B(s,1,s.length-1),$.J6(),new A.CV(),null)},
CV:function CV(){},
qn:function qn(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jB:function jB(){},
wn:function wn(a,b){this.a=a
this.b=b},
wo:function wo(a){this.a=a},
jE:function jE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
wU:function wU(){},
Bv:function Bv(a){this.a=a},
wJ:function wJ(){},
ha(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aX("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aX("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aX('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.j
else if(j.b(o))n=A.bu(o,t.N,t.X)
else throw A.b(A.aX('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.u
else if(t.j.b(m)){for(j=J.J(m),k=0;k<j.gm(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aX('Record field "imgs"['+k+"] is present but not a string."))
j=j.fn(m,t.N)
l=j.bT(j)}else throw A.b(A.aX('Record field "imgs" is present but not a list.'))
return new A.cU(s,p,r,n,l)},
wr:function wr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wI:function wI(a){this.a=a},
wH:function wH(){},
wz:function wz(a,b,c){this.a=a
this.b=b
this.c=c},
wA:function wA(a,b,c){this.a=a
this.b=b
this.c=c},
ww:function ww(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ws:function ws(a,b){this.a=a
this.b=b},
wu:function wu(a,b){this.a=a
this.b=b},
wt:function wt(a,b){this.a=a
this.b=b},
wx:function wx(a){this.a=a},
wy:function wy(a,b){this.a=a
this.b=b},
wv:function wv(a){this.a=a},
wD:function wD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wE:function wE(){},
wF:function wF(a,b){this.a=a
this.b=b},
wG:function wG(){},
wB:function wB(a,b){this.a=a
this.b=b},
wC:function wC(){},
KJ(a,b,c,d,e,f){var s=A.be(null,t.H)
return new A.wK(b,c,f,new A.wT(a,B.ai,null),e,d,s)},
KK(a){return 0.5+B.au.nA()},
jD:function jD(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
wK:function wK(a,b,c,d,e,f,g){var _=this
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
wT:function wT(a,b,c){this.a=a
this.b=b
this.c=c},
wN:function wN(){},
wR:function wR(a){this.a=a},
wS:function wS(a){this.a=a},
wO:function wO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wL:function wL(a,b,c){this.a=a
this.b=b
this.c=c},
wM:function wM(a){this.a=a},
wP:function wP(a){this.a=a},
wQ:function wQ(a){this.a=a},
Bw:function Bw(a,b){this.a=a
this.b=null
this.c=b},
Kd(a,b,c){return new A.cQ(a,b,c)},
iZ(a,b){return new A.dO(a)},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mB:function mB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){this.a=a},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
wp:function wp(a){this.a=a},
wq:function wq(a){this.a=a},
JP(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="storePolicies",b2="recordId",b3="field",b4="imgs",b5="name",b6="expectedSha256",b7="allowVolatileBlobs",b8="session",b9="index",c0="refId",c1="token",c2="id",c3="spec",c4="store"
switch(c5){case"open":s=c6.h(0,"stores")
r=c6.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.R("Malformed open payload."))
q=c6.h(0,b1)
p=A.l([],t.d)
for(o=J.J(s),n=0;n<o.gm(s);++n)p.push(A.DB(o.h(s,n),"stores["+n+"]"))
o=t.N
m=A.t(o,o)
for(l=r.ga0(),l=l.gt(l);l.k();){k=l.gn()
m.j(0,J.X(k.a),A.EL(k.b,"fingerprint"))}if(q==null)o=null
else{o=A.t(o,t.X)
for(l=t.f.a(q).ga0(),l=l.gt(l);l.k();){k=l.gn()
o.j(0,J.X(k.a),A.DB(k.b,b1))}}return new A.nc(p,m,o)
case"capabilities":return B.bN
case"health":return B.bQ
case"close":return B.bO
case"fileBeginUpload":j=c6.h(0,"size")
if(!A.a5(j))throw A.b(A.R("Malformed fileBeginUpload payload."))
return new A.mh(A.aV(c6),A.bd(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.kW(c6.h(0,b5),b5,"blob.bin"),j,A.d7(c6.h(0,b6),b6),A.eo(c6.h(0,b7),b7,!1))
case"fileChunk":i=c6.h(0,"chunk")
if(!t.p.b(i))throw A.b(A.R("Malformed fileChunk payload."))
return new A.mi(A.bd(c6,b8),i)
case"fileFinish":return new A.mn(A.bd(c6,b8))
case"fileAbort":return new A.mg(A.bd(c6,b8))
case"filesList":return new A.mw(A.aV(c6),A.bd(c6,b2),A.kW(c6.h(0,b3),b3,b4))
case"fileOpen":return new A.mq(A.aV(c6),A.bd(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.Hq(c6.h(0,b9),b9,0),A.d7(c6.h(0,c0),c0))
case"fileDownload":return new A.ml(A.aV(c6),A.bd(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.d7(c6.h(0,c0),c0))
case"fileCredit":h=c6.h(0,"bytes")
if(!A.a5(h))throw A.b(A.R("Malformed fileCredit payload."))
return new A.mk(A.bd(c6,"stream"),h)
case"fileClose":return new A.mj(A.bd(c6,"stream"))
case"fileRemove":return new A.mt(A.aV(c6),A.bd(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.Hq(c6.h(0,b9),b9,0),A.d7(c6.h(0,c0),c0))
case"fileGc":g=c6.h(0,"blobGraceMs")
f=c6.h(0,"tmpGraceMs")
if(!A.a5(g)||!A.a5(f))throw A.b(A.R("Malformed fileGc payload."))
return new A.mo(g,f)
case"fileEnforceStorageCap":e=c6.h(0,"maxBytes")
if(!A.a5(e))throw A.b(A.R("Malformed fileEnforceStorageCap payload."))
return new A.ma(e)
case"fileStorageStatus":return B.c3
case"syncStart":d=c6.h(0,"baseUrl")
if(typeof d!="string")throw A.b(A.R("Malformed syncStart payload."))
return new A.o3(d,A.d7(c6.h(0,"scopeId"),"scopeId"),A.d7(c6.h(0,c1),c1))
case"syncStop":return B.c8
case"syncNow":return B.c4
case"syncPause":return B.c5
case"syncResume":return B.c6
case"syncUpdateAuth":return new A.o9(A.d7(c6.h(0,c1),c1))
case"syncSetConnectivity":c=c6.h(0,"online")
if(!A.aT(c))throw A.b(A.R("Malformed syncSetConnectivity payload."))
return new A.o2(c)
case"syncStatus":return B.c7
case"get":return new A.mx(A.aV(c6),A.bd(c6,c2),A.cO(c6))
case"rows":b=c6.h(0,"ids")
if(!t.j.b(b))throw A.b(A.R("Malformed rows payload."))
return new A.ny(A.aV(c6),A.HP(b,"ids"),A.cO(c6))
case"mutate":return new A.n2(A.aV(c6),A.MN(c6.h(0,"mutation")),A.cO(c6))
case"query":return new A.nq(A.aV(c6),A.eZ(c6.h(0,c3)),A.cO(c6))
case"count":return new A.lU(A.aV(c6),A.eZ(c6.h(0,c3)),A.cO(c6))
case"countDistinct":return new A.lT(A.aV(c6),A.bd(c6,b3),A.eZ(c6.h(0,c3)),A.cO(c6))
case"distinct":p=A.aV(c6)
o=A.bd(c6,b3)
m=c6.h(0,c3)
return new A.m6(p,o,A.eZ(m==null?B.j:m),A.cO(c6))
case"ids":return new A.mC(A.aV(c6),A.eZ(c6.h(0,c3)),A.cO(c6))
case"aggregate":a=c6.h(0,"fn")
a0=A.DN(new A.aq(B.cU,new A.rk(a),t.gx))
if(a0==null)throw A.b(A.R("Unknown aggregate: "+A.r(a)))
return new A.lk(A.aV(c6),a0,A.bd(c6,b3),A.eZ(c6.h(0,c3)),A.cO(c6))
case"explain":return new A.md(A.aV(c6),A.eZ(c6.h(0,c3)),A.cO(c6))
case"search":return new A.nE(A.aV(c6),A.L6(c6.h(0,c3)),A.cO(c6))
case"txBegin":a1=c6.h(0,"readOnly")
if(!A.aT(a1))throw A.b(A.R("Malformed txBegin payload."))
a2=c6.h(0,"durability")
if(a2==null)a3=B.bt
else if(typeof a2=="string"){p=A.DN(new A.aq(B.d6,new A.rl(a2),t.mE))
if(p==null)p=A.u(A.R("Unknown tx durability: "+a2))
a3=p}else{p=A.u(A.R("Malformed txBegin durability."))
a3=p}return new A.od(a1,a3)
case"txCommit":case"txRollback":a4=c6.h(0,b8)
if(typeof a4!="string")throw A.b(A.R("Malformed tx payload."))
return c5==="txCommit"?new A.oe(a4):new A.og(a4)
case"txSavepoint":case"txRollbackTo":case"txRelease":a4=c6.h(0,b8)
a5=c6.h(0,b5)
if(typeof a4!="string"||typeof a5!="string")throw A.b(A.R("Malformed savepoint payload."))
A:{if("txSavepoint"===c5){p=new A.oi(a4,a5)
break A}if("txRollbackTo"===c5){p=new A.oh(a4,a5)
break A}p=new A.of(a4,a5)
break A}return p
case"watchOne":return new A.ox(A.aV(c6),A.bd(c6,c2))
case"watch":return new A.oy(A.aV(c6),A.eZ(c6.h(0,c3)))
case"watchCancel":a6=c6.h(0,"subscription")
if(typeof a6!="string")throw A.b(A.R("Malformed watchCancel payload."))
return new A.ow(a6)
case"analyze":return new A.lm(A.d7(c6.h(0,c4),c4))
case"walCheckpoint":return B.ca
case"vacuum":return B.c9
case"pruneOutbox":return B.c1
case"compact":a7=c6.h(0,c4)
a8=c6.h(0,"olderThanMs")
if(typeof a7!="string"||!A.a5(a8))throw A.b(A.R("Malformed compact payload."))
return new A.lK(a7,a8)
case"runMaintenance":a9=c6.h(0,"compactOlderThanMs")
if(!A.a5(a9))throw A.b(A.R("Malformed runMaintenance payload."))
return new A.nz(a9)
case"conflictsList":return new A.lQ(A.d7(c6.h(0,c4),c4))
case"conflictGet":return new A.lO(A.aV(c6),A.bd(c6,c2))
case"conflictsResolve":b0=c6.h(0,"merged")
if(!t.f.b(b0))throw A.b(A.R("Malformed conflictsResolve payload."))
return new A.nw(A.aV(c6),A.bd(c6,c2),A.DB(b0,"merged"))
case"conflictsAcceptLocal":return new A.lh(A.aV(c6),A.bd(c6,c2))
case"conflictsAcceptRemote":return new A.li(A.aV(c6),A.bd(c6,c2))
case"conflictsWatch":return new A.lS(A.d7(c6.h(0,c4),c4))
default:return null}},
aV(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.R("Malformed store name."))
return s},
bd(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.R('Malformed field "'+b+'".'))
return s},
cO(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.R("Malformed session id."))
return s},
DB(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.X(q.a),q.b)}return s}throw A.b(A.R('Malformed field "'+b+'".'))},
CF(a){var s,r=u.P
if(a instanceof A.dW){A:{if(a instanceof A.eb){s="ValidationException"
break A}if(a instanceof A.hD){s="UniqueConstraintException"
break A}if(a instanceof A.h7){s="NotNullConstraintException"
break A}if(a instanceof A.iE){s="CheckConstraintException"
break A}if(a instanceof A.jF){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.iV){s="ForeignKeyConstraintException"
break A}if(a instanceof A.k2){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.iW){s="FtsUnavailableError"
break A}if(a instanceof A.hm){s="SchemaRegistrationError"
break A}if(a instanceof A.jQ){s="SchemaTooNewError"
break A}if(a instanceof A.dp){s="StorageError"
break A}if(a instanceof A.jN){s="RemoteOnlyError"
break A}if(a instanceof A.jL){s="RecordNotFoundException"
break A}if(a instanceof A.jX){s="StaleCursorError"
break A}if(a instanceof A.jh){s="MissingLimitError"
break A}if(a instanceof A.iG){s="ConflictBlockedError"
break A}if(a instanceof A.fL){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.jK){s="ReadOnlyTxError"
break A}throw A.b(A.e3(r))}return s}if(t.b0.b(a))return"RangeError"
if(a instanceof A.bJ)return"ArgumentError"
if(a instanceof A.bv)return"StateError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
if(a instanceof A.b9){B:{if(a instanceof A.dt){s="TransientNetworkError"
break B}if(a instanceof A.cW){s="ServerBusyError"
break B}if(a instanceof A.f_){s="ServerError"
break B}if(a instanceof A.bK){s="AuthError"
break B}if(a instanceof A.ce){s="ForbiddenError"
break B}if(a instanceof A.cf){s="NotFoundError"
break B}if(a instanceof A.di){s="PayloadError"
break B}if(a instanceof A.e2){s="ProtocolError"
break B}if(a instanceof A.dL){s="DuplicateIdError"
break B}if(a instanceof A.db){s="BatchFailedError"
break B}if(a instanceof A.e5){s="RemoteVersionConflict"
break B}if(a instanceof A.hy){s="SyncIdentityError"
break B}throw A.b(A.e3(r))}return s}if(a instanceof A.jG)return"ProtocolEnvelopeException"
if(a instanceof A.f4)return"WireException"
return"unknown"},
aL(a){return new A.jG(a)},
OH(a){var s,r,q,p=J.X(a),o=null
if(a instanceof A.dW){s=A.CF(a)
p=a.a
if(a instanceof A.eb&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.hD){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.fp(a.c))}catch(r){if(!(A.B(r) instanceof A.f4))throw r}}else if(a instanceof A.h7)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.b9){s=A.CF(a)
p=a.a
if(a instanceof A.cW&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else{s=A.CF(a)
if(a instanceof A.f4)p=a.a
else if(a instanceof A.bv)p=a.a
else if(t.b0.b(a))p=A.r(a.d)
else if(a instanceof A.bJ)p=A.r(a.d)}q=A.t(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
MW(a){var s
A:{if(a instanceof A.jm){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.jp){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.jn){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.jq){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.jj){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.jk){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.ji){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.jo){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.jl){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.e3(u.P))}return s},
MN(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.R("Malformed mutation payload."))
s=t.N
r=a.aR(0,new A.Ch(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.jm(A.pV(r.h(0,n),n))
case"upsert":return new A.jp(A.pV(r.h(0,n),n))
case"putAll":return new A.jn(A.HK(r.h(0,m),m))
case"upsertAll":return new A.jq(A.HK(r.h(0,m),m))
case"patch":return new A.jj(A.Cu(r.h(0,l),l),A.pV(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.R("Malformed patchAll patches."))
k=A.t(s,t.G)
for(s=p.ga0(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.X(o.a),A.pV(o.b,"patches"))}return new A.jk(k)
case"archive":return new A.ji(A.Cu(r.h(0,l),l))
case"restore":return new A.jo(A.Cu(r.h(0,l),l))
case"purge":return new A.jl(A.Cu(r.h(0,l),l))
default:throw A.b(A.R("Unknown mutation kind: "+A.r(q)))}},
Cu(a,b){if(typeof a=="string")return a
throw A.b(A.R('Malformed mutation field "'+b+'".'))},
pV(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.X(q.a),q.b)}return s}throw A.b(A.R('Malformed mutation field "'+b+'".'))},
HK(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.E(a);r.k();)s.push(A.pV(r.gn(),b))
return s}throw A.b(A.R('Malformed mutation field "'+b+'".'))},
eZ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.R("Malformed query spec."))
s=a0.aR(0,new A.xE(),t.N,t.z)
r=new A.xF()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.l([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.u(A.R("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.I(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.DX(s.h(0,e)):A.u(A.R("Malformed query predicate."))
i=A.l([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.u(A.R("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.KW(h.gn()))
h=m==null?null:A.EK(m,"limit")
g=A.eo(s.h(0,"all"),"all",!1)
f=n==null?null:A.HP(n,"select")
return new A.xD(k,j,a,i,h,g,f,A.eo(s.h(0,d),d,!1),A.eo(s.h(0,c),c,!1),A.d7(l,"cursor"),A.eo(s.h(0,b),b,!1))},
G5(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.R(k))
s=a.aR(0,new A.xz(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.R(k))
p=A.DN(new A.aq(B.cM,new A.xA(q),t.mz))
if(p==null)throw A.b(A.R("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.R('Query condition "values" must be a list.'))
n=A.l1(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.l1(l.gn()))}else m=null
return new A.eY(r,p,n,m)},
DX(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.R("Malformed predicate tree."))
s=a.aR(0,new A.wY(),t.N,t.z)
r=new A.wX()
switch(s.h(0,"kind")){case"leaf":return new A.j9(A.G5(s))
case"not":return new A.jx(A.DX(s.h(0,"child")))
case"all":return new A.it(r.$1(s.h(0,q)))
case"any":return new A.iu(r.$1(s.h(0,q)))
default:throw A.b(A.R("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
KW(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.R(q))
s=a.aR(0,new A.xC(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.R(q))
return new A.np(r,A.eo(s.h(0,"desc"),"desc",!1))},
L6(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.R("Malformed search spec."))
s=a.aR(0,new A.xW(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.R("Malformed search term."))
q=s.h(0,p)==null?null:A.EK(s.h(0,p),p)
return new A.xV(r,q,A.eo(s.h(0,"all"),"all",!1),A.eo(s.h(0,o),o,!1),A.eo(s.h(0,n),n,!1))},
JQ(a){return new A.fK(a)},
JV(a){return new A.fM(a)},
Ke(a){return new A.fW(a)},
Jv(a){return new A.fz(a)},
K1(a){return new A.fP(a)},
fp(a){var s,r,q,p
if(a instanceof A.aI)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.Q.gdE().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.fp(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.t(s,t.X)
for(q=a.ga0(),q=q.gt(q);q.k();){p=q.gn()
r.j(0,J.X(p.a),A.fp(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.X(q.a),A.fp(q.b))}return s}if(a==null||A.aT(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.R("Value of type "+J.c9(a).l(0)+" is not wire-safe."))},
l1(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.cK(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.a5(s))return new A.aI(A.m3(s,0,!0),0,!0)
throw A.b(A.R("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.ad.v(s)
return i}catch(p){if(t.Y.b(A.B(p)))throw A.b(A.R(k))
else throw p}throw A.b(A.R(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.R("Malformed map wire value."))
n=A.t(t.N,t.X)
for(i=o.ga0(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.R(j+A.r(m)))
n.j(0,m,A.l1(q.b))}return n}l=A.t(t.N,t.X)
for(i=a.ga0(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.R(j+A.r(m)))
l.j(0,m,A.l1(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.l1(q.gn()))
return i}return a},
R(a){return new A.f4(a)},
EL(a,b){if(typeof a=="string")return a
throw A.b(A.R('Malformed wire field "'+b+'".'))},
EK(a,b){if(A.a5(a))return a
throw A.b(A.R('Malformed wire field "'+b+'".'))},
d7(a,b){if(a==null)return null
return A.EL(a,b)},
Hq(a,b,c){if(a==null)return c
return A.EK(a,b)},
eo(a,b,c){if(a==null)return!1
if(A.aT(a))return a
throw A.b(A.R('Malformed wire field "'+b+'".'))},
kW(a,b,c){if(a==null)return c
return A.EL(a,b)},
HP(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.l([],t.s)
for(r=J.J(a),q=0;q<r.gm(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.R(p+b+"["+q+']".'))
s.push(A.H(r.h(a,q)))}return s}throw A.b(A.R(p+b+'".'))},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
lN:function lN(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jG:function jG(a){this.a=a},
cc:function cc(){},
lJ:function lJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lR:function lR(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=b},
ms:function ms(a,b,c,d,e,f,g,h,i,j){var _=this
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
mh:function mh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mi:function mi(a,b){this.a=a
this.b=b},
mn:function mn(a){this.a=a},
mj:function mj(a){this.a=a},
mg:function mg(a){this.a=a},
mw:function mw(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function mq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ml:function ml(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mk:function mk(a,b){this.a=a
this.b=b},
mt:function mt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mo:function mo(a,b){this.a=a
this.b=b},
ma:function ma(a){this.a=a},
nQ:function nQ(){},
mv:function mv(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a},
fT:function fT(a){this.a=a},
mr:function mr(a){this.a=a},
fS:function fS(a){this.a=a},
fQ:function fQ(a){this.a=a},
hu:function hu(a){this.a=a},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w3:function w3(){},
jm:function jm(a){this.a=a},
jp:function jp(a){this.a=a},
jn:function jn(a){this.a=a},
jq:function jq(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a){this.a=a},
ji:function ji(a){this.a=a},
jo:function jo(a){this.a=a},
jl:function jl(a){this.a=a},
Ch:function Ch(){},
xD:function xD(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
xE:function xE(){},
xF:function xF(){},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xz:function xz(){},
xA:function xA(a){this.a=a},
b7:function b7(a,b){this.a=a
this.b=b},
cT:function cT(){},
wY:function wY(){},
wX:function wX(){},
j9:function j9(a){this.a=a},
jx:function jx(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
np:function np(a,b){this.a=a
this.b=b},
xC:function xC(){},
cM:function cM(a,b){this.a=a
this.b=b},
xV:function xV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xW:function xW(){},
nu:function nu(){},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(){},
mz:function mz(){},
lH:function lH(){},
mx:function mx(a,b,c){this.a=a
this.b=b
this.c=c},
ny:function ny(a,b,c){this.a=a
this.b=b
this.c=c},
n2:function n2(a,b,c){this.a=a
this.b=b
this.c=c},
nq:function nq(a,b,c){this.a=a
this.b=b
this.c=c},
lU:function lU(a,b,c){this.a=a
this.b=b
this.c=c},
lT:function lT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m6:function m6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mC:function mC(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
md:function md(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(a,b){this.a=a
this.b=b},
od:function od(a,b){this.a=a
this.b=b},
oe:function oe(a){this.a=a},
og:function og(a){this.a=a},
oi:function oi(a,b){this.a=a
this.b=b},
oh:function oh(a,b){this.a=a
this.b=b},
of:function of(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
ow:function ow(a){this.a=a},
lm:function lm(a){this.a=a},
ov:function ov(){},
ot:function ot(){},
nm:function nm(){},
lK:function lK(a,b){this.a=a
this.b=b},
nz:function nz(a){this.a=a},
lQ:function lQ(a){this.a=a},
lO:function lO(a,b){this.a=a
this.b=b},
nw:function nw(a,b,c){this.a=a
this.b=b
this.c=c},
lh:function lh(a,b){this.a=a
this.b=b},
li:function li(a,b){this.a=a
this.b=b},
lS:function lS(a){this.a=a},
aj:function aj(){},
h8:function h8(){},
iA:function iA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mA:function mA(a,b){this.a=a
this.b=b},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
h3:function h3(a){this.a=a},
hh:function hh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fK:function fK(a){this.a=a},
fM:function fM(a){this.a=a},
fW:function fW(a){this.a=a},
fz:function fz(a){this.a=a},
fP:function fP(a){this.a=a},
hn:function hn(a){this.a=a},
nD:function nD(a,b){this.a=a
this.b=b},
fI:function fI(a){this.a=a},
fH:function fH(a){this.a=a},
hB:function hB(a){this.a=a},
hI:function hI(a){this.a=a},
hd:function hd(a){this.a=a},
fG:function fG(a){this.a=a},
f2:function f2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bg:function bg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o3:function o3(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function o8(){},
nZ:function nZ(){},
o_:function o_(){},
o1:function o1(){},
o9:function o9(a){this.a=a},
o2:function o2(a){this.a=a},
o6:function o6(){},
o4:function o4(a){this.a=a},
o0:function o0(a){this.a=a},
o7:function o7(a){this.a=a},
o5:function o5(a){this.a=a},
ls:function ls(){},
f4:function f4(a){this.a=a},
al(a){var s,r=new A.a7("")
A.cq(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
F0(a){var s,r,q
for(s=new A.nA(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
MG(a){var s
if(!isFinite(a))return B.w.l(a)
s=B.w.l(a)
if(B.a.c9(s,".0"))s=B.a.B(s,0,s.length-2)
return s==="-0"?"0":s},
cq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(b==null){a.a+="null"
return 4}if(A.aT(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.a5(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.MG(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.w.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a9(b,g)
a.a+=r
return A.F0(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.J(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cq(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
n=A.aP(t.N)
for(s=J.E(b.gJ());s.k();){m=s.gn()
r=J.X(m)
if(!n.u(0,r))throw A.b(A.U('Cannot canonicalize map: keys collide after toString() ("'+r+'").',g))
o.push(new A.a_(r,m))}B.b.cI(o,new A.Dr())
a.a+="{"
for(s=o.length,q=1,l=!0,k=0;k<o.length;o.length===s||(0,A.p)(o),++k,l=!1){j=o[k]
if(!l){a.a+=",";++q}i=B.h.a9(j.a,g)
a.a+=i
h=A.F0(i)
a.a+=":"
q=q+h+1+A.cq(a,b.h(0,j.b))}a.a+="}"
return q+1}throw A.b(A.U("Cannot canonicalize value of type "+J.c9(b).l(0),g))},
Dr:function Dr(){},
La(a){var s,r,q,p=A.ai("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ez(a)
if(p==null)return B.dK
s=p.b
r=s[1]
r.toString
r=A.aN(r)
q=s[2]
q.toString
q=A.aN(q)
s=s[3]
s=A.hb(s==null?"":s,null)
return new A.ek(r,q,s==null?0:s)},
Gd(a,b,c){var s,r=A.La(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
f1(a,b){return A.Lb(a,b)},
Lb(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$f1=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.bc("SELECT sqlite_version() AS v"),$async$f1)
case 3:g=d.Q(c.bH(a2),"v")
g.toString
A.H(g)
k=t.U
d=A
c=A
b=J
s=4
return A.a(a.bc("PRAGMA compile_options"),$async$f1)
case 4:j=d.O(new c.ed(b.bI(a2,new A.y5(),t.X),k),k.i("o.E"))
n=B.b.bp(j,new A.y6())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$f1)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$f1)
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
k=a0===B.bi
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.bc("PRAGMA journal_mode"),$async$f1)
case 19:l=a2
if(J.d9(l))m=A.a3(J.bH(J.bH(l).gb0()))
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
case 18:case 14:h=A.Gd(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nP(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f1,r)},
ni:function ni(a,b){this.a=a
this.b=b},
nP:function nP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y5:function y5(){},
y6:function y6(){},
iC:function iC(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
e4:function e4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a6:function a6(a,b){this.a=a
this.b=b},
qC:function qC(a,b){this.a=a
this.b=b},
qD:function qD(){},
qE:function qE(){},
Fh(a){return new Uint8Array(A.bc(a))},
tc:function tc(){},
q9:function q9(a,b,c){this.b=a
this.c=b
this.d=c},
ET(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cC
if(r===B.J){r=a.f
r.toString
r=!B.b.E(r,b)}else r=!1
if(r)return B.cH
return s
case 1:case 4:return!A.a5(b)?B.cD:s
case 2:if(typeof b!="number")return B.b7
if(!isFinite(b))return B.b7
return s
case 3:return!A.aT(b)?B.cE:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cF:s
case 7:return!t.j.b(b)?B.cG:s}},
dD(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=a.gdC(),i=t.N,h=t.X,g=A.m(["id",e],i,h)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
g.j(0,l,A.Ez(n,f.h(0,l),new Uint8Array(A.bc(B.e.v(q+l+"\x00"+e))),m))}k=A.t(i,h)
for(i=f.ga0(),i=i.gt(i);i.k();){h=i.gn()
s=h.a
if(s==="id"||s==="archived"||j.E(0,s))continue
k.j(0,s,h.b)}g.j(0,"extra",k.a===0?"":A.al(k))
g.j(0,"archived",b?1:0)
g.j(0,"hidden",0)
return g},
ES(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.Ez(b,c,new Uint8Array(A.bc(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
NT(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gdC()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.Ez(n,g.h(0,l),new Uint8Array(A.bc(B.e.v(q+l+"\x00"+f))),m))}k=A.t(t.N,t.X)
for(s=g.ga0(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.E(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.al(k))
a.push(c?1:0)
a.push(0)},
bU(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.t(j,i),g=b.h(0,"extra")
if(typeof g=="string"&&g.length!==0){s=B.h.aI(g,null)
if(t.f.b(s))for(j=A.bu(s,j,i),j=new A.aK(j,A.n(j).i("aK<1,2>")).gt(0);j.k();){r=j.d
i=r.a
if(B.aH.E(0,i))continue
h.j(0,i,r.b)}}h.j(0,"id",b.h(0,"id"))
for(j=a.c,i=j.length,q=a.a,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
n=o.a
m=b.h(0,n)
l=A.a3(b.h(0,"id"))
h.j(0,n,A.Ey(o,m,c,d,l==null?"":l,q))}h.j(0,k,J.x(b.h(0,k),1))
return h},
Oz(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.E(b);s.k();)r.push(A.bU(a,s.gn(),c,d))
return r},
OA(a,b,c,d,e){var s,r,q,p,o,n,m=A.l([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.p)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a_(p,a.ey(p)))}s=A.l([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.MK(o.gn(),m,r,c,e,n))
return s},
MK(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a3(a.h(0,"id"))
l.j(0,p,A.Ey(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
Ey(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=null,k=' row: encrypted field "'
if(b==null)return l
if(a.e){if(c==null)p=l
else p=c
s=p
if(s==null)throw A.b(A.A('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.dq("Corrupt "+f+k+a.a+'" must be TEXT ciphertext but is '+J.c9(b).l(0)+"."))
r=null
try{r=B.o.fp(s.v7(B.ad.v(b),new Uint8Array(A.bc(B.e.v(f+"\x00"+a.a+"\x00"+e)))))}catch(o){q=A.B(o)
n=A.dq("Corrupt "+f+k+a.a+'" failed to decrypt ('+A.r(q)+").")
throw A.b(n)}m=a.b
A:{if(B.B===m){n=J.x(r,"1")||J.x(r,"true")
break A}if(B.W===m||B.Y===m){n=A.aN(r)
break A}if(B.X===m){n=A.OG(r)
break A}if(B.Z===m||B.a_===m){n=B.h.aI(r,l)
break A}n=r
break A}return n}n=a.b
if(n===B.B)return J.x(b,1)
if(n===B.Z||n===B.a_){if(typeof b!="string")throw A.b(A.dq("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c9(b).l(0)+"."))
return B.h.aI(b,l)}return b},
Ez(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.A('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.X(b)
break
case 6:case 7:s=A.al(b)
break
default:A.H(b)
s=b}r=d.vR(B.e.v(s),c)
return B.Q.gdE().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.al(b)
default:return b}},
bn(a,b){var s,r,q,p,o,n="archived",m=a.gdC(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.p)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga0(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.E(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
CG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gdC(),i=A.l([],t.iE)
i.push(new A.a_("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a_(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga0(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.E(0,o))continue
i.push(new A.a_(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dI)
B.b.cI(i,new A.CH())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.p)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a9(r.a,null)
a.a+=k
o=A.F0(k)
a.a+=":"
m=m+o+1+A.cq(a,r.b)}a.a+="}"
return m+1},
df:function df(a,b){this.a=a
this.b=b},
CH:function CH(){},
Km(a){var s=A.dr(null,null,t.fq),r=t.N
s=new A.uk(a,s,A.t(r,t.g8),A.t(r,t.dz),new A.ts(A.ON(),A.t(r,t.f6)),A.t(r,t.oX))
s.pt(a,B.cj)
return s},
Dc(a){var s,r,q,p
A:{if(a instanceof A.j9){s=A.Ns(a.a)
break A}if(a instanceof A.jx){s=new A.cg(A.Dc(a.a))
break A}if(a instanceof A.it){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.Dc(r[p]))
s=new A.dG(s)
break A}if(a instanceof A.iu){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.Dc(r[p]))
s=new A.da(s)
break A}throw A.b(A.e3(u.P))}return s},
Ns(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.am(m,n,B.k)
return new A.am(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.U("neq(null) matches no rows; use isNotNull.",o))
return new A.cg(new A.am(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.G('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.am(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.k
if(B.b.E(q,o))throw A.b(A.G("inValues does not accept null \u2014 use isNull().",o))
return new A.am(m,"inValues",q)
case 7:p=a.d
if(p==null)p=B.k
if(p.length!==2)throw A.b(A.U("between requires exactly two values.",o))
return new A.am(m,"between",p)
case 8:return new A.am(m,"startsWith",[a.c])
case 9:return new A.am(m,"endsWith",[a.c])
case 10:return new A.am(m,"contains",[a.c])
case 11:return new A.am(m,n,B.k)
case 12:return new A.cg(new A.am(m,n,B.k))}},
fi:function fi(){},
Ba:function Ba(a){this.a=a},
pC:function pC(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=null
_.w=$
_.x=e},
i0:function i0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
uk:function uk(a,b,c,d,e,f){var _=this
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
uO:function uO(a){this.a=a},
uP:function uP(){},
uQ:function uQ(a,b){this.a=a
this.b=b},
uR:function uR(){},
v1:function v1(a,b){this.a=a
this.b=b},
vc:function vc(){},
vd:function vd(a,b){this.a=a
this.b=b},
ve:function ve(a,b){this.a=a
this.b=b},
vf:function vf(a,b){this.a=a
this.b=b},
vg:function vg(a,b){this.a=a
this.b=b},
vh:function vh(a,b){this.a=a
this.b=b},
vi:function vi(a,b){this.a=a
this.b=b},
uS:function uS(){},
uT:function uT(){},
uU:function uU(){},
uV:function uV(){},
uW:function uW(){},
uX:function uX(){},
uY:function uY(a){this.a=a},
uZ:function uZ(a){this.a=a},
v_:function v_(){},
v0:function v0(){},
v2:function v2(){},
v3:function v3(a){this.a=a},
v4:function v4(){},
v5:function v5(){},
v6:function v6(){},
v7:function v7(){},
v8:function v8(){},
v9:function v9(a){this.a=a},
va:function va(a){this.a=a},
vb:function vb(a,b){this.a=a
this.b=b},
uz:function uz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uA:function uA(){},
uB:function uB(a,b,c){this.a=a
this.b=b
this.c=c},
uC:function uC(){},
uF:function uF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uG:function uG(){},
un:function un(a){this.a=a},
ul:function ul(a,b,c){this.a=a
this.b=b
this.c=c},
um:function um(a){this.a=a},
uE:function uE(a){this.a=a},
uD:function uD(a){this.a=a},
uK:function uK(a,b){this.a=a
this.b=b},
uL:function uL(a,b,c){this.a=a
this.b=b
this.c=c},
uM:function uM(a,b){this.a=a
this.b=b},
uN:function uN(a,b,c){this.a=a
this.b=b
this.c=c},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
uw:function uw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uy:function uy(a,b){this.a=a
this.b=b},
ux:function ux(a,b){this.a=a
this.b=b},
uq:function uq(a){this.a=a},
uo:function uo(){},
up:function up(){},
uH:function uH(a){this.a=a},
uI:function uI(a){this.a=a},
uJ:function uJ(a,b){this.a=a
this.b=b},
ut:function ut(a,b){this.a=a
this.b=b},
ur:function ur(){},
us:function us(){},
Fx(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
lM:function lM(a,b){this.a=a
this.b=b},
iL:function iL(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.d=!1
_.f=_.e=null},
t9:function t9(){},
t8:function t8(){},
ta:function ta(){},
t7:function t7(a){this.a=a},
JU(a){return'"'+A.D(a,'"','""')+'"'},
JT(a,b){var s,r,q,p=a.a,o=J.J(p),n=b.a,m=J.J(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qZ:function qZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iK:function iK(a){this.a=a},
t6:function t6(a){this.a=a},
t5:function t5(){},
t4:function t4(a){this.a=a},
t3:function t3(a,b){this.a=a
this.b=b},
t0:function t0(a){this.a=a},
t1:function t1(a){this.a=a},
t2:function t2(){},
G(a,b){return new A.eb(b,a)},
dq(a){return new A.dp(a)},
jM(a){return new A.jL(a)},
Ga(a){return new A.jQ(a)},
aB(a){return new A.hm(a)},
tA(a){return new A.iW(a)},
E8(a){return new A.jX(a)},
FV(a){return new A.jh(a)},
Fu(a){return new A.iG(a)},
DD(a){return new A.fL(a)},
Ix(a,b){var s,r="UNIQUE constraint failed",q=J.X(a),p=a instanceof A.cj,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.E(q,"PRIMARY KEY")&&!B.a.E(q,r)
else p=!0
if(p)return new A.jF("PRIMARY KEY constraint violated.")
if(o===2067||B.a.E(q,r)){s=A.Hj(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.hD(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.E(q,"NOT NULL constraint failed")){p=A.Hj(q,"NOT NULL constraint failed:")
return new A.h7(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.E(q,"CHECK constraint failed")||o===275||n===275)return new A.iE("CHECK constraint violated.")
if(B.a.E(q,"FOREIGN KEY")||o===787||n===787)return new A.iV("FOREIGN KEY constraint violated.")
if(B.a.E(q,"database or disk is full"))return new A.dp("Database full: "+A.r(a))
return new A.dp("SQLite error: "+A.r(a))},
Hj(a,b){var s,r,q,p,o,n,m=B.a.ca(a,b)
if(m<0)return"?"
s=B.a.ab(a,m+b.length)
r=s.length
q=B.a.ca(s,",")
if(q>=0)r=q
p=B.a.ca(s,"(")
s=B.a.cf(B.a.B(s,0,p>=0&&p<r?p:r))
o=B.a.d6(s,".")
s=B.a.cf(o>=0?B.a.ab(s,o+1):s)
if(B.a.T(s,'"')&&B.a.c9(s,'"')){n=B.a.B(s,1,s.length-1)
s=A.D(n,'""','"')}return s.length===0?"?":s},
dW:function dW(){},
eb:function eb(a,b){this.b=a
this.a=b},
hD:function hD(a,b,c){this.b=a
this.c=b
this.a=c},
h7:function h7(a,b){this.b=a
this.a=b},
iE:function iE(a){this.a=a},
jF:function jF(a){this.a=a},
iV:function iV(a){this.a=a},
dp:function dp(a){this.a=a},
jN:function jN(a){this.a=a},
jL:function jL(a){this.a=a},
jQ:function jQ(a){this.a=a},
hm:function hm(a){this.a=a},
k2:function k2(a){this.a=a},
iW:function iW(a){this.a=a},
jX:function jX(a){this.a=a},
jh:function jh(a){this.a=a},
iG:function iG(a){this.a=a},
fL:function fL(a){this.a=a},
jK:function jK(a){this.a=a},
iP:function iP(a){this.b=a},
FB(a){return A.q_("lp_file_refs",new A.te(a))},
bs:function bs(a,b,c,d,e,f,g,h,i,j){var _=this
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
te:function te(a){this.a=a},
vs:function vs(a,b){this.a=a
this.b=b},
vt:function vt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vv:function vv(a){this.a=a},
vw:function vw(a){this.a=a},
vx:function vx(a){this.a=a},
vy:function vy(a){this.a=a},
vz:function vz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vu:function vu(a,b){this.a=a
this.b=b},
NP(){return new A.aI(Date.now(),0,!1)},
cP:function cP(a,b,c,d,e,f,g,h,i,j){var _=this
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
ts:function ts(a,b){this.f=a
this.r=b},
tv:function tv(){},
tt:function tt(a){this.a=a},
tu:function tu(){},
mm:function mm(a){this.b=0
this.c=a
this.d=$},
Hx(a,b){if(t.f.b(a))return a.aR(0,new A.Cs(),t.N,t.X)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
xa:function xa(a){this.a=a
this.b=0},
Cs:function Cs(){},
lC(a){var s=$.F2()
if(!s.b.test(a))throw A.b(A.U('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
Fm(a){return new A.ex(a)},
iy(a,b){return new A.fC(a,b)},
l6(a,b,c,d,e,f){return A.Pe(a,b,c,d,e,f)},
Pe(a,b,c,a0,a1,a2){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d
var $async$l6=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=t.i5
f=A.l([],g)
e=new A.hM(A.d4(new A.pv(new A.Dd(f),A.l([],g),t.mI)))
d=0
g=new A.c5(A.cp(a,"stream",t.K),t.lj)
p=3
k=t.D
case 6:s=8
return A.a(g.k(),$async$l6)
case 8:if(!a4){s=7
break}m=g.gn()
j=a2.$1(m)
if(!(j instanceof A.w)){i=new A.w($.C,k)
i.a=8
i.c=j
j=i}s=9
return A.a(j,$async$l6)
case 9:e.a.u(0,m)
d+=J.ag(m)
l=a1
if(l!=null&&d>l){k=A.A("Blob exceeds the "+A.r(l)+" byte ceiling (streamed "+A.r(d)+" bytes).")
throw A.b(k)}s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(g.A(),$async$l6)
case 10:s=n.pop()
break
case 5:e.a.q()
if(c!=null&&!J.x(d,c))throw A.b(A.A("Size mismatch: expected "+A.r(c)+" but got "+A.r(d)))
h=A.au(B.b.gao(f).a)
A.lC(h)
if(b!=null&&h!==b)throw A.b(A.A("SHA-256 mismatch: expected "+b+" but got "+h))
q=new A.nT(h)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$l6,r)},
qq:function qq(){},
ex:function ex(a){this.a=a},
fC:function fC(a,b){this.a=a
this.b=b},
nT:function nT(a){this.a=a},
Dd:function Dd(a){this.a=a},
iS:function iS(a){this.d=a},
tf:function tf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
th:function th(a,b){this.a=a
this.b=b},
ti:function ti(a,b,c){this.a=a
this.b=b
this.c=c},
tg:function tg(a,b,c){this.a=a
this.b=b
this.c=c},
tj:function tj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tk:function tk(a){this.a=a},
tl:function tl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tm:function tm(){},
tn:function tn(a){this.a=a},
to:function to(a){this.a=a},
tp:function tp(a){this.a=a},
tq:function tq(){},
Ph(a,b,c){a.uY(!0,new A.Dj(c),"lp_norm_"+b)},
EU(a,b,c,d){var s,r='"'+A.D(d,'"','""')+'"',q=b.a
if(q.gF(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.D(c,'"','""')+'".'+r
return'"'+A.D("lp_norm_"+a,'"','""')+'"('+s+")"},
Dj:function Dj(a){this.a=a},
vj:function vj(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
MS(){return Date.now()},
pQ(a){var s,r,q
if(t.G.b(a)){s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pQ(q.b))}return s}if(t.f.b(a)){s=A.t(t.z,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pQ(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.pQ(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.bc(a))
return a},
de(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=null,r=null
return A.Ko(a,b,c,d,e,f,g,h,i,j,k,l,m)},
Ko(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$de=A.c(function(c0,c1){if(c0===1){o.push(c1)
s=p}for(;;)switch(s){case 0:a2=null
a3=null
a4=null
a4=a9
p=4
s=7
return A.a(A.cR(a4,b6),$async$de)
case 7:s=8
return A.a(A.f1(a4,b6),$async$de)
case 8:n=c1
i=0
case 9:if(!(i<3)){s=11
break}m=B.cR[i]
s=12
return A.a(a4.O(m),$async$de)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.d7[i]
s=16
return A.a(a4.O(l),$async$de)
case 16:case 14:++i
s=13
break
case 15:h=a4
g=n
f=b4==null?A.P4():b4
e=a3
d=a2
c=new A.ng()
b=new A.mQ(b5,h,g,c,b3,b0,b8,a8,e,a7,b1,d,f,A.t(t.N,t.nv),b2,b9,new A.qC(A.dr(null,null,t.iv),A.dr(null,null,t.oZ)))
a=new A.zw(A.be(null,t.H),c.gxG())
b.z=a
d=b.a=new A.vj(b,h,g,a,c,f,e,b1,d,a8,b2,b9)
b.b=new A.yB(d)
b.c=new A.w4()
b.d=new A.xL()
e=$.Dt()
b.dx=new A.wg(b,e)
b.dy=new A.wb(b,e)
b.fr=new A.ra(b)
b.fx=new A.vs(b,a7)
b.e=new A.vC(d)
b.f=new A.xS(d)
d=A.Km(d)
b.r!==$&&A.dE()
b.r=d
k=b
s=17
return A.a(A.mR(a4,k.db),$async$de)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
g=k.f
g===$&&A.v()
s=21
return A.a(g.b_(j),$async$de)
case 21:case 19:b7.length===h||(0,A.p)(b7),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
p=23
s=26
return A.a(a4.q(),$async$de)
case 26:p=3
s=25
break
case 23:p=22
a6=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a5
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$de,r)},
cR(a,b){return A.Kn(a,b)},
Kn(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cR=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.bi?2:3
break
case 2:q=5
s=8
return A.a(a.O("PRAGMA journal_mode=WAL"),$async$cR)
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
return A.a(a.O("PRAGMA wal_autocheckpoint=0"),$async$cR)
case 9:s=10
return A.a(a.O("PRAGMA mmap_size=67108864"),$async$cR)
case 10:case 3:s=11
return A.a(a.O("PRAGMA synchronous=NORMAL"),$async$cR)
case 11:s=12
return A.a(a.O("PRAGMA foreign_keys=ON"),$async$cR)
case 12:s=13
return A.a(a.O("PRAGMA busy_timeout=5000"),$async$cR)
case 13:s=14
return A.a(a.O("PRAGMA cache_size=-8000"),$async$cR)
case 14:s=15
return A.a(a.O("PRAGMA temp_store=MEMORY"),$async$cR)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cR,r)},
mR(a,b){var s=0,r=A.h(t.H),q,p
var $async$mR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.bQ("lp_migrations","version = ?",[1]),$async$mR)
case 3:if(p.d9(d)){s=1
break}s=4
return A.a(a.aF(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$mR)
case 4:case 1:return A.e(q,r)}})
return A.f($async$mR,r)},
nR:function nR(a,b,c){this.a=a
this.c=b
this.e=c},
wV:function wV(a){this.a=a},
mQ:function mQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
pc:function pc(){},
vC:function vC(a){this.a=a},
vF:function vF(a){this.a=a},
vE:function vE(a,b){this.a=a
this.b=b},
vD:function vD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h1(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$h1=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.x
h=b.x
g=A.a1(h).i("aq<1>")
f=A.O(new A.aq(h,new A.w_(c,b),g),g.i("o.E"))
B.b.cI(f,new A.w0())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.db,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aB('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jY()
$.la()
j.aC()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aW(a,b,m),$async$h1)
case 8:s=6
break
case 7:s=9
return A.a(A.jg(a,b,m),$async$h1)
case 9:case 6:if(j.b==null)j.b=$.nk.$0()
s=10
return A.a(A.h2(i,j.gnd(),o,q+l,p,l),$async$h1)
case 10:case 3:f.length===h||(0,A.p)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aB('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.M("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$h1)
case 11:return A.e(null,r)}})
return A.f($async$h1,r)},
h2(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$h2=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.bc("SELECT MAX(version) AS m FROM lp_migrations"),$async$h2)
case 2:q=p.fq(h)
if(q==null)q=0
s=3
return A.a(a.aF(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$h2)
case 3:return A.e(null,r)}})
return A.f($async$h2,r)},
jg(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$jg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.x
k=b.a
j=t.U
h=A
g=A
f=J
s=2
return A.a(l.bc("PRAGMA table_info("+('"'+A.D(k,'"','""')+'"')+")"),$async$jg)
case 2:i=h.c0(new g.ed(f.bI(e,new A.vW(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.F3()
if(!m.b.test(n))A.u(A.aB('Field "'+n+u.Z))
if(o.c)throw A.b(A.aB('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.E(0,n)){s=4
break}m=A.D(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.D(n,'"','""')+'"')+" "+o.glh()),$async$jg)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.p)(j),++p
s=3
break
case 5:s=c.d!=null?7:8
break
case 7:s=9
return A.a(A.eT(a,b,c),$async$jg)
case 9:case 8:return A.e(null,r)}})
return A.f($async$jg,r)},
eT(a4,a5,a6){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eT=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a=a4.x
a0=a5.a
a1="migration:"+a0+":"+a6.a+":cursor"
s=2
return A.a(A.n_(a,a1),$async$eT)
case 2:a2=a8
a3=A.hb(a2==null?"":a2,null)
if(a3==null)a3=0
q=t.af,p=t.b3,o=a4.cx,n=a4.cy,m=a6.d,l=t.kW,k=t.P
case 3:j={}
s=5
return A.a(a.ae("SELECT rowid, * FROM "+('"'+A.D(a0,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[a3,1e4]),$async$eT)
case 5:i=a8
h=J.J(i)
if(h.gF(i)){s=4
break}g=A.l([],l)
j.a=a3
f=h.gt(i)
case 6:if(!f.k()){s=7
break}e=f.gn()
d=e.h(0,"rowid")
d.toString
j.a=A.ak(d)
c=A.bU(a5,e,o,n)
e=m.$1(c)
if(!p.b(e)){d=new A.w($.C,q)
d.a=8
d.c=e
e=d}s=8
return A.a(e,$async$eT)
case 8:b=a8
if(b.gS(b)){e=j.a
d=A.a3(c.h(0,"id"))
g.push(new A.ek(e,d==null?"":d,b))}s=6
break
case 7:s=g.length!==0?9:11
break
case 9:s=12
return A.a(a.a1(new A.vX(j,g,a5,a4,a1),k),$async$eT)
case 12:s=10
break
case 11:s=13
return A.a(A.h0(a,a1,B.c.l(j.a)),$async$eT)
case 13:case 10:if(h.gm(i)<1e4){s=4
break}a3=j.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$eT,r)},
aW(a,b,c){return A.Kz(a,b,c)},
Kz(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aW=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.x
if(!b0.at)throw A.b(A.DD('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.iK(b0.y).kn(b1)
j=A.KB(b0.w,a2,a3)
p=4
s=7
return A.a(A.n_(a7,l),$async$aW)
case 7:i=b4
a3=b0.f
a3===$&&A.v()
s=8
return A.a(a3.i3(j),$async$aW)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.DD('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.n0(a7,m),$async$aW)
case 9:g=b4
s=10
return A.a(A.n0(a7,n),$async$aW)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.bc("SELECT COUNT(*) c FROM "+('"'+A.D(m,'"','""')+'"')),$async$aW)
case 13:a0=a9.fq(b4)
e=a0==null?0:a0
a3=A.D(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.D(n,'"','""')+'"')),$async$aW)
case 14:s=15
return A.a(A.cS(b0,a7,b1,k,l,e),$async$aW)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.D(m,'"','""')+'"')),$async$aW)
case 16:s=h?17:18
break
case 17:s=19
return A.a(a3.ia(j),$async$aW)
case 19:case 18:s=20
return A.a(A.h0(a7,l,"rebuilding"),$async$aW)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.D(j,"'","''")+"'"),$async$aW)
case 21:a3=k.b
a4=A.D(n,'"','""')
d=B.a.kY(a3,'"'+a4+'"','"'+A.D(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aW)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ae("SELECT rowid, * FROM "+('"'+A.D(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aW)
case 25:b=b4
if(J.bq(b)){s=24
break}s=26
return A.a(a7.a1(new A.vZ(b,b1,b0,b2,m),a3),$async$aW)
case 26:a4=J.Q(J.q7(b),"rowid")
a4.toString
c=A.ak(a4)
if(J.ag(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.bc("SELECT COUNT(*) c FROM "+('"'+A.D(n,'"','""')+'"')),$async$aW)
case 27:a5=a9.fq(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.bc("SELECT COUNT(*) c FROM "+('"'+A.D(m,'"','""')+'"')),$async$aW)
case 28:e=a9.fq(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.A('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.D(n,'"','""')+'"')),$async$aW)
case 29:a3=A.D(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.D(n,'"','""')+'"')),$async$aW)
case 30:s=31
return A.a(A.cS(b0,a7,b1,k,l,a),$async$aW)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.B(a8)
if(a3 instanceof A.fL)throw a8
else if(a3 instanceof A.cj){a1=a3
throw A.b(A.DD('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aW,r)},
cS(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h
var $async$cS=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.O(q[o]),$async$cS)
case 5:case 3:q.length===p||(0,A.p)(q),++o
s=2
break
case 4:q=c.w
p=q!=null
s=p?6:7
break
case 6:s=8
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.D(c.a+"_fts",'"','""')+'"')),$async$cS)
case 8:case 7:n=d.d,m=n.length,o=0
case 9:if(!(o<n.length)){s=11
break}s=12
return A.a(b.O(n[o]),$async$cS)
case 12:case 10:n.length===m||(0,A.p)(n),++o
s=9
break
case 11:s=p?13:14
break
case 13:p=c.a
n=p+"_fts"
m=A.D(n,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+m+'"')+"("+('"'+A.D(n,'"','""')+'"')+") VALUES('delete-all')"),$async$cS)
case 15:m=q.a
l=m.$ti.i("Z<M.E,j>")
k=new A.Z(m,A.pZ(),l).C(0,", ")
j=new A.Z(m,new A.vY(c,q),l).C(0,", ")
q=A.D(n,'"','""')
s=16
return A.a(b.O("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.D(p,'"','""')+'"')),$async$cS)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.bc("SELECT COUNT(*) c FROM "+('"'+A.D(q,'"','""')+'"')),$async$cS)
case 17:i=h.fq(a0)
if((i==null?0:i)!==f)throw A.b(A.A('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.h0(b,e,"done"),$async$cS)
case 18:return A.e(null,r)}})
return A.f($async$cS,r)},
n0(a,b){var s=0,r=A.h(t.y),q,p
var $async$n0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ae("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$n0)
case 3:q=p.d9(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n0,r)},
KB(a,b,c){var s=null,r=$.is(),q=r.vf(a),p=A.e1(a,r.a).gkj()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.nt(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
Kx(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===b)return p}return null},
FU(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.G('Field "'+s+'" is required.',s))}if(b==null)return
r=A.ET(a,b)
if(r!=null)throw A.b(A.G(A.Ky(a,b,r),a.a))},
KA(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
A.FU(p,b.h(0,p.a))}},
Ky(a,b,c){var s,r=a.a,q=J.c9(b)
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
n_(a,b){var s=0,r=A.h(t.jv),q,p,o
var $async$n_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.nI("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$n_)
case 3:p=d
o=J.J(p)
q=o.gF(p)?null:A.a3(J.Q(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n_,r)},
h0(a,b,c){var s=0,r=A.h(t.H)
var $async$h0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cw(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.U),$async$h0)
case 2:return A.e(null,r)}})
return A.f($async$h0,r)},
MT(){return Date.now()},
w_:function w_(a,b){this.a=a
this.b=b},
w0:function w0(){},
vW:function vW(){},
vX:function vX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vZ:function vZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vY:function vY(a,b){this.a=a
this.b=b},
w4:function w4(){},
bp(a){var s=A.t(t.N,t.X)
a.a5(0,new A.Do(s))
return s},
KU(a,b,c,d){return new A.jH(new A.x8(c,b,d,a))},
OK(a,b){var s=a.e,r=s.a
if(!(r!=null&&A.HL(r)==null))if(!s.b.gb0().bp(0,A.Pa()))if(a.z==null){r=a.y
if(!r.gS(r))B.b.bp(a.x,new A.CU())}return!0},
NC(a){return a!=null&&A.HL(a)==null},
HL(a){var s,r,q=A.d8(a)
if(q===B.ed)return B.de
if(q===B.eb)return B.dg
if(q===B.ej)return B.dc
if(q===B.e0)return B.df
if(q===B.e1){t.ko.a(a)
return B.dd}if(q===B.e4){t.d_.a(a)
s=A.t(t.N,t.X)
s.j(0,"kind","counter")
r=a.a
if(r!=null)s.j(0,"min",r)
r=a.b
if(r!=null)s.j(0,"max",r)
return s}return null},
HW(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(b==null)return a
if(!t.f.b(b))throw A.b(A.G('Store policy for "'+a.a+'" must be a map.',null))
s=A.bp(b)
r=s.h(0,"conflictPolicy")
q=r==null?a.e:A.MO(r,a.a,c)
p=a.a
o=A.MP(s.h(0,"validator"),p,c)
n=A.ML(s.h(0,"documentMigrations"),a,c)
m=A.MM(s.h(0,"migrationTransforms"),a,c)
if(q===a.e&&o==null&&n.gF(n)&&m==null)return a
l=m==null?a.x:m
k=n.gF(n)?a.y:n
j=o==null?a.z:o
return new A.ca(p,a.b,a.c,a.d,q,a.f,a.r,a.w,l,k,j,a.Q,t.bU)},
MO(a,b,c){var s,r,q=A.Cr(a,'conflictPolicy of "'+b+'"'),p=q.h(0,"collectionResolver"),o=q.h(0,"fieldOverrides"),n=A.t(t.N,t.pb)
if(o!=null)A.Cr(o,'fieldOverrides of "'+b+'"').a5(0,new A.Ci(n,b,c))
s=p==null?null:A.Hf(p,null,c,"record",'collectionResolver of "'+b+'"')
r=J.x(q.h(0,"editsUnarchive"),!0)
return new A.lP(s,n,r,typeof q.h(0,"missingRemote")=="string"?B.b.cu(B.cL,new A.Cj(q),new A.Ck(b,q)):B.aD)},
Hf(a,b,c,d,e){var s,r,q,p=" must be a number.",o=A.Cr(a,e),n=A.Hy(o.h(0,"kind"),e,"kind")
switch(n){case"remoteWins":return B.S
case"localWins":return B.bZ
case"setUnionDeletionWins":return B.c2
case"appendOnlyLines":return B.bK
case"appendOnlyList":return B.bL
case"counter":s=o.h(0,"min")
r=o.h(0,"max")
if(s!=null&&typeof s!="number")throw A.b(A.G('"min" at '+e+p,null))
if(r!=null&&typeof r!="number")throw A.b(A.G('"max" at '+e+p,null))
return new A.eF(A.C4(s),A.C4(r))
case"custom":q=A.Hy(o.h(0,"id"),e,"id")
return A.KU(b,q,c,d)
default:throw A.b(A.G('Unknown resolver kind "'+n+'" at '+e+".",null))}},
MP(a,b,c){if(a==null)return null
if(!A.aT(a)||!a)throw A.b(A.G('"validator" of "'+b+'" must be true when present.',null))
return new A.Cl(c,b)},
ML(a,b,c){var s,r,q,p,o
if(a==null)return B.bd
s=A.Hw(a,'documentMigrations of "'+b.a+'"')
r=A.t(t.S,t.mi)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p){o=s[p]
r.j(0,o,new A.Cf(c,b,o))}return r},
MM(a,b,c){var s,r,q,p,o,n,m,l
if(a==null)return null
s=A.Hw(a,'migrationTransforms of "'+b.a+'"')
r=A.t(t.S,t.y)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.j(0,s[p],!0)
q=A.l([],t.c0)
for(o=b.x,n=o.length,p=0;p<o.length;o.length===n||(0,A.p)(o),++p){m=o[p]
l=m.a
q.push(r.I(l)?new A.c3(l,m.b,m.c,new A.Cg(c,b,m)):m)}return q},
Cr(a,b){if(t.f.b(a))return A.bp(a)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
EE(a,b,c){if(t.f.b(a))return A.bp(a)
throw A.b(A.G('"'+c+'" at '+b+" must be a map.",null))},
Hy(a,b,c){if(typeof a=="string")return a
throw A.b(A.G('"'+c+'" at '+b+" must be a string.",null))},
NB(a,b,c){var s,r,q,p
if(!t.j.b(a))throw A.b(A.G('"'+c+'" at '+b+" must be a list.",null))
s=A.l([],t.s)
for(r=J.E(a),q='"'+c+'" at '+b+" must contain only strings.";r.k();){p=r.gn()
if(typeof p=="string")s.push(p)
else s.push(A.u(A.G(q,null)))}return s},
Hw(a,b){var s,r,q,p
if(!t.j.b(a))throw A.b(A.G("The value at "+b+" must be a list.",null))
s=A.l([],t.t)
for(r=J.E(a),q="The value at "+b+" must contain only ints.";r.k();){p=r.gn()
if(A.a5(p))s.push(p)
else s.push(A.u(A.G(q,null)))}return s},
Do:function Do(a){this.a=a},
Dn:function Dn(){},
jH:function jH(a){this.a=a},
x8:function x8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
CU:function CU(){},
Ci:function Ci(a,b,c){this.a=a
this.b=b
this.c=c},
Cj:function Cj(a){this.a=a},
Ck:function Ck(a,b){this.a=a
this.b=b},
Cl:function Cl(a,b){this.a=a
this.b=b},
Cf:function Cf(a,b,c){this.a=a
this.b=b
this.c=c},
Cg:function Cg(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function ng(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
vk:function vk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
BE:function BE(){},
xB:function xB(a,b){this.a=a
this.b=b},
l2(a){var s=A.D(a,"\\","\\\\")
s=A.D(s,"%","\\%")
return A.D(s,"_","\\_")},
Ex(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.am){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.u(A.aD(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aD(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aD(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gao(a.c)==null)throw A.b(A.aD(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.cg){A.Ex(a.a)
break A}p=a instanceof A.dG
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.da
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aD(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.p)(n),++m)A.Ex(n[m])}break A}},
Cc(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.am)return A.Hd(a,!1,b)
if(a instanceof A.cg){s=a.a
r=A.Cc(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.da||s instanceof A.cg){s=new A.a_("NOT "+q,p)
break A}s=new A.a_("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dG){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){l=A.Cc(s[m],!1)
o.push(l.a)
B.b.D(p,l.b)}k=B.b.C(o," AND ")
return new A.a_(b?k:"("+k+")",p)}if(a instanceof A.da){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){j=A.MI(s[m])
o.push(j.a)
B.b.D(p,j.b)}return new A.a_("("+B.b.C(o," OR ")+")",p)}throw A.b(A.e3(u.M))},
MI(a){var s
A:{if(a instanceof A.am){s=A.Hd(a,!0,!1)
break A}s=A.Cc(a,!1)
break A}return s},
Hd(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.D(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
case"inValues":s=o+" IN ("+B.b.C(A.a9(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.l2(A.H(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.l2(A.H(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.l2(A.H(r))+"%"
break
default:throw A.b(A.aD(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a_(q?"("+s+")":s,n)},
dj:function dj(){},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a){this.a=a},
dG:function dG(a){this.a=a},
da:function da(a){this.a=a},
KV(a,b){var s,r=$.hg.G(0,a)
if(r!=null){$.hg.j(0,a,r)
return r}s=b.$0()
if($.hg.a>=512)$.hg.G(0,new A.T($.hg,A.n($.hg).i("T<1>")).gH(0))
$.hg.j(0,a,s)
return s},
ba:function ba(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
no:function no(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
xy:function xy(a,b,c){this.a=a
this.b=b
this.c=c},
xt:function xt(){},
xu:function xu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xv:function xv(a){this.a=a},
xw:function xw(){},
xx:function xx(){},
L5(a){var s,r,q=B.a.cf(a)
if(q.length===0)return
s=!0
if(!B.a.E(q,'"')){r=A.ai("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.T(q,"-")){s=A.ai("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.G("Invalid search term: "+a,null))},
L4(a){var s,r,q,p
for(s=B.a.di(a,A.ai("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
if(p.length!==0&&new A.jO(p).gm(0)<3)throw A.b(A.G('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cV:function cV(a,b){this.a=a
this.b=b},
xU:function xU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
cz:function cz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xL:function xL(){},
kX(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.B(q)
if(r instanceof A.dW)throw q
else{s=r
r=A.dq("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
FA(a){return A.kX(new A.td(a))},
Kf(a){return A.kX(new A.u6(a))},
K6(a){return A.kX(new A.tz(a))},
FF(a,b){var s
if(new A.jO(a).gm(0)!==1)throw A.b(A.aB('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aB('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
K5(a){return A.kX(new A.ty(a))},
K4(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga0(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Le(a){return A.kX(new A.y9(a))},
qI(a,b){return A.kX(new A.qJ(a,b))},
CC(a,b,c,d){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i
var $async$CC=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=c+1,o=a.y,n=t.af,m=t.b3,l=b
case 3:if(!(p<=d)){s=5
break}k=o.h(0,p)
s=k!=null?6:7
break
case 6:j=k.$1(l)
if(!m.b(j)){i=new A.w($.C,n)
i.a=8
i.c=j
j=i}s=8
return A.a(j,$async$CC)
case 8:l=f
case 7:case 4:++p
s=3
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$CC,r)},
cd:function cd(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
td:function td(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
u6:function u6(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
tz:function tz(a){this.a=a},
eL:function eL(a){this.a=a},
ty:function ty(a){this.a=a},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y9:function y9(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
lP:function lP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
qJ:function qJ(a,b){this.a=a
this.b=b},
E5(a){var s,r=A.MJ(a),q=A.l([],t.s),p=a.e
if(p.a!=null)q.push("conflictResolver")
s=p.b
if(s.gS(s))q.push("fieldResolvers")
if(B.b.bp(a.x,new A.xO()))q.push("migrationTransform")
s=a.y
if(s.gS(s))q.push("documentMigrations")
if(a.z!=null)q.push("validatorCallback")
return new A.nC(r,A.fY(q,t.N),1,a.a,a.b,2)},
L3(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aB("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aR(0,new A.xP(),s,r)
p=q.h(0,"formatVersion")
if(!A.a5(p))throw A.b(A.aB("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.Ga("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.a5(n)||!j.b(m)||!t.j.b(l)||!A.a5(k))throw A.b(A.aB('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.nC(m.aR(0,new A.xQ(),s,t.X),A.fY(J.bI(l,new A.xR(),r),s),p,o,n,k)},
MJ(a){var s,r,q,p,o,n,m=a.e,l=t.N,k=t.X,j=A.bO(a.p(),l,k),i=m.b.gJ()
i=A.O(i,A.n(i).i("o.E"))
B.b.aj(i)
j.j(0,"conflictPolicy",A.m(["editsUnarchive",m.c,"missingRemote",m.d.b,"hasCollectionResolver",m.a!=null,"fieldOverrideNames",i],l,t.K))
i=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.p()
n=A.dV(null,null,l,k)
n.D(0,o)
n.j(0,"hasTransform",p.d!=null)
i.push(n)}j.j(0,"migrations",i)
l=a.y.gJ()
l=A.O(l,A.n(l).i("o.E"))
B.b.aj(l)
j.j(0,"documentMigrationVersions",l)
j.j(0,"hasValidatorCallback",a.z!=null)
return j},
nC:function nC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xO:function xO(){},
xP:function xP(){},
xQ:function xQ(){},
xR:function xR(){},
xS:function xS(a){this.a=a},
xT:function xT(a,b){this.a=a
this.b=b},
JH(a,b){var s,r=a.a
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
e_:function e_(a,b){this.a=a
this.b=b},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qV:function qV(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
this.b=b},
qU:function qU(a,b){this.a=a
this.b=b},
qX:function qX(a,b){this.a=a
this.b=b},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(a,b){this.a=a
this.b=b},
qN:function qN(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
qS:function qS(a,b){this.a=a
this.b=b},
qP:function qP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qO:function qO(){},
qT:function qT(){},
qM:function qM(){},
qK:function qK(){},
qL:function qL(){},
hL:function hL(){},
oT:function oT(){},
qc:function qc(a){this.a=a},
qd:function qd(a,b){this.a=a
this.b=b},
qe:function qe(a){this.a=a},
qf:function qf(){},
DA(a){return A.q_("lp_conflicts",new A.r9(a))},
br:function br(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
rf:function rf(a,b,c){this.a=a
this.b=b
this.c=c},
re:function re(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rc:function rc(a,b){this.a=a
this.b=b},
rd:function rd(a,b){this.a=a
this.b=b},
rb:function rb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nY:function nY(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
yw:function yw(a){this.a=a},
ym:function ym(a){this.a=a},
yu:function yu(a,b){this.a=a
this.b=b},
yt:function yt(a){this.a=a},
ys:function ys(a,b){this.a=a
this.b=b},
yv:function yv(a){this.a=a},
yp:function yp(a,b){this.a=a
this.b=b},
yq:function yq(){},
yr:function yr(){},
yn:function yn(){},
yo:function yo(a){this.a=a},
eR(a){return new A.dg(a)},
F_(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fs(a,b)
r=A.bn(a,s)
q=A.al(r)
p=A.au(B.m.v(B.e.v(q)).a)
return new A.eV(b,s,q,p,k)}catch(m){l=A.B(m)
if(l instanceof A.dg){o=l
return new A.eV(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.eV(b,k,k,k,l)}}},
P9(a,b){var s,r=A.l([],t.i7)
for(s=J.E(b);s.k();)r.push(A.F_(a,s.gn()))
return r},
EZ(a,b){var s=0,r=A.h(t.eT),q
var $async$EZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.P9(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$EZ,r)},
fs(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bu(b.d,j,i),g=a.gdC(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.eR('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.aT(r))throw A.b(A.eR('Field "archived" must be a boolean, got '+J.c9(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.eR('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.ET(o,n)
if(m!=null)throw A.b(A.eR(A.Nx(o,n,m)))
q.j(0,s,n)}for(j=new A.aK(h,A.n(h).i("aK<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.E(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
Nx(a,b,c){var s,r=a.a,q=J.c9(b)
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
io(a){var s,r,q,p
if(a==null||a.length===0)return B.j
s=null
try{s=B.h.aI(a,null)}catch(q){r=A.B(q)
p=A.eR("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.eR("Corrupt payload JSON: expected an object, got "+J.c9(s).l(0)+"."))
return A.bu(s,t.N,t.X)},
dg:function dg(a){this.a=a},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bS(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aP(i),g=A.c0(a.gJ(),i)
g.D(0,b.gJ())
for(g=A.dz(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.p.V(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.lf(o.gJ(),new A.CK())&&J.lf(n.gJ(),new A.CL())){m=A.bS(A.bu(o,i,q),A.bu(n,i,q))
for(l=A.n(m),k=new A.ei(m,m.r,l.i("ei<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
Ok(a,b,c){var s,r,q,p,o,n=t.N,m=A.c0(a.gJ(),n)
m.D(0,b.gJ())
m.D(0,new A.T(c,A.n(c).i("T<1>")))
s=A.t(n,t.X)
for(n=A.dz(m,m.r,A.n(m).c),m=n.$ti.c;n.k();){r=n.d
if(r==null)r=m.a(r)
q=a.h(0,r)
p=b.h(0,r)
o=c.h(0,r)
if(B.p.V(p,o))s.j(0,r,p)
else if(B.p.V(p,q))s.j(0,r,o)
else if(B.p.V(o,q))s.j(0,r,p)
else s.j(0,r,o)}return s},
FS(a,b,c,d,e,f,g){return new A.jf(g,e,a,d,f,b,c)},
Ip(a,b,c,d,e){var s,r,q,p,o,n
if(e instanceof A.hp)return e.fX(b,c,d)
if(e instanceof A.eF){s=typeof b=="number"?b:0
r=typeof c=="number"?c:0
q=typeof d=="number"?d:0
p=A.a5(s)&&A.a5(r)&&A.a5(q)
o=s+(r-s)+(q-s)
n=e.a
if(n!=null&&o<n)o=n
n=e.b
if(n!=null&&o>n)o=n
return p?B.w.h1(o):o}if(e instanceof A.ev)return e.fX(b,c,d)
if(e instanceof A.fA)return e.fX(b,c,d)
if(e instanceof A.fZ)return c
if(e instanceof A.hj)return d
return d},
Nr(a,b){var s,r,q,p=a.b
if(p.gF(p))return null
for(s=b;;){r=p.h(0,s)
if(r!=null)return r
q=B.a.d6(s,".")
if(q<=0)return null
s=B.a.B(s,0,q)}},
DW(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$DW=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.Kw(B.cb,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$DW,r)},
Kw(a,b,c,d,e,f,g){var s,r,q,p=A.bS(b,c),o=A.bS(b,f),n=A.FS(b,p,o,c,e,f,g),m=p.a!==0&&o.a!==0,l=d.a
if(l!=null&&m){s=new A.vV(b,c,f,p,o)
r=l.al(n)
if(t.op.b(r))return r.W(s,t.r)
return s.$1(r)}l=t.N
s=A.c0(c.gJ(),l)
s.D(0,new A.T(f,A.n(f).i("T<1>")))
s.D(0,b.gJ())
q=A.O(s,A.n(s).c)
return A.vS(a,b,p,o,0,q,c,A.t(l,t.X),d,e,f,new A.Bj(),g)},
vS(a,b,c,d,e,f,g,h,i,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j="archived"
if(e>=f.length){if(i.c)if(!new A.aq(c,new A.vT(),A.n(c).i("aq<1>")).gF(0)&&J.x(h.h(0,j),!0))h.j(0,j,!1)
return new A.aS(h,a2.a,null)}s=f[e]
r=g.h(0,s)
q=a1.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.x(p,!0)
n=J.x(r,!0)
m=J.x(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{l=i.b.h(0,s)
if(l!=null)h.j(0,s,A.Ip(s,p,r,q,l))
else h.j(0,s,m)}return A.vS(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)}k=A.FT(a,p,r,s,i,q,a0,a2,a3)
if(k instanceof A.w)return k.W(new A.vU(h,s,f,e,b,g,a1,i,a3,a0,a,c,d,a2),t.r)
h.j(0,s,k)
return A.vS(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)},
FT(a2,a3,a4,a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(B.p.V(a4,a7))return a4
if(B.p.V(a4,a3))return a7
if(B.p.V(a7,a3))return a4
s=t.f
r=!1
if(s.b(a4))if(s.b(a7))if(J.lf(a4.gJ(),new A.vM()))if(J.lf(a7.gJ(),new A.vN()))if(a3!=null)r=s.b(a3)&&J.lf(a3.gJ(),new A.vO())
else r=!0
if(r){r=t.N
q=t.X
p=A.bu(a4,r,q)
o=A.bu(a7,r,q)
n=a3==null?null:A.bu(s.a(a3),r,q)
s=A.aP(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.D(0,l)
s.D(0,new A.T(p,A.n(p).i("T<1>")))
s.D(0,new A.T(o,A.n(o).i("T<1>")))
k=A.t(r,q)
j=[]
for(r=s.$ti.c,l=A.dz(s,s.r,r),i=a5+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.FT(a2,e,p.h(0,f),i+f,a6,o.h(0,f),a8,a9,b0)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.dz(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.DJ(new A.Z(j,new A.vP(),A.a1(j).i("Z<1,y<k?>>")),q).W(new A.vQ(s,k),q)}a=A.Nr(a6,a5)
if(a!=null){if(a instanceof A.jH){a0=B.a.ab(a5,B.a.d6(a5,".")+1)
s=t.N
r=t.X
q=A.m([a0,a3],s,r)
m=A.m([a0,a4],s,r)
l=A.m([a0,a7],s,r)
a1=a.al(A.FS(q,A.ap([a0],s),A.ap([a0],s),m,a8,l,b0))
if(t.op.b(a1))return a1.W(new A.vR(a9,a7,a0),r)
if(a1==null||a1.b){a9.a=!0
return a7}return a1.a.h(0,a0)}return A.Ip(a5,a3,a4,a7,a)}return a7},
If(a,b,c,d,e,f){return A.DW(a,b,c,d,e,f)},
CK:function CK(){},
CL:function CL(){},
jf:function jf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(){},
hj:function hj(){},
fZ:function fZ(){},
hp:function hp(){},
eF:function eF(a,b){this.a=a
this.b=b},
ev:function ev(){},
qb:function qb(a){this.a=a},
fA:function fA(){},
qa:function qa(a){this.a=a},
lX:function lX(){},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
Bj:function Bj(){this.a=!1},
Bh:function Bh(){},
zB:function zB(){},
vV:function vV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vT:function vT(){},
vU:function vU(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
vM:function vM(){},
vN:function vN(){},
vO:function vO(){},
vP:function vP(){},
vQ:function vQ(a,b){this.a=a
this.b=b},
vR:function vR(a,b,c){this.a=a
this.b=b
this.c=c},
wb:function wb(a,b){this.a=a
this.b=b},
wd:function wd(a){this.a=a},
we:function we(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wg:function wg(a,b){this.a=a
this.b=b},
wm:function wm(a,b){this.a=a
this.b=b},
wk:function wk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wj:function wj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wi:function wi(a,b,c){this.a=a
this.b=b
this.c=c},
wl:function wl(a){this.a=a},
ew:function ew(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.b=a
this.f=b},
xc:function xc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xk:function xk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xj:function xj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xe:function xe(a,b,c){this.a=a
this.b=b
this.c=c},
xd:function xd(a,b,c){this.a=a
this.b=b
this.c=c},
xg:function xg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xf:function xf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xi:function xi(a,b,c){this.a=a
this.b=b
this.c=c},
xh:function xh(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xl:function xl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
xn:function xn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xs:function xs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xq:function xq(a,b,c){this.a=a
this.b=b
this.c=c},
xp:function xp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xo:function xo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xm:function xm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xr:function xr(a,b,c,d,e,f,g,h,i,j){var _=this
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
ck:function ck(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
yj:function yj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yk:function yk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gh(a){return new A.dt(a)},
lr(a){return new A.bK(a)},
K3(a){return new A.ce(a)},
KG(a){return new A.cf(a)},
KI(a){return new A.di(a)},
aX(a){return new A.e2(a)},
JW(a){return new A.dL(a)},
Jw(a){return new A.db(a)},
OP(a){var s=a.y8(),r=new A.CX()
return A.r(r.$2(A.E1(s),4))+"-"+A.r(r.$1(A.E_(s)))+"-"+A.r(r.$1(A.x_(s)))+" "+A.r(r.$1(A.DY(s)))+":"+A.r(r.$1(A.DZ(s)))+":"+A.r(r.$1(A.E0(s)))+"."+A.r(r.$2(A.G2(s),3))+"Z"},
Gg(a){var s=Date.now()
return new A.oc(a,new A.aI(s,0,!1))},
b9:function b9(){},
dt:function dt(a){this.a=a},
cW:function cW(a,b){this.b=a
this.a=b},
f_:function f_(a){this.a=a},
bK:function bK(a){this.a=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
di:function di(a){this.a=a},
e2:function e2(a){this.a=a},
dL:function dL(a){this.a=a},
hy:function hy(a){this.a=a},
db:function db(a){this.a=a},
e5:function e5(a,b){this.b=a
this.a=b},
lt:function lt(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
he:function he(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hf:function hf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ct:function ct(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
CX:function CX(){},
oc:function oc(a,b){this.a=a
this.c=b},
Lh(a){return 0.5+B.au.nA()},
Eb(a){var s,r=a.toLowerCase()
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
Li(a){var s,r,q,p,o,n,m,l,k=null,j=A.ai("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ez(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Eb(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aN(r)
p=s[1]
p.toString
p=A.aN(p)
o=s[4]
o.toString
o=A.aN(o)
n=s[5]
n.toString
n=A.aN(n)
s=s[6]
s.toString
return A.Ec(r,q,p,o,n,A.aN(s))}j=A.ai("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ez(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Eb(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aN(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aN(r)
p=s[4]
p.toString
p=A.aN(p)
o=s[5]
o.toString
o=A.aN(o)
s=s[6]
s.toString
return A.Ec(l,q,r,p,o,A.aN(s))}j=A.ai("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ez(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.Eb(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aN(r)
p=s[2]
p.toString
p=A.aN(p)
o=s[3]
o.toString
o=A.aN(o)
n=s[4]
n.toString
n=A.aN(n)
s=s[5]
s.toString
return A.Ec(r,q,p,o,n,A.aN(s))}return k},
Ec(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.DC(a,b,c,d,e,f,0)
return s}catch(r){return null}},
yl:function yl(a,b){this.at=a
this.ay=b},
EG(a,b){if(t.f.b(a))return a.aR(0,new A.Ct(),t.N,t.X)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
HI(a,b){if(typeof a=="string")return a
throw A.b(A.G("The value at "+b+" must be a string.",null))},
Mx(a,b){if(A.aT(a))return a
throw A.b(A.G("The value at "+b+" must be a bool.",null))},
x9:function x9(a){this.a=a
this.b=0},
hc:function hc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0
_.r=f
_.w=g},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
xb:function xb(a,b){this.a=a
this.b=b},
Ct:function Ct(){},
jI:function jI(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
yy:function yy(a,b){this.a=a
this.b=b},
HX(a,b,c,d,e,f,g,h,i,j){var s,r=A.Ih(a,b,c,null,d,e,f,g,h,i,j),q=A.t(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.a1[s],r[s])
return q},
Ih(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.HT(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
HT(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Od(a,b,c,d,e,f,g){var s,r=null,q=A.Iu(B.a9,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.t(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.a0[s],q[s])
return p},
Iu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.HU(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
HU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
Iq(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
ip(a){return new A.Z(a,new A.Di(),A.a1(a).i("Z<1,j>")).C(0,", ")},
hz(a){return A.q_("lp_sync_row",new A.yx(a))},
jA(a){return A.q_("lp_outbox",new A.wh(a))},
KH(a){return A.q_("lp_op_queue",new A.wc(a))},
l7(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$l7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aP(n)
l=A.O(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.C(A.a9(k,"?",!1,n),", ")
k=a.ae("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$l7)
case 3:j.D(0,i.bI(h.a(d),new A.Dg(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ae("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$l7)
case 4:j.D(0,i.bI(h.a(d),new A.Dh(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$l7,r)},
ir(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$ir=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eK("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$ir)
case 5:s=p.bq(o.a(f))?2:4
break
case 2:q=a.aF(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$ir)
case 6:s=3
break
case 4:q=a.aJ("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$ir)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ir,r)},
CR(a,b){var s=0,r=A.h(t.H),q,p
var $async$CR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aJ(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$CR)
case 3:case 1:return A.e(q,r)}})
return A.f($async$CR,r)},
cL(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cL=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nI("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cL)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.X("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cL)
case 5:o=A.a3(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.CR(a,o),$async$cL)
case 8:case 7:s=3
break
case 4:m=a.X("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cL)
case 9:m=t.N
m=a.M("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cL)
case 10:s=d?11:12
break
case 11:m=a.X("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cL)
case 13:n=a.X("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cL)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cL,r)},
cY:function cY(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
Di:function Di(){},
cX:function cX(a,b,c,d,e,f,g,h,i,j){var _=this
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
yx:function yx(a){this.a=a},
cy:function cy(a,b,c,d,e,f,g,h,i,j){var _=this
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
wh:function wh(a){this.a=a},
eW:function eW(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
wc:function wc(a){this.a=a},
Dg:function Dg(){},
Dh:function Dh(){},
I4(a,b){if(typeof a=="string")return new Uint8Array(A.bc(B.ad.v(a)))
throw A.b(A.G('"'+b+'" must be a base64 string.',null))},
ER(a,b,c){var s,r,q=null,p="pageError",o=A.kY(a,c),n=o.h(0,"ok")
if(!A.aT(n))throw A.b(A.G('"ok" at '+c+" must be a bool.",q))
if(n)return o.h(0,"result")
s=o.I("error")
if(s===o.I(p))throw A.b(A.G("A failed answer at "+c+' must carry exactly one of "error" (typed error) or "pageError".',q))
if(s)throw A.b(b.$2$where(o.h(0,"error"),c))
r=o.h(0,p)
if(typeof r!="string")throw A.b(A.G('"pageError" at '+c+" must be a string.",q))
throw A.b(A.G("The page-side "+c+" failed: "+r,q))},
OI(a){var s,r,q,p
A:{if(a instanceof A.dt){s=A.m(["kind","transientNetwork","message",a.a],t.N,t.X)
break A}if(a instanceof A.f_){s=A.m(["kind","serverError","message",a.a],t.N,t.X)
break A}if(a instanceof A.cW){s=t.N
r=t.X
r=A.bO(A.m(["kind","serverBusy","message",a.a],s,r),s,r)
s=a.b
if(s!=null)r.j(0,"retryAfter",s)
s=r
break A}if(a instanceof A.bK){s=A.m(["kind","auth","message",a.a],t.N,t.X)
break A}if(a instanceof A.ce){s=A.m(["kind","forbidden","message",a.a],t.N,t.X)
break A}if(a instanceof A.cf){s=A.m(["kind","notFound","message",a.a],t.N,t.X)
break A}if(a instanceof A.di){s=A.m(["kind","payload","message",a.a],t.N,t.X)
break A}if(a instanceof A.e2){s=A.m(["kind","protocol","message",a.a],t.N,t.X)
break A}if(a instanceof A.dL){s=A.m(["kind","duplicateId","message",a.a],t.N,t.X)
break A}if(a instanceof A.hy){s=A.m(["kind","syncIdentity","message",a.a],t.N,t.X)
break A}if(a instanceof A.db){s=A.m(["kind","batchFailed","message",a.a],t.N,t.X)
break A}if(a instanceof A.e5){s=t.N
r=t.X
q=A.bO(A.m(["kind","remoteVersionConflict","message",a.a],s,r),s,r)
p=a.b
if(p!=null)q.j(0,"current",A.m(["id",p.a,"store",p.b,"updated",p.c,"data",p.d,"attachments",p.e],s,r))
s=q
break A}throw A.b(A.e3(u.P))}return s},
OD(a,b){var s,r,q=null,p=" must be a string.",o="current",n=A.kY(a,b),m=A.ig(n.h(0,"kind"),b,"kind"),l=n.h(0,"message"),k=l==null
if(!k&&typeof l!="string")throw A.b(A.G('"message" at '+b+p,q))
A.a3(l)
switch(m){case"transientNetwork":return new A.dt(k?"network error":l)
case"serverError":return new A.f_(k?"server error":l)
case"serverBusy":s=n.h(0,"retryAfter")
if(s!=null&&typeof s!="string")throw A.b(A.G('"retryAfter" at '+b+p,q))
A.a3(s)
return new A.cW(s,k?"server busy":l)
case"auth":return new A.bK(k?"auth required":l)
case"forbidden":return new A.ce(k?"forbidden":l)
case"notFound":return new A.cf(k?"not found":l)
case"payload":return new A.di(k?"invalid payload":l)
case"protocol":return new A.e2(k?"protocol error":l)
case"duplicateId":return new A.dL(k?"duplicate id":l)
case"syncIdentity":return new A.hy(k?"missing sync identity":l)
case"batchFailed":return new A.db(k?"batch failed":l)
case"remoteVersionConflict":r=n.I(o)&&n.h(0,o)!=null?A.es(n.h(0,o),b+".current"):q
return new A.e5(r,k?"version conflict":l)
default:throw A.b(A.G('Unknown sync error kind "'+m+'" at '+b+".",q))}},
es(a,b){var s,r,q,p="attachments",o=A.kY(a,b),n=o.h(0,p),m=n==null?null:A.EF(n,b,p),l=A.ig(o.h(0,"id"),b,"id"),k=A.ig(o.h(0,"store"),b,"store"),j=A.ig(o.h(0,"updated"),b,"updated"),i=A.Nz(o.h(0,"data"),b,"data"),h=A.l([],t.s)
if(m!=null)for(s=J.E(m),r='"attachments" at '+b+" must contain only strings.";s.k();){q=s.gn()
if(typeof q=="string")h.push(q)
else h.push(A.u(A.G(r,null)))}return new A.cU(l,k,j,i,h)},
Ov(a,b){var s,r,q,p=A.kY(a,b),o=A.ig(p.h(0,"kind"),b,"kind")
if(!new A.Z(B.bc,new A.CO(),t.lJ).E(0,o))throw A.b(A.G('"kind" at '+b+" is not a known BackendHintKind: "+o,null))
s=p.h(0,"record")
r=A.ig(p.h(0,"store"),b,"store")
q=B.b.kB(B.bc,new A.CP(o))
return new A.cs(r,q,s==null?null:A.es(s,b+".record"))},
OC(a,b){var s,r,q,p,o,n=A.EF(a,b,"records"),m=A.l([],t.g1)
for(s=A.DM(n,0,t.X),r=J.E(s.a),q=s.b,s=new A.dR(r,q,A.n(s).i("dR<1>")),p=b+".rows[";s.k();){o=s.c
o=o>=0?new A.a_(q+o,r.gn()):A.u(A.av())
m.push(A.es(o.b,p+o.a+"]"))}return m},
OB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=" must be a string.",d=A.EF(a,b,"results"),c=A.l([],t.g2)
for(s=A.DM(d,0,t.X),r=J.E(s.a),q=s.b,s=new A.dR(r,q,A.n(s).i("dR<1>")),p=b+".results[",o=t.f;s.k();){n=s.c
n=n>=0?new A.a_(q+n,r.gn()):A.u(A.av())
m=p+n.a+"]"
l=A.kY(n.b,m)
k=l.h(0,"record")
j=l.h(0,"error")
i=l.h(0,"pushedJson")
n=k==null
if(!n&&!o.b(k))A.u(A.G('"record" at '+m+" must be a map.",f))
if(j!=null&&typeof j!="string")A.u(A.G('"error" at '+m+e,f))
if(i!=null&&typeof i!="string")A.u(A.G('"pushedJson" at '+m+e,f))
h=A.ig(l.h(0,"opId"),m,"opId")
g=A.Hu(l.h(0,"ok"),m,"ok")
n=n?f:A.es(k,m+".record")
c.push(new A.hf(h,g,n,A.a3(j),A.a3(i)))}return c},
kY(a,b){if(t.f.b(a))return A.bp(a)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
Nz(a,b,c){if(t.f.b(a))return A.bp(a)
throw A.b(A.G('"'+c+'" at '+b+" must be a map.",null))},
EF(a,b,c){if(t.j.b(a))return a
throw A.b(A.G('"'+c+'" at '+b+" must be a list.",null))},
ig(a,b,c){if(typeof a=="string")return a
throw A.b(A.G('"'+c+'" at '+b+" must be a string.",null))},
Hu(a,b,c){if(A.aT(a))return a
throw A.b(A.G('"'+c+'" at '+b+" must be a bool.",null))},
Hv(a,b,c){if(A.a5(a))return a
throw A.b(A.G('"'+c+'" at '+b+" must be an int.",null))},
CO:function CO(){},
CP:function CP(a){this.a=a},
Ee(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bQ(a,b,c,s,d,new A.Bo())},
oj(a){var s=$.C.h(0,$.lc())
if(s instanceof A.bQ&&s.a===a)return s
return null},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yK:function yK(){},
yJ:function yJ(a,b,c){this.a=a
this.b=b
this.c=c},
Bo:function Bo(){this.a=0
this.b=null},
m7:function m7(a,b){this.a=a
this.b=b},
yB:function yB(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
yI:function yI(a){this.a=a},
yE:function yE(a){this.a=a},
yH:function yH(a,b,c){this.a=a
this.b=b
this.c=c},
yG:function yG(a,b,c){this.a=a
this.b=b
this.c=c},
yF:function yF(a,b,c){this.a=a
this.b=b
this.c=c},
yD:function yD(a){this.a=a},
yC:function yC(){},
oU:function oU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
Ac:function Ac(a,b){this.a=a
this.b=b},
Ab:function Ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
A9:function A9(a,b){this.a=a
this.b=b},
Aa:function Aa(a,b){this.a=a
this.b=b},
A8:function A8(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b},
Oi(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.E(a);s.k();){r=new A.a7("")
A.cq(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aj(o)
p=B.b.C(o,"|")
b.$1(p.length)
return A.au(B.m.v(B.e.v(p)).a)},
nr:function nr(a,b,c){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
xH:function xH(){},
xG:function xG(a){this.a=a},
xI:function xI(a){this.a=a},
nb:function nb(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=null
_.a=c
_.b=d
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
wa:function wa(a){this.a=a},
fE:function fE(){},
zw:function zw(a,b){this.a=a
this.b=0
this.c=b},
zx:function zx(a,b,c){this.a=a
this.b=b
this.c=c},
Lr(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.a5(s))throw A.b(A.aL('Request "v" must be an int.'))
if(!A.a5(r)||r<0)throw A.b(A.aL('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dN.E(0,q))throw A.b(A.aL("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.aL('Request "a" must be a map.'))
return new A.hJ(s,r,q,p.aR(0,new A.za(),t.N,t.X))},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
za:function za(){},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z7:function z7(a,b,c){this.a=a
this.b=b
this.c=c},
Go(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
z5:function z5(a){var _=this
_.d=a
_.e=0
_.r=null
_.w=!1
_.x=null},
z6:function z6(a){this.a=a},
ph:function ph(a){this.a=a},
Kt(a){var s,r,q
try{s=A.l0(a)
if(t.f.b(s)){r=A.bp(s)
return r}}catch(q){}return null},
Ku(a){if(a instanceof A.k7)return A.l4(new A.oz(3,a.a,a.b,null).p())
t.bp.a(a)
return A.DU(a.a,a.b,a.c,a.d)},
DU(a,b,c,d){return A.l4(new A.oz(3,a,null,new A.z7(b,c,d)).p())},
kV(a){return A.Np(a)},
Np(a){var s=0,r=A.h(t.mU),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kV=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.iq()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a4(f.getDirectory(),k),$async$kV)
case 7:n=c
j=$.is()
i=A.O(j.di(0,"drift_db"),t.N)
m=i
J.Fb(m,j.di(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ag(l)===0){s=9
break}s=11
return A.a(A.a4(n.getDirectoryHandle(l,{create:!1}),k),$async$kV)
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
return A.f($async$kV,r)},
pS(a,b){return A.Nq(a,b)},
Nq(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pS=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kV(a),$async$pS)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a4(m.getFileHandle(A.e1(b,$.is().a).gkj(),{create:!1}),t.m),$async$pS)
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
return A.f($async$pS,r)},
pT(a,b){return A.Ny(a,b)},
Ny(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pT=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kV(a),$async$pT)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.mu(m,A.e1(b,$.is().a).gkj()),$async$pT)
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
return A.f($async$pT,r)},
vo:function vo(){},
vp:function vp(a){this.a=a},
vq:function vq(a){this.a=a},
vr:function vr(a){this.a=a},
mW:function mW(a,b,c){this.a=a
this.f=b
this.r=c},
vA:function vA(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function oV(a){this.a=a
this.b=0},
Ai:function Ai(a){this.a=a},
Aj:function Aj(a){this.a=a},
Pc(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="maxDocBytes",a="destructiveBackup",a0="storePolicies",a1="syncProxy",a2="blobProxy",a3="clockOffsetMs"
if(a4==null)return A.t(t.N,t.X)
s=t.f
if(!s.b(a4))throw A.b(A.aL("Open options must be a map."))
r=A.bp(a4)
q=t.N
p=t.X
o=A.t(q,p)
n=r.h(0,"stores")
if(n!=null){if(!t.j.b(n))throw A.b(A.aL('"stores" must be a list.'))
m=A.l([],t.oq)
for(l=J.E(n);l.k();){k=l.gn()
if(!s.b(k))A.u(A.ac("Schema must be a map: "+A.r(k),null,null))
m.push(A.qI(A.bp(k),p))}o.j(0,"stores",m)}j=r.h(0,b)
if(j!=null){if(!A.a5(j))throw A.b(A.aL('"maxDocBytes" must be an int.'))
o.j(0,b,j)}i=r.h(0,a)
if(i!=null){if(!A.aT(i))throw A.b(A.aL('"destructiveBackup" must be a bool.'))
o.j(0,a,i)}h=r.h(0,a0)
if(h!=null){if(!s.b(h))throw A.b(A.aL('"storePolicies" must be a map.'))
q=A.t(q,t.G)
for(p=h.ga0(),p=p.gt(p);p.k();){m=p.gn()
l=m.a
g=J.cK(l)
f=g.l(l)
m=m.b
l=g.l(l)
if(!s.b(m))A.u(A.aL('The store policy for "'+l+'" must be a map.'))
q.j(0,f,A.bp(m))}o.j(0,a0,q)}e=r.h(0,a1)
if(e!=null){if(!A.aT(e))throw A.b(A.aL('"syncProxy" must be a bool.'))
o.j(0,a1,e)}d=r.h(0,a2)
if(d!=null){if(!A.aT(d))throw A.b(A.aL('"blobProxy" must be a bool.'))
o.j(0,a2,d)}A.ED(r,"groupCommitWindowMs",o,0,"the group-commit coalescing window")
A.ED(r,"txSessionTtlMs",o,0,"the interactive-transaction idle deadline")
A.ED(r,"callbackTimeoutMs",o,1,"the page-callback round-trip bound")
c=r.h(0,a3)
if(c!=null){if(!A.a5(c))throw A.b(A.aL('"clockOffsetMs" must be an int (milliseconds).'))
o.j(0,a3,c)}return o},
ED(a,b,c,d,e){var s=a.h(0,b)
if(s==null)return
if(!A.a5(s))throw A.b(A.aL('"'+b+'" must be an int (milliseconds).'))
if(s<d)throw A.b(A.aL('"'+b+'" must be an int \u2265 '+d+" (milliseconds) for "+e+"."))
c.j(0,b,s)},
In(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.bp(a).h(0,b)
return s}}catch(r){}return null},
OU(a,b){if(b!=null)return!1
return B.b.bp(a,new A.D2())},
D2:function D2(){},
D1:function D1(){},
zc:function zc(a){this.a=a},
Gr(a,b,c,d){var s,r,q,p,o,n,m,l=A.l([],t.s)
for(s=A.c0(new A.T(c,A.n(c).i("T<1>")),t.N),s.D(0,new A.T(d,A.n(d).i("T<1>"))),s=A.dz(s,s.r,A.n(s).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!A.Lt(c.h(0,q),d.h(0,q))){p=c.h(0,q)
o=d.h(0,q)
l.push(q+" (page: "+A.Gq(p)+", worker: "+A.Gq(o)+")")}}n=l.length===0?"no policy-level descriptor diverged \u2014 the divergence is inside the schema body itself":B.b.C(l,"; ")
m=b?"":" No store-policy envelope was received for this store (a stale worker asset or a dropped envelope)."
return'Schema manifest mismatch for "'+a+'": the page and the worker compiled different schemas. Diverging manifest descriptors: '+n+"."+m},
Eg(a){var s,r,q,p,o,n,m,l=a.e,k=l.b.gJ()
k=A.O(k,A.n(k).i("o.E"))
B.b.aj(k)
s=a.y.gJ()
s=A.O(s,A.n(s).i("o.E"))
B.b.aj(s)
r=a.x
q=B.b.bp(r,new A.zq())
p=A.l([],t.t)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.p)(r),++n){m=r[n]
if(m.d!=null)p.push(m.a)}B.b.aj(p)
return A.m(["version",a.b,"hasValidatorCallback",a.z!=null,"hasCollectionResolver",l.a!=null,"fieldOverrides",k,"editsUnarchive",l.c,"missingRemote",l.d.b,"documentMigrationVersions",s,"hasTransform",q,"transformVersions",p,"keepUnsyncedArchives",a.r],t.N,t.X)},
Ls(a,b){var s,r,q,p=new A.zi(a),o=new A.zh(a),n=p.$1("conflictPolicy"),m=o.$1("documentMigrations"),l=o.$1("migrationTransforms"),k=n.h(0,"missingRemote")
o=t.f.b(a)&&J.x(a.h(0,"validator"),!0)
s=n.h(0,"collectionResolver")
p=new A.zj(p).$0()
r=J.x(n.h(0,"editsUnarchive"),!0)
q=typeof k=="string"?k:"conflict"
return A.m(["version",b.b,"hasValidatorCallback",o,"hasCollectionResolver",s!=null,"fieldOverrides",p,"editsUnarchive",r,"missingRemote",q,"documentMigrationVersions",m,"hasTransform",J.ag(l)!==0,"transformVersions",l,"keepUnsyncedArchives",b.r],t.N,t.X)},
Lt(a,b){var s,r,q,p=t.j
if(p.b(a)&&p.b(b)){p=t.N
s=J.bI(a,new A.zn(),p)
r=A.O(s,s.$ti.i("a0.E"))
B.b.aj(r)
s=A.a1(b).i("Z<1,j>")
q=A.O(new A.Z(b,new A.zo(),s),s.i("a0.E"))
B.b.aj(q)
return r.length===q.length&&A.DM(r,0,p).ct(0,new A.zp(q))}return a==null?b==null:a===b},
Gq(a){var s
A:{if(t.j.b(a)){s="["+J.Jm(a,", ")+"]"
break A}if(a==null){s="absent"
break A}s=J.X(a)
break A}return s},
zd:function zd(a,b){this.a=a
this.b=b
this.c=0},
ze:function ze(a,b,c){this.a=a
this.b=b
this.c=c},
zf:function zf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zg:function zg(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(){},
k7:function k7(a,b){this.b=a
this.a=b},
f6:function f6(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
oD:function oD(){},
oC:function oC(a,b,c,d){var _=this
_.w=$
_.c=a
_.d=b
_.e=c
_.f=d
_.r=null},
zr:function zr(a){this.a=a},
oB:function oB(){},
zl:function zl(a){this.a=a},
zm:function zm(){},
zq:function zq(){},
zi:function zi(a){this.a=a},
zh:function zh(a){this.a=a},
zj:function zj(a){this.a=a},
zk:function zk(){},
zn:function zn(){},
zo:function zo(){},
zp:function zp(a){this.a=a},
pK:function pK(){},
Hs(a){return a},
HO(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a7("")
o=a+"("
p.a=o
n=A.a1(b)
m=n.i("cE<1>")
l=new A.cE(b,0,s,m)
l.jd(b,0,s,n.c)
m=o+new A.Z(l,new A.CA(),m.i("Z<a0.E,j>")).C(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.U(p.l(0),null))}},
rh:function rh(a){this.a=a},
ri:function ri(){},
rj:function rj(){},
CA:function CA(){},
ue:function ue(){},
e1(a,b){var s,r,q,p,o,n=b.oQ(a),m=b.d5(a)
if(n!=null)a=B.a.ab(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.cB(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cB(a.charCodeAt(o))){r.push(B.a.B(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ab(a,p))
q.push("")}return new A.ne(b,n,m,r,q)},
ne:function ne(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
G_(a){return new A.nf(a)},
nf:function nf(a){this.a=a},
Lg(){var s,r,q,p,o,n,m,l,k=null
if(A.Ef().gb9()!=="file")return $.lb()
if(!B.a.c9(A.Ef().gbD(),"/"))return $.lb()
s=A.H0(k,0,0)
r=A.GZ(k,0,0,!1)
q=A.BK(k,0,0,k)
p=A.GY(k,0,0)
o=A.BJ(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.H_("a/b",0,3,k,"",m)
if(n&&!B.a.T(l,"/"))l=A.Ev(l,m)
else l=A.fj(l)
if(A.kO("",s,n&&B.a.T(l,"//")?"":r,o,l,q,p).l_()==="a\\b")return $.q2()
return $.IH()},
yi:function yi(){},
wW:function wW(a,b,c){this.d=a
this.e=b
this.f=c},
yS:function yS(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
zb:function zb(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
DH(a,b){if(b<0)A.u(A.b8("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.u(A.b8("Offset "+b+u.D+a.gm(0)+"."))
return new A.mp(a,b)},
y1:function y1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
mp:function mp(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
Ka(a,b){var s=A.Kb(A.l([A.LR(a,!0)],t.pg)),r=new A.u4(b).$0(),q=B.c.l(B.b.ga_(s).b+1),p=A.Kc(s)?0:3,o=A.a1(s)
return new A.tL(s,r,null,1+Math.max(q.length,p),new A.Z(s,new A.tN(),o.i("Z<1,i>")).xQ(0,B.bJ),!A.P1(new A.Z(s,new A.tO(),o.i("Z<1,k?>"))),new A.a7(""))},
Kc(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
Kb(a){var s,r,q=A.OT(a,new A.tQ(),t.nf,t.K)
for(s=A.n(q),r=new A.b0(q,q.r,q.e,s.i("b0<2>"));r.k();)J.Ff(r.d,new A.tR())
s=s.i("aK<1,2>")
r=s.i("iQ<o.E,cI>")
s=A.O(new A.iQ(new A.aK(q,s),new A.tS(),r),r.i("o.E"))
return s},
LR(a,b){var s=new A.AU(a).$0()
return new A.bz(s,!0,null)},
LT(a){var s,r,q,p,o,n,m=a.gaT()
if(!B.a.E(m,"\r\n"))return a
s=a.gN().gav()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga6()
o=a.gN().gah()
p=A.nK(s,a.gN().gau(),o,p)
o=A.D(m,"\r\n","\n")
n=a.gbq()
return A.y2(r,p,o,A.D(n,"\r\n","\n"))},
LU(a){var s,r,q,p,o,n,m
if(!B.a.c9(a.gbq(),"\n"))return a
if(B.a.c9(a.gaT(),"\n\n"))return a
s=B.a.B(a.gbq(),0,a.gbq().length-1)
r=a.gaT()
q=a.gR()
p=a.gN()
if(B.a.c9(a.gaT(),"\n")){o=A.CW(a.gbq(),a.gaT(),a.gR().gau())
o.toString
o=o+a.gR().gau()+a.gm(a)===a.gbq().length}else o=!1
if(o){r=B.a.B(a.gaT(),0,a.gaT().length-1)
if(r.length===0)p=q
else{o=a.gN().gav()
n=a.ga6()
m=a.gN().gah()
p=A.nK(o-1,A.GI(s),m-1,n)
q=a.gR().gav()===a.gN().gav()?p:a.gR()}}return A.y2(q,p,r,s)},
LS(a){var s,r,q,p,o
if(a.gN().gau()!==0)return a
if(a.gN().gah()===a.gR().gah())return a
s=B.a.B(a.gaT(),0,a.gaT().length-1)
r=a.gR()
q=a.gN().gav()
p=a.ga6()
o=a.gN().gah()
p=A.nK(q-1,s.length-B.a.d6(s,"\n")-1,o-1,p)
return A.y2(r,p,s,B.a.c9(a.gbq(),"\n")?B.a.B(a.gbq(),0,a.gbq().length-1):a.gbq())},
GI(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.iz(a,"\n",s-2)-1
else return s-B.a.d6(a,"\n")-1},
tL:function tL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
u4:function u4(a){this.a=a},
tN:function tN(){},
tM:function tM(){},
tO:function tO(){},
tQ:function tQ(){},
tR:function tR(){},
tS:function tS(){},
tP:function tP(a){this.a=a},
u5:function u5(){},
tT:function tT(a){this.a=a},
u_:function u_(a,b,c){this.a=a
this.b=b
this.c=c},
u0:function u0(a,b){this.a=a
this.b=b},
u1:function u1(a){this.a=a},
u2:function u2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tY:function tY(a,b){this.a=a
this.b=b},
tZ:function tZ(a,b){this.a=a
this.b=b},
tU:function tU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tV:function tV(a,b,c){this.a=a
this.b=b
this.c=c},
tW:function tW(a,b,c){this.a=a
this.b=b
this.c=c},
tX:function tX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
AU:function AU(a){this.a=a},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nK(a,b,c,d){if(a<0)A.u(A.b8("Offset may not be negative, was "+a+"."))
else if(c<0)A.u(A.b8("Line may not be negative, was "+c+"."))
else if(b<0)A.u(A.b8("Column may not be negative, was "+b+"."))
return new A.cC(d,a,c,b)},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nL:function nL(){},
nN:function nN(){},
L9(a,b,c){return new A.hr(c,a,b)},
nO:function nO(){},
hr:function hr(a,b,c){this.c=a
this.a=b
this.b=c},
hs:function hs(){},
y2(a,b,c,d){var s=new A.dn(d,a,b,c)
s.px(a,b,c)
if(!B.a.E(d,c))A.u(A.U('The context line "'+d+'" must contain "'+c+'".',null))
if(A.CW(d,c,a.gau())==null)A.u(A.U('The span text "'+c+'" must start at column '+(a.gau()+1)+' in a line within "'+d+'".',null))
return s},
dn:function dn(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Ld(a){var s
A:{if(18===a){s=B.dO
break A}if(23===a){s=B.dP
break A}if(9===a){s=B.dQ
break A}s=null
break A}return s},
jV:function jV(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
Lc(a,b,c,d,e,f,g){return new A.cj(d,b,c,e,f,a,g)},
cj:function cj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y7:function y7(){},
ll:function ll(a){this.a=a},
MY(a,b,c){var s,r,q,p,o,n=new A.ou(c,A.a9(c.b,null,!1,t.X))
try{A.Hh(a,b.$1(n))}catch(r){s=A.B(r)
q=B.e.v(A.iN(s))
p=a.a
o=p.cY(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
Hh(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.a5(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Gu(b).l(0)))
break A}if(b instanceof A.aQ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Fl(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.aT(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Gu(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cY(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cY(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.ag(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.Hh(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.u(A.aD(b,"result","Unsupported type"))}return s},
rI:function rI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rR:function rR(a){this.a=a},
rQ:function rQ(a){this.a=a},
rS:function rS(a){this.a=a},
rO:function rO(a){this.a=a},
rN:function rN(a){this.a=a},
rP:function rP(a){this.a=a},
rK:function rK(a){this.a=a},
rJ:function rJ(a){this.a=a},
rL:function rL(a){this.a=a},
rT:function rT(a){this.a=a},
rM:function rM(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
em:function em(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
Bz:function Bz(a,b){this.a=a
this.b=b},
BA:function BA(a,b,c){this.a=a
this.b=b
this.c=c},
BB:function BB(a,b,c){this.a=a
this.b=b
this.c=c},
y3:function y3(){},
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
DL(a,b){var s=$.q1()
return new A.mD(A.t(t.N,t.a_),s,a)},
mD:function mD(a,b,c){this.d=a
this.b=b
this.a=c},
p7:function p7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Pd(a){var s=J.Jq(new v.G.URL(a,"file:///").pathname,"/")
return new A.aq(s,new A.Db(),A.a1(s).i("aq<1>"))},
Db:function Db(){},
rn:function rn(){},
nx:function nx(a,b,c){this.d=a
this.a=b
this.c=c},
ci:function ci(a,b){this.a=a
this.b=b},
Bi:function Bi(a){this.a=a
this.b=-1},
pn:function pn(){},
po:function po(){},
pq:function pq(){},
pr:function pr(){},
wf:function wf(a,b){this.a=a
this.b=b},
KY(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bS(r,"step")}return s},
eD:function eD(){},
bY:function bY(a){this.a=a},
lW:function lW(a){this.a=a},
hF(a){return new A.dw(a)},
Fj(a,b){var s,r,q,p
if(b==null)b=$.q1()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.d9(256)
r&2&&A.K(a)
a[q]=p}},
dw:function dw(a){this.a=a},
jU:function jU(a){this.a=a},
bh:function bh(){},
lB:function lB(){},
lA:function lA(){},
Pj(a,b){var s=null,r=new A.eP(t.kk)
return A.q0(a,new A.k8(s,s,s,s,s,s,s,s,new A.Dl(new A.Dk(r,A.Cn(new A.Dm(r)))),s,s,s,s),s,b)},
f7:function f7(a){var _=this
_.d=a
_.c=_.b=_.a=null},
Dm:function Dm(a){this.a=a},
Dk:function Dk(a,b){this.a=a
this.b=b},
Dl:function Dl(a){this.a=a},
z2:function z2(a){this.a=a},
yY:function yY(a,b,c){this.a=a
this.b=b
this.c=c},
z4:function z4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z3:function z3(a,b,c){this.b=a
this.c=b
this.d=c},
ec:function ec(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
c8(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.B(r)
if(q instanceof A.dw){s=q
return s.a}else return 1}},
m_:function m_(a){this.b=this.a=$
this.d=a},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
rq:function rq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rv:function rv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rx:function rx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rz:function rz(a,b){this.a=a
this.b=b},
rs:function rs(a){this.a=a},
ry:function ry(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rD:function rD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rB:function rB(a,b){this.a=a
this.b=b},
rA:function rA(a,b){this.a=a
this.b=b},
ru:function ru(a,b,c){this.a=a
this.b=b
this.c=c},
rw:function rw(a,b){this.a=a
this.b=b},
rC:function rC(a,b){this.a=a
this.b=b},
rr:function rr(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b){this.a=a
this.$ti=b},
qg:function qg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qi:function qi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
cN(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.by(a,"success",new A.r1(r,a,b),!1,q)
A.by(a,"error",new A.r2(r,a),!1,q)
return s},
JL(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.by(a,"success",new A.r6(r,a,b),!1,q)
A.by(a,"error",new A.r7(r,a),!1,q)
A.by(a,"blocked",new A.r8(r),!1,q)
return s},
fb:function fb(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
Am:function Am(a,b){this.a=a
this.b=b},
An:function An(a,b){this.a=a
this.b=b},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a,b){this.a=a
this.b=b},
r6:function r6(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a){this.a=a},
iq(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
FD(a,b,c){var s=a.read(b,c)
return s},
FE(a,b,c){var s=a.write(b,c)
return s},
mu(a,b){return A.a4(a.removeEntry(b,{recursive:!1}),t.X)},
FC(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.u(A.U("Target object does not implement the async iterable interface",null))
return new A.ff(new A.tr(),new A.iw(a,s),s.i("ff<ad.T,N>"))},
tr:function tr(){},
yZ:function yZ(a){this.a=a},
z_:function z_(a){this.a=a},
z1(a,b){var s=0,r=A.h(t.R),q,p,o
var $async$z1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a4(p.fetch(new p.URL(a,A.bm(p.location).href),null),t.m),$async$z1)
case 3:q=o.z0(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$z1,r)},
z0(a,b){var s=0,r=A.h(t.R),q,p,o,n,m
var $async$z0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.m_(A.t(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.yZ(p).iC(a),$async$z0)
case 3:q=new o.hG(new n.z2(m.Lq(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$z0,r)},
hG:function hG(a){this.a=a},
LV(a){var s=new A.kq(a,new A.at(new A.w($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.pB(a)
return s},
mF(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$mF=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.qj(a)
n=A.DL("dart-memory",null)
m=$.q1()
l=new A.dQ(o,n,new A.eP(t.p3),A.aP(p),A.t(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.iI(),$async$mF)
case 3:s=4
return A.a(l.fb(),$async$mF)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mF,r)},
qj:function qj(a){this.a=null
this.b=a},
qm:function qm(a){this.a=a},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a){this.a=a},
kq:function kq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
AX:function AX(a){this.a=a},
AY:function AY(a){this.a=a},
AW:function AW(a){this.a=a},
AZ:function AZ(a,b,c){this.a=a
this.b=b
this.c=c},
B0:function B0(a,b){this.a=a
this.b=b},
B_:function B_(a,b){this.a=a
this.b=b},
Ay:function Ay(a,b,c){this.a=a
this.b=b
this.c=c},
Az:function Az(a,b){this.a=a
this.b=b},
pg:function pg(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
u8:function u8(a,b,c){this.a=a
this.b=b
this.c=c},
u9:function u9(){},
u7:function u7(a,b){this.a=a
this.b=b},
p8:function p8(a,b,c){this.a=a
this.b=b
this.c=c},
AV:function AV(a,b){this.a=a
this.b=b},
bj:function bj(){},
ko:function ko(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
ki:function ki(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hQ:function hQ(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
i8:function i8(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
Gb(a){var s=A.DL("dart-memory",null),r=$.q1()
return new A.hq(s,r,a)},
nG(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$nG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.iq()
if(j==null)throw A.b(A.hF(1))
p=t.m
s=3
return A.a(A.a4(j.getDirectory(),p),$async$nG)
case 3:o=d
n=A.Pd(a),m=J.E(n.a),n=new A.d1(m,n.b,n.$ti.i("d1<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a4(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$nG)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a_(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nG,r)},
nH(a){var s=0,r=A.h(t.m),q
var $async$nH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nG(a,!0),$async$nH)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nH,r)},
y_(a,b){var s=0,r=A.h(t.g_),q,p
var $async$y_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.iq()==null)throw A.b(A.hF(1))
p=A
s=3
return A.a(A.nH(a),$async$y_)
case 3:q=p.xZ(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$y_,r)},
xZ(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$xZ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.Gb(c)
s=3
return A.a(p.da(a,!1),$async$xZ)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xZ,r)},
fU:function fU(a,b,c){this.c=a
this.a=b
this.b=c},
hq:function hq(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
y0:function y0(a,b){this.a=a
this.b=b},
pw:function pw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Be:function Be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Lq(a,b){var s=A.bm(a.exports.memory)
b.b!==$&&A.dE()
b.b=s
s=new A.yT(s,b,a.exports)
s.py(a,b)
return s},
oF(a,b){var s,r=A.c2(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
ee(a,b,c){var s=a.buffer
return B.o.fp(A.c2(s,b,c==null?A.oF(a,b):c))},
Eh(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.fp(A.c2(s,b,c==null?A.oF(a,b):c))},
Gs(a,b,c){var s=new Uint8Array(c)
B.f.dh(s,0,A.c2(a.buffer,b,c))
return s},
yT:function yT(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
yU:function yU(a){this.a=a},
yV:function yV(a){this.a=a},
yW:function yW(a){this.a=a},
yX:function yX(a){this.a=a},
CM(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$CM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.ld()
s=l!=null?3:5
break
case 3:p=A.Nu()
s=6
return A.a(A.k6(l,p,null,null,!1),$async$CM)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a_({port:m.port1,lockName:p},new A.iH(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$CM,r)},
Nu(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bD(97+$.J8().d9(26))
return r.charCodeAt(0)==0?r:r},
JB(a){return new A.iD(a)},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
x2:function x2(){},
x6:function x6(a){this.a=a},
x7:function x7(a){this.a=a},
x5:function x5(a){this.a=a},
x4:function x4(a){this.a=a},
x3:function x3(a){this.a=a},
iD:function iD(a){this.a=a},
rG:function rG(){},
lV:function lV(a){this.a=a},
ro:function ro(a){this.a=a},
f5:function f5(){},
mf(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$mf=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nH(a),$async$mf)
case 3:p=e
o=A.Gb(c)
s=b?4:5
break
case 4:s=6
return A.a(o.da(p,!0),$async$mf)
case 6:case 5:q=new A.me(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mf,r)},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
tJ:function tJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
k6(a,b,c,d,e){var s,r,q={},p=new A.w($.C,t.nI),o=new A.at(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.DI(A.a4(a.request(b,s,A.d6(new A.z8(q,o))),r),new A.z9(q,d,o),r,t.K)
return p},
z8:function z8(a,b){this.a=a
this.b=b},
z9:function z9(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a){this.a=a},
m0:function m0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rV:function rV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rU:function rU(a,b){this.a=a
this.b=b},
rW:function rW(a){this.a=a},
jr:function jr(a){this.a=!1
this.b=a},
w7:function w7(a,b){this.a=a
this.b=b},
w6:function w6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w5:function w5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
JI(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.a.b(n)?n:new A.bW(n,A.a1(n).i("bW<1,j>"))
for(s=J.J(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a_(A.fO(B.d5,s.h(m,q)),s.h(m,q+1)))}s=A.ia(a.b)
q=A.ia(a.c)
p=A.ia(a.d)
return new A.eE(o,s,q,A.ia(a.g),p)},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
L0(a){var s
if(J.x(a.t,"errorResponse")){s=A.JY(a)
if(s!=null&&s instanceof A.dF)return s
else return new A.hi(a.e)}else return new A.hi("Did not respond with expected type, got "+A.r(a))},
JY(a){var s=a.s,r=s==null?null:A.ak(s)
A:{if(0===r){s=A.JZ(t.c.a(a.r))
break A}if(1===r){s=B.as
break A}s=null
break A}return s},
JZ(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.A("Pattern matching error"))
n=new A.tb()
l=A.ak(A.fk(l))
A.H(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.i.a(h)
p=new A.eG(i,h,A.c2(h,0,o))}else p=o
n=n.$1(k)
A.H8(g)
return new A.cj(s,r,l,g==null?o:A.ak(g),n,q,p)},
K_(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Lk(l)
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
L1(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.tJ(a2,512,"transfer" in a2)
a5.n1(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.KY(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.r0(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aK}else g=B.aL
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aM
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.oF(r,f)
f=new Uint8Array(e,f,d)
c=new A.dB(!1).dm(f,0,a,!0)
i=c
g=B.aN
break
case 4:i=s.lj(j)
g=B.aO
break
case 5:default:i=a
g=B.aP}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.oF(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dB(!1).dm(a0,0,a,!0)}return A.Ig(!1,b,0,0,a1,a,a3.y6(0))},
P2(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
tb:function tb(){},
Ig(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
ij(a){var s,r,q,p,o=v.G,n=new o.Array()
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
OF(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
xN:function xN(){},
K2(a){var s,r
for(s=0;s<5;++s){r=B.cT[s]
if(r.c===a)return r}throw A.b(A.U("Unknown FS implementation: "+a,null))},
Lj(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aP
break A}q=A.a5(a)
p=q?a:j
if(q){s=p
r=B.aK
break A}q=a instanceof A.aQ
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aL
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aM
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aN
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aO
break A}q=A.aT(a)
k=q?a:j
if(q){s=k
r=B.bv
break A}throw A.b(A.U("Unsupported value: "+A.r(a),j))}return new A.a_(r,s)},
Lk(a){var s,r,q,p,o,n
if(a instanceof A.eG)return new A.a_(a.a,a.b)
s=[]
r=J.J(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Lj(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a_(s,t.i.a(B.f.gac(p)))},
dM:function dM(a,b,c){this.c=a
this.a=b
this.b=c},
cG:function cG(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
pX(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pX=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bm(i.indexedDB)
i=$.ld()
i=i==null?null:A.k6(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bF(i,t.fm),$async$pX)
case 3:l=b
p=5
s=8
return A.a(A.JK(m.open("drift_mock_db"),t.m),$async$pX)
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
if(i!=null)i.a.ak()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$pX,r)},
CI(a){return A.Og(a)},
Og(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$CI=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bm(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.d6(new A.CJ(j,m))
s=7
return A.a(A.JJ(m,t.m),$async$CI)
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
return A.f($async$CI,r)},
im(){var s=0,r=A.h(t.a),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$im=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.iq()
if(h==null){q=B.u
s=1
break}j=t.m
s=3
return A.a(A.a4(h.getDirectory(),j),$async$im)
case 3:m=b
p=5
s=8
return A.a(A.a4(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$im)
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
j=new A.c5(A.cp(A.FC(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$im)
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
return A.a(j.A(),$async$im)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$im,r)},
JJ(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.by(a,"success",new A.r_(r,a,b),!1,q)
A.by(a,"error",new A.r0(r,a),!1,q)
return s},
JK(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.by(a,"success",new A.r3(r,a,b),!1,q)
A.by(a,"error",new A.r4(r,a),!1,q)
A.by(a,"blocked",new A.r5(r,a),!1,q)
return s},
CJ:function CJ(a,b){this.a=a
this.b=b},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
r0:function r0(a,b){this.a=a
this.b=b},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a,b){this.a=a
this.b=b},
r5:function r5(a,b){this.a=a
this.b=b},
wZ:function wZ(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
hi:function hi(a){this.a=a},
dF:function dF(a){this.a=a},
MX(a){var s=a.gnm()
return new A.ff(new A.Cm(),s,A.n(s).i("ff<ad.T,N>"))},
GE(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hP(a,r,new A.kE(),new A.kE(),new A.kE(),s)},
LM(a,b,c){var s=t.S
s=new A.hN(c,A.l([],t.fV),a.a,new A.aG(new A.w($.C,t.D),t.Q),A.t(s,t.br),A.t(s,t.m))
s.pv(a)
s.pA(a,b,c)
return s},
Hi(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
eq(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$eq=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.iq()
if(b==null){q=B.aG
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.ld()
d=d==null?null:A.k6(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bF(d,t.fm),$async$eq)
case 7:j=a1
d=t.m
s=8
return A.a(A.a4(b.getDirectory(),d),$async$eq)
case 8:m=a1
s=9
return A.a(A.a4(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$eq)
case 9:l=a1
s=10
return A.a(A.l_(l),$async$eq)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.DP(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a4(A.bm(e),t.X),$async$eq)
case 13:q=B.aG
n=[1]
s=5
break
case 12:g=i
q=new A.kz(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.aG
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.ak()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.mu(m,"_drift_feature_detection"),$async$eq)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eq,r)},
l_(a){return A.NQ(a)},
NQ(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$l_=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a4(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$l_)
case 7:j=c
s=8
return A.a(A.a4(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$l_)
case 8:n=c
n.close()
l=j
q=new A.a_(!0,l)
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
return A.a(A.a4(a.createSyncAccessHandle(),t.m),$async$l_)
case 9:m=c
q=new A.a_(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$l_,r)},
Cm:function Cm(){},
kE:function kE(){this.a=null},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
Ad:function Ad(a){this.a=a},
Ah:function Ah(a,b){this.a=a
this.b=b},
Ae:function Ae(a,b){this.a=a
this.b=b},
Af:function Af(a){this.a=a},
Ag:function Ag(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
zY:function zY(a){this.a=a},
A2:function A2(a,b){this.a=a
this.b=b},
A5:function A5(a,b,c){this.a=a
this.b=b
this.c=c},
A_:function A_(a,b){this.a=a
this.b=b},
zZ:function zZ(a,b){this.a=a
this.b=b},
A4:function A4(a,b){this.a=a
this.b=b},
A3:function A3(a,b){this.a=a
this.b=b},
A7:function A7(a,b){this.a=a
this.b=b},
A6:function A6(a,b){this.a=a
this.b=b},
A0:function A0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A1:function A1(a,b){this.a=a
this.b=b},
zX:function zX(a){this.a=a},
m1:function m1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
rZ:function rZ(a){this.a=a},
rY:function rY(a){this.a=a},
rX:function rX(a,b){this.a=a
this.b=b},
zs:function zs(a,b,c,d,e,f){var _=this
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
zt:function zt(a,b){this.a=a
this.b=b},
zu:function zu(a,b){this.a=a
this.b=b},
zv:function zv(a){this.a=a},
Lu(){var s=v.G
if(A.Kh(s,"DedicatedWorkerGlobalScope"))return new A.p_(s,new A.p0(s.location.href))
else return new A.pu(s,new A.p0(s.location.href))},
kQ:function kQ(){},
p_:function p_(a,b){this.a=a
this.b=b},
pu:function pu(a,b){this.a=a
this.b=b},
Bt:function Bt(a){this.a=a},
Bu:function Bu(a,b,c){this.a=a
this.b=b
this.c=c},
Bs:function Bs(a){this.a=a},
Bq:function Bq(a){this.a=a},
Br:function Br(a){this.a=a},
p0:function p0(a){this.a=a},
At:function At(a){this.a=a},
nW:function nW(a,b,c){this.c=a
this.a=b
this.b=c},
yh:function yh(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hC:function hC(){},
p9:function p9(){},
cH:function cH(a,b){this.a=a
this.b=b},
by(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.HQ(new A.Aw(c),t.m)
s=s==null?null:A.d6(s)}s=new A.km(a,b,s,!1,e.i("km<0>"))
s.ka()
return s},
HQ(a,b){var s=$.C
if(s===B.i)return a
return s.i4(a,b)},
DE:function DE(a,b){this.a=a
this.$ti=b},
hT:function hT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
km:function km(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
Aw:function Aw(a){this.a=a},
Ax:function Ax(a){this.a=a},
Iy(a){return v.mangledGlobalNames[a]},
Ik(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Kk(a,b){return b in a},
DP(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
OT(a,b,c,d){var s,r,q,p,o,n=A.t(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aO(p,q)}return n},
DN(a){var s=J.E(a.a)
if(new A.d1(s,a.b,a.$ti.i("d1<1>")).k())return s.gn()
return null},
CE(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.K(a)
a[r]=s&255
b=s/256|0;--r}},
Pt(a){return a},
Iw(a){if(a instanceof A.dI)return a
return new A.dI(a)},
Pu(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.B(p)
if(q instanceof A.hr){s=q
throw A.b(A.L9("Invalid "+a+": "+s.a,s.b,s.ghc()))}else if(t.Y.b(q)){r=q
throw A.b(A.ac("Invalid "+a+' "'+b+'": '+r.giE(),r.ghc(),r.gav()))}else throw p}},
ft(a){if(B.a.c9(a,"\\"))throw A.b(A.aX('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.D(a,"'","\\'")+"'"},
Pp(a,b,c,d){var s="("+d+"="+A.ft(a)+" && id~"+A.ft(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.ft(c)+")"},
Ow(a,b){var s,r="hash",q=A.NA(a,b),p=A.EH(q.h(0,"kind"),b,"kind")
switch(p){case"blobMissing":return new A.ex(A.EH(q.h(0,r),b,r))
case"blobStorage":s=q.h(0,"cause")
if(typeof s!="string")throw A.b(A.G('"cause" at '+b+" must be a string.",null))
return new A.fC(s,A.EH(q.h(0,r),b,r))
default:throw A.b(A.G('Unknown blob error kind "'+p+'" at '+b+".",null))}},
I3(a,b){if(typeof a=="string")return a
throw A.b(A.G("The result at "+b+" must be a string.",null))},
I1(a,b){if(A.aT(a))return a
throw A.b(A.G("The result at "+b+" must be a bool.",null))},
I2(a,b){if(a==null)return null
if(A.a5(a))return a
throw A.b(A.G("The result at "+b+" must be an int or null.",null))},
Oy(a,b){if(A.a5(a))return a
throw A.b(A.G("The result at "+b+" must be an int.",null))},
Ox(a,b){var s,r,q,p
if(!t.j.b(a))throw A.b(A.G("The result at "+b+" must be a list.",null))
s=A.l([],t.s)
for(r=J.E(a),q="The result at "+b+" must contain only strings.";r.k();){p=r.gn()
if(typeof p=="string")s.push(p)
else s.push(A.u(A.G(q,null)))}return s},
NA(a,b){if(t.f.b(a))return A.bp(a)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
EH(a,b,c){if(typeof a=="string")return a
throw A.b(A.G('"'+c+'" at '+b+" must be a string.",null))},
ik(){var s,r,q,p=$.J9(),o=$.J2()+1
$.N2=o
s=B.a.iK(B.c.l0(o,36),8,"0")
r=J.FL(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.d9(36)]
return B.a.B(s+B.b.eD(r),0,15)},
Pf(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
Pg(a,b){var s,r,q=A.l([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.push(A.Pf(a[r],b))
return q},
q_(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.B(q)
if(r instanceof A.dp)throw q
else{s=r
r=A.dq("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
CQ(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.aI(a,null)
if(t.f.b(s)){q=A.bu(s,t.N,t.X)
return q}return B.j}catch(p){r=A.B(p)
q=A.dq("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
I6(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bl
try{s=B.h.aI(a,null)
if(t.j.b(s)){q=J.q6(s,t.N)
q=q.cG(q)
return q}return B.bl}catch(p){r=A.B(p)
q=A.dq("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
I5(a){var s,r,q,p,o=null
if(a==null)return B.u
A.H(a)
if(a.length===0)return B.u
s=B.h.aI(a,o)
if(!t.j.b(s))throw A.b(A.ac("expected a JSON array, got "+J.c9(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.u(A.ac("dirty-field member is "+J.c9(p).l(0)+", expected String",o,o)))}return r},
fq(a){var s,r=J.J(a)
if(r.gF(a))return null
s=J.bH(r.gH(a).gb0())
if(A.a5(s))return s
if(typeof s=="string")return A.hb(s,null)
return null},
I9(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.bX(B.w.y_(r*J.Jh(d.$1(o),0.5,1.5)),0,0)},
Pb(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cu)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.ac("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ag(r)!==32)throw A.b(B.ct)
q=new Uint8Array(32)
for(p=J.J(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.a5(n)||n<0||n>255)throw A.b(A.ac("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.Fh(q)
p=$.Dt()
if($.l9()!==B.R)A.u(A.A("BigEndian systems are unsupported"))
return new A.q9(new A.lY(12,32,m),new A.jT(new A.nF(A.Fh(q)),m),p)},
P6(){var s=A.Lu(),r=t.cj
new A.zs(s,B.bY,A.l([],t.az),A.t(t.S,t.lp),new A.jr(A.DT(r)),new A.jr(A.DT(r))).eB()},
I0(){var s,r,q,p,o=null
try{o=A.Ef()}catch(s){if(t.mA.b(A.B(s))){r=$.Ce
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.He)){r=$.Ce
r.toString
return r}$.He=o
if($.F4()===$.lb())r=$.Ce=o.al(".").l(0)
else{q=o.l_()
p=q.length-1
r=$.Ce=p===0?q:B.a.B(q,0,p)}return r},
Ic(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
I7(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Ic(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.B(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
P1(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gH(0)
for(r=A.cF(a,1,null,a.$ti.i("a0.E")),q=r.$ti,r=new A.as(r,r.gm(0),q.i("as<a0.E>")),q=q.i("a0.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
Pi(a,b){var s=B.b.ca(a,null)
if(s<0)throw A.b(A.U(A.r(a)+" contains no null elements.",null))
a[s]=b},
Io(a,b){var s=B.b.ca(a,b)
if(s<0)throw A.b(A.U(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Ot(a,b){var s,r,q,p
for(s=new A.cu(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),r=r.i("M.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
CW(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cv(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.ca(a,b)
while(r!==-1){q=r===0?0:B.a.iz(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cv(a,b,r+1)}return null},
EQ(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.cj(A.ee(r.b,p.sqlite3_errmsg(q),null),A.ee(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
Dp(a,b,c,d,e){throw A.b(A.EQ(a.a,a.b,b,c,d,e))},
Fl(a){if(a.a3(0,$.IB())<0||a.a3(0,$.IA())>0)throw A.b(A.Fz("BigInt value exceeds the range of 64 bits"))
return a},
KZ(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ak(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.ee(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.Gs(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
FG(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bD("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.d9(61)))
return s.charCodeAt(0)==0?s:s},
xK(a){var s=0,r=A.h(t.lo),q
var $async$xK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(a.arrayBuffer(),t.i),$async$xK)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xK,r)}},B={}
var w=[A,J,B]
var $={}
A.DR.prototype={}
J.mH.prototype={
P(a,b){return a===b},
gK(a){return A.eX(a)},
l(a){return"Instance of '"+A.nj(a)+"'"},
gam(a){return A.bT(A.EB(this))}}
J.mK.prototype={
l(a){return String(a)},
gK(a){return a?519018:218159},
gam(a){return A.bT(t.y)},
$ian:1,
$iP:1}
J.j5.prototype={
P(a,b){return null==b},
l(a){return"null"},
gK(a){return 0},
gam(a){return A.bT(t.P)},
$ian:1,
$iW:1}
J.aJ.prototype={$iN:1}
J.dU.prototype={
gK(a){return 0},
gam(a){return B.ea},
l(a){return String(a)}}
J.nh.prototype={}
J.ea.prototype={}
J.bZ.prototype={
l(a){var s=a[$.IE()]
if(s==null)s=a[$.fu()]
if(s==null)return this.pj(a)
return"JavaScript function for "+J.X(s)}}
J.bB.prototype={
gK(a){return 0},
l(a){return String(a)}}
J.fX.prototype={
gK(a){return 0},
l(a){return String(a)}}
J.z.prototype={
fn(a,b){return new A.bW(a,A.a1(a).i("@<1>").Z(b).i("bW<1,2>"))},
u(a,b){a.$flags&1&&A.K(a,29)
a.push(b)},
iT(a,b){var s
a.$flags&1&&A.K(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.xJ(b,null))
return a.splice(b,1)[0]},
aF(a,b,c){var s
a.$flags&1&&A.K(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.xJ(b,null))
a.splice(b,0,c)},
kI(a,b,c){var s,r
a.$flags&1&&A.K(a,"insertAll",2)
A.G8(b,0,a.length,"index")
if(!t.O.b(c))c=J.Js(c)
s=J.ag(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.aA(a,b,r,c)},
kW(a){a.$flags&1&&A.K(a,"removeLast",1)
if(a.length===0)throw A.b(A.CS(a,-1))
return a.pop()},
G(a,b){var s
a.$flags&1&&A.K(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
tu(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.az(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dR(a,b){return new A.aq(a,b,A.a1(a).i("aq<1>"))},
D(a,b){var s
a.$flags&1&&A.K(a,"addAll",2)
if(Array.isArray(b)){this.pI(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
pI(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.az(a))
for(s=0;s<r;++s)a.push(b[s])},
aq(a){a.$flags&1&&A.K(a,"clear","clear")
a.length=0},
cE(a,b,c){return new A.Z(a,b,A.a1(a).i("@<1>").Z(c).i("Z<1,2>"))},
C(a,b){var s,r=A.a9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
eD(a){return this.C(a,"")},
ce(a,b){return A.cF(a,0,A.cp(b,"count",t.S),A.a1(a).c)},
ba(a,b){return A.cF(a,b,null,A.a1(a).c)},
cu(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.az(a))}if(c!=null)return c.$0()
throw A.b(A.av())},
kB(a,b){return this.cu(a,b,null)},
a4(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.aA(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.aA(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a1(a))
return A.l(a.slice(b,c),A.a1(a))},
bh(a,b){return this.U(a,b,null)},
h8(a,b,c){A.bl(b,c,a.length)
return A.cF(a,b,c,A.a1(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.av())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.av())},
gao(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.av())
throw A.b(A.j2())},
iU(a,b,c){a.$flags&1&&A.K(a,18)
A.bl(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.K(a,5)
A.bl(b,c,a.length)
s=c-b
if(s===0)return
A.aY(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.fx(d,e).be(0,!1)
q=0}p=J.J(r)
if(q+s>p.gm(r))throw A.b(A.FJ())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
bp(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.az(a))}return!1},
ct(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.az(a))}return!0},
cI(a,b){var s,r,q,p,o
a.$flags&2&&A.K(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.N6()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a1(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.er(b,2))
if(p>0)this.tv(a,p)},
aj(a){return this.cI(a,null)},
tv(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
ca(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
d6(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
E(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gS(a){return a.length!==0},
l(a){return A.uf(a,"[","]")},
be(a,b){var s=A.a1(a)
return b?A.l(a.slice(0),s):J.DO(a.slice(0),s.c)},
bT(a){return this.be(a,!0)},
cG(a){return A.mV(a,A.a1(a).c)},
gt(a){return new J.fB(a,a.length,A.a1(a).i("fB<1>"))},
gK(a){return A.eX(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.K(a,"set length","change the length of")
if(b<0)throw A.b(A.aA(b,0,null,"newLength",null))
if(b>a.length)A.a1(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.CS(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.K(a)
if(!(b>=0&&b<a.length))throw A.b(A.CS(a,b))
a[b]=c},
nn(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gam(a){return A.bT(A.a1(a))},
$ibk:1,
$iL:1,
$io:1,
$iq:1}
J.mI.prototype={
yc(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.nj(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.uh.prototype={}
J.fB.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.eN.prototype={
a3(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkM(b)
if(this.gkM(a)===s)return 0
if(this.gkM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkM(a){return a===0?1/a<0:a<0},
h1(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.a2(""+a+".toInt()"))},
uN(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.a2(""+a+".ceil()"))},
w8(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.a2(""+a+".floor()"))},
y_(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.a2(""+a+".round()"))},
bx(a,b,c){if(this.a3(b,c)>0)throw A.b(A.fo(b))
if(this.a3(a,b)<0)return b
if(this.a3(a,c)>0)return c
return a},
l0(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.aA(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.u(A.a2("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bt("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
an(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
jc(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mH(a,b)},
L(a,b){return(a|0)===a?a/b|0:this.mH(a,b)},
mH(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.a2("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bX(a,b){if(b<0)throw A.b(A.fo(b))
return b>31?0:a<<b>>>0},
tR(a,b){return b>31?0:a<<b>>>0},
dW(a,b){var s
if(b<0)throw A.b(A.fo(b))
if(a>0)s=this.k8(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ag(a,b){var s
if(a>0)s=this.k8(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mF(a,b){if(0>b)throw A.b(A.fo(b))
return this.k8(a,b)},
k8(a,b){return b>31?0:a>>>b},
oR(a,b){return a>b},
gam(a){return A.bT(t.cZ)},
$iay:1,
$iae:1,
$ib3:1}
J.j4.prototype={
gn2(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.L(q,4294967296)
s+=32}return s-Math.clz32(q)},
gam(a){return A.bT(t.S)},
$ian:1,
$ii:1}
J.mL.prototype={
gam(a){return A.bT(t.W)},
$ian:1}
J.dS.prototype={
ki(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.py(b,a,c)},
i_(a,b){return this.ki(a,b,0)},
eG(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.hw(c,a)},
c9(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ab(a,r-s)},
kY(a,b,c){A.G8(0,0,a.length,"startIndex")
return A.Po(a,b,c,0)},
di(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.eO){s=b.e
s=!(s==null?b.e=b.qh():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.qt(a,b)}},
dN(a,b,c,d){var s=A.bl(b,c,a.length)
return A.It(a,b,s,d)},
qt(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.Dv(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
o=p.gR()
n=p.gN()
q=n-o
if(q===0&&r===o)continue
m.push(this.B(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ab(a,r))
return m},
af(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.af(a,b,0)},
B(a,b,c){return a.substring(b,A.bl(b,c,a.length))},
ab(a,b){return this.B(a,b,null)},
cf(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Kl(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.FN(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ya(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.FN(r,s))},
bt(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.c_)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iK(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bt(c,s)+a},
xk(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bt(" ",s)},
cv(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ca(a,b){return this.cv(a,b,0)},
iz(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
d6(a,b){return this.iz(a,b,null)},
E(a,b){return A.Pl(a,b,0)},
a3(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gK(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gam(a){return A.bT(t.N)},
gm(a){return a.length},
$ibk:1,
$ian:1,
$iay:1,
$ij:1}
A.Al.prototype={
u(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.J(b),i=j.gm(b)
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
B.f.aA(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.aA(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.K(r)
r[q+m]=l}k.a=s},
iV(){var s,r=this
if(r.a===0)return $.q3()
s=J.bV(B.f.gac(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.q3()
return s},
gm(a){return this.a}}
A.oQ.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.bc(b))
this.b.push(s)
this.a=this.a+s.length},
iV(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.q3()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.aq(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.p)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.aA(q,p,m,n)}l.a=0
B.b.aq(s)
return q},
gm(a){return this.a}}
A.ef.prototype={
gt(a){return new A.lF(J.E(this.gbn()),A.n(this).i("lF<1,2>"))},
gm(a){return J.ag(this.gbn())},
gF(a){return J.bq(this.gbn())},
gS(a){return J.d9(this.gbn())},
ba(a,b){var s=A.n(this)
return A.fD(J.fx(this.gbn(),b),s.c,s.y[1])},
ce(a,b){var s=A.n(this)
return A.fD(J.lg(this.gbn(),b),s.c,s.y[1])},
a4(a,b){return A.n(this).y[1].a(J.le(this.gbn(),b))},
gH(a){return A.n(this).y[1].a(J.bH(this.gbn()))},
ga_(a){return A.n(this).y[1].a(J.q7(this.gbn()))},
gao(a){return A.n(this).y[1].a(J.q8(this.gbn()))},
E(a,b){return J.Dw(this.gbn(),b)},
l(a){return J.X(this.gbn())}}
A.lF.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ez.prototype={
gbn(){return this.a}}
A.kj.prototype={$iL:1}
A.kg.prototype={
h(a,b){return this.$ti.y[1].a(J.Q(this.a,b))},
j(a,b,c){J.b5(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.Jo(this.a,b)},
u(a,b){J.aO(this.a,this.$ti.c.a(b))},
cI(a,b){var s=b==null?null:new A.zV(this,b)
J.Ff(this.a,s)},
h8(a,b,c){var s=this.$ti
return A.fD(J.Jk(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.Jp(this.a,b,c,A.fD(d,s.y[1],s.c),e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)},
$iL:1,
$iq:1}
A.zV.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bW.prototype={
fn(a,b){return new A.bW(this.a,this.$ti.i("@<1>").Z(b).i("bW<1,2>"))},
gbn(){return this.a}}
A.eA.prototype={
cr(a,b,c){return new A.eA(this.a,this.$ti.i("@<1,2>").Z(b).Z(c).i("eA<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a5(a,b){this.a.a5(0,new A.qB(this,b))},
gJ(){var s=this.$ti
return A.fD(this.a.gJ(),s.c,s.y[2])},
gb0(){var s=this.$ti
return A.fD(this.a.gb0(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gS(a){var s=this.a
return s.gS(s)},
ga0(){var s=this.a.ga0()
return s.cE(s,new A.qA(this),this.$ti.i("V<3,4>"))}}
A.qB.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.qA.prototype={
$1(a){var s=this.a.$ti
return new A.V(s.y[2].a(a.a),s.y[3].a(a.b),s.i("V<3,4>"))},
$S(){return this.a.$ti.i("V<3,4>(V<1,2>)")}}
A.dT.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.ns.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cu.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.Da.prototype={
$0(){return A.be(null,t.H)},
$S:3}
A.xY.prototype={}
A.L.prototype={}
A.a0.prototype={
gt(a){var s=this
return new A.as(s,s.gm(s),A.n(s).i("as<a0.E>"))},
gF(a){return this.gm(this)===0},
gH(a){if(this.gm(this)===0)throw A.b(A.av())
return this.a4(0,0)},
ga_(a){var s=this
if(s.gm(s)===0)throw A.b(A.av())
return s.a4(0,s.gm(s)-1)},
gao(a){var s=this
if(s.gm(s)===0)throw A.b(A.av())
if(s.gm(s)>1)throw A.b(A.j2())
return s.a4(0,0)},
E(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.x(r.a4(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.az(r))}return!1},
ct(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a4(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.az(r))}return!0},
C(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a4(0,0))
if(o!==p.gm(p))throw A.b(A.az(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a4(0,q))
if(o!==p.gm(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a4(0,q))
if(o!==p.gm(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}},
eD(a){return this.C(0,"")},
dR(a,b){return this.pe(0,b)},
cE(a,b,c){return new A.Z(this,b,A.n(this).i("@<a0.E>").Z(c).i("Z<1,2>"))},
xQ(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.av())
s=q.a4(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a4(0,r))
if(p!==q.gm(q))throw A.b(A.az(q))}return s},
ba(a,b){return A.cF(this,b,null,A.n(this).i("a0.E"))},
ce(a,b){return A.cF(this,0,A.cp(b,"count",t.S),A.n(this).i("a0.E"))},
be(a,b){var s=A.n(this).i("a0.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
bT(a){return this.be(0,!0)}}
A.cE.prototype={
jd(a,b,c,d){var s,r=this.b
A.aY(r,"start")
s=this.c
if(s!=null){A.aY(s,"end")
if(r>s)throw A.b(A.aA(r,0,s,"start",null))}},
gqE(){var s=J.ag(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtV(){var s=J.ag(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ag(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a4(a,b){var s=this,r=s.gtV()+b
if(b<0||r>=s.gqE())throw A.b(A.mE(b,s.gm(0),s,null,"index"))
return J.le(s.a,r)},
ba(a,b){var s,r,q=this
A.aY(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.eJ(q.$ti.i("eJ<1>"))
return A.cF(q.a,s,r,q.$ti.c)},
ce(a,b){var s,r,q,p=this
A.aY(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.cF(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.cF(p.a,r,q,p.$ti.c)}},
be(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.J(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.ug(0,n):J.mJ(0,n)}r=A.a9(s,m.a4(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a4(n,o+q)
if(m.gm(n)<l)throw A.b(A.az(p))}return r},
bT(a){return this.be(0,!0)}}
A.as.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.J(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.az(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a4(q,s);++r.c
return!0}}
A.cw.prototype={
gt(a){return new A.mX(J.E(this.a),this.b,A.n(this).i("mX<1,2>"))},
gm(a){return J.ag(this.a)},
gF(a){return J.bq(this.a)},
gH(a){return this.b.$1(J.bH(this.a))},
ga_(a){return this.b.$1(J.q7(this.a))},
gao(a){return this.b.$1(J.q8(this.a))},
a4(a,b){return this.b.$1(J.le(this.a,b))}}
A.eI.prototype={$iL:1}
A.mX.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.Z.prototype={
gm(a){return J.ag(this.a)},
a4(a,b){return this.b.$1(J.le(this.a,b))}}
A.aq.prototype={
gt(a){return new A.d1(J.E(this.a),this.b,this.$ti.i("d1<1>"))},
cE(a,b,c){return new A.cw(this,b,this.$ti.i("@<1>").Z(c).i("cw<1,2>"))}}
A.d1.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iQ.prototype={
gt(a){return new A.mb(J.E(this.a),this.b,B.aV,this.$ti.i("mb<1,2>"))}}
A.mb.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.f3.prototype={
gt(a){var s=this.a
return new A.oa(s.gt(s),this.b,A.n(this).i("oa<1>"))}}
A.iM.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.oR(r,s))return s
return r},
$iL:1}
A.oa.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.dm.prototype={
ba(a,b){A.dH(b,"count")
A.aY(b,"count")
return new A.dm(this.a,this.b+b,A.n(this).i("dm<1>"))},
gt(a){var s=this.a
return new A.nI(s.gt(s),this.b,A.n(this).i("nI<1>"))}}
A.fN.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
ba(a,b){A.dH(b,"count")
A.aY(b,"count")
return new A.fN(this.a,this.b+b,this.$ti)},
$iL:1}
A.nI.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.eJ.prototype={
gt(a){return B.aV},
gF(a){return!0},
gm(a){return 0},
gH(a){throw A.b(A.av())},
ga_(a){throw A.b(A.av())},
gao(a){throw A.b(A.av())},
a4(a,b){throw A.b(A.aA(b,0,0,"index",null))},
E(a,b){return!1},
ct(a,b){return!0},
dR(a,b){return this},
cE(a,b,c){return new A.eJ(c.i("eJ<0>"))},
ba(a,b){A.aY(b,"count")
return this},
ce(a,b){A.aY(b,"count")
return this},
be(a,b){var s=this.$ti.c
return b?J.ug(0,s):J.mJ(0,s)},
bT(a){return this.be(0,!0)},
cG(a){return A.vn(this.$ti.c)}}
A.m8.prototype={
k(){return!1},
gn(){throw A.b(A.av())}}
A.ed.prototype={
gt(a){return new A.oA(J.E(this.a),this.$ti.i("oA<1>"))}}
A.oA.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.dd.prototype={
gm(a){return J.ag(this.a)},
gF(a){return J.bq(this.a)},
gS(a){return J.d9(this.a)},
gH(a){return new A.a_(this.b,J.bH(this.a))},
gao(a){return new A.a_(this.b,J.q8(this.a))},
a4(a,b){return new A.a_(b+this.b,J.le(this.a,b))},
E(a,b){var s,r,q,p=null,o=null,n=!1
if(t.fe.b(b)){s=b.a
if(A.a5(s)){A.ak(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){n=J.fx(this.a,p-this.b)
q=n.gt(n)
return q.k()&&J.x(q.gn(),o)}return!1},
ce(a,b){A.dH(b,"count")
A.aY(b,"count")
return new A.dd(J.lg(this.a,b),this.b,A.n(this).i("dd<1>"))},
ba(a,b){A.dH(b,"count")
A.aY(b,"count")
return new A.dd(J.fx(this.a,b),b+this.b,A.n(this).i("dd<1>"))},
gt(a){return new A.dR(J.E(this.a),this.b,A.n(this).i("dR<1>"))}}
A.eH.prototype={
ga_(a){var s,r=this.a,q=J.J(r),p=q.gm(r)
if(p<=0)throw A.b(A.av())
s=q.ga_(r)
if(p!==q.gm(r))throw A.b(A.az(this))
return new A.a_(p-1+this.b,s)},
E(a,b){var s,r,q,p,o=null,n=null,m=!1
if(t.fe.b(b)){s=b.a
if(A.a5(s)){A.ak(s)
r=b.b
m=s>=this.b
n=r
o=s}}if(m){q=o-this.b
m=this.a
p=J.J(m)
return q<p.gm(m)&&J.x(p.a4(m,q),n)}return!1},
ce(a,b){A.dH(b,"count")
A.aY(b,"count")
return new A.eH(J.lg(this.a,b),this.b,this.$ti)},
ba(a,b){A.dH(b,"count")
A.aY(b,"count")
return new A.eH(J.fx(this.a,b),this.b+b,this.$ti)},
$iL:1}
A.dR.prototype={
k(){if(++this.c>=0&&this.a.k())return!0
this.c=-2
return!1},
gn(){var s=this.c
return s>=0?new A.a_(this.b+s,this.a.gn()):A.u(A.av())}}
A.iU.prototype={
sm(a,b){throw A.b(A.a2(u.O))},
u(a,b){throw A.b(A.a2("Cannot add to a fixed-length list"))}}
A.om.prototype={
j(a,b,c){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.a2("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.a2("Cannot add to an unmodifiable list"))},
cI(a,b){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.hE.prototype={}
A.bE.prototype={
gm(a){return J.ag(this.a)},
a4(a,b){var s=this.a,r=J.J(s)
return r.a4(s,r.gm(s)-1-b)}}
A.k1.prototype={
gK(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gK(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.k1&&this.a===b.a}}
A.kR.prototype={}
A.a_.prototype={$r:"+(1,2)",$s:1}
A.kz.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.kA.prototype={$r:"+controller,sync(1,2)",$s:3}
A.i_.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.pl.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.ek.prototype={$r:"+(1,2,3)",$s:7}
A.fh.prototype={$r:"+(1,2,3,4)",$s:8}
A.pm.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.iI.prototype={}
A.fJ.prototype={
cr(a,b,c){var s=A.n(this)
return A.FR(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gS(a){return this.gm(this)!==0},
l(a){return A.vH(this)},
j(a,b,c){A.JN()},
ga0(){return new A.i4(this.vU(),A.n(this).i("i4<V<1,2>>"))},
vU(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ga0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gJ(),o=o.gt(o),n=A.n(s).i("V<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.V(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aR(a,b,c,d){var s=A.t(c,d)
this.a5(0,new A.rg(this,b,s))
return s},
$iF:1}
A.rg.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aE.prototype={
gm(a){return this.b.length},
gm8(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a5(a,b){var s,r,q=this.gm8(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gJ(){return new A.fe(this.gm8(),this.$ti.i("fe<1>"))},
gb0(){return new A.fe(this.b,this.$ti.i("fe<2>"))}}
A.fe.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gS(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hW(s,s.length,this.$ti.i("hW<1>"))}}
A.hW.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iY.prototype={
e8(){var s=this,r=s.$map
if(r==null){r=new A.j6(s.$ti.i("j6<1,2>"))
A.Ia(s.a,r)
s.$map=r}return r},
I(a){return this.e8().I(a)},
h(a,b){return this.e8().h(0,b)},
a5(a,b){this.e8().a5(0,b)},
gJ(){var s=this.e8()
return new A.T(s,A.n(s).i("T<1>"))},
gb0(){var s=this.e8()
return new A.ao(s,A.n(s).i("ao<2>"))},
gm(a){return this.e8().a}}
A.iJ.prototype={
u(a,b){A.JO()}}
A.dK.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gS(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hW(s,s.length,r.$ti.i("hW<1>"))},
E(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
cG(a){return A.c0(this,this.$ti.c)}}
A.ua.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.j1&&this.a.P(0,b.a)&&A.EV(this)===A.EV(b)},
gK(a){return A.ch(this.a,A.EV(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.C([A.bT(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.j1.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.P0(A.pY(this.a),this.$ti)}}
A.x0.prototype={
$0(){return B.w.w8(1000*this.a.now())},
$S:10}
A.jP.prototype={}
A.yL.prototype={
cb(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.jy.prototype={
l(a){return"Null check operator used on a null value"}}
A.mM.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ol.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.na.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iI:1}
A.iO.prototype={}
A.kC.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaM:1}
A.eC.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Iz(r==null?"unknown":r)+"'"},
gam(a){var s=A.pY(this)
return A.bT(s==null?A.bo(this):s)},
gzf(){return this},
$C:"$1",
$R:1,
$D:null}
A.qG.prototype={$C:"$0",$R:0}
A.qH.prototype={$C:"$2",$R:2}
A.yz.prototype={}
A.y8.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Iz(s)+"'"}}
A.iz.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.iz))return!1
return this.$_target===b.$_target&&this.a===b.a},
gK(a){return(A.l5(this.a)^A.eX(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.nj(this.a)+"'")}}
A.nB.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bM.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.T(this,A.n(this).i("T<1>"))},
gb0(){return new A.ao(this,A.n(this).i("ao<2>"))},
ga0(){return new A.aK(this,A.n(this).i("aK<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.np(a)},
np(a){var s=this.d
if(s==null)return!1
return this.dI(this.m3(s,a),a)>=0},
D(a,b){b.a5(0,new A.ui(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nq(b)},
nq(a){var s,r,q=this.d
if(q==null)return null
s=this.m3(q,a)
r=this.dI(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.lr(s==null?q.b=q.jR():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.lr(r==null?q.c=q.jR():r,b,c)}else q.ns(b,c)},
ns(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jR()
s=p.eC(a)
r=o[s]
if(r==null)o[s]=[p.jf(a,b)]
else{q=p.dI(r,a)
if(q>=0)r[q].b=b
else r.push(p.jf(a,b))}},
nH(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
G(a,b){var s=this
if(typeof b=="string")return s.mu(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.mu(s.c,b)
else return s.nr(b)},
nr(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eC(a)
r=n[s]
q=o.dI(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mN(p)
if(r.length===0)delete n[s]
return p.b},
aq(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.je()}},
a5(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.az(s))
r=r.c}},
lr(a,b,c){var s=a[b]
if(s==null)a[b]=this.jf(b,c)
else s.b=c},
mu(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mN(s)
delete a[b]
return s.b},
je(){this.r=this.r+1&1073741823},
jf(a,b){var s,r=this,q=new A.vl(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.je()
return q},
mN(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.je()},
eC(a){return J.ab(a)&1073741823},
m3(a,b){return a[this.eC(b)]},
dI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.vH(this)},
jR(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ui.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.vl.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bN(s,s.r,s.e,this.$ti.i("bN<1>"))},
E(a,b){return this.a.I(b)}}
A.bN.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ao.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.b0(s,s.r,s.e,this.$ti.i("b0<1>"))}}
A.b0.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aK.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.mU(s,s.r,s.e,this.$ti.i("mU<1,2>"))}}
A.mU.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.V(s.a,s.b,r.$ti.i("V<1,2>"))
r.c=s.c
return!0}}}
A.j7.prototype={
eC(a){return A.l5(a)&1073741823},
dI(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.j6.prototype={
eC(a){return A.Ol(a)&1073741823},
dI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.D4.prototype={
$1(a){return this.a(a)},
$S:37}
A.D5.prototype={
$2(a,b){return this.a(a,b)},
$S:208}
A.D6.prototype={
$1(a){return this.a(a)},
$S:72}
A.hZ.prototype={
gam(a){return A.bT(this.m4())},
m4(){return A.OJ(this.$r,this.hw())},
l(a){return this.mL(!1)},
mL(a){var s,r,q,p,o,n=this.qO(),m=this.hw(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.G3(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qO(){var s,r=this.$s
while($.Bg.length<=r)$.Bg.push(null)
s=$.Bg[r]
if(s==null){s=this.qg()
$.Bg[r]=s}return s},
qg(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.FL(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fY(j,k)}}
A.pi.prototype={
hw(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.pi&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gK(a){return A.ch(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.pj.prototype={
hw(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.pj&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gK(a){var s=this
return A.ch(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.pk.prototype={
hw(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.pk&&this.$s===b.$s&&A.M7(this.a,b.a)},
gK(a){return A.ch(this.$s,A.w9(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eO.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gme(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.DQ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
grw(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.DQ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
qh(){var s,r=this.a
if(!B.a.E(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ez(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hY(s)},
ki(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.oH(this,b,c)},
i_(a,b){return this.ki(0,b,0)},
qL(a,b){var s,r=this.gme()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hY(s)},
qK(a,b){var s,r=this.grw()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hY(s)},
eG(a,b,c){if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,null,null))
return this.qK(b,c)}}
A.hY.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieS:1,
$int:1}
A.oH.prototype={
gt(a){return new A.oI(this.a,this.b,this.c)}}
A.oI.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.qL(l,s)
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
A.hw.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.xJ(b,null))
return this.c},
$ieS:1,
gR(){return this.a}}
A.py.prototype={
gt(a){return new A.BC(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hw(r,s)
throw A.b(A.av())}}
A.BC.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hw(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.oR.prototype={
aE(){var s=this.b
if(s===this)throw A.b(new A.dT("Local '"+this.a+"' has not been initialized."))
return s},
bH(){var s=this.b
if(s===this)throw A.b(A.FQ(this.a))
return s},
sii(a){var s=this
if(s.b!==s)throw A.b(new A.dT("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.h5.prototype={
gam(a){return B.e2},
i1(a,b,c){A.ib(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
n_(a){return this.i1(a,0,null)},
mZ(a,b,c){A.ib(a,b,c)
if(c==null)c=B.c.L(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
i0(a,b,c){A.ib(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mY(a){return this.i0(a,0,null)},
$ian:1,
$iey:1}
A.h4.prototype={$ih4:1}
A.jt.prototype={
gac(a){if(((a.$flags|0)&2)!==0)return new A.pG(a.buffer)
else return a.buffer},
rm(a,b,c,d){var s=A.aA(b,0,c,d,null)
throw A.b(s)},
lC(a,b,c,d){if(b>>>0!==b||b>c)this.rm(a,b,c,d)}}
A.pG.prototype={
i1(a,b,c){var s=A.c2(this.a,b,c)
s.$flags=3
return s},
n_(a){return this.i1(0,0,null)},
mZ(a,b,c){var s=A.FX(this.a,b,c)
s.$flags=3
return s},
i0(a,b,c){var s=A.FW(this.a,b,c)
s.$flags=3
return s},
mY(a){return this.i0(0,0,null)},
$iey:1}
A.js.prototype={
gam(a){return B.e3},
$ian:1,
$iDy:1}
A.h6.prototype={
gm(a){return a.length},
mE(a,b,c,d,e){var s,r,q=a.length
this.lC(a,b,q,"start")
this.lC(a,c,q,"end")
if(b>c)throw A.b(A.aA(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.U(e,null))
r=d.length
if(r-e<s)throw A.b(A.A("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibk:1,
$ic_:1}
A.e0.prototype={
h(a,b){A.dC(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.K(a)
A.dC(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.K(a,5)
if(t.dQ.b(d)){this.mE(a,b,c,d,e)
return}this.lo(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$iq:1}
A.c1.prototype={
j(a,b,c){a.$flags&2&&A.K(a)
A.dC(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.K(a,5)
if(t.aj.b(d)){this.mE(a,b,c,d,e)
return}this.lo(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$iq:1}
A.n3.prototype={
gam(a){return B.e5},
U(a,b,c){return new Float32Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$itw:1}
A.n4.prototype={
gam(a){return B.e6},
U(a,b,c){return new Float64Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$itx:1}
A.n5.prototype={
gam(a){return B.e7},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$iub:1}
A.n6.prototype={
gam(a){return B.e8},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$iuc:1}
A.n7.prototype={
gam(a){return B.e9},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$iud:1}
A.ju.prototype={
gam(a){return B.ef},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$iyN:1}
A.jv.prototype={
gam(a){return B.eg},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$iyO:1}
A.jw.prototype={
gam(a){return B.eh},
gm(a){return a.length},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$iyP:1}
A.eU.prototype={
gam(a){return B.ei},
gm(a){return a.length},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8Array(a.subarray(b,A.d5(b,c,a.length)))},
bh(a,b){return this.U(a,b,null)},
$ian:1,
$ieU:1,
$icZ:1}
A.kv.prototype={}
A.kw.prototype={}
A.kx.prototype={}
A.ky.prototype={}
A.cA.prototype={
i(a){return A.kL(v.typeUniverse,this,a)},
Z(a){return A.GU(v.typeUniverse,this,a)}}
A.p5.prototype={}
A.pD.prototype={
l(a){return A.c7(this.a,null)}}
A.p2.prototype={
l(a){return this.a}}
A.kH.prototype={$idu:1}
A.zD.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:28}
A.zC.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:195}
A.zE.prototype={
$0(){this.a.$0()},
$S:2}
A.zF.prototype={
$0(){this.a.$0()},
$S:2}
A.kG.prototype={
pD(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.er(new A.BG(this,b),0),a)
else throw A.b(A.a2("`setTimeout()` not found."))},
pE(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.er(new A.BF(this,a,Date.now(),b),0),a)
else throw A.b(A.a2("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.a2("Canceling a timer."))},
$ids:1}
A.BG.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.BF.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.jc(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.k9.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aN(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.lB(a)
else s.dl(a)}},
bz(a,b){var s
if(b==null)b=A.iv(a)
s=this.a
if(this.b)s.ap(new A.ar(a,b))
else s.cL(new A.ar(a,b))},
aX(a){return this.bz(a,null)},
$iiF:1}
A.C7.prototype={
$1(a){return this.a.$2(0,a)},
$S:29}
A.C8.prototype={
$2(a,b){this.a.$2(1,new A.iO(a,b))},
$S:211}
A.CB.prototype={
$2(a,b){this.a(a,b)},
$S:99}
A.C5.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaW().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.C6.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:28}
A.oK.prototype={
pz(a,b){var s=new A.zH(a)
this.a=A.nS(new A.zJ(this,a),new A.zK(s),null,new A.zL(this,s),!1,b)}}
A.zH.prototype={
$0(){A.l8(new A.zI(this.a))},
$S:2}
A.zI.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.zK.prototype={
$0(){this.a.$0()},
$S:0}
A.zL.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.zJ.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.w($.C,t._)
if(s.b){s.b=!1
A.l8(new A.zG(this.b))}return s.c}},
$S:118}
A.zG.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.kr.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.pA.prototype={
gn(){return this.b},
tw(a,b){var s,r,q
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
o.d=null}q=o.tw(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.GO
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.GO
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.A("sync*"))}return!1},
zg(a){var s,r,q=this
if(a instanceof A.i4){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.i4.prototype={
gt(a){return new A.pA(this.a(),this.$ti.i("pA<1>"))}}
A.ar.prototype={
l(a){return A.r(this.a)},
$iah:1,
gcJ(){return this.b}}
A.aZ.prototype={}
A.f8.prototype={
c1(){},
c2(){}}
A.kf.prototype={
gcK(){return new A.aZ(this,A.n(this).i("aZ<1>"))},
giy(){return(this.c&4)!==0},
gjP(){return this.c<4},
tt(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
k9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.GF(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.oO(r,a,s.c)
n=A.zS(r,b)
m=c==null?A.CD():c
l=new A.f8(j,o,n,r.cd(m,t.H),r,q|p,s.i("f8<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pU(j.a)
return l},
mo(a){var s,r=this
A.n(r).i("f8<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.tt(a)
if((r.c&2)===0&&r.d==null)r.q2()}return null},
mp(a){},
mq(a){},
jh(){if((this.c&4)!==0)return new A.bv("Cannot add new events after calling close")
return new A.bv("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjP())throw A.b(this.jh())
this.cT(b)},
bo(a,b){var s
if(!this.gjP())throw A.b(this.jh())
s=A.fl(a,b)
this.cU(s.a,s.b)},
kh(a){return this.bo(a,null)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjP())throw A.b(q.jh())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.C,t.D)
q.dz()
return r},
aM(a,b){this.cU(a,b)},
b1(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aN(null)},
q2(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aN(null)}A.pU(this.b)},
$ibL:1}
A.ka.prototype={
cT(a){var s,r
for(s=this.d,r=this.$ti.i("cl<1>");s!=null;s=s.ch)s.cj(new A.cl(a,r))},
cU(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.cj(new A.hR(a,b))},
dz(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.cj(B.ae)
else this.r.aN(null)}}
A.tG.prototype={
$0(){this.c.a(null)
this.b.cM(null)},
$S:0}
A.tI.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.ap(new A.ar(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.ap(new A.ar(q,r))}},
$S:14}
A.tH.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.b5(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aO(s,n)}m.c.dl(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ap(new A.ar(s,l))}},
$S(){return this.d.i("W(0)")}}
A.tB.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(k,aM)")}}
A.ob.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iI:1}
A.tC.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("z<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aB(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("z<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.p)(r),++p)n.push(r[p].b)
l.a.aX(new A.jC(B.b.kB(s,A.NX()),a,q.i("jC<q<0?>,q<ar?>>")))}},
$S:9}
A.jC.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcJ(){var s=this.c
s=s==null?null:s.b
return s==null?A.ah.prototype.gcJ.call(this):s}}
A.kp.prototype={
ue(a){this.a.b6(new A.AC(this,a),new A.AD(this,a),t.P)}}
A.AC.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.AD.prototype={
$2(a,b){this.a.c=new A.ar(a,b)
this.b.$1(1)},
$S:6}
A.AB.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.f9.prototype={
bz(a,b){if((this.a.a&30)!==0)throw A.b(A.A("Future already completed"))
this.ap(A.fl(a,b))},
aX(a){return this.bz(a,null)},
$iiF:1}
A.aG.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.aN(a)},
ak(){return this.aB(null)},
ap(a){this.a.cL(a)}}
A.at.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.cM(a)},
ak(){return this.aB(null)},
ap(a){this.a.ap(a)}}
A.cm.prototype={
x3(a){if((this.c&15)!==6)return!0
return this.b.b.eQ(this.d,a.a,t.y,t.K)},
wm(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kZ(r,n,a.b,p,o,t.l)
else q=m.eQ(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.B(s))){if((this.c&1)!==0)throw A.b(A.U("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.U("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
b6(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aD(b,"onError",u.w))}else{a=q.dM(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.Ht(b,q)}s=new A.w($.C,c.i("w<0>"))
r=b==null?1:3
this.e_(new A.cm(s,r,a,b,this.$ti.i("@<1>").Z(c).i("cm<1,2>")))
return s},
W(a,b){return this.b6(a,null,b)},
mJ(a,b,c){var s=new A.w($.C,c.i("w<0>"))
this.e_(new A.cm(s,19,a,b,this.$ti.i("@<1>").Z(c).i("cm<1,2>")))
return s},
kl(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=A.Ht(a,r)
this.e_(new A.cm(q,2,null,a,s.i("cm<1,1>")))
return q},
b8(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=r.cd(a,t.z)
this.e_(new A.cm(q,8,a,null,s.i("cm<1,1>")))
return q},
tL(a){this.a=this.a&1|16
this.c=a},
hj(a){this.a=a.a&30|this.a&1
this.c=a.c},
e_(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.e_(a)
return}s.hj(r)}s.b.dg(new A.AE(s,a))}},
ml(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ml(a)
return}n.hj(s)}m.a=n.hJ(a)
n.b.dg(new A.AJ(m,n))}},
fd(){var s=this.c
this.c=null
return this.hJ(s)},
hJ(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cM(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.AH(a,r,!0)
else{s=r.fd()
r.a=8
r.c=a
A.fc(r,s)}},
dl(a){var s=this,r=s.fd()
s.a=8
s.c=a
A.fc(s,r)},
qf(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gcs()===r.gcs())}else s=!1
if(s)return
q=p.fd()
p.hj(a)
A.fc(p,q)},
ap(a){var s=this.fd()
this.tL(a)
A.fc(this,s)},
qe(a,b){this.ap(new A.ar(a,b))},
aN(a){if(this.$ti.i("y<1>").b(a)){this.lB(a)
return}this.ly(a)},
ly(a){this.a^=2
this.b.dg(new A.AG(this,a))},
lB(a){A.AH(a,this,!1)
return},
cL(a){this.a^=2
this.b.dg(new A.AF(this,a))},
h0(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.C,r.$ti)
q.aN(r)
return q}s=new A.w($.C,r.$ti)
q.a=null
q.a=A.c4(a,new A.AP(s,a))
r.b6(new A.AQ(q,r,s),new A.AR(q,s),t.P)
return s},
$iy:1}
A.AE.prototype={
$0(){A.fc(this.a,this.b)},
$S:0}
A.AJ.prototype={
$0(){A.fc(this.b,this.a.a)},
$S:0}
A.AI.prototype={
$0(){A.AH(this.a.a,this.b,!0)},
$S:0}
A.AG.prototype={
$0(){this.a.dl(this.b)},
$S:0}
A.AF.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.AM.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b5(q.d,t.z)}catch(p){s=A.B(p)
r=A.af(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.iv(q)
n=k.a
n.c=new A.ar(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.b6(new A.AN(l,m),new A.AO(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.AN.prototype={
$1(a){this.a.qf(this.b)},
$S:28}
A.AO.prototype={
$2(a,b){this.a.ap(new A.ar(a,b))},
$S:6}
A.AL.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.eQ(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.B(n)
r=A.af(n)
q=s
p=r
if(p==null)p=A.iv(q)
o=this.a
o.c=new A.ar(q,p)
o.b=!0}},
$S:0}
A.AK.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.x3(s)&&p.a.e!=null){p.c=p.a.wm(s)
p.b=!1}}catch(o){r=A.B(o)
q=A.af(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.iv(p)
m=l.b
m.c=new A.ar(p,n)
p=m}p.b=!0}},
$S:0}
A.AP.prototype={
$0(){var s=A.E7()
this.a.ap(new A.ar(new A.ob("Future not completed",this.b),s))},
$S:0}
A.AQ.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.dl(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.AR.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.ap(new A.ar(a,b))}},
$S:6}
A.oJ.prototype={}
A.ad.prototype={
eD(a){var s=new A.w($.C,t.os),r=new A.a7(""),q=this.aa(null,!0,new A.yc(s,r),s.gjo())
q.iH(new A.yd(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.C,t.hy)
s.a=0
this.aa(new A.ye(s,this),!0,new A.yf(s,r),r.gjo())
return r},
gH(a){var s=new A.w($.C,A.n(this).i("w<ad.T>")),r=this.aa(null,!0,new A.ya(s),s.gjo())
r.iH(new A.yb(this,r,s))
return s}}
A.yc.prototype={
$0(){var s=this.b.a
this.a.cM(s.charCodeAt(0)==0?s:s)},
$S:0}
A.yd.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.B(o)
r=A.af(o)
q=s
p=r
n=A.kS(q,p)
if(n==null)q=new A.ar(q,p)
else q=n
A.ME(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(ad.T)")}}
A.ye.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(ad.T)")}}
A.yf.prototype={
$0(){this.b.cM(this.a.a)},
$S:0}
A.ya.prototype={
$0(){var s,r=A.E7(),q=new A.bv("No element")
A.nl(q,r)
s=A.kS(q,r)
if(s==null)s=new A.ar(q,r)
this.a.ap(s)},
$S:0}
A.yb.prototype={
$1(a){A.MF(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(ad.T)")}}
A.jZ.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bB(a,b,c){return this.aa(a,null,b,c)},
b2(a){return this.aa(a,null,null,null)}}
A.el.prototype={
gcK(){return new A.bi(this,A.n(this).i("bi<1>"))},
giy(){return(this.b&4)!==0},
grX(){if((this.b&8)===0)return this.a
return this.a.c},
ho(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.ej(A.n(q).i("ej<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.ej(A.n(q).i("ej<1>")):s},
gaW(){var s=this.a
return(this.b&8)!==0?s.c:s},
bZ(){if((this.b&4)!==0)return new A.bv("Cannot add event after closing")
return new A.bv("Cannot add event while adding a stream")},
uy(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bZ())
if((o&2)!==0){o=new A.w($.C,t._)
o.aN(null)
return o}o=p.a
s=b===!0
r=new A.w($.C,t._)
q=s?A.Lv(p):p.gpJ()
q=a.aa(p.gpP(),s,p.gq5(),q)
s=p.b
if((s&1)!==0?(p.gaW().e&4)!==0:(s&2)===0)q.bb()
p.a=new A.kD(o,r,q,A.n(p).i("kD<1>"))
p.b|=8
return r},
lV(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.eu():new A.w($.C,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bZ())
this.aD(b)},
bo(a,b){var s
if(this.b>=4)throw A.b(this.bZ())
s=A.fl(a,b)
this.aM(s.a,s.b)},
kh(a){return this.bo(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lV()
if(r>=4)throw A.b(s.bZ())
s.lD()
return s.lV()},
lD(){var s=this.b|=4
if((s&1)!==0)this.dz()
else if((s&3)===0)this.ho().u(0,B.ae)},
aD(a){var s=this,r=s.b
if((r&1)!==0)s.cT(a)
else if((r&3)===0)s.ho().u(0,new A.cl(a,A.n(s).i("cl<1>")))},
aM(a,b){var s=this.b
if((s&1)!==0)this.cU(a,b)
else if((s&3)===0)this.ho().u(0,new A.hR(a,b))},
b1(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aN(null)},
k9(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.A("Stream has already been listened to."))
s=A.LN(p,a,b,c,d,A.n(p).c)
r=p.grX()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b3()}else p.a=s
s.tM(r)
s.jC(new A.By(p))
return s},
mo(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.B(o)
p=A.af(o)
n=new A.w($.C,t.D)
n.cL(new A.ar(q,p))
k=n}else k=k.b8(s)
m=new A.Bx(l)
if(k!=null)k=k.b8(m)
else m.$0()
return k},
mp(a){if((this.b&8)!==0)this.a.b.bb()
A.pU(this.e)},
mq(a){if((this.b&8)!==0)this.a.b.b3()
A.pU(this.f)},
$ibL:1}
A.By.prototype={
$0(){A.pU(this.a.d)},
$S:0}
A.Bx.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aN(null)},
$S:0}
A.pB.prototype={
cT(a){this.gaW().aD(a)},
cU(a,b){this.gaW().aM(a,b)},
dz(){this.gaW().b1()}}
A.kb.prototype={
cT(a){this.gaW().cj(new A.cl(a,A.n(this).i("cl<1>")))},
cU(a,b){this.gaW().cj(new A.hR(a,b))},
dz(){this.gaW().cj(B.ae)}}
A.d2.prototype={}
A.i5.prototype={}
A.bi.prototype={
gK(a){return(A.eX(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bi&&b.a===this.a}}
A.eg.prototype={
hB(){return this.w.mo(this)},
c1(){this.w.mp(this)},
c2(){this.w.mq(this)}}
A.oG.prototype={
A(){var s=this.b.A()
return s.b8(new A.zy(this))}}
A.zz.prototype={
$2(a,b){var s=this.a
s.aM(a,b)
s.b1()},
$S:6}
A.zy.prototype={
$0(){this.a.a.aN(null)},
$S:2}
A.kD.prototype={}
A.bb.prototype={
tM(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.h9(s)}},
iH(a){this.a=A.oO(this.d,a,A.n(this).i("bb.T"))},
bb(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jC(q.gf5())},
b3(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.h9(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jC(s.gf6())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.jk()
r=s.f
return r==null?$.eu():r},
jk(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hB()},
aD(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cT(a)
else s.cj(new A.cl(a,A.n(s).i("cl<bb.T>")))},
aM(a,b){var s
if(t.C.b(a))A.nl(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cU(a,b)
else this.cj(new A.hR(a,b))},
b1(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.dz()
else s.cj(B.ae)},
c1(){},
c2(){},
hB(){return null},
cj(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.ej(A.n(r).i("ej<bb.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.h9(r)}},
cT(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.h_(s.a,a,A.n(s).i("bb.T"))
s.e=(s.e&4294967231)>>>0
s.jm((r&4)!==0)},
cU(a,b){var s,r=this,q=r.e,p=new A.zU(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.jk()
s=r.f
if(s!=null&&s!==$.eu())s.b8(p)
else p.$0()}else{p.$0()
r.jm((q&4)!==0)}},
dz(){var s,r=this,q=new A.zT(r)
r.jk()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.eu())s.b8(q)
else q.$0()},
jC(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.jm((r&4)!==0)},
jm(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.c1()
else q.c2()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.h9(q)},
$ibw:1}
A.zU.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nQ(s,o,this.c,r,t.l)
else q.h_(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.zT.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fZ(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.i3.prototype={
aa(a,b,c,d){return this.a.k9(a,d,c,b===!0)},
bB(a,b,c){return this.aa(a,null,b,c)},
b2(a){return this.aa(a,null,null,null)},
nw(a,b){return this.aa(a,null,null,b)}}
A.p1.prototype={
geH(){return this.a},
seH(a){return this.a=a}}
A.cl.prototype={
kU(a){a.cT(this.b)}}
A.hR.prototype={
kU(a){a.cU(this.b,this.c)}}
A.Au.prototype={
kU(a){a.dz()},
geH(){return null},
seH(a){throw A.b(A.A("No events after a done."))}}
A.ej.prototype={
h9(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.l8(new A.Bf(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.seH(b)
s.c=b}}}
A.Bf.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.geH()
q.b=r
if(r==null)q.c=null
s.kU(this.b)},
$S:0}
A.hS.prototype={
iH(a){},
bb(){var s=this.a
if(s>=0)this.a=s+2},
b3(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.l8(s.gmh())}else s.a=r},
A(){this.a=-1
this.c=null
return $.eu()},
rM(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fZ(s)}}else r.a=q},
$ibw:1}
A.c5.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.C,t.g5)
r.b=s
r.c=!1
q.b3()
return s}throw A.b(A.A("Already waiting for next."))}return r.rl()},
rl(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.C,t.g5)
q.b=s
r=p.aa(q.grE(),!0,q.grG(),q.grI())
if(q.b!=null)q.a=r
return s}return $.IF()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aN(!1)
else s.c=!1
return r.A()}return $.eu()},
rF(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cM(!0)
if(q.c){r=q.a
if(r!=null)r.bb()}},
rJ(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ap(new A.ar(a,b))
else q.cL(new A.ar(a,b))},
rH(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.dl(!1)
else q.ly(!1)}}
A.kk.prototype={
aa(a,b,c,d){return A.GF(c,this.$ti.c)},
bB(a,b,c){return this.aa(a,null,b,c)}}
A.dA.prototype={
aa(a,b,c,d){var s=null,r=new A.ku(s,s,s,s,this.$ti.i("ku<1>"))
r.d=new A.Bd(this,r)
return r.k9(a,d,c,b===!0)},
bB(a,b,c){return this.aa(a,null,b,c)},
b2(a){return this.aa(a,null,null,null)}}
A.Bd.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.ku.prototype={
uz(a){var s=this.b
if(s>=4)throw A.b(this.bZ())
if((s&1)!==0)this.gaW().aD(a)},
uQ(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bZ())
r|=4
s.b=r
if((r&1)!==0)s.gaW().b1()},
gcK(){throw A.b(A.a2("Not available"))},
$idZ:1}
A.Ca.prototype={
$0(){return this.a.ap(this.b)},
$S:0}
A.Cb.prototype={
$0(){return this.a.cM(this.b)},
$S:0}
A.kn.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.oO(r,a,s.y[1]),n=A.zS(r,d),m=c==null?A.CD():c
s=new A.hV(this,o,n,r.cd(m,t.H),r,q|p,s.i("hV<1,2>"))
s.x=this.a.bB(s.gjD(),s.gjF(),s.gjH())
return s},
bB(a,b,c){return this.aa(a,null,b,c)}}
A.hV.prototype={
aD(a){if((this.e&2)!==0)return
this.jb(a)},
aM(a,b){if((this.e&2)!==0)return
this.lp(a,b)},
c1(){var s=this.x
if(s!=null)s.bb()},
c2(){var s=this.x
if(s!=null)s.b3()},
hB(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jE(a){this.w.r6(a,this)},
jI(a,b){this.aM(a,b)},
jG(){this.b1()}}
A.ff.prototype={
r6(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.B(q)
r=A.af(q)
p=s
o=r
n=A.kS(p,o)
if(n!=null){p=n.a
o=n.b}b.aM(p,o)
return}b.aD(m)}}
A.kl.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.u(A.A("Stream is already closed"))
s.jb(b)},
bo(a,b){this.a.aM(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.u(A.A("Stream is already closed"))
s.lq()},
$ibL:1}
A.i1.prototype={
aD(a){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.jb(a)},
aM(a,b){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.lp(a,b)},
b1(){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.lq()},
c1(){var s=this.x
if(s!=null)s.bb()},
c2(){var s=this.x
if(s!=null)s.b3()},
hB(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jE(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.u(0,a)}catch(p){s=A.B(p)
r=A.af(p)
this.aM(s,r)}},
jI(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.bo(a,b)}catch(p){s=A.B(p)
r=A.af(p)
if(s===a)this.aM(a,b)
else this.aM(s,r)}},
jG(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.q()}catch(p){s=A.B(p)
r=A.af(p)
this.aM(s,r)}}}
A.ke.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.oO(r,a,s.y[1]),n=A.zS(r,d),m=c==null?A.CD():c,l=new A.i1(o,n,r.cd(m,t.H),r,q|p,s.i("i1<1,2>"))
l.w=this.a.$1(new A.kl(l,s.i("kl<2>")))
l.x=this.b.bB(l.gjD(),l.gjF(),l.gjH())
return l},
bB(a,b,c){return this.aa(a,null,b,c)}}
A.C0.prototype={}
A.C2.prototype={}
A.C1.prototype={}
A.BZ.prototype={}
A.C_.prototype={}
A.BY.prototype={}
A.BV.prototype={}
A.pN.prototype={}
A.BU.prototype={}
A.BT.prototype={}
A.BX.prototype={}
A.BW.prototype={}
A.pM.prototype={
we(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.pO.prototype={}
A.pL.prototype={
f9(a,b,c){var s,r,q,p,o,n,m=this.gjL(),l=m.a
if(l===B.i){A.kZ(b,c)
return}o=l.gkR()
o.toString
s=o
r=$.C
try{$.C=s
m.we(l,l.gbk(),a,b,c)
$.C=r}catch(n){q=A.B(n)
p=A.af(n)
$.C=r
o=b===q?c:p
s.f9(l,q,o)}},
$iS:1}
A.oW.prototype={
glS(){var s=this.ax
return s==null?this.ax=new A.i9(this):s},
gbk(){return this.ay.glS()},
gcs(){return this.as.a},
fZ(a){var s,r,q
try{this.b5(a,t.H)}catch(q){s=A.B(q)
r=A.af(q)
this.f9(this,s,r)}},
h_(a,b,c){var s,r,q
try{this.eQ(a,b,t.H,c)}catch(q){s=A.B(q)
r=A.af(q)
this.f9(this,s,r)}},
nQ(a,b,c,d,e){var s,r,q
try{this.kZ(a,b,c,t.H,d,e)}catch(q){s=A.B(q)
r=A.af(q)
this.f9(this,s,r)}},
kk(a,b){return new A.Aq(this,this.cd(a,b),b)},
uL(a,b,c){return new A.As(this,this.dM(a,b,c),c,b)},
fm(a){return new A.Ap(this,this.cd(a,t.H))},
i4(a,b){return new A.Ar(this,this.dM(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aS)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.tq(q,b)},
tq(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkR().gkg()
if(s===B.aS)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fE(a,b){this.f9(this,a,b)},
nj(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gbk(),this,a,b)},
b5(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gbk(),this,a,b)},
eQ(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gbk(),this,a,b,c,d)},
kZ(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gbk(),this,a,b,c,d,e,f)},
cd(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gbk(),this,a,b)},
dM(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gbk(),this,a,b,c)},
fT(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gbk(),this,a,b,c,d)},
ng(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gbk(),this,a,b)},
dg(a){var s=this.w,r=s.a
return s.b.$4(r,r.gbk(),this,a)},
kq(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gbk(),this,a,b)},
kp(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gbk(),this,a,b)},
gmw(){return this.a},
gmA(){return this.b},
gmy(){return this.c},
gms(){return this.d},
gmt(){return this.e},
gmr(){return this.f},
glX(){return this.r},
gk6(){return this.w},
glO(){return this.x},
glN(){return this.y},
gmm(){return this.z},
gm1(){return this.Q},
gjL(){return this.as},
gkg(){return this.at},
gkR(){return this.ay}}
A.Aq.prototype={
$0(){return this.a.b5(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.As.prototype={
$1(a){var s=this
return s.a.eQ(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").Z(this.c).i("1(2)")}}
A.Ap.prototype={
$0(){return this.a.fZ(this.b)},
$S:0}
A.Ar.prototype={
$1(a){return this.a.h_(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.pp.prototype={
gmw(){return B.ez},
gmA(){return B.ey},
gmy(){return B.ex},
gms(){return B.ev},
gmt(){return B.ew},
gmr(){return B.eu},
glX(){return B.eq},
gk6(){return B.eA},
glO(){return B.ep},
glN(){return B.eo},
gmm(){return B.et},
gm1(){return B.er},
gjL(){return B.es},
gkg(){return B.aS},
gkR(){return null},
glS(){var s=$.Bk
return s==null?$.Bk=new A.i9(this):s},
gbk(){var s=$.Bk
return s==null?$.Bk=new A.i9(this):s},
gcs(){return this},
fZ(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.Cw(null,null,this,a)}catch(q){s=A.B(q)
r=A.af(q)
A.kZ(s,r)}},
h_(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.Cx(null,null,this,a,b)}catch(q){s=A.B(q)
r=A.af(q)
A.kZ(s,r)}},
nQ(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.EI(null,null,this,a,b,c)}catch(q){s=A.B(q)
r=A.af(q)
A.kZ(s,r)}},
kk(a,b){return new A.Bm(this,a,b)},
fm(a){return new A.Bl(this,a)},
i4(a,b){return new A.Bn(this,a,b)},
h(a,b){return null},
fE(a,b){A.kZ(a,b)},
nj(a,b){return A.HA(null,null,this,a,b)},
b5(a){if($.C===B.i)return a.$0()
return A.Cw(null,null,this,a)},
eQ(a,b){if($.C===B.i)return a.$1(b)
return A.Cx(null,null,this,a,b)},
kZ(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.EI(null,null,this,a,b,c)},
cd(a){return a},
dM(a){return a},
fT(a){return a},
ng(a,b){return null},
dg(a){A.Cy(null,null,this,a)},
kq(a,b){return A.Ed(a,b)},
kp(a,b){return A.Gf(a,b)}}
A.Bm.prototype={
$0(){return this.a.b5(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Bl.prototype={
$0(){return this.a.fZ(this.b)},
$S:0}
A.Bn.prototype={
$1(a){return this.a.h_(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.i9.prototype={$iaw:1}
A.Cv.prototype={
$0(){A.Fy(this.a,this.b)},
$S:0}
A.k8.prototype={}
A.dy.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.fd(this,A.n(this).i("fd<1>"))},
gb0(){var s=A.n(this)
return A.dX(new A.fd(this,s.i("fd<1>")),new A.AT(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lJ(a)},
lJ(a){var s=this.d
if(s==null)return!1
return this.cn(this.lF(s,a),a)>=0},
D(a,b){b.a5(0,new A.AS(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.GH(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.GH(q,b)
return r}else return this.m2(b)},
m2(a){var s,r,q=this.d
if(q==null)return null
s=this.lF(q,a)
r=this.cn(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.lv(s==null?q.b=A.En():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.lv(r==null?q.c=A.En():r,b,c)}else q.mD(b,c)},
mD(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.En()
s=p.cN(a)
r=o[s]
if(r==null){A.Eo(o,s,[a,b]);++p.a
p.e=null}else{q=p.cn(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a5(a,b){var s,r,q,p,o,n=this,m=n.lE()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.az(n))}},
lE(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.a9(i.a,null,!1,t.z)
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
lv(a,b,c){if(a[b]==null){++this.a
this.e=null}A.Eo(a,b,c)},
cN(a){return J.ab(a)&1073741823},
lF(a,b){return a[this.cN(b)]},
cn(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.AT.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.AS.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.eh.prototype={
cN(a){return A.l5(a)&1073741823},
cn(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.kh.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.pn(b)},
j(a,b,c){this.po(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.pm(a)},
cN(a){return this.r.$1(a)&1073741823},
cn(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.Ao.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.fd.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gS(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.p6(s,s.lE(),this.$ti.i("p6<1>"))},
E(a,b){return this.a.I(b)}}
A.p6.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.az(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.ks.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.pg(b)},
j(a,b,c){this.pi(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.pf(a)},
G(a,b){if(!this.y.$1(b))return null
return this.ph(b)},
eC(a){return this.x.$1(a)&1073741823},
dI(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.Bb.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.cJ.prototype={
mf(){return new A.cJ(A.n(this).i("cJ<1>"))},
gt(a){var s=this,r=new A.ei(s,s.r,A.n(s).i("ei<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gF(a){return this.a===0},
gS(a){return this.a!==0},
E(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.qk(b)},
qk(a){var s=this.d
if(s==null)return!1
return this.cn(s[this.cN(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.A("No elements"))
return s.a},
ga_(a){var s=this.f
if(s==null)throw A.b(A.A("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.lu(s==null?q.b=A.Ep():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.lu(r==null?q.c=A.Ep():r,b)}else return q.pH(b)},
pH(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.Ep()
s=q.cN(a)
r=p[s]
if(r==null)p[s]=[q.jS(a)]
else{if(q.cn(r,a)>=0)return!1
r.push(q.jS(a))}return!0},
G(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lG(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lG(s.c,b)
else return s.k_(b)},
k_(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cN(a)
r=n[s]
q=o.cn(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lH(p)
return!0},
lu(a,b){if(a[b]!=null)return!1
a[b]=this.jS(b)
return!0},
lG(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lH(s)
delete a[b]
return!0},
jQ(){this.r=this.r+1&1073741823},
jS(a){var s,r=this,q=new A.Bc(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jQ()
return q},
lH(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jQ()},
cN(a){return J.ab(a)&1073741823},
cn(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.Bc.prototype={}
A.ei.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.az(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.vm.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:70}
A.eP.prototype={
E(a,b){return b instanceof A.bf&&this===b.a},
gt(a){var s=this
return new A.pd(s,s.a,s.c,s.$ti.i("pd<1>"))},
gm(a){return this.b},
aq(a){var s,r,q,p=this;++p.a
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
ga_(a){var s
if(this.b===0)throw A.b(A.A("No such element"))
s=this.c.c
s.toString
return s},
gao(a){var s=this.b
if(s===0)throw A.b(A.A("No such element"))
if(s>1)throw A.b(A.A("Too many elements"))
s=this.c
s.toString
return s},
gF(a){return this.b===0},
hz(a,b,c){var s,r,q=this
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
kb(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.pd.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.az(s))
if(r.b!==0)r=s.e&&s.d===r.gH(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.bf.prototype={
gfO(){var s=this.a
if(s==null||this===s.gH(0))return null
return this.c}}
A.M.prototype={
gt(a){return new A.as(a,this.gm(a),A.bo(a).i("as<M.E>"))},
a4(a,b){return this.h(a,b)},
gF(a){return this.gm(a)===0},
gS(a){return!this.gF(a)},
gH(a){if(this.gm(a)===0)throw A.b(A.av())
return this.h(a,0)},
ga_(a){if(this.gm(a)===0)throw A.b(A.av())
return this.h(a,this.gm(a)-1)},
gao(a){if(this.gm(a)===0)throw A.b(A.av())
if(this.gm(a)>1)throw A.b(A.j2())
return this.h(a,0)},
E(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.az(a))}return!1},
ct(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.az(a))}return!0},
cu(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.az(a))}q=c.$0()
return q},
C(a,b){var s
if(this.gm(a)===0)return""
s=A.yg("",a,b)
return s.charCodeAt(0)==0?s:s},
dR(a,b){return new A.aq(a,b,A.bo(a).i("aq<M.E>"))},
cE(a,b,c){return new A.Z(a,b,A.bo(a).i("@<M.E>").Z(c).i("Z<1,2>"))},
ba(a,b){return A.cF(a,b,null,A.bo(a).i("M.E"))},
ce(a,b){return A.cF(a,0,A.cp(b,"count",t.S),A.bo(a).i("M.E"))},
be(a,b){var s,r,q,p,o=this
if(o.gF(a)){s=A.bo(a).i("M.E")
return b?J.ug(0,s):J.mJ(0,s)}r=o.h(a,0)
q=A.a9(o.gm(a),r,b,A.bo(a).i("M.E"))
for(p=1;p<o.gm(a);++p)q[p]=o.h(a,p)
return q},
bT(a){return this.be(a,!0)},
cG(a){var s,r=A.vn(A.bo(a).i("M.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
fn(a,b){return new A.bW(a,A.bo(a).i("@<M.E>").Z(b).i("bW<1,2>"))},
cI(a,b){var s=b==null?A.Oh():b
A.nJ(a,0,this.gm(a)-1,s)},
U(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bl(b,c,r)
s=A.O(this.h8(a,b,c),A.bo(a).i("M.E"))
return s},
bh(a,b){return this.U(a,b,null)},
h8(a,b,c){A.bl(b,c,this.gm(a))
return A.cF(a,b,c,A.bo(a).i("M.E"))},
kA(a,b,c,d){var s
A.bl(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.bl(b,c,this.gm(a))
s=c-b
if(s===0)return
A.aY(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{p=J.fx(d,e)
q=p.be(p,!1)
r=0}p=J.J(q)
if(r+s>p.gm(q))throw A.b(A.FJ())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
dh(a,b,c){var s,r
if(t.j.b(c))this.aA(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.uf(a,"[","]")},
$iL:1,
$io:1,
$iq:1}
A.Y.prototype={
cr(a,b,c){var s=A.n(this)
return A.FR(this,s.i("Y.K"),s.i("Y.V"),b,c)},
a5(a,b){var s,r,q,p
for(s=J.E(this.gJ()),r=A.n(this).i("Y.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga0(){return J.bI(this.gJ(),new A.vG(this),A.n(this).i("V<Y.K,Y.V>"))},
aR(a,b,c,d){var s,r,q,p,o,n=A.t(c,d)
for(s=J.E(this.gJ()),r=A.n(this).i("Y.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.Dw(this.gJ(),a)},
gm(a){return J.ag(this.gJ())},
gF(a){return J.bq(this.gJ())},
gS(a){return J.d9(this.gJ())},
gb0(){return new A.kt(this,A.n(this).i("kt<Y.K,Y.V>"))},
l(a){return A.vH(this)},
$iF:1}
A.vG.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("Y.V").a(r)
return new A.V(a,r,A.n(s).i("V<Y.K,Y.V>"))},
$S(){return A.n(this.a).i("V<Y.K,Y.V>(Y.K)")}}
A.vI.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:44}
A.kt.prototype={
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gS(a){var s=this.a
return s.gS(s)},
gH(a){var s=this.a
s=s.h(0,J.bH(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
gao(a){var s=this.a
s=s.h(0,J.q8(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
ga_(a){var s=this.a
s=s.h(0,J.q7(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.pf(J.E(s.gJ()),s,this.$ti.i("pf<1,2>"))}}
A.pf.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.pF.prototype={
j(a,b,c){throw A.b(A.a2("Cannot modify unmodifiable map"))}}
A.je.prototype={
cr(a,b,c){return this.a.cr(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a5(a,b){this.a.a5(0,b)},
gF(a){var s=this.a
return s.gF(s)},
gS(a){var s=this.a
return s.gS(s)},
gm(a){var s=this.a
return s.gm(s)},
gJ(){return this.a.gJ()},
l(a){return this.a.l(0)},
gb0(){return this.a.gb0()},
ga0(){return this.a.ga0()},
aR(a,b,c,d){return this.a.aR(0,b,c,d)},
$iF:1}
A.d_.prototype={
cr(a,b,c){return new A.d_(this.a.cr(0,b,c),b.i("@<0>").Z(c).i("d_<1,2>"))}}
A.ja.prototype={
gt(a){var s=this
return new A.pe(s,s.c,s.d,s.b,s.$ti.i("pe<1>"))},
gF(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gH(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.av())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga_(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.av())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gao(a){var s,r=this
if(r.b===r.c)throw A.b(A.av())
if(r.gm(0)>1)throw A.b(A.j2())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a4(a,b){var s,r=this
A.FI(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
be(a,b){var s,r,q,p,o,n,m=this,l=m.a.length-1,k=(m.c-m.b&l)>>>0
if(k===0){s=J.mJ(0,m.$ti.c)
return s}s=m.$ti.c
r=A.a9(k,m.gH(0),!1,s)
for(q=m.a,p=m.b,o=0;o<k;++o){n=q[(p+o&l)>>>0]
r[o]=n==null?s.a(n):n}return r},
G(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.k_(s);++r.d
return!0}return!1},
l(a){return A.uf(this,"{","}")},
k_(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.pe.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.u(A.az(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.cB.prototype={
gF(a){return this.gm(this)===0},
gS(a){return this.gm(this)!==0},
D(a,b){var s
for(s=J.E(b);s.k();)this.u(0,s.gn())},
nU(a){var s=this.cG(0)
s.D(0,a)
return s},
cE(a,b,c){return new A.eI(this,b,A.n(this).i("@<1>").Z(c).i("eI<1,2>"))},
gao(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.j2())
s=r.gt(r)
if(!s.k())throw A.b(A.av())
return s.gn()},
l(a){return A.uf(this,"{","}")},
dR(a,b){return new A.aq(this,b,A.n(this).i("aq<1>"))},
ct(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
ce(a,b){return A.Ge(this,b,A.n(this).c)},
ba(a,b){return A.Gc(this,b,A.n(this).c)},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.av())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.av())
do s=r.gn()
while(r.k())
return s},
a4(a,b){var s,r
A.aY(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mE(b,b-r,this,null,"index"))},
$iL:1,
$io:1,
$if0:1}
A.kB.prototype={
fs(a){var s,r,q,p=this,o=p.mf()
for(s=A.dz(p,p.r,A.n(p).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!a.E(0,q))o.u(0,q)}return o},
cG(a){var s=this.mf()
s.D(0,this)
return s}}
A.kM.prototype={}
A.pa.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.t4(b):s}},
gm(a){return this.b==null?this.c.a:this.e2().length},
gF(a){return this.gm(0)===0},
gS(a){return this.gm(0)>0},
gJ(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.pb(this)},
gb0(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.n(s).i("ao<2>"))}return A.dX(r.e2(),new A.B6(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.u7().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a5(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a5(0,b)
s=o.e2()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.Cd(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.az(o))}},
e2(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
u7(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.t(t.N,t.z)
r=n.e2()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.aq(r)
n.a=n.b=null
return n.c=s},
t4(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.Cd(this.a[a])
return this.b[a]=s}}
A.B6.prototype={
$1(a){return this.a.h(0,a)},
$S:72}
A.pb.prototype={
gm(a){return this.a.gm(0)},
a4(a,b){var s=this.a
return s.b==null?s.gJ().a4(0,b):s.e2()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gJ()
s=s.gt(s)}else{s=s.e2()
s=new J.fB(s,s.length,A.a1(s).i("fB<1>"))}return s},
E(a,b){return this.a.I(b)}}
A.B4.prototype={
q(){var s,r,q=this
q.pp()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aD(A.Hr(r.charCodeAt(0)==0?r:r,q.b))
s.b1()}}
A.BQ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:69}
A.BP.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:69}
A.ln.prototype={
gaZ(){return"us-ascii"},
kx(a){return B.bD.v(a)}}
A.pE.prototype={
v(a){var s,r,q,p=A.bl(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aD(a,"string","Contains invalid characters."))
o[r]=q}return o},
ci(a){return new A.BH(new A.hM(a),this.a)}}
A.lo.prototype={}
A.BH.prototype={
q(){this.a.a.q()},
c5(a,b,c,d){var s,r,q,p
A.bl(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.U("Source contains invalid character with code point: "+q+".",null))}s=new A.cu(a)
p=this.a.a
p.u(0,s.U(s,b,c))
if(d)p.q()}}
A.lu.prototype={
gdE(){return this.a},
x8(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bl(a1,a2,a0.length)
s=$.F7()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.D3(a0.charCodeAt(l))
h=A.D3(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a7("")
e=p}else e=p
e.a+=B.a.B(a0,q,r)
d=A.bD(k)
e.a+=d
q=l
continue}}throw A.b(A.ac("Invalid base64 data",a0,r))}if(p!=null){e=B.a.B(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.Fi(a0,n,a2,o,m,d)
else{c=B.c.an(d-1,4)+1
if(c===1)throw A.b(A.ac(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dN(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.Fi(a0,n,a2,o,m,b)
else{c=B.c.an(b,4)
if(c===1)throw A.b(A.ac(a,a0,a2))
if(c>1)a0=B.a.dN(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ix.prototype={
v(a){var s
if(J.bq(a))return""
s=this.a?u.G:u.U
s=new A.oM(s).nf(a,0,a.length,!0)
s.toString
return A.e8(s,0,null)},
ci(a){return new A.zA(a,new A.zR(this.a?u.G:u.U))}}
A.oM.prototype={
n6(a){return new Uint8Array(a)},
nf(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.L(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.n6(o)
r.a=A.LE(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.zR.prototype={
n6(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bV(B.f.gac(s),s.byteOffset,a)}}
A.zN.prototype={
u(a,b){this.lK(b,0,J.ag(b),!1)},
q(){this.lK(B.cZ,0,0,!0)}}
A.zA.prototype={
lK(a,b,c,d){var s=this.b.nf(a,b,c,d)
if(s!=null)this.a.a.aD(A.e8(s,0,null))
if(d)this.a.a.b1()}}
A.lv.prototype={
v(a){var s,r,q=A.bl(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.oL()
r=s.kr(a,0,q)
r.toString
s.km(a,q)
return r},
ci(a){return new A.zM(a,new A.oL())}}
A.oL.prototype={
kr(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Gt(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.LB(a,b,c,q)
r.a=A.LD(a,b,c,s,0,r.a)
return s},
km(a,b){var s=this.a
if(s<-1)throw A.b(A.ac("Missing padding character",a,b))
if(s>0)throw A.b(A.ac("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.zM.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.kr(b,0,r)
if(s!=null)this.a.a.aD(s)},
q(){this.b.km(null,null)
this.a.a.b1()},
c5(a,b,c,d){var s,r
A.bl(b,c,a.length)
if(b===c)return
s=this.b
r=s.kr(a,b,c)
if(r!=null)this.a.a.aD(r)
if(d){s.km(a,c)
this.a.a.b1()}}}
A.qs.prototype={}
A.hM.prototype={
u(a,b){this.a.u(0,b)},
q(){this.a.q()}}
A.oP.prototype={
u(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.J(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.ag(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.aA(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.aA(p,o,o+n.gm(b),b)
q.c=q.c+n.gm(b)},
q(){this.a.$1(B.f.U(this.b,0,this.c))}}
A.lG.prototype={}
A.pv.prototype={
u(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.fa.prototype={
u(a,b){this.b.u(0,b)},
bo(a,b){A.cp(a,"error",t.K)
this.a.bo(a,b)},
q(){this.b.q()},
$ibL:1}
A.lI.prototype={}
A.aH.prototype={
ci(a){throw A.b(A.a2("This converter does not support chunked conversions: "+this.l(0)))},
uJ(a){return new A.ke(new A.rm(this),a,t.fM.Z(A.n(this).i("aH.T")).i("ke<1,2>"))}}
A.rm.prototype={
$1(a){return new A.fa(a,this.a.ci(a),t.oW)},
$S:101}
A.eK.prototype={}
A.j8.prototype={
l(a){var s=A.iN(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.mN.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.uj.prototype={
aI(a,b){var s=A.Hr(a,this.gv6().a)
return s},
a9(a,b){var s=A.LY(a,this.gdE().b,null)
return s},
gdE(){return B.cB},
gv6(){return B.cA}}
A.mP.prototype={
ci(a){return new A.B5(null,this.b,new A.px(a))}}
A.B5.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.A("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a7("")
q=new A.BD(r,s)
A.GJ(b,q,p.b,p.a)
if(r.a.length!==0)q.jB()
s.q()},
q(){}}
A.mO.prototype={
ci(a){return new A.B4(this.a,a,new A.a7(""))}}
A.B8.prototype={
o_(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.j2(a,s,r)
s=r+1
n.ar(92)
n.ar(117)
n.ar(100)
p=q>>>8&15
n.ar(p<10?48+p:87+p)
p=q>>>4&15
n.ar(p<10?48+p:87+p)
p=q&15
n.ar(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.j2(a,s,r)
s=r+1
n.ar(92)
switch(q){case 8:n.ar(98)
break
case 9:n.ar(116)
break
case 10:n.ar(110)
break
case 12:n.ar(102)
break
case 13:n.ar(114)
break
default:n.ar(117)
n.ar(48)
n.ar(48)
p=q>>>4&15
n.ar(p<10?48+p:87+p)
p=q&15
n.ar(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.j2(a,s,r)
s=r+1
n.ar(92)
n.ar(q)}}if(s===0)n.bf(a)
else if(s<m)n.j2(a,s,m)},
jl(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.mN(a,null))}s.push(a)},
j1(a){var s,r,q,p,o=this
if(o.nZ(a))return
o.jl(a)
try{s=o.b.$1(a)
if(!o.nZ(s)){q=A.FO(a,null,o.gmj())
throw A.b(q)}o.a.pop()}catch(p){r=A.B(p)
q=A.FO(a,r,o.gmj())
throw A.b(q)}},
nZ(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.yE(a)
return!0}else if(a===!0){r.bf("true")
return!0}else if(a===!1){r.bf("false")
return!0}else if(a==null){r.bf("null")
return!0}else if(typeof a=="string"){r.bf('"')
r.o_(a)
r.bf('"')
return!0}else if(t.j.b(a)){r.jl(a)
r.yC(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.jl(a)
s=r.yD(a)
r.a.pop()
return s}else return!1},
yC(a){var s,r,q=this
q.bf("[")
s=J.J(a)
if(s.gS(a)){q.j1(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.bf(",")
q.j1(s.h(a,r))}}q.bf("]")},
yD(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.bf("{}")
return!0}s=a.gm(a)*2
r=A.a9(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a5(0,new A.B9(n,r))
if(!n.b)return!1
o.bf("{")
for(p='"';q<s;q+=2,p=',"'){o.bf(p)
o.o_(A.H(r[q]))
o.bf('":')
o.j1(r[q+1])}o.bf("}")
return!0}}
A.B9.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:44}
A.B7.prototype={
gmj(){var s=this.c
return s instanceof A.a7?s.l(0):null},
yE(a){this.c.j0(B.w.l(a))},
bf(a){this.c.j0(a)},
j2(a,b,c){this.c.j0(B.a.B(a,b,c))},
ar(a){this.c.ar(a)}}
A.mS.prototype={
gaZ(){return"iso-8859-1"},
kx(a){return B.cI.v(a)}}
A.mT.prototype={}
A.nV.prototype={
u(a,b){this.c5(b,0,b.length,!1)}}
A.BD.prototype={
ar(a){var s=this.a,r=A.bD(a)
if((s.a+=r).length>16)this.jB()},
j0(a){if(this.a.a.length!==0)this.jB()
this.b.u(0,a)},
jB(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.kF.prototype={
q(){},
c5(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bD(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
u(a,b){this.a.a+=b}}
A.px.prototype={
u(a,b){this.a.a.aD(b)},
c5(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aD(a)
else r.aD(B.a.B(a,b,c))
if(d)r.b1()},
q(){this.a.a.b1()}}
A.BO.prototype={
q(){var s,r,q,p=this.c
this.a.wa(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.c5(q,0,q.length,!0)}else r.q()},
u(a,b){this.c5(b,0,J.ag(b),!1)},
c5(a,b,c,d){var s,r=this.c,q=this.a.dm(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.c5(s,0,s.length,!1)
r.a=""
return}}}
A.or.prototype={
gaZ(){return"utf-8"},
v2(a,b){return new A.dB((b===!0?B.ek:B.aR).a).dm(a,0,null,!0)},
fp(a){return this.v2(a,null)},
kx(a){return B.e.v(a)}}
A.os.prototype={
v(a){var s,r,q=A.bl(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.pJ(s)
if(r.m0(a,0,q)!==q)r.hW()
return B.f.U(s,0,r.b)},
ci(a){return new A.BR(new A.hM(a),new Uint8Array(1024))}}
A.pJ.prototype={
hW(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.K(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mU(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.K(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.hW()
return!1}},
m0(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.K(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mU(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hW()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.K(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.K(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.BR.prototype={
q(){if(this.a!==0){this.c5("",0,0,!0)
return}this.d.a.q()},
c5(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mU(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.m0(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hW()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.U(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.k3.prototype={
ci(a){return new A.BO(new A.dB(this.a),new A.px(a),new A.a7(""))}}
A.dB.prototype={
dm(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bl(b,c,J.ag(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Mt(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Ms(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.js(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.H5(p)
m.b=0
throw A.b(A.ac(n,a,q+m.c))}return o},
js(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.L(b+c,2)
r=q.js(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.js(a,s,c,d)}return q.v5(a,b,c,d)},
wa(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bD(65533)
a.a+=s}else throw A.b(A.ac(A.H5(77),null,null))},
v5(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a7(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bD(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bD(k)
h.a+=q
break
case 65:q=A.bD(k)
h.a+=q;--g
break
default:q=A.bD(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bD(a[m])
h.a+=q}else{q=A.e8(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bD(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.pP.prototype={}
A.aQ.prototype={
bW(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bR(p,r)
return new A.aQ(p===0?!1:s,r,p)},
qy(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cr()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bR(s,q)
return new A.aQ(n===0?!1:o,q,n)},
qC(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cr()
s=k-a
if(s<=0)return l.a?$.F9():$.cr()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bR(s,q)
m=new A.aQ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.he(0,$.fv())
return m},
bX(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.U("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.L(b,16)
if(B.c.an(b,16)===0)return n.qy(r)
q=s+r+1
p=new Uint16Array(q)
A.GB(n.b,s,b,p)
s=n.a
o=A.bR(q,p)
return new A.aQ(o===0?!1:s,p,o)},
dW(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.U("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.L(b,16)
q=B.c.an(b,16)
if(q===0)return j.qC(r)
p=s-r
if(p<=0)return j.a?$.F9():$.cr()
o=j.b
n=new Uint16Array(p)
A.LK(o,s,b,n)
s=j.a
m=A.bR(p,n)
l=new A.aQ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bX(1,q)-1)>>>0!==0)return l.he(0,$.fv())
for(k=0;k<r;++k)if(o[k]!==0)return l.he(0,$.fv())}return l},
a3(a,b){var s,r=this.a
if(r===b.a){s=A.zO(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
jg(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.jg(p,b)
if(o===0)return $.cr()
if(n===0)return p.a===b?p:p.bW(0)
s=o+1
r=new Uint16Array(s)
A.LG(p.b,o,a.b,n,r)
q=A.bR(s,r)
return new A.aQ(q===0?!1:b,r,q)},
hf(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cr()
s=a.c
if(s===0)return p.a===b?p:p.bW(0)
r=new Uint16Array(o)
A.oN(p.b,o,a.b,s,r)
q=A.bR(o,r)
return new A.aQ(q===0?!1:b,r,q)},
o1(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.jg(b,r)
if(A.zO(q.b,p,b.b,s)>=0)return q.hf(b,r)
return b.hf(q,!r)},
he(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bW(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.jg(b,r)
if(A.zO(q.b,p,b.b,s)>=0)return q.hf(b,r)
return b.hf(q,!r)},
bt(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cr()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.GC(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bR(s,p)
return new A.aQ(m===0?!1:n,p,m)},
qx(a){var s,r,q,p
if(this.c<a.c)return $.cr()
this.lU(a)
s=$.Ej.bH()-$.kd.bH()
r=A.El($.Ei.bH(),$.kd.bH(),$.Ej.bH(),s)
q=A.bR(s,r)
p=new A.aQ(!1,r,q)
return this.a!==a.a&&q>0?p.bW(0):p},
ts(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lU(a)
s=A.El($.Ei.bH(),0,$.kd.bH(),$.kd.bH())
r=A.bR($.kd.bH(),s)
q=new A.aQ(!1,s,r)
if($.Ek.bH()>0)q=q.dW(0,$.Ek.bH())
return p.a&&q.c>0?q.bW(0):q},
lU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Gy&&a.c===$.GA&&c.b===$.Gx&&a.b===$.Gz)return
s=a.b
r=a.c
q=16-B.c.gn2(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.Gw(s,r,q,p)
n=new Uint16Array(b+5)
m=A.Gw(c.b,b,q,n)}else{n=A.El(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.Em(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.zO(n,m,j,i)>=0){g&2&&A.K(n)
n[m]=1
A.oN(n,h,j,i,n)}else{g&2&&A.K(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.oN(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.LH(l,n,e);--k
A.GC(d,f,0,n,k,o)
if(n[e]<d){i=A.Em(f,o,k,j)
A.oN(n,h,j,i,n)
while(--d,n[e]<d)A.oN(n,h,j,i,n)}--e}$.Gx=c.b
$.Gy=b
$.Gz=s
$.GA=r
$.Ei.b=n
$.Ej.b=h
$.kd.b=o
$.Ek.b=q},
gK(a){var s,r,q,p=new A.zP(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.zQ().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aQ&&this.a3(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bW(0):n
while(r.c>1){q=$.F8()
if(q.c===0)A.u(B.bR)
p=r.ts(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.qx(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bE(s,t.hF).eD(0)},
$iay:1}
A.zP.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:105}
A.zQ.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:106}
A.p4.prototype={
n0(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
nc(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.BN.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a3(b)}},
$S:67}
A.t_.prototype={
$0(){var s=this
return A.u(A.U("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:16}
A.aI.prototype={
ji(a){var s=1000,r=B.c.an(a,s),q=B.c.L(a-r,s),p=this.b+r,o=B.c.an(p,s),n=this.c
return new A.aI(A.m3(this.a+B.c.L(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aI&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gK(a){return A.ch(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kL(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a3(a,b){var s=B.c.a3(this.a,b.a)
if(s!==0)return s
return B.c.a3(this.b,b.b)},
y8(){var s=this
if(s.c)return s
return new A.aI(s.a,s.b,!0)},
l(a){var s=this,r=A.JS(A.E1(s)),q=A.m2(A.E_(s)),p=A.m2(A.x_(s)),o=A.m2(A.DY(s)),n=A.m2(A.DZ(s)),m=A.m2(A.E0(s)),l=A.Fw(A.G2(s)),k=s.b,j=k===0?"":A.Fw(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iay:1}
A.aF.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aF&&this.a===b.a},
gK(a){return B.c.gK(this.a)},
a3(a,b){return B.c.a3(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.L(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.L(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.L(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.iK(B.c.l(n%1e6),6,"0")},
$iay:1}
A.Av.prototype={
l(a){return this.a7()}}
A.ah.prototype={
gcJ(){return A.KN(this)}}
A.lp.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iN(s)
return"Assertion failed"}}
A.du.prototype={}
A.bJ.prototype={
gjv(){return"Invalid argument"+(!this.a?"(s)":"")},
gju(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gjv()+q+o
if(!s.a)return n
return n+s.gju()+": "+A.iN(s.gkK())},
gkK(){return this.b}}
A.dk.prototype={
gkK(){return this.b},
gjv(){return"RangeError"},
gju(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.j_.prototype={
gkK(){return this.b},
gjv(){return"RangeError"},
gju(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$idk:1,
gm(a){return this.f}}
A.d0.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.ok.prototype={
l(a){return"UnimplementedError: "+this.a},
$id0:1}
A.bv.prototype={
l(a){return"Bad state: "+this.a}}
A.lL.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iN(s)+"."}}
A.nd.prototype={
l(a){return"Out of Memory"},
gcJ(){return null},
$iah:1}
A.jW.prototype={
l(a){return"Stack Overflow"},
gcJ(){return null},
$iah:1}
A.p3.prototype={
l(a){return"Exception: "+this.a},
$iI:1}
A.bt.prototype={
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
k=""}return g+l+B.a.B(e,i,j)+k+"\n"+B.a.bt(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iI:1,
giE(){return this.a},
ghc(){return this.b},
gav(){return this.c}}
A.mG.prototype={
gcJ(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iah:1,
$id0:1,
$iI:1}
A.o.prototype={
fn(a,b){return A.fD(this,A.n(this).i("o.E"),b)},
cE(a,b,c){return A.dX(this,b,A.n(this).i("o.E"),c)},
dR(a,b){return new A.aq(this,b,A.n(this).i("aq<o.E>"))},
E(a,b){var s
for(s=this.gt(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
wc(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
wd(a,b,c){return this.wc(0,b,c,t.z)},
ct(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
C(a,b){var s,r,q=this.gt(this)
if(!q.k())return""
s=J.X(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.X(q.gn())
while(q.k())}else{r=s
do r=r+b+J.X(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bp(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
be(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
bT(a){return this.be(0,!0)},
cG(a){return A.c0(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gt(this).k()},
gS(a){return!this.gF(this)},
ce(a,b){return A.Ge(this,b,A.n(this).i("o.E"))},
ba(a,b){return A.Gc(this,b,A.n(this).i("o.E"))},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.av())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.av())
do s=r.gn()
while(r.k())
return s},
gao(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.av())
s=r.gn()
if(r.k())throw A.b(A.j2())
return s},
cu(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a4(a,b){var s,r
A.aY(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mE(b,b-r,this,null,"index"))},
l(a){return A.Kg(this,"(",")")}}
A.V.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gK(a){return A.k.prototype.gK.call(this,0)},
l(a){return"null"}}
A.k.prototype={$ik:1,
P(a,b){return this===b},
gK(a){return A.eX(this)},
l(a){return"Instance of '"+A.nj(this)+"'"},
gam(a){return A.d8(this)},
toString(){return this.l(this)}}
A.pz.prototype={
l(a){return""},
$iaM:1}
A.jY.prototype={
gvP(){var s=this.gne()
if($.la()===1e6)return s
return s*1000},
gnd(){var s=this.gne()
if($.la()===1000)return s
return B.c.L(s,1000)},
aC(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.nk.$0()-r)
s.b=null}},
gne(){var s=this.b
if(s==null)s=$.nk.$0()
return s-this.a}}
A.jO.prototype={
gt(a){return new A.nA(this.a)},
ga_(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.A("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.Hc(r,s)}return s}}
A.nA.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.Hc(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a7.prototype={
gm(a){return this.a.length},
j0(a){var s=A.r(a)
this.a+=s},
ar(a){var s=A.bD(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.yR.prototype={
$2(a,b){throw A.b(A.ac("Illegal IPv6 address, "+a,this.a,b))},
$S:151}
A.kN.prototype={
gmI(){var s,r,q,p,o=this,n=o.w
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
gxq(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ab(s,1)
r=s.length===0?B.u:A.fY(new A.Z(A.l(s.split("/"),t.s),A.Os(),t.iZ),t.N)
q.x!==$&&A.Dq()
p=q.x=r}return p},
gK(a){var s,r=this,q=r.y
if(q===$){s=B.a.gK(r.gmI())
r.y!==$&&A.Dq()
r.y=s
q=s}return q},
gl2(){return this.b},
gdH(){var s=this.c
if(s==null)return""
if(B.a.T(s,"[")&&!B.a.af(s,"v",1))return B.a.B(s,1,s.length-1)
return s},
gfM(){var s=this.d
return s==null?A.GV(this.a):s},
gfS(){var s=this.f
return s==null?"":s},
gik(){var s=this.r
return s==null?"":s},
wK(a){var s=this.a
if(a.length!==s.length)return!1
return A.MH(a,s,0)>=0},
fW(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.Et(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.BJ(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.T(n,"/"))n="/"+n
l=n
if(a!=null)k=A.BK(null,0,0,a)
else k=j.f
return A.kO(b,q,o,p,l,k,j.r)},
nO(a){return this.fW(null,a)},
kX(a){return this.fW(a,null)},
md(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.af(b,"../",r);){r+=3;++s}q=B.a.d6(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.iz(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dN(a,q+1,null,B.a.ab(b,r-3*s))},
al(a){return this.fY(A.oq(a))},
fY(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb9().length!==0)return a
else{s=h.a
if(a.gkF()){r=a.nO(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gnk())m=a.giv()?a.gfS():h.f
else{l=A.Mr(h,n)
if(l>0){k=B.a.B(n,0,l)
n=a.gkE()?k+A.fj(a.gbD()):k+A.fj(h.md(B.a.ab(n,k.length),a.gbD()))}else if(a.gkE())n=A.fj(a.gbD())
else if(n.length===0)if(p==null)n=s.length===0?a.gbD():A.fj(a.gbD())
else n=A.fj("/"+a.gbD())
else{j=h.md(n,a.gbD())
r=s.length===0
if(!r||p!=null||B.a.T(n,"/"))n=A.fj(j)
else n=A.Ev(j,!r||p!=null)}m=a.giv()?a.gfS():null}}}i=a.gkG()?a.gik():null
return A.kO(s,q,p,o,n,m,i)},
gkF(){return this.c!=null},
giv(){return this.f!=null},
gkG(){return this.r!=null},
gnk(){return this.e.length===0},
gkE(){return B.a.T(this.e,"/")},
l_(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.a2("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.a2(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.a2(u.A))
if(r.c!=null&&r.gdH()!=="")A.u(A.a2(u.Q))
s=r.gxq()
A.Mk(s,!1)
q=A.yg(B.a.T(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmI()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb9())if(p.c!=null===b.gkF())if(p.b===b.gl2())if(p.gdH()===b.gdH())if(p.gfM()===b.gfM())if(p.e===b.gbD()){r=p.f
q=r==null
if(!q===b.giv()){if(q)r=""
if(r===b.gfS()){r=p.r
q=r==null
if(!q===b.gkG()){s=q?"":r
s=s===b.gik()}}}}return s},
$ioo:1,
gb9(){return this.a},
gbD(){return this.e}}
A.BM.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.pI(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.pI(1,b,B.o,!0)
s.a+=r}},
$S:160}
A.BL.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:67}
A.yQ.prototype={
gnX(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cv(m,"?",s)
q=m.length
if(r>=0){p=A.kP(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.oZ("data","",n,n,A.kP(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cn.prototype={
gkF(){return this.c>0},
gkH(){return this.c>0&&this.d+1<this.e},
giv(){return this.f<this.r},
gkG(){return this.r<this.a.length},
gkE(){return B.a.af(this.a,"/",this.e)},
gnk(){return this.e===this.f},
gb9(){var s=this.w
return s==null?this.w=this.qi():s},
qi(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.T(r.a,"http"))return"http"
if(q===5&&B.a.T(r.a,"https"))return"https"
if(s&&B.a.T(r.a,"file"))return"file"
if(q===7&&B.a.T(r.a,"package"))return"package"
return B.a.B(r.a,0,q)},
gl2(){var s=this.c,r=this.b+3
return s>r?B.a.B(this.a,r,s-1):""},
gdH(){var s=this.c
return s>0?B.a.B(this.a,s,this.d):""},
gfM(){var s,r=this
if(r.gkH())return A.aN(B.a.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.T(r.a,"http"))return 80
if(s===5&&B.a.T(r.a,"https"))return 443
return 0},
gbD(){return B.a.B(this.a,this.e,this.f)},
gfS(){var s=this.f,r=this.r
return s<r?B.a.B(this.a,s+1,r):""},
gik(){var s=this.r,r=this.a
return s<r.length?B.a.ab(r,s+1):""},
m7(a){var s=this.d+1
return s+a.length===this.e&&B.a.af(this.a,a,s)},
xW(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cn(B.a.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.Et(b,0,b.length)
s=!(h.b===b.length&&B.a.T(h.a,b))}else{b=h.gb9()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.B(h.a,h.b+3,q):""
o=h.gkH()?h.gfM():g
if(s)o=A.BJ(o,b)
q=h.c
if(q>0)n=B.a.B(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.B(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.T(l,"/"))l="/"+l
if(a!=null)j=A.BK(g,0,0,a)
else{k=h.r
j=m<k?B.a.B(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ab(q,m+1):g
return A.kO(b,p,n,o,l,j,i)},
nO(a){return this.fW(null,a)},
kX(a){return this.fW(a,null)},
al(a){return this.fY(A.oq(a))},
fY(a){if(a instanceof A.cn)return this.tS(this,a)
return this.mK().fY(a)},
tS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.T(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.T(a.a,"http"))p=!b.m7("80")
else p=!(r===5&&B.a.T(a.a,"https"))||!b.m7("443")
if(p){o=r+1
return new A.cn(B.a.B(a.a,0,o)+B.a.ab(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mK().fY(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cn(B.a.B(a.a,0,r)+B.a.ab(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cn(B.a.B(a.a,0,r)+B.a.ab(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.xW()}s=b.a
if(B.a.af(s,"/",n)){m=a.e
l=A.GN(this)
k=l>0?l:m
o=k-n
return new A.cn(B.a.B(a.a,0,k)+B.a.ab(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.af(s,"../",n))n+=3
o=j-n+1
return new A.cn(B.a.B(a.a,0,j)+"/"+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.GN(this)
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
return new A.cn(B.a.B(h,0,i)+d+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
l_(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.T(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.a2("Cannot extract a file path from a "+r.gb9()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.a2(u.z))
throw A.b(A.a2(u.A))}if(r.c<r.d)A.u(A.a2(u.Q))
q=B.a.B(s,r.e,q)
return q},
gK(a){var s=this.x
return s==null?this.x=B.a.gK(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mK(){var s=this,r=null,q=s.gb9(),p=s.gl2(),o=s.c>0?s.gdH():r,n=s.gkH()?s.gfM():r,m=s.a,l=s.f,k=B.a.B(m,s.e,l),j=s.r
l=l<j?s.gfS():r
return A.kO(q,p,o,n,k,l,j<m.length?s.gik():r)},
l(a){return this.a},
$ioo:1}
A.oZ.prototype={}
A.mc.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.n9.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iI:1}
A.tF.prototype={
$2(a,b){this.a.b6(new A.tD(a),new A.tE(b),t.X)},
$S:186}
A.tD.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:191}
A.tE.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Oe(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.u("Attempting to box non-Dart object.")
s={}
s[$.J3()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:6}
A.D8.prototype={
$1(a){var s,r,q,p
if(A.Hp(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gJ());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.D(p,J.bI(a,this,t.z))
return p}else return a},
$S:40}
A.De.prototype={
$1(a){return this.a.aB(a)},
$S:29}
A.Df.prototype={
$1(a){if(a==null)return this.a.aX(new A.n9(a===undefined))
return this.a.aX(a)},
$S:29}
A.CN.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Ho(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aI(A.m3(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.U("structured clone of RegExp",null))
if(a instanceof Promise)return A.a4(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.t(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.ax(o),q=s.gt(o);q.k();)n.push(A.l0(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.J(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:40}
A.B1.prototype={
d9(a){if(a<=0||a>4294967296)throw A.b(A.b8(u.E+a))
return Math.random()*a>>>0},
nA(){return Math.random()}}
A.B2.prototype={
pC(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.a2("No source of cryptographically secure random numbers available."))},
d9(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b8(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.K(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ak(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bV(B.aE.gac(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.m9.prototype={}
A.a8.prototype={
h(a,b){var s,r=this
if(!r.jM(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a8.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jM(b))return
s.c.j(0,s.a.$1(b),new A.V(b,c,s.$ti.i("V<a8.K,a8.V>")))},
D(a,b){b.a5(0,new A.qu(this))},
cr(a,b,c){return this.c.cr(0,b,c)},
I(a){var s=this
if(!s.jM(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a8.K").a(a)))},
ga0(){var s=this.c,r=A.n(s).i("aK<1,2>")
return A.dX(new A.aK(s,r),new A.qv(this),r.i("o.E"),this.$ti.i("V<a8.K,a8.V>"))},
a5(a,b){this.c.a5(0,new A.qw(this,b))},
gF(a){return this.c.a===0},
gS(a){return this.c.a!==0},
gJ(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dX(new A.ao(s,r),new A.qx(this),r.i("o.E"),this.$ti.i("a8.K"))},
gm(a){return this.c.a},
aR(a,b,c,d){return this.c.aR(0,new A.qy(this,b,c,d),c,d)},
gb0(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dX(new A.ao(s,r),new A.qz(this),r.i("o.E"),this.$ti.i("a8.V"))},
l(a){return A.vH(this)},
jM(a){return this.$ti.i("a8.K").b(a)},
$iF:1}
A.qu.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a8.K,a8.V)")}}
A.qv.prototype={
$1(a){var s=a.b
return new A.V(s.a,s.b,this.a.$ti.i("V<a8.K,a8.V>"))},
$S(){return this.a.$ti.i("V<a8.K,a8.V>(V<a8.C,V<a8.K,a8.V>>)")}}
A.qw.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a8.C,V<a8.K,a8.V>)")}}
A.qx.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a8.K(V<a8.K,a8.V>)")}}
A.qy.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.Z(this.c).Z(this.d).i("V<1,2>(a8.C,V<a8.K,a8.V>)")}}
A.qz.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a8.V(V<a8.K,a8.V>)")}}
A.m5.prototype={
V(a,b){return J.x(a,b)},
ad(a){return J.ab(a)}}
A.j3.prototype={
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
A.eQ.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.J(a)
r=s.gm(a)
q=J.J(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.V(s.h(a,o),q.h(b,o)))return!1
return!0},
ad(a){var s,r,q,p
for(s=J.J(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ad(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.i6.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.DK(s.gvV(),s.gwE(),s.gwL(),A.n(this).i("i6.E"),t.S)
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
A.ho.prototype={}
A.hX.prototype={
gK(a){var s=this.a
return 3*s.a.ad(this.b)+7*s.b.ad(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hX){s=this.a
s=s.a.V(this.b,b.b)&&s.b.V(this.c,b.c)}else s=!1
return s}}
A.jd.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.DK(null,null,null,t.mB,t.S)
for(r=J.E(a.gJ());r.k();){q=r.gn()
p=new A.hX(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gJ());r.k();){q=r.gn()
p=new A.hX(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ad(a){var s,r,q,p,o,n,m,l
for(s=J.E(a.gJ()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ad(n)
l=a.h(0,n)
o=o+3*m+7*q.ad(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.m4.prototype={
V(a,b){var s,r=this
if(a instanceof A.cB)return b instanceof A.cB&&new A.ho(r,t.cu).V(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.jd(r,r,t.a3).V(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.eQ(r,t.hI).V(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.j3(r,t.nZ).V(a,b)
return J.x(a,b)},
ad(a){var s=this
if(a instanceof A.cB)return new A.ho(s,t.cu).ad(a)
if(t.f.b(a))return new A.jd(s,s,t.a3).ad(a)
if(t.j.b(a))return new A.eQ(s,t.hI).ad(a)
if(t.e7.b(a))return new A.j3(s,t.nZ).ad(a)
return J.ab(a)},
wM(a){return!0}}
A.n8.prototype={
sm(a,b){A.FY()},
u(a,b){return A.FY()}}
A.on.prototype={
j(a,b,c){return A.Ll()}}
A.cv.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cv){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gK(a){return A.w9(this.a)},
l(a){return A.au(this.a)}}
A.cb.prototype={
u(a,b){if(this.a!=null)throw A.b(A.A("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.A("add must be called once."))}}
A.my.prototype={
v(a){var s=new A.cb(),r=A.d4(s)
r.u(0,a)
r.q()
r=s.a
r.toString
return r}}
A.tK.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.A("Hash.add() called after close()."))
s.r=s.r+J.ag(b)
s.lt(b)},
lt(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.q5(B.f.gac(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.J(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ai(i,j,n,a,o)
k.e=n
return}B.f.ai(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.K(s)
s[m]=l;++m}while(m<q)
k.ye(s)}},
q(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.u(A.a2("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.q5(B.f.gac(q))
m=B.c.L(p,4294967296)
n.$flags&2&&A.K(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.lt(q)
s=l.a
s.u(0,new A.cv(l.q0()))
s.q()},
q0(){var s,r,q,p,o,n,m
if(B.aW===$.l9())return J.Jg(B.y.gac(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.q5(B.f.gac(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.K(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.ps.prototype={
ci(a){var s=new Uint32Array(A.bc(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hM(new A.pt(s,r,a,q,new Uint32Array(16)))}}
A.Bp.prototype={
ye(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.K(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.K(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cP[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.K(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.pt.prototype={}
A.lj.prototype={
gK(a){return A.ch(B.e_,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lY&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.d8(s).l(0)+".with"+s.d*8+"bits()"
return A.d8(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.qF.prototype={}
A.jc.prototype={
gK(a){return B.t.ad(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.jc&&B.t.V(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.C(s,",")+"])"}}
A.jS.prototype={
l(a){return A.d8(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iI:1}
A.vB.prototype={
l(a){return A.d8(this).l(0)+"()"}}
A.jR.prototype={
gK(a){return(B.t.ad(this.b.a)^B.t.ad(this.c)^B.t.ad(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jR){s=B.t.V(this.b.a,b.b.a)
s=s&&B.t.V(this.c,b.c)&&B.t.V(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.C(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.xX.prototype={}
A.jT.prototype={
ges(){return this.b},
gK(a){var s=A.eX(B.ee),r=B.t.ad(this.ges())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jT&&B.t.V(this.ges(),b.ges())},
l(a){return"SecretKeyData(...)"}}
A.nF.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.a2("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.a2("The bytes are unmodifiable."))}}
A.lY.prototype={
v8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ges().gm(0),f=this.d
if(g!==f)throw A.b(A.aD(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.HR(c)
r=new Uint32Array(4)
A.pW(r,0,r,0,s)
r[0]=A.bG(r[0])
r[1]=A.bG(r[1])
r[2]=A.bG(r[2])
r[3]=A.bG(r[3])
q=A.Fv(r,a.c)
p=J.Fd(B.f.gac(q),0,null)
o=a.a
n=B.t.V(B.aU.lA(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jS())
A.CE(q,1)
n=o.length
m=B.c.L(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pW(l,k,p,0,s)
A.CE(q,1)}j=J.bV(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.K(j)
j[k]=i^h}return j},
vS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ges().gm(0),f=this.d
if(g!==f)throw A.b(A.aD(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.HR(d)
r=new Uint32Array(4)
A.pW(r,0,r,0,s)
r[0]=A.bG(r[0])
r[1]=A.bG(r[1])
r[2]=A.bG(r[2])
r[3]=A.bG(r[3])
q=A.Fv(r,c)
p=J.Fd(B.f.gac(q),0,null)
o=new Uint32Array(A.bc(p))
A.CE(q,1)
n=a.length
m=(B.c.L(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pW(l,k,p,0,s)
A.CE(q,1)}j=J.bV(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.K(j)
j[k]=i^h}return new A.jR(j,B.aU.lA(j,b,s,r,o),c)}}
A.rE.prototype={
l(a){return"DartGcm()"},
lA(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lZ(n,d,b)
A.lZ(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.L(s,o),!1)
q.setUint32(4,B.c.an(s,o),!1)
q.setUint32(8,B.c.L(r,o),!1)
q.setUint32(12,B.c.an(r,o),!1)
A.lZ(n,d,J.bV(B.aE.gac(q),0,null))
p=new Uint32Array(4)
A.pW(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.jc(J.bV(B.y.gac(n),0,null))}}
A.oX.prototype={}
A.oY.prototype={}
A.rp.prototype={}
A.rF.prototype={}
A.Ak.prototype={
V(a,b){var s,r,q=J.J(a),p=J.J(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ad(a){var s,r,q,p,o
for(s=J.J(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.an(q,16)
r=(r^B.c.tR(p,o)^B.c.mF(p,16-o))>>>0}return r}}
A.nv.prototype={}
A.lw.prototype={$iDz:1}
A.lx.prototype={
ij(){if(this.w)throw A.b(A.A("Can't finalize a finalized Request."))
this.w=!0
return B.bI},
l(a){return this.a+" "+this.b.l(0)}}
A.ly.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:87}
A.lz.prototype={
$1(a){return B.a.gK(a.toLowerCase())},
$S:88}
A.qo.prototype={
ps(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.U("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.U("Invalid content length "+A.r(s)+".",null))}}}
A.lD.prototype={
bg(a){return this.oW(a)},
oW(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bg=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.Fs("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.ij().y7(),$async$bg)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.bq(k)?k:null
a9=t.N
f=A.t(a9,t.K)
e=b4.gn5()
d=null
if(e!=null){d=e
J.b5(f,"content-length",d)}for(b0=b4.r,b0=new A.aK(b0,A.n(b0).i("aK<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.b5(f,c.a,c.b)}f=A.l4(f)
f.toString
A.bm(f)
b0=l.signal
s=8
return A.a(A.a4(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$bg)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.hb(a,null):null
if(a0==null&&a!=null){f=A.Fs("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.t(a9,a9)
b.headers.forEach(A.pR(new A.qr(a1)))
f=A.Mw(b4,b)
a4=b.status
a6=a1
a8=a0
A.oq(b.url)
a9=b.statusText
f=new A.nU(A.Iw(f),a4,a8,a6)
f.ps(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.B(b3)
a3=A.af(b3)
A.Hz(a2,a3,b4)
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
return A.f($async$bg,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].abort()
this.b=!0}}
A.qr.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:93}
A.C9.prototype={
$1(a){return A.ie(this.a,this.b,a)},
$S:95}
A.Cp.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ak()}},
$S:0}
A.Cq.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a4(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.B(k)
m=A.af(k)
if(!o.a.b)A.Hz(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dI.prototype={
y7(){var s=new A.w($.C,t.jz),r=new A.aG(s,t.iq),q=new A.oP(new A.qt(r),new Uint8Array(1024))
this.aa(q.guv(q),!0,q.geu(),r.guT())
return s}}
A.qt.prototype={
$1(a){return this.a.aB(new Uint8Array(A.bc(a)))},
$S:11}
A.eB.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iI:1}
A.n1.prototype={
gm(a){return this.b}}
A.w1.prototype={
gn5(){var s,r,q,p=this,o={},n=o.a=0
p.x.a5(0,new A.w2(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.p)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.m5(q)).length+q.b+2)}return o.a+2+70+4},
ij(){var s=this,r=s.pX()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.ll()
return new A.dI(s.bv(r))},
bv(a){return this.qY(a)},
qY(a){var $async$bv=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aK(f,A.n(f).i("aK<1,2>")).gt(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.aR(A.d3(e),$async$bv,r)
case 5:k=l.b
j=$.Du()
l=A.D(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.D(l,'"',"%22")+'"'
l=$.Fa()
s=6
q=[1]
return A.aR(A.d3(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bv,r)
case 6:s=7
q=[1]
return A.aR(A.d3(B.e.v(k)),$async$bv,r)
case 7:s=8
q=[1]
return A.aR(A.d3(B.b8),$async$bv,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.aR(A.d3(e),$async$bv,r)
case 12:s=13
q=[1]
return A.aR(A.d3(B.e.v(m.m5(g))),$async$bv,r)
case 13:if(g.f)A.u(A.A("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.aR(A.LW(g.e),$async$bv,r)
case 14:s=15
q=[1]
return A.aR(A.d3(B.b8),$async$bv,r)
case 15:case 10:f.length===l||(0,A.p)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.aR(A.d3(d),$async$bv,r)
case 16:case 1:return A.aR(null,0,r)
case 2:return A.aR(o.at(-1),1,r)}})
var s=0,r=A.Co($async$bv,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Cz(r)},
rj(a,b){var s,r=$.Du()
r=A.D(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.D(r,'"',"%22")+'"'
r=$.Fa()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
m5(a){var s=a.d.l(0),r=$.Du(),q=A.D(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.D(q,'"',"%22")+'"'
s=A.D(a.c,r,"%0D%0A")
p=p+'; filename="'+A.D(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pX(){var s,r=J.DO(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.d4[$.IG().d9(66)]
return"dart-http-boundary-"+A.e8(r,0,null)}}
A.w2.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.rj(a,b)).length+B.e.v(b).length+2)},
$S:34}
A.xM.prototype={
gn5(){return this.y.length},
gky(){var s,r
if(this.gcO()==null||!this.gcO().c.a.I("charset"))return B.o
s=this.gcO().c.a.h(0,"charset")
s.toString
r=A.JX(s)
return r==null?A.u(A.ac('Unsupported encoding "'+s+'".',null,null)):r},
ij(){this.ll()
return new A.dI(A.E9(this.y,t.L))},
gcO(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.Kv(s)},
scO(a){this.r.j(0,"content-type",a.l(0))},
q3(){if(!this.w)return
throw A.b(A.A("Can't modify a finalized Request."))}}
A.k_.prototype={}
A.nU.prototype={}
A.iB.prototype={}
A.h_.prototype={
l(a){var s=new A.a7(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a5(0,new A.vL(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.vJ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.yh(null,j),h=$.Jf()
i.j9(h)
s=$.Je()
i.fz(s)
r=i.gkN().h(0,0)
r.toString
i.fz("/")
i.fz(s)
q=i.gkN().h(0,0)
q.toString
i.j9(h)
p=t.N
o=A.t(p,p)
for(;;){p=i.d=B.a.eG(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gN():n
if(!m)break
p=i.d=h.eG(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gN()
i.fz(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.fz("=")
n=i.d=s.eG(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gN()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.OL(i)
n=i.d=h.eG(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.w1()
return A.DV(r,q,o)},
$S:103}
A.vL.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Jc()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.Is(b,$.J1(),new A.vK(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:34}
A.vK.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:66}
A.CV.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:66}
A.qn.prototype={
dP(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.f3(),$async$dP)
case 5:o=b
s=o.gnM()<0.25?6:7
break
case 6:s=8
return A.a(p.jZ(o),$async$dP)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnM()<0.25?9:10
break
case 9:s=11
return A.a(p.jZ(m),$async$dP)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dP,r)},
iR(){var s=0,r=A.h(t.q),q,p=this
var $async$iR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f3(),$async$iR)
case 3:q=p.jZ(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iR,r)},
f3(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$f3=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.c8():j
p=3
s=6
return A.a(l,$async$f3)
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
return A.f($async$f3,r)},
jZ(a){var s=this.c
if(s!=null)return s
return this.c=this.hn(a)},
hn(a){return this.qA(a)},
qA(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$hn=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.lr("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iS(l),$async$hn)
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
return A.f($async$hn,r)}}
A.jB.prototype={
pu(a,b,c,d,e,f,g,h,i,j,k){var s=this,r=new A.qn(s.c)
s.Q!==$&&A.dE()
s.Q=r
s.as!==$&&A.dE()
s.as=new A.wr(s.z,s.b,r,s.x,s.a)},
fN(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$fN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.ay){s=1
break}n.ay=!0
if(n.ch){s=1
break}p=4
m=n.as
m===$&&A.v()
s=7
return A.a(m.iN(),$async$fN)
case 7:n.ax=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.B(k)
if(m instanceof A.ce){n.ax=!1
n.ch=!0}else if(m instanceof A.b9)n.ay=n.ax=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fN,r)},
gi5(){return new A.lt(this.ax,this.f)},
glb(){return B.a.B(A.au(B.m.v(B.e.v(this.b.l(0)+"|"+this.r)).a),0,12)},
hd(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$hd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.at!=null){s=1
break}o=p.as
o===$&&A.v()
n=A.KJ(B.ck,o,A.l(["data"],t.s),p.grN(),p.grK(),p.w)
p.at=n
s=3
return A.a(n.aC(),$async$hd)
case 3:case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
eX(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.at
o=o==null?null:o.aL()
s=2
return A.a(o instanceof A.w?o:A.bF(o,t.H),$async$eX)
case 2:q.at=null
for(o=q.cx,p=new A.b0(o,o.r,o.e,A.n(o).i("b0<2>"));p.k();)p.d.A()
o.aq(0)
q.cy.aq(0)
return A.e(null,r)}})
return A.f($async$eX,r)},
hk(){var s=0,r=A.h(t.H),q=this
var $async$hk=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.eX(),$async$hk)
case 2:q.z.a.q()
return A.e(null,r)}})
return A.f($async$hk,r)},
rL(){var s,r,q,p
for(s=this.db,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
this.f0(p,new A.cs(p,B.P,null))}},
rO(a){var s=a.b,r=s.b
if(!B.b.E(this.db,r))return
if(a.a==="delete"){this.hS(s)
return}this.f0(r,new A.cs(r,B.P,s))},
hS(a){return this.ud(a)},
ud(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hS=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.E(n.db,j)){s=1
break}m=null
p=4
l=n.as
l===$&&A.v()
s=7
return A.a(l.aU(a.a),$async$hS)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.B(i)
if(l instanceof A.cf){n.f0(j,new A.cs(j,B.at,null))
s=1
break}else if(l instanceof A.b9){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.f0(j,new A.cs(j,B.at,null))
s=1
break}n.f0(j,new A.cs(j,B.P,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hS,r)},
f0(a,b){var s,r,q=this
q.cy.j(0,a,b)
s=q.cx
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.c4(q.d,new A.wn(q,a)))},
nl(){var s=this.CW
return new A.aZ(s,A.n(s).i("aZ<1>"))},
d8(a,b,c,d,e){var s=this.as
s===$&&A.v()
return s.iB(a,d!=null?B.d3:null,b,c,d,e)},
nv(a,b,c,d){return this.d8(a,b,null,c,d)},
nu(a,b,c,d){return this.d8(a,b,c,null,d)},
aU(a){var s=this.as
s===$&&A.v()
return s.aU(a)},
c7(a,b,c){var s=this.as
s===$&&A.v()
return s.c7(a,b,c)},
eR(a,b){return this.iX(null,a,null,b,null)},
iX(a,b,c,d,e){return this.yj(a,b,c,d,e)},
cg(a,b){return this.iX(null,a,null,null,b)},
yj(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$iX=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aR(0,new A.wo(p),t.N,t.co)
n=p.as
n===$&&A.v()
q=n.iW(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iX,r)},
bM(a,b,c){var s=this.as
s===$&&A.v()
return s.bM(a,b,c)},
bU(a,b,c){var s=this.as
s===$&&A.v()
return s.bU(a,b,c)},
bO(a){var s=this.as
s===$&&A.v()
return s.bO(a)},
$inX:1}
A.wn.prototype={
$0(){var s,r=this.a,q=this.b
r.cx.G(0,q)
s=r.cy.G(0,q)
if(s!=null&&(r.CW.c&4)===0)r.CW.u(0,s)},
$S:0}
A.wo.prototype={
$2(a,b){return new A.V(a,new A.dN("imgs+",b.a,b.b,b.c),t.ia)},
$S:110}
A.jE.prototype={}
A.wU.prototype={
cZ(a,b,c,d){return this.uV(a,b,c,d)},
uV(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$cZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.Bv(d)
n=t.hw
m=A.dr(null,null,n)
l=t.N
k=$.C.h(0,B.dT)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.lD(A.l([],t.kG))
j=new A.wp(j)
p=new A.jE(c,B.aZ,a,o,B.b2,200,25,b,B.ah,B.ah,null,j,m,A.t(l,t.hU),A.t(l,n))
p.pu(a,B.ah,B.aZ,b,25,200,null,B.b2,B.ah,o,null)
s=3
return A.a(p.hd(),$async$cZ)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
d_(a){return this.vF(a)},
vF(a){var s=0,r=A.h(t.H),q
var $async$d_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=a instanceof A.jE?2:3
break
case 2:s=4
return A.a(a.eX(),$async$d_)
case 4:a.hk()
q=a.CW
if((q.c&4)===0)q.q()
case 3:return A.e(null,r)}})
return A.f($async$d_,r)}}
A.Bv.prototype={
c8(){var s=0,r=A.h(t.q),q,p=this,o
var $async$c8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c8(),$async$c8)
case 3:q=o.Gg(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c8,r)},
iS(a){return this.xR(a)},
xR(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c8(),$async$iS)
case 3:q=o.Gg(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iS,r)}}
A.wJ.prototype={}
A.wr.prototype={
i2(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$i2=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dP(),$async$i2)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.B(j)
l=A.lr("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i2,r)},
iB(a,b,c,d,e,f){return this.wS(a,b,c,d,e,f)},
wS(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$iB=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Pp(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.ft(a)+" && updated>="+A.ft(n)+")"
o=c==null?m:m+" && (updated>"+A.ft(n)+" || (updated="+A.ft(n)+" && id>"+A.ft(c)+"))"}l=t.N
l=A.t(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.h1(B.c.bx(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.C(b,","))
k=p.b.al("/api/collections/data/records").kX(l)
s=3
return A.a(p.mB("GET",k),$async$iB)
case 3:j=a0
p.e5(j,A.l([200],t.t),k)
i=p.dq(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aX("List response has no items array."))
h=J.bI(i,new A.wI(p),t.h)
h=A.O(h,h.$ti.i("a0.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iB,r)},
aU(a){return this.oO(a)},
oO(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jX(a)
s=3
return A.a(p.mB("GET",o),$async$aU)
case 3:n=c
if(n.a===404)throw A.b(A.KG("not found"))
p.e5(n,A.l([200],t.t),o)
q=A.ha(p.dq(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aU,r)},
c7(a,b,c){return this.v0(a,b,c)},
v0(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$c7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.al("/api/collections/data/records")
s=3
return A.a(p.fg("POST",o,B.h.a9(A.m(["id",b,"store",c,"data",p.jr(a)],t.N,t.X),null)),$async$c7)
case 3:n=e
if(n.a===400&&p.rn(n))throw A.b(A.JW(p.f2(n)))
p.e5(n,A.l([200,201],t.t),o)
q=A.ha(p.dq(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c7,r)},
jr(a){var s,r,q
try{r=B.h.aI(a,null)
return r}catch(q){s=A.B(q)
r=A.KI("Corrupt local payload: "+A.r(s))
throw A.b(r)}},
rn(a){var s,r,q,p,o,n
try{s=this.dq(a)
r=J.Q(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
bU(a,b,c){return this.yf(a,b,c)},
yf(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$bU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jX(c)
s=3
return A.a(p.fg("PATCH",o,B.h.a9(A.m(["data",p.jr(b)],t.N,t.X),null)),$async$bU)
case 3:n=e
p.e5(n,A.l([200],t.t),o)
q=A.ha(p.dq(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)},
iW(a,b,c,d,e){return this.yh(a,b,c,d,e)},
yh(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n,m,l
var $async$iW=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jX(b)
m=t.N
l=A.t(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a9(d,null))
if(e==null)m=null
else{m=A.n(e).i("ao<2>")
m=A.O(new A.ao(e,m),m.i("o.E"))}s=3
return A.a(p.tK(new A.mB("PATCH",n,B.aB,l,m==null?B.d_:m)),$async$iW)
case 3:o=g
p.e5(o,A.l([200],t.t),n)
q=A.ha(p.dq(o),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iW,r)},
bM(a,b,c){return this.vK(a,b,c)},
vK(a,b,c){var s=0,r=A.h(t.v),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$bM=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.t(i,i)
l=n.b.al("/api/files/data/"+A.pI(2,b,B.o,!1)+"/"+A.pI(2,a,B.o,!1))
k=i.a===0?l:l.kX(i)
s=3
return A.a(n.rR(new A.eM("GET",k,B.aB,null)),$async$bM)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.b2(new A.wH()).A().h0(B.cl),$async$bM)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.mb(A.Kd(m.a,m.b,""),k))
case 5:q=n.q4(m.c)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bM,r)},
q4(a){var s,r,q={},p=this.d
if(p.a<=0)return a
s=A.oS()
q.a=q.b=null
r=new A.wz(q,p,s)
s.b=A.nS(new A.wv(q),new A.ww(q,r,a,s),new A.wx(q),new A.wy(q,r),!0,t.L)
return s.aE().gcK()},
bO(a){return this.xw(a)},
xw(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bO=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.al("/api/batch")
a6=A.l([],t.ic)
for(l=J.ax(a7),k=l.gt(a7),j=t.N,i=t.X,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",p.jr(g.d)],j,i)],j,h))}s=3
return A.a(p.fg("POST",a5,B.h.a9(A.m(["requests",a6],j,t.ew),null)),$async$bO)
case 3:o=b0
if(o.a===403)throw A.b(A.K3(p.f2(o)))
if(o.a===400)throw A.b(A.Jw(p.f2(o)))
p.e5(o,A.l([200],t.t),a5)
n=null
try{n=B.h.aI(o.c,null)}catch(a8){a6=A.B(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aX("Batch response is not valid JSON: "+m.giE()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aX("Batch response has no results array."))}else throw A.b(A.aX("Batch response is not a list or envelope."))
e=c}a6=J.J(e)
if(a6.gm(e)!==l.gm(a7))throw A.b(A.aX("Batch response has "+a6.gm(e)+" results for "+l.gm(a7)+" requests."))
b=A.l([],t.g2)
for(k=t.f,j=p.e,a=0;a<l.gm(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aX("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.cK(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.ha(a3,j):null
g=a2?null:p.qI(a0)
a4=a2&&k.b(a3)?B.h.a9(a3.h(0,"data"),null):null
b.push(new A.hf(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bO,r)},
iN(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fg("POST",p.b.al("/api/batch"),B.h.a9(A.m(["requests",[]],t.N,t.kS),null)),$async$iN)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.lr(p.f2(o)))
if(n===408||n===429||n>=500)throw A.b(A.Gh("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iN,r)},
jX(a){return this.b.al("/api/collections/data/records/"+A.pI(2,a,B.o,!1))},
fg(a,b,c){return this.cq(new A.wD(this,a,b,c),new A.wE(),t.w)},
mB(a,b){return this.fg(a,b,null)},
tK(a){return this.cq(new A.wF(this,a),new A.wG(),t.w)},
rR(a){return this.cq(new A.wB(this,a),new A.wC(),t.lI)},
cq(a,b,c){return this.ui(a,b,c,c)},
ui(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cq=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.hh(),$async$cq)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$cq)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.jj(),$async$cq)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$cq)
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
i=A.B(g)
if(i instanceof A.dO){j=i
throw A.b(A.Gh(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cq,r)},
hh(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hh=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dP(),$async$hh)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.B(j)
l=A.lr("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hh,r)},
eN(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$eN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.iR(),$async$eN)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.B(j)
l=A.lr("token refresh failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eN,r)},
jj(){var s=0,r=A.h(t.q),q,p=this
var $async$jj=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.eN()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jj,r)},
k7(a,b,c,d){return this.tI(a,b,c,d)},
tI(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$k7=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.t(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.bg(new A.eM(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k7,r)},
e5(a,b,c){if(B.b.E(b,a.a))return
throw A.b(this.mb(a,c))},
mb(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.f2(a)
if(401===s)return new A.bK(q)
if(403===s)return new A.ce(q)
if(404===s)return new A.cf(q)
if(408===s||429===s)return new A.cW(r,q)
if(400===s)return new A.di(q)
if(s>=500)return new A.f_(q)
return new A.e2("Unexpected status "+s+" for "+b.l(0)+": "+q)},
f2(a){var s,r,q,p,o
try{s=this.dq(a)
r=J.Q(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.Q(s,"data")
if(t.f.b(q)){p=q
p=p.gS(p)}else p=!1
if(p){p=B.h.a9(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.B(p,0,500)},
dq(a){var s,r,q,p=null
try{p=B.h.aI(a.c,null)}catch(r){q=A.B(r)
if(t.Y.b(q)){s=q
throw A.b(A.aX("Response is not valid JSON: "+s.giE()))}else throw r}if(t.f.b(p))return A.bu(p,t.N,t.X)
throw A.b(A.aX("Expected a JSON object, got "+J.c9(p).l(0)+"."))},
qI(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.wI.prototype={
$1(a){return A.ha(a,this.a.e)},
$S:114}
A.wH.prototype={
$1(a){},
$S:11}
A.wz.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.A()
r=this.b
s.b=A.c4(r,new A.wA(s,this.c,r))},
$S:0}
A.wA.prototype={
$0(){var s=this.b
s.aE().kh(new A.dt("download stalled: no chunk within "+this.c.l(0)))
s.aE().q()
s=this.a.a
if(s!=null)s.A()},
$S:0}
A.ww.prototype={
$0(){var s,r,q=this,p=q.b
p.$0()
s=q.d
r=q.a
r.a=q.c.bB(new A.ws(p,s),new A.wt(r,s),new A.wu(r,s))},
$S:0}
A.ws.prototype={
$1(a){this.a.$0()
J.aO(this.b.aE(),a)},
$S:11}
A.wu.prototype={
$2(a,b){var s=this.a.b
if(s!=null)s.A()
this.b.aE().bo(a,b)},
$S:6}
A.wt.prototype={
$0(){var s=this.a.b
if(s!=null)s.A()
this.b.aE().q()},
$S:0}
A.wx.prototype={
$0(){var s=this.a.a
return s==null?null:s.bb()},
$S:0}
A.wy.prototype={
$0(){var s=this.a.a
if(s!=null)s.b3()
this.b.$0()},
$S:0}
A.wv.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.A()
s=s.a
return s==null?null:s.A()},
$S:116}
A.wD.prototype={
$1(a){var s=this
return s.a.k7(s.b,s.c,s.d,a)},
$S:64}
A.wE.prototype={
$1(a){return a.a},
$S:60}
A.wF.prototype={
$1(a){var s=this.b,r=t.N
r=A.bO(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dU(new A.mB(s.a,s.b,r,s.d,s.e))},
$S:64}
A.wG.prototype={
$1(a){return a.a},
$S:60}
A.wB.prototype={
$1(a){var s=this.b,r=t.N
r=A.bO(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.eJ(new A.eM(s.a,s.b,r,s.d))},
$S:134}
A.wC.prototype={
$1(a){return a.a},
$S:136}
A.jD.prototype={}
A.i2.prototype={}
A.wK.prototype={
aC(){var s=0,r=A.h(t.H),q,p=this
var $async$aC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.y){s=1
break}p.y=!0
p.ff()
case 1:return A.e(q,r)}})
return A.f($async$aC,r)},
aL(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.y=!1
n=q.Q
if(n!=null)n.A()
q.Q=null
n=q.z
n=n==null?null:n.A()
s=2
return A.a(n instanceof A.w?n:A.bF(n,t.H),$async$aL)
case 2:q.z=null
p=q.as
if(p!=null?(p.a.a&30)===0:o)p.ak()
return A.e(null,r)}})
return A.f($async$aL,r)},
ff(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$ff=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.r,m=t.H
case 2:if(!o.y){s=3
break}q=5
s=8
return A.a(o.c_(),$async$ff)
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
return A.a(A.K9(n.$1(k),m),$async$ff)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ff,r)},
mi(a){var s=this.a,r=t.N
return s.a.eJ(new A.eM("GET",s.b.al("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
mC(a,b){var s=this.a,r=t.N
return s.a.bg(new A.eM("POST",s.b.al("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a9(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
c_(){return this.qj()},
qj(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$c_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.i2(),$async$c_)
case 3:k=b
m.a=k
s=4
return A.a(p.mi(k),$async$c_)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.eN(),$async$c_)
case 7:k=b
m.a=k
s=8
return A.a(p.mi(k),$async$c_)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iZ("realtime connect status "+l,null))
s=!p.y?9:10
break
case 9:s=11
return A.a(o.c.b2(new A.wN()).A(),$async$c_)
case 11:s=1
break
case 10:++p.ax
p.as=new A.aG(new A.w($.C,t.D),t.Q)
l=$.q3()
n=A.l([],t.s)
m.b=m.c=!1
n=o.c.bB(new A.wO(m,p,new A.wR(p),new A.Bw(new A.Al(l),n)),new A.wP(p),new A.wQ(p))
p.z=n
s=!p.y?12:13
break
case 12:s=14
return A.a(n.A(),$async$c_)
case 14:p.z=null
s=1
break
case 13:s=15
return A.a(p.as.a,$async$c_)
case 15:l=p.Q
if(l!=null)l.A()
p.z=p.Q=null
if(m.b)throw A.b(A.iZ("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
ea(a,b){return this.r7(a,b)},
r7(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ea=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.mC(h,b),$async$ea)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.eN(),$async$ea)
case 10:s=9
return A.a(p.mC(g,d),$async$ea)
case 9:s=7
break
case 8:d=l
case 7:k=d.a
if(k!==204&&k!==200)throw A.b(A.iZ("realtime subscribe status "+k,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
if(!t.f.b(n)){s=1
break}try{m=A.ha(n,p.a.e)
p.x.$1(new A.jD(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$ea,r)}}
A.wT.prototype={
$1(a){return A.I9(a,this.a,this.b,A.Pk())},
$S:138}
A.wN.prototype={
$1(a){},
$S:11}
A.wR.prototype={
$0(){var s,r=this.a,q=r.e
if(q.a<=0)return
s=r.Q
if(s!=null)s.A()
r.Q=A.c4(q,new A.wS(r))},
$S:0}
A.wS.prototype={
$0(){var s,r=this.a
if(!r.y)return
s=r.z
if(s!=null)s.A()
r=r.as
if((r.a.a&30)===0)r.ak()},
$S:0}
A.wO.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
l.c.$0()
s=l.d.w3(a)
for(r=s.length,q=l.b,p=l.a,o=t.P,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
q.at=q.at.W(new A.wL(p,q,m),o).kl(new A.wM(q))}},
$S:11}
A.wL.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.b){s=1
break}p=4
s=7
return A.a(n.b.ea(n.c,i.a),$async$$1)
case 7:p=2
s=6
break
case 4:p=3
h=o.pop()
i.b=!0
i=n.b
j=i.z
j=j==null?null:j.A()
s=8
return A.a(j instanceof A.w?j:A.bF(j,t.H),$async$$1)
case 8:i=i.as
if((i.a.a&30)===0)i.ak()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.c&&n.c.a!=null){i.c=!0
try{n.b.w.$0()}catch(g){m=A.B(g)
l=A.af(g)
i=n.b
i.ay=m
i.ch=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:143}
A.wM.prototype={
$2(a,b){var s=this.a
if(s.ay==null)s.ay=a
if(s.ch==null)s.ch=b},
$S:6}
A.wP.prototype={
$0(){var s=this.a,r=s.Q
if(r!=null)r.A()
s=s.as
if((s.a.a&30)===0)s.ak()},
$S:0}
A.wQ.prototype={
$1(a){var s=this.a,r=s.Q
if(r!=null)r.A()
s=s.as
if((s.a.a&30)===0)s.ak()},
$S:21}
A.Bw.prototype={
w3(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.iV()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.rk(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.d5(p,o,q)))
p=o+1
m=this.qw(B.a.ya(new A.dB(!0).dm(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.bh(s,p))
return r},
rk(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qZ(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.aq(k)
return l}s=m.b
r=B.b.C(k,"\n")
m.b=null
B.b.aq(k)
try{q=B.h.aI(r,l)
if(t.f.b(q)){p=A.bu(q,t.N,t.X)
o=J.Q(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.i2(o,l)
return new A.i2(l,p)}}catch(n){}return l},
qw(a){var s,r=this,q=null
if(a.length===0)return r.qZ()
if(B.a.T(a,"PB_CONNECT:")){r.b=null
B.b.aq(r.c)
return new A.i2(B.a.cf(B.a.ab(a,11)),q)}if(B.a.T(a,":"))return q
if(B.a.T(a,"event:")){r.b=B.a.cf(B.a.ab(a,6))
return q}if(B.a.T(a,"data:")){s=B.a.cf(B.a.ab(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eM.prototype={}
A.dN.prototype={
pc(){return this.d.$0()},
gm(a){return this.c}}
A.mB.prototype={}
A.cQ.prototype={}
A.dO.prototype={
l(a){return"HttpTransportException: "+this.a},
$iI:1}
A.e7.prototype={}
A.wp.prototype={
bg(a){return this.oX(a)},
oX(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bg=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eJ(a),$async$bg)
case 7:m=c
j=m.c
s=8
return A.a(B.aR.ln(j).eD(0).h0(B.V),$async$bg)
case 8:l=c
j=m.a
i=m.b
q=new A.cQ(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.B(g)
if(j instanceof A.dO)throw g
else{k=j
j=A.iZ("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bg,r)},
dU(a){return this.oY(a)},
oY(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dU=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.KC(a6.a,a6.b)
h.r.D(0,a6.c)
h.x.D(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.pc(),$async$dU)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.Iw(a0)
a3=new A.h_("application".toLowerCase(),"octet-stream".toLowerCase(),new A.d_(A.t(d,d),e))
b.push(new A.n1(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.p)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.bg(m).h0(B.V),$async$dU)
case 11:k=a8
g=k.w
s=12
return A.a(B.aR.ln(g).eD(0).h0(B.V),$async$dU)
case 12:j=a8
g=k.b
f=k.e
q=new A.cQ(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.B(a5)
if(g instanceof A.dO)throw a5
else{i=g
g=A.iZ("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dU,r)},
eJ(a){return this.xh(a)},
xh(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eJ=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.L_(a,a0)
a1.r.D(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gky().kx(j)
i.q3()
i.y=A.Pt(j)
h=i.gcO()
if(h==null){j=t.N
i.scO(A.DV("text","plain",A.m(["charset",i.gky().gaZ()],j,j)))}else{j=i.gcO()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c9(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gky().gaZ()],j,j)
e=h.a
d=h.b
c=A.bu(h.c,j,j)
c.D(0,f)
i.scO(A.DV(e,d,c))}}}p=4
s=7
return A.a(n.a.bg(a1).h0(B.V),$async$eJ)
case 7:m=a5
j=t.N
l=A.t(j,j)
m.e.a5(0,new A.wq(l))
j=m.b
i=m.w
q=new A.e7(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.B(a2)
if(j instanceof A.dO)throw a2
else{k=j
a=A.iZ("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eJ,r)}}
A.wq.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:34}
A.rk.prototype={
$1(a){return a.b===this.a},
$S:152}
A.rl.prototype={
$1(a){return a.b===this.a},
$S:157}
A.lN.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.O(s,A.n(s).c)
B.b.aj(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.O(s,A.n(s).c)
B.b.aj(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.jG.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iI:1}
A.cc.prototype={}
A.lJ.prototype={
gY(){return"committedChange"},
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
B.b.aj(s)
q.j(0,"changedFields",s)
return q}}
A.lR.prototype={
gY(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.k5.prototype={
gY(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.ms.prototype={
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
A.mh.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"size",r.e)
q.j(0,"field",r.c)
q.j(0,"name",r.d)
s=r.f
if(s!=null)q.j(0,"expectedSha256",s)
if(r.r)q.j(0,"allowVolatileBlobs",!0)
return q}}
A.mi.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.mn.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.mj.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.mg.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.mw.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.mq.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.ml.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
s=r.d
if(s!=null)q.j(0,"refId",s)
return q}}
A.mk.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.mt.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.mo.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.ma.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.nQ.prototype={
p(){return B.j}}
A.mv.prototype={
gY(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.iR.prototype={
gY(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fT.prototype={
gY(){return"fileRefs"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.mr.prototype={
gY(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fS.prototype={
gY(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fQ.prototype={
gY(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.hu.prototype={
gY(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fR.prototype={
gY(){return"fileChunk"},
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",r.b)
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.w3.prototype={}
A.jm.prototype={}
A.jp.prototype={}
A.jn.prototype={}
A.jq.prototype={}
A.jj.prototype={}
A.jk.prototype={}
A.ji.prototype={}
A.jo.prototype={}
A.jl.prototype={}
A.Ch.prototype={
$2(a,b){return new A.V(J.X(a),b,t.I)},
$S:12}
A.xD.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.t(k,j),h=t.d,g=A.l([],h)
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
A.xE.prototype={
$2(a,b){return new A.V(J.X(a),b,t.I)},
$S:12}
A.xF.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.R("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.E(a);r.k();)s.push(A.G5(r.gn()))
return s},
$S:165}
A.eY.prototype={
p(){var s,r,q,p,o=this,n=A.t(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.push(A.fp(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.fp(o.c))
return n}}
A.xz.prototype={
$2(a,b){return new A.V(J.X(a),b,t.I)},
$S:12}
A.xA.prototype={
$1(a){return a.b===this.a},
$S:167}
A.b7.prototype={
a7(){return"QueryConditionOp."+this.b}}
A.cT.prototype={}
A.wY.prototype={
$2(a,b){return new A.V(J.X(a),b,t.I)},
$S:12}
A.wX.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.R("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.E(a);r.k();)s.push(A.DX(r.gn()))
return s},
$S:168}
A.j9.prototype={
p(){var s=A.t(t.N,t.X)
s.j(0,"kind","leaf")
s.D(0,this.a.p())
return s}}
A.jx.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.it.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.iu.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.np.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.xC.prototype={
$2(a,b){return new A.V(J.X(a),b,t.I)},
$S:12}
A.cM.prototype={
a7(){return"AggregateFn."+this.b}}
A.xV.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.xW.prototype={
$2(a,b){return new A.V(J.X(a),b,t.I)},
$S:12}
A.nu.prototype={}
A.nc.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"stores",this.a)
r.j(0,"manifestFingerprints",this.b)
s=this.c
if(s!=null)r.j(0,"storePolicies",s)
return r}}
A.lE.prototype={
p(){return B.j}}
A.mz.prototype={
p(){return B.j}}
A.lH.prototype={
p(){return B.j}}
A.mx.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.ny.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n2.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.MW(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nq.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lU.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lT.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.m6.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.mC.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lk.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.md.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nE.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.e9.prototype={
a7(){return"TransactionDurability."+this.b}}
A.od.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.oe.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.og.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.oi.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.oh.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.of.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.ox.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.oy.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.ow.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.lm.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ov.prototype={
p(){return B.j}}
A.ot.prototype={
p(){return B.j}}
A.nm.prototype={
p(){return B.j}}
A.lK.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.nz.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lQ.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.lO.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nw.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.lh.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.li.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.lS.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.aj.prototype={}
A.h8.prototype={
gY(){return"ok"},
p(){return B.j}}
A.iA.prototype={
gY(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.mA.prototype={
gY(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.hk.prototype={
gY(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.hl.prototype={
gY(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.h3.prototype={
gY(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.hh.prototype={
gY(){return"queryRows"},
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fK.prototype={
gY(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fM.prototype={
gY(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fW.prototype={
gY(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fz.prototype={
gY(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fP.prototype={
gY(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.hn.prototype={
gY(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.nD.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fI.prototype={
gY(){return"conflicts"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fH.prototype={
gY(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hB.prototype={
gY(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hI.prototype={
gY(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.hd.prototype={
gY(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fG.prototype={
gY(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.f2.prototype={
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
A.bg.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.o3.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.o8.prototype={
p(){return B.j}}
A.nZ.prototype={
p(){return B.j}}
A.o_.prototype={
p(){return B.j}}
A.o1.prototype={
p(){return B.j}}
A.o9.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.o2.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.o6.prototype={
p(){return B.j}}
A.o4.prototype={
gY(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.o0.prototype={
gY(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.o7.prototype={
gY(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.o5.prototype={
gY(){return"syncStatusEvent"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.ls.prototype={
gY(){return"authRequired"},
p(){return B.j}}
A.f4.prototype={
l(a){return"WireException: "+this.a},
$iI:1}
A.Dr.prototype={
$2(a,b){return B.a.a3(a.a,b.a)},
$S:177}
A.ni.prototype={
a7(){return"PlatformProfile."+this.b}}
A.nP.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.y5.prototype={
$1(a){return J.bH(a.gb0())},
$S:42}
A.y6.prototype={
$1(a){return B.a.E(a,"ENABLE_FTS5")},
$S:13}
A.iC.prototype={
a7(){return"ChangeOrigin."+this.b}}
A.dJ.prototype={
a7(){return"ChangeAction."+this.b}}
A.e4.prototype={
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
B.b.aj(s)
q.j(0,"changedFields",s)
return q},
P(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.e4))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.p.V(b.e,s.e)&&B.p.V(b.f,s.f)&&B.p.V(b.r,s.r)},
gK(a){var s=this
return A.ch(s.a,s.b,s.c,s.d,B.p.ad(s.e),B.p.ad(s.f),B.p.ad(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a6.prototype={}
A.qC.prototype={
kv(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
vQ(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.qD.prototype={}
A.qE.prototype={}
A.tc.prototype={}
A.q9.prototype={
vR(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.d9(256)
q=this.b.vS(new Uint8Array(A.bc(a)),b,m,this.c)
s=q.a
p=s.length
o=29+p
n=new Uint8Array(o)
n[0]=1
B.f.aA(n,1,13,q.c)
p=13+p
B.f.aA(n,13,p,s)
B.f.aA(n,p,o,q.b.a)
return n},
v7(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.U("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.A("Unsupported ciphertext version 0x"+B.a.iK(B.c.l0(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.bc(B.f.U(a,1,13)))
n-=16
r=new Uint8Array(A.bc(B.f.bh(a,n)))
q=new Uint8Array(A.bc(B.f.U(a,13,n)))
try{n=this.b.v8(new A.jR(q,new A.jc(r),s),b,this.c)
return n}catch(o){if(A.B(o) instanceof A.jS)throw A.b(A.A("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.df.prototype={
a7(){return"KindViolation."+this.b}}
A.CH.prototype={
$2(a,b){return B.a.a3(a.a,b.a)},
$S:193}
A.fi.prototype={$iI:1}
A.Ba.prototype={
c8(){var s=0,r=A.h(t.N),q,p=this,o
var $async$c8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c8,r)}}
A.pC.prototype={}
A.i0.prototype={}
A.uk.prototype={
pt(a,b){var s=this,r=s.a.a.a$.b
r=new A.aZ(r,A.n(r).i("aZ<1>")).b2(new A.uO(s))
s.c!==$&&A.dE()
s.c=r},
wf(a){var s,r,q=this
A:{if(a instanceof A.nc){s=q.hC(a.a,a.b)
break A}if(a instanceof A.lE){s=A.be(q.hi(),t.V)
break A}if(a instanceof A.mz){s=A.be(new A.mA(!0,q.a.d.a),t.V)
break A}if(a instanceof A.lH){s=q.q().W(new A.uP(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mx){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bK(r,new A.uQ(s,q),new A.uR())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ny){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bK(r,new A.v1(s,q),new A.vc())
break A}if(a instanceof A.n2){s=q.rv(a.a,a.b,a.c)
break A}if(a instanceof A.nq){s=q.rS(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lU){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bK(r,new A.vd(s,q),A.HY())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lT){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bK(r,new A.ve(s,q),A.HY())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.m6){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bK(r,new A.vf(s,q),A.On())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mC){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bK(r,new A.vg(s,q),A.Op())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.lk){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bK(r,new A.vh(s,q),A.Om())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.md){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bK(r,new A.vi(s,q),A.Oo())
break A}if(a instanceof A.nE){s=q.tE(a.a,a.b,a.c)
break A}if(a instanceof A.od){s=q.pR(a.a,a.b)
break A}if(a instanceof A.oe){s=q.fh(a.a,!0)
break A}if(a instanceof A.og){s=q.fh(a.a,!1)
break A}if(a instanceof A.oi){s=q.hL(a.a,a.b)
break A}if(a instanceof A.oh){s=q.hK(a.a,a.b)
break A}if(a instanceof A.of){s=q.hI(a.a,a.b)
break A}if(a instanceof A.ox){s=q.hT(a.a,a.b)
break A}if(a instanceof A.oy){s=q.uf(a.a,a.b)
break A}if(a instanceof A.ow){s=q.kd(a.a)
break A}if(a instanceof A.lm){s=q.a.a.e
s===$&&A.v()
s=s.er(a.a).W(new A.uS(),t.V)
break A}if(a instanceof A.ov){s=q.a.a.e
s===$&&A.v()
s=s.h2().W(new A.uT(),t.V)
break A}if(a instanceof A.ot){s=q.a.a.e
s===$&&A.v()
s=s.iY().W(new A.uU(),t.V)
break A}if(a instanceof A.nm){s=q.a.a.e
s===$&&A.v()
s=s.fP().W(new A.uV(),t.V)
break A}if(a instanceof A.lK){s=q.a.a.e
s===$&&A.v()
s=s.ev(a.a,A.bX(0,a.b,0)).W(new A.uW(),t.V)
break A}if(a instanceof A.nz){s=q.a.a.e
s===$&&A.v()
s=s.de(A.bX(0,a.a,0)).W(new A.uX(),t.V)
break A}if(a instanceof A.lQ){s=q.a.a.fr
s===$&&A.v()
s=s.fF(a.a).W(new A.uY(q),t.V)
break A}if(a instanceof A.lO){s=q.a.a.fr
s===$&&A.v()
s=s.dT(a.a,a.b).W(new A.uZ(q),t.V)
break A}if(a instanceof A.nw){s=q.a.a.fr
s===$&&A.v()
s=s.eO(a.b,a.c,a.a).W(new A.v_(),t.V)
break A}if(a instanceof A.lh){s=q.a.a.fr
s===$&&A.v()
s=s.fk(a.a,a.b).W(new A.v0(),t.V)
break A}if(a instanceof A.li){s=q.a.a.fr
s===$&&A.v()
s=s.ep(a.a,a.b).W(new A.v2(),t.V)
break A}if(a instanceof A.lS){s=q.ug(a.a)
break A}if(a instanceof A.mh){s=q.jx(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.mi){s=q.jy(a.a,a.b)
break A}if(a instanceof A.mn){s=q.hu(a.a)
break A}if(a instanceof A.mg){s=q.jw(a.a)
break A}if(a instanceof A.mw){s=q.a.a.fx
s===$&&A.v()
s=s.d7(a.c,a.b,a.a).W(new A.v3(q),t.V)
break A}if(a instanceof A.mq){s=q.hv(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.mk){s=q.jz(a.a,a.b)
break A}if(a instanceof A.mj){s=q.hs(a.a)
break A}if(a instanceof A.mt){s=q.a.a.fx
s===$&&A.v()
s=s.fU(0,a.c,a.d,a.b,a.e,a.a).W(new A.v4(),t.V)
break A}if(a instanceof A.ml){s=q.ht(a.a,a.b,a.c,a.d)
break A}if(a instanceof A.mo){s=q.a.a.fx
s===$&&A.v()
s=s.bs(A.bX(0,a.a,0),A.bX(0,a.b,0)).W(new A.v5(),t.V)
break A}if(a instanceof A.ma){s=q.a.a.fx
s===$&&A.v()
s=s.d1(a.a).W(new A.v6(),t.V)
break A}if(a instanceof A.nQ){s=q.a.a.fx
s===$&&A.v()
s=s.gix().W(new A.v7(),t.V)
break A}if(a instanceof A.o3){s=q.en(a.a,a.b,a.c)
break A}if(a instanceof A.o8){s=q.cW().W(new A.v8(),t.V)
break A}if(a instanceof A.nZ){s=q.hN()
break A}if(a instanceof A.o_){s=q.em(new A.v9(q))
break A}if(a instanceof A.o1){s=q.em(new A.va(q))
break A}if(a instanceof A.o9){s=q.hO(a.a)
break A}s={}
s.a=null
if(a instanceof A.o2){s.a=a.a
s=q.em(new A.vb(s,q))
break A}if(a instanceof A.o6){s=q.ax
s=A.be(new A.o7(s==null?B.dZ:s),t.V)
break A}throw A.b(A.e3(u.P))}return s},
hC(a,b){return this.rP(a,b)},
rP(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hC=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.fy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.qI(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:h=n.f
h===$&&A.v()
s=9
return A.a(h.b_(j),$async$hC)
case 9:s=7
break
case 8:g=m.h(0,i)
if(g==null)A.u(A.A('No store "'+i+'" registered in this LocalPocket.'))
f=g.c
e=A.E5(j)
d=new A.a7("")
A.cq(d,f.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.cb()
b=A.d4(c)
b.u(0,h)
b.q()
b=A.au(c.a.a)
d=new A.a7("")
A.cq(d,e.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.cb()
a=A.d4(c)
a.u(0,h)
a.q()
if(b!==A.au(c.a.a))throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){g=m.h(0,i)
if(g==null)A.u(A.A('No store "'+i+'" registered in this LocalPocket.'))
d=new A.a7("")
A.cq(d,g.c.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.cb()
b=A.d4(c)
b.u(0,h)
b.q()
b=a0!==A.au(c.a.a)
h=b}else h=!1
if(h)throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.p)(a1),++k
s=3
break
case 5:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hC,r)},
hi(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$hi=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bH(B.b.gH(m.b.oV("PRAGMA journal_mode")).gb0())
m=m.a.fx
m===$&&A.v()
s=3
return A.a(m.gix(),$async$hi)
case 3:o=b
m=l.e===B.aF
n=m?"opfs":"file"
q=new A.iA(l.a,l.b,l.c,l.d,m,n,o,J.X(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
e1(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.aw(a)
if(b!=null){s=this.dw(b)
r=A.FK(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.u(A.A('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.dw(b)
return new A.fF(n,m,new A.iP(q),p.r)}return new A.fF(n,m,o.gbA(),null)},
q6(a){return this.e1(a,null)},
rv(a,b,c){return this.bK(c,new A.uz(this,a,c,b),new A.uA())},
bF(a,b){var s
A.au(B.m.v(B.e.v(A.al(this.a.a.aw(a).c.p()))).a)
if(a.length===0)A.u(A.aD(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.u(A.aD(s,"spec.limit","must not be negative"))
return new A.xB(a,b)},
bm(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.e1(a.a,a0),c=t.fC,b=new A.no(d.a,d.b.a,d.c.b,A.l([],c),A.l([],c),A.l([],t.k),A.l([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s)b=this.pN(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.p)(d),++s){o=d[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bk)throw A.b(A.G('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.xj(n)}j=e.c
if(j!=null){d=A.Dc(j)
b.ke(d)
A.Ex(d)
i=A.Cc(d,!0)
h=b.hl()
h.d.push(new A.ba(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s,b=h){g=d[s]
q=g.a
b.dk(q)
h=b.hl()
h.r.push(new A.cx(q,g.b))}d=e.r
if(d!=null)b=b.lL(A.bP(d,!0,r))
if(e.w)b=b.qn(!0)
if(e.x)b=b.qo(!0)
if(e.f)b=b.ql(!0)
else{d=e.e
if(d!=null){if(d<0)A.u(A.G("Limit must be non-negative, got "+A.r(d)+".",f))
b=b.qp(d)}}return b},
pN(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.nY(0,b.a,!0)
return a.yp(0,b.a,s)
case 1:return a.yw(0,b.a,b.c)
case 2:return a.yq(0,b.a,b.c)
case 3:return a.yr(0,b.a,b.c)
case 4:return a.yu(0,b.a,b.c)
case 5:return a.yv(0,b.a,b.c)
case 6:return a.ys(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.k
if(r.length!==2)throw A.b(A.U("between requires exactly two values.",null))
return a.ym(0,b.a,new A.a_(r[0],r[1]))
case 8:return a.yx(0,b.a,A.a3(b.c))
case 9:return a.yo(0,b.a,A.a3(b.c))
case 10:return a.yn(0,b.a,A.a3(b.c))
case 11:return a.nY(0,b.a,!0)
case 12:return a.yt(0,b.a,!0)}},
rS(a,b,c){return this.bK(c,new A.uB(this,this.bF(a,b),c),new A.uC())},
tE(a,b,c){return this.bK(c,new A.uF(this,a,c,b),new A.uG())},
pR(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.A("A transaction session is already active on this database."))
s="tx"+ ++l.ay
r=$.C
q=t.D
p=t.Q
o=new A.w(r,q)
n=new A.pC(s,new A.aG(new A.w(r,q),p),new A.aG(o,p),A.l([],t.mc),new A.aI(Date.now(),0,!1))
k.j(0,s,n)
l.qG()
m=l.a.a
k=new A.un(n)
if(a){if(A.oj(m)!=null)A.u(A.A(u.L))
r=m.b
r===$&&A.v()
k=r.xJ(k,t.H)}else{r=b===B.bu?B.b0:B.q
r=m.b7(k,r,t.H)
k=r}n.w!==$&&A.dE()
n.w=k
k.kl(new A.ul(l,n,s))
return o.W(new A.um(s),t.V)},
fh(a,b){return this.tN(a,b)},
tN(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$fh=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.dw(a)
for(l=h.e,k=A.a1(l).i("bE<1>"),l=new A.bE(l,k),l=new A.as(l,l.gm(0),k.i("as<a0.E>")),k=k.i("a0.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.u(A.A("Future already completed"))
j.aN(null)}h.f=!b
h.c.ak()
p=4
l=h.w
l===$&&A.v()
s=7
return A.a(l,$async$fh)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.B(g) instanceof A.fi){if(b)throw g}else throw g
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
return A.f($async$fh,r)},
hL(a,b){return this.tB(a,b)},
tB(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.dw(a)
n=$.C
m=t.D
l=t.Q
k=new A.w(n,m)
j=new A.i0(b,new A.aG(new A.w(n,m),l),new A.aG(k,l))
l=o.r.a1(new A.uE(j),t.H)
j.f!==$&&A.dE()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hL)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)},
hK(a,b){return this.tz(a,b)},
tz(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hK=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.dw(a).e
f=B.b.nn(g,new A.uD(b))
if(f<0)throw A.b(A.A('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a1(g).i("bE<1>")
l=A.O(new A.bE(g,l),l.i("a0.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.ca(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.u(A.A("Future already completed"))
i.aN(null)
p=7
i=m.f
i===$&&A.v()
s=10
return A.a(i,$async$hK)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.B(e) instanceof A.fi))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:B.b.iU(g,f,g.length)
q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hK,r)},
hI(a,b){return this.tr(a,b)},
tr(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hI=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.dw(a).e
j=A.FK(k)
if(j==null||j.a!==b)throw A.b(A.A('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.ak()
p=4
m=j.f
m===$&&A.v()
s=7
return A.a(m,$async$hI)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.B(i) instanceof A.fi)throw i
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
return A.f($async$hI,r)},
hT(a,b){return this.uh(a,b)},
uh(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.aw(a)
s=3
return A.a(p.q6(a).bV(b),$async$hT)
case 3:o="w"+ ++p.ay
n=A.oS()
n.sii(new A.nb(l,b,m,B.b1).ja().nw(new A.uK(p,o),new A.uL(p,n,o)))
p.f.j(0,o,n.aE())
q=A.be(new A.hI(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
uf(a,b){var s=this,r="w"+ ++s.ay,q=s.bm(s.bF(a,b),null),p=A.oS()
p.sii(new A.nr(q,q.gej(),B.b1).ja().nw(new A.uM(s,r),new A.uN(s,p,r)))
s.f.j(0,r,p.aE())
return A.be(new A.hI(r),t.V)},
kd(a){return this.u4(a)},
u4(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$kd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.G(0,a)
if(o!=null)o.A()
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kd,r)},
qH(){if(this.w!=null)return
this.w=A.yA(A.bX(9e8,0,0),new A.uu(this))},
jx(a,b,c,d,e,f,g){return this.qQ(a,b,c,d,e,f,g)},
qQ(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$jx=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.qH()
o=p.r
n="u"+ ++p.ay
o.ni()
m=o.r
if(m.a>=16)A.u(A.G("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.u(A.G("Invalid file size: "+c,null))
if(o.gnS()+c>536870912)A.u(A.G("Aggregate upload quota exceeded: "+o.gnS()+" + "+c+" > 536870912",null))
o=o.f.$0().ji(18e8)
m.j(0,n,new A.cP(n,a,b,d,e,c,f,g,A.l([],t.bs),o))
q=new A.mv("u"+p.ay,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jx,r)},
jy(a,b){return this.qR(a,b)},
qR(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$jy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.u(A.G("Unknown upload session: "+a,null))
l=l.f
if(!j.z.kL(l.$0())){k.G(0,a)
A.u(A.G("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.G(0,a)
A.u(A.G("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.G(0,a)
A.u(A.G("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().ji(18e8)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jy,r)},
hu(a){return this.qV(a)},
qV(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hu=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.G(0,a)
if(g==null)A.u(A.G("Unknown upload session: "+a,null))
if(!g.z.kL(h.f.$0()))A.u(A.G("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.u(A.G("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.fx
h===$&&A.v()
n=g.b
m=g.c
l=new A.uv(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.dB(g.w,l,i,o,k,j,m,n),$async$hu)
case 3:q=new f.iR(p.jA(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
jw(a){return this.qP(a)},
qP(a){var s=0,r=A.h(t.V),q,p=this
var $async$jw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.G(0,a)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jw,r)},
hv(a,b,c,d,e){return this.qX(a,b,c,d,e)},
qX(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$hv=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.fx
k===$&&A.v()
s=3
return A.a(k.fL(c,d,b,e,a),$async$hv)
case 3:o=g
n="f"+ ++p.ay
m=new A.mm(new A.aI(Date.now(),0,!1))
m.c=new A.aI(Date.now(),0,!1)
l=A.oS()
l.sii(o.bB(new A.uw(p,m,n,l),new A.ux(p,n),new A.uy(p,n)))
k=l.aE()
m.d!==$&&A.dE()
m.d=k
p.x.j(0,n,m)
p.qF()
q=new A.mr(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
ht(a,b,c,d){return this.qU(a,b,c,d)},
qU(a,b,c,d){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$ht=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.ek().x
o===$&&A.v()
n=A
s=3
return A.a(o.dD(c,b,d,a),$async$ht)
case 3:q=new n.iR(p.jA(f))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
jz(a,b){return this.qT(a,b)},
qT(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$jz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.A('Unknown file stream "'+a+'".'))
if((n.b-=b)<0)n.b=0
n.c=new A.aI(Date.now(),0,!1)
if(n.b<1048576){o=n.d
o===$&&A.v()
o.b3()}q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jz,r)},
qF(){if(this.y!=null)return
this.y=A.yA(A.bX(45e7,0,0),new A.uq(this))},
hs(a){return this.qS(a)},
qS(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hs=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.G(0,a)
s=n!=null?3:4
break
case 3:o=n.d
o===$&&A.v()
s=5
return A.a(o.A(),$async$hs)
case 5:case 4:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
jA(a){return new A.ms(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
en(a,b,c){return this.tX(a,b,c)},
tX(a,b,c){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$en=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.G("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cW(),$async$en)
case 3:if(b==null||b.length===0)throw A.b(A.G("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.Ba(c)
m=A.oq(a)
l=o.fy
k=A.n(l).i("T<1>")
l=A.O(new A.T(l,k),k.i("o.E"))
s=4
return A.a(o.ax.cZ(m,b,l,n),$async$en)
case 4:j=a1
m=A.dr(null,null,t.n6)
l=A.dr(null,null,t.kf)
k=t.H
i=A.be(null,k)
h=new A.qc(A.be(null,k))
g=A.be(B.O,t.fD)
f=A.l([],t.s)
k=A.be(null,k)
e=new A.yl(A.Pq(),o.db)
d=new A.nY(o,j,e,new A.uH(p),B.N,m,l,i,h,A.aP(t.N),g,f,k)
k=d.e=new A.yy(o,j.glb())
f=new A.tf(o,j,e,o.CW)
d.x=f
m=new A.xc(o,j,e,k,f,h)
d.f=m
d.r=new A.yj(o,j,e,k,m)
m=j.gi5()
d.w!==$&&A.dE()
d.w=new A.xl(o,j,e,d.grB(),m.a)
p.as=n
p.Q=d
m=d.ay
p.at=new A.aZ(m,A.n(m).i("aZ<1>")).b2(new A.uI(p))
s=5
return A.a(d.aC(),$async$en)
case 5:q=new A.o4(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$en,r)},
ek(){var s=this.Q
return s==null?A.u(A.G("Sync is not started.",null)):s},
hN(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.ek()
o.co("cycle")
n=A
s=3
return A.a(o.fe(),$async$hN)
case 3:q=new n.o0(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
em(a){var s=0,r=A.h(t.V),q
var $async$em=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$em)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$em,r)},
hO(a){return this.tY(a)},
tY(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.as
n=p.ek()
if(o==null)throw A.b(A.G("Sync is not started.",null))
o.a=a
s=3
return A.a(n.eF(),$async$hO)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
cW(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.Q
q.Q=null
p=q.at
p=p==null?null:p.A()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bF(p,o),$async$cW)
case 2:q.at=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aL(),$async$cW)
case 5:p=q.a.a.ax.d_(n)
s=6
return A.a(p,$async$cW)
case 6:case 4:q.ax=q.as=null
return A.e(null,r)}})
return A.f($async$cW,r)},
jp(a){return new A.lN(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
ug(a){var s=this,r="w"+ ++s.ay,q=s.a.a.fr
q===$&&A.v()
s.f.j(0,r,q.yl(a).b2(new A.uJ(s,r)))
return A.be(new A.hI(r),t.V)},
dw(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.A('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.A('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aI(Date.now(),0,!1)
return s},
qG(){var s,r,q=this
if(q.e!=null)return
s=q.a.ay
r=s.a
if(r<=0)return
q.e=A.yA(A.bX(B.c.L(r,4),0,0),new A.ut(q,s))},
hU(a,b,c){return this.uk(a,b,c)},
bK(a,b,c){return this.hU(a,b,c,t.z)},
uk(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.dw(a)
o=c
s=3
return A.a(b.$0(),$async$hU)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cW(),$async$q)
case 2:p=q.f,o=new A.b0(p,p.r,p.e,A.n(p).i("b0<2>"))
case 3:if(!o.k()){s=4
break}s=5
return A.a(o.d.A(),$async$q)
case 5:s=3
break
case 4:p.aq(0)
p=q.w
if(p!=null)p.A()
q.w=null
p=q.e
if(p!=null)p.A()
q.e=null
p=q.y
if(p!=null)p.A()
q.y=null
q.r.r.aq(0)
for(p=q.x,o=new A.b0(p,p.r,p.e,A.n(p).i("b0<2>"));o.k();){n=o.d.d
n===$&&A.v()
n.A()}p.aq(0)
p=q.c
p===$&&A.v()
p.A()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.uO.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.bO(r,t.N,t.X)
s=a.f
s=s==null?null:A.bO(s,t.N,t.X)
this.a.b.u(0,new A.lJ(a.a,a.b,a.c,a.d,r,s,A.c0(a.r,t.N)))},
$S:194}
A.uP.prototype={
$1(a){return B.l},
$S:8}
A.uQ.prototype={
$0(){var s=this.a
return this.b.e1(s.c,s.a).bV(s.b)},
$S:197}
A.uR.prototype={
$1(a){return new A.hk(a)},
$S:201}
A.v1.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.e1(o.c,o.a).bV(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.p)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:202}
A.vc.prototype={
$1(a){return new A.hl(a)},
$S:207}
A.vd.prototype={
$0(){var s=this.b,r=this.a
return s.bm(s.bF(r.c,r.b),r.a).i6()},
$S:59}
A.ve.prototype={
$0(){var s=this.b,r=this.a
return s.bm(s.bF(r.d,r.b),r.a).i8(r.c)},
$S:59}
A.vf.prototype={
$0(){var s=this.b,r=this.a
return s.bm(s.bF(r.d,r.b),r.a).ic(r.c)},
$S:210}
A.vg.prototype={
$0(){var s=this.b,r=this.a
return s.bm(s.bF(r.c,r.b),r.a).iw()},
$S:54}
A.vh.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.bm(s.bF(q.e,q.b),q.a).dj("SUM",q.c)
break
case 1:s=r.b
q=s.bm(s.bF(q.e,q.b),q.a).dj("AVG",q.c)
break
case 2:s=r.b
q=s.bm(s.bF(q.e,q.b),q.a).dj("MIN",q.c)
break
case 3:s=r.b
q=s.bm(s.bF(q.e,q.b),q.a).dj("MAX",q.c)
break
default:q=null}return q},
$S:226}
A.vi.prototype={
$0(){var s=this.b,r=this.a
return s.bm(s.bF(r.c,r.b),r.a).ie()},
$S:227}
A.uS.prototype={
$1(a){return B.l},
$S:8}
A.uT.prototype={
$1(a){return B.l},
$S:8}
A.uU.prototype={
$1(a){return B.l},
$S:8}
A.uV.prototype={
$1(a){return new A.hd(a)},
$S:231}
A.uW.prototype={
$1(a){return new A.fG(a)},
$S:235}
A.uX.prototype={
$1(a){return B.l},
$S:8}
A.uY.prototype={
$1(a){var s,r,q=A.l([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jp(s.gn()))
return new A.fI(q)},
$S:250}
A.uZ.prototype={
$1(a){return new A.fH(a==null?null:this.a.jp(a))},
$S:78}
A.v_.prototype={
$1(a){return B.l},
$S:8}
A.v0.prototype={
$1(a){return B.l},
$S:8}
A.v2.prototype={
$1(a){return B.l},
$S:8}
A.v3.prototype={
$1(a){var s,r,q=A.l([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jA(s.gn()))
return new A.fT(q)},
$S:79}
A.v4.prototype={
$1(a){return B.l},
$S:8}
A.v5.prototype={
$1(a){return new A.fS(a)},
$S:80}
A.v6.prototype={
$1(a){return new A.fQ(a)},
$S:81}
A.v7.prototype={
$1(a){return new A.hu(a)},
$S:82}
A.v8.prototype={
$1(a){return B.l},
$S:8}
A.v9.prototype={
$0(){return this.a.ek().bb()},
$S:3}
A.va.prototype={
$0(){return this.a.ek().b3()},
$S:3}
A.vb.prototype={
$0(){return this.b.ek().hb(this.a.a)},
$S:3}
A.uz.prototype={
$0(){var s=0,r=A.h(t.a),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.e1(p.b,a1)
a0.a.a.c===$&&A.v()
o=p.d
n=o instanceof A.jm
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.fR(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.iG(B.a2,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.H(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 4:n=o instanceof A.jp
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nV(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.iG(B.a3,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.H(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 11:k=o instanceof A.jn
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.nF(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.nG(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.H(f))}}q=a0
s=1
break
case 18:k=o instanceof A.jq
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nW(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bP(i,B.a3),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.H(f))}}q=a0
s=1
break
case 25:e=o instanceof A.jj
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.nC(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.xo(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.jk
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.nD(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.dc(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.O(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.ji
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mX(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.iF(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.jo
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.nP(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.iF(B.D,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.jl
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.iO(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dL(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.e3(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:54}
A.uA.prototype={
$1(a){return new A.h3(a)},
$S:83}
A.uB.prototype={
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
return A.a(o.bm(m,n).qq(!0,k).d2(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.bm(m,n).qm(k).d2(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.bm(m,p.c).d2()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:84}
A.uC.prototype={
$1(a){return new A.hh(a.a,a.d,a.e,a.b,a.c)},
$S:85}
A.uF.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.e1(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.xU(m,l,o.c.b,n.a)
if(l.w==null)A.u(A.tA('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.y.d)A.u(A.tA(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.u(A.G("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.d2()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:86}
A.uG.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.nD(r.a,r.b))}return new A.hn(q)},
$S:77}
A.un.prototype={
oa(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.ak()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.b_)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.oa(a)},
$S:4}
A.ul.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.G(0,this.c)
s.bz(a,b)}},
$S:6}
A.um.prototype={
$1(a){return new A.hB(this.a)},
$S:89}
A.uE.prototype={
$1(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.ak()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.b_)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.uD.prototype={
$1(a){return a.a===this.a},
$S:90}
A.uK.prototype={
$1(a){var s=a==null?B.bb:A.l([a],t.d)
this.a.b.u(0,new A.k5(this.b,s))},
$S:91}
A.uL.prototype={
$1(a){this.b.aE().A()
this.a.f.G(0,this.c)},
$S:21}
A.uM.prototype={
$1(a){this.a.b.u(0,new A.k5(this.b,a))},
$S:92}
A.uN.prototype={
$1(a){this.b.aE().A()
this.a.f.G(0,this.c)},
$S:21}
A.uu.prototype={
$1(a){return this.a.r.ni()},
$S:31}
A.uv.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.aR(A.d3(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:case 1:return A.aR(null,0,r)
case 2:return A.aR(o.at(-1),1,r)}})
var s=0,r=A.Co($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Cz(r)},
$S:94}
A.uw.prototype={
$1(a){var s=this,r=new Uint8Array(A.bc(a)),q=s.b
q.b=q.b+r.length
q.c=new A.aI(Date.now(),0,!1)
s.a.b.u(0,new A.fR(s.c,r,!1,null))
if(q.b>=1048576)s.d.aE().bb()},
$S:11}
A.uy.prototype={
$1(a){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fR(r,new Uint8Array(0),!0,J.X(a)))},
$S:21}
A.ux.prototype={
$0(){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fR(r,new Uint8Array(0),!0,null))},
$S:0}
A.uq.prototype={
$1(a){var s,r,q,p,o,n,m,l=this.a,k=l.x
if(k.a===0){k=l.y
if(k!=null)k.A()
l.y=null
return}l=Date.now()
s=A.n(k).i("aK<1,2>")
s=A.O(new A.aK(k,s),s.i("o.E"))
r=s.length
q=t.H
p=0
for(;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.b
m=n.c
if(0-m.b+1000*(l-m.a)<=18e8)continue
k.G(0,o.a)
n=n.d
n===$&&A.v()
n.A().b6(new A.uo(),new A.up(),q)}},
$S:31}
A.uo.prototype={
$1(a){},
$S:33}
A.up.prototype={
$2(a,b){},
$S:6}
A.uH.prototype={
$0(){this.a.b.u(0,B.bM)},
$S:2}
A.uI.prototype={
$1(a){var s=this.a
s.ax=a
s.b.u(0,new A.o5(a))},
$S:96}
A.uJ.prototype={
$1(a){var s,r=this.a,q=A.l([],t.oS)
for(s=J.E(a);s.k();)q.push(r.jp(s.gn()))
r.b.u(0,new A.lR(this.b,q))},
$S:97}
A.ut.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.A()
j.e=null
return}j=Date.now()
s=A.n(i).i("ao<2>")
s=A.O(new A.ao(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a1(m).i("bE<1>"),m=new A.bE(m,l),m=new A.as(m,m.gm(0),l.i("as<a0.E>")),l=l.i("a0.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aN(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aN(null)
i.G(0,n.a)
m=n.w
m===$&&A.v()
m.b6(new A.ur(),new A.us(),p)}}},
$S:31}
A.ur.prototype={
$1(a){},
$S:33}
A.us.prototype={
$2(a,b){},
$S:6}
A.lM.prototype={
a7(){return"ConflictAlgorithm."+this.b}}
A.iL.prototype={
q(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.b0(o,o.r,o.e,A.n(o).i("b0<2>"));n.k();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.aq(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
cH(a){var s,r=this.a,q=r.G(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(s!=null)s.q()}q=this.b.xs(a)
r.j(0,a,q)
return q},
lc(a,b){var s=this.cH(a).ld(new A.bY(b)),r=A.n(s).i("Z<M.E,F<j,k?>>")
r=A.O(new A.Z(s,new A.t9(),r),r.i("a0.E"))
return r},
oV(a){return this.lc(a,B.k)},
fw(a,b){this.cH(a).ew(new A.bY(b))},
kz(a){return this.fw(a,B.k)},
aJ(a,b){return this.vY(a,b)},
O(a){return this.aJ(a,B.k)},
vY(a,b){var s=0,r=A.h(t.H),q=this
var $async$aJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.fw(a,b)
return A.e(null,r)}})
return A.f($async$aJ,r)},
ae(a,b){return this.xI(a,b)},
bc(a){return this.ae(a,B.k)},
xI(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.lc(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ae,r)},
cc(a,b,c,d,e,f,g){return this.xF(a,b,c,d,e,f,g)},
aK(a,b,c,d){return this.cc(a,null,b,null,null,c,d)},
eK(a,b,c,d,e){return this.cc(a,b,c,null,null,d,e)},
nI(a,b,c,d){return this.cc(a,b,null,null,null,c,d)},
bQ(a,b,c){var s=null
return this.cc(a,s,s,s,s,b,c)},
xD(a,b,c,d,e){return this.cc(a,null,b,null,c,d,e)},
xC(a,b,c,d,e){return this.cc(a,b,c,d,e,null,null)},
xE(a,b,c,d,e,f){return this.cc(a,b,c,null,d,e,f)},
xB(a,b,c,d){return this.cc(a,null,null,null,b,c,d)},
xF(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$cc=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.C(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.k:g
q=p.ae(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cc,r)},
cw(a,b,c,d){return this.wH(0,b,c,d)},
aF(a,b,c){return this.cw(0,b,c,null)},
wH(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cw=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.U("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dX(new A.T(c,n),new A.t8(),n.i("o.E"),m).C(0,", ")
k=B.b.C(A.a9(c.a,"?",!1,m),", ")
j=A.Fx(d)
o=o.i("ao<2>")
o=A.O(new A.ao(c,o),o.i("o.E"))
p.fw("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ak(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cw,r)},
M(a,b,c,d){return this.yd(a,b,c,d)},
yd(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$M=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dX(new A.T(b,n),new A.ta(),n.i("o.E"),t.N).C(0,", ")
n="UPDATE"+A.Fx(null)+' "'+a+'" SET '+m
o=A.O(new A.ao(b,o.i("ao<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.D(o,d)}p.fw(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$M,r)},
X(a,b,c){return this.va(a,b,c)},
v9(a,b){return this.X(a,b,null)},
va(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$X=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
if(c!=null)B.b.D(n,c)}p.fw(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$X,r)},
uY(a,b,c){this.b.uZ(B.bB,!0,!1,new A.t7(b),c)},
a1(a,b){return this.y9(a,b,b)},
y9(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$a1=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:if(n.d)throw A.b(A.dq("Database connection is wedged: an earlier rollback failed and left an open transaction. Reopen the database to recover."))
n.kz("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a1)
case 7:m=e
n.kz("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.B(g)
try{n.kz("ROLLBACK")}catch(f){k=A.B(f)
h=J.X(k).toLowerCase()
if(!(B.a.E(h,"no transaction is active")||B.a.E(h,"cannot rollback"))){n.d=!0
throw A.b(A.dq("Rollback failed after a transaction error ("+A.r(k)+"); original error: "+A.r(l)+". The database connection is left in an open transaction; reopen to recover."))}}throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a1,r)},
$irH:1}
A.t9.prototype={
$1(a){return A.bu(a,t.N,t.X)},
$S:98}
A.t8.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.ta.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.t7.prototype={
$1(a){var s=a.gm(0)===0?null:a.gH(a)
return this.a.$1(s)},
$S:100}
A.qZ.prototype={}
A.iK.prototype={
kn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aP(t.N),b=a.a
if(B.a.E(b,"'")||B.a.E(b,'"'))A.u(A.aB('Store name "'+b+"\" must not contain quote characters: a quote would break the FTS content reference and the database adapter's table quoting."))
if(B.a.T(b,"sqlite_")||B.a.T(b,"lp_"))A.u(A.aB('Store name "'+b+'" uses a reserved prefix (sqlite_ is SQLite-owned, lp_ is the engine metadata namespace).'))
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=$.F3()
if(!k.b.test(l))A.u(A.aB('Field "'+l+u.Z))
if(B.aH.E(0,l))throw A.b(A.aB('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aB('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aB(e+l+'" cannot be unique.'))
if(B.b.bp(o,new A.t6(m)))throw A.b(A.aB(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.E(k,l)}else k=!1
if(k)throw A.b(A.aB(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.p)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.as(l,l.gm(0),k.i("as<M.E>")),k=k.i("M.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.E(0,j)&&!B.aH.E(0,j))throw A.b(A.aB('Index column "'+j+'" is not a declared field of store "'+b+'".'))}for(b=l,i=0;i<b;b=r,i=h)for(h=i+1,b=h,g=0;r=o.length,g<r;++g){if(i===g)continue
if(B.aA.V(o[i].a,o[g].a)){if(i<g){r=o[i].a
d.push("Duplicate index columns "+r.l(r)+" (declarations "+b+" and "+(g+1)+").")}}else if(A.JT(o[g].a,o[i].a)&&!o[g].b){r=o[g].a
r=r.l(r)
l=o[i].a
d.push("Index "+r+" is prefix-subsumed by index "+l.l(l)+".")}}if(p){b=f.a
if(!b.d)throw A.b(A.tA(u.r))
if(q.b&&!A.Gd(b.a,3,34))throw A.b(A.tA("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+b.a+")."))
for(b=q.a,r=b.$ti,b=new A.as(b,b.gm(0),r.i("as<M.E>")),r=r.i("M.E");b.k();){p=b.d
if(p==null)p=r.a(p)
if(!c.E(0,p))throw A.b(A.aB('FTS field "'+p+'" is not a declared field.'))}for(b=q.c.a.ga0(),b=b.gt(b);b.k();){r=b.gn()
A.FF(r.a,r.b)}}for(b=s.length,n=0;n<b;++n){m=s[n]
r=m.b
if(r===B.J){q=m.f
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aB('Enum field "'+m.a+'" must declare values.'))
if(r===B.K){r=m.r
r=r==null||r.length===0}else r=!1
if(r)throw A.b(A.aB('Ref field "'+m.a+'" must declare its target store.'))}return new A.qZ(f.q_(a),f.pZ(a),f.pY(a),d)},
q_(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.D(n,'"',i)+'"')+" "+o.glh()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.J&&q){k=o.f
k.toString
j=new A.Z(k,new A.t5(),A.a1(k).i("Z<1,j>")).C(0,", ")
m+=" CHECK ("+('"'+A.D(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.K&&o.w){n=o.r
n.toString
n=A.D(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.D("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.D(a.a,'"',i)
r=B.b.C(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
pZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=m.b
j=l.$ti.i("Z<M.E,j>")
i=A.O(new A.Z(l,A.pZ(),j),j.i("a0.E"))
if(!k&&!l.E(l,"id"))i.push('"'+A.D("id",e,d)+'"')
h=m.c===B.b6?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.C(l,"_")
l=A.D(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.D(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}else{l=l.C(l,"_")
l=A.D(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.D(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.p)(r),++n){g=r[n]
if(g.b!==B.K)continue
if(B.b.bp(s,new A.t4(g)))continue
k=g.a
j=A.D(p+k,e,d)
f=A.D(q,e,d)
k=A.D(k,e,d)
b.push("CREATE INDEX "+('"'+j+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.D("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.p)(r),++n){g=r[n]
if(g.d){s=g.a
p=A.D(o+s,e,d)
l=A.D(q,e,d)
j=A.D(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+j+'"')+") WHERE "+('"'+A.D(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
pY(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.u
s=a0.a
if(s.gm(0)===0)throw A.b(A.aB("FTS requires at least one field to index."))
r=A.l([],t.s)
q=a1.a
p=q+"_fts"
o=s.$ti.i("Z<M.E,j>")
n=A.O(new A.Z(s,A.pZ(),o),o.i("a0.E"))
m=new A.t3(q,a0.c)
l=new A.Z(s,new A.t0(m),o).C(0,f)
k=new A.Z(s,new A.t1(m),o).C(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
r.push("CREATE VIRTUAL TABLE "+('"'+A.D(p,e,d)+'"')+" USING fts5(\n  "+B.b.C(n,f)+",\n  content = '"+q+"',\n  content_rowid = 'rowid'\n"+j)
s=A.D(q+"_ai",e,d)
o=A.D(q,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.D(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
s=A.D(q+"_ad",e,d)
o=A.D(q,e,d)
m=A.D(p,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.D(p,e,d)+'"')+", rowid, "+B.b.C(n,f)+a+k+");\nEND;")
i=new A.Z(n,new A.t2(),A.a1(n).i("Z<1,j>")).C(0," OR ")
s=A.D(q+"_au",e,d)
o=A.D(q,e,d)
m=A.D(p,e,d)
h=A.D(p,e,d)
g=B.b.C(n,f)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.D(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
return r}}
A.t6.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:53}
A.t5.prototype={
$1(a){return"'"+A.D(a,"'","''")+"'"},
$S:7}
A.t4.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:53}
A.t3.prototype={
$2(a,b){return A.EU(this.a,this.b,a,b)},
$S:102}
A.t0.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.t1.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.t2.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dW.prototype={
l(a){return A.d8(this).l(0)+": "+this.a},
$iI:1}
A.eb.prototype={}
A.hD.prototype={}
A.h7.prototype={}
A.iE.prototype={}
A.jF.prototype={}
A.iV.prototype={}
A.dp.prototype={}
A.jN.prototype={}
A.jL.prototype={}
A.jQ.prototype={}
A.hm.prototype={}
A.k2.prototype={}
A.iW.prototype={}
A.jX.prototype={}
A.jh.prototype={}
A.iG.prototype={}
A.fL.prototype={}
A.jK.prototype={}
A.iP.prototype={}
A.bs.prototype={}
A.te.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"ref_id")
j.toString
A.H(j)
s=k.h(0,"store")
s.toString
A.H(s)
r=k.h(0,"record_id")
r.toString
A.H(r)
q=k.h(0,"field")
q.toString
A.H(q)
p=k.h(0,"hash")
p.toString
A.H(p)
o=A.a3(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.H(n)
m=A.b_(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.b_(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bs(j,s,r,q,p,o,n,m,l,A.a3(k.h(0,"last_error")))},
$S:52}
A.vs.prototype={
gmv(){return this.b},
gix(){var s=0,r=A.h(t.y),q,p=this
var $async$gix=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.gcA()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gix,r)},
m_(a,b){return b},
d7(a,b,c){return this.wP(a,b,c)},
wP(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$d7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.v()
n=J
s=3
return A.a(o.gbA().b.bQ("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.m_(c,a)]),$async$d7)
case 3:o=n.bI(e,A.OM(),t.A)
o=A.O(o,o.$ti.i("a0.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d7,r)},
dB(a,b,c,d,e,f,g,h){return this.uH(a,b,c,d,e,f,g,h)},
uH(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$dB=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gmv()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.gcA(),$async$dB)
case 5:j=!j
case 4:if(j)throw A.b(A.A("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.m_(h,e)
s=6
return A.a(l.aG(b,c,d),$async$dB)
case 6:n=j
s=7
return A.a(l.aV(n),$async$dB)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a1(new A.vt(p,h,g,o,n,m,A.ik(),f),t.A),$async$dB)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dB,r)},
fL(a,b,c,d,e){return this.xc(a,b,c,d,e)},
xc(a,b,c,d,e){var s=0,r=A.h(t.v),q,p=this,o,n,m,l,k,j
var $async$fL=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d7(a,c,e),$async$fL)
case 3:k=g
j=J.J(k)
if(j.gF(k))throw A.b(A.A("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.cu(k,new A.vv(d),new A.vw(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(new A.jN("File is remote_only; call files.download(ref) to fetch its bytes, or enable prefetchFiles on the store and sync."))
n=p.gmv()
j=p.a
m=j.a
m===$&&A.v()
m=m.gbA()
j=j.db.$0()
l=o.e
s=4
return A.a(m.b.aJ("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,l]),$async$fL)
case 4:q=n.bC(l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
fU(a,b,c,d,e,f){return this.xU(0,b,c,d,e,f)},
xU(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fU=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d7(b,d,f),$async$fU)
case 3:n=h
m=J.J(n)
if(m.gF(n)){s=1
break}o=e!=null?m.cu(n,new A.vx(e),new A.vy(e)):m.h(n,c)
s=4
return A.a(p.a.a1(new A.vz(p,o,f,d,b),t.P),$async$fU)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fU,r)},
bs(a,b){return this.oK(a,b)},
oK(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bs=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.c6(a8),$async$bs)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.db.$0()-B.c.L(a7.a,1000)
s=6
return A.a(e.a1(new A.vu(a2,n),t.P),$async$bs)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.cC(),$async$bs)
case 13:l=b0
s=J.d9(l)?14:15
break
case 14:k=0
j=A.aP(t.N)
d=t.s
case 16:c=e.a
c===$&&A.v()
s=18
return A.a(c.gbA().b.xC("lp_blobs",A.l(["hash"],d),250,k,"hash ASC"),$async$bs)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.Q(h,"hash")
b.toString
J.aO(j,A.H(b))}if(J.ag(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l)
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.Dw(j,g)){s=19
break}p=22
s=25
return A.a(a3.fJ(g),$async$bs)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.bL(g),$async$bs)
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
b===$&&A.v()
s=29
return A.a(b.gbA().b.xE("lp_blobs",A.l(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bs)
case 29:a0=b0
b=J.J(a0)
if(b.gF(a0)){s=28
break}b=b.gt(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.H(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.bL(a1),$async$bs)
case 34:case 33:s=35
return A.a(d.X("lp_blobs","hash = ?",[a1]),$async$bs)
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
return A.f($async$bs,r)},
d1(a){return this.vT(a)},
vT(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$d1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.v()
d=A
s=3
return A.a(e.gbA().b.bc("SELECT SUM(size) as total FROM lp_blobs"),$async$d1)
case 3:o=d.fq(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.x,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbA().b.bc("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$d1)
case 6:k=c
j=J.J(k)
if(j.gF(k)){s=5
break}j=j.gt(k)
case 7:if(!j.k()){s=8
break}i=j.gn()
if(o<=a){s=8
break}h=i.h(0,"hash")
h.toString
A.H(h)
i=i.h(0,"size")
i.toString
A.ak(i)
s=9
return A.a(g.bL(h),$async$d1)
case 9:s=10
return A.a(e.gbA().b.M("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$d1)
case 10:s=11
return A.a(f.X("lp_blobs","hash = ?",[h]),$async$d1)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d1,r)}}
A.vt.prototype={
$1(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$$1=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:k=a.b
j=p.a.a.db.$0()
i=t.s
h=p.b
g=p.c
f=p.d
e=p.e
s=3
return A.a(k.eK("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],i),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[h,g,f,e]),$async$$1)
case 3:d=a0
c=J.J(d)
if(c.gS(d)){q=A.FB(c.gH(d))
s=1
break}s=4
return A.a(A.ir(k,e,j,p.f),$async$$1)
case 4:s=5
return A.a(k.eK("lp_outbox",A.l(["op_id","base_updated"],i),1,"store = ? AND record_id = ?",[h,g]),$async$$1)
case 5:o=a0
i=J.J(o)
n=i.gS(o)&&J.Q(i.gH(o),"base_updated")==null?A.a3(J.Q(i.gH(o),"op_id")):null
i=p.r
c=t.N
m=t.X
s=6
return A.a(k.cw(0,"lp_file_refs",A.m(["ref_id",i,"store",h,"record_id",g,"field",f,"hash",e,"remote_name",null,"state","pending_upload"],c,m),B.U),$async$$1)
case 6:l=A.ik()
s=7
return A.a(k.aF(0,"lp_op_queue",A.m(["op_id",l,"store",h,"record_id",g,"kind","fileUpload","payload_json",B.h.a9(A.m(["ref_id",i,"field",f,"hash",e,"name",p.w],c,c),null),"state","pending","depends_on_op",n,"created_at",j],c,m)),$async$$1)
case 7:a.a2(new A.a6(h,A.ap([g],c)))
q=new A.bs(i,h,g,f,e,null,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:104}
A.vv.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vw.prototype={
$0(){return A.u(A.A("FileRef "+this.a+" not found"))},
$S:16}
A.vx.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vy.prototype={
$0(){return A.u(A.A("FileRef "+this.a+" not found"))},
$S:16}
A.vz.prototype={
$1(a){return this.oe(a)},
oe(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.aJ(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.M("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.M("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aF(0,"lp_op_queue",A.m(["op_id",A.ik(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a9(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.jv),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a2(new A.a6(q.c,A.ap([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vu.prototype={
$1(a){return this.od(a)},
od(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.fy,p=new A.bN(p,p.r,p.e,A.n(p).i("bN<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ae('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.D(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.E(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.H(j)
k=k.h(0,"hash")
k.toString
A.H(k)
s=7
return A.a(i.X("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aJ(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.M("lp_op_queue",A.m(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.cP.prototype={}
A.ts.prototype={
gnS(){var s=this.r
return new A.ao(s,A.n(s).i("ao<2>")).wd(0,0,new A.tv())},
ni(){var s,r=this.r,q=A.n(r).i("ao<2>"),p=q.i("cw<o.E,j>"),o=A.O(new A.cw(new A.aq(new A.ao(r,q),new A.tt(this.f.$0()),q.i("aq<o.E>")),new A.tu(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.p)(o),++s)r.G(0,o[s])
return p}}
A.tv.prototype={
$2(a,b){return a+b.f},
$S:107}
A.tt.prototype={
$1(a){return!a.z.kL(this.a)},
$S:108}
A.tu.prototype={
$1(a){return a.a},
$S:109}
A.mm.prototype={}
A.xa.prototype={
aG(a,b,c){return this.xy(a,b,c)},
fR(a){return this.aG(a,null,null)},
xy(a3,a4,a5){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$aG=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:c="p"+m.b++
b=t.N
a=t.X
a0=A.t(b,a)
a0.j(0,"sessionId",c)
if(a4!=null)a0.j(0,"expectedSha256",a4)
if(a5!=null)a0.j(0,"expectedSize",a5)
s=3
return A.a(m.aO("putBegin",a0,"put()"),$async$aG)
case 3:l=0
p=5
a0=new A.c5(A.cp(a3,"stream",t.K),t.lj)
p=8
case 11:s=13
return A.a(a0.k(),$async$aG)
case 13:if(!a7){s=12
break}k=a0.gn()
j=0
case 14:if(!(j<J.ag(k))){s=16
break}i=j+262144>J.ag(k)?J.ag(k):j+262144
h=J.Fg(k,j,i)
f=l
l=f+1
s=17
return A.a(m.aO("putChunk",A.m(["sessionId",c,"index",f,"bytes",B.Q.gdE().v(h)],b,a),"put() chunk"),$async$aG)
case 17:case 15:j+=262144
s=14
break
case 16:s=11
break
case 12:n.push(10)
s=9
break
case 8:n=[5]
case 9:p=5
s=18
return A.a(a0.A(),$async$aG)
case 18:s=n.pop()
break
case 10:s=19
return A.a(m.aO("putFinish",A.m(["sessionId",c],b,a),"put()"),$async$aG)
case 19:g=a7
a0=A.I3(g,"put().hash")
q=a0
s=1
break
p=2
s=7
break
case 5:p=4
a1=o.pop()
p=21
s=24
return A.a(m.aO("putAbort",A.m(["sessionId",c],b,a),"put()"),$async$aG)
case 24:p=4
s=23
break
case 21:p=20
a2=o.pop()
s=23
break
case 20:s=4
break
case 23:throw a1
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aG,r)},
bC(a){return this.xd(a)},
xd(a){var s=0,r=A.h(t.v),q,p=this,o,n,m
var $async$bC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a
n=A
m=A
s=3
return A.a(p.aO("openBegin",A.m(["hash",a],t.N,t.X),"open()"),$async$bC)
case 3:q=p.ec(o,n.I3(m.Hx(c,"open()").h(0,"sessionId"),"open().sessionId"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bC,r)},
ec(a,b){return this.rQ(a,b)},
rQ(a,b){var $async$ec=A.c(function(c,d){switch(c){case 2:n=q
s=n.pop()
break
case 1:o.push(d)
s=p}for(;;)switch(s){case 0:p=3
j='open("'+a,i=j+'") chunk bytes',h=t.N,g=t.X,j+='") chunk'
case 6:s=8
return A.aR(m.aO("openChunk",A.m(["sessionId",b],h,g),j),$async$ec,r)
case 8:l=d
k=A.Hx(l,j)
if(J.x(J.Q(k,"done"),!0)){s=7
break}if(!J.x(J.Q(k,"done"),!1)){j=A.G('"done" at open("'+a+'") chunk must be a bool.',null)
throw A.b(j)}s=9
q=[1,4]
return A.aR(A.d3(A.I4(J.Q(k,"bytes"),i)),$async$ec,r)
case 9:s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
p=11
s=14
return A.aR(m.aO("openEnd",A.m(["sessionId",b],t.N,t.X),'open("'+a+'") end'),$async$ec,r)
case 14:p=2
s=13
break
case 11:p=10
e=o.pop()
s=13
break
case 10:s=2
break
case 13:s=n.pop()
break
case 5:case 1:return A.aR(null,0,r)
case 2:return A.aR(o.at(-1),1,r)}})
var s=0,r=A.Co($async$ec,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e
return A.Cz(r)},
bL(a){return this.vb(a)},
vb(a){var s=0,r=A.h(t.H),q=this
var $async$bL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.aO("delete",A.m(["hash",a],t.N,t.X),"delete()"),$async$bL)
case 2:return A.e(null,r)}})
return A.f($async$bL,r)},
aY(a){return this.vZ(a)},
vZ(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$aY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("exists",A.m(["hash",a],t.N,t.X),"exists()"),$async$aY)
case 3:q=o.I1(c,"exists()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aY,r)},
aV(a){return this.p0(a)},
p0(a){var s=0,r=A.h(t.u),q,p=this,o
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("size",A.m(["hash",a],t.N,t.X),"size()"),$async$aV)
case 3:q=o.I2(c,"size()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aV,r)},
c6(a){return this.uO(a)},
uO(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$c6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("cleanTmp",A.m(["olderThanMs",B.c.L(a.a,1000)],t.N,t.X),"cleanTmp()"),$async$c6)
case 3:q=o.Oy(c,"cleanTmp()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c6,r)},
cC(){var s=0,r=A.h(t.a),q,p=this,o
var $async$cC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("listHashes",B.j,"listHashes()"),$async$cC)
case 3:q=o.Ox(b,"listHashes()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cC,r)},
fJ(a){return this.x4(a)},
x4(a){var s=0,r=A.h(t.u),q,p=this,o
var $async$fJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("modifiedAt",A.m(["hash",a],t.N,t.X),"modifiedAt()"),$async$fJ)
case 3:q=o.I2(c,"modifiedAt()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
gcA(){var s=0,r=A.h(t.y),q,p=this,o
var $async$gcA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("isDurable",B.j,"isDurable"),$async$gcA)
case 3:q=o.I1(b,"isDurable")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcA,r)},
aO(a,b,c){return this.pL(a,b,c)},
pL(a,b,c){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$aO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=A.t(t.N,t.X)
o.j(0,"method",a)
o.D(0,b)
n=A
s=3
return A.a(p.a.cz("blobStore",o),$async$aO)
case 3:q=n.ER(e,A.Oc(),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aO,r)}}
A.Cs.prototype={
$2(a,b){return new A.V(J.X(a),b,t.B)},
$S:32}
A.qq.prototype={
fJ(a){return A.be(null,t.u)}}
A.ex.prototype={
l(a){return"BlobMissingError: "+this.a},
$iI:1}
A.fC.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iI:1}
A.nT.prototype={}
A.Dd.prototype={
$1(a){return B.b.D(this.a,a)},
$S:111}
A.iS.prototype={}
A.tf.prototype={
bE(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bE=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.cn
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.dy
a3===$&&A.v()
b5=J
s=3
return A.a(a3.fu(25),$async$bE)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.bf?10:12
break
case 10:s=13
return A.a(n.cQ(i,b2),$async$bE)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.nz(i.b),$async$bE)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.bg?17:18
break
case 17:s=19
return A.a(n.f8(i),$async$bE)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.nz(i.b),$async$bE)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.B(b3)
j=!0
e=i.w+1
d=a5.na(e)
a8=i.b
a9=J.X(f)
b0=a6.$0()
s=23
return A.a(a3.x_(a8,a9,e,b0+B.c.L(d.a,1000)),$async$bE)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.fy,a4=new A.bN(a3,a3.r,a3.e,A.n(a3).i("bN<1>")),a2=a2.x
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.u(A.A('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.bQ("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bE)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.Q(b,"ref_id")
a6.toString
a=A.H(a6)
a6=J.Q(b,"record_id")
a6.toString
a0=A.H(a6)
a1=A.a3(J.Q(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.d0(a0,a,a1,c),$async$bE)
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
case 25:q=new A.iS(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bE,r)},
cQ(a,b){return this.t6(a,b)},
t6(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cQ=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aI(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.H(a1)
l=a0.h(0,"hash")
l.toString
A.H(l)
k=A.a3(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.aY(l),$async$cQ)
case 3:if(!a6)throw A.b(A.A("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.aV(l),$async$cQ)
case 4:j=a6
if(j==null)throw A.b(A.A("Blob size for hash "+l+" is unavailable"))
m=null
p=6
s=9
return A.a(n.b.aU(a3.d),$async$cQ)
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
case 8:h=null
if(m!=null){g=B.a.B(l,0,B.c.bx(l.length,0,10))
for(f=m.e,e=f.length,d=g.length!==0,c=0;c<e;++c){b=f[c]
if(d&&B.a.T(b,g)||B.a.T(b,k)){h=b
break}}}a.a=null
s=h!=null?10:12
break
case 10:a.a=h
s=11
break
case 12:s=13
return A.a(n.b.cg(a3.d,A.m([k,new A.hv(k,j,new A.th(a4,l))],t.N,t.h3)),$async$cQ)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga_(l):k
case 11:s=14
return A.a(n.a.a1(new A.ti(a,a1,a3),t.P),$async$cQ)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cQ,r)},
f8(a){return this.t5(a)},
t5(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$f8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aI(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.H(l)
o=A.a3(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.H(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.eR(a.d,A.l([o],t.s)),$async$f8)
case 5:case 4:s=6
return A.a(p.a.a1(new A.tg(l,n,a),t.P),$async$f8)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f8,r)},
d0(a,b,c,d){return this.vJ(a,b,c,d)},
vJ(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l
var $async$d0=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.d
l=o
s=4
return A.a(p.b.bM(c,a,null),$async$d0)
case 4:s=3
return A.a(l.fR(f),$async$d0)
case 3:n=f
s=5
return A.a(o.aV(n),$async$d0)
case 5:m=f
if(m==null)m=0
s=6
return A.a(p.a.a1(new A.tj(n,m,p.c.ay.$0(),c,b,d,a),t.P),$async$d0)
case 6:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d0,r)},
dD(a,b,c,d){return this.vM(a,b,c,d)},
vM(a,b,c,d){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i
var $async$dD=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:k=p.a
j=k.fx
j===$&&A.v()
s=3
return A.a(j.d7(a,b,d),$async$dD)
case 3:o=f
n=J.J(o)
if(n.gF(o))throw A.b(A.jM("No file references for "+d+"/"+b+"/"+a+"."))
m=c!=null?n.cu(o,new A.tk(c),new A.tl(c,d,b,a)):n.cu(o,new A.tm(),new A.tn(o))
i=J
s=4
return A.a(k.x.aK("lp_blobs",1,"hash = ?",[m.e]),$async$dD)
case 4:if(i.d9(f)&&m.r!=="remote_only"){q=m
s=1
break}l=m.f
if(l==null)throw A.b(A.G("File "+m.a+" in "+d+"/"+b+"/"+a+" has no remote filename recorded and cannot be downloaded (state: "+m.r+"). Only remotely-known attachments are downloadable.",null))
s=5
return A.a(p.d0(b,m.a,l,d),$async$dD)
case 5:i=J
s=6
return A.a(j.d7(a,b,d),$async$dD)
case 6:q=i.Ji(f,new A.to(m),new A.tp(m))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dD,r)},
dJ(a,b,c,d){return this.x9(a,b,c,d)},
x9(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dJ=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.bQ("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dJ)
case 2:e=a5
d=A.mV(a2,A.a1(a2).c)
c=J.ax(e)
b=t.U
a=A.c0(new A.ed(c.cE(e,new A.tq(),t.jv),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.fy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.E(0,k)?6:7
break
case 6:j=A.ik()
i=n.h(0,a3)
if(i==null)A.u(A.A(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cw(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.ch),$async$dJ)
case 8:case 7:case 4:a2.length===b||(0,A.p)(a2),++l
s=3
break
case 5:c=c.gt(e)
case 9:if(!c.k()){s=10
break}b=c.gn()
g=A.a3(b.h(0,"remote_name"))
if(g==null){s=9
break}if(d.E(0,g)){s=9
break}p=b.h(0,"state")
p.toString
A.H(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.X("lp_file_refs","ref_id = ?",[p]),$async$dJ)
case 11:f=A.a3(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.T(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aJ(u.y,[f]),$async$dJ)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dJ,r)}}
A.th.prototype={
$0(){return this.a.bC(this.b)},
$S:112}
A.ti.prototype={
$1(a){return this.o6(a)},
o6(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.M("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a2(new A.a6(p.c,A.ap([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tg.prototype={
$1(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.X("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aJ(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a2(new A.a6(p.c,A.ap([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tj.prototype={
$1(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.ir(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.M("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a2(new A.a6(q.f,A.ap([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tk.prototype={
$1(a){return a.a===this.a},
$S:25}
A.tl.prototype={
$0(){var s=this
return A.u(A.jM("FileRef "+s.a+" not found for "+s.b+"/"+s.c+"/"+s.d+"."))},
$S:16}
A.tm.prototype={
$1(a){return a.r==="remote_only"},
$S:25}
A.tn.prototype={
$0(){return J.bH(this.a)},
$S:52}
A.to.prototype={
$1(a){return a.a===this.a.a},
$S:25}
A.tp.prototype={
$0(){return A.u(A.jM("FileRef "+this.a.a+" disappeared during download."))},
$S:16}
A.tq.prototype={
$1(a){return A.a3(a.h(0,"remote_name"))},
$S:113}
A.Dj.prototype={
$1(a){if(typeof a!="string")return a
return this.a.eI(a)},
$S:40}
A.vj.prototype={
gbA(){var s=this.c
return s===$?this.c=new A.iP(this.b):s}}
A.nR.prototype={}
A.wV.prototype={
bV(a){var s,r=this.a
if(!r.I(a))return null
s=r.G(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.pQ(s)
r.toString
t.G.a(r)}return r},
le(a,b){var s,r=this.a
if(r.a>=256)r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(b==null)s=null
else{s=A.pQ(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
wI(a){var s,r,q,p=a.a
if(p===0){this.a.aq(0)
return}s=this.a
if(p>=s.a){s.aq(0)
return}for(p=A.dz(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.G(0,q==null?r.a(q):q)}}}
A.mQ.prototype={
aw(a){var s=this.fy.h(0,a)
if(s==null)throw A.b(A.A('No store "'+a+'" registered in this LocalPocket.'))
return s},
by(a){var s,r,q=this
if(A.oj(q)!=null)A.u(A.A(u.L))
s=q.aw(a)
r=q.a
r===$&&A.v()
return new A.fF(q,s,r.gbA(),null)},
b7(a,b,c){var s
if(A.oj(this)!=null)A.u(A.A(u.L))
s=this.b
s===$&&A.v()
return s.b7(a,b,c)},
a1(a,b){return this.b7(a,B.q,b)},
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
A.pc.prototype={}
A.vC.prototype={
nT(a,b){var s=this.a;++s.f.e
return s.b.aJ(a,B.k)},
er(a){return this.uD(a)},
uC(){return this.er(null)},
uD(a){var s=0,r=A.h(t.H),q=this,p
var $async$er=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$er)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.D(a,'"','""')+'"')),$async$er)
case 6:case 3:return A.e(null,r)}})
return A.f($async$er,r)},
h2(){var s=0,r=A.h(t.H),q=this,p
var $async$h2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$h2)
case 4:case 3:return A.e(null,r)}})
return A.f($async$h2,r)},
iZ(){var s=0,r=A.h(t.H),q=this,p
var $async$iZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iZ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iZ,r)},
iY(){var s=0,r=A.h(t.H),q=this
var $async$iY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.b.O("VACUUM"),$async$iY)
case 2:return A.e(null,r)}})
return A.f($async$iY,r)},
fP(){return this.xt()},
xt(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a.a.a1(new A.vF(o),t.P),$async$fP)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fP,r)},
de(a){return this.y5(a)},
y5(a){var s=0,r=A.h(t.H),q=this,p
var $async$de=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a.fy,p=new A.bN(p,p.r,p.e,A.n(p).i("bN<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.ev(p.d,a),$async$de)
case 4:s=2
break
case 3:s=5
return A.a(q.fP(),$async$de)
case 5:s=6
return A.a(q.h5(B.cm),$async$de)
case 6:s=7
return A.a(q.h2(),$async$de)
case 7:s=8
return A.a(q.uC(),$async$de)
case 8:return A.e(null,r)}})
return A.f($async$de,r)},
h5(a){return this.oL(a)},
oL(a){var s=0,r=A.h(t.H),q=this
var $async$h5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a.a1(new A.vE(q,a),t.P),$async$h5)
case 2:return A.e(null,r)}})
return A.f($async$h5,r)},
ev(a,b){return this.uS(a,b)},
uS(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ev=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.a
h=i.x.$0()
g=h-B.c.L(b.a,1000)
j.a=0
o=i.a
n=o.aw(a).a
m=t.P,i=i.b
case 3:s=5
return A.a(i.ae("SELECT b.id FROM "+('"'+A.D(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",g,250]),$async$ev)
case 5:l=d
if(J.bq(l)){s=4
break}if(A.oj(o)!=null)A.u(A.A(u.L))
k=o.b
k===$&&A.v()
s=6
return A.a(k.b7(new A.vD(j,p,l,a,g,n),B.q,m),$async$ev)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ev,r)}}
A.vF.prototype={
$1(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.bc("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.E(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.H(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.X("lp_outbox","store = ? AND record_id = ?",[m,A.H(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vE.prototype={
$1(a){return this.og(a)},
og(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
s=2
return A.a(p.v9("lp_op_queue","state = 'done'"),$async$$1)
case 2:s=3
return A.a(p.X("lp_dead_letter","at < ?",[q.a.a.x.$0()-B.c.L(q.b.a,1000)]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vD.prototype={
$1(a){return this.of(a)},
of(a1){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a=a1.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=t.X,k=a1.c,j=a1.a.Q,i=q.e,h=q.f,g=q.b.a,f=g.Q,g=g.as
case 2:if(!p.k()){s=3
break}e=p.gn().h(0,"id")
e.toString
A.H(e)
a0=J
s=4
return A.a(a.ae("SELECT b.id FROM "+('"'+A.D(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,e,"clean",i]),$async$$1)
case 4:if(a0.bq(a3)){s=2
break}s=5
return A.a(a.ae("SELECT * FROM "+('"'+A.D(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[e]),$async$$1)
case 5:d=a3
c=J.J(d)
b=c.gS(d)?A.bU(h,c.gH(d),f,g):null
s=6
return A.a(A.cL(a,n,e,!1),$async$$1)
case 6:s=7
return A.a(a.X("lp_outbox","store = ? AND record_id = ?",[n,e]),$async$$1)
case 7:s=8
return A.a(a.X(n,"id = ?",[e]),$async$$1)
case 8:s=9
return A.a(a.M("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.ap([e],m)
k.push(new A.a6(n,c))
j.r+=c.a
if(b!=null)a1.kw(B.av,e,null,b,B.H,n);++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.w_.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:26}
A.w0.prototype={
$2(a,b){return B.c.a3(a.a,b.a)},
$S:115}
A.vW.prototype={
$1(a){return a.h(0,"name")},
$S:42}
A.vX.prototype={
$1(a){return this.oi(a)},
oi(a0){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:p=q.b,o=p.length,n=q.c,m=n.a,l=q.d,k=l.cx,l=l.cy,j=t.N,i=t.X,h=0
case 2:if(!(h<p.length)){s=4
break}g=p[h]
f=g.b
e=A.t(j,i)
for(d=g.c.ga0(),d=d.gt(d);d.k();){c=d.gn()
b=c.a
a=A.Kx(n,b)
if(a==null)throw A.b(A.aB('Backfill on "'+m+'" produced unknown field "'+b+'".'))
c=c.b
A.FU(a,c)
e.j(0,b,A.ES(n,a,c,k,l,f))}s=5
return A.a(a0.M(m,e,"rowid = ?",[g.a]),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++h
s=2
break
case 4:s=6
return A.a(A.h0(a0,q.e,B.c.l(q.a.a)),$async$$1)
case 6:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:46}
A.vZ.prototype={
$1(a){return this.oj(a)},
oj(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.cx,j=j.cy,h=q.e,g=t.ji,f=t.d3,e=q.d.d
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.bU(k,p,i,j)
d=e==null?null:e.$1(o)
if(!f.b(d)){c=new A.w($.C,g)
c.a=8
c.c=d
d=c}s=4
return A.a(d,$async$$1)
case 4:b=a1
n=b==null?o:b
A.KA(k,n)
d=J.Q(o,"id")
d.toString
A.H(d)
m=A.dD(k,J.x(J.Q(n,"archived"),!0),i,j,d,n)
s=5
return A.a(a.aF(0,h,m),$async$$1)
case 5:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:46}
A.vY.prototype={
$1(a){return A.EU(this.a.a,this.b.c,"",a)},
$S:7}
A.w4.prototype={}
A.Do.prototype={
$2(a,b){var s,r,q=J.X(a)
if(t.f.b(b))this.a.j(0,q,A.bp(b))
else{s=this.a
if(t.j.b(b)){r=J.bI(b,new A.Dn(),t.z)
r=A.O(r,r.$ti.i("a0.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:44}
A.Dn.prototype={
$1(a){return t.f.b(a)?A.bp(a):a},
$S:37}
A.jH.prototype={}
A.x8.prototype={
$1(a){return this.ot(a)},
ot(a){var s=0,r=A.h(t.nh),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=t.N
h=t.X
g=A.t(i,h)
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
m=A.O(m,A.n(m).c)
l=a.r
l=A.O(l,A.n(l).c)
g.j(0,"ctx",A.m(["store",f,"recordId",o,"base",a.c,"local",a.d,"remote",a.e,"dirtyLocal",m,"dirtyRemote",l],i,h))
s=3
return A.a(p.a.cz("resolver",g),$async$$1)
case 3:k=c
if(k==null){q=null
s=1
break}i='resolver "'+n+'"'
j=A.Cr(k,i)
i=A.EE(j.h(0,"merged"),i,"merged")
h=J.x(j.h(0,"needsReview"),!0)
if(typeof j.h(0,"note")=="string"){g=j.h(0,"note")
g.toString
A.H(g)}else g=null
q=new A.aS(i,h,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:117}
A.CU.prototype={
$1(a){return a.d!=null},
$S:26}
A.Ci.prototype={
$2(a,b){this.a.j(0,a,A.Hf(b,a,this.c,"field",'field override "'+a+'" of "'+this.b+'"'))},
$S:51}
A.Cj.prototype={
$1(a){return a.b===this.a.h(0,"missingRemote")},
$S:119}
A.Ck.prototype={
$0(){return A.u(A.G('"missingRemote" of "'+this.a+'" is not a known policy: '+A.r(this.b.h(0,"missingRemote")),null))},
$S:16}
A.Cl.prototype={
$1(a){return this.oJ(a)},
oJ(a){var s=0,r=A.h(t.a),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b
n=A
s=3
return A.a(p.a.cz("validator",A.m(["store",o,"record",a],t.N,t.X)),$async$$1)
case 3:q=n.NB(c,'validator of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:120}
A.Cf.prototype={
$1(a){return this.oH(a)},
oH(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c
m=A
s=3
return A.a(p.a.cz("documentMigration",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.EE(c,"document migration v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.Cg.prototype={
$1(a){return this.oI(a)},
oI(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c.a
m=A
s=3
return A.a(p.a.cz("migrationTransform",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.EE(c,"migration transform v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.ng.prototype={
xH(a){if(a>this.w)this.w=a},
nK(){return this.f++}}
A.vk.prototype={
v3(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aI(B.o.fp(B.ad.v(a)),null))
i=J.Q(s,"store")
h=J.Q(s,"schemaVer")
g=J.Q(s,"shape")
f=J.Q(s,"ir")
q=t.lH
p=q.a(J.Q(s,"sort"))
if(p==null)p=B.an
e=A.bP(p,!0,t.N)
r=b?J.Q(s,"pv"):J.Q(s,"values")
q=q.a(r)
if(q==null)q=B.an
d=A.bP(q,!0,t.X)}catch(o){q=A.E8(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.cd.V(e,n)||J.ag(d)!==n.length)throw A.b(A.E8("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.aT(l)&&!A.a5(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.E8(j))}return d}}
A.BE.prototype={
V(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.xB.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.r(s.e)+", backward: "+s.z+")"}}
A.dj.prototype={}
A.am.prototype={}
A.cg.prototype={}
A.dG.prototype={}
A.da.prototype={}
A.ba.prototype={}
A.cx.prototype={}
A.no.prototype={
cS(a,b){var s=this.gej()
s.Q.nK()
return this.c.ae(a,b)},
cl(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bP(i.d,!0,h)
h=A.bP(i.e,!0,h)
s=a0==null?A.bP(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bP(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bP(i.f,!0,t.jS)
return new A.no(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
hl(){var s=null
return this.cl(s,s,s,s,s,s,s,s,s)},
lL(a){var s=null
return this.cl(s,s,s,s,s,s,s,a,s)},
qn(a){var s=null
return this.cl(s,s,s,a,s,s,s,s,s)},
qo(a){var s=null
return this.cl(s,s,s,s,a,s,s,s,s)},
ql(a){var s=null
return this.cl(a,s,s,s,s,s,s,s,s)},
qp(a){var s=null
return this.cl(s,s,s,s,s,a,s,s,s)},
qr(a,b,c){var s=null
return this.cl(s,s,s,s,s,s,a,b,c)},
qq(a,b){var s=null
return this.cl(s,a,b,s,s,s,s,s,s)},
qm(a){var s=null
return this.cl(s,s,a,s,s,s,s,s,s)},
dk(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aB('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.G('Unknown field "'+a+'" for query.',a))},
br(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.dk(a0)
s='"'+A.D(a0,'"','""')+'"'
r=A.l([],t.fC)
q=a4!=null
if(q)r.push(new A.ba(s+" = ?",[a4]))
p=b2!=null
if(p)r.push(new A.ba(s+" <> ?",[b2]))
o=a5!=null
if(o)r.push(new A.ba(s+" > ?",[a5]))
n=a6!=null
if(n)r.push(new A.ba(s+" >= ?",[a6]))
m=b0!=null
if(m)r.push(new A.ba(s+" < ?",[b0]))
l=b1!=null
if(l)r.push(new A.ba(s+" <= ?",[b1]))
k=a7!=null
if(k)r.push(new A.ba(s+" IN ("+B.b.C(A.a9(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.ba(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.ba(s+b,[A.l2(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.ba(s+b,["%"+A.l2(a3)]))
g=a2!=null
if(g)r.push(new A.ba(s+b,["%"+A.l2(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.ba(s+" IS NULL",B.k))
e=a8===!0
if(e)r.push(new A.ba(s+" IS NOT NULL",B.k))
d=this.hl()
B.b.D(d.d,r)
c=A.l([],t.k)
if(q)c.push(new A.am(a0,"eq",[a4]))
if(p)c.push(new A.cg(new A.am(a0,"eq",[b2])))
if(o)c.push(new A.am(a0,"gt",[a5]))
if(n)c.push(new A.am(a0,"gte",[a6]))
if(m)c.push(new A.am(a0,"lt",[b0]))
if(l)c.push(new A.am(a0,"lte",[b1]))
if(k)c.push(new A.am(a0,"inValues",a7))
if(j)c.push(new A.am(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.am(a0,"startsWith",[b3]))
if(h)c.push(new A.am(a0,"endsWith",[a3]))
if(g)c.push(new A.am(a0,"contains",[a2]))
if(f)c.push(new A.am(a0,"isNull",B.k))
if(e)c.push(new A.cg(new A.am(a0,"isNull",B.k)))
B.b.D(d.f,c)
return d},
nY(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
yp(a,b,c){var s=null
return this.br(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
yw(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
yq(a,b,c){var s=null
return this.br(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
yr(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
yu(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
yv(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
ys(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
ym(a,b,c){var s=null
return this.br(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
yx(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
yo(a,b,c){var s=null
return this.br(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
yn(a,b,c){var s=null
return this.br(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
yt(a,b,c){var s=null
return this.br(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
xj(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=A.l([],j)
q.a5(0,new A.xy(this,p,h))
if(p.length===0)continue
i.push("("+B.b.C(p," AND ")+")")}if(i.length===0)return this
o=this.hl()
o.e.push(new A.ba("("+B.b.C(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.p)(a),++r){q=a[r]
if(q.gS(0)){m=A.l([],j)
for(l=q.ga0().gt(0);l.k();){k=l.gn()
m.push(new A.am(k.a,"eq",[k.b]))}s.push(new A.dG(m))}}o.f.push(new A.da(s))
return o},
ke(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.am
r=s?a.a:l
if(s){this.dk(r)
break A}s=a instanceof A.cg
q=s?a.a:l
if(s){this.ke(q)
break A}p=a instanceof A.dG
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.da
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.p)(n),++m)this.ke(n[m])
break A}},
gcm(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga_(r).a!=="id"
else s=!1
if(s)r.push(B.ds)
return r},
glI(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gcm(),q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.push(new A.cx(o.a,!o.b))}}else s=this.gcm()
return s},
gtT(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gcm(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
k0(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.FV('Query on "'+this.gaZ()+'" requires .limit(n) or .all().'))
return s},
gaZ(){return this.b.a},
gej(){return this.a},
f_(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
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
if(r!=null){n=f.glP().v3(r,f.at)
m=f.m9(f.glI(),n)
d.push(m.a)
B.b.D(c,m.b)}l=d.length===0?"":" WHERE "+B.b.C(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.D(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.D(a,'"','""')+'"')+") AS v"}else r=f.gtG()
k=r}j=f.glI()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.Z(j,new A.xt(),A.a1(j).i("Z<1,j>")).C(0,", ")
h=A.KV(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.C(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.xu(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.k0():a3
g=e}return new A.a_(h+(g==null?"":" LIMIT "+A.r(g)),c)},
jn(a){return this.f_(null,null,!1,!1,a)},
qc(a,b){return this.f_(a,b,!1,!1,null)},
qa(){return this.f_(null,null,!1,!1,null)},
qd(a,b,c){return this.f_(a,null,b,c,null)},
qb(a){return this.f_(null,null,!1,a,null)},
gtG(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.lw())return"*"
o=A.O(o,t.N)
for(s=this.gcm(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(!B.b.E(o,p))o.push(p)}return new A.Z(o,A.pZ(),A.a1(o).i("Z<1,j>")).C(0,", ")},
glP(){var s=this.b
return new A.vk(s.a,s.b,this.gtT(),this.gtQ())},
gtQ(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a9(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
m9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.ct(a,new A.xv(a)),c=B.b.ct(b,new A.xw())
if(a.length>=2&&d&&!B.b.gH(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
s.push('"'+A.D(p.a,'"','""')+'"')}o=B.b.C(s,", ")
n=B.b.gH(a).b?"<":">"
return new A.a_("("+o+") "+n+" ("+B.b.C(A.a9(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.l([],s)
l=[]
for(k=0;k<a.length;++k){j=A.l([],s)
i=[]
g=0
for(;;){if(!(g<=k)){h=!0
break}r=a[g]
f='"'+A.D(r.a,'"','""')+'"'
e=b[g]
if(g===k)if(e==null){if(a[g].b){h=!1
break}j.push(f+" IS NOT NULL")}else{r=a[g].b
n=r?"<":">"
if(r)j.push("("+f+" "+n+" ? OR "+f+" IS NULL)")
else j.push(f+" "+n+" ?")
i.push(e)}else if(e==null)j.push(f+" IS NULL")
else{j.push(f+" = ?")
i.push(e)}++g}if(h){m.push("("+B.b.C(j," AND ")+")")
B.b.D(l,i)}}if(m.length===0)return B.dJ
return new A.a_("("+B.b.C(m," OR ")+")",l)},
ma(a,b){var s,r,q,p,o=this.glP(),n=[]
for(s=this.gcm(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gcm(),p=r.length,q=0;q<r.length;r.length===p||(0,A.p)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a9(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bF.gdE().v(o)},
ex(a){return this.w4(a)},
d2(){return this.ex(null)},
w4(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ex=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.k0():a1
if(a0===0){q=B.dt
s=1
break}o=a0==null
n=p.jn(o?null:a0+1)
s=3
return A.a(p.cS(n.a,n.b),$async$ex)
case 3:m=a3
l=o?m:J.lg(m,a0).bT(0)
k=!o&&J.ag(m)>a0
o=p.y
j=o!=null
i=j&&p.lw()
h=p.b
if(i){i=A.O(o,t.N)
B.b.D(i,p.t7())
g=A.OA(h,l,p.gej().cx,i,p.gej().cy)}else g=A.Oz(h,l,p.gej().cx,p.gej().cy)
i=p.at
if(i&&g.length!==0){h=A.a1(g).i("bE<1>")
f=A.O(new A.bE(g,h),h.i("a0.E"))
B.b.aq(g)
B.b.D(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hD(g),$async$ex)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.Pg(g,o):g
if(g.length!==0){b=e?p.ma(B.b.ga_(g),B.b.gH(g)):null
a=d?p.ma(B.b.ga_(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.cz(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
hD(a){return this.t1(a)},
t1(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga_(a)
e=p.gcm()
n=[]
for(m=p.gcm(),l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k)n.push(o.h(0,m[k].a))
j=p.m9(e,n)
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
return A.a(p.cS("SELECT 1 FROM "+('"'+A.D(p.b.a,'"','""')+'"')+" WHERE "+B.b.C(i," AND ")+" LIMIT 1",h),$async$hD)
case 3:q=d.d9(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)},
lw(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.ey(o)==null)return!1}return!0},
t7(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gcm(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
i6(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$i6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.qb(!0)
m=A
s=3
return A.a(p.cS(o.a,o.b),$async$i6)
case 3:n=m.fq(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i6,r)},
i8(a){return this.uU(a)},
uU(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$i8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.dk(a)
o=p.qd(a,!0,!0)
m=A
s=3
return A.a(p.cS(o.a,o.b),$async$i8)
case 3:n=m.fq(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
ic(a){return this.vI(a)},
vI(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$ic=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:p.dk(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.qr(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.jn(h)
s=3
return A.a(i.cS(B.a.kY(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$ic)
case 3:f=a0
o=p.b
e=o.ey(a)
n=[]
for(m=J.E(f),l=e==null,o=o.a,d=a==="archived";m.k();){c=m.gn().h(0,a)
if(l){if(d)c=J.x(c,1)}else c=A.Ey(e,c,null,null,"",o)
n.push(c)}q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ic,r)},
rp(a){var s,r,q=this.b.ey(a)
if(q==null)return!1
s=q.b
A:{r=B.W===s||B.X===s||B.B===s||B.Y===s
break A}return r},
dj(a,b){return this.pK(a,b)},
pK(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$dj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.dk(b)
if(!p.rp(b))throw A.b(A.G('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.qc(b,a)
s=3
return A.a(p.cS(o.a,o.b),$async$dj)
case 3:n=d
m=J.J(n)
q=A.C4(m.gF(n)?null:J.Q(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dj,r)},
iw(){var s=0,r=A.h(t.a),q,p=this,o,n,m,l,k,j
var $async$iw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lL(A.l(["id"],m))
k=l.qa()
s=3
return A.a(l.cS(k.a,k.b),$async$iw)
case 3:j=b
m=A.l([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.H(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ie(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$ie=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.jn(p.k0())
n=J
s=3
return A.a(p.cS("EXPLAIN QUERY PLAN "+o.a,o.b),$async$ie)
case 3:q=n.bI(b,new A.xx(),t.X).C(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ie,r)}}
A.xy.prototype={
$2(a,b){this.a.dk(a)
this.b.push('"'+A.D(a,'"','""')+'" = ?')
this.c.push(b)},
$S:51}
A.xt.prototype={
$1(a){var s=A.D(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:122}
A.xu.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.D(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:123}
A.xv.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:124}
A.xw.prototype={
$1(a){return a!=null},
$S:15}
A.xx.prototype={
$1(a){return a.h(0,"detail")},
$S:42}
A.cV.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cV&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gK(a){return A.ch(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.xU.prototype={
tF(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.FV('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
d2(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$d2=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.cf(a3).length===0){q=B.d0
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.eI(a3)
A.L5(d)
if(e.b)A.L4(d)
c=f.a
b=c+"_fts"
a=A.l(['"'+A.D(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.C(a," AND ")
a0=n.tF()
a1=a0==null?"":" LIMIT "+A.r(a0)
f=A.D(b,'"','""')
e=A.D(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.D(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.Q.nK()
s=7
return A.a(n.c.ae(m,l),$async$d2)
case 7:j=a6
i=A.l([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.Q(h,"id")
f.toString
A.H(f)
e=J.Q(h,"score")
e.toString
J.aO(i,new A.cV(f,A.Ha(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.B(a4)
if(i instanceof A.cj){g=i
throw A.b(A.G("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d2,r)}}
A.cz.prototype={}
A.xL.prototype={}
A.cd.prototype={
a7(){return"FieldKind."+this.b}}
A.b6.prototype={
glh(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.ay===s||B.J===s||B.Z===s||B.a_===s||B.K===s){r="TEXT"
break A}if(B.W===s||B.B===s||B.Y===s){r="INTEGER"
break A}if(B.X===s){r="REAL"
break A}throw A.b(A.e3(u.P))}return r},
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
A.td.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fO(B.cV,A.H(m))
m=n.h(0,"name")
m.toString
A.H(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.b6(m,B.ay,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.b6(m,B.W,r,!1,q,o,o,!1)
case 2:return new A.b6(m,B.X,r,!1,q,o,o,!1)
case 3:return new A.b6(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.b6(m,B.Y,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.b6(m,B.J,r,!1,!1,A.fY(J.q6(t.j.a(n),p),p),o,!1)
case 6:return new A.b6(m,B.Z,!1,!1,q,o,o,!1)
case 7:return new A.b6(m,B.a_,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.b6(m,B.K,!1,!1,!1,o,A.H(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:125}
A.j0.prototype={
a7(){return"IndexScope."+this.b}}
A.dP.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.u6.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.q6(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dP(q,s,A.fO(B.cQ,A.H(r)))},
$S:126}
A.fV.prototype={
p(){var s,r=t.N,q=t.X,p=A.t(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gS(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fV&&r.b===b.b&&B.aA.V(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gK(a){return A.ch(A.w9(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.tz.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.q6(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fV(p,r,t.f.b(q)?A.K5(q.cr(0,s,t.X)):B.cv)},
$S:127}
A.eL.prototype={
eI(a){var s,r,q,p
for(s=this.a.ga0(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.E(r,p))continue
q=q.b
r=A.D(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.eL&&A.K4(this.a,b.a)
else s=!0
return s},
gK(a){var s,r,q,p=this.a,o=p.gJ(),n=A.O(o,A.n(o).i("o.E"))
B.b.aj(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.p)(n),++r){q=n[r]
o.push(A.ch(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.w9(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.ty.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.t(s,s)
for(o=t.d2.a(o).ga0(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.H(p)
q=q.b
q.toString
A.H(q)
A.FF(p,q)
r.j(0,p,q)}return new A.eL(A.JM(r,s,s))},
$S:128}
A.c3.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.y9.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ak(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.an:p)
q=t.G
while(p.k())r.push(A.FA(q.a(p.gn())))
return new A.c3(o,s,r,null)},
$S:129}
A.dY.prototype={
a7(){return"MissingRemotePolicy."+this.b}}
A.lP.prototype={}
A.ca.prototype={
gdC(){var s,r,q,p,o=this,n=$.IC()
A.DG(o)
s=n.a.get(o)
if(s==null){s=A.aP(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
ey(a){var s,r,q,p,o,n=this,m=$.ID()
A.DG(n)
s=m.a.get(n)
if(s==null){s=A.t(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.Q(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.t(l,k)
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
A.qJ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.H(h)
s=i.h(0,"version")
s.toString
A.ak(s)
r=A.l([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.FA(o.a(q.gn())))
q=A.l([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.Kf(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.H(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.K6(o.a(l))}else l=null
k=A.l([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.an:i)
while(i.k())k.push(A.Le(o.a(i.gn())))
return new A.ca(h,s,r,q,B.ci,n,p,l,k,B.bd,null,m,this.b.i("ca<0>"))},
$S(){return this.b.i("ca<0>()")}}
A.nC.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.xO.prototype={
$1(a){return a.d!=null},
$S:26}
A.xP.prototype={
$2(a,b){return new A.V(J.X(a),b,t.I)},
$S:12}
A.xQ.prototype={
$2(a,b){return new A.V(J.X(a),b,t.B)},
$S:32}
A.xR.prototype={
$1(a){return J.X(a)},
$S:30}
A.xS.prototype={
b_(a){return this.xS(a)},
xS(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$b_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.a
h=i.a
g=h.fy
f=a.a
if(g.I(f))throw A.b(A.aB('Duplicate store name "'+f+'" in this open call.'))
p=A.E5(a)
o=i.d
if(o.e===B.aF&&p.b.length!==0&&!A.OK(a,i.at))throw A.b(new A.k2('Store "'+f+'" declares executable features that cannot run on the worker runtime: '+B.b.C(p.b,", ")+"."))
s=2
return A.a(q.hg(a,p),$async$b_)
case 2:n=new A.iK(o).kn(a)
o=a.w
if(o!=null)A.Ph(i.b,f,o.c)
o=i.b
s=3
return A.a(o.aK("lp_stores",1,"store = ?",[f]),$async$b_)
case 3:m=c
l=J.J(m)
s=l.gF(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$b_)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$b_)
case 11:case 9:l.length===k||(0,A.p)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$b_)
case 15:case 13:l.length===k||(0,A.p)(l),++j
s=12
break
case 14:l=a.b
i=i.x
s=16
return A.a(o.aF(0,"lp_stores",A.m(["store",f,"table_name",f,"schema_ver",l,"definition_json",B.h.a9(a.p(),null),"created_at",i.$0()],t.N,t.X)),$async$b_)
case 16:s=17
return A.a(A.h2(o,0,0,"create:"+f,i,l),$async$b_)
case 17:s=5
break
case 6:i=J.Q(l.gH(m),"schema_ver")
i.toString
A.ak(i)
l=a.b
if(i>l)throw A.b(A.Ga('Store "'+f+'" on disk is schema v'+i+", but this package supports v"+l+"."))
s=i<l?18:19
break
case 18:s=20
return A.a(A.h1(h,a,i),$async$b_)
case 20:case 19:s=21
return A.a(q.c3(a),$async$b_)
case 21:s=22
return A.a(o.M("lp_stores",A.m(["definition_json",B.h.a9(a.p(),null),"schema_ver",l],t.N,t.X),"store = ?",[f]),$async$b_)
case 22:case 5:g.j(0,f,new A.nR(a,p,new A.wV(A.t(t.N,t.b))))
s=23
return A.a(q.ee(f,p),$async$b_)
case 23:return A.e(null,r)}})
return A.f($async$b_,r)},
hg(a,b){return this.pO(a,b)},
pO(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$hg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.a.b.aK("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$hg)
case 3:j=d
if(J.bq(j)){s=1
break}o=null
try{n=J.Q(J.bH(j),"v")
o=A.L3(typeof n=="string"?B.h.aI(n,null):n)}catch(i){if(A.B(i) instanceof A.dW){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.au(B.m.v(B.e.v(A.al(o.p()))).a)!==A.au(B.m.v(B.e.v(A.al(b.p()))).a))throw A.b(A.aB('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
ee(a,b){return this.rZ(a,b)},
rZ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$ee=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.al(b.p())
n=q.a.b
m=t.N
l=t.X
k=J
s=5
return A.a(n.aK("lp_meta",1,"k = ?",[p]),$async$ee)
case 5:s=k.bq(d)?2:4
break
case 2:s=6
return A.a(n.aF(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$ee)
case 6:s=3
break
case 4:s=7
return A.a(n.M("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$ee)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ee,r)},
i3(a){return this.uI(a)},
uI(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$i3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a.b.e
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$i3)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
c3(a){return this.tl(a)},
tl(a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$c3=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a0=p.a
a1=a0.b
a2=a4.a
s=3
return A.a(a1.eK("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a2]),$async$c3)
case 3:a3=a7
if(J.bq(a3)){s=1
break}o=null
try{n=J.Q(J.bH(a3),"definition_json")
m=typeof n=="string"?B.h.aI(n,null):n
l=m
l.toString
k=t.X
o=A.qI(A.bu(t.f.a(l),t.N,k),k)}catch(a5){if(A.B(a5) instanceof A.dp){s=1
break}else throw a5}i=o.w
h=a4.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.aA.V(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jY()
$.la()
f.aC()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a1.O("DROP TRIGGER IF EXISTS "+('"'+A.D(a2+d,'"','""')+'"')),$async$c3)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a1.O("DROP TABLE IF EXISTS "+('"'+A.D(a2+"_fts",'"','""')+'"')),$async$c3)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.iK(a0.d).kn(a4).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a1.O(l[e]),$async$c3)
case 16:case 14:l.length===k||(0,A.p)(l),++e
s=13
break
case 15:l=a2+"_fts"
k=A.D(l,'"','""')
s=17
return A.a(a1.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.D(l,'"','""')+'"')+") VALUES('delete-all')"),$async$c3)
case 17:k=h.a
c=k.$ti.i("Z<M.E,j>")
b=new A.Z(k,A.pZ(),c).C(0,", ")
a=new A.Z(k,new A.xT(a4,h),c).C(0,", ")
l=A.D(l,'"','""')
s=18
return A.a(a1.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.D(a2,'"','""')+'"')),$async$c3)
case 18:case 12:if(f.b==null)f.b=$.nk.$0()
l=a4.b
s=19
return A.a(A.h2(a1,f.gnd(),l,"fts:"+a2,a0.x,l),$async$c3)
case 19:case 1:return A.e(q,r)}})
return A.f($async$c3,r)},
ia(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.H),q=this,p
var $async$ia=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b.f
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$ia)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ia,r)}}
A.xT.prototype={
$1(a){return A.EU(this.a.a,this.b.c,"",a)},
$S:7}
A.e_.prototype={
a7(){return"MutationAction."+this.b}}
A.fF.prototype={
gaZ(){return this.b.a.a},
f1(){var s=this.d
if(s!=null&&s.e){s=this.gaZ()
throw A.b(new A.jK('Cannot mutate "'+s+'" through a read-only Tx.'))}},
fR(a){var s=this
if(s.d!=null)return s.iG(B.a2,a)
return s.a.b7(new A.qV(s,a),B.q,t.H)},
nV(a){var s=this
if(s.d!=null)return s.iG(B.a3,a)
return s.a.b7(new A.qY(s,a),B.q,t.H)},
nF(a){var s=this
if(s.d!=null)return s.nG(a)
return s.a.b7(new A.qU(s,a),B.q,t.H)},
nW(a){var s=this
if(s.d!=null)return s.bP(a,B.a3)
return s.a.b7(new A.qX(s,a),B.q,t.H)},
nC(a,b){var s=this
if(s.d!=null)return s.xn(a,b)
return s.a.b7(new A.qR(s,a,b),B.q,t.H)},
nD(a){var s=this
if(s.d!=null)return s.dc(a)
return s.a.b7(new A.qQ(s,a),B.q,t.H)},
dc(a){return this.xm(a)},
xm(a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dc=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:p.f1()
if(a7.a===0){s=1
break}o=p.c.b
n=A.n(a7)
m=n.i("T<1>")
l=A.O(new A.T(a7,m),m.i("o.E"))
m=t.N
k=A.t(m,t.G)
j=p.b.a,i=p.a,h=i.cx,i=i.cy,g=j.a,f='SELECT * FROM "'+g+'" WHERE id IN (',e=0
case 3:if(!(d=l.length,e<d)){s=5
break}c=e+2000
b=B.b.U(l,e,B.c.bx(c,0,d))
a6=J
s=6
return A.a(o.ae(f+B.b.C(A.a9(b.length,"?",!1,m),", ")+")",b),$async$dc)
case 6:d=a6.E(a9)
case 7:if(!d.k()){s=8
break}a=d.gn()
a0=a.h(0,"id")
a0.toString
k.j(0,A.H(a0),A.bU(j,a,h,i))
s=7
break
case 8:case 4:e=c
s=3
break
case 5:a1=A.t(m,t.o)
a2=A.t(m,t.dZ)
j=k.$ti.i("T<1>")
a3=A.O(new A.T(k,j),j.i("o.E"))
j=t.s,e=0
case 9:if(!(i=a3.length,e<i)){s=11
break}c=e+2000
b=B.b.U(a3,e,B.c.bx(c,0,i))
a4=B.b.C(A.a9(b.length,"?",!1,m),", ")
i=A.l([g],j)
B.b.D(i,b)
h="store = ? AND record_id IN ("+a4+")"
a6=J
s=12
return A.a(o.bQ("lp_sync_row",h,i),$async$dc)
case 12:f=a6.E(a9)
case 13:if(!f.k()){s=14
break}d=f.gn()
a=d.h(0,"record_id")
a.toString
a1.j(0,A.H(a),A.hz(d))
s=13
break
case 14:a6=J
s=15
return A.a(o.bQ("lp_outbox",h,i),$async$dc)
case 15:i=a6.E(a9)
case 16:if(!i.k()){s=17
break}h=i.gn()
f=h.h(0,"record_id")
f.toString
a2.j(0,A.H(f),A.jA(h))
s=16
break
case 17:case 10:e=c
s=9
break
case 11:j=new A.aK(a7,n.i("aK<1,2>")).gt(0)
case 18:if(!j.k()){s=19
break}a5=j.d
i=a5.a
h=a5.b
f=k.h(0,i)
d=a1.h(0,i)
s=20
return A.a(p.dd(i,h,!0,f,a2.h(0,i),d),$async$dc)
case 20:s=18
break
case 19:j=p.d
j.toString
m=A.aP(m)
for(n=new A.bN(a7,a7.r,a7.e,n.i("bN<1>"));n.k();)m.u(0,n.d)
j.a2(new A.a6(g,m))
case 1:return A.e(q,r)}})
return A.f($async$dc,r)},
mX(a){var s=this
if(s.d!=null)return s.iF(B.C,a)
return s.a.b7(new A.qN(s,a),B.q,t.H)},
nP(a){var s=this
if(s.d!=null)return s.iF(B.D,a)
return s.a.b7(new A.qW(s,a),B.q,t.H)},
iO(a){var s=this
if(s.d!=null)return s.dL(a)
return s.a.b7(new A.qS(s,a),B.q,t.H)},
dL(a){return this.xv(a)},
xv(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.f1()
s=2
return A.a(q.ei(a),$async$dL)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cL(n,m,a,!0),$async$dL)
case 3:s=4
return A.a(n.X(m,"id = ?",[a]),$async$dL)
case 4:l=t.N
o.a2(new A.a6(m,A.ap([a],l)))
if(p!=null){l=A.c0(p.gJ(),l)
l.G(0,"id")
o.bN(B.av,l,a,null,p,B.H,m)}return A.e(null,r)}})
return A.f($async$dL,r)},
dd(a,b,c,d,e,f){return this.xp(a,b,c,d,e,f)},
xo(a,b,c){return this.dd(a,b,c,null,null,null)},
xn(a,b){return this.dd(a,b,!1,null,null,null)},
xp(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$dd=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p.f1()
s=f!=null||e!=null?3:5
break
case 3:o=e
n=f
s=4
break
case 5:s=6
return A.a(p.c.b.ae("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$dd)
case 6:m=h
l=J.J(m)
if(l.gS(m)){k=l.gH(m)
n=A.hz(k)
o=k.h(0,"o_kind")!=null?A.jA(A.m(["store",k.h(0,"o_store"),"record_id",k.h(0,"o_record_id"),"kind",k.h(0,"o_kind"),"payload_json",k.h(0,"o_payload_json"),"base_updated",k.h(0,"o_base_updated"),"base_hash",k.h(0,"o_base_hash"),"dirty_fields",k.h(0,"o_dirty_fields"),"op_id",k.h(0,"o_op_id"),"created_at",k.h(0,"o_created_at"),"updated_at",k.h(0,"o_updated_at"),"depends_on_op",k.h(0,"o_depends_on_op")],t.N,t.X)):null}else{n=null
o=null}case 4:s=n!=null&&n.w===B.G&&o!=null?7:8
break
case 7:s=9
return A.a(p.ed(a,b,n,o,c),$async$dd)
case 9:s=1
break
case 8:s=10
return A.a(p.e6(a,b,c,o,d,n),$async$dd)
case 10:case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
e6(a,b,c,d,e,f){return this.qM(a,b,c,d,e,f)},
lZ(a,b,c,d,e){return this.e6(a,b,c,d,null,e)},
qM(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$e6=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=e==null?2:4
break
case 2:s=5
return A.a(q.ei(a),$async$e6)
case 5:s=3
break
case 4:h=e
case 3:m=h
if(m==null)throw A.b(A.jM("No record "+q.gaZ()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.bO(m,p,o)
n.D(0,b)
o=A.t(p,o)
o.j(0,"id",a)
o.D(0,n)
s=6
return A.a(q.aS(B.L,c,m,a,d,f,o),$async$e6)
case 6:return A.e(null,r)}})
return A.f($async$e6,r)},
ed(a,b,c,d,e){return this.rW(a,b,c,d,e)},
rW(a8,a9,b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ed=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a6=null
try{a6=B.h.aI(b1.d,null)}catch(b3){a6=null}if(!t.G.b(a6)){q=n.lZ(a8,a9,b2,b1,b0)
s=1
break}i=a6.h(0,"id")
if(i!=null&&!J.x(i,a8)){q=n.lZ(a8,a9,b2,b1,b0)
s=1
break}h=t.N
g=t.X
f=A.bO(a6,h,g)
f.D(0,a9)
m=f
J.b5(m,"id",a8)
e=new A.a7("")
f=n.b
d=f.a
c=A.CG(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.bO(m,h,g)
b.G(0,"id")
a0=n.hP(a8,b,a,c)
s=a0 instanceof A.w?3:4
break
case 3:s=5
return A.a(a0,$async$ed)
case 5:case 4:a1=n.lT(a6,m,B.L)
l=null
b=a1.length===1&&d.gdC().E(0,B.b.gao(a1))
a2=n.a
a3=a2.cx
a4=a2.cy
if(b){a5=d.ey(B.b.gao(a1))
b=a5.a
l=A.m([b,A.ES(d,a5,J.Q(m,b),a3,a4,a8),"hidden",0],h,g)}else l=A.dD(d,J.x(J.Q(m,"archived"),!0),a3,a4,a8,m)
p=7
s=10
return A.a(n.c.b.M(d.a,l,"id = ?",[a8]),$async$ed)
case 10:p=2
s=9
break
case 7:p=6
a7=o.pop()
k=A.B(a7)
h=A.Ix(k,m)
throw A.b(h)
s=9
break
case 6:s=2
break
case 9:g=a2.dx
g===$&&A.v()
b=l
s=11
return A.a(g.bw(B.L,null,a1,n.c.b,a8,m,a6,b1,a,b,b0,f),$async$ed)
case 11:if(!b2){g=n.d
if(g!=null)g.a2(new A.a6(d.a,A.ap([a8],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g){g=a6
h.bN(B.A,A.mV(a1,A.a1(a1).c),a8,m,g,B.H,d.a)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ed,r)},
aS(a,b,c,d,e,f,g){return this.x7(a,b,c,d,e,f,g)},
iG(a,b){var s=null
return this.aS(a,!1,s,s,s,s,b)},
iF(a,b){var s=null
return this.aS(a,!1,s,b,s,s,s)},
x5(a,b,c){var s=null
return this.aS(a,b,s,s,s,s,c)},
x6(a,b,c,d,e,f){return this.aS(a,b,c,null,d,e,f)},
x7(c0,c1,c2,c3,c4,c5,c6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$aS=A.c(function(c7,c8){if(c7===1){o.push(c8)
s=p}for(;;)switch(s){case 0:b8={}
n.f1()
m=null
b8.a=c2
l=null
b8.b=b8.c=null
i=new A.qP(b8,n,c5,c4)
s=c0===B.a2?3:5
break
case 3:h=A.a3(c6.h(0,"id"))
if(h==null)h=A.ik()
g=$.q4()
if(!g.b.test(h))throw A.b(A.G('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aS)
case 6:l=n.f4(c6,m)
c0=b8.a==null?B.be:B.L
s=4
break
case 5:s=c0===B.L?7:9
break
case 7:c3.toString
m=c3
s=10
return A.a(i.$1(m),$async$aS)
case 10:if(b8.a==null)throw A.b(A.jM("No record "+n.gaZ()+"/"+A.r(m)+" to update."))
c6.toString
l=n.f4(c6,m)
s=8
break
case 9:s=c0===B.a3?11:13
break
case 11:h=A.a3(c6.h(0,"id"))
if(h==null)h=A.ik()
g=$.q4()
if(!g.b.test(h))throw A.b(A.G('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aS)
case 14:g=b8.a
if(g==null){l=n.f4(c6,m)
c0=B.be}else{l=A.bO(g,t.N,t.X)
for(g=new A.aK(c6,A.n(c6).i("aK<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.b5(l,e,f.b)}c0=B.L}s=12
break
case 13:c3.toString
m=c3
s=15
return A.a(i.$1(m),$async$aS)
case 15:g=b8.a
if(g==null)throw A.b(A.jM("No record "+n.gaZ()+"/"+A.r(m)+" to archive/restore."))
g=A.bO(g,t.N,t.X)
g.j(0,"archived",c0===B.C)
l=g
case 12:case 8:case 4:d=new A.a7("")
g=n.b
e=g.a
c=l
b=A.CG(d,e,c,J.ag(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
a0=n.hP(m,l,a,b)
s=a0 instanceof A.w?16:17
break
case 16:s=18
return A.a(a0,$async$aS)
case 18:case 17:s=b8.a==null?19:21
break
case 19:a1=null
s=20
break
case 21:c=c5==null?b8.c:c5
s=c==null?22:24
break
case 22:c=n.a.dx
c===$&&A.v()
s=25
return A.a(c.bR(n.c.b,e.a,m),$async$aS)
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
c===$&&A.v()
s=32
return A.a(c.eM(n.c.b,e.a,m),$async$aS)
case 32:c=c8
a2=c
s=30
break
case 31:a2=c
case 30:case 27:c=a1==null
a3=!c
if(a3&&a1.w===B.a8)throw A.b(A.Fu("Record "+n.gaZ()+"/"+A.r(m)+u.W))
a4=b8.a
a5=a4!=null
if(a5)a6=!a3||a1.w===B.z
else a6=!1
if(a5&&a6){a7=A.al(A.bn(e,a4))
a3=A.au(B.m.v(B.e.v(a7)).a)
a8=new A.qp(a7,a3,c?null:a1.c)}else a8=null
c=m
a3=l
a4=n.a
a5=a4.cx
a9=a4.cy
b0=A.dD(e,J.x(J.Q(l,"archived"),!0),a5,a9,c,a3)
b1=n.lT(b8.a,l,c0)
k=null
if(b8.a!=null&&b1.length===1&&e.gdC().E(0,B.b.gao(b1))){b2=e.ey(B.b.gao(b1))
c=b2.a
k=A.m([c,A.ES(e,b2,J.Q(l,c),a5,a9,m),"hidden",0],t.N,t.X)}else k=b0
p=34
c=e.a
a3=n.c.b
s=b8.a==null?37:39
break
case 37:s=40
return A.a(a3.aF(0,c,k),$async$aS)
case 40:s=38
break
case 39:s=41
return A.a(a3.M(c,k,"id = ?",[m]),$async$aS)
case 41:case 38:p=2
s=36
break
case 34:p=33
b9=o.pop()
j=A.B(b9)
g=A.Ix(j,l)
throw A.b(g)
s=36
break
case 33:s=2
break
case 36:c=a4.dx
c===$&&A.v()
a3=m
a4=b8.a
s=42
return A.a(c.bw(c0,a8,b1,n.c.b,a3,l,a4,a2,a,b0,a1,g),$async$aS)
case 42:b4=c8
b5=b4.a
if(b5)b6=B.av
else switch(c0.a){case 2:case 0:case 1:b6=b8.a==null?B.af:B.A
break
case 3:b6=B.A
break
case 4:b6=B.ce
break
case 5:b6=B.cf
break
default:b6=null}if(b5){g=A.aP(t.N)
c=b8.a
c=J.E((c==null?l:c).gJ())
while(c.k()){a3=c.gn()
if(a3!=="id")g.u(0,a3)}b7=g}else if(c0===B.C||c0===B.D)b7=A.ap(["archived"],t.N)
else if(b8.a==null){g=l
c=A.n(g).i("T<1>")
a3=c.i("aq<o.E>")
b7=A.c0(new A.aq(new A.T(g,c),new A.qO(),a3),a3.i("o.E"))}else b7=A.mV(b1,A.a1(b1).c)
g=n.d
c=g==null
if(!c){a3=m
a4=b8.a
a5=b5?null:l
g.bN(b6,b7,a3,a5,a4,B.H,e.a)}if(!c1)if(!c)g.a2(new A.a6(e.a,A.ap([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aS,r)},
bP(a,b){return this.xA(a,b)},
nG(a){return this.bP(a,B.a2)},
xA(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bP=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.f1()
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
A.a3(a0)
a2=a1?A.ik():a0
a1=$.q4()
if(!a1.b.test(a2))throw A.b(A.G('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aO(l,new A.a_(a2,a))}if(!c){a3=A.t(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ao(a3,a3.$ti.i("ao<2>")).bp(0,new A.qT())}else a5=!1
s=c3===B.a2&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.eh(m,l),$async$bP)
case 9:k=A.aP(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aO(k,i)}g.a2(new A.a6(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.B(c0) instanceof A.hL))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.t(k,t.G)
j=n.a,d=j.cx,j=j.cy,a1=t.s,a8=0
case 10:if(!(a8<J.ag(l))){s=12
break}a9=a8+2000
b0=B.c.bx(a9,0,J.ag(l))
a4=A.l([],a1)
for(b1=J.Fg(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.p)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.bQ(e,"id IN ("+B.b.C(A.a9(a4.length,"?",!1,k),", ")+")",a4),$async$bP)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.H(b2),A.bU(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.t(k,t.o)
b4=A.t(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.O(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.U(b5,a8,B.c.bx(a9,0,j))
b7=B.b.C(A.a9(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.D(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.bQ("lp_sync_row",f,j),$async$bP)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.H(b1),A.hz(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.bQ("lp_outbox",f,j),$async$bP)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.H(d),A.jA(f))
s=23
break
case 24:case 17:a8=a9
s=16
break
case 18:b8=A.aP(k)
j=l,f=j.length,d=t.X,b=0
case 25:if(!(b<j.length)){s=27
break}a1=j[b]
a2=a1.a
a=a1.b
b9=a7.h(0,a2)
s=b8.E(0,a2)?28:30
break
case 28:a1=A.dV(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.x5(c3,!0,a1),$async$bP)
case 31:s=29
break
case 30:a1=A.dV(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.x6(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bP)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.p)(j),++b
s=25
break
case 27:g.a2(new A.a6(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bP,r)},
eh(a,b){return this.te(a,b)},
te(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$eh=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.iL?3:4
break
case 3:s=5
return A.a(n.dv(a6,a7),$async$eh)
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
return A.a(n.e0(a6,a4,h,g,m),$async$eh)
case 13:e=a9
if(l)J.aO(k,new A.a_(h,e));++j
case 11:a7.length===a0||(0,A.p)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.B(a5) instanceof A.cj?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aO(d,a7[c].a)
b=d
s=17
return A.a(n.dr(a6,b),$async$eh)
case 17:throw A.b(new A.hL())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.p)(i),++a1){a3=i[a1]
a.kw(B.af,a3.a,a3.b,null,B.H,a0)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eh,r)},
dv(a,b){return this.tf(a,b)},
tf(d7,d8){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6
var $async$dv=A.c(function(d9,e0){if(d9===1){p.push(e0)
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
m='INSERT INTO "'+d5+'" ('+A.ip(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.ip(B.a1)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.ip(B.a0)+") VALUES "
j=new A.qM()
b1=new A.a7("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=d0.z!=null||b2
b4=b2?A.l([],t.jO):null
i=0,a9=b4==null,b5=d1.cx,b6=d1.cy,b7=d0.b
case 2:if(!(b8=i,b9=d8.length,b8<b9)){s=4
break}h=B.w.bx(i+500,0,b9)
g=h-i
f=[]
e=[]
d=[]
c0=i
case 5:if(!(c0<h)){s=7
break}c1=d8[c0]
c2=c1.a
c3=c1.b
c4=b3?o.f4(c3,c2):c3
b1.a=""
c5=A.CG(b1,d0,c4,c2)
b8=b1.a
c6=b8.charCodeAt(0)==0?b8:b8
c7=o.hP(c2,c4,c6,c5)
s=c7 instanceof A.w?8:9
break
case 8:s=10
return A.a(c7,$async$dv)
case 10:case 9:A.NT(f,d0,J.x(c4.h(0,"archived"),!0),b5,b6,c2,c4)
b8=d1.dx
b8===$&&A.v()
c8=b8.h6()
A.HT(e,"",null,d2,null,'["*"]',B.v,c8,c6,c2,d5,d2)
A.HU(d,B.a9,0,"",null,null,'["*"]',null,null,1,0,c8,c2,null,b7,d5,B.G)
if(!a9)b4.push(new A.a_(c2,c4))
case 6:++c0
s=5
break
case 7:c=!1
b=!1
q=12
b8=d3.cH(A.r(m)+A.r(j.$2(J.ag(n),g)))
if(b8.r||b8.b.r)A.u(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eZ(new A.bY(f))
b8.hq()
c=!0
b8=d3.cH(A.r(l)+A.r(j.$2(11,g)))
if(b8.r||b8.b.r)A.u(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eZ(new A.bY(e))
b8.hq()
b=!0
b8=d3.cH(A.r(k)+A.r(j.$2(16,g)))
if(b8.r||b8.b.r)A.u(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eZ(new A.bY(d))
b8.hq()
q=1
s=14
break
case 12:q=11
d6=p.pop()
s=A.B(d6) instanceof A.cj?15:17
break
case 15:a=A.l([],d4)
for(a0=0;a0<i;++a0)J.aO(a,d8[a0].a)
a1=a
s=18
return A.a(o.dr(d7,a1),$async$dv)
case 18:s=c||b?19:20
break
case 19:a2=A.l([],d4)
for(a3=i;a3<h;++a3)J.aO(a2,d8[a3].a)
a4=a2
a5=B.b.C(A.a9(J.ag(a4),"?",!1,t.N),", ")
s=c?21:22
break
case 21:s=23
return A.a(d7.X(d5,"id IN ("+A.r(a5)+")",a4),$async$dv)
case 23:case 22:s=b?24:25
break
case 24:a6=A.l([d5],d4)
J.Fb(a6,a4)
a7=a6
s=26
return A.a(d7.X("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dv)
case 26:case 25:case 20:throw A.b(new A.hL())
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
a8.kw(B.af,a2.a,a2.b,null,B.H,d5)}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dv,r)},
e0(a,b,c,d,e){return this.pQ(a,b,c,d,e)},
pQ(a9,b0,b1,b2,b3){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$e0=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.f4(b2,b1)
a3=new A.a7("")
a4=A.CG(a3,a1,a2,b1)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
a7=n.hP(b1,a2,a6,a4)
s=a7 instanceof A.w?3:4
break
case 3:s=5
return A.a(a7,$async$e0)
case 5:case 4:a5=n.a
m=A.dD(a1,J.x(a2.h(0,"archived"),!0),a5.cx,a5.cy,b1,a2)
a5=a5.dx
a5===$&&A.v()
e=a5.h6()
a5=a1.a
l=A.HX("",null,b3,'["*"]',B.v,e,a6,b1,a5,b3)
k=A.Od('["*"]',1,e,b1,a1.b,a5,B.G)
j=!1
i=!1
p=7
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dX(new A.T(d,c),new A.qK(),c.i("o.E"),b).C(0,", ")
g=B.b.C(A.a9(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=b0.cH(f)
d=m
a=A.n(d).i("ao<2>")
d=A.O(new A.ao(d,a),a.i("o.E"))
c.ew(new A.bY(d))
j=!0
b0.cH("INSERT INTO lp_outbox ("+A.ip(B.a1)+") VALUES ("+B.b.C(A.a9(11,"?",!1,b),", ")+")").ew(new A.bY(A.Iq(l,B.a1)))
i=!0
b0.cH("INSERT INTO lp_sync_row ("+A.ip(B.a0)+") VALUES ("+B.b.C(A.a9(16,"?",!1,b),", ")+")").ew(new A.bY(A.Iq(k,B.a0)))
p=2
s=9
break
case 7:p=6
a8=o.pop()
s=j?10:11
break
case 10:s=12
return A.a(a9.X(a5,"id = ?",[b1]),$async$e0)
case 12:case 11:s=i?13:14
break
case 13:s=15
return A.a(a9.X("lp_outbox","store = ? AND record_id = ?",[a5,b1]),$async$e0)
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
return A.f($async$e0,r)},
dr(a,b){return this.qu(a,b)},
qu(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$dr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.C(A.a9(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.X(m,"id IN ("+o+")",b),$async$dr)
case 3:m=A.l([m],t.s)
B.b.D(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.X("lp_outbox",n,m),$async$dr)
case 4:s=5
return A.a(a.X("lp_sync_row",n,m),$async$dr)
case 5:case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
f4(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=a.ga0(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.nH("archived",new A.qL())
return p},
lT(a,b,c){var s,r,q,p,o
if(a==null)return B.d1
s=t.N
r=A.aP(s)
s=A.c0(a.gJ(),s)
s.D(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.dz(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.p.V(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.O(r,r.$ti.c)
B.b.aj(o)
return o},
ei(a){return this.tj(a)},
tj(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$ei=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ae('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$ei)
case 3:m=c
l=J.J(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.bU(n,l.gH(m),o.cx,o.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ei,r)},
hE(a){return this.t2(a)},
t2(a){var s=0,r=A.h(t.nw),q,p=this,o,n,m,l,k,j
var $async$hE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ae('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hE)
case 3:j=c
k=J.J(j)
if(k.gF(j)){q=B.dL
s=1
break}o=k.gH(j)
k=p.a
n=A.bU(l,o,k.cx,k.cy)
m=o.h(0,"s_sync_state")!=null?A.hz(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.ek(n,m,o.h(0,"o_kind")!=null?A.jA(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
bV(a){return this.oM(a)},
oM(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.I(a)){q=p.b.e.bV(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ae("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bV)
case 6:s=4
break
case 5:s=7
return A.a(k.ae('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bV)
case 7:case 4:j=c
l=J.J(j)
if(l.gF(j)){if(f)o.e.le(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.bU(n,i,l.cx,l.cy)
g=A.b_(i.h(0,"lp_schema_ver"))
if(g==null)g=1
s=g<m?8:9
break
case 8:s=10
return A.a(A.CC(n,h,g,m),$async$bV)
case 10:h=c
case 9:if(f)o.e.le(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
hP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=this.b.a,r=s.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
n=o.a
m=b.h(0,n)
if(o.c&&m==null)throw A.b(A.G('Field "'+n+'" is required.',n))
if(m==null)continue
l=A.ET(o,m)
if(l!=null)throw A.b(A.G(A.JH(o,l),n))}k=s.z
if(k!=null){j=k.$1(b)
if(t.fB.b(j))return this.hQ(j,b,c,d)
s=J.J(j)
if(s.gS(j))throw A.b(A.G(s.C(j,"; "),null))}this.mP(b,c,d)},
hQ(a,b,c,d){return this.ua(a,b,c,d)},
ua(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o
var $async$hQ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a,$async$hQ)
case 2:p=f
o=J.J(p)
if(o.gS(p))throw A.b(A.G(o.C(p,"; "),null))
q.mP(b,c,d)
return A.e(null,r)}})
return A.f($async$hQ,r)},
mP(a,b,c){var s=this.a.as
if(c>s)throw A.b(A.G("Document exceeds max size ("+c+" > "+s+" bytes).",null))}}
A.qV.prototype={
$1(a){return a.by(this.a.b.a.a).fR(this.b)},
$S:4}
A.qY.prototype={
$1(a){return a.by(this.a.b.a.a).nV(this.b)},
$S:4}
A.qU.prototype={
$1(a){return a.by(this.a.b.a.a).nF(this.b)},
$S:4}
A.qX.prototype={
$1(a){return a.by(this.a.b.a.a).nW(this.b)},
$S:4}
A.qR.prototype={
$1(a){return a.by(this.a.b.a.a).nC(this.b,this.c)},
$S:4}
A.qQ.prototype={
$1(a){return a.by(this.a.b.a.a).nD(this.b)},
$S:4}
A.qN.prototype={
$1(a){return a.by(this.a.b.a.a).mX(this.b)},
$S:4}
A.qW.prototype={
$1(a){return a.by(this.a.b.a.a).nP(this.b)},
$S:4}
A.qS.prototype={
$1(a){return a.by(this.a.b.a.a).iO(this.b)},
$S:4}
A.qP.prototype={
o3(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.ei(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hE(a),$async$$1)
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
$1(a){return this.o3(a)},
$S:131}
A.qO.prototype={
$1(a){return a!=="id"},
$S:13}
A.qT.prototype={
$1(a){return a>1},
$S:132}
A.qM.prototype={
$2(a,b){var s=t.N
return B.b.C(A.a9(b,"("+B.b.C(A.a9(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:133}
A.qK.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.qL.prototype={
$0(){return!1},
$S:49}
A.hL.prototype={$iI:1}
A.oT.prototype={}
A.qc.prototype={
b5(a,b){var s=this.a.W(new A.qd(a,b),b)
this.a=s.b6(new A.qe(b),new A.qf(),t.H)
return s}}
A.qd.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.qe.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.qf.prototype={
$2(a,b){},
$S:6}
A.br.prototype={
gnN(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.r9.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.H(d)
s=e.h(0,"record_id")
s.toString
A.H(s)
r=A.CQ(e.h(0,l),l,k)
q=A.CQ(e.h(0,j),j,k)
p=A.CQ(e.h(0,i),i,k)
o=A.I6(e.h(0,h),h,k)
n=A.I6(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ak(m)
return new A.br(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.CQ(e.h(0,f),f,k):null)},
$S:135}
A.ra.prototype={
fF(a){return this.wR(a)},
wR(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.v()
m=m.gbA()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.xB("lp_conflicts","detected_at ASC",n,o),$async$fF)
case 3:o=l.bI(c,A.Oj(),t.n8)
m=A.O(o,o.$ti.i("a0.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
dT(a,b){return this.oN(a,b)},
oN(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.v()
s=3
return A.a(n.gbA().b.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dT)
case 3:o=d
n=J.J(o)
if(n.gF(o)){q=null
s=1
break}q=A.DA(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
yl(a){var s={},r=A.oS()
s.a=null
r.sii(A.dr(new A.rd(s,r),new A.re(s,this,a,new A.rf(this,r,a)),t.ba))
return r.aE().gcK()},
eO(a,b,c){return this.xZ(a,b,c)},
xZ(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(c)
s=2
return A.a(p.a1(new A.rb(q,c,a,o.a,o,b),t.P),$async$eO)
case 2:return A.e(null,r)}})
return A.f($async$eO,r)},
fk(a,b){return this.ut(a,b)},
ut(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dT(a,b),$async$fk)
case 2:p=d
if(p==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eO(b,p.d,a),$async$fk)
case 3:return A.e(null,r)}})
return A.f($async$fk,r)},
ep(a,b){return this.uu(a,b)},
uu(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$ep=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dT(a,b),$async$ep)
case 3:o=d
if(o==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=o.gnN()?4:5
break
case 4:s=6
return A.a(p.a.by(a).iO(b),$async$ep)
case 6:s=1
break
case 5:s=7
return A.a(p.eO(b,o.e,a),$async$ep)
case 7:case 1:return A.e(q,r)}})
return A.f($async$ep,r)}}
A.rf.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.aE().giy()){s=1
break}p=4
s=7
return A.a(n.a.fF(n.c),$async$$0)
case 7:m=b
if(!i.aE().giy())J.aO(i.aE(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.B(h)
k=A.af(h)
if(!i.aE().giy())i.aE().bo(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.re.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.aZ(p,A.n(p).i("aZ<1>")).b2(new A.rc(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rc.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:38}
A.rd.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.w?p:A.bF(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.aE().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rb.prototype={
$1(a){return this.o4(a)},
o4(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.J(a3)
if(a4.gF(a3))throw A.b(A.A("No conflict found for "+a1+"/"+a2))
o=A.DA(a4.gH(a3))
n=o.gnN()
m=n?null:A.al(o.e)
l=n?"":A.au(B.m.v(B.e.v(A.al(A.bn(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aK(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bq(a8)?4:5
break
case 4:s=7
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.X("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.X("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a2(new A.a6(a1,A.ap([a2],a4)))
a6.a2(new A.a6("lp_conflicts",A.ap([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aK("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.J(k)
if(i.gS(k)){h=A.a3(J.Q(i.gH(k),"base_updated"))
i=h==null?A.a3(J.Q(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.bO(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.M(a4,A.dD(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bS(n?B.j:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aj(d)
c=A.al(A.bn(e,g))
s=13
return A.a(a0.M("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a9(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aK("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bq(a8)?14:16
break
case 14:a4=p.a.a
b=a4.db.$0()
h=f?B.M:B.v
e=B.h.a9(d,null)
a4=a4.dx
a4===$&&A.v()
s=18
return A.a(a0.aF(0,"lp_outbox",A.HX(l,j,b,e,h,a4.h6(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.M("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a2(new A.a6(a1,A.ap([a2],i)))
a6.a2(new A.a6("lp_conflicts",A.ap([a2],i)))
a4=o.d
a=A.bS(a4,g)
a.G(0,"id")
a6.bN(B.A,a,a2,g,a4,B.ag,a1)
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.nY.prototype={
aC(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dr(null,null,t.n6)
n.ay=A.dr(null,null,t.kf)}n.z=!0
s=3
return A.a(n.aQ(B.dU),$async$aC)
case 3:p=5
l=n.b
s=8
return A.a(l.fN(),$async$aC)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.v()
k.f=l.gi5().a
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
n.fr=new A.aZ(l,A.n(l).i("aZ<1>")).b2(n.gwt())
n.fx=n.b.nl().b2(n.gwr())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aL(),$async$aC)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.yA(B.ai,new A.yw(n))
s=14
return A.a(n.aQ(n.e4()),$async$aC)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.co("cycle")
s=17
return A.a(n.fe(),$async$aC)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aC,r)},
aL(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aL=A.c(function(a,b){if(a===1)return A.d(b,r)
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
return A.a(p.k4,$async$aL)
case 3:s=4
return A.a(p.dx,$async$aL)
case 4:s=5
return A.a(p.dy.a,$async$aL)
case 5:s=6
return A.a(p.p2,$async$aL)
case 6:o=p.fr
o=o==null?null:o.A()
n=t.H
s=7
return A.a(o instanceof A.w?o:A.bF(o,n),$async$aL)
case 7:o=p.fx
o=o==null?null:o.A()
s=8
return A.a(o instanceof A.w?o:A.bF(o,n),$async$aL)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.N
o.u(0,B.N)
s=12
return A.a(p.ax.q(),$async$aL)
case 12:s=10
break
case 11:p.y=B.N
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aL)
case 15:case 14:p.y=B.N
case 1:return A.e(q,r)}})
return A.f($async$aL,r)},
e4(){if(this.at)return B.br
if(this.Q)return B.bo
if(this.as)return B.aI
return B.bp},
aQ(a){return this.u1(a)},
u1(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.qD(),$async$aQ)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aQ,r)},
qD(){return this.p2=this.p2.W(new A.ym(this),t.H)},
hm(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$hm=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.i7(),$async$hm)
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
if((g.c&4)===0)g.u(0,new A.f2(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hm,r)},
wu(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.co("push")
s.tD(B.aj)},
ws(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.fy.I(s))return
r=a.c
if(r!=null&&a.b===B.P){q.co("fast:"+s)
q.dx=q.dx.W(new A.yu(q,r),t.H)
return}q.co("pull:"+s)
q.hM(B.aj,A.l([s],t.s))},
hr(a){return this.qN(a)},
qN(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hr=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hM(B.aj,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.ig(a),$async$hr)
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
break}if(!m)n.hM(B.aj,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hr,r)},
wC(){if(!this.z)return
this.co("cycle")
this.mx()},
hM(a,b){var s=this,r=s.go
if(r!=null)r.A()
if(b==null)s.k2=!0
else s.k3.D(0,b)
s.go=A.c4(a,new A.yt(s))},
tD(a){return this.hM(a,null)},
tC(a){var s=this.id
if(s!=null)s.A()
this.id=A.c4(B.I,new A.ys(this,a))},
jT(){this.as=!0
this.aQ(B.aI)
A.iX(this.d,t.H)},
eF(){var s=0,r=A.h(t.H),q,p=this,o
var $async$eF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.dx
o===$&&A.v()
s=3
return A.a(o.xX(),$async$eF)
case 3:s=4
return A.a(p.aQ(p.e4()),$async$eF)
case 4:p.co("cycle")
s=5
return A.a(p.fe(),$async$eF)
case 5:case 1:return A.e(q,r)}})
return A.f($async$eF,r)},
hb(a){return this.p_(a)},
p_(a){var s=0,r=A.h(t.H),q=this,p
var $async$hb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.A()
q.k1=A.c4(B.ax,new A.yv(q))
s=3
break
case 4:s=5
return A.a(q.aQ(B.bo),$async$hb)
case 5:case 3:return A.e(null,r)}})
return A.f($async$hb,r)},
bb(){var s=0,r=A.h(t.H),q=this
var $async$bb=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aQ(B.br),$async$bb)
case 2:return A.e(null,r)}})
return A.f($async$bb,r)},
b3(){var s=0,r=A.h(t.H),q,p=this
var $async$b3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aQ(p.e4()),$async$b3)
case 3:p.co("cycle")
s=4
return A.a(p.fe(),$async$b3)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b3,r)},
mz(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.A()}s=t.fD
r=q.k4.W(new A.yp(q,a),s)
q.k4=r.b6(new A.yq(),new A.yr(),s)
return r},
fe(){return this.mz(null)},
co(a){var s,r=this.p1
r.push(a)
s=r.length
if(s>1000)B.b.iU(r,0,s-1000)},
k5(a){this.mz(a).b6(new A.yn(),new A.yo(this),t.H)},
mx(){return this.k5(null)},
bi(a){return this.qz(a)},
qz(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$bi=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aQ(n.e4()),$async$bi)
case 5:q=B.O
s=1
break
case 4:b3=t.N
a4=t.S
m=A.t(b3,a4)
l=A.t(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
s=6
return A.a(n.aQ(B.dV),$async$bi)
case 6:b3=b8==null
if(b3){a4=n.a.fy
a5=A.n(a4).i("T<1>")
a6=A.O(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.v()
s=14
return A.a(a5.dK(h),$async$bi)
case 14:g=c0
J.b5(m,h,g.b)
if(g.f&&g.b>0)J.aO(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.B(b4)
if(a5 instanceof A.bK){n.jT()
s=9
break}else if(a5 instanceof A.b9){f=a5
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
return A.a(n.aQ(B.aI),$async$bi)
case 17:q=n.ok=new A.bg(m,B.ap,0,0,0,0,!0)
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
return A.a(b3.dY(e),$async$bi)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.Q(l,c.a)
if(a5==null)a5=0
J.b5(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.B(b5)
if(b3 instanceof A.b9){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aQ(B.dW),$async$bi)
case 25:a=B.a6
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.v()
s=33
return A.a(b3.fQ(),$async$bi)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.x.bc("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$bi)
case 36:a0=c0
if(J.d9(a0)&&typeof J.Q(J.bH(a0),"last_error")=="string"){b3=J.Q(J.bH(a0),"last_error")
b3.toString
n.ch=A.H(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.B(b6)
if(b3 instanceof A.bK)n.jT()
else if(b3 instanceof A.b9){a1=b3
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
return A.a(b3.bE(),$async$bi)
case 41:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b7=o.pop()
a3=A.B(b7)
k=!0
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.O
s=1
break}if(J.ag(i)!==0)n.tC(i)
a9=k||a.f
b0=new A.aI(A.m3(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.e4()
s=42
return A.a(n.aQ(a9&&b1===B.bp?B.bq:b1),$async$bi)
case 42:q=n.ok=new A.bg(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bi,r)}}
A.yw.prototype={
$1(a){return this.a.wC()},
$S:31}
A.ym.prototype={
$1(a){return this.a.hm()},
$S:48}
A.yu.prototype={
$1(a){return this.a.hr(this.b)},
$S:48}
A.yt.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jQ()}if(r||p.length===0)s.mx()
else s.k5(p)},
$S:0}
A.ys.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.k5(this.b)},
$S:0}
A.yv.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aQ(p.e4()),$async$$0)
case 2:p.co("cycle")
s=3
return A.a(p.fe(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.yp.prototype={
$1(a){return this.a.bi(this.b)},
$S:139}
A.yq.prototype={
$1(a){return B.O},
$S:140}
A.yr.prototype={
$1(a){return B.O},
$S:141}
A.yn.prototype={
$1(a){},
$S:142}
A.yo.prototype={
$2(a,b){var s=this.a
if(s.ch==null)s.ch=A.r(a)
s.aQ(B.bq)},
$S:6}
A.dg.prototype={
l(a){return"MapFailure: "+this.a},
$iI:1}
A.eV.prototype={}
A.CK.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.CL.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.jf.prototype={}
A.aS.prototype={}
A.bA.prototype={}
A.hj.prototype={
al(a){var s=A.bO(a.c,t.N,t.X)
s.D(0,a.d)
s.D(0,a.e)
return new A.aS(s,!1,null)}}
A.fZ.prototype={
al(a){var s=A.bO(a.c,t.N,t.X)
s.D(0,a.e)
s.D(0,a.d)
return new A.aS(s,!1,null)}}
A.hp.prototype={
al(a){return B.S.al(a)},
fX(a,b,c){var s,r,q,p,o,n=t.j,m=n.b(a)?a:B.k,l=n.b(b)?b:B.k,k=n.b(c)?c:B.k,j=J.Dx(m),i=J.Dx(l),h=J.Dx(k),g=i.fs(j),f=h.fs(j),e=j.fs(i),d=j.fs(h)
n=t.X
s=A.c0(e,n)
s.D(0,d)
r=j.nU(g).nU(f).fs(s)
q=[]
n=A.O(l,n)
B.b.D(n,k)
B.b.D(n,m)
s=n.length
p=0
for(;p<n.length;n.length===s||(0,A.p)(n),++p){o=n[p]
if(r.E(0,o)&&!B.b.E(q,o))q.push(o)}return q}}
A.eF.prototype={
al(a){return B.S.al(a)}}
A.ev.prototype={
al(a){return B.S.al(a)},
fX(a,b,c){var s,r,q,p=t.j,o=p.b(a)?a:B.k,n=p.b(b)?b:B.k,m=p.b(c)?c:B.k,l=[]
p=A.O(o,t.X)
B.b.D(p,n)
B.b.D(p,m)
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.p)(p),++r){q=p[r]
if(!B.b.bp(l,new A.qb(q)))l.push(q)}return l}}
A.qb.prototype={
$1(a){return B.p.V(a,this.a)},
$S:15}
A.fA.prototype={
al(a){return B.S.al(a)},
fX(a,b,c){var s,r,q,p=typeof a=="string"?a:"",o=typeof b=="string"?b:"",n=typeof c=="string"?c:"",m=A.l([],t.s),l=new A.qa(m)
for(s=p.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=o.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=n.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
return B.b.C(m,"\n")}}
A.qa.prototype={
$1(a){var s=B.a.cf(a)
if(s.length!==0&&!B.b.E(this.a,s))this.a.push(s)},
$S:144}
A.lX.prototype={
al(a){return this.a.$1(a)}}
A.mY.prototype={}
A.Bj.prototype={}
A.Bh.prototype={}
A.zB.prototype={}
A.vV.prototype={
$1(a){if(a==null)return new A.aS(A.Ok(this.a,this.b,this.c),!0,"Collection resolver declined resolution")
return new A.aS(a.a,a.b,a.c)},
$S:145}
A.vT.prototype={
$1(a){return a!=="archived"},
$S:13}
A.vU.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.vS(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:146}
A.vM.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vN.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vO.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vP.prototype={
$1(a){return a instanceof A.w?a:A.be(a,t.X)},
$S:147}
A.vQ.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.dz(s,s.r,A.n(s).c),r=this.b,q=J.J(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:148}
A.vR.prototype={
$1(a){if(a==null||a.b){this.a.a=!0
return this.b}return a.a.h(0,this.c)},
$S:149}
A.wb.prototype={
fu(a){return this.vN(a)},
vN(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fu=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.db.$0()
e=e.x
s=3
return A.a(e.xD("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$fu)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.E(o);l.k();)m.push(A.KH(l.gn()))
l=A.aP(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.p)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.l7(e,l),$async$fu)
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
return A.f($async$fu,r)},
nz(a){return this.a.a1(new A.wd(a),t.H)},
x_(a,b,c,d){return this.a.a1(new A.we(c,d,b,a),t.H)}}
A.wd.prototype={
$1(a){return this.ol(a)},
ol(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.we.prototype={
$1(a){return this.om(a)},
om(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.qp.prototype={}
A.jb.prototype={}
A.jJ.prototype={}
A.wg.prototype={
h6(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.d9(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
eM(a,b,c){return this.xM(a,b,c)},
xM(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$eM=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$eM)
case 3:p=e
o=J.J(p)
q=o.gF(p)?null:A.jA(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eM,r)},
bR(a,b,c){return this.xO(a,b,c)},
xO(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bR)
case 3:p=e
o=J.J(p)
q=o.gF(p)?null:A.hz(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
bw(a,b,c,d,e,f,g,h,i,j,k,l){return this.uE(a,b,c,d,e,f,g,h,i,j,k,l)},
uE(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bw=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a8)throw A.b(A.Fu("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ar
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.M
break A}if(B.D===a5){l=a6==null?B.v:B.a5
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.M
break B}if(B.D===a5){l=B.a5
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.D===a5){l=B.a5
break C}l=B.M
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.M
break D}if(B.D===a5){l=B.a5
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.X("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bw)
case 5:s=6
return A.a(a8.X("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bw)
case 6:s=7
return A.a(p.hR(a8,a2,a9),$async$bw)
case 7:s=8
return A.a(a8.X(a2,"id = ?",[a9]),$async$bw)
case 8:q=B.d8
s=1
break
case 4:k=p.a.db.$0()
j=a4?null:b2.w
if(j==null)j=p.h6()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.dq("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aP(l)
e=a4?null:b2.r
if(e!=null)f.D(0,e)
f.D(0,a7)
d=A.O(f,f.$ti.c)
B.b.aj(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a9(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.ip(B.a1)
e=B.b.C(A.a9(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aJ("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Ih(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bw)
case 12:s=10
break
case 11:s=13
return A.a(a8.aJ('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bw)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.D(f,B.cW)
if(o)B.b.D(f,B.cJ)
s=a3?14:16
break
case 14:a3=A.ip(B.a0)
l=B.b.C(A.a9(16,"?",!1,l),", ")
s=17
return A.a(a8.aJ("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.Iu(B.a9,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bw)
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
return A.a(a8.aJ(a3.charCodeAt(0)==0?a3:a3,a1),$async$bw)
case 18:case 15:q=new A.jb(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bw,r)},
hR(a,b,c){return this.uc(a,b,c)},
uc(a,b,c){var s=0,r=A.h(t.H)
var $async$hR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cL(a,b,c,!1),$async$hR)
case 2:return A.e(null,r)}})
return A.f($async$hR,r)},
fv(a,b){return this.vO(a,b)},
vO(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.x
f=new A.a7("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ae("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$fv)
case 3:o=d
f=J.J(o)
if(f.gF(o)){q=B.cY
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.k();)n.push(A.jA(f.gn()))
f=A.aP(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.l7(g,f),$async$fv)
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
return A.f($async$fv,r)},
lf(a){if(a.length===0)return A.be(null,t.H)
return this.a.a1(new A.wm(this,a),t.H)},
aP(a,b){return this.tP(a,b)},
tP(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aP=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.aw(a0).a
a4=a2.db.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aK("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 5:o=a9
n=J.J(o)
s=!(n.gS(o)&&!J.x(J.Q(n.gH(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aK(a,1,"id = ?",[a1]),$async$aP)
case 8:m=a9
n=J.J(m)
l=n.gS(m)?A.bU(a3,n.gH(m),a2.cx,a2.cy):null
s=9
return A.a(b.M(a,A.dD(a3,J.x(a5.h(0,"archived"),!0),a2.cx,a2.cy,a1,a5),"id = ?",[a1]),$async$aP)
case 9:a6.a2(new A.a6(a0,A.ap([a1],t.N)))
k=A.bS(l==null?B.j:l,a5)
k.G(0,"id")
a6.bN(B.A,k,a1,a5,l,B.ag,a0)
case 7:case 4:a=a3.a
s=10
return A.a(b.aK(a,1,"id = ?",[a1]),$async$aP)
case 10:j=a9
a5=J.J(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 13:s=14
return A.a(p.ds(b,a0,a1,a7.c,a4),$async$aP)
case 14:a6.a2(new A.a6(a0,A.ap([a1],t.N)))
s=1
break
case 12:n=a2.cx
a2=a2.cy
i=A.bU(a3,a5.gH(j),n,a2)
h=A.au(B.m.v(B.e.v(A.al(A.bn(a3,i)))).a)
a5=a7.b
g=A.au(B.m.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 18:s=19
return A.a(p.ds(b,a0,a1,a7.c,a4),$async$aP)
case 19:a6.a2(new A.a6(a0,A.ap([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aI(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bu(d,a5,f):A.t(a5,f)
s=23
return A.a(b.M(a,A.dD(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aP)
case 23:s=24
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 24:s=25
return A.a(p.ds(b,a0,a1,a7.c,a4),$async$aP)
case 25:a6.a2(new A.a6(a0,A.ap([a1],a5)))
k=A.bS(i,c)
k.G(0,"id")
a6.bN(B.A,k,a1,c,i,B.ag,a0)
s=21
break
case 22:g=A.au(B.m.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.M("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 26:s=27
return A.a(b.M("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 27:s=28
return A.a(b.M(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aP)
case 28:a6.a2(new A.a6(a0,A.ap([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aP,r)},
ds(a,b,c,d,e){return this.rr(a,b,c,d,e)},
rr(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$ds=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.M("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$ds)
case 2:s=3
return A.a(a.M(q.a.aw(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$ds)
case 3:return A.e(null,r)}})
return A.f($async$ds,r)},
xP(a,b,c,d,e){return this.a.a1(new A.wk(c,e,d,B.G,a,b),t.H)},
ny(a,b,c,d,e,f){return this.a.a1(new A.wj(this,c,f,b,a,d,e),t.H)},
fG(a,b,c,d,e){return this.ny(a,b,c,d,B.ar,e)},
nx(a,b,c){return this.a.a1(new A.wi(a,c,b),t.H)},
xX(){return this.a.a1(new A.wl(null),t.S)},
fl(a,b,c,d,e,f,g){return this.uB(a,b,c,d,e,f,g)},
uB(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$fl=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.M("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$fl)
case 2:p=A.t(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.M("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$fl)
case 3:return A.e(null,r)}})
return A.f($async$fl,r)}}
A.wm.prototype={
$1(a){return this.or(a)},
or(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aP(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.p)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wk.prototype={
$1(a){return this.op(a)},
op(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wj.prototype={
$1(a){return this.oo(a)},
oo(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aF(0,"lp_dead_letter",A.m(["at",q.a.a.db.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.M("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wi.prototype={
$1(a){return this.on(a)},
on(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wl.prototype={
$1(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.M("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:150}
A.ew.prototype={
a7(){return"ApplyResult."+this.b}}
A.nn.prototype={}
A.xc.prototype={
dK(a){return this.xu(a)},
xu(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dK=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iP(b4),$async$dK)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.J5().ez(n)
if(m==null)A.u(A.aX('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aN(k)
k=l[2]
k.toString
i=A.aN(k)
k=l[3]
k.toString
h=A.aN(k)
k=l[4]
k.toString
g=A.aN(k)
k=l[5]
k.toString
f=A.aN(k)
k=l[6]
k.toString
e=A.aN(k)
l=l[7]
l.toString
d=A.aN(l)
if(i<1||i>12||g>23||f>59||e>59)A.u(A.aX('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.DC(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.x_(k))A.u(A.aX('Bad timestamp "'+n+'"'))
o=A.OP(A.DC(j,i,h,g,f,e,d).ji(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.h1(B.c.bx(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.Q,k=k.fy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}s=6
return A.a(a0.nu(b4,a2,o,b),$async$dK)
case 6:a4=b6
a5=J.J(a4)
if(a5.gF(a4)){s=5
break}++a.ax
a6=p.rt(a4)
a7=k.h(0,b4)
if(a7==null)A.u(A.A(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.EZ(a7.a,a4),$async$dK)
case 8:s=7
return A.a(b0.b5(new b1.xk(b2,p,b3,b6,a6),l),$async$dK)
case 7:o=a6.c
a2=a6.a;++c
if(a5.gm(a4)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.nn(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dK,r)},
mM(a,b){var s=B.a.a3(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a3(a.a,b.b)<=0},
u2(a,b){var s=B.a.a3(a.c,b.c)
if(s!==0)return s>0
return B.a.a3(a.a,b.a)>0},
rt(a){var s,r,q,p=J.ax(a),o=p.gH(a)
for(p=p.ba(a,1),s=p.$ti,p=new A.as(p,p.gm(0),s.i("as<a0.E>")),s=s.i("a0.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.u2(q,o))o=q}return o},
ig(a){return this.w2(a)},
w2(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$ig=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.b5(new A.xe(o,p,a),t.P),$async$ig)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ig,r)},
dF(a,b){return this.w5(a,b)},
w5(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dF=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bP(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.fy,e=n.b,d=A.a1(j),c=d.c,d=d.i("cE<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cE(j,0,200,d)
a2.jd(j,0,200,c)
a3=a2.bT(0)
a4=a3.length
b&1&&A.K(j,18)
A.bl(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
s=12
return A.a(e.aU(l),$async$dF)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a8=A.B(b1)
if(a8 instanceof A.cf){J.aO(m,l)
s=6
break}else if(a8 instanceof A.bK)throw b1
else if(a8 instanceof A.b9){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aO(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.p)(a3),++a6
s=5
break
case 7:s=J.ag(m)!==0?13:14
break
case 13:s=15
return A.a(n.fI(b2,m),$async$dF)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.u(A.A(a1))
b0=a9.a
a2=A.l([],g)
for(a8=a5.length,a6=0;a6<a5.length;a5.length===a8||(0,A.p)(a5),++a6)a2.push(A.F_(b0,a5[a6]))
s=16
return A.a(i.b5(new A.xg(n,a2,b2,b0),h),$async$dF)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dF,r)},
ef(a,b,c,d){return this.t0(a,b,c,d)},
t0(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ef=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.t(c,t.o)
a=A.t(c,t.G)
o=p.a,n=o.cx,m=o.cy,o=o.fy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.U(a4,k,B.c.bx(i,0,j))
g=B.b.C(A.a9(h.length,"?",!1,c),", ")
j=[a2]
B.b.D(j,h)
a0=J
s=6
return A.a(a1.ae(u.m+g+")",j),$async$ef)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.H(e),A.hz(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.u(A.A(l))
a0=J
s=9
return A.a(a1.bQ(d.a.a,"id IN ("+g+")",h),$async$ef)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.H(e),A.bU(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a_(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ef,r)},
mW(a,b,c,d,e){return this.a8(a,b,A.F_(this.a.aw(b).a,c),null,!1,d,e)},
uG(a,b,c){return this.mW(a,b,c,null,!1)},
a8(a,b,c,d,e,f,g){return this.uF(a,b,c,d,e,f,g)},
mV(a,b,c){return this.a8(a,b,c,null,!1,null,!1)},
uF(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a8=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.aw(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bG(a4,a7,b2,a8,a9),$async$a8)
case 5:q=B.ab
s=1
break
case 4:a9=b3.b
a9.toString
j=A.bn(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bG(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a8)
case 8:q=B.ab
s=1
break
case 7:g=a8.a
f=$.q4()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bG(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a8)
case 11:q=B.ab
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.dx
g===$&&A.v()
s=15
return A.a(g.bR(a4,b2,a8.a),$async$a8)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aK(a6.a,1,"id = ?",[a8.a]),$async$a8)
case 19:c=b9
g=J.J(c)
d=g.gF(c)?null:A.bU(a7,g.gH(c),a5.cx,a5.cy)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dJ(a4,a8.a,a8.e,b2),$async$a8)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Jl(a4,a6.a,A.dD(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9)),$async$a8)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.dA(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 26:b1.a2(new A.a6(b2,A.ap([a8.a],t.N)))
b=A.bS(B.j,a9)
b.G(0,"id")
b1.bN(B.af,b,a8.a,a9,null,B.aw,b2)
q=B.aa
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
return A.a(n.cp(b1,b2,a8.a,a8.c,!1),$async$a8)
case 31:q=B.ac
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.M(a6.a,A.dD(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9),"id = ?",[a8.a]),$async$a8)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.dA(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 33:b1.a2(new A.a6(b2,A.ap([a8.a],t.N)))
b=A.bS(d,a9)
b.G(0,"id")
b1.bN(B.A,b,a8.a,a9,d,B.aw,b2)
q=B.aa
s=1
break
case 28:s=a===B.G||a===B.bs||a===B.a8?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.cp(b1,b2,a8.a,a8.c,!1),$async$a8)
case 38:q=B.ac
s=1
break
case 37:s=a===B.a8?39:40
break
case 39:s=41
return A.a(n.cp(b1,b2,a8.a,a8.c,!1),$async$a8)
case 41:q=B.ac
s=1
break
case 40:a0=A.bn(a7,d)
s=A.al(a0)===i?42:43
break
case 42:s=44
return A.a(a4.X("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a8)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.dA(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a8)
case 45:b1.a2(new A.a6(b2,A.ap([a8.a],t.N)))
q=B.aa
s=1
break
case 43:l=null
p=47
a9=m
l=A.io(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.B(b0)
s=a5 instanceof A.dg?50:52
break
case 50:k=a5
s=53
return A.a(n.bG(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a8)
case 53:q=B.ab
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
f=A.If(l,a0,new A.mY(a9.a,g.b,f.c),a8.a,j,b2)
s=54
return A.a(t.fr.b(f)?f:A.bF(f,t.r),$async$a8)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.fc(a4,b2,a8,a7,m,a0,l,a2),$async$a8)
case 57:s=58
return A.a(n.cp(b1,b2,a8.a,a8.c,!1),$async$a8)
case 58:a5=t.N
b1.a2(new A.a6(b2,A.ap([a8.a],a5)))
b1.a2(new A.a6("lp_conflicts",A.ap([a8.a],a5)))
q=B.bC
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.M(a6.a,A.dD(a7,J.x(a3.h(0,"archived"),!0),a5.cx,a5.cy,a9,a3),"id = ?",[a8.a]),$async$a8)
case 59:a5=a5.dx
a5===$&&A.v()
s=60
return A.a(a5.fl(a4,b2,a8.a,h,i,a8.c,A.al(a3)),$async$a8)
case 60:s=61
return A.a(n.u_(b1,b2,a8.a,a8.c),$async$a8)
case 61:b1.a2(new A.a6(b2,A.ap([a8.a],t.N)))
b=A.bS(d,a3)
b.G(0,"id")
b1.bN(B.A,b,a8.a,a3,d,B.ag,b2)
q=B.aa
s=1
break
case 35:q=B.ac
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a8,r)},
fc(a,b,c,d,e,f,g,h){return this.tn(a,b,c,d,e,f,g,h)},
tn(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$fc=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bn(d,A.fs(d,c))
k=A.bS(g,f)
j=A.O(k,A.n(k).c)
B.b.aj(j)
k=A.bS(g,l)
p=A.O(k,A.n(k).c)
B.b.aj(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.al(g)
n=t.N
m=t.X
s=2
return A.a(a.cw(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.al(f),"remote_json",A.al(l),"dirty_local",B.h.a9(j,null),"dirty_remote",B.h.a9(p,null),"detected_at",q.c.ay.$0()],n,m),B.U),$async$fc)
case 2:s=3
return A.a(a.M("lp_sync_row",A.m(["sync_state","conflict","base_json",A.al(l),"base_hash",A.au(B.m.v(B.e.v(A.al(A.bn(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$fc)
case 3:return A.e(null,r)}})
return A.f($async$fc,r)},
bG(a,b,c,d,e){return this.tg(a,b,c,d,e)},
tg(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bG=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a9(d.d,null)}catch(a1){o=t.N
e=B.h.a9(A.m(["raw",d.d.l(0)],o,o),null)}o=d.a
s=2
return A.a(a.X("lp_dead_letter","store = ? AND record_id = ?",[c,o]),$async$bG)
case 2:n=q.c
m=n.ay
l=t.N
k=t.X
s=3
return A.a(a.aF(0,"lp_dead_letter",A.m(["at",m.$0(),"kind","map_failure","store",c,"record_id",o,"error",a0,"payload_json",e],l,k)),$async$bG)
case 3:j=q.a.dx
j===$&&A.v()
s=4
return A.a(j.bR(a,c,o),$async$bG)
case 4:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=g>=8?253402300799e3:m.$0()+B.c.L(n.na(g).a,1000)
n=d.c
s=j?5:7
break
case 5:s=8
return A.a(a.aF(0,"lp_sync_row",A.m(["store",c,"record_id",o,"remote_updated",n,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bG)
case 8:s=6
break
case 7:s=9
return A.a(a.M("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",n,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,o]),$async$bG)
case 9:case 6:return A.e(null,r)}})
return A.f($async$bG,r)},
dA(a,b,c,d,e,f,g,h){return this.u9(a,b,c,d,e,f,g,!0)},
u9(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$dA=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aF(0,"lp_sync_row",o),$async$dA)
case 5:s=3
break
case 4:s=6
return A.a(a.M("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$dA)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dA,r)},
cp(a,b,c,d,e){return this.u0(a,b,c,d,e)},
u_(a,b,c,d){return this.cp(a,b,c,d,!0)},
u0(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cp=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.t(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.M("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$cp)
case 2:s=3
return A.a(p.M(q.a.aw(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$cp)
case 3:if(g>0)a.a2(new A.a6(b,A.ap([c],o)))
return A.e(null,r)}})
return A.f($async$cp,r)},
fI(a,b){return this.x0(a,b)},
x0(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bP(b,!0,t.N)
n=A.a1(o),m=n.c,n=n.i("cE<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cE(o,0,500,n)
i.jd(o,0,500,m)
h=i.bT(0)
g=h.length
l&1&&A.K(o,18)
A.bl(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.b5(new A.xi(p,a,h),j),$async$fI)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fI,r)}}
A.xk.prototype={
$0(){var s=this,r=s.b
return r.a.a1(new A.xj(s.a,r,s.c,s.d,s.e),t.P)},
$S:23}
A.xj.prototype={
$1(a){return this.ox(a)},
ox(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.aw(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.ax(p),n=o.gt(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.ef(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aP(t.N)
a2=o.gt(p),a0=a0.Q
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mM(i,c)){s=3
break}p=i.a
s=j.E(0,p)?5:7
break
case 5:s=8
return A.a(a.mV(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a8(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.mM(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eS(b,a1,e,f),$async$$1)
case 10:d.a=new A.jI(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.xe.prototype={
$0(){var s=this.b
return s.a.a1(new A.xd(this.a,s,this.c),t.P)},
$S:23}
A.xd.prototype={
$1(a){return this.ou(a)},
ou(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.dx
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bR(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.uG(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a3(o.c,k)<=0){s=1
break}s=7
return A.a(l.mW(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.xg.prototype={
$0(){var s=this,r=s.a
return r.a.a1(new A.xf(r,s.b,s.c,s.d),t.P)},
$S:23}
A.xf.prototype={
$1(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.ef(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aP(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.E(0,g)?6:8
break
case 6:s=9
return A.a(o.mV(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a8(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.u(0,g)
case 7:case 4:p.length===e||(0,A.p)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.xi.prototype={
$0(){var s=this.a
return s.a.a1(new A.xh(s,this.b,this.c),t.P)},
$S:23}
A.xh.prototype={
$1(a){return this.ow(a)},
ow(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.aw(g).a
e=h.aw(g).a.a
d=q.c
c=t.N
b=B.b.C(A.a9(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.t(c,t.G)
a1=J
s=2
return A.a(i.bQ(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.cx,h=h.cy
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.H(m),A.bU(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.D(o,d)
s=5
return A.a(i.M("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.M(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a2(new A.a6(g,A.mV(d,A.a1(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.p)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dV(null,null,c,h)
p.D(0,j)
p.j(0,"hidden",!0)
a2.bN(B.cg,B.dM,k,p,j,B.aw,g)}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b1.prototype={}
A.xl.prototype={
fQ(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.dx
f===$&&A.v()
s=3
return A.a(f.fv(25,p.c.ay.$0()),$async$fQ)
case 3:o=b
f=J.J(o)
if(f.gF(o)){q=B.a6
s=1
break}if(p.f){q=p.bl(o)
s=1
break}f=f.gt(o),n=B.a6
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dt(f.gn()),$async$fQ)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.b1(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
dt(a){return this.tb(a)},
tb(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dt=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.dx
l===$&&A.v()
m=m.x
s=3
return A.a(l.eM(m,a.a,a.b),$async$dt)
case 3:o=c
if(o==null){q=B.a6
s=1
break}s=4
return A.a(l.bR(m,o.a,o.b),$async$dt)
case 4:n=c
if(n==null){q=B.a6
s=1
break}if(o.e==null){q=p.t9(o,n)
s=1
break}q=p.jU(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dt,r)},
c0(a,b,c,d,e){return this.ri(a,b,c,d,e)},
rh(a,b,c,d){return this.c0(a,b,c,!1,d)},
rf(a,b,c){return this.c0(a,b,c,!1,!1)},
rg(a,b,c,d){return this.c0(a,b,c,d,!1)},
ri(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$c0=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$c0)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.B(i)
s=k instanceof A.bK?8:10
break
case 8:n.e.$0()
q=B.aq
s=1
break
s=9
break
case 10:s=k instanceof A.ce?11:13
break
case 11:k=n.a.dx
k===$&&A.v()
s=14
return A.a(k.nx("forbidden_push",a.b,a.a),$async$c0)
case 14:q=B.dv
s=1
break
s=12
break
case 13:s=k instanceof A.di?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.dn(a,"validation_push",m.a),$async$c0)
case 20:q=B.F
s=1
break
case 19:q=n.cR(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cf){q=n.cP(a,b,!e)
s=1
break}else if(k instanceof A.b9){l=k
q=n.cR(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c0,r)},
hG(a,b,c){return this.ta(a,b,c)},
t9(a,b){return this.hG(a,b,!1)},
ta(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$hG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.c0(a,b,new A.xn(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
jY(a,b,c){return this.tp(a,b,c)},
tp(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.rh(a,b,new A.xs(p,a,p.a.aw(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jY,r)},
jU(a,b){return this.tc(a,b)},
tc(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.rf(a,b,new A.xq(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jU,r)},
du(a,b,c,d){return this.td(a,b,c,d)},
mn(a,b,c){return this.du(a,b,c,!1)},
td(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$du=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.lx(a,c)
j=n.a.aw(a.a).a
i=a.d
s=A.au(B.m.v(B.e.v(A.al(A.bn(j,A.fs(j,c))))).a)===A.au(B.m.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.fa(a,c),$async$du)
case 5:q=B.a7
s=1
break
case 4:m=null
l=null
p=7
m=A.io(b.r)
l=A.io(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.B(f)
s=i instanceof A.dg?10:12
break
case 10:k=i
s=13
return A.a(n.dn(a,"corrupt_payload",k.a),$async$du)
case 13:q=B.F
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
return A.a(n.eb(a,b,c,j,m,l),$async$du)
case 14:g=a0
if(g==null){q=B.bj
s=1
break}q=n.c0(a,b,new A.xo(n,a,A.al(A.bn(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$du,r)},
bl(a){return this.t8(a)},
t8(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$bl=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.l([],t.k1)
c0=t.N
c1=A.t(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.t(c0,c0)
c0=J.E(d0),d=n.a,c=d.Q,b=n.b,a=d.fy,a0=d.x
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.dx
a2===$&&A.v()
s=5
return A.a(a2.eM(a0,a1.a,a1.b),$async$bl)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bR(a0,m.a,m.b),$async$bl)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.u(A.A('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
s=11
return A.a(b.aU(m.b),$async$bl)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.B(c8)
s=a1 instanceof A.cf?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.jK(m,l),$async$bl)
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
case 14:s=a1 instanceof A.bK?18:20
break
case 18:n.e.$0()
q=B.aq
s=1
break
s=19
break
case 20:s=a1 instanceof A.ce?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.nx("forbidden_push",m.b,a1),$async$bl)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.b9?25:27
break
case 25:i=a1
s=28
return A.a(n.cR(m,l,i),$async$bl)
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
a6=m.b
if(a1!==a6)A.u(A.eR('record id "'+a1+'" does not match requested "'+a6+'"'))
a7=new A.a7("")
A.cq(a7,A.bn(a4,A.fs(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.cb()
a6=A.d4(a8)
a6.u(0,a1)
a6.q()
a9=A.au(a8.a.a)
a6=B.e.v(m.d)
a8=new A.cb()
a1=A.d4(a8)
a1.u(0,a6)
a1.q()
s=a9===A.au(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.fa(m,k),$async$bl)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.io(l.r)
f=A.io(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.B(c9)
s=a1 instanceof A.dg?38:40
break
case 38:e=a1
a1=m.a
a6=m.b
s=41
return A.a(a2.fG(e.a,a6,"corrupt_payload",m.d,a1),$async$bl)
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
return A.a(n.eb(m,l,k,a4,g,f),$async$bl)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a6=m.b
b1=b0.a
a7=new A.a7("")
A.cq(a7,A.bn(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.he(a1,a2,a6,b2.charCodeAt(0)==0?b2:b2,b3,!0))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.he(m.w,m.a,m.b,m.d,m.e,!0))
s=3
break
case 4:s=b9.length!==0?43:44
break
case 43:b4=b.gi5().b
if(b4<=0)b4=25
if(25<b4)b4=25
b5=0
case 45:if(!(b6=b9.length,b5<b6)){s=47
break}b7=b5+b4
s=48
return A.a(n.bJ(B.b.U(b9,b5,b7<b6?b7:b6),c1,c7),$async$bl)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b1(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b1(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bl,r)},
eb(a,b,c,d,e,f){return this.ru(a,b,c,d,e,f)},
ru(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n
var $async$eb=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=d.e
n=A.If(e,f,new A.mY(n.a,n.b,n.c),a.b,A.bn(d,A.fs(d,c)),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bF(n,t.r),$async$eb)
case 3:o=h
s=o.b?4:5
break
case 4:s=6
return A.a(p.hH(a,b,c,o,e,f),$async$eb)
case 6:q=null
s=1
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eb,r)},
bJ(a,b,c){return this.tJ(a,b,c)},
tJ(c8,c9,d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$bJ=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:c5=0
c6=0
p=4
s=7
return A.a(n.b.bO(c8),$async$bJ)
case 7:m=d2
b6=t.N
l=A.t(b6,t.gq)
for(b7=c8.length,b8=0;b8<c8.length;c8.length===b7||(0,A.p)(c8),++b8){k=c8[b8]
J.b5(l,k.a,k)}j=l
i=A.aP(b6)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aO(i,h.a)){l=A.aX("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aX("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.E(m),b6=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
b7=J.Q(j,f.a)
b7.toString
e=b7
s=f.b&&f.c!=null?10:12
break
case 10:b7=n.jO(e,d0.h(0,e.a))
b9=B.e.v(e.d)
c0=new A.cb()
c1=A.d4(c0)
c1.u(0,b9)
c1.q()
c1=A.au(c0.a.a)
b9=f.e
if(b9==null)b9=e.d
J.aO(g,new A.jJ(b7,b9,f.c.c,c1,c9.h(0,e.a)));++c5
s=11
break
case 12:b7=b6.dx
b7===$&&A.v()
b9=e.b
c1=e.c
c2=f.d
if(c2==null)c2="batch_failed"
c3=f.d
if(c3==null)c3="batch_failed"
s=13
return A.a(b7.fG(c3,c1,c2,e.d,b9),$async$bJ)
case 13:++c6
case 11:s=8
break
case 9:l=b6.dx
l===$&&A.v()
s=14
return A.a(l.lf(g),$async$bJ)
case 14:l=c5
b6=c6
q=new A.b1(l,b6,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
c7=o.pop()
l=A.B(c7)
s=l instanceof A.db?15:17
break
case 15:q=n.ck(c8,c9,d0)
s=1
break
s=16
break
case 17:s=l instanceof A.e5?18:20
break
case 18:d=0
c=0
b=0
a=0
a0=0
a1=!1
l=c8.length,b6=n.a,b7=b6.x,b8=0
case 21:if(!(b8<c8.length)){s=23
break}a2=c8[b8]
b9=b6.dx
b9===$&&A.v()
s=24
return A.a(b9.bR(b7,a2.b,a2.c),$async$bJ)
case 24:a3=d2
if(a3==null){s=22
break}s=25
return A.a(n.dt(n.jN(a2)),$async$bJ)
case 25:a4=d2
d+=a4.a
c+=a4.b
b+=a4.c
a+=a4.d
a0+=a4.e
a1=a1||a4.f
case 22:c8.length===l||(0,A.p)(c8),++b8
s=21
break
case 23:q=new A.b1(d,c,b,a,a0,a1)
s=1
break
s=19
break
case 20:s=l instanceof A.ce?26:28
break
case 26:n.f=!1
a5=0
a6=0
a7=0
a8=!1
l=c8.length,b8=0
case 29:if(!(b8<c8.length)){s=31
break}a9=c8[b8]
s=32
return A.a(n.dt(n.jN(a9)),$async$bJ)
case 32:b0=d2
c5+=b0.a
c6+=b0.b
a5+=b0.c
a6+=b0.d
a7+=b0.e
a8=a8||b0.f
case 30:c8.length===l||(0,A.p)(c8),++b8
s=29
break
case 31:q=new A.b1(c5,c6,a5,a6,a7,a8)
s=1
break
s=27
break
case 28:s=l instanceof A.bK?33:35
break
case 33:n.e.$0()
q=B.aq
s=1
break
s=34
break
case 35:s=l instanceof A.b9?36:38
break
case 36:b1=l
b2=b1 instanceof A.cW?b1:new A.dt("network error")
l=c8.length,b6=n.a,b7=b6.x,b8=0
case 39:if(!(b8<c8.length)){s=41
break}b3=c8[b8]
b9=b6.dx
b9===$&&A.v()
s=42
return A.a(b9.bR(b7,b3.b,b3.c),$async$bJ)
case 42:b4=d2
s=b4!=null?43:44
break
case 43:s=45
return A.a(n.cR(n.jN(b3),b4,b2),$async$bJ)
case 45:b5=d2
c5+=b5.a
c6+=b5.b
case 44:case 40:c8.length===l||(0,A.p)(c8),++b8
s=39
break
case 41:q=new A.b1(c5,c6,0,0,0,!0)
s=1
break
s=37
break
case 38:throw c7
case 37:case 34:case 27:case 19:case 16:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bJ,r)},
ck(a,b,c){return this.pT(a,b,c)},
pT(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$ck=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.J(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gao(b5)
h=n.a.dx
h===$&&A.v()
b3=g.b
s=5
return A.a(h.fG("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$ck)
case 5:q=B.F
s=1
break
case 4:a0=B.c.L(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.U(b5,0,a0),b3.bh(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
s=13
return A.a(a3.bO(j),$async$ck)
case 13:i=b9
h=A.t(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.b5(h,g.a,g)}f=h
e=A.aP(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aO(e,d.a)){a6=A.aX("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aX("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.Q(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jO(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.eg(a7,a8,a9,b0==null?b.d:b0),$async$ck)
case 19:++m
s=17
break
case 18:a7=a1.dx
a7===$&&A.v()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.fG(b1,a9,b0,b.d,a8),$async$ck)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.B(b4)
s=a6 instanceof A.db?21:23
break
case 21:s=24
return A.a(n.ck(j,b6,b7),$async$ck)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.b9){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.b1(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ck,r)},
jO(a,b){var s=b==null?a.d:b
return new A.cy(a.b,a.c,B.v,s,a.e,A.au(B.m.v(B.e.v(a.d)).a),B.u,a.a,0,null)},
jN(a){return this.jO(a,null)},
eg(a,b,c,d){return this.tO(a,b,c,d)},
fa(a,b){return this.eg(a,b,null,null)},
tO(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$eg=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(a.a).a
n=A.fs(o,b)
m=d==null
l=m?A.al(A.bn(o,n)):d
p=p.dx
p===$&&A.v()
s=2
return A.a(p.lf(A.l([new A.jJ(a,l,b.c,A.au(B.m.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$eg)
case 2:return A.e(null,r)}})
return A.f($async$eg,r)},
lx(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.eR('record id "'+s+'" does not match requested "'+r+'"'))},
cR(a,b,c){return this.tx(a,b,c)},
tx(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.cW?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.dx
o===$&&A.v()
s=5
return A.a(o.ny(c.a,a.b,"max_attempts",a.d,B.ar,a.a),$async$cR)
case 5:q=B.F
s=1
break
case 4:o=p.c
n=o.nb(l,k)
m=p.a.dx
m===$&&A.v()
s=6
return A.a(m.xP(a.a,a.b,l,c.a,o.ay.$0()+B.c.L(n.a,1000)),$async$cR)
case 6:q=B.aq
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cR,r)},
dn(a,b,c){return this.qs(a,b,c)},
lR(a,b){return this.dn(a,b,null)},
qs(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dn=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.dx
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.fG(p,a.b,b,a.d,a.a),$async$dn)
case 2:return A.e(null,r)}})
return A.f($async$dn,r)},
cP(a,b,c){return this.r9(a,b,c)},
jK(a,b){return this.cP(a,b,!0)},
r9(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cP=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=n.a
h=a.a
case 3:switch(i.aw(h).a.e.d.a){case 0:s=5
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
m=A.io(b.r)
l=A.io(a.d)
p=2
s=11
break
case 9:p=8
g=o.pop()
i=A.B(g)
s=i instanceof A.dg?12:14
break
case 12:k=i
s=15
return A.a(n.dn(a,"corrupt_payload",k.a),$async$cP)
case 15:q=B.F
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
return A.a(n.hp(a,b,m,l),$async$cP)
case 16:q=B.bj
s=1
break
case 6:s=!c?17:18
break
case 17:s=19
return A.a(n.lR(a,"missing_target"),$async$cP)
case 19:q=B.F
s=1
break
case 18:q=n.hG(a,b,!0)
s=1
break
case 7:s=20
return A.a(i.by(h).iO(a.b),$async$cP)
case 20:q=B.du
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cP,r)},
hp(a,b,c,d){return this.qJ(a,b,c,d)},
qJ(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$hp=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bS(c,d)
n=A.O(o,A.n(o).c)
B.b.aj(n)
p=b.r
if(p==null)p=A.al(c)
s=2
return A.a(q.a.a1(new A.xm(q,a,p,d,n),t.P),$async$hp)
case 2:return A.e(null,r)}})
return A.f($async$hp,r)},
hH(a,b,c,d,e,f){return this.tm(a,b,c,d,e,f)},
tm(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hH=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.aw(a.a).a
m=A.bn(n,A.fs(n,c))
l=A.bS(e,f)
k=A.O(l,A.n(l).c)
B.b.aj(k)
l=A.bS(e,m)
p=A.O(l,A.n(l).c)
B.b.aj(p)
s=2
return A.a(o.a1(new A.xr(q,a,b,e,f,m,k,p,n,c),t.P),$async$hH)
case 2:return A.e(null,r)}})
return A.f($async$hH,r)}}
A.xn.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
s=7
return A.a(l.b.c7(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.fa(k,m),$async$$0)
case 8:q=B.a7
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.B(i) instanceof A.dL){q=n.a.jY(n.b,n.c,n.d)
s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:22}
A.xs.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
s=3
return A.a(n.b.aU(m.b),$async$$0)
case 3:l=b
s=l==null?4:5
break
case 4:s=6
return A.a(n.lR(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.F
s=1
break
case 5:o=p.c
s=A.au(B.m.v(B.e.v(A.al(A.bn(o,A.fs(o,l))))).a)===A.au(B.m.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.fa(m,l),$async$$0)
case 9:q=B.a7
s=1
break
case 8:q=n.du(m,p.d,l,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.xq.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
s=3
return A.a(n.b.aU(m.b),$async$$0)
case 3:l=b
if(l==null){q=n.jK(m,p.c)
s=1
break}n.lx(m,l)
if(l.c===m.e){o=p.c
q=n.rg(m,o,new A.xp(n,m,l,o),!0)
s=1
break}q=n.mn(m,p.c,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.xp.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
k=n.a
j=n.b
s=7
return A.a(k.b.bU(n.c.c,j.d,j.b),$async$$0)
case 7:m=b
s=8
return A.a(k.fa(j,m),$async$$0)
case 8:q=B.a7
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
s=A.B(h) instanceof A.e5?9:11
break
case 9:k=n.a
j=n.b
s=12
return A.a(k.b.aU(j.b),$async$$0)
case 12:l=b
if(l==null){q=k.jK(j,n.d)
s=1
break}q=k.mn(j,n.d,l)
s=1
break
s=10
break
case 11:throw h
case 10:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:22}
A.xo.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o
k=n
s=4
return A.a(o.b.bU(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(l.eg(k,b,p.e.a,m),$async$$0)
case 3:q=B.a7
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.xm.prototype={
$1(a){return this.oy(a)},
oy(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cw(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.al(q.d),"remote_json",A.al(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a9(q.e,null),"dirty_remote",B.h.a9(B.u,null),"detected_at",q.a.c.ay.$0()],k,j),B.U),$async$$1)
case 2:s=3
return A.a(p.M("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a2(new A.a6(n,A.ap([m],k)))
a.a2(new A.a6("lp_conflicts",A.ap([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.xr.prototype={
$1(a){return this.oz(a)},
oz(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=q.b
j=k.a
k=k.b
p=q.c.r
if(p==null)p=A.al(q.d)
o=q.f
n=t.N
m=t.X
s=2
return A.a(l.cw(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.al(q.e),"remote_json",A.al(o),"dirty_local",B.h.a9(q.r,null),"dirty_remote",B.h.a9(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.U),$async$$1)
case 2:s=3
return A.a(l.M("lp_sync_row",A.m(["sync_state","conflict","base_json",A.al(o),"base_hash",A.au(B.m.v(B.e.v(A.al(A.bn(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a2(new A.a6(j,A.ap([k],n)))
a.a2(new A.a6("lp_conflicts",A.ap([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ck.prototype={
a7(){return"SyncEngineState."+this.b}}
A.hx.prototype={}
A.yj.prototype={
glz(){return 36},
dY(a){return this.pr(a)},
pr(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dY=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.fy,g=new A.bN(g,g.r,g.e,A.n(g).i("bN<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iQ(m),$async$dY)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glz():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.an(c.a+1,n.glz())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bY(m,a),$async$dY)
case 13:a5.aO(a6,a9)
case 11:++j
s=10
break
case 12:if(A.oj(h)!=null)A.u(A.A(u.L))
b=h.b
b===$&&A.v()
s=14
return A.a(b.b7(new A.yk(c,n,m,a3),B.q,f),$async$dY)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.B(a4)
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
return A.f($async$dY,r)},
bY(a,b){return this.pq(a,b)},
pq(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bY=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.U("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aP(t.N)
m=B.c.h1(B.c.bx(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:s=5
return A.a(k.nv(a4,h,o,m),$async$bY)
case 5:g=a7
f=J.J(g)
if(f.gF(g)){s=4
break}for(e=f.gt(g);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=f.gt(g);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hF(a4,e),$async$bY)
case 6:c=a7
b=A.l([],l)
for(e=f.gt(g);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aT||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dF(a4,b),$async$bY)
case 9:i+=b.length
case 8:h=f.ga_(g).a
if(f.gm(g)<m){s=4
break}s=3
break
case 4:k=p.a.x
f=o+"%"
s=10
return A.a(k.ae("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,f]),$async$bY)
case 10:a1=a7
a2=A.l([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.H(a)
if(!n.E(0,a)){if(J.x(d.h(0,"access_state"),"hidden")||J.x(d.h(0,"access_state"),"purged"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fI(a4,a2),$async$bY)
case 13:case 12:s=14
return A.a(k.ae("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,f,p.c.ay.$0()]),$async$bY)
case 14:a3=a7
k=J.J(a3)
s=k.gS(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){f=k.gn().h(0,"record_id")
f.toString
l.push(A.H(f))}s=17
return A.a(j.dF(a4,l),$async$bY)
case 17:case 16:q=new A.hx(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bY,r)},
hF(a,b){return this.t3(a,b)},
t3(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.t(g,t.o)
o=p.a.x,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.U(b,n,B.c.bx(l,0,m))
j=B.b.C(A.a9(k.length,"?",!1,g),", ")
m=[a]
B.b.D(m,k)
e=J
s=6
return A.a(o.ae(u.m+j+")",m),$async$hF)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.H(h),A.hz(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)}}
A.yk.prototype={
$1(a){return this.oB(a)},
oB(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eT(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b9.prototype={
l(a){return A.d8(this).l(0)+": "+this.a},
$iI:1}
A.dt.prototype={}
A.cW.prototype={}
A.f_.prototype={}
A.bK.prototype={}
A.ce.prototype={}
A.cf.prototype={}
A.di.prototype={}
A.e2.prototype={}
A.dL.prototype={}
A.hy.prototype={}
A.db.prototype={}
A.e5.prototype={}
A.lt.prototype={}
A.hv.prototype={
gm(a){return this.b}}
A.cU.prototype={}
A.he.prototype={}
A.hf.prototype={}
A.ct.prototype={
a7(){return"BackendHintKind."+this.b}}
A.cs.prototype={}
A.CX.prototype={
$2(a,b){return B.a.iK(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:153}
A.oc.prototype={
gnM(){return 1}}
A.yl.prototype={
nb(a,b){var s,r
if(b!=null){s=this.rU(b)
if(A.a5(s))return A.bX(0,0,s<0?0:s)
if(s instanceof A.aI){r=s.a-this.ay.$0()
return r<=0?B.I:A.bX(0,r,0)}return B.ax}return A.I9(a,B.ax,B.ai,this.at)},
na(a){return this.nb(a,null)},
rU(a){var s=B.a.cf(a),r=A.hb(s,null)
if(r!=null)return r
return A.Li(s)}}
A.x9.prototype={
iL(a){return this.xl(a)},
xl(a){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$iL=A.c(function(b,a0){if(b===1){o.push(a0)
s=p}for(;;)switch(s){case 0:f=a.h(0,"backend")
if(!A.a5(f))throw A.b(A.G('Backend call "backend" must be an int.',null))
m=n.a.h(0,f)
if(m==null)throw A.b(A.G("No proxy sync backend #"+A.r(f)+" is running (it was stopped or never started).",null))
j=a.h(0,"call")
if(typeof j!="string")throw A.b(A.G('Backend call "call" must be a string.',null))
case 3:switch(j){case"hint":s=5
break
case"currentToken":s=6
break
default:s=7
break}break
case 5:i=A.Ov(a.h(0,"hint"),"backend hint")
h=m.e
if((h.c&4)===0)h.u(0,i)
q=B.dh
s=1
break
case 6:p=9
d=A
c=!0
s=12
return A.a(m.b.c8(),$async$iL)
case 12:i=d.m(["ok",c,"result",a0],t.N,t.X)
q=i
s=1
break
p=2
s=11
break
case 9:p=8
e=o.pop()
i=A.B(e)
if(i instanceof A.b9){l=i
q=A.m(["ok",!1,"error",A.OI(l)],t.N,t.X)
s=1
break}else{k=i
q=A.m(["ok",!1,"pageError",J.X(k)],t.N,t.X)
s=1
break}s=11
break
case 8:s=2
break
case 11:s=4
break
case 7:throw A.b(A.G('Unknown backend call "'+j+'".',null))
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iL,r)}}
A.hc.prototype={
nl(){var s=this.e
return new A.aZ(s,A.n(s).i("aZ<1>"))},
fN(){return this.aH("prepare",B.j,"prepare()")},
d8(a,b,c,d,e){return this.wQ(a,b,c,d,e)},
nv(a,b,c,d){return this.d8(a,b,null,c,d)},
nu(a,b,c,d){return this.d8(a,b,c,null,d)},
wQ(a,b,c,d,e){var s=0,r=A.h(t.kR),q,p=this,o,n,m
var $async$d8=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=A.t(t.N,t.X)
n.j(0,"store",a)
if(c!=null)n.j(0,"fromUpdated",c)
if(b!=null)n.j(0,"fromId",b)
if(d!=null)n.j(0,"idPrefix",d)
n.j(0,"perPage",e)
o='listChanges("'+a+'")'
m=A
s=3
return A.a(p.aH("listChanges",n,o),$async$d8)
case 3:q=m.OC(g,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d8,r)},
aU(a){return this.oP(a)},
oP(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o='getRecord("'+a+'")'
s=3
return A.a(p.aH("getRecord",A.m(["id",a],t.N,t.X),o),$async$aU)
case 3:n=c
q=n==null?null:A.es(n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aU,r)},
c7(a,b,c){return this.v1(a,b,c)},
v1(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$c7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='createRecord("'+b+'")'
n=A
s=3
return A.a(p.aH("createRecord",A.m(["id",b,"store",c,"dataJson",a],t.N,t.X),o),$async$c7)
case 3:q=n.es(e,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c7,r)},
bU(a,b,c){return this.yg(a,b,c)},
yg(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n,m
var $async$bU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=A.t(t.N,t.X)
n.j(0,"id",c)
n.j(0,"dataJson",b)
n.j(0,"baseUpdated",a)
o='updateRecord("'+c+'")'
m=A
s=3
return A.a(p.aH("updateRecord",n,o),$async$bU)
case 3:q=m.es(e,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)},
eR(a,b){var s=null,r=null
return this.yi(a,b)},
yi(a,b){var s=0,r=A.h(t.h),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$eR=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:i=null
h=null
g=null
p=4
m=A.t(t.N,t.X)
J.b5(m,"id",a)
if(i!=null)J.b5(m,"dataJson",i)
if(g!=null)J.b5(m,"session",g)
if(h!=null)J.b5(m,"keepNames",h)
J.b5(m,"removeNames",b)
k='updateRecordFiles("'+a+'")'
s=7
return A.a(n.aH("updateRecordFiles",m,k),$async$eR)
case 7:l=d
k=A.es(l,k)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
s=8
return A.a(n.eY(g),$async$eR)
case 8:throw f
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eR,r)},
cg(a,b){var s=null,r=null,q=null
return this.yk(a,b)},
yk(a6,a7){var s=0,r=A.h(t.h),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$cg=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a0=null
a1=null
a2=null
a3=null
a4=a7.a
s=a4!==0?3:4
break
case 3:g=A.l([],t.gR)
a4=new A.aK(a7,A.n(a7).i("aK<1,2>")).gt(0),f=t.lj,e=t.bs
case 5:if(!a4.k()){s=6
break}d=a4.d
c=d.b
s=7
return A.a(c.c.$0(),$async$cg)
case 7:l=a9
b=A.l([],e)
k=new A.oQ(b)
b=new A.c5(l,f)
p=8
case 11:s=13
return A.a(b.k(),$async$cg)
case 13:if(!a9){s=12
break}j=b.gn()
J.aO(k,j)
s=11
break
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
s=14
return A.a(b.A(),$async$cg)
case 14:s=n.pop()
break
case 10:g.push(new A.pH(d.a,c.a,k.iV()))
s=5
break
case 6:s=15
return A.a(m.fj(g),$async$cg)
case 15:a3=a9
case 4:p=17
i=A.t(t.N,t.X)
J.b5(i,"id",a6)
if(a0!=null)J.b5(i,"dataJson",a0)
if(a3!=null)J.b5(i,"session",a3)
if(a1!=null)J.b5(i,"keepNames",a1)
if(a2!=null)J.b5(i,"removeNames",a2)
a4='updateRecordFilesStream("'+a6+'")'
s=20
return A.a(m.aH("updateRecordFilesStream",i,a4),$async$cg)
case 20:h=a9
a4=A.es(h,a4)
q=a4
s=1
break
p=2
s=19
break
case 17:p=16
a5=o.pop()
s=21
return A.a(m.eY(a3),$async$cg)
case 21:throw a5
s=19
break
case 16:s=2
break
case 19:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cg,r)},
bM(a,b,c){return this.vL(a,b,c)},
vL(a,b,c){var s=0,r=A.h(t.v),q,p=this,o,n,m,l,k,j
var $async$bM=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:m=A.t(t.N,t.X)
m.j(0,"recordId",b)
m.j(0,"filename",a)
o='downloadFile("'+b+'", "'+a
n=o+'")'
l=b
k=A
j=A
s=3
return A.a(p.aH("downloadBegin",m,n),$async$bM)
case 3:q=p.e3(l,k.HI(j.EG(e,n).h(0,"sessionId"),o+'").sessionId'))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bM,r)},
e3(a,b){return this.qB(a,b)},
qB(a,b){var $async$e3=A.c(function(c,d){switch(c){case 2:n=q
s=n.pop()
break
case 1:o.push(d)
s=p}for(;;)switch(s){case 0:p=3
j='downloadFile("'+a,i=j+'") chunk bytes',h=t.N,g=t.X,j+='") chunk'
case 6:s=8
return A.aR(m.aH("downloadChunk",A.m(["sessionId",b],h,g),j),$async$e3,r)
case 8:l=d
k=A.EG(l,j)
if(A.Mx(J.Q(k,"done"),'downloadFile chunk "done"')){s=7
break}s=9
q=[1,4]
return A.aR(A.d3(A.I4(J.Q(k,"bytes"),i)),$async$e3,r)
case 9:s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
p=11
s=14
return A.aR(m.aH("downloadEnd",A.m(["sessionId",b],t.N,t.X),'downloadFile("'+a+'") end'),$async$e3,r)
case 14:p=2
s=13
break
case 11:p=10
e=o.pop()
s=13
break
case 10:s=2
break
case 13:s=n.pop()
break
case 5:case 1:return A.aR(null,0,r)
case 2:return A.aR(o.at(-1),1,r)}})
var s=0,r=A.Co($async$e3,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e
return A.Cz(r)},
bO(a){return this.xx(a)},
xx(a){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i
var $async$bO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:j=A.l([],t.d)
for(o=J.E(a),n=t.N,m=t.X;o.k();){l=o.gn()
k=A.t(n,m)
k.j(0,"opId",l.a)
k.j(0,"store",l.b)
k.j(0,"id",l.c)
k.j(0,"dataJson",l.d)
l=l.e
if(l!=null)k.j(0,"baseUpdated",l)
k.j(0,"upsert",!0)
j.push(k)}i=A
s=3
return A.a(p.aH("pushBatch",A.m(["ops",j],n,m),"pushBatch"),$async$bO)
case 3:q=i.OB(c,"pushBatch")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bO,r)},
q(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this
var $async$q=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.d.a.G(0,n.a)
q=2
s=5
return A.a(n.aH("dispose",B.j,"dispose()"),$async$q)
case 5:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=6
return A.a(n.e.q(),$async$q)
case 6:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$q,r)},
fj(a){return this.u8(a)},
u8(a){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$fj=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:d="u"+p.a+"-"+p.f++
c=A.l([],t.ic)
for(o=a.length,n=t.N,m=t.K,l=0;l<a.length;a.length===o||(0,A.p)(a),++l){k=a[l]
c.push(A.m(["field",k.a,"filename",k.b,"length",k.c.length],n,m))}o=t.X
s=3
return A.a(p.aH("uploadBegin",A.m(["sessionId",d,"files",c],n,o),"uploadBegin"),$async$fj)
case 3:c=a.length,l=0
case 4:if(!(l<a.length)){s=6
break}k=a[l]
m=k.c,j=m.length,i=k.a,h='uploadChunk("'+i+'")',g=0
case 7:if(!(g<j)){s=9
break}f=g+262144
e=new Uint8Array(m.subarray(g,A.d5(g,f>j?j:f,j)))
s=10
return A.a(p.aH("uploadChunk",A.m(["sessionId",d,"field",i,"bytes",B.Q.gdE().v(e)],n,o),h),$async$fj)
case 10:case 8:g=f
s=7
break
case 9:case 5:a.length===c||(0,A.p)(a),++l
s=4
break
case 6:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
eY(a){return this.pF(a)},
pF(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l
var $async$eY=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(a==null){s=1
break}p=4
s=7
return A.a(n.aH("uploadAbort",A.m(["sessionId",a],t.N,t.X),"uploadAbort"),$async$eY)
case 7:p=2
s=6
break
case 4:p=3
l=o.pop()
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eY,r)},
aH(a,b,c){return this.pM(a,b,c)},
pM(a,b,c){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$aH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=A.t(t.N,t.X)
o.j(0,"method",a)
o.j(0,"backend",p.a)
o.D(0,b)
n=A
s=3
return A.a(p.c.cz("syncBackend",o),$async$aH)
case 3:q=n.ER(e,A.Iv(),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aH,r)},
$inX:1,
gi5(){return this.r},
glb(){return this.w}}
A.pH.prototype={}
A.xb.prototype={
cZ(a,b,c,d){return this.uW(a,b,c,d)},
uW(a,b,c,d){var s=0,r=A.h(t.o8),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cZ=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:m=p.b
l=m.b++
k=p.a
f=A
e=A
s=3
return A.a(k.cz("syncBackend",A.m(["method","create","backend",l,"baseUrl",a.l(0),"identity",b,"stores",c],t.N,t.X)),$async$cZ)
case 3:j=f.EG(e.ER(a1,A.Iv(),"sync backend create()"),"sync backend create()")
i=A.kY(j.h(0,"capabilities"),"create().capabilities")
h=i.I("batchEnabled")&&i.h(0,"batchEnabled")!=null&&A.Hu(i.h(0,"batchEnabled"),"create().capabilities","batchEnabled")
g=i.I("maxBatch")&&i.h(0,"maxBatch")!=null?A.Hv(i.h(0,"maxBatch"),"create().capabilities","maxBatch"):25
if(i.I("maxPage")&&i.h(0,"maxPage")!=null)A.Hv(i.h(0,"maxPage"),"create().capabilities","maxPage")
o=A.HI(j.h(0,"scopeId"),"create().scopeId")
n=new A.hc(l,d,k,m,A.dr(null,null,t.hw),new A.lt(h,g),o)
m.a.j(0,l,n)
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
d_(a){return this.vG(a)},
vG(a){var s=0,r=A.h(t.H)
var $async$d_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!(a instanceof A.hc))throw A.b(A.G("The proxy sync factory can only dispose backends it created.",null))
s=2
return A.a(a.q(),$async$d_)
case 2:return A.e(null,r)}})
return A.f($async$d_,r)}}
A.Ct.prototype={
$2(a,b){return new A.V(J.X(a),b,t.B)},
$S:32}
A.jI.prototype={}
A.k0.prototype={}
A.yy.prototype={
iP(a){return this.xL(a)},
xL(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eK("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iP)
case 3:m=c
l=J.J(m)
if(l.gF(m)){q=null
s=1
break}o=A.a3(J.Q(l.gH(m),"cursor_updated"))
n=A.a3(J.Q(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jI(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iP,r)},
eS(a,b,c,d){return this.yB(a,b,c,d)},
yB(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eS)
case 5:s=m.bq(f)?2:4
break
case 2:s=6
return A.a(a.aF(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eS)
case 6:s=3
break
case 4:s=7
return A.a(a.M("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eS)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eS,r)},
iQ(a){return this.xN(a)},
xN(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eK("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iQ)
case 3:n=c
m=J.J(n)
if(m.gF(n)){q=B.dS
s=1
break}o=A.b_(J.Q(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.k0(o,A.b_(J.Q(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iQ,r)},
eT(a,b,c,d){return this.yF(a,b,c,d)},
yF(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eT)
case 5:s=m.bq(f)?2:4
break
case 2:s=6
return A.a(a.aF(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eT)
case 6:s=3
break
case 4:s=7
return A.a(a.M("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eT)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eT,r)},
i7(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$i7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.bc("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$i7)
case 3:l=b
k=J.J(l)
j=k.gF(l)?B.j:k.gH(l)
k=A.b_(j.h(0,"pending"))
if(k==null)k=0
o=A.b_(j.h(0,"conflicts"))
if(o==null)o=0
n=A.b_(j.h(0,"hidden"))
if(n==null)n=0
m=A.b_(j.h(0,"blocked"))
q=new A.pm([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)}}
A.cY.prototype={
a7(){return"SyncState."+this.b}}
A.fy.prototype={
a7(){return"AccessState."+this.b}}
A.h9.prototype={
a7(){return"OutboxKind."+this.b}}
A.jz.prototype={
a7(){return"OpQueueKind."+this.b}}
A.Di.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cX.prototype={}
A.yx.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.H(i)
i=j.h(0,"record_id")
i.toString
A.H(i)
i=A.a3(j.h(0,"remote_updated"))
s=A.b_(j.h(0,"last_seen_at"))
r=A.a3(j.h(0,"base_updated"))
A.a3(j.h(0,"base_hash"))
q=A.a3(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fO(B.cO,A.H(p))
A.I5(j.h(0,"dirty_fields"))
o=A.b_(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fO(B.cN,A.H(n))
A.a3(j.h(0,"op_id"))
m=A.b_(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.b_(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a3(j.h(0,"last_error"))
A.b_(j.h(0,"schema_ver"))
return new A.cX(i,s,r,q,p,o,n,m,l,k)},
$S:154}
A.cy.prototype={}
A.wh.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.H(i)
s=j.h(0,"record_id")
s.toString
A.H(s)
r=j.h(0,"kind")
r.toString
r=A.fO(B.cX,A.H(r))
q=j.h(0,"payload_json")
q.toString
A.H(q)
p=A.a3(j.h(0,"base_updated"))
o=A.a3(j.h(0,"base_hash"))
if(o==null)o=""
n=A.I5(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.H(m)
l=j.h(0,"created_at")
l.toString
A.ak(l)
k=j.h(0,"updated_at")
k.toString
A.ak(k)
return new A.cy(i,s,r,q,p,o,n,m,l,A.a3(j.h(0,"depends_on_op")))},
$S:155}
A.eW.prototype={}
A.wc.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ak(l)
l=m.h(0,"op_id")
l.toString
A.H(l)
s=m.h(0,"store")
s.toString
A.H(s)
r=m.h(0,"record_id")
r.toString
A.H(r)
q=m.h(0,"kind")
q.toString
q=A.fO(B.cS,A.H(q))
p=m.h(0,"payload_json")
p.toString
A.H(p)
o=m.h(0,"state")
o.toString
A.H(o)
o=A.b_(m.h(0,"attempt_count"))
if(o==null)o=0
A.b_(m.h(0,"next_retry_at"))
A.a3(m.h(0,"last_error"))
n=A.a3(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ak(m)
return new A.eW(l,s,r,q,p,o,n)},
$S:156}
A.Dg.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.H(s)},
$S:55}
A.Dh.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.H(s)},
$S:55}
A.CO.prototype={
$1(a){return a.b},
$S:158}
A.CP.prototype={
$1(a){return a.b===this.a},
$S:159}
A.bQ.prototype={
a2(a){this.c.push(a)
this.a.Q.r+=a.b.a},
ux(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bN(a,b,c,d,e,f,g){var s
if(this.a.a$.b.d==null)return
if(b==null){s=e==null?d:e
s=J.Jt((s==null?B.j:s).gJ(),new A.yK()).cG(0)}else s=b
this.ux(new A.e4(g,c,f,a,e,d,s))},
kw(a,b,c,d,e,f){return this.bN(a,null,b,c,d,e,f)},
by(a){var s=this.a
return new A.fF(s,s.aw(a),new A.iP(this.b),this)},
a1(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.A("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cX(o,a,b)},
cX(a,b,c){return this.uj(a,b,c,c)},
uj(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cX=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cX)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.Q
k=e.r
p=5
d=A.Ee(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.q0(new A.yJ(a3,j,a4),null,A.m([$.lc(),j],f,f),a4.i("y<0>")),$async$cX)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cX)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cX)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cX)
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
if(a>m)B.b.iU(h,m,a)
a=g.length
if(a>l)B.b.iU(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cX,r)}}
A.yK.prototype={
$1(a){return a!=="id"},
$S:13}
A.yJ.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.Bo.prototype={}
A.m7.prototype={
a7(){return"DurabilityClass."+this.b}}
A.yB.prototype={
b7(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.C,t._)
r.c.push(new A.hO(a,new A.aG(s,t.jk)))
return s.W(new A.yI(c),c)}return this.tU(a,b,c)},
tU(a,b,c){var s,r,q,p=this
if(p.a.ax.a>0){s=p.c
if(s!=null)s.kC()}s=A.l([],t.i4)
r=new A.oU(p,b,s)
p.c=r
r.xY()
q=new A.w($.C,t._)
s.push(new A.hO(a,new A.aG(q,t.jk)))
return q.W(new A.yE(c),c)},
xJ(a,b){var s,r=this.a
if(r.ax.a>0){s=this.c
if(s!=null)s.kC()}return r.e.b5(new A.yH(this,a,b),b)},
rA(){if(++this.d<64)return
this.d=0
A.c4(B.I,new A.yD(this))}}
A.yI.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yE.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yH.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a1(new A.yG(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.yG.prototype={
$1(a){return this.oC(a,this.c)},
oC(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.Ee(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.q0(new A.yF(p.b,o,n),null,A.m([$.lc(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(rH)")}}
A.yF.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.yD.prototype={
$0(){var s=this.a.a.a.e
s===$&&A.v()
s.iZ().kl(new A.yC())},
$S:0}
A.yC.prototype={
$1(a){},
$S:21}
A.oU.prototype={
xY(){var s,r,q=this,p=new A.aG(new A.w($.C,t.D),t.Q)
q.e=p
s=q.a.a
s.e.b5(new A.Ac(q,p),t.H)
r=s.ax
s=q.gwb()
if(r.a>0)A.c4(r,s)
else A.c4(B.I,s)},
kC(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.ak()},
d3(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$d3=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jY()
$.la()
b3.aC()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.b0&&b4.w!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:b5=b4.e
b5===$&&A.v()
s=5
return A.a(b5.nT("PRAGMA synchronous=FULL",null),$async$d3)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a1(new A.Ab(m,i,h,l,g),t.P),$async$d3)
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
if((b8.a.a&30)!==0)A.u(A.A("Future already completed"))
b8.ap(A.fl(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.u(A.A("Future already completed"))
b8.aN(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.fy,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.wI(a0.b)
b6.kv(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a1=f[b7]
b6.vQ(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.B(c2)
a3=A.af(c2)
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
if((b6.a.a&30)!==0)A.u(A.A("Future already completed"))
b6.ap(A.fl(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.u(A.A("Future already completed"))
b6.ap(A.fl(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
f=b4.e
f===$&&A.v()
s=17
return A.a(f.nT("PRAGMA synchronous=NORMAL",null),$async$d3)
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
a4=k.gvP();++f.a
f.d+=a4
b1.rA()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.p)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.u(A.A("Future already completed"))
a4.ap(A.fl(new A.bv("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d3,r)}}
A.Ac.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.d3(),$async$$0)
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
A.Ab.prototype={
$1(a){return this.oD(a)},
oD(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.Ee(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.q0(new A.A9(a,a0),null,A.m([$.lc(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.fh([B.b.gao(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.B(a1)
l=A.af(a1)
o.e.push(new A.fh([B.b.gao(a.c),null,m,l]))
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
return A.a(A.q0(new A.Aa(a0,k),null,A.m([$.lc(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.fh([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.B(a2)
h=A.af(a2)
e.push(new A.fh([k,null,i,h]))
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
$S:46}
A.A9.prototype={
$0(){return B.b.gao(this.a.c).a.$1(this.b)},
$S:56}
A.Aa.prototype={
$0(){return this.a.a1(new A.A8(this.b),t.z)},
$S:56}
A.A8.prototype={
$1(a){return this.a.a.$1(a)},
$S:161}
A.hO.prototype={}
A.nr.prototype={
lg(a){return a.a===this.x.b.a},
fA(){var s=this.x
return s.ex(s.w==null&&!s.x?50:null).W(new A.xH(),t.J)},
n4(a){return A.Oi(a,new A.xG(this),this.x.r.length!==0)},
nB(a){var s=this.y
return s==null?null:s.u(0,a)},
kQ(a,b){var s=this.y
return s==null?null:s.bo(a,b)},
ja(){var s=this.y=A.nS(this.gkt(),new A.xI(this),null,null,!1,t.J)
return new A.bi(s,A.n(s).i("bi<1>"))},
ft(){this.lm()
var s=this.y
if(s!=null)s.q()}}
A.xH.prototype={
$1(a){return a.a},
$S:162}
A.xG.prototype={
$1(a){return this.a.a.Q.Q+=a},
$S:9}
A.xI.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.eo(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.nb.prototype={
lg(a){var s
if(a.a!==this.x.a.a)return!1
s=a.b
if(s.a!==0&&!s.E(0,this.y))return!1
return!0},
fA(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$fA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.v()
o=p.x.a
s=3
return A.a(l.gbA().b.aK(o.a,1,"id = ?",[p.y]),$async$fA)
case 3:n=b
l=J.J(n)
if(l.gF(n)){q=null
s=1
break}q=A.bU(o,l.gH(n),m.cx,m.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
n4(a){return a==null?"<null>":A.au(B.m.v(B.e.v(A.al(a))).a)},
nB(a){var s=this.z
return s==null?null:s.u(0,a)},
kQ(a,b){var s=this.z
return s==null?null:s.bo(a,b)},
ja(){var s=this.z=A.nS(this.gkt(),new A.wa(this),null,null,!1,t.b)
return new A.bi(s,A.n(s).i("bi<1>"))},
ft(){this.lm()
var s=this.z
if(s!=null)s.q()}}
A.wa.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.eo(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fE.prototype={
kQ(a,b){},
aC(){var s=this.a.a$.a
this.c=new A.aZ(s,A.n(s).i("aZ<1>")).b2(this.grC())},
rD(a){var s,r=this
if(!r.lg(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.A()
r.d=A.c4(r.b,r.gmQ())},
eo(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$eo=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(m.r){s=1
break}m.e=!0
h=m.a.Q;++h.y
p=4
s=7
return A.a(m.fA(),$async$eo)
case 7:l=b
if(m.r){n=[1]
s=5
break}k=m.n4(l)
if(!J.x(k,m.w)){m.w=k;++h.z
m.nB(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.B(f)
i=A.af(f)
if(!m.r)m.kQ(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.A()
m.d=A.c4(m.b,m.gmQ())}s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eo,r)},
ft(){var s,r=this
r.r=!0
s=r.d
if(s!=null)s.A()
r.f=!1
s=r.c
if(s!=null)s.A()}}
A.zw.prototype={
b5(a,b){var s,r=this;++r.b
r.mg()
s=new A.w($.C,b.i("w<0>"))
r.a=r.a.W(new A.zx(r,new A.aG(s,b.i("aG<0>")),a),t.H)
return s},
mg(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.zx.prototype={
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
m=A.B(i)
l=A.af(i)
n.b.bz(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.mg()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:48}
A.hJ.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.za.prototype={
$2(a,b){return new A.V(J.X(a),b,t.B)},
$S:32}
A.oz.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.z7.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.z5.prototype={
f7(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$f7=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.iq()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a4(n.getDirectory(),l),$async$f7)
case 7:m=b
s=8
return A.a(A.a4(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$f7)
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
return A.f($async$f7,r)},
hA(){var s=0,r=A.h(t.y),q,p=this,o
var $async$hA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.w){q=!1
s=1
break}o=p.r
s=o==null?3:5
break
case 3:s=6
return A.a(p.f7(),$async$hA)
case 6:b=p.r=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
bj(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bj=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.x
if(h!=null){q=h
s=1
break}s=3
return A.a(n.hA(),$async$bj)
case 3:if(!b){q=null
s=1
break}p=5
m=A.iq()
if(m==null){q=null
s=1
break}j=t.m
s=8
return A.a(A.a4(m.getDirectory(),j),$async$bj)
case 8:l=b
f=A
s=9
return A.a(A.a4(l.getDirectoryHandle("localpocket_blobs",{create:!0}),j),$async$bj)
case 9:k=new f.ph(b)
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
return A.f($async$bj,r)},
gcA(){var s=0,r=A.h(t.y),q,p=this
var $async$gcA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bj(),$async$gcA)
case 3:q=b!=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcA,r)},
aG(a,b,c){return this.xz(a,b,c)},
fR(a){return this.aG(a,null,null)},
xz(a,a0,a1){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b
var $async$aG=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:f=new A.oQ(A.l([],t.bs))
s=3
return A.a(A.l6(a,a0,a1,null,268435456,new A.z6(f)),$async$aG)
case 3:e=a3
d=f.iV()
s=4
return A.a(m.bj(),$async$aG)
case 4:c=a3
s=c!=null?5:7
break
case 5:l="tmp_"+e.a
p=8
s=11
return A.a(c.az(l,d),$async$aG)
case 11:s=12
return A.a(c.az(e.a,d),$async$aG)
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
p=14
s=17
return A.a(c.G(0,l),$async$aG)
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
if(h>134217728)A.u(A.iy(A.A("volatile blob memory cap exceeded: would reach "+h+" of 134217728 bytes"),j))
m.d.j(0,j,i)
m.e+=g
case 6:q=e.a
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aG,r)},
bC(a){return this.xf(a)},
xf(a){var s=0,r=A.h(t.v),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$bC=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.lC(a)
j=n.d
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.E9(j,t.L)
s=1
break}s=3
return A.a(n.bj(),$async$bC)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.eL(a),$async$bC)
case 10:l=c
j=A.E9(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.B(h)
if(!(k instanceof A.ex))throw A.b(A.iy(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.A("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bC,r)},
bL(a){return this.vc(a)},
vc(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$bL=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.lC(a)
l=o.d.G(0,a)
if(l!=null)o.e=o.e-l.length
s=2
return A.a(o.bj(),$async$bL)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.G(0,a),$async$bL)
case 9:q=1
s=8
break
case 6:q=5
j=p.pop()
m=A.B(j)
if(!(m instanceof A.ex))throw A.b(A.iy(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$bL,r)},
aY(a){return this.w_(a)},
w_(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$aY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lC(a)
if(p.d.I(a)){q=!0
s=1
break}s=3
return A.a(p.bj(),$async$aY)
case 3:o=c
if(o!=null){q=o.aY(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aY,r)},
aV(a){return this.p5(a)},
p5(a){var s=0,r=A.h(t.u),q,p=this,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lC(a)
o=p.d
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bj(),$async$aV)
case 3:n=c
if(n!=null){q=n.aV(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aV,r)},
c6(a){return this.uP(a)},
uP(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$c6=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bj(),$async$c6)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.eE(),$async$c6)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.Jr(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.G(0,l),$async$c6)
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
return A.f($async$c6,r)},
cC(){var s=0,r=A.h(t.a),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$cC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.d
i=A.c0(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bj(),$async$cC)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.eE(),$async$cC)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.F2()
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
j=A.O(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cC,r)}}
A.z6.prototype={
$1(a){return this.a.u(0,a)},
$S:11}
A.ph.prototype={
eL(a){return this.xK(a)},
xK(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$eL=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),i),$async$eL)
case 7:m=c
s=8
return A.a(A.a4(m.getFile(),i),$async$eL)
case 8:l=c
s=9
return A.a(A.a4(l.arrayBuffer(),t.i),$async$eL)
case 9:k=c
i=A.c2(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.B(g)
if(A.Go(j))throw A.b(A.Fm(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eL,r)},
az(a,b){return this.yA(a,b)},
yA(a1,a2){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$az=A.c(function(a3,a4){if(a3===1){p.push(a4)
s=q}for(;;)switch(s){case 0:h=o.a
g=t.m
a0=A
s=3
return A.a(A.a4(h.getFileHandle(a1,{create:!0}),g),$async$az)
case 3:s=2
return A.a(a0.a4(a4.createWritable(),g),$async$az)
case 2:f=a4
q=5
j=t.X
s=8
return A.a(A.a4(f.write(t.i.a(B.f.gac(a2))),j),$async$az)
case 8:s=9
return A.a(A.a4(f.close(),j),$async$az)
case 9:q=1
s=7
break
case 5:q=4
e=p.pop()
n=A.B(e)
q=11
s=14
return A.a(A.a4(f.abort(),t.X),$async$az)
case 14:q=4
s=13
break
case 11:q=10
d=p.pop()
s=13
break
case 10:s=4
break
case 13:throw A.b(A.iy(n,a1))
s=7
break
case 4:s=1
break
case 7:q=16
s=19
return A.a(A.a4(h.getFileHandle(a1,{create:!1}),g),$async$az)
case 19:m=a4
s=20
return A.a(A.a4(m.getFile(),g),$async$az)
case 20:l=a4
g=a2.length
s=!J.x(l.size,g)?21:22
break
case 21:q=24
s=27
return A.a(A.mu(h,a1),$async$az)
case 27:q=16
s=26
break
case 24:q=23
c=p.pop()
s=26
break
case 23:s=16
break
case 26:g=A.iy(A.A("write verification failed: persisted "+A.r(A.D0(l,"size"))+" of "+g+" bytes"),a1)
throw A.b(g)
case 22:q=1
s=18
break
case 16:q=15
b=p.pop()
g=A.B(b)
s=g instanceof A.fC?28:30
break
case 28:throw b
s=29
break
case 30:k=g
q=32
s=35
return A.a(A.mu(h,a1),$async$az)
case 35:q=15
s=34
break
case 32:q=31
a=p.pop()
s=34
break
case 31:s=15
break
case 34:throw A.b(A.iy(k,a1))
case 29:s=18
break
case 15:s=1
break
case 18:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$az,r)},
G(a,b){return this.xV(0,b)},
xV(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$G=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.mu(o.a,b),$async$G)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.B(l)
if(A.Go(n))throw A.b(A.Fm(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$G,r)},
aY(a){return this.w0(a)},
w0(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$aY=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),t.m),$async$aY)
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
return A.f($async$aY,r)},
aV(a){return this.p6(a)},
p6(a){var s=0,r=A.h(t.u),q,p=2,o=[],n=this,m,l,k,j,i
var $async$aV=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),k),$async$aV)
case 7:m=c
s=8
return A.a(A.a4(m.getFile(),k),$async$aV)
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
return A.f($async$aV,r)},
eE(){var s=0,r=A.h(t.a),q,p=2,o=[],n=[],m=this,l,k,j
var $async$eE=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.c5(A.cp(A.FC(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$eE)
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
return A.a(j.A(),$async$eE)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eE,r)},
$iFZ:1}
A.vo.prototype={
d4(a,b){return this.wk(a,b)},
wk(a,b){var s=0,r=A.h(t.X),q,p
var $async$d4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.l4(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d4,r)},
iJ(a,b,c,d){return this.xg(a,b,c,d)},
xg(c2,c3,c4,c5){var s=0,r=A.h(t.n),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$iJ=A.c(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:b7=c2.xb(c3,c4)
b8=t.N
b9=new A.iL(A.t(b8,t.fw),b7)
c0=!1
p=4
a8=c5==null
n=A.In(a8?null:A.l0(c5),"backupDbName")
if(n!=null&&typeof n!="string"){a2=A.aL('"backupDbName" must be a string.')
throw A.b(a2)}a9=A.a3(n)
m=a9==null?c3:a9
b9.e=new A.vp(m)
b9.f=new A.vq(m)
b7.O("PRAGMA journal_mode=TRUNCATE")
b0=b7.oS("PRAGMA journal_mode")
l=b0.gH(b0).b[0]
if(J.X(l).toLowerCase()!=="truncate"){a2=A.A("journal_mode read-back was "+A.r(l)+", expected truncate")
throw A.b(a2)}k=A.Pc(a8?null:A.l0(c5))
b1=t.bE.a(J.Q(k,"stores"))
j=b1==null?A.l([],t.aw):b1
b2=A.b_(J.Q(k,"maxDocBytes"))
i=b2==null?19e5:b2
b0=A.C3(J.Q(k,"destructiveBackup"))
h=b0!==!1
b3=t.b.a(J.Q(k,"storePolicies"))
g=b3==null?B.j:b3
f=A.b_(J.Q(k,"groupCommitWindowMs"))
e=A.b_(J.Q(k,"txSessionTtlMs"))
d=A.b_(J.Q(k,"callbackTimeoutMs"))
c=A.b_(J.Q(k,"clockOffsetMs"))
b0=A.C3(J.Q(k,"syncProxy"))
b=b0===!0
a=b?new A.x9(A.t(t.S,t.oj)):null
b0=A.C3(J.Q(k,"blobProxy"))
a0=b0===!0
b0=d==null?B.V:A.bX(0,d,0)
a1=new A.zd(b0,A.l([],t.m2))
a2=A.l([],t.oq)
for(b0=j,b4=b0.length,b5=0;b5<b0.length;b0.length===b4||(0,A.p)(b0),++b5){a3=b0[b5]
J.aO(a2,A.HW(a3,J.Q(g,a3.a),a1))}a4=a2
a5=A.Pb(A.In(a8?null:A.l0(c5),"fieldCipher"))
if(A.OU(j,a5)){a2=A.G("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a2)}a6=a0?new A.xa(a1):new A.z5(A.t(b8,t.p))
a2=f==null?B.I:A.bX(0,f,0)
b8=e==null?B.ai:A.bX(0,e,0)
a8=c==null||c===0?null:new A.vr(c)
if(b){b0=a
b0.toString
b0=new A.xb(a1,b0)}else b0=B.c0
s=7
return A.a(A.de(a6,a1,b9,h,a5,a2,i,a8,c3,B.aF,a4,b0,b8),$async$iJ)
case 7:a7=c7
c0=!0
b8=t.be
q=new A.mW(b7,new A.oC(a7,a1,a,A.aP(b8)),A.t(t.eg,b8))
s=1
break
p=2
s=6
break
case 4:p=3
c1=o.pop()
if(!c0)b7.q()
throw c1
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iJ,r)}}
A.vp.prototype={
$1(a){return A.pS(this.a,a)},
$S:163}
A.vq.prototype={
$1(a){return A.pT(this.a,a)},
$S:164}
A.vr.prototype={
$0(){return Date.now()+this.a},
$S:10}
A.mW.prototype={
d4(a,b){return this.wl(a,b)},
wl(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$d4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.DU(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.Kt(j)
if(o==null){q=A.DU(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.r
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.oV(a)
k.a=l
n.j(0,a,l)
a.b.a.W(new A.vA(k,p,a),t.H)}i=A
s=3
return A.a(p.f.ir(k.a,o),$async$d4)
case 3:q=i.Ku(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d4,r)}}
A.vA.prototype={
$1(a){var s,r=this.b
r.r.G(0,this.c)
r=r.f
s=this.a.a
r.f.G(0,s)
B.b.G(r.d.b,s)},
$S:33}
A.oV.prototype={
kv(a){var s=this,r=s.b
if(r>=128)return
s.b=r+1
s.a.fo(A.l4(a)).b6(new A.Ai(s),new A.Aj(s),t.H)},
$1(a){return this.oE(a)},
oE(a){var s=0,r=A.h(t.X),q,p=this,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.fo(A.l4(a)),$async$$1)
case 3:o=c
q=o==null?null:A.l0(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$ioE:1,
$iGp:1}
A.Ai.prototype={
$1(a){--this.a.b},
$S:57}
A.Aj.prototype={
$1(a){--this.a.b},
$S:28}
A.D2.prototype={
$1(a){return B.b.bp(a.c,new A.D1())},
$S:166}
A.D1.prototype={
$1(a){return a.e},
$S:58}
A.zc.prototype={
xi(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.aL('Invalid "'+a+'" argument: expected '+A.bT(b).l(0)+", got "+J.c9(s).l(0)+"."))
return b.a(s)}}
A.zd.prototype={
cz(a,b){return this.wJ(a,b)},
wJ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$cz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.b
k=l.length===0?null:B.b.gH(l)
if(k==null)throw A.b(A.G('No connected page can serve the "'+a+'" callback.',null))
l=p.c++
o=new A.w($.C,t.ny)
n=new A.aG(o,t.bF)
m=A.c4(p.a,new A.ze(p,n,a))
k.$1(A.m(["kind","callback_rpc","rpcId",l,"channel",a,"args",b],t.N,t.X)).b6(new A.zf(p,m,n,a),new A.zg(m,n,a),t.H)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cz,r)},
rT(a,b){var s
if(!t.f.b(a))throw A.b(A.aL('The "'+b+'" callback reply must be a map.'))
s=A.bp(a)
if(!J.x(s.h(0,"kind"),"callback_rpc_result"))throw A.b(A.aL('The "'+b+'" callback reply has kind "'+A.r(s.h(0,"kind"))+'".'))
if(J.x(s.h(0,"ok"),!0))return s.h(0,"value")
throw A.b(A.G('The "'+b+'" callback failed on the page: '+A.r(s.h(0,"error")),null))}}
A.ze.prototype={
$0(){var s=this.b
if((s.a.a&30)===0)s.aX(new A.eb(null,'The "'+this.c+'" callback did not answer within '+B.c.L(this.a.a.a,1000)+" ms."))},
$S:0}
A.zf.prototype={
$1(a){var s,r,q,p,o=this
o.b.A()
q=o.c
if((q.a.a&30)!==0)return
try{q.aB(o.a.rT(a,o.d))}catch(p){s=A.B(p)
r=A.af(p)
q.bz(s,r)}},
$S:57}
A.zg.prototype={
$2(a,b){var s
this.a.A()
s=this.b
if((s.a.a&30)===0)s.bz(new A.eb(null,'The "'+this.c+'" callback failed: '+A.r(a)),b)},
$S:6}
A.hK.prototype={}
A.k7.prototype={}
A.f6.prototype={}
A.oD.prototype={
hx(a,b){return this.r5(a,b)},
r5(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hx=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.aL('Contract envelope requires a "request" map.'))
j=A.bp(b)
i=j.h(0,"tag")
if(typeof i!="string")A.u(A.R("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.u(A.R("Missing request payload."))
g=A.l1(h)
j=t.G
if(!j.b(g))A.u(A.R("Malformed request payload."))
f=A.JP(i,g)
if(f==null)A.u(A.R("Unknown request tag: "+i))
m=f
p=4
e=n.c.r
e===$&&A.v()
s=7
return A.a(e.wf(m),$async$hx)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gY(),"payload",A.fp(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.B(a)
j=A.m(["error",A.OH(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hx,r)}}
A.oC.prototype={
ir(a,b){return this.wz(a,b)},
wz(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ir=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:n.f.u(0,a)
i=n.d.b
if(!B.b.E(i,a))i.push(a)
if(n.r==null){i=n.c.r
i===$&&A.v()
i=i.b
n.r=new A.aZ(i,A.n(i).i("aZ<1>")).b2(new A.zr(n))}m=null
try{m=A.Lr(b)}catch(e){l=A.B(e)
i=J.X(l)
q=new A.f6("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.f6("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jt(a,m),$async$ir)
case 7:k=d
i=m.b
q=new A.k7(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
j=A.B(f)
i=m.b
g=J.X(j)
q=new A.f6("localpocket",g,A.m(["type",A.CF(j)],t.N,t.X),i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ir,r)},
r2(a,b){var s=this.e
if(s==null)throw A.b(A.aL("The open did not configure a proxy sync backend."))
return s.iL(A.bp(b.d))},
jt(a,b){return this.qv(a,b)},
qv(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jt=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.w
if(l===$){o=A.m(["open",p.gra(),"contract_request",p.gr4(),"backend_call",p.gr1()],t.N,t.n1)
p.w!==$&&A.Dq()
p.w=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.aL("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jt,r)}}
A.zr.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gY(),"payload",A.fp(a.p())],r,q)],r,q)
for(r=this.a.f,r=A.dz(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).kv(p)}},
$S:169}
A.oB.prototype={
hy(a,b){return this.rb(a,b)},
rb(b0,b1){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$hy=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a4=b1.d
a5=new A.zc(a4).xi("stores",t.kS)
a6=a4.h(0,"manifestFingerprints")
a7=t.N
a8=A.t(a7,a7)
a9=t.f
if(a9.b(a6))a6.a5(0,new A.zl(a8))
o=p.rV(a4)
s=a5!=null?3:4
break
case 3:a4=J.E(a5),n=p.c,m=n.fy,l=t.X,k=p.d,j=n.cx==null
case 5:if(!a4.k()){s=6
break}i=a4.gn()
if(!a9.b(i))A.u(A.ac("Schema must be a map: "+A.r(i),null,null))
h=A.qI(A.bp(i),l)
g=A.HW(h,o.h(0,h.a),k)
if(B.b.bp(g.c,new A.zm())&&j)throw A.b(A.G('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.E5(g)
e=g.a
d=a8.h(0,e)
if(d!=null){c=new A.a7("")
A.cq(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.cb()
a0=A.d4(a)
a0.u(0,b)
a0.q()
a0=d!==A.au(a.a.a)
b=a0}else b=!1
if(b){a1=o.h(0,e)
throw A.b(A.aL(A.Gr(e,a1!=null,A.Ls(a1,h),A.Eg(g))))}s=!m.I(e)?7:9
break
case 7:e=n.f
e===$&&A.v()
s=10
return A.a(e.b_(g),$async$hy)
case 10:s=8
break
case 9:a2=m.h(0,e)
if(a2==null)A.u(A.A('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a7("")
A.cq(c,a2.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.cb()
a0=A.d4(a)
a0.u(0,b)
a0.q()
a0=A.au(a.a.a)
c=new A.a7("")
A.cq(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.cb()
a3=A.d4(a)
a3.u(0,b)
a3.q()
if(a0!==A.au(a.a.a))throw A.b(A.aL(A.Gr(e,!0,A.Eg(g),A.Eg(a2.a))))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a7,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
rV(a){var s,r,q,p,o,n,m,l=a.h(0,"storePolicies")
if(l==null)return B.j
s=t.f
if(!s.b(l))throw A.b(A.aL('"storePolicies" must be a map.'))
r=A.t(t.N,t.X)
for(q=l.ga0(),q=q.gt(q);q.k();){p=q.gn()
o=p.a
n=J.cK(o)
m=n.l(o)
p=p.b
o=n.l(o)
if(!s.b(p))A.u(A.aL('The store policy for "'+o+'" must be a map.'))
r.j(0,m,A.bp(p))}return r}}
A.zl.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:70}
A.zm.prototype={
$1(a){return a.e},
$S:58}
A.zq.prototype={
$1(a){return a.d!=null},
$S:26}
A.zi.prototype={
$1(a){var s,r=this.a,q=t.f
if(!q.b(r))return B.aC
s=r.h(0,a)
return q.b(s)?s:B.aC},
$S:170}
A.zh.prototype={
$1(a){var s,r=this.a
if(!t.f.b(r))return B.k
s=r.h(0,a)
if(!t.j.b(s))return B.k
r=A.O(s,t.X)
B.b.aj(r)
return r},
$S:171}
A.zj.prototype={
$0(){var s,r=J.Q(this.a.$1("conflictPolicy"),"fieldOverrides")
if(!t.f.b(r))return B.k
s=J.bI(r.gJ(),new A.zk(),t.N).bT(0)
B.b.aj(s)
return s},
$S:172}
A.zk.prototype={
$1(a){return J.X(a)},
$S:30}
A.zn.prototype={
$1(a){return J.X(a)},
$S:30}
A.zo.prototype={
$1(a){return J.X(a)},
$S:30}
A.zp.prototype={
$1(a){return this.a[a.a]===a.b},
$S:261}
A.pK.prototype={}
A.rh.prototype={
us(a){var s,r=null
A.HO("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.bd(a)>0&&!s.d5(a)
if(s)return a
s=A.I0()
return this.nt(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
vf(a){var s,r,q=A.e1(a,this.a)
q.fV()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kW(s)
q.e.pop()
q.fV()
return q.l(0)},
nt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.HO("join",s)
return this.wN(new A.ed(s,t.U))},
wN(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.d1(s,new A.ri(),a.$ti.i("d1<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.d5(m)&&o){l=A.e1(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.B(k,0,q.eP(k,!0))
l.b=n
if(q.fK(n))l.e[0]=q.gdV()
n=l.l(0)}else if(q.bd(m)>0){o=!q.d5(m)
n=m}else{if(!(m.length!==0&&q.ko(m[0])))if(p)n+=q.gdV()
n+=m}p=q.fK(m)}return n.charCodeAt(0)==0?n:n},
di(a,b){var s=A.e1(b,this.a),r=s.d,q=A.a1(r).i("aq<1>")
r=A.O(new A.aq(r,new A.rj(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aF(r,0,q)
return s.d},
eI(a){var s
if(!this.rz(a))return a
s=A.e1(a,this.a)
s.kP()
return s.l(0)},
rz(a){var s,r,q,p,o,n,m,l=this.a,k=l.bd(a)
if(k!==0){if(l===$.q2())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cB(n)){if(l===$.q2()&&n===47)return!0
if(q!=null&&l.cB(q))return!0
if(q===46)m=o==null||o===46||l.cB(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cB(q))return!0
if(q===46)l=o==null||l.cB(o)||o===46
else l=!1
if(l)return!0
return!1},
xT(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.bd(a)
if(l<=0)return o.eI(a)
s=A.I0()
if(m.bd(s)<=0&&m.bd(a)>0)return o.eI(a)
if(m.bd(a)<=0||m.d5(a))a=o.us(a)
if(m.bd(a)<=0&&m.bd(s)>0)throw A.b(A.G_(n+a+'" from "'+s+'".'))
r=A.e1(s,m)
r.kP()
q=A.e1(a,m)
q.kP()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kT(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kT(l[0],p[0])}else l=!1
if(!l)break
B.b.iT(r.d,0)
B.b.iT(r.e,1)
B.b.iT(q.d,0)
B.b.iT(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.G_(n+a+'" from "'+s+'".'))
l=t.N
B.b.kI(q.d,0,A.a9(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kI(p,1,A.a9(r.d.length,m.gdV(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga_(m)==="."){B.b.kW(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fV()
return q.l(0)},
nE(a){var s,r,q=this,p=A.Hs(a)
if(p.gb9()==="file"&&q.a===$.lb())return p.l(0)
else if(p.gb9()!=="file"&&p.gb9()!==""&&q.a!==$.lb())return p.l(0)
s=q.eI(q.a.kS(A.Hs(p)))
r=q.xT(s)
return q.di(0,r).length>q.di(0,s).length?s:r}}
A.ri.prototype={
$1(a){return a!==""},
$S:13}
A.rj.prototype={
$1(a){return a.length!==0},
$S:13}
A.CA.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:174}
A.ue.prototype={
oQ(a){var s=this.bd(a)
if(s>0)return B.a.B(a,0,s)
return this.d5(a)?a[0]:null},
kT(a,b){return a===b}}
A.ne.prototype={
gkj(){var s=this,r=t.N,q=new A.ne(s.a,s.b,s.c,A.bP(s.d,!0,r),A.bP(s.e,!0,r))
q.fV()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga_(r)},
fV(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga_(s)===""))break
B.b.kW(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kP(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kI(m,0,A.a9(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.a9(m.length+1,s.gdV(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fK(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.q2())n.b=A.D(r,"/","\\")
n.fV()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.nf.prototype={
l(a){return"PathException: "+this.a},
$iI:1}
A.yi.prototype={
l(a){return this.gaZ()}}
A.wW.prototype={
ko(a){return B.a.E(a,"/")},
cB(a){return a===47},
fK(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eP(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
bd(a){return this.eP(a,!1)},
d5(a){return!1},
kS(a){var s
if(a.gb9()===""||a.gb9()==="file"){s=a.gbD()
return A.Ew(s,0,s.length,B.o,!1)}throw A.b(A.U("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaZ(){return"posix"},
gdV(){return"/"}}
A.yS.prototype={
ko(a){return B.a.E(a,"/")},
cB(a){return a===47},
fK(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c9(a,"://")&&this.bd(a)===s},
eP(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cv(a,"/",B.a.af(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.T(a,"file://"))return q
p=A.I7(a,q+1)
return p==null?q:p}}return 0},
bd(a){return this.eP(a,!1)},
d5(a){return a.length!==0&&a.charCodeAt(0)===47},
kS(a){return a.l(0)},
gaZ(){return"url"},
gdV(){return"/"}}
A.zb.prototype={
ko(a){return B.a.E(a,"/")},
cB(a){return a===47||a===92},
fK(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eP(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cv(a,"\\",2)
if(s>0){s=B.a.cv(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Ic(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
bd(a){return this.eP(a,!1)},
d5(a){return this.bd(a)===1},
kS(a){var s,r
if(a.gb9()!==""&&a.gb9()!=="file")throw A.b(A.U("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbD()
if(a.gdH()===""){if(s.length>=3&&B.a.T(s,"/")&&A.I7(s,1)!=null)s=B.a.kY(s,"/","")}else s="\\\\"+a.gdH()+s
r=A.D(s,"/","\\")
return A.Ew(r,0,r.length,B.o,!1)},
uR(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kT(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.uR(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaZ(){return"windows"},
gdV(){return"\\"}}
A.y1.prototype={
gm(a){return this.c.length},
gwO(){return this.b.length},
pw(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.K(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eV(a){var s,r=this
if(a<0)throw A.b(A.b8("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b8("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga_(s))return s.length-1
if(r.ro(a)){s=r.d
s.toString
return s}return r.d=r.pS(a)-1},
ro(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pS(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.L(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
j8(a){var s,r,q=this
if(a<0)throw A.b(A.b8("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b8("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.eV(a)
r=q.b[s]
if(r>a)throw A.b(A.b8("Line "+s+" comes after offset "+a+"."))
return a-r},
h7(a){var s,r,q,p
if(a<0)throw A.b(A.b8("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b8("Line "+a+" must be less than the number of lines in the file, "+this.gwO()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b8("Line "+a+" doesn't have 0 columns."))
return q}}
A.mp.prototype={
ga6(){return this.a.a},
gah(){return this.a.eV(this.b)},
gau(){return this.a.j8(this.b)},
gav(){return this.b}}
A.hU.prototype={
ga6(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.DH(this.a,this.b)},
gN(){return A.DH(this.a,this.c)},
gaT(){return A.e8(B.y.U(this.a.c,this.b,this.c),0,null)},
gbq(){var s=this,r=s.a,q=s.c,p=r.eV(q)
if(r.j8(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.e8(B.y.U(r.c,r.h7(p),r.h7(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.h7(p+1)
return A.e8(B.y.U(r.c,r.h7(r.eV(s.b)),q),0,null)},
a3(a,b){var s
if(!(b instanceof A.hU))return this.pl(0,b)
s=B.c.a3(this.b,b.b)
return s===0?B.c.a3(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hU))return s.pk(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gK(a){return A.ch(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idn:1}
A.tL.prototype={
wF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mS(B.b.gH(a1).c)
s=a.e
r=A.a9(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hX("\u2575")
q.a+="\n"
a.mS(l)}else if(m.b+1!==n.b){a.ur("...")
q.a+="\n"}}for(l=n.d,k=A.a1(l).i("bE<1>"),j=new A.bE(l,k),j=new A.as(j,j.gm(0),k.i("as<a0.E>")),k=k.i("a0.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gah()!==f.gN().gah()&&f.gR().gah()===i&&a.rq(B.a.B(h,0,f.gR().gau()))){e=B.b.ca(r,a0)
if(e<0)A.u(A.U(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.uq(i)
q.a+=" "
a.uo(n,r)
if(s)q.a+=" "
d=B.b.nn(l,new A.u5())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gah()===i?j.gR().gau():0
a.um(h,g,j.gN().gah()===i?j.gN().gau():h.length,p)}else a.hZ(h)
q.a+="\n"
if(k)a.un(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hX("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mS(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hX("\u2577")
else{q.hX("\u250c")
q.bu(new A.tT(q),"\x1b[34m")
s=q.r
r=" "+$.is().nE(a)
s.a+=r}q.r.a+="\n"},
hV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gah()
i=k?null:l.a.gN().gah()
if(s&&l===c){h.bu(new A.u_(h,j,a),r)
n=!0}else if(n)h.bu(new A.u0(h,l),r)
else if(k)if(g.a)h.bu(new A.u1(h),g.b)
else o.a+=" "
else h.bu(new A.u2(g,h,c,j,a,l,i),p)}},
uo(a,b){return this.hV(a,b,null)},
um(a,b,c,d){var s=this
s.hZ(B.a.B(a,0,b))
s.bu(new A.tU(s,a,b,c),d)
s.hZ(B.a.B(a,c,a.length))},
un(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gah()===p.gN().gah()){r.kf()
p=r.r
p.a+=" "
r.hV(a,c,b)
if(c.length!==0)p.a+=" "
r.mT(b,c,r.bu(new A.tV(r,a,b),q))}else{s=a.b
if(p.gR().gah()===s){if(B.b.E(c,b))return
A.Pi(c,b)
r.kf()
p=r.r
p.a+=" "
r.hV(a,c,b)
r.bu(new A.tW(r,a,b),q)
p.a+="\n"}else if(p.gN().gah()===s){p=p.gN().gau()
if(p===a.a.length){A.Io(c,b)
return}r.kf()
r.r.a+=" "
r.hV(a,c,b)
r.mT(b,c,r.bu(new A.tX(r,!1,a,b),q))
A.Io(c,b)}}},
mR(a,b,c){var s=c?0:1,r=this.r
s=B.a.bt("\u2500",1+b+this.jq(B.a.B(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
ul(a,b){return this.mR(a,b,!0)},
mT(a,b,c){this.r.a+="\n"
return},
hZ(a){var s,r,q,p
for(s=new A.cu(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),q=this.r,r=r.i("M.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bt(" ",4)
else{p=A.bD(p)
q.a+=p}}},
hY(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bu(new A.u3(s,this,a),"\x1b[34m")},
hX(a){return this.hY(a,null,null)},
ur(a){return this.hY(null,null,a)},
uq(a){return this.hY(null,a,null)},
kf(){return this.hY(null,null,null)},
jq(a){var s,r,q,p
for(s=new A.cu(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),r=r.i("M.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
rq(a){var s,r,q
for(s=new A.cu(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),r=r.i("M.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
q7(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bu(a,b){return this.q7(a,b,t.z)}}
A.u4.prototype={
$0(){return this.a},
$S:175}
A.tN.prototype={
$1(a){var s=a.d
return new A.aq(s,new A.tM(),A.a1(s).i("aq<1>")).gm(0)},
$S:176}
A.tM.prototype={
$1(a){var s=a.a
return s.gR().gah()!==s.gN().gah()},
$S:39}
A.tO.prototype={
$1(a){return a.c},
$S:178}
A.tQ.prototype={
$1(a){var s=a.a.ga6()
return s==null?new A.k():s},
$S:179}
A.tR.prototype={
$2(a,b){return a.a.a3(0,b.a)},
$S:180}
A.tS.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.ax(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbq()
n=A.CW(o,p.gaT(),p.gR().gau())
n.toString
m=B.a.i_("\n",B.a.B(o,0,n)).gm(0)
l=p.gR().gah()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga_(b).b)b.push(new A.cI(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.p)(b),++k){j=b[k]
h&1&&A.K(i,16)
B.b.tu(i,new A.tP(j),!0)
f=i.length
for(q=s.ba(c,g),p=q.$ti,q=new A.as(q,q.gm(0),p.i("as<a0.E>")),n=j.b,p=p.i("a0.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gah()>n)break
i.push(e)}g+=i.length-f
B.b.D(j.d,i)}return b},
$S:181}
A.tP.prototype={
$1(a){return a.a.gN().gah()<this.a.b},
$S:39}
A.u5.prototype={
$1(a){return!0},
$S:39}
A.tT.prototype={
$0(){this.a.r.a+=B.a.bt("\u2500",2)+">"
return null},
$S:0}
A.u_.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.u0.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.u1.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.u2.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bu(new A.tY(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gau()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bu(new A.tZ(r,o),p.b)}}},
$S:2}
A.tY.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.tZ.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.tU.prototype={
$0(){var s=this
return s.a.hZ(B.a.B(s.b,s.c,s.d))},
$S:0}
A.tV.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gau(),l=n.gN().gau()
n=this.b.a
s=q.jq(B.a.B(n,0,m))
r=q.jq(B.a.B(n,m,l))
m+=s*3
n=(p.a+=B.a.bt(" ",m))+B.a.bt("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.tW.prototype={
$0(){return this.a.ul(this.b,this.c.a.gR().gau())},
$S:0}
A.tX.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bt("\u2500",3)
else r.mR(s.c,Math.max(s.d.a.gN().gau()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.u3.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.xk(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bz.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gah()+":"+s.gR().gau()+"-"+s.gN().gah()+":"+s.gN().gau())
return s.charCodeAt(0)==0?s:s}}
A.AU.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.CW(o.gbq(),o.gaT(),o.gR().gau())!=null)){s=A.nK(o.gR().gav(),0,0,o.ga6())
r=o.gN().gav()
q=o.ga6()
p=A.Ot(o.gaT(),10)
o=A.y2(s,A.nK(r,A.GI(o.gaT()),p,q),o.gaT(),o.gaT())}return A.LS(A.LU(A.LT(o)))},
$S:182}
A.cI.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.C(this.d,", ")+")"}}
A.cC.prototype={
ku(a){var s=this.a
if(!J.x(s,a.ga6()))throw A.b(A.U('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga6())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a3(a,b){var s=this.a
if(!J.x(s,b.ga6()))throw A.b(A.U('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga6())+"\" don't match.",null))
return this.b-b.gav()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga6())&&this.b===b.gav()},
gK(a){var s=this.a
s=s==null?null:s.gK(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.d8(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iay:1,
ga6(){return this.a},
gav(){return this.b},
gah(){return this.c},
gau(){return this.d}}
A.nL.prototype={
ku(a){if(!J.x(this.a.a,a.ga6()))throw A.b(A.U('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(a.ga6())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a3(a,b){if(!J.x(this.a.a,b.ga6()))throw A.b(A.U('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(b.ga6())+"\" don't match.",null))
return this.b-b.gav()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga6())&&this.b===b.gav()},
gK(a){var s=this.a.a
s=s==null?null:s.gK(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.d8(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.eV(r)+1)+":"+(q.j8(r)+1))+">"},
$iay:1,
$icC:1}
A.nN.prototype={
px(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga6(),q.ga6()))throw A.b(A.U('Source URLs "'+A.r(q.ga6())+'" and  "'+A.r(r.ga6())+"\" don't match.",null))
else if(r.gav()<q.gav())throw A.b(A.U("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.ku(r))throw A.b(A.U('Text "'+s+'" must be '+q.ku(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaT(){return this.c}}
A.nO.prototype={
giE(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gah()+1)+", column "+(p.gR().gau()+1)
if(p.ga6()!=null){s=p.ga6()
r=$.is()
s.toString
s=o+(" of "+r.nE(s))
o=s}o+=": "+this.a
q=p.wG(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iI:1}
A.hr.prototype={
gav(){var s=this.b
s=A.DH(s.a,s.b)
return s.b},
$ibt:1,
ghc(){return this.c}}
A.hs.prototype={
ga6(){return this.gR().ga6()},
gm(a){return this.gN().gav()-this.gR().gav()},
a3(a,b){var s=this.gR().a3(0,b.gR())
return s===0?this.gN().a3(0,b.gN()):s},
wG(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.Ka(s,a).wF()},
P(a,b){if(b==null)return!1
return b instanceof A.hs&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gK(a){return A.ch(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.d8(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaT()+'">'},
$iay:1}
A.dn.prototype={
gbq(){return this.d}}
A.jV.prototype={
a7(){return"SqliteUpdateKind."+this.b}}
A.cD.prototype={
gK(a){return A.ch(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.cD&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.cj.prototype={
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
p=p!=null?s+(", parameters: "+J.bI(p,new A.y7(),t.N).C(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iI:1}
A.y7.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.X(a)},
$S:183}
A.ll.prototype={}
A.rI.prototype={
u6(){var s=this,r=s.d
return r==null?s.d=new A.em(s,A.l([],t.fU),new A.rR(s),new A.rS(s),t.jy):r},
ty(){var s=this,r=s.e
return r==null?s.e=new A.em(s,A.l([],t.lw),new A.rO(s),new A.rP(s),t.lU):r},
q9(){var s=this,r=s.f
return r==null?s.f=new A.em(s,A.l([],t.lw),new A.rK(s),new A.rL(s),t.ah):r},
uZ(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.u(A.aD(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.bc(m))
r=n.a
q=r.eq(s,1)
s=r.d
p=A.EM(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.dl(new A.rT(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.Dp(this,p,o,o,o)},
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
r=s.li()
q=r!==0?A.EQ(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aJ(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.u(A.A("This database has already been closed"))
r=p.b
q=r.a
s=q.eq(B.e.v(a),1)
q=q.d
r=A.EM(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.Dp(p,r,"executing",a,b)}else{s=p.iM(a,!0)
try{s.ew(new A.bY(b))}finally{s.q()}}},
O(a){return this.aJ(a,B.k)},
t_(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.u(A.A("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cY(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.z4(r,p,n,o)
l=A.l([],t.lE)
k=new A.rM(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.lk(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.Dp(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.L(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null)l.push(new A.ht(f,e,new A.dB(!1).dm(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.lk(j,r-j,0)
n=q.buffer
h=B.c.L(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null){l.push(new A.ht(f,e,""))
k.$0()
throw A.b(A.aD(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aD(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
iM(a,b){var s=this.t_(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aD(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
xs(a){return this.iM(a,!1)},
oT(a,b){var s,r=this.iM(a,!0)
try{s=r.ld(new A.bY(b))
return s}finally{r.q()}},
oS(a){return this.oT(a,B.k)}}
A.rR.prototype={
$0(){var s=this.a,r=s.b
r.a.n9(r.b,new A.rQ(s))},
$S:0}
A.rQ.prototype={
$3(a,b,c){var s=A.Ld(a)
if(s==null)return
this.a.d.ks(new A.cD(s,b,c))},
$S:184}
A.rS.prototype={
$0(){var s=this.a.b
s.a.n9(s.b,null)
return null},
$S:0}
A.rO.prototype={
$0(){var s=this.a,r=s.b
r.a.n8(r.b,new A.rN(s))
return null},
$S:0}
A.rN.prototype={
$0(){this.a.e.ks(null)},
$S:0}
A.rP.prototype={
$0(){var s=this.a.b
s.a.n8(s.b,null)
return null},
$S:0}
A.rK.prototype={
$0(){var s=this.a,r=s.b
r.a.n7(r.b,new A.rJ(s))
return null},
$S:0}
A.rJ.prototype={
$0(){var s=this.a.f
s.ks(null)
return 0},
$S:10}
A.rL.prototype={
$0(){var s=this.a.b
s.a.n7(s.b,null)
return null},
$S:0}
A.rT.prototype={
$2(a,b){A.MY(a,this.a,b)},
$S:185}
A.rM.prototype={
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
A.ou.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.a2("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.KX(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.KZ(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.U("The argument list is unmodifiable",null))},
$iy4:1}
A.em.prototype={
gcK(){var s=this.r
return s==null?this.r=this.r_(!1):s},
r_(a){return new A.dA(new A.Bz(this,!1),this.$ti.i("dA<1>"))},
ks(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.u(o.bZ())
if((n&1)!==0)o.gaW().aD(a)}else{n=o.b
if(n>=4)A.u(o.bZ())
if((n&1)!==0)o.cT(a)
else if((n&3)===0){n=o.ho()
o=new A.cl(a,o.$ti.i("cl<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.seH(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.Bz.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.BA(q,a,s)
a.r=a.e=new A.BB(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dZ<1>)")}}
A.BA.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.kA(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.BB.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,new A.kA(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.y3.prototype={
no(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Lc(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
xb(a,b){var s,r,q,p,o,n,m,l,k,j
this.no()
switch(2){case 2:break}s=this.a
r=s.a
q=r.eq(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.eq(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.dh(r.b.buffer,0,null)[B.c.ag(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.k()
k=new A.yY(r,l,o)
r=r.r
if(r!=null)r.n0(k,l,o)
if(m!==0){j=A.EQ(s,k,m,"opening the database",null,null)
k.li()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.rI(s,k,!1)}}
A.ht.prototype={
gq8(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.oF(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dB(!1).dm(o,0,null,!0))}return q},
gtZ(){return null},
bS(a,b){A.Dp(this.b,a,b,this.d,this.e)},
lW(){if(this.r||this.b.r)throw A.b(A.A(u.f))},
hq(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dO()
if(s!==0?s!==101:q)r.bS(s,"executing statement")},
tH(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.tk(o))
l.push(p)}m.dO()
if(p!==0?p!==101:k)m.bS(p,"selecting from statement")
n=m.gq8()
m.gtZ()
k=new A.nx(l,n,B.ap)
k.q1()
return k},
tk(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ak(r.Number(s)):A.GD(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.pa(a)
case 4:return s.lj(a)
case 5:default:return null}},
pV(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.u(A.aD(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.pW(a[s-1],s)
this.e=a},
pW(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.a5(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aQ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.Fl(a).l(0)))
break A}if(A.aT(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.p9(b,a)
break A}if(t.L.b(a)){s=q.a.p8(b,a)
break A}s=q.pU(a,b)
break A}if(s!==0)q.bS(s,"binding parameter")},
pU(a,b){throw A.b(A.aD(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eZ(a){A:{if(a instanceof A.bY){this.pV(a.a)
break A}if(a instanceof A.lW)a.a.$1(this)}},
dO(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dO()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.nc(s.d)}},
ld(a){var s=this
s.lW()
s.dO()
s.eZ(a)
return s.tH()},
ew(a){var s=this
s.lW()
s.dO()
s.eZ(a)
s.hq()}}
A.mD.prototype={
j3(a,b){return this.d.I(a)?1:0},
l5(a,b){this.d.G(0,a)},
l6(a){return new v.G.URL(a,"file:///").pathname},
dS(a,b){var s,r=a.a
if(r==null)r=A.FG(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cH(new Uint8Array(0),0))
else throw A.b(A.hF(14))
return new A.i_(new A.p7(this,r,(b&8)!==0),0)},
l8(a){}}
A.p7.prototype={
nJ(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bV(B.f.gac(r.a),0,r.b),b)
return s},
l4(){return this.d>=2?1:0},
j4(){if(this.c)this.a.d.G(0,this.b)},
h3(){return this.a.d.h(0,this.b).b},
l7(a){this.d=a},
l9(a){},
h4(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cH(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
la(a){this.d=a},
eU(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cH(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.aA(0,b,s,a)}}
A.Db.prototype={
$1(a){return a.length!==0},
$S:13}
A.rn.prototype={
q1(){var s,r,q,p,o=A.t(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o.j(0,p,B.b.d6(s,p))}this.c=o}}
A.nx.prototype={
gt(a){return new A.Bi(this)},
h(a,b){return new A.ci(this,A.fY(this.d[b],t.X))},
j(a,b,c){throw A.b(A.a2("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iL:1,
$io:1,
$iq:1}
A.ci.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.a5(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gJ(){return this.a.a},
gb0(){return this.b},
$iF:1}
A.Bi.prototype={
gn(){var s=this.a
return new A.ci(s,A.fY(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.pn.prototype={}
A.po.prototype={}
A.pq.prototype={}
A.pr.prototype={}
A.wf.prototype={
a7(){return"OpenMode."+this.b}}
A.eD.prototype={}
A.bY.prototype={}
A.lW.prototype={}
A.dw.prototype={
l(a){return"VfsException("+this.a+")"},
$iI:1}
A.jU.prototype={}
A.bh.prototype={}
A.lB.prototype={}
A.lA.prototype={
gj5(){return 0},
o0(a,b){return 12},
gj7(){return 4096},
j6(a,b){var s=this.nJ(a,b),r=a.length
if(s<r){B.f.kA(a,s,r,0)
throw A.b(B.em)}},
$ibx:1,
$ik4:1}
A.f7.prototype={}
A.Dm.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.u(A.A("No such element"))
r=s.c
q=r.a
q.toString
q.kb(A.n(r).i("bf.E").a(r))
r.d.$0()}},
$S:0}
A.Dk.prototype={
$1(a){var s=this.a,r=s.b
s.hz(s.c,new A.f7(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:20}
A.Dl.prototype={
$4(a,b,c,d){this.a.$1(c.fm(d))},
$S:187}
A.z2.prototype={}
A.yY.prototype={
li(){var s=this.a,r=s.r
if(r!=null)r.nc(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.z4.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
lk(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.EM(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.dh(o.b.buffer,0,null)[B.c.ag(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.z3(s,o,n)
o=o.w
if(o!=null)o.n0(r,s,n)}return new A.pl(r,p)}}
A.z3.prototype={
p8(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cY(b),J.ag(b))},
p9(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cY(s),s.length)},
lj(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.Gs(s.b,q.sqlite3_column_blob(r,a),p)},
pa(a){var s=this.c
return A.ee(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.ec.prototype={$iE2:1}
A.dx.prototype={$iE3:1}
A.hH.prototype={
sm(a,b){throw A.b(A.a2("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dx(s,A.dh(s.b.buffer,0,null)[B.c.ag(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.a2("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.m_.prototype={
wZ(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.ee(q,a,null)
r=$.Nt
if(r==null)A.Ik(s)
else r.$1(s)},
wX(a,b){var s,r=new A.aI(A.m3(A.ak(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.FX(q.buffer,b,8)
s.$flags&2&&A.K(s)
s[0]=A.E0(r)
s[1]=A.DZ(r)
s[2]=A.DY(r)
s[3]=A.x_(r)
s[4]=A.E_(r)-1
s[5]=A.E1(r)-1900
s[6]=B.c.an(A.KO(r),7)},
z_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.jU(A.Eh(j,b,k))
try{r=a.dS(s,d)
if(e!==0){p=r.b
o=A.dh(j.buffer,0,k)
n=B.c.ag(e,2)
o.$flags&2&&A.K(o)
o[n]=p}p=A.dh(j.buffer,0,k)
o=B.c.ag(c,2)
p.$flags&2&&A.K(p)
p[o]=0
m=r.a
return m}catch(l){p=A.B(l)
if(p instanceof A.dw){q=p
p=q.a
j=A.dh(j.buffer,0,k)
o=B.c.ag(c,2)
j.$flags&2&&A.K(j)
j[o]=p}else{j=j.buffer
j=A.dh(j,0,k)
p=B.c.ag(c,2)
j.$flags&2&&A.K(j)
j[p]=1}}return k},
yP(a,b,c){var s=this.b
s===$&&A.v()
return A.c8(new A.rt(a,A.ee(s,b,null),c))},
yH(a,b,c,d){var s=this.b
s===$&&A.v()
return A.c8(new A.rq(this,a,A.ee(s,b,null),c,d))},
yW(a,b,c,d){var s=this.b
s===$&&A.v()
return A.c8(new A.rv(this,a,A.ee(s,b,null),c,d))},
z1(a,b,c){return A.c8(new A.rx(this,c,b,a))},
z6(a,b){return A.c8(new A.rz(a,b))},
yN(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.DP(A.FW(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
yL(a){return A.c8(new A.rs(a))},
z3(a,b,c,d){return A.c8(new A.ry(this,a,b,c,d))},
ze(a,b,c,d){return A.c8(new A.rD(this,a,b,c,d))},
za(a,b){return A.c8(new A.rB(a,b))},
z8(a,b){return A.c8(new A.rA(a,b))},
yU(a,b){return A.c8(new A.ru(this,a,b))},
yY(a,b){return A.c8(new A.rw(a,b))},
zc(a,b){return A.c8(new A.rC(a,b))},
yJ(a,b){return A.c8(new A.rr(this,a,b))},
yQ(a){return a.gj5()},
yS(a,b,c){if(t.j2.b(a))return a.o0(b,c)
return 12},
z4(a){if(t.j2.b(a))return a.gj7()
return 4096},
vs(a){a.$0()},
vn(a){return a.$0()},
vq(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.ee(s,d,null),A.ak(v.G.Number(e)))},
vy(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.ec(s,b),new A.hH(s,c,d))},
vC(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.ec(s,b),new A.hH(s,c,d))},
vA(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.v()
null.$2(new A.ec(s,b),new A.hH(s,c,d))},
vE(a,b){var s
null.toString
s=this.a
s===$&&A.v()
null.$1(new A.ec(s,b))},
vw(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.v()
r.$1(new A.ec(s,b))},
vu(a,b,c,d,e){var s=this.b
s===$&&A.v()
return null.$2(A.Eh(s,c,b),A.Eh(s,e,d))},
vl(a,b){return a.$1(b)},
vj(a,b){return a.gzi().$1(b)},
vh(a,b,c){return a.gzh().$2(b,c)}}
A.rt.prototype={
$0(){return this.a.l5(this.b,this.c)},
$S:0}
A.rq.prototype={
$0(){var s,r=this,q=r.b.j3(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.dh(p.buffer,0,null)
s=B.c.ag(r.e,2)
p.$flags&2&&A.K(p)
p[s]=q},
$S:0}
A.rv.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.l6(q.c)),o=p.length
if(o>q.d)throw A.b(A.hF(14))
s=q.a.b
s===$&&A.v()
s=A.c2(s.buffer,0,null)
r=q.e
B.f.dh(s,r,p)
s.$flags&2&&A.K(s)
s[r+o]=0},
$S:0}
A.rx.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.c2(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.Fj(s,q.b)
else return A.Fj(s,null)},
$S:0}
A.rz.prototype={
$0(){this.a.l8(A.bX(this.b,0,0))},
$S:0}
A.rs.prototype={
$0(){return this.a.j4()},
$S:0}
A.ry.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.j6(A.c2(r.buffer,s.c,s.d),A.ak(v.G.Number(s.e)))},
$S:0}
A.rD.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.eU(A.c2(r.buffer,s.c,s.d),A.ak(v.G.Number(s.e)))},
$S:0}
A.rB.prototype={
$0(){return this.a.h4(A.ak(v.G.Number(this.b)))},
$S:0}
A.rA.prototype={
$0(){return this.a.l9(this.b)},
$S:0}
A.ru.prototype={
$0(){var s,r=this.b.h3(),q=this.a.b
q===$&&A.v()
q=A.dh(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.K(q)
q[s]=r},
$S:0}
A.rw.prototype={
$0(){return this.a.l7(this.b)},
$S:0}
A.rC.prototype={
$0(){return this.a.la(this.b)},
$S:0}
A.rr.prototype={
$0(){var s,r=this.b.l4(),q=this.a.b
q===$&&A.v()
q=A.dh(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.K(q)
q[s]=r},
$S:0}
A.dl.prototype={}
A.iw.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bm(A.DP(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.nS(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.qg(q,this,p,o)
o.d=s
o.f=new A.qh(q,o,s)
return new A.bi(o,A.n(o).i("bi<1>")).aa(a,b,c,d)},
bB(a,b,c){return this.aa(a,null,b,c)}}
A.qg.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a4(q,t.m).b6(new A.qi(p,r.b,s,r),s.guw(),t.P)},
$S:0}
A.qi.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaW().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:18}
A.qh.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaW().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.fb.prototype={
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
return s==null?A.u(A.A("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.w($.C,t.g5)
s=new A.at(o,t.ex)
r=p.d
q=t.m
p.b=A.by(r,"success",new A.Am(p,s),!1,q)
p.c=A.by(r,"error",new A.An(p,s),!1,q)
return o}}
A.Am.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.An.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.aX(s)},
$S:1}
A.r1.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r2.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aX(s)},
$S:1}
A.r6.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r7.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aX(s)},
$S:1}
A.r8.prototype={
$1(a){this.a.aX(new A.bv("IndexedDB open blocked"))},
$S:1}
A.tr.prototype={
$1(a){return A.bm(a[1])},
$S:209}
A.yZ.prototype={
v_(){var s={}
s.dart=new A.z_(this).$0()
return s},
iC(a){return this.wT(a)},
wT(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(v.G.WebAssembly.instantiateStreaming(a,p.v_()),t.m),$async$iC)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iC,r)}}
A.z_.prototype={
$0(){var s=this.a.a,r=A.bm(v.G.Object),q=A.bm(r.create.apply(r,[null]))
q.error_log=A.d6(s.gwY())
q.localtime=A.c6(s.gwW())
q.xOpen=A.EA(s.gyZ())
q.xDelete=A.pR(s.gyO())
q.xAccess=A.ic(s.gyG())
q.xFullPathname=A.ic(s.gyV())
q.xRandomness=A.pR(s.gz0())
q.xSleep=A.c6(s.gz5())
q.xCurrentTimeInt64=A.c6(s.gyM())
q.xClose=A.d6(s.gyK())
q.xRead=A.ic(s.gz2())
q.xWrite=A.ic(s.gzd())
q.xTruncate=A.c6(s.gz9())
q.xSync=A.c6(s.gz7())
q.xFileSize=A.c6(s.gyT())
q.xLock=A.c6(s.gyX())
q.xUnlock=A.c6(s.gzb())
q.xCheckReservedLock=A.c6(s.gyI())
q.xDeviceCharacteristics=A.d6(s.gj5())
q.xFileControl=A.pR(s.gyR())
q.xSectorSize=A.d6(s.gj7())
q["dispatch_()v"]=A.d6(s.gvr())
q["dispatch_()i"]=A.d6(s.gvm())
q.dispatch_update=A.EA(s.gvp())
q.dispatch_xFunc=A.ic(s.gvx())
q.dispatch_xStep=A.ic(s.gvB())
q.dispatch_xInverse=A.ic(s.gvz())
q.dispatch_xValue=A.c6(s.gvD())
q.dispatch_xFinal=A.c6(s.gvv())
q.dispatch_compare=A.EA(s.gvt())
q.dispatch_busy=A.c6(s.gvk())
q.changeset_apply_filter=A.c6(s.gvi())
q.changeset_apply_conflict=A.pR(s.gvg())
return q},
$S:35}
A.hG.prototype={}
A.qj.prototype={
iI(){var s=0,r=A.h(t.H),q=this,p,o
var $async$iI=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.d6(new A.qm(o))
new A.at(p,t.h1).aB(A.JL(o,t.m))
s=2
return A.a(p,$async$iI)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$iI,r)},
el(a,b){return this.tA(a,b)},
tA(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$el=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Jb(),b)
o=A.LV(p)
s=2
return A.a(A.Pj(new A.ql(a,o,p),t.mj),$async$el)
case 2:s=3
return A.a(o.b.a,$async$el)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$el,r)},
rY(a){return this.el(new A.qk(a),"readwrite")}}
A.qm.prototype={
$1(a){var s=A.bm(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:18}
A.ql.prototype={
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
A.qk.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].b4(a),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.kq.prototype={
pB(a){var s=A.Cn(new A.AX(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.Cn(new A.AY(this))},
jV(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
th(a){return this.jV(a,9007199254740992,0)},
ti(a,b){return this.jV(a,9007199254740992,b)},
iA(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$iA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.t(t.N,t.S)
k=new A.fb(p.d.index("fileName").openKeyCursor(),t.nz)
case 3:s=5
return A.a(k.k(),$async$iA)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.u(A.A("Await moveNext() first"))
n=o.key
n.toString
A.H(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ak(A.fk(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iA,r)},
ih(a){return this.w6(a)},
w6(a){var s=0,r=A.h(t.u),q,p=this,o
var $async$ih=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cN(p.d.index("fileName").getKey(a),t.W),$async$ih)
case 3:q=o.ak(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)},
jW(a){return A.cN(this.d.get(a),t.mU).W(new A.AW(a),t.m)},
eW(a,b){return this.pb(a,b)},
pb(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jW(a),$async$eW)
case 3:h=d
g=h.length
f=new A.cH(new Uint8Array(g),g)
e=new A.fb(p.e.openCursor(p.th(a)),t.nz)
g=t.i,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eW)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.u(A.A("Await moveNext() first"))
k=n.a(l.key)
j=A.ak(A.fk(k[1]))
if(j>=h.length){s=5
break}i=new A.AZ(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.xK(A.bm(l.value)).W(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eW,r)},
i9(a){return this.uX(a)},
uX(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$i9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
o=A
s=3
return A.a(A.cN(p.d.put({name:a,length:0}),t.W),$async$i9)
case 3:q=o.ak(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)},
az(a,b){return this.yz(a,b)},
yz(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$az=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
s=2
return A.a(q.jW(a),$async$az)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.O(new A.T(o,n),n.i("o.E"))
B.b.aj(m)
s=3
return A.a(A.DJ(new A.Z(m,new A.B_(new A.B0(q,a),b),A.a1(m).i("Z<1,y<~>>")),t.H),$async$az)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.fb(q.d.openCursor(a),t.nz)
s=6
return A.a(l.k(),$async$az)
case 6:s=7
return A.a(A.cN(l.gn().update({name:p.name,length:b.c}),t.X),$async$az)
case 7:case 5:return A.e(null,r)}})
return A.f($async$az,r)},
dQ(a,b,c){return this.yb(0,b,c)},
yb(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
s=2
return A.a(q.jW(b),$async$dQ)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cN(q.e.delete(q.ti(b,B.c.L(c,4096)*4096)),t.X),$async$dQ)
case 5:case 4:o=new A.fb(q.d.openCursor(b),t.nz)
s=6
return A.a(o.k(),$async$dQ)
case 6:s=7
return A.a(A.cN(o.gn().update({name:p.name,length:c}),t.X),$async$dQ)
case 7:return A.e(null,r)}})
return A.f($async$dQ,r)},
ib(a){return this.ve(a)},
ve(a){var s=0,r=A.h(t.H),q=this,p
var $async$ib=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.DJ(A.l([A.cN(q.e.delete(q.jV(a,9007199254740992,0)),p),A.cN(q.d.delete(a),p)],t.iw),t.H),$async$ib)
case 2:return A.e(null,r)}})
return A.f($async$ib,r)}}
A.AX.prototype={
$0(){this.a.b.ak()},
$S:2}
A.AY.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aX(r)},
$S:2}
A.AW.prototype={
$1(a){if(a==null)throw A.b(A.aD(this.a,"fileId","File not found in database"))
else return a},
$S:212}
A.AZ.prototype={
$1(a){var s=this.a
s.dh(s,this.b,J.bV(a,0,this.c))},
$S:213}
A.B0.prototype={
oG(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cN(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.mU),$async$$2)
case 2:m=d
l=t.i.a(B.f.gac(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cN(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cN(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.oG(a,b)},
$S:214}
A.B_.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:215}
A.Ay.prototype={
u5(a,b,c){B.f.dh(this.b.nH(a,new A.Az(this,a)),b,c)},
uA(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.L(q,4096)
o=B.c.an(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.u5(p*4096,o,J.bV(B.f.gac(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.Az.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.dh(s,0,J.bV(B.f.gac(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:216}
A.pg.prototype={}
A.dQ.prototype={
fi(a){var s=this
if(s.e||s.d.a==null)A.u(A.hF(10))
if(a.kJ(s.x)){s.cV(!0)
return a.d.a}else return A.be(null,t.H)},
cV(a){return this.tW(a)},
tW(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.aq(0)
s=5
return A.a(p.d.rY(n).b8(new A.u8(p,n,a)),$async$cV)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cV,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.fi(new A.ko(new A.u9(),new A.at(new A.w($.C,t.D),t.F)))
p.e=!0
p.cV(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.ga_(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
e7(a,b){return this.qW(a,b)},
qW(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$e7=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.ih(b),$async$e7)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$e7,r)},
fb(){var s=0,r=A.h(t.H),q=this,p
var $async$fb=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.el(new A.u7(q,p),"readonly"),$async$fb)
case 2:s=3
return A.a(A.K7(p,t.H),$async$fb)
case 3:return A.e(null,r)}})
return A.f($async$fb,r)},
d3(){return this.cV(!1)},
j3(a,b){return this.w.d.I(a)?1:0},
l5(a,b){var s=this
s.w.d.G(0,a)
if(!s.y.G(0,a))s.fi(new A.ki(s,a,new A.at(new A.w($.C,t.D),t.F)))},
l6(a){return new v.G.URL(a,"file:///").pathname},
dS(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.FG(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dS(new A.jU(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.fi(new A.hQ(p,o,new A.at(new A.w($.C,t.D),t.F)))
return new A.i_(new A.p8(p,q.a,o),0)},
l8(a){}}
A.u8.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.u(A.A("Future already completed"))
p.cM(null)}o.cV(this.c)},
$S:2}
A.u9.prototype={
$1(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.u7.prototype={
$1(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.iA(),$async$$1)
case 2:m=c
l=q.a
l.z.D(0,m)
p=m.ga0(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.eW(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.p8.prototype={
j6(a,b){this.b.j6(a,b)},
gj5(){return 0},
gj7(){return 4096},
l4(){return this.b.d>=2?1:0},
j4(){},
h3(){return this.b.h3()},
l7(a){this.b.d=a
return null},
l9(a){},
o0(a,b){return 12},
h4(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.u(A.hF(10))
s.b.h4(a)
if(!r.y.E(0,s.c))r.fi(new A.ko(new A.AV(s,a),new A.at(new A.w($.C,t.D),t.F)))},
la(a){this.b.d=a
return null},
eU(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.u(A.hF(10))
s=m.c
if(l.y.E(0,s)){m.b.eU(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cH(new Uint8Array(0),0)
q=J.bV(B.f.gac(r.a),0,r.b)
m.b.eU(a,b)
p=new Uint8Array(a.length)
B.f.dh(p,0,a)
o=A.l([],t.p8)
n=$.C
o.push(new A.pg(b,p))
l.fi(new A.i8(l,s,q,o,new A.at(new A.w(n,t.D),t.F)))},
$ibx:1,
$ik4:1}
A.AV.prototype={
$1(a){return this.oF(a)},
oF(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.e7(a,o.c),$async$$1)
case 3:q=n.dQ(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:27}
A.bj.prototype={
kJ(a){a.hz(a.c,this,!1)
return!0}}
A.ko.prototype={
b4(a){return this.w.$1(a)}}
A.ki.prototype={
kJ(a){var s,r,q,p
if(!a.gF(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.ki)if(s.x===r)return!1
else s=s.gfO()
else if(s instanceof A.i8){q=s.gfO()
if(s.x===r){p=s.a
p.toString
p.kb(A.n(s).i("bf.E").a(s))}s=q}else if(s instanceof A.hQ){if(s.x===r){r=s.a
r.toString
r.kb(A.n(s).i("bf.E").a(s))
return!1}s=s.gfO()}else break}a.hz(a.c,this,!1)
return!0},
b4(a){return this.y3(a)},
y3(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.e7(a,o),$async$b4)
case 2:n=c
p.z.G(0,o)
s=3
return A.a(a.ib(n),$async$b4)
case 3:return A.e(null,r)}})
return A.f($async$b4,r)}}
A.hQ.prototype={
b4(a){return this.y0(a)},
y0(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.i9(p),$async$b4)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$b4,r)}}
A.i8.prototype={
kJ(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.i8)if(r.x===s){B.b.D(r.z,this.z)
return!1}else r=r.gfO()
else if(r instanceof A.hQ){if(r.x===s)break
r=r.gfO()}else break
a.hz(a.c,this,!1)
return!0},
b4(a){return this.y4(a)},
y4(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$b4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.Ay(m,A.t(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.p)(m),++o){n=m[o]
l.uA(n.a,n.b)}k=a
s=3
return A.a(q.w.e7(a,q.x),$async$b4)
case 3:s=2
return A.a(k.az(c,l),$async$b4)
case 2:return A.e(null,r)}})
return A.f($async$b4,r)}}
A.fU.prototype={
a7(){return"FileType."+this.b}}
A.hq.prototype={
c4(){var s=this.d
if(s!=null)return s
throw A.b(A.A("VFS closed"))},
j3(a,b){var s=$.Ds().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.c4().aY(s)?1:0},
l5(a,b){var s=$.Ds().h(0,a)
if(s==null){this.e.d.G(0,a)
return null}else this.c4().fH(s,!1)},
l6(a){return new v.G.URL(a,"file:///").pathname},
dS(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dS(a,b)
s=$.Ds().h(0,p)
if(s==null)return q.e.dS(a,b)
r=q.c4()
if(!r.aY(s))if((b&4)!==0){r.dG(s).truncate(0)
r.fH(s,!0)}else throw A.b(B.el)
return new A.i_(new A.pw(q,s,(b&8)!==0),0)},
l8(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
da(a,b){return this.xe(a,b)},
bC(a){return this.da(a,!1)},
xe(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$da=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.y0(a,b)
s=2
return A.a(m.$1("meta"),$async$da)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$da)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$da)
case 4:o=d
n=q.d=new A.Be(new Uint8Array(2),l,p,o)
if(k){n.fH(B.b4,p.getSize()>0)
n.fH(B.b5,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$da,r)}}
A.y0.prototype={
oA(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a4(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a4(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.oA(a)},
$S:217}
A.pw.prototype={
nJ(a,b){return A.FD(this.a.c4().dG(this.b),a,{at:b})},
l4(){return this.d>=2?1:0},
j4(){var s=this.a,r=this.b
s.c4().dG(r).flush()
if(this.c)s.c4().fH(r,!1)},
h3(){return this.a.c4().dG(this.b).getSize()},
l7(a){this.d=a},
l9(a){this.a.c4().dG(this.b).flush()},
h4(a){this.a.c4().dG(this.b).truncate(a)},
la(a){this.d=a},
eU(a,b){if(A.FE(this.a.c4().dG(this.b),a,{at:b})<a.length)throw A.b(B.en)}}
A.Be.prototype={
aY(a){var s=this.a
A.FD(this.b,s,{at:0})
return s[a.a]!==0},
fH(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.K(s)
s[a.a]=r
A.FE(this.b,s,{at:0})},
dG(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.yT.prototype={
py(a,b){var s=this,r=s.c
r.a!==$&&A.dE()
r.a=s
r=t.S
A.AA(new A.yU(s),r)
A.AA(new A.yV(s),r)
s.r=A.AA(new A.yW(s),r)
s.w=A.AA(new A.yX(s),r)},
eq(a,b){var s=J.J(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.c2(this.b.buffer,0,null)
B.f.aA(q,r,r+s.gm(a),a)
B.f.kA(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cY(a){return this.eq(a,0)},
n9(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
n7(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
n8(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.yU.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.yV.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.yW.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.yX.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.iH.prototype={}
A.x2.prototype={
pv(a){var s,r=this,q=r.a
q.start()
r.c=A.by(q,"message",new A.x6(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.ld()
q.toString
A.k6(q,s,null,null,!1).W(new A.x7(r),t.P)}},
jJ(a){return this.r8(a)},
r8(a){var s=0,r=A.h(t.H),q=this
var $async$jJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.OF(a,new A.x3(q),q.gwv(),new A.x4(q),new A.x5(q))
return A.e(null,r)}})
return A.f($async$jJ,r)},
ha(a,b,c){return this.oZ(a,b,c,c)},
oZ(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$ha=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.JB(null))
o=p.e++
n=new A.w($.C,t.a7)
p.f.j(0,o,new A.at(n,t.h1))
a.i=o
p.a.postMessage(a,A.ij(a))
s=3
return A.a(n,$async$ha)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.L0(m))
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
rs(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.b0(s,s.r,s.e,A.n(s).i("b0<2>"));r.k();)r.d.aX(new A.iD(a))
s.aq(0)
p.ak()},
mc(){return this.rs(null)}}
A.x6.prototype={
$1(a){if(a.data=="_disconnect"){this.a.mc()
return}this.a.jJ(A.bm(a.data))},
$S:1}
A.x7.prototype={
$1(a){this.a.mc()
a.a.ak()},
$S:218}
A.x5.prototype={
$1(a){var s=this.a.f.G(0,a.i)
if(s!=null)s.aB(a)},
$S:18}
A.x4.prototype={
$1(a){return this.os(a)},
os(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.vo(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bF(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.B(a0)
k=A.af(a0)
if(!(l instanceof A.dF)){b.console.error("Error in worker: "+J.X(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.cj){h=A.K_(b)
g=0}else{g=b instanceof A.dF?1:null
h=null}f={e:J.X(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.G(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.ij(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:219}
A.x3.prototype={
$1(a){var s=this.a.r.G(0,a.i)
if(s!=null)s.abort()},
$S:18}
A.iD.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iI:1}
A.rG.prototype={
cD(a){return this.wU(a)},
wU(a){var s=0,r=A.h(t.R),q
var $async$cD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.z1(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cD,r)}}
A.lV.prototype={}
A.ro.prototype={}
A.f5.prototype={}
A.me.prototype={
iD(){var s=0,r=A.h(t.H),q=this
var $async$iD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.bC(q.b),$async$iD)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iD,r)},
kV(){var s=0,r=A.h(t.H),q=this
var $async$kV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kV,r)}}
A.tJ.prototype={
y6(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
r0(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.z8.prototype={
$1(a){var s=new A.w($.C,t.D),r=new A.dc(new A.at(s,t.F))
this.a.a=r
this.b.aB(r)
return A.K8(s)},
$S:220}
A.z9.prototype={
$2(a,b){var s,r,q
A.bm(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bz(new A.dF("Operation was cancelled"),b)
else q.bz(a,b)}return null},
$S:221}
A.dc.prototype={}
A.m0.prototype={
guM(){if(this.c.a)return!1
return!this.d||this.f!=null},
dZ(a){return this.pG(a)},
pG(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dZ=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.ld()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.k6(n,o.a,null,o.grd(),!0),$async$dZ)
case 6:m=c
s=7
return A.a(A.k6(n,o.b,a,null,!1),$async$dZ)
case 7:l=c
j=o.e
j=j==null?null:j.iD()
s=8
return A.a(j instanceof A.w?j:A.bF(j,t.H),$async$dZ)
case 8:o.f=new A.a_(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.ak()
j=l
if(j!=null)j.a.ak()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dZ,r)},
re(){this.nL()},
kO(a,b,c){return this.c.j_(new A.rV(this,a,b,c),b,c)},
nL(){return this.c.l3(new A.rW(this),t.H)}}
A.rV.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dZ(r.c).W(new A.rU(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rU.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rW.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kV()
s.a.ak()
r.a.ak()
p.f=null}},
$S:2}
A.jr.prototype={
j_(a,b,c){return this.yy(a,b,c,c)},
l3(a,b){return this.j_(a,null,b)},
yy(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$j_=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.as)
h.a=!1
o=new A.w7(h,p)
if(!p.a){h.a=p.a=!0
q=A.iX(a,c).b8(o)
s=1
break}else{n={}
m=new A.w($.C,c.i("w<0>"))
l=new A.at(m,c.i("at<0>"))
n.a=null
h=new A.w6(h,n,l,a,c)
if(!g)n.a=A.by(b,"abort",new A.w5(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.a9(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ai(j,0,i,h,n)
B.b.ai(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.b8(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$j_,r)}}
A.w7.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gF(0)){s=r.b
if(s===r.c)A.u(A.av());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.w6.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.aB(A.iX(r.d,r.e))},
$S:0}
A.w5.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.G(0,r.d)
s.aX(B.as)}},
$S:1}
A.eE.prototype={
gnR(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
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
A.tb.prototype={
$1(a){if(a!=null)return A.H(a)
return null},
$S:222}
A.mZ.prototype={
a7(){return"MessageType."+this.b}}
A.xN.prototype={
vo(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.ip(a,b)
case"connect":return p.kD(a,b)
case"custom":return p.eA(a,b)
case"fileSystemExists":return p.fC(a,b)
case"fileSystemFlush":return p.fD(a,b)
case"fileSystemAccess":return p.fB(a,b)
case"runQuery":return p.it(a,b)
case"exclusiveLock":return p.io(a,b)
case"releaseLock":s=p.bI(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.u(A.A("Lock to be released is not active."))
q.b.ak()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.il(a,b)
case"openAdditionalConnection":return p.iq(a,b)
case"updateRequest":return p.iu(a,b)
case"rollbackRequest":return p.is(a,b)
case"commitRequest":return p.im(a,b)
case"dedicatedCompatibilityCheck":return p.e9(a,b)
case"sharedCompatibilityCheck":return p.e9(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.e9(a,b)
default:r=A.fl(new A.bJ(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.w($.C,t.hl)
q.cL(r)
return q}}}
A.dM.prototype={
a7(){return"FileSystemImplementation."+this.b}}
A.cG.prototype={
a7(){return"TypeCode."+this.b},
v4(a){var s=null
switch(this.a){case 0:s=A.u(A.U("Unsupported type code",null))
break
case 1:a=A.ak(A.fk(a))
s=a
break
case 2:s=A.GD(t.bJ.a(a).toString(),null)
break
case 3:A.fk(a)
s=a
break
case 4:A.H(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.ia(a)
s=a
break
case 6:break}return s}}
A.eG.prototype={
n1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.U("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aJ:B.b9[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ak(A.fk(h))))
if(k!==0)a.bS(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bS(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.fk(h))
if(k!==0)a.bS(k,e)
break
case 4:g=B.e.v(A.H(h))
k=s.dart_sqlite3_bind_text(d,i,c.cY(g),g.length)
if(k!==0)a.bS(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cY(h),h.length)
if(k!==0)a.bS(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bS(k,e)
break
case 7:f=A.ia(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bS(k,e)
break
case 0:throw A.b(A.a2("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mO()},
h(a,b){var s=this.c[b],r=s>=8?B.aJ:B.b9[s]
return r.v4(this.a[b])},
j(a,b,c){this.mO()},
mO(){throw A.b(A.a2("decodeValues list is unmodifiable"))}}
A.CJ.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:18}
A.r_.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r0.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aX(s)},
$S:1}
A.r3.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r4.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aX(s)},
$S:1}
A.r5.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aX(s)},
$S:1}
A.wZ.prototype={
vH(){var s,r,q,p
for(s=this.b,r=new A.b0(s,s.r,s.e,A.n(s).i("b0<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aq(0)}}
A.iT.prototype={
a7(){return"FileType."+this.b}}
A.e6.prototype={
a7(){return"StorageMode."+this.b}}
A.hi.prototype={
l(a){return"Remote error: "+this.a},
$iI:1}
A.dF.prototype={}
A.Cm.prototype={
$1(a){return A.bm(a.data)},
$S:224}
A.kE.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.hP.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)p[n].abort()
B.b.aq(p)
p=q.f
if(p!=null)p.b.ak()
s=2
return A.a(q.a.fq(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
mG(a){var s=new v.G.AbortController()
a.onabort=A.Cn(new A.Ad(s))
this.w.push(s)
return s},
l1(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.guM()){r=p.mG(b)
o=s.kO(c,r.signal,d).b8(new A.Ah(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.A("Requested operation on inactive lock state."))}if(o==null)o=A.iX(c,d)
q=p.a.z
return q instanceof A.dQ?o.b8(q.gw9()):o},
xa(a){var s=this,r=s.mG(a),q=new A.w($.C,t.hy),p=new A.aG(q,t.ho),o=t.H
A.DI(s.a.f.kO(new A.Ae(s,p),r.signal,o),new A.Af(p),o,t.K)
return q.b8(new A.Ag(s,r))}}
A.Ad.prototype={
$0(){return this.a.abort()},
$S:0}
A.Ah.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.Ae.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.C,t.D)
s.f=new A.a_(r,new A.aG(q,t.Q))
this.b.aB(r)
return q},
$S:3}
A.Af.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bz(a,b)},
$S:6}
A.Ag.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.hN.prototype={
pA(a,b,c){this.b.a.b8(new A.zY(this))},
e9(a,b){return this.r3(a,b)},
r3(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$e9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.n3(a),$async$e9)
case 3:q={r:d.gnR(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e9,r)},
kD(a,b){return this.wi(a,b)},
wi(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$kD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gm6()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.ij(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kD,r)},
eA(a,b){return this.wj(a,b)},
wj(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lQ(l)
n=a.r
s=7
return A.a(o.a.gcF(),$async$eA)
case 7:s=6
return A.a(d.d4(p,new A.ro(n)),$async$eA)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.d4(p,new A.lV(a)),$async$eA)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eA,r)},
ip(a,b){return this.wx(a,b)},
wx(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ip=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.l3(new A.A2(p,a),t.m),$async$ip)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
it(a,b){return this.wB(a,b)},
wB(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$it=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bI(a)
n=o.a
s=3
return A.a(n.gcF(),$async$it)
case 3:m=d
q=o.l1(a.z,b,new A.A5(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
io(a,b){return this.wn(a,b)},
wn(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$io=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bI(a).xa(b),$async$io)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$io,r)},
im(a,b){return this.wh(a,b)},
wh(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$im=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bI(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dX(n,new A.A_(p,o),a),$async$im)
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
return A.f($async$im,r)},
is(a,b){return this.wA(a,b)},
wA(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$is=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bI(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dX(n,new A.A4(p,o),a),$async$is)
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
return A.f($async$is,r)},
iu(a,b){return this.wD(a,b)},
wD(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bI(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dX(n,new A.A7(p,o),a),$async$iu)
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
return A.f($async$iu,r)},
iq(a,b){return this.wy(a,b)},
wy(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$iq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bI(a).a;++m.w
s=3
return A.a(A.CM(),$async$iq)
case 3:o=d
n=o.a
p.w.ls(o.b).x.push(A.GE(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iq,r)},
il(a,b){return this.wg(a,b)},
wg(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$il=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bI(a)
B.b.G(p.x,o)
s=3
return A.a(o.q(),$async$il)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)},
fD(a,b){return this.wq(a,b)},
wq(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bI(a).a.gdf(),$async$fD)
case 3:o=d
s=o instanceof A.dQ?4:5
break
case 4:s=6
return A.a(o.cV(!1),$async$fD)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
fB(a,b){return this.wo(a,b)},
wo(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bI(a)
n=B.ba[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gdf(),$async$fB)
case 4:s=3
return A.a(l.l1(null,k,new j.A0(d,n,m,a),t.m),$async$fB)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
fC(a,b){return this.wp(a,b)},
wp(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bI(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gdf(),$async$fC)
case 4:s=3
return A.a(n.l1(null,m,new l.A1(d,a),t.y),$async$fC)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
dX(a,b,c){return this.pd(a,b,c)},
pd(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dX)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dX,r)},
ww(a){},
fo(a){var s=0,r=A.h(t.X),q,p=this
var $async$fo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ha({r:a,z:null,i:0,d:null,t:"custom"},B.di,t.m),$async$fo)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
lQ(a){return B.b.kB(this.x,new A.zX(a))},
bI(a){var s=a.d
if(s!=null)return this.lQ(s)
else throw A.b(A.U("Request requires database id",null))},
$iFr:1}
A.zY.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.p)(p),++n
s=2
break
case 4:B.b.aq(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.A2.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cD(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.w7(h.d,A.K2(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gdf():m.gcF(),$async$$0)
case 8:l=A.GE(m,null)
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
return A.a(m.fq(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:225}
A.A5.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.A("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.eG(s,r,A.c2(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oU(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ak(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.vX(l,k.s,q)
s=o.d
return A.Ig(s.sqlite3_get_autocommit(p)!==0,m,A.ak(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:35}
A.A_.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcF(),$async$$0)
case 3:q=b.a.q9().gcK().b2(new A.zZ(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.zZ.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.ij(s))},
$S:74}
A.A4.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcF(),$async$$0)
case 3:q=b.a.ty().gcK().b2(new A.A3(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.A3.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.ij(s))},
$S:74}
A.A7.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcF(),$async$$0)
case 3:q=b.a.u6().gcK().b2(new A.A6(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:228}
A.A6.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.ij(s))},
$S:229}
A.A0.prototype={
$0(){var s,r,q,p=this,o=p.a.dS(new A.jU(A.Hi(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.h4(s.byteLength)
o.eU(A.c2(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.h3()
r=new Uint8Array(q)
o.j6(r,0)
q={r:t.i.a(J.Jj(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.j4()}},
$S:35}
A.A1.prototype={
$0(){return this.a.j3(A.Hi(B.ba[this.b.f]),0)===1},
$S:49}
A.zX.prototype={
$1(a){return a.b===this.a},
$S:230}
A.m1.prototype={
gdf(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gdf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iX(new A.rZ(p),t.H):o,$async$gdf)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gdf,r)},
gcF(){var s=0,r=A.h(t.n),q,p=this,o
var $async$gcF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iX(new A.rY(p),t.n):o,$async$gcF)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcF,r)},
fq(){var s=0,r=A.h(t.H),q=this
var $async$fq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$fq)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fq,r)},
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
if(j!=null)j.vH()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.F5()
A.DG(m)
k=l.a.get(m)
if(k==null)A.u(A.A("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bF(j,t.H),$async$q)
case 6:q.f.nL()
return A.e(null,r)}})
return A.f($async$q,r)},
mk(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.G(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a_(s,!0)
p=a.iM(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.G(0,new A.T(n,A.n(n).i("T<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a_(p,!0)}return new A.a_(p,!1)},
vX(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aJ(b,B.k)
else{s=null
r=null
q=this.mk(a,b)
s=q.a
r=q.b
try{s.ew(new A.lW(c.guK()))}finally{if(r)s.dO()
else s.q()}}},
oU(a,b,c){var s,r=null,q=null,p=this.mk(a,b)
r=p.a
q=p.b
try{s=A.L1(r,c)
return s}finally{if(q)r.dO()
else r.q()}}}
A.rZ.prototype={
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
return A.a(A.y_("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.geu()
s=3
break
case 5:case 6:s=10
return A.a(A.mf("drift_db/"+l.c,k===B.az,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.geu()
s=3
break
case 7:s=11
return A.a(A.mF(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.geu()
s=3
break
case 8:l.z=A.DL("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rY.prototype={
$0(){var s=0,r=A.h(t.n),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gdf(),$async$$0)
case 4:n=b
o.no()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.eq(B.e.v(n.a),1),n,0)
if(m===0)A.u(A.A("could not register vfs"))
$.F5().j(0,n,m)
s=5
return A.a(l.f.kO(new A.rX(l,o),null,t.n),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:75}
A.rX.prototype={
$0(){var s=this.a
return s.a.b.iJ(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:75}
A.zs.prototype={
gm6(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.p7()
r.Q!==$&&A.Dq()
r.Q=s
q=s}return q},
eB(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eB=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.c5(A.cp(A.MX(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$eB)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.iH(i.port,i.lockName,null)
n.ls(l)
s=9
break
case 10:s=A.P2(m.t)?11:12
break
case 11:s=13
return A.a(n.n3(m),$async$eB)
case 13:k=b
j.postMessage(k.gnR())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$eB)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eB,r)},
ls(a){var s=this,r=A.LM(a,s.d++,s)
s.c.push(r)
r.b.a.b8(new A.zt(s,r))
return r},
n3(a){return this.x.l3(new A.zu(this,a),t.p6)},
cD(a){return this.wV(a)},
wV(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bm(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.A("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bF(n,t.he),$async$cD)
case 5:s=3
break
case 4:o=A.DI(q.b.cD(m),new A.zv(q),t.R,t.K)
q.r=o
s=6
return A.a(o,$async$cD)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cD,r)},
w7(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.b0(s,s.r,s.e,A.n(s).i("b0<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.az||b===B.b3
o=A.DT(t.cj)
n=c===0?null:new A.wZ(c,A.dV(null,null,t.N,t.fw))
n=new A.m1(this,r,a,b,d,new A.m0(q+"-outer",q,new A.jr(o),p),n)
s.j(0,r,n)
return n}}
A.zt.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.zu.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.eq(),$async$$0)
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
return A.a(A.pX(),$async$$0)
case 9:case 8:j=a1
i=A.aP(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gm6()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.ij(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hT(n,"message",!1,t.d4).gH(0),$async$$0)
case 15:e=b.JI(a.bm(a1.data))
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
return A.a(A.im(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a_(B.bm,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.CI(c),$async$$0)
case 23:if(a1)i.u(0,new A.a_(B.bn,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.eE(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:232}
A.zv.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:233}
A.kQ.prototype={}
A.p_.prototype={
gnm(){return new A.hT(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.pu.prototype={
gnm(){return new A.dA(new A.Bt(this),t.k8)},
q(){}}
A.Bt.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.by(this.a.a,"connect",new A.Bq(new A.Bu(s,r,a)),!1,t.m))
a.r=new A.Br(r)},
$S:234}
A.Bu.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.by(a,"message",new A.Bs(this.c),!1,t.m))},
$S:1}
A.Bs.prototype={
$1(a){this.a.uz(a)},
$S:1}
A.Bq.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bW(r,A.a1(r).i("bW<1,N>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.Br.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].A()},
$S:2}
A.p0.prototype={
p7(){var s=v.G
if(!("Worker" in s))return null
return new A.At(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.At.prototype={}
A.nW.prototype={
ghc(){return A.H(this.c)}}
A.yh.prototype={
gkN(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
j9(a){var s,r=this,q=r.d=J.Jn(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
nh(a,b){var s
if(this.j9(a))return
if(b==null)if(a instanceof A.eO)b="/"+a.a+"/"
else{s=J.X(a)
s=A.D(s,"\\","\\\\")
b='"'+A.D(s,'"','\\"')+'"'}this.lY(b)},
fz(a){return this.nh(a,null)},
w1(){if(this.c===this.b.length)return
this.lY("no more input")},
vW(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.u(A.b8("position must be greater than or equal to 0."))
else if(c>n.length)A.u(A.b8("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.u(A.b8("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.y1(s,r,new Uint32Array(q))
p.pw(new A.cu(n),s)
o=c+b
if(o>q)A.u(A.b8("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.u(A.b8("Start may not be negative, was "+c+"."))
throw A.b(new A.nW(n,a,new A.hU(p,c,o)))},
lY(a){this.vW("expected "+a+".",0,this.c)}}
A.hC.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.FH(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.FH(b,this))
s=this.a
s.$flags&2&&A.K(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.K(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lM(b)
B.f.aA(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.u3(q)
q=r.a
s=r.b++
q.$flags&2&&A.K(q)
q[s]=b},
lM(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
u3(a){var s=this.lM(null)
B.f.aA(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.aA(c,0,s,null,null))
s=this.a
if(d instanceof A.cH)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.p9.prototype={}
A.cH.prototype={}
A.DE.prototype={}
A.hT.prototype={
aa(a,b,c,d){return A.by(this.a,this.b,a,!1,this.$ti.c)},
bB(a,b,c){return this.aa(a,null,b,c)}}
A.km.prototype={
A(){var s=this,r=A.be(null,t.H)
if(s.b==null)return r
s.kc()
s.d=s.b=null
return r},
iH(a){var s,r=this
if(r.b==null)throw A.b(A.A("Subscription has been canceled."))
r.kc()
s=A.HQ(new A.Ax(a),t.m)
s=s==null?null:A.d6(s)
r.d=s
r.ka()},
bb(){if(this.b==null)return;++this.a
this.kc()},
b3(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.ka()},
ka(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
kc(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibw:1}
A.Aw.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.Ax.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dU.prototype
s.pj=s.l
s=A.bM.prototype
s.pf=s.np
s.pg=s.nq
s.pi=s.ns
s.ph=s.nr
s=A.bb.prototype
s.jb=s.aD
s.lp=s.aM
s.lq=s.b1
s=A.dy.prototype
s.pm=s.lJ
s.pn=s.m2
s.po=s.mD
s=A.M.prototype
s.lo=s.ai
s=A.aH.prototype
s.ln=s.uJ
s=A.kF.prototype
s.pp=s.q
s=A.o.prototype
s.pe=s.dR
s=A.lx.prototype
s.ll=s.ij
s=A.fE.prototype
s.lm=s.ft
s=A.hs.prototype
s.pl=s.a3
s.pk=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"N6","Ki",50)
r(A,"Nj","KM",10)
q(A,"NU","Lx",20)
q(A,"NV","Ly",20)
q(A,"NW","Lz",20)
q(A,"NX","Nl",15)
r(A,"HV","NM",0)
q(A,"NY","Nm",29)
s(A,"NZ","No",14)
r(A,"CD","Nn",0)
p(A,"O3",5,null,["$5"],["NG"],236,0)
p(A,"O8",4,null,["$1$4","$4"],["Cw",function(a,b,c,d){return A.Cw(a,b,c,d,t.z)}],237,0)
p(A,"Oa",5,null,["$2$5","$5"],["Cx",function(a,b,c,d,e){var i=t.z
return A.Cx(a,b,c,d,e,i,i)}],238,0)
p(A,"O9",6,null,["$3$6"],["EI"],239,0)
p(A,"O6",4,null,["$1$4","$4"],["HC",function(a,b,c,d){return A.HC(a,b,c,d,t.z)}],240,0)
p(A,"O7",4,null,["$2$4","$4"],["HD",function(a,b,c,d){var i=t.z
return A.HD(a,b,c,d,i,i)}],241,0)
p(A,"O5",4,null,["$3$4","$4"],["HB",function(a,b,c,d){var i=t.z
return A.HB(a,b,c,d,i,i,i)}],242,0)
p(A,"O1",5,null,["$5"],["NF"],243,0)
p(A,"Ob",4,null,["$4"],["Cy"],244,0)
p(A,"O0",5,null,["$5"],["NE"],245,0)
p(A,"O_",5,null,["$5"],["ND"],246,0)
p(A,"O4",4,null,["$4"],["NH"],247,0)
p(A,"O2",5,null,["$5"],["HA"],248,0)
var j
o(j=A.f8.prototype,"gf5","c1",0)
o(j,"gf6","c2",0)
n(A.f9.prototype,"guT",0,1,null,["$2","$1"],["bz","aX"],71,0,0)
m(A.w.prototype,"gjo","qe",14)
n(j=A.el.prototype,"guw",0,1,null,["$2","$1"],["bo","kh"],71,0,0)
l(j,"gpP","aD",17)
m(j,"gpJ","aM",14)
o(j,"gq5","b1",0)
o(j=A.eg.prototype,"gf5","c1",0)
o(j,"gf6","c2",0)
o(j=A.bb.prototype,"gf5","c1",0)
o(j,"gf6","c2",0)
o(A.hS.prototype,"gmh","rM",0)
l(j=A.c5.prototype,"grE","rF",17)
m(j,"grI","rJ",14)
o(j,"grG","rH",0)
o(j=A.hV.prototype,"gf5","c1",0)
o(j,"gf6","c2",0)
l(j,"gjD","jE",17)
m(j,"gjH","jI",121)
o(j,"gjF","jG",0)
o(j=A.i1.prototype,"gf5","c1",0)
o(j,"gf6","c2",0)
l(j,"gjD","jE",17)
m(j,"gjH","jI",14)
o(j,"gjF","jG",0)
s(A,"EO","MQ",41)
q(A,"EP","MR",43)
s(A,"Oh","Kq",50)
q(A,"Or","MU",37)
k(j=A.oP.prototype,"guv","u",17)
o(j,"geu","q",0)
q(A,"I_","OW",43)
s(A,"HZ","OV",41)
q(A,"Os","Lp",7)
p(A,"P8",2,null,["$1$2","$2"],["Ie",function(a,b){return A.Ie(a,b,t.cZ)}],249,0)
m(j=A.m4.prototype,"gvV","V",41)
l(j,"gwE","ad",43)
l(j,"gwL","wM",15)
q(A,"Of","JA",7)
o(j=A.jB.prototype,"grK","rL",0)
l(j,"grN","rO",130)
q(A,"Pk","KK",61)
q(A,"HY","JQ",251)
q(A,"On","JV",252)
q(A,"Op","Ke",253)
q(A,"Om","Jv",254)
q(A,"Oo","K1",255)
q(A,"pZ","JU",7)
q(A,"OM","FB",256)
r(A,"ON","NP",257)
r(A,"P4","MS",10)
r(A,"QD","MT",10)
q(A,"Pa","NC",258)
l(A.ng.prototype,"gxG","xH",9)
q(A,"Oj","DA",259)
l(j=A.nY.prototype,"gwt","wu",38)
l(j,"gwr","ws",137)
o(j,"grB","jT",0)
q(A,"Pq","Lh",61)
p(A,"Iv",1,null,["$2$where"],["OD"],260,0)
o(A.oU.prototype,"gwb","kC",0)
o(A.nr.prototype,"gkt","ft",0)
o(A.nb.prototype,"gkt","ft",0)
l(j=A.fE.prototype,"grC","rD",38)
o(j,"gmQ","eo",3)
m(A.oD.prototype,"gr4","hx",45)
m(A.oC.prototype,"gr1","r2",45)
m(A.oB.prototype,"gra","hy",45)
l(j=A.m_.prototype,"gwY","wZ",9)
m(j,"gwW","wX",188)
n(j,"gyZ",0,5,null,["$5"],["z_"],189,0,0)
n(j,"gyO",0,3,null,["$3"],["yP"],190,0,0)
n(j,"gyG",0,4,null,["$4"],["yH"],62,0,0)
n(j,"gyV",0,4,null,["$4"],["yW"],62,0,0)
n(j,"gz0",0,3,null,["$3"],["z1"],192,0,0)
m(j,"gz5","z6",63)
m(j,"gyM","yN",63)
l(j,"gyK","yL",47)
n(j,"gz2",0,4,null,["$4"],["z3"],65,0,0)
n(j,"gzd",0,4,null,["$4"],["ze"],65,0,0)
m(j,"gz9","za",196)
m(j,"gz7","z8",19)
m(j,"gyT","yU",19)
m(j,"gyX","yY",19)
m(j,"gzb","zc",19)
m(j,"gyI","yJ",19)
l(j,"gj5","yQ",47)
n(j,"gyR",0,3,null,["$3"],["yS"],198,0,0)
l(j,"gj7","z4",47)
l(j,"gvr","vs",20)
l(j,"gvm","vn",199)
n(j,"gvp",0,5,null,["$5"],["vq"],200,0,0)
n(j,"gvx",0,4,null,["$4"],["vy"],36,0,0)
n(j,"gvB",0,4,null,["$4"],["vC"],36,0,0)
n(j,"gvz",0,4,null,["$4"],["vA"],36,0,0)
m(j,"gvD","vE",68)
m(j,"gvv","vw",68)
n(j,"gvt",0,5,null,["$5"],["vu"],203,0,0)
m(j,"gvk","vl",204)
m(j,"gvi","vj",205)
n(j,"gvg",0,3,null,["$3"],["vh"],206,0,0)
o(j=A.dQ.prototype,"geu","q",3)
o(j,"gw9","d3",3)
o(A.hq.prototype,"geu","q",0)
o(A.m0.prototype,"grd","re",0)
l(A.eG.prototype,"guK","n1",223)
l(A.hN.prototype,"gwv","ww",1)
p(A,"Oc",1,null,["$2$where"],["Ow"],173,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.DR,J.mH,A.jP,J.fB,A.Al,A.oQ,A.o,A.lF,A.eC,A.Y,A.ah,A.M,A.xY,A.as,A.mX,A.d1,A.mb,A.oa,A.nI,A.m8,A.oA,A.dR,A.iU,A.om,A.k1,A.hZ,A.je,A.fJ,A.hW,A.cB,A.yL,A.na,A.iO,A.kC,A.vl,A.bN,A.b0,A.mU,A.eO,A.hY,A.oI,A.hw,A.BC,A.oR,A.pG,A.cA,A.p5,A.pD,A.kG,A.k9,A.oK,A.kr,A.pA,A.ar,A.ad,A.bb,A.kf,A.ob,A.kp,A.f9,A.cm,A.w,A.oJ,A.el,A.pB,A.kb,A.oG,A.p1,A.Au,A.ej,A.hS,A.c5,A.kl,A.C0,A.C2,A.C1,A.BZ,A.C_,A.BY,A.BV,A.pN,A.BU,A.BT,A.BX,A.BW,A.pM,A.pO,A.pL,A.i9,A.k8,A.p6,A.Bc,A.ei,A.pd,A.bf,A.pf,A.pF,A.pe,A.nV,A.lI,A.aH,A.oM,A.qs,A.oL,A.lG,A.pv,A.fa,A.B8,A.BD,A.pJ,A.dB,A.aQ,A.p4,A.aI,A.aF,A.Av,A.nd,A.jW,A.p3,A.bt,A.mG,A.V,A.W,A.pz,A.jY,A.nA,A.a7,A.kN,A.yQ,A.cn,A.mc,A.n9,A.B1,A.B2,A.m9,A.a8,A.m5,A.j3,A.eQ,A.i6,A.hX,A.jd,A.m4,A.n8,A.on,A.cv,A.cb,A.tK,A.qF,A.jc,A.jS,A.vB,A.jR,A.xX,A.rp,A.rF,A.Ak,A.eB,A.lw,A.lx,A.qo,A.n1,A.h_,A.qn,A.jB,A.wU,A.Bv,A.wJ,A.wr,A.jD,A.i2,A.wK,A.Bw,A.eM,A.dN,A.mB,A.cQ,A.dO,A.e7,A.wp,A.lN,A.jG,A.cc,A.ms,A.nu,A.aj,A.w3,A.xD,A.eY,A.cT,A.np,A.xV,A.nD,A.f2,A.bg,A.f4,A.nP,A.e4,A.a6,A.qC,A.qD,A.qE,A.tc,A.fi,A.Ba,A.pC,A.i0,A.uk,A.iL,A.qZ,A.iK,A.dW,A.iP,A.bs,A.vs,A.cP,A.ts,A.mm,A.qq,A.ex,A.fC,A.nT,A.iS,A.tf,A.vj,A.nR,A.wV,A.pc,A.vC,A.w4,A.bA,A.ng,A.vk,A.BE,A.xB,A.dj,A.ba,A.cx,A.no,A.cV,A.xU,A.cz,A.xL,A.b6,A.dP,A.fV,A.eL,A.c3,A.lP,A.ca,A.nC,A.xS,A.oT,A.hL,A.qc,A.br,A.ra,A.nY,A.dg,A.eV,A.jf,A.aS,A.mY,A.Bj,A.Bh,A.wb,A.qp,A.jb,A.jJ,A.wg,A.nn,A.xc,A.b1,A.xl,A.hx,A.yj,A.b9,A.lt,A.hv,A.cU,A.he,A.hf,A.cs,A.oc,A.yl,A.x9,A.hc,A.pH,A.xb,A.jI,A.k0,A.yy,A.cX,A.cy,A.eW,A.bQ,A.Bo,A.yB,A.oU,A.hO,A.fE,A.zw,A.hJ,A.oz,A.z7,A.ph,A.rG,A.f5,A.oV,A.zc,A.zd,A.hK,A.oD,A.oB,A.rh,A.yi,A.ne,A.nf,A.y1,A.nL,A.hs,A.tL,A.bz,A.cI,A.cC,A.nO,A.cD,A.cj,A.ll,A.rI,A.em,A.y3,A.eD,A.bh,A.lA,A.rn,A.pq,A.Bi,A.bY,A.lW,A.dw,A.jU,A.z2,A.yY,A.z4,A.z3,A.ec,A.dx,A.m_,A.dl,A.fb,A.yZ,A.qj,A.kq,A.Ay,A.pg,A.p8,A.Be,A.yT,A.iH,A.xN,A.iD,A.lV,A.me,A.tJ,A.dc,A.m0,A.jr,A.eE,A.wZ,A.hi,A.kE,A.hP,A.m1,A.zs,A.kQ,A.p0,A.At,A.yh,A.DE,A.km])
q(J.mH,[J.mK,J.j5,J.aJ,J.bB,J.fX,J.eN,J.dS])
q(J.aJ,[J.dU,J.z,A.h5,A.jt])
q(J.dU,[J.nh,J.ea,J.bZ])
r(J.mI,A.jP)
r(J.uh,J.z)
q(J.eN,[J.j4,J.mL])
q(A.o,[A.ef,A.L,A.cw,A.aq,A.iQ,A.f3,A.dm,A.ed,A.dd,A.fe,A.oH,A.py,A.i4,A.eP,A.jO])
q(A.ef,[A.ez,A.kR])
r(A.kj,A.ez)
r(A.kg,A.kR)
q(A.eC,[A.qH,A.qA,A.qG,A.ua,A.yz,A.D4,A.D6,A.zD,A.zC,A.C7,A.C6,A.tH,A.tC,A.AC,A.AB,A.AN,A.AQ,A.yd,A.ye,A.yb,A.As,A.Ar,A.Bn,A.AT,A.Ao,A.Bb,A.vG,A.B6,A.rm,A.zQ,A.tD,A.D8,A.De,A.Df,A.CN,A.qv,A.qx,A.qz,A.lz,A.qr,A.C9,A.qt,A.vK,A.CV,A.wI,A.wH,A.ws,A.wD,A.wE,A.wF,A.wG,A.wB,A.wC,A.wT,A.wN,A.wO,A.wL,A.wQ,A.rk,A.rl,A.xF,A.xA,A.wX,A.y5,A.y6,A.uO,A.uP,A.uR,A.vc,A.uS,A.uT,A.uU,A.uV,A.uW,A.uX,A.uY,A.uZ,A.v_,A.v0,A.v2,A.v3,A.v4,A.v5,A.v6,A.v7,A.v8,A.uA,A.uC,A.uG,A.un,A.um,A.uE,A.uD,A.uK,A.uL,A.uM,A.uN,A.uu,A.uw,A.uy,A.uq,A.uo,A.uI,A.uJ,A.ut,A.ur,A.t9,A.t8,A.ta,A.t7,A.t6,A.t5,A.t4,A.t0,A.t1,A.t2,A.vt,A.vv,A.vx,A.vz,A.vu,A.tt,A.tu,A.Dd,A.ti,A.tg,A.tj,A.tk,A.tm,A.to,A.tq,A.Dj,A.vF,A.vE,A.vD,A.w_,A.vW,A.vX,A.vZ,A.vY,A.Dn,A.x8,A.CU,A.Cj,A.Cl,A.Cf,A.Cg,A.xt,A.xv,A.xw,A.xx,A.xO,A.xR,A.xT,A.qV,A.qY,A.qU,A.qX,A.qR,A.qQ,A.qN,A.qW,A.qS,A.qP,A.qO,A.qT,A.qK,A.qd,A.qe,A.rc,A.rb,A.yw,A.ym,A.yu,A.yp,A.yq,A.yr,A.yn,A.CK,A.CL,A.qb,A.qa,A.vV,A.vT,A.vU,A.vM,A.vN,A.vO,A.vP,A.vQ,A.vR,A.wd,A.we,A.wm,A.wk,A.wj,A.wi,A.wl,A.xj,A.xd,A.xf,A.xh,A.xm,A.xr,A.yk,A.CX,A.Di,A.Dg,A.Dh,A.CO,A.CP,A.yK,A.yI,A.yE,A.yG,A.yC,A.Ab,A.A8,A.xH,A.xG,A.zx,A.z6,A.vp,A.vq,A.vA,A.Ai,A.Aj,A.D2,A.D1,A.zf,A.zr,A.zm,A.zq,A.zi,A.zh,A.zk,A.zn,A.zo,A.zp,A.ri,A.rj,A.CA,A.tN,A.tM,A.tO,A.tQ,A.tS,A.tP,A.u5,A.y7,A.rQ,A.Bz,A.Db,A.Dk,A.Dl,A.qi,A.Am,A.An,A.r1,A.r2,A.r6,A.r7,A.r8,A.tr,A.qm,A.qk,A.AW,A.AZ,A.B_,A.u9,A.u7,A.AV,A.y0,A.yU,A.yV,A.yW,A.yX,A.x6,A.x7,A.x5,A.x4,A.x3,A.z8,A.rU,A.w5,A.tb,A.CJ,A.r_,A.r0,A.r3,A.r4,A.r5,A.Cm,A.zZ,A.A3,A.A6,A.zX,A.Bt,A.Bu,A.Bs,A.Bq,A.Aw,A.Ax])
q(A.qH,[A.zV,A.qB,A.rg,A.ui,A.D5,A.C8,A.CB,A.tI,A.tB,A.AD,A.AO,A.AR,A.zz,A.AS,A.vm,A.vI,A.B9,A.zP,A.BN,A.yR,A.BM,A.BL,A.tF,A.tE,A.qu,A.qw,A.qy,A.ly,A.w2,A.vL,A.wo,A.wu,A.wM,A.wq,A.Ch,A.xE,A.xz,A.wY,A.xC,A.xW,A.Dr,A.CH,A.ul,A.up,A.us,A.t3,A.tv,A.Cs,A.w0,A.Do,A.Ci,A.xy,A.xP,A.xQ,A.qM,A.qf,A.yo,A.Ct,A.za,A.zg,A.zl,A.tR,A.rT,A.B0,A.z9,A.Af,A.zv])
r(A.bW,A.kg)
q(A.Y,[A.eA,A.bM,A.dy,A.pa])
q(A.ah,[A.dT,A.ns,A.du,A.mM,A.ol,A.nB,A.p2,A.jC,A.j8,A.lp,A.bJ,A.d0,A.ok,A.bv,A.lL])
q(A.M,[A.hE,A.nF,A.ou,A.hH,A.eG,A.hC])
r(A.cu,A.hE)
q(A.qG,[A.Da,A.x0,A.zE,A.zF,A.BG,A.BF,A.C5,A.zH,A.zI,A.zK,A.zL,A.zJ,A.zG,A.tG,A.AE,A.AJ,A.AI,A.AG,A.AF,A.AM,A.AL,A.AK,A.AP,A.yc,A.yf,A.ya,A.By,A.Bx,A.zy,A.zU,A.zT,A.Bf,A.Bd,A.Ca,A.Cb,A.Aq,A.Ap,A.Bm,A.Bl,A.Cv,A.BQ,A.BP,A.t_,A.Cp,A.Cq,A.vJ,A.wn,A.wz,A.wA,A.ww,A.wt,A.wx,A.wy,A.wv,A.wR,A.wS,A.wP,A.uQ,A.v1,A.vd,A.ve,A.vf,A.vg,A.vh,A.vi,A.v9,A.va,A.vb,A.uz,A.uB,A.uF,A.uv,A.ux,A.uH,A.te,A.vw,A.vy,A.th,A.tl,A.tn,A.tp,A.Ck,A.xu,A.td,A.u6,A.tz,A.ty,A.y9,A.qJ,A.qL,A.r9,A.rf,A.re,A.rd,A.yt,A.ys,A.yv,A.xk,A.xe,A.xg,A.xi,A.xn,A.xs,A.xq,A.xp,A.xo,A.yx,A.wh,A.wc,A.yJ,A.yH,A.yF,A.yD,A.Ac,A.A9,A.Aa,A.xI,A.wa,A.vr,A.ze,A.zj,A.u4,A.tT,A.u_,A.u0,A.u1,A.u2,A.tY,A.tZ,A.tU,A.tV,A.tW,A.tX,A.u3,A.AU,A.rR,A.rS,A.rO,A.rN,A.rP,A.rK,A.rJ,A.rL,A.rM,A.BA,A.BB,A.Dm,A.rt,A.rq,A.rv,A.rx,A.rz,A.rs,A.ry,A.rD,A.rB,A.rA,A.ru,A.rw,A.rC,A.rr,A.qg,A.qh,A.z_,A.ql,A.AX,A.AY,A.Az,A.u8,A.rV,A.rW,A.w7,A.w6,A.Ad,A.Ah,A.Ae,A.Ag,A.zY,A.A2,A.A5,A.A_,A.A4,A.A7,A.A0,A.A1,A.rZ,A.rY,A.rX,A.zt,A.zu,A.Br])
q(A.L,[A.a0,A.eJ,A.T,A.ao,A.aK,A.fd,A.kt])
q(A.a0,[A.cE,A.Z,A.bE,A.ja,A.pb])
r(A.eI,A.cw)
r(A.iM,A.f3)
r(A.fN,A.dm)
r(A.eH,A.dd)
q(A.hZ,[A.pi,A.pj,A.pk])
q(A.pi,[A.a_,A.kz,A.kA,A.i_,A.pl])
r(A.ek,A.pj)
q(A.pk,[A.fh,A.pm])
r(A.kM,A.je)
r(A.d_,A.kM)
r(A.iI,A.d_)
q(A.fJ,[A.aE,A.iY])
q(A.cB,[A.iJ,A.kB])
r(A.dK,A.iJ)
r(A.j1,A.ua)
r(A.jy,A.du)
q(A.yz,[A.y8,A.iz])
q(A.bM,[A.j7,A.j6,A.ks])
r(A.h4,A.h5)
q(A.jt,[A.js,A.h6])
q(A.h6,[A.kv,A.kx])
r(A.kw,A.kv)
r(A.e0,A.kw)
r(A.ky,A.kx)
r(A.c1,A.ky)
q(A.e0,[A.n3,A.n4])
q(A.c1,[A.n5,A.n6,A.n7,A.ju,A.jv,A.jw,A.eU])
r(A.kH,A.p2)
q(A.ad,[A.i3,A.jZ,A.kk,A.dA,A.kn,A.ke,A.iw,A.hT])
r(A.bi,A.i3)
r(A.aZ,A.bi)
q(A.bb,[A.eg,A.hV,A.i1])
r(A.f8,A.eg)
r(A.ka,A.kf)
q(A.f9,[A.aG,A.at])
q(A.el,[A.d2,A.i5])
r(A.kD,A.oG)
q(A.p1,[A.cl,A.hR])
r(A.ku,A.d2)
r(A.ff,A.kn)
q(A.pL,[A.oW,A.pp])
q(A.dy,[A.eh,A.kh])
r(A.cJ,A.kB)
q(A.nV,[A.kF,A.BH,A.zM,A.px])
r(A.B4,A.kF)
q(A.lI,[A.eK,A.lu,A.uj])
q(A.eK,[A.ln,A.mS,A.or])
q(A.aH,[A.pE,A.ix,A.lv,A.mP,A.mO,A.os,A.k3,A.my])
q(A.pE,[A.lo,A.mT])
r(A.zR,A.oM)
q(A.qs,[A.zN,A.hM,A.oP,A.BO])
r(A.zA,A.zN)
r(A.mN,A.j8)
r(A.B5,A.lG)
r(A.B7,A.B8)
r(A.pP,A.pJ)
r(A.BR,A.pP)
q(A.bJ,[A.dk,A.j_])
r(A.oZ,A.kN)
r(A.ho,A.i6)
r(A.ps,A.my)
r(A.Bp,A.tK)
r(A.pt,A.Bp)
r(A.lj,A.qF)
r(A.jT,A.xX)
r(A.oX,A.lj)
r(A.lY,A.oX)
r(A.oY,A.vB)
r(A.rE,A.oY)
r(A.nv,A.eB)
r(A.lD,A.lw)
r(A.dI,A.jZ)
q(A.lx,[A.w1,A.xM])
r(A.k_,A.qo)
r(A.nU,A.k_)
r(A.iB,A.a8)
r(A.jE,A.jB)
q(A.cc,[A.lJ,A.lR,A.k5,A.fR,A.o5,A.ls])
q(A.nu,[A.mh,A.mi,A.mn,A.mj,A.mg,A.mw,A.mq,A.ml,A.mk,A.mt,A.mo,A.ma,A.nQ,A.nc,A.lE,A.mz,A.lH,A.mx,A.ny,A.n2,A.nq,A.lU,A.lT,A.m6,A.mC,A.lk,A.md,A.nE,A.od,A.oe,A.og,A.oi,A.oh,A.of,A.ox,A.oy,A.ow,A.lm,A.ov,A.ot,A.nm,A.lK,A.nz,A.lQ,A.lO,A.nw,A.lh,A.li,A.lS,A.o3,A.o8,A.nZ,A.o_,A.o1,A.o9,A.o2,A.o6])
q(A.aj,[A.mv,A.iR,A.fT,A.mr,A.fS,A.fQ,A.hu,A.h8,A.iA,A.mA,A.hk,A.hl,A.h3,A.hh,A.fK,A.fM,A.fW,A.fz,A.fP,A.hn,A.fI,A.fH,A.hB,A.hI,A.hd,A.fG,A.o4,A.o0,A.o7])
q(A.w3,[A.jm,A.jp,A.jn,A.jq,A.jj,A.jk,A.ji,A.jo,A.jl])
q(A.Av,[A.b7,A.cM,A.e9,A.ni,A.iC,A.dJ,A.df,A.lM,A.cd,A.j0,A.dY,A.e_,A.ew,A.ck,A.ct,A.cY,A.fy,A.h9,A.jz,A.m7,A.jV,A.wf,A.fU,A.mZ,A.dM,A.cG,A.iT,A.e6])
q(A.cT,[A.j9,A.jx,A.it,A.iu])
r(A.q9,A.tc)
q(A.dW,[A.eb,A.hD,A.h7,A.iE,A.jF,A.iV,A.dp,A.jN,A.jL,A.jQ,A.hm,A.jX,A.jh,A.iG,A.fL,A.jK])
q(A.hm,[A.k2,A.iW])
q(A.qq,[A.xa,A.z5])
r(A.mQ,A.pc)
q(A.bA,[A.lX,A.hj,A.fZ,A.hp,A.eF,A.ev,A.fA])
r(A.jH,A.lX)
q(A.dj,[A.am,A.cg,A.dG,A.da])
r(A.fF,A.oT)
r(A.zB,A.Bh)
q(A.b9,[A.dt,A.cW,A.f_,A.bK,A.ce,A.cf,A.di,A.e2,A.dL,A.hy,A.db,A.e5])
q(A.fE,[A.nr,A.nb])
r(A.vo,A.rG)
r(A.mW,A.f5)
q(A.hK,[A.k7,A.f6])
r(A.pK,A.oD)
r(A.oC,A.pK)
r(A.ue,A.yi)
q(A.ue,[A.wW,A.yS,A.zb])
r(A.mp,A.nL)
q(A.hs,[A.hU,A.nN])
r(A.hr,A.nO)
r(A.dn,A.nN)
r(A.ht,A.eD)
r(A.lB,A.bh)
q(A.lB,[A.mD,A.dQ,A.hq])
q(A.lA,[A.p7,A.pw])
r(A.pn,A.rn)
r(A.po,A.pn)
r(A.nx,A.po)
r(A.pr,A.pq)
r(A.ci,A.pr)
q(A.bf,[A.f7,A.bj])
r(A.hG,A.y3)
q(A.bj,[A.ko,A.ki,A.hQ,A.i8])
r(A.x2,A.xN)
r(A.ro,A.lV)
r(A.dF,A.hi)
r(A.hN,A.x2)
q(A.kQ,[A.p_,A.pu])
r(A.nW,A.hr)
r(A.p9,A.hC)
r(A.cH,A.p9)
s(A.hE,A.om)
s(A.kR,A.M)
s(A.kv,A.M)
s(A.kw,A.iU)
s(A.kx,A.M)
s(A.ky,A.iU)
s(A.d2,A.kb)
s(A.i5,A.pB)
s(A.kM,A.pF)
s(A.pP,A.nV)
s(A.oX,A.rp)
s(A.oY,A.rF)
s(A.pc,A.qD)
s(A.oT,A.qE)
s(A.pK,A.oB)
s(A.pn,A.M)
s(A.po,A.n8)
s(A.pq,A.on)
s(A.pr,A.Y)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ae:"double",b3:"num",j:"String",P:"bool",W:"Null",q:"List",k:"Object",F:"Map",N:"JSObject"},mangledNames:{},types:["~()","~(N)","W()","y<~>()","y<~>(bQ)","y<W>(bQ)","W(k,aM)","j(j)","h8(~)","~(i)","i()","~(q<i>)","V<j,@>(@,@)","P(j)","~(k,aM)","P(k?)","0&()","~(k?)","W(N)","i(bx,i)","~(~())","W(k)","y<b1>()","y<W>()","P(@)","P(bs)","P(c3)","y<~>(kq)","W(@)","~(@)","j(@)","~(ds)","V<j,k?>(@,@)","W(~)","~(j,j)","N()","~(dl,i,i,i)","@(@)","~(a6)","P(bz)","k?(k?)","P(k?,k?)","k?(F<j,k?>)","i(k?)","~(k?,k?)","y<k?>(oE,hJ)","y<W>(rH)","i(bx)","y<~>(~)","P()","i(@,@)","~(j,k?)","bs()","P(dP)","y<q<j>>()","j(F<j,k?>)","y<@>()","W(k?)","P(b6)","y<i>()","i(cQ)","ae(i)","i(bh,i,i,i)","i(bh,i)","y<cQ>(j)","i(bx,i,i,bB)","j(eS)","~(j,@)","~(dl,i)","@()","~(@,@)","~(k[aM?])","@(j)","y<bw<~>>()","~(~)","y<f5>()","y<F<j,k?>>(F<j,k?>)","hn(q<cV>)","fH(br?)","fT(q<bs>)","fS(i)","fQ(i)","hu(P)","h3(q<j>)","y<cz>()","hh(cz)","y<q<cV>>()","P(j,j)","i(j)","hB(~)","P(i0)","~(F<j,k?>?)","~(q<F<j,k?>>)","W(j,j[k?])","ad<q<i>>()","~(dZ<q<i>>)","~(f2)","~(q<br>)","F<j,k?>(ci)","~(i,@)","k?(y4)","fa<@,@>(bL<@>)","j(j,j)","h_()","y<bs>(bQ)","i(i,i)","i(i)","i(i,cP)","P(cP)","j(cP)","V<j,dN>(j,hv)","~(q<cv>)","y<ad<q<i>>>()","j?(F<j,k?>)","cU(@)","i(c3,c3)","y<~>?()","y<aS?>(jf)","w<@>?()","P(dY)","y<q<j>>(F<j,k?>)","~(@,aM)","j(cx)","j()","P(cx)","b6()","dP()","fV()","eL()","c3()","~(jD)","y<F<j,k?>?>(j)","P(i)","j(i,i)","y<e7>(j)","br()","i(e7)","~(cs)","aF(i)","y<bg>(bg)","bg(bg)","bg(k)","W(bg)","y<W>(~)","~(j)","aS(aS?)","aS/(k?)","y<k?>(k?)","F<j,k?>(q<k?>)","k?(aS?)","y<i>(bQ)","0&(j,i?)","P(cM)","j(i[i])","cX()","cy()","eW()","P(e9)","j(ct)","P(ct)","~(j,j?)","y<@>(bQ)","q<F<j,k?>>(cz)","y<P>(j)","y<~>(j)","q<eY>(k?)","P(ca<k?>)","P(b7)","q<cT>(k?)","~(cc)","F<k?,k?>(j)","q<k?>(j)","q<k?>()","k(k?{where!j})","j(j?)","j?()","i(cI)","i(+(j,k),+(j,k))","k(cI)","k(bz)","i(bz,bz)","q<cI>(V<k,q<bz>>)","dn()","j(k?)","~(i,j,i)","~(E2,q<E3>)","W(bZ,bZ)","~(S,aw,S,~())","~(bB,i)","bx?(bh,i,i,i,i)","i(bh,i,i)","k?(~)","i(bh?,i,i)","i(+(j,k?),+(j,k?))","~(e4)","W(~())","i(bx,bB)","y<F<j,k?>?>()","i(bx,i,i)","i(i())","~(~(i,j,i),i,i,i,bB)","hk(F<j,k?>?)","y<q<F<j,k?>?>>()","i(dl,i,i,i,i)","i(i(i),i)","i(E6,i)","i(E6,i,i)","hl(q<F<j,k?>?>)","@(@,j)","N(z<k?>)","y<q<k?>>()","W(@,aM)","N(N?)","~(ey)","y<~>(i,cZ)","y<~>(i)","cZ()","y<N>(j)","W(dc)","y<W>(N)","N(k)","W(k?,aM)","j?(k?)","~(eD)","N(N)","y<N>()","y<b3?>()","y<j>()","y<bw<cD>>()","~(cD)","P(hP)","hd(i)","y<eE>()","0&(k?,aM)","~(dZ<N>)","fG(i)","~(S?,aw?,S,k,aM)","0^(S?,aw?,S,0^())<k?>","0^(S?,aw?,S,0^(1^),1^)<k?,k?>","0^(S?,aw?,S,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(S,aw,S,0^())<k?>","0^(1^)(S,aw,S,0^(1^))<k?,k?>","0^(1^,2^)(S,aw,S,0^(1^,2^))<k?,k?,k?>","ar?(S,aw,S,k,aM?)","~(S?,aw?,S,~())","ds(S,aw,S,aF,~())","ds(S,aw,S,aF,~(ds))","~(S,aw,S,j)","S(S?,aw?,S,k8?,F<k?,k?>?)","0^(0^,0^)<b3>","fI(q<br>)","fK(i)","fM(q<k?>)","fW(q<j>)","fz(b3?)","fP(j)","bs(F<j,k?>)","aI()","P(bA?)","br(F<j,k?>)","b9(k?{where!j})","P(+(i,j))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a_&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.kz&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.kA&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.i_&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.pl&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ek&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fh&&A.Ii(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.pm&&A.Ii(a,b.a)}}
A.Mg(v.typeUniverse,JSON.parse('{"bZ":"dU","nh":"dU","ea":"dU","PM":"h5","z":{"q":["1"],"aJ":[],"L":["1"],"N":[],"o":["1"],"bk":["1"]},"mK":{"P":[],"an":[]},"j5":{"W":[],"an":[]},"aJ":{"N":[]},"dU":{"aJ":[],"N":[]},"mI":{"jP":[]},"uh":{"z":["1"],"q":["1"],"aJ":[],"L":["1"],"N":[],"o":["1"],"bk":["1"]},"eN":{"ae":[],"b3":[],"ay":["b3"]},"j4":{"ae":[],"i":[],"b3":[],"ay":["b3"],"an":[]},"mL":{"ae":[],"b3":[],"ay":["b3"],"an":[]},"dS":{"j":[],"ay":["j"],"bk":["@"],"an":[]},"ef":{"o":["2"]},"ez":{"ef":["1","2"],"o":["2"],"o.E":"2"},"kj":{"ez":["1","2"],"ef":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"kg":{"M":["2"],"q":["2"],"ef":["1","2"],"L":["2"],"o":["2"]},"bW":{"kg":["1","2"],"M":["2"],"q":["2"],"ef":["1","2"],"L":["2"],"o":["2"],"M.E":"2","o.E":"2"},"eA":{"Y":["3","4"],"F":["3","4"],"Y.V":"4","Y.K":"3"},"dT":{"ah":[]},"ns":{"ah":[]},"cu":{"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"L":{"o":["1"]},"a0":{"L":["1"],"o":["1"]},"cE":{"a0":["1"],"L":["1"],"o":["1"],"a0.E":"1","o.E":"1"},"cw":{"o":["2"],"o.E":"2"},"eI":{"cw":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"Z":{"a0":["2"],"L":["2"],"o":["2"],"a0.E":"2","o.E":"2"},"aq":{"o":["1"],"o.E":"1"},"iQ":{"o":["2"],"o.E":"2"},"f3":{"o":["1"],"o.E":"1"},"iM":{"f3":["1"],"L":["1"],"o":["1"],"o.E":"1"},"dm":{"o":["1"],"o.E":"1"},"fN":{"dm":["1"],"L":["1"],"o":["1"],"o.E":"1"},"eJ":{"L":["1"],"o":["1"],"o.E":"1"},"ed":{"o":["1"],"o.E":"1"},"dd":{"o":["+(i,1)"],"o.E":"+(i,1)"},"eH":{"dd":["1"],"L":["+(i,1)"],"o":["+(i,1)"],"o.E":"+(i,1)"},"hE":{"M":["1"],"q":["1"],"L":["1"],"o":["1"]},"bE":{"a0":["1"],"L":["1"],"o":["1"],"a0.E":"1","o.E":"1"},"iI":{"d_":["1","2"],"F":["1","2"]},"fJ":{"F":["1","2"]},"aE":{"fJ":["1","2"],"F":["1","2"]},"fe":{"o":["1"],"o.E":"1"},"iY":{"fJ":["1","2"],"F":["1","2"]},"iJ":{"cB":["1"],"f0":["1"],"L":["1"],"o":["1"]},"dK":{"cB":["1"],"f0":["1"],"L":["1"],"o":["1"]},"jy":{"du":[],"ah":[]},"mM":{"ah":[]},"ol":{"ah":[]},"na":{"I":[]},"kC":{"aM":[]},"nB":{"ah":[]},"bM":{"Y":["1","2"],"F":["1","2"],"Y.V":"2","Y.K":"1"},"T":{"L":["1"],"o":["1"],"o.E":"1"},"ao":{"L":["1"],"o":["1"],"o.E":"1"},"aK":{"L":["V<1,2>"],"o":["V<1,2>"],"o.E":"V<1,2>"},"j7":{"bM":["1","2"],"Y":["1","2"],"F":["1","2"],"Y.V":"2","Y.K":"1"},"j6":{"bM":["1","2"],"Y":["1","2"],"F":["1","2"],"Y.V":"2","Y.K":"1"},"hY":{"nt":[],"eS":[]},"oH":{"o":["nt"],"o.E":"nt"},"hw":{"eS":[]},"py":{"o":["eS"],"o.E":"eS"},"h4":{"aJ":[],"N":[],"ey":[],"an":[]},"h5":{"aJ":[],"N":[],"ey":[],"an":[]},"jt":{"aJ":[],"N":[]},"pG":{"ey":[]},"js":{"aJ":[],"Dy":[],"N":[],"an":[]},"h6":{"c_":["1"],"aJ":[],"N":[],"bk":["1"]},"e0":{"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bk":["ae"],"o":["ae"]},"c1":{"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"]},"n3":{"e0":[],"tw":[],"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bk":["ae"],"o":["ae"],"an":[],"M.E":"ae"},"n4":{"e0":[],"tx":[],"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bk":["ae"],"o":["ae"],"an":[],"M.E":"ae"},"n5":{"c1":[],"ub":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"n6":{"c1":[],"uc":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"n7":{"c1":[],"ud":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"ju":{"c1":[],"yN":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"jv":{"c1":[],"yO":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"jw":{"c1":[],"yP":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"eU":{"c1":[],"cZ":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"p2":{"ah":[]},"kH":{"du":[],"ah":[]},"ar":{"ah":[]},"w":{"y":["1"]},"dZ":{"bL":["1"]},"kG":{"ds":[]},"k9":{"iF":["1"]},"i4":{"o":["1"],"o.E":"1"},"aZ":{"bi":["1"],"i3":["1"],"ad":["1"],"ad.T":"1"},"f8":{"eg":["1"],"bb":["1"],"bw":["1"],"bb.T":"1"},"kf":{"bL":["1"]},"ka":{"kf":["1"],"bL":["1"]},"ob":{"I":[]},"jC":{"ah":[]},"f9":{"iF":["1"]},"aG":{"f9":["1"],"iF":["1"]},"at":{"f9":["1"],"iF":["1"]},"jZ":{"ad":["1"]},"el":{"bL":["1"]},"d2":{"kb":["1"],"el":["1"],"bL":["1"]},"i5":{"el":["1"],"bL":["1"]},"bi":{"i3":["1"],"ad":["1"],"ad.T":"1"},"eg":{"bb":["1"],"bw":["1"],"bb.T":"1"},"kD":{"oG":["1"]},"bb":{"bw":["1"],"bb.T":"1"},"i3":{"ad":["1"]},"hS":{"bw":["1"]},"kk":{"ad":["1"],"ad.T":"1"},"dA":{"ad":["1"],"ad.T":"1"},"ku":{"d2":["1"],"kb":["1"],"el":["1"],"dZ":["1"],"bL":["1"]},"kn":{"ad":["2"]},"hV":{"bb":["2"],"bw":["2"],"bb.T":"2"},"ff":{"kn":["1","2"],"ad":["2"],"ad.T":"2"},"kl":{"bL":["1"]},"i1":{"bb":["2"],"bw":["2"],"bb.T":"2"},"ke":{"ad":["2"],"ad.T":"2"},"pL":{"S":[]},"oW":{"S":[]},"pp":{"S":[]},"i9":{"aw":[]},"dy":{"Y":["1","2"],"F":["1","2"],"Y.V":"2","Y.K":"1"},"eh":{"dy":["1","2"],"Y":["1","2"],"F":["1","2"],"Y.V":"2","Y.K":"1"},"kh":{"dy":["1","2"],"Y":["1","2"],"F":["1","2"],"Y.V":"2","Y.K":"1"},"fd":{"L":["1"],"o":["1"],"o.E":"1"},"ks":{"bM":["1","2"],"Y":["1","2"],"F":["1","2"],"Y.V":"2","Y.K":"1"},"cJ":{"cB":["1"],"f0":["1"],"L":["1"],"o":["1"]},"eP":{"o":["1"],"o.E":"1"},"M":{"q":["1"],"L":["1"],"o":["1"]},"Y":{"F":["1","2"]},"kt":{"L":["2"],"o":["2"],"o.E":"2"},"je":{"F":["1","2"]},"d_":{"F":["1","2"]},"ja":{"a0":["1"],"L":["1"],"o":["1"],"a0.E":"1","o.E":"1"},"cB":{"f0":["1"],"L":["1"],"o":["1"]},"kB":{"cB":["1"],"f0":["1"],"L":["1"],"o":["1"]},"fa":{"bL":["1"]},"pa":{"Y":["j","@"],"F":["j","@"],"Y.V":"@","Y.K":"j"},"pb":{"a0":["j"],"L":["j"],"o":["j"],"a0.E":"j","o.E":"j"},"ln":{"eK":[]},"pE":{"aH":["j","q<i>"]},"lo":{"aH":["j","q<i>"],"aH.T":"q<i>"},"ix":{"aH":["q<i>","j"],"aH.T":"j"},"lv":{"aH":["j","q<i>"],"aH.T":"q<i>"},"j8":{"ah":[]},"mN":{"ah":[]},"mP":{"aH":["k?","j"],"aH.T":"j"},"mO":{"aH":["j","k?"],"aH.T":"k?"},"mS":{"eK":[]},"mT":{"aH":["j","q<i>"],"aH.T":"q<i>"},"or":{"eK":[]},"os":{"aH":["j","q<i>"],"aH.T":"q<i>"},"k3":{"aH":["q<i>","j"],"aH.T":"j"},"Fk":{"ay":["Fk"]},"aI":{"ay":["aI"]},"ae":{"b3":[],"ay":["b3"]},"aF":{"ay":["aF"]},"i":{"b3":[],"ay":["b3"]},"q":{"L":["1"],"o":["1"]},"b3":{"ay":["b3"]},"nt":{"eS":[]},"f0":{"L":["1"],"o":["1"]},"j":{"ay":["j"]},"aQ":{"ay":["Fk"]},"lp":{"ah":[]},"du":{"ah":[]},"bJ":{"ah":[]},"dk":{"ah":[]},"j_":{"dk":[],"ah":[]},"d0":{"ah":[]},"ok":{"d0":[],"ah":[]},"bv":{"ah":[]},"lL":{"ah":[]},"nd":{"ah":[]},"jW":{"ah":[]},"p3":{"I":[]},"bt":{"I":[]},"mG":{"d0":[],"I":[],"ah":[]},"pz":{"aM":[]},"jO":{"o":["i"],"o.E":"i"},"kN":{"oo":[]},"cn":{"oo":[]},"oZ":{"oo":[]},"n9":{"I":[]},"ud":{"q":["i"],"L":["i"],"o":["i"]},"cZ":{"q":["i"],"L":["i"],"o":["i"]},"yP":{"q":["i"],"L":["i"],"o":["i"]},"ub":{"q":["i"],"L":["i"],"o":["i"]},"yN":{"q":["i"],"L":["i"],"o":["i"]},"uc":{"q":["i"],"L":["i"],"o":["i"]},"yO":{"q":["i"],"L":["i"],"o":["i"]},"tw":{"q":["ae"],"L":["ae"],"o":["ae"]},"tx":{"q":["ae"],"L":["ae"],"o":["ae"]},"a8":{"F":["2","3"]},"ho":{"i6":["1","f0<1>"],"i6.E":"1"},"my":{"aH":["q<i>","cv"]},"ps":{"aH":["q<i>","cv"],"aH.T":"cv"},"jS":{"I":[]},"nF":{"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"nv":{"I":[]},"lw":{"Dz":[]},"lD":{"Dz":[]},"dI":{"ad":["q<i>"],"ad.T":"q<i>"},"eB":{"I":[]},"nU":{"k_":[]},"iB":{"a8":["j","j","1"],"F":["j","1"],"a8.V":"1","a8.K":"j","a8.C":"j"},"jB":{"nX":[]},"jE":{"nX":[]},"dO":{"I":[]},"mv":{"aj":[]},"iR":{"aj":[]},"fT":{"aj":[]},"mr":{"aj":[]},"fS":{"aj":[]},"fQ":{"aj":[]},"hu":{"aj":[]},"h8":{"aj":[]},"iA":{"aj":[]},"mA":{"aj":[]},"hk":{"aj":[]},"hl":{"aj":[]},"h3":{"aj":[]},"hh":{"aj":[]},"fK":{"aj":[]},"fM":{"aj":[]},"fW":{"aj":[]},"fz":{"aj":[]},"fP":{"aj":[]},"hn":{"aj":[]},"fI":{"aj":[]},"fH":{"aj":[]},"hB":{"aj":[]},"hI":{"aj":[]},"hd":{"aj":[]},"fG":{"aj":[]},"o4":{"aj":[]},"o0":{"aj":[]},"o7":{"aj":[]},"jG":{"I":[]},"lJ":{"cc":[]},"lR":{"cc":[]},"k5":{"cc":[]},"fR":{"cc":[]},"j9":{"cT":[]},"jx":{"cT":[]},"it":{"cT":[]},"iu":{"cT":[]},"o5":{"cc":[]},"ls":{"cc":[]},"f4":{"I":[]},"fi":{"I":[]},"iL":{"rH":[]},"dW":{"I":[]},"eb":{"I":[]},"hD":{"I":[]},"h7":{"I":[]},"iE":{"I":[]},"jF":{"I":[]},"iV":{"I":[]},"dp":{"I":[]},"jN":{"I":[]},"jL":{"I":[]},"jQ":{"I":[]},"hm":{"I":[]},"k2":{"I":[]},"iW":{"I":[]},"jX":{"I":[]},"jh":{"I":[]},"iG":{"I":[]},"fL":{"I":[]},"jK":{"I":[]},"ex":{"I":[]},"fC":{"I":[]},"jH":{"bA":[]},"am":{"dj":[]},"cg":{"dj":[]},"dG":{"dj":[]},"da":{"dj":[]},"hL":{"I":[]},"dg":{"I":[]},"hj":{"bA":[]},"fZ":{"bA":[]},"hp":{"bA":[]},"eF":{"bA":[]},"ev":{"bA":[]},"fA":{"bA":[]},"lX":{"bA":[]},"b9":{"I":[]},"dt":{"I":[]},"cW":{"I":[]},"f_":{"I":[]},"bK":{"I":[]},"ce":{"I":[]},"cf":{"I":[]},"di":{"I":[]},"e2":{"I":[]},"dL":{"I":[]},"hy":{"I":[]},"db":{"I":[]},"e5":{"I":[]},"hc":{"nX":[]},"ph":{"FZ":[]},"mW":{"f5":[]},"oV":{"oE":[],"Gp":[]},"k7":{"hK":[]},"f6":{"hK":[]},"nf":{"I":[]},"mp":{"cC":[],"ay":["cC"]},"hU":{"dn":[],"ay":["nM"]},"cC":{"ay":["cC"]},"nL":{"cC":[],"ay":["cC"]},"nM":{"ay":["nM"]},"nN":{"ay":["nM"]},"nO":{"I":[]},"hr":{"bt":[],"I":[]},"hs":{"ay":["nM"]},"dn":{"ay":["nM"]},"cj":{"I":[]},"y4":{"q":["k?"],"L":["k?"],"o":["k?"]},"ou":{"M":["k?"],"y4":[],"q":["k?"],"L":["k?"],"o":["k?"],"M.E":"k?"},"ht":{"eD":[]},"mD":{"bh":[]},"p7":{"k4":[],"bx":[]},"ci":{"Y":["j","@"],"F":["j","@"],"Y.V":"@","Y.K":"j"},"nx":{"M":["ci"],"q":["ci"],"L":["ci"],"o":["ci"],"M.E":"ci"},"dw":{"I":[]},"lB":{"bh":[]},"lA":{"k4":[],"bx":[]},"f7":{"bf":["f7"],"bf.E":"f7"},"dx":{"E3":[]},"ec":{"E2":[]},"hH":{"M":["dx"],"q":["dx"],"L":["dx"],"o":["dx"],"M.E":"dx"},"iw":{"ad":["1"],"ad.T":"1"},"dQ":{"bh":[]},"bj":{"bf":["bj"]},"p8":{"k4":[],"bx":[]},"ko":{"bj":[],"bf":["bj"],"bf.E":"bj"},"ki":{"bj":[],"bf":["bj"],"bf.E":"bj"},"hQ":{"bj":[],"bf":["bj"],"bf.E":"bj"},"i8":{"bj":[],"bf":["bj"],"bf.E":"bj"},"hq":{"bh":[]},"pw":{"k4":[],"bx":[]},"iD":{"I":[]},"eG":{"M":["k?"],"q":["k?"],"L":["k?"],"o":["k?"],"M.E":"k?"},"hi":{"I":[]},"dF":{"I":[]},"hN":{"Fr":[]},"p_":{"kQ":["N"]},"pu":{"kQ":["N"]},"nW":{"bt":[],"I":[]},"cH":{"hC":["i"],"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"hC":{"M":["1"],"q":["1"],"L":["1"],"o":["1"]},"p9":{"hC":["i"],"M":["i"],"q":["i"],"L":["i"],"o":["i"]},"hT":{"ad":["1"],"ad.T":"1"},"km":{"bw":["1"]}}'))
A.Mf(v.typeUniverse,JSON.parse('{"iU":1,"om":1,"hE":1,"kR":2,"iJ":1,"h6":1,"bL":1,"jZ":1,"pB":1,"p1":1,"pF":2,"je":2,"kB":1,"kM":2,"lG":1,"lI":2,"kF":1,"n8":1,"on":2,"nu":1,"fE":1,"Ju":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aa
return{fM:s("@<@>"),ie:s("Ju<k?>"),ko:s("ev"),bG:s("ew"),om:s("iw<z<k?>>"),hw:s("cs"),lo:s("ey"),fW:s("Dy"),jA:s("iA"),fo:s("iB<j>"),iv:s("a6"),eg:s("Fr"),dF:s("Dz()"),E:s("cu"),bU:s("ca<k?>"),fw:s("eD"),bP:s("ay<@>"),p6:s("eE"),br:s("iF<N>"),n8:s("br"),pb:s("bA"),x:s("aE<j,k?>"),M:s("dK<j>"),d_:s("eF"),lp:s("m1"),O:s("L<@>"),C:s("ah"),fq:s("cc"),mA:s("I"),eZ:s("me"),d9:s("b6"),oX:s("mm"),A:s("bs"),k4:s("iS"),f6:s("cP"),pk:s("tw"),kI:s("tx"),Y:s("bt"),gY:s("PI"),mi:s("F<j,k?>/(F<j,k?>)"),nW:s("y<N>"),fB:s("y<q<j>>"),b3:s("y<F<j,k?>>"),fr:s("y<aS>"),mj:s("y<W>"),g7:s("y<@>"),fP:s("y<dc?>"),d3:s("y<F<j,k?>?>"),op:s("y<aS?>"),n1:s("y<k?>(oE,hJ)"),jN:s("y<hG?>"),co:s("dN"),w:s("cQ"),cF:s("dQ"),m6:s("ub"),bW:s("uc"),jx:s("ud"),nZ:s("j3<@>"),e7:s("o<@>"),gi:s("z<a6>"),aw:s("z<ca<@>>"),oq:s("z<ca<k?>>"),oS:s("z<lN>"),i5:s("z<cv>"),mK:s("z<b6>"),kB:s("z<ms>"),iw:s("z<y<~>>"),mr:s("z<dP>"),kG:s("z<N>"),bi:s("z<q<F<j,k?>>>"),h2:s("z<q<k>>"),ae:s("z<q<eY>>"),dO:s("z<q<k?>>"),ic:s("z<F<j,k>>"),d:s("z<F<j,k?>>"),e8:s("z<n1>"),i7:s("z<eV>"),hf:s("z<k>"),ox:s("z<eW>"),fi:s("z<cx>"),my:s("z<cy>"),k:s("z<dj>"),eK:s("z<cT>"),k1:s("z<he>"),g2:s("z<hf>"),bo:s("z<jJ>"),cM:s("z<eY>"),gc:s("z<np>"),eb:s("z<e4>"),fU:s("z<+controller,sync(dZ<cD>,P)>"),lw:s("z<+controller,sync(dZ<~>,P)>"),kC:s("z<+(e6,j)>"),jO:s("z<+(j,F<j,k?>)>"),l5:s("z<+(j,k)>"),fj:s("z<+(j,b6?)>"),iE:s("z<+(j,k?)>"),kW:s("z<+(i,j,F<j,k?>)>"),aY:s("z<+(hO,k?,k?,aM?)>"),g1:s("z<cU>"),cP:s("z<nD>"),kj:s("z<cV>"),lE:s("z<ht>"),c0:s("z<c3>"),dw:s("z<bw<@>>"),s:s("z<j>"),en:s("z<hx>"),bs:s("z<cZ>"),fC:s("z<ba>"),m2:s("z<Gp>"),az:s("z<hN>"),i4:s("z<hO>"),fV:s("z<hP>"),pg:s("z<bz>"),dg:s("z<cI>"),p8:s("z<pg>"),mc:s("z<i0>"),gy:s("z<i2>"),gR:s("z<pH>"),gk:s("z<ae>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<ar?>"),eU:s("z<F<j,k?>?>"),c:s("z<k?>"),mf:s("z<j?>"),iy:s("bk<@>"),T:s("j5"),m:s("N"),bJ:s("bB"),g:s("bZ"),dX:s("c_<@>"),aq:s("aJ"),fZ:s("mQ"),kk:s("eP<f7>"),p3:s("eP<bj>"),hI:s("eQ<@>"),ba:s("q<br>"),ck:s("q<bs>"),ip:s("q<N>"),ew:s("q<F<j,k>>"),J:s("q<F<j,k?>>"),eT:s("q<eV>"),hg:s("q<eW>"),a6:s("q<cy>"),jX:s("q<hf>"),kR:s("q<cU>"),fE:s("q<cV>"),a:s("q<j>"),bR:s("q<hx>"),j:s("q<@>"),L:s("q<i>"),oz:s("q<F<j,k?>?>"),kS:s("q<k?>"),jD:s("jb"),ia:s("V<j,dN>"),ag:s("V<j,j>"),I:s("V<j,@>"),B:s("V<j,k?>"),a3:s("jd<@,@>"),cy:s("F<j,cX>"),dV:s("F<j,i>"),f:s("F<@,@>"),G:s("F<j,k?>"),d2:s("F<k?,k?>"),lJ:s("Z<ct,j>"),iZ:s("Z<j,@>"),r:s("aS"),i:s("h4"),dQ:s("e0"),aj:s("c1"),Z:s("eU"),P:s("W"),K:s("k"),k5:s("cx"),dZ:s("cy"),i0:s("cz"),jS:s("dj"),oj:s("hc"),ot:s("nn"),gq:s("he"),e:s("b1"),b0:s("dk"),lZ:s("PO"),oZ:s("e4"),aK:s("+()"),ja:s("+(N,iH)"),hP:s("+(F<j,cX>,F<j,F<j,k?>>)"),cU:s("+(e6,j)"),mk:s("+(P,N)"),kO:s("+basicSupport,supportsReadWriteUnsafe(P,P)"),mt:s("+(N?,N)"),po:s("+(k?,i)"),fe:s("+(k?,k?)"),nw:s("+(F<j,k?>?,cX?,cy?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("nt"),h:s("cU"),V:s("aj"),hF:s("bE<j>"),cu:s("ho<@>"),aJ:s("f0<j>"),g_:s("hq"),hq:s("cC"),ol:s("dn"),gE:s("nP"),l:s("aM"),nv:s("nR"),h3:s("hv"),ha:s("bw<cD>"),dz:s("bw<@>"),ey:s("bw<~>"),bv:s("nT"),v:s("ad<q<i>>"),lI:s("e7"),hL:s("k_"),N:s("j"),f_:s("hx"),k6:s("k0"),o8:s("nX"),n6:s("ck"),fD:s("bg"),o:s("cX"),kf:s("f2"),hU:s("ds"),q:s("oc"),dH:s("an"),do:s("du"),hM:s("yN"),mC:s("yO"),oR:s("cH"),nn:s("yP"),p:s("cZ"),cx:s("ea"),ph:s("d_<j,j>"),eo:s("d0"),jJ:s("oo"),e6:s("bh"),j2:s("k4"),R:s("hG"),fA:s("ba"),gx:s("aq<cM>"),mz:s("aq<b7>"),mE:s("aq<e9>"),U:s("ed<j>"),n:s("f5"),bp:s("f6"),be:s("oE"),ec:s("hK"),iq:s("aG<cZ>"),jk:s("aG<@>"),ho:s("aG<i>"),bF:s("aG<k?>"),Q:s("aG<~>"),oW:s("fa<@,@>"),nz:s("fb<N>"),d4:s("hT<N>"),nI:s("w<dc>"),a7:s("w<N>"),af:s("w<F<j,k?>>"),hl:s("w<0&>"),os:s("w<j>"),jz:s("w<cZ>"),g5:s("w<P>"),_:s("w<@>"),hy:s("w<i>"),ji:s("w<F<j,k?>?>"),ny:s("w<k?>"),D:s("w<~>"),nf:s("bz"),mp:s("eh<k?,k?>"),mB:s("hX"),k8:s("dA<N>"),fb:s("dA<q<i>>"),mI:s("pv<cv>"),jy:s("em<cD,~()>"),ah:s("em<~,P()>"),lU:s("em<~,~()>"),hT:s("c5<N>"),lj:s("c5<q<i>>"),aP:s("at<dc>"),h1:s("at<N>"),ex:s("at<P>"),F:s("at<~>"),g8:s("pC"),y:s("P"),W:s("ae"),z:s("@"),mq:s("@(k)"),ng:s("@(k,aM)"),S:s("i"),ma:s("br?"),gK:s("y<W>?"),fm:s("dc?"),mU:s("N?"),bE:s("q<ca<@>>?"),lH:s("q<@>?"),b:s("F<j,k?>?"),nh:s("aS?"),X:s("k?"),ad:s("FZ?"),dY:s("cy?"),lY:s("jI?"),jB:s("cU?"),jv:s("j?"),f8:s("cX?"),a_:s("cH?"),he:s("hG?"),dd:s("bz?"),o9:s("P?"),dA:s("ae?"),u:s("i?"),jh:s("b3?"),cZ:s("b3"),H:s("~"),cj:s("~()"),i6:s("~(k)"),b9:s("~(k,aM)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cx=J.mH.prototype
B.b=J.z.prototype
B.c=J.j4.prototype
B.w=J.eN.prototype
B.a=J.dS.prototype
B.cy=J.bZ.prototype
B.cz=J.aJ.prototype
B.aE=A.js.prototype
B.dl=A.ju.prototype
B.y=A.jv.prototype
B.f=A.eU.prototype
B.bh=J.nh.prototype
B.aQ=J.ea.prototype
B.as=new A.dF("Operation was cancelled")
B.a9=new A.fy(0,"visible")
B.aT=new A.fy(1,"hidden")
B.bB=new A.ll(1)
B.eB=new A.ll(-1)
B.aa=new A.ew(0,"applied")
B.ab=new A.ew(1,"quarantined")
B.bC=new A.ew(2,"conflict")
B.ac=new A.ew(3,"skipped")
B.bD=new A.lo(127)
B.P=new A.ct(0,"changed")
B.at=new A.ct(1,"deleted")
B.bG=new A.ix(!1)
B.Q=new A.lu(B.bG)
B.bH=new A.ix(!0)
B.bF=new A.lu(B.bH)
B.cc=new A.kk(A.aa("kk<q<i>>"))
B.bI=new A.dI(B.cc)
B.bJ=new A.j1(A.P8(),A.aa("j1<i>"))
B.bK=new A.fA()
B.bL=new A.ev()
B.bM=new A.ls()
B.ad=new A.lv()
B.bN=new A.lE()
B.bO=new A.lH()
B.aU=new A.rE()
B.bP=new A.m5(A.aa("m5<0&>"))
B.p=new A.m4()
B.aV=new A.m8(A.aa("m8<0&>"))
B.aW=new A.m9()
B.R=new A.m9()
B.bQ=new A.mz()
B.bR=new A.mG()
B.aX=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bS=function() {
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
B.bX=function(getTagFallback) {
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
B.bT=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bW=function(hooks) {
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
B.bV=function(hooks) {
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
B.bU=function(hooks) {
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
B.aY=function(hooks) { return hooks; }

B.h=new A.uj()
B.bY=new A.vo()
B.bZ=new A.fZ()
B.l=new A.h8()
B.c_=new A.nd()
B.aZ=new A.wJ()
B.c0=new A.wU()
B.c1=new A.nm()
B.S=new A.hj()
B.d=new A.xY()
B.c2=new A.hp()
B.c3=new A.nQ()
B.c4=new A.nZ()
B.c5=new A.o_()
B.c6=new A.o1()
B.c7=new A.o6()
B.c8=new A.o8()
B.o=new A.or()
B.e=new A.os()
B.c9=new A.ot()
B.ca=new A.ov()
B.cb=new A.zB()
B.t=new A.Ak()
B.ae=new A.Au()
B.au=new A.B1()
B.b_=new A.fi()
B.i=new A.pp()
B.m=new A.ps()
B.cd=new A.BE()
B.T=new A.pz()
B.af=new A.dJ(0,"create")
B.A=new A.dJ(1,"update")
B.ce=new A.dJ(2,"archive")
B.cf=new A.dJ(3,"restore")
B.av=new A.dJ(4,"purge")
B.cg=new A.dJ(5,"hide")
B.H=new A.iC(0,"local")
B.aw=new A.iC(1,"remote")
B.ag=new A.iC(2,"resolution")
B.ch=new A.lM(3,"ignore")
B.U=new A.lM(4,"replace")
B.E={}
B.db=new A.aE(B.E,[],A.aa("aE<j,bA>"))
B.aD=new A.dY(0,"conflict")
B.ci=new A.lP(null,B.db,!1,B.aD)
B.q=new A.m7(0,"normal")
B.b0=new A.m7(1,"full")
B.I=new A.aF(0)
B.ax=new A.aF(1e6)
B.ah=new A.aF(12e7)
B.b1=new A.aF(16e3)
B.cj=new A.aF(18e8)
B.ck=new A.aF(2e5)
B.b2=new A.aF(3e5)
B.V=new A.aF(3e7)
B.ai=new A.aF(3e8)
B.aj=new A.aF(5e5)
B.cl=new A.aF(5e6)
B.eC=new A.aF(6048e8)
B.cm=new A.aF(7776e9)
B.eD=new A.aF(864e8)
B.ay=new A.cd(0,"text")
B.W=new A.cd(1,"int")
B.X=new A.cd(2,"real")
B.B=new A.cd(3,"bool")
B.Y=new A.cd(4,"date")
B.J=new A.cd(5,"enumValue")
B.Z=new A.cd(6,"json")
B.a_=new A.cd(7,"jsonList")
B.K=new A.cd(8,"ref")
B.cn=new A.iS(!1)
B.az=new A.dM("x",1,"opfsExternalLocks")
B.b3=new A.dM("y",2,"opfsExternalLocksWorkaround")
B.b4=new A.fU("/database",0,"database")
B.b5=new A.fU("/database-journal",1,"journal")
B.ct=new A.bt("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cu=new A.bt("fieldCipher envelope must be a map.",null,null)
B.aB=new A.aE(B.E,[],A.aa("aE<j,j>"))
B.cv=new A.eL(B.aB)
B.b6=new A.j0(0,"live")
B.cA=new A.mO(null)
B.cB=new A.mP(null)
B.cC=new A.df(0,"textExpected")
B.cD=new A.df(1,"intExpected")
B.b7=new A.df(2,"numberExpected")
B.cE=new A.df(3,"boolExpected")
B.cF=new A.df(4,"jsonExpected")
B.cG=new A.df(5,"jsonListExpected")
B.cH=new A.df(6,"enumValueRejected")
B.cI=new A.mT(255)
B.aA=new A.eQ(B.bP,A.aa("eQ<j>"))
B.cJ=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b8=s([13,10],t.t)
B.aJ=new A.cG(0,"unknown")
B.aK=new A.cG(1,"integer")
B.aL=new A.cG(2,"bigInt")
B.aM=new A.cG(3,"float")
B.aN=new A.cG(4,"text")
B.aO=new A.cG(5,"blob")
B.aP=new A.cG(6,"$null")
B.bv=new A.cG(7,"boolean")
B.b9=s([B.aJ,B.aK,B.aL,B.aM,B.aN,B.aO,B.aP,B.bv],A.aa("z<cG>"))
B.cK=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.dj=new A.dY(1,"recreate")
B.dk=new A.dY(2,"discardLocal")
B.cL=s([B.aD,B.dj,B.dk],A.aa("z<dY>"))
B.bk=new A.b7(0,"eq")
B.dw=new A.b7(1,"neq")
B.dA=new A.b7(2,"gt")
B.dB=new A.b7(3,"gte")
B.dC=new A.b7(4,"lt")
B.dD=new A.b7(5,"lte")
B.dE=new A.b7(6,"inValues")
B.dF=new A.b7(7,"between")
B.dG=new A.b7(8,"startsWith")
B.dH=new A.b7(9,"endsWith")
B.dx=new A.b7(10,"contains")
B.dy=new A.b7(11,"isNull")
B.dz=new A.b7(12,"isNotNull")
B.cM=s([B.bk,B.dw,B.dA,B.dB,B.dC,B.dD,B.dE,B.dF,B.dG,B.dH,B.dx,B.dy,B.dz],A.aa("z<b7>"))
B.cr=new A.iT(0,"database")
B.cs=new A.iT(1,"journal")
B.ba=s([B.cr,B.cs],A.aa("z<iT>"))
B.bw=new A.fy(2,"purged")
B.cN=s([B.a9,B.aT,B.bw],A.aa("z<fy>"))
B.z=new A.cY(0,"clean")
B.G=new A.cY(1,"dirty")
B.bs=new A.cY(2,"inFlight")
B.a8=new A.cY(3,"conflict")
B.ar=new A.cY(4,"error")
B.dX=new A.cY(5,"quarantine")
B.dY=new A.cY(6,"blocked")
B.cO=s([B.z,B.G,B.bs,B.a8,B.ar,B.dX,B.dY],A.aa("z<cY>"))
B.a0=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ak=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cP=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.cw=new A.j0(1,"notArchived")
B.cQ=s([B.b6,B.cw],A.aa("z<j0>"))
B.cR=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.bf=new A.jz(0,"fileUpload")
B.bg=new A.jz(1,"fileRemove")
B.cS=s([B.bf,B.bg],A.aa("z<jz>"))
B.cq=new A.dM("s",0,"opfsShared")
B.co=new A.dM("i",3,"indexedDb")
B.cp=new A.dM("m",4,"inMemory")
B.cT=s([B.cq,B.az,B.b3,B.co,B.cp],A.aa("z<dM>"))
B.al=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bx=new A.cM(0,"sum")
B.by=new A.cM(1,"avg")
B.bz=new A.cM(2,"min")
B.bA=new A.cM(3,"max")
B.cU=s([B.bx,B.by,B.bz,B.bA],A.aa("z<cM>"))
B.cV=s([B.ay,B.W,B.X,B.B,B.Y,B.J,B.Z,B.a_,B.K],A.aa("z<cd>"))
B.n=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.am=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.a1=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cW=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.h9(0,"upsert")
B.M=new A.h9(1,"archive")
B.a5=new A.h9(2,"restore")
B.cX=s([B.v,B.M,B.a5],A.aa("z<h9>"))
B.d_=s([],A.aa("z<dN>"))
B.bb=s([],t.d)
B.cY=s([],t.my)
B.d0=s([],t.kj)
B.u=s([],t.s)
B.cZ=s([],t.t)
B.an=s([],t.dG)
B.k=s([],t.c)
B.d1=s(["*"],t.s)
B.d2=s([B.b4,B.b5],A.aa("z<fU>"))
B.d3=s(["id","updated"],t.s)
B.d4=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bm=new A.e6(0,"opfs")
B.bn=new A.e6(1,"indexedDb")
B.dR=new A.e6(2,"inMemory")
B.d5=s([B.bm,B.bn,B.dR],A.aa("z<e6>"))
B.bt=new A.e9(0,"normal")
B.bu=new A.e9(1,"full")
B.d6=s([B.bt,B.bu],A.aa("z<e9>"))
B.ao=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.bE=new A.ct(2,"authChanged")
B.bc=s([B.P,B.at,B.bE],A.aa("z<ct>"))
B.d7=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.d8=new A.jb(!0)
B.d9=new A.iY([16,10,24,12,32,14],A.aa("iY<i,i>"))
B.dp={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.x=new A.mS()
B.r=new A.ln()
B.da=new A.aE(B.dp,[B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.o,B.o],A.aa("aE<j,eK>"))
B.ap=new A.aE(B.E,[],A.aa("aE<j,i>"))
B.j=new A.aE(B.E,[],t.x)
B.bd=new A.aE(B.E,[],A.aa("aE<i,F<j,k?>/(F<j,k?>)>"))
B.aC=new A.aE(B.E,[],A.aa("aE<k?,k?>"))
B.a4={kind:0}
B.dc=new A.aE(B.a4,["setUnionDeletionWins"],t.x)
B.dd=new A.aE(B.a4,["appendOnlyList"],t.x)
B.de=new A.aE(B.a4,["remoteWins"],t.x)
B.df=new A.aE(B.a4,["appendOnlyLines"],t.x)
B.dg=new A.aE(B.a4,["localWins"],t.x)
B.dq={ok:0}
B.dh=new A.aE(B.dq,[!0],A.aa("aE<j,P>"))
B.di=new A.mZ(11,"simpleSuccessResponse",A.aa("mZ<N>"))
B.a2=new A.e_(0,"createOrUpdate")
B.a3=new A.e_(1,"createOrUpdateMerge")
B.be=new A.e_(2,"create")
B.L=new A.e_(3,"update")
B.C=new A.e_(4,"archive")
B.D=new A.e_(5,"restore")
B.eE=new A.wf(2,"readWriteCreate")
B.ds=new A.cx("id",!1)
B.dt=new A.cz(B.bb,null,null,!1,!1)
B.bi=new A.ni(0,"native")
B.aF=new A.ni(1,"web")
B.F=new A.b1(0,1,0,0,0,!1)
B.du=new A.b1(0,0,0,0,1,!1)
B.aq=new A.b1(0,0,0,0,0,!0)
B.a6=new A.b1(0,0,0,0,0,!1)
B.dv=new A.b1(0,0,0,1,0,!1)
B.bj=new A.b1(0,0,1,0,0,!1)
B.a7=new A.b1(1,0,0,0,0,!1)
B.dI=new A.a_("archived",!0)
B.dJ=new A.a_("0",B.k)
B.aG=new A.kz(!1,!1)
B.dK=new A.ek(0,0,0)
B.dL=new A.ek(null,null,null)
B.dr={id:0,archived:1,hidden:2,extra:3,rowid:4,_rowid_:5,oid:6}
B.aH=new A.dK(B.dr,7,t.M)
B.dn={hidden:0}
B.dM=new A.dK(B.dn,1,t.M)
B.dm={open:0,contract_request:1,contract_event:2,backend_call:3}
B.dN=new A.dK(B.dm,4,t.M)
B.bl=new A.dK(B.E,0,t.M)
B.dO=new A.jV(0,"insert")
B.dP=new A.jV(1,"update")
B.dQ=new A.jV(2,"delete")
B.dS=new A.k0(-1,null)
B.dT=new A.k1("_clientToken")
B.N=new A.ck(0,"closed")
B.dU=new A.ck(1,"opening")
B.bo=new A.ck(2,"offline")
B.aI=new A.ck(3,"authRequired")
B.bp=new A.ck(4,"idle")
B.dV=new A.ck(5,"pulling")
B.dW=new A.ck(6,"pushing")
B.bq=new A.ck(7,"backoff")
B.br=new A.ck(8,"paused")
B.O=new A.bg(B.ap,B.ap,0,0,0,0,!1)
B.dZ=new A.f2(B.N,0,0,0,0,null,null,null)
B.e_=A.b4("lj")
B.e0=A.b4("fA")
B.e1=A.b4("ev")
B.e2=A.b4("ey")
B.e3=A.b4("Dy")
B.e4=A.b4("eF")
B.e5=A.b4("tw")
B.e6=A.b4("tx")
B.e7=A.b4("ub")
B.e8=A.b4("uc")
B.e9=A.b4("ud")
B.ea=A.b4("N")
B.eb=A.b4("fZ")
B.ec=A.b4("k")
B.ed=A.b4("hj")
B.ee=A.b4("jT")
B.ef=A.b4("yN")
B.eg=A.b4("yO")
B.eh=A.b4("yP")
B.ei=A.b4("cZ")
B.ej=A.b4("hp")
B.aR=new A.k3(!1)
B.ek=new A.k3(!0)
B.el=new A.dw(14)
B.em=new A.dw(522)
B.en=new A.dw(778)
B.eo=new A.BT(B.i,A.O_())
B.ep=new A.BU(B.i,A.O0())
B.eq=new A.BV(B.i,A.O1())
B.er=new A.BW(B.i,A.O2())
B.es=new A.pM(B.i,A.O3())
B.et=new A.BX(B.i,A.O4())
B.eu=new A.BY(B.i,A.O5())
B.ev=new A.BZ(B.i,A.O6())
B.ew=new A.C_(B.i,A.O7())
B.ex=new A.C1(B.i,A.O9())
B.ey=new A.C2(B.i,A.Oa())
B.ez=new A.C0(B.i,A.O8())
B.eA=new A.pN(B.i,A.Ob())
B.aS=new A.pO(B.i,B.aC)})();(function staticFields(){$.B3=null
$.fm=A.l([],t.hf)
$.Nt=null
$.G1=null
$.x1=0
$.nk=A.Nj()
$.Fp=null
$.Fo=null
$.Ib=null
$.HS=null
$.Il=null
$.CT=null
$.D7=null
$.EW=null
$.Bg=A.l([],A.aa("z<q<k>?>"))
$.id=null
$.kT=null
$.kU=null
$.EC=!1
$.C=B.i
$.Bk=null
$.Gx=null
$.Gy=null
$.Gz=null
$.GA=null
$.Ei=A.zW("_lastQuoRemDigits")
$.Ej=A.zW("_lastQuoRemUsed")
$.kd=A.zW("_lastRemUsed")
$.Ek=A.zW("_lastRem_nsh")
$.Gl=""
$.Gm=null
$.hg=function(){var s=t.N
return A.t(s,s)}()
$.He=null
$.Ce=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"PE","IE",()=>A.CZ("_$dart_dartClosure"))
s($,"PD","fu",()=>A.CZ("_$dart_dartClosure_dartJSInterop"))
s($,"Qh","q3",()=>A.w8(0))
s($,"QF","Jd",()=>B.i.b5(new A.Da(),A.aa("y<~>")))
s($,"Qz","Ja",()=>A.l([new J.mI()],A.aa("z<jP>")))
s($,"PW","II",()=>A.dv(A.yM({
toString:function(){return"$receiver$"}})))
s($,"PX","IJ",()=>A.dv(A.yM({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"PY","IK",()=>A.dv(A.yM(null)))
s($,"PZ","IL",()=>A.dv(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Q1","IO",()=>A.dv(A.yM(void 0)))
s($,"Q2","IP",()=>A.dv(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Q0","IN",()=>A.dv(A.Gi(null)))
s($,"Q_","IM",()=>A.dv(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Q4","IR",()=>A.dv(A.Gi(void 0)))
s($,"Q3","IQ",()=>A.dv(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Q7","F6",()=>A.Lw())
s($,"PK","eu",()=>$.Jd())
s($,"PJ","IF",()=>A.LP(!1,B.i,t.y))
s($,"Qn","J0",()=>A.w8(4096))
s($,"Ql","IZ",()=>new A.BQ().$0())
s($,"Qm","J_",()=>new A.BP().$0())
s($,"Q9","F7",()=>A.KE(A.bc(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Q8","IS",()=>A.w8(0))
s($,"Qg","cr",()=>A.kc(0))
s($,"Qe","fv",()=>A.kc(1))
s($,"Qf","IV",()=>A.kc(2))
s($,"Qc","F9",()=>$.fv().bW(0))
s($,"Qa","F8",()=>A.kc(1e4))
r($,"Qd","IU",()=>A.ai("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Qb","IT",()=>A.w8(8))
s($,"Qi","IW",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Qj","IX",()=>A.ai("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Qk","IY",()=>typeof URLSearchParams=="function")
s($,"Qq","fw",()=>A.l5(B.ec))
s($,"PP","la",()=>{A.KP()
return $.x1})
s($,"Qr","J3",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"PN","Dt",()=>{var q=new A.B2(A.KD(8))
q.pC()
return q})
s($,"PF","l9",()=>A.Jz(B.dl.gac(A.KF(A.bc(A.l([1],t.t)))),0,null).getInt8(0)===1?B.R:B.aW)
s($,"Pw","F1",()=>A.ai("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Qt","Du",()=>A.ai("\\r\\n|\\r|\\n",!0,!1))
s($,"PL","IG",()=>A.G6())
s($,"Qo","Fa",()=>A.ai("^[\\x00-\\x7F]+$",!0,!1))
s($,"Qp","J1",()=>A.ai('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"QH","Je",()=>A.ai('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Qs","J4",()=>A.ai("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Qw","J7",()=>A.ai('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Qv","J6",()=>A.ai("\\\\(.)",!0,!1))
s($,"QE","Jc",()=>A.ai('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"QI","Jf",()=>A.ai("(?:"+$.J4().a+")*",!0,!1))
s($,"PA","F2",()=>A.ai("^[0-9a-f]{64}$",!0,!1))
s($,"Qy","J9",()=>A.G7())
s($,"QG","q4",()=>A.ai("^[a-z0-9]{15}$",!0,!1))
r($,"N2","J2",()=>A.JR().a)
s($,"PG","F3",()=>A.ai("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"PB","IC",()=>A.DF("declaredNames",t.aJ))
s($,"PC","ID",()=>A.DF("fieldByName",A.aa("F<j,b6>")))
s($,"Qu","J5",()=>A.ai("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"PV","lc",()=>new A.k())
s($,"QB","is",()=>new A.rh($.F4()))
s($,"PS","IH",()=>new A.wW(A.ai("/",!0,!1),A.ai("[^/]$",!0,!1),A.ai("^/",!0,!1)))
s($,"PU","q2",()=>new A.zb(A.ai("[/\\\\]",!0,!1),A.ai("[^/\\\\]$",!0,!1),A.ai("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ai("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"PT","lb",()=>new A.yS(A.ai("/",!0,!1),A.ai("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ai("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ai("^/",!0,!1)))
s($,"PR","F4",()=>A.Lg())
s($,"Pz","IB",()=>$.fv().bX(0,63).bW(0))
s($,"Py","IA",()=>{var q=$.fv()
return q.bX(0,63).he(0,q)})
s($,"Px","q1",()=>A.G7())
s($,"Q5","F5",()=>A.DF(null,t.S))
s($,"QA","Jb",()=>A.Ks(A.l([A.Ea("files"),A.Ea("blocks")],t.s)))
s($,"PH","Ds",()=>{var q,p,o=A.t(t.N,A.aa("fU"))
for(q=0;q<2;++q){p=B.d2[q]
o.j(0,p.c,p)}return o})
s($,"Qx","J8",()=>A.G6())
r($,"Q6","ld",()=>{var q="navigator"
return A.Kj(A.Kk(A.D0(A.Ir(),q),A.Ea("locks")))?A.D0(A.D0(A.Ir(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.h5,ArrayBuffer:A.h4,ArrayBufferView:A.jt,DataView:A.js,Float32Array:A.n3,Float64Array:A.n4,Int16Array:A.n5,Int32Array:A.n6,Int8Array:A.n7,Uint16Array:A.ju,Uint32Array:A.jv,Uint8ClampedArray:A.jw,CanvasPixelArray:A.jw,Uint8Array:A.eU})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.h6.$nativeSuperclassTag="ArrayBufferView"
A.kv.$nativeSuperclassTag="ArrayBufferView"
A.kw.$nativeSuperclassTag="ArrayBufferView"
A.e0.$nativeSuperclassTag="ArrayBufferView"
A.kx.$nativeSuperclassTag="ArrayBufferView"
A.ky.$nativeSuperclassTag="ArrayBufferView"
A.c1.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.P6
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
