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
if(a[b]!==s){A.ON(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Es(b)
return new s(c,this)}:function(){if(s===null)s=A.Es(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Es(a).prototype
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
EC(a,b,c,d){return{i:a,p:b,e:c,x:d}},
CI(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.EA==null){A.Oj()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.FX("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.AT
if(o==null)o=$.AT=A.CH(n)
p=q[o]}if(p!=null)return p
p=A.Or(a)
if(p!=null)return p
if(typeof a=="function")return B.cw
s=Object.getPrototypeOf(a)
if(s==null)return B.bg
if(s===Object.prototype)return B.bg
if(typeof q=="function"){o=$.AT
if(o==null)o=$.AT=A.CH(n)
Object.defineProperty(q,o,{value:B.aP,enumerable:false,writable:true,configurable:true})
return B.aP}return B.aP},
mB(a,b){if(a<0||a>4294967295)throw A.b(A.aA(a,0,4294967295,"length",null))
return J.Dv(new Array(a),b)},
u5(a,b){if(a<0)throw A.b(A.S("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
Fo(a,b){if(a<0)throw A.b(A.S("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
Dv(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
JQ(a,b){return J.ET(a,b)},
Fp(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
JT(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Fp(r))break;++b}return b},
Fq(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Fp(r))break}return b},
cF(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iW.prototype
return J.mD.prototype}if(typeof a=="string")return J.dI.prototype
if(a==null)return J.iX.prototype
if(typeof a=="boolean")return J.mC.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
if(typeof a=="symbol")return J.fQ.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.j)return a
return J.CI(a)},
I(a){if(typeof a=="string")return J.dI.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
if(typeof a=="symbol")return J.fQ.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.j)return a
return J.CI(a)},
aw(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
if(typeof a=="symbol")return J.fQ.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.j)return a
return J.CI(a)},
Ob(a){if(typeof a=="number")return J.eD.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.e_.prototype
return a},
Oc(a){if(typeof a=="number")return J.eD.prototype
if(typeof a=="string")return J.dI.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.e_.prototype
return a},
CG(a){if(typeof a=="string")return J.dI.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.e_.prototype
return a},
kV(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
if(typeof a=="symbol")return J.fQ.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.j)return a
return J.CI(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cF(a).P(a,b)},
T(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.HM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.I(a).h(a,b)},
d3(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.HM(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aw(a).j(a,b,c)},
aM(a,b){return J.aw(a).u(a,b)},
EQ(a,b){return J.aw(a).D(a,b)},
Dd(a,b){return J.CG(a).hM(a,b)},
pV(a){return J.kV(a).mJ(a)},
ER(a,b,c){return J.kV(a).hN(a,b,c)},
ES(a,b,c){return J.kV(a).mK(a,b,c)},
IO(a){return J.kV(a).mL(a)},
bQ(a,b,c){return J.kV(a).hO(a,b,c)},
pW(a,b){return J.aw(a).f5(a,b)},
IP(a,b,c){return J.Ob(a).bs(a,b,c)},
ET(a,b){return J.Oc(a).a3(a,b)},
De(a,b){return J.I(a).E(a,b)},
l5(a,b){return J.aw(a).a4(a,b)},
l6(a,b){return J.aw(a).ci(a,b)},
IQ(a,b,c){return J.aw(a).cj(a,b,c)},
IR(a){return J.kV(a).gac(a)},
bE(a){return J.aw(a).gH(a)},
aa(a){return J.cF(a).gK(a)},
bw(a){return J.I(a).gF(a)},
d4(a){return J.I(a).gS(a)},
E(a){return J.aw(a).gt(a)},
pX(a){return J.aw(a).ga_(a)},
an(a){return J.I(a).gm(a)},
c5(a){return J.cF(a).gam(a)},
pY(a){return J.aw(a).gao(a)},
IS(a,b,c){return J.aw(a).fV(a,b,c)},
IT(a,b,c){return J.aw(a).aF(a,b,c)},
IU(a,b){return J.aw(a).C(a,b)},
bF(a,b,c){return J.aw(a).co(a,b,c)},
IV(a,b,c){return J.CG(a).eq(a,b,c)},
IW(a,b){return J.I(a).sm(a,b)},
IX(a,b,c,d,e){return J.aw(a).ai(a,b,c,d,e)},
fp(a,b){return J.aw(a).b4(a,b)},
EU(a,b){return J.aw(a).ct(a,b)},
IY(a,b){return J.CG(a).d2(a,b)},
IZ(a,b){return J.CG(a).T(a,b)},
J_(a,b,c){return J.aw(a).U(a,b,c)},
l7(a,b){return J.aw(a).c1(a,b)},
J0(a){return J.aw(a).bJ(a)},
Df(a){return J.aw(a).cr(a)},
Z(a){return J.cF(a).l(a)},
J1(a,b){return J.aw(a).dB(a,b)},
mz:function mz(){},
mC:function mC(){},
iX:function iX(){},
aI:function aI(){},
dK:function dK(){},
n9:function n9(){},
e_:function e_(){},
bU:function bU(){},
by:function by(){},
fQ:function fQ(){},
z:function z(a){this.$ti=a},
mA:function mA(){},
u6:function u6(a){this.$ti=a},
ft:function ft(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eD:function eD(){},
iW:function iW(){},
mD:function mD(){},
dI:function dI(){}},A={Dy:function Dy(){},
fv(a,b,c){if(t.O.b(a))return new A.kb(a,b.i("@<0>").Z(c).i("kb<1,2>"))
return new A.ep(a,b.i("@<0>").Z(c).i("ep<1,2>"))},
Fs(a){return new A.dJ("Field '"+a+"' has been assigned during initialization.")},
Ft(a){return new A.dJ("Field '"+a+"' has not been initialized.")},
JX(a){return new A.dJ("Field '"+a+"' has already been initialized.")},
eR(a){return new A.nl(a)},
CM(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aC(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hr(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cE(a,b,c){return a},
EB(a){var s,r
for(s=$.fe.length,r=0;r<s;++r)if(a===$.fe[r])return!0
return!1},
cy(a,b,c,d){A.aW(b,"start")
if(c!=null){A.aW(c,"end")
if(b>c)A.v(A.aA(b,0,c,"start",null))}return new A.cx(a,b,c,d.i("cx<0>"))},
dN(a,b,c,d){if(t.O.b(a))return new A.ey(a,b,c.i("@<0>").Z(d).i("ey<1,2>"))
return new A.cp(a,b,c.i("@<0>").Z(d).i("cp<1,2>"))},
FS(a,b,c){var s="takeCount"
A.dz(b,s)
A.aW(b,s)
if(t.O.b(a))return new A.iD(a,b,c.i("iD<0>"))
return new A.eV(a,b,c.i("eV<0>"))},
FQ(a,b,c){var s="count"
if(t.O.b(a)){A.dz(b,s)
A.aW(b,s)
return new A.fG(a,b,c.i("fG<0>"))}A.dz(b,s)
A.aW(b,s)
return new A.dg(a,b,c.i("dg<0>"))},
JN(a,b,c){return new A.ex(a,b,c.i("ex<0>"))},
az(){return new A.bp("No element")},
iU(){return new A.bp("Too many elements")},
Fm(){return new A.bp("Too few elements")},
nC(a,b,c,d){if(c-b<=32)A.KG(a,b,c,d)
else A.KF(a,b,c,d)},
KG(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.I(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
KF(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.I(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.nC(a3,a4,r-2,a6)
A.nC(a3,q+2,a5,a6)
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
break}}A.nC(a3,r,q,a6)}else A.nC(a3,r,q,a6)},
Aa:function Aa(a){this.a=0
this.b=a},
zJ:function zJ(a){this.a=0
this.b=a},
e4:function e4(){},
lw:function lw(a,b){this.a=a
this.$ti=b},
ep:function ep(a,b){this.a=a
this.$ti=b},
kb:function kb(a,b){this.a=a
this.$ti=b},
k8:function k8(){},
zK:function zK(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.$ti=b},
eq:function eq(a,b){this.a=a
this.$ti=b},
qq:function qq(a,b){this.a=a
this.b=b},
qp:function qp(a){this.a=a},
dJ:function dJ(a){this.a=a},
nl:function nl(a){this.a=a},
cn:function cn(a){this.a=a},
CT:function CT(){},
xK:function xK(){},
K:function K(){},
a_:function a_(){},
cx:function cx(a,b,c,d){var _=this
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
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function ey(a,b,c){this.a=a
this.b=b
this.$ti=c},
mP:function mP(a,b,c){var _=this
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
cY:function cY(a,b,c){this.a=a
this.b=b
this.$ti=c},
iH:function iH(a,b,c){this.a=a
this.b=b
this.$ti=c},
m2:function m2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eV:function eV(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.$ti=c},
o2:function o2(a,b,c){this.a=a
this.b=b
this.$ti=c},
dg:function dg(a,b,c){this.a=a
this.b=b
this.$ti=c},
fG:function fG(a,b,c){this.a=a
this.b=b
this.$ti=c},
nB:function nB(a,b,c){this.a=a
this.b=b
this.$ti=c},
ez:function ez(a){this.$ti=a},
m_:function m_(a){this.$ti=a},
e2:function e2(a,b){this.a=a
this.$ti=b},
os:function os(a,b){this.a=a
this.$ti=b},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.$ti=c},
mx:function mx(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
iL:function iL(){},
oe:function oe(){},
hv:function hv(){},
bB:function bB(a,b){this.a=a
this.$ti=b},
jU:function jU(a){this.a=a},
kJ:function kJ(){},
Jj(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bK(new A.R(a,m.i("R<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aL(q,A.bK(new A.ao(a,m.i("ao<2>")),!0,c),b.i("@<0>").Z(c).i("aL<1,2>"))
n.$keys=l
return n}return new A.iz(A.bo(a,b,c),b.i("@<0>").Z(c).i("iz<1,2>"))},
Jk(){throw A.b(A.a2("Cannot modify unmodifiable Map"))},
Jl(){throw A.b(A.a2("Cannot modify constant Set"))},
I6(a){var s=A.I5(a)
if(s!=null)return s
return"minified:"+a},
HM(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
return s},
eO(a){var s,r=$.FF
if(r==null)r=$.FF=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
h4(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
Kn(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.c2(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
nc(a){var s,r,q,p
if(a instanceof A.j)return A.c2(A.bk(a),null)
s=J.cF(a)
if(s===B.cv||s===B.cx||t.cx.b(a)){r=B.aX(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.c2(A.bk(a),null)},
FH(a){var s,r,q
if(a==null||typeof a=="number"||A.bv(a))return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.es)return a.l(0)
if(a instanceof A.hQ)return a.mw(!0)
s=$.II()
for(r=0;r<1;++r){q=s[r].xy(a)
if(q!=null)return q}return"Instance of '"+A.nc(a)+"'"},
Kj(){return Date.now()},
Km(){var s,r
if($.wR!==0)return
$.wR=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.wR=1e6
$.nd=new A.wQ(r)},
Ki(){if(!!self.location)return self.location.href
return null},
FE(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Ko(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
if(!A.a9(q))throw A.b(A.fg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ag(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fg(q))}return A.FE(p)},
FI(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.a9(q))throw A.b(A.fg(q))
if(q<0)throw A.b(A.fg(q))
if(q>65535)return A.Ko(a)}return A.FE(a)},
Kp(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bA(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ag(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aA(a,0,1114111,null,null))},
Kq(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.an(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bz(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
DJ(a){return a.c?A.bz(a).getUTCFullYear()+0:A.bz(a).getFullYear()+0},
DH(a){return a.c?A.bz(a).getUTCMonth()+1:A.bz(a).getMonth()+1},
wP(a){return a.c?A.bz(a).getUTCDate()+0:A.bz(a).getDate()+0},
DF(a){return a.c?A.bz(a).getUTCHours()+0:A.bz(a).getHours()+0},
DG(a){return a.c?A.bz(a).getUTCMinutes()+0:A.bz(a).getMinutes()+0},
DI(a){return a.c?A.bz(a).getUTCSeconds()+0:A.bz(a).getSeconds()+0},
FG(a){return a.c?A.bz(a).getUTCMilliseconds()+0:A.bz(a).getMilliseconds()+0},
Kl(a){return B.c.an((a.c?A.bz(a).getUTCDay()+0:A.bz(a).getDay()+0)+6,7)+1},
Kk(a){var s=a.$thrownJsError
if(s==null)return null
return A.ae(s)},
ne(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aS(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
CA(a,b){var s,r="index"
if(!A.a9(b))return new A.bG(!0,b,r,null)
s=J.an(a)
if(b<0||b>=s)return A.mv(b,s,a,null,r)
return A.xv(b,r)},
O0(a,b,c){if(a<0||a>c)return A.aA(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aA(b,a,c,"end",null)
return new A.bG(!0,b,"end",null)},
fg(a){return new A.bG(!0,a,null,null)},
b(a){return A.aS(a,new Error())},
aS(a,b){var s
if(a==null)a=new A.dl()
b.dartException=a
s=A.OO
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
OO(){return J.Z(this.dartException)},
v(a,b){throw A.aS(a,b==null?new Error():b)},
J(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.v(A.Mr(a,b,c),s)},
Mr(a,b,c){var s,r,q,p,o,n,m,l,k
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
p(a){throw A.b(A.ay(a))},
dm(a){var s,r,q,p,o,n
a=A.HV(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.yy(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
yz(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
FW(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Dz(a,b){var s=b==null,r=s?null:b.method
return new A.mE(a,r,s?null:b.receiver)},
D(a){if(a==null)return new A.n2(a)
if(a instanceof A.iF)return A.ei(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ei(a,a.dartException)
return A.Nm(a)},
ei(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Nm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ag(r,16)&8191)===10)switch(q){case 438:return A.ei(a,A.Dz(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.ei(a,new A.jp())}}if(a instanceof TypeError){p=$.If()
o=$.Ig()
n=$.Ih()
m=$.Ii()
l=$.Il()
k=$.Im()
j=$.Ik()
$.Ij()
i=$.Io()
h=$.In()
g=p.bY(s)
if(g!=null)return A.ei(a,A.Dz(s,g))
else{g=o.bY(s)
if(g!=null){g.method="call"
return A.ei(a,A.Dz(s,g))}else if(n.bY(s)!=null||m.bY(s)!=null||l.bY(s)!=null||k.bY(s)!=null||j.bY(s)!=null||m.bY(s)!=null||i.bY(s)!=null||h.bY(s)!=null)return A.ei(a,new A.jp())}return A.ei(a,new A.od(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jO()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ei(a,new A.bG(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jO()
return a},
ae(a){var s
if(a instanceof A.iF)return a.b
if(a==null)return new A.ku(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ku(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kX(a){if(a==null)return J.aa(a)
if(typeof a=="object")return A.eO(a)
return J.aa(a)},
NP(a){if(typeof a=="number")return B.w.gK(a)
if(a instanceof A.pt)return A.eO(a)
if(a instanceof A.hQ)return a.gK(a)
if(a instanceof A.jU)return a.gK(0)
return A.kX(a)},
HJ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
O9(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
ME(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Fc("Unsupported number of arguments for wrapped closure"))},
eh(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.NU(a,b)
a.$identity=s
return s},
NU(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ME)},
Jd(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.xV().constructor.prototype):Object.create(new A.iq(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.F6(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.J9(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.F6(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
J9(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.J4)}throw A.b("Error in functionType of tearoff")},
Ja(a,b,c,d){var s=A.F3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
F6(a,b,c,d){if(c)return A.Jc(a,b,d)
return A.Ja(b.length,d,a,b)},
Jb(a,b,c,d){var s=A.F3,r=A.J5
switch(b?-1:a){case 0:throw A.b(new A.nu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Jc(a,b,c){var s,r
if($.F1==null)$.F1=A.F0("interceptor")
if($.F2==null)$.F2=A.F0("receiver")
s=b.length
r=A.Jb(s,c,a,b)
return r},
Es(a){return A.Jd(a)},
J4(a,b){return A.kD(v.typeUniverse,A.bk(a.a),b)},
F3(a){return a.a},
J5(a){return a.b},
F0(a){var s,r,q,p=new A.iq("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.S("Field name "+a+" not found.",null))},
CH(a){return v.getIsolateTag(a)},
OR(a,b){var s=$.B
if(s===B.i)return a
return s.hR(a,b)},
I_(){return v.G},
PY(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Or(a){var s,r,q,p,o,n=$.HK.$1(a),m=$.CB[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.CQ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Hu.$2(a,n)
if(q!=null){m=$.CB[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.CQ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.CS(s)
$.CB[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.CQ[n]=s
return s}if(p==="-"){o=A.CS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.HS(a,s)
if(p==="*")throw A.b(A.FX(n))
if(v.leafTags[n]===true){o=A.CS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.HS(a,s)},
HS(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.EC(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
CS(a){return J.EC(a,!1,null,!!a.$ibV)},
Ot(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.CS(s)
else return J.EC(s,c,null,null)},
Oj(){if(!0===$.EA)return
$.EA=!0
A.Ok()},
Ok(){var s,r,q,p,o,n,m,l
$.CB=Object.create(null)
$.CQ=Object.create(null)
A.Oi()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.HU.$1(o)
if(n!=null){m=A.Ot(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Oi(){var s,r,q,p,o,n,m=B.bQ()
m=A.i7(B.bR,A.i7(B.bS,A.i7(B.aY,A.i7(B.aY,A.i7(B.bT,A.i7(B.bU,A.i7(B.bV(B.aX),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.HK=new A.CN(p)
$.Hu=new A.CO(o)
$.HU=new A.CP(n)},
i7(a,b){return a(b)||b},
LF(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
NY(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Dx(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.ab("Illegal RegExp pattern ("+String(o)+")",a,null))},
OH(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eE){s=B.a.ab(a,c)
return b.b.test(s)}else return!J.Dd(b,B.a.ab(a,c)).gF(0)},
HH(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
HV(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C(a,b,c){var s
if(typeof b=="string")return A.OJ(a,b,c)
if(b instanceof A.eE){s=b.gm0()
s.lastIndex=0
return a.replace(s,A.HH(c))}return A.OI(a,b,c)},
OI(a,b,c){var s,r,q,p
for(s=J.Dd(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
OJ(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.HV(b),"g"),A.HH(c))},
Hl(a){return a},
I0(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hM(0,a),s=new A.oz(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.Hl(B.a.B(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.Hl(B.a.ab(a,q)))
return s.charCodeAt(0)==0?s:s},
OK(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.I1(a,s,s+b.length,c)},
I1(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a0:function a0(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.a=a
this.b=b},
ks:function ks(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
pb:function pb(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a){this.a=a},
pc:function pc(a){this.a=a},
iz:function iz(a,b){this.a=a
this.$ti=b},
fB:function fB(){},
r5:function r5(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
f6:function f6(a,b){this.a=a
this.$ti=b},
hN:function hN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iP:function iP(a,b){this.a=a
this.$ti=b},
iA:function iA(){},
dC:function dC(a,b,c){this.a=a
this.b=b
this.$ti=c},
u_:function u_(){},
iT:function iT(a,b){this.a=a
this.$ti=b},
wQ:function wQ(a){this.a=a},
jG:function jG(){},
yy:function yy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jp:function jp(){},
mE:function mE(a,b,c){this.a=a
this.b=b
this.c=c},
od:function od(a){this.a=a},
n2:function n2(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a
this.b=null},
es:function es(){},
qv:function qv(){},
qw:function qw(){},
ym:function ym(){},
xV:function xV(){},
iq:function iq(a,b){this.a=a
this.b=b},
nu:function nu(a){this.a=a},
bI:function bI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
u7:function u7(a){this.a=a},
va:function va(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
R:function R(a,b){this.a=a
this.$ti=b},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ao:function ao(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
mM:function mM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iZ:function iZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iY:function iY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
CN:function CN(a){this.a=a},
CO:function CO(a){this.a=a},
CP:function CP(a){this.a=a},
hQ:function hQ(){},
p8:function p8(){},
p9:function p9(){},
pa:function pa(){},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hP:function hP(a){this.b=a},
oy:function oy(a,b,c){this.a=a
this.b=b
this.c=c},
oz:function oz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ho:function ho(a,b){this.a=a
this.c=b},
po:function po(a,b,c){this.a=a
this.b=b
this.c=c},
Br:function Br(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ON(a){throw A.aS(A.Fs(a),new Error())},
t(){throw A.aS(A.Ft(""),new Error())},
ej(){throw A.aS(A.JX(""),new Error())},
D8(){throw A.aS(A.Fs(""),new Error())},
oI(){var s=new A.oH("")
return s.b=s},
zL(a){var s=new A.oH(a)
return s.b=s},
oH:function oH(a){this.a=a
this.b=null},
i2(a,b,c){},
be(a){var s,r,q
if(t.iy.b(a))return a
s=J.I(a)
r=A.a8(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
Ka(a){return new DataView(new ArrayBuffer(a))},
Fz(a,b,c){A.i2(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
db(a,b,c){A.i2(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Kb(a){return new Int8Array(a)},
Kc(a){return new Uint16Array(a)},
FA(a,b,c){A.i2(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
vY(a){return new Uint8Array(a)},
bY(a,b,c){A.i2(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
du(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.CA(b,a))},
dv(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.O0(a,b,c))
if(b==null)return c
return b},
fZ:function fZ(){},
fY:function fY(){},
jk:function jk(){},
pw:function pw(a){this.a=a},
jj:function jj(){},
h_:function h_(){},
dR:function dR(){},
bX:function bX(){},
mW:function mW(){},
mX:function mX(){},
mY:function mY(){},
mZ:function mZ(){},
n_:function n_(){},
jl:function jl(){},
jm:function jm(){},
jn:function jn(){},
eK:function eK(){},
kn:function kn(){},
ko:function ko(){},
kp:function kp(){},
kq:function kq(){},
DM(a,b){var s=b.c
return s==null?b.c=A.kB(a,"y",[b.x]):s},
FN(a){var s=a.w
if(s===6||s===7)return A.FN(a.x)
return s===11||s===12},
KA(a){return a.as},
HR(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
af(a){return A.Bx(v.typeUniverse,a,!1)},
Om(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.ef(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
ef(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ef(a1,s,a3,a4)
if(r===s)return a2
return A.Gu(a1,r,!0)
case 7:s=a2.x
r=A.ef(a1,s,a3,a4)
if(r===s)return a2
return A.Gt(a1,r,!0)
case 8:q=a2.y
p=A.i6(a1,q,a3,a4)
if(p===q)return a2
return A.kB(a1,a2.x,p)
case 9:o=a2.x
n=A.ef(a1,o,a3,a4)
m=a2.y
l=A.i6(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.E8(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.i6(a1,j,a3,a4)
if(i===j)return a2
return A.Gv(a1,k,i)
case 11:h=a2.x
g=A.ef(a1,h,a3,a4)
f=a2.y
e=A.Nh(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Gs(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.i6(a1,d,a3,a4)
o=a2.x
n=A.ef(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.E9(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.lh("Attempted to substitute unexpected RTI kind "+a0))}},
i6(a,b,c,d){var s,r,q,p,o=b.length,n=A.BH(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ef(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Ni(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.BH(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ef(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Nh(a,b,c,d){var s,r=b.a,q=A.i6(a,r,c,d),p=b.b,o=A.i6(a,p,c,d),n=b.c,m=A.Ni(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.oW()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
pN(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Od(s)
return a.$S()}return null},
Ol(a,b){var s
if(A.FN(b))if(a instanceof A.es){s=A.pN(a)
if(s!=null)return s}return A.bk(a)},
bk(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a1(a)
return A.Ej(J.cF(a))},
a1(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Ej(a)},
Ej(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.MC(a,s)},
MC(a,b){var s=a instanceof A.es?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.LP(v.typeUniverse,s.name)
b.$ccache=r
return r},
Od(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.Bx(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
d2(a){return A.bO(A.n(a))},
Ez(a){var s=A.pN(a)
return A.bO(s==null?A.bk(a):s)},
Eo(a){var s
if(a instanceof A.hQ)return a.lP()
s=a instanceof A.es?A.pN(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c5(a).a
if(Array.isArray(a))return A.a1(a)
return A.bk(a)},
bO(a){var s=a.r
return s==null?a.r=new A.pt(a):s},
O4(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kD(v.typeUniverse,A.Eo(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Gx(v.typeUniverse,s,A.Eo(q[r]))
return A.kD(v.typeUniverse,s,a)},
b0(a){return A.bO(A.Bx(v.typeUniverse,a,!1))},
MB(a){var s=this
s.b=A.Nf(s)
return s.b(a)},
Nf(a){var s,r,q,p
if(a===t.K)return A.MK
if(A.fj(a))return A.MO
s=a.w
if(s===6)return A.My
if(s===1)return A.H1
if(s===7)return A.MF
r=A.Ne(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fj)){a.f="$i"+q
if(q==="q")return A.MI
if(a===t.m)return A.MH
return A.MN}}else if(s===10){p=A.NY(a.x,a.y)
return p==null?A.H1:p}return A.Mw},
Ne(a){if(a.w===8){if(a===t.S)return A.a9
if(a===t.W||a===t.cZ)return A.MJ
if(a===t.N)return A.MM
if(a===t.y)return A.bv}return null},
MA(a){var s=this,r=A.Mv
if(A.fj(s))r=A.M2
else if(s===t.K)r=A.M1
else if(A.ia(s)){r=A.Mx
if(s===t.aV)r=A.aX
else if(s===t.U)r=A.a7
else if(s===t.o9)r=A.GM
else if(s===t.jh)r=A.BT
else if(s===t.dA)r=A.GN
else if(s===t.B)r=A.GO}else if(s===t.S)r=A.aj
else if(s===t.N)r=A.G
else if(s===t.y)r=A.i1
else if(s===t.cZ)r=A.GP
else if(s===t.W)r=A.fc
else if(s===t.m)r=A.bi
s.a=r
return s.a(a)},
Mw(a){var s=this
if(a==null)return A.ia(s)
return A.Op(v.typeUniverse,A.Ol(a,s),s)},
My(a){if(a==null)return!0
return this.x.b(a)},
MN(a){var s,r=this
if(a==null)return A.ia(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.cF(a)[s]},
MI(a){var s,r=this
if(a==null)return A.ia(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.cF(a)[s]},
MH(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
H0(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Mv(a){var s=this
if(a==null){if(A.ia(s))return a}else if(s.b(a))return a
throw A.aS(A.GV(a,s),new Error())},
Mx(a){var s=this
if(a==null||s.b(a))return a
throw A.aS(A.GV(a,s),new Error())},
GV(a,b){return new A.kz("TypeError: "+A.Gj(a,A.c2(b,null)))},
Gj(a,b){return A.iE(a)+": type '"+A.c2(A.Eo(a),null)+"' is not a subtype of type '"+b+"'"},
ck(a,b){return new A.kz("TypeError: "+A.Gj(a,b))},
MF(a){var s=this
return s.x.b(a)||A.DM(v.typeUniverse,s).b(a)},
MK(a){return a!=null},
M1(a){if(a!=null)return a
throw A.aS(A.ck(a,"Object"),new Error())},
MO(a){return!0},
M2(a){return a},
H1(a){return!1},
bv(a){return!0===a||!1===a},
i1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aS(A.ck(a,"bool"),new Error())},
GM(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aS(A.ck(a,"bool?"),new Error())},
fc(a){if(typeof a=="number")return a
throw A.aS(A.ck(a,"double"),new Error())},
GN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aS(A.ck(a,"double?"),new Error())},
a9(a){return typeof a=="number"&&Math.floor(a)===a},
aj(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aS(A.ck(a,"int"),new Error())},
aX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aS(A.ck(a,"int?"),new Error())},
MJ(a){return typeof a=="number"},
GP(a){if(typeof a=="number")return a
throw A.aS(A.ck(a,"num"),new Error())},
BT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aS(A.ck(a,"num?"),new Error())},
MM(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.aS(A.ck(a,"String"),new Error())},
a7(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aS(A.ck(a,"String?"),new Error())},
bi(a){if(A.H0(a))return a
throw A.aS(A.ck(a,"JSObject"),new Error())},
GO(a){if(a==null)return a
if(A.H0(a))return a
throw A.aS(A.ck(a,"JSObject?"),new Error())},
Hg(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.c2(a[q],b)
return s},
N2(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Hg(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.c2(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
GZ(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.c2(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.c2(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.c2(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.c2(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.c2(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
c2(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.c2(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.c2(a.x,b)+">"
if(m===8){p=A.Nl(a.x)
o=a.y
return o.length>0?p+("<"+A.Hg(o,b)+">"):p}if(m===10)return A.N2(a,b)
if(m===11)return A.GZ(a,b,null)
if(m===12)return A.GZ(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
Nl(a){var s=A.I5(a)
if(s!=null)return s
return"minified:"+a},
LQ(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
LP(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.Bx(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kC(a,5,"#")
q=A.BH(s)
for(p=0;p<s;++p)q[p]=r
o=A.kB(a,b,q)
n[b]=o
return o}else return m},
LO(a,b){return A.GK(a.tR,b)},
LN(a,b){return A.GK(a.eT,b)},
Bx(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Gw(a,null,b,!1)
r.set(b,s)
return s},
kD(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Gw(a,b,c,!0)
q.set(c,r)
return r},
Gx(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.E8(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Gw(a,b,c,d){return A.LD(A.Lx(a,b,c,d))},
ed(a,b){b.a=A.MA
b.b=A.MB
return b},
kC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ct(null,null)
s.w=b
s.as=c
r=A.ed(a,s)
a.eC.set(c,r)
return r},
Gu(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.LL(a,b,r,c)
a.eC.set(r,s)
return s},
LL(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fj(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ia(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.ct(null,null)
q.w=6
q.x=b
q.as=c
return A.ed(a,q)},
Gt(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.LJ(a,b,r,c)
a.eC.set(r,s)
return s},
LJ(a,b,c,d){var s,r
if(d){s=b.w
if(A.fj(b)||b===t.K)return b
else if(s===1)return A.kB(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.ct(null,null)
r.w=7
r.x=b
r.as=c
return A.ed(a,r)},
LM(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ct(null,null)
s.w=13
s.x=b
s.as=q
r=A.ed(a,s)
a.eC.set(q,r)
return r},
kA(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
LI(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kB(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ct(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ed(a,r)
a.eC.set(p,q)
return q},
E8(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ct(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ed(a,o)
a.eC.set(q,n)
return n},
Gv(a,b,c){var s,r,q="+"+(b+"("+A.kA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ct(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ed(a,s)
a.eC.set(q,r)
return r},
Gs(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.LI(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ct(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ed(a,p)
a.eC.set(r,o)
return o},
E9(a,b,c,d){var s,r=b.as+("<"+A.kA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.LK(a,b,c,r,d)
a.eC.set(r,s)
return s},
LK(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.BH(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ef(a,b,r,0)
m=A.i6(a,c,r,0)
return A.E9(a,n,m,c!==m)}}l=new A.ct(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ed(a,l)},
Lx(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
LD(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Lz(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Go(a,r,l,k,!1)
else if(q===46)r=A.Go(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f8(a.u,a.e,k.pop()))
break
case 94:k.push(A.LM(a.u,k.pop()))
break
case 35:k.push(A.kC(a.u,5,"#"))
break
case 64:k.push(A.kC(a.u,2,"@"))
break
case 126:k.push(A.kC(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.LB(a,k)
break
case 38:A.LA(a,k)
break
case 63:p=a.u
k.push(A.Gu(p,A.f8(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Gt(p,A.f8(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Ly(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Gp(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.LE(a.u,a.e,o)
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
return A.f8(a.u,a.e,m)},
Lz(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Go(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.LQ(s,o.x)[p]
if(n==null)A.v('No "'+p+'" in "'+A.KA(o)+'"')
d.push(A.kD(s,o,n))}else d.push(p)
return m},
LB(a,b){var s,r=a.u,q=A.Gn(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kB(r,p,q))
else{s=A.f8(r,a.e,p)
switch(s.w){case 11:b.push(A.E9(r,s,q,a.n))
break
default:b.push(A.E8(r,s,q))
break}}},
Ly(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Gn(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f8(p,a.e,o)
q=new A.oW()
q.a=s
q.b=n
q.c=m
b.push(A.Gs(p,r,q))
return
case-4:b.push(A.Gv(p,b.pop(),s))
return
default:throw A.b(A.lh("Unexpected state under `()`: "+A.r(o)))}},
LA(a,b){var s=b.pop()
if(0===s){b.push(A.kC(a.u,1,"0&"))
return}if(1===s){b.push(A.kC(a.u,4,"1&"))
return}throw A.b(A.lh("Unexpected extended operation "+A.r(s)))},
Gn(a,b){var s=b.splice(a.p)
A.Gp(a.u,a.e,s)
a.p=b.pop()
return s},
f8(a,b,c){if(typeof c=="string")return A.kB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.LC(a,b,c)}else return c},
Gp(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f8(a,b,c[s])},
LE(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f8(a,b,c[s])},
LC(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.lh("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.lh("Bad index "+c+" for "+b.l(0)))},
Op(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aZ(a,b,null,c,null)
r.set(c,s)}return s},
aZ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fj(d))return!0
s=b.w
if(s===4)return!0
if(A.fj(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aZ(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aZ(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aZ(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aZ(a,b.x,c,d,e))return!1
return A.aZ(a,A.DM(a,b),c,d,e)}if(s===6)return A.aZ(a,p,c,d,e)&&A.aZ(a,b.x,c,d,e)
if(q===7){if(A.aZ(a,b,c,d.x,e))return!0
return A.aZ(a,b,c,A.DM(a,d),e)}if(q===6)return A.aZ(a,b,c,p,e)||A.aZ(a,b,c,d.x,e)
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
if(!A.aZ(a,j,c,i,e)||!A.aZ(a,i,e,j,c))return!1}return A.H_(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.H_(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.MG(a,b,c,d,e)}if(o&&q===10)return A.ML(a,b,c,d,e)
return!1},
H_(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aZ(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aZ(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aZ(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aZ(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aZ(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
MG(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kD(a,b,r[o])
return A.GL(a,p,null,c,d.y,e)}return A.GL(a,b.y,null,c,d.y,e)},
GL(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aZ(a,b[s],d,e[s],f))return!1
return!0},
ML(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aZ(a,r[s],c,q[s],e))return!1
return!0},
ia(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fj(a))if(s!==6)r=s===7&&A.ia(a.x)
return r},
fj(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
GK(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
BH(a){return a>0?new Array(a):v.typeUniverse.sEA},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
oW:function oW(){this.c=this.b=this.a=null},
pt:function pt(a){this.a=a},
oT:function oT(){},
kz:function kz(a){this.a=a},
L3(){var s,r,q
if(self.scheduleImmediate!=null)return A.No()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eh(new A.zr(s),1)).observe(r,{childList:true})
return new A.zq(s,r,q)}else if(self.setImmediate!=null)return A.Np()
return A.Nq()},
L4(a){self.scheduleImmediate(A.eh(new A.zs(a),0))},
L5(a){self.setImmediate(A.eh(new A.zt(a),0))},
L6(a){A.DW(B.I,a)},
DW(a,b){var s=B.c.M(a.a,1000)
return A.LG(s<0?0:s,b)},
FT(a,b){var s=B.c.M(a.a,1000)
return A.LH(s<0?0:s,b)},
LG(a,b){var s=new A.ky(!0)
s.pk(a,b)
return s},
LH(a,b){var s=new A.ky(!1)
s.pl(a,b)
return s},
h(a){return new A.k1(new A.w($.B,a.i("w<0>")),a.i("k1<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.GQ(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.bu(A.D(a),A.ae(a))},
GQ(a,b){var s,r,q=new A.BW(b),p=new A.BX(b)
if(a instanceof A.w)a.mu(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.b0(q,p,s)
else{r=new A.w($.B,t._)
r.a=8
r.c=a
r.mu(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.B.fE(new A.Cl(s),t.H,t.S,t.z)},
c0(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.d5(null)
else{s=c.a
s===$&&A.t()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.D(a)
q=A.ae(a)
s.ap(new A.ar(r,q))}else{s=A.D(a)
r=A.ae(a)
q=c.a
q===$&&A.t()
q.bi(s,r)
c.a.q()}return}if(a instanceof A.kj){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.t()
r.u(0,s)
A.l_(new A.BU(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.t()
s.u6(p,!1).W(new A.BV(c,b),t.P)
return}}A.GQ(a,b)},
Hk(a){var s=a.a
s===$&&A.t()
return new A.bc(s,A.n(s).i("bc<1>"))},
L7(a,b){var s=new A.oB(b.i("oB<0>"))
s.pg(a,b)
return s},
H2(a,b){return A.L7(a,b)},
Lt(a){return new A.kj(a,1)},
e7(a){return new A.kj(a,0)},
Gr(a,b,c){return 0},
ik(a){var s
if(t.C.b(a)){s=a.gcu()
if(s!=null)return s}return B.R},
iO(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.D(q)
r=A.ae(q)
p=new A.w($.B,b.i("w<0>"))
o=s
n=r
m=A.kK(o,n)
if(m==null)o=new A.ar(o,n==null?A.ik(o):n)
else o=m
p.cw(o)
return p}return b.i("y<0>").b(l)?l:A.bC(l,b)},
bf(a,b){var s=a==null?b.a(a):a,r=new A.w($.B,b.i("w<0>"))
r.aG(s)
return r},
JG(a,b){var s
if(!b.b(null))throw A.b(A.aD(null,"computation","The type parameter is not nullable"))
s=new A.w($.B,b.i("w<0>"))
A.c_(a,new A.tv(null,s,b))
return s},
Dr(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.B,b.i("w<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.tx(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.b0(new A.tw(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.d5(A.l([],b.i("z<0>")))
return n}i.a=A.a8(n,null,!1,b.i("0?"))}catch(l){p=A.D(l)
o=A.ae(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kK(m,k)
if(j==null)m=new A.ar(m,k==null?A.ik(m):k)
else m=j
n.cw(m)
return n}else{i.d=p
i.c=o}}return f},
Dq(a,b,c,d){var s=new A.tq(d,null,b,c),r=$.B,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fE(s,c.i("0/"),t.K,t.l)
a.dK(new A.ci(q,2,null,s,a.$ti.i("@<1>").Z(c).i("ci<1,2>")))
return q},
JE(a,b){var s,r,q,p=A.l([],b.i("z<kh<0>>"))
for(s=a.length,r=b.i("kh<0>"),q=0;q<a.length;a.length===s||(0,A.p)(a),++q)p.push(new A.kh(a[q],r))
if(p.length===0)return A.bf(A.l([],b.i("z<0>")),b.i("q<0>"))
s=new A.w($.B,b.i("w<q<0>>"))
A.Ln(p,new A.tr(new A.at(s,b.i("at<q<0>>")),p,b))
return s},
MS(a){return a!=null},
Ln(a,b){var s,r={},q=r.a=r.b=0,p=new A.Aq(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.p)(a),++q)a[q].tO(p)},
kK(a,b){var s,r,q,p=$.B
if(p===B.i)return null
s=p.n1(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.ne(r,q)
return s},
fd(a,b){var s
if($.B!==B.i){s=A.kK(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcu()
if(b==null){A.ne(a,B.R)
b=B.R}}else b=B.R
else if(t.C.b(a))A.ne(a,b)
return new A.ar(a,b)},
Lm(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bC(a,b){var s=new A.w($.B,b.i("w<0>"))
s.a=8
s.c=a
return s},
Aw(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.DP()
b.cw(new A.ar(new A.bG(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.m7(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eX()
b.h5(p.a)
A.f4(b,q)
return}b.a^=2
b.b.d0(new A.Ax(p,b))},
f4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fl(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.f4(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gcg()===k.gcg())}else f=!1
if(f){f=g.a
r=f.c
f.b.fl(r.a,r.b)
return}j=$.B
if(j!==k)$.B=k
else j=null
f=s.a.c
if((f&15)===8)new A.AB(s,g,p).$0()
else if(q){if((f&1)!==0)new A.AA(s,m).$0()}else if((f&2)!==0)new A.Az(g,s).$0()
if(j!=null)$.B=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hv(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.Aw(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hv(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
H8(a,b){if(t.ng.b(a))return b.fE(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.du(a,t.z,t.K)
throw A.b(A.aD(a,"onError",u.w))},
MR(){var s,r
for(s=$.i4;s!=null;s=$.i4){$.kM=null
r=s.b
$.i4=r
if(r==null)$.kL=null
s.a.$0()}},
Ng(){$.Ek=!0
try{A.MR()}finally{$.kM=null
$.Ek=!1
if($.i4!=null)$.EL().$1(A.Hx())}},
Hi(a){var s=new A.oA(a),r=$.kL
if(r==null){$.i4=$.kL=s
if(!$.Ek)$.EL().$1(A.Hx())}else $.kL=r.b=s},
Nd(a){var s,r,q,p=$.i4
if(p==null){A.Hi(a)
$.kM=$.kL
return}s=new A.oA(a)
r=$.kM
if(r==null){s.b=p
$.i4=$.kM=s}else{q=r.b
s.b=q
$.kM=r.b=s
if(q==null)$.kL=s}},
l_(a){var s,r=null,q=$.B
if(B.i===q){A.Cj(r,r,B.i,a)
return}if(B.i===q.gjO().a)s=B.i.gcg()===q.gcg()
else s=!1
if(s){A.Cj(r,r,q,q.c0(a,t.H))
return}s=$.B
s.d0(s.f4(a))},
DR(a,b){var s=null,r=b.i("cZ<0>"),q=new A.cZ(s,s,s,s,r)
q.aD(a)
q.ln()
return new A.bc(q,r.i("bc<1>"))},
Pb(a,b){return new A.cD(A.cE(a,"stream",t.K),b.i("cD<0>"))},
nL(a,b,c,d,e,f){return e?new A.hX(b,c,d,a,f.i("hX<0>")):new A.cZ(b,c,d,a,f.i("cZ<0>"))},
dW(a,b,c){return new A.k2(b,a,c.i("k2<0>"))},
pJ(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.D(q)
r=A.ae(q)
$.B.fl(s,r)}},
Lk(a,b,c,d,e,f){var s=$.B,r=e?1:0,q=c!=null?32:0,p=A.oF(s,b,f),o=A.zG(s,c),n=d==null?A.Cn():d
return new A.e5(a,p,o,s.c0(n,t.H),s,r|q,f.i("e5<0>"))},
L2(a){return new A.zn(a)},
oF(a,b,c){var s=b==null?A.Ns():b
return a.du(s,t.H,c)},
zG(a,b){if(b==null)b=A.Nt()
if(t.b9.b(b))return a.fE(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.du(b,t.z,t.K)
throw A.b(A.S("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
MT(a){},
MV(a,b){$.B.fl(a,b)},
MU(){},
Gi(a,b){var s=$.B,r=new A.hJ(s,b.i("hJ<0>"))
A.l_(r.gm3())
if(a!=null)r.c=s.c0(a,t.H)
return r},
Ma(a,b,c){var s=a.v()
if(s!==$.ek())s.b2(new A.BZ(b,c))
else b.ap(c)},
Mb(a,b,c){var s=a.v()
if(s!==$.ek())s.b2(new A.C_(b,c))
else b.cz(c)},
c_(a,b){var s=$.B
if(s===B.i)return s.kb(a,b)
return s.kb(a,s.f4(b))},
yn(a,b){var s,r=$.B
if(r===B.i)return r.ka(a,b)
s=r.hR(b,t.hU)
return $.B.ka(a,s)},
pQ(a,b,c,d){return A.Nc(a,c,b,d)},
Nc(a,b,c,d){return $.B.n5(c,b).b_(a,d)},
Na(a,b,c,d,e){A.kQ(d,e)},
kQ(a,b){A.Nd(new A.Cg(a,b))},
Ch(a,b,c,d){var s,r=$.B
if(r===c)return d.$0()
$.B=c
s=r
try{r=d.$0()
return r}finally{$.B=s}},
Ci(a,b,c,d,e){var s,r=$.B
if(r===c)return d.$1(e)
$.B=c
s=r
try{r=d.$1(e)
return r}finally{$.B=s}},
En(a,b,c,d,e,f){var s,r=$.B
if(r===c)return d.$2(e,f)
$.B=c
s=r
try{r=d.$2(e,f)
return r}finally{$.B=s}},
He(a,b,c,d){return d},
Hf(a,b,c,d){return d},
Hd(a,b,c,d){return d},
N9(a,b,c,d,e){return null},
Cj(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gcg()
r=c.gcg()
d=s!==r?c.f4(d):c.k5(d,t.H)}A.Hi(d)},
N8(a,b,c,d,e){return A.DW(d,B.i!==c?c.k5(e,t.H):e)},
N7(a,b,c,d,e){e=c.uk(e,t.H,t.hU)
return A.FT(d,e)},
Nb(a,b,c,d){A.HT(d)},
Hc(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.Ds(o,o,o,s,s)
r.D(0,e)}else r=o
s=new A.oM(c.gmh(),c.gml(),c.gmj(),c.gmd(),c.gme(),c.gmc(),c.glH(),c.gjO(),c.gly(),c.glx(),c.gm8(),c.glM(),c.gjx(),c.gjY(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.pC(s,q)
p=d.a
if(p!=null)s.as=new A.pB(s,p)}if(r!=null)s.at=new A.pD(s,r)
return s},
zr:function zr(a){this.a=a},
zq:function zq(a,b,c){this.a=a
this.b=b
this.c=c},
zs:function zs(a){this.a=a},
zt:function zt(a){this.a=a},
ky:function ky(a){this.a=a
this.b=null
this.c=0},
Bv:function Bv(a,b){this.a=a
this.b=b},
Bu:function Bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k1:function k1(a,b){this.a=a
this.b=!1
this.$ti=b},
BW:function BW(a){this.a=a},
BX:function BX(a){this.a=a},
Cl:function Cl(a){this.a=a},
BU:function BU(a,b){this.a=a
this.b=b},
BV:function BV(a,b){this.a=a
this.b=b},
oB:function oB(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
zv:function zv(a){this.a=a},
zw:function zw(a){this.a=a},
zy:function zy(a){this.a=a},
zz:function zz(a,b){this.a=a
this.b=b},
zx:function zx(a,b){this.a=a
this.b=b},
zu:function zu(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
pq:function pq(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hW:function hW(a,b){this.a=a
this.$ti=b},
ar:function ar(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.$ti=b},
f0:function f0(a,b,c,d,e,f,g){var _=this
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
k7:function k7(){},
k2:function k2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
tx:function tx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tw:function tw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tq:function tq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o3:function o3(a,b){this.a=a
this.b=b},
tr:function tr(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b,c){this.c=a
this.d=b
this.$ti=c},
kh:function kh(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
Ar:function Ar(a,b){this.a=a
this.b=b},
As:function As(a,b){this.a=a
this.b=b},
Aq:function Aq(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(){},
aF:function aF(a,b){this.a=a
this.$ti=b},
at:function at(a,b){this.a=a
this.$ti=b},
ci:function ci(a,b,c,d,e){var _=this
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
At:function At(a,b){this.a=a
this.b=b},
Ay:function Ay(a,b){this.a=a
this.b=b},
Ax:function Ax(a,b){this.a=a
this.b=b},
Av:function Av(a,b){this.a=a
this.b=b},
Au:function Au(a,b){this.a=a
this.b=b},
AB:function AB(a,b,c){this.a=a
this.b=b
this.c=c},
AC:function AC(a,b){this.a=a
this.b=b},
AD:function AD(a){this.a=a},
AA:function AA(a,b){this.a=a
this.b=b},
Az:function Az(a,b){this.a=a
this.b=b},
AE:function AE(a,b){this.a=a
this.b=b},
AF:function AF(a,b,c){this.a=a
this.b=b
this.c=c},
AG:function AG(a,b){this.a=a
this.b=b},
oA:function oA(a){this.a=a
this.b=null},
ac:function ac(){},
xZ:function xZ(a,b){this.a=a
this.b=b},
y_:function y_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y0:function y0(a,b){this.a=a
this.b=b},
y1:function y1(a,b){this.a=a
this.b=b},
xX:function xX(a){this.a=a},
xY:function xY(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(){},
eb:function eb(){},
Bn:function Bn(a){this.a=a},
Bm:function Bm(a){this.a=a},
pr:function pr(){},
k3:function k3(){},
cZ:function cZ(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
hX:function hX(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
bc:function bc(a,b){this.a=a
this.$ti=b},
e5:function e5(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
ox:function ox(){},
zn:function zn(a){this.a=a},
zm:function zm(a){this.a=a},
kv:function kv(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b7:function b7(){},
zI:function zI(a,b,c){this.a=a
this.b=b
this.c=c},
zH:function zH(a){this.a=a},
hV:function hV(){},
oS:function oS(){},
ch:function ch(a,b){this.b=a
this.a=null
this.$ti=b},
hI:function hI(a,b){this.b=a
this.c=b
this.a=null},
Aj:function Aj(){},
e9:function e9(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
B4:function B4(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cD:function cD(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
kc:function kc(a){this.$ti=a},
ds:function ds(a,b){this.b=a
this.$ti=b},
B2:function B2(a,b){this.a=a
this.b=b},
km:function km(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
BZ:function BZ(a,b){this.a=a
this.b=b},
C_:function C_(a,b){this.a=a
this.b=b},
kf:function kf(){},
hM:function hM(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
f7:function f7(a,b,c){this.b=a
this.a=b
this.$ti=c},
kd:function kd(a,b){this.a=a
this.$ti=b},
hT:function hT(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
k6:function k6(a,b,c){this.a=a
this.b=b
this.$ti=c},
BQ:function BQ(a,b){this.a=a
this.b=b},
BS:function BS(a,b){this.a=a
this.b=b},
BR:function BR(a,b){this.a=a
this.b=b},
BO:function BO(a,b){this.a=a
this.b=b},
BP:function BP(a,b){this.a=a
this.b=b},
BN:function BN(a,b){this.a=a
this.b=b},
BK:function BK(a,b){this.a=a
this.b=b},
pC:function pC(a,b){this.a=a
this.b=b},
BJ:function BJ(a,b){this.a=a
this.b=b},
BI:function BI(a,b){this.a=a
this.b=b},
BM:function BM(a,b){this.a=a
this.b=b},
BL:function BL(a,b){this.a=a
this.b=b},
pB:function pB(a,b){this.a=a
this.b=b},
pD:function pD(a,b){this.a=a
this.b=b},
pA:function pA(){},
oM:function oM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
Af:function Af(a,b,c){this.a=a
this.b=b
this.c=c},
Ah:function Ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ae:function Ae(a,b){this.a=a
this.b=b},
Ag:function Ag(a,b,c){this.a=a
this.b=b
this.c=c},
pf:function pf(){},
Bb:function Bb(a,b,c){this.a=a
this.b=b
this.c=c},
Ba:function Ba(a,b){this.a=a
this.b=b},
Bc:function Bc(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
Cg:function Cg(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Ds(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dq(d.i("@<0>").Z(e).i("dq<1,2>"))
b=A.Eu()}else{if(A.HC()===b&&A.HB()===a)return new A.e6(d.i("@<0>").Z(e).i("e6<1,2>"))
if(a==null)a=A.Et()}else{if(b==null)b=A.Eu()
if(a==null)a=A.Et()}return A.Ll(a,b,c,d,e)},
Gk(a,b){var s=a[b]
return s===a?null:s},
E6(a,b,c){if(c==null)a[b]=a
else a[b]=c},
E5(){var s=Object.create(null)
A.E6(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Ll(a,b,c,d,e){var s=c!=null?c:new A.Ad(d)
return new A.k9(a,b,s,d.i("@<0>").Z(e).i("k9<1,2>"))},
dL(a,b,c,d){if(b==null){if(a==null)return new A.bI(c.i("@<0>").Z(d).i("bI<1,2>"))
b=A.Eu()}else{if(A.HC()===b&&A.HB()===a)return new A.iZ(c.i("@<0>").Z(d).i("iZ<1,2>"))
if(a==null)a=A.Et()}return A.Lw(a,b,null,c,d)},
m(a,b,c){return A.HJ(a,new A.bI(b.i("@<0>").Z(c).i("bI<1,2>")))},
u(a,b){return new A.bI(a.i("@<0>").Z(b).i("bI<1,2>"))},
Lw(a,b,c,d,e){return new A.kk(a,b,new A.B0(d),d.i("@<0>").Z(e).i("kk<1,2>"))},
vc(a){return new A.cC(a.i("cC<0>"))},
aO(a){return new A.cC(a.i("cC<0>"))},
ap(a,b){return A.O9(a,new A.cC(b.i("cC<0>")))},
E7(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
dr(a,b,c){var s=new A.e8(a,b,c.i("e8<0>"))
s.c=a.e
return s},
Mm(a,b){return J.x(a,b)},
Mn(a){return J.aa(a)},
Fn(a){if(a.length===0)return null
return B.b.ga_(a)},
bo(a,b,c){var s=A.dL(null,null,b,c)
a.a5(0,new A.vb(s,b,c))
return s},
cb(a,b,c){var s=A.dL(null,null,b,c)
s.D(0,a)
return s},
mN(a,b){var s,r,q=A.vc(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.u(0,b.a(a[r]))
return q},
bW(a,b){var s=A.vc(b)
s.D(0,a)
return s},
JY(a,b){var s=t.bP
return J.ET(s.a(a),s.a(b))},
vw(a){var s,r
if(A.EB(a))return"{...}"
s=new A.a5("")
try{r={}
$.fe.push(a)
s.a+="{"
r.a=!0
a.a5(0,new A.vx(r,s))
s.a+="}"}finally{$.fe.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
DA(a){return new A.j1(A.a8(A.JZ(null),null,!1,a.i("0?")),a.i("j1<0>"))},
JZ(a){return 8},
dq:function dq(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
AI:function AI(a){this.a=a},
AH:function AH(a){this.a=a},
e6:function e6(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
k9:function k9(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
Ad:function Ad(a){this.a=a},
f5:function f5(a,b){this.a=a
this.$ti=b},
oX:function oX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
kk:function kk(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
B0:function B0(a){this.a=a},
cC:function cC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
B1:function B1(a){this.a=a
this.c=this.b=null},
e8:function e8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
vb:function vb(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
p3:function p3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b9:function b9(){},
L:function L(){},
X:function X(){},
vv:function vv(a){this.a=a},
vx:function vx(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.$ti=b},
p5:function p5(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
pv:function pv(){},
j5:function j5(){},
cW:function cW(a,b){this.a=a
this.$ti=b},
j1:function j1(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
p4:function p4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cu:function cu(){},
kt:function kt(){},
kE:function kE(){},
H6(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.D(r)
q=A.ab(String(s),null,null)
throw A.b(q)}q=A.C1(p)
return q},
C1(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.p0(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.C1(a[s])
return a},
M0(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Iy()
else s=new Uint8Array(o)
for(r=J.I(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
M_(a,b,c,d){var s=a?$.Ix():$.Iw()
if(s==null)return null
if(0===c&&d===b.length)return A.GI(s,b)
return A.GI(s,b.subarray(c,d))},
GI(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
EW(a,b,c,d,e,f){if(B.c.an(f,4)!==0)throw A.b(A.ab("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.ab("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.ab("Invalid base64 padding, more than two '=' characters",a,b))},
Lb(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.I(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.J(f)
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
if(3-k===1){r&2&&A.J(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.J(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.aD(b,"Not a byte value at index "+q+": 0x"+B.c.kM(s.h(b,q),16),null))},
La(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ag(f,2),i=f&3,h=$.EM()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.J(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.ab(l,a,r))
s&2&&A.J(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.ab(l,a,r))
s&2&&A.J(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.G6(a,r+1,c,-m-1)}throw A.b(A.ab(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.ab(k,a,r))},
L8(a,b,c,d){var s=A.L9(a,b,c),r=(d&3)+(s-b),q=B.c.ag(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Ip()},
L9(a,b,c){var s,r=c,q=r,p=0
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
G6(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.ab("Invalid padding character",a,b))
return-s-1},
Jt(a){return B.d8.h(0,a.toLowerCase())},
Fr(a,b,c){return new A.j_(a,b)},
Mq(a){return a.p()},
Lu(a,b){return new A.AX(a,[],A.NV())},
Lv(a,b,c){var s,r=new A.a5("")
A.Gm(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Gm(a,b,c,d){var s=A.Lu(b,c)
s.iP(a)},
GJ(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p0:function p0(a,b){this.a=a
this.b=b
this.c=null},
AW:function AW(a){this.a=a},
p1:function p1(a){this.a=a},
AU:function AU(a,b,c){this.b=a
this.c=b
this.a=c},
BF:function BF(){},
BE:function BE(){},
le:function le(){},
pu:function pu(){},
lf:function lf(a){this.a=a},
Bw:function Bw(a,b){this.a=a
this.b=b},
ll:function ll(a){this.a=a},
im:function im(a){this.a=a},
oD:function oD(a){this.a=0
this.b=a},
zF:function zF(a){this.c=null
this.a=0
this.b=a},
zB:function zB(){},
zo:function zo(a,b){this.a=a
this.b=b},
lm:function lm(){},
oC:function oC(){this.a=0},
zA:function zA(a,b){this.a=a
this.b=b},
qh:function qh(){},
hD:function hD(a){this.a=a},
oG:function oG(a,b){this.a=a
this.b=b
this.c=0},
lx:function lx(){},
pl:function pl(a,b,c){this.a=a
this.b=b
this.$ti=c},
f2:function f2(a,b,c){this.a=a
this.b=b
this.$ti=c},
lz:function lz(){},
aG:function aG(){},
rb:function rb(a){this.a=a},
eA:function eA(){},
j_:function j_(a,b){this.a=a
this.b=b},
mF:function mF(a,b){this.a=a
this.b=b},
u8:function u8(){},
mH:function mH(a){this.b=a},
AV:function AV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mG:function mG(a){this.a=a},
AY:function AY(){},
AZ:function AZ(a,b){this.a=a
this.b=b},
AX:function AX(a,b,c){this.c=a
this.a=b
this.b=c},
mK:function mK(){},
mL:function mL(a){this.a=a},
nO:function nO(){},
Bs:function Bs(a,b){this.a=a
this.b=b},
kx:function kx(){},
pn:function pn(a){this.a=a},
BD:function BD(a,b,c){this.a=a
this.b=b
this.c=c},
oj:function oj(){},
ok:function ok(){},
py:function py(a){this.b=this.a=0
this.c=a},
BG:function BG(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jW:function jW(a){this.a=a},
dt:function dt(a){this.a=a
this.b=16
this.c=0},
pE:function pE(){},
Gg(a,b){var s=A.Li(a,b)
if(s==null)throw A.b(A.ab("Could not parse BigInt",a,null))
return s},
Lf(a,b){var s,r,q=$.cm(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bn(0,$.EN()).nL(0,A.k4(s))
s=0
o=0}}if(b)return q.bL(0)
return q},
G8(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Lg(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.w.um(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.G8(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.G8(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cm()
l=A.bM(j,i)
return new A.aP(l===0?!1:c,i,l)},
Li(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Ir().ei(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.Lf(p,q)
if(o!=null)return A.Lg(o,2,q)
return null},
bM(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
E3(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
G7(a){var s
if(a===0)return $.cm()
if(a===1)return $.fn()
if(a===2)return $.Is()
if(Math.abs(a)<4294967296)return A.k4(B.c.fN(a))
s=A.Lc(a)
return s},
k4(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bM(4,s)
return new A.aP(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bM(1,s)
return new A.aP(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ag(a,16)
r=A.bM(2,s)
return new A.aP(r===0?!1:o,s,r)}r=B.c.M(B.c.gmO(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bM(r,s)
return new A.aP(r===0?!1:o,s,r)},
Lc(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.S("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cm()
r=$.Iq()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.J(r)
r[p]=0}q=J.pV(B.f.gac(r))
q.$flags&2&&A.J(q,13)
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
else k=n>0?l.bM(0,n):l
if(s)return k.bL(0)
return k},
E4(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.J(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.J(d)
d[s]=0}return b+c},
Ge(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.an(c,16),l=16-m,k=B.c.bM(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dG(p,l)
r&2&&A.J(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bM((p&k)>>>0,m)}r&2&&A.J(d)
d[n]=q},
G9(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.an(c,16)===0)return A.E4(a,b,o,d)
s=b+o+1
A.Ge(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.J(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
Lh(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.an(c,16),m=16-n,l=B.c.bM(1,n)-1,k=B.c.dG(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bM((q&l)>>>0,m)
s&2&&A.J(d)
d[r]=(p|k)>>>0
k=B.c.dG(q,n)}s&2&&A.J(d)
d[j]=k},
zC(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Ld(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.J(e)
e[q]=r&65535
r=B.c.ag(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.J(e)
e[q]=r&65535
r=B.c.ag(r,16)}s&2&&A.J(e)
e[b]=r},
oE(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.J(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.J(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}},
Gf(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.J(d)
d[e]=p&65535
r=B.c.M(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.J(d)
d[e]=n&65535
r=B.c.M(n,65536)}},
Le(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.j_((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Oh(a){return A.kX(a)},
Dn(a,b){return new A.m3(new WeakMap(),a,b.i("m3<0>"))},
Do(a){},
Ap(a,b){var s=$.It()
s=s==null?null:new s(A.eh(A.OR(a,b),1))
return new A.oV(s,b.i("oV<0>"))},
aK(a){var s=A.h4(a,null)
if(s!=null)return s
throw A.b(A.ab(a,null,null))},
O2(a){var s=A.Kn(a)
if(s!=null)return s
throw A.b(A.ab("Invalid double",a,null))},
Jx(a,b){a=A.aS(a,new Error())
a.stack=b.l(0)
throw a},
a8(a,b,c,d){var s,r=c?J.u5(a,d):J.mB(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bK(a,b,c){var s,r=A.l([],c.i("z<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("z<0>"))
s=A.l([],b.i("z<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fR(a,b){var s=A.bK(a,!1,b)
s.$flags=3
return s},
dY(a,b,c){var s,r,q,p,o
A.aW(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.aA(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.FI(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.KN(a,b,c)
if(r)a=J.l7(a,c)
if(b>0)a=J.fp(a,b)
s=A.N(a,t.S)
return A.FI(s)},
KN(a,b,c){var s=a.length
if(b>=s)return""
return A.Kp(a,b,c==null||c>s?s:c)},
ah(a,b,c){return new A.eE(a,A.Dx(a,!1,b,c,!1,""))},
Og(a,b){return a==null?b==null:a===b},
y2(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
DY(){var s,r,q=A.Ki()
if(q==null)throw A.b(A.a2("'Uri.base' is not supported"))
s=$.G_
if(s!=null&&q===$.FZ)return s
r=A.oi(q)
$.G_=r
$.FZ=q
return r},
px(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.Iu()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.A(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bA(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
LV(a){var s,r,q
if(!$.Iv())return A.LW(a)
s=new URLSearchParams()
a.a5(0,new A.BC(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.B(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
DP(){return A.ae(new Error())},
Dk(a,b,c,d,e,f,g){var s=A.Kq(a,b,c,d,e,f,g,0,!0)
return new A.aH(s==null?new A.rP(a,b,c,d,e,f,g,0).$0():s,0,!0)},
Jo(){return new A.aH(Date.now(),0,!1)},
lV(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.aA(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.aA(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aD(b,s,"Time including microseconds is outside valid range"))
A.cE(c,"isUtc",t.y)
return a},
Jp(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
F9(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
lU(a){if(a>=10)return""+a
return"0"+a},
bS(a,b,c){return new A.aE(a+1000*b+1e6*c)},
fH(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aD(b,"name","No enum value with that name"))},
iE(a){if(typeof a=="number"||A.bv(a)||a==null)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return A.FH(a)},
Fb(a,b){A.cE(a,"error",t.K)
A.cE(b,"stackTrace",t.l)
A.Jx(a,b)},
lh(a){return new A.lg(a)},
S(a,b){return new A.bG(!1,null,b,a)},
aD(a,b,c){return new A.bG(!0,a,b,c)},
dz(a,b){return a},
b4(a){var s=null
return new A.dd(s,s,!1,s,s,a)},
xv(a,b){return new A.dd(null,null,!0,a,b,"Value not in range")},
aA(a,b,c,d,e){return new A.dd(b,c,!0,a,d,"Invalid value")},
FM(a,b,c,d){if(a<b||a>c)throw A.b(A.aA(a,b,c,d,null))
return a},
Ku(a,b,c,d){return A.Fl(a,d,b,null,c)},
bh(a,b,c){if(0>a||a>c)throw A.b(A.aA(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aA(b,a,c,"end",null))
return b}return c},
aW(a,b){if(a<0)throw A.b(A.aA(a,0,null,b,null))
return a},
Fk(a,b){var s=b.b
return new A.iR(s,!0,a,null,"Index out of range")},
mv(a,b,c,d,e){return new A.iR(b,!0,a,e,"Index out of range")},
Fl(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.mv(a,b,c,d,e==null?"index":e))
return a},
a2(a){return new A.cX(a)},
FX(a){return new A.oc(a)},
A(a){return new A.bp(a)},
ay(a){return new A.lC(a)},
Fc(a){return new A.oU(a)},
ab(a,b,c){return new A.bn(a,b,c)},
JO(a,b,c){var s,r
if(A.EB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.fe.push(a)
try{A.MP(a,s)}finally{$.fe.pop()}r=A.y2(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
u4(a,b,c){var s,r
if(A.EB(a))return b+"..."+c
s=new A.a5(b)
$.fe.push(a)
try{r=s
r.a=A.y2(r.a,a,", ")}finally{$.fe.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
MP(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
Fu(a,b,c,d,e){return new A.eq(a,b.i("@<0>").Z(c).Z(d).Z(e).i("eq<1,2,3,4>"))},
cd(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.aa(a)
b=J.aa(b)
return A.hr(A.aC(A.aC($.fo(),s),b))}if(B.d===d){s=J.aa(a)
b=J.aa(b)
c=J.aa(c)
return A.hr(A.aC(A.aC(A.aC($.fo(),s),b),c))}if(B.d===e){s=J.aa(a)
b=J.aa(b)
c=J.aa(c)
d=J.aa(d)
return A.hr(A.aC(A.aC(A.aC(A.aC($.fo(),s),b),c),d))}if(B.d===f){s=J.aa(a)
b=J.aa(b)
c=J.aa(c)
d=J.aa(d)
e=J.aa(e)
return A.hr(A.aC(A.aC(A.aC(A.aC(A.aC($.fo(),s),b),c),d),e))}if(B.d===g){s=J.aa(a)
b=J.aa(b)
c=J.aa(c)
d=J.aa(d)
e=J.aa(e)
f=J.aa(f)
return A.hr(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fo(),s),b),c),d),e),f))}s=J.aa(a)
b=J.aa(b)
c=J.aa(c)
d=J.aa(d)
e=J.aa(e)
f=J.aa(f)
g=J.aa(g)
g=A.hr(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fo(),s),b),c),d),e),f),g))
return g},
vZ(a){var s,r=$.fo()
for(s=J.E(a);s.k();)r=A.aC(r,J.aa(s.gn()))
return A.hr(r)},
GR(a,b){return 65536+((a&1023)<<10)+(b&1023)},
oi(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.FY(a4<a4?B.a.B(a5,0,a4):a5,5,a3).gnG()
else if(s===32)return A.FY(B.a.B(a5,5,a4),0,a3).gnG()}r=A.a8(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Hh(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Hh(a5,0,q,20,r)===20)r[7]=q
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
n=e}j="https"}k=!h}}}}if(k)return new A.cj(a4<a5.length?B.a.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Eb(a5,0,q)
else{if(q===0)A.hZ(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.GE(a5,c,p-1):""
a=A.GC(a5,p,o,!1)
i=o+1
if(i<n){a0=A.h4(B.a.B(a5,i,n),a3)
d=A.By(a0==null?A.v(A.ab("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.GD(a5,n,m,a3,j,a!=null)
a2=m<l?A.Bz(a5,m+1,l,a3):a3
return A.kG(j,b,a,d,a1,a2,l<a4?A.GB(a5,l+1,a4):a3)},
KX(a){return A.Ee(a,0,a.length,B.o,!1)},
oh(a,b,c){throw A.b(A.ab("Illegal IPv4 address, "+a,b,c))},
KU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.oh("each part must be in the range 0..255",a,r)}A.oh("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.oh(k,a,q)}l=p+1
s&2&&A.J(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.oh(k,a,q)
p=l}A.oh("IPv4 address should contain exactly 4 parts",a,q)},
KV(a,b,c){var s
if(b===c)throw A.b(A.ab("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.KW(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.G0(a,b,c)
return!0},
KW(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
G0(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.yE(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.KU(a1,o,a3,s,q*2)
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
B.f.kl(s,c,b,0)}}return s},
kG(a,b,c,d,e,f,g){return new A.kF(a,b,c,d,e,f,g)},
Gy(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hZ(a,b,c){throw A.b(A.ab(c,a,b))},
LS(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.E(q,"/")){s=A.a2("Illegal path character "+q)
throw A.b(s)}}},
By(a,b){if(a!=null&&a===A.Gy(b))return null
return a},
GC(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hZ(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.LT(a,r,s)
if(p<s){o=p+1
q=A.GH(a,B.a.af(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.KV(a,r,s)
m=B.a.B(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.ck(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.GH(a,B.a.af(a,"25",o)?s+3:o,c,"%25")}else q=""
A.G0(a,b,s)
return"["+B.a.B(a,b,s)+q+"]"}return A.LY(a,b,c)},
LT(a,b,c){var s=B.a.ck(a,"%",b)
return s>=b&&s<c?s:c},
GH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a5(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.Ec(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a5("")
m=i.a+=B.a.B(a,r,s)
if(n)o=B.a.B(a,s,s+3)
else if(o==="%")A.hZ(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a5("")
if(r<s){i.a+=B.a.B(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.B(a,r,s)
if(i==null){i=new A.a5("")
n=i}else n=i
n.a+=j
m=A.Ea(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.B(a,b,c)
if(r<c){j=B.a.B(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
LY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.Ec(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a5("")
l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.B(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a5("")
if(r<s){q.a+=B.a.B(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hZ(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a5("")
m=q}else m=q
m.a+=l
k=A.Ea(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.B(a,b,c)
if(r<c){l=B.a.B(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
Eb(a,b,c){var s,r,q
if(b===c)return""
if(!A.GA(a.charCodeAt(b)))A.hZ(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hZ(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.B(a,b,c)
return A.LR(r?a.toLowerCase():a)},
LR(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GE(a,b,c){if(a==null)return""
return A.kH(a,b,c,16,!1,!1)},
GD(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kH(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.T(s,"/"))s="/"+s
return A.LX(s,e,f)},
LX(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.T(a,"/")&&!B.a.T(a,"\\"))return A.Ed(a,!s||c)
return A.fb(a)},
Bz(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.S("Both query and queryParameters specified",null))
return A.kH(a,b,c,256,!0,!1)}if(d==null)return null
return A.LV(d)},
LW(a){var s={},r=new A.a5("")
s.a=""
a.a5(0,new A.BA(new A.BB(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
GB(a,b,c){if(a==null)return null
return A.kH(a,b,c,256,!0,!1)},
Ec(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.CM(s)
p=A.CM(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bA(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.B(a,b,b+3).toUpperCase()
return null},
Ea(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.mq(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dY(s,0,null)},
kH(a,b,c,d,e,f){var s=A.GG(a,b,c,d,e,f)
return s==null?B.a.B(a,b,c):s},
GG(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.Ec(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hZ(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.Ea(o)}if(p==null){p=new A.a5("")
l=p}else l=p
l.a=(l.a+=B.a.B(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.B(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
GF(a){if(B.a.T(a,"."))return!0
return B.a.bX(a,"/.")!==-1},
fb(a){var s,r,q,p,o,n
if(!A.GF(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.C(s,"/")},
Ed(a,b){var s,r,q,p,o,n
if(!A.GF(a))return!b?A.Gz(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Gz(s[0])
return B.b.C(s,"/")},
Gz(a){var s,r,q=a.length
if(q>=2&&A.GA(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.B(a,0,s)+"%3A"+B.a.ab(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
LZ(a,b){if(a.wd("package")&&a.c==null)return A.Hj(b,0,b.length)
return-1},
LU(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.S("Invalid URL encoding",null))}}return s},
Ee(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.B(a,b,c)
else p=new A.cn(B.a.B(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.S("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.S("Truncated URI",null))
p.push(A.LU(a,o+1))
o+=2}else p.push(r)}}return d.f7(p)},
GA(a){var s=a|32
return 97<=s&&s<=122},
FY(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.ab(k,a,r))}}if(q<0&&r>b)throw A.b(A.ab(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga_(j)
if(p!==44||r!==n+7||!B.a.af(a,"base64",n+1))throw A.b(A.ab("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.ar.wy(a,m,s)
else{l=A.GG(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dv(a,m,s,l)}return new A.yD(a,j,c)},
Hh(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Gq(a){if(a.b===7&&B.a.T(a.a,"package")&&a.c<=0)return A.Hj(a.a,a.e,a.f)
return-1},
Hj(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
Md(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
zD:function zD(){},
zE:function zE(){},
oV:function oV(a,b){this.a=a
this.$ti=b},
BC:function BC(a){this.a=a},
rP:function rP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a},
Ak:function Ak(){},
ag:function ag(){},
lg:function lg(a){this.a=a},
dl:function dl(){},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iR:function iR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cX:function cX(a){this.a=a},
oc:function oc(a){this.a=a},
bp:function bp(a){this.a=a},
lC:function lC(a){this.a=a},
n5:function n5(){},
jO:function jO(){},
oU:function oU(a){this.a=a},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
my:function my(){},
o:function o(){},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
pp:function pp(){},
jQ:function jQ(){this.b=this.a=0},
jF:function jF(a){this.a=a},
nt:function nt(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a5:function a5(a){this.a=a},
yE:function yE(a){this.a=a},
kF:function kF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
BB:function BB(a,b){this.a=a
this.b=b},
BA:function BA(a){this.a=a},
yD:function yD(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
oP:function oP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
m3:function m3(a,b,c){this.a=a
this.b=b
this.$ti=c},
K_(a){return a},
JR(a){return a},
DS(a){return a},
JP(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.GO(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
JF(a){return new v.G.Promise(A.c1(new A.tu(a)))},
n1:function n1(a){this.a=a},
tu:function tu(a){this.a=a},
ts:function ts(a){this.a=a},
tt:function tt(a){this.a=a},
Cb(a){var s
if(typeof a=="function")throw A.b(A.S("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.M4,a)
s[$.fm()]=a
return s},
d0(a){var s
if(typeof a=="function")throw A.b(A.S("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.M5,a)
s[$.fm()]=a
return s},
c1(a){var s
if(typeof a=="function")throw A.b(A.S("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.M6,a)
s[$.fm()]=a
return s},
pG(a){var s
if(typeof a=="function")throw A.b(A.S("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.M7,a)
s[$.fm()]=a
return s},
i3(a){var s
if(typeof a=="function")throw A.b(A.S("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.M8,a)
s[$.fm()]=a
return s},
Ei(a){var s
if(typeof a=="function")throw A.b(A.S("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.M9,a)
s[$.fm()]=a
return s},
M4(a){return a.$0()},
M5(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
M6(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
M7(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
M8(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
M9(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
H4(a){return a==null||A.bv(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
kW(a){if(A.H4(a))return a
return new A.CR(new A.e6(t.mp)).$1(a)},
CJ(a,b){return a[b]},
Er(a,b,c){return a[b].apply(a,c)},
NI(a,b){var s,r
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
a3(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.aF(s,b.i("aF<0>"))
a.then(A.eh(new A.CX(r),1),A.eh(new A.CY(r),1))
return s},
H3(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
kS(a){if(A.H3(a))return a
return new A.Cx(new A.e6(t.mp)).$1(a)},
CR:function CR(a){this.a=a},
CX:function CX(a){this.a=a},
CY:function CY(a){this.a=a},
Cx:function Cx(a){this.a=a},
HN(a,b){return Math.max(a,b)},
FK(){return B.at},
FL(){return $.Db()},
AR:function AR(){},
AS:function AS(a){this.a=a},
J6(a,b,c){return J.ER(a,b,c)},
m0:function m0(){},
a6:function a6(){},
qj:function qj(a){this.a=a},
qk:function qk(a){this.a=a},
ql:function ql(a,b){this.a=a
this.b=b},
qm:function qm(a){this.a=a},
qn:function qn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qo:function qo(a){this.a=a},
lX:function lX(a){this.$ti=a},
iV:function iV(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b){this.a=a
this.$ti=b},
hY:function hY(){},
hg:function hg(a,b){this.a=a
this.$ti=b},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c){this.a=a
this.b=b
this.$ti=c},
lW:function lW(){},
FB(){throw A.b(A.a2(u.O))},
KT(){throw A.b(A.a2("Cannot modify an unmodifiable Map"))},
n0:function n0(){},
of:function of(){},
au(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dY(m,0,null)},
co:function co(a){this.a=a},
c8:function c8(){this.a=null},
mp:function mp(){},
tz:function tz(){},
d_(a){var s=new Uint32Array(A.be(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.pj(s,r,a,q,new Uint32Array(16))},
pi:function pi(){},
Be:function Be(){},
pj:function pj(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
la:function la(){},
qu:function qu(){},
j3:function j3(a){this.a=a},
jJ:function jJ(){},
vq:function vq(){},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
xJ:function xJ(){},
jK:function jK(a,b){this.b=a
this.c=b},
ny:function ny(a){this.a=a},
bD(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lQ(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bD(a5[0])
r=A.bD(a5[1])
q=A.bD(a5[2])
p=A.bD(a5[3])
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
if((f&B.c.bM(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bD(s)
a5.$flags&2&&A.J(a5)
a5[0]=k
a5[1]=A.bD(r)
a5[2]=A.bD(q)
a5[3]=A.bD(p)},
F8(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.d1(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.an(q,n),!1)
p=J.bQ(B.aD.gac(r),0,null)
o=new Uint32Array(4)
A.lQ(o,a,b)
A.lQ(o,a,p)
return J.bQ(B.y.gac(o),0,null)},
lP:function lP(a,b,c){this.c=a
this.d=b
this.a=c},
rt:function rt(){},
oN:function oN(){},
oO:function oO(){},
pL(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.l0()===B.P){a5=A.ff(a5)
a6=A.ff(a6)
a7=A.ff(a7)
a8=A.ff(a8)}a5^=b3[0]
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
if($.l0()===B.P){a1=A.ff(a1)
a2=A.ff(a2)
a3=A.ff(a3)
a4=A.ff(a4)}a9.$flags&2&&A.J(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Ht(a){var s,r,q,p,o,n,m,l,k,j,i=a.geb(),h=B.d7.h(0,i.gm(0))
if(h==null)throw A.b(A.S("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.ER(B.y.gac(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.J(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.l0()===B.P)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.an(m,k)
if(n===0)j=A.Ho((j<<8|j>>>24)>>>0)^B.cI[B.c.j_(m,k)-1]<<24
else if(o&&n===4)j=A.Ho(j)
r[m]=(j^r[m-k])>>>0}return r},
Ho(a){return(B.n[a>>>24&255]<<24|B.n[a>>>16&255]<<16|B.n[a>>>8&255]<<8|B.n[a&255])>>>0},
ff(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
re:function re(){},
ru:function ru(){},
A9:function A9(){},
no:function no(a,b){this.a=a
this.b=b},
ln:function ln(){},
lo:function lo(){},
lp:function lp(){},
lq:function lq(){},
qd:function qd(){},
Hp(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.no("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.er)){s=J.Z(a)
if(B.a.T(s,"TypeError: "))s=B.a.ab(s,11)
a=new A.er(s,b.b)}return a},
Hb(a,b,c){A.Fb(A.Hp(a,c),b)},
M3(a,b){return new A.ds(new A.BY(a,b),t.fb)},
i5(a,b,c){return A.N1(a,b,c)},
N1(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$i5=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$i5)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.Cc(e)
a1.r=new A.Cd(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a3(c.read(),k),$async$i5)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.D(b)
l=A.ae(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Hp(m,a)
k=l
j=a1.b
if(j>=4)A.v(a1.bO())
if((j&1)!==0){j=a1.gaQ()
j.aL(d,k==null?B.R:k)}s=15
return A.a(a1.q(),$async$i5)
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
if(f>=4)A.v(a1.bO())
if((f&1)!==0)a1.gaQ().aD(g)}g=a1.b
s=((g&1)!==0?(a1.gaQ().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aF(new A.w($.B,j),i):g).a,$async$i5)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i5,r)},
lu:function lu(a){this.b=!1
this.c=a},
qg:function qg(a){this.a=a},
BY:function BY(a,b){this.a=a
this.b=b},
Cc:function Cc(a){this.a=a},
Cd:function Cd(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.a=a},
qi:function qi(a){this.a=a},
F5(a,b){return new A.er(a,b)},
er:function er(a,b){this.a=a
this.b=b},
mU:function mU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
K9(a,b){var s=t.N,r=A.l([],t.e8),q=$.EG()
if(!q.b.test(a))A.v(A.aD(a,"method","Not a valid method"))
return new A.vR(A.u(s,s),r,a,b,A.dL(new A.lp(),new A.lq(),s,s))},
vR:function vR(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
vS:function vS(a,b){this.a=a
this.b=b},
Kx(a,b){var s=new Uint8Array(0),r=$.EG()
if(!r.b.test(a))A.v(A.aD(a,"method","Not a valid method"))
r=t.N
return new A.xy(s,a,b,A.dL(new A.lp(),new A.lq(),r,r))},
xy:function xy(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jS:function jS(){},
nN:function nN(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
J7(a){return a.toLowerCase()},
is:function is(a,b,c){this.a=a
this.c=b
this.$ti=c},
K2(a){return A.OQ("media type",a,new A.vy(a))},
DC(a,b,c){var s=t.N
if(c==null)s=A.u(s,s)
else{s=new A.is(A.NJ(),A.u(s,t.ag),t.fo)
s.D(0,c)}return new A.fT(a.toLowerCase(),b.toLowerCase(),new A.cW(s,t.ph))},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
vy:function vy(a){this.a=a},
vA:function vA(a){this.a=a},
vz:function vz(){},
O6(a){var s
a.n2($.IF(),"quoted string")
s=a.gkx().h(0,0)
return A.I0(B.a.B(s,1,s.length-1),$.IE(),new A.CD(),null)},
CD:function CD(){},
qc:function qc(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
js:function js(){},
wc:function wc(a,b){this.a=a
this.b=b},
wd:function wd(a){this.a=a},
nb:function nb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
wJ:function wJ(){},
Bk:function Bk(a){this.a=a},
wy:function wy(){},
h3(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aV("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aV("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aV('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.k
else if(j.b(o))n=A.bo(o,t.N,t.X)
else throw A.b(A.aV('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.u
else if(t.j.b(m)){for(j=J.I(m),k=0;k<j.gm(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aV('Record field "imgs"['+k+"] is present but not a string."))
j=j.f5(m,t.N)
l=j.bJ(j)}else throw A.b(A.aV('Record field "imgs" is present but not a list.'))
return new A.df(s,p,r,n,l)},
wg:function wg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wx:function wx(a){this.a=a},
ww:function ww(){},
wo:function wo(a,b,c){this.a=a
this.b=b
this.c=c},
wp:function wp(a,b,c){this.a=a
this.b=b
this.c=c},
wl:function wl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wh:function wh(a,b){this.a=a
this.b=b},
wj:function wj(a,b){this.a=a
this.b=b},
wi:function wi(a,b){this.a=a
this.b=b},
wm:function wm(a){this.a=a},
wn:function wn(a,b){this.a=a
this.b=b},
wk:function wk(a){this.a=a},
ws:function ws(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wt:function wt(){},
wu:function wu(a,b){this.a=a
this.b=b},
wv:function wv(){},
wq:function wq(a,b){this.a=a
this.b=b},
wr:function wr(){},
Kg(a,b,c,d,e,f){var s=A.bf(null,t.H)
return new A.wz(b,c,f,new A.wI(a,B.ag,null),e,d,s)},
Kh(a){return 0.5+B.at.nj()},
ju:function ju(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
wz:function wz(a,b,c,d,e,f,g){var _=this
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
wI:function wI(a,b,c){this.a=a
this.b=b
this.c=c},
wC:function wC(){},
wG:function wG(a){this.a=a},
wH:function wH(a){this.a=a},
wD:function wD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wA:function wA(a,b,c){this.a=a
this.b=b
this.c=c},
wB:function wB(a){this.a=a},
wE:function wE(a){this.a=a},
wF:function wF(a){this.a=a},
Bl:function Bl(a,b){this.a=a
this.b=null
this.c=b},
JK(a,b,c){return new A.cN(a,b,c)},
iQ(a,b){return new A.dF(a)},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ms:function ms(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a){this.a=a},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
we:function we(a){this.a=a},
wf:function wf(a){this.a=a},
Jm(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="storePolicies",b2="recordId",b3="field",b4="imgs",b5="name",b6="expectedSha256",b7="allowVolatileBlobs",b8="session",b9="index",c0="refId",c1="token",c2="id",c3="spec",c4="store"
switch(c5){case"open":s=c6.h(0,"stores")
r=c6.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.P("Malformed open payload."))
q=c6.h(0,b1)
p=A.l([],t.d)
for(o=J.I(s),n=0;n<o.gm(s);++n)p.push(A.Dj(o.h(s,n),"stores["+n+"]"))
o=t.N
m=A.u(o,o)
for(l=r.ga0(),l=l.gt(l);l.k();){k=l.gn()
m.j(0,J.Z(k.a),A.Eq(k.b,"fingerprint"))}if(q==null)o=null
else{o=A.u(o,t.X)
for(l=t.f.a(q).ga0(),l=l.gt(l);l.k();){k=l.gn()
o.j(0,J.Z(k.a),A.Dj(k.b,b1))}}return new A.n4(p,m,o)
case"capabilities":return B.bL
case"health":return B.bO
case"close":return B.bM
case"fileBeginUpload":j=c6.h(0,"size")
if(!A.a9(j))throw A.b(A.P("Malformed fileBeginUpload payload."))
return new A.m8(A.aT(c6),A.b8(c6,b2),A.kO(c6.h(0,b3),b3,b4),A.kO(c6.h(0,b5),b5,"blob.bin"),j,A.d1(c6.h(0,b6),b6),A.ee(c6.h(0,b7),b7,!1))
case"fileChunk":i=c6.h(0,"chunk")
if(!t.p.b(i))throw A.b(A.P("Malformed fileChunk payload."))
return new A.m9(A.b8(c6,b8),i)
case"fileFinish":return new A.me(A.b8(c6,b8))
case"fileAbort":return new A.m7(A.b8(c6,b8))
case"filesList":return new A.mn(A.aT(c6),A.b8(c6,b2),A.kO(c6.h(0,b3),b3,b4))
case"fileOpen":return new A.mh(A.aT(c6),A.b8(c6,b2),A.kO(c6.h(0,b3),b3,b4),A.H5(c6.h(0,b9),b9,0),A.d1(c6.h(0,c0),c0))
case"fileDownload":return new A.mc(A.aT(c6),A.b8(c6,b2),A.kO(c6.h(0,b3),b3,b4),A.d1(c6.h(0,c0),c0))
case"fileCredit":h=c6.h(0,"bytes")
if(!A.a9(h))throw A.b(A.P("Malformed fileCredit payload."))
return new A.mb(A.b8(c6,"stream"),h)
case"fileClose":return new A.ma(A.b8(c6,"stream"))
case"fileRemove":return new A.mk(A.aT(c6),A.b8(c6,b2),A.kO(c6.h(0,b3),b3,b4),A.H5(c6.h(0,b9),b9,0),A.d1(c6.h(0,c0),c0))
case"fileGc":g=c6.h(0,"blobGraceMs")
f=c6.h(0,"tmpGraceMs")
if(!A.a9(g)||!A.a9(f))throw A.b(A.P("Malformed fileGc payload."))
return new A.mf(g,f)
case"fileEnforceStorageCap":e=c6.h(0,"maxBytes")
if(!A.a9(e))throw A.b(A.P("Malformed fileEnforceStorageCap payload."))
return new A.m1(e)
case"fileStorageStatus":return B.c1
case"syncStart":d=c6.h(0,"baseUrl")
if(typeof d!="string")throw A.b(A.P("Malformed syncStart payload."))
return new A.nW(d,A.d1(c6.h(0,"scopeId"),"scopeId"),A.d1(c6.h(0,c1),c1))
case"syncStop":return B.c6
case"syncNow":return B.c2
case"syncPause":return B.c3
case"syncResume":return B.c4
case"syncUpdateAuth":return new A.o1(A.d1(c6.h(0,c1),c1))
case"syncSetConnectivity":c=c6.h(0,"online")
if(!A.bv(c))throw A.b(A.P("Malformed syncSetConnectivity payload."))
return new A.nV(c)
case"syncStatus":return B.c5
case"get":return new A.mo(A.aT(c6),A.b8(c6,c2),A.cK(c6))
case"rows":b=c6.h(0,"ids")
if(!t.j.b(b))throw A.b(A.P("Malformed rows payload."))
return new A.nr(A.aT(c6),A.Hr(b,"ids"),A.cK(c6))
case"mutate":return new A.mV(A.aT(c6),A.Mj(c6.h(0,"mutation")),A.cK(c6))
case"query":return new A.nj(A.aT(c6),A.eQ(c6.h(0,c3)),A.cK(c6))
case"count":return new A.lL(A.aT(c6),A.eQ(c6.h(0,c3)),A.cK(c6))
case"countDistinct":return new A.lK(A.aT(c6),A.b8(c6,b3),A.eQ(c6.h(0,c3)),A.cK(c6))
case"distinct":p=A.aT(c6)
o=A.b8(c6,b3)
m=c6.h(0,c3)
return new A.lY(p,o,A.eQ(m==null?B.k:m),A.cK(c6))
case"ids":return new A.mt(A.aT(c6),A.eQ(c6.h(0,c3)),A.cK(c6))
case"aggregate":a=c6.h(0,"fn")
a0=A.Du(new A.aq(B.cS,new A.r9(a),t.gx))
if(a0==null)throw A.b(A.P("Unknown aggregate: "+A.r(a)))
return new A.lb(A.aT(c6),a0,A.b8(c6,b3),A.eQ(c6.h(0,c3)),A.cK(c6))
case"explain":return new A.m4(A.aT(c6),A.eQ(c6.h(0,c3)),A.cK(c6))
case"search":return new A.nx(A.aT(c6),A.KE(c6.h(0,c3)),A.cK(c6))
case"txBegin":a1=c6.h(0,"readOnly")
if(!A.bv(a1))throw A.b(A.P("Malformed txBegin payload."))
a2=c6.h(0,"durability")
if(a2==null)a3=B.bs
else if(typeof a2=="string"){p=A.Du(new A.aq(B.d4,new A.ra(a2),t.mE))
if(p==null)p=A.v(A.P("Unknown tx durability: "+a2))
a3=p}else{p=A.v(A.P("Malformed txBegin durability."))
a3=p}return new A.o5(a1,a3)
case"txCommit":case"txRollback":a4=c6.h(0,b8)
if(typeof a4!="string")throw A.b(A.P("Malformed tx payload."))
return c5==="txCommit"?new A.o6(a4):new A.o8(a4)
case"txSavepoint":case"txRollbackTo":case"txRelease":a4=c6.h(0,b8)
a5=c6.h(0,b5)
if(typeof a4!="string"||typeof a5!="string")throw A.b(A.P("Malformed savepoint payload."))
A:{if("txSavepoint"===c5){p=new A.oa(a4,a5)
break A}if("txRollbackTo"===c5){p=new A.o9(a4,a5)
break A}p=new A.o7(a4,a5)
break A}return p
case"watchOne":return new A.op(A.aT(c6),A.b8(c6,c2))
case"watch":return new A.oq(A.aT(c6),A.eQ(c6.h(0,c3)))
case"watchCancel":a6=c6.h(0,"subscription")
if(typeof a6!="string")throw A.b(A.P("Malformed watchCancel payload."))
return new A.oo(a6)
case"analyze":return new A.ld(A.d1(c6.h(0,c4),c4))
case"walCheckpoint":return B.c8
case"vacuum":return B.c7
case"pruneOutbox":return B.c_
case"compact":a7=c6.h(0,c4)
a8=c6.h(0,"olderThanMs")
if(typeof a7!="string"||!A.a9(a8))throw A.b(A.P("Malformed compact payload."))
return new A.lB(a7,a8)
case"runMaintenance":a9=c6.h(0,"compactOlderThanMs")
if(!A.a9(a9))throw A.b(A.P("Malformed runMaintenance payload."))
return new A.ns(a9)
case"conflictsList":return new A.lH(A.d1(c6.h(0,c4),c4))
case"conflictGet":return new A.lF(A.aT(c6),A.b8(c6,c2))
case"conflictsResolve":b0=c6.h(0,"merged")
if(!t.f.b(b0))throw A.b(A.P("Malformed conflictsResolve payload."))
return new A.np(A.aT(c6),A.b8(c6,c2),A.Dj(b0,"merged"))
case"conflictsAcceptLocal":return new A.l8(A.aT(c6),A.b8(c6,c2))
case"conflictsAcceptRemote":return new A.l9(A.aT(c6),A.b8(c6,c2))
case"conflictsWatch":return new A.lJ(A.d1(c6.h(0,c4),c4))
default:return null}},
aT(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.P("Malformed store name."))
return s},
b8(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.P('Malformed field "'+b+'".'))
return s},
cK(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.P("Malformed session id."))
return s},
Dj(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.P('Malformed field "'+b+'".'))},
Cp(a){var s,r=u.P
if(a instanceof A.dM){A:{if(a instanceof A.e0){s="ValidationException"
break A}if(a instanceof A.hu){s="UniqueConstraintException"
break A}if(a instanceof A.h0){s="NotNullConstraintException"
break A}if(a instanceof A.iv){s="CheckConstraintException"
break A}if(a instanceof A.jv){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.iM){s="ForeignKeyConstraintException"
break A}if(a instanceof A.jV){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.iN){s="FtsUnavailableError"
break A}if(a instanceof A.he){s="SchemaRegistrationError"
break A}if(a instanceof A.jH){s="SchemaTooNewError"
break A}if(a instanceof A.di){s="StorageError"
break A}if(a instanceof A.jE){s="RemoteOnlyError"
break A}if(a instanceof A.jC){s="RecordNotFoundException"
break A}if(a instanceof A.jP){s="StaleCursorError"
break A}if(a instanceof A.j8){s="MissingLimitError"
break A}if(a instanceof A.ix){s="ConflictBlockedError"
break A}if(a instanceof A.fD){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.jB){s="ReadOnlyTxError"
break A}throw A.b(A.eR(r))}return s}if(t.b0.b(a))return"RangeError"
if(a instanceof A.bG)return"ArgumentError"
if(a instanceof A.bp)return"StateError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
if(a instanceof A.br){B:{if(a instanceof A.eW){s="TransientNetworkError"
break B}if(a instanceof A.dU){s="ServerBusyError"
break B}if(a instanceof A.jL){s="ServerError"
break B}if(a instanceof A.c6){s="AuthError"
break B}if(a instanceof A.cM){s="ForbiddenError"
break B}if(a instanceof A.cQ){s="NotFoundError"
break B}if(a instanceof A.eN){s="PayloadError"
break B}if(a instanceof A.h5){s="ProtocolError"
break B}if(a instanceof A.fF){s="DuplicateIdError"
break B}if(a instanceof A.en){s="BatchFailedError"
break B}if(a instanceof A.yj){s="SyncIdentityError"
break B}throw A.b(A.eR(r))}return s}if(a instanceof A.jw)return"ProtocolEnvelopeException"
if(a instanceof A.eX)return"WireException"
return"unknown"},
aR(a){return new A.jw(a)},
O3(a){var s,r,q,p=J.Z(a),o=null
if(a instanceof A.dM){s=A.Cp(a)
p=a.a
if(a instanceof A.e0&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.hu){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.fh(a.c))}catch(r){if(!(A.D(r) instanceof A.eX))throw r}}else if(a instanceof A.h0)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.br){s=A.Cp(a)
p=a.a
if(a instanceof A.dU&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else{s=A.Cp(a)
if(a instanceof A.eX)p=a.a
else if(a instanceof A.bp)p=a.a
else if(t.b0.b(a))p=A.r(a.d)
else if(a instanceof A.bG)p=A.r(a.d)}q=A.u(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
Ms(a){var s
A:{if(a instanceof A.jd){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.jg){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.je){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.jh){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.ja){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.jb){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.j9){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.jf){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.jc){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.eR(u.P))}return s},
Mj(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.P("Malformed mutation payload."))
s=t.N
r=a.aX(0,new A.C5(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.jd(A.pK(r.h(0,n),n))
case"upsert":return new A.jg(A.pK(r.h(0,n),n))
case"putAll":return new A.je(A.Hm(r.h(0,m),m))
case"upsertAll":return new A.jh(A.Hm(r.h(0,m),m))
case"patch":return new A.ja(A.Cf(r.h(0,l),l),A.pK(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.P("Malformed patchAll patches."))
k=A.u(s,t.G)
for(s=p.ga0(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.Z(o.a),A.pK(o.b,"patches"))}return new A.jb(k)
case"archive":return new A.j9(A.Cf(r.h(0,l),l))
case"restore":return new A.jf(A.Cf(r.h(0,l),l))
case"purge":return new A.jc(A.Cf(r.h(0,l),l))
default:throw A.b(A.P("Unknown mutation kind: "+A.r(q)))}},
Cf(a,b){if(typeof a=="string")return a
throw A.b(A.P('Malformed mutation field "'+b+'".'))},
pK(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.P('Malformed mutation field "'+b+'".'))},
Hm(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.E(a);r.k();)s.push(A.pK(r.gn(),b))
return s}throw A.b(A.P('Malformed mutation field "'+b+'".'))},
eQ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.P("Malformed query spec."))
s=a0.aX(0,new A.xq(),t.N,t.z)
r=new A.xr()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.l([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.v(A.P("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.I(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.DE(s.h(0,e)):A.v(A.P("Malformed query predicate."))
i=A.l([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.v(A.P("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.Kt(h.gn()))
h=m==null?null:A.Ep(m,"limit")
g=A.ee(s.h(0,"all"),"all",!1)
f=n==null?null:A.Hr(n,"select")
return new A.xp(k,j,a,i,h,g,f,A.ee(s.h(0,d),d,!1),A.ee(s.h(0,c),c,!1),A.d1(l,"cursor"),A.ee(s.h(0,b),b,!1))},
FJ(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.P(k))
s=a.aX(0,new A.xl(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.P(k))
p=A.Du(new A.aq(B.cK,new A.xm(q),t.mz))
if(p==null)throw A.b(A.P("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.P('Query condition "values" must be a list.'))
n=A.kT(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.kT(l.gn()))}else m=null
return new A.eP(r,p,n,m)},
DE(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.P("Malformed predicate tree."))
s=a.aX(0,new A.wN(),t.N,t.z)
r=new A.wM()
switch(s.h(0,"kind")){case"leaf":return new A.j0(A.FJ(s))
case"not":return new A.jo(A.DE(s.h(0,"child")))
case"all":return new A.ii(r.$1(s.h(0,q)))
case"any":return new A.ij(r.$1(s.h(0,q)))
default:throw A.b(A.P("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
Kt(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.P(q))
s=a.aX(0,new A.xo(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.P(q))
return new A.ni(r,A.ee(s.h(0,"desc"),"desc",!1))},
KE(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.P("Malformed search spec."))
s=a.aX(0,new A.xI(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.P("Malformed search term."))
q=s.h(0,p)==null?null:A.Ep(s.h(0,p),p)
return new A.xH(r,q,A.ee(s.h(0,"all"),"all",!1),A.ee(s.h(0,o),o,!1),A.ee(s.h(0,n),n,!1))},
Jn(a){return new A.fC(a)},
Js(a){return new A.fE(a)},
JL(a){return new A.fP(a)},
J3(a){return new A.fr(a)},
Jy(a){return new A.fI(a)},
fh(a){var s,r,q,p
if(a instanceof A.aH)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.ar.gfe().A(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.fh(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.u(s,t.X)
for(q=a.ga0(),q=q.gt(q);q.k();){p=q.gn()
r.j(0,J.Z(p.a),A.fh(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.u(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),A.fh(q.b))}return s}if(a==null||A.bv(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.P("Value of type "+J.c5(a).l(0)+" is not wire-safe."))},
kT(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.cF(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.a9(s))return new A.aH(A.lV(s,0,!0),0,!0)
throw A.b(A.P("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.as.A(s)
return i}catch(p){if(t.Y.b(A.D(p)))throw A.b(A.P(k))
else throw p}throw A.b(A.P(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.P("Malformed map wire value."))
n=A.u(t.N,t.X)
for(i=o.ga0(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.P(j+A.r(m)))
n.j(0,m,A.kT(q.b))}return n}l=A.u(t.N,t.X)
for(i=a.ga0(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.P(j+A.r(m)))
l.j(0,m,A.kT(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.kT(q.gn()))
return i}return a},
P(a){return new A.eX(a)},
Eq(a,b){if(typeof a=="string")return a
throw A.b(A.P('Malformed wire field "'+b+'".'))},
Ep(a,b){if(A.a9(a))return a
throw A.b(A.P('Malformed wire field "'+b+'".'))},
d1(a,b){if(a==null)return null
return A.Eq(a,b)},
H5(a,b,c){if(a==null)return c
return A.Ep(a,b)},
ee(a,b,c){if(a==null)return!1
if(A.bv(a))return a
throw A.b(A.P('Malformed wire field "'+b+'".'))},
kO(a,b,c){if(a==null)return c
return A.Eq(a,b)},
Hr(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.l([],t.s)
for(r=J.I(a),q=0;q<r.gm(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.P(p+b+"["+q+']".'))
s.push(A.G(r.h(a,q)))}return s}throw A.b(A.P(p+b+'".'))},
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
lE:function lE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jw:function jw(a){this.a=a},
c9:function c9(){},
lA:function lA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lI:function lI(a,b){this.a=a
this.b=b},
jY:function jY(a,b){this.a=a
this.b=b},
mj:function mj(a,b,c,d,e,f,g,h,i,j){var _=this
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
m8:function m8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
m9:function m9(a,b){this.a=a
this.b=b},
me:function me(a){this.a=a},
ma:function ma(a){this.a=a},
m7:function m7(a){this.a=a},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function mh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mc:function mc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mb:function mb(a,b){this.a=a
this.b=b},
mk:function mk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mf:function mf(a,b){this.a=a
this.b=b},
m1:function m1(a){this.a=a},
nJ:function nJ(){},
mm:function mm(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
fM:function fM(a){this.a=a},
mi:function mi(a){this.a=a},
fL:function fL(a){this.a=a},
fJ:function fJ(a){this.a=a},
hm:function hm(a){this.a=a},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vT:function vT(){},
jd:function jd(a){this.a=a},
jg:function jg(a){this.a=a},
je:function je(a){this.a=a},
jh:function jh(a){this.a=a},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a){this.a=a},
j9:function j9(a){this.a=a},
jf:function jf(a){this.a=a},
jc:function jc(a){this.a=a},
C5:function C5(){},
xp:function xp(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
xq:function xq(){},
xr:function xr(){},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xl:function xl(){},
xm:function xm(a){this.a=a},
b3:function b3(a,b){this.a=a
this.b=b},
cR:function cR(){},
wN:function wN(){},
wM:function wM(){},
j0:function j0(a){this.a=a},
jo:function jo(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ni:function ni(a,b){this.a=a
this.b=b},
xo:function xo(){},
cH:function cH(a,b){this.a=a
this.b=b},
xH:function xH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xI:function xI(){},
nn:function nn(){},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(){},
mq:function mq(){},
ly:function ly(){},
mo:function mo(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function mV(a,b,c){this.a=a
this.b=b
this.c=c},
nj:function nj(a,b,c){this.a=a
this.b=b
this.c=c},
lL:function lL(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mt:function mt(a,b,c){this.a=a
this.b=b
this.c=c},
lb:function lb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b){this.a=a
this.b=b},
o5:function o5(a,b){this.a=a
this.b=b},
o6:function o6(a){this.a=a},
o8:function o8(a){this.a=a},
oa:function oa(a,b){this.a=a
this.b=b},
o9:function o9(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
op:function op(a,b){this.a=a
this.b=b},
oq:function oq(a,b){this.a=a
this.b=b},
oo:function oo(a){this.a=a},
ld:function ld(a){this.a=a},
on:function on(){},
ol:function ol(){},
nf:function nf(){},
lB:function lB(a,b){this.a=a
this.b=b},
ns:function ns(a){this.a=a},
lH:function lH(a){this.a=a},
lF:function lF(a,b){this.a=a
this.b=b},
np:function np(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function l8(a,b){this.a=a
this.b=b},
l9:function l9(a,b){this.a=a
this.b=b},
lJ:function lJ(a){this.a=a},
ai:function ai(){},
h1:function h1(){},
ir:function ir(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mr:function mr(a,b){this.a=a
this.b=b},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
fX:function fX(a){this.a=a},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fC:function fC(a){this.a=a},
fE:function fE(a){this.a=a},
fP:function fP(a){this.a=a},
fr:function fr(a){this.a=a},
fI:function fI(a){this.a=a},
hf:function hf(a){this.a=a},
nw:function nw(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fz:function fz(a){this.a=a},
hs:function hs(a){this.a=a},
hz:function hz(a){this.a=a},
h6:function h6(a){this.a=a},
fy:function fy(a){this.a=a},
eU:function eU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ba:function ba(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nW:function nW(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(){},
nR:function nR(){},
nS:function nS(){},
nU:function nU(){},
o1:function o1(a){this.a=a},
nV:function nV(a){this.a=a},
nZ:function nZ(){},
nX:function nX(a){this.a=a},
nT:function nT(a){this.a=a},
o_:function o_(a){this.a=a},
nY:function nY(a){this.a=a},
lj:function lj(){},
eX:function eX(a){this.a=a},
ak(a){var s,r=new A.a5("")
A.cl(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
EF(a){var s,r,q
for(s=new A.nt(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
Mc(a){var s
if(!isFinite(a))return B.w.l(a)
s=B.w.l(a)
if(B.a.bW(s,".0"))s=B.a.B(s,0,s.length-2)
return s==="-0"?"0":s},
cl(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(b==null){a.a+="null"
return 4}if(A.bv(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.a9(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.Mc(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.w.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a9(b,g)
a.a+=r
return A.EF(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.I(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cl(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
n=A.aO(t.N)
for(s=J.E(b.gJ());s.k();){m=s.gn()
r=J.Z(m)
if(!n.u(0,r))throw A.b(A.S('Cannot canonicalize map: keys collide after toString() ("'+r+'").',g))
o.push(new A.a0(r,m))}B.b.ct(o,new A.D9())
a.a+="{"
for(s=o.length,q=1,l=!0,k=0;k<o.length;o.length===s||(0,A.p)(o),++k,l=!1){j=o[k]
if(!l){a.a+=",";++q}i=B.h.a9(j.a,g)
a.a+=i
h=A.EF(i)
a.a+=":"
q=q+h+1+A.cl(a,b.h(0,j.b))}a.a+="}"
return q+1}throw A.b(A.S("Cannot canonicalize value of type "+J.c5(b).l(0),g))},
D9:function D9(){},
KI(a){var s,r,q,p=A.ah("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ei(a)
if(p==null)return B.dG
s=p.b
r=s[1]
r.toString
r=A.aK(r)
q=s[2]
q.toString
q=A.aK(q)
s=s[3]
s=A.h4(s==null?"":s,null)
return new A.ea(r,q,s==null?0:s)},
FR(a,b,c){var s,r=A.KI(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eT(a,b){return A.KJ(a,b)},
KJ(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eT=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b6("SELECT sqlite_version() AS v"),$async$eT)
case 3:g=d.T(c.bE(a2),"v")
g.toString
A.G(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b6("PRAGMA compile_options"),$async$eT)
case 4:j=d.N(new c.e2(b.bF(a2,new A.xS(),t.X),k),k.i("o.E"))
n=B.b.bj(j,new A.xT())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eT)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$eT)
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
k=a0===B.bh
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b6("PRAGMA journal_mode"),$async$eT)
case 19:l=a2
if(J.d4(l))m=A.a7(J.bE(J.bE(l).gaU()))
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
case 18:case 14:h=A.FR(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nI(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eT,r)},
na:function na(a,b){this.a=a
this.b=b},
nI:function nI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xS:function xS(){},
xT:function xT(){},
it:function it(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a4:function a4(a,b){this.a=a
this.b=b},
qr:function qr(a,b){this.a=a
this.b=b},
qs:function qs(){},
qt:function qt(){},
EV(a){return new Uint8Array(A.be(a))},
t1:function t1(){},
pZ:function pZ(a,b,c){this.b=a
this.c=b
this.d=c},
Ex(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cA
if(r===B.J){r=a.f
r.toString
r=!B.b.E(r,b)}else r=!1
if(r)return B.cF
return s
case 1:case 4:return!A.a9(b)?B.cB:s
case 2:if(typeof b!="number")return B.b7
if(!isFinite(b))return B.b7
return s
case 3:return!A.bv(b)?B.cC:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cD:s
case 7:return!t.j.b(b)?B.cE:s}},
dw(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=a.gdi(),i=t.N,h=t.X,g=A.m(["id",e],i,h)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
g.j(0,l,A.Eh(n,f.h(0,l),new Uint8Array(A.be(B.e.A(q+l+"\x00"+e))),m))}k=A.u(i,h)
for(i=f.ga0(),i=i.gt(i);i.k();){h=i.gn()
s=h.a
if(s==="id"||s==="archived"||j.E(0,s))continue
k.j(0,s,h.b)}g.j(0,"extra",k.a===0?"":A.ak(k))
g.j(0,"archived",b?1:0)
g.j(0,"hidden",0)
return g},
Ew(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.Eh(b,c,new Uint8Array(A.be(B.e.A(a.a+"\x00"+b.a+"\x00"+f))),s)},
Nn(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gdi()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.Eh(n,g.h(0,l),new Uint8Array(A.be(B.e.A(q+l+"\x00"+f))),m))}k=A.u(t.N,t.X)
for(s=g.ga0(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.E(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ak(k))
a.push(c?1:0)
a.push(0)},
bP(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.u(j,i),g=b.h(0,"extra")
if(typeof g=="string"&&g.length!==0){s=B.h.aH(g,null)
if(t.f.b(s))for(j=A.bo(s,j,i),j=new A.aN(j,A.n(j).i("aN<1,2>")).gt(0);j.k();){r=j.d
i=r.a
if(B.aG.E(0,i))continue
h.j(0,i,r.b)}}h.j(0,"id",b.h(0,"id"))
for(j=a.c,i=j.length,q=a.a,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
n=o.a
m=b.h(0,n)
l=A.a7(b.h(0,"id"))
h.j(0,n,A.Eg(o,m,c,d,l==null?"":l,q))}h.j(0,k,J.x(b.h(0,k),1))
return h},
NZ(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.E(b);s.k();)r.push(A.bP(a,s.gn(),c,d))
return r},
O_(a,b,c,d,e){var s,r,q,p,o,n,m=A.l([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.p)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a0(p,a.eh(p)))}s=A.l([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.Mg(o.gn(),m,r,c,e,n))
return s},
Mg(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a7(a.h(0,"id"))
l.j(0,p,A.Eg(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
Eg(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=null,k=' row: encrypted field "'
if(b==null)return l
if(a.e){if(c==null)p=l
else p=c
s=p
if(s==null)throw A.b(A.A('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.dj("Corrupt "+f+k+a.a+'" must be TEXT ciphertext but is '+J.c5(b).l(0)+"."))
r=null
try{r=B.o.f7(s.uF(B.as.A(b),new Uint8Array(A.be(B.e.A(f+"\x00"+a.a+"\x00"+e)))))}catch(o){q=A.D(o)
n=A.dj("Corrupt "+f+k+a.a+'" failed to decrypt ('+A.r(q)+").")
throw A.b(n)}m=a.b
A:{if(B.B===m){n=J.x(r,"1")||J.x(r,"true")
break A}if(B.U===m||B.W===m){n=A.aK(r)
break A}if(B.V===m){n=A.O2(r)
break A}if(B.X===m||B.Y===m){n=B.h.aH(r,l)
break A}n=r
break A}return n}n=a.b
if(n===B.B)return J.x(b,1)
if(n===B.X||n===B.Y){if(typeof b!="string")throw A.b(A.dj("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c5(b).l(0)+"."))
return B.h.aH(b,l)}return b},
Eh(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.A('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.Z(b)
break
case 6:case 7:s=A.ak(b)
break
default:A.G(b)
s=b}r=d.vl(B.e.A(s),c)
return B.ar.gfe().A(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.ak(b)
default:return b}},
bj(a,b){var s,r,q,p,o,n="archived",m=a.gdi(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.p)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga0(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.E(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
Cq(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gdi(),i=A.l([],t.iE)
i.push(new A.a0("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a0(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga0(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.E(0,o))continue
i.push(new A.a0(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dE)
B.b.ct(i,new A.Cr())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.p)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a9(r.a,null)
a.a+=k
o=A.EF(k)
a.a+=":"
m=m+o+1+A.cl(a,r.b)}a.a+="}"
return m+1},
d9:function d9(a,b){this.a=a
this.b=b},
Cr:function Cr(){},
JU(a){var s=A.dW(null,null,t.fq),r=t.N
s=new A.u9(a,s,A.u(r,t.g8),A.u(r,t.dz),new A.th(A.O8(),A.u(r,t.f6)),A.u(r,t.oX))
s.pa(a,B.ch)
return s},
CV(a){var s,r,q,p
A:{if(a instanceof A.j0){s=A.MZ(a.a)
break A}if(a instanceof A.jo){s=new A.cc(A.CV(a.a))
break A}if(a instanceof A.ii){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.CV(r[p]))
s=new A.dy(s)
break A}if(a instanceof A.ij){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.CV(r[p]))
s=new A.d5(s)
break A}throw A.b(A.eR(u.P))}return s},
MZ(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.al(m,n,B.j)
return new A.al(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.S("neq(null) matches no rows; use isNotNull.",o))
return new A.cc(new A.al(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.V('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.al(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.j
if(B.b.E(q,o))throw A.b(A.V("inValues does not accept null \u2014 use isNull().",o))
return new A.al(m,"inValues",q)
case 7:p=a.d
if(p==null)p=B.j
if(p.length!==2)throw A.b(A.S("between requires exactly two values.",o))
return new A.al(m,"between",p)
case 8:return new A.al(m,"startsWith",[a.c])
case 9:return new A.al(m,"endsWith",[a.c])
case 10:return new A.al(m,"contains",[a.c])
case 11:return new A.al(m,n,B.j)
case 12:return new A.cc(new A.al(m,n,B.j))}},
fa:function fa(){},
B_:function B_(a){this.a=a},
ps:function ps(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=null
_.w=$
_.x=e},
hS:function hS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
u9:function u9(a,b,c,d,e,f){var _=this
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
uD:function uD(a){this.a=a},
uE:function uE(){},
uF:function uF(a,b){this.a=a
this.b=b},
uG:function uG(){},
uR:function uR(a,b){this.a=a
this.b=b},
v1:function v1(){},
v2:function v2(a,b){this.a=a
this.b=b},
v3:function v3(a,b){this.a=a
this.b=b},
v4:function v4(a,b){this.a=a
this.b=b},
v5:function v5(a,b){this.a=a
this.b=b},
v6:function v6(a,b){this.a=a
this.b=b},
v7:function v7(a,b){this.a=a
this.b=b},
uH:function uH(){},
uI:function uI(){},
uJ:function uJ(){},
uK:function uK(){},
uL:function uL(){},
uM:function uM(){},
uN:function uN(a){this.a=a},
uO:function uO(a){this.a=a},
uP:function uP(){},
uQ:function uQ(){},
uS:function uS(){},
uT:function uT(a){this.a=a},
uU:function uU(){},
uV:function uV(){},
uW:function uW(){},
uX:function uX(){},
uY:function uY(){},
uZ:function uZ(a){this.a=a},
v_:function v_(a){this.a=a},
v0:function v0(a,b){this.a=a
this.b=b},
uo:function uo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
up:function up(){},
uq:function uq(a,b,c){this.a=a
this.b=b
this.c=c},
ur:function ur(){},
uu:function uu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uv:function uv(){},
uc:function uc(a){this.a=a},
ua:function ua(a,b,c){this.a=a
this.b=b
this.c=c},
ub:function ub(a){this.a=a},
ut:function ut(a){this.a=a},
us:function us(a){this.a=a},
uz:function uz(a,b){this.a=a
this.b=b},
uA:function uA(a,b,c){this.a=a
this.b=b
this.c=c},
uB:function uB(a,b){this.a=a
this.b=b},
uC:function uC(a,b,c){this.a=a
this.b=b
this.c=c},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
ul:function ul(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
un:function un(a,b){this.a=a
this.b=b},
um:function um(a,b){this.a=a
this.b=b},
uf:function uf(a){this.a=a},
ud:function ud(){},
ue:function ue(){},
uw:function uw(a){this.a=a},
ux:function ux(a){this.a=a},
uy:function uy(a,b){this.a=a
this.b=b},
ui:function ui(a,b){this.a=a
this.b=b},
ug:function ug(){},
uh:function uh(){},
Fa(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
lD:function lD(a,b){this.a=a
this.b=b},
iC:function iC(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.d=!1
_.f=_.e=null},
rZ:function rZ(){},
rY:function rY(){},
t_:function t_(){},
rX:function rX(a){this.a=a},
Jr(a){return'"'+A.C(a,'"','""')+'"'},
Jq(a,b){var s,r,q,p=a.a,o=J.I(p),n=b.a,m=J.I(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qO:function qO(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iB:function iB(a){this.a=a},
rW:function rW(a){this.a=a},
rV:function rV(){},
rU:function rU(a){this.a=a},
rT:function rT(a,b){this.a=a
this.b=b},
rQ:function rQ(a){this.a=a},
rR:function rR(a){this.a=a},
rS:function rS(){},
V(a,b){return new A.e0(b,a)},
dj(a){return new A.di(a)},
jD(a){return new A.jC(a)},
FO(a){return new A.jH(a)},
aB(a){return new A.he(a)},
tp(a){return new A.iN(a)},
DQ(a){return new A.jP(a)},
Fy(a){return new A.j8(a)},
F7(a){return new A.ix(a)},
Dl(a){return new A.fD(a)},
I4(a,b){var s,r="UNIQUE constraint failed",q=J.Z(a),p=a instanceof A.cf,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.E(q,"PRIMARY KEY")&&!B.a.E(q,r)
else p=!0
if(p)return new A.jv("PRIMARY KEY constraint violated.")
if(o===2067||B.a.E(q,r)){s=A.GY(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.hu(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.E(q,"NOT NULL constraint failed")){p=A.GY(q,"NOT NULL constraint failed:")
return new A.h0(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.E(q,"CHECK constraint failed")||o===275||n===275)return new A.iv("CHECK constraint violated.")
if(B.a.E(q,"FOREIGN KEY")||o===787||n===787)return new A.iM("FOREIGN KEY constraint violated.")
if(B.a.E(q,"database or disk is full"))return new A.di("Database full: "+A.r(a))
return new A.di("SQLite error: "+A.r(a))},
GY(a,b){var s,r,q,p,o,n,m=B.a.bX(a,b)
if(m<0)return"?"
s=B.a.ab(a,m+b.length)
r=s.length
q=B.a.bX(s,",")
if(q>=0)r=q
p=B.a.bX(s,"(")
s=B.a.c2(B.a.B(s,0,p>=0&&p<r?p:r))
o=B.a.cS(s,".")
s=B.a.c2(o>=0?B.a.ab(s,o+1):s)
if(B.a.T(s,'"')&&B.a.bW(s,'"')){n=B.a.B(s,1,s.length-1)
s=A.C(n,'""','"')}return s.length===0?"?":s},
dM:function dM(){},
e0:function e0(a,b){this.b=a
this.a=b},
hu:function hu(a,b,c){this.b=a
this.c=b
this.a=c},
h0:function h0(a,b){this.b=a
this.a=b},
iv:function iv(a){this.a=a},
jv:function jv(a){this.a=a},
iM:function iM(a){this.a=a},
di:function di(a){this.a=a},
jE:function jE(a){this.a=a},
jC:function jC(a){this.a=a},
jH:function jH(a){this.a=a},
he:function he(a){this.a=a},
jV:function jV(a){this.a=a},
iN:function iN(a){this.a=a},
jP:function jP(a){this.a=a},
j8:function j8(a){this.a=a},
ix:function ix(a){this.a=a},
fD:function fD(a){this.a=a},
jB:function jB(a){this.a=a},
iG:function iG(a){this.b=a},
Fe(a){return A.pP("lp_file_refs",new A.t3(a))},
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
t3:function t3(a){this.a=a},
vh:function vh(a,b){this.a=a
this.b=b},
vi:function vi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vk:function vk(a){this.a=a},
vl:function vl(a){this.a=a},
vm:function vm(a){this.a=a},
vn:function vn(a){this.a=a},
vo:function vo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vj:function vj(a,b){this.a=a
this.b=b},
Nj(){return new A.aH(Date.now(),0,!1)},
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
th:function th(a,b){this.f=a
this.r=b},
tk:function tk(){},
ti:function ti(a){this.a=a},
tj:function tj(){},
md:function md(a){this.b=0
this.c=a
this.d=$},
lt(a){var s=$.EH()
if(!s.b.test(a))throw A.b(A.S('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
F_(a){return new A.fu(a)},
ip(a,b){return new A.io(a,b)},
kY(a,b,c,d,e,f){return A.OA(a,b,c,d,e,f)},
OA(a,b,c,a0,a1,a2){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d
var $async$kY=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=t.i5
f=A.l([],g)
e=new A.hD(A.d_(new A.pl(new A.CW(f),A.l([],g),t.mI)))
d=0
g=new A.cD(A.cE(a,"stream",t.K),t.lj)
p=3
k=t.D
case 6:s=8
return A.a(g.k(),$async$kY)
case 8:if(!a4){s=7
break}m=g.gn()
j=a2.$1(m)
if(!(j instanceof A.w)){i=new A.w($.B,k)
i.a=8
i.c=j
j=i}s=9
return A.a(j,$async$kY)
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
return A.a(g.v(),$async$kY)
case 10:s=n.pop()
break
case 5:e.a.q()
if(c!=null&&!J.x(d,c))throw A.b(A.A("Size mismatch: expected "+A.r(c)+" but got "+A.r(d)))
h=A.au(B.b.gao(f).a)
A.lt(h)
if(b!=null&&h!==b)throw A.b(A.A("SHA-256 mismatch: expected "+b+" but got "+h))
q=new A.nM(h)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kY,r)},
qf:function qf(){},
fu:function fu(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
nM:function nM(a){this.a=a},
CW:function CW(a){this.a=a},
iJ:function iJ(a){this.d=a},
t4:function t4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t6:function t6(a,b){this.a=a
this.b=b},
t7:function t7(a,b,c){this.a=a
this.b=b
this.c=c},
t5:function t5(a,b,c){this.a=a
this.b=b
this.c=c},
t8:function t8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
t9:function t9(a){this.a=a},
ta:function ta(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tb:function tb(){},
tc:function tc(a){this.a=a},
td:function td(a){this.a=a},
te:function te(a){this.a=a},
tf:function tf(){},
OD(a,b,c){a.uw(!0,new A.D1(c),"lp_norm_"+b)},
Ey(a,b,c,d){var s,r='"'+A.C(d,'"','""')+'"',q=b.a
if(q.gF(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.C(c,'"','""')+'".'+r
return'"'+A.C("lp_norm_"+a,'"','""')+'"('+s+")"},
D1:function D1(a){this.a=a},
v8:function v8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
Mo(){return Date.now()},
pF(a){var s,r,q
if(t.G.b(a)){s=A.u(t.N,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pF(q.b))}return s}if(t.f.b(a)){s=A.u(t.z,t.X)
for(r=a.ga0(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pF(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.pF(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.be(a))
return a},
d8(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=null,r=null
return A.JW(a,b,c,d,e,f,g,h,i,j,k,l,m)},
JW(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$d8=A.c(function(c0,c1){if(c0===1){o.push(c1)
s=p}for(;;)switch(s){case 0:a2=null
a3=null
a4=null
a4=a9
p=4
s=7
return A.a(A.cO(a4,b6),$async$d8)
case 7:s=8
return A.a(A.eT(a4,b6),$async$d8)
case 8:n=c1
i=0
case 9:if(!(i<3)){s=11
break}m=B.cP[i]
s=12
return A.a(a4.O(m),$async$d8)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.d5[i]
s=16
return A.a(a4.O(l),$async$d8)
case 16:case 14:++i
s=13
break
case 15:h=a4
g=n
f=b4==null?A.Oq():b4
e=a3
d=a2
c=new A.n8()
b=new A.mI(b5,h,g,c,b3,b0,b8,a8,e,a7,b1,d,f,A.u(t.N,t.nv),b2,b9,new A.qr(A.dW(null,null,t.iv),A.dW(null,null,t.oZ)))
a=new A.zk(A.bf(null,t.H),c.gx0())
b.z=a
d=b.a=new A.v8(b,h,g,a,c,f,e,b1,d,a8,b2,b9)
b.b=new A.yo(d)
b.c=new A.vU()
b.d=new A.xx()
e=$.Db()
b.dx=new A.w5(b,e)
b.dy=new A.w0(b,e)
b.fr=new A.r_(b)
b.fx=new A.vh(b,a7)
b.e=new A.vr(d)
b.f=new A.xE(d)
d=A.JU(d)
b.r!==$&&A.ej()
b.r=d
k=b
s=17
return A.a(A.mJ(a4,k.db),$async$d8)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
g=k.f
g===$&&A.t()
s=21
return A.a(g.aT(j),$async$d8)
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
return A.a(a4.q(),$async$d8)
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
return A.f($async$d8,r)},
cO(a,b){return A.JV(a,b)},
JV(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cO=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.bh?2:3
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
mJ(a,b){var s=0,r=A.h(t.H),q,p
var $async$mJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.bH("lp_migrations","version = ?",[1]),$async$mJ)
case 3:if(p.d4(d)){s=1
break}s=4
return A.a(a.aF(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$mJ)
case 4:case 1:return A.e(q,r)}})
return A.f($async$mJ,r)},
nK:function nK(a,b,c){this.a=a
this.c=b
this.e=c},
wK:function wK(a){this.a=a},
mI:function mI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
p2:function p2(){},
vr:function vr(a){this.a=a},
vu:function vu(a){this.a=a},
vt:function vt(a,b){this.a=a
this.b=b},
vs:function vs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fV(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.x
h=b.x
g=A.a1(h).i("aq<1>")
f=A.N(new A.aq(h,new A.vP(c,b),g),g.i("o.E"))
B.b.ct(f,new A.vQ())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.db,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aB('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jQ()
$.l1()
j.aC()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aU(a,b,m),$async$fV)
case 8:s=6
break
case 7:s=9
return A.a(A.j7(a,b,m),$async$fV)
case 9:case 6:if(j.b==null)j.b=$.nd.$0()
s=10
return A.a(A.fW(i,j.gmZ(),o,q+l,p,l),$async$fV)
case 10:case 3:f.length===h||(0,A.p)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aB('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fV)
case 11:return A.e(null,r)}})
return A.f($async$fV,r)},
fW(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fW=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b6("SELECT MAX(version) AS m FROM lp_migrations"),$async$fW)
case 2:q=p.fi(h)
if(q==null)q=0
s=3
return A.a(a.aF(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fW)
case 3:return A.e(null,r)}})
return A.f($async$fW,r)},
j7(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$j7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.x
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b6("PRAGMA table_info("+('"'+A.C(k,'"','""')+'"')+")"),$async$j7)
case 2:i=h.bW(new g.e2(f.bF(e,new A.vL(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.EI()
if(!m.b.test(n))A.v(A.aB('Field "'+n+u.Z))
if(o.c)throw A.b(A.aB('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.E(0,n)){s=4
break}m=A.C(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.C(n,'"','""')+'"')+" "+o.gl1()),$async$j7)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.p)(j),++p
s=3
break
case 5:s=c.d!=null?7:8
break
case 7:s=9
return A.a(A.eJ(a,b,c),$async$j7)
case 9:case 8:return A.e(null,r)}})
return A.f($async$j7,r)},
eJ(a4,a5,a6){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eJ=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a=a4.x
a0=a5.a
a1="migration:"+a0+":"+a6.a+":cursor"
s=2
return A.a(A.mS(a,a1),$async$eJ)
case 2:a2=a8
a3=A.h4(a2==null?"":a2,null)
if(a3==null)a3=0
q=t.af,p=t.b3,o=a4.cx,n=a4.cy,m=a6.d,l=t.kW,k=t.P
case 3:j={}
s=5
return A.a(a.ae("SELECT rowid, * FROM "+('"'+A.C(a0,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[a3,1e4]),$async$eJ)
case 5:i=a8
h=J.I(i)
if(h.gF(i)){s=4
break}g=A.l([],l)
j.a=a3
f=h.gt(i)
case 6:if(!f.k()){s=7
break}e=f.gn()
d=e.h(0,"rowid")
d.toString
j.a=A.aj(d)
c=A.bP(a5,e,o,n)
e=m.$1(c)
if(!p.b(e)){d=new A.w($.B,q)
d.a=8
d.c=e
e=d}s=8
return A.a(e,$async$eJ)
case 8:b=a8
if(b.gS(b)){e=j.a
d=A.a7(c.h(0,"id"))
g.push(new A.ea(e,d==null?"":d,b))}s=6
break
case 7:s=g.length!==0?9:11
break
case 9:s=12
return A.a(a.a1(new A.vM(j,g,a5,a4,a1),k),$async$eJ)
case 12:s=10
break
case 11:s=13
return A.a(A.fU(a,a1,B.c.l(j.a)),$async$eJ)
case 13:case 10:if(h.gm(i)<1e4){s=4
break}a3=j.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$eJ,r)},
aU(a,b,c){return A.K6(a,b,c)},
K6(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aU=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.x
if(!b0.at)throw A.b(A.Dl('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.iB(b0.y).k8(b1)
j=A.K8(b0.w,a2,a3)
p=4
s=7
return A.a(A.mS(a7,l),$async$aU)
case 7:i=b4
a3=b0.f
a3===$&&A.t()
s=8
return A.a(a3.hQ(j),$async$aU)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.Dl('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.mT(a7,m),$async$aU)
case 9:g=b4
s=10
return A.a(A.mT(a7,n),$async$aU)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b6("SELECT COUNT(*) c FROM "+('"'+A.C(m,'"','""')+'"')),$async$aU)
case 13:a0=a9.fi(b4)
e=a0==null?0:a0
a3=A.C(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.C(n,'"','""')+'"')),$async$aU)
case 14:s=15
return A.a(A.cP(b0,a7,b1,k,l,e),$async$aU)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.C(m,'"','""')+'"')),$async$aU)
case 16:s=h?17:18
break
case 17:s=19
return A.a(a3.hY(j),$async$aU)
case 19:case 18:s=20
return A.a(A.fU(a7,l,"rebuilding"),$async$aU)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.C(j,"'","''")+"'"),$async$aU)
case 21:a3=k.b
a4=A.C(n,'"','""')
d=B.a.kI(a3,'"'+a4+'"','"'+A.C(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aU)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ae("SELECT rowid, * FROM "+('"'+A.C(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aU)
case 25:b=b4
if(J.bw(b)){s=24
break}s=26
return A.a(a7.a1(new A.vO(b,b1,b0,b2,m),a3),$async$aU)
case 26:a4=J.T(J.pX(b),"rowid")
a4.toString
c=A.aj(a4)
if(J.an(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b6("SELECT COUNT(*) c FROM "+('"'+A.C(n,'"','""')+'"')),$async$aU)
case 27:a5=a9.fi(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b6("SELECT COUNT(*) c FROM "+('"'+A.C(m,'"','""')+'"')),$async$aU)
case 28:e=a9.fi(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.A('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.C(n,'"','""')+'"')),$async$aU)
case 29:a3=A.C(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.C(n,'"','""')+'"')),$async$aU)
case 30:s=31
return A.a(A.cP(b0,a7,b1,k,l,a),$async$aU)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.D(a8)
if(a3 instanceof A.fD)throw a8
else if(a3 instanceof A.cf){a1=a3
throw A.b(A.Dl('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aU,r)},
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
l=m.$ti.i("Y<L.E,k>")
k=new A.Y(m,A.pO(),l).C(0,", ")
j=new A.Y(m,new A.vN(c,q),l).C(0,", ")
q=A.C(n,'"','""')
s=16
return A.a(b.O("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.C(p,'"','""')+'"')),$async$cP)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.b6("SELECT COUNT(*) c FROM "+('"'+A.C(q,'"','""')+'"')),$async$cP)
case 17:i=h.fi(a0)
if((i==null?0:i)!==f)throw A.b(A.A('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.fU(b,e,"done"),$async$cP)
case 18:return A.e(null,r)}})
return A.f($async$cP,r)},
mT(a,b){var s=0,r=A.h(t.y),q,p
var $async$mT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ae("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mT)
case 3:q=p.d4(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mT,r)},
K8(a,b,c){var s=null,r=$.ih(),q=r.uM(a),p=A.dS(a,r.a).gk0()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.ne(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
K4(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===b)return p}return null},
Fx(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.V('Field "'+s+'" is required.',s))}if(b==null)return
r=A.Ex(a,b)
if(r!=null)throw A.b(A.V(A.K5(a,b,r),a.a))},
K7(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
A.Fx(p,b.h(0,p.a))}},
K5(a,b,c){var s,r=a.a,q=J.c5(b)
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
mS(a,b){var s=0,r=A.h(t.U),q,p,o
var $async$mS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.nr("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$mS)
case 3:p=d
o=J.I(p)
q=o.gF(p)?null:A.a7(J.T(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mS,r)},
fU(a,b,c){var s=0,r=A.h(t.H)
var $async$fU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cl(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.S),$async$fU)
case 2:return A.e(null,r)}})
return A.f($async$fU,r)},
Mp(){return Date.now()},
vP:function vP(a,b){this.a=a
this.b=b},
vQ:function vQ(){},
vL:function vL(){},
vM:function vM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vO:function vO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vN:function vN(a,b){this.a=a
this.b=b},
vU:function vU(){},
c4(a){var s=A.u(t.N,t.X)
a.a5(0,new A.D6(s))
return s},
Kr(a,b,c,d){return new A.jx(new A.wY(c,b,d,a))},
O5(a,b){var s=a.e,r=s.a
if(!(r!=null&&A.Hn(r)==null))if(!s.b.gaU().bj(0,A.Ow()))if(a.z==null){r=a.y
if(!r.gS(r))B.b.bj(a.x,new A.CC())}return!0},
N6(a){return a!=null&&A.Hn(a)==null},
Hn(a){var s,r,q=A.d2(a)
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
Hy(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(b==null)return a
if(!t.f.b(b))throw A.b(A.V('Store policy for "'+a.a+'" must be a map.',null))
s=A.c4(b)
r=s.h(0,"conflictPolicy")
q=r==null?a.e:A.Mk(r,a.a,c)
p=a.a
o=A.Ml(s.h(0,"validator"),p,c)
n=A.Mh(s.h(0,"documentMigrations"),a,c)
m=A.Mi(s.h(0,"migrationTransforms"),a,c)
if(q===a.e&&o==null&&n.gF(n)&&m==null)return a
l=m==null?a.x:m
k=n.gF(n)?a.y:n
j=o==null?a.z:o
return new A.c7(p,a.b,a.c,a.d,q,a.f,a.r,a.w,l,k,j,a.Q,t.bU)},
Mk(a,b,c){var s,r,q=A.Ce(a,'conflictPolicy of "'+b+'"'),p=q.h(0,"collectionResolver"),o=q.h(0,"fieldOverrides"),n=A.u(t.N,t.pb)
if(o!=null)A.Ce(o,'fieldOverrides of "'+b+'"').a5(0,new A.C6(n,b,c))
s=p==null?null:A.GU(p,null,c,"record",'collectionResolver of "'+b+'"')
r=J.x(q.h(0,"editsUnarchive"),!0)
return new A.lG(s,n,r,typeof q.h(0,"missingRemote")=="string"?B.b.cj(B.cJ,new A.C7(q),new A.C8(b,q)):B.aC)},
GU(a,b,c,d,e){var s,r,q,p=" must be a number.",o=A.Ce(a,e),n=A.Ha(o.h(0,"kind"),e,"kind")
switch(n){case"remoteWins":return B.Q
case"localWins":return B.bX
case"setUnionDeletionWins":return B.c0
case"appendOnlyLines":return B.bI
case"appendOnlyList":return B.bJ
case"counter":s=o.h(0,"min")
r=o.h(0,"max")
if(s!=null&&typeof s!="number")throw A.b(A.V('"min" at '+e+p,null))
if(r!=null&&typeof r!="number")throw A.b(A.V('"max" at '+e+p,null))
return new A.ev(A.BT(s),A.BT(r))
case"custom":q=A.Ha(o.h(0,"id"),e,"id")
return A.Kr(b,q,c,d)
default:throw A.b(A.V('Unknown resolver kind "'+n+'" at '+e+".",null))}},
Ml(a,b,c){if(a==null)return null
if(!A.bv(a)||!a)throw A.b(A.V('"validator" of "'+b+'" must be true when present.',null))
return new A.C9(c,b)},
Mh(a,b,c){var s,r,q,p,o
if(a==null)return B.bc
s=A.H9(a,'documentMigrations of "'+b.a+'"')
r=A.u(t.S,t.mi)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p){o=s[p]
r.j(0,o,new A.C3(c,b,o))}return r},
Mi(a,b,c){var s,r,q,p,o,n,m,l
if(a==null)return null
s=A.H9(a,'migrationTransforms of "'+b.a+'"')
r=A.u(t.S,t.y)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.j(0,s[p],!0)
q=A.l([],t.c0)
for(o=b.x,n=o.length,p=0;p<o.length;o.length===n||(0,A.p)(o),++p){m=o[p]
l=m.a
q.push(r.I(l)?new A.bZ(l,m.b,m.c,new A.C4(c,b,m)):m)}return q},
Ce(a,b){if(t.f.b(a))return A.c4(a)
throw A.b(A.V("The value at "+b+" must be a map.",null))},
Em(a,b,c){if(t.f.b(a))return A.c4(a)
throw A.b(A.V('"'+c+'" at '+b+" must be a map.",null))},
Ha(a,b,c){if(typeof a=="string")return a
throw A.b(A.V('"'+c+'" at '+b+" must be a string.",null))},
N5(a,b,c){var s,r,q,p
if(!t.j.b(a))throw A.b(A.V('"'+c+'" at '+b+" must be a list.",null))
s=A.l([],t.s)
for(r=J.E(a),q='"'+c+'" at '+b+" must contain only strings.";r.k();){p=r.gn()
if(typeof p=="string")s.push(p)
else s.push(A.v(A.V(q,null)))}return s},
H9(a,b){var s,r,q,p
if(!t.j.b(a))throw A.b(A.V("The value at "+b+" must be a list.",null))
s=A.l([],t.t)
for(r=J.E(a),q="The value at "+b+" must contain only ints.";r.k();){p=r.gn()
if(A.a9(p))s.push(p)
else s.push(A.v(A.V(q,null)))}return s},
D6:function D6(a){this.a=a},
D5:function D5(){},
jx:function jx(a){this.a=a},
wY:function wY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
CC:function CC(){},
C6:function C6(a,b,c){this.a=a
this.b=b
this.c=c},
C7:function C7(a){this.a=a},
C8:function C8(a,b){this.a=a
this.b=b},
C9:function C9(a,b){this.a=a
this.b=b},
C3:function C3(a,b,c){this.a=a
this.b=b
this.c=c},
C4:function C4(a,b,c){this.a=a
this.b=b
this.c=c},
n8:function n8(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
v9:function v9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Bt:function Bt(){},
xn:function xn(a,b){this.a=a
this.b=b},
kU(a){var s=A.C(a,"\\","\\\\")
s=A.C(s,"%","\\%")
return A.C(s,"_","\\_")},
Ef(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.al){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.v(A.aD(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aD(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aD(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gao(a.c)==null)throw A.b(A.aD(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.cc){A.Ef(a.a)
break A}p=a instanceof A.dy
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d5
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aD(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.p)(n),++m)A.Ef(n[m])}break A}},
C0(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.al)return A.GS(a,!1,b)
if(a instanceof A.cc){s=a.a
r=A.C0(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.d5||s instanceof A.cc){s=new A.a0("NOT "+q,p)
break A}s=new A.a0("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dy){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){l=A.C0(s[m],!1)
o.push(l.a)
B.b.D(p,l.b)}k=B.b.C(o," AND ")
return new A.a0(b?k:"("+k+")",p)}if(a instanceof A.d5){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){j=A.Me(s[m])
o.push(j.a)
B.b.D(p,j.b)}return new A.a0("("+B.b.C(o," OR ")+")",p)}throw A.b(A.eR(u.M))},
Me(a){var s
A:{if(a instanceof A.al){s=A.GS(a,!0,!1)
break A}s=A.C0(a,!1)
break A}return s},
GS(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.C(a.a,'"','""')+'"',n=A.N(a.c,t.X),m=a.b
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
n[0]=A.kU(A.G(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kU(A.G(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kU(A.G(r))+"%"
break
default:throw A.b(A.aD(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a0(q?"("+s+")":s,n)},
dc:function dc(){},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a){this.a=a},
dy:function dy(a){this.a=a},
d5:function d5(a){this.a=a},
Ks(a,b){var s,r=$.h8.G(0,a)
if(r!=null){$.h8.j(0,a,r)
return r}s=b.$0()
if($.h8.a>=512)$.h8.G(0,new A.R($.h8,A.n($.h8).i("R<1>")).gH(0))
$.h8.j(0,a,s)
return s},
b5:function b5(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
nh:function nh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
xk:function xk(a,b,c){this.a=a
this.b=b
this.c=c},
xf:function xf(){},
xg:function xg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xh:function xh(a){this.a=a},
xi:function xi(){},
xj:function xj(){},
KD(a){var s,r,q=B.a.c2(a)
if(q.length===0)return
s=!0
if(!B.a.E(q,'"')){r=A.ah("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.T(q,"-")){s=A.ah("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.V("Invalid search term: "+a,null))},
KC(a){var s,r,q,p
for(s=B.a.d2(a,A.ah("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
if(p.length!==0&&new A.jF(p).gm(0)<3)throw A.b(A.V('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cS:function cS(a,b){this.a=a
this.b=b},
xG:function xG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xx:function xx(){},
kP(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.dM)throw q
else{s=r
r=A.dj("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
Fd(a){return A.kP(new A.t2(a))},
JM(a){return A.kP(new A.tW(a))},
JD(a){return A.kP(new A.to(a))},
Fi(a,b){var s
if(new A.jF(a).gm(0)!==1)throw A.b(A.aB('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aB('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
JC(a){return A.kP(new A.tn(a))},
JB(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga0(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
KM(a){return A.kP(new A.xW(a))},
qx(a,b){return A.kP(new A.qy(a,b))},
Cm(a,b,c,d){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i
var $async$Cm=A.c(function(e,f){if(e===1)return A.d(f,r)
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
return A.a(j,$async$Cm)
case 8:l=f
case 7:case 4:++p
s=3
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cm,r)},
ca:function ca(a,b){this.a=a
this.b=b},
b1:function b1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
t2:function t2(a){this.a=a},
iS:function iS(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
tW:function tW(a){this.a=a},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
to:function to(a){this.a=a},
eB:function eB(a){this.a=a},
tn:function tn(a){this.a=a},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xW:function xW(a){this.a=a},
dO:function dO(a,b){this.a=a
this.b=b},
lG:function lG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
qy:function qy(a,b){this.a=a
this.b=b},
DN(a){var s,r=A.Mf(a),q=A.l([],t.s),p=a.e
if(p.a!=null)q.push("conflictResolver")
s=p.b
if(s.gS(s))q.push("fieldResolvers")
if(B.b.bj(a.x,new A.xA()))q.push("migrationTransform")
s=a.y
if(s.gS(s))q.push("documentMigrations")
if(a.z!=null)q.push("validatorCallback")
return new A.nv(r,A.fR(q,t.N),1,a.a,a.b,2)},
KB(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aB("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aX(0,new A.xB(),s,r)
p=q.h(0,"formatVersion")
if(!A.a9(p))throw A.b(A.aB("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.FO("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.a9(n)||!j.b(m)||!t.j.b(l)||!A.a9(k))throw A.b(A.aB('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.nv(m.aX(0,new A.xC(),s,t.X),A.fR(J.bF(l,new A.xD(),r),s),p,o,n,k)},
Mf(a){var s,r,q,p,o,n,m=a.e,l=t.N,k=t.X,j=A.cb(a.p(),l,k),i=m.b.gJ()
i=A.N(i,A.n(i).i("o.E"))
B.b.aj(i)
j.j(0,"conflictPolicy",A.m(["editsUnarchive",m.c,"missingRemote",m.d.b,"hasCollectionResolver",m.a!=null,"fieldOverrideNames",i],l,t.K))
i=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.p()
n=A.dL(null,null,l,k)
n.D(0,o)
n.j(0,"hasTransform",p.d!=null)
i.push(n)}j.j(0,"migrations",i)
l=a.y.gJ()
l=A.N(l,A.n(l).i("o.E"))
B.b.aj(l)
j.j(0,"documentMigrationVersions",l)
j.j(0,"hasValidatorCallback",a.z!=null)
return j},
nv:function nv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xA:function xA(){},
xB:function xB(){},
xC:function xC(){},
xD:function xD(){},
xE:function xE(a){this.a=a},
xF:function xF(a,b){this.a=a
this.b=b},
Je(a,b){var s,r=a.a
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
dQ:function dQ(a,b){this.a=a
this.b=b},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qK:function qK(a,b){this.a=a
this.b=b},
qN:function qN(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b){this.a=a
this.b=b},
qM:function qM(a,b){this.a=a
this.b=b},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a,b){this.a=a
this.b=b},
qC:function qC(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
qH:function qH(a,b){this.a=a
this.b=b},
qE:function qE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qD:function qD(){},
qI:function qI(){},
qB:function qB(){},
qz:function qz(){},
qA:function qA(){},
hC:function hC(){},
oJ:function oJ(){},
q1:function q1(a){this.a=a},
q2:function q2(a,b){this.a=a
this.b=b},
q3:function q3(a){this.a=a},
q4:function q4(){},
Di(a){return A.pP("lp_conflicts",new A.qZ(a))},
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
qZ:function qZ(a){this.a=a},
r_:function r_(a){this.a=a},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r1:function r1(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
r0:function r0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nQ:function nQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
yi:function yi(a){this.a=a},
y8:function y8(a){this.a=a},
yg:function yg(a,b){this.a=a
this.b=b},
yf:function yf(a){this.a=a},
ye:function ye(a,b){this.a=a
this.b=b},
yh:function yh(a){this.a=a},
yb:function yb(a,b){this.a=a
this.b=b},
yc:function yc(){},
yd:function yd(){},
y9:function y9(){},
ya:function ya(a){this.a=a},
eH(a){return new A.da(a)},
EE(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fk(a,b)
r=A.bj(a,s)
q=A.ak(r)
p=A.au(B.m.A(B.e.A(q)).a)
return new A.eL(b,s,q,p,k)}catch(m){l=A.D(m)
if(l instanceof A.da){o=l
return new A.eL(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.eL(b,k,k,k,l)}}},
Ov(a,b){var s,r=A.l([],t.i7)
for(s=J.E(b);s.k();)r.push(A.EE(a,s.gn()))
return r},
ED(a,b){var s=0,r=A.h(t.eT),q
var $async$ED=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Ov(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ED,r)},
fk(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bo(b.d,j,i),g=a.gdi(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.eH('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bv(r))throw A.b(A.eH('Field "archived" must be a boolean, got '+J.c5(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.eH('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Ex(o,n)
if(m!=null)throw A.b(A.eH(A.N3(o,n,m)))
q.j(0,s,n)}for(j=new A.aN(h,A.n(h).i("aN<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.E(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
N3(a,b,c){var s,r=a.a,q=J.c5(b)
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
ic(a){var s,r,q,p
if(a==null||a.length===0)return B.k
s=null
try{s=B.h.aH(a,null)}catch(q){r=A.D(q)
p=A.eH("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.eH("Corrupt payload JSON: expected an object, got "+J.c5(s).l(0)+"."))
return A.bo(s,t.N,t.X)},
da:function da(a){this.a=a},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bN(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aO(i),g=A.bW(a.gJ(),i)
g.D(0,b.gJ())
for(g=A.dr(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.p.V(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.l6(o.gJ(),new A.Cu())&&J.l6(n.gJ(),new A.Cv())){m=A.bN(A.bo(o,i,q),A.bo(n,i,q))
for(l=A.n(m),k=new A.e8(m,m.r,l.i("e8<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
NO(a,b,c){var s,r,q,p,o,n=t.N,m=A.bW(a.gJ(),n)
m.D(0,b.gJ())
m.D(0,new A.R(c,A.n(c).i("R<1>")))
s=A.u(n,t.X)
for(n=A.dr(m,m.r,A.n(m).c),m=n.$ti.c;n.k();){r=n.d
if(r==null)r=m.a(r)
q=a.h(0,r)
p=b.h(0,r)
o=c.h(0,r)
if(B.p.V(p,o))s.j(0,r,p)
else if(B.p.V(p,q))s.j(0,r,o)
else if(B.p.V(o,q))s.j(0,r,p)
else s.j(0,r,o)}return s},
Fv(a,b,c,d,e,f,g){return new A.j6(g,e,a,d,f,b,c)},
HY(a,b,c,d,e){var s,r,q,p,o,n
if(e instanceof A.hh)return e.fI(b,c,d)
if(e instanceof A.ev){s=typeof b=="number"?b:0
r=typeof c=="number"?c:0
q=typeof d=="number"?d:0
p=A.a9(s)&&A.a9(r)&&A.a9(q)
o=s+(r-s)+(q-s)
n=e.a
if(n!=null&&o<n)o=n
n=e.b
if(n!=null&&o>n)o=n
return p?B.w.fN(o):o}if(e instanceof A.el)return e.fI(b,c,d)
if(e instanceof A.fs)return e.fI(b,c,d)
if(e instanceof A.fS)return c
if(e instanceof A.hb)return d
return d},
MY(a,b){var s,r,q,p=a.b
if(p.gF(p))return null
for(s=b;;){r=p.h(0,s)
if(r!=null)return r
q=B.a.cS(s,".")
if(q<=0)return null
s=B.a.B(s,0,q)}},
DD(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$DD=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.K3(B.c9,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$DD,r)},
K3(a,b,c,d,e,f,g){var s,r,q,p=A.bN(b,c),o=A.bN(b,f),n=A.Fv(b,p,o,c,e,f,g),m=p.a!==0&&o.a!==0,l=d.a
if(l!=null&&m){s=new A.vK(b,c,f,p,o)
r=l.al(n)
if(t.op.b(r))return r.W(s,t.r)
return s.$1(r)}l=t.N
s=A.bW(c.gJ(),l)
s.D(0,new A.R(f,A.n(f).i("R<1>")))
s.D(0,b.gJ())
q=A.N(s,A.n(s).c)
return A.vH(a,b,p,o,0,q,c,A.u(l,t.X),d,e,f,new A.B8(),g)},
vH(a,b,c,d,e,f,g,h,i,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j="archived"
if(e>=f.length){if(i.c)if(!new A.aq(c,new A.vI(),A.n(c).i("aq<1>")).gF(0)&&J.x(h.h(0,j),!0))h.j(0,j,!1)
return new A.aQ(h,a2.a,null)}s=f[e]
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
if(l!=null)h.j(0,s,A.HY(s,p,r,q,l))
else h.j(0,s,m)}return A.vH(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)}k=A.Fw(a,p,r,s,i,q,a0,a2,a3)
if(k instanceof A.w)return k.W(new A.vJ(h,s,f,e,b,g,a1,i,a3,a0,a,c,d,a2),t.r)
h.j(0,s,k)
return A.vH(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)},
Fw(a2,a3,a4,a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(B.p.V(a4,a7))return a4
if(B.p.V(a4,a3))return a7
if(B.p.V(a7,a3))return a4
s=t.f
r=!1
if(s.b(a4))if(s.b(a7))if(J.l6(a4.gJ(),new A.vB()))if(J.l6(a7.gJ(),new A.vC()))if(a3!=null)r=s.b(a3)&&J.l6(a3.gJ(),new A.vD())
else r=!0
if(r){r=t.N
q=t.X
p=A.bo(a4,r,q)
o=A.bo(a7,r,q)
n=a3==null?null:A.bo(s.a(a3),r,q)
s=A.aO(r)
m=n==null
l=m?null:new A.R(n,A.n(n).i("R<1>"))
if(l!=null)s.D(0,l)
s.D(0,new A.R(p,A.n(p).i("R<1>")))
s.D(0,new A.R(o,A.n(o).i("R<1>")))
k=A.u(r,q)
j=[]
for(r=s.$ti.c,l=A.dr(s,s.r,r),i=a5+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.Fw(a2,e,p.h(0,f),i+f,a6,o.h(0,f),a8,a9,b0)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.dr(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.Dr(new A.Y(j,new A.vE(),A.a1(j).i("Y<1,y<j?>>")),q).W(new A.vF(s,k),q)}a=A.MY(a6,a5)
if(a!=null){if(a instanceof A.jx){a0=B.a.ab(a5,B.a.cS(a5,".")+1)
s=t.N
r=t.X
q=A.m([a0,a3],s,r)
m=A.m([a0,a4],s,r)
l=A.m([a0,a7],s,r)
a1=a.al(A.Fv(q,A.ap([a0],s),A.ap([a0],s),m,a8,l,b0))
if(t.op.b(a1))return a1.W(new A.vG(a9,a7,a0),r)
if(a1==null||a1.b){a9.a=!0
return a7}return a1.a.h(0,a0)}return A.HY(a5,a3,a4,a7,a)}return a7},
HO(a,b,c,d,e,f){return A.DD(a,b,c,d,e,f)},
Cu:function Cu(){},
Cv:function Cv(){},
j6:function j6(a,b,c,d,e,f,g){var _=this
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
bx:function bx(){},
hb:function hb(){},
fS:function fS(){},
hh:function hh(){},
ev:function ev(a,b){this.a=a
this.b=b},
el:function el(){},
q0:function q0(a){this.a=a},
fs:function fs(){},
q_:function q_(a){this.a=a},
lO:function lO(){},
mQ:function mQ(a,b,c){this.a=a
this.b=b
this.c=c},
B8:function B8(){this.a=!1},
B6:function B6(){},
zp:function zp(){},
vK:function vK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vI:function vI(){},
vJ:function vJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
vB:function vB(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(a,b){this.a=a
this.b=b},
vG:function vG(a,b,c){this.a=a
this.b=b
this.c=c},
w0:function w0(a,b){this.a=a
this.b=b},
w2:function w2(a){this.a=a},
w3:function w3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qe:function qe(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
jA:function jA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w5:function w5(a,b){this.a=a
this.b=b},
wb:function wb(a,b){this.a=a
this.b=b},
w9:function w9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w8:function w8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
w7:function w7(a,b,c){this.a=a
this.b=b
this.c=c},
wa:function wa(a){this.a=a},
em:function em(a,b){this.a=a
this.b=b},
ng:function ng(a,b){this.b=a
this.f=b},
wZ:function wZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
x6:function x6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x5:function x5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x0:function x0(a,b,c){this.a=a
this.b=b
this.c=c},
x_:function x_(a,b,c){this.a=a
this.b=b
this.c=c},
x2:function x2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x1:function x1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x4:function x4(a,b,c){this.a=a
this.b=b
this.c=c},
x3:function x3(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
x7:function x7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
x9:function x9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xe:function xe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xc:function xc(a,b,c){this.a=a
this.b=b
this.c=c},
xb:function xb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xa:function xa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x8:function x8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xd:function xd(a,b,c,d,e,f,g,h,i,j){var _=this
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
cg:function cg(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
y5:function y5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y6:function y6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FV(a){return new A.eW(a)},
li(a){return new A.c6(a)},
JA(a){return new A.cM(a)},
Kd(a){return new A.cQ(a)},
Kf(a){return new A.eN(a)},
aV(a){return new A.h5(a)},
Oa(a){var s=a.xu(),r=new A.CF()
return A.r(r.$2(A.DJ(s),4))+"-"+A.r(r.$1(A.DH(s)))+"-"+A.r(r.$1(A.wP(s)))+" "+A.r(r.$1(A.DF(s)))+":"+A.r(r.$1(A.DG(s)))+":"+A.r(r.$1(A.DI(s)))+"."+A.r(r.$2(A.FG(s),3))+"Z"},
FU(a){var s=Date.now()
return new A.o4(a,new A.aH(s,0,!1))},
br:function br(){},
eW:function eW(a){this.a=a},
dU:function dU(a,b){this.b=a
this.a=b},
jL:function jL(a){this.a=a},
c6:function c6(a){this.a=a},
cM:function cM(a){this.a=a},
cQ:function cQ(a){this.a=a},
eN:function eN(a){this.a=a},
h5:function h5(a){this.a=a},
fF:function fF(a){this.a=a},
yj:function yj(){},
en:function en(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jz:function jz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lk:function lk(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
CF:function CF(){},
o4:function o4(a,b){this.a=a
this.c=b},
KP(a){return 0.5+B.at.nj()},
DU(a){var s,r=a.toLowerCase()
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
KQ(a){var s,r,q,p,o,n,m,l,k=null,j=A.ah("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ei(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.DU(r)
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
return A.DV(r,q,p,o,n,A.aK(s))}j=A.ah("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ei(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.DU(r)
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
return A.DV(l,q,r,p,o,A.aK(s))}j=A.ah("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ei(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.DU(r)
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
return A.DV(r,q,p,o,n,A.aK(s))}return k},
DV(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.Dk(a,b,c,d,e,f,0)
return s}catch(r){return null}},
y7:function y7(a,b){this.at=a
this.ay=b},
jy:function jy(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
yl:function yl(a,b){this.a=a
this.b=b},
Hz(a,b,c,d,e,f,g,h,i,j){var s,r=A.HQ(a,b,c,null,d,e,f,g,h,i,j),q=A.u(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.a_[s],r[s])
return q},
HQ(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.Hv(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
Hv(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
NH(a,b,c,d,e,f,g){var s,r=null,q=A.I2(B.a7,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.u(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.Z[s],q[s])
return p},
I2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.Hw(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
Hw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
HZ(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
id(a){return new A.Y(a,new A.D0(),A.a1(a).i("Y<1,k>")).C(0,", ")},
hq(a){return A.pP("lp_sync_row",new A.yk(a))},
jr(a){return A.pP("lp_outbox",new A.w6(a))},
Ke(a){return A.pP("lp_op_queue",new A.w1(a))},
kZ(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kZ=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(k,$async$kZ)
case 3:j.D(0,i.bF(h.a(d),new A.CZ(),n))
k=A.N(l,n)
k.push("pending")
k.push("failed")
k=a.ae("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kZ)
case 4:j.D(0,i.bF(h.a(d),new A.D_(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kZ,r)},
ig(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$ig=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.ev("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$ig)
case 5:s=p.bw(o.a(f))?2:4
break
case 2:q=a.aF(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$ig)
case 6:s=3
break
case 4:q=a.aI("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$ig)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ig,r)},
Cz(a,b){var s=0,r=A.h(t.H),q,p
var $async$Cz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aI(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$Cz)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Cz,r)},
cG(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cG=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nr("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cG)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.X("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cG)
case 5:o=A.a7(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Cz(a,o),$async$cG)
case 8:case 7:s=3
break
case 4:m=a.X("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cG)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cG)
case 10:s=d?11:12
break
case 11:m=a.X("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cG)
case 13:n=a.X("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cG)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cG,r)},
cU:function cU(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
D0:function D0(){},
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
yk:function yk(a){this.a=a},
cr:function cr(a,b,c,d,e,f,g,h,i,j){var _=this
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
w6:function w6(a){this.a=a},
eM:function eM(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
w1:function w1(a){this.a=a},
CZ:function CZ(){},
D_:function D_(){},
DX(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bL(a,b,c,s,d,new A.Bd())},
ob(a){var s=$.B.h(0,$.l3())
if(s instanceof A.bL&&s.a===a)return s
return null},
bL:function bL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yx:function yx(){},
yw:function yw(a,b,c){this.a=a
this.b=b
this.c=c},
Bd:function Bd(){this.a=0
this.b=null},
lZ:function lZ(a,b){this.a=a
this.b=b},
yo:function yo(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
yv:function yv(a){this.a=a},
yr:function yr(a){this.a=a},
yu:function yu(a,b,c){this.a=a
this.b=b
this.c=c},
yt:function yt(a,b,c){this.a=a
this.b=b
this.c=c},
ys:function ys(a,b,c){this.a=a
this.b=b
this.c=c},
yq:function yq(a){this.a=a},
yp:function yp(){},
oK:function oK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
A1:function A1(a,b){this.a=a
this.b=b},
A0:function A0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zZ:function zZ(a,b){this.a=a
this.b=b},
A_:function A_(a,b){this.a=a
this.b=b},
zY:function zY(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
NM(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.E(a);s.k();){r=new A.a5("")
A.cl(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aj(o)
p=B.b.C(o,"|")
b.$1(p.length)
return A.au(B.m.A(B.e.A(p)).a)},
nk:function nk(a,b,c){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
xt:function xt(){},
xs:function xs(a){this.a=a},
xu:function xu(a){this.a=a},
n3:function n3(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=null
_.a=c
_.b=d
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
w_:function w_(a){this.a=a},
fw:function fw(){},
zk:function zk(a,b){this.a=a
this.b=0
this.c=b},
zl:function zl(a,b,c){this.a=a
this.b=b
this.c=c},
KZ(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.a9(s))throw A.b(A.aR('Request "v" must be an int.'))
if(!A.a9(r)||r<0)throw A.b(A.aR('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dJ.E(0,q))throw A.b(A.aR("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.aR('Request "a" must be a map.'))
return new A.hA(s,r,q,p.aX(0,new A.yY(),t.N,t.X))},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yY:function yY(){},
or:function or(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yV:function yV(a,b,c){this.a=a
this.b=b
this.c=c},
G1(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
yT:function yT(a){var _=this
_.d=a
_.e=0
_.r=null
_.w=!1
_.x=null},
yU:function yU(a){this.a=a},
p7:function p7(a){this.a=a},
K0(a){var s,r,q
try{s=A.kS(a)
if(t.f.b(s)){r=A.c4(s)
return r}}catch(q){}return null},
K1(a){if(a instanceof A.k_)return A.kW(new A.or(3,a.a,a.b,null).p())
t.bp.a(a)
return A.DB(a.a,a.b,a.c,a.d)},
DB(a,b,c,d){return A.kW(new A.or(3,a,null,new A.yV(b,c,d)).p())},
kN(a){return A.MW(a)},
MW(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kN=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.ie()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a3(f.getDirectory(),k),$async$kN)
case 7:n=c
j=$.ih()
i=A.N(j.d2(0,"drift_db"),t.N)
m=i
J.EQ(m,j.d2(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.an(l)===0){s=9
break}s=11
return A.a(A.a3(n.getDirectoryHandle(l,{create:!1}),k),$async$kN)
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
return A.f($async$kN,r)},
pH(a,b){return A.MX(a,b)},
MX(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pH=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kN(a),$async$pH)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a3(m.getFileHandle(A.dS(b,$.ih().a).gk0(),{create:!1}),t.m),$async$pH)
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
return A.f($async$pH,r)},
pI(a,b){return A.N4(a,b)},
N4(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pI=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kN(a),$async$pI)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.ml(m,A.dS(b,$.ih().a).gk0()),$async$pI)
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
return A.f($async$pI,r)},
vd:function vd(){},
ve:function ve(a){this.a=a},
vf:function vf(a){this.a=a},
vg:function vg(a){this.a=a},
mO:function mO(a,b,c){this.a=a
this.e=b
this.f=c},
vp:function vp(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(a){this.a=a
this.b=0},
A7:function A7(a){this.a=a},
A8:function A8(a){this.a=a},
Oy(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="maxDocBytes",c="destructiveBackup",b="storePolicies",a="clockOffsetMs"
if(a0==null)return A.u(t.N,t.X)
s=t.f
if(!s.b(a0))throw A.b(A.aR("Open options must be a map."))
r=A.c4(a0)
q=t.N
p=t.X
o=A.u(q,p)
n=r.h(0,"stores")
if(n!=null){if(!t.j.b(n))throw A.b(A.aR('"stores" must be a list.'))
m=A.l([],t.oq)
for(l=J.E(n);l.k();){k=l.gn()
if(!s.b(k))A.v(A.ab("Schema must be a map: "+A.r(k),null,null))
m.push(A.qx(A.c4(k),p))}o.j(0,"stores",m)}j=r.h(0,d)
if(j!=null){if(!A.a9(j))throw A.b(A.aR('"maxDocBytes" must be an int.'))
o.j(0,d,j)}i=r.h(0,c)
if(i!=null){if(!A.bv(i))throw A.b(A.aR('"destructiveBackup" must be a bool.'))
o.j(0,c,i)}h=r.h(0,b)
if(h!=null){if(!s.b(h))throw A.b(A.aR('"storePolicies" must be a map.'))
q=A.u(q,t.G)
for(p=h.ga0(),p=p.gt(p);p.k();){m=p.gn()
l=m.a
g=J.cF(l)
f=g.l(l)
m=m.b
l=g.l(l)
if(!s.b(m))A.v(A.aR('The store policy for "'+l+'" must be a map.'))
q.j(0,f,A.c4(m))}o.j(0,b,q)}A.El(r,"groupCommitWindowMs",o,0,"the group-commit coalescing window")
A.El(r,"txSessionTtlMs",o,0,"the interactive-transaction idle deadline")
A.El(r,"callbackTimeoutMs",o,1,"the page-callback round-trip bound")
e=r.h(0,a)
if(e!=null){if(!A.a9(e))throw A.b(A.aR('"clockOffsetMs" must be an int (milliseconds).'))
o.j(0,a,e)}return o},
El(a,b,c,d,e){var s=a.h(0,b)
if(s==null)return
if(!A.a9(s))throw A.b(A.aR('"'+b+'" must be an int (milliseconds).'))
if(s<d)throw A.b(A.aR('"'+b+'" must be an int \u2265 '+d+" (milliseconds) for "+e+"."))
c.j(0,b,s)},
HW(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.c4(a).h(0,b)
return s}}catch(r){}return null},
Of(a,b){if(b!=null)return!1
return B.b.bj(a,new A.CL())},
CL:function CL(){},
CK:function CK(){},
z_:function z_(a){this.a=a},
G4(a,b,c,d){var s,r,q,p,o,n,m,l=A.l([],t.s)
for(s=A.bW(new A.R(c,A.n(c).i("R<1>")),t.N),s.D(0,new A.R(d,A.n(d).i("R<1>"))),s=A.dr(s,s.r,A.n(s).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!A.L0(c.h(0,q),d.h(0,q))){p=c.h(0,q)
o=d.h(0,q)
l.push(q+" (page: "+A.G3(p)+", worker: "+A.G3(o)+")")}}n=l.length===0?"no policy-level descriptor diverged \u2014 the divergence is inside the schema body itself":B.b.C(l,"; ")
m=b?"":" No store-policy envelope was received for this store (a stale worker asset or a dropped envelope)."
return'Schema manifest mismatch for "'+a+'": the page and the worker compiled different schemas. Diverging manifest descriptors: '+n+"."+m},
DZ(a){var s,r,q,p,o,n,m,l=a.e,k=l.b.gJ()
k=A.N(k,A.n(k).i("o.E"))
B.b.aj(k)
s=a.y.gJ()
s=A.N(s,A.n(s).i("o.E"))
B.b.aj(s)
r=a.x
q=B.b.bj(r,new A.zd())
p=A.l([],t.t)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.p)(r),++n){m=r[n]
if(m.d!=null)p.push(m.a)}B.b.aj(p)
return A.m(["version",a.b,"hasValidatorCallback",a.z!=null,"hasCollectionResolver",l.a!=null,"fieldOverrides",k,"editsUnarchive",l.c,"missingRemote",l.d.b,"documentMigrationVersions",s,"hasTransform",q,"transformVersions",p,"keepUnsyncedArchives",a.r],t.N,t.X)},
L_(a,b){var s,r,q,p=new A.z5(a),o=new A.z4(a),n=p.$1("conflictPolicy"),m=o.$1("documentMigrations"),l=o.$1("migrationTransforms"),k=n.h(0,"missingRemote")
o=t.f.b(a)&&J.x(a.h(0,"validator"),!0)
s=n.h(0,"collectionResolver")
p=new A.z6(p).$0()
r=J.x(n.h(0,"editsUnarchive"),!0)
q=typeof k=="string"?k:"conflict"
return A.m(["version",b.b,"hasValidatorCallback",o,"hasCollectionResolver",s!=null,"fieldOverrides",p,"editsUnarchive",r,"missingRemote",q,"documentMigrationVersions",m,"hasTransform",J.an(l)!==0,"transformVersions",l,"keepUnsyncedArchives",b.r],t.N,t.X)},
L0(a,b){var s,r,q,p=t.j
if(p.b(a)&&p.b(b)){p=t.N
s=J.bF(a,new A.za(),p)
r=A.N(s,s.$ti.i("a_.E"))
B.b.aj(r)
s=A.a1(b).i("Y<1,k>")
q=A.N(new A.Y(b,new A.zb(),s),s.i("a_.E"))
B.b.aj(q)
return r.length===q.length&&A.JN(r,0,p).ci(0,new A.zc(q))}return a==null?b==null:a===b},
G3(a){var s
A:{if(t.j.b(a)){s="["+J.IU(a,", ")+"]"
break A}if(a==null){s="absent"
break A}s=J.Z(a)
break A}return s},
z0:function z0(a,b){this.a=a
this.b=b
this.c=0},
z1:function z1(a,b,c){this.a=a
this.b=b
this.c=c},
z2:function z2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z3:function z3(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(){},
k_:function k_(a,b){this.b=a
this.a=b},
eZ:function eZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
ou:function ou(){},
ze:function ze(a,b,c){var _=this
_.r=$
_.c=a
_.d=b
_.e=c
_.f=null},
zf:function zf(a){this.a=a},
ot:function ot(){},
z8:function z8(a){this.a=a},
z9:function z9(){},
zd:function zd(){},
z5:function z5(a){this.a=a},
z4:function z4(a){this.a=a},
z6:function z6(a){this.a=a},
z7:function z7(){},
za:function za(){},
zb:function zb(){},
zc:function zc(a){this.a=a},
pz:function pz(){},
H7(a){return a},
Hq(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a5("")
o=a+"("
p.a=o
n=A.a1(b)
m=n.i("cx<1>")
l=new A.cx(b,0,s,m)
l.j0(b,0,s,n.c)
m=o+new A.Y(l,new A.Ck(),m.i("Y<a_.E,k>")).C(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.S(p.l(0),null))}},
r6:function r6(a){this.a=a},
r7:function r7(){},
r8:function r8(){},
Ck:function Ck(){},
u3:function u3(){},
dS(a,b){var s,r,q,p,o,n=b.oy(a),m=b.cR(a)
if(n!=null)a=B.a.ab(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.cm(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cm(a.charCodeAt(o))){r.push(B.a.B(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ab(a,p))
q.push("")}return new A.n6(b,n,m,r,q)},
n6:function n6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
FD(a){return new A.n7(a)},
n7:function n7(a){this.a=a},
KO(){var s,r,q,p,o,n,m,l,k=null
if(A.DY().gb3()!=="file")return $.l2()
if(!B.a.bW(A.DY().gby(),"/"))return $.l2()
s=A.GE(k,0,0)
r=A.GC(k,0,0,!1)
q=A.Bz(k,0,0,k)
p=A.GB(k,0,0)
o=A.By(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.GD("a/b",0,3,k,"",m)
if(n&&!B.a.T(l,"/"))l=A.Ed(l,m)
else l=A.fb(l)
if(A.kG("",s,n&&B.a.T(l,"//")?"":r,o,l,q,p).kL()==="a\\b")return $.pS()
return $.Ie()},
y4:function y4(){},
wL:function wL(a,b,c){this.d=a
this.e=b
this.f=c},
yF:function yF(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
yZ:function yZ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
Dp(a,b){if(b<0)A.v(A.b4("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.v(A.b4("Offset "+b+u.D+a.gm(0)+"."))
return new A.mg(a,b)},
xO:function xO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
mg:function mg(a,b){this.a=a
this.b=b},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
JH(a,b){var s=A.JI(A.l([A.Lo(a,!0)],t.pg)),r=new A.tU(b).$0(),q=B.c.l(B.b.ga_(s).b+1),p=A.JJ(s)?0:3,o=A.a1(s)
return new A.tA(s,r,null,1+Math.max(q.length,p),new A.Y(s,new A.tC(),o.i("Y<1,i>")).xc(0,B.bH),!A.On(new A.Y(s,new A.tD(),o.i("Y<1,j?>"))),new A.a5(""))},
JJ(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
JI(a){var s,r,q=A.Oe(a,new A.tF(),t.nf,t.K)
for(s=A.n(q),r=new A.aY(q,q.r,q.e,s.i("aY<2>"));r.k();)J.EU(r.d,new A.tG())
s=s.i("aN<1,2>")
r=s.i("iH<o.E,cB>")
s=A.N(new A.iH(new A.aN(q,s),new A.tH(),r),r.i("o.E"))
return s},
Lo(a,b){var s=new A.AJ(a).$0()
return new A.bu(s,!0,null)},
Lq(a){var s,r,q,p,o,n,m=a.gaP()
if(!B.a.E(m,"\r\n"))return a
s=a.gN().gav()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga6()
o=a.gN().gah()
p=A.nD(s,a.gN().gau(),o,p)
o=A.C(m,"\r\n","\n")
n=a.gbk()
return A.xP(r,p,o,A.C(n,"\r\n","\n"))},
Lr(a){var s,r,q,p,o,n,m
if(!B.a.bW(a.gbk(),"\n"))return a
if(B.a.bW(a.gaP(),"\n\n"))return a
s=B.a.B(a.gbk(),0,a.gbk().length-1)
r=a.gaP()
q=a.gR()
p=a.gN()
if(B.a.bW(a.gaP(),"\n")){o=A.CE(a.gbk(),a.gaP(),a.gR().gau())
o.toString
o=o+a.gR().gau()+a.gm(a)===a.gbk().length}else o=!1
if(o){r=B.a.B(a.gaP(),0,a.gaP().length-1)
if(r.length===0)p=q
else{o=a.gN().gav()
n=a.ga6()
m=a.gN().gah()
p=A.nD(o-1,A.Gl(s),m-1,n)
q=a.gR().gav()===a.gN().gav()?p:a.gR()}}return A.xP(q,p,r,s)},
Lp(a){var s,r,q,p,o
if(a.gN().gau()!==0)return a
if(a.gN().gah()===a.gR().gah())return a
s=B.a.B(a.gaP(),0,a.gaP().length-1)
r=a.gR()
q=a.gN().gav()
p=a.ga6()
o=a.gN().gah()
p=A.nD(q-1,s.length-B.a.cS(s,"\n")-1,o-1,p)
return A.xP(r,p,s,B.a.bW(a.gbk(),"\n")?B.a.B(a.gbk(),0,a.gbk().length-1):a.gbk())},
Gl(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.im(a,"\n",s-2)-1
else return s-B.a.cS(a,"\n")-1},
tA:function tA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tU:function tU(a){this.a=a},
tC:function tC(){},
tB:function tB(){},
tD:function tD(){},
tF:function tF(){},
tG:function tG(){},
tH:function tH(){},
tE:function tE(a){this.a=a},
tV:function tV(){},
tI:function tI(a){this.a=a},
tP:function tP(a,b,c){this.a=a
this.b=b
this.c=c},
tQ:function tQ(a,b){this.a=a
this.b=b},
tR:function tR(a){this.a=a},
tS:function tS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tN:function tN(a,b){this.a=a
this.b=b},
tO:function tO(a,b){this.a=a
this.b=b},
tJ:function tJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tK:function tK(a,b,c){this.a=a
this.b=b
this.c=c},
tL:function tL(a,b,c){this.a=a
this.b=b
this.c=c},
tM:function tM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tT:function tT(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
AJ:function AJ(a){this.a=a},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nD(a,b,c,d){if(a<0)A.v(A.b4("Offset may not be negative, was "+a+"."))
else if(c<0)A.v(A.b4("Line may not be negative, was "+c+"."))
else if(b<0)A.v(A.b4("Column may not be negative, was "+b+"."))
return new A.cv(d,a,c,b)},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nE:function nE(){},
nG:function nG(){},
KH(a,b,c){return new A.hj(c,a,b)},
nH:function nH(){},
hj:function hj(a,b,c){this.c=a
this.a=b
this.b=c},
hk:function hk(){},
xP(a,b,c,d){var s=new A.dh(d,a,b,c)
s.pe(a,b,c)
if(!B.a.E(d,c))A.v(A.S('The context line "'+d+'" must contain "'+c+'".',null))
if(A.CE(d,c,a.gau())==null)A.v(A.S('The span text "'+c+'" must start at column '+(a.gau()+1)+' in a line within "'+d+'".',null))
return s},
dh:function dh(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
KL(a){var s
A:{if(18===a){s=B.dK
break A}if(23===a){s=B.dL
break A}if(9===a){s=B.dM
break A}s=null
break A}return s},
jN:function jN(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
KK(a,b,c,d,e,f,g){return new A.cf(d,b,c,e,f,a,g)},
cf:function cf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xU:function xU(){},
lc:function lc(a){this.a=a},
Mu(a,b,c){var s,r,q,p,o,n=new A.om(c,A.a8(c.b,null,!1,t.X))
try{A.GW(a,b.$1(n))}catch(r){s=A.D(r)
q=B.e.A(A.iE(s))
p=a.a
o=p.cL(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
GW(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.a9(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.G7(b).l(0)))
break A}if(b instanceof A.aP){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EZ(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bv(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.G7(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.A(b)
q=a.a
p=q.cL(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cL(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.an(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.GW(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.v(A.aD(b,"result","Unsupported type"))}return s},
rx:function rx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rG:function rG(a){this.a=a},
rF:function rF(a){this.a=a},
rH:function rH(a){this.a=a},
rD:function rD(a){this.a=a},
rC:function rC(a){this.a=a},
rE:function rE(a){this.a=a},
rz:function rz(a){this.a=a},
ry:function ry(a){this.a=a},
rA:function rA(a){this.a=a},
rI:function rI(a){this.a=a},
rB:function rB(a,b){this.a=a
this.b=b},
om:function om(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
Bo:function Bo(a,b){this.a=a
this.b=b},
Bp:function Bp(a,b,c){this.a=a
this.b=b
this.c=c},
Bq:function Bq(a,b,c){this.a=a
this.b=b
this.c=c},
xQ:function xQ(){},
hl:function hl(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
Dt(a,b){var s=$.pR()
return new A.mu(A.u(t.N,t.a_),s,a)},
mu:function mu(a,b,c){this.d=a
this.b=b
this.a=c},
oY:function oY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Oz(a){var s=J.IY(new v.G.URL(a,"file:///").pathname,"/")
return new A.aq(s,new A.CU(),A.a1(s).i("aq<1>"))},
CU:function CU(){},
rc:function rc(){},
nq:function nq(a,b,c){this.d=a
this.a=b
this.c=c},
ce:function ce(a,b){this.a=a
this.b=b},
B7:function B7(a){this.a=a
this.b=-1},
pd:function pd(){},
pe:function pe(){},
pg:function pg(){},
ph:function ph(){},
w4:function w4(a,b){this.a=a
this.b=b},
Kv(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bI(r,"step")}return s},
et:function et(){},
bT:function bT(a){this.a=a},
lN:function lN(a){this.a=a},
hw(a){return new A.dn(a)},
EX(a,b){var s,r,q,p
if(b==null)b=$.pR()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cU(256)
r&2&&A.J(a)
a[q]=p}},
dn:function dn(a){this.a=a},
jM:function jM(a){this.a=a},
bb:function bb(){},
ls:function ls(){},
lr:function lr(){},
OF(a,b){var s=null,r=new A.eF(t.kk)
return A.pQ(a,new A.k0(s,s,s,s,s,s,s,s,new A.D3(new A.D2(r,A.Cb(new A.D4(r)))),s,s,s,s),s,b)},
f_:function f_(a){var _=this
_.d=a
_.c=_.b=_.a=null},
D4:function D4(a){this.a=a},
D2:function D2(a,b){this.a=a
this.b=b},
D3:function D3(a){this.a=a},
yQ:function yQ(a){this.a=a},
yL:function yL(a,b,c){this.a=a
this.b=b
this.c=c},
yS:function yS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yR:function yR(a,b,c){this.b=a
this.c=b
this.d=c},
e1:function e1(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
c3(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.D(r)
if(q instanceof A.dn){s=q
return s.a}else return 1}},
lR:function lR(a){this.b=this.a=$
this.d=a},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rk:function rk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rm:function rm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ro:function ro(a,b){this.a=a
this.b=b},
rh:function rh(a){this.a=a},
rn:function rn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rs:function rs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rq:function rq(a,b){this.a=a
this.b=b},
rp:function rp(a,b){this.a=a
this.b=b},
rj:function rj(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(a,b){this.a=a
this.b=b},
rr:function rr(a,b){this.a=a
this.b=b},
rg:function rg(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b){this.a=a
this.$ti=b},
q5:function q5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q7:function q7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
cJ(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bt(a,"success",new A.qR(r,a,b),!1,q)
A.bt(a,"error",new A.qS(r,a),!1,q)
return s},
Ji(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bt(a,"success",new A.qW(r,a,b),!1,q)
A.bt(a,"error",new A.qX(r,a),!1,q)
A.bt(a,"blocked",new A.qY(r),!1,q)
return s},
f3:function f3(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
Ab:function Ab(a,b){this.a=a
this.b=b},
Ac:function Ac(a,b){this.a=a
this.b=b},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
qS:function qS(a,b){this.a=a
this.b=b},
qW:function qW(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a,b){this.a=a
this.b=b},
qY:function qY(a){this.a=a},
ie(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
Fg(a,b,c){var s=a.read(b,c)
return s},
Fh(a,b,c){var s=a.write(b,c)
return s},
ml(a,b){return A.a3(a.removeEntry(b,{recursive:!1}),t.X)},
Ff(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.v(A.S("Target object does not implement the async iterable interface",null))
return new A.f7(new A.tg(),new A.il(a,s),s.i("f7<ac.T,M>"))},
tg:function tg(){},
yM:function yM(a){this.a=a},
yN:function yN(a){this.a=a},
yP(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$yP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a3(p.fetch(new p.URL(a,A.bi(p.location).href),null),t.m),$async$yP)
case 3:q=o.yO(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yP,r)},
yO(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$yO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lR(A.u(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.yM(p).ip(a),$async$yO)
case 3:q=new o.hx(new n.yQ(m.KY(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yO,r)},
hx:function hx(a){this.a=a},
Ls(a){var s=new A.ki(a,new A.at(new A.w($.B,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.pi(a)
return s},
mw(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$mw=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.q8(a)
n=A.Dt("dart-memory",null)
m=$.pR()
l=new A.dH(o,n,new A.eF(t.p3),A.aO(p),A.u(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.iv(),$async$mw)
case 3:s=4
return A.a(l.eV(),$async$mw)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mw,r)},
q8:function q8(a){this.a=null
this.b=a},
qb:function qb(a){this.a=a},
qa:function qa(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a){this.a=a},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
AM:function AM(a){this.a=a},
AN:function AN(a){this.a=a},
AL:function AL(a){this.a=a},
AO:function AO(a,b,c){this.a=a
this.b=b
this.c=c},
AQ:function AQ(a,b){this.a=a
this.b=b},
AP:function AP(a,b){this.a=a
this.b=b},
An:function An(a,b,c){this.a=a
this.b=b
this.c=c},
Ao:function Ao(a,b){this.a=a
this.b=b},
p6:function p6(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
tY:function tY(a,b,c){this.a=a
this.b=b
this.c=c},
tZ:function tZ(){},
tX:function tX(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b,c){this.a=a
this.b=b
this.c=c},
AK:function AK(a,b){this.a=a
this.b=b},
bd:function bd(){},
kg:function kg(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
ka:function ka(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hH:function hH(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
i_:function i_(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
FP(a){var s=A.Dt("dart-memory",null),r=$.pR()
return new A.hi(s,r,a)},
nz(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$nz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.ie()
if(j==null)throw A.b(A.hw(1))
p=t.m
s=3
return A.a(A.a3(j.getDirectory(),p),$async$nz)
case 3:o=d
n=A.Oz(a),m=J.E(n.a),n=new A.cY(m,n.b,n.$ti.i("cY<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a3(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$nz)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a0(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nz,r)},
nA(a){var s=0,r=A.h(t.m),q
var $async$nA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nz(a,!0),$async$nA)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nA,r)},
xM(a,b){var s=0,r=A.h(t.g_),q,p
var $async$xM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.ie()==null)throw A.b(A.hw(1))
p=A
s=3
return A.a(A.nA(a),$async$xM)
case 3:q=p.xL(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xM,r)},
xL(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$xL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.FP(c)
s=3
return A.a(p.cW(a,!1),$async$xL)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xL,r)},
fN:function fN(a,b,c){this.c=a
this.a=b
this.b=c},
hi:function hi(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
xN:function xN(a,b){this.a=a
this.b=b},
pm:function pm(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
B3:function B3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
KY(a,b){var s=A.bi(a.exports.memory)
b.b!==$&&A.ej()
b.b=s
s=new A.yG(s,b,a.exports)
s.pf(a,b)
return s},
ow(a,b){var s,r=A.bY(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
e3(a,b,c){var s=a.buffer
return B.o.f7(A.bY(s,b,c==null?A.ow(a,b):c))},
E_(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.f7(A.bY(s,b,c==null?A.ow(a,b):c))},
G5(a,b,c){var s=new Uint8Array(c)
B.f.d1(s,0,A.bY(a.buffer,b,c))
return s},
yG:function yG(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
yH:function yH(a){this.a=a},
yI:function yI(a){this.a=a},
yJ:function yJ(a){this.a=a},
yK:function yK(a){this.a=a},
Cw(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Cw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.l4()
s=l!=null?3:5
break
case 3:p=A.N0()
s=6
return A.a(A.jZ(l,p,null,null,!1),$async$Cw)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a0({port:m.port1,lockName:p},new A.iy(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cw,r)},
N0(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bA(97+$.IG().cU(26))
return r.charCodeAt(0)==0?r:r},
J8(a){return new A.iu(a)},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
wS:function wS(){},
wW:function wW(a){this.a=a},
wX:function wX(a){this.a=a},
wV:function wV(a){this.a=a},
wU:function wU(a){this.a=a},
wT:function wT(a){this.a=a},
iu:function iu(a){this.a=a},
rv:function rv(){},
lM:function lM(a){this.a=a},
rd:function rd(a){this.a=a},
eY:function eY(){},
m6(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$m6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nA(a),$async$m6)
case 3:p=e
o=A.FP(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cW(p,!0),$async$m6)
case 6:case 5:q=new A.m5(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$m6,r)},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
ty:function ty(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jZ(a,b,c,d,e){var s,r,q={},p=new A.w($.B,t.nI),o=new A.at(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.Dq(A.a3(a.request(b,s,A.d0(new A.yW(q,o))),r),new A.yX(q,d,o),r,t.K)
return p},
yW:function yW(a,b){this.a=a
this.b=b},
yX:function yX(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a){this.a=a},
lS:function lS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rK:function rK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rJ:function rJ(a,b){this.a=a
this.b=b},
rL:function rL(a){this.a=a},
ji:function ji(a){this.a=!1
this.b=a},
vX:function vX(a,b){this.a=a
this.b=b},
vW:function vW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vV:function vV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Jf(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bR(n,A.a1(n).i("bR<1,k>"))
for(s=J.I(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a0(A.fH(B.d3,s.h(m,q)),s.h(m,q+1)))}s=A.i1(a.b)
q=A.i1(a.c)
p=A.i1(a.d)
return new A.eu(o,s,q,A.i1(a.g),p)},
eu:function eu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ky(a){var s
if(J.x(a.t,"errorResponse")){s=A.Ju(a)
if(s!=null&&s instanceof A.dx)return s
else return new A.ha(a.e)}else return new A.ha("Did not respond with expected type, got "+A.r(a))},
Ju(a){var s=a.s,r=s==null?null:A.aj(s)
A:{if(0===r){s=A.Jv(t.c.a(a.r))
break A}if(1===r){s=B.aq
break A}s=null
break A}return s},
Jv(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.A("Pattern matching error"))
n=new A.t0()
l=A.aj(A.fc(l))
A.G(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ew(i,h,A.bY(h,0,o))}else p=o
n=n.$1(k)
A.GN(g)
return new A.cf(s,r,l,g==null?o:A.aj(g),n,q,p)},
Jw(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.KS(l)
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
Kz(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.ty(a2,512,"transfer" in a2)
a5.mN(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Kv(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qE(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aJ}else g=B.aK
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aL
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.ow(r,f)
f=new Uint8Array(e,f,d)
c=new A.dt(!1).d6(f,0,a,!0)
i=c
g=B.aM
break
case 4:i=s.l3(j)
g=B.aN
break
case 5:default:i=a
g=B.aO}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.ow(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dt(!1).d6(a0,0,a,!0)}return A.HP(!1,b,0,0,a1,a,a3.xs(0))},
Oo(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
t0:function t0(){},
HP(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
i8(a){var s,r,q,p,o=v.G,n=new o.Array()
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
O1(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mR:function mR(a,b,c){this.a=a
this.b=b
this.$ti=c},
xz:function xz(){},
Jz(a){var s,r
for(s=0;s<5;++s){r=B.cR[s]
if(r.c===a)return r}throw A.b(A.S("Unknown FS implementation: "+a,null))},
KR(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aO
break A}q=A.a9(a)
p=q?a:j
if(q){s=p
r=B.aJ
break A}q=a instanceof A.aP
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aK
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aL
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aM
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aN
break A}q=A.bv(a)
k=q?a:j
if(q){s=k
r=B.bu
break A}throw A.b(A.S("Unsupported value: "+A.r(a),j))}return new A.a0(r,s)},
KS(a){var s,r,q,p,o,n
if(a instanceof A.ew)return new A.a0(a.a,a.b)
s=[]
r=J.I(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.KR(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a0(s,t.a.a(B.f.gac(p)))},
dD:function dD(a,b,c){this.c=a
this.a=b
this.b=c},
cz:function cz(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
pM(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pM=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bi(i.indexedDB)
i=$.l4()
i=i==null?null:A.jZ(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bC(i,t.fm),$async$pM)
case 3:l=b
p=5
s=8
return A.a(A.Jh(m.open("drift_mock_db"),t.m),$async$pM)
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
return A.f($async$pM,r)},
Cs(a){return A.NK(a)},
NK(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$Cs=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bi(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.d0(new A.Ct(j,m))
s=7
return A.a(A.Jg(m,t.m),$async$Cs)
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
return A.f($async$Cs,r)},
ib(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$ib=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.ie()
if(h==null){q=B.u
s=1
break}j=t.m
s=3
return A.a(A.a3(h.getDirectory(),j),$async$ib)
case 3:m=b
p=5
s=8
return A.a(A.a3(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$ib)
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
j=new A.cD(A.cE(A.Ff(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$ib)
case 14:if(!b){s=13
break}k=j.gn()
if(J.x(k.kind,"directory"))J.aM(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.v(),$async$ib)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ib,r)},
Jg(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bt(a,"success",new A.qP(r,a,b),!1,q)
A.bt(a,"error",new A.qQ(r,a),!1,q)
return s},
Jh(a,b){var s=new A.w($.B,b.i("w<0>")),r=new A.at(s,b.i("at<0>")),q=t.m
A.bt(a,"success",new A.qT(r,a,b),!1,q)
A.bt(a,"error",new A.qU(r,a),!1,q)
A.bt(a,"blocked",new A.qV(r,a),!1,q)
return s},
Ct:function Ct(a,b){this.a=a
this.b=b},
qP:function qP(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(a,b){this.a=a
this.b=b},
qT:function qT(a,b,c){this.a=a
this.b=b
this.c=c},
qU:function qU(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
wO:function wO(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
ha:function ha(a){this.a=a},
dx:function dx(a){this.a=a},
Mt(a){var s=a.gn7()
return new A.f7(new A.Ca(),s,A.n(s).i("f7<ac.T,M>"))},
Gh(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hG(a,r,new A.kw(),new A.kw(),new A.kw(),s)},
Lj(a,b,c){var s=t.S
s=new A.hE(c,A.l([],t.fV),a.a,new A.aF(new A.w($.B,t.D),t.h),A.u(s,t.br),A.u(s,t.m))
s.pc(a)
s.ph(a,b,c)
return s},
GX(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
eg(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$eg=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.ie()
if(b==null){q=B.aF
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.l4()
d=d==null?null:A.jZ(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bC(d,t.fm),$async$eg)
case 7:j=a1
d=t.m
s=8
return A.a(A.a3(b.getDirectory(),d),$async$eg)
case 8:m=a1
s=9
return A.a(A.a3(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$eg)
case 9:l=a1
s=10
return A.a(A.kR(l),$async$eg)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.Dw(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a3(A.bi(e),t.X),$async$eg)
case 13:q=B.aF
n=[1]
s=5
break
case 12:g=i
q=new A.kr(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.aF
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
return A.a(A.ml(m,"_drift_feature_detection"),$async$eg)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eg,r)},
kR(a){return A.Nk(a)},
Nk(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kR=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a3(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kR)
case 7:j=c
s=8
return A.a(A.a3(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kR)
case 8:n=c
n.close()
l=j
q=new A.a0(!0,l)
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
return A.a(A.a3(a.createSyncAccessHandle(),t.m),$async$kR)
case 9:m=c
q=new A.a0(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kR,r)},
Ca:function Ca(){},
kw:function kw(){this.a=null},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
A2:function A2(a){this.a=a},
A6:function A6(a,b){this.a=a
this.b=b},
A3:function A3(a,b){this.a=a
this.b=b},
A4:function A4(a){this.a=a},
A5:function A5(a,b){this.a=a
this.b=b},
hE:function hE(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
zN:function zN(a){this.a=a},
zS:function zS(a,b){this.a=a
this.b=b},
zV:function zV(a,b,c){this.a=a
this.b=b
this.c=c},
zP:function zP(a,b){this.a=a
this.b=b},
zO:function zO(a,b){this.a=a
this.b=b},
zU:function zU(a,b){this.a=a
this.b=b},
zT:function zT(a,b){this.a=a
this.b=b},
zX:function zX(a,b){this.a=a
this.b=b},
zW:function zW(a,b){this.a=a
this.b=b},
zQ:function zQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zR:function zR(a,b){this.a=a
this.b=b},
zM:function zM(a){this.a=a},
lT:function lT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
rO:function rO(a){this.a=a},
rN:function rN(a){this.a=a},
rM:function rM(a,b){this.a=a
this.b=b},
zg:function zg(a,b,c,d,e,f){var _=this
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
zh:function zh(a,b){this.a=a
this.b=b},
zi:function zi(a,b){this.a=a
this.b=b},
zj:function zj(a){this.a=a},
L1(){var s=v.G
if(A.JP(s,"DedicatedWorkerGlobalScope"))return new A.oQ(s,new A.oR(s.location.href))
else return new A.pk(s,new A.oR(s.location.href))},
kI:function kI(){},
oQ:function oQ(a,b){this.a=a
this.b=b},
pk:function pk(a,b){this.a=a
this.b=b},
Bi:function Bi(a){this.a=a},
Bj:function Bj(a,b,c){this.a=a
this.b=b
this.c=c},
Bh:function Bh(a){this.a=a},
Bf:function Bf(a){this.a=a},
Bg:function Bg(a){this.a=a},
oR:function oR(a){this.a=a},
Ai:function Ai(a){this.a=a},
nP:function nP(a,b,c){this.c=a
this.a=b
this.b=c},
y3:function y3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
ht:function ht(){},
p_:function p_(){},
cA:function cA(a,b){this.a=a
this.b=b},
bt(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Hs(new A.Al(c),t.m)
s=s==null?null:A.d0(s)}s=new A.ke(a,b,s,!1,e.i("ke<0>"))
s.jS()
return s},
Hs(a,b){var s=$.B
if(s===B.i)return a
return s.hR(a,b)},
Dm:function Dm(a,b){this.a=a
this.$ti=b},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ke:function ke(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
Al:function Al(a){this.a=a},
Am:function Am(a){this.a=a},
I5(a){return v.mangledGlobalNames[a]},
HT(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
JS(a,b){return b in a},
Dw(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Oe(a,b,c,d){var s,r,q,p,o,n=A.u(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aM(p,q)}return n},
Du(a){var s=J.E(a.a)
if(new A.cY(s,a.b,a.$ti.i("cY<1>")).k())return s.gn()
return null},
Co(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.J(a)
a[r]=s&255
b=s/256|0;--r}},
OP(a){return a},
I3(a){if(a instanceof A.dA)return a
return new A.dA(a)},
OQ(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.D(p)
if(q instanceof A.hj){s=q
throw A.b(A.KH("Invalid "+a+": "+s.a,s.b,s.gfZ()))}else if(t.Y.b(q)){r=q
throw A.b(A.ab("Invalid "+a+' "'+b+'": '+r.gir(),r.gfZ(),r.gav()))}else throw p}},
fl(a){if(B.a.bW(a,"\\"))throw A.b(A.aV('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.C(a,"'","\\'")+"'"},
OL(a,b,c,d){var s="("+d+"="+A.fl(a)+" && id~"+A.fl(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.fl(c)+")"},
i9(){var s,r,q,p=$.IH(),o=$.IA()+1
$.Mz=o
s=B.a.ix(B.c.kM(o,36),8,"0")
r=J.Fo(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cU(36)]
return B.a.B(s+B.b.en(r),0,15)},
OB(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
OC(a,b){var s,r,q=A.l([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.push(A.OB(a[r],b))
return q},
pP(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.di)throw q
else{s=r
r=A.dj("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
Cy(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.k
try{s=B.h.aH(a,null)
if(t.f.b(s)){q=A.bo(s,t.N,t.X)
return q}return B.k}catch(p){r=A.D(p)
q=A.dj("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
HF(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bk
try{s=B.h.aH(a,null)
if(t.j.b(s)){q=J.pW(s,t.N)
q=q.cr(q)
return q}return B.bk}catch(p){r=A.D(p)
q=A.dj("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
HE(a){var s,r,q,p,o=null
if(a==null)return B.u
A.G(a)
if(a.length===0)return B.u
s=B.h.aH(a,o)
if(!t.j.b(s))throw A.b(A.ab("expected a JSON array, got "+J.c5(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.v(A.ab("dirty-field member is "+J.c5(p).l(0)+", expected String",o,o)))}return r},
fi(a){var s,r=J.I(a)
if(r.gF(a))return null
s=J.bE(r.gH(a).gaU())
if(A.a9(s))return s
if(typeof s=="string")return A.h4(s,null)
return null},
HI(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.bS(B.w.xm(r*J.IP(d.$1(o),0.5,1.5)),0,0)},
Ox(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cs)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.ab("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.an(r)!==32)throw A.b(B.cr)
q=new Uint8Array(32)
for(p=J.I(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.a9(n)||n<0||n>255)throw A.b(A.ab("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.EV(q)
p=$.Db()
if($.l0()!==B.P)A.v(A.A("BigEndian systems are unsupported"))
return new A.pZ(new A.lP(12,32,m),new A.jK(new A.ny(A.EV(q)),m),p)},
Os(){var s=A.L1(),r=t.cj
new A.zg(s,B.bW,A.l([],t.az),A.u(t.S,t.lp),new A.ji(A.DA(r)),new A.ji(A.DA(r))).ek()},
HD(){var s,r,q,p,o=null
try{o=A.DY()}catch(s){if(t.mA.b(A.D(s))){r=$.C2
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.GT)){r=$.C2
r.toString
return r}$.GT=o
if($.EJ()===$.l2())r=$.C2=o.al(".").l(0)
else{q=o.kL()
p=q.length-1
r=$.C2=p===0?q:B.a.B(q,0,p)}return r},
HL(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
HG(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.HL(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.B(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
On(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gH(0)
for(r=A.cy(a,1,null,a.$ti.i("a_.E")),q=r.$ti,r=new A.as(r,r.gm(0),q.i("as<a_.E>")),q=q.i("a_.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
OE(a,b){var s=B.b.bX(a,null)
if(s<0)throw A.b(A.S(A.r(a)+" contains no null elements.",null))
a[s]=b},
HX(a,b){var s=B.b.bX(a,b)
if(s<0)throw A.b(A.S(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
NX(a,b){var s,r,q,p
for(s=new A.cn(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<L.E>")),r=r.i("L.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
CE(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.ck(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bX(a,b)
while(r!==-1){q=r===0?0:B.a.im(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.ck(a,b,r+1)}return null},
Ev(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.cf(A.e3(r.b,p.sqlite3_errmsg(q),null),A.e3(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
D7(a,b,c,d,e){throw A.b(A.Ev(a.a,a.b,b,c,d,e))},
EZ(a){if(a.a3(0,$.I8())<0||a.a3(0,$.I7())>0)throw A.b(A.Fc("BigInt value exceeds the range of 64 bits"))
return a},
Kw(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.aj(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.e3(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.G5(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Fj(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bA("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cU(61)))
return s.charCodeAt(0)==0?s:s},
xw(a){var s=0,r=A.h(t.lo),q
var $async$xw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a3(a.arrayBuffer(),t.a),$async$xw)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xw,r)}},B={}
var w=[A,J,B]
var $={}
A.Dy.prototype={}
J.mz.prototype={
P(a,b){return a===b},
gK(a){return A.eO(a)},
l(a){return"Instance of '"+A.nc(a)+"'"},
gam(a){return A.bO(A.Ej(this))}}
J.mC.prototype={
l(a){return String(a)},
gK(a){return a?519018:218159},
gam(a){return A.bO(t.y)},
$iam:1,
$iO:1}
J.iX.prototype={
P(a,b){return null==b},
l(a){return"null"},
gK(a){return 0},
gam(a){return A.bO(t.P)},
$iam:1,
$iW:1}
J.aI.prototype={$iM:1}
J.dK.prototype={
gK(a){return 0},
gam(a){return B.e6},
l(a){return String(a)}}
J.n9.prototype={}
J.e_.prototype={}
J.bU.prototype={
l(a){var s=a[$.Ib()]
if(s==null)s=a[$.fm()]
if(s==null)return this.oX(a)
return"JavaScript function for "+J.Z(s)}}
J.by.prototype={
gK(a){return 0},
l(a){return String(a)}}
J.fQ.prototype={
gK(a){return 0},
l(a){return String(a)}}
J.z.prototype={
f5(a,b){return new A.bR(a,A.a1(a).i("@<1>").Z(b).i("bR<1,2>"))},
u(a,b){a.$flags&1&&A.J(a,29)
a.push(b)},
iH(a,b){var s
a.$flags&1&&A.J(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.xv(b,null))
return a.splice(b,1)[0]},
aF(a,b,c){var s
a.$flags&1&&A.J(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.xv(b,null))
a.splice(b,0,c)},
ks(a,b,c){var s,r
a.$flags&1&&A.J(a,"insertAll",2)
A.FM(b,0,a.length,"index")
if(!t.O.b(c))c=J.J0(c)
s=J.an(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.aA(a,b,r,c)},
kG(a){a.$flags&1&&A.J(a,"removeLast",1)
if(a.length===0)throw A.b(A.CA(a,-1))
return a.pop()},
G(a,b){var s
a.$flags&1&&A.J(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
t4(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.ay(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dB(a,b){return new A.aq(a,b,A.a1(a).i("aq<1>"))},
D(a,b){var s
a.$flags&1&&A.J(a,"addAll",2)
if(Array.isArray(b)){this.po(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
po(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.ay(a))
for(s=0;s<r;++s)a.push(b[s])},
aq(a){a.$flags&1&&A.J(a,"clear","clear")
a.length=0},
co(a,b,c){return new A.Y(a,b,A.a1(a).i("@<1>").Z(c).i("Y<1,2>"))},
C(a,b){var s,r=A.a8(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
en(a){return this.C(a,"")},
c1(a,b){return A.cy(a,0,A.cE(b,"count",t.S),A.a1(a).c)},
b4(a,b){return A.cy(a,b,null,A.a1(a).c)},
cj(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.ay(a))}if(c!=null)return c.$0()
throw A.b(A.az())},
n4(a,b){return this.cj(a,b,null)},
a4(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.aA(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.aA(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a1(a))
return A.l(a.slice(b,c),A.a1(a))},
bb(a,b){return this.U(a,b,null)},
fV(a,b,c){A.bh(b,c,a.length)
return A.cy(a,b,c,A.a1(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.az())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.az())},
gao(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.az())
throw A.b(A.iU())},
iI(a,b,c){a.$flags&1&&A.J(a,18)
A.bh(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.J(a,5)
A.bh(b,c,a.length)
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.fp(d,e).b8(0,!1)
q=0}p=J.I(r)
if(q+s>p.gm(r))throw A.b(A.Fm())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
bj(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.ay(a))}return!1},
ci(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.ay(a))}return!0},
ct(a,b){var s,r,q,p,o
a.$flags&2&&A.J(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.MD()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a1(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eh(b,2))
if(p>0)this.t5(a,p)},
aj(a){return this.ct(a,null)},
t5(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bX(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
cS(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
E(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gS(a){return a.length!==0},
l(a){return A.u4(a,"[","]")},
b8(a,b){var s=A.a1(a)
return b?A.l(a.slice(0),s):J.Dv(a.slice(0),s.c)},
bJ(a){return this.b8(a,!0)},
cr(a){return A.mN(a,A.a1(a).c)},
gt(a){return new J.ft(a,a.length,A.a1(a).i("ft<1>"))},
gK(a){return A.eO(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.J(a,"set length","change the length of")
if(b<0)throw A.b(A.aA(b,0,null,"newLength",null))
if(b>a.length)A.a1(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.CA(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.J(a)
if(!(b>=0&&b<a.length))throw A.b(A.CA(a,b))
a[b]=c},
n8(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gam(a){return A.bO(A.a1(a))},
$ibg:1,
$iK:1,
$io:1,
$iq:1}
J.mA.prototype={
xy(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.nc(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.u6.prototype={}
J.ft.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.eD.prototype={
a3(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkw(b)
if(this.gkw(a)===s)return 0
if(this.gkw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkw(a){return a===0?1/a<0:a<0},
fN(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.a2(""+a+".toInt()"))},
um(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.a2(""+a+".ceil()"))},
vC(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.a2(""+a+".floor()"))},
xm(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.a2(""+a+".round()"))},
bs(a,b,c){if(this.a3(b,c)>0)throw A.b(A.fg(b))
if(this.a3(a,b)<0)return b
if(this.a3(a,c)>0)return c
return a},
kM(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.aA(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.v(A.a2("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bn("0",q)},
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
j_(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ms(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.ms(a,b)},
ms(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.a2("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bM(a,b){if(b<0)throw A.b(A.fg(b))
return b>31?0:a<<b>>>0},
ts(a,b){return b>31?0:a<<b>>>0},
dG(a,b){var s
if(b<0)throw A.b(A.fg(b))
if(a>0)s=this.jQ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ag(a,b){var s
if(a>0)s=this.jQ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mq(a,b){if(0>b)throw A.b(A.fg(b))
return this.jQ(a,b)},
jQ(a,b){return b>31?0:a>>>b},
oz(a,b){return a>b},
gam(a){return A.bO(t.cZ)},
$iax:1,
$iad:1,
$ib_:1}
J.iW.prototype={
gmO(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gam(a){return A.bO(t.S)},
$iam:1,
$ii:1}
J.mD.prototype={
gam(a){return A.bO(t.W)},
$iam:1}
J.dI.prototype={
k_(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.po(b,a,c)},
hM(a,b){return this.k_(a,b,0)},
eq(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.ho(c,a)},
bW(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ab(a,r-s)},
kI(a,b,c){A.FM(0,0,a.length,"startIndex")
return A.OK(a,b,c,0)},
d2(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.eE){s=b.e
s=!(s==null?b.e=b.pW():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.q7(a,b)}},
dv(a,b,c,d){var s=A.bh(b,c,a.length)
return A.I1(a,b,s,d)},
q7(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.Dd(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
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
B(a,b,c){return a.substring(b,A.bh(b,c,a.length))},
ab(a,b){return this.B(a,b,null)},
c2(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.JT(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Fq(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
xw(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.Fq(r,s))},
bn(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bY)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ix(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bn(c,s)+a},
wJ(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bn(" ",s)},
ck(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bX(a,b){return this.ck(a,b,0)},
im(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
cS(a,b){return this.im(a,b,null)},
E(a,b){return A.OH(a,b,0)},
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
gam(a){return A.bO(t.N)},
gm(a){return a.length},
$ibg:1,
$iam:1,
$iax:1,
$ik:1}
A.Aa.prototype={
u(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.I(b),i=j.gm(b)
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
r.$flags&2&&A.J(r)
r[q+m]=l}k.a=s},
kK(){var s,r=this
if(r.a===0)return $.pT()
s=J.bQ(B.f.gac(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.pT()
return s},
gm(a){return this.a}}
A.zJ.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.be(b))
this.b.push(s)
this.a=this.a+s.length},
kK(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.pT()
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
A.e4.prototype={
gt(a){return new A.lw(J.E(this.gbh()),A.n(this).i("lw<1,2>"))},
gm(a){return J.an(this.gbh())},
gF(a){return J.bw(this.gbh())},
gS(a){return J.d4(this.gbh())},
b4(a,b){var s=A.n(this)
return A.fv(J.fp(this.gbh(),b),s.c,s.y[1])},
c1(a,b){var s=A.n(this)
return A.fv(J.l7(this.gbh(),b),s.c,s.y[1])},
a4(a,b){return A.n(this).y[1].a(J.l5(this.gbh(),b))},
gH(a){return A.n(this).y[1].a(J.bE(this.gbh()))},
ga_(a){return A.n(this).y[1].a(J.pX(this.gbh()))},
gao(a){return A.n(this).y[1].a(J.pY(this.gbh()))},
E(a,b){return J.De(this.gbh(),b)},
l(a){return J.Z(this.gbh())}}
A.lw.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ep.prototype={
gbh(){return this.a}}
A.kb.prototype={$iK:1}
A.k8.prototype={
h(a,b){return this.$ti.y[1].a(J.T(this.a,b))},
j(a,b,c){J.d3(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.IW(this.a,b)},
u(a,b){J.aM(this.a,this.$ti.c.a(b))},
ct(a,b){var s=b==null?null:new A.zK(this,b)
J.EU(this.a,s)},
fV(a,b,c){var s=this.$ti
return A.fv(J.IS(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.IX(this.a,b,c,A.fv(d,s.y[1],s.c),e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)},
$iK:1,
$iq:1}
A.zK.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bR.prototype={
f5(a,b){return new A.bR(this.a,this.$ti.i("@<1>").Z(b).i("bR<1,2>"))},
gbh(){return this.a}}
A.eq.prototype={
ce(a,b,c){return new A.eq(this.a,this.$ti.i("@<1,2>").Z(b).Z(c).i("eq<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a5(a,b){this.a.a5(0,new A.qq(this,b))},
gJ(){var s=this.$ti
return A.fv(this.a.gJ(),s.c,s.y[2])},
gaU(){var s=this.$ti
return A.fv(this.a.gaU(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gS(a){var s=this.a
return s.gS(s)},
ga0(){var s=this.a.ga0()
return s.co(s,new A.qp(this),this.$ti.i("U<3,4>"))}}
A.qq.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.qp.prototype={
$1(a){var s=this.a.$ti
return new A.U(s.y[2].a(a.a),s.y[3].a(a.b),s.i("U<3,4>"))},
$S(){return this.a.$ti.i("U<3,4>(U<1,2>)")}}
A.dJ.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.nl.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cn.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.CT.prototype={
$0(){return A.bf(null,t.H)},
$S:3}
A.xK.prototype={}
A.K.prototype={}
A.a_.prototype={
gt(a){var s=this
return new A.as(s,s.gm(s),A.n(s).i("as<a_.E>"))},
gF(a){return this.gm(this)===0},
gH(a){if(this.gm(this)===0)throw A.b(A.az())
return this.a4(0,0)},
ga_(a){var s=this
if(s.gm(s)===0)throw A.b(A.az())
return s.a4(0,s.gm(s)-1)},
gao(a){var s=this
if(s.gm(s)===0)throw A.b(A.az())
if(s.gm(s)>1)throw A.b(A.iU())
return s.a4(0,0)},
E(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.x(r.a4(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.ay(r))}return!1},
ci(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a4(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.ay(r))}return!0},
C(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a4(0,0))
if(o!==p.gm(p))throw A.b(A.ay(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a4(0,q))
if(o!==p.gm(p))throw A.b(A.ay(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a4(0,q))
if(o!==p.gm(p))throw A.b(A.ay(p))}return r.charCodeAt(0)==0?r:r}},
en(a){return this.C(0,"")},
dB(a,b){return this.oS(0,b)},
co(a,b,c){return new A.Y(this,b,A.n(this).i("@<a_.E>").Z(c).i("Y<1,2>"))},
xc(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.az())
s=q.a4(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a4(0,r))
if(p!==q.gm(q))throw A.b(A.ay(q))}return s},
b4(a,b){return A.cy(this,b,null,A.n(this).i("a_.E"))},
c1(a,b){return A.cy(this,0,A.cE(b,"count",t.S),A.n(this).i("a_.E"))},
b8(a,b){var s=A.n(this).i("a_.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
bJ(a){return this.b8(0,!0)}}
A.cx.prototype={
j0(a,b,c,d){var s,r=this.b
A.aW(r,"start")
s=this.c
if(s!=null){A.aW(s,"end")
if(r>s)throw A.b(A.aA(r,0,s,"start",null))}},
gqh(){var s=J.an(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtw(){var s=J.an(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.an(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a4(a,b){var s=this,r=s.gtw()+b
if(b<0||r>=s.gqh())throw A.b(A.mv(b,s.gm(0),s,null,"index"))
return J.l5(s.a,r)},
b4(a,b){var s,r,q=this
A.aW(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ez(q.$ti.i("ez<1>"))
return A.cy(q.a,s,r,q.$ti.c)},
c1(a,b){var s,r,q,p=this
A.aW(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.cy(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.cy(p.a,r,q,p.$ti.c)}},
b8(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.I(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.u5(0,n):J.mB(0,n)}r=A.a8(s,m.a4(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a4(n,o+q)
if(m.gm(n)<l)throw A.b(A.ay(p))}return r},
bJ(a){return this.b8(0,!0)}}
A.as.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.I(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.ay(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a4(q,s);++r.c
return!0}}
A.cp.prototype={
gt(a){return new A.mP(J.E(this.a),this.b,A.n(this).i("mP<1,2>"))},
gm(a){return J.an(this.a)},
gF(a){return J.bw(this.a)},
gH(a){return this.b.$1(J.bE(this.a))},
ga_(a){return this.b.$1(J.pX(this.a))},
gao(a){return this.b.$1(J.pY(this.a))},
a4(a,b){return this.b.$1(J.l5(this.a,b))}}
A.ey.prototype={$iK:1}
A.mP.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.Y.prototype={
gm(a){return J.an(this.a)},
a4(a,b){return this.b.$1(J.l5(this.a,b))}}
A.aq.prototype={
gt(a){return new A.cY(J.E(this.a),this.b,this.$ti.i("cY<1>"))},
co(a,b,c){return new A.cp(this,b,this.$ti.i("@<1>").Z(c).i("cp<1,2>"))}}
A.cY.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iH.prototype={
gt(a){return new A.m2(J.E(this.a),this.b,B.aV,this.$ti.i("m2<1,2>"))}}
A.m2.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eV.prototype={
gt(a){var s=this.a
return new A.o2(s.gt(s),this.b,A.n(this).i("o2<1>"))}}
A.iD.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.oz(r,s))return s
return r},
$iK:1}
A.o2.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.dg.prototype={
b4(a,b){A.dz(b,"count")
A.aW(b,"count")
return new A.dg(this.a,this.b+b,A.n(this).i("dg<1>"))},
gt(a){var s=this.a
return new A.nB(s.gt(s),this.b,A.n(this).i("nB<1>"))}}
A.fG.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
b4(a,b){A.dz(b,"count")
A.aW(b,"count")
return new A.fG(this.a,this.b+b,this.$ti)},
$iK:1}
A.nB.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.ez.prototype={
gt(a){return B.aV},
gF(a){return!0},
gm(a){return 0},
gH(a){throw A.b(A.az())},
ga_(a){throw A.b(A.az())},
gao(a){throw A.b(A.az())},
a4(a,b){throw A.b(A.aA(b,0,0,"index",null))},
E(a,b){return!1},
ci(a,b){return!0},
dB(a,b){return this},
co(a,b,c){return new A.ez(c.i("ez<0>"))},
b4(a,b){A.aW(b,"count")
return this},
c1(a,b){A.aW(b,"count")
return this},
b8(a,b){var s=this.$ti.c
return b?J.u5(0,s):J.mB(0,s)},
bJ(a){return this.b8(0,!0)},
cr(a){return A.vc(this.$ti.c)}}
A.m_.prototype={
k(){return!1},
gn(){throw A.b(A.az())}}
A.e2.prototype={
gt(a){return new A.os(J.E(this.a),this.$ti.i("os<1>"))}}
A.os.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.d7.prototype={
gm(a){return J.an(this.a)},
gF(a){return J.bw(this.a)},
gS(a){return J.d4(this.a)},
gH(a){return new A.a0(this.b,J.bE(this.a))},
gao(a){return new A.a0(this.b,J.pY(this.a))},
a4(a,b){return new A.a0(b+this.b,J.l5(this.a,b))},
E(a,b){var s,r,q,p=null,o=null,n=!1
if(t.fe.b(b)){s=b.a
if(A.a9(s)){A.aj(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){n=J.fp(this.a,p-this.b)
q=n.gt(n)
return q.k()&&J.x(q.gn(),o)}return!1},
c1(a,b){A.dz(b,"count")
A.aW(b,"count")
return new A.d7(J.l7(this.a,b),this.b,A.n(this).i("d7<1>"))},
b4(a,b){A.dz(b,"count")
A.aW(b,"count")
return new A.d7(J.fp(this.a,b),b+this.b,A.n(this).i("d7<1>"))},
gt(a){return new A.mx(J.E(this.a),this.b,A.n(this).i("mx<1>"))}}
A.ex.prototype={
ga_(a){var s,r=this.a,q=J.I(r),p=q.gm(r)
if(p<=0)throw A.b(A.az())
s=q.ga_(r)
if(p!==q.gm(r))throw A.b(A.ay(this))
return new A.a0(p-1+this.b,s)},
E(a,b){var s,r,q,p,o=null,n=null,m=!1
if(t.fe.b(b)){s=b.a
if(A.a9(s)){A.aj(s)
r=b.b
m=s>=this.b
n=r
o=s}}if(m){q=o-this.b
m=this.a
p=J.I(m)
return q<p.gm(m)&&J.x(p.a4(m,q),n)}return!1},
c1(a,b){A.dz(b,"count")
A.aW(b,"count")
return new A.ex(J.l7(this.a,b),this.b,this.$ti)},
b4(a,b){A.dz(b,"count")
A.aW(b,"count")
return new A.ex(J.fp(this.a,b),this.b+b,this.$ti)},
$iK:1}
A.mx.prototype={
k(){if(++this.c>=0&&this.a.k())return!0
this.c=-2
return!1},
gn(){var s=this.c
return s>=0?new A.a0(this.b+s,this.a.gn()):A.v(A.az())}}
A.iL.prototype={
sm(a,b){throw A.b(A.a2(u.O))},
u(a,b){throw A.b(A.a2("Cannot add to a fixed-length list"))}}
A.oe.prototype={
j(a,b,c){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.a2("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.a2("Cannot add to an unmodifiable list"))},
ct(a,b){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.a2("Cannot modify an unmodifiable list"))},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.hv.prototype={}
A.bB.prototype={
gm(a){return J.an(this.a)},
a4(a,b){var s=this.a,r=J.I(s)
return r.a4(s,r.gm(s)-1-b)}}
A.jU.prototype={
gK(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gK(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.jU&&this.a===b.a}}
A.kJ.prototype={}
A.a0.prototype={$r:"+(1,2)",$s:1}
A.kr.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.ks.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hR.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.pb.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.ea.prototype={$r:"+(1,2,3)",$s:7}
A.f9.prototype={$r:"+(1,2,3,4)",$s:8}
A.pc.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.iz.prototype={}
A.fB.prototype={
ce(a,b,c){var s=A.n(this)
return A.Fu(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gS(a){return this.gm(this)!==0},
l(a){return A.vw(this)},
j(a,b,c){A.Jk()},
ga0(){return new A.hW(this.vo(),A.n(this).i("hW<U<1,2>>"))},
vo(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ga0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gJ(),o=o.gt(o),n=A.n(s).i("U<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.U(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aX(a,b,c,d){var s=A.u(c,d)
this.a5(0,new A.r5(this,b,s))
return s},
$iF:1}
A.r5.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aL.prototype={
gm(a){return this.b.length},
glU(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a5(a,b){var s,r,q=this.glU(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gJ(){return new A.f6(this.glU(),this.$ti.i("f6<1>"))},
gaU(){return new A.f6(this.b,this.$ti.i("f6<2>"))}}
A.f6.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gS(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hN(s,s.length,this.$ti.i("hN<1>"))}}
A.hN.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iP.prototype={
dS(){var s=this,r=s.$map
if(r==null){r=new A.iY(s.$ti.i("iY<1,2>"))
A.HJ(s.a,r)
s.$map=r}return r},
I(a){return this.dS().I(a)},
h(a,b){return this.dS().h(0,b)},
a5(a,b){this.dS().a5(0,b)},
gJ(){var s=this.dS()
return new A.R(s,A.n(s).i("R<1>"))},
gaU(){var s=this.dS()
return new A.ao(s,A.n(s).i("ao<2>"))},
gm(a){return this.dS().a}}
A.iA.prototype={
u(a,b){A.Jl()}}
A.dC.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gS(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hN(s,s.length,r.$ti.i("hN<1>"))},
E(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
cr(a){return A.bW(this,this.$ti.c)}}
A.u_.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.iT&&this.a.P(0,b.a)&&A.Ez(this)===A.Ez(b)},
gK(a){return A.cd(this.a,A.Ez(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.C([A.bO(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iT.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Om(A.pN(this.a),this.$ti)}}
A.wQ.prototype={
$0(){return B.w.vC(1000*this.a.now())},
$S:10}
A.jG.prototype={}
A.yy.prototype={
bY(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.jp.prototype={
l(a){return"Null check operator used on a null value"}}
A.mE.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.od.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.n2.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iH:1}
A.iF.prototype={}
A.ku.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaJ:1}
A.es.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.I6(r==null?"unknown":r)+"'"},
gam(a){var s=A.pN(this)
return A.bO(s==null?A.bk(this):s)},
gyC(){return this},
$C:"$1",
$R:1,
$D:null}
A.qv.prototype={$C:"$0",$R:0}
A.qw.prototype={$C:"$2",$R:2}
A.ym.prototype={}
A.xV.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.I6(s)+"'"}}
A.iq.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.iq))return!1
return this.$_target===b.$_target&&this.a===b.a},
gK(a){return(A.kX(this.a)^A.eO(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.nc(this.a)+"'")}}
A.nu.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bI.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.R(this,A.n(this).i("R<1>"))},
gaU(){return new A.ao(this,A.n(this).i("ao<2>"))},
ga0(){return new A.aN(this,A.n(this).i("aN<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.na(a)},
na(a){var s=this.d
if(s==null)return!1
return this.dq(this.lO(s,a),a)>=0},
D(a,b){b.a5(0,new A.u7(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nb(b)},
nb(a){var s,r,q=this.d
if(q==null)return null
s=this.lO(q,a)
r=this.dq(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.lb(s==null?q.b=q.jC():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.lb(r==null?q.c=q.jC():r,b,c)}else q.nd(b,c)},
nd(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jC()
s=p.el(a)
r=o[s]
if(r==null)o[s]=[p.j2(a,b)]
else{q=p.dq(r,a)
if(q>=0)r[q].b=b
else r.push(p.j2(a,b))}},
nq(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
G(a,b){var s=this
if(typeof b=="string")return s.mf(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.mf(s.c,b)
else return s.nc(b)},
nc(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.el(a)
r=n[s]
q=o.dq(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.my(p)
if(r.length===0)delete n[s]
return p.b},
aq(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.j1()}},
a5(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ay(s))
r=r.c}},
lb(a,b,c){var s=a[b]
if(s==null)a[b]=this.j2(b,c)
else s.b=c},
mf(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.my(s)
delete a[b]
return s.b},
j1(){this.r=this.r+1&1073741823},
j2(a,b){var s,r=this,q=new A.va(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.j1()
return q},
my(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.j1()},
el(a){return J.aa(a)&1073741823},
lO(a,b){return a[this.el(b)]},
dq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.vw(this)},
jC(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.u7.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.va.prototype={}
A.R.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bJ(s,s.r,s.e,this.$ti.i("bJ<1>"))},
E(a,b){return this.a.I(b)}}
A.bJ.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ao.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aY(s,s.r,s.e,this.$ti.i("aY<1>"))}}
A.aY.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aN.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.mM(s,s.r,s.e,this.$ti.i("mM<1,2>"))}}
A.mM.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.U(s.a,s.b,r.$ti.i("U<1,2>"))
r.c=s.c
return!0}}}
A.iZ.prototype={
el(a){return A.kX(a)&1073741823},
dq(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iY.prototype={
el(a){return A.NP(a)&1073741823},
dq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.CN.prototype={
$1(a){return this.a(a)},
$S:39}
A.CO.prototype={
$2(a,b){return this.a(a,b)},
$S:209}
A.CP.prototype={
$1(a){return this.a(a)},
$S:72}
A.hQ.prototype={
gam(a){return A.bO(this.lP())},
lP(){return A.O4(this.$r,this.hi())},
l(a){return this.mw(!1)},
mw(a){var s,r,q,p,o,n=this.qr(),m=this.hi(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.FH(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qr(){var s,r=this.$s
while($.B5.length<=r)$.B5.push(null)
s=$.B5[r]
if(s==null){s=this.pV()
$.B5[r]=s}return s},
pV(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Fo(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fR(j,k)}}
A.p8.prototype={
hi(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.p8&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gK(a){return A.cd(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.p9.prototype={
hi(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.p9&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gK(a){var s=this
return A.cd(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.pa.prototype={
hi(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.pa&&this.$s===b.$s&&A.LF(this.a,b.a)},
gK(a){return A.cd(this.$s,A.vZ(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eE.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gm0(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Dx(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gr6(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Dx(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pW(){var s,r=this.a
if(!B.a.E(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ei(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hP(s)},
k_(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.oy(this,b,c)},
hM(a,b){return this.k_(0,b,0)},
qo(a,b){var s,r=this.gm0()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hP(s)},
qn(a,b){var s,r=this.gr6()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hP(s)},
eq(a,b,c){if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,null,null))
return this.qn(b,c)}}
A.hP.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieI:1,
$inm:1}
A.oy.prototype={
gt(a){return new A.oz(this.a,this.b,this.c)}}
A.oz.prototype={
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
A.ho.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.xv(b,null))
return this.c},
$ieI:1,
gR(){return this.a}}
A.po.prototype={
gt(a){return new A.Br(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ho(r,s)
throw A.b(A.az())}}
A.Br.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ho(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.oH.prototype={
aE(){var s=this.b
if(s===this)throw A.b(new A.dJ("Local '"+this.a+"' has not been initialized."))
return s},
bC(){var s=this.b
if(s===this)throw A.b(A.Ft(this.a))
return s},
si4(a){var s=this
if(s.b!==s)throw A.b(new A.dJ("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fZ.prototype={
gam(a){return B.dZ},
hO(a,b,c){A.i2(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mL(a){return this.hO(a,0,null)},
mK(a,b,c){A.i2(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hN(a,b,c){A.i2(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mJ(a){return this.hN(a,0,null)},
$iam:1,
$ieo:1}
A.fY.prototype={$ifY:1}
A.jk.prototype={
gac(a){if(((a.$flags|0)&2)!==0)return new A.pw(a.buffer)
else return a.buffer},
qX(a,b,c,d){var s=A.aA(b,0,c,d,null)
throw A.b(s)},
lm(a,b,c,d){if(b>>>0!==b||b>c)this.qX(a,b,c,d)}}
A.pw.prototype={
hO(a,b,c){var s=A.bY(this.a,b,c)
s.$flags=3
return s},
mL(a){return this.hO(0,0,null)},
mK(a,b,c){var s=A.FA(this.a,b,c)
s.$flags=3
return s},
hN(a,b,c){var s=A.Fz(this.a,b,c)
s.$flags=3
return s},
mJ(a){return this.hN(0,0,null)},
$ieo:1}
A.jj.prototype={
gam(a){return B.e_},
$iam:1,
$iDg:1}
A.h_.prototype={
gm(a){return a.length},
mp(a,b,c,d,e){var s,r,q=a.length
this.lm(a,b,q,"start")
this.lm(a,c,q,"end")
if(b>c)throw A.b(A.aA(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.S(e,null))
r=d.length
if(r-e<s)throw A.b(A.A("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibg:1,
$ibV:1}
A.dR.prototype={
h(a,b){A.du(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.J(a)
A.du(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.J(a,5)
if(t.dQ.b(d)){this.mp(a,b,c,d,e)
return}this.l8(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iK:1,
$io:1,
$iq:1}
A.bX.prototype={
j(a,b,c){a.$flags&2&&A.J(a)
A.du(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.J(a,5)
if(t.aj.b(d)){this.mp(a,b,c,d,e)
return}this.l8(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iK:1,
$io:1,
$iq:1}
A.mW.prototype={
gam(a){return B.e1},
U(a,b,c){return new Float32Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$itl:1}
A.mX.prototype={
gam(a){return B.e2},
U(a,b,c){return new Float64Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$itm:1}
A.mY.prototype={
gam(a){return B.e3},
h(a,b){A.du(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$iu0:1}
A.mZ.prototype={
gam(a){return B.e4},
h(a,b){A.du(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$iu1:1}
A.n_.prototype={
gam(a){return B.e5},
h(a,b){A.du(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$iu2:1}
A.jl.prototype={
gam(a){return B.eb},
h(a,b){A.du(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$iyA:1}
A.jm.prototype={
gam(a){return B.ec},
h(a,b){A.du(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$iyB:1}
A.jn.prototype={
gam(a){return B.ed},
gm(a){return a.length},
h(a,b){A.du(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$iyC:1}
A.eK.prototype={
gam(a){return B.ee},
gm(a){return a.length},
h(a,b){A.du(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8Array(a.subarray(b,A.dv(b,c,a.length)))},
bb(a,b){return this.U(a,b,null)},
$iam:1,
$ieK:1,
$icV:1}
A.kn.prototype={}
A.ko.prototype={}
A.kp.prototype={}
A.kq.prototype={}
A.ct.prototype={
i(a){return A.kD(v.typeUniverse,this,a)},
Z(a){return A.Gx(v.typeUniverse,this,a)}}
A.oW.prototype={}
A.pt.prototype={
l(a){return A.c2(this.a,null)}}
A.oT.prototype={
l(a){return this.a}}
A.kz.prototype={$idl:1}
A.zr.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:28}
A.zq.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:206}
A.zs.prototype={
$0(){this.a.$0()},
$S:2}
A.zt.prototype={
$0(){this.a.$0()},
$S:2}
A.ky.prototype={
pk(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.eh(new A.Bv(this,b),0),a)
else throw A.b(A.a2("`setTimeout()` not found."))},
pl(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.eh(new A.Bu(this,a,Date.now(),b),0),a)
else throw A.b(A.a2("Periodic timer."))},
v(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.a2("Canceling a timer."))},
$idk:1}
A.Bv.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.Bu.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.j_(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.k1.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aG(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.ll(a)
else s.d5(a)}},
bu(a,b){var s
if(b==null)b=A.ik(a)
s=this.a
if(this.b)s.ap(new A.ar(a,b))
else s.cw(new A.ar(a,b))},
aR(a){return this.bu(a,null)},
$iiw:1}
A.BW.prototype={
$1(a){return this.a.$2(0,a)},
$S:27}
A.BX.prototype={
$2(a,b){this.a.$2(1,new A.iF(a,b))},
$S:85}
A.Cl.prototype={
$2(a,b){this.a(a,b)},
$S:101}
A.BU.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.t()
s=q.b
if((s&1)!==0?(q.gaQ().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.BV.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:28}
A.oB.prototype={
pg(a,b){var s=new A.zv(a)
this.a=A.nL(new A.zx(this,a),new A.zy(s),null,new A.zz(this,s),!1,b)}}
A.zv.prototype={
$0(){A.l_(new A.zw(this.a))},
$S:2}
A.zw.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.zy.prototype={
$0(){this.a.$0()},
$S:0}
A.zz.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.zx.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.t()
if((r.b&4)===0){s.c=new A.w($.B,t._)
if(s.b){s.b=!1
A.l_(new A.zu(this.b))}return s.c}},
$S:130}
A.zu.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.kj.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.pq.prototype={
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
if(p==null||p.length===0){o.a=A.Gr
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Gr
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.A("sync*"))}return!1},
yD(a){var s,r,q=this
if(a instanceof A.hW){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hW.prototype={
gt(a){return new A.pq(this.a(),this.$ti.i("pq<1>"))}}
A.ar.prototype={
l(a){return A.r(this.a)},
$iag:1,
gcu(){return this.b}}
A.b6.prototype={}
A.f0.prototype={
bR(){},
bS(){}}
A.k7.prototype={
gcv(){return new A.b6(this,A.n(this).i("b6<1>"))},
gil(){return(this.c&4)!==0},
gjA(){return this.c<4},
t3(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.Gi(c,A.n(j).c)
s=A.n(j)
r=$.B
q=d?1:0
p=b!=null?32:0
o=A.oF(r,a,s.c)
n=A.zG(r,b)
m=c==null?A.Cn():c
l=new A.f0(j,o,n,r.c0(m,t.H),r,q|p,s.i("f0<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pJ(j.a)
return l},
m9(a){var s,r=this
A.n(r).i("f0<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.t3(a)
if((r.c&2)===0&&r.d==null)r.pH()}return null},
ma(a){},
mb(a){},
j4(){if((this.c&4)!==0)return new A.bp("Cannot add new events after calling close")
return new A.bp("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjA())throw A.b(this.j4())
this.cG(b)},
bi(a,b){var s
if(!this.gjA())throw A.b(this.j4())
s=A.fd(a,b)
this.cH(s.a,s.b)},
jZ(a){return this.bi(a,null)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjA())throw A.b(q.j4())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.B,t.D)
q.df()
return r},
aL(a,b){this.cH(a,b)},
aV(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aG(null)},
pH(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aG(null)}A.pJ(this.b)},
$ibH:1}
A.k2.prototype={
cG(a){var s,r
for(s=this.d,r=this.$ti.i("ch<1>");s!=null;s=s.ch)s.c5(new A.ch(a,r))},
cH(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.c5(new A.hI(a,b))},
df(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.c5(B.ac)
else this.r.aG(null)}}
A.tv.prototype={
$0(){this.c.a(null)
this.b.cz(null)},
$S:0}
A.tx.prototype={
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
A.tw.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.d3(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aM(s,n)}m.c.d5(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ap(new A.ar(s,l))}},
$S(){return this.d.i("W(0)")}}
A.tq.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aJ)")}}
A.o3.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iH:1}
A.tr.prototype={
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
l.a.aR(new A.jt(B.b.n4(s,A.Nr()),a,q.i("jt<q<0?>,q<ar?>>")))}},
$S:9}
A.jt.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcu(){var s=this.c
s=s==null?null:s.b
return s==null?A.ag.prototype.gcu.call(this):s}}
A.kh.prototype={
tO(a){this.a.b0(new A.Ar(this,a),new A.As(this,a),t.P)}}
A.Ar.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.As.prototype={
$2(a,b){this.a.c=new A.ar(a,b)
this.b.$1(1)},
$S:6}
A.Aq.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.f1.prototype={
bu(a,b){if((this.a.a&30)!==0)throw A.b(A.A("Future already completed"))
this.ap(A.fd(a,b))},
aR(a){return this.bu(a,null)},
$iiw:1}
A.aF.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.aG(a)},
ak(){return this.aB(null)},
ap(a){this.a.cw(a)}}
A.at.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.cz(a)},
ak(){return this.aB(null)},
ap(a){this.a.ap(a)}}
A.ci.prototype={
wu(a){if((this.c&15)!==6)return!0
return this.b.b.eB(this.d,a.a,t.y,t.K)},
vQ(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kJ(r,n,a.b,p,o,t.l)
else q=m.eB(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.D(s))){if((this.c&1)!==0)throw A.b(A.S("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.S("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
b0(a,b,c){var s,r,q=$.B
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aD(b,"onError",u.w))}else{a=q.du(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.H8(b,q)}s=new A.w($.B,c.i("w<0>"))
r=b==null?1:3
this.dK(new A.ci(s,r,a,b,this.$ti.i("@<1>").Z(c).i("ci<1,2>")))
return s},
W(a,b){return this.b0(a,null,b)},
mu(a,b,c){var s=new A.w($.B,c.i("w<0>"))
this.dK(new A.ci(s,19,a,b,this.$ti.i("@<1>").Z(c).i("ci<1,2>")))
return s},
k6(a){var s=this.$ti,r=$.B,q=new A.w(r,s)
if(r!==B.i)a=A.H8(a,r)
this.dK(new A.ci(q,2,null,a,s.i("ci<1,1>")))
return q},
b2(a){var s=this.$ti,r=$.B,q=new A.w(r,s)
if(r!==B.i)a=r.c0(a,t.z)
this.dK(new A.ci(q,8,a,null,s.i("ci<1,1>")))
return q},
tl(a){this.a=this.a&1|16
this.c=a},
h5(a){this.a=a.a&30|this.a&1
this.c=a.c},
dK(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dK(a)
return}s.h5(r)}s.b.d0(new A.At(s,a))}},
m7(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.m7(a)
return}n.h5(s)}m.a=n.hv(a)
n.b.d0(new A.Ay(m,n))}},
eX(){var s=this.c
this.c=null
return this.hv(s)},
hv(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cz(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.Aw(a,r,!0)
else{s=r.eX()
r.a=8
r.c=a
A.f4(r,s)}},
d5(a){var s=this,r=s.eX()
s.a=8
s.c=a
A.f4(s,r)},
pU(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gcg()===r.gcg())}else s=!1
if(s)return
q=p.eX()
p.h5(a)
A.f4(p,q)},
ap(a){var s=this.eX()
this.tl(a)
A.f4(this,s)},
pT(a,b){this.ap(new A.ar(a,b))},
aG(a){if(this.$ti.i("y<1>").b(a)){this.ll(a)
return}this.li(a)},
li(a){this.a^=2
this.b.d0(new A.Av(this,a))},
ll(a){A.Aw(a,this,!1)
return},
cw(a){this.a^=2
this.b.d0(new A.Au(this,a))},
fM(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.B,r.$ti)
q.aG(r)
return q}s=new A.w($.B,r.$ti)
q.a=null
q.a=A.c_(a,new A.AE(s,a))
r.b0(new A.AF(q,r,s),new A.AG(q,s),t.P)
return s},
$iy:1}
A.At.prototype={
$0(){A.f4(this.a,this.b)},
$S:0}
A.Ay.prototype={
$0(){A.f4(this.b,this.a.a)},
$S:0}
A.Ax.prototype={
$0(){A.Aw(this.a.a,this.b,!0)},
$S:0}
A.Av.prototype={
$0(){this.a.d5(this.b)},
$S:0}
A.Au.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.AB.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b_(q.d,t.z)}catch(p){s=A.D(p)
r=A.ae(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ik(q)
n=k.a
n.c=new A.ar(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.b0(new A.AC(l,m),new A.AD(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.AC.prototype={
$1(a){this.a.pU(this.b)},
$S:28}
A.AD.prototype={
$2(a,b){this.a.ap(new A.ar(a,b))},
$S:6}
A.AA.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.eB(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.D(n)
r=A.ae(n)
q=s
p=r
if(p==null)p=A.ik(q)
o=this.a
o.c=new A.ar(q,p)
o.b=!0}},
$S:0}
A.Az.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.wu(s)&&p.a.e!=null){p.c=p.a.vQ(s)
p.b=!1}}catch(o){r=A.D(o)
q=A.ae(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ik(p)
m=l.b
m.c=new A.ar(p,n)
p=m}p.b=!0}},
$S:0}
A.AE.prototype={
$0(){var s=A.DP()
this.a.ap(new A.ar(new A.o3("Future not completed",this.b),s))},
$S:0}
A.AF.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.v()
this.c.d5(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.AG.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.v()
this.b.ap(new A.ar(a,b))}},
$S:6}
A.oA.prototype={}
A.ac.prototype={
en(a){var s=new A.w($.B,t.os),r=new A.a5(""),q=this.aa(null,!0,new A.xZ(s,r),s.gjb())
q.iu(new A.y_(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.B,t.hy)
s.a=0
this.aa(new A.y0(s,this),!0,new A.y1(s,r),r.gjb())
return r},
gH(a){var s=new A.w($.B,A.n(this).i("w<ac.T>")),r=this.aa(null,!0,new A.xX(s),s.gjb())
r.iu(new A.xY(this,r,s))
return s}}
A.xZ.prototype={
$0(){var s=this.b.a
this.a.cz(s.charCodeAt(0)==0?s:s)},
$S:0}
A.y_.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.D(o)
r=A.ae(o)
q=s
p=r
n=A.kK(q,p)
if(n==null)q=new A.ar(q,p)
else q=n
A.Ma(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(ac.T)")}}
A.y0.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(ac.T)")}}
A.y1.prototype={
$0(){this.b.cz(this.a.a)},
$S:0}
A.xX.prototype={
$0(){var s,r=A.DP(),q=new A.bp("No element")
A.ne(q,r)
s=A.kK(q,r)
if(s==null)s=new A.ar(q,r)
this.a.ap(s)},
$S:0}
A.xY.prototype={
$1(a){A.Mb(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(ac.T)")}}
A.jR.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bx(a,b,c){return this.aa(a,null,b,c)},
aW(a){return this.aa(a,null,null,null)}}
A.eb.prototype={
gcv(){return new A.bc(this,A.n(this).i("bc<1>"))},
gil(){return(this.b&4)!==0},
grv(){if((this.b&8)===0)return this.a
return this.a.c},
ha(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e9(A.n(q).i("e9<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e9(A.n(q).i("e9<1>")):s},
gaQ(){var s=this.a
return(this.b&8)!==0?s.c:s},
bO(){if((this.b&4)!==0)return new A.bp("Cannot add event after closing")
return new A.bp("Cannot add event while adding a stream")},
u6(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bO())
if((o&2)!==0){o=new A.w($.B,t._)
o.aG(null)
return o}o=p.a
s=b===!0
r=new A.w($.B,t._)
q=s?A.L2(p):p.gpp()
q=a.aa(p.gpt(),s,p.gpK(),q)
s=p.b
if((s&1)!==0?(p.gaQ().e&4)!==0:(s&2)===0)q.b5()
p.a=new A.kv(o,r,q,A.n(p).i("kv<1>"))
p.b|=8
return r},
lF(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.ek():new A.w($.B,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bO())
this.aD(b)},
bi(a,b){var s
if(this.b>=4)throw A.b(this.bO())
s=A.fd(a,b)
this.aL(s.a,s.b)},
jZ(a){return this.bi(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lF()
if(r>=4)throw A.b(s.bO())
s.ln()
return s.lF()},
ln(){var s=this.b|=4
if((s&1)!==0)this.df()
else if((s&3)===0)this.ha().u(0,B.ac)},
aD(a){var s=this,r=s.b
if((r&1)!==0)s.cG(a)
else if((r&3)===0)s.ha().u(0,new A.ch(a,A.n(s).i("ch<1>")))},
aL(a,b){var s=this.b
if((s&1)!==0)this.cH(a,b)
else if((s&3)===0)this.ha().u(0,new A.hI(a,b))},
aV(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aG(null)},
jR(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.A("Stream has already been listened to."))
s=A.Lk(p,a,b,c,d,A.n(p).c)
r=p.grv()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.aY()}else p.a=s
s.tm(r)
s.jp(new A.Bn(p))
return s},
m9(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.v()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.D(o)
p=A.ae(o)
n=new A.w($.B,t.D)
n.cw(new A.ar(q,p))
k=n}else k=k.b2(s)
m=new A.Bm(l)
if(k!=null)k=k.b2(m)
else m.$0()
return k},
ma(a){if((this.b&8)!==0)this.a.b.b5()
A.pJ(this.e)},
mb(a){if((this.b&8)!==0)this.a.b.aY()
A.pJ(this.f)},
$ibH:1}
A.Bn.prototype={
$0(){A.pJ(this.a.d)},
$S:0}
A.Bm.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aG(null)},
$S:0}
A.pr.prototype={
cG(a){this.gaQ().aD(a)},
cH(a,b){this.gaQ().aL(a,b)},
df(){this.gaQ().aV()}}
A.k3.prototype={
cG(a){this.gaQ().c5(new A.ch(a,A.n(this).i("ch<1>")))},
cH(a,b){this.gaQ().c5(new A.hI(a,b))},
df(){this.gaQ().c5(B.ac)}}
A.cZ.prototype={}
A.hX.prototype={}
A.bc.prototype={
gK(a){return(A.eO(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bc&&b.a===this.a}}
A.e5.prototype={
hn(){return this.w.m9(this)},
bR(){this.w.ma(this)},
bS(){this.w.mb(this)}}
A.ox.prototype={
v(){var s=this.b.v()
return s.b2(new A.zm(this))}}
A.zn.prototype={
$2(a,b){var s=this.a
s.aL(a,b)
s.aV()},
$S:6}
A.zm.prototype={
$0(){this.a.a.aG(null)},
$S:2}
A.kv.prototype={}
A.b7.prototype={
tm(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fW(s)}},
iu(a){this.a=A.oF(this.d,a,A.n(this).i("b7.T"))},
b5(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jp(q.geP())},
aY(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fW(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jp(s.geQ())}}},
v(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.j7()
r=s.f
return r==null?$.ek():r},
j7(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hn()},
aD(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cG(a)
else s.c5(new A.ch(a,A.n(s).i("ch<b7.T>")))},
aL(a,b){var s
if(t.C.b(a))A.ne(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cH(a,b)
else this.c5(new A.hI(a,b))},
aV(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.df()
else s.c5(B.ac)},
bR(){},
bS(){},
hn(){return null},
c5(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e9(A.n(r).i("e9<b7.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fW(r)}},
cG(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fL(s.a,a,A.n(s).i("b7.T"))
s.e=(s.e&4294967231)>>>0
s.j9((r&4)!==0)},
cH(a,b){var s,r=this,q=r.e,p=new A.zI(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.j7()
s=r.f
if(s!=null&&s!==$.ek())s.b2(p)
else p.$0()}else{p.$0()
r.j9((q&4)!==0)}},
df(){var s,r=this,q=new A.zH(r)
r.j7()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.ek())s.b2(q)
else q.$0()},
jp(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.j9((r&4)!==0)},
j9(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bR()
else q.bS()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fW(q)},
$ibq:1}
A.zI.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nz(s,o,this.c,r,t.l)
else q.fL(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.zH.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fK(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hV.prototype={
aa(a,b,c,d){return this.a.jR(a,d,c,b===!0)},
bx(a,b,c){return this.aa(a,null,b,c)},
aW(a){return this.aa(a,null,null,null)},
nf(a,b){return this.aa(a,null,null,b)}}
A.oS.prototype={
ger(){return this.a},
ser(a){return this.a=a}}
A.ch.prototype={
kE(a){a.cG(this.b)}}
A.hI.prototype={
kE(a){a.cH(this.b,this.c)}}
A.Aj.prototype={
kE(a){a.df()},
ger(){return null},
ser(a){throw A.b(A.A("No events after a done."))}}
A.e9.prototype={
fW(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.l_(new A.B4(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.ser(b)
s.c=b}}}
A.B4.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.ger()
q.b=r
if(r==null)q.c=null
s.kE(this.b)},
$S:0}
A.hJ.prototype={
iu(a){},
b5(){var s=this.a
if(s>=0)this.a=s+2},
aY(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.l_(s.gm3())}else s.a=r},
v(){this.a=-1
this.c=null
return $.ek()},
rl(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fK(s)}}else r.a=q},
$ibq:1}
A.cD.prototype={
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
return s}return $.Ic()},
v(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aG(!1)
else s.c=!1
return r.v()}return $.ek()},
re(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cz(!0)
if(q.c){r=q.a
if(r!=null)r.b5()}},
ri(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ap(new A.ar(a,b))
else q.cw(new A.ar(a,b))},
rg(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.d5(!1)
else q.li(!1)}}
A.kc.prototype={
aa(a,b,c,d){return A.Gi(c,this.$ti.c)},
bx(a,b,c){return this.aa(a,null,b,c)}}
A.ds.prototype={
aa(a,b,c,d){var s=null,r=new A.km(s,s,s,s,this.$ti.i("km<1>"))
r.d=new A.B2(this,r)
return r.jR(a,d,c,b===!0)},
bx(a,b,c){return this.aa(a,null,b,c)},
aW(a){return this.aa(a,null,null,null)}}
A.B2.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.km.prototype={
u7(a){var s=this.b
if(s>=4)throw A.b(this.bO())
if((s&1)!==0)this.gaQ().aD(a)},
uo(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bO())
r|=4
s.b=r
if((r&1)!==0)s.gaQ().aV()},
gcv(){throw A.b(A.a2("Not available"))},
$idP:1}
A.BZ.prototype={
$0(){return this.a.ap(this.b)},
$S:0}
A.C_.prototype={
$0(){return this.a.cz(this.b)},
$S:0}
A.kf.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.B,q=b===!0?1:0,p=d!=null?32:0,o=A.oF(r,a,s.y[1]),n=A.zG(r,d),m=c==null?A.Cn():c
s=new A.hM(this,o,n,r.c0(m,t.H),r,q|p,s.i("hM<1,2>"))
s.x=this.a.bx(s.gjq(),s.gjs(),s.gju())
return s},
bx(a,b,c){return this.aa(a,null,b,c)}}
A.hM.prototype={
aD(a){if((this.e&2)!==0)return
this.iZ(a)},
aL(a,b){if((this.e&2)!==0)return
this.l9(a,b)},
bR(){var s=this.x
if(s!=null)s.b5()},
bS(){var s=this.x
if(s!=null)s.aY()},
hn(){var s=this.x
if(s!=null){this.x=null
return s.v()}return null},
jr(a){this.w.qI(a,this)},
jv(a,b){this.aL(a,b)},
jt(){this.aV()}}
A.f7.prototype={
qI(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.D(q)
r=A.ae(q)
p=s
o=r
n=A.kK(p,o)
if(n!=null){p=n.a
o=n.b}b.aL(p,o)
return}b.aD(m)}}
A.kd.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.v(A.A("Stream is already closed"))
s.iZ(b)},
bi(a,b){this.a.aL(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.v(A.A("Stream is already closed"))
s.la()},
$ibH:1}
A.hT.prototype={
aD(a){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.iZ(a)},
aL(a,b){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.l9(a,b)},
aV(){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.la()},
bR(){var s=this.x
if(s!=null)s.b5()},
bS(){var s=this.x
if(s!=null)s.aY()},
hn(){var s=this.x
if(s!=null){this.x=null
return s.v()}return null},
jr(a){var s,r,q,p
try{q=this.w
q===$&&A.t()
q.u(0,a)}catch(p){s=A.D(p)
r=A.ae(p)
this.aL(s,r)}},
jv(a,b){var s,r,q,p
try{q=this.w
q===$&&A.t()
q.bi(a,b)}catch(p){s=A.D(p)
r=A.ae(p)
if(s===a)this.aL(a,b)
else this.aL(s,r)}},
jt(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.t()
q.q()}catch(p){s=A.D(p)
r=A.ae(p)
this.aL(s,r)}}}
A.k6.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.B,q=b===!0?1:0,p=d!=null?32:0,o=A.oF(r,a,s.y[1]),n=A.zG(r,d),m=c==null?A.Cn():c,l=new A.hT(o,n,r.c0(m,t.H),r,q|p,s.i("hT<1,2>"))
l.w=this.a.$1(new A.kd(l,s.i("kd<2>")))
l.x=this.b.bx(l.gjq(),l.gjs(),l.gju())
return l},
bx(a,b,c){return this.aa(a,null,b,c)}}
A.BQ.prototype={}
A.BS.prototype={}
A.BR.prototype={}
A.BO.prototype={}
A.BP.prototype={}
A.BN.prototype={}
A.BK.prototype={}
A.pC.prototype={}
A.BJ.prototype={}
A.BI.prototype={}
A.BM.prototype={}
A.BL.prototype={}
A.pB.prototype={
vI(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.pD.prototype={}
A.pA.prototype={
eT(a,b,c){var s,r,q,p,o,n,m=this.gjx(),l=m.a
if(l===B.i){A.kQ(b,c)
return}o=l.gkB()
o.toString
s=o
r=$.B
try{$.B=s
m.vI(l,l.gbe(),a,b,c)
$.B=r}catch(n){q=A.D(n)
p=A.ae(n)
$.B=r
o=b===q?c:p
s.eT(l,q,o)}},
$iQ:1}
A.oM.prototype={
glC(){var s=this.ax
return s==null?this.ax=new A.i0(this):s},
gbe(){return this.ay.glC()},
gcg(){return this.as.a},
fK(a){var s,r,q
try{this.b_(a,t.H)}catch(q){s=A.D(q)
r=A.ae(q)
this.eT(this,s,r)}},
fL(a,b,c){var s,r,q
try{this.eB(a,b,t.H,c)}catch(q){s=A.D(q)
r=A.ae(q)
this.eT(this,s,r)}},
nz(a,b,c,d,e){var s,r,q
try{this.kJ(a,b,c,t.H,d,e)}catch(q){s=A.D(q)
r=A.ae(q)
this.eT(this,s,r)}},
k5(a,b){return new A.Af(this,this.c0(a,b),b)},
uk(a,b,c){return new A.Ah(this,this.du(a,b,c),c,b)},
f4(a){return new A.Ae(this,this.c0(a,t.H))},
hR(a,b){return new A.Ag(this,this.du(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aR)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.t0(q,b)},
t0(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkB().gjY()
if(s===B.aR)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fl(a,b){this.eT(this,a,b)},
n5(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gbe(),this,a,b)},
b_(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gbe(),this,a,b)},
eB(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gbe(),this,a,b,c,d)},
kJ(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gbe(),this,a,b,c,d,e,f)},
c0(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gbe(),this,a,b)},
du(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gbe(),this,a,b,c)},
fE(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gbe(),this,a,b,c,d)},
n1(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gbe(),this,a,b)},
d0(a){var s=this.w,r=s.a
return s.b.$4(r,r.gbe(),this,a)},
kb(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gbe(),this,a,b)},
ka(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gbe(),this,a,b)},
gmh(){return this.a},
gml(){return this.b},
gmj(){return this.c},
gmd(){return this.d},
gme(){return this.e},
gmc(){return this.f},
glH(){return this.r},
gjO(){return this.w},
gly(){return this.x},
glx(){return this.y},
gm8(){return this.z},
glM(){return this.Q},
gjx(){return this.as},
gjY(){return this.at},
gkB(){return this.ay}}
A.Af.prototype={
$0(){return this.a.b_(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Ah.prototype={
$1(a){var s=this
return s.a.eB(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").Z(this.c).i("1(2)")}}
A.Ae.prototype={
$0(){return this.a.fK(this.b)},
$S:0}
A.Ag.prototype={
$1(a){return this.a.fL(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.pf.prototype={
gmh(){return B.ev},
gml(){return B.eu},
gmj(){return B.et},
gmd(){return B.er},
gme(){return B.es},
gmc(){return B.eq},
glH(){return B.em},
gjO(){return B.ew},
gly(){return B.el},
glx(){return B.ek},
gm8(){return B.ep},
glM(){return B.en},
gjx(){return B.eo},
gjY(){return B.aR},
gkB(){return null},
glC(){var s=$.B9
return s==null?$.B9=new A.i0(this):s},
gbe(){var s=$.B9
return s==null?$.B9=new A.i0(this):s},
gcg(){return this},
fK(a){var s,r,q
try{if(B.i===$.B){a.$0()
return}A.Ch(null,null,this,a)}catch(q){s=A.D(q)
r=A.ae(q)
A.kQ(s,r)}},
fL(a,b){var s,r,q
try{if(B.i===$.B){a.$1(b)
return}A.Ci(null,null,this,a,b)}catch(q){s=A.D(q)
r=A.ae(q)
A.kQ(s,r)}},
nz(a,b,c){var s,r,q
try{if(B.i===$.B){a.$2(b,c)
return}A.En(null,null,this,a,b,c)}catch(q){s=A.D(q)
r=A.ae(q)
A.kQ(s,r)}},
k5(a,b){return new A.Bb(this,a,b)},
f4(a){return new A.Ba(this,a)},
hR(a,b){return new A.Bc(this,a,b)},
h(a,b){return null},
fl(a,b){A.kQ(a,b)},
n5(a,b){return A.Hc(null,null,this,a,b)},
b_(a){if($.B===B.i)return a.$0()
return A.Ch(null,null,this,a)},
eB(a,b){if($.B===B.i)return a.$1(b)
return A.Ci(null,null,this,a,b)},
kJ(a,b,c){if($.B===B.i)return a.$2(b,c)
return A.En(null,null,this,a,b,c)},
c0(a){return a},
du(a){return a},
fE(a){return a},
n1(a,b){return null},
d0(a){A.Cj(null,null,this,a)},
kb(a,b){return A.DW(a,b)},
ka(a,b){return A.FT(a,b)}}
A.Bb.prototype={
$0(){return this.a.b_(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Ba.prototype={
$0(){return this.a.fK(this.b)},
$S:0}
A.Bc.prototype={
$1(a){return this.a.fL(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.i0.prototype={$iav:1}
A.Cg.prototype={
$0(){A.Fb(this.a,this.b)},
$S:0}
A.k0.prototype={}
A.dq.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.f5(this,A.n(this).i("f5<1>"))},
gaU(){var s=A.n(this)
return A.dN(new A.f5(this,s.i("f5<1>")),new A.AI(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lt(a)},
lt(a){var s=this.d
if(s==null)return!1
return this.c9(this.lp(s,a),a)>=0},
D(a,b){b.a5(0,new A.AH(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Gk(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Gk(q,b)
return r}else return this.lN(b)},
lN(a){var s,r,q=this.d
if(q==null)return null
s=this.lp(q,a)
r=this.c9(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.lf(s==null?q.b=A.E5():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.lf(r==null?q.c=A.E5():r,b,c)}else q.mo(b,c)},
mo(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.E5()
s=p.cA(a)
r=o[s]
if(r==null){A.E6(o,s,[a,b]);++p.a
p.e=null}else{q=p.c9(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a5(a,b){var s,r,q,p,o,n=this,m=n.lo()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.ay(n))}},
lo(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
lf(a,b,c){if(a[b]==null){++this.a
this.e=null}A.E6(a,b,c)},
cA(a){return J.aa(a)&1073741823},
lp(a,b){return a[this.cA(b)]},
c9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.AI.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.AH.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.e6.prototype={
cA(a){return A.kX(a)&1073741823},
c9(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.k9.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.p0(b)},
j(a,b,c){this.p5(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.p_(a)},
cA(a){return this.r.$1(a)&1073741823},
c9(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.Ad.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.f5.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gS(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.oX(s,s.lo(),this.$ti.i("oX<1>"))},
E(a,b){return this.a.I(b)}}
A.oX.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ay(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.kk.prototype={
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
A.B0.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.cC.prototype={
m1(){return new A.cC(A.n(this).i("cC<1>"))},
gt(a){var s=this,r=new A.e8(s,s.r,A.n(s).i("e8<1>"))
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
return r[b]!=null}else return this.pZ(b)},
pZ(a){var s=this.d
if(s==null)return!1
return this.c9(s[this.cA(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.A("No elements"))
return s.a},
ga_(a){var s=this.f
if(s==null)throw A.b(A.A("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.le(s==null?q.b=A.E7():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.le(r==null?q.c=A.E7():r,b)}else return q.pn(b)},
pn(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.E7()
s=q.cA(a)
r=p[s]
if(r==null)p[s]=[q.jD(a)]
else{if(q.c9(r,a)>=0)return!1
r.push(q.jD(a))}return!0},
G(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lq(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lq(s.c,b)
else return s.jL(b)},
jL(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cA(a)
r=n[s]
q=o.c9(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lr(p)
return!0},
le(a,b){if(a[b]!=null)return!1
a[b]=this.jD(b)
return!0},
lq(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lr(s)
delete a[b]
return!0},
jB(){this.r=this.r+1&1073741823},
jD(a){var s,r=this,q=new A.B1(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jB()
return q},
lr(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jB()},
cA(a){return J.aa(a)&1073741823},
c9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.B1.prototype={}
A.e8.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ay(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.vb.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:70}
A.eF.prototype={
E(a,b){return b instanceof A.b9&&this===b.a},
gt(a){var s=this
return new A.p3(s,s.a,s.c,s.$ti.i("p3<1>"))},
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
hl(a,b,c){var s,r,q=this
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
jT(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.p3.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.ay(s))
if(r.b!==0)r=s.e&&s.d===r.gH(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b9.prototype={
gfz(){var s=this.a
if(s==null||this===s.gH(0))return null
return this.c}}
A.L.prototype={
gt(a){return new A.as(a,this.gm(a),A.bk(a).i("as<L.E>"))},
a4(a,b){return this.h(a,b)},
gF(a){return this.gm(a)===0},
gS(a){return!this.gF(a)},
gH(a){if(this.gm(a)===0)throw A.b(A.az())
return this.h(a,0)},
ga_(a){if(this.gm(a)===0)throw A.b(A.az())
return this.h(a,this.gm(a)-1)},
gao(a){if(this.gm(a)===0)throw A.b(A.az())
if(this.gm(a)>1)throw A.b(A.iU())
return this.h(a,0)},
E(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.ay(a))}return!1},
ci(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.ay(a))}return!0},
cj(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.ay(a))}q=c.$0()
return q},
C(a,b){var s
if(this.gm(a)===0)return""
s=A.y2("",a,b)
return s.charCodeAt(0)==0?s:s},
dB(a,b){return new A.aq(a,b,A.bk(a).i("aq<L.E>"))},
co(a,b,c){return new A.Y(a,b,A.bk(a).i("@<L.E>").Z(c).i("Y<1,2>"))},
b4(a,b){return A.cy(a,b,null,A.bk(a).i("L.E"))},
c1(a,b){return A.cy(a,0,A.cE(b,"count",t.S),A.bk(a).i("L.E"))},
b8(a,b){var s,r,q,p,o=this
if(o.gF(a)){s=A.bk(a).i("L.E")
return b?J.u5(0,s):J.mB(0,s)}r=o.h(a,0)
q=A.a8(o.gm(a),r,b,A.bk(a).i("L.E"))
for(p=1;p<o.gm(a);++p)q[p]=o.h(a,p)
return q},
bJ(a){return this.b8(a,!0)},
cr(a){var s,r=A.vc(A.bk(a).i("L.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
f5(a,b){return new A.bR(a,A.bk(a).i("@<L.E>").Z(b).i("bR<1,2>"))},
ct(a,b){var s=b==null?A.NL():b
A.nC(a,0,this.gm(a)-1,s)},
U(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bh(b,c,r)
s=A.N(this.fV(a,b,c),A.bk(a).i("L.E"))
return s},
bb(a,b){return this.U(a,b,null)},
fV(a,b,c){A.bh(b,c,this.gm(a))
return A.cy(a,b,c,A.bk(a).i("L.E"))},
kl(a,b,c,d){var s
A.bh(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.bh(b,c,this.gm(a))
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{p=J.fp(d,e)
q=p.b8(p,!1)
r=0}p=J.I(q)
if(r+s>p.gm(q))throw A.b(A.Fm())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
d1(a,b,c){var s,r
if(t.j.b(c))this.aA(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.u4(a,"[","]")},
$iK:1,
$io:1,
$iq:1}
A.X.prototype={
ce(a,b,c){var s=A.n(this)
return A.Fu(this,s.i("X.K"),s.i("X.V"),b,c)},
a5(a,b){var s,r,q,p
for(s=J.E(this.gJ()),r=A.n(this).i("X.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga0(){return J.bF(this.gJ(),new A.vv(this),A.n(this).i("U<X.K,X.V>"))},
aX(a,b,c,d){var s,r,q,p,o,n=A.u(c,d)
for(s=J.E(this.gJ()),r=A.n(this).i("X.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.De(this.gJ(),a)},
gm(a){return J.an(this.gJ())},
gF(a){return J.bw(this.gJ())},
gS(a){return J.d4(this.gJ())},
gaU(){return new A.kl(this,A.n(this).i("kl<X.K,X.V>"))},
l(a){return A.vw(this)},
$iF:1}
A.vv.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("X.V").a(r)
return new A.U(a,r,A.n(s).i("U<X.K,X.V>"))},
$S(){return A.n(this.a).i("U<X.K,X.V>(X.K)")}}
A.vx.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:40}
A.kl.prototype={
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gS(a){var s=this.a
return s.gS(s)},
gH(a){var s=this.a
s=s.h(0,J.bE(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
gao(a){var s=this.a
s=s.h(0,J.pY(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
ga_(a){var s=this.a
s=s.h(0,J.pX(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.p5(J.E(s.gJ()),s,this.$ti.i("p5<1,2>"))}}
A.p5.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.pv.prototype={
j(a,b,c){throw A.b(A.a2("Cannot modify unmodifiable map"))}}
A.j5.prototype={
ce(a,b,c){return this.a.ce(0,b,c)},
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
gaU(){return this.a.gaU()},
ga0(){return this.a.ga0()},
aX(a,b,c,d){return this.a.aX(0,b,c,d)},
$iF:1}
A.cW.prototype={
ce(a,b,c){return new A.cW(this.a.ce(0,b,c),b.i("@<0>").Z(c).i("cW<1,2>"))}}
A.j1.prototype={
gt(a){var s=this
return new A.p4(s,s.c,s.d,s.b,s.$ti.i("p4<1>"))},
gF(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gH(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.az())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga_(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.az())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gao(a){var s,r=this
if(r.b===r.c)throw A.b(A.az())
if(r.gm(0)>1)throw A.b(A.iU())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a4(a,b){var s,r=this
A.Fl(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
b8(a,b){var s,r,q,p,o,n,m=this,l=m.a.length-1,k=(m.c-m.b&l)>>>0
if(k===0){s=J.mB(0,m.$ti.c)
return s}s=m.$ti.c
r=A.a8(k,m.gH(0),!1,s)
for(q=m.a,p=m.b,o=0;o<k;++o){n=q[(p+o&l)>>>0]
r[o]=n==null?s.a(n):n}return r},
G(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.jL(s);++r.d
return!0}return!1},
l(a){return A.u4(this,"{","}")},
jL(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.p4.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.v(A.ay(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.cu.prototype={
gF(a){return this.gm(this)===0},
gS(a){return this.gm(this)!==0},
D(a,b){var s
for(s=J.E(b);s.k();)this.u(0,s.gn())},
nD(a){var s=this.cr(0)
s.D(0,a)
return s},
co(a,b,c){return new A.ey(this,b,A.n(this).i("@<1>").Z(c).i("ey<1,2>"))},
gao(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iU())
s=r.gt(r)
if(!s.k())throw A.b(A.az())
return s.gn()},
l(a){return A.u4(this,"{","}")},
dB(a,b){return new A.aq(this,b,A.n(this).i("aq<1>"))},
ci(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
c1(a,b){return A.FS(this,b,A.n(this).c)},
b4(a,b){return A.FQ(this,b,A.n(this).c)},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.az())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.az())
do s=r.gn()
while(r.k())
return s},
a4(a,b){var s,r
A.aW(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mv(b,b-r,this,null,"index"))},
$iK:1,
$io:1,
$ieS:1}
A.kt.prototype={
f9(a){var s,r,q,p=this,o=p.m1()
for(s=A.dr(p,p.r,A.n(p).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!a.E(0,q))o.u(0,q)}return o},
cr(a){var s=this.m1()
s.D(0,this)
return s}}
A.kE.prototype={}
A.p0.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rF(b):s}},
gm(a){return this.b==null?this.c.a:this.dN().length},
gF(a){return this.gm(0)===0},
gS(a){return this.gm(0)>0},
gJ(){if(this.b==null){var s=this.c
return new A.R(s,A.n(s).i("R<1>"))}return new A.p1(this)},
gaU(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.n(s).i("ao<2>"))}return A.dN(r.dN(),new A.AW(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tJ().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a5(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a5(0,b)
s=o.dN()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.C1(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ay(o))}},
dN(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
tJ(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.u(t.N,t.z)
r=n.dN()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.aq(r)
n.a=n.b=null
return n.c=s},
rF(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.C1(this.a[a])
return this.b[a]=s}}
A.AW.prototype={
$1(a){return this.a.h(0,a)},
$S:72}
A.p1.prototype={
gm(a){return this.a.gm(0)},
a4(a,b){var s=this.a
return s.b==null?s.gJ().a4(0,b):s.dN()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gJ()
s=s.gt(s)}else{s=s.dN()
s=new J.ft(s,s.length,A.a1(s).i("ft<1>"))}return s},
E(a,b){return this.a.I(b)}}
A.AU.prototype={
q(){var s,r,q=this
q.p6()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aD(A.H6(r.charCodeAt(0)==0?r:r,q.b))
s.aV()}}
A.BF.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:69}
A.BE.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:69}
A.le.prototype={
gaS(){return"us-ascii"},
ki(a){return B.bC.A(a)}}
A.pu.prototype={
A(a){var s,r,q,p=A.bh(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aD(a,"string","Contains invalid characters."))
o[r]=q}return o},
c4(a){return new A.Bw(new A.hD(a),this.a)}}
A.lf.prototype={}
A.Bw.prototype={
q(){this.a.a.q()},
bV(a,b,c,d){var s,r,q,p
A.bh(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.S("Source contains invalid character with code point: "+q+".",null))}s=new A.cn(a)
p=this.a.a
p.u(0,s.U(s,b,c))
if(d)p.q()}}
A.ll.prototype={
gfe(){return this.a},
wy(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bh(a1,a2,a0.length)
s=$.EM()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.CM(a0.charCodeAt(l))
h=A.CM(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a5("")
e=p}else e=p
e.a+=B.a.B(a0,q,r)
d=A.bA(k)
e.a+=d
q=l
continue}}throw A.b(A.ab("Invalid base64 data",a0,r))}if(p!=null){e=B.a.B(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.EW(a0,n,a2,o,m,d)
else{c=B.c.an(d-1,4)+1
if(c===1)throw A.b(A.ab(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dv(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.EW(a0,n,a2,o,m,b)
else{c=B.c.an(b,4)
if(c===1)throw A.b(A.ab(a,a0,a2))
if(c>1)a0=B.a.dv(a0,a2,a2,c===2?"==":"=")}return a0}}
A.im.prototype={
A(a){var s=a.length
if(s===0)return""
s=new A.oD(this.a?u.G:u.U).n0(a,0,s,!0)
s.toString
return A.dY(s,0,null)},
c4(a){return new A.zo(a,new A.zF(this.a?u.G:u.U))}}
A.oD.prototype={
mS(a){return new Uint8Array(a)},
n0(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mS(o)
r.a=A.Lb(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.zF.prototype={
mS(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bQ(B.f.gac(s),s.byteOffset,a)}}
A.zB.prototype={
u(a,b){this.lu(b,0,J.an(b),!1)},
q(){this.lu(B.cX,0,0,!0)}}
A.zo.prototype={
lu(a,b,c,d){var s=this.b.n0(a,b,c,d)
if(s!=null)this.a.a.aD(A.dY(s,0,null))
if(d)this.a.a.aV()}}
A.lm.prototype={
A(a){var s,r,q=A.bh(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.oC()
r=s.kc(a,0,q)
r.toString
s.k7(a,q)
return r},
c4(a){return new A.zA(a,new A.oC())}}
A.oC.prototype={
kc(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.G6(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.L8(a,b,c,q)
r.a=A.La(a,b,c,s,0,r.a)
return s},
k7(a,b){var s=this.a
if(s<-1)throw A.b(A.ab("Missing padding character",a,b))
if(s>0)throw A.b(A.ab("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.zA.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.kc(b,0,r)
if(s!=null)this.a.a.aD(s)},
q(){this.b.k7(null,null)
this.a.a.aV()},
bV(a,b,c,d){var s,r
A.bh(b,c,a.length)
if(b===c)return
s=this.b
r=s.kc(a,b,c)
if(r!=null)this.a.a.aD(r)
if(d){s.k7(a,c)
this.a.a.aV()}}}
A.qh.prototype={}
A.hD.prototype={
u(a,b){this.a.u(0,b)},
q(){this.a.q()}}
A.oG.prototype={
u(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.I(b)
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
A.lx.prototype={}
A.pl.prototype={
u(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.f2.prototype={
u(a,b){this.b.u(0,b)},
bi(a,b){A.cE(a,"error",t.K)
this.a.bi(a,b)},
q(){this.b.q()},
$ibH:1}
A.lz.prototype={}
A.aG.prototype={
c4(a){throw A.b(A.a2("This converter does not support chunked conversions: "+this.l(0)))},
ui(a){return new A.k6(new A.rb(this),a,t.fM.Z(A.n(this).i("aG.T")).i("k6<1,2>"))}}
A.rb.prototype={
$1(a){return new A.f2(a,this.a.c4(a),t.oW)},
$S:103}
A.eA.prototype={}
A.j_.prototype={
l(a){var s=A.iE(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.mF.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.u8.prototype={
aH(a,b){var s=A.H6(a,this.guE().a)
return s},
a9(a,b){var s=A.Lv(a,this.gfe().b,null)
return s},
gfe(){return B.cz},
guE(){return B.cy}}
A.mH.prototype={
c4(a){return new A.AV(null,this.b,new A.pn(a))}}
A.AV.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.A("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a5("")
q=new A.Bs(r,s)
A.Gm(b,q,p.b,p.a)
if(r.a.length!==0)q.jo()
s.q()},
q(){}}
A.mG.prototype={
c4(a){return new A.AU(this.a,a,new A.a5(""))}}
A.AY.prototype={
nJ(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iQ(a,s,r)
s=r+1
n.ar(92)
n.ar(117)
n.ar(100)
p=q>>>8&15
n.ar(p<10?48+p:87+p)
p=q>>>4&15
n.ar(p<10?48+p:87+p)
p=q&15
n.ar(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iQ(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iQ(a,s,r)
s=r+1
n.ar(92)
n.ar(q)}}if(s===0)n.b9(a)
else if(s<m)n.iQ(a,s,m)},
j8(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.mF(a,null))}s.push(a)},
iP(a){var s,r,q,p,o=this
if(o.nI(a))return
o.j8(a)
try{s=o.b.$1(a)
if(!o.nI(s)){q=A.Fr(a,null,o.gm5())
throw A.b(q)}o.a.pop()}catch(p){r=A.D(p)
q=A.Fr(a,r,o.gm5())
throw A.b(q)}},
nI(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xZ(a)
return!0}else if(a===!0){r.b9("true")
return!0}else if(a===!1){r.b9("false")
return!0}else if(a==null){r.b9("null")
return!0}else if(typeof a=="string"){r.b9('"')
r.nJ(a)
r.b9('"')
return!0}else if(t.j.b(a)){r.j8(a)
r.xX(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.j8(a)
s=r.xY(a)
r.a.pop()
return s}else return!1},
xX(a){var s,r,q=this
q.b9("[")
s=J.I(a)
if(s.gS(a)){q.iP(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b9(",")
q.iP(s.h(a,r))}}q.b9("]")},
xY(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.b9("{}")
return!0}s=a.gm(a)*2
r=A.a8(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a5(0,new A.AZ(n,r))
if(!n.b)return!1
o.b9("{")
for(p='"';q<s;q+=2,p=',"'){o.b9(p)
o.nJ(A.G(r[q]))
o.b9('":')
o.iP(r[q+1])}o.b9("}")
return!0}}
A.AZ.prototype={
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
A.AX.prototype={
gm5(){var s=this.c
return s instanceof A.a5?s.l(0):null},
xZ(a){this.c.iO(B.w.l(a))},
b9(a){this.c.iO(a)},
iQ(a,b,c){this.c.iO(B.a.B(a,b,c))},
ar(a){this.c.ar(a)}}
A.mK.prototype={
gaS(){return"iso-8859-1"},
ki(a){return B.cG.A(a)}}
A.mL.prototype={}
A.nO.prototype={
u(a,b){this.bV(b,0,b.length,!1)}}
A.Bs.prototype={
ar(a){var s=this.a,r=A.bA(a)
if((s.a+=r).length>16)this.jo()},
iO(a){if(this.a.a.length!==0)this.jo()
this.b.u(0,a)},
jo(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.kx.prototype={
q(){},
bV(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bA(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
u(a,b){this.a.a+=b}}
A.pn.prototype={
u(a,b){this.a.a.aD(b)},
bV(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aD(a)
else r.aD(B.a.B(a,b,c))
if(d)r.aV()},
q(){this.a.a.aV()}}
A.BD.prototype={
q(){var s,r,q,p=this.c
this.a.vE(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bV(q,0,q.length,!0)}else r.q()},
u(a,b){this.bV(b,0,J.an(b),!1)},
bV(a,b,c,d){var s,r=this.c,q=this.a.d6(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bV(s,0,s.length,!1)
r.a=""
return}}}
A.oj.prototype={
gaS(){return"utf-8"},
uA(a,b){return new A.dt((b===!0?B.eg:B.aQ).a).d6(a,0,null,!0)},
f7(a){return this.uA(a,null)},
ki(a){return B.e.A(a)}}
A.ok.prototype={
A(a){var s,r,q=A.bh(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.py(s)
if(r.lL(a,0,q)!==q)r.hI()
return B.f.U(s,0,r.b)},
c4(a){return new A.BG(new A.hD(a),new Uint8Array(1024))}}
A.py.prototype={
hI(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.J(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mF(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.J(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.hI()
return!1}},
lL(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.J(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mF(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hI()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.J(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.J(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.BG.prototype={
q(){if(this.a!==0){this.bV("",0,0,!0)
return}this.d.a.q()},
bV(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mF(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lL(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hI()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.U(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jW.prototype={
c4(a){return new A.BD(new A.dt(this.a),new A.pn(a),new A.a5(""))}}
A.dt.prototype={
d6(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bh(b,c,J.an(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.M0(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.M_(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.jf(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.GJ(p)
m.b=0
throw A.b(A.ab(n,a,q+m.c))}return o},
jf(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.jf(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.jf(a,s,c,d)}return q.uD(a,b,c,d)},
vE(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bA(65533)
a.a+=s}else throw A.b(A.ab(A.GJ(77),null,null))},
uD(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a5(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bA(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bA(k)
h.a+=q
break
case 65:q=A.bA(k)
h.a+=q;--g
break
default:q=A.bA(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bA(a[m])
h.a+=q}else{q=A.dY(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bA(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.pE.prototype={}
A.aP.prototype={
bL(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bM(p,r)
return new A.aP(p===0?!1:s,r,p)},
qc(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cm()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bM(s,q)
return new A.aP(n===0?!1:o,q,n)},
qf(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cm()
s=k-a
if(s<=0)return l.a?$.EO():$.cm()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bM(s,q)
m=new A.aP(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.h0(0,$.fn())
return m},
bM(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.S("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.an(b,16)===0)return n.qc(r)
q=s+r+1
p=new Uint16Array(q)
A.Ge(n.b,s,b,p)
s=n.a
o=A.bM(q,p)
return new A.aP(o===0?!1:s,p,o)},
dG(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.S("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.an(b,16)
if(q===0)return j.qf(r)
p=s-r
if(p<=0)return j.a?$.EO():$.cm()
o=j.b
n=new Uint16Array(p)
A.Lh(o,s,b,n)
s=j.a
m=A.bM(p,n)
l=new A.aP(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bM(1,q)-1)>>>0!==0)return l.h0(0,$.fn())
for(k=0;k<r;++k)if(o[k]!==0)return l.h0(0,$.fn())}return l},
a3(a,b){var s,r=this.a
if(r===b.a){s=A.zC(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
j3(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.j3(p,b)
if(o===0)return $.cm()
if(n===0)return p.a===b?p:p.bL(0)
s=o+1
r=new Uint16Array(s)
A.Ld(p.b,o,a.b,n,r)
q=A.bM(s,r)
return new A.aP(q===0?!1:b,r,q)},
h1(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cm()
s=a.c
if(s===0)return p.a===b?p:p.bL(0)
r=new Uint16Array(o)
A.oE(p.b,o,a.b,s,r)
q=A.bM(o,r)
return new A.aP(q===0?!1:b,r,q)},
nL(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.j3(b,r)
if(A.zC(q.b,p,b.b,s)>=0)return q.h1(b,r)
return b.h1(q,!r)},
h0(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bL(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.j3(b,r)
if(A.zC(q.b,p,b.b,s)>=0)return q.h1(b,r)
return b.h1(q,!r)},
bn(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cm()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.Gf(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bM(s,p)
return new A.aP(m===0?!1:n,p,m)},
qb(a){var s,r,q,p
if(this.c<a.c)return $.cm()
this.lE(a)
s=$.E1.bC()-$.k5.bC()
r=A.E3($.E0.bC(),$.k5.bC(),$.E1.bC(),s)
q=A.bM(s,r)
p=new A.aP(!1,r,q)
return this.a!==a.a&&q>0?p.bL(0):p},
t2(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lE(a)
s=A.E3($.E0.bC(),0,$.k5.bC(),$.k5.bC())
r=A.bM($.k5.bC(),s)
q=new A.aP(!1,s,r)
if($.E2.bC()>0)q=q.dG(0,$.E2.bC())
return p.a&&q.c>0?q.bL(0):q},
lE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Gb&&a.c===$.Gd&&c.b===$.Ga&&a.b===$.Gc)return
s=a.b
r=a.c
q=16-B.c.gmO(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.G9(s,r,q,p)
n=new Uint16Array(b+5)
m=A.G9(c.b,b,q,n)}else{n=A.E3(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.E4(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.zC(n,m,j,i)>=0){g&2&&A.J(n)
n[m]=1
A.oE(n,h,j,i,n)}else{g&2&&A.J(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.oE(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Le(l,n,e);--k
A.Gf(d,f,0,n,k,o)
if(n[e]<d){i=A.E4(f,o,k,j)
A.oE(n,h,j,i,n)
while(--d,n[e]<d)A.oE(n,h,j,i,n)}--e}$.Ga=c.b
$.Gb=b
$.Gc=s
$.Gd=r
$.E0.b=n
$.E1.b=h
$.k5.b=o
$.E2.b=q},
gK(a){var s,r,q,p=new A.zD(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.zE().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aP&&this.a3(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bL(0):n
while(r.c>1){q=$.EN()
if(q.c===0)A.v(B.bP)
p=r.t2(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.qb(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bB(s,t.hF).en(0)},
$iax:1}
A.zD.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:106}
A.zE.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:129}
A.oV.prototype={
mM(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mY(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.BC.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a7(b)}},
$S:67}
A.rP.prototype={
$0(){var s=this
return A.v(A.S("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:16}
A.aH.prototype={
j5(a){var s=1000,r=B.c.an(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.an(p,s),n=this.c
return new A.aH(A.lV(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aH&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gK(a){return A.cd(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kv(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a3(a,b){var s=B.c.a3(this.a,b.a)
if(s!==0)return s
return B.c.a3(this.b,b.b)},
xu(){var s=this
if(s.c)return s
return new A.aH(s.a,s.b,!0)},
l(a){var s=this,r=A.Jp(A.DJ(s)),q=A.lU(A.DH(s)),p=A.lU(A.wP(s)),o=A.lU(A.DF(s)),n=A.lU(A.DG(s)),m=A.lU(A.DI(s)),l=A.F9(A.FG(s)),k=s.b,j=k===0?"":A.F9(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iax:1}
A.aE.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aE&&this.a===b.a},
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
return s+m+":"+q+r+":"+o+p+"."+B.a.ix(B.c.l(n%1e6),6,"0")},
$iax:1}
A.Ak.prototype={
l(a){return this.a7()}}
A.ag.prototype={
gcu(){return A.Kk(this)}}
A.lg.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iE(s)
return"Assertion failed"}}
A.dl.prototype={}
A.bG.prototype={
gji(){return"Invalid argument"+(!this.a?"(s)":"")},
gjh(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gji()+q+o
if(!s.a)return n
return n+s.gjh()+": "+A.iE(s.gku())},
gku(){return this.b}}
A.dd.prototype={
gku(){return this.b},
gji(){return"RangeError"},
gjh(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.iR.prototype={
gku(){return this.b},
gji(){return"RangeError"},
gjh(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$idd:1,
gm(a){return this.f}}
A.cX.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.oc.prototype={
l(a){return"UnimplementedError: "+this.a},
$icX:1}
A.bp.prototype={
l(a){return"Bad state: "+this.a}}
A.lC.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iE(s)+"."}}
A.n5.prototype={
l(a){return"Out of Memory"},
gcu(){return null},
$iag:1}
A.jO.prototype={
l(a){return"Stack Overflow"},
gcu(){return null},
$iag:1}
A.oU.prototype={
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
k=""}return g+l+B.a.B(e,i,j)+k+"\n"+B.a.bn(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iH:1,
gir(){return this.a},
gfZ(){return this.b},
gav(){return this.c}}
A.my.prototype={
gcu(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iag:1,
$icX:1,
$iH:1}
A.o.prototype={
f5(a,b){return A.fv(this,A.n(this).i("o.E"),b)},
co(a,b,c){return A.dN(this,b,A.n(this).i("o.E"),c)},
dB(a,b){return new A.aq(this,b,A.n(this).i("aq<o.E>"))},
E(a,b){var s
for(s=this.gt(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
vG(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
vH(a,b,c){return this.vG(0,b,c,t.z)},
ci(a,b){var s
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
bj(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
b8(a,b){var s=A.n(this).i("o.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
bJ(a){return this.b8(0,!0)},
cr(a){return A.bW(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gt(this).k()},
gS(a){return!this.gF(this)},
c1(a,b){return A.FS(this,b,A.n(this).i("o.E"))},
b4(a,b){return A.FQ(this,b,A.n(this).i("o.E"))},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.az())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.az())
do s=r.gn()
while(r.k())
return s},
gao(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.az())
s=r.gn()
if(r.k())throw A.b(A.iU())
return s},
cj(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a4(a,b){var s,r
A.aW(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mv(b,b-r,this,null,"index"))},
l(a){return A.JO(this,"(",")")}}
A.U.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gK(a){return A.j.prototype.gK.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
P(a,b){return this===b},
gK(a){return A.eO(this)},
l(a){return"Instance of '"+A.nc(this)+"'"},
gam(a){return A.d2(this)},
toString(){return this.l(this)}}
A.pp.prototype={
l(a){return""},
$iaJ:1}
A.jQ.prototype={
gvj(){var s=this.gn_()
if($.l1()===1e6)return s
return s*1000},
gmZ(){var s=this.gn_()
if($.l1()===1000)return s
return B.c.M(s,1000)},
aC(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.nd.$0()-r)
s.b=null}},
gn_(){var s=this.b
if(s==null)s=$.nd.$0()
return s-this.a}}
A.jF.prototype={
gt(a){return new A.nt(this.a)},
ga_(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.A("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.GR(r,s)}return s}}
A.nt.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.GR(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a5.prototype={
gm(a){return this.a.length},
iO(a){var s=A.r(a)
this.a+=s},
ar(a){var s=A.bA(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.yE.prototype={
$2(a,b){throw A.b(A.ab("Illegal IPv6 address, "+a,this.a,b))},
$S:158}
A.kF.prototype={
gmt(){var s,r,q,p,o=this,n=o.w
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
gwO(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ab(s,1)
r=s.length===0?B.u:A.fR(new A.Y(A.l(s.split("/"),t.s),A.NW(),t.iZ),t.N)
q.x!==$&&A.D8()
p=q.x=r}return p},
gK(a){var s,r=this,q=r.y
if(q===$){s=B.a.gK(r.gmt())
r.y!==$&&A.D8()
r.y=s
q=s}return q},
gkO(){return this.b},
gdn(){var s=this.c
if(s==null)return""
if(B.a.T(s,"[")&&!B.a.af(s,"v",1))return B.a.B(s,1,s.length-1)
return s},
gfw(){var s=this.d
return s==null?A.Gy(this.a):s},
gfD(){var s=this.f
return s==null?"":s},
gi6(){var s=this.r
return s==null?"":s},
wd(a){var s=this.a
if(a.length!==s.length)return!1
return A.Md(a,s,0)>=0},
fH(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.Eb(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.By(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.T(n,"/"))n="/"+n
l=n
if(a!=null)k=A.Bz(null,0,0,a)
else k=j.f
return A.kG(b,q,o,p,l,k,j.r)},
kH(a){return this.fH(a,null)},
nx(a){return this.fH(null,a)},
m_(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.af(b,"../",r);){r+=3;++s}q=B.a.cS(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.im(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dv(a,q+1,null,B.a.ab(b,r-3*s))},
al(a){return this.fJ(A.oi(a))},
fJ(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb3().length!==0)return a
else{s=h.a
if(a.gkp()){r=a.nx(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gn6())m=a.gii()?a.gfD():h.f
else{l=A.LZ(h,n)
if(l>0){k=B.a.B(n,0,l)
n=a.gko()?k+A.fb(a.gby()):k+A.fb(h.m_(B.a.ab(n,k.length),a.gby()))}else if(a.gko())n=A.fb(a.gby())
else if(n.length===0)if(p==null)n=s.length===0?a.gby():A.fb(a.gby())
else n=A.fb("/"+a.gby())
else{j=h.m_(n,a.gby())
r=s.length===0
if(!r||p!=null||B.a.T(n,"/"))n=A.fb(j)
else n=A.Ed(j,!r||p!=null)}m=a.gii()?a.gfD():null}}}i=a.gkq()?a.gi6():null
return A.kG(s,q,p,o,n,m,i)},
gkp(){return this.c!=null},
gii(){return this.f!=null},
gkq(){return this.r!=null},
gn6(){return this.e.length===0},
gko(){return B.a.T(this.e,"/")},
kL(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.a2("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.a2(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.a2(u.A))
if(r.c!=null&&r.gdn()!=="")A.v(A.a2(u.Q))
s=r.gwO()
A.LS(s,!1)
q=A.y2(B.a.T(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmt()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb3())if(p.c!=null===b.gkp())if(p.b===b.gkO())if(p.gdn()===b.gdn())if(p.gfw()===b.gfw())if(p.e===b.gby()){r=p.f
q=r==null
if(!q===b.gii()){if(q)r=""
if(r===b.gfD()){r=p.r
q=r==null
if(!q===b.gkq()){s=q?"":r
s=s===b.gi6()}}}}return s},
$iog:1,
gb3(){return this.a},
gby(){return this.e}}
A.BB.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.px(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.px(1,b,B.o,!0)
s.a+=r}},
$S:184}
A.BA.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:67}
A.yD.prototype={
gnG(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.ck(m,"?",s)
q=m.length
if(r>=0){p=A.kH(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.oP("data","",n,n,A.kH(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cj.prototype={
gkp(){return this.c>0},
gkr(){return this.c>0&&this.d+1<this.e},
gii(){return this.f<this.r},
gkq(){return this.r<this.a.length},
gko(){return B.a.af(this.a,"/",this.e)},
gn6(){return this.e===this.f},
gb3(){var s=this.w
return s==null?this.w=this.pX():s},
pX(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.T(r.a,"http"))return"http"
if(q===5&&B.a.T(r.a,"https"))return"https"
if(s&&B.a.T(r.a,"file"))return"file"
if(q===7&&B.a.T(r.a,"package"))return"package"
return B.a.B(r.a,0,q)},
gkO(){var s=this.c,r=this.b+3
return s>r?B.a.B(this.a,r,s-1):""},
gdn(){var s=this.c
return s>0?B.a.B(this.a,s,this.d):""},
gfw(){var s,r=this
if(r.gkr())return A.aK(B.a.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.T(r.a,"http"))return 80
if(s===5&&B.a.T(r.a,"https"))return 443
return 0},
gby(){return B.a.B(this.a,this.e,this.f)},
gfD(){var s=this.f,r=this.r
return s<r?B.a.B(this.a,s+1,r):""},
gi6(){var s=this.r,r=this.a
return s<r.length?B.a.ab(r,s+1):""},
lT(a){var s=this.d+1
return s+a.length===this.e&&B.a.af(this.a,a,s)},
xi(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cj(B.a.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.Eb(b,0,b.length)
s=!(h.b===b.length&&B.a.T(h.a,b))}else{b=h.gb3()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.B(h.a,h.b+3,q):""
o=h.gkr()?h.gfw():g
if(s)o=A.By(o,b)
q=h.c
if(q>0)n=B.a.B(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.B(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.T(l,"/"))l="/"+l
if(a!=null)j=A.Bz(g,0,0,a)
else{k=h.r
j=m<k?B.a.B(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ab(q,m+1):g
return A.kG(b,p,n,o,l,j,i)},
kH(a){return this.fH(a,null)},
nx(a){return this.fH(null,a)},
al(a){return this.fJ(A.oi(a))},
fJ(a){if(a instanceof A.cj)return this.tt(this,a)
return this.mv().fJ(a)},
tt(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.T(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.T(a.a,"http"))p=!b.lT("80")
else p=!(r===5&&B.a.T(a.a,"https"))||!b.lT("443")
if(p){o=r+1
return new A.cj(B.a.B(a.a,0,o)+B.a.ab(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mv().fJ(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cj(B.a.B(a.a,0,r)+B.a.ab(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cj(B.a.B(a.a,0,r)+B.a.ab(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.xi()}s=b.a
if(B.a.af(s,"/",n)){m=a.e
l=A.Gq(this)
k=l>0?l:m
o=k-n
return new A.cj(B.a.B(a.a,0,k)+B.a.ab(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.af(s,"../",n))n+=3
o=j-n+1
return new A.cj(B.a.B(a.a,0,j)+"/"+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Gq(this)
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
return new A.cj(B.a.B(h,0,i)+d+B.a.ab(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kL(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.T(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.a2("Cannot extract a file path from a "+r.gb3()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.a2(u.z))
throw A.b(A.a2(u.A))}if(r.c<r.d)A.v(A.a2(u.Q))
q=B.a.B(s,r.e,q)
return q},
gK(a){var s=this.x
return s==null?this.x=B.a.gK(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mv(){var s=this,r=null,q=s.gb3(),p=s.gkO(),o=s.c>0?s.gdn():r,n=s.gkr()?s.gfw():r,m=s.a,l=s.f,k=B.a.B(m,s.e,l),j=s.r
l=l<j?s.gfD():r
return A.kG(q,p,o,n,k,l,j<m.length?s.gi6():r)},
l(a){return this.a},
$iog:1}
A.oP.prototype={}
A.m3.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.n1.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iH:1}
A.tu.prototype={
$2(a,b){this.a.b0(new A.ts(a),new A.tt(b),t.X)},
$S:189}
A.ts.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:193}
A.tt.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.NI(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.v("Attempting to box non-Dart object.")
s={}
s[$.IB()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:6}
A.CR.prototype={
$1(a){var s,r,q,p
if(A.H4(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gJ());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.D(p,J.bF(a,this,t.z))
return p}else return a},
$S:32}
A.CX.prototype={
$1(a){return this.a.aB(a)},
$S:27}
A.CY.prototype={
$1(a){if(a==null)return this.a.aR(new A.n1(a===undefined))
return this.a.aR(a)},
$S:27}
A.Cx.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.H3(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aH(A.lV(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.S("structured clone of RegExp",null))
if(a instanceof Promise)return A.a3(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.u(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aw(o),q=s.gt(o);q.k();)n.push(A.kS(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.I(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:32}
A.AR.prototype={
cU(a){if(a<=0||a>4294967296)throw A.b(A.b4(u.E+a))
return Math.random()*a>>>0},
nj(){return Math.random()}}
A.AS.prototype={
pj(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.a2("No source of cryptographically secure random numbers available."))},
cU(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b4(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.J(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.aj(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bQ(B.aD.gac(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.m0.prototype={}
A.a6.prototype={
h(a,b){var s,r=this
if(!r.jy(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a6.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jy(b))return
s.c.j(0,s.a.$1(b),new A.U(b,c,s.$ti.i("U<a6.K,a6.V>")))},
D(a,b){b.a5(0,new A.qj(this))},
ce(a,b,c){return this.c.ce(0,b,c)},
I(a){var s=this
if(!s.jy(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a6.K").a(a)))},
ga0(){var s=this.c,r=A.n(s).i("aN<1,2>")
return A.dN(new A.aN(s,r),new A.qk(this),r.i("o.E"),this.$ti.i("U<a6.K,a6.V>"))},
a5(a,b){this.c.a5(0,new A.ql(this,b))},
gF(a){return this.c.a===0},
gS(a){return this.c.a!==0},
gJ(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dN(new A.ao(s,r),new A.qm(this),r.i("o.E"),this.$ti.i("a6.K"))},
gm(a){return this.c.a},
aX(a,b,c,d){return this.c.aX(0,new A.qn(this,b,c,d),c,d)},
gaU(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dN(new A.ao(s,r),new A.qo(this),r.i("o.E"),this.$ti.i("a6.V"))},
l(a){return A.vw(this)},
jy(a){return this.$ti.i("a6.K").b(a)},
$iF:1}
A.qj.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a6.K,a6.V)")}}
A.qk.prototype={
$1(a){var s=a.b
return new A.U(s.a,s.b,this.a.$ti.i("U<a6.K,a6.V>"))},
$S(){return this.a.$ti.i("U<a6.K,a6.V>(U<a6.C,U<a6.K,a6.V>>)")}}
A.ql.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a6.C,U<a6.K,a6.V>)")}}
A.qm.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a6.K(U<a6.K,a6.V>)")}}
A.qn.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.Z(this.c).Z(this.d).i("U<1,2>(a6.C,U<a6.K,a6.V>)")}}
A.qo.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a6.V(U<a6.K,a6.V>)")}}
A.lX.prototype={
V(a,b){return J.x(a,b)},
ad(a){return J.aa(a)}}
A.iV.prototype={
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
A.eG.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.I(a)
r=s.gm(a)
q=J.I(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.V(s.h(a,o),q.h(b,o)))return!1
return!0},
ad(a){var s,r,q,p
for(s=J.I(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ad(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hY.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.Ds(s.gvp(),s.gw7(),s.gwe(),A.n(this).i("hY.E"),t.S)
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
A.hg.prototype={}
A.hO.prototype={
gK(a){var s=this.a
return 3*s.a.ad(this.b)+7*s.b.ad(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hO){s=this.a
s=s.a.V(this.b,b.b)&&s.b.V(this.c,b.c)}else s=!1
return s}}
A.j4.prototype={
V(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.Ds(null,null,null,t.mB,t.S)
for(r=J.E(a.gJ());r.k();){q=r.gn()
p=new A.hO(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gJ());r.k();){q=r.gn()
p=new A.hO(this,q,b.h(0,q))
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
A.lW.prototype={
V(a,b){var s,r=this
if(a instanceof A.cu)return b instanceof A.cu&&new A.hg(r,t.cu).V(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.j4(r,r,t.a3).V(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.eG(r,t.hI).V(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iV(r,t.nZ).V(a,b)
return J.x(a,b)},
ad(a){var s=this
if(a instanceof A.cu)return new A.hg(s,t.cu).ad(a)
if(t.f.b(a))return new A.j4(s,s,t.a3).ad(a)
if(t.j.b(a))return new A.eG(s,t.hI).ad(a)
if(t.e7.b(a))return new A.iV(s,t.nZ).ad(a)
return J.aa(a)},
wf(a){return!0}}
A.n0.prototype={
sm(a,b){A.FB()},
u(a,b){return A.FB()}}
A.of.prototype={
j(a,b,c){return A.KT()}}
A.co.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.co){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gK(a){return A.vZ(this.a)},
l(a){return A.au(this.a)}}
A.c8.prototype={
u(a,b){if(this.a!=null)throw A.b(A.A("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.A("add must be called once."))}}
A.mp.prototype={
A(a){var s=new A.c8(),r=A.d_(s)
r.u(0,a)
r.q()
r=s.a
r.toString
return r}}
A.tz.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.A("Hash.add() called after close()."))
s.r=s.r+J.an(b)
s.ld(b)},
ld(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pV(B.f.gac(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.I(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ai(i,j,n,a,o)
k.e=n
return}B.f.ai(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.J(s)
s[m]=l;++m}while(m<q)
k.xA(s)}},
q(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.v(A.a2("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.pV(B.f.gac(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.J(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.ld(q)
s=l.a
s.u(0,new A.co(l.pF()))
s.q()},
pF(){var s,r,q,p,o,n,m
if(B.aW===$.l0())return J.IO(B.y.gac(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pV(B.f.gac(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.J(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.pi.prototype={
c4(a){var s=new Uint32Array(A.be(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hD(new A.pj(s,r,a,q,new Uint32Array(16)))}}
A.Be.prototype={
xA(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.J(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.J(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cN[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.J(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.pj.prototype={}
A.la.prototype={
gK(a){return A.cd(B.dW,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lP&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.d2(s).l(0)+".with"+s.d*8+"bits()"
return A.d2(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.qu.prototype={}
A.j3.prototype={
gK(a){return B.t.ad(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.j3&&B.t.V(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.C(s,",")+"])"}}
A.jJ.prototype={
l(a){return A.d2(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iH:1}
A.vq.prototype={
l(a){return A.d2(this).l(0)+"()"}}
A.jI.prototype={
gK(a){return(B.t.ad(this.b.a)^B.t.ad(this.c)^B.t.ad(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jI){s=B.t.V(this.b.a,b.b.a)
s=s&&B.t.V(this.c,b.c)&&B.t.V(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.C(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.xJ.prototype={}
A.jK.prototype={
geb(){return this.b},
gK(a){var s=A.eO(B.ea),r=B.t.ad(this.geb())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jK&&B.t.V(this.geb(),b.geb())},
l(a){return"SecretKeyData(...)"}}
A.ny.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.a2("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.a2("The bytes are unmodifiable."))}}
A.lP.prototype={
uG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.geb().gm(0),f=this.d
if(g!==f)throw A.b(A.aD(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Ht(c)
r=new Uint32Array(4)
A.pL(r,0,r,0,s)
r[0]=A.bD(r[0])
r[1]=A.bD(r[1])
r[2]=A.bD(r[2])
r[3]=A.bD(r[3])
q=A.F8(r,a.c)
p=J.ES(B.f.gac(q),0,null)
o=a.a
n=B.t.V(B.aU.lk(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jJ())
A.Co(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pL(l,k,p,0,s)
A.Co(q,1)}j=J.bQ(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.J(j)
j[k]=i^h}return j},
vm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.geb().gm(0),f=this.d
if(g!==f)throw A.b(A.aD(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Ht(d)
r=new Uint32Array(4)
A.pL(r,0,r,0,s)
r[0]=A.bD(r[0])
r[1]=A.bD(r[1])
r[2]=A.bD(r[2])
r[3]=A.bD(r[3])
q=A.F8(r,c)
p=J.ES(B.f.gac(q),0,null)
o=new Uint32Array(A.be(p))
A.Co(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pL(l,k,p,0,s)
A.Co(q,1)}j=J.bQ(B.y.gac(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.J(j)
j[k]=i^h}return new A.jI(j,B.aU.lk(j,b,s,r,o),c)}}
A.rt.prototype={
l(a){return"DartGcm()"},
lk(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lQ(n,d,b)
A.lQ(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.an(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.an(r,o),!1)
A.lQ(n,d,J.bQ(B.aD.gac(q),0,null))
p=new Uint32Array(4)
A.pL(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.j3(J.bQ(B.y.gac(n),0,null))}}
A.oN.prototype={}
A.oO.prototype={}
A.re.prototype={}
A.ru.prototype={}
A.A9.prototype={
V(a,b){var s,r,q=J.I(a),p=J.I(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ad(a){var s,r,q,p,o
for(s=J.I(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.an(q,16)
r=(r^B.c.ts(p,o)^B.c.mq(p,16-o))>>>0}return r}}
A.no.prototype={}
A.ln.prototype={$iDh:1}
A.lo.prototype={
i5(){if(this.w)throw A.b(A.A("Can't finalize a finalized Request."))
this.w=!0
return B.bG},
l(a){return this.a+" "+this.b.l(0)}}
A.lp.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:88}
A.lq.prototype={
$1(a){return B.a.gK(a.toLowerCase())},
$S:93}
A.qd.prototype={
p9(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.S("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.S("Invalid content length "+A.r(s)+".",null))}}}
A.lu.prototype={
ba(a){return this.oE(a)},
oE(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ba=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.F5("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.i5().xt(),$async$ba)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.bw(k)?k:null
a9=t.N
f=A.u(a9,t.K)
e=b4.gmR()
d=null
if(e!=null){d=e
J.d3(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.n(b0).i("aN<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.d3(f,c.a,c.b)}f=A.kW(f)
f.toString
A.bi(f)
b0=l.signal
s=8
return A.a(A.a3(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$ba)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.h4(a,null):null
if(a0==null&&a!=null){f=A.F5("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.u(a9,a9)
b.headers.forEach(A.pG(new A.qg(a1)))
f=A.M3(b4,b)
a4=b.status
a6=a1
a8=a0
A.oi(b.url)
a9=b.statusText
f=new A.nN(A.I3(f),a4,a8,a6)
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
a3=A.ae(b3)
A.Hb(a2,a3,b4)
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
return A.f($async$ba,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].abort()
this.b=!0}}
A.qg.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:95}
A.BY.prototype={
$1(a){return A.i5(this.a,this.b,a)},
$S:99}
A.Cc.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ak()}},
$S:0}
A.Cd.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a3(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.D(k)
m=A.ae(k)
if(!o.a.b)A.Hb(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dA.prototype={
xt(){var s=new A.w($.B,t.jz),r=new A.aF(s,t.iq),q=new A.oG(new A.qi(r),new Uint8Array(1024))
this.aa(q.gu3(q),!0,q.ged(),r.gus())
return s}}
A.qi.prototype={
$1(a){return this.a.aB(new Uint8Array(A.be(a)))},
$S:11}
A.er.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iH:1}
A.mU.prototype={
gm(a){return this.b}}
A.vR.prototype={
gmR(){var s,r,q,p=this,o={},n=o.a=0
p.x.a5(0,new A.vS(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.p)(s),++n){q=s[n]
o.a=o.a+(74+B.e.A(p.lR(q)).length+q.b+2)}return o.a+2+70+4},
i5(){var s=this,r=s.pB()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.l5()
return new A.dA(s.bq(r))},
bq(a){return this.qB(a)},
qB(a){var $async$bq=A.c(function(b,c){switch(b){case 2:n=q
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
return A.c0(A.e7(e),$async$bq,r)
case 5:k=l.b
j=$.Dc()
l=A.C(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.C(l,'"',"%22")+'"'
l=$.EP()
s=6
q=[1]
return A.c0(A.e7(B.e.A((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bq,r)
case 6:s=7
q=[1]
return A.c0(A.e7(B.e.A(k)),$async$bq,r)
case 7:s=8
q=[1]
return A.c0(A.e7(B.b8),$async$bq,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.c0(A.e7(e),$async$bq,r)
case 12:s=13
q=[1]
return A.c0(A.e7(B.e.A(m.lR(g))),$async$bq,r)
case 13:if(g.f)A.v(A.A("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.c0(A.Lt(g.e),$async$bq,r)
case 14:s=15
q=[1]
return A.c0(A.e7(B.b8),$async$bq,r)
case 15:case 10:f.length===l||(0,A.p)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.c0(A.e7(d),$async$bq,r)
case 16:case 1:return A.c0(null,0,r)
case 2:return A.c0(o.at(-1),1,r)}})
var s=0,r=A.H2($async$bq,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Hk(r)},
qU(a,b){var s,r=$.Dc()
r=A.C(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.C(r,'"',"%22")+'"'
r=$.EP()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lR(a){var s=a.d.l(0),r=$.Dc(),q=A.C(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.C(q,'"',"%22")+'"'
s=A.C(a.c,r,"%0D%0A")
p=p+'; filename="'+A.C(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pB(){var s,r=J.Dv(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.d2[$.Id().cU(66)]
return"dart-http-boundary-"+A.dY(r,0,null)}}
A.vS.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.A(this.b.qU(a,b)).length+B.e.A(b).length+2)},
$S:36}
A.xy.prototype={
gmR(){return this.y.length},
gkj(){var s,r
if(this.gcB()==null||!this.gcB().c.a.I("charset"))return B.o
s=this.gcB().c.a.h(0,"charset")
s.toString
r=A.Jt(s)
return r==null?A.v(A.ab('Unsupported encoding "'+s+'".',null,null)):r},
i5(){this.l5()
return new A.dA(A.DR(this.y,t.L))},
gcB(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.K2(s)},
scB(a){this.r.j(0,"content-type",a.l(0))},
pI(){if(!this.w)return
throw A.b(A.A("Can't modify a finalized Request."))}}
A.jS.prototype={}
A.nN.prototype={}
A.is.prototype={}
A.fT.prototype={
l(a){var s=new A.a5(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a5(0,new A.vA(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.vy.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.y3(null,j),h=$.IN()
i.iX(h)
s=$.IM()
i.fg(s)
r=i.gkx().h(0,0)
r.toString
i.fg("/")
i.fg(s)
q=i.gkx().h(0,0)
q.toString
i.iX(h)
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
k=n}else k=A.O6(i)
n=i.d=h.eq(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.vv()
return A.DC(r,q,o)},
$S:105}
A.vA.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.IK()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.I0(b,$.Iz(),new A.vz(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:36}
A.vz.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:66}
A.CD.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:66}
A.qc.prototype={
dz(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eN(),$async$dz)
case 5:o=b
s=o.gnv()<0.25?6:7
break
case 6:s=8
return A.a(p.jK(o),$async$dz)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnv()<0.25?9:10
break
case 9:s=11
return A.a(p.jK(m),$async$dz)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
iF(){var s=0,r=A.h(t.q),q,p=this
var $async$iF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eN(),$async$iF)
case 3:q=p.jK(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iF,r)},
eN(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.cf():j
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
jK(a){var s=this.c
if(s!=null)return s
return this.c=this.h9(a)},
h9(a){return this.qe(a)},
qe(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$h9=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.li("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iG(l),$async$h9)
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
return A.f($async$h9,r)}}
A.js.prototype={
pb(a,b,c,d,e,f,g,h,i,j,k){var s=this,r=new A.qc(s.c)
s.Q!==$&&A.ej()
s.Q=r
s.as!==$&&A.ej()
s.as=new A.wg(s.z,s.b,r,s.x,s.a)},
iy(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$iy=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.ay){s=1
break}n.ay=!0
if(n.ch){s=1
break}p=4
m=n.as
m===$&&A.t()
s=7
return A.a(m.iA(),$async$iy)
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
return A.f($async$iy,r)},
h_(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$h_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.at!=null){s=1
break}o=p.as
o===$&&A.t()
n=A.Kg(B.ci,o,A.l(["data"],t.s),p.grm(),p.grj(),p.w)
p.at=n
s=3
return A.a(n.aC(),$async$h_)
case 3:case 1:return A.e(q,r)}})
return A.f($async$h_,r)},
eH(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.at
o=o==null?null:o.aK()
s=2
return A.a(o instanceof A.w?o:A.bC(o,t.H),$async$eH)
case 2:q.at=null
for(o=q.cx,p=new A.aY(o,o.r,o.e,A.n(o).i("aY<2>"));p.k();)p.d.v()
o.aq(0)
q.cy.aq(0)
return A.e(null,r)}})
return A.f($async$eH,r)},
h6(){var s=0,r=A.h(t.H),q=this
var $async$h6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.eH(),$async$h6)
case 2:q.z.a.q()
return A.e(null,r)}})
return A.f($async$h6,r)},
rk(){var s,r,q,p
for(s=this.db,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
this.eK(p,new A.cI(p,B.ab,null))}},
rn(a){var s=a.b,r=s.b
if(!B.b.E(this.db,r))return
if(a.a==="delete"){this.hE(s)
return}this.eK(r,new A.cI(r,B.ab,s))},
hE(a){return this.tN(a)},
tN(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hE=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.E(n.db,j)){s=1
break}m=null
p=4
l=n.as
l===$&&A.t()
s=7
return A.a(l.c3(a.a),$async$hE)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.D(i)
if(l instanceof A.cQ){n.eK(j,new A.cI(j,B.aT,null))
s=1
break}else if(l instanceof A.br){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eK(j,new A.cI(j,B.aT,null))
s=1
break}n.eK(j,new A.cI(j,B.ab,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hE,r)},
eK(a,b){var s,r,q=this
q.cy.j(0,a,b)
s=q.cx
r=s.h(0,a)
if(r!=null)r.v()
s.j(0,a,A.c_(q.d,new A.wc(q,a)))},
xC(a,b){return this.iK(null,a,null,b,null)},
iK(a,b,c,d,e){return this.xF(a,b,c,d,e)},
xE(a,b){return this.iK(null,a,null,null,b)},
xF(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iK=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aX(0,new A.wd(p),t.N,t.co)
n=p.as
n===$&&A.t()
q=n.iJ(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iK,r)},
$iDT:1}
A.wc.prototype={
$0(){var s,r=this.a,q=this.b
r.cx.G(0,q)
s=r.cy.G(0,q)
if(s!=null&&(r.CW.c&4)===0)r.CW.u(0,s)},
$S:0}
A.wd.prototype={
$2(a,b){return new A.U(a,new A.dE("imgs+",b.a,b.b,b.c),t.ia)},
$S:115}
A.nb.prototype={}
A.wJ.prototype={
hV(a,b,c,d){return this.uu(a,b,c,d)},
uu(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.Bk(d)
n=t.hw
m=A.dW(null,null,n)
l=t.N
k=$.B.h(0,B.dP)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.lu(A.l([],t.kG))
j=new A.we(j)
p=new A.nb(c,B.aZ,a,o,B.b2,200,25,b,B.af,B.af,null,j,m,A.u(l,t.hU),A.u(l,n))
p.pb(a,B.af,B.aZ,b,25,200,null,B.b2,B.af,o,null)
s=3
return A.a(p.h_(),$async$hV)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
i_(a){return this.vb(a)},
vb(a){var s=0,r=A.h(t.H),q
var $async$i_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.eH(),$async$i_)
case 2:a.h6()
q=a.CW
if((q.c&4)===0)q.q()
return A.e(null,r)}})
return A.f($async$i_,r)}}
A.Bk.prototype={
cf(){var s=0,r=A.h(t.q),q,p=this,o
var $async$cf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cf(),$async$cf)
case 3:q=o.FU(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cf,r)},
iG(a){return this.xd(a)},
xd(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cf(),$async$iG)
case 3:q=o.FU(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iG,r)}}
A.wy.prototype={}
A.wg.prototype={
hP(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hP=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dz(),$async$hP)
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
l=A.li("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hP,r)},
fp(a,b,c,d,e,f){return this.wk(a,b,c,d,e,f)},
wk(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fp=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.OL(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.fl(a)+" && updated>="+A.fl(n)+")"
o=c==null?m:m+" && (updated>"+A.fl(n)+" || (updated="+A.fl(n)+" && id>"+A.fl(c)+"))"}l=t.N
l=A.u(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.fN(B.c.bs(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.C(b,","))
k=p.b.al("/api/collections/data/records").kH(l)
s=3
return A.a(p.mm("GET",k),$async$fp)
case 3:j=a0
p.dP(j,A.l([200],t.t),k)
i=p.d8(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aV("List response has no items array."))
h=J.bF(i,new A.wx(p),t.Q)
h=A.N(h,h.$ti.i("a_.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
c3(a){return this.ox(a)},
ox(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$c3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jI(a)
s=3
return A.a(p.mm("GET",o),$async$c3)
case 3:n=c
if(n.a===404)throw A.b(A.Kd("not found"))
p.dP(n,A.l([200],t.t),o)
q=A.h3(p.d8(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c3,r)},
hX(a,b,c){return this.uz(a,b,c)},
uz(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.al("/api/collections/data/records")
s=3
return A.a(p.f_("POST",o,B.h.a9(A.m(["id",b,"store",c,"data",p.je(a)],t.N,t.X),null)),$async$hX)
case 3:n=e
if(n.a===400&&p.qY(n))throw A.b(new A.fF(p.eM(n)))
p.dP(n,A.l([200,201],t.t),o)
q=A.h3(p.d8(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
je(a){var s,r,q
try{r=B.h.aH(a,null)
return r}catch(q){s=A.D(q)
r=A.Kf("Corrupt local payload: "+A.r(s))
throw A.b(r)}},
qY(a){var s,r,q,p,o,n
try{s=this.d8(a)
r=J.T(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fO(a,b,c){return this.xB(a,b,c)},
xB(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jI(c)
s=3
return A.a(p.f_("PATCH",o,B.h.a9(A.m(["data",p.je(b)],t.N,t.X),null)),$async$fO)
case 3:n=e
p.dP(n,A.l([200],t.t),o)
q=A.h3(p.d8(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)},
iJ(a,b,c,d,e){return this.xD(a,b,c,d,e)},
xD(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iJ=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jI(b)
m=t.N
l=A.u(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a9(d,null))
if(e==null)m=null
else{m=A.n(e).i("ao<2>")
m=A.N(new A.ao(e,m),m.i("o.E"))}s=3
return A.a(p.tk(new A.ms("PATCH",n,B.aA,l,m==null?B.cW:m)),$async$iJ)
case 3:o=g
p.dP(o,A.l([200],t.t),n)
q=A.h3(p.d8(o),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iJ,r)},
fb(a,b,c){return this.vf(a,b,c)},
vf(a,b,c){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$fb=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.u(i,i)
l=n.b.al("/api/files/data/"+A.px(2,b,B.o,!1)+"/"+A.px(2,a,B.o,!1))
k=i.a===0?l:l.kH(i)
s=3
return A.a(n.rp(new A.eC("GET",k,B.aA,null)),$async$fb)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.aW(new A.ww()).v().fM(B.cj),$async$fb)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.lY(A.JK(m.a,m.b,""),k))
case 5:q=n.pJ(m.c)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fb,r)},
pJ(a){var s,r,q={},p=this.d
if(p.a<=0)return a
s=A.oI()
q.a=q.b=null
r=new A.wo(q,p,s)
s.b=A.nL(new A.wk(q),new A.wl(q,r,a,s),new A.wm(q),new A.wn(q,r),!0,t.L)
return s.aE().gcv()},
fB(a){return this.wT(a)},
wT(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$fB=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.al("/api/batch")
a6=A.l([],t.kf)
for(l=J.aw(a7),k=l.gt(a7),j=t.N,i=t.X,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",p.je(g.d)],j,i)],j,h))}s=3
return A.a(p.f_("POST",a5,B.h.a9(A.m(["requests",a6],j,t.ew),null)),$async$fB)
case 3:o=b0
if(o.a===403)throw A.b(A.JA(p.eM(o)))
if(o.a===400)throw A.b(new A.en(p.eM(o)))
p.dP(o,A.l([200],t.t),a5)
n=null
try{n=B.h.aH(o.c,null)}catch(a8){a6=A.D(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aV("Batch response is not valid JSON: "+m.gir()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aV("Batch response has no results array."))}else throw A.b(A.aV("Batch response is not a list or envelope."))
e=c}a6=J.I(e)
if(a6.gm(e)!==l.gm(a7))throw A.b(A.aV("Batch response has "+a6.gm(e)+" results for "+l.gm(a7)+" requests."))
b=A.l([],t.g2)
for(k=t.f,j=p.e,a=0;a<l.gm(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aV("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.cF(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.h3(a3,j):null
g=a2?null:p.ql(a0)
a4=a2&&k.b(a3)?B.h.a9(a3.h(0,"data"),null):null
b.push(new A.jz(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
iA(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f_("POST",p.b.al("/api/batch"),B.h.a9(A.m(["requests",[]],t.N,t.kS),null)),$async$iA)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.li(p.eM(o)))
if(n===408||n===429||n>=500)throw A.b(A.FV("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iA,r)},
jI(a){return this.b.al("/api/collections/data/records/"+A.px(2,a,B.o,!1))},
f_(a,b,c){return this.cd(new A.ws(this,a,b,c),new A.wt(),t.w)},
mm(a,b){return this.f_(a,b,null)},
tk(a){return this.cd(new A.wu(this,a),new A.wv(),t.w)},
rp(a){return this.cd(new A.wq(this,a),new A.wr(),t.lI)},
cd(a,b,c){return this.tS(a,b,c,c)},
tS(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cd=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.h3(),$async$cd)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$cd)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.j6(),$async$cd)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$cd)
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
if(i instanceof A.dF){j=i
throw A.b(A.FV(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cd,r)},
h3(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$h3=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dz(),$async$h3)
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
l=A.li("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h3,r)},
ey(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$ey=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.iF(),$async$ey)
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
l=A.li("token refresh failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ey,r)},
j6(){var s=0,r=A.h(t.q),q,p=this
var $async$j6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.ey()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j6,r)},
jP(a,b,c,d){return this.ti(a,b,c,d)},
ti(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jP=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.u(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.ba(new A.eC(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jP,r)},
dP(a,b,c){if(B.b.E(b,a.a))return
throw A.b(this.lY(a,c))},
lY(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eM(a)
if(401===s)return new A.c6(q)
if(403===s)return new A.cM(q)
if(404===s)return new A.cQ(q)
if(408===s||429===s)return new A.dU(r,q)
if(400===s)return new A.eN(q)
if(s>=500)return new A.jL(q)
return new A.h5("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eM(a){var s,r,q,p,o
try{s=this.d8(a)
r=J.T(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.T(s,"data")
if(t.f.b(q)){p=q
p=p.gS(p)}else p=!1
if(p){p=B.h.a9(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.B(p,0,500)},
d8(a){var s,r,q,p=null
try{p=B.h.aH(a.c,null)}catch(r){q=A.D(r)
if(t.Y.b(q)){s=q
throw A.b(A.aV("Response is not valid JSON: "+s.gir()))}else throw r}if(t.f.b(p))return A.bo(p,t.N,t.X)
throw A.b(A.aV("Expected a JSON object, got "+J.c5(p).l(0)+"."))},
ql(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.wx.prototype={
$1(a){return A.h3(a,this.a.e)},
$S:117}
A.ww.prototype={
$1(a){},
$S:11}
A.wo.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.v()
r=this.b
s.b=A.c_(r,new A.wp(s,this.c,r))},
$S:0}
A.wp.prototype={
$0(){var s=this.b
s.aE().jZ(new A.eW("download stalled: no chunk within "+this.c.l(0)))
s.aE().q()
s=this.a.a
if(s!=null)s.v()},
$S:0}
A.wl.prototype={
$0(){var s,r,q=this,p=q.b
p.$0()
s=q.d
r=q.a
r.a=q.c.bx(new A.wh(p,s),new A.wi(r,s),new A.wj(r,s))},
$S:0}
A.wh.prototype={
$1(a){this.a.$0()
J.aM(this.b.aE(),a)},
$S:11}
A.wj.prototype={
$2(a,b){var s=this.a.b
if(s!=null)s.v()
this.b.aE().bi(a,b)},
$S:6}
A.wi.prototype={
$0(){var s=this.a.b
if(s!=null)s.v()
this.b.aE().q()},
$S:0}
A.wm.prototype={
$0(){var s=this.a.a
return s==null?null:s.b5()},
$S:0}
A.wn.prototype={
$0(){var s=this.a.a
if(s!=null)s.aY()
this.b.$0()},
$S:0}
A.wk.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.v()
s=s.a
return s==null?null:s.v()},
$S:120}
A.ws.prototype={
$1(a){var s=this
return s.a.jP(s.b,s.c,s.d,a)},
$S:61}
A.wt.prototype={
$1(a){return a.a},
$S:64}
A.wu.prototype={
$1(a){var s=this.b,r=t.N
r=A.cb(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dE(new A.ms(s.a,s.b,r,s.d,s.e))},
$S:61}
A.wv.prototype={
$1(a){return a.a},
$S:64}
A.wq.prototype={
$1(a){var s=this.b,r=t.N
r=A.cb(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.eu(new A.eC(s.a,s.b,r,s.d))},
$S:134}
A.wr.prototype={
$1(a){return a.a},
$S:136}
A.ju.prototype={}
A.hU.prototype={}
A.wz.prototype={
aC(){var s=0,r=A.h(t.H),q,p=this
var $async$aC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.y){s=1
break}p.y=!0
p.eZ()
case 1:return A.e(q,r)}})
return A.f($async$aC,r)},
aK(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.y=!1
n=q.Q
if(n!=null)n.v()
q.Q=null
n=q.z
n=n==null?null:n.v()
s=2
return A.a(n instanceof A.w?n:A.bC(n,t.H),$async$aK)
case 2:q.z=null
p=q.as
if(p!=null?(p.a.a&30)===0:o)p.ak()
return A.e(null,r)}})
return A.f($async$aK,r)},
eZ(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eZ=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.r,m=t.H
case 2:if(!o.y){s=3
break}q=5
s=8
return A.a(o.bP(),$async$eZ)
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
return A.a(A.JG(n.$1(k),m),$async$eZ)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eZ,r)},
m4(a){var s=this.a,r=t.N
return s.a.eu(new A.eC("GET",s.b.al("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
mn(a,b){var s=this.a,r=t.N
return s.a.ba(new A.eC("POST",s.b.al("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a9(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
bP(){return this.pY()},
pY(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$bP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.hP(),$async$bP)
case 3:k=b
m.a=k
s=4
return A.a(p.m4(k),$async$bP)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.ey(),$async$bP)
case 7:k=b
m.a=k
s=8
return A.a(p.m4(k),$async$bP)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iQ("realtime connect status "+l,null))
s=!p.y?9:10
break
case 9:s=11
return A.a(o.c.aW(new A.wC()).v(),$async$bP)
case 11:s=1
break
case 10:++p.ax
p.as=new A.aF(new A.w($.B,t.D),t.h)
l=$.pT()
n=A.l([],t.s)
m.b=m.c=!1
n=o.c.bx(new A.wD(m,p,new A.wG(p),new A.Bl(new A.Aa(l),n)),new A.wE(p),new A.wF(p))
p.z=n
s=!p.y?12:13
break
case 12:s=14
return A.a(n.v(),$async$bP)
case 14:p.z=null
s=1
break
case 13:s=15
return A.a(p.as.a,$async$bP)
case 15:l=p.Q
if(l!=null)l.v()
p.z=p.Q=null
if(m.b)throw A.b(A.iQ("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$bP,r)},
dU(a,b){return this.qJ(a,b)},
qJ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$dU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.mn(h,b),$async$dU)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.ey(),$async$dU)
case 10:s=9
return A.a(p.mn(g,d),$async$dU)
case 9:s=7
break
case 8:d=l
case 7:k=d.a
if(k!==204&&k!==200)throw A.b(A.iQ("realtime subscribe status "+k,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
if(!t.f.b(n)){s=1
break}try{m=A.h3(n,p.a.e)
p.x.$1(new A.ju(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$dU,r)}}
A.wI.prototype={
$1(a){return A.HI(a,this.a,this.b,A.OG())},
$S:138}
A.wC.prototype={
$1(a){},
$S:11}
A.wG.prototype={
$0(){var s,r=this.a,q=r.e
if(q.a<=0)return
s=r.Q
if(s!=null)s.v()
r.Q=A.c_(q,new A.wH(r))},
$S:0}
A.wH.prototype={
$0(){var s,r=this.a
if(!r.y)return
s=r.z
if(s!=null)s.v()
r=r.as
if((r.a.a&30)===0)r.ak()},
$S:0}
A.wD.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
l.c.$0()
s=l.d.vx(a)
for(r=s.length,q=l.b,p=l.a,o=t.P,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
q.at=q.at.W(new A.wA(p,q,m),o).k6(new A.wB(q))}},
$S:11}
A.wA.prototype={
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
return A.a(j instanceof A.w?j:A.bC(j,t.H),$async$$1)
case 8:i=i.as
if((i.a.a&30)===0)i.ak()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.c&&n.c.a!=null){i.c=!0
try{n.b.w.$0()}catch(g){m=A.D(g)
l=A.ae(g)
i=n.b
i.ay=m
i.ch=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:143}
A.wB.prototype={
$2(a,b){var s=this.a
if(s.ay==null)s.ay=a
if(s.ch==null)s.ch=b},
$S:6}
A.wE.prototype={
$0(){var s=this.a,r=s.Q
if(r!=null)r.v()
s=s.as
if((s.a.a&30)===0)s.ak()},
$S:0}
A.wF.prototype={
$1(a){var s=this.a,r=s.Q
if(r!=null)r.v()
s=s.as
if((s.a.a&30)===0)s.ak()},
$S:20}
A.Bl.prototype={
vx(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.kK()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.qV(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dv(p,o,q)))
p=o+1
m=this.qa(B.a.xw(new A.dt(!0).d6(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.bb(s,p))
return r},
qV(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qC(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.aq(k)
return l}s=m.b
r=B.b.C(k,"\n")
m.b=null
B.b.aq(k)
try{q=B.h.aH(r,l)
if(t.f.b(q)){p=A.bo(q,t.N,t.X)
o=J.T(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.hU(o,l)
return new A.hU(l,p)}}catch(n){}return l},
qa(a){var s,r=this,q=null
if(a.length===0)return r.qC()
if(B.a.T(a,"PB_CONNECT:")){r.b=null
B.b.aq(r.c)
return new A.hU(B.a.c2(B.a.ab(a,11)),q)}if(B.a.T(a,":"))return q
if(B.a.T(a,"event:")){r.b=B.a.c2(B.a.ab(a,6))
return q}if(B.a.T(a,"data:")){s=B.a.c2(B.a.ab(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eC.prototype={}
A.dE.prototype={
oQ(){return this.d.$0()},
gm(a){return this.c}}
A.ms.prototype={}
A.cN.prototype={}
A.dF.prototype={
l(a){return"HttpTransportException: "+this.a},
$iH:1}
A.dX.prototype={}
A.we.prototype={
ba(a){return this.oF(a)},
oF(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$ba=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eu(a),$async$ba)
case 7:m=c
j=m.c
s=8
return A.a(B.aQ.l7(j).en(0).fM(B.T),$async$ba)
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
if(j instanceof A.dF)throw g
else{k=j
j=A.iQ("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ba,r)},
dE(a){return this.oG(a)},
oG(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dE=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.K9(a6.a,a6.b)
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
a0=A.I3(a0)
a3=new A.fT("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cW(A.u(d,d),e))
b.push(new A.mU(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.p)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.ba(m).fM(B.T),$async$dE)
case 11:k=a8
g=k.w
s=12
return A.a(B.aQ.l7(g).en(0).fM(B.T),$async$dE)
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
if(g instanceof A.dF)throw a5
else{i=g
g=A.iQ("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
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
a1=A.Kx(a,a0)
a1.r.D(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gkj().ki(j)
i.pI()
i.y=A.OP(j)
h=i.gcB()
if(h==null){j=t.N
i.scB(A.DC("text","plain",A.m(["charset",i.gkj().gaS()],j,j)))}else{j=i.gcB()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.bW(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gkj().gaS()],j,j)
e=h.a
d=h.b
c=A.bo(h.c,j,j)
c.D(0,f)
i.scB(A.DC(e,d,c))}}}p=4
s=7
return A.a(n.a.ba(a1).fM(B.T),$async$eu)
case 7:m=a5
j=t.N
l=A.u(j,j)
m.e.a5(0,new A.wf(l))
j=m.b
i=m.w
q=new A.dX(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.D(a2)
if(j instanceof A.dF)throw a2
else{k=j
a=A.iQ("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eu,r)}}
A.wf.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:36}
A.r9.prototype={
$1(a){return a.b===this.a},
$S:152}
A.ra.prototype={
$1(a){return a.b===this.a},
$S:157}
A.lE.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.N(s,A.n(s).c)
B.b.aj(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.N(s,A.n(s).c)
B.b.aj(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.jw.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iH:1}
A.c9.prototype={}
A.lA.prototype={
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
B.b.aj(s)
q.j(0,"changedFields",s)
return q}}
A.lI.prototype={
gY(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jY.prototype={
gY(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.mj.prototype={
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
A.m8.prototype={
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
A.m9.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.me.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.ma.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.m7.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.mn.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.mh.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.mc.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
s=r.d
if(s!=null)q.j(0,"refId",s)
return q}}
A.mb.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.mk.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.mf.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.m1.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.nJ.prototype={
p(){return B.k}}
A.mm.prototype={
gY(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.iI.prototype={
gY(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fM.prototype={
gY(){return"fileRefs"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.mi.prototype={
gY(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fL.prototype={
gY(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fJ.prototype={
gY(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.hm.prototype={
gY(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fK.prototype={
gY(){return"fileChunk"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",r.b)
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.vT.prototype={}
A.jd.prototype={}
A.jg.prototype={}
A.je.prototype={}
A.jh.prototype={}
A.ja.prototype={}
A.jb.prototype={}
A.j9.prototype={}
A.jf.prototype={}
A.jc.prototype={}
A.C5.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.I)},
$S:12}
A.xp.prototype={
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
A.xq.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.I)},
$S:12}
A.xr.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.P("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.E(a);r.k();)s.push(A.FJ(r.gn()))
return s},
$S:163}
A.eP.prototype={
p(){var s,r,q,p,o=this,n=A.u(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.push(A.fh(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.fh(o.c))
return n}}
A.xl.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.I)},
$S:12}
A.xm.prototype={
$1(a){return a.b===this.a},
$S:165}
A.b3.prototype={
a7(){return"QueryConditionOp."+this.b}}
A.cR.prototype={}
A.wN.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.I)},
$S:12}
A.wM.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.P("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.E(a);r.k();)s.push(A.DE(r.gn()))
return s},
$S:166}
A.j0.prototype={
p(){var s=A.u(t.N,t.X)
s.j(0,"kind","leaf")
s.D(0,this.a.p())
return s}}
A.jo.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.ii.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.ij.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.ni.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.xo.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.I)},
$S:12}
A.cH.prototype={
a7(){return"AggregateFn."+this.b}}
A.xH.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.xI.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.I)},
$S:12}
A.nn.prototype={}
A.n4.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"stores",this.a)
r.j(0,"manifestFingerprints",this.b)
s=this.c
if(s!=null)r.j(0,"storePolicies",s)
return r}}
A.lv.prototype={
p(){return B.k}}
A.mq.prototype={
p(){return B.k}}
A.ly.prototype={
p(){return B.k}}
A.mo.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nr.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mV.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.Ms(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nj.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lL.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lK.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lY.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.mt.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lb.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.m4.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nx.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dZ.prototype={
a7(){return"TransactionDurability."+this.b}}
A.o5.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.o6.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.o8.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.oa.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.o9.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.o7.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.op.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.oq.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.oo.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.ld.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.on.prototype={
p(){return B.k}}
A.ol.prototype={
p(){return B.k}}
A.nf.prototype={
p(){return B.k}}
A.lB.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.ns.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lH.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.lF.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.np.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.l8.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.l9.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.lJ.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ai.prototype={}
A.h1.prototype={
gY(){return"ok"},
p(){return B.k}}
A.ir.prototype={
gY(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.mr.prototype={
gY(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.hc.prototype={
gY(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.hd.prototype={
gY(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fX.prototype={
gY(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.h9.prototype={
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
A.fC.prototype={
gY(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fE.prototype={
gY(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fP.prototype={
gY(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fr.prototype={
gY(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fI.prototype={
gY(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.hf.prototype={
gY(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.nw.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fA.prototype={
gY(){return"conflicts"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fz.prototype={
gY(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hs.prototype={
gY(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hz.prototype={
gY(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.h6.prototype={
gY(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fy.prototype={
gY(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.eU.prototype={
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
A.ba.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.nW.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.o0.prototype={
p(){return B.k}}
A.nR.prototype={
p(){return B.k}}
A.nS.prototype={
p(){return B.k}}
A.nU.prototype={
p(){return B.k}}
A.o1.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.nV.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.nZ.prototype={
p(){return B.k}}
A.nX.prototype={
gY(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.nT.prototype={
gY(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.o_.prototype={
gY(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.nY.prototype={
gY(){return"syncStatusEvent"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.lj.prototype={
gY(){return"authRequired"},
p(){return B.k}}
A.eX.prototype={
l(a){return"WireException: "+this.a},
$iH:1}
A.D9.prototype={
$2(a,b){return B.a.a3(a.a,b.a)},
$S:175}
A.na.prototype={
a7(){return"PlatformProfile."+this.b}}
A.nI.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.xS.prototype={
$1(a){return J.bE(a.gaU())},
$S:38}
A.xT.prototype={
$1(a){return B.a.E(a,"ENABLE_FTS5")},
$S:13}
A.it.prototype={
a7(){return"ChangeOrigin."+this.b}}
A.dB.prototype={
a7(){return"ChangeAction."+this.b}}
A.dT.prototype={
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
B.b.aj(s)
q.j(0,"changedFields",s)
return q},
P(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.dT))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.p.V(b.e,s.e)&&B.p.V(b.f,s.f)&&B.p.V(b.r,s.r)},
gK(a){var s=this
return A.cd(s.a,s.b,s.c,s.d,B.p.ad(s.e),B.p.ad(s.f),B.p.ad(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a4.prototype={}
A.qr.prototype={
kg(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
vk(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.qs.prototype={}
A.qt.prototype={}
A.t1.prototype={}
A.pZ.prototype={
vl(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cU(256)
q=this.b.vm(new Uint8Array(A.be(a)),b,m,this.c)
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
uF(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.S("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.A("Unsupported ciphertext version 0x"+B.a.ix(B.c.kM(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.be(B.f.U(a,1,13)))
n-=16
r=new Uint8Array(A.be(B.f.bb(a,n)))
q=new Uint8Array(A.be(B.f.U(a,13,n)))
try{n=this.b.uG(new A.jI(q,new A.j3(r),s),b,this.c)
return n}catch(o){if(A.D(o) instanceof A.jJ)throw A.b(A.A("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d9.prototype={
a7(){return"KindViolation."+this.b}}
A.Cr.prototype={
$2(a,b){return B.a.a3(a.a,b.a)},
$S:191}
A.fa.prototype={$iH:1}
A.B_.prototype={
cf(){var s=0,r=A.h(t.N),q,p=this,o
var $async$cf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cf,r)}}
A.ps.prototype={}
A.hS.prototype={}
A.u9.prototype={
pa(a,b){var s=this,r=s.a.a.a$.b
r=new A.b6(r,A.n(r).i("b6<1>")).aW(new A.uD(s))
s.c!==$&&A.ej()
s.c=r},
vJ(a){var s,r,q=this
A:{if(a instanceof A.n4){s=q.ho(a.a,a.b)
break A}if(a instanceof A.lv){s=A.bf(q.h4(),t.V)
break A}if(a instanceof A.mq){s=A.bf(new A.mr(!0,q.a.d.a),t.V)
break A}if(a instanceof A.ly){s=q.q().W(new A.uE(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mo){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bE(r,new A.uF(s,q),new A.uG())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.nr){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bE(r,new A.uR(s,q),new A.v1())
break A}if(a instanceof A.mV){s=q.r5(a.a,a.b,a.c)
break A}if(a instanceof A.nj){s=q.rq(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lL){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bE(r,new A.v2(s,q),A.HA())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lK){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bE(r,new A.v3(s,q),A.HA())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lY){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bE(r,new A.v4(s,q),A.NR())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mt){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bE(r,new A.v5(s,q),A.NT())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.lb){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bE(r,new A.v6(s,q),A.NQ())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.m4){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bE(r,new A.v7(s,q),A.NS())
break A}if(a instanceof A.nx){s=q.te(a.a,a.b,a.c)
break A}if(a instanceof A.o5){s=q.pv(a.a,a.b)
break A}if(a instanceof A.o6){s=q.f0(a.a,!0)
break A}if(a instanceof A.o8){s=q.f0(a.a,!1)
break A}if(a instanceof A.oa){s=q.hx(a.a,a.b)
break A}if(a instanceof A.o9){s=q.hw(a.a,a.b)
break A}if(a instanceof A.o7){s=q.hu(a.a,a.b)
break A}if(a instanceof A.op){s=q.hF(a.a,a.b)
break A}if(a instanceof A.oq){s=q.tP(a.a,a.b)
break A}if(a instanceof A.oo){s=q.jV(a.a)
break A}if(a instanceof A.ld){s=q.a.a.e
s===$&&A.t()
s=s.ea(a.a).W(new A.uH(),t.V)
break A}if(a instanceof A.on){s=q.a.a.e
s===$&&A.t()
s=s.fP().W(new A.uI(),t.V)
break A}if(a instanceof A.ol){s=q.a.a.e
s===$&&A.t()
s=s.iL().W(new A.uJ(),t.V)
break A}if(a instanceof A.nf){s=q.a.a.e
s===$&&A.t()
s=s.fA().W(new A.uK(),t.V)
break A}if(a instanceof A.lB){s=q.a.a.e
s===$&&A.t()
s=s.ee(a.a,A.bS(0,a.b,0)).W(new A.uL(),t.V)
break A}if(a instanceof A.ns){s=q.a.a.e
s===$&&A.t()
s=s.cZ(A.bS(0,a.a,0)).W(new A.uM(),t.V)
break A}if(a instanceof A.lH){s=q.a.a.fr
s===$&&A.t()
s=s.fo(a.a).W(new A.uN(q),t.V)
break A}if(a instanceof A.lF){s=q.a.a.fr
s===$&&A.t()
s=s.dD(a.a,a.b).W(new A.uO(q),t.V)
break A}if(a instanceof A.np){s=q.a.a.fr
s===$&&A.t()
s=s.ez(a.b,a.c,a.a).W(new A.uP(),t.V)
break A}if(a instanceof A.l8){s=q.a.a.fr
s===$&&A.t()
s=s.f2(a.a,a.b).W(new A.uQ(),t.V)
break A}if(a instanceof A.l9){s=q.a.a.fr
s===$&&A.t()
s=s.e8(a.a,a.b).W(new A.uS(),t.V)
break A}if(a instanceof A.lJ){s=q.tQ(a.a)
break A}if(a instanceof A.m8){s=q.jk(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.m9){s=q.jl(a.a,a.b)
break A}if(a instanceof A.me){s=q.hg(a.a)
break A}if(a instanceof A.m7){s=q.jj(a.a)
break A}if(a instanceof A.mn){s=q.a.a.fx
s===$&&A.t()
s=s.cT(a.c,a.b,a.a).W(new A.uT(q),t.V)
break A}if(a instanceof A.mh){s=q.hh(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.mb){s=q.jm(a.a,a.b)
break A}if(a instanceof A.ma){s=q.he(a.a)
break A}if(a instanceof A.mk){s=q.a.a.fx
s===$&&A.t()
s=s.fF(0,a.c,a.d,a.b,a.e,a.a).W(new A.uU(),t.V)
break A}if(a instanceof A.mc){s=q.hf(a.a,a.b,a.c,a.d)
break A}if(a instanceof A.mf){s=q.a.a.fx
s===$&&A.t()
s=s.bm(A.bS(0,a.a,0),A.bS(0,a.b,0)).W(new A.uV(),t.V)
break A}if(a instanceof A.m1){s=q.a.a.fx
s===$&&A.t()
s=s.cN(a.a).W(new A.uW(),t.V)
break A}if(a instanceof A.nJ){s=q.a.a.fx
s===$&&A.t()
s=s.gik().W(new A.uX(),t.V)
break A}if(a instanceof A.nW){s=q.e6(a.a,a.b,a.c)
break A}if(a instanceof A.o0){s=q.cJ().W(new A.uY(),t.V)
break A}if(a instanceof A.nR){s=q.hz()
break A}if(a instanceof A.nS){s=q.e5(new A.uZ(q))
break A}if(a instanceof A.nU){s=q.e5(new A.v_(q))
break A}if(a instanceof A.o1){s=q.hA(a.a)
break A}s={}
s.a=null
if(a instanceof A.nV){s.a=a.a
s=q.e5(new A.v0(s,q))
break A}if(a instanceof A.nZ){s=q.ax
s=A.bf(new A.o_(s==null?B.dV:s),t.V)
break A}throw A.b(A.eR(u.P))}return s},
ho(a,b){return this.ro(a,b)},
ro(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ho=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.fy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.qx(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:h=n.f
h===$&&A.t()
s=9
return A.a(h.aT(j),$async$ho)
case 9:s=7
break
case 8:g=m.h(0,i)
if(g==null)A.v(A.A('No store "'+i+'" registered in this LocalPocket.'))
f=g.c
e=A.DN(j)
d=new A.a5("")
A.cl(d,f.p())
h=d.a
h=B.e.A(h.charCodeAt(0)==0?h:h)
c=new A.c8()
b=A.d_(c)
b.u(0,h)
b.q()
b=A.au(c.a.a)
d=new A.a5("")
A.cl(d,e.p())
h=d.a
h=B.e.A(h.charCodeAt(0)==0?h:h)
c=new A.c8()
a=A.d_(c)
a.u(0,h)
a.q()
if(b!==A.au(c.a.a))throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){g=m.h(0,i)
if(g==null)A.v(A.A('No store "'+i+'" registered in this LocalPocket.'))
d=new A.a5("")
A.cl(d,g.c.p())
h=d.a
h=B.e.A(h.charCodeAt(0)==0?h:h)
c=new A.c8()
b=A.d_(c)
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
return A.f($async$ho,r)},
h4(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$h4=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bE(B.b.gH(m.b.oD("PRAGMA journal_mode")).gaU())
m=m.a.fx
m===$&&A.t()
s=3
return A.a(m.gik(),$async$h4)
case 3:o=b
m=l.e===B.aE
n=m?"opfs":"file"
q=new A.ir(l.a,l.b,l.c,l.d,m,n,o,J.Z(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h4,r)},
dM(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.aw(a)
if(b!=null){s=this.de(b)
r=A.Fn(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.v(A.A('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.de(b)
return new A.fx(n,m,new A.iG(q),p.r)}return new A.fx(n,m,o.gbv(),null)},
pL(a){return this.dM(a,null)},
r5(a,b,c){return this.bE(c,new A.uo(this,a,c,b),new A.up())},
bA(a,b){var s
A.au(B.m.A(B.e.A(A.ak(this.a.a.aw(a).c.p()))).a)
if(a.length===0)A.v(A.aD(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.v(A.aD(s,"spec.limit","must not be negative"))
return new A.xn(a,b)},
bg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.dM(a.a,a0),c=t.fC,b=new A.nh(d.a,d.b.a,d.c.b,A.l([],c),A.l([],c),A.l([],t.k),A.l([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s)b=this.pr(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.p)(d),++s){o=d[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bj)throw A.b(A.V('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.wI(n)}j=e.c
if(j!=null){d=A.CV(j)
b.jW(d)
A.Ef(d)
i=A.C0(d,!0)
h=b.h7()
h.d.push(new A.b5(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s,b=h){g=d[s]
q=g.a
b.d4(q)
h=b.h7()
h.r.push(new A.cq(q,g.b))}d=e.r
if(d!=null)b=b.lv(A.bK(d,!0,r))
if(e.w)b=b.q1(!0)
if(e.x)b=b.q2(!0)
if(e.f)b=b.q_(!0)
else{d=e.e
if(d!=null){if(d<0)A.v(A.V("Limit must be non-negative, got "+A.r(d)+".",f))
b=b.q3(d)}}return b},
pr(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.nH(0,b.a,!0)
return a.xK(0,b.a,s)
case 1:return a.xR(0,b.a,b.c)
case 2:return a.xL(0,b.a,b.c)
case 3:return a.xM(0,b.a,b.c)
case 4:return a.xP(0,b.a,b.c)
case 5:return a.xQ(0,b.a,b.c)
case 6:return a.xN(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.j
if(r.length!==2)throw A.b(A.S("between requires exactly two values.",null))
return a.xH(0,b.a,new A.a0(r[0],r[1]))
case 8:return a.xS(0,b.a,A.a7(b.c))
case 9:return a.xJ(0,b.a,A.a7(b.c))
case 10:return a.xI(0,b.a,A.a7(b.c))
case 11:return a.nH(0,b.a,!0)
case 12:return a.xO(0,b.a,!0)}},
rq(a,b,c){return this.bE(c,new A.uq(this,this.bA(a,b),c),new A.ur())},
te(a,b,c){return this.bE(c,new A.uu(this,a,c,b),new A.uv())},
pv(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.A("A transaction session is already active on this database."))
s="tx"+ ++l.ay
r=$.B
q=t.D
p=t.h
o=new A.w(r,q)
n=new A.ps(s,new A.aF(new A.w(r,q),p),new A.aF(o,p),A.l([],t.mc),new A.aH(Date.now(),0,!1))
k.j(0,s,n)
l.qj()
m=l.a.a
k=new A.uc(n)
if(a){if(A.ob(m)!=null)A.v(A.A(u.L))
r=m.b
r===$&&A.t()
k=r.x5(k,t.H)}else{r=b===B.bt?B.b0:B.q
r=m.b1(k,r,t.H)
k=r}n.w!==$&&A.ej()
n.w=k
k.k6(new A.ua(l,n,s))
return o.W(new A.ub(s),t.V)},
f0(a,b){return this.tn(a,b)},
tn(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$f0=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.de(a)
for(l=h.e,k=A.a1(l).i("bB<1>"),l=new A.bB(l,k),l=new A.as(l,l.gm(0),k.i("as<a_.E>")),k=k.i("a_.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.v(A.A("Future already completed"))
j.aG(null)}h.f=!b
h.c.ak()
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
if(A.D(g) instanceof A.fa){if(b)throw g}else throw g
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
hx(a,b){return this.tb(a,b)},
tb(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.de(a)
n=$.B
m=t.D
l=t.h
k=new A.w(n,m)
j=new A.hS(b,new A.aF(new A.w(n,m),l),new A.aF(k,l))
l=o.r.a1(new A.ut(j),t.H)
j.f!==$&&A.ej()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hx)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hx,r)},
hw(a,b){return this.t9(a,b)},
t9(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hw=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.de(a).e
f=B.b.n8(g,new A.us(b))
if(f<0)throw A.b(A.A('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a1(g).i("bB<1>")
l=A.N(new A.bB(g,l),l.i("a_.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bX(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.v(A.A("Future already completed"))
i.aG(null)
p=7
i=m.f
i===$&&A.t()
s=10
return A.a(i,$async$hw)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.D(e) instanceof A.fa))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:B.b.iI(g,f,g.length)
q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hw,r)},
hu(a,b){return this.t1(a,b)},
t1(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hu=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.de(a).e
j=A.Fn(k)
if(j==null||j.a!==b)throw A.b(A.A('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.ak()
p=4
m=j.f
m===$&&A.t()
s=7
return A.a(m,$async$hu)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.D(i) instanceof A.fa)throw i
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
return A.f($async$hu,r)},
hF(a,b){return this.tR(a,b)},
tR(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.aw(a)
s=3
return A.a(p.pL(a).bK(b),$async$hF)
case 3:o="w"+ ++p.ay
n=A.oI()
n.si4(new A.n3(l,b,m,B.b1).iY().nf(new A.uz(p,o),new A.uA(p,n,o)))
p.f.j(0,o,n.aE())
q=A.bf(new A.hz(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
tP(a,b){var s=this,r="w"+ ++s.ay,q=s.bg(s.bA(a,b),null),p=A.oI()
p.si4(new A.nk(q,q.ge2(),B.b1).iY().nf(new A.uB(s,r),new A.uC(s,p,r)))
s.f.j(0,r,p.aE())
return A.bf(new A.hz(r),t.V)},
jV(a){return this.tG(a)},
tG(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.G(0,a)
if(o!=null)o.v()
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jV,r)},
qk(){if(this.w!=null)return
this.w=A.yn(A.bS(9e8,0,0),new A.uj(this))},
jk(a,b,c,d,e,f,g){return this.qt(a,b,c,d,e,f,g)},
qt(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$jk=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.qk()
o=p.r
n="u"+ ++p.ay
o.n3()
m=o.r
if(m.a>=16)A.v(A.V("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.v(A.V("Invalid file size: "+c,null))
if(o.gnB()+c>536870912)A.v(A.V("Aggregate upload quota exceeded: "+o.gnB()+" + "+c+" > 536870912",null))
o=o.f.$0().j5(18e8)
m.j(0,n,new A.cL(n,a,b,d,e,c,f,g,A.l([],t.bs),o))
q=new A.mm("u"+p.ay,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jk,r)},
jl(a,b){return this.qu(a,b)},
qu(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$jl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.v(A.V("Unknown upload session: "+a,null))
l=l.f
if(!j.z.kv(l.$0())){k.G(0,a)
A.v(A.V("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.G(0,a)
A.v(A.V("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.G(0,a)
A.v(A.V("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().j5(18e8)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jl,r)},
hg(a){return this.qy(a)},
qy(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.G(0,a)
if(g==null)A.v(A.V("Unknown upload session: "+a,null))
if(!g.z.kv(h.f.$0()))A.v(A.V("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.v(A.V("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.fx
h===$&&A.t()
n=g.b
m=g.c
l=new A.uk(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.dh(g.w,l,i,o,k,j,m,n),$async$hg)
case 3:q=new f.iI(p.jn(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
jj(a){return this.qs(a)},
qs(a){var s=0,r=A.h(t.V),q,p=this
var $async$jj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.G(0,a)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jj,r)},
hh(a,b,c,d,e){return this.qA(a,b,c,d,e)},
qA(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$hh=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.fx
k===$&&A.t()
s=3
return A.a(k.fv(c,d,b,e,a),$async$hh)
case 3:o=g
n="f"+ ++p.ay
m=new A.md(new A.aH(Date.now(),0,!1))
m.c=new A.aH(Date.now(),0,!1)
l=A.oI()
l.si4(o.bx(new A.ul(p,m,n,l),new A.um(p,n),new A.un(p,n)))
k=l.aE()
m.d!==$&&A.ej()
m.d=k
p.x.j(0,n,m)
p.qi()
q=new A.mi(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
hf(a,b,c,d){return this.qx(a,b,c,d)},
qx(a,b,c,d){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hf=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.e3().x
o===$&&A.t()
n=A
s=3
return A.a(o.dk(c,b,d,a),$async$hf)
case 3:q=new n.iI(p.jn(f))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
jm(a,b){return this.qw(a,b)},
qw(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$jm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.A('Unknown file stream "'+a+'".'))
if((n.b-=b)<0)n.b=0
n.c=new A.aH(Date.now(),0,!1)
if(n.b<1048576){o=n.d
o===$&&A.t()
o.aY()}q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jm,r)},
qi(){if(this.y!=null)return
this.y=A.yn(A.bS(45e7,0,0),new A.uf(this))},
he(a){return this.qv(a)},
qv(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$he=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.G(0,a)
s=n!=null?3:4
break
case 3:o=n.d
o===$&&A.t()
s=5
return A.a(o.v(),$async$he)
case 5:case 4:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
jn(a){return new A.mj(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
e6(a,b,c){return this.ty(a,b,c)},
ty(a,b,a0){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e6=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.V("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cJ(),$async$e6)
case 3:if(b==null||b.length===0)throw A.b(A.V("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.B_(a0)
m=A.oi(a)
l=o.fy
k=A.n(l).i("R<1>")
l=A.N(new A.R(l,k),k.i("o.E"))
s=4
return A.a(o.ax.hV(m,b,l,n),$async$e6)
case 4:j=a2
m=A.dW(null,null,t.n6)
l=A.dW(null,null,t.ic)
k=t.H
i=A.bf(null,k)
h=new A.q1(A.bf(null,k))
g=A.bf(B.O,t.fD)
f=A.l([],t.s)
k=A.bf(null,k)
e=new A.y7(A.OM(),o.db)
d=new A.nQ(o,j,e,new A.uw(p),B.N,m,l,i,h,A.aO(t.N),g,f,k)
c=j.r
m=d.e=new A.yl(o,B.a.B(A.au(B.m.A(B.e.A(j.b.l(0)+"|"+c)).a),0,12))
k=new A.t4(o,j,e,o.CW)
d.x=k
k=new A.wZ(o,j,e,m,k,h)
d.f=k
d.r=new A.y5(o,j,e,m,k)
d.w=new A.x7(o,j,e,d.gr9(),j.ax)
p.as=n
p.Q=d
p.at=new A.b6(l,A.n(l).i("b6<1>")).aW(new A.ux(p))
s=5
return A.a(d.aC(),$async$e6)
case 5:q=new A.nX(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e6,r)},
e3(){var s=this.Q
return s==null?A.v(A.V("Sync is not started.",null)):s},
hz(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.e3()
o.ca("cycle")
n=A
s=3
return A.a(o.eY(),$async$hz)
case 3:q=new n.nT(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
e5(a){var s=0,r=A.h(t.V),q
var $async$e5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$e5)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
hA(a){return this.tz(a)},
tz(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.as
n=p.e3()
if(o==null)throw A.b(A.V("Sync is not started.",null))
o.a=a
s=3
return A.a(n.ep(),$async$hA)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
cJ(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.Q
q.Q=null
p=q.at
p=p==null?null:p.v()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bC(p,o),$async$cJ)
case 2:q.at=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aK(),$async$cJ)
case 5:p=q.a.a.ax.i_(n)
s=6
return A.a(p,$async$cJ)
case 6:case 4:q.ax=q.as=null
return A.e(null,r)}})
return A.f($async$cJ,r)},
jc(a){return new A.lE(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
tQ(a){var s=this,r="w"+ ++s.ay,q=s.a.a.fr
q===$&&A.t()
s.f.j(0,r,q.xG(a).aW(new A.uy(s,r)))
return A.bf(new A.hz(r),t.V)},
de(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.A('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.A('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aH(Date.now(),0,!1)
return s},
qj(){var s,r,q=this
if(q.e!=null)return
s=q.a.ay
r=s.a
if(r<=0)return
q.e=A.yn(A.bS(B.c.M(r,4),0,0),new A.ui(q,s))},
hG(a,b,c){return this.tU(a,b,c)},
bE(a,b,c){return this.hG(a,b,c,t.z)},
tU(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.de(a)
o=c
s=3
return A.a(b.$0(),$async$hG)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cJ(),$async$q)
case 2:p=q.f,o=new A.aY(p,p.r,p.e,A.n(p).i("aY<2>"))
case 3:if(!o.k()){s=4
break}s=5
return A.a(o.d.v(),$async$q)
case 5:s=3
break
case 4:p.aq(0)
p=q.w
if(p!=null)p.v()
q.w=null
p=q.e
if(p!=null)p.v()
q.e=null
p=q.y
if(p!=null)p.v()
q.y=null
q.r.r.aq(0)
for(p=q.x,o=new A.aY(p,p.r,p.e,A.n(p).i("aY<2>"));o.k();){n=o.d.d
n===$&&A.t()
n.v()}p.aq(0)
p=q.c
p===$&&A.t()
p.v()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.uD.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cb(r,t.N,t.X)
s=a.f
s=s==null?null:A.cb(s,t.N,t.X)
this.a.b.u(0,new A.lA(a.a,a.b,a.c,a.d,r,s,A.bW(a.r,t.N)))},
$S:192}
A.uE.prototype={
$1(a){return B.l},
$S:8}
A.uF.prototype={
$0(){var s=this.a
return this.b.dM(s.c,s.a).bK(s.b)},
$S:195}
A.uG.prototype={
$1(a){return new A.hc(a)},
$S:199}
A.uR.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dM(o.c,o.a).bK(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.p)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:200}
A.v1.prototype={
$1(a){return new A.hd(a)},
$S:205}
A.v2.prototype={
$0(){var s=this.b,r=this.a
return s.bg(s.bA(r.c,r.b),r.a).hS()},
$S:54}
A.v3.prototype={
$0(){var s=this.b,r=this.a
return s.bg(s.bA(r.d,r.b),r.a).hU(r.c)},
$S:54}
A.v4.prototype={
$0(){var s=this.b,r=this.a
return s.bg(s.bA(r.d,r.b),r.a).i0(r.c)},
$S:208}
A.v5.prototype={
$0(){var s=this.b,r=this.a
return s.bg(s.bA(r.c,r.b),r.a).ij()},
$S:53}
A.v6.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.bg(s.bA(q.e,q.b),q.a).d3("SUM",q.c)
break
case 1:s=r.b
q=s.bg(s.bA(q.e,q.b),q.a).d3("AVG",q.c)
break
case 2:s=r.b
q=s.bg(s.bA(q.e,q.b),q.a).d3("MIN",q.c)
break
case 3:s=r.b
q=s.bg(s.bA(q.e,q.b),q.a).d3("MAX",q.c)
break
default:q=null}return q},
$S:224}
A.v7.prototype={
$0(){var s=this.b,r=this.a
return s.bg(s.bA(r.c,r.b),r.a).i1()},
$S:225}
A.uH.prototype={
$1(a){return B.l},
$S:8}
A.uI.prototype={
$1(a){return B.l},
$S:8}
A.uJ.prototype={
$1(a){return B.l},
$S:8}
A.uK.prototype={
$1(a){return new A.h6(a)},
$S:229}
A.uL.prototype={
$1(a){return new A.fy(a)},
$S:233}
A.uM.prototype={
$1(a){return B.l},
$S:8}
A.uN.prototype={
$1(a){var s,r,q=A.l([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jc(s.gn()))
return new A.fA(q)},
$S:248}
A.uO.prototype={
$1(a){return new A.fz(a==null?null:this.a.jc(a))},
$S:78}
A.uP.prototype={
$1(a){return B.l},
$S:8}
A.uQ.prototype={
$1(a){return B.l},
$S:8}
A.uS.prototype={
$1(a){return B.l},
$S:8}
A.uT.prototype={
$1(a){var s,r,q=A.l([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jn(s.gn()))
return new A.fM(q)},
$S:79}
A.uU.prototype={
$1(a){return B.l},
$S:8}
A.uV.prototype={
$1(a){return new A.fL(a)},
$S:80}
A.uW.prototype={
$1(a){return new A.fJ(a)},
$S:81}
A.uX.prototype={
$1(a){return new A.hm(a)},
$S:82}
A.uY.prototype={
$1(a){return B.l},
$S:8}
A.uZ.prototype={
$0(){return this.a.e3().b5()},
$S:3}
A.v_.prototype={
$0(){return this.a.e3().aY()},
$S:3}
A.v0.prototype={
$0(){return this.b.e3().fY(this.a.a)},
$S:3}
A.uo.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dM(p.b,a1)
a0.a.a.c===$&&A.t()
o=p.d
n=o instanceof A.jd
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.iC(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.it(B.a0,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 4:n=o instanceof A.jg
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nE(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.it(B.a1,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 11:k=o instanceof A.je
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.no(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.np(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 18:k=o instanceof A.jh
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nF(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bG(i,B.a1),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 25:e=o instanceof A.ja
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.nl(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.wM(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.jb
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.nm(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.cX(a),$async$$0)
case 44:case 41:a0=A.n(a).i("R<1>")
a0=A.N(new A.R(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.j9
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mI(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.is(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.jf
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.ny(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.is(B.D,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.jc
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.iB(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dt(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.eR(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:53}
A.up.prototype={
$1(a){return new A.fX(a)},
$S:83}
A.uq.prototype={
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
return A.a(o.bg(m,n).q4(!0,k).cO(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.bg(m,n).q0(k).cO(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.bg(m,p.c).cO()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:84}
A.ur.prototype={
$1(a){return new A.h9(a.a,a.d,a.e,a.b,a.c)},
$S:77}
A.uu.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dM(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.xG(m,l,o.c.b,n.a)
if(l.w==null)A.v(A.tp('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.y.d)A.v(A.tp(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.v(A.V("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cO()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:86}
A.uv.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.nw(r.a,r.b))}return new A.hf(q)},
$S:87}
A.uc.prototype={
nU(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.ak()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.b_)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nU(a)},
$S:4}
A.ua.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.G(0,this.c)
s.bu(a,b)}},
$S:6}
A.ub.prototype={
$1(a){return new A.hs(this.a)},
$S:89}
A.ut.prototype={
$1(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.H),q=this,p
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
A.us.prototype={
$1(a){return a.a===this.a},
$S:90}
A.uz.prototype={
$1(a){var s=a==null?B.bb:A.l([a],t.d)
this.a.b.u(0,new A.jY(this.b,s))},
$S:91}
A.uA.prototype={
$1(a){this.b.aE().v()
this.a.f.G(0,this.c)},
$S:20}
A.uB.prototype={
$1(a){this.a.b.u(0,new A.jY(this.b,a))},
$S:92}
A.uC.prototype={
$1(a){this.b.aE().v()
this.a.f.G(0,this.c)},
$S:20}
A.uj.prototype={
$1(a){return this.a.r.n3()},
$S:29}
A.uk.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.c0(A.e7(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:case 1:return A.c0(null,0,r)
case 2:return A.c0(o.at(-1),1,r)}})
var s=0,r=A.H2($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Hk(r)},
$S:94}
A.ul.prototype={
$1(a){var s=this,r=new Uint8Array(A.be(a)),q=s.b
q.b=q.b+r.length
q.c=new A.aH(Date.now(),0,!1)
s.a.b.u(0,new A.fK(s.c,r,!1,null))
if(q.b>=1048576)s.d.aE().b5()},
$S:11}
A.un.prototype={
$1(a){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fK(r,new Uint8Array(0),!0,J.Z(a)))},
$S:20}
A.um.prototype={
$0(){var s=this.a,r=this.b
s.x.G(0,r)
s.b.u(0,new A.fK(r,new Uint8Array(0),!0,null))},
$S:0}
A.uf.prototype={
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
n.v().b0(new A.ud(),new A.ue(),q)}},
$S:29}
A.ud.prototype={
$1(a){},
$S:41}
A.ue.prototype={
$2(a,b){},
$S:6}
A.uw.prototype={
$0(){this.a.b.u(0,B.bK)},
$S:2}
A.ux.prototype={
$1(a){var s=this.a
s.ax=a
s.b.u(0,new A.nY(a))},
$S:96}
A.uy.prototype={
$1(a){var s,r=this.a,q=A.l([],t.oS)
for(s=J.E(a);s.k();)q.push(r.jc(s.gn()))
r.b.u(0,new A.lI(this.b,q))},
$S:97}
A.ui.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.v()
j.e=null
return}j=Date.now()
s=A.n(i).i("ao<2>")
s=A.N(new A.ao(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a1(m).i("bB<1>"),m=new A.bB(m,l),m=new A.as(m,m.gm(0),l.i("as<a_.E>")),l=l.i("a_.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aG(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aG(null)
i.G(0,n.a)
m=n.w
m===$&&A.t()
m.b0(new A.ug(),new A.uh(),p)}}},
$S:29}
A.ug.prototype={
$1(a){},
$S:41}
A.uh.prototype={
$2(a,b){},
$S:6}
A.lD.prototype={
a7(){return"ConflictAlgorithm."+this.b}}
A.iC.prototype={
q(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aY(o,o.r,o.e,A.n(o).i("aY<2>"));n.k();){m=n.d
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
cs(a){var s,r=this.a,q=r.G(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.G(0,new A.R(r,A.n(r).i("R<1>")).gH(0))
if(s!=null)s.q()}q=this.b.wP(a)
r.j(0,a,q)
return q},
kX(a,b){var s=this.cs(a).kY(new A.bT(b)),r=A.n(s).i("Y<L.E,F<k,j?>>")
r=A.N(new A.Y(s,new A.rZ(),r),r.i("a_.E"))
return r},
oD(a){return this.kX(a,B.j)},
ff(a,b){this.cs(a).ef(new A.bT(b))},
kk(a){return this.ff(a,B.j)},
aI(a,b){return this.vs(a,b)},
O(a){return this.aI(a,B.j)},
vs(a,b){var s=0,r=A.h(t.H),q=this
var $async$aI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.ff(a,b)
return A.e(null,r)}})
return A.f($async$aI,r)},
ae(a,b){return this.x4(a,b)},
b6(a){return this.ae(a,B.j)},
x4(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kX(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ae,r)},
bZ(a,b,c,d,e,f,g){return this.x_(a,b,c,d,e,f,g)},
aJ(a,b,c,d){return this.bZ(a,null,b,null,null,c,d)},
ev(a,b,c,d,e){return this.bZ(a,b,c,null,null,d,e)},
nr(a,b,c,d){return this.bZ(a,b,null,null,null,c,d)},
bH(a,b,c){var s=null
return this.bZ(a,s,s,s,s,b,c)},
wY(a,b,c,d,e){return this.bZ(a,null,b,null,c,d,e)},
wX(a,b,c,d,e){return this.bZ(a,b,c,d,e,null,null)},
wZ(a,b,c,d,e,f){return this.bZ(a,b,c,null,d,e,f)},
wW(a,b,c,d){return this.bZ(a,null,null,null,b,c,d)},
x_(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bZ=A.c(function(h,i){if(h===1)return A.d(i,r)
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
return A.f($async$bZ,r)},
cl(a,b,c,d){return this.wa(0,b,c,d)},
aF(a,b,c){return this.cl(0,b,c,null)},
wa(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cl=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.S("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("R<1>")
m=t.N
l=A.dN(new A.R(c,n),new A.rY(),n.i("o.E"),m).C(0,", ")
k=B.b.C(A.a8(c.a,"?",!1,m),", ")
j=A.Fa(d)
o=o.i("ao<2>")
o=A.N(new A.ao(c,o),o.i("o.E"))
p.ff("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.aj(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cl,r)},
L(a,b,c,d){return this.xz(a,b,c,d)},
xz(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("R<1>")
m=A.dN(new A.R(b,n),new A.t_(),n.i("o.E"),t.N).C(0,", ")
n="UPDATE"+A.Fa(null)+' "'+a+'" SET '+m
o=A.N(new A.ao(b,o.i("ao<2>")),t.X)
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
uw(a,b,c){this.b.ux(B.bA,!0,!1,new A.rX(b),c)},
a1(a,b){return this.xv(a,b,b)},
xv(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$a1=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:if(n.d)throw A.b(A.dj("Database connection is wedged: an earlier rollback failed and left an open transaction. Reopen the database to recover."))
n.kk("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a1)
case 7:m=e
n.kk("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.D(g)
try{n.kk("ROLLBACK")}catch(f){k=A.D(f)
h=J.Z(k).toLowerCase()
if(!(B.a.E(h,"no transaction is active")||B.a.E(h,"cannot rollback"))){n.d=!0
throw A.b(A.dj("Rollback failed after a transaction error ("+A.r(k)+"); original error: "+A.r(l)+". The database connection is left in an open transaction; reopen to recover."))}}throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a1,r)},
$irw:1}
A.rZ.prototype={
$1(a){return A.bo(a,t.N,t.X)},
$S:98}
A.rY.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.t_.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.rX.prototype={
$1(a){var s=a.gm(0)===0?null:a.gH(a)
return this.a.$1(s)},
$S:100}
A.qO.prototype={}
A.iB.prototype={
k8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aO(t.N),b=a.a
if(B.a.E(b,"'")||B.a.E(b,'"'))A.v(A.aB('Store name "'+b+"\" must not contain quote characters: a quote would break the FTS content reference and the database adapter's table quoting."))
if(B.a.T(b,"sqlite_")||B.a.T(b,"lp_"))A.v(A.aB('Store name "'+b+'" uses a reserved prefix (sqlite_ is SQLite-owned, lp_ is the engine metadata namespace).'))
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=$.EI()
if(!k.b.test(l))A.v(A.aB('Field "'+l+u.Z))
if(B.aG.E(0,l))throw A.b(A.aB('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aB('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aB(e+l+'" cannot be unique.'))
if(B.b.bj(o,new A.rW(m)))throw A.b(A.aB(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.E(k,l)}else k=!1
if(k)throw A.b(A.aB(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.p)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.as(l,l.gm(0),k.i("as<L.E>")),k=k.i("L.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.E(0,j)&&!B.aG.E(0,j))throw A.b(A.aB('Index column "'+j+'" is not a declared field of store "'+b+'".'))}for(b=l,i=0;i<b;b=r,i=h)for(h=i+1,b=h,g=0;r=o.length,g<r;++g){if(i===g)continue
if(B.az.V(o[i].a,o[g].a)){if(i<g){r=o[i].a
d.push("Duplicate index columns "+r.l(r)+" (declarations "+b+" and "+(g+1)+").")}}else if(A.Jq(o[g].a,o[i].a)&&!o[g].b){r=o[g].a
r=r.l(r)
l=o[i].a
d.push("Index "+r+" is prefix-subsumed by index "+l.l(l)+".")}}if(p){b=f.a
if(!b.d)throw A.b(A.tp(u.r))
if(q.b&&!A.FR(b.a,3,34))throw A.b(A.tp("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+b.a+")."))
for(b=q.a,r=b.$ti,b=new A.as(b,b.gm(0),r.i("as<L.E>")),r=r.i("L.E");b.k();){p=b.d
if(p==null)p=r.a(p)
if(!c.E(0,p))throw A.b(A.aB('FTS field "'+p+'" is not a declared field.'))}for(b=q.c.a.ga0(),b=b.gt(b);b.k();){r=b.gn()
A.Fi(r.a,r.b)}}for(b=s.length,n=0;n<b;++n){m=s[n]
r=m.b
if(r===B.J){q=m.f
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aB('Enum field "'+m.a+'" must declare values.'))
if(r===B.K){r=m.r
r=r==null||r.length===0}else r=!1
if(r)throw A.b(A.aB('Ref field "'+m.a+'" must declare its target store.'))}return new A.qO(f.pE(a),f.pD(a),f.pC(a),d)},
pE(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.C(n,'"',i)+'"')+" "+o.gl1()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.J&&q){k=o.f
k.toString
j=new A.Y(k,new A.rV(),A.a1(k).i("Y<1,k>")).C(0,", ")
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
j=l.$ti.i("Y<L.E,k>")
i=A.N(new A.Y(l,A.pO(),j),j.i("a_.E"))
if(!k&&!l.E(l,"id"))i.push('"'+A.C("id",e,d)+'"')
h=m.c===B.b6?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.C(l,"_")
l=A.C(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.C(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}else{l=l.C(l,"_")
l=A.C(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.C(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.p)(r),++n){g=r[n]
if(g.b!==B.K)continue
if(B.b.bj(s,new A.rU(g)))continue
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
if(s.gm(0)===0)throw A.b(A.aB("FTS requires at least one field to index."))
r=A.l([],t.s)
q=a1.a
p=q+"_fts"
o=s.$ti.i("Y<L.E,k>")
n=A.N(new A.Y(s,A.pO(),o),o.i("a_.E"))
m=new A.rT(q,a0.c)
l=new A.Y(s,new A.rQ(m),o).C(0,f)
k=new A.Y(s,new A.rR(m),o).C(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
r.push("CREATE VIRTUAL TABLE "+('"'+A.C(p,e,d)+'"')+" USING fts5(\n  "+B.b.C(n,f)+",\n  content = '"+q+"',\n  content_rowid = 'rowid'\n"+j)
s=A.C(q+"_ai",e,d)
o=A.C(q,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.C(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
s=A.C(q+"_ad",e,d)
o=A.C(q,e,d)
m=A.C(p,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.C(p,e,d)+'"')+", rowid, "+B.b.C(n,f)+a+k+");\nEND;")
i=new A.Y(n,new A.rS(),A.a1(n).i("Y<1,k>")).C(0," OR ")
s=A.C(q+"_au",e,d)
o=A.C(q,e,d)
m=A.C(p,e,d)
h=A.C(p,e,d)
g=B.b.C(n,f)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.C(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
return r}}
A.rW.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:52}
A.rV.prototype={
$1(a){return"'"+A.C(a,"'","''")+"'"},
$S:7}
A.rU.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:52}
A.rT.prototype={
$2(a,b){return A.Ey(this.a,this.b,a,b)},
$S:102}
A.rQ.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.rR.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.rS.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dM.prototype={
l(a){return A.d2(this).l(0)+": "+this.a},
$iH:1}
A.e0.prototype={}
A.hu.prototype={}
A.h0.prototype={}
A.iv.prototype={}
A.jv.prototype={}
A.iM.prototype={}
A.di.prototype={}
A.jE.prototype={}
A.jC.prototype={}
A.jH.prototype={}
A.he.prototype={}
A.jV.prototype={}
A.iN.prototype={}
A.jP.prototype={}
A.j8.prototype={}
A.ix.prototype={}
A.fD.prototype={}
A.jB.prototype={}
A.iG.prototype={}
A.bm.prototype={}
A.t3.prototype={
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
m=A.aX(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.aX(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bm(j,s,r,q,p,o,n,m,l,A.a7(k.h(0,"last_error")))},
$S:51}
A.vh.prototype={
gmg(){return this.b},
gik(){var s=0,r=A.h(t.y),q,p=this
var $async$gik=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.gfm()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gik,r)},
lK(a,b){return b},
cT(a,b,c){return this.wi(a,b,c)},
wi(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$cT=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.t()
n=J
s=3
return A.a(o.gbv().b.bH("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.lK(c,a)]),$async$cT)
case 3:o=n.bF(e,A.O7(),t.A)
o=A.N(o,o.$ti.i("a_.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cT,r)},
dh(a,b,c,d,e,f,g,h){return this.ug(a,b,c,d,e,f,g,h)},
ug(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$dh=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gmg()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.gfm(),$async$dh)
case 5:j=!j
case 4:if(j)throw A.b(A.A("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.lK(h,e)
s=6
return A.a(l.cq(b,c,d),$async$dh)
case 6:n=j
s=7
return A.a(l.bo(n),$async$dh)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a1(new A.vi(p,h,g,o,n,m,A.i9(),f),t.A),$async$dh)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
fv(a,b,c,d,e){return this.wC(a,b,c,d,e)},
wC(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fv=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cT(a,c,e),$async$fv)
case 3:k=g
j=J.I(k)
if(j.gF(k))throw A.b(A.A("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.cj(k,new A.vk(d),new A.vl(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(new A.jE("File is remote_only; call files.download(ref) to fetch its bytes, or enable prefetchFiles on the store and sync."))
n=p.gmg()
j=p.a
m=j.a
m===$&&A.t()
m=m.gbv()
j=j.db.$0()
l=o.e
s=4
return A.a(m.b.aI("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,l]),$async$fv)
case 4:q=n.cV(l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
fF(a,b,c,d,e,f){return this.xg(0,b,c,d,e,f)},
xg(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fF=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cT(b,d,f),$async$fF)
case 3:n=h
m=J.I(n)
if(m.gF(n)){s=1
break}o=e!=null?m.cj(n,new A.vm(e),new A.vn(e)):m.h(n,c)
s=4
return A.a(p.a.a1(new A.vo(p,o,f,d,b),t.P),$async$fF)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
bm(a,b){return this.ot(a,b)},
ot(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bm=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.ec(a8),$async$bm)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.db.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a1(new A.vj(a2,n),t.P),$async$bm)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fn(),$async$bm)
case 13:l=b0
s=J.d4(l)?14:15
break
case 14:k=0
j=A.aO(t.N)
d=t.s
case 16:c=e.a
c===$&&A.t()
s=18
return A.a(c.gbv().b.wX("lp_blobs",A.l(["hash"],d),250,k,"hash ASC"),$async$bm)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.T(h,"hash")
b.toString
J.aM(j,A.G(b))}if(J.an(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.De(j,g)){s=19
break}p=22
b=new A.w($.B,c)
b.aG(null)
s=25
return A.a(b,$async$bm)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.dj(g),$async$bm)
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
return A.a(b.gbv().b.wZ("lp_blobs",A.l(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bm)
case 29:a0=b0
b=J.I(a0)
if(b.gF(a0)){s=28
break}b=b.gt(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.G(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.dj(a1),$async$bm)
case 34:case 33:s=35
return A.a(d.X("lp_blobs","hash = ?",[a1]),$async$bm)
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
return A.f($async$bm,r)},
cN(a){return this.vn(a)},
vn(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.t()
d=A
s=3
return A.a(e.gbv().b.b6("SELECT SUM(size) as total FROM lp_blobs"),$async$cN)
case 3:o=d.fi(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.x,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbv().b.b6("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cN)
case 6:k=c
j=J.I(k)
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
return A.a(g.dj(h),$async$cN)
case 9:s=10
return A.a(e.gbv().b.L("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$cN)
case 10:s=11
return A.a(f.X("lp_blobs","hash = ?",[h]),$async$cN)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cN,r)}}
A.vi.prototype={
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
c=J.I(d)
if(c.gS(d)){q=A.Fe(c.gH(d))
s=1
break}s=4
return A.a(A.ig(k,e,j,p.f),$async$$1)
case 4:s=5
return A.a(k.ev("lp_outbox",A.l(["op_id","base_updated"],i),1,"store = ? AND record_id = ?",[h,g]),$async$$1)
case 5:o=a0
i=J.I(o)
n=i.gS(o)&&J.T(i.gH(o),"base_updated")==null?A.a7(J.T(i.gH(o),"op_id")):null
i=p.r
c=t.N
m=t.X
s=6
return A.a(k.cl(0,"lp_file_refs",A.m(["ref_id",i,"store",h,"record_id",g,"field",f,"hash",e,"remote_name",null,"state","pending_upload"],c,m),B.S),$async$$1)
case 6:l=A.i9()
s=7
return A.a(k.aF(0,"lp_op_queue",A.m(["op_id",l,"store",h,"record_id",g,"kind","fileUpload","payload_json",B.h.a9(A.m(["ref_id",i,"field",f,"hash",e,"name",p.w],c,c),null),"state","pending","depends_on_op",n,"created_at",j],c,m)),$async$$1)
case 7:a.a2(new A.a4(h,A.ap([g],c)))
q=new A.bm(i,h,g,f,e,null,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:104}
A.vk.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vl.prototype={
$0(){return A.v(A.A("FileRef "+this.a+" not found"))},
$S:16}
A.vm.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vn.prototype={
$0(){return A.v(A.A("FileRef "+this.a+" not found"))},
$S:16}
A.vo.prototype={
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
return A.a(p.aI(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aF(0,"lp_op_queue",A.m(["op_id",A.i9(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a9(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.U),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a2(new A.a4(q.c,A.ap([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vj.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.fy,p=new A.bJ(p,p.r,p.e,A.n(p).i("bJ<1>")),o=t.N,n=t.X,m=q.a
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
return A.a(i.aI(u.y,[k]),$async$$1)
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
A.th.prototype={
gnB(){var s=this.r
return new A.ao(s,A.n(s).i("ao<2>")).vH(0,0,new A.tk())},
n3(){var s,r=this.r,q=A.n(r).i("ao<2>"),p=q.i("cp<o.E,k>"),o=A.N(new A.cp(new A.aq(new A.ao(r,q),new A.ti(this.f.$0()),q.i("aq<o.E>")),new A.tj(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.p)(o),++s)r.G(0,o[s])
return p}}
A.tk.prototype={
$2(a,b){return a+b.f},
$S:107}
A.ti.prototype={
$1(a){return!a.z.kv(this.a)},
$S:108}
A.tj.prototype={
$1(a){return a.a},
$S:109}
A.md.prototype={}
A.qf.prototype={}
A.fu.prototype={
l(a){return"BlobMissingError: "+this.a},
$iH:1}
A.io.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iH:1}
A.nM.prototype={}
A.CW.prototype={
$1(a){return B.b.D(this.a,a)},
$S:110}
A.iJ.prototype={}
A.t4.prototype={
bz(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bz=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.cl
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
return A.a(a3.fc(25),$async$bz)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.be?10:12
break
case 10:s=13
return A.a(n.cD(i,b2),$async$bz)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.ni(i.b),$async$bz)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.bf?17:18
break
case 17:s=19
return A.a(n.eS(i),$async$bz)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.ni(i.b),$async$bz)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.D(b3)
j=!0
e=i.w+1
d=a5.mW(e)
a8=i.b
a9=J.Z(f)
b0=a6.$0()
s=23
return A.a(a3.ws(a8,a9,e,b0+B.c.M(d.a,1000)),$async$bz)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.fy,a4=new A.bJ(a3,a3.r,a3.e,A.n(a3).i("bJ<1>")),a2=a2.x
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.v(A.A('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.bH("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bz)
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
a1=A.a7(J.T(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cM(a0,a,a1,c),$async$bz)
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
case 25:q=new A.iJ(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bz,r)},
cD(a,b){return this.rH(a,b)},
rH(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cD=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aH(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.G(a1)
l=a0.h(0,"hash")
l.toString
A.G(l)
k=A.a7(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bw(l),$async$cD)
case 3:if(!a6)throw A.b(A.A("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bo(l),$async$cD)
case 4:j=a6
if(j==null)throw A.b(A.A("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.as
i===$&&A.t()
s=9
return A.a(i.c3(a3.d),$async$cD)
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
if(m!=null){f=B.a.B(l,0,B.c.bs(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.T(b,f)||B.a.T(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.xE(a3.d,A.m([k,new A.hn(k,j,new A.t6(a4,l))],t.N,t.h3)),$async$cD)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga_(l):k
case 11:s=14
return A.a(n.a.a1(new A.t7(a,a1,a3),t.P),$async$cD)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cD,r)},
eS(a){return this.rG(a)},
rG(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aH(a.f,null))
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
return A.a(p.a.a1(new A.t5(l,n,a),t.P),$async$eS)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eS,r)},
cM(a,b,c,d){return this.ve(a,b,c,d)},
ve(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cM=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.as
l===$&&A.t()
k=m
s=4
return A.a(l.fb(c,a,null),$async$cM)
case 4:s=3
return A.a(k.iC(f),$async$cM)
case 3:o=f
s=5
return A.a(m.bo(o),$async$cM)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a1(new A.t8(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cM)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cM,r)},
dk(a,b,c,d){return this.vg(a,b,c,d)},
vg(a,b,c,d){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i
var $async$dk=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:k=p.a
j=k.fx
j===$&&A.t()
s=3
return A.a(j.cT(a,b,d),$async$dk)
case 3:o=f
n=J.I(o)
if(n.gF(o))throw A.b(A.jD("No file references for "+d+"/"+b+"/"+a+"."))
m=c!=null?n.cj(o,new A.t9(c),new A.ta(c,d,b,a)):n.cj(o,new A.tb(),new A.tc(o))
i=J
s=4
return A.a(k.x.aJ("lp_blobs",1,"hash = ?",[m.e]),$async$dk)
case 4:if(i.d4(f)&&m.r!=="remote_only"){q=m
s=1
break}l=m.f
if(l==null)throw A.b(A.V("File "+m.a+" in "+d+"/"+b+"/"+a+" has no remote filename recorded and cannot be downloaded (state: "+m.r+"). Only remotely-known attachments are downloadable.",null))
s=5
return A.a(p.cM(b,m.a,l,d),$async$dk)
case 5:i=J
s=6
return A.a(j.cT(a,b,d),$async$dk)
case 6:q=i.IQ(f,new A.td(m),new A.te(m))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
dr(a,b,c,d){return this.wz(a,b,c,d)},
wz(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dr=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.bH("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dr)
case 2:e=a5
d=A.mN(a2,A.a1(a2).c)
c=J.aw(e)
b=t.v
a=A.bW(new A.e2(c.co(e,new A.tf(),t.U),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.fy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.E(0,k)?6:7
break
case 6:j=A.i9()
i=n.h(0,a3)
if(i==null)A.v(A.A(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cl(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.cf),$async$dr)
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
s=f!=null&&f.length!==0&&!B.a.T(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aI(u.y,[f]),$async$dr)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dr,r)}}
A.t6.prototype={
$0(){return this.a.cV(this.b)},
$S:111}
A.t7.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a2(new A.a4(p.c,A.ap([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t5.prototype={
$1(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.X("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aI(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a2(new A.a4(p.c,A.ap([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t8.prototype={
$1(a){return this.nR(a)},
nR(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.ig(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a2(new A.a4(q.f,A.ap([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t9.prototype={
$1(a){return a.a===this.a},
$S:25}
A.ta.prototype={
$0(){var s=this
return A.v(A.jD("FileRef "+s.a+" not found for "+s.b+"/"+s.c+"/"+s.d+"."))},
$S:16}
A.tb.prototype={
$1(a){return a.r==="remote_only"},
$S:25}
A.tc.prototype={
$0(){return J.bE(this.a)},
$S:51}
A.td.prototype={
$1(a){return a.a===this.a.a},
$S:25}
A.te.prototype={
$0(){return A.v(A.jD("FileRef "+this.a.a+" disappeared during download."))},
$S:16}
A.tf.prototype={
$1(a){return A.a7(a.h(0,"remote_name"))},
$S:112}
A.D1.prototype={
$1(a){if(typeof a!="string")return a
return this.a.es(a)},
$S:32}
A.v8.prototype={
gbv(){var s=this.c
return s===$?this.c=new A.iG(this.b):s}}
A.nK.prototype={}
A.wK.prototype={
bK(a){var s,r=this.a
if(!r.I(a))return null
s=r.G(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.pF(s)
r.toString
t.G.a(r)}return r},
kZ(a,b){var s,r=this.a
if(r.a>=256)r.G(0,new A.R(r,A.n(r).i("R<1>")).gH(0))
if(b==null)s=null
else{s=A.pF(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
wb(a){var s,r,q,p=a.a
if(p===0){this.a.aq(0)
return}s=this.a
if(p>=s.a){s.aq(0)
return}for(p=A.dr(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.G(0,q==null?r.a(q):q)}}}
A.mI.prototype={
aw(a){var s=this.fy.h(0,a)
if(s==null)throw A.b(A.A('No store "'+a+'" registered in this LocalPocket.'))
return s},
bt(a){var s,r,q=this
if(A.ob(q)!=null)A.v(A.A(u.L))
s=q.aw(a)
r=q.a
r===$&&A.t()
return new A.fx(q,s,r.gbv(),null)},
b1(a,b,c){var s
if(A.ob(this)!=null)A.v(A.A(u.L))
s=this.b
s===$&&A.t()
return s.b1(a,b,c)},
a1(a,b){return this.b1(a,B.q,b)},
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
A.p2.prototype={}
A.vr.prototype={
nC(a,b){var s=this.a;++s.f.e
return s.b.aI(a,B.j)},
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
iM(){var s=0,r=A.h(t.H),q=this,p
var $async$iM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iM)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iM,r)},
iL(){var s=0,r=A.h(t.H),q=this
var $async$iL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.b.O("VACUUM"),$async$iL)
case 2:return A.e(null,r)}})
return A.f($async$iL,r)},
fA(){return this.wQ()},
wQ(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a.a.a1(new A.vu(o),t.P),$async$fA)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
cZ(a){return this.xq(a)},
xq(a){var s=0,r=A.h(t.H),q=this,p
var $async$cZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a.fy,p=new A.bJ(p,p.r,p.e,A.n(p).i("bJ<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.ee(p.d,a),$async$cZ)
case 4:s=2
break
case 3:s=5
return A.a(q.fA(),$async$cZ)
case 5:s=6
return A.a(q.fS(B.ck),$async$cZ)
case 6:s=7
return A.a(q.fP(),$async$cZ)
case 7:s=8
return A.a(q.ua(),$async$cZ)
case 8:return A.e(null,r)}})
return A.f($async$cZ,r)},
fS(a){return this.ou(a)},
ou(a){var s=0,r=A.h(t.H),q=this
var $async$fS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a.a1(new A.vt(q,a),t.P),$async$fS)
case 2:return A.e(null,r)}})
return A.f($async$fS,r)},
ee(a,b){return this.ur(a,b)},
ur(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ee=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.a
h=i.x.$0()
g=h-B.c.M(b.a,1000)
j.a=0
o=i.a
n=o.aw(a).a
m=t.P,i=i.b
case 3:s=5
return A.a(i.ae("SELECT b.id FROM "+('"'+A.C(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",g,250]),$async$ee)
case 5:l=d
if(J.bw(l)){s=4
break}if(A.ob(o)!=null)A.v(A.A(u.L))
k=o.b
k===$&&A.t()
s=6
return A.a(k.b1(new A.vs(j,p,l,a,g,n),B.q,m),$async$ee)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ee,r)}}
A.vu.prototype={
$1(a){return this.o0(a)},
o0(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b6("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
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
A.vt.prototype={
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
A.vs.prototype={
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
case 4:if(a0.bw(a3)){s=2
break}s=5
return A.a(a.ae("SELECT * FROM "+('"'+A.C(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[e]),$async$$1)
case 5:d=a3
c=J.I(d)
b=c.gS(d)?A.bP(h,c.gH(d),f,g):null
s=6
return A.a(A.cG(a,n,e,!1),$async$$1)
case 6:s=7
return A.a(a.X("lp_outbox","store = ? AND record_id = ?",[n,e]),$async$$1)
case 7:s=8
return A.a(a.X(n,"id = ?",[e]),$async$$1)
case 8:s=9
return A.a(a.L("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.ap([e],m)
k.push(new A.a4(n,c))
j.r+=c.a
if(b!=null)a1.kh(B.au,e,null,b,B.H,n);++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vP.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:30}
A.vQ.prototype={
$2(a,b){return B.c.a3(a.a,b.a)},
$S:114}
A.vL.prototype={
$1(a){return a.h(0,"name")},
$S:38}
A.vM.prototype={
$1(a){return this.o1(a)},
o1(a0){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:p=q.b,o=p.length,n=q.c,m=n.a,l=q.d,k=l.cx,l=l.cy,j=t.N,i=t.X,h=0
case 2:if(!(h<p.length)){s=4
break}g=p[h]
f=g.b
e=A.u(j,i)
for(d=g.c.ga0(),d=d.gt(d);d.k();){c=d.gn()
b=c.a
a=A.K4(n,b)
if(a==null)throw A.b(A.aB('Backfill on "'+m+'" produced unknown field "'+b+'".'))
c=c.b
A.Fx(a,c)
e.j(0,b,A.Ew(n,a,c,k,l,f))}s=5
return A.a(a0.L(m,e,"rowid = ?",[g.a]),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++h
s=2
break
case 4:s=6
return A.a(A.fU(a0,q.e,B.c.l(q.a.a)),$async$$1)
case 6:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:45}
A.vO.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.cx,j=j.cy,h=q.e,g=t.ji,f=t.d3,e=q.d.d
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.bP(k,p,i,j)
d=e==null?null:e.$1(o)
if(!f.b(d)){c=new A.w($.B,g)
c.a=8
c.c=d
d=c}s=4
return A.a(d,$async$$1)
case 4:b=a1
n=b==null?o:b
A.K7(k,n)
d=J.T(o,"id")
d.toString
A.G(d)
m=A.dw(k,J.x(J.T(n,"archived"),!0),i,j,d,n)
s=5
return A.a(a.aF(0,h,m),$async$$1)
case 5:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:45}
A.vN.prototype={
$1(a){return A.Ey(this.a.a,this.b.c,"",a)},
$S:7}
A.vU.prototype={}
A.D6.prototype={
$2(a,b){var s,r,q=J.Z(a)
if(t.f.b(b))this.a.j(0,q,A.c4(b))
else{s=this.a
if(t.j.b(b)){r=J.bF(b,new A.D5(),t.z)
r=A.N(r,r.$ti.i("a_.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:40}
A.D5.prototype={
$1(a){return t.f.b(a)?A.c4(a):a},
$S:39}
A.jx.prototype={}
A.wY.prototype={
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
j=A.Ce(k,i)
i=A.Em(j.h(0,"merged"),i,"merged")
h=J.x(j.h(0,"needsReview"),!0)
if(typeof j.h(0,"note")=="string"){g=j.h(0,"note")
g.toString
A.G(g)}else g=null
q=new A.aQ(i,h,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:116}
A.CC.prototype={
$1(a){return a.d!=null},
$S:30}
A.C6.prototype={
$2(a,b){this.a.j(0,a,A.GU(b,a,this.c,"field",'field override "'+a+'" of "'+this.b+'"'))},
$S:48}
A.C7.prototype={
$1(a){return a.b===this.a.h(0,"missingRemote")},
$S:118}
A.C8.prototype={
$0(){return A.v(A.V('"missingRemote" of "'+this.a+'" is not a known policy: '+A.r(this.b.h(0,"missingRemote")),null))},
$S:16}
A.C9.prototype={
$1(a){return this.os(a)},
os(a){var s=0,r=A.h(t.i),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b
n=A
s=3
return A.a(p.a.em("validator",A.m(["store",o,"record",a],t.N,t.X)),$async$$1)
case 3:q=n.N5(c,'validator of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:119}
A.C3.prototype={
$1(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c
m=A
s=3
return A.a(p.a.em("documentMigration",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.Em(c,"document migration v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.C4.prototype={
$1(a){return this.or(a)},
or(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c.a
m=A
s=3
return A.a(p.a.em("migrationTransform",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.Em(c,"migration transform v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.n8.prototype={
x3(a){if(a>this.w)this.w=a},
nt(){return this.f++}}
A.v9.prototype={
uB(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aH(B.o.f7(B.as.A(a)),null))
i=J.T(s,"store")
h=J.T(s,"schemaVer")
g=J.T(s,"shape")
f=J.T(s,"ir")
q=t.lH
p=q.a(J.T(s,"sort"))
if(p==null)p=B.al
e=A.bK(p,!0,t.N)
r=b?J.T(s,"pv"):J.T(s,"values")
q=q.a(r)
if(q==null)q=B.al
d=A.bK(q,!0,t.X)}catch(o){q=A.DQ(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.cb.V(e,n)||J.an(d)!==n.length)throw A.b(A.DQ("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bv(l)&&!A.a9(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.DQ(j))}return d}}
A.Bt.prototype={
V(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.xn.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.r(s.e)+", backward: "+s.z+")"}}
A.dc.prototype={}
A.al.prototype={}
A.cc.prototype={}
A.dy.prototype={}
A.d5.prototype={}
A.b5.prototype={}
A.cq.prototype={}
A.nh.prototype={
cF(a,b){var s=this.ge2()
s.Q.nt()
return this.c.ae(a,b)},
c7(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bK(i.d,!0,h)
h=A.bK(i.e,!0,h)
s=a0==null?A.bK(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bK(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bK(i.f,!0,t.jS)
return new A.nh(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
h7(){var s=null
return this.c7(s,s,s,s,s,s,s,s,s)},
lv(a){var s=null
return this.c7(s,s,s,s,s,s,s,a,s)},
q1(a){var s=null
return this.c7(s,s,s,a,s,s,s,s,s)},
q2(a){var s=null
return this.c7(s,s,s,s,a,s,s,s,s)},
q_(a){var s=null
return this.c7(a,s,s,s,s,s,s,s,s)},
q3(a){var s=null
return this.c7(s,s,s,s,s,a,s,s,s)},
q5(a,b,c){var s=null
return this.c7(s,s,s,s,s,s,a,b,c)},
q4(a,b){var s=null
return this.c7(s,a,b,s,s,s,s,s,s)},
q0(a){var s=null
return this.c7(s,s,a,s,s,s,s,s,s)},
d4(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aB('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.V('Unknown field "'+a+'" for query.',a))},
bl(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.d4(a0)
s='"'+A.C(a0,'"','""')+'"'
r=A.l([],t.fC)
q=a4!=null
if(q)r.push(new A.b5(s+" = ?",[a4]))
p=b2!=null
if(p)r.push(new A.b5(s+" <> ?",[b2]))
o=a5!=null
if(o)r.push(new A.b5(s+" > ?",[a5]))
n=a6!=null
if(n)r.push(new A.b5(s+" >= ?",[a6]))
m=b0!=null
if(m)r.push(new A.b5(s+" < ?",[b0]))
l=b1!=null
if(l)r.push(new A.b5(s+" <= ?",[b1]))
k=a7!=null
if(k)r.push(new A.b5(s+" IN ("+B.b.C(A.a8(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b5(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b5(s+b,[A.kU(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b5(s+b,["%"+A.kU(a3)]))
g=a2!=null
if(g)r.push(new A.b5(s+b,["%"+A.kU(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b5(s+" IS NULL",B.j))
e=a8===!0
if(e)r.push(new A.b5(s+" IS NOT NULL",B.j))
d=this.h7()
B.b.D(d.d,r)
c=A.l([],t.k)
if(q)c.push(new A.al(a0,"eq",[a4]))
if(p)c.push(new A.cc(new A.al(a0,"eq",[b2])))
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
if(e)c.push(new A.cc(new A.al(a0,"isNull",B.j)))
B.b.D(d.f,c)
return d},
nH(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
xK(a,b,c){var s=null
return this.bl(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xR(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xL(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xM(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xP(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xQ(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xN(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
xH(a,b,c){var s=null
return this.bl(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xS(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
xJ(a,b,c){var s=null
return this.bl(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
xI(a,b,c){var s=null
return this.bl(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xO(a,b,c){var s=null
return this.bl(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
wI(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=A.l([],j)
q.a5(0,new A.xk(this,p,h))
if(p.length===0)continue
i.push("("+B.b.C(p," AND ")+")")}if(i.length===0)return this
o=this.h7()
o.e.push(new A.b5("("+B.b.C(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.p)(a),++r){q=a[r]
if(q.gS(0)){m=A.l([],j)
for(l=q.ga0().gt(0);l.k();){k=l.gn()
m.push(new A.al(k.a,"eq",[k.b]))}s.push(new A.dy(m))}}o.f.push(new A.d5(s))
return o},
jW(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.al
r=s?a.a:l
if(s){this.d4(r)
break A}s=a instanceof A.cc
q=s?a.a:l
if(s){this.jW(q)
break A}p=a instanceof A.dy
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d5
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.p)(n),++m)this.jW(n[m])
break A}},
gc8(){var s,r=A.N(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga_(r).a!=="id"
else s=!1
if(s)r.push(B.dn)
return r},
gls(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gc8(),q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.push(new A.cq(o.a,!o.b))}}else s=this.gc8()
return s},
gtu(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gc8(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jM(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.Fy('Query on "'+this.gaS()+'" requires .limit(n) or .all().'))
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
if(r!=null){n=f.glz().uB(r,f.at)
m=f.lV(f.gls(),n)
d.push(m.a)
B.b.D(c,m.b)}l=d.length===0?"":" WHERE "+B.b.C(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.C(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.C(a,'"','""')+'"')+") AS v"}else r=f.gtg()
k=r}j=f.gls()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.Y(j,new A.xf(),A.a1(j).i("Y<1,k>")).C(0,", ")
h=A.Ks(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.C(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.xg(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jM():a3
g=e}return new A.a0(h+(g==null?"":" LIMIT "+A.r(g)),c)},
ja(a){return this.eJ(null,null,!1,!1,a)},
pR(a,b){return this.eJ(a,b,!1,!1,null)},
pP(){return this.eJ(null,null,!1,!1,null)},
pS(a,b,c){return this.eJ(a,null,b,c,null)},
pQ(a){return this.eJ(null,null,!1,a,null)},
gtg(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.lg())return"*"
o=A.N(o,t.N)
for(s=this.gc8(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(!B.b.E(o,p))o.push(p)}return new A.Y(o,A.pO(),A.a1(o).i("Y<1,k>")).C(0,", ")},
glz(){var s=this.b
return new A.v9(s.a,s.b,this.gtu(),this.gtr())},
gtr(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a9(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.ci(a,new A.xh(a)),c=B.b.ci(b,new A.xi())
if(a.length>=2&&d&&!B.b.gH(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
s.push('"'+A.C(p.a,'"','""')+'"')}o=B.b.C(s,", ")
n=B.b.gH(a).b?"<":">"
return new A.a0("("+o+") "+n+" ("+B.b.C(A.a8(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
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
return new A.a0("("+B.b.C(m," OR ")+")",l)},
lW(a,b){var s,r,q,p,o=this.glz(),n=[]
for(s=this.gc8(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gc8(),p=r.length,q=0;q<r.length;r.length===p||(0,A.p)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.A(B.h.a9(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bD.gfe().A(o)},
eg(a){return this.vy(a)},
cO(){return this.eg(null)},
vy(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$eg=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.jM():a1
if(a0===0){q=B.dp
s=1
break}o=a0==null
n=p.ja(o?null:a0+1)
s=3
return A.a(p.cF(n.a,n.b),$async$eg)
case 3:m=a3
l=o?m:J.l7(m,a0).bJ(0)
k=!o&&J.an(m)>a0
o=p.y
j=o!=null
i=j&&p.lg()
h=p.b
if(i){i=A.N(o,t.N)
B.b.D(i,p.rI())
g=A.O_(h,l,p.ge2().cx,i,p.ge2().cy)}else g=A.NZ(h,l,p.ge2().cx,p.ge2().cy)
i=p.at
if(i&&g.length!==0){h=A.a1(g).i("bB<1>")
f=A.N(new A.bB(g,h),h.i("a_.E"))
B.b.aq(g)
B.b.D(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hp(g),$async$eg)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.OC(g,o):g
if(g.length!==0){b=e?p.lW(B.b.ga_(g),B.b.gH(g)):null
a=d?p.lW(B.b.ga_(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.cs(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
hp(a){return this.rC(a)},
rC(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga_(a)
e=p.gc8()
n=[]
for(m=p.gc8(),l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k)n.push(o.h(0,m[k].a))
j=p.lV(e,n)
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
return A.a(p.cF("SELECT 1 FROM "+('"'+A.C(p.b.a,'"','""')+'"')+" WHERE "+B.b.C(i," AND ")+" LIMIT 1",h),$async$hp)
case 3:q=d.d4(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
lg(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.eh(o)==null)return!1}return!0},
rI(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gc8(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hS(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pQ(!0)
m=A
s=3
return A.a(p.cF(o.a,o.b),$async$hS)
case 3:n=m.fi(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)},
hU(a){return this.ut(a)},
ut(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.d4(a)
o=p.pS(a,!0,!0)
m=A
s=3
return A.a(p.cF(o.a,o.b),$async$hU)
case 3:n=m.fi(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)},
i0(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$i0=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:p.d4(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.q5(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.ja(h)
s=3
return A.a(i.cF(B.a.kI(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$i0)
case 3:f=a0
o=p.b
e=o.eh(a)
n=[]
for(m=J.E(f),l=e==null,o=o.a,d=a==="archived";m.k();){c=m.gn().h(0,a)
if(l){if(d)c=J.x(c,1)}else c=A.Eg(e,c,null,null,"",o)
n.push(c)}q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
r_(a){var s,r,q=this.b.eh(a)
if(q==null)return!1
s=q.b
A:{r=B.U===s||B.V===s||B.B===s||B.W===s
break A}return r},
d3(a,b){return this.pq(a,b)},
pq(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$d3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.d4(b)
if(!p.r_(b))throw A.b(A.V('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pR(b,a)
s=3
return A.a(p.cF(o.a,o.b),$async$d3)
case 3:n=d
m=J.I(n)
q=A.BT(m.gF(n)?null:J.T(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d3,r)},
ij(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$ij=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lv(A.l(["id"],m))
k=l.pP()
s=3
return A.a(l.cF(k.a,k.b),$async$ij)
case 3:j=b
m=A.l([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.G(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
i1(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$i1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.ja(p.jM())
n=J
s=3
return A.a(p.cF("EXPLAIN QUERY PLAN "+o.a,o.b),$async$i1)
case 3:q=n.bF(b,new A.xj(),t.X).C(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)}}
A.xk.prototype={
$2(a,b){this.a.d4(a)
this.b.push('"'+A.C(a,'"','""')+'" = ?')
this.c.push(b)},
$S:48}
A.xf.prototype={
$1(a){var s=A.C(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:121}
A.xg.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.C(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:122}
A.xh.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:123}
A.xi.prototype={
$1(a){return a!=null},
$S:15}
A.xj.prototype={
$1(a){return a.h(0,"detail")},
$S:38}
A.cS.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cS&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gK(a){return A.cd(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.xG.prototype={
tf(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.Fy('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cO(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cO=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.c2(a3).length===0){q=B.cZ
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.es(a3)
A.KD(d)
if(e.b)A.KC(d)
c=f.a
b=c+"_fts"
a=A.l(['"'+A.C(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.C(a," AND ")
a0=n.tf()
a1=a0==null?"":" LIMIT "+A.r(a0)
f=A.C(b,'"','""')
e=A.C(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.C(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.Q.nt()
s=7
return A.a(n.c.ae(m,l),$async$cO)
case 7:j=a6
i=A.l([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.T(h,"id")
f.toString
A.G(f)
e=J.T(h,"score")
e.toString
J.aM(i,new A.cS(f,A.GP(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.D(a4)
if(i instanceof A.cf){g=i
throw A.b(A.V("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cO,r)}}
A.cs.prototype={}
A.xx.prototype={}
A.ca.prototype={
a7(){return"FieldKind."+this.b}}
A.b1.prototype={
gl1(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.ax===s||B.J===s||B.X===s||B.Y===s||B.K===s){r="TEXT"
break A}if(B.U===s||B.B===s||B.W===s){r="INTEGER"
break A}if(B.V===s){r="REAL"
break A}throw A.b(A.eR(u.P))}return r},
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
A.t2.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fH(B.cT,A.G(m))
m=n.h(0,"name")
m.toString
A.G(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.b1(m,B.ax,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.b1(m,B.U,r,!1,q,o,o,!1)
case 2:return new A.b1(m,B.V,r,!1,q,o,o,!1)
case 3:return new A.b1(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.b1(m,B.W,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.b1(m,B.J,r,!1,!1,A.fR(J.pW(t.j.a(n),p),p),o,!1)
case 6:return new A.b1(m,B.X,!1,!1,q,o,o,!1)
case 7:return new A.b1(m,B.Y,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.b1(m,B.K,!1,!1,!1,o,A.G(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:124}
A.iS.prototype={
a7(){return"IndexScope."+this.b}}
A.dG.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.tW.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.pW(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dG(q,s,A.fH(B.cO,A.G(r)))},
$S:125}
A.fO.prototype={
p(){var s,r=t.N,q=t.X,p=A.u(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gS(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fO&&r.b===b.b&&B.az.V(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gK(a){return A.cd(A.vZ(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.to.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.pW(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fO(p,r,t.f.b(q)?A.JC(q.ce(0,s,t.X)):B.ct)},
$S:126}
A.eB.prototype={
es(a){var s,r,q,p
for(s=this.a.ga0(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.E(r,p))continue
q=q.b
r=A.C(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.eB&&A.JB(this.a,b.a)
else s=!0
return s},
gK(a){var s,r,q,p=this.a,o=p.gJ(),n=A.N(o,A.n(o).i("o.E"))
B.b.aj(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.p)(n),++r){q=n[r]
o.push(A.cd(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.vZ(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.tn.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.u(s,s)
for(o=t.d2.a(o).ga0(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.G(p)
q=q.b
q.toString
A.G(q)
A.Fi(p,q)
r.j(0,p,q)}return new A.eB(A.Jj(r,s,s))},
$S:127}
A.bZ.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.xW.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.aj(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.al:p)
q=t.G
while(p.k())r.push(A.Fd(q.a(p.gn())))
return new A.bZ(o,s,r,null)},
$S:128}
A.dO.prototype={
a7(){return"MissingRemotePolicy."+this.b}}
A.lG.prototype={}
A.c7.prototype={
gdi(){var s,r,q,p,o=this,n=$.I9()
A.Do(o)
s=n.a.get(o)
if(s==null){s=A.aO(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
eh(a){var s,r,q,p,o,n=this,m=$.Ia()
A.Do(n)
s=m.a.get(n)
if(s==null){s=A.u(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.T(m,a)},
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
A.qy.prototype={
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
while(q.k())r.push(A.Fd(o.a(q.gn())))
q=A.l([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.JM(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.G(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.JD(o.a(l))}else l=null
k=A.l([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.al:i)
while(i.k())k.push(A.KM(o.a(i.gn())))
return new A.c7(h,s,r,q,B.cg,n,p,l,k,B.bc,null,m,this.b.i("c7<0>"))},
$S(){return this.b.i("c7<0>()")}}
A.nv.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.xA.prototype={
$1(a){return a.d!=null},
$S:30}
A.xB.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.I)},
$S:12}
A.xC.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.eB)},
$S:47}
A.xD.prototype={
$1(a){return J.Z(a)},
$S:31}
A.xE.prototype={
aT(a){return this.xe(a)},
xe(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$aT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.a
h=i.a
g=h.fy
f=a.a
if(g.I(f))throw A.b(A.aB('Duplicate store name "'+f+'" in this open call.'))
p=A.DN(a)
o=i.d
if(o.e===B.aE&&p.b.length!==0&&!A.O5(a,i.at))throw A.b(new A.jV('Store "'+f+'" declares executable features that cannot run on the worker runtime: '+B.b.C(p.b,", ")+"."))
s=2
return A.a(q.h2(a,p),$async$aT)
case 2:n=new A.iB(o).k8(a)
o=a.w
if(o!=null)A.OD(i.b,f,o.c)
o=i.b
s=3
return A.a(o.aJ("lp_stores",1,"store = ?",[f]),$async$aT)
case 3:m=c
l=J.I(m)
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
return A.a(o.aF(0,"lp_stores",A.m(["store",f,"table_name",f,"schema_ver",l,"definition_json",B.h.a9(a.p(),null),"created_at",i.$0()],t.N,t.X)),$async$aT)
case 16:s=17
return A.a(A.fW(o,0,0,"create:"+f,i,l),$async$aT)
case 17:s=5
break
case 6:i=J.T(l.gH(m),"schema_ver")
i.toString
A.aj(i)
l=a.b
if(i>l)throw A.b(A.FO('Store "'+f+'" on disk is schema v'+i+", but this package supports v"+l+"."))
s=i<l?18:19
break
case 18:s=20
return A.a(A.fV(h,a,i),$async$aT)
case 20:case 19:s=21
return A.a(q.bT(a),$async$aT)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a9(a.p(),null),"schema_ver",l],t.N,t.X),"store = ?",[f]),$async$aT)
case 22:case 5:g.j(0,f,new A.nK(a,p,new A.wK(A.u(t.N,t.b))))
s=23
return A.a(q.dX(f,p),$async$aT)
case 23:return A.e(null,r)}})
return A.f($async$aT,r)},
h2(a,b){return this.ps(a,b)},
ps(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$h2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.a.b.aJ("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$h2)
case 3:j=d
if(J.bw(j)){s=1
break}o=null
try{n=J.T(J.bE(j),"v")
o=A.KB(typeof n=="string"?B.h.aH(n,null):n)}catch(i){if(A.D(i) instanceof A.dM){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.au(B.m.A(B.e.A(A.ak(o.p()))).a)!==A.au(B.m.A(B.e.A(A.ak(b.p()))).a))throw A.b(A.aB('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$h2,r)},
dX(a,b){return this.rz(a,b)},
rz(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ak(b.p())
n=q.a.b
m=t.N
l=t.X
k=J
s=5
return A.a(n.aJ("lp_meta",1,"k = ?",[p]),$async$dX)
case 5:s=k.bw(d)?2:4
break
case 2:s=6
return A.a(n.aF(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dX)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dX)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dX,r)},
hQ(a){return this.uh(a)},
uh(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a.b.e
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hQ)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
bT(a){return this.rX(a)},
rX(a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bT=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a0=p.a
a1=a0.b
a2=a4.a
s=3
return A.a(a1.ev("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a2]),$async$bT)
case 3:a3=a7
if(J.bw(a3)){s=1
break}o=null
try{n=J.T(J.bE(a3),"definition_json")
m=typeof n=="string"?B.h.aH(n,null):n
l=m
l.toString
k=t.X
o=A.qx(A.bo(t.f.a(l),t.N,k),k)}catch(a5){if(A.D(a5) instanceof A.di){s=1
break}else throw a5}i=o.w
h=a4.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.az.V(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jQ()
$.l1()
f.aC()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a1.O("DROP TRIGGER IF EXISTS "+('"'+A.C(a2+d,'"','""')+'"')),$async$bT)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a1.O("DROP TABLE IF EXISTS "+('"'+A.C(a2+"_fts",'"','""')+'"')),$async$bT)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.iB(a0.d).k8(a4).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a1.O(l[e]),$async$bT)
case 16:case 14:l.length===k||(0,A.p)(l),++e
s=13
break
case 15:l=a2+"_fts"
k=A.C(l,'"','""')
s=17
return A.a(a1.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.C(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bT)
case 17:k=h.a
c=k.$ti.i("Y<L.E,k>")
b=new A.Y(k,A.pO(),c).C(0,", ")
a=new A.Y(k,new A.xF(a4,h),c).C(0,", ")
l=A.C(l,'"','""')
s=18
return A.a(a1.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.C(a2,'"','""')+'"')),$async$bT)
case 18:case 12:if(f.b==null)f.b=$.nd.$0()
l=a4.b
s=19
return A.a(A.fW(a1,f.gmZ(),l,"fts:"+a2,a0.x,l),$async$bT)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bT,r)},
hY(a){return this.uK(a)},
uK(a){var s=0,r=A.h(t.H),q=this,p
var $async$hY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b.f
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hY)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hY,r)}}
A.xF.prototype={
$1(a){return A.Ey(this.a.a,this.b.c,"",a)},
$S:7}
A.dQ.prototype={
a7(){return"MutationAction."+this.b}}
A.fx.prototype={
gaS(){return this.b.a.a},
eL(){var s=this.d
if(s!=null&&s.e){s=this.gaS()
throw A.b(new A.jB('Cannot mutate "'+s+'" through a read-only Tx.'))}},
iC(a){var s=this
if(s.d!=null)return s.it(B.a0,a)
return s.a.b1(new A.qK(s,a),B.q,t.H)},
nE(a){var s=this
if(s.d!=null)return s.it(B.a1,a)
return s.a.b1(new A.qN(s,a),B.q,t.H)},
no(a){var s=this
if(s.d!=null)return s.np(a)
return s.a.b1(new A.qJ(s,a),B.q,t.H)},
nF(a){var s=this
if(s.d!=null)return s.bG(a,B.a1)
return s.a.b1(new A.qM(s,a),B.q,t.H)},
nl(a,b){var s=this
if(s.d!=null)return s.wL(a,b)
return s.a.b1(new A.qG(s,a,b),B.q,t.H)},
nm(a){var s=this
if(s.d!=null)return s.cX(a)
return s.a.b1(new A.qF(s,a),B.q,t.H)},
cX(a){return this.wK(a)},
wK(a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cX=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:p.eL()
if(a7.a===0){s=1
break}o=p.c.b
n=A.n(a7)
m=n.i("R<1>")
l=A.N(new A.R(a7,m),m.i("o.E"))
m=t.N
k=A.u(m,t.G)
j=p.b.a,i=p.a,h=i.cx,i=i.cy,g=j.a,f='SELECT * FROM "'+g+'" WHERE id IN (',e=0
case 3:if(!(d=l.length,e<d)){s=5
break}c=e+2000
b=B.b.U(l,e,B.c.bs(c,0,d))
a6=J
s=6
return A.a(o.ae(f+B.b.C(A.a8(b.length,"?",!1,m),", ")+")",b),$async$cX)
case 6:d=a6.E(a9)
case 7:if(!d.k()){s=8
break}a=d.gn()
a0=a.h(0,"id")
a0.toString
k.j(0,A.G(a0),A.bP(j,a,h,i))
s=7
break
case 8:case 4:e=c
s=3
break
case 5:a1=A.u(m,t.o)
a2=A.u(m,t.dZ)
j=k.$ti.i("R<1>")
a3=A.N(new A.R(k,j),j.i("o.E"))
j=t.s,e=0
case 9:if(!(i=a3.length,e<i)){s=11
break}c=e+2000
b=B.b.U(a3,e,B.c.bs(c,0,i))
a4=B.b.C(A.a8(b.length,"?",!1,m),", ")
i=A.l([g],j)
B.b.D(i,b)
h="store = ? AND record_id IN ("+a4+")"
a6=J
s=12
return A.a(o.bH("lp_sync_row",h,i),$async$cX)
case 12:f=a6.E(a9)
case 13:if(!f.k()){s=14
break}d=f.gn()
a=d.h(0,"record_id")
a.toString
a1.j(0,A.G(a),A.hq(d))
s=13
break
case 14:a6=J
s=15
return A.a(o.bH("lp_outbox",h,i),$async$cX)
case 15:i=a6.E(a9)
case 16:if(!i.k()){s=17
break}h=i.gn()
f=h.h(0,"record_id")
f.toString
a2.j(0,A.G(f),A.jr(h))
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
return A.a(p.cY(i,h,!0,f,a2.h(0,i),d),$async$cX)
case 20:s=18
break
case 19:j=p.d
j.toString
m=A.aO(m)
for(n=new A.bJ(a7,a7.r,a7.e,n.i("bJ<1>"));n.k();)m.u(0,n.d)
j.a2(new A.a4(g,m))
case 1:return A.e(q,r)}})
return A.f($async$cX,r)},
mI(a){var s=this
if(s.d!=null)return s.is(B.C,a)
return s.a.b1(new A.qC(s,a),B.q,t.H)},
ny(a){var s=this
if(s.d!=null)return s.is(B.D,a)
return s.a.b1(new A.qL(s,a),B.q,t.H)},
iB(a){var s=this
if(s.d!=null)return s.dt(a)
return s.a.b1(new A.qH(s,a),B.q,t.H)},
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
return A.a(A.cG(n,m,a,!0),$async$dt)
case 3:s=4
return A.a(n.X(m,"id = ?",[a]),$async$dt)
case 4:l=t.N
o.a2(new A.a4(m,A.ap([a],l)))
if(p!=null){l=A.bW(p.gJ(),l)
l.G(0,"id")
o.bF(B.au,l,a,null,p,B.H,m)}return A.e(null,r)}})
return A.f($async$dt,r)},
cY(a,b,c,d,e,f){return this.wN(a,b,c,d,e,f)},
wM(a,b,c){return this.cY(a,b,c,null,null,null)},
wL(a,b){return this.cY(a,b,!1,null,null,null)},
wN(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cY=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p.eL()
s=f!=null||e!=null?3:5
break
case 3:o=e
n=f
s=4
break
case 5:s=6
return A.a(p.c.b.ae("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cY)
case 6:m=h
l=J.I(m)
if(l.gS(m)){k=l.gH(m)
n=A.hq(k)
o=k.h(0,"o_kind")!=null?A.jr(A.m(["store",k.h(0,"o_store"),"record_id",k.h(0,"o_record_id"),"kind",k.h(0,"o_kind"),"payload_json",k.h(0,"o_payload_json"),"base_updated",k.h(0,"o_base_updated"),"base_hash",k.h(0,"o_base_hash"),"dirty_fields",k.h(0,"o_dirty_fields"),"op_id",k.h(0,"o_op_id"),"created_at",k.h(0,"o_created_at"),"updated_at",k.h(0,"o_updated_at"),"depends_on_op",k.h(0,"o_depends_on_op")],t.N,t.X)):null}else{n=null
o=null}case 4:s=n!=null&&n.w===B.G&&o!=null?7:8
break
case 7:s=9
return A.a(p.dW(a,b,n,o,c),$async$cY)
case 9:s=1
break
case 8:s=10
return A.a(p.dQ(a,b,c,o,d,n),$async$cY)
case 10:case 1:return A.e(q,r)}})
return A.f($async$cY,r)},
dQ(a,b,c,d,e,f){return this.qp(a,b,c,d,e,f)},
lJ(a,b,c,d,e){return this.dQ(a,b,c,d,null,e)},
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
if(m==null)throw A.b(A.jD("No record "+q.gaS()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cb(m,p,o)
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
try{a6=B.h.aH(b1.d,null)}catch(b3){a6=null}if(!t.G.b(a6)){q=n.lJ(a8,a9,b2,b1,b0)
s=1
break}i=a6.h(0,"id")
if(i!=null&&!J.x(i,a8)){q=n.lJ(a8,a9,b2,b1,b0)
s=1
break}h=t.N
g=t.X
f=A.cb(a6,h,g)
f.D(0,a9)
m=f
J.d3(m,"id",a8)
e=new A.a5("")
f=n.b
d=f.a
c=A.Cq(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cb(m,h,g)
b.G(0,"id")
a0=n.hB(a8,b,a,c)
s=a0 instanceof A.w?3:4
break
case 3:s=5
return A.a(a0,$async$dW)
case 5:case 4:a1=n.lD(a6,m,B.L)
l=null
b=a1.length===1&&d.gdi().E(0,B.b.gao(a1))
a2=n.a
a3=a2.cx
a4=a2.cy
if(b){a5=d.eh(B.b.gao(a1))
b=a5.a
l=A.m([b,A.Ew(d,a5,J.T(m,b),a3,a4,a8),"hidden",0],h,g)}else l=A.dw(d,J.x(J.T(m,"archived"),!0),a3,a4,a8,m)
p=7
s=10
return A.a(n.c.b.L(d.a,l,"id = ?",[a8]),$async$dW)
case 10:p=2
s=9
break
case 7:p=6
a7=o.pop()
k=A.D(a7)
h=A.I4(k,m)
throw A.b(h)
s=9
break
case 6:s=2
break
case 9:g=a2.dx
g===$&&A.t()
b=l
s=11
return A.a(g.br(B.L,null,a1,n.c.b,a8,m,a6,b1,a,b,b0,f),$async$dW)
case 11:if(!b2){g=n.d
if(g!=null)g.a2(new A.a4(d.a,A.ap([a8],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g){g=a6
h.bF(B.A,A.mN(a1,A.a1(a1).c),a8,m,g,B.H,d.a)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dW,r)},
aO(a,b,c,d,e,f,g){return this.wx(a,b,c,d,e,f,g)},
it(a,b){var s=null
return this.aO(a,!1,s,s,s,s,b)},
is(a,b){var s=null
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
i=new A.qE(b8,n,c5,c4)
s=c0===B.a0?3:5
break
case 3:h=A.a7(c6.h(0,"id"))
if(h==null)h=A.i9()
g=$.pU()
if(!g.b.test(h))throw A.b(A.V('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aO)
case 6:l=n.eO(c6,m)
c0=b8.a==null?B.bd:B.L
s=4
break
case 5:s=c0===B.L?7:9
break
case 7:c3.toString
m=c3
s=10
return A.a(i.$1(m),$async$aO)
case 10:if(b8.a==null)throw A.b(A.jD("No record "+n.gaS()+"/"+A.r(m)+" to update."))
c6.toString
l=n.eO(c6,m)
s=8
break
case 9:s=c0===B.a1?11:13
break
case 11:h=A.a7(c6.h(0,"id"))
if(h==null)h=A.i9()
g=$.pU()
if(!g.b.test(h))throw A.b(A.V('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aO)
case 14:g=b8.a
if(g==null){l=n.eO(c6,m)
c0=B.bd}else{l=A.cb(g,t.N,t.X)
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
if(g==null)throw A.b(A.jD("No record "+n.gaS()+"/"+A.r(m)+" to archive/restore."))
g=A.cb(g,t.N,t.X)
g.j(0,"archived",c0===B.C)
l=g
case 12:case 8:case 4:d=new A.a5("")
g=n.b
e=g.a
c=l
b=A.Cq(d,e,c,J.an(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
a0=n.hB(m,l,a,b)
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
return A.a(c.c_(n.c.b,e.a,m),$async$aO)
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
if(a3&&a1.w===B.a6)throw A.b(A.F7("Record "+n.gaS()+"/"+A.r(m)+u.W))
a4=b8.a
a5=a4!=null
if(a5)a6=!a3||a1.w===B.z
else a6=!1
if(a5&&a6){a7=A.ak(A.bj(e,a4))
a3=A.au(B.m.A(B.e.A(a7)).a)
a8=new A.qe(a7,a3,c?null:a1.c)}else a8=null
c=m
a3=l
a4=n.a
a5=a4.cx
a9=a4.cy
b0=A.dw(e,J.x(J.T(l,"archived"),!0),a5,a9,c,a3)
b1=n.lD(b8.a,l,c0)
k=null
if(b8.a!=null&&b1.length===1&&e.gdi().E(0,B.b.gao(b1))){b2=e.eh(B.b.gao(b1))
c=b2.a
k=A.m([c,A.Ew(e,b2,J.T(l,c),a5,a9,m),"hidden",0],t.N,t.X)}else k=b0
p=34
c=e.a
a3=n.c.b
s=b8.a==null?37:39
break
case 37:s=40
return A.a(a3.aF(0,c,k),$async$aO)
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
g=A.I4(j,l)
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
return A.a(c.br(c0,a8,b1,n.c.b,a3,l,a4,a2,a,b0,a1,g),$async$aO)
case 42:b4=c8
b5=b4.a
if(b5)b6=B.au
else switch(c0.a){case 2:case 0:case 1:b6=b8.a==null?B.ad:B.A
break
case 3:b6=B.A
break
case 4:b6=B.cc
break
case 5:b6=B.cd
break
default:b6=null}if(b5){g=A.aO(t.N)
c=b8.a
c=J.E((c==null?l:c).gJ())
while(c.k()){a3=c.gn()
if(a3!=="id")g.u(0,a3)}b7=g}else if(c0===B.C||c0===B.D)b7=A.ap(["archived"],t.N)
else if(b8.a==null){g=l
c=A.n(g).i("R<1>")
a3=c.i("aq<o.E>")
b7=A.bW(new A.aq(new A.R(g,c),new A.qD(),a3),a3.i("o.E"))}else b7=A.mN(b1,A.a1(b1).c)
g=n.d
c=g==null
if(!c){a3=m
a4=b8.a
a5=b5?null:l
g.bF(b6,b7,a3,a5,a4,B.H,e.a)}if(!c1)if(!c)g.a2(new A.a4(e.a,A.ap([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aO,r)},
bG(a,b){return this.wV(a,b)},
np(a){return this.bG(a,B.a0)},
wV(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bG=A.c(function(c4,c5){if(c4===1){o.push(c5)
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
a2=a1?A.i9():a0
a1=$.pU()
if(!a1.b.test(a2))throw A.b(A.V('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aM(l,new A.a0(a2,a))}if(!c){a3=A.u(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ao(a3,a3.$ti.i("ao<2>")).bj(0,new A.qI())}else a5=!1
s=c3===B.a0&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.e0(m,l),$async$bG)
case 9:k=A.aO(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aM(k,i)}g.a2(new A.a4(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.D(c0) instanceof A.hC))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.u(k,t.G)
j=n.a,d=j.cx,j=j.cy,a1=t.s,a8=0
case 10:if(!(a8<J.an(l))){s=12
break}a9=a8+2000
b0=B.c.bs(a9,0,J.an(l))
a4=A.l([],a1)
for(b1=J.J_(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.p)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.bH(e,"id IN ("+B.b.C(A.a8(a4.length,"?",!1,k),", ")+")",a4),$async$bG)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.G(b2),A.bP(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.u(k,t.o)
b4=A.u(k,t.dZ)
j=a7.$ti.i("R<1>")
b5=A.N(new A.R(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.U(b5,a8,B.c.bs(a9,0,j))
b7=B.b.C(A.a8(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.D(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.bH("lp_sync_row",f,j),$async$bG)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.G(b1),A.hq(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.bH("lp_outbox",f,j),$async$bG)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.G(d),A.jr(f))
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
case 28:a1=A.dL(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.wv(c3,!0,a1),$async$bG)
case 31:s=29
break
case 30:a1=A.dL(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.ww(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bG)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.p)(j),++b
s=25
break
case 27:g.a2(new A.a4(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bG,r)},
e0(a,b){return this.rQ(a,b)},
rQ(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$e0=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.iC?3:4
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
if(l)J.aM(k,new A.a0(h,e));++j
case 11:a7.length===a0||(0,A.p)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.D(a5) instanceof A.cf?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aM(d,a7[c].a)
b=d
s=17
return A.a(n.d9(a6,b),$async$e0)
case 17:throw A.b(new A.hC())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.p)(i),++a1){a3=i[a1]
a.kh(B.ad,a3.a,a3.b,null,B.H,a0)}case 1:return A.e(q,r)
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
m='INSERT INTO "'+d5+'" ('+A.id(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.id(B.a_)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.id(B.Z)+") VALUES "
j=new A.qB()
b1=new A.a5("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=d0.z!=null||b2
b4=b2?A.l([],t.jO):null
i=0,a9=b4==null,b5=d1.cx,b6=d1.cy,b7=d0.b
case 2:if(!(b8=i,b9=d8.length,b8<b9)){s=4
break}h=B.w.bs(i+500,0,b9)
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
c5=A.Cq(b1,d0,c4,c2)
b8=b1.a
c6=b8.charCodeAt(0)==0?b8:b8
c7=o.hB(c2,c4,c6,c5)
s=c7 instanceof A.w?8:9
break
case 8:s=10
return A.a(c7,$async$dd)
case 10:case 9:A.Nn(f,d0,J.x(c4.h(0,"archived"),!0),b5,b6,c2,c4)
b8=d1.dx
b8===$&&A.t()
c8=b8.fT()
A.Hv(e,"",null,d2,null,'["*"]',B.v,c8,c6,c2,d5,d2)
A.Hw(d,B.a7,0,"",null,null,'["*"]',null,null,1,0,c8,c2,null,b7,d5,B.G)
if(!a9)b4.push(new A.a0(c2,c4))
case 6:++c0
s=5
break
case 7:c=!1
b=!1
q=12
b8=d3.cs(A.r(m)+A.r(j.$2(J.an(n),g)))
if(b8.r||b8.b.r)A.v(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eI(new A.bT(f))
b8.hc()
c=!0
b8=d3.cs(A.r(l)+A.r(j.$2(11,g)))
if(b8.r||b8.b.r)A.v(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eI(new A.bT(e))
b8.hc()
b=!0
b8=d3.cs(A.r(k)+A.r(j.$2(16,g)))
if(b8.r||b8.b.r)A.v(A.A(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eI(new A.bT(d))
b8.hc()
q=1
s=14
break
case 12:q=11
d6=p.pop()
s=A.D(d6) instanceof A.cf?15:17
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
a5=B.b.C(A.a8(J.an(a4),"?",!1,t.N),", ")
s=c?21:22
break
case 21:s=23
return A.a(d7.X(d5,"id IN ("+A.r(a5)+")",a4),$async$dd)
case 23:case 22:s=b?24:25
break
case 24:a6=A.l([d5],d4)
J.EQ(a6,a4)
a7=a6
s=26
return A.a(d7.X("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dd)
case 26:case 25:case 20:throw A.b(new A.hC())
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
a8.kh(B.ad,a2.a,a2.b,null,B.H,d5)}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dd,r)},
dL(a,b,c,d,e){return this.pu(a,b,c,d,e)},
pu(a9,b0,b1,b2,b3){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$dL=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eO(b2,b1)
a3=new A.a5("")
a4=A.Cq(a3,a1,a2,b1)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
a7=n.hB(b1,a2,a6,a4)
s=a7 instanceof A.w?3:4
break
case 3:s=5
return A.a(a7,$async$dL)
case 5:case 4:a5=n.a
m=A.dw(a1,J.x(a2.h(0,"archived"),!0),a5.cx,a5.cy,b1,a2)
a5=a5.dx
a5===$&&A.t()
e=a5.fT()
a5=a1.a
l=A.Hz("",null,b3,'["*"]',B.v,e,a6,b1,a5,b3)
k=A.NH('["*"]',1,e,b1,a1.b,a5,B.G)
j=!1
i=!1
p=7
d=m
c=A.n(d).i("R<1>")
b=t.N
h=A.dN(new A.R(d,c),new A.qz(),c.i("o.E"),b).C(0,", ")
g=B.b.C(A.a8(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=b0.cs(f)
d=m
a=A.n(d).i("ao<2>")
d=A.N(new A.ao(d,a),a.i("o.E"))
c.ef(new A.bT(d))
j=!0
b0.cs("INSERT INTO lp_outbox ("+A.id(B.a_)+") VALUES ("+B.b.C(A.a8(11,"?",!1,b),", ")+")").ef(new A.bT(A.HZ(l,B.a_)))
i=!0
b0.cs("INSERT INTO lp_sync_row ("+A.id(B.Z)+") VALUES ("+B.b.C(A.a8(16,"?",!1,b),", ")+")").ef(new A.bT(A.HZ(k,B.Z)))
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
for(s=a.ga0(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.nq("archived",new A.qA())
return p},
lD(a,b,c){var s,r,q,p,o
if(a==null)return B.d_
s=t.N
r=A.aO(s)
s=A.bW(a.gJ(),s)
s.D(0,new A.R(b,A.n(b).i("R<1>")))
for(s=A.dr(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.p.V(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.N(r,r.$ti.c)
B.b.aj(o)
return o},
e1(a){return this.rV(a)},
rV(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$e1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ae('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$e1)
case 3:m=c
l=J.I(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.bP(n,l.gH(m),o.cx,o.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e1,r)},
hq(a){return this.rD(a)},
rD(a){var s=0,r=A.h(t.nw),q,p=this,o,n,m,l,k,j
var $async$hq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ae('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hq)
case 3:j=c
k=J.I(j)
if(k.gF(j)){q=B.dH
s=1
break}o=k.gH(j)
k=p.a
n=A.bP(l,o,k.cx,k.cy)
m=o.h(0,"s_sync_state")!=null?A.hq(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.ea(n,m,o.h(0,"o_kind")!=null?A.jr(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
bK(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.I(a)){q=p.b.e.bK(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ae("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bK)
case 6:s=4
break
case 5:s=7
return A.a(k.ae('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bK)
case 7:case 4:j=c
l=J.I(j)
if(l.gF(j)){if(f)o.e.kZ(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.bP(n,i,l.cx,l.cy)
g=A.aX(i.h(0,"lp_schema_ver"))
if(g==null)g=1
s=g<m?8:9
break
case 8:s=10
return A.a(A.Cm(n,h,g,m),$async$bK)
case 10:h=c
case 9:if(f)o.e.kZ(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bK,r)},
hB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=this.b.a,r=s.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
n=o.a
m=b.h(0,n)
if(o.c&&m==null)throw A.b(A.V('Field "'+n+'" is required.',n))
if(m==null)continue
l=A.Ex(o,m)
if(l!=null)throw A.b(A.V(A.Je(o,l),n))}k=s.z
if(k!=null){j=k.$1(b)
if(t.fB.b(j))return this.hC(j,b,c,d)
s=J.I(j)
if(s.gS(j))throw A.b(A.V(s.C(j,"; "),null))}this.mA(b,c,d)},
hC(a,b,c,d){return this.tL(a,b,c,d)},
tL(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o
var $async$hC=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a,$async$hC)
case 2:p=f
o=J.I(p)
if(o.gS(p))throw A.b(A.V(o.C(p,"; "),null))
q.mA(b,c,d)
return A.e(null,r)}})
return A.f($async$hC,r)},
mA(a,b,c){var s=this.a.as
if(c>s)throw A.b(A.V("Document exceeds max size ("+c+" > "+s+" bytes).",null))}}
A.qK.prototype={
$1(a){return a.bt(this.a.b.a.a).iC(this.b)},
$S:4}
A.qN.prototype={
$1(a){return a.bt(this.a.b.a.a).nE(this.b)},
$S:4}
A.qJ.prototype={
$1(a){return a.bt(this.a.b.a.a).no(this.b)},
$S:4}
A.qM.prototype={
$1(a){return a.bt(this.a.b.a.a).nF(this.b)},
$S:4}
A.qG.prototype={
$1(a){return a.bt(this.a.b.a.a).nl(this.b,this.c)},
$S:4}
A.qF.prototype={
$1(a){return a.bt(this.a.b.a.a).nm(this.b)},
$S:4}
A.qC.prototype={
$1(a){return a.bt(this.a.b.a.a).mI(this.b)},
$S:4}
A.qL.prototype={
$1(a){return a.bt(this.a.b.a.a).ny(this.b)},
$S:4}
A.qH.prototype={
$1(a){return a.bt(this.a.b.a.a).iB(this.b)},
$S:4}
A.qE.prototype={
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
return A.a(p.b.hq(a),$async$$1)
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
A.qD.prototype={
$1(a){return a!=="id"},
$S:13}
A.qI.prototype={
$1(a){return a>1},
$S:132}
A.qB.prototype={
$2(a,b){var s=t.N
return B.b.C(A.a8(b,"("+B.b.C(A.a8(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:133}
A.qz.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.qA.prototype={
$0(){return!1},
$S:49}
A.hC.prototype={$iH:1}
A.oJ.prototype={}
A.q1.prototype={
b_(a,b){var s=this.a.W(new A.q2(a,b),b)
this.a=s.b0(new A.q3(b),new A.q4(),t.H)
return s}}
A.q2.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.q3.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.q4.prototype={
$2(a,b){},
$S:6}
A.bl.prototype={
gnw(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.qZ.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.G(d)
s=e.h(0,"record_id")
s.toString
A.G(s)
r=A.Cy(e.h(0,l),l,k)
q=A.Cy(e.h(0,j),j,k)
p=A.Cy(e.h(0,i),i,k)
o=A.HF(e.h(0,h),h,k)
n=A.HF(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.aj(m)
return new A.bl(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Cy(e.h(0,f),f,k):null)},
$S:135}
A.r_.prototype={
fo(a){return this.wj(a)},
wj(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.t()
m=m.gbv()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.wW("lp_conflicts","detected_at ASC",n,o),$async$fo)
case 3:o=l.bF(c,A.NN(),t.n8)
m=A.N(o,o.$ti.i("a_.E"))
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
return A.a(n.gbv().b.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dD)
case 3:o=d
n=J.I(o)
if(n.gF(o)){q=null
s=1
break}q=A.Di(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dD,r)},
xG(a){var s={},r=A.oI()
s.a=null
r.si4(A.dW(new A.r2(s,r),new A.r3(s,this,a,new A.r4(this,r,a)),t.ba))
return r.aE().gcv()},
ez(a,b,c){return this.xl(a,b,c)},
xl(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ez=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(c)
s=2
return A.a(p.a1(new A.r0(q,c,a,o.a,o,b),t.P),$async$ez)
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
s=o.gnw()?4:5
break
case 4:s=6
return A.a(p.a.bt(a).iB(b),$async$e8)
case 6:s=1
break
case 5:s=7
return A.a(p.ez(b,o.e,a),$async$e8)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e8,r)}}
A.r4.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.aE().gil()){s=1
break}p=4
s=7
return A.a(n.a.fo(n.c),$async$$0)
case 7:m=b
if(!i.aE().gil())J.aM(i.aE(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.D(h)
k=A.ae(h)
if(!i.aE().gil())i.aE().bi(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.r3.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b6(p,A.n(p).i("b6<1>")).aW(new A.r1(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.r1.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:42}
A.r2.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.v()
s=2
return A.a(p instanceof A.w?p:A.bC(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.aE().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.r0.prototype={
$1(a){return this.nO(a)},
nO(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.I(a3)
if(a4.gF(a3))throw A.b(A.A("No conflict found for "+a1+"/"+a2))
o=A.Di(a4.gH(a3))
n=o.gnw()
m=n?null:A.ak(o.e)
l=n?"":A.au(B.m.A(B.e.A(A.ak(A.bj(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aJ(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bw(a8)?4:5
break
case 4:s=7
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.X("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.X("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a2(new A.a4(a1,A.ap([a2],a4)))
a6.a2(new A.a4("lp_conflicts",A.ap([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.I(k)
if(i.gS(k)){h=A.a7(J.T(i.gH(k),"base_updated"))
i=h==null?A.a7(J.T(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cb(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dw(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bN(n?B.k:o.e,g)
d=A.N(a4,A.n(a4).c)
B.b.aj(d)
c=A.ak(A.bj(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a9(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aJ("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bw(a8)?14:16
break
case 14:a4=p.a.a
b=a4.db.$0()
h=f?B.M:B.v
e=B.h.a9(d,null)
a4=a4.dx
a4===$&&A.t()
s=18
return A.a(a0.aF(0,"lp_outbox",A.Hz(l,j,b,e,h,a4.fT(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a2(new A.a4(a1,A.ap([a2],i)))
a6.a2(new A.a4("lp_conflicts",A.ap([a2],i)))
a4=o.d
a=A.bN(a4,g)
a.G(0,"id")
a6.bF(B.A,a,a2,g,a4,B.ae,a1)
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.nQ.prototype={
aC(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dW(null,null,t.n6)
n.ay=A.dW(null,null,t.ic)}n.z=!0
s=3
return A.a(n.aN(B.dQ),$async$aC)
case 3:p=5
l=n.b
s=8
return A.a(l.iy(),$async$aC)
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
n.fr=new A.b6(l,A.n(l).i("b6<1>")).aW(n.gvX())
l=n.b.CW
n.fx=new A.b6(l,A.n(l).i("b6<1>")).aW(n.gvV())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aK(),$async$aC)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.yn(B.ag,new A.yi(n))
s=14
return A.a(n.aN(n.dO()),$async$aC)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.ca("cycle")
s=17
return A.a(n.eY(),$async$aC)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aC,r)},
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
return A.a(o instanceof A.w?o:A.bC(o,n),$async$aK)
case 7:o=p.fx
o=o==null?null:o.v()
s=8
return A.a(o instanceof A.w?o:A.bC(o,n),$async$aK)
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
dO(){if(this.at)return B.bq
if(this.Q)return B.bn
if(this.as)return B.aH
return B.bo},
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
qg(){return this.p2=this.p2.W(new A.y8(this),t.H)},
h8(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$h8=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.hT(),$async$h8)
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
if((g.c&4)===0)g.u(0,new A.eU(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h8,r)},
vY(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.ca("push")
s.td(B.ah)},
vW(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.fy.I(s))return
r=a.c
if(r!=null&&a.b===B.ab){q.ca("fast:"+s)
q.dx=q.dx.W(new A.yg(q,r),t.H)
return}q.ca("pull:"+s)
q.hy(B.ah,A.l([s],t.s))},
hd(a){return this.qq(a)},
qq(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hd=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hy(B.ah,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.t()
s=7
return A.a(l.i2(a),$async$hd)
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
break}if(!m)n.hy(B.ah,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hd,r)},
w5(){if(!this.z)return
this.ca("cycle")
this.mi()},
hy(a,b){var s=this,r=s.go
if(r!=null)r.v()
if(b==null)s.k2=!0
else s.k3.D(0,b)
s.go=A.c_(a,new A.yf(s))},
td(a){return this.hy(a,null)},
tc(a){var s=this.id
if(s!=null)s.v()
this.id=A.c_(B.I,new A.ye(this,a))},
jE(){this.as=!0
this.aN(B.aH)
A.iO(this.d,t.H)},
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
case 4:p.ca("cycle")
s=5
return A.a(p.eY(),$async$ep)
case 5:case 1:return A.e(q,r)}})
return A.f($async$ep,r)},
fY(a){return this.oI(a)},
oI(a){var s=0,r=A.h(t.H),q=this,p
var $async$fY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.v()
q.k1=A.c_(B.aw,new A.yh(q))
s=3
break
case 4:s=5
return A.a(q.aN(B.bn),$async$fY)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fY,r)},
b5(){var s=0,r=A.h(t.H),q=this
var $async$b5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aN(B.bq),$async$b5)
case 2:return A.e(null,r)}})
return A.f($async$b5,r)},
aY(){var s=0,r=A.h(t.H),q,p=this
var $async$aY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aN(p.dO()),$async$aY)
case 3:p.ca("cycle")
s=4
return A.a(p.eY(),$async$aY)
case 4:case 1:return A.e(q,r)}})
return A.f($async$aY,r)},
mk(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.v()}s=t.fD
r=q.k4.W(new A.yb(q,a),s)
q.k4=r.b0(new A.yc(),new A.yd(),s)
return r},
eY(){return this.mk(null)},
ca(a){var s,r=this.p1
r.push(a)
s=r.length
if(s>1000)B.b.iI(r,0,s-1000)},
jN(a){this.mk(a).b0(new A.y9(),new A.ya(this),t.H)},
mi(){return this.jN(null)},
bc(a){return this.qd(a)},
qd(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$bc=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aN(n.dO()),$async$bc)
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
return A.a(n.aN(B.dR),$async$bc)
case 6:b3=b8==null
if(b3){a4=n.a.fy
a5=A.n(a4).i("R<1>")
a6=A.N(new A.R(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.t()
s=14
return A.a(a5.ds(h),$async$bc)
case 14:g=c0
J.d3(m,h,g.b)
if(g.f&&g.b>0)J.aM(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.D(b4)
if(a5 instanceof A.c6){n.jE()
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
return A.a(n.aN(B.aH),$async$bc)
case 17:q=n.ok=new A.ba(m,B.an,0,0,0,0,!0)
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
return A.a(b3.dI(e),$async$bc)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.T(l,c.a)
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
return A.a(n.aN(B.dS),$async$bc)
case 25:a=B.a4
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.t()
s=33
return A.a(b3.fC(),$async$bc)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.x.b6("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$bc)
case 36:a0=c0
if(J.d4(a0)&&typeof J.T(J.bE(a0),"last_error")=="string"){b3=J.T(J.bE(a0),"last_error")
b3.toString
n.ch=A.G(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.D(b6)
if(b3 instanceof A.c6)n.jE()
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
return A.a(b3.bz(),$async$bc)
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
break}if(J.an(i)!==0)n.tc(i)
a9=k||a.f
b0=new A.aH(A.lV(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dO()
s=42
return A.a(n.aN(a9&&b1===B.bo?B.bp:b1),$async$bc)
case 42:q=n.ok=new A.ba(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bc,r)}}
A.yi.prototype={
$1(a){return this.a.w5()},
$S:29}
A.y8.prototype={
$1(a){return this.a.h8()},
$S:43}
A.yg.prototype={
$1(a){return this.a.hd(this.b)},
$S:43}
A.yf.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.N(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jB()}if(r||p.length===0)s.mi()
else s.jN(p)},
$S:0}
A.ye.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jN(this.b)},
$S:0}
A.yh.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aN(p.dO()),$async$$0)
case 2:p.ca("cycle")
s=3
return A.a(p.eY(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.yb.prototype={
$1(a){return this.a.bc(this.b)},
$S:139}
A.yc.prototype={
$1(a){return B.O},
$S:140}
A.yd.prototype={
$1(a){return B.O},
$S:141}
A.y9.prototype={
$1(a){},
$S:142}
A.ya.prototype={
$2(a,b){var s=this.a
if(s.ch==null)s.ch=A.r(a)
s.aN(B.bp)},
$S:6}
A.da.prototype={
l(a){return"MapFailure: "+this.a},
$iH:1}
A.eL.prototype={}
A.Cu.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.Cv.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.j6.prototype={}
A.aQ.prototype={}
A.bx.prototype={}
A.hb.prototype={
al(a){var s=A.cb(a.c,t.N,t.X)
s.D(0,a.d)
s.D(0,a.e)
return new A.aQ(s,!1,null)}}
A.fS.prototype={
al(a){var s=A.cb(a.c,t.N,t.X)
s.D(0,a.e)
s.D(0,a.d)
return new A.aQ(s,!1,null)}}
A.hh.prototype={
al(a){return B.Q.al(a)},
fI(a,b,c){var s,r,q,p,o,n=t.j,m=n.b(a)?a:B.j,l=n.b(b)?b:B.j,k=n.b(c)?c:B.j,j=J.Df(m),i=J.Df(l),h=J.Df(k),g=i.f9(j),f=h.f9(j),e=j.f9(i),d=j.f9(h)
n=t.X
s=A.bW(e,n)
s.D(0,d)
r=j.nD(g).nD(f).f9(s)
q=[]
n=A.N(l,n)
B.b.D(n,k)
B.b.D(n,m)
s=n.length
p=0
for(;p<n.length;n.length===s||(0,A.p)(n),++p){o=n[p]
if(r.E(0,o)&&!B.b.E(q,o))q.push(o)}return q}}
A.ev.prototype={
al(a){return B.Q.al(a)}}
A.el.prototype={
al(a){return B.Q.al(a)},
fI(a,b,c){var s,r,q,p=t.j,o=p.b(a)?a:B.j,n=p.b(b)?b:B.j,m=p.b(c)?c:B.j,l=[]
p=A.N(o,t.X)
B.b.D(p,n)
B.b.D(p,m)
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.p)(p),++r){q=p[r]
if(!B.b.bj(l,new A.q0(q)))l.push(q)}return l}}
A.q0.prototype={
$1(a){return B.p.V(a,this.a)},
$S:15}
A.fs.prototype={
al(a){return B.Q.al(a)},
fI(a,b,c){var s,r,q,p=typeof a=="string"?a:"",o=typeof b=="string"?b:"",n=typeof c=="string"?c:"",m=A.l([],t.s),l=new A.q_(m)
for(s=p.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=o.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=n.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
return B.b.C(m,"\n")}}
A.q_.prototype={
$1(a){var s=B.a.c2(a)
if(s.length!==0&&!B.b.E(this.a,s))this.a.push(s)},
$S:144}
A.lO.prototype={
al(a){return this.a.$1(a)}}
A.mQ.prototype={}
A.B8.prototype={}
A.B6.prototype={}
A.zp.prototype={}
A.vK.prototype={
$1(a){if(a==null)return new A.aQ(A.NO(this.a,this.b,this.c),!0,"Collection resolver declined resolution")
return new A.aQ(a.a,a.b,a.c)},
$S:145}
A.vI.prototype={
$1(a){return a!=="archived"},
$S:13}
A.vJ.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.vH(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:146}
A.vB.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vC.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vD.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vE.prototype={
$1(a){return a instanceof A.w?a:A.bf(a,t.X)},
$S:147}
A.vF.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.dr(s,s.r,A.n(s).c),r=this.b,q=J.I(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:148}
A.vG.prototype={
$1(a){if(a==null||a.b){this.a.a=!0
return this.b}return a.a.h(0,this.c)},
$S:149}
A.w0.prototype={
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
for(l=J.E(o);l.k();)m.push(A.Ke(l.gn()))
l=A.aO(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.p)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.kZ(e,l),$async$fc)
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
ni(a){return this.a.a1(new A.w2(a),t.H)},
ws(a,b,c,d){return this.a.a1(new A.w3(c,d,b,a),t.H)}}
A.w2.prototype={
$1(a){return this.o3(a)},
o3(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w3.prototype={
$1(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.qe.prototype={}
A.j2.prototype={}
A.jA.prototype={}
A.w5.prototype={
fT(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cU(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
ex(a,b,c){return this.x8(a,b,c)},
x8(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$ex=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$ex)
case 3:p=e
o=J.I(p)
q=o.gF(p)?null:A.jr(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
c_(a,b,c){return this.xa(a,b,c)},
xa(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$c_=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$c_)
case 3:p=e
o=J.I(p)
q=o.gF(p)?null:A.hq(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
br(a,b,c,d,e,f,g,h,i,j,k,l){return this.ud(a,b,c,d,e,f,g,h,i,j,k,l)},
ud(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$br=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a6)throw A.b(A.F7("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ap
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.M
break A}if(B.D===a5){l=a6==null?B.v:B.a3
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.M
break B}if(B.D===a5){l=B.a3
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.D===a5){l=B.a3
break C}l=B.M
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.M
break D}if(B.D===a5){l=B.a3
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.X("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$br)
case 5:s=6
return A.a(a8.X("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$br)
case 6:s=7
return A.a(p.hD(a8,a2,a9),$async$br)
case 7:s=8
return A.a(a8.X(a2,"id = ?",[a9]),$async$br)
case 8:q=B.d6
s=1
break
case 4:k=p.a.db.$0()
j=a4?null:b2.w
if(j==null)j=p.fT()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.dj("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aO(l)
e=a4?null:b2.r
if(e!=null)f.D(0,e)
f.D(0,a7)
d=A.N(f,f.$ti.c)
B.b.aj(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a9(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.id(B.a_)
e=B.b.C(A.a8(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aI("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.HQ(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$br)
case 12:s=10
break
case 11:s=13
return A.a(a8.aI('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$br)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.D(f,B.cU)
if(o)B.b.D(f,B.cH)
s=a3?14:16
break
case 14:a3=A.id(B.Z)
l=B.b.C(A.a8(16,"?",!1,l),", ")
s=17
return A.a(a8.aI("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.I2(B.a7,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$br)
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
return A.a(a8.aI(a3.charCodeAt(0)==0?a3:a3,a1),$async$br)
case 18:case 15:q=new A.j2(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$br,r)},
hD(a,b,c){return this.tM(a,b,c)},
tM(a,b,c){var s=0,r=A.h(t.H)
var $async$hD=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cG(a,b,c,!1),$async$hD)
case 2:return A.e(null,r)}})
return A.f($async$hD,r)},
fd(a,b){return this.vi(a,b)},
vi(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.x
f=new A.a5("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.N([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ae("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$fd)
case 3:o=d
f=J.I(o)
if(f.gF(o)){q=B.cY
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.k();)n.push(A.jr(f.gn()))
f=A.aO(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.kZ(g,f),$async$fd)
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
l_(a){if(a.length===0)return A.bf(null,t.H)
return this.a.a1(new A.wb(this,a),t.H)},
aM(a,b){return this.tq(a,b)},
tq(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aM=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
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
return A.a(b.aJ("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 5:o=a9
n=J.I(o)
s=!(n.gS(o)&&!J.x(J.T(n.gH(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aM)
case 8:m=a9
n=J.I(m)
l=n.gS(m)?A.bP(a3,n.gH(m),a2.cx,a2.cy):null
s=9
return A.a(b.L(a,A.dw(a3,J.x(a5.h(0,"archived"),!0),a2.cx,a2.cy,a1,a5),"id = ?",[a1]),$async$aM)
case 9:a6.a2(new A.a4(a0,A.ap([a1],t.N)))
k=A.bN(l==null?B.k:l,a5)
k.G(0,"id")
a6.bF(B.A,k,a1,a5,l,B.ae,a0)
case 7:case 4:a=a3.a
s=10
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aM)
case 10:j=a9
a5=J.I(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 13:s=14
return A.a(p.da(b,a0,a1,a7.c,a4),$async$aM)
case 14:a6.a2(new A.a4(a0,A.ap([a1],t.N)))
s=1
break
case 12:n=a2.cx
a2=a2.cy
i=A.bP(a3,a5.gH(j),n,a2)
h=A.au(B.m.A(B.e.A(A.ak(A.bj(a3,i)))).a)
a5=a7.b
g=A.au(B.m.A(B.e.A(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 18:s=19
return A.a(p.da(b,a0,a1,a7.c,a4),$async$aM)
case 19:a6.a2(new A.a4(a0,A.ap([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aH(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bo(d,a5,f):A.u(a5,f)
s=23
return A.a(b.L(a,A.dw(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aM)
case 23:s=24
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 24:s=25
return A.a(p.da(b,a0,a1,a7.c,a4),$async$aM)
case 25:a6.a2(new A.a4(a0,A.ap([a1],a5)))
k=A.bN(i,c)
k.G(0,"id")
a6.bF(B.A,k,a1,c,i,B.ae,a0)
s=21
break
case 22:g=A.au(B.m.A(B.e.A(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aM)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aM)
case 28:a6.a2(new A.a4(a0,A.ap([a1],n)))
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
return A.a(a.L(q.a.aw(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$da)
case 3:return A.e(null,r)}})
return A.f($async$da,r)},
xb(a,b,c,d,e){return this.a.a1(new A.w9(c,e,d,B.G,a,b),t.H)},
nh(a,b,c,d,e,f){return this.a.a1(new A.w8(this,c,f,b,a,d,e),t.H)},
fq(a,b,c,d,e){return this.nh(a,b,c,d,B.ap,e)},
ng(a,b,c){return this.a.a1(new A.w7(a,c,b),t.H)},
xj(){return this.a.a1(new A.wa(null),t.S)},
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
A.wb.prototype={
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
A.w9.prototype={
$1(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w8.prototype={
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
return A.a(p.aF(0,"lp_dead_letter",A.m(["at",q.a.a.db.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w7.prototype={
$1(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.wa.prototype={
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
A.em.prototype={
a7(){return"ApplyResult."+this.b}}
A.ng.prototype={}
A.wZ.prototype={
ds(a){return this.wR(a)},
wR(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ds=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iD(b4),$async$ds)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.ID().ei(n)
if(m==null)A.v(A.aV('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.v(A.aV('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.Dk(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.wP(k))A.v(A.aV('Bad timestamp "'+n+'"'))
o=A.Oa(A.Dk(j,i,h,g,f,e,d).j5(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.fN(B.c.bs(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.Q,k=k.fy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.as
a4===$&&A.t()
s=6
return A.a(a4.fp(b4,null,a2,o,null,b),$async$ds)
case 6:a5=b6
a4=J.I(a5)
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
return A.a(A.ED(a7.a,a5),$async$ds)
case 8:s=7
return A.a(b0.b_(new b1.x6(b2,p,b3,b6,a6),l),$async$ds)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.ng(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ds,r)},
mx(a,b){var s=B.a.a3(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a3(a.a,b.b)<=0},
tE(a,b){var s=B.a.a3(a.c,b.c)
if(s!==0)return s>0
return B.a.a3(a.a,b.a)>0},
r3(a){var s,r,q,p=J.aw(a),o=p.gH(a)
for(p=p.b4(a,1),s=p.$ti,p=new A.as(p,p.gm(0),s.i("as<a_.E>")),s=s.i("a_.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.tE(q,o))o=q}return o},
i2(a){return this.vw(a)},
vw(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$i2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.b_(new A.x0(o,p,a),t.P),$async$i2)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
dl(a,b){return this.vz(a,b)},
vz(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dl=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bK(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.fy,e=n.b,d=A.a1(j),c=d.c,d=d.i("cx<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cx(j,0,200,d)
a2.j0(j,0,200,c)
a3=a2.bJ(0)
a4=a3.length
b&1&&A.J(j,18)
A.bh(0,a4,j.length)
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
return A.a(a7.c3(l),$async$dl)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.D(b1)
if(a7 instanceof A.cQ){J.aM(m,l)
s=6
break}else if(a7 instanceof A.c6)throw b1
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
case 7:s=J.an(m)!==0?13:14
break
case 13:s=15
return A.a(n.ft(b2,m),$async$dl)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.v(A.A(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.p)(a5),++a6)a2.push(A.EE(b0,a5[a6]))
s=16
return A.a(i.b_(new A.x2(n,a2,b2,b0),h),$async$dl)
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
h=B.b.U(a4,k,B.c.bs(i,0,j))
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
b.j(0,A.G(e),A.hq(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.v(A.A(l))
a0=J
s=9
return A.a(a1.bH(d.a.a,"id IN ("+g+")",h),$async$dY)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.G(e),A.bP(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a0(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
mH(a,b,c,d,e){return this.a8(a,b,A.EE(this.a.aw(b).a,c),null,!1,d,e)},
uf(a,b,c){return this.mH(a,b,c,null,!1)},
a8(a,b,c,d,e,f,g){return this.ue(a,b,c,d,e,f,g)},
mG(a,b,c){return this.a8(a,b,c,null,!1,null,!1)},
ue(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return A.a(n.bB(a4,a7,b2,a8,a9),$async$a8)
case 5:q=B.a9
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
return A.a(n.bB(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a8)
case 8:q=B.a9
s=1
break
case 7:g=a8.a
f=$.pU()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bB(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a8)
case 11:q=B.a9
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
return A.a(g.c_(a4,b2,a8.a),$async$a8)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aJ(a6.a,1,"id = ?",[a8.a]),$async$a8)
case 19:c=b9
g=J.I(c)
d=g.gF(c)?null:A.bP(a7,g.gH(c),a5.cx,a5.cy)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dr(a4,a8.a,a8.e,b2),$async$a8)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.IT(a4,a6.a,A.dw(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9)),$async$a8)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.dg(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 26:b1.a2(new A.a4(b2,A.ap([a8.a],t.N)))
b=A.bN(B.k,a9)
b.G(0,"id")
b1.bF(B.ad,b,a8.a,a9,null,B.av,b2)
q=B.a8
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
return A.a(n.cc(b1,b2,a8.a,a8.c,!1),$async$a8)
case 31:q=B.aa
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dw(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9),"id = ?",[a8.a]),$async$a8)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.dg(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 33:b1.a2(new A.a4(b2,A.ap([a8.a],t.N)))
b=A.bN(d,a9)
b.G(0,"id")
b1.bF(B.A,b,a8.a,a9,d,B.av,b2)
q=B.a8
s=1
break
case 28:s=a===B.G||a===B.br||a===B.a6?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.cc(b1,b2,a8.a,a8.c,!1),$async$a8)
case 38:q=B.aa
s=1
break
case 37:s=a===B.a6?39:40
break
case 39:s=41
return A.a(n.cc(b1,b2,a8.a,a8.c,!1),$async$a8)
case 41:q=B.aa
s=1
break
case 40:a0=A.bj(a7,d)
s=A.ak(a0)===i?42:43
break
case 42:s=44
return A.a(a4.X("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a8)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.dg(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a8)
case 45:b1.a2(new A.a4(b2,A.ap([a8.a],t.N)))
q=B.a8
s=1
break
case 43:l=null
p=47
a9=m
l=A.ic(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.D(b0)
s=a5 instanceof A.da?50:52
break
case 50:k=a5
s=53
return A.a(n.bB(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a8)
case 53:q=B.a9
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
f=A.HO(l,a0,new A.mQ(a9.a,g.b,f.c),a8.a,j,b2)
s=54
return A.a(t.fr.b(f)?f:A.bC(f,t.r),$async$a8)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eW(a4,b2,a8,a7,m,a0,l,a2),$async$a8)
case 57:s=58
return A.a(n.cc(b1,b2,a8.a,a8.c,!1),$async$a8)
case 58:a5=t.N
b1.a2(new A.a4(b2,A.ap([a8.a],a5)))
b1.a2(new A.a4("lp_conflicts",A.ap([a8.a],a5)))
q=B.bB
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dw(a7,J.x(a3.h(0,"archived"),!0),a5.cx,a5.cy,a9,a3),"id = ?",[a8.a]),$async$a8)
case 59:a5=a5.dx
a5===$&&A.t()
s=60
return A.a(a5.f3(a4,b2,a8.a,h,i,a8.c,A.ak(a3)),$async$a8)
case 60:s=61
return A.a(n.tB(b1,b2,a8.a,a8.c),$async$a8)
case 61:b1.a2(new A.a4(b2,A.ap([a8.a],t.N)))
b=A.bN(d,a3)
b.G(0,"id")
b1.bF(B.A,b,a8.a,a3,d,B.ae,b2)
q=B.a8
s=1
break
case 35:q=B.aa
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a8,r)},
eW(a,b,c,d,e,f,g,h){return this.rZ(a,b,c,d,e,f,g,h)},
rZ(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eW=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bj(d,A.fk(d,c))
k=A.bN(g,f)
j=A.N(k,A.n(k).c)
B.b.aj(j)
k=A.bN(g,l)
p=A.N(k,A.n(k).c)
B.b.aj(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ak(g)
n=t.N
m=t.X
s=2
return A.a(a.cl(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ak(f),"remote_json",A.ak(l),"dirty_local",B.h.a9(j,null),"dirty_remote",B.h.a9(p,null),"detected_at",q.c.ay.$0()],n,m),B.S),$async$eW)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(l),"base_hash",A.au(B.m.A(B.e.A(A.ak(A.bj(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eW)
case 3:return A.e(null,r)}})
return A.f($async$eW,r)},
bB(a,b,c,d,e){return this.rS(a,b,c,d,e)},
rS(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bB=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a9(d.d,null)}catch(a1){o=t.N
e=B.h.a9(A.m(["raw",d.d.l(0)],o,o),null)}o=d.a
s=2
return A.a(a.X("lp_dead_letter","store = ? AND record_id = ?",[c,o]),$async$bB)
case 2:n=q.c
m=n.ay
l=t.N
k=t.X
s=3
return A.a(a.aF(0,"lp_dead_letter",A.m(["at",m.$0(),"kind","map_failure","store",c,"record_id",o,"error",a0,"payload_json",e],l,k)),$async$bB)
case 3:j=q.a.dx
j===$&&A.t()
s=4
return A.a(j.c_(a,c,o),$async$bB)
case 4:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=g>=8?253402300799e3:m.$0()+B.c.M(n.mW(g).a,1000)
n=d.c
s=j?5:7
break
case 5:s=8
return A.a(a.aF(0,"lp_sync_row",A.m(["store",c,"record_id",o,"remote_updated",n,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bB)
case 8:s=6
break
case 7:s=9
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",n,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,o]),$async$bB)
case 9:case 6:return A.e(null,r)}})
return A.f($async$bB,r)},
dg(a,b,c,d,e,f,g,h){return this.tK(a,b,c,d,e,f,g,!0)},
tK(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$dg=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.aw(b)
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
return A.a(a.aF(0,"lp_sync_row",o),$async$dg)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$dg)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dg,r)},
cc(a,b,c,d,e){return this.tC(a,b,c,d,e)},
tB(a,b,c,d){return this.cc(a,b,c,d,!0)},
tC(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cc=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.u(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$cc)
case 2:s=3
return A.a(p.L(q.a.aw(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$cc)
case 3:if(g>0)a.a2(new A.a4(b,A.ap([c],o)))
return A.e(null,r)}})
return A.f($async$cc,r)},
ft(a,b){return this.wt(a,b)},
wt(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ft=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bK(b,!0,t.N)
n=A.a1(o),m=n.c,n=n.i("cx<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cx(o,0,500,n)
i.j0(o,0,500,m)
h=i.bJ(0)
g=h.length
l&1&&A.J(o,18)
A.bh(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.b_(new A.x4(p,a,h),j),$async$ft)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$ft,r)}}
A.x6.prototype={
$0(){var s=this,r=s.b
return r.a.a1(new A.x5(s.a,r,s.c,s.d,s.e),t.P)},
$S:22}
A.x5.prototype={
$1(a){return this.of(a)},
of(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.aw(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.aw(p),n=o.gt(p);n.k();)a3.push(n.gn().a.a)
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
if(c!=null&&a.mx(i,c)){s=3
break}p=i.a
s=j.E(0,p)?5:7
break
case 5:s=8
return A.a(a.mG(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.mx(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eC(b,a1,e,f),$async$$1)
case 10:d.a=new A.jy(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.x0.prototype={
$0(){var s=this.b
return s.a.a1(new A.x_(this.a,s,this.c),t.P)},
$S:22}
A.x_.prototype={
$1(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.dx
k===$&&A.t()
o=p.c
n=o.b
s=3
return A.a(k.c_(a.b,n,o.a),$async$$1)
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
if(k!=null&&B.a.a3(o.c,k)<=0){s=1
break}s=7
return A.a(l.mH(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.x2.prototype={
$0(){var s=this,r=s.a
return r.a.a1(new A.x1(r,s.b,s.c,s.d),t.P)},
$S:22}
A.x1.prototype={
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
return A.a(o.mG(a,m,h),$async$$1)
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
A.x4.prototype={
$0(){var s=this.a
return s.a.a1(new A.x3(s,this.b,this.c),t.P)},
$S:22}
A.x3.prototype={
$1(a){return this.oe(a)},
oe(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.aw(g).a
e=h.aw(g).a.a
d=q.c
c=t.N
b=B.b.C(A.a8(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.u(c,t.G)
a1=J
s=2
return A.a(i.bH(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.cx,h=h.cy
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.G(m),A.bP(f,n,o,h))
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
case 6:a2.a2(new A.a4(g,A.mN(d,A.a1(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.p)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dL(null,null,c,h)
p.D(0,j)
p.j(0,"hidden",!0)
a2.bF(B.ce,B.dI,k,p,j,B.av,g)}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b2.prototype={}
A.x7.prototype={
fC(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.dx
f===$&&A.t()
s=3
return A.a(f.fd(25,p.c.ay.$0()),$async$fC)
case 3:o=b
f=J.I(o)
if(f.gF(o)){q=B.a4
s=1
break}if(p.f){q=p.bf(o)
s=1
break}f=f.gt(o),n=B.a4
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
n=new A.b2(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
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
if(o==null){q=B.a4
s=1
break}s=4
return A.a(l.c_(m,o.a,o.b),$async$dZ)
case 4:n=c
if(n==null){q=B.a4
s=1
break}if(o.e==null){q=p.rK(o,n)
s=1
break}q=p.jF(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
bQ(a,b,c,d,e){return this.qT(a,b,c,d,e)},
qS(a,b,c,d){return this.bQ(a,b,c,!1,d)},
qQ(a,b,c){return this.bQ(a,b,c,!1,!1)},
qR(a,b,c,d){return this.bQ(a,b,c,d,!1)},
qT(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bQ=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bQ)
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
s=k instanceof A.c6?8:10
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
return A.a(k.ng("forbidden_push",a.b,a.a),$async$bQ)
case 14:q=B.dr
s=1
break
s=12
break
case 13:s=k instanceof A.eN?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.d7(a,"validation_push",m.a),$async$bQ)
case 20:q=B.F
s=1
break
case 19:q=n.cE(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cQ){q=n.cC(a,b,!e)
s=1
break}else if(k instanceof A.br){l=k
q=n.cE(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bQ,r)},
hs(a,b,c){return this.rL(a,b,c)},
rK(a,b){return this.hs(a,b,!1)},
rL(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$hs=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bQ(a,b,new A.x9(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
jJ(a,b,c){return this.t_(a,b,c)},
t_(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jJ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qS(a,b,new A.xe(p,a,p.a.aw(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jJ,r)},
jF(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qQ(a,b,new A.xc(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jF,r)},
dc(a,b,c,d){return this.rP(a,b,c,d)},
rO(a,b,c){return this.dc(a,b,c,!1)},
rP(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$dc=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.lh(a,c)
j=n.a.aw(a.a).a
i=a.d
s=A.au(B.m.A(B.e.A(A.ak(A.bj(j,A.fk(j,c))))).a)===A.au(B.m.A(B.e.A(i)).a)?3:4
break
case 3:s=5
return A.a(n.eU(a,c),$async$dc)
case 5:q=B.a5
s=1
break
case 4:m=null
l=null
p=7
m=A.ic(b.r)
l=A.ic(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.D(f)
s=i instanceof A.da?10:12
break
case 10:k=i
s=13
return A.a(n.d7(a,"corrupt_payload",k.a),$async$dc)
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
return A.a(n.dV(a,b,c,j,m,l),$async$dc)
case 14:g=a0
if(g==null){q=B.bi
s=1
break}q=n.bQ(a,b,new A.xa(n,a,A.ak(A.bj(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dc,r)},
bf(a){return this.rJ(a)},
rJ(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$bf=A.c(function(d1,d2){if(d1===1){o.push(d2)
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
return A.a(a2.ex(a0,a1.a,a1.b),$async$bf)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.c_(a0,m.a,m.b),$async$bf)
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
return A.a(a5.c3(a1),$async$bf)
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
return A.a(n.lQ(m,l),$async$bf)
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
case 14:s=a1 instanceof A.c6?18:20
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
return A.a(a2.ng("forbidden_push",m.b,a1),$async$bf)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.br?25:27
break
case 25:i=a1
s=28
return A.a(n.cE(m,l,i),$async$bf)
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
if(a1!==a5)A.v(A.eH('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a5("")
A.cl(a7,A.bj(a4,A.fk(a4,k)))
a1=a7.a
a1=B.e.A(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c8()
a5=A.d_(a8)
a5.u(0,a1)
a5.q()
a9=A.au(a8.a.a)
a5=B.e.A(m.d)
a8=new A.c8()
a1=A.d_(a8)
a1.u(0,a5)
a1.q()
s=a9===A.au(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eU(m,k),$async$bf)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.ic(l.r)
f=A.ic(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.D(c9)
s=a1 instanceof A.da?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fq(e.a,a5,"corrupt_payload",m.d,a1),$async$bf)
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
return A.a(n.dV(m,l,k,a4,g,f),$async$bf)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a5("")
A.cl(a7,A.bj(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.h7(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.h7(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.cb(B.b.U(b9,b5,b7<b6?b7:b6),c1,c7),$async$bf)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b2(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b2(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bf,r)},
dV(a,b,c,d,e,f){return this.r4(a,b,c,d,e,f)},
r4(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n
var $async$dV=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=d.e
n=A.HO(e,f,new A.mQ(n.a,n.b,n.c),a.b,A.bj(d,A.fk(d,c)),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bC(n,t.r),$async$dV)
case 3:o=h
s=o.b?4:5
break
case 4:s=6
return A.a(p.ht(a,b,c,o,e,f),$async$dV)
case 6:q=null
s=1
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
cb(a,b,c){return this.tj(a,b,c)},
tj(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$cb=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.as
a7===$&&A.t()
s=7
return A.a(a7.fB(b9),$async$cb)
case 7:m=c3
a7=t.N
l=A.u(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.p)(b9),++a9){k=b9[a9]
J.d3(l,k.a,k)}j=l
i=A.aO(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aM(i,h.a)){l=A.aV("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aV("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.T(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jz(e,c1.h(0,e.a))
b0=B.e.A(e.d)
b1=new A.c8()
b2=A.d_(b1)
b2.u(0,b0)
b2.q()
b2=A.au(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aM(g,new A.jA(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
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
return A.a(a8.fq(b4,b2,b3,e.d,b0),$async$cb)
case 13:++b7
case 11:s=8
break
case 9:l=a7.dx
l===$&&A.t()
s=14
return A.a(l.l_(g),$async$cb)
case 14:l=b6
a7=b7
q=new A.b2(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.D(b8)
s=l instanceof A.en?15:17
break
case 15:q=n.c6(b9,c0,c1)
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
return A.a(n.dZ(n.lX(a0)),$async$cb)
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
case 23:q=new A.b2(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.c6?25:27
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
a3=a2 instanceof A.dU?a2:new A.eW("network error")
l=b9.length,a7=n.a,a8=a7.x,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.dx
b0===$&&A.t()
s=34
return A.a(b0.c_(a8,a4.b,a4.c),$async$cb)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cE(n.lX(a4),a5,a3),$async$cb)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.p)(b9),++a9
s=31
break
case 33:q=new A.b2(b6,b7,0,0,0,!0)
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
return A.f($async$cb,r)},
c6(a,b,c){return this.px(a,b,c)},
px(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$c6=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.I(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gao(b5)
h=n.a.dx
h===$&&A.t()
b3=g.b
s=5
return A.a(h.fq("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$c6)
case 5:q=B.F
s=1
break
case 4:a0=B.c.M(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.U(b5,0,a0),b3.bb(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.as
a6===$&&A.t()
s=13
return A.a(a6.fB(j),$async$c6)
case 13:i=b9
h=A.u(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.d3(h,g.a,g)}f=h
e=A.aO(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aM(e,d.a)){a6=A.aV("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aV("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.T(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jz(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.e_(a7,a8,a9,b0==null?b.d:b0),$async$c6)
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
return A.a(a7.fq(b1,a9,b0,b.d,a8),$async$c6)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.D(b4)
s=a6 instanceof A.en?21:23
break
case 21:s=24
return A.a(n.c6(j,b6,b7),$async$c6)
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
case 8:q=new A.b2(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c6,r)},
jz(a,b){var s=b==null?a.d:b
return new A.cr(a.b,a.c,B.v,s,a.e,A.au(B.m.A(B.e.A(a.d)).a),B.u,a.a,0,null)},
lX(a){return this.jz(a,null)},
e_(a,b,c,d){return this.tp(a,b,c,d)},
eU(a,b){return this.e_(a,b,null,null)},
tp(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$e_=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(a.a).a
n=A.fk(o,b)
m=d==null
l=m?A.ak(A.bj(o,n)):d
p=p.dx
p===$&&A.t()
s=2
return A.a(p.l_(A.l([new A.jA(a,l,b.c,A.au(B.m.A(B.e.A(m?a.d:d)).a),c)],t.bo)),$async$e_)
case 2:return A.e(null,r)}})
return A.f($async$e_,r)},
lh(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.eH('record id "'+s+'" does not match requested "'+r+'"'))},
cE(a,b,c){return this.t7(a,b,c)},
t7(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.dU?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.dx
o===$&&A.t()
s=5
return A.a(o.nh(c.a,a.b,"max_attempts",a.d,B.ap,a.a),$async$cE)
case 5:q=B.F
s=1
break
case 4:o=p.c
n=o.mX(l,k)
m=p.a.dx
m===$&&A.t()
s=6
return A.a(m.xb(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$cE)
case 6:q=B.ao
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cE,r)},
d7(a,b,c){return this.q6(a,b,c)},
lB(a,b){return this.d7(a,b,null)},
q6(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.dx
o===$&&A.t()
p=c==null?b:c
s=2
return A.a(o.fq(p,a.b,b,a.d,a.a),$async$d7)
case 2:return A.e(null,r)}})
return A.f($async$d7,r)},
cC(a,b,c){return this.qL(a,b,c)},
lQ(a,b){return this.cC(a,b,!0)},
qL(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cC=A.c(function(d,e){if(d===1){o.push(e)
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
m=A.ic(b.r)
l=A.ic(a.d)
p=2
s=11
break
case 9:p=8
g=o.pop()
i=A.D(g)
s=i instanceof A.da?12:14
break
case 12:k=i
s=15
return A.a(n.d7(a,"corrupt_payload",k.a),$async$cC)
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
return A.a(n.hb(a,b,m,l),$async$cC)
case 16:q=B.bi
s=1
break
case 6:s=!c?17:18
break
case 17:s=19
return A.a(n.lB(a,"missing_target"),$async$cC)
case 19:q=B.F
s=1
break
case 18:q=n.hs(a,b,!0)
s=1
break
case 7:s=20
return A.a(i.bt(h).iB(a.b),$async$cC)
case 20:q=B.dq
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cC,r)},
hb(a,b,c,d){return this.qm(a,b,c,d)},
qm(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$hb=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bN(c,d)
n=A.N(o,A.n(o).c)
B.b.aj(n)
p=b.r
if(p==null)p=A.ak(c)
s=2
return A.a(q.a.a1(new A.x8(q,a,p,d,n),t.P),$async$hb)
case 2:return A.e(null,r)}})
return A.f($async$hb,r)},
ht(a,b,c,d,e,f){return this.rY(a,b,c,d,e,f)},
rY(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$ht=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.aw(a.a).a
m=A.bj(n,A.fk(n,c))
l=A.bN(e,f)
k=A.N(l,A.n(l).c)
B.b.aj(k)
l=A.bN(e,m)
p=A.N(l,A.n(l).c)
B.b.aj(p)
s=2
return A.a(o.a1(new A.xd(q,a,b,e,f,m,k,p,n,c),t.P),$async$ht)
case 2:return A.e(null,r)}})
return A.f($async$ht,r)}}
A.x9.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.as
j===$&&A.t()
s=7
return A.a(j.hX(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eU(k,m),$async$$0)
case 8:q=B.a5
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.D(h) instanceof A.fF){q=n.a.jJ(n.b,n.c,n.d)
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
A.xe.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.as
l===$&&A.t()
s=3
return A.a(l.c3(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.lB(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.F
s=1
break
case 5:l=p.c
s=A.au(B.m.A(B.e.A(A.ak(A.bj(l,A.fk(l,o))))).a)===A.au(B.m.A(B.e.A(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eU(m,o),$async$$0)
case 9:q=B.a5
s=1
break
case 8:q=n.dc(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.xc.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.as
l===$&&A.t()
s=3
return A.a(l.c3(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lQ(m,p.c)
s=1
break}n.lh(m,o)
if(o.c===m.e){l=p.c
q=n.qR(m,l,new A.xb(n,m,o,l),!0)
s=1
break}q=n.rO(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.xb.prototype={
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
case 8:q=B.a5
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
A.xa.prototype={
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
case 3:q=B.a5
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.x8.prototype={
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
return A.a(p.cl(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ak(q.d),"remote_json",A.ak(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a9(q.e,null),"dirty_remote",B.h.a9(B.u,null),"detected_at",q.a.c.ay.$0()],k,j),B.S),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a2(new A.a4(n,A.ap([m],k)))
a.a2(new A.a4("lp_conflicts",A.ap([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.xd.prototype={
$1(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cl(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ak(q.e),"remote_json",A.ak(o),"dirty_local",B.h.a9(q.r,null),"dirty_remote",B.h.a9(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.S),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(o),"base_hash",A.au(B.m.A(B.e.A(A.ak(A.bj(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a2(new A.a4(j,A.ap([k],n)))
a.a2(new A.a4("lp_conflicts",A.ap([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.cg.prototype={
a7(){return"SyncEngineState."+this.b}}
A.hp.prototype={}
A.y5.prototype={
glj(){return 36},
dI(a){return this.p8(a)},
p8(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dI=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.fy,g=new A.bJ(g,g.r,g.e,A.n(g).i("bJ<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iE(m),$async$dI)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glj():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.an(c.a+1,n.glj())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bN(m,a),$async$dI)
case 13:a5.aM(a6,a9)
case 11:++j
s=10
break
case 12:if(A.ob(h)!=null)A.v(A.A(u.L))
b=h.b
b===$&&A.t()
s=14
return A.a(b.b1(new A.y6(c,n,m,a3),B.q,f),$async$dI)
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
bN(a,b){return this.p7(a,b)},
p7(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bN=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.S("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aO(t.N)
m=B.c.fN(B.c.bs(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.as
g===$&&A.t()
s=5
return A.a(g.fp(a4,B.d1,h,null,o,m),$async$bN)
case 5:f=a7
g=J.I(f)
if(g.gF(f)){s=4
break}for(e=g.gt(f);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=g.gt(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hr(a4,e),$async$bN)
case 6:c=a7
b=A.l([],l)
for(e=g.gt(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aS||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dl(a4,b),$async$bN)
case 9:i+=b.length
case 8:h=g.ga_(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.x
g=o+"%"
s=10
return A.a(k.ae("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bN)
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
return A.a(j.ft(a4,a2),$async$bN)
case 13:case 12:s=14
return A.a(k.ae("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bN)
case 14:a3=a7
k=J.I(a3)
s=k.gS(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.G(g))}s=17
return A.a(j.dl(a4,l),$async$bN)
case 17:case 16:q=new A.hp(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
hr(a,b){return this.rE(a,b)},
rE(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.u(g,t.o)
o=p.a.x,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.U(b,n,B.c.bs(l,0,m))
j=B.b.C(A.a8(k.length,"?",!1,g),", ")
m=[a]
B.b.D(m,k)
e=J
s=6
return A.a(o.ae(u.m+j+")",m),$async$hr)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.G(h),A.hq(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)}}
A.y6.prototype={
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
A.eW.prototype={}
A.dU.prototype={}
A.jL.prototype={}
A.c6.prototype={}
A.cM.prototype={}
A.cQ.prototype={}
A.eN.prototype={}
A.h5.prototype={}
A.fF.prototype={}
A.yj.prototype={}
A.en.prototype={}
A.hn.prototype={
gm(a){return this.b}}
A.df.prototype={}
A.h7.prototype={}
A.jz.prototype={}
A.lk.prototype={
a7(){return"BackendHintKind."+this.b}}
A.cI.prototype={}
A.CF.prototype={
$2(a,b){return B.a.ix(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:153}
A.o4.prototype={
gnv(){return 1}}
A.y7.prototype={
mX(a,b){var s,r
if(b!=null){s=this.rs(b)
if(A.a9(s))return A.bS(0,0,s<0?0:s)
if(s instanceof A.aH){r=s.a-this.ay.$0()
return r<=0?B.I:A.bS(0,r,0)}return B.aw}return A.HI(a,B.aw,B.ag,this.at)},
mW(a){return this.mX(a,null)},
rs(a){var s=B.a.c2(a),r=A.h4(s,null)
if(r!=null)return r
return A.KQ(s)}}
A.jy.prototype={}
A.jT.prototype={}
A.yl.prototype={
iD(a){return this.x7(a)},
x7(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.ev("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iD)
case 3:m=c
l=J.I(m)
if(l.gF(m)){q=null
s=1
break}o=A.a7(J.T(l.gH(m),"cursor_updated"))
n=A.a7(J.T(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jy(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iD,r)},
eC(a,b,c,d){return this.xW(a,b,c,d)},
xW(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eC=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aJ("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eC)
case 5:s=m.bw(f)?2:4
break
case 2:s=6
return A.a(a.aF(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eC)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eC)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eC,r)},
iE(a){return this.x9(a)},
x9(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.ev("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iE)
case 3:n=c
m=J.I(n)
if(m.gF(n)){q=B.dO
s=1
break}o=A.aX(J.T(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jT(o,A.aX(J.T(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iE,r)},
eD(a,b,c,d){return this.y_(a,b,c,d)},
y_(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eD=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aJ("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eD)
case 5:s=m.bw(f)?2:4
break
case 2:s=6
return A.a(a.aF(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eD)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eD)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eD,r)},
hT(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.b6("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hT)
case 3:l=b
k=J.I(l)
j=k.gF(l)?B.k:k.gH(l)
k=A.aX(j.h(0,"pending"))
if(k==null)k=0
o=A.aX(j.h(0,"conflicts"))
if(o==null)o=0
n=A.aX(j.h(0,"hidden"))
if(n==null)n=0
m=A.aX(j.h(0,"blocked"))
q=new A.pc([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)}}
A.cU.prototype={
a7(){return"SyncState."+this.b}}
A.fq.prototype={
a7(){return"AccessState."+this.b}}
A.h2.prototype={
a7(){return"OutboxKind."+this.b}}
A.jq.prototype={
a7(){return"OpQueueKind."+this.b}}
A.D0.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cT.prototype={}
A.yk.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
i=j.h(0,"record_id")
i.toString
A.G(i)
i=A.a7(j.h(0,"remote_updated"))
s=A.aX(j.h(0,"last_seen_at"))
r=A.a7(j.h(0,"base_updated"))
A.a7(j.h(0,"base_hash"))
q=A.a7(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fH(B.cM,A.G(p))
A.HE(j.h(0,"dirty_fields"))
o=A.aX(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fH(B.cL,A.G(n))
A.a7(j.h(0,"op_id"))
m=A.aX(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.aX(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a7(j.h(0,"last_error"))
A.aX(j.h(0,"schema_ver"))
return new A.cT(i,s,r,q,p,o,n,m,l,k)},
$S:154}
A.cr.prototype={}
A.w6.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
s=j.h(0,"record_id")
s.toString
A.G(s)
r=j.h(0,"kind")
r.toString
r=A.fH(B.cV,A.G(r))
q=j.h(0,"payload_json")
q.toString
A.G(q)
p=A.a7(j.h(0,"base_updated"))
o=A.a7(j.h(0,"base_hash"))
if(o==null)o=""
n=A.HE(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.G(m)
l=j.h(0,"created_at")
l.toString
A.aj(l)
k=j.h(0,"updated_at")
k.toString
A.aj(k)
return new A.cr(i,s,r,q,p,o,n,m,l,A.a7(j.h(0,"depends_on_op")))},
$S:155}
A.eM.prototype={}
A.w1.prototype={
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
q=A.fH(B.cQ,A.G(q))
p=m.h(0,"payload_json")
p.toString
A.G(p)
o=m.h(0,"state")
o.toString
A.G(o)
o=A.aX(m.h(0,"attempt_count"))
if(o==null)o=0
A.aX(m.h(0,"next_retry_at"))
A.a7(m.h(0,"last_error"))
n=A.a7(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.aj(m)
return new A.eM(l,s,r,q,p,o,n)},
$S:156}
A.CZ.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:55}
A.D_.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:55}
A.bL.prototype={
a2(a){this.c.push(a)
this.a.Q.r+=a.b.a},
u5(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bF(a,b,c,d,e,f,g){var s
if(this.a.a$.b.d==null)return
if(b==null){s=e==null?d:e
s=J.J1((s==null?B.k:s).gJ(),new A.yx()).cr(0)}else s=b
this.u5(new A.dT(g,c,f,a,e,d,s))},
kh(a,b,c,d,e,f){return this.bF(a,null,b,c,d,e,f)},
bt(a){var s=this.a
return new A.fx(s,s.aw(a),new A.iG(this.b),this)},
a1(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.A("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cK(o,a,b)},
cK(a,b,c){return this.tT(a,b,c,c)},
tT(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cK=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cK)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.Q
k=e.r
p=5
d=A.DX(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pQ(new A.yw(a3,j,a4),null,A.m([$.l3(),j],f,f),a4.i("y<0>")),$async$cK)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cK)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cK)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cK)
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
if(a>m)B.b.iI(h,m,a)
a=g.length
if(a>l)B.b.iI(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cK,r)}}
A.yx.prototype={
$1(a){return a!=="id"},
$S:13}
A.yw.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.Bd.prototype={}
A.lZ.prototype={
a7(){return"DurabilityClass."+this.b}}
A.yo.prototype={
b1(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.B,t._)
r.c.push(new A.hF(a,new A.aF(s,t.jk)))
return s.W(new A.yv(c),c)}return this.tv(a,b,c)},
tv(a,b,c){var s,r,q,p=this
if(p.a.ax.a>0){s=p.c
if(s!=null)s.km()}s=A.l([],t.i4)
r=new A.oK(p,b,s)
p.c=r
r.xk()
q=new A.w($.B,t._)
s.push(new A.hF(a,new A.aF(q,t.jk)))
return q.W(new A.yr(c),c)},
x5(a,b){var s,r=this.a
if(r.ax.a>0){s=this.c
if(s!=null)s.km()}return r.e.b_(new A.yu(this,a,b),b)},
r8(){if(++this.d<64)return
this.d=0
A.c_(B.I,new A.yq(this))}}
A.yv.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yr.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yu.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a1(new A.yt(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.yt.prototype={
$1(a){return this.ol(a,this.c)},
ol(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.DX(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pQ(new A.ys(p.b,o,n),null,A.m([$.l3(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(rw)")}}
A.ys.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.yq.prototype={
$0(){var s=this.a.a.a.e
s===$&&A.t()
s.iM().k6(new A.yp())},
$S:0}
A.yp.prototype={
$1(a){},
$S:20}
A.oK.prototype={
xk(){var s,r,q=this,p=new A.aF(new A.w($.B,t.D),t.h)
q.e=p
s=q.a.a
s.e.b_(new A.A1(q,p),t.H)
r=s.ax
s=q.gvF()
if(r.a>0)A.c_(r,s)
else A.c_(B.I,s)},
km(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.ak()},
cP(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cP=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jQ()
$.l1()
b3.aC()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.b0&&b4.w!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:b5=b4.e
b5===$&&A.t()
s=5
return A.a(b5.nC("PRAGMA synchronous=FULL",null),$async$cP)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a1(new A.A0(m,i,h,l,g),t.P),$async$cP)
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
b8.ap(A.fd(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.v(A.A("Future already completed"))
b8.aG(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.fy,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.wb(a0.b)
b6.kg(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a1=f[b7]
b6.vk(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.D(c2)
a3=A.ae(c2)
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
b6.ap(A.fd(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.v(A.A("Future already completed"))
b6.ap(A.fd(a2,a3))}}throw c2
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
return A.a(f.nC("PRAGMA synchronous=NORMAL",null),$async$cP)
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
a4.ap(A.fd(new A.bp("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cP,r)}}
A.A1.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cP(),$async$$0)
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
A.A0.prototype={
$1(a){return this.om(a)},
om(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.DX(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pQ(new A.zZ(a,a0),null,A.m([$.l3(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.f9([B.b.gao(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.D(a1)
l=A.ae(a1)
o.e.push(new A.f9([B.b.gao(a.c),null,m,l]))
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
return A.a(A.pQ(new A.A_(a0,k),null,A.m([$.l3(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.f9([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.D(a2)
h=A.ae(a2)
e.push(new A.f9([k,null,i,h]))
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
A.zZ.prototype={
$0(){return B.b.gao(this.a.c).a.$1(this.b)},
$S:56}
A.A_.prototype={
$0(){return this.a.a1(new A.zY(this.b),t.z)},
$S:56}
A.zY.prototype={
$1(a){return this.a.a.$1(a)},
$S:159}
A.hF.prototype={}
A.nk.prototype={
l0(a){return a.a===this.x.b.a},
fh(){var s=this.x
return s.eg(s.w==null&&!s.x?50:null).W(new A.xt(),t.J)},
mQ(a){return A.NM(a,new A.xs(this),this.x.r.length!==0)},
nk(a){var s=this.y
return s==null?null:s.u(0,a)},
kA(a,b){var s=this.y
return s==null?null:s.bi(a,b)},
iY(){var s=this.y=A.nL(this.gke(),new A.xu(this),null,null,!1,t.J)
return new A.bc(s,A.n(s).i("bc<1>"))},
fa(){this.l6()
var s=this.y
if(s!=null)s.q()}}
A.xt.prototype={
$1(a){return a.a},
$S:160}
A.xs.prototype={
$1(a){return this.a.a.Q.Q+=a},
$S:9}
A.xu.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.e7(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.n3.prototype={
l0(a){var s
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
return A.a(l.gbv().b.aJ(o.a,1,"id = ?",[p.y]),$async$fh)
case 3:n=b
l=J.I(n)
if(l.gF(n)){q=null
s=1
break}q=A.bP(o,l.gH(n),m.cx,m.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
mQ(a){return a==null?"<null>":A.au(B.m.A(B.e.A(A.ak(a))).a)},
nk(a){var s=this.z
return s==null?null:s.u(0,a)},
kA(a,b){var s=this.z
return s==null?null:s.bi(a,b)},
iY(){var s=this.z=A.nL(this.gke(),new A.w_(this),null,null,!1,t.b)
return new A.bc(s,A.n(s).i("bc<1>"))},
fa(){this.l6()
var s=this.z
if(s!=null)s.q()}}
A.w_.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.e7(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fw.prototype={
kA(a,b){},
aC(){var s=this.a.a$.a
this.c=new A.b6(s,A.n(s).i("b6<1>")).aW(this.gra())},
rb(a){var s,r=this
if(!r.l0(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.v()
r.d=A.c_(r.b,r.gmB())},
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
break}k=m.mQ(l)
if(!J.x(k,m.w)){m.w=k;++h.z
m.nk(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.D(f)
i=A.ae(f)
if(!m.r)m.kA(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.v()
m.d=A.c_(m.b,m.gmB())}s=n.pop()
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
A.zk.prototype={
b_(a,b){var s,r=this;++r.b
r.m2()
s=new A.w($.B,b.i("w<0>"))
r.a=r.a.W(new A.zl(r,new A.aF(s,b.i("aF<0>")),a),t.H)
return s},
m2(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.zl.prototype={
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
l=A.ae(i)
n.b.bu(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.m2()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:43}
A.hA.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.yY.prototype={
$2(a,b){return new A.U(J.Z(a),b,t.eB)},
$S:47}
A.or.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.yV.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.yT.prototype={
eR(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eR=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.ie()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a3(n.getDirectory(),l),$async$eR)
case 7:m=b
s=8
return A.a(A.a3(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eR)
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
hm(){var s=0,r=A.h(t.y),q,p=this,o
var $async$hm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.w){q=!1
s=1
break}o=p.r
s=o==null?3:5
break
case 3:s=6
return A.a(p.eR(),$async$hm)
case 6:b=p.r=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hm,r)},
bd(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bd=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.x
if(h!=null){q=h
s=1
break}s=3
return A.a(n.hm(),$async$bd)
case 3:if(!b){q=null
s=1
break}p=5
m=A.ie()
if(m==null){q=null
s=1
break}j=t.m
s=8
return A.a(A.a3(m.getDirectory(),j),$async$bd)
case 8:l=b
f=A
s=9
return A.a(A.a3(l.getDirectoryHandle("localpocket_blobs",{create:!0}),j),$async$bd)
case 9:k=new f.p7(b)
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
return A.f($async$bd,r)},
gfm(){var s=0,r=A.h(t.y),q,p=this
var $async$gfm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bd(),$async$gfm)
case 3:q=b!=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gfm,r)},
cq(a,b,c){return this.wU(a,b,c)},
iC(a){return this.cq(a,null,null)},
wU(a,a0,a1){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b
var $async$cq=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:f=new A.zJ(A.l([],t.bs))
s=3
return A.a(A.kY(a,a0,a1,null,268435456,new A.yU(f)),$async$cq)
case 3:e=a3
d=f.kK()
s=4
return A.a(m.bd(),$async$cq)
case 4:c=a3
s=c!=null?5:7
break
case 5:l="tmp_"+e.a
p=8
s=11
return A.a(c.az(l,d),$async$cq)
case 11:s=12
return A.a(c.az(e.a,d),$async$cq)
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
p=14
s=17
return A.a(c.G(0,l),$async$cq)
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
if(h>134217728)A.v(A.ip(A.A("volatile blob memory cap exceeded: would reach "+h+" of 134217728 bytes"),j))
m.d.j(0,j,i)
m.e+=g
case 6:q=e.a
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cq,r)},
cV(a){return this.wE(a)},
wE(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cV=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.lt(a)
j=n.d
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.DR(j,t.L)
s=1
break}s=3
return A.a(n.bd(),$async$cV)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.ew(a),$async$cV)
case 10:l=c
j=A.DR(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.D(h)
if(!(k instanceof A.fu))throw A.b(A.ip(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.A("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cV,r)},
dj(a){return this.uJ(a)},
uJ(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$dj=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.lt(a)
l=o.d.G(0,a)
if(l!=null)o.e=o.e-l.length
s=2
return A.a(o.bd(),$async$dj)
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
if(!(m instanceof A.fu))throw A.b(A.ip(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dj,r)},
bw(a){return this.vt(a)},
vt(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lt(a)
if(p.d.I(a)){q=!0
s=1
break}s=3
return A.a(p.bd(),$async$bw)
case 3:o=c
if(o!=null){q=o.bw(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bw,r)},
bo(a){return this.oJ(a)},
oJ(a){var s=0,r=A.h(t.aV),q,p=this,o,n
var $async$bo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lt(a)
o=p.d
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bd(),$async$bo)
case 3:n=c
if(n!=null){q=n.bo(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bo,r)},
ec(a){return this.un(a)},
un(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ec=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bd(),$async$ec)
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
if(!J.IZ(l,"tmp_")){s=9
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
i=A.bW(new A.R(j,A.n(j).i("R<1>")),t.N)
s=3
return A.a(n.bd(),$async$fn)
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
l=$.EH()
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
A.yU.prototype={
$1(a){return this.a.u(0,a)},
$S:11}
A.p7.prototype={
ew(a){return this.x6(a)},
x6(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$ew=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a3(n.a.getFileHandle(a,{create:!1}),i),$async$ew)
case 7:m=c
s=8
return A.a(A.a3(m.getFile(),i),$async$ew)
case 8:l=c
s=9
return A.a(A.a3(l.arrayBuffer(),t.a),$async$ew)
case 9:k=c
i=A.bY(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.D(g)
if(A.G1(j))throw A.b(A.F_(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ew,r)},
az(a,b){return this.xV(a,b)},
xV(a1,a2){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$az=A.c(function(a3,a4){if(a3===1){p.push(a4)
s=q}for(;;)switch(s){case 0:h=o.a
g=t.m
a0=A
s=3
return A.a(A.a3(h.getFileHandle(a1,{create:!0}),g),$async$az)
case 3:s=2
return A.a(a0.a3(a4.createWritable(),g),$async$az)
case 2:f=a4
q=5
j=t.X
s=8
return A.a(A.a3(f.write(t.a.a(B.f.gac(a2))),j),$async$az)
case 8:s=9
return A.a(A.a3(f.close(),j),$async$az)
case 9:q=1
s=7
break
case 5:q=4
e=p.pop()
n=A.D(e)
q=11
s=14
return A.a(A.a3(f.abort(),t.X),$async$az)
case 14:q=4
s=13
break
case 11:q=10
d=p.pop()
s=13
break
case 10:s=4
break
case 13:throw A.b(A.ip(n,a1))
s=7
break
case 4:s=1
break
case 7:q=16
s=19
return A.a(A.a3(h.getFileHandle(a1,{create:!1}),g),$async$az)
case 19:m=a4
s=20
return A.a(A.a3(m.getFile(),g),$async$az)
case 20:l=a4
g=a2.length
s=!J.x(l.size,g)?21:22
break
case 21:q=24
s=27
return A.a(A.ml(h,a1),$async$az)
case 27:q=16
s=26
break
case 24:q=23
c=p.pop()
s=26
break
case 23:s=16
break
case 26:g=A.ip(A.A("write verification failed: persisted "+A.r(A.CJ(l,"size"))+" of "+g+" bytes"),a1)
throw A.b(g)
case 22:q=1
s=18
break
case 16:q=15
b=p.pop()
g=A.D(b)
s=g instanceof A.io?28:30
break
case 28:throw b
s=29
break
case 30:k=g
q=32
s=35
return A.a(A.ml(h,a1),$async$az)
case 35:q=15
s=34
break
case 32:q=31
a=p.pop()
s=34
break
case 31:s=15
break
case 34:throw A.b(A.ip(k,a1))
case 29:s=18
break
case 15:s=1
break
case 18:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$az,r)},
G(a,b){return this.xh(0,b)},
xh(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$G=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.ml(o.a,b),$async$G)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.D(l)
if(A.G1(n))throw A.b(A.F_(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$G,r)},
bw(a){return this.vu(a)},
vu(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bw=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a3(n.a.getFileHandle(a,{create:!1}),t.m),$async$bw)
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
return A.f($async$bw,r)},
bo(a){return this.oK(a)},
oK(a){var s=0,r=A.h(t.aV),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bo=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a3(n.a.getFileHandle(a,{create:!1}),k),$async$bo)
case 7:m=c
s=8
return A.a(A.a3(m.getFile(),k),$async$bo)
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
return A.f($async$bo,r)},
eo(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$eo=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.cD(A.cE(A.Ff(m.a),"stream",t.K),t.hT)
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
$iFC:1}
A.vd.prototype={
cQ(a,b){return this.vO(a,b)},
vO(a,b){var s=0,r=A.h(t.X),q,p
var $async$cQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.kW(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cQ,r)},
iw(a,b,c,d){return this.wF(a,b,c,d)},
wF(b9,c0,c1,c2){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$iw=A.c(function(c3,c4){if(c3===1){o.push(c4)
s=p}for(;;)switch(s){case 0:b4=b9.wB(c0,c1)
b5=t.N
b6=new A.iC(A.u(b5,t.fw),b4)
b7=!1
p=4
a5=c2==null
n=A.HW(a5?null:A.kS(c2),"backupDbName")
if(n!=null&&typeof n!="string"){a=A.aR('"backupDbName" must be a string.')
throw A.b(a)}a6=A.a7(n)
m=a6==null?c0:a6
b6.e=new A.ve(m)
b6.f=new A.vf(m)
b4.O("PRAGMA journal_mode=TRUNCATE")
a7=b4.oA("PRAGMA journal_mode")
l=a7.gH(a7).b[0]
if(J.Z(l).toLowerCase()!=="truncate"){a=A.A("journal_mode read-back was "+A.r(l)+", expected truncate")
throw A.b(a)}k=A.Oy(a5?null:A.kS(c2))
a8=t.bE.a(J.T(k,"stores"))
j=a8==null?A.l([],t.aw):a8
a9=A.aX(J.T(k,"maxDocBytes"))
i=a9==null?19e5:a9
a7=A.GM(J.T(k,"destructiveBackup"))
h=a7!==!1
b0=t.b.a(J.T(k,"storePolicies"))
g=b0==null?B.k:b0
f=A.aX(J.T(k,"groupCommitWindowMs"))
e=A.aX(J.T(k,"txSessionTtlMs"))
d=A.aX(J.T(k,"callbackTimeoutMs"))
c=A.aX(J.T(k,"clockOffsetMs"))
a7=d==null?B.T:A.bS(0,d,0)
b=new A.z0(a7,A.l([],t.m2))
a=A.l([],t.oq)
for(a7=j,b1=a7.length,b2=0;b2<a7.length;a7.length===b1||(0,A.p)(a7),++b2){a0=a7[b2]
J.aM(a,A.Hy(a0,J.T(g,a0.a),b))}a1=a
a2=A.Ox(A.HW(a5?null:A.kS(c2),"fieldCipher"))
if(A.Of(j,a2)){a=A.V("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}a3=new A.yT(A.u(b5,t.p))
a=f==null?B.I:A.bS(0,f,0)
b5=e==null?B.ag:A.bS(0,e,0)
a5=c==null||c===0?null:new A.vg(c)
s=7
return A.a(A.d8(a3,b,b6,h,a2,a,i,a5,c0,B.aE,a1,B.bZ,b5),$async$iw)
case 7:a4=c4
b7=!0
b5=t.be
q=new A.mO(b4,new A.ze(a4,b,A.aO(b5)),A.u(t.eg,b5))
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
if(!b7)b4.q()
throw b8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iw,r)}}
A.ve.prototype={
$1(a){return A.pH(this.a,a)},
$S:161}
A.vf.prototype={
$1(a){return A.pI(this.a,a)},
$S:162}
A.vg.prototype={
$0(){return Date.now()+this.a},
$S:10}
A.mO.prototype={
cQ(a,b){return this.vP(a,b)},
vP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.DB(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.K0(j)
if(o==null){q=A.DB(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.f
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.oL(a)
k.a=l
n.j(0,a,l)
a.b.a.W(new A.vp(k,p,a),t.H)}i=A
s=3
return A.a(p.e.ic(k.a,o),$async$cQ)
case 3:q=i.K1(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cQ,r)}}
A.vp.prototype={
$1(a){var s,r=this.b
r.f.G(0,this.c)
r=r.e
s=this.a.a
r.e.G(0,s)
B.b.G(r.d.b,s)},
$S:41}
A.oL.prototype={
kg(a){var s=this,r=s.b
if(r>=128)return
s.b=r+1
s.a.f6(A.kW(a)).b0(new A.A7(s),new A.A8(s),t.H)},
$1(a){return this.on(a)},
on(a){var s=0,r=A.h(t.X),q,p=this,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.f6(A.kW(a)),$async$$1)
case 3:o=c
q=o==null?null:A.kS(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$iov:1,
$iG2:1}
A.A7.prototype={
$1(a){--this.a.b},
$S:57}
A.A8.prototype={
$1(a){--this.a.b},
$S:28}
A.CL.prototype={
$1(a){return B.b.bj(a.c,new A.CK())},
$S:164}
A.CK.prototype={
$1(a){return a.e},
$S:58}
A.z_.prototype={
wH(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.aR('Invalid "'+a+'" argument: expected '+A.bO(b).l(0)+", got "+J.c5(s).l(0)+"."))
return b.a(s)}}
A.z0.prototype={
em(a,b){return this.wc(a,b)},
wc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$em=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.b
k=l.length===0?null:B.b.gH(l)
if(k==null)throw A.b(A.V('No connected page can serve the "'+a+'" callback.',null))
l=p.c++
o=new A.w($.B,t.ny)
n=new A.aF(o,t.bF)
m=A.c_(p.a,new A.z1(p,n,a))
k.$1(A.m(["kind","callback_rpc","rpcId",l,"channel",a,"args",b],t.N,t.X)).b0(new A.z2(p,m,n,a),new A.z3(m,n,a),t.H)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$em,r)},
rr(a,b){var s
if(!t.f.b(a))throw A.b(A.aR('The "'+b+'" callback reply must be a map.'))
s=A.c4(a)
if(!J.x(s.h(0,"kind"),"callback_rpc_result"))throw A.b(A.aR('The "'+b+'" callback reply has kind "'+A.r(s.h(0,"kind"))+'".'))
if(J.x(s.h(0,"ok"),!0))return s.h(0,"value")
throw A.b(A.V('The "'+b+'" callback failed on the page: '+A.r(s.h(0,"error")),null))}}
A.z1.prototype={
$0(){var s=this.b
if((s.a.a&30)===0)s.aR(new A.e0(null,'The "'+this.c+'" callback did not answer within '+B.c.M(this.a.a.a,1000)+" ms."))},
$S:0}
A.z2.prototype={
$1(a){var s,r,q,p,o=this
o.b.v()
q=o.c
if((q.a.a&30)!==0)return
try{q.aB(o.a.rr(a,o.d))}catch(p){s=A.D(p)
r=A.ae(p)
q.bu(s,r)}},
$S:57}
A.z3.prototype={
$2(a,b){var s
this.a.v()
s=this.b
if((s.a.a&30)===0)s.bu(new A.e0(null,'The "'+this.c+'" callback failed: '+A.r(a)),b)},
$S:6}
A.hB.prototype={}
A.k_.prototype={}
A.eZ.prototype={}
A.ou.prototype={
hj(a,b){return this.qH(a,b)},
qH(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hj=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.aR('Contract envelope requires a "request" map.'))
j=A.c4(b)
i=j.h(0,"tag")
if(typeof i!="string")A.v(A.P("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.v(A.P("Missing request payload."))
g=A.kT(h)
j=t.G
if(!j.b(g))A.v(A.P("Malformed request payload."))
f=A.Jm(i,g)
if(f==null)A.v(A.P("Unknown request tag: "+i))
m=f
p=4
e=n.c.r
e===$&&A.t()
s=7
return A.a(e.vJ(m),$async$hj)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gY(),"payload",A.fh(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.D(a)
j=A.m(["error",A.O3(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hj,r)}}
A.ze.prototype={
ic(a,b){return this.w2(a,b)},
w2(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ic=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:n.e.u(0,a)
i=n.d.b
if(!B.b.E(i,a))i.push(a)
if(n.f==null){i=n.c.r
i===$&&A.t()
i=i.b
n.f=new A.b6(i,A.n(i).i("b6<1>")).aW(new A.zf(n))}m=null
try{m=A.KZ(b)}catch(e){l=A.D(e)
i=J.Z(l)
q=new A.eZ("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eZ("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jg(a,m),$async$ic)
case 7:k=d
i=m.b
q=new A.k_(k,i)
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
q=new A.eZ("localpocket",g,A.m(["type",A.Cp(j)],t.N,t.X),i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ic,r)},
jg(a,b){return this.q9(a,b)},
q9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
if(l===$){o=A.m(["open",p.gqM(),"contract_request",p.gqG()],t.N,t.n1)
p.r!==$&&A.D8()
p.r=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.aR("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jg,r)}}
A.zf.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gY(),"payload",A.fh(a.p())],r,q)],r,q)
for(r=this.a.e,r=A.dr(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).kg(p)}},
$S:167}
A.ot.prototype={
hk(a,b){return this.qN(a,b)},
qN(b0,b1){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$hk=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a4=b1.d
a5=new A.z_(a4).wH("stores",t.kS)
a6=a4.h(0,"manifestFingerprints")
a7=t.N
a8=A.u(a7,a7)
a9=t.f
if(a9.b(a6))a6.a5(0,new A.z8(a8))
o=p.rt(a4)
s=a5!=null?3:4
break
case 3:a4=J.E(a5),n=p.c,m=n.fy,l=t.X,k=p.d,j=n.cx==null
case 5:if(!a4.k()){s=6
break}i=a4.gn()
if(!a9.b(i))A.v(A.ab("Schema must be a map: "+A.r(i),null,null))
h=A.qx(A.c4(i),l)
g=A.Hy(h,o.h(0,h.a),k)
if(B.b.bj(g.c,new A.z9())&&j)throw A.b(A.V('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.DN(g)
e=g.a
d=a8.h(0,e)
if(d!=null){c=new A.a5("")
A.cl(c,f.p())
b=c.a
b=B.e.A(b.charCodeAt(0)==0?b:b)
a=new A.c8()
a0=A.d_(a)
a0.u(0,b)
a0.q()
a0=d!==A.au(a.a.a)
b=a0}else b=!1
if(b){a1=o.h(0,e)
throw A.b(A.aR(A.G4(e,a1!=null,A.L_(a1,h),A.DZ(g))))}s=!m.I(e)?7:9
break
case 7:e=n.f
e===$&&A.t()
s=10
return A.a(e.aT(g),$async$hk)
case 10:s=8
break
case 9:a2=m.h(0,e)
if(a2==null)A.v(A.A('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a5("")
A.cl(c,a2.c.p())
b=c.a
b=B.e.A(b.charCodeAt(0)==0?b:b)
a=new A.c8()
a0=A.d_(a)
a0.u(0,b)
a0.q()
a0=A.au(a.a.a)
c=new A.a5("")
A.cl(c,f.p())
b=c.a
b=B.e.A(b.charCodeAt(0)==0?b:b)
a=new A.c8()
a3=A.d_(a)
a3.u(0,b)
a3.q()
if(a0!==A.au(a.a.a))throw A.b(A.aR(A.G4(e,!0,A.DZ(g),A.DZ(a2.a))))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a7,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
rt(a){var s,r,q,p,o,n,m,l=a.h(0,"storePolicies")
if(l==null)return B.k
s=t.f
if(!s.b(l))throw A.b(A.aR('"storePolicies" must be a map.'))
r=A.u(t.N,t.X)
for(q=l.ga0(),q=q.gt(q);q.k();){p=q.gn()
o=p.a
n=J.cF(o)
m=n.l(o)
p=p.b
o=n.l(o)
if(!s.b(p))A.v(A.aR('The store policy for "'+o+'" must be a map.'))
r.j(0,m,A.c4(p))}return r}}
A.z8.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:70}
A.z9.prototype={
$1(a){return a.e},
$S:58}
A.zd.prototype={
$1(a){return a.d!=null},
$S:30}
A.z5.prototype={
$1(a){var s,r=this.a,q=t.f
if(!q.b(r))return B.aB
s=r.h(0,a)
return q.b(s)?s:B.aB},
$S:168}
A.z4.prototype={
$1(a){var s,r=this.a
if(!t.f.b(r))return B.j
s=r.h(0,a)
if(!t.j.b(s))return B.j
r=A.N(s,t.X)
B.b.aj(r)
return r},
$S:169}
A.z6.prototype={
$0(){var s,r=J.T(this.a.$1("conflictPolicy"),"fieldOverrides")
if(!t.f.b(r))return B.j
s=J.bF(r.gJ(),new A.z7(),t.N).bJ(0)
B.b.aj(s)
return s},
$S:170}
A.z7.prototype={
$1(a){return J.Z(a)},
$S:31}
A.za.prototype={
$1(a){return J.Z(a)},
$S:31}
A.zb.prototype={
$1(a){return J.Z(a)},
$S:31}
A.zc.prototype={
$1(a){return this.a[a.a]===a.b},
$S:257}
A.pz.prototype={}
A.r6.prototype={
u0(a){var s,r=null
A.Hq("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b7(a)>0&&!s.cR(a)
if(s)return a
s=A.HD()
return this.ne(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
uM(a){var s,r,q=A.dS(a,this.a)
q.fG()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kG(s)
q.e.pop()
q.fG()
return q.l(0)},
ne(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Hq("join",s)
return this.wg(new A.e2(s,t.v))},
wg(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.cY(s,new A.r7(),a.$ti.i("cY<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cR(m)&&o){l=A.dS(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.B(k,0,q.eA(k,!0))
l.b=n
if(q.fu(n))l.e[0]=q.gdF()
n=l.l(0)}else if(q.b7(m)>0){o=!q.cR(m)
n=m}else{if(!(m.length!==0&&q.k9(m[0])))if(p)n+=q.gdF()
n+=m}p=q.fu(m)}return n.charCodeAt(0)==0?n:n},
d2(a,b){var s=A.dS(b,this.a),r=s.d,q=A.a1(r).i("aq<1>")
r=A.N(new A.aq(r,new A.r8(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aF(r,0,q)
return s.d},
es(a){var s
if(!this.r7(a))return a
s=A.dS(a,this.a)
s.kz()
return s.l(0)},
r7(a){var s,r,q,p,o,n,m,l=this.a,k=l.b7(a)
if(k!==0){if(l===$.pS())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cm(n)){if(l===$.pS()&&n===47)return!0
if(q!=null&&l.cm(q))return!0
if(q===46)m=o==null||o===46||l.cm(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cm(q))return!0
if(q===46)l=o==null||l.cm(o)||o===46
else l=!1
if(l)return!0
return!1},
xf(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b7(a)
if(l<=0)return o.es(a)
s=A.HD()
if(m.b7(s)<=0&&m.b7(a)>0)return o.es(a)
if(m.b7(a)<=0||m.cR(a))a=o.u0(a)
if(m.b7(a)<=0&&m.b7(s)>0)throw A.b(A.FD(n+a+'" from "'+s+'".'))
r=A.dS(s,m)
r.kz()
q=A.dS(a,m)
q.kz()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kD(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kD(l[0],p[0])}else l=!1
if(!l)break
B.b.iH(r.d,0)
B.b.iH(r.e,1)
B.b.iH(q.d,0)
B.b.iH(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.FD(n+a+'" from "'+s+'".'))
l=t.N
B.b.ks(q.d,0,A.a8(p,"..",!1,l))
p=q.e
p[0]=""
B.b.ks(p,1,A.a8(r.d.length,m.gdF(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga_(m)==="."){B.b.kG(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fG()
return q.l(0)},
nn(a){var s,r,q=this,p=A.H7(a)
if(p.gb3()==="file"&&q.a===$.l2())return p.l(0)
else if(p.gb3()!=="file"&&p.gb3()!==""&&q.a!==$.l2())return p.l(0)
s=q.es(q.a.kC(A.H7(p)))
r=q.xf(s)
return q.d2(0,r).length>q.d2(0,s).length?s:r}}
A.r7.prototype={
$1(a){return a!==""},
$S:13}
A.r8.prototype={
$1(a){return a.length!==0},
$S:13}
A.Ck.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:172}
A.u3.prototype={
oy(a){var s=this.b7(a)
if(s>0)return B.a.B(a,0,s)
return this.cR(a)?a[0]:null},
kD(a,b){return a===b}}
A.n6.prototype={
gk0(){var s=this,r=t.N,q=new A.n6(s.a,s.b,s.c,A.bK(s.d,!0,r),A.bK(s.e,!0,r))
q.fG()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga_(r)},
fG(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga_(s)===""))break
B.b.kG(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kz(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.ks(m,0,A.a8(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.a8(m.length+1,s.gdF(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fu(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pS())n.b=A.C(r,"/","\\")
n.fG()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.n7.prototype={
l(a){return"PathException: "+this.a},
$iH:1}
A.y4.prototype={
l(a){return this.gaS()}}
A.wL.prototype={
k9(a){return B.a.E(a,"/")},
cm(a){return a===47},
fu(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eA(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b7(a){return this.eA(a,!1)},
cR(a){return!1},
kC(a){var s
if(a.gb3()===""||a.gb3()==="file"){s=a.gby()
return A.Ee(s,0,s.length,B.o,!1)}throw A.b(A.S("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaS(){return"posix"},
gdF(){return"/"}}
A.yF.prototype={
k9(a){return B.a.E(a,"/")},
cm(a){return a===47},
fu(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bW(a,"://")&&this.b7(a)===s},
eA(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.ck(a,"/",B.a.af(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.T(a,"file://"))return q
p=A.HG(a,q+1)
return p==null?q:p}}return 0},
b7(a){return this.eA(a,!1)},
cR(a){return a.length!==0&&a.charCodeAt(0)===47},
kC(a){return a.l(0)},
gaS(){return"url"},
gdF(){return"/"}}
A.yZ.prototype={
k9(a){return B.a.E(a,"/")},
cm(a){return a===47||a===92},
fu(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eA(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.ck(a,"\\",2)
if(s>0){s=B.a.ck(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.HL(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b7(a){return this.eA(a,!1)},
cR(a){return this.b7(a)===1},
kC(a){var s,r
if(a.gb3()!==""&&a.gb3()!=="file")throw A.b(A.S("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gby()
if(a.gdn()===""){if(s.length>=3&&B.a.T(s,"/")&&A.HG(s,1)!=null)s=B.a.kI(s,"/","")}else s="\\\\"+a.gdn()+s
r=A.C(s,"/","\\")
return A.Ee(r,0,r.length,B.o,!1)},
uq(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kD(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.uq(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaS(){return"windows"},
gdF(){return"\\"}}
A.xO.prototype={
gm(a){return this.c.length},
gwh(){return this.b.length},
pd(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.J(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eF(a){var s,r=this
if(a<0)throw A.b(A.b4("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b4("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga_(s))return s.length-1
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
iW(a){var s,r,q=this
if(a<0)throw A.b(A.b4("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b4("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.eF(a)
r=q.b[s]
if(r>a)throw A.b(A.b4("Line "+s+" comes after offset "+a+"."))
return a-r},
fU(a){var s,r,q,p
if(a<0)throw A.b(A.b4("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b4("Line "+a+" must be less than the number of lines in the file, "+this.gwh()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b4("Line "+a+" doesn't have 0 columns."))
return q}}
A.mg.prototype={
ga6(){return this.a.a},
gah(){return this.a.eF(this.b)},
gau(){return this.a.iW(this.b)},
gav(){return this.b}}
A.hL.prototype={
ga6(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.Dp(this.a,this.b)},
gN(){return A.Dp(this.a,this.c)},
gaP(){return A.dY(B.y.U(this.a.c,this.b,this.c),0,null)},
gbk(){var s=this,r=s.a,q=s.c,p=r.eF(q)
if(r.iW(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dY(B.y.U(r.c,r.fU(p),r.fU(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fU(p+1)
return A.dY(B.y.U(r.c,r.fU(r.eF(s.b)),q),0,null)},
a3(a,b){var s
if(!(b instanceof A.hL))return this.oZ(0,b)
s=B.c.a3(this.b,b.b)
return s===0?B.c.a3(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hL))return s.oY(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gK(a){return A.cd(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idh:1}
A.tA.prototype={
w8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mD(B.b.gH(a1).c)
s=a.e
r=A.a8(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hJ("\u2575")
q.a+="\n"
a.mD(l)}else if(m.b+1!==n.b){a.u_("...")
q.a+="\n"}}for(l=n.d,k=A.a1(l).i("bB<1>"),j=new A.bB(l,k),j=new A.as(j,j.gm(0),k.i("as<a_.E>")),k=k.i("a_.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gah()!==f.gN().gah()&&f.gR().gah()===i&&a.r0(B.a.B(h,0,f.gR().gau()))){e=B.b.bX(r,a0)
if(e<0)A.v(A.S(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.tZ(i)
q.a+=" "
a.tY(n,r)
if(s)q.a+=" "
d=B.b.n8(l,new A.tV())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gah()===i?j.gR().gau():0
a.tW(h,g,j.gN().gah()===i?j.gN().gau():h.length,p)}else a.hL(h)
q.a+="\n"
if(k)a.tX(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hJ("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mD(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hJ("\u2577")
else{q.hJ("\u250c")
q.bp(new A.tI(q),"\x1b[34m")
s=q.r
r=" "+$.ih().nn(a)
s.a+=r}q.r.a+="\n"},
hH(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gah()
i=k?null:l.a.gN().gah()
if(s&&l===c){h.bp(new A.tP(h,j,a),r)
n=!0}else if(n)h.bp(new A.tQ(h,l),r)
else if(k)if(g.a)h.bp(new A.tR(h),g.b)
else o.a+=" "
else h.bp(new A.tS(g,h,c,j,a,l,i),p)}},
tY(a,b){return this.hH(a,b,null)},
tW(a,b,c,d){var s=this
s.hL(B.a.B(a,0,b))
s.bp(new A.tJ(s,a,b,c),d)
s.hL(B.a.B(a,c,a.length))},
tX(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gah()===p.gN().gah()){r.jX()
p=r.r
p.a+=" "
r.hH(a,c,b)
if(c.length!==0)p.a+=" "
r.mE(b,c,r.bp(new A.tK(r,a,b),q))}else{s=a.b
if(p.gR().gah()===s){if(B.b.E(c,b))return
A.OE(c,b)
r.jX()
p=r.r
p.a+=" "
r.hH(a,c,b)
r.bp(new A.tL(r,a,b),q)
p.a+="\n"}else if(p.gN().gah()===s){p=p.gN().gau()
if(p===a.a.length){A.HX(c,b)
return}r.jX()
r.r.a+=" "
r.hH(a,c,b)
r.mE(b,c,r.bp(new A.tM(r,!1,a,b),q))
A.HX(c,b)}}},
mC(a,b,c){var s=c?0:1,r=this.r
s=B.a.bn("\u2500",1+b+this.jd(B.a.B(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tV(a,b){return this.mC(a,b,!0)},
mE(a,b,c){this.r.a+="\n"
return},
hL(a){var s,r,q,p
for(s=new A.cn(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<L.E>")),q=this.r,r=r.i("L.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bn(" ",4)
else{p=A.bA(p)
q.a+=p}}},
hK(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bp(new A.tT(s,this,a),"\x1b[34m")},
hJ(a){return this.hK(a,null,null)},
u_(a){return this.hK(null,null,a)},
tZ(a){return this.hK(null,a,null)},
jX(){return this.hK(null,null,null)},
jd(a){var s,r,q,p
for(s=new A.cn(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<L.E>")),r=r.i("L.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
r0(a){var s,r,q
for(s=new A.cn(a),r=t.E,s=new A.as(s,s.gm(0),r.i("as<L.E>")),r=r.i("L.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pM(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bp(a,b){return this.pM(a,b,t.z)}}
A.tU.prototype={
$0(){return this.a},
$S:173}
A.tC.prototype={
$1(a){var s=a.d
return new A.aq(s,new A.tB(),A.a1(s).i("aq<1>")).gm(0)},
$S:174}
A.tB.prototype={
$1(a){var s=a.a
return s.gR().gah()!==s.gN().gah()},
$S:37}
A.tD.prototype={
$1(a){return a.c},
$S:176}
A.tF.prototype={
$1(a){var s=a.a.ga6()
return s==null?new A.j():s},
$S:177}
A.tG.prototype={
$2(a,b){return a.a.a3(0,b.a)},
$S:178}
A.tH.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aw(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbk()
n=A.CE(o,p.gaP(),p.gR().gau())
n.toString
m=B.a.hM("\n",B.a.B(o,0,n)).gm(0)
l=p.gR().gah()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga_(b).b)b.push(new A.cB(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.p)(b),++k){j=b[k]
h&1&&A.J(i,16)
B.b.t4(i,new A.tE(j),!0)
f=i.length
for(q=s.b4(c,g),p=q.$ti,q=new A.as(q,q.gm(0),p.i("as<a_.E>")),n=j.b,p=p.i("a_.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gah()>n)break
i.push(e)}g+=i.length-f
B.b.D(j.d,i)}return b},
$S:179}
A.tE.prototype={
$1(a){return a.a.gN().gah()<this.a.b},
$S:37}
A.tV.prototype={
$1(a){return!0},
$S:37}
A.tI.prototype={
$0(){this.a.r.a+=B.a.bn("\u2500",2)+">"
return null},
$S:0}
A.tP.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.tQ.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.tR.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.tS.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bp(new A.tN(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gau()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bp(new A.tO(r,o),p.b)}}},
$S:2}
A.tN.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.tO.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.tJ.prototype={
$0(){var s=this
return s.a.hL(B.a.B(s.b,s.c,s.d))},
$S:0}
A.tK.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gau(),l=n.gN().gau()
n=this.b.a
s=q.jd(B.a.B(n,0,m))
r=q.jd(B.a.B(n,m,l))
m+=s*3
n=(p.a+=B.a.bn(" ",m))+B.a.bn("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.tL.prototype={
$0(){return this.a.tV(this.b,this.c.a.gR().gau())},
$S:0}
A.tM.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bn("\u2500",3)
else r.mC(s.c,Math.max(s.d.a.gN().gau()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.tT.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wJ(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bu.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gah()+":"+s.gR().gau()+"-"+s.gN().gah()+":"+s.gN().gau())
return s.charCodeAt(0)==0?s:s}}
A.AJ.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.CE(o.gbk(),o.gaP(),o.gR().gau())!=null)){s=A.nD(o.gR().gav(),0,0,o.ga6())
r=o.gN().gav()
q=o.ga6()
p=A.NX(o.gaP(),10)
o=A.xP(s,A.nD(r,A.Gl(o.gaP()),p,q),o.gaP(),o.gaP())}return A.Lp(A.Lr(A.Lq(o)))},
$S:180}
A.cB.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.C(this.d,", ")+")"}}
A.cv.prototype={
kf(a){var s=this.a
if(!J.x(s,a.ga6()))throw A.b(A.S('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga6())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a3(a,b){var s=this.a
if(!J.x(s,b.ga6()))throw A.b(A.S('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga6())+"\" don't match.",null))
return this.b-b.gav()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga6())&&this.b===b.gav()},
gK(a){var s=this.a
s=s==null?null:s.gK(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.d2(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iax:1,
ga6(){return this.a},
gav(){return this.b},
gah(){return this.c},
gau(){return this.d}}
A.nE.prototype={
kf(a){if(!J.x(this.a.a,a.ga6()))throw A.b(A.S('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(a.ga6())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a3(a,b){if(!J.x(this.a.a,b.ga6()))throw A.b(A.S('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(b.ga6())+"\" don't match.",null))
return this.b-b.gav()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga6())&&this.b===b.gav()},
gK(a){var s=this.a.a
s=s==null?null:s.gK(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.d2(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.eF(r)+1)+":"+(q.iW(r)+1))+">"},
$iax:1,
$icv:1}
A.nG.prototype={
pe(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga6(),q.ga6()))throw A.b(A.S('Source URLs "'+A.r(q.ga6())+'" and  "'+A.r(r.ga6())+"\" don't match.",null))
else if(r.gav()<q.gav())throw A.b(A.S("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.kf(r))throw A.b(A.S('Text "'+s+'" must be '+q.kf(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaP(){return this.c}}
A.nH.prototype={
gir(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gah()+1)+", column "+(p.gR().gau()+1)
if(p.ga6()!=null){s=p.ga6()
r=$.ih()
s.toString
s=o+(" of "+r.nn(s))
o=s}o+=": "+this.a
q=p.w9(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iH:1}
A.hj.prototype={
gav(){var s=this.b
s=A.Dp(s.a,s.b)
return s.b},
$ibn:1,
gfZ(){return this.c}}
A.hk.prototype={
ga6(){return this.gR().ga6()},
gm(a){return this.gN().gav()-this.gR().gav()},
a3(a,b){var s=this.gR().a3(0,b.gR())
return s===0?this.gN().a3(0,b.gN()):s},
w9(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.JH(s,a).w8()},
P(a,b){if(b==null)return!1
return b instanceof A.hk&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gK(a){return A.cd(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.d2(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaP()+'">'},
$iax:1}
A.dh.prototype={
gbk(){return this.d}}
A.jN.prototype={
a7(){return"SqliteUpdateKind."+this.b}}
A.cw.prototype={
gK(a){return A.cd(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.cw&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.cf.prototype={
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
p=p!=null?s+(", parameters: "+J.bF(p,new A.xU(),t.N).C(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iH:1}
A.xU.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.Z(a)},
$S:181}
A.lc.prototype={}
A.rx.prototype={
tI(){var s=this,r=s.d
return r==null?s.d=new A.ec(s,A.l([],t.fU),new A.rG(s),new A.rH(s),t.jy):r},
t8(){var s=this,r=s.e
return r==null?s.e=new A.ec(s,A.l([],t.lw),new A.rD(s),new A.rE(s),t.lU):r},
pO(){var s=this,r=s.f
return r==null?s.f=new A.ec(s,A.l([],t.lw),new A.rz(s),new A.rA(s),t.ah):r},
ux(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.A(e)
if(m.length>255)A.v(A.aD(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.be(m))
r=n.a
q=r.e9(s,1)
s=r.d
p=A.Er(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.de(new A.rI(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.D7(this,p,o,o,o)},
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
r=s.l2()
q=r!==0?A.Ev(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aI(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.v(A.A("This database has already been closed"))
r=p.b
q=r.a
s=q.e9(B.e.A(a),1)
q=q.d
r=A.Er(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.D7(p,r,"executing",a,b)}else{s=p.iz(a,!0)
try{s.ef(new A.bT(b))}finally{s.q()}}},
O(a){return this.aI(a,B.j)},
rA(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.v(A.A("This database has already been closed"))
s=B.e.A(a)
r=e.b
q=r.a
p=q.cL(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.yS(r,p,n,o)
l=A.l([],t.lE)
k=new A.rB(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.l4(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.D7(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null)l.push(new A.hl(f,e,new A.dt(!1).d6(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.l4(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null){l.push(new A.hl(f,e,""))
k.$0()
throw A.b(A.aD(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aD(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
iz(a,b){var s=this.rA(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aD(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
wP(a){return this.iz(a,!1)},
oB(a,b){var s,r=this.iz(a,!0)
try{s=r.kY(new A.bT(b))
return s}finally{r.q()}},
oA(a){return this.oB(a,B.j)}}
A.rG.prototype={
$0(){var s=this.a,r=s.b
r.a.mV(r.b,new A.rF(s))},
$S:0}
A.rF.prototype={
$3(a,b,c){var s=A.KL(a)
if(s==null)return
this.a.d.kd(new A.cw(s,b,c))},
$S:182}
A.rH.prototype={
$0(){var s=this.a.b
s.a.mV(s.b,null)
return null},
$S:0}
A.rD.prototype={
$0(){var s=this.a,r=s.b
r.a.mU(r.b,new A.rC(s))
return null},
$S:0}
A.rC.prototype={
$0(){this.a.e.kd(null)},
$S:0}
A.rE.prototype={
$0(){var s=this.a.b
s.a.mU(s.b,null)
return null},
$S:0}
A.rz.prototype={
$0(){var s=this.a,r=s.b
r.a.mT(r.b,new A.ry(s))
return null},
$S:0}
A.ry.prototype={
$0(){var s=this.a.f
s.kd(null)
return 0},
$S:10}
A.rA.prototype={
$0(){var s=this.a.b
s.a.mT(s.b,null)
return null},
$S:0}
A.rI.prototype={
$2(a,b){A.Mu(a,this.a,b)},
$S:183}
A.rB.prototype={
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
A.om.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.a2("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Ku(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.Kw(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.S("The argument list is unmodifiable",null))},
$ixR:1}
A.ec.prototype={
gcv(){var s=this.r
return s==null?this.r=this.qD(!1):s},
qD(a){return new A.ds(new A.Bo(this,!1),this.$ti.i("ds<1>"))},
kd(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.v(o.bO())
if((n&1)!==0)o.gaQ().aD(a)}else{n=o.b
if(n>=4)A.v(o.bO())
if((n&1)!==0)o.cG(a)
else if((n&3)===0){n=o.ha()
o=new A.ch(a,o.$ti.i("ch<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.ser(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.Bo.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.Bp(q,a,s)
a.r=a.e=new A.Bq(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dP<1>)")}}
A.Bp.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.ks(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.Bq.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,new A.ks(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.xQ.prototype={
n9(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.KK(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wB(a,b){var s,r,q,p,o,n,m,l,k,j
this.n9()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e9(B.e.A(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e9(B.e.A(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.db(r.b.buffer,0,null)[B.c.ag(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.yL(r,l,o)
r=r.r
if(r!=null)r.mM(k,l,o)
if(m!==0){j=A.Ev(s,k,m,"opening the database",null,null)
k.l2()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.rx(s,k,!1)}}
A.hl.prototype={
gpN(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.ow(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dt(!1).d6(o,0,null,!0))}return q},
gtA(){return null},
bI(a,b){A.D7(this.b,a,b,this.d,this.e)},
lG(){if(this.r||this.b.r)throw A.b(A.A(u.f))},
hc(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dw()
if(s!==0?s!==101:q)r.bI(s,"executing statement")},
th(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rW(o))
l.push(p)}m.dw()
if(p!==0?p!==101:k)m.bI(p,"selecting from statement")
n=m.gpN()
m.gtA()
k=new A.nq(l,n,B.an)
k.pG()
return k},
rW(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.aj(r.Number(s)):A.Gg(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oO(a)
case 4:return s.l3(a)
case 5:default:return null}},
pz(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.v(A.aD(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.pA(a[s-1],s)
this.e=a},
pA(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.a9(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aP){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.EZ(a).l(0)))
break A}if(A.bv(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oN(b,a)
break A}if(t.L.b(a)){s=q.a.oM(b,a)
break A}s=q.py(a,b)
break A}if(s!==0)q.bI(s,"binding parameter")},
py(a,b){throw A.b(A.aD(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eI(a){A:{if(a instanceof A.bT){this.pz(a.a)
break A}if(a instanceof A.lN)a.a.$1(this)}},
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
if(r!=null)r.mY(s.d)}},
kY(a){var s=this
s.lG()
s.dw()
s.eI(a)
return s.th()},
ef(a){var s=this
s.lG()
s.dw()
s.eI(a)
s.hc()}}
A.mu.prototype={
iR(a,b){return this.d.I(a)?1:0},
kR(a,b){this.d.G(0,a)},
kS(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r=a.a
if(r==null)r=A.Fj(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cA(new Uint8Array(0),0))
else throw A.b(A.hw(14))
return new A.hR(new A.oY(this,r,(b&8)!==0),0)},
kU(a){}}
A.oY.prototype={
ns(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bQ(B.f.gac(r.a),0,r.b),b)
return s},
kQ(){return this.d>=2?1:0},
iS(){if(this.c)this.a.d.G(0,this.b)},
fQ(){return this.a.d.h(0,this.b).b},
kT(a){this.d=a},
kV(a){},
fR(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cA(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kW(a){this.d=a},
eE(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cA(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.aA(0,b,s,a)}}
A.CU.prototype={
$1(a){return a.length!==0},
$S:13}
A.rc.prototype={
pG(){var s,r,q,p,o=A.u(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o.j(0,p,B.b.cS(s,p))}this.c=o}}
A.nq.prototype={
gt(a){return new A.B7(this)},
h(a,b){return new A.ce(this,A.fR(this.d[b],t.X))},
j(a,b,c){throw A.b(A.a2("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iK:1,
$io:1,
$iq:1}
A.ce.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.a9(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gJ(){return this.a.a},
gaU(){return this.b},
$iF:1}
A.B7.prototype={
gn(){var s=this.a
return new A.ce(s,A.fR(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.pd.prototype={}
A.pe.prototype={}
A.pg.prototype={}
A.ph.prototype={}
A.w4.prototype={
a7(){return"OpenMode."+this.b}}
A.et.prototype={}
A.bT.prototype={}
A.lN.prototype={}
A.dn.prototype={
l(a){return"VfsException("+this.a+")"},
$iH:1}
A.jM.prototype={}
A.bb.prototype={}
A.ls.prototype={}
A.lr.prototype={
giT(){return 0},
nK(a,b){return 12},
giV(){return 4096},
iU(a,b){var s=this.ns(a,b),r=a.length
if(s<r){B.f.kl(a,s,r,0)
throw A.b(B.ei)}},
$ibs:1,
$ijX:1}
A.f_.prototype={}
A.D4.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.v(A.A("No such element"))
r=s.c
q=r.a
q.toString
q.jT(A.n(r).i("b9.E").a(r))
r.d.$0()}},
$S:0}
A.D2.prototype={
$1(a){var s=this.a,r=s.b
s.hl(s.c,new A.f_(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:19}
A.D3.prototype={
$4(a,b,c,d){this.a.$1(c.f4(d))},
$S:185}
A.yQ.prototype={}
A.yL.prototype={
l2(){var s=this.a,r=s.r
if(r!=null)r.mY(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.yS.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
l4(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Er(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.db(o.b.buffer,0,null)[B.c.ag(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.yR(s,o,n)
o=o.w
if(o!=null)o.mM(r,s,n)}return new A.pb(r,p)}}
A.yR.prototype={
oM(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cL(b),J.an(b))},
oN(a,b){var s=B.e.A(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cL(s),s.length)},
l3(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.G5(s.b,q.sqlite3_column_blob(r,a),p)},
oO(a){var s=this.c
return A.e3(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.e1.prototype={$iDK:1}
A.dp.prototype={$iDL:1}
A.hy.prototype={
sm(a,b){throw A.b(A.a2("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dp(s,A.db(s.b.buffer,0,null)[B.c.ag(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.a2("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lR.prototype={
wr(a){var s,r,q=this.b
q===$&&A.t()
s="[sqlite3] "+A.e3(q,a,null)
r=$.N_
if(r==null)A.HT(s)
else r.$1(s)},
wp(a,b){var s,r=new A.aH(A.lV(A.aj(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.t()
s=A.FA(q.buffer,b,8)
s.$flags&2&&A.J(s)
s[0]=A.DI(r)
s[1]=A.DG(r)
s[2]=A.DF(r)
s[3]=A.wP(r)
s[4]=A.DH(r)-1
s[5]=A.DJ(r)-1900
s[6]=B.c.an(A.Kl(r),7)},
ym(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.t()
s=new A.jM(A.E_(j,b,k))
try{r=a.dC(s,d)
if(e!==0){p=r.b
o=A.db(j.buffer,0,k)
n=B.c.ag(e,2)
o.$flags&2&&A.J(o)
o[n]=p}p=A.db(j.buffer,0,k)
o=B.c.ag(c,2)
p.$flags&2&&A.J(p)
p[o]=0
m=r.a
return m}catch(l){p=A.D(l)
if(p instanceof A.dn){q=p
p=q.a
j=A.db(j.buffer,0,k)
o=B.c.ag(c,2)
j.$flags&2&&A.J(j)
j[o]=p}else{j=j.buffer
j=A.db(j,0,k)
p=B.c.ag(c,2)
j.$flags&2&&A.J(j)
j[p]=1}}return k},
yb(a,b,c){var s=this.b
s===$&&A.t()
return A.c3(new A.ri(a,A.e3(s,b,null),c))},
y3(a,b,c,d){var s=this.b
s===$&&A.t()
return A.c3(new A.rf(this,a,A.e3(s,b,null),c,d))},
yi(a,b,c,d){var s=this.b
s===$&&A.t()
return A.c3(new A.rk(this,a,A.e3(s,b,null),c,d))},
yo(a,b,c){return A.c3(new A.rm(this,c,b,a))},
yt(a,b){return A.c3(new A.ro(a,b))},
y9(a,b){var s,r=Date.now(),q=this.b
q===$&&A.t()
s=v.G.BigInt(r)
A.Dw(A.Fz(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
y7(a){return A.c3(new A.rh(a))},
yq(a,b,c,d){return A.c3(new A.rn(this,a,b,c,d))},
yB(a,b,c,d){return A.c3(new A.rs(this,a,b,c,d))},
yx(a,b){return A.c3(new A.rq(a,b))},
yv(a,b){return A.c3(new A.rp(a,b))},
yg(a,b){return A.c3(new A.rj(this,a,b))},
yk(a,b){return A.c3(new A.rl(a,b))},
yz(a,b){return A.c3(new A.rr(a,b))},
y5(a,b){return A.c3(new A.rg(this,a,b))},
yc(a){return a.giT()},
ye(a,b,c){if(t.j2.b(a))return a.nK(b,c)
return 12},
yr(a){if(t.j2.b(a))return a.giV()
return 4096},
uZ(a){a.$0()},
uU(a){return a.$0()},
uX(a,b,c,d,e){var s=this.b
s===$&&A.t()
a.$3(b,A.e3(s,d,null),A.aj(v.G.Number(e)))},
v4(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.t()
r.$2(new A.e1(s,b),new A.hy(s,c,d))},
v8(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.t()
r.$2(new A.e1(s,b),new A.hy(s,c,d))},
v6(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.t()
null.$2(new A.e1(s,b),new A.hy(s,c,d))},
va(a,b){var s
null.toString
s=this.a
s===$&&A.t()
null.$1(new A.e1(s,b))},
v2(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.t()
r.$1(new A.e1(s,b))},
v0(a,b,c,d,e){var s=this.b
s===$&&A.t()
return null.$2(A.E_(s,c,b),A.E_(s,e,d))},
uS(a,b){return a.$1(b)},
uQ(a,b){return a.gyF().$1(b)},
uO(a,b,c){return a.gyE().$2(b,c)}}
A.ri.prototype={
$0(){return this.a.kR(this.b,this.c)},
$S:0}
A.rf.prototype={
$0(){var s,r=this,q=r.b.iR(r.c,r.d),p=r.a.b
p===$&&A.t()
p=A.db(p.buffer,0,null)
s=B.c.ag(r.e,2)
p.$flags&2&&A.J(p)
p[s]=q},
$S:0}
A.rk.prototype={
$0(){var s,r,q=this,p=B.e.A(q.b.kS(q.c)),o=p.length
if(o>q.d)throw A.b(A.hw(14))
s=q.a.b
s===$&&A.t()
s=A.bY(s.buffer,0,null)
r=q.e
B.f.d1(s,r,p)
s.$flags&2&&A.J(s)
s[r+o]=0},
$S:0}
A.rm.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.t()
s=A.bY(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.EX(s,q.b)
else return A.EX(s,null)},
$S:0}
A.ro.prototype={
$0(){this.a.kU(A.bS(this.b,0,0))},
$S:0}
A.rh.prototype={
$0(){return this.a.iS()},
$S:0}
A.rn.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.t()
s.b.iU(A.bY(r.buffer,s.c,s.d),A.aj(v.G.Number(s.e)))},
$S:0}
A.rs.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.t()
s.b.eE(A.bY(r.buffer,s.c,s.d),A.aj(v.G.Number(s.e)))},
$S:0}
A.rq.prototype={
$0(){return this.a.fR(A.aj(v.G.Number(this.b)))},
$S:0}
A.rp.prototype={
$0(){return this.a.kV(this.b)},
$S:0}
A.rj.prototype={
$0(){var s,r=this.b.fQ(),q=this.a.b
q===$&&A.t()
q=A.db(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.J(q)
q[s]=r},
$S:0}
A.rl.prototype={
$0(){return this.a.kT(this.b)},
$S:0}
A.rr.prototype={
$0(){return this.a.kW(this.b)},
$S:0}
A.rg.prototype={
$0(){var s,r=this.b.kQ(),q=this.a.b
q===$&&A.t()
q=A.db(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.J(q)
q[s]=r},
$S:0}
A.de.prototype={}
A.il.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bi(A.Dw(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.nL(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.q5(q,this,p,o)
o.d=s
o.f=new A.q6(q,o,s)
return new A.bc(o,A.n(o).i("bc<1>")).aa(a,b,c,d)},
bx(a,b,c){return this.aa(a,null,b,c)}}
A.q5.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a3(q,t.m).b0(new A.q7(p,r.b,s,r),s.gu4(),t.P)},
$S:0}
A.q7.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaQ().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:23}
A.q6.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaQ().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.f3.prototype={
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
s=new A.at(o,t.ex)
r=p.d
q=t.m
p.b=A.bt(r,"success",new A.Ab(p,s),!1,q)
p.c=A.bt(r,"error",new A.Ac(p,s),!1,q)
return o}}
A.Ab.prototype={
$1(a){var s,r=this.a
r.v()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.Ac.prototype={
$1(a){var s=this.a
s.v()
s=s.d.error
if(s==null)s=a
this.b.aR(s)},
$S:1}
A.qR.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qS.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qW.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qX.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qY.prototype={
$1(a){this.a.aR(new A.bp("IndexedDB open blocked"))},
$S:1}
A.tg.prototype={
$1(a){return A.bi(a[1])},
$S:207}
A.yM.prototype={
uy(){var s={}
s.dart=new A.yN(this).$0()
return s},
ip(a){return this.wl(a)},
wl(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ip=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a3(v.G.WebAssembly.instantiateStreaming(a,p.uy()),t.m),$async$ip)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)}}
A.yN.prototype={
$0(){var s=this.a.a,r=A.bi(v.G.Object),q=A.bi(r.create.apply(r,[null]))
q.error_log=A.d0(s.gwq())
q.localtime=A.c1(s.gwo())
q.xOpen=A.Ei(s.gyl())
q.xDelete=A.pG(s.gya())
q.xAccess=A.i3(s.gy0())
q.xFullPathname=A.i3(s.gyh())
q.xRandomness=A.pG(s.gyn())
q.xSleep=A.c1(s.gys())
q.xCurrentTimeInt64=A.c1(s.gy8())
q.xClose=A.d0(s.gy6())
q.xRead=A.i3(s.gyp())
q.xWrite=A.i3(s.gyA())
q.xTruncate=A.c1(s.gyw())
q.xSync=A.c1(s.gyu())
q.xFileSize=A.c1(s.gyf())
q.xLock=A.c1(s.gyj())
q.xUnlock=A.c1(s.gyy())
q.xCheckReservedLock=A.c1(s.gy4())
q.xDeviceCharacteristics=A.d0(s.giT())
q.xFileControl=A.pG(s.gyd())
q.xSectorSize=A.d0(s.giV())
q["dispatch_()v"]=A.d0(s.guY())
q["dispatch_()i"]=A.d0(s.guT())
q.dispatch_update=A.Ei(s.guW())
q.dispatch_xFunc=A.i3(s.gv3())
q.dispatch_xStep=A.i3(s.gv7())
q.dispatch_xInverse=A.i3(s.gv5())
q.dispatch_xValue=A.c1(s.gv9())
q.dispatch_xFinal=A.c1(s.gv1())
q.dispatch_compare=A.Ei(s.gv_())
q.dispatch_busy=A.c1(s.guR())
q.changeset_apply_filter=A.c1(s.guP())
q.changeset_apply_conflict=A.pG(s.guN())
return q},
$S:35}
A.hx.prototype={}
A.q8.prototype={
iv(){var s=0,r=A.h(t.H),q=this,p,o
var $async$iv=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.B,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.d0(new A.qb(o))
new A.at(p,t.h1).aB(A.Ji(o,t.m))
s=2
return A.a(p,$async$iv)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$iv,r)},
e4(a,b){return this.ta(a,b)},
ta(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$e4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.IJ(),b)
o=A.Ls(p)
s=2
return A.a(A.OF(new A.qa(a,o,p),t.mj),$async$e4)
case 2:s=3
return A.a(o.b.a,$async$e4)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$e4,r)},
rw(a){return this.e4(new A.q9(a),"readwrite")}}
A.qb.prototype={
$1(a){var s=A.bi(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:23}
A.qa.prototype={
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
$S:22}
A.q9.prototype={
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
A.ki.prototype={
pi(a){var s=A.Cb(new A.AM(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.Cb(new A.AN(this))},
jG(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
rT(a){return this.jG(a,9007199254740992,0)},
rU(a,b){return this.jG(a,9007199254740992,b)},
io(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$io=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.u(t.N,t.S)
k=new A.f3(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$io)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.v(A.A("Await moveNext() first"))
n=o.key
n.toString
A.G(n)
m=o.primaryKey
m.toString
l.j(0,n,A.aj(A.fc(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$io,r)},
i3(a){return this.vA(a)},
vA(a){var s=0,r=A.h(t.aV),q,p=this,o
var $async$i3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cJ(p.d.index("fileName").getKey(a),t.W),$async$i3)
case 3:q=o.aj(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
jH(a){return A.cJ(this.d.get(a),t.B).W(new A.AL(a),t.m)},
eG(a,b){return this.oP(a,b)},
oP(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jH(a),$async$eG)
case 3:h=d
g=h.length
f=new A.cA(new Uint8Array(g),g)
e=new A.f3(p.e.openCursor(p.rT(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eG)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.v(A.A("Await moveNext() first"))
k=n.a(l.key)
j=A.aj(A.fc(k[1]))
if(j>=h.length){s=5
break}i=new A.AO(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.xw(A.bi(l.value)).W(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eG,r)},
hW(a){return this.uv(a)},
uv(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
o=A
s=3
return A.a(A.cJ(p.d.put({name:a,length:0}),t.W),$async$hW)
case 3:q=o.aj(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
az(a,b){return this.xU(a,b)},
xU(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$az=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
s=2
return A.a(q.jH(a),$async$az)
case 2:p=d
o=b.b
n=A.n(o).i("R<1>")
m=A.N(new A.R(o,n),n.i("o.E"))
B.b.aj(m)
s=3
return A.a(A.Dr(new A.Y(m,new A.AP(new A.AQ(q,a),b),A.a1(m).i("Y<1,y<~>>")),t.H),$async$az)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.f3(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$az)
case 6:s=7
return A.a(A.cJ(l.gn().update({name:p.name,length:b.c}),t.X),$async$az)
case 7:case 5:return A.e(null,r)}})
return A.f($async$az,r)},
dA(a,b,c){return this.xx(0,b,c)},
xx(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
s=2
return A.a(q.jH(b),$async$dA)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cJ(q.e.delete(q.rU(b,B.c.M(c,4096)*4096)),t.X),$async$dA)
case 5:case 4:o=new A.f3(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dA)
case 6:s=7
return A.a(A.cJ(o.gn().update({name:p.name,length:c}),t.X),$async$dA)
case 7:return A.e(null,r)}})
return A.f($async$dA,r)},
hZ(a){return this.uL(a)},
uL(a){var s=0,r=A.h(t.H),q=this,p
var $async$hZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.A("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.Dr(A.l([A.cJ(q.e.delete(q.jG(a,9007199254740992,0)),p),A.cJ(q.d.delete(a),p)],t.iw),t.H),$async$hZ)
case 2:return A.e(null,r)}})
return A.f($async$hZ,r)}}
A.AM.prototype={
$0(){this.a.b.ak()},
$S:2}
A.AN.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aR(r)},
$S:2}
A.AL.prototype={
$1(a){if(a==null)throw A.b(A.aD(this.a,"fileId","File not found in database"))
else return a},
$S:210}
A.AO.prototype={
$1(a){var s=this.a
s.d1(s,this.b,J.bQ(a,0,this.c))},
$S:211}
A.AQ.prototype={
op(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cJ(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gac(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cJ(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cJ(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.op(a,b)},
$S:212}
A.AP.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:213}
A.An.prototype={
tH(a,b,c){B.f.d1(this.b.nq(a,new A.Ao(this,a)),b,c)},
u8(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.an(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.tH(p*4096,o,J.bQ(B.f.gac(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.Ao.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.d1(s,0,J.bQ(B.f.gac(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:214}
A.p6.prototype={}
A.dH.prototype={
f1(a){var s=this
if(s.e||s.d.a==null)A.v(A.hw(10))
if(a.kt(s.x)){s.cI(!0)
return a.d.a}else return A.bf(null,t.H)},
cI(a){return this.tx(a)},
tx(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.N(o,o.$ti.i("o.E"))
o.aq(0)
s=5
return A.a(p.d.rw(n).b2(new A.tY(p,n,a)),$async$cI)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cI,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.f1(new A.kg(new A.tZ(),new A.at(new A.w($.B,t.D),t.F)))
p.e=!0
p.cI(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.ga_(0).d.a
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
return A.a(a.i3(b),$async$dR)
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
return A.a(q.d.e4(new A.tX(q,p),"readonly"),$async$eV)
case 2:s=3
return A.a(A.JE(p,t.H),$async$eV)
case 3:return A.e(null,r)}})
return A.f($async$eV,r)},
cP(){return this.cI(!1)},
iR(a,b){return this.w.d.I(a)?1:0},
kR(a,b){var s=this
s.w.d.G(0,a)
if(!s.y.G(0,a))s.f1(new A.ka(s,a,new A.at(new A.w($.B,t.D),t.F)))},
kS(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Fj(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dC(new A.jM(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.f1(new A.hH(p,o,new A.at(new A.w($.B,t.D),t.F)))
return new A.hR(new A.oZ(p,q.a,o),0)},
kU(a){}}
A.tY.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.v(A.A("Future already completed"))
p.cz(null)}o.cI(this.c)},
$S:2}
A.tZ.prototype={
$1(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:26}
A.tX.prototype={
$1(a){return this.nS(a)},
nS(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.io(),$async$$1)
case 2:m=c
l=q.a
l.z.D(0,m)
p=m.ga0(),p=p.gt(p),o=q.b,l=l.w.d
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
A.oZ.prototype={
iU(a,b){this.b.iU(a,b)},
giT(){return 0},
giV(){return 4096},
kQ(){return this.b.d>=2?1:0},
iS(){},
fQ(){return this.b.fQ()},
kT(a){this.b.d=a
return null},
kV(a){},
nK(a,b){return 12},
fR(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.v(A.hw(10))
s.b.fR(a)
if(!r.y.E(0,s.c))r.f1(new A.kg(new A.AK(s,a),new A.at(new A.w($.B,t.D),t.F)))},
kW(a){this.b.d=a
return null},
eE(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.v(A.hw(10))
s=m.c
if(l.y.E(0,s)){m.b.eE(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cA(new Uint8Array(0),0)
q=J.bQ(B.f.gac(r.a),0,r.b)
m.b.eE(a,b)
p=new Uint8Array(a.length)
B.f.d1(p,0,a)
o=A.l([],t.p8)
n=$.B
o.push(new A.p6(b,p))
l.f1(new A.i_(l,s,q,o,new A.at(new A.w(n,t.D),t.F)))},
$ibs:1,
$ijX:1}
A.AK.prototype={
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
A.bd.prototype={
kt(a){a.hl(a.c,this,!1)
return!0}}
A.kg.prototype={
aZ(a){return this.w.$1(a)}}
A.ka.prototype={
kt(a){var s,r,q,p
if(!a.gF(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.ka)if(s.x===r)return!1
else s=s.gfz()
else if(s instanceof A.i_){q=s.gfz()
if(s.x===r){p=s.a
p.toString
p.jT(A.n(s).i("b9.E").a(s))}s=q}else if(s instanceof A.hH){if(s.x===r){r=s.a
r.toString
r.jT(A.n(s).i("b9.E").a(s))
return!1}s=s.gfz()}else break}a.hl(a.c,this,!1)
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
return A.a(a.hZ(n),$async$aZ)
case 3:return A.e(null,r)}})
return A.f($async$aZ,r)}}
A.hH.prototype={
aZ(a){return this.xn(a)},
xn(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hW(p),$async$aZ)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aZ,r)}}
A.i_.prototype={
kt(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.i_)if(r.x===s){B.b.D(r.z,this.z)
return!1}else r=r.gfz()
else if(r instanceof A.hH){if(r.x===s)break
r=r.gfz()}else break
a.hl(a.c,this,!1)
return!0},
aZ(a){return this.xp(a)},
xp(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.An(m,A.u(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.p)(m),++o){n=m[o]
l.u8(n.a,n.b)}k=a
s=3
return A.a(q.w.dR(a,q.x),$async$aZ)
case 3:s=2
return A.a(k.az(c,l),$async$aZ)
case 2:return A.e(null,r)}})
return A.f($async$aZ,r)}}
A.fN.prototype={
a7(){return"FileType."+this.b}}
A.hi.prototype={
bU(){var s=this.d
if(s!=null)return s
throw A.b(A.A("VFS closed"))},
iR(a,b){var s=$.Da().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bU().bw(s)?1:0},
kR(a,b){var s=$.Da().h(0,a)
if(s==null){this.e.d.G(0,a)
return null}else this.bU().fs(s,!1)},
kS(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dC(a,b)
s=$.Da().h(0,p)
if(s==null)return q.e.dC(a,b)
r=q.bU()
if(!r.bw(s))if((b&4)!==0){r.dm(s).truncate(0)
r.fs(s,!0)}else throw A.b(B.eh)
return new A.hR(new A.pm(q,s,(b&8)!==0),0)},
kU(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cW(a,b){return this.wD(a,b)},
cV(a){return this.cW(a,!1)},
wD(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.xN(a,b)
s=2
return A.a(m.$1("meta"),$async$cW)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cW)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cW)
case 4:o=d
n=q.d=new A.B3(new Uint8Array(2),l,p,o)
if(k){n.fs(B.b4,p.getSize()>0)
n.fs(B.b5,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cW,r)}}
A.xN.prototype={
oi(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a3(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a3(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.oi(a)},
$S:215}
A.pm.prototype={
ns(a,b){return A.Fg(this.a.bU().dm(this.b),a,{at:b})},
kQ(){return this.d>=2?1:0},
iS(){var s=this.a,r=this.b
s.bU().dm(r).flush()
if(this.c)s.bU().fs(r,!1)},
fQ(){return this.a.bU().dm(this.b).getSize()},
kT(a){this.d=a},
kV(a){this.a.bU().dm(this.b).flush()},
fR(a){this.a.bU().dm(this.b).truncate(a)},
kW(a){this.d=a},
eE(a,b){if(A.Fh(this.a.bU().dm(this.b),a,{at:b})<a.length)throw A.b(B.ej)}}
A.B3.prototype={
bw(a){var s=this.a
A.Fg(this.b,s,{at:0})
return s[a.a]!==0},
fs(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.J(s)
s[a.a]=r
A.Fh(this.b,s,{at:0})},
dm(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.yG.prototype={
pf(a,b){var s=this,r=s.c
r.a!==$&&A.ej()
r.a=s
r=t.S
A.Ap(new A.yH(s),r)
A.Ap(new A.yI(s),r)
s.r=A.Ap(new A.yJ(s),r)
s.w=A.Ap(new A.yK(s),r)},
e9(a,b){var s=J.I(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bY(this.b.buffer,0,null)
B.f.aA(q,r,r+s.gm(a),a)
B.f.kl(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cL(a){return this.e9(a,0)},
mV(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mT(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mU(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.yH.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.yI.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.yJ.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.yK.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.iy.prototype={}
A.wS.prototype={
pc(a){var s,r=this,q=r.a
q.start()
r.c=A.bt(q,"message",new A.wW(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.l4()
q.toString
A.jZ(q,s,null,null,!1).W(new A.wX(r),t.P)}},
jw(a){return this.qK(a)},
qK(a){var s=0,r=A.h(t.H),q=this
var $async$jw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.O1(a,new A.wT(q),q.gvZ(),new A.wU(q),new A.wV(q))
return A.e(null,r)}})
return A.f($async$jw,r)},
fX(a,b,c){return this.oH(a,b,c,c)},
oH(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fX=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.J8(null))
o=p.e++
n=new A.w($.B,t.a7)
p.f.j(0,o,new A.at(n,t.h1))
a.i=o
p.a.postMessage(a,A.i8(a))
s=3
return A.a(n,$async$fX)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Ky(m))
case 1:return A.e(q,r)}})
return A.f($async$fX,r)},
r2(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.v()
s=q.d
if(s!=null)s.v()
for(s=q.f,r=new A.aY(s,s.r,s.e,A.n(s).i("aY<2>"));r.k();)r.d.aR(new A.iu(a))
s.aq(0)
p.ak()},
lZ(){return this.r2(null)}}
A.wW.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lZ()
return}this.a.jw(A.bi(a.data))},
$S:1}
A.wX.prototype={
$1(a){this.a.lZ()
a.a.ak()},
$S:216}
A.wV.prototype={
$1(a){var s=this.a.f.G(0,a.i)
if(s!=null)s.aB(a)},
$S:23}
A.wU.prototype={
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
return A.a(t.nW.b(j)?j:A.bC(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.D(a0)
k=A.ae(a0)
if(!(l instanceof A.dx)){b.console.error("Error in worker: "+J.Z(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.cf){h=A.Jw(b)
g=0}else{g=b instanceof A.dx?1:null
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
d.a.postMessage(c,A.i8(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:217}
A.wT.prototype={
$1(a){var s=this.a.r.G(0,a.i)
if(s!=null)s.abort()},
$S:23}
A.iu.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iH:1}
A.rv.prototype={
cn(a){return this.wm(a)},
wm(a){var s=0,r=A.h(t.n),q
var $async$cn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.yP(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cn,r)}}
A.lM.prototype={}
A.rd.prototype={}
A.eY.prototype={}
A.m5.prototype={
iq(){var s=0,r=A.h(t.H),q=this
var $async$iq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cV(q.b),$async$iq)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iq,r)},
kF(){var s=0,r=A.h(t.H),q=this
var $async$kF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kF,r)}}
A.ty.prototype={
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
A.yW.prototype={
$1(a){var s=new A.w($.B,t.D),r=new A.d6(new A.at(s,t.F))
this.a.a=r
this.b.aB(r)
return A.JF(s)},
$S:218}
A.yX.prototype={
$2(a,b){var s,r,q
A.bi(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bu(new A.dx("Operation was cancelled"),b)
else q.bu(a,b)}return null},
$S:219}
A.d6.prototype={}
A.lS.prototype={
gul(){if(this.c.a)return!1
return!this.d||this.f!=null},
dJ(a){return this.pm(a)},
pm(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dJ=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.l4()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jZ(n,o.a,null,o.gqO(),!0),$async$dJ)
case 6:m=c
s=7
return A.a(A.jZ(n,o.b,a,null,!1),$async$dJ)
case 7:l=c
j=o.e
j=j==null?null:j.iq()
s=8
return A.a(j instanceof A.w?j:A.bC(j,t.H),$async$dJ)
case 8:o.f=new A.a0(m,l)
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
return A.f($async$dJ,r)},
qP(){this.nu()},
ky(a,b,c){return this.c.iN(new A.rK(this,a,b,c),b,c)},
nu(){return this.c.kP(new A.rL(this),t.H)}}
A.rK.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dJ(r.c).W(new A.rJ(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rJ.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rL.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kF()
s.a.ak()
r.a.ak()
p.f=null}},
$S:2}
A.ji.prototype={
iN(a,b,c){return this.xT(a,b,c,c)},
kP(a,b){return this.iN(a,null,b)},
xT(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iN=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.aq)
h.a=!1
o=new A.vX(h,p)
if(!p.a){h.a=p.a=!0
q=A.iO(a,c).b2(o)
s=1
break}else{n={}
m=new A.w($.B,c.i("w<0>"))
l=new A.at(m,c.i("at<0>"))
n.a=null
h=new A.vW(h,n,l,a,c)
if(!g)n.a=A.bt(b,"abort",new A.vV(n,p,l,h),!1,t.m)
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
return A.f($async$iN,r)}}
A.vX.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gF(0)){s=r.b
if(s===r.c)A.v(A.az());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.vW.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.v()
r.c.aB(A.iO(r.d,r.e))},
$S:0}
A.vV.prototype={
$1(a){var s,r=this
r.a.a.v()
s=r.c
if((s.a.a&30)===0){r.b.b.G(0,r.d)
s.aR(B.aq)}},
$S:1}
A.eu.prototype={
gnA(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
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
A.t0.prototype={
$1(a){if(a!=null)return A.G(a)
return null},
$S:220}
A.mR.prototype={
a7(){return"MessageType."+this.b}}
A.xz.prototype={
uV(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.ia(a,b)
case"connect":return p.kn(a,b)
case"custom":return p.ej(a,b)
case"fileSystemExists":return p.fj(a,b)
case"fileSystemFlush":return p.fk(a,b)
case"fileSystemAccess":return p.fi(a,b)
case"runQuery":return p.ig(a,b)
case"exclusiveLock":return p.i9(a,b)
case"releaseLock":s=p.bD(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.v(A.A("Lock to be released is not active."))
q.b.ak()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.i7(a,b)
case"openAdditionalConnection":return p.ib(a,b)
case"updateRequest":return p.ih(a,b)
case"rollbackRequest":return p.ie(a,b)
case"commitRequest":return p.i8(a,b)
case"dedicatedCompatibilityCheck":return p.dT(a,b)
case"sharedCompatibilityCheck":return p.dT(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dT(a,b)
default:r=A.fd(new A.bG(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.w($.B,t.hl)
q.cw(r)
return q}}}
A.dD.prototype={
a7(){return"FileSystemImplementation."+this.b}}
A.cz.prototype={
a7(){return"TypeCode."+this.b},
uC(a){var s=null
switch(this.a){case 0:s=A.v(A.S("Unsupported type code",null))
break
case 1:a=A.aj(A.fc(a))
s=a
break
case 2:s=A.Gg(t.bJ.a(a).toString(),null)
break
case 3:A.fc(a)
s=a
break
case 4:A.G(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.i1(a)
s=a
break
case 6:break}return s}}
A.ew.prototype={
mN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.S("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aI:B.b9[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.aj(A.fc(h))))
if(k!==0)a.bI(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bI(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.fc(h))
if(k!==0)a.bI(k,e)
break
case 4:g=B.e.A(A.G(h))
k=s.dart_sqlite3_bind_text(d,i,c.cL(g),g.length)
if(k!==0)a.bI(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cL(h),h.length)
if(k!==0)a.bI(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bI(k,e)
break
case 7:f=A.i1(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bI(k,e)
break
case 0:throw A.b(A.a2("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mz()},
h(a,b){var s=this.c[b],r=s>=8?B.aI:B.b9[s]
return r.uC(this.a[b])},
j(a,b,c){this.mz()},
mz(){throw A.b(A.a2("decodeValues list is unmodifiable"))}}
A.Ct.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:23}
A.qP.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qQ.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qT.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qU.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qV.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.wO.prototype={
vc(){var s,r,q,p
for(s=this.b,r=new A.aY(s,s.r,s.e,A.n(s).i("aY<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aq(0)}}
A.iK.prototype={
a7(){return"FileType."+this.b}}
A.dV.prototype={
a7(){return"StorageMode."+this.b}}
A.ha.prototype={
l(a){return"Remote error: "+this.a},
$iH:1}
A.dx.prototype={}
A.Ca.prototype={
$1(a){return A.bi(a.data)},
$S:222}
A.kw.prototype={
v(){var s=this.a
if(s!=null)s.v()
this.a=null}}
A.hG.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.v()
q.d.v()
q.e.v()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)p[n].abort()
B.b.aq(p)
p=q.f
if(p!=null)p.b.ak()
s=2
return A.a(q.a.f8(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
mr(a){var s=new v.G.AbortController()
a.onabort=A.Cb(new A.A2(s))
this.w.push(s)
return s},
kN(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gul()){r=p.mr(b)
o=s.ky(c,r.signal,d).b2(new A.A6(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.A("Requested operation on inactive lock state."))}if(o==null)o=A.iO(c,d)
q=p.a.z
return q instanceof A.dH?o.b2(q.gvD()):o},
wA(a){var s=this,r=s.mr(a),q=new A.w($.B,t.hy),p=new A.aF(q,t.ho),o=t.H
A.Dq(s.a.f.ky(new A.A3(s,p),r.signal,o),new A.A4(p),o,t.K)
return q.b2(new A.A5(s,r))}}
A.A2.prototype={
$0(){return this.a.abort()},
$S:0}
A.A6.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.A3.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.B,t.D)
s.f=new A.a0(r,new A.aF(q,t.h))
this.b.aB(r)
return q},
$S:3}
A.A4.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bu(a,b)},
$S:6}
A.A5.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.hE.prototype={
ph(a,b,c){this.b.a.b2(new A.zN(this))},
dT(a,b){return this.qF(a,b)},
qF(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mP(a),$async$dT)
case 3:q={r:d.gnA(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
kn(a,b){return this.vM(a,b)},
vM(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$kn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glS()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.i8(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kn,r)},
ej(a,b){return this.vN(a,b)},
vN(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ej=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lA(l)
n=a.r
s=7
return A.a(o.a.gcp(),$async$ej)
case 7:s=6
return A.a(d.cQ(p,new A.rd(n)),$async$ej)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cQ(p,new A.lM(a)),$async$ej)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ej,r)},
ia(a,b){return this.w0(a,b)},
w0(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ia=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kP(new A.zS(p,a),t.m),$async$ia)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
ig(a,b){return this.w4(a,b)},
w4(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ig=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bD(a)
n=o.a
s=3
return A.a(n.gcp(),$async$ig)
case 3:m=d
q=o.kN(a.z,b,new A.zV(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ig,r)},
i9(a,b){return this.vR(a,b)},
vR(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bD(a).wA(b),$async$i9)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)},
i8(a,b){return this.vL(a,b)},
vL(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bD(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.zP(p,o),a),$async$i8)
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
return A.f($async$i8,r)},
ie(a,b){return this.w3(a,b)},
w3(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ie=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bD(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.zU(p,o),a),$async$ie)
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
return A.f($async$ie,r)},
ih(a,b){return this.w6(a,b)},
w6(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ih=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bD(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.zX(p,o),a),$async$ih)
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
return A.f($async$ih,r)},
ib(a,b){return this.w1(a,b)},
w1(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ib=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bD(a).a;++m.w
s=3
return A.a(A.Cw(),$async$ib)
case 3:o=d
n=o.a
p.w.lc(o.b).x.push(A.Gh(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)},
i7(a,b){return this.vK(a,b)},
vK(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$i7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bD(a)
B.b.G(p.x,o)
s=3
return A.a(o.q(),$async$i7)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)},
fk(a,b){return this.vU(a,b)},
vU(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bD(a).a.gd_(),$async$fk)
case 3:o=d
s=o instanceof A.dH?4:5
break
case 4:s=6
return A.a(o.cI(!1),$async$fk)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
fi(a,b){return this.vS(a,b)},
vS(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bD(a)
n=B.ba[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gd_(),$async$fi)
case 4:s=3
return A.a(l.kN(null,k,new j.zQ(d,n,m,a),t.m),$async$fi)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
fj(a,b){return this.vT(a,b)},
vT(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bD(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gd_(),$async$fj)
case 4:s=3
return A.a(n.kN(null,m,new l.zR(d,a),t.y),$async$fj)
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
return A.a(p.fX({r:a,z:null,i:0,d:null,t:"custom"},B.df,t.m),$async$f6)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f6,r)},
lA(a){return B.b.n4(this.x,new A.zM(a))},
bD(a){var s=a.d
if(s!=null)return this.lA(s)
else throw A.b(A.S("Request requires database id",null))},
$iF4:1}
A.zN.prototype={
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
A.zS.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cn(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vB(h.d,A.Jz(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gd_():m.gcp(),$async$$0)
case 8:l=A.Gh(m,null)
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
$S:223}
A.zV.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.A("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ew(s,r,A.bY(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oC(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.aj(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.vr(l,k.s,q)
s=o.d
return A.HP(s.sqlite3_get_autocommit(p)!==0,m,A.aj(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:35}
A.zP.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcp(),$async$$0)
case 3:q=b.a.pO().gcv().aW(new A.zO(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.zO.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.i8(s))},
$S:74}
A.zU.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcp(),$async$$0)
case 3:q=b.a.t8().gcv().aW(new A.zT(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.zT.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.i8(s))},
$S:74}
A.zX.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcp(),$async$$0)
case 3:q=b.a.tI().gcv().aW(new A.zW(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:226}
A.zW.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.i8(s))},
$S:227}
A.zQ.prototype={
$0(){var s,r,q,p=this,o=p.a.dC(new A.jM(A.GX(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fR(s.byteLength)
o.eE(A.bY(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fQ()
r=new Uint8Array(q)
o.iU(r,0)
q={r:t.a.a(J.IR(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iS()}},
$S:35}
A.zR.prototype={
$0(){return this.a.iR(A.GX(B.ba[this.b.f]),0)===1},
$S:49}
A.zM.prototype={
$1(a){return a.b===this.a},
$S:228}
A.lT.prototype={
gd_(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gd_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iO(new A.rO(p),t.H):o,$async$gd_)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gd_,r)},
gcp(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcp=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iO(new A.rN(p),t.u):o,$async$gcp)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcp,r)},
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
l=$.EK()
A.Do(m)
k=l.a.get(m)
if(k==null)A.v(A.A("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bC(j,t.H),$async$q)
case 6:q.f.nu()
return A.e(null,r)}})
return A.f($async$q,r)},
m6(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.G(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a0(s,!0)
p=a.iz(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.G(0,new A.R(n,A.n(n).i("R<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a0(p,!0)}return new A.a0(p,!1)},
vr(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aI(b,B.j)
else{s=null
r=null
q=this.m6(a,b)
s=q.a
r=q.b
try{s.ef(new A.lN(c.guj()))}finally{if(r)s.dw()
else s.q()}}},
oC(a,b,c){var s,r=null,q=null,p=this.m6(a,b)
r=p.a
q=p.b
try{s=A.Kz(r,c)
return s}finally{if(q)r.dw()
else r.q()}}}
A.rO.prototype={
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
return A.a(A.xM("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ged()
s=3
break
case 5:case 6:s=10
return A.a(A.m6("drift_db/"+l.c,k===B.ay,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ged()
s=3
break
case 7:s=11
return A.a(A.mw(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ged()
s=3
break
case 8:l.z=A.Dt("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rN.prototype={
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
o.n9()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e9(B.e.A(n.a),1),n,0)
if(m===0)A.v(A.A("could not register vfs"))
$.EK().j(0,n,m)
s=5
return A.a(l.f.ky(new A.rM(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:75}
A.rM.prototype={
$0(){var s=this.a
return s.a.b.iw(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:75}
A.zg.prototype={
glS(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.oL()
r.Q!==$&&A.D8()
r.Q=s
q=s}return q},
ek(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ek=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cD(A.cE(A.Mt(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ek)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.iy(i.port,i.lockName,null)
n.lc(l)
s=9
break
case 10:s=A.Oo(m.t)?11:12
break
case 11:s=13
return A.a(n.mP(m),$async$ek)
case 13:k=b
j.postMessage(k.gnA())
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
lc(a){var s=this,r=A.Lj(a,s.d++,s)
s.c.push(r)
r.b.a.b2(new A.zh(s,r))
return r},
mP(a){return this.x.kP(new A.zi(this,a),t.p6)},
cn(a){return this.wn(a)},
wn(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bi(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.A("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bC(n,t.he),$async$cn)
case 5:s=3
break
case 4:o=A.Dq(q.b.cn(m),new A.zj(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cn)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cn,r)},
vB(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aY(s,s.r,s.e,A.n(s).i("aY<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ay||b===B.b3
o=A.DA(t.cj)
n=c===0?null:new A.wO(c,A.dL(null,null,t.N,t.fw))
n=new A.lT(this,r,a,b,d,new A.lS(q+"-outer",q,new A.ji(o),p),n)
s.j(0,r,n)
return n}}
A.zh.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.zi.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.eg(),$async$$0)
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
return A.a(A.pM(),$async$$0)
case 9:case 8:j=a1
i=A.aO(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glS()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.i8(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hK(n,"message",!1,t.d4).gH(0),$async$$0)
case 15:e=b.Jf(a.bi(a1.data))
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
return A.a(A.ib(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a0(B.bl,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.Cs(c),$async$$0)
case 23:if(a1)i.u(0,new A.a0(B.bm,c))
case 22:d=A.N(i,i.$ti.c)
q=new A.eu(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:230}
A.zj.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:231}
A.kI.prototype={}
A.oQ.prototype={
gn7(){return new A.hK(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.pk.prototype={
gn7(){return new A.ds(new A.Bi(this),t.k8)},
q(){}}
A.Bi.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.bt(this.a.a,"connect",new A.Bf(new A.Bj(s,r,a)),!1,t.m))
a.r=new A.Bg(r)},
$S:232}
A.Bj.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bt(a,"message",new A.Bh(this.c),!1,t.m))},
$S:1}
A.Bh.prototype={
$1(a){this.a.u7(a)},
$S:1}
A.Bf.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bR(r,A.a1(r).i("bR<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.Bg.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].v()},
$S:2}
A.oR.prototype={
oL(){var s=v.G
if(!("Worker" in s))return null
return new A.Ai(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.Ai.prototype={}
A.nP.prototype={
gfZ(){return A.G(this.c)}}
A.y3.prototype={
gkx(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iX(a){var s,r=this,q=r.d=J.IV(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
n2(a,b){var s
if(this.iX(a))return
if(b==null)if(a instanceof A.eE)b="/"+a.a+"/"
else{s=J.Z(a)
s=A.C(s,"\\","\\\\")
b='"'+A.C(s,'"','\\"')+'"'}this.lI(b)},
fg(a){return this.n2(a,null)},
vv(){if(this.c===this.b.length)return
this.lI("no more input")},
vq(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.v(A.b4("position must be greater than or equal to 0."))
else if(c>n.length)A.v(A.b4("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.v(A.b4("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.xO(s,r,new Uint32Array(q))
p.pd(new A.cn(n),s)
o=c+b
if(o>q)A.v(A.b4("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.v(A.b4("Start may not be negative, was "+c+"."))
throw A.b(new A.nP(n,a,new A.hL(p,c,o)))},
lI(a){this.vq("expected "+a+".",0,this.c)}}
A.ht.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Fk(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Fk(b,this))
s=this.a
s.$flags&2&&A.J(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.J(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lw(b)
B.f.aA(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.tF(q)
q=r.a
s=r.b++
q.$flags&2&&A.J(q)
q[s]=b},
lw(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
tF(a){var s=this.lw(null)
B.f.aA(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.aA(c,0,s,null,null))
s=this.a
if(d instanceof A.cA)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.p_.prototype={}
A.cA.prototype={}
A.Dm.prototype={}
A.hK.prototype={
aa(a,b,c,d){return A.bt(this.a,this.b,a,!1,this.$ti.c)},
bx(a,b,c){return this.aa(a,null,b,c)}}
A.ke.prototype={
v(){var s=this,r=A.bf(null,t.H)
if(s.b==null)return r
s.jU()
s.d=s.b=null
return r},
iu(a){var s,r=this
if(r.b==null)throw A.b(A.A("Subscription has been canceled."))
r.jU()
s=A.Hs(new A.Am(a),t.m)
s=s==null?null:A.d0(s)
r.d=s
r.jS()},
b5(){if(this.b==null)return;++this.a
this.jU()},
aY(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jS()},
jS(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jU(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibq:1}
A.Al.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.Am.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dK.prototype
s.oX=s.l
s=A.bI.prototype
s.oT=s.na
s.oU=s.nb
s.oW=s.nd
s.oV=s.nc
s=A.b7.prototype
s.iZ=s.aD
s.l9=s.aL
s.la=s.aV
s=A.dq.prototype
s.p_=s.lt
s.p0=s.lN
s.p5=s.mo
s=A.L.prototype
s.l8=s.ai
s=A.aG.prototype
s.l7=s.ui
s=A.kx.prototype
s.p6=s.q
s=A.o.prototype
s.oS=s.dB
s=A.lo.prototype
s.l5=s.i5
s=A.fw.prototype
s.l6=s.fa
s=A.hk.prototype
s.oZ=s.a3
s.oY=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"MD","JQ",50)
r(A,"MQ","Kj",10)
q(A,"No","L4",19)
q(A,"Np","L5",19)
q(A,"Nq","L6",19)
q(A,"Nr","MS",15)
r(A,"Hx","Ng",0)
q(A,"Ns","MT",27)
s(A,"Nt","MV",14)
r(A,"Cn","MU",0)
p(A,"Ny",5,null,["$5"],["Na"],234,0)
p(A,"ND",4,null,["$1$4","$4"],["Ch",function(a,b,c,d){return A.Ch(a,b,c,d,t.z)}],235,0)
p(A,"NF",5,null,["$2$5","$5"],["Ci",function(a,b,c,d,e){var i=t.z
return A.Ci(a,b,c,d,e,i,i)}],236,0)
p(A,"NE",6,null,["$3$6"],["En"],237,0)
p(A,"NB",4,null,["$1$4","$4"],["He",function(a,b,c,d){return A.He(a,b,c,d,t.z)}],238,0)
p(A,"NC",4,null,["$2$4","$4"],["Hf",function(a,b,c,d){var i=t.z
return A.Hf(a,b,c,d,i,i)}],239,0)
p(A,"NA",4,null,["$3$4","$4"],["Hd",function(a,b,c,d){var i=t.z
return A.Hd(a,b,c,d,i,i,i)}],240,0)
p(A,"Nw",5,null,["$5"],["N9"],241,0)
p(A,"NG",4,null,["$4"],["Cj"],242,0)
p(A,"Nv",5,null,["$5"],["N8"],243,0)
p(A,"Nu",5,null,["$5"],["N7"],244,0)
p(A,"Nz",4,null,["$4"],["Nb"],245,0)
p(A,"Nx",5,null,["$5"],["Hc"],246,0)
var j
o(j=A.f0.prototype,"geP","bR",0)
o(j,"geQ","bS",0)
n(A.f1.prototype,"gus",0,1,null,["$2","$1"],["bu","aR"],71,0,0)
m(A.w.prototype,"gjb","pT",14)
n(j=A.eb.prototype,"gu4",0,1,null,["$2","$1"],["bi","jZ"],71,0,0)
l(j,"gpt","aD",17)
m(j,"gpp","aL",14)
o(j,"gpK","aV",0)
o(j=A.e5.prototype,"geP","bR",0)
o(j,"geQ","bS",0)
o(j=A.b7.prototype,"geP","bR",0)
o(j,"geQ","bS",0)
o(A.hJ.prototype,"gm3","rl",0)
l(j=A.cD.prototype,"grd","re",17)
m(j,"grh","ri",14)
o(j,"grf","rg",0)
o(j=A.hM.prototype,"geP","bR",0)
o(j,"geQ","bS",0)
l(j,"gjq","jr",17)
m(j,"gju","jv",151)
o(j,"gjs","jt",0)
o(j=A.hT.prototype,"geP","bR",0)
o(j,"geQ","bS",0)
l(j,"gjq","jr",17)
m(j,"gju","jv",14)
o(j,"gjs","jt",0)
s(A,"Et","Mm",33)
q(A,"Eu","Mn",34)
s(A,"NL","JY",50)
q(A,"NV","Mq",39)
k(j=A.oG.prototype,"gu3","u",17)
o(j,"ged","q",0)
q(A,"HC","Oh",34)
s(A,"HB","Og",33)
q(A,"NW","KX",7)
p(A,"Ou",2,null,["$1$2","$2"],["HN",function(a,b){return A.HN(a,b,t.cZ)}],247,0)
m(j=A.lW.prototype,"gvp","V",33)
l(j,"gw7","ad",34)
l(j,"gwe","wf",15)
q(A,"NJ","J7",7)
o(j=A.js.prototype,"grj","rk",0)
l(j,"grm","rn",113)
q(A,"OG","Kh",60)
q(A,"HA","Jn",249)
q(A,"NR","Js",250)
q(A,"NT","JL",251)
q(A,"NQ","J3",252)
q(A,"NS","Jy",253)
q(A,"pO","Jr",7)
q(A,"O7","Fe",254)
r(A,"O8","Nj",255)
r(A,"Oq","Mo",10)
r(A,"PZ","Mp",10)
q(A,"Ow","N6",256)
l(A.n8.prototype,"gx0","x3",9)
q(A,"NN","Di",171)
l(j=A.nQ.prototype,"gvX","vY",42)
l(j,"gvV","vW",137)
o(j,"gr9","jE",0)
q(A,"OM","KP",60)
o(A.oK.prototype,"gvF","km",0)
o(A.nk.prototype,"gke","fa",0)
o(A.n3.prototype,"gke","fa",0)
l(j=A.fw.prototype,"gra","rb",42)
o(j,"gmB","e7",3)
m(A.ou.prototype,"gqG","hj",59)
m(A.ot.prototype,"gqM","hk",59)
l(j=A.lR.prototype,"gwq","wr",9)
m(j,"gwo","wp",186)
n(j,"gyl",0,5,null,["$5"],["ym"],187,0,0)
n(j,"gya",0,3,null,["$3"],["yb"],188,0,0)
n(j,"gy0",0,4,null,["$4"],["y3"],62,0,0)
n(j,"gyh",0,4,null,["$4"],["yi"],62,0,0)
n(j,"gyn",0,3,null,["$3"],["yo"],190,0,0)
m(j,"gys","yt",63)
m(j,"gy8","y9",63)
l(j,"gy6","y7",46)
n(j,"gyp",0,4,null,["$4"],["yq"],65,0,0)
n(j,"gyA",0,4,null,["$4"],["yB"],65,0,0)
m(j,"gyw","yx",194)
m(j,"gyu","yv",18)
m(j,"gyf","yg",18)
m(j,"gyj","yk",18)
m(j,"gyy","yz",18)
m(j,"gy4","y5",18)
l(j,"giT","yc",46)
n(j,"gyd",0,3,null,["$3"],["ye"],196,0,0)
l(j,"giV","yr",46)
l(j,"guY","uZ",19)
l(j,"guT","uU",197)
n(j,"guW",0,5,null,["$5"],["uX"],198,0,0)
n(j,"gv3",0,4,null,["$4"],["v4"],44,0,0)
n(j,"gv7",0,4,null,["$4"],["v8"],44,0,0)
n(j,"gv5",0,4,null,["$4"],["v6"],44,0,0)
m(j,"gv9","va",68)
m(j,"gv1","v2",68)
n(j,"gv_",0,5,null,["$5"],["v0"],201,0,0)
m(j,"guR","uS",202)
m(j,"guP","uQ",203)
n(j,"guN",0,3,null,["$3"],["uO"],204,0,0)
o(j=A.dH.prototype,"ged","q",3)
o(j,"gvD","cP",3)
o(A.hi.prototype,"ged","q",0)
o(A.lS.prototype,"gqO","qP",0)
l(A.ew.prototype,"guj","mN",221)
l(A.hE.prototype,"gvZ","w_",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.Dy,J.mz,A.jG,J.ft,A.Aa,A.zJ,A.o,A.lw,A.es,A.X,A.ag,A.L,A.xK,A.as,A.mP,A.cY,A.m2,A.o2,A.nB,A.m_,A.os,A.mx,A.iL,A.oe,A.jU,A.hQ,A.j5,A.fB,A.hN,A.cu,A.yy,A.n2,A.iF,A.ku,A.va,A.bJ,A.aY,A.mM,A.eE,A.hP,A.oz,A.ho,A.Br,A.oH,A.pw,A.ct,A.oW,A.pt,A.ky,A.k1,A.oB,A.kj,A.pq,A.ar,A.ac,A.b7,A.k7,A.o3,A.kh,A.f1,A.ci,A.w,A.oA,A.eb,A.pr,A.k3,A.ox,A.oS,A.Aj,A.e9,A.hJ,A.cD,A.kd,A.BQ,A.BS,A.BR,A.BO,A.BP,A.BN,A.BK,A.pC,A.BJ,A.BI,A.BM,A.BL,A.pB,A.pD,A.pA,A.i0,A.k0,A.oX,A.B1,A.e8,A.p3,A.b9,A.p5,A.pv,A.p4,A.nO,A.lz,A.aG,A.oD,A.qh,A.oC,A.lx,A.pl,A.f2,A.AY,A.Bs,A.py,A.dt,A.aP,A.oV,A.aH,A.aE,A.Ak,A.n5,A.jO,A.oU,A.bn,A.my,A.U,A.W,A.pp,A.jQ,A.nt,A.a5,A.kF,A.yD,A.cj,A.m3,A.n1,A.AR,A.AS,A.m0,A.a6,A.lX,A.iV,A.eG,A.hY,A.hO,A.j4,A.lW,A.n0,A.of,A.co,A.c8,A.tz,A.qu,A.j3,A.jJ,A.vq,A.jI,A.xJ,A.re,A.ru,A.A9,A.er,A.ln,A.lo,A.qd,A.mU,A.fT,A.qc,A.js,A.wJ,A.Bk,A.wy,A.wg,A.ju,A.hU,A.wz,A.Bl,A.eC,A.dE,A.ms,A.cN,A.dF,A.dX,A.we,A.lE,A.jw,A.c9,A.mj,A.nn,A.ai,A.vT,A.xp,A.eP,A.cR,A.ni,A.xH,A.nw,A.eU,A.ba,A.eX,A.nI,A.dT,A.a4,A.qr,A.qs,A.qt,A.t1,A.fa,A.B_,A.ps,A.hS,A.u9,A.iC,A.qO,A.iB,A.dM,A.iG,A.bm,A.vh,A.cL,A.th,A.md,A.qf,A.fu,A.io,A.nM,A.iJ,A.t4,A.v8,A.nK,A.wK,A.p2,A.vr,A.vU,A.bx,A.n8,A.v9,A.Bt,A.xn,A.dc,A.b5,A.cq,A.nh,A.cS,A.xG,A.cs,A.xx,A.b1,A.dG,A.fO,A.eB,A.bZ,A.lG,A.c7,A.nv,A.xE,A.oJ,A.hC,A.q1,A.bl,A.r_,A.nQ,A.da,A.eL,A.j6,A.aQ,A.mQ,A.B8,A.B6,A.w0,A.qe,A.j2,A.jA,A.w5,A.ng,A.wZ,A.b2,A.x7,A.hp,A.y5,A.br,A.hn,A.df,A.h7,A.jz,A.cI,A.o4,A.y7,A.jy,A.jT,A.yl,A.cT,A.cr,A.eM,A.bL,A.Bd,A.yo,A.oK,A.hF,A.fw,A.zk,A.hA,A.or,A.yV,A.p7,A.rv,A.eY,A.oL,A.z_,A.z0,A.hB,A.ou,A.ot,A.r6,A.y4,A.n6,A.n7,A.xO,A.nE,A.hk,A.tA,A.bu,A.cB,A.cv,A.nH,A.cw,A.cf,A.lc,A.rx,A.ec,A.xQ,A.et,A.bb,A.lr,A.rc,A.pg,A.B7,A.bT,A.lN,A.dn,A.jM,A.yQ,A.yL,A.yS,A.yR,A.e1,A.dp,A.lR,A.de,A.f3,A.yM,A.q8,A.ki,A.An,A.p6,A.oZ,A.B3,A.yG,A.iy,A.xz,A.iu,A.lM,A.m5,A.ty,A.d6,A.lS,A.ji,A.eu,A.wO,A.ha,A.kw,A.hG,A.lT,A.zg,A.kI,A.oR,A.Ai,A.y3,A.Dm,A.ke])
q(J.mz,[J.mC,J.iX,J.aI,J.by,J.fQ,J.eD,J.dI])
q(J.aI,[J.dK,J.z,A.fZ,A.jk])
q(J.dK,[J.n9,J.e_,J.bU])
r(J.mA,A.jG)
r(J.u6,J.z)
q(J.eD,[J.iW,J.mD])
q(A.o,[A.e4,A.K,A.cp,A.aq,A.iH,A.eV,A.dg,A.e2,A.d7,A.f6,A.oy,A.po,A.hW,A.eF,A.jF])
q(A.e4,[A.ep,A.kJ])
r(A.kb,A.ep)
r(A.k8,A.kJ)
q(A.es,[A.qw,A.qp,A.qv,A.u_,A.ym,A.CN,A.CP,A.zr,A.zq,A.BW,A.BV,A.tw,A.tr,A.Ar,A.Aq,A.AC,A.AF,A.y_,A.y0,A.xY,A.Ah,A.Ag,A.Bc,A.AI,A.Ad,A.B0,A.vv,A.AW,A.rb,A.zE,A.ts,A.CR,A.CX,A.CY,A.Cx,A.qk,A.qm,A.qo,A.lq,A.qg,A.BY,A.qi,A.vz,A.CD,A.wx,A.ww,A.wh,A.ws,A.wt,A.wu,A.wv,A.wq,A.wr,A.wI,A.wC,A.wD,A.wA,A.wF,A.r9,A.ra,A.xr,A.xm,A.wM,A.xS,A.xT,A.uD,A.uE,A.uG,A.v1,A.uH,A.uI,A.uJ,A.uK,A.uL,A.uM,A.uN,A.uO,A.uP,A.uQ,A.uS,A.uT,A.uU,A.uV,A.uW,A.uX,A.uY,A.up,A.ur,A.uv,A.uc,A.ub,A.ut,A.us,A.uz,A.uA,A.uB,A.uC,A.uj,A.ul,A.un,A.uf,A.ud,A.ux,A.uy,A.ui,A.ug,A.rZ,A.rY,A.t_,A.rX,A.rW,A.rV,A.rU,A.rQ,A.rR,A.rS,A.vi,A.vk,A.vm,A.vo,A.vj,A.ti,A.tj,A.CW,A.t7,A.t5,A.t8,A.t9,A.tb,A.td,A.tf,A.D1,A.vu,A.vt,A.vs,A.vP,A.vL,A.vM,A.vO,A.vN,A.D5,A.wY,A.CC,A.C7,A.C9,A.C3,A.C4,A.xf,A.xh,A.xi,A.xj,A.xA,A.xD,A.xF,A.qK,A.qN,A.qJ,A.qM,A.qG,A.qF,A.qC,A.qL,A.qH,A.qE,A.qD,A.qI,A.qz,A.q2,A.q3,A.r1,A.r0,A.yi,A.y8,A.yg,A.yb,A.yc,A.yd,A.y9,A.Cu,A.Cv,A.q0,A.q_,A.vK,A.vI,A.vJ,A.vB,A.vC,A.vD,A.vE,A.vF,A.vG,A.w2,A.w3,A.wb,A.w9,A.w8,A.w7,A.wa,A.x5,A.x_,A.x1,A.x3,A.x8,A.xd,A.y6,A.CF,A.D0,A.CZ,A.D_,A.yx,A.yv,A.yr,A.yt,A.yp,A.A0,A.zY,A.xt,A.xs,A.zl,A.yU,A.ve,A.vf,A.vp,A.A7,A.A8,A.CL,A.CK,A.z2,A.zf,A.z9,A.zd,A.z5,A.z4,A.z7,A.za,A.zb,A.zc,A.r7,A.r8,A.Ck,A.tC,A.tB,A.tD,A.tF,A.tH,A.tE,A.tV,A.xU,A.rF,A.Bo,A.CU,A.D2,A.D3,A.q7,A.Ab,A.Ac,A.qR,A.qS,A.qW,A.qX,A.qY,A.tg,A.qb,A.q9,A.AL,A.AO,A.AP,A.tZ,A.tX,A.AK,A.xN,A.yH,A.yI,A.yJ,A.yK,A.wW,A.wX,A.wV,A.wU,A.wT,A.yW,A.rJ,A.vV,A.t0,A.Ct,A.qP,A.qQ,A.qT,A.qU,A.qV,A.Ca,A.zO,A.zT,A.zW,A.zM,A.Bi,A.Bj,A.Bh,A.Bf,A.Al,A.Am])
q(A.qw,[A.zK,A.qq,A.r5,A.u7,A.CO,A.BX,A.Cl,A.tx,A.tq,A.As,A.AD,A.AG,A.zn,A.AH,A.vb,A.vx,A.AZ,A.zD,A.BC,A.yE,A.BB,A.BA,A.tu,A.tt,A.qj,A.ql,A.qn,A.lp,A.vS,A.vA,A.wd,A.wj,A.wB,A.wf,A.C5,A.xq,A.xl,A.wN,A.xo,A.xI,A.D9,A.Cr,A.ua,A.ue,A.uh,A.rT,A.tk,A.vQ,A.D6,A.C6,A.xk,A.xB,A.xC,A.qB,A.q4,A.ya,A.yY,A.z3,A.z8,A.tG,A.rI,A.AQ,A.yX,A.A4,A.zj])
r(A.bR,A.k8)
q(A.X,[A.eq,A.bI,A.dq,A.p0])
q(A.ag,[A.dJ,A.nl,A.dl,A.mE,A.od,A.nu,A.oT,A.jt,A.j_,A.lg,A.bG,A.cX,A.oc,A.bp,A.lC])
q(A.L,[A.hv,A.ny,A.om,A.hy,A.ew,A.ht])
r(A.cn,A.hv)
q(A.qv,[A.CT,A.wQ,A.zs,A.zt,A.Bv,A.Bu,A.BU,A.zv,A.zw,A.zy,A.zz,A.zx,A.zu,A.tv,A.At,A.Ay,A.Ax,A.Av,A.Au,A.AB,A.AA,A.Az,A.AE,A.xZ,A.y1,A.xX,A.Bn,A.Bm,A.zm,A.zI,A.zH,A.B4,A.B2,A.BZ,A.C_,A.Af,A.Ae,A.Bb,A.Ba,A.Cg,A.BF,A.BE,A.rP,A.Cc,A.Cd,A.vy,A.wc,A.wo,A.wp,A.wl,A.wi,A.wm,A.wn,A.wk,A.wG,A.wH,A.wE,A.uF,A.uR,A.v2,A.v3,A.v4,A.v5,A.v6,A.v7,A.uZ,A.v_,A.v0,A.uo,A.uq,A.uu,A.uk,A.um,A.uw,A.t3,A.vl,A.vn,A.t6,A.ta,A.tc,A.te,A.C8,A.xg,A.t2,A.tW,A.to,A.tn,A.xW,A.qy,A.qA,A.qZ,A.r4,A.r3,A.r2,A.yf,A.ye,A.yh,A.x6,A.x0,A.x2,A.x4,A.x9,A.xe,A.xc,A.xb,A.xa,A.yk,A.w6,A.w1,A.yw,A.yu,A.ys,A.yq,A.A1,A.zZ,A.A_,A.xu,A.w_,A.vg,A.z1,A.z6,A.tU,A.tI,A.tP,A.tQ,A.tR,A.tS,A.tN,A.tO,A.tJ,A.tK,A.tL,A.tM,A.tT,A.AJ,A.rG,A.rH,A.rD,A.rC,A.rE,A.rz,A.ry,A.rA,A.rB,A.Bp,A.Bq,A.D4,A.ri,A.rf,A.rk,A.rm,A.ro,A.rh,A.rn,A.rs,A.rq,A.rp,A.rj,A.rl,A.rr,A.rg,A.q5,A.q6,A.yN,A.qa,A.AM,A.AN,A.Ao,A.tY,A.rK,A.rL,A.vX,A.vW,A.A2,A.A6,A.A3,A.A5,A.zN,A.zS,A.zV,A.zP,A.zU,A.zX,A.zQ,A.zR,A.rO,A.rN,A.rM,A.zh,A.zi,A.Bg])
q(A.K,[A.a_,A.ez,A.R,A.ao,A.aN,A.f5,A.kl])
q(A.a_,[A.cx,A.Y,A.bB,A.j1,A.p1])
r(A.ey,A.cp)
r(A.iD,A.eV)
r(A.fG,A.dg)
r(A.ex,A.d7)
q(A.hQ,[A.p8,A.p9,A.pa])
q(A.p8,[A.a0,A.kr,A.ks,A.hR,A.pb])
r(A.ea,A.p9)
q(A.pa,[A.f9,A.pc])
r(A.kE,A.j5)
r(A.cW,A.kE)
r(A.iz,A.cW)
q(A.fB,[A.aL,A.iP])
q(A.cu,[A.iA,A.kt])
r(A.dC,A.iA)
r(A.iT,A.u_)
r(A.jp,A.dl)
q(A.ym,[A.xV,A.iq])
q(A.bI,[A.iZ,A.iY,A.kk])
r(A.fY,A.fZ)
q(A.jk,[A.jj,A.h_])
q(A.h_,[A.kn,A.kp])
r(A.ko,A.kn)
r(A.dR,A.ko)
r(A.kq,A.kp)
r(A.bX,A.kq)
q(A.dR,[A.mW,A.mX])
q(A.bX,[A.mY,A.mZ,A.n_,A.jl,A.jm,A.jn,A.eK])
r(A.kz,A.oT)
q(A.ac,[A.hV,A.jR,A.kc,A.ds,A.kf,A.k6,A.il,A.hK])
r(A.bc,A.hV)
r(A.b6,A.bc)
q(A.b7,[A.e5,A.hM,A.hT])
r(A.f0,A.e5)
r(A.k2,A.k7)
q(A.f1,[A.aF,A.at])
q(A.eb,[A.cZ,A.hX])
r(A.kv,A.ox)
q(A.oS,[A.ch,A.hI])
r(A.km,A.cZ)
r(A.f7,A.kf)
q(A.pA,[A.oM,A.pf])
q(A.dq,[A.e6,A.k9])
r(A.cC,A.kt)
q(A.nO,[A.kx,A.Bw,A.zA,A.pn])
r(A.AU,A.kx)
q(A.lz,[A.eA,A.ll,A.u8])
q(A.eA,[A.le,A.mK,A.oj])
q(A.aG,[A.pu,A.im,A.lm,A.mH,A.mG,A.ok,A.jW,A.mp])
q(A.pu,[A.lf,A.mL])
r(A.zF,A.oD)
q(A.qh,[A.zB,A.hD,A.oG,A.BD])
r(A.zo,A.zB)
r(A.mF,A.j_)
r(A.AV,A.lx)
r(A.AX,A.AY)
r(A.pE,A.py)
r(A.BG,A.pE)
q(A.bG,[A.dd,A.iR])
r(A.oP,A.kF)
r(A.hg,A.hY)
r(A.pi,A.mp)
r(A.Be,A.tz)
r(A.pj,A.Be)
r(A.la,A.qu)
r(A.jK,A.xJ)
r(A.oN,A.la)
r(A.lP,A.oN)
r(A.oO,A.vq)
r(A.rt,A.oO)
r(A.no,A.er)
r(A.lu,A.ln)
r(A.dA,A.jR)
q(A.lo,[A.vR,A.xy])
r(A.jS,A.qd)
r(A.nN,A.jS)
r(A.is,A.a6)
r(A.nb,A.js)
q(A.c9,[A.lA,A.lI,A.jY,A.fK,A.nY,A.lj])
q(A.nn,[A.m8,A.m9,A.me,A.ma,A.m7,A.mn,A.mh,A.mc,A.mb,A.mk,A.mf,A.m1,A.nJ,A.n4,A.lv,A.mq,A.ly,A.mo,A.nr,A.mV,A.nj,A.lL,A.lK,A.lY,A.mt,A.lb,A.m4,A.nx,A.o5,A.o6,A.o8,A.oa,A.o9,A.o7,A.op,A.oq,A.oo,A.ld,A.on,A.ol,A.nf,A.lB,A.ns,A.lH,A.lF,A.np,A.l8,A.l9,A.lJ,A.nW,A.o0,A.nR,A.nS,A.nU,A.o1,A.nV,A.nZ])
q(A.ai,[A.mm,A.iI,A.fM,A.mi,A.fL,A.fJ,A.hm,A.h1,A.ir,A.mr,A.hc,A.hd,A.fX,A.h9,A.fC,A.fE,A.fP,A.fr,A.fI,A.hf,A.fA,A.fz,A.hs,A.hz,A.h6,A.fy,A.nX,A.nT,A.o_])
q(A.vT,[A.jd,A.jg,A.je,A.jh,A.ja,A.jb,A.j9,A.jf,A.jc])
q(A.Ak,[A.b3,A.cH,A.dZ,A.na,A.it,A.dB,A.d9,A.lD,A.ca,A.iS,A.dO,A.dQ,A.em,A.cg,A.lk,A.cU,A.fq,A.h2,A.jq,A.lZ,A.jN,A.w4,A.fN,A.mR,A.dD,A.cz,A.iK,A.dV])
q(A.cR,[A.j0,A.jo,A.ii,A.ij])
r(A.pZ,A.t1)
q(A.dM,[A.e0,A.hu,A.h0,A.iv,A.jv,A.iM,A.di,A.jE,A.jC,A.jH,A.he,A.jP,A.j8,A.ix,A.fD,A.jB])
q(A.he,[A.jV,A.iN])
r(A.mI,A.p2)
q(A.bx,[A.lO,A.hb,A.fS,A.hh,A.ev,A.el,A.fs])
r(A.jx,A.lO)
q(A.dc,[A.al,A.cc,A.dy,A.d5])
r(A.fx,A.oJ)
r(A.zp,A.B6)
q(A.br,[A.eW,A.dU,A.jL,A.c6,A.cM,A.cQ,A.eN,A.h5,A.fF,A.yj,A.en])
q(A.fw,[A.nk,A.n3])
r(A.yT,A.qf)
r(A.vd,A.rv)
r(A.mO,A.eY)
q(A.hB,[A.k_,A.eZ])
r(A.pz,A.ou)
r(A.ze,A.pz)
r(A.u3,A.y4)
q(A.u3,[A.wL,A.yF,A.yZ])
r(A.mg,A.nE)
q(A.hk,[A.hL,A.nG])
r(A.hj,A.nH)
r(A.dh,A.nG)
r(A.hl,A.et)
r(A.ls,A.bb)
q(A.ls,[A.mu,A.dH,A.hi])
q(A.lr,[A.oY,A.pm])
r(A.pd,A.rc)
r(A.pe,A.pd)
r(A.nq,A.pe)
r(A.ph,A.pg)
r(A.ce,A.ph)
q(A.b9,[A.f_,A.bd])
r(A.hx,A.xQ)
q(A.bd,[A.kg,A.ka,A.hH,A.i_])
r(A.wS,A.xz)
r(A.rd,A.lM)
r(A.dx,A.ha)
r(A.hE,A.wS)
q(A.kI,[A.oQ,A.pk])
r(A.nP,A.hj)
r(A.p_,A.ht)
r(A.cA,A.p_)
s(A.hv,A.oe)
s(A.kJ,A.L)
s(A.kn,A.L)
s(A.ko,A.iL)
s(A.kp,A.L)
s(A.kq,A.iL)
s(A.cZ,A.k3)
s(A.hX,A.pr)
s(A.kE,A.pv)
s(A.pE,A.nO)
s(A.oN,A.re)
s(A.oO,A.ru)
s(A.p2,A.qs)
s(A.oJ,A.qt)
s(A.pz,A.ot)
s(A.pd,A.L)
s(A.pe,A.n0)
s(A.pg,A.of)
s(A.ph,A.X)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ad:"double",b_:"num",k:"String",O:"bool",W:"Null",q:"List",j:"Object",F:"Map",M:"JSObject"},mangledNames:{},types:["~()","~(M)","W()","y<~>()","y<~>(bL)","y<W>(bL)","W(j,aJ)","k(k)","h1(~)","~(i)","i()","~(q<i>)","U<k,@>(@,@)","O(k)","~(j,aJ)","O(j?)","0&()","~(j?)","i(bs,i)","~(~())","W(j)","y<b2>()","y<W>()","W(M)","O(@)","O(bm)","y<~>(ki)","~(@)","W(@)","~(dk)","O(bZ)","k(@)","j?(j?)","O(j?,j?)","i(j?)","M()","~(k,k)","O(bu)","j?(F<k,j?>)","@(@)","~(j?,j?)","W(~)","~(a4)","y<~>(~)","~(de,i,i,i)","y<W>(rw)","i(bs)","U<k,j?>(@,@)","~(k,j?)","O()","i(@,@)","bm()","O(dG)","y<q<k>>()","y<i>()","k(F<k,j?>)","y<@>()","W(j?)","O(b1)","y<j?>(ov,hA)","ad(i)","y<cN>(k)","i(bb,i,i,i)","i(bb,i)","i(cN)","i(bs,i,i,by)","k(eI)","~(k,@)","~(de,i)","@()","~(@,@)","~(j[aJ?])","@(k)","y<bq<~>>()","~(~)","y<eY>()","y<F<k,j?>>(F<k,j?>)","h9(cs)","fz(bl?)","fM(q<bm>)","fL(i)","fJ(i)","hm(O)","fX(q<k>)","y<cs>()","W(@,aJ)","y<q<cS>>()","hf(q<cS>)","O(k,k)","hs(~)","O(hS)","~(F<k,j?>?)","~(q<F<k,j?>>)","i(k)","ac<q<i>>()","W(k,k[j?])","~(eU)","~(q<bl>)","F<k,j?>(ce)","~(dP<q<i>>)","j?(xR)","~(i,@)","k(k,k)","f2<@,@>(bH<@>)","y<bm>(bL)","fT()","i(i,i)","i(i,cL)","O(cL)","k(cL)","~(q<co>)","y<ac<q<i>>>()","k?(F<k,j?>)","~(ju)","i(bZ,bZ)","U<k,dE>(k,hn)","y<aQ?>(j6)","df(@)","O(dO)","y<q<k>>(F<k,j?>)","y<~>?()","k(cq)","k()","O(cq)","b1()","dG()","fO()","eB()","bZ()","i(i)","w<@>?()","y<F<k,j?>?>(k)","O(i)","k(i,i)","y<dX>(k)","bl()","i(dX)","~(cI)","aE(i)","y<ba>(ba)","ba(ba)","ba(j)","W(ba)","y<W>(~)","~(k)","aQ(aQ?)","aQ/(j?)","y<j?>(j?)","F<k,j?>(q<j?>)","j?(aQ?)","y<i>(bL)","~(@,aJ)","O(cH)","k(i[i])","cT()","cr()","eM()","O(dZ)","0&(k,i?)","y<@>(bL)","q<F<k,j?>>(cs)","y<O>(k)","y<~>(k)","q<eP>(j?)","O(c7<j?>)","O(b3)","q<cR>(j?)","~(c9)","F<j?,j?>(k)","q<j?>(k)","q<j?>()","bl(F<k,j?>)","k(k?)","k?()","i(cB)","i(+(k,j),+(k,j))","j(cB)","j(bu)","i(bu,bu)","q<cB>(U<j,q<bu>>)","dh()","k(j?)","~(i,k,i)","~(DK,q<DL>)","~(k,k?)","~(Q,av,Q,~())","~(by,i)","bs?(bb,i,i,i,i)","i(bb,i,i)","W(bU,bU)","i(bb?,i,i)","i(+(k,j?),+(k,j?))","~(dT)","j?(~)","i(bs,by)","y<F<k,j?>?>()","i(bs,i,i)","i(i())","~(~(i,k,i),i,i,i,by)","hc(F<k,j?>?)","y<q<F<k,j?>?>>()","i(de,i,i,i,i)","i(i(i),i)","i(DO,i)","i(DO,i,i)","hd(q<F<k,j?>?>)","W(~())","M(z<j?>)","y<q<j?>>()","@(@,k)","M(M?)","~(eo)","y<~>(i,cV)","y<~>(i)","cV()","y<M>(k)","W(d6)","y<W>(M)","M(j)","W(j?,aJ)","k?(j?)","~(et)","M(M)","y<M>()","y<b_?>()","y<k>()","y<bq<cw>>()","~(cw)","O(hG)","h6(i)","y<eu>()","0&(j?,aJ)","~(dP<M>)","fy(i)","~(Q?,av?,Q,j,aJ)","0^(Q?,av?,Q,0^())<j?>","0^(Q?,av?,Q,0^(1^),1^)<j?,j?>","0^(Q?,av?,Q,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(Q,av,Q,0^())<j?>","0^(1^)(Q,av,Q,0^(1^))<j?,j?>","0^(1^,2^)(Q,av,Q,0^(1^,2^))<j?,j?,j?>","ar?(Q,av,Q,j,aJ?)","~(Q?,av?,Q,~())","dk(Q,av,Q,aE,~())","dk(Q,av,Q,aE,~(dk))","~(Q,av,Q,k)","Q(Q?,av?,Q,k0?,F<j?,j?>?)","0^(0^,0^)<b_>","fA(q<bl>)","fC(i)","fE(q<j?>)","fP(q<k>)","fr(b_?)","fI(k)","bm(F<k,j?>)","aH()","O(bx?)","O(+(i,k))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a0&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.kr&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.ks&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hR&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.pb&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ea&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.f9&&A.HR(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.pc&&A.HR(a,b.a)}}
A.LO(v.typeUniverse,JSON.parse('{"bU":"dK","n9":"dK","e_":"dK","P7":"fZ","z":{"q":["1"],"aI":[],"K":["1"],"M":[],"o":["1"],"bg":["1"]},"mC":{"O":[],"am":[]},"iX":{"W":[],"am":[]},"aI":{"M":[]},"dK":{"aI":[],"M":[]},"mA":{"jG":[]},"u6":{"z":["1"],"q":["1"],"aI":[],"K":["1"],"M":[],"o":["1"],"bg":["1"]},"eD":{"ad":[],"b_":[],"ax":["b_"]},"iW":{"ad":[],"i":[],"b_":[],"ax":["b_"],"am":[]},"mD":{"ad":[],"b_":[],"ax":["b_"],"am":[]},"dI":{"k":[],"ax":["k"],"bg":["@"],"am":[]},"e4":{"o":["2"]},"ep":{"e4":["1","2"],"o":["2"],"o.E":"2"},"kb":{"ep":["1","2"],"e4":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"k8":{"L":["2"],"q":["2"],"e4":["1","2"],"K":["2"],"o":["2"]},"bR":{"k8":["1","2"],"L":["2"],"q":["2"],"e4":["1","2"],"K":["2"],"o":["2"],"L.E":"2","o.E":"2"},"eq":{"X":["3","4"],"F":["3","4"],"X.V":"4","X.K":"3"},"dJ":{"ag":[]},"nl":{"ag":[]},"cn":{"L":["i"],"q":["i"],"K":["i"],"o":["i"],"L.E":"i"},"K":{"o":["1"]},"a_":{"K":["1"],"o":["1"]},"cx":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"cp":{"o":["2"],"o.E":"2"},"ey":{"cp":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"Y":{"a_":["2"],"K":["2"],"o":["2"],"a_.E":"2","o.E":"2"},"aq":{"o":["1"],"o.E":"1"},"iH":{"o":["2"],"o.E":"2"},"eV":{"o":["1"],"o.E":"1"},"iD":{"eV":["1"],"K":["1"],"o":["1"],"o.E":"1"},"dg":{"o":["1"],"o.E":"1"},"fG":{"dg":["1"],"K":["1"],"o":["1"],"o.E":"1"},"ez":{"K":["1"],"o":["1"],"o.E":"1"},"e2":{"o":["1"],"o.E":"1"},"d7":{"o":["+(i,1)"],"o.E":"+(i,1)"},"ex":{"d7":["1"],"K":["+(i,1)"],"o":["+(i,1)"],"o.E":"+(i,1)"},"hv":{"L":["1"],"q":["1"],"K":["1"],"o":["1"]},"bB":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"iz":{"cW":["1","2"],"F":["1","2"]},"fB":{"F":["1","2"]},"aL":{"fB":["1","2"],"F":["1","2"]},"f6":{"o":["1"],"o.E":"1"},"iP":{"fB":["1","2"],"F":["1","2"]},"iA":{"cu":["1"],"eS":["1"],"K":["1"],"o":["1"]},"dC":{"cu":["1"],"eS":["1"],"K":["1"],"o":["1"]},"jp":{"dl":[],"ag":[]},"mE":{"ag":[]},"od":{"ag":[]},"n2":{"H":[]},"ku":{"aJ":[]},"nu":{"ag":[]},"bI":{"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"R":{"K":["1"],"o":["1"],"o.E":"1"},"ao":{"K":["1"],"o":["1"],"o.E":"1"},"aN":{"K":["U<1,2>"],"o":["U<1,2>"],"o.E":"U<1,2>"},"iZ":{"bI":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"iY":{"bI":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"hP":{"nm":[],"eI":[]},"oy":{"o":["nm"],"o.E":"nm"},"ho":{"eI":[]},"po":{"o":["eI"],"o.E":"eI"},"fY":{"aI":[],"M":[],"eo":[],"am":[]},"fZ":{"aI":[],"M":[],"eo":[],"am":[]},"jk":{"aI":[],"M":[]},"pw":{"eo":[]},"jj":{"aI":[],"Dg":[],"M":[],"am":[]},"h_":{"bV":["1"],"aI":[],"M":[],"bg":["1"]},"dR":{"L":["ad"],"q":["ad"],"bV":["ad"],"aI":[],"K":["ad"],"M":[],"bg":["ad"],"o":["ad"]},"bX":{"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"]},"mW":{"dR":[],"tl":[],"L":["ad"],"q":["ad"],"bV":["ad"],"aI":[],"K":["ad"],"M":[],"bg":["ad"],"o":["ad"],"am":[],"L.E":"ad"},"mX":{"dR":[],"tm":[],"L":["ad"],"q":["ad"],"bV":["ad"],"aI":[],"K":["ad"],"M":[],"bg":["ad"],"o":["ad"],"am":[],"L.E":"ad"},"mY":{"bX":[],"u0":[],"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"],"am":[],"L.E":"i"},"mZ":{"bX":[],"u1":[],"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"],"am":[],"L.E":"i"},"n_":{"bX":[],"u2":[],"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"],"am":[],"L.E":"i"},"jl":{"bX":[],"yA":[],"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"],"am":[],"L.E":"i"},"jm":{"bX":[],"yB":[],"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"],"am":[],"L.E":"i"},"jn":{"bX":[],"yC":[],"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"],"am":[],"L.E":"i"},"eK":{"bX":[],"cV":[],"L":["i"],"q":["i"],"bV":["i"],"aI":[],"K":["i"],"M":[],"bg":["i"],"o":["i"],"am":[],"L.E":"i"},"oT":{"ag":[]},"kz":{"dl":[],"ag":[]},"ar":{"ag":[]},"w":{"y":["1"]},"dP":{"bH":["1"]},"ky":{"dk":[]},"k1":{"iw":["1"]},"hW":{"o":["1"],"o.E":"1"},"b6":{"bc":["1"],"hV":["1"],"ac":["1"],"ac.T":"1"},"f0":{"e5":["1"],"b7":["1"],"bq":["1"],"b7.T":"1"},"k7":{"bH":["1"]},"k2":{"k7":["1"],"bH":["1"]},"o3":{"H":[]},"jt":{"ag":[]},"f1":{"iw":["1"]},"aF":{"f1":["1"],"iw":["1"]},"at":{"f1":["1"],"iw":["1"]},"jR":{"ac":["1"]},"eb":{"bH":["1"]},"cZ":{"k3":["1"],"eb":["1"],"bH":["1"]},"hX":{"eb":["1"],"bH":["1"]},"bc":{"hV":["1"],"ac":["1"],"ac.T":"1"},"e5":{"b7":["1"],"bq":["1"],"b7.T":"1"},"kv":{"ox":["1"]},"b7":{"bq":["1"],"b7.T":"1"},"hV":{"ac":["1"]},"hJ":{"bq":["1"]},"kc":{"ac":["1"],"ac.T":"1"},"ds":{"ac":["1"],"ac.T":"1"},"km":{"cZ":["1"],"k3":["1"],"eb":["1"],"dP":["1"],"bH":["1"]},"kf":{"ac":["2"]},"hM":{"b7":["2"],"bq":["2"],"b7.T":"2"},"f7":{"kf":["1","2"],"ac":["2"],"ac.T":"2"},"kd":{"bH":["1"]},"hT":{"b7":["2"],"bq":["2"],"b7.T":"2"},"k6":{"ac":["2"],"ac.T":"2"},"pA":{"Q":[]},"oM":{"Q":[]},"pf":{"Q":[]},"i0":{"av":[]},"dq":{"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"e6":{"dq":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"k9":{"dq":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"f5":{"K":["1"],"o":["1"],"o.E":"1"},"kk":{"bI":["1","2"],"X":["1","2"],"F":["1","2"],"X.V":"2","X.K":"1"},"cC":{"cu":["1"],"eS":["1"],"K":["1"],"o":["1"]},"eF":{"o":["1"],"o.E":"1"},"L":{"q":["1"],"K":["1"],"o":["1"]},"X":{"F":["1","2"]},"kl":{"K":["2"],"o":["2"],"o.E":"2"},"j5":{"F":["1","2"]},"cW":{"F":["1","2"]},"j1":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"cu":{"eS":["1"],"K":["1"],"o":["1"]},"kt":{"cu":["1"],"eS":["1"],"K":["1"],"o":["1"]},"f2":{"bH":["1"]},"p0":{"X":["k","@"],"F":["k","@"],"X.V":"@","X.K":"k"},"p1":{"a_":["k"],"K":["k"],"o":["k"],"a_.E":"k","o.E":"k"},"le":{"eA":[]},"pu":{"aG":["k","q<i>"]},"lf":{"aG":["k","q<i>"],"aG.T":"q<i>"},"im":{"aG":["q<i>","k"],"aG.T":"k"},"lm":{"aG":["k","q<i>"],"aG.T":"q<i>"},"j_":{"ag":[]},"mF":{"ag":[]},"mH":{"aG":["j?","k"],"aG.T":"k"},"mG":{"aG":["k","j?"],"aG.T":"j?"},"mK":{"eA":[]},"mL":{"aG":["k","q<i>"],"aG.T":"q<i>"},"oj":{"eA":[]},"ok":{"aG":["k","q<i>"],"aG.T":"q<i>"},"jW":{"aG":["q<i>","k"],"aG.T":"k"},"EY":{"ax":["EY"]},"aH":{"ax":["aH"]},"ad":{"b_":[],"ax":["b_"]},"aE":{"ax":["aE"]},"i":{"b_":[],"ax":["b_"]},"q":{"K":["1"],"o":["1"]},"b_":{"ax":["b_"]},"nm":{"eI":[]},"eS":{"K":["1"],"o":["1"]},"k":{"ax":["k"]},"aP":{"ax":["EY"]},"lg":{"ag":[]},"dl":{"ag":[]},"bG":{"ag":[]},"dd":{"ag":[]},"iR":{"dd":[],"ag":[]},"cX":{"ag":[]},"oc":{"cX":[],"ag":[]},"bp":{"ag":[]},"lC":{"ag":[]},"n5":{"ag":[]},"jO":{"ag":[]},"oU":{"H":[]},"bn":{"H":[]},"my":{"cX":[],"H":[],"ag":[]},"pp":{"aJ":[]},"jF":{"o":["i"],"o.E":"i"},"kF":{"og":[]},"cj":{"og":[]},"oP":{"og":[]},"n1":{"H":[]},"u2":{"q":["i"],"K":["i"],"o":["i"]},"cV":{"q":["i"],"K":["i"],"o":["i"]},"yC":{"q":["i"],"K":["i"],"o":["i"]},"u0":{"q":["i"],"K":["i"],"o":["i"]},"yA":{"q":["i"],"K":["i"],"o":["i"]},"u1":{"q":["i"],"K":["i"],"o":["i"]},"yB":{"q":["i"],"K":["i"],"o":["i"]},"tl":{"q":["ad"],"K":["ad"],"o":["ad"]},"tm":{"q":["ad"],"K":["ad"],"o":["ad"]},"a6":{"F":["2","3"]},"hg":{"hY":["1","eS<1>"],"hY.E":"1"},"mp":{"aG":["q<i>","co"]},"pi":{"aG":["q<i>","co"],"aG.T":"co"},"jJ":{"H":[]},"ny":{"L":["i"],"q":["i"],"K":["i"],"o":["i"],"L.E":"i"},"no":{"H":[]},"ln":{"Dh":[]},"lu":{"Dh":[]},"dA":{"ac":["q<i>"],"ac.T":"q<i>"},"er":{"H":[]},"nN":{"jS":[]},"is":{"a6":["k","k","1"],"F":["k","1"],"a6.V":"1","a6.K":"k","a6.C":"k"},"js":{"DT":[]},"nb":{"DT":[]},"dF":{"H":[]},"mm":{"ai":[]},"iI":{"ai":[]},"fM":{"ai":[]},"mi":{"ai":[]},"fL":{"ai":[]},"fJ":{"ai":[]},"hm":{"ai":[]},"h1":{"ai":[]},"ir":{"ai":[]},"mr":{"ai":[]},"hc":{"ai":[]},"hd":{"ai":[]},"fX":{"ai":[]},"h9":{"ai":[]},"fC":{"ai":[]},"fE":{"ai":[]},"fP":{"ai":[]},"fr":{"ai":[]},"fI":{"ai":[]},"hf":{"ai":[]},"fA":{"ai":[]},"fz":{"ai":[]},"hs":{"ai":[]},"hz":{"ai":[]},"h6":{"ai":[]},"fy":{"ai":[]},"nX":{"ai":[]},"nT":{"ai":[]},"o_":{"ai":[]},"jw":{"H":[]},"lA":{"c9":[]},"lI":{"c9":[]},"jY":{"c9":[]},"fK":{"c9":[]},"j0":{"cR":[]},"jo":{"cR":[]},"ii":{"cR":[]},"ij":{"cR":[]},"nY":{"c9":[]},"lj":{"c9":[]},"eX":{"H":[]},"fa":{"H":[]},"iC":{"rw":[]},"dM":{"H":[]},"e0":{"H":[]},"hu":{"H":[]},"h0":{"H":[]},"iv":{"H":[]},"jv":{"H":[]},"iM":{"H":[]},"di":{"H":[]},"jE":{"H":[]},"jC":{"H":[]},"jH":{"H":[]},"he":{"H":[]},"jV":{"H":[]},"iN":{"H":[]},"jP":{"H":[]},"j8":{"H":[]},"ix":{"H":[]},"fD":{"H":[]},"jB":{"H":[]},"fu":{"H":[]},"io":{"H":[]},"jx":{"bx":[]},"al":{"dc":[]},"cc":{"dc":[]},"dy":{"dc":[]},"d5":{"dc":[]},"hC":{"H":[]},"da":{"H":[]},"hb":{"bx":[]},"fS":{"bx":[]},"hh":{"bx":[]},"ev":{"bx":[]},"el":{"bx":[]},"fs":{"bx":[]},"lO":{"bx":[]},"br":{"H":[]},"eW":{"H":[]},"dU":{"H":[]},"jL":{"H":[]},"c6":{"H":[]},"cM":{"H":[]},"cQ":{"H":[]},"eN":{"H":[]},"h5":{"H":[]},"fF":{"H":[]},"en":{"H":[]},"p7":{"FC":[]},"mO":{"eY":[]},"oL":{"ov":[],"G2":[]},"k_":{"hB":[]},"eZ":{"hB":[]},"n7":{"H":[]},"mg":{"cv":[],"ax":["cv"]},"hL":{"dh":[],"ax":["nF"]},"cv":{"ax":["cv"]},"nE":{"cv":[],"ax":["cv"]},"nF":{"ax":["nF"]},"nG":{"ax":["nF"]},"nH":{"H":[]},"hj":{"bn":[],"H":[]},"hk":{"ax":["nF"]},"dh":{"ax":["nF"]},"cf":{"H":[]},"xR":{"q":["j?"],"K":["j?"],"o":["j?"]},"om":{"L":["j?"],"xR":[],"q":["j?"],"K":["j?"],"o":["j?"],"L.E":"j?"},"hl":{"et":[]},"mu":{"bb":[]},"oY":{"jX":[],"bs":[]},"ce":{"X":["k","@"],"F":["k","@"],"X.V":"@","X.K":"k"},"nq":{"L":["ce"],"q":["ce"],"K":["ce"],"o":["ce"],"L.E":"ce"},"dn":{"H":[]},"ls":{"bb":[]},"lr":{"jX":[],"bs":[]},"f_":{"b9":["f_"],"b9.E":"f_"},"dp":{"DL":[]},"e1":{"DK":[]},"hy":{"L":["dp"],"q":["dp"],"K":["dp"],"o":["dp"],"L.E":"dp"},"il":{"ac":["1"],"ac.T":"1"},"dH":{"bb":[]},"bd":{"b9":["bd"]},"oZ":{"jX":[],"bs":[]},"kg":{"bd":[],"b9":["bd"],"b9.E":"bd"},"ka":{"bd":[],"b9":["bd"],"b9.E":"bd"},"hH":{"bd":[],"b9":["bd"],"b9.E":"bd"},"i_":{"bd":[],"b9":["bd"],"b9.E":"bd"},"hi":{"bb":[]},"pm":{"jX":[],"bs":[]},"iu":{"H":[]},"ew":{"L":["j?"],"q":["j?"],"K":["j?"],"o":["j?"],"L.E":"j?"},"ha":{"H":[]},"dx":{"H":[]},"hE":{"F4":[]},"oQ":{"kI":["M"]},"pk":{"kI":["M"]},"nP":{"bn":[],"H":[]},"cA":{"ht":["i"],"L":["i"],"q":["i"],"K":["i"],"o":["i"],"L.E":"i"},"ht":{"L":["1"],"q":["1"],"K":["1"],"o":["1"]},"p_":{"ht":["i"],"L":["i"],"q":["i"],"K":["i"],"o":["i"]},"hK":{"ac":["1"],"ac.T":"1"},"ke":{"bq":["1"]}}'))
A.LN(v.typeUniverse,JSON.parse('{"iL":1,"oe":1,"hv":1,"kJ":2,"iA":1,"h_":1,"bH":1,"jR":1,"pr":1,"oS":1,"pv":2,"j5":2,"kt":1,"kE":2,"lx":1,"lz":2,"kx":1,"n0":1,"of":2,"nn":1,"fw":1,"J2":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.af
return{fM:s("@<@>"),ie:s("J2<j?>"),ko:s("el"),bG:s("em"),om:s("il<z<j?>>"),hw:s("cI"),lo:s("eo"),fW:s("Dg"),jA:s("ir"),fo:s("is<k>"),iv:s("a4"),eg:s("F4"),dF:s("Dh()"),E:s("cn"),bU:s("c7<j?>"),fw:s("et"),bP:s("ax<@>"),p6:s("eu"),br:s("iw<M>"),n8:s("bl"),pb:s("bx"),x:s("aL<k,j?>"),M:s("dC<k>"),d_:s("ev"),lp:s("lT"),O:s("K<@>"),C:s("ag"),fq:s("c9"),mA:s("H"),eZ:s("m5"),d9:s("b1"),oX:s("md"),A:s("bm"),k4:s("iJ"),f6:s("cL"),pk:s("tl"),kI:s("tm"),Y:s("bn"),gY:s("P3"),mi:s("F<k,j?>/(F<k,j?>)"),nW:s("y<M>"),fB:s("y<q<k>>"),b3:s("y<F<k,j?>>"),fr:s("y<aQ>"),mj:s("y<W>"),g7:s("y<@>"),fP:s("y<d6?>"),d3:s("y<F<k,j?>?>"),op:s("y<aQ?>"),n1:s("y<j?>(ov,hA)"),jN:s("y<hx?>"),co:s("dE"),w:s("cN"),cF:s("dH"),m6:s("u0"),bW:s("u1"),jx:s("u2"),nZ:s("iV<@>"),e7:s("o<@>"),gi:s("z<a4>"),aw:s("z<c7<@>>"),oq:s("z<c7<j?>>"),oS:s("z<lE>"),i5:s("z<co>"),mK:s("z<b1>"),kB:s("z<mj>"),iw:s("z<y<~>>"),mr:s("z<dG>"),kG:s("z<M>"),bi:s("z<q<F<k,j?>>>"),h2:s("z<q<j>>"),ae:s("z<q<eP>>"),dO:s("z<q<j?>>"),kf:s("z<F<k,j>>"),d:s("z<F<k,j?>>"),e8:s("z<mU>"),i7:s("z<eL>"),hf:s("z<j>"),ox:s("z<eM>"),fi:s("z<cq>"),my:s("z<cr>"),k:s("z<dc>"),eK:s("z<cR>"),k1:s("z<h7>"),g2:s("z<jz>"),bo:s("z<jA>"),cM:s("z<eP>"),gc:s("z<ni>"),eb:s("z<dT>"),fU:s("z<+controller,sync(dP<cw>,O)>"),lw:s("z<+controller,sync(dP<~>,O)>"),kC:s("z<+(dV,k)>"),jO:s("z<+(k,F<k,j?>)>"),l5:s("z<+(k,j)>"),fj:s("z<+(k,b1?)>"),iE:s("z<+(k,j?)>"),kW:s("z<+(i,k,F<k,j?>)>"),aY:s("z<+(hF,j?,j?,aJ?)>"),g1:s("z<df>"),cP:s("z<nw>"),kj:s("z<cS>"),lE:s("z<hl>"),c0:s("z<bZ>"),dw:s("z<bq<@>>"),s:s("z<k>"),en:s("z<hp>"),bs:s("z<cV>"),fC:s("z<b5>"),m2:s("z<G2>"),az:s("z<hE>"),i4:s("z<hF>"),fV:s("z<hG>"),pg:s("z<bu>"),dg:s("z<cB>"),p8:s("z<p6>"),mc:s("z<hS>"),gy:s("z<hU>"),gk:s("z<ad>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<ar?>"),eU:s("z<F<k,j?>?>"),c:s("z<j?>"),mf:s("z<k?>"),iy:s("bg<@>"),T:s("iX"),m:s("M"),bJ:s("by"),g:s("bU"),dX:s("bV<@>"),aq:s("aI"),fZ:s("mI"),kk:s("eF<f_>"),p3:s("eF<bd>"),hI:s("eG<@>"),ba:s("q<bl>"),ck:s("q<bm>"),ip:s("q<M>"),ew:s("q<F<k,j>>"),J:s("q<F<k,j?>>"),eT:s("q<eL>"),hg:s("q<eM>"),a6:s("q<cr>"),jX:s("q<jz>"),kR:s("q<df>"),fE:s("q<cS>"),i:s("q<k>"),bR:s("q<hp>"),j:s("q<@>"),L:s("q<i>"),oz:s("q<F<k,j?>?>"),kS:s("q<j?>"),jD:s("j2"),ia:s("U<k,dE>"),ag:s("U<k,k>"),I:s("U<k,@>"),eB:s("U<k,j?>"),a3:s("j4<@,@>"),cy:s("F<k,cT>"),dV:s("F<k,i>"),f:s("F<@,@>"),G:s("F<k,j?>"),d2:s("F<j?,j?>"),iZ:s("Y<k,@>"),r:s("aQ"),a:s("fY"),dQ:s("dR"),aj:s("bX"),Z:s("eK"),P:s("W"),K:s("j"),k5:s("cq"),dZ:s("cr"),i0:s("cs"),jS:s("dc"),ot:s("ng"),gq:s("h7"),e:s("b2"),b0:s("dd"),lZ:s("P9"),oZ:s("dT"),aK:s("+()"),ja:s("+(M,iy)"),hP:s("+(F<k,cT>,F<k,F<k,j?>>)"),cU:s("+(dV,k)"),mk:s("+(O,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(O,O)"),mt:s("+(M?,M)"),po:s("+(j?,i)"),fe:s("+(j?,j?)"),nw:s("+(F<k,j?>?,cT?,cr?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("nm"),Q:s("df"),V:s("ai"),hF:s("bB<k>"),cu:s("hg<@>"),aJ:s("eS<k>"),g_:s("hi"),hq:s("cv"),ol:s("dh"),gE:s("nI"),l:s("aJ"),nv:s("nK"),h3:s("hn"),ha:s("bq<cw>"),dz:s("bq<@>"),ey:s("bq<~>"),bv:s("nM"),ku:s("ac<q<i>>"),lI:s("dX"),hL:s("jS"),N:s("k"),f_:s("hp"),k6:s("jT"),o8:s("DT"),n6:s("cg"),fD:s("ba"),o:s("cT"),ic:s("eU"),hU:s("dk"),q:s("o4"),dH:s("am"),do:s("dl"),hM:s("yA"),mC:s("yB"),oR:s("cA"),nn:s("yC"),p:s("cV"),cx:s("e_"),ph:s("cW<k,k>"),eo:s("cX"),jJ:s("og"),e6:s("bb"),j2:s("jX"),n:s("hx"),fA:s("b5"),gx:s("aq<cH>"),mz:s("aq<b3>"),mE:s("aq<dZ>"),v:s("e2<k>"),u:s("eY"),bp:s("eZ"),be:s("ov"),ec:s("hB"),iq:s("aF<cV>"),jk:s("aF<@>"),ho:s("aF<i>"),bF:s("aF<j?>"),h:s("aF<~>"),oW:s("f2<@,@>"),R:s("f3<M>"),d4:s("hK<M>"),nI:s("w<d6>"),a7:s("w<M>"),af:s("w<F<k,j?>>"),hl:s("w<0&>"),os:s("w<k>"),jz:s("w<cV>"),g5:s("w<O>"),_:s("w<@>"),hy:s("w<i>"),ji:s("w<F<k,j?>?>"),ny:s("w<j?>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("bu"),mp:s("e6<j?,j?>"),mB:s("hO"),k8:s("ds<M>"),fb:s("ds<q<i>>"),mI:s("pl<co>"),jy:s("ec<cw,~()>"),ah:s("ec<~,O()>"),lU:s("ec<~,~()>"),hT:s("cD<M>"),lj:s("cD<q<i>>"),aP:s("at<d6>"),h1:s("at<M>"),ex:s("at<O>"),F:s("at<~>"),g8:s("ps"),y:s("O"),W:s("ad"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aJ)"),S:s("i"),ma:s("bl?"),gK:s("y<W>?"),fm:s("d6?"),B:s("M?"),bE:s("q<c7<@>>?"),lH:s("q<@>?"),b:s("F<k,j?>?"),nh:s("aQ?"),X:s("j?"),ad:s("FC?"),dY:s("cr?"),lY:s("jy?"),jB:s("df?"),U:s("k?"),f8:s("cT?"),a_:s("cA?"),he:s("hx?"),dd:s("bu?"),o9:s("O?"),dA:s("ad?"),aV:s("i?"),jh:s("b_?"),cZ:s("b_"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aJ)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cv=J.mz.prototype
B.b=J.z.prototype
B.c=J.iW.prototype
B.w=J.eD.prototype
B.a=J.dI.prototype
B.cw=J.bU.prototype
B.cx=J.aI.prototype
B.aD=A.jj.prototype
B.di=A.jl.prototype
B.y=A.jm.prototype
B.f=A.eK.prototype
B.bg=J.n9.prototype
B.aP=J.e_.prototype
B.aq=new A.dx("Operation was cancelled")
B.a7=new A.fq(0,"visible")
B.aS=new A.fq(1,"hidden")
B.bA=new A.lc(1)
B.ex=new A.lc(-1)
B.a8=new A.em(0,"applied")
B.a9=new A.em(1,"quarantined")
B.bB=new A.em(2,"conflict")
B.aa=new A.em(3,"skipped")
B.bC=new A.lf(127)
B.ab=new A.lk(0,"changed")
B.aT=new A.lk(1,"deleted")
B.bE=new A.im(!1)
B.ar=new A.ll(B.bE)
B.bF=new A.im(!0)
B.bD=new A.ll(B.bF)
B.ca=new A.kc(A.af("kc<q<i>>"))
B.bG=new A.dA(B.ca)
B.bH=new A.iT(A.Ou(),A.af("iT<i>"))
B.bI=new A.fs()
B.bJ=new A.el()
B.bK=new A.lj()
B.as=new A.lm()
B.bL=new A.lv()
B.bM=new A.ly()
B.aU=new A.rt()
B.bN=new A.lX(A.af("lX<0&>"))
B.p=new A.lW()
B.aV=new A.m_(A.af("m_<0&>"))
B.aW=new A.m0()
B.P=new A.m0()
B.bO=new A.mq()
B.bP=new A.my()
B.aX=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bQ=function() {
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
B.bV=function(getTagFallback) {
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
B.bR=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bU=function(hooks) {
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
B.bT=function(hooks) {
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
B.bS=function(hooks) {
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

B.h=new A.u8()
B.bW=new A.vd()
B.bX=new A.fS()
B.l=new A.h1()
B.bY=new A.n5()
B.aZ=new A.wy()
B.bZ=new A.wJ()
B.c_=new A.nf()
B.Q=new A.hb()
B.d=new A.xK()
B.c0=new A.hh()
B.c1=new A.nJ()
B.c2=new A.nR()
B.c3=new A.nS()
B.c4=new A.nU()
B.c5=new A.nZ()
B.c6=new A.o0()
B.o=new A.oj()
B.e=new A.ok()
B.c7=new A.ol()
B.c8=new A.on()
B.c9=new A.zp()
B.t=new A.A9()
B.ac=new A.Aj()
B.at=new A.AR()
B.b_=new A.fa()
B.i=new A.pf()
B.m=new A.pi()
B.cb=new A.Bt()
B.R=new A.pp()
B.ad=new A.dB(0,"create")
B.A=new A.dB(1,"update")
B.cc=new A.dB(2,"archive")
B.cd=new A.dB(3,"restore")
B.au=new A.dB(4,"purge")
B.ce=new A.dB(5,"hide")
B.H=new A.it(0,"local")
B.av=new A.it(1,"remote")
B.ae=new A.it(2,"resolution")
B.cf=new A.lD(3,"ignore")
B.S=new A.lD(4,"replace")
B.E={}
B.d9=new A.aL(B.E,[],A.af("aL<k,bx>"))
B.aC=new A.dO(0,"conflict")
B.cg=new A.lG(null,B.d9,!1,B.aC)
B.q=new A.lZ(0,"normal")
B.b0=new A.lZ(1,"full")
B.I=new A.aE(0)
B.aw=new A.aE(1e6)
B.af=new A.aE(12e7)
B.b1=new A.aE(16e3)
B.ch=new A.aE(18e8)
B.ci=new A.aE(2e5)
B.b2=new A.aE(3e5)
B.T=new A.aE(3e7)
B.ag=new A.aE(3e8)
B.ah=new A.aE(5e5)
B.cj=new A.aE(5e6)
B.ey=new A.aE(6048e8)
B.ck=new A.aE(7776e9)
B.ez=new A.aE(864e8)
B.ax=new A.ca(0,"text")
B.U=new A.ca(1,"int")
B.V=new A.ca(2,"real")
B.B=new A.ca(3,"bool")
B.W=new A.ca(4,"date")
B.J=new A.ca(5,"enumValue")
B.X=new A.ca(6,"json")
B.Y=new A.ca(7,"jsonList")
B.K=new A.ca(8,"ref")
B.cl=new A.iJ(!1)
B.ay=new A.dD("x",1,"opfsExternalLocks")
B.b3=new A.dD("y",2,"opfsExternalLocksWorkaround")
B.b4=new A.fN("/database",0,"database")
B.b5=new A.fN("/database-journal",1,"journal")
B.cr=new A.bn("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cs=new A.bn("fieldCipher envelope must be a map.",null,null)
B.aA=new A.aL(B.E,[],A.af("aL<k,k>"))
B.ct=new A.eB(B.aA)
B.b6=new A.iS(0,"live")
B.cy=new A.mG(null)
B.cz=new A.mH(null)
B.cA=new A.d9(0,"textExpected")
B.cB=new A.d9(1,"intExpected")
B.b7=new A.d9(2,"numberExpected")
B.cC=new A.d9(3,"boolExpected")
B.cD=new A.d9(4,"jsonExpected")
B.cE=new A.d9(5,"jsonListExpected")
B.cF=new A.d9(6,"enumValueRejected")
B.cG=new A.mL(255)
B.az=new A.eG(B.bN,A.af("eG<k>"))
B.cH=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b8=s([13,10],t.t)
B.aI=new A.cz(0,"unknown")
B.aJ=new A.cz(1,"integer")
B.aK=new A.cz(2,"bigInt")
B.aL=new A.cz(3,"float")
B.aM=new A.cz(4,"text")
B.aN=new A.cz(5,"blob")
B.aO=new A.cz(6,"$null")
B.bu=new A.cz(7,"boolean")
B.b9=s([B.aI,B.aJ,B.aK,B.aL,B.aM,B.aN,B.aO,B.bu],A.af("z<cz>"))
B.cI=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.dg=new A.dO(1,"recreate")
B.dh=new A.dO(2,"discardLocal")
B.cJ=s([B.aC,B.dg,B.dh],A.af("z<dO>"))
B.bj=new A.b3(0,"eq")
B.ds=new A.b3(1,"neq")
B.dw=new A.b3(2,"gt")
B.dx=new A.b3(3,"gte")
B.dy=new A.b3(4,"lt")
B.dz=new A.b3(5,"lte")
B.dA=new A.b3(6,"inValues")
B.dB=new A.b3(7,"between")
B.dC=new A.b3(8,"startsWith")
B.dD=new A.b3(9,"endsWith")
B.dt=new A.b3(10,"contains")
B.du=new A.b3(11,"isNull")
B.dv=new A.b3(12,"isNotNull")
B.cK=s([B.bj,B.ds,B.dw,B.dx,B.dy,B.dz,B.dA,B.dB,B.dC,B.dD,B.dt,B.du,B.dv],A.af("z<b3>"))
B.cp=new A.iK(0,"database")
B.cq=new A.iK(1,"journal")
B.ba=s([B.cp,B.cq],A.af("z<iK>"))
B.bv=new A.fq(2,"purged")
B.cL=s([B.a7,B.aS,B.bv],A.af("z<fq>"))
B.z=new A.cU(0,"clean")
B.G=new A.cU(1,"dirty")
B.br=new A.cU(2,"inFlight")
B.a6=new A.cU(3,"conflict")
B.ap=new A.cU(4,"error")
B.dT=new A.cU(5,"quarantine")
B.dU=new A.cU(6,"blocked")
B.cM=s([B.z,B.G,B.br,B.a6,B.ap,B.dT,B.dU],A.af("z<cU>"))
B.Z=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ai=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cN=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.cu=new A.iS(1,"notArchived")
B.cO=s([B.b6,B.cu],A.af("z<iS>"))
B.cP=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.be=new A.jq(0,"fileUpload")
B.bf=new A.jq(1,"fileRemove")
B.cQ=s([B.be,B.bf],A.af("z<jq>"))
B.co=new A.dD("s",0,"opfsShared")
B.cm=new A.dD("i",3,"indexedDb")
B.cn=new A.dD("m",4,"inMemory")
B.cR=s([B.co,B.ay,B.b3,B.cm,B.cn],A.af("z<dD>"))
B.aj=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bw=new A.cH(0,"sum")
B.bx=new A.cH(1,"avg")
B.by=new A.cH(2,"min")
B.bz=new A.cH(3,"max")
B.cS=s([B.bw,B.bx,B.by,B.bz],A.af("z<cH>"))
B.cT=s([B.ax,B.U,B.V,B.B,B.W,B.J,B.X,B.Y,B.K],A.af("z<ca>"))
B.n=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ak=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.a_=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cU=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.h2(0,"upsert")
B.M=new A.h2(1,"archive")
B.a3=new A.h2(2,"restore")
B.cV=s([B.v,B.M,B.a3],A.af("z<h2>"))
B.cW=s([],A.af("z<dE>"))
B.bb=s([],t.d)
B.cY=s([],t.my)
B.cZ=s([],t.kj)
B.u=s([],t.s)
B.cX=s([],t.t)
B.al=s([],t.dG)
B.j=s([],t.c)
B.d_=s(["*"],t.s)
B.d0=s([B.b4,B.b5],A.af("z<fN>"))
B.d1=s(["id","updated"],t.s)
B.d2=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bl=new A.dV(0,"opfs")
B.bm=new A.dV(1,"indexedDb")
B.dN=new A.dV(2,"inMemory")
B.d3=s([B.bl,B.bm,B.dN],A.af("z<dV>"))
B.bs=new A.dZ(0,"normal")
B.bt=new A.dZ(1,"full")
B.d4=s([B.bs,B.bt],A.af("z<dZ>"))
B.am=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.d5=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.d6=new A.j2(!0)
B.d7=new A.iP([16,10,24,12,32,14],A.af("iP<i,i>"))
B.dk={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.x=new A.mK()
B.r=new A.le()
B.d8=new A.aL(B.dk,[B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.o,B.o],A.af("aL<k,eA>"))
B.an=new A.aL(B.E,[],A.af("aL<k,i>"))
B.k=new A.aL(B.E,[],t.x)
B.bc=new A.aL(B.E,[],A.af("aL<i,F<k,j?>/(F<k,j?>)>"))
B.aB=new A.aL(B.E,[],A.af("aL<j?,j?>"))
B.a2={kind:0}
B.da=new A.aL(B.a2,["setUnionDeletionWins"],t.x)
B.db=new A.aL(B.a2,["appendOnlyList"],t.x)
B.dc=new A.aL(B.a2,["remoteWins"],t.x)
B.dd=new A.aL(B.a2,["appendOnlyLines"],t.x)
B.de=new A.aL(B.a2,["localWins"],t.x)
B.df=new A.mR(11,"simpleSuccessResponse",A.af("mR<M>"))
B.a0=new A.dQ(0,"createOrUpdate")
B.a1=new A.dQ(1,"createOrUpdateMerge")
B.bd=new A.dQ(2,"create")
B.L=new A.dQ(3,"update")
B.C=new A.dQ(4,"archive")
B.D=new A.dQ(5,"restore")
B.eA=new A.w4(2,"readWriteCreate")
B.dn=new A.cq("id",!1)
B.dp=new A.cs(B.bb,null,null,!1,!1)
B.bh=new A.na(0,"native")
B.aE=new A.na(1,"web")
B.F=new A.b2(0,1,0,0,0,!1)
B.dq=new A.b2(0,0,0,0,1,!1)
B.ao=new A.b2(0,0,0,0,0,!0)
B.a4=new A.b2(0,0,0,0,0,!1)
B.dr=new A.b2(0,0,0,1,0,!1)
B.bi=new A.b2(0,0,1,0,0,!1)
B.a5=new A.b2(1,0,0,0,0,!1)
B.dE=new A.a0("archived",!0)
B.dF=new A.a0("0",B.j)
B.aF=new A.kr(!1,!1)
B.dG=new A.ea(0,0,0)
B.dH=new A.ea(null,null,null)
B.dm={id:0,archived:1,hidden:2,extra:3,rowid:4,_rowid_:5,oid:6}
B.aG=new A.dC(B.dm,7,t.M)
B.dj={hidden:0}
B.dI=new A.dC(B.dj,1,t.M)
B.dl={open:0,contract_request:1,contract_event:2}
B.dJ=new A.dC(B.dl,3,t.M)
B.bk=new A.dC(B.E,0,t.M)
B.dK=new A.jN(0,"insert")
B.dL=new A.jN(1,"update")
B.dM=new A.jN(2,"delete")
B.dO=new A.jT(-1,null)
B.dP=new A.jU("_clientToken")
B.N=new A.cg(0,"closed")
B.dQ=new A.cg(1,"opening")
B.bn=new A.cg(2,"offline")
B.aH=new A.cg(3,"authRequired")
B.bo=new A.cg(4,"idle")
B.dR=new A.cg(5,"pulling")
B.dS=new A.cg(6,"pushing")
B.bp=new A.cg(7,"backoff")
B.bq=new A.cg(8,"paused")
B.O=new A.ba(B.an,B.an,0,0,0,0,!1)
B.dV=new A.eU(B.N,0,0,0,0,null,null,null)
B.dW=A.b0("la")
B.dX=A.b0("fs")
B.dY=A.b0("el")
B.dZ=A.b0("eo")
B.e_=A.b0("Dg")
B.e0=A.b0("ev")
B.e1=A.b0("tl")
B.e2=A.b0("tm")
B.e3=A.b0("u0")
B.e4=A.b0("u1")
B.e5=A.b0("u2")
B.e6=A.b0("M")
B.e7=A.b0("fS")
B.e8=A.b0("j")
B.e9=A.b0("hb")
B.ea=A.b0("jK")
B.eb=A.b0("yA")
B.ec=A.b0("yB")
B.ed=A.b0("yC")
B.ee=A.b0("cV")
B.ef=A.b0("hh")
B.aQ=new A.jW(!1)
B.eg=new A.jW(!0)
B.eh=new A.dn(14)
B.ei=new A.dn(522)
B.ej=new A.dn(778)
B.ek=new A.BI(B.i,A.Nu())
B.el=new A.BJ(B.i,A.Nv())
B.em=new A.BK(B.i,A.Nw())
B.en=new A.BL(B.i,A.Nx())
B.eo=new A.pB(B.i,A.Ny())
B.ep=new A.BM(B.i,A.Nz())
B.eq=new A.BN(B.i,A.NA())
B.er=new A.BO(B.i,A.NB())
B.es=new A.BP(B.i,A.NC())
B.et=new A.BR(B.i,A.NE())
B.eu=new A.BS(B.i,A.NF())
B.ev=new A.BQ(B.i,A.ND())
B.ew=new A.pC(B.i,A.NG())
B.aR=new A.pD(B.i,B.aB)})();(function staticFields(){$.AT=null
$.fe=A.l([],t.hf)
$.N_=null
$.FF=null
$.wR=0
$.nd=A.MQ()
$.F2=null
$.F1=null
$.HK=null
$.Hu=null
$.HU=null
$.CB=null
$.CQ=null
$.EA=null
$.B5=A.l([],A.af("z<q<j>?>"))
$.i4=null
$.kL=null
$.kM=null
$.Ek=!1
$.B=B.i
$.B9=null
$.Ga=null
$.Gb=null
$.Gc=null
$.Gd=null
$.E0=A.zL("_lastQuoRemDigits")
$.E1=A.zL("_lastQuoRemUsed")
$.k5=A.zL("_lastRemUsed")
$.E2=A.zL("_lastRem_nsh")
$.FZ=""
$.G_=null
$.h8=function(){var s=t.N
return A.u(s,s)}()
$.GT=null
$.C2=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"P_","Ib",()=>A.CH("_$dart_dartClosure"))
s($,"OZ","fm",()=>A.CH("_$dart_dartClosure_dartJSInterop"))
s($,"PD","pT",()=>A.vY(0))
s($,"Q0","IL",()=>B.i.b_(new A.CT(),A.af("y<~>")))
s($,"PV","II",()=>A.l([new J.mA()],A.af("z<jG>")))
s($,"Ph","If",()=>A.dm(A.yz({
toString:function(){return"$receiver$"}})))
s($,"Pi","Ig",()=>A.dm(A.yz({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Pj","Ih",()=>A.dm(A.yz(null)))
s($,"Pk","Ii",()=>A.dm(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Pn","Il",()=>A.dm(A.yz(void 0)))
s($,"Po","Im",()=>A.dm(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Pm","Ik",()=>A.dm(A.FW(null)))
s($,"Pl","Ij",()=>A.dm(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Pq","Io",()=>A.dm(A.FW(void 0)))
s($,"Pp","In",()=>A.dm(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Pt","EL",()=>A.L3())
s($,"P5","ek",()=>$.IL())
s($,"P4","Ic",()=>A.Lm(!1,B.i,t.y))
s($,"PJ","Iy",()=>A.vY(4096))
s($,"PH","Iw",()=>new A.BF().$0())
s($,"PI","Ix",()=>new A.BE().$0())
s($,"Pv","EM",()=>A.Kb(A.be(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Pu","Ip",()=>A.vY(0))
s($,"PC","cm",()=>A.k4(0))
s($,"PA","fn",()=>A.k4(1))
s($,"PB","Is",()=>A.k4(2))
s($,"Py","EO",()=>$.fn().bL(0))
s($,"Pw","EN",()=>A.k4(1e4))
r($,"Pz","Ir",()=>A.ah("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Px","Iq",()=>A.vY(8))
s($,"PE","It",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"PF","Iu",()=>A.ah("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"PG","Iv",()=>typeof URLSearchParams=="function")
s($,"PM","fo",()=>A.kX(B.e8))
s($,"Pa","l1",()=>{A.Km()
return $.wR})
s($,"PN","IB",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"P8","Db",()=>{var q=new A.AS(A.Ka(8))
q.pj()
return q})
s($,"P0","l0",()=>A.J6(B.di.gac(A.Kc(A.be(A.l([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aW)
s($,"OS","EG",()=>A.ah("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"PP","Dc",()=>A.ah("\\r\\n|\\r|\\n",!0,!1))
s($,"P6","Id",()=>A.FK())
s($,"PK","EP",()=>A.ah("^[\\x00-\\x7F]+$",!0,!1))
s($,"PL","Iz",()=>A.ah('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Q2","IM",()=>A.ah('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"PO","IC",()=>A.ah("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"PS","IF",()=>A.ah('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"PR","IE",()=>A.ah("\\\\(.)",!0,!1))
s($,"Q_","IK",()=>A.ah('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Q3","IN",()=>A.ah("(?:"+$.IC().a+")*",!0,!1))
s($,"OW","EH",()=>A.ah("^[0-9a-f]{64}$",!0,!1))
s($,"PU","IH",()=>A.FL())
s($,"Q1","pU",()=>A.ah("^[a-z0-9]{15}$",!0,!1))
r($,"Mz","IA",()=>A.Jo().a)
s($,"P1","EI",()=>A.ah("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"OX","I9",()=>A.Dn("declaredNames",t.aJ))
s($,"OY","Ia",()=>A.Dn("fieldByName",A.af("F<k,b1>")))
s($,"PQ","ID",()=>A.ah("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Pg","l3",()=>new A.j())
s($,"PX","ih",()=>new A.r6($.EJ()))
s($,"Pd","Ie",()=>new A.wL(A.ah("/",!0,!1),A.ah("[^/]$",!0,!1),A.ah("^/",!0,!1)))
s($,"Pf","pS",()=>new A.yZ(A.ah("[/\\\\]",!0,!1),A.ah("[^/\\\\]$",!0,!1),A.ah("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ah("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"Pe","l2",()=>new A.yF(A.ah("/",!0,!1),A.ah("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ah("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ah("^/",!0,!1)))
s($,"Pc","EJ",()=>A.KO())
s($,"OV","I8",()=>$.fn().bM(0,63).bL(0))
s($,"OU","I7",()=>{var q=$.fn()
return q.bM(0,63).h0(0,q)})
s($,"OT","pR",()=>A.FL())
s($,"Pr","EK",()=>A.Dn(null,t.S))
s($,"PW","IJ",()=>A.K_(A.l([A.DS("files"),A.DS("blocks")],t.s)))
s($,"P2","Da",()=>{var q,p,o=A.u(t.N,A.af("fN"))
for(q=0;q<2;++q){p=B.d0[q]
o.j(0,p.c,p)}return o})
s($,"PT","IG",()=>A.FK())
r($,"Ps","l4",()=>{var q="navigator"
return A.JR(A.JS(A.CJ(A.I_(),q),A.DS("locks")))?A.CJ(A.CJ(A.I_(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fZ,ArrayBuffer:A.fY,ArrayBufferView:A.jk,DataView:A.jj,Float32Array:A.mW,Float64Array:A.mX,Int16Array:A.mY,Int32Array:A.mZ,Int8Array:A.n_,Uint16Array:A.jl,Uint32Array:A.jm,Uint8ClampedArray:A.jn,CanvasPixelArray:A.jn,Uint8Array:A.eK})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.h_.$nativeSuperclassTag="ArrayBufferView"
A.kn.$nativeSuperclassTag="ArrayBufferView"
A.ko.$nativeSuperclassTag="ArrayBufferView"
A.dR.$nativeSuperclassTag="ArrayBufferView"
A.kp.$nativeSuperclassTag="ArrayBufferView"
A.kq.$nativeSuperclassTag="ArrayBufferView"
A.bX.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.Os
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
