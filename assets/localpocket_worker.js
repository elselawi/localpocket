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
if(a[b]!==s){A.Pe(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.EK(b)
return new s(c,this)}:function(){if(s===null)s=A.EK(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.EK(a).prototype
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
EU(a,b,c,d){return{i:a,p:b,e:c,x:d}},
CV(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.ES==null){A.OL()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Ge("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.B2
if(o==null)o=$.B2=A.CU(n)
p=q[o]}if(p!=null)return p
p=A.OT(a)
if(p!=null)return p
if(typeof a=="function")return B.cy
s=Object.getPrototypeOf(a)
if(s==null)return B.bh
if(s===Object.prototype)return B.bh
if(typeof q=="function"){o=$.B2
if(o==null)o=$.B2=A.CU(n)
Object.defineProperty(q,o,{value:B.aQ,enumerable:false,writable:true,configurable:true})
return B.aQ}return B.aQ},
mJ(a,b){if(a<0||a>4294967295)throw A.b(A.aA(a,0,4294967295,"length",null))
return J.DJ(new Array(a),b)},
ug(a,b){if(a<0)throw A.b(A.U("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
FG(a,b){if(a<0)throw A.b(A.U("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
DJ(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
K9(a,b){return J.Fa(a,b)},
FH(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Kc(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.FH(r))break;++b}return b},
FI(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.FH(r))break}return b},
cK(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.j4.prototype
return J.mL.prototype}if(typeof a=="string")return J.dS.prototype
if(a==null)return J.j5.prototype
if(typeof a=="boolean")return J.mK.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fW.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.CV(a)},
J(a){if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fW.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.CV(a)},
ax(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fW.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.CV(a)},
OD(a){if(typeof a=="number")return J.eM.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ea.prototype
return a},
OE(a){if(typeof a=="number")return J.eM.prototype
if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ea.prototype
return a},
CT(a){if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ea.prototype
return a},
l3(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fW.prototype
if(typeof a=="bigint")return J.bB.prototype
return a}if(a instanceof A.k)return a
return J.CV(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cK(a).P(a,b)},
T(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.I4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.J(a).h(a,b)},
b4(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.I4(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.ax(a).j(a,b,c)},
aN(a,b){return J.ax(a).u(a,b)},
F7(a,b){return J.ax(a).D(a,b)},
Dq(a,b){return J.CT(a).hW(a,b)},
q5(a){return J.l3(a).mV(a)},
F8(a,b,c){return J.l3(a).hX(a,b,c)},
F9(a,b,c){return J.l3(a).mW(a,b,c)},
J6(a){return J.l3(a).mX(a)},
bV(a,b,c){return J.l3(a).hY(a,b,c)},
q6(a,b){return J.ax(a).fj(a,b)},
J7(a,b,c){return J.OD(a).bu(a,b,c)},
Fa(a,b){return J.OE(a).a3(a,b)},
Dr(a,b){return J.J(a).E(a,b)},
le(a,b){return J.ax(a).a4(a,b)},
lf(a,b){return J.ax(a).co(a,b)},
J8(a,b,c){return J.ax(a).cp(a,b,c)},
J9(a){return J.l3(a).gac(a)},
bH(a){return J.ax(a).gH(a)},
ab(a){return J.cK(a).gK(a)},
bz(a){return J.J(a).gF(a)},
d8(a){return J.J(a).gS(a)},
E(a){return J.ax(a).gt(a)},
q7(a){return J.ax(a).ga_(a)},
an(a){return J.J(a).gm(a)},
c8(a){return J.cK(a).gam(a)},
q8(a){return J.ax(a).gao(a)},
Ja(a,b,c){return J.ax(a).h4(a,b,c)},
Jb(a,b,c){return J.ax(a).aF(a,b,c)},
Jc(a,b){return J.ax(a).C(a,b)},
bI(a,b,c){return J.ax(a).cu(a,b,c)},
Jd(a,b,c){return J.CT(a).eC(a,b,c)},
Je(a,b){return J.J(a).sm(a,b)},
Jf(a,b,c,d,e){return J.ax(a).ai(a,b,c,d,e)},
fw(a,b){return J.ax(a).b6(a,b)},
Fb(a,b){return J.ax(a).cB(a,b)},
Jg(a,b){return J.CT(a).dd(a,b)},
Jh(a,b){return J.CT(a).T(a,b)},
Ji(a,b,c){return J.ax(a).U(a,b,c)},
lg(a,b){return J.ax(a).c9(a,b)},
Jj(a){return J.ax(a).bP(a)},
Ds(a){return J.ax(a).cz(a)},
Z(a){return J.cK(a).l(a)},
Jk(a,b){return J.ax(a).dM(a,b)},
mH:function mH(){},
mK:function mK(){},
j5:function j5(){},
aJ:function aJ(){},
dU:function dU(){},
nh:function nh(){},
ea:function ea(){},
bZ:function bZ(){},
bB:function bB(){},
fW:function fW(){},
z:function z(a){this.$ti=a},
mI:function mI(){},
uh:function uh(a){this.$ti=a},
fA:function fA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eM:function eM(){},
j4:function j4(){},
mL:function mL(){},
dS:function dS(){}},A={DM:function DM(){},
fC(a,b,c){if(t.O.b(a))return new A.kj(a,b.i("@<0>").Z(c).i("kj<1,2>"))
return new A.ey(a,b.i("@<0>").Z(c).i("ey<1,2>"))},
FK(a){return new A.dT("Field '"+a+"' has been assigned during initialization.")},
FL(a){return new A.dT("Field '"+a+"' has not been initialized.")},
Kg(a){return new A.dT("Field '"+a+"' has already been initialized.")},
e3(a){return new A.ns(a)},
CZ(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aC(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hz(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cJ(a,b,c){return a},
ET(a){var s,r
for(s=$.fl.length,r=0;r<s;++r)if(a===$.fl[r])return!0
return!1},
cE(a,b,c,d){A.aW(b,"start")
if(c!=null){A.aW(c,"end")
if(b>c)A.u(A.aA(b,0,c,"start",null))}return new A.cD(a,b,c,d.i("cD<0>"))},
dX(a,b,c,d){if(t.O.b(a))return new A.eH(a,b,c.i("@<0>").Z(d).i("eH<1,2>"))
return new A.cv(a,b,c.i("@<0>").Z(d).i("cv<1,2>"))},
G9(a,b,c){var s="takeCount"
A.dH(b,s)
A.aW(b,s)
if(t.O.b(a))return new A.iM(a,b,c.i("iM<0>"))
return new A.f2(a,b,c.i("f2<0>"))},
G7(a,b,c){var s="count"
if(t.O.b(a)){A.dH(b,s)
A.aW(b,s)
return new A.fM(a,b,c.i("fM<0>"))}A.dH(b,s)
A.aW(b,s)
return new A.dl(a,b,c.i("dl<0>"))},
DH(a,b,c){return new A.eG(a,b,c.i("eG<0>"))},
av(){return new A.bt("No element")},
j2(){return new A.bt("Too many elements")},
FE(){return new A.bt("Too few elements")},
nJ(a,b,c,d){if(c-b<=32)A.L_(a,b,c,d)
else A.KZ(a,b,c,d)},
L_(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.J(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
KZ(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.J(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
Ak:function Ak(a){this.a=0
this.b=a},
oQ:function oQ(a){this.a=0
this.b=a},
ef:function ef(){},
lF:function lF(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b){this.a=a
this.$ti=b},
kj:function kj(a,b){this.a=a
this.$ti=b},
kg:function kg(){},
zU:function zU(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.$ti=b},
ez:function ez(a,b){this.a=a
this.$ti=b},
qB:function qB(a,b){this.a=a
this.b=b},
qA:function qA(a){this.a=a},
dT:function dT(a){this.a=a},
ns:function ns(a){this.a=a},
ct:function ct(a){this.a=a},
D5:function D5(){},
xX:function xX(){},
L:function L(){},
a0:function a0(){},
cD:function cD(a,b,c,d){var _=this
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
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
mX:function mX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Y:function Y(a,b,c){this.a=a
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
f2:function f2(a,b,c){this.a=a
this.b=b
this.$ti=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.$ti=c},
oa:function oa(a,b,c){this.a=a
this.b=b
this.$ti=c},
dl:function dl(a,b,c){this.a=a
this.b=b
this.$ti=c},
fM:function fM(a,b,c){this.a=a
this.b=b
this.$ti=c},
nI:function nI(a,b,c){this.a=a
this.b=b
this.$ti=c},
eI:function eI(a){this.$ti=a},
m8:function m8(a){this.$ti=a},
ed:function ed(a,b){this.a=a
this.$ti=b},
oA:function oA(a,b){this.a=a
this.$ti=b},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
eG:function eG(a,b,c){this.a=a
this.b=b
this.$ti=c},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
iU:function iU(){},
om:function om(){},
hD:function hD(){},
bE:function bE(a,b){this.a=a
this.$ti=b},
k1:function k1(a){this.a=a},
kR:function kR(){},
JD(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bP(new A.S(a,m.i("S<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aE(q,A.bP(new A.ao(a,m.i("ao<2>")),!0,c),b.i("@<0>").Z(c).i("aE<1,2>"))
n.$keys=l
return n}return new A.iI(A.bs(a,b,c),b.i("@<0>").Z(c).i("iI<1,2>"))},
JE(){throw A.b(A.a2("Cannot modify unmodifiable Map"))},
JF(){throw A.b(A.a2("Cannot modify constant Set"))},
Ip(a){var s=A.Io(a)
if(s!=null)return s
return"minified:"+a},
I4(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
return s},
eW(a){var s,r=$.FX
if(r==null)r=$.FX=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ha(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
KH(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.ca(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
nj(a){var s,r,q,p
if(a instanceof A.k)return A.c6(A.bo(a),null)
s=J.cK(a)
if(s===B.cx||s===B.cz||t.cx.b(a)){r=B.aX(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.c6(A.bo(a),null)},
FZ(a){var s,r,q
if(a==null||typeof a=="number"||A.b0(a))return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eB)return a.l(0)
if(a instanceof A.hY)return a.mI(!0)
s=$.J0()
for(r=0;r<1;++r){q=s[r].xZ(a)
if(q!=null)return q}return"Instance of '"+A.nj(a)+"'"},
KD(){return Date.now()},
KG(){var s,r
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
KC(){if(!!self.location)return self.location.href
return null},
FW(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
KI(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
if(!A.a8(q))throw A.b(A.fn(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ag(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fn(q))}return A.FW(p)},
G_(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.a8(q))throw A.b(A.fn(q))
if(q<0)throw A.b(A.fn(q))
if(q>65535)return A.KI(a)}return A.FW(a)},
KJ(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bD(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ag(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aA(a,0,1114111,null,null))},
KK(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.an(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bC(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
DX(a){return a.c?A.bC(a).getUTCFullYear()+0:A.bC(a).getFullYear()+0},
DV(a){return a.c?A.bC(a).getUTCMonth()+1:A.bC(a).getMonth()+1},
x_(a){return a.c?A.bC(a).getUTCDate()+0:A.bC(a).getDate()+0},
DT(a){return a.c?A.bC(a).getUTCHours()+0:A.bC(a).getHours()+0},
DU(a){return a.c?A.bC(a).getUTCMinutes()+0:A.bC(a).getMinutes()+0},
DW(a){return a.c?A.bC(a).getUTCSeconds()+0:A.bC(a).getSeconds()+0},
FY(a){return a.c?A.bC(a).getUTCMilliseconds()+0:A.bC(a).getMilliseconds()+0},
KF(a){return B.c.an((a.c?A.bC(a).getUTCDay()+0:A.bC(a).getDay()+0)+6,7)+1},
KE(a){var s=a.$thrownJsError
if(s==null)return null
return A.af(s)},
nl(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aS(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
CN(a,b){var s,r="index"
if(!A.a8(b))return new A.bJ(!0,b,r,null)
s=J.an(a)
if(b<0||b>=s)return A.mE(b,s,a,null,r)
return A.xI(b,r)},
Or(a,b,c){if(a<0||a>c)return A.aA(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aA(b,a,c,"end",null)
return new A.bJ(!0,b,"end",null)},
fn(a){return new A.bJ(!0,a,null,null)},
b(a){return A.aS(a,new Error())},
aS(a,b){var s
if(a==null)a=new A.dt()
b.dartException=a
s=A.Pf
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Pf(){return J.Z(this.dartException)},
u(a,b){throw A.aS(a,b==null?new Error():b)},
K(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.u(A.MM(a,b,c),s)},
MM(a,b,c){var s,r,q,p,o,n,m,l,k
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
du(a){var s,r,q,p,o,n
a=A.Id(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.yK(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
yL(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Gd(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
DN(a,b){var s=b==null,r=s?null:b.method
return new A.mM(a,r,s?null:b.receiver)},
C(a){if(a==null)return new A.na(a)
if(a instanceof A.iO)return A.et(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.et(a,a.dartException)
return A.NI(a)},
et(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
NI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ag(r,16)&8191)===10)switch(q){case 438:return A.et(a,A.DN(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.et(a,new A.jy())}}if(a instanceof TypeError){p=$.Iy()
o=$.Iz()
n=$.IA()
m=$.IB()
l=$.IE()
k=$.IF()
j=$.ID()
$.IC()
i=$.IH()
h=$.IG()
g=p.c6(s)
if(g!=null)return A.et(a,A.DN(s,g))
else{g=o.c6(s)
if(g!=null){g.method="call"
return A.et(a,A.DN(s,g))}else if(n.c6(s)!=null||m.c6(s)!=null||l.c6(s)!=null||k.c6(s)!=null||j.c6(s)!=null||m.c6(s)!=null||i.c6(s)!=null||h.c6(s)!=null)return A.et(a,new A.jy())}return A.et(a,new A.ol(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jW()
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
if(typeof a=="object")return A.eW(a)
return J.ab(a)},
Oa(a){if(typeof a=="number")return B.w.gK(a)
if(a instanceof A.pD)return A.eW(a)
if(a instanceof A.hY)return a.gK(a)
if(a instanceof A.k1)return a.gK(0)
return A.l5(a)},
I1(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
OB(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
MZ(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Fu("Unsupported number of arguments for wrapped closure"))},
er(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Of(a,b)
a.$identity=s
return s},
Of(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.MZ)},
Jx(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.y7().constructor.prototype):Object.create(new A.iz(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Fo(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Jt(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Fo(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Jt(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Jo)}throw A.b("Error in functionType of tearoff")},
Ju(a,b,c,d){var s=A.Fl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Fo(a,b,c,d){if(c)return A.Jw(a,b,d)
return A.Ju(b.length,d,a,b)},
Jv(a,b,c,d){var s=A.Fl,r=A.Jp
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
Jw(a,b,c){var s,r
if($.Fj==null)$.Fj=A.Fi("interceptor")
if($.Fk==null)$.Fk=A.Fi("receiver")
s=b.length
r=A.Jv(s,c,a,b)
return r},
EK(a){return A.Jx(a)},
Jo(a,b){return A.kL(v.typeUniverse,A.bo(a.a),b)},
Fl(a){return a.a},
Jp(a){return a.b},
Fi(a){var s,r,q,p=new A.iz("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.U("Field name "+a+" not found.",null))},
CU(a){return v.getIsolateTag(a)},
Pi(a,b){var s=$.B
if(s===B.i)return a
return s.i0(a,b)},
Ii(){return v.G},
Qp(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
OT(a){var s,r,q,p,o,n=$.I2.$1(a),m=$.CO[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.D2[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.HM.$2(a,n)
if(q!=null){m=$.CO[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.D2[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.D4(s)
$.CO[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.D2[n]=s
return s}if(p==="-"){o=A.D4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Ia(a,s)
if(p==="*")throw A.b(A.Ge(n))
if(v.leafTags[n]===true){o=A.D4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Ia(a,s)},
Ia(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.EU(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
D4(a){return J.EU(a,!1,null,!!a.$ic_)},
OV(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.D4(s)
else return J.EU(s,c,null,null)},
OL(){if(!0===$.ES)return
$.ES=!0
A.OM()},
OM(){var s,r,q,p,o,n,m,l
$.CO=Object.create(null)
$.D2=Object.create(null)
A.OK()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ic.$1(o)
if(n!=null){m=A.OV(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
OK(){var s,r,q,p,o,n,m=B.bS()
m=A.ih(B.bT,A.ih(B.bU,A.ih(B.aY,A.ih(B.aY,A.ih(B.bV,A.ih(B.bW,A.ih(B.bX(B.aX),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.I2=new A.D_(p)
$.HM=new A.D0(o)
$.Ic=new A.D1(n)},
ih(a,b){return a(b)||b},
LZ(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
Oj(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
DL(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.ac("Illegal RegExp pattern ("+String(o)+")",a,null))},
P8(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eN){s=B.a.ab(a,c)
return b.b.test(s)}else return!J.Dq(b,B.a.ab(a,c)).gF(0)},
I_(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Id(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
D(a,b,c){var s
if(typeof b=="string")return A.Pa(a,b,c)
if(b instanceof A.eN){s=b.gmb()
s.lastIndex=0
return a.replace(s,A.I_(c))}return A.P9(a,b,c)},
P9(a,b,c){var s,r,q,p
for(s=J.Dq(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Pa(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Id(b),"g"),A.I_(c))},
HD(a){return a},
Ij(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hW(0,a),s=new A.oI(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.HD(B.a.B(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.HD(B.a.ab(a,q)))
return s.charCodeAt(0)==0?s:s},
Pb(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.Ik(a,s,s+b.length,c)},
Ik(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a_:function a_(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.b=b},
kA:function kA(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
pl:function pl(a,b){this.a=a
this.b=b},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a){this.a=a},
pm:function pm(a){this.a=a},
iI:function iI(a,b){this.a=a
this.$ti=b},
fI:function fI(){},
rg:function rg(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
fd:function fd(a,b){this.a=a
this.$ti=b},
hV:function hV(a,b,c){var _=this
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
yK:function yK(a,b,c,d,e,f){var _=this
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
eB:function eB(){},
qG:function qG(){},
qH:function qH(){},
yy:function yy(){},
y7:function y7(){},
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
S:function S(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ao:function ao(a,b){this.a=a
this.$ti=b},
aZ:function aZ(a,b,c,d){var _=this
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
D_:function D_(a){this.a=a},
D0:function D0(a){this.a=a},
D1:function D1(a){this.a=a},
hY:function hY(){},
pi:function pi(){},
pj:function pj(){},
pk:function pk(){},
eN:function eN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hX:function hX(a){this.b=a},
oH:function oH(a,b,c){this.a=a
this.b=b
this.c=c},
oI:function oI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hv:function hv(a,b){this.a=a
this.c=b},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
BB:function BB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Pe(a){throw A.aS(A.FK(a),new Error())},
v(){throw A.aS(A.FL(""),new Error())},
dE(){throw A.aS(A.Kg(""),new Error())},
Dl(){throw A.aS(A.FK(""),new Error())},
oS(){var s=new A.oR("")
return s.b=s},
zV(a){var s=new A.oR(a)
return s.b=s},
oR:function oR(a){this.a=a
this.b=null},
ia(a,b,c){},
ba(a){var s,r,q
if(t.iy.b(a))return a
s=J.J(a)
r=A.a9(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
Ku(a){return new DataView(new ArrayBuffer(a))},
FR(a,b,c){A.ia(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
dg(a,b,c){A.ia(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Kv(a){return new Int8Array(a)},
Kw(a){return new Uint16Array(a)},
FS(a,b,c){A.ia(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
w8(a){return new Uint8Array(a)},
c2(a,b,c){A.ia(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dC(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.CN(b,a))},
d4(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Or(a,b,c))
if(b==null)return c
return b},
h4:function h4(){},
h3:function h3(){},
jt:function jt(){},
pG:function pG(a){this.a=a},
js:function js(){},
h5:function h5(){},
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
eT:function eT(){},
kv:function kv(){},
kw:function kw(){},
kx:function kx(){},
ky:function ky(){},
E_(a,b){var s=b.c
return s==null?b.c=A.kJ(a,"y",[b.x]):s},
G4(a){var s=a.w
if(s===6||s===7)return A.G4(a.x)
return s===11||s===12},
KU(a){return a.as},
I9(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aa(a){return A.BH(v.typeUniverse,a,!1)},
OO(a,b){var s,r,q,p,o
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
return A.GM(a1,r,!0)
case 7:s=a2.x
r=A.ep(a1,s,a3,a4)
if(r===s)return a2
return A.GL(a1,r,!0)
case 8:q=a2.y
p=A.ig(a1,q,a3,a4)
if(p===q)return a2
return A.kJ(a1,a2.x,p)
case 9:o=a2.x
n=A.ep(a1,o,a3,a4)
m=a2.y
l=A.ig(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.El(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ig(a1,j,a3,a4)
if(i===j)return a2
return A.GN(a1,k,i)
case 11:h=a2.x
g=A.ep(a1,h,a3,a4)
f=a2.y
e=A.ND(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.GK(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ig(a1,d,a3,a4)
o=a2.x
n=A.ep(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Em(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.lq("Attempted to substitute unexpected RTI kind "+a0))}},
ig(a,b,c,d){var s,r,q,p,o=b.length,n=A.BR(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ep(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
NE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.BR(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ep(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ND(a,b,c,d){var s,r=b.a,q=A.ig(a,r,c,d),p=b.b,o=A.ig(a,p,c,d),n=b.c,m=A.NE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.p5()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
pY(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.OF(s)
return a.$S()}return null},
ON(a,b){var s
if(A.G4(b))if(a instanceof A.eB){s=A.pY(a)
if(s!=null)return s}return A.bo(a)},
bo(a){if(a instanceof A.k)return A.n(a)
if(Array.isArray(a))return A.a1(a)
return A.Ex(J.cK(a))},
a1(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Ex(a)},
Ex(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.MX(a,s)},
MX(a,b){var s=a instanceof A.eB?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.M8(v.typeUniverse,s.name)
b.$ccache=r
return r},
OF(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.BH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
d7(a){return A.bT(A.n(a))},
ER(a){var s=A.pY(a)
return A.bT(s==null?A.bo(a):s)},
EG(a){var s
if(a instanceof A.hY)return a.m1()
s=a instanceof A.eB?A.pY(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c8(a).a
if(Array.isArray(a))return A.a1(a)
return A.bo(a)},
bT(a){var s=a.r
return s==null?a.r=new A.pD(a):s},
Ow(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kL(v.typeUniverse,A.EG(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.GP(v.typeUniverse,s,A.EG(q[r]))
return A.kL(v.typeUniverse,s,a)},
b3(a){return A.bT(A.BH(v.typeUniverse,a,!1))},
MW(a){var s=this
s.b=A.NB(s)
return s.b(a)},
NB(a){var s,r,q,p
if(a===t.K)return A.N4
if(A.fq(a))return A.N8
s=a.w
if(s===6)return A.MT
if(s===1)return A.Hi
if(s===7)return A.N_
r=A.NA(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fq)){a.f="$i"+q
if(q==="q")return A.N2
if(a===t.m)return A.N1
return A.N7}}else if(s===10){p=A.Oj(a.x,a.y)
return p==null?A.Hi:p}return A.MR},
NA(a){if(a.w===8){if(a===t.S)return A.a8
if(a===t.W||a===t.cZ)return A.N3
if(a===t.N)return A.N6
if(a===t.y)return A.b0}return null},
MV(a){var s=this,r=A.MQ
if(A.fq(s))r=A.Mm
else if(s===t.K)r=A.Ml
else if(A.ik(s)){r=A.MS
if(s===t.aV)r=A.aY
else if(s===t.jv)r=A.a3
else if(s===t.o9)r=A.Es
else if(s===t.jh)r=A.C2
else if(s===t.dA)r=A.H3
else if(s===t.U)r=A.H4}else if(s===t.S)r=A.aj
else if(s===t.N)r=A.G
else if(s===t.y)r=A.i9
else if(s===t.cZ)r=A.H5
else if(s===t.W)r=A.fj
else if(s===t.m)r=A.bm
s.a=r
return s.a(a)},
MR(a){var s=this
if(a==null)return A.ik(s)
return A.OR(v.typeUniverse,A.ON(a,s),s)},
MT(a){if(a==null)return!0
return this.x.b(a)},
N7(a){var s,r=this
if(a==null)return A.ik(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cK(a)[s]},
N2(a){var s,r=this
if(a==null)return A.ik(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cK(a)[s]},
N1(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Hh(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
MQ(a){var s=this
if(a==null){if(A.ik(s))return a}else if(s.b(a))return a
throw A.aS(A.Hb(a,s),new Error())},
MS(a){var s=this
if(a==null||s.b(a))return a
throw A.aS(A.Hb(a,s),new Error())},
Hb(a,b){return new A.kH("TypeError: "+A.GB(a,A.c6(b,null)))},
GB(a,b){return A.iN(a)+": type '"+A.c6(A.EG(a),null)+"' is not a subtype of type '"+b+"'"},
co(a,b){return new A.kH("TypeError: "+A.GB(a,b))},
N_(a){var s=this
return s.x.b(a)||A.E_(v.typeUniverse,s).b(a)},
N4(a){return a!=null},
Ml(a){if(a!=null)return a
throw A.aS(A.co(a,"Object"),new Error())},
N8(a){return!0},
Mm(a){return a},
Hi(a){return!1},
b0(a){return!0===a||!1===a},
i9(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aS(A.co(a,"bool"),new Error())},
Es(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aS(A.co(a,"bool?"),new Error())},
fj(a){if(typeof a=="number")return a
throw A.aS(A.co(a,"double"),new Error())},
H3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aS(A.co(a,"double?"),new Error())},
a8(a){return typeof a=="number"&&Math.floor(a)===a},
aj(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aS(A.co(a,"int"),new Error())},
aY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aS(A.co(a,"int?"),new Error())},
N3(a){return typeof a=="number"},
H5(a){if(typeof a=="number")return a
throw A.aS(A.co(a,"num"),new Error())},
C2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aS(A.co(a,"num?"),new Error())},
N6(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.aS(A.co(a,"String"),new Error())},
a3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aS(A.co(a,"String?"),new Error())},
bm(a){if(A.Hh(a))return a
throw A.aS(A.co(a,"JSObject"),new Error())},
H4(a){if(a==null)return a
if(A.Hh(a))return a
throw A.aS(A.co(a,"JSObject?"),new Error())},
Hy(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.c6(a[q],b)
return s},
Nn(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Hy(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.c6(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Hf(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.c6(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.c6(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.c6(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.c6(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.c6(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
c6(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.c6(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.c6(a.x,b)+">"
if(m===8){p=A.NH(a.x)
o=a.y
return o.length>0?p+("<"+A.Hy(o,b)+">"):p}if(m===10)return A.Nn(a,b)
if(m===11)return A.Hf(a,b,null)
if(m===12)return A.Hf(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
NH(a){var s=A.Io(a)
if(s!=null)return s
return"minified:"+a},
M9(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
M8(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.BH(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kK(a,5,"#")
q=A.BR(s)
for(p=0;p<s;++p)q[p]=r
o=A.kJ(a,b,q)
n[b]=o
return o}else return m},
M7(a,b){return A.H1(a.tR,b)},
M6(a,b){return A.H1(a.eT,b)},
BH(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.GO(a,null,b,!1)
r.set(b,s)
return s},
kL(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.GO(a,b,c,!0)
q.set(c,r)
return r},
GP(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.El(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
GO(a,b,c,d){return A.LX(A.LR(a,b,c,d))},
en(a,b){b.a=A.MV
b.b=A.MW
return b},
kK(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cz(null,null)
s.w=b
s.as=c
r=A.en(a,s)
a.eC.set(c,r)
return r},
GM(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.M4(a,b,r,c)
a.eC.set(r,s)
return s},
M4(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fq(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ik(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cz(null,null)
q.w=6
q.x=b
q.as=c
return A.en(a,q)},
GL(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.M2(a,b,r,c)
a.eC.set(r,s)
return s},
M2(a,b,c,d){var s,r
if(d){s=b.w
if(A.fq(b)||b===t.K)return b
else if(s===1)return A.kJ(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cz(null,null)
r.w=7
r.x=b
r.as=c
return A.en(a,r)},
M5(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cz(null,null)
s.w=13
s.x=b
s.as=q
r=A.en(a,s)
a.eC.set(q,r)
return r},
kI(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
M1(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kJ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cz(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.en(a,r)
a.eC.set(p,q)
return q},
El(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cz(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.en(a,o)
a.eC.set(q,n)
return n},
GN(a,b,c){var s,r,q="+"+(b+"("+A.kI(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cz(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.en(a,s)
a.eC.set(q,r)
return r},
GK(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kI(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kI(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.M1(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cz(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.en(a,p)
a.eC.set(r,o)
return o},
Em(a,b,c,d){var s,r=b.as+("<"+A.kI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.M3(a,b,c,r,d)
a.eC.set(r,s)
return s},
M3(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.BR(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ep(a,b,r,0)
m=A.ig(a,c,r,0)
return A.Em(a,n,m,c!==m)}}l=new A.cz(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.en(a,l)},
LR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
LX(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.LT(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.GG(a,r,l,k,!1)
else if(q===46)r=A.GG(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ff(a.u,a.e,k.pop()))
break
case 94:k.push(A.M5(a.u,k.pop()))
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
case 62:A.LV(a,k)
break
case 38:A.LU(a,k)
break
case 63:p=a.u
k.push(A.GM(p,A.ff(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.GL(p,A.ff(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.LS(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.GH(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.LY(a.u,a.e,o)
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
return A.ff(a.u,a.e,m)},
LT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
GG(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.M9(s,o.x)[p]
if(n==null)A.u('No "'+p+'" in "'+A.KU(o)+'"')
d.push(A.kL(s,o,n))}else d.push(p)
return m},
LV(a,b){var s,r=a.u,q=A.GF(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kJ(r,p,q))
else{s=A.ff(r,a.e,p)
switch(s.w){case 11:b.push(A.Em(r,s,q,a.n))
break
default:b.push(A.El(r,s,q))
break}}},
LS(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.GF(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ff(p,a.e,o)
q=new A.p5()
q.a=s
q.b=n
q.c=m
b.push(A.GK(p,r,q))
return
case-4:b.push(A.GN(p,b.pop(),s))
return
default:throw A.b(A.lq("Unexpected state under `()`: "+A.r(o)))}},
LU(a,b){var s=b.pop()
if(0===s){b.push(A.kK(a.u,1,"0&"))
return}if(1===s){b.push(A.kK(a.u,4,"1&"))
return}throw A.b(A.lq("Unexpected extended operation "+A.r(s)))},
GF(a,b){var s=b.splice(a.p)
A.GH(a.u,a.e,s)
a.p=b.pop()
return s},
ff(a,b,c){if(typeof c=="string")return A.kJ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.LW(a,b,c)}else return c},
GH(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ff(a,b,c[s])},
LY(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ff(a,b,c[s])},
LW(a,b,c){var s,r,q=b.w
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
OR(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b1(a,b,null,c,null)
r.set(c,s)}return s},
b1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fq(d))return!0
s=b.w
if(s===4)return!0
if(A.fq(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b1(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.b1(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.b1(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b1(a,b.x,c,d,e))return!1
return A.b1(a,A.E_(a,b),c,d,e)}if(s===6)return A.b1(a,p,c,d,e)&&A.b1(a,b.x,c,d,e)
if(q===7){if(A.b1(a,b,c,d.x,e))return!0
return A.b1(a,b,c,A.E_(a,d),e)}if(q===6)return A.b1(a,b,c,p,e)||A.b1(a,b,c,d.x,e)
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
if(!A.b1(a,j,c,i,e)||!A.b1(a,i,e,j,c))return!1}return A.Hg(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.Hg(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.N0(a,b,c,d,e)}if(o&&q===10)return A.N5(a,b,c,d,e)
return!1},
Hg(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b1(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b1(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b1(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b1(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b1(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
N0(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kL(a,b,r[o])
return A.H2(a,p,null,c,d.y,e)}return A.H2(a,b.y,null,c,d.y,e)},
H2(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b1(a,b[s],d,e[s],f))return!1
return!0},
N5(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b1(a,r[s],c,q[s],e))return!1
return!0},
ik(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fq(a))if(s!==6)r=s===7&&A.ik(a.x)
return r},
fq(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
H1(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
BR(a){return a>0?new Array(a):v.typeUniverse.sEA},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
p5:function p5(){this.c=this.b=this.a=null},
pD:function pD(a){this.a=a},
p2:function p2(){},
kH:function kH(a){this.a=a},
Ln(){var s,r,q
if(self.scheduleImmediate!=null)return A.NK()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.er(new A.zC(s),1)).observe(r,{childList:true})
return new A.zB(s,r,q)}else if(self.setImmediate!=null)return A.NL()
return A.NM()},
Lo(a){self.scheduleImmediate(A.er(new A.zD(a),0))},
Lp(a){self.setImmediate(A.er(new A.zE(a),0))},
Lq(a){A.E8(B.I,a)},
E8(a,b){var s=B.c.M(a.a,1000)
return A.M_(s<0?0:s,b)},
Ga(a,b){var s=B.c.M(a.a,1000)
return A.M0(s<0?0:s,b)},
M_(a,b){var s=new A.kG(!0)
s.pz(a,b)
return s},
M0(a,b){var s=new A.kG(!1)
s.pA(a,b)
return s},
h(a){return new A.k9(new A.w($.B,a.i("w<0>")),a.i("k9<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.H6(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.bw(A.C(a),A.af(a))},
H6(a,b){var s,r,q=new A.C5(b),p=new A.C6(b)
if(a instanceof A.w)a.mG(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.b2(q,p,s)
else{r=new A.w($.B,t._)
r.a=8
r.c=a
r.mG(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.B.fP(new A.Cw(s),t.H,t.S,t.z)},
bh(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.dg(null)
else{s=c.a
s===$&&A.v()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.C(a)
q=A.af(a)
s.ap(new A.ar(r,q))}else{s=A.C(a)
r=A.af(a)
q=c.a
q===$&&A.v()
q.bk(s,r)
c.a.q()}return}if(a instanceof A.kr){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.u(0,s)
A.l8(new A.C3(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.us(p,!1).W(new A.C4(c,b),t.P)
return}}A.H6(a,b)},
EF(a){var s=a.a
s===$&&A.v()
return new A.bf(s,A.n(s).i("bf<1>"))},
Lr(a,b){var s=new A.oK(b.i("oK<0>"))
s.pv(a,b)
return s},
Ez(a,b){return A.Lr(a,b)},
LN(a){return new A.kr(a,1)},
dy(a){return new A.kr(a,0)},
GJ(a,b,c){return 0},
iu(a){var s
if(t.C.b(a)){s=a.gcC()
if(s!=null)return s}return B.S},
iX(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.C(q)
r=A.af(q)
p=new A.w($.B,b.i("w<0>"))
o=s
n=r
m=A.kS(o,n)
if(m==null)o=new A.ar(o,n==null?A.iu(o):n)
else o=m
p.cE(o)
return p}return b.i("y<0>").b(l)?l:A.bF(l,b)},
bi(a,b){var s=a==null?b.a(a):a,r=new A.w($.B,b.i("w<0>"))
r.aH(s)
return r},
K0(a,b){var s
if(!b.b(null))throw A.b(A.aD(null,"computation","The type parameter is not nullable"))
s=new A.w($.B,b.i("w<0>"))
A.c4(a,new A.tG(null,s,b))
return s},
DE(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.B,b.i("w<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.tI(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.b2(new A.tH(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.dg(A.l([],b.i("z<0>")))
return n}i.a=A.a9(n,null,!1,b.i("0?"))}catch(l){p=A.C(l)
o=A.af(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kS(m,k)
if(j==null)m=new A.ar(m,k==null?A.iu(m):k)
else m=j
n.cE(m)
return n}else{i.d=p
i.c=o}}return f},
DD(a,b,c,d){var s=new A.tB(d,null,b,c),r=$.B,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fP(s,c.i("0/"),t.K,t.l)
a.dV(new A.cl(q,2,null,s,a.$ti.i("@<1>").Z(c).i("cl<1,2>")))
return q},
JZ(a,b){var s,r,q,p=A.l([],b.i("z<kp<0>>"))
for(s=a.length,r=b.i("kp<0>"),q=0;q<a.length;a.length===s||(0,A.p)(a),++q)p.push(new A.kp(a[q],r))
if(p.length===0)return A.bi(A.l([],b.i("z<0>")),b.i("q<0>"))
s=new A.w($.B,b.i("w<q<0>>"))
A.LH(p,new A.tC(new A.at(s,b.i("at<q<0>>")),p,b))
return s},
Nc(a){return a!=null},
LH(a,b){var s,r={},q=r.a=r.b=0,p=new A.AA(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.p)(a),++q)a[q].u7(p)},
kS(a,b){var s,r,q,p=$.B
if(p===B.i)return null
s=p.nd(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.nl(r,q)
return s},
fk(a,b){var s
if($.B!==B.i){s=A.kS(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcC()
if(b==null){A.nl(a,B.S)
b=B.S}}else b=B.S
else if(t.C.b(a))A.nl(a,b)
return new A.ar(a,b)},
LG(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bF(a,b){var s=new A.w($.B,b.i("w<0>"))
s.a=8
s.c=a
return s},
AG(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.E2()
b.cE(new A.ar(new A.bJ(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.mi(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.f9()
b.hf(p.a)
A.fb(b,q)
return}b.a^=2
b.b.da(new A.AH(p,b))},
fb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fA(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.fb(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gcn()===k.gcn())}else f=!1
if(f){f=g.a
r=f.c
f.b.fA(r.a,r.b)
return}j=$.B
if(j!==k)$.B=k
else j=null
f=s.a.c
if((f&15)===8)new A.AL(s,g,p).$0()
else if(q){if((f&1)!==0)new A.AK(s,m).$0()}else if((f&2)!==0)new A.AJ(g,s).$0()
if(j!=null)$.B=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hF(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.AG(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hF(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
Ho(a,b){if(t.ng.b(a))return b.fP(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dH(a,t.z,t.K)
throw A.b(A.aD(a,"onError",u.w))},
Nb(){var s,r
for(s=$.ic;s!=null;s=$.ic){$.kU=null
r=s.b
$.ic=r
if(r==null)$.kT=null
s.a.$0()}},
NC(){$.Ey=!0
try{A.Nb()}finally{$.kU=null
$.Ey=!1
if($.ic!=null)$.F2().$1(A.HP())}},
HA(a){var s=new A.oJ(a),r=$.kT
if(r==null){$.ic=$.kT=s
if(!$.Ey)$.F2().$1(A.HP())}else $.kT=r.b=s},
Nz(a){var s,r,q,p=$.ic
if(p==null){A.HA(a)
$.kU=$.kT
return}s=new A.oJ(a)
r=$.kU
if(r==null){s.b=p
$.ic=$.kU=s}else{q=r.b
s.b=q
$.kU=r.b=s
if(q==null)$.kT=s}},
l8(a){var s,r=null,q=$.B
if(B.i===q){A.Cu(r,r,B.i,a)
return}if(B.i===q.gk_().a)s=B.i.gcn()===q.gcn()
else s=!1
if(s){A.Cu(r,r,q,q.c8(a,t.H))
return}s=$.B
s.da(s.fi(a))},
E4(a,b){var s=null,r=b.i("d2<0>"),q=new A.d2(s,s,s,s,r)
q.aD(a)
q.lA()
return new A.bf(q,r.i("bf<1>"))},
PD(a,b){return new A.cn(A.cJ(a,"stream",t.K),b.i("cn<0>"))},
nS(a,b,c,d,e,f){return e?new A.i4(b,c,d,a,f.i("i4<0>")):new A.d2(b,c,d,a,f.i("d2<0>"))},
dq(a,b,c){return new A.ka(b,a,c.i("ka<0>"))},
pU(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.C(q)
r=A.af(q)
$.B.fA(s,r)}},
LE(a,b,c,d,e,f){var s=$.B,r=e?1:0,q=c!=null?32:0,p=A.oO(s,b,f),o=A.zR(s,c),n=d==null?A.Cy():d
return new A.eg(a,p,o,s.c8(n,t.H),s,r|q,f.i("eg<0>"))},
Lm(a){return new A.zy(a)},
oO(a,b,c){var s=b==null?A.NO():b
return a.dH(s,t.H,c)},
zR(a,b){if(b==null)b=A.NP()
if(t.b9.b(b))return a.fP(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dH(b,t.z,t.K)
throw A.b(A.U("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Nd(a){},
Nf(a,b){$.B.fA(a,b)},
Ne(){},
GA(a,b){var s=$.B,r=new A.hR(s,b.i("hR<0>"))
A.l8(r.gme())
if(a!=null)r.c=s.c8(a,t.H)
return r},
Mv(a,b,c){var s=a.A()
if(s!==$.eu())s.b4(new A.C8(b,c))
else b.ap(c)},
Mw(a,b,c){var s=a.A()
if(s!==$.eu())s.b4(new A.C9(b,c))
else b.cF(c)},
c4(a,b){var s=$.B
if(s===B.i)return s.kn(a,b)
return s.kn(a,s.fi(b))},
yz(a,b){var s,r=$.B
if(r===B.i)return r.km(a,b)
s=r.i0(b,t.hU)
return $.B.km(a,s)},
q0(a,b,c,d){return A.Ny(a,c,b,d)},
Ny(a,b,c,d){return $.B.ng(c,b).b1(a,d)},
Nw(a,b,c,d,e){A.kZ(d,e)},
kZ(a,b){A.Nz(new A.Cr(a,b))},
Cs(a,b,c,d){var s,r=$.B
if(r===c)return d.$0()
$.B=c
s=r
try{r=d.$0()
return r}finally{$.B=s}},
Ct(a,b,c,d,e){var s,r=$.B
if(r===c)return d.$1(e)
$.B=c
s=r
try{r=d.$1(e)
return r}finally{$.B=s}},
EE(a,b,c,d,e,f){var s,r=$.B
if(r===c)return d.$2(e,f)
$.B=c
s=r
try{r=d.$2(e,f)
return r}finally{$.B=s}},
Hw(a,b,c,d){return d},
Hx(a,b,c,d){return d},
Hv(a,b,c,d){return d},
Nv(a,b,c,d,e){return null},
Cu(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gcn()
r=c.gcn()
d=s!==r?c.fi(d):c.kh(d,t.H)}A.HA(d)},
Nu(a,b,c,d,e){return A.E8(d,B.i!==c?c.kh(e,t.H):e)},
Nt(a,b,c,d,e){e=c.uF(e,t.H,t.hU)
return A.Ga(d,e)},
Nx(a,b,c,d){A.Ib(d)},
Hu(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.DF(o,o,o,s,s)
r.D(0,e)}else r=o
s=new A.oW(c.gmt(),c.gmx(),c.gmv(),c.gmp(),c.gmq(),c.gmo(),c.glU(),c.gk_(),c.glL(),c.glK(),c.gmj(),c.glZ(),c.gjI(),c.gkd(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.pN(s,q)
p=d.a
if(p!=null)s.as=new A.pM(s,p)}if(r!=null)s.at=new A.pO(s,r)
return s},
zC:function zC(a){this.a=a},
zB:function zB(a,b,c){this.a=a
this.b=b
this.c=c},
zD:function zD(a){this.a=a},
zE:function zE(a){this.a=a},
kG:function kG(a){this.a=a
this.b=null
this.c=0},
BF:function BF(a,b){this.a=a
this.b=b},
BE:function BE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k9:function k9(a,b){this.a=a
this.b=!1
this.$ti=b},
C5:function C5(a){this.a=a},
C6:function C6(a){this.a=a},
Cw:function Cw(a){this.a=a},
C3:function C3(a,b){this.a=a
this.b=b},
C4:function C4(a,b){this.a=a
this.b=b},
oK:function oK(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
zG:function zG(a){this.a=a},
zH:function zH(a){this.a=a},
zJ:function zJ(a){this.a=a},
zK:function zK(a,b){this.a=a
this.b=b},
zI:function zI(a,b){this.a=a
this.b=b},
zF:function zF(a){this.a=a},
kr:function kr(a,b){this.a=a
this.b=b},
pA:function pA(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
i3:function i3(a,b){this.a=a
this.$ti=b},
ar:function ar(a,b){this.a=a
this.b=b},
aX:function aX(a,b){this.a=a
this.$ti=b},
f7:function f7(a,b,c,d,e,f,g){var _=this
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
AB:function AB(a,b){this.a=a
this.b=b},
AC:function AC(a,b){this.a=a
this.b=b},
AA:function AA(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(){},
aG:function aG(a,b){this.a=a
this.$ti=b},
at:function at(a,b){this.a=a
this.$ti=b},
cl:function cl(a,b,c,d,e){var _=this
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
AD:function AD(a,b){this.a=a
this.b=b},
AI:function AI(a,b){this.a=a
this.b=b},
AH:function AH(a,b){this.a=a
this.b=b},
AF:function AF(a,b){this.a=a
this.b=b},
AE:function AE(a,b){this.a=a
this.b=b},
AL:function AL(a,b,c){this.a=a
this.b=b
this.c=c},
AM:function AM(a,b){this.a=a
this.b=b},
AN:function AN(a){this.a=a},
AK:function AK(a,b){this.a=a
this.b=b},
AJ:function AJ(a,b){this.a=a
this.b=b},
AO:function AO(a,b){this.a=a
this.b=b},
AP:function AP(a,b,c){this.a=a
this.b=b
this.c=c},
AQ:function AQ(a,b){this.a=a
this.b=b},
oJ:function oJ(a){this.a=a
this.b=null},
ad:function ad(){},
yb:function yb(a,b){this.a=a
this.b=b},
yc:function yc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yd:function yd(a,b){this.a=a
this.b=b},
ye:function ye(a,b){this.a=a
this.b=b},
y9:function y9(a){this.a=a},
ya:function ya(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(){},
el:function el(){},
Bx:function Bx(a){this.a=a},
Bw:function Bw(a){this.a=a},
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
i4:function i4(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
bf:function bf(a,b){this.a=a
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
zy:function zy(a){this.a=a},
zx:function zx(a){this.a=a},
kD:function kD(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b9:function b9(){},
zT:function zT(a,b,c){this.a=a
this.b=b
this.c=c},
zS:function zS(a){this.a=a},
i2:function i2(){},
p1:function p1(){},
ck:function ck(a,b){this.b=a
this.a=null
this.$ti=b},
hQ:function hQ(a,b){this.b=a
this.c=b
this.a=null},
At:function At(){},
ej:function ej(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
Be:function Be(a,b){this.a=a
this.b=b},
hR:function hR(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cn:function cn(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
kk:function kk(a){this.$ti=a},
dA:function dA(a,b){this.b=a
this.$ti=b},
Bc:function Bc(a,b){this.a=a
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
C8:function C8(a,b){this.a=a
this.b=b},
C9:function C9(a,b){this.a=a
this.b=b},
kn:function kn(){},
hU:function hU(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
fe:function fe(a,b,c){this.b=a
this.a=b
this.$ti=c},
kl:function kl(a,b){this.a=a
this.$ti=b},
i0:function i0(a,b,c,d,e,f){var _=this
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
C_:function C_(a,b){this.a=a
this.b=b},
C1:function C1(a,b){this.a=a
this.b=b},
C0:function C0(a,b){this.a=a
this.b=b},
BY:function BY(a,b){this.a=a
this.b=b},
BZ:function BZ(a,b){this.a=a
this.b=b},
BX:function BX(a,b){this.a=a
this.b=b},
BU:function BU(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b},
BT:function BT(a,b){this.a=a
this.b=b},
BS:function BS(a,b){this.a=a
this.b=b},
BW:function BW(a,b){this.a=a
this.b=b},
BV:function BV(a,b){this.a=a
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
Ap:function Ap(a,b,c){this.a=a
this.b=b
this.c=c},
Ar:function Ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ao:function Ao(a,b){this.a=a
this.b=b},
Aq:function Aq(a,b,c){this.a=a
this.b=b
this.c=c},
pp:function pp(){},
Bl:function Bl(a,b,c){this.a=a
this.b=b
this.c=c},
Bk:function Bk(a,b){this.a=a
this.b=b},
Bm:function Bm(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a){this.a=a},
Cr:function Cr(a,b){this.a=a
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
DF(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dx(d.i("@<0>").Z(e).i("dx<1,2>"))
b=A.EM()}else{if(A.HU()===b&&A.HT()===a)return new A.eh(d.i("@<0>").Z(e).i("eh<1,2>"))
if(a==null)a=A.EL()}else{if(b==null)b=A.EM()
if(a==null)a=A.EL()}return A.LF(a,b,c,d,e)},
GC(a,b){var s=a[b]
return s===a?null:s},
Ej(a,b,c){if(c==null)a[b]=a
else a[b]=c},
Ei(){var s=Object.create(null)
A.Ej(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
LF(a,b,c,d,e){var s=c!=null?c:new A.An(d)
return new A.kh(a,b,s,d.i("@<0>").Z(e).i("kh<1,2>"))},
dV(a,b,c,d){if(b==null){if(a==null)return new A.bM(c.i("@<0>").Z(d).i("bM<1,2>"))
b=A.EM()}else{if(A.HU()===b&&A.HT()===a)return new A.j7(c.i("@<0>").Z(d).i("j7<1,2>"))
if(a==null)a=A.EL()}return A.LQ(a,b,null,c,d)},
m(a,b,c){return A.I1(a,new A.bM(b.i("@<0>").Z(c).i("bM<1,2>")))},
t(a,b){return new A.bM(a.i("@<0>").Z(b).i("bM<1,2>"))},
LQ(a,b,c,d,e){return new A.ks(a,b,new A.Ba(d),d.i("@<0>").Z(e).i("ks<1,2>"))},
vn(a){return new A.cI(a.i("cI<0>"))},
aP(a){return new A.cI(a.i("cI<0>"))},
ap(a,b){return A.OB(a,new A.cI(b.i("cI<0>")))},
Ek(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
dz(a,b,c){var s=new A.ei(a,b,c.i("ei<0>"))
s.c=a.e
return s},
MH(a,b){return J.x(a,b)},
MI(a){return J.ab(a)},
FF(a){if(a.length===0)return null
return B.b.ga_(a)},
bs(a,b,c){var s=A.dV(null,null,b,c)
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
Kh(a,b){var s=t.bP
return J.Fa(s.a(a),s.a(b))},
vH(a){var s,r
if(A.ET(a))return"{...}"
s=new A.a6("")
try{r={}
$.fl.push(a)
s.a+="{"
r.a=!0
a.a5(0,new A.vI(r,s))
s.a+="}"}finally{$.fl.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
DO(a){return new A.ja(A.a9(A.Ki(null),null,!1,a.i("0?")),a.i("ja<0>"))},
Ki(a){return 8},
dx:function dx(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
AS:function AS(a){this.a=a},
AR:function AR(a){this.a=a},
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
An:function An(a){this.a=a},
fc:function fc(a,b){this.a=a
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
Ba:function Ba(a){this.a=a},
cI:function cI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Bb:function Bb(a){this.a=a
this.c=this.b=null},
ei:function ei(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
vm:function vm(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){var _=this
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
bc:function bc(){},
M:function M(){},
X:function X(){},
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
cA:function cA(){},
kB:function kB(){},
kM:function kM(){},
Hm(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.C(r)
q=A.ac(String(s),null,null)
throw A.b(q)}q=A.Cb(p)
return q},
Cb(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.pa(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.Cb(a[s])
return a},
Mk(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.IR()
else s=new Uint8Array(o)
for(r=J.J(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Mj(a,b,c,d){var s=a?$.IQ():$.IP()
if(s==null)return null
if(0===c&&d===b.length)return A.H_(s,b)
return A.H_(s,b.subarray(c,d))},
H_(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Fd(a,b,c,d,e,f){if(B.c.an(f,4)!==0)throw A.b(A.ac("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.ac("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.ac("Invalid base64 padding, more than two '=' characters",a,b))},
Lv(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.aD(b,"Not a byte value at index "+q+": 0x"+B.c.kY(s.h(b,q),16),null))},
Lu(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ag(f,2),i=f&3,h=$.F3()
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
return A.Go(a,r+1,c,-m-1)}throw A.b(A.ac(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.ac(k,a,r))},
Ls(a,b,c,d){var s=A.Lt(a,b,c),r=(d&3)+(s-b),q=B.c.ag(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.II()},
Lt(a,b,c){var s,r=c,q=r,p=0
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
Go(a,b,c,d){var s,r
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
JO(a){return B.da.h(0,a.toLowerCase())},
FJ(a,b,c){return new A.j8(a,b)},
ML(a){return a.p()},
LO(a,b){return new A.B6(a,[],A.Og())},
LP(a,b,c){var s,r=new A.a6("")
A.GE(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
GE(a,b,c,d){var s=A.LO(b,c)
s.iZ(a)},
H0(a){switch(a){case 65:return"Missing extension byte"
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
B5:function B5(a){this.a=a},
pb:function pb(a){this.a=a},
B3:function B3(a,b,c){this.b=a
this.c=b
this.a=c},
BP:function BP(){},
BO:function BO(){},
ln:function ln(){},
pE:function pE(){},
lo:function lo(a){this.a=a},
BG:function BG(a,b){this.a=a
this.b=b},
lu:function lu(a){this.a=a},
iw:function iw(a){this.a=a},
oM:function oM(a){this.a=0
this.b=a},
zQ:function zQ(a){this.c=null
this.a=0
this.b=a},
zM:function zM(){},
zz:function zz(a,b){this.a=a
this.b=b},
lv:function lv(){},
oL:function oL(){this.a=0},
zL:function zL(a,b){this.a=a
this.b=b},
qs:function qs(){},
hL:function hL(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b
this.c=0},
lG:function lG(){},
pv:function pv(a,b,c){this.a=a
this.b=b
this.$ti=c},
f9:function f9(a,b,c){this.a=a
this.b=b
this.$ti=c},
lI:function lI(){},
aH:function aH(){},
rm:function rm(a){this.a=a},
eJ:function eJ(){},
j8:function j8(a,b){this.a=a
this.b=b},
mN:function mN(a,b){this.a=a
this.b=b},
uj:function uj(){},
mP:function mP(a){this.b=a},
B4:function B4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mO:function mO(a){this.a=a},
B7:function B7(){},
B8:function B8(a,b){this.a=a
this.b=b},
B6:function B6(a,b,c){this.c=a
this.a=b
this.b=c},
mS:function mS(){},
mT:function mT(a){this.a=a},
nV:function nV(){},
BC:function BC(a,b){this.a=a
this.b=b},
kF:function kF(){},
px:function px(a){this.a=a},
BN:function BN(a,b,c){this.a=a
this.b=b
this.c=c},
or:function or(){},
os:function os(){},
pJ:function pJ(a){this.b=this.a=0
this.c=a},
BQ:function BQ(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
k3:function k3(a){this.a=a},
dB:function dB(a){this.a=a
this.b=16
this.c=0},
pP:function pP(){},
Gy(a,b){var s=A.LC(a,b)
if(s==null)throw A.b(A.ac("Could not parse BigInt",a,null))
return s},
Lz(a,b){var s,r,q=$.cq(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bp(0,$.F4()).nZ(0,A.kc(s))
s=0
o=0}}if(b)return q.bS(0)
return q},
Gq(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
LA(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.w.uH(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.Gq(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.Gq(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cq()
l=A.bR(j,i)
return new A.aQ(l===0?!1:c,i,l)},
LC(a,b){var s,r,q,p,o
if(a==="")return null
s=$.IK().ev(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.Lz(p,q)
if(o!=null)return A.LA(o,2,q)
return null},
bR(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
Eg(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
Gp(a){var s
if(a===0)return $.cq()
if(a===1)return $.fu()
if(a===2)return $.IL()
if(Math.abs(a)<4294967296)return A.kc(B.c.fY(a))
s=A.Lw(a)
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
return new A.aQ(r===0?!1:o,s,r)}r=B.c.M(B.c.gn_(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bR(r,s)
return new A.aQ(r===0?!1:o,s,r)},
Lw(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.U("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cq()
r=$.IJ()
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
if(n<0)k=l.dR(0,-n)
else k=n>0?l.bT(0,n):l
if(s)return k.bS(0)
return k},
Eh(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.K(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.K(d)
d[s]=0}return b+c},
Gw(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.an(c,16),l=16-m,k=B.c.bT(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dR(p,l)
r&2&&A.K(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bT((p&k)>>>0,m)}r&2&&A.K(d)
d[n]=q},
Gr(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.an(c,16)===0)return A.Eh(a,b,o,d)
s=b+o+1
A.Gw(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.K(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
LB(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.an(c,16),m=16-n,l=B.c.bT(1,n)-1,k=B.c.dR(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bT((q&l)>>>0,m)
s&2&&A.K(d)
d[r]=(p|k)>>>0
k=B.c.dR(q,n)}s&2&&A.K(d)
d[j]=k},
zN(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Lx(a,b,c,d,e){var s,r,q
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
Gx(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.K(d)
d[e]=p&65535
r=B.c.M(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.K(d)
d[e]=n&65535
r=B.c.M(n,65536)}},
Ly(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.j9((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
OJ(a){return A.l5(a)},
DA(a,b){return new A.mc(new WeakMap(),a,b.i("mc<0>"))},
DB(a){},
Az(a,b){var s=$.IM()
s=s==null?null:new s(A.er(A.Pi(a,b),1))
return new A.p4(s,b.i("p4<0>"))},
aM(a){var s=A.ha(a,null)
if(s!=null)return s
throw A.b(A.ac(a,null,null))},
Ot(a){var s=A.KH(a)
if(s!=null)return s
throw A.b(A.ac("Invalid double",a,null))},
JS(a,b){a=A.aS(a,new Error())
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
fX(a,b){var s=A.bP(a,!1,b)
s.$flags=3
return s},
e8(a,b,c){var s,r,q,p,o
A.aW(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.aA(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.G_(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.L6(a,b,c)
if(r)a=J.lg(a,c)
if(b>0)a=J.fw(a,b)
s=A.O(a,t.S)
return A.G_(s)},
L6(a,b,c){var s=a.length
if(b>=s)return""
return A.KJ(a,b,c==null||c>s?s:c)},
ah(a,b,c){return new A.eN(a,A.DL(a,!1,b,c,!1,""))},
OI(a,b){return a==null?b==null:a===b},
yf(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
Ea(){var s,r,q=A.KC()
if(q==null)throw A.b(A.a2("'Uri.base' is not supported"))
s=$.Gh
if(s!=null&&q===$.Gg)return s
r=A.oq(q)
$.Gh=r
$.Gg=q
return r},
pI(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.IN()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bD(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Me(a){var s,r,q
if(!$.IO())return A.Mf(a)
s=new URLSearchParams()
a.a5(0,new A.BM(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.B(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
E2(){return A.af(new Error())},
Dx(a,b,c,d,e,f,g){var s=A.KK(a,b,c,d,e,f,g,0,!0)
return new A.aI(s==null?new A.t_(a,b,c,d,e,f,g,0).$0():s,0,!0)},
JI(){return new A.aI(Date.now(),0,!1)},
m3(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.aA(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.aA(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aD(b,s,"Time including microseconds is outside valid range"))
A.cJ(c,"isUtc",t.y)
return a},
JJ(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Fr(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
m2(a){if(a>=10)return""+a
return"0"+a},
bX(a,b,c){return new A.aF(a+1000*b+1e6*c)},
fN(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aD(b,"name","No enum value with that name"))},
iN(a){if(typeof a=="number"||A.b0(a)||a==null)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return A.FZ(a)},
Ft(a,b){A.cJ(a,"error",t.K)
A.cJ(b,"stackTrace",t.l)
A.JS(a,b)},
lq(a){return new A.lp(a)},
U(a,b){return new A.bJ(!1,null,b,a)},
aD(a,b,c){return new A.bJ(!0,a,b,c)},
dH(a,b){return a},
b7(a){var s=null
return new A.dj(s,s,!1,s,s,a)},
xI(a,b){return new A.dj(null,null,!0,a,b,"Value not in range")},
aA(a,b,c,d,e){return new A.dj(b,c,!0,a,d,"Invalid value")},
G3(a,b,c,d){if(a<b||a>c)throw A.b(A.aA(a,b,c,d,null))
return a},
KO(a,b,c,d){return A.FD(a,d,b,null,c)},
bk(a,b,c){if(0>a||a>c)throw A.b(A.aA(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aA(b,a,c,"end",null))
return b}return c},
aW(a,b){if(a<0)throw A.b(A.aA(a,0,null,b,null))
return a},
FC(a,b){var s=b.b
return new A.j_(s,!0,a,null,"Index out of range")},
mE(a,b,c,d,e){return new A.j_(b,!0,a,e,"Index out of range")},
FD(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.mE(a,b,c,d,e==null?"index":e))
return a},
a2(a){return new A.d0(a)},
Ge(a){return new A.ok(a)},
A(a){return new A.bt(a)},
az(a){return new A.lL(a)},
Fu(a){return new A.p3(a)},
ac(a,b,c){return new A.br(a,b,c)},
K7(a,b,c){var s,r
if(A.ET(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.fl.push(a)
try{A.N9(a,s)}finally{$.fl.pop()}r=A.yf(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
uf(a,b,c){var s,r
if(A.ET(a))return b+"..."+c
s=new A.a6(b)
$.fl.push(a)
try{r=s
r.a=A.yf(r.a,a,", ")}finally{$.fl.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
N9(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
FM(a,b,c,d,e){return new A.ez(a,b.i("@<0>").Z(c).Z(d).Z(e).i("ez<1,2,3,4>"))},
cg(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.ab(a)
b=J.ab(b)
return A.hz(A.aC(A.aC($.fv(),s),b))}if(B.d===d){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
return A.hz(A.aC(A.aC(A.aC($.fv(),s),b),c))}if(B.d===e){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
return A.hz(A.aC(A.aC(A.aC(A.aC($.fv(),s),b),c),d))}if(B.d===f){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
return A.hz(A.aC(A.aC(A.aC(A.aC(A.aC($.fv(),s),b),c),d),e))}if(B.d===g){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
f=J.ab(f)
return A.hz(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fv(),s),b),c),d),e),f))}s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
f=J.ab(f)
g=J.ab(g)
g=A.hz(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fv(),s),b),c),d),e),f),g))
return g},
w9(a){var s,r=$.fv()
for(s=J.E(a);s.k();)r=A.aC(r,J.ab(s.gn()))
return A.hz(r)},
H7(a,b){return 65536+((a&1023)<<10)+(b&1023)},
oq(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Gf(a4<a4?B.a.B(a5,0,a4):a5,5,a3).gnU()
else if(s===32)return A.Gf(B.a.B(a5,5,a4),0,a3).gnU()}r=A.a9(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Hz(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Hz(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.dI(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.af(a5,"http",0)){if(i&&o+3===n&&B.a.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dI(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.af(a5,"https",0)){if(i&&o+4===n&&B.a.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dI(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cm(a4<a5.length?B.a.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Eo(a5,0,q)
else{if(q===0)A.i6(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.GW(a5,c,p-1):""
a=A.GU(a5,p,o,!1)
i=o+1
if(i<n){a0=A.ha(B.a.B(a5,i,n),a3)
d=A.BI(a0==null?A.u(A.ac("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.GV(a5,n,m,a3,j,a!=null)
a2=m<l?A.BJ(a5,m+1,l,a3):a3
return A.kO(j,b,a,d,a1,a2,l<a4?A.GT(a5,l+1,a4):a3)},
Lg(a){return A.Er(a,0,a.length,B.o,!1)},
op(a,b,c){throw A.b(A.ac("Illegal IPv4 address, "+a,b,c))},
Ld(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
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
Le(a,b,c){var s
if(b===c)throw A.b(A.ac("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Lf(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Gi(a,b,c)
return!0},
Lf(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.br(o,a,r)
s=r
break}return new A.br("Unexpected character",a,r-1)}if(s-1===b)return new A.br(o,a,s)
return new A.br("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.br("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.br("Invalid IPvFuture address character",a,s)}},
Gi(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.yQ(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Ld(a1,o,a3,s,q*2)
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
B.f.kx(s,c,b,0)}}return s},
kO(a,b,c,d,e,f,g){return new A.kN(a,b,c,d,e,f,g)},
GQ(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i6(a,b,c){throw A.b(A.ac(c,a,b))},
Mb(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.E(q,"/")){s=A.a2("Illegal path character "+q)
throw A.b(s)}}},
BI(a,b){if(a!=null&&a===A.GQ(b))return null
return a},
GU(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.i6(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Mc(a,r,s)
if(p<s){o=p+1
q=A.GZ(a,B.a.af(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Le(a,r,s)
m=B.a.B(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cq(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.GZ(a,B.a.af(a,"25",o)?s+3:o,c,"%25")}else q=""
A.Gi(a,b,s)
return"["+B.a.B(a,b,s)+q+"]"}return A.Mh(a,b,c)},
Mc(a,b,c){var s=B.a.cq(a,"%",b)
return s>=b&&s<c?s:c},
GZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a6(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.Ep(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a6("")
m=i.a+=B.a.B(a,r,s)
if(n)o=B.a.B(a,s,s+3)
else if(o==="%")A.i6(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a6("")
if(r<s){i.a+=B.a.B(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.B(a,r,s)
if(i==null){i=new A.a6("")
n=i}else n=i
n.a+=j
m=A.En(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.B(a,b,c)
if(r<c){j=B.a.B(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Mh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.Ep(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a6("")
l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.B(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a6("")
if(r<s){q.a+=B.a.B(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.i6(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a6("")
m=q}else m=q
m.a+=l
k=A.En(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.B(a,b,c)
if(r<c){l=B.a.B(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
Eo(a,b,c){var s,r,q
if(b===c)return""
if(!A.GS(a.charCodeAt(b)))A.i6(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.i6(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.B(a,b,c)
return A.Ma(r?a.toLowerCase():a)},
Ma(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GW(a,b,c){if(a==null)return""
return A.kP(a,b,c,16,!1,!1)},
GV(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kP(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.T(s,"/"))s="/"+s
return A.Mg(s,e,f)},
Mg(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.T(a,"/")&&!B.a.T(a,"\\"))return A.Eq(a,!s||c)
return A.fi(a)},
BJ(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.U("Both query and queryParameters specified",null))
return A.kP(a,b,c,256,!0,!1)}if(d==null)return null
return A.Me(d)},
Mf(a){var s={},r=new A.a6("")
s.a=""
a.a5(0,new A.BK(new A.BL(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
GT(a,b,c){if(a==null)return null
return A.kP(a,b,c,256,!0,!1)},
Ep(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.CZ(s)
p=A.CZ(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bD(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.B(a,b,b+3).toUpperCase()
return null},
En(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.mC(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.e8(s,0,null)},
kP(a,b,c,d,e,f){var s=A.GY(a,b,c,d,e,f)
return s==null?B.a.B(a,b,c):s},
GY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.Ep(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.i6(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.En(o)}if(p==null){p=new A.a6("")
l=p}else l=p
l.a=(l.a+=B.a.B(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.B(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
GX(a){if(B.a.T(a,"."))return!0
return B.a.c5(a,"/.")!==-1},
fi(a){var s,r,q,p,o,n
if(!A.GX(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.C(s,"/")},
Eq(a,b){var s,r,q,p,o,n
if(!A.GX(a))return!b?A.GR(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.GR(s[0])
return B.b.C(s,"/")},
GR(a){var s,r,q=a.length
if(q>=2&&A.GS(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.B(a,0,s)+"%3A"+B.a.ab(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Mi(a,b){if(a.wB("package")&&a.c==null)return A.HB(b,0,b.length)
return-1},
Md(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.U("Invalid URL encoding",null))}}return s},
Er(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.B(a,b,c)
else p=new A.ct(B.a.B(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.U("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.U("Truncated URI",null))
p.push(A.Md(a,o+1))
o+=2}else p.push(r)}}return d.fl(p)},
GS(a){var s=a|32
return 97<=s&&s<=122},
Gf(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
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
if((j.length&1)===1)a=B.ac.wX(a,m,s)
else{l=A.GY(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dI(a,m,s,l)}return new A.yP(a,j,c)},
Hz(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
GI(a){if(a.b===7&&B.a.T(a.a,"package")&&a.c<=0)return A.HB(a.a,a.e,a.f)
return-1},
HB(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
My(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
zO:function zO(){},
zP:function zP(){},
p4:function p4(a,b){this.a=a
this.$ti=b},
BM:function BM(a){this.a=a},
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
Au:function Au(){},
ag:function ag(){},
lp:function lp(a){this.a=a},
dt:function dt(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d,e,f){var _=this
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
bt:function bt(a){this.a=a},
lL:function lL(a){this.a=a},
nd:function nd(){},
jW:function jW(){},
p3:function p3(a){this.a=a},
br:function br(a,b,c){this.a=a
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
a6:function a6(a){this.a=a},
yQ:function yQ(a){this.a=a},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
BL:function BL(a,b){this.a=a
this.b=b},
BK:function BK(a){this.a=a},
yP:function yP(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b,c,d,e,f,g,h){var _=this
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
Kj(a){return a},
Ka(a){return a},
E5(a){return a},
K8(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.H4(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
K_(a){return new v.G.Promise(A.c5(new A.tF(a)))},
n9:function n9(a){this.a=a},
tF:function tF(a){this.a=a},
tD:function tD(a){this.a=a},
tE:function tE(a){this.a=a},
Cl(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Mp,a)
s[$.ft()]=a
return s},
d5(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Mq,a)
s[$.ft()]=a
return s},
c5(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.Mr,a)
s[$.ft()]=a
return s},
pR(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.Ms,a)
s[$.ft()]=a
return s},
ib(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.Mt,a)
s[$.ft()]=a
return s},
Ew(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Mu,a)
s[$.ft()]=a
return s},
Mp(a){return a.$0()},
Mq(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
Mr(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
Ms(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
Mt(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Mu(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Hk(a){return a==null||A.b0(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
l4(a){if(A.Hk(a))return a
return new A.D3(new A.eh(t.mp)).$1(a)},
CW(a,b){return a[b]},
EJ(a,b,c){return a[b].apply(a,c)},
O3(a,b){var s,r
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
a4(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.aG(s,b.i("aG<0>"))
a.then(A.er(new A.D9(r),1),A.er(new A.Da(r),1))
return s},
Hj(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
l0(a){if(A.Hj(a))return a
return new A.CI(new A.eh(t.mp)).$1(a)},
D3:function D3(a){this.a=a},
D9:function D9(a){this.a=a},
Da:function Da(a){this.a=a},
CI:function CI(a){this.a=a},
I5(a,b){return Math.max(a,b)},
G1(){return B.au},
G2(){return $.Do()},
B0:function B0(){},
B1:function B1(a){this.a=a},
Jq(a,b,c){return J.F8(a,b,c)},
m9:function m9(){},
a7:function a7(){},
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
eP:function eP(a,b){this.a=a
this.$ti=b},
i5:function i5(){},
hn:function hn(a,b){this.a=a
this.$ti=b},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.$ti=c},
m4:function m4(){},
FT(){throw A.b(A.a2(u.O))},
Lc(){throw A.b(A.a2("Cannot modify an unmodifiable Map"))},
n8:function n8(){},
on:function on(){},
au(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.e8(m,0,null)},
cu:function cu(a){this.a=a},
ca:function ca(){this.a=null},
my:function my(){},
tK:function tK(){},
d3(a){var s=new Uint32Array(A.ba(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.pt(s,r,a,q,new Uint32Array(16))},
ps:function ps(){},
Bo:function Bo(){},
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
xW:function xW(){},
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
if((f&B.c.bT(1,31-a))>>>0!==0){e=(e^s)>>>0
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
Fq(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.dc(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
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
if($.l9()===B.Q){a5=A.fm(a5)
a6=A.fm(a6)
a7=A.fm(a7)
a8=A.fm(a8)}a5^=b3[0]
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
if($.l9()===B.Q){a1=A.fm(a1)
a2=A.fm(a2)
a3=A.fm(a3)
a4=A.fm(a4)}a9.$flags&2&&A.K(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
HL(a){var s,r,q,p,o,n,m,l,k,j,i=a.gem(),h=B.d9.h(0,i.gm(0))
if(h==null)throw A.b(A.U("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.F8(B.y.gac(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.K(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.l9()===B.Q)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.an(m,k)
if(n===0)j=A.HG((j<<8|j>>>24)>>>0)^B.cK[B.c.j9(m,k)-1]<<24
else if(o&&n===4)j=A.HG(j)
r[m]=(j^r[m-k])>>>0}return r},
HG(a){return(B.n[a>>>24&255]<<24|B.n[a>>>16&255]<<16|B.n[a>>>8&255]<<8|B.n[a&255])>>>0},
fm(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
rp:function rp(){},
rF:function rF(){},
Aj:function Aj(){},
nv:function nv(a,b){this.a=a
this.b=b},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
qo:function qo(){},
HH(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.nv("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eA)){s=J.Z(a)
if(B.a.T(s,"TypeError: "))s=B.a.ab(s,11)
a=new A.eA(s,b.b)}return a},
Ht(a,b,c){A.Ft(A.HH(a,c),b)},
Mn(a,b){return new A.dA(new A.C7(a,b),t.fb)},
id(a,b,c){return A.Nm(a,b,c)},
Nm(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$id=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$id)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.Cm(e)
a1.r=new A.Cn(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.Q
case 6:n=null
p=9
s=12
return A.a(A.a4(c.read(),k),$async$id)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.C(b)
l=A.af(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.HH(m,a)
k=l
j=a1.b
if(j>=4)A.u(a1.bV())
if((j&1)!==0){j=a1.gaS()
j.aM(d,k==null?B.S:k)}s=15
return A.a(a1.q(),$async$id)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.uJ()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.u(a1.bV())
if((f&1)!==0)a1.gaS().aD(g)}g=a1.b
s=((g&1)!==0?(a1.gaS().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aG(new A.w($.B,j),i):g).a,$async$id)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$id,r)},
lD:function lD(a){this.b=!1
this.c=a},
qr:function qr(a){this.a=a},
C7:function C7(a,b){this.a=a
this.b=b},
Cm:function Cm(a){this.a=a},
Cn:function Cn(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.a=a},
qt:function qt(a){this.a=a},
Fn(a,b){return new A.eA(a,b)},
eA:function eA(a,b){this.a=a
this.b=b},
n1:function n1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Kt(a,b){var s=t.N,r=A.l([],t.e8),q=$.EY()
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
KR(a,b){var s=new Uint8Array(0),r=$.EY()
if(!r.b.test(a))A.u(A.aD(a,"method","Not a valid method"))
r=t.N
return new A.xL(s,a,b,A.dV(new A.ly(),new A.lz(),r,r))},
xL:function xL(a,b,c,d){var _=this
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
Jr(a){return a.toLowerCase()},
iB:function iB(a,b,c){this.a=a
this.c=b
this.$ti=c},
Km(a){return A.Ph("media type",a,new A.vJ(a))},
DQ(a,b,c){var s=t.N
if(c==null)s=A.t(s,s)
else{s=new A.iB(A.O4(),A.t(s,t.ag),t.fo)
s.D(0,c)}return new A.fZ(a.toLowerCase(),b.toLowerCase(),new A.d_(s,t.ph))},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
vJ:function vJ(a){this.a=a},
vL:function vL(a){this.a=a},
vK:function vK(){},
Oy(a){var s
a.ne($.IY(),"quoted string")
s=a.gkK().h(0,0)
return A.Ij(B.a.B(s,1,s.length-1),$.IX(),new A.CQ(),null)},
CQ:function CQ(){},
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
Bu:function Bu(a){this.a=a},
wJ:function wJ(){},
h9(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aV("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aV("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aV('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.k
else if(j.b(o))n=A.bs(o,t.N,t.X)
else throw A.b(A.aV('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.u
else if(t.j.b(m)){for(j=J.J(m),k=0;k<j.gm(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aV('Record field "imgs"['+k+"] is present but not a string."))
j=j.fj(m,t.N)
l=j.bP(j)}else throw A.b(A.aV('Record field "imgs" is present but not a list.'))
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
KA(a,b,c,d,e,f){var s=A.bi(null,t.H)
return new A.wK(b,c,f,new A.wT(a,B.ai,null),e,d,s)},
KB(a){return 0.5+B.au.nx()},
jD:function jD(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
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
Bv:function Bv(a,b){this.a=a
this.b=null
this.c=b},
K4(a,b,c){return new A.cQ(a,b,c)},
iZ(a,b){return new A.dO(a)},
eL:function eL(a,b,c,d){var _=this
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
JG(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="storePolicies",b2="recordId",b3="field",b4="imgs",b5="name",b6="expectedSha256",b7="allowVolatileBlobs",b8="session",b9="index",c0="refId",c1="token",c2="id",c3="spec",c4="store"
switch(c5){case"open":s=c6.h(0,"stores")
r=c6.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.Q("Malformed open payload."))
q=c6.h(0,b1)
p=A.l([],t.d)
for(o=J.J(s),n=0;n<o.gm(s);++n)p.push(A.Dw(o.h(s,n),"stores["+n+"]"))
o=t.N
m=A.t(o,o)
for(l=r.ga0(),l=l.gt(l);l.k();){k=l.gn()
m.j(0,J.Z(k.a),A.EI(k.b,"fingerprint"))}if(q==null)o=null
else{o=A.t(o,t.X)
for(l=t.f.a(q).ga0(),l=l.gt(l);l.k();){k=l.gn()
o.j(0,J.Z(k.a),A.Dw(k.b,b1))}}return new A.nc(p,m,o)
case"capabilities":return B.bN
case"health":return B.bQ
case"close":return B.bO
case"fileBeginUpload":j=c6.h(0,"size")
if(!A.a8(j))throw A.b(A.Q("Malformed fileBeginUpload payload."))
return new A.mh(A.aT(c6),A.bb(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.kW(c6.h(0,b5),b5,"blob.bin"),j,A.d6(c6.h(0,b6),b6),A.eo(c6.h(0,b7),b7,!1))
case"fileChunk":i=c6.h(0,"chunk")
if(!t.p.b(i))throw A.b(A.Q("Malformed fileChunk payload."))
return new A.mi(A.bb(c6,b8),i)
case"fileFinish":return new A.mn(A.bb(c6,b8))
case"fileAbort":return new A.mg(A.bb(c6,b8))
case"filesList":return new A.mw(A.aT(c6),A.bb(c6,b2),A.kW(c6.h(0,b3),b3,b4))
case"fileOpen":return new A.mq(A.aT(c6),A.bb(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.Hl(c6.h(0,b9),b9,0),A.d6(c6.h(0,c0),c0))
case"fileDownload":return new A.ml(A.aT(c6),A.bb(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.d6(c6.h(0,c0),c0))
case"fileCredit":h=c6.h(0,"bytes")
if(!A.a8(h))throw A.b(A.Q("Malformed fileCredit payload."))
return new A.mk(A.bb(c6,"stream"),h)
case"fileClose":return new A.mj(A.bb(c6,"stream"))
case"fileRemove":return new A.mt(A.aT(c6),A.bb(c6,b2),A.kW(c6.h(0,b3),b3,b4),A.Hl(c6.h(0,b9),b9,0),A.d6(c6.h(0,c0),c0))
case"fileGc":g=c6.h(0,"blobGraceMs")
f=c6.h(0,"tmpGraceMs")
if(!A.a8(g)||!A.a8(f))throw A.b(A.Q("Malformed fileGc payload."))
return new A.mo(g,f)
case"fileEnforceStorageCap":e=c6.h(0,"maxBytes")
if(!A.a8(e))throw A.b(A.Q("Malformed fileEnforceStorageCap payload."))
return new A.ma(e)
case"fileStorageStatus":return B.c3
case"syncStart":d=c6.h(0,"baseUrl")
if(typeof d!="string")throw A.b(A.Q("Malformed syncStart payload."))
return new A.o3(d,A.d6(c6.h(0,"scopeId"),"scopeId"),A.d6(c6.h(0,c1),c1))
case"syncStop":return B.c8
case"syncNow":return B.c4
case"syncPause":return B.c5
case"syncResume":return B.c6
case"syncUpdateAuth":return new A.o9(A.d6(c6.h(0,c1),c1))
case"syncSetConnectivity":c=c6.h(0,"online")
if(!A.b0(c))throw A.b(A.Q("Malformed syncSetConnectivity payload."))
return new A.o2(c)
case"syncStatus":return B.c7
case"get":return new A.mx(A.aT(c6),A.bb(c6,c2),A.cO(c6))
case"rows":b=c6.h(0,"ids")
if(!t.j.b(b))throw A.b(A.Q("Malformed rows payload."))
return new A.ny(A.aT(c6),A.HJ(b,"ids"),A.cO(c6))
case"mutate":return new A.n2(A.aT(c6),A.ME(c6.h(0,"mutation")),A.cO(c6))
case"query":return new A.nq(A.aT(c6),A.eY(c6.h(0,c3)),A.cO(c6))
case"count":return new A.lU(A.aT(c6),A.eY(c6.h(0,c3)),A.cO(c6))
case"countDistinct":return new A.lT(A.aT(c6),A.bb(c6,b3),A.eY(c6.h(0,c3)),A.cO(c6))
case"distinct":p=A.aT(c6)
o=A.bb(c6,b3)
m=c6.h(0,c3)
return new A.m6(p,o,A.eY(m==null?B.k:m),A.cO(c6))
case"ids":return new A.mC(A.aT(c6),A.eY(c6.h(0,c3)),A.cO(c6))
case"aggregate":a=c6.h(0,"fn")
a0=A.DI(new A.aq(B.cU,new A.rk(a),t.gx))
if(a0==null)throw A.b(A.Q("Unknown aggregate: "+A.r(a)))
return new A.lk(A.aT(c6),a0,A.bb(c6,b3),A.eY(c6.h(0,c3)),A.cO(c6))
case"explain":return new A.md(A.aT(c6),A.eY(c6.h(0,c3)),A.cO(c6))
case"search":return new A.nE(A.aT(c6),A.KY(c6.h(0,c3)),A.cO(c6))
case"txBegin":a1=c6.h(0,"readOnly")
if(!A.b0(a1))throw A.b(A.Q("Malformed txBegin payload."))
a2=c6.h(0,"durability")
if(a2==null)a3=B.bt
else if(typeof a2=="string"){p=A.DI(new A.aq(B.d6,new A.rl(a2),t.mE))
if(p==null)p=A.u(A.Q("Unknown tx durability: "+a2))
a3=p}else{p=A.u(A.Q("Malformed txBegin durability."))
a3=p}return new A.od(a1,a3)
case"txCommit":case"txRollback":a4=c6.h(0,b8)
if(typeof a4!="string")throw A.b(A.Q("Malformed tx payload."))
return c5==="txCommit"?new A.oe(a4):new A.og(a4)
case"txSavepoint":case"txRollbackTo":case"txRelease":a4=c6.h(0,b8)
a5=c6.h(0,b5)
if(typeof a4!="string"||typeof a5!="string")throw A.b(A.Q("Malformed savepoint payload."))
A:{if("txSavepoint"===c5){p=new A.oi(a4,a5)
break A}if("txRollbackTo"===c5){p=new A.oh(a4,a5)
break A}p=new A.of(a4,a5)
break A}return p
case"watchOne":return new A.ox(A.aT(c6),A.bb(c6,c2))
case"watch":return new A.oy(A.aT(c6),A.eY(c6.h(0,c3)))
case"watchCancel":a6=c6.h(0,"subscription")
if(typeof a6!="string")throw A.b(A.Q("Malformed watchCancel payload."))
return new A.ow(a6)
case"analyze":return new A.lm(A.d6(c6.h(0,c4),c4))
case"walCheckpoint":return B.ca
case"vacuum":return B.c9
case"pruneOutbox":return B.c1
case"compact":a7=c6.h(0,c4)
a8=c6.h(0,"olderThanMs")
if(typeof a7!="string"||!A.a8(a8))throw A.b(A.Q("Malformed compact payload."))
return new A.lK(a7,a8)
case"runMaintenance":a9=c6.h(0,"compactOlderThanMs")
if(!A.a8(a9))throw A.b(A.Q("Malformed runMaintenance payload."))
return new A.nz(a9)
case"conflictsList":return new A.lQ(A.d6(c6.h(0,c4),c4))
case"conflictGet":return new A.lO(A.aT(c6),A.bb(c6,c2))
case"conflictsResolve":b0=c6.h(0,"merged")
if(!t.f.b(b0))throw A.b(A.Q("Malformed conflictsResolve payload."))
return new A.nw(A.aT(c6),A.bb(c6,c2),A.Dw(b0,"merged"))
case"conflictsAcceptLocal":return new A.lh(A.aT(c6),A.bb(c6,c2))
case"conflictsAcceptRemote":return new A.li(A.aT(c6),A.bb(c6,c2))
case"conflictsWatch":return new A.lS(A.d6(c6.h(0,c4),c4))
default:return null}},
aT(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.Q("Malformed store name."))
return s},
bb(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.Q('Malformed field "'+b+'".'))
return s},
cO(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.Q("Malformed session id."))
return s},
Dw(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.Q('Malformed field "'+b+'".'))},
CA(a){var s,r=u.P
if(a instanceof A.dW){A:{if(a instanceof A.eb){s="ValidationException"
break A}if(a instanceof A.hC){s="UniqueConstraintException"
break A}if(a instanceof A.h6){s="NotNullConstraintException"
break A}if(a instanceof A.iE){s="CheckConstraintException"
break A}if(a instanceof A.jF){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.iV){s="ForeignKeyConstraintException"
break A}if(a instanceof A.k2){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.iW){s="FtsUnavailableError"
break A}if(a instanceof A.hl){s="SchemaRegistrationError"
break A}if(a instanceof A.jQ){s="SchemaTooNewError"
break A}if(a instanceof A.dn){s="StorageError"
break A}if(a instanceof A.jN){s="RemoteOnlyError"
break A}if(a instanceof A.jL){s="RecordNotFoundException"
break A}if(a instanceof A.jX){s="StaleCursorError"
break A}if(a instanceof A.jh){s="MissingLimitError"
break A}if(a instanceof A.iG){s="ConflictBlockedError"
break A}if(a instanceof A.fK){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.jK){s="ReadOnlyTxError"
break A}throw A.b(A.e3(r))}return s}if(t.b0.b(a))return"RangeError"
if(a instanceof A.bJ)return"ArgumentError"
if(a instanceof A.bt)return"StateError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
if(a instanceof A.bl){B:{if(a instanceof A.ds){s="TransientNetworkError"
break B}if(a instanceof A.cW){s="ServerBusyError"
break B}if(a instanceof A.eZ){s="ServerError"
break B}if(a instanceof A.bK){s="AuthError"
break B}if(a instanceof A.cd){s="ForbiddenError"
break B}if(a instanceof A.ce){s="NotFoundError"
break B}if(a instanceof A.dh){s="PayloadError"
break B}if(a instanceof A.e2){s="ProtocolError"
break B}if(a instanceof A.dL){s="DuplicateIdError"
break B}if(a instanceof A.da){s="BatchFailedError"
break B}if(a instanceof A.e5){s="RemoteVersionConflict"
break B}if(a instanceof A.hx){s="SyncIdentityError"
break B}throw A.b(A.e3(r))}return s}if(a instanceof A.jG)return"ProtocolEnvelopeException"
if(a instanceof A.f3)return"WireException"
return"unknown"},
aO(a){return new A.jG(a)},
Ou(a){var s,r,q,p=J.Z(a),o=null
if(a instanceof A.dW){s=A.CA(a)
p=a.a
if(a instanceof A.eb&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.hC){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.fo(a.c))}catch(r){if(!(A.C(r) instanceof A.f3))throw r}}else if(a instanceof A.h6)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.bl){s=A.CA(a)
p=a.a
if(a instanceof A.cW&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else{s=A.CA(a)
if(a instanceof A.f3)p=a.a
else if(a instanceof A.bt)p=a.a
else if(t.b0.b(a))p=A.r(a.d)
else if(a instanceof A.bJ)p=A.r(a.d)}q=A.t(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
MN(a){var s
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
ME(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.Q("Malformed mutation payload."))
s=t.N
r=a.aU(0,new A.Cf(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.jm(A.pV(r.h(0,n),n))
case"upsert":return new A.jp(A.pV(r.h(0,n),n))
case"putAll":return new A.jn(A.HE(r.h(0,m),m))
case"upsertAll":return new A.jq(A.HE(r.h(0,m),m))
case"patch":return new A.jj(A.Cq(r.h(0,l),l),A.pV(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.Q("Malformed patchAll patches."))
k=A.t(s,t.G)
for(s=p.ga0(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.Z(o.a),A.pV(o.b,"patches"))}return new A.jk(k)
case"archive":return new A.ji(A.Cq(r.h(0,l),l))
case"restore":return new A.jo(A.Cq(r.h(0,l),l))
case"purge":return new A.jl(A.Cq(r.h(0,l),l))
default:throw A.b(A.Q("Unknown mutation kind: "+A.r(q)))}},
Cq(a,b){if(typeof a=="string")return a
throw A.b(A.Q('Malformed mutation field "'+b+'".'))},
pV(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.Q('Malformed mutation field "'+b+'".'))},
HE(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.E(a);r.k();)s.push(A.pV(r.gn(),b))
return s}throw A.b(A.Q('Malformed mutation field "'+b+'".'))},
eY(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.Q("Malformed query spec."))
s=a0.aU(0,new A.xD(),t.N,t.z)
r=new A.xE()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.l([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.u(A.Q("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.I(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.DS(s.h(0,e)):A.u(A.Q("Malformed query predicate."))
i=A.l([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.u(A.Q("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.KN(h.gn()))
h=m==null?null:A.EH(m,"limit")
g=A.eo(s.h(0,"all"),"all",!1)
f=n==null?null:A.HJ(n,"select")
return new A.xC(k,j,a,i,h,g,f,A.eo(s.h(0,d),d,!1),A.eo(s.h(0,c),c,!1),A.d6(l,"cursor"),A.eo(s.h(0,b),b,!1))},
G0(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.Q(k))
s=a.aU(0,new A.xy(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.Q(k))
p=A.DI(new A.aq(B.cM,new A.xz(q),t.mz))
if(p==null)throw A.b(A.Q("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.Q('Query condition "values" must be a list.'))
n=A.l1(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.l1(l.gn()))}else m=null
return new A.eX(r,p,n,m)},
DS(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.Q("Malformed predicate tree."))
s=a.aU(0,new A.wY(),t.N,t.z)
r=new A.wX()
switch(s.h(0,"kind")){case"leaf":return new A.j9(A.G0(s))
case"not":return new A.jx(A.DS(s.h(0,"child")))
case"all":return new A.is(r.$1(s.h(0,q)))
case"any":return new A.it(r.$1(s.h(0,q)))
default:throw A.b(A.Q("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
KN(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.Q(q))
s=a.aU(0,new A.xB(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.Q(q))
return new A.np(r,A.eo(s.h(0,"desc"),"desc",!1))},
KY(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.Q("Malformed search spec."))
s=a.aU(0,new A.xV(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.Q("Malformed search term."))
q=s.h(0,p)==null?null:A.EH(s.h(0,p),p)
return new A.xU(r,q,A.eo(s.h(0,"all"),"all",!1),A.eo(s.h(0,o),o,!1),A.eo(s.h(0,n),n,!1))},
JH(a){return new A.fJ(a)},
JM(a){return new A.fL(a)},
K5(a){return new A.fV(a)},
Jm(a){return new A.fy(a)},
JT(a){return new A.fO(a)},
fo(a){var s,r,q,p
if(a instanceof A.aI)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.ac.geq().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.fo(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.t(s,t.X)
for(q=a.ga0(),q=q.gt(q);q.k();){p=q.gn()
r.j(0,J.Z(p.a),A.fo(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),A.fo(q.b))}return s}if(a==null||A.b0(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.Q("Value of type "+J.c8(a).l(0)+" is not wire-safe."))},
l1(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.cK(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.a8(s))return new A.aI(A.m3(s,0,!0),0,!0)
throw A.b(A.Q("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.ad.v(s)
return i}catch(p){if(t.Y.b(A.C(p)))throw A.b(A.Q(k))
else throw p}throw A.b(A.Q(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.Q("Malformed map wire value."))
n=A.t(t.N,t.X)
for(i=o.ga0(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.Q(j+A.r(m)))
n.j(0,m,A.l1(q.b))}return n}l=A.t(t.N,t.X)
for(i=a.ga0(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.Q(j+A.r(m)))
l.j(0,m,A.l1(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.l1(q.gn()))
return i}return a},
Q(a){return new A.f3(a)},
EI(a,b){if(typeof a=="string")return a
throw A.b(A.Q('Malformed wire field "'+b+'".'))},
EH(a,b){if(A.a8(a))return a
throw A.b(A.Q('Malformed wire field "'+b+'".'))},
d6(a,b){if(a==null)return null
return A.EI(a,b)},
Hl(a,b,c){if(a==null)return c
return A.EH(a,b)},
eo(a,b,c){if(a==null)return!1
if(A.b0(a))return a
throw A.b(A.Q('Malformed wire field "'+b+'".'))},
kW(a,b,c){if(a==null)return c
return A.EI(a,b)},
HJ(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.l([],t.s)
for(r=J.J(a),q=0;q<r.gm(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.Q(p+b+"["+q+']".'))
s.push(A.G(r.h(a,q)))}return s}throw A.b(A.Q(p+b+'".'))},
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
cb:function cb(){},
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
fS:function fS(a){this.a=a},
mr:function mr(a){this.a=a},
fR:function fR(a){this.a=a},
fP:function fP(a){this.a=a},
ht:function ht(a){this.a=a},
fQ:function fQ(a,b,c,d){var _=this
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
Cf:function Cf(){},
xC:function xC(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
xD:function xD(){},
xE:function xE(){},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xy:function xy(){},
xz:function xz(a){this.a=a},
b6:function b6(a,b){this.a=a
this.b=b},
cT:function cT(){},
wY:function wY(){},
wX:function wX(){},
j9:function j9(a){this.a=a},
jx:function jx(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
np:function np(a,b){this.a=a
this.b=b},
xB:function xB(){},
cM:function cM(a,b){this.a=a
this.b=b},
xU:function xU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xV:function xV(){},
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
ai:function ai(){},
h7:function h7(){},
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
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
h2:function h2(a){this.a=a},
hg:function hg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fJ:function fJ(a){this.a=a},
fL:function fL(a){this.a=a},
fV:function fV(a){this.a=a},
fy:function fy(a){this.a=a},
fO:function fO(a){this.a=a},
hm:function hm(a){this.a=a},
nD:function nD(a,b){this.a=a
this.b=b},
fH:function fH(a){this.a=a},
fG:function fG(a){this.a=a},
hA:function hA(a){this.a=a},
hH:function hH(a){this.a=a},
hc:function hc(a){this.a=a},
fF:function fF(a){this.a=a},
f1:function f1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bd:function bd(a,b,c,d,e,f,g){var _=this
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
f3:function f3(a){this.a=a},
ak(a){var s,r=new A.a6("")
A.cp(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
EX(a){var s,r,q
for(s=new A.nA(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
Mx(a){var s
if(!isFinite(a))return B.w.l(a)
s=B.w.l(a)
if(B.a.c4(s,".0"))s=B.a.B(s,0,s.length-2)
return s==="-0"?"0":s},
cp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(b==null){a.a+="null"
return 4}if(A.b0(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.a8(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.Mx(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.w.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a9(b,g)
a.a+=r
return A.EX(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.J(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cp(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
n=A.aP(t.N)
for(s=J.E(b.gJ());s.k();){m=s.gn()
r=J.Z(m)
if(!n.u(0,r))throw A.b(A.U('Cannot canonicalize map: keys collide after toString() ("'+r+'").',g))
o.push(new A.a_(r,m))}B.b.cB(o,new A.Dm())
a.a+="{"
for(s=o.length,q=1,l=!0,k=0;k<o.length;o.length===s||(0,A.p)(o),++k,l=!1){j=o[k]
if(!l){a.a+=",";++q}i=B.h.a9(j.a,g)
a.a+=i
h=A.EX(i)
a.a+=":"
q=q+h+1+A.cp(a,b.h(0,j.b))}a.a+="}"
return q+1}throw A.b(A.U("Cannot canonicalize value of type "+J.c8(b).l(0),g))},
Dm:function Dm(){},
L1(a){var s,r,q,p=A.ah("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ev(a)
if(p==null)return B.dK
s=p.b
r=s[1]
r.toString
r=A.aM(r)
q=s[2]
q.toString
q=A.aM(q)
s=s[3]
s=A.ha(s==null?"":s,null)
return new A.ek(r,q,s==null?0:s)},
G8(a,b,c){var s,r=A.L1(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
f0(a,b){return A.L2(a,b)},
L2(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$f0=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b8("SELECT sqlite_version() AS v"),$async$f0)
case 3:g=d.T(c.bH(a2),"v")
g.toString
A.G(g)
k=t.B
d=A
c=A
b=J
s=4
return A.a(a.b8("PRAGMA compile_options"),$async$f0)
case 4:j=d.O(new c.ed(b.bI(a2,new A.y4(),t.X),k),k.i("o.E"))
n=B.b.bl(j,new A.y5())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$f0)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$f0)
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
return A.a(a.b8("PRAGMA journal_mode"),$async$f0)
case 19:l=a2
if(J.d8(l))m=A.a3(J.bH(J.bH(l).gaX()))
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
case 18:case 14:h=A.G8(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nP(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f0,r)},
ni:function ni(a,b){this.a=a
this.b=b},
nP:function nP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y4:function y4(){},
y5:function y5(){},
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
a5:function a5(a,b){this.a=a
this.b=b},
qC:function qC(a,b){this.a=a
this.b=b},
qD:function qD(){},
qE:function qE(){},
Fc(a){return new Uint8Array(A.ba(a))},
tc:function tc(){},
q9:function q9(a,b,c){this.b=a
this.c=b
this.d=c},
EP(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cC
if(r===B.J){r=a.f
r.toString
r=!B.b.E(r,b)}else r=!1
if(r)return B.cH
return s
case 1:case 4:return!A.a8(b)?B.cD:s
case 2:if(typeof b!="number")return B.b7
if(!isFinite(b))return B.b7
return s
case 3:return!A.b0(b)?B.cE:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cF:s
case 7:return!t.j.b(b)?B.cG:s}},
dD(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=a.gdv(),i=t.N,h=t.X,g=A.m(["id",e],i,h)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
g.j(0,l,A.Ev(n,f.h(0,l),new Uint8Array(A.ba(B.e.v(q+l+"\x00"+e))),m))}k=A.t(i,h)
for(i=f.ga0(),i=i.gt(i);i.k();){h=i.gn()
s=h.a
if(s==="id"||s==="archived"||j.E(0,s))continue
k.j(0,s,h.b)}g.j(0,"extra",k.a===0?"":A.ak(k))
g.j(0,"archived",b?1:0)
g.j(0,"hidden",0)
return g},
EO(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.Ev(b,c,new Uint8Array(A.ba(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
NJ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gdv()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.Ev(n,g.h(0,l),new Uint8Array(A.ba(B.e.v(q+l+"\x00"+f))),m))}k=A.t(t.N,t.X)
for(s=g.ga0(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.E(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ak(k))
a.push(c?1:0)
a.push(0)},
bU(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.t(j,i),g=b.h(0,"extra")
if(typeof g=="string"&&g.length!==0){s=B.h.aI(g,null)
if(t.f.b(s))for(j=A.bs(s,j,i),j=new A.aK(j,A.n(j).i("aK<1,2>")).gt(0);j.k();){r=j.d
i=r.a
if(B.aH.E(0,i))continue
h.j(0,i,r.b)}}h.j(0,"id",b.h(0,"id"))
for(j=a.c,i=j.length,q=a.a,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
n=o.a
m=b.h(0,n)
l=A.a3(b.h(0,"id"))
h.j(0,n,A.Eu(o,m,c,d,l==null?"":l,q))}h.j(0,k,J.x(b.h(0,k),1))
return h},
Om(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.E(b);s.k();)r.push(A.bU(a,s.gn(),c,d))
return r},
On(a,b,c,d,e){var s,r,q,p,o,n,m=A.l([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.p)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a_(p,a.eu(p)))}s=A.l([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.MB(o.gn(),m,r,c,e,n))
return s},
MB(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a3(a.h(0,"id"))
l.j(0,p,A.Eu(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
Eu(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=null,k=' row: encrypted field "'
if(b==null)return l
if(a.e){if(c==null)p=l
else p=c
s=p
if(s==null)throw A.b(A.A('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.dp("Corrupt "+f+k+a.a+'" must be TEXT ciphertext but is '+J.c8(b).l(0)+"."))
r=null
try{r=B.o.fl(s.v0(B.ad.v(b),new Uint8Array(A.ba(B.e.v(f+"\x00"+a.a+"\x00"+e)))))}catch(o){q=A.C(o)
n=A.dp("Corrupt "+f+k+a.a+'" failed to decrypt ('+A.r(q)+").")
throw A.b(n)}m=a.b
A:{if(B.B===m){n=J.x(r,"1")||J.x(r,"true")
break A}if(B.V===m||B.X===m){n=A.aM(r)
break A}if(B.W===m){n=A.Ot(r)
break A}if(B.Y===m||B.Z===m){n=B.h.aI(r,l)
break A}n=r
break A}return n}n=a.b
if(n===B.B)return J.x(b,1)
if(n===B.Y||n===B.Z){if(typeof b!="string")throw A.b(A.dp("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c8(b).l(0)+"."))
return B.h.aI(b,l)}return b},
Ev(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.A('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.Z(b)
break
case 6:case 7:s=A.ak(b)
break
default:A.G(b)
s=b}r=d.vJ(B.e.v(s),c)
return B.ac.geq().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.ak(b)
default:return b}},
bn(a,b){var s,r,q,p,o,n="archived",m=a.gdv(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.p)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga0(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.E(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
CB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gdv(),i=A.l([],t.iE)
i.push(new A.a_("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a_(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga0(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.E(0,o))continue
i.push(new A.a_(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dI)
B.b.cB(i,new A.CC())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.p)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a9(r.a,null)
a.a+=k
o=A.EX(k)
a.a+=":"
m=m+o+1+A.cp(a,r.b)}a.a+="}"
return m+1},
de:function de(a,b){this.a=a
this.b=b},
CC:function CC(){},
Kd(a){var s=A.dq(null,null,t.fq),r=t.N
s=new A.uk(a,s,A.t(r,t.g8),A.t(r,t.dz),new A.ts(A.OA(),A.t(r,t.f6)),A.t(r,t.oX))
s.pp(a,B.cj)
return s},
D7(a){var s,r,q,p
A:{if(a instanceof A.j9){s=A.Nj(a.a)
break A}if(a instanceof A.jx){s=new A.cf(A.D7(a.a))
break A}if(a instanceof A.is){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.D7(r[p]))
s=new A.dG(s)
break A}if(a instanceof A.it){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.D7(r[p]))
s=new A.d9(s)
break A}throw A.b(A.e3(u.P))}return s},
Nj(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.al(m,n,B.j)
return new A.al(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.U("neq(null) matches no rows; use isNotNull.",o))
return new A.cf(new A.al(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.I('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.al(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.j
if(B.b.E(q,o))throw A.b(A.I("inValues does not accept null \u2014 use isNull().",o))
return new A.al(m,"inValues",q)
case 7:p=a.d
if(p==null)p=B.j
if(p.length!==2)throw A.b(A.U("between requires exactly two values.",o))
return new A.al(m,"between",p)
case 8:return new A.al(m,"startsWith",[a.c])
case 9:return new A.al(m,"endsWith",[a.c])
case 10:return new A.al(m,"contains",[a.c])
case 11:return new A.al(m,n,B.j)
case 12:return new A.cf(new A.al(m,n,B.j))}},
fh:function fh(){},
B9:function B9(a){this.a=a},
pC:function pC(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=null
_.w=$
_.x=e},
i_:function i_(a,b,c){var _=this
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
Fs(a){if(a==null)return""
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
JL(a){return'"'+A.D(a,'"','""')+'"'},
JK(a,b){var s,r,q,p=a.a,o=J.J(p),n=b.a,m=J.J(n)
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
I(a,b){return new A.eb(b,a)},
dp(a){return new A.dn(a)},
jM(a){return new A.jL(a)},
G5(a){return new A.jQ(a)},
aB(a){return new A.hl(a)},
tA(a){return new A.iW(a)},
E3(a){return new A.jX(a)},
FQ(a){return new A.jh(a)},
Fp(a){return new A.iG(a)},
Dy(a){return new A.fK(a)},
In(a,b){var s,r="UNIQUE constraint failed",q=J.Z(a),p=a instanceof A.ci,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.E(q,"PRIMARY KEY")&&!B.a.E(q,r)
else p=!0
if(p)return new A.jF("PRIMARY KEY constraint violated.")
if(o===2067||B.a.E(q,r)){s=A.He(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.hC(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.E(q,"NOT NULL constraint failed")){p=A.He(q,"NOT NULL constraint failed:")
return new A.h6(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.E(q,"CHECK constraint failed")||o===275||n===275)return new A.iE("CHECK constraint violated.")
if(B.a.E(q,"FOREIGN KEY")||o===787||n===787)return new A.iV("FOREIGN KEY constraint violated.")
if(B.a.E(q,"database or disk is full"))return new A.dn("Database full: "+A.r(a))
return new A.dn("SQLite error: "+A.r(a))},
He(a,b){var s,r,q,p,o,n,m=B.a.c5(a,b)
if(m<0)return"?"
s=B.a.ab(a,m+b.length)
r=s.length
q=B.a.c5(s,",")
if(q>=0)r=q
p=B.a.c5(s,"(")
s=B.a.ca(B.a.B(s,0,p>=0&&p<r?p:r))
o=B.a.d0(s,".")
s=B.a.ca(o>=0?B.a.ab(s,o+1):s)
if(B.a.T(s,'"')&&B.a.c4(s,'"')){n=B.a.B(s,1,s.length-1)
s=A.D(n,'""','"')}return s.length===0?"?":s},
dW:function dW(){},
eb:function eb(a,b){this.b=a
this.a=b},
hC:function hC(a,b,c){this.b=a
this.c=b
this.a=c},
h6:function h6(a,b){this.b=a
this.a=b},
iE:function iE(a){this.a=a},
jF:function jF(a){this.a=a},
iV:function iV(a){this.a=a},
dn:function dn(a){this.a=a},
jN:function jN(a){this.a=a},
jL:function jL(a){this.a=a},
jQ:function jQ(a){this.a=a},
hl:function hl(a){this.a=a},
k2:function k2(a){this.a=a},
iW:function iW(a){this.a=a},
jX:function jX(a){this.a=a},
jh:function jh(a){this.a=a},
iG:function iG(a){this.a=a},
fK:function fK(a){this.a=a},
jK:function jK(a){this.a=a},
iP:function iP(a){this.b=a},
Fw(a){return A.q_("lp_file_refs",new A.te(a))},
bq:function bq(a,b,c,d,e,f,g,h,i,j){var _=this
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
NF(){return new A.aI(Date.now(),0,!1)},
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
lC(a){var s=$.EZ()
if(!s.b.test(a))throw A.b(A.U('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
Fh(a){return new A.fB(a)},
iy(a,b){return new A.ix(a,b)},
l6(a,b,c,d,e,f){return A.P1(a,b,c,d,e,f)},
P1(a,b,c,a0,a1,a2){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d
var $async$l6=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=t.i5
f=A.l([],g)
e=new A.hL(A.d3(new A.pv(new A.D8(f),A.l([],g),t.mI)))
d=0
g=new A.cn(A.cJ(a,"stream",t.K),t.lj)
p=3
k=t.D
case 6:s=8
return A.a(g.k(),$async$l6)
case 8:if(!a4){s=7
break}m=g.gn()
j=a2.$1(m)
if(!(j instanceof A.w)){i=new A.w($.B,k)
i.a=8
i.c=j
j=i}s=9
return A.a(j,$async$l6)
case 9:e.a.u(0,m)
d+=J.an(m)
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
fB:function fB(a){this.a=a},
ix:function ix(a,b){this.a=a
this.b=b},
nT:function nT(a){this.a=a},
D8:function D8(a){this.a=a},
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
P4(a,b,c){a.uR(!0,new A.De(c),"lp_norm_"+b)},
EQ(a,b,c,d){var s,r='"'+A.D(d,'"','""')+'"',q=b.a
if(q.gF(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.D(c,'"','""')+'".'+r
return'"'+A.D("lp_norm_"+a,'"','""')+'"('+s+")"},
De:function De(a){this.a=a},
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
MJ(){return Date.now()},
pQ(a){var s,r,q
if(t.G.b(a)){s=A.t(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pQ(q.b))}return s}if(t.f.b(a)){s=A.t(t.z,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pQ(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.pQ(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.ba(a))
return a},
dd(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=null,r=null
return A.Kf(a,b,c,d,e,f,g,h,i,j,k,l,m)},
Kf(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dd=A.c(function(c0,c1){if(c0===1){o.push(c1)
s=p}for(;;)switch(s){case 0:a2=null
a3=null
a4=null
a4=a9
p=4
s=7
return A.a(A.cR(a4,b6),$async$dd)
case 7:s=8
return A.a(A.f0(a4,b6),$async$dd)
case 8:n=c1
i=0
case 9:if(!(i<3)){s=11
break}m=B.cR[i]
s=12
return A.a(a4.O(m),$async$dd)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.d7[i]
s=16
return A.a(a4.O(l),$async$dd)
case 16:case 14:++i
s=13
break
case 15:h=a4
g=n
f=b4==null?A.OS():b4
e=a3
d=a2
c=new A.ng()
b=new A.mQ(b5,h,g,c,b3,b0,b8,a8,e,a7,b1,d,f,A.t(t.N,t.nv),b2,b9,new A.qC(A.dq(null,null,t.iv),A.dq(null,null,t.oZ)))
a=new A.zv(A.bi(null,t.H),c.gxu())
b.z=a
d=b.a=new A.vj(b,h,g,a,c,f,e,b1,d,a8,b2,b9)
b.b=new A.yA(d)
b.c=new A.w4()
b.d=new A.xK()
e=$.Do()
b.dx=new A.wg(b,e)
b.dy=new A.wb(b,e)
b.fr=new A.ra(b)
b.fx=new A.vs(b,a7)
b.e=new A.vC(d)
b.f=new A.xR(d)
d=A.Kd(d)
b.r!==$&&A.dE()
b.r=d
k=b
s=17
return A.a(A.mR(a4,k.db),$async$dd)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
g=k.f
g===$&&A.v()
s=21
return A.a(g.aW(j),$async$dd)
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
return A.a(a4.q(),$async$dd)
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
return A.f($async$dd,r)},
cR(a,b){return A.Ke(a,b)},
Ke(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
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
return A.a(a.bM("lp_migrations","version = ?",[1]),$async$mR)
case 3:if(p.d8(d)){s=1
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
h0(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$h0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.x
h=b.x
g=A.a1(h).i("aq<1>")
f=A.O(new A.aq(h,new A.w_(c,b),g),g.i("o.E"))
B.b.cB(f,new A.w0())
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
return A.a(A.aU(a,b,m),$async$h0)
case 8:s=6
break
case 7:s=9
return A.a(A.jg(a,b,m),$async$h0)
case 9:case 6:if(j.b==null)j.b=$.nk.$0()
s=10
return A.a(A.h1(i,j.gna(),o,q+l,p,l),$async$h0)
case 10:case 3:f.length===h||(0,A.p)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aB('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$h0)
case 11:return A.e(null,r)}})
return A.f($async$h0,r)},
h1(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$h1=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b8("SELECT MAX(version) AS m FROM lp_migrations"),$async$h1)
case 2:q=p.fp(h)
if(q==null)q=0
s=3
return A.a(a.aF(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$h1)
case 3:return A.e(null,r)}})
return A.f($async$h1,r)},
jg(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$jg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.x
k=b.a
j=t.B
h=A
g=A
f=J
s=2
return A.a(l.b8("PRAGMA table_info("+('"'+A.D(k,'"','""')+'"')+")"),$async$jg)
case 2:i=h.c0(new g.ed(f.bI(e,new A.vW(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.F_()
if(!m.b.test(n))A.u(A.aB('Field "'+n+u.Z))
if(o.c)throw A.b(A.aB('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.E(0,n)){s=4
break}m=A.D(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.D(n,'"','""')+'"')+" "+o.gle()),$async$jg)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.p)(j),++p
s=3
break
case 5:s=c.d!=null?7:8
break
case 7:s=9
return A.a(A.eS(a,b,c),$async$jg)
case 9:case 8:return A.e(null,r)}})
return A.f($async$jg,r)},
eS(a4,a5,a6){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eS=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a=a4.x
a0=a5.a
a1="migration:"+a0+":"+a6.a+":cursor"
s=2
return A.a(A.n_(a,a1),$async$eS)
case 2:a2=a8
a3=A.ha(a2==null?"":a2,null)
if(a3==null)a3=0
q=t.af,p=t.b3,o=a4.cx,n=a4.cy,m=a6.d,l=t.kW,k=t.P
case 3:j={}
s=5
return A.a(a.ae("SELECT rowid, * FROM "+('"'+A.D(a0,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[a3,1e4]),$async$eS)
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
j.a=A.aj(d)
c=A.bU(a5,e,o,n)
e=m.$1(c)
if(!p.b(e)){d=new A.w($.B,q)
d.a=8
d.c=e
e=d}s=8
return A.a(e,$async$eS)
case 8:b=a8
if(b.gS(b)){e=j.a
d=A.a3(c.h(0,"id"))
g.push(new A.ek(e,d==null?"":d,b))}s=6
break
case 7:s=g.length!==0?9:11
break
case 9:s=12
return A.a(a.a1(new A.vX(j,g,a5,a4,a1),k),$async$eS)
case 12:s=10
break
case 11:s=13
return A.a(A.h_(a,a1,B.c.l(j.a)),$async$eS)
case 13:case 10:if(h.gm(i)<1e4){s=4
break}a3=j.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$eS,r)},
aU(a,b,c){return A.Kq(a,b,c)},
Kq(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aU=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.x
if(!b0.at)throw A.b(A.Dy('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.iK(b0.y).kk(b1)
j=A.Ks(b0.w,a2,a3)
p=4
s=7
return A.a(A.n_(a7,l),$async$aU)
case 7:i=b4
a3=b0.f
a3===$&&A.v()
s=8
return A.a(a3.i_(j),$async$aU)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.Dy('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.n0(a7,m),$async$aU)
case 9:g=b4
s=10
return A.a(A.n0(a7,n),$async$aU)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b8("SELECT COUNT(*) c FROM "+('"'+A.D(m,'"','""')+'"')),$async$aU)
case 13:a0=a9.fp(b4)
e=a0==null?0:a0
a3=A.D(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.D(n,'"','""')+'"')),$async$aU)
case 14:s=15
return A.a(A.cS(b0,a7,b1,k,l,e),$async$aU)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.D(m,'"','""')+'"')),$async$aU)
case 16:s=h?17:18
break
case 17:s=19
return A.a(a3.i6(j),$async$aU)
case 19:case 18:s=20
return A.a(A.h_(a7,l,"rebuilding"),$async$aU)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.D(j,"'","''")+"'"),$async$aU)
case 21:a3=k.b
a4=A.D(n,'"','""')
d=B.a.kV(a3,'"'+a4+'"','"'+A.D(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aU)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ae("SELECT rowid, * FROM "+('"'+A.D(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aU)
case 25:b=b4
if(J.bz(b)){s=24
break}s=26
return A.a(a7.a1(new A.vZ(b,b1,b0,b2,m),a3),$async$aU)
case 26:a4=J.T(J.q7(b),"rowid")
a4.toString
c=A.aj(a4)
if(J.an(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b8("SELECT COUNT(*) c FROM "+('"'+A.D(n,'"','""')+'"')),$async$aU)
case 27:a5=a9.fp(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b8("SELECT COUNT(*) c FROM "+('"'+A.D(m,'"','""')+'"')),$async$aU)
case 28:e=a9.fp(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.A('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.D(n,'"','""')+'"')),$async$aU)
case 29:a3=A.D(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.D(n,'"','""')+'"')),$async$aU)
case 30:s=31
return A.a(A.cS(b0,a7,b1,k,l,a),$async$aU)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.C(a8)
if(a3 instanceof A.fK)throw a8
else if(a3 instanceof A.ci){a1=a3
throw A.b(A.Dy('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aU,r)},
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
l=m.$ti.i("Y<M.E,j>")
k=new A.Y(m,A.pZ(),l).C(0,", ")
j=new A.Y(m,new A.vY(c,q),l).C(0,", ")
q=A.D(n,'"','""')
s=16
return A.a(b.O("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.D(p,'"','""')+'"')),$async$cS)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.b8("SELECT COUNT(*) c FROM "+('"'+A.D(q,'"','""')+'"')),$async$cS)
case 17:i=h.fp(a0)
if((i==null?0:i)!==f)throw A.b(A.A('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.h_(b,e,"done"),$async$cS)
case 18:return A.e(null,r)}})
return A.f($async$cS,r)},
n0(a,b){var s=0,r=A.h(t.y),q,p
var $async$n0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ae("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$n0)
case 3:q=p.d8(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n0,r)},
Ks(a,b,c){var s=null,r=$.ir(),q=r.v7(a),p=A.e1(a,r.a).gkg()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.nq(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
Ko(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===b)return p}return null},
FP(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.I('Field "'+s+'" is required.',s))}if(b==null)return
r=A.EP(a,b)
if(r!=null)throw A.b(A.I(A.Kp(a,b,r),a.a))},
Kr(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
A.FP(p,b.h(0,p.a))}},
Kp(a,b,c){var s,r=a.a,q=J.c8(b)
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
return A.a(a.nF("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$n_)
case 3:p=d
o=J.J(p)
q=o.gF(p)?null:A.a3(J.T(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n_,r)},
h_(a,b,c){var s=0,r=A.h(t.H)
var $async$h_=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cr(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.T),$async$h_)
case 2:return A.e(null,r)}})
return A.f($async$h_,r)},
MK(){return Date.now()},
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
by(a){var s=A.t(t.N,t.X)
a.a5(0,new A.Dj(s))
return s},
KL(a,b,c,d){return new A.jH(new A.x8(c,b,d,a))},
Ox(a,b){var s=a.e,r=s.a
if(!(r!=null&&A.HF(r)==null))if(!s.b.gaX().bl(0,A.OY()))if(a.z==null){r=a.y
if(!r.gS(r))B.b.bl(a.x,new A.CP())}return!0},
Ns(a){return a!=null&&A.HF(a)==null},
HF(a){var s,r,q=A.d7(a)
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
HQ(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(b==null)return a
if(!t.f.b(b))throw A.b(A.I('Store policy for "'+a.a+'" must be a map.',null))
s=A.by(b)
r=s.h(0,"conflictPolicy")
q=r==null?a.e:A.MF(r,a.a,c)
p=a.a
o=A.MG(s.h(0,"validator"),p,c)
n=A.MC(s.h(0,"documentMigrations"),a,c)
m=A.MD(s.h(0,"migrationTransforms"),a,c)
if(q===a.e&&o==null&&n.gF(n)&&m==null)return a
l=m==null?a.x:m
k=n.gF(n)?a.y:n
j=o==null?a.z:o
return new A.c9(p,a.b,a.c,a.d,q,a.f,a.r,a.w,l,k,j,a.Q,t.bU)},
MF(a,b,c){var s,r,q=A.Co(a,'conflictPolicy of "'+b+'"'),p=q.h(0,"collectionResolver"),o=q.h(0,"fieldOverrides"),n=A.t(t.N,t.pb)
if(o!=null)A.Co(o,'fieldOverrides of "'+b+'"').a5(0,new A.Cg(n,b,c))
s=p==null?null:A.Ha(p,null,c,"record",'collectionResolver of "'+b+'"')
r=J.x(q.h(0,"editsUnarchive"),!0)
return new A.lP(s,n,r,typeof q.h(0,"missingRemote")=="string"?B.b.cp(B.cL,new A.Ch(q),new A.Ci(b,q)):B.aD)},
Ha(a,b,c,d,e){var s,r,q,p=" must be a number.",o=A.Co(a,e),n=A.Hs(o.h(0,"kind"),e,"kind")
switch(n){case"remoteWins":return B.R
case"localWins":return B.bZ
case"setUnionDeletionWins":return B.c2
case"appendOnlyLines":return B.bK
case"appendOnlyList":return B.bL
case"counter":s=o.h(0,"min")
r=o.h(0,"max")
if(s!=null&&typeof s!="number")throw A.b(A.I('"min" at '+e+p,null))
if(r!=null&&typeof r!="number")throw A.b(A.I('"max" at '+e+p,null))
return new A.eE(A.C2(s),A.C2(r))
case"custom":q=A.Hs(o.h(0,"id"),e,"id")
return A.KL(b,q,c,d)
default:throw A.b(A.I('Unknown resolver kind "'+n+'" at '+e+".",null))}},
MG(a,b,c){if(a==null)return null
if(!A.b0(a)||!a)throw A.b(A.I('"validator" of "'+b+'" must be true when present.',null))
return new A.Cj(c,b)},
MC(a,b,c){var s,r,q,p,o
if(a==null)return B.bd
s=A.Hr(a,'documentMigrations of "'+b.a+'"')
r=A.t(t.S,t.mi)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p){o=s[p]
r.j(0,o,new A.Cd(c,b,o))}return r},
MD(a,b,c){var s,r,q,p,o,n,m,l
if(a==null)return null
s=A.Hr(a,'migrationTransforms of "'+b.a+'"')
r=A.t(t.S,t.y)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.j(0,s[p],!0)
q=A.l([],t.c0)
for(o=b.x,n=o.length,p=0;p<o.length;o.length===n||(0,A.p)(o),++p){m=o[p]
l=m.a
q.push(r.I(l)?new A.c3(l,m.b,m.c,new A.Ce(c,b,m)):m)}return q},
Co(a,b){if(t.f.b(a))return A.by(a)
throw A.b(A.I("The value at "+b+" must be a map.",null))},
EB(a,b,c){if(t.f.b(a))return A.by(a)
throw A.b(A.I('"'+c+'" at '+b+" must be a map.",null))},
Hs(a,b,c){if(typeof a=="string")return a
throw A.b(A.I('"'+c+'" at '+b+" must be a string.",null))},
Nr(a,b,c){var s,r,q,p
if(!t.j.b(a))throw A.b(A.I('"'+c+'" at '+b+" must be a list.",null))
s=A.l([],t.s)
for(r=J.E(a),q='"'+c+'" at '+b+" must contain only strings.";r.k();){p=r.gn()
if(typeof p=="string")s.push(p)
else s.push(A.u(A.I(q,null)))}return s},
Hr(a,b){var s,r,q,p
if(!t.j.b(a))throw A.b(A.I("The value at "+b+" must be a list.",null))
s=A.l([],t.t)
for(r=J.E(a),q="The value at "+b+" must contain only ints.";r.k();){p=r.gn()
if(A.a8(p))s.push(p)
else s.push(A.u(A.I(q,null)))}return s},
Dj:function Dj(a){this.a=a},
Di:function Di(){},
jH:function jH(a){this.a=a},
x8:function x8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
CP:function CP(){},
Cg:function Cg(a,b,c){this.a=a
this.b=b
this.c=c},
Ch:function Ch(a){this.a=a},
Ci:function Ci(a,b){this.a=a
this.b=b},
Cj:function Cj(a,b){this.a=a
this.b=b},
Cd:function Cd(a,b,c){this.a=a
this.b=b
this.c=c},
Ce:function Ce(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function ng(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
vk:function vk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
BD:function BD(){},
xA:function xA(a,b){this.a=a
this.b=b},
l2(a){var s=A.D(a,"\\","\\\\")
s=A.D(s,"%","\\%")
return A.D(s,"_","\\_")},
Et(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.al){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.u(A.aD(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aD(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aD(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gao(a.c)==null)throw A.b(A.aD(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.cf){A.Et(a.a)
break A}p=a instanceof A.dG
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d9
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aD(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.p)(n),++m)A.Et(n[m])}break A}},
Ca(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.al)return A.H8(a,!1,b)
if(a instanceof A.cf){s=a.a
r=A.Ca(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.d9||s instanceof A.cf){s=new A.a_("NOT "+q,p)
break A}s=new A.a_("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dG){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){l=A.Ca(s[m],!1)
o.push(l.a)
B.b.D(p,l.b)}k=B.b.C(o," AND ")
return new A.a_(b?k:"("+k+")",p)}if(a instanceof A.d9){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){j=A.Mz(s[m])
o.push(j.a)
B.b.D(p,j.b)}return new A.a_("("+B.b.C(o," OR ")+")",p)}throw A.b(A.e3(u.M))},
Mz(a){var s
A:{if(a instanceof A.al){s=A.H8(a,!0,!1)
break A}s=A.Ca(a,!1)
break A}return s},
H8(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.D(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
n[0]=A.l2(A.G(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.l2(A.G(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.l2(A.G(r))+"%"
break
default:throw A.b(A.aD(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a_(q?"("+s+")":s,n)},
di:function di(){},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a){this.a=a},
dG:function dG(a){this.a=a},
d9:function d9(a){this.a=a},
KM(a,b){var s,r=$.hf.G(0,a)
if(r!=null){$.hf.j(0,a,r)
return r}s=b.$0()
if($.hf.a>=512)$.hf.G(0,new A.S($.hf,A.n($.hf).i("S<1>")).gH(0))
$.hf.j(0,a,s)
return s},
b8:function b8(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
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
xx:function xx(a,b,c){this.a=a
this.b=b
this.c=c},
xs:function xs(){},
xt:function xt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xu:function xu(a){this.a=a},
xv:function xv(){},
xw:function xw(){},
KX(a){var s,r,q=B.a.ca(a)
if(q.length===0)return
s=!0
if(!B.a.E(q,'"')){r=A.ah("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.T(q,"-")){s=A.ah("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.I("Invalid search term: "+a,null))},
KW(a){var s,r,q,p
for(s=B.a.dd(a,A.ah("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
if(p.length!==0&&new A.jO(p).gm(0)<3)throw A.b(A.I('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cV:function cV(a,b){this.a=a
this.b=b},
xT:function xT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
cy:function cy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xK:function xK(){},
kX(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.dW)throw q
else{s=r
r=A.dp("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
Fv(a){return A.kX(new A.td(a))},
K6(a){return A.kX(new A.u6(a))},
JY(a){return A.kX(new A.tz(a))},
FA(a,b){var s
if(new A.jO(a).gm(0)!==1)throw A.b(A.aB('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aB('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
JX(a){return A.kX(new A.ty(a))},
JW(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga0(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
L5(a){return A.kX(new A.y8(a))},
qI(a,b){return A.kX(new A.qJ(a,b))},
Cx(a,b,c,d){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i
var $async$Cx=A.c(function(e,f){if(e===1)return A.d(f,r)
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
return A.a(j,$async$Cx)
case 8:l=f
case 7:case 4:++p
s=3
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cx,r)},
cc:function cc(a,b){this.a=a
this.b=b},
b5:function b5(a,b,c,d,e,f,g,h){var _=this
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
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
tz:function tz(a){this.a=a},
eK:function eK(a){this.a=a},
ty:function ty(a){this.a=a},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y8:function y8(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
lP:function lP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
E0(a){var s,r=A.MA(a),q=A.l([],t.s),p=a.e
if(p.a!=null)q.push("conflictResolver")
s=p.b
if(s.gS(s))q.push("fieldResolvers")
if(B.b.bl(a.x,new A.xN()))q.push("migrationTransform")
s=a.y
if(s.gS(s))q.push("documentMigrations")
if(a.z!=null)q.push("validatorCallback")
return new A.nC(r,A.fX(q,t.N),1,a.a,a.b,2)},
KV(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aB("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aU(0,new A.xO(),s,r)
p=q.h(0,"formatVersion")
if(!A.a8(p))throw A.b(A.aB("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.G5("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.a8(n)||!j.b(m)||!t.j.b(l)||!A.a8(k))throw A.b(A.aB('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.nC(m.aU(0,new A.xP(),s,t.X),A.fX(J.bI(l,new A.xQ(),r),s),p,o,n,k)},
MA(a){var s,r,q,p,o,n,m=a.e,l=t.N,k=t.X,j=A.bO(a.p(),l,k),i=m.b.gJ()
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
xN:function xN(){},
xO:function xO(){},
xP:function xP(){},
xQ:function xQ(){},
xR:function xR(a){this.a=a},
xS:function xS(a,b){this.a=a
this.b=b},
Jy(a,b){var s,r=a.a
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
fE:function fE(a,b,c,d){var _=this
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
hK:function hK(){},
oT:function oT(){},
qc:function qc(a){this.a=a},
qd:function qd(a,b){this.a=a
this.b=b},
qe:function qe(a){this.a=a},
qf:function qf(){},
Dv(a){return A.q_("lp_conflicts",new A.r9(a))},
bp:function bp(a,b,c,d,e,f,g,h,i){var _=this
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
yv:function yv(a){this.a=a},
yl:function yl(a){this.a=a},
yt:function yt(a,b){this.a=a
this.b=b},
ys:function ys(a){this.a=a},
yr:function yr(a,b){this.a=a
this.b=b},
yu:function yu(a){this.a=a},
yo:function yo(a,b){this.a=a
this.b=b},
yp:function yp(){},
yq:function yq(){},
ym:function ym(){},
yn:function yn(a){this.a=a},
eQ(a){return new A.df(a)},
EW(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fr(a,b)
r=A.bn(a,s)
q=A.ak(r)
p=A.au(B.m.v(B.e.v(q)).a)
return new A.eU(b,s,q,p,k)}catch(m){l=A.C(m)
if(l instanceof A.df){o=l
return new A.eU(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.eU(b,k,k,k,l)}}},
OX(a,b){var s,r=A.l([],t.i7)
for(s=J.E(b);s.k();)r.push(A.EW(a,s.gn()))
return r},
EV(a,b){var s=0,r=A.h(t.eT),q
var $async$EV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.OX(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$EV,r)},
fr(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bs(b.d,j,i),g=a.gdv(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.eQ('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.b0(r))throw A.b(A.eQ('Field "archived" must be a boolean, got '+J.c8(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.eQ('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.EP(o,n)
if(m!=null)throw A.b(A.eQ(A.No(o,n,m)))
q.j(0,s,n)}for(j=new A.aK(h,A.n(h).i("aK<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.E(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
No(a,b,c){var s,r=a.a,q=J.c8(b)
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
im(a){var s,r,q,p
if(a==null||a.length===0)return B.k
s=null
try{s=B.h.aI(a,null)}catch(q){r=A.C(q)
p=A.eQ("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.eQ("Corrupt payload JSON: expected an object, got "+J.c8(s).l(0)+"."))
return A.bs(s,t.N,t.X)},
df:function df(a){this.a=a},
eU:function eU(a,b,c,d,e){var _=this
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
if(r.b(o)&&r.b(n)&&J.lf(o.gJ(),new A.CF())&&J.lf(n.gJ(),new A.CG())){m=A.bS(A.bs(o,i,q),A.bs(n,i,q))
for(l=A.n(m),k=new A.ei(m,m.r,l.i("ei<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
O9(a,b,c){var s,r,q,p,o,n=t.N,m=A.c0(a.gJ(),n)
m.D(0,b.gJ())
m.D(0,new A.S(c,A.n(c).i("S<1>")))
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
FN(a,b,c,d,e,f,g){return new A.jf(g,e,a,d,f,b,c)},
Ig(a,b,c,d,e){var s,r,q,p,o,n
if(e instanceof A.ho)return e.fT(b,c,d)
if(e instanceof A.eE){s=typeof b=="number"?b:0
r=typeof c=="number"?c:0
q=typeof d=="number"?d:0
p=A.a8(s)&&A.a8(r)&&A.a8(q)
o=s+(r-s)+(q-s)
n=e.a
if(n!=null&&o<n)o=n
n=e.b
if(n!=null&&o>n)o=n
return p?B.w.fY(o):o}if(e instanceof A.ev)return e.fT(b,c,d)
if(e instanceof A.fz)return e.fT(b,c,d)
if(e instanceof A.fY)return c
if(e instanceof A.hi)return d
return d},
Ni(a,b){var s,r,q,p=a.b
if(p.gF(p))return null
for(s=b;;){r=p.h(0,s)
if(r!=null)return r
q=B.a.d0(s,".")
if(q<=0)return null
s=B.a.B(s,0,q)}},
DR(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$DR=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.Kn(B.cb,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$DR,r)},
Kn(a,b,c,d,e,f,g){var s,r,q,p=A.bS(b,c),o=A.bS(b,f),n=A.FN(b,p,o,c,e,f,g),m=p.a!==0&&o.a!==0,l=d.a
if(l!=null&&m){s=new A.vV(b,c,f,p,o)
r=l.al(n)
if(t.op.b(r))return r.W(s,t.r)
return s.$1(r)}l=t.N
s=A.c0(c.gJ(),l)
s.D(0,new A.S(f,A.n(f).i("S<1>")))
s.D(0,b.gJ())
q=A.O(s,A.n(s).c)
return A.vS(a,b,p,o,0,q,c,A.t(l,t.X),d,e,f,new A.Bi(),g)},
vS(a,b,c,d,e,f,g,h,i,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j="archived"
if(e>=f.length){if(i.c)if(!new A.aq(c,new A.vT(),A.n(c).i("aq<1>")).gF(0)&&J.x(h.h(0,j),!0))h.j(0,j,!1)
return new A.aR(h,a2.a,null)}s=f[e]
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
if(l!=null)h.j(0,s,A.Ig(s,p,r,q,l))
else h.j(0,s,m)}return A.vS(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)}k=A.FO(a,p,r,s,i,q,a0,a2,a3)
if(k instanceof A.w)return k.W(new A.vU(h,s,f,e,b,g,a1,i,a3,a0,a,c,d,a2),t.r)
h.j(0,s,k)
return A.vS(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)},
FO(a2,a3,a4,a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(B.p.V(a4,a7))return a4
if(B.p.V(a4,a3))return a7
if(B.p.V(a7,a3))return a4
s=t.f
r=!1
if(s.b(a4))if(s.b(a7))if(J.lf(a4.gJ(),new A.vM()))if(J.lf(a7.gJ(),new A.vN()))if(a3!=null)r=s.b(a3)&&J.lf(a3.gJ(),new A.vO())
else r=!0
if(r){r=t.N
q=t.X
p=A.bs(a4,r,q)
o=A.bs(a7,r,q)
n=a3==null?null:A.bs(s.a(a3),r,q)
s=A.aP(r)
m=n==null
l=m?null:new A.S(n,A.n(n).i("S<1>"))
if(l!=null)s.D(0,l)
s.D(0,new A.S(p,A.n(p).i("S<1>")))
s.D(0,new A.S(o,A.n(o).i("S<1>")))
k=A.t(r,q)
j=[]
for(r=s.$ti.c,l=A.dz(s,s.r,r),i=a5+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.FO(a2,e,p.h(0,f),i+f,a6,o.h(0,f),a8,a9,b0)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.dz(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.DE(new A.Y(j,new A.vP(),A.a1(j).i("Y<1,y<k?>>")),q).W(new A.vQ(s,k),q)}a=A.Ni(a6,a5)
if(a!=null){if(a instanceof A.jH){a0=B.a.ab(a5,B.a.d0(a5,".")+1)
s=t.N
r=t.X
q=A.m([a0,a3],s,r)
m=A.m([a0,a4],s,r)
l=A.m([a0,a7],s,r)
a1=a.al(A.FN(q,A.ap([a0],s),A.ap([a0],s),m,a8,l,b0))
if(t.op.b(a1))return a1.W(new A.vR(a9,a7,a0),r)
if(a1==null||a1.b){a9.a=!0
return a7}return a1.a.h(0,a0)}return A.Ig(a5,a3,a4,a7,a)}return a7},
I6(a,b,c,d,e,f){return A.DR(a,b,c,d,e,f)},
CF:function CF(){},
CG:function CG(){},
jf:function jf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(){},
hi:function hi(){},
fY:function fY(){},
ho:function ho(){},
eE:function eE(a,b){this.a=a
this.b=b},
ev:function ev(){},
qb:function qb(a){this.a=a},
fz:function fz(){},
qa:function qa(a){this.a=a},
lX:function lX(){},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
Bi:function Bi(){this.a=!1},
Bg:function Bg(){},
zA:function zA(){},
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
xb:function xb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xj:function xj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xi:function xi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xd:function xd(a,b,c){this.a=a
this.b=b
this.c=c},
xc:function xc(a,b,c){this.a=a
this.b=b
this.c=c},
xf:function xf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xe:function xe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xh:function xh(a,b,c){this.a=a
this.b=b
this.c=c},
xg:function xg(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d,e,f){var _=this
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
_.e=d
_.f=e},
xm:function xm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xr:function xr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xp:function xp(a,b,c){this.a=a
this.b=b
this.c=c},
xo:function xo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xn:function xn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xl:function xl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xq:function xq(a,b,c,d,e,f,g,h,i,j){var _=this
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
cj:function cj(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
yi:function yi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yj:function yj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gc(a){return new A.ds(a)},
lr(a){return new A.bK(a)},
JV(a){return new A.cd(a)},
Kx(a){return new A.ce(a)},
Kz(a){return new A.dh(a)},
aV(a){return new A.e2(a)},
JN(a){return new A.dL(a)},
Jn(a){return new A.da(a)},
OC(a){var s=a.xV(),r=new A.CS()
return A.r(r.$2(A.DX(s),4))+"-"+A.r(r.$1(A.DV(s)))+"-"+A.r(r.$1(A.x_(s)))+" "+A.r(r.$1(A.DT(s)))+":"+A.r(r.$1(A.DU(s)))+":"+A.r(r.$1(A.DW(s)))+"."+A.r(r.$2(A.FY(s),3))+"Z"},
Gb(a){var s=Date.now()
return new A.oc(a,new A.aI(s,0,!1))},
bl:function bl(){},
ds:function ds(a){this.a=a},
cW:function cW(a,b){this.b=a
this.a=b},
eZ:function eZ(a){this.a=a},
bK:function bK(a){this.a=a},
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
dh:function dh(a){this.a=a},
e2:function e2(a){this.a=a},
dL:function dL(a){this.a=a},
hx:function hx(a){this.a=a},
da:function da(a){this.a=a},
e5:function e5(a,b){this.b=a
this.a=b},
lt:function lt(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hd:function hd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
he:function he(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cs:function cs(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
CS:function CS(){},
oc:function oc(a,b){this.a=a
this.c=b},
L8(a){return 0.5+B.au.nx()},
E6(a){var s,r=a.toLowerCase()
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
L9(a){var s,r,q,p,o,n,m,l,k=null,j=A.ah("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ev(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.E6(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aM(r)
p=s[1]
p.toString
p=A.aM(p)
o=s[4]
o.toString
o=A.aM(o)
n=s[5]
n.toString
n=A.aM(n)
s=s[6]
s.toString
return A.E7(r,q,p,o,n,A.aM(s))}j=A.ah("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ev(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.E6(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aM(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aM(r)
p=s[4]
p.toString
p=A.aM(p)
o=s[5]
o.toString
o=A.aM(o)
s=s[6]
s.toString
return A.E7(l,q,r,p,o,A.aM(s))}j=A.ah("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ev(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.E6(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aM(r)
p=s[2]
p.toString
p=A.aM(p)
o=s[3]
o.toString
o=A.aM(o)
n=s[4]
n.toString
n=A.aM(n)
s=s[5]
s.toString
return A.E7(r,q,p,o,n,A.aM(s))}return k},
E7(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.Dx(a,b,c,d,e,f,0)
return s}catch(r){return null}},
yk:function yk(a,b){this.at=a
this.ay=b},
ED(a,b){if(t.f.b(a))return a.aU(0,new A.Cp(),t.N,t.X)
throw A.b(A.I("The value at "+b+" must be a map.",null))},
HC(a,b){if(typeof a=="string")return a
throw A.b(A.I("The value at "+b+" must be a string.",null))},
Mo(a,b){if(A.b0(a))return a
throw A.b(A.I("The value at "+b+" must be a bool.",null))},
x9:function x9(a){this.a=a
this.b=0},
hb:function hb(a,b,c,d,e,f,g){var _=this
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
xa:function xa(a,b){this.a=a
this.b=b},
Cp:function Cp(){},
jI:function jI(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
yx:function yx(a,b){this.a=a
this.b=b},
HR(a,b,c,d,e,f,g,h,i,j){var s,r=A.I8(a,b,c,null,d,e,f,g,h,i,j),q=A.t(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.a0[s],r[s])
return q},
I8(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.HN(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
HN(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
O2(a,b,c,d,e,f,g){var s,r=null,q=A.Il(B.a8,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.t(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.a_[s],q[s])
return p},
Il(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.HO(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
HO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
Ih(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
io(a){return new A.Y(a,new A.Dd(),A.a1(a).i("Y<1,j>")).C(0,", ")},
hy(a){return A.q_("lp_sync_row",new A.yw(a))},
jA(a){return A.q_("lp_outbox",new A.wh(a))},
Ky(a){return A.q_("lp_op_queue",new A.wc(a))},
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
case 3:j.D(0,i.bI(h.a(d),new A.Db(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ae("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$l7)
case 4:j.D(0,i.bI(h.a(d),new A.Dc(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$l7,r)},
iq(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$iq=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eG("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$iq)
case 5:s=p.bz(o.a(f))?2:4
break
case 2:q=a.aF(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$iq)
case 6:s=3
break
case 4:q=a.aJ("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$iq)
case 7:case 3:return A.e(null,r)}})
return A.f($async$iq,r)},
CM(a,b){var s=0,r=A.h(t.H),q,p
var $async$CM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aJ(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$CM)
case 3:case 1:return A.e(q,r)}})
return A.f($async$CM,r)},
cL(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cL=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nF("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
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
return A.a(A.CM(a,o),$async$cL)
case 8:case 7:s=3
break
case 4:m=a.X("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cL)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
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
fx:function fx(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
Dd:function Dd(){},
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
yw:function yw(a){this.a=a},
cx:function cx(a,b,c,d,e,f,g,h,i,j){var _=this
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
eV:function eV(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
wc:function wc(a){this.a=a},
Db:function Db(){},
Dc:function Dc(){},
Ol(a,b){if(typeof a=="string")return new Uint8Array(A.ba(B.ad.v(a)))
throw A.b(A.I('"'+b+'" must be a base64 string.',null))},
HW(a,b){var s,r,q=null,p="pageError",o=A.kY(a,b),n=o.h(0,"ok")
if(!A.b0(n))throw A.b(A.I('"ok" at '+b+" must be a bool.",q))
if(n)return o.h(0,"result")
s=o.I("error")
if(s===o.I(p))throw A.b(A.I("A failed answer at "+b+' must carry exactly one of "error" (typed sync error) or "pageError".',q))
if(s)throw A.b(A.Oq(o.h(0,"error"),b))
r=o.h(0,p)
if(typeof r!="string")throw A.b(A.I('"pageError" at '+b+" must be a string.",q))
throw A.b(A.I("The page-side "+b+" failed: "+r,q))},
Ov(a){var s,r,q,p
A:{if(a instanceof A.ds){s=A.m(["kind","transientNetwork","message",a.a],t.N,t.X)
break A}if(a instanceof A.eZ){s=A.m(["kind","serverError","message",a.a],t.N,t.X)
break A}if(a instanceof A.cW){s=t.N
r=t.X
r=A.bO(A.m(["kind","serverBusy","message",a.a],s,r),s,r)
s=a.b
if(s!=null)r.j(0,"retryAfter",s)
s=r
break A}if(a instanceof A.bK){s=A.m(["kind","auth","message",a.a],t.N,t.X)
break A}if(a instanceof A.cd){s=A.m(["kind","forbidden","message",a.a],t.N,t.X)
break A}if(a instanceof A.ce){s=A.m(["kind","notFound","message",a.a],t.N,t.X)
break A}if(a instanceof A.dh){s=A.m(["kind","payload","message",a.a],t.N,t.X)
break A}if(a instanceof A.e2){s=A.m(["kind","protocol","message",a.a],t.N,t.X)
break A}if(a instanceof A.dL){s=A.m(["kind","duplicateId","message",a.a],t.N,t.X)
break A}if(a instanceof A.hx){s=A.m(["kind","syncIdentity","message",a.a],t.N,t.X)
break A}if(a instanceof A.da){s=A.m(["kind","batchFailed","message",a.a],t.N,t.X)
break A}if(a instanceof A.e5){s=t.N
r=t.X
q=A.bO(A.m(["kind","remoteVersionConflict","message",a.a],s,r),s,r)
p=a.b
if(p!=null)q.j(0,"current",A.m(["id",p.a,"store",p.b,"updated",p.c,"data",p.d,"attachments",p.e],s,r))
s=q
break A}throw A.b(A.e3(u.P))}return s},
Oq(a,b){var s,r,q=null,p=" must be a string.",o="current",n=A.kY(a,b),m=A.ie(n.h(0,"kind"),b,"kind"),l=n.h(0,"message"),k=l==null
if(!k&&typeof l!="string")throw A.b(A.I('"message" at '+b+p,q))
A.a3(l)
switch(m){case"transientNetwork":return new A.ds(k?"network error":l)
case"serverError":return new A.eZ(k?"server error":l)
case"serverBusy":s=n.h(0,"retryAfter")
if(s!=null&&typeof s!="string")throw A.b(A.I('"retryAfter" at '+b+p,q))
A.a3(s)
return new A.cW(s,k?"server busy":l)
case"auth":return new A.bK(k?"auth required":l)
case"forbidden":return new A.cd(k?"forbidden":l)
case"notFound":return new A.ce(k?"not found":l)
case"payload":return new A.dh(k?"invalid payload":l)
case"protocol":return new A.e2(k?"protocol error":l)
case"duplicateId":return new A.dL(k?"duplicate id":l)
case"syncIdentity":return new A.hx(k?"missing sync identity":l)
case"batchFailed":return new A.da(k?"batch failed":l)
case"remoteVersionConflict":r=n.I(o)&&n.h(0,o)!=null?A.es(n.h(0,o),b+".current"):q
return new A.e5(r,k?"version conflict":l)
default:throw A.b(A.I('Unknown sync error kind "'+m+'" at '+b+".",q))}},
es(a,b){var s,r,q,p="attachments",o=A.kY(a,b),n=o.h(0,p),m=n==null?null:A.EC(n,b,p),l=A.ie(o.h(0,"id"),b,"id"),k=A.ie(o.h(0,"store"),b,"store"),j=A.ie(o.h(0,"updated"),b,"updated"),i=A.Nq(o.h(0,"data"),b,"data"),h=A.l([],t.s)
if(m!=null)for(s=J.E(m),r='"attachments" at '+b+" must contain only strings.";s.k();){q=s.gn()
if(typeof q=="string")h.push(q)
else h.push(A.u(A.I(r,null)))}return new A.cU(l,k,j,i,h)},
Ok(a,b){var s,r,q,p=A.kY(a,b),o=A.ie(p.h(0,"kind"),b,"kind")
if(!new A.Y(B.bc,new A.CJ(),t.lJ).E(0,o))throw A.b(A.I('"kind" at '+b+" is not a known BackendHintKind: "+o,null))
s=p.h(0,"record")
r=A.ie(p.h(0,"store"),b,"store")
q=B.b.ky(B.bc,new A.CK(o))
return new A.cr(r,q,s==null?null:A.es(s,b+".record"))},
Op(a,b){var s,r,q,p,o,n=A.EC(a,b,"records"),m=A.l([],t.g1)
for(s=A.DH(n,0,t.X),r=J.E(s.a),q=s.b,s=new A.dR(r,q,A.n(s).i("dR<1>")),p=b+".rows[";s.k();){o=s.c
o=o>=0?new A.a_(q+o,r.gn()):A.u(A.av())
m.push(A.es(o.b,p+o.a+"]"))}return m},
Oo(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=" must be a string.",d=A.EC(a,b,"results"),c=A.l([],t.g2)
for(s=A.DH(d,0,t.X),r=J.E(s.a),q=s.b,s=new A.dR(r,q,A.n(s).i("dR<1>")),p=b+".results[",o=t.f;s.k();){n=s.c
n=n>=0?new A.a_(q+n,r.gn()):A.u(A.av())
m=p+n.a+"]"
l=A.kY(n.b,m)
k=l.h(0,"record")
j=l.h(0,"error")
i=l.h(0,"pushedJson")
n=k==null
if(!n&&!o.b(k))A.u(A.I('"record" at '+m+" must be a map.",f))
if(j!=null&&typeof j!="string")A.u(A.I('"error" at '+m+e,f))
if(i!=null&&typeof i!="string")A.u(A.I('"pushedJson" at '+m+e,f))
h=A.ie(l.h(0,"opId"),m,"opId")
g=A.Hp(l.h(0,"ok"),m,"ok")
n=n?f:A.es(k,m+".record")
c.push(new A.he(h,g,n,A.a3(j),A.a3(i)))}return c},
kY(a,b){if(t.f.b(a))return A.by(a)
throw A.b(A.I("The value at "+b+" must be a map.",null))},
Nq(a,b,c){if(t.f.b(a))return A.by(a)
throw A.b(A.I('"'+c+'" at '+b+" must be a map.",null))},
EC(a,b,c){if(t.j.b(a))return a
throw A.b(A.I('"'+c+'" at '+b+" must be a list.",null))},
ie(a,b,c){if(typeof a=="string")return a
throw A.b(A.I('"'+c+'" at '+b+" must be a string.",null))},
Hp(a,b,c){if(A.b0(a))return a
throw A.b(A.I('"'+c+'" at '+b+" must be a bool.",null))},
Hq(a,b,c){if(A.a8(a))return a
throw A.b(A.I('"'+c+'" at '+b+" must be an int.",null))},
CJ:function CJ(){},
CK:function CK(a){this.a=a},
E9(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bQ(a,b,c,s,d,new A.Bn())},
oj(a){var s=$.B.h(0,$.lc())
if(s instanceof A.bQ&&s.a===a)return s
return null},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yJ:function yJ(){},
yI:function yI(a,b,c){this.a=a
this.b=b
this.c=c},
Bn:function Bn(){this.a=0
this.b=null},
m7:function m7(a,b){this.a=a
this.b=b},
yA:function yA(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
yH:function yH(a){this.a=a},
yD:function yD(a){this.a=a},
yG:function yG(a,b,c){this.a=a
this.b=b
this.c=c},
yF:function yF(a,b,c){this.a=a
this.b=b
this.c=c},
yE:function yE(a,b,c){this.a=a
this.b=b
this.c=c},
yC:function yC(a){this.a=a},
yB:function yB(){},
oU:function oU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
Ab:function Ab(a,b){this.a=a
this.b=b},
Aa:function Aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
A8:function A8(a,b){this.a=a
this.b=b},
A9:function A9(a,b){this.a=a
this.b=b},
A7:function A7(a){this.a=a},
hN:function hN(a,b){this.a=a
this.b=b},
O7(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.E(a);s.k();){r=new A.a6("")
A.cp(r,s.gn())
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
xG:function xG(){},
xF:function xF(a){this.a=a},
xH:function xH(a){this.a=a},
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
fD:function fD(){},
zv:function zv(a,b){this.a=a
this.b=0
this.c=b},
zw:function zw(a,b,c){this.a=a
this.b=b
this.c=c},
Li(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.a8(s))throw A.b(A.aO('Request "v" must be an int.'))
if(!A.a8(r)||r<0)throw A.b(A.aO('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dN.E(0,q))throw A.b(A.aO("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.aO('Request "a" must be a map.'))
return new A.hI(s,r,q,p.aU(0,new A.z9(),t.N,t.X))},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z9:function z9(){},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z6:function z6(a,b,c){this.a=a
this.b=b
this.c=c},
Gj(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
z4:function z4(a){var _=this
_.d=a
_.e=0
_.r=null
_.w=!1
_.x=null},
z5:function z5(a){this.a=a},
ph:function ph(a){this.a=a},
Kk(a){var s,r,q
try{s=A.l0(a)
if(t.f.b(s)){r=A.by(s)
return r}}catch(q){}return null},
Kl(a){if(a instanceof A.k7)return A.l4(new A.oz(3,a.a,a.b,null).p())
t.bp.a(a)
return A.DP(a.a,a.b,a.c,a.d)},
DP(a,b,c,d){return A.l4(new A.oz(3,a,null,new A.z6(b,c,d)).p())},
kV(a){return A.Ng(a)},
Ng(a){var s=0,r=A.h(t.U),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kV=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.ip()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a4(f.getDirectory(),k),$async$kV)
case 7:n=c
j=$.ir()
i=A.O(j.dd(0,"drift_db"),t.N)
m=i
J.F7(m,j.dd(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.an(l)===0){s=9
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
pS(a,b){return A.Nh(a,b)},
Nh(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pS=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kV(a),$async$pS)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a4(m.getFileHandle(A.e1(b,$.ir().a).gkg(),{create:!1}),t.m),$async$pS)
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
pT(a,b){return A.Np(a,b)},
Np(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pT=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kV(a),$async$pT)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.mu(m,A.e1(b,$.ir().a).gkg()),$async$pT)
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
Ah:function Ah(a){this.a=a},
Ai:function Ai(a){this.a=a},
P_(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="maxDocBytes",b="destructiveBackup",a="storePolicies",a0="syncProxy",a1="clockOffsetMs"
if(a2==null)return A.t(t.N,t.X)
s=t.f
if(!s.b(a2))throw A.b(A.aO("Open options must be a map."))
r=A.by(a2)
q=t.N
p=t.X
o=A.t(q,p)
n=r.h(0,"stores")
if(n!=null){if(!t.j.b(n))throw A.b(A.aO('"stores" must be a list.'))
m=A.l([],t.oq)
for(l=J.E(n);l.k();){k=l.gn()
if(!s.b(k))A.u(A.ac("Schema must be a map: "+A.r(k),null,null))
m.push(A.qI(A.by(k),p))}o.j(0,"stores",m)}j=r.h(0,c)
if(j!=null){if(!A.a8(j))throw A.b(A.aO('"maxDocBytes" must be an int.'))
o.j(0,c,j)}i=r.h(0,b)
if(i!=null){if(!A.b0(i))throw A.b(A.aO('"destructiveBackup" must be a bool.'))
o.j(0,b,i)}h=r.h(0,a)
if(h!=null){if(!s.b(h))throw A.b(A.aO('"storePolicies" must be a map.'))
q=A.t(q,t.G)
for(p=h.ga0(),p=p.gt(p);p.k();){m=p.gn()
l=m.a
g=J.cK(l)
f=g.l(l)
m=m.b
l=g.l(l)
if(!s.b(m))A.u(A.aO('The store policy for "'+l+'" must be a map.'))
q.j(0,f,A.by(m))}o.j(0,a,q)}e=r.h(0,a0)
if(e!=null){if(!A.b0(e))throw A.b(A.aO('"syncProxy" must be a bool.'))
o.j(0,a0,e)}A.EA(r,"groupCommitWindowMs",o,0,"the group-commit coalescing window")
A.EA(r,"txSessionTtlMs",o,0,"the interactive-transaction idle deadline")
A.EA(r,"callbackTimeoutMs",o,1,"the page-callback round-trip bound")
d=r.h(0,a1)
if(d!=null){if(!A.a8(d))throw A.b(A.aO('"clockOffsetMs" must be an int (milliseconds).'))
o.j(0,a1,d)}return o},
EA(a,b,c,d,e){var s=a.h(0,b)
if(s==null)return
if(!A.a8(s))throw A.b(A.aO('"'+b+'" must be an int (milliseconds).'))
if(s<d)throw A.b(A.aO('"'+b+'" must be an int \u2265 '+d+" (milliseconds) for "+e+"."))
c.j(0,b,s)},
Ie(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.by(a).h(0,b)
return s}}catch(r){}return null},
OH(a,b){if(b!=null)return!1
return B.b.bl(a,new A.CY())},
CY:function CY(){},
CX:function CX(){},
zb:function zb(a){this.a=a},
Gm(a,b,c,d){var s,r,q,p,o,n,m,l=A.l([],t.s)
for(s=A.c0(new A.S(c,A.n(c).i("S<1>")),t.N),s.D(0,new A.S(d,A.n(d).i("S<1>"))),s=A.dz(s,s.r,A.n(s).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!A.Lk(c.h(0,q),d.h(0,q))){p=c.h(0,q)
o=d.h(0,q)
l.push(q+" (page: "+A.Gl(p)+", worker: "+A.Gl(o)+")")}}n=l.length===0?"no policy-level descriptor diverged \u2014 the divergence is inside the schema body itself":B.b.C(l,"; ")
m=b?"":" No store-policy envelope was received for this store (a stale worker asset or a dropped envelope)."
return'Schema manifest mismatch for "'+a+'": the page and the worker compiled different schemas. Diverging manifest descriptors: '+n+"."+m},
Eb(a){var s,r,q,p,o,n,m,l=a.e,k=l.b.gJ()
k=A.O(k,A.n(k).i("o.E"))
B.b.aj(k)
s=a.y.gJ()
s=A.O(s,A.n(s).i("o.E"))
B.b.aj(s)
r=a.x
q=B.b.bl(r,new A.zp())
p=A.l([],t.t)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.p)(r),++n){m=r[n]
if(m.d!=null)p.push(m.a)}B.b.aj(p)
return A.m(["version",a.b,"hasValidatorCallback",a.z!=null,"hasCollectionResolver",l.a!=null,"fieldOverrides",k,"editsUnarchive",l.c,"missingRemote",l.d.b,"documentMigrationVersions",s,"hasTransform",q,"transformVersions",p,"keepUnsyncedArchives",a.r],t.N,t.X)},
Lj(a,b){var s,r,q,p=new A.zh(a),o=new A.zg(a),n=p.$1("conflictPolicy"),m=o.$1("documentMigrations"),l=o.$1("migrationTransforms"),k=n.h(0,"missingRemote")
o=t.f.b(a)&&J.x(a.h(0,"validator"),!0)
s=n.h(0,"collectionResolver")
p=new A.zi(p).$0()
r=J.x(n.h(0,"editsUnarchive"),!0)
q=typeof k=="string"?k:"conflict"
return A.m(["version",b.b,"hasValidatorCallback",o,"hasCollectionResolver",s!=null,"fieldOverrides",p,"editsUnarchive",r,"missingRemote",q,"documentMigrationVersions",m,"hasTransform",J.an(l)!==0,"transformVersions",l,"keepUnsyncedArchives",b.r],t.N,t.X)},
Lk(a,b){var s,r,q,p=t.j
if(p.b(a)&&p.b(b)){p=t.N
s=J.bI(a,new A.zm(),p)
r=A.O(s,s.$ti.i("a0.E"))
B.b.aj(r)
s=A.a1(b).i("Y<1,j>")
q=A.O(new A.Y(b,new A.zn(),s),s.i("a0.E"))
B.b.aj(q)
return r.length===q.length&&A.DH(r,0,p).co(0,new A.zo(q))}return a==null?b==null:a===b},
Gl(a){var s
A:{if(t.j.b(a)){s="["+J.Jc(a,", ")+"]"
break A}if(a==null){s="absent"
break A}s=J.Z(a)
break A}return s},
zc:function zc(a,b){this.a=a
this.b=b
this.c=0},
zd:function zd(a,b,c){this.a=a
this.b=b
this.c=c},
ze:function ze(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zf:function zf(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(){},
k7:function k7(a,b){this.b=a
this.a=b},
f5:function f5(a,b,c,d){var _=this
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
zq:function zq(a){this.a=a},
oB:function oB(){},
zk:function zk(a){this.a=a},
zl:function zl(){},
zp:function zp(){},
zh:function zh(a){this.a=a},
zg:function zg(a){this.a=a},
zi:function zi(a){this.a=a},
zj:function zj(){},
zm:function zm(){},
zn:function zn(){},
zo:function zo(a){this.a=a},
pK:function pK(){},
Hn(a){return a},
HI(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a6("")
o=a+"("
p.a=o
n=A.a1(b)
m=n.i("cD<1>")
l=new A.cD(b,0,s,m)
l.ja(b,0,s,n.c)
m=o+new A.Y(l,new A.Cv(),m.i("Y<a0.E,j>")).C(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.U(p.l(0),null))}},
rh:function rh(a){this.a=a},
ri:function ri(){},
rj:function rj(){},
Cv:function Cv(){},
ue:function ue(){},
e1(a,b){var s,r,q,p,o,n=b.oN(a),m=b.d_(a)
if(n!=null)a=B.a.ab(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.cs(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cs(a.charCodeAt(o))){r.push(B.a.B(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ab(a,p))
q.push("")}return new A.ne(b,n,m,r,q)},
ne:function ne(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
FV(a){return new A.nf(a)},
nf:function nf(a){this.a=a},
L7(){var s,r,q,p,o,n,m,l,k=null
if(A.Ea().gb5()!=="file")return $.lb()
if(!B.a.c4(A.Ea().gbA(),"/"))return $.lb()
s=A.GW(k,0,0)
r=A.GU(k,0,0,!1)
q=A.BJ(k,0,0,k)
p=A.GT(k,0,0)
o=A.BI(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.GV("a/b",0,3,k,"",m)
if(n&&!B.a.T(l,"/"))l=A.Eq(l,m)
else l=A.fi(l)
if(A.kO("",s,n&&B.a.T(l,"//")?"":r,o,l,q,p).kX()==="a\\b")return $.q2()
return $.Ix()},
yh:function yh(){},
wW:function wW(a,b,c){this.d=a
this.e=b
this.f=c},
yR:function yR(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
za:function za(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
DC(a,b){if(b<0)A.u(A.b7("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.u(A.b7("Offset "+b+u.D+a.gm(0)+"."))
return new A.mp(a,b)},
y0:function y0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
mp:function mp(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
K1(a,b){var s=A.K2(A.l([A.LI(a,!0)],t.pg)),r=new A.u4(b).$0(),q=B.c.l(B.b.ga_(s).b+1),p=A.K3(s)?0:3,o=A.a1(s)
return new A.tL(s,r,null,1+Math.max(q.length,p),new A.Y(s,new A.tN(),o.i("Y<1,i>")).xE(0,B.bJ),!A.OP(new A.Y(s,new A.tO(),o.i("Y<1,k?>"))),new A.a6(""))},
K3(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
K2(a){var s,r,q=A.OG(a,new A.tQ(),t.nf,t.K)
for(s=A.n(q),r=new A.aZ(q,q.r,q.e,s.i("aZ<2>"));r.k();)J.Fb(r.d,new A.tR())
s=s.i("aK<1,2>")
r=s.i("iQ<o.E,cH>")
s=A.O(new A.iQ(new A.aK(q,s),new A.tS(),r),r.i("o.E"))
return s},
LI(a,b){var s=new A.AT(a).$0()
return new A.bx(s,!0,null)},
LK(a){var s,r,q,p,o,n,m=a.gaQ()
if(!B.a.E(m,"\r\n"))return a
s=a.gN().gav()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga6()
o=a.gN().gah()
p=A.nK(s,a.gN().gau(),o,p)
o=A.D(m,"\r\n","\n")
n=a.gbm()
return A.y1(r,p,o,A.D(n,"\r\n","\n"))},
LL(a){var s,r,q,p,o,n,m
if(!B.a.c4(a.gbm(),"\n"))return a
if(B.a.c4(a.gaQ(),"\n\n"))return a
s=B.a.B(a.gbm(),0,a.gbm().length-1)
r=a.gaQ()
q=a.gR()
p=a.gN()
if(B.a.c4(a.gaQ(),"\n")){o=A.CR(a.gbm(),a.gaQ(),a.gR().gau())
o.toString
o=o+a.gR().gau()+a.gm(a)===a.gbm().length}else o=!1
if(o){r=B.a.B(a.gaQ(),0,a.gaQ().length-1)
if(r.length===0)p=q
else{o=a.gN().gav()
n=a.ga6()
m=a.gN().gah()
p=A.nK(o-1,A.GD(s),m-1,n)
q=a.gR().gav()===a.gN().gav()?p:a.gR()}}return A.y1(q,p,r,s)},
LJ(a){var s,r,q,p,o
if(a.gN().gau()!==0)return a
if(a.gN().gah()===a.gR().gah())return a
s=B.a.B(a.gaQ(),0,a.gaQ().length-1)
r=a.gR()
q=a.gN().gav()
p=a.ga6()
o=a.gN().gah()
p=A.nK(q-1,s.length-B.a.d0(s,"\n")-1,o-1,p)
return A.y1(r,p,s,B.a.c4(a.gbm(),"\n")?B.a.B(a.gbm(),0,a.gbm().length-1):a.gbm())},
GD(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.iv(a,"\n",s-2)-1
else return s-B.a.d0(a,"\n")-1},
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
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
AT:function AT(a){this.a=a},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nK(a,b,c,d){if(a<0)A.u(A.b7("Offset may not be negative, was "+a+"."))
else if(c<0)A.u(A.b7("Line may not be negative, was "+c+"."))
else if(b<0)A.u(A.b7("Column may not be negative, was "+b+"."))
return new A.cB(d,a,c,b)},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nL:function nL(){},
nN:function nN(){},
L0(a,b,c){return new A.hq(c,a,b)},
nO:function nO(){},
hq:function hq(a,b,c){this.c=a
this.a=b
this.b=c},
hr:function hr(){},
y1(a,b,c,d){var s=new A.dm(d,a,b,c)
s.pt(a,b,c)
if(!B.a.E(d,c))A.u(A.U('The context line "'+d+'" must contain "'+c+'".',null))
if(A.CR(d,c,a.gau())==null)A.u(A.U('The span text "'+c+'" must start at column '+(a.gau()+1)+' in a line within "'+d+'".',null))
return s},
dm:function dm(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
L4(a){var s
A:{if(18===a){s=B.dO
break A}if(23===a){s=B.dP
break A}if(9===a){s=B.dQ
break A}s=null
break A}return s},
jV:function jV(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
L3(a,b,c,d,e,f,g){return new A.ci(d,b,c,e,f,a,g)},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y6:function y6(){},
ll:function ll(a){this.a=a},
MP(a,b,c){var s,r,q,p,o,n=new A.ou(c,A.a9(c.b,null,!1,t.X))
try{A.Hc(a,b.$1(n))}catch(r){s=A.C(r)
q=B.e.v(A.iN(s))
p=a.a
o=p.cR(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
Hc(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.a8(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Gp(b).l(0)))
break A}if(b instanceof A.aQ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Fg(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.b0(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Gp(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cR(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cR(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.an(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.Hc(a,b.a)
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
By:function By(a,b){this.a=a
this.b=b},
Bz:function Bz(a,b,c){this.a=a
this.b=b
this.c=c},
BA:function BA(a,b,c){this.a=a
this.b=b
this.c=c},
y2:function y2(){},
hs:function hs(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
DG(a,b){var s=$.q1()
return new A.mD(A.t(t.N,t.a_),s,a)},
mD:function mD(a,b,c){this.d=a
this.b=b
this.a=c},
p7:function p7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
P0(a){var s=J.Jg(new v.G.URL(a,"file:///").pathname,"/")
return new A.aq(s,new A.D6(),A.a1(s).i("aq<1>"))},
D6:function D6(){},
rn:function rn(){},
nx:function nx(a,b,c){this.d=a
this.a=b
this.c=c},
ch:function ch(a,b){this.a=a
this.b=b},
Bh:function Bh(a){this.a=a
this.b=-1},
pn:function pn(){},
po:function po(){},
pq:function pq(){},
pr:function pr(){},
wf:function wf(a,b){this.a=a
this.b=b},
KP(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bO(r,"step")}return s},
eC:function eC(){},
bY:function bY(a){this.a=a},
lW:function lW(a){this.a=a},
hE(a){return new A.dv(a)},
Fe(a,b){var s,r,q,p
if(b==null)b=$.q1()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.d3(256)
r&2&&A.K(a)
a[q]=p}},
dv:function dv(a){this.a=a},
jU:function jU(a){this.a=a},
be:function be(){},
lB:function lB(){},
lA:function lA(){},
P6(a,b){var s=null,r=new A.eO(t.kk)
return A.q0(a,new A.k8(s,s,s,s,s,s,s,s,new A.Dg(new A.Df(r,A.Cl(new A.Dh(r)))),s,s,s,s),s,b)},
f6:function f6(a){var _=this
_.d=a
_.c=_.b=_.a=null},
Dh:function Dh(a){this.a=a},
Df:function Df(a,b){this.a=a
this.b=b},
Dg:function Dg(a){this.a=a},
z1:function z1(a){this.a=a},
yX:function yX(a,b,c){this.a=a
this.b=b
this.c=c},
z3:function z3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z2:function z2(a,b,c){this.b=a
this.c=b
this.d=c},
ec:function ec(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
c7(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.C(r)
if(q instanceof A.dv){s=q
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
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b){this.a=a
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
cN(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bw(a,"success",new A.r1(r,a,b),!1,q)
A.bw(a,"error",new A.r2(r,a),!1,q)
return s},
JC(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bw(a,"success",new A.r6(r,a,b),!1,q)
A.bw(a,"error",new A.r7(r,a),!1,q)
A.bw(a,"blocked",new A.r8(r),!1,q)
return s},
fa:function fa(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
Al:function Al(a,b){this.a=a
this.b=b},
Am:function Am(a,b){this.a=a
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
ip(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
Fy(a,b,c){var s=a.read(b,c)
return s},
Fz(a,b,c){var s=a.write(b,c)
return s},
mu(a,b){return A.a4(a.removeEntry(b,{recursive:!1}),t.X)},
Fx(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.u(A.U("Target object does not implement the async iterable interface",null))
return new A.fe(new A.tr(),new A.iv(a,s),s.i("fe<ad.T,N>"))},
tr:function tr(){},
yY:function yY(a){this.a=a},
yZ:function yZ(a){this.a=a},
z0(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$z0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a4(p.fetch(new p.URL(a,A.bm(p.location).href),null),t.m),$async$z0)
case 3:q=o.z_(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$z0,r)},
z_(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$z_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.m_(A.t(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.yY(p).iy(a),$async$z_)
case 3:q=new o.hF(new n.z1(m.Lh(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$z_,r)},
hF:function hF(a){this.a=a},
LM(a){var s=new A.kq(a,new A.at(new A.w($.B,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.px(a)
return s},
mF(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$mF=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.qj(a)
n=A.DG("dart-memory",null)
m=$.q1()
l=new A.dQ(o,n,new A.eO(t.p3),A.aP(p),A.t(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.iE(),$async$mF)
case 3:s=4
return A.a(l.f7(),$async$mF)
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
AW:function AW(a){this.a=a},
AX:function AX(a){this.a=a},
AV:function AV(a){this.a=a},
AY:function AY(a,b,c){this.a=a
this.b=b
this.c=c},
B_:function B_(a,b){this.a=a
this.b=b},
AZ:function AZ(a,b){this.a=a
this.b=b},
Ax:function Ax(a,b,c){this.a=a
this.b=b
this.c=c},
Ay:function Ay(a,b){this.a=a
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
AU:function AU(a,b){this.a=a
this.b=b},
bg:function bg(){},
ko:function ko(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
ki:function ki(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hP:function hP(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
i7:function i7(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
G6(a){var s=A.DG("dart-memory",null),r=$.q1()
return new A.hp(s,r,a)},
nG(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$nG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.ip()
if(j==null)throw A.b(A.hE(1))
p=t.m
s=3
return A.a(A.a4(j.getDirectory(),p),$async$nG)
case 3:o=d
n=A.P0(a),m=J.E(n.a),n=new A.d1(m,n.b,n.$ti.i("d1<1>")),l=null
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
xZ(a,b){var s=0,r=A.h(t.g_),q,p
var $async$xZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.ip()==null)throw A.b(A.hE(1))
p=A
s=3
return A.a(A.nH(a),$async$xZ)
case 3:q=p.xY(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xZ,r)},
xY(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$xY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.G6(c)
s=3
return A.a(p.d5(a,!1),$async$xY)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xY,r)},
fT:function fT(a,b,c){this.c=a
this.a=b
this.b=c},
hp:function hp(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
y_:function y_(a,b){this.a=a
this.b=b},
pw:function pw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Bd:function Bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Lh(a,b){var s=A.bm(a.exports.memory)
b.b!==$&&A.dE()
b.b=s
s=new A.yS(s,b,a.exports)
s.pu(a,b)
return s},
oF(a,b){var s,r=A.c2(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
ee(a,b,c){var s=a.buffer
return B.o.fl(A.c2(s,b,c==null?A.oF(a,b):c))},
Ec(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.fl(A.c2(s,b,c==null?A.oF(a,b):c))},
Gn(a,b,c){var s=new Uint8Array(c)
B.f.dc(s,0,A.c2(a.buffer,b,c))
return s},
yS:function yS(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
yT:function yT(a){this.a=a},
yU:function yU(a){this.a=a},
yV:function yV(a){this.a=a},
yW:function yW(a){this.a=a},
CH(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$CH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.ld()
s=l!=null?3:5
break
case 3:p=A.Nl()
s=6
return A.a(A.k6(l,p,null,null,!1),$async$CH)
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
return A.f($async$CH,r)},
Nl(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bD(97+$.IZ().d3(26))
return r.charCodeAt(0)==0?r:r},
Js(a){return new A.iD(a)},
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
f4:function f4(){},
mf(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$mf=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nH(a),$async$mf)
case 3:p=e
o=A.G6(c)
s=b?4:5
break
case 4:s=6
return A.a(o.d5(p,!0),$async$mf)
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
k6(a,b,c,d,e){var s,r,q={},p=new A.w($.B,t.nI),o=new A.at(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.DD(A.a4(a.request(b,s,A.d5(new A.z7(q,o))),r),new A.z8(q,d,o),r,t.K)
return p},
z7:function z7(a,b){this.a=a
this.b=b},
z8:function z8(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a){this.a=a},
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
Jz(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bW(n,A.a1(n).i("bW<1,j>"))
for(s=J.J(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a_(A.fN(B.d5,s.h(m,q)),s.h(m,q+1)))}s=A.i9(a.b)
q=A.i9(a.c)
p=A.i9(a.d)
return new A.eD(o,s,q,A.i9(a.g),p)},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
KS(a){var s
if(J.x(a.t,"errorResponse")){s=A.JP(a)
if(s!=null&&s instanceof A.dF)return s
else return new A.hh(a.e)}else return new A.hh("Did not respond with expected type, got "+A.r(a))},
JP(a){var s=a.s,r=s==null?null:A.aj(s)
A:{if(0===r){s=A.JQ(t.c.a(a.r))
break A}if(1===r){s=B.as
break A}s=null
break A}return s},
JQ(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
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
l=A.aj(A.fj(l))
A.G(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.eF(i,h,A.c2(h,0,o))}else p=o
n=n.$1(k)
A.H3(g)
return new A.ci(s,r,l,g==null?o:A.aj(g),n,q,p)},
JR(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Lb(l)
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
KT(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.tJ(a2,512,"transfer" in a2)
a5.mZ(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.KP(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qW(l)
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
c=new A.dB(!1).dh(f,0,a,!0)
i=c
g=B.aN
break
case 4:i=s.lg(j)
g=B.aO
break
case 5:default:i=a
g=B.aP}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.oF(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dB(!1).dh(a0,0,a,!0)}return A.I7(!1,b,0,0,a1,a,a3.xT(0))},
OQ(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
tb:function tb(){},
I7(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
ii(a){var s,r,q,p,o=v.G,n=new o.Array()
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
Os(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
xM:function xM(){},
JU(a){var s,r
for(s=0;s<5;++s){r=B.cT[s]
if(r.c===a)return r}throw A.b(A.U("Unknown FS implementation: "+a,null))},
La(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aP
break A}q=A.a8(a)
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
break A}q=A.b0(a)
k=q?a:j
if(q){s=k
r=B.bv
break A}throw A.b(A.U("Unsupported value: "+A.r(a),j))}return new A.a_(r,s)},
Lb(a){var s,r,q,p,o,n
if(a instanceof A.eF)return new A.a_(a.a,a.b)
s=[]
r=J.J(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.La(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a_(s,t.a.a(B.f.gac(p)))},
dM:function dM(a,b,c){this.c=a
this.a=b
this.b=c},
cF:function cF(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
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
return A.a(A.JB(m.open("drift_mock_db"),t.m),$async$pX)
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
CD(a){return A.O5(a)},
O5(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$CD=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bm(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.d5(new A.CE(j,m))
s=7
return A.a(A.JA(m,t.m),$async$CD)
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
return A.f($async$CD,r)},
il(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$il=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.ip()
if(h==null){q=B.u
s=1
break}j=t.m
s=3
return A.a(A.a4(h.getDirectory(),j),$async$il)
case 3:m=b
p=5
s=8
return A.a(A.a4(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$il)
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
j=new A.cn(A.cJ(A.Fx(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$il)
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
return A.a(j.A(),$async$il)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$il,r)},
JA(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bw(a,"success",new A.r_(r,a,b),!1,q)
A.bw(a,"error",new A.r0(r,a),!1,q)
return s},
JB(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bw(a,"success",new A.r3(r,a,b),!1,q)
A.bw(a,"error",new A.r4(r,a),!1,q)
A.bw(a,"blocked",new A.r5(r,a),!1,q)
return s},
CE:function CE(a,b){this.a=a
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
hh:function hh(a){this.a=a},
dF:function dF(a){this.a=a},
MO(a){var s=a.gnj()
return new A.fe(new A.Ck(),s,A.n(s).i("fe<ad.T,N>"))},
Gz(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hO(a,r,new A.kE(),new A.kE(),new A.kE(),s)},
LD(a,b,c){var s=t.S
s=new A.hM(c,A.l([],t.fV),a.a,new A.aG(new A.w($.B,t.D),t.Q),A.t(s,t.br),A.t(s,t.m))
s.pr(a)
s.pw(a,b,c)
return s},
Hd(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
eq(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$eq=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.ip()
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
e=A.DK(k,"getSize",null,null,null,null)
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
l_(a){return A.NG(a)},
NG(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
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
Ck:function Ck(){},
kE:function kE(){this.a=null},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
Ac:function Ac(a){this.a=a},
Ag:function Ag(a,b){this.a=a
this.b=b},
Ad:function Ad(a,b){this.a=a
this.b=b},
Ae:function Ae(a){this.a=a},
Af:function Af(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
zX:function zX(a){this.a=a},
A1:function A1(a,b){this.a=a
this.b=b},
A4:function A4(a,b,c){this.a=a
this.b=b
this.c=c},
zZ:function zZ(a,b){this.a=a
this.b=b},
zY:function zY(a,b){this.a=a
this.b=b},
A3:function A3(a,b){this.a=a
this.b=b},
A2:function A2(a,b){this.a=a
this.b=b},
A6:function A6(a,b){this.a=a
this.b=b},
A5:function A5(a,b){this.a=a
this.b=b},
A_:function A_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A0:function A0(a,b){this.a=a
this.b=b},
zW:function zW(a){this.a=a},
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
zr:function zr(a,b,c,d,e,f){var _=this
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
zs:function zs(a,b){this.a=a
this.b=b},
zt:function zt(a,b){this.a=a
this.b=b},
zu:function zu(a){this.a=a},
Ll(){var s=v.G
if(A.K8(s,"DedicatedWorkerGlobalScope"))return new A.p_(s,new A.p0(s.location.href))
else return new A.pu(s,new A.p0(s.location.href))},
kQ:function kQ(){},
p_:function p_(a,b){this.a=a
this.b=b},
pu:function pu(a,b){this.a=a
this.b=b},
Bs:function Bs(a){this.a=a},
Bt:function Bt(a,b,c){this.a=a
this.b=b
this.c=c},
Br:function Br(a){this.a=a},
Bp:function Bp(a){this.a=a},
Bq:function Bq(a){this.a=a},
p0:function p0(a){this.a=a},
As:function As(a){this.a=a},
nW:function nW(a,b,c){this.c=a
this.a=b
this.b=c},
yg:function yg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hB:function hB(){},
p9:function p9(){},
cG:function cG(a,b){this.a=a
this.b=b},
bw(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.HK(new A.Av(c),t.m)
s=s==null?null:A.d5(s)}s=new A.km(a,b,s,!1,e.i("km<0>"))
s.k7()
return s},
HK(a,b){var s=$.B
if(s===B.i)return a
return s.i0(a,b)},
Dz:function Dz(a,b){this.a=a
this.$ti=b},
hS:function hS(a,b,c,d){var _=this
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
Av:function Av(a){this.a=a},
Aw:function Aw(a){this.a=a},
Io(a){return v.mangledGlobalNames[a]},
Ib(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Kb(a,b){return b in a},
DK(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
OG(a,b,c,d){var s,r,q,p,o,n=A.t(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aN(p,q)}return n},
DI(a){var s=J.E(a.a)
if(new A.d1(s,a.b,a.$ti.i("d1<1>")).k())return s.gn()
return null},
Cz(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.K(a)
a[r]=s&255
b=s/256|0;--r}},
Pg(a){return a},
Im(a){if(a instanceof A.dI)return a
return new A.dI(a)},
Ph(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.C(p)
if(q instanceof A.hq){s=q
throw A.b(A.L0("Invalid "+a+": "+s.a,s.b,s.gh8()))}else if(t.Y.b(q)){r=q
throw A.b(A.ac("Invalid "+a+' "'+b+'": '+r.giA(),r.gh8(),r.gav()))}else throw p}},
fs(a){if(B.a.c4(a,"\\"))throw A.b(A.aV('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.D(a,"'","\\'")+"'"},
Pc(a,b,c,d){var s="("+d+"="+A.fs(a)+" && id~"+A.fs(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.fs(c)+")"},
ij(){var s,r,q,p=$.J_(),o=$.IT()+1
$.MU=o
s=B.a.iG(B.c.kY(o,36),8,"0")
r=J.FG(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.d3(36)]
return B.a.B(s+B.b.ez(r),0,15)},
P2(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
P3(a,b){var s,r,q=A.l([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.push(A.P2(a[r],b))
return q},
q_(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.dn)throw q
else{s=r
r=A.dp("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
CL(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.k
try{s=B.h.aI(a,null)
if(t.f.b(s)){q=A.bs(s,t.N,t.X)
return q}return B.k}catch(p){r=A.C(p)
q=A.dp("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
HY(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bl
try{s=B.h.aI(a,null)
if(t.j.b(s)){q=J.q6(s,t.N)
q=q.cz(q)
return q}return B.bl}catch(p){r=A.C(p)
q=A.dp("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
HX(a){var s,r,q,p,o=null
if(a==null)return B.u
A.G(a)
if(a.length===0)return B.u
s=B.h.aI(a,o)
if(!t.j.b(s))throw A.b(A.ac("expected a JSON array, got "+J.c8(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.u(A.ac("dirty-field member is "+J.c8(p).l(0)+", expected String",o,o)))}return r},
fp(a){var s,r=J.J(a)
if(r.gF(a))return null
s=J.bH(r.gH(a).gaX())
if(A.a8(s))return s
if(typeof s=="string")return A.ha(s,null)
return null},
I0(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.bX(B.w.xO(r*J.J7(d.$1(o),0.5,1.5)),0,0)},
OZ(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cu)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.ac("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.an(r)!==32)throw A.b(B.ct)
q=new Uint8Array(32)
for(p=J.J(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.a8(n)||n<0||n>255)throw A.b(A.ac("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.Fc(q)
p=$.Do()
if($.l9()!==B.Q)A.u(A.A("BigEndian systems are unsupported"))
return new A.q9(new A.lY(12,32,m),new A.jT(new A.nF(A.Fc(q)),m),p)},
OU(){var s=A.Ll(),r=t.cj
new A.zr(s,B.bY,A.l([],t.az),A.t(t.S,t.lp),new A.jr(A.DO(r)),new A.jr(A.DO(r))).ex()},
HV(){var s,r,q,p,o=null
try{o=A.Ea()}catch(s){if(t.mA.b(A.C(s))){r=$.Cc
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.H9)){r=$.Cc
r.toString
return r}$.H9=o
if($.F0()===$.lb())r=$.Cc=o.al(".").l(0)
else{q=o.kX()
p=q.length-1
r=$.Cc=p===0?q:B.a.B(q,0,p)}return r},
I3(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
HZ(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.I3(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.B(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
OP(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gH(0)
for(r=A.cE(a,1,null,a.$ti.i("a0.E")),q=r.$ti,r=new A.as(r,r.gm(0),q.i("as<a0.E>")),q=q.i("a0.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
P5(a,b){var s=B.b.c5(a,null)
if(s<0)throw A.b(A.U(A.r(a)+" contains no null elements.",null))
a[s]=b},
If(a,b){var s=B.b.c5(a,b)
if(s<0)throw A.b(A.U(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Oi(a,b){var s,r,q,p
for(s=new A.ct(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),r=r.i("M.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
CR(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cq(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.c5(a,b)
while(r!==-1){q=r===0?0:B.a.iv(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cq(a,b,r+1)}return null},
EN(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.ci(A.ee(r.b,p.sqlite3_errmsg(q),null),A.ee(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
Dk(a,b,c,d,e){throw A.b(A.EN(a.a,a.b,b,c,d,e))},
Fg(a){if(a.a3(0,$.Ir())<0||a.a3(0,$.Iq())>0)throw A.b(A.Fu("BigInt value exceeds the range of 64 bits"))
return a},
KQ(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.aj(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.ee(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.Gn(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
FB(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bD("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.d3(61)))
return s.charCodeAt(0)==0?s:s},
xJ(a){var s=0,r=A.h(t.lo),q
var $async$xJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(a.arrayBuffer(),t.a),$async$xJ)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xJ,r)}},B={}
var w=[A,J,B]
var $={}
A.DM.prototype={}
J.mH.prototype={
P(a,b){return a===b},
gK(a){return A.eW(a)},
l(a){return"Instance of '"+A.nj(a)+"'"},
gam(a){return A.bT(A.Ex(this))}}
J.mK.prototype={
l(a){return String(a)},
gK(a){return a?519018:218159},
gam(a){return A.bT(t.y)},
$iam:1,
$iP:1}
J.j5.prototype={
P(a,b){return null==b},
l(a){return"null"},
gK(a){return 0},
gam(a){return A.bT(t.P)},
$iam:1,
$iW:1}
J.aJ.prototype={$iN:1}
J.dU.prototype={
gK(a){return 0},
gam(a){return B.ea},
l(a){return String(a)}}
J.nh.prototype={}
J.ea.prototype={}
J.bZ.prototype={
l(a){var s=a[$.Iu()]
if(s==null)s=a[$.ft()]
if(s==null)return this.pf(a)
return"JavaScript function for "+J.Z(s)}}
J.bB.prototype={
gK(a){return 0},
l(a){return String(a)}}
J.fW.prototype={
gK(a){return 0},
l(a){return String(a)}}
J.z.prototype={
fj(a,b){return new A.bW(a,A.a1(a).i("@<1>").Z(b).i("bW<1,2>"))},
u(a,b){a.$flags&1&&A.K(a,29)
a.push(b)},
iQ(a,b){var s
a.$flags&1&&A.K(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.xI(b,null))
return a.splice(b,1)[0]},
aF(a,b,c){var s
a.$flags&1&&A.K(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.xI(b,null))
a.splice(b,0,c)},
kF(a,b,c){var s,r
a.$flags&1&&A.K(a,"insertAll",2)
A.G3(b,0,a.length,"index")
if(!t.O.b(c))c=J.Jj(c)
s=J.an(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.aA(a,b,r,c)},
kT(a){a.$flags&1&&A.K(a,"removeLast",1)
if(a.length===0)throw A.b(A.CN(a,-1))
return a.pop()},
G(a,b){var s
a.$flags&1&&A.K(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
tn(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.az(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dM(a,b){return new A.aq(a,b,A.a1(a).i("aq<1>"))},
D(a,b){var s
a.$flags&1&&A.K(a,"addAll",2)
if(Array.isArray(b)){this.pE(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
pE(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.az(a))
for(s=0;s<r;++s)a.push(b[s])},
aq(a){a.$flags&1&&A.K(a,"clear","clear")
a.length=0},
cu(a,b,c){return new A.Y(a,b,A.a1(a).i("@<1>").Z(c).i("Y<1,2>"))},
C(a,b){var s,r=A.a9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ez(a){return this.C(a,"")},
c9(a,b){return A.cE(a,0,A.cJ(b,"count",t.S),A.a1(a).c)},
b6(a,b){return A.cE(a,b,null,A.a1(a).c)},
cp(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.az(a))}if(c!=null)return c.$0()
throw A.b(A.av())},
ky(a,b){return this.cp(a,b,null)},
a4(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.aA(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.aA(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a1(a))
return A.l(a.slice(b,c),A.a1(a))},
bd(a,b){return this.U(a,b,null)},
h4(a,b,c){A.bk(b,c,a.length)
return A.cE(a,b,c,A.a1(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.av())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.av())},
gao(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.av())
throw A.b(A.j2())},
iR(a,b,c){a.$flags&1&&A.K(a,18)
A.bk(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.K(a,5)
A.bk(b,c,a.length)
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.fw(d,e).ba(0,!1)
q=0}p=J.J(r)
if(q+s>p.gm(r))throw A.b(A.FE())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
bl(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.az(a))}return!1},
co(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.az(a))}return!0},
cB(a,b){var s,r,q,p,o
a.$flags&2&&A.K(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.MY()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a1(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.er(b,2))
if(p>0)this.tp(a,p)},
aj(a){return this.cB(a,null)},
tp(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
c5(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
d0(a,b){var s,r=a.length,q=r-1
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
ba(a,b){var s=A.a1(a)
return b?A.l(a.slice(0),s):J.DJ(a.slice(0),s.c)},
bP(a){return this.ba(a,!0)},
cz(a){return A.mV(a,A.a1(a).c)},
gt(a){return new J.fA(a,a.length,A.a1(a).i("fA<1>"))},
gK(a){return A.eW(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.K(a,"set length","change the length of")
if(b<0)throw A.b(A.aA(b,0,null,"newLength",null))
if(b>a.length)A.a1(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.CN(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.K(a)
if(!(b>=0&&b<a.length))throw A.b(A.CN(a,b))
a[b]=c},
nk(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gam(a){return A.bT(A.a1(a))},
$ibj:1,
$iL:1,
$io:1,
$iq:1}
J.mI.prototype={
xZ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.nj(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.uh.prototype={}
J.fA.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.eM.prototype={
a3(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkJ(b)
if(this.gkJ(a)===s)return 0
if(this.gkJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkJ(a){return a===0?1/a<0:a<0},
fY(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.a2(""+a+".toInt()"))},
uH(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.a2(""+a+".ceil()"))},
w_(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.a2(""+a+".floor()"))},
xO(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.a2(""+a+".round()"))},
bu(a,b,c){if(this.a3(b,c)>0)throw A.b(A.fn(b))
if(this.a3(a,b)<0)return b
if(this.a3(a,c)>0)return c
return a},
kY(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.aA(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.u(A.a2("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bp("0",q)},
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
j9(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mE(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.mE(a,b)},
mE(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.a2("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bT(a,b){if(b<0)throw A.b(A.fn(b))
return b>31?0:a<<b>>>0},
tL(a,b){return b>31?0:a<<b>>>0},
dR(a,b){var s
if(b<0)throw A.b(A.fn(b))
if(a>0)s=this.k5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ag(a,b){var s
if(a>0)s=this.k5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mC(a,b){if(0>b)throw A.b(A.fn(b))
return this.k5(a,b)},
k5(a,b){return b>31?0:a>>>b},
oO(a,b){return a>b},
gam(a){return A.bT(t.cZ)},
$iay:1,
$iae:1,
$ib2:1}
J.j4.prototype={
gn_(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gam(a){return A.bT(t.S)},
$iam:1,
$ii:1}
J.mL.prototype={
gam(a){return A.bT(t.W)},
$iam:1}
J.dS.prototype={
kf(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.py(b,a,c)},
hW(a,b){return this.kf(a,b,0)},
eC(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.hv(c,a)},
c4(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ab(a,r-s)},
kV(a,b,c){A.G3(0,0,a.length,"startIndex")
return A.Pb(a,b,c,0)},
dd(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.eN){s=b.e
s=!(s==null?b.e=b.qc():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.qo(a,b)}},
dI(a,b,c,d){var s=A.bk(b,c,a.length)
return A.Ik(a,b,s,d)},
qo(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.Dq(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
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
B(a,b,c){return a.substring(b,A.bk(b,c,a.length))},
ab(a,b){return this.B(a,b,null)},
ca(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Kc(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.FI(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
xX(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.FI(r,s))},
bp(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.c_)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iG(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bp(c,s)+a},
x9(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bp(" ",s)},
cq(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c5(a,b){return this.cq(a,b,0)},
iv(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
d0(a,b){return this.iv(a,b,null)},
E(a,b){return A.P8(a,b,0)},
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
$ibj:1,
$iam:1,
$iay:1,
$ij:1}
A.Ak.prototype={
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
iS(){var s,r=this
if(r.a===0)return $.q3()
s=J.bV(B.f.gac(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.q3()
return s},
gm(a){return this.a}}
A.oQ.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.ba(b))
this.b.push(s)
this.a=this.a+s.length},
iS(){var s,r,q,p,o,n,m,l=this,k=l.a
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
gt(a){return new A.lF(J.E(this.gbj()),A.n(this).i("lF<1,2>"))},
gm(a){return J.an(this.gbj())},
gF(a){return J.bz(this.gbj())},
gS(a){return J.d8(this.gbj())},
b6(a,b){var s=A.n(this)
return A.fC(J.fw(this.gbj(),b),s.c,s.y[1])},
c9(a,b){var s=A.n(this)
return A.fC(J.lg(this.gbj(),b),s.c,s.y[1])},
a4(a,b){return A.n(this).y[1].a(J.le(this.gbj(),b))},
gH(a){return A.n(this).y[1].a(J.bH(this.gbj()))},
ga_(a){return A.n(this).y[1].a(J.q7(this.gbj()))},
gao(a){return A.n(this).y[1].a(J.q8(this.gbj()))},
E(a,b){return J.Dr(this.gbj(),b)},
l(a){return J.Z(this.gbj())}}
A.lF.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ey.prototype={
gbj(){return this.a}}
A.kj.prototype={$iL:1}
A.kg.prototype={
h(a,b){return this.$ti.y[1].a(J.T(this.a,b))},
j(a,b,c){J.b4(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.Je(this.a,b)},
u(a,b){J.aN(this.a,this.$ti.c.a(b))},
cB(a,b){var s=b==null?null:new A.zU(this,b)
J.Fb(this.a,s)},
h4(a,b,c){var s=this.$ti
return A.fC(J.Ja(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.Jf(this.a,b,c,A.fC(d,s.y[1],s.c),e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)},
$iL:1,
$iq:1}
A.zU.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bW.prototype={
fj(a,b){return new A.bW(this.a,this.$ti.i("@<1>").Z(b).i("bW<1,2>"))},
gbj(){return this.a}}
A.ez.prototype={
cm(a,b,c){return new A.ez(this.a,this.$ti.i("@<1,2>").Z(b).Z(c).i("ez<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a5(a,b){this.a.a5(0,new A.qB(this,b))},
gJ(){var s=this.$ti
return A.fC(this.a.gJ(),s.c,s.y[2])},
gaX(){var s=this.$ti
return A.fC(this.a.gaX(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gS(a){var s=this.a
return s.gS(s)},
ga0(){var s=this.a.ga0()
return s.cu(s,new A.qA(this),this.$ti.i("V<3,4>"))}}
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
A.ct.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.D5.prototype={
$0(){return A.bi(null,t.H)},
$S:3}
A.xX.prototype={}
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
co(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a4(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.az(r))}return!0},
C(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a4(0,0))
if(o!==p.gm(p))throw A.b(A.az(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a4(0,q))
if(o!==p.gm(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a4(0,q))
if(o!==p.gm(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}},
ez(a){return this.C(0,"")},
dM(a,b){return this.pa(0,b)},
cu(a,b,c){return new A.Y(this,b,A.n(this).i("@<a0.E>").Z(c).i("Y<1,2>"))},
xE(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.av())
s=q.a4(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a4(0,r))
if(p!==q.gm(q))throw A.b(A.az(q))}return s},
b6(a,b){return A.cE(this,b,null,A.n(this).i("a0.E"))},
c9(a,b){return A.cE(this,0,A.cJ(b,"count",t.S),A.n(this).i("a0.E"))},
ba(a,b){var s=A.n(this).i("a0.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
bP(a){return this.ba(0,!0)}}
A.cD.prototype={
ja(a,b,c,d){var s,r=this.b
A.aW(r,"start")
s=this.c
if(s!=null){A.aW(s,"end")
if(r>s)throw A.b(A.aA(r,0,s,"start",null))}},
gqz(){var s=J.an(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtP(){var s=J.an(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.an(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a4(a,b){var s=this,r=s.gtP()+b
if(b<0||r>=s.gqz())throw A.b(A.mE(b,s.gm(0),s,null,"index"))
return J.le(s.a,r)},
b6(a,b){var s,r,q=this
A.aW(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.eI(q.$ti.i("eI<1>"))
return A.cE(q.a,s,r,q.$ti.c)},
c9(a,b){var s,r,q,p=this
A.aW(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.cE(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.cE(p.a,r,q,p.$ti.c)}},
ba(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.J(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.ug(0,n):J.mJ(0,n)}r=A.a9(s,m.a4(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a4(n,o+q)
if(m.gm(n)<l)throw A.b(A.az(p))}return r},
bP(a){return this.ba(0,!0)}}
A.as.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.J(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.az(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a4(q,s);++r.c
return!0}}
A.cv.prototype={
gt(a){return new A.mX(J.E(this.a),this.b,A.n(this).i("mX<1,2>"))},
gm(a){return J.an(this.a)},
gF(a){return J.bz(this.a)},
gH(a){return this.b.$1(J.bH(this.a))},
ga_(a){return this.b.$1(J.q7(this.a))},
gao(a){return this.b.$1(J.q8(this.a))},
a4(a,b){return this.b.$1(J.le(this.a,b))}}
A.eH.prototype={$iL:1}
A.mX.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.Y.prototype={
gm(a){return J.an(this.a)},
a4(a,b){return this.b.$1(J.le(this.a,b))}}
A.aq.prototype={
gt(a){return new A.d1(J.E(this.a),this.b,this.$ti.i("d1<1>"))},
cu(a,b,c){return new A.cv(this,b,this.$ti.i("@<1>").Z(c).i("cv<1,2>"))}}
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
A.f2.prototype={
gt(a){var s=this.a
return new A.oa(s.gt(s),this.b,A.n(this).i("oa<1>"))}}
A.iM.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.oO(r,s))return s
return r},
$iL:1}
A.oa.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.dl.prototype={
b6(a,b){A.dH(b,"count")
A.aW(b,"count")
return new A.dl(this.a,this.b+b,A.n(this).i("dl<1>"))},
gt(a){var s=this.a
return new A.nI(s.gt(s),this.b,A.n(this).i("nI<1>"))}}
A.fM.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
b6(a,b){A.dH(b,"count")
A.aW(b,"count")
return new A.fM(this.a,this.b+b,this.$ti)},
$iL:1}
A.nI.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.eI.prototype={
gt(a){return B.aV},
gF(a){return!0},
gm(a){return 0},
gH(a){throw A.b(A.av())},
ga_(a){throw A.b(A.av())},
gao(a){throw A.b(A.av())},
a4(a,b){throw A.b(A.aA(b,0,0,"index",null))},
E(a,b){return!1},
co(a,b){return!0},
dM(a,b){return this},
cu(a,b,c){return new A.eI(c.i("eI<0>"))},
b6(a,b){A.aW(b,"count")
return this},
c9(a,b){A.aW(b,"count")
return this},
ba(a,b){var s=this.$ti.c
return b?J.ug(0,s):J.mJ(0,s)},
bP(a){return this.ba(0,!0)},
cz(a){return A.vn(this.$ti.c)}}
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
A.dc.prototype={
gm(a){return J.an(this.a)},
gF(a){return J.bz(this.a)},
gS(a){return J.d8(this.a)},
gH(a){return new A.a_(this.b,J.bH(this.a))},
gao(a){return new A.a_(this.b,J.q8(this.a))},
a4(a,b){return new A.a_(b+this.b,J.le(this.a,b))},
E(a,b){var s,r,q,p=null,o=null,n=!1
if(t.fe.b(b)){s=b.a
if(A.a8(s)){A.aj(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){n=J.fw(this.a,p-this.b)
q=n.gt(n)
return q.k()&&J.x(q.gn(),o)}return!1},
c9(a,b){A.dH(b,"count")
A.aW(b,"count")
return new A.dc(J.lg(this.a,b),this.b,A.n(this).i("dc<1>"))},
b6(a,b){A.dH(b,"count")
A.aW(b,"count")
return new A.dc(J.fw(this.a,b),b+this.b,A.n(this).i("dc<1>"))},
gt(a){return new A.dR(J.E(this.a),this.b,A.n(this).i("dR<1>"))}}
A.eG.prototype={
ga_(a){var s,r=this.a,q=J.J(r),p=q.gm(r)
if(p<=0)throw A.b(A.av())
s=q.ga_(r)
if(p!==q.gm(r))throw A.b(A.az(this))
return new A.a_(p-1+this.b,s)},
E(a,b){var s,r,q,p,o=null,n=null,m=!1
if(t.fe.b(b)){s=b.a
if(A.a8(s)){A.aj(s)
r=b.b
m=s>=this.b
n=r
o=s}}if(m){q=o-this.b
m=this.a
p=J.J(m)
return q<p.gm(m)&&J.x(p.a4(m,q),n)}return!1},
c9(a,b){A.dH(b,"count")
A.aW(b,"count")
return new A.eG(J.lg(this.a,b),this.b,this.$ti)},
b6(a,b){A.dH(b,"count")
A.aW(b,"count")
return new A.eG(J.fw(this.a,b),this.b+b,this.$ti)},
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
cB(a,b){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.hD.prototype={}
A.bE.prototype={
gm(a){return J.an(this.a)},
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
A.hZ.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.pl.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.ek.prototype={$r:"+(1,2,3)",$s:7}
A.fg.prototype={$r:"+(1,2,3,4)",$s:8}
A.pm.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.iI.prototype={}
A.fI.prototype={
cm(a,b,c){var s=A.n(this)
return A.FM(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gS(a){return this.gm(this)!==0},
l(a){return A.vH(this)},
j(a,b,c){A.JE()},
ga0(){return new A.i3(this.vM(),A.n(this).i("i3<V<1,2>>"))},
vM(){var s=this
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
aU(a,b,c,d){var s=A.t(c,d)
this.a5(0,new A.rg(this,b,s))
return s},
$iF:1}
A.rg.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aE.prototype={
gm(a){return this.b.length},
gm5(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a5(a,b){var s,r,q=this.gm5(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gJ(){return new A.fd(this.gm5(),this.$ti.i("fd<1>"))},
gaX(){return new A.fd(this.b,this.$ti.i("fd<2>"))}}
A.fd.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gS(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hV(s,s.length,this.$ti.i("hV<1>"))}}
A.hV.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iY.prototype={
e3(){var s=this,r=s.$map
if(r==null){r=new A.j6(s.$ti.i("j6<1,2>"))
A.I1(s.a,r)
s.$map=r}return r},
I(a){return this.e3().I(a)},
h(a,b){return this.e3().h(0,b)},
a5(a,b){this.e3().a5(0,b)},
gJ(){var s=this.e3()
return new A.S(s,A.n(s).i("S<1>"))},
gaX(){var s=this.e3()
return new A.ao(s,A.n(s).i("ao<2>"))},
gm(a){return this.e3().a}}
A.iJ.prototype={
u(a,b){A.JF()}}
A.dK.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gS(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hV(s,s.length,r.$ti.i("hV<1>"))},
E(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
cz(a){return A.c0(this,this.$ti.c)}}
A.ua.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.j1&&this.a.P(0,b.a)&&A.ER(this)===A.ER(b)},
gK(a){return A.cg(this.a,A.ER(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.C([A.bT(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.j1.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.OO(A.pY(this.a),this.$ti)}}
A.x0.prototype={
$0(){return B.w.w_(1000*this.a.now())},
$S:10}
A.jP.prototype={}
A.yK.prototype={
c6(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
$iH:1}
A.iO.prototype={}
A.kC.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaL:1}
A.eB.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Ip(r==null?"unknown":r)+"'"},
gam(a){var s=A.pY(this)
return A.bT(s==null?A.bo(this):s)},
gz3(){return this},
$C:"$1",
$R:1,
$D:null}
A.qG.prototype={$C:"$0",$R:0}
A.qH.prototype={$C:"$2",$R:2}
A.yy.prototype={}
A.y7.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Ip(s)+"'"}}
A.iz.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.iz))return!1
return this.$_target===b.$_target&&this.a===b.a},
gK(a){return(A.l5(this.a)^A.eW(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.nj(this.a)+"'")}}
A.nB.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bM.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.S(this,A.n(this).i("S<1>"))},
gaX(){return new A.ao(this,A.n(this).i("ao<2>"))},
ga0(){return new A.aK(this,A.n(this).i("aK<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nm(a)},
nm(a){var s=this.d
if(s==null)return!1
return this.dD(this.m0(s,a),a)>=0},
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
return q}else return this.nn(b)},
nn(a){var s,r,q=this.d
if(q==null)return null
s=this.m0(q,a)
r=this.dD(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.lo(s==null?q.b=q.jO():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.lo(r==null?q.c=q.jO():r,b,c)}else q.np(b,c)},
np(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jO()
s=p.ey(a)
r=o[s]
if(r==null)o[s]=[p.jc(a,b)]
else{q=p.dD(r,a)
if(q>=0)r[q].b=b
else r.push(p.jc(a,b))}},
nE(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
G(a,b){var s=this
if(typeof b=="string")return s.mr(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.mr(s.c,b)
else return s.no(b)},
no(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ey(a)
r=n[s]
q=o.dD(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mK(p)
if(r.length===0)delete n[s]
return p.b},
aq(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.jb()}},
a5(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.az(s))
r=r.c}},
lo(a,b,c){var s=a[b]
if(s==null)a[b]=this.jc(b,c)
else s.b=c},
mr(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mK(s)
delete a[b]
return s.b},
jb(){this.r=this.r+1&1073741823},
jc(a,b){var s,r=this,q=new A.vl(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.jb()
return q},
mK(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.jb()},
ey(a){return J.ab(a)&1073741823},
m0(a,b){return a[this.ey(b)]},
dD(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.vH(this)},
jO(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ui.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.vl.prototype={}
A.S.prototype={
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
return new A.aZ(s,s.r,s.e,this.$ti.i("aZ<1>"))}}
A.aZ.prototype={
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
ey(a){return A.l5(a)&1073741823},
dD(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.j6.prototype={
ey(a){return A.Oa(a)&1073741823},
dD(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.D_.prototype={
$1(a){return this.a(a)},
$S:41}
A.D0.prototype={
$2(a,b){return this.a(a,b)},
$S:208}
A.D1.prototype={
$1(a){return this.a(a)},
$S:72}
A.hY.prototype={
gam(a){return A.bT(this.m1())},
m1(){return A.Ow(this.$r,this.hs())},
l(a){return this.mI(!1)},
mI(a){var s,r,q,p,o,n=this.qJ(),m=this.hs(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.FZ(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qJ(){var s,r=this.$s
while($.Bf.length<=r)$.Bf.push(null)
s=$.Bf[r]
if(s==null){s=this.qb()
$.Bf[r]=s}return s},
qb(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.FG(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fX(j,k)}}
A.pi.prototype={
hs(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.pi&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gK(a){return A.cg(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.pj.prototype={
hs(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.pj&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gK(a){var s=this
return A.cg(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.pk.prototype={
hs(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.pk&&this.$s===b.$s&&A.LZ(this.a,b.a)},
gK(a){return A.cg(this.$s,A.w9(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eN.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gmb(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.DL(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
grr(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.DL(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
qc(){var s,r=this.a
if(!B.a.E(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ev(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hX(s)},
kf(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.oH(this,b,c)},
hW(a,b){return this.kf(0,b,0)},
qG(a,b){var s,r=this.gmb()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hX(s)},
qF(a,b){var s,r=this.grr()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hX(s)},
eC(a,b,c){if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,null,null))
return this.qF(b,c)}}
A.hX.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieR:1,
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
p=q.qG(l,s)
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
A.hv.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.xI(b,null))
return this.c},
$ieR:1,
gR(){return this.a}}
A.py.prototype={
gt(a){return new A.BB(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hv(r,s)
throw A.b(A.av())}}
A.BB.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hv(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.oR.prototype={
aE(){var s=this.b
if(s===this)throw A.b(new A.dT("Local '"+this.a+"' has not been initialized."))
return s},
bE(){var s=this.b
if(s===this)throw A.b(A.FL(this.a))
return s},
sic(a){var s=this
if(s.b!==s)throw A.b(new A.dT("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.h4.prototype={
gam(a){return B.e2},
hY(a,b,c){A.ia(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mX(a){return this.hY(a,0,null)},
mW(a,b,c){A.ia(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hX(a,b,c){A.ia(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mV(a){return this.hX(a,0,null)},
$iam:1,
$iex:1}
A.h3.prototype={$ih3:1}
A.jt.prototype={
gac(a){if(((a.$flags|0)&2)!==0)return new A.pG(a.buffer)
else return a.buffer},
rh(a,b,c,d){var s=A.aA(b,0,c,d,null)
throw A.b(s)},
lz(a,b,c,d){if(b>>>0!==b||b>c)this.rh(a,b,c,d)}}
A.pG.prototype={
hY(a,b,c){var s=A.c2(this.a,b,c)
s.$flags=3
return s},
mX(a){return this.hY(0,0,null)},
mW(a,b,c){var s=A.FS(this.a,b,c)
s.$flags=3
return s},
hX(a,b,c){var s=A.FR(this.a,b,c)
s.$flags=3
return s},
mV(a){return this.hX(0,0,null)},
$iex:1}
A.js.prototype={
gam(a){return B.e3},
$iam:1,
$iDt:1}
A.h5.prototype={
gm(a){return a.length},
mB(a,b,c,d,e){var s,r,q=a.length
this.lz(a,b,q,"start")
this.lz(a,c,q,"end")
if(b>c)throw A.b(A.aA(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.U(e,null))
r=d.length
if(r-e<s)throw A.b(A.A("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibj:1,
$ic_:1}
A.e0.prototype={
h(a,b){A.dC(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.K(a)
A.dC(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.K(a,5)
if(t.dQ.b(d)){this.mB(a,b,c,d,e)
return}this.ll(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$iq:1}
A.c1.prototype={
j(a,b,c){a.$flags&2&&A.K(a)
A.dC(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.K(a,5)
if(t.aj.b(d)){this.mB(a,b,c,d,e)
return}this.ll(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$iq:1}
A.n3.prototype={
gam(a){return B.e5},
U(a,b,c){return new Float32Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$itw:1}
A.n4.prototype={
gam(a){return B.e6},
U(a,b,c){return new Float64Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$itx:1}
A.n5.prototype={
gam(a){return B.e7},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$iub:1}
A.n6.prototype={
gam(a){return B.e8},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$iuc:1}
A.n7.prototype={
gam(a){return B.e9},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$iud:1}
A.ju.prototype={
gam(a){return B.ef},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$iyM:1}
A.jv.prototype={
gam(a){return B.eg},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$iyN:1}
A.jw.prototype={
gam(a){return B.eh},
gm(a){return a.length},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$iyO:1}
A.eT.prototype={
gam(a){return B.ei},
gm(a){return a.length},
h(a,b){A.dC(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8Array(a.subarray(b,A.d4(b,c,a.length)))},
bd(a,b){return this.U(a,b,null)},
$iam:1,
$ieT:1,
$icZ:1}
A.kv.prototype={}
A.kw.prototype={}
A.kx.prototype={}
A.ky.prototype={}
A.cz.prototype={
i(a){return A.kL(v.typeUniverse,this,a)},
Z(a){return A.GP(v.typeUniverse,this,a)}}
A.p5.prototype={}
A.pD.prototype={
l(a){return A.c6(this.a,null)}}
A.p2.prototype={
l(a){return this.a}}
A.kH.prototype={$idt:1}
A.zC.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:28}
A.zB.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:195}
A.zD.prototype={
$0(){this.a.$0()},
$S:2}
A.zE.prototype={
$0(){this.a.$0()},
$S:2}
A.kG.prototype={
pz(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.er(new A.BF(this,b),0),a)
else throw A.b(A.a2("`setTimeout()` not found."))},
pA(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.er(new A.BE(this,a,Date.now(),b),0),a)
else throw A.b(A.a2("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.a2("Canceling a timer."))},
$idr:1}
A.BF.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.BE.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.j9(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.k9.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aH(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.ly(a)
else s.dg(a)}},
bw(a,b){var s
if(b==null)b=A.iu(a)
s=this.a
if(this.b)s.ap(new A.ar(a,b))
else s.cE(new A.ar(a,b))},
aT(a){return this.bw(a,null)},
$iiF:1}
A.C5.prototype={
$1(a){return this.a.$2(0,a)},
$S:29}
A.C6.prototype={
$2(a,b){this.a.$2(1,new A.iO(a,b))},
$S:211}
A.Cw.prototype={
$2(a,b){this.a(a,b)},
$S:99}
A.C3.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaS().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.C4.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:28}
A.oK.prototype={
pv(a,b){var s=new A.zG(a)
this.a=A.nS(new A.zI(this,a),new A.zJ(s),null,new A.zK(this,s),!1,b)}}
A.zG.prototype={
$0(){A.l8(new A.zH(this.a))},
$S:2}
A.zH.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.zJ.prototype={
$0(){this.a.$0()},
$S:0}
A.zK.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.zI.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.w($.B,t._)
if(s.b){s.b=!1
A.l8(new A.zF(this.b))}return s.c}},
$S:120}
A.zF.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.kr.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.pA.prototype={
gn(){return this.b},
tq(a,b){var s,r,q
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
o.d=null}q=o.tq(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.GJ
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.GJ
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.A("sync*"))}return!1},
z4(a){var s,r,q=this
if(a instanceof A.i3){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.i3.prototype={
gt(a){return new A.pA(this.a(),this.$ti.i("pA<1>"))}}
A.ar.prototype={
l(a){return A.r(this.a)},
$iag:1,
gcC(){return this.b}}
A.aX.prototype={}
A.f7.prototype={
bY(){},
bZ(){}}
A.kf.prototype={
gcD(){return new A.aX(this,A.n(this).i("aX<1>"))},
giu(){return(this.c&4)!==0},
gjM(){return this.c<4},
tm(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
k6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.GA(c,A.n(j).c)
s=A.n(j)
r=$.B
q=d?1:0
p=b!=null?32:0
o=A.oO(r,a,s.c)
n=A.zR(r,b)
m=c==null?A.Cy():c
l=new A.f7(j,o,n,r.c8(m,t.H),r,q|p,s.i("f7<1>"))
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
ml(a){var s,r=this
A.n(r).i("f7<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.tm(a)
if((r.c&2)===0&&r.d==null)r.pY()}return null},
mm(a){},
mn(a){},
je(){if((this.c&4)!==0)return new A.bt("Cannot add new events after calling close")
return new A.bt("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjM())throw A.b(this.je())
this.cM(b)},
bk(a,b){var s
if(!this.gjM())throw A.b(this.je())
s=A.fk(a,b)
this.cN(s.a,s.b)},
ke(a){return this.bk(a,null)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjM())throw A.b(q.je())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.B,t.D)
q.ds()
return r},
aM(a,b){this.cN(a,b)},
aY(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aH(null)},
pY(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aH(null)}A.pU(this.b)},
$ibL:1}
A.ka.prototype={
cM(a){var s,r
for(s=this.d,r=this.$ti.i("ck<1>");s!=null;s=s.ch)s.cd(new A.ck(a,r))},
cN(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.cd(new A.hQ(a,b))},
ds(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.cd(B.ae)
else this.r.aH(null)}}
A.tG.prototype={
$0(){this.c.a(null)
this.b.cF(null)},
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
if(j!=null){J.b4(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aN(s,n)}m.c.dg(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ap(new A.ar(s,l))}},
$S(){return this.d.i("W(0)")}}
A.tB.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(k,aL)")}}
A.ob.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iH:1}
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
l.a.aT(new A.jC(B.b.ky(s,A.NN()),a,q.i("jC<q<0?>,q<ar?>>")))}},
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
gcC(){var s=this.c
s=s==null?null:s.b
return s==null?A.ag.prototype.gcC.call(this):s}}
A.kp.prototype={
u7(a){this.a.b2(new A.AB(this,a),new A.AC(this,a),t.P)}}
A.AB.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.AC.prototype={
$2(a,b){this.a.c=new A.ar(a,b)
this.b.$1(1)},
$S:6}
A.AA.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.f8.prototype={
bw(a,b){if((this.a.a&30)!==0)throw A.b(A.A("Future already completed"))
this.ap(A.fk(a,b))},
aT(a){return this.bw(a,null)},
$iiF:1}
A.aG.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.aH(a)},
ak(){return this.aB(null)},
ap(a){this.a.cE(a)}}
A.at.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.cF(a)},
ak(){return this.aB(null)},
ap(a){this.a.ap(a)}}
A.cl.prototype={
wT(a){if((this.c&15)!==6)return!0
return this.b.b.eM(this.d,a.a,t.y,t.K)},
wd(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kW(r,n,a.b,p,o,t.l)
else q=m.eM(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.C(s))){if((this.c&1)!==0)throw A.b(A.U("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.U("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
b2(a,b,c){var s,r,q=$.B
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aD(b,"onError",u.w))}else{a=q.dH(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.Ho(b,q)}s=new A.w($.B,c.i("w<0>"))
r=b==null?1:3
this.dV(new A.cl(s,r,a,b,this.$ti.i("@<1>").Z(c).i("cl<1,2>")))
return s},
W(a,b){return this.b2(a,null,b)},
mG(a,b,c){var s=new A.w($.B,c.i("w<0>"))
this.dV(new A.cl(s,19,a,b,this.$ti.i("@<1>").Z(c).i("cl<1,2>")))
return s},
ki(a){var s=this.$ti,r=$.B,q=new A.w(r,s)
if(r!==B.i)a=A.Ho(a,r)
this.dV(new A.cl(q,2,null,a,s.i("cl<1,1>")))
return q},
b4(a){var s=this.$ti,r=$.B,q=new A.w(r,s)
if(r!==B.i)a=r.c8(a,t.z)
this.dV(new A.cl(q,8,a,null,s.i("cl<1,1>")))
return q},
tF(a){this.a=this.a&1|16
this.c=a},
hf(a){this.a=a.a&30|this.a&1
this.c=a.c},
dV(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dV(a)
return}s.hf(r)}s.b.da(new A.AD(s,a))}},
mi(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.mi(a)
return}n.hf(s)}m.a=n.hF(a)
n.b.da(new A.AI(m,n))}},
f9(){var s=this.c
this.c=null
return this.hF(s)},
hF(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cF(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.AG(a,r,!0)
else{s=r.f9()
r.a=8
r.c=a
A.fb(r,s)}},
dg(a){var s=this,r=s.f9()
s.a=8
s.c=a
A.fb(s,r)},
qa(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gcn()===r.gcn())}else s=!1
if(s)return
q=p.f9()
p.hf(a)
A.fb(p,q)},
ap(a){var s=this.f9()
this.tF(a)
A.fb(this,s)},
q9(a,b){this.ap(new A.ar(a,b))},
aH(a){if(this.$ti.i("y<1>").b(a)){this.ly(a)
return}this.lv(a)},
lv(a){this.a^=2
this.b.da(new A.AF(this,a))},
ly(a){A.AG(a,this,!1)
return},
cE(a){this.a^=2
this.b.da(new A.AE(this,a))},
fX(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.B,r.$ti)
q.aH(r)
return q}s=new A.w($.B,r.$ti)
q.a=null
q.a=A.c4(a,new A.AO(s,a))
r.b2(new A.AP(q,r,s),new A.AQ(q,s),t.P)
return s},
$iy:1}
A.AD.prototype={
$0(){A.fb(this.a,this.b)},
$S:0}
A.AI.prototype={
$0(){A.fb(this.b,this.a.a)},
$S:0}
A.AH.prototype={
$0(){A.AG(this.a.a,this.b,!0)},
$S:0}
A.AF.prototype={
$0(){this.a.dg(this.b)},
$S:0}
A.AE.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.AL.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b1(q.d,t.z)}catch(p){s=A.C(p)
r=A.af(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.iu(q)
n=k.a
n.c=new A.ar(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.b2(new A.AM(l,m),new A.AN(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.AM.prototype={
$1(a){this.a.qa(this.b)},
$S:28}
A.AN.prototype={
$2(a,b){this.a.ap(new A.ar(a,b))},
$S:6}
A.AK.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.eM(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.C(n)
r=A.af(n)
q=s
p=r
if(p==null)p=A.iu(q)
o=this.a
o.c=new A.ar(q,p)
o.b=!0}},
$S:0}
A.AJ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.wT(s)&&p.a.e!=null){p.c=p.a.wd(s)
p.b=!1}}catch(o){r=A.C(o)
q=A.af(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.iu(p)
m=l.b
m.c=new A.ar(p,n)
p=m}p.b=!0}},
$S:0}
A.AO.prototype={
$0(){var s=A.E2()
this.a.ap(new A.ar(new A.ob("Future not completed",this.b),s))},
$S:0}
A.AP.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.dg(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.AQ.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.ap(new A.ar(a,b))}},
$S:6}
A.oJ.prototype={}
A.ad.prototype={
ez(a){var s=new A.w($.B,t.os),r=new A.a6(""),q=this.aa(null,!0,new A.yb(s,r),s.gjl())
q.iD(new A.yc(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.B,t.hy)
s.a=0
this.aa(new A.yd(s,this),!0,new A.ye(s,r),r.gjl())
return r},
gH(a){var s=new A.w($.B,A.n(this).i("w<ad.T>")),r=this.aa(null,!0,new A.y9(s),s.gjl())
r.iD(new A.ya(this,r,s))
return s}}
A.yb.prototype={
$0(){var s=this.b.a
this.a.cF(s.charCodeAt(0)==0?s:s)},
$S:0}
A.yc.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.C(o)
r=A.af(o)
q=s
p=r
n=A.kS(q,p)
if(n==null)q=new A.ar(q,p)
else q=n
A.Mv(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(ad.T)")}}
A.yd.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(ad.T)")}}
A.ye.prototype={
$0(){this.b.cF(this.a.a)},
$S:0}
A.y9.prototype={
$0(){var s,r=A.E2(),q=new A.bt("No element")
A.nl(q,r)
s=A.kS(q,r)
if(s==null)s=new A.ar(q,r)
this.a.ap(s)},
$S:0}
A.ya.prototype={
$1(a){A.Mw(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(ad.T)")}}
A.jZ.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bz(a,b,c){return this.aa(a,null,b,c)},
aZ(a){return this.aa(a,null,null,null)}}
A.el.prototype={
gcD(){return new A.bf(this,A.n(this).i("bf<1>"))},
giu(){return(this.b&4)!==0},
grR(){if((this.b&8)===0)return this.a
return this.a.c},
hk(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.ej(A.n(q).i("ej<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.ej(A.n(q).i("ej<1>")):s},
gaS(){var s=this.a
return(this.b&8)!==0?s.c:s},
bV(){if((this.b&4)!==0)return new A.bt("Cannot add event after closing")
return new A.bt("Cannot add event while adding a stream")},
us(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bV())
if((o&2)!==0){o=new A.w($.B,t._)
o.aH(null)
return o}o=p.a
s=b===!0
r=new A.w($.B,t._)
q=s?A.Lm(p):p.gpF()
q=a.aa(p.gpK(),s,p.gq0(),q)
s=p.b
if((s&1)!==0?(p.gaS().e&4)!==0:(s&2)===0)q.b7()
p.a=new A.kD(o,r,q,A.n(p).i("kD<1>"))
p.b|=8
return r},
lS(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.eu():new A.w($.B,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bV())
this.aD(b)},
bk(a,b){var s
if(this.b>=4)throw A.b(this.bV())
s=A.fk(a,b)
this.aM(s.a,s.b)},
ke(a){return this.bk(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lS()
if(r>=4)throw A.b(s.bV())
s.lA()
return s.lS()},
lA(){var s=this.b|=4
if((s&1)!==0)this.ds()
else if((s&3)===0)this.hk().u(0,B.ae)},
aD(a){var s=this,r=s.b
if((r&1)!==0)s.cM(a)
else if((r&3)===0)s.hk().u(0,new A.ck(a,A.n(s).i("ck<1>")))},
aM(a,b){var s=this.b
if((s&1)!==0)this.cN(a,b)
else if((s&3)===0)this.hk().u(0,new A.hQ(a,b))},
aY(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aH(null)},
k6(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.A("Stream has already been listened to."))
s=A.LE(p,a,b,c,d,A.n(p).c)
r=p.grR()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b_()}else p.a=s
s.tG(r)
s.jz(new A.Bx(p))
return s},
ml(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.C(o)
p=A.af(o)
n=new A.w($.B,t.D)
n.cE(new A.ar(q,p))
k=n}else k=k.b4(s)
m=new A.Bw(l)
if(k!=null)k=k.b4(m)
else m.$0()
return k},
mm(a){if((this.b&8)!==0)this.a.b.b7()
A.pU(this.e)},
mn(a){if((this.b&8)!==0)this.a.b.b_()
A.pU(this.f)},
$ibL:1}
A.Bx.prototype={
$0(){A.pU(this.a.d)},
$S:0}
A.Bw.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aH(null)},
$S:0}
A.pB.prototype={
cM(a){this.gaS().aD(a)},
cN(a,b){this.gaS().aM(a,b)},
ds(){this.gaS().aY()}}
A.kb.prototype={
cM(a){this.gaS().cd(new A.ck(a,A.n(this).i("ck<1>")))},
cN(a,b){this.gaS().cd(new A.hQ(a,b))},
ds(){this.gaS().cd(B.ae)}}
A.d2.prototype={}
A.i4.prototype={}
A.bf.prototype={
gK(a){return(A.eW(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bf&&b.a===this.a}}
A.eg.prototype={
hx(){return this.w.ml(this)},
bY(){this.w.mm(this)},
bZ(){this.w.mn(this)}}
A.oG.prototype={
A(){var s=this.b.A()
return s.b4(new A.zx(this))}}
A.zy.prototype={
$2(a,b){var s=this.a
s.aM(a,b)
s.aY()},
$S:6}
A.zx.prototype={
$0(){this.a.a.aH(null)},
$S:2}
A.kD.prototype={}
A.b9.prototype={
tG(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.h5(s)}},
iD(a){this.a=A.oO(this.d,a,A.n(this).i("b9.T"))},
b7(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jz(q.gf1())},
b_(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.h5(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jz(s.gf2())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.jh()
r=s.f
return r==null?$.eu():r},
jh(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hx()},
aD(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cM(a)
else s.cd(new A.ck(a,A.n(s).i("ck<b9.T>")))},
aM(a,b){var s
if(t.C.b(a))A.nl(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cN(a,b)
else this.cd(new A.hQ(a,b))},
aY(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.ds()
else s.cd(B.ae)},
bY(){},
bZ(){},
hx(){return null},
cd(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.ej(A.n(r).i("ej<b9.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.h5(r)}},
cM(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fW(s.a,a,A.n(s).i("b9.T"))
s.e=(s.e&4294967231)>>>0
s.jj((r&4)!==0)},
cN(a,b){var s,r=this,q=r.e,p=new A.zT(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.jh()
s=r.f
if(s!=null&&s!==$.eu())s.b4(p)
else p.$0()}else{p.$0()
r.jj((q&4)!==0)}},
ds(){var s,r=this,q=new A.zS(r)
r.jh()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.eu())s.b4(q)
else q.$0()},
jz(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.jj((r&4)!==0)},
jj(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bY()
else q.bZ()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.h5(q)},
$ibu:1}
A.zT.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nN(s,o,this.c,r,t.l)
else q.fW(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.zS.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fV(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.i2.prototype={
aa(a,b,c,d){return this.a.k6(a,d,c,b===!0)},
bz(a,b,c){return this.aa(a,null,b,c)},
aZ(a){return this.aa(a,null,null,null)},
nt(a,b){return this.aa(a,null,null,b)}}
A.p1.prototype={
geD(){return this.a},
seD(a){return this.a=a}}
A.ck.prototype={
kR(a){a.cM(this.b)}}
A.hQ.prototype={
kR(a){a.cN(this.b,this.c)}}
A.At.prototype={
kR(a){a.ds()},
geD(){return null},
seD(a){throw A.b(A.A("No events after a done."))}}
A.ej.prototype={
h5(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.l8(new A.Be(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.seD(b)
s.c=b}}}
A.Be.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.geD()
q.b=r
if(r==null)q.c=null
s.kR(this.b)},
$S:0}
A.hR.prototype={
iD(a){},
b7(){var s=this.a
if(s>=0)this.a=s+2},
b_(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.l8(s.gme())}else s.a=r},
A(){this.a=-1
this.c=null
return $.eu()},
rH(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fV(s)}}else r.a=q},
$ibu:1}
A.cn.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.B,t.g5)
r.b=s
r.c=!1
q.b_()
return s}throw A.b(A.A("Already waiting for next."))}return r.rg()},
rg(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.B,t.g5)
q.b=s
r=p.aa(q.grz(),!0,q.grB(),q.grD())
if(q.b!=null)q.a=r
return s}return $.Iv()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aH(!1)
else s.c=!1
return r.A()}return $.eu()},
rA(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cF(!0)
if(q.c){r=q.a
if(r!=null)r.b7()}},
rE(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ap(new A.ar(a,b))
else q.cE(new A.ar(a,b))},
rC(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.dg(!1)
else q.lv(!1)}}
A.kk.prototype={
aa(a,b,c,d){return A.GA(c,this.$ti.c)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.dA.prototype={
aa(a,b,c,d){var s=null,r=new A.ku(s,s,s,s,this.$ti.i("ku<1>"))
r.d=new A.Bc(this,r)
return r.k6(a,d,c,b===!0)},
bz(a,b,c){return this.aa(a,null,b,c)},
aZ(a){return this.aa(a,null,null,null)}}
A.Bc.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.ku.prototype={
ut(a){var s=this.b
if(s>=4)throw A.b(this.bV())
if((s&1)!==0)this.gaS().aD(a)},
uJ(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bV())
r|=4
s.b=r
if((r&1)!==0)s.gaS().aY()},
gcD(){throw A.b(A.a2("Not available"))},
$idZ:1}
A.C8.prototype={
$0(){return this.a.ap(this.b)},
$S:0}
A.C9.prototype={
$0(){return this.a.cF(this.b)},
$S:0}
A.kn.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.B,q=b===!0?1:0,p=d!=null?32:0,o=A.oO(r,a,s.y[1]),n=A.zR(r,d),m=c==null?A.Cy():c
s=new A.hU(this,o,n,r.c8(m,t.H),r,q|p,s.i("hU<1,2>"))
s.x=this.a.bz(s.gjA(),s.gjC(),s.gjE())
return s},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.hU.prototype={
aD(a){if((this.e&2)!==0)return
this.j8(a)},
aM(a,b){if((this.e&2)!==0)return
this.lm(a,b)},
bY(){var s=this.x
if(s!=null)s.b7()},
bZ(){var s=this.x
if(s!=null)s.b_()},
hx(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jB(a){this.w.r1(a,this)},
jF(a,b){this.aM(a,b)},
jD(){this.aY()}}
A.fe.prototype={
r1(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.C(q)
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
s.j8(b)},
bk(a,b){this.a.aM(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.u(A.A("Stream is already closed"))
s.ln()},
$ibL:1}
A.i0.prototype={
aD(a){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.j8(a)},
aM(a,b){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.lm(a,b)},
aY(){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.ln()},
bY(){var s=this.x
if(s!=null)s.b7()},
bZ(){var s=this.x
if(s!=null)s.b_()},
hx(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jB(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.u(0,a)}catch(p){s=A.C(p)
r=A.af(p)
this.aM(s,r)}},
jF(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.bk(a,b)}catch(p){s=A.C(p)
r=A.af(p)
if(s===a)this.aM(a,b)
else this.aM(s,r)}},
jD(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.q()}catch(p){s=A.C(p)
r=A.af(p)
this.aM(s,r)}}}
A.ke.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.B,q=b===!0?1:0,p=d!=null?32:0,o=A.oO(r,a,s.y[1]),n=A.zR(r,d),m=c==null?A.Cy():c,l=new A.i0(o,n,r.c8(m,t.H),r,q|p,s.i("i0<1,2>"))
l.w=this.a.$1(new A.kl(l,s.i("kl<2>")))
l.x=this.b.bz(l.gjA(),l.gjC(),l.gjE())
return l},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.C_.prototype={}
A.C1.prototype={}
A.C0.prototype={}
A.BY.prototype={}
A.BZ.prototype={}
A.BX.prototype={}
A.BU.prototype={}
A.pN.prototype={}
A.BT.prototype={}
A.BS.prototype={}
A.BW.prototype={}
A.BV.prototype={}
A.pM.prototype={
w5(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.pO.prototype={}
A.pL.prototype={
f5(a,b,c){var s,r,q,p,o,n,m=this.gjI(),l=m.a
if(l===B.i){A.kZ(b,c)
return}o=l.gkO()
o.toString
s=o
r=$.B
try{$.B=s
m.w5(l,l.gbg(),a,b,c)
$.B=r}catch(n){q=A.C(n)
p=A.af(n)
$.B=r
o=b===q?c:p
s.f5(l,q,o)}},
$iR:1}
A.oW.prototype={
glP(){var s=this.ax
return s==null?this.ax=new A.i8(this):s},
gbg(){return this.ay.glP()},
gcn(){return this.as.a},
fV(a){var s,r,q
try{this.b1(a,t.H)}catch(q){s=A.C(q)
r=A.af(q)
this.f5(this,s,r)}},
fW(a,b,c){var s,r,q
try{this.eM(a,b,t.H,c)}catch(q){s=A.C(q)
r=A.af(q)
this.f5(this,s,r)}},
nN(a,b,c,d,e){var s,r,q
try{this.kW(a,b,c,t.H,d,e)}catch(q){s=A.C(q)
r=A.af(q)
this.f5(this,s,r)}},
kh(a,b){return new A.Ap(this,this.c8(a,b),b)},
uF(a,b,c){return new A.Ar(this,this.dH(a,b,c),c,b)},
fi(a){return new A.Ao(this,this.c8(a,t.H))},
i0(a,b){return new A.Aq(this,this.dH(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aS)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.tj(q,b)},
tj(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkO().gkd()
if(s===B.aS)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fA(a,b){this.f5(this,a,b)},
ng(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gbg(),this,a,b)},
b1(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gbg(),this,a,b)},
eM(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gbg(),this,a,b,c,d)},
kW(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gbg(),this,a,b,c,d,e,f)},
c8(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gbg(),this,a,b)},
dH(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gbg(),this,a,b,c)},
fP(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gbg(),this,a,b,c,d)},
nd(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gbg(),this,a,b)},
da(a){var s=this.w,r=s.a
return s.b.$4(r,r.gbg(),this,a)},
kn(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gbg(),this,a,b)},
km(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gbg(),this,a,b)},
gmt(){return this.a},
gmx(){return this.b},
gmv(){return this.c},
gmp(){return this.d},
gmq(){return this.e},
gmo(){return this.f},
glU(){return this.r},
gk_(){return this.w},
glL(){return this.x},
glK(){return this.y},
gmj(){return this.z},
glZ(){return this.Q},
gjI(){return this.as},
gkd(){return this.at},
gkO(){return this.ay}}
A.Ap.prototype={
$0(){return this.a.b1(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Ar.prototype={
$1(a){var s=this
return s.a.eM(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").Z(this.c).i("1(2)")}}
A.Ao.prototype={
$0(){return this.a.fV(this.b)},
$S:0}
A.Aq.prototype={
$1(a){return this.a.fW(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.pp.prototype={
gmt(){return B.ez},
gmx(){return B.ey},
gmv(){return B.ex},
gmp(){return B.ev},
gmq(){return B.ew},
gmo(){return B.eu},
glU(){return B.eq},
gk_(){return B.eA},
glL(){return B.ep},
glK(){return B.eo},
gmj(){return B.et},
glZ(){return B.er},
gjI(){return B.es},
gkd(){return B.aS},
gkO(){return null},
glP(){var s=$.Bj
return s==null?$.Bj=new A.i8(this):s},
gbg(){var s=$.Bj
return s==null?$.Bj=new A.i8(this):s},
gcn(){return this},
fV(a){var s,r,q
try{if(B.i===$.B){a.$0()
return}A.Cs(null,null,this,a)}catch(q){s=A.C(q)
r=A.af(q)
A.kZ(s,r)}},
fW(a,b){var s,r,q
try{if(B.i===$.B){a.$1(b)
return}A.Ct(null,null,this,a,b)}catch(q){s=A.C(q)
r=A.af(q)
A.kZ(s,r)}},
nN(a,b,c){var s,r,q
try{if(B.i===$.B){a.$2(b,c)
return}A.EE(null,null,this,a,b,c)}catch(q){s=A.C(q)
r=A.af(q)
A.kZ(s,r)}},
kh(a,b){return new A.Bl(this,a,b)},
fi(a){return new A.Bk(this,a)},
i0(a,b){return new A.Bm(this,a,b)},
h(a,b){return null},
fA(a,b){A.kZ(a,b)},
ng(a,b){return A.Hu(null,null,this,a,b)},
b1(a){if($.B===B.i)return a.$0()
return A.Cs(null,null,this,a)},
eM(a,b){if($.B===B.i)return a.$1(b)
return A.Ct(null,null,this,a,b)},
kW(a,b,c){if($.B===B.i)return a.$2(b,c)
return A.EE(null,null,this,a,b,c)},
c8(a){return a},
dH(a){return a},
fP(a){return a},
nd(a,b){return null},
da(a){A.Cu(null,null,this,a)},
kn(a,b){return A.E8(a,b)},
km(a,b){return A.Ga(a,b)}}
A.Bl.prototype={
$0(){return this.a.b1(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Bk.prototype={
$0(){return this.a.fV(this.b)},
$S:0}
A.Bm.prototype={
$1(a){return this.a.fW(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.i8.prototype={$iaw:1}
A.Cr.prototype={
$0(){A.Ft(this.a,this.b)},
$S:0}
A.k8.prototype={}
A.dx.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.fc(this,A.n(this).i("fc<1>"))},
gaX(){var s=A.n(this)
return A.dX(new A.fc(this,s.i("fc<1>")),new A.AS(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lG(a)},
lG(a){var s=this.d
if(s==null)return!1
return this.ci(this.lC(s,a),a)>=0},
D(a,b){b.a5(0,new A.AR(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.GC(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.GC(q,b)
return r}else return this.m_(b)},
m_(a){var s,r,q=this.d
if(q==null)return null
s=this.lC(q,a)
r=this.ci(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.ls(s==null?q.b=A.Ei():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.ls(r==null?q.c=A.Ei():r,b,c)}else q.mA(b,c)},
mA(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.Ei()
s=p.cG(a)
r=o[s]
if(r==null){A.Ej(o,s,[a,b]);++p.a
p.e=null}else{q=p.ci(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a5(a,b){var s,r,q,p,o,n=this,m=n.lB()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.az(n))}},
lB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
ls(a,b,c){if(a[b]==null){++this.a
this.e=null}A.Ej(a,b,c)},
cG(a){return J.ab(a)&1073741823},
lC(a,b){return a[this.cG(b)]},
ci(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.AS.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.AR.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.eh.prototype={
cG(a){return A.l5(a)&1073741823},
ci(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.kh.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.pj(b)},
j(a,b,c){this.pk(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.pi(a)},
cG(a){return this.r.$1(a)&1073741823},
ci(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.An.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.fc.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gS(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.p6(s,s.lB(),this.$ti.i("p6<1>"))},
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
return this.pc(b)},
j(a,b,c){this.pe(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.pb(a)},
G(a,b){if(!this.y.$1(b))return null
return this.pd(b)},
ey(a){return this.x.$1(a)&1073741823},
dD(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.Ba.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.cI.prototype={
mc(){return new A.cI(A.n(this).i("cI<1>"))},
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
return r[b]!=null}else return this.qf(b)},
qf(a){var s=this.d
if(s==null)return!1
return this.ci(s[this.cG(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.A("No elements"))
return s.a},
ga_(a){var s=this.f
if(s==null)throw A.b(A.A("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.lr(s==null?q.b=A.Ek():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.lr(r==null?q.c=A.Ek():r,b)}else return q.pD(b)},
pD(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.Ek()
s=q.cG(a)
r=p[s]
if(r==null)p[s]=[q.jP(a)]
else{if(q.ci(r,a)>=0)return!1
r.push(q.jP(a))}return!0},
G(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lD(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lD(s.c,b)
else return s.jX(b)},
jX(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cG(a)
r=n[s]
q=o.ci(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lE(p)
return!0},
lr(a,b){if(a[b]!=null)return!1
a[b]=this.jP(b)
return!0},
lD(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lE(s)
delete a[b]
return!0},
jN(){this.r=this.r+1&1073741823},
jP(a){var s,r=this,q=new A.Bb(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jN()
return q},
lE(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jN()},
cG(a){return J.ab(a)&1073741823},
ci(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.Bb.prototype={}
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
A.eO.prototype={
E(a,b){return b instanceof A.bc&&this===b.a},
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
hv(a,b,c){var s,r,q=this
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
k8(a){var s,r,q=this;++q.a
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
A.bc.prototype={
gfL(){var s=this.a
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
co(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.az(a))}return!0},
cp(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.az(a))}q=c.$0()
return q},
C(a,b){var s
if(this.gm(a)===0)return""
s=A.yf("",a,b)
return s.charCodeAt(0)==0?s:s},
dM(a,b){return new A.aq(a,b,A.bo(a).i("aq<M.E>"))},
cu(a,b,c){return new A.Y(a,b,A.bo(a).i("@<M.E>").Z(c).i("Y<1,2>"))},
b6(a,b){return A.cE(a,b,null,A.bo(a).i("M.E"))},
c9(a,b){return A.cE(a,0,A.cJ(b,"count",t.S),A.bo(a).i("M.E"))},
ba(a,b){var s,r,q,p,o=this
if(o.gF(a)){s=A.bo(a).i("M.E")
return b?J.ug(0,s):J.mJ(0,s)}r=o.h(a,0)
q=A.a9(o.gm(a),r,b,A.bo(a).i("M.E"))
for(p=1;p<o.gm(a);++p)q[p]=o.h(a,p)
return q},
bP(a){return this.ba(a,!0)},
cz(a){var s,r=A.vn(A.bo(a).i("M.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
fj(a,b){return new A.bW(a,A.bo(a).i("@<M.E>").Z(b).i("bW<1,2>"))},
cB(a,b){var s=b==null?A.O6():b
A.nJ(a,0,this.gm(a)-1,s)},
U(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bk(b,c,r)
s=A.O(this.h4(a,b,c),A.bo(a).i("M.E"))
return s},
bd(a,b){return this.U(a,b,null)},
h4(a,b,c){A.bk(b,c,this.gm(a))
return A.cE(a,b,c,A.bo(a).i("M.E"))},
kx(a,b,c,d){var s
A.bk(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.bk(b,c,this.gm(a))
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{p=J.fw(d,e)
q=p.ba(p,!1)
r=0}p=J.J(q)
if(r+s>p.gm(q))throw A.b(A.FE())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
dc(a,b,c){var s,r
if(t.j.b(c))this.aA(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.uf(a,"[","]")},
$iL:1,
$io:1,
$iq:1}
A.X.prototype={
cm(a,b,c){var s=A.n(this)
return A.FM(this,s.i("X.K"),s.i("X.V"),b,c)},
a5(a,b){var s,r,q,p
for(s=J.E(this.gJ()),r=A.n(this).i("X.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga0(){return J.bI(this.gJ(),new A.vG(this),A.n(this).i("V<X.K,X.V>"))},
aU(a,b,c,d){var s,r,q,p,o,n=A.t(c,d)
for(s=J.E(this.gJ()),r=A.n(this).i("X.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.Dr(this.gJ(),a)},
gm(a){return J.an(this.gJ())},
gF(a){return J.bz(this.gJ())},
gS(a){return J.d8(this.gJ())},
gaX(){return new A.kt(this,A.n(this).i("kt<X.K,X.V>"))},
l(a){return A.vH(this)},
$iF:1}
A.vG.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("X.V").a(r)
return new A.V(a,r,A.n(s).i("V<X.K,X.V>"))},
$S(){return A.n(this.a).i("V<X.K,X.V>(X.K)")}}
A.vI.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:34}
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
cm(a,b,c){return this.a.cm(0,b,c)},
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
gaX(){return this.a.gaX()},
ga0(){return this.a.ga0()},
aU(a,b,c,d){return this.a.aU(0,b,c,d)},
$iF:1}
A.d_.prototype={
cm(a,b,c){return new A.d_(this.a.cm(0,b,c),b.i("@<0>").Z(c).i("d_<1,2>"))}}
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
A.FD(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
ba(a,b){var s,r,q,p,o,n,m=this,l=m.a.length-1,k=(m.c-m.b&l)>>>0
if(k===0){s=J.mJ(0,m.$ti.c)
return s}s=m.$ti.c
r=A.a9(k,m.gH(0),!1,s)
for(q=m.a,p=m.b,o=0;o<k;++o){n=q[(p+o&l)>>>0]
r[o]=n==null?s.a(n):n}return r},
G(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.jX(s);++r.d
return!0}return!1},
l(a){return A.uf(this,"{","}")},
jX(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
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
A.cA.prototype={
gF(a){return this.gm(this)===0},
gS(a){return this.gm(this)!==0},
D(a,b){var s
for(s=J.E(b);s.k();)this.u(0,s.gn())},
nR(a){var s=this.cz(0)
s.D(0,a)
return s},
cu(a,b,c){return new A.eH(this,b,A.n(this).i("@<1>").Z(c).i("eH<1,2>"))},
gao(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.j2())
s=r.gt(r)
if(!s.k())throw A.b(A.av())
return s.gn()},
l(a){return A.uf(this,"{","}")},
dM(a,b){return new A.aq(this,b,A.n(this).i("aq<1>"))},
co(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
c9(a,b){return A.G9(this,b,A.n(this).c)},
b6(a,b){return A.G7(this,b,A.n(this).c)},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.av())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.av())
do s=r.gn()
while(r.k())
return s},
a4(a,b){var s,r
A.aW(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mE(b,b-r,this,null,"index"))},
$iL:1,
$io:1,
$if_:1}
A.kB.prototype={
fn(a){var s,r,q,p=this,o=p.mc()
for(s=A.dz(p,p.r,A.n(p).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!a.E(0,q))o.u(0,q)}return o},
cz(a){var s=this.mc()
s.D(0,this)
return s}}
A.kM.prototype={}
A.pa.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rZ(b):s}},
gm(a){return this.b==null?this.c.a:this.dY().length},
gF(a){return this.gm(0)===0},
gS(a){return this.gm(0)>0},
gJ(){if(this.b==null){var s=this.c
return new A.S(s,A.n(s).i("S<1>"))}return new A.pb(this)},
gaX(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.n(s).i("ao<2>"))}return A.dX(r.dY(),new A.B5(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.u1().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a5(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a5(0,b)
s=o.dY()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.Cb(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.az(o))}},
dY(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
u1(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.t(t.N,t.z)
r=n.dY()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.aq(r)
n.a=n.b=null
return n.c=s},
rZ(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.Cb(this.a[a])
return this.b[a]=s}}
A.B5.prototype={
$1(a){return this.a.h(0,a)},
$S:72}
A.pb.prototype={
gm(a){return this.a.gm(0)},
a4(a,b){var s=this.a
return s.b==null?s.gJ().a4(0,b):s.dY()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gJ()
s=s.gt(s)}else{s=s.dY()
s=new J.fA(s,s.length,A.a1(s).i("fA<1>"))}return s},
E(a,b){return this.a.I(b)}}
A.B3.prototype={
q(){var s,r,q=this
q.pl()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aD(A.Hm(r.charCodeAt(0)==0?r:r,q.b))
s.aY()}}
A.BP.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:69}
A.BO.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:69}
A.ln.prototype={
gaV(){return"us-ascii"},
ku(a){return B.bD.v(a)}}
A.pE.prototype={
v(a){var s,r,q,p=A.bk(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aD(a,"string","Contains invalid characters."))
o[r]=q}return o},
cc(a){return new A.BG(new A.hL(a),this.a)}}
A.lo.prototype={}
A.BG.prototype={
q(){this.a.a.q()},
c1(a,b,c,d){var s,r,q,p
A.bk(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.U("Source contains invalid character with code point: "+q+".",null))}s=new A.ct(a)
p=this.a.a
p.u(0,s.U(s,b,c))
if(d)p.q()}}
A.lu.prototype={
geq(){return this.a},
wX(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bk(a1,a2,a0.length)
s=$.F3()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.CZ(a0.charCodeAt(l))
h=A.CZ(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a6("")
e=p}else e=p
e.a+=B.a.B(a0,q,r)
d=A.bD(k)
e.a+=d
q=l
continue}}throw A.b(A.ac("Invalid base64 data",a0,r))}if(p!=null){e=B.a.B(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.Fd(a0,n,a2,o,m,d)
else{c=B.c.an(d-1,4)+1
if(c===1)throw A.b(A.ac(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dI(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.Fd(a0,n,a2,o,m,b)
else{c=B.c.an(b,4)
if(c===1)throw A.b(A.ac(a,a0,a2))
if(c>1)a0=B.a.dI(a0,a2,a2,c===2?"==":"=")}return a0}}
A.iw.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.oM(this.a?u.G:u.U).nc(a,0,s,!0)
s.toString
return A.e8(s,0,null)},
cc(a){return new A.zz(a,new A.zQ(this.a?u.G:u.U))}}
A.oM.prototype={
n3(a){return new Uint8Array(a)},
nc(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.n3(o)
r.a=A.Lv(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.zQ.prototype={
n3(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bV(B.f.gac(s),s.byteOffset,a)}}
A.zM.prototype={
u(a,b){this.lH(b,0,J.an(b),!1)},
q(){this.lH(B.cZ,0,0,!0)}}
A.zz.prototype={
lH(a,b,c,d){var s=this.b.nc(a,b,c,d)
if(s!=null)this.a.a.aD(A.e8(s,0,null))
if(d)this.a.a.aY()}}
A.lv.prototype={
v(a){var s,r,q=A.bk(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.oL()
r=s.ko(a,0,q)
r.toString
s.kj(a,q)
return r},
cc(a){return new A.zL(a,new A.oL())}}
A.oL.prototype={
ko(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Go(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Ls(a,b,c,q)
r.a=A.Lu(a,b,c,s,0,r.a)
return s},
kj(a,b){var s=this.a
if(s<-1)throw A.b(A.ac("Missing padding character",a,b))
if(s>0)throw A.b(A.ac("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.zL.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.ko(b,0,r)
if(s!=null)this.a.a.aD(s)},
q(){this.b.kj(null,null)
this.a.a.aY()},
c1(a,b,c,d){var s,r
A.bk(b,c,a.length)
if(b===c)return
s=this.b
r=s.ko(a,b,c)
if(r!=null)this.a.a.aD(r)
if(d){s.kj(a,c)
this.a.a.aY()}}}
A.qs.prototype={}
A.hL.prototype={
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
A.f9.prototype={
u(a,b){this.b.u(0,b)},
bk(a,b){A.cJ(a,"error",t.K)
this.a.bk(a,b)},
q(){this.b.q()},
$ibL:1}
A.lI.prototype={}
A.aH.prototype={
cc(a){throw A.b(A.a2("This converter does not support chunked conversions: "+this.l(0)))},
uD(a){return new A.ke(new A.rm(this),a,t.fM.Z(A.n(this).i("aH.T")).i("ke<1,2>"))}}
A.rm.prototype={
$1(a){return new A.f9(a,this.a.cc(a),t.oW)},
$S:101}
A.eJ.prototype={}
A.j8.prototype={
l(a){var s=A.iN(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.mN.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.uj.prototype={
aI(a,b){var s=A.Hm(a,this.gv_().a)
return s},
a9(a,b){var s=A.LP(a,this.geq().b,null)
return s},
geq(){return B.cB},
gv_(){return B.cA}}
A.mP.prototype={
cc(a){return new A.B4(null,this.b,new A.px(a))}}
A.B4.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.A("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a6("")
q=new A.BC(r,s)
A.GE(b,q,p.b,p.a)
if(r.a.length!==0)q.jy()
s.q()},
q(){}}
A.mO.prototype={
cc(a){return new A.B3(this.a,a,new A.a6(""))}}
A.B7.prototype={
nX(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.j_(a,s,r)
s=r+1
n.ar(92)
n.ar(117)
n.ar(100)
p=q>>>8&15
n.ar(p<10?48+p:87+p)
p=q>>>4&15
n.ar(p<10?48+p:87+p)
p=q&15
n.ar(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.j_(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.j_(a,s,r)
s=r+1
n.ar(92)
n.ar(q)}}if(s===0)n.bb(a)
else if(s<m)n.j_(a,s,m)},
ji(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.mN(a,null))}s.push(a)},
iZ(a){var s,r,q,p,o=this
if(o.nW(a))return
o.ji(a)
try{s=o.b.$1(a)
if(!o.nW(s)){q=A.FJ(a,null,o.gmg())
throw A.b(q)}o.a.pop()}catch(p){r=A.C(p)
q=A.FJ(a,r,o.gmg())
throw A.b(q)}},
nW(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.ys(a)
return!0}else if(a===!0){r.bb("true")
return!0}else if(a===!1){r.bb("false")
return!0}else if(a==null){r.bb("null")
return!0}else if(typeof a=="string"){r.bb('"')
r.nX(a)
r.bb('"')
return!0}else if(t.j.b(a)){r.ji(a)
r.yq(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.ji(a)
s=r.yr(a)
r.a.pop()
return s}else return!1},
yq(a){var s,r,q=this
q.bb("[")
s=J.J(a)
if(s.gS(a)){q.iZ(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.bb(",")
q.iZ(s.h(a,r))}}q.bb("]")},
yr(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.bb("{}")
return!0}s=a.gm(a)*2
r=A.a9(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a5(0,new A.B8(n,r))
if(!n.b)return!1
o.bb("{")
for(p='"';q<s;q+=2,p=',"'){o.bb(p)
o.nX(A.G(r[q]))
o.bb('":')
o.iZ(r[q+1])}o.bb("}")
return!0}}
A.B8.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:34}
A.B6.prototype={
gmg(){var s=this.c
return s instanceof A.a6?s.l(0):null},
ys(a){this.c.iY(B.w.l(a))},
bb(a){this.c.iY(a)},
j_(a,b,c){this.c.iY(B.a.B(a,b,c))},
ar(a){this.c.ar(a)}}
A.mS.prototype={
gaV(){return"iso-8859-1"},
ku(a){return B.cI.v(a)}}
A.mT.prototype={}
A.nV.prototype={
u(a,b){this.c1(b,0,b.length,!1)}}
A.BC.prototype={
ar(a){var s=this.a,r=A.bD(a)
if((s.a+=r).length>16)this.jy()},
iY(a){if(this.a.a.length!==0)this.jy()
this.b.u(0,a)},
jy(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.kF.prototype={
q(){},
c1(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bD(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
u(a,b){this.a.a+=b}}
A.px.prototype={
u(a,b){this.a.a.aD(b)},
c1(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aD(a)
else r.aD(B.a.B(a,b,c))
if(d)r.aY()},
q(){this.a.a.aY()}}
A.BN.prototype={
q(){var s,r,q,p=this.c
this.a.w1(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.c1(q,0,q.length,!0)}else r.q()},
u(a,b){this.c1(b,0,J.an(b),!1)},
c1(a,b,c,d){var s,r=this.c,q=this.a.dh(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.c1(s,0,s.length,!1)
r.a=""
return}}}
A.or.prototype={
gaV(){return"utf-8"},
uW(a,b){return new A.dB((b===!0?B.ek:B.aR).a).dh(a,0,null,!0)},
fl(a){return this.uW(a,null)},
ku(a){return B.e.v(a)}}
A.os.prototype={
v(a){var s,r,q=A.bk(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.pJ(s)
if(r.lY(a,0,q)!==q)r.hS()
return B.f.U(s,0,r.b)},
cc(a){return new A.BQ(new A.hL(a),new Uint8Array(1024))}}
A.pJ.prototype={
hS(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.K(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mR(a,b){var s,r,q,p,o=this
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
return!0}else{o.hS()
return!1}},
lY(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.K(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mR(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hS()}else if(o<=2047){n=k.b
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
A.BQ.prototype={
q(){if(this.a!==0){this.c1("",0,0,!0)
return}this.d.a.q()},
c1(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mR(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lY(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hS()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.U(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.k3.prototype={
cc(a){return new A.BN(new A.dB(this.a),new A.px(a),new A.a6(""))}}
A.dB.prototype={
dh(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bk(b,c,J.an(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Mk(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Mj(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.jp(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.H0(p)
m.b=0
throw A.b(A.ac(n,a,q+m.c))}return o},
jp(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.jp(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.jp(a,s,c,d)}return q.uZ(a,b,c,d)},
w1(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bD(65533)
a.a+=s}else throw A.b(A.ac(A.H0(77),null,null))},
uZ(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a6(""),g=b+1,f=a[b]
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
bS(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bR(p,r)
return new A.aQ(p===0?!1:s,r,p)},
qt(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cq()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bR(s,q)
return new A.aQ(n===0?!1:o,q,n)},
qx(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cq()
s=k-a
if(s<=0)return l.a?$.F5():$.cq()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bR(s,q)
m=new A.aQ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.ha(0,$.fu())
return m},
bT(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.U("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.an(b,16)===0)return n.qt(r)
q=s+r+1
p=new Uint16Array(q)
A.Gw(n.b,s,b,p)
s=n.a
o=A.bR(q,p)
return new A.aQ(o===0?!1:s,p,o)},
dR(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.U("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.an(b,16)
if(q===0)return j.qx(r)
p=s-r
if(p<=0)return j.a?$.F5():$.cq()
o=j.b
n=new Uint16Array(p)
A.LB(o,s,b,n)
s=j.a
m=A.bR(p,n)
l=new A.aQ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bT(1,q)-1)>>>0!==0)return l.ha(0,$.fu())
for(k=0;k<r;++k)if(o[k]!==0)return l.ha(0,$.fu())}return l},
a3(a,b){var s,r=this.a
if(r===b.a){s=A.zN(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
jd(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.jd(p,b)
if(o===0)return $.cq()
if(n===0)return p.a===b?p:p.bS(0)
s=o+1
r=new Uint16Array(s)
A.Lx(p.b,o,a.b,n,r)
q=A.bR(s,r)
return new A.aQ(q===0?!1:b,r,q)},
hb(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cq()
s=a.c
if(s===0)return p.a===b?p:p.bS(0)
r=new Uint16Array(o)
A.oN(p.b,o,a.b,s,r)
q=A.bR(o,r)
return new A.aQ(q===0?!1:b,r,q)},
nZ(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.jd(b,r)
if(A.zN(q.b,p,b.b,s)>=0)return q.hb(b,r)
return b.hb(q,!r)},
ha(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bS(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.jd(b,r)
if(A.zN(q.b,p,b.b,s)>=0)return q.hb(b,r)
return b.hb(q,!r)},
bp(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cq()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.Gx(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bR(s,p)
return new A.aQ(m===0?!1:n,p,m)},
qs(a){var s,r,q,p
if(this.c<a.c)return $.cq()
this.lR(a)
s=$.Ee.bE()-$.kd.bE()
r=A.Eg($.Ed.bE(),$.kd.bE(),$.Ee.bE(),s)
q=A.bR(s,r)
p=new A.aQ(!1,r,q)
return this.a!==a.a&&q>0?p.bS(0):p},
tl(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lR(a)
s=A.Eg($.Ed.bE(),0,$.kd.bE(),$.kd.bE())
r=A.bR($.kd.bE(),s)
q=new A.aQ(!1,s,r)
if($.Ef.bE()>0)q=q.dR(0,$.Ef.bE())
return p.a&&q.c>0?q.bS(0):q},
lR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Gt&&a.c===$.Gv&&c.b===$.Gs&&a.b===$.Gu)return
s=a.b
r=a.c
q=16-B.c.gn_(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.Gr(s,r,q,p)
n=new Uint16Array(b+5)
m=A.Gr(c.b,b,q,n)}else{n=A.Eg(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.Eh(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.zN(n,m,j,i)>=0){g&2&&A.K(n)
n[m]=1
A.oN(n,h,j,i,n)}else{g&2&&A.K(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.oN(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Ly(l,n,e);--k
A.Gx(d,f,0,n,k,o)
if(n[e]<d){i=A.Eh(f,o,k,j)
A.oN(n,h,j,i,n)
while(--d,n[e]<d)A.oN(n,h,j,i,n)}--e}$.Gs=c.b
$.Gt=b
$.Gu=s
$.Gv=r
$.Ed.b=n
$.Ee.b=h
$.kd.b=o
$.Ef.b=q},
gK(a){var s,r,q,p=new A.zO(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.zP().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aQ&&this.a3(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bS(0):n
while(r.c>1){q=$.F4()
if(q.c===0)A.u(B.bR)
p=r.tl(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.qs(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bE(s,t.hF).ez(0)},
$iay:1}
A.zO.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:105}
A.zP.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:106}
A.p4.prototype={
mY(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
n9(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.BM.prototype={
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
jf(a){var s=1000,r=B.c.an(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.an(p,s),n=this.c
return new A.aI(A.m3(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aI&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gK(a){return A.cg(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kI(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a3(a,b){var s=B.c.a3(this.a,b.a)
if(s!==0)return s
return B.c.a3(this.b,b.b)},
xV(){var s=this
if(s.c)return s
return new A.aI(s.a,s.b,!0)},
l(a){var s=this,r=A.JJ(A.DX(s)),q=A.m2(A.DV(s)),p=A.m2(A.x_(s)),o=A.m2(A.DT(s)),n=A.m2(A.DU(s)),m=A.m2(A.DW(s)),l=A.Fr(A.FY(s)),k=s.b,j=k===0?"":A.Fr(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iay:1}
A.aF.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aF&&this.a===b.a},
gK(a){return B.c.gK(this.a)},
a3(a,b){return B.c.a3(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.M(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.M(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.M(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.iG(B.c.l(n%1e6),6,"0")},
$iay:1}
A.Au.prototype={
l(a){return this.a7()}}
A.ag.prototype={
gcC(){return A.KE(this)}}
A.lp.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iN(s)
return"Assertion failed"}}
A.dt.prototype={}
A.bJ.prototype={
gjs(){return"Invalid argument"+(!this.a?"(s)":"")},
gjr(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gjs()+q+o
if(!s.a)return n
return n+s.gjr()+": "+A.iN(s.gkH())},
gkH(){return this.b}}
A.dj.prototype={
gkH(){return this.b},
gjs(){return"RangeError"},
gjr(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.j_.prototype={
gkH(){return this.b},
gjs(){return"RangeError"},
gjr(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$idj:1,
gm(a){return this.f}}
A.d0.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.ok.prototype={
l(a){return"UnimplementedError: "+this.a},
$id0:1}
A.bt.prototype={
l(a){return"Bad state: "+this.a}}
A.lL.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iN(s)+"."}}
A.nd.prototype={
l(a){return"Out of Memory"},
gcC(){return null},
$iag:1}
A.jW.prototype={
l(a){return"Stack Overflow"},
gcC(){return null},
$iag:1}
A.p3.prototype={
l(a){return"Exception: "+this.a},
$iH:1}
A.br.prototype={
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
k=""}return g+l+B.a.B(e,i,j)+k+"\n"+B.a.bp(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iH:1,
giA(){return this.a},
gh8(){return this.b},
gav(){return this.c}}
A.mG.prototype={
gcC(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iag:1,
$id0:1,
$iH:1}
A.o.prototype={
fj(a,b){return A.fC(this,A.n(this).i("o.E"),b)},
cu(a,b,c){return A.dX(this,b,A.n(this).i("o.E"),c)},
dM(a,b){return new A.aq(this,b,A.n(this).i("aq<o.E>"))},
E(a,b){var s
for(s=this.gt(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
w3(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
w4(a,b,c){return this.w3(0,b,c,t.z)},
co(a,b){var s
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
bl(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
ba(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
bP(a){return this.ba(0,!0)},
cz(a){return A.c0(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gt(this).k()},
gS(a){return!this.gF(this)},
c9(a,b){return A.G9(this,b,A.n(this).i("o.E"))},
b6(a,b){return A.G7(this,b,A.n(this).i("o.E"))},
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
cp(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a4(a,b){var s,r
A.aW(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mE(b,b-r,this,null,"index"))},
l(a){return A.K7(this,"(",")")}}
A.V.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gK(a){return A.k.prototype.gK.call(this,0)},
l(a){return"null"}}
A.k.prototype={$ik:1,
P(a,b){return this===b},
gK(a){return A.eW(this)},
l(a){return"Instance of '"+A.nj(this)+"'"},
gam(a){return A.d7(this)},
toString(){return this.l(this)}}
A.pz.prototype={
l(a){return""},
$iaL:1}
A.jY.prototype={
gvH(){var s=this.gnb()
if($.la()===1e6)return s
return s*1000},
gna(){var s=this.gnb()
if($.la()===1000)return s
return B.c.M(s,1000)},
aC(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.nk.$0()-r)
s.b=null}},
gnb(){var s=this.b
if(s==null)s=$.nk.$0()
return s-this.a}}
A.jO.prototype={
gt(a){return new A.nA(this.a)},
ga_(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.A("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.H7(r,s)}return s}}
A.nA.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.H7(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a6.prototype={
gm(a){return this.a.length},
iY(a){var s=A.r(a)
this.a+=s},
ar(a){var s=A.bD(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.yQ.prototype={
$2(a,b){throw A.b(A.ac("Illegal IPv6 address, "+a,this.a,b))},
$S:151}
A.kN.prototype={
gmF(){var s,r,q,p,o=this,n=o.w
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
gxf(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ab(s,1)
r=s.length===0?B.u:A.fX(new A.Y(A.l(s.split("/"),t.s),A.Oh(),t.iZ),t.N)
q.x!==$&&A.Dl()
p=q.x=r}return p},
gK(a){var s,r=this,q=r.y
if(q===$){s=B.a.gK(r.gmF())
r.y!==$&&A.Dl()
r.y=s
q=s}return q},
gl_(){return this.b},
gdC(){var s=this.c
if(s==null)return""
if(B.a.T(s,"[")&&!B.a.af(s,"v",1))return B.a.B(s,1,s.length-1)
return s},
gfJ(){var s=this.d
return s==null?A.GQ(this.a):s},
gfO(){var s=this.f
return s==null?"":s},
gig(){var s=this.r
return s==null?"":s},
wB(a){var s=this.a
if(a.length!==s.length)return!1
return A.My(a,s,0)>=0},
fS(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.Eo(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.BI(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.T(n,"/"))n="/"+n
l=n
if(a!=null)k=A.BJ(null,0,0,a)
else k=j.f
return A.kO(b,q,o,p,l,k,j.r)},
nL(a){return this.fS(null,a)},
kU(a){return this.fS(a,null)},
ma(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.af(b,"../",r);){r+=3;++s}q=B.a.d0(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.iv(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dI(a,q+1,null,B.a.ab(b,r-3*s))},
al(a){return this.fU(A.oq(a))},
fU(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb5().length!==0)return a
else{s=h.a
if(a.gkC()){r=a.nL(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gnh())m=a.gir()?a.gfO():h.f
else{l=A.Mi(h,n)
if(l>0){k=B.a.B(n,0,l)
n=a.gkB()?k+A.fi(a.gbA()):k+A.fi(h.ma(B.a.ab(n,k.length),a.gbA()))}else if(a.gkB())n=A.fi(a.gbA())
else if(n.length===0)if(p==null)n=s.length===0?a.gbA():A.fi(a.gbA())
else n=A.fi("/"+a.gbA())
else{j=h.ma(n,a.gbA())
r=s.length===0
if(!r||p!=null||B.a.T(n,"/"))n=A.fi(j)
else n=A.Eq(j,!r||p!=null)}m=a.gir()?a.gfO():null}}}i=a.gkD()?a.gig():null
return A.kO(s,q,p,o,n,m,i)},
gkC(){return this.c!=null},
gir(){return this.f!=null},
gkD(){return this.r!=null},
gnh(){return this.e.length===0},
gkB(){return B.a.T(this.e,"/")},
kX(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.a2("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.a2(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.a2(u.A))
if(r.c!=null&&r.gdC()!=="")A.u(A.a2(u.Q))
s=r.gxf()
A.Mb(s,!1)
q=A.yf(B.a.T(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmF()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb5())if(p.c!=null===b.gkC())if(p.b===b.gl_())if(p.gdC()===b.gdC())if(p.gfJ()===b.gfJ())if(p.e===b.gbA()){r=p.f
q=r==null
if(!q===b.gir()){if(q)r=""
if(r===b.gfO()){r=p.r
q=r==null
if(!q===b.gkD()){s=q?"":r
s=s===b.gig()}}}}return s},
$ioo:1,
gb5(){return this.a},
gbA(){return this.e}}
A.BL.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.pI(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.pI(1,b,B.o,!0)
s.a+=r}},
$S:160}
A.BK.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:67}
A.yP.prototype={
gnU(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cq(m,"?",s)
q=m.length
if(r>=0){p=A.kP(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.oZ("data","",n,n,A.kP(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cm.prototype={
gkC(){return this.c>0},
gkE(){return this.c>0&&this.d+1<this.e},
gir(){return this.f<this.r},
gkD(){return this.r<this.a.length},
gkB(){return B.a.af(this.a,"/",this.e)},
gnh(){return this.e===this.f},
gb5(){var s=this.w
return s==null?this.w=this.qd():s},
qd(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.T(r.a,"http"))return"http"
if(q===5&&B.a.T(r.a,"https"))return"https"
if(s&&B.a.T(r.a,"file"))return"file"
if(q===7&&B.a.T(r.a,"package"))return"package"
return B.a.B(r.a,0,q)},
gl_(){var s=this.c,r=this.b+3
return s>r?B.a.B(this.a,r,s-1):""},
gdC(){var s=this.c
return s>0?B.a.B(this.a,s,this.d):""},
gfJ(){var s,r=this
if(r.gkE())return A.aM(B.a.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.T(r.a,"http"))return 80
if(s===5&&B.a.T(r.a,"https"))return 443
return 0},
gbA(){return B.a.B(this.a,this.e,this.f)},
gfO(){var s=this.f,r=this.r
return s<r?B.a.B(this.a,s+1,r):""},
gig(){var s=this.r,r=this.a
return s<r.length?B.a.ab(r,s+1):""},
m4(a){var s=this.d+1
return s+a.length===this.e&&B.a.af(this.a,a,s)},
xK(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cm(B.a.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.Eo(b,0,b.length)
s=!(h.b===b.length&&B.a.T(h.a,b))}else{b=h.gb5()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.B(h.a,h.b+3,q):""
o=h.gkE()?h.gfJ():g
if(s)o=A.BI(o,b)
q=h.c
if(q>0)n=B.a.B(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.B(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.T(l,"/"))l="/"+l
if(a!=null)j=A.BJ(g,0,0,a)
else{k=h.r
j=m<k?B.a.B(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ab(q,m+1):g
return A.kO(b,p,n,o,l,j,i)},
nL(a){return this.fS(null,a)},
kU(a){return this.fS(a,null)},
al(a){return this.fU(A.oq(a))},
fU(a){if(a instanceof A.cm)return this.tM(this,a)
return this.mH().fU(a)},
tM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.T(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.T(a.a,"http"))p=!b.m4("80")
else p=!(r===5&&B.a.T(a.a,"https"))||!b.m4("443")
if(p){o=r+1
return new A.cm(B.a.B(a.a,0,o)+B.a.ab(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mH().fU(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cm(B.a.B(a.a,0,r)+B.a.ab(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cm(B.a.B(a.a,0,r)+B.a.ab(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.xK()}s=b.a
if(B.a.af(s,"/",n)){m=a.e
l=A.GI(this)
k=l>0?l:m
o=k-n
return new A.cm(B.a.B(a.a,0,k)+B.a.ab(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.af(s,"../",n))n+=3
o=j-n+1
return new A.cm(B.a.B(a.a,0,j)+"/"+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.GI(this)
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
return new A.cm(B.a.B(h,0,i)+d+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kX(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.T(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.a2("Cannot extract a file path from a "+r.gb5()+" URI"))
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
mH(){var s=this,r=null,q=s.gb5(),p=s.gl_(),o=s.c>0?s.gdC():r,n=s.gkE()?s.gfJ():r,m=s.a,l=s.f,k=B.a.B(m,s.e,l),j=s.r
l=l<j?s.gfO():r
return A.kO(q,p,o,n,k,l,j<m.length?s.gig():r)},
l(a){return this.a},
$ioo:1}
A.oZ.prototype={}
A.mc.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.n9.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iH:1}
A.tF.prototype={
$2(a,b){this.a.b2(new A.tD(a),new A.tE(b),t.X)},
$S:186}
A.tD.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:191}
A.tE.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.O3(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.u("Attempting to box non-Dart object.")
s={}
s[$.IU()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:6}
A.D3.prototype={
$1(a){var s,r,q,p
if(A.Hk(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gJ());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.D(p,J.bI(a,this,t.z))
return p}else return a},
$S:42}
A.D9.prototype={
$1(a){return this.a.aB(a)},
$S:29}
A.Da.prototype={
$1(a){if(a==null)return this.a.aT(new A.n9(a===undefined))
return this.a.aT(a)},
$S:29}
A.CI.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Hj(a))return a
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
$S:42}
A.B0.prototype={
d3(a){if(a<=0||a>4294967296)throw A.b(A.b7(u.E+a))
return Math.random()*a>>>0},
nx(){return Math.random()}}
A.B1.prototype={
py(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.a2("No source of cryptographically secure random numbers available."))},
d3(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b7(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.K(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.aj(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bV(B.aE.gac(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.m9.prototype={}
A.a7.prototype={
h(a,b){var s,r=this
if(!r.jJ(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a7.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jJ(b))return
s.c.j(0,s.a.$1(b),new A.V(b,c,s.$ti.i("V<a7.K,a7.V>")))},
D(a,b){b.a5(0,new A.qu(this))},
cm(a,b,c){return this.c.cm(0,b,c)},
I(a){var s=this
if(!s.jJ(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a7.K").a(a)))},
ga0(){var s=this.c,r=A.n(s).i("aK<1,2>")
return A.dX(new A.aK(s,r),new A.qv(this),r.i("o.E"),this.$ti.i("V<a7.K,a7.V>"))},
a5(a,b){this.c.a5(0,new A.qw(this,b))},
gF(a){return this.c.a===0},
gS(a){return this.c.a!==0},
gJ(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dX(new A.ao(s,r),new A.qx(this),r.i("o.E"),this.$ti.i("a7.K"))},
gm(a){return this.c.a},
aU(a,b,c,d){return this.c.aU(0,new A.qy(this,b,c,d),c,d)},
gaX(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dX(new A.ao(s,r),new A.qz(this),r.i("o.E"),this.$ti.i("a7.V"))},
l(a){return A.vH(this)},
jJ(a){return this.$ti.i("a7.K").b(a)},
$iF:1}
A.qu.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a7.K,a7.V)")}}
A.qv.prototype={
$1(a){var s=a.b
return new A.V(s.a,s.b,this.a.$ti.i("V<a7.K,a7.V>"))},
$S(){return this.a.$ti.i("V<a7.K,a7.V>(V<a7.C,V<a7.K,a7.V>>)")}}
A.qw.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a7.C,V<a7.K,a7.V>)")}}
A.qx.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a7.K(V<a7.K,a7.V>)")}}
A.qy.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.Z(this.c).Z(this.d).i("V<1,2>(a7.C,V<a7.K,a7.V>)")}}
A.qz.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a7.V(V<a7.K,a7.V>)")}}
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
A.eP.prototype={
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
A.i5.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.DF(s.gvN(),s.gwv(),s.gwC(),A.n(this).i("i5.E"),t.S)
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
A.hn.prototype={}
A.hW.prototype={
gK(a){var s=this.a
return 3*s.a.ad(this.b)+7*s.b.ad(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hW){s=this.a
s=s.a.V(this.b,b.b)&&s.b.V(this.c,b.c)}else s=!1
return s}}
A.jd.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.DF(null,null,null,t.mB,t.S)
for(r=J.E(a.gJ());r.k();){q=r.gn()
p=new A.hW(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gJ());r.k();){q=r.gn()
p=new A.hW(this,q,b.h(0,q))
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
if(a instanceof A.cA)return b instanceof A.cA&&new A.hn(r,t.cu).V(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.jd(r,r,t.a3).V(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.eP(r,t.hI).V(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.j3(r,t.nZ).V(a,b)
return J.x(a,b)},
ad(a){var s=this
if(a instanceof A.cA)return new A.hn(s,t.cu).ad(a)
if(t.f.b(a))return new A.jd(s,s,t.a3).ad(a)
if(t.j.b(a))return new A.eP(s,t.hI).ad(a)
if(t.e7.b(a))return new A.j3(s,t.nZ).ad(a)
return J.ab(a)},
wD(a){return!0}}
A.n8.prototype={
sm(a,b){A.FT()},
u(a,b){return A.FT()}}
A.on.prototype={
j(a,b,c){return A.Lc()}}
A.cu.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cu){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gK(a){return A.w9(this.a)},
l(a){return A.au(this.a)}}
A.ca.prototype={
u(a,b){if(this.a!=null)throw A.b(A.A("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.A("add must be called once."))}}
A.my.prototype={
v(a){var s=new A.ca(),r=A.d3(s)
r.u(0,a)
r.q()
r=s.a
r.toString
return r}}
A.tK.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.A("Hash.add() called after close()."))
s.r=s.r+J.an(b)
s.lq(b)},
lq(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
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
k.y0(s)}},
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
m=B.c.M(p,4294967296)
n.$flags&2&&A.K(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.lq(q)
s=l.a
s.u(0,new A.cu(l.pW()))
s.q()},
pW(){var s,r,q,p,o,n,m
if(B.aW===$.l9())return J.J6(B.y.gac(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.q5(B.f.gac(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.K(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.ps.prototype={
cc(a){var s=new Uint32Array(A.ba(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hL(new A.pt(s,r,a,q,new Uint32Array(16)))}}
A.Bo.prototype={
y0(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
gK(a){return A.cg(B.e_,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lY&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.d7(s).l(0)+".with"+s.d*8+"bits()"
return A.d7(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.qF.prototype={}
A.jc.prototype={
gK(a){return B.t.ad(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.jc&&B.t.V(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.C(s,",")+"])"}}
A.jS.prototype={
l(a){return A.d7(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iH:1}
A.vB.prototype={
l(a){return A.d7(this).l(0)+"()"}}
A.jR.prototype={
gK(a){return(B.t.ad(this.b.a)^B.t.ad(this.c)^B.t.ad(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jR){s=B.t.V(this.b.a,b.b.a)
s=s&&B.t.V(this.c,b.c)&&B.t.V(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.C(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.xW.prototype={}
A.jT.prototype={
gem(){return this.b},
gK(a){var s=A.eW(B.ee),r=B.t.ad(this.gem())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jT&&B.t.V(this.gem(),b.gem())},
l(a){return"SecretKeyData(...)"}}
A.nF.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.a2("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.a2("The bytes are unmodifiable."))}}
A.lY.prototype={
v1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.gem().gm(0),f=this.d
if(g!==f)throw A.b(A.aD(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.HL(c)
r=new Uint32Array(4)
A.pW(r,0,r,0,s)
r[0]=A.bG(r[0])
r[1]=A.bG(r[1])
r[2]=A.bG(r[2])
r[3]=A.bG(r[3])
q=A.Fq(r,a.c)
p=J.F9(B.f.gac(q),0,null)
o=a.a
n=B.t.V(B.aU.lx(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jS())
A.Cz(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pW(l,k,p,0,s)
A.Cz(q,1)}j=J.bV(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.K(j)
j[k]=i^h}return j},
vK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.gem().gm(0),f=this.d
if(g!==f)throw A.b(A.aD(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.HL(d)
r=new Uint32Array(4)
A.pW(r,0,r,0,s)
r[0]=A.bG(r[0])
r[1]=A.bG(r[1])
r[2]=A.bG(r[2])
r[3]=A.bG(r[3])
q=A.Fq(r,c)
p=J.F9(B.f.gac(q),0,null)
o=new Uint32Array(A.ba(p))
A.Cz(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pW(l,k,p,0,s)
A.Cz(q,1)}j=J.bV(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.K(j)
j[k]=i^h}return new A.jR(j,B.aU.lx(j,b,s,r,o),c)}}
A.rE.prototype={
l(a){return"DartGcm()"},
lx(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lZ(n,d,b)
A.lZ(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.an(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
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
A.Aj.prototype={
V(a,b){var s,r,q=J.J(a),p=J.J(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ad(a){var s,r,q,p,o
for(s=J.J(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.an(q,16)
r=(r^B.c.tL(p,o)^B.c.mC(p,16-o))>>>0}return r}}
A.nv.prototype={}
A.lw.prototype={$iDu:1}
A.lx.prototype={
ie(){if(this.w)throw A.b(A.A("Can't finalize a finalized Request."))
this.w=!0
return B.bI},
l(a){return this.a+" "+this.b.l(0)}}
A.ly.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:86}
A.lz.prototype={
$1(a){return B.a.gK(a.toLowerCase())},
$S:88}
A.qo.prototype={
po(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.U("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.U("Invalid content length "+A.r(s)+".",null))}}}
A.lD.prototype={
bc(a){return this.oT(a)},
oT(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bc=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.Fn("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.ie().xU(),$async$bc)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.bz(k)?k:null
a9=t.N
f=A.t(a9,t.K)
e=b4.gn2()
d=null
if(e!=null){d=e
J.b4(f,"content-length",d)}for(b0=b4.r,b0=new A.aK(b0,A.n(b0).i("aK<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.b4(f,c.a,c.b)}f=A.l4(f)
f.toString
A.bm(f)
b0=l.signal
s=8
return A.a(A.a4(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$bc)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.ha(a,null):null
if(a0==null&&a!=null){f=A.Fn("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.t(a9,a9)
b.headers.forEach(A.pR(new A.qr(a1)))
f=A.Mn(b4,b)
a4=b.status
a6=a1
a8=a0
A.oq(b.url)
a9=b.statusText
f=new A.nU(A.Im(f),a4,a8,a6)
f.po(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.af(b3)
A.Ht(a2,a3,b4)
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
return A.f($async$bc,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].abort()
this.b=!0}}
A.qr.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:93}
A.C7.prototype={
$1(a){return A.id(this.a,this.b,a)},
$S:95}
A.Cm.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ak()}},
$S:0}
A.Cn.prototype={
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
n=A.C(k)
m=A.af(k)
if(!o.a.b)A.Ht(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dI.prototype={
xU(){var s=new A.w($.B,t.jz),r=new A.aG(s,t.iq),q=new A.oP(new A.qt(r),new Uint8Array(1024))
this.aa(q.guo(q),!0,q.geo(),r.guM())
return s}}
A.qt.prototype={
$1(a){return this.a.aB(new Uint8Array(A.ba(a)))},
$S:11}
A.eA.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iH:1}
A.n1.prototype={
gm(a){return this.b}}
A.w1.prototype={
gn2(){var s,r,q,p=this,o={},n=o.a=0
p.x.a5(0,new A.w2(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.p)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.m2(q)).length+q.b+2)}return o.a+2+70+4},
ie(){var s=this,r=s.pS()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.li()
return new A.dI(s.bs(r))},
bs(a){return this.qT(a)},
qT(a){var $async$bs=A.c(function(b,c){switch(b){case 2:n=q
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
return A.bh(A.dy(e),$async$bs,r)
case 5:k=l.b
j=$.Dp()
l=A.D(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.D(l,'"',"%22")+'"'
l=$.F6()
s=6
q=[1]
return A.bh(A.dy(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bs,r)
case 6:s=7
q=[1]
return A.bh(A.dy(B.e.v(k)),$async$bs,r)
case 7:s=8
q=[1]
return A.bh(A.dy(B.b8),$async$bs,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bh(A.dy(e),$async$bs,r)
case 12:s=13
q=[1]
return A.bh(A.dy(B.e.v(m.m2(g))),$async$bs,r)
case 13:if(g.f)A.u(A.A("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bh(A.LN(g.e),$async$bs,r)
case 14:s=15
q=[1]
return A.bh(A.dy(B.b8),$async$bs,r)
case 15:case 10:f.length===l||(0,A.p)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bh(A.dy(d),$async$bs,r)
case 16:case 1:return A.bh(null,0,r)
case 2:return A.bh(o.at(-1),1,r)}})
var s=0,r=A.Ez($async$bs,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.EF(r)},
re(a,b){var s,r=$.Dp()
r=A.D(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.D(r,'"',"%22")+'"'
r=$.F6()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
m2(a){var s=a.d.l(0),r=$.Dp(),q=A.D(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.D(q,'"',"%22")+'"'
s=A.D(a.c,r,"%0D%0A")
p=p+'; filename="'+A.D(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pS(){var s,r=J.DJ(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.d4[$.Iw().d3(66)]
return"dart-http-boundary-"+A.e8(r,0,null)}}
A.w2.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.re(a,b)).length+B.e.v(b).length+2)},
$S:35}
A.xL.prototype={
gn2(){return this.y.length},
gkv(){var s,r
if(this.gcH()==null||!this.gcH().c.a.I("charset"))return B.o
s=this.gcH().c.a.h(0,"charset")
s.toString
r=A.JO(s)
return r==null?A.u(A.ac('Unsupported encoding "'+s+'".',null,null)):r},
ie(){this.li()
return new A.dI(A.E4(this.y,t.L))},
gcH(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.Km(s)},
scH(a){this.r.j(0,"content-type",a.l(0))},
pZ(){if(!this.w)return
throw A.b(A.A("Can't modify a finalized Request."))}}
A.k_.prototype={}
A.nU.prototype={}
A.iB.prototype={}
A.fZ.prototype={
l(a){var s=new A.a6(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a5(0,new A.vL(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.vJ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.yg(null,j),h=$.J5()
i.j6(h)
s=$.J4()
i.ft(s)
r=i.gkK().h(0,0)
r.toString
i.ft("/")
i.ft(s)
q=i.gkK().h(0,0)
q.toString
i.j6(h)
p=t.N
o=A.t(p,p)
for(;;){p=i.d=B.a.eC(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gN():n
if(!m)break
p=i.d=h.eC(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gN()
i.ft(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.ft("=")
n=i.d=s.eC(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gN()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.Oy(i)
n=i.d=h.eC(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.vT()
return A.DQ(r,q,o)},
$S:103}
A.vL.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.J2()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.Ij(b,$.IS(),new A.vK(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:35}
A.vK.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:66}
A.CQ.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:66}
A.qn.prototype={
dK(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.f_(),$async$dK)
case 5:o=b
s=o.gnJ()<0.25?6:7
break
case 6:s=8
return A.a(p.jW(o),$async$dK)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnJ()<0.25?9:10
break
case 9:s=11
return A.a(p.jW(m),$async$dK)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dK,r)},
iO(){var s=0,r=A.h(t.q),q,p=this
var $async$iO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f_(),$async$iO)
case 3:q=p.jW(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iO,r)},
f_(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$f_=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.c3():j
p=3
s=6
return A.a(l,$async$f_)
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
return A.f($async$f_,r)},
jW(a){var s=this.c
if(s!=null)return s
return this.c=this.hj(a)},
hj(a){return this.qv(a)},
qv(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$hj=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.lr("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iP(l),$async$hj)
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
return A.f($async$hj,r)}}
A.jB.prototype={
pq(a,b,c,d,e,f,g,h,i,j,k){var s=this,r=new A.qn(s.c)
s.Q!==$&&A.dE()
s.Q=r
s.as!==$&&A.dE()
s.as=new A.wr(s.z,s.b,r,s.x,s.a)},
fK(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$fK=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.ay){s=1
break}n.ay=!0
if(n.ch){s=1
break}p=4
m=n.as
m===$&&A.v()
s=7
return A.a(m.iJ(),$async$fK)
case 7:n.ax=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.C(k)
if(m instanceof A.cd){n.ax=!1
n.ch=!0}else if(m instanceof A.bl)n.ay=n.ax=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fK,r)},
gi1(){return new A.lt(this.ax,this.f)},
gl8(){return B.a.B(A.au(B.m.v(B.e.v(this.b.l(0)+"|"+this.r)).a),0,12)},
h9(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$h9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.at!=null){s=1
break}o=p.as
o===$&&A.v()
n=A.KA(B.ck,o,A.l(["data"],t.s),p.grI(),p.grF(),p.w)
p.at=n
s=3
return A.a(n.aC(),$async$h9)
case 3:case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
eT(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.at
o=o==null?null:o.aL()
s=2
return A.a(o instanceof A.w?o:A.bF(o,t.H),$async$eT)
case 2:q.at=null
for(o=q.cx,p=new A.aZ(o,o.r,o.e,A.n(o).i("aZ<2>"));p.k();)p.d.A()
o.aq(0)
q.cy.aq(0)
return A.e(null,r)}})
return A.f($async$eT,r)},
hg(){var s=0,r=A.h(t.H),q=this
var $async$hg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.eT(),$async$hg)
case 2:q.z.a.q()
return A.e(null,r)}})
return A.f($async$hg,r)},
rG(){var s,r,q,p
for(s=this.db,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
this.eX(p,new A.cr(p,B.P,null))}},
rJ(a){var s=a.b,r=s.b
if(!B.b.E(this.db,r))return
if(a.a==="delete"){this.hO(s)
return}this.eX(r,new A.cr(r,B.P,s))},
hO(a){return this.u6(a)},
u6(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hO=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.E(n.db,j)){s=1
break}m=null
p=4
l=n.as
l===$&&A.v()
s=7
return A.a(l.aR(a.a),$async$hO)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.C(i)
if(l instanceof A.ce){n.eX(j,new A.cr(j,B.at,null))
s=1
break}else if(l instanceof A.bl){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eX(j,new A.cr(j,B.at,null))
s=1
break}n.eX(j,new A.cr(j,B.P,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hO,r)},
eX(a,b){var s,r,q=this
q.cy.j(0,a,b)
s=q.cx
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.c4(q.d,new A.wn(q,a)))},
ni(){var s=this.CW
return new A.aX(s,A.n(s).i("aX<1>"))},
d2(a,b,c,d,e){var s=this.as
s===$&&A.v()
return s.ix(a,d!=null?B.d3:null,b,c,d,e)},
ns(a,b,c,d){return this.d2(a,b,null,c,d)},
nr(a,b,c,d){return this.d2(a,b,c,null,d)},
aR(a){var s=this.as
s===$&&A.v()
return s.aR(a)},
c2(a,b,c){var s=this.as
s===$&&A.v()
return s.c2(a,b,c)},
eN(a,b){return this.iU(null,a,null,b,null)},
iU(a,b,c,d,e){return this.y7(a,b,c,d,e)},
cb(a,b){return this.iU(null,a,null,null,b)},
y7(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$iU=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aU(0,new A.wo(p),t.N,t.co)
n=p.as
n===$&&A.v()
q=n.iT(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iU,r)},
bI(a,b,c){var s=this.as
s===$&&A.v()
return s.bI(a,b,c)},
bQ(a,b,c){var s=this.as
s===$&&A.v()
return s.bQ(a,b,c)},
bK(a){var s=this.as
s===$&&A.v()
return s.bK(a)},
$inX:1}
A.wn.prototype={
$0(){var s,r=this.a,q=this.b
r.cx.G(0,q)
s=r.cy.G(0,q)
if(s!=null&&(r.CW.c&4)===0)r.CW.u(0,s)},
$S:0}
A.wo.prototype={
$2(a,b){return new A.V(a,new A.dN("imgs+",b.a,b.b,b.c),t.ia)},
$S:113}
A.jE.prototype={}
A.wU.prototype={
cS(a,b,c,d){return this.uO(a,b,c,d)},
uO(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$cS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.Bu(d)
n=t.hw
m=A.dq(null,null,n)
l=t.N
k=$.B.h(0,B.dT)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.lD(A.l([],t.kG))
j=new A.wp(j)
p=new A.jE(c,B.aZ,a,o,B.b2,200,25,b,B.ah,B.ah,null,j,m,A.t(l,t.hU),A.t(l,n))
p.pq(a,B.ah,B.aZ,b,25,200,null,B.b2,B.ah,o,null)
s=3
return A.a(p.h9(),$async$cS)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cS,r)},
cT(a){return this.vx(a)},
vx(a){var s=0,r=A.h(t.H),q
var $async$cT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=a instanceof A.jE?2:3
break
case 2:s=4
return A.a(a.eT(),$async$cT)
case 4:a.hg()
q=a.CW
if((q.c&4)===0)q.q()
case 3:return A.e(null,r)}})
return A.f($async$cT,r)}}
A.Bu.prototype={
c3(){var s=0,r=A.h(t.q),q,p=this,o
var $async$c3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c3(),$async$c3)
case 3:q=o.Gb(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c3,r)},
iP(a){return this.xF(a)},
xF(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c3(),$async$iP)
case 3:q=o.Gb(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iP,r)}}
A.wJ.prototype={}
A.wr.prototype={
hZ(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hZ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dK(),$async$hZ)
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
l=A.lr("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hZ,r)},
ix(a,b,c,d,e,f){return this.wJ(a,b,c,d,e,f)},
wJ(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$ix=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Pc(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.fs(a)+" && updated>="+A.fs(n)+")"
o=c==null?m:m+" && (updated>"+A.fs(n)+" || (updated="+A.fs(n)+" && id>"+A.fs(c)+"))"}l=t.N
l=A.t(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.fY(B.c.bu(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.C(b,","))
k=p.b.al("/api/collections/data/records").kU(l)
s=3
return A.a(p.my("GET",k),$async$ix)
case 3:j=a0
p.e0(j,A.l([200],t.t),k)
i=p.dj(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aV("List response has no items array."))
h=J.bI(i,new A.wI(p),t.h)
h=A.O(h,h.$ti.i("a0.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ix,r)},
aR(a){return this.oL(a)},
oL(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$aR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jU(a)
s=3
return A.a(p.my("GET",o),$async$aR)
case 3:n=c
if(n.a===404)throw A.b(A.Kx("not found"))
p.e0(n,A.l([200],t.t),o)
q=A.h9(p.dj(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aR,r)},
c2(a,b,c){return this.uU(a,b,c)},
uU(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$c2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.al("/api/collections/data/records")
s=3
return A.a(p.fc("POST",o,B.h.a9(A.m(["id",b,"store",c,"data",p.jo(a)],t.N,t.X),null)),$async$c2)
case 3:n=e
if(n.a===400&&p.ri(n))throw A.b(A.JN(p.eZ(n)))
p.e0(n,A.l([200,201],t.t),o)
q=A.h9(p.dj(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c2,r)},
jo(a){var s,r,q
try{r=B.h.aI(a,null)
return r}catch(q){s=A.C(q)
r=A.Kz("Corrupt local payload: "+A.r(s))
throw A.b(r)}},
ri(a){var s,r,q,p,o,n
try{s=this.dj(a)
r=J.T(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
bQ(a,b,c){return this.y3(a,b,c)},
y3(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$bQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jU(c)
s=3
return A.a(p.fc("PATCH",o,B.h.a9(A.m(["data",p.jo(b)],t.N,t.X),null)),$async$bQ)
case 3:n=e
p.e0(n,A.l([200],t.t),o)
q=A.h9(p.dj(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bQ,r)},
iT(a,b,c,d,e){return this.y5(a,b,c,d,e)},
y5(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n,m,l
var $async$iT=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jU(b)
m=t.N
l=A.t(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a9(d,null))
if(e==null)m=null
else{m=A.n(e).i("ao<2>")
m=A.O(new A.ao(e,m),m.i("o.E"))}s=3
return A.a(p.tE(new A.mB("PATCH",n,B.aB,l,m==null?B.d_:m)),$async$iT)
case 3:o=g
p.e0(o,A.l([200],t.t),n)
q=A.h9(p.dj(o),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iT,r)},
bI(a,b,c){return this.vC(a,b,c)},
vC(a,b,c){var s=0,r=A.h(t.v),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$bI=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.t(i,i)
l=n.b.al("/api/files/data/"+A.pI(2,b,B.o,!1)+"/"+A.pI(2,a,B.o,!1))
k=i.a===0?l:l.kU(i)
s=3
return A.a(n.rL(new A.eL("GET",k,B.aB,null)),$async$bI)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.aZ(new A.wH()).A().fX(B.cl),$async$bI)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.m8(A.K4(m.a,m.b,""),k))
case 5:q=n.q_(m.c)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bI,r)},
q_(a){var s,r,q={},p=this.d
if(p.a<=0)return a
s=A.oS()
q.a=q.b=null
r=new A.wz(q,p,s)
s.b=A.nS(new A.wv(q),new A.ww(q,r,a,s),new A.wx(q),new A.wy(q,r),!0,t.L)
return s.aE().gcD()},
bK(a){return this.xk(a)},
xk(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bK=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.al("/api/batch")
a6=A.l([],t.ic)
for(l=J.ax(a7),k=l.gt(a7),j=t.N,i=t.X,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",p.jo(g.d)],j,i)],j,h))}s=3
return A.a(p.fc("POST",a5,B.h.a9(A.m(["requests",a6],j,t.ew),null)),$async$bK)
case 3:o=b0
if(o.a===403)throw A.b(A.JV(p.eZ(o)))
if(o.a===400)throw A.b(A.Jn(p.eZ(o)))
p.e0(o,A.l([200],t.t),a5)
n=null
try{n=B.h.aI(o.c,null)}catch(a8){a6=A.C(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aV("Batch response is not valid JSON: "+m.giA()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aV("Batch response has no results array."))}else throw A.b(A.aV("Batch response is not a list or envelope."))
e=c}a6=J.J(e)
if(a6.gm(e)!==l.gm(a7))throw A.b(A.aV("Batch response has "+a6.gm(e)+" results for "+l.gm(a7)+" requests."))
b=A.l([],t.g2)
for(k=t.f,j=p.e,a=0;a<l.gm(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aV("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.cK(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.h9(a3,j):null
g=a2?null:p.qD(a0)
a4=a2&&k.b(a3)?B.h.a9(a3.h(0,"data"),null):null
b.push(new A.he(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bK,r)},
iJ(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fc("POST",p.b.al("/api/batch"),B.h.a9(A.m(["requests",[]],t.N,t.kS),null)),$async$iJ)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.lr(p.eZ(o)))
if(n===408||n===429||n>=500)throw A.b(A.Gc("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iJ,r)},
jU(a){return this.b.al("/api/collections/data/records/"+A.pI(2,a,B.o,!1))},
fc(a,b,c){return this.cl(new A.wD(this,a,b,c),new A.wE(),t.w)},
my(a,b){return this.fc(a,b,null)},
tE(a){return this.cl(new A.wF(this,a),new A.wG(),t.w)},
rL(a){return this.cl(new A.wB(this,a),new A.wC(),t.lI)},
cl(a,b,c){return this.uc(a,b,c,c)},
uc(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cl=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.hd(),$async$cl)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$cl)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.jg(),$async$cl)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$cl)
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
if(i instanceof A.dO){j=i
throw A.b(A.Gc(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cl,r)},
hd(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hd=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dK(),$async$hd)
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
l=A.lr("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hd,r)},
eJ(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$eJ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.iO(),$async$eJ)
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
l=A.lr("token refresh failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eJ,r)},
jg(){var s=0,r=A.h(t.q),q,p=this
var $async$jg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.eJ()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jg,r)},
k0(a,b,c,d){return this.tC(a,b,c,d)},
tC(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$k0=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.t(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.bc(new A.eL(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k0,r)},
e0(a,b,c){if(B.b.E(b,a.a))return
throw A.b(this.m8(a,c))},
m8(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eZ(a)
if(401===s)return new A.bK(q)
if(403===s)return new A.cd(q)
if(404===s)return new A.ce(q)
if(408===s||429===s)return new A.cW(r,q)
if(400===s)return new A.dh(q)
if(s>=500)return new A.eZ(q)
return new A.e2("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eZ(a){var s,r,q,p,o
try{s=this.dj(a)
r=J.T(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.T(s,"data")
if(t.f.b(q)){p=q
p=p.gS(p)}else p=!1
if(p){p=B.h.a9(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.B(p,0,500)},
dj(a){var s,r,q,p=null
try{p=B.h.aI(a.c,null)}catch(r){q=A.C(r)
if(t.Y.b(q)){s=q
throw A.b(A.aV("Response is not valid JSON: "+s.giA()))}else throw r}if(t.f.b(p))return A.bs(p,t.N,t.X)
throw A.b(A.aV("Expected a JSON object, got "+J.c8(p).l(0)+"."))},
qD(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.wI.prototype={
$1(a){return A.h9(a,this.a.e)},
$S:115}
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
s.aE().ke(new A.ds("download stalled: no chunk within "+this.c.l(0)))
s.aE().q()
s=this.a.a
if(s!=null)s.A()},
$S:0}
A.ww.prototype={
$0(){var s,r,q=this,p=q.b
p.$0()
s=q.d
r=q.a
r.a=q.c.bz(new A.ws(p,s),new A.wt(r,s),new A.wu(r,s))},
$S:0}
A.ws.prototype={
$1(a){this.a.$0()
J.aN(this.b.aE(),a)},
$S:11}
A.wu.prototype={
$2(a,b){var s=this.a.b
if(s!=null)s.A()
this.b.aE().bk(a,b)},
$S:6}
A.wt.prototype={
$0(){var s=this.a.b
if(s!=null)s.A()
this.b.aE().q()},
$S:0}
A.wx.prototype={
$0(){var s=this.a.a
return s==null?null:s.b7()},
$S:0}
A.wy.prototype={
$0(){var s=this.a.a
if(s!=null)s.b_()
this.b.$0()},
$S:0}
A.wv.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.A()
s=s.a
return s==null?null:s.A()},
$S:117}
A.wD.prototype={
$1(a){var s=this
return s.a.k0(s.b,s.c,s.d,a)},
$S:64}
A.wE.prototype={
$1(a){return a.a},
$S:60}
A.wF.prototype={
$1(a){var s=this.b,r=t.N
r=A.bO(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dP(new A.mB(s.a,s.b,r,s.d,s.e))},
$S:64}
A.wG.prototype={
$1(a){return a.a},
$S:60}
A.wB.prototype={
$1(a){var s=this.b,r=t.N
r=A.bO(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.eF(new A.eL(s.a,s.b,r,s.d))},
$S:134}
A.wC.prototype={
$1(a){return a.a},
$S:136}
A.jD.prototype={}
A.i1.prototype={}
A.wK.prototype={
aC(){var s=0,r=A.h(t.H),q,p=this
var $async$aC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.y){s=1
break}p.y=!0
p.fb()
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
fb(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$fb=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.r,m=t.H
case 2:if(!o.y){s=3
break}q=5
s=8
return A.a(o.bW(),$async$fb)
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
return A.a(A.K0(n.$1(k),m),$async$fb)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$fb,r)},
mf(a){var s=this.a,r=t.N
return s.a.eF(new A.eL("GET",s.b.al("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
mz(a,b){var s=this.a,r=t.N
return s.a.bc(new A.eL("POST",s.b.al("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a9(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
bW(){return this.qe()},
qe(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$bW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.hZ(),$async$bW)
case 3:k=b
m.a=k
s=4
return A.a(p.mf(k),$async$bW)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.eJ(),$async$bW)
case 7:k=b
m.a=k
s=8
return A.a(p.mf(k),$async$bW)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iZ("realtime connect status "+l,null))
s=!p.y?9:10
break
case 9:s=11
return A.a(o.c.aZ(new A.wN()).A(),$async$bW)
case 11:s=1
break
case 10:++p.ax
p.as=new A.aG(new A.w($.B,t.D),t.Q)
l=$.q3()
n=A.l([],t.s)
m.b=m.c=!1
n=o.c.bz(new A.wO(m,p,new A.wR(p),new A.Bv(new A.Ak(l),n)),new A.wP(p),new A.wQ(p))
p.z=n
s=!p.y?12:13
break
case 12:s=14
return A.a(n.A(),$async$bW)
case 14:p.z=null
s=1
break
case 13:s=15
return A.a(p.as.a,$async$bW)
case 15:l=p.Q
if(l!=null)l.A()
p.z=p.Q=null
if(m.b)throw A.b(A.iZ("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
e5(a,b){return this.r2(a,b)},
r2(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$e5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.mz(h,b),$async$e5)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.eJ(),$async$e5)
case 10:s=9
return A.a(p.mz(g,d),$async$e5)
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
break}try{m=A.h9(n,p.a.e)
p.x.$1(new A.jD(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$e5,r)}}
A.wT.prototype={
$1(a){return A.I0(a,this.a,this.b,A.P7())},
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
s=l.d.vV(a)
for(r=s.length,q=l.b,p=l.a,o=t.P,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
q.at=q.at.W(new A.wL(p,q,m),o).ki(new A.wM(q))}},
$S:11}
A.wL.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.b){s=1
break}p=4
s=7
return A.a(n.b.e5(n.c,i.a),$async$$1)
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
try{n.b.w.$0()}catch(g){m=A.C(g)
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
A.Bv.prototype={
vV(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.iS()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.rf(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.d4(p,o,q)))
p=o+1
m=this.qr(B.a.xX(new A.dB(!0).dh(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.bd(s,p))
return r},
rf(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qU(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.aq(k)
return l}s=m.b
r=B.b.C(k,"\n")
m.b=null
B.b.aq(k)
try{q=B.h.aI(r,l)
if(t.f.b(q)){p=A.bs(q,t.N,t.X)
o=J.T(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.i1(o,l)
return new A.i1(l,p)}}catch(n){}return l},
qr(a){var s,r=this,q=null
if(a.length===0)return r.qU()
if(B.a.T(a,"PB_CONNECT:")){r.b=null
B.b.aq(r.c)
return new A.i1(B.a.ca(B.a.ab(a,11)),q)}if(B.a.T(a,":"))return q
if(B.a.T(a,"event:")){r.b=B.a.ca(B.a.ab(a,6))
return q}if(B.a.T(a,"data:")){s=B.a.ca(B.a.ab(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eL.prototype={}
A.dN.prototype={
p8(){return this.d.$0()},
gm(a){return this.c}}
A.mB.prototype={}
A.cQ.prototype={}
A.dO.prototype={
l(a){return"HttpTransportException: "+this.a},
$iH:1}
A.e7.prototype={}
A.wp.prototype={
bc(a){return this.oU(a)},
oU(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bc=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eF(a),$async$bc)
case 7:m=c
j=m.c
s=8
return A.a(B.aR.lk(j).ez(0).fX(B.U),$async$bc)
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
j=A.C(g)
if(j instanceof A.dO)throw g
else{k=j
j=A.iZ("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bc,r)},
dP(a){return this.oV(a)},
oV(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dP=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Kt(a6.a,a6.b)
h.r.D(0,a6.c)
h.x.D(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.p8(),$async$dP)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.Im(a0)
a3=new A.fZ("application".toLowerCase(),"octet-stream".toLowerCase(),new A.d_(A.t(d,d),e))
b.push(new A.n1(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.p)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.bc(m).fX(B.U),$async$dP)
case 11:k=a8
g=k.w
s=12
return A.a(B.aR.lk(g).ez(0).fX(B.U),$async$dP)
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
g=A.C(a5)
if(g instanceof A.dO)throw a5
else{i=g
g=A.iZ("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dP,r)},
eF(a){return this.x6(a)},
x6(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eF=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.KR(a,a0)
a1.r.D(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gkv().ku(j)
i.pZ()
i.y=A.Pg(j)
h=i.gcH()
if(h==null){j=t.N
i.scH(A.DQ("text","plain",A.m(["charset",i.gkv().gaV()],j,j)))}else{j=i.gcH()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c4(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gkv().gaV()],j,j)
e=h.a
d=h.b
c=A.bs(h.c,j,j)
c.D(0,f)
i.scH(A.DQ(e,d,c))}}}p=4
s=7
return A.a(n.a.bc(a1).fX(B.U),$async$eF)
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
j=A.C(a2)
if(j instanceof A.dO)throw a2
else{k=j
a=A.iZ("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eF,r)}}
A.wq.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:35}
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
$iH:1}
A.cb.prototype={}
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
p(){return B.k}}
A.mv.prototype={
gY(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.iR.prototype={
gY(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fS.prototype={
gY(){return"fileRefs"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.mr.prototype={
gY(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fR.prototype={
gY(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fP.prototype={
gY(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.ht.prototype={
gY(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fQ.prototype={
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
A.Cf.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.I)},
$S:12}
A.xC.prototype={
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
A.xD.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.I)},
$S:12}
A.xE.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.Q("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.E(a);r.k();)s.push(A.G0(r.gn()))
return s},
$S:165}
A.eX.prototype={
p(){var s,r,q,p,o=this,n=A.t(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.push(A.fo(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.fo(o.c))
return n}}
A.xy.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.I)},
$S:12}
A.xz.prototype={
$1(a){return a.b===this.a},
$S:167}
A.b6.prototype={
a7(){return"QueryConditionOp."+this.b}}
A.cT.prototype={}
A.wY.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.I)},
$S:12}
A.wX.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.Q("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.E(a);r.k();)s.push(A.DS(r.gn()))
return s},
$S:168}
A.j9.prototype={
p(){var s=A.t(t.N,t.X)
s.j(0,"kind","leaf")
s.D(0,this.a.p())
return s}}
A.jx.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.is.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.it.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.np.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.xB.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.I)},
$S:12}
A.cM.prototype={
a7(){return"AggregateFn."+this.b}}
A.xU.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.xV.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.I)},
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
p(){return B.k}}
A.mz.prototype={
p(){return B.k}}
A.lH.prototype={
p(){return B.k}}
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
r.j(0,"mutation",A.MN(this.b))
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
p(){return B.k}}
A.ot.prototype={
p(){return B.k}}
A.nm.prototype={
p(){return B.k}}
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
A.ai.prototype={}
A.h7.prototype={
gY(){return"ok"},
p(){return B.k}}
A.iA.prototype={
gY(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.mA.prototype={
gY(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.hj.prototype={
gY(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.hk.prototype={
gY(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.h2.prototype={
gY(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.hg.prototype={
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
A.fJ.prototype={
gY(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fL.prototype={
gY(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fV.prototype={
gY(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fy.prototype={
gY(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fO.prototype={
gY(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.hm.prototype={
gY(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.nD.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fH.prototype={
gY(){return"conflicts"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fG.prototype={
gY(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hA.prototype={
gY(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hH.prototype={
gY(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.hc.prototype={
gY(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fF.prototype={
gY(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.f1.prototype={
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
A.bd.prototype={
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
p(){return B.k}}
A.nZ.prototype={
p(){return B.k}}
A.o_.prototype={
p(){return B.k}}
A.o1.prototype={
p(){return B.k}}
A.o9.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.o2.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.o6.prototype={
p(){return B.k}}
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
p(){return B.k}}
A.f3.prototype={
l(a){return"WireException: "+this.a},
$iH:1}
A.Dm.prototype={
$2(a,b){return B.a.a3(a.a,b.a)},
$S:177}
A.ni.prototype={
a7(){return"PlatformProfile."+this.b}}
A.nP.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.y4.prototype={
$1(a){return J.bH(a.gaX())},
$S:43}
A.y5.prototype={
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
return A.cg(s.a,s.b,s.c,s.d,B.p.ad(s.e),B.p.ad(s.f),B.p.ad(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a5.prototype={}
A.qC.prototype={
ks(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
vI(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.qD.prototype={}
A.qE.prototype={}
A.tc.prototype={}
A.q9.prototype={
vJ(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.d3(256)
q=this.b.vK(new Uint8Array(A.ba(a)),b,m,this.c)
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
v0(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.U("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.A("Unsupported ciphertext version 0x"+B.a.iG(B.c.kY(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.ba(B.f.U(a,1,13)))
n-=16
r=new Uint8Array(A.ba(B.f.bd(a,n)))
q=new Uint8Array(A.ba(B.f.U(a,13,n)))
try{n=this.b.v1(new A.jR(q,new A.jc(r),s),b,this.c)
return n}catch(o){if(A.C(o) instanceof A.jS)throw A.b(A.A("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.de.prototype={
a7(){return"KindViolation."+this.b}}
A.CC.prototype={
$2(a,b){return B.a.a3(a.a,b.a)},
$S:193}
A.fh.prototype={$iH:1}
A.B9.prototype={
c3(){var s=0,r=A.h(t.N),q,p=this,o
var $async$c3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c3,r)}}
A.pC.prototype={}
A.i_.prototype={}
A.uk.prototype={
pp(a,b){var s=this,r=s.a.a.a$.b
r=new A.aX(r,A.n(r).i("aX<1>")).aZ(new A.uO(s))
s.c!==$&&A.dE()
s.c=r},
w6(a){var s,r,q=this
A:{if(a instanceof A.nc){s=q.hy(a.a,a.b)
break A}if(a instanceof A.lE){s=A.bi(q.he(),t.V)
break A}if(a instanceof A.mz){s=A.bi(new A.mA(!0,q.a.d.a),t.V)
break A}if(a instanceof A.lH){s=q.q().W(new A.uP(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mx){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bH(r,new A.uQ(s,q),new A.uR())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ny){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bH(r,new A.v1(s,q),new A.vc())
break A}if(a instanceof A.n2){s=q.rq(a.a,a.b,a.c)
break A}if(a instanceof A.nq){s=q.rM(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lU){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bH(r,new A.vd(s,q),A.HS())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lT){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bH(r,new A.ve(s,q),A.HS())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.m6){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bH(r,new A.vf(s,q),A.Oc())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mC){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bH(r,new A.vg(s,q),A.Oe())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.lk){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bH(r,new A.vh(s,q),A.Ob())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.md){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bH(r,new A.vi(s,q),A.Od())
break A}if(a instanceof A.nE){s=q.ty(a.a,a.b,a.c)
break A}if(a instanceof A.od){s=q.pM(a.a,a.b)
break A}if(a instanceof A.oe){s=q.fd(a.a,!0)
break A}if(a instanceof A.og){s=q.fd(a.a,!1)
break A}if(a instanceof A.oi){s=q.hH(a.a,a.b)
break A}if(a instanceof A.oh){s=q.hG(a.a,a.b)
break A}if(a instanceof A.of){s=q.hE(a.a,a.b)
break A}if(a instanceof A.ox){s=q.hP(a.a,a.b)
break A}if(a instanceof A.oy){s=q.u8(a.a,a.b)
break A}if(a instanceof A.ow){s=q.ka(a.a)
break A}if(a instanceof A.lm){s=q.a.a.e
s===$&&A.v()
s=s.el(a.a).W(new A.uS(),t.V)
break A}if(a instanceof A.ov){s=q.a.a.e
s===$&&A.v()
s=s.fZ().W(new A.uT(),t.V)
break A}if(a instanceof A.ot){s=q.a.a.e
s===$&&A.v()
s=s.iV().W(new A.uU(),t.V)
break A}if(a instanceof A.nm){s=q.a.a.e
s===$&&A.v()
s=s.fM().W(new A.uV(),t.V)
break A}if(a instanceof A.lK){s=q.a.a.e
s===$&&A.v()
s=s.ep(a.a,A.bX(0,a.b,0)).W(new A.uW(),t.V)
break A}if(a instanceof A.nz){s=q.a.a.e
s===$&&A.v()
s=s.d8(A.bX(0,a.a,0)).W(new A.uX(),t.V)
break A}if(a instanceof A.lQ){s=q.a.a.fr
s===$&&A.v()
s=s.fD(a.a).W(new A.uY(q),t.V)
break A}if(a instanceof A.lO){s=q.a.a.fr
s===$&&A.v()
s=s.dO(a.a,a.b).W(new A.uZ(q),t.V)
break A}if(a instanceof A.nw){s=q.a.a.fr
s===$&&A.v()
s=s.eK(a.b,a.c,a.a).W(new A.v_(),t.V)
break A}if(a instanceof A.lh){s=q.a.a.fr
s===$&&A.v()
s=s.fg(a.a,a.b).W(new A.v0(),t.V)
break A}if(a instanceof A.li){s=q.a.a.fr
s===$&&A.v()
s=s.ej(a.a,a.b).W(new A.v2(),t.V)
break A}if(a instanceof A.lS){s=q.u9(a.a)
break A}if(a instanceof A.mh){s=q.ju(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.mi){s=q.jv(a.a,a.b)
break A}if(a instanceof A.mn){s=q.hq(a.a)
break A}if(a instanceof A.mg){s=q.jt(a.a)
break A}if(a instanceof A.mw){s=q.a.a.fx
s===$&&A.v()
s=s.d1(a.c,a.b,a.a).W(new A.v3(q),t.V)
break A}if(a instanceof A.mq){s=q.hr(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.mk){s=q.jw(a.a,a.b)
break A}if(a instanceof A.mj){s=q.ho(a.a)
break A}if(a instanceof A.mt){s=q.a.a.fx
s===$&&A.v()
s=s.fQ(0,a.c,a.d,a.b,a.e,a.a).W(new A.v4(),t.V)
break A}if(a instanceof A.ml){s=q.hp(a.a,a.b,a.c,a.d)
break A}if(a instanceof A.mo){s=q.a.a.fx
s===$&&A.v()
s=s.bo(A.bX(0,a.a,0),A.bX(0,a.b,0)).W(new A.v5(),t.V)
break A}if(a instanceof A.ma){s=q.a.a.fx
s===$&&A.v()
s=s.cV(a.a).W(new A.v6(),t.V)
break A}if(a instanceof A.nQ){s=q.a.a.fx
s===$&&A.v()
s=s.git().W(new A.v7(),t.V)
break A}if(a instanceof A.o3){s=q.eh(a.a,a.b,a.c)
break A}if(a instanceof A.o8){s=q.cP().W(new A.v8(),t.V)
break A}if(a instanceof A.nZ){s=q.hJ()
break A}if(a instanceof A.o_){s=q.eg(new A.v9(q))
break A}if(a instanceof A.o1){s=q.eg(new A.va(q))
break A}if(a instanceof A.o9){s=q.hK(a.a)
break A}s={}
s.a=null
if(a instanceof A.o2){s.a=a.a
s=q.eg(new A.vb(s,q))
break A}if(a instanceof A.o6){s=q.ax
s=A.bi(new A.o7(s==null?B.dZ:s),t.V)
break A}throw A.b(A.e3(u.P))}return s},
hy(a,b){return this.rK(a,b)},
rK(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hy=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.fy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.qI(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:h=n.f
h===$&&A.v()
s=9
return A.a(h.aW(j),$async$hy)
case 9:s=7
break
case 8:g=m.h(0,i)
if(g==null)A.u(A.A('No store "'+i+'" registered in this LocalPocket.'))
f=g.c
e=A.E0(j)
d=new A.a6("")
A.cp(d,f.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.ca()
b=A.d3(c)
b.u(0,h)
b.q()
b=A.au(c.a.a)
d=new A.a6("")
A.cp(d,e.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.ca()
a=A.d3(c)
a.u(0,h)
a.q()
if(b!==A.au(c.a.a))throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){g=m.h(0,i)
if(g==null)A.u(A.A('No store "'+i+'" registered in this LocalPocket.'))
d=new A.a6("")
A.cp(d,g.c.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.ca()
b=A.d3(c)
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
return A.f($async$hy,r)},
he(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$he=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bH(B.b.gH(m.b.oS("PRAGMA journal_mode")).gaX())
m=m.a.fx
m===$&&A.v()
s=3
return A.a(m.git(),$async$he)
case 3:o=b
m=l.e===B.aF
n=m?"opfs":"file"
q=new A.iA(l.a,l.b,l.c,l.d,m,n,o,J.Z(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
dX(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.aw(a)
if(b!=null){s=this.dr(b)
r=A.FF(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.u(A.A('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.dr(b)
return new A.fE(n,m,new A.iP(q),p.r)}return new A.fE(n,m,o.gbx(),null)},
q1(a){return this.dX(a,null)},
rq(a,b,c){return this.bH(c,new A.uz(this,a,c,b),new A.uA())},
bC(a,b){var s
A.au(B.m.v(B.e.v(A.ak(this.a.a.aw(a).c.p()))).a)
if(a.length===0)A.u(A.aD(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.u(A.aD(s,"spec.limit","must not be negative"))
return new A.xA(a,b)},
bi(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.dX(a.a,a0),c=t.fC,b=new A.no(d.a,d.b.a,d.c.b,A.l([],c),A.l([],c),A.l([],t.k),A.l([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s)b=this.pI(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.p)(d),++s){o=d[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bk)throw A.b(A.I('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.x8(n)}j=e.c
if(j!=null){d=A.D7(j)
b.kb(d)
A.Et(d)
i=A.Ca(d,!0)
h=b.hh()
h.d.push(new A.b8(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s,b=h){g=d[s]
q=g.a
b.df(q)
h=b.hh()
h.r.push(new A.cw(q,g.b))}d=e.r
if(d!=null)b=b.lI(A.bP(d,!0,r))
if(e.w)b=b.qi(!0)
if(e.x)b=b.qj(!0)
if(e.f)b=b.qg(!0)
else{d=e.e
if(d!=null){if(d<0)A.u(A.I("Limit must be non-negative, got "+A.r(d)+".",f))
b=b.qk(d)}}return b},
pI(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.nV(0,b.a,!0)
return a.yd(0,b.a,s)
case 1:return a.yk(0,b.a,b.c)
case 2:return a.ye(0,b.a,b.c)
case 3:return a.yf(0,b.a,b.c)
case 4:return a.yi(0,b.a,b.c)
case 5:return a.yj(0,b.a,b.c)
case 6:return a.yg(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.j
if(r.length!==2)throw A.b(A.U("between requires exactly two values.",null))
return a.ya(0,b.a,new A.a_(r[0],r[1]))
case 8:return a.yl(0,b.a,A.a3(b.c))
case 9:return a.yc(0,b.a,A.a3(b.c))
case 10:return a.yb(0,b.a,A.a3(b.c))
case 11:return a.nV(0,b.a,!0)
case 12:return a.yh(0,b.a,!0)}},
rM(a,b,c){return this.bH(c,new A.uB(this,this.bC(a,b),c),new A.uC())},
ty(a,b,c){return this.bH(c,new A.uF(this,a,c,b),new A.uG())},
pM(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.A("A transaction session is already active on this database."))
s="tx"+ ++l.ay
r=$.B
q=t.D
p=t.Q
o=new A.w(r,q)
n=new A.pC(s,new A.aG(new A.w(r,q),p),new A.aG(o,p),A.l([],t.mc),new A.aI(Date.now(),0,!1))
k.j(0,s,n)
l.qB()
m=l.a.a
k=new A.un(n)
if(a){if(A.oj(m)!=null)A.u(A.A(u.L))
r=m.b
r===$&&A.v()
k=r.xx(k,t.H)}else{r=b===B.bu?B.b0:B.q
r=m.b3(k,r,t.H)
k=r}n.w!==$&&A.dE()
n.w=k
k.ki(new A.ul(l,n,s))
return o.W(new A.um(s),t.V)},
fd(a,b){return this.tH(a,b)},
tH(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$fd=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.dr(a)
for(l=h.e,k=A.a1(l).i("bE<1>"),l=new A.bE(l,k),l=new A.as(l,l.gm(0),k.i("as<a0.E>")),k=k.i("a0.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.u(A.A("Future already completed"))
j.aH(null)}h.f=!b
h.c.ak()
p=4
l=h.w
l===$&&A.v()
s=7
return A.a(l,$async$fd)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.C(g) instanceof A.fh){if(b)throw g}else throw g
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
return A.f($async$fd,r)},
hH(a,b){return this.tv(a,b)},
tv(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.dr(a)
n=$.B
m=t.D
l=t.Q
k=new A.w(n,m)
j=new A.i_(b,new A.aG(new A.w(n,m),l),new A.aG(k,l))
l=o.r.a1(new A.uE(j),t.H)
j.f!==$&&A.dE()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hH)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
hG(a,b){return this.tt(a,b)},
tt(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hG=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.dr(a).e
f=B.b.nk(g,new A.uD(b))
if(f<0)throw A.b(A.A('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a1(g).i("bE<1>")
l=A.O(new A.bE(g,l),l.i("a0.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.c5(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.u(A.A("Future already completed"))
i.aH(null)
p=7
i=m.f
i===$&&A.v()
s=10
return A.a(i,$async$hG)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.C(e) instanceof A.fh))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:B.b.iR(g,f,g.length)
q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hG,r)},
hE(a,b){return this.tk(a,b)},
tk(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hE=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.dr(a).e
j=A.FF(k)
if(j==null||j.a!==b)throw A.b(A.A('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.ak()
p=4
m=j.f
m===$&&A.v()
s=7
return A.a(m,$async$hE)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.C(i) instanceof A.fh)throw i
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
return A.f($async$hE,r)},
hP(a,b){return this.ua(a,b)},
ua(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.aw(a)
s=3
return A.a(p.q1(a).bR(b),$async$hP)
case 3:o="w"+ ++p.ay
n=A.oS()
n.sic(new A.nb(l,b,m,B.b1).j7().nt(new A.uK(p,o),new A.uL(p,n,o)))
p.f.j(0,o,n.aE())
q=A.bi(new A.hH(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
u8(a,b){var s=this,r="w"+ ++s.ay,q=s.bi(s.bC(a,b),null),p=A.oS()
p.sic(new A.nr(q,q.ged(),B.b1).j7().nt(new A.uM(s,r),new A.uN(s,p,r)))
s.f.j(0,r,p.aE())
return A.bi(new A.hH(r),t.V)},
ka(a){return this.tZ(a)},
tZ(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$ka=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.G(0,a)
if(o!=null)o.A()
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ka,r)},
qC(){if(this.w!=null)return
this.w=A.yz(A.bX(9e8,0,0),new A.uu(this))},
ju(a,b,c,d,e,f,g){return this.qL(a,b,c,d,e,f,g)},
qL(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$ju=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.qC()
o=p.r
n="u"+ ++p.ay
o.nf()
m=o.r
if(m.a>=16)A.u(A.I("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.u(A.I("Invalid file size: "+c,null))
if(o.gnP()+c>536870912)A.u(A.I("Aggregate upload quota exceeded: "+o.gnP()+" + "+c+" > 536870912",null))
o=o.f.$0().jf(18e8)
m.j(0,n,new A.cP(n,a,b,d,e,c,f,g,A.l([],t.bs),o))
q=new A.mv("u"+p.ay,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ju,r)},
jv(a,b){return this.qM(a,b)},
qM(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$jv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.u(A.I("Unknown upload session: "+a,null))
l=l.f
if(!j.z.kI(l.$0())){k.G(0,a)
A.u(A.I("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.G(0,a)
A.u(A.I("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.G(0,a)
A.u(A.I("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().jf(18e8)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jv,r)},
hq(a){return this.qQ(a)},
qQ(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.G(0,a)
if(g==null)A.u(A.I("Unknown upload session: "+a,null))
if(!g.z.kI(h.f.$0()))A.u(A.I("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.u(A.I("Upload size mismatch: expected "+o+" but got "+h,null))
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
return A.a(h.du(g.w,l,i,o,k,j,m,n),$async$hq)
case 3:q=new f.iR(p.jx(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
jt(a){return this.qK(a)},
qK(a){var s=0,r=A.h(t.V),q,p=this
var $async$jt=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.G(0,a)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jt,r)},
hr(a,b,c,d,e){return this.qS(a,b,c,d,e)},
qS(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$hr=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.fx
k===$&&A.v()
s=3
return A.a(k.fI(c,d,b,e,a),$async$hr)
case 3:o=g
n="f"+ ++p.ay
m=new A.mm(new A.aI(Date.now(),0,!1))
m.c=new A.aI(Date.now(),0,!1)
l=A.oS()
l.sic(o.bz(new A.uw(p,m,n,l),new A.ux(p,n),new A.uy(p,n)))
k=l.aE()
m.d!==$&&A.dE()
m.d=k
p.x.j(0,n,m)
p.qA()
q=new A.mr(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
hp(a,b,c,d){return this.qP(a,b,c,d)},
qP(a,b,c,d){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hp=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.ee().x
o===$&&A.v()
n=A
s=3
return A.a(o.dz(c,b,d,a),$async$hp)
case 3:q=new n.iR(p.jx(f))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
jw(a,b){return this.qO(a,b)},
qO(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$jw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.A('Unknown file stream "'+a+'".'))
if((n.b-=b)<0)n.b=0
n.c=new A.aI(Date.now(),0,!1)
if(n.b<1048576){o=n.d
o===$&&A.v()
o.b_()}q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jw,r)},
qA(){if(this.y!=null)return
this.y=A.yz(A.bX(45e7,0,0),new A.uq(this))},
ho(a){return this.qN(a)},
qN(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$ho=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.G(0,a)
s=n!=null?3:4
break
case 3:o=n.d
o===$&&A.v()
s=5
return A.a(o.A(),$async$ho)
case 5:case 4:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
jx(a){return new A.ms(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
eh(a,b,c){return this.tR(a,b,c)},
tR(a,b,c){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$eh=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.I("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cP(),$async$eh)
case 3:if(b==null||b.length===0)throw A.b(A.I("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.B9(c)
m=A.oq(a)
l=o.fy
k=A.n(l).i("S<1>")
l=A.O(new A.S(l,k),k.i("o.E"))
s=4
return A.a(o.ax.cS(m,b,l,n),$async$eh)
case 4:j=a1
m=A.dq(null,null,t.n6)
l=A.dq(null,null,t.kf)
k=t.H
i=A.bi(null,k)
h=new A.qc(A.bi(null,k))
g=A.bi(B.O,t.fD)
f=A.l([],t.s)
k=A.bi(null,k)
e=new A.yk(A.Pd(),o.db)
d=new A.nY(o,j,e,new A.uH(p),B.N,m,l,i,h,A.aP(t.N),g,f,k)
k=d.e=new A.yx(o,j.gl8())
f=new A.tf(o,j,e,o.CW)
d.x=f
m=new A.xb(o,j,e,k,f,h)
d.f=m
d.r=new A.yi(o,j,e,k,m)
m=j.gi1()
d.w!==$&&A.dE()
d.w=new A.xk(o,j,e,d.gru(),m.a)
p.as=n
p.Q=d
m=d.ay
p.at=new A.aX(m,A.n(m).i("aX<1>")).aZ(new A.uI(p))
s=5
return A.a(d.aC(),$async$eh)
case 5:q=new A.o4(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eh,r)},
ee(){var s=this.Q
return s==null?A.u(A.I("Sync is not started.",null)):s},
hJ(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.ee()
o.cj("cycle")
n=A
s=3
return A.a(o.fa(),$async$hJ)
case 3:q=new n.o0(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
eg(a){var s=0,r=A.h(t.V),q
var $async$eg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$eg)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
hK(a){return this.tS(a)},
tS(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.as
n=p.ee()
if(o==null)throw A.b(A.I("Sync is not started.",null))
o.a=a
s=3
return A.a(n.eB(),$async$hK)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
cP(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.Q
q.Q=null
p=q.at
p=p==null?null:p.A()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bF(p,o),$async$cP)
case 2:q.at=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aL(),$async$cP)
case 5:p=q.a.a.ax.cT(n)
s=6
return A.a(p,$async$cP)
case 6:case 4:q.ax=q.as=null
return A.e(null,r)}})
return A.f($async$cP,r)},
jm(a){return new A.lN(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
u9(a){var s=this,r="w"+ ++s.ay,q=s.a.a.fr
q===$&&A.v()
s.f.j(0,r,q.y9(a).aZ(new A.uJ(s,r)))
return A.bi(new A.hH(r),t.V)},
dr(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.A('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.A('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aI(Date.now(),0,!1)
return s},
qB(){var s,r,q=this
if(q.e!=null)return
s=q.a.ay
r=s.a
if(r<=0)return
q.e=A.yz(A.bX(B.c.M(r,4),0,0),new A.ut(q,s))},
hQ(a,b,c){return this.ue(a,b,c)},
bH(a,b,c){return this.hQ(a,b,c,t.z)},
ue(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.dr(a)
o=c
s=3
return A.a(b.$0(),$async$hQ)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cP(),$async$q)
case 2:p=q.f,o=new A.aZ(p,p.r,p.e,A.n(p).i("aZ<2>"))
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
for(p=q.x,o=new A.aZ(p,p.r,p.e,A.n(p).i("aZ<2>"));o.k();){n=o.d.d
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
return this.b.dX(s.c,s.a).bR(s.b)},
$S:197}
A.uR.prototype={
$1(a){return new A.hj(a)},
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
return A.a(l.dX(o.c,o.a).bR(j),$async$$0)
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
$1(a){return new A.hk(a)},
$S:207}
A.vd.prototype={
$0(){var s=this.b,r=this.a
return s.bi(s.bC(r.c,r.b),r.a).i2()},
$S:59}
A.ve.prototype={
$0(){var s=this.b,r=this.a
return s.bi(s.bC(r.d,r.b),r.a).i4(r.c)},
$S:59}
A.vf.prototype={
$0(){var s=this.b,r=this.a
return s.bi(s.bC(r.d,r.b),r.a).i8(r.c)},
$S:210}
A.vg.prototype={
$0(){var s=this.b,r=this.a
return s.bi(s.bC(r.c,r.b),r.a).is()},
$S:54}
A.vh.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.bi(s.bC(q.e,q.b),q.a).de("SUM",q.c)
break
case 1:s=r.b
q=s.bi(s.bC(q.e,q.b),q.a).de("AVG",q.c)
break
case 2:s=r.b
q=s.bi(s.bC(q.e,q.b),q.a).de("MIN",q.c)
break
case 3:s=r.b
q=s.bi(s.bC(q.e,q.b),q.a).de("MAX",q.c)
break
default:q=null}return q},
$S:226}
A.vi.prototype={
$0(){var s=this.b,r=this.a
return s.bi(s.bC(r.c,r.b),r.a).i9()},
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
$1(a){return new A.hc(a)},
$S:231}
A.uW.prototype={
$1(a){return new A.fF(a)},
$S:235}
A.uX.prototype={
$1(a){return B.l},
$S:8}
A.uY.prototype={
$1(a){var s,r,q=A.l([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jm(s.gn()))
return new A.fH(q)},
$S:250}
A.uZ.prototype={
$1(a){return new A.fG(a==null?null:this.a.jm(a))},
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
for(s=J.E(a),r=this.a;s.k();)q.push(r.jx(s.gn()))
return new A.fS(q)},
$S:79}
A.v4.prototype={
$1(a){return B.l},
$S:8}
A.v5.prototype={
$1(a){return new A.fR(a)},
$S:80}
A.v6.prototype={
$1(a){return new A.fP(a)},
$S:81}
A.v7.prototype={
$1(a){return new A.ht(a)},
$S:82}
A.v8.prototype={
$1(a){return B.l},
$S:8}
A.v9.prototype={
$0(){return this.a.ee().b7()},
$S:3}
A.va.prototype={
$0(){return this.a.ee().b_()},
$S:3}
A.vb.prototype={
$0(){return this.b.ee().h7(this.a.a)},
$S:3}
A.uz.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dX(p.b,a1)
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
return A.a(a2.iL(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.iC(B.a1,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.u
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
return A.a(a2.nS(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.iC(B.a2,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.u
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
return A.a(a2.nC(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.nD(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
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
return A.a(a2.nT(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bL(i,B.a2),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
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
return A.a(a2.nz(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.xd(b,c,!1),$async$$0)
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
return A.a(a2.nA(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.d6(a),$async$$0)
case 44:case 41:a0=A.n(a).i("S<1>")
a0=A.O(new A.S(a,a0),a0.i("o.E"))
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
return A.a(a2.mU(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.iB(B.C,b),$async$$0)
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
return A.a(a2.nM(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.iB(B.D,b),$async$$0)
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
return A.a(a2.iK(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dG(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.e3(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:54}
A.uA.prototype={
$1(a){return new A.h2(a)},
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
return A.a(o.bi(m,n).ql(!0,k).cW(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.bi(m,n).qh(k).cW(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.bi(m,p.c).cW()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:84}
A.uC.prototype={
$1(a){return new A.hg(a.a,a.d,a.e,a.b,a.c)},
$S:85}
A.uF.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dX(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.xT(m,l,o.c.b,n.a)
if(l.w==null)A.u(A.tA('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.y.d)A.u(A.tA(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.u(A.I("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cW()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:77}
A.uG.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.nD(r.a,r.b))}return new A.hm(q)},
$S:87}
A.un.prototype={
o7(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.ak()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.b_)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.o7(a)},
$S:4}
A.ul.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.G(0,this.c)
s.bw(a,b)}},
$S:6}
A.um.prototype={
$1(a){return new A.hA(this.a)},
$S:89}
A.uE.prototype={
$1(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.H),q=this,p
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
$1(a){return this.a.r.nf()},
$S:30}
A.uv.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bh(A.dy(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:case 1:return A.bh(null,0,r)
case 2:return A.bh(o.at(-1),1,r)}})
var s=0,r=A.Ez($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.EF(r)},
$S:94}
A.uw.prototype={
$1(a){var s=this,r=new Uint8Array(A.ba(a)),q=s.b
q.b=q.b+r.length
q.c=new A.aI(Date.now(),0,!1)
s.a.b.u(0,new A.fQ(s.c,r,!1,null))
if(q.b>=1048576)s.d.aE().b7()},
$S:11}
A.uy.prototype={
$1(a){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fQ(r,new Uint8Array(0),!0,J.Z(a)))},
$S:21}
A.ux.prototype={
$0(){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fQ(r,new Uint8Array(0),!0,null))},
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
n.A().b2(new A.uo(),new A.up(),q)}},
$S:30}
A.uo.prototype={
$1(a){},
$S:32}
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
for(s=J.E(a);s.k();)q.push(r.jm(s.gn()))
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
if((k.a&30)===0)k.aH(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aH(null)
i.G(0,n.a)
m=n.w
m===$&&A.v()
m.b2(new A.ur(),new A.us(),p)}}},
$S:30}
A.ur.prototype={
$1(a){},
$S:32}
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
for(o=p.a,n=new A.aZ(o,o.r,o.e,A.n(o).i("aZ<2>"));n.k();){m=n.d
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
cA(a){var s,r=this.a,q=r.G(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.G(0,new A.S(r,A.n(r).i("S<1>")).gH(0))
if(s!=null)s.q()}q=this.b.xg(a)
r.j(0,a,q)
return q},
l9(a,b){var s=this.cA(a).la(new A.bY(b)),r=A.n(s).i("Y<M.E,F<j,k?>>")
r=A.O(new A.Y(s,new A.t9(),r),r.i("a0.E"))
return r},
oS(a){return this.l9(a,B.j)},
fs(a,b){this.cA(a).er(new A.bY(b))},
kw(a){return this.fs(a,B.j)},
aJ(a,b){return this.vQ(a,b)},
O(a){return this.aJ(a,B.j)},
vQ(a,b){var s=0,r=A.h(t.H),q=this
var $async$aJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.fs(a,b)
return A.e(null,r)}})
return A.f($async$aJ,r)},
ae(a,b){return this.xw(a,b)},
b8(a){return this.ae(a,B.j)},
xw(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.l9(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ae,r)},
c7(a,b,c,d,e,f,g){return this.xt(a,b,c,d,e,f,g)},
aK(a,b,c,d){return this.c7(a,null,b,null,null,c,d)},
eG(a,b,c,d,e){return this.c7(a,b,c,null,null,d,e)},
nF(a,b,c,d){return this.c7(a,b,null,null,null,c,d)},
bM(a,b,c){var s=null
return this.c7(a,s,s,s,s,b,c)},
xq(a,b,c,d,e){return this.c7(a,null,b,null,c,d,e)},
xp(a,b,c,d,e){return this.c7(a,b,c,d,e,null,null)},
xs(a,b,c,d,e,f){return this.c7(a,b,c,null,d,e,f)},
xo(a,b,c,d){return this.c7(a,null,null,null,b,c,d)},
xt(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$c7=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.C(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.j:g
q=p.ae(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c7,r)},
cr(a,b,c,d){return this.wy(0,b,c,d)},
aF(a,b,c){return this.cr(0,b,c,null)},
wy(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cr=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.U("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("S<1>")
m=t.N
l=A.dX(new A.S(c,n),new A.t8(),n.i("o.E"),m).C(0,", ")
k=B.b.C(A.a9(c.a,"?",!1,m),", ")
j=A.Fs(d)
o=o.i("ao<2>")
o=A.O(new A.ao(c,o),o.i("o.E"))
p.fs("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.aj(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cr,r)},
L(a,b,c,d){return this.y_(a,b,c,d)},
y_(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("S<1>")
m=A.dX(new A.S(b,n),new A.ta(),n.i("o.E"),t.N).C(0,", ")
n="UPDATE"+A.Fs(null)+' "'+a+'" SET '+m
o=A.O(new A.ao(b,o.i("ao<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.D(o,d)}p.fs(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
X(a,b,c){return this.v3(a,b,c)},
v2(a,b){return this.X(a,b,null)},
v3(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$X=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
if(c!=null)B.b.D(n,c)}p.fs(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$X,r)},
uR(a,b,c){this.b.uS(B.bB,!0,!1,new A.t7(b),c)},
a1(a,b){return this.xW(a,b,b)},
xW(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$a1=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:if(n.d)throw A.b(A.dp("Database connection is wedged: an earlier rollback failed and left an open transaction. Reopen the database to recover."))
n.kw("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a1)
case 7:m=e
n.kw("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.C(g)
try{n.kw("ROLLBACK")}catch(f){k=A.C(f)
h=J.Z(k).toLowerCase()
if(!(B.a.E(h,"no transaction is active")||B.a.E(h,"cannot rollback"))){n.d=!0
throw A.b(A.dp("Rollback failed after a transaction error ("+A.r(k)+"); original error: "+A.r(l)+". The database connection is left in an open transaction; reopen to recover."))}}throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a1,r)},
$irH:1}
A.t9.prototype={
$1(a){return A.bs(a,t.N,t.X)},
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
kk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aP(t.N),b=a.a
if(B.a.E(b,"'")||B.a.E(b,'"'))A.u(A.aB('Store name "'+b+"\" must not contain quote characters: a quote would break the FTS content reference and the database adapter's table quoting."))
if(B.a.T(b,"sqlite_")||B.a.T(b,"lp_"))A.u(A.aB('Store name "'+b+'" uses a reserved prefix (sqlite_ is SQLite-owned, lp_ is the engine metadata namespace).'))
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=$.F_()
if(!k.b.test(l))A.u(A.aB('Field "'+l+u.Z))
if(B.aH.E(0,l))throw A.b(A.aB('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aB('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aB(e+l+'" cannot be unique.'))
if(B.b.bl(o,new A.t6(m)))throw A.b(A.aB(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.E(k,l)}else k=!1
if(k)throw A.b(A.aB(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.p)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.as(l,l.gm(0),k.i("as<M.E>")),k=k.i("M.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.E(0,j)&&!B.aH.E(0,j))throw A.b(A.aB('Index column "'+j+'" is not a declared field of store "'+b+'".'))}for(b=l,i=0;i<b;b=r,i=h)for(h=i+1,b=h,g=0;r=o.length,g<r;++g){if(i===g)continue
if(B.aA.V(o[i].a,o[g].a)){if(i<g){r=o[i].a
d.push("Duplicate index columns "+r.l(r)+" (declarations "+b+" and "+(g+1)+").")}}else if(A.JK(o[g].a,o[i].a)&&!o[g].b){r=o[g].a
r=r.l(r)
l=o[i].a
d.push("Index "+r+" is prefix-subsumed by index "+l.l(l)+".")}}if(p){b=f.a
if(!b.d)throw A.b(A.tA(u.r))
if(q.b&&!A.G8(b.a,3,34))throw A.b(A.tA("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+b.a+")."))
for(b=q.a,r=b.$ti,b=new A.as(b,b.gm(0),r.i("as<M.E>")),r=r.i("M.E");b.k();){p=b.d
if(p==null)p=r.a(p)
if(!c.E(0,p))throw A.b(A.aB('FTS field "'+p+'" is not a declared field.'))}for(b=q.c.a.ga0(),b=b.gt(b);b.k();){r=b.gn()
A.FA(r.a,r.b)}}for(b=s.length,n=0;n<b;++n){m=s[n]
r=m.b
if(r===B.J){q=m.f
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aB('Enum field "'+m.a+'" must declare values.'))
if(r===B.K){r=m.r
r=r==null||r.length===0}else r=!1
if(r)throw A.b(A.aB('Ref field "'+m.a+'" must declare its target store.'))}return new A.qZ(f.pV(a),f.pU(a),f.pT(a),d)},
pV(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.D(n,'"',i)+'"')+" "+o.gle()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.J&&q){k=o.f
k.toString
j=new A.Y(k,new A.t5(),A.a1(k).i("Y<1,j>")).C(0,", ")
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
pU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=m.b
j=l.$ti.i("Y<M.E,j>")
i=A.O(new A.Y(l,A.pZ(),j),j.i("a0.E"))
if(!k&&!l.E(l,"id"))i.push('"'+A.D("id",e,d)+'"')
h=m.c===B.b6?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.C(l,"_")
l=A.D(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.D(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}else{l=l.C(l,"_")
l=A.D(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.D(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.p)(r),++n){g=r[n]
if(g.b!==B.K)continue
if(B.b.bl(s,new A.t4(g)))continue
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
pT(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.u
s=a0.a
if(s.gm(0)===0)throw A.b(A.aB("FTS requires at least one field to index."))
r=A.l([],t.s)
q=a1.a
p=q+"_fts"
o=s.$ti.i("Y<M.E,j>")
n=A.O(new A.Y(s,A.pZ(),o),o.i("a0.E"))
m=new A.t3(q,a0.c)
l=new A.Y(s,new A.t0(m),o).C(0,f)
k=new A.Y(s,new A.t1(m),o).C(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
r.push("CREATE VIRTUAL TABLE "+('"'+A.D(p,e,d)+'"')+" USING fts5(\n  "+B.b.C(n,f)+",\n  content = '"+q+"',\n  content_rowid = 'rowid'\n"+j)
s=A.D(q+"_ai",e,d)
o=A.D(q,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.D(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
s=A.D(q+"_ad",e,d)
o=A.D(q,e,d)
m=A.D(p,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.D(p,e,d)+'"')+", rowid, "+B.b.C(n,f)+a+k+");\nEND;")
i=new A.Y(n,new A.t2(),A.a1(n).i("Y<1,j>")).C(0," OR ")
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
$2(a,b){return A.EQ(this.a,this.b,a,b)},
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
l(a){return A.d7(this).l(0)+": "+this.a},
$iH:1}
A.eb.prototype={}
A.hC.prototype={}
A.h6.prototype={}
A.iE.prototype={}
A.jF.prototype={}
A.iV.prototype={}
A.dn.prototype={}
A.jN.prototype={}
A.jL.prototype={}
A.jQ.prototype={}
A.hl.prototype={}
A.k2.prototype={}
A.iW.prototype={}
A.jX.prototype={}
A.jh.prototype={}
A.iG.prototype={}
A.fK.prototype={}
A.jK.prototype={}
A.iP.prototype={}
A.bq.prototype={}
A.te.prototype={
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
o=A.a3(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.G(n)
m=A.aY(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.aY(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bq(j,s,r,q,p,o,n,m,l,A.a3(k.h(0,"last_error")))},
$S:52}
A.vs.prototype={
gms(){return this.b},
git(){var s=0,r=A.h(t.y),q,p=this
var $async$git=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.gfB()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$git,r)},
lX(a,b){return b},
d1(a,b,c){return this.wG(a,b,c)},
wG(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$d1=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.v()
n=J
s=3
return A.a(o.gbx().b.bM("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.lX(c,a)]),$async$d1)
case 3:o=n.bI(e,A.Oz(),t.A)
o=A.O(o,o.$ti.i("a0.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d1,r)},
du(a,b,c,d,e,f,g,h){return this.uB(a,b,c,d,e,f,g,h)},
uB(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$du=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gms()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.gfB(),$async$du)
case 5:j=!j
case 4:if(j)throw A.b(A.A("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.lX(h,e)
s=6
return A.a(l.cw(b,c,d),$async$du)
case 6:n=j
s=7
return A.a(l.bq(n),$async$du)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a1(new A.vt(p,h,g,o,n,m,A.ij(),f),t.A),$async$du)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$du,r)},
fI(a,b,c,d,e){return this.x0(a,b,c,d,e)},
x0(a,b,c,d,e){var s=0,r=A.h(t.v),q,p=this,o,n,m,l,k,j
var $async$fI=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d1(a,c,e),$async$fI)
case 3:k=g
j=J.J(k)
if(j.gF(k))throw A.b(A.A("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.cp(k,new A.vv(d),new A.vw(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(new A.jN("File is remote_only; call files.download(ref) to fetch its bytes, or enable prefetchFiles on the store and sync."))
n=p.gms()
j=p.a
m=j.a
m===$&&A.v()
m=m.gbx()
j=j.db.$0()
l=o.e
s=4
return A.a(m.b.aJ("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,l]),$async$fI)
case 4:q=n.d4(l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
fQ(a,b,c,d,e,f){return this.xI(0,b,c,d,e,f)},
xI(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fQ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d1(b,d,f),$async$fQ)
case 3:n=h
m=J.J(n)
if(m.gF(n)){s=1
break}o=e!=null?m.cp(n,new A.vx(e),new A.vy(e)):m.h(n,c)
s=4
return A.a(p.a.a1(new A.vz(p,o,f,d,b),t.P),$async$fQ)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
bo(a,b){return this.oH(a,b)},
oH(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bo=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.en(a8),$async$bo)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.db.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a1(new A.vu(a2,n),t.P),$async$bo)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fC(),$async$bo)
case 13:l=b0
s=J.d8(l)?14:15
break
case 14:k=0
j=A.aP(t.N)
d=t.s
case 16:c=e.a
c===$&&A.v()
s=18
return A.a(c.gbx().b.xp("lp_blobs",A.l(["hash"],d),250,k,"hash ASC"),$async$bo)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.T(h,"hash")
b.toString
J.aN(j,A.G(b))}if(J.an(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.Dr(j,g)){s=19
break}p=22
b=new A.w($.B,c)
b.aH(null)
s=25
return A.a(b,$async$bo)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.dw(g),$async$bo)
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
return A.a(b.gbx().b.xs("lp_blobs",A.l(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bo)
case 29:a0=b0
b=J.J(a0)
if(b.gF(a0)){s=28
break}b=b.gt(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.G(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.dw(a1),$async$bo)
case 34:case 33:s=35
return A.a(d.X("lp_blobs","hash = ?",[a1]),$async$bo)
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
return A.f($async$bo,r)},
cV(a){return this.vL(a)},
vL(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.v()
d=A
s=3
return A.a(e.gbx().b.b8("SELECT SUM(size) as total FROM lp_blobs"),$async$cV)
case 3:o=d.fp(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.x,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbx().b.b8("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cV)
case 6:k=c
j=J.J(k)
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
A.aj(i)
s=9
return A.a(g.dw(h),$async$cV)
case 9:s=10
return A.a(e.gbx().b.L("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$cV)
case 10:s=11
return A.a(f.X("lp_blobs","hash = ?",[h]),$async$cV)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cV,r)}}
A.vt.prototype={
$1(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$$1=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:k=a.b
j=p.a.a.db.$0()
i=t.s
h=p.b
g=p.c
f=p.d
e=p.e
s=3
return A.a(k.eG("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],i),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[h,g,f,e]),$async$$1)
case 3:d=a0
c=J.J(d)
if(c.gS(d)){q=A.Fw(c.gH(d))
s=1
break}s=4
return A.a(A.iq(k,e,j,p.f),$async$$1)
case 4:s=5
return A.a(k.eG("lp_outbox",A.l(["op_id","base_updated"],i),1,"store = ? AND record_id = ?",[h,g]),$async$$1)
case 5:o=a0
i=J.J(o)
n=i.gS(o)&&J.T(i.gH(o),"base_updated")==null?A.a3(J.T(i.gH(o),"op_id")):null
i=p.r
c=t.N
m=t.X
s=6
return A.a(k.cr(0,"lp_file_refs",A.m(["ref_id",i,"store",h,"record_id",g,"field",f,"hash",e,"remote_name",null,"state","pending_upload"],c,m),B.T),$async$$1)
case 6:l=A.ij()
s=7
return A.a(k.aF(0,"lp_op_queue",A.m(["op_id",l,"store",h,"record_id",g,"kind","fileUpload","payload_json",B.h.a9(A.m(["ref_id",i,"field",f,"hash",e,"name",p.w],c,c),null),"state","pending","depends_on_op",n,"created_at",j],c,m)),$async$$1)
case 7:a.a2(new A.a5(h,A.ap([g],c)))
q=new A.bq(i,h,g,f,e,null,"pending_upload",0,0,null)
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
$1(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aF(0,"lp_op_queue",A.m(["op_id",A.ij(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a9(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.jv),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a2(new A.a5(q.c,A.ap([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vu.prototype={
$1(a){return this.oa(a)},
oa(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
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
A.G(j)
k=k.h(0,"hash")
k.toString
A.G(k)
s=7
return A.a(i.X("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aJ(u.y,[k]),$async$$1)
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
A.cP.prototype={}
A.ts.prototype={
gnP(){var s=this.r
return new A.ao(s,A.n(s).i("ao<2>")).w4(0,0,new A.tv())},
nf(){var s,r=this.r,q=A.n(r).i("ao<2>"),p=q.i("cv<o.E,j>"),o=A.O(new A.cv(new A.aq(new A.ao(r,q),new A.tt(this.f.$0()),q.i("aq<o.E>")),new A.tu(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.p)(o),++s)r.G(0,o[s])
return p}}
A.tv.prototype={
$2(a,b){return a+b.f},
$S:107}
A.tt.prototype={
$1(a){return!a.z.kI(this.a)},
$S:108}
A.tu.prototype={
$1(a){return a.a},
$S:109}
A.mm.prototype={}
A.qq.prototype={}
A.fB.prototype={
l(a){return"BlobMissingError: "+this.a},
$iH:1}
A.ix.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iH:1}
A.nT.prototype={}
A.D8.prototype={
$1(a){return B.b.D(this.a,a)},
$S:110}
A.iS.prototype={}
A.tf.prototype={
bB(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bB=A.c(function(b6,b7){if(b6===1){o.push(b7)
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
return A.a(a3.fp(25),$async$bB)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.bf?10:12
break
case 10:s=13
return A.a(n.cJ(i,b2),$async$bB)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.nw(i.b),$async$bB)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.bg?17:18
break
case 17:s=19
return A.a(n.f4(i),$async$bB)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.nw(i.b),$async$bB)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.C(b3)
j=!0
e=i.w+1
d=a5.n7(e)
a8=i.b
a9=J.Z(f)
b0=a6.$0()
s=23
return A.a(a3.wR(a8,a9,e,b0+B.c.M(d.a,1000)),$async$bB)
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
return A.a(a2.bM("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bB)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.T(b,"ref_id")
a6.toString
a=A.G(a6)
a6=J.T(b,"record_id")
a6.toString
a0=A.G(a6)
a1=A.a3(J.T(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cU(a0,a,a1,c),$async$bB)
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
return A.f($async$bB,r)},
cJ(a,b){return this.t0(a,b)},
t0(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cJ=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aI(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.G(a1)
l=a0.h(0,"hash")
l.toString
A.G(l)
k=A.a3(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.by(l),$async$cJ)
case 3:if(!a6)throw A.b(A.A("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bq(l),$async$cJ)
case 4:j=a6
if(j==null)throw A.b(A.A("Blob size for hash "+l+" is unavailable"))
m=null
p=6
s=9
return A.a(n.b.aR(a3.d),$async$cJ)
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
if(m!=null){g=B.a.B(l,0,B.c.bu(l.length,0,10))
for(f=m.e,e=f.length,d=g.length!==0,c=0;c<e;++c){b=f[c]
if(d&&B.a.T(b,g)||B.a.T(b,k)){h=b
break}}}a.a=null
s=h!=null?10:12
break
case 10:a.a=h
s=11
break
case 12:s=13
return A.a(n.b.cb(a3.d,A.m([k,new A.hu(k,j,new A.th(a4,l))],t.N,t.h3)),$async$cJ)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga_(l):k
case 11:s=14
return A.a(n.a.a1(new A.ti(a,a1,a3),t.P),$async$cJ)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cJ,r)},
f4(a){return this.t_(a)},
t_(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$f4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aI(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.G(l)
o=A.a3(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.G(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.eN(a.d,A.l([o],t.s)),$async$f4)
case 5:case 4:s=6
return A.a(p.a.a1(new A.tg(l,n,a),t.P),$async$f4)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
cU(a,b,c,d){return this.vB(a,b,c,d)},
vB(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l
var $async$cU=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.d
l=o
s=4
return A.a(p.b.bI(c,a,null),$async$cU)
case 4:s=3
return A.a(l.iL(f),$async$cU)
case 3:n=f
s=5
return A.a(o.bq(n),$async$cU)
case 5:m=f
if(m==null)m=0
s=6
return A.a(p.a.a1(new A.tj(n,m,p.c.ay.$0(),c,b,d,a),t.P),$async$cU)
case 6:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cU,r)},
dz(a,b,c,d){return this.vE(a,b,c,d)},
vE(a,b,c,d){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i
var $async$dz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:k=p.a
j=k.fx
j===$&&A.v()
s=3
return A.a(j.d1(a,b,d),$async$dz)
case 3:o=f
n=J.J(o)
if(n.gF(o))throw A.b(A.jM("No file references for "+d+"/"+b+"/"+a+"."))
m=c!=null?n.cp(o,new A.tk(c),new A.tl(c,d,b,a)):n.cp(o,new A.tm(),new A.tn(o))
i=J
s=4
return A.a(k.x.aK("lp_blobs",1,"hash = ?",[m.e]),$async$dz)
case 4:if(i.d8(f)&&m.r!=="remote_only"){q=m
s=1
break}l=m.f
if(l==null)throw A.b(A.I("File "+m.a+" in "+d+"/"+b+"/"+a+" has no remote filename recorded and cannot be downloaded (state: "+m.r+"). Only remotely-known attachments are downloadable.",null))
s=5
return A.a(p.cU(b,m.a,l,d),$async$dz)
case 5:i=J
s=6
return A.a(j.d1(a,b,d),$async$dz)
case 6:q=i.J8(f,new A.to(m),new A.tp(m))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
dE(a,b,c,d){return this.wY(a,b,c,d)},
wY(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dE=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.bM("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dE)
case 2:e=a5
d=A.mV(a2,A.a1(a2).c)
c=J.ax(e)
b=t.B
a=A.c0(new A.ed(c.cu(e,new A.tq(),t.jv),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.fy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.E(0,k)?6:7
break
case 6:j=A.ij()
i=n.h(0,a3)
if(i==null)A.u(A.A(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cr(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.ch),$async$dE)
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
A.G(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.X("lp_file_refs","ref_id = ?",[p]),$async$dE)
case 11:f=A.a3(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.T(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aJ(u.y,[f]),$async$dE)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dE,r)}}
A.th.prototype={
$0(){return this.a.d4(this.b)},
$S:111}
A.ti.prototype={
$1(a){return this.o3(a)},
o3(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a2(new A.a5(p.c,A.ap([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tg.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.X("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aJ(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a2(new A.a5(p.c,A.ap([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tj.prototype={
$1(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.iq(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a2(new A.a5(q.f,A.ap([q.r],p)))
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
$S:112}
A.De.prototype={
$1(a){if(typeof a!="string")return a
return this.a.eE(a)},
$S:42}
A.vj.prototype={
gbx(){var s=this.c
return s===$?this.c=new A.iP(this.b):s}}
A.nR.prototype={}
A.wV.prototype={
bR(a){var s,r=this.a
if(!r.I(a))return null
s=r.G(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.pQ(s)
r.toString
t.G.a(r)}return r},
lb(a,b){var s,r=this.a
if(r.a>=256)r.G(0,new A.S(r,A.n(r).i("S<1>")).gH(0))
if(b==null)s=null
else{s=A.pQ(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
wz(a){var s,r,q,p=a.a
if(p===0){this.a.aq(0)
return}s=this.a
if(p>=s.a){s.aq(0)
return}for(p=A.dz(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.G(0,q==null?r.a(q):q)}}}
A.mQ.prototype={
aw(a){var s=this.fy.h(0,a)
if(s==null)throw A.b(A.A('No store "'+a+'" registered in this LocalPocket.'))
return s},
bv(a){var s,r,q=this
if(A.oj(q)!=null)A.u(A.A(u.L))
s=q.aw(a)
r=q.a
r===$&&A.v()
return new A.fE(q,s,r.gbx(),null)},
b3(a,b,c){var s
if(A.oj(this)!=null)A.u(A.A(u.L))
s=this.b
s===$&&A.v()
return s.b3(a,b,c)},
a1(a,b){return this.b3(a,B.q,b)},
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
nQ(a,b){var s=this.a;++s.f.e
return s.b.aJ(a,B.j)},
el(a){return this.ux(a)},
uw(){return this.el(null)},
ux(a){var s=0,r=A.h(t.H),q=this,p
var $async$el=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$el)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.D(a,'"','""')+'"')),$async$el)
case 6:case 3:return A.e(null,r)}})
return A.f($async$el,r)},
fZ(){var s=0,r=A.h(t.H),q=this,p
var $async$fZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fZ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fZ,r)},
iW(){var s=0,r=A.h(t.H),q=this,p
var $async$iW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iW)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iW,r)},
iV(){var s=0,r=A.h(t.H),q=this
var $async$iV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.b.O("VACUUM"),$async$iV)
case 2:return A.e(null,r)}})
return A.f($async$iV,r)},
fM(){return this.xh()},
xh(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a.a.a1(new A.vF(o),t.P),$async$fM)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fM,r)},
d8(a){return this.xS(a)},
xS(a){var s=0,r=A.h(t.H),q=this,p
var $async$d8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a.fy,p=new A.bN(p,p.r,p.e,A.n(p).i("bN<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.ep(p.d,a),$async$d8)
case 4:s=2
break
case 3:s=5
return A.a(q.fM(),$async$d8)
case 5:s=6
return A.a(q.h1(B.cm),$async$d8)
case 6:s=7
return A.a(q.fZ(),$async$d8)
case 7:s=8
return A.a(q.uw(),$async$d8)
case 8:return A.e(null,r)}})
return A.f($async$d8,r)},
h1(a){return this.oI(a)},
oI(a){var s=0,r=A.h(t.H),q=this
var $async$h1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a.a1(new A.vE(q,a),t.P),$async$h1)
case 2:return A.e(null,r)}})
return A.f($async$h1,r)},
ep(a,b){return this.uL(a,b)},
uL(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ep=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.a
h=i.x.$0()
g=h-B.c.M(b.a,1000)
j.a=0
o=i.a
n=o.aw(a).a
m=t.P,i=i.b
case 3:s=5
return A.a(i.ae("SELECT b.id FROM "+('"'+A.D(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",g,250]),$async$ep)
case 5:l=d
if(J.bz(l)){s=4
break}if(A.oj(o)!=null)A.u(A.A(u.L))
k=o.b
k===$&&A.v()
s=6
return A.a(k.b3(new A.vD(j,p,l,a,g,n),B.q,m),$async$ep)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ep,r)}}
A.vF.prototype={
$1(a){return this.oe(a)},
oe(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b8("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
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
A.vE.prototype={
$1(a){return this.od(a)},
od(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
s=2
return A.a(p.v2("lp_op_queue","state = 'done'"),$async$$1)
case 2:s=3
return A.a(p.X("lp_dead_letter","at < ?",[q.a.a.x.$0()-B.c.M(q.b.a,1000)]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vD.prototype={
$1(a){return this.oc(a)},
oc(a1){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a=a1.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=t.X,k=a1.c,j=a1.a.Q,i=q.e,h=q.f,g=q.b.a,f=g.Q,g=g.as
case 2:if(!p.k()){s=3
break}e=p.gn().h(0,"id")
e.toString
A.G(e)
a0=J
s=4
return A.a(a.ae("SELECT b.id FROM "+('"'+A.D(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,e,"clean",i]),$async$$1)
case 4:if(a0.bz(a3)){s=2
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
return A.a(a.L("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.ap([e],m)
k.push(new A.a5(n,c))
j.r+=c.a
if(b!=null)a1.kt(B.av,e,null,b,B.H,n);++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.w_.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:31}
A.w0.prototype={
$2(a,b){return B.c.a3(a.a,b.a)},
$S:114}
A.vW.prototype={
$1(a){return a.h(0,"name")},
$S:43}
A.vX.prototype={
$1(a){return this.of(a)},
of(a0){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:p=q.b,o=p.length,n=q.c,m=n.a,l=q.d,k=l.cx,l=l.cy,j=t.N,i=t.X,h=0
case 2:if(!(h<p.length)){s=4
break}g=p[h]
f=g.b
e=A.t(j,i)
for(d=g.c.ga0(),d=d.gt(d);d.k();){c=d.gn()
b=c.a
a=A.Ko(n,b)
if(a==null)throw A.b(A.aB('Backfill on "'+m+'" produced unknown field "'+b+'".'))
c=c.b
A.FP(a,c)
e.j(0,b,A.EO(n,a,c,k,l,f))}s=5
return A.a(a0.L(m,e,"rowid = ?",[g.a]),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++h
s=2
break
case 4:s=6
return A.a(A.h_(a0,q.e,B.c.l(q.a.a)),$async$$1)
case 6:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:45}
A.vZ.prototype={
$1(a){return this.og(a)},
og(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.cx,j=j.cy,h=q.e,g=t.ji,f=t.d3,e=q.d.d
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.bU(k,p,i,j)
d=e==null?null:e.$1(o)
if(!f.b(d)){c=new A.w($.B,g)
c.a=8
c.c=d
d=c}s=4
return A.a(d,$async$$1)
case 4:b=a1
n=b==null?o:b
A.Kr(k,n)
d=J.T(o,"id")
d.toString
A.G(d)
m=A.dD(k,J.x(J.T(n,"archived"),!0),i,j,d,n)
s=5
return A.a(a.aF(0,h,m),$async$$1)
case 5:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:45}
A.vY.prototype={
$1(a){return A.EQ(this.a.a,this.b.c,"",a)},
$S:7}
A.w4.prototype={}
A.Dj.prototype={
$2(a,b){var s,r,q=J.Z(a)
if(t.f.b(b))this.a.j(0,q,A.by(b))
else{s=this.a
if(t.j.b(b)){r=J.bI(b,new A.Di(),t.z)
r=A.O(r,r.$ti.i("a0.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:34}
A.Di.prototype={
$1(a){return t.f.b(a)?A.by(a):a},
$S:41}
A.jH.prototype={}
A.x8.prototype={
$1(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.nh),q,p=this,o,n,m,l,k,j,i,h,g,f
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
return A.a(p.a.cZ("resolver",g),$async$$1)
case 3:k=c
if(k==null){q=null
s=1
break}i='resolver "'+n+'"'
j=A.Co(k,i)
i=A.EB(j.h(0,"merged"),i,"merged")
h=J.x(j.h(0,"needsReview"),!0)
if(typeof j.h(0,"note")=="string"){g=j.h(0,"note")
g.toString
A.G(g)}else g=null
q=new A.aR(i,h,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:116}
A.CP.prototype={
$1(a){return a.d!=null},
$S:31}
A.Cg.prototype={
$2(a,b){this.a.j(0,a,A.Ha(b,a,this.c,"field",'field override "'+a+'" of "'+this.b+'"'))},
$S:51}
A.Ch.prototype={
$1(a){return a.b===this.a.h(0,"missingRemote")},
$S:118}
A.Ci.prototype={
$0(){return A.u(A.I('"missingRemote" of "'+this.a+'" is not a known policy: '+A.r(this.b.h(0,"missingRemote")),null))},
$S:16}
A.Cj.prototype={
$1(a){return this.oG(a)},
oG(a){var s=0,r=A.h(t.i),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b
n=A
s=3
return A.a(p.a.cZ("validator",A.m(["store",o,"record",a],t.N,t.X)),$async$$1)
case 3:q=n.Nr(c,'validator of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:119}
A.Cd.prototype={
$1(a){return this.oE(a)},
oE(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c
m=A
s=3
return A.a(p.a.cZ("documentMigration",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.EB(c,"document migration v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.Ce.prototype={
$1(a){return this.oF(a)},
oF(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c.a
m=A
s=3
return A.a(p.a.cZ("migrationTransform",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.EB(c,"migration transform v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.ng.prototype={
xv(a){if(a>this.w)this.w=a},
nH(){return this.f++}}
A.vk.prototype={
uX(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aI(B.o.fl(B.ad.v(a)),null))
i=J.T(s,"store")
h=J.T(s,"schemaVer")
g=J.T(s,"shape")
f=J.T(s,"ir")
q=t.lH
p=q.a(J.T(s,"sort"))
if(p==null)p=B.an
e=A.bP(p,!0,t.N)
r=b?J.T(s,"pv"):J.T(s,"values")
q=q.a(r)
if(q==null)q=B.an
d=A.bP(q,!0,t.X)}catch(o){q=A.E3(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.cd.V(e,n)||J.an(d)!==n.length)throw A.b(A.E3("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.b0(l)&&!A.a8(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.E3(j))}return d}}
A.BD.prototype={
V(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.xA.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.r(s.e)+", backward: "+s.z+")"}}
A.di.prototype={}
A.al.prototype={}
A.cf.prototype={}
A.dG.prototype={}
A.d9.prototype={}
A.b8.prototype={}
A.cw.prototype={}
A.no.prototype={
cL(a,b){var s=this.ged()
s.Q.nH()
return this.c.ae(a,b)},
cf(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bP(i.d,!0,h)
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
hh(){var s=null
return this.cf(s,s,s,s,s,s,s,s,s)},
lI(a){var s=null
return this.cf(s,s,s,s,s,s,s,a,s)},
qi(a){var s=null
return this.cf(s,s,s,a,s,s,s,s,s)},
qj(a){var s=null
return this.cf(s,s,s,s,a,s,s,s,s)},
qg(a){var s=null
return this.cf(a,s,s,s,s,s,s,s,s)},
qk(a){var s=null
return this.cf(s,s,s,s,s,a,s,s,s)},
qm(a,b,c){var s=null
return this.cf(s,s,s,s,s,s,a,b,c)},
ql(a,b){var s=null
return this.cf(s,a,b,s,s,s,s,s,s)},
qh(a){var s=null
return this.cf(s,s,a,s,s,s,s,s,s)},
df(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aB('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.I('Unknown field "'+a+'" for query.',a))},
bn(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.df(a0)
s='"'+A.D(a0,'"','""')+'"'
r=A.l([],t.fC)
q=a4!=null
if(q)r.push(new A.b8(s+" = ?",[a4]))
p=b2!=null
if(p)r.push(new A.b8(s+" <> ?",[b2]))
o=a5!=null
if(o)r.push(new A.b8(s+" > ?",[a5]))
n=a6!=null
if(n)r.push(new A.b8(s+" >= ?",[a6]))
m=b0!=null
if(m)r.push(new A.b8(s+" < ?",[b0]))
l=b1!=null
if(l)r.push(new A.b8(s+" <= ?",[b1]))
k=a7!=null
if(k)r.push(new A.b8(s+" IN ("+B.b.C(A.a9(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b8(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b8(s+b,[A.l2(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b8(s+b,["%"+A.l2(a3)]))
g=a2!=null
if(g)r.push(new A.b8(s+b,["%"+A.l2(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b8(s+" IS NULL",B.j))
e=a8===!0
if(e)r.push(new A.b8(s+" IS NOT NULL",B.j))
d=this.hh()
B.b.D(d.d,r)
c=A.l([],t.k)
if(q)c.push(new A.al(a0,"eq",[a4]))
if(p)c.push(new A.cf(new A.al(a0,"eq",[b2])))
if(o)c.push(new A.al(a0,"gt",[a5]))
if(n)c.push(new A.al(a0,"gte",[a6]))
if(m)c.push(new A.al(a0,"lt",[b0]))
if(l)c.push(new A.al(a0,"lte",[b1]))
if(k)c.push(new A.al(a0,"inValues",a7))
if(j)c.push(new A.al(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.al(a0,"startsWith",[b3]))
if(h)c.push(new A.al(a0,"endsWith",[a3]))
if(g)c.push(new A.al(a0,"contains",[a2]))
if(f)c.push(new A.al(a0,"isNull",B.j))
if(e)c.push(new A.cf(new A.al(a0,"isNull",B.j)))
B.b.D(d.f,c)
return d},
nV(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
yd(a,b,c){var s=null
return this.bn(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
yk(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
ye(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
yf(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
yi(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
yj(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
yg(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
ya(a,b,c){var s=null
return this.bn(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
yl(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
yc(a,b,c){var s=null
return this.bn(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
yb(a,b,c){var s=null
return this.bn(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
yh(a,b,c){var s=null
return this.bn(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
x8(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=A.l([],j)
q.a5(0,new A.xx(this,p,h))
if(p.length===0)continue
i.push("("+B.b.C(p," AND ")+")")}if(i.length===0)return this
o=this.hh()
o.e.push(new A.b8("("+B.b.C(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.p)(a),++r){q=a[r]
if(q.gS(0)){m=A.l([],j)
for(l=q.ga0().gt(0);l.k();){k=l.gn()
m.push(new A.al(k.a,"eq",[k.b]))}s.push(new A.dG(m))}}o.f.push(new A.d9(s))
return o},
kb(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.al
r=s?a.a:l
if(s){this.df(r)
break A}s=a instanceof A.cf
q=s?a.a:l
if(s){this.kb(q)
break A}p=a instanceof A.dG
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d9
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.p)(n),++m)this.kb(n[m])
break A}},
gcg(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga_(r).a!=="id"
else s=!1
if(s)r.push(B.ds)
return r},
glF(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gcg(),q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.push(new A.cw(o.a,!o.b))}}else s=this.gcg()
return s},
gtN(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gcg(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jY(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.FQ('Query on "'+this.gaV()+'" requires .limit(n) or .all().'))
return s},
gaV(){return this.b.a},
ged(){return this.a},
eW(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
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
if(r!=null){n=f.glM().uX(r,f.at)
m=f.m6(f.glF(),n)
d.push(m.a)
B.b.D(c,m.b)}l=d.length===0?"":" WHERE "+B.b.C(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.D(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.D(a,'"','""')+'"')+") AS v"}else r=f.gtA()
k=r}j=f.glF()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.Y(j,new A.xs(),A.a1(j).i("Y<1,j>")).C(0,", ")
h=A.KM(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.C(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.xt(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jY():a3
g=e}return new A.a_(h+(g==null?"":" LIMIT "+A.r(g)),c)},
jk(a){return this.eW(null,null,!1,!1,a)},
q7(a,b){return this.eW(a,b,!1,!1,null)},
q5(){return this.eW(null,null,!1,!1,null)},
q8(a,b,c){return this.eW(a,null,b,c,null)},
q6(a){return this.eW(null,null,!1,a,null)},
gtA(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.lt())return"*"
o=A.O(o,t.N)
for(s=this.gcg(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(!B.b.E(o,p))o.push(p)}return new A.Y(o,A.pZ(),A.a1(o).i("Y<1,j>")).C(0,", ")},
glM(){var s=this.b
return new A.vk(s.a,s.b,this.gtN(),this.gtK())},
gtK(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a9(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
m6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.co(a,new A.xu(a)),c=B.b.co(b,new A.xv())
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
m7(a,b){var s,r,q,p,o=this.glM(),n=[]
for(s=this.gcg(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gcg(),p=r.length,q=0;q<r.length;r.length===p||(0,A.p)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a9(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bF.geq().v(o)},
es(a){return this.vW(a)},
cW(){return this.es(null)},
vW(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$es=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.jY():a1
if(a0===0){q=B.dt
s=1
break}o=a0==null
n=p.jk(o?null:a0+1)
s=3
return A.a(p.cL(n.a,n.b),$async$es)
case 3:m=a3
l=o?m:J.lg(m,a0).bP(0)
k=!o&&J.an(m)>a0
o=p.y
j=o!=null
i=j&&p.lt()
h=p.b
if(i){i=A.O(o,t.N)
B.b.D(i,p.t1())
g=A.On(h,l,p.ged().cx,i,p.ged().cy)}else g=A.Om(h,l,p.ged().cx,p.ged().cy)
i=p.at
if(i&&g.length!==0){h=A.a1(g).i("bE<1>")
f=A.O(new A.bE(g,h),h.i("a0.E"))
B.b.aq(g)
B.b.D(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hz(g),$async$es)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.P3(g,o):g
if(g.length!==0){b=e?p.m7(B.b.ga_(g),B.b.gH(g)):null
a=d?p.m7(B.b.ga_(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.cy(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$es,r)},
hz(a){return this.rW(a)},
rW(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga_(a)
e=p.gcg()
n=[]
for(m=p.gcg(),l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k)n.push(o.h(0,m[k].a))
j=p.m6(e,n)
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
return A.a(p.cL("SELECT 1 FROM "+('"'+A.D(p.b.a,'"','""')+'"')+" WHERE "+B.b.C(i," AND ")+" LIMIT 1",h),$async$hz)
case 3:q=d.d8(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
lt(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.eu(o)==null)return!1}return!0},
t1(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gcg(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
i2(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$i2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.q6(!0)
m=A
s=3
return A.a(p.cL(o.a,o.b),$async$i2)
case 3:n=m.fp(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
i4(a){return this.uN(a)},
uN(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$i4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.df(a)
o=p.q8(a,!0,!0)
m=A
s=3
return A.a(p.cL(o.a,o.b),$async$i4)
case 3:n=m.fp(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i4,r)},
i8(a){return this.vA(a)},
vA(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$i8=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:p.df(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.qm(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.jk(h)
s=3
return A.a(i.cL(B.a.kV(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$i8)
case 3:f=a0
o=p.b
e=o.eu(a)
n=[]
for(m=J.E(f),l=e==null,o=o.a,d=a==="archived";m.k();){c=m.gn().h(0,a)
if(l){if(d)c=J.x(c,1)}else c=A.Eu(e,c,null,null,"",o)
n.push(c)}q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
rk(a){var s,r,q=this.b.eu(a)
if(q==null)return!1
s=q.b
A:{r=B.V===s||B.W===s||B.B===s||B.X===s
break A}return r},
de(a,b){return this.pG(a,b)},
pG(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$de=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.df(b)
if(!p.rk(b))throw A.b(A.I('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.q7(b,a)
s=3
return A.a(p.cL(o.a,o.b),$async$de)
case 3:n=d
m=J.J(n)
q=A.C2(m.gF(n)?null:J.T(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$de,r)},
is(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$is=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lI(A.l(["id"],m))
k=l.q5()
s=3
return A.a(l.cL(k.a,k.b),$async$is)
case 3:j=b
m=A.l([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.G(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)},
i9(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$i9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.jk(p.jY())
n=J
s=3
return A.a(p.cL("EXPLAIN QUERY PLAN "+o.a,o.b),$async$i9)
case 3:q=n.bI(b,new A.xw(),t.X).C(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)}}
A.xx.prototype={
$2(a,b){this.a.df(a)
this.b.push('"'+A.D(a,'"','""')+'" = ?')
this.c.push(b)},
$S:51}
A.xs.prototype={
$1(a){var s=A.D(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:121}
A.xt.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.D(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:122}
A.xu.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:123}
A.xv.prototype={
$1(a){return a!=null},
$S:15}
A.xw.prototype={
$1(a){return a.h(0,"detail")},
$S:43}
A.cV.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cV&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gK(a){return A.cg(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.xT.prototype={
tz(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.FQ('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cW(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cW=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.ca(a3).length===0){q=B.d0
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.eE(a3)
A.KX(d)
if(e.b)A.KW(d)
c=f.a
b=c+"_fts"
a=A.l(['"'+A.D(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.C(a," AND ")
a0=n.tz()
a1=a0==null?"":" LIMIT "+A.r(a0)
f=A.D(b,'"','""')
e=A.D(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.D(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.Q.nH()
s=7
return A.a(n.c.ae(m,l),$async$cW)
case 7:j=a6
i=A.l([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.T(h,"id")
f.toString
A.G(f)
e=J.T(h,"score")
e.toString
J.aN(i,new A.cV(f,A.H5(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.C(a4)
if(i instanceof A.ci){g=i
throw A.b(A.I("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cW,r)}}
A.cy.prototype={}
A.xK.prototype={}
A.cc.prototype={
a7(){return"FieldKind."+this.b}}
A.b5.prototype={
gle(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.ay===s||B.J===s||B.Y===s||B.Z===s||B.K===s){r="TEXT"
break A}if(B.V===s||B.B===s||B.X===s){r="INTEGER"
break A}if(B.W===s){r="REAL"
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
s=A.fN(B.cV,A.G(m))
m=n.h(0,"name")
m.toString
A.G(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.b5(m,B.ay,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.b5(m,B.V,r,!1,q,o,o,!1)
case 2:return new A.b5(m,B.W,r,!1,q,o,o,!1)
case 3:return new A.b5(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.b5(m,B.X,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.b5(m,B.J,r,!1,!1,A.fX(J.q6(t.j.a(n),p),p),o,!1)
case 6:return new A.b5(m,B.Y,!1,!1,q,o,o,!1)
case 7:return new A.b5(m,B.Z,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.b5(m,B.K,!1,!1,!1,o,A.G(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:124}
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
return new A.dP(q,s,A.fN(B.cQ,A.G(r)))},
$S:125}
A.fU.prototype={
p(){var s,r=t.N,q=t.X,p=A.t(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gS(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fU&&r.b===b.b&&B.aA.V(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gK(a){return A.cg(A.w9(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.tz.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.q6(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fU(p,r,t.f.b(q)?A.JX(q.cm(0,s,t.X)):B.cv)},
$S:126}
A.eK.prototype={
eE(a){var s,r,q,p
for(s=this.a.ga0(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.E(r,p))continue
q=q.b
r=A.D(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.eK&&A.JW(this.a,b.a)
else s=!0
return s},
gK(a){var s,r,q,p=this.a,o=p.gJ(),n=A.O(o,A.n(o).i("o.E"))
B.b.aj(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.p)(n),++r){q=n[r]
o.push(A.cg(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.w9(o)},
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
A.G(p)
q=q.b
q.toString
A.G(q)
A.FA(p,q)
r.j(0,p,q)}return new A.eK(A.JD(r,s,s))},
$S:127}
A.c3.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.y8.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.aj(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.an:p)
q=t.G
while(p.k())r.push(A.Fv(q.a(p.gn())))
return new A.c3(o,s,r,null)},
$S:128}
A.dY.prototype={
a7(){return"MissingRemotePolicy."+this.b}}
A.lP.prototype={}
A.c9.prototype={
gdv(){var s,r,q,p,o=this,n=$.Is()
A.DB(o)
s=n.a.get(o)
if(s==null){s=A.aP(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
eu(a){var s,r,q,p,o,n=this,m=$.It()
A.DB(n)
s=m.a.get(n)
if(s==null){s=A.t(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.T(m,a)},
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
A.G(h)
s=i.h(0,"version")
s.toString
A.aj(s)
r=A.l([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.Fv(o.a(q.gn())))
q=A.l([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.K6(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.G(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.JY(o.a(l))}else l=null
k=A.l([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.an:i)
while(i.k())k.push(A.L5(o.a(i.gn())))
return new A.c9(h,s,r,q,B.ci,n,p,l,k,B.bd,null,m,this.b.i("c9<0>"))},
$S(){return this.b.i("c9<0>()")}}
A.nC.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.xN.prototype={
$1(a){return a.d!=null},
$S:31}
A.xO.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.I)},
$S:12}
A.xP.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.eB)},
$S:37}
A.xQ.prototype={
$1(a){return J.Z(a)},
$S:26}
A.xR.prototype={
aW(a){return this.xG(a)},
xG(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.a
h=i.a
g=h.fy
f=a.a
if(g.I(f))throw A.b(A.aB('Duplicate store name "'+f+'" in this open call.'))
p=A.E0(a)
o=i.d
if(o.e===B.aF&&p.b.length!==0&&!A.Ox(a,i.at))throw A.b(new A.k2('Store "'+f+'" declares executable features that cannot run on the worker runtime: '+B.b.C(p.b,", ")+"."))
s=2
return A.a(q.hc(a,p),$async$aW)
case 2:n=new A.iK(o).kk(a)
o=a.w
if(o!=null)A.P4(i.b,f,o.c)
o=i.b
s=3
return A.a(o.aK("lp_stores",1,"store = ?",[f]),$async$aW)
case 3:m=c
l=J.J(m)
s=l.gF(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$aW)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$aW)
case 11:case 9:l.length===k||(0,A.p)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aW)
case 15:case 13:l.length===k||(0,A.p)(l),++j
s=12
break
case 14:l=a.b
i=i.x
s=16
return A.a(o.aF(0,"lp_stores",A.m(["store",f,"table_name",f,"schema_ver",l,"definition_json",B.h.a9(a.p(),null),"created_at",i.$0()],t.N,t.X)),$async$aW)
case 16:s=17
return A.a(A.h1(o,0,0,"create:"+f,i,l),$async$aW)
case 17:s=5
break
case 6:i=J.T(l.gH(m),"schema_ver")
i.toString
A.aj(i)
l=a.b
if(i>l)throw A.b(A.G5('Store "'+f+'" on disk is schema v'+i+", but this package supports v"+l+"."))
s=i<l?18:19
break
case 18:s=20
return A.a(A.h0(h,a,i),$async$aW)
case 20:case 19:s=21
return A.a(q.c_(a),$async$aW)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a9(a.p(),null),"schema_ver",l],t.N,t.X),"store = ?",[f]),$async$aW)
case 22:case 5:g.j(0,f,new A.nR(a,p,new A.wV(A.t(t.N,t.b))))
s=23
return A.a(q.e8(f,p),$async$aW)
case 23:return A.e(null,r)}})
return A.f($async$aW,r)},
hc(a,b){return this.pJ(a,b)},
pJ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$hc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.a.b.aK("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$hc)
case 3:j=d
if(J.bz(j)){s=1
break}o=null
try{n=J.T(J.bH(j),"v")
o=A.KV(typeof n=="string"?B.h.aI(n,null):n)}catch(i){if(A.C(i) instanceof A.dW){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.au(B.m.v(B.e.v(A.ak(o.p()))).a)!==A.au(B.m.v(B.e.v(A.ak(b.p()))).a))throw A.b(A.aB('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
e8(a,b){return this.rT(a,b)},
rT(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$e8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ak(b.p())
n=q.a.b
m=t.N
l=t.X
k=J
s=5
return A.a(n.aK("lp_meta",1,"k = ?",[p]),$async$e8)
case 5:s=k.bz(d)?2:4
break
case 2:s=6
return A.a(n.aF(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$e8)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$e8)
case 7:case 3:return A.e(null,r)}})
return A.f($async$e8,r)},
i_(a){return this.uC(a)},
uC(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$i_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a.b.e
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$i_)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i_,r)},
c_(a){return this.tf(a)},
tf(a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$c_=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a0=p.a
a1=a0.b
a2=a4.a
s=3
return A.a(a1.eG("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a2]),$async$c_)
case 3:a3=a7
if(J.bz(a3)){s=1
break}o=null
try{n=J.T(J.bH(a3),"definition_json")
m=typeof n=="string"?B.h.aI(n,null):n
l=m
l.toString
k=t.X
o=A.qI(A.bs(t.f.a(l),t.N,k),k)}catch(a5){if(A.C(a5) instanceof A.dn){s=1
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
return A.a(a1.O("DROP TRIGGER IF EXISTS "+('"'+A.D(a2+d,'"','""')+'"')),$async$c_)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a1.O("DROP TABLE IF EXISTS "+('"'+A.D(a2+"_fts",'"','""')+'"')),$async$c_)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.iK(a0.d).kk(a4).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a1.O(l[e]),$async$c_)
case 16:case 14:l.length===k||(0,A.p)(l),++e
s=13
break
case 15:l=a2+"_fts"
k=A.D(l,'"','""')
s=17
return A.a(a1.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.D(l,'"','""')+'"')+") VALUES('delete-all')"),$async$c_)
case 17:k=h.a
c=k.$ti.i("Y<M.E,j>")
b=new A.Y(k,A.pZ(),c).C(0,", ")
a=new A.Y(k,new A.xS(a4,h),c).C(0,", ")
l=A.D(l,'"','""')
s=18
return A.a(a1.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.D(a2,'"','""')+'"')),$async$c_)
case 18:case 12:if(f.b==null)f.b=$.nk.$0()
l=a4.b
s=19
return A.a(A.h1(a1,f.gna(),l,"fts:"+a2,a0.x,l),$async$c_)
case 19:case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
i6(a){return this.v5(a)},
v5(a){var s=0,r=A.h(t.H),q=this,p
var $async$i6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b.f
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$i6)
case 4:case 3:return A.e(null,r)}})
return A.f($async$i6,r)}}
A.xS.prototype={
$1(a){return A.EQ(this.a.a,this.b.c,"",a)},
$S:7}
A.e_.prototype={
a7(){return"MutationAction."+this.b}}
A.fE.prototype={
gaV(){return this.b.a.a},
eY(){var s=this.d
if(s!=null&&s.e){s=this.gaV()
throw A.b(new A.jK('Cannot mutate "'+s+'" through a read-only Tx.'))}},
iL(a){var s=this
if(s.d!=null)return s.iC(B.a1,a)
return s.a.b3(new A.qV(s,a),B.q,t.H)},
nS(a){var s=this
if(s.d!=null)return s.iC(B.a2,a)
return s.a.b3(new A.qY(s,a),B.q,t.H)},
nC(a){var s=this
if(s.d!=null)return s.nD(a)
return s.a.b3(new A.qU(s,a),B.q,t.H)},
nT(a){var s=this
if(s.d!=null)return s.bL(a,B.a2)
return s.a.b3(new A.qX(s,a),B.q,t.H)},
nz(a,b){var s=this
if(s.d!=null)return s.xc(a,b)
return s.a.b3(new A.qR(s,a,b),B.q,t.H)},
nA(a){var s=this
if(s.d!=null)return s.d6(a)
return s.a.b3(new A.qQ(s,a),B.q,t.H)},
d6(a){return this.xb(a)},
xb(a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$d6=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:p.eY()
if(a7.a===0){s=1
break}o=p.c.b
n=A.n(a7)
m=n.i("S<1>")
l=A.O(new A.S(a7,m),m.i("o.E"))
m=t.N
k=A.t(m,t.G)
j=p.b.a,i=p.a,h=i.cx,i=i.cy,g=j.a,f='SELECT * FROM "'+g+'" WHERE id IN (',e=0
case 3:if(!(d=l.length,e<d)){s=5
break}c=e+2000
b=B.b.U(l,e,B.c.bu(c,0,d))
a6=J
s=6
return A.a(o.ae(f+B.b.C(A.a9(b.length,"?",!1,m),", ")+")",b),$async$d6)
case 6:d=a6.E(a9)
case 7:if(!d.k()){s=8
break}a=d.gn()
a0=a.h(0,"id")
a0.toString
k.j(0,A.G(a0),A.bU(j,a,h,i))
s=7
break
case 8:case 4:e=c
s=3
break
case 5:a1=A.t(m,t.o)
a2=A.t(m,t.dZ)
j=k.$ti.i("S<1>")
a3=A.O(new A.S(k,j),j.i("o.E"))
j=t.s,e=0
case 9:if(!(i=a3.length,e<i)){s=11
break}c=e+2000
b=B.b.U(a3,e,B.c.bu(c,0,i))
a4=B.b.C(A.a9(b.length,"?",!1,m),", ")
i=A.l([g],j)
B.b.D(i,b)
h="store = ? AND record_id IN ("+a4+")"
a6=J
s=12
return A.a(o.bM("lp_sync_row",h,i),$async$d6)
case 12:f=a6.E(a9)
case 13:if(!f.k()){s=14
break}d=f.gn()
a=d.h(0,"record_id")
a.toString
a1.j(0,A.G(a),A.hy(d))
s=13
break
case 14:a6=J
s=15
return A.a(o.bM("lp_outbox",h,i),$async$d6)
case 15:i=a6.E(a9)
case 16:if(!i.k()){s=17
break}h=i.gn()
f=h.h(0,"record_id")
f.toString
a2.j(0,A.G(f),A.jA(h))
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
return A.a(p.d7(i,h,!0,f,a2.h(0,i),d),$async$d6)
case 20:s=18
break
case 19:j=p.d
j.toString
m=A.aP(m)
for(n=new A.bN(a7,a7.r,a7.e,n.i("bN<1>"));n.k();)m.u(0,n.d)
j.a2(new A.a5(g,m))
case 1:return A.e(q,r)}})
return A.f($async$d6,r)},
mU(a){var s=this
if(s.d!=null)return s.iB(B.C,a)
return s.a.b3(new A.qN(s,a),B.q,t.H)},
nM(a){var s=this
if(s.d!=null)return s.iB(B.D,a)
return s.a.b3(new A.qW(s,a),B.q,t.H)},
iK(a){var s=this
if(s.d!=null)return s.dG(a)
return s.a.b3(new A.qS(s,a),B.q,t.H)},
dG(a){return this.xj(a)},
xj(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eY()
s=2
return A.a(q.ec(a),$async$dG)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cL(n,m,a,!0),$async$dG)
case 3:s=4
return A.a(n.X(m,"id = ?",[a]),$async$dG)
case 4:l=t.N
o.a2(new A.a5(m,A.ap([a],l)))
if(p!=null){l=A.c0(p.gJ(),l)
l.G(0,"id")
o.bJ(B.av,l,a,null,p,B.H,m)}return A.e(null,r)}})
return A.f($async$dG,r)},
d7(a,b,c,d,e,f){return this.xe(a,b,c,d,e,f)},
xd(a,b,c){return this.d7(a,b,c,null,null,null)},
xc(a,b){return this.d7(a,b,!1,null,null,null)},
xe(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$d7=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p.eY()
s=f!=null||e!=null?3:5
break
case 3:o=e
n=f
s=4
break
case 5:s=6
return A.a(p.c.b.ae("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$d7)
case 6:m=h
l=J.J(m)
if(l.gS(m)){k=l.gH(m)
n=A.hy(k)
o=k.h(0,"o_kind")!=null?A.jA(A.m(["store",k.h(0,"o_store"),"record_id",k.h(0,"o_record_id"),"kind",k.h(0,"o_kind"),"payload_json",k.h(0,"o_payload_json"),"base_updated",k.h(0,"o_base_updated"),"base_hash",k.h(0,"o_base_hash"),"dirty_fields",k.h(0,"o_dirty_fields"),"op_id",k.h(0,"o_op_id"),"created_at",k.h(0,"o_created_at"),"updated_at",k.h(0,"o_updated_at"),"depends_on_op",k.h(0,"o_depends_on_op")],t.N,t.X)):null}else{n=null
o=null}case 4:s=n!=null&&n.w===B.G&&o!=null?7:8
break
case 7:s=9
return A.a(p.e7(a,b,n,o,c),$async$d7)
case 9:s=1
break
case 8:s=10
return A.a(p.e1(a,b,c,o,d,n),$async$d7)
case 10:case 1:return A.e(q,r)}})
return A.f($async$d7,r)},
e1(a,b,c,d,e,f){return this.qH(a,b,c,d,e,f)},
lW(a,b,c,d,e){return this.e1(a,b,c,d,null,e)},
qH(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$e1=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=e==null?2:4
break
case 2:s=5
return A.a(q.ec(a),$async$e1)
case 5:s=3
break
case 4:h=e
case 3:m=h
if(m==null)throw A.b(A.jM("No record "+q.gaV()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.bO(m,p,o)
n.D(0,b)
o=A.t(p,o)
o.j(0,"id",a)
o.D(0,n)
s=6
return A.a(q.aP(B.L,c,m,a,d,f,o),$async$e1)
case 6:return A.e(null,r)}})
return A.f($async$e1,r)},
e7(a,b,c,d,e){return this.rQ(a,b,c,d,e)},
rQ(a8,a9,b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$e7=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a6=null
try{a6=B.h.aI(b1.d,null)}catch(b3){a6=null}if(!t.G.b(a6)){q=n.lW(a8,a9,b2,b1,b0)
s=1
break}i=a6.h(0,"id")
if(i!=null&&!J.x(i,a8)){q=n.lW(a8,a9,b2,b1,b0)
s=1
break}h=t.N
g=t.X
f=A.bO(a6,h,g)
f.D(0,a9)
m=f
J.b4(m,"id",a8)
e=new A.a6("")
f=n.b
d=f.a
c=A.CB(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.bO(m,h,g)
b.G(0,"id")
a0=n.hL(a8,b,a,c)
s=a0 instanceof A.w?3:4
break
case 3:s=5
return A.a(a0,$async$e7)
case 5:case 4:a1=n.lQ(a6,m,B.L)
l=null
b=a1.length===1&&d.gdv().E(0,B.b.gao(a1))
a2=n.a
a3=a2.cx
a4=a2.cy
if(b){a5=d.eu(B.b.gao(a1))
b=a5.a
l=A.m([b,A.EO(d,a5,J.T(m,b),a3,a4,a8),"hidden",0],h,g)}else l=A.dD(d,J.x(J.T(m,"archived"),!0),a3,a4,a8,m)
p=7
s=10
return A.a(n.c.b.L(d.a,l,"id = ?",[a8]),$async$e7)
case 10:p=2
s=9
break
case 7:p=6
a7=o.pop()
k=A.C(a7)
h=A.In(k,m)
throw A.b(h)
s=9
break
case 6:s=2
break
case 9:g=a2.dx
g===$&&A.v()
b=l
s=11
return A.a(g.bt(B.L,null,a1,n.c.b,a8,m,a6,b1,a,b,b0,f),$async$e7)
case 11:if(!b2){g=n.d
if(g!=null)g.a2(new A.a5(d.a,A.ap([a8],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g){g=a6
h.bJ(B.A,A.mV(a1,A.a1(a1).c),a8,m,g,B.H,d.a)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e7,r)},
aP(a,b,c,d,e,f,g){return this.wW(a,b,c,d,e,f,g)},
iC(a,b){var s=null
return this.aP(a,!1,s,s,s,s,b)},
iB(a,b){var s=null
return this.aP(a,!1,s,b,s,s,s)},
wU(a,b,c){var s=null
return this.aP(a,b,s,s,s,s,c)},
wV(a,b,c,d,e,f){return this.aP(a,b,c,null,d,e,f)},
wW(c0,c1,c2,c3,c4,c5,c6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$aP=A.c(function(c7,c8){if(c7===1){o.push(c8)
s=p}for(;;)switch(s){case 0:b8={}
n.eY()
m=null
b8.a=c2
l=null
b8.b=b8.c=null
i=new A.qP(b8,n,c5,c4)
s=c0===B.a1?3:5
break
case 3:h=A.a3(c6.h(0,"id"))
if(h==null)h=A.ij()
g=$.q4()
if(!g.b.test(h))throw A.b(A.I('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aP)
case 6:l=n.f0(c6,m)
c0=b8.a==null?B.be:B.L
s=4
break
case 5:s=c0===B.L?7:9
break
case 7:c3.toString
m=c3
s=10
return A.a(i.$1(m),$async$aP)
case 10:if(b8.a==null)throw A.b(A.jM("No record "+n.gaV()+"/"+A.r(m)+" to update."))
c6.toString
l=n.f0(c6,m)
s=8
break
case 9:s=c0===B.a2?11:13
break
case 11:h=A.a3(c6.h(0,"id"))
if(h==null)h=A.ij()
g=$.q4()
if(!g.b.test(h))throw A.b(A.I('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aP)
case 14:g=b8.a
if(g==null){l=n.f0(c6,m)
c0=B.be}else{l=A.bO(g,t.N,t.X)
for(g=new A.aK(c6,A.n(c6).i("aK<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.b4(l,e,f.b)}c0=B.L}s=12
break
case 13:c3.toString
m=c3
s=15
return A.a(i.$1(m),$async$aP)
case 15:g=b8.a
if(g==null)throw A.b(A.jM("No record "+n.gaV()+"/"+A.r(m)+" to archive/restore."))
g=A.bO(g,t.N,t.X)
g.j(0,"archived",c0===B.C)
l=g
case 12:case 8:case 4:d=new A.a6("")
g=n.b
e=g.a
c=l
b=A.CB(d,e,c,J.an(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
a0=n.hL(m,l,a,b)
s=a0 instanceof A.w?16:17
break
case 16:s=18
return A.a(a0,$async$aP)
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
return A.a(c.bN(n.c.b,e.a,m),$async$aP)
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
return A.a(c.eI(n.c.b,e.a,m),$async$aP)
case 32:c=c8
a2=c
s=30
break
case 31:a2=c
case 30:case 27:c=a1==null
a3=!c
if(a3&&a1.w===B.a7)throw A.b(A.Fp("Record "+n.gaV()+"/"+A.r(m)+u.W))
a4=b8.a
a5=a4!=null
if(a5)a6=!a3||a1.w===B.z
else a6=!1
if(a5&&a6){a7=A.ak(A.bn(e,a4))
a3=A.au(B.m.v(B.e.v(a7)).a)
a8=new A.qp(a7,a3,c?null:a1.c)}else a8=null
c=m
a3=l
a4=n.a
a5=a4.cx
a9=a4.cy
b0=A.dD(e,J.x(J.T(l,"archived"),!0),a5,a9,c,a3)
b1=n.lQ(b8.a,l,c0)
k=null
if(b8.a!=null&&b1.length===1&&e.gdv().E(0,B.b.gao(b1))){b2=e.eu(B.b.gao(b1))
c=b2.a
k=A.m([c,A.EO(e,b2,J.T(l,c),a5,a9,m),"hidden",0],t.N,t.X)}else k=b0
p=34
c=e.a
a3=n.c.b
s=b8.a==null?37:39
break
case 37:s=40
return A.a(a3.aF(0,c,k),$async$aP)
case 40:s=38
break
case 39:s=41
return A.a(a3.L(c,k,"id = ?",[m]),$async$aP)
case 41:case 38:p=2
s=36
break
case 34:p=33
b9=o.pop()
j=A.C(b9)
g=A.In(j,l)
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
return A.a(c.bt(c0,a8,b1,n.c.b,a3,l,a4,a2,a,b0,a1,g),$async$aP)
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
c=A.n(g).i("S<1>")
a3=c.i("aq<o.E>")
b7=A.c0(new A.aq(new A.S(g,c),new A.qO(),a3),a3.i("o.E"))}else b7=A.mV(b1,A.a1(b1).c)
g=n.d
c=g==null
if(!c){a3=m
a4=b8.a
a5=b5?null:l
g.bJ(b6,b7,a3,a5,a4,B.H,e.a)}if(!c1)if(!c)g.a2(new A.a5(e.a,A.ap([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
bL(a,b){return this.xn(a,b)},
nD(a){return this.bL(a,B.a1)},
xn(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bL=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eY()
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
a2=a1?A.ij():a0
a1=$.q4()
if(!a1.b.test(a2))throw A.b(A.I('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aN(l,new A.a_(a2,a))}if(!c){a3=A.t(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ao(a3,a3.$ti.i("ao<2>")).bl(0,new A.qT())}else a5=!1
s=c3===B.a1&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.eb(m,l),$async$bL)
case 9:k=A.aP(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aN(k,i)}g.a2(new A.a5(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.C(c0) instanceof A.hK))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.t(k,t.G)
j=n.a,d=j.cx,j=j.cy,a1=t.s,a8=0
case 10:if(!(a8<J.an(l))){s=12
break}a9=a8+2000
b0=B.c.bu(a9,0,J.an(l))
a4=A.l([],a1)
for(b1=J.Ji(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.p)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.bM(e,"id IN ("+B.b.C(A.a9(a4.length,"?",!1,k),", ")+")",a4),$async$bL)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.G(b2),A.bU(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.t(k,t.o)
b4=A.t(k,t.dZ)
j=a7.$ti.i("S<1>")
b5=A.O(new A.S(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.U(b5,a8,B.c.bu(a9,0,j))
b7=B.b.C(A.a9(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.D(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.bM("lp_sync_row",f,j),$async$bL)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.G(b1),A.hy(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.bM("lp_outbox",f,j),$async$bL)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.G(d),A.jA(f))
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
return A.a(n.wU(c3,!0,a1),$async$bL)
case 31:s=29
break
case 30:a1=A.dV(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.wV(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bL)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.p)(j),++b
s=25
break
case 27:g.a2(new A.a5(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bL,r)},
eb(a,b){return this.t8(a,b)},
t8(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$eb=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.iL?3:4
break
case 3:s=5
return A.a(n.dq(a6,a7),$async$eb)
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
return A.a(n.dW(a6,a4,h,g,m),$async$eb)
case 13:e=a9
if(l)J.aN(k,new A.a_(h,e));++j
case 11:a7.length===a0||(0,A.p)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.C(a5) instanceof A.ci?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aN(d,a7[c].a)
b=d
s=17
return A.a(n.dk(a6,b),$async$eb)
case 17:throw A.b(new A.hK())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.p)(i),++a1){a3=i[a1]
a.kt(B.af,a3.a,a3.b,null,B.H,a0)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eb,r)},
dq(a,b){return this.t9(a,b)},
t9(d7,d8){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6
var $async$dq=A.c(function(d9,e0){if(d9===1){p.push(e0)
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
m='INSERT INTO "'+d5+'" ('+A.io(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.io(B.a0)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.io(B.a_)+") VALUES "
j=new A.qM()
b1=new A.a6("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=d0.z!=null||b2
b4=b2?A.l([],t.jO):null
i=0,a9=b4==null,b5=d1.cx,b6=d1.cy,b7=d0.b
case 2:if(!(b8=i,b9=d8.length,b8<b9)){s=4
break}h=B.w.bu(i+500,0,b9)
g=h-i
f=[]
e=[]
d=[]
c0=i
case 5:if(!(c0<h)){s=7
break}c1=d8[c0]
c2=c1.a
c3=c1.b
c4=b3?o.f0(c3,c2):c3
b1.a=""
c5=A.CB(b1,d0,c4,c2)
b8=b1.a
c6=b8.charCodeAt(0)==0?b8:b8
c7=o.hL(c2,c4,c6,c5)
s=c7 instanceof A.w?8:9
break
case 8:s=10
return A.a(c7,$async$dq)
case 10:case 9:A.NJ(f,d0,J.x(c4.h(0,"archived"),!0),b5,b6,c2,c4)
b8=d1.dx
b8===$&&A.v()
c8=b8.h2()
A.HN(e,"",null,d2,null,'["*"]',B.v,c8,c6,c2,d5,d2)
A.HO(d,B.a8,0,"",null,null,'["*"]',null,null,1,0,c8,c2,null,b7,d5,B.G)
if(!a9)b4.push(new A.a_(c2,c4))
case 6:++c0
s=5
break
case 7:c=!1
b=!1
q=12
b8=d3.cA(A.r(m)+A.r(j.$2(J.an(n),g)))
if(b8.r||b8.b.r)A.u(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eV(new A.bY(f))
b8.hm()
c=!0
b8=d3.cA(A.r(l)+A.r(j.$2(11,g)))
if(b8.r||b8.b.r)A.u(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eV(new A.bY(e))
b8.hm()
b=!0
b8=d3.cA(A.r(k)+A.r(j.$2(16,g)))
if(b8.r||b8.b.r)A.u(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eV(new A.bY(d))
b8.hm()
q=1
s=14
break
case 12:q=11
d6=p.pop()
s=A.C(d6) instanceof A.ci?15:17
break
case 15:a=A.l([],d4)
for(a0=0;a0<i;++a0)J.aN(a,d8[a0].a)
a1=a
s=18
return A.a(o.dk(d7,a1),$async$dq)
case 18:s=c||b?19:20
break
case 19:a2=A.l([],d4)
for(a3=i;a3<h;++a3)J.aN(a2,d8[a3].a)
a4=a2
a5=B.b.C(A.a9(J.an(a4),"?",!1,t.N),", ")
s=c?21:22
break
case 21:s=23
return A.a(d7.X(d5,"id IN ("+A.r(a5)+")",a4),$async$dq)
case 23:case 22:s=b?24:25
break
case 24:a6=A.l([d5],d4)
J.F7(a6,a4)
a7=a6
s=26
return A.a(d7.X("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dq)
case 26:case 25:case 20:throw A.b(new A.hK())
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
a8.kt(B.af,a2.a,a2.b,null,B.H,d5)}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dq,r)},
dW(a,b,c,d,e){return this.pL(a,b,c,d,e)},
pL(a9,b0,b1,b2,b3){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$dW=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.f0(b2,b1)
a3=new A.a6("")
a4=A.CB(a3,a1,a2,b1)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
a7=n.hL(b1,a2,a6,a4)
s=a7 instanceof A.w?3:4
break
case 3:s=5
return A.a(a7,$async$dW)
case 5:case 4:a5=n.a
m=A.dD(a1,J.x(a2.h(0,"archived"),!0),a5.cx,a5.cy,b1,a2)
a5=a5.dx
a5===$&&A.v()
e=a5.h2()
a5=a1.a
l=A.HR("",null,b3,'["*"]',B.v,e,a6,b1,a5,b3)
k=A.O2('["*"]',1,e,b1,a1.b,a5,B.G)
j=!1
i=!1
p=7
d=m
c=A.n(d).i("S<1>")
b=t.N
h=A.dX(new A.S(d,c),new A.qK(),c.i("o.E"),b).C(0,", ")
g=B.b.C(A.a9(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=b0.cA(f)
d=m
a=A.n(d).i("ao<2>")
d=A.O(new A.ao(d,a),a.i("o.E"))
c.er(new A.bY(d))
j=!0
b0.cA("INSERT INTO lp_outbox ("+A.io(B.a0)+") VALUES ("+B.b.C(A.a9(11,"?",!1,b),", ")+")").er(new A.bY(A.Ih(l,B.a0)))
i=!0
b0.cA("INSERT INTO lp_sync_row ("+A.io(B.a_)+") VALUES ("+B.b.C(A.a9(16,"?",!1,b),", ")+")").er(new A.bY(A.Ih(k,B.a_)))
p=2
s=9
break
case 7:p=6
a8=o.pop()
s=j?10:11
break
case 10:s=12
return A.a(a9.X(a5,"id = ?",[b1]),$async$dW)
case 12:case 11:s=i?13:14
break
case 13:s=15
return A.a(a9.X("lp_outbox","store = ? AND record_id = ?",[a5,b1]),$async$dW)
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
return A.f($async$dW,r)},
dk(a,b){return this.qp(a,b)},
qp(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$dk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.C(A.a9(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.X(m,"id IN ("+o+")",b),$async$dk)
case 3:m=A.l([m],t.s)
B.b.D(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.X("lp_outbox",n,m),$async$dk)
case 4:s=5
return A.a(a.X("lp_sync_row",n,m),$async$dk)
case 5:case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
f0(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=a.ga0(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.nE("archived",new A.qL())
return p},
lQ(a,b,c){var s,r,q,p,o
if(a==null)return B.d1
s=t.N
r=A.aP(s)
s=A.c0(a.gJ(),s)
s.D(0,new A.S(b,A.n(b).i("S<1>")))
for(s=A.dz(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.p.V(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.O(r,r.$ti.c)
B.b.aj(o)
return o},
ec(a){return this.td(a)},
td(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$ec=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ae('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$ec)
case 3:m=c
l=J.J(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.bU(n,l.gH(m),o.cx,o.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ec,r)},
hA(a){return this.rX(a)},
rX(a){var s=0,r=A.h(t.nw),q,p=this,o,n,m,l,k,j
var $async$hA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ae('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hA)
case 3:j=c
k=J.J(j)
if(k.gF(j)){q=B.dL
s=1
break}o=k.gH(j)
k=p.a
n=A.bU(l,o,k.cx,k.cy)
m=o.h(0,"s_sync_state")!=null?A.hy(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.ek(n,m,o.h(0,"o_kind")!=null?A.jA(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
bR(a){return this.oJ(a)},
oJ(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.I(a)){q=p.b.e.bR(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ae("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bR)
case 6:s=4
break
case 5:s=7
return A.a(k.ae('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bR)
case 7:case 4:j=c
l=J.J(j)
if(l.gF(j)){if(f)o.e.lb(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.bU(n,i,l.cx,l.cy)
g=A.aY(i.h(0,"lp_schema_ver"))
if(g==null)g=1
s=g<m?8:9
break
case 8:s=10
return A.a(A.Cx(n,h,g,m),$async$bR)
case 10:h=c
case 9:if(f)o.e.lb(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
hL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=this.b.a,r=s.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
n=o.a
m=b.h(0,n)
if(o.c&&m==null)throw A.b(A.I('Field "'+n+'" is required.',n))
if(m==null)continue
l=A.EP(o,m)
if(l!=null)throw A.b(A.I(A.Jy(o,l),n))}k=s.z
if(k!=null){j=k.$1(b)
if(t.fB.b(j))return this.hM(j,b,c,d)
s=J.J(j)
if(s.gS(j))throw A.b(A.I(s.C(j,"; "),null))}this.mM(b,c,d)},
hM(a,b,c,d){return this.u4(a,b,c,d)},
u4(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o
var $async$hM=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a,$async$hM)
case 2:p=f
o=J.J(p)
if(o.gS(p))throw A.b(A.I(o.C(p,"; "),null))
q.mM(b,c,d)
return A.e(null,r)}})
return A.f($async$hM,r)},
mM(a,b,c){var s=this.a.as
if(c>s)throw A.b(A.I("Document exceeds max size ("+c+" > "+s+" bytes).",null))}}
A.qV.prototype={
$1(a){return a.bv(this.a.b.a.a).iL(this.b)},
$S:4}
A.qY.prototype={
$1(a){return a.bv(this.a.b.a.a).nS(this.b)},
$S:4}
A.qU.prototype={
$1(a){return a.bv(this.a.b.a.a).nC(this.b)},
$S:4}
A.qX.prototype={
$1(a){return a.bv(this.a.b.a.a).nT(this.b)},
$S:4}
A.qR.prototype={
$1(a){return a.bv(this.a.b.a.a).nz(this.b,this.c)},
$S:4}
A.qQ.prototype={
$1(a){return a.bv(this.a.b.a.a).nA(this.b)},
$S:4}
A.qN.prototype={
$1(a){return a.bv(this.a.b.a.a).mU(this.b)},
$S:4}
A.qW.prototype={
$1(a){return a.bv(this.a.b.a.a).nM(this.b)},
$S:4}
A.qS.prototype={
$1(a){return a.bv(this.a.b.a.a).iK(this.b)},
$S:4}
A.qP.prototype={
o0(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.ec(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hA(a),$async$$1)
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
$1(a){return this.o0(a)},
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
A.hK.prototype={$iH:1}
A.oT.prototype={}
A.qc.prototype={
b1(a,b){var s=this.a.W(new A.qd(a,b),b)
this.a=s.b2(new A.qe(b),new A.qf(),t.H)
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
A.bp.prototype={
gnK(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.r9.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.G(d)
s=e.h(0,"record_id")
s.toString
A.G(s)
r=A.CL(e.h(0,l),l,k)
q=A.CL(e.h(0,j),j,k)
p=A.CL(e.h(0,i),i,k)
o=A.HY(e.h(0,h),h,k)
n=A.HY(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.aj(m)
return new A.bp(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.CL(e.h(0,f),f,k):null)},
$S:135}
A.ra.prototype={
fD(a){return this.wI(a)},
wI(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.v()
m=m.gbx()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.xo("lp_conflicts","detected_at ASC",n,o),$async$fD)
case 3:o=l.bI(c,A.O8(),t.n8)
m=A.O(o,o.$ti.i("a0.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
dO(a,b){return this.oK(a,b)},
oK(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.v()
s=3
return A.a(n.gbx().b.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dO)
case 3:o=d
n=J.J(o)
if(n.gF(o)){q=null
s=1
break}q=A.Dv(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
y9(a){var s={},r=A.oS()
s.a=null
r.sic(A.dq(new A.rd(s,r),new A.re(s,this,a,new A.rf(this,r,a)),t.ba))
return r.aE().gcD()},
eK(a,b,c){return this.xN(a,b,c)},
xN(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eK=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(c)
s=2
return A.a(p.a1(new A.rb(q,c,a,o.a,o,b),t.P),$async$eK)
case 2:return A.e(null,r)}})
return A.f($async$eK,r)},
fg(a,b){return this.um(a,b)},
um(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$fg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dO(a,b),$async$fg)
case 2:p=d
if(p==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eK(b,p.d,a),$async$fg)
case 3:return A.e(null,r)}})
return A.f($async$fg,r)},
ej(a,b){return this.un(a,b)},
un(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$ej=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dO(a,b),$async$ej)
case 3:o=d
if(o==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=o.gnK()?4:5
break
case 4:s=6
return A.a(p.a.bv(a).iK(b),$async$ej)
case 6:s=1
break
case 5:s=7
return A.a(p.eK(b,o.e,a),$async$ej)
case 7:case 1:return A.e(q,r)}})
return A.f($async$ej,r)}}
A.rf.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.aE().giu()){s=1
break}p=4
s=7
return A.a(n.a.fD(n.c),$async$$0)
case 7:m=b
if(!i.aE().giu())J.aN(i.aE(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.C(h)
k=A.af(h)
if(!i.aE().giu())i.aE().bk(l,k)
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
q.a.a=new A.aX(p,A.n(p).i("aX<1>")).aZ(new A.rc(q.c,o))
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
$1(a){return this.o1(a)},
o1(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.J(a3)
if(a4.gF(a3))throw A.b(A.A("No conflict found for "+a1+"/"+a2))
o=A.Dv(a4.gH(a3))
n=o.gnK()
m=n?null:A.ak(o.e)
l=n?"":A.au(B.m.v(B.e.v(A.ak(A.bn(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aK(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bz(a8)?4:5
break
case 4:s=7
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.X("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.X("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a2(new A.a5(a1,A.ap([a2],a4)))
a6.a2(new A.a5("lp_conflicts",A.ap([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aK("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.J(k)
if(i.gS(k)){h=A.a3(J.T(i.gH(k),"base_updated"))
i=h==null?A.a3(J.T(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.bO(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dD(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bS(n?B.k:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aj(d)
c=A.ak(A.bn(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a9(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aK("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bz(a8)?14:16
break
case 14:a4=p.a.a
b=a4.db.$0()
h=f?B.M:B.v
e=B.h.a9(d,null)
a4=a4.dx
a4===$&&A.v()
s=18
return A.a(a0.aF(0,"lp_outbox",A.HR(l,j,b,e,h,a4.h2(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a2(new A.a5(a1,A.ap([a2],i)))
a6.a2(new A.a5("lp_conflicts",A.ap([a2],i)))
a4=o.d
a=A.bS(a4,g)
a.G(0,"id")
a6.bJ(B.A,a,a2,g,a4,B.ag,a1)
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.nY.prototype={
aC(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dq(null,null,t.n6)
n.ay=A.dq(null,null,t.kf)}n.z=!0
s=3
return A.a(n.aO(B.dU),$async$aC)
case 3:p=5
l=n.b
s=8
return A.a(l.fK(),$async$aC)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.v()
k.f=l.gi1().a
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
n.fr=new A.aX(l,A.n(l).i("aX<1>")).aZ(n.gwk())
n.fx=n.b.ni().aZ(n.gwi())
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
case 12:n.fy=A.yz(B.ai,new A.yv(n))
s=14
return A.a(n.aO(n.e_()),$async$aC)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.cj("cycle")
s=17
return A.a(n.fa(),$async$aC)
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
e_(){if(this.at)return B.br
if(this.Q)return B.bo
if(this.as)return B.aI
return B.bp},
aO(a){return this.tW(a)},
tW(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.qy(),$async$aO)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aO,r)},
qy(){return this.p2=this.p2.W(new A.yl(this),t.H)},
hi(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$hi=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.i3(),$async$hi)
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
if((g.c&4)===0)g.u(0,new A.f1(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hi,r)},
wl(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.cj("push")
s.tx(B.aj)},
wj(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.fy.I(s))return
r=a.c
if(r!=null&&a.b===B.P){q.cj("fast:"+s)
q.dx=q.dx.W(new A.yt(q,r),t.H)
return}q.cj("pull:"+s)
q.hI(B.aj,A.l([s],t.s))},
hn(a){return this.qI(a)},
qI(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hn=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hI(B.aj,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.ia(a),$async$hn)
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
break}if(!m)n.hI(B.aj,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hn,r)},
wt(){if(!this.z)return
this.cj("cycle")
this.mu()},
hI(a,b){var s=this,r=s.go
if(r!=null)r.A()
if(b==null)s.k2=!0
else s.k3.D(0,b)
s.go=A.c4(a,new A.ys(s))},
tx(a){return this.hI(a,null)},
tw(a){var s=this.id
if(s!=null)s.A()
this.id=A.c4(B.I,new A.yr(this,a))},
jQ(){this.as=!0
this.aO(B.aI)
A.iX(this.d,t.H)},
eB(){var s=0,r=A.h(t.H),q,p=this,o
var $async$eB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.dx
o===$&&A.v()
s=3
return A.a(o.xL(),$async$eB)
case 3:s=4
return A.a(p.aO(p.e_()),$async$eB)
case 4:p.cj("cycle")
s=5
return A.a(p.fa(),$async$eB)
case 5:case 1:return A.e(q,r)}})
return A.f($async$eB,r)},
h7(a){return this.oX(a)},
oX(a){var s=0,r=A.h(t.H),q=this,p
var $async$h7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.A()
q.k1=A.c4(B.ax,new A.yu(q))
s=3
break
case 4:s=5
return A.a(q.aO(B.bo),$async$h7)
case 5:case 3:return A.e(null,r)}})
return A.f($async$h7,r)},
b7(){var s=0,r=A.h(t.H),q=this
var $async$b7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aO(B.br),$async$b7)
case 2:return A.e(null,r)}})
return A.f($async$b7,r)},
b_(){var s=0,r=A.h(t.H),q,p=this
var $async$b_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aO(p.e_()),$async$b_)
case 3:p.cj("cycle")
s=4
return A.a(p.fa(),$async$b_)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b_,r)},
mw(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.A()}s=t.fD
r=q.k4.W(new A.yo(q,a),s)
q.k4=r.b2(new A.yp(),new A.yq(),s)
return r},
fa(){return this.mw(null)},
cj(a){var s,r=this.p1
r.push(a)
s=r.length
if(s>1000)B.b.iR(r,0,s-1000)},
jZ(a){this.mw(a).b2(new A.ym(),new A.yn(this),t.H)},
mu(){return this.jZ(null)},
be(a){return this.qu(a)},
qu(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$be=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aO(n.e_()),$async$be)
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
return A.a(n.aO(B.dV),$async$be)
case 6:b3=b8==null
if(b3){a4=n.a.fy
a5=A.n(a4).i("S<1>")
a6=A.O(new A.S(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.v()
s=14
return A.a(a5.dF(h),$async$be)
case 14:g=c0
J.b4(m,h,g.b)
if(g.f&&g.b>0)J.aN(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.C(b4)
if(a5 instanceof A.bK){n.jQ()
s=9
break}else if(a5 instanceof A.bl){f=a5
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
return A.a(n.aO(B.aI),$async$be)
case 17:q=n.ok=new A.bd(m,B.ap,0,0,0,0,!0)
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
return A.a(b3.dT(e),$async$be)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.T(l,c.a)
if(a5==null)a5=0
J.b4(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.C(b5)
if(b3 instanceof A.bl){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aO(B.dW),$async$be)
case 25:a=B.a5
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.v()
s=33
return A.a(b3.fN(),$async$be)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.x.b8("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$be)
case 36:a0=c0
if(J.d8(a0)&&typeof J.T(J.bH(a0),"last_error")=="string"){b3=J.T(J.bH(a0),"last_error")
b3.toString
n.ch=A.G(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.C(b6)
if(b3 instanceof A.bK)n.jQ()
else if(b3 instanceof A.bl){a1=b3
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
return A.a(b3.bB(),$async$be)
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
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.O
s=1
break}if(J.an(i)!==0)n.tw(i)
a9=k||a.f
b0=new A.aI(A.m3(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.e_()
s=42
return A.a(n.aO(a9&&b1===B.bp?B.bq:b1),$async$be)
case 42:q=n.ok=new A.bd(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$be,r)}}
A.yv.prototype={
$1(a){return this.a.wt()},
$S:30}
A.yl.prototype={
$1(a){return this.a.hi()},
$S:46}
A.yt.prototype={
$1(a){return this.a.hn(this.b)},
$S:46}
A.ys.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jN()}if(r||p.length===0)s.mu()
else s.jZ(p)},
$S:0}
A.yr.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jZ(this.b)},
$S:0}
A.yu.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aO(p.e_()),$async$$0)
case 2:p.cj("cycle")
s=3
return A.a(p.fa(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.yo.prototype={
$1(a){return this.a.be(this.b)},
$S:139}
A.yp.prototype={
$1(a){return B.O},
$S:140}
A.yq.prototype={
$1(a){return B.O},
$S:141}
A.ym.prototype={
$1(a){},
$S:142}
A.yn.prototype={
$2(a,b){var s=this.a
if(s.ch==null)s.ch=A.r(a)
s.aO(B.bq)},
$S:6}
A.df.prototype={
l(a){return"MapFailure: "+this.a},
$iH:1}
A.eU.prototype={}
A.CF.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.CG.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.jf.prototype={}
A.aR.prototype={}
A.bA.prototype={}
A.hi.prototype={
al(a){var s=A.bO(a.c,t.N,t.X)
s.D(0,a.d)
s.D(0,a.e)
return new A.aR(s,!1,null)}}
A.fY.prototype={
al(a){var s=A.bO(a.c,t.N,t.X)
s.D(0,a.e)
s.D(0,a.d)
return new A.aR(s,!1,null)}}
A.ho.prototype={
al(a){return B.R.al(a)},
fT(a,b,c){var s,r,q,p,o,n=t.j,m=n.b(a)?a:B.j,l=n.b(b)?b:B.j,k=n.b(c)?c:B.j,j=J.Ds(m),i=J.Ds(l),h=J.Ds(k),g=i.fn(j),f=h.fn(j),e=j.fn(i),d=j.fn(h)
n=t.X
s=A.c0(e,n)
s.D(0,d)
r=j.nR(g).nR(f).fn(s)
q=[]
n=A.O(l,n)
B.b.D(n,k)
B.b.D(n,m)
s=n.length
p=0
for(;p<n.length;n.length===s||(0,A.p)(n),++p){o=n[p]
if(r.E(0,o)&&!B.b.E(q,o))q.push(o)}return q}}
A.eE.prototype={
al(a){return B.R.al(a)}}
A.ev.prototype={
al(a){return B.R.al(a)},
fT(a,b,c){var s,r,q,p=t.j,o=p.b(a)?a:B.j,n=p.b(b)?b:B.j,m=p.b(c)?c:B.j,l=[]
p=A.O(o,t.X)
B.b.D(p,n)
B.b.D(p,m)
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.p)(p),++r){q=p[r]
if(!B.b.bl(l,new A.qb(q)))l.push(q)}return l}}
A.qb.prototype={
$1(a){return B.p.V(a,this.a)},
$S:15}
A.fz.prototype={
al(a){return B.R.al(a)},
fT(a,b,c){var s,r,q,p=typeof a=="string"?a:"",o=typeof b=="string"?b:"",n=typeof c=="string"?c:"",m=A.l([],t.s),l=new A.qa(m)
for(s=p.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=o.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=n.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
return B.b.C(m,"\n")}}
A.qa.prototype={
$1(a){var s=B.a.ca(a)
if(s.length!==0&&!B.b.E(this.a,s))this.a.push(s)},
$S:144}
A.lX.prototype={
al(a){return this.a.$1(a)}}
A.mY.prototype={}
A.Bi.prototype={}
A.Bg.prototype={}
A.zA.prototype={}
A.vV.prototype={
$1(a){if(a==null)return new A.aR(A.O9(this.a,this.b,this.c),!0,"Collection resolver declined resolution")
return new A.aR(a.a,a.b,a.c)},
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
$1(a){return a instanceof A.w?a:A.bi(a,t.X)},
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
fp(a){return this.vF(a)},
vF(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.db.$0()
e=e.x
s=3
return A.a(e.xq("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$fp)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.E(o);l.k();)m.push(A.Ky(l.gn()))
l=A.aP(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.p)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.l7(e,l),$async$fp)
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
return A.f($async$fp,r)},
nw(a){return this.a.a1(new A.wd(a),t.H)},
wR(a,b,c,d){return this.a.a1(new A.we(c,d,b,a),t.H)}}
A.wd.prototype={
$1(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.we.prototype={
$1(a){return this.oi(a)},
oi(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.qp.prototype={}
A.jb.prototype={}
A.jJ.prototype={}
A.wg.prototype={
h2(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.d3(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
eI(a,b,c){return this.xA(a,b,c)},
xA(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$eI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$eI)
case 3:p=e
o=J.J(p)
q=o.gF(p)?null:A.jA(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eI,r)},
bN(a,b,c){return this.xC(a,b,c)},
xC(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bN=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bN)
case 3:p=e
o=J.J(p)
q=o.gF(p)?null:A.hy(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
bt(a,b,c,d,e,f,g,h,i,j,k,l){return this.uy(a,b,c,d,e,f,g,h,i,j,k,l)},
uy(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bt=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a7)throw A.b(A.Fp("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ar
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.M
break A}if(B.D===a5){l=a6==null?B.v:B.a4
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.M
break B}if(B.D===a5){l=B.a4
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.D===a5){l=B.a4
break C}l=B.M
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.M
break D}if(B.D===a5){l=B.a4
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.X("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bt)
case 5:s=6
return A.a(a8.X("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bt)
case 6:s=7
return A.a(p.hN(a8,a2,a9),$async$bt)
case 7:s=8
return A.a(a8.X(a2,"id = ?",[a9]),$async$bt)
case 8:q=B.d8
s=1
break
case 4:k=p.a.db.$0()
j=a4?null:b2.w
if(j==null)j=p.h2()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.dp("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
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
case 9:f=A.io(B.a0)
e=B.b.C(A.a9(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aJ("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.I8(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bt)
case 12:s=10
break
case 11:s=13
return A.a(a8.aJ('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bt)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.D(f,B.cW)
if(o)B.b.D(f,B.cJ)
s=a3?14:16
break
case 14:a3=A.io(B.a_)
l=B.b.C(A.a9(16,"?",!1,l),", ")
s=17
return A.a(a8.aJ("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.Il(B.a8,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bt)
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
return A.a(a8.aJ(a3.charCodeAt(0)==0?a3:a3,a1),$async$bt)
case 18:case 15:q=new A.jb(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bt,r)},
hN(a,b,c){return this.u5(a,b,c)},
u5(a,b,c){var s=0,r=A.h(t.H)
var $async$hN=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cL(a,b,c,!1),$async$hN)
case 2:return A.e(null,r)}})
return A.f($async$hN,r)},
fq(a,b){return this.vG(a,b)},
vG(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.x
f=new A.a6("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ae("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$fq)
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
return A.a(A.l7(g,f),$async$fq)
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
return A.f($async$fq,r)},
lc(a){if(a.length===0)return A.bi(null,t.H)
return this.a.a1(new A.wm(this,a),t.H)},
aN(a,b){return this.tJ(a,b)},
tJ(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aN=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
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
return A.a(b.aK("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aN)
case 5:o=a9
n=J.J(o)
s=!(n.gS(o)&&!J.x(J.T(n.gH(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aK(a,1,"id = ?",[a1]),$async$aN)
case 8:m=a9
n=J.J(m)
l=n.gS(m)?A.bU(a3,n.gH(m),a2.cx,a2.cy):null
s=9
return A.a(b.L(a,A.dD(a3,J.x(a5.h(0,"archived"),!0),a2.cx,a2.cy,a1,a5),"id = ?",[a1]),$async$aN)
case 9:a6.a2(new A.a5(a0,A.ap([a1],t.N)))
k=A.bS(l==null?B.k:l,a5)
k.G(0,"id")
a6.bJ(B.A,k,a1,a5,l,B.ag,a0)
case 7:case 4:a=a3.a
s=10
return A.a(b.aK(a,1,"id = ?",[a1]),$async$aN)
case 10:j=a9
a5=J.J(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aN)
case 13:s=14
return A.a(p.dl(b,a0,a1,a7.c,a4),$async$aN)
case 14:a6.a2(new A.a5(a0,A.ap([a1],t.N)))
s=1
break
case 12:n=a2.cx
a2=a2.cy
i=A.bU(a3,a5.gH(j),n,a2)
h=A.au(B.m.v(B.e.v(A.ak(A.bn(a3,i)))).a)
a5=a7.b
g=A.au(B.m.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aN)
case 18:s=19
return A.a(p.dl(b,a0,a1,a7.c,a4),$async$aN)
case 19:a6.a2(new A.a5(a0,A.ap([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aI(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bs(d,a5,f):A.t(a5,f)
s=23
return A.a(b.L(a,A.dD(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aN)
case 23:s=24
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aN)
case 24:s=25
return A.a(p.dl(b,a0,a1,a7.c,a4),$async$aN)
case 25:a6.a2(new A.a5(a0,A.ap([a1],a5)))
k=A.bS(i,c)
k.G(0,"id")
a6.bJ(B.A,k,a1,c,i,B.ag,a0)
s=21
break
case 22:g=A.au(B.m.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aN)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aN)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aN)
case 28:a6.a2(new A.a5(a0,A.ap([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aN,r)},
dl(a,b,c,d,e){return this.rm(a,b,c,d,e)},
rm(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$dl=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$dl)
case 2:s=3
return A.a(a.L(q.a.aw(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$dl)
case 3:return A.e(null,r)}})
return A.f($async$dl,r)},
xD(a,b,c,d,e){return this.a.a1(new A.wk(c,e,d,B.G,a,b),t.H)},
nv(a,b,c,d,e,f){return this.a.a1(new A.wj(this,c,f,b,a,d,e),t.H)},
fE(a,b,c,d,e){return this.nv(a,b,c,d,B.ar,e)},
nu(a,b,c){return this.a.a1(new A.wi(a,c,b),t.H)},
xL(){return this.a.a1(new A.wl(null),t.S)},
fh(a,b,c,d,e,f,g){return this.uv(a,b,c,d,e,f,g)},
uv(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$fh=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$fh)
case 2:p=A.t(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$fh)
case 3:return A.e(null,r)}})
return A.f($async$fh,r)}}
A.wm.prototype={
$1(a){return this.oo(a)},
oo(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aN(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.p)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wk.prototype={
$1(a){return this.om(a)},
om(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wj.prototype={
$1(a){return this.ol(a)},
ol(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wi.prototype={
$1(a){return this.oj(a)},
oj(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wl.prototype={
$1(a){return this.on(a)},
on(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:150}
A.ew.prototype={
a7(){return"ApplyResult."+this.b}}
A.nn.prototype={}
A.xb.prototype={
dF(a){return this.xi(a)},
xi(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dF=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iM(b4),$async$dF)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.IW().ev(n)
if(m==null)A.u(A.aV('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aM(k)
k=l[2]
k.toString
i=A.aM(k)
k=l[3]
k.toString
h=A.aM(k)
k=l[4]
k.toString
g=A.aM(k)
k=l[5]
k.toString
f=A.aM(k)
k=l[6]
k.toString
e=A.aM(k)
l=l[7]
l.toString
d=A.aM(l)
if(i<1||i>12||g>23||f>59||e>59)A.u(A.aV('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.Dx(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.x_(k))A.u(A.aV('Bad timestamp "'+n+'"'))
o=A.OC(A.Dx(j,i,h,g,f,e,d).jf(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.fY(B.c.bu(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.Q,k=k.fy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}s=6
return A.a(a0.nr(b4,a2,o,b),$async$dF)
case 6:a4=b6
a5=J.J(a4)
if(a5.gF(a4)){s=5
break}++a.ax
a6=p.ro(a4)
a7=k.h(0,b4)
if(a7==null)A.u(A.A(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.EV(a7.a,a4),$async$dF)
case 8:s=7
return A.a(b0.b1(new b1.xj(b2,p,b3,b6,a6),l),$async$dF)
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
return A.f($async$dF,r)},
mJ(a,b){var s=B.a.a3(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a3(a.a,b.b)<=0},
tX(a,b){var s=B.a.a3(a.c,b.c)
if(s!==0)return s>0
return B.a.a3(a.a,b.a)>0},
ro(a){var s,r,q,p=J.ax(a),o=p.gH(a)
for(p=p.b6(a,1),s=p.$ti,p=new A.as(p,p.gm(0),s.i("as<a0.E>")),s=s.i("a0.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.tX(q,o))o=q}return o},
ia(a){return this.vU(a)},
vU(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$ia=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.b1(new A.xd(o,p,a),t.P),$async$ia)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
dA(a,b){return this.vX(a,b)},
vX(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dA=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bP(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.fy,e=n.b,d=A.a1(j),c=d.c,d=d.i("cD<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cD(j,0,200,d)
a2.ja(j,0,200,c)
a3=a2.bP(0)
a4=a3.length
b&1&&A.K(j,18)
A.bk(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
s=12
return A.a(e.aR(l),$async$dA)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a8=A.C(b1)
if(a8 instanceof A.ce){J.aN(m,l)
s=6
break}else if(a8 instanceof A.bK)throw b1
else if(a8 instanceof A.bl){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aN(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.p)(a3),++a6
s=5
break
case 7:s=J.an(m)!==0?13:14
break
case 13:s=15
return A.a(n.fG(b2,m),$async$dA)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.u(A.A(a1))
b0=a9.a
a2=A.l([],g)
for(a8=a5.length,a6=0;a6<a5.length;a5.length===a8||(0,A.p)(a5),++a6)a2.push(A.EW(b0,a5[a6]))
s=16
return A.a(i.b1(new A.xf(n,a2,b2,b0),h),$async$dA)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dA,r)},
e9(a,b,c,d){return this.rV(a,b,c,d)},
rV(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$e9=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.t(c,t.o)
a=A.t(c,t.G)
o=p.a,n=o.cx,m=o.cy,o=o.fy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.U(a4,k,B.c.bu(i,0,j))
g=B.b.C(A.a9(h.length,"?",!1,c),", ")
j=[a2]
B.b.D(j,h)
a0=J
s=6
return A.a(a1.ae(u.m+g+")",j),$async$e9)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.G(e),A.hy(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.u(A.A(l))
a0=J
s=9
return A.a(a1.bM(d.a.a,"id IN ("+g+")",h),$async$e9)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.G(e),A.bU(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a_(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e9,r)},
mT(a,b,c,d,e){return this.a8(a,b,A.EW(this.a.aw(b).a,c),null,!1,d,e)},
uA(a,b,c){return this.mT(a,b,c,null,!1)},
a8(a,b,c,d,e,f,g){return this.uz(a,b,c,d,e,f,g)},
mS(a,b,c){return this.a8(a,b,c,null,!1,null,!1)},
uz(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return A.a(n.bD(a4,a7,b2,a8,a9),$async$a8)
case 5:q=B.aa
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
return A.a(n.bD(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a8)
case 8:q=B.aa
s=1
break
case 7:g=a8.a
f=$.q4()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bD(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a8)
case 11:q=B.aa
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
return A.a(g.bN(a4,b2,a8.a),$async$a8)
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
return A.a(n.e.dE(a4,a8.a,a8.e,b2),$async$a8)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Jb(a4,a6.a,A.dD(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9)),$async$a8)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.dt(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 26:b1.a2(new A.a5(b2,A.ap([a8.a],t.N)))
b=A.bS(B.k,a9)
b.G(0,"id")
b1.bJ(B.af,b,a8.a,a9,null,B.aw,b2)
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
return A.a(n.ck(b1,b2,a8.a,a8.c,!1),$async$a8)
case 31:q=B.ab
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dD(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9),"id = ?",[a8.a]),$async$a8)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.dt(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 33:b1.a2(new A.a5(b2,A.ap([a8.a],t.N)))
b=A.bS(d,a9)
b.G(0,"id")
b1.bJ(B.A,b,a8.a,a9,d,B.aw,b2)
q=B.a9
s=1
break
case 28:s=a===B.G||a===B.bs||a===B.a7?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.ck(b1,b2,a8.a,a8.c,!1),$async$a8)
case 38:q=B.ab
s=1
break
case 37:s=a===B.a7?39:40
break
case 39:s=41
return A.a(n.ck(b1,b2,a8.a,a8.c,!1),$async$a8)
case 41:q=B.ab
s=1
break
case 40:a0=A.bn(a7,d)
s=A.ak(a0)===i?42:43
break
case 42:s=44
return A.a(a4.X("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a8)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.dt(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a8)
case 45:b1.a2(new A.a5(b2,A.ap([a8.a],t.N)))
q=B.a9
s=1
break
case 43:l=null
p=47
a9=m
l=A.im(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.C(b0)
s=a5 instanceof A.df?50:52
break
case 50:k=a5
s=53
return A.a(n.bD(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a8)
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
f=A.I6(l,a0,new A.mY(a9.a,g.b,f.c),a8.a,j,b2)
s=54
return A.a(t.fr.b(f)?f:A.bF(f,t.r),$async$a8)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.f8(a4,b2,a8,a7,m,a0,l,a2),$async$a8)
case 57:s=58
return A.a(n.ck(b1,b2,a8.a,a8.c,!1),$async$a8)
case 58:a5=t.N
b1.a2(new A.a5(b2,A.ap([a8.a],a5)))
b1.a2(new A.a5("lp_conflicts",A.ap([a8.a],a5)))
q=B.bC
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dD(a7,J.x(a3.h(0,"archived"),!0),a5.cx,a5.cy,a9,a3),"id = ?",[a8.a]),$async$a8)
case 59:a5=a5.dx
a5===$&&A.v()
s=60
return A.a(a5.fh(a4,b2,a8.a,h,i,a8.c,A.ak(a3)),$async$a8)
case 60:s=61
return A.a(n.tU(b1,b2,a8.a,a8.c),$async$a8)
case 61:b1.a2(new A.a5(b2,A.ap([a8.a],t.N)))
b=A.bS(d,a3)
b.G(0,"id")
b1.bJ(B.A,b,a8.a,a3,d,B.ag,b2)
q=B.a9
s=1
break
case 35:q=B.ab
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a8,r)},
f8(a,b,c,d,e,f,g,h){return this.th(a,b,c,d,e,f,g,h)},
th(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$f8=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bn(d,A.fr(d,c))
k=A.bS(g,f)
j=A.O(k,A.n(k).c)
B.b.aj(j)
k=A.bS(g,l)
p=A.O(k,A.n(k).c)
B.b.aj(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ak(g)
n=t.N
m=t.X
s=2
return A.a(a.cr(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ak(f),"remote_json",A.ak(l),"dirty_local",B.h.a9(j,null),"dirty_remote",B.h.a9(p,null),"detected_at",q.c.ay.$0()],n,m),B.T),$async$f8)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(l),"base_hash",A.au(B.m.v(B.e.v(A.ak(A.bn(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$f8)
case 3:return A.e(null,r)}})
return A.f($async$f8,r)},
bD(a,b,c,d,e){return this.ta(a,b,c,d,e)},
ta(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bD=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a9(d.d,null)}catch(a1){o=t.N
e=B.h.a9(A.m(["raw",d.d.l(0)],o,o),null)}o=d.a
s=2
return A.a(a.X("lp_dead_letter","store = ? AND record_id = ?",[c,o]),$async$bD)
case 2:n=q.c
m=n.ay
l=t.N
k=t.X
s=3
return A.a(a.aF(0,"lp_dead_letter",A.m(["at",m.$0(),"kind","map_failure","store",c,"record_id",o,"error",a0,"payload_json",e],l,k)),$async$bD)
case 3:j=q.a.dx
j===$&&A.v()
s=4
return A.a(j.bN(a,c,o),$async$bD)
case 4:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=g>=8?253402300799e3:m.$0()+B.c.M(n.n7(g).a,1000)
n=d.c
s=j?5:7
break
case 5:s=8
return A.a(a.aF(0,"lp_sync_row",A.m(["store",c,"record_id",o,"remote_updated",n,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bD)
case 8:s=6
break
case 7:s=9
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",n,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,o]),$async$bD)
case 9:case 6:return A.e(null,r)}})
return A.f($async$bD,r)},
dt(a,b,c,d,e,f,g,h){return this.u3(a,b,c,d,e,f,g,!0)},
u3(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$dt=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aF(0,"lp_sync_row",o),$async$dt)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$dt)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dt,r)},
ck(a,b,c,d,e){return this.tV(a,b,c,d,e)},
tU(a,b,c,d){return this.ck(a,b,c,d,!0)},
tV(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ck=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.t(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$ck)
case 2:s=3
return A.a(p.L(q.a.aw(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$ck)
case 3:if(g>0)a.a2(new A.a5(b,A.ap([c],o)))
return A.e(null,r)}})
return A.f($async$ck,r)},
fG(a,b){return this.wS(a,b)},
wS(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bP(b,!0,t.N)
n=A.a1(o),m=n.c,n=n.i("cD<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cD(o,0,500,n)
i.ja(o,0,500,m)
h=i.bP(0)
g=h.length
l&1&&A.K(o,18)
A.bk(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.b1(new A.xh(p,a,h),j),$async$fG)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fG,r)}}
A.xj.prototype={
$0(){var s=this,r=s.b
return r.a.a1(new A.xi(s.a,r,s.c,s.d,s.e),t.P)},
$S:23}
A.xi.prototype={
$1(a){return this.ou(a)},
ou(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
return A.a(a.e9(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aP(t.N)
a2=o.gt(p),a0=a0.Q
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mJ(i,c)){s=3
break}p=i.a
s=j.E(0,p)?5:7
break
case 5:s=8
return A.a(a.mS(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.mJ(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eO(b,a1,e,f),$async$$1)
case 10:d.a=new A.jI(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.xd.prototype={
$0(){var s=this.b
return s.a.a1(new A.xc(this.a,s,this.c),t.P)},
$S:23}
A.xc.prototype={
$1(a){return this.or(a)},
or(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.dx
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bN(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.uA(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a3(o.c,k)<=0){s=1
break}s=7
return A.a(l.mT(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.xf.prototype={
$0(){var s=this,r=s.a
return r.a.a1(new A.xe(r,s.b,s.c,s.d),t.P)},
$S:23}
A.xe.prototype={
$1(a){return this.os(a)},
os(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.e9(a.b,m,q.d,e),$async$$1)
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
return A.a(o.mS(a,m,h),$async$$1)
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
A.xh.prototype={
$0(){var s=this.a
return s.a.a1(new A.xg(s,this.b,this.c),t.P)},
$S:23}
A.xg.prototype={
$1(a){return this.ot(a)},
ot(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
return A.a(i.bM(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.cx,h=h.cy
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.G(m),A.bU(f,n,o,h))
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
case 6:a2.a2(new A.a5(g,A.mV(d,A.a1(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.p)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dV(null,null,c,h)
p.D(0,j)
p.j(0,"hidden",!0)
a2.bJ(B.cg,B.dM,k,p,j,B.aw,g)}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b_.prototype={}
A.xk.prototype={
fN(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.dx
f===$&&A.v()
s=3
return A.a(f.fq(25,p.c.ay.$0()),$async$fN)
case 3:o=b
f=J.J(o)
if(f.gF(o)){q=B.a5
s=1
break}if(p.f){q=p.bh(o)
s=1
break}f=f.gt(o),n=B.a5
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dm(f.gn()),$async$fN)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.b_(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
dm(a){return this.t5(a)},
t5(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dm=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.dx
l===$&&A.v()
m=m.x
s=3
return A.a(l.eI(m,a.a,a.b),$async$dm)
case 3:o=c
if(o==null){q=B.a5
s=1
break}s=4
return A.a(l.bN(m,o.a,o.b),$async$dm)
case 4:n=c
if(n==null){q=B.a5
s=1
break}if(o.e==null){q=p.t3(o,n)
s=1
break}q=p.jR(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dm,r)},
bX(a,b,c,d,e){return this.rd(a,b,c,d,e)},
rb(a,b,c,d){return this.bX(a,b,c,!1,d)},
r9(a,b,c){return this.bX(a,b,c,!1,!1)},
ra(a,b,c,d){return this.bX(a,b,c,d,!1)},
rd(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bX=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bX)
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
s=k instanceof A.bK?8:10
break
case 8:n.e.$0()
q=B.aq
s=1
break
s=9
break
case 10:s=k instanceof A.cd?11:13
break
case 11:k=n.a.dx
k===$&&A.v()
s=14
return A.a(k.nu("forbidden_push",a.b,a.a),$async$bX)
case 14:q=B.dv
s=1
break
s=12
break
case 13:s=k instanceof A.dh?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.di(a,"validation_push",m.a),$async$bX)
case 20:q=B.F
s=1
break
case 19:q=n.cK(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.ce){q=n.cI(a,b,!e)
s=1
break}else if(k instanceof A.bl){l=k
q=n.cK(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bX,r)},
hC(a,b,c){return this.t4(a,b,c)},
t3(a,b){return this.hC(a,b,!1)},
t4(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$hC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bX(a,b,new A.xm(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hC,r)},
jV(a,b,c){return this.ti(a,b,c)},
ti(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.rb(a,b,new A.xr(p,a,p.a.aw(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jV,r)},
jR(a,b){return this.t6(a,b)},
t6(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.r9(a,b,new A.xp(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jR,r)},
dn(a,b,c,d){return this.t7(a,b,c,d)},
mk(a,b,c){return this.dn(a,b,c,!1)},
t7(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$dn=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.lu(a,c)
j=n.a.aw(a.a).a
i=a.d
s=A.au(B.m.v(B.e.v(A.ak(A.bn(j,A.fr(j,c))))).a)===A.au(B.m.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.f6(a,c),$async$dn)
case 5:q=B.a6
s=1
break
case 4:m=null
l=null
p=7
m=A.im(b.r)
l=A.im(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.C(f)
s=i instanceof A.df?10:12
break
case 10:k=i
s=13
return A.a(n.di(a,"corrupt_payload",k.a),$async$dn)
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
return A.a(n.e6(a,b,c,j,m,l),$async$dn)
case 14:g=a0
if(g==null){q=B.bj
s=1
break}q=n.bX(a,b,new A.xn(n,a,A.ak(A.bn(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dn,r)},
bh(a){return this.t2(a)},
t2(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$bh=A.c(function(d1,d2){if(d1===1){o.push(d2)
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
return A.a(a2.eI(a0,a1.a,a1.b),$async$bh)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bN(a0,m.a,m.b),$async$bh)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.u(A.A('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
s=11
return A.a(b.aR(m.b),$async$bh)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.C(c8)
s=a1 instanceof A.ce?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.jH(m,l),$async$bh)
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
case 20:s=a1 instanceof A.cd?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.nu("forbidden_push",m.b,a1),$async$bh)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bl?25:27
break
case 25:i=a1
s=28
return A.a(n.cK(m,l,i),$async$bh)
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
if(a1!==a6)A.u(A.eQ('record id "'+a1+'" does not match requested "'+a6+'"'))
a7=new A.a6("")
A.cp(a7,A.bn(a4,A.fr(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.ca()
a6=A.d3(a8)
a6.u(0,a1)
a6.q()
a9=A.au(a8.a.a)
a6=B.e.v(m.d)
a8=new A.ca()
a1=A.d3(a8)
a1.u(0,a6)
a1.q()
s=a9===A.au(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.f6(m,k),$async$bh)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.im(l.r)
f=A.im(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.C(c9)
s=a1 instanceof A.df?38:40
break
case 38:e=a1
a1=m.a
a6=m.b
s=41
return A.a(a2.fE(e.a,a6,"corrupt_payload",m.d,a1),$async$bh)
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
return A.a(n.e6(m,l,k,a4,g,f),$async$bh)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a6=m.b
b1=b0.a
a7=new A.a6("")
A.cp(a7,A.bn(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.hd(a1,a2,a6,b2.charCodeAt(0)==0?b2:b2,b3,!0))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.hd(m.w,m.a,m.b,m.d,m.e,!0))
s=3
break
case 4:s=b9.length!==0?43:44
break
case 43:b4=b.gi1().b
if(b4<=0)b4=25
if(25<b4)b4=25
b5=0
case 45:if(!(b6=b9.length,b5<b6)){s=47
break}b7=b5+b4
s=48
return A.a(n.bG(B.b.U(b9,b5,b7<b6?b7:b6),c1,c7),$async$bh)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b_(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b_(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bh,r)},
e6(a,b,c,d,e,f){return this.rp(a,b,c,d,e,f)},
rp(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n
var $async$e6=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=d.e
n=A.I6(e,f,new A.mY(n.a,n.b,n.c),a.b,A.bn(d,A.fr(d,c)),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bF(n,t.r),$async$e6)
case 3:o=h
s=o.b?4:5
break
case 4:s=6
return A.a(p.hD(a,b,c,o,e,f),$async$e6)
case 6:q=null
s=1
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e6,r)},
bG(a,b,c){return this.tD(a,b,c)},
tD(c8,c9,d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$bG=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:c5=0
c6=0
p=4
s=7
return A.a(n.b.bK(c8),$async$bG)
case 7:m=d2
b6=t.N
l=A.t(b6,t.gq)
for(b7=c8.length,b8=0;b8<c8.length;c8.length===b7||(0,A.p)(c8),++b8){k=c8[b8]
J.b4(l,k.a,k)}j=l
i=A.aP(b6)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aN(i,h.a)){l=A.aV("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aV("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.E(m),b6=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
b7=J.T(j,f.a)
b7.toString
e=b7
s=f.b&&f.c!=null?10:12
break
case 10:b7=n.jL(e,d0.h(0,e.a))
b9=B.e.v(e.d)
c0=new A.ca()
c1=A.d3(c0)
c1.u(0,b9)
c1.q()
c1=A.au(c0.a.a)
b9=f.e
if(b9==null)b9=e.d
J.aN(g,new A.jJ(b7,b9,f.c.c,c1,c9.h(0,e.a)));++c5
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
return A.a(b7.fE(c3,c1,c2,e.d,b9),$async$bG)
case 13:++c6
case 11:s=8
break
case 9:l=b6.dx
l===$&&A.v()
s=14
return A.a(l.lc(g),$async$bG)
case 14:l=c5
b6=c6
q=new A.b_(l,b6,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
c7=o.pop()
l=A.C(c7)
s=l instanceof A.da?15:17
break
case 15:q=n.ce(c8,c9,d0)
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
return A.a(b9.bN(b7,a2.b,a2.c),$async$bG)
case 24:a3=d2
if(a3==null){s=22
break}s=25
return A.a(n.dm(n.jK(a2)),$async$bG)
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
case 23:q=new A.b_(d,c,b,a,a0,a1)
s=1
break
s=19
break
case 20:s=l instanceof A.cd?26:28
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
return A.a(n.dm(n.jK(a9)),$async$bG)
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
case 31:q=new A.b_(c5,c6,a5,a6,a7,a8)
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
case 35:s=l instanceof A.bl?36:38
break
case 36:b1=l
b2=b1 instanceof A.cW?b1:new A.ds("network error")
l=c8.length,b6=n.a,b7=b6.x,b8=0
case 39:if(!(b8<c8.length)){s=41
break}b3=c8[b8]
b9=b6.dx
b9===$&&A.v()
s=42
return A.a(b9.bN(b7,b3.b,b3.c),$async$bG)
case 42:b4=d2
s=b4!=null?43:44
break
case 43:s=45
return A.a(n.cK(n.jK(b3),b4,b2),$async$bG)
case 45:b5=d2
c5+=b5.a
c6+=b5.b
case 44:case 40:c8.length===l||(0,A.p)(c8),++b8
s=39
break
case 41:q=new A.b_(c5,c6,0,0,0,!0)
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
return A.f($async$bG,r)},
ce(a,b,c){return this.pO(a,b,c)},
pO(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$ce=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.J(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gao(b5)
h=n.a.dx
h===$&&A.v()
b3=g.b
s=5
return A.a(h.fE("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$ce)
case 5:q=B.F
s=1
break
case 4:a0=B.c.M(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.U(b5,0,a0),b3.bd(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
s=13
return A.a(a3.bK(j),$async$ce)
case 13:i=b9
h=A.t(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.b4(h,g.a,g)}f=h
e=A.aP(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aN(e,d.a)){a6=A.aV("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aV("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.T(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jL(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.ea(a7,a8,a9,b0==null?b.d:b0),$async$ce)
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
return A.a(a7.fE(b1,a9,b0,b.d,a8),$async$ce)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.C(b4)
s=a6 instanceof A.da?21:23
break
case 21:s=24
return A.a(n.ce(j,b6,b7),$async$ce)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bl){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.b_(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ce,r)},
jL(a,b){var s=b==null?a.d:b
return new A.cx(a.b,a.c,B.v,s,a.e,A.au(B.m.v(B.e.v(a.d)).a),B.u,a.a,0,null)},
jK(a){return this.jL(a,null)},
ea(a,b,c,d){return this.tI(a,b,c,d)},
f6(a,b){return this.ea(a,b,null,null)},
tI(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$ea=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(a.a).a
n=A.fr(o,b)
m=d==null
l=m?A.ak(A.bn(o,n)):d
p=p.dx
p===$&&A.v()
s=2
return A.a(p.lc(A.l([new A.jJ(a,l,b.c,A.au(B.m.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$ea)
case 2:return A.e(null,r)}})
return A.f($async$ea,r)},
lu(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.eQ('record id "'+s+'" does not match requested "'+r+'"'))},
cK(a,b,c){return this.tr(a,b,c)},
tr(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cK=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.cW?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.dx
o===$&&A.v()
s=5
return A.a(o.nv(c.a,a.b,"max_attempts",a.d,B.ar,a.a),$async$cK)
case 5:q=B.F
s=1
break
case 4:o=p.c
n=o.n8(l,k)
m=p.a.dx
m===$&&A.v()
s=6
return A.a(m.xD(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$cK)
case 6:q=B.aq
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cK,r)},
di(a,b,c){return this.qn(a,b,c)},
lO(a,b){return this.di(a,b,null)},
qn(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$di=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.dx
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.fE(p,a.b,b,a.d,a.a),$async$di)
case 2:return A.e(null,r)}})
return A.f($async$di,r)},
cI(a,b,c){return this.r4(a,b,c)},
jH(a,b){return this.cI(a,b,!0)},
r4(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cI=A.c(function(d,e){if(d===1){o.push(e)
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
m=A.im(b.r)
l=A.im(a.d)
p=2
s=11
break
case 9:p=8
g=o.pop()
i=A.C(g)
s=i instanceof A.df?12:14
break
case 12:k=i
s=15
return A.a(n.di(a,"corrupt_payload",k.a),$async$cI)
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
return A.a(n.hl(a,b,m,l),$async$cI)
case 16:q=B.bj
s=1
break
case 6:s=!c?17:18
break
case 17:s=19
return A.a(n.lO(a,"missing_target"),$async$cI)
case 19:q=B.F
s=1
break
case 18:q=n.hC(a,b,!0)
s=1
break
case 7:s=20
return A.a(i.bv(h).iK(a.b),$async$cI)
case 20:q=B.du
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cI,r)},
hl(a,b,c,d){return this.qE(a,b,c,d)},
qE(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$hl=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bS(c,d)
n=A.O(o,A.n(o).c)
B.b.aj(n)
p=b.r
if(p==null)p=A.ak(c)
s=2
return A.a(q.a.a1(new A.xl(q,a,p,d,n),t.P),$async$hl)
case 2:return A.e(null,r)}})
return A.f($async$hl,r)},
hD(a,b,c,d,e,f){return this.tg(a,b,c,d,e,f)},
tg(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hD=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.aw(a.a).a
m=A.bn(n,A.fr(n,c))
l=A.bS(e,f)
k=A.O(l,A.n(l).c)
B.b.aj(k)
l=A.bS(e,m)
p=A.O(l,A.n(l).c)
B.b.aj(p)
s=2
return A.a(o.a1(new A.xq(q,a,b,e,f,m,k,p,n,c),t.P),$async$hD)
case 2:return A.e(null,r)}})
return A.f($async$hD,r)}}
A.xm.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
s=7
return A.a(l.b.c2(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.f6(k,m),$async$$0)
case 8:q=B.a6
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.C(i) instanceof A.dL){q=n.a.jV(n.b,n.c,n.d)
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
A.xr.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
s=3
return A.a(n.b.aR(m.b),$async$$0)
case 3:l=b
s=l==null?4:5
break
case 4:s=6
return A.a(n.lO(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.F
s=1
break
case 5:o=p.c
s=A.au(B.m.v(B.e.v(A.ak(A.bn(o,A.fr(o,l))))).a)===A.au(B.m.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.f6(m,l),$async$$0)
case 9:q=B.a6
s=1
break
case 8:q=n.dn(m,p.d,l,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.xp.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
s=3
return A.a(n.b.aR(m.b),$async$$0)
case 3:l=b
if(l==null){q=n.jH(m,p.c)
s=1
break}n.lu(m,l)
if(l.c===m.e){o=p.c
q=n.ra(m,o,new A.xo(n,m,l,o),!0)
s=1
break}q=n.mk(m,p.c,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.xo.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
k=n.a
j=n.b
s=7
return A.a(k.b.bQ(n.c.c,j.d,j.b),$async$$0)
case 7:m=b
s=8
return A.a(k.f6(j,m),$async$$0)
case 8:q=B.a6
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
s=A.C(h) instanceof A.e5?9:11
break
case 9:k=n.a
j=n.b
s=12
return A.a(k.b.aR(j.b),$async$$0)
case 12:l=b
if(l==null){q=k.jH(j,n.d)
s=1
break}q=k.mk(j,n.d,l)
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
A.xn.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o
k=n
s=4
return A.a(o.b.bQ(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(l.ea(k,b,p.e.a,m),$async$$0)
case 3:q=B.a6
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.xl.prototype={
$1(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cr(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ak(q.d),"remote_json",A.ak(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a9(q.e,null),"dirty_remote",B.h.a9(B.u,null),"detected_at",q.a.c.ay.$0()],k,j),B.T),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a2(new A.a5(n,A.ap([m],k)))
a.a2(new A.a5("lp_conflicts",A.ap([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.xq.prototype={
$1(a){return this.ow(a)},
ow(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cr(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ak(q.e),"remote_json",A.ak(o),"dirty_local",B.h.a9(q.r,null),"dirty_remote",B.h.a9(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.T),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(o),"base_hash",A.au(B.m.v(B.e.v(A.ak(A.bn(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a2(new A.a5(j,A.ap([k],n)))
a.a2(new A.a5("lp_conflicts",A.ap([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.cj.prototype={
a7(){return"SyncEngineState."+this.b}}
A.hw.prototype={}
A.yi.prototype={
glw(){return 36},
dT(a){return this.pn(a)},
pn(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dT=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.fy,g=new A.bN(g,g.r,g.e,A.n(g).i("bN<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iN(m),$async$dT)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glw():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.an(c.a+1,n.glw())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bU(m,a),$async$dT)
case 13:a5.aN(a6,a9)
case 11:++j
s=10
break
case 12:if(A.oj(h)!=null)A.u(A.A(u.L))
b=h.b
b===$&&A.v()
s=14
return A.a(b.b3(new A.yj(c,n,m,a3),B.q,f),$async$dT)
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
return A.f($async$dT,r)},
bU(a,b){return this.pm(a,b)},
pm(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bU=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.U("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aP(t.N)
m=B.c.fY(B.c.bu(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:s=5
return A.a(k.ns(a4,h,o,m),$async$bU)
case 5:g=a7
f=J.J(g)
if(f.gF(g)){s=4
break}for(e=f.gt(g);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=f.gt(g);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hB(a4,e),$async$bU)
case 6:c=a7
b=A.l([],l)
for(e=f.gt(g);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aT||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dA(a4,b),$async$bU)
case 9:i+=b.length
case 8:h=f.ga_(g).a
if(f.gm(g)<m){s=4
break}s=3
break
case 4:k=p.a.x
f=o+"%"
s=10
return A.a(k.ae("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,f]),$async$bU)
case 10:a1=a7
a2=A.l([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.G(a)
if(!n.E(0,a)){if(J.x(d.h(0,"access_state"),"hidden")||J.x(d.h(0,"access_state"),"purged"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fG(a4,a2),$async$bU)
case 13:case 12:s=14
return A.a(k.ae("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,f,p.c.ay.$0()]),$async$bU)
case 14:a3=a7
k=J.J(a3)
s=k.gS(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){f=k.gn().h(0,"record_id")
f.toString
l.push(A.G(f))}s=17
return A.a(j.dA(a4,l),$async$bU)
case 17:case 16:q=new A.hw(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)},
hB(a,b){return this.rY(a,b)},
rY(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.t(g,t.o)
o=p.a.x,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.U(b,n,B.c.bu(l,0,m))
j=B.b.C(A.a9(k.length,"?",!1,g),", ")
m=[a]
B.b.D(m,k)
e=J
s=6
return A.a(o.ae(u.m+j+")",m),$async$hB)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.G(h),A.hy(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hB,r)}}
A.yj.prototype={
$1(a){return this.oy(a)},
oy(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eP(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bl.prototype={
l(a){return A.d7(this).l(0)+": "+this.a},
$iH:1}
A.ds.prototype={}
A.cW.prototype={}
A.eZ.prototype={}
A.bK.prototype={}
A.cd.prototype={}
A.ce.prototype={}
A.dh.prototype={}
A.e2.prototype={}
A.dL.prototype={}
A.hx.prototype={}
A.da.prototype={}
A.e5.prototype={}
A.lt.prototype={}
A.hu.prototype={
gm(a){return this.b}}
A.cU.prototype={}
A.hd.prototype={}
A.he.prototype={}
A.cs.prototype={
a7(){return"BackendHintKind."+this.b}}
A.cr.prototype={}
A.CS.prototype={
$2(a,b){return B.a.iG(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:153}
A.oc.prototype={
gnJ(){return 1}}
A.yk.prototype={
n8(a,b){var s,r
if(b!=null){s=this.rO(b)
if(A.a8(s))return A.bX(0,0,s<0?0:s)
if(s instanceof A.aI){r=s.a-this.ay.$0()
return r<=0?B.I:A.bX(0,r,0)}return B.ax}return A.I0(a,B.ax,B.ai,this.at)},
n7(a){return this.n8(a,null)},
rO(a){var s=B.a.ca(a),r=A.ha(s,null)
if(r!=null)return r
return A.L9(s)}}
A.x9.prototype={
iH(a){return this.xa(a)},
xa(a){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$iH=A.c(function(b,a0){if(b===1){o.push(a0)
s=p}for(;;)switch(s){case 0:f=a.h(0,"backend")
if(!A.a8(f))throw A.b(A.I('Backend call "backend" must be an int.',null))
m=n.a.h(0,f)
if(m==null)throw A.b(A.I("No proxy sync backend #"+A.r(f)+" is running (it was stopped or never started).",null))
j=a.h(0,"call")
if(typeof j!="string")throw A.b(A.I('Backend call "call" must be a string.',null))
case 3:switch(j){case"hint":s=5
break
case"currentToken":s=6
break
default:s=7
break}break
case 5:i=A.Ok(a.h(0,"hint"),"backend hint")
h=m.e
if((h.c&4)===0)h.u(0,i)
q=B.dh
s=1
break
case 6:p=9
d=A
c=!0
s=12
return A.a(m.b.c3(),$async$iH)
case 12:i=d.m(["ok",c,"result",a0],t.N,t.X)
q=i
s=1
break
p=2
s=11
break
case 9:p=8
e=o.pop()
i=A.C(e)
if(i instanceof A.bl){l=i
q=A.m(["ok",!1,"error",A.Ov(l)],t.N,t.X)
s=1
break}else{k=i
q=A.m(["ok",!1,"pageError",J.Z(k)],t.N,t.X)
s=1
break}s=11
break
case 8:s=2
break
case 11:s=4
break
case 7:throw A.b(A.I('Unknown backend call "'+j+'".',null))
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iH,r)}}
A.hb.prototype={
ni(){var s=this.e
return new A.aX(s,A.n(s).i("aX<1>"))},
fK(){return this.aG("prepare",B.k,"prepare()")},
d2(a,b,c,d,e){return this.wH(a,b,c,d,e)},
ns(a,b,c,d){return this.d2(a,b,null,c,d)},
nr(a,b,c,d){return this.d2(a,b,c,null,d)},
wH(a,b,c,d,e){var s=0,r=A.h(t.kR),q,p=this,o,n,m
var $async$d2=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=A.t(t.N,t.X)
n.j(0,"store",a)
if(c!=null)n.j(0,"fromUpdated",c)
if(b!=null)n.j(0,"fromId",b)
if(d!=null)n.j(0,"idPrefix",d)
n.j(0,"perPage",e)
o='listChanges("'+a+'")'
m=A
s=3
return A.a(p.aG("listChanges",n,o),$async$d2)
case 3:q=m.Op(g,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d2,r)},
aR(a){return this.oM(a)},
oM(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$aR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o='getRecord("'+a+'")'
s=3
return A.a(p.aG("getRecord",A.m(["id",a],t.N,t.X),o),$async$aR)
case 3:n=c
q=n==null?null:A.es(n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aR,r)},
c2(a,b,c){return this.uV(a,b,c)},
uV(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$c2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='createRecord("'+b+'")'
n=A
s=3
return A.a(p.aG("createRecord",A.m(["id",b,"store",c,"dataJson",a],t.N,t.X),o),$async$c2)
case 3:q=n.es(e,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c2,r)},
bQ(a,b,c){return this.y4(a,b,c)},
y4(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n,m
var $async$bQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=A.t(t.N,t.X)
n.j(0,"id",c)
n.j(0,"dataJson",b)
n.j(0,"baseUpdated",a)
o='updateRecord("'+c+'")'
m=A
s=3
return A.a(p.aG("updateRecord",n,o),$async$bQ)
case 3:q=m.es(e,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bQ,r)},
eN(a,b){var s=null,r=null
return this.y6(a,b)},
y6(a,b){var s=0,r=A.h(t.h),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$eN=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:i=null
h=null
g=null
p=4
m=A.t(t.N,t.X)
J.b4(m,"id",a)
if(i!=null)J.b4(m,"dataJson",i)
if(g!=null)J.b4(m,"session",g)
if(h!=null)J.b4(m,"keepNames",h)
J.b4(m,"removeNames",b)
k='updateRecordFiles("'+a+'")'
s=7
return A.a(n.aG("updateRecordFiles",m,k),$async$eN)
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
return A.a(n.eU(g),$async$eN)
case 8:throw f
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eN,r)},
cb(a,b){var s=null,r=null,q=null
return this.y8(a,b)},
y8(a6,a7){var s=0,r=A.h(t.h),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$cb=A.c(function(a8,a9){if(a8===1){o.push(a9)
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
return A.a(c.c.$0(),$async$cb)
case 7:l=a9
b=A.l([],e)
k=new A.oQ(b)
b=new A.cn(l,f)
p=8
case 11:s=13
return A.a(b.k(),$async$cb)
case 13:if(!a9){s=12
break}j=b.gn()
J.aN(k,j)
s=11
break
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
s=14
return A.a(b.A(),$async$cb)
case 14:s=n.pop()
break
case 10:g.push(new A.pH(d.a,c.a,k.iS()))
s=5
break
case 6:s=15
return A.a(m.ff(g),$async$cb)
case 15:a3=a9
case 4:p=17
i=A.t(t.N,t.X)
J.b4(i,"id",a6)
if(a0!=null)J.b4(i,"dataJson",a0)
if(a3!=null)J.b4(i,"session",a3)
if(a1!=null)J.b4(i,"keepNames",a1)
if(a2!=null)J.b4(i,"removeNames",a2)
a4='updateRecordFilesStream("'+a6+'")'
s=20
return A.a(m.aG("updateRecordFilesStream",i,a4),$async$cb)
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
return A.a(m.eU(a3),$async$cb)
case 21:throw a5
s=19
break
case 16:s=2
break
case 19:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cb,r)},
bI(a,b,c){return this.vD(a,b,c)},
vD(a,b,c){var s=0,r=A.h(t.v),q,p=this,o,n,m,l,k,j
var $async$bI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:m=A.t(t.N,t.X)
m.j(0,"recordId",b)
m.j(0,"filename",a)
o='downloadFile("'+b+'", "'+a
n=o+'")'
l=b
k=A
j=A
s=3
return A.a(p.aG("downloadBegin",m,n),$async$bI)
case 3:q=p.dZ(l,k.HC(j.ED(e,n).h(0,"sessionId"),o+'").sessionId'))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bI,r)},
dZ(a,b){return this.qw(a,b)},
qw(a,b){var $async$dZ=A.c(function(c,d){switch(c){case 2:n=q
s=n.pop()
break
case 1:o.push(d)
s=p}for(;;)switch(s){case 0:p=3
j='downloadFile("'+a,i=j+'") chunk bytes',h=t.N,g=t.X,j+='") chunk'
case 6:s=8
return A.bh(m.aG("downloadChunk",A.m(["sessionId",b],h,g),j),$async$dZ,r)
case 8:l=d
k=A.ED(l,j)
if(A.Mo(J.T(k,"done"),'downloadFile chunk "done"')){s=7
break}s=9
q=[1,4]
return A.bh(A.dy(A.Ol(J.T(k,"bytes"),i)),$async$dZ,r)
case 9:s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
p=11
s=14
return A.bh(m.aG("downloadEnd",A.m(["sessionId",b],t.N,t.X),'downloadFile("'+a+'") end'),$async$dZ,r)
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
case 5:case 1:return A.bh(null,0,r)
case 2:return A.bh(o.at(-1),1,r)}})
var s=0,r=A.Ez($async$dZ,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e
return A.EF(r)},
bK(a){return this.xl(a)},
xl(a){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i
var $async$bK=A.c(function(b,c){if(b===1)return A.d(c,r)
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
return A.a(p.aG("pushBatch",A.m(["ops",j],n,m),"pushBatch"),$async$bK)
case 3:q=i.Oo(c,"pushBatch")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bK,r)},
q(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this
var $async$q=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.d.a.G(0,n.a)
q=2
s=5
return A.a(n.aG("dispose",B.k,"dispose()"),$async$q)
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
ff(a){return this.u2(a)},
u2(a){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$ff=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:d="u"+p.a+"-"+p.f++
c=A.l([],t.ic)
for(o=a.length,n=t.N,m=t.K,l=0;l<a.length;a.length===o||(0,A.p)(a),++l){k=a[l]
c.push(A.m(["field",k.a,"filename",k.b,"length",k.c.length],n,m))}o=t.X
s=3
return A.a(p.aG("uploadBegin",A.m(["sessionId",d,"files",c],n,o),"uploadBegin"),$async$ff)
case 3:c=a.length,l=0
case 4:if(!(l<a.length)){s=6
break}k=a[l]
m=k.c,j=m.length,i=k.a,h='uploadChunk("'+i+'")',g=0
case 7:if(!(g<j)){s=9
break}f=g+262144
e=new Uint8Array(m.subarray(g,A.d4(g,f>j?j:f,j)))
s=10
return A.a(p.aG("uploadChunk",A.m(["sessionId",d,"field",i,"bytes",B.ac.geq().v(e)],n,o),h),$async$ff)
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
return A.f($async$ff,r)},
eU(a){return this.pB(a)},
pB(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l
var $async$eU=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(a==null){s=1
break}p=4
s=7
return A.a(n.aG("uploadAbort",A.m(["sessionId",a],t.N,t.X),"uploadAbort"),$async$eU)
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
return A.f($async$eU,r)},
aG(a,b,c){return this.pH(a,b,c)},
pH(a,b,c){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$aG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=A.t(t.N,t.X)
o.j(0,"method",a)
o.j(0,"backend",p.a)
o.D(0,b)
n=A
s=3
return A.a(p.c.cZ("syncBackend",o),$async$aG)
case 3:q=n.HW(e,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aG,r)},
$inX:1,
gi1(){return this.r},
gl8(){return this.w}}
A.pH.prototype={}
A.xa.prototype={
cS(a,b,c,d){return this.uP(a,b,c,d)},
uP(a,b,c,d){var s=0,r=A.h(t.o8),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cS=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:m=p.b
l=m.b++
k=p.a
f=A
e=A
s=3
return A.a(k.cZ("syncBackend",A.m(["method","create","backend",l,"baseUrl",a.l(0),"identity",b,"stores",c],t.N,t.X)),$async$cS)
case 3:j=f.ED(e.HW(a1,"sync backend create()"),"sync backend create()")
i=A.kY(j.h(0,"capabilities"),"create().capabilities")
h=i.I("batchEnabled")&&i.h(0,"batchEnabled")!=null&&A.Hp(i.h(0,"batchEnabled"),"create().capabilities","batchEnabled")
g=i.I("maxBatch")&&i.h(0,"maxBatch")!=null?A.Hq(i.h(0,"maxBatch"),"create().capabilities","maxBatch"):25
if(i.I("maxPage")&&i.h(0,"maxPage")!=null)A.Hq(i.h(0,"maxPage"),"create().capabilities","maxPage")
o=A.HC(j.h(0,"scopeId"),"create().scopeId")
n=new A.hb(l,d,k,m,A.dq(null,null,t.hw),new A.lt(h,g),o)
m.a.j(0,l,n)
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cS,r)},
cT(a){return this.vy(a)},
vy(a){var s=0,r=A.h(t.H)
var $async$cT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!(a instanceof A.hb))throw A.b(A.I("The proxy sync factory can only dispose backends it created.",null))
s=2
return A.a(a.q(),$async$cT)
case 2:return A.e(null,r)}})
return A.f($async$cT,r)}}
A.Cp.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.eB)},
$S:37}
A.jI.prototype={}
A.k0.prototype={}
A.yx.prototype={
iM(a){return this.xz(a)},
xz(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eG("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iM)
case 3:m=c
l=J.J(m)
if(l.gF(m)){q=null
s=1
break}o=A.a3(J.T(l.gH(m),"cursor_updated"))
n=A.a3(J.T(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jI(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iM,r)},
eO(a,b,c,d){return this.yp(a,b,c,d)},
yp(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eO=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eO)
case 5:s=m.bz(f)?2:4
break
case 2:s=6
return A.a(a.aF(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eO)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eO)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eO,r)},
iN(a){return this.xB(a)},
xB(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eG("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iN)
case 3:n=c
m=J.J(n)
if(m.gF(n)){q=B.dS
s=1
break}o=A.aY(J.T(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.k0(o,A.aY(J.T(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iN,r)},
eP(a,b,c,d){return this.yt(a,b,c,d)},
yt(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eP=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eP)
case 5:s=m.bz(f)?2:4
break
case 2:s=6
return A.a(a.aF(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eP)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eP)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eP,r)},
i3(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$i3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.b8("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$i3)
case 3:l=b
k=J.J(l)
j=k.gF(l)?B.k:k.gH(l)
k=A.aY(j.h(0,"pending"))
if(k==null)k=0
o=A.aY(j.h(0,"conflicts"))
if(o==null)o=0
n=A.aY(j.h(0,"hidden"))
if(n==null)n=0
m=A.aY(j.h(0,"blocked"))
q=new A.pm([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)}}
A.cY.prototype={
a7(){return"SyncState."+this.b}}
A.fx.prototype={
a7(){return"AccessState."+this.b}}
A.h8.prototype={
a7(){return"OutboxKind."+this.b}}
A.jz.prototype={
a7(){return"OpQueueKind."+this.b}}
A.Dd.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cX.prototype={}
A.yw.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
i=j.h(0,"record_id")
i.toString
A.G(i)
i=A.a3(j.h(0,"remote_updated"))
s=A.aY(j.h(0,"last_seen_at"))
r=A.a3(j.h(0,"base_updated"))
A.a3(j.h(0,"base_hash"))
q=A.a3(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fN(B.cO,A.G(p))
A.HX(j.h(0,"dirty_fields"))
o=A.aY(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fN(B.cN,A.G(n))
A.a3(j.h(0,"op_id"))
m=A.aY(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.aY(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a3(j.h(0,"last_error"))
A.aY(j.h(0,"schema_ver"))
return new A.cX(i,s,r,q,p,o,n,m,l,k)},
$S:154}
A.cx.prototype={}
A.wh.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
s=j.h(0,"record_id")
s.toString
A.G(s)
r=j.h(0,"kind")
r.toString
r=A.fN(B.cX,A.G(r))
q=j.h(0,"payload_json")
q.toString
A.G(q)
p=A.a3(j.h(0,"base_updated"))
o=A.a3(j.h(0,"base_hash"))
if(o==null)o=""
n=A.HX(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.G(m)
l=j.h(0,"created_at")
l.toString
A.aj(l)
k=j.h(0,"updated_at")
k.toString
A.aj(k)
return new A.cx(i,s,r,q,p,o,n,m,l,A.a3(j.h(0,"depends_on_op")))},
$S:155}
A.eV.prototype={}
A.wc.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.aj(l)
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
q=A.fN(B.cS,A.G(q))
p=m.h(0,"payload_json")
p.toString
A.G(p)
o=m.h(0,"state")
o.toString
A.G(o)
o=A.aY(m.h(0,"attempt_count"))
if(o==null)o=0
A.aY(m.h(0,"next_retry_at"))
A.a3(m.h(0,"last_error"))
n=A.a3(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.aj(m)
return new A.eV(l,s,r,q,p,o,n)},
$S:156}
A.Db.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:55}
A.Dc.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:55}
A.CJ.prototype={
$1(a){return a.b},
$S:158}
A.CK.prototype={
$1(a){return a.b===this.a},
$S:159}
A.bQ.prototype={
a2(a){this.c.push(a)
this.a.Q.r+=a.b.a},
ur(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bJ(a,b,c,d,e,f,g){var s
if(this.a.a$.b.d==null)return
if(b==null){s=e==null?d:e
s=J.Jk((s==null?B.k:s).gJ(),new A.yJ()).cz(0)}else s=b
this.ur(new A.e4(g,c,f,a,e,d,s))},
kt(a,b,c,d,e,f){return this.bJ(a,null,b,c,d,e,f)},
bv(a){var s=this.a
return new A.fE(s,s.aw(a),new A.iP(this.b),this)},
a1(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.A("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cQ(o,a,b)},
cQ(a,b,c){return this.ud(a,b,c,c)},
ud(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cQ=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cQ)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.Q
k=e.r
p=5
d=A.E9(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.q0(new A.yI(a3,j,a4),null,A.m([$.lc(),j],f,f),a4.i("y<0>")),$async$cQ)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cQ)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cQ)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cQ)
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
if(a>m)B.b.iR(h,m,a)
a=g.length
if(a>l)B.b.iR(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cQ,r)}}
A.yJ.prototype={
$1(a){return a!=="id"},
$S:13}
A.yI.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.Bn.prototype={}
A.m7.prototype={
a7(){return"DurabilityClass."+this.b}}
A.yA.prototype={
b3(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.B,t._)
r.c.push(new A.hN(a,new A.aG(s,t.jk)))
return s.W(new A.yH(c),c)}return this.tO(a,b,c)},
tO(a,b,c){var s,r,q,p=this
if(p.a.ax.a>0){s=p.c
if(s!=null)s.kz()}s=A.l([],t.i4)
r=new A.oU(p,b,s)
p.c=r
r.xM()
q=new A.w($.B,t._)
s.push(new A.hN(a,new A.aG(q,t.jk)))
return q.W(new A.yD(c),c)},
xx(a,b){var s,r=this.a
if(r.ax.a>0){s=this.c
if(s!=null)s.kz()}return r.e.b1(new A.yG(this,a,b),b)},
rt(){if(++this.d<64)return
this.d=0
A.c4(B.I,new A.yC(this))}}
A.yH.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yD.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yG.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a1(new A.yF(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.yF.prototype={
$1(a){return this.oz(a,this.c)},
oz(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.E9(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.q0(new A.yE(p.b,o,n),null,A.m([$.lc(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(rH)")}}
A.yE.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.yC.prototype={
$0(){var s=this.a.a.a.e
s===$&&A.v()
s.iW().ki(new A.yB())},
$S:0}
A.yB.prototype={
$1(a){},
$S:21}
A.oU.prototype={
xM(){var s,r,q=this,p=new A.aG(new A.w($.B,t.D),t.Q)
q.e=p
s=q.a.a
s.e.b1(new A.Ab(q,p),t.H)
r=s.ax
s=q.gw2()
if(r.a>0)A.c4(r,s)
else A.c4(B.I,s)},
kz(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.ak()},
cX(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cX=A.c(function(c4,c5){if(c4===1){o.push(c5)
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
return A.a(b5.nQ("PRAGMA synchronous=FULL",null),$async$cX)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a1(new A.Aa(m,i,h,l,g),t.P),$async$cX)
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
b8.ap(A.fk(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.u(A.A("Future already completed"))
b8.aH(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.fy,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.wz(a0.b)
b6.ks(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a1=f[b7]
b6.vI(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.C(c2)
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
b6.ap(A.fk(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.u(A.A("Future already completed"))
b6.ap(A.fk(a2,a3))}}throw c2
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
return A.a(f.nQ("PRAGMA synchronous=NORMAL",null),$async$cX)
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
a4=k.gvH();++f.a
f.d+=a4
b1.rt()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.p)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.u(A.A("Future already completed"))
a4.ap(A.fk(new A.bt("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cX,r)}}
A.Ab.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cX(),$async$$0)
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
A.Aa.prototype={
$1(a){return this.oA(a)},
oA(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.E9(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.q0(new A.A8(a,a0),null,A.m([$.lc(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.fg([B.b.gao(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.C(a1)
l=A.af(a1)
o.e.push(new A.fg([B.b.gao(a.c),null,m,l]))
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
return A.a(A.q0(new A.A9(a0,k),null,A.m([$.lc(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.fg([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.C(a2)
h=A.af(a2)
e.push(new A.fg([k,null,i,h]))
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
A.A8.prototype={
$0(){return B.b.gao(this.a.c).a.$1(this.b)},
$S:56}
A.A9.prototype={
$0(){return this.a.a1(new A.A7(this.b),t.z)},
$S:56}
A.A7.prototype={
$1(a){return this.a.a.$1(a)},
$S:161}
A.hN.prototype={}
A.nr.prototype={
ld(a){return a.a===this.x.b.a},
fu(){var s=this.x
return s.es(s.w==null&&!s.x?50:null).W(new A.xG(),t.J)},
n1(a){return A.O7(a,new A.xF(this),this.x.r.length!==0)},
ny(a){var s=this.y
return s==null?null:s.u(0,a)},
kN(a,b){var s=this.y
return s==null?null:s.bk(a,b)},
j7(){var s=this.y=A.nS(this.gkq(),new A.xH(this),null,null,!1,t.J)
return new A.bf(s,A.n(s).i("bf<1>"))},
fo(){this.lj()
var s=this.y
if(s!=null)s.q()}}
A.xG.prototype={
$1(a){return a.a},
$S:162}
A.xF.prototype={
$1(a){return this.a.a.Q.Q+=a},
$S:9}
A.xH.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.ei(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.nb.prototype={
ld(a){var s
if(a.a!==this.x.a.a)return!1
s=a.b
if(s.a!==0&&!s.E(0,this.y))return!1
return!0},
fu(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$fu=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.v()
o=p.x.a
s=3
return A.a(l.gbx().b.aK(o.a,1,"id = ?",[p.y]),$async$fu)
case 3:n=b
l=J.J(n)
if(l.gF(n)){q=null
s=1
break}q=A.bU(o,l.gH(n),m.cx,m.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
n1(a){return a==null?"<null>":A.au(B.m.v(B.e.v(A.ak(a))).a)},
ny(a){var s=this.z
return s==null?null:s.u(0,a)},
kN(a,b){var s=this.z
return s==null?null:s.bk(a,b)},
j7(){var s=this.z=A.nS(this.gkq(),new A.wa(this),null,null,!1,t.b)
return new A.bf(s,A.n(s).i("bf<1>"))},
fo(){this.lj()
var s=this.z
if(s!=null)s.q()}}
A.wa.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.ei(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fD.prototype={
kN(a,b){},
aC(){var s=this.a.a$.a
this.c=new A.aX(s,A.n(s).i("aX<1>")).aZ(this.grv())},
rw(a){var s,r=this
if(!r.ld(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.A()
r.d=A.c4(r.b,r.gmN())},
ei(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$ei=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(m.r){s=1
break}m.e=!0
h=m.a.Q;++h.y
p=4
s=7
return A.a(m.fu(),$async$ei)
case 7:l=b
if(m.r){n=[1]
s=5
break}k=m.n1(l)
if(!J.x(k,m.w)){m.w=k;++h.z
m.ny(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.C(f)
i=A.af(f)
if(!m.r)m.kN(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.A()
m.d=A.c4(m.b,m.gmN())}s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ei,r)},
fo(){var s,r=this
r.r=!0
s=r.d
if(s!=null)s.A()
r.f=!1
s=r.c
if(s!=null)s.A()}}
A.zv.prototype={
b1(a,b){var s,r=this;++r.b
r.md()
s=new A.w($.B,b.i("w<0>"))
r.a=r.a.W(new A.zw(r,new A.aG(s,b.i("aG<0>")),a),t.H)
return s},
md(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.zw.prototype={
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
l=A.af(i)
n.b.bw(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.md()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:46}
A.hI.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.z9.prototype={
$2(a,b){return new A.V(J.Z(a),b,t.eB)},
$S:37}
A.oz.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.z6.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.z4.prototype={
f3(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$f3=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.ip()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a4(n.getDirectory(),l),$async$f3)
case 7:m=b
s=8
return A.a(A.a4(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$f3)
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
return A.f($async$f3,r)},
hw(){var s=0,r=A.h(t.y),q,p=this,o
var $async$hw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.w){q=!1
s=1
break}o=p.r
s=o==null?3:5
break
case 3:s=6
return A.a(p.f3(),$async$hw)
case 6:b=p.r=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hw,r)},
bf(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bf=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.x
if(h!=null){q=h
s=1
break}s=3
return A.a(n.hw(),$async$bf)
case 3:if(!b){q=null
s=1
break}p=5
m=A.ip()
if(m==null){q=null
s=1
break}j=t.m
s=8
return A.a(A.a4(m.getDirectory(),j),$async$bf)
case 8:l=b
f=A
s=9
return A.a(A.a4(l.getDirectoryHandle("localpocket_blobs",{create:!0}),j),$async$bf)
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
return A.f($async$bf,r)},
gfB(){var s=0,r=A.h(t.y),q,p=this
var $async$gfB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bf(),$async$gfB)
case 3:q=b!=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gfB,r)},
cw(a,b,c){return this.xm(a,b,c)},
iL(a){return this.cw(a,null,null)},
xm(a,a0,a1){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b
var $async$cw=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:f=new A.oQ(A.l([],t.bs))
s=3
return A.a(A.l6(a,a0,a1,null,268435456,new A.z5(f)),$async$cw)
case 3:e=a3
d=f.iS()
s=4
return A.a(m.bf(),$async$cw)
case 4:c=a3
s=c!=null?5:7
break
case 5:l="tmp_"+e.a
p=8
s=11
return A.a(c.az(l,d),$async$cw)
case 11:s=12
return A.a(c.az(e.a,d),$async$cw)
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
p=14
s=17
return A.a(c.G(0,l),$async$cw)
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
return A.f($async$cw,r)},
d4(a){return this.x4(a)},
x4(a){var s=0,r=A.h(t.v),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$d4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.lC(a)
j=n.d
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.E4(j,t.L)
s=1
break}s=3
return A.a(n.bf(),$async$d4)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.eH(a),$async$d4)
case 10:l=c
j=A.E4(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.C(h)
if(!(k instanceof A.fB))throw A.b(A.iy(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.A("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d4,r)},
dw(a){return this.v4(a)},
v4(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$dw=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.lC(a)
l=o.d.G(0,a)
if(l!=null)o.e=o.e-l.length
s=2
return A.a(o.bf(),$async$dw)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.G(0,a),$async$dw)
case 9:q=1
s=8
break
case 6:q=5
j=p.pop()
m=A.C(j)
if(!(m instanceof A.fB))throw A.b(A.iy(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dw,r)},
by(a){return this.vR(a)},
vR(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$by=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lC(a)
if(p.d.I(a)){q=!0
s=1
break}s=3
return A.a(p.bf(),$async$by)
case 3:o=c
if(o!=null){q=o.by(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$by,r)},
bq(a){return this.oY(a)},
oY(a){var s=0,r=A.h(t.aV),q,p=this,o,n
var $async$bq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lC(a)
o=p.d
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bf(),$async$bq)
case 3:n=c
if(n!=null){q=n.bq(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bq,r)},
en(a){return this.uI(a)},
uI(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$en=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bf(),$async$en)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.eA(),$async$en)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.Jh(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.G(0,l),$async$en)
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
return A.f($async$en,r)},
fC(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.d
i=A.c0(new A.S(j,A.n(j).i("S<1>")),t.N)
s=3
return A.a(n.bf(),$async$fC)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.eA(),$async$fC)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.EZ()
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
j=A.O(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fC,r)}}
A.z5.prototype={
$1(a){return this.a.u(0,a)},
$S:11}
A.ph.prototype={
eH(a){return this.xy(a)},
xy(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$eH=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),i),$async$eH)
case 7:m=c
s=8
return A.a(A.a4(m.getFile(),i),$async$eH)
case 8:l=c
s=9
return A.a(A.a4(l.arrayBuffer(),t.a),$async$eH)
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
j=A.C(g)
if(A.Gj(j))throw A.b(A.Fh(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eH,r)},
az(a,b){return this.yo(a,b)},
yo(a1,a2){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
return A.a(A.a4(f.write(t.a.a(B.f.gac(a2))),j),$async$az)
case 8:s=9
return A.a(A.a4(f.close(),j),$async$az)
case 9:q=1
s=7
break
case 5:q=4
e=p.pop()
n=A.C(e)
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
case 26:g=A.iy(A.A("write verification failed: persisted "+A.r(A.CW(l,"size"))+" of "+g+" bytes"),a1)
throw A.b(g)
case 22:q=1
s=18
break
case 16:q=15
b=p.pop()
g=A.C(b)
s=g instanceof A.ix?28:30
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
G(a,b){return this.xJ(0,b)},
xJ(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$G=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.mu(o.a,b),$async$G)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.C(l)
if(A.Gj(n))throw A.b(A.Fh(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$G,r)},
by(a){return this.vS(a)},
vS(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$by=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),t.m),$async$by)
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
return A.f($async$by,r)},
bq(a){return this.oZ(a)},
oZ(a){var s=0,r=A.h(t.aV),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),k),$async$bq)
case 7:m=c
s=8
return A.a(A.a4(m.getFile(),k),$async$bq)
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
return A.f($async$bq,r)},
eA(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$eA=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.cn(A.cJ(A.Fx(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$eA)
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
return A.a(j.A(),$async$eA)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eA,r)},
$iFU:1}
A.vo.prototype={
cY(a,b){return this.wb(a,b)},
wb(a,b){var s=0,r=A.h(t.X),q,p
var $async$cY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.l4(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cY,r)},
iF(a,b,c,d){return this.x5(a,b,c,d)},
x5(c1,c2,c3,c4){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
var $async$iF=A.c(function(c5,c6){if(c5===1){o.push(c6)
s=p}for(;;)switch(s){case 0:b6=c1.x_(c2,c3)
b7=t.N
b8=new A.iL(A.t(b7,t.fw),b6)
b9=!1
p=4
a7=c4==null
n=A.Ie(a7?null:A.l0(c4),"backupDbName")
if(n!=null&&typeof n!="string"){a1=A.aO('"backupDbName" must be a string.')
throw A.b(a1)}a8=A.a3(n)
m=a8==null?c2:a8
b8.e=new A.vp(m)
b8.f=new A.vq(m)
b6.O("PRAGMA journal_mode=TRUNCATE")
a9=b6.oP("PRAGMA journal_mode")
l=a9.gH(a9).b[0]
if(J.Z(l).toLowerCase()!=="truncate"){a1=A.A("journal_mode read-back was "+A.r(l)+", expected truncate")
throw A.b(a1)}k=A.P_(a7?null:A.l0(c4))
b0=t.bE.a(J.T(k,"stores"))
j=b0==null?A.l([],t.aw):b0
b1=A.aY(J.T(k,"maxDocBytes"))
i=b1==null?19e5:b1
a9=A.Es(J.T(k,"destructiveBackup"))
h=a9!==!1
b2=t.b.a(J.T(k,"storePolicies"))
g=b2==null?B.k:b2
f=A.aY(J.T(k,"groupCommitWindowMs"))
e=A.aY(J.T(k,"txSessionTtlMs"))
d=A.aY(J.T(k,"callbackTimeoutMs"))
c=A.aY(J.T(k,"clockOffsetMs"))
a9=A.Es(J.T(k,"syncProxy"))
b=a9===!0
a=b?new A.x9(A.t(t.S,t.oj)):null
a9=d==null?B.U:A.bX(0,d,0)
a0=new A.zc(a9,A.l([],t.m2))
a1=A.l([],t.oq)
for(a9=j,b3=a9.length,b4=0;b4<a9.length;a9.length===b3||(0,A.p)(a9),++b4){a2=a9[b4]
J.aN(a1,A.HQ(a2,J.T(g,a2.a),a0))}a3=a1
a4=A.OZ(A.Ie(a7?null:A.l0(c4),"fieldCipher"))
if(A.OH(j,a4)){a1=A.I("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a1)}a5=new A.z4(A.t(b7,t.p))
a1=f==null?B.I:A.bX(0,f,0)
b7=e==null?B.ai:A.bX(0,e,0)
a7=c==null||c===0?null:new A.vr(c)
if(b){a9=a
a9.toString
a9=new A.xa(a0,a9)}else a9=B.c0
s=7
return A.a(A.dd(a5,a0,b8,h,a4,a1,i,a7,c2,B.aF,a3,a9,b7),$async$iF)
case 7:a6=c6
b9=!0
b7=t.be
q=new A.mW(b6,new A.oC(a6,a0,a,A.aP(b7)),A.t(t.eg,b7))
s=1
break
p=2
s=6
break
case 4:p=3
c0=o.pop()
if(!b9)b6.q()
throw c0
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iF,r)}}
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
cY(a,b){return this.wc(a,b)},
wc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.DP(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.Kk(j)
if(o==null){q=A.DP(0,"protocol_envelope","Payload must be a map",null)
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
return A.a(p.f.im(k.a,o),$async$cY)
case 3:q=i.Kl(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cY,r)}}
A.vA.prototype={
$1(a){var s,r=this.b
r.r.G(0,this.c)
r=r.f
s=this.a.a
r.f.G(0,s)
B.b.G(r.d.b,s)},
$S:32}
A.oV.prototype={
ks(a){var s=this,r=s.b
if(r>=128)return
s.b=r+1
s.a.fk(A.l4(a)).b2(new A.Ah(s),new A.Ai(s),t.H)},
$1(a){return this.oB(a)},
oB(a){var s=0,r=A.h(t.X),q,p=this,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.fk(A.l4(a)),$async$$1)
case 3:o=c
q=o==null?null:A.l0(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$ioE:1,
$iGk:1}
A.Ah.prototype={
$1(a){--this.a.b},
$S:57}
A.Ai.prototype={
$1(a){--this.a.b},
$S:28}
A.CY.prototype={
$1(a){return B.b.bl(a.c,new A.CX())},
$S:166}
A.CX.prototype={
$1(a){return a.e},
$S:58}
A.zb.prototype={
x7(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.aO('Invalid "'+a+'" argument: expected '+A.bT(b).l(0)+", got "+J.c8(s).l(0)+"."))
return b.a(s)}}
A.zc.prototype={
cZ(a,b){return this.wA(a,b)},
wA(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$cZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.b
k=l.length===0?null:B.b.gH(l)
if(k==null)throw A.b(A.I('No connected page can serve the "'+a+'" callback.',null))
l=p.c++
o=new A.w($.B,t.ny)
n=new A.aG(o,t.bF)
m=A.c4(p.a,new A.zd(p,n,a))
k.$1(A.m(["kind","callback_rpc","rpcId",l,"channel",a,"args",b],t.N,t.X)).b2(new A.ze(p,m,n,a),new A.zf(m,n,a),t.H)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
rN(a,b){var s
if(!t.f.b(a))throw A.b(A.aO('The "'+b+'" callback reply must be a map.'))
s=A.by(a)
if(!J.x(s.h(0,"kind"),"callback_rpc_result"))throw A.b(A.aO('The "'+b+'" callback reply has kind "'+A.r(s.h(0,"kind"))+'".'))
if(J.x(s.h(0,"ok"),!0))return s.h(0,"value")
throw A.b(A.I('The "'+b+'" callback failed on the page: '+A.r(s.h(0,"error")),null))}}
A.zd.prototype={
$0(){var s=this.b
if((s.a.a&30)===0)s.aT(new A.eb(null,'The "'+this.c+'" callback did not answer within '+B.c.M(this.a.a.a,1000)+" ms."))},
$S:0}
A.ze.prototype={
$1(a){var s,r,q,p,o=this
o.b.A()
q=o.c
if((q.a.a&30)!==0)return
try{q.aB(o.a.rN(a,o.d))}catch(p){s=A.C(p)
r=A.af(p)
q.bw(s,r)}},
$S:57}
A.zf.prototype={
$2(a,b){var s
this.a.A()
s=this.b
if((s.a.a&30)===0)s.bw(new A.eb(null,'The "'+this.c+'" callback failed: '+A.r(a)),b)},
$S:6}
A.hJ.prototype={}
A.k7.prototype={}
A.f5.prototype={}
A.oD.prototype={
ht(a,b){return this.r0(a,b)},
r0(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ht=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.aO('Contract envelope requires a "request" map.'))
j=A.by(b)
i=j.h(0,"tag")
if(typeof i!="string")A.u(A.Q("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.u(A.Q("Missing request payload."))
g=A.l1(h)
j=t.G
if(!j.b(g))A.u(A.Q("Malformed request payload."))
f=A.JG(i,g)
if(f==null)A.u(A.Q("Unknown request tag: "+i))
m=f
p=4
e=n.c.r
e===$&&A.v()
s=7
return A.a(e.w6(m),$async$ht)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gY(),"payload",A.fo(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.C(a)
j=A.m(["error",A.Ou(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ht,r)}}
A.oC.prototype={
im(a,b){return this.wq(a,b)},
wq(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$im=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:n.f.u(0,a)
i=n.d.b
if(!B.b.E(i,a))i.push(a)
if(n.r==null){i=n.c.r
i===$&&A.v()
i=i.b
n.r=new A.aX(i,A.n(i).i("aX<1>")).aZ(new A.zq(n))}m=null
try{m=A.Li(b)}catch(e){l=A.C(e)
i=J.Z(l)
q=new A.f5("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.f5("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jq(a,m),$async$im)
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
j=A.C(f)
i=m.b
g=J.Z(j)
q=new A.f5("localpocket",g,A.m(["type",A.CA(j)],t.N,t.X),i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$im,r)},
qY(a,b){var s=this.e
if(s==null)throw A.b(A.aO("The open did not configure a proxy sync backend."))
return s.iH(A.by(b.d))},
jq(a,b){return this.qq(a,b)},
qq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.w
if(l===$){o=A.m(["open",p.gr5(),"contract_request",p.gr_(),"backend_call",p.gqX()],t.N,t.n1)
p.w!==$&&A.Dl()
p.w=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.aO("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jq,r)}}
A.zq.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gY(),"payload",A.fo(a.p())],r,q)],r,q)
for(r=this.a.f,r=A.dz(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).ks(p)}},
$S:169}
A.oB.prototype={
hu(a,b){return this.r6(a,b)},
r6(b0,b1){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$hu=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a4=b1.d
a5=new A.zb(a4).x7("stores",t.kS)
a6=a4.h(0,"manifestFingerprints")
a7=t.N
a8=A.t(a7,a7)
a9=t.f
if(a9.b(a6))a6.a5(0,new A.zk(a8))
o=p.rP(a4)
s=a5!=null?3:4
break
case 3:a4=J.E(a5),n=p.c,m=n.fy,l=t.X,k=p.d,j=n.cx==null
case 5:if(!a4.k()){s=6
break}i=a4.gn()
if(!a9.b(i))A.u(A.ac("Schema must be a map: "+A.r(i),null,null))
h=A.qI(A.by(i),l)
g=A.HQ(h,o.h(0,h.a),k)
if(B.b.bl(g.c,new A.zl())&&j)throw A.b(A.I('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.E0(g)
e=g.a
d=a8.h(0,e)
if(d!=null){c=new A.a6("")
A.cp(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.ca()
a0=A.d3(a)
a0.u(0,b)
a0.q()
a0=d!==A.au(a.a.a)
b=a0}else b=!1
if(b){a1=o.h(0,e)
throw A.b(A.aO(A.Gm(e,a1!=null,A.Lj(a1,h),A.Eb(g))))}s=!m.I(e)?7:9
break
case 7:e=n.f
e===$&&A.v()
s=10
return A.a(e.aW(g),$async$hu)
case 10:s=8
break
case 9:a2=m.h(0,e)
if(a2==null)A.u(A.A('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a6("")
A.cp(c,a2.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.ca()
a0=A.d3(a)
a0.u(0,b)
a0.q()
a0=A.au(a.a.a)
c=new A.a6("")
A.cp(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.ca()
a3=A.d3(a)
a3.u(0,b)
a3.q()
if(a0!==A.au(a.a.a))throw A.b(A.aO(A.Gm(e,!0,A.Eb(g),A.Eb(a2.a))))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a7,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
rP(a){var s,r,q,p,o,n,m,l=a.h(0,"storePolicies")
if(l==null)return B.k
s=t.f
if(!s.b(l))throw A.b(A.aO('"storePolicies" must be a map.'))
r=A.t(t.N,t.X)
for(q=l.ga0(),q=q.gt(q);q.k();){p=q.gn()
o=p.a
n=J.cK(o)
m=n.l(o)
p=p.b
o=n.l(o)
if(!s.b(p))A.u(A.aO('The store policy for "'+o+'" must be a map.'))
r.j(0,m,A.by(p))}return r}}
A.zk.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:70}
A.zl.prototype={
$1(a){return a.e},
$S:58}
A.zp.prototype={
$1(a){return a.d!=null},
$S:31}
A.zh.prototype={
$1(a){var s,r=this.a,q=t.f
if(!q.b(r))return B.aC
s=r.h(0,a)
return q.b(s)?s:B.aC},
$S:170}
A.zg.prototype={
$1(a){var s,r=this.a
if(!t.f.b(r))return B.j
s=r.h(0,a)
if(!t.j.b(s))return B.j
r=A.O(s,t.X)
B.b.aj(r)
return r},
$S:171}
A.zi.prototype={
$0(){var s,r=J.T(this.a.$1("conflictPolicy"),"fieldOverrides")
if(!t.f.b(r))return B.j
s=J.bI(r.gJ(),new A.zj(),t.N).bP(0)
B.b.aj(s)
return s},
$S:259}
A.zj.prototype={
$1(a){return J.Z(a)},
$S:26}
A.zm.prototype={
$1(a){return J.Z(a)},
$S:26}
A.zn.prototype={
$1(a){return J.Z(a)},
$S:26}
A.zo.prototype={
$1(a){return this.a[a.a]===a.b},
$S:173}
A.pK.prototype={}
A.rh.prototype={
ul(a){var s,r=null
A.HI("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b9(a)>0&&!s.d_(a)
if(s)return a
s=A.HV()
return this.nq(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
v7(a){var s,r,q=A.e1(a,this.a)
q.fR()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kT(s)
q.e.pop()
q.fR()
return q.l(0)},
nq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.HI("join",s)
return this.wE(new A.ed(s,t.B))},
wE(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.d1(s,new A.ri(),a.$ti.i("d1<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.d_(m)&&o){l=A.e1(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.B(k,0,q.eL(k,!0))
l.b=n
if(q.fH(n))l.e[0]=q.gdQ()
n=l.l(0)}else if(q.b9(m)>0){o=!q.d_(m)
n=m}else{if(!(m.length!==0&&q.kl(m[0])))if(p)n+=q.gdQ()
n+=m}p=q.fH(m)}return n.charCodeAt(0)==0?n:n},
dd(a,b){var s=A.e1(b,this.a),r=s.d,q=A.a1(r).i("aq<1>")
r=A.O(new A.aq(r,new A.rj(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aF(r,0,q)
return s.d},
eE(a){var s
if(!this.rs(a))return a
s=A.e1(a,this.a)
s.kM()
return s.l(0)},
rs(a){var s,r,q,p,o,n,m,l=this.a,k=l.b9(a)
if(k!==0){if(l===$.q2())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cs(n)){if(l===$.q2()&&n===47)return!0
if(q!=null&&l.cs(q))return!0
if(q===46)m=o==null||o===46||l.cs(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cs(q))return!0
if(q===46)l=o==null||l.cs(o)||o===46
else l=!1
if(l)return!0
return!1},
xH(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b9(a)
if(l<=0)return o.eE(a)
s=A.HV()
if(m.b9(s)<=0&&m.b9(a)>0)return o.eE(a)
if(m.b9(a)<=0||m.d_(a))a=o.ul(a)
if(m.b9(a)<=0&&m.b9(s)>0)throw A.b(A.FV(n+a+'" from "'+s+'".'))
r=A.e1(s,m)
r.kM()
q=A.e1(a,m)
q.kM()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kQ(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kQ(l[0],p[0])}else l=!1
if(!l)break
B.b.iQ(r.d,0)
B.b.iQ(r.e,1)
B.b.iQ(q.d,0)
B.b.iQ(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.FV(n+a+'" from "'+s+'".'))
l=t.N
B.b.kF(q.d,0,A.a9(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kF(p,1,A.a9(r.d.length,m.gdQ(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga_(m)==="."){B.b.kT(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fR()
return q.l(0)},
nB(a){var s,r,q=this,p=A.Hn(a)
if(p.gb5()==="file"&&q.a===$.lb())return p.l(0)
else if(p.gb5()!=="file"&&p.gb5()!==""&&q.a!==$.lb())return p.l(0)
s=q.eE(q.a.kP(A.Hn(p)))
r=q.xH(s)
return q.dd(0,r).length>q.dd(0,s).length?s:r}}
A.ri.prototype={
$1(a){return a!==""},
$S:13}
A.rj.prototype={
$1(a){return a.length!==0},
$S:13}
A.Cv.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:174}
A.ue.prototype={
oN(a){var s=this.b9(a)
if(s>0)return B.a.B(a,0,s)
return this.d_(a)?a[0]:null},
kQ(a,b){return a===b}}
A.ne.prototype={
gkg(){var s=this,r=t.N,q=new A.ne(s.a,s.b,s.c,A.bP(s.d,!0,r),A.bP(s.e,!0,r))
q.fR()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga_(r)},
fR(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga_(s)===""))break
B.b.kT(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kM(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kF(m,0,A.a9(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.a9(m.length+1,s.gdQ(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fH(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.q2())n.b=A.D(r,"/","\\")
n.fR()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.nf.prototype={
l(a){return"PathException: "+this.a},
$iH:1}
A.yh.prototype={
l(a){return this.gaV()}}
A.wW.prototype={
kl(a){return B.a.E(a,"/")},
cs(a){return a===47},
fH(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eL(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b9(a){return this.eL(a,!1)},
d_(a){return!1},
kP(a){var s
if(a.gb5()===""||a.gb5()==="file"){s=a.gbA()
return A.Er(s,0,s.length,B.o,!1)}throw A.b(A.U("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaV(){return"posix"},
gdQ(){return"/"}}
A.yR.prototype={
kl(a){return B.a.E(a,"/")},
cs(a){return a===47},
fH(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c4(a,"://")&&this.b9(a)===s},
eL(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cq(a,"/",B.a.af(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.T(a,"file://"))return q
p=A.HZ(a,q+1)
return p==null?q:p}}return 0},
b9(a){return this.eL(a,!1)},
d_(a){return a.length!==0&&a.charCodeAt(0)===47},
kP(a){return a.l(0)},
gaV(){return"url"},
gdQ(){return"/"}}
A.za.prototype={
kl(a){return B.a.E(a,"/")},
cs(a){return a===47||a===92},
fH(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eL(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cq(a,"\\",2)
if(s>0){s=B.a.cq(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.I3(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b9(a){return this.eL(a,!1)},
d_(a){return this.b9(a)===1},
kP(a){var s,r
if(a.gb5()!==""&&a.gb5()!=="file")throw A.b(A.U("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbA()
if(a.gdC()===""){if(s.length>=3&&B.a.T(s,"/")&&A.HZ(s,1)!=null)s=B.a.kV(s,"/","")}else s="\\\\"+a.gdC()+s
r=A.D(s,"/","\\")
return A.Er(r,0,r.length,B.o,!1)},
uK(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kQ(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.uK(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaV(){return"windows"},
gdQ(){return"\\"}}
A.y0.prototype={
gm(a){return this.c.length},
gwF(){return this.b.length},
ps(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.K(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eR(a){var s,r=this
if(a<0)throw A.b(A.b7("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b7("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga_(s))return s.length-1
if(r.rj(a)){s=r.d
s.toString
return s}return r.d=r.pN(a)-1},
rj(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pN(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
j5(a){var s,r,q=this
if(a<0)throw A.b(A.b7("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b7("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.eR(a)
r=q.b[s]
if(r>a)throw A.b(A.b7("Line "+s+" comes after offset "+a+"."))
return a-r},
h3(a){var s,r,q,p
if(a<0)throw A.b(A.b7("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b7("Line "+a+" must be less than the number of lines in the file, "+this.gwF()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b7("Line "+a+" doesn't have 0 columns."))
return q}}
A.mp.prototype={
ga6(){return this.a.a},
gah(){return this.a.eR(this.b)},
gau(){return this.a.j5(this.b)},
gav(){return this.b}}
A.hT.prototype={
ga6(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.DC(this.a,this.b)},
gN(){return A.DC(this.a,this.c)},
gaQ(){return A.e8(B.y.U(this.a.c,this.b,this.c),0,null)},
gbm(){var s=this,r=s.a,q=s.c,p=r.eR(q)
if(r.j5(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.e8(B.y.U(r.c,r.h3(p),r.h3(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.h3(p+1)
return A.e8(B.y.U(r.c,r.h3(r.eR(s.b)),q),0,null)},
a3(a,b){var s
if(!(b instanceof A.hT))return this.ph(0,b)
s=B.c.a3(this.b,b.b)
return s===0?B.c.a3(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hT))return s.pg(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gK(a){return A.cg(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idm:1}
A.tL.prototype={
ww(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mP(B.b.gH(a1).c)
s=a.e
r=A.a9(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hT("\u2575")
q.a+="\n"
a.mP(l)}else if(m.b+1!==n.b){a.uk("...")
q.a+="\n"}}for(l=n.d,k=A.a1(l).i("bE<1>"),j=new A.bE(l,k),j=new A.as(j,j.gm(0),k.i("as<a0.E>")),k=k.i("a0.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gah()!==f.gN().gah()&&f.gR().gah()===i&&a.rl(B.a.B(h,0,f.gR().gau()))){e=B.b.c5(r,a0)
if(e<0)A.u(A.U(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.uj(i)
q.a+=" "
a.ui(n,r)
if(s)q.a+=" "
d=B.b.nk(l,new A.u5())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gah()===i?j.gR().gau():0
a.ug(h,g,j.gN().gah()===i?j.gN().gau():h.length,p)}else a.hV(h)
q.a+="\n"
if(k)a.uh(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hT("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mP(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hT("\u2577")
else{q.hT("\u250c")
q.br(new A.tT(q),"\x1b[34m")
s=q.r
r=" "+$.ir().nB(a)
s.a+=r}q.r.a+="\n"},
hR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gah()
i=k?null:l.a.gN().gah()
if(s&&l===c){h.br(new A.u_(h,j,a),r)
n=!0}else if(n)h.br(new A.u0(h,l),r)
else if(k)if(g.a)h.br(new A.u1(h),g.b)
else o.a+=" "
else h.br(new A.u2(g,h,c,j,a,l,i),p)}},
ui(a,b){return this.hR(a,b,null)},
ug(a,b,c,d){var s=this
s.hV(B.a.B(a,0,b))
s.br(new A.tU(s,a,b,c),d)
s.hV(B.a.B(a,c,a.length))},
uh(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gah()===p.gN().gah()){r.kc()
p=r.r
p.a+=" "
r.hR(a,c,b)
if(c.length!==0)p.a+=" "
r.mQ(b,c,r.br(new A.tV(r,a,b),q))}else{s=a.b
if(p.gR().gah()===s){if(B.b.E(c,b))return
A.P5(c,b)
r.kc()
p=r.r
p.a+=" "
r.hR(a,c,b)
r.br(new A.tW(r,a,b),q)
p.a+="\n"}else if(p.gN().gah()===s){p=p.gN().gau()
if(p===a.a.length){A.If(c,b)
return}r.kc()
r.r.a+=" "
r.hR(a,c,b)
r.mQ(b,c,r.br(new A.tX(r,!1,a,b),q))
A.If(c,b)}}},
mO(a,b,c){var s=c?0:1,r=this.r
s=B.a.bp("\u2500",1+b+this.jn(B.a.B(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
uf(a,b){return this.mO(a,b,!0)},
mQ(a,b,c){this.r.a+="\n"
return},
hV(a){var s,r,q,p
for(s=new A.ct(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),q=this.r,r=r.i("M.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bp(" ",4)
else{p=A.bD(p)
q.a+=p}}},
hU(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.br(new A.u3(s,this,a),"\x1b[34m")},
hT(a){return this.hU(a,null,null)},
uk(a){return this.hU(null,null,a)},
uj(a){return this.hU(null,a,null)},
kc(){return this.hU(null,null,null)},
jn(a){var s,r,q,p
for(s=new A.ct(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),r=r.i("M.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
rl(a){var s,r,q
for(s=new A.ct(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<M.E>")),r=r.i("M.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
q2(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
br(a,b){return this.q2(a,b,t.z)}}
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
$S:40}
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
o=p.gbm()
n=A.CR(o,p.gaQ(),p.gR().gau())
n.toString
m=B.a.hW("\n",B.a.B(o,0,n)).gm(0)
l=p.gR().gah()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga_(b).b)b.push(new A.cH(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.p)(b),++k){j=b[k]
h&1&&A.K(i,16)
B.b.tn(i,new A.tP(j),!0)
f=i.length
for(q=s.b6(c,g),p=q.$ti,q=new A.as(q,q.gm(0),p.i("as<a0.E>")),n=j.b,p=p.i("a0.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gah()>n)break
i.push(e)}g+=i.length-f
B.b.D(j.d,i)}return b},
$S:181}
A.tP.prototype={
$1(a){return a.a.gN().gah()<this.a.b},
$S:40}
A.u5.prototype={
$1(a){return!0},
$S:40}
A.tT.prototype={
$0(){this.a.r.a+=B.a.bp("\u2500",2)+">"
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
s.br(new A.tY(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gau()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.br(new A.tZ(r,o),p.b)}}},
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
return s.a.hV(B.a.B(s.b,s.c,s.d))},
$S:0}
A.tV.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gau(),l=n.gN().gau()
n=this.b.a
s=q.jn(B.a.B(n,0,m))
r=q.jn(B.a.B(n,m,l))
m+=s*3
n=(p.a+=B.a.bp(" ",m))+B.a.bp("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.tW.prototype={
$0(){return this.a.uf(this.b,this.c.a.gR().gau())},
$S:0}
A.tX.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bp("\u2500",3)
else r.mO(s.c,Math.max(s.d.a.gN().gau()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.u3.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.x9(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bx.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gah()+":"+s.gR().gau()+"-"+s.gN().gah()+":"+s.gN().gau())
return s.charCodeAt(0)==0?s:s}}
A.AT.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.CR(o.gbm(),o.gaQ(),o.gR().gau())!=null)){s=A.nK(o.gR().gav(),0,0,o.ga6())
r=o.gN().gav()
q=o.ga6()
p=A.Oi(o.gaQ(),10)
o=A.y1(s,A.nK(r,A.GD(o.gaQ()),p,q),o.gaQ(),o.gaQ())}return A.LJ(A.LL(A.LK(o)))},
$S:182}
A.cH.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.C(this.d,", ")+")"}}
A.cB.prototype={
kr(a){var s=this.a
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
l(a){var s=this,r=A.d7(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iay:1,
ga6(){return this.a},
gav(){return this.b},
gah(){return this.c},
gau(){return this.d}}
A.nL.prototype={
kr(a){if(!J.x(this.a.a,a.ga6()))throw A.b(A.U('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(a.ga6())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a3(a,b){if(!J.x(this.a.a,b.ga6()))throw A.b(A.U('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(b.ga6())+"\" don't match.",null))
return this.b-b.gav()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga6())&&this.b===b.gav()},
gK(a){var s=this.a.a
s=s==null?null:s.gK(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.d7(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.eR(r)+1)+":"+(q.j5(r)+1))+">"},
$iay:1,
$icB:1}
A.nN.prototype={
pt(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga6(),q.ga6()))throw A.b(A.U('Source URLs "'+A.r(q.ga6())+'" and  "'+A.r(r.ga6())+"\" don't match.",null))
else if(r.gav()<q.gav())throw A.b(A.U("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.kr(r))throw A.b(A.U('Text "'+s+'" must be '+q.kr(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaQ(){return this.c}}
A.nO.prototype={
giA(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gah()+1)+", column "+(p.gR().gau()+1)
if(p.ga6()!=null){s=p.ga6()
r=$.ir()
s.toString
s=o+(" of "+r.nB(s))
o=s}o+=": "+this.a
q=p.wx(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iH:1}
A.hq.prototype={
gav(){var s=this.b
s=A.DC(s.a,s.b)
return s.b},
$ibr:1,
gh8(){return this.c}}
A.hr.prototype={
ga6(){return this.gR().ga6()},
gm(a){return this.gN().gav()-this.gR().gav()},
a3(a,b){var s=this.gR().a3(0,b.gR())
return s===0?this.gN().a3(0,b.gN()):s},
wx(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.K1(s,a).ww()},
P(a,b){if(b==null)return!1
return b instanceof A.hr&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gK(a){return A.cg(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.d7(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaQ()+'">'},
$iay:1}
A.dm.prototype={
gbm(){return this.d}}
A.jV.prototype={
a7(){return"SqliteUpdateKind."+this.b}}
A.cC.prototype={
gK(a){return A.cg(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.cC&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.ci.prototype={
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
p=p!=null?s+(", parameters: "+J.bI(p,new A.y6(),t.N).C(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iH:1}
A.y6.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.Z(a)},
$S:183}
A.ll.prototype={}
A.rI.prototype={
u0(){var s=this,r=s.d
return r==null?s.d=new A.em(s,A.l([],t.fU),new A.rR(s),new A.rS(s),t.jy):r},
ts(){var s=this,r=s.e
return r==null?s.e=new A.em(s,A.l([],t.lw),new A.rO(s),new A.rP(s),t.lU):r},
q4(){var s=this,r=s.f
return r==null?s.f=new A.em(s,A.l([],t.lw),new A.rK(s),new A.rL(s),t.ah):r},
uS(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.u(A.aD(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.ba(m))
r=n.a
q=r.ek(s,1)
s=r.d
p=A.EJ(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.dk(new A.rT(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.Dk(this,p,o,o,o)},
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
r=s.lf()
q=r!==0?A.EN(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aJ(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.u(A.A("This database has already been closed"))
r=p.b
q=r.a
s=q.ek(B.e.v(a),1)
q=q.d
r=A.EJ(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.Dk(p,r,"executing",a,b)}else{s=p.iI(a,!0)
try{s.er(new A.bY(b))}finally{s.q()}}},
O(a){return this.aJ(a,B.j)},
rU(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.u(A.A("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cR(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.z3(r,p,n,o)
l=A.l([],t.lE)
k=new A.rM(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.lh(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.Dk(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null)l.push(new A.hs(f,e,new A.dB(!1).dh(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.lh(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null){l.push(new A.hs(f,e,""))
k.$0()
throw A.b(A.aD(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aD(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
iI(a,b){var s=this.rU(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aD(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
xg(a){return this.iI(a,!1)},
oQ(a,b){var s,r=this.iI(a,!0)
try{s=r.la(new A.bY(b))
return s}finally{r.q()}},
oP(a){return this.oQ(a,B.j)}}
A.rR.prototype={
$0(){var s=this.a,r=s.b
r.a.n6(r.b,new A.rQ(s))},
$S:0}
A.rQ.prototype={
$3(a,b,c){var s=A.L4(a)
if(s==null)return
this.a.d.kp(new A.cC(s,b,c))},
$S:184}
A.rS.prototype={
$0(){var s=this.a.b
s.a.n6(s.b,null)
return null},
$S:0}
A.rO.prototype={
$0(){var s=this.a,r=s.b
r.a.n5(r.b,new A.rN(s))
return null},
$S:0}
A.rN.prototype={
$0(){this.a.e.kp(null)},
$S:0}
A.rP.prototype={
$0(){var s=this.a.b
s.a.n5(s.b,null)
return null},
$S:0}
A.rK.prototype={
$0(){var s=this.a,r=s.b
r.a.n4(r.b,new A.rJ(s))
return null},
$S:0}
A.rJ.prototype={
$0(){var s=this.a.f
s.kp(null)
return 0},
$S:10}
A.rL.prototype={
$0(){var s=this.a.b
s.a.n4(s.b,null)
return null},
$S:0}
A.rT.prototype={
$2(a,b){A.MP(a,this.a,b)},
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
A.KO(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.KQ(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.U("The argument list is unmodifiable",null))},
$iy3:1}
A.em.prototype={
gcD(){var s=this.r
return s==null?this.r=this.qV(!1):s},
qV(a){return new A.dA(new A.By(this,!1),this.$ti.i("dA<1>"))},
kp(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.u(o.bV())
if((n&1)!==0)o.gaS().aD(a)}else{n=o.b
if(n>=4)A.u(o.bV())
if((n&1)!==0)o.cM(a)
else if((n&3)===0){n=o.hk()
o=new A.ck(a,o.$ti.i("ck<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.seD(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.By.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.Bz(q,a,s)
a.r=a.e=new A.BA(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dZ<1>)")}}
A.Bz.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.kA(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.BA.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,new A.kA(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.y2.prototype={
nl(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.L3(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
x_(a,b){var s,r,q,p,o,n,m,l,k,j
this.nl()
switch(2){case 2:break}s=this.a
r=s.a
q=r.ek(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.ek(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.dg(r.b.buffer,0,null)[B.c.ag(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.k()
k=new A.yX(r,l,o)
r=r.r
if(r!=null)r.mY(k,l,o)
if(m!==0){j=A.EN(s,k,m,"opening the database",null,null)
k.lf()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.rI(s,k,!1)}}
A.hs.prototype={
gq3(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.oF(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dB(!1).dh(o,0,null,!0))}return q},
gtT(){return null},
bO(a,b){A.Dk(this.b,a,b,this.d,this.e)},
lT(){if(this.r||this.b.r)throw A.b(A.A(u.f))},
hm(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dJ()
if(s!==0?s!==101:q)r.bO(s,"executing statement")},
tB(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.te(o))
l.push(p)}m.dJ()
if(p!==0?p!==101:k)m.bO(p,"selecting from statement")
n=m.gq3()
m.gtT()
k=new A.nx(l,n,B.ap)
k.pX()
return k},
te(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.aj(r.Number(s)):A.Gy(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.p6(a)
case 4:return s.lg(a)
case 5:default:return null}},
pQ(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.u(A.aD(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.pR(a[s-1],s)
this.e=a},
pR(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.a8(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aQ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.Fg(a).l(0)))
break A}if(A.b0(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.p5(b,a)
break A}if(t.L.b(a)){s=q.a.p0(b,a)
break A}s=q.pP(a,b)
break A}if(s!==0)q.bO(s,"binding parameter")},
pP(a,b){throw A.b(A.aD(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eV(a){A:{if(a instanceof A.bY){this.pQ(a.a)
break A}if(a instanceof A.lW)a.a.$1(this)}},
dJ(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dJ()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.n9(s.d)}},
la(a){var s=this
s.lT()
s.dJ()
s.eV(a)
return s.tB()},
er(a){var s=this
s.lT()
s.dJ()
s.eV(a)
s.hm()}}
A.mD.prototype={
j0(a,b){return this.d.I(a)?1:0},
l2(a,b){this.d.G(0,a)},
l3(a){return new v.G.URL(a,"file:///").pathname},
dN(a,b){var s,r=a.a
if(r==null)r=A.FB(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cG(new Uint8Array(0),0))
else throw A.b(A.hE(14))
return new A.hZ(new A.p7(this,r,(b&8)!==0),0)},
l5(a){}}
A.p7.prototype={
nG(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bV(B.f.gac(r.a),0,r.b),b)
return s},
l1(){return this.d>=2?1:0},
j1(){if(this.c)this.a.d.G(0,this.b)},
h_(){return this.a.d.h(0,this.b).b},
l4(a){this.d=a},
l6(a){},
h0(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cG(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
l7(a){this.d=a},
eQ(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cG(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.aA(0,b,s,a)}}
A.D6.prototype={
$1(a){return a.length!==0},
$S:13}
A.rn.prototype={
pX(){var s,r,q,p,o=A.t(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o.j(0,p,B.b.d0(s,p))}this.c=o}}
A.nx.prototype={
gt(a){return new A.Bh(this)},
h(a,b){return new A.ch(this,A.fX(this.d[b],t.X))},
j(a,b,c){throw A.b(A.a2("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iL:1,
$io:1,
$iq:1}
A.ch.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.a8(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gJ(){return this.a.a},
gaX(){return this.b},
$iF:1}
A.Bh.prototype={
gn(){var s=this.a
return new A.ch(s,A.fX(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.pn.prototype={}
A.po.prototype={}
A.pq.prototype={}
A.pr.prototype={}
A.wf.prototype={
a7(){return"OpenMode."+this.b}}
A.eC.prototype={}
A.bY.prototype={}
A.lW.prototype={}
A.dv.prototype={
l(a){return"VfsException("+this.a+")"},
$iH:1}
A.jU.prototype={}
A.be.prototype={}
A.lB.prototype={}
A.lA.prototype={
gj2(){return 0},
nY(a,b){return 12},
gj4(){return 4096},
j3(a,b){var s=this.nG(a,b),r=a.length
if(s<r){B.f.kx(a,s,r,0)
throw A.b(B.em)}},
$ibv:1,
$ik4:1}
A.f6.prototype={}
A.Dh.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.u(A.A("No such element"))
r=s.c
q=r.a
q.toString
q.k8(A.n(r).i("bc.E").a(r))
r.d.$0()}},
$S:0}
A.Df.prototype={
$1(a){var s=this.a,r=s.b
s.hv(s.c,new A.f6(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:20}
A.Dg.prototype={
$4(a,b,c,d){this.a.$1(c.fi(d))},
$S:187}
A.z1.prototype={}
A.yX.prototype={
lf(){var s=this.a,r=s.r
if(r!=null)r.n9(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.z3.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
lh(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.EJ(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.dg(o.b.buffer,0,null)[B.c.ag(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.z2(s,o,n)
o=o.w
if(o!=null)o.mY(r,s,n)}return new A.pl(r,p)}}
A.z2.prototype={
p0(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cR(b),J.an(b))},
p5(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cR(s),s.length)},
lg(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.Gn(s.b,q.sqlite3_column_blob(r,a),p)},
p6(a){var s=this.c
return A.ee(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.ec.prototype={$iDY:1}
A.dw.prototype={$iDZ:1}
A.hG.prototype={
sm(a,b){throw A.b(A.a2("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dw(s,A.dg(s.b.buffer,0,null)[B.c.ag(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.a2("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.m_.prototype={
wQ(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.ee(q,a,null)
r=$.Nk
if(r==null)A.Ib(s)
else r.$1(s)},
wO(a,b){var s,r=new A.aI(A.m3(A.aj(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.FS(q.buffer,b,8)
s.$flags&2&&A.K(s)
s[0]=A.DW(r)
s[1]=A.DU(r)
s[2]=A.DT(r)
s[3]=A.x_(r)
s[4]=A.DV(r)-1
s[5]=A.DX(r)-1900
s[6]=B.c.an(A.KF(r),7)},
yO(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.jU(A.Ec(j,b,k))
try{r=a.dN(s,d)
if(e!==0){p=r.b
o=A.dg(j.buffer,0,k)
n=B.c.ag(e,2)
o.$flags&2&&A.K(o)
o[n]=p}p=A.dg(j.buffer,0,k)
o=B.c.ag(c,2)
p.$flags&2&&A.K(p)
p[o]=0
m=r.a
return m}catch(l){p=A.C(l)
if(p instanceof A.dv){q=p
p=q.a
j=A.dg(j.buffer,0,k)
o=B.c.ag(c,2)
j.$flags&2&&A.K(j)
j[o]=p}else{j=j.buffer
j=A.dg(j,0,k)
p=B.c.ag(c,2)
j.$flags&2&&A.K(j)
j[p]=1}}return k},
yD(a,b,c){var s=this.b
s===$&&A.v()
return A.c7(new A.rt(a,A.ee(s,b,null),c))},
yv(a,b,c,d){var s=this.b
s===$&&A.v()
return A.c7(new A.rq(this,a,A.ee(s,b,null),c,d))},
yK(a,b,c,d){var s=this.b
s===$&&A.v()
return A.c7(new A.rv(this,a,A.ee(s,b,null),c,d))},
yQ(a,b,c){return A.c7(new A.rx(this,c,b,a))},
yV(a,b){return A.c7(new A.rz(a,b))},
yB(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.DK(A.FR(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
yz(a){return A.c7(new A.rs(a))},
yS(a,b,c,d){return A.c7(new A.ry(this,a,b,c,d))},
z2(a,b,c,d){return A.c7(new A.rD(this,a,b,c,d))},
yZ(a,b){return A.c7(new A.rB(a,b))},
yX(a,b){return A.c7(new A.rA(a,b))},
yI(a,b){return A.c7(new A.ru(this,a,b))},
yM(a,b){return A.c7(new A.rw(a,b))},
z0(a,b){return A.c7(new A.rC(a,b))},
yx(a,b){return A.c7(new A.rr(this,a,b))},
yE(a){return a.gj2()},
yG(a,b,c){if(t.j2.b(a))return a.nY(b,c)
return 12},
yT(a){if(t.j2.b(a))return a.gj4()
return 4096},
vk(a){a.$0()},
vf(a){return a.$0()},
vi(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.ee(s,d,null),A.aj(v.G.Number(e)))},
vq(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.ec(s,b),new A.hG(s,c,d))},
vu(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.ec(s,b),new A.hG(s,c,d))},
vs(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.v()
null.$2(new A.ec(s,b),new A.hG(s,c,d))},
vw(a,b){var s
null.toString
s=this.a
s===$&&A.v()
null.$1(new A.ec(s,b))},
vo(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.v()
r.$1(new A.ec(s,b))},
vm(a,b,c,d,e){var s=this.b
s===$&&A.v()
return null.$2(A.Ec(s,c,b),A.Ec(s,e,d))},
vd(a,b){return a.$1(b)},
vb(a,b){return a.gz6().$1(b)},
v9(a,b,c){return a.gz5().$2(b,c)}}
A.rt.prototype={
$0(){return this.a.l2(this.b,this.c)},
$S:0}
A.rq.prototype={
$0(){var s,r=this,q=r.b.j0(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.dg(p.buffer,0,null)
s=B.c.ag(r.e,2)
p.$flags&2&&A.K(p)
p[s]=q},
$S:0}
A.rv.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.l3(q.c)),o=p.length
if(o>q.d)throw A.b(A.hE(14))
s=q.a.b
s===$&&A.v()
s=A.c2(s.buffer,0,null)
r=q.e
B.f.dc(s,r,p)
s.$flags&2&&A.K(s)
s[r+o]=0},
$S:0}
A.rx.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.c2(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.Fe(s,q.b)
else return A.Fe(s,null)},
$S:0}
A.rz.prototype={
$0(){this.a.l5(A.bX(this.b,0,0))},
$S:0}
A.rs.prototype={
$0(){return this.a.j1()},
$S:0}
A.ry.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.j3(A.c2(r.buffer,s.c,s.d),A.aj(v.G.Number(s.e)))},
$S:0}
A.rD.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.eQ(A.c2(r.buffer,s.c,s.d),A.aj(v.G.Number(s.e)))},
$S:0}
A.rB.prototype={
$0(){return this.a.h0(A.aj(v.G.Number(this.b)))},
$S:0}
A.rA.prototype={
$0(){return this.a.l6(this.b)},
$S:0}
A.ru.prototype={
$0(){var s,r=this.b.h_(),q=this.a.b
q===$&&A.v()
q=A.dg(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.K(q)
q[s]=r},
$S:0}
A.rw.prototype={
$0(){return this.a.l4(this.b)},
$S:0}
A.rC.prototype={
$0(){return this.a.l7(this.b)},
$S:0}
A.rr.prototype={
$0(){var s,r=this.b.l1(),q=this.a.b
q===$&&A.v()
q=A.dg(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.K(q)
q[s]=r},
$S:0}
A.dk.prototype={}
A.iv.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bm(A.DK(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.nS(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.qg(q,this,p,o)
o.d=s
o.f=new A.qh(q,o,s)
return new A.bf(o,A.n(o).i("bf<1>")).aa(a,b,c,d)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.qg.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a4(q,t.m).b2(new A.qi(p,r.b,s,r),s.guq(),t.P)},
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
if(!((p&1)!==0?(r.gaS().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:18}
A.qh.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaS().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.fa.prototype={
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
o=new A.w($.B,t.g5)
s=new A.at(o,t.ex)
r=p.d
q=t.m
p.b=A.bw(r,"success",new A.Al(p,s),!1,q)
p.c=A.bw(r,"error",new A.Am(p,s),!1,q)
return o}}
A.Al.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.Am.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.aT(s)},
$S:1}
A.r1.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r2.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.r6.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r7.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.r8.prototype={
$1(a){this.a.aT(new A.bt("IndexedDB open blocked"))},
$S:1}
A.tr.prototype={
$1(a){return A.bm(a[1])},
$S:209}
A.yY.prototype={
uT(){var s={}
s.dart=new A.yZ(this).$0()
return s},
iy(a){return this.wK(a)},
wK(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iy=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(v.G.WebAssembly.instantiateStreaming(a,p.uT()),t.m),$async$iy)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)}}
A.yZ.prototype={
$0(){var s=this.a.a,r=A.bm(v.G.Object),q=A.bm(r.create.apply(r,[null]))
q.error_log=A.d5(s.gwP())
q.localtime=A.c5(s.gwN())
q.xOpen=A.Ew(s.gyN())
q.xDelete=A.pR(s.gyC())
q.xAccess=A.ib(s.gyu())
q.xFullPathname=A.ib(s.gyJ())
q.xRandomness=A.pR(s.gyP())
q.xSleep=A.c5(s.gyU())
q.xCurrentTimeInt64=A.c5(s.gyA())
q.xClose=A.d5(s.gyy())
q.xRead=A.ib(s.gyR())
q.xWrite=A.ib(s.gz1())
q.xTruncate=A.c5(s.gyY())
q.xSync=A.c5(s.gyW())
q.xFileSize=A.c5(s.gyH())
q.xLock=A.c5(s.gyL())
q.xUnlock=A.c5(s.gz_())
q.xCheckReservedLock=A.c5(s.gyw())
q.xDeviceCharacteristics=A.d5(s.gj2())
q.xFileControl=A.pR(s.gyF())
q.xSectorSize=A.d5(s.gj4())
q["dispatch_()v"]=A.d5(s.gvj())
q["dispatch_()i"]=A.d5(s.gve())
q.dispatch_update=A.Ew(s.gvh())
q.dispatch_xFunc=A.ib(s.gvp())
q.dispatch_xStep=A.ib(s.gvt())
q.dispatch_xInverse=A.ib(s.gvr())
q.dispatch_xValue=A.c5(s.gvv())
q.dispatch_xFinal=A.c5(s.gvn())
q.dispatch_compare=A.Ew(s.gvl())
q.dispatch_busy=A.c5(s.gvc())
q.changeset_apply_filter=A.c5(s.gva())
q.changeset_apply_conflict=A.pR(s.gv8())
return q},
$S:36}
A.hF.prototype={}
A.qj.prototype={
iE(){var s=0,r=A.h(t.H),q=this,p,o
var $async$iE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.B,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.d5(new A.qm(o))
new A.at(p,t.h1).aB(A.JC(o,t.m))
s=2
return A.a(p,$async$iE)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$iE,r)},
ef(a,b){return this.tu(a,b)},
tu(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$ef=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.J1(),b)
o=A.LM(p)
s=2
return A.a(A.P6(new A.ql(a,o,p),t.mj),$async$ef)
case 2:s=3
return A.a(o.b.a,$async$ef)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$ef,r)},
rS(a){return this.ef(new A.qk(a),"readwrite")}}
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
$1(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].b0(a),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.kq.prototype={
px(a){var s=A.Cl(new A.AW(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.Cl(new A.AX(this))},
jS(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
tb(a){return this.jS(a,9007199254740992,0)},
tc(a,b){return this.jS(a,9007199254740992,b)},
iw(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$iw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.t(t.N,t.S)
k=new A.fa(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$iw)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.u(A.A("Await moveNext() first"))
n=o.key
n.toString
A.G(n)
m=o.primaryKey
m.toString
l.j(0,n,A.aj(A.fj(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ib(a){return this.vY(a)},
vY(a){var s=0,r=A.h(t.aV),q,p=this,o
var $async$ib=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cN(p.d.index("fileName").getKey(a),t.W),$async$ib)
case 3:q=o.aj(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)},
jT(a){return A.cN(this.d.get(a),t.U).W(new A.AV(a),t.m)},
eS(a,b){return this.p7(a,b)},
p7(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jT(a),$async$eS)
case 3:h=d
g=h.length
f=new A.cG(new Uint8Array(g),g)
e=new A.fa(p.e.openCursor(p.tb(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eS)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.u(A.A("Await moveNext() first"))
k=n.a(l.key)
j=A.aj(A.fj(k[1]))
if(j>=h.length){s=5
break}i=new A.AY(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.xJ(A.bm(l.value)).W(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eS,r)},
i5(a){return this.uQ(a)},
uQ(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$i5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
o=A
s=3
return A.a(A.cN(p.d.put({name:a,length:0}),t.W),$async$i5)
case 3:q=o.aj(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i5,r)},
az(a,b){return this.yn(a,b)},
yn(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$az=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
s=2
return A.a(q.jT(a),$async$az)
case 2:p=d
o=b.b
n=A.n(o).i("S<1>")
m=A.O(new A.S(o,n),n.i("o.E"))
B.b.aj(m)
s=3
return A.a(A.DE(new A.Y(m,new A.AZ(new A.B_(q,a),b),A.a1(m).i("Y<1,y<~>>")),t.H),$async$az)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.fa(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$az)
case 6:s=7
return A.a(A.cN(l.gn().update({name:p.name,length:b.c}),t.X),$async$az)
case 7:case 5:return A.e(null,r)}})
return A.f($async$az,r)},
dL(a,b,c){return this.xY(0,b,c)},
xY(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
s=2
return A.a(q.jT(b),$async$dL)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cN(q.e.delete(q.tc(b,B.c.M(c,4096)*4096)),t.X),$async$dL)
case 5:case 4:o=new A.fa(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dL)
case 6:s=7
return A.a(A.cN(o.gn().update({name:p.name,length:c}),t.X),$async$dL)
case 7:return A.e(null,r)}})
return A.f($async$dL,r)},
i7(a){return this.v6(a)},
v6(a){var s=0,r=A.h(t.H),q=this,p
var $async$i7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.DE(A.l([A.cN(q.e.delete(q.jS(a,9007199254740992,0)),p),A.cN(q.d.delete(a),p)],t.iw),t.H),$async$i7)
case 2:return A.e(null,r)}})
return A.f($async$i7,r)}}
A.AW.prototype={
$0(){this.a.b.ak()},
$S:2}
A.AX.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aT(r)},
$S:2}
A.AV.prototype={
$1(a){if(a==null)throw A.b(A.aD(this.a,"fileId","File not found in database"))
else return a},
$S:212}
A.AY.prototype={
$1(a){var s=this.a
s.dc(s,this.b,J.bV(a,0,this.c))},
$S:213}
A.B_.prototype={
oD(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cN(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.U),$async$$2)
case 2:m=d
l=t.a.a(B.f.gac(b))
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
$2(a,b){return this.oD(a,b)},
$S:214}
A.AZ.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:215}
A.Ax.prototype={
u_(a,b,c){B.f.dc(this.b.nE(a,new A.Ay(this,a)),b,c)},
uu(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.an(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.u_(p*4096,o,J.bV(B.f.gac(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.Ay.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.dc(s,0,J.bV(B.f.gac(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:216}
A.pg.prototype={}
A.dQ.prototype={
fe(a){var s=this
if(s.e||s.d.a==null)A.u(A.hE(10))
if(a.kG(s.x)){s.cO(!0)
return a.d.a}else return A.bi(null,t.H)},
cO(a){return this.tQ(a)},
tQ(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.aq(0)
s=5
return A.a(p.d.rS(n).b4(new A.u8(p,n,a)),$async$cO)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cO,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.fe(new A.ko(new A.u9(),new A.at(new A.w($.B,t.D),t.F)))
p.e=!0
p.cO(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.ga_(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
e2(a,b){return this.qR(a,b)},
qR(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$e2=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.ib(b),$async$e2)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$e2,r)},
f7(){var s=0,r=A.h(t.H),q=this,p
var $async$f7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.ef(new A.u7(q,p),"readonly"),$async$f7)
case 2:s=3
return A.a(A.JZ(p,t.H),$async$f7)
case 3:return A.e(null,r)}})
return A.f($async$f7,r)},
cX(){return this.cO(!1)},
j0(a,b){return this.w.d.I(a)?1:0},
l2(a,b){var s=this
s.w.d.G(0,a)
if(!s.y.G(0,a))s.fe(new A.ki(s,a,new A.at(new A.w($.B,t.D),t.F)))},
l3(a){return new v.G.URL(a,"file:///").pathname},
dN(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.FB(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dN(new A.jU(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.fe(new A.hP(p,o,new A.at(new A.w($.B,t.D),t.F)))
return new A.hZ(new A.p8(p,q.a,o),0)},
l5(a){}}
A.u8.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.u(A.A("Future already completed"))
p.cF(null)}o.cO(this.c)},
$S:2}
A.u9.prototype={
$1(a){return this.o6(a)},
o6(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.u7.prototype={
$1(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.iw(),$async$$1)
case 2:m=c
l=q.a
l.z.D(0,m)
p=m.ga0(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.eS(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.p8.prototype={
j3(a,b){this.b.j3(a,b)},
gj2(){return 0},
gj4(){return 4096},
l1(){return this.b.d>=2?1:0},
j1(){},
h_(){return this.b.h_()},
l4(a){this.b.d=a
return null},
l6(a){},
nY(a,b){return 12},
h0(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.u(A.hE(10))
s.b.h0(a)
if(!r.y.E(0,s.c))r.fe(new A.ko(new A.AU(s,a),new A.at(new A.w($.B,t.D),t.F)))},
l7(a){this.b.d=a
return null},
eQ(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.u(A.hE(10))
s=m.c
if(l.y.E(0,s)){m.b.eQ(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cG(new Uint8Array(0),0)
q=J.bV(B.f.gac(r.a),0,r.b)
m.b.eQ(a,b)
p=new Uint8Array(a.length)
B.f.dc(p,0,a)
o=A.l([],t.p8)
n=$.B
o.push(new A.pg(b,p))
l.fe(new A.i7(l,s,q,o,new A.at(new A.w(n,t.D),t.F)))},
$ibv:1,
$ik4:1}
A.AU.prototype={
$1(a){return this.oC(a)},
oC(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.e2(a,o.c),$async$$1)
case 3:q=n.dL(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:27}
A.bg.prototype={
kG(a){a.hv(a.c,this,!1)
return!0}}
A.ko.prototype={
b0(a){return this.w.$1(a)}}
A.ki.prototype={
kG(a){var s,r,q,p
if(!a.gF(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.ki)if(s.x===r)return!1
else s=s.gfL()
else if(s instanceof A.i7){q=s.gfL()
if(s.x===r){p=s.a
p.toString
p.k8(A.n(s).i("bc.E").a(s))}s=q}else if(s instanceof A.hP){if(s.x===r){r=s.a
r.toString
r.k8(A.n(s).i("bc.E").a(s))
return!1}s=s.gfL()}else break}a.hv(a.c,this,!1)
return!0},
b0(a){return this.xQ(a)},
xQ(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.e2(a,o),$async$b0)
case 2:n=c
p.z.G(0,o)
s=3
return A.a(a.i7(n),$async$b0)
case 3:return A.e(null,r)}})
return A.f($async$b0,r)}}
A.hP.prototype={
b0(a){return this.xP(a)},
xP(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.i5(p),$async$b0)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$b0,r)}}
A.i7.prototype={
kG(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.i7)if(r.x===s){B.b.D(r.z,this.z)
return!1}else r=r.gfL()
else if(r instanceof A.hP){if(r.x===s)break
r=r.gfL()}else break
a.hv(a.c,this,!1)
return!0},
b0(a){return this.xR(a)},
xR(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$b0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.Ax(m,A.t(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.p)(m),++o){n=m[o]
l.uu(n.a,n.b)}k=a
s=3
return A.a(q.w.e2(a,q.x),$async$b0)
case 3:s=2
return A.a(k.az(c,l),$async$b0)
case 2:return A.e(null,r)}})
return A.f($async$b0,r)}}
A.fT.prototype={
a7(){return"FileType."+this.b}}
A.hp.prototype={
c0(){var s=this.d
if(s!=null)return s
throw A.b(A.A("VFS closed"))},
j0(a,b){var s=$.Dn().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.c0().by(s)?1:0},
l2(a,b){var s=$.Dn().h(0,a)
if(s==null){this.e.d.G(0,a)
return null}else this.c0().fF(s,!1)},
l3(a){return new v.G.URL(a,"file:///").pathname},
dN(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dN(a,b)
s=$.Dn().h(0,p)
if(s==null)return q.e.dN(a,b)
r=q.c0()
if(!r.by(s))if((b&4)!==0){r.dB(s).truncate(0)
r.fF(s,!0)}else throw A.b(B.el)
return new A.hZ(new A.pw(q,s,(b&8)!==0),0)},
l5(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
d5(a,b){return this.x3(a,b)},
d4(a){return this.d5(a,!1)},
x3(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$d5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.y_(a,b)
s=2
return A.a(m.$1("meta"),$async$d5)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$d5)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$d5)
case 4:o=d
n=q.d=new A.Bd(new Uint8Array(2),l,p,o)
if(k){n.fF(B.b4,p.getSize()>0)
n.fF(B.b5,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$d5,r)}}
A.y_.prototype={
ox(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.ox(a)},
$S:217}
A.pw.prototype={
nG(a,b){return A.Fy(this.a.c0().dB(this.b),a,{at:b})},
l1(){return this.d>=2?1:0},
j1(){var s=this.a,r=this.b
s.c0().dB(r).flush()
if(this.c)s.c0().fF(r,!1)},
h_(){return this.a.c0().dB(this.b).getSize()},
l4(a){this.d=a},
l6(a){this.a.c0().dB(this.b).flush()},
h0(a){this.a.c0().dB(this.b).truncate(a)},
l7(a){this.d=a},
eQ(a,b){if(A.Fz(this.a.c0().dB(this.b),a,{at:b})<a.length)throw A.b(B.en)}}
A.Bd.prototype={
by(a){var s=this.a
A.Fy(this.b,s,{at:0})
return s[a.a]!==0},
fF(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.K(s)
s[a.a]=r
A.Fz(this.b,s,{at:0})},
dB(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.yS.prototype={
pu(a,b){var s=this,r=s.c
r.a!==$&&A.dE()
r.a=s
r=t.S
A.Az(new A.yT(s),r)
A.Az(new A.yU(s),r)
s.r=A.Az(new A.yV(s),r)
s.w=A.Az(new A.yW(s),r)},
ek(a,b){var s=J.J(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.c2(this.b.buffer,0,null)
B.f.aA(q,r,r+s.gm(a),a)
B.f.kx(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cR(a){return this.ek(a,0)},
n6(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
n4(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
n5(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.yT.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.yU.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.yV.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.yW.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.iH.prototype={}
A.x2.prototype={
pr(a){var s,r=this,q=r.a
q.start()
r.c=A.bw(q,"message",new A.x6(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.ld()
q.toString
A.k6(q,s,null,null,!1).W(new A.x7(r),t.P)}},
jG(a){return this.r3(a)},
r3(a){var s=0,r=A.h(t.H),q=this
var $async$jG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Os(a,new A.x3(q),q.gwm(),new A.x4(q),new A.x5(q))
return A.e(null,r)}})
return A.f($async$jG,r)},
h6(a,b,c){return this.oW(a,b,c,c)},
oW(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$h6=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.Js(null))
o=p.e++
n=new A.w($.B,t.a7)
p.f.j(0,o,new A.at(n,t.h1))
a.i=o
p.a.postMessage(a,A.ii(a))
s=3
return A.a(n,$async$h6)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.KS(m))
case 1:return A.e(q,r)}})
return A.f($async$h6,r)},
rn(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.aZ(s,s.r,s.e,A.n(s).i("aZ<2>"));r.k();)r.d.aT(new A.iD(a))
s.aq(0)
p.ak()},
m9(){return this.rn(null)}}
A.x6.prototype={
$1(a){if(a.data=="_disconnect"){this.a.m9()
return}this.a.jG(A.bm(a.data))},
$S:1}
A.x7.prototype={
$1(a){this.a.m9()
a.a.ak()},
$S:218}
A.x5.prototype={
$1(a){var s=this.a.f.G(0,a.i)
if(s!=null)s.aB(a)},
$S:18}
A.x4.prototype={
$1(a){return this.op(a)},
op(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.vg(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bF(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.C(a0)
k=A.af(a0)
if(!(l instanceof A.dF)){b.console.error("Error in worker: "+J.Z(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.ci){h=A.JR(b)
g=0}else{g=b instanceof A.dF?1:null
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
d.a.postMessage(c,A.ii(c))
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
$iH:1}
A.rG.prototype={
ct(a){return this.wL(a)},
wL(a){var s=0,r=A.h(t.n),q
var $async$ct=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.z0(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ct,r)}}
A.lV.prototype={}
A.ro.prototype={}
A.f4.prototype={}
A.me.prototype={
iz(){var s=0,r=A.h(t.H),q=this
var $async$iz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.d4(q.b),$async$iz)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iz,r)},
kS(){var s=0,r=A.h(t.H),q=this
var $async$kS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kS,r)}}
A.tJ.prototype={
xT(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
qW(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.z7.prototype={
$1(a){var s=new A.w($.B,t.D),r=new A.db(new A.at(s,t.F))
this.a.a=r
this.b.aB(r)
return A.K_(s)},
$S:220}
A.z8.prototype={
$2(a,b){var s,r,q
A.bm(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bw(new A.dF("Operation was cancelled"),b)
else q.bw(a,b)}return null},
$S:221}
A.db.prototype={}
A.m0.prototype={
guG(){if(this.c.a)return!1
return!this.d||this.f!=null},
dU(a){return this.pC(a)},
pC(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dU=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.ld()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.k6(n,o.a,null,o.gr7(),!0),$async$dU)
case 6:m=c
s=7
return A.a(A.k6(n,o.b,a,null,!1),$async$dU)
case 7:l=c
j=o.e
j=j==null?null:j.iz()
s=8
return A.a(j instanceof A.w?j:A.bF(j,t.H),$async$dU)
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
return A.f($async$dU,r)},
r8(){this.nI()},
kL(a,b,c){return this.c.iX(new A.rV(this,a,b,c),b,c)},
nI(){return this.c.l0(new A.rW(this),t.H)}}
A.rV.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dU(r.c).W(new A.rU(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rU.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rW.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kS()
s.a.ak()
r.a.ak()
p.f=null}},
$S:2}
A.jr.prototype={
iX(a,b,c){return this.ym(a,b,c,c)},
l0(a,b){return this.iX(a,null,b)},
ym(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iX=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.as)
h.a=!1
o=new A.w7(h,p)
if(!p.a){h.a=p.a=!0
q=A.iX(a,c).b4(o)
s=1
break}else{n={}
m=new A.w($.B,c.i("w<0>"))
l=new A.at(m,c.i("at<0>"))
n.a=null
h=new A.w6(h,n,l,a,c)
if(!g)n.a=A.bw(b,"abort",new A.w5(n,p,l,h),!1,t.m)
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
q=m.b4(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iX,r)}}
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
s.aT(B.as)}},
$S:1}
A.eD.prototype={
gnO(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
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
$1(a){if(a!=null)return A.G(a)
return null},
$S:222}
A.mZ.prototype={
a7(){return"MessageType."+this.b}}
A.xM.prototype={
vg(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.ik(a,b)
case"connect":return p.kA(a,b)
case"custom":return p.ew(a,b)
case"fileSystemExists":return p.fw(a,b)
case"fileSystemFlush":return p.fz(a,b)
case"fileSystemAccess":return p.fv(a,b)
case"runQuery":return p.ip(a,b)
case"exclusiveLock":return p.ij(a,b)
case"releaseLock":s=p.bF(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.u(A.A("Lock to be released is not active."))
q.b.ak()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.ih(a,b)
case"openAdditionalConnection":return p.il(a,b)
case"updateRequest":return p.iq(a,b)
case"rollbackRequest":return p.io(a,b)
case"commitRequest":return p.ii(a,b)
case"dedicatedCompatibilityCheck":return p.e4(a,b)
case"sharedCompatibilityCheck":return p.e4(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.e4(a,b)
default:r=A.fk(new A.bJ(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.w($.B,t.hl)
q.cE(r)
return q}}}
A.dM.prototype={
a7(){return"FileSystemImplementation."+this.b}}
A.cF.prototype={
a7(){return"TypeCode."+this.b},
uY(a){var s=null
switch(this.a){case 0:s=A.u(A.U("Unsupported type code",null))
break
case 1:a=A.aj(A.fj(a))
s=a
break
case 2:s=A.Gy(t.bJ.a(a).toString(),null)
break
case 3:A.fj(a)
s=a
break
case 4:A.G(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.i9(a)
s=a
break
case 6:break}return s}}
A.eF.prototype={
mZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
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
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.aj(A.fj(h))))
if(k!==0)a.bO(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bO(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.fj(h))
if(k!==0)a.bO(k,e)
break
case 4:g=B.e.v(A.G(h))
k=s.dart_sqlite3_bind_text(d,i,c.cR(g),g.length)
if(k!==0)a.bO(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cR(h),h.length)
if(k!==0)a.bO(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bO(k,e)
break
case 7:f=A.i9(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bO(k,e)
break
case 0:throw A.b(A.a2("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mL()},
h(a,b){var s=this.c[b],r=s>=8?B.aJ:B.b9[s]
return r.uY(this.a[b])},
j(a,b,c){this.mL()},
mL(){throw A.b(A.a2("decodeValues list is unmodifiable"))}}
A.CE.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:18}
A.r_.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r0.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.r3.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r4.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.r5.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.wZ.prototype={
vz(){var s,r,q,p
for(s=this.b,r=new A.aZ(s,s.r,s.e,A.n(s).i("aZ<2>"));r.k();){q=r.d
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
A.hh.prototype={
l(a){return"Remote error: "+this.a},
$iH:1}
A.dF.prototype={}
A.Ck.prototype={
$1(a){return A.bm(a.data)},
$S:224}
A.kE.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.hO.prototype={
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
return A.a(q.a.fm(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
mD(a){var s=new v.G.AbortController()
a.onabort=A.Cl(new A.Ac(s))
this.w.push(s)
return s},
kZ(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.guG()){r=p.mD(b)
o=s.kL(c,r.signal,d).b4(new A.Ag(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.A("Requested operation on inactive lock state."))}if(o==null)o=A.iX(c,d)
q=p.a.z
return q instanceof A.dQ?o.b4(q.gw0()):o},
wZ(a){var s=this,r=s.mD(a),q=new A.w($.B,t.hy),p=new A.aG(q,t.ho),o=t.H
A.DD(s.a.f.kL(new A.Ad(s,p),r.signal,o),new A.Ae(p),o,t.K)
return q.b4(new A.Af(s,r))}}
A.Ac.prototype={
$0(){return this.a.abort()},
$S:0}
A.Ag.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.Ad.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.B,t.D)
s.f=new A.a_(r,new A.aG(q,t.Q))
this.b.aB(r)
return q},
$S:3}
A.Ae.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bw(a,b)},
$S:6}
A.Af.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.hM.prototype={
pw(a,b,c){this.b.a.b4(new A.zX(this))},
e4(a,b){return this.qZ(a,b)},
qZ(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$e4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.n0(a),$async$e4)
case 3:q={r:d.gnO(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e4,r)},
kA(a,b){return this.w9(a,b)},
w9(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$kA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gm3()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.ii(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kA,r)},
ew(a,b){return this.wa(a,b)},
wa(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ew=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lN(l)
n=a.r
s=7
return A.a(o.a.gcv(),$async$ew)
case 7:s=6
return A.a(d.cY(p,new A.ro(n)),$async$ew)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cY(p,new A.lV(a)),$async$ew)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ew,r)},
ik(a,b){return this.wo(a,b)},
wo(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ik=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.l0(new A.A1(p,a),t.m),$async$ik)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
ip(a,b){return this.ws(a,b)},
ws(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ip=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bF(a)
n=o.a
s=3
return A.a(n.gcv(),$async$ip)
case 3:m=d
q=o.kZ(a.z,b,new A.A4(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
ij(a,b){return this.we(a,b)},
we(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ij=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bF(a).wZ(b),$async$ij)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
ii(a,b){return this.w8(a,b)},
w8(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ii=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bF(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dS(n,new A.zZ(p,o),a),$async$ii)
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
return A.f($async$ii,r)},
io(a,b){return this.wr(a,b)},
wr(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$io=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bF(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dS(n,new A.A3(p,o),a),$async$io)
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
return A.f($async$io,r)},
iq(a,b){return this.wu(a,b)},
wu(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bF(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dS(n,new A.A6(p,o),a),$async$iq)
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
return A.f($async$iq,r)},
il(a,b){return this.wp(a,b)},
wp(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$il=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bF(a).a;++m.w
s=3
return A.a(A.CH(),$async$il)
case 3:o=d
n=o.a
p.w.lp(o.b).x.push(A.Gz(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)},
ih(a,b){return this.w7(a,b)},
w7(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$ih=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bF(a)
B.b.G(p.x,o)
s=3
return A.a(o.q(),$async$ih)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)},
fz(a,b){return this.wh(a,b)},
wh(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bF(a).a.gd9(),$async$fz)
case 3:o=d
s=o instanceof A.dQ?4:5
break
case 4:s=6
return A.a(o.cO(!1),$async$fz)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
fv(a,b){return this.wf(a,b)},
wf(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bF(a)
n=B.ba[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gd9(),$async$fv)
case 4:s=3
return A.a(l.kZ(null,k,new j.A_(d,n,m,a),t.m),$async$fv)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
fw(a,b){return this.wg(a,b)},
wg(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bF(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gd9(),$async$fw)
case 4:s=3
return A.a(n.kZ(null,m,new l.A0(d,a),t.y),$async$fw)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
dS(a,b,c){return this.p9(a,b,c)},
p9(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dS)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dS,r)},
wn(a){},
fk(a){var s=0,r=A.h(t.X),q,p=this
var $async$fk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.h6({r:a,z:null,i:0,d:null,t:"custom"},B.di,t.m),$async$fk)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
lN(a){return B.b.ky(this.x,new A.zW(a))},
bF(a){var s=a.d
if(s!=null)return this.lN(s)
else throw A.b(A.U("Request requires database id",null))},
$iFm:1}
A.zX.prototype={
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
A.A1.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.ct(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vZ(h.d,A.JU(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gd9():m.gcv(),$async$$0)
case 8:l=A.Gz(m,null)
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
return A.a(m.fm(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:225}
A.A4.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.A("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.eF(s,r,A.c2(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oR(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.aj(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.vP(l,k.s,q)
s=o.d
return A.I7(s.sqlite3_get_autocommit(p)!==0,m,A.aj(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:36}
A.zZ.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcv(),$async$$0)
case 3:q=b.a.q4().gcD().aZ(new A.zY(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.zY.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.ii(s))},
$S:74}
A.A3.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcv(),$async$$0)
case 3:q=b.a.ts().gcD().aZ(new A.A2(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.A2.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.ii(s))},
$S:74}
A.A6.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcv(),$async$$0)
case 3:q=b.a.u0().gcD().aZ(new A.A5(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:228}
A.A5.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.ii(s))},
$S:229}
A.A_.prototype={
$0(){var s,r,q,p=this,o=p.a.dN(new A.jU(A.Hd(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.h0(s.byteLength)
o.eQ(A.c2(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.h_()
r=new Uint8Array(q)
o.j3(r,0)
q={r:t.a.a(J.J9(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.j1()}},
$S:36}
A.A0.prototype={
$0(){return this.a.j0(A.Hd(B.ba[this.b.f]),0)===1},
$S:49}
A.zW.prototype={
$1(a){return a.b===this.a},
$S:230}
A.m1.prototype={
gd9(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gd9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iX(new A.rZ(p),t.H):o,$async$gd9)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gd9,r)},
gcv(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcv=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iX(new A.rY(p),t.u):o,$async$gcv)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcv,r)},
fm(){var s=0,r=A.h(t.H),q=this
var $async$fm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$fm)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fm,r)},
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
if(j!=null)j.vz()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.F1()
A.DB(m)
k=l.a.get(m)
if(k==null)A.u(A.A("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bF(j,t.H),$async$q)
case 6:q.f.nI()
return A.e(null,r)}})
return A.f($async$q,r)},
mh(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.G(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a_(s,!0)
p=a.iI(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.G(0,new A.S(n,A.n(n).i("S<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a_(p,!0)}return new A.a_(p,!1)},
vP(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aJ(b,B.j)
else{s=null
r=null
q=this.mh(a,b)
s=q.a
r=q.b
try{s.er(new A.lW(c.guE()))}finally{if(r)s.dJ()
else s.q()}}},
oR(a,b,c){var s,r=null,q=null,p=this.mh(a,b)
r=p.a
q=p.b
try{s=A.KT(r,c)
return s}finally{if(q)r.dJ()
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
return A.a(A.xZ("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.geo()
s=3
break
case 5:case 6:s=10
return A.a(A.mf("drift_db/"+l.c,k===B.az,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.geo()
s=3
break
case 7:s=11
return A.a(A.mF(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.geo()
s=3
break
case 8:l.z=A.DG("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rY.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gd9(),$async$$0)
case 4:n=b
o.nl()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.ek(B.e.v(n.a),1),n,0)
if(m===0)A.u(A.A("could not register vfs"))
$.F1().j(0,n,m)
s=5
return A.a(l.f.kL(new A.rX(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:75}
A.rX.prototype={
$0(){var s=this.a
return s.a.b.iF(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:75}
A.zr.prototype={
gm3(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.p_()
r.Q!==$&&A.Dl()
r.Q=s
q=s}return q},
ex(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ex=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cn(A.cJ(A.MO(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ex)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.iH(i.port,i.lockName,null)
n.lp(l)
s=9
break
case 10:s=A.OQ(m.t)?11:12
break
case 11:s=13
return A.a(n.n0(m),$async$ex)
case 13:k=b
j.postMessage(k.gnO())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$ex)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ex,r)},
lp(a){var s=this,r=A.LD(a,s.d++,s)
s.c.push(r)
r.b.a.b4(new A.zs(s,r))
return r},
n0(a){return this.x.l0(new A.zt(this,a),t.p6)},
ct(a){return this.wM(a)},
wM(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ct=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bm(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.A("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bF(n,t.he),$async$ct)
case 5:s=3
break
case 4:o=A.DD(q.b.ct(m),new A.zu(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$ct)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$ct,r)},
vZ(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aZ(s,s.r,s.e,A.n(s).i("aZ<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.az||b===B.b3
o=A.DO(t.cj)
n=c===0?null:new A.wZ(c,A.dV(null,null,t.N,t.fw))
n=new A.m1(this,r,a,b,d,new A.m0(q+"-outer",q,new A.jr(o),p),n)
s.j(0,r,n)
return n}}
A.zs.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.zt.prototype={
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
case 10:h=p.a.gm3()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.ii(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hS(n,"message",!1,t.d4).gH(0),$async$$0)
case 15:e=b.Jz(a.bm(a1.data))
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
return A.a(A.il(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a_(B.bm,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.CD(c),$async$$0)
case 23:if(a1)i.u(0,new A.a_(B.bn,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.eD(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:232}
A.zu.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:233}
A.kQ.prototype={}
A.p_.prototype={
gnj(){return new A.hS(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.pu.prototype={
gnj(){return new A.dA(new A.Bs(this),t.k8)},
q(){}}
A.Bs.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.bw(this.a.a,"connect",new A.Bp(new A.Bt(s,r,a)),!1,t.m))
a.r=new A.Bq(r)},
$S:234}
A.Bt.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bw(a,"message",new A.Br(this.c),!1,t.m))},
$S:1}
A.Br.prototype={
$1(a){this.a.ut(a)},
$S:1}
A.Bp.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bW(r,A.a1(r).i("bW<1,N>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.Bq.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].A()},
$S:2}
A.p0.prototype={
p_(){var s=v.G
if(!("Worker" in s))return null
return new A.As(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.As.prototype={}
A.nW.prototype={
gh8(){return A.G(this.c)}}
A.yg.prototype={
gkK(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
j6(a){var s,r=this,q=r.d=J.Jd(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
ne(a,b){var s
if(this.j6(a))return
if(b==null)if(a instanceof A.eN)b="/"+a.a+"/"
else{s=J.Z(a)
s=A.D(s,"\\","\\\\")
b='"'+A.D(s,'"','\\"')+'"'}this.lV(b)},
ft(a){return this.ne(a,null)},
vT(){if(this.c===this.b.length)return
this.lV("no more input")},
vO(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.u(A.b7("position must be greater than or equal to 0."))
else if(c>n.length)A.u(A.b7("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.u(A.b7("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.y0(s,r,new Uint32Array(q))
p.ps(new A.ct(n),s)
o=c+b
if(o>q)A.u(A.b7("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.u(A.b7("Start may not be negative, was "+c+"."))
throw A.b(new A.nW(n,a,new A.hT(p,c,o)))},
lV(a){this.vO("expected "+a+".",0,this.c)}}
A.hB.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.FC(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.FC(b,this))
s=this.a
s.$flags&2&&A.K(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.K(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lJ(b)
B.f.aA(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.tY(q)
q=r.a
s=r.b++
q.$flags&2&&A.K(q)
q[s]=b},
lJ(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
tY(a){var s=this.lJ(null)
B.f.aA(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.aA(c,0,s,null,null))
s=this.a
if(d instanceof A.cG)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.p9.prototype={}
A.cG.prototype={}
A.Dz.prototype={}
A.hS.prototype={
aa(a,b,c,d){return A.bw(this.a,this.b,a,!1,this.$ti.c)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.km.prototype={
A(){var s=this,r=A.bi(null,t.H)
if(s.b==null)return r
s.k9()
s.d=s.b=null
return r},
iD(a){var s,r=this
if(r.b==null)throw A.b(A.A("Subscription has been canceled."))
r.k9()
s=A.HK(new A.Aw(a),t.m)
s=s==null?null:A.d5(s)
r.d=s
r.k7()},
b7(){if(this.b==null)return;++this.a
this.k9()},
b_(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.k7()},
k7(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
k9(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibu:1}
A.Av.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.Aw.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dU.prototype
s.pf=s.l
s=A.bM.prototype
s.pb=s.nm
s.pc=s.nn
s.pe=s.np
s.pd=s.no
s=A.b9.prototype
s.j8=s.aD
s.lm=s.aM
s.ln=s.aY
s=A.dx.prototype
s.pi=s.lG
s.pj=s.m_
s.pk=s.mA
s=A.M.prototype
s.ll=s.ai
s=A.aH.prototype
s.lk=s.uD
s=A.kF.prototype
s.pl=s.q
s=A.o.prototype
s.pa=s.dM
s=A.lx.prototype
s.li=s.ie
s=A.fD.prototype
s.lj=s.fo
s=A.hr.prototype
s.ph=s.a3
s.pg=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"MY","K9",50)
r(A,"Na","KD",10)
q(A,"NK","Lo",20)
q(A,"NL","Lp",20)
q(A,"NM","Lq",20)
q(A,"NN","Nc",15)
r(A,"HP","NC",0)
q(A,"NO","Nd",29)
s(A,"NP","Nf",14)
r(A,"Cy","Ne",0)
p(A,"NU",5,null,["$5"],["Nw"],236,0)
p(A,"NZ",4,null,["$1$4","$4"],["Cs",function(a,b,c,d){return A.Cs(a,b,c,d,t.z)}],237,0)
p(A,"O0",5,null,["$2$5","$5"],["Ct",function(a,b,c,d,e){var i=t.z
return A.Ct(a,b,c,d,e,i,i)}],238,0)
p(A,"O_",6,null,["$3$6"],["EE"],239,0)
p(A,"NX",4,null,["$1$4","$4"],["Hw",function(a,b,c,d){return A.Hw(a,b,c,d,t.z)}],240,0)
p(A,"NY",4,null,["$2$4","$4"],["Hx",function(a,b,c,d){var i=t.z
return A.Hx(a,b,c,d,i,i)}],241,0)
p(A,"NW",4,null,["$3$4","$4"],["Hv",function(a,b,c,d){var i=t.z
return A.Hv(a,b,c,d,i,i,i)}],242,0)
p(A,"NS",5,null,["$5"],["Nv"],243,0)
p(A,"O1",4,null,["$4"],["Cu"],244,0)
p(A,"NR",5,null,["$5"],["Nu"],245,0)
p(A,"NQ",5,null,["$5"],["Nt"],246,0)
p(A,"NV",4,null,["$4"],["Nx"],247,0)
p(A,"NT",5,null,["$5"],["Hu"],248,0)
var j
o(j=A.f7.prototype,"gf1","bY",0)
o(j,"gf2","bZ",0)
n(A.f8.prototype,"guM",0,1,null,["$2","$1"],["bw","aT"],71,0,0)
m(A.w.prototype,"gjl","q9",14)
n(j=A.el.prototype,"guq",0,1,null,["$2","$1"],["bk","ke"],71,0,0)
l(j,"gpK","aD",17)
m(j,"gpF","aM",14)
o(j,"gq0","aY",0)
o(j=A.eg.prototype,"gf1","bY",0)
o(j,"gf2","bZ",0)
o(j=A.b9.prototype,"gf1","bY",0)
o(j,"gf2","bZ",0)
o(A.hR.prototype,"gme","rH",0)
l(j=A.cn.prototype,"grz","rA",17)
m(j,"grD","rE",14)
o(j,"grB","rC",0)
o(j=A.hU.prototype,"gf1","bY",0)
o(j,"gf2","bZ",0)
l(j,"gjA","jB",17)
m(j,"gjE","jF",130)
o(j,"gjC","jD",0)
o(j=A.i0.prototype,"gf1","bY",0)
o(j,"gf2","bZ",0)
l(j,"gjA","jB",17)
m(j,"gjE","jF",14)
o(j,"gjC","jD",0)
s(A,"EL","MH",44)
q(A,"EM","MI",47)
s(A,"O6","Kh",50)
q(A,"Og","ML",41)
k(j=A.oP.prototype,"guo","u",17)
o(j,"geo","q",0)
q(A,"HU","OJ",47)
s(A,"HT","OI",44)
q(A,"Oh","Lg",7)
p(A,"OW",2,null,["$1$2","$2"],["I5",function(a,b){return A.I5(a,b,t.cZ)}],249,0)
m(j=A.m4.prototype,"gvN","V",44)
l(j,"gwv","ad",47)
l(j,"gwC","wD",15)
q(A,"O4","Jr",7)
o(j=A.jB.prototype,"grF","rG",0)
l(j,"grI","rJ",129)
q(A,"P7","KB",61)
q(A,"HS","JH",251)
q(A,"Oc","JM",252)
q(A,"Oe","K5",253)
q(A,"Ob","Jm",254)
q(A,"Od","JT",255)
q(A,"pZ","JL",7)
q(A,"Oz","Fw",256)
r(A,"OA","NF",257)
r(A,"OS","MJ",10)
r(A,"Qq","MK",10)
q(A,"OY","Ns",258)
l(A.ng.prototype,"gxu","xv",9)
q(A,"O8","Dv",172)
l(j=A.nY.prototype,"gwk","wl",38)
l(j,"gwi","wj",137)
o(j,"gru","jQ",0)
q(A,"Pd","L8",61)
o(A.oU.prototype,"gw2","kz",0)
o(A.nr.prototype,"gkq","fo",0)
o(A.nb.prototype,"gkq","fo",0)
l(j=A.fD.prototype,"grv","rw",38)
o(j,"gmN","ei",3)
m(A.oD.prototype,"gr_","ht",33)
m(A.oC.prototype,"gqX","qY",33)
m(A.oB.prototype,"gr5","hu",33)
l(j=A.m_.prototype,"gwP","wQ",9)
m(j,"gwN","wO",188)
n(j,"gyN",0,5,null,["$5"],["yO"],189,0,0)
n(j,"gyC",0,3,null,["$3"],["yD"],190,0,0)
n(j,"gyu",0,4,null,["$4"],["yv"],62,0,0)
n(j,"gyJ",0,4,null,["$4"],["yK"],62,0,0)
n(j,"gyP",0,3,null,["$3"],["yQ"],192,0,0)
m(j,"gyU","yV",63)
m(j,"gyA","yB",63)
l(j,"gyy","yz",48)
n(j,"gyR",0,4,null,["$4"],["yS"],65,0,0)
n(j,"gz1",0,4,null,["$4"],["z2"],65,0,0)
m(j,"gyY","yZ",196)
m(j,"gyW","yX",19)
m(j,"gyH","yI",19)
m(j,"gyL","yM",19)
m(j,"gz_","z0",19)
m(j,"gyw","yx",19)
l(j,"gj2","yE",48)
n(j,"gyF",0,3,null,["$3"],["yG"],198,0,0)
l(j,"gj4","yT",48)
l(j,"gvj","vk",20)
l(j,"gve","vf",199)
n(j,"gvh",0,5,null,["$5"],["vi"],200,0,0)
n(j,"gvp",0,4,null,["$4"],["vq"],39,0,0)
n(j,"gvt",0,4,null,["$4"],["vu"],39,0,0)
n(j,"gvr",0,4,null,["$4"],["vs"],39,0,0)
m(j,"gvv","vw",68)
m(j,"gvn","vo",68)
n(j,"gvl",0,5,null,["$5"],["vm"],203,0,0)
m(j,"gvc","vd",204)
m(j,"gva","vb",205)
n(j,"gv8",0,3,null,["$3"],["v9"],206,0,0)
o(j=A.dQ.prototype,"geo","q",3)
o(j,"gw0","cX",3)
o(A.hp.prototype,"geo","q",0)
o(A.m0.prototype,"gr7","r8",0)
l(A.eF.prototype,"guE","mZ",223)
l(A.hM.prototype,"gwm","wn",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.DM,J.mH,A.jP,J.fA,A.Ak,A.oQ,A.o,A.lF,A.eB,A.X,A.ag,A.M,A.xX,A.as,A.mX,A.d1,A.mb,A.oa,A.nI,A.m8,A.oA,A.dR,A.iU,A.om,A.k1,A.hY,A.je,A.fI,A.hV,A.cA,A.yK,A.na,A.iO,A.kC,A.vl,A.bN,A.aZ,A.mU,A.eN,A.hX,A.oI,A.hv,A.BB,A.oR,A.pG,A.cz,A.p5,A.pD,A.kG,A.k9,A.oK,A.kr,A.pA,A.ar,A.ad,A.b9,A.kf,A.ob,A.kp,A.f8,A.cl,A.w,A.oJ,A.el,A.pB,A.kb,A.oG,A.p1,A.At,A.ej,A.hR,A.cn,A.kl,A.C_,A.C1,A.C0,A.BY,A.BZ,A.BX,A.BU,A.pN,A.BT,A.BS,A.BW,A.BV,A.pM,A.pO,A.pL,A.i8,A.k8,A.p6,A.Bb,A.ei,A.pd,A.bc,A.pf,A.pF,A.pe,A.nV,A.lI,A.aH,A.oM,A.qs,A.oL,A.lG,A.pv,A.f9,A.B7,A.BC,A.pJ,A.dB,A.aQ,A.p4,A.aI,A.aF,A.Au,A.nd,A.jW,A.p3,A.br,A.mG,A.V,A.W,A.pz,A.jY,A.nA,A.a6,A.kN,A.yP,A.cm,A.mc,A.n9,A.B0,A.B1,A.m9,A.a7,A.m5,A.j3,A.eP,A.i5,A.hW,A.jd,A.m4,A.n8,A.on,A.cu,A.ca,A.tK,A.qF,A.jc,A.jS,A.vB,A.jR,A.xW,A.rp,A.rF,A.Aj,A.eA,A.lw,A.lx,A.qo,A.n1,A.fZ,A.qn,A.jB,A.wU,A.Bu,A.wJ,A.wr,A.jD,A.i1,A.wK,A.Bv,A.eL,A.dN,A.mB,A.cQ,A.dO,A.e7,A.wp,A.lN,A.jG,A.cb,A.ms,A.nu,A.ai,A.w3,A.xC,A.eX,A.cT,A.np,A.xU,A.nD,A.f1,A.bd,A.f3,A.nP,A.e4,A.a5,A.qC,A.qD,A.qE,A.tc,A.fh,A.B9,A.pC,A.i_,A.uk,A.iL,A.qZ,A.iK,A.dW,A.iP,A.bq,A.vs,A.cP,A.ts,A.mm,A.qq,A.fB,A.ix,A.nT,A.iS,A.tf,A.vj,A.nR,A.wV,A.pc,A.vC,A.w4,A.bA,A.ng,A.vk,A.BD,A.xA,A.di,A.b8,A.cw,A.no,A.cV,A.xT,A.cy,A.xK,A.b5,A.dP,A.fU,A.eK,A.c3,A.lP,A.c9,A.nC,A.xR,A.oT,A.hK,A.qc,A.bp,A.ra,A.nY,A.df,A.eU,A.jf,A.aR,A.mY,A.Bi,A.Bg,A.wb,A.qp,A.jb,A.jJ,A.wg,A.nn,A.xb,A.b_,A.xk,A.hw,A.yi,A.bl,A.lt,A.hu,A.cU,A.hd,A.he,A.cr,A.oc,A.yk,A.x9,A.hb,A.pH,A.xa,A.jI,A.k0,A.yx,A.cX,A.cx,A.eV,A.bQ,A.Bn,A.yA,A.oU,A.hN,A.fD,A.zv,A.hI,A.oz,A.z6,A.ph,A.rG,A.f4,A.oV,A.zb,A.zc,A.hJ,A.oD,A.oB,A.rh,A.yh,A.ne,A.nf,A.y0,A.nL,A.hr,A.tL,A.bx,A.cH,A.cB,A.nO,A.cC,A.ci,A.ll,A.rI,A.em,A.y2,A.eC,A.be,A.lA,A.rn,A.pq,A.Bh,A.bY,A.lW,A.dv,A.jU,A.z1,A.yX,A.z3,A.z2,A.ec,A.dw,A.m_,A.dk,A.fa,A.yY,A.qj,A.kq,A.Ax,A.pg,A.p8,A.Bd,A.yS,A.iH,A.xM,A.iD,A.lV,A.me,A.tJ,A.db,A.m0,A.jr,A.eD,A.wZ,A.hh,A.kE,A.hO,A.m1,A.zr,A.kQ,A.p0,A.As,A.yg,A.Dz,A.km])
q(J.mH,[J.mK,J.j5,J.aJ,J.bB,J.fW,J.eM,J.dS])
q(J.aJ,[J.dU,J.z,A.h4,A.jt])
q(J.dU,[J.nh,J.ea,J.bZ])
r(J.mI,A.jP)
r(J.uh,J.z)
q(J.eM,[J.j4,J.mL])
q(A.o,[A.ef,A.L,A.cv,A.aq,A.iQ,A.f2,A.dl,A.ed,A.dc,A.fd,A.oH,A.py,A.i3,A.eO,A.jO])
q(A.ef,[A.ey,A.kR])
r(A.kj,A.ey)
r(A.kg,A.kR)
q(A.eB,[A.qH,A.qA,A.qG,A.ua,A.yy,A.D_,A.D1,A.zC,A.zB,A.C5,A.C4,A.tH,A.tC,A.AB,A.AA,A.AM,A.AP,A.yc,A.yd,A.ya,A.Ar,A.Aq,A.Bm,A.AS,A.An,A.Ba,A.vG,A.B5,A.rm,A.zP,A.tD,A.D3,A.D9,A.Da,A.CI,A.qv,A.qx,A.qz,A.lz,A.qr,A.C7,A.qt,A.vK,A.CQ,A.wI,A.wH,A.ws,A.wD,A.wE,A.wF,A.wG,A.wB,A.wC,A.wT,A.wN,A.wO,A.wL,A.wQ,A.rk,A.rl,A.xE,A.xz,A.wX,A.y4,A.y5,A.uO,A.uP,A.uR,A.vc,A.uS,A.uT,A.uU,A.uV,A.uW,A.uX,A.uY,A.uZ,A.v_,A.v0,A.v2,A.v3,A.v4,A.v5,A.v6,A.v7,A.v8,A.uA,A.uC,A.uG,A.un,A.um,A.uE,A.uD,A.uK,A.uL,A.uM,A.uN,A.uu,A.uw,A.uy,A.uq,A.uo,A.uI,A.uJ,A.ut,A.ur,A.t9,A.t8,A.ta,A.t7,A.t6,A.t5,A.t4,A.t0,A.t1,A.t2,A.vt,A.vv,A.vx,A.vz,A.vu,A.tt,A.tu,A.D8,A.ti,A.tg,A.tj,A.tk,A.tm,A.to,A.tq,A.De,A.vF,A.vE,A.vD,A.w_,A.vW,A.vX,A.vZ,A.vY,A.Di,A.x8,A.CP,A.Ch,A.Cj,A.Cd,A.Ce,A.xs,A.xu,A.xv,A.xw,A.xN,A.xQ,A.xS,A.qV,A.qY,A.qU,A.qX,A.qR,A.qQ,A.qN,A.qW,A.qS,A.qP,A.qO,A.qT,A.qK,A.qd,A.qe,A.rc,A.rb,A.yv,A.yl,A.yt,A.yo,A.yp,A.yq,A.ym,A.CF,A.CG,A.qb,A.qa,A.vV,A.vT,A.vU,A.vM,A.vN,A.vO,A.vP,A.vQ,A.vR,A.wd,A.we,A.wm,A.wk,A.wj,A.wi,A.wl,A.xi,A.xc,A.xe,A.xg,A.xl,A.xq,A.yj,A.CS,A.Dd,A.Db,A.Dc,A.CJ,A.CK,A.yJ,A.yH,A.yD,A.yF,A.yB,A.Aa,A.A7,A.xG,A.xF,A.zw,A.z5,A.vp,A.vq,A.vA,A.Ah,A.Ai,A.CY,A.CX,A.ze,A.zq,A.zl,A.zp,A.zh,A.zg,A.zj,A.zm,A.zn,A.zo,A.ri,A.rj,A.Cv,A.tN,A.tM,A.tO,A.tQ,A.tS,A.tP,A.u5,A.y6,A.rQ,A.By,A.D6,A.Df,A.Dg,A.qi,A.Al,A.Am,A.r1,A.r2,A.r6,A.r7,A.r8,A.tr,A.qm,A.qk,A.AV,A.AY,A.AZ,A.u9,A.u7,A.AU,A.y_,A.yT,A.yU,A.yV,A.yW,A.x6,A.x7,A.x5,A.x4,A.x3,A.z7,A.rU,A.w5,A.tb,A.CE,A.r_,A.r0,A.r3,A.r4,A.r5,A.Ck,A.zY,A.A2,A.A5,A.zW,A.Bs,A.Bt,A.Br,A.Bp,A.Av,A.Aw])
q(A.qH,[A.zU,A.qB,A.rg,A.ui,A.D0,A.C6,A.Cw,A.tI,A.tB,A.AC,A.AN,A.AQ,A.zy,A.AR,A.vm,A.vI,A.B8,A.zO,A.BM,A.yQ,A.BL,A.BK,A.tF,A.tE,A.qu,A.qw,A.qy,A.ly,A.w2,A.vL,A.wo,A.wu,A.wM,A.wq,A.Cf,A.xD,A.xy,A.wY,A.xB,A.xV,A.Dm,A.CC,A.ul,A.up,A.us,A.t3,A.tv,A.w0,A.Dj,A.Cg,A.xx,A.xO,A.xP,A.qM,A.qf,A.yn,A.Cp,A.z9,A.zf,A.zk,A.tR,A.rT,A.B_,A.z8,A.Ae,A.zu])
r(A.bW,A.kg)
q(A.X,[A.ez,A.bM,A.dx,A.pa])
q(A.ag,[A.dT,A.ns,A.dt,A.mM,A.ol,A.nB,A.p2,A.jC,A.j8,A.lp,A.bJ,A.d0,A.ok,A.bt,A.lL])
q(A.M,[A.hD,A.nF,A.ou,A.hG,A.eF,A.hB])
r(A.ct,A.hD)
q(A.qG,[A.D5,A.x0,A.zD,A.zE,A.BF,A.BE,A.C3,A.zG,A.zH,A.zJ,A.zK,A.zI,A.zF,A.tG,A.AD,A.AI,A.AH,A.AF,A.AE,A.AL,A.AK,A.AJ,A.AO,A.yb,A.ye,A.y9,A.Bx,A.Bw,A.zx,A.zT,A.zS,A.Be,A.Bc,A.C8,A.C9,A.Ap,A.Ao,A.Bl,A.Bk,A.Cr,A.BP,A.BO,A.t_,A.Cm,A.Cn,A.vJ,A.wn,A.wz,A.wA,A.ww,A.wt,A.wx,A.wy,A.wv,A.wR,A.wS,A.wP,A.uQ,A.v1,A.vd,A.ve,A.vf,A.vg,A.vh,A.vi,A.v9,A.va,A.vb,A.uz,A.uB,A.uF,A.uv,A.ux,A.uH,A.te,A.vw,A.vy,A.th,A.tl,A.tn,A.tp,A.Ci,A.xt,A.td,A.u6,A.tz,A.ty,A.y8,A.qJ,A.qL,A.r9,A.rf,A.re,A.rd,A.ys,A.yr,A.yu,A.xj,A.xd,A.xf,A.xh,A.xm,A.xr,A.xp,A.xo,A.xn,A.yw,A.wh,A.wc,A.yI,A.yG,A.yE,A.yC,A.Ab,A.A8,A.A9,A.xH,A.wa,A.vr,A.zd,A.zi,A.u4,A.tT,A.u_,A.u0,A.u1,A.u2,A.tY,A.tZ,A.tU,A.tV,A.tW,A.tX,A.u3,A.AT,A.rR,A.rS,A.rO,A.rN,A.rP,A.rK,A.rJ,A.rL,A.rM,A.Bz,A.BA,A.Dh,A.rt,A.rq,A.rv,A.rx,A.rz,A.rs,A.ry,A.rD,A.rB,A.rA,A.ru,A.rw,A.rC,A.rr,A.qg,A.qh,A.yZ,A.ql,A.AW,A.AX,A.Ay,A.u8,A.rV,A.rW,A.w7,A.w6,A.Ac,A.Ag,A.Ad,A.Af,A.zX,A.A1,A.A4,A.zZ,A.A3,A.A6,A.A_,A.A0,A.rZ,A.rY,A.rX,A.zs,A.zt,A.Bq])
q(A.L,[A.a0,A.eI,A.S,A.ao,A.aK,A.fc,A.kt])
q(A.a0,[A.cD,A.Y,A.bE,A.ja,A.pb])
r(A.eH,A.cv)
r(A.iM,A.f2)
r(A.fM,A.dl)
r(A.eG,A.dc)
q(A.hY,[A.pi,A.pj,A.pk])
q(A.pi,[A.a_,A.kz,A.kA,A.hZ,A.pl])
r(A.ek,A.pj)
q(A.pk,[A.fg,A.pm])
r(A.kM,A.je)
r(A.d_,A.kM)
r(A.iI,A.d_)
q(A.fI,[A.aE,A.iY])
q(A.cA,[A.iJ,A.kB])
r(A.dK,A.iJ)
r(A.j1,A.ua)
r(A.jy,A.dt)
q(A.yy,[A.y7,A.iz])
q(A.bM,[A.j7,A.j6,A.ks])
r(A.h3,A.h4)
q(A.jt,[A.js,A.h5])
q(A.h5,[A.kv,A.kx])
r(A.kw,A.kv)
r(A.e0,A.kw)
r(A.ky,A.kx)
r(A.c1,A.ky)
q(A.e0,[A.n3,A.n4])
q(A.c1,[A.n5,A.n6,A.n7,A.ju,A.jv,A.jw,A.eT])
r(A.kH,A.p2)
q(A.ad,[A.i2,A.jZ,A.kk,A.dA,A.kn,A.ke,A.iv,A.hS])
r(A.bf,A.i2)
r(A.aX,A.bf)
q(A.b9,[A.eg,A.hU,A.i0])
r(A.f7,A.eg)
r(A.ka,A.kf)
q(A.f8,[A.aG,A.at])
q(A.el,[A.d2,A.i4])
r(A.kD,A.oG)
q(A.p1,[A.ck,A.hQ])
r(A.ku,A.d2)
r(A.fe,A.kn)
q(A.pL,[A.oW,A.pp])
q(A.dx,[A.eh,A.kh])
r(A.cI,A.kB)
q(A.nV,[A.kF,A.BG,A.zL,A.px])
r(A.B3,A.kF)
q(A.lI,[A.eJ,A.lu,A.uj])
q(A.eJ,[A.ln,A.mS,A.or])
q(A.aH,[A.pE,A.iw,A.lv,A.mP,A.mO,A.os,A.k3,A.my])
q(A.pE,[A.lo,A.mT])
r(A.zQ,A.oM)
q(A.qs,[A.zM,A.hL,A.oP,A.BN])
r(A.zz,A.zM)
r(A.mN,A.j8)
r(A.B4,A.lG)
r(A.B6,A.B7)
r(A.pP,A.pJ)
r(A.BQ,A.pP)
q(A.bJ,[A.dj,A.j_])
r(A.oZ,A.kN)
r(A.hn,A.i5)
r(A.ps,A.my)
r(A.Bo,A.tK)
r(A.pt,A.Bo)
r(A.lj,A.qF)
r(A.jT,A.xW)
r(A.oX,A.lj)
r(A.lY,A.oX)
r(A.oY,A.vB)
r(A.rE,A.oY)
r(A.nv,A.eA)
r(A.lD,A.lw)
r(A.dI,A.jZ)
q(A.lx,[A.w1,A.xL])
r(A.k_,A.qo)
r(A.nU,A.k_)
r(A.iB,A.a7)
r(A.jE,A.jB)
q(A.cb,[A.lJ,A.lR,A.k5,A.fQ,A.o5,A.ls])
q(A.nu,[A.mh,A.mi,A.mn,A.mj,A.mg,A.mw,A.mq,A.ml,A.mk,A.mt,A.mo,A.ma,A.nQ,A.nc,A.lE,A.mz,A.lH,A.mx,A.ny,A.n2,A.nq,A.lU,A.lT,A.m6,A.mC,A.lk,A.md,A.nE,A.od,A.oe,A.og,A.oi,A.oh,A.of,A.ox,A.oy,A.ow,A.lm,A.ov,A.ot,A.nm,A.lK,A.nz,A.lQ,A.lO,A.nw,A.lh,A.li,A.lS,A.o3,A.o8,A.nZ,A.o_,A.o1,A.o9,A.o2,A.o6])
q(A.ai,[A.mv,A.iR,A.fS,A.mr,A.fR,A.fP,A.ht,A.h7,A.iA,A.mA,A.hj,A.hk,A.h2,A.hg,A.fJ,A.fL,A.fV,A.fy,A.fO,A.hm,A.fH,A.fG,A.hA,A.hH,A.hc,A.fF,A.o4,A.o0,A.o7])
q(A.w3,[A.jm,A.jp,A.jn,A.jq,A.jj,A.jk,A.ji,A.jo,A.jl])
q(A.Au,[A.b6,A.cM,A.e9,A.ni,A.iC,A.dJ,A.de,A.lM,A.cc,A.j0,A.dY,A.e_,A.ew,A.cj,A.cs,A.cY,A.fx,A.h8,A.jz,A.m7,A.jV,A.wf,A.fT,A.mZ,A.dM,A.cF,A.iT,A.e6])
q(A.cT,[A.j9,A.jx,A.is,A.it])
r(A.q9,A.tc)
q(A.dW,[A.eb,A.hC,A.h6,A.iE,A.jF,A.iV,A.dn,A.jN,A.jL,A.jQ,A.hl,A.jX,A.jh,A.iG,A.fK,A.jK])
q(A.hl,[A.k2,A.iW])
r(A.mQ,A.pc)
q(A.bA,[A.lX,A.hi,A.fY,A.ho,A.eE,A.ev,A.fz])
r(A.jH,A.lX)
q(A.di,[A.al,A.cf,A.dG,A.d9])
r(A.fE,A.oT)
r(A.zA,A.Bg)
q(A.bl,[A.ds,A.cW,A.eZ,A.bK,A.cd,A.ce,A.dh,A.e2,A.dL,A.hx,A.da,A.e5])
q(A.fD,[A.nr,A.nb])
r(A.z4,A.qq)
r(A.vo,A.rG)
r(A.mW,A.f4)
q(A.hJ,[A.k7,A.f5])
r(A.pK,A.oD)
r(A.oC,A.pK)
r(A.ue,A.yh)
q(A.ue,[A.wW,A.yR,A.za])
r(A.mp,A.nL)
q(A.hr,[A.hT,A.nN])
r(A.hq,A.nO)
r(A.dm,A.nN)
r(A.hs,A.eC)
r(A.lB,A.be)
q(A.lB,[A.mD,A.dQ,A.hp])
q(A.lA,[A.p7,A.pw])
r(A.pn,A.rn)
r(A.po,A.pn)
r(A.nx,A.po)
r(A.pr,A.pq)
r(A.ch,A.pr)
q(A.bc,[A.f6,A.bg])
r(A.hF,A.y2)
q(A.bg,[A.ko,A.ki,A.hP,A.i7])
r(A.x2,A.xM)
r(A.ro,A.lV)
r(A.dF,A.hh)
r(A.hM,A.x2)
q(A.kQ,[A.p_,A.pu])
r(A.nW,A.hq)
r(A.p9,A.hB)
r(A.cG,A.p9)
s(A.hD,A.om)
s(A.kR,A.M)
s(A.kv,A.M)
s(A.kw,A.iU)
s(A.kx,A.M)
s(A.ky,A.iU)
s(A.d2,A.kb)
s(A.i4,A.pB)
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
s(A.pr,A.X)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ae:"double",b2:"num",j:"String",P:"bool",W:"Null",q:"List",k:"Object",F:"Map",N:"JSObject"},mangledNames:{},types:["~()","~(N)","W()","y<~>()","y<~>(bQ)","y<W>(bQ)","W(k,aL)","j(j)","h7(~)","~(i)","i()","~(q<i>)","V<j,@>(@,@)","P(j)","~(k,aL)","P(k?)","0&()","~(k?)","W(N)","i(bv,i)","~(~())","W(k)","y<b_>()","y<W>()","P(@)","P(bq)","j(@)","y<~>(kq)","W(@)","~(@)","~(dr)","P(c3)","W(~)","y<k?>(oE,hI)","~(k?,k?)","~(j,j)","N()","V<j,k?>(@,@)","~(a5)","~(dk,i,i,i)","P(bx)","@(@)","k?(k?)","k?(F<j,k?>)","P(k?,k?)","y<W>(rH)","y<~>(~)","i(k?)","i(bv)","P()","i(@,@)","~(j,k?)","bq()","P(dP)","y<q<j>>()","j(F<j,k?>)","y<@>()","W(k?)","P(b5)","y<i>()","i(cQ)","ae(i)","i(be,i,i,i)","i(be,i)","y<cQ>(j)","i(bv,i,i,bB)","j(eR)","~(j,@)","~(dk,i)","@()","~(@,@)","~(k[aL?])","@(j)","y<bu<~>>()","~(~)","y<f4>()","y<F<j,k?>>(F<j,k?>)","y<q<cV>>()","fG(bp?)","fS(q<bq>)","fR(i)","fP(i)","ht(P)","h2(q<j>)","y<cy>()","hg(cy)","P(j,j)","hm(q<cV>)","i(j)","hA(~)","P(i_)","~(F<j,k?>?)","~(q<F<j,k?>>)","W(j,j[k?])","ad<q<i>>()","~(dZ<q<i>>)","~(f1)","~(q<bp>)","F<j,k?>(ch)","~(i,@)","k?(y3)","f9<@,@>(bL<@>)","j(j,j)","fZ()","y<bq>(bQ)","i(i,i)","i(i)","i(i,cP)","P(cP)","j(cP)","~(q<cu>)","y<ad<q<i>>>()","j?(F<j,k?>)","V<j,dN>(j,hu)","i(c3,c3)","cU(@)","y<aR?>(jf)","y<~>?()","P(dY)","y<q<j>>(F<j,k?>)","w<@>?()","j(cw)","j()","P(cw)","b5()","dP()","fU()","eK()","c3()","~(jD)","~(@,aL)","y<F<j,k?>?>(j)","P(i)","j(i,i)","y<e7>(j)","bp()","i(e7)","~(cr)","aF(i)","y<bd>(bd)","bd(bd)","bd(k)","W(bd)","y<W>(~)","~(j)","aR(aR?)","aR/(k?)","y<k?>(k?)","F<j,k?>(q<k?>)","k?(aR?)","y<i>(bQ)","0&(j,i?)","P(cM)","j(i[i])","cX()","cx()","eV()","P(e9)","j(cs)","P(cs)","~(j,j?)","y<@>(bQ)","q<F<j,k?>>(cy)","y<P>(j)","y<~>(j)","q<eX>(k?)","P(c9<k?>)","P(b6)","q<cT>(k?)","~(cb)","F<k?,k?>(j)","q<k?>(j)","bp(F<j,k?>)","P(+(i,j))","j(j?)","j?()","i(cH)","i(+(j,k),+(j,k))","k(cH)","k(bx)","i(bx,bx)","q<cH>(V<k,q<bx>>)","dm()","j(k?)","~(i,j,i)","~(DY,q<DZ>)","W(bZ,bZ)","~(R,aw,R,~())","~(bB,i)","bv?(be,i,i,i,i)","i(be,i,i)","k?(~)","i(be?,i,i)","i(+(j,k?),+(j,k?))","~(e4)","W(~())","i(bv,bB)","y<F<j,k?>?>()","i(bv,i,i)","i(i())","~(~(i,j,i),i,i,i,bB)","hj(F<j,k?>?)","y<q<F<j,k?>?>>()","i(dk,i,i,i,i)","i(i(i),i)","i(E1,i)","i(E1,i,i)","hk(q<F<j,k?>?>)","@(@,j)","N(z<k?>)","y<q<k?>>()","W(@,aL)","N(N?)","~(ex)","y<~>(i,cZ)","y<~>(i)","cZ()","y<N>(j)","W(db)","y<W>(N)","N(k)","W(k?,aL)","j?(k?)","~(eC)","N(N)","y<N>()","y<b2?>()","y<j>()","y<bu<cC>>()","~(cC)","P(hO)","hc(i)","y<eD>()","0&(k?,aL)","~(dZ<N>)","fF(i)","~(R?,aw?,R,k,aL)","0^(R?,aw?,R,0^())<k?>","0^(R?,aw?,R,0^(1^),1^)<k?,k?>","0^(R?,aw?,R,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(R,aw,R,0^())<k?>","0^(1^)(R,aw,R,0^(1^))<k?,k?>","0^(1^,2^)(R,aw,R,0^(1^,2^))<k?,k?,k?>","ar?(R,aw,R,k,aL?)","~(R?,aw?,R,~())","dr(R,aw,R,aF,~())","dr(R,aw,R,aF,~(dr))","~(R,aw,R,j)","R(R?,aw?,R,k8?,F<k?,k?>?)","0^(0^,0^)<b2>","fH(q<bp>)","fJ(i)","fL(q<k?>)","fV(q<j>)","fy(b2?)","fO(j)","bq(F<j,k?>)","aI()","P(bA?)","q<k?>()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a_&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.kz&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.kA&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hZ&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.pl&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ek&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fg&&A.I9(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.pm&&A.I9(a,b.a)}}
A.M7(v.typeUniverse,JSON.parse('{"bZ":"dU","nh":"dU","ea":"dU","Pz":"h4","z":{"q":["1"],"aJ":[],"L":["1"],"N":[],"o":["1"],"bj":["1"]},"mK":{"P":[],"am":[]},"j5":{"W":[],"am":[]},"aJ":{"N":[]},"dU":{"aJ":[],"N":[]},"mI":{"jP":[]},"uh":{"z":["1"],"q":["1"],"aJ":[],"L":["1"],"N":[],"o":["1"],"bj":["1"]},"eM":{"ae":[],"b2":[],"ay":["b2"]},"j4":{"ae":[],"i":[],"b2":[],"ay":["b2"],"am":[]},"mL":{"ae":[],"b2":[],"ay":["b2"],"am":[]},"dS":{"j":[],"ay":["j"],"bj":["@"],"am":[]},"ef":{"o":["2"]},"ey":{"ef":["1","2"],"o":["2"],"o.E":"2"},"kj":{"ey":["1","2"],"ef":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"kg":{"M":["2"],"q":["2"],"ef":["1","2"],"L":["2"],"o":["2"]},"bW":{"kg":["1","2"],"M":["2"],"q":["2"],"ef":["1","2"],"L":["2"],"o":["2"],"M.E":"2","o.E":"2"},"ez":{"X":["3","4"],"F":["3","4"],"X.V":"4","X.K":"3"},"dT":{"ag":[]},"ns":{"ag":[]},"ct":{"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"L":{"o":["1"]},"a0":{"L":["1"],"o":["1"]},"cD":{"a0":["1"],"L":["1"],"o":["1"],"a0.E":"1","o.E":"1"},"cv":{"o":["2"],"o.E":"2"},"eH":{"cv":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"Y":{"a0":["2"],"L":["2"],"o":["2"],"a0.E":"2","o.E":"2"},"aq":{"o":["1"],"o.E":"1"},"iQ":{"o":["2"],"o.E":"2"},"f2":{"o":["1"],"o.E":"1"},"iM":{"f2":["1"],"L":["1"],"o":["1"],"o.E":"1"},"dl":{"o":["1"],"o.E":"1"},"fM":{"dl":["1"],"L":["1"],"o":["1"],"o.E":"1"},"eI":{"L":["1"],"o":["1"],"o.E":"1"},"ed":{"o":["1"],"o.E":"1"},"dc":{"o":["+(i,1)"],"o.E":"+(i,1)"},"eG":{"dc":["1"],"L":["+(i,1)"],"o":["+(i,1)"],"o.E":"+(i,1)"},"hD":{"M":["1"],"q":["1"],"L":["1"],"o":["1"]},"bE":{"a0":["1"],"L":["1"],"o":["1"],"a0.E":"1","o.E":"1"},"iI":{"d_":["1","2"],"F":["1","2"]},"fI":{"F":["1","2"]},"aE":{"fI":["1","2"],"F":["1","2"]},"fd":{"o":["1"],"o.E":"1"},"iY":{"fI":["1","2"],"F":["1","2"]},"iJ":{"cA":["1"],"f_":["1"],"L":["1"],"o":["1"]},"dK":{"cA":["1"],"f_":["1"],"L":["1"],"o":["1"]},"jy":{"dt":[],"ag":[]},"mM":{"ag":[]},"ol":{"ag":[]},"na":{"H":[]},"kC":{"aL":[]},"nB":{"ag":[]},"bM":{"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"S":{"L":["1"],"o":["1"],"o.E":"1"},"ao":{"L":["1"],"o":["1"],"o.E":"1"},"aK":{"L":["V<1,2>"],"o":["V<1,2>"],"o.E":"V<1,2>"},"j7":{"bM":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"j6":{"bM":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"hX":{"nt":[],"eR":[]},"oH":{"o":["nt"],"o.E":"nt"},"hv":{"eR":[]},"py":{"o":["eR"],"o.E":"eR"},"h3":{"aJ":[],"N":[],"ex":[],"am":[]},"h4":{"aJ":[],"N":[],"ex":[],"am":[]},"jt":{"aJ":[],"N":[]},"pG":{"ex":[]},"js":{"aJ":[],"Dt":[],"N":[],"am":[]},"h5":{"c_":["1"],"aJ":[],"N":[],"bj":["1"]},"e0":{"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bj":["ae"],"o":["ae"]},"c1":{"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"]},"n3":{"e0":[],"tw":[],"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bj":["ae"],"o":["ae"],"am":[],"M.E":"ae"},"n4":{"e0":[],"tx":[],"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bj":["ae"],"o":["ae"],"am":[],"M.E":"ae"},"n5":{"c1":[],"ub":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"],"am":[],"M.E":"i"},"n6":{"c1":[],"uc":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"],"am":[],"M.E":"i"},"n7":{"c1":[],"ud":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"],"am":[],"M.E":"i"},"ju":{"c1":[],"yM":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"],"am":[],"M.E":"i"},"jv":{"c1":[],"yN":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"],"am":[],"M.E":"i"},"jw":{"c1":[],"yO":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"],"am":[],"M.E":"i"},"eT":{"c1":[],"cZ":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bj":["i"],"o":["i"],"am":[],"M.E":"i"},"p2":{"ag":[]},"kH":{"dt":[],"ag":[]},"ar":{"ag":[]},"w":{"y":["1"]},"dZ":{"bL":["1"]},"kG":{"dr":[]},"k9":{"iF":["1"]},"i3":{"o":["1"],"o.E":"1"},"aX":{"bf":["1"],"i2":["1"],"ad":["1"],"ad.T":"1"},"f7":{"eg":["1"],"b9":["1"],"bu":["1"],"b9.T":"1"},"kf":{"bL":["1"]},"ka":{"kf":["1"],"bL":["1"]},"ob":{"H":[]},"jC":{"ag":[]},"f8":{"iF":["1"]},"aG":{"f8":["1"],"iF":["1"]},"at":{"f8":["1"],"iF":["1"]},"jZ":{"ad":["1"]},"el":{"bL":["1"]},"d2":{"kb":["1"],"el":["1"],"bL":["1"]},"i4":{"el":["1"],"bL":["1"]},"bf":{"i2":["1"],"ad":["1"],"ad.T":"1"},"eg":{"b9":["1"],"bu":["1"],"b9.T":"1"},"kD":{"oG":["1"]},"b9":{"bu":["1"],"b9.T":"1"},"i2":{"ad":["1"]},"hR":{"bu":["1"]},"kk":{"ad":["1"],"ad.T":"1"},"dA":{"ad":["1"],"ad.T":"1"},"ku":{"d2":["1"],"kb":["1"],"el":["1"],"dZ":["1"],"bL":["1"]},"kn":{"ad":["2"]},"hU":{"b9":["2"],"bu":["2"],"b9.T":"2"},"fe":{"kn":["1","2"],"ad":["2"],"ad.T":"2"},"kl":{"bL":["1"]},"i0":{"b9":["2"],"bu":["2"],"b9.T":"2"},"ke":{"ad":["2"],"ad.T":"2"},"pL":{"R":[]},"oW":{"R":[]},"pp":{"R":[]},"i8":{"aw":[]},"dx":{"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"eh":{"dx":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"kh":{"dx":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"fc":{"L":["1"],"o":["1"],"o.E":"1"},"ks":{"bM":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"cI":{"cA":["1"],"f_":["1"],"L":["1"],"o":["1"]},"eO":{"o":["1"],"o.E":"1"},"M":{"q":["1"],"L":["1"],"o":["1"]},"X":{"F":["1","2"]},"kt":{"L":["2"],"o":["2"],"o.E":"2"},"je":{"F":["1","2"]},"d_":{"F":["1","2"]},"ja":{"a0":["1"],"L":["1"],"o":["1"],"a0.E":"1","o.E":"1"},"cA":{"f_":["1"],"L":["1"],"o":["1"]},"kB":{"cA":["1"],"f_":["1"],"L":["1"],"o":["1"]},"f9":{"bL":["1"]},"pa":{"X":["j","@"],"F":["j","@"],"X.V":"@","X.K":"j"},"pb":{"a0":["j"],"L":["j"],"o":["j"],"a0.E":"j","o.E":"j"},"ln":{"eJ":[]},"pE":{"aH":["j","q<i>"]},"lo":{"aH":["j","q<i>"],"aH.T":"q<i>"},"iw":{"aH":["q<i>","j"],"aH.T":"j"},"lv":{"aH":["j","q<i>"],"aH.T":"q<i>"},"j8":{"ag":[]},"mN":{"ag":[]},"mP":{"aH":["k?","j"],"aH.T":"j"},"mO":{"aH":["j","k?"],"aH.T":"k?"},"mS":{"eJ":[]},"mT":{"aH":["j","q<i>"],"aH.T":"q<i>"},"or":{"eJ":[]},"os":{"aH":["j","q<i>"],"aH.T":"q<i>"},"k3":{"aH":["q<i>","j"],"aH.T":"j"},"Ff":{"ay":["Ff"]},"aI":{"ay":["aI"]},"ae":{"b2":[],"ay":["b2"]},"aF":{"ay":["aF"]},"i":{"b2":[],"ay":["b2"]},"q":{"L":["1"],"o":["1"]},"b2":{"ay":["b2"]},"nt":{"eR":[]},"f_":{"L":["1"],"o":["1"]},"j":{"ay":["j"]},"aQ":{"ay":["Ff"]},"lp":{"ag":[]},"dt":{"ag":[]},"bJ":{"ag":[]},"dj":{"ag":[]},"j_":{"dj":[],"ag":[]},"d0":{"ag":[]},"ok":{"d0":[],"ag":[]},"bt":{"ag":[]},"lL":{"ag":[]},"nd":{"ag":[]},"jW":{"ag":[]},"p3":{"H":[]},"br":{"H":[]},"mG":{"d0":[],"H":[],"ag":[]},"pz":{"aL":[]},"jO":{"o":["i"],"o.E":"i"},"kN":{"oo":[]},"cm":{"oo":[]},"oZ":{"oo":[]},"n9":{"H":[]},"ud":{"q":["i"],"L":["i"],"o":["i"]},"cZ":{"q":["i"],"L":["i"],"o":["i"]},"yO":{"q":["i"],"L":["i"],"o":["i"]},"ub":{"q":["i"],"L":["i"],"o":["i"]},"yM":{"q":["i"],"L":["i"],"o":["i"]},"uc":{"q":["i"],"L":["i"],"o":["i"]},"yN":{"q":["i"],"L":["i"],"o":["i"]},"tw":{"q":["ae"],"L":["ae"],"o":["ae"]},"tx":{"q":["ae"],"L":["ae"],"o":["ae"]},"a7":{"F":["2","3"]},"hn":{"i5":["1","f_<1>"],"i5.E":"1"},"my":{"aH":["q<i>","cu"]},"ps":{"aH":["q<i>","cu"],"aH.T":"cu"},"jS":{"H":[]},"nF":{"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"nv":{"H":[]},"lw":{"Du":[]},"lD":{"Du":[]},"dI":{"ad":["q<i>"],"ad.T":"q<i>"},"eA":{"H":[]},"nU":{"k_":[]},"iB":{"a7":["j","j","1"],"F":["j","1"],"a7.V":"1","a7.K":"j","a7.C":"j"},"jB":{"nX":[]},"jE":{"nX":[]},"dO":{"H":[]},"mv":{"ai":[]},"iR":{"ai":[]},"fS":{"ai":[]},"mr":{"ai":[]},"fR":{"ai":[]},"fP":{"ai":[]},"ht":{"ai":[]},"h7":{"ai":[]},"iA":{"ai":[]},"mA":{"ai":[]},"hj":{"ai":[]},"hk":{"ai":[]},"h2":{"ai":[]},"hg":{"ai":[]},"fJ":{"ai":[]},"fL":{"ai":[]},"fV":{"ai":[]},"fy":{"ai":[]},"fO":{"ai":[]},"hm":{"ai":[]},"fH":{"ai":[]},"fG":{"ai":[]},"hA":{"ai":[]},"hH":{"ai":[]},"hc":{"ai":[]},"fF":{"ai":[]},"o4":{"ai":[]},"o0":{"ai":[]},"o7":{"ai":[]},"jG":{"H":[]},"lJ":{"cb":[]},"lR":{"cb":[]},"k5":{"cb":[]},"fQ":{"cb":[]},"j9":{"cT":[]},"jx":{"cT":[]},"is":{"cT":[]},"it":{"cT":[]},"o5":{"cb":[]},"ls":{"cb":[]},"f3":{"H":[]},"fh":{"H":[]},"iL":{"rH":[]},"dW":{"H":[]},"eb":{"H":[]},"hC":{"H":[]},"h6":{"H":[]},"iE":{"H":[]},"jF":{"H":[]},"iV":{"H":[]},"dn":{"H":[]},"jN":{"H":[]},"jL":{"H":[]},"jQ":{"H":[]},"hl":{"H":[]},"k2":{"H":[]},"iW":{"H":[]},"jX":{"H":[]},"jh":{"H":[]},"iG":{"H":[]},"fK":{"H":[]},"jK":{"H":[]},"fB":{"H":[]},"ix":{"H":[]},"jH":{"bA":[]},"al":{"di":[]},"cf":{"di":[]},"dG":{"di":[]},"d9":{"di":[]},"hK":{"H":[]},"df":{"H":[]},"hi":{"bA":[]},"fY":{"bA":[]},"ho":{"bA":[]},"eE":{"bA":[]},"ev":{"bA":[]},"fz":{"bA":[]},"lX":{"bA":[]},"bl":{"H":[]},"ds":{"H":[]},"cW":{"H":[]},"eZ":{"H":[]},"bK":{"H":[]},"cd":{"H":[]},"ce":{"H":[]},"dh":{"H":[]},"e2":{"H":[]},"dL":{"H":[]},"hx":{"H":[]},"da":{"H":[]},"e5":{"H":[]},"hb":{"nX":[]},"ph":{"FU":[]},"mW":{"f4":[]},"oV":{"oE":[],"Gk":[]},"k7":{"hJ":[]},"f5":{"hJ":[]},"nf":{"H":[]},"mp":{"cB":[],"ay":["cB"]},"hT":{"dm":[],"ay":["nM"]},"cB":{"ay":["cB"]},"nL":{"cB":[],"ay":["cB"]},"nM":{"ay":["nM"]},"nN":{"ay":["nM"]},"nO":{"H":[]},"hq":{"br":[],"H":[]},"hr":{"ay":["nM"]},"dm":{"ay":["nM"]},"ci":{"H":[]},"y3":{"q":["k?"],"L":["k?"],"o":["k?"]},"ou":{"M":["k?"],"y3":[],"q":["k?"],"L":["k?"],"o":["k?"],"M.E":"k?"},"hs":{"eC":[]},"mD":{"be":[]},"p7":{"k4":[],"bv":[]},"ch":{"X":["j","@"],"F":["j","@"],"X.V":"@","X.K":"j"},"nx":{"M":["ch"],"q":["ch"],"L":["ch"],"o":["ch"],"M.E":"ch"},"dv":{"H":[]},"lB":{"be":[]},"lA":{"k4":[],"bv":[]},"f6":{"bc":["f6"],"bc.E":"f6"},"dw":{"DZ":[]},"ec":{"DY":[]},"hG":{"M":["dw"],"q":["dw"],"L":["dw"],"o":["dw"],"M.E":"dw"},"iv":{"ad":["1"],"ad.T":"1"},"dQ":{"be":[]},"bg":{"bc":["bg"]},"p8":{"k4":[],"bv":[]},"ko":{"bg":[],"bc":["bg"],"bc.E":"bg"},"ki":{"bg":[],"bc":["bg"],"bc.E":"bg"},"hP":{"bg":[],"bc":["bg"],"bc.E":"bg"},"i7":{"bg":[],"bc":["bg"],"bc.E":"bg"},"hp":{"be":[]},"pw":{"k4":[],"bv":[]},"iD":{"H":[]},"eF":{"M":["k?"],"q":["k?"],"L":["k?"],"o":["k?"],"M.E":"k?"},"hh":{"H":[]},"dF":{"H":[]},"hM":{"Fm":[]},"p_":{"kQ":["N"]},"pu":{"kQ":["N"]},"nW":{"br":[],"H":[]},"cG":{"hB":["i"],"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"hB":{"M":["1"],"q":["1"],"L":["1"],"o":["1"]},"p9":{"hB":["i"],"M":["i"],"q":["i"],"L":["i"],"o":["i"]},"hS":{"ad":["1"],"ad.T":"1"},"km":{"bu":["1"]}}'))
A.M6(v.typeUniverse,JSON.parse('{"iU":1,"om":1,"hD":1,"kR":2,"iJ":1,"h5":1,"bL":1,"jZ":1,"pB":1,"p1":1,"pF":2,"je":2,"kB":1,"kM":2,"lG":1,"lI":2,"kF":1,"n8":1,"on":2,"nu":1,"fD":1,"Jl":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aa
return{fM:s("@<@>"),ie:s("Jl<k?>"),ko:s("ev"),bG:s("ew"),om:s("iv<z<k?>>"),hw:s("cr"),lo:s("ex"),fW:s("Dt"),jA:s("iA"),fo:s("iB<j>"),iv:s("a5"),eg:s("Fm"),dF:s("Du()"),E:s("ct"),bU:s("c9<k?>"),fw:s("eC"),bP:s("ay<@>"),p6:s("eD"),br:s("iF<N>"),n8:s("bp"),pb:s("bA"),x:s("aE<j,k?>"),M:s("dK<j>"),d_:s("eE"),lp:s("m1"),O:s("L<@>"),C:s("ag"),fq:s("cb"),mA:s("H"),eZ:s("me"),d9:s("b5"),oX:s("mm"),A:s("bq"),k4:s("iS"),f6:s("cP"),pk:s("tw"),kI:s("tx"),Y:s("br"),gY:s("Pv"),mi:s("F<j,k?>/(F<j,k?>)"),nW:s("y<N>"),fB:s("y<q<j>>"),b3:s("y<F<j,k?>>"),fr:s("y<aR>"),mj:s("y<W>"),g7:s("y<@>"),fP:s("y<db?>"),d3:s("y<F<j,k?>?>"),op:s("y<aR?>"),n1:s("y<k?>(oE,hI)"),jN:s("y<hF?>"),co:s("dN"),w:s("cQ"),cF:s("dQ"),m6:s("ub"),bW:s("uc"),jx:s("ud"),nZ:s("j3<@>"),e7:s("o<@>"),gi:s("z<a5>"),aw:s("z<c9<@>>"),oq:s("z<c9<k?>>"),oS:s("z<lN>"),i5:s("z<cu>"),mK:s("z<b5>"),kB:s("z<ms>"),iw:s("z<y<~>>"),mr:s("z<dP>"),kG:s("z<N>"),bi:s("z<q<F<j,k?>>>"),h2:s("z<q<k>>"),ae:s("z<q<eX>>"),dO:s("z<q<k?>>"),ic:s("z<F<j,k>>"),d:s("z<F<j,k?>>"),e8:s("z<n1>"),i7:s("z<eU>"),hf:s("z<k>"),ox:s("z<eV>"),fi:s("z<cw>"),my:s("z<cx>"),k:s("z<di>"),eK:s("z<cT>"),k1:s("z<hd>"),g2:s("z<he>"),bo:s("z<jJ>"),cM:s("z<eX>"),gc:s("z<np>"),eb:s("z<e4>"),fU:s("z<+controller,sync(dZ<cC>,P)>"),lw:s("z<+controller,sync(dZ<~>,P)>"),kC:s("z<+(e6,j)>"),jO:s("z<+(j,F<j,k?>)>"),l5:s("z<+(j,k)>"),fj:s("z<+(j,b5?)>"),iE:s("z<+(j,k?)>"),kW:s("z<+(i,j,F<j,k?>)>"),aY:s("z<+(hN,k?,k?,aL?)>"),g1:s("z<cU>"),cP:s("z<nD>"),kj:s("z<cV>"),lE:s("z<hs>"),c0:s("z<c3>"),dw:s("z<bu<@>>"),s:s("z<j>"),en:s("z<hw>"),bs:s("z<cZ>"),fC:s("z<b8>"),m2:s("z<Gk>"),az:s("z<hM>"),i4:s("z<hN>"),fV:s("z<hO>"),pg:s("z<bx>"),dg:s("z<cH>"),p8:s("z<pg>"),mc:s("z<i_>"),gy:s("z<i1>"),gR:s("z<pH>"),gk:s("z<ae>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<ar?>"),eU:s("z<F<j,k?>?>"),c:s("z<k?>"),mf:s("z<j?>"),iy:s("bj<@>"),T:s("j5"),m:s("N"),bJ:s("bB"),g:s("bZ"),dX:s("c_<@>"),aq:s("aJ"),fZ:s("mQ"),kk:s("eO<f6>"),p3:s("eO<bg>"),hI:s("eP<@>"),ba:s("q<bp>"),ck:s("q<bq>"),ip:s("q<N>"),ew:s("q<F<j,k>>"),J:s("q<F<j,k?>>"),eT:s("q<eU>"),hg:s("q<eV>"),a6:s("q<cx>"),jX:s("q<he>"),kR:s("q<cU>"),fE:s("q<cV>"),i:s("q<j>"),bR:s("q<hw>"),j:s("q<@>"),L:s("q<i>"),oz:s("q<F<j,k?>?>"),kS:s("q<k?>"),jD:s("jb"),ia:s("V<j,dN>"),ag:s("V<j,j>"),I:s("V<j,@>"),eB:s("V<j,k?>"),a3:s("jd<@,@>"),cy:s("F<j,cX>"),dV:s("F<j,i>"),f:s("F<@,@>"),G:s("F<j,k?>"),d2:s("F<k?,k?>"),lJ:s("Y<cs,j>"),iZ:s("Y<j,@>"),r:s("aR"),a:s("h3"),dQ:s("e0"),aj:s("c1"),Z:s("eT"),P:s("W"),K:s("k"),k5:s("cw"),dZ:s("cx"),i0:s("cy"),jS:s("di"),oj:s("hb"),ot:s("nn"),gq:s("hd"),e:s("b_"),b0:s("dj"),lZ:s("PB"),oZ:s("e4"),aK:s("+()"),ja:s("+(N,iH)"),hP:s("+(F<j,cX>,F<j,F<j,k?>>)"),cU:s("+(e6,j)"),mk:s("+(P,N)"),kO:s("+basicSupport,supportsReadWriteUnsafe(P,P)"),mt:s("+(N?,N)"),po:s("+(k?,i)"),fe:s("+(k?,k?)"),nw:s("+(F<j,k?>?,cX?,cx?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("nt"),h:s("cU"),V:s("ai"),hF:s("bE<j>"),cu:s("hn<@>"),aJ:s("f_<j>"),g_:s("hp"),hq:s("cB"),ol:s("dm"),gE:s("nP"),l:s("aL"),nv:s("nR"),h3:s("hu"),ha:s("bu<cC>"),dz:s("bu<@>"),ey:s("bu<~>"),bv:s("nT"),v:s("ad<q<i>>"),lI:s("e7"),hL:s("k_"),N:s("j"),f_:s("hw"),k6:s("k0"),o8:s("nX"),n6:s("cj"),fD:s("bd"),o:s("cX"),kf:s("f1"),hU:s("dr"),q:s("oc"),dH:s("am"),do:s("dt"),hM:s("yM"),mC:s("yN"),oR:s("cG"),nn:s("yO"),p:s("cZ"),cx:s("ea"),ph:s("d_<j,j>"),eo:s("d0"),jJ:s("oo"),e6:s("be"),j2:s("k4"),n:s("hF"),fA:s("b8"),gx:s("aq<cM>"),mz:s("aq<b6>"),mE:s("aq<e9>"),B:s("ed<j>"),u:s("f4"),bp:s("f5"),be:s("oE"),ec:s("hJ"),iq:s("aG<cZ>"),jk:s("aG<@>"),ho:s("aG<i>"),bF:s("aG<k?>"),Q:s("aG<~>"),oW:s("f9<@,@>"),R:s("fa<N>"),d4:s("hS<N>"),nI:s("w<db>"),a7:s("w<N>"),af:s("w<F<j,k?>>"),hl:s("w<0&>"),os:s("w<j>"),jz:s("w<cZ>"),g5:s("w<P>"),_:s("w<@>"),hy:s("w<i>"),ji:s("w<F<j,k?>?>"),ny:s("w<k?>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("bx"),mp:s("eh<k?,k?>"),mB:s("hW"),k8:s("dA<N>"),fb:s("dA<q<i>>"),mI:s("pv<cu>"),jy:s("em<cC,~()>"),ah:s("em<~,P()>"),lU:s("em<~,~()>"),hT:s("cn<N>"),lj:s("cn<q<i>>"),aP:s("at<db>"),h1:s("at<N>"),ex:s("at<P>"),F:s("at<~>"),g8:s("pC"),y:s("P"),W:s("ae"),z:s("@"),mq:s("@(k)"),ng:s("@(k,aL)"),S:s("i"),ma:s("bp?"),gK:s("y<W>?"),fm:s("db?"),U:s("N?"),bE:s("q<c9<@>>?"),lH:s("q<@>?"),b:s("F<j,k?>?"),nh:s("aR?"),X:s("k?"),ad:s("FU?"),dY:s("cx?"),lY:s("jI?"),jB:s("cU?"),jv:s("j?"),f8:s("cX?"),a_:s("cG?"),he:s("hF?"),dd:s("bx?"),o9:s("P?"),dA:s("ae?"),aV:s("i?"),jh:s("b2?"),cZ:s("b2"),H:s("~"),cj:s("~()"),i6:s("~(k)"),b9:s("~(k,aL)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cx=J.mH.prototype
B.b=J.z.prototype
B.c=J.j4.prototype
B.w=J.eM.prototype
B.a=J.dS.prototype
B.cy=J.bZ.prototype
B.cz=J.aJ.prototype
B.aE=A.js.prototype
B.dl=A.ju.prototype
B.y=A.jv.prototype
B.f=A.eT.prototype
B.bh=J.nh.prototype
B.aQ=J.ea.prototype
B.as=new A.dF("Operation was cancelled")
B.a8=new A.fx(0,"visible")
B.aT=new A.fx(1,"hidden")
B.bB=new A.ll(1)
B.eB=new A.ll(-1)
B.a9=new A.ew(0,"applied")
B.aa=new A.ew(1,"quarantined")
B.bC=new A.ew(2,"conflict")
B.ab=new A.ew(3,"skipped")
B.bD=new A.lo(127)
B.P=new A.cs(0,"changed")
B.at=new A.cs(1,"deleted")
B.bG=new A.iw(!1)
B.ac=new A.lu(B.bG)
B.bH=new A.iw(!0)
B.bF=new A.lu(B.bH)
B.cc=new A.kk(A.aa("kk<q<i>>"))
B.bI=new A.dI(B.cc)
B.bJ=new A.j1(A.OW(),A.aa("j1<i>"))
B.bK=new A.fz()
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
B.Q=new A.m9()
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
B.bZ=new A.fY()
B.l=new A.h7()
B.c_=new A.nd()
B.aZ=new A.wJ()
B.c0=new A.wU()
B.c1=new A.nm()
B.R=new A.hi()
B.d=new A.xX()
B.c2=new A.ho()
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
B.cb=new A.zA()
B.t=new A.Aj()
B.ae=new A.At()
B.au=new A.B0()
B.b_=new A.fh()
B.i=new A.pp()
B.m=new A.ps()
B.cd=new A.BD()
B.S=new A.pz()
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
B.T=new A.lM(4,"replace")
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
B.U=new A.aF(3e7)
B.ai=new A.aF(3e8)
B.aj=new A.aF(5e5)
B.cl=new A.aF(5e6)
B.eC=new A.aF(6048e8)
B.cm=new A.aF(7776e9)
B.eD=new A.aF(864e8)
B.ay=new A.cc(0,"text")
B.V=new A.cc(1,"int")
B.W=new A.cc(2,"real")
B.B=new A.cc(3,"bool")
B.X=new A.cc(4,"date")
B.J=new A.cc(5,"enumValue")
B.Y=new A.cc(6,"json")
B.Z=new A.cc(7,"jsonList")
B.K=new A.cc(8,"ref")
B.cn=new A.iS(!1)
B.az=new A.dM("x",1,"opfsExternalLocks")
B.b3=new A.dM("y",2,"opfsExternalLocksWorkaround")
B.b4=new A.fT("/database",0,"database")
B.b5=new A.fT("/database-journal",1,"journal")
B.ct=new A.br("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cu=new A.br("fieldCipher envelope must be a map.",null,null)
B.aB=new A.aE(B.E,[],A.aa("aE<j,j>"))
B.cv=new A.eK(B.aB)
B.b6=new A.j0(0,"live")
B.cA=new A.mO(null)
B.cB=new A.mP(null)
B.cC=new A.de(0,"textExpected")
B.cD=new A.de(1,"intExpected")
B.b7=new A.de(2,"numberExpected")
B.cE=new A.de(3,"boolExpected")
B.cF=new A.de(4,"jsonExpected")
B.cG=new A.de(5,"jsonListExpected")
B.cH=new A.de(6,"enumValueRejected")
B.cI=new A.mT(255)
B.aA=new A.eP(B.bP,A.aa("eP<j>"))
B.cJ=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b8=s([13,10],t.t)
B.aJ=new A.cF(0,"unknown")
B.aK=new A.cF(1,"integer")
B.aL=new A.cF(2,"bigInt")
B.aM=new A.cF(3,"float")
B.aN=new A.cF(4,"text")
B.aO=new A.cF(5,"blob")
B.aP=new A.cF(6,"$null")
B.bv=new A.cF(7,"boolean")
B.b9=s([B.aJ,B.aK,B.aL,B.aM,B.aN,B.aO,B.aP,B.bv],A.aa("z<cF>"))
B.cK=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.dj=new A.dY(1,"recreate")
B.dk=new A.dY(2,"discardLocal")
B.cL=s([B.aD,B.dj,B.dk],A.aa("z<dY>"))
B.bk=new A.b6(0,"eq")
B.dw=new A.b6(1,"neq")
B.dA=new A.b6(2,"gt")
B.dB=new A.b6(3,"gte")
B.dC=new A.b6(4,"lt")
B.dD=new A.b6(5,"lte")
B.dE=new A.b6(6,"inValues")
B.dF=new A.b6(7,"between")
B.dG=new A.b6(8,"startsWith")
B.dH=new A.b6(9,"endsWith")
B.dx=new A.b6(10,"contains")
B.dy=new A.b6(11,"isNull")
B.dz=new A.b6(12,"isNotNull")
B.cM=s([B.bk,B.dw,B.dA,B.dB,B.dC,B.dD,B.dE,B.dF,B.dG,B.dH,B.dx,B.dy,B.dz],A.aa("z<b6>"))
B.cr=new A.iT(0,"database")
B.cs=new A.iT(1,"journal")
B.ba=s([B.cr,B.cs],A.aa("z<iT>"))
B.bw=new A.fx(2,"purged")
B.cN=s([B.a8,B.aT,B.bw],A.aa("z<fx>"))
B.z=new A.cY(0,"clean")
B.G=new A.cY(1,"dirty")
B.bs=new A.cY(2,"inFlight")
B.a7=new A.cY(3,"conflict")
B.ar=new A.cY(4,"error")
B.dX=new A.cY(5,"quarantine")
B.dY=new A.cY(6,"blocked")
B.cO=s([B.z,B.G,B.bs,B.a7,B.ar,B.dX,B.dY],A.aa("z<cY>"))
B.a_=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
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
B.cV=s([B.ay,B.V,B.W,B.B,B.X,B.J,B.Y,B.Z,B.K],A.aa("z<cc>"))
B.n=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.am=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.a0=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cW=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.h8(0,"upsert")
B.M=new A.h8(1,"archive")
B.a4=new A.h8(2,"restore")
B.cX=s([B.v,B.M,B.a4],A.aa("z<h8>"))
B.d_=s([],A.aa("z<dN>"))
B.bb=s([],t.d)
B.cY=s([],t.my)
B.d0=s([],t.kj)
B.u=s([],t.s)
B.cZ=s([],t.t)
B.an=s([],t.dG)
B.j=s([],t.c)
B.d1=s(["*"],t.s)
B.d2=s([B.b4,B.b5],A.aa("z<fT>"))
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
B.bE=new A.cs(2,"authChanged")
B.bc=s([B.P,B.at,B.bE],A.aa("z<cs>"))
B.d7=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.d8=new A.jb(!0)
B.d9=new A.iY([16,10,24,12,32,14],A.aa("iY<i,i>"))
B.dp={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.x=new A.mS()
B.r=new A.ln()
B.da=new A.aE(B.dp,[B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.o,B.o],A.aa("aE<j,eJ>"))
B.ap=new A.aE(B.E,[],A.aa("aE<j,i>"))
B.k=new A.aE(B.E,[],t.x)
B.bd=new A.aE(B.E,[],A.aa("aE<i,F<j,k?>/(F<j,k?>)>"))
B.aC=new A.aE(B.E,[],A.aa("aE<k?,k?>"))
B.a3={kind:0}
B.dc=new A.aE(B.a3,["setUnionDeletionWins"],t.x)
B.dd=new A.aE(B.a3,["appendOnlyList"],t.x)
B.de=new A.aE(B.a3,["remoteWins"],t.x)
B.df=new A.aE(B.a3,["appendOnlyLines"],t.x)
B.dg=new A.aE(B.a3,["localWins"],t.x)
B.dq={ok:0}
B.dh=new A.aE(B.dq,[!0],A.aa("aE<j,P>"))
B.di=new A.mZ(11,"simpleSuccessResponse",A.aa("mZ<N>"))
B.a1=new A.e_(0,"createOrUpdate")
B.a2=new A.e_(1,"createOrUpdateMerge")
B.be=new A.e_(2,"create")
B.L=new A.e_(3,"update")
B.C=new A.e_(4,"archive")
B.D=new A.e_(5,"restore")
B.eE=new A.wf(2,"readWriteCreate")
B.ds=new A.cw("id",!1)
B.dt=new A.cy(B.bb,null,null,!1,!1)
B.bi=new A.ni(0,"native")
B.aF=new A.ni(1,"web")
B.F=new A.b_(0,1,0,0,0,!1)
B.du=new A.b_(0,0,0,0,1,!1)
B.aq=new A.b_(0,0,0,0,0,!0)
B.a5=new A.b_(0,0,0,0,0,!1)
B.dv=new A.b_(0,0,0,1,0,!1)
B.bj=new A.b_(0,0,1,0,0,!1)
B.a6=new A.b_(1,0,0,0,0,!1)
B.dI=new A.a_("archived",!0)
B.dJ=new A.a_("0",B.j)
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
B.N=new A.cj(0,"closed")
B.dU=new A.cj(1,"opening")
B.bo=new A.cj(2,"offline")
B.aI=new A.cj(3,"authRequired")
B.bp=new A.cj(4,"idle")
B.dV=new A.cj(5,"pulling")
B.dW=new A.cj(6,"pushing")
B.bq=new A.cj(7,"backoff")
B.br=new A.cj(8,"paused")
B.O=new A.bd(B.ap,B.ap,0,0,0,0,!1)
B.dZ=new A.f1(B.N,0,0,0,0,null,null,null)
B.e_=A.b3("lj")
B.e0=A.b3("fz")
B.e1=A.b3("ev")
B.e2=A.b3("ex")
B.e3=A.b3("Dt")
B.e4=A.b3("eE")
B.e5=A.b3("tw")
B.e6=A.b3("tx")
B.e7=A.b3("ub")
B.e8=A.b3("uc")
B.e9=A.b3("ud")
B.ea=A.b3("N")
B.eb=A.b3("fY")
B.ec=A.b3("k")
B.ed=A.b3("hi")
B.ee=A.b3("jT")
B.ef=A.b3("yM")
B.eg=A.b3("yN")
B.eh=A.b3("yO")
B.ei=A.b3("cZ")
B.ej=A.b3("ho")
B.aR=new A.k3(!1)
B.ek=new A.k3(!0)
B.el=new A.dv(14)
B.em=new A.dv(522)
B.en=new A.dv(778)
B.eo=new A.BS(B.i,A.NQ())
B.ep=new A.BT(B.i,A.NR())
B.eq=new A.BU(B.i,A.NS())
B.er=new A.BV(B.i,A.NT())
B.es=new A.pM(B.i,A.NU())
B.et=new A.BW(B.i,A.NV())
B.eu=new A.BX(B.i,A.NW())
B.ev=new A.BY(B.i,A.NX())
B.ew=new A.BZ(B.i,A.NY())
B.ex=new A.C0(B.i,A.O_())
B.ey=new A.C1(B.i,A.O0())
B.ez=new A.C_(B.i,A.NZ())
B.eA=new A.pN(B.i,A.O1())
B.aS=new A.pO(B.i,B.aC)})();(function staticFields(){$.B2=null
$.fl=A.l([],t.hf)
$.Nk=null
$.FX=null
$.x1=0
$.nk=A.Na()
$.Fk=null
$.Fj=null
$.I2=null
$.HM=null
$.Ic=null
$.CO=null
$.D2=null
$.ES=null
$.Bf=A.l([],A.aa("z<q<k>?>"))
$.ic=null
$.kT=null
$.kU=null
$.Ey=!1
$.B=B.i
$.Bj=null
$.Gs=null
$.Gt=null
$.Gu=null
$.Gv=null
$.Ed=A.zV("_lastQuoRemDigits")
$.Ee=A.zV("_lastQuoRemUsed")
$.kd=A.zV("_lastRemUsed")
$.Ef=A.zV("_lastRem_nsh")
$.Gg=""
$.Gh=null
$.hf=function(){var s=t.N
return A.t(s,s)}()
$.H9=null
$.Cc=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Pr","Iu",()=>A.CU("_$dart_dartClosure"))
s($,"Pq","ft",()=>A.CU("_$dart_dartClosure_dartJSInterop"))
s($,"Q4","q3",()=>A.w8(0))
s($,"Qs","J3",()=>B.i.b1(new A.D5(),A.aa("y<~>")))
s($,"Qm","J0",()=>A.l([new J.mI()],A.aa("z<jP>")))
s($,"PJ","Iy",()=>A.du(A.yL({
toString:function(){return"$receiver$"}})))
s($,"PK","Iz",()=>A.du(A.yL({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"PL","IA",()=>A.du(A.yL(null)))
s($,"PM","IB",()=>A.du(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"PP","IE",()=>A.du(A.yL(void 0)))
s($,"PQ","IF",()=>A.du(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"PO","ID",()=>A.du(A.Gd(null)))
s($,"PN","IC",()=>A.du(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"PS","IH",()=>A.du(A.Gd(void 0)))
s($,"PR","IG",()=>A.du(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"PV","F2",()=>A.Ln())
s($,"Px","eu",()=>$.J3())
s($,"Pw","Iv",()=>A.LG(!1,B.i,t.y))
s($,"Qa","IR",()=>A.w8(4096))
s($,"Q8","IP",()=>new A.BP().$0())
s($,"Q9","IQ",()=>new A.BO().$0())
s($,"PX","F3",()=>A.Kv(A.ba(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"PW","II",()=>A.w8(0))
s($,"Q3","cq",()=>A.kc(0))
s($,"Q1","fu",()=>A.kc(1))
s($,"Q2","IL",()=>A.kc(2))
s($,"Q_","F5",()=>$.fu().bS(0))
s($,"PY","F4",()=>A.kc(1e4))
r($,"Q0","IK",()=>A.ah("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"PZ","IJ",()=>A.w8(8))
s($,"Q5","IM",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Q6","IN",()=>A.ah("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Q7","IO",()=>typeof URLSearchParams=="function")
s($,"Qd","fv",()=>A.l5(B.ec))
s($,"PC","la",()=>{A.KG()
return $.x1})
s($,"Qe","IU",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"PA","Do",()=>{var q=new A.B1(A.Ku(8))
q.py()
return q})
s($,"Ps","l9",()=>A.Jq(B.dl.gac(A.Kw(A.ba(A.l([1],t.t)))),0,null).getInt8(0)===1?B.Q:B.aW)
s($,"Pj","EY",()=>A.ah("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Qg","Dp",()=>A.ah("\\r\\n|\\r|\\n",!0,!1))
s($,"Py","Iw",()=>A.G1())
s($,"Qb","F6",()=>A.ah("^[\\x00-\\x7F]+$",!0,!1))
s($,"Qc","IS",()=>A.ah('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Qu","J4",()=>A.ah('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Qf","IV",()=>A.ah("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Qj","IY",()=>A.ah('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Qi","IX",()=>A.ah("\\\\(.)",!0,!1))
s($,"Qr","J2",()=>A.ah('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Qv","J5",()=>A.ah("(?:"+$.IV().a+")*",!0,!1))
s($,"Pn","EZ",()=>A.ah("^[0-9a-f]{64}$",!0,!1))
s($,"Ql","J_",()=>A.G2())
s($,"Qt","q4",()=>A.ah("^[a-z0-9]{15}$",!0,!1))
r($,"MU","IT",()=>A.JI().a)
s($,"Pt","F_",()=>A.ah("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"Po","Is",()=>A.DA("declaredNames",t.aJ))
s($,"Pp","It",()=>A.DA("fieldByName",A.aa("F<j,b5>")))
s($,"Qh","IW",()=>A.ah("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"PI","lc",()=>new A.k())
s($,"Qo","ir",()=>new A.rh($.F0()))
s($,"PF","Ix",()=>new A.wW(A.ah("/",!0,!1),A.ah("[^/]$",!0,!1),A.ah("^/",!0,!1)))
s($,"PH","q2",()=>new A.za(A.ah("[/\\\\]",!0,!1),A.ah("[^/\\\\]$",!0,!1),A.ah("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ah("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"PG","lb",()=>new A.yR(A.ah("/",!0,!1),A.ah("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ah("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ah("^/",!0,!1)))
s($,"PE","F0",()=>A.L7())
s($,"Pm","Ir",()=>$.fu().bT(0,63).bS(0))
s($,"Pl","Iq",()=>{var q=$.fu()
return q.bT(0,63).ha(0,q)})
s($,"Pk","q1",()=>A.G2())
s($,"PT","F1",()=>A.DA(null,t.S))
s($,"Qn","J1",()=>A.Kj(A.l([A.E5("files"),A.E5("blocks")],t.s)))
s($,"Pu","Dn",()=>{var q,p,o=A.t(t.N,A.aa("fT"))
for(q=0;q<2;++q){p=B.d2[q]
o.j(0,p.c,p)}return o})
s($,"Qk","IZ",()=>A.G1())
r($,"PU","ld",()=>{var q="navigator"
return A.Ka(A.Kb(A.CW(A.Ii(),q),A.E5("locks")))?A.CW(A.CW(A.Ii(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.h4,ArrayBuffer:A.h3,ArrayBufferView:A.jt,DataView:A.js,Float32Array:A.n3,Float64Array:A.n4,Int16Array:A.n5,Int32Array:A.n6,Int8Array:A.n7,Uint16Array:A.ju,Uint32Array:A.jv,Uint8ClampedArray:A.jw,CanvasPixelArray:A.jw,Uint8Array:A.eT})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.h5.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.OU
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
