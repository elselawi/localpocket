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
if(a[b]!==s){A.PB(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.EY(b)
return new s(c,this)}:function(){if(s===null)s=A.EY(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.EY(a).prototype
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
F7(a,b,c,d){return{i:a,p:b,e:c,x:d}},
D8(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.F5==null){A.P6()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Gu("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.Ba
if(o==null)o=$.Ba=A.D7(n)
p=q[o]}if(p!=null)return p
p=A.Pe(a)
if(p!=null)return p
if(typeof a=="function")return B.cz
s=Object.getPrototypeOf(a)
if(s==null)return B.bi
if(s===Object.prototype)return B.bi
if(typeof q=="function"){o=$.Ba
if(o==null)o=$.Ba=A.D7(n)
Object.defineProperty(q,o,{value:B.aR,enumerable:false,writable:true,configurable:true})
return B.aR}return B.aR},
mK(a,b){if(a<0||a>4294967295)throw A.b(A.aA(a,0,4294967295,"length",null))
return J.DY(new Array(a),b)},
uk(a,b){if(a<0)throw A.b(A.U("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
FW(a,b){if(a<0)throw A.b(A.U("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
DY(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
Ks(a,b){return J.Fo(a,b)},
FX(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Kv(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.FX(r))break;++b}return b},
FY(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.FX(r))break}return b},
cL(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.j6.prototype
return J.mM.prototype}if(typeof a=="string")return J.dR.prototype
if(a==null)return J.j7.prototype
if(typeof a=="boolean")return J.mL.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bD.prototype
return a}if(a instanceof A.k)return a
return J.D8(a)},
J(a){if(typeof a=="string")return J.dR.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bD.prototype
return a}if(a instanceof A.k)return a
return J.D8(a)},
ax(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bD.prototype
return a}if(a instanceof A.k)return a
return J.D8(a)},
OZ(a){if(typeof a=="number")return J.eM.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.e8.prototype
return a},
P_(a){if(typeof a=="number")return J.eM.prototype
if(typeof a=="string")return J.dR.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.e8.prototype
return a},
D6(a){if(typeof a=="string")return J.dR.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.e8.prototype
return a},
l4(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.bD.prototype
return a}if(a instanceof A.k)return a
return J.D8(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cL(a).P(a,b)},
Q(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Io(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.J(a).h(a,b)},
b1(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Io(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.ax(a).j(a,b,c)},
aO(a,b){return J.ax(a).u(a,b)},
Fl(a,b){return J.ax(a).D(a,b)},
DF(a,b){return J.D6(a).i2(a,b)},
q9(a){return J.l4(a).n0(a)},
Fm(a,b,c){return J.l4(a).i3(a,b,c)},
Fn(a,b,c){return J.l4(a).n1(a,b,c)},
Jr(a){return J.l4(a).n2(a)},
bV(a,b,c){return J.l4(a).i4(a,b,c)},
qa(a,b){return J.ax(a).fo(a,b)},
Js(a,b,c){return J.OZ(a).by(a,b,c)},
Fo(a,b){return J.P_(a).a2(a,b)},
DG(a,b){return J.J(a).E(a,b)},
lf(a,b){return J.ax(a).a4(a,b)},
lg(a,b){return J.ax(a).cu(a,b)},
Jt(a,b,c){return J.ax(a).cv(a,b,c)},
Ju(a){return J.l4(a).gad(a)},
bK(a){return J.ax(a).gH(a)},
ab(a){return J.cL(a).gK(a)},
bs(a){return J.J(a).gG(a)},
da(a){return J.J(a).gS(a)},
E(a){return J.ax(a).gt(a)},
qb(a){return J.ax(a).ga0(a)},
ag(a){return J.J(a).gl(a)},
c9(a){return J.cL(a).gan(a)},
qc(a){return J.ax(a).gap(a)},
Jv(a,b,c){return J.ax(a).hb(a,b,c)},
Jw(a,b,c){return J.ax(a).aG(a,b,c)},
Jx(a,b){return J.ax(a).C(a,b)},
bB(a,b,c){return J.ax(a).cF(a,b,c)},
Jy(a,b,c){return J.D6(a).eG(a,b,c)},
Jz(a,b){return J.J(a).sl(a,b)},
JA(a,b,c,d,e){return J.ax(a).ai(a,b,c,d,e)},
fx(a,b){return J.ax(a).ba(a,b)},
Fp(a,b){return J.ax(a).cJ(a,b)},
JB(a,b){return J.D6(a).dh(a,b)},
JC(a,b){return J.D6(a).T(a,b)},
Fq(a,b,c){return J.ax(a).V(a,b,c)},
lh(a,b){return J.ax(a).cf(a,b)},
JD(a){return J.ax(a).bU(a)},
DH(a){return J.ax(a).cH(a)},
Y(a){return J.cL(a).m(a)},
JE(a,b){return J.ax(a).dP(a,b)},
mI:function mI(){},
mL:function mL(){},
j7:function j7(){},
aJ:function aJ(){},
dT:function dT(){},
nj:function nj(){},
e8:function e8(){},
bZ:function bZ(){},
bD:function bD(){},
fX:function fX(){},
z:function z(a){this.$ti=a},
mJ:function mJ(){},
ul:function ul(a){this.$ti=a},
fB:function fB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eM:function eM(){},
j6:function j6(){},
mM:function mM(){},
dR:function dR(){}},A={E0:function E0(){},
fD(a,b,c){if(t.O.b(a))return new A.kk(a,b.i("@<0>").Z(c).i("kk<1,2>"))
return new A.ey(a,b.i("@<0>").Z(c).i("ey<1,2>"))},
G_(a){return new A.dS("Field '"+a+"' has been assigned during initialization.")},
G0(a){return new A.dS("Field '"+a+"' has not been initialized.")},
Kz(a){return new A.dS("Field '"+a+"' has already been initialized.")},
e1(a){return new A.nu(a)},
Dc(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aC(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hB(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cq(a,b,c){return a},
F6(a){var s,r
for(s=$.fm.length,r=0;r<s;++r)if(a===$.fm[r])return!0
return!1},
cG(a,b,c,d){A.b_(b,"start")
if(c!=null){A.b_(c,"end")
if(b>c)A.u(A.aA(b,0,c,"start",null))}return new A.cF(a,b,c,d.i("cF<0>"))},
eR(a,b,c,d){if(t.O.b(a))return new A.eH(a,b,c.i("@<0>").Z(d).i("eH<1,2>"))
return new A.cx(a,b,c.i("@<0>").Z(d).i("cx<1,2>"))},
Gp(a,b,c){var s="takeCount"
A.dG(b,s)
A.b_(b,s)
if(t.O.b(a))return new A.iO(a,b,c.i("iO<0>"))
return new A.f3(a,b,c.i("f3<0>"))},
Gn(a,b,c){var s="count"
if(t.O.b(a)){A.dG(b,s)
A.b_(b,s)
return new A.fN(a,b,c.i("fN<0>"))}A.dG(b,s)
A.b_(b,s)
return new A.dn(a,b,c.i("dn<0>"))},
DW(a,b,c){return new A.eG(a,b,c.i("eG<0>"))},
au(){return new A.bw("No element")},
j4(){return new A.bw("Too many elements")},
FU(){return new A.bw("Too few elements")},
nL(a,b,c,d){if(c-b<=32)A.Li(a,b,c,d)
else A.Lh(a,b,c,d)},
Li(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.J(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Lh(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.J(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.nL(a3,a4,r-2,a6)
A.nL(a3,q+2,a5,a6)
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
break}}A.nL(a3,r,q,a6)}else A.nL(a3,r,q,a6)},
As:function As(a){this.a=0
this.b=a},
oT:function oT(a){this.a=0
this.b=a},
ed:function ed(){},
lG:function lG(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b){this.a=a
this.$ti=b},
kk:function kk(a,b){this.a=a
this.$ti=b},
kh:function kh(){},
A1:function A1(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.$ti=b},
ez:function ez(a,b){this.a=a
this.$ti=b},
qF:function qF(a,b){this.a=a
this.b=b},
qE:function qE(a){this.a=a},
dS:function dS(a){this.a=a},
nu:function nu(a){this.a=a},
cv:function cv(a){this.a=a},
Dj:function Dj(){},
y4:function y4(){},
L:function L(){},
a1:function a1(){},
cF:function cF(a,b,c,d){var _=this
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
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
mY:function mY(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Z:function Z(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
iS:function iS(a,b,c){this.a=a
this.b=b
this.$ti=c},
mc:function mc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f3:function f3(a,b,c){this.a=a
this.b=b
this.$ti=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.$ti=c},
oc:function oc(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
fN:function fN(a,b,c){this.a=a
this.b=b
this.$ti=c},
nK:function nK(a,b,c){this.a=a
this.b=b
this.$ti=c},
eI:function eI(a){this.$ti=a},
m9:function m9(a){this.$ti=a},
eb:function eb(a,b){this.a=a
this.$ti=b},
oC:function oC(a,b){this.a=a
this.$ti=b},
de:function de(a,b,c){this.a=a
this.b=b
this.$ti=c},
eG:function eG(a,b,c){this.a=a
this.b=b
this.$ti=c},
dQ:function dQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
iW:function iW(){},
oo:function oo(){},
hF:function hF(){},
bG:function bG(a,b){this.a=a
this.$ti=b},
k2:function k2(a){this.a=a},
kS:function kS(){},
JX(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bQ(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aE(q,A.bQ(new A.av(a,m.i("av<2>")),!0,c),b.i("@<0>").Z(c).i("aE<1,2>"))
n.$keys=l
return n}return new A.iK(A.bm(a,b,c),b.i("@<0>").Z(c).i("iK<1,2>"))},
FF(){throw A.b(A.a3("Cannot modify unmodifiable Map"))},
JY(){throw A.b(A.a3("Cannot modify constant Set"))},
IK(a){var s=A.IJ(a)
if(s!=null)return s
return"minified:"+a},
Io(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Y(a)
return s},
eX(a){var s,r=$.Gc
if(r==null)r=$.Gc=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hc(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
L_(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cg(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
nl(a){var s,r,q,p
if(a instanceof A.k)return A.c7(A.bq(a),null)
s=J.cL(a)
if(s===B.cy||s===B.cA||t.cx.b(a)){r=B.aY(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.c7(A.bq(a),null)},
Ge(a){var s,r,q
if(a==null||typeof a=="number"||A.aV(a))return J.Y(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eB)return a.m(0)
if(a instanceof A.i0)return a.mN(!0)
s=$.Jl()
for(r=0;r<1;++r){q=s[r].yj(a)
if(q!=null)return q}return"Instance of '"+A.nl(a)+"'"},
KW(){return Date.now()},
KZ(){var s,r
if($.x8!==0)return
$.x8=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.x8=1e6
$.nm=new A.x7(r)},
KV(){if(!!self.location)return self.location.href
return null},
Gb(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
L0(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
if(!A.a6(q))throw A.b(A.fo(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ag(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fo(q))}return A.Gb(p)},
Gf(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.a6(q))throw A.b(A.fo(q))
if(q<0)throw A.b(A.fo(q))
if(q>65535)return A.L0(a)}return A.Gb(a)},
L1(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bF(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ag(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aA(a,0,1114111,null,null))},
L2(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.ao(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bE(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Eb(a){return a.c?A.bE(a).getUTCFullYear()+0:A.bE(a).getFullYear()+0},
E9(a){return a.c?A.bE(a).getUTCMonth()+1:A.bE(a).getMonth()+1},
x6(a){return a.c?A.bE(a).getUTCDate()+0:A.bE(a).getDate()+0},
E7(a){return a.c?A.bE(a).getUTCHours()+0:A.bE(a).getHours()+0},
E8(a){return a.c?A.bE(a).getUTCMinutes()+0:A.bE(a).getMinutes()+0},
Ea(a){return a.c?A.bE(a).getUTCSeconds()+0:A.bE(a).getSeconds()+0},
Gd(a){return a.c?A.bE(a).getUTCMilliseconds()+0:A.bE(a).getMilliseconds()+0},
KY(a){return B.c.ao((a.c?A.bE(a).getUTCDay()+0:A.bE(a).getDay()+0)+6,7)+1},
KX(a){var s=a.$thrownJsError
if(s==null)return null
return A.af(s)},
nn(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aW(a,s)
a.$thrownJsError=s
s.stack=b.m(0)}},
CZ(a,b){var s,r="index"
if(!A.a6(b))return new A.bL(!0,b,r,null)
s=J.ag(a)
if(b<0||b>=s)return A.mF(b,s,a,null,r)
return A.xQ(b,r)},
ON(a,b,c){if(a<0||a>c)return A.aA(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aA(b,a,c,"end",null)
return new A.bL(!0,b,"end",null)},
fo(a){return new A.bL(!0,a,null,null)},
b(a){return A.aW(a,new Error())},
aW(a,b){var s
if(a==null)a=new A.du()
b.dartException=a
s=A.PC
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
PC(){return J.Y(this.dartException)},
u(a,b){throw A.aW(a,b==null?new Error():b)},
K(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.u(A.N3(a,b,c),s)},
N3(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.d2("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.b(A.az(a))},
dv(a){var s,r,q,p,o,n
a=A.Ix(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.yS(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
yT(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Gt(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
E1(a,b){var s=b==null,r=s?null:b.method
return new A.mN(a,r,s?null:b.receiver)},
A(a){if(a==null)return new A.nc(a)
if(a instanceof A.iQ)return A.es(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.es(a,a.dartException)
return A.O0(a)},
es(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
O0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ag(r,16)&8191)===10)switch(q){case 438:return A.es(a,A.E1(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.es(a,new A.jz())}}if(a instanceof TypeError){p=$.IT()
o=$.IU()
n=$.IV()
m=$.IW()
l=$.IZ()
k=$.J_()
j=$.IY()
$.IX()
i=$.J1()
h=$.J0()
g=p.cd(s)
if(g!=null)return A.es(a,A.E1(s,g))
else{g=o.cd(s)
if(g!=null){g.method="call"
return A.es(a,A.E1(s,g))}else if(n.cd(s)!=null||m.cd(s)!=null||l.cd(s)!=null||k.cd(s)!=null||j.cd(s)!=null||m.cd(s)!=null||i.cd(s)!=null||h.cd(s)!=null)return A.es(a,new A.jz())}return A.es(a,new A.on(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jX()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.es(a,new A.bL(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jX()
return a},
af(a){var s
if(a instanceof A.iQ)return a.b
if(a==null)return new A.kD(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.kD(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
l6(a){if(a==null)return J.ab(a)
if(typeof a=="object")return A.eX(a)
return J.ab(a)},
Ou(a){if(typeof a=="number")return B.w.gK(a)
if(a instanceof A.pH)return A.eX(a)
if(a instanceof A.i0)return a.gK(a)
if(a instanceof A.k2)return a.gK(0)
return A.l6(a)},
Il(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
OX(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
Ng(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.FK("Unsupported number of arguments for wrapped closure"))},
eq(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Oz(a,b)
a.$identity=s
return s},
Oz(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Ng)},
JR(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.yf().constructor.prototype):Object.create(new A.iB(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.FD(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.JN(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.FD(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
JN(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.JI)}throw A.b("Error in functionType of tearoff")},
JO(a,b,c,d){var s=A.FA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
FD(a,b,c,d){if(c)return A.JQ(a,b,d)
return A.JO(b.length,d,a,b)},
JP(a,b,c,d){var s=A.FA,r=A.JJ
switch(b?-1:a){case 0:throw A.b(new A.nD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
JQ(a,b,c){var s,r
if($.Fy==null)$.Fy=A.Fx("interceptor")
if($.Fz==null)$.Fz=A.Fx("receiver")
s=b.length
r=A.JP(s,c,a,b)
return r},
EY(a){return A.JR(a)},
JI(a,b){return A.kM(v.typeUniverse,A.bq(a.a),b)},
FA(a){return a.a},
JJ(a){return a.b},
Fx(a){var s,r,q,p=new A.iB("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.U("Field name "+a+" not found.",null))},
D7(a){return v.getIsolateTag(a)},
PF(a,b){var s=$.D
if(s===B.i)return a
return s.i7(a,b)},
IC(){return v.G},
QM(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Pe(a){var s,r,q,p,o,n=$.Im.$1(a),m=$.D_[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Dg[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.I2.$2(a,n)
if(q!=null){m=$.D_[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Dg[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.Di(s)
$.D_[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.Dg[n]=s
return s}if(p==="-"){o=A.Di(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Iu(a,s)
if(p==="*")throw A.b(A.Gu(n))
if(v.leafTags[n]===true){o=A.Di(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Iu(a,s)},
Iu(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.F7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
Di(a){return J.F7(a,!1,null,!!a.$ic_)},
Pg(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.Di(s)
else return J.F7(s,c,null,null)},
P6(){if(!0===$.F5)return
$.F5=!0
A.P7()},
P7(){var s,r,q,p,o,n,m,l
$.D_=Object.create(null)
$.Dg=Object.create(null)
A.P5()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Iw.$1(o)
if(n!=null){m=A.Pg(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
P5(){var s,r,q,p,o,n,m=B.bS()
m=A.ik(B.bT,A.ik(B.bU,A.ik(B.aZ,A.ik(B.aZ,A.ik(B.bV,A.ik(B.bW,A.ik(B.bX(B.aY),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Im=new A.Dd(p)
$.I2=new A.De(o)
$.Iw=new A.Df(n)},
ik(a,b){return a(b)||b},
Mg(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
OD(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
E_(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.ac("Illegal RegExp pattern ("+String(o)+")",a,null))},
Pu(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eN){s=B.a.ac(a,c)
return b.b.test(s)}else return!J.DF(b,B.a.ac(a,c)).gG(0)},
Ij(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ix(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C(a,b,c){var s
if(typeof b=="string")return A.Pw(a,b,c)
if(b instanceof A.eN){s=b.gmg()
s.lastIndex=0
return a.replace(s,A.Ij(c))}return A.Pv(a,b,c)},
Pv(a,b,c){var s,r,q,p
for(s=J.DF(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gO()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Pw(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ix(b),"g"),A.Ij(c))},
HU(a){return a},
ID(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.i2(0,a),s=new A.oL(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.HU(B.a.B(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.HU(B.a.ac(a,q)))
return s.charCodeAt(0)==0?s:s},
Px(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.IE(a,s,s+b.length,c)},
IE(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a_:function a_(a,b){this.a=a
this.b=b},
kA:function kA(a,b){this.a=a
this.b=b},
po:function po(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a},
pq:function pq(a){this.a=a},
iK:function iK(a,b){this.a=a
this.$ti=b},
fJ:function fJ(){},
rk:function rk(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
fe:function fe(a,b){this.a=a
this.$ti=b},
hY:function hY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
j_:function j_(a,b){this.a=a
this.$ti=b},
iL:function iL(){},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ue:function ue(){},
j3:function j3(a,b){this.a=a
this.$ti=b},
x7:function x7(a){this.a=a},
jQ:function jQ(){},
yS:function yS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jz:function jz(){},
mN:function mN(a,b,c){this.a=a
this.b=b
this.c=c},
on:function on(a){this.a=a},
nc:function nc(a){this.a=a},
iQ:function iQ(a,b){this.a=a
this.b=b},
kD:function kD(a){this.a=a
this.b=null},
eB:function eB(){},
qK:function qK(){},
qL:function qL(){},
yG:function yG(){},
yf:function yf(){},
iB:function iB(a,b){this.a=a
this.b=b},
nD:function nD(a){this.a=a},
bO:function bO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
um:function um(a){this.a=a},
vq:function vq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
T:function T(a,b){this.a=a
this.$ti=b},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aK:function aK(a,b){this.a=a
this.$ti=b},
mV:function mV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
j9:function j9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j8:function j8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Dd:function Dd(a){this.a=a},
De:function De(a){this.a=a},
Df:function Df(a){this.a=a},
i0:function i0(){},
pl:function pl(){},
pm:function pm(){},
pn:function pn(){},
eN:function eN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
i_:function i_(a){this.b=a},
oK:function oK(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hx:function hx(a,b){this.a=a
this.c=b},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
BJ:function BJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
PB(a){throw A.aW(A.G_(a),new Error())},
v(){throw A.aW(A.G0(""),new Error())},
dD(){throw A.aW(A.Kz(""),new Error())},
DA(){throw A.aW(A.G_(""),new Error())},
oV(){var s=new A.oU("")
return s.b=s},
A2(a){var s=new A.oU(a)
return s.b=s},
oU:function oU(a){this.a=a
this.b=null},
id(a,b,c){},
bc(a){var s,r,q
if(t.iy.b(a))return a
s=J.J(a)
r=A.a9(s.gl(a),null,!1,t.z)
for(q=0;q<s.gl(a);++q)r[q]=s.h(a,q)
return r},
KN(a){return new DataView(new ArrayBuffer(a))},
G6(a,b,c){A.id(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
di(a,b,c){A.id(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
KO(a){return new Int8Array(a)},
KP(a){return new Uint16Array(a)},
G7(a,b,c){A.id(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
wf(a){return new Uint8Array(a)},
c2(a,b,c){A.id(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dB(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.CZ(b,a))},
d7(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.ON(a,b,c))
if(b==null)return c
return b},
h6:function h6(){},
h5:function h5(){},
ju:function ju(){},
pK:function pK(a){this.a=a},
jt:function jt(){},
h7:function h7(){},
dZ:function dZ(){},
c1:function c1(){},
n5:function n5(){},
n6:function n6(){},
n7:function n7(){},
n8:function n8(){},
n9:function n9(){},
jv:function jv(){},
jw:function jw(){},
jx:function jx(){},
eU:function eU(){},
kw:function kw(){},
kx:function kx(){},
ky:function ky(){},
kz:function kz(){},
Ee(a,b){var s=b.c
return s==null?b.c=A.kK(a,"y",[b.x]):s},
Gk(a){var s=a.w
if(s===6||s===7)return A.Gk(a.x)
return s===11||s===12},
Lc(a){return a.as},
It(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aa(a){return A.BP(v.typeUniverse,a,!1)},
P9(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.eo(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
eo(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eo(a1,s,a3,a4)
if(r===s)return a2
return A.H1(a1,r,!0)
case 7:s=a2.x
r=A.eo(a1,s,a3,a4)
if(r===s)return a2
return A.H0(a1,r,!0)
case 8:q=a2.y
p=A.ij(a1,q,a3,a4)
if(p===q)return a2
return A.kK(a1,a2.x,p)
case 9:o=a2.x
n=A.eo(a1,o,a3,a4)
m=a2.y
l=A.ij(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.EB(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ij(a1,j,a3,a4)
if(i===j)return a2
return A.H2(a1,k,i)
case 11:h=a2.x
g=A.eo(a1,h,a3,a4)
f=a2.y
e=A.NW(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.H_(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ij(a1,d,a3,a4)
o=a2.x
n=A.eo(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.EC(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.lr("Attempted to substitute unexpected RTI kind "+a0))}},
ij(a,b,c,d){var s,r,q,p,o=b.length,n=A.BZ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eo(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
NX(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.BZ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eo(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
NW(a,b,c,d){var s,r=b.a,q=A.ij(a,r,c,d),p=b.b,o=A.ij(a,p,c,d),n=b.c,m=A.NX(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.p8()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
q1(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.P0(s)
return a.$S()}return null},
P8(a,b){var s
if(A.Gk(b))if(a instanceof A.eB){s=A.q1(a)
if(s!=null)return s}return A.bq(a)},
bq(a){if(a instanceof A.k)return A.n(a)
if(Array.isArray(a))return A.a2(a)
return A.EM(J.cL(a))},
a2(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.EM(a)},
EM(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Ne(a,s)},
Ne(a,b){var s=a instanceof A.eB?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Mq(v.typeUniverse,s.name)
b.$ccache=r
return r},
P0(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.BP(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
d9(a){return A.bU(A.n(a))},
F4(a){var s=A.q1(a)
return A.bU(s==null?A.bq(a):s)},
EU(a){var s
if(a instanceof A.i0)return a.m6()
s=a instanceof A.eB?A.q1(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c9(a).a
if(Array.isArray(a))return A.a2(a)
return A.bq(a)},
bU(a){var s=a.r
return s==null?a.r=new A.pH(a):s},
OS(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kM(v.typeUniverse,A.EU(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.H4(v.typeUniverse,s,A.EU(q[r]))
return A.kM(v.typeUniverse,s,a)},
b5(a){return A.bU(A.BP(v.typeUniverse,a,!1))},
Nd(a){var s=this
s.b=A.NU(s)
return s.b(a)},
NU(a){var s,r,q,p
if(a===t.K)return A.Nm
if(A.fr(a))return A.Nq
s=a.w
if(s===6)return A.Na
if(s===1)return A.Hy
if(s===7)return A.Nh
r=A.NT(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fr)){a.f="$i"+q
if(q==="q")return A.Nk
if(a===t.m)return A.Nj
return A.Np}}else if(s===10){p=A.OD(a.x,a.y)
return p==null?A.Hy:p}return A.N8},
NT(a){if(a.w===8){if(a===t.S)return A.a6
if(a===t.W||a===t.cZ)return A.Nl
if(a===t.N)return A.No
if(a===t.y)return A.aV}return null},
Nc(a){var s=this,r=A.N7
if(A.fr(s))r=A.ME
else if(s===t.K)r=A.MD
else if(A.io(s)){r=A.N9
if(s===t.u)r=A.aU
else if(s===t.jv)r=A.a0
else if(s===t.o9)r=A.Ca
else if(s===t.jh)r=A.Cb
else if(s===t.dA)r=A.Hj
else if(s===t.mU)r=A.Hk}else if(s===t.S)r=A.ai
else if(s===t.N)r=A.H
else if(s===t.y)r=A.ic
else if(s===t.cZ)r=A.Hl
else if(s===t.W)r=A.fk
else if(s===t.m)r=A.bo
s.a=r
return s.a(a)},
N8(a){var s=this
if(a==null)return A.io(s)
return A.Pc(v.typeUniverse,A.P8(a,s),s)},
Na(a){if(a==null)return!0
return this.x.b(a)},
Np(a){var s,r=this
if(a==null)return A.io(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cL(a)[s]},
Nk(a){var s,r=this
if(a==null)return A.io(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.cL(a)[s]},
Nj(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Hx(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
N7(a){var s=this
if(a==null){if(A.io(s))return a}else if(s.b(a))return a
throw A.aW(A.Hr(a,s),new Error())},
N9(a){var s=this
if(a==null||s.b(a))return a
throw A.aW(A.Hr(a,s),new Error())},
Hr(a,b){return new A.kI("TypeError: "+A.GS(a,A.c7(b,null)))},
GS(a,b){return A.iP(a)+": type '"+A.c7(A.EU(a),null)+"' is not a subtype of type '"+b+"'"},
co(a,b){return new A.kI("TypeError: "+A.GS(a,b))},
Nh(a){var s=this
return s.x.b(a)||A.Ee(v.typeUniverse,s).b(a)},
Nm(a){return a!=null},
MD(a){if(a!=null)return a
throw A.aW(A.co(a,"Object"),new Error())},
Nq(a){return!0},
ME(a){return a},
Hy(a){return!1},
aV(a){return!0===a||!1===a},
ic(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aW(A.co(a,"bool"),new Error())},
Ca(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aW(A.co(a,"bool?"),new Error())},
fk(a){if(typeof a=="number")return a
throw A.aW(A.co(a,"double"),new Error())},
Hj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aW(A.co(a,"double?"),new Error())},
a6(a){return typeof a=="number"&&Math.floor(a)===a},
ai(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aW(A.co(a,"int"),new Error())},
aU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aW(A.co(a,"int?"),new Error())},
Nl(a){return typeof a=="number"},
Hl(a){if(typeof a=="number")return a
throw A.aW(A.co(a,"num"),new Error())},
Cb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aW(A.co(a,"num?"),new Error())},
No(a){return typeof a=="string"},
H(a){if(typeof a=="string")return a
throw A.aW(A.co(a,"String"),new Error())},
a0(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aW(A.co(a,"String?"),new Error())},
bo(a){if(A.Hx(a))return a
throw A.aW(A.co(a,"JSObject"),new Error())},
Hk(a){if(a==null)return a
if(A.Hx(a))return a
throw A.aW(A.co(a,"JSObject?"),new Error())},
HP(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.c7(a[q],b)
return s},
NF(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.HP(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.c7(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Hv(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
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
if(m===8){p=A.O_(a.x)
o=a.y
return o.length>0?p+("<"+A.HP(o,b)+">"):p}if(m===10)return A.NF(a,b)
if(m===11)return A.Hv(a,b,null)
if(m===12)return A.Hv(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
O_(a){var s=A.IJ(a)
if(s!=null)return s
return"minified:"+a},
Mr(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Mq(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.BP(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kL(a,5,"#")
q=A.BZ(s)
for(p=0;p<s;++p)q[p]=r
o=A.kK(a,b,q)
n[b]=o
return o}else return m},
Mp(a,b){return A.Hh(a.tR,b)},
Mo(a,b){return A.Hh(a.eT,b)},
BP(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.H3(a,null,b,!1)
r.set(b,s)
return s},
kM(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.H3(a,b,c,!0)
q.set(c,r)
return r},
H4(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.EB(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
H3(a,b,c,d){return A.Me(A.M8(a,b,c,d))},
em(a,b){b.a=A.Nc
b.b=A.Nd
return b},
kL(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cB(null,null)
s.w=b
s.as=c
r=A.em(a,s)
a.eC.set(c,r)
return r},
H1(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Mm(a,b,r,c)
a.eC.set(r,s)
return s},
Mm(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fr(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.io(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cB(null,null)
q.w=6
q.x=b
q.as=c
return A.em(a,q)},
H0(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Mk(a,b,r,c)
a.eC.set(r,s)
return s},
Mk(a,b,c,d){var s,r
if(d){s=b.w
if(A.fr(b)||b===t.K)return b
else if(s===1)return A.kK(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cB(null,null)
r.w=7
r.x=b
r.as=c
return A.em(a,r)},
Mn(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=13
s.x=b
s.as=q
r=A.em(a,s)
a.eC.set(q,r)
return r},
kJ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Mj(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kK(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kJ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cB(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.em(a,r)
a.eC.set(p,q)
return q},
EB(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kJ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cB(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.em(a,o)
a.eC.set(q,n)
return n},
H2(a,b,c){var s,r,q="+"+(b+"("+A.kJ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.em(a,s)
a.eC.set(q,r)
return r},
H_(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kJ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kJ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Mj(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cB(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.em(a,p)
a.eC.set(r,o)
return o},
EC(a,b,c,d){var s,r=b.as+("<"+A.kJ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Ml(a,b,c,r,d)
a.eC.set(r,s)
return s},
Ml(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.BZ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eo(a,b,r,0)
m=A.ij(a,c,r,0)
return A.EC(a,n,m,c!==m)}}l=new A.cB(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.em(a,l)},
M8(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Me(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Ma(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.GW(a,r,l,k,!1)
else if(q===46)r=A.GW(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fg(a.u,a.e,k.pop()))
break
case 94:k.push(A.Mn(a.u,k.pop()))
break
case 35:k.push(A.kL(a.u,5,"#"))
break
case 64:k.push(A.kL(a.u,2,"@"))
break
case 126:k.push(A.kL(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Mc(a,k)
break
case 38:A.Mb(a,k)
break
case 63:p=a.u
k.push(A.H1(p,A.fg(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.H0(p,A.fg(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.M9(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.GX(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Mf(a.u,a.e,o)
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
Ma(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
GW(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Mr(s,o.x)[p]
if(n==null)A.u('No "'+p+'" in "'+A.Lc(o)+'"')
d.push(A.kM(s,o,n))}else d.push(p)
return m},
Mc(a,b){var s,r=a.u,q=A.GV(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kK(r,p,q))
else{s=A.fg(r,a.e,p)
switch(s.w){case 11:b.push(A.EC(r,s,q,a.n))
break
default:b.push(A.EB(r,s,q))
break}}},
M9(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.GV(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fg(p,a.e,o)
q=new A.p8()
q.a=s
q.b=n
q.c=m
b.push(A.H_(p,r,q))
return
case-4:b.push(A.H2(p,b.pop(),s))
return
default:throw A.b(A.lr("Unexpected state under `()`: "+A.r(o)))}},
Mb(a,b){var s=b.pop()
if(0===s){b.push(A.kL(a.u,1,"0&"))
return}if(1===s){b.push(A.kL(a.u,4,"1&"))
return}throw A.b(A.lr("Unexpected extended operation "+A.r(s)))},
GV(a,b){var s=b.splice(a.p)
A.GX(a.u,a.e,s)
a.p=b.pop()
return s},
fg(a,b,c){if(typeof c=="string")return A.kK(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Md(a,b,c)}else return c},
GX(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fg(a,b,c[s])},
Mf(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fg(a,b,c[s])},
Md(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.lr("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.lr("Bad index "+c+" for "+b.m(0)))},
Pc(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b3(a,b,null,c,null)
r.set(c,s)}return s},
b3(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fr(d))return!0
s=b.w
if(s===4)return!0
if(A.fr(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b3(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.b3(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.b3(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b3(a,b.x,c,d,e))return!1
return A.b3(a,A.Ee(a,b),c,d,e)}if(s===6)return A.b3(a,p,c,d,e)&&A.b3(a,b.x,c,d,e)
if(q===7){if(A.b3(a,b,c,d.x,e))return!0
return A.b3(a,b,c,A.Ee(a,d),e)}if(q===6)return A.b3(a,b,c,p,e)||A.b3(a,b,c,d.x,e)
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
if(!A.b3(a,j,c,i,e)||!A.b3(a,i,e,j,c))return!1}return A.Hw(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.Hw(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ni(a,b,c,d,e)}if(o&&q===10)return A.Nn(a,b,c,d,e)
return!1},
Hw(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b3(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b3(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b3(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b3(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b3(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Ni(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kM(a,b,r[o])
return A.Hi(a,p,null,c,d.y,e)}return A.Hi(a,b.y,null,c,d.y,e)},
Hi(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b3(a,b[s],d,e[s],f))return!1
return!0},
Nn(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b3(a,r[s],c,q[s],e))return!1
return!0},
io(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fr(a))if(s!==6)r=s===7&&A.io(a.x)
return r},
fr(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Hh(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
BZ(a){return a>0?new Array(a):v.typeUniverse.sEA},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
p8:function p8(){this.c=this.b=this.a=null},
pH:function pH(a){this.a=a},
p5:function p5(){},
kI:function kI(a){this.a=a},
LF(){var s,r,q
if(self.scheduleImmediate!=null)return A.O2()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eq(new A.zK(s),1)).observe(r,{childList:true})
return new A.zJ(s,r,q)}else if(self.setImmediate!=null)return A.O3()
return A.O4()},
LG(a){self.scheduleImmediate(A.eq(new A.zL(a),0))},
LH(a){self.setImmediate(A.eq(new A.zM(a),0))},
LI(a){A.En(B.I,a)},
En(a,b){var s=B.c.M(a.a,1000)
return A.Mh(s<0?0:s,b)},
Gq(a,b){var s=B.c.M(a.a,1000)
return A.Mi(s<0?0:s,b)},
Mh(a,b){var s=new A.kH(!0)
s.pJ(a,b)
return s},
Mi(a,b){var s=new A.kH(!1)
s.pK(a,b)
return s},
h(a){return new A.ka(new A.w($.D,a.i("w<0>")),a.i("ka<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.Hm(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.bA(A.A(a),A.af(a))},
Hm(a,b){var s,r,q=new A.Ce(b),p=new A.Cf(b)
if(a instanceof A.w)a.mL(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.b6(q,p,s)
else{r=new A.w($.D,t._)
r.a=8
r.c=a
r.mL(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.D.fV(new A.CI(s),t.H,t.S,t.z)},
aR(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.dk(null)
else{s=c.a
s===$&&A.v()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.A(a)
q=A.af(a)
s.aq(new A.aq(r,q))}else{s=A.A(a)
r=A.af(a)
q=c.a
q===$&&A.v()
q.bp(s,r)
c.a.q()}return}if(a instanceof A.ks){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.u(0,s)
A.l9(new A.Cc(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.uD(p,!1).U(new A.Cd(c,b),t.P)
return}}A.Hm(a,b)},
CG(a){var s=a.a
s===$&&A.v()
return new A.bi(s,A.n(s).i("bi<1>"))},
LJ(a,b){var s=new A.oN(b.i("oN<0>"))
s.pF(a,b)
return s},
Cv(a,b){return A.LJ(a,b)},
M4(a){return new A.ks(a,1)},
d5(a){return new A.ks(a,0)},
GZ(a,b,c){return 0},
ix(a){var s
if(t.C.b(a)){s=a.gcK()
if(s!=null)return s}return B.U},
iZ(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.A(q)
r=A.af(q)
p=new A.w($.D,b.i("w<0>"))
o=s
n=r
m=A.kT(o,n)
if(m==null)o=new A.aq(o,n==null?A.ix(o):n)
else o=m
p.cM(o)
return p}return b.i("y<0>").b(l)?l:A.bH(l,b)},
be(a,b){var s=a==null?b.a(a):a,r=new A.w($.D,b.i("w<0>"))
r.aN(s)
return r},
Kj(a,b){var s
if(!b.b(null))throw A.b(A.aD(null,"computation","The type parameter is not nullable"))
s=new A.w($.D,b.i("w<0>"))
A.c4(a,new A.tK(null,s,b))
return s},
DT(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.D,b.i("w<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.tM(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.b6(new A.tL(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.dk(A.l([],b.i("z<0>")))
return n}i.a=A.a9(n,null,!1,b.i("0?"))}catch(l){p=A.A(l)
o=A.af(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kT(m,k)
if(j==null)m=new A.aq(m,k==null?A.ix(m):k)
else m=j
n.cM(m)
return n}else{i.d=p
i.c=o}}return f},
DS(a,b,c,d){var s=new A.tF(d,null,b,c),r=$.D,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fV(s,c.i("0/"),t.K,t.l)
a.dY(new A.cm(q,2,null,s,a.$ti.i("@<1>").Z(c).i("cm<1,2>")))
return q},
Kh(a,b){var s,r,q,p=A.l([],b.i("z<kq<0>>"))
for(s=a.length,r=b.i("kq<0>"),q=0;q<a.length;a.length===s||(0,A.p)(a),++q)p.push(new A.kq(a[q],r))
if(p.length===0)return A.be(A.l([],b.i("z<0>")),b.i("q<0>"))
s=new A.w($.D,b.i("w<q<0>>"))
A.LZ(p,new A.tG(new A.as(s,b.i("as<q<0>>")),p,b))
return s},
Nu(a){return a!=null},
LZ(a,b){var s,r={},q=r.a=r.b=0,p=new A.AI(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.p)(a),++q)a[q].uj(p)},
kT(a,b){var s,r,q,p=$.D
if(p===B.i)return null
s=p.nj(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.nn(r,q)
return s},
fl(a,b){var s
if($.D!==B.i){s=A.kT(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcK()
if(b==null){A.nn(a,B.U)
b=B.U}}else b=B.U
else if(t.C.b(a))A.nn(a,b)
return new A.aq(a,b)},
LY(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bH(a,b){var s=new A.w($.D,b.i("w<0>"))
s.a=8
s.c=a
return s},
AO(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.Eh()
b.cM(new A.aq(new A.bL(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.mn(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.fe()
b.hm(p.a)
A.fc(b,q)
return}b.a^=2
b.b.df(new A.AP(p,b))},
fc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fF(r.a,r.b)}return}s.a=b
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
f=!(f===k||f.gct()===k.gct())}else f=!1
if(f){f=g.a
r=f.c
f.b.fF(r.a,r.b)
return}j=$.D
if(j!==k)$.D=k
else j=null
f=s.a.c
if((f&15)===8)new A.AT(s,g,p).$0()
else if(q){if((f&1)!==0)new A.AS(s,m).$0()}else if((f&2)!==0)new A.AR(g,s).$0()
if(j!=null)$.D=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hM(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.AO(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hM(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
HE(a,b){if(t.ng.b(a))return b.fV(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dK(a,t.z,t.K)
throw A.b(A.aD(a,"onError",u.w))},
Nt(){var s,r
for(s=$.ig;s!=null;s=$.ig){$.kV=null
r=s.b
$.ig=r
if(r==null)$.kU=null
s.a.$0()}},
NV(){$.EN=!0
try{A.Nt()}finally{$.kV=null
$.EN=!1
if($.ig!=null)$.Fg().$1(A.I5())}},
HR(a){var s=new A.oM(a),r=$.kU
if(r==null){$.ig=$.kU=s
if(!$.EN)$.Fg().$1(A.I5())}else $.kU=r.b=s},
NS(a){var s,r,q,p=$.ig
if(p==null){A.HR(a)
$.kV=$.kU
return}s=new A.oM(a)
r=$.kV
if(r==null){s.b=p
$.ig=$.kV=s}else{q=r.b
s.b=q
$.kV=r.b=s
if(q==null)$.kU=s}},
l9(a){var s,r=null,q=$.D
if(B.i===q){A.CF(r,r,B.i,a)
return}if(B.i===q.gk9().a)s=B.i.gct()===q.gct()
else s=!1
if(s){A.CF(r,r,q,q.ce(a,t.H))
return}s=$.D
s.df(s.fn(a))},
Ej(a,b){var s=null,r=b.i("d4<0>"),q=new A.d4(s,s,s,s,r)
q.aD(a)
q.lG()
return new A.bi(q,r.i("bi<1>"))},
Q_(a,b){return new A.c5(A.cq(a,"stream",t.K),b.i("c5<0>"))},
nU(a,b,c,d,e,f){return e?new A.i7(b,c,d,a,f.i("i7<0>")):new A.d4(b,c,d,a,f.i("d4<0>"))},
dr(a,b,c){return new A.kb(b,a,c.i("kb<0>"))},
pY(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.A(q)
r=A.af(q)
$.D.fF(s,r)}},
LW(a,b,c,d,e,f){var s=$.D,r=e?1:0,q=c!=null?32:0,p=A.oR(s,b,f),o=A.zZ(s,c),n=d==null?A.CK():d
return new A.ee(a,p,o,s.ce(n,t.H),s,r|q,f.i("ee<0>"))},
LE(a){return new A.zG(a)},
oR(a,b,c){var s=b==null?A.O6():b
return a.dK(s,t.H,c)},
zZ(a,b){if(b==null)b=A.O7()
if(t.b9.b(b))return a.fV(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dK(b,t.z,t.K)
throw A.b(A.U("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Nv(a){},
Nx(a,b){$.D.fF(a,b)},
Nw(){},
GR(a,b){var s=$.D,r=new A.hU(s,b.i("hU<0>"))
A.l9(r.gmj())
if(a!=null)r.c=s.ce(a,t.H)
return r},
MN(a,b,c){var s=a.A()
if(s!==$.et())s.b8(new A.Ch(b,c))
else b.aq(c)},
MO(a,b,c){var s=a.A()
if(s!==$.et())s.b8(new A.Ci(b,c))
else b.cN(c)},
c4(a,b){var s=$.D
if(s===B.i)return s.kt(a,b)
return s.kt(a,s.fn(b))},
yH(a,b){var s,r=$.D
if(r===B.i)return r.ks(a,b)
s=r.i7(b,t.hU)
return $.D.ks(a,s)},
q4(a,b,c,d){return A.NR(a,c,b,d)},
NR(a,b,c,d){return $.D.nm(c,b).b5(a,d)},
NP(a,b,c,d,e){A.l_(d,e)},
l_(a,b){A.NS(new A.CC(a,b))},
CD(a,b,c,d){var s,r=$.D
if(r===c)return d.$0()
$.D=c
s=r
try{r=d.$0()
return r}finally{$.D=s}},
CE(a,b,c,d,e){var s,r=$.D
if(r===c)return d.$1(e)
$.D=c
s=r
try{r=d.$1(e)
return r}finally{$.D=s}},
ET(a,b,c,d,e,f){var s,r=$.D
if(r===c)return d.$2(e,f)
$.D=c
s=r
try{r=d.$2(e,f)
return r}finally{$.D=s}},
HN(a,b,c,d){return d},
HO(a,b,c,d){return d},
HM(a,b,c,d){return d},
NO(a,b,c,d,e){return null},
CF(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gct()
r=c.gct()
d=s!==r?c.fn(d):c.kn(d,t.H)}A.HR(d)},
NN(a,b,c,d,e){return A.En(d,B.i!==c?c.kn(e,t.H):e)},
NM(a,b,c,d,e){e=c.uQ(e,t.H,t.hU)
return A.Gq(d,e)},
NQ(a,b,c,d){A.Iv(d)},
HL(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.DU(o,o,o,s,s)
r.D(0,e)}else r=o
s=new A.oZ(c.gmy(),c.gmC(),c.gmA(),c.gmu(),c.gmv(),c.gmt(),c.glZ(),c.gk9(),c.glQ(),c.glP(),c.gmo(),c.gm3(),c.gjP(),c.gkj(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.pR(s,q)
p=d.a
if(p!=null)s.as=new A.pQ(s,p)}if(r!=null)s.at=new A.pS(s,r)
return s},
zK:function zK(a){this.a=a},
zJ:function zJ(a,b,c){this.a=a
this.b=b
this.c=c},
zL:function zL(a){this.a=a},
zM:function zM(a){this.a=a},
kH:function kH(a){this.a=a
this.b=null
this.c=0},
BN:function BN(a,b){this.a=a
this.b=b},
BM:function BM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ka:function ka(a,b){this.a=a
this.b=!1
this.$ti=b},
Ce:function Ce(a){this.a=a},
Cf:function Cf(a){this.a=a},
CI:function CI(a){this.a=a},
Cc:function Cc(a,b){this.a=a
this.b=b},
Cd:function Cd(a,b){this.a=a
this.b=b},
oN:function oN(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
zO:function zO(a){this.a=a},
zP:function zP(a){this.a=a},
zR:function zR(a){this.a=a},
zS:function zS(a,b){this.a=a
this.b=b},
zQ:function zQ(a,b){this.a=a
this.b=b},
zN:function zN(a){this.a=a},
ks:function ks(a,b){this.a=a
this.b=b},
pE:function pE(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
i6:function i6(a,b){this.a=a
this.$ti=b},
aq:function aq(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
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
kg:function kg(){},
kb:function kb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
tK:function tK(a,b,c){this.a=a
this.b=b
this.c=c},
tM:function tM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tL:function tL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tF:function tF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
od:function od(a,b){this.a=a
this.b=b},
tG:function tG(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(a,b,c){this.c=a
this.d=b
this.$ti=c},
kq:function kq(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
AJ:function AJ(a,b){this.a=a
this.b=b},
AK:function AK(a,b){this.a=a
this.b=b},
AI:function AI(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(){},
aG:function aG(a,b){this.a=a
this.$ti=b},
as:function as(a,b){this.a=a
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
AL:function AL(a,b){this.a=a
this.b=b},
AQ:function AQ(a,b){this.a=a
this.b=b},
AP:function AP(a,b){this.a=a
this.b=b},
AN:function AN(a,b){this.a=a
this.b=b},
AM:function AM(a,b){this.a=a
this.b=b},
AT:function AT(a,b,c){this.a=a
this.b=b
this.c=c},
AU:function AU(a,b){this.a=a
this.b=b},
AV:function AV(a){this.a=a},
AS:function AS(a,b){this.a=a
this.b=b},
AR:function AR(a,b){this.a=a
this.b=b},
AW:function AW(a,b){this.a=a
this.b=b},
AX:function AX(a,b,c){this.a=a
this.b=b
this.c=c},
AY:function AY(a,b){this.a=a
this.b=b},
oM:function oM(a){this.a=a
this.b=null},
ad:function ad(){},
yj:function yj(a,b){this.a=a
this.b=b},
yk:function yk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yl:function yl(a,b){this.a=a
this.b=b},
ym:function ym(a,b){this.a=a
this.b=b},
yh:function yh(a){this.a=a},
yi:function yi(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(){},
ek:function ek(){},
BF:function BF(a){this.a=a},
BE:function BE(a){this.a=a},
pF:function pF(){},
kc:function kc(){},
d4:function d4(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
i7:function i7(a,b,c,d,e){var _=this
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
ee:function ee(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
oJ:function oJ(){},
zG:function zG(a){this.a=a},
zF:function zF(a){this.a=a},
kE:function kE(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
bb:function bb(){},
A0:function A0(a,b,c){this.a=a
this.b=b
this.c=c},
A_:function A_(a){this.a=a},
i5:function i5(){},
p4:function p4(){},
cl:function cl(a,b){this.b=a
this.a=null
this.$ti=b},
hT:function hT(a,b){this.b=a
this.c=b
this.a=null},
AB:function AB(){},
ei:function ei(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
Bm:function Bm(a,b){this.a=a
this.b=b},
hU:function hU(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
c5:function c5(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
kl:function kl(a){this.$ti=a},
dz:function dz(a,b){this.b=a
this.$ti=b},
Bk:function Bk(a,b){this.a=a
this.b=b},
kv:function kv(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
Ch:function Ch(a,b){this.a=a
this.b=b},
Ci:function Ci(a,b){this.a=a
this.b=b},
ko:function ko(){},
hX:function hX(a,b,c,d,e,f,g){var _=this
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
km:function km(a,b){this.a=a
this.$ti=b},
i3:function i3(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
kf:function kf(a,b,c){this.a=a
this.b=b
this.$ti=c},
C7:function C7(a,b){this.a=a
this.b=b},
C9:function C9(a,b){this.a=a
this.b=b},
C8:function C8(a,b){this.a=a
this.b=b},
C5:function C5(a,b){this.a=a
this.b=b},
C6:function C6(a,b){this.a=a
this.b=b},
C4:function C4(a,b){this.a=a
this.b=b},
C1:function C1(a,b){this.a=a
this.b=b},
pR:function pR(a,b){this.a=a
this.b=b},
C0:function C0(a,b){this.a=a
this.b=b},
C_:function C_(a,b){this.a=a
this.b=b},
C3:function C3(a,b){this.a=a
this.b=b},
C2:function C2(a,b){this.a=a
this.b=b},
pQ:function pQ(a,b){this.a=a
this.b=b},
pS:function pS(a,b){this.a=a
this.b=b},
pP:function pP(){},
oZ:function oZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
Ax:function Ax(a,b,c){this.a=a
this.b=b
this.c=c},
Az:function Az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Aw:function Aw(a,b){this.a=a
this.b=b},
Ay:function Ay(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(){},
Bt:function Bt(a,b,c){this.a=a
this.b=b
this.c=c},
Bs:function Bs(a,b){this.a=a
this.b=b},
Bu:function Bu(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a){this.a=a},
CC:function CC(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
DU(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dy(d.i("@<0>").Z(e).i("dy<1,2>"))
b=A.F_()}else{if(A.Ia()===b&&A.I9()===a)return new A.ef(d.i("@<0>").Z(e).i("ef<1,2>"))
if(a==null)a=A.EZ()}else{if(b==null)b=A.F_()
if(a==null)a=A.EZ()}return A.LX(a,b,c,d,e)},
Ex(a,b){var s=a[b]
return s===a?null:s},
Ez(a,b,c){if(c==null)a[b]=a
else a[b]=c},
Ey(){var s=Object.create(null)
A.Ez(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
LX(a,b,c,d,e){var s=c!=null?c:new A.Av(d)
return new A.ki(a,b,s,d.i("@<0>").Z(e).i("ki<1,2>"))},
dU(a,b,c,d){if(b==null){if(a==null)return new A.bO(c.i("@<0>").Z(d).i("bO<1,2>"))
b=A.F_()}else{if(A.Ia()===b&&A.I9()===a)return new A.j9(c.i("@<0>").Z(d).i("j9<1,2>"))
if(a==null)a=A.EZ()}return A.M7(a,b,null,c,d)},
m(a,b,c){return A.Il(a,new A.bO(b.i("@<0>").Z(c).i("bO<1,2>")))},
t(a,b){return new A.bO(a.i("@<0>").Z(b).i("bO<1,2>"))},
M7(a,b,c,d,e){return new A.kt(a,b,new A.Bi(d),d.i("@<0>").Z(e).i("kt<1,2>"))},
vs(a){return new A.cK(a.i("cK<0>"))},
aP(a){return new A.cK(a.i("cK<0>"))},
ao(a,b){return A.OX(a,new A.cK(b.i("cK<0>")))},
EA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eh(a,b,c){var s=new A.eg(a,b,c.i("eg<0>"))
s.c=a.e
return s},
MZ(a,b){return J.x(a,b)},
N_(a){return J.ab(a)},
FV(a){if(a.length===0)return null
return B.b.ga0(a)},
bm(a,b,c){var s=A.dU(null,null,b,c)
a.a5(0,new A.vr(s,b,c))
return s},
bP(a,b,c){var s=A.dU(null,null,b,c)
s.D(0,a)
return s},
mW(a,b){var s,r,q=A.vs(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.u(0,b.a(a[r]))
return q},
c0(a,b){var s=A.vs(b)
s.D(0,a)
return s},
KA(a,b){var s=t.bP
return J.Fo(s.a(a),s.a(b))},
vN(a){var s,r
if(A.F6(a))return"{...}"
s=new A.a7("")
try{r={}
$.fm.push(a)
s.a+="{"
r.a=!0
a.a5(0,new A.vO(r,s))
s.a+="}"}finally{$.fm.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
E2(a){return new A.jc(A.a9(A.KB(null),null,!1,a.i("0?")),a.i("jc<0>"))},
KB(a){return 8},
dy:function dy(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
B_:function B_(a){this.a=a},
AZ:function AZ(a){this.a=a},
ef:function ef(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ki:function ki(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
Av:function Av(a){this.a=a},
fd:function fd(a,b){this.a=a
this.$ti=b},
p9:function p9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
kt:function kt(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
Bi:function Bi(a){this.a=a},
cK:function cK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Bj:function Bj(a){this.a=a
this.c=this.b=null},
eg:function eg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
vr:function vr(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
pg:function pg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
bf:function bf(){},
M:function M(){},
W:function W(){},
vM:function vM(a){this.a=a},
vO:function vO(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.a=a
this.$ti=b},
pi:function pi(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
pJ:function pJ(){},
jg:function jg(){},
d1:function d1(a,b){this.a=a
this.$ti=b},
jc:function jc(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
ph:function ph(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cC:function cC(){},
kC:function kC(){},
kN:function kN(){},
HC(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.A(r)
q=A.ac(String(s),null,null)
throw A.b(q)}q=A.Ck(p)
return q},
Ck(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.pd(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.Ck(a[s])
return a},
MC(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Jb()
else s=new Uint8Array(o)
for(r=J.J(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
MB(a,b,c,d){var s=a?$.Ja():$.J9()
if(s==null)return null
if(0===c&&d===b.length)return A.Hf(s,b)
return A.Hf(s,b.subarray(c,d))},
Hf(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Fs(a,b,c,d,e,f){if(B.c.ao(f,4)!==0)throw A.b(A.ac("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.ac("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.ac("Invalid base64 padding, more than two '=' characters",a,b))},
LN(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.aD(b,"Not a byte value at index "+q+": 0x"+B.c.l3(s.h(b,q),16),null))},
LM(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ag(f,2),i=f&3,h=$.Fh()
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
return A.GF(a,r+1,c,-m-1)}throw A.b(A.ac(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.ac(k,a,r))},
LK(a,b,c,d){var s=A.LL(a,b,c),r=(d&3)+(s-b),q=B.c.ag(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.J2()},
LL(a,b,c){var s,r=c,q=r,p=0
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
GF(a,b,c,d){var s,r
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
K6(a){return B.dc.h(0,a.toLowerCase())},
FZ(a,b,c){return new A.ja(a,b)},
N2(a){return a.p()},
M5(a,b){return new A.Be(a,[],A.OA())},
M6(a,b,c){var s,r=new A.a7("")
A.GU(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
GU(a,b,c,d){var s=A.M5(b,c)
s.j5(a)},
Hg(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pd:function pd(a,b){this.a=a
this.b=b
this.c=null},
Bd:function Bd(a){this.a=a},
pe:function pe(a){this.a=a},
Bb:function Bb(a,b,c){this.b=a
this.c=b
this.a=c},
BX:function BX(){},
BW:function BW(){},
lo:function lo(){},
pI:function pI(){},
lp:function lp(a){this.a=a},
BO:function BO(a,b){this.a=a
this.b=b},
lv:function lv(a){this.a=a},
iz:function iz(a){this.a=a},
oP:function oP(a){this.a=0
this.b=a},
zY:function zY(a){this.c=null
this.a=0
this.b=a},
zU:function zU(){},
zH:function zH(a,b){this.a=a
this.b=b},
lw:function lw(){},
oO:function oO(){this.a=0},
zT:function zT(a,b){this.a=a
this.b=b},
qw:function qw(){},
hO:function hO(a){this.a=a},
oS:function oS(a,b){this.a=a
this.b=b
this.c=0},
lH:function lH(){},
pz:function pz(a,b,c){this.a=a
this.b=b
this.$ti=c},
fa:function fa(a,b,c){this.a=a
this.b=b
this.$ti=c},
lJ:function lJ(){},
aH:function aH(){},
rq:function rq(a){this.a=a},
eJ:function eJ(){},
ja:function ja(a,b){this.a=a
this.b=b},
mO:function mO(a,b){this.a=a
this.b=b},
un:function un(){},
mQ:function mQ(a){this.b=a},
Bc:function Bc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mP:function mP(a){this.a=a},
Bf:function Bf(){},
Bg:function Bg(a,b){this.a=a
this.b=b},
Be:function Be(a,b,c){this.c=a
this.a=b
this.b=c},
mT:function mT(){},
mU:function mU(a){this.a=a},
nX:function nX(){},
BK:function BK(a,b){this.a=a
this.b=b},
kG:function kG(){},
pB:function pB(a){this.a=a},
BV:function BV(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function ot(){},
ou:function ou(){},
pN:function pN(a){this.b=this.a=0
this.c=a},
BY:function BY(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
k4:function k4(a){this.a=a},
dA:function dA(a){this.a=a
this.b=16
this.c=0},
pT:function pT(){},
GP(a,b){var s=A.LU(a,b)
if(s==null)throw A.b(A.ac("Could not parse BigInt",a,null))
return s},
LR(a,b){var s,r,q=$.cs(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bu(0,$.Fi()).o4(0,A.kd(s))
s=0
o=0}}if(b)return q.bX(0)
return q},
GH(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
LS(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.w.uS(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.GH(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.GH(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cs()
l=A.bS(j,i)
return new A.aQ(l===0?!1:c,i,l)},
LU(a,b){var s,r,q,p,o
if(a==="")return null
s=$.J4().ez(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.LR(p,q)
if(o!=null)return A.LS(o,2,q)
return null},
bS(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
Ev(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
GG(a){var s
if(a===0)return $.cs()
if(a===1)return $.fv()
if(a===2)return $.J5()
if(Math.abs(a)<4294967296)return A.kd(B.c.h3(a))
s=A.LO(a)
return s},
kd(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bS(4,s)
return new A.aQ(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bS(1,s)
return new A.aQ(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ag(a,16)
r=A.bS(2,s)
return new A.aQ(r===0?!1:o,s,r)}r=B.c.M(B.c.gn5(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bS(r,s)
return new A.aQ(r===0?!1:o,s,r)},
LO(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.U("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cs()
r=$.J3()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.K(r)
r[p]=0}q=J.q9(B.f.gad(r))
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
if(n<0)k=l.dU(0,-n)
else k=n>0?l.bY(0,n):l
if(s)return k.bX(0)
return k},
Ew(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.K(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.K(d)
d[s]=0}return b+c},
GN(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.ao(c,16),l=16-m,k=B.c.bY(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dU(p,l)
r&2&&A.K(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bY((p&k)>>>0,m)}r&2&&A.K(d)
d[n]=q},
GI(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.ao(c,16)===0)return A.Ew(a,b,o,d)
s=b+o+1
A.GN(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.K(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
LT(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.ao(c,16),m=16-n,l=B.c.bY(1,n)-1,k=B.c.dU(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bY((q&l)>>>0,m)
s&2&&A.K(d)
d[r]=(p|k)>>>0
k=B.c.dU(q,n)}s&2&&A.K(d)
d[j]=k},
zV(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
LP(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.K(e)
e[q]=r&65535
r=B.c.ag(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.K(e)
e[q]=r&65535
r=B.c.ag(r,16)}s&2&&A.K(e)
e[b]=r},
oQ(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.K(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.K(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}},
GO(a,b,c,d,e,f){var s,r,q,p,o,n
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
LQ(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.jg((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
P4(a){return A.l6(a)},
DP(a,b){return new A.md(new WeakMap(),a,b.i("md<0>"))},
DQ(a){},
AH(a,b){var s=$.J6()
s=s==null?null:new s(A.eq(A.PF(a,b),1))
return new A.p7(s,b.i("p7<0>"))},
aN(a){var s=A.hc(a,null)
if(s!=null)return s
throw A.b(A.ac(a,null,null))},
OP(a){var s=A.L_(a)
if(s!=null)return s
throw A.b(A.ac("Invalid double",a,null))},
Ka(a,b){a=A.aW(a,new Error())
a.stack=b.m(0)
throw a},
a9(a,b,c,d){var s,r=c?J.uk(a,d):J.mK(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bQ(a,b,c){var s,r=A.l([],c.i("z<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
O(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("z<0>"))
s=A.l([],b.i("z<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fY(a,b){var s=A.bQ(a,!1,b)
s.$flags=3
return s},
e6(a,b,c){var s,r,q,p,o
A.b_(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.aA(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Gf(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Lp(a,b,c)
if(r)a=J.lh(a,c)
if(b>0)a=J.fx(a,b)
s=A.O(a,t.S)
return A.Gf(s)},
Lp(a,b,c){var s=a.length
if(b>=s)return""
return A.L1(a,b,c==null||c>s?s:c)},
ak(a,b,c){return new A.eN(a,A.E_(a,!1,b,c,!1,""))},
P3(a,b){return a==null?b==null:a===b},
yn(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
Ep(){var s,r,q=A.KV()
if(q==null)throw A.b(A.a3("'Uri.base' is not supported"))
s=$.Gy
if(s!=null&&q===$.Gx)return s
r=A.os(q)
$.Gy=r
$.Gx=q
return r},
pM(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.J7()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bF(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Mw(a){var s,r,q
if(!$.J8())return A.Mx(a)
s=new URLSearchParams()
a.a5(0,new A.BU(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.B(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
Eh(){return A.af(new Error())},
DM(a,b,c,d,e,f,g){var s=A.L2(a,b,c,d,e,f,g,0,!0)
return new A.aI(s==null?new A.t3(a,b,c,d,e,f,g,0).$0():s,0,!0)},
K0(){return new A.aI(Date.now(),0,!1)},
m4(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.aA(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.aA(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aD(b,s,"Time including microseconds is outside valid range"))
A.cq(c,"isUtc",t.y)
return a},
K1(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
FH(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
m3(a){if(a>=10)return""+a
return"0"+a},
bX(a,b,c){return new A.aF(a+1000*b+1e6*c)},
fO(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aD(b,"name","No enum value with that name"))},
iP(a){if(typeof a=="number"||A.aV(a)||a==null)return J.Y(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Ge(a)},
FJ(a,b){A.cq(a,"error",t.K)
A.cq(b,"stackTrace",t.l)
A.Ka(a,b)},
lr(a){return new A.lq(a)},
U(a,b){return new A.bL(!1,null,b,a)},
aD(a,b,c){return new A.bL(!0,a,b,c)},
dG(a,b){return a},
b8(a){var s=null
return new A.dl(s,s,!1,s,s,a)},
xQ(a,b){return new A.dl(null,null,!0,a,b,"Value not in range")},
aA(a,b,c,d,e){return new A.dl(b,c,!0,a,d,"Invalid value")},
Gj(a,b,c,d){if(a<b||a>c)throw A.b(A.aA(a,b,c,d,null))
return a},
L6(a,b,c,d){return A.FT(a,d,b,null,c)},
bn(a,b,c){if(0>a||a>c)throw A.b(A.aA(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aA(b,a,c,"end",null))
return b}return c},
b_(a,b){if(a<0)throw A.b(A.aA(a,0,null,b,null))
return a},
FS(a,b){var s=b.b
return new A.j1(s,!0,a,null,"Index out of range")},
mF(a,b,c,d,e){return new A.j1(b,!0,a,e,"Index out of range")},
FT(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.mF(a,b,c,d,e==null?"index":e))
return a},
a3(a){return new A.d2(a)},
Gu(a){return new A.om(a)},
B(a){return new A.bw(a)},
az(a){return new A.lM(a)},
FK(a){return new A.p6(a)},
ac(a,b,c){return new A.bv(a,b,c)},
Kq(a,b,c){var s,r
if(A.F6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.fm.push(a)
try{A.Nr(a,s)}finally{$.fm.pop()}r=A.yn(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
uj(a,b,c){var s,r
if(A.F6(a))return b+"..."+c
s=new A.a7(b)
$.fm.push(a)
try{r=s
r.a=A.yn(r.a,a,", ")}finally{$.fm.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Nr(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
G1(a,b,c,d,e){return new A.ez(a,b.i("@<0>").Z(c).Z(d).Z(e).i("ez<1,2,3,4>"))},
ch(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.ab(a)
b=J.ab(b)
return A.hB(A.aC(A.aC($.fw(),s),b))}if(B.d===d){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
return A.hB(A.aC(A.aC(A.aC($.fw(),s),b),c))}if(B.d===e){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
return A.hB(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d))}if(B.d===f){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
return A.hB(A.aC(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d),e))}if(B.d===g){s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
f=J.ab(f)
return A.hB(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d),e),f))}s=J.ab(a)
b=J.ab(b)
c=J.ab(c)
d=J.ab(d)
e=J.ab(e)
f=J.ab(f)
g=J.ab(g)
g=A.hB(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC(A.aC($.fw(),s),b),c),d),e),f),g))
return g},
wg(a){var s,r=$.fw()
for(s=J.E(a);s.k();)r=A.aC(r,J.ab(s.gn()))
return A.hB(r)},
Hn(a,b){return 65536+((a&1023)<<10)+(b&1023)},
os(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Gw(a4<a4?B.a.B(a5,0,a4):a5,5,a3).go_()
else if(s===32)return A.Gw(B.a.B(a5,5,a4),0,a3).go_()}r=A.a9(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.HQ(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.HQ(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.dL(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.af(a5,"http",0)){if(i&&o+3===n&&B.a.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dL(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.af(a5,"https",0)){if(i&&o+4===n&&B.a.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dL(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cn(a4<a5.length?B.a.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.EE(a5,0,q)
else{if(q===0)A.i9(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Hb(a5,c,p-1):""
a=A.H9(a5,p,o,!1)
i=o+1
if(i<n){a0=A.hc(B.a.B(a5,i,n),a3)
d=A.BQ(a0==null?A.u(A.ac("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Ha(a5,n,m,a3,j,a!=null)
a2=m<l?A.BR(a5,m+1,l,a3):a3
return A.kP(j,b,a,d,a1,a2,l<a4?A.H8(a5,l+1,a4):a3)},
Ly(a){return A.EH(a,0,a.length,B.o,!1)},
or(a,b,c){throw A.b(A.ac("Illegal IPv4 address, "+a,b,c))},
Lv(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.or("each part must be in the range 0..255",a,r)}A.or("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.or(k,a,q)}l=p+1
s&2&&A.K(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.or(k,a,q)
p=l}A.or("IPv4 address should contain exactly 4 parts",a,q)},
Lw(a,b,c){var s
if(b===c)throw A.b(A.ac("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Lx(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Gz(a,b,c)
return!0},
Lx(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bv(o,a,r)
s=r
break}return new A.bv("Unexpected character",a,r-1)}if(s-1===b)return new A.bv(o,a,s)
return new A.bv("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bv("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bv("Invalid IPvFuture address character",a,s)}},
Gz(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.yY(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Lv(a1,o,a3,s,q*2)
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
B.f.kD(s,c,b,0)}}return s},
kP(a,b,c,d,e,f,g){return new A.kO(a,b,c,d,e,f,g)},
H5(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i9(a,b,c){throw A.b(A.ac(c,a,b))},
Mt(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.E(q,"/")){s=A.a3("Illegal path character "+q)
throw A.b(s)}}},
BQ(a,b){if(a!=null&&a===A.H5(b))return null
return a},
H9(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.i9(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Mu(a,r,s)
if(p<s){o=p+1
q=A.He(a,B.a.af(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Lw(a,r,s)
m=B.a.B(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cw(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.He(a,B.a.af(a,"25",o)?s+3:o,c,"%25")}else q=""
A.Gz(a,b,s)
return"["+B.a.B(a,b,s)+q+"]"}return A.Mz(a,b,c)},
Mu(a,b,c){var s=B.a.cw(a,"%",b)
return s>=b&&s<c?s:c},
He(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a7(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.EF(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a7("")
m=i.a+=B.a.B(a,r,s)
if(n)o=B.a.B(a,s,s+3)
else if(o==="%")A.i9(a,s,"ZoneID should not contain % anymore")
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
m=A.ED(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.B(a,b,c)
if(r<c){j=B.a.B(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Mz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.EF(a,s,!0)
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
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.i9(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a7("")
m=q}else m=q
m.a+=l
k=A.ED(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.B(a,b,c)
if(r<c){l=B.a.B(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
EE(a,b,c){var s,r,q
if(b===c)return""
if(!A.H7(a.charCodeAt(b)))A.i9(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.i9(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.B(a,b,c)
return A.Ms(r?a.toLowerCase():a)},
Ms(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Hb(a,b,c){if(a==null)return""
return A.kQ(a,b,c,16,!1,!1)},
Ha(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kQ(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.T(s,"/"))s="/"+s
return A.My(s,e,f)},
My(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.T(a,"/")&&!B.a.T(a,"\\"))return A.EG(a,!s||c)
return A.fj(a)},
BR(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.U("Both query and queryParameters specified",null))
return A.kQ(a,b,c,256,!0,!1)}if(d==null)return null
return A.Mw(d)},
Mx(a){var s={},r=new A.a7("")
s.a=""
a.a5(0,new A.BS(new A.BT(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
H8(a,b,c){if(a==null)return null
return A.kQ(a,b,c,256,!0,!1)},
EF(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.Dc(s)
p=A.Dc(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bF(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.B(a,b,b+3).toUpperCase()
return null},
ED(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.mH(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.e6(s,0,null)},
kQ(a,b,c,d,e,f){var s=A.Hd(a,b,c,d,e,f)
return s==null?B.a.B(a,b,c):s},
Hd(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.EF(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.i9(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.ED(o)}if(p==null){p=new A.a7("")
l=p}else l=p
l.a=(l.a+=B.a.B(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.B(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Hc(a){if(B.a.T(a,"."))return!0
return B.a.cc(a,"/.")!==-1},
fj(a){var s,r,q,p,o,n
if(!A.Hc(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.C(s,"/")},
EG(a,b){var s,r,q,p,o,n
if(!A.Hc(a))return!b?A.H6(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga0(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.H6(s[0])
return B.b.C(s,"/")},
H6(a){var s,r,q=a.length
if(q>=2&&A.H7(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.B(a,0,s)+"%3A"+B.a.ac(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
MA(a,b){if(a.wP("package")&&a.c==null)return A.HS(b,0,b.length)
return-1},
Mv(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.U("Invalid URL encoding",null))}}return s},
EH(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.B(a,b,c)
else p=new A.cv(B.a.B(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.U("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.U("Truncated URI",null))
p.push(A.Mv(a,o+1))
o+=2}else p.push(r)}}return d.fq(p)},
H7(a){var s=a|32
return 97<=s&&s<=122},
Gw(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.ac(k,a,r))}}if(q<0&&r>b)throw A.b(A.ac(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga0(j)
if(p!==44||r!==n+7||!B.a.af(a,"base64",n+1))throw A.b(A.ac("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.R.xd(a,m,s)
else{l=A.Hd(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dL(a,m,s,l)}return new A.yX(a,j,c)},
HQ(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
GY(a){if(a.b===7&&B.a.T(a.a,"package")&&a.c<=0)return A.HS(a.a,a.e,a.f)
return-1},
HS(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
MQ(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
zW:function zW(){},
zX:function zX(){},
p7:function p7(a,b){this.a=a
this.$ti=b},
BU:function BU(a){this.a=a},
t3:function t3(a,b,c,d,e,f,g,h){var _=this
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
AC:function AC(){},
aj:function aj(){},
lq:function lq(a){this.a=a},
du:function du(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j1:function j1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
d2:function d2(a){this.a=a},
om:function om(a){this.a=a},
bw:function bw(a){this.a=a},
lM:function lM(a){this.a=a},
nf:function nf(){},
jX:function jX(){},
p6:function p6(a){this.a=a},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
mH:function mH(){},
o:function o(){},
V:function V(a,b,c){this.a=a
this.b=b
this.$ti=c},
X:function X(){},
k:function k(){},
pD:function pD(){},
jZ:function jZ(){this.b=this.a=0},
jP:function jP(a){this.a=a},
nC:function nC(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a7:function a7(a){this.a=a},
yY:function yY(a){this.a=a},
kO:function kO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
BT:function BT(a,b){this.a=a
this.b=b},
BS:function BS(a){this.a=a},
yX:function yX(a,b,c){this.a=a
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
p1:function p1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
md:function md(a,b,c){this.a=a
this.b=b
this.$ti=c},
KC(a){return a},
Kt(a){return a},
Ek(a){return a},
Kr(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.Hk(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Ki(a){return new v.G.Promise(A.c6(new A.tJ(a)))},
nb:function nb(a){this.a=a},
tJ:function tJ(a){this.a=a},
tH:function tH(a){this.a=a},
tI:function tI(a){this.a=a},
Cu(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.MH,a)
s[$.fu()]=a
return s},
d8(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.MI,a)
s[$.fu()]=a
return s},
c6(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.MJ,a)
s[$.fu()]=a
return s},
pV(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.MK,a)
s[$.fu()]=a
return s},
ie(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.ML,a)
s[$.fu()]=a
return s},
EL(a){var s
if(typeof a=="function")throw A.b(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.MM,a)
s[$.fu()]=a
return s},
MH(a){return a.$0()},
MI(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
MJ(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
MK(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
ML(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
MM(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
HA(a){return a==null||A.aV(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
l5(a){if(A.HA(a))return a
return new A.Dh(new A.ef(t.mp)).$1(a)},
D9(a,b){return a[b]},
EX(a,b,c){return a[b].apply(a,c)},
On(a,b){var s,r
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
a4(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.aG(s,b.i("aG<0>"))
a.then(A.eq(new A.Dn(r),1),A.eq(new A.Do(r),1))
return s},
Hz(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
l1(a){if(A.Hz(a))return a
return new A.CU(new A.ef(t.mp)).$1(a)},
Dh:function Dh(a){this.a=a},
Dn:function Dn(a){this.a=a},
Do:function Do(a){this.a=a},
CU:function CU(a){this.a=a},
Ip(a,b){return Math.max(a,b)},
Gh(){return B.av},
Gi(){return $.DD()},
B8:function B8(){},
B9:function B9(a){this.a=a},
JK(a,b,c){return J.Fm(a,b,c)},
ma:function ma(){},
a8:function a8(){},
qy:function qy(a){this.a=a},
qz:function qz(a){this.a=a},
qA:function qA(a,b){this.a=a
this.b=b},
qB:function qB(a){this.a=a},
qC:function qC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qD:function qD(a){this.a=a},
m6:function m6(a){this.$ti=a},
j5:function j5(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b){this.a=a
this.$ti=b},
i8:function i8(){},
hp:function hp(a,b){this.a=a
this.$ti=b},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a,b,c){this.a=a
this.b=b
this.$ti=c},
m5:function m5(){},
G8(){throw A.b(A.a3(u.O))},
Gv(){throw A.b(A.a3("Cannot modify an unmodifiable Map"))},
na:function na(){},
op:function op(){},
at(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.e6(m,0,null)},
cw:function cw(a){this.a=a},
cb:function cb(){this.a=null},
mz:function mz(){},
tO:function tO(){},
d6(a){var s=new Uint32Array(A.bc(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.px(s,r,a,q,new Uint32Array(16))},
pw:function pw(){},
Bw:function Bw(){},
px:function px(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
lk:function lk(){},
qJ:function qJ(){},
je:function je(a){this.a=a},
jT:function jT(){},
vG:function vG(){},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
y3:function y3(){},
jU:function jU(a,b){this.b=a
this.c=b},
nH:function nH(a){this.a=a},
bI(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
m_(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bI(a5[0])
r=A.bI(a5[1])
q=A.bI(a5[2])
p=A.bI(a5[3])
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
g=B.c.ao(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.ao(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bY(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bI(s)
a5.$flags&2&&A.K(a5)
a5[0]=k
a5[1]=A.bI(r)
a5[2]=A.bI(q)
a5[3]=A.bI(p)},
FG(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.dg(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.ao(q,n),!1)
p=J.bV(B.aF.gad(r),0,null)
o=new Uint32Array(4)
A.m_(o,a,b)
A.m_(o,a,p)
return J.bV(B.y.gad(o),0,null)},
lZ:function lZ(a,b,c){this.c=a
this.d=b
this.a=c},
rI:function rI(){},
p_:function p_(){},
p0:function p0(){},
q_(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.la()===B.S){a5=A.fn(a5)
a6=A.fn(a6)
a7=A.fn(a7)
a8=A.fn(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ao[a5>>>24&255]^B.am[a6>>>16&255]^B.an[a7>>>8&255]^B.aq[a8&255]^b3[r]
o=B.ao[a6>>>24&255]^B.am[a7>>>16&255]^B.an[a8>>>8&255]^B.aq[a5&255]^b3[r+1]
n=B.ao[a7>>>24&255]^B.am[a8>>>16&255]^B.an[a5>>>8&255]^B.aq[a6&255]^b3[r+2]
m=B.ao[a8>>>24&255]^B.am[a5>>>16&255]^B.an[a6>>>8&255]^B.aq[a7&255]^b3[r+3]
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
if($.la()===B.S){a1=A.fn(a1)
a2=A.fn(a2)
a3=A.fn(a3)
a4=A.fn(a4)}a9.$flags&2&&A.K(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
I1(a){var s,r,q,p,o,n,m,l,k,j,i=a.ger(),h=B.db.h(0,i.gl(0))
if(h==null)throw A.b(A.U("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.Fm(B.y.gad(r),r.byteOffset,i.gl(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.K(q,9)
q.setUint8(m,l);++m}k=i.gl(0)/4|0
if($.la()===B.S)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.ao(m,k)
if(n===0)j=A.HX((j<<8|j>>>24)>>>0)^B.cL[B.c.jg(m,k)-1]<<24
else if(o&&n===4)j=A.HX(j)
r[m]=(j^r[m-k])>>>0}return r},
HX(a){return(B.n[a>>>24&255]<<24|B.n[a>>>16&255]<<16|B.n[a>>>8&255]<<8|B.n[a&255])>>>0},
fn(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
rt:function rt(){},
rJ:function rJ(){},
Ar:function Ar(){},
nx:function nx(a,b){this.a=a
this.b=b},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
qs:function qs(){},
HY(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.nx("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eA)){s=J.Y(a)
if(B.a.T(s,"TypeError: "))s=B.a.ac(s,11)
a=new A.eA(s,b.b)}return a},
HK(a,b,c){A.FJ(A.HY(a,c),b)},
MF(a,b){return new A.dz(new A.Cg(a,b),t.fb)},
ih(a,b,c){return A.NE(a,b,c)},
NE(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ih=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$ih)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.Cw(e)
a1.r=new A.Cx(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.Q
case 6:n=null
p=9
s=12
return A.a(A.a4(c.read(),k),$async$ih)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.A(b)
l=A.af(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.HY(m,a)
k=l
j=a1.b
if(j>=4)A.u(a1.c_())
if((j&1)!==0){j=a1.gaX()
j.aM(d,k==null?B.U:k)}s=15
return A.a(a1.q(),$async$ih)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.uV()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.u(a1.c_())
if((f&1)!==0)a1.gaX().aD(g)}g=a1.b
s=((g&1)!==0?(a1.gaX().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aG(new A.w($.D,j),i):g).a,$async$ih)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ih,r)},
lE:function lE(a){this.b=!1
this.c=a},
qv:function qv(a){this.a=a},
Cg:function Cg(a,b){this.a=a
this.b=b},
Cw:function Cw(a){this.a=a},
Cx:function Cx(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a){this.a=a},
qx:function qx(a){this.a=a},
FC(a,b){return new A.eA(a,b)},
eA:function eA(a,b){this.a=a
this.b=b},
n3:function n3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
KM(a,b){var s=t.N,r=A.l([],t.e8),q=$.Fb()
if(!q.b.test(a))A.u(A.aD(a,"method","Not a valid method"))
return new A.w8(A.t(s,s),r,a,b,A.dU(new A.lz(),new A.lA(),s,s))},
w8:function w8(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
w9:function w9(a,b){this.a=a
this.b=b},
L9(a,b){var s=new Uint8Array(0),r=$.Fb()
if(!r.b.test(a))A.u(A.aD(a,"method","Not a valid method"))
r=t.N
return new A.xT(s,a,b,A.dU(new A.lz(),new A.lA(),r,r))},
xT:function xT(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
k0:function k0(){},
nW:function nW(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
JL(a){return a.toLowerCase()},
iD:function iD(a,b,c){this.a=a
this.c=b
this.$ti=c},
KF(a){return A.PE("media type",a,new A.vP(a))},
E4(a,b,c){var s=t.N
if(c==null)s=A.t(s,s)
else{s=new A.iD(A.Oo(),A.t(s,t.ag),t.fo)
s.D(0,c)}return new A.h_(a.toLowerCase(),b.toLowerCase(),new A.d1(s,t.ph))},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
vP:function vP(a){this.a=a},
vR:function vR(a){this.a=a},
vQ:function vQ(){},
OU(a){var s
a.nk($.Ji(),"quoted string")
s=a.gkQ().h(0,0)
return A.ID(B.a.B(s,1,s.length-1),$.Jh(),new A.D2(),null)},
D2:function D2(){},
qr:function qr(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jC:function jC(){},
wu:function wu(a,b){this.a=a
this.b=b},
wv:function wv(a){this.a=a},
jF:function jF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
x0:function x0(){},
BC:function BC(a){this.a=a},
wQ:function wQ(){},
hb(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aZ("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aZ("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aZ('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.j
else if(j.b(o))n=A.bm(o,t.N,t.X)
else throw A.b(A.aZ('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.r
else if(t.j.b(m)){for(j=J.J(m),k=0;k<j.gl(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aZ('Record field "imgs"['+k+"] is present but not a string."))
j=j.fo(m,t.N)
l=j.bU(j)}else throw A.b(A.aZ('Record field "imgs" is present but not a list.'))
return new A.cV(s,p,r,n,l)},
wy:function wy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wP:function wP(a){this.a=a},
wO:function wO(){},
wG:function wG(a,b,c){this.a=a
this.b=b
this.c=c},
wH:function wH(a,b,c){this.a=a
this.b=b
this.c=c},
wD:function wD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wz:function wz(a,b){this.a=a
this.b=b},
wB:function wB(a,b){this.a=a
this.b=b},
wA:function wA(a,b){this.a=a
this.b=b},
wE:function wE(a){this.a=a},
wF:function wF(a,b){this.a=a
this.b=b},
wC:function wC(a){this.a=a},
wK:function wK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wL:function wL(){},
wM:function wM(a,b){this.a=a
this.b=b},
wN:function wN(){},
wI:function wI(a,b){this.a=a
this.b=b},
wJ:function wJ(){},
KT(a,b,c,d,e,f){var s=A.be(null,t.H)
return new A.wR(b,c,f,new A.x_(a,B.ak,null),e,d,s)},
KU(a){return 0.5+B.av.nD()},
jE:function jE(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
wR:function wR(a,b,c,d,e,f,g){var _=this
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
x_:function x_(a,b,c){this.a=a
this.b=b
this.c=c},
wU:function wU(){},
wY:function wY(a){this.a=a},
wZ:function wZ(a){this.a=a},
wV:function wV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wS:function wS(a,b,c){this.a=a
this.b=b
this.c=c},
wT:function wT(a){this.a=a},
wW:function wW(a){this.a=a},
wX:function wX(a){this.a=a},
BD:function BD(a,b){this.a=a
this.b=null
this.c=b},
Kn(a,b,c){return new A.cR(a,b,c)},
j0(a,b){return new A.dN(a)},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mC:function mC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.a=a},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
ww:function ww(a){this.a=a},
wx:function wx(a){this.a=a},
JZ(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="storePolicies",b2="recordId",b3="field",b4="imgs",b5="name",b6="group",b7="expectedSha256",b8="allowVolatileBlobs",b9="session",c0="index",c1="refId",c2="token",c3="id",c4="spec",c5="store"
switch(c6){case"open":s=c7.h(0,"stores")
r=c7.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.R("Malformed open payload."))
q=c7.h(0,b1)
p=A.l([],t.d)
for(o=J.J(s),n=0;n<o.gl(s);++n)p.push(A.DL(o.h(s,n),"stores["+n+"]"))
o=t.N
m=A.t(o,o)
for(l=r.ga3(),l=l.gt(l);l.k();){k=l.gn()
m.j(0,J.Y(k.a),A.EW(k.b,"fingerprint"))}if(q==null)o=null
else{o=A.t(o,t.X)
for(l=t.f.a(q).ga3(),l=l.gt(l);l.k();){k=l.gn()
o.j(0,J.Y(k.a),A.DL(k.b,b1))}}return new A.ne(p,m,o)
case"capabilities":return B.bN
case"health":return B.bQ
case"close":return B.bO
case"fileBeginUpload":j=c7.h(0,"size")
if(!A.a6(j))throw A.b(A.R("Malformed fileBeginUpload payload."))
return new A.mi(A.aX(c7),A.bd(c7,b2),A.kX(c7.h(0,b3),b3,b4),A.kX(c7.h(0,b5),b5,"blob.bin"),A.cp(c7.h(0,b6),b6),j,A.cp(c7.h(0,b7),b7),A.en(c7.h(0,b8),b8,!1))
case"fileChunk":i=c7.h(0,"chunk")
if(!t.p.b(i))throw A.b(A.R("Malformed fileChunk payload."))
return new A.mj(A.bd(c7,b9),i)
case"fileFinish":return new A.mo(A.bd(c7,b9))
case"fileAbort":return new A.mh(A.bd(c7,b9))
case"filesList":return new A.mx(A.aX(c7),A.bd(c7,b2),A.kX(c7.h(0,b3),b3,b4),A.cp(c7.h(0,b6),b6))
case"fileOpen":return new A.mr(A.aX(c7),A.bd(c7,b2),A.kX(c7.h(0,b3),b3,b4),A.HB(c7.h(0,c0),c0,0),A.cp(c7.h(0,c1),c1))
case"fileDownload":return new A.mm(A.aX(c7),A.bd(c7,b2),A.kX(c7.h(0,b3),b3,b4),A.cp(c7.h(0,c1),c1))
case"fileCredit":h=c7.h(0,"bytes")
if(!A.a6(h))throw A.b(A.R("Malformed fileCredit payload."))
return new A.ml(A.bd(c7,"stream"),h)
case"fileClose":return new A.mk(A.bd(c7,"stream"))
case"fileRemove":return new A.mu(A.aX(c7),A.bd(c7,b2),A.kX(c7.h(0,b3),b3,b4),A.HB(c7.h(0,c0),c0,0),A.cp(c7.h(0,c1),c1))
case"fileGc":g=c7.h(0,"blobGraceMs")
f=c7.h(0,"tmpGraceMs")
if(!A.a6(g)||!A.a6(f))throw A.b(A.R("Malformed fileGc payload."))
return new A.mp(g,f)
case"fileEnforceStorageCap":e=c7.h(0,"maxBytes")
if(!A.a6(e))throw A.b(A.R("Malformed fileEnforceStorageCap payload."))
return new A.mb(e)
case"fileStorageStatus":return B.c3
case"syncStart":d=c7.h(0,"baseUrl")
if(typeof d!="string")throw A.b(A.R("Malformed syncStart payload."))
return new A.o5(d,A.cp(c7.h(0,"scopeId"),"scopeId"),A.cp(c7.h(0,c2),c2))
case"syncStop":return B.c8
case"syncNow":return B.c4
case"syncPause":return B.c5
case"syncResume":return B.c6
case"syncUpdateAuth":return new A.ob(A.cp(c7.h(0,c2),c2))
case"syncSetConnectivity":c=c7.h(0,"online")
if(!A.aV(c))throw A.b(A.R("Malformed syncSetConnectivity payload."))
return new A.o4(c)
case"syncStatus":return B.c7
case"get":return new A.my(A.aX(c7),A.bd(c7,c3),A.cP(c7))
case"rows":b=c7.h(0,"ids")
if(!t.j.b(b))throw A.b(A.R("Malformed rows payload."))
return new A.nA(A.aX(c7),A.I_(b,"ids"),A.cP(c7))
case"mutate":return new A.n4(A.aX(c7),A.MW(c7.h(0,"mutation")),A.cP(c7))
case"query":return new A.ns(A.aX(c7),A.eZ(c7.h(0,c4)),A.cP(c7))
case"count":return new A.lV(A.aX(c7),A.eZ(c7.h(0,c4)),A.cP(c7))
case"countDistinct":return new A.lU(A.aX(c7),A.bd(c7,b3),A.eZ(c7.h(0,c4)),A.cP(c7))
case"distinct":p=A.aX(c7)
o=A.bd(c7,b3)
m=c7.h(0,c4)
return new A.m7(p,o,A.eZ(m==null?B.j:m),A.cP(c7))
case"ids":return new A.mD(A.aX(c7),A.eZ(c7.h(0,c4)),A.cP(c7))
case"aggregate":a=c7.h(0,"fn")
a0=A.DX(new A.ap(B.cX,new A.ro(a),t.gx))
if(a0==null)throw A.b(A.R("Unknown aggregate: "+A.r(a)))
return new A.ll(A.aX(c7),a0,A.bd(c7,b3),A.eZ(c7.h(0,c4)),A.cP(c7))
case"explain":return new A.me(A.aX(c7),A.eZ(c7.h(0,c4)),A.cP(c7))
case"search":return new A.nG(A.aX(c7),A.Lg(c7.h(0,c4)),A.cP(c7))
case"txBegin":a1=c7.h(0,"readOnly")
if(!A.aV(a1))throw A.b(A.R("Malformed txBegin payload."))
a2=c7.h(0,"durability")
if(a2==null)a3=B.bt
else if(typeof a2=="string"){p=A.DX(new A.ap(B.d9,new A.rp(a2),t.mE))
if(p==null)p=A.u(A.R("Unknown tx durability: "+a2))
a3=p}else{p=A.u(A.R("Malformed txBegin durability."))
a3=p}return new A.of(a1,a3)
case"txCommit":case"txRollback":a4=c7.h(0,b9)
if(typeof a4!="string")throw A.b(A.R("Malformed tx payload."))
return c6==="txCommit"?new A.og(a4):new A.oi(a4)
case"txSavepoint":case"txRollbackTo":case"txRelease":a4=c7.h(0,b9)
a5=c7.h(0,b5)
if(typeof a4!="string"||typeof a5!="string")throw A.b(A.R("Malformed savepoint payload."))
A:{if("txSavepoint"===c6){p=new A.ok(a4,a5)
break A}if("txRollbackTo"===c6){p=new A.oj(a4,a5)
break A}p=new A.oh(a4,a5)
break A}return p
case"watchOne":return new A.oz(A.aX(c7),A.bd(c7,c3))
case"watch":return new A.oA(A.aX(c7),A.eZ(c7.h(0,c4)))
case"watchCancel":a6=c7.h(0,"subscription")
if(typeof a6!="string")throw A.b(A.R("Malformed watchCancel payload."))
return new A.oy(a6)
case"analyze":return new A.ln(A.cp(c7.h(0,c5),c5))
case"walCheckpoint":return B.ca
case"vacuum":return B.c9
case"pruneOutbox":return B.c1
case"wipe":return B.cb
case"compact":a7=c7.h(0,c5)
a8=c7.h(0,"olderThanMs")
if(typeof a7!="string"||!A.a6(a8))throw A.b(A.R("Malformed compact payload."))
return new A.lL(a7,a8)
case"runMaintenance":a9=c7.h(0,"compactOlderThanMs")
if(!A.a6(a9))throw A.b(A.R("Malformed runMaintenance payload."))
return new A.nB(a9)
case"conflictsList":return new A.lR(A.cp(c7.h(0,c5),c5))
case"conflictGet":return new A.lP(A.aX(c7),A.bd(c7,c3))
case"conflictsResolve":b0=c7.h(0,"merged")
if(!t.f.b(b0))throw A.b(A.R("Malformed conflictsResolve payload."))
return new A.ny(A.aX(c7),A.bd(c7,c3),A.DL(b0,"merged"))
case"conflictsAcceptLocal":return new A.li(A.aX(c7),A.bd(c7,c3))
case"conflictsAcceptRemote":return new A.lj(A.aX(c7),A.bd(c7,c3))
case"conflictsWatch":return new A.lT(A.cp(c7.h(0,c5),c5))
default:return null}},
aX(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.R("Malformed store name."))
return s},
bd(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.R('Malformed field "'+b+'".'))
return s},
cP(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.R("Malformed session id."))
return s},
DL(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.ga3(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Y(q.a),q.b)}return s}throw A.b(A.R('Malformed field "'+b+'".'))},
CM(a){var s,r=u.P
if(a instanceof A.dV){A:{if(a instanceof A.e9){s="ValidationException"
break A}if(a instanceof A.hE){s="UniqueConstraintException"
break A}if(a instanceof A.h8){s="NotNullConstraintException"
break A}if(a instanceof A.iG){s="CheckConstraintException"
break A}if(a instanceof A.jG){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.iX){s="ForeignKeyConstraintException"
break A}if(a instanceof A.k3){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.iY){s="FtsUnavailableError"
break A}if(a instanceof A.hn){s="SchemaRegistrationError"
break A}if(a instanceof A.jR){s="SchemaTooNewError"
break A}if(a instanceof A.dq){s="StorageError"
break A}if(a instanceof A.jO){s="RemoteOnlyError"
break A}if(a instanceof A.jM){s="RecordNotFoundException"
break A}if(a instanceof A.jY){s="StaleCursorError"
break A}if(a instanceof A.ji){s="MissingLimitError"
break A}if(a instanceof A.iI){s="ConflictBlockedError"
break A}if(a instanceof A.fL){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.jL){s="ReadOnlyTxError"
break A}throw A.b(A.e1(r))}return s}if(t.b0.b(a))return"RangeError"
if(a instanceof A.bL)return"ArgumentError"
if(a instanceof A.bw)return"StateError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
if(a instanceof A.b9){B:{if(a instanceof A.dt){s="TransientNetworkError"
break B}if(a instanceof A.cX){s="ServerBusyError"
break B}if(a instanceof A.f_){s="ServerError"
break B}if(a instanceof A.bM){s="AuthError"
break B}if(a instanceof A.ce){s="ForbiddenError"
break B}if(a instanceof A.cf){s="NotFoundError"
break B}if(a instanceof A.dj){s="PayloadError"
break B}if(a instanceof A.e0){s="ProtocolError"
break B}if(a instanceof A.dK){s="DuplicateIdError"
break B}if(a instanceof A.dc){s="BatchFailedError"
break B}if(a instanceof A.e3){s="RemoteVersionConflict"
break B}if(a instanceof A.hz){s="SyncIdentityError"
break B}throw A.b(A.e1(r))}return s}if(a instanceof A.jH)return"ProtocolEnvelopeException"
if(a instanceof A.f4)return"WireException"
return"unknown"},
aL(a){return new A.jH(a)},
OQ(a){var s,r,q,p=J.Y(a),o=null
if(a instanceof A.dV){s=A.CM(a)
p=a.a
if(a instanceof A.e9&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.hE){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.fp(a.c))}catch(r){if(!(A.A(r) instanceof A.f4))throw r}}else if(a instanceof A.h8)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.b9){s=A.CM(a)
p=a.a
if(a instanceof A.cX&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else{s=A.CM(a)
if(a instanceof A.f4)p=a.a
else if(a instanceof A.bw)p=a.a
else if(t.b0.b(a))p=A.r(a.d)
else if(a instanceof A.bL)p=A.r(a.d)}q=A.t(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
N4(a){var s
A:{if(a instanceof A.jn){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.jq){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.jo){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.jr){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.jk){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.jl){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.jj){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.jp){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.jm){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.e1(u.P))}return s},
MW(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.R("Malformed mutation payload."))
s=t.N
r=a.aR(0,new A.Co(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.jn(A.pZ(r.h(0,n),n))
case"upsert":return new A.jq(A.pZ(r.h(0,n),n))
case"putAll":return new A.jo(A.HV(r.h(0,m),m))
case"upsertAll":return new A.jr(A.HV(r.h(0,m),m))
case"patch":return new A.jk(A.CB(r.h(0,l),l),A.pZ(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.R("Malformed patchAll patches."))
k=A.t(s,t.G)
for(s=p.ga3(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.Y(o.a),A.pZ(o.b,"patches"))}return new A.jl(k)
case"archive":return new A.jj(A.CB(r.h(0,l),l))
case"restore":return new A.jp(A.CB(r.h(0,l),l))
case"purge":return new A.jm(A.CB(r.h(0,l),l))
default:throw A.b(A.R("Unknown mutation kind: "+A.r(q)))}},
CB(a,b){if(typeof a=="string")return a
throw A.b(A.R('Malformed mutation field "'+b+'".'))},
pZ(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.ga3(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Y(q.a),q.b)}return s}throw A.b(A.R('Malformed mutation field "'+b+'".'))},
HV(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.E(a);r.k();)s.push(A.pZ(r.gn(),b))
return s}throw A.b(A.R('Malformed mutation field "'+b+'".'))},
eZ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.R("Malformed query spec."))
s=a0.aR(0,new A.xL(),t.N,t.z)
r=new A.xM()
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
else a=a.b(s.h(0,e))?A.E6(s.h(0,e)):A.u(A.R("Malformed query predicate."))
i=A.l([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.u(A.R("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.L5(h.gn()))
h=m==null?null:A.EV(m,"limit")
g=A.en(s.h(0,"all"),"all",!1)
f=n==null?null:A.I_(n,"select")
return new A.xK(k,j,a,i,h,g,f,A.en(s.h(0,d),d,!1),A.en(s.h(0,c),c,!1),A.cp(l,"cursor"),A.en(s.h(0,b),b,!1))},
Gg(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.R(k))
s=a.aR(0,new A.xG(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.R(k))
p=A.DX(new A.ap(B.cN,new A.xH(q),t.mz))
if(p==null)throw A.b(A.R("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.R('Query condition "values" must be a list.'))
n=A.l2(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.l2(l.gn()))}else m=null
return new A.eY(r,p,n,m)},
E6(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.R("Malformed predicate tree."))
s=a.aR(0,new A.x4(),t.N,t.z)
r=new A.x3()
switch(s.h(0,"kind")){case"leaf":return new A.jb(A.Gg(s))
case"not":return new A.jy(A.E6(s.h(0,"child")))
case"all":return new A.iv(r.$1(s.h(0,q)))
case"any":return new A.iw(r.$1(s.h(0,q)))
default:throw A.b(A.R("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
L5(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.R(q))
s=a.aR(0,new A.xJ(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.R(q))
return new A.nr(r,A.en(s.h(0,"desc"),"desc",!1))},
Lg(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.R("Malformed search spec."))
s=a.aR(0,new A.y2(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.R("Malformed search term."))
q=s.h(0,p)==null?null:A.EV(s.h(0,p),p)
return new A.y1(r,q,A.en(s.h(0,"all"),"all",!1),A.en(s.h(0,o),o,!1),A.en(s.h(0,n),n,!1))},
K_(a){return new A.fK(a)},
K4(a){return new A.fM(a)},
Ko(a){return new A.fW(a)},
JG(a){return new A.fz(a)},
Kb(a){return new A.fP(a)},
fp(a){var s,r,q,p
if(a instanceof A.aI)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.R.gdC().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.fp(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.t(s,t.X)
for(q=a.ga3(),q=q.gt(q);q.k();){p=q.gn()
r.j(0,J.Y(p.a),A.fp(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.t(t.N,t.X)
for(r=a.ga3(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Y(q.a),A.fp(q.b))}return s}if(a==null||A.aV(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.R("Value of type "+J.c9(a).m(0)+" is not wire-safe."))},
l2(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.cL(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.a6(s))return new A.aI(A.m4(s,0,!0),0,!0)
throw A.b(A.R("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.af.v(s)
return i}catch(p){if(t.Y.b(A.A(p)))throw A.b(A.R(k))
else throw p}throw A.b(A.R(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.R("Malformed map wire value."))
n=A.t(t.N,t.X)
for(i=o.ga3(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.R(j+A.r(m)))
n.j(0,m,A.l2(q.b))}return n}l=A.t(t.N,t.X)
for(i=a.ga3(),i=i.gt(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.R(j+A.r(m)))
l.j(0,m,A.l2(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.l2(q.gn()))
return i}return a},
R(a){return new A.f4(a)},
EW(a,b){if(typeof a=="string")return a
throw A.b(A.R('Malformed wire field "'+b+'".'))},
EV(a,b){if(A.a6(a))return a
throw A.b(A.R('Malformed wire field "'+b+'".'))},
cp(a,b){if(a==null)return null
return A.EW(a,b)},
HB(a,b,c){if(a==null)return c
return A.EV(a,b)},
en(a,b,c){if(a==null)return!1
if(A.aV(a))return a
throw A.b(A.R('Malformed wire field "'+b+'".'))},
kX(a,b,c){if(a==null)return c
return A.EW(a,b)},
I_(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.l([],t.s)
for(r=J.J(a),q=0;q<r.gl(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.R(p+b+"["+q+']".'))
s.push(A.H(r.h(a,q)))}return s}throw A.b(A.R(p+b+'".'))},
ro:function ro(a){this.a=a},
rp:function rp(a){this.a=a},
lO:function lO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jH:function jH(a){this.a=a},
cc:function cc(){},
lK:function lK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lS:function lS(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
this.b=b},
mt:function mt(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.Q=l},
mi:function mi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mj:function mj(a,b){this.a=a
this.b=b},
mo:function mo(a){this.a=a},
mk:function mk(a){this.a=a},
mh:function mh(a){this.a=a},
mx:function mx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mr:function mr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mm:function mm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ml:function ml(a,b){this.a=a
this.b=b},
mu:function mu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mp:function mp(a,b){this.a=a
this.b=b},
mb:function mb(a){this.a=a},
nS:function nS(){},
mw:function mw(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
fT:function fT(a){this.a=a},
ms:function ms(a){this.a=a},
fS:function fS(a){this.a=a},
fQ:function fQ(a){this.a=a},
hv:function hv(a){this.a=a},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wa:function wa(){},
jn:function jn(a){this.a=a},
jq:function jq(a){this.a=a},
jo:function jo(a){this.a=a},
jr:function jr(a){this.a=a},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a){this.a=a},
jj:function jj(a){this.a=a},
jp:function jp(a){this.a=a},
jm:function jm(a){this.a=a},
Co:function Co(){},
xK:function xK(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
xL:function xL(){},
xM:function xM(){},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xG:function xG(){},
xH:function xH(a){this.a=a},
b7:function b7(a,b){this.a=a
this.b=b},
cU:function cU(){},
x4:function x4(){},
x3:function x3(){},
jb:function jb(a){this.a=a},
jy:function jy(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
nr:function nr(a,b){this.a=a
this.b=b},
xJ:function xJ(){},
cN:function cN(a,b){this.a=a
this.b=b},
y1:function y1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y2:function y2(){},
nw:function nw(){},
ne:function ne(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(){},
mA:function mA(){},
lI:function lI(){},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
nA:function nA(a,b,c){this.a=a
this.b=b
this.c=c},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
lU:function lU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m7:function m7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mD:function mD(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function nG(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(a,b){this.a=a
this.b=b},
of:function of(a,b){this.a=a
this.b=b},
og:function og(a){this.a=a},
oi:function oi(a){this.a=a},
ok:function ok(a,b){this.a=a
this.b=b},
oj:function oj(a,b){this.a=a
this.b=b},
oh:function oh(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
oA:function oA(a,b){this.a=a
this.b=b},
oy:function oy(a){this.a=a},
ln:function ln(a){this.a=a},
ox:function ox(){},
ov:function ov(){},
oD:function oD(){},
no:function no(){},
lL:function lL(a,b){this.a=a
this.b=b},
nB:function nB(a){this.a=a},
lR:function lR(a){this.a=a},
lP:function lP(a,b){this.a=a
this.b=b},
ny:function ny(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a,b){this.a=a
this.b=b},
lj:function lj(a,b){this.a=a
this.b=b},
lT:function lT(a){this.a=a},
ah:function ah(){},
h9:function h9(){},
iC:function iC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mB:function mB(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
h4:function h4(a){this.a=a},
hi:function hi(a,b,c,d,e){var _=this
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
ho:function ho(a){this.a=a},
nF:function nF(a,b){this.a=a
this.b=b},
fI:function fI(a){this.a=a},
fH:function fH(a){this.a=a},
hC:function hC(a){this.a=a},
hJ:function hJ(a){this.a=a},
he:function he(a){this.a=a},
fG:function fG(a){this.a=a},
hL:function hL(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c,d,e,f,g,h,i,j){var _=this
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
bg:function bg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
o5:function o5(a,b,c){this.a=a
this.b=b
this.c=c},
oa:function oa(){},
o0:function o0(){},
o1:function o1(){},
o3:function o3(){},
ob:function ob(a){this.a=a},
o4:function o4(a){this.a=a},
o8:function o8(){},
o6:function o6(a){this.a=a},
o2:function o2(a){this.a=a},
o9:function o9(a){this.a=a},
o7:function o7(a){this.a=a},
lt:function lt(){},
f4:function f4(a){this.a=a},
al(a){var s,r=new A.a7("")
A.cr(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Fa(a){var s,r,q
for(s=new A.nC(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
MP(a){var s
if(!isFinite(a))return B.w.m(a)
s=B.w.m(a)
if(B.a.cb(s,".0"))s=B.a.B(s,0,s.length-2)
return s==="-0"?"0":s},
cr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(b==null){a.a+="null"
return 4}if(A.aV(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.a6(b)){r=B.c.m(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.MP(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.w.m(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a9(b,g)
a.a+=r
return A.Fa(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.J(b),p<s.gl(b);++p){if(p>0){a.a+=",";++q}q+=A.cr(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
n=A.aP(t.N)
for(s=J.E(b.gJ());s.k();){m=s.gn()
r=J.Y(m)
if(!n.u(0,r))throw A.b(A.U('Cannot canonicalize map: keys collide after toString() ("'+r+'").',g))
o.push(new A.a_(r,m))}B.b.cJ(o,new A.DB())
a.a+="{"
for(s=o.length,q=1,l=!0,k=0;k<o.length;o.length===s||(0,A.p)(o),++k,l=!1){j=o[k]
if(!l){a.a+=",";++q}i=B.h.a9(j.a,g)
a.a+=i
h=A.Fa(i)
a.a+=":"
q=q+h+1+A.cr(a,b.h(0,j.b))}a.a+="}"
return q+1}throw A.b(A.U("Cannot canonicalize value of type "+J.c9(b).m(0),g))},
DB:function DB(){},
Lk(a){var s,r,q,p=A.ak("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ez(a)
if(p==null)return B.dM
s=p.b
r=s[1]
r.toString
r=A.aN(r)
q=s[2]
q.toString
q=A.aN(q)
s=s[3]
s=A.hc(s==null?"":s,null)
return new A.ej(r,q,s==null?0:s)},
Go(a,b,c){var s,r=A.Lk(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
f1(a,b){return A.Ll(a,b)},
Ll(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$f1=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.bd("SELECT sqlite_version() AS v"),$async$f1)
case 3:g=d.Q(c.bK(a2),"v")
g.toString
A.H(g)
k=t.U
d=A
c=A
b=J
s=4
return A.a(a.bd("PRAGMA compile_options"),$async$f1)
case 4:j=d.O(new c.eb(b.bB(a2,new A.yc(),t.X),k),k.i("o.E"))
n=B.b.bq(j,new A.yd())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.N("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$f1)
case 11:s=12
return A.a(a.N("DROP TABLE lp__fts5_probe"),$async$f1)
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
k=a0===B.bj
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.bd("PRAGMA journal_mode"),$async$f1)
case 19:l=a2
if(J.da(l))m=A.a0(J.bK(J.bK(l).gaU()))
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
case 18:case 14:h=A.Go(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nR(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f1,r)},
nk:function nk(a,b){this.a=a
this.b=b},
nR:function nR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yc:function yc(){},
yd:function yd(){},
iE:function iE(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a5:function a5(a,b){this.a=a
this.b=b},
qG:function qG(a,b){this.a=a
this.b=b},
qH:function qH(){},
qI:function qI(){},
Fr(a){return new Uint8Array(A.bc(a))},
tg:function tg(){},
qd:function qd(a,b,c){this.b=a
this.c=b
this.d=c},
D3(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cD
if(r===B.J){r=a.f
r.toString
r=!B.b.E(r,b)}else r=!1
if(r)return B.cI
return s
case 1:case 4:return!A.a6(b)?B.cE:s
case 2:if(typeof b!="number")return B.b8
if(!isFinite(b))return B.b8
return s
case 3:return!A.aV(b)?B.cF:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cG:s
case 7:return!t.j.b(b)?B.cH:s}},
dC(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=A.m(["id",e],t.N,t.X)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
k.j(0,l,A.EK(n,f.h(0,l),new Uint8Array(A.bc(B.e.v(q+l+"\x00"+e))),m))}k.j(0,"extra",A.F2(a,f))
k.j(0,"archived",b?1:0)
k.j(0,"hidden",0)
return k},
F2(a,b){var s,r,q,p=a.gev(),o=A.t(t.N,t.X)
for(s=b.ga3(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||p.E(0,q))continue
o.j(0,q,r.b)}return o.a===0?"":A.al(o)},
Py(a,b){var s,r,q,p,o
if(a.length===0)return a
s=null
try{s=B.h.aF(a,null)}catch(r){if(t.Y.b(A.A(r)))return a
else throw r}if(!t.f.b(s))return a
q=A.bm(s,t.N,t.X)
p=q.a
q.y4(0,new A.Dy(b))
o=q.a
if(o===p)return a
return o===0?"":A.al(q)},
D0(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.EK(b,c,new Uint8Array(A.bc(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
O1(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.EK(n,g.h(0,l),new Uint8Array(A.bc(B.e.v(q+l+"\x00"+f))),m))}a.push(A.F2(b,g))
a.push(c?1:0)
a.push(0)},
bJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j="archived",i=t.N,h=t.X,g=A.t(i,h),f=b.h(0,"extra")
if(typeof f=="string"&&f.length!==0){s=B.h.aF(f,null)
if(t.f.b(s))for(i=A.bm(s,i,h),i=new A.aK(i,A.n(i).i("aK<1,2>")).gt(0);i.k();){r=i.d
h=r.a
if(B.aI.E(0,h))continue
g.j(0,h,r.b)}}g.j(0,"id",b.h(0,"id"))
for(i=a.c,h=i.length,q=a.a,p=0;p<i.length;i.length===h||(0,A.p)(i),++p){o=i[p]
n=o.a
m=b.h(0,n)
l=A.a0(b.h(0,"id"))
k=A.EJ(o,m,c,d,l==null?"":l,q)
if(k==null&&g.h(0,n)!=null)continue
g.j(0,n,k)}g.j(0,j,J.x(b.h(0,j),1))
return g},
OI(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.E(b);s.k();)r.push(A.bJ(a,s.gn(),c,d))
return r},
OJ(a,b,c,d,e){var s,r,q,p,o,n,m=A.l([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.p)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a_(p,a.ey(p)))}s=A.l([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.MT(o.gn(),m,r,c,e,n))
return s},
MT(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a0(a.h(0,"id"))
l.j(0,p,A.EJ(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
EJ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=null,k=' row: encrypted field "'
if(b==null)return l
if(a.e){if(c==null)p=l
else p=c
s=p
if(s==null)throw A.b(A.B('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.cY("Corrupt "+f+k+a.a+'" must be TEXT ciphertext but is '+J.c9(b).m(0)+"."))
r=null
try{r=B.o.fq(s.vc(B.af.v(b),new Uint8Array(A.bc(B.e.v(f+"\x00"+a.a+"\x00"+e)))))}catch(o){q=A.A(o)
n=A.cY("Corrupt "+f+k+a.a+'" failed to decrypt ('+A.r(q)+").")
throw A.b(n)}m=a.b
A:{if(B.B===m){n=J.x(r,"1")||J.x(r,"true")
break A}if(B.X===m||B.Z===m){n=A.aN(r)
break A}if(B.Y===m){n=A.OP(r)
break A}if(B.a_===m||B.a0===m){n=B.h.aF(r,l)
break A}n=r
break A}return n}n=a.b
if(n===B.B)return J.x(b,1)
if(n===B.a_||n===B.a0){if(typeof b!="string")throw A.b(A.cY("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c9(b).m(0)+"."))
return B.h.aF(b,l)}return b},
EK(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.B('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.Y(b)
break
case 6:case 7:s=A.al(b)
break
default:A.H(b)
s=b}r=d.vW(B.e.v(s),c)
return B.R.gdC().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.al(b)
default:return b}},
bp(a,b){var s,r,q,p,o,n="archived",m=a.gev(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.p)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga3(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.E(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
CN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gev(),i=A.l([],t.iE)
i.push(new A.a_("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a_(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga3(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.E(0,o))continue
i.push(new A.a_(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dK)
B.b.cJ(i,new A.CO())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.p)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a9(r.a,null)
a.a+=k
o=A.Fa(k)
a.a+=":"
m=m+o+1+A.cr(a,r.b)}a.a+="}"
return m+1},
dg:function dg(a,b){this.a=a
this.b=b},
Dy:function Dy(a){this.a=a},
CO:function CO(){},
Kw(a){var s=A.dr(null,null,t.fq),r=t.N
s=new A.uo(a,s,A.t(r,t.g8),A.t(r,t.dz),new A.tw(A.OW(),A.t(r,t.f6)),A.t(r,t.oX))
s.pz(a,B.ck)
return s},
Dl(a){var s,r,q,p
A:{if(a instanceof A.jb){s=A.NB(a.a)
break A}if(a instanceof A.jy){s=new A.cg(A.Dl(a.a))
break A}if(a instanceof A.iv){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.Dl(r[p]))
s=new A.dF(s)
break A}if(a instanceof A.iw){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.push(A.Dl(r[p]))
s=new A.db(s)
break A}throw A.b(A.e1(u.P))}return s},
NB(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
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
Bh:function Bh(a){this.a=a},
pG:function pG(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=null
_.w=$
_.x=e},
i2:function i2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
uo:function uo(a,b,c,d,e,f){var _=this
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
uS:function uS(a){this.a=a},
uT:function uT(){},
uU:function uU(a,b){this.a=a
this.b=b},
uV:function uV(){},
v5:function v5(a,b){this.a=a
this.b=b},
vg:function vg(){},
vi:function vi(a,b){this.a=a
this.b=b},
vj:function vj(a,b){this.a=a
this.b=b},
vk:function vk(a,b){this.a=a
this.b=b},
vl:function vl(a,b){this.a=a
this.b=b},
vm:function vm(a,b){this.a=a
this.b=b},
vn:function vn(a,b){this.a=a
this.b=b},
uW:function uW(){},
uX:function uX(){},
uY:function uY(){},
uZ:function uZ(){},
v_:function v_(){},
v0:function v0(){},
v1:function v1(){},
v2:function v2(a){this.a=a},
v3:function v3(a){this.a=a},
v4:function v4(){},
v6:function v6(){},
v7:function v7(){},
v8:function v8(a){this.a=a},
v9:function v9(){},
va:function va(){},
vb:function vb(){},
vc:function vc(){},
vd:function vd(){},
ve:function ve(a){this.a=a},
vf:function vf(a){this.a=a},
vh:function vh(a,b){this.a=a
this.b=b},
uD:function uD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uE:function uE(){},
uF:function uF(a,b,c){this.a=a
this.b=b
this.c=c},
uG:function uG(){},
uJ:function uJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uK:function uK(){},
ur:function ur(a){this.a=a},
up:function up(a,b,c){this.a=a
this.b=b
this.c=c},
uq:function uq(a){this.a=a},
uI:function uI(a){this.a=a},
uH:function uH(a){this.a=a},
uO:function uO(a,b){this.a=a
this.b=b},
uP:function uP(a,b,c){this.a=a
this.b=b
this.c=c},
uQ:function uQ(a,b){this.a=a
this.b=b},
uR:function uR(a,b,c){this.a=a
this.b=b
this.c=c},
uy:function uy(a){this.a=a},
uz:function uz(a){this.a=a},
uA:function uA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uC:function uC(a,b){this.a=a
this.b=b},
uB:function uB(a,b){this.a=a
this.b=b},
uu:function uu(a){this.a=a},
us:function us(){},
ut:function ut(){},
uL:function uL(a){this.a=a},
uM:function uM(a){this.a=a},
uN:function uN(a,b){this.a=a
this.b=b},
ux:function ux(a,b){this.a=a
this.b=b},
uv:function uv(){},
uw:function uw(){},
FI(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
lN:function lN(a,b){this.a=a
this.b=b},
iN:function iN(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.d=!1
_.f=_.e=null},
td:function td(){},
tc:function tc(){},
te:function te(){},
tb:function tb(a){this.a=a},
K3(a){return'"'+A.C(a,'"','""')+'"'},
K2(a,b){var s,r,q,p=a.a,o=J.J(p),n=b.a,m=J.J(n)
if(o.gl(p)>=m.gl(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gl(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
r2:function r2(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iM:function iM(a){this.a=a},
ta:function ta(a){this.a=a},
t9:function t9(){},
t8:function t8(a){this.a=a},
t7:function t7(a,b){this.a=a
this.b=b},
t4:function t4(a){this.a=a},
t5:function t5(a){this.a=a},
t6:function t6(){},
G(a,b){return new A.e9(b,a)},
cY(a){return new A.dq(a)},
jN(a){return new A.jM(a)},
Gl(a){return new A.jR(a)},
aB(a){return new A.hn(a)},
tE(a){return new A.iY(a)},
Ei(a){return new A.jY(a)},
G5(a){return new A.ji(a)},
FE(a){return new A.iI(a)},
DN(a){return new A.fL(a)},
II(a,b){var s,r="UNIQUE constraint failed",q=J.Y(a),p=a instanceof A.cj,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.E(q,"PRIMARY KEY")&&!B.a.E(q,r)
else p=!0
if(p)return new A.jG("PRIMARY KEY constraint violated.")
if(o===2067||B.a.E(q,r)){s=A.Hu(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.hE(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.E(q,"NOT NULL constraint failed")){p=A.Hu(q,"NOT NULL constraint failed:")
return new A.h8(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.E(q,"CHECK constraint failed")||o===275||n===275)return new A.iG("CHECK constraint violated.")
if(B.a.E(q,"FOREIGN KEY")||o===787||n===787)return new A.iX("FOREIGN KEY constraint violated.")
if(B.a.E(q,"database or disk is full"))return new A.dq("Database full: "+A.r(a))
return new A.dq("SQLite error: "+A.r(a))},
Hu(a,b){var s,r,q,p,o,n,m=B.a.cc(a,b)
if(m<0)return"?"
s=B.a.ac(a,m+b.length)
r=s.length
q=B.a.cc(s,",")
if(q>=0)r=q
p=B.a.cc(s,"(")
s=B.a.cg(B.a.B(s,0,p>=0&&p<r?p:r))
o=B.a.d6(s,".")
s=B.a.cg(o>=0?B.a.ac(s,o+1):s)
if(B.a.T(s,'"')&&B.a.cb(s,'"')){n=B.a.B(s,1,s.length-1)
s=A.C(n,'""','"')}return s.length===0?"?":s},
dV:function dV(){},
e9:function e9(a,b){this.b=a
this.a=b},
hE:function hE(a,b,c){this.b=a
this.c=b
this.a=c},
h8:function h8(a,b){this.b=a
this.a=b},
iG:function iG(a){this.a=a},
jG:function jG(a){this.a=a},
iX:function iX(a){this.a=a},
dq:function dq(a){this.a=a},
jO:function jO(a){this.a=a},
jM:function jM(a){this.a=a},
jR:function jR(a){this.a=a},
hn:function hn(a){this.a=a},
k3:function k3(a){this.a=a},
iY:function iY(a){this.a=a},
jY:function jY(a){this.a=a},
ji:function ji(a){this.a=a},
iI:function iI(a){this.a=a},
fL:function fL(a){this.a=a},
jL:function jL(a){this.a=a},
iR:function iR(a){this.b=a},
FM(a){return A.q3("lp_file_refs",new A.ti(a))},
bu:function bu(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.Q=l},
ti:function ti(a){this.a=a},
vx:function vx(a,b){this.a=a
this.b=b},
vy:function vy(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
vA:function vA(a){this.a=a},
vB:function vB(a){this.a=a},
vC:function vC(a){this.a=a},
vD:function vD(a){this.a=a},
vE:function vE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vz:function vz(a,b){this.a=a
this.b=b},
NY(){return new A.aI(Date.now(),0,!1)},
cQ:function cQ(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=0
_.z=j
_.Q=k},
tw:function tw(a,b){this.f=a
this.r=b},
tz:function tz(){},
tx:function tx(a){this.a=a},
ty:function ty(){},
mn:function mn(a){this.b=0
this.c=a
this.d=$},
HI(a,b){if(t.f.b(a))return a.aR(0,new A.Cz(),t.N,t.X)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
xh:function xh(a){this.a=a
this.b=0},
Cz:function Cz(){},
lD(a){var s=$.Fc()
if(!s.b.test(a))throw A.b(A.U('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
Fw(a){return new A.ew(a)},
iA(a,b){return new A.fC(a,b)},
l7(a,b,c,d,e,f){return A.Pn(a,b,c,d,e,f)},
Pn(a,b,c,a0,a1,a2){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d
var $async$l7=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=t.i5
f=A.l([],g)
e=new A.hO(A.d6(new A.pz(new A.Dm(f),A.l([],g),t.mI)))
d=0
g=new A.c5(A.cq(a,"stream",t.K),t.lj)
p=3
k=t.D
case 6:s=8
return A.a(g.k(),$async$l7)
case 8:if(!a4){s=7
break}m=g.gn()
j=a2.$1(m)
if(!(j instanceof A.w)){i=new A.w($.D,k)
i.a=8
i.c=j
j=i}s=9
return A.a(j,$async$l7)
case 9:e.a.u(0,m)
d+=J.ag(m)
l=a1
if(l!=null&&d>l){k=A.B("Blob exceeds the "+A.r(l)+" byte ceiling (streamed "+A.r(d)+" bytes).")
throw A.b(k)}s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(g.A(),$async$l7)
case 10:s=n.pop()
break
case 5:e.a.q()
if(c!=null&&!J.x(d,c))throw A.b(A.B("Size mismatch: expected "+A.r(c)+" but got "+A.r(d)))
h=A.at(B.b.gap(f).a)
A.lD(h)
if(b!=null&&h!==b)throw A.b(A.B("SHA-256 mismatch: expected "+b+" but got "+h))
q=new A.nV(h)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$l7,r)},
qu:function qu(){},
ew:function ew(a){this.a=a},
fC:function fC(a,b){this.a=a
this.b=b},
nV:function nV(a){this.a=a},
Dm:function Dm(a){this.a=a},
iU:function iU(a){this.d=a},
tj:function tj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(a,b,c){this.a=a
this.b=b
this.c=c},
tk:function tk(a,b,c){this.a=a
this.b=b
this.c=c},
tn:function tn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
to:function to(a){this.a=a},
tp:function tp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tq:function tq(){},
tr:function tr(a){this.a=a},
ts:function ts(a){this.a=a},
tt:function tt(a){this.a=a},
tu:function tu(){},
Pq(a,b,c){a.v2(!0,new A.Ds(c),"lp_norm_"+b)},
F3(a,b,c,d){var s,r='"'+A.C(d,'"','""')+'"',q=b.a
if(q.gG(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.C(c,'"','""')+'".'+r
return'"'+A.C("lp_norm_"+a,'"','""')+'"('+s+")"},
Ds:function Ds(a){this.a=a},
vo:function vo(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ax=l
_.ay=m},
N0(){return Date.now()},
pU(a){var s,r,q
if(t.G.b(a)){s=A.t(t.N,t.X)
for(r=a.ga3(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pU(q.b))}return s}if(t.f.b(a)){s=A.t(t.z,t.X)
for(r=a.ga3(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.pU(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.pU(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.bc(a))
return a},
df(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=null,r=null
return A.Ky(a,b,c,d,e,f,g,h,i,j,k,l,m)},
Ky(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$df=A.c(function(c0,c1){if(c0===1){o.push(c1)
s=p}for(;;)switch(s){case 0:a2=null
a3=null
a4=null
a4=a9
p=4
s=7
return A.a(A.cS(a4,b6),$async$df)
case 7:s=8
return A.a(A.f1(a4,b6),$async$df)
case 8:n=c1
i=0
case 9:if(!(i<3)){s=11
break}m=B.cT[i]
s=12
return A.a(a4.N(m),$async$df)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cU[i]
s=16
return A.a(a4.N(l),$async$df)
case 16:case 14:++i
s=13
break
case 15:h=a4
g=n
f=b4==null?A.Pd():b4
e=a3
d=a2
c=new A.ni()
b=new A.mR(b5,h,g,c,b3,b0,b8,a8,e,a7,b1,d,f,A.t(t.N,t.nv),b2,b9,new A.qG(A.dr(null,null,t.iv),A.dr(null,null,t.oZ)))
a=new A.zD(A.be(null,t.H),c.gxM())
b.z=a
d=b.a=new A.vo(b,h,g,a,c,f,e,a7,b1,d,a8,b2,b9)
b.b=new A.yI(d)
b.c=new A.wb()
b.d=new A.xS()
e=$.DD()
b.dx=new A.wn(b,e)
b.dy=new A.wi(b,e)
b.fr=new A.re(b)
b.fx=new A.vx(b,a7)
b.e=new A.vH(d)
b.f=new A.xZ(d)
d=A.Kw(d)
b.r!==$&&A.dD()
b.r=d
k=b
s=17
return A.a(A.mS(a4,k.db),$async$df)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
g=k.f
g===$&&A.v()
s=21
return A.a(g.b0(j),$async$df)
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
return A.a(a4.q(),$async$df)
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
return A.f($async$df,r)},
cS(a,b){return A.Kx(a,b)},
Kx(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cS=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.bj?2:3
break
case 2:q=5
s=8
return A.a(a.N("PRAGMA journal_mode=WAL"),$async$cS)
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
return A.a(a.N("PRAGMA wal_autocheckpoint=0"),$async$cS)
case 9:s=10
return A.a(a.N("PRAGMA mmap_size=67108864"),$async$cS)
case 10:case 3:s=11
return A.a(a.N("PRAGMA synchronous=NORMAL"),$async$cS)
case 11:s=12
return A.a(a.N("PRAGMA foreign_keys=ON"),$async$cS)
case 12:s=13
return A.a(a.N("PRAGMA busy_timeout=5000"),$async$cS)
case 13:s=14
return A.a(a.N("PRAGMA cache_size=-8000"),$async$cS)
case 14:s=15
return A.a(a.N("PRAGMA temp_store=MEMORY"),$async$cS)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cS,r)},
mS(a,b){var s=0,r=A.h(t.H),q,p
var $async$mS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.bQ("lp_migrations","version = ?",[1]),$async$mS)
case 3:if(p.da(d)){s=1
break}s=4
return A.a(a.aG(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$mS)
case 4:case 1:return A.e(q,r)}})
return A.f($async$mS,r)},
nT:function nT(a,b,c){this.a=a
this.c=b
this.e=c},
x1:function x1(a){this.a=a},
mR:function mR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
pf:function pf(){},
vH:function vH(a){this.a=a},
vK:function vK(a){this.a=a},
vJ:function vJ(a,b){this.a=a
this.b=b},
vI:function vI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vL:function vL(a,b){this.a=a
this.b=b},
h2(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$h2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.x
h=b.x
g=A.a2(h).i("ap<1>")
f=A.O(new A.ap(h,new A.w6(c,b),g),g.i("o.E"))
B.b.cJ(f,new A.w7())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.db,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aB('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jZ()
$.lb()
j.aC()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aY(a,b,m),$async$h2)
case 8:s=6
break
case 7:s=9
return A.a(A.h0(a,b,m),$async$h2)
case 9:case 6:if(j.b==null)j.b=$.nm.$0()
s=10
return A.a(A.h3(i,j.gng(),o,q+l,p,l),$async$h2)
case 10:case 3:f.length===h||(0,A.p)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aB('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$h2)
case 11:return A.e(null,r)}})
return A.f($async$h2,r)},
h3(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$h3=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.bd("SELECT MAX(version) AS m FROM lp_migrations"),$async$h3)
case 2:q=p.fq(h)
if(q==null)q=0
s=3
return A.a(a.aG(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$h3)
case 3:return A.e(null,r)}})
return A.f($async$h3,r)},
h0(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$h0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.x
k=b.a
j=t.U
h=A
g=A
f=J
s=2
return A.a(l.bd("PRAGMA table_info("+('"'+A.C(k,'"','""')+'"')+")"),$async$h0)
case 2:i=h.c0(new g.eb(f.bB(e,new A.w1(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(o=j.length,p<o)){s=5
break}n=j[p]
o=n.a
m=$.Fd()
if(!m.b.test(o))A.u(A.aB('Field "'+o+u.Z))
if(n.c)throw A.b(A.aB('Additive migration on "'+k+'" cannot add a required column "'+o+'" (existing rows would violate NOT NULL).'))
if(i.E(0,o)){s=4
break}m=A.C(k,'"','""')
s=6
return A.a(l.N("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.C(o,'"','""')+'"')+" "+n.glk()),$async$h0)
case 6:i.u(0,o)
case 4:j.length===q||(0,A.p)(j),++p
s=3
break
case 5:s=o!==0?7:8
break
case 7:s=9
return A.a(A.n1(a,b,j),$async$h0)
case 9:case 8:s=c.d!=null?10:11
break
case 10:s=12
return A.a(A.eT(a,b,c),$async$h0)
case 12:case 11:return A.e(null,r)}})
return A.f($async$h0,r)},
n1(b1,b2,b3){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$n1=A.c(function(b4,b5){if(b4===1)return A.d(b5,r)
for(;;)switch(s){case 0:a8=b1.x
a9=t.N
b0=A.aP(a9)
for(q=b3.length,p=0;p<b3.length;b3.length===q||(0,A.p)(b3),++p)b0.u(0,b3[p].a)
q=b1.cx,o=b1.cy,n=t.X,m=t.nw,l=b2.a,k=t.P,j=0
case 2:s=5
return A.a(a8.ab("SELECT rowid, * FROM "+('"'+A.C(l,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[j,1e4]),$async$n1)
case 5:i=b5
h=J.J(i)
if(h.gG(i)){s=4
break}g=A.l([],m)
for(f=h.gt(i),e=j;f.k();e=c){d=f.gn()
c=d.h(0,"rowid")
c.toString
A.ai(c)
b=A.a0(d.h(0,"id"))
if(b==null)b=""
a=A.bJ(b2,d,q,o)
a0=A.t(a9,n)
for(a1=b3.length,p=0;p<b3.length;b3.length===a1||(0,A.p)(b3),++p){a2=b3[p]
a3=a2.a
if(d.h(0,a3)!=null)continue
a4=a.h(0,a3)
if(a4==null)continue
a5=A.D3(a2,a4)
if(a5!=null)throw A.b(A.cY('Cannot promote "'+a3+'" on "'+l+'" record "'+b+'": the value in `extra` does not match the declared '+a2.b.b+" field ("+a5.b+"). Fix the value or remove the `extra` entry before migrating."))
a0.j(0,a3,A.D0(b2,a2,a4,q,o,b))}a6=d.h(0,"extra")
if(typeof a6=="string"){a7=A.Py(a6,b0)
if(a7!==a6)a0.j(0,"extra",a7)}if(a0.a!==0)g.push(new A.a_(c,a0))}s=g.length!==0?6:7
break
case 6:s=8
return A.a(a8.a_(new A.w4(g,b2),k),$async$n1)
case 8:case 7:if(h.gl(i)<1e4){s=4
break}case 3:j=e
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$n1,r)},
eT(a4,a5,a6){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eT=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a=a4.x
a0=a5.a
a1="migration:"+a0+":"+a6.a+":cursor"
s=2
return A.a(A.n0(a,a1),$async$eT)
case 2:a2=a8
a3=A.hc(a2==null?"":a2,null)
if(a3==null)a3=0
q=t.af,p=t.b3,o=a4.cx,n=a4.cy,m=a6.d,l=t.kW,k=t.P
case 3:j={}
s=5
return A.a(a.ab("SELECT rowid, * FROM "+('"'+A.C(a0,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[a3,1e4]),$async$eT)
case 5:i=a8
h=J.J(i)
if(h.gG(i)){s=4
break}g=A.l([],l)
j.a=a3
f=h.gt(i)
case 6:if(!f.k()){s=7
break}e=f.gn()
d=e.h(0,"rowid")
d.toString
j.a=A.ai(d)
c=A.bJ(a5,e,o,n)
e=m.$1(c)
if(!p.b(e)){d=new A.w($.D,q)
d.a=8
d.c=e
e=d}s=8
return A.a(e,$async$eT)
case 8:b=a8
if(b.gS(b)){e=j.a
d=A.a0(c.h(0,"id"))
g.push(new A.ej(e,d==null?"":d,b))}s=6
break
case 7:s=g.length!==0?9:11
break
case 9:s=12
return A.a(a.a_(new A.w2(j,g,a5,a4,a1),k),$async$eT)
case 12:s=10
break
case 11:s=13
return A.a(A.h1(a,a1,B.c.m(j.a)),$async$eT)
case 13:case 10:if(h.gl(i)<1e4){s=4
break}a3=j.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$eT,r)},
aY(a,b,c){return A.KJ(a,b,c)},
KJ(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aY=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.x
if(!b0.at)throw A.b(A.DN('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.iM(b0.y).kq(b1)
j=A.KL(b0.w,a2,a3)
p=4
s=7
return A.a(A.n0(a7,l),$async$aY)
case 7:i=b4
a3=b0.f
a3===$&&A.v()
s=8
return A.a(a3.i6(j),$async$aY)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.DN('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.n2(a7,m),$async$aY)
case 9:g=b4
s=10
return A.a(A.n2(a7,n),$async$aY)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.bd("SELECT COUNT(*) c FROM "+('"'+A.C(m,'"','""')+'"')),$async$aY)
case 13:a0=a9.fq(b4)
e=a0==null?0:a0
a3=A.C(m,'"','""')
s=14
return A.a(a7.N("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.C(n,'"','""')+'"')),$async$aY)
case 14:s=15
return A.a(A.cT(b0,a7,b1,k,l,e),$async$aY)
case 15:s=1
break
case 12:s=16
return A.a(a7.N("DROP TABLE IF EXISTS "+('"'+A.C(m,'"','""')+'"')),$async$aY)
case 16:s=h?17:18
break
case 17:s=19
return A.a(a3.ie(j),$async$aY)
case 19:case 18:s=20
return A.a(A.h1(a7,l,"rebuilding"),$async$aY)
case 20:s=21
return A.a(a7.N("VACUUM INTO '"+A.C(j,"'","''")+"'"),$async$aY)
case 21:a3=k.b
a4=A.C(n,'"','""')
d=B.a.l0(a3,'"'+a4+'"','"'+A.C(m,'"','""')+'"')
s=22
return A.a(a7.N(d),$async$aY)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ab("SELECT rowid, * FROM "+('"'+A.C(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aY)
case 25:b=b4
if(J.bs(b)){s=24
break}s=26
return A.a(a7.a_(new A.w5(b,b1,b0,b2,m),a3),$async$aY)
case 26:a4=J.Q(J.qb(b),"rowid")
a4.toString
c=A.ai(a4)
if(J.ag(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.bd("SELECT COUNT(*) c FROM "+('"'+A.C(n,'"','""')+'"')),$async$aY)
case 27:a5=a9.fq(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.bd("SELECT COUNT(*) c FROM "+('"'+A.C(m,'"','""')+'"')),$async$aY)
case 28:e=a9.fq(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.B('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.N("DROP TABLE "+('"'+A.C(n,'"','""')+'"')),$async$aY)
case 29:a3=A.C(m,'"','""')
s=30
return A.a(a7.N("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.C(n,'"','""')+'"')),$async$aY)
case 30:s=31
return A.a(A.cT(b0,a7,b1,k,l,a),$async$aY)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.A(a8)
if(a3 instanceof A.fL)throw a8
else if(a3 instanceof A.cj){a1=a3
throw A.b(A.DN('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aY,r)},
cT(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h
var $async$cT=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.N(q[o]),$async$cT)
case 5:case 3:q.length===p||(0,A.p)(q),++o
s=2
break
case 4:q=c.w
p=q!=null
s=p?6:7
break
case 6:s=8
return A.a(b.N("DROP TABLE IF EXISTS "+('"'+A.C(c.a+"_fts",'"','""')+'"')),$async$cT)
case 8:case 7:n=d.d,m=n.length,o=0
case 9:if(!(o<n.length)){s=11
break}s=12
return A.a(b.N(n[o]),$async$cT)
case 12:case 10:n.length===m||(0,A.p)(n),++o
s=9
break
case 11:s=p?13:14
break
case 13:p=c.a
n=p+"_fts"
m=A.C(n,'"','""')
s=15
return A.a(b.N("INSERT INTO "+('"'+m+'"')+"("+('"'+A.C(n,'"','""')+'"')+") VALUES('delete-all')"),$async$cT)
case 15:m=q.a
l=m.$ti.i("Z<M.E,j>")
k=new A.Z(m,A.q2(),l).C(0,", ")
j=new A.Z(m,new A.w3(c,q),l).C(0,", ")
q=A.C(n,'"','""')
s=16
return A.a(b.N("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.C(p,'"','""')+'"')),$async$cT)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.bd("SELECT COUNT(*) c FROM "+('"'+A.C(q,'"','""')+'"')),$async$cT)
case 17:i=h.fq(a0)
if((i==null?0:i)!==f)throw A.b(A.B('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.h1(b,e,"done"),$async$cT)
case 18:return A.e(null,r)}})
return A.f($async$cT,r)},
n2(a,b){var s=0,r=A.h(t.y),q,p
var $async$n2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ab("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$n2)
case 3:q=p.da(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n2,r)},
KL(a,b,c){var s=null,r=$.iu(),q=r.vk(a),p=A.e_(a,r.a).gkm()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.nw(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
KH(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===b)return p}return null},
G4(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.G('Field "'+s+'" is required.',s))}if(b==null)return
r=A.D3(a,b)
if(r!=null)throw A.b(A.G(A.KI(a,b,r),a.a))},
KK(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
A.G4(p,b.h(0,p.a))}},
KI(a,b,c){var s,r=a.a,q=J.c9(b)
switch(c.a){case 0:s='Field "'+r+'" must be a string, got '+q.m(0)+"."
break
case 1:s='Field "'+r+'" must be an integer, got '+q.m(0)+"."
break
case 2:s='Field "'+r+'" must be a number, got '+q.m(0)+"."
break
case 3:s='Field "'+r+'" must be a boolean, got '+q.m(0)+"."
break
case 4:s='Field "'+r+'" must be JSON, got '+q.m(0)+"."
break
case 5:s='Field "'+r+'" must be a JSON array, got '+q.m(0)+"."
break
case 6:s='Field "'+r+'" has unknown enum value "'+A.r(b)+'".'
break
default:s=null}return s},
n0(a,b){var s=0,r=A.h(t.jv),q,p,o
var $async$n0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.nL("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$n0)
case 3:p=d
o=J.J(p)
q=o.gG(p)?null:A.a0(J.Q(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n0,r)},
h1(a,b,c){var s=0,r=A.h(t.H)
var $async$h1=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cz(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.V),$async$h1)
case 2:return A.e(null,r)}})
return A.f($async$h1,r)},
N1(){return Date.now()},
w6:function w6(a,b){this.a=a
this.b=b},
w7:function w7(){},
w1:function w1(){},
w4:function w4(a,b){this.a=a
this.b=b},
w2:function w2(a,b,c,d,e){var _=this
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
w3:function w3(a,b){this.a=a
this.b=b},
wb:function wb(){},
br(a){var s=A.t(t.N,t.X)
a.a5(0,new A.Dx(s))
return s},
L3(a,b,c,d){return new A.jI(new A.xf(c,b,d,a))},
OT(a,b){var s=a.e,r=s.a
if(!(r!=null&&A.HW(r)==null))if(!s.b.gaU().bq(0,A.Pj()))if(a.z==null){r=a.y
if(!r.gS(r))B.b.bq(a.x,new A.D1())}return!0},
NL(a){return a!=null&&A.HW(a)==null},
HW(a){var s,r,q=A.d9(a)
if(q===B.ef)return B.dg
if(q===B.ed)return B.di
if(q===B.el)return B.de
if(q===B.e2)return B.dh
if(q===B.e3){t.ko.a(a)
return B.df}if(q===B.e6){t.d_.a(a)
s=A.t(t.N,t.X)
s.j(0,"kind","counter")
r=a.a
if(r!=null)s.j(0,"min",r)
r=a.b
if(r!=null)s.j(0,"max",r)
return s}return null},
I6(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(b==null)return a
if(!t.f.b(b))throw A.b(A.G('Store policy for "'+a.a+'" must be a map.',null))
s=A.br(b)
r=s.h(0,"conflictPolicy")
q=r==null?a.e:A.MX(r,a.a,c)
p=a.a
o=A.MY(s.h(0,"validator"),p,c)
n=A.MU(s.h(0,"documentMigrations"),a,c)
m=A.MV(s.h(0,"migrationTransforms"),a,c)
if(q===a.e&&o==null&&n.gG(n)&&m==null)return a
l=m==null?a.x:m
k=n.gG(n)?a.y:n
j=o==null?a.z:o
return new A.ca(p,a.b,a.c,a.d,q,a.f,a.r,a.w,l,k,j,a.Q,t.bU)},
MX(a,b,c){var s,r,q=A.Cy(a,'conflictPolicy of "'+b+'"'),p=q.h(0,"collectionResolver"),o=q.h(0,"fieldOverrides"),n=A.t(t.N,t.pb)
if(o!=null)A.Cy(o,'fieldOverrides of "'+b+'"').a5(0,new A.Cp(n,b,c))
s=p==null?null:A.Hq(p,null,c,"record",'collectionResolver of "'+b+'"')
r=J.x(q.h(0,"editsUnarchive"),!0)
return new A.lQ(s,n,r,typeof q.h(0,"missingRemote")=="string"?B.b.cv(B.cM,new A.Cq(q),new A.Cr(b,q)):B.aE)},
Hq(a,b,c,d,e){var s,r,q,p=" must be a number.",o=A.Cy(a,e),n=A.HJ(o.h(0,"kind"),e,"kind")
switch(n){case"remoteWins":return B.T
case"localWins":return B.bZ
case"setUnionDeletionWins":return B.c2
case"appendOnlyLines":return B.bK
case"appendOnlyList":return B.bL
case"counter":s=o.h(0,"min")
r=o.h(0,"max")
if(s!=null&&typeof s!="number")throw A.b(A.G('"min" at '+e+p,null))
if(r!=null&&typeof r!="number")throw A.b(A.G('"max" at '+e+p,null))
return new A.eE(A.Cb(s),A.Cb(r))
case"custom":q=A.HJ(o.h(0,"id"),e,"id")
return A.L3(b,q,c,d)
default:throw A.b(A.G('Unknown resolver kind "'+n+'" at '+e+".",null))}},
MY(a,b,c){if(a==null)return null
if(!A.aV(a)||!a)throw A.b(A.G('"validator" of "'+b+'" must be true when present.',null))
return new A.Cs(c,b)},
MU(a,b,c){var s,r,q,p,o
if(a==null)return B.be
s=A.HH(a,'documentMigrations of "'+b.a+'"')
r=A.t(t.S,t.mi)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p){o=s[p]
r.j(0,o,new A.Cm(c,b,o))}return r},
MV(a,b,c){var s,r,q,p,o,n,m,l
if(a==null)return null
s=A.HH(a,'migrationTransforms of "'+b.a+'"')
r=A.t(t.S,t.y)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.j(0,s[p],!0)
q=A.l([],t.c0)
for(o=b.x,n=o.length,p=0;p<o.length;o.length===n||(0,A.p)(o),++p){m=o[p]
l=m.a
q.push(r.I(l)?new A.c3(l,m.b,m.c,new A.Cn(c,b,m)):m)}return q},
Cy(a,b){if(t.f.b(a))return A.br(a)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
EP(a,b,c){if(t.f.b(a))return A.br(a)
throw A.b(A.G('"'+c+'" at '+b+" must be a map.",null))},
HJ(a,b,c){if(typeof a=="string")return a
throw A.b(A.G('"'+c+'" at '+b+" must be a string.",null))},
NK(a,b,c){var s,r,q,p
if(!t.j.b(a))throw A.b(A.G('"'+c+'" at '+b+" must be a list.",null))
s=A.l([],t.s)
for(r=J.E(a),q='"'+c+'" at '+b+" must contain only strings.";r.k();){p=r.gn()
if(typeof p=="string")s.push(p)
else s.push(A.u(A.G(q,null)))}return s},
HH(a,b){var s,r,q,p
if(!t.j.b(a))throw A.b(A.G("The value at "+b+" must be a list.",null))
s=A.l([],t.t)
for(r=J.E(a),q="The value at "+b+" must contain only ints.";r.k();){p=r.gn()
if(A.a6(p))s.push(p)
else s.push(A.u(A.G(q,null)))}return s},
Dx:function Dx(a){this.a=a},
Dw:function Dw(){},
jI:function jI(a){this.a=a},
xf:function xf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D1:function D1(){},
Cp:function Cp(a,b,c){this.a=a
this.b=b
this.c=c},
Cq:function Cq(a){this.a=a},
Cr:function Cr(a,b){this.a=a
this.b=b},
Cs:function Cs(a,b){this.a=a
this.b=b},
Cm:function Cm(a,b,c){this.a=a
this.b=b
this.c=c},
Cn:function Cn(a,b,c){this.a=a
this.b=b
this.c=c},
ni:function ni(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
vp:function vp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
BL:function BL(){},
xI:function xI(a,b){this.a=a
this.b=b},
l3(a){var s=A.C(a,"\\","\\\\")
s=A.C(s,"%","\\%")
return A.C(s,"_","\\_")},
EI(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.am){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.u(A.aD(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aD(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aD(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.aD(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.cg){A.EI(a.a)
break A}p=a instanceof A.dF
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.db
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aD(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.p)(n),++m)A.EI(n[m])}break A}},
Cj(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.am)return A.Ho(a,!1,b)
if(a instanceof A.cg){s=a.a
r=A.Cj(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.db||s instanceof A.cg){s=new A.a_("NOT "+q,p)
break A}s=new A.a_("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dF){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){l=A.Cj(s[m],!1)
o.push(l.a)
B.b.D(p,l.b)}k=B.b.C(o," AND ")
return new A.a_(b?k:"("+k+")",p)}if(a instanceof A.db){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.p)(s),++m){j=A.MR(s[m])
o.push(j.a)
B.b.D(p,j.b)}return new A.a_("("+B.b.C(o," OR ")+")",p)}throw A.b(A.e1(u.M))},
MR(a){var s
A:{if(a instanceof A.am){s=A.Ho(a,!0,!1)
break A}s=A.Cj(a,!1)
break A}return s},
Ho(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.C(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
n[0]=A.l3(A.H(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.l3(A.H(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.l3(A.H(r))+"%"
break
default:throw A.b(A.aD(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a_(q?"("+s+")":s,n)},
dk:function dk(){},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a){this.a=a},
dF:function dF(a){this.a=a},
db:function db(a){this.a=a},
L4(a,b){var s,r=$.hh.F(0,a)
if(r!=null){$.hh.j(0,a,r)
return r}s=b.$0()
if($.hh.a>=512)$.hh.F(0,new A.T($.hh,A.n($.hh).i("T<1>")).gH(0))
$.hh.j(0,a,s)
return s},
ba:function ba(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
nq:function nq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
xF:function xF(a,b,c){this.a=a
this.b=b
this.c=c},
xA:function xA(){},
xB:function xB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xC:function xC(a){this.a=a},
xD:function xD(){},
xE:function xE(){},
Lf(a){var s,r,q=B.a.cg(a)
if(q.length===0)return
s=!0
if(!B.a.E(q,'"')){r=A.ak("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.T(q,"-")){s=A.ak("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.G("Invalid search term: "+a,null))},
Le(a){var s,r,q,p
for(s=B.a.dh(a,A.ak("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
if(p.length!==0&&new A.jP(p).gl(0)<3)throw A.b(A.G('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cW:function cW(a,b){this.a=a
this.b=b},
y0:function y0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xS:function xS(){},
kY(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.A(q)
if(r instanceof A.dV)throw q
else{s=r
r=A.cY("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
FL(a){return A.kY(new A.th(a))},
Kp(a){return A.kY(new A.ua(a))},
Kg(a){return A.kY(new A.tD(a))},
FQ(a,b){var s
if(new A.jP(a).gl(0)!==1)throw A.b(A.aB('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aB('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Kf(a){return A.kY(new A.tC(a))},
Ke(a,b){var s,r
if(a.gl(a)!==b.gl(b))return!1
for(s=a.ga3(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Lo(a){return A.kY(new A.yg(a))},
qM(a,b){return A.kY(new A.qN(a,b))},
CJ(a,b,c,d){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i
var $async$CJ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=c+1,o=a.y,n=t.af,m=t.b3,l=b
case 3:if(!(p<=d)){s=5
break}k=o.h(0,p)
s=k!=null?6:7
break
case 6:j=k.$1(l)
if(!m.b(j)){i=new A.w($.D,n)
i.a=8
i.c=j
j=i}s=8
return A.a(j,$async$CJ)
case 8:l=f
case 7:case 4:++p
s=3
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$CJ,r)},
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
th:function th(a){this.a=a},
j2:function j2(a,b){this.a=a
this.b=b},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
ua:function ua(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
tD:function tD(a){this.a=a},
eK:function eK(a){this.a=a},
tC:function tC(a){this.a=a},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yg:function yg(a){this.a=a},
dW:function dW(a,b){this.a=a
this.b=b},
lQ:function lQ(a,b,c,d){var _=this
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
qN:function qN(a,b){this.a=a
this.b=b},
Ef(a){var s,r=A.MS(a),q=A.l([],t.s),p=a.e
if(p.a!=null)q.push("conflictResolver")
s=p.b
if(s.gS(s))q.push("fieldResolvers")
if(B.b.bq(a.x,new A.xV()))q.push("migrationTransform")
s=a.y
if(s.gS(s))q.push("documentMigrations")
if(a.z!=null)q.push("validatorCallback")
return new A.nE(r,A.fY(q,t.N),1,a.a,a.b,2)},
Ld(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aB("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aR(0,new A.xW(),s,r)
p=q.h(0,"formatVersion")
if(!A.a6(p))throw A.b(A.aB("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.Gl("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.a6(n)||!j.b(m)||!t.j.b(l)||!A.a6(k))throw A.b(A.aB('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.nE(m.aR(0,new A.xX(),s,t.X),A.fY(J.bB(l,new A.xY(),r),s),p,o,n,k)},
MS(a){var s,r,q,p,o,n,m=a.e,l=t.N,k=t.X,j=A.bP(a.p(),l,k),i=m.b.gJ()
i=A.O(i,A.n(i).i("o.E"))
B.b.aj(i)
j.j(0,"conflictPolicy",A.m(["editsUnarchive",m.c,"missingRemote",m.d.b,"hasCollectionResolver",m.a!=null,"fieldOverrideNames",i],l,t.K))
i=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.p()
n=A.dU(null,null,l,k)
n.D(0,o)
n.j(0,"hasTransform",p.d!=null)
i.push(n)}j.j(0,"migrations",i)
l=a.y.gJ()
l=A.O(l,A.n(l).i("o.E"))
B.b.aj(l)
j.j(0,"documentMigrationVersions",l)
j.j(0,"hasValidatorCallback",a.z!=null)
return j},
nE:function nE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xV:function xV(){},
xW:function xW(){},
xX:function xX(){},
xY:function xY(){},
xZ:function xZ(a){this.a=a},
y_:function y_(a,b){this.a=a
this.b=b},
JS(a,b){var s,r=a.a
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
dY:function dY(a,b){this.a=a
this.b=b},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qZ:function qZ(a,b){this.a=a
this.b=b},
r1:function r1(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
qU:function qU(a,b){this.a=a
this.b=b},
qR:function qR(a,b){this.a=a
this.b=b},
r_:function r_(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
qT:function qT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qS:function qS(){},
qX:function qX(){},
qQ:function qQ(){},
qO:function qO(){},
qP:function qP(){},
hN:function hN(){},
oW:function oW(){},
qg:function qg(a){this.a=a},
qh:function qh(a,b){this.a=a
this.b=b},
qi:function qi(a){this.a=a},
qj:function qj(){},
DK(a){return A.q3("lp_conflicts",new A.rd(a))},
bt:function bt(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rj:function rj(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rg:function rg(a,b){this.a=a
this.b=b},
rh:function rh(a,b){this.a=a
this.b=b},
rf:function rf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o_:function o_(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
yD:function yD(a){this.a=a},
yt:function yt(a){this.a=a},
yB:function yB(a,b){this.a=a
this.b=b},
yA:function yA(a){this.a=a},
yz:function yz(a,b){this.a=a
this.b=b},
yC:function yC(a){this.a=a},
yw:function yw(a,b){this.a=a
this.b=b},
yx:function yx(){},
yy:function yy(){},
yu:function yu(){},
yv:function yv(a){this.a=a},
eQ(a){return new A.dh(a)},
F9(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fs(a,b)
r=A.bp(a,s)
q=A.al(r)
p=A.at(B.m.v(B.e.v(q)).a)
return new A.eV(b,s,q,p,k)}catch(m){l=A.A(m)
if(l instanceof A.dh){o=l
return new A.eV(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.eV(b,k,k,k,l)}}},
Pi(a,b){var s,r=A.l([],t.i7)
for(s=J.E(b);s.k();)r.push(A.F9(a,s.gn()))
return r},
F8(a,b){var s=0,r=A.h(t.eT),q
var $async$F8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Pi(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$F8,r)},
fs(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bm(b.d,j,i),g=a.gev(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.eQ('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.aV(r))throw A.b(A.eQ('Field "archived" must be a boolean, got '+J.c9(r).m(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.p)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.eQ('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.D3(o,n)
if(m!=null)throw A.b(A.eQ(A.NG(o,n,m)))
q.j(0,s,n)}for(j=new A.aK(h,A.n(h).i("aK<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.E(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
NG(a,b,c){var s,r=a.a,q=J.c9(b)
switch(c.a){case 0:s='Field "'+r+'" must be a string, got '+q.m(0)+"."
break
case 1:s='Field "'+r+'" must be an integer, got '+q.m(0)+"."
break
case 2:s='Field "'+r+'" must be a number, got '+q.m(0)+"."
break
case 3:s='Field "'+r+'" must be a boolean, got '+q.m(0)+"."
break
case 4:s='Field "'+r+'" must be JSON, got '+q.m(0)+"."
break
case 5:s='Field "'+r+'" must be a JSON array, got '+q.m(0)+"."
break
case 6:s='Field "'+r+'" has unknown enum value "'+A.r(b)+'".'
break
default:s=null}return s},
iq(a){var s,r,q,p
if(a==null||a.length===0)return B.j
s=null
try{s=B.h.aF(a,null)}catch(q){r=A.A(q)
p=A.eQ("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.eQ("Corrupt payload JSON: expected an object, got "+J.c9(s).m(0)+"."))
return A.bm(s,t.N,t.X)},
dh:function dh(a){this.a=a},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bT(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aP(i),g=A.c0(a.gJ(),i)
g.D(0,b.gJ())
for(g=A.eh(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.p.X(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.lg(o.gJ(),new A.CR())&&J.lg(n.gJ(),new A.CS())){m=A.bT(A.bm(o,i,q),A.bm(n,i,q))
for(l=A.n(m),k=new A.eg(m,m.r,l.i("eg<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
Ot(a,b,c){var s,r,q,p,o,n=t.N,m=A.c0(a.gJ(),n)
m.D(0,b.gJ())
m.D(0,new A.T(c,A.n(c).i("T<1>")))
s=A.t(n,t.X)
for(n=A.eh(m,m.r,A.n(m).c),m=n.$ti.c;n.k();){r=n.d
if(r==null)r=m.a(r)
q=a.h(0,r)
p=b.h(0,r)
o=c.h(0,r)
if(B.p.X(p,o))s.j(0,r,p)
else if(B.p.X(p,q))s.j(0,r,o)
else if(B.p.X(o,q))s.j(0,r,p)
else s.j(0,r,o)}return s},
G2(a,b,c,d,e,f,g){return new A.jh(g,e,a,d,f,b,c)},
IA(a,b,c,d,e){var s,r,q,p,o,n
if(e instanceof A.hq)return e.fZ(b,c,d)
if(e instanceof A.eE){s=typeof b=="number"?b:0
r=typeof c=="number"?c:0
q=typeof d=="number"?d:0
p=A.a6(s)&&A.a6(r)&&A.a6(q)
o=s+(r-s)+(q-s)
n=e.a
if(n!=null&&o<n)o=n
n=e.b
if(n!=null&&o>n)o=n
return p?B.w.h3(o):o}if(e instanceof A.eu)return e.fZ(b,c,d)
if(e instanceof A.fA)return e.fZ(b,c,d)
if(e instanceof A.fZ)return c
if(e instanceof A.hk)return d
return d},
NA(a,b){var s,r,q,p=a.b
if(p.gG(p))return null
for(s=b;;){r=p.h(0,s)
if(r!=null)return r
q=B.a.d6(s,".")
if(q<=0)return null
s=B.a.B(s,0,q)}},
E5(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$E5=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.KG(B.cc,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$E5,r)},
KG(a,b,c,d,e,f,g){var s,r,q,p=A.bT(b,c),o=A.bT(b,f),n=A.G2(b,p,o,c,e,f,g),m=p.a!==0&&o.a!==0,l=d.a
if(l!=null&&m){s=new A.w0(b,c,f,p,o)
r=l.am(n)
if(t.op.b(r))return r.U(s,t.r)
return s.$1(r)}l=t.N
s=A.c0(c.gJ(),l)
s.D(0,new A.T(f,A.n(f).i("T<1>")))
s.D(0,b.gJ())
q=A.O(s,A.n(s).c)
return A.vY(a,b,p,o,0,q,c,A.t(l,t.X),d,e,f,new A.Bq(),g)},
vY(a,b,c,d,e,f,g,h,i,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j="archived"
if(e>=f.length){if(i.c)if(!new A.ap(c,new A.vZ(),A.n(c).i("ap<1>")).gG(0)&&J.x(h.h(0,j),!0))h.j(0,j,!1)
return new A.aT(h,a2.a,null)}s=f[e]
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
if(l!=null)h.j(0,s,A.IA(s,p,r,q,l))
else h.j(0,s,m)}return A.vY(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)}k=A.G3(a,p,r,s,i,q,a0,a2,a3)
if(k instanceof A.w)return k.U(new A.w_(h,s,f,e,b,g,a1,i,a3,a0,a,c,d,a2),t.r)
h.j(0,s,k)
return A.vY(a,b,c,d,e+1,f,g,h,i,a0,a1,a2,a3)},
G3(a2,a3,a4,a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(B.p.X(a4,a7))return a4
if(B.p.X(a4,a3))return a7
if(B.p.X(a7,a3))return a4
s=t.f
r=!1
if(s.b(a4))if(s.b(a7))if(J.lg(a4.gJ(),new A.vS()))if(J.lg(a7.gJ(),new A.vT()))if(a3!=null)r=s.b(a3)&&J.lg(a3.gJ(),new A.vU())
else r=!0
if(r){r=t.N
q=t.X
p=A.bm(a4,r,q)
o=A.bm(a7,r,q)
n=a3==null?null:A.bm(s.a(a3),r,q)
s=A.aP(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.D(0,l)
s.D(0,new A.T(p,A.n(p).i("T<1>")))
s.D(0,new A.T(o,A.n(o).i("T<1>")))
k=A.t(r,q)
j=[]
for(r=s.$ti.c,l=A.eh(s,s.r,r),i=a5+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.G3(a2,e,p.h(0,f),i+f,a6,o.h(0,f),a8,a9,b0)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.eh(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.DT(new A.Z(j,new A.vV(),A.a2(j).i("Z<1,y<k?>>")),q).U(new A.vW(s,k),q)}a=A.NA(a6,a5)
if(a!=null){if(a instanceof A.jI){a0=B.a.ac(a5,B.a.d6(a5,".")+1)
s=t.N
r=t.X
q=A.m([a0,a3],s,r)
m=A.m([a0,a4],s,r)
l=A.m([a0,a7],s,r)
a1=a.am(A.G2(q,A.ao([a0],s),A.ao([a0],s),m,a8,l,b0))
if(t.op.b(a1))return a1.U(new A.vX(a9,a7,a0),r)
if(a1==null||a1.b){a9.a=!0
return a7}return a1.a.h(0,a0)}return A.IA(a5,a3,a4,a7,a)}return a7},
Iq(a,b,c,d,e,f){return A.E5(a,b,c,d,e,f)},
CR:function CR(){},
CS:function CS(){},
jh:function jh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(){},
hk:function hk(){},
fZ:function fZ(){},
hq:function hq(){},
eE:function eE(a,b){this.a=a
this.b=b},
eu:function eu(){},
qf:function qf(a){this.a=a},
fA:function fA(){},
qe:function qe(a){this.a=a},
lY:function lY(){},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
Bq:function Bq(){this.a=!1},
Bo:function Bo(){},
zI:function zI(){},
w0:function w0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vZ:function vZ(){},
w_:function w_(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
vS:function vS(){},
vT:function vT(){},
vU:function vU(){},
vV:function vV(){},
vW:function vW(a,b){this.a=a
this.b=b},
vX:function vX(a,b,c){this.a=a
this.b=b
this.c=c},
wi:function wi(a,b){this.a=a
this.b=b},
wk:function wk(a){this.a=a},
wl:function wl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
jK:function jK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wn:function wn(a,b){this.a=a
this.b=b},
wt:function wt(a,b){this.a=a
this.b=b},
wr:function wr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wq:function wq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wp:function wp(a,b,c){this.a=a
this.b=b
this.c=c},
ws:function ws(a){this.a=a},
ev:function ev(a,b){this.a=a
this.b=b},
np:function np(a,b,c){this.b=a
this.c=b
this.f=c},
xj:function xj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xr:function xr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xq:function xq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xl:function xl(a,b,c){this.a=a
this.b=b
this.c=c},
xk:function xk(a,b,c){this.a=a
this.b=b
this.c=c},
xn:function xn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xm:function xm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xp:function xp(a,b,c){this.a=a
this.b=b
this.c=c},
xo:function xo(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xs:function xs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
xu:function xu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xz:function xz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xx:function xx(a,b,c){this.a=a
this.b=b
this.c=c},
xw:function xw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xv:function xv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xt:function xt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xy:function xy(a,b,c,d,e,f,g,h,i,j){var _=this
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
hy:function hy(a,b){this.a=a
this.b=b},
yq:function yq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yr:function yr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gs(a){return new A.dt(a)},
ls(a){return new A.bM(a)},
Kd(a){return new A.ce(a)},
KQ(a){return new A.cf(a)},
KS(a){return new A.dj(a)},
aZ(a){return new A.e0(a)},
K5(a){return new A.dK(a)},
JH(a){return new A.dc(a)},
OY(a){var s=a.yf(),r=new A.D5()
return A.r(r.$2(A.Eb(s),4))+"-"+A.r(r.$1(A.E9(s)))+"-"+A.r(r.$1(A.x6(s)))+" "+A.r(r.$1(A.E7(s)))+":"+A.r(r.$1(A.E8(s)))+":"+A.r(r.$1(A.Ea(s)))+"."+A.r(r.$2(A.Gd(s),3))+"Z"},
Gr(a){var s=Date.now()
return new A.oe(a,new A.aI(s,0,!1))},
b9:function b9(){},
dt:function dt(a){this.a=a},
cX:function cX(a,b){this.b=a
this.a=b},
f_:function f_(a){this.a=a},
bM:function bM(a){this.a=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
dj:function dj(a){this.a=a},
e0:function e0(a){this.a=a},
dK:function dK(a){this.a=a},
hz:function hz(a){this.a=a},
dc:function dc(a){this.a=a},
e3:function e3(a,b){this.b=a
this.a=b},
lu:function lu(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hf:function hf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hg:function hg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cu:function cu(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
D5:function D5(){},
oe:function oe(a,b){this.a=a
this.c=b},
Lr(a){return 0.5+B.av.nD()},
El(a){var s,r=a.toLowerCase()
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
Ls(a){var s,r,q,p,o,n,m,l,k=null,j=A.ak("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ez(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.El(r)
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
return A.Em(r,q,p,o,n,A.aN(s))}j=A.ak("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ez(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.El(r)
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
return A.Em(l,q,r,p,o,A.aN(s))}j=A.ak("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ez(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.El(r)
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
return A.Em(r,q,p,o,n,A.aN(s))}return k},
Em(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.DM(a,b,c,d,e,f,0)
return s}catch(r){return null}},
ys:function ys(a,b){this.at=a
this.ay=b},
ER(a,b){if(t.f.b(a))return a.aR(0,new A.CA(),t.N,t.X)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
HT(a,b){if(typeof a=="string")return a
throw A.b(A.G("The value at "+b+" must be a string.",null))},
MG(a,b){if(A.aV(a))return a
throw A.b(A.G("The value at "+b+" must be a bool.",null))},
xg:function xg(a){this.a=a
this.b=0},
hd:function hd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0
_.r=f
_.w=g},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
xi:function xi(a,b){this.a=a
this.b=b},
CA:function CA(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
yF:function yF(a,b){this.a=a
this.b=b},
I7(a,b,c,d,e,f,g,h,i,j){var s,r=A.Is(a,b,c,null,d,e,f,g,h,i,j),q=A.t(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.a2[s],r[s])
return q},
Is(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.I3(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
I3(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Om(a,b,c,d,e,f,g){var s,r=null,q=A.IF(B.ab,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.t(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.a1[s],q[s])
return p},
IF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.I4(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
I4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
IB(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
ir(a){return new A.Z(a,new A.Dr(),A.a2(a).i("Z<1,j>")).C(0,", ")},
hA(a){return A.q3("lp_sync_row",new A.yE(a))},
jB(a){return A.q3("lp_outbox",new A.wo(a))},
KR(a){return A.q3("lp_op_queue",new A.wj(a))},
l8(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$l8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aP(n)
l=A.O(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.C(A.a9(k,"?",!1,n),", ")
k=a.ab("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$l8)
case 3:j.D(0,i.bB(h.a(d),new A.Dp(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ab("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$l8)
case 4:j.D(0,i.bB(h.a(d),new A.Dq(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$l8,r)},
it(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$it=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eK("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$it)
case 5:s=p.bs(o.a(f))?2:4
break
case 2:q=a.aG(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$it)
case 6:s=3
break
case 4:q=a.aJ("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$it)
case 7:case 3:return A.e(null,r)}})
return A.f($async$it,r)},
CY(a,b){var s=0,r=A.h(t.H),q,p
var $async$CY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aJ(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$CY)
case 3:case 1:return A.e(q,r)}})
return A.f($async$CY,r)},
cM(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cM=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nL("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cM)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.W("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cM)
case 5:o=A.a0(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.CY(a,o),$async$cM)
case 8:case 7:s=3
break
case 4:m=a.W("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cM)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cM)
case 10:s=d?11:12
break
case 11:m=a.W("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cM)
case 13:n=a.W("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cM)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cM,r)},
d_:function d_(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
Dr:function Dr(){},
cZ:function cZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
yE:function yE(a){this.a=a},
cz:function cz(a,b,c,d,e,f,g,h,i,j){var _=this
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
wo:function wo(a){this.a=a},
eW:function eW(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
wj:function wj(a){this.a=a},
Dp:function Dp(){},
Dq:function Dq(){},
If(a,b){if(typeof a=="string")return new Uint8Array(A.bc(B.af.v(a)))
throw A.b(A.G('"'+b+'" must be a base64 string.',null))},
F1(a,b,c){var s,r,q=null,p="pageError",o=A.kZ(a,c),n=o.h(0,"ok")
if(!A.aV(n))throw A.b(A.G('"ok" at '+c+" must be a bool.",q))
if(n)return o.h(0,"result")
s=o.I("error")
if(s===o.I(p))throw A.b(A.G("A failed answer at "+c+' must carry exactly one of "error" (typed error) or "pageError".',q))
if(s)throw A.b(b.$2$where(o.h(0,"error"),c))
r=o.h(0,p)
if(typeof r!="string")throw A.b(A.G('"pageError" at '+c+" must be a string.",q))
throw A.b(A.G("The page-side "+c+" failed: "+r,q))},
OR(a){var s,r,q,p
A:{if(a instanceof A.dt){s=A.m(["kind","transientNetwork","message",a.a],t.N,t.X)
break A}if(a instanceof A.f_){s=A.m(["kind","serverError","message",a.a],t.N,t.X)
break A}if(a instanceof A.cX){s=t.N
r=t.X
r=A.bP(A.m(["kind","serverBusy","message",a.a],s,r),s,r)
s=a.b
if(s!=null)r.j(0,"retryAfter",s)
s=r
break A}if(a instanceof A.bM){s=A.m(["kind","auth","message",a.a],t.N,t.X)
break A}if(a instanceof A.ce){s=A.m(["kind","forbidden","message",a.a],t.N,t.X)
break A}if(a instanceof A.cf){s=A.m(["kind","notFound","message",a.a],t.N,t.X)
break A}if(a instanceof A.dj){s=A.m(["kind","payload","message",a.a],t.N,t.X)
break A}if(a instanceof A.e0){s=A.m(["kind","protocol","message",a.a],t.N,t.X)
break A}if(a instanceof A.dK){s=A.m(["kind","duplicateId","message",a.a],t.N,t.X)
break A}if(a instanceof A.hz){s=A.m(["kind","syncIdentity","message",a.a],t.N,t.X)
break A}if(a instanceof A.dc){s=A.m(["kind","batchFailed","message",a.a],t.N,t.X)
break A}if(a instanceof A.e3){s=t.N
r=t.X
q=A.bP(A.m(["kind","remoteVersionConflict","message",a.a],s,r),s,r)
p=a.b
if(p!=null)q.j(0,"current",A.m(["id",p.a,"store",p.b,"updated",p.c,"data",p.d,"attachments",p.e],s,r))
s=q
break A}throw A.b(A.e1(u.P))}return s},
OM(a,b){var s,r,q=null,p=" must be a string.",o="current",n=A.kZ(a,b),m=A.ii(n.h(0,"kind"),b,"kind"),l=n.h(0,"message"),k=l==null
if(!k&&typeof l!="string")throw A.b(A.G('"message" at '+b+p,q))
A.a0(l)
switch(m){case"transientNetwork":return new A.dt(k?"network error":l)
case"serverError":return new A.f_(k?"server error":l)
case"serverBusy":s=n.h(0,"retryAfter")
if(s!=null&&typeof s!="string")throw A.b(A.G('"retryAfter" at '+b+p,q))
A.a0(s)
return new A.cX(s,k?"server busy":l)
case"auth":return new A.bM(k?"auth required":l)
case"forbidden":return new A.ce(k?"forbidden":l)
case"notFound":return new A.cf(k?"not found":l)
case"payload":return new A.dj(k?"invalid payload":l)
case"protocol":return new A.e0(k?"protocol error":l)
case"duplicateId":return new A.dK(k?"duplicate id":l)
case"syncIdentity":return new A.hz(k?"missing sync identity":l)
case"batchFailed":return new A.dc(k?"batch failed":l)
case"remoteVersionConflict":r=n.I(o)&&n.h(0,o)!=null?A.er(n.h(0,o),b+".current"):q
return new A.e3(r,k?"version conflict":l)
default:throw A.b(A.G('Unknown sync error kind "'+m+'" at '+b+".",q))}},
er(a,b){var s,r,q,p="attachments",o=A.kZ(a,b),n=o.h(0,p),m=n==null?null:A.EQ(n,b,p),l=A.ii(o.h(0,"id"),b,"id"),k=A.ii(o.h(0,"store"),b,"store"),j=A.ii(o.h(0,"updated"),b,"updated"),i=A.NI(o.h(0,"data"),b,"data"),h=A.l([],t.s)
if(m!=null)for(s=J.E(m),r='"attachments" at '+b+" must contain only strings.";s.k();){q=s.gn()
if(typeof q=="string")h.push(q)
else h.push(A.u(A.G(r,null)))}return new A.cV(l,k,j,i,h)},
OE(a,b){var s,r,q,p=A.kZ(a,b),o=A.ii(p.h(0,"kind"),b,"kind")
if(!new A.Z(B.bd,new A.CV(),t.lJ).E(0,o))throw A.b(A.G('"kind" at '+b+" is not a known BackendHintKind: "+o,null))
s=p.h(0,"record")
r=A.ii(p.h(0,"store"),b,"store")
q=B.b.kE(B.bd,new A.CW(o))
return new A.ct(r,q,s==null?null:A.er(s,b+".record"))},
OL(a,b){var s,r,q,p,o,n=A.EQ(a,b,"records"),m=A.l([],t.g1)
for(s=A.DW(n,0,t.X),r=J.E(s.a),q=s.b,s=new A.dQ(r,q,A.n(s).i("dQ<1>")),p=b+".rows[";s.k();){o=s.c
o=o>=0?new A.a_(q+o,r.gn()):A.u(A.au())
m.push(A.er(o.b,p+o.a+"]"))}return m},
OK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=" must be a string.",d=A.EQ(a,b,"results"),c=A.l([],t.g2)
for(s=A.DW(d,0,t.X),r=J.E(s.a),q=s.b,s=new A.dQ(r,q,A.n(s).i("dQ<1>")),p=b+".results[",o=t.f;s.k();){n=s.c
n=n>=0?new A.a_(q+n,r.gn()):A.u(A.au())
m=p+n.a+"]"
l=A.kZ(n.b,m)
k=l.h(0,"record")
j=l.h(0,"error")
i=l.h(0,"pushedJson")
n=k==null
if(!n&&!o.b(k))A.u(A.G('"record" at '+m+" must be a map.",f))
if(j!=null&&typeof j!="string")A.u(A.G('"error" at '+m+e,f))
if(i!=null&&typeof i!="string")A.u(A.G('"pushedJson" at '+m+e,f))
h=A.ii(l.h(0,"opId"),m,"opId")
g=A.HF(l.h(0,"ok"),m,"ok")
n=n?f:A.er(k,m+".record")
c.push(new A.hg(h,g,n,A.a0(j),A.a0(i)))}return c},
kZ(a,b){if(t.f.b(a))return A.br(a)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
NI(a,b,c){if(t.f.b(a))return A.br(a)
throw A.b(A.G('"'+c+'" at '+b+" must be a map.",null))},
EQ(a,b,c){if(t.j.b(a))return a
throw A.b(A.G('"'+c+'" at '+b+" must be a list.",null))},
ii(a,b,c){if(typeof a=="string")return a
throw A.b(A.G('"'+c+'" at '+b+" must be a string.",null))},
HF(a,b,c){if(A.aV(a))return a
throw A.b(A.G('"'+c+'" at '+b+" must be a bool.",null))},
HG(a,b,c){if(A.a6(a))return a
throw A.b(A.G('"'+c+'" at '+b+" must be an int.",null))},
CV:function CV(){},
CW:function CW(a){this.a=a},
Eo(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bR(a,b,c,s,d,new A.Bv())},
ol(a){var s=$.D.h(0,$.ld())
if(s instanceof A.bR&&s.a===a)return s
return null},
bR:function bR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yR:function yR(){},
yQ:function yQ(a,b,c){this.a=a
this.b=b
this.c=c},
Bv:function Bv(){this.a=0
this.b=null},
m8:function m8(a,b){this.a=a
this.b=b},
yI:function yI(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
yP:function yP(a){this.a=a},
yL:function yL(a){this.a=a},
yO:function yO(a,b,c){this.a=a
this.b=b
this.c=c},
yN:function yN(a,b,c){this.a=a
this.b=b
this.c=c},
yM:function yM(a,b,c){this.a=a
this.b=b
this.c=c},
yK:function yK(a){this.a=a},
yJ:function yJ(){},
oX:function oX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
Aj:function Aj(a,b){this.a=a
this.b=b},
Ai:function Ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ag:function Ag(a,b){this.a=a
this.b=b},
Ah:function Ah(a,b){this.a=a
this.b=b},
Af:function Af(a){this.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b},
Or(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.E(a);s.k();){r=new A.a7("")
A.cr(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aj(o)
p=B.b.C(o,"|")
b.$1(p.length)
return A.at(B.m.v(B.e.v(p)).a)},
nt:function nt(a,b,c){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
xO:function xO(){},
xN:function xN(a){this.a=a},
xP:function xP(a){this.a=a},
nd:function nd(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=null
_.a=c
_.b=d
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
wh:function wh(a){this.a=a},
fE:function fE(){},
zD:function zD(a,b){this.a=a
this.b=0
this.c=b},
zE:function zE(a,b,c){this.a=a
this.b=b
this.c=c},
LA(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.a6(s))throw A.b(A.aL('Request "v" must be an int.'))
if(!A.a6(r)||r<0)throw A.b(A.aL('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dP.E(0,q))throw A.b(A.aL("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.aL('Request "a" must be a map.'))
return new A.hK(s,r,q,p.aR(0,new A.zh(),t.N,t.X))},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zh:function zh(){},
oB:function oB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ze:function ze(a,b,c){this.a=a
this.b=b
this.c=c},
GA(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
zc:function zc(a){var _=this
_.d=a
_.e=0
_.r=null
_.w=!1
_.x=null},
zd:function zd(a){this.a=a},
pk:function pk(a){this.a=a},
KD(a){var s,r,q
try{s=A.l1(a)
if(t.f.b(s)){r=A.br(s)
return r}}catch(q){}return null},
KE(a){if(a instanceof A.k8)return A.l5(new A.oB(3,a.a,a.b,null).p())
t.bp.a(a)
return A.E3(a.a,a.b,a.c,a.d)},
E3(a,b,c,d){return A.l5(new A.oB(3,a,null,new A.ze(b,c,d)).p())},
kW(a){return A.Ny(a)},
Ny(a){var s=0,r=A.h(t.mU),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kW=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.is()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a4(f.getDirectory(),k),$async$kW)
case 7:n=c
j=$.iu()
i=A.O(j.dh(0,"drift_db"),t.N)
m=i
J.Fl(m,j.dh(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ag(l)===0){s=9
break}s=11
return A.a(A.a4(n.getDirectoryHandle(l,{create:!1}),k),$async$kW)
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
return A.f($async$kW,r)},
pW(a,b){return A.Nz(a,b)},
Nz(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pW=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kW(a),$async$pW)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a4(m.getFileHandle(A.e_(b,$.iu().a).gkm(),{create:!1}),t.m),$async$pW)
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
return A.f($async$pW,r)},
pX(a,b){return A.NH(a,b)},
NH(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pX=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kW(a),$async$pX)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.mv(m,A.e_(b,$.iu().a).gkm()),$async$pX)
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
return A.f($async$pX,r)},
vt:function vt(){},
vu:function vu(a){this.a=a},
vv:function vv(a){this.a=a},
vw:function vw(a){this.a=a},
mX:function mX(a,b,c){this.a=a
this.f=b
this.r=c},
vF:function vF(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a){this.a=a
this.b=0},
Ap:function Ap(a){this.a=a},
Aq:function Aq(a){this.a=a},
Pl(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="maxDocBytes",a="destructiveBackup",a0="storePolicies",a1="syncProxy",a2="blobProxy",a3="clockOffsetMs"
if(a4==null)return A.t(t.N,t.X)
s=t.f
if(!s.b(a4))throw A.b(A.aL("Open options must be a map."))
r=A.br(a4)
q=t.N
p=t.X
o=A.t(q,p)
n=r.h(0,"stores")
if(n!=null){if(!t.j.b(n))throw A.b(A.aL('"stores" must be a list.'))
m=A.l([],t.oq)
for(l=J.E(n);l.k();){k=l.gn()
if(!s.b(k))A.u(A.ac("Schema must be a map: "+A.r(k),null,null))
m.push(A.qM(A.br(k),p))}o.j(0,"stores",m)}j=r.h(0,b)
if(j!=null){if(!A.a6(j))throw A.b(A.aL('"maxDocBytes" must be an int.'))
o.j(0,b,j)}i=r.h(0,a)
if(i!=null){if(!A.aV(i))throw A.b(A.aL('"destructiveBackup" must be a bool.'))
o.j(0,a,i)}h=r.h(0,a0)
if(h!=null){if(!s.b(h))throw A.b(A.aL('"storePolicies" must be a map.'))
q=A.t(q,t.G)
for(p=h.ga3(),p=p.gt(p);p.k();){m=p.gn()
l=m.a
g=J.cL(l)
f=g.m(l)
m=m.b
l=g.m(l)
if(!s.b(m))A.u(A.aL('The store policy for "'+l+'" must be a map.'))
q.j(0,f,A.br(m))}o.j(0,a0,q)}e=r.h(0,a1)
if(e!=null){if(!A.aV(e))throw A.b(A.aL('"syncProxy" must be a bool.'))
o.j(0,a1,e)}d=r.h(0,a2)
if(d!=null){if(!A.aV(d))throw A.b(A.aL('"blobProxy" must be a bool.'))
o.j(0,a2,d)}A.EO(r,"groupCommitWindowMs",o,0,"the group-commit coalescing window")
A.EO(r,"txSessionTtlMs",o,0,"the interactive-transaction idle deadline")
A.EO(r,"callbackTimeoutMs",o,1,"the page-callback round-trip bound")
c=r.h(0,a3)
if(c!=null){if(!A.a6(c))throw A.b(A.aL('"clockOffsetMs" must be an int (milliseconds).'))
o.j(0,a3,c)}return o},
EO(a,b,c,d,e){var s=a.h(0,b)
if(s==null)return
if(!A.a6(s))throw A.b(A.aL('"'+b+'" must be an int (milliseconds).'))
if(s<d)throw A.b(A.aL('"'+b+'" must be an int \u2265 '+d+" (milliseconds) for "+e+"."))
c.j(0,b,s)},
Iy(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.br(a).h(0,b)
return s}}catch(r){}return null},
P2(a,b){if(b!=null)return!1
return B.b.bq(a,new A.Db())},
Db:function Db(){},
Da:function Da(){},
zj:function zj(a){this.a=a},
GD(a,b,c,d){var s,r,q,p,o,n,m,l=A.l([],t.s)
for(s=A.c0(new A.T(c,A.n(c).i("T<1>")),t.N),s.D(0,new A.T(d,A.n(d).i("T<1>"))),s=A.eh(s,s.r,A.n(s).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!A.LC(c.h(0,q),d.h(0,q))){p=c.h(0,q)
o=d.h(0,q)
l.push(q+" (page: "+A.GC(p)+", worker: "+A.GC(o)+")")}}n=l.length===0?"no policy-level descriptor diverged \u2014 the divergence is inside the schema body itself":B.b.C(l,"; ")
m=b?"":" No store-policy envelope was received for this store (a stale worker asset or a dropped envelope)."
return'Schema manifest mismatch for "'+a+'": the page and the worker compiled different schemas. Diverging manifest descriptors: '+n+"."+m},
Eq(a){var s,r,q,p,o,n,m,l=a.e,k=l.b.gJ()
k=A.O(k,A.n(k).i("o.E"))
B.b.aj(k)
s=a.y.gJ()
s=A.O(s,A.n(s).i("o.E"))
B.b.aj(s)
r=a.x
q=B.b.bq(r,new A.zx())
p=A.l([],t.t)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.p)(r),++n){m=r[n]
if(m.d!=null)p.push(m.a)}B.b.aj(p)
return A.m(["version",a.b,"hasValidatorCallback",a.z!=null,"hasCollectionResolver",l.a!=null,"fieldOverrides",k,"editsUnarchive",l.c,"missingRemote",l.d.b,"documentMigrationVersions",s,"hasTransform",q,"transformVersions",p,"keepUnsyncedArchives",a.r],t.N,t.X)},
LB(a,b){var s,r,q,p=new A.zp(a),o=new A.zo(a),n=p.$1("conflictPolicy"),m=o.$1("documentMigrations"),l=o.$1("migrationTransforms"),k=n.h(0,"missingRemote")
o=t.f.b(a)&&J.x(a.h(0,"validator"),!0)
s=n.h(0,"collectionResolver")
p=new A.zq(p).$0()
r=J.x(n.h(0,"editsUnarchive"),!0)
q=typeof k=="string"?k:"conflict"
return A.m(["version",b.b,"hasValidatorCallback",o,"hasCollectionResolver",s!=null,"fieldOverrides",p,"editsUnarchive",r,"missingRemote",q,"documentMigrationVersions",m,"hasTransform",J.ag(l)!==0,"transformVersions",l,"keepUnsyncedArchives",b.r],t.N,t.X)},
LC(a,b){var s,r,q,p=t.j
if(p.b(a)&&p.b(b)){p=t.N
s=J.bB(a,new A.zu(),p)
r=A.O(s,s.$ti.i("a1.E"))
B.b.aj(r)
s=A.a2(b).i("Z<1,j>")
q=A.O(new A.Z(b,new A.zv(),s),s.i("a1.E"))
B.b.aj(q)
return r.length===q.length&&A.DW(r,0,p).cu(0,new A.zw(q))}return a==null?b==null:a===b},
GC(a){var s
A:{if(t.j.b(a)){s="["+J.Jx(a,", ")+"]"
break A}if(a==null){s="absent"
break A}s=J.Y(a)
break A}return s},
zk:function zk(a,b){this.a=a
this.b=b
this.c=0},
zl:function zl(a,b,c){this.a=a
this.b=b
this.c=c},
zm:function zm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zn:function zn(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(){},
k8:function k8(a,b){this.b=a
this.a=b},
f6:function f6(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
oG:function oG(){},
oF:function oF(a,b,c,d){var _=this
_.w=$
_.c=a
_.d=b
_.e=c
_.f=d
_.r=null},
zy:function zy(a){this.a=a},
oE:function oE(){},
zs:function zs(a){this.a=a},
zt:function zt(){},
zx:function zx(){},
zp:function zp(a){this.a=a},
zo:function zo(a){this.a=a},
zq:function zq(a){this.a=a},
zr:function zr(){},
zu:function zu(){},
zv:function zv(){},
zw:function zw(a){this.a=a},
pO:function pO(){},
HD(a){return a},
HZ(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a7("")
o=a+"("
p.a=o
n=A.a2(b)
m=n.i("cF<1>")
l=new A.cF(b,0,s,m)
l.jh(b,0,s,n.c)
m=o+new A.Z(l,new A.CH(),m.i("Z<a1.E,j>")).C(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.U(p.m(0),null))}},
rl:function rl(a){this.a=a},
rm:function rm(){},
rn:function rn(){},
CH:function CH(){},
ui:function ui(){},
e_(a,b){var s,r,q,p,o,n=b.oV(a),m=b.d5(a)
if(n!=null)a=B.a.ac(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.cC(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cC(a.charCodeAt(o))){r.push(B.a.B(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ac(a,p))
q.push("")}return new A.ng(b,n,m,r,q)},
ng:function ng(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ga(a){return new A.nh(a)},
nh:function nh(a){this.a=a},
Lq(){var s,r,q,p,o,n,m,l,k=null
if(A.Ep().gb9()!=="file")return $.lc()
if(!B.a.cb(A.Ep().gbE(),"/"))return $.lc()
s=A.Hb(k,0,0)
r=A.H9(k,0,0,!1)
q=A.BR(k,0,0,k)
p=A.H8(k,0,0)
o=A.BQ(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Ha("a/b",0,3,k,"",m)
if(n&&!B.a.T(l,"/"))l=A.EG(l,m)
else l=A.fj(l)
if(A.kP("",s,n&&B.a.T(l,"//")?"":r,o,l,q,p).l2()==="a\\b")return $.q6()
return $.IS()},
yp:function yp(){},
x2:function x2(a,b,c){this.d=a
this.e=b
this.f=c},
yZ:function yZ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
zi:function zi(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
DR(a,b){if(b<0)A.u(A.b8("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.u(A.b8("Offset "+b+u.D+a.gl(0)+"."))
return new A.mq(a,b)},
y8:function y8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
mq:function mq(a,b){this.a=a
this.b=b},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
Kk(a,b){var s=A.Kl(A.l([A.M_(a,!0)],t.pg)),r=new A.u8(b).$0(),q=B.c.m(B.b.ga0(s).b+1),p=A.Km(s)?0:3,o=A.a2(s)
return new A.tP(s,r,null,1+Math.max(q.length,p),new A.Z(s,new A.tR(),o.i("Z<1,i>")).xW(0,B.bJ),!A.Pa(new A.Z(s,new A.tS(),o.i("Z<1,k?>"))),new A.a7(""))},
Km(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
Kl(a){var s,r,q=A.P1(a,new A.tU(),t.nf,t.K)
for(s=A.n(q),r=new A.aS(q,q.r,q.e,s.i("aS<2>"));r.k();)J.Fp(r.d,new A.tV())
s=s.i("aK<1,2>")
r=s.i("iS<o.E,cJ>")
s=A.O(new A.iS(new A.aK(q,s),new A.tW(),r),r.i("o.E"))
return s},
M_(a,b){var s=new A.B0(a).$0()
return new A.bA(s,!0,null)},
M1(a){var s,r,q,p,o,n,m=a.gaT()
if(!B.a.E(m,"\r\n"))return a
s=a.gO().gav()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga6()
o=a.gO().gah()
p=A.nM(s,a.gO().gau(),o,p)
o=A.C(m,"\r\n","\n")
n=a.gbr()
return A.y9(r,p,o,A.C(n,"\r\n","\n"))},
M2(a){var s,r,q,p,o,n,m
if(!B.a.cb(a.gbr(),"\n"))return a
if(B.a.cb(a.gaT(),"\n\n"))return a
s=B.a.B(a.gbr(),0,a.gbr().length-1)
r=a.gaT()
q=a.gR()
p=a.gO()
if(B.a.cb(a.gaT(),"\n")){o=A.D4(a.gbr(),a.gaT(),a.gR().gau())
o.toString
o=o+a.gR().gau()+a.gl(a)===a.gbr().length}else o=!1
if(o){r=B.a.B(a.gaT(),0,a.gaT().length-1)
if(r.length===0)p=q
else{o=a.gO().gav()
n=a.ga6()
m=a.gO().gah()
p=A.nM(o-1,A.GT(s),m-1,n)
q=a.gR().gav()===a.gO().gav()?p:a.gR()}}return A.y9(q,p,r,s)},
M0(a){var s,r,q,p,o
if(a.gO().gau()!==0)return a
if(a.gO().gah()===a.gR().gah())return a
s=B.a.B(a.gaT(),0,a.gaT().length-1)
r=a.gR()
q=a.gO().gav()
p=a.ga6()
o=a.gO().gah()
p=A.nM(q-1,s.length-B.a.d6(s,"\n")-1,o-1,p)
return A.y9(r,p,s,B.a.cb(a.gbr(),"\n")?B.a.B(a.gbr(),0,a.gbr().length-1):a.gbr())},
GT(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.iC(a,"\n",s-2)-1
else return s-B.a.d6(a,"\n")-1},
tP:function tP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
u8:function u8(a){this.a=a},
tR:function tR(){},
tQ:function tQ(){},
tS:function tS(){},
tU:function tU(){},
tV:function tV(){},
tW:function tW(){},
tT:function tT(a){this.a=a},
u9:function u9(){},
tX:function tX(a){this.a=a},
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
u4:function u4(a,b){this.a=a
this.b=b},
u5:function u5(a){this.a=a},
u6:function u6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
u1:function u1(a,b){this.a=a
this.b=b},
u2:function u2(a,b){this.a=a
this.b=b},
tY:function tY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tZ:function tZ(a,b,c){this.a=a
this.b=b
this.c=c},
u_:function u_(a,b,c){this.a=a
this.b=b
this.c=c},
u0:function u0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u7:function u7(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
B0:function B0(a){this.a=a},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nM(a,b,c,d){if(a<0)A.u(A.b8("Offset may not be negative, was "+a+"."))
else if(c<0)A.u(A.b8("Line may not be negative, was "+c+"."))
else if(b<0)A.u(A.b8("Column may not be negative, was "+b+"."))
return new A.cD(d,a,c,b)},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nN:function nN(){},
nP:function nP(){},
Lj(a,b,c){return new A.hs(c,a,b)},
nQ:function nQ(){},
hs:function hs(a,b,c){this.c=a
this.a=b
this.b=c},
ht:function ht(){},
y9(a,b,c,d){var s=new A.dp(d,a,b,c)
s.pD(a,b,c)
if(!B.a.E(d,c))A.u(A.U('The context line "'+d+'" must contain "'+c+'".',null))
if(A.D4(d,c,a.gau())==null)A.u(A.U('The span text "'+c+'" must start at column '+(a.gau()+1)+' in a line within "'+d+'".',null))
return s},
dp:function dp(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Ln(a){var s
A:{if(18===a){s=B.dQ
break A}if(23===a){s=B.dR
break A}if(9===a){s=B.dS
break A}s=null
break A}return s},
jW:function jW(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
Lm(a,b,c,d,e,f,g){return new A.cj(d,b,c,e,f,a,g)},
cj:function cj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ye:function ye(){},
lm:function lm(a){this.a=a},
N6(a,b,c){var s,r,q,p,o,n=new A.ow(c,A.a9(c.b,null,!1,t.X))
try{A.Hs(a,b.$1(n))}catch(r){s=A.A(r)
q=B.e.v(A.iP(s))
p=a.a
o=p.cY(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
Hs(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.a6(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.GG(b).m(0)))
break A}if(b instanceof A.aQ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Fv(b).m(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.aV(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.GG(b?1:0).m(0)))
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
break A}if(t.po.b(b)){A.Hs(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.u(A.aD(b,"result","Unsupported type"))}return s},
rM:function rM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rV:function rV(a){this.a=a},
rU:function rU(a){this.a=a},
rW:function rW(a){this.a=a},
rS:function rS(a){this.a=a},
rR:function rR(a){this.a=a},
rT:function rT(a){this.a=a},
rO:function rO(a){this.a=a},
rN:function rN(a){this.a=a},
rP:function rP(a){this.a=a},
rX:function rX(a){this.a=a},
rQ:function rQ(a,b){this.a=a
this.b=b},
ow:function ow(a,b){this.a=a
this.b=b},
el:function el(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
BG:function BG(a,b){this.a=a
this.b=b},
BH:function BH(a,b,c){this.a=a
this.b=b
this.c=c},
BI:function BI(a,b,c){this.a=a
this.b=b
this.c=c},
ya:function ya(){},
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
DV(a,b){var s=$.q5()
return new A.mE(A.t(t.N,t.a_),s,a)},
mE:function mE(a,b,c){this.d=a
this.b=b
this.a=c},
pa:function pa(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Pm(a){var s=J.JB(new v.G.URL(a,"file:///").pathname,"/")
return new A.ap(s,new A.Dk(),A.a2(s).i("ap<1>"))},
Dk:function Dk(){},
rr:function rr(){},
nz:function nz(a,b,c){this.d=a
this.a=b
this.c=c},
ci:function ci(a,b){this.a=a
this.b=b},
Bp:function Bp(a){this.a=a
this.b=-1},
pr:function pr(){},
ps:function ps(){},
pu:function pu(){},
pv:function pv(){},
wm:function wm(a,b){this.a=a
this.b=b},
L7(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bT(r,"step")}return s},
eC:function eC(){},
bY:function bY(a){this.a=a},
lX:function lX(a){this.a=a},
hG(a){return new A.dw(a)},
Ft(a,b){var s,r,q,p
if(b==null)b=$.q5()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.d8(256)
r&2&&A.K(a)
a[q]=p}},
dw:function dw(a){this.a=a},
jV:function jV(a){this.a=a},
bh:function bh(){},
lC:function lC(){},
lB:function lB(){},
Ps(a,b){var s=null,r=new A.eO(t.kk)
return A.q4(a,new A.k9(s,s,s,s,s,s,s,s,new A.Du(new A.Dt(r,A.Cu(new A.Dv(r)))),s,s,s,s),s,b)},
f7:function f7(a){var _=this
_.d=a
_.c=_.b=_.a=null},
Dv:function Dv(a){this.a=a},
Dt:function Dt(a,b){this.a=a
this.b=b},
Du:function Du(a){this.a=a},
z9:function z9(a){this.a=a},
z4:function z4(a,b,c){this.a=a
this.b=b
this.c=c},
zb:function zb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
za:function za(a,b,c){this.b=a
this.c=b
this.d=c},
ea:function ea(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
c8(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.A(r)
if(q instanceof A.dw){s=q
return s.a}else return 1}},
m0:function m0(a){this.b=this.a=$
this.d=a},
rx:function rx(a,b,c){this.a=a
this.b=b
this.c=c},
ru:function ru(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rz:function rz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rB:function rB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rD:function rD(a,b){this.a=a
this.b=b},
rw:function rw(a){this.a=a},
rC:function rC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rH:function rH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rF:function rF(a,b){this.a=a
this.b=b},
rE:function rE(a,b){this.a=a
this.b=b},
ry:function ry(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b){this.a=a
this.b=b},
rG:function rG(a,b){this.a=a
this.b=b},
rv:function rv(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b){this.a=a
this.$ti=b},
qk:function qk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qm:function qm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
cO(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bz(a,"success",new A.r5(r,a,b),!1,q)
A.bz(a,"error",new A.r6(r,a),!1,q)
return s},
JW(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bz(a,"success",new A.ra(r,a,b),!1,q)
A.bz(a,"error",new A.rb(r,a),!1,q)
A.bz(a,"blocked",new A.rc(r),!1,q)
return s},
fb:function fb(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
At:function At(a,b){this.a=a
this.b=b},
Au:function Au(a,b){this.a=a
this.b=b},
r5:function r5(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a,b){this.a=a
this.b=b},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
rb:function rb(a,b){this.a=a
this.b=b},
rc:function rc(a){this.a=a},
is(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
FO(a,b,c){var s=a.read(b,c)
return s},
FP(a,b,c){var s=a.write(b,c)
return s},
mv(a,b){return A.a4(a.removeEntry(b,{recursive:!1}),t.X)},
FN(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.u(A.U("Target object does not implement the async iterable interface",null))
return new A.ff(new A.tv(),new A.iy(a,s),s.i("ff<ad.T,N>"))},
tv:function tv(){},
z5:function z5(a){this.a=a},
z6:function z6(a){this.a=a},
z8(a,b){var s=0,r=A.h(t.R),q,p,o
var $async$z8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a4(p.fetch(new p.URL(a,A.bo(p.location).href),null),t.m),$async$z8)
case 3:q=o.z7(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$z8,r)},
z7(a,b){var s=0,r=A.h(t.R),q,p,o,n,m
var $async$z7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.m0(A.t(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.z5(p).iG(a),$async$z7)
case 3:q=new o.hH(new n.z9(m.Lz(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$z7,r)},
hH:function hH(a){this.a=a},
M3(a){var s=new A.kr(a,new A.as(new A.w($.D,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.pH(a)
return s},
mG(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$mG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.qn(a)
n=A.DV("dart-memory",null)
m=$.q5()
l=new A.dP(o,n,new A.eO(t.p3),A.aP(p),A.t(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.iM(),$async$mG)
case 3:s=4
return A.a(l.fc(),$async$mG)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mG,r)},
qn:function qn(a){this.a=null
this.b=a},
qq:function qq(a){this.a=a},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qo:function qo(a){this.a=a},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
B3:function B3(a){this.a=a},
B4:function B4(a){this.a=a},
B2:function B2(a){this.a=a},
B5:function B5(a,b,c){this.a=a
this.b=b
this.c=c},
B7:function B7(a,b){this.a=a
this.b=b},
B6:function B6(a,b){this.a=a
this.b=b},
AF:function AF(a,b,c){this.a=a
this.b=b
this.c=c},
AG:function AG(a,b){this.a=a
this.b=b},
pj:function pj(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
uc:function uc(a,b,c){this.a=a
this.b=b
this.c=c},
ud:function ud(){},
ub:function ub(a,b){this.a=a
this.b=b},
pb:function pb(a,b,c){this.a=a
this.b=b
this.c=c},
B1:function B1(a,b){this.a=a
this.b=b},
bj:function bj(){},
kp:function kp(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
kj:function kj(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hS:function hS(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
ia:function ia(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
Gm(a){var s=A.DV("dart-memory",null),r=$.q5()
return new A.hr(s,r,a)},
nI(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$nI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.is()
if(j==null)throw A.b(A.hG(1))
p=t.m
s=3
return A.a(A.a4(j.getDirectory(),p),$async$nI)
case 3:o=d
n=A.Pm(a),m=J.E(n.a),n=new A.d3(m,n.b,n.$ti.i("d3<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a4(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$nI)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a_(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nI,r)},
nJ(a){var s=0,r=A.h(t.m),q
var $async$nJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nI(a,!0),$async$nJ)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nJ,r)},
y6(a,b){var s=0,r=A.h(t.g_),q,p
var $async$y6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.is()==null)throw A.b(A.hG(1))
p=A
s=3
return A.a(A.nJ(a),$async$y6)
case 3:q=p.y5(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$y6,r)},
y5(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$y5=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.Gm(c)
s=3
return A.a(p.d9(a,!1),$async$y5)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$y5,r)},
fU:function fU(a,b,c){this.c=a
this.a=b
this.b=c},
hr:function hr(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
y7:function y7(a,b){this.a=a
this.b=b},
pA:function pA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Bl:function Bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Lz(a,b){var s=A.bo(a.exports.memory)
b.b!==$&&A.dD()
b.b=s
s=new A.z_(s,b,a.exports)
s.pE(a,b)
return s},
oI(a,b){var s,r=A.c2(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
ec(a,b,c){var s=a.buffer
return B.o.fq(A.c2(s,b,c==null?A.oI(a,b):c))},
Er(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.fq(A.c2(s,b,c==null?A.oI(a,b):c))},
GE(a,b,c){var s=new Uint8Array(c)
B.f.dg(s,0,A.c2(a.buffer,b,c))
return s},
z_:function z_(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
z0:function z0(a){this.a=a},
z1:function z1(a){this.a=a},
z2:function z2(a){this.a=a},
z3:function z3(a){this.a=a},
CT(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$CT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.le()
s=l!=null?3:5
break
case 3:p=A.ND()
s=6
return A.a(A.k7(l,p,null,null,!1),$async$CT)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a_({port:m.port1,lockName:p},new A.iJ(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$CT,r)},
ND(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bF(97+$.Jj().d8(26))
return r.charCodeAt(0)==0?r:r},
JM(a){return new A.iF(a)},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
x9:function x9(){},
xd:function xd(a){this.a=a},
xe:function xe(a){this.a=a},
xc:function xc(a){this.a=a},
xb:function xb(a){this.a=a},
xa:function xa(a){this.a=a},
iF:function iF(a){this.a=a},
rK:function rK(){},
lW:function lW(a){this.a=a},
rs:function rs(a){this.a=a},
f5:function f5(){},
mg(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$mg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nJ(a),$async$mg)
case 3:p=e
o=A.Gm(c)
s=b?4:5
break
case 4:s=6
return A.a(o.d9(p,!0),$async$mg)
case 6:case 5:q=new A.mf(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mg,r)},
mf:function mf(a,b,c){this.a=a
this.b=b
this.c=c},
tN:function tN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
k7(a,b,c,d,e){var s,r,q={},p=new A.w($.D,t.nI),o=new A.as(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.DS(A.a4(a.request(b,s,A.d8(new A.zf(q,o))),r),new A.zg(q,d,o),r,t.K)
return p},
zf:function zf(a,b){this.a=a
this.b=b},
zg:function zg(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a){this.a=a},
m1:function m1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rZ:function rZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rY:function rY(a,b){this.a=a
this.b=b},
t_:function t_(a){this.a=a},
js:function js(a){this.a=!1
this.b=a},
we:function we(a,b){this.a=a
this.b=b},
wd:function wd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wc:function wc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
JT(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.a.b(n)?n:new A.bW(n,A.a2(n).i("bW<1,j>"))
for(s=J.J(m),r=0;r<s.gl(m)/2;++r){q=r*2
o.push(new A.a_(A.fO(B.d8,s.h(m,q)),s.h(m,q+1)))}s=A.ic(a.b)
q=A.ic(a.c)
p=A.ic(a.d)
return new A.eD(o,s,q,A.ic(a.g),p)},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
La(a){var s
if(J.x(a.t,"errorResponse")){s=A.K7(a)
if(s!=null&&s instanceof A.dE)return s
else return new A.hj(a.e)}else return new A.hj("Did not respond with expected type, got "+A.r(a))},
K7(a){var s=a.s,r=s==null?null:A.ai(s)
A:{if(0===r){s=A.K8(t.c.a(a.r))
break A}if(1===r){s=B.at
break A}s=null
break A}return s},
K8(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.B("Pattern matching error"))
n=new A.tf()
l=A.ai(A.fk(l))
A.H(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.i.a(h)
p=new A.eF(i,h,A.c2(h,0,o))}else p=o
n=n.$1(k)
A.Hj(g)
return new A.cj(s,r,l,g==null?o:A.ai(g),n,q,p)},
K9(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Lu(l)
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
Lb(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.tN(a2,512,"transfer" in a2)
a5.n4(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.L7(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.r6(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aL}else g=B.aM
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aN
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.oI(r,f)
f=new Uint8Array(e,f,d)
c=new A.dA(!1).dl(f,0,a,!0)
i=c
g=B.aO
break
case 4:i=s.lm(j)
g=B.aP
break
case 5:default:i=a
g=B.aQ}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.oI(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dA(!1).dl(a0,0,a,!0)}return A.Ir(!1,b,0,0,a1,a,a3.yd(0))},
Pb(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
tf:function tf(){},
Ir(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
il(a){var s,r,q,p,o=v.G,n=new o.Array()
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
OO(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
n_:function n_(a,b,c){this.a=a
this.b=b
this.$ti=c},
xU:function xU(){},
Kc(a){var s,r
for(s=0;s<5;++s){r=B.cW[s]
if(r.c===a)return r}throw A.b(A.U("Unknown FS implementation: "+a,null))},
Lt(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aQ
break A}q=A.a6(a)
p=q?a:j
if(q){s=p
r=B.aL
break A}q=a instanceof A.aQ
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.m(0))
r=B.aM
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aN
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aO
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aP
break A}q=A.aV(a)
k=q?a:j
if(q){s=k
r=B.bv
break A}throw A.b(A.U("Unsupported value: "+A.r(a),j))}return new A.a_(r,s)},
Lu(a){var s,r,q,p,o,n
if(a instanceof A.eF)return new A.a_(a.a,a.b)
s=[]
r=J.J(a)
q=r.gl(a)
p=new Uint8Array(q)
for(o=0;o<r.gl(a);++o){n=A.Lt(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a_(s,t.i.a(B.f.gad(p)))},
dL:function dL(a,b,c){this.c=a
this.a=b
this.b=c},
cH:function cH(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
q0(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$q0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bo(i.indexedDB)
i=$.le()
i=i==null?null:A.k7(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bH(i,t.fm),$async$q0)
case 3:l=b
p=5
s=8
return A.a(A.JV(m.open("drift_mock_db"),t.m),$async$q0)
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
if(i!=null)i.a.al()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$q0,r)},
CP(a){return A.Op(a)},
Op(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$CP=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bo(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.d8(new A.CQ(j,m))
s=7
return A.a(A.JU(m,t.m),$async$CP)
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
return A.f($async$CP,r)},
ip(){var s=0,r=A.h(t.a),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$ip=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.is()
if(h==null){q=B.r
s=1
break}j=t.m
s=3
return A.a(A.a4(h.getDirectory(),j),$async$ip)
case 3:m=b
p=5
s=8
return A.a(A.a4(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$ip)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.r
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.l([],t.s)
j=new A.c5(A.cq(A.FN(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$ip)
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
return A.a(j.A(),$async$ip)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ip,r)},
JU(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bz(a,"success",new A.r3(r,a,b),!1,q)
A.bz(a,"error",new A.r4(r,a),!1,q)
return s},
JV(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.as(s,b.i("as<0>")),q=t.m
A.bz(a,"success",new A.r7(r,a,b),!1,q)
A.bz(a,"error",new A.r8(r,a),!1,q)
A.bz(a,"blocked",new A.r9(r,a),!1,q)
return s},
CQ:function CQ(a,b){this.a=a
this.b=b},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a,b){this.a=a
this.b=b},
r7:function r7(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
x5:function x5(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
dE:function dE(a){this.a=a},
N5(a){var s=a.gnp()
return new A.ff(new A.Ct(),s,A.n(s).i("ff<ad.T,N>"))},
GQ(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hR(a,r,new A.kF(),new A.kF(),new A.kF(),s)},
LV(a,b,c){var s=t.S
s=new A.hP(c,A.l([],t.fV),a.a,new A.aG(new A.w($.D,t.D),t.Q),A.t(s,t.br),A.t(s,t.m))
s.pB(a)
s.pG(a,b,c)
return s},
Ht(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
ep(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ep=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.is()
if(b==null){q=B.aH
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.le()
d=d==null?null:A.k7(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bH(d,t.fm),$async$ep)
case 7:j=a1
d=t.m
s=8
return A.a(A.a4(b.getDirectory(),d),$async$ep)
case 8:m=a1
s=9
return A.a(A.a4(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$ep)
case 9:l=a1
s=10
return A.a(A.l0(l),$async$ep)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.DZ(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a4(A.bo(e),t.X),$async$ep)
case 13:q=B.aH
n=[1]
s=5
break
case 12:g=i
q=new A.kA(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.aH
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.al()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.mv(m,"_drift_feature_detection"),$async$ep)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ep,r)},
l0(a){return A.NZ(a)},
NZ(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$l0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a4(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$l0)
case 7:j=c
s=8
return A.a(A.a4(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$l0)
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
return A.a(A.a4(a.createSyncAccessHandle(),t.m),$async$l0)
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
return A.f($async$l0,r)},
Ct:function Ct(){},
kF:function kF(){this.a=null},
hR:function hR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
Ak:function Ak(a){this.a=a},
Ao:function Ao(a,b){this.a=a
this.b=b},
Al:function Al(a,b){this.a=a
this.b=b},
Am:function Am(a){this.a=a},
An:function An(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
A4:function A4(a){this.a=a},
A9:function A9(a,b){this.a=a
this.b=b},
Ac:function Ac(a,b,c){this.a=a
this.b=b
this.c=c},
A6:function A6(a,b){this.a=a
this.b=b},
A5:function A5(a,b){this.a=a
this.b=b},
Ab:function Ab(a,b){this.a=a
this.b=b},
Aa:function Aa(a,b){this.a=a
this.b=b},
Ae:function Ae(a,b){this.a=a
this.b=b},
Ad:function Ad(a,b){this.a=a
this.b=b},
A7:function A7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A8:function A8(a,b){this.a=a
this.b=b},
A3:function A3(a){this.a=a},
m2:function m2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
t2:function t2(a){this.a=a},
t1:function t1(a){this.a=a},
t0:function t0(a,b){this.a=a
this.b=b},
zz:function zz(a,b,c,d,e,f){var _=this
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
zA:function zA(a,b){this.a=a
this.b=b},
zB:function zB(a,b){this.a=a
this.b=b},
zC:function zC(a){this.a=a},
LD(){var s=v.G
if(A.Kr(s,"DedicatedWorkerGlobalScope"))return new A.p2(s,new A.p3(s.location.href))
else return new A.py(s,new A.p3(s.location.href))},
kR:function kR(){},
p2:function p2(a,b){this.a=a
this.b=b},
py:function py(a,b){this.a=a
this.b=b},
BA:function BA(a){this.a=a},
BB:function BB(a,b,c){this.a=a
this.b=b
this.c=c},
Bz:function Bz(a){this.a=a},
Bx:function Bx(a){this.a=a},
By:function By(a){this.a=a},
p3:function p3(a){this.a=a},
AA:function AA(a){this.a=a},
nY:function nY(a,b,c){this.c=a
this.a=b
this.b=c},
yo:function yo(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hD:function hD(){},
pc:function pc(){},
cI:function cI(a,b){this.a=a
this.b=b},
bz(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.I0(new A.AD(c),t.m)
s=s==null?null:A.d8(s)}s=new A.kn(a,b,s,!1,e.i("kn<0>"))
s.kd()
return s},
I0(a,b){var s=$.D
if(s===B.i)return a
return s.i7(a,b)},
DO:function DO(a,b){this.a=a
this.$ti=b},
hV:function hV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kn:function kn(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
AD:function AD(a){this.a=a},
AE:function AE(a){this.a=a},
IJ(a){return v.mangledGlobalNames[a]},
Iv(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Ku(a,b){return b in a},
DZ(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
P1(a,b,c,d){var s,r,q,p,o,n=A.t(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aO(p,q)}return n},
DX(a){var s=J.E(a.a)
if(new A.d3(s,a.b,a.$ti.i("d3<1>")).k())return s.gn()
return null},
CL(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.K(a)
a[r]=s&255
b=s/256|0;--r}},
PD(a){return a},
IH(a){if(a instanceof A.dH)return a
return new A.dH(a)},
PE(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.A(p)
if(q instanceof A.hs){s=q
throw A.b(A.Lj("Invalid "+a+": "+s.a,s.b,s.ghf()))}else if(t.Y.b(q)){r=q
throw A.b(A.ac("Invalid "+a+' "'+b+'": '+r.giI(),r.ghf(),r.gav()))}else throw p}},
ft(a){if(B.a.cb(a,"\\"))throw A.b(A.aZ('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.C(a,"'","\\'")+"'"},
Pz(a,b,c,d){var s="("+d+"="+A.ft(a)+" && id~"+A.ft(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.ft(c)+")"},
OF(a,b){var s,r="hash",q=A.NJ(a,b),p=A.ES(q.h(0,"kind"),b,"kind")
switch(p){case"blobMissing":return new A.ew(A.ES(q.h(0,r),b,r))
case"blobStorage":s=q.h(0,"cause")
if(typeof s!="string")throw A.b(A.G('"cause" at '+b+" must be a string.",null))
return new A.fC(s,A.ES(q.h(0,r),b,r))
default:throw A.b(A.G('Unknown blob error kind "'+p+'" at '+b+".",null))}},
Ie(a,b){if(typeof a=="string")return a
throw A.b(A.G("The result at "+b+" must be a string.",null))},
Ic(a,b){if(A.aV(a))return a
throw A.b(A.G("The result at "+b+" must be a bool.",null))},
Id(a,b){if(a==null)return null
if(A.a6(a))return a
throw A.b(A.G("The result at "+b+" must be an int or null.",null))},
OH(a,b){if(A.a6(a))return a
throw A.b(A.G("The result at "+b+" must be an int.",null))},
OG(a,b){var s,r,q,p
if(!t.j.b(a))throw A.b(A.G("The result at "+b+" must be a list.",null))
s=A.l([],t.s)
for(r=J.E(a),q="The result at "+b+" must contain only strings.";r.k();){p=r.gn()
if(typeof p=="string")s.push(p)
else s.push(A.u(A.G(q,null)))}return s},
NJ(a,b){if(t.f.b(a))return A.br(a)
throw A.b(A.G("The value at "+b+" must be a map.",null))},
ES(a,b,c){if(typeof a=="string")return a
throw A.b(A.G('"'+c+'" at '+b+" must be a string.",null))},
im(){var s,r,q,p=$.Jk(),o=$.Jd()+1
$.Nb=o
s=B.a.iO(B.c.l3(o,36),8,"0")
r=J.FW(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.d8(36)]
return B.a.B(s+B.b.eD(r),0,15)},
Po(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
Pp(a,b){var s,r,q=A.l([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.push(A.Po(a[r],b))
return q},
q3(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.A(q)
if(r instanceof A.dq)throw q
else{s=r
r=A.cY("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
CX(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.aF(a,null)
if(t.f.b(s)){q=A.bm(s,t.N,t.X)
return q}return B.j}catch(p){r=A.A(p)
q=A.cY("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Ih(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.a9
try{s=B.h.aF(a,null)
if(t.j.b(s)){q=J.qa(s,t.N)
q=q.cH(q)
return q}return B.a9}catch(p){r=A.A(p)
q=A.cY("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Ig(a){var s,r,q,p,o=null
if(a==null)return B.r
A.H(a)
if(a.length===0)return B.r
s=B.h.aF(a,o)
if(!t.j.b(s))throw A.b(A.ac("expected a JSON array, got "+J.c9(s).m(0),o,o))
r=A.l([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.u(A.ac("dirty-field member is "+J.c9(p).m(0)+", expected String",o,o)))}return r},
fq(a){var s,r=J.J(a)
if(r.gG(a))return null
s=J.bK(r.gH(a).gaU())
if(A.a6(s))return s
if(typeof s=="string")return A.hc(s,null)
return null},
Ik(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.bX(B.w.y8(r*J.Js(d.$1(o),0.5,1.5)),0,0)},
Pk(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cv)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.ac("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ag(r)!==32)throw A.b(B.cu)
q=new Uint8Array(32)
for(p=J.J(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.a6(n)||n<0||n>255)throw A.b(A.ac("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.Fr(q)
p=$.DD()
if($.la()!==B.S)A.u(A.B("BigEndian systems are unsupported"))
return new A.qd(new A.lZ(12,32,m),new A.jU(new A.nH(A.Fr(q)),m),p)},
Pf(){var s=A.LD(),r=t.cj
new A.zz(s,B.bY,A.l([],t.az),A.t(t.S,t.lp),new A.js(A.E2(r)),new A.js(A.E2(r))).eB()},
Ib(){var s,r,q,p,o=null
try{o=A.Ep()}catch(s){if(t.mA.b(A.A(s))){r=$.Cl
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.Hp)){r=$.Cl
r.toString
return r}$.Hp=o
if($.Fe()===$.lc())r=$.Cl=o.am(".").m(0)
else{q=o.l2()
p=q.length-1
r=$.Cl=p===0?q:B.a.B(q,0,p)}return r},
In(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Ii(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.In(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.B(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Pa(a){var s,r,q,p
if(a.gl(0)===0)return!0
s=a.gH(0)
for(r=A.cG(a,1,null,a.$ti.i("a1.E")),q=r.$ti,r=new A.ar(r,r.gl(0),q.i("ar<a1.E>")),q=q.i("a1.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
Pr(a,b){var s=B.b.cc(a,null)
if(s<0)throw A.b(A.U(A.r(a)+" contains no null elements.",null))
a[s]=b},
Iz(a,b){var s=B.b.cc(a,b)
if(s<0)throw A.b(A.U(A.r(a)+" contains no elements matching "+b.m(0)+".",null))
a[s]=null},
OC(a,b){var s,r,q,p
for(s=new A.cv(a),r=t.E,s=new A.ar(s,s.gl(0),r.i("ar<M.E>")),r=r.i("M.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
D4(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cw(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.cc(a,b)
while(r!==-1){q=r===0?0:B.a.iC(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cw(a,b,r+1)}return null},
F0(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.cj(A.ec(r.b,p.sqlite3_errmsg(q),null),A.ec(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
Dz(a,b,c,d,e){throw A.b(A.F0(a.a,a.b,b,c,d,e))},
Fv(a){if(a.a2(0,$.IM())<0||a.a2(0,$.IL())>0)throw A.b(A.FK("BigInt value exceeds the range of 64 bits"))
return a},
L8(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ai(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.ec(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.GE(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
FR(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bF("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.d8(61)))
return s.charCodeAt(0)==0?s:s},
xR(a){var s=0,r=A.h(t.lo),q
var $async$xR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(a.arrayBuffer(),t.i),$async$xR)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xR,r)}},B={}
var w=[A,J,B]
var $={}
A.E0.prototype={}
J.mI.prototype={
P(a,b){return a===b},
gK(a){return A.eX(a)},
m(a){return"Instance of '"+A.nl(a)+"'"},
gan(a){return A.bU(A.EM(this))}}
J.mL.prototype={
m(a){return String(a)},
gK(a){return a?519018:218159},
gan(a){return A.bU(t.y)},
$ian:1,
$iP:1}
J.j7.prototype={
P(a,b){return null==b},
m(a){return"null"},
gK(a){return 0},
gan(a){return A.bU(t.P)},
$ian:1,
$iX:1}
J.aJ.prototype={$iN:1}
J.dT.prototype={
gK(a){return 0},
gan(a){return B.ec},
m(a){return String(a)}}
J.nj.prototype={}
J.e8.prototype={}
J.bZ.prototype={
m(a){var s=a[$.IP()]
if(s==null)s=a[$.fu()]
if(s==null)return this.po(a)
return"JavaScript function for "+J.Y(s)}}
J.bD.prototype={
gK(a){return 0},
m(a){return String(a)}}
J.fX.prototype={
gK(a){return 0},
m(a){return String(a)}}
J.z.prototype={
fo(a,b){return new A.bW(a,A.a2(a).i("@<1>").Z(b).i("bW<1,2>"))},
u(a,b){a.$flags&1&&A.K(a,29)
a.push(b)},
iX(a,b){var s
a.$flags&1&&A.K(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.xQ(b,null))
return a.splice(b,1)[0]},
aG(a,b,c){var s
a.$flags&1&&A.K(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.xQ(b,null))
a.splice(b,0,c)},
kL(a,b,c){var s,r
a.$flags&1&&A.K(a,"insertAll",2)
A.Gj(b,0,a.length,"index")
if(!t.O.b(c))c=J.JD(c)
s=J.ag(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.aA(a,b,r,c)},
kZ(a){a.$flags&1&&A.K(a,"removeLast",1)
if(a.length===0)throw A.b(A.CZ(a,-1))
return a.pop()},
F(a,b){var s
a.$flags&1&&A.K(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
tA(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.az(a))}q=p.length
if(q===o)return
this.sl(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dP(a,b){return new A.ap(a,b,A.a2(a).i("ap<1>"))},
D(a,b){var s
a.$flags&1&&A.K(a,"addAll",2)
if(Array.isArray(b)){this.pO(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
pO(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.az(a))
for(s=0;s<r;++s)a.push(b[s])},
ak(a){a.$flags&1&&A.K(a,"clear","clear")
a.length=0},
cF(a,b,c){return new A.Z(a,b,A.a2(a).i("@<1>").Z(c).i("Z<1,2>"))},
C(a,b){var s,r=A.a9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
eD(a){return this.C(a,"")},
cf(a,b){return A.cG(a,0,A.cq(b,"count",t.S),A.a2(a).c)},
ba(a,b){return A.cG(a,b,null,A.a2(a).c)},
cv(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.az(a))}if(c!=null)return c.$0()
throw A.b(A.au())},
kE(a,b){return this.cv(a,b,null)},
a4(a,b){return a[b]},
V(a,b,c){if(b<0||b>a.length)throw A.b(A.aA(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.aA(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a2(a))
return A.l(a.slice(b,c),A.a2(a))},
bi(a,b){return this.V(a,b,null)},
hb(a,b,c){A.bn(b,c,a.length)
return A.cG(a,b,c,A.a2(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.au())},
ga0(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.au())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.au())
throw A.b(A.j4())},
iY(a,b,c){a.$flags&1&&A.K(a,18)
A.bn(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.K(a,5)
A.bn(b,c,a.length)
s=c-b
if(s===0)return
A.b_(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.fx(d,e).bf(0,!1)
q=0}p=J.J(r)
if(q+s>p.gl(r))throw A.b(A.FU())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
bq(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.az(a))}return!1},
cu(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.az(a))}return!0},
cJ(a,b){var s,r,q,p,o
a.$flags&2&&A.K(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Nf()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a2(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eq(b,2))
if(p>0)this.tB(a,p)},
aj(a){return this.cJ(a,null)},
tB(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cc(a,b){var s,r=a.length
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
gG(a){return a.length===0},
gS(a){return a.length!==0},
m(a){return A.uj(a,"[","]")},
bf(a,b){var s=A.a2(a)
return b?A.l(a.slice(0),s):J.DY(a.slice(0),s.c)},
bU(a){return this.bf(a,!0)},
cH(a){return A.mW(a,A.a2(a).c)},
gt(a){return new J.fB(a,a.length,A.a2(a).i("fB<1>"))},
gK(a){return A.eX(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.K(a,"set length","change the length of")
if(b<0)throw A.b(A.aA(b,0,null,"newLength",null))
if(b>a.length)A.a2(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.CZ(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.K(a)
if(!(b>=0&&b<a.length))throw A.b(A.CZ(a,b))
a[b]=c},
nq(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gan(a){return A.bU(A.a2(a))},
$ibk:1,
$iL:1,
$io:1,
$iq:1}
J.mJ.prototype={
yj(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.nl(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ul.prototype={}
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
J.eM.prototype={
a2(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkP(b)
if(this.gkP(a)===s)return 0
if(this.gkP(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkP(a){return a===0?1/a<0:a<0},
h3(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.a3(""+a+".toInt()"))},
uS(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.a3(""+a+".ceil()"))},
wd(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.a3(""+a+".floor()"))},
y8(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.a3(""+a+".round()"))},
by(a,b,c){if(this.a2(b,c)>0)throw A.b(A.fo(b))
if(this.a2(a,b)<0)return b
if(this.a2(a,c)>0)return c
return a},
l3(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.aA(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.u(A.a3("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bu("0",q)},
m(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ao(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
jg(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mJ(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.mJ(a,b)},
mJ(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.a3("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bY(a,b){if(b<0)throw A.b(A.fo(b))
return b>31?0:a<<b>>>0},
tX(a,b){return b>31?0:a<<b>>>0},
dU(a,b){var s
if(b<0)throw A.b(A.fo(b))
if(a>0)s=this.kb(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ag(a,b){var s
if(a>0)s=this.kb(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mH(a,b){if(0>b)throw A.b(A.fo(b))
return this.kb(a,b)},
kb(a,b){return b>31?0:a>>>b},
oW(a,b){return a>b},
gan(a){return A.bU(t.cZ)},
$iay:1,
$iae:1,
$ib4:1}
J.j6.prototype={
gn5(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gan(a){return A.bU(t.S)},
$ian:1,
$ii:1}
J.mM.prototype={
gan(a){return A.bU(t.W)},
$ian:1}
J.dR.prototype={
kl(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.pC(b,a,c)},
i2(a,b){return this.kl(a,b,0)},
eG(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.hx(c,a)},
cb(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ac(a,r-s)},
l0(a,b,c){A.Gj(0,0,a.length,"startIndex")
return A.Px(a,b,c,0)},
dh(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.eN){s=b.e
s=!(s==null?b.e=b.qn():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.qz(a,b)}},
dL(a,b,c,d){var s=A.bn(b,c,a.length)
return A.IE(a,b,s,d)},
qz(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.DF(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
o=p.gR()
n=p.gO()
q=n-o
if(q===0&&r===o)continue
m.push(this.B(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ac(a,r))
return m},
af(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.af(a,b,0)},
B(a,b,c){return a.substring(b,A.bn(b,c,a.length))},
ac(a,b){return this.B(a,b,null)},
cg(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Kv(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.FY(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
yh(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.FY(r,s))},
bu(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.c_)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iO(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bu(c,s)+a},
xp(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bu(" ",s)},
cw(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cc(a,b){return this.cw(a,b,0)},
iC(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.aA(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
d6(a,b){return this.iC(a,b,null)},
E(a,b){return A.Pu(a,b,0)},
a2(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
m(a){return a},
gK(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gan(a){return A.bU(t.N)},
gl(a){return a.length},
$ibk:1,
$ian:1,
$iay:1,
$ij:1}
A.As.prototype={
u(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.J(b),i=j.gl(b)
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
iZ(){var s,r=this
if(r.a===0)return $.q7()
s=J.bV(B.f.gad(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.q7()
return s},
gl(a){return this.a}}
A.oT.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.bc(b))
this.b.push(s)
this.a=this.a+s.length},
iZ(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.q7()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.ak(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.p)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.aA(q,p,m,n)}l.a=0
B.b.ak(s)
return q},
gl(a){return this.a}}
A.ed.prototype={
gt(a){return new A.lG(J.E(this.gbo()),A.n(this).i("lG<1,2>"))},
gl(a){return J.ag(this.gbo())},
gG(a){return J.bs(this.gbo())},
gS(a){return J.da(this.gbo())},
ba(a,b){var s=A.n(this)
return A.fD(J.fx(this.gbo(),b),s.c,s.y[1])},
cf(a,b){var s=A.n(this)
return A.fD(J.lh(this.gbo(),b),s.c,s.y[1])},
a4(a,b){return A.n(this).y[1].a(J.lf(this.gbo(),b))},
gH(a){return A.n(this).y[1].a(J.bK(this.gbo()))},
ga0(a){return A.n(this).y[1].a(J.qb(this.gbo()))},
gap(a){return A.n(this).y[1].a(J.qc(this.gbo()))},
E(a,b){return J.DG(this.gbo(),b)},
m(a){return J.Y(this.gbo())}}
A.lG.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ey.prototype={
gbo(){return this.a}}
A.kk.prototype={$iL:1}
A.kh.prototype={
h(a,b){return this.$ti.y[1].a(J.Q(this.a,b))},
j(a,b,c){J.b1(this.a,b,this.$ti.c.a(c))},
sl(a,b){J.Jz(this.a,b)},
u(a,b){J.aO(this.a,this.$ti.c.a(b))},
cJ(a,b){var s=b==null?null:new A.A1(this,b)
J.Fp(this.a,s)},
hb(a,b,c){var s=this.$ti
return A.fD(J.Jv(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.JA(this.a,b,c,A.fD(d,s.y[1],s.c),e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)},
$iL:1,
$iq:1}
A.A1.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bW.prototype={
fo(a,b){return new A.bW(this.a,this.$ti.i("@<1>").Z(b).i("bW<1,2>"))},
gbo(){return this.a}}
A.ez.prototype={
cs(a,b,c){return new A.ez(this.a,this.$ti.i("@<1,2>").Z(b).Z(c).i("ez<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
F(a,b){return this.$ti.i("4?").a(this.a.F(0,b))},
a5(a,b){this.a.a5(0,new A.qF(this,b))},
gJ(){var s=this.$ti
return A.fD(this.a.gJ(),s.c,s.y[2])},
gaU(){var s=this.$ti
return A.fD(this.a.gaU(),s.y[1],s.y[3])},
gl(a){var s=this.a
return s.gl(s)},
gG(a){var s=this.a
return s.gG(s)},
gS(a){var s=this.a
return s.gS(s)},
ga3(){var s=this.a.ga3()
return s.cF(s,new A.qE(this),this.$ti.i("V<3,4>"))}}
A.qF.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.qE.prototype={
$1(a){var s=this.a.$ti
return new A.V(s.y[2].a(a.a),s.y[3].a(a.b),s.i("V<3,4>"))},
$S(){return this.a.$ti.i("V<3,4>(V<1,2>)")}}
A.dS.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.nu.prototype={
m(a){return"ReachabilityError: "+this.a}}
A.cv.prototype={
gl(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.Dj.prototype={
$0(){return A.be(null,t.H)},
$S:3}
A.y4.prototype={}
A.L.prototype={}
A.a1.prototype={
gt(a){var s=this
return new A.ar(s,s.gl(s),A.n(s).i("ar<a1.E>"))},
gG(a){return this.gl(this)===0},
gH(a){if(this.gl(this)===0)throw A.b(A.au())
return this.a4(0,0)},
ga0(a){var s=this
if(s.gl(s)===0)throw A.b(A.au())
return s.a4(0,s.gl(s)-1)},
gap(a){var s=this
if(s.gl(s)===0)throw A.b(A.au())
if(s.gl(s)>1)throw A.b(A.j4())
return s.a4(0,0)},
E(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(J.x(r.a4(0,s),b))return!0
if(q!==r.gl(r))throw A.b(A.az(r))}return!1},
cu(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(!b.$1(r.a4(0,s)))return!1
if(q!==r.gl(r))throw A.b(A.az(r))}return!0},
C(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a4(0,0))
if(o!==p.gl(p))throw A.b(A.az(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a4(0,q))
if(o!==p.gl(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a4(0,q))
if(o!==p.gl(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}},
eD(a){return this.C(0,"")},
dP(a,b){return this.pj(0,b)},
cF(a,b,c){return new A.Z(this,b,A.n(this).i("@<a1.E>").Z(c).i("Z<1,2>"))},
xW(a,b){var s,r,q=this,p=q.gl(q)
if(p===0)throw A.b(A.au())
s=q.a4(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a4(0,r))
if(p!==q.gl(q))throw A.b(A.az(q))}return s},
ba(a,b){return A.cG(this,b,null,A.n(this).i("a1.E"))},
cf(a,b){return A.cG(this,0,A.cq(b,"count",t.S),A.n(this).i("a1.E"))},
bf(a,b){var s=A.n(this).i("a1.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
bU(a){return this.bf(0,!0)}}
A.cF.prototype={
jh(a,b,c,d){var s,r=this.b
A.b_(r,"start")
s=this.c
if(s!=null){A.b_(s,"end")
if(r>s)throw A.b(A.aA(r,0,s,"start",null))}},
gqK(){var s=J.ag(this.a),r=this.c
if(r==null||r>s)return s
return r},
gu0(){var s=J.ag(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.ag(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a4(a,b){var s=this,r=s.gu0()+b
if(b<0||r>=s.gqK())throw A.b(A.mF(b,s.gl(0),s,null,"index"))
return J.lf(s.a,r)},
ba(a,b){var s,r,q=this
A.b_(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.eI(q.$ti.i("eI<1>"))
return A.cG(q.a,s,r,q.$ti.c)},
cf(a,b){var s,r,q,p=this
A.b_(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.cG(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.cG(p.a,r,q,p.$ti.c)}},
bf(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.J(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.uk(0,n):J.mK(0,n)}r=A.a9(s,m.a4(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a4(n,o+q)
if(m.gl(n)<l)throw A.b(A.az(p))}return r},
bU(a){return this.bf(0,!0)}}
A.ar.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.J(q),o=p.gl(q)
if(r.b!==o)throw A.b(A.az(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a4(q,s);++r.c
return!0}}
A.cx.prototype={
gt(a){return new A.mY(J.E(this.a),this.b,A.n(this).i("mY<1,2>"))},
gl(a){return J.ag(this.a)},
gG(a){return J.bs(this.a)},
gH(a){return this.b.$1(J.bK(this.a))},
ga0(a){return this.b.$1(J.qb(this.a))},
gap(a){return this.b.$1(J.qc(this.a))},
a4(a,b){return this.b.$1(J.lf(this.a,b))}}
A.eH.prototype={$iL:1}
A.mY.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.Z.prototype={
gl(a){return J.ag(this.a)},
a4(a,b){return this.b.$1(J.lf(this.a,b))}}
A.ap.prototype={
gt(a){return new A.d3(J.E(this.a),this.b,this.$ti.i("d3<1>"))},
cF(a,b,c){return new A.cx(this,b,this.$ti.i("@<1>").Z(c).i("cx<1,2>"))}}
A.d3.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iS.prototype={
gt(a){return new A.mc(J.E(this.a),this.b,B.aW,this.$ti.i("mc<1,2>"))}}
A.mc.prototype={
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
return new A.oc(s.gt(s),this.b,A.n(this).i("oc<1>"))}}
A.iO.prototype={
gl(a){var s=this.a,r=s.gl(s)
s=this.b
if(B.c.oW(r,s))return s
return r},
$iL:1}
A.oc.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.dn.prototype={
ba(a,b){A.dG(b,"count")
A.b_(b,"count")
return new A.dn(this.a,this.b+b,A.n(this).i("dn<1>"))},
gt(a){var s=this.a
return new A.nK(s.gt(s),this.b,A.n(this).i("nK<1>"))}}
A.fN.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
ba(a,b){A.dG(b,"count")
A.b_(b,"count")
return new A.fN(this.a,this.b+b,this.$ti)},
$iL:1}
A.nK.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.eI.prototype={
gt(a){return B.aW},
gG(a){return!0},
gl(a){return 0},
gH(a){throw A.b(A.au())},
ga0(a){throw A.b(A.au())},
gap(a){throw A.b(A.au())},
a4(a,b){throw A.b(A.aA(b,0,0,"index",null))},
E(a,b){return!1},
cu(a,b){return!0},
C(a,b){return""},
dP(a,b){return this},
cF(a,b,c){return new A.eI(c.i("eI<0>"))},
ba(a,b){A.b_(b,"count")
return this},
cf(a,b){A.b_(b,"count")
return this},
bf(a,b){var s=this.$ti.c
return b?J.uk(0,s):J.mK(0,s)},
bU(a){return this.bf(0,!0)},
cH(a){return A.vs(this.$ti.c)}}
A.m9.prototype={
k(){return!1},
gn(){throw A.b(A.au())}}
A.eb.prototype={
gt(a){return new A.oC(J.E(this.a),this.$ti.i("oC<1>"))}}
A.oC.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.de.prototype={
gl(a){return J.ag(this.a)},
gG(a){return J.bs(this.a)},
gS(a){return J.da(this.a)},
gH(a){return new A.a_(this.b,J.bK(this.a))},
gap(a){return new A.a_(this.b,J.qc(this.a))},
a4(a,b){return new A.a_(b+this.b,J.lf(this.a,b))},
E(a,b){var s,r,q,p=null,o=null,n=!1
if(t.fe.b(b)){s=b.a
if(A.a6(s)){A.ai(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){n=J.fx(this.a,p-this.b)
q=n.gt(n)
return q.k()&&J.x(q.gn(),o)}return!1},
cf(a,b){A.dG(b,"count")
A.b_(b,"count")
return new A.de(J.lh(this.a,b),this.b,A.n(this).i("de<1>"))},
ba(a,b){A.dG(b,"count")
A.b_(b,"count")
return new A.de(J.fx(this.a,b),b+this.b,A.n(this).i("de<1>"))},
gt(a){return new A.dQ(J.E(this.a),this.b,A.n(this).i("dQ<1>"))}}
A.eG.prototype={
ga0(a){var s,r=this.a,q=J.J(r),p=q.gl(r)
if(p<=0)throw A.b(A.au())
s=q.ga0(r)
if(p!==q.gl(r))throw A.b(A.az(this))
return new A.a_(p-1+this.b,s)},
E(a,b){var s,r,q,p,o=null,n=null,m=!1
if(t.fe.b(b)){s=b.a
if(A.a6(s)){A.ai(s)
r=b.b
m=s>=this.b
n=r
o=s}}if(m){q=o-this.b
m=this.a
p=J.J(m)
return q<p.gl(m)&&J.x(p.a4(m,q),n)}return!1},
cf(a,b){A.dG(b,"count")
A.b_(b,"count")
return new A.eG(J.lh(this.a,b),this.b,this.$ti)},
ba(a,b){A.dG(b,"count")
A.b_(b,"count")
return new A.eG(J.fx(this.a,b),this.b+b,this.$ti)},
$iL:1}
A.dQ.prototype={
k(){if(++this.c>=0&&this.a.k())return!0
this.c=-2
return!1},
gn(){var s=this.c
return s>=0?new A.a_(this.b+s,this.a.gn()):A.u(A.au())}}
A.iW.prototype={
sl(a,b){throw A.b(A.a3(u.O))},
u(a,b){throw A.b(A.a3("Cannot add to a fixed-length list"))}}
A.oo.prototype={
j(a,b,c){throw A.b(A.a3("Cannot modify an unmodifiable list"))},
sl(a,b){throw A.b(A.a3("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.a3("Cannot add to an unmodifiable list"))},
cJ(a,b){throw A.b(A.a3("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.a3("Cannot modify an unmodifiable list"))},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.hF.prototype={}
A.bG.prototype={
gl(a){return J.ag(this.a)},
a4(a,b){var s=this.a,r=J.J(s)
return r.a4(s,r.gl(s)-1-b)}}
A.k2.prototype={
gK(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gK(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.k2&&this.a===b.a}}
A.kS.prototype={}
A.a_.prototype={$r:"+(1,2)",$s:1}
A.kA.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.po.prototype={$r:"+blobs,rows(1,2)",$s:3}
A.kB.prototype={$r:"+controller,sync(1,2)",$s:4}
A.i1.prototype={$r:"+file,outFlags(1,2)",$s:5}
A.pp.prototype={$r:"+result,resultCode(1,2)",$s:7}
A.ej.prototype={$r:"+(1,2,3)",$s:8}
A.fh.prototype={$r:"+(1,2,3,4)",$s:9}
A.pq.prototype={$r:"+blocked,conflicts,hidden,pending,quarantineError,quarantined(1,2,3,4,5,6)",$s:10}
A.iK.prototype={}
A.fJ.prototype={
cs(a,b,c){var s=A.n(this)
return A.G1(this,s.c,s.y[1],b,c)},
gG(a){return this.gl(this)===0},
gS(a){return this.gl(this)!==0},
m(a){return A.vN(this)},
j(a,b,c){A.FF()},
F(a,b){A.FF()},
ga3(){return new A.i6(this.vZ(),A.n(this).i("i6<V<1,2>>"))},
vZ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ga3(a,b,c){if(b===1){p.push(c)
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
this.a5(0,new A.rk(this,b,s))
return s},
$iF:1}
A.rk.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aE.prototype={
gl(a){return this.b.length},
gma(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a5(a,b){var s,r,q=this.gma(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gJ(){return new A.fe(this.gma(),this.$ti.i("fe<1>"))},
gaU(){return new A.fe(this.b,this.$ti.i("fe<2>"))}}
A.fe.prototype={
gl(a){return this.a.length},
gG(a){return 0===this.a.length},
gS(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hY(s,s.length,this.$ti.i("hY<1>"))}}
A.hY.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.j_.prototype={
e6(){var s=this,r=s.$map
if(r==null){r=new A.j8(s.$ti.i("j8<1,2>"))
A.Il(s.a,r)
s.$map=r}return r},
I(a){return this.e6().I(a)},
h(a,b){return this.e6().h(0,b)},
a5(a,b){this.e6().a5(0,b)},
gJ(){var s=this.e6()
return new A.T(s,A.n(s).i("T<1>"))},
gaU(){var s=this.e6()
return new A.av(s,A.n(s).i("av<2>"))},
gl(a){return this.e6().a}}
A.iL.prototype={
u(a,b){A.JY()}}
A.dJ.prototype={
gl(a){return this.b},
gG(a){return this.b===0},
gS(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hY(s,s.length,r.$ti.i("hY<1>"))},
E(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
cH(a){return A.c0(this,this.$ti.c)}}
A.ue.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.j3&&this.a.P(0,b.a)&&A.F4(this)===A.F4(b)},
gK(a){return A.ch(this.a,A.F4(this),B.d,B.d,B.d,B.d,B.d)},
m(a){var s=B.b.C([A.bU(this.$ti.c)],", ")
return this.a.m(0)+" with "+("<"+s+">")}}
A.j3.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.P9(A.q1(this.a),this.$ti)}}
A.x7.prototype={
$0(){return B.w.wd(1000*this.a.now())},
$S:10}
A.jQ.prototype={}
A.yS.prototype={
cd(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.jz.prototype={
m(a){return"Null check operator used on a null value"}}
A.mN.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.on.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.nc.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iI:1}
A.iQ.prototype={}
A.kD.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaM:1}
A.eB.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.IK(r==null?"unknown":r)+"'"},
gan(a){var s=A.q1(this)
return A.bU(s==null?A.bq(this):s)},
gzn(){return this},
$C:"$1",
$R:1,
$D:null}
A.qK.prototype={$C:"$0",$R:0}
A.qL.prototype={$C:"$2",$R:2}
A.yG.prototype={}
A.yf.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.IK(s)+"'"}}
A.iB.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.iB))return!1
return this.$_target===b.$_target&&this.a===b.a},
gK(a){return(A.l6(this.a)^A.eX(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.nl(this.a)+"'")}}
A.nD.prototype={
m(a){return"RuntimeError: "+this.a}}
A.bO.prototype={
gl(a){return this.a},
gG(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.T(this,A.n(this).i("T<1>"))},
gaU(){return new A.av(this,A.n(this).i("av<2>"))},
ga3(){return new A.aK(this,A.n(this).i("aK<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ns(a)},
ns(a){var s=this.d
if(s==null)return!1
return this.dG(this.m5(s,a),a)>=0},
D(a,b){b.a5(0,new A.um(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nt(b)},
nt(a){var s,r,q=this.d
if(q==null)return null
s=this.m5(q,a)
r=this.dG(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.lu(s==null?q.b=q.jV():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.lu(r==null?q.c=q.jV():r,b,c)}else q.nv(b,c)},
nv(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jV()
s=p.eC(a)
r=o[s]
if(r==null)o[s]=[p.jj(a,b)]
else{q=p.dG(r,a)
if(q>=0)r[q].b=b
else r.push(p.jj(a,b))}},
nK(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
F(a,b){var s=this
if(typeof b=="string")return s.mw(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.mw(s.c,b)
else return s.nu(b)},
nu(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eC(a)
r=n[s]
q=o.dG(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mP(p)
if(r.length===0)delete n[s]
return p.b},
ak(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ji()}},
a5(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.az(s))
r=r.c}},
lu(a,b,c){var s=a[b]
if(s==null)a[b]=this.jj(b,c)
else s.b=c},
mw(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mP(s)
delete a[b]
return s.b},
ji(){this.r=this.r+1&1073741823},
jj(a,b){var s,r=this,q=new A.vq(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ji()
return q},
mP(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ji()},
eC(a){return J.ab(a)&1073741823},
m5(a,b){return a[this.eC(b)]},
dG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
m(a){return A.vN(this)},
jV(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.um.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.vq.prototype={}
A.T.prototype={
gl(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bl(s,s.r,s.e,this.$ti.i("bl<1>"))},
E(a,b){return this.a.I(b)}}
A.bl.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.av.prototype={
gl(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var s=this.a
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
A.aK.prototype={
gl(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var s=this.a
return new A.mV(s,s.r,s.e,this.$ti.i("mV<1,2>"))}}
A.mV.prototype={
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
A.j9.prototype={
eC(a){return A.l6(a)&1073741823},
dG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.j8.prototype={
eC(a){return A.Ou(a)&1073741823},
dG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.Dd.prototype={
$1(a){return this.a(a)},
$S:41}
A.De.prototype={
$2(a,b){return this.a(a,b)},
$S:228}
A.Df.prototype={
$1(a){return this.a(a)},
$S:72}
A.i0.prototype={
gan(a){return A.bU(this.m6())},
m6(){return A.OS(this.$r,this.hz())},
m(a){return this.mN(!1)},
mN(a){var s,r,q,p,o,n=this.qU(),m=this.hz(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Ge(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qU(){var s,r=this.$s
while($.Bn.length<=r)$.Bn.push(null)
s=$.Bn[r]
if(s==null){s=this.qm()
$.Bn[r]=s}return s},
qm(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.FW(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fY(j,k)}}
A.pl.prototype={
hz(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.pl&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gK(a){return A.ch(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.pm.prototype={
hz(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.pm&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gK(a){var s=this
return A.ch(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.pn.prototype={
hz(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.pn&&this.$s===b.$s&&A.Mg(this.a,b.a)},
gK(a){return A.ch(this.$s,A.wg(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eN.prototype={
m(a){return"RegExp/"+this.a+"/"+this.b.flags},
gmg(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.E_(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
grE(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.E_(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
qn(){var s,r=this.a
if(!B.a.E(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ez(a){var s=this.b.exec(a)
if(s==null)return null
return new A.i_(s)},
kl(a,b,c){var s=b.length
if(c>s)throw A.b(A.aA(c,0,s,null,null))
return new A.oK(this,b,c)},
i2(a,b){return this.kl(0,b,0)},
qR(a,b){var s,r=this.gmg()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.i_(s)},
qQ(a,b){var s,r=this.grE()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.i_(s)},
eG(a,b,c){if(c<0||c>b.length)throw A.b(A.aA(c,0,b.length,null,null))
return this.qQ(b,c)}}
A.i_.prototype={
gR(){return this.b.index},
gO(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieS:1,
$inv:1}
A.oK.prototype={
gt(a){return new A.oL(this.a,this.b,this.c)}}
A.oL.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.qR(l,s)
if(p!=null){m.d=p
o=p.gO()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.hx.prototype={
gO(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.xQ(b,null))
return this.c},
$ieS:1,
gR(){return this.a}}
A.pC.prototype={
gt(a){return new A.BJ(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hx(r,s)
throw A.b(A.au())}}
A.BJ.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hx(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.oU.prototype={
aE(){var s=this.b
if(s===this)throw A.b(new A.dS("Local '"+this.a+"' has not been initialized."))
return s},
bI(){var s=this.b
if(s===this)throw A.b(A.G0(this.a))
return s},
sil(a){var s=this
if(s.b!==s)throw A.b(new A.dS("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.h6.prototype={
gan(a){return B.e4},
i4(a,b,c){A.id(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
n2(a){return this.i4(a,0,null)},
n1(a,b,c){A.id(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
i3(a,b,c){A.id(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
n0(a){return this.i3(a,0,null)},
$ian:1,
$iex:1}
A.h5.prototype={$ih5:1}
A.ju.prototype={
gad(a){if(((a.$flags|0)&2)!==0)return new A.pK(a.buffer)
else return a.buffer},
rs(a,b,c,d){var s=A.aA(b,0,c,d,null)
throw A.b(s)},
lF(a,b,c,d){if(b>>>0!==b||b>c)this.rs(a,b,c,d)}}
A.pK.prototype={
i4(a,b,c){var s=A.c2(this.a,b,c)
s.$flags=3
return s},
n2(a){return this.i4(0,0,null)},
n1(a,b,c){var s=A.G7(this.a,b,c)
s.$flags=3
return s},
i3(a,b,c){var s=A.G6(this.a,b,c)
s.$flags=3
return s},
n0(a){return this.i3(0,0,null)},
$iex:1}
A.jt.prototype={
gan(a){return B.e5},
$ian:1,
$iDI:1}
A.h7.prototype={
gl(a){return a.length},
mG(a,b,c,d,e){var s,r,q=a.length
this.lF(a,b,q,"start")
this.lF(a,c,q,"end")
if(b>c)throw A.b(A.aA(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.U(e,null))
r=d.length
if(r-e<s)throw A.b(A.B("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibk:1,
$ic_:1}
A.dZ.prototype={
h(a,b){A.dB(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.K(a)
A.dB(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.K(a,5)
if(t.dQ.b(d)){this.mG(a,b,c,d,e)
return}this.lr(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$iq:1}
A.c1.prototype={
j(a,b,c){a.$flags&2&&A.K(a)
A.dB(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.K(a,5)
if(t.aj.b(d)){this.mG(a,b,c,d,e)
return}this.lr(a,b,c,d,e)},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
$iL:1,
$io:1,
$iq:1}
A.n5.prototype={
gan(a){return B.e7},
V(a,b,c){return new Float32Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$itA:1}
A.n6.prototype={
gan(a){return B.e8},
V(a,b,c){return new Float64Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$itB:1}
A.n7.prototype={
gan(a){return B.e9},
h(a,b){A.dB(b,a,a.length)
return a[b]},
V(a,b,c){return new Int16Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$iuf:1}
A.n8.prototype={
gan(a){return B.ea},
h(a,b){A.dB(b,a,a.length)
return a[b]},
V(a,b,c){return new Int32Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$iug:1}
A.n9.prototype={
gan(a){return B.eb},
h(a,b){A.dB(b,a,a.length)
return a[b]},
V(a,b,c){return new Int8Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$iuh:1}
A.jv.prototype={
gan(a){return B.eh},
h(a,b){A.dB(b,a,a.length)
return a[b]},
V(a,b,c){return new Uint16Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$iyU:1}
A.jw.prototype={
gan(a){return B.ei},
h(a,b){A.dB(b,a,a.length)
return a[b]},
V(a,b,c){return new Uint32Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$iyV:1}
A.jx.prototype={
gan(a){return B.ej},
gl(a){return a.length},
h(a,b){A.dB(b,a,a.length)
return a[b]},
V(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$iyW:1}
A.eU.prototype={
gan(a){return B.ek},
gl(a){return a.length},
h(a,b){A.dB(b,a,a.length)
return a[b]},
V(a,b,c){return new Uint8Array(a.subarray(b,A.d7(b,c,a.length)))},
bi(a,b){return this.V(a,b,null)},
$ian:1,
$ieU:1,
$id0:1}
A.kw.prototype={}
A.kx.prototype={}
A.ky.prototype={}
A.kz.prototype={}
A.cB.prototype={
i(a){return A.kM(v.typeUniverse,this,a)},
Z(a){return A.H4(v.typeUniverse,this,a)}}
A.p8.prototype={}
A.pH.prototype={
m(a){return A.c7(this.a,null)}}
A.p5.prototype={
m(a){return this.a}}
A.kI.prototype={$idu:1}
A.zK.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:28}
A.zJ.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:212}
A.zL.prototype={
$0(){this.a.$0()},
$S:2}
A.zM.prototype={
$0(){this.a.$0()},
$S:2}
A.kH.prototype={
pJ(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.eq(new A.BN(this,b),0),a)
else throw A.b(A.a3("`setTimeout()` not found."))},
pK(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.eq(new A.BM(this,a,Date.now(),b),0),a)
else throw A.b(A.a3("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.a3("Canceling a timer."))},
$ids:1}
A.BN.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.BM.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.jg(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.ka.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aN(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.lE(a)
else s.dk(a)}},
bA(a,b){var s
if(b==null)b=A.ix(a)
s=this.a
if(this.b)s.aq(new A.aq(a,b))
else s.cM(new A.aq(a,b))},
aY(a){return this.bA(a,null)},
$iiH:1}
A.Ce.prototype={
$1(a){return this.a.$2(0,a)},
$S:27}
A.Cf.prototype={
$2(a,b){this.a.$2(1,new A.iQ(a,b))},
$S:87}
A.CI.prototype={
$2(a,b){this.a(a,b)},
$S:103}
A.Cc.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaX().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.Cd.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:28}
A.oN.prototype={
pF(a,b){var s=new A.zO(a)
this.a=A.nU(new A.zQ(this,a),new A.zR(s),null,new A.zS(this,s),!1,b)}}
A.zO.prototype={
$0(){A.l9(new A.zP(this.a))},
$S:2}
A.zP.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.zR.prototype={
$0(){this.a.$0()},
$S:0}
A.zS.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.zQ.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.w($.D,t._)
if(s.b){s.b=!1
A.l9(new A.zN(this.b))}return s.c}},
$S:132}
A.zN.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.ks.prototype={
m(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.pE.prototype={
gn(){return this.b},
tC(a,b){var s,r,q
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
o.d=null}q=o.tC(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.GZ
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.GZ
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.B("sync*"))}return!1},
zo(a){var s,r,q=this
if(a instanceof A.i6){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.i6.prototype={
gt(a){return new A.pE(this.a(),this.$ti.i("pE<1>"))}}
A.aq.prototype={
m(a){return A.r(this.a)},
$iaj:1,
gcK(){return this.b}}
A.b0.prototype={}
A.f8.prototype={
c3(){},
c4(){}}
A.kg.prototype={
gcL(){return new A.b0(this,A.n(this).i("b0<1>"))},
giB(){return(this.c&4)!==0},
gjT(){return this.c<4},
tz(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
kc(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.GR(c,A.n(j).c)
s=A.n(j)
r=$.D
q=d?1:0
p=b!=null?32:0
o=A.oR(r,a,s.c)
n=A.zZ(r,b)
m=c==null?A.CK():c
l=new A.f8(j,o,n,r.ce(m,t.H),r,q|p,s.i("f8<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pY(j.a)
return l},
mq(a){var s,r=this
A.n(r).i("f8<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.tz(a)
if((r.c&2)===0&&r.d==null)r.q8()}return null},
mr(a){},
ms(a){},
jl(){if((this.c&4)!==0)return new A.bw("Cannot add new events after calling close")
return new A.bw("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjT())throw A.b(this.jl())
this.cT(b)},
bp(a,b){var s
if(!this.gjT())throw A.b(this.jl())
s=A.fl(a,b)
this.cU(s.a,s.b)},
kk(a){return this.bp(a,null)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjT())throw A.b(q.jl())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.D,t.D)
q.dw()
return r},
aM(a,b){this.cU(a,b)},
b1(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aN(null)},
q8(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aN(null)}A.pY(this.b)},
$ibN:1}
A.kb.prototype={
cT(a){var s,r
for(s=this.d,r=this.$ti.i("cl<1>");s!=null;s=s.ch)s.ck(new A.cl(a,r))},
cU(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.ck(new A.hT(a,b))},
dw(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.ck(B.ag)
else this.r.aN(null)}}
A.tK.prototype={
$0(){this.c.a(null)
this.b.cN(null)},
$S:0}
A.tM.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.aq(new A.aq(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.aq(new A.aq(q,r))}},
$S:14}
A.tL.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.b1(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aO(s,n)}m.c.dk(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.aq(new A.aq(s,l))}},
$S(){return this.d.i("X(0)")}}
A.tF.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(k,aM)")}}
A.od.prototype={
m(a){var s=this.b.m(0)
return"TimeoutException after "+s+": "+this.a},
$iI:1}
A.tG.prototype={
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
l.a.aY(new A.jD(B.b.kE(s,A.O5()),a,q.i("jD<q<0?>,q<aq?>>")))}},
$S:9}
A.jD.prototype={
m(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcK(){var s=this.c
s=s==null?null:s.b
return s==null?A.aj.prototype.gcK.call(this):s}}
A.kq.prototype={
uj(a){this.a.b6(new A.AJ(this,a),new A.AK(this,a),t.P)}}
A.AJ.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("X(1)")}}
A.AK.prototype={
$2(a,b){this.a.c=new A.aq(a,b)
this.b.$1(1)},
$S:6}
A.AI.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.f9.prototype={
bA(a,b){if((this.a.a&30)!==0)throw A.b(A.B("Future already completed"))
this.aq(A.fl(a,b))},
aY(a){return this.bA(a,null)},
$iiH:1}
A.aG.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.B("Future already completed"))
s.aN(a)},
al(){return this.aB(null)},
aq(a){this.a.cM(a)}}
A.as.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.B("Future already completed"))
s.cN(a)},
al(){return this.aB(null)},
aq(a){this.a.aq(a)}}
A.cm.prototype={
x8(a){if((this.c&15)!==6)return!0
return this.b.b.eQ(this.d,a.a,t.y,t.K)},
wr(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.l1(r,n,a.b,p,o,t.l)
else q=m.eQ(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.A(s))){if((this.c&1)!==0)throw A.b(A.U("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.U("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
b6(a,b,c){var s,r,q=$.D
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aD(b,"onError",u.w))}else{a=q.dK(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.HE(b,q)}s=new A.w($.D,c.i("w<0>"))
r=b==null?1:3
this.dY(new A.cm(s,r,a,b,this.$ti.i("@<1>").Z(c).i("cm<1,2>")))
return s},
U(a,b){return this.b6(a,null,b)},
mL(a,b,c){var s=new A.w($.D,c.i("w<0>"))
this.dY(new A.cm(s,19,a,b,this.$ti.i("@<1>").Z(c).i("cm<1,2>")))
return s},
ko(a){var s=this.$ti,r=$.D,q=new A.w(r,s)
if(r!==B.i)a=A.HE(a,r)
this.dY(new A.cm(q,2,null,a,s.i("cm<1,1>")))
return q},
b8(a){var s=this.$ti,r=$.D,q=new A.w(r,s)
if(r!==B.i)a=r.ce(a,t.z)
this.dY(new A.cm(q,8,a,null,s.i("cm<1,1>")))
return q},
tR(a){this.a=this.a&1|16
this.c=a},
hm(a){this.a=a.a&30|this.a&1
this.c=a.c},
dY(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dY(a)
return}s.hm(r)}s.b.df(new A.AL(s,a))}},
mn(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.mn(a)
return}n.hm(s)}m.a=n.hM(a)
n.b.df(new A.AQ(m,n))}},
fe(){var s=this.c
this.c=null
return this.hM(s)},
hM(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cN(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.AO(a,r,!0)
else{s=r.fe()
r.a=8
r.c=a
A.fc(r,s)}},
dk(a){var s=this,r=s.fe()
s.a=8
s.c=a
A.fc(s,r)},
ql(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gct()===r.gct())}else s=!1
if(s)return
q=p.fe()
p.hm(a)
A.fc(p,q)},
aq(a){var s=this.fe()
this.tR(a)
A.fc(this,s)},
qk(a,b){this.aq(new A.aq(a,b))},
aN(a){if(this.$ti.i("y<1>").b(a)){this.lE(a)
return}this.lB(a)},
lB(a){this.a^=2
this.b.df(new A.AN(this,a))},
lE(a){A.AO(a,this,!1)
return},
cM(a){this.a^=2
this.b.df(new A.AM(this,a))},
h2(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.D,r.$ti)
q.aN(r)
return q}s=new A.w($.D,r.$ti)
q.a=null
q.a=A.c4(a,new A.AW(s,a))
r.b6(new A.AX(q,r,s),new A.AY(q,s),t.P)
return s},
$iy:1}
A.AL.prototype={
$0(){A.fc(this.a,this.b)},
$S:0}
A.AQ.prototype={
$0(){A.fc(this.b,this.a.a)},
$S:0}
A.AP.prototype={
$0(){A.AO(this.a.a,this.b,!0)},
$S:0}
A.AN.prototype={
$0(){this.a.dk(this.b)},
$S:0}
A.AM.prototype={
$0(){this.a.aq(this.b)},
$S:0}
A.AT.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b5(q.d,t.z)}catch(p){s=A.A(p)
r=A.af(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ix(q)
n=k.a
n.c=new A.aq(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.b6(new A.AU(l,m),new A.AV(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.AU.prototype={
$1(a){this.a.ql(this.b)},
$S:28}
A.AV.prototype={
$2(a,b){this.a.aq(new A.aq(a,b))},
$S:6}
A.AS.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.eQ(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.A(n)
r=A.af(n)
q=s
p=r
if(p==null)p=A.ix(q)
o=this.a
o.c=new A.aq(q,p)
o.b=!0}},
$S:0}
A.AR.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.x8(s)&&p.a.e!=null){p.c=p.a.wr(s)
p.b=!1}}catch(o){r=A.A(o)
q=A.af(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ix(p)
m=l.b
m.c=new A.aq(p,n)
p=m}p.b=!0}},
$S:0}
A.AW.prototype={
$0(){var s=A.Eh()
this.a.aq(new A.aq(new A.od("Future not completed",this.b),s))},
$S:0}
A.AX.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.dk(a)}},
$S(){return this.b.$ti.i("X(1)")}}
A.AY.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.aq(new A.aq(a,b))}},
$S:6}
A.oM.prototype={}
A.ad.prototype={
eD(a){var s=new A.w($.D,t.os),r=new A.a7(""),q=this.aa(null,!0,new A.yj(s,r),s.gjs())
q.iL(new A.yk(this,r,q,s))
return s},
gl(a){var s={},r=new A.w($.D,t.hy)
s.a=0
this.aa(new A.yl(s,this),!0,new A.ym(s,r),r.gjs())
return r},
gH(a){var s=new A.w($.D,A.n(this).i("w<ad.T>")),r=this.aa(null,!0,new A.yh(s),s.gjs())
r.iL(new A.yi(this,r,s))
return s}}
A.yj.prototype={
$0(){var s=this.b.a
this.a.cN(s.charCodeAt(0)==0?s:s)},
$S:0}
A.yk.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.A(o)
r=A.af(o)
q=s
p=r
n=A.kT(q,p)
if(n==null)q=new A.aq(q,p)
else q=n
A.MN(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(ad.T)")}}
A.yl.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(ad.T)")}}
A.ym.prototype={
$0(){this.b.cN(this.a.a)},
$S:0}
A.yh.prototype={
$0(){var s,r=A.Eh(),q=new A.bw("No element")
A.nn(q,r)
s=A.kT(q,r)
if(s==null)s=new A.aq(q,r)
this.a.aq(s)},
$S:0}
A.yi.prototype={
$1(a){A.MO(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(ad.T)")}}
A.k_.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bC(a,b,c){return this.aa(a,null,b,c)},
b2(a){return this.aa(a,null,null,null)}}
A.ek.prototype={
gcL(){return new A.bi(this,A.n(this).i("bi<1>"))},
giB(){return(this.b&4)!==0},
gt2(){if((this.b&8)===0)return this.a
return this.a.c},
hr(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.ei(A.n(q).i("ei<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.ei(A.n(q).i("ei<1>")):s},
gaX(){var s=this.a
return(this.b&8)!==0?s.c:s},
c_(){if((this.b&4)!==0)return new A.bw("Cannot add event after closing")
return new A.bw("Cannot add event while adding a stream")},
uD(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.c_())
if((o&2)!==0){o=new A.w($.D,t._)
o.aN(null)
return o}o=p.a
s=b===!0
r=new A.w($.D,t._)
q=s?A.LE(p):p.gpP()
q=a.aa(p.gpV(),s,p.gqb(),q)
s=p.b
if((s&1)!==0?(p.gaX().e&4)!==0:(s&2)===0)q.bc()
p.a=new A.kE(o,r,q,A.n(p).i("kE<1>"))
p.b|=8
return r},
lX(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.et():new A.w($.D,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.c_())
this.aD(b)},
bp(a,b){var s
if(this.b>=4)throw A.b(this.c_())
s=A.fl(a,b)
this.aM(s.a,s.b)},
kk(a){return this.bp(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lX()
if(r>=4)throw A.b(s.c_())
s.lG()
return s.lX()},
lG(){var s=this.b|=4
if((s&1)!==0)this.dw()
else if((s&3)===0)this.hr().u(0,B.ag)},
aD(a){var s=this,r=s.b
if((r&1)!==0)s.cT(a)
else if((r&3)===0)s.hr().u(0,new A.cl(a,A.n(s).i("cl<1>")))},
aM(a,b){var s=this.b
if((s&1)!==0)this.cU(a,b)
else if((s&3)===0)this.hr().u(0,new A.hT(a,b))},
b1(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aN(null)},
kc(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.B("Stream has already been listened to."))
s=A.LW(p,a,b,c,d,A.n(p).c)
r=p.gt2()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b3()}else p.a=s
s.tS(r)
s.jG(new A.BF(p))
return s},
mq(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.A(o)
p=A.af(o)
n=new A.w($.D,t.D)
n.cM(new A.aq(q,p))
k=n}else k=k.b8(s)
m=new A.BE(l)
if(k!=null)k=k.b8(m)
else m.$0()
return k},
mr(a){if((this.b&8)!==0)this.a.b.bc()
A.pY(this.e)},
ms(a){if((this.b&8)!==0)this.a.b.b3()
A.pY(this.f)},
$ibN:1}
A.BF.prototype={
$0(){A.pY(this.a.d)},
$S:0}
A.BE.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aN(null)},
$S:0}
A.pF.prototype={
cT(a){this.gaX().aD(a)},
cU(a,b){this.gaX().aM(a,b)},
dw(){this.gaX().b1()}}
A.kc.prototype={
cT(a){this.gaX().ck(new A.cl(a,A.n(this).i("cl<1>")))},
cU(a,b){this.gaX().ck(new A.hT(a,b))},
dw(){this.gaX().ck(B.ag)}}
A.d4.prototype={}
A.i7.prototype={}
A.bi.prototype={
gK(a){return(A.eX(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bi&&b.a===this.a}}
A.ee.prototype={
hE(){return this.w.mq(this)},
c3(){this.w.mr(this)},
c4(){this.w.ms(this)}}
A.oJ.prototype={
A(){var s=this.b.A()
return s.b8(new A.zF(this))}}
A.zG.prototype={
$2(a,b){var s=this.a
s.aM(a,b)
s.b1()},
$S:6}
A.zF.prototype={
$0(){this.a.a.aN(null)},
$S:2}
A.kE.prototype={}
A.bb.prototype={
tS(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.hc(s)}},
iL(a){this.a=A.oR(this.d,a,A.n(this).i("bb.T"))},
bc(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jG(q.gf6())},
b3(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.hc(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jG(s.gf7())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.jo()
r=s.f
return r==null?$.et():r},
jo(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hE()},
aD(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cT(a)
else s.ck(new A.cl(a,A.n(s).i("cl<bb.T>")))},
aM(a,b){var s
if(t.C.b(a))A.nn(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cU(a,b)
else this.ck(new A.hT(a,b))},
b1(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.dw()
else s.ck(B.ag)},
c3(){},
c4(){},
hE(){return null},
ck(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.ei(A.n(r).i("ei<bb.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.hc(r)}},
cT(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.h1(s.a,a,A.n(s).i("bb.T"))
s.e=(s.e&4294967231)>>>0
s.jq((r&4)!==0)},
cU(a,b){var s,r=this,q=r.e,p=new A.A0(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.jo()
s=r.f
if(s!=null&&s!==$.et())s.b8(p)
else p.$0()}else{p.$0()
r.jq((q&4)!==0)}},
dw(){var s,r=this,q=new A.A_(r)
r.jo()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.et())s.b8(q)
else q.$0()},
jG(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.jq((r&4)!==0)},
jq(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.c3()
else q.c4()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.hc(q)},
$ibx:1}
A.A0.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nT(s,o,this.c,r,t.l)
else q.h1(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.A_.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.h0(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.i5.prototype={
aa(a,b,c,d){return this.a.kc(a,d,c,b===!0)},
bC(a,b,c){return this.aa(a,null,b,c)},
b2(a){return this.aa(a,null,null,null)},
nz(a,b){return this.aa(a,null,null,b)}}
A.p4.prototype={
geH(){return this.a},
seH(a){return this.a=a}}
A.cl.prototype={
kX(a){a.cT(this.b)}}
A.hT.prototype={
kX(a){a.cU(this.b,this.c)}}
A.AB.prototype={
kX(a){a.dw()},
geH(){return null},
seH(a){throw A.b(A.B("No events after a done."))}}
A.ei.prototype={
hc(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.l9(new A.Bm(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.seH(b)
s.c=b}}}
A.Bm.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.geH()
q.b=r
if(r==null)q.c=null
s.kX(this.b)},
$S:0}
A.hU.prototype={
iL(a){},
bc(){var s=this.a
if(s>=0)this.a=s+2},
b3(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.l9(s.gmj())}else s.a=r},
A(){this.a=-1
this.c=null
return $.et()},
rS(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.h0(s)}}else r.a=q},
$ibx:1}
A.c5.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.D,t.g5)
r.b=s
r.c=!1
q.b3()
return s}throw A.b(A.B("Already waiting for next."))}return r.rr()},
rr(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.D,t.g5)
q.b=s
r=p.aa(q.grK(),!0,q.grM(),q.grO())
if(q.b!=null)q.a=r
return s}return $.IQ()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aN(!1)
else s.c=!1
return r.A()}return $.et()},
rL(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cN(!0)
if(q.c){r=q.a
if(r!=null)r.bc()}},
rP(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.aq(new A.aq(a,b))
else q.cM(new A.aq(a,b))},
rN(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.dk(!1)
else q.lB(!1)}}
A.kl.prototype={
aa(a,b,c,d){return A.GR(c,this.$ti.c)},
bC(a,b,c){return this.aa(a,null,b,c)}}
A.dz.prototype={
aa(a,b,c,d){var s=null,r=new A.kv(s,s,s,s,this.$ti.i("kv<1>"))
r.d=new A.Bk(this,r)
return r.kc(a,d,c,b===!0)},
bC(a,b,c){return this.aa(a,null,b,c)},
b2(a){return this.aa(a,null,null,null)}}
A.Bk.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.kv.prototype={
uE(a){var s=this.b
if(s>=4)throw A.b(this.c_())
if((s&1)!==0)this.gaX().aD(a)},
uV(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.c_())
r|=4
s.b=r
if((r&1)!==0)s.gaX().b1()},
gcL(){throw A.b(A.a3("Not available"))},
$idX:1}
A.Ch.prototype={
$0(){return this.a.aq(this.b)},
$S:0}
A.Ci.prototype={
$0(){return this.a.cN(this.b)},
$S:0}
A.ko.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.D,q=b===!0?1:0,p=d!=null?32:0,o=A.oR(r,a,s.y[1]),n=A.zZ(r,d),m=c==null?A.CK():c
s=new A.hX(this,o,n,r.ce(m,t.H),r,q|p,s.i("hX<1,2>"))
s.x=this.a.bC(s.gjH(),s.gjJ(),s.gjL())
return s},
bC(a,b,c){return this.aa(a,null,b,c)}}
A.hX.prototype={
aD(a){if((this.e&2)!==0)return
this.jf(a)},
aM(a,b){if((this.e&2)!==0)return
this.ls(a,b)},
c3(){var s=this.x
if(s!=null)s.bc()},
c4(){var s=this.x
if(s!=null)s.b3()},
hE(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jI(a){this.w.rd(a,this)},
jM(a,b){this.aM(a,b)},
jK(){this.b1()}}
A.ff.prototype={
rd(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.A(q)
r=A.af(q)
p=s
o=r
n=A.kT(p,o)
if(n!=null){p=n.a
o=n.b}b.aM(p,o)
return}b.aD(m)}}
A.km.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.u(A.B("Stream is already closed"))
s.jf(b)},
bp(a,b){this.a.aM(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.u(A.B("Stream is already closed"))
s.lt()},
$ibN:1}
A.i3.prototype={
aD(a){if((this.e&2)!==0)throw A.b(A.B("Stream is already closed"))
this.jf(a)},
aM(a,b){if((this.e&2)!==0)throw A.b(A.B("Stream is already closed"))
this.ls(a,b)},
b1(){if((this.e&2)!==0)throw A.b(A.B("Stream is already closed"))
this.lt()},
c3(){var s=this.x
if(s!=null)s.bc()},
c4(){var s=this.x
if(s!=null)s.b3()},
hE(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jI(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.u(0,a)}catch(p){s=A.A(p)
r=A.af(p)
this.aM(s,r)}},
jM(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.bp(a,b)}catch(p){s=A.A(p)
r=A.af(p)
if(s===a)this.aM(a,b)
else this.aM(s,r)}},
jK(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.q()}catch(p){s=A.A(p)
r=A.af(p)
this.aM(s,r)}}}
A.kf.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.D,q=b===!0?1:0,p=d!=null?32:0,o=A.oR(r,a,s.y[1]),n=A.zZ(r,d),m=c==null?A.CK():c,l=new A.i3(o,n,r.ce(m,t.H),r,q|p,s.i("i3<1,2>"))
l.w=this.a.$1(new A.km(l,s.i("km<2>")))
l.x=this.b.bC(l.gjH(),l.gjJ(),l.gjL())
return l},
bC(a,b,c){return this.aa(a,null,b,c)}}
A.C7.prototype={}
A.C9.prototype={}
A.C8.prototype={}
A.C5.prototype={}
A.C6.prototype={}
A.C4.prototype={}
A.C1.prototype={}
A.pR.prototype={}
A.C0.prototype={}
A.C_.prototype={}
A.C3.prototype={}
A.C2.prototype={}
A.pQ.prototype={
wj(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.pS.prototype={}
A.pP.prototype={
fa(a,b,c){var s,r,q,p,o,n,m=this.gjP(),l=m.a
if(l===B.i){A.l_(b,c)
return}o=l.gkU()
o.toString
s=o
r=$.D
try{$.D=s
m.wj(l,l.gbl(),a,b,c)
$.D=r}catch(n){q=A.A(n)
p=A.af(n)
$.D=r
o=b===q?c:p
s.fa(l,q,o)}},
$iS:1}
A.oZ.prototype={
glU(){var s=this.ax
return s==null?this.ax=new A.ib(this):s},
gbl(){return this.ay.glU()},
gct(){return this.as.a},
h0(a){var s,r,q
try{this.b5(a,t.H)}catch(q){s=A.A(q)
r=A.af(q)
this.fa(this,s,r)}},
h1(a,b,c){var s,r,q
try{this.eQ(a,b,t.H,c)}catch(q){s=A.A(q)
r=A.af(q)
this.fa(this,s,r)}},
nT(a,b,c,d,e){var s,r,q
try{this.l1(a,b,c,t.H,d,e)}catch(q){s=A.A(q)
r=A.af(q)
this.fa(this,s,r)}},
kn(a,b){return new A.Ax(this,this.ce(a,b),b)},
uQ(a,b,c){return new A.Az(this,this.dK(a,b,c),c,b)},
fn(a){return new A.Aw(this,this.ce(a,t.H))},
i7(a,b){return new A.Ay(this,this.dK(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aT)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.tw(q,b)},
tw(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkU().gkj()
if(s===B.aT)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fF(a,b){this.fa(this,a,b)},
nm(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gbl(),this,a,b)},
b5(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gbl(),this,a,b)},
eQ(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gbl(),this,a,b,c,d)},
l1(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gbl(),this,a,b,c,d,e,f)},
ce(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gbl(),this,a,b)},
dK(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gbl(),this,a,b,c)},
fV(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gbl(),this,a,b,c,d)},
nj(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gbl(),this,a,b)},
df(a){var s=this.w,r=s.a
return s.b.$4(r,r.gbl(),this,a)},
kt(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gbl(),this,a,b)},
ks(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gbl(),this,a,b)},
gmy(){return this.a},
gmC(){return this.b},
gmA(){return this.c},
gmu(){return this.d},
gmv(){return this.e},
gmt(){return this.f},
glZ(){return this.r},
gk9(){return this.w},
glQ(){return this.x},
glP(){return this.y},
gmo(){return this.z},
gm3(){return this.Q},
gjP(){return this.as},
gkj(){return this.at},
gkU(){return this.ay}}
A.Ax.prototype={
$0(){return this.a.b5(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Az.prototype={
$1(a){var s=this
return s.a.eQ(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").Z(this.c).i("1(2)")}}
A.Aw.prototype={
$0(){return this.a.h0(this.b)},
$S:0}
A.Ay.prototype={
$1(a){return this.a.h1(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.pt.prototype={
gmy(){return B.eB},
gmC(){return B.eA},
gmA(){return B.ez},
gmu(){return B.ex},
gmv(){return B.ey},
gmt(){return B.ew},
glZ(){return B.es},
gk9(){return B.eC},
glQ(){return B.er},
glP(){return B.eq},
gmo(){return B.ev},
gm3(){return B.et},
gjP(){return B.eu},
gkj(){return B.aT},
gkU(){return null},
glU(){var s=$.Br
return s==null?$.Br=new A.ib(this):s},
gbl(){var s=$.Br
return s==null?$.Br=new A.ib(this):s},
gct(){return this},
h0(a){var s,r,q
try{if(B.i===$.D){a.$0()
return}A.CD(null,null,this,a)}catch(q){s=A.A(q)
r=A.af(q)
A.l_(s,r)}},
h1(a,b){var s,r,q
try{if(B.i===$.D){a.$1(b)
return}A.CE(null,null,this,a,b)}catch(q){s=A.A(q)
r=A.af(q)
A.l_(s,r)}},
nT(a,b,c){var s,r,q
try{if(B.i===$.D){a.$2(b,c)
return}A.ET(null,null,this,a,b,c)}catch(q){s=A.A(q)
r=A.af(q)
A.l_(s,r)}},
kn(a,b){return new A.Bt(this,a,b)},
fn(a){return new A.Bs(this,a)},
i7(a,b){return new A.Bu(this,a,b)},
h(a,b){return null},
fF(a,b){A.l_(a,b)},
nm(a,b){return A.HL(null,null,this,a,b)},
b5(a){if($.D===B.i)return a.$0()
return A.CD(null,null,this,a)},
eQ(a,b){if($.D===B.i)return a.$1(b)
return A.CE(null,null,this,a,b)},
l1(a,b,c){if($.D===B.i)return a.$2(b,c)
return A.ET(null,null,this,a,b,c)},
ce(a){return a},
dK(a){return a},
fV(a){return a},
nj(a,b){return null},
df(a){A.CF(null,null,this,a)},
kt(a,b){return A.En(a,b)},
ks(a,b){return A.Gq(a,b)}}
A.Bt.prototype={
$0(){return this.a.b5(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Bs.prototype={
$0(){return this.a.h0(this.b)},
$S:0}
A.Bu.prototype={
$1(a){return this.a.h1(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.ib.prototype={$iaw:1}
A.CC.prototype={
$0(){A.FJ(this.a,this.b)},
$S:0}
A.k9.prototype={}
A.dy.prototype={
gl(a){return this.a},
gG(a){return this.a===0},
gS(a){return this.a!==0},
gJ(){return new A.fd(this,A.n(this).i("fd<1>"))},
gaU(){var s=A.n(this)
return A.eR(new A.fd(this,s.i("fd<1>")),new A.B_(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lL(a)},
lL(a){var s=this.d
if(s==null)return!1
return this.c1(this.lI(s,a),a)>=0},
D(a,b){b.a5(0,new A.AZ(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Ex(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Ex(q,b)
return r}else return this.m4(b)},
m4(a){var s,r,q=this.d
if(q==null)return null
s=this.lI(q,a)
r=this.c1(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.ly(s==null?q.b=A.Ey():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.ly(r==null?q.c=A.Ey():r,b,c)}else q.mF(b,c)},
mF(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.Ey()
s=p.cm(a)
r=o[s]
if(r==null){A.Ez(o,s,[a,b]);++p.a
p.e=null}else{q=p.c1(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
F(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f_(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f_(s.c,b)
else return s.eh(b)},
eh(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cm(a)
r=n[s]
q=o.c1(r,a)
if(q<0)return null;--o.a
o.e=null
p=r.splice(q,2)[1]
if(0===r.length)delete n[s]
return p},
a5(a,b){var s,r,q,p,o,n=this,m=n.lH()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.az(n))}},
lH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
ly(a,b,c){if(a[b]==null){++this.a
this.e=null}A.Ez(a,b,c)},
f_(a,b){var s
if(a!=null&&a[b]!=null){s=A.Ex(a,b)
delete a[b];--this.a
this.e=null
return s}else return null},
cm(a){return J.ab(a)&1073741823},
lI(a,b){return a[this.cm(b)]},
c1(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.B_.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.AZ.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.ef.prototype={
cm(a){return A.l6(a)&1073741823},
c1(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.ki.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.ps(b)},
j(a,b,c){this.pu(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.pr(a)},
F(a,b){if(!this.w.$1(b))return null
return this.pt(b)},
cm(a){return this.r.$1(a)&1073741823},
c1(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.Av.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.fd.prototype={
gl(a){return this.a.a},
gG(a){return this.a.a===0},
gS(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.p9(s,s.lH(),this.$ti.i("p9<1>"))},
E(a,b){return this.a.I(b)}}
A.p9.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.az(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.kt.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.pl(b)},
j(a,b,c){this.pn(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.pk(a)},
F(a,b){if(!this.y.$1(b))return null
return this.pm(b)},
eC(a){return this.x.$1(a)&1073741823},
dG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.Bi.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.cK.prototype={
mh(){return new A.cK(A.n(this).i("cK<1>"))},
gt(a){var s=this,r=new A.eg(s,s.r,A.n(s).i("eg<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gG(a){return this.a===0},
gS(a){return this.a!==0},
E(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.qq(b)},
qq(a){var s=this.d
if(s==null)return!1
return this.c1(s[this.cm(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.B("No elements"))
return s.a},
ga0(a){var s=this.f
if(s==null)throw A.b(A.B("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.lx(s==null?q.b=A.EA():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.lx(r==null?q.c=A.EA():r,b)}else return q.pN(b)},
pN(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.EA()
s=q.cm(a)
r=p[s]
if(r==null)p[s]=[q.jW(a)]
else{if(q.c1(r,a)>=0)return!1
r.push(q.jW(a))}return!0},
F(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f_(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f_(s.c,b)
else return s.eh(b)},
eh(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cm(a)
r=n[s]
q=o.c1(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lJ(p)
return!0},
lx(a,b){if(a[b]!=null)return!1
a[b]=this.jW(b)
return!0},
f_(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lJ(s)
delete a[b]
return!0},
jU(){this.r=this.r+1&1073741823},
jW(a){var s,r=this,q=new A.Bj(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jU()
return q},
lJ(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jU()},
cm(a){return J.ab(a)&1073741823},
c1(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.Bj.prototype={}
A.eg.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.az(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.vr.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:70}
A.eO.prototype={
E(a,b){return b instanceof A.bf&&this===b.a},
gt(a){var s=this
return new A.pg(s,s.a,s.c,s.$ti.i("pg<1>"))},
gl(a){return this.b},
ak(a){var s,r,q,p=this;++p.a
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
if(this.b===0)throw A.b(A.B("No such element"))
s=this.c
s.toString
return s},
ga0(a){var s
if(this.b===0)throw A.b(A.B("No such element"))
s=this.c.c
s.toString
return s},
gap(a){var s=this.b
if(s===0)throw A.b(A.B("No such element"))
if(s>1)throw A.b(A.B("Too many elements"))
s=this.c
s.toString
return s},
gG(a){return this.b===0},
hC(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.B("LinkedListEntry is already in a LinkedList"));++q.a
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
ke(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.pg.prototype={
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
gfQ(){var s=this.a
if(s==null||this===s.gH(0))return null
return this.c}}
A.M.prototype={
gt(a){return new A.ar(a,this.gl(a),A.bq(a).i("ar<M.E>"))},
a4(a,b){return this.h(a,b)},
gG(a){return this.gl(a)===0},
gS(a){return!this.gG(a)},
gH(a){if(this.gl(a)===0)throw A.b(A.au())
return this.h(a,0)},
ga0(a){if(this.gl(a)===0)throw A.b(A.au())
return this.h(a,this.gl(a)-1)},
gap(a){if(this.gl(a)===0)throw A.b(A.au())
if(this.gl(a)>1)throw A.b(A.j4())
return this.h(a,0)},
E(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.b(A.az(a))}return!1},
cu(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gl(a))throw A.b(A.az(a))}return!0},
cv(a,b,c){var s,r,q,p=this.gl(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gl(a))throw A.b(A.az(a))}q=c.$0()
return q},
C(a,b){var s
if(this.gl(a)===0)return""
s=A.yn("",a,b)
return s.charCodeAt(0)==0?s:s},
dP(a,b){return new A.ap(a,b,A.bq(a).i("ap<M.E>"))},
cF(a,b,c){return new A.Z(a,b,A.bq(a).i("@<M.E>").Z(c).i("Z<1,2>"))},
ba(a,b){return A.cG(a,b,null,A.bq(a).i("M.E"))},
cf(a,b){return A.cG(a,0,A.cq(b,"count",t.S),A.bq(a).i("M.E"))},
bf(a,b){var s,r,q,p,o=this
if(o.gG(a)){s=A.bq(a).i("M.E")
return b?J.uk(0,s):J.mK(0,s)}r=o.h(a,0)
q=A.a9(o.gl(a),r,b,A.bq(a).i("M.E"))
for(p=1;p<o.gl(a);++p)q[p]=o.h(a,p)
return q},
bU(a){return this.bf(a,!0)},
cH(a){var s,r=A.vs(A.bq(a).i("M.E"))
for(s=0;s<this.gl(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gl(a)
this.sl(a,s+1)
this.j(a,s,b)},
fo(a,b){return new A.bW(a,A.bq(a).i("@<M.E>").Z(b).i("bW<1,2>"))},
cJ(a,b){var s=b==null?A.Oq():b
A.nL(a,0,this.gl(a)-1,s)},
V(a,b,c){var s,r=this.gl(a)
if(c==null)c=r
A.bn(b,c,r)
s=A.O(this.hb(a,b,c),A.bq(a).i("M.E"))
return s},
bi(a,b){return this.V(a,b,null)},
hb(a,b,c){A.bn(b,c,this.gl(a))
return A.cG(a,b,c,A.bq(a).i("M.E"))},
kD(a,b,c,d){var s
A.bn(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.bn(b,c,this.gl(a))
s=c-b
if(s===0)return
A.b_(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{p=J.fx(d,e)
q=p.bf(p,!1)
r=0}p=J.J(q)
if(r+s>p.gl(q))throw A.b(A.FU())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aA(a,b,c,d){return this.ai(a,b,c,d,0)},
dg(a,b,c){var s,r
if(t.j.b(c))this.aA(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
m(a){return A.uj(a,"[","]")},
$iL:1,
$io:1,
$iq:1}
A.W.prototype={
cs(a,b,c){var s=A.n(this)
return A.G1(this,s.i("W.K"),s.i("W.V"),b,c)},
a5(a,b){var s,r,q,p
for(s=J.E(this.gJ()),r=A.n(this).i("W.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga3(){return J.bB(this.gJ(),new A.vM(this),A.n(this).i("V<W.K,W.V>"))},
aR(a,b,c,d){var s,r,q,p,o,n=A.t(c,d)
for(s=J.E(this.gJ()),r=A.n(this).i("W.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
y4(a,b){var s,r,q,p,o=this,n=A.n(o),m=A.l([],n.i("z<W.K>"))
for(s=J.E(o.gJ()),n=n.i("W.V");s.k();){r=s.gn()
q=o.h(0,r)
if(b.$2(r,q==null?n.a(q):q))m.push(r)}for(n=m.length,p=0;p<m.length;m.length===n||(0,A.p)(m),++p)o.F(0,m[p])},
I(a){return J.DG(this.gJ(),a)},
gl(a){return J.ag(this.gJ())},
gG(a){return J.bs(this.gJ())},
gS(a){return J.da(this.gJ())},
gaU(){return new A.ku(this,A.n(this).i("ku<W.K,W.V>"))},
m(a){return A.vN(this)},
$iF:1}
A.vM.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("W.V").a(r)
return new A.V(a,r,A.n(s).i("V<W.K,W.V>"))},
$S(){return A.n(this.a).i("V<W.K,W.V>(W.K)")}}
A.vO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:43}
A.ku.prototype={
gl(a){var s=this.a
return s.gl(s)},
gG(a){var s=this.a
return s.gG(s)},
gS(a){var s=this.a
return s.gS(s)},
gH(a){var s=this.a
s=s.h(0,J.bK(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.qc(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
ga0(a){var s=this.a
s=s.h(0,J.qb(s.gJ()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.pi(J.E(s.gJ()),s,this.$ti.i("pi<1,2>"))}}
A.pi.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.pJ.prototype={
j(a,b,c){throw A.b(A.a3("Cannot modify unmodifiable map"))}}
A.jg.prototype={
cs(a,b,c){return this.a.cs(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a5(a,b){this.a.a5(0,b)},
gG(a){var s=this.a
return s.gG(s)},
gS(a){var s=this.a
return s.gS(s)},
gl(a){var s=this.a
return s.gl(s)},
gJ(){return this.a.gJ()},
m(a){return this.a.m(0)},
gaU(){return this.a.gaU()},
ga3(){return this.a.ga3()},
aR(a,b,c,d){return this.a.aR(0,b,c,d)},
$iF:1}
A.d1.prototype={
cs(a,b,c){return new A.d1(this.a.cs(0,b,c),b.i("@<0>").Z(c).i("d1<1,2>"))}}
A.jc.prototype={
gt(a){var s=this
return new A.ph(s,s.c,s.d,s.b,s.$ti.i("ph<1>"))},
gG(a){return this.b===this.c},
gl(a){return(this.c-this.b&this.a.length-1)>>>0},
gH(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.au())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga0(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.au())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gap(a){var s,r=this
if(r.b===r.c)throw A.b(A.au())
if(r.gl(0)>1)throw A.b(A.j4())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a4(a,b){var s,r=this
A.FT(b,r.gl(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
bf(a,b){var s,r,q,p,o,n,m=this,l=m.a.length-1,k=(m.c-m.b&l)>>>0
if(k===0){s=J.mK(0,m.$ti.c)
return s}s=m.$ti.c
r=A.a9(k,m.gH(0),!1,s)
for(q=m.a,p=m.b,o=0;o<k;++o){n=q[(p+o&l)>>>0]
r[o]=n==null?s.a(n):n}return r},
F(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.eh(s);++r.d
return!0}return!1},
m(a){return A.uj(this,"{","}")},
eh(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.ph.prototype={
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
A.cC.prototype={
gG(a){return this.gl(this)===0},
gS(a){return this.gl(this)!==0},
D(a,b){var s
for(s=J.E(b);s.k();)this.u(0,s.gn())},
nX(a){var s=this.cH(0)
s.D(0,a)
return s},
cF(a,b,c){return new A.eH(this,b,A.n(this).i("@<1>").Z(c).i("eH<1,2>"))},
gap(a){var s,r=this
if(r.gl(r)>1)throw A.b(A.j4())
s=r.gt(r)
if(!s.k())throw A.b(A.au())
return s.gn()},
m(a){return A.uj(this,"{","}")},
dP(a,b){return new A.ap(this,b,A.n(this).i("ap<1>"))},
cu(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cf(a,b){return A.Gp(this,b,A.n(this).c)},
ba(a,b){return A.Gn(this,b,A.n(this).c)},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.au())
return s.gn()},
ga0(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.au())
do s=r.gn()
while(r.k())
return s},
a4(a,b){var s,r
A.b_(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mF(b,b-r,this,null,"index"))},
$iL:1,
$io:1,
$if0:1}
A.kC.prototype={
ft(a){var s,r,q,p=this,o=p.mh()
for(s=A.eh(p,p.r,A.n(p).c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
if(!a.E(0,q))o.u(0,q)}return o},
cH(a){var s=this.mh()
s.D(0,this)
return s}}
A.kN.prototype={}
A.pd.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ta(b):s}},
gl(a){return this.b==null?this.c.a:this.e0().length},
gG(a){return this.gl(0)===0},
gS(a){return this.gl(0)>0},
gJ(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.pe(this)},
gaU(){var s,r=this
if(r.b==null){s=r.c
return new A.av(s,A.n(s).i("av<2>"))}return A.eR(r.e0(),new A.Bd(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.mR().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
F(a,b){if(this.b!=null&&!this.I(b))return null
return this.mR().F(0,b)},
a5(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a5(0,b)
s=o.e0()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.Ck(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.az(o))}},
e0(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
mR(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.t(t.N,t.z)
r=n.e0()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.ak(r)
n.a=n.b=null
return n.c=s},
ta(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.Ck(this.a[a])
return this.b[a]=s}}
A.Bd.prototype={
$1(a){return this.a.h(0,a)},
$S:72}
A.pe.prototype={
gl(a){return this.a.gl(0)},
a4(a,b){var s=this.a
return s.b==null?s.gJ().a4(0,b):s.e0()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gJ()
s=s.gt(s)}else{s=s.e0()
s=new J.fB(s,s.length,A.a2(s).i("fB<1>"))}return s},
E(a,b){return this.a.I(b)}}
A.Bb.prototype={
q(){var s,r,q=this
q.pv()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aD(A.HC(r.charCodeAt(0)==0?r:r,q.b))
s.b1()}}
A.BX.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:69}
A.BW.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:69}
A.lo.prototype={
gb_(){return"us-ascii"},
kA(a){return B.bD.v(a)}}
A.pI.prototype={
v(a){var s,r,q,p=A.bn(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aD(a,"string","Contains invalid characters."))
o[r]=q}return o},
cj(a){return new A.BO(new A.hO(a),this.a)}}
A.lp.prototype={}
A.BO.prototype={
q(){this.a.a.q()},
c7(a,b,c,d){var s,r,q,p
A.bn(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.U("Source contains invalid character with code point: "+q+".",null))}s=new A.cv(a)
p=this.a.a
p.u(0,s.V(s,b,c))
if(d)p.q()}}
A.lv.prototype={
gdC(){return this.a},
xd(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bn(a1,a2,a0.length)
s=$.Fh()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.Dc(a0.charCodeAt(l))
h=A.Dc(a0.charCodeAt(l+1))
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
d=A.bF(k)
e.a+=d
q=l
continue}}throw A.b(A.ac("Invalid base64 data",a0,r))}if(p!=null){e=B.a.B(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.Fs(a0,n,a2,o,m,d)
else{c=B.c.ao(d-1,4)+1
if(c===1)throw A.b(A.ac(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dL(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.Fs(a0,n,a2,o,m,b)
else{c=B.c.ao(b,4)
if(c===1)throw A.b(A.ac(a,a0,a2))
if(c>1)a0=B.a.dL(a0,a2,a2,c===2?"==":"=")}return a0}}
A.iz.prototype={
v(a){var s
if(J.bs(a))return""
s=this.a?u.G:u.U
s=new A.oP(s).ni(a,0,a.length,!0)
s.toString
return A.e6(s,0,null)},
cj(a){return new A.zH(a,new A.zY(this.a?u.G:u.U))}}
A.oP.prototype={
n9(a){return new Uint8Array(a)},
ni(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.n9(o)
r.a=A.LN(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.zY.prototype={
n9(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bV(B.f.gad(s),s.byteOffset,a)}}
A.zU.prototype={
u(a,b){this.lM(b,0,J.ag(b),!1)},
q(){this.lM(B.d1,0,0,!0)}}
A.zH.prototype={
lM(a,b,c,d){var s=this.b.ni(a,b,c,d)
if(s!=null)this.a.a.aD(A.e6(s,0,null))
if(d)this.a.a.b1()}}
A.lw.prototype={
v(a){var s,r,q=A.bn(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.oO()
r=s.ku(a,0,q)
r.toString
s.kp(a,q)
return r},
cj(a){return new A.zT(a,new A.oO())}}
A.oO.prototype={
ku(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.GF(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.LK(a,b,c,q)
r.a=A.LM(a,b,c,s,0,r.a)
return s},
kp(a,b){var s=this.a
if(s<-1)throw A.b(A.ac("Missing padding character",a,b))
if(s>0)throw A.b(A.ac("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.zT.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.ku(b,0,r)
if(s!=null)this.a.a.aD(s)},
q(){this.b.kp(null,null)
this.a.a.b1()},
c7(a,b,c,d){var s,r
A.bn(b,c,a.length)
if(b===c)return
s=this.b
r=s.ku(a,b,c)
if(r!=null)this.a.a.aD(r)
if(d){s.kp(a,c)
this.a.a.b1()}}}
A.qw.prototype={}
A.hO.prototype={
u(a,b){this.a.u(0,b)},
q(){this.a.q()}}
A.oS.prototype={
u(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.J(b)
if(n.gl(b)>p.length-o){p=q.b
s=n.gl(b)+p.length-1
s|=B.c.ag(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.aA(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.aA(p,o,o+n.gl(b),b)
q.c=q.c+n.gl(b)},
q(){this.a.$1(B.f.V(this.b,0,this.c))}}
A.lH.prototype={}
A.pz.prototype={
u(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.fa.prototype={
u(a,b){this.b.u(0,b)},
bp(a,b){A.cq(a,"error",t.K)
this.a.bp(a,b)},
q(){this.b.q()},
$ibN:1}
A.lJ.prototype={}
A.aH.prototype={
cj(a){throw A.b(A.a3("This converter does not support chunked conversions: "+this.m(0)))},
uO(a){return new A.kf(new A.rq(this),a,t.fM.Z(A.n(this).i("aH.T")).i("kf<1,2>"))}}
A.rq.prototype={
$1(a){return new A.fa(a,this.a.cj(a),t.oW)},
$S:105}
A.eJ.prototype={}
A.ja.prototype={
m(a){var s=A.iP(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.mO.prototype={
m(a){return"Cyclic error in JSON stringify"}}
A.un.prototype={
aF(a,b){var s=A.HC(a,this.gvb().a)
return s},
a9(a,b){var s=A.M6(a,this.gdC().b,null)
return s},
gdC(){return B.cC},
gvb(){return B.cB}}
A.mQ.prototype={
cj(a){return new A.Bc(null,this.b,new A.pB(a))}}
A.Bc.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.B("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a7("")
q=new A.BK(r,s)
A.GU(b,q,p.b,p.a)
if(r.a.length!==0)q.jF()
s.q()},
q(){}}
A.mP.prototype={
cj(a){return new A.Bb(this.a,a,new A.a7(""))}}
A.Bf.prototype={
o2(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.j6(a,s,r)
s=r+1
n.ar(92)
n.ar(117)
n.ar(100)
p=q>>>8&15
n.ar(p<10?48+p:87+p)
p=q>>>4&15
n.ar(p<10?48+p:87+p)
p=q&15
n.ar(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.j6(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.j6(a,s,r)
s=r+1
n.ar(92)
n.ar(q)}}if(s===0)n.bg(a)
else if(s<m)n.j6(a,s,m)},
jp(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.mO(a,null))}s.push(a)},
j5(a){var s,r,q,p,o=this
if(o.o1(a))return
o.jp(a)
try{s=o.b.$1(a)
if(!o.o1(s)){q=A.FZ(a,null,o.gml())
throw A.b(q)}o.a.pop()}catch(p){r=A.A(p)
q=A.FZ(a,r,o.gml())
throw A.b(q)}},
o1(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.yM(a)
return!0}else if(a===!0){r.bg("true")
return!0}else if(a===!1){r.bg("false")
return!0}else if(a==null){r.bg("null")
return!0}else if(typeof a=="string"){r.bg('"')
r.o2(a)
r.bg('"')
return!0}else if(t.j.b(a)){r.jp(a)
r.yK(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.jp(a)
s=r.yL(a)
r.a.pop()
return s}else return!1},
yK(a){var s,r,q=this
q.bg("[")
s=J.J(a)
if(s.gS(a)){q.j5(s.h(a,0))
for(r=1;r<s.gl(a);++r){q.bg(",")
q.j5(s.h(a,r))}}q.bg("]")},
yL(a){var s,r,q,p,o=this,n={}
if(a.gG(a)){o.bg("{}")
return!0}s=a.gl(a)*2
r=A.a9(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a5(0,new A.Bg(n,r))
if(!n.b)return!1
o.bg("{")
for(p='"';q<s;q+=2,p=',"'){o.bg(p)
o.o2(A.H(r[q]))
o.bg('":')
o.j5(r[q+1])}o.bg("}")
return!0}}
A.Bg.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:43}
A.Be.prototype={
gml(){var s=this.c
return s instanceof A.a7?s.m(0):null},
yM(a){this.c.j4(B.w.m(a))},
bg(a){this.c.j4(a)},
j6(a,b,c){this.c.j4(B.a.B(a,b,c))},
ar(a){this.c.ar(a)}}
A.mT.prototype={
gb_(){return"iso-8859-1"},
kA(a){return B.cJ.v(a)}}
A.mU.prototype={}
A.nX.prototype={
u(a,b){this.c7(b,0,b.length,!1)}}
A.BK.prototype={
ar(a){var s=this.a,r=A.bF(a)
if((s.a+=r).length>16)this.jF()},
j4(a){if(this.a.a.length!==0)this.jF()
this.b.u(0,a)},
jF(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.kG.prototype={
q(){},
c7(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bF(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
u(a,b){this.a.a+=b}}
A.pB.prototype={
u(a,b){this.a.a.aD(b)},
c7(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aD(a)
else r.aD(B.a.B(a,b,c))
if(d)r.b1()},
q(){this.a.a.b1()}}
A.BV.prototype={
q(){var s,r,q,p=this.c
this.a.wf(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.c7(q,0,q.length,!0)}else r.q()},
u(a,b){this.c7(b,0,J.ag(b),!1)},
c7(a,b,c,d){var s,r=this.c,q=this.a.dl(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.c7(s,0,s.length,!1)
r.a=""
return}}}
A.ot.prototype={
gb_(){return"utf-8"},
v7(a,b){return new A.dA((b===!0?B.em:B.aS).a).dl(a,0,null,!0)},
fq(a){return this.v7(a,null)},
kA(a){return B.e.v(a)}}
A.ou.prototype={
v(a){var s,r,q=A.bn(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.pN(s)
if(r.m2(a,0,q)!==q)r.hZ()
return B.f.V(s,0,r.b)},
cj(a){return new A.BY(new A.hO(a),new Uint8Array(1024))}}
A.pN.prototype={
hZ(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.K(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mX(a,b){var s,r,q,p,o=this
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
return!0}else{o.hZ()
return!1}},
m2(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.K(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mX(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hZ()}else if(o<=2047){n=k.b
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
A.BY.prototype={
q(){if(this.a!==0){this.c7("",0,0,!0)
return}this.d.a.q()},
c7(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mX(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.m2(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hZ()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.V(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.k4.prototype={
cj(a){return new A.BV(new A.dA(this.a),new A.pB(a),new A.a7(""))}}
A.dA.prototype={
dl(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bn(b,c,J.ag(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.MC(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.MB(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.jw(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Hg(p)
m.b=0
throw A.b(A.ac(n,a,q+m.c))}return o},
jw(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.jw(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.jw(a,s,c,d)}return q.va(a,b,c,d)},
wf(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bF(65533)
a.a+=s}else throw A.b(A.ac(A.Hg(77),null,null))},
va(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a7(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bF(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bF(k)
h.a+=q
break
case 65:q=A.bF(k)
h.a+=q;--g
break
default:q=A.bF(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bF(a[m])
h.a+=q}else{q=A.e6(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bF(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.pT.prototype={}
A.aQ.prototype={
bX(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bS(p,r)
return new A.aQ(p===0?!1:s,r,p)},
qE(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cs()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bS(s,q)
return new A.aQ(n===0?!1:o,q,n)},
qI(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cs()
s=k-a
if(s<=0)return l.a?$.Fj():$.cs()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bS(s,q)
m=new A.aQ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.hh(0,$.fv())
return m},
bY(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.U("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.ao(b,16)===0)return n.qE(r)
q=s+r+1
p=new Uint16Array(q)
A.GN(n.b,s,b,p)
s=n.a
o=A.bS(q,p)
return new A.aQ(o===0?!1:s,p,o)},
dU(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.U("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.ao(b,16)
if(q===0)return j.qI(r)
p=s-r
if(p<=0)return j.a?$.Fj():$.cs()
o=j.b
n=new Uint16Array(p)
A.LT(o,s,b,n)
s=j.a
m=A.bS(p,n)
l=new A.aQ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bY(1,q)-1)>>>0!==0)return l.hh(0,$.fv())
for(k=0;k<r;++k)if(o[k]!==0)return l.hh(0,$.fv())}return l},
a2(a,b){var s,r=this.a
if(r===b.a){s=A.zV(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
jk(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.jk(p,b)
if(o===0)return $.cs()
if(n===0)return p.a===b?p:p.bX(0)
s=o+1
r=new Uint16Array(s)
A.LP(p.b,o,a.b,n,r)
q=A.bS(s,r)
return new A.aQ(q===0?!1:b,r,q)},
hi(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cs()
s=a.c
if(s===0)return p.a===b?p:p.bX(0)
r=new Uint16Array(o)
A.oQ(p.b,o,a.b,s,r)
q=A.bS(o,r)
return new A.aQ(q===0?!1:b,r,q)},
o4(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.jk(b,r)
if(A.zV(q.b,p,b.b,s)>=0)return q.hi(b,r)
return b.hi(q,!r)},
hh(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bX(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.jk(b,r)
if(A.zV(q.b,p,b.b,s)>=0)return q.hi(b,r)
return b.hi(q,!r)},
bu(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cs()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.GO(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bS(s,p)
return new A.aQ(m===0?!1:n,p,m)},
qD(a){var s,r,q,p
if(this.c<a.c)return $.cs()
this.lW(a)
s=$.Et.bI()-$.ke.bI()
r=A.Ev($.Es.bI(),$.ke.bI(),$.Et.bI(),s)
q=A.bS(s,r)
p=new A.aQ(!1,r,q)
return this.a!==a.a&&q>0?p.bX(0):p},
ty(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lW(a)
s=A.Ev($.Es.bI(),0,$.ke.bI(),$.ke.bI())
r=A.bS($.ke.bI(),s)
q=new A.aQ(!1,s,r)
if($.Eu.bI()>0)q=q.dU(0,$.Eu.bI())
return p.a&&q.c>0?q.bX(0):q},
lW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.GK&&a.c===$.GM&&c.b===$.GJ&&a.b===$.GL)return
s=a.b
r=a.c
q=16-B.c.gn5(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.GI(s,r,q,p)
n=new Uint16Array(b+5)
m=A.GI(c.b,b,q,n)}else{n=A.Ev(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.Ew(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.zV(n,m,j,i)>=0){g&2&&A.K(n)
n[m]=1
A.oQ(n,h,j,i,n)}else{g&2&&A.K(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.oQ(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.LQ(l,n,e);--k
A.GO(d,f,0,n,k,o)
if(n[e]<d){i=A.Ew(f,o,k,j)
A.oQ(n,h,j,i,n)
while(--d,n[e]<d)A.oQ(n,h,j,i,n)}--e}$.GJ=c.b
$.GK=b
$.GL=s
$.GM=r
$.Es.b=n
$.Et.b=h
$.ke.b=o
$.Eu.b=q},
gK(a){var s,r,q,p=new A.zW(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.zX().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aQ&&this.a2(0,b)===0},
m(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.m(-n.b[0])
return B.c.m(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bX(0):n
while(r.c>1){q=$.Fi()
if(q.c===0)A.u(B.bR)
p=r.ty(q).m(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.qD(q)}s.push(B.c.m(r.b[0]))
if(m)s.push("-")
return new A.bG(s,t.hF).eD(0)},
$iay:1}
A.zW.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:108}
A.zX.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:123}
A.p7.prototype={
n3(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
nf(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.BU.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a0(b)}},
$S:67}
A.t3.prototype={
$0(){var s=this
return A.u(A.U("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:16}
A.aI.prototype={
jm(a){var s=1000,r=B.c.ao(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.ao(p,s),n=this.c
return new A.aI(A.m4(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aI&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gK(a){return A.ch(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kO(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a2(a,b){var s=B.c.a2(this.a,b.a)
if(s!==0)return s
return B.c.a2(this.b,b.b)},
yf(){var s=this
if(s.c)return s
return new A.aI(s.a,s.b,!0)},
m(a){var s=this,r=A.K1(A.Eb(s)),q=A.m3(A.E9(s)),p=A.m3(A.x6(s)),o=A.m3(A.E7(s)),n=A.m3(A.E8(s)),m=A.m3(A.Ea(s)),l=A.FH(A.Gd(s)),k=s.b,j=k===0?"":A.FH(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iay:1}
A.aF.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aF&&this.a===b.a},
gK(a){return B.c.gK(this.a)},
a2(a,b){return B.c.a2(this.a,b.a)},
m(a){var s,r,q,p,o,n=this.a,m=B.c.M(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.M(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.M(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.iO(B.c.m(n%1e6),6,"0")},
$iay:1}
A.AC.prototype={
m(a){return this.a7()}}
A.aj.prototype={
gcK(){return A.KX(this)}}
A.lq.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iP(s)
return"Assertion failed"}}
A.du.prototype={}
A.bL.prototype={
gjz(){return"Invalid argument"+(!this.a?"(s)":"")},
gjy(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gjz()+q+o
if(!s.a)return n
return n+s.gjy()+": "+A.iP(s.gkN())},
gkN(){return this.b}}
A.dl.prototype={
gkN(){return this.b},
gjz(){return"RangeError"},
gjy(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.j1.prototype={
gkN(){return this.b},
gjz(){return"RangeError"},
gjy(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$idl:1,
gl(a){return this.f}}
A.d2.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.om.prototype={
m(a){return"UnimplementedError: "+this.a},
$id2:1}
A.bw.prototype={
m(a){return"Bad state: "+this.a}}
A.lM.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iP(s)+"."}}
A.nf.prototype={
m(a){return"Out of Memory"},
gcK(){return null},
$iaj:1}
A.jX.prototype={
m(a){return"Stack Overflow"},
gcK(){return null},
$iaj:1}
A.p6.prototype={
m(a){return"Exception: "+this.a},
$iI:1}
A.bv.prototype={
m(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
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
k=""}return g+l+B.a.B(e,i,j)+k+"\n"+B.a.bu(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iI:1,
giI(){return this.a},
ghf(){return this.b},
gav(){return this.c}}
A.mH.prototype={
gcK(){return null},
m(a){return"IntegerDivisionByZeroException"},
$iaj:1,
$id2:1,
$iI:1}
A.o.prototype={
fo(a,b){return A.fD(this,A.n(this).i("o.E"),b)},
cF(a,b,c){return A.eR(this,b,A.n(this).i("o.E"),c)},
dP(a,b){return new A.ap(this,b,A.n(this).i("ap<o.E>"))},
E(a,b){var s
for(s=this.gt(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
wh(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
wi(a,b,c){return this.wh(0,b,c,t.z)},
cu(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
C(a,b){var s,r,q=this.gt(this)
if(!q.k())return""
s=J.Y(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.Y(q.gn())
while(q.k())}else{r=s
do r=r+b+J.Y(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bq(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
bf(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
bU(a){return this.bf(0,!0)},
cH(a){return A.c0(this,A.n(this).i("o.E"))},
gl(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gG(a){return!this.gt(this).k()},
gS(a){return!this.gG(this)},
cf(a,b){return A.Gp(this,b,A.n(this).i("o.E"))},
ba(a,b){return A.Gn(this,b,A.n(this).i("o.E"))},
gH(a){var s=this.gt(this)
if(!s.k())throw A.b(A.au())
return s.gn()},
ga0(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.au())
do s=r.gn()
while(r.k())
return s},
gap(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.au())
s=r.gn()
if(r.k())throw A.b(A.j4())
return s},
cv(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a4(a,b){var s,r
A.b_(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.mF(b,b-r,this,null,"index"))},
m(a){return A.Kq(this,"(",")")}}
A.V.prototype={
m(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.X.prototype={
gK(a){return A.k.prototype.gK.call(this,0)},
m(a){return"null"}}
A.k.prototype={$ik:1,
P(a,b){return this===b},
gK(a){return A.eX(this)},
m(a){return"Instance of '"+A.nl(this)+"'"},
gan(a){return A.d9(this)},
toString(){return this.m(this)}}
A.pD.prototype={
m(a){return""},
$iaM:1}
A.jZ.prototype={
gvU(){var s=this.gnh()
if($.lb()===1e6)return s
return s*1000},
gng(){var s=this.gnh()
if($.lb()===1000)return s
return B.c.M(s,1000)},
aC(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.nm.$0()-r)
s.b=null}},
gnh(){var s=this.b
if(s==null)s=$.nm.$0()
return s-this.a}}
A.jP.prototype={
gt(a){return new A.nC(this.a)},
ga0(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.B("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.Hn(r,s)}return s}}
A.nC.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.Hn(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a7.prototype={
gl(a){return this.a.length},
j4(a){var s=A.r(a)
this.a+=s},
ar(a){var s=A.bF(a)
this.a+=s},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.yY.prototype={
$2(a,b){throw A.b(A.ac("Illegal IPv6 address, "+a,this.a,b))},
$S:162}
A.kO.prototype={
gmK(){var s,r,q,p,o=this,n=o.w
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
gxw(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ac(s,1)
r=s.length===0?B.r:A.fY(new A.Z(A.l(s.split("/"),t.s),A.OB(),t.iZ),t.N)
q.x!==$&&A.DA()
p=q.x=r}return p},
gK(a){var s,r=this,q=r.y
if(q===$){s=B.a.gK(r.gmK())
r.y!==$&&A.DA()
r.y=s
q=s}return q},
gl5(){return this.b},
gdF(){var s=this.c
if(s==null)return""
if(B.a.T(s,"[")&&!B.a.af(s,"v",1))return B.a.B(s,1,s.length-1)
return s},
gfO(){var s=this.d
return s==null?A.H5(this.a):s},
gfU(){var s=this.f
return s==null?"":s},
gio(){var s=this.r
return s==null?"":s},
wP(a){var s=this.a
if(a.length!==s.length)return!1
return A.MQ(a,s,0)>=0},
fY(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.EE(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.BQ(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.T(n,"/"))n="/"+n
l=n
if(a!=null)k=A.BR(null,0,0,a)
else k=j.f
return A.kP(b,q,o,p,l,k,j.r)},
nR(a){return this.fY(null,a)},
l_(a){return this.fY(a,null)},
mf(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.af(b,"../",r);){r+=3;++s}q=B.a.d6(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.iC(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dL(a,q+1,null,B.a.ac(b,r-3*s))},
am(a){return this.h_(A.os(a))},
h_(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb9().length!==0)return a
else{s=h.a
if(a.gkI()){r=a.nR(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gnn())m=a.giy()?a.gfU():h.f
else{l=A.MA(h,n)
if(l>0){k=B.a.B(n,0,l)
n=a.gkH()?k+A.fj(a.gbE()):k+A.fj(h.mf(B.a.ac(n,k.length),a.gbE()))}else if(a.gkH())n=A.fj(a.gbE())
else if(n.length===0)if(p==null)n=s.length===0?a.gbE():A.fj(a.gbE())
else n=A.fj("/"+a.gbE())
else{j=h.mf(n,a.gbE())
r=s.length===0
if(!r||p!=null||B.a.T(n,"/"))n=A.fj(j)
else n=A.EG(j,!r||p!=null)}m=a.giy()?a.gfU():null}}}i=a.gkJ()?a.gio():null
return A.kP(s,q,p,o,n,m,i)},
gkI(){return this.c!=null},
giy(){return this.f!=null},
gkJ(){return this.r!=null},
gnn(){return this.e.length===0},
gkH(){return B.a.T(this.e,"/")},
l2(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.a3("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.a3(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.a3(u.A))
if(r.c!=null&&r.gdF()!=="")A.u(A.a3(u.Q))
s=r.gxw()
A.Mt(s,!1)
q=A.yn(B.a.T(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
m(a){return this.gmK()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb9())if(p.c!=null===b.gkI())if(p.b===b.gl5())if(p.gdF()===b.gdF())if(p.gfO()===b.gfO())if(p.e===b.gbE()){r=p.f
q=r==null
if(!q===b.giy()){if(q)r=""
if(r===b.gfU()){r=p.r
q=r==null
if(!q===b.gkJ()){s=q?"":r
s=s===b.gio()}}}}return s},
$ioq:1,
gb9(){return this.a},
gbE(){return this.e}}
A.BT.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.pM(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.pM(1,b,B.o,!0)
s.a+=r}},
$S:188}
A.BS.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:67}
A.yX.prototype={
go_(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cw(m,"?",s)
q=m.length
if(r>=0){p=A.kQ(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.p1("data","",n,n,A.kQ(m,s,q,128,!1,!1),p,n)}return m},
m(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cn.prototype={
gkI(){return this.c>0},
gkK(){return this.c>0&&this.d+1<this.e},
giy(){return this.f<this.r},
gkJ(){return this.r<this.a.length},
gkH(){return B.a.af(this.a,"/",this.e)},
gnn(){return this.e===this.f},
gb9(){var s=this.w
return s==null?this.w=this.qo():s},
qo(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.T(r.a,"http"))return"http"
if(q===5&&B.a.T(r.a,"https"))return"https"
if(s&&B.a.T(r.a,"file"))return"file"
if(q===7&&B.a.T(r.a,"package"))return"package"
return B.a.B(r.a,0,q)},
gl5(){var s=this.c,r=this.b+3
return s>r?B.a.B(this.a,r,s-1):""},
gdF(){var s=this.c
return s>0?B.a.B(this.a,s,this.d):""},
gfO(){var s,r=this
if(r.gkK())return A.aN(B.a.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.T(r.a,"http"))return 80
if(s===5&&B.a.T(r.a,"https"))return 443
return 0},
gbE(){return B.a.B(this.a,this.e,this.f)},
gfU(){var s=this.f,r=this.r
return s<r?B.a.B(this.a,s+1,r):""},
gio(){var s=this.r,r=this.a
return s<r.length?B.a.ac(r,s+1):""},
m9(a){var s=this.d+1
return s+a.length===this.e&&B.a.af(this.a,a,s)},
y3(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cn(B.a.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.EE(b,0,b.length)
s=!(h.b===b.length&&B.a.T(h.a,b))}else{b=h.gb9()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.B(h.a,h.b+3,q):""
o=h.gkK()?h.gfO():g
if(s)o=A.BQ(o,b)
q=h.c
if(q>0)n=B.a.B(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.B(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.T(l,"/"))l="/"+l
if(a!=null)j=A.BR(g,0,0,a)
else{k=h.r
j=m<k?B.a.B(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ac(q,m+1):g
return A.kP(b,p,n,o,l,j,i)},
nR(a){return this.fY(null,a)},
l_(a){return this.fY(a,null)},
am(a){return this.h_(A.os(a))},
h_(a){if(a instanceof A.cn)return this.tY(this,a)
return this.mM().h_(a)},
tY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.T(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.T(a.a,"http"))p=!b.m9("80")
else p=!(r===5&&B.a.T(a.a,"https"))||!b.m9("443")
if(p){o=r+1
return new A.cn(B.a.B(a.a,0,o)+B.a.ac(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mM().h_(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cn(B.a.B(a.a,0,r)+B.a.ac(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cn(B.a.B(a.a,0,r)+B.a.ac(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.y3()}s=b.a
if(B.a.af(s,"/",n)){m=a.e
l=A.GY(this)
k=l>0?l:m
o=k-n
return new A.cn(B.a.B(a.a,0,k)+B.a.ac(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.af(s,"../",n))n+=3
o=j-n+1
return new A.cn(B.a.B(a.a,0,j)+"/"+B.a.ac(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.GY(this)
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
return new A.cn(B.a.B(h,0,i)+d+B.a.ac(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
l2(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.T(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.a3("Cannot extract a file path from a "+r.gb9()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.a3(u.z))
throw A.b(A.a3(u.A))}if(r.c<r.d)A.u(A.a3(u.Q))
q=B.a.B(s,r.e,q)
return q},
gK(a){var s=this.x
return s==null?this.x=B.a.gK(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.m(0)},
mM(){var s=this,r=null,q=s.gb9(),p=s.gl5(),o=s.c>0?s.gdF():r,n=s.gkK()?s.gfO():r,m=s.a,l=s.f,k=B.a.B(m,s.e,l),j=s.r
l=l<j?s.gfU():r
return A.kP(q,p,o,n,k,l,j<m.length?s.gio():r)},
m(a){return this.a},
$ioq:1}
A.p1.prototype={}
A.md.prototype={
j(a,b,c){this.a.set(b,c)},
m(a){return"Expando:"+A.r(this.b)}}
A.nb.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iI:1}
A.tJ.prototype={
$2(a,b){this.a.b6(new A.tH(a),new A.tI(b),t.X)},
$S:193}
A.tH.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:199}
A.tI.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.On(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.u("Attempting to box non-Dart object.")
s={}
s[$.Je()]=a
p.error=s
p.stack=b.m(0)
r=this.a
r.call(r,p)},
$S:6}
A.Dh.prototype={
$1(a){var s,r,q,p
if(A.HA(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gJ());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.D(p,J.bB(a,this,t.z))
return p}else return a},
$S:34}
A.Dn.prototype={
$1(a){return this.a.aB(a)},
$S:27}
A.Do.prototype={
$1(a){if(a==null)return this.a.aY(new A.nb(a===undefined))
return this.a.aY(a)},
$S:27}
A.CU.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Hz(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aI(A.m4(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.U("structured clone of RegExp",null))
if(a instanceof Promise)return A.a4(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.t(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.ax(o),q=s.gt(o);q.k();)n.push(A.l1(q.gn()))
for(m=0;m<s.gl(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.J(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:34}
A.B8.prototype={
d8(a){if(a<=0||a>4294967296)throw A.b(A.b8(u.E+a))
return Math.random()*a>>>0},
nD(){return Math.random()}}
A.B9.prototype={
pI(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.a3("No source of cryptographically secure random numbers available."))},
d8(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b8(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.K(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ai(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bV(B.aF.gad(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.ma.prototype={}
A.a8.prototype={
h(a,b){var s,r=this
if(!r.jQ(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a8.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jQ(b))return
s.c.j(0,s.a.$1(b),new A.V(b,c,s.$ti.i("V<a8.K,a8.V>")))},
D(a,b){b.a5(0,new A.qy(this))},
cs(a,b,c){return this.c.cs(0,b,c)},
I(a){var s=this
if(!s.jQ(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a8.K").a(a)))},
ga3(){var s=this.c,r=A.n(s).i("aK<1,2>")
return A.eR(new A.aK(s,r),new A.qz(this),r.i("o.E"),this.$ti.i("V<a8.K,a8.V>"))},
a5(a,b){this.c.a5(0,new A.qA(this,b))},
gG(a){return this.c.a===0},
gS(a){return this.c.a!==0},
gJ(){var s=this.c,r=A.n(s).i("av<2>")
return A.eR(new A.av(s,r),new A.qB(this),r.i("o.E"),this.$ti.i("a8.K"))},
gl(a){return this.c.a},
aR(a,b,c,d){return this.c.aR(0,new A.qC(this,b,c,d),c,d)},
gaU(){var s=this.c,r=A.n(s).i("av<2>")
return A.eR(new A.av(s,r),new A.qD(this),r.i("o.E"),this.$ti.i("a8.V"))},
m(a){return A.vN(this)},
jQ(a){return this.$ti.i("a8.K").b(a)},
$iF:1}
A.qy.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a8.K,a8.V)")}}
A.qz.prototype={
$1(a){var s=a.b
return new A.V(s.a,s.b,this.a.$ti.i("V<a8.K,a8.V>"))},
$S(){return this.a.$ti.i("V<a8.K,a8.V>(V<a8.C,V<a8.K,a8.V>>)")}}
A.qA.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a8.C,V<a8.K,a8.V>)")}}
A.qB.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a8.K(V<a8.K,a8.V>)")}}
A.qC.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.Z(this.c).Z(this.d).i("V<1,2>(a8.C,V<a8.K,a8.V>)")}}
A.qD.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a8.V(V<a8.K,a8.V>)")}}
A.m6.prototype={
X(a,b){return J.x(a,b)},
ae(a){return J.ab(a)}}
A.j5.prototype={
X(a,b){var s,r,q,p
if(a===b)return!0
s=J.E(a)
r=J.E(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.X(s.gn(),r.gn()))return!1}},
ae(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();){q=q+r.ae(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.eP.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.J(a)
r=s.gl(a)
q=J.J(b)
if(r!==q.gl(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.X(s.h(a,o),q.h(b,o)))return!1
return!0},
ae(a){var s,r,q,p
for(s=J.J(a),r=this.a,q=0,p=0;p<s.gl(a);++p){q=q+r.ae(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.i8.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.DU(s.gw_(),s.gwJ(),s.gwQ(),A.n(this).i("i8.E"),t.S)
for(s=J.E(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.E(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ae(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();)q=q+r.ae(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hp.prototype={}
A.hZ.prototype={
gK(a){var s=this.a
return 3*s.a.ae(this.b)+7*s.b.ae(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hZ){s=this.a
s=s.a.X(this.b,b.b)&&s.b.X(this.c,b.c)}else s=!1
return s}}
A.jf.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gl(a)!==b.gl(b))return!1
s=A.DU(null,null,null,t.mB,t.S)
for(r=J.E(a.gJ());r.k();){q=r.gn()
p=new A.hZ(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gJ());r.k();){q=r.gn()
p=new A.hZ(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ae(a){var s,r,q,p,o,n,m,l
for(s=J.E(a.gJ()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ae(n)
l=a.h(0,n)
o=o+3*m+7*q.ae(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.m5.prototype={
X(a,b){var s,r=this
if(a instanceof A.cC)return b instanceof A.cC&&new A.hp(r,t.cu).X(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.jf(r,r,t.a3).X(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.eP(r,t.hI).X(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.j5(r,t.nZ).X(a,b)
return J.x(a,b)},
ae(a){var s=this
if(a instanceof A.cC)return new A.hp(s,t.cu).ae(a)
if(t.f.b(a))return new A.jf(s,s,t.a3).ae(a)
if(t.j.b(a))return new A.eP(s,t.hI).ae(a)
if(t.e7.b(a))return new A.j5(s,t.nZ).ae(a)
return J.ab(a)},
wR(a){return!0}}
A.na.prototype={
sl(a,b){A.G8()},
u(a,b){return A.G8()}}
A.op.prototype={
j(a,b,c){return A.Gv()},
F(a,b){return A.Gv()}}
A.cw.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cw){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gK(a){return A.wg(this.a)},
m(a){return A.at(this.a)}}
A.cb.prototype={
u(a,b){if(this.a!=null)throw A.b(A.B("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.B("add must be called once."))}}
A.mz.prototype={
v(a){var s=new A.cb(),r=A.d6(s)
r.u(0,a)
r.q()
r=s.a
r.toString
return r}}
A.tO.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.B("Hash.add() called after close()."))
s.r=s.r+J.ag(b)
s.lw(b)},
lw(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.q9(B.f.gad(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.J(a),o=0;;j=0){n=j+p.gl(a)-o
if(n<h){B.f.ai(i,j,n,a,o)
k.e=n
return}B.f.ai(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.K(s)
s[m]=l;++m}while(m<q)
k.yl(s)}},
q(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.u(A.a3("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.q9(B.f.gad(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.K(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.lw(q)
s=l.a
s.u(0,new A.cw(l.q6()))
s.q()},
q6(){var s,r,q,p,o,n,m
if(B.aX===$.la())return J.Jr(B.y.gad(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.q9(B.f.gad(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.K(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.pw.prototype={
cj(a){var s=new Uint32Array(A.bc(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hO(new A.px(s,r,a,q,new Uint32Array(16)))}}
A.Bw.prototype={
yl(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cR[q]+s[q]>>>0)>>>0)>>>0
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
A.px.prototype={}
A.lk.prototype={
gK(a){return A.ch(B.e1,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lZ&&this.d===b.d&&this.c===b.c},
m(a){var s=this,r=s.c
if(r===12)return A.d9(s).m(0)+".with"+s.d*8+"bits()"
return A.d9(s).m(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.qJ.prototype={}
A.je.prototype={
gK(a){return B.u.ae(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.je&&B.u.X(this.a,b.a)},
m(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.C(s,",")+"])"}}
A.jT.prototype={
m(a){return A.d9(this).m(0)+": SecretBox has wrong message authentication code (MAC)"},
$iI:1}
A.vG.prototype={
m(a){return A.d9(this).m(0)+"()"}}
A.jS.prototype={
gK(a){return(B.u.ae(this.b.a)^B.u.ae(this.c)^B.u.ae(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jS){s=B.u.X(this.b.a,b.b.a)
s=s&&B.u.X(this.c,b.c)&&B.u.X(this.a,b.a)}else s=!1
return s},
m(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.C(this.c,",")+"],\n  mac: "+this.b.m(0)+",\n)"}}
A.y3.prototype={}
A.jU.prototype={
ger(){return this.b},
gK(a){var s=A.eX(B.eg),r=B.u.ae(this.ger())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jU&&B.u.X(this.ger(),b.ger())},
m(a){return"SecretKeyData(...)"}}
A.nH.prototype={
gl(a){return this.a.length},
sl(a,b){throw A.b(A.a3("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.a3("The bytes are unmodifiable."))}}
A.lZ.prototype={
vd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ger().gl(0),f=this.d
if(g!==f)throw A.b(A.aD(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.I1(c)
r=new Uint32Array(4)
A.q_(r,0,r,0,s)
r[0]=A.bI(r[0])
r[1]=A.bI(r[1])
r[2]=A.bI(r[2])
r[3]=A.bI(r[3])
q=A.FG(r,a.c)
p=J.Fn(B.f.gad(q),0,null)
o=a.a
n=B.u.X(B.aV.lD(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jT())
A.CL(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.q_(l,k,p,0,s)
A.CL(q,1)}j=J.bV(B.y.gad(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.K(j)
j[k]=i^h}return j},
vX(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ger().gl(0),f=this.d
if(g!==f)throw A.b(A.aD(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.I1(d)
r=new Uint32Array(4)
A.q_(r,0,r,0,s)
r[0]=A.bI(r[0])
r[1]=A.bI(r[1])
r[2]=A.bI(r[2])
r[3]=A.bI(r[3])
q=A.FG(r,c)
p=J.Fn(B.f.gad(q),0,null)
o=new Uint32Array(A.bc(p))
A.CL(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.q_(l,k,p,0,s)
A.CL(q,1)}j=J.bV(B.y.gad(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.K(j)
j[k]=i^h}return new A.jS(j,B.aV.lD(j,b,s,r,o),c)}}
A.rI.prototype={
m(a){return"DartGcm()"},
lD(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.m_(n,d,b)
A.m_(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.ao(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.ao(r,o),!1)
A.m_(n,d,J.bV(B.aF.gad(q),0,null))
p=new Uint32Array(4)
A.q_(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.je(J.bV(B.y.gad(n),0,null))}}
A.p_.prototype={}
A.p0.prototype={}
A.rt.prototype={}
A.rJ.prototype={}
A.Ar.prototype={
X(a,b){var s,r,q=J.J(a),p=J.J(b)
if(q.gl(a)!==p.gl(b))return!1
for(s=0,r=0;r<q.gl(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ae(a){var s,r,q,p,o
for(s=J.J(a),r=0,q=0;q<s.gl(a);++q){p=s.h(a,q)
o=B.c.ao(q,16)
r=(r^B.c.tX(p,o)^B.c.mH(p,16-o))>>>0}return r}}
A.nx.prototype={}
A.lx.prototype={$iDJ:1}
A.ly.prototype={
im(){if(this.w)throw A.b(A.B("Can't finalize a finalized Request."))
this.w=!0
return B.bI},
m(a){return this.a+" "+this.b.m(0)}}
A.lz.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:90}
A.lA.prototype={
$1(a){return B.a.gK(a.toLowerCase())},
$S:95}
A.qs.prototype={
py(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.U("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.U("Invalid content length "+A.r(s)+".",null))}}}
A.lE.prototype={
bh(a){return this.p0(a)},
p0(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bh=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.FC("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.im().ye(),$async$bh)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.m(0)
a8=!J.bs(k)?k:null
a9=t.N
f=A.t(a9,t.K)
e=b4.gn8()
d=null
if(e!=null){d=e
J.b1(f,"content-length",d)}for(b0=b4.r,b0=new A.aK(b0,A.n(b0).i("aK<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.b1(f,c.a,c.b)}f=A.l5(f)
f.toString
A.bo(f)
b0=l.signal
s=8
return A.a(A.a4(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$bh)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.hc(a,null):null
if(a0==null&&a!=null){f=A.FC("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.t(a9,a9)
b.headers.forEach(A.pV(new A.qv(a1)))
f=A.MF(b4,b)
a4=b.status
a6=a1
a8=a0
A.os(b.url)
a9=b.statusText
f=new A.nW(A.IH(f),a4,a8,a6)
f.py(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.A(b3)
a3=A.af(b3)
A.HK(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.b.F(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bh,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].abort()
this.b=!0}}
A.qv.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:97}
A.Cg.prototype={
$1(a){return A.ih(this.a,this.b,a)},
$S:101}
A.Cw.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.al()}},
$S:0}
A.Cx.prototype={
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
n=A.A(k)
m=A.af(k)
if(!o.a.b)A.HK(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dH.prototype={
ye(){var s=new A.w($.D,t.jz),r=new A.aG(s,t.iq),q=new A.oS(new A.qx(r),new Uint8Array(1024))
this.aa(q.guA(q),!0,q.ges(),r.guY())
return s}}
A.qx.prototype={
$1(a){return this.a.aB(new Uint8Array(A.bc(a)))},
$S:11}
A.eA.prototype={
m(a){var s=this.b.m(0)
return"ClientException: "+this.a+", uri="+s},
$iI:1}
A.n3.prototype={
gl(a){return this.b}}
A.w8.prototype={
gn8(){var s,r,q,p=this,o={},n=o.a=0
p.x.a5(0,new A.w9(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.p)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.m7(q)).length+q.b+2)}return o.a+2+70+4},
im(){var s=this,r=s.q2()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.lo()
return new A.dH(s.bw(r))},
bw(a){return this.r3(a)},
r3(a){var $async$bw=A.c(function(b,c){switch(b){case 2:n=q
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
return A.aR(A.d5(e),$async$bw,r)
case 5:k=l.b
j=$.DE()
l=A.C(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.C(l,'"',"%22")+'"'
l=$.Fk()
s=6
q=[1]
return A.aR(A.d5(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bw,r)
case 6:s=7
q=[1]
return A.aR(A.d5(B.e.v(k)),$async$bw,r)
case 7:s=8
q=[1]
return A.aR(A.d5(B.b9),$async$bw,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.aR(A.d5(e),$async$bw,r)
case 12:s=13
q=[1]
return A.aR(A.d5(B.e.v(m.m7(g))),$async$bw,r)
case 13:if(g.f)A.u(A.B("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.aR(A.M4(g.e),$async$bw,r)
case 14:s=15
q=[1]
return A.aR(A.d5(B.b9),$async$bw,r)
case 15:case 10:f.length===l||(0,A.p)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.aR(A.d5(d),$async$bw,r)
case 16:case 1:return A.aR(null,0,r)
case 2:return A.aR(o.at(-1),1,r)}})
var s=0,r=A.Cv($async$bw,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.CG(r)},
rp(a,b){var s,r=$.DE()
r=A.C(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.C(r,'"',"%22")+'"'
r=$.Fk()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
m7(a){var s=a.d.m(0),r=$.DE(),q=A.C(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.C(q,'"',"%22")+'"'
s=A.C(a.c,r,"%0D%0A")
p=p+'; filename="'+A.C(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
q2(){var s,r=J.DY(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.d7[$.IR().d8(66)]
return"dart-http-boundary-"+A.e6(r,0,null)}}
A.w9.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.rp(a,b)).length+B.e.v(b).length+2)},
$S:38}
A.xT.prototype={
gn8(){return this.y.length},
gkB(){var s,r
if(this.gcO()==null||!this.gcO().c.a.I("charset"))return B.o
s=this.gcO().c.a.h(0,"charset")
s.toString
r=A.K6(s)
return r==null?A.u(A.ac('Unsupported encoding "'+s+'".',null,null)):r},
im(){this.lo()
return new A.dH(A.Ej(this.y,t.L))},
gcO(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.KF(s)},
scO(a){this.r.j(0,"content-type",a.m(0))},
q9(){if(!this.w)return
throw A.b(A.B("Can't modify a finalized Request."))}}
A.k0.prototype={}
A.nW.prototype={}
A.iD.prototype={}
A.h_.prototype={
m(a){var s=new A.a7(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a5(0,new A.vR(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.vP.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.yo(null,j),h=$.Jq()
i.jd(h)
s=$.Jp()
i.fA(s)
r=i.gkQ().h(0,0)
r.toString
i.fA("/")
i.fA(s)
q=i.gkQ().h(0,0)
q.toString
i.jd(h)
p=t.N
o=A.t(p,p)
for(;;){p=i.d=B.a.eG(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gO():n
if(!m)break
p=i.d=h.eG(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gO()
i.fA(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.fA("=")
n=i.d=s.eG(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gO()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.OU(i)
n=i.d=h.eG(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gO()
o.j(0,p,k)}i.w6()
return A.E4(r,q,o)},
$S:107}
A.vR.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Jn()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.ID(b,$.Jc(),new A.vQ(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:38}
A.vQ.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:66}
A.D2.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:66}
A.qr.prototype={
dN(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.f4(),$async$dN)
case 5:o=b
s=o.gnP()<0.25?6:7
break
case 6:s=8
return A.a(p.k6(o),$async$dN)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnP()<0.25?9:10
break
case 9:s=11
return A.a(p.k6(m),$async$dN)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dN,r)},
iV(){var s=0,r=A.h(t.q),q,p=this
var $async$iV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f4(),$async$iV)
case 3:q=p.k6(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iV,r)},
f4(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$f4=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.ca():j
p=3
s=6
return A.a(l,$async$f4)
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
return A.f($async$f4,r)},
k6(a){var s=this.c
if(s!=null)return s
return this.c=this.hq(a)},
hq(a){return this.qG(a)},
qG(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$hq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.ls("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iW(l),$async$hq)
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
return A.f($async$hq,r)}}
A.jC.prototype={
pA(a,b,c,d,e,f,g,h,i,j,k){var s=this,r=new A.qr(s.c)
s.Q!==$&&A.dD()
s.Q=r
s.as!==$&&A.dD()
s.as=new A.wy(s.z,s.b,r,s.x,s.a)},
fP(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$fP=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.ay){s=1
break}n.ay=!0
if(n.ch){s=1
break}p=4
m=n.as
m===$&&A.v()
s=7
return A.a(m.iR(),$async$fP)
case 7:n.ax=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.A(k)
if(m instanceof A.ce){n.ax=!1
n.ch=!0}else if(m instanceof A.b9)n.ay=n.ax=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fP,r)},
gi8(){return new A.lu(this.ax,this.f)},
gle(){return B.a.B(A.at(B.m.v(B.e.v(this.b.m(0)+"|"+this.r)).a),0,12)},
hg(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$hg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.at!=null){s=1
break}o=p.as
o===$&&A.v()
n=A.KT(B.cl,o,A.l(["data"],t.s),p.grT(),p.grQ(),p.w)
p.at=n
s=3
return A.a(n.aC(),$async$hg)
case 3:case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
eX(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.at
o=o==null?null:o.aL()
s=2
return A.a(o instanceof A.w?o:A.bH(o,t.H),$async$eX)
case 2:q.at=null
for(o=q.cx,p=new A.aS(o,o.r,o.e,A.n(o).i("aS<2>"));p.k();)p.d.A()
o.ak(0)
q.cy.ak(0)
return A.e(null,r)}})
return A.f($async$eX,r)},
hn(){var s=0,r=A.h(t.H),q=this
var $async$hn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.eX(),$async$hn)
case 2:q.z.a.q()
return A.e(null,r)}})
return A.f($async$hn,r)},
rR(){var s,r,q,p
for(s=this.db,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
this.f1(p,new A.ct(p,B.Q,null))}},
rU(a){var s=a.b,r=s.b
if(!B.b.E(this.db,r))return
if(a.a==="delete"){this.hV(s)
return}this.f1(r,new A.ct(r,B.Q,s))},
hV(a){return this.ui(a)},
ui(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hV=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.E(n.db,j)){s=1
break}m=null
p=4
l=n.as
l===$&&A.v()
s=7
return A.a(l.aV(a.a),$async$hV)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.A(i)
if(l instanceof A.cf){n.f1(j,new A.ct(j,B.au,null))
s=1
break}else if(l instanceof A.b9){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.f1(j,new A.ct(j,B.au,null))
s=1
break}n.f1(j,new A.ct(j,B.Q,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hV,r)},
f1(a,b){var s,r,q=this
q.cy.j(0,a,b)
s=q.cx
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.c4(q.d,new A.wu(q,a)))},
no(){var s=this.CW
return new A.b0(s,A.n(s).i("b0<1>"))},
d7(a,b,c,d,e){var s=this.as
s===$&&A.v()
return s.iF(a,d!=null?B.d6:null,b,c,d,e)},
ny(a,b,c,d){return this.d7(a,b,null,c,d)},
nx(a,b,c,d){return this.d7(a,b,c,null,d)},
aV(a){var s=this.as
s===$&&A.v()
return s.aV(a)},
c9(a,b,c){var s=this.as
s===$&&A.v()
return s.c9(a,b,c)},
eR(a,b){return this.j0(null,a,null,b,null)},
j0(a,b,c,d,e){return this.yq(a,b,c,d,e)},
ci(a,b){return this.j0(null,a,null,null,b)},
yq(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$j0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aR(0,new A.wv(p),t.N,t.co)
n=p.as
n===$&&A.v()
q=n.j_(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j0,r)},
bM(a,b,c){var s=this.as
s===$&&A.v()
return s.bM(a,b,c)},
bV(a,b,c){var s=this.as
s===$&&A.v()
return s.bV(a,b,c)},
bO(a){var s=this.as
s===$&&A.v()
return s.bO(a)},
$inZ:1}
A.wu.prototype={
$0(){var s,r=this.a,q=this.b
r.cx.F(0,q)
s=r.cy.F(0,q)
if(s!=null&&(r.CW.c&4)===0)r.CW.u(0,s)},
$S:0}
A.wv.prototype={
$2(a,b){return new A.V(a,new A.dM("imgs+",b.a,b.b,b.c),t.ia)},
$S:116}
A.jF.prototype={}
A.x0.prototype={
cZ(a,b,c,d){return this.v_(a,b,c,d)},
v_(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$cZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.BC(d)
n=t.hw
m=A.dr(null,null,n)
l=t.N
k=$.D.h(0,B.dV)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.lE(A.l([],t.kG))
j=new A.ww(j)
p=new A.jF(c,B.b_,a,o,B.b3,200,25,b,B.aj,B.aj,null,j,m,A.t(l,t.hU),A.t(l,n))
p.pA(a,B.aj,B.b_,b,25,200,null,B.b3,B.aj,o,null)
s=3
return A.a(p.hg(),$async$cZ)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
d_(a){return this.vK(a)},
vK(a){var s=0,r=A.h(t.H),q
var $async$d_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=a instanceof A.jF?2:3
break
case 2:s=4
return A.a(a.eX(),$async$d_)
case 4:a.hn()
q=a.CW
if((q.c&4)===0)q.q()
case 3:return A.e(null,r)}})
return A.f($async$d_,r)}}
A.BC.prototype={
ca(){var s=0,r=A.h(t.q),q,p=this,o
var $async$ca=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.ca(),$async$ca)
case 3:q=o.Gr(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)},
iW(a){return this.xX(a)},
xX(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.ca(),$async$iW)
case 3:q=o.Gr(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iW,r)}}
A.wQ.prototype={}
A.wy.prototype={
i5(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$i5=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dN(),$async$i5)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.A(j)
l=A.ls("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i5,r)},
iF(a,b,c,d,e,f){return this.wX(a,b,c,d,e,f)},
wX(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$iF=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Pz(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.ft(a)+" && updated>="+A.ft(n)+")"
o=c==null?m:m+" && (updated>"+A.ft(n)+" || (updated="+A.ft(n)+" && id>"+A.ft(c)+"))"}l=t.N
l=A.t(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.h3(B.c.by(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.C(b,","))
k=p.b.am("/api/collections/data/records").l_(l)
s=3
return A.a(p.mD("GET",k),$async$iF)
case 3:j=a0
p.e3(j,A.l([200],t.t),k)
i=p.dn(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aZ("List response has no items array."))
h=J.bB(i,new A.wP(p),t.h)
h=A.O(h,h.$ti.i("a1.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iF,r)},
aV(a){return this.oT(a)},
oT(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.k0(a)
s=3
return A.a(p.mD("GET",o),$async$aV)
case 3:n=c
if(n.a===404)throw A.b(A.KQ("not found"))
p.e3(n,A.l([200],t.t),o)
q=A.hb(p.dn(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aV,r)},
c9(a,b,c){return this.v5(a,b,c)},
v5(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$c9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.am("/api/collections/data/records")
s=3
return A.a(p.fh("POST",o,B.h.a9(A.m(["id",b,"store",c,"data",p.jv(a)],t.N,t.X),null)),$async$c9)
case 3:n=e
if(n.a===400&&p.rt(n))throw A.b(A.K5(p.f3(n)))
p.e3(n,A.l([200,201],t.t),o)
q=A.hb(p.dn(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c9,r)},
jv(a){var s,r,q
try{r=B.h.aF(a,null)
return r}catch(q){s=A.A(q)
r=A.KS("Corrupt local payload: "+A.r(s))
throw A.b(r)}},
rt(a){var s,r,q,p,o,n
try{s=this.dn(a)
r=J.Q(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
bV(a,b,c){return this.ym(a,b,c)},
ym(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$bV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.k0(c)
s=3
return A.a(p.fh("PATCH",o,B.h.a9(A.m(["data",p.jv(b)],t.N,t.X),null)),$async$bV)
case 3:n=e
p.e3(n,A.l([200],t.t),o)
q=A.hb(p.dn(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
j_(a,b,c,d,e){return this.yo(a,b,c,d,e)},
yo(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n,m,l
var $async$j_=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.k0(b)
m=t.N
l=A.t(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a9(d,null))
if(e==null)m=null
else{m=A.n(e).i("av<2>")
m=A.O(new A.av(e,m),m.i("o.E"))}s=3
return A.a(p.tQ(new A.mC("PATCH",n,B.aC,l,m==null?B.d2:m)),$async$j_)
case 3:o=g
p.e3(o,A.l([200],t.t),n)
q=A.hb(p.dn(o),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j_,r)},
bM(a,b,c){return this.vP(a,b,c)},
vP(a,b,c){var s=0,r=A.h(t.v),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$bM=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.t(i,i)
l=n.b.am("/api/files/data/"+A.pM(2,b,B.o,!1)+"/"+A.pM(2,a,B.o,!1))
k=i.a===0?l:l.l_(i)
s=3
return A.a(n.rX(new A.eL("GET",k,B.aC,null)),$async$bM)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.b2(new A.wO()).A().h2(B.cm),$async$bM)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.md(A.Kn(m.a,m.b,""),k))
case 5:q=n.qa(m.c)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bM,r)},
qa(a){var s,r,q={},p=this.d
if(p.a<=0)return a
s=A.oV()
q.a=q.b=null
r=new A.wG(q,p,s)
s.b=A.nU(new A.wC(q),new A.wD(q,r,a,s),new A.wE(q),new A.wF(q,r),!0,t.L)
return s.aE().gcL()},
bO(a){return this.xB(a)},
xB(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bO=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.am("/api/batch")
a6=A.l([],t.ic)
for(l=J.ax(a7),k=l.gt(a7),j=t.N,i=t.X,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",p.jv(g.d)],j,i)],j,h))}s=3
return A.a(p.fh("POST",a5,B.h.a9(A.m(["requests",a6],j,t.ew),null)),$async$bO)
case 3:o=b0
if(o.a===403)throw A.b(A.Kd(p.f3(o)))
if(o.a===400)throw A.b(A.JH(p.f3(o)))
p.e3(o,A.l([200],t.t),a5)
n=null
try{n=B.h.aF(o.c,null)}catch(a8){a6=A.A(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aZ("Batch response is not valid JSON: "+m.giI()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aZ("Batch response has no results array."))}else throw A.b(A.aZ("Batch response is not a list or envelope."))
e=c}a6=J.J(e)
if(a6.gl(e)!==l.gl(a7))throw A.b(A.aZ("Batch response has "+a6.gl(e)+" results for "+l.gl(a7)+" requests."))
b=A.l([],t.g2)
for(k=t.f,j=p.e,a=0;a<l.gl(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aZ("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.cL(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.hb(a3,j):null
g=a2?null:p.qO(a0)
a4=a2&&k.b(a3)?B.h.a9(a3.h(0,"data"),null):null
b.push(new A.hg(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bO,r)},
iR(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fh("POST",p.b.am("/api/batch"),B.h.a9(A.m(["requests",[]],t.N,t.kS),null)),$async$iR)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.ls(p.f3(o)))
if(n===408||n===429||n>=500)throw A.b(A.Gs("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iR,r)},
k0(a){return this.b.am("/api/collections/data/records/"+A.pM(2,a,B.o,!1))},
fh(a,b,c){return this.cr(new A.wK(this,a,b,c),new A.wL(),t.w)},
mD(a,b){return this.fh(a,b,null)},
tQ(a){return this.cr(new A.wM(this,a),new A.wN(),t.w)},
rX(a){return this.cr(new A.wI(this,a),new A.wJ(),t.lI)},
cr(a,b,c){return this.un(a,b,c,c)},
un(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cr=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.hk(),$async$cr)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$cr)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.jn(),$async$cr)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$cr)
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
i=A.A(g)
if(i instanceof A.dN){j=i
throw A.b(A.Gs(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cr,r)},
hk(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hk=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dN(),$async$hk)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.A(j)
l=A.ls("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hk,r)},
eN(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$eN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.iV(),$async$eN)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.A(j)
l=A.ls("token refresh failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eN,r)},
jn(){var s=0,r=A.h(t.q),q,p=this
var $async$jn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.eN()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jn,r)},
ka(a,b,c,d){return this.tO(a,b,c,d)},
tO(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$ka=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.t(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.bh(new A.eL(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ka,r)},
e3(a,b,c){if(B.b.E(b,a.a))return
throw A.b(this.md(a,c))},
md(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.f3(a)
if(401===s)return new A.bM(q)
if(403===s)return new A.ce(q)
if(404===s)return new A.cf(q)
if(408===s||429===s)return new A.cX(r,q)
if(400===s)return new A.dj(q)
if(s>=500)return new A.f_(q)
return new A.e0("Unexpected status "+s+" for "+b.m(0)+": "+q)},
f3(a){var s,r,q,p,o
try{s=this.dn(a)
r=J.Q(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.Q(s,"data")
if(t.f.b(q)){p=q
p=p.gS(p)}else p=!1
if(p){p=B.h.a9(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.B(p,0,500)},
dn(a){var s,r,q,p=null
try{p=B.h.aF(a.c,null)}catch(r){q=A.A(r)
if(t.Y.b(q)){s=q
throw A.b(A.aZ("Response is not valid JSON: "+s.giI()))}else throw r}if(t.f.b(p))return A.bm(p,t.N,t.X)
throw A.b(A.aZ("Expected a JSON object, got "+J.c9(p).m(0)+"."))},
qO(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.wP.prototype={
$1(a){return A.hb(a,this.a.e)},
$S:118}
A.wO.prototype={
$1(a){},
$S:11}
A.wG.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.A()
r=this.b
s.b=A.c4(r,new A.wH(s,this.c,r))},
$S:0}
A.wH.prototype={
$0(){var s=this.b
s.aE().kk(new A.dt("download stalled: no chunk within "+this.c.m(0)))
s.aE().q()
s=this.a.a
if(s!=null)s.A()},
$S:0}
A.wD.prototype={
$0(){var s,r,q=this,p=q.b
p.$0()
s=q.d
r=q.a
r.a=q.c.bC(new A.wz(p,s),new A.wA(r,s),new A.wB(r,s))},
$S:0}
A.wz.prototype={
$1(a){this.a.$0()
J.aO(this.b.aE(),a)},
$S:11}
A.wB.prototype={
$2(a,b){var s=this.a.b
if(s!=null)s.A()
this.b.aE().bp(a,b)},
$S:6}
A.wA.prototype={
$0(){var s=this.a.b
if(s!=null)s.A()
this.b.aE().q()},
$S:0}
A.wE.prototype={
$0(){var s=this.a.a
return s==null?null:s.bc()},
$S:0}
A.wF.prototype={
$0(){var s=this.a.a
if(s!=null)s.b3()
this.b.$0()},
$S:0}
A.wC.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.A()
s=s.a
return s==null?null:s.A()},
$S:120}
A.wK.prototype={
$1(a){var s=this
return s.a.ka(s.b,s.c,s.d,a)},
$S:61}
A.wL.prototype={
$1(a){return a.a},
$S:64}
A.wM.prototype={
$1(a){var s=this.b,r=t.N
r=A.bP(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dS(new A.mC(s.a,s.b,r,s.d,s.e))},
$S:61}
A.wN.prototype={
$1(a){return a.a},
$S:64}
A.wI.prototype={
$1(a){var s=this.b,r=t.N
r=A.bP(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.eJ(new A.eL(s.a,s.b,r,s.d))},
$S:136}
A.wJ.prototype={
$1(a){return a.a},
$S:138}
A.jE.prototype={}
A.i4.prototype={}
A.wR.prototype={
aC(){var s=0,r=A.h(t.H),q,p=this
var $async$aC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.y){s=1
break}p.y=!0
p.fg()
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
return A.a(n instanceof A.w?n:A.bH(n,t.H),$async$aL)
case 2:q.z=null
p=q.as
if(p!=null?(p.a.a&30)===0:o)p.al()
return A.e(null,r)}})
return A.f($async$aL,r)},
fg(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$fg=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.r,m=t.H
case 2:if(!o.y){s=3
break}q=5
s=8
return A.a(o.c0(),$async$fg)
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
return A.a(A.Kj(n.$1(k),m),$async$fg)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$fg,r)},
mk(a){var s=this.a,r=t.N
return s.a.eJ(new A.eL("GET",s.b.am("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
mE(a,b){var s=this.a,r=t.N
return s.a.bh(new A.eL("POST",s.b.am("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a9(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
c0(){return this.qp()},
qp(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$c0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.i5(),$async$c0)
case 3:k=b
m.a=k
s=4
return A.a(p.mk(k),$async$c0)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.eN(),$async$c0)
case 7:k=b
m.a=k
s=8
return A.a(p.mk(k),$async$c0)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.j0("realtime connect status "+l,null))
s=!p.y?9:10
break
case 9:s=11
return A.a(o.c.b2(new A.wU()).A(),$async$c0)
case 11:s=1
break
case 10:++p.ax
p.as=new A.aG(new A.w($.D,t.D),t.Q)
l=$.q7()
n=A.l([],t.s)
m.b=m.c=!1
n=o.c.bC(new A.wV(m,p,new A.wY(p),new A.BD(new A.As(l),n)),new A.wW(p),new A.wX(p))
p.z=n
s=!p.y?12:13
break
case 12:s=14
return A.a(n.A(),$async$c0)
case 14:p.z=null
s=1
break
case 13:s=15
return A.a(p.as.a,$async$c0)
case 15:l=p.Q
if(l!=null)l.A()
p.z=p.Q=null
if(m.b)throw A.b(A.j0("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$c0,r)},
e8(a,b){return this.re(a,b)},
re(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$e8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.mE(h,b),$async$e8)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.eN(),$async$e8)
case 10:s=9
return A.a(p.mE(g,d),$async$e8)
case 9:s=7
break
case 8:d=l
case 7:k=d.a
if(k!==204&&k!==200)throw A.b(A.j0("realtime subscribe status "+k,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
if(!t.f.b(n)){s=1
break}try{m=A.hb(n,p.a.e)
p.x.$1(new A.jE(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$e8,r)}}
A.x_.prototype={
$1(a){return A.Ik(a,this.a,this.b,A.Pt())},
$S:140}
A.wU.prototype={
$1(a){},
$S:11}
A.wY.prototype={
$0(){var s,r=this.a,q=r.e
if(q.a<=0)return
s=r.Q
if(s!=null)s.A()
r.Q=A.c4(q,new A.wZ(r))},
$S:0}
A.wZ.prototype={
$0(){var s,r=this.a
if(!r.y)return
s=r.z
if(s!=null)s.A()
r=r.as
if((r.a.a&30)===0)r.al()},
$S:0}
A.wV.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
l.c.$0()
s=l.d.w8(a)
for(r=s.length,q=l.b,p=l.a,o=t.P,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
q.at=q.at.U(new A.wS(p,q,m),o).ko(new A.wT(q))}},
$S:11}
A.wS.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.b){s=1
break}p=4
s=7
return A.a(n.b.e8(n.c,i.a),$async$$1)
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
return A.a(j instanceof A.w?j:A.bH(j,t.H),$async$$1)
case 8:i=i.as
if((i.a.a&30)===0)i.al()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.c&&n.c.a!=null){i.c=!0
try{n.b.w.$0()}catch(g){m=A.A(g)
l=A.af(g)
i=n.b
i.ay=m
i.ch=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:145}
A.wT.prototype={
$2(a,b){var s=this.a
if(s.ay==null)s.ay=a
if(s.ch==null)s.ch=b},
$S:6}
A.wW.prototype={
$0(){var s=this.a,r=s.Q
if(r!=null)r.A()
s=s.as
if((s.a.a&30)===0)s.al()},
$S:0}
A.wX.prototype={
$1(a){var s=this.a,r=s.Q
if(r!=null)r.A()
s=s.as
if((s.a.a&30)===0)s.al()},
$S:20}
A.BD.prototype={
w8(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.iZ()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.rq(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.d7(p,o,q)))
p=o+1
m=this.qC(B.a.yh(new A.dA(!0).dl(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.bi(s,p))
return r},
rq(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
r4(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.ak(k)
return l}s=m.b
r=B.b.C(k,"\n")
m.b=null
B.b.ak(k)
try{q=B.h.aF(r,l)
if(t.f.b(q)){p=A.bm(q,t.N,t.X)
o=J.Q(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.i4(o,l)
return new A.i4(l,p)}}catch(n){}return l},
qC(a){var s,r=this,q=null
if(a.length===0)return r.r4()
if(B.a.T(a,"PB_CONNECT:")){r.b=null
B.b.ak(r.c)
return new A.i4(B.a.cg(B.a.ac(a,11)),q)}if(B.a.T(a,":"))return q
if(B.a.T(a,"event:")){r.b=B.a.cg(B.a.ac(a,6))
return q}if(B.a.T(a,"data:")){s=B.a.cg(B.a.ac(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eL.prototype={}
A.dM.prototype={
ph(){return this.d.$0()},
gl(a){return this.c}}
A.mC.prototype={}
A.cR.prototype={}
A.dN.prototype={
m(a){return"HttpTransportException: "+this.a},
$iI:1}
A.e5.prototype={}
A.ww.prototype={
bh(a){return this.p5(a)},
p5(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bh=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eJ(a),$async$bh)
case 7:m=c
j=m.c
s=8
return A.a(B.aS.lq(j).eD(0).h2(B.W),$async$bh)
case 8:l=c
j=m.a
i=m.b
q=new A.cR(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.A(g)
if(j instanceof A.dN)throw g
else{k=j
j=A.j0("HTTP "+a.a+" "+a.b.m(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bh,r)},
dS(a){return this.p6(a)},
p6(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dS=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.KM(a6.a,a6.b)
h.r.D(0,a6.c)
h.x.D(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.ph(),$async$dS)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.IH(a0)
a3=new A.h_("application".toLowerCase(),"octet-stream".toLowerCase(),new A.d1(A.t(d,d),e))
b.push(new A.n3(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.p)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.bh(m).h2(B.W),$async$dS)
case 11:k=a8
g=k.w
s=12
return A.a(B.aS.lq(g).eD(0).h2(B.W),$async$dS)
case 12:j=a8
g=k.b
f=k.e
q=new A.cR(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.A(a5)
if(g instanceof A.dN)throw a5
else{i=g
g=A.j0("HTTP multipart "+a6.a+" "+a6.b.m(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dS,r)},
eJ(a){return this.xm(a)},
xm(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eJ=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.L9(a,a0)
a1.r.D(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gkB().kA(j)
i.q9()
i.y=A.PD(j)
h=i.gcO()
if(h==null){j=t.N
i.scO(A.E4("text","plain",A.m(["charset",i.gkB().gb_()],j,j)))}else{j=i.gcO()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.cb(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gkB().gb_()],j,j)
e=h.a
d=h.b
c=A.bm(h.c,j,j)
c.D(0,f)
i.scO(A.E4(e,d,c))}}}p=4
s=7
return A.a(n.a.bh(a1).h2(B.W),$async$eJ)
case 7:m=a5
j=t.N
l=A.t(j,j)
m.e.a5(0,new A.wx(l))
j=m.b
i=m.w
q=new A.e5(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.A(a2)
if(j instanceof A.dN)throw a2
else{k=j
a=A.j0("HTTP "+a+" "+a0.m(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eJ,r)}}
A.wx.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:38}
A.ro.prototype={
$1(a){return a.b===this.a},
$S:154}
A.rp.prototype={
$1(a){return a.b===this.a},
$S:159}
A.lO.prototype={
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
A.jH.prototype={
m(a){return"ProtocolEnvelopeException: "+this.a},
$iI:1}
A.cc.prototype={}
A.lK.prototype={
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
A.lS.prototype={
gY(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.k6.prototype={
gY(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.mt.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"refId",r.a)
q.j(0,"store",r.b)
q.j(0,"recordId",r.c)
q.j(0,"field",r.d)
q.j(0,"hash",r.e)
s=r.f
if(s!=null)q.j(0,"name",s)
s=r.r
if(s!=null)q.j(0,"group",s)
s=r.w
if(s!=null)q.j(0,"remoteName",s)
q.j(0,"state",r.x)
q.j(0,"nextRetryAt",r.y)
q.j(0,"attemptCount",r.z)
s=r.Q
if(s!=null)q.j(0,"lastError",s)
return q}}
A.mi.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"size",r.f)
q.j(0,"field",r.c)
q.j(0,"name",r.d)
s=r.e
if(s!=null)q.j(0,"group",s)
s=r.r
if(s!=null)q.j(0,"expectedSha256",s)
if(r.w)q.j(0,"allowVolatileBlobs",!0)
return q}}
A.mj.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.mo.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.mk.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.mh.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.mx.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
s=r.d
if(s!=null)q.j(0,"group",s)
return q}}
A.mr.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.mm.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
s=r.d
if(s!=null)q.j(0,"refId",s)
return q}}
A.ml.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.mu.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.mp.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.mb.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.nS.prototype={
p(){return B.j}}
A.mw.prototype={
gY(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.iT.prototype={
gY(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fT.prototype={
gY(){return"fileRefs"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.ms.prototype={
gY(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fS.prototype={
gY(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fQ.prototype={
gY(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.hv.prototype={
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
A.wa.prototype={}
A.jn.prototype={}
A.jq.prototype={}
A.jo.prototype={}
A.jr.prototype={}
A.jk.prototype={}
A.jl.prototype={}
A.jj.prototype={}
A.jp.prototype={}
A.jm.prototype={}
A.Co.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.I)},
$S:12}
A.xK.prototype={
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
A.xL.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.I)},
$S:12}
A.xM.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.R("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Gg(r.gn()))
return s},
$S:167}
A.eY.prototype={
p(){var s,r,q,p,o=this,n=A.t(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)r.push(A.fp(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.fp(o.c))
return n}}
A.xG.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.I)},
$S:12}
A.xH.prototype={
$1(a){return a.b===this.a},
$S:169}
A.b7.prototype={
a7(){return"QueryConditionOp."+this.b}}
A.cU.prototype={}
A.x4.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.I)},
$S:12}
A.x3.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.R("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.E(a);r.k();)s.push(A.E6(r.gn()))
return s},
$S:170}
A.jb.prototype={
p(){var s=A.t(t.N,t.X)
s.j(0,"kind","leaf")
s.D(0,this.a.p())
return s}}
A.jy.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.iv.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.iw.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.nr.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.xJ.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.I)},
$S:12}
A.cN.prototype={
a7(){return"AggregateFn."+this.b}}
A.y1.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.y2.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.I)},
$S:12}
A.nw.prototype={}
A.ne.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"stores",this.a)
r.j(0,"manifestFingerprints",this.b)
s=this.c
if(s!=null)r.j(0,"storePolicies",s)
return r}}
A.lF.prototype={
p(){return B.j}}
A.mA.prototype={
p(){return B.j}}
A.lI.prototype={
p(){return B.j}}
A.my.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nA.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n4.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.N4(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.ns.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lV.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lU.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.m7.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.mD.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.ll.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.me.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.nG.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.e7.prototype={
a7(){return"TransactionDurability."+this.b}}
A.of.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.og.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.oi.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.ok.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.oj.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.oh.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.oz.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.oA.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.oy.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.ln.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ox.prototype={
p(){return B.j}}
A.ov.prototype={
p(){return B.j}}
A.oD.prototype={
p(){return B.j}}
A.no.prototype={
p(){return B.j}}
A.lL.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.nB.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lR.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.lP.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.ny.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.li.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.lj.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.lT.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ah.prototype={}
A.h9.prototype={
gY(){return"ok"},
p(){return B.j}}
A.iC.prototype={
gY(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.mB.prototype={
gY(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.hl.prototype={
gY(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.hm.prototype={
gY(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.h4.prototype={
gY(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.hi.prototype={
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
A.ho.prototype={
gY(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.nF.prototype={
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
A.hC.prototype={
gY(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hJ.prototype={
gY(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.he.prototype={
gY(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fG.prototype={
gY(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.hL.prototype={
gY(){return"wipe"},
p(){return A.m(["rowsCleared",this.a,"blobsCleared",this.b],t.N,t.X)}}
A.f2.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"state",r.a.b)
q.j(0,"pending",r.b)
q.j(0,"conflicts",r.c)
q.j(0,"hidden",r.d)
q.j(0,"blocked",r.e)
q.j(0,"quarantined",r.f)
s=r.r
if(s!=null)q.j(0,"lastError",s)
s=r.w
if(s!=null)q.j(0,"quarantineError",s)
s=r.x
if(s!=null)q.j(0,"lastSyncAt",s)
s=r.y
if(s!=null)q.j(0,"lastSuccessfulSyncAt",s)
return q}}
A.bg.prototype={
m(a){var s=this
return"SyncReport(pulled: "+s.a.m(0)+", swept: "+s.b.m(0)+", quarantined: "+s.c.m(0)+", pushed: "+s.d+", deadLettered: "+s.e+", blocked: "+s.f+", discarded: "+s.r+", hadError: "+s.w+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"quarantined",s.c,"pushed",s.d,"deadLettered",s.e,"blocked",s.f,"discarded",s.r,"hadError",s.w],t.N,t.X)}}
A.o5.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.oa.prototype={
p(){return B.j}}
A.o0.prototype={
p(){return B.j}}
A.o1.prototype={
p(){return B.j}}
A.o3.prototype={
p(){return B.j}}
A.ob.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.o4.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.o8.prototype={
p(){return B.j}}
A.o6.prototype={
gY(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.o2.prototype={
gY(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.o9.prototype={
gY(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.o7.prototype={
gY(){return"syncStatusEvent"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.lt.prototype={
gY(){return"authRequired"},
p(){return B.j}}
A.f4.prototype={
m(a){return"WireException: "+this.a},
$iI:1}
A.DB.prototype={
$2(a,b){return B.a.a2(a.a,b.a)},
$S:179}
A.nk.prototype={
a7(){return"PlatformProfile."+this.b}}
A.nR.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.yc.prototype={
$1(a){return J.bK(a.gaU())},
$S:40}
A.yd.prototype={
$1(a){return B.a.E(a,"ENABLE_FTS5")},
$S:13}
A.iE.prototype={
a7(){return"ChangeOrigin."+this.b}}
A.dI.prototype={
a7(){return"ChangeAction."+this.b}}
A.e2.prototype={
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
if(!(b instanceof A.e2))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.p.X(b.e,s.e)&&B.p.X(b.f,s.f)&&B.p.X(b.r,s.r)},
gK(a){var s=this
return A.ch(s.a,s.b,s.c,s.d,B.p.ae(s.e),B.p.ae(s.f),B.p.ae(s.r))},
m(a){var s=this
return"RecordChangeEvent("+s.c.m(0)+" "+s.d.m(0)+" "+s.a+"/"+s.b+" changed: "+s.r.m(0)+")"}}
A.a5.prototype={}
A.qG.prototype={
ky(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
vV(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.qH.prototype={}
A.qI.prototype={}
A.tg.prototype={}
A.qd.prototype={
vW(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.d8(256)
q=this.b.vX(new Uint8Array(A.bc(a)),b,m,this.c)
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
vc(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.U("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.B("Unsupported ciphertext version 0x"+B.a.iO(B.c.l3(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.bc(B.f.V(a,1,13)))
n-=16
r=new Uint8Array(A.bc(B.f.bi(a,n)))
q=new Uint8Array(A.bc(B.f.V(a,13,n)))
try{n=this.b.vd(new A.jS(q,new A.je(r),s),b,this.c)
return n}catch(o){if(A.A(o) instanceof A.jT)throw A.b(A.B("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.dg.prototype={
a7(){return"KindViolation."+this.b}}
A.Dy.prototype={
$2(a,b){return this.a.E(0,a)},
$S:195}
A.CO.prototype={
$2(a,b){return B.a.a2(a.a,b.a)},
$S:196}
A.fi.prototype={$iI:1}
A.Bh.prototype={
ca(){var s=0,r=A.h(t.N),q,p=this,o
var $async$ca=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)}}
A.pG.prototype={}
A.i2.prototype={}
A.uo.prototype={
pz(a,b){var s=this,r=s.a.a.a$.b
r=new A.b0(r,A.n(r).i("b0<1>")).b2(new A.uS(s))
s.c!==$&&A.dD()
s.c=r},
wk(a){var s,r,q=this
A:{if(a instanceof A.ne){s=q.hF(a.a,a.b)
break A}if(a instanceof A.lF){s=A.be(q.hl(),t.V)
break A}if(a instanceof A.mA){s=A.be(new A.mB(!0,q.a.d.a),t.V)
break A}if(a instanceof A.lI){s=q.q().U(new A.uT(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.my){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bL(r,new A.uU(s,q),new A.uV())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.nA){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bL(r,new A.v5(s,q),new A.vg())
break A}if(a instanceof A.n4){s=q.rD(a.a,a.b,a.c)
break A}if(a instanceof A.ns){s=q.rY(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lV){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bL(r,new A.vi(s,q),A.I8())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lU){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bL(r,new A.vj(s,q),A.I8())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.m7){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bL(r,new A.vk(s,q),A.Ow())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mD){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bL(r,new A.vl(s,q),A.Oy())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.ll){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bL(r,new A.vm(s,q),A.Ov())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.me){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bL(r,new A.vn(s,q),A.Ox())
break A}if(a instanceof A.nG){s=q.tK(a.a,a.b,a.c)
break A}if(a instanceof A.of){s=q.pX(a.a,a.b)
break A}if(a instanceof A.og){s=q.fi(a.a,!0)
break A}if(a instanceof A.oi){s=q.fi(a.a,!1)
break A}if(a instanceof A.ok){s=q.hO(a.a,a.b)
break A}if(a instanceof A.oj){s=q.hN(a.a,a.b)
break A}if(a instanceof A.oh){s=q.hL(a.a,a.b)
break A}if(a instanceof A.oz){s=q.hW(a.a,a.b)
break A}if(a instanceof A.oA){s=q.uk(a.a,a.b)
break A}if(a instanceof A.oy){s=q.kg(a.a)
break A}if(a instanceof A.ln){s=q.a.a.e
s===$&&A.v()
s=s.eq(a.a).U(new A.uW(),t.V)
break A}if(a instanceof A.ox){s=q.a.a.e
s===$&&A.v()
s=s.h4().U(new A.uX(),t.V)
break A}if(a instanceof A.ov){s=q.a.a.e
s===$&&A.v()
s=s.j1().U(new A.uY(),t.V)
break A}if(a instanceof A.no){s=q.a.a.e
s===$&&A.v()
s=s.fR().U(new A.uZ(),t.V)
break A}if(a instanceof A.oD){s=q.a.a.e
s===$&&A.v()
s=s.h5().U(new A.v_(),t.V)
break A}if(a instanceof A.lL){s=q.a.a.e
s===$&&A.v()
s=s.eu(a.a,A.bX(0,a.b,0)).U(new A.v0(),t.V)
break A}if(a instanceof A.nB){s=q.a.a.e
s===$&&A.v()
s=s.dd(A.bX(0,a.a,0)).U(new A.v1(),t.V)
break A}if(a instanceof A.lR){s=q.a.a.fr
s===$&&A.v()
s=s.fH(a.a).U(new A.v2(q),t.V)
break A}if(a instanceof A.lP){s=q.a.a.fr
s===$&&A.v()
s=s.dR(a.a,a.b).U(new A.v3(q),t.V)
break A}if(a instanceof A.ny){s=q.a.a.fr
s===$&&A.v()
s=s.eO(a.b,a.c,a.a).U(new A.v4(),t.V)
break A}if(a instanceof A.li){s=q.a.a.fr
s===$&&A.v()
s=s.fl(a.a,a.b).U(new A.v6(),t.V)
break A}if(a instanceof A.lj){s=q.a.a.fr
s===$&&A.v()
s=s.eo(a.a,a.b).U(new A.v7(),t.V)
break A}if(a instanceof A.lT){s=q.ul(a.a)
break A}if(a instanceof A.mi){s=q.jB(a.a,a.b,a.f,a.c,a.d,a.e,a.r,a.w)
break A}if(a instanceof A.mj){s=q.jC(a.a,a.b)
break A}if(a instanceof A.mo){s=q.hx(a.a)
break A}if(a instanceof A.mh){s=q.jA(a.a)
break A}if(a instanceof A.mx){s=q.a.a.fx
s===$&&A.v()
s=s.fG(a.c,a.d,a.b,a.a).U(new A.v8(q),t.V)
break A}if(a instanceof A.mr){s=q.hy(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.ml){s=q.jD(a.a,a.b)
break A}if(a instanceof A.mk){s=q.hv(a.a)
break A}if(a instanceof A.mu){s=q.a.a.fx
s===$&&A.v()
s=s.fW(0,a.c,a.d,a.b,a.e,a.a).U(new A.v9(),t.V)
break A}if(a instanceof A.mm){s=q.hw(a.a,a.b,a.c,a.d)
break A}if(a instanceof A.mp){s=q.a.a.fx
s===$&&A.v()
s=s.bt(A.bX(0,a.a,0),A.bX(0,a.b,0)).U(new A.va(),t.V)
break A}if(a instanceof A.mb){s=q.a.a.fx
s===$&&A.v()
s=s.d1(a.a).U(new A.vb(),t.V)
break A}if(a instanceof A.nS){s=q.a.a.fx
s===$&&A.v()
s=s.giA().U(new A.vc(),t.V)
break A}if(a instanceof A.o5){s=q.em(a.a,a.b,a.c)
break A}if(a instanceof A.oa){s=q.cW().U(new A.vd(),t.V)
break A}if(a instanceof A.o0){s=q.hQ()
break A}if(a instanceof A.o1){s=q.el(new A.ve(q))
break A}if(a instanceof A.o3){s=q.el(new A.vf(q))
break A}if(a instanceof A.ob){s=q.hR(a.a)
break A}s={}
s.a=null
if(a instanceof A.o4){s.a=a.a
s=q.el(new A.vh(s,q))
break A}if(a instanceof A.o8){s=q.ax
s=A.be(new A.o9(s==null?B.e0:s),t.V)
break A}throw A.b(A.e1(u.P))}return s},
hF(a,b){return this.rV(a,b)},
rV(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hF=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.fy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.qM(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:h=n.f
h===$&&A.v()
s=9
return A.a(h.b0(j),$async$hF)
case 9:s=7
break
case 8:g=m.h(0,i)
if(g==null)A.u(A.B('No store "'+i+'" registered in this LocalPocket.'))
f=g.c
e=A.Ef(j)
d=new A.a7("")
A.cr(d,f.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.cb()
b=A.d6(c)
b.u(0,h)
b.q()
b=A.at(c.a.a)
d=new A.a7("")
A.cr(d,e.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.cb()
a=A.d6(c)
a.u(0,h)
a.q()
if(b!==A.at(c.a.a))throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){g=m.h(0,i)
if(g==null)A.u(A.B('No store "'+i+'" registered in this LocalPocket.'))
d=new A.a7("")
A.cr(d,g.c.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.cb()
b=A.d6(c)
b.u(0,h)
b.q()
b=a0!==A.at(c.a.a)
h=b}else h=!1
if(h)throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.p)(a1),++k
s=3
break
case 5:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
hl(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$hl=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bK(B.b.gH(m.b.p_("PRAGMA journal_mode")).gaU())
m=m.a.fx
m===$&&A.v()
s=3
return A.a(m.giA(),$async$hl)
case 3:o=b
m=l.e===B.aG
n=m?"opfs":"file"
q=new A.iC(l.a,l.b,l.c,l.d,m,n,o,J.Y(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
e_(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.aw(a)
if(b!=null){s=this.dv(b)
r=A.FV(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.u(A.B('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.dv(b)
return new A.fF(n,m,new A.iR(q),p.r)}return new A.fF(n,m,o.gbB(),null)},
qc(a){return this.e_(a,null)},
rD(a,b,c){return this.bL(c,new A.uD(this,a,c,b),new A.uE())},
bG(a,b){var s
A.at(B.m.v(B.e.v(A.al(this.a.a.aw(a).c.p()))).a)
if(a.length===0)A.u(A.aD(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.u(A.aD(s,"spec.limit","must not be negative"))
return new A.xI(a,b)},
bn(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.e_(a.a,a0),c=t.fC,b=new A.nq(d.a,d.b.a,d.c.b,A.l([],c),A.l([],c),A.l([],t.k),A.l([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s)b=this.pT(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.p)(d),++s){o=d[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bl)throw A.b(A.G('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.xo(n)}j=e.c
if(j!=null){d=A.Dl(j)
b.kh(d)
A.EI(d)
i=A.Cj(d,!0)
h=b.ho()
h.d.push(new A.ba(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.p)(d),++s,b=h){g=d[s]
q=g.a
b.dj(q)
h=b.ho()
h.r.push(new A.cy(q,g.b))}d=e.r
if(d!=null)b=b.lN(A.bQ(d,!0,r))
if(e.w)b=b.qt(!0)
if(e.x)b=b.qu(!0)
if(e.f)b=b.qr(!0)
else{d=e.e
if(d!=null){if(d<0)A.u(A.G("Limit must be non-negative, got "+A.r(d)+".",f))
b=b.qv(d)}}return b},
pT(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.o0(0,b.a,!0)
return a.yw(0,b.a,s)
case 1:return a.yD(0,b.a,b.c)
case 2:return a.yx(0,b.a,b.c)
case 3:return a.yy(0,b.a,b.c)
case 4:return a.yB(0,b.a,b.c)
case 5:return a.yC(0,b.a,b.c)
case 6:return a.yz(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.k
if(r.length!==2)throw A.b(A.U("between requires exactly two values.",null))
return a.yt(0,b.a,new A.a_(r[0],r[1]))
case 8:return a.yE(0,b.a,A.a0(b.c))
case 9:return a.yv(0,b.a,A.a0(b.c))
case 10:return a.yu(0,b.a,A.a0(b.c))
case 11:return a.o0(0,b.a,!0)
case 12:return a.yA(0,b.a,!0)}},
rY(a,b,c){return this.bL(c,new A.uF(this,this.bG(a,b),c),new A.uG())},
tK(a,b,c){return this.bL(c,new A.uJ(this,a,c,b),new A.uK())},
pX(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.B("A transaction session is already active on this database."))
s="tx"+ ++l.ay
r=$.D
q=t.D
p=t.Q
o=new A.w(r,q)
n=new A.pG(s,new A.aG(new A.w(r,q),p),new A.aG(o,p),A.l([],t.mc),new A.aI(Date.now(),0,!1))
k.j(0,s,n)
l.qM()
m=l.a.a
k=new A.ur(n)
if(a){if(A.ol(m)!=null)A.u(A.B(u.L))
r=m.b
r===$&&A.v()
k=r.xP(k,t.H)}else{r=b===B.bu?B.b1:B.q
r=m.b7(k,r,t.H)
k=r}n.w!==$&&A.dD()
n.w=k
k.ko(new A.up(l,n,s))
return o.U(new A.uq(s),t.V)},
fi(a,b){return this.tT(a,b)},
tT(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$fi=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.dv(a)
for(l=h.e,k=A.a2(l).i("bG<1>"),l=new A.bG(l,k),l=new A.ar(l,l.gl(0),k.i("ar<a1.E>")),k=k.i("a1.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.u(A.B("Future already completed"))
j.aN(null)}h.f=!b
h.c.al()
p=4
l=h.w
l===$&&A.v()
s=7
return A.a(l,$async$fi)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.A(g) instanceof A.fi){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.F(0,a)
s=n.pop()
break
case 6:q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fi,r)},
hO(a,b){return this.tH(a,b)},
tH(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.dv(a)
n=$.D
m=t.D
l=t.Q
k=new A.w(n,m)
j=new A.i2(b,new A.aG(new A.w(n,m),l),new A.aG(k,l))
l=o.r.a_(new A.uI(j),t.H)
j.f!==$&&A.dD()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hO)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
hN(a,b){return this.tF(a,b)},
tF(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hN=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.dv(a).e
f=B.b.nq(g,new A.uH(b))
if(f<0)throw A.b(A.B('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a2(g).i("bG<1>")
l=A.O(new A.bG(g,l),l.i("a1.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.cc(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.u(A.B("Future already completed"))
i.aN(null)
p=7
i=m.f
i===$&&A.v()
s=10
return A.a(i,$async$hN)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.A(e) instanceof A.fi))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:B.b.iY(g,f,g.length)
q=B.l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hN,r)},
hL(a,b){return this.tx(a,b)},
tx(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hL=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.dv(a).e
j=A.FV(k)
if(j==null||j.a!==b)throw A.b(A.B('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.al()
p=4
m=j.f
m===$&&A.v()
s=7
return A.a(m,$async$hL)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.A(i) instanceof A.fi)throw i
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
return A.f($async$hL,r)},
hW(a,b){return this.um(a,b)},
um(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.aw(a)
s=3
return A.a(p.qc(a).bW(b),$async$hW)
case 3:o="w"+ ++p.ay
n=A.oV()
n.sil(new A.nd(l,b,m,B.b2).je().nz(new A.uO(p,o),new A.uP(p,n,o)))
p.f.j(0,o,n.aE())
q=A.be(new A.hJ(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
uk(a,b){var s=this,r="w"+ ++s.ay,q=s.bn(s.bG(a,b),null),p=A.oV()
p.sil(new A.nt(q,q.gei(),B.b2).je().nz(new A.uQ(s,r),new A.uR(s,p,r)))
s.f.j(0,r,p.aE())
return A.be(new A.hJ(r),t.V)},
kg(a){return this.ua(a)},
ua(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$kg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.F(0,a)
if(o!=null)o.A()
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kg,r)},
qN(){if(this.w!=null)return
this.w=A.yH(A.bX(9e8,0,0),new A.uy(this))},
jB(a,b,c,d,e,f,g,h){return this.qW(a,b,c,d,e,f,g,h)},
qW(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$jB=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p.qN()
o=p.r
n="u"+ ++p.ay
o.nl()
m=o.r
if(m.a>=16)A.u(A.G("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.u(A.G("Invalid file size: "+c,null))
if(o.gnV()+c>536870912)A.u(A.G("Aggregate upload quota exceeded: "+o.gnV()+" + "+c+" > 536870912",null))
o=o.f.$0().jm(18e8)
m.j(0,n,new A.cQ(n,a,b,d,e,f,c,g,h,A.l([],t.bs),o))
q=new A.mw("u"+p.ay,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jB,r)},
jC(a,b){return this.qX(a,b)},
qX(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$jC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.u(A.G("Unknown upload session: "+a,null))
l=l.f
if(!j.Q.kO(l.$0())){k.F(0,a)
A.u(A.G("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.F(0,a)
A.u(A.G("Chunk too large: "+o+" > 262144",null))}n=j.y
m=j.r
if(n+o>m){k.F(0,a)
A.u(A.G("Upload exceeds declared size "+m,null))}j.z.push(b)
j.y+=o
j.Q=l.$0().jm(18e8)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jC,r)},
hx(a){return this.r0(a)},
r0(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hx=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.r
f=g.r.F(0,a)
if(f==null)A.u(A.G("Unknown upload session: "+a,null))
if(!f.Q.kO(g.f.$0()))A.u(A.G("Upload session expired: "+a,null))
g=f.y
o=f.r
if(g!==o)A.u(A.G("Upload size mismatch: expected "+o+" but got "+g,null))
g=p.a.a.fx
g===$&&A.v()
n=f.b
m=f.c
l=new A.uz(f).$0()
k=f.d
j=f.e
i=f.f
h=f.w
e=A
s=3
return A.a(g.dA(f.x,l,h,o,k,i,j,m,n),$async$hx)
case 3:q=new e.iT(p.jE(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hx,r)},
jA(a){return this.qV(a)},
qV(a){var s=0,r=A.h(t.V),q,p=this
var $async$jA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.F(0,a)
q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jA,r)},
hy(a,b,c,d,e){return this.r2(a,b,c,d,e)},
r2(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$hy=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.fx
k===$&&A.v()
s=3
return A.a(k.fN(c,d,b,e,a),$async$hy)
case 3:o=g
n="f"+ ++p.ay
m=new A.mn(new A.aI(Date.now(),0,!1))
m.c=new A.aI(Date.now(),0,!1)
l=A.oV()
l.sil(o.bC(new A.uA(p,m,n,l),new A.uB(p,n),new A.uC(p,n)))
k=l.aE()
m.d!==$&&A.dD()
m.d=k
p.x.j(0,n,m)
p.qL()
q=new A.ms(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
hw(a,b,c,d){return this.r_(a,b,c,d)},
r_(a,b,c,d){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hw=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.ej().x
o===$&&A.v()
n=A
s=3
return A.a(o.dB(c,b,d,a),$async$hw)
case 3:q=new n.iT(p.jE(f))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hw,r)},
jD(a,b){return this.qZ(a,b)},
qZ(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$jD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.B('Unknown file stream "'+a+'".'))
if((n.b-=b)<0)n.b=0
n.c=new A.aI(Date.now(),0,!1)
if(n.b<1048576){o=n.d
o===$&&A.v()
o.b3()}q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jD,r)},
qL(){if(this.y!=null)return
this.y=A.yH(A.bX(45e7,0,0),new A.uu(this))},
hv(a){return this.qY(a)},
qY(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.F(0,a)
s=n!=null?3:4
break
case 3:o=n.d
o===$&&A.v()
s=5
return A.a(o.A(),$async$hv)
case 5:case 4:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
jE(a){return new A.mt(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y,a.z,a.Q)},
em(a,b,c){return this.u2(a,b,c)},
u2(a,b,c){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$em=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.G("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cW(),$async$em)
case 3:if(b==null||b.length===0)throw A.b(A.G("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.Bh(c)
m=A.os(a)
l=o.fy
k=A.n(l).i("T<1>")
l=A.O(new A.T(l,k),k.i("o.E"))
s=4
return A.a(o.ax.cZ(m,b,l,n),$async$em)
case 4:j=a1
m=A.dr(null,null,t.n6)
l=A.dr(null,null,t.kf)
k=t.H
i=A.be(null,k)
h=new A.qg(A.be(null,k))
g=A.be(B.P,t.fD)
f=A.l([],t.s)
k=A.be(null,k)
e=new A.ys(A.PA(),o.db)
d=new A.o_(o,j,e,new A.uL(p),B.O,m,l,i,h,A.aP(t.N),g,f,k)
k=d.e=new A.yF(o,j.gle())
f=new A.tj(o,j,e,o.CW)
d.x=f
m=new A.xj(o,j,e,k,f,h)
d.f=m
d.r=new A.yq(o,j,e,k,m)
m=j.gi8()
d.w!==$&&A.dD()
d.w=new A.xs(o,j,e,d.grH(),m.a)
p.as=n
p.Q=d
m=d.ay
p.at=new A.b0(m,A.n(m).i("b0<1>")).b2(new A.uM(p))
s=5
return A.a(d.aC(),$async$em)
case 5:q=new A.o6(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$em,r)},
ej(){var s=this.Q
return s==null?A.u(A.G("Sync is not started.",null)):s},
hQ(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.ej()
o.cp("cycle")
n=A
s=3
return A.a(o.ff(),$async$hQ)
case 3:q=new n.o2(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
el(a){var s=0,r=A.h(t.V),q
var $async$el=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$el)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$el,r)},
hR(a){return this.u3(a)},
u3(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.as
n=p.ej()
if(o==null)throw A.b(A.G("Sync is not started.",null))
o.a=a
s=3
return A.a(n.eF(),$async$hR)
case 3:q=B.l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
cW(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.Q
q.Q=null
p=q.at
p=p==null?null:p.A()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bH(p,o),$async$cW)
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
jt(a){return new A.lO(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
ul(a){var s=this,r="w"+ ++s.ay,q=s.a.a.fr
q===$&&A.v()
s.f.j(0,r,q.ys(a).b2(new A.uN(s,r)))
return A.be(new A.hJ(r),t.V)},
dv(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.B('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.B('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aI(Date.now(),0,!1)
return s},
qM(){var s,r,q=this
if(q.e!=null)return
s=q.a.ay
r=s.a
if(r<=0)return
q.e=A.yH(A.bX(B.c.M(r,4),0,0),new A.ux(q,s))},
hX(a,b,c){return this.uq(a,b,c)},
bL(a,b,c){return this.hX(a,b,c,t.z)},
uq(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.dv(a)
o=c
s=3
return A.a(b.$0(),$async$hX)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cW(),$async$q)
case 2:p=q.f,o=new A.aS(p,p.r,p.e,A.n(p).i("aS<2>"))
case 3:if(!o.k()){s=4
break}s=5
return A.a(o.d.A(),$async$q)
case 5:s=3
break
case 4:p.ak(0)
p=q.w
if(p!=null)p.A()
q.w=null
p=q.e
if(p!=null)p.A()
q.e=null
p=q.y
if(p!=null)p.A()
q.y=null
q.r.r.ak(0)
for(p=q.x,o=new A.aS(p,p.r,p.e,A.n(p).i("aS<2>"));o.k();){n=o.d.d
n===$&&A.v()
n.A()}p.ak(0)
p=q.c
p===$&&A.v()
p.A()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.uS.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.bP(r,t.N,t.X)
s=a.f
s=s==null?null:A.bP(s,t.N,t.X)
this.a.b.u(0,new A.lK(a.a,a.b,a.c,a.d,r,s,A.c0(a.r,t.N)))},
$S:197}
A.uT.prototype={
$1(a){return B.l},
$S:8}
A.uU.prototype={
$0(){var s=this.a
return this.b.e_(s.c,s.a).bW(s.b)},
$S:203}
A.uV.prototype={
$1(a){return new A.hl(a)},
$S:204}
A.v5.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.e_(o.c,o.a).bW(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.p)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:209}
A.vg.prototype={
$1(a){return new A.hm(a)},
$S:210}
A.vi.prototype={
$0(){var s=this.b,r=this.a
return s.bn(s.bG(r.c,r.b),r.a).i9()},
$S:59}
A.vj.prototype={
$0(){var s=this.b,r=this.a
return s.bn(s.bG(r.d,r.b),r.a).ib(r.c)},
$S:59}
A.vk.prototype={
$0(){var s=this.b,r=this.a
return s.bn(s.bG(r.d,r.b),r.a).ih(r.c)},
$S:213}
A.vl.prototype={
$0(){var s=this.b,r=this.a
return s.bn(s.bG(r.c,r.b),r.a).iz()},
$S:54}
A.vm.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.bn(s.bG(q.e,q.b),q.a).di("SUM",q.c)
break
case 1:s=r.b
q=s.bn(s.bG(q.e,q.b),q.a).di("AVG",q.c)
break
case 2:s=r.b
q=s.bn(s.bG(q.e,q.b),q.a).di("MIN",q.c)
break
case 3:s=r.b
q=s.bn(s.bG(q.e,q.b),q.a).di("MAX",q.c)
break
default:q=null}return q},
$S:229}
A.vn.prototype={
$0(){var s=this.b,r=this.a
return s.bn(s.bG(r.c,r.b),r.a).ii()},
$S:233}
A.uW.prototype={
$1(a){return B.l},
$S:8}
A.uX.prototype={
$1(a){return B.l},
$S:8}
A.uY.prototype={
$1(a){return B.l},
$S:8}
A.uZ.prototype={
$1(a){return new A.he(a)},
$S:237}
A.v_.prototype={
$1(a){return new A.hL(a.b,a.a)},
$S:252}
A.v0.prototype={
$1(a){return new A.fG(a)},
$S:78}
A.v1.prototype={
$1(a){return B.l},
$S:8}
A.v2.prototype={
$1(a){var s,r,q=A.l([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jt(s.gn()))
return new A.fI(q)},
$S:79}
A.v3.prototype={
$1(a){return new A.fH(a==null?null:this.a.jt(a))},
$S:80}
A.v4.prototype={
$1(a){return B.l},
$S:8}
A.v6.prototype={
$1(a){return B.l},
$S:8}
A.v7.prototype={
$1(a){return B.l},
$S:8}
A.v8.prototype={
$1(a){var s,r,q=A.l([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.jE(s.gn()))
return new A.fT(q)},
$S:81}
A.v9.prototype={
$1(a){return B.l},
$S:8}
A.va.prototype={
$1(a){return new A.fS(a)},
$S:82}
A.vb.prototype={
$1(a){return new A.fQ(a)},
$S:83}
A.vc.prototype={
$1(a){return new A.hv(a)},
$S:84}
A.vd.prototype={
$1(a){return B.l},
$S:8}
A.ve.prototype={
$0(){return this.a.ej().bc()},
$S:3}
A.vf.prototype={
$0(){return this.a.ej().b3()},
$S:3}
A.vh.prototype={
$0(){return this.b.ej().he(this.a.a)},
$S:3}
A.uD.prototype={
$0(){var s=0,r=A.h(t.a),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.e_(p.b,a1)
a0.a.a.c===$&&A.v()
o=p.d
n=o instanceof A.jn
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.fT(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.iK(B.a3,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.H(a0)],t.s)}else a0=B.r
q=a0
s=1
break
case 4:n=o instanceof A.jq
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nY(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.iK(B.a4,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.H(a0)],t.s)}else a0=B.r
q=a0
s=1
break
case 11:k=o instanceof A.jo
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.nI(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.nJ(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.H(f))}}q=a0
s=1
break
case 18:k=o instanceof A.jr
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nZ(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bP(i,B.a4),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.p)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.H(f))}}q=a0
s=1
break
case 25:e=o instanceof A.jk
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.nF(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.xu(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.jl
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.nG(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.da(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.O(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.jj
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.n_(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.iJ(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.jp
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.nS(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.iJ(B.D,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.jm
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.iS(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dJ(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.e1(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:54}
A.uE.prototype={
$1(a){return new A.h4(a)},
$S:85}
A.uF.prototype={
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
return A.a(o.bn(m,n).qw(!0,k).d2(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.bn(m,n).qs(k).d2(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.bn(m,p.c).d2()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:86}
A.uG.prototype={
$1(a){return new A.hi(a.a,a.d,a.e,a.b,a.c)},
$S:77}
A.uJ.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.e_(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.y0(m,l,o.c.b,n.a)
if(l.w==null)A.u(A.tE('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.y.d)A.u(A.tE(u.r))
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
$S:88}
A.uK.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.nF(r.a,r.b))}return new A.ho(q)},
$S:89}
A.ur.prototype={
od(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.al()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.b0)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.od(a)},
$S:5}
A.up.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.F(0,this.c)
s.bA(a,b)}},
$S:6}
A.uq.prototype={
$1(a){return new A.hC(this.a)},
$S:91}
A.uI.prototype={
$1(a){return this.oe(a)},
oe(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.al()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.b0)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uH.prototype={
$1(a){return a.a===this.a},
$S:92}
A.uO.prototype={
$1(a){var s=a==null?B.bc:A.l([a],t.d)
this.a.b.u(0,new A.k6(this.b,s))},
$S:93}
A.uP.prototype={
$1(a){this.b.aE().A()
this.a.f.F(0,this.c)},
$S:20}
A.uQ.prototype={
$1(a){this.a.b.u(0,new A.k6(this.b,a))},
$S:94}
A.uR.prototype={
$1(a){this.b.aE().A()
this.a.f.F(0,this.c)},
$S:20}
A.uy.prototype={
$1(a){return this.a.r.nl()},
$S:29}
A.uz.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.z,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.aR(A.d5(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.p)(l),++j
s=3
break
case 5:case 1:return A.aR(null,0,r)
case 2:return A.aR(o.at(-1),1,r)}})
var s=0,r=A.Cv($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.CG(r)},
$S:96}
A.uA.prototype={
$1(a){var s=this,r=new Uint8Array(A.bc(a)),q=s.b
q.b=q.b+r.length
q.c=new A.aI(Date.now(),0,!1)
s.a.b.u(0,new A.fR(s.c,r,!1,null))
if(q.b>=1048576)s.d.aE().bc()},
$S:11}
A.uC.prototype={
$1(a){var s=this.a,r=this.b
s.x.F(0,r)
s.b.u(0,new A.fR(r,new Uint8Array(0),!0,J.Y(a)))},
$S:20}
A.uB.prototype={
$0(){var s=this.a,r=this.b
s.x.F(0,r)
s.b.u(0,new A.fR(r,new Uint8Array(0),!0,null))},
$S:0}
A.uu.prototype={
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
k.F(0,o.a)
n=n.d
n===$&&A.v()
n.A().b6(new A.us(),new A.ut(),q)}},
$S:29}
A.us.prototype={
$1(a){},
$S:44}
A.ut.prototype={
$2(a,b){},
$S:6}
A.uL.prototype={
$0(){this.a.b.u(0,B.bM)},
$S:2}
A.uM.prototype={
$1(a){var s=this.a
s.ax=a
s.b.u(0,new A.o7(a))},
$S:98}
A.uN.prototype={
$1(a){var s,r=this.a,q=A.l([],t.oS)
for(s=J.E(a);s.k();)q.push(r.jt(s.gn()))
r.b.u(0,new A.lS(this.b,q))},
$S:99}
A.ux.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.A()
j.e=null
return}j=Date.now()
s=A.n(i).i("av<2>")
s=A.O(new A.av(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a2(m).i("bG<1>"),m=new A.bG(m,l),m=new A.ar(m,m.gl(0),l.i("ar<a1.E>")),l=l.i("a1.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aN(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aN(null)
i.F(0,n.a)
m=n.w
m===$&&A.v()
m.b6(new A.uv(),new A.uw(),p)}}},
$S:29}
A.uv.prototype={
$1(a){},
$S:44}
A.uw.prototype={
$2(a,b){},
$S:6}
A.lN.prototype={
a7(){return"ConflictAlgorithm."+this.b}}
A.iN.prototype={
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
if(l!=null)l.unregister(m.d)}}}o.ak(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
cI(a){var s,r=this.a,q=r.F(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.F(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(s!=null)s.q()}q=this.b.xx(a)
r.j(0,a,q)
return q},
lf(a,b){var s=this.cI(a).lg(new A.bY(b)),r=A.n(s).i("Z<M.E,F<j,k?>>")
r=A.O(new A.Z(s,new A.td(),r),r.i("a1.E"))
return r},
p_(a){return this.lf(a,B.k)},
fz(a,b){this.cI(a).ew(new A.bY(b))},
kC(a){return this.fz(a,B.k)},
aJ(a,b){return this.w2(a,b)},
N(a){return this.aJ(a,B.k)},
w2(a,b){var s=0,r=A.h(t.H),q=this
var $async$aJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.fz(a,b)
return A.e(null,r)}})
return A.f($async$aJ,r)},
ab(a,b){return this.xO(a,b)},
bd(a){return this.ab(a,B.k)},
xO(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ab=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.lf(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ab,r)},
bR(a,b,c,d,e,f,g){return this.xL(a,b,c,d,e,f,g)},
aK(a,b,c,d){return this.bR(a,null,b,null,null,c,d)},
eK(a,b,c,d,e){return this.bR(a,b,c,null,null,d,e)},
nL(a,b,c,d){return this.bR(a,b,null,null,null,c,d)},
bQ(a,b,c){var s=null
return this.bR(a,s,s,s,s,b,c)},
xJ(a,b,c,d,e){return this.bR(a,null,b,null,c,d,e)},
xI(a,b,c,d,e){return this.bR(a,b,c,d,e,null,null)},
xK(a,b,c,d,e,f){return this.bR(a,b,c,null,d,e,f)},
xH(a,b,c,d){return this.bR(a,null,null,null,b,c,d)},
xG(a,b){var s=null
return this.bR(a,b,s,s,s,s,s)},
xL(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bR=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.C(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.k:g
q=p.ab(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
cz(a,b,c,d){return this.wM(0,b,c,d)},
aG(a,b,c){return this.cz(0,b,c,null)},
wM(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.U("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.eR(new A.T(c,n),new A.tc(),n.i("o.E"),m).C(0,", ")
k=B.b.C(A.a9(c.a,"?",!1,m),", ")
j=A.FI(d)
o=o.i("av<2>")
o=A.O(new A.av(c,o),o.i("o.E"))
p.fz("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ai(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cz,r)},
L(a,b,c,d){return this.yk(a,b,c,d)},
yk(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.gG(b)){q=0
s=1
break}o=J.bB(b.gJ(),new A.te(),t.N).C(0,", ")
n="UPDATE"+A.FI(null)+' "'+a+'" SET '+o
m=A.O(b.gaU(),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.D(m,d)}p.fz(n.charCodeAt(0)==0?n:n,m)
m=p.b.b
q=m.a.d.sqlite3_changes(m.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
W(a,b,c){return this.vf(a,b,c)},
bb(a){return this.W(a,null,null)},
ve(a,b){return this.W(a,b,null)},
vf(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$W=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b!=null&&b.length!==0){o+=" WHERE "+b
if(c!=null)B.b.D(n,c)}p.fz(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$W,r)},
v2(a,b,c){this.b.v3(B.bB,!0,!1,new A.tb(b),c)},
a_(a,b){return this.yg(a,b,b)},
yg(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$a_=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:if(n.d)throw A.b(A.cY("Database connection is wedged: an earlier rollback failed and left an open transaction. Reopen the database to recover."))
n.kC("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a_)
case 7:m=e
n.kC("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.A(g)
try{n.kC("ROLLBACK")}catch(f){k=A.A(f)
h=J.Y(k).toLowerCase()
if(!(B.a.E(h,"no transaction is active")||B.a.E(h,"cannot rollback"))){n.d=!0
throw A.b(A.cY("Rollback failed after a transaction error ("+A.r(k)+"); original error: "+A.r(l)+". The database connection is left in an open transaction; reopen to recover."))}}throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a_,r)},
$irL:1}
A.td.prototype={
$1(a){return A.bm(a,t.N,t.X)},
$S:100}
A.tc.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.te.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.tb.prototype={
$1(a){var s=a.gl(0)===0?null:a.gH(a)
return this.a.$1(s)},
$S:102}
A.r2.prototype={}
A.iM.prototype={
kq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aP(t.N),b=a.a
if(B.a.E(b,"'")||B.a.E(b,'"'))A.u(A.aB('Store name "'+b+"\" must not contain quote characters: a quote would break the FTS content reference and the database adapter's table quoting."))
if(B.a.T(b,"sqlite_")||B.a.T(b,"lp_"))A.u(A.aB('Store name "'+b+'" uses a reserved prefix (sqlite_ is SQLite-owned, lp_ is the engine metadata namespace).'))
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=$.Fd()
if(!k.b.test(l))A.u(A.aB('Field "'+l+u.Z))
if(B.aI.E(0,l))throw A.b(A.aB('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aB('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aB(e+l+'" cannot be unique.'))
if(B.b.bq(o,new A.ta(m)))throw A.b(A.aB(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.E(k,l)}else k=!1
if(k)throw A.b(A.aB(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.p)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ar(l,l.gl(0),k.i("ar<M.E>")),k=k.i("M.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.E(0,j)&&!B.aI.E(0,j))throw A.b(A.aB('Index column "'+j+'" is not a declared field of store "'+b+'".'))}for(b=l,i=0;i<b;b=r,i=h)for(h=i+1,b=h,g=0;r=o.length,g<r;++g){if(i===g)continue
if(B.aB.X(o[i].a,o[g].a)){if(i<g){r=o[i].a
d.push("Duplicate index columns "+r.m(r)+" (declarations "+b+" and "+(g+1)+").")}}else if(A.K2(o[g].a,o[i].a)&&!o[g].b){r=o[g].a
r=r.m(r)
l=o[i].a
d.push("Index "+r+" is prefix-subsumed by index "+l.m(l)+".")}}if(p){b=f.a
if(!b.d)throw A.b(A.tE(u.r))
if(q.b&&!A.Go(b.a,3,34))throw A.b(A.tE("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+b.a+")."))
for(b=q.a,r=b.$ti,b=new A.ar(b,b.gl(0),r.i("ar<M.E>")),r=r.i("M.E");b.k();){p=b.d
if(p==null)p=r.a(p)
if(!c.E(0,p))throw A.b(A.aB('FTS field "'+p+'" is not a declared field.'))}for(b=q.c.a.ga3(),b=b.gt(b);b.k();){r=b.gn()
A.FQ(r.a,r.b)}}for(b=s.length,n=0;n<b;++n){m=s[n]
r=m.b
if(r===B.J){q=m.f
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aB('Enum field "'+m.a+'" must declare values.'))
if(r===B.K){r=m.r
r=r==null||r.length===0}else r=!1
if(r)throw A.b(A.aB('Ref field "'+m.a+'" must declare its target store.'))}return new A.r2(f.q5(a),f.q4(a),f.q3(a),d)},
q5(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.C(n,'"',i)+'"')+" "+o.glk()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.J&&q){k=o.f
k.toString
j=new A.Z(k,new A.t9(),A.a2(k).i("Z<1,j>")).C(0,", ")
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
q4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=m.a
k=m.b
j=l.$ti.i("Z<M.E,j>")
i=A.O(new A.Z(l,A.q2(),j),j.i("a1.E"))
if(!k&&!l.E(l,"id"))i.push('"'+A.C("id",e,d)+'"')
h=m.c===B.b7?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.C(l,"_")
l=A.C(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.C(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}else{l=l.C(l,"_")
l=A.C(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.C(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.p)(r),++n){g=r[n]
if(g.b!==B.K)continue
if(B.b.bq(s,new A.t8(g)))continue
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
q3(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.r
s=a0.a
if(s.gl(0)===0)throw A.b(A.aB("FTS requires at least one field to index."))
r=A.l([],t.s)
q=a1.a
p=q+"_fts"
o=s.$ti.i("Z<M.E,j>")
n=A.O(new A.Z(s,A.q2(),o),o.i("a1.E"))
m=new A.t7(q,a0.c)
l=new A.Z(s,new A.t4(m),o).C(0,f)
k=new A.Z(s,new A.t5(m),o).C(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
r.push("CREATE VIRTUAL TABLE "+('"'+A.C(p,e,d)+'"')+" USING fts5(\n  "+B.b.C(n,f)+",\n  content = '"+q+"',\n  content_rowid = 'rowid'\n"+j)
s=A.C(q+"_ai",e,d)
o=A.C(q,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.C(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
s=A.C(q+"_ad",e,d)
o=A.C(q,e,d)
m=A.C(p,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.C(p,e,d)+'"')+", rowid, "+B.b.C(n,f)+a+k+");\nEND;")
i=new A.Z(n,new A.t6(),A.a2(n).i("Z<1,j>")).C(0," OR ")
s=A.C(q+"_au",e,d)
o=A.C(q,e,d)
m=A.C(p,e,d)
h=A.C(p,e,d)
g=B.b.C(n,f)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.C(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
return r}}
A.ta.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:53}
A.t9.prototype={
$1(a){return"'"+A.C(a,"'","''")+"'"},
$S:7}
A.t8.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:53}
A.t7.prototype={
$2(a,b){return A.F3(this.a,this.b,a,b)},
$S:104}
A.t4.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.t5.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.t6.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dV.prototype={
m(a){return A.d9(this).m(0)+": "+this.a},
$iI:1}
A.e9.prototype={}
A.hE.prototype={}
A.h8.prototype={}
A.iG.prototype={}
A.jG.prototype={}
A.iX.prototype={}
A.dq.prototype={}
A.jO.prototype={}
A.jM.prototype={}
A.jR.prototype={}
A.hn.prototype={}
A.k3.prototype={}
A.iY.prototype={}
A.jY.prototype={}
A.ji.prototype={}
A.iI.prototype={}
A.fL.prototype={}
A.jL.prototype={}
A.iR.prototype={}
A.bu.prototype={}
A.ti.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i=this.a,h=i.h(0,"ref_id")
h.toString
A.H(h)
s=i.h(0,"store")
s.toString
A.H(s)
r=i.h(0,"record_id")
r.toString
A.H(r)
q=i.h(0,"field")
q.toString
A.H(q)
p=i.h(0,"hash")
p.toString
A.H(p)
o=A.a0(i.h(0,"local_name"))
n=A.a0(i.h(0,"ref_group"))
m=A.a0(i.h(0,"remote_name"))
l=i.h(0,"state")
l.toString
A.H(l)
k=A.aU(i.h(0,"next_retry_at"))
if(k==null)k=0
j=A.aU(i.h(0,"attempt_count"))
if(j==null)j=0
return new A.bu(h,s,r,q,p,o,n,m,l,k,j,A.a0(i.h(0,"last_error")))},
$S:52}
A.vx.prototype={
gmx(){return this.b},
giA(){var s=0,r=A.h(t.y),q,p=this
var $async$giA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.gcB()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$giA,r)},
m1(a,b){return b},
fG(a,b,c,d){return this.wU(a,b,c,d)},
iD(a,b,c){return this.fG(a,null,b,c)},
wU(a,b,c,d){var s=0,r=A.h(t.ck),q,p=this,o,n,m,l,k
var $async$fG=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:l=p.a.a
l===$&&A.v()
l=l.gbB()
o=b==null
n=o?"store = ? AND record_id = ? AND field = ?":"store = ? AND record_id = ? AND field = ? AND ref_group = ?"
m=[d,c,p.m1(d,a)]
if(!o)m.push(b)
k=J
s=3
return A.a(l.b.bQ("lp_file_refs",n,m),$async$fG)
case 3:l=k.bB(f,A.OV(),t.A)
l=A.O(l,l.$ti.i("a1.E"))
q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
dA(a,b,c,d,e,f,g,h,i){return this.uM(a,b,c,d,e,f,g,h,i)},
uM(a,b,c,d,e,f,g,h,i){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$dA=A.c(function(j,a0){if(j===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=p.gmx()
k=!a
if(k){s=3
break}else a0=k
s=4
break
case 3:s=5
return A.a(l.gcB(),$async$dA)
case 5:a0=!a0
case 4:if(a0)throw A.b(A.B("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.m1(i,e)
s=6
return A.a(l.aH(b,c,d),$async$dA)
case 6:n=a0
s=7
return A.a(l.aW(n),$async$dA)
case 7:m=a0
if(m==null)m=0
s=8
return A.a(p.a.a_(new A.vy(p,i,h,o,n,m,A.im(),g,f),t.A),$async$dA)
case 8:q=a0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
fN(a,b,c,d,e){return this.xh(a,b,c,d,e)},
xh(a,b,c,d,e){var s=0,r=A.h(t.v),q,p=this,o,n,m,l,k,j
var $async$fN=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=3
return A.a(p.iD(a,c,e),$async$fN)
case 3:k=g
j=J.J(k)
if(j.gG(k))throw A.b(A.B("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.cv(k,new A.vA(d),new A.vB(d)):j.h(k,b)
if(o.x==="remote_only")throw A.b(new A.jO("File is remote_only; call files.download(ref) to fetch its bytes, or enable prefetchFiles on the store and sync."))
n=p.gmx()
j=p.a
m=j.a
m===$&&A.v()
m=m.gbB()
j=j.db.$0()
l=o.e
s=4
return A.a(m.b.aJ("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,l]),$async$fN)
case 4:q=n.bD(l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
fW(a,b,c,d,e,f){return this.y_(0,b,c,d,e,f)},
y_(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fW=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.iD(b,d,f),$async$fW)
case 3:n=h
m=J.J(n)
if(m.gG(n)){s=1
break}o=e!=null?m.cv(n,new A.vC(e),new A.vD(e)):m.h(n,c)
s=4
return A.a(p.a.a_(new A.vE(p,o,f,d,b),t.P),$async$fW)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fW,r)},
bt(a,b){return this.oP(a,b)},
oP(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bt=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.c8(a8),$async$bt)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.db.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a_(new A.vz(a2,n),t.P),$async$bt)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.cD(),$async$bt)
case 13:l=b0
s=J.da(l)?14:15
break
case 14:k=0
j=A.aP(t.N)
d=t.s
case 16:c=e.a
c===$&&A.v()
s=18
return A.a(c.gbB().b.xI("lp_blobs",A.l(["hash"],d),250,k,"hash ASC"),$async$bt)
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
if(J.DG(j,g)){s=19
break}p=22
s=25
return A.a(a3.fL(g),$async$bt)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.bb(g),$async$bt)
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
return A.a(b.gbB().b.xK("lp_blobs",A.l(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bt)
case 29:a0=b0
b=J.J(a0)
if(b.gG(a0)){s=28
break}b=b.gt(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.H(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.bb(a1),$async$bt)
case 34:case 33:s=35
return A.a(d.W("lp_blobs","hash = ?",[a1]),$async$bt)
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
return A.f($async$bt,r)},
d1(a){return this.vY(a)},
vY(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$d1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.v()
d=A
s=3
return A.a(e.gbB().b.bd("SELECT SUM(size) as total FROM lp_blobs"),$async$d1)
case 3:o=d.fq(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.x,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbB().b.bd("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$d1)
case 6:k=c
j=J.J(k)
if(j.gG(k)){s=5
break}j=j.gt(k)
case 7:if(!j.k()){s=8
break}i=j.gn()
if(o<=a){s=8
break}h=i.h(0,"hash")
h.toString
A.H(h)
i=i.h(0,"size")
i.toString
A.ai(i)
s=9
return A.a(g.bb(h),$async$d1)
case 9:s=10
return A.a(e.gbB().b.L("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$d1)
case 10:s=11
return A.a(f.W("lp_blobs","hash = ?",[h]),$async$d1)
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
A.vy.prototype={
$1(a){return this.of(a)},
of(a0){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:i=a0.b
h=p.a.a.db.$0()
g=t.s
f=p.b
e=p.c
d=p.d
c=p.e
s=3
return A.a(i.eK("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","local_name","ref_group","remote_name","state","next_retry_at","attempt_count","last_error"],g),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[f,e,d,c]),$async$$1)
case 3:b=a2
a=J.J(b)
if(a.gS(b)){q=A.FM(a.gH(b))
s=1
break}s=4
return A.a(A.it(i,c,h,p.f),$async$$1)
case 4:s=5
return A.a(i.eK("lp_outbox",A.l(["op_id","base_updated"],g),1,"store = ? AND record_id = ?",[f,e]),$async$$1)
case 5:o=a2
g=J.J(o)
n=g.gS(o)&&J.Q(g.gH(o),"base_updated")==null?A.a0(J.Q(g.gH(o),"op_id")):null
g=p.r
a=p.w
m=p.x
l=t.N
k=t.X
s=6
return A.a(i.cz(0,"lp_file_refs",A.m(["ref_id",g,"store",f,"record_id",e,"field",d,"hash",c,"local_name",a,"ref_group",m,"remote_name",null,"state","pending_upload"],l,k),B.V),$async$$1)
case 6:j=A.im()
s=7
return A.a(i.aG(0,"lp_op_queue",A.m(["op_id",j,"store",f,"record_id",e,"kind","fileUpload","payload_json",B.h.a9(A.m(["ref_id",g,"field",d,"hash",c,"name",a],l,l),null),"state","pending","depends_on_op",n,"created_at",h],l,k)),$async$$1)
case 7:a0.a1(new A.a5(f,A.ao([e],l)))
q=new A.bu(g,f,e,d,c,a,m,null,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:106}
A.vA.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vB.prototype={
$0(){return A.u(A.B("FileRef "+this.a+" not found"))},
$S:16}
A.vC.prototype={
$1(a){return a.a===this.a},
$S:25}
A.vD.prototype={
$0(){return A.u(A.B("FileRef "+this.a+" not found"))},
$S:16}
A.vE.prototype={
$1(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.a.a.db.$0()
n=q.b
m=n.x==="pending_upload"&&n.w==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.W("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aJ(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aG(0,"lp_op_queue",A.m(["op_id",A.im(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a9(A.m(["ref_id",j,"field",q.e,"remote_name",n.w,"hash",i],l,t.jv),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a1(new A.a5(q.c,A.ao([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vz.prototype={
$1(a){return this.og(a)},
og(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.fy,p=new A.bl(p,p.r,p.e,A.n(p).i("bl<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ab('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.C(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
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
return A.a(i.W("lp_file_refs","ref_id = ?",[j]),$async$$1)
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
$S:4}
A.cQ.prototype={}
A.tw.prototype={
gnV(){var s=this.r
return new A.av(s,A.n(s).i("av<2>")).wi(0,0,new A.tz())},
nl(){var s,r=this.r,q=A.n(r).i("av<2>"),p=q.i("cx<o.E,j>"),o=A.O(new A.cx(new A.ap(new A.av(r,q),new A.tx(this.f.$0()),q.i("ap<o.E>")),new A.ty(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.p)(o),++s)r.F(0,o[s])
return p}}
A.tz.prototype={
$2(a,b){return a+b.r},
$S:109}
A.tx.prototype={
$1(a){return!a.Q.kO(this.a)},
$S:110}
A.ty.prototype={
$1(a){return a.a},
$S:111}
A.mn.prototype={}
A.xh.prototype={
aH(a,b,c){return this.xD(a,b,c)},
fT(a){return this.aH(a,null,null)},
xD(a3,a4,a5){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$aH=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:c="p"+m.b++
b=t.N
a=t.X
a0=A.t(b,a)
a0.j(0,"sessionId",c)
if(a4!=null)a0.j(0,"expectedSha256",a4)
if(a5!=null)a0.j(0,"expectedSize",a5)
s=3
return A.a(m.aO("putBegin",a0,"put()"),$async$aH)
case 3:l=0
p=5
a0=new A.c5(A.cq(a3,"stream",t.K),t.lj)
p=8
case 11:s=13
return A.a(a0.k(),$async$aH)
case 13:if(!a7){s=12
break}k=a0.gn()
j=0
case 14:if(!(j<J.ag(k))){s=16
break}i=j+262144>J.ag(k)?J.ag(k):j+262144
h=J.Fq(k,j,i)
f=l
l=f+1
s=17
return A.a(m.aO("putChunk",A.m(["sessionId",c,"index",f,"bytes",B.R.gdC().v(h)],b,a),"put() chunk"),$async$aH)
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
return A.a(a0.A(),$async$aH)
case 18:s=n.pop()
break
case 10:s=19
return A.a(m.aO("putFinish",A.m(["sessionId",c],b,a),"put()"),$async$aH)
case 19:g=a7
a0=A.Ie(g,"put().hash")
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
return A.a(m.aO("putAbort",A.m(["sessionId",c],b,a),"put()"),$async$aH)
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
return A.f($async$aH,r)},
bD(a){return this.xi(a)},
xi(a){var s=0,r=A.h(t.v),q,p=this,o,n,m
var $async$bD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a
n=A
m=A
s=3
return A.a(p.aO("openBegin",A.m(["hash",a],t.N,t.X),"open()"),$async$bD)
case 3:q=p.ea(o,n.Ie(m.HI(c,"open()").h(0,"sessionId"),"open().sessionId"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bD,r)},
ea(a,b){return this.rW(a,b)},
rW(a,b){var $async$ea=A.c(function(c,d){switch(c){case 2:n=q
s=n.pop()
break
case 1:o.push(d)
s=p}for(;;)switch(s){case 0:p=3
j='open("'+a,i=j+'") chunk bytes',h=t.N,g=t.X,j+='") chunk'
case 6:s=8
return A.aR(m.aO("openChunk",A.m(["sessionId",b],h,g),j),$async$ea,r)
case 8:l=d
k=A.HI(l,j)
if(J.x(J.Q(k,"done"),!0)){s=7
break}if(!J.x(J.Q(k,"done"),!1)){j=A.G('"done" at open("'+a+'") chunk must be a bool.',null)
throw A.b(j)}s=9
q=[1,4]
return A.aR(A.d5(A.If(J.Q(k,"bytes"),i)),$async$ea,r)
case 9:s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
p=11
s=14
return A.aR(m.aO("openEnd",A.m(["sessionId",b],t.N,t.X),'open("'+a+'") end'),$async$ea,r)
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
var s=0,r=A.Cv($async$ea,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e
return A.CG(r)},
bb(a){return this.vg(a)},
vg(a){var s=0,r=A.h(t.H),q=this
var $async$bb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.aO("delete",A.m(["hash",a],t.N,t.X),"delete()"),$async$bb)
case 2:return A.e(null,r)}})
return A.f($async$bb,r)},
aZ(a){return this.w3(a)},
w3(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$aZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("exists",A.m(["hash",a],t.N,t.X),"exists()"),$async$aZ)
case 3:q=o.Ic(c,"exists()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aZ,r)},
aW(a){return this.p9(a)},
p9(a){var s=0,r=A.h(t.u),q,p=this,o
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("size",A.m(["hash",a],t.N,t.X),"size()"),$async$aW)
case 3:q=o.Id(c,"size()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aW,r)},
c8(a){return this.uT(a)},
uT(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$c8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("cleanTmp",A.m(["olderThanMs",B.c.M(a.a,1000)],t.N,t.X),"cleanTmp()"),$async$c8)
case 3:q=o.OH(c,"cleanTmp()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c8,r)},
cD(){var s=0,r=A.h(t.a),q,p=this,o
var $async$cD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("listHashes",B.j,"listHashes()"),$async$cD)
case 3:q=o.OG(b,"listHashes()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cD,r)},
fL(a){return this.x9(a)},
x9(a){var s=0,r=A.h(t.u),q,p=this,o
var $async$fL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("modifiedAt",A.m(["hash",a],t.N,t.X),"modifiedAt()"),$async$fL)
case 3:q=o.Id(c,"modifiedAt()")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
gcB(){var s=0,r=A.h(t.y),q,p=this,o
var $async$gcB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.aO("isDurable",B.j,"isDurable"),$async$gcB)
case 3:q=o.Ic(b,"isDurable")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcB,r)},
aO(a,b,c){return this.pR(a,b,c)},
pR(a,b,c){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$aO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=A.t(t.N,t.X)
o.j(0,"method",a)
o.D(0,b)
n=A
s=3
return A.a(p.a.cA("blobStore",o),$async$aO)
case 3:q=n.F1(e,A.Ol(),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aO,r)}}
A.Cz.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.B)},
$S:30}
A.qu.prototype={
fL(a){return A.be(null,t.u)}}
A.ew.prototype={
m(a){return"BlobMissingError: "+this.a},
$iI:1}
A.fC.prototype={
m(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iI:1}
A.nV.prototype={}
A.Dm.prototype={
$1(a){return B.b.D(this.a,a)},
$S:113}
A.iU.prototype={}
A.tj.prototype={
bF(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bF=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.co
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
return A.a(a3.fv(25),$async$bF)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.bg?10:12
break
case 10:s=13
return A.a(n.cQ(i,b2),$async$bF)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.nC(i.b),$async$bF)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.bh?17:18
break
case 17:s=19
return A.a(n.f9(i),$async$bF)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.nC(i.b),$async$bF)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.A(b3)
j=!0
e=i.w+1
d=a5.nd(e)
a8=i.b
a9=J.Y(f)
b0=a6.$0()
s=23
return A.a(a3.x6(a8,a9,e,b0+B.c.M(d.a,1000)),$async$bF)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.fy,a4=new A.bl(a3,a3.r,a3.e,A.n(a3).i("bl<1>")),a2=a2.x
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.u(A.B('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.bQ("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bF)
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
a1=A.a0(J.Q(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.d0(a0,a,a1,c),$async$bF)
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
case 25:q=new A.iU(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bF,r)},
cQ(a,b){return this.tc(a,b)},
tc(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cQ=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aF(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.H(a1)
l=a0.h(0,"hash")
l.toString
A.H(l)
k=A.a0(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.aZ(l),$async$cQ)
case 3:if(!a6)throw A.b(A.B("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.aW(l),$async$cQ)
case 4:j=a6
if(j==null)throw A.b(A.B("Blob size for hash "+l+" is unavailable"))
m=null
p=6
s=9
return A.a(n.b.aV(a3.d),$async$cQ)
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
if(m!=null){g=B.a.B(l,0,B.c.by(l.length,0,10))
for(f=m.e,e=f.length,d=g.length!==0,c=0;c<e;++c){b=f[c]
if(d&&B.a.T(b,g)||B.a.T(b,k)){h=b
break}}}a.a=null
s=h!=null?10:12
break
case 10:a.a=h
s=11
break
case 12:s=13
return A.a(n.b.ci(a3.d,A.m([k,new A.hw(k,j,new A.tl(a4,l))],t.N,t.h3)),$async$cQ)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga0(l):k
case 11:s=14
return A.a(n.a.a_(new A.tm(a,a1,a3),t.P),$async$cQ)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cQ,r)},
f9(a){return this.tb(a)},
tb(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$f9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aF(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.H(l)
o=A.a0(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.H(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.eR(a.d,A.l([o],t.s)),$async$f9)
case 5:case 4:s=6
return A.a(p.a.a_(new A.tk(l,n,a),t.P),$async$f9)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
d0(a,b,c,d){return this.vO(a,b,c,d)},
vO(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l
var $async$d0=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.d
l=o
s=4
return A.a(p.b.bM(c,a,null),$async$d0)
case 4:s=3
return A.a(l.fT(f),$async$d0)
case 3:n=f
s=5
return A.a(o.aW(n),$async$d0)
case 5:m=f
if(m==null)m=0
s=6
return A.a(p.a.a_(new A.tn(n,m,p.c.ay.$0(),c,b,d,a),t.P),$async$d0)
case 6:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d0,r)},
dB(a,b,c,d){return this.vR(a,b,c,d)},
vR(a,b,c,d){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i
var $async$dB=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:k=p.a
j=k.fx
j===$&&A.v()
s=3
return A.a(j.iD(a,b,d),$async$dB)
case 3:o=f
n=J.J(o)
if(n.gG(o))throw A.b(A.jN("No file references for "+d+"/"+b+"/"+a+"."))
m=c!=null?n.cv(o,new A.to(c),new A.tp(c,d,b,a)):n.cv(o,new A.tq(),new A.tr(o))
i=J
s=4
return A.a(k.x.aK("lp_blobs",1,"hash = ?",[m.e]),$async$dB)
case 4:if(i.da(f)&&m.x!=="remote_only"){q=m
s=1
break}l=m.w
if(l==null)throw A.b(A.G("File "+m.a+" in "+d+"/"+b+"/"+a+" has no remote filename recorded and cannot be downloaded (state: "+m.x+"). Only remotely-known attachments are downloadable.",null))
s=5
return A.a(p.d0(b,m.a,l,d),$async$dB)
case 5:i=J
s=6
return A.a(j.iD(a,b,d),$async$dB)
case 6:q=i.Jt(f,new A.ts(m),new A.tt(m))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dB,r)},
dH(a,b,c,d){return this.xe(a,b,c,d)},
xe(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dH=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.bQ("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dH)
case 2:e=a5
d=A.mW(a2,A.a2(a2).c)
c=J.ax(e)
b=t.U
a=A.c0(new A.eb(c.cF(e,new A.tu(),t.jv),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.fy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.E(0,k)?6:7
break
case 6:j=A.im()
i=n.h(0,a3)
if(i==null)A.u(A.B(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cz(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.ci),$async$dH)
case 8:case 7:case 4:a2.length===b||(0,A.p)(a2),++l
s=3
break
case 5:c=c.gt(e)
case 9:if(!c.k()){s=10
break}b=c.gn()
g=A.a0(b.h(0,"remote_name"))
if(g==null){s=9
break}if(d.E(0,g)){s=9
break}p=b.h(0,"state")
p.toString
A.H(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.W("lp_file_refs","ref_id = ?",[p]),$async$dH)
case 11:f=A.a0(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.T(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aJ(u.y,[f]),$async$dH)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dH,r)}}
A.tl.prototype={
$0(){return this.a.bD(this.b)},
$S:114}
A.tm.prototype={
$1(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a1(new A.a5(p.c,A.ao([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.tk.prototype={
$1(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.W("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aJ(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a1(new A.a5(p.c,A.ao([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.tn.prototype={
$1(a){return this.oa(a)},
oa(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.it(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a1(new A.a5(q.f,A.ao([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.to.prototype={
$1(a){return a.a===this.a},
$S:25}
A.tp.prototype={
$0(){var s=this
return A.u(A.jN("FileRef "+s.a+" not found for "+s.b+"/"+s.c+"/"+s.d+"."))},
$S:16}
A.tq.prototype={
$1(a){return a.x==="remote_only"},
$S:25}
A.tr.prototype={
$0(){return J.bK(this.a)},
$S:52}
A.ts.prototype={
$1(a){return a.a===this.a.a},
$S:25}
A.tt.prototype={
$0(){return A.u(A.jN("FileRef "+this.a.a+" disappeared during download."))},
$S:16}
A.tu.prototype={
$1(a){return A.a0(a.h(0,"remote_name"))},
$S:115}
A.Ds.prototype={
$1(a){if(typeof a!="string")return a
return this.a.eI(a)},
$S:34}
A.vo.prototype={
gbB(){var s=this.c
return s===$?this.c=new A.iR(this.b):s}}
A.nT.prototype={}
A.x1.prototype={
bW(a){var s,r=this.a
if(!r.I(a))return null
s=r.F(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.pU(s)
r.toString
t.G.a(r)}return r},
lh(a,b){var s,r=this.a
if(r.a>=256)r.F(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(b==null)s=null
else{s=A.pU(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
wN(a){var s,r
if(a.gG(a)){this.a.ak(0)
return}s=this.a
if(a.gl(a)>=s.a){s.ak(0)
return}for(r=a.gt(a);r.k();)s.F(0,r.gn())}}
A.mR.prototype={
aw(a){var s=this.fy.h(0,a)
if(s==null)throw A.b(A.B('No store "'+a+'" registered in this LocalPocket.'))
return s},
bz(a){var s,r,q=this
if(A.ol(q)!=null)A.u(A.B(u.L))
s=q.aw(a)
r=q.a
r===$&&A.v()
return new A.fF(q,s,r.gbB(),null)},
b7(a,b,c){var s
if(A.ol(this)!=null)A.u(A.B(u.L))
s=this.b
s===$&&A.v()
return s.b7(a,b,c)},
a_(a,b){return this.b7(a,B.q,b)},
q(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$q=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.go){s=1
break}n.go=!0
m=n.a$
m.a.q()
m.b.q()
p=4
s=7
return A.a(n.x.N("PRAGMA optimize"),$async$q)
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
A.pf.prototype={}
A.vH.prototype={
nW(a,b){var s=this.a;++s.f.e
return s.b.aJ(a,B.k)},
eq(a){return this.uI(a)},
uH(){return this.eq(null)},
uI(a){var s=0,r=A.h(t.H),q=this,p
var $async$eq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.N("ANALYZE"),$async$eq)
case 5:s=3
break
case 4:s=6
return A.a(p.N("ANALYZE "+('"'+A.C(a,'"','""')+'"')),$async$eq)
case 6:case 3:return A.e(null,r)}})
return A.f($async$eq,r)},
h4(){var s=0,r=A.h(t.H),q=this,p
var $async$h4=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.N("PRAGMA wal_checkpoint(TRUNCATE)"),$async$h4)
case 4:case 3:return A.e(null,r)}})
return A.f($async$h4,r)},
j2(){var s=0,r=A.h(t.H),q=this,p
var $async$j2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.N("PRAGMA wal_checkpoint(PASSIVE)"),$async$j2)
case 4:case 3:return A.e(null,r)}})
return A.f($async$j2,r)},
j1(){var s=0,r=A.h(t.H),q=this
var $async$j1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.b.N("VACUUM"),$async$j1)
case 2:return A.e(null,r)}})
return A.f($async$j1,r)},
fR(){return this.xy()},
xy(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a.a.a_(new A.vK(o),t.P),$async$fR)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fR,r)},
dd(a){return this.yc(a)},
yc(a){var s=0,r=A.h(t.H),q=this,p
var $async$dd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a.fy,p=new A.bl(p,p.r,p.e,A.n(p).i("bl<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.eu(p.d,a),$async$dd)
case 4:s=2
break
case 3:s=5
return A.a(q.fR(),$async$dd)
case 5:s=6
return A.a(q.h8(B.cn),$async$dd)
case 6:s=7
return A.a(q.h4(),$async$dd)
case 7:s=8
return A.a(q.uH(),$async$dd)
case 8:return A.e(null,r)}})
return A.f($async$dd,r)},
h8(a){return this.oQ(a)},
oQ(a){var s=0,r=A.h(t.H),q=this
var $async$h8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a.a_(new A.vJ(q,a),t.P),$async$h8)
case 2:return A.e(null,r)}})
return A.f($async$h8,r)},
eu(a,b){return this.uX(a,b)},
uX(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.a
h=i.x.$0()
g=h-B.c.M(b.a,1000)
j.a=0
o=i.a
n=o.aw(a).a
m=t.P,i=i.b
case 3:s=5
return A.a(i.ab("SELECT b.id FROM "+('"'+A.C(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",g,250]),$async$eu)
case 5:l=d
if(J.bs(l)){s=4
break}if(A.ol(o)!=null)A.u(A.B(u.L))
k=o.b
k===$&&A.v()
s=6
return A.a(k.b7(new A.vI(j,p,l,a,g,n),B.q,m),$async$eu)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eu,r)},
h5(){return this.yF()},
yF(){var s=0,r=A.h(t.no),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$h5=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:f={}
f.a=0
f.b=B.r
j=n.a
i=j.a
s=3
return A.a(i.a_(new A.vL(f,n),t.P),$async$h5)
case 3:for(i=i.fy,i=new A.aS(i,i.r,i.e,A.n(i).i("aS<2>"));i.k();)i.d.e.a.ak(0)
m=0
l=j.z
s=l!=null?4:5
break
case 4:j=f.b,i=j.length,h=0
case 6:if(!(h<j.length)){s=8
break}k=j[h]
p=10
s=13
return A.a(l.bb(k),$async$h5)
case 13:++m
p=2
s=12
break
case 10:p=9
e=o.pop()
s=12
break
case 9:s=2
break
case 12:case 7:j.length===i||(0,A.p)(j),++h
s=6
break
case 8:case 5:j=f.a
q=new A.po(m,j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h5,r)}}
A.vK.prototype={
$1(a){return this.ol(a)},
ol(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.bd("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.E(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.H(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.W("lp_outbox","store = ? AND record_id = ?",[m,A.H(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vJ.prototype={
$1(a){return this.oj(a)},
oj(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
s=2
return A.a(p.ve("lp_op_queue","state = 'done'"),$async$$1)
case 2:s=3
return A.a(p.W("lp_dead_letter","at < ?",[q.a.a.x.$0()-B.c.M(q.b.a,1000)]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vI.prototype={
$1(a){return this.oi(a)},
oi(a1){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a=a1.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=t.X,k=a1.c,j=a1.a.Q,i=q.e,h=q.f,g=q.b.a,f=g.Q,g=g.as
case 2:if(!p.k()){s=3
break}e=p.gn().h(0,"id")
e.toString
A.H(e)
a0=J
s=4
return A.a(a.ab("SELECT b.id FROM "+('"'+A.C(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,e,"clean",i]),$async$$1)
case 4:if(a0.bs(a3)){s=2
break}s=5
return A.a(a.ab("SELECT * FROM "+('"'+A.C(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[e]),$async$$1)
case 5:d=a3
c=J.J(d)
b=c.gS(d)?A.bJ(h,c.gH(d),f,g):null
s=6
return A.a(A.cM(a,n,e,!1),$async$$1)
case 6:s=7
return A.a(a.W("lp_outbox","store = ? AND record_id = ?",[n,e]),$async$$1)
case 7:s=8
return A.a(a.W(n,"id = ?",[e]),$async$$1)
case 8:s=9
return A.a(a.L("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.ao([e],m)
k.push(new A.a5(n,c))
j.r+=c.gl(0)
if(b!=null)a1.kz(B.aw,e,null,b,B.H,n);++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vL.prototype={
$1(a){return this.om(a)},
om(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
s=2
return A.a(i.N("PRAGMA defer_foreign_keys = ON"),$async$$1)
case 2:p=t.s
s=3
return A.a(i.xG("lp_blobs",A.l(["hash"],p)),$async$$1)
case 3:o=c
p=A.l([],p)
for(n=J.E(o);n.k();){m=n.gn().h(0,"hash")
m.toString
p.push(A.H(m))}n=q.a
n.b=p
p=q.b.a.a.fy,m=A.n(p).i("bl<1>"),l=new A.bl(p,p.r,p.e,m)
case 4:if(!l.k()){s=5
break}k=l.d
h=n
g=n.a
s=6
return A.a(i.bb(k),$async$$1)
case 6:h.a=g+c
s=4
break
case 5:j=0
case 7:if(!(j<8)){s=9
break}s=10
return A.a(i.N("DELETE FROM "+B.cO[j]),$async$$1)
case 10:case 8:++j
s=7
break
case 9:for(p=new A.bl(p,p.r,p.e,m),n=a.c,m=a.a.Q;p.k();){n.push(new A.a5(p.d,B.a9))
l=B.a9.gl(B.a9)
m.r+=l}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.w6.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:31}
A.w7.prototype={
$2(a,b){return B.c.a2(a.a,b.a)},
$S:117}
A.w1.prototype={
$1(a){return a.h(0,"name")},
$S:40}
A.w4.prototype={
$1(a){return this.oo(a)},
oo(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=q.b.a,m=0
case 2:if(!(m<p.length)){s=4
break}l=p[m]
s=5
return A.a(a.L(n,l.b,"rowid = ?",[l.a]),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++m
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:32}
A.w2.prototype={
$1(a){return this.on(a)},
on(a0){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:p=q.b,o=p.length,n=q.c,m=n.a,l=q.d,k=l.cx,l=l.cy,j=t.N,i=t.X,h=0
case 2:if(!(h<p.length)){s=4
break}g=p[h]
f=g.b
e=A.t(j,i)
for(d=g.c.ga3(),d=d.gt(d);d.k();){c=d.gn()
b=c.a
a=A.KH(n,b)
if(a==null)throw A.b(A.aB('Backfill on "'+m+'" produced unknown field "'+b+'".'))
c=c.b
A.G4(a,c)
e.j(0,b,A.D0(n,a,c,k,l,f))}s=5
return A.a(a0.L(m,e,"rowid = ?",[g.a]),$async$$1)
case 5:case 3:p.length===o||(0,A.p)(p),++h
s=2
break
case 4:s=6
return A.a(A.h1(a0,q.e,B.c.m(q.a.a)),$async$$1)
case 6:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:32}
A.w5.prototype={
$1(a){return this.op(a)},
op(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.cx,j=j.cy,h=q.e,g=t.ji,f=t.d3,e=q.d.d
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.bJ(k,p,i,j)
d=e==null?null:e.$1(o)
if(!f.b(d)){c=new A.w($.D,g)
c.a=8
c.c=d
d=c}s=4
return A.a(d,$async$$1)
case 4:b=a1
n=b==null?o:b
A.KK(k,n)
d=J.Q(o,"id")
d.toString
A.H(d)
m=A.dC(k,J.x(J.Q(n,"archived"),!0),i,j,d,n)
s=5
return A.a(a.aG(0,h,m),$async$$1)
case 5:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:32}
A.w3.prototype={
$1(a){return A.F3(this.a.a,this.b.c,"",a)},
$S:7}
A.wb.prototype={}
A.Dx.prototype={
$2(a,b){var s,r,q=J.Y(a)
if(t.f.b(b))this.a.j(0,q,A.br(b))
else{s=this.a
if(t.j.b(b)){r=J.bB(b,new A.Dw(),t.z)
r=A.O(r,r.$ti.i("a1.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:43}
A.Dw.prototype={
$1(a){return t.f.b(a)?A.br(a):a},
$S:41}
A.jI.prototype={}
A.xf.prototype={
$1(a){return this.oy(a)},
oy(a){var s=0,r=A.h(t.nh),q,p=this,o,n,m,l,k,j,i,h,g,f
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
return A.a(p.a.cA("resolver",g),$async$$1)
case 3:k=c
if(k==null){q=null
s=1
break}i='resolver "'+n+'"'
j=A.Cy(k,i)
i=A.EP(j.h(0,"merged"),i,"merged")
h=J.x(j.h(0,"needsReview"),!0)
if(typeof j.h(0,"note")=="string"){g=j.h(0,"note")
g.toString
A.H(g)}else g=null
q=new A.aT(i,h,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:119}
A.D1.prototype={
$1(a){return a.d!=null},
$S:31}
A.Cp.prototype={
$2(a,b){this.a.j(0,a,A.Hq(b,a,this.c,"field",'field override "'+a+'" of "'+this.b+'"'))},
$S:51}
A.Cq.prototype={
$1(a){return a.b===this.a.h(0,"missingRemote")},
$S:121}
A.Cr.prototype={
$0(){return A.u(A.G('"missingRemote" of "'+this.a+'" is not a known policy: '+A.r(this.b.h(0,"missingRemote")),null))},
$S:16}
A.Cs.prototype={
$1(a){return this.oO(a)},
oO(a){var s=0,r=A.h(t.a),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b
n=A
s=3
return A.a(p.a.cA("validator",A.m(["store",o,"record",a],t.N,t.X)),$async$$1)
case 3:q=n.NK(c,'validator of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:122}
A.Cm.prototype={
$1(a){return this.oM(a)},
oM(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c
m=A
s=3
return A.a(p.a.cA("documentMigration",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.EP(c,"document migration v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.Cn.prototype={
$1(a){return this.oN(a)},
oN(a){var s=0,r=A.h(t.G),q,p=this,o,n,m
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.a
n=p.c.a
m=A
s=3
return A.a(p.a.cA("migrationTransform",A.m(["store",o,"toVersion",n,"document",a],t.N,t.X)),$async$$1)
case 3:q=m.EP(c,"migration transform v"+n+' of "'+o+'"',"response")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:76}
A.ni.prototype={
xN(a){if(a>this.w)this.w=a},
nN(){return this.f++}}
A.vp.prototype={
v8(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aF(B.o.fq(B.af.v(a)),null))
i=J.Q(s,"store")
h=J.Q(s,"schemaVer")
g=J.Q(s,"shape")
f=J.Q(s,"ir")
q=t.lH
p=q.a(J.Q(s,"sort"))
if(p==null)p=B.ap
e=A.bQ(p,!0,t.N)
r=b?J.Q(s,"pv"):J.Q(s,"values")
q=q.a(r)
if(q==null)q=B.ap
d=A.bQ(q,!0,t.X)}catch(o){q=A.Ei(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.ce.X(e,n)||J.ag(d)!==n.length)throw A.b(A.Ei("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.aV(l)&&!A.a6(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.Ei(j))}return d}}
A.BL.prototype={
X(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.xI.prototype={
m(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.r(s.e)+", backward: "+s.z+")"}}
A.dk.prototype={}
A.am.prototype={}
A.cg.prototype={}
A.dF.prototype={}
A.db.prototype={}
A.ba.prototype={}
A.cy.prototype={}
A.nq.prototype={
cS(a,b){var s=this.gei()
s.Q.nN()
return this.c.ab(a,b)},
cn(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bQ(i.d,!0,h)
h=A.bQ(i.e,!0,h)
s=a0==null?A.bQ(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bQ(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bQ(i.f,!0,t.jS)
return new A.nq(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
ho(){var s=null
return this.cn(s,s,s,s,s,s,s,s,s)},
lN(a){var s=null
return this.cn(s,s,s,s,s,s,s,a,s)},
qt(a){var s=null
return this.cn(s,s,s,a,s,s,s,s,s)},
qu(a){var s=null
return this.cn(s,s,s,s,a,s,s,s,s)},
qr(a){var s=null
return this.cn(a,s,s,s,s,s,s,s,s)},
qv(a){var s=null
return this.cn(s,s,s,s,s,a,s,s,s)},
qx(a,b,c){var s=null
return this.cn(s,s,s,s,s,s,a,b,c)},
qw(a,b){var s=null
return this.cn(s,a,b,s,s,s,s,s,s)},
qs(a){var s=null
return this.cn(s,s,a,s,s,s,s,s,s)},
dj(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aB('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.G('Unknown field "'+a+'" for query.',a))},
bs(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.dj(a0)
s='"'+A.C(a0,'"','""')+'"'
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
if(i)r.push(new A.ba(s+b,[A.l3(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.ba(s+b,["%"+A.l3(a3)]))
g=a2!=null
if(g)r.push(new A.ba(s+b,["%"+A.l3(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.ba(s+" IS NULL",B.k))
e=a8===!0
if(e)r.push(new A.ba(s+" IS NOT NULL",B.k))
d=this.ho()
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
o0(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
yw(a,b,c){var s=null
return this.bs(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
yD(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
yx(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
yy(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
yB(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
yC(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
yz(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
yt(a,b,c){var s=null
return this.bs(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
yE(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
yv(a,b,c){var s=null
return this.bs(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
yu(a,b,c){var s=null
return this.bs(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
yA(a,b,c){var s=null
return this.bs(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
xo(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=A.l([],j)
q.a5(0,new A.xF(this,p,h))
if(p.length===0)continue
i.push("("+B.b.C(p," AND ")+")")}if(i.length===0)return this
o=this.ho()
o.e.push(new A.ba("("+B.b.C(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.p)(a),++r){q=a[r]
if(q.gS(0)){m=A.l([],j)
for(l=q.ga3().gt(0);l.k();){k=l.gn()
m.push(new A.am(k.a,"eq",[k.b]))}s.push(new A.dF(m))}}o.f.push(new A.db(s))
return o},
kh(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.am
r=s?a.a:l
if(s){this.dj(r)
break A}s=a instanceof A.cg
q=s?a.a:l
if(s){this.kh(q)
break A}p=a instanceof A.dF
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.db
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.p)(n),++m)this.kh(n[m])
break A}},
gco(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga0(r).a!=="id"
else s=!1
if(s)r.push(B.du)
return r},
glK(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gco(),q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
s.push(new A.cy(o.a,!o.b))}}else s=this.gco()
return s},
gtZ(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gco(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
k7(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.G5('Query on "'+this.gb_()+'" requires .limit(n) or .all().'))
return s},
gb_(){return this.b.a},
gei(){return this.a},
f0(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
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
if(r!=null){n=f.glR().v8(r,f.at)
m=f.mb(f.glK(),n)
d.push(m.a)
B.b.D(c,m.b)}l=d.length===0?"":" WHERE "+B.b.C(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.C(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.C(a,'"','""')+'"')+") AS v"}else r=f.gtM()
k=r}j=f.glK()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.Z(j,new A.xA(),A.a2(j).i("Z<1,j>")).C(0,", ")
h=A.L4(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.C(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.xB(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.k7():a3
g=e}return new A.a_(h+(g==null?"":" LIMIT "+A.r(g)),c)},
jr(a){return this.f0(null,null,!1,!1,a)},
qi(a,b){return this.f0(a,b,!1,!1,null)},
qg(){return this.f0(null,null,!1,!1,null)},
qj(a,b,c){return this.f0(a,null,b,c,null)},
qh(a){return this.f0(null,null,!1,a,null)},
gtM(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.lz())return"*"
o=A.O(o,t.N)
for(s=this.gco(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(!B.b.E(o,p))o.push(p)}return new A.Z(o,A.q2(),A.a2(o).i("Z<1,j>")).C(0,", ")},
glR(){var s=this.b
return new A.vp(s.a,s.b,this.gtZ(),this.gtW())},
gtW(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a9(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
mb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cu(a,new A.xC(a)),c=B.b.cu(b,new A.xD())
if(a.length>=2&&d&&!B.b.gH(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
s.push('"'+A.C(p.a,'"','""')+'"')}o=B.b.C(s,", ")
n=B.b.gH(a).b?"<":">"
return new A.a_("("+o+") "+n+" ("+B.b.C(A.a9(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
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
B.b.D(l,i)}}if(m.length===0)return B.dL
return new A.a_("("+B.b.C(m," OR ")+")",l)},
mc(a,b){var s,r,q,p,o=this.glR(),n=[]
for(s=this.gco(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gco(),p=r.length,q=0;q<r.length;r.length===p||(0,A.p)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a9(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bF.gdC().v(o)},
ex(a){return this.w9(a)},
d2(){return this.ex(null)},
w9(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ex=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.k7():a1
if(a0===0){q=B.dv
s=1
break}o=a0==null
n=p.jr(o?null:a0+1)
s=3
return A.a(p.cS(n.a,n.b),$async$ex)
case 3:m=a3
l=o?m:J.lh(m,a0).bU(0)
k=!o&&J.ag(m)>a0
o=p.y
j=o!=null
i=j&&p.lz()
h=p.b
if(i){i=A.O(o,t.N)
B.b.D(i,p.td())
g=A.OJ(h,l,p.gei().cx,i,p.gei().cy)}else g=A.OI(h,l,p.gei().cx,p.gei().cy)
i=p.at
if(i&&g.length!==0){h=A.a2(g).i("bG<1>")
f=A.O(new A.bG(g,h),h.i("a1.E"))
B.b.ak(g)
B.b.D(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hG(g),$async$ex)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.Pp(g,o):g
if(g.length!==0){b=e?p.mc(B.b.ga0(g),B.b.gH(g)):null
a=d?p.mc(B.b.ga0(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.cA(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
hG(a){return this.t7(a)},
t7(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga0(a)
e=p.gco()
n=[]
for(m=p.gco(),l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k)n.push(o.h(0,m[k].a))
j=p.mb(e,n)
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
return A.a(p.cS("SELECT 1 FROM "+('"'+A.C(p.b.a,'"','""')+'"')+" WHERE "+B.b.C(i," AND ")+" LIMIT 1",h),$async$hG)
case 3:q=d.da(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
lz(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.ey(o)==null)return!1}return!0},
td(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gco(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
i9(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$i9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.qh(!0)
m=A
s=3
return A.a(p.cS(o.a,o.b),$async$i9)
case 3:n=m.fq(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)},
ib(a){return this.uZ(a)},
uZ(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$ib=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.dj(a)
o=p.qj(a,!0,!0)
m=A
s=3
return A.a(p.cS(o.a,o.b),$async$ib)
case 3:n=m.fq(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)},
ih(a){return this.vN(a)},
vN(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$ih=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:p.dj(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.qx(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.jr(h)
s=3
return A.a(i.cS(B.a.l0(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$ih)
case 3:f=a0
o=p.b
e=o.ey(a)
n=[]
for(m=J.E(f),l=e==null,o=o.a,d=a==="archived";m.k();){c=m.gn().h(0,a)
if(l){if(d)c=J.x(c,1)}else c=A.EJ(e,c,null,null,"",o)
n.push(c)}q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)},
rv(a){var s,r,q=this.b.ey(a)
if(q==null)return!1
s=q.b
A:{r=B.X===s||B.Y===s||B.B===s||B.Z===s
break A}return r},
di(a,b){return this.pQ(a,b)},
pQ(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$di=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.dj(b)
if(!p.rv(b))throw A.b(A.G('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.qi(b,a)
s=3
return A.a(p.cS(o.a,o.b),$async$di)
case 3:n=d
m=J.J(n)
q=A.Cb(m.gG(n)?null:J.Q(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$di,r)},
iz(){var s=0,r=A.h(t.a),q,p=this,o,n,m,l,k,j
var $async$iz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lN(A.l(["id"],m))
k=l.qg()
s=3
return A.a(l.cS(k.a,k.b),$async$iz)
case 3:j=b
m=A.l([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.H(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iz,r)},
ii(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$ii=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.jr(p.k7())
n=J
s=3
return A.a(p.cS("EXPLAIN QUERY PLAN "+o.a,o.b),$async$ii)
case 3:q=n.bB(b,new A.xE(),t.X).C(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ii,r)}}
A.xF.prototype={
$2(a,b){this.a.dj(a)
this.b.push('"'+A.C(a,'"','""')+'" = ?')
this.c.push(b)},
$S:51}
A.xA.prototype={
$1(a){var s=A.C(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:124}
A.xB.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.C(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:125}
A.xC.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:126}
A.xD.prototype={
$1(a){return a!=null},
$S:15}
A.xE.prototype={
$1(a){return a.h(0,"detail")},
$S:40}
A.cW.prototype={
m(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cW&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gK(a){return A.ch(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.y0.prototype={
tL(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.G5('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
d2(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$d2=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.cg(a3).length===0){q=B.d3
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.eI(a3)
A.Lf(d)
if(e.b)A.Le(d)
c=f.a
b=c+"_fts"
a=A.l(['"'+A.C(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.C(a," AND ")
a0=n.tL()
a1=a0==null?"":" LIMIT "+A.r(a0)
f=A.C(b,'"','""')
e=A.C(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.C(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.Q.nN()
s=7
return A.a(n.c.ab(m,l),$async$d2)
case 7:j=a6
i=A.l([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.Q(h,"id")
f.toString
A.H(f)
e=J.Q(h,"score")
e.toString
J.aO(i,new A.cW(f,A.Hl(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.A(a4)
if(i instanceof A.cj){g=i
throw A.b(A.G("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d2,r)}}
A.cA.prototype={}
A.xS.prototype={}
A.cd.prototype={
a7(){return"FieldKind."+this.b}}
A.b6.prototype={
glk(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.az===s||B.J===s||B.a_===s||B.a0===s||B.K===s){r="TEXT"
break A}if(B.X===s||B.B===s||B.Z===s){r="INTEGER"
break A}if(B.Y===s){r="REAL"
break A}throw A.b(A.e1(u.P))}return r},
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
A.th.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fO(B.cY,A.H(m))
m=n.h(0,"name")
m.toString
A.H(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.b6(m,B.az,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.b6(m,B.X,r,!1,q,o,o,!1)
case 2:return new A.b6(m,B.Y,r,!1,q,o,o,!1)
case 3:return new A.b6(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.b6(m,B.Z,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.b6(m,B.J,r,!1,!1,A.fY(J.qa(t.j.a(n),p),p),o,!1)
case 6:return new A.b6(m,B.a_,!1,!1,q,o,o,!1)
case 7:return new A.b6(m,B.a0,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.b6(m,B.K,!1,!1,!1,o,A.H(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:127}
A.j2.prototype={
a7(){return"IndexScope."+this.b}}
A.dO.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.ua.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.qa(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dO(q,s,A.fO(B.cS,A.H(r)))},
$S:128}
A.fV.prototype={
p(){var s,r=t.N,q=t.X,p=A.t(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gS(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fV&&r.b===b.b&&B.aB.X(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gK(a){return A.ch(A.wg(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.tD.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.qa(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fV(p,r,t.f.b(q)?A.Kf(q.cs(0,s,t.X)):B.cw)},
$S:129}
A.eK.prototype={
eI(a){var s,r,q,p
for(s=this.a.ga3(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.E(r,p))continue
q=q.b
r=A.C(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.eK&&A.Ke(this.a,b.a)
else s=!0
return s},
gK(a){var s,r,q,p=this.a,o=p.gJ(),n=A.O(o,A.n(o).i("o.E"))
B.b.aj(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.p)(n),++r){q=n[r]
o.push(A.ch(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.wg(o)},
m(a){var s=this.a
return"FtsNormalization("+s.gl(s)+" rules)"}}
A.tC.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.t(s,s)
for(o=t.d2.a(o).ga3(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.H(p)
q=q.b
q.toString
A.H(q)
A.FQ(p,q)
r.j(0,p,q)}return new A.eK(A.JX(r,s,s))},
$S:130}
A.c3.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.yg.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ai(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.ap:p)
q=t.G
while(p.k())r.push(A.FL(q.a(p.gn())))
return new A.c3(o,s,r,null)},
$S:131}
A.dW.prototype={
a7(){return"MissingRemotePolicy."+this.b}}
A.lQ.prototype={}
A.ca.prototype={
gev(){var s,r,q,p,o=this,n=$.IN()
A.DQ(o)
s=n.a.get(o)
if(s==null){s=A.aP(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
ey(a){var s,r,q,p,o,n=this,m=$.IO()
A.DQ(n)
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
A.qN.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.H(h)
s=i.h(0,"version")
s.toString
A.ai(s)
r=A.l([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.FL(o.a(q.gn())))
q=A.l([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.Kp(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.H(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.Kg(o.a(l))}else l=null
k=A.l([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.ap:i)
while(i.k())k.push(A.Lo(o.a(i.gn())))
return new A.ca(h,s,r,q,B.cj,n,p,l,k,B.be,null,m,this.b.i("ca<0>"))},
$S(){return this.b.i("ca<0>()")}}
A.nE.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.xV.prototype={
$1(a){return a.d!=null},
$S:31}
A.xW.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.I)},
$S:12}
A.xX.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.B)},
$S:30}
A.xY.prototype={
$1(a){return J.Y(a)},
$S:33}
A.xZ.prototype={
b0(a){return this.xY(a)},
xY(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$b0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.a
h=i.a
g=h.fy
f=a.a
if(g.I(f))throw A.b(A.aB('Duplicate store name "'+f+'" in this open call.'))
p=A.Ef(a)
o=i.d
if(o.e===B.aG&&p.b.length!==0&&!A.OT(a,i.at))throw A.b(new A.k3('Store "'+f+'" declares executable features that cannot run on the worker runtime: '+B.b.C(p.b,", ")+"."))
s=2
return A.a(q.hj(a,p),$async$b0)
case 2:n=new A.iM(o).kq(a)
o=a.w
if(o!=null)A.Pq(i.b,f,o.c)
o=i.b
s=3
return A.a(o.aK("lp_stores",1,"store = ?",[f]),$async$b0)
case 3:m=c
l=J.J(m)
s=l.gG(m)?4:6
break
case 4:s=7
return A.a(o.N(n.b),$async$b0)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.N(l[j]),$async$b0)
case 11:case 9:l.length===k||(0,A.p)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.N(l[j]),$async$b0)
case 15:case 13:l.length===k||(0,A.p)(l),++j
s=12
break
case 14:l=a.b
i=i.x
s=16
return A.a(o.aG(0,"lp_stores",A.m(["store",f,"table_name",f,"schema_ver",l,"definition_json",B.h.a9(a.p(),null),"created_at",i.$0()],t.N,t.X)),$async$b0)
case 16:s=17
return A.a(A.h3(o,0,0,"create:"+f,i,l),$async$b0)
case 17:s=5
break
case 6:i=J.Q(l.gH(m),"schema_ver")
i.toString
A.ai(i)
l=a.b
if(i>l)throw A.b(A.Gl('Store "'+f+'" on disk is schema v'+i+", but this package supports v"+l+"."))
s=i<l?18:19
break
case 18:s=20
return A.a(A.h2(h,a,i),$async$b0)
case 20:case 19:s=21
return A.a(q.c5(a),$async$b0)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a9(a.p(),null),"schema_ver",l],t.N,t.X),"store = ?",[f]),$async$b0)
case 22:case 5:g.j(0,f,new A.nT(a,p,new A.x1(A.t(t.N,t.b))))
s=23
return A.a(q.ec(f,p),$async$b0)
case 23:return A.e(null,r)}})
return A.f($async$b0,r)},
hj(a,b){return this.pU(a,b)},
pU(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$hj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.a.b.aK("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$hj)
case 3:j=d
if(J.bs(j)){s=1
break}o=null
try{n=J.Q(J.bK(j),"v")
o=A.Ld(typeof n=="string"?B.h.aF(n,null):n)}catch(i){if(A.A(i) instanceof A.dV){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.at(B.m.v(B.e.v(A.al(o.p()))).a)!==A.at(B.m.v(B.e.v(A.al(b.p()))).a))throw A.b(A.aB('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
ec(a,b){return this.t4(a,b)},
t4(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$ec=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.al(b.p())
n=q.a.b
m=t.N
l=t.X
k=J
s=5
return A.a(n.aK("lp_meta",1,"k = ?",[p]),$async$ec)
case 5:s=k.bs(d)?2:4
break
case 2:s=6
return A.a(n.aG(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$ec)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$ec)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ec,r)},
i6(a){return this.uN(a)},
uN(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$i6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a.b.e
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$i6)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i6,r)},
c5(a){return this.ts(a)},
ts(a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$c5=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a0=p.a
a1=a0.b
a2=a4.a
s=3
return A.a(a1.eK("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a2]),$async$c5)
case 3:a3=a7
if(J.bs(a3)){s=1
break}o=null
try{n=J.Q(J.bK(a3),"definition_json")
m=typeof n=="string"?B.h.aF(n,null):n
l=m
l.toString
k=t.X
o=A.qM(A.bm(t.f.a(l),t.N,k),k)}catch(a5){if(A.A(a5) instanceof A.dq){s=1
break}else throw a5}i=o.w
h=a4.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.aB.X(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jZ()
$.lb()
f.aC()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a1.N("DROP TRIGGER IF EXISTS "+('"'+A.C(a2+d,'"','""')+'"')),$async$c5)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a1.N("DROP TABLE IF EXISTS "+('"'+A.C(a2+"_fts",'"','""')+'"')),$async$c5)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.iM(a0.d).kq(a4).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a1.N(l[e]),$async$c5)
case 16:case 14:l.length===k||(0,A.p)(l),++e
s=13
break
case 15:l=a2+"_fts"
k=A.C(l,'"','""')
s=17
return A.a(a1.N("INSERT INTO "+('"'+k+'"')+"("+('"'+A.C(l,'"','""')+'"')+") VALUES('delete-all')"),$async$c5)
case 17:k=h.a
c=k.$ti.i("Z<M.E,j>")
b=new A.Z(k,A.q2(),c).C(0,", ")
a=new A.Z(k,new A.y_(a4,h),c).C(0,", ")
l=A.C(l,'"','""')
s=18
return A.a(a1.N("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.C(a2,'"','""')+'"')),$async$c5)
case 18:case 12:if(f.b==null)f.b=$.nm.$0()
l=a4.b
s=19
return A.a(A.h3(a1,f.gng(),l,"fts:"+a2,a0.x,l),$async$c5)
case 19:case 1:return A.e(q,r)}})
return A.f($async$c5,r)},
ie(a){return this.vi(a)},
vi(a){var s=0,r=A.h(t.H),q=this,p
var $async$ie=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b.f
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$ie)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ie,r)}}
A.y_.prototype={
$1(a){return A.F3(this.a.a,this.b.c,"",a)},
$S:7}
A.dY.prototype={
a7(){return"MutationAction."+this.b}}
A.fF.prototype={
gb_(){return this.b.a.a},
f2(){var s=this.d
if(s!=null&&s.e){s=this.gb_()
throw A.b(new A.jL('Cannot mutate "'+s+'" through a read-only Tx.'))}},
fT(a){var s=this
if(s.d!=null)return s.iK(B.a3,a)
return s.a.b7(new A.qZ(s,a),B.q,t.H)},
nY(a){var s=this
if(s.d!=null)return s.iK(B.a4,a)
return s.a.b7(new A.r1(s,a),B.q,t.H)},
nI(a){var s=this
if(s.d!=null)return s.nJ(a)
return s.a.b7(new A.qY(s,a),B.q,t.H)},
nZ(a){var s=this
if(s.d!=null)return s.bP(a,B.a4)
return s.a.b7(new A.r0(s,a),B.q,t.H)},
nF(a,b){var s=this
if(s.d!=null)return s.xt(a,b)
return s.a.b7(new A.qV(s,a,b),B.q,t.H)},
nG(a){var s=this
if(s.d!=null)return s.da(a)
return s.a.b7(new A.qU(s,a),B.q,t.H)},
da(a){return this.xs(a)},
xs(a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$da=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:p.f2()
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
b=B.b.V(l,e,B.c.by(c,0,d))
a6=J
s=6
return A.a(o.ab(f+B.b.C(A.a9(b.length,"?",!1,m),", ")+")",b),$async$da)
case 6:d=a6.E(a9)
case 7:if(!d.k()){s=8
break}a=d.gn()
a0=a.h(0,"id")
a0.toString
k.j(0,A.H(a0),A.bJ(j,a,h,i))
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
b=B.b.V(a3,e,B.c.by(c,0,i))
a4=B.b.C(A.a9(b.length,"?",!1,m),", ")
i=A.l([g],j)
B.b.D(i,b)
h="store = ? AND record_id IN ("+a4+")"
a6=J
s=12
return A.a(o.bQ("lp_sync_row",h,i),$async$da)
case 12:f=a6.E(a9)
case 13:if(!f.k()){s=14
break}d=f.gn()
a=d.h(0,"record_id")
a.toString
a1.j(0,A.H(a),A.hA(d))
s=13
break
case 14:a6=J
s=15
return A.a(o.bQ("lp_outbox",h,i),$async$da)
case 15:i=a6.E(a9)
case 16:if(!i.k()){s=17
break}h=i.gn()
f=h.h(0,"record_id")
f.toString
a2.j(0,A.H(f),A.jB(h))
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
return A.a(p.dc(i,h,!0,f,a2.h(0,i),d),$async$da)
case 20:s=18
break
case 19:j=p.d
j.toString
m=A.aP(m)
for(n=new A.bl(a7,a7.r,a7.e,n.i("bl<1>"));n.k();)m.u(0,n.d)
j.a1(new A.a5(g,m))
case 1:return A.e(q,r)}})
return A.f($async$da,r)},
n_(a){var s=this
if(s.d!=null)return s.iJ(B.C,a)
return s.a.b7(new A.qR(s,a),B.q,t.H)},
nS(a){var s=this
if(s.d!=null)return s.iJ(B.D,a)
return s.a.b7(new A.r_(s,a),B.q,t.H)},
iS(a){var s=this
if(s.d!=null)return s.dJ(a)
return s.a.b7(new A.qW(s,a),B.q,t.H)},
dJ(a){return this.xA(a)},
xA(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.f2()
s=2
return A.a(q.eg(a),$async$dJ)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cM(n,m,a,!0),$async$dJ)
case 3:s=4
return A.a(n.W(m,"id = ?",[a]),$async$dJ)
case 4:l=t.N
o.a1(new A.a5(m,A.ao([a],l)))
if(p!=null){l=A.c0(p.gJ(),l)
l.F(0,"id")
o.bN(B.aw,l,a,null,p,B.H,m)}return A.e(null,r)}})
return A.f($async$dJ,r)},
dc(a,b,c,d,e,f){return this.xv(a,b,c,d,e,f)},
xu(a,b,c){return this.dc(a,b,c,null,null,null)},
xt(a,b){return this.dc(a,b,!1,null,null,null)},
xv(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$dc=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p.f2()
s=f!=null||e!=null?3:5
break
case 3:o=e
n=f
s=4
break
case 5:s=6
return A.a(p.c.b.ab("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$dc)
case 6:m=h
l=J.J(m)
if(l.gS(m)){k=l.gH(m)
n=A.hA(k)
o=k.h(0,"o_kind")!=null?A.jB(A.m(["store",k.h(0,"o_store"),"record_id",k.h(0,"o_record_id"),"kind",k.h(0,"o_kind"),"payload_json",k.h(0,"o_payload_json"),"base_updated",k.h(0,"o_base_updated"),"base_hash",k.h(0,"o_base_hash"),"dirty_fields",k.h(0,"o_dirty_fields"),"op_id",k.h(0,"o_op_id"),"created_at",k.h(0,"o_created_at"),"updated_at",k.h(0,"o_updated_at"),"depends_on_op",k.h(0,"o_depends_on_op")],t.N,t.X)):null}else{n=null
o=null}case 4:s=n!=null&&n.w===B.G&&o!=null?7:8
break
case 7:s=9
return A.a(p.eb(a,b,n,o,c),$async$dc)
case 9:s=1
break
case 8:s=10
return A.a(p.e4(a,b,c,o,d,n),$async$dc)
case 10:case 1:return A.e(q,r)}})
return A.f($async$dc,r)},
e4(a,b,c,d,e,f){return this.qS(a,b,c,d,e,f)},
m0(a,b,c,d,e){return this.e4(a,b,c,d,null,e)},
qS(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$e4=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=e==null?2:4
break
case 2:s=5
return A.a(q.eg(a),$async$e4)
case 5:s=3
break
case 4:h=e
case 3:m=h
if(m==null)throw A.b(A.jN("No record "+q.gb_()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.bP(m,p,o)
n.D(0,b)
o=A.t(p,o)
o.j(0,"id",a)
o.D(0,n)
s=6
return A.a(q.aS(B.M,c,m,a,d,f,o),$async$e4)
case 6:return A.e(null,r)}})
return A.f($async$e4,r)},
eb(a,b,c,d,e){return this.t1(a,b,c,d,e)},
t1(a8,a9,b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eb=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a6=null
try{a6=B.h.aF(b1.d,null)}catch(b3){a6=null}if(!t.G.b(a6)){q=n.m0(a8,a9,b2,b1,b0)
s=1
break}i=a6.h(0,"id")
if(i!=null&&!J.x(i,a8)){q=n.m0(a8,a9,b2,b1,b0)
s=1
break}h=t.N
g=t.X
f=A.bP(a6,h,g)
f.D(0,a9)
m=f
J.b1(m,"id",a8)
e=new A.a7("")
f=n.b
d=f.a
c=A.CN(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.bP(m,h,g)
b.F(0,"id")
a0=n.hS(a8,b,a,c)
s=a0 instanceof A.w?3:4
break
case 3:s=5
return A.a(a0,$async$eb)
case 5:case 4:a1=n.lV(a6,m,B.M)
l=null
b=a1.length===1&&d.gev().E(0,B.b.gap(a1))
a2=n.a
a3=a2.cx
a4=a2.cy
if(b){a5=d.ey(B.b.gap(a1))
b=a5.a
l=A.m([b,A.D0(d,a5,J.Q(m,b),a3,a4,a8),"extra",A.F2(d,m),"hidden",0],h,g)}else l=A.dC(d,J.x(J.Q(m,"archived"),!0),a3,a4,a8,m)
p=7
s=10
return A.a(n.c.b.L(d.a,l,"id = ?",[a8]),$async$eb)
case 10:p=2
s=9
break
case 7:p=6
a7=o.pop()
k=A.A(a7)
h=A.II(k,m)
throw A.b(h)
s=9
break
case 6:s=2
break
case 9:g=a2.dx
g===$&&A.v()
b=l
s=11
return A.a(g.bx(B.M,null,a1,n.c.b,a8,m,a6,b1,a,b,b0,f),$async$eb)
case 11:if(!b2){g=n.d
if(g!=null)g.a1(new A.a5(d.a,A.ao([a8],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g){g=a6
h.bN(B.A,A.mW(a1,A.a2(a1).c),a8,m,g,B.H,d.a)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eb,r)},
aS(a,b,c,d,e,f,g){return this.xc(a,b,c,d,e,f,g)},
iK(a,b){var s=null
return this.aS(a,!1,s,s,s,s,b)},
iJ(a,b){var s=null
return this.aS(a,!1,s,b,s,s,s)},
xa(a,b,c){var s=null
return this.aS(a,b,s,s,s,s,c)},
xb(a,b,c,d,e,f){return this.aS(a,b,c,null,d,e,f)},
xc(c0,c1,c2,c3,c4,c5,c6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$aS=A.c(function(c7,c8){if(c7===1){o.push(c8)
s=p}for(;;)switch(s){case 0:b8={}
n.f2()
m=null
b8.a=c2
l=null
b8.b=b8.c=null
i=new A.qT(b8,n,c5,c4)
s=c0===B.a3?3:5
break
case 3:h=A.a0(c6.h(0,"id"))
if(h==null)h=A.im()
g=$.q8()
if(!g.b.test(h))throw A.b(A.G('Invalid record id "'+h+'"; expected [A-Za-z0-9_]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aS)
case 6:l=n.f5(c6,m)
c0=b8.a==null?B.bf:B.M
s=4
break
case 5:s=c0===B.M?7:9
break
case 7:c3.toString
m=c3
s=10
return A.a(i.$1(m),$async$aS)
case 10:if(b8.a==null)throw A.b(A.jN("No record "+n.gb_()+"/"+A.r(m)+" to update."))
c6.toString
l=n.f5(c6,m)
s=8
break
case 9:s=c0===B.a4?11:13
break
case 11:h=A.a0(c6.h(0,"id"))
if(h==null)h=A.im()
g=$.q8()
if(!g.b.test(h))throw A.b(A.G('Invalid record id "'+h+'"; expected [A-Za-z0-9_]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aS)
case 14:g=b8.a
if(g==null){l=n.f5(c6,m)
c0=B.bf}else{l=A.bP(g,t.N,t.X)
for(g=new A.aK(c6,A.n(c6).i("aK<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.b1(l,e,f.b)}c0=B.M}s=12
break
case 13:c3.toString
m=c3
s=15
return A.a(i.$1(m),$async$aS)
case 15:g=b8.a
if(g==null)throw A.b(A.jN("No record "+n.gb_()+"/"+A.r(m)+" to archive/restore."))
g=A.bP(g,t.N,t.X)
g.j(0,"archived",c0===B.C)
l=g
case 12:case 8:case 4:d=new A.a7("")
g=n.b
e=g.a
c=l
b=A.CN(d,e,c,J.ag(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
a0=n.hS(m,l,a,b)
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
return A.a(c.bS(n.c.b,e.a,m),$async$aS)
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
if(a3&&a1.w===B.aa)throw A.b(A.FE("Record "+n.gb_()+"/"+A.r(m)+u.W))
a4=b8.a
a5=a4!=null
if(a5)a6=!a3||a1.w===B.z
else a6=!1
if(a5&&a6){a7=A.al(A.bp(e,a4))
a3=A.at(B.m.v(B.e.v(a7)).a)
a8=new A.qt(a7,a3,c?null:a1.c)}else a8=null
c=m
a3=l
a4=n.a
a5=a4.cx
a9=a4.cy
b0=A.dC(e,J.x(J.Q(l,"archived"),!0),a5,a9,c,a3)
b1=n.lV(b8.a,l,c0)
k=null
if(b8.a!=null&&b1.length===1&&e.gev().E(0,B.b.gap(b1))){b2=e.ey(B.b.gap(b1))
c=b2.a
k=A.m([c,A.D0(e,b2,J.Q(l,c),a5,a9,m),"extra",b0.h(0,"extra"),"hidden",0],t.N,t.X)}else k=b0
p=34
c=e.a
a3=n.c.b
s=b8.a==null?37:39
break
case 37:s=40
return A.a(a3.aG(0,c,k),$async$aS)
case 40:s=38
break
case 39:s=41
return A.a(a3.L(c,k,"id = ?",[m]),$async$aS)
case 41:case 38:p=2
s=36
break
case 34:p=33
b9=o.pop()
j=A.A(b9)
g=A.II(j,l)
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
return A.a(c.bx(c0,a8,b1,n.c.b,a3,l,a4,a2,a,b0,a1,g),$async$aS)
case 42:b4=c8
b5=b4.a
if(b5)b6=B.aw
else switch(c0.a){case 2:case 0:case 1:b6=b8.a==null?B.ah:B.A
break
case 3:b6=B.A
break
case 4:b6=B.cf
break
case 5:b6=B.cg
break
default:b6=null}if(b5){g=A.aP(t.N)
c=b8.a
c=J.E((c==null?l:c).gJ())
while(c.k()){a3=c.gn()
if(a3!=="id")g.u(0,a3)}b7=g}else if(c0===B.C||c0===B.D)b7=A.ao(["archived"],t.N)
else if(b8.a==null){g=l
c=A.n(g).i("T<1>")
a3=c.i("ap<o.E>")
b7=A.c0(new A.ap(new A.T(g,c),new A.qS(),a3),a3.i("o.E"))}else b7=A.mW(b1,A.a2(b1).c)
g=n.d
c=g==null
if(!c){a3=m
a4=b8.a
a5=b5?null:l
g.bN(b6,b7,a3,a5,a4,B.H,e.a)}if(!c1)if(!c)g.a1(new A.a5(e.a,A.ao([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aS,r)},
bP(a,b){return this.xF(a,b)},
nJ(a){return this.bP(a,B.a3)},
xF(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bP=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.f2()
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
A.a0(a0)
a2=a1?A.im():a0
a1=$.q8()
if(!a1.b.test(a2))throw A.b(A.G('Invalid record id "'+a2+'"; expected [A-Za-z0-9_]{15}.',"id"))
J.aO(l,new A.a_(a2,a))}if(!c){a3=A.t(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.av(a3,a3.$ti.i("av<2>")).bq(0,new A.qX())}else a5=!1
s=c3===B.a3&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.ef(m,l),$async$bP)
case 9:k=A.aP(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.p)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aO(k,i)}g.a1(new A.a5(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.A(c0) instanceof A.hN))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.t(k,t.G)
j=n.a,d=j.cx,j=j.cy,a1=t.s,a8=0
case 10:if(!(a8<J.ag(l))){s=12
break}a9=a8+2000
b0=B.c.by(a9,0,J.ag(l))
a4=A.l([],a1)
for(b1=J.Fq(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.p)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.bQ(e,"id IN ("+B.b.C(A.a9(a4.length,"?",!1,k),", ")+")",a4),$async$bP)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.H(b2),A.bJ(f,b1,d,j))
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
b6=B.b.V(b5,a8,B.c.by(a9,0,j))
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
b3.j(0,A.H(b1),A.hA(a4))
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
b4.j(0,A.H(d),A.jB(f))
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
case 28:a1=A.dU(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.xa(c3,!0,a1),$async$bP)
case 31:s=29
break
case 30:a1=A.dU(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.xb(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bP)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.p)(j),++b
s=25
break
case 27:g.a1(new A.a5(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bP,r)},
ef(a,b){return this.tk(a,b)},
tk(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$ef=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.iN?3:4
break
case 3:s=5
return A.a(n.du(a6,a7),$async$ef)
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
return A.a(n.dZ(a6,a4,h,g,m),$async$ef)
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
s=A.A(a5) instanceof A.cj?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aO(d,a7[c].a)
b=d
s=17
return A.a(n.dq(a6,b),$async$ef)
case 17:throw A.b(new A.hN())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.p)(i),++a1){a3=i[a1]
a.kz(B.ah,a3.a,a3.b,null,B.H,a0)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ef,r)},
du(a,b){return this.tl(a,b)},
tl(d7,d8){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6
var $async$du=A.c(function(d9,e0){if(d9===1){p.push(e0)
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
m='INSERT INTO "'+d5+'" ('+A.ir(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.ir(B.a2)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.ir(B.a1)+") VALUES "
j=new A.qQ()
b1=new A.a7("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=d0.z!=null||b2
b4=b2?A.l([],t.jO):null
i=0,a9=b4==null,b5=d1.cx,b6=d1.cy,b7=d0.b
case 2:if(!(b8=i,b9=d8.length,b8<b9)){s=4
break}h=B.w.by(i+500,0,b9)
g=h-i
f=[]
e=[]
d=[]
c0=i
case 5:if(!(c0<h)){s=7
break}c1=d8[c0]
c2=c1.a
c3=c1.b
c4=b3?o.f5(c3,c2):c3
b1.a=""
c5=A.CN(b1,d0,c4,c2)
b8=b1.a
c6=b8.charCodeAt(0)==0?b8:b8
c7=o.hS(c2,c4,c6,c5)
s=c7 instanceof A.w?8:9
break
case 8:s=10
return A.a(c7,$async$du)
case 10:case 9:A.O1(f,d0,J.x(c4.h(0,"archived"),!0),b5,b6,c2,c4)
b8=d1.dx
b8===$&&A.v()
c8=b8.h9()
A.I3(e,"",null,d2,null,'["*"]',B.v,c8,c6,c2,d5,d2)
A.I4(d,B.ab,0,"",null,null,'["*"]',null,null,1,0,c8,c2,null,b7,d5,B.G)
if(!a9)b4.push(new A.a_(c2,c4))
case 6:++c0
s=5
break
case 7:c=!1
b=!1
q=12
b8=d3.cI(A.r(m)+A.r(j.$2(J.ag(n),g)))
if(b8.r||b8.b.r)A.u(A.B(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eZ(new A.bY(f))
b8.ht()
c=!0
b8=d3.cI(A.r(l)+A.r(j.$2(11,g)))
if(b8.r||b8.b.r)A.u(A.B(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eZ(new A.bY(e))
b8.ht()
b=!0
b8=d3.cI(A.r(k)+A.r(j.$2(16,g)))
if(b8.r||b8.b.r)A.u(A.B(u.f))
if(!b8.f){b9=b8.a
b9.c.d.sqlite3_reset(b9.b)
b8.f=!0}b8.eZ(new A.bY(d))
b8.ht()
q=1
s=14
break
case 12:q=11
d6=p.pop()
s=A.A(d6) instanceof A.cj?15:17
break
case 15:a=A.l([],d4)
for(a0=0;a0<i;++a0)J.aO(a,d8[a0].a)
a1=a
s=18
return A.a(o.dq(d7,a1),$async$du)
case 18:s=c||b?19:20
break
case 19:a2=A.l([],d4)
for(a3=i;a3<h;++a3)J.aO(a2,d8[a3].a)
a4=a2
a5=B.b.C(A.a9(J.ag(a4),"?",!1,t.N),", ")
s=c?21:22
break
case 21:s=23
return A.a(d7.W(d5,"id IN ("+A.r(a5)+")",a4),$async$du)
case 23:case 22:s=b?24:25
break
case 24:a6=A.l([d5],d4)
J.Fl(a6,a4)
a7=a6
s=26
return A.a(d7.W("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$du)
case 26:case 25:case 20:throw A.b(new A.hN())
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
a8.kz(B.ah,a2.a,a2.b,null,B.H,d5)}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$du,r)},
dZ(a,b,c,d,e){return this.pW(a,b,c,d,e)},
pW(a9,b0,b1,b2,b3){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$dZ=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.f5(b2,b1)
a3=new A.a7("")
a4=A.CN(a3,a1,a2,b1)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
a7=n.hS(b1,a2,a6,a4)
s=a7 instanceof A.w?3:4
break
case 3:s=5
return A.a(a7,$async$dZ)
case 5:case 4:a5=n.a
m=A.dC(a1,J.x(a2.h(0,"archived"),!0),a5.cx,a5.cy,b1,a2)
a5=a5.dx
a5===$&&A.v()
e=a5.h9()
a5=a1.a
l=A.I7("",null,b3,'["*"]',B.v,e,a6,b1,a5,b3)
k=A.Om('["*"]',1,e,b1,a1.b,a5,B.G)
j=!1
i=!1
p=7
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.eR(new A.T(d,c),new A.qO(),c.i("o.E"),b).C(0,", ")
g=B.b.C(A.a9(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=b0.cI(f)
d=m
a=A.n(d).i("av<2>")
d=A.O(new A.av(d,a),a.i("o.E"))
c.ew(new A.bY(d))
j=!0
b0.cI("INSERT INTO lp_outbox ("+A.ir(B.a2)+") VALUES ("+B.b.C(A.a9(11,"?",!1,b),", ")+")").ew(new A.bY(A.IB(l,B.a2)))
i=!0
b0.cI("INSERT INTO lp_sync_row ("+A.ir(B.a1)+") VALUES ("+B.b.C(A.a9(16,"?",!1,b),", ")+")").ew(new A.bY(A.IB(k,B.a1)))
p=2
s=9
break
case 7:p=6
a8=o.pop()
s=j?10:11
break
case 10:s=12
return A.a(a9.W(a5,"id = ?",[b1]),$async$dZ)
case 12:case 11:s=i?13:14
break
case 13:s=15
return A.a(a9.W("lp_outbox","store = ? AND record_id = ?",[a5,b1]),$async$dZ)
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
return A.f($async$dZ,r)},
dq(a,b){return this.qA(a,b)},
qA(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$dq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.C(A.a9(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.W(m,"id IN ("+o+")",b),$async$dq)
case 3:m=A.l([m],t.s)
B.b.D(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.W("lp_outbox",n,m),$async$dq)
case 4:s=5
return A.a(a.W("lp_sync_row",n,m),$async$dq)
case 5:case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
f5(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=a.ga3(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.nK("archived",new A.qP())
return p},
lV(a,b,c){var s,r,q,p,o
if(a==null)return B.d4
s=t.N
r=A.aP(s)
s=A.c0(a.gJ(),s)
s.D(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.eh(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.p.X(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.O(r,r.$ti.c)
B.b.aj(o)
return o},
eg(a){return this.tq(a)},
tq(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$eg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ab('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$eg)
case 3:m=c
l=J.J(m)
if(l.gG(m)){q=null
s=1
break}o=p.a
q=A.bJ(n,l.gH(m),o.cx,o.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
hH(a){return this.t8(a)},
t8(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ab('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hH)
case 3:j=c
k=J.J(j)
if(k.gG(j)){q=B.dN
s=1
break}o=k.gH(j)
k=p.a
n=A.bJ(l,o,k.cx,k.cy)
m=o.h(0,"s_sync_state")!=null?A.hA(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.ej(n,m,o.h(0,"o_kind")!=null?A.jB(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
bW(a){return this.oR(a)},
oR(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.I(a)){q=p.b.e.bW(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ab("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bW)
case 6:s=4
break
case 5:s=7
return A.a(k.ab('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bW)
case 7:case 4:j=c
l=J.J(j)
if(l.gG(j)){if(f)o.e.lh(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.bJ(n,i,l.cx,l.cy)
g=A.aU(i.h(0,"lp_schema_ver"))
if(g==null)g=1
s=g<m?8:9
break
case 8:s=10
return A.a(A.CJ(n,h,g,m),$async$bW)
case 10:h=c
case 9:if(f)o.e.lh(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
hS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=this.b.a,r=s.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
n=o.a
m=b.h(0,n)
if(o.c&&m==null)throw A.b(A.G('Field "'+n+'" is required.',n))
if(m==null)continue
l=A.D3(o,m)
if(l!=null)throw A.b(A.G(A.JS(o,l),n))}k=s.z
if(k!=null){j=k.$1(b)
if(t.fB.b(j))return this.hT(j,b,c,d)
s=J.J(j)
if(s.gS(j))throw A.b(A.G(s.C(j,"; "),null))}this.mS(b,c,d)},
hT(a,b,c,d){return this.ug(a,b,c,d)},
ug(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o
var $async$hT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a,$async$hT)
case 2:p=f
o=J.J(p)
if(o.gS(p))throw A.b(A.G(o.C(p,"; "),null))
q.mS(b,c,d)
return A.e(null,r)}})
return A.f($async$hT,r)},
mS(a,b,c){var s=this.a.as
if(c>s)throw A.b(A.G("Document exceeds max size ("+c+" > "+s+" bytes).",null))}}
A.qZ.prototype={
$1(a){return a.bz(this.a.b.a.a).fT(this.b)},
$S:5}
A.r1.prototype={
$1(a){return a.bz(this.a.b.a.a).nY(this.b)},
$S:5}
A.qY.prototype={
$1(a){return a.bz(this.a.b.a.a).nI(this.b)},
$S:5}
A.r0.prototype={
$1(a){return a.bz(this.a.b.a.a).nZ(this.b)},
$S:5}
A.qV.prototype={
$1(a){return a.bz(this.a.b.a.a).nF(this.b,this.c)},
$S:5}
A.qU.prototype={
$1(a){return a.bz(this.a.b.a.a).nG(this.b)},
$S:5}
A.qR.prototype={
$1(a){return a.bz(this.a.b.a.a).n_(this.b)},
$S:5}
A.r_.prototype={
$1(a){return a.bz(this.a.b.a.a).nS(this.b)},
$S:5}
A.qW.prototype={
$1(a){return a.bz(this.a.b.a.a).iS(this.b)},
$S:5}
A.qT.prototype={
o6(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.eg(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hH(a),$async$$1)
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
$1(a){return this.o6(a)},
$S:133}
A.qS.prototype={
$1(a){return a!=="id"},
$S:13}
A.qX.prototype={
$1(a){return a>1},
$S:134}
A.qQ.prototype={
$2(a,b){var s=t.N
return B.b.C(A.a9(b,"("+B.b.C(A.a9(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:135}
A.qO.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.qP.prototype={
$0(){return!1},
$S:49}
A.hN.prototype={$iI:1}
A.oW.prototype={}
A.qg.prototype={
b5(a,b){var s=this.a.U(new A.qh(a,b),b)
this.a=s.b6(new A.qi(b),new A.qj(),t.H)
return s}}
A.qh.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.qi.prototype={
$1(a){},
$S(){return this.a.i("X(0)")}}
A.qj.prototype={
$2(a,b){},
$S:6}
A.bt.prototype={
gnQ(){var s=this.e
return s.gl(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.rd.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.H(d)
s=e.h(0,"record_id")
s.toString
A.H(s)
r=A.CX(e.h(0,l),l,k)
q=A.CX(e.h(0,j),j,k)
p=A.CX(e.h(0,i),i,k)
o=A.Ih(e.h(0,h),h,k)
n=A.Ih(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ai(m)
return new A.bt(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.CX(e.h(0,f),f,k):null)},
$S:137}
A.re.prototype={
fH(a){return this.wW(a)},
wW(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.v()
m=m.gbB()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.xH("lp_conflicts","detected_at ASC",n,o),$async$fH)
case 3:o=l.bB(c,A.Os(),t.n8)
m=A.O(o,o.$ti.i("a1.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
dR(a,b){return this.oS(a,b)},
oS(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.v()
s=3
return A.a(n.gbB().b.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dR)
case 3:o=d
n=J.J(o)
if(n.gG(o)){q=null
s=1
break}q=A.DK(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
ys(a){var s={},r=A.oV()
s.a=null
r.sil(A.dr(new A.rh(s,r),new A.ri(s,this,a,new A.rj(this,r,a)),t.ba))
return r.aE().gcL()},
eO(a,b,c){return this.y7(a,b,c)},
y7(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(c)
s=2
return A.a(p.a_(new A.rf(q,c,a,o.a,o,b),t.P),$async$eO)
case 2:return A.e(null,r)}})
return A.f($async$eO,r)},
fl(a,b){return this.uy(a,b)},
uy(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dR(a,b),$async$fl)
case 2:p=d
if(p==null)throw A.b(A.B("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eO(b,p.d,a),$async$fl)
case 3:return A.e(null,r)}})
return A.f($async$fl,r)},
eo(a,b){return this.uz(a,b)},
uz(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$eo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dR(a,b),$async$eo)
case 3:o=d
if(o==null)throw A.b(A.B("No conflict found for "+a+"/"+b))
s=o.gnQ()?4:5
break
case 4:s=6
return A.a(p.a.bz(a).iS(b),$async$eo)
case 6:s=1
break
case 5:s=7
return A.a(p.eO(b,o.e,a),$async$eo)
case 7:case 1:return A.e(q,r)}})
return A.f($async$eo,r)}}
A.rj.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.aE().giB()){s=1
break}p=4
s=7
return A.a(n.a.fH(n.c),$async$$0)
case 7:m=b
if(!i.aE().giB())J.aO(i.aE(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.A(h)
k=A.af(h)
if(!i.aE().giB())i.aE().bp(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.ri.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b0(p,A.n(p).i("b0<1>")).b2(new A.rg(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rg.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:45}
A.rh.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.w?p:A.bH(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.aE().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rf.prototype={
$1(a){return this.o7(a)},
o7(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.J(a3)
if(a4.gG(a3))throw A.b(A.B("No conflict found for "+a1+"/"+a2))
o=A.DK(a4.gH(a3))
n=o.gnQ()
m=n?null:A.al(o.e)
l=n?"":A.at(B.m.v(B.e.v(A.al(A.bp(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aK(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bs(a8)?4:5
break
case 4:s=7
return A.a(a0.W("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.W("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.W("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a1(new A.a5(a1,A.ao([a2],a4)))
a6.a1(new A.a5("lp_conflicts",A.ao([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aK("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.J(k)
if(i.gS(k)){h=A.a0(J.Q(i.gH(k),"base_updated"))
i=h==null?A.a0(J.Q(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.W("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.bP(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dC(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bT(n?B.j:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aj(d)
c=A.al(A.bp(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a9(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aK("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bs(a8)?14:16
break
case 14:a4=p.a.a
b=a4.db.$0()
h=f?B.N:B.v
e=B.h.a9(d,null)
a4=a4.dx
a4===$&&A.v()
s=18
return A.a(a0.aG(0,"lp_outbox",A.I7(l,j,b,e,h,a4.h9(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a1(new A.a5(a1,A.ao([a2],i)))
a6.a1(new A.a5("lp_conflicts",A.ao([a2],i)))
a4=o.d
a=A.bT(a4,g)
a.F(0,"id")
a6.bN(B.A,a,a2,g,a4,B.ai,a1)
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:4}
A.o_.prototype={
aC(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dr(null,null,t.n6)
n.ay=A.dr(null,null,t.kf)}n.z=!0
s=3
return A.a(n.aQ(B.dW),$async$aC)
case 3:p=5
l=n.b
s=8
return A.a(l.fP(),$async$aC)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.v()
k.f=l.gi8().a
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
n.fr=new A.b0(l,A.n(l).i("b0<1>")).b2(n.gwy())
n.fx=n.b.no().b2(n.gww())
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
case 12:n.fy=A.yH(B.ak,new A.yD(n))
s=14
return A.a(n.aQ(n.e2()),$async$aC)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.cp("cycle")
s=17
return A.a(n.ff(),$async$aC)
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
return A.a(o instanceof A.w?o:A.bH(o,n),$async$aL)
case 7:o=p.fx
o=o==null?null:o.A()
s=8
return A.a(o instanceof A.w?o:A.bH(o,n),$async$aL)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.O
o.u(0,B.O)
s=12
return A.a(p.ax.q(),$async$aL)
case 12:s=10
break
case 11:p.y=B.O
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aL)
case 15:case 14:p.y=B.O
case 1:return A.e(q,r)}})
return A.f($async$aL,r)},
e2(){if(this.at)return B.br
if(this.Q)return B.bo
if(this.as)return B.aJ
return B.bp},
aQ(a){return this.u7(a)},
u7(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.qJ(),$async$aQ)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aQ,r)},
qJ(){return this.p2=this.p2.U(new A.yt(this),t.H)},
hp(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$hp=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:e=n.z
if(!e){s=1
break}m=0
l=0
k=0
j=0
i=0
h=null
p=4
e=n.e
e===$&&A.v()
s=7
return A.a(e.ia(),$async$hp)
case 7:g=b
m=g.a[3]
l=g.a[1]
k=g.a[2]
j=g.a[0]
i=g.a[5]
h=g.a[4]
p=2
s=6
break
case 4:p=3
d=o.pop()
s=6
break
case 3:s=2
break
case 6:e=n.ay
if((e.c&4)===0)e.u(0,new A.f2(n.y,m,l,k,j,i,n.ch,h,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hp,r)},
wz(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.cp("push")
s.tJ(B.al)},
wx(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.fy.I(s))return
r=a.c
if(r!=null&&a.b===B.Q){q.cp("fast:"+s)
q.dx=q.dx.U(new A.yB(q,r),t.H)
return}q.cp("pull:"+s)
q.hP(B.al,A.l([s],t.s))},
hu(a){return this.qT(a)},
qT(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hu=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hP(B.al,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.ij(a),$async$hu)
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
break}if(!m)n.hP(B.al,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hu,r)},
wH(){if(!this.z)return
this.cp("cycle")
this.mz()},
hP(a,b){var s=this,r=s.go
if(r!=null)r.A()
if(b==null)s.k2=!0
else s.k3.D(0,b)
s.go=A.c4(a,new A.yA(s))},
tJ(a){return this.hP(a,null)},
tI(a){var s=this.id
if(s!=null)s.A()
this.id=A.c4(B.I,new A.yz(this,a))},
jX(){this.as=!0
this.aQ(B.aJ)
A.iZ(this.d,t.H)},
eF(){var s=0,r=A.h(t.H),q,p=this,o
var $async$eF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.dx
o===$&&A.v()
s=3
return A.a(o.y5(),$async$eF)
case 3:s=4
return A.a(p.aQ(p.e2()),$async$eF)
case 4:p.cp("cycle")
s=5
return A.a(p.ff(),$async$eF)
case 5:case 1:return A.e(q,r)}})
return A.f($async$eF,r)},
he(a){return this.p8(a)},
p8(a){var s=0,r=A.h(t.H),q=this,p
var $async$he=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.A()
q.k1=A.c4(B.ay,new A.yC(q))
s=3
break
case 4:s=5
return A.a(q.aQ(B.bo),$async$he)
case 5:case 3:return A.e(null,r)}})
return A.f($async$he,r)},
bc(){var s=0,r=A.h(t.H),q=this
var $async$bc=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aQ(B.br),$async$bc)
case 2:return A.e(null,r)}})
return A.f($async$bc,r)},
b3(){var s=0,r=A.h(t.H),q,p=this
var $async$b3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aQ(p.e2()),$async$b3)
case 3:p.cp("cycle")
s=4
return A.a(p.ff(),$async$b3)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b3,r)},
mB(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.A()}s=t.fD
r=q.k4.U(new A.yw(q,a),s)
q.k4=r.b6(new A.yx(),new A.yy(),s)
return r},
ff(){return this.mB(null)},
cp(a){var s,r=this.p1
r.push(a)
s=r.length
if(s>1000)B.b.iY(r,0,s-1000)},
k8(a){this.mB(a).b6(new A.yu(),new A.yv(this),t.H)},
mz(){return this.k8(null)},
bj(a){return this.qF(a)},
qF(b9){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$bj=A.c(function(c0,c1){if(c0===1){o.push(c1)
s=p}for(;;)switch(s){case 0:b3=n.db
b4=n.z
if(!b4){q=B.P
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aQ(n.e2()),$async$bj)
case 5:q=B.P
s=1
break
case 4:b4=t.N
a5=t.S
m=A.t(b4,a5)
l=A.t(b4,a5)
k=A.t(b4,a5)
j=!1
i=!1
h=A.l([],t.s)
s=6
return A.a(n.aQ(B.dX),$async$bj)
case 6:b4=b9==null
if(b4){a5=n.a.fy
a6=A.n(a5).i("T<1>")
a7=A.O(new A.T(a5,a6),a6.i("o.E"))}else a7=b9
a5=a7.length,a8=0
case 7:if(!(a8<a7.length)){s=9
break}g=a7[a8]
p=11
a6=n.f
a6===$&&A.v()
s=14
return A.a(a6.dI(g),$async$bj)
case 14:f=c1
J.b1(m,g,f.b)
if(f.c>0)J.b1(k,g,f.c)
if(f.f&&f.b>0)J.aO(h,g)
p=2
s=13
break
case 11:p=10
b5=o.pop()
a6=A.A(b5)
if(a6 instanceof A.bM){n.jX()
s=9
break}else if(a6 instanceof A.b9){e=a6
j=!0
i=!0
n.ch=e.a}else throw b5
s=13
break
case 10:s=2
break
case 13:case 8:a7.length===a5||(0,A.p)(a7),++a8
s=7
break
case 9:s=n.as?15:16
break
case 15:s=17
return A.a(n.aQ(B.aJ),$async$bj)
case 17:q=n.ok=new A.bg(m,B.L,B.L,0,0,0,0,!0)
s=1
break
case 16:s=b4?18:19
break
case 18:p=21
d=n.cy
n.cy=!1
b4=n.r
b4===$&&A.v()
s=24
return A.a(b4.dW(d),$async$bj)
case 24:c=c1
for(b4=J.E(c);b4.k();){b=b4.gn()
a5=b.a
a6=J.Q(l,b.a)
if(a6==null)a6=0
J.b1(l,a5,a6+b.b)}p=2
s=23
break
case 21:p=20
b6=o.pop()
b4=A.A(b6)
if(b4 instanceof A.b9){a=b4
j=!0
n.ch=a.a}else throw b6
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aQ(B.dY),$async$bj)
case 25:a0=B.a7
s=i?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b4=n.w
b4===$&&A.v()
s=33
return A.a(b4.fS(),$async$bj)
case 33:a0=c1
s=a0.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.x.bd("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$bj)
case 36:a1=c1
if(J.da(a1)&&typeof J.Q(J.bK(a1),"last_error")=="string"){b4=J.Q(J.bK(a1),"last_error")
b4.toString
n.ch=A.H(b4)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b7=o.pop()
b4=A.A(b7)
if(b4 instanceof A.bM)n.jX()
else if(b4 instanceof A.b9){a2=b4
j=!0
n.ch=a2.a}else throw b7
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b4=n.x
b4===$&&A.v()
s=41
return A.a(b4.bF(),$async$bj)
case 41:a3=c1
j=j||a3.d
if(a3.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b8=o.pop()
a4=A.A(b8)
j=!0
n.ch=A.r(a4)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b3===n.db)){q=B.P
s=1
break}if(J.ag(h)!==0)n.tI(h)
b0=j||a0.f
b1=new A.aI(A.m4(n.c.ay.$0(),0,!1),0,!1)
n.CW=b1
if(!b0){n.cx=b1
n.ch=null}b2=n.e2()
s=42
return A.a(n.aQ(b0&&b2===B.bp?B.bq:b2),$async$bj)
case 42:q=n.ok=new A.bg(m,l,k,a0.a,a0.b,a0.d,a0.e,b0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bj,r)}}
A.yD.prototype={
$1(a){return this.a.wH()},
$S:29}
A.yt.prototype={
$1(a){return this.a.hp()},
$S:47}
A.yB.prototype={
$1(a){return this.a.hu(this.b)},
$S:47}
A.yA.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jU()}if(r||p.length===0)s.mz()
else s.k8(p)},
$S:0}
A.yz.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.k8(this.b)},
$S:0}
A.yC.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aQ(p.e2()),$async$$0)
case 2:p.cp("cycle")
s=3
return A.a(p.ff(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.yw.prototype={
$1(a){return this.a.bj(this.b)},
$S:141}
A.yx.prototype={
$1(a){return B.P},
$S:142}
A.yy.prototype={
$1(a){return B.P},
$S:143}
A.yu.prototype={
$1(a){},
$S:144}
A.yv.prototype={
$2(a,b){var s=this.a
if(s.ch==null)s.ch=A.r(a)
s.aQ(B.bq)},
$S:6}
A.dh.prototype={
m(a){return"MapFailure: "+this.a},
$iI:1}
A.eV.prototype={}
A.CR.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.CS.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.jh.prototype={}
A.aT.prototype={}
A.bC.prototype={}
A.hk.prototype={
am(a){var s=A.bP(a.c,t.N,t.X)
s.D(0,a.d)
s.D(0,a.e)
return new A.aT(s,!1,null)}}
A.fZ.prototype={
am(a){var s=A.bP(a.c,t.N,t.X)
s.D(0,a.e)
s.D(0,a.d)
return new A.aT(s,!1,null)}}
A.hq.prototype={
am(a){return B.T.am(a)},
fZ(a,b,c){var s,r,q,p,o,n=t.j,m=n.b(a)?a:B.k,l=n.b(b)?b:B.k,k=n.b(c)?c:B.k,j=J.DH(m),i=J.DH(l),h=J.DH(k),g=i.ft(j),f=h.ft(j),e=j.ft(i),d=j.ft(h)
n=t.X
s=A.c0(e,n)
s.D(0,d)
r=j.nX(g).nX(f).ft(s)
q=[]
n=A.O(l,n)
B.b.D(n,k)
B.b.D(n,m)
s=n.length
p=0
for(;p<n.length;n.length===s||(0,A.p)(n),++p){o=n[p]
if(r.E(0,o)&&!B.b.E(q,o))q.push(o)}return q}}
A.eE.prototype={
am(a){return B.T.am(a)}}
A.eu.prototype={
am(a){return B.T.am(a)},
fZ(a,b,c){var s,r,q,p=t.j,o=p.b(a)?a:B.k,n=p.b(b)?b:B.k,m=p.b(c)?c:B.k,l=[]
p=A.O(o,t.X)
B.b.D(p,n)
B.b.D(p,m)
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.p)(p),++r){q=p[r]
if(!B.b.bq(l,new A.qf(q)))l.push(q)}return l}}
A.qf.prototype={
$1(a){return B.p.X(a,this.a)},
$S:15}
A.fA.prototype={
am(a){return B.T.am(a)},
fZ(a,b,c){var s,r,q,p=typeof a=="string"?a:"",o=typeof b=="string"?b:"",n=typeof c=="string"?c:"",m=A.l([],t.s),l=new A.qe(m)
for(s=p.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=o.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
for(s=n.split("\n"),r=s.length,q=0;q<r;++q)l.$1(s[q])
return B.b.C(m,"\n")}}
A.qe.prototype={
$1(a){var s=B.a.cg(a)
if(s.length!==0&&!B.b.E(this.a,s))this.a.push(s)},
$S:146}
A.lY.prototype={
am(a){return this.a.$1(a)}}
A.mZ.prototype={}
A.Bq.prototype={}
A.Bo.prototype={}
A.zI.prototype={}
A.w0.prototype={
$1(a){if(a==null)return new A.aT(A.Ot(this.a,this.b,this.c),!0,"Collection resolver declined resolution")
return new A.aT(a.a,a.b,a.c)},
$S:147}
A.vZ.prototype={
$1(a){return a!=="archived"},
$S:13}
A.w_.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.vY(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:148}
A.vS.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vT.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vU.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vV.prototype={
$1(a){return a instanceof A.w?a:A.be(a,t.X)},
$S:149}
A.vW.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.eh(s,s.r,A.n(s).c),r=this.b,q=J.J(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:150}
A.vX.prototype={
$1(a){if(a==null||a.b){this.a.a=!0
return this.b}return a.a.h(0,this.c)},
$S:151}
A.wi.prototype={
fv(a){return this.vS(a)},
vS(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.db.$0()
e=e.x
s=3
return A.a(e.xJ("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$fv)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.E(o);l.k();)m.push(A.KR(l.gn()))
l=A.aP(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.p)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.l8(e,l),$async$fv)
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
return A.f($async$fv,r)},
nC(a){return this.a.a_(new A.wk(a),t.H)},
x6(a,b,c,d){return this.a.a_(new A.wl(c,d,b,a),t.H)}}
A.wk.prototype={
$1(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wl.prototype={
$1(a){return this.or(a)},
or(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qt.prototype={}
A.jd.prototype={}
A.jK.prototype={}
A.wn.prototype={
h9(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.d8(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
eM(a,b,c){return this.xS(a,b,c)},
xS(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$eM=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$eM)
case 3:p=e
o=J.J(p)
q=o.gG(p)?null:A.jB(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eM,r)},
bS(a,b,c){return this.xU(a,b,c)},
xU(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bS)
case 3:p=e
o=J.J(p)
q=o.gG(p)?null:A.hA(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
bx(a,b,c,d,e,f,g,h,i,j,k,l){return this.uJ(a,b,c,d,e,f,g,h,i,j,k,l)},
uJ(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bx=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.aa)throw A.b(A.FE("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.as
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.N
break A}if(B.D===a5){l=a6==null?B.v:B.a6
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.N
break B}if(B.D===a5){l=B.a6
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.D===a5){l=B.a6
break C}l=B.N
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.N
break D}if(B.D===a5){l=B.a6
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.W("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bx)
case 5:s=6
return A.a(a8.W("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bx)
case 6:s=7
return A.a(p.hU(a8,a2,a9),$async$bx)
case 7:s=8
return A.a(a8.W(a2,"id = ?",[a9]),$async$bx)
case 8:q=B.da
s=1
break
case 4:k=p.a.db.$0()
j=a4?null:b2.w
if(j==null)j=p.h9()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.cY("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
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
case 9:f=A.ir(B.a2)
e=B.b.C(A.a9(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aJ("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Is(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bx)
case 12:s=10
break
case 11:s=13
return A.a(a8.aJ('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bx)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.D(f,B.cZ)
if(o)B.b.D(f,B.cK)
s=a3?14:16
break
case 14:a3=A.ir(B.a1)
l=B.b.C(A.a9(16,"?",!1,l),", ")
s=17
return A.a(a8.aJ("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.IF(B.ab,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bx)
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
return A.a(a8.aJ(a3.charCodeAt(0)==0?a3:a3,a1),$async$bx)
case 18:case 15:q=new A.jd(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bx,r)},
hU(a,b,c){return this.uh(a,b,c)},
uh(a,b,c){var s=0,r=A.h(t.H)
var $async$hU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cM(a,b,c,!1),$async$hU)
case 2:return A.e(null,r)}})
return A.f($async$hU,r)},
fw(a,b){return this.vT(a,b)},
vT(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.x
f=new A.a7("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").m(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ab("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$fw)
case 3:o=d
f=J.J(o)
if(f.gG(o)){q=B.d0
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.k();)n.push(A.jB(f.gn()))
f=A.aP(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.l8(g,f),$async$fw)
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
return A.f($async$fw,r)},
li(a){if(a.length===0)return A.be(null,t.H)
return this.a.a_(new A.wt(this,a),t.H)},
aP(a,b){return this.tV(a,b)},
tV(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
l=n.gS(m)?A.bJ(a3,n.gH(m),a2.cx,a2.cy):null
s=9
return A.a(b.L(a,A.dC(a3,J.x(a5.h(0,"archived"),!0),a2.cx,a2.cy,a1,a5),"id = ?",[a1]),$async$aP)
case 9:a6.a1(new A.a5(a0,A.ao([a1],t.N)))
k=A.bT(l==null?B.j:l,a5)
k.F(0,"id")
a6.bN(B.A,k,a1,a5,l,B.ai,a0)
case 7:case 4:a=a3.a
s=10
return A.a(b.aK(a,1,"id = ?",[a1]),$async$aP)
case 10:j=a9
a5=J.J(j)
s=a5.gG(j)?11:12
break
case 11:s=13
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 13:s=14
return A.a(p.dr(b,a0,a1,a7.c,a4),$async$aP)
case 14:a6.a1(new A.a5(a0,A.ao([a1],t.N)))
s=1
break
case 12:n=a2.cx
a2=a2.cy
i=A.bJ(a3,a5.gH(j),n,a2)
h=A.at(B.m.v(B.e.v(A.al(A.bp(a3,i)))).a)
a5=a7.b
g=A.at(B.m.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 18:s=19
return A.a(p.dr(b,a0,a1,a7.c,a4),$async$aP)
case 19:a6.a1(new A.a5(a0,A.ao([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aF(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bm(d,a5,f):A.t(a5,f)
s=23
return A.a(b.L(a,A.dC(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aP)
case 23:s=24
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 24:s=25
return A.a(p.dr(b,a0,a1,a7.c,a4),$async$aP)
case 25:a6.a1(new A.a5(a0,A.ao([a1],a5)))
k=A.bT(i,c)
k.F(0,"id")
a6.bN(B.A,k,a1,c,i,B.ai,a0)
s=21
break
case 22:g=A.at(B.m.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aP)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aP)
case 28:a6.a1(new A.a5(a0,A.ao([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aP,r)},
dr(a,b,c,d,e){return this.rz(a,b,c,d,e)},
rz(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$dr=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$dr)
case 2:s=3
return A.a(a.L(q.a.aw(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$dr)
case 3:return A.e(null,r)}})
return A.f($async$dr,r)},
xV(a,b,c,d,e){return this.a.a_(new A.wr(c,e,d,B.G,a,b),t.H)},
nB(a,b,c,d,e,f){return this.a.a_(new A.wq(this,c,f,b,a,d,e),t.H)},
fI(a,b,c,d,e){return this.nB(a,b,c,d,B.as,e)},
nA(a,b,c){return this.a.a_(new A.wp(a,c,b),t.H)},
y5(){return this.a.a_(new A.ws(null),t.S)},
fm(a,b,c,d,e,f,g){return this.uG(a,b,c,d,e,f,g)},
uG(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$fm=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$fm)
case 2:p=A.t(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$fm)
case 3:return A.e(null,r)}})
return A.f($async$fm,r)}}
A.wt.prototype={
$1(a){return this.ow(a)},
ow(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
$S:5}
A.wr.prototype={
$1(a){return this.ou(a)},
ou(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wq.prototype={
$1(a){return this.ot(a)},
ot(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aG(0,"lp_dead_letter",A.m(["at",q.a.a.db.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wp.prototype={
$1(a){return this.os(a)},
os(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ws.prototype={
$1(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:152}
A.ev.prototype={
a7(){return"ApplyResult."+this.b}}
A.np.prototype={}
A.xj.prototype={
dI(a){return this.xz(a)},
xz(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dI=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iT(b4),$async$dI)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Jg().ez(n)
if(m==null)A.u(A.aZ('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.u(A.aZ('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.DM(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.x6(k))A.u(A.aZ('Bad timestamp "'+n+'"'))
o=A.OY(A.DM(j,i,h,g,f,e,d).jm(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.h3(B.c.by(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.Q,k=k.fy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}s=6
return A.a(a0.nx(b4,a2,o,b),$async$dI)
case 6:a4=b6
a5=J.J(a4)
if(a5.gG(a4)){s=5
break}++a.ax
a6=p.rB(a4)
a7=k.h(0,b4)
if(a7==null)A.u(A.B(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.F8(a7.a,a4),$async$dI)
case 8:s=7
return A.a(b0.b5(new b1.xr(b2,p,b3,b6,a6),l),$async$dI)
case 7:o=a6.c
a2=a6.a;++c
if(a5.gl(a4)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.np(a8.d,a8.c,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
mO(a,b){var s=B.a.a2(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a2(a.a,b.b)<=0},
u8(a,b){var s=B.a.a2(a.c,b.c)
if(s!==0)return s>0
return B.a.a2(a.a,b.a)>0},
rB(a){var s,r,q,p=J.ax(a),o=p.gH(a)
for(p=p.ba(a,1),s=p.$ti,p=new A.ar(p,p.gl(0),s.i("ar<a1.E>")),s=s.i("a1.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.u8(q,o))o=q}return o},
ij(a){return this.w7(a)},
w7(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$ij=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.b5(new A.xl(o,p,a),t.P),$async$ij)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
dD(a,b){return this.wa(a,b)},
wa(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dD=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bQ(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.fy,e=n.b,d=A.a2(j),c=d.c,d=d.i("cF<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cF(j,0,200,d)
a2.jh(j,0,200,c)
a3=a2.bU(0)
a4=a3.length
b&1&&A.K(j,18)
A.bn(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
s=12
return A.a(e.aV(l),$async$dD)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a8=A.A(b1)
if(a8 instanceof A.cf){J.aO(m,l)
s=6
break}else if(a8 instanceof A.bM)throw b1
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
return A.a(n.fK(b2,m),$async$dD)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.u(A.B(a1))
b0=a9.a
a2=A.l([],g)
for(a8=a5.length,a6=0;a6<a5.length;a5.length===a8||(0,A.p)(a5),++a6)a2.push(A.F9(b0,a5[a6]))
s=16
return A.a(i.b5(new A.xn(n,a2,b2,b0),h),$async$dD)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dD,r)},
ed(a,b,c,d){return this.t6(a,b,c,d)},
t6(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ed=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.t(c,t.o)
a=A.t(c,t.G)
o=p.a,n=o.cx,m=o.cy,o=o.fy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.V(a4,k,B.c.by(i,0,j))
g=B.b.C(A.a9(h.length,"?",!1,c),", ")
j=[a2]
B.b.D(j,h)
a0=J
s=6
return A.a(a1.ab(u.m+g+")",j),$async$ed)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.H(e),A.hA(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.u(A.B(l))
a0=J
s=9
return A.a(a1.bQ(d.a.a,"id IN ("+g+")",h),$async$ed)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.H(e),A.bJ(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a_(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ed,r)},
mZ(a,b,c,d,e){return this.a8(a,b,A.F9(this.a.aw(b).a,c),null,!1,d,e)},
uL(a,b,c){return this.mZ(a,b,c,null,!1)},
a8(a,b,c,d,e,f,g){return this.uK(a,b,c,d,e,f,g)},
mY(a,b,c){return this.a8(a,b,c,null,!1,null,!1)},
uK(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return A.a(n.bH(a4,a7,b2,a8,a9),$async$a8)
case 5:q=B.ad
s=1
break
case 4:a9=b3.b
a9.toString
j=A.bp(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bH(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a8)
case 8:q=B.ad
s=1
break
case 7:g=a8.a
f=$.q8()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bH(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a8)
case 11:q=B.ad
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
return A.a(g.bS(a4,b2,a8.a),$async$a8)
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
d=g.gG(c)?null:A.bJ(a7,g.gH(c),a5.cx,a5.cy)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dH(a4,a8.a,a8.e,b2),$async$a8)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Jw(a4,a6.a,A.dC(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9)),$async$a8)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.dz(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 26:b1.a1(new A.a5(b2,A.ao([a8.a],t.N)))
b=A.bT(B.j,a9)
b.F(0,"id")
b1.bN(B.ah,b,a8.a,a9,null,B.ax,b2)
q=B.ac
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
return A.a(n.cq(b1,b2,a8.a,a8.c,!1),$async$a8)
case 31:q=B.ae
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dC(a7,J.x(a9.h(0,"archived"),!0),a5.cx,a5.cy,i,a9),"id = ?",[a8.a]),$async$a8)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.dz(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a8)
case 33:b1.a1(new A.a5(b2,A.ao([a8.a],t.N)))
b=A.bT(d,a9)
b.F(0,"id")
b1.bN(B.A,b,a8.a,a9,d,B.ax,b2)
q=B.ac
s=1
break
case 28:s=a===B.G||a===B.bs||a===B.aa?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.cq(b1,b2,a8.a,a8.c,!1),$async$a8)
case 38:q=B.ae
s=1
break
case 37:s=a===B.aa?39:40
break
case 39:s=41
return A.a(n.cq(b1,b2,a8.a,a8.c,!1),$async$a8)
case 41:q=B.ae
s=1
break
case 40:a0=A.bp(a7,d)
s=A.al(a0)===i?42:43
break
case 42:s=44
return A.a(a4.W("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a8)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.dz(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a8)
case 45:b1.a1(new A.a5(b2,A.ao([a8.a],t.N)))
q=B.ac
s=1
break
case 43:l=null
p=47
a9=m
l=A.iq(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.A(b0)
s=a5 instanceof A.dh?50:52
break
case 50:k=a5
s=53
return A.a(n.bH(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a8)
case 53:q=B.ad
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
f=A.Iq(l,a0,new A.mZ(a9.a,g.b,f.c),a8.a,j,b2)
s=54
return A.a(t.fr.b(f)?f:A.bH(f,t.r),$async$a8)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.fd(a4,b2,a8,a7,m,a0,l,a2),$async$a8)
case 57:s=58
return A.a(n.cq(b1,b2,a8.a,a8.c,!1),$async$a8)
case 58:a5=t.N
b1.a1(new A.a5(b2,A.ao([a8.a],a5)))
b1.a1(new A.a5("lp_conflicts",A.ao([a8.a],a5)))
q=B.bC
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dC(a7,J.x(a3.h(0,"archived"),!0),a5.cx,a5.cy,a9,a3),"id = ?",[a8.a]),$async$a8)
case 59:a5=a5.dx
a5===$&&A.v()
s=60
return A.a(a5.fm(a4,b2,a8.a,h,i,a8.c,A.al(a3)),$async$a8)
case 60:s=61
return A.a(n.u5(b1,b2,a8.a,a8.c),$async$a8)
case 61:b1.a1(new A.a5(b2,A.ao([a8.a],t.N)))
b=A.bT(d,a3)
b.F(0,"id")
b1.bN(B.A,b,a8.a,a3,d,B.ai,b2)
q=B.ac
s=1
break
case 35:q=B.ae
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a8,r)},
fd(a,b,c,d,e,f,g,h){return this.tu(a,b,c,d,e,f,g,h)},
tu(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$fd=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bp(d,A.fs(d,c))
k=A.bT(g,f)
j=A.O(k,A.n(k).c)
B.b.aj(j)
k=A.bT(g,l)
p=A.O(k,A.n(k).c)
B.b.aj(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.al(g)
n=t.N
m=t.X
s=2
return A.a(a.cz(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.al(f),"remote_json",A.al(l),"dirty_local",B.h.a9(j,null),"dirty_remote",B.h.a9(p,null),"detected_at",q.c.ay.$0()],n,m),B.V),$async$fd)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.al(l),"base_hash",A.at(B.m.v(B.e.v(A.al(A.bp(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$fd)
case 3:return A.e(null,r)}})
return A.f($async$fd,r)},
bH(a,b,c,d,e){return this.tm(a,b,c,d,e)},
tm(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bH=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a9(d.d,null)}catch(a1){o=t.N
e=B.h.a9(A.m(["raw",d.d.m(0)],o,o),null)}o=d.a
s=2
return A.a(a.W("lp_dead_letter","store = ? AND record_id = ?",[c,o]),$async$bH)
case 2:n=q.c
m=n.ay
l=t.N
k=t.X
s=3
return A.a(a.aG(0,"lp_dead_letter",A.m(["at",m.$0(),"kind","map_failure","store",c,"record_id",o,"error",a0,"payload_json",e],l,k)),$async$bH)
case 3:j=q.a.dx
j===$&&A.v()
s=4
return A.a(j.bS(a,c,o),$async$bH)
case 4:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=g>=8?253402300799e3:m.$0()+B.c.M(n.nd(g).a,1000)
n=d.c
s=j?5:7
break
case 5:s=8
return A.a(a.aG(0,"lp_sync_row",A.m(["store",c,"record_id",o,"remote_updated",n,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bH)
case 8:s=6
break
case 7:s=9
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",n,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,o]),$async$bH)
case 9:case 6:return A.e(null,r)}})
return A.f($async$bH,r)},
dz(a,b,c,d,e,f,g,h){return this.uf(a,b,c,d,e,f,g,!0)},
uf(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$dz=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aG(0,"lp_sync_row",o),$async$dz)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$dz)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dz,r)},
cq(a,b,c,d,e){return this.u6(a,b,c,d,e)},
u5(a,b,c,d){return this.cq(a,b,c,d,!0)},
u6(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cq=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.t(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$cq)
case 2:s=3
return A.a(p.L(q.a.aw(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$cq)
case 3:if(g>0)a.a1(new A.a5(b,A.ao([c],o)))
return A.e(null,r)}})
return A.f($async$cq,r)},
fK(a,b){return this.x7(a,b)},
x7(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bQ(b,!0,t.N)
n=A.a2(o),m=n.c,n=n.i("cF<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cF(o,0,500,n)
i.jh(o,0,500,m)
h=i.bU(0)
g=h.length
l&1&&A.K(o,18)
A.bn(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.b5(new A.xp(p,a,h),j),$async$fK)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fK,r)}}
A.xr.prototype={
$0(){var s=this,r=s.b
return r.a.a_(new A.xq(s.a,r,s.c,s.d,s.e),t.P)},
$S:23}
A.xq.prototype={
$1(a){return this.oC(a)},
oC(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
return A.a(a.ed(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aP(t.N)
a2=o.gt(p),a0=a0.Q
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mO(i,c)){s=3
break}p=i.a
s=j.E(0,p)?5:7
break
case 5:s=8
return A.a(a.mY(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.mO(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eS(b,a1,e,f),$async$$1)
case 10:d.a=new A.jJ(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.xl.prototype={
$0(){var s=this.b
return s.a.a_(new A.xk(this.a,s,this.c),t.P)},
$S:23}
A.xk.prototype={
$1(a){return this.oz(a)},
oz(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.dx
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bS(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.uL(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a2(o.c,k)<=0){s=1
break}s=7
return A.a(l.mZ(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:4}
A.xn.prototype={
$0(){var s=this,r=s.a
return r.a.a_(new A.xm(r,s.b,s.c,s.d),t.P)},
$S:23}
A.xm.prototype={
$1(a){return this.oA(a)},
oA(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.ed(a.b,m,q.d,e),$async$$1)
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
return A.a(o.mY(a,m,h),$async$$1)
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
$S:4}
A.xp.prototype={
$0(){var s=this.a
return s.a.a_(new A.xo(s,this.b,this.c),t.P)},
$S:23}
A.xo.prototype={
$1(a){return this.oB(a)},
oB(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a0.j(0,A.H(m),A.bJ(f,n,o,h))
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
case 6:a2.a1(new A.a5(g,A.mW(d,A.a2(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.p)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dU(null,null,c,h)
p.D(0,j)
p.j(0,"hidden",!0)
a2.bN(B.ch,B.dO,k,p,j,B.ax,g)}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.b2.prototype={}
A.xs.prototype={
fS(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.dx
f===$&&A.v()
s=3
return A.a(f.fw(25,p.c.ay.$0()),$async$fS)
case 3:o=b
f=J.J(o)
if(f.gG(o)){q=B.a7
s=1
break}if(p.f){q=p.bm(o)
s=1
break}f=f.gt(o),n=B.a7
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.ds(f.gn()),$async$fS)
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
return A.f($async$fS,r)},
ds(a){return this.th(a)},
th(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$ds=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.dx
l===$&&A.v()
m=m.x
s=3
return A.a(l.eM(m,a.a,a.b),$async$ds)
case 3:o=c
if(o==null){q=B.a7
s=1
break}s=4
return A.a(l.bS(m,o.a,o.b),$async$ds)
case 4:n=c
if(n==null){q=B.a7
s=1
break}if(o.e==null){q=p.tf(o,n)
s=1
break}q=p.jY(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ds,r)},
c2(a,b,c,d,e){return this.ro(a,b,c,d,e)},
rn(a,b,c,d){return this.c2(a,b,c,!1,d)},
rl(a,b,c){return this.c2(a,b,c,!1,!1)},
rm(a,b,c,d){return this.c2(a,b,c,d,!1)},
ro(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$c2=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$c2)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.A(i)
s=k instanceof A.bM?8:10
break
case 8:n.e.$0()
q=B.ar
s=1
break
s=9
break
case 10:s=k instanceof A.ce?11:13
break
case 11:k=n.a.dx
k===$&&A.v()
s=14
return A.a(k.nA("forbidden_push",a.b,a.a),$async$c2)
case 14:q=B.dx
s=1
break
s=12
break
case 13:s=k instanceof A.dj?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.dm(a,"validation_push",m.a),$async$c2)
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
return A.f($async$c2,r)},
hJ(a,b,c){return this.tg(a,b,c)},
tf(a,b){return this.hJ(a,b,!1)},
tg(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$hJ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.c2(a,b,new A.xu(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
k5(a,b,c){return this.tv(a,b,c)},
tv(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$k5=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.rn(a,b,new A.xz(p,a,p.a.aw(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k5,r)},
jY(a,b){return this.ti(a,b)},
ti(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.rl(a,b,new A.xx(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jY,r)},
dt(a,b,c,d){return this.tj(a,b,c,d)},
mp(a,b,c){return this.dt(a,b,c,!1)},
tj(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$dt=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.lA(a,c)
j=n.a.aw(a.a).a
i=a.d
s=A.at(B.m.v(B.e.v(A.al(A.bp(j,A.fs(j,c))))).a)===A.at(B.m.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.fb(a,c),$async$dt)
case 5:q=B.a8
s=1
break
case 4:m=null
l=null
p=7
m=A.iq(b.r)
l=A.iq(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.A(f)
s=i instanceof A.dh?10:12
break
case 10:k=i
s=13
return A.a(n.dm(a,"corrupt_payload",k.a),$async$dt)
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
return A.a(n.e9(a,b,c,j,m,l),$async$dt)
case 14:g=a0
if(g==null){q=B.bk
s=1
break}q=n.c2(a,b,new A.xv(n,a,A.al(A.bp(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dt,r)},
bm(a){return this.te(a)},
te(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$bm=A.c(function(d1,d2){if(d1===1){o.push(d2)
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
return A.a(a2.eM(a0,a1.a,a1.b),$async$bm)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bS(a0,m.a,m.b),$async$bm)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.u(A.B('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
s=11
return A.a(b.aV(m.b),$async$bm)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.A(c8)
s=a1 instanceof A.cf?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.jO(m,l),$async$bm)
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
q=B.ar
s=1
break
s=19
break
case 20:s=a1 instanceof A.ce?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.nA("forbidden_push",m.b,a1),$async$bm)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.b9?25:27
break
case 25:i=a1
s=28
return A.a(n.cR(m,l,i),$async$bm)
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
a7=new A.a7("")
A.cr(a7,A.bp(a4,A.fs(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.cb()
a6=A.d6(a8)
a6.u(0,a1)
a6.q()
a9=A.at(a8.a.a)
a6=B.e.v(m.d)
a8=new A.cb()
a1=A.d6(a8)
a1.u(0,a6)
a1.q()
s=a9===A.at(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.fb(m,k),$async$bm)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.iq(l.r)
f=A.iq(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.A(c9)
s=a1 instanceof A.dh?38:40
break
case 38:e=a1
a1=m.a
a6=m.b
s=41
return A.a(a2.fI(e.a,a6,"corrupt_payload",m.d,a1),$async$bm)
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
return A.a(n.e9(m,l,k,a4,g,f),$async$bm)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a6=m.b
b1=b0.a
a7=new A.a7("")
A.cr(a7,A.bp(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.hf(a1,a2,a6,b2.charCodeAt(0)==0?b2:b2,b3,!0))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.hf(m.w,m.a,m.b,m.d,m.e,!0))
s=3
break
case 4:s=b9.length!==0?43:44
break
case 43:b4=b.gi8().b
if(b4<=0)b4=25
if(25<b4)b4=25
b5=0
case 45:if(!(b6=b9.length,b5<b6)){s=47
break}b7=b5+b4
s=48
return A.a(n.bK(B.b.V(b9,b5,b7<b6?b7:b6),c1,c7),$async$bm)
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
return A.f($async$bm,r)},
e9(a,b,c,d,e,f){return this.rC(a,b,c,d,e,f)},
rC(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n
var $async$e9=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=d.e
n=A.Iq(e,f,new A.mZ(n.a,n.b,n.c),a.b,A.bp(d,A.fs(d,c)),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bH(n,t.r),$async$e9)
case 3:o=h
s=o.b?4:5
break
case 4:s=6
return A.a(p.hK(a,b,c,o,e,f),$async$e9)
case 6:q=null
s=1
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e9,r)},
bK(a,b,c){return this.tP(a,b,c)},
tP(c8,c9,d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$bK=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:c5=0
c6=0
p=4
s=7
return A.a(n.b.bO(c8),$async$bK)
case 7:m=d2
b6=t.N
l=A.t(b6,t.gq)
for(b7=c8.length,b8=0;b8<c8.length;c8.length===b7||(0,A.p)(c8),++b8){k=c8[b8]
J.b1(l,k.a,k)}j=l
i=A.aP(b6)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aO(i,h.a)){l=A.aZ("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aZ("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.E(m),b6=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
b7=J.Q(j,f.a)
b7.toString
e=b7
s=f.b&&f.c!=null?10:12
break
case 10:b7=n.jS(e,d0.h(0,e.a))
b9=B.e.v(e.d)
c0=new A.cb()
c1=A.d6(c0)
c1.u(0,b9)
c1.q()
c1=A.at(c0.a.a)
b9=f.e
if(b9==null)b9=e.d
J.aO(g,new A.jK(b7,b9,f.c.c,c1,c9.h(0,e.a)));++c5
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
return A.a(b7.fI(c3,c1,c2,e.d,b9),$async$bK)
case 13:++c6
case 11:s=8
break
case 9:l=b6.dx
l===$&&A.v()
s=14
return A.a(l.li(g),$async$bK)
case 14:l=c5
b6=c6
q=new A.b2(l,b6,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
c7=o.pop()
l=A.A(c7)
s=l instanceof A.dc?15:17
break
case 15:q=n.cl(c8,c9,d0)
s=1
break
s=16
break
case 17:s=l instanceof A.e3?18:20
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
return A.a(b9.bS(b7,a2.b,a2.c),$async$bK)
case 24:a3=d2
if(a3==null){s=22
break}s=25
return A.a(n.ds(n.jR(a2)),$async$bK)
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
case 23:q=new A.b2(d,c,b,a,a0,a1)
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
return A.a(n.ds(n.jR(a9)),$async$bK)
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
case 31:q=new A.b2(c5,c6,a5,a6,a7,a8)
s=1
break
s=27
break
case 28:s=l instanceof A.bM?33:35
break
case 33:n.e.$0()
q=B.ar
s=1
break
s=34
break
case 35:s=l instanceof A.b9?36:38
break
case 36:b1=l
b2=b1 instanceof A.cX?b1:new A.dt("network error")
l=c8.length,b6=n.a,b7=b6.x,b8=0
case 39:if(!(b8<c8.length)){s=41
break}b3=c8[b8]
b9=b6.dx
b9===$&&A.v()
s=42
return A.a(b9.bS(b7,b3.b,b3.c),$async$bK)
case 42:b4=d2
s=b4!=null?43:44
break
case 43:s=45
return A.a(n.cR(n.jR(b3),b4,b2),$async$bK)
case 45:b5=d2
c5+=b5.a
c6+=b5.b
case 44:case 40:c8.length===l||(0,A.p)(c8),++b8
s=39
break
case 41:q=new A.b2(c5,c6,0,0,0,!0)
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
return A.f($async$bK,r)},
cl(a,b,c){return this.pZ(a,b,c)},
pZ(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$cl=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.J(b5)
s=b3.gl(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.dx
h===$&&A.v()
b3=g.b
s=5
return A.a(h.fI("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$cl)
case 5:q=B.F
s=1
break
case 4:a0=B.c.M(b3.gl(b5),2)
m=0
l=0
k=!1
b3=[b3.V(b5,0,a0),b3.bi(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
s=13
return A.a(a3.bO(j),$async$cl)
case 13:i=b9
h=A.t(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.b1(h,g.a,g)}f=h
e=A.aP(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aO(e,d.a)){a6=A.aZ("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aZ("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.Q(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jS(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.ee(a7,a8,a9,b0==null?b.d:b0),$async$cl)
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
return A.a(a7.fI(b1,a9,b0,b.d,a8),$async$cl)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.A(b4)
s=a6 instanceof A.dc?21:23
break
case 21:s=24
return A.a(n.cl(j,b6,b7),$async$cl)
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
case 8:q=new A.b2(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cl,r)},
jS(a,b){var s=b==null?a.d:b
return new A.cz(a.b,a.c,B.v,s,a.e,A.at(B.m.v(B.e.v(a.d)).a),B.r,a.a,0,null)},
jR(a){return this.jS(a,null)},
ee(a,b,c,d){return this.tU(a,b,c,d)},
fb(a,b){return this.ee(a,b,null,null)},
tU(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$ee=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(a.a).a
n=A.fs(o,b)
m=d==null
l=m?A.al(A.bp(o,n)):d
p=p.dx
p===$&&A.v()
s=2
return A.a(p.li(A.l([new A.jK(a,l,b.c,A.at(B.m.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$ee)
case 2:return A.e(null,r)}})
return A.f($async$ee,r)},
lA(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.eQ('record id "'+s+'" does not match requested "'+r+'"'))},
cR(a,b,c){return this.tD(a,b,c)},
tD(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.cX?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.dx
o===$&&A.v()
s=5
return A.a(o.nB(c.a,a.b,"max_attempts",a.d,B.as,a.a),$async$cR)
case 5:q=B.F
s=1
break
case 4:o=p.c
n=o.ne(l,k)
m=p.a.dx
m===$&&A.v()
s=6
return A.a(m.xV(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$cR)
case 6:q=B.ar
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cR,r)},
dm(a,b,c){return this.qy(a,b,c)},
lT(a,b){return this.dm(a,b,null)},
qy(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dm=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.dx
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.fI(p,a.b,b,a.d,a.a),$async$dm)
case 2:return A.e(null,r)}})
return A.f($async$dm,r)},
cP(a,b,c){return this.rg(a,b,c)},
jO(a,b){return this.cP(a,b,!0)},
rg(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g
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
m=A.iq(b.r)
l=A.iq(a.d)
p=2
s=11
break
case 9:p=8
g=o.pop()
i=A.A(g)
s=i instanceof A.dh?12:14
break
case 12:k=i
s=15
return A.a(n.dm(a,"corrupt_payload",k.a),$async$cP)
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
return A.a(n.hs(a,b,m,l),$async$cP)
case 16:q=B.bk
s=1
break
case 6:s=!c?17:18
break
case 17:s=19
return A.a(n.lT(a,"missing_target"),$async$cP)
case 19:q=B.F
s=1
break
case 18:q=n.hJ(a,b,!0)
s=1
break
case 7:s=20
return A.a(i.bz(h).iS(a.b),$async$cP)
case 20:q=B.dw
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cP,r)},
hs(a,b,c,d){return this.qP(a,b,c,d)},
qP(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$hs=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bT(c,d)
n=A.O(o,A.n(o).c)
B.b.aj(n)
p=b.r
if(p==null)p=A.al(c)
s=2
return A.a(q.a.a_(new A.xt(q,a,p,d,n),t.P),$async$hs)
case 2:return A.e(null,r)}})
return A.f($async$hs,r)},
hK(a,b,c,d,e,f){return this.tt(a,b,c,d,e,f)},
tt(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hK=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.aw(a.a).a
m=A.bp(n,A.fs(n,c))
l=A.bT(e,f)
k=A.O(l,A.n(l).c)
B.b.aj(k)
l=A.bT(e,m)
p=A.O(l,A.n(l).c)
B.b.aj(p)
s=2
return A.a(o.a_(new A.xy(q,a,b,e,f,m,k,p,n,c),t.P),$async$hK)
case 2:return A.e(null,r)}})
return A.f($async$hK,r)}}
A.xu.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
s=7
return A.a(l.b.c9(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.fb(k,m),$async$$0)
case 8:q=B.a8
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.A(i) instanceof A.dK){q=n.a.k5(n.b,n.c,n.d)
s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:21}
A.xz.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
s=3
return A.a(n.b.aV(m.b),$async$$0)
case 3:l=b
s=l==null?4:5
break
case 4:s=6
return A.a(n.lT(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.F
s=1
break
case 5:o=p.c
s=A.at(B.m.v(B.e.v(A.al(A.bp(o,A.fs(o,l))))).a)===A.at(B.m.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.fb(m,l),$async$$0)
case 9:q=B.a8
s=1
break
case 8:q=n.dt(m,p.d,l,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.xx.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
s=3
return A.a(n.b.aV(m.b),$async$$0)
case 3:l=b
if(l==null){q=n.jO(m,p.c)
s=1
break}n.lA(m,l)
if(l.c===m.e){o=p.c
q=n.rm(m,o,new A.xw(n,m,l,o),!0)
s=1
break}q=n.mp(m,p.c,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.xw.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
k=n.a
j=n.b
s=7
return A.a(k.b.bV(n.c.c,j.d,j.b),$async$$0)
case 7:m=b
s=8
return A.a(k.fb(j,m),$async$$0)
case 8:q=B.a8
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
s=A.A(h) instanceof A.e3?9:11
break
case 9:k=n.a
j=n.b
s=12
return A.a(k.b.aV(j.b),$async$$0)
case 12:l=b
if(l==null){q=k.jO(j,n.d)
s=1
break}q=k.mp(j,n.d,l)
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
$S:21}
A.xv.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o
k=n
s=4
return A.a(o.b.bV(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(l.ee(k,b,p.e.a,m),$async$$0)
case 3:q=B.a8
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.xt.prototype={
$1(a){return this.oD(a)},
oD(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cz(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.al(q.d),"remote_json",A.al(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a9(q.e,null),"dirty_remote",B.h.a9(B.r,null),"detected_at",q.a.c.ay.$0()],k,j),B.V),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a1(new A.a5(n,A.ao([m],k)))
a.a1(new A.a5("lp_conflicts",A.ao([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.xy.prototype={
$1(a){return this.oE(a)},
oE(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cz(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.al(q.e),"remote_json",A.al(o),"dirty_local",B.h.a9(q.r,null),"dirty_remote",B.h.a9(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.V),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.al(o),"base_hash",A.at(B.m.v(B.e.v(A.al(A.bp(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a1(new A.a5(j,A.ao([k],n)))
a.a1(new A.a5("lp_conflicts",A.ao([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.ck.prototype={
a7(){return"SyncEngineState."+this.b}}
A.hy.prototype={}
A.yq.prototype={
glC(){return 36},
dW(a){return this.px(a)},
px(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dW=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.fy,g=new A.bl(g,g.r,g.e,A.n(g).i("bl<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iU(m),$async$dW)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glC():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.ao(c.a+1,n.glC())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bZ(m,a),$async$dW)
case 13:a5.aO(a6,a9)
case 11:++j
s=10
break
case 12:if(A.ol(h)!=null)A.u(A.B(u.L))
b=h.b
b===$&&A.v()
s=14
return A.a(b.b7(new A.yr(c,n,m,a3),B.q,f),$async$dW)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.A(a4)
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
return A.f($async$dW,r)},
bZ(a,b){return this.pw(a,b)},
pw(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bZ=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.U("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aP(t.N)
m=B.c.h3(B.c.by(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:s=5
return A.a(k.ny(a4,h,o,m),$async$bZ)
case 5:g=a7
f=J.J(g)
if(f.gG(g)){s=4
break}for(e=f.gt(g);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=f.gt(g);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hI(a4,e),$async$bZ)
case 6:c=a7
b=A.l([],l)
for(e=f.gt(g);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aU||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dD(a4,b),$async$bZ)
case 9:i+=b.length
case 8:h=f.ga0(g).a
if(f.gl(g)<m){s=4
break}s=3
break
case 4:k=p.a.x
f=o+"%"
s=10
return A.a(k.ab("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,f]),$async$bZ)
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
return A.a(j.fK(a4,a2),$async$bZ)
case 13:case 12:s=14
return A.a(k.ab("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,f,p.c.ay.$0()]),$async$bZ)
case 14:a3=a7
k=J.J(a3)
s=k.gS(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){f=k.gn().h(0,"record_id")
f.toString
l.push(A.H(f))}s=17
return A.a(j.dD(a4,l),$async$bZ)
case 17:case 16:q=new A.hy(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
hI(a,b){return this.t9(a,b)},
t9(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.t(g,t.o)
o=p.a.x,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.V(b,n,B.c.by(l,0,m))
j=B.b.C(A.a9(k.length,"?",!1,g),", ")
m=[a]
B.b.D(m,k)
e=J
s=6
return A.a(o.ab(u.m+j+")",m),$async$hI)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.H(h),A.hA(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)}}
A.yr.prototype={
$1(a){return this.oG(a)},
oG(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eT(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.b9.prototype={
m(a){return A.d9(this).m(0)+": "+this.a},
$iI:1}
A.dt.prototype={}
A.cX.prototype={}
A.f_.prototype={}
A.bM.prototype={}
A.ce.prototype={}
A.cf.prototype={}
A.dj.prototype={}
A.e0.prototype={}
A.dK.prototype={}
A.hz.prototype={}
A.dc.prototype={}
A.e3.prototype={}
A.lu.prototype={}
A.hw.prototype={
gl(a){return this.b}}
A.cV.prototype={}
A.hf.prototype={}
A.hg.prototype={}
A.cu.prototype={
a7(){return"BackendHintKind."+this.b}}
A.ct.prototype={}
A.D5.prototype={
$2(a,b){return B.a.iO(B.c.m(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:155}
A.oe.prototype={
gnP(){return 1}}
A.ys.prototype={
ne(a,b){var s,r
if(b!=null){s=this.t_(b)
if(A.a6(s))return A.bX(0,0,s<0?0:s)
if(s instanceof A.aI){r=s.a-this.ay.$0()
return r<=0?B.I:A.bX(0,r,0)}return B.ay}return A.Ik(a,B.ay,B.ak,this.at)},
nd(a){return this.ne(a,null)},
t_(a){var s=B.a.cg(a),r=A.hc(s,null)
if(r!=null)return r
return A.Ls(s)}}
A.xg.prototype={
iP(a){return this.xq(a)},
xq(a){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$iP=A.c(function(b,a0){if(b===1){o.push(a0)
s=p}for(;;)switch(s){case 0:f=a.h(0,"backend")
if(!A.a6(f))throw A.b(A.G('Backend call "backend" must be an int.',null))
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
case 5:i=A.OE(a.h(0,"hint"),"backend hint")
h=m.e
if((h.c&4)===0)h.u(0,i)
q=B.dj
s=1
break
case 6:p=9
d=A
c=!0
s=12
return A.a(m.b.ca(),$async$iP)
case 12:i=d.m(["ok",c,"result",a0],t.N,t.X)
q=i
s=1
break
p=2
s=11
break
case 9:p=8
e=o.pop()
i=A.A(e)
if(i instanceof A.b9){l=i
q=A.m(["ok",!1,"error",A.OR(l)],t.N,t.X)
s=1
break}else{k=i
q=A.m(["ok",!1,"pageError",J.Y(k)],t.N,t.X)
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
return A.f($async$iP,r)}}
A.hd.prototype={
no(){var s=this.e
return new A.b0(s,A.n(s).i("b0<1>"))},
fP(){return this.aI("prepare",B.j,"prepare()")},
d7(a,b,c,d,e){return this.wV(a,b,c,d,e)},
ny(a,b,c,d){return this.d7(a,b,null,c,d)},
nx(a,b,c,d){return this.d7(a,b,c,null,d)},
wV(a,b,c,d,e){var s=0,r=A.h(t.kR),q,p=this,o,n,m
var $async$d7=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=A.t(t.N,t.X)
n.j(0,"store",a)
if(c!=null)n.j(0,"fromUpdated",c)
if(b!=null)n.j(0,"fromId",b)
if(d!=null)n.j(0,"idPrefix",d)
n.j(0,"perPage",e)
o='listChanges("'+a+'")'
m=A
s=3
return A.a(p.aI("listChanges",n,o),$async$d7)
case 3:q=m.OL(g,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d7,r)},
aV(a){return this.oU(a)},
oU(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o='getRecord("'+a+'")'
s=3
return A.a(p.aI("getRecord",A.m(["id",a],t.N,t.X),o),$async$aV)
case 3:n=c
q=n==null?null:A.er(n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aV,r)},
c9(a,b,c){return this.v6(a,b,c)},
v6(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$c9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='createRecord("'+b+'")'
n=A
s=3
return A.a(p.aI("createRecord",A.m(["id",b,"store",c,"dataJson",a],t.N,t.X),o),$async$c9)
case 3:q=n.er(e,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c9,r)},
bV(a,b,c){return this.yn(a,b,c)},
yn(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n,m
var $async$bV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=A.t(t.N,t.X)
n.j(0,"id",c)
n.j(0,"dataJson",b)
n.j(0,"baseUpdated",a)
o='updateRecord("'+c+'")'
m=A
s=3
return A.a(p.aI("updateRecord",n,o),$async$bV)
case 3:q=m.er(e,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
eR(a,b){var s=null,r=null
return this.yp(a,b)},
yp(a,b){var s=0,r=A.h(t.h),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$eR=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:i=null
h=null
g=null
p=4
m=A.t(t.N,t.X)
J.b1(m,"id",a)
if(i!=null)J.b1(m,"dataJson",i)
if(g!=null)J.b1(m,"session",g)
if(h!=null)J.b1(m,"keepNames",h)
J.b1(m,"removeNames",b)
k='updateRecordFiles("'+a+'")'
s=7
return A.a(n.aI("updateRecordFiles",m,k),$async$eR)
case 7:l=d
k=A.er(l,k)
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
ci(a,b){var s=null,r=null,q=null
return this.yr(a,b)},
yr(a6,a7){var s=0,r=A.h(t.h),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$ci=A.c(function(a8,a9){if(a8===1){o.push(a9)
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
return A.a(c.c.$0(),$async$ci)
case 7:l=a9
b=A.l([],e)
k=new A.oT(b)
b=new A.c5(l,f)
p=8
case 11:s=13
return A.a(b.k(),$async$ci)
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
return A.a(b.A(),$async$ci)
case 14:s=n.pop()
break
case 10:g.push(new A.pL(d.a,c.a,k.iZ()))
s=5
break
case 6:s=15
return A.a(m.fk(g),$async$ci)
case 15:a3=a9
case 4:p=17
i=A.t(t.N,t.X)
J.b1(i,"id",a6)
if(a0!=null)J.b1(i,"dataJson",a0)
if(a3!=null)J.b1(i,"session",a3)
if(a1!=null)J.b1(i,"keepNames",a1)
if(a2!=null)J.b1(i,"removeNames",a2)
a4='updateRecordFilesStream("'+a6+'")'
s=20
return A.a(m.aI("updateRecordFilesStream",i,a4),$async$ci)
case 20:h=a9
a4=A.er(h,a4)
q=a4
s=1
break
p=2
s=19
break
case 17:p=16
a5=o.pop()
s=21
return A.a(m.eY(a3),$async$ci)
case 21:throw a5
s=19
break
case 16:s=2
break
case 19:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ci,r)},
bM(a,b,c){return this.vQ(a,b,c)},
vQ(a,b,c){var s=0,r=A.h(t.v),q,p=this,o,n,m,l,k,j
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
return A.a(p.aI("downloadBegin",m,n),$async$bM)
case 3:q=p.e1(l,k.HT(j.ER(e,n).h(0,"sessionId"),o+'").sessionId'))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bM,r)},
e1(a,b){return this.qH(a,b)},
qH(a,b){var $async$e1=A.c(function(c,d){switch(c){case 2:n=q
s=n.pop()
break
case 1:o.push(d)
s=p}for(;;)switch(s){case 0:p=3
j='downloadFile("'+a,i=j+'") chunk bytes',h=t.N,g=t.X,j+='") chunk'
case 6:s=8
return A.aR(m.aI("downloadChunk",A.m(["sessionId",b],h,g),j),$async$e1,r)
case 8:l=d
k=A.ER(l,j)
if(A.MG(J.Q(k,"done"),'downloadFile chunk "done"')){s=7
break}s=9
q=[1,4]
return A.aR(A.d5(A.If(J.Q(k,"bytes"),i)),$async$e1,r)
case 9:s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
p=11
s=14
return A.aR(m.aI("downloadEnd",A.m(["sessionId",b],t.N,t.X),'downloadFile("'+a+'") end'),$async$e1,r)
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
var s=0,r=A.Cv($async$e1,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e
return A.CG(r)},
bO(a){return this.xC(a)},
xC(a){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i
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
return A.a(p.aI("pushBatch",A.m(["ops",j],n,m),"pushBatch"),$async$bO)
case 3:q=i.OK(c,"pushBatch")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bO,r)},
q(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this
var $async$q=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.d.a.F(0,n.a)
q=2
s=5
return A.a(n.aI("dispose",B.j,"dispose()"),$async$q)
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
fk(a){return this.ue(a)},
ue(a){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$fk=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:d="u"+p.a+"-"+p.f++
c=A.l([],t.ic)
for(o=a.length,n=t.N,m=t.K,l=0;l<a.length;a.length===o||(0,A.p)(a),++l){k=a[l]
c.push(A.m(["field",k.a,"filename",k.b,"length",k.c.length],n,m))}o=t.X
s=3
return A.a(p.aI("uploadBegin",A.m(["sessionId",d,"files",c],n,o),"uploadBegin"),$async$fk)
case 3:c=a.length,l=0
case 4:if(!(l<a.length)){s=6
break}k=a[l]
m=k.c,j=m.length,i=k.a,h='uploadChunk("'+i+'")',g=0
case 7:if(!(g<j)){s=9
break}f=g+262144
e=new Uint8Array(m.subarray(g,A.d7(g,f>j?j:f,j)))
s=10
return A.a(p.aI("uploadChunk",A.m(["sessionId",d,"field",i,"bytes",B.R.gdC().v(e)],n,o),h),$async$fk)
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
return A.f($async$fk,r)},
eY(a){return this.pL(a)},
pL(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l
var $async$eY=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(a==null){s=1
break}p=4
s=7
return A.a(n.aI("uploadAbort",A.m(["sessionId",a],t.N,t.X),"uploadAbort"),$async$eY)
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
aI(a,b,c){return this.pS(a,b,c)},
pS(a,b,c){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$aI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=A.t(t.N,t.X)
o.j(0,"method",a)
o.j(0,"backend",p.a)
o.D(0,b)
n=A
s=3
return A.a(p.c.cA("syncBackend",o),$async$aI)
case 3:q=n.F1(e,A.IG(),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aI,r)},
$inZ:1,
gi8(){return this.r},
gle(){return this.w}}
A.pL.prototype={}
A.xi.prototype={
cZ(a,b,c,d){return this.v0(a,b,c,d)},
v0(a,b,c,d){var s=0,r=A.h(t.o8),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cZ=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:m=p.b
l=m.b++
k=p.a
f=A
e=A
s=3
return A.a(k.cA("syncBackend",A.m(["method","create","backend",l,"baseUrl",a.m(0),"identity",b,"stores",c],t.N,t.X)),$async$cZ)
case 3:j=f.ER(e.F1(a1,A.IG(),"sync backend create()"),"sync backend create()")
i=A.kZ(j.h(0,"capabilities"),"create().capabilities")
h=i.I("batchEnabled")&&i.h(0,"batchEnabled")!=null&&A.HF(i.h(0,"batchEnabled"),"create().capabilities","batchEnabled")
g=i.I("maxBatch")&&i.h(0,"maxBatch")!=null?A.HG(i.h(0,"maxBatch"),"create().capabilities","maxBatch"):25
if(i.I("maxPage")&&i.h(0,"maxPage")!=null)A.HG(i.h(0,"maxPage"),"create().capabilities","maxPage")
o=A.HT(j.h(0,"scopeId"),"create().scopeId")
n=new A.hd(l,d,k,m,A.dr(null,null,t.hw),new A.lu(h,g),o)
m.a.j(0,l,n)
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
d_(a){return this.vL(a)},
vL(a){var s=0,r=A.h(t.H)
var $async$d_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!(a instanceof A.hd))throw A.b(A.G("The proxy sync factory can only dispose backends it created.",null))
s=2
return A.a(a.q(),$async$d_)
case 2:return A.e(null,r)}})
return A.f($async$d_,r)}}
A.CA.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.B)},
$S:30}
A.jJ.prototype={}
A.k1.prototype={}
A.yF.prototype={
iT(a){return this.xR(a)},
xR(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eK("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iT)
case 3:m=c
l=J.J(m)
if(l.gG(m)){q=null
s=1
break}o=A.a0(J.Q(l.gH(m),"cursor_updated"))
n=A.a0(J.Q(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jJ(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iT,r)},
eS(a,b,c,d){return this.yJ(a,b,c,d)},
yJ(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eS)
case 5:s=m.bs(f)?2:4
break
case 2:s=6
return A.a(a.aG(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eS)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eS)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eS,r)},
iU(a){return this.xT(a)},
xT(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eK("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iU)
case 3:n=c
m=J.J(n)
if(m.gG(n)){q=B.dU
s=1
break}o=A.aU(J.Q(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.k1(o,A.aU(J.Q(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iU,r)},
eT(a,b,c,d){return this.yN(a,b,c,d)},
yN(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eT)
case 5:s=m.bs(f)?2:4
break
case 2:s=6
return A.a(a.aG(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eT)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eT)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eT,r)},
ia(){var s=0,r=A.h(t.iD),q,p=this,o,n,m,l,k,j,i,h
var $async$ia=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.bd("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked,\n        SUM(CASE WHEN sync_state = 'quarantine' THEN 1 ELSE 0 END) AS quarantined,\n        (SELECT last_error FROM lp_sync_row\n          WHERE sync_state = 'quarantine' AND last_error IS NOT NULL\n          ORDER BY local_rev DESC, rowid DESC LIMIT 1) AS quarantine_error\n      FROM lp_sync_row\n    "),$async$ia)
case 3:j=b
i=J.J(j)
h=i.gG(j)?B.j:i.gH(j)
i=A.aU(h.h(0,"pending"))
if(i==null)i=0
o=A.aU(h.h(0,"conflicts"))
if(o==null)o=0
n=A.aU(h.h(0,"hidden"))
if(n==null)n=0
m=A.aU(h.h(0,"blocked"))
if(m==null)m=0
l=A.aU(h.h(0,"quarantined"))
if(l==null)l=0
if(typeof h.h(0,"quarantine_error")=="string"){k=h.h(0,"quarantine_error")
k.toString
A.H(k)}else k=null
q=new A.pq([m,o,n,i,k,l])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)}}
A.d_.prototype={
a7(){return"SyncState."+this.b}}
A.fy.prototype={
a7(){return"AccessState."+this.b}}
A.ha.prototype={
a7(){return"OutboxKind."+this.b}}
A.jA.prototype={
a7(){return"OpQueueKind."+this.b}}
A.Dr.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cZ.prototype={}
A.yE.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.H(i)
i=j.h(0,"record_id")
i.toString
A.H(i)
i=A.a0(j.h(0,"remote_updated"))
s=A.aU(j.h(0,"last_seen_at"))
r=A.a0(j.h(0,"base_updated"))
A.a0(j.h(0,"base_hash"))
q=A.a0(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fO(B.cQ,A.H(p))
A.Ig(j.h(0,"dirty_fields"))
o=A.aU(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fO(B.cP,A.H(n))
A.a0(j.h(0,"op_id"))
m=A.aU(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.aU(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a0(j.h(0,"last_error"))
A.aU(j.h(0,"schema_ver"))
return new A.cZ(i,s,r,q,p,o,n,m,l,k)},
$S:156}
A.cz.prototype={}
A.wo.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.H(i)
s=j.h(0,"record_id")
s.toString
A.H(s)
r=j.h(0,"kind")
r.toString
r=A.fO(B.d_,A.H(r))
q=j.h(0,"payload_json")
q.toString
A.H(q)
p=A.a0(j.h(0,"base_updated"))
o=A.a0(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Ig(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.H(m)
l=j.h(0,"created_at")
l.toString
A.ai(l)
k=j.h(0,"updated_at")
k.toString
A.ai(k)
return new A.cz(i,s,r,q,p,o,n,m,l,A.a0(j.h(0,"depends_on_op")))},
$S:157}
A.eW.prototype={}
A.wj.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ai(l)
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
q=A.fO(B.cV,A.H(q))
p=m.h(0,"payload_json")
p.toString
A.H(p)
o=m.h(0,"state")
o.toString
A.H(o)
o=A.aU(m.h(0,"attempt_count"))
if(o==null)o=0
A.aU(m.h(0,"next_retry_at"))
A.a0(m.h(0,"last_error"))
n=A.a0(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ai(m)
return new A.eW(l,s,r,q,p,o,n)},
$S:158}
A.Dp.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.H(s)},
$S:55}
A.Dq.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.H(s)},
$S:55}
A.CV.prototype={
$1(a){return a.b},
$S:160}
A.CW.prototype={
$1(a){return a.b===this.a},
$S:161}
A.bR.prototype={
a1(a){var s,r
this.c.push(a)
s=this.a.Q
r=a.b
r=r.gl(r)
s.r+=r},
uC(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bN(a,b,c,d,e,f,g){var s
if(this.a.a$.b.d==null)return
if(b==null){s=e==null?d:e
s=J.JE((s==null?B.j:s).gJ(),new A.yR()).cH(0)}else s=b
this.uC(new A.e2(g,c,f,a,e,d,s))},
kz(a,b,c,d,e,f){return this.bN(a,null,b,c,d,e,f)},
bz(a){var s=this.a
return new A.fF(s,s.aw(a),new A.iR(this.b),this)},
a_(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.B("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cX(o,a,b)},
cX(a,b,c){return this.uo(a,b,c,c)},
uo(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cX=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.N("SAVEPOINT "+a2),$async$cX)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.Q
k=e.r
p=5
d=A.Eo(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.q4(new A.yQ(a3,j,a4),null,A.m([$.ld(),j],f,f),a4.i("y<0>")),$async$cX)
case 8:i=a7
s=9
return A.a(a.N("RELEASE "+a2),$async$cX)
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
return A.a(a.N("ROLLBACK TO "+a2),$async$cX)
case 14:s=15
return A.a(a.N("RELEASE "+a2),$async$cX)
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
if(a>m)B.b.iY(h,m,a)
a=g.length
if(a>l)B.b.iY(g,l,a)
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
A.yR.prototype={
$1(a){return a!=="id"},
$S:13}
A.yQ.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.Bv.prototype={}
A.m8.prototype={
a7(){return"DurabilityClass."+this.b}}
A.yI.prototype={
b7(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.D,t._)
r.c.push(new A.hQ(a,new A.aG(s,t.jk)))
return s.U(new A.yP(c),c)}return this.u_(a,b,c)},
u_(a,b,c){var s,r,q,p=this
if(p.a.ax.a>0){s=p.c
if(s!=null)s.kF()}s=A.l([],t.i4)
r=new A.oX(p,b,s)
p.c=r
r.y6()
q=new A.w($.D,t._)
s.push(new A.hQ(a,new A.aG(q,t.jk)))
return q.U(new A.yL(c),c)},
xP(a,b){var s,r=this.a
if(r.ax.a>0){s=this.c
if(s!=null)s.kF()}return r.e.b5(new A.yO(this,a,b),b)},
rG(){if(++this.d<64)return
this.d=0
A.c4(B.I,new A.yK(this))}}
A.yP.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yL.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.yO.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a_(new A.yN(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.yN.prototype={
$1(a){return this.oH(a,this.c)},
oH(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.Eo(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.q4(new A.yM(p.b,o,n),null,A.m([$.ld(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(rL)")}}
A.yM.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.yK.prototype={
$0(){var s=this.a.a.a.e
s===$&&A.v()
s.j2().ko(new A.yJ())},
$S:0}
A.yJ.prototype={
$1(a){},
$S:20}
A.oX.prototype={
y6(){var s,r,q=this,p=new A.aG(new A.w($.D,t.D),t.Q)
q.e=p
s=q.a.a
s.e.b5(new A.Aj(q,p),t.H)
r=s.ax
s=q.gwg()
if(r.a>0)A.c4(r,s)
else A.c4(B.I,s)},
kF(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.al()},
d3(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$d3=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jZ()
$.lb()
b3.aC()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.b1&&b4.w!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:b5=b4.e
b5===$&&A.v()
s=5
return A.a(b5.nW("PRAGMA synchronous=FULL",null),$async$d3)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a_(new A.Ai(m,i,h,l,g),t.P),$async$d3)
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
if((b8.a.a&30)!==0)A.u(A.B("Future already completed"))
b8.aq(A.fl(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.u(A.B("Future already completed"))
b8.aN(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.fy,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.wN(a0.b)
b6.ky(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.p)(f),++b7){a1=f[b7]
b6.vV(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.A(c2)
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
if((b6.a.a&30)!==0)A.u(A.B("Future already completed"))
b6.aq(A.fl(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.u(A.B("Future already completed"))
b6.aq(A.fl(a2,a3))}}throw c2
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
return A.a(f.nW("PRAGMA synchronous=NORMAL",null),$async$d3)
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
a4=k.gvU();++f.a
f.d+=a4
b1.rG()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.p)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.u(A.B("Future already completed"))
a4.aq(A.fl(new A.bw("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d3,r)}}
A.Aj.prototype={
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
A.Ai.prototype={
$1(a){return this.oI(a)},
oI(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.Eo(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.q4(new A.Ag(a,a0),null,A.m([$.ld(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.fh([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.A(a1)
l=A.af(a1)
o.e.push(new A.fh([B.b.gap(a.c),null,m,l]))
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
return A.a(A.q4(new A.Ah(a0,k),null,A.m([$.ld(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.fh([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.A(a2)
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
$S:32}
A.Ag.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:56}
A.Ah.prototype={
$0(){return this.a.a_(new A.Af(this.b),t.z)},
$S:56}
A.Af.prototype={
$1(a){return this.a.a.$1(a)},
$S:163}
A.hQ.prototype={}
A.nt.prototype={
lj(a){return a.a===this.x.b.a},
fB(){var s=this.x
return s.ex(s.w==null&&!s.x?50:null).U(new A.xO(),t.J)},
n7(a){return A.Or(a,new A.xN(this),this.x.r.length!==0)},
nE(a){var s=this.y
return s==null?null:s.u(0,a)},
kT(a,b){var s=this.y
return s==null?null:s.bp(a,b)},
je(){var s=this.y=A.nU(this.gkw(),new A.xP(this),null,null,!1,t.J)
return new A.bi(s,A.n(s).i("bi<1>"))},
fu(){this.lp()
var s=this.y
if(s!=null)s.q()}}
A.xO.prototype={
$1(a){return a.a},
$S:164}
A.xN.prototype={
$1(a){return this.a.a.Q.Q+=a},
$S:9}
A.xP.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.en(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.nd.prototype={
lj(a){var s
if(a.a!==this.x.a.a)return!1
s=a.b
if(s.gS(s)&&!s.E(0,this.y))return!1
return!0},
fB(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$fB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.v()
o=p.x.a
s=3
return A.a(l.gbB().b.aK(o.a,1,"id = ?",[p.y]),$async$fB)
case 3:n=b
l=J.J(n)
if(l.gG(n)){q=null
s=1
break}q=A.bJ(o,l.gH(n),m.cx,m.cy)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
n7(a){return a==null?"<null>":A.at(B.m.v(B.e.v(A.al(a))).a)},
nE(a){var s=this.z
return s==null?null:s.u(0,a)},
kT(a,b){var s=this.z
return s==null?null:s.bp(a,b)},
je(){var s=this.z=A.nU(this.gkw(),new A.wh(this),null,null,!1,t.b)
return new A.bi(s,A.n(s).i("bi<1>"))},
fu(){this.lp()
var s=this.z
if(s!=null)s.q()}}
A.wh.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aC()
s=2
return A.a(p.en(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fE.prototype={
kT(a,b){},
aC(){var s=this.a.a$.a
this.c=new A.b0(s,A.n(s).i("b0<1>")).b2(this.grI())},
rJ(a){var s,r=this
if(!r.lj(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.A()
r.d=A.c4(r.b,r.gmT())},
en(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$en=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(m.r){s=1
break}m.e=!0
h=m.a.Q;++h.y
p=4
s=7
return A.a(m.fB(),$async$en)
case 7:l=b
if(m.r){n=[1]
s=5
break}k=m.n7(l)
if(!J.x(k,m.w)){m.w=k;++h.z
m.nE(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.A(f)
i=A.af(f)
if(!m.r)m.kT(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.A()
m.d=A.c4(m.b,m.gmT())}s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$en,r)},
fu(){var s,r=this
r.r=!0
s=r.d
if(s!=null)s.A()
r.f=!1
s=r.c
if(s!=null)s.A()}}
A.zD.prototype={
b5(a,b){var s,r=this;++r.b
r.mi()
s=new A.w($.D,b.i("w<0>"))
r.a=r.a.U(new A.zE(r,new A.aG(s,b.i("aG<0>")),a),t.H)
return s},
mi(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.zE.prototype={
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
m=A.A(i)
l=A.af(i)
n.b.bA(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.mi()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:47}
A.hK.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.zh.prototype={
$2(a,b){return new A.V(J.Y(a),b,t.B)},
$S:30}
A.oB.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.ze.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.zc.prototype={
f8(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$f8=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.is()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a4(n.getDirectory(),l),$async$f8)
case 7:m=b
s=8
return A.a(A.a4(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$f8)
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
return A.f($async$f8,r)},
hD(){var s=0,r=A.h(t.y),q,p=this,o
var $async$hD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.w){q=!1
s=1
break}o=p.r
s=o==null?3:5
break
case 3:s=6
return A.a(p.f8(),$async$hD)
case 6:b=p.r=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)},
bk(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bk=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.x
if(h!=null){q=h
s=1
break}s=3
return A.a(n.hD(),$async$bk)
case 3:if(!b){q=null
s=1
break}p=5
m=A.is()
if(m==null){q=null
s=1
break}j=t.m
s=8
return A.a(A.a4(m.getDirectory(),j),$async$bk)
case 8:l=b
f=A
s=9
return A.a(A.a4(l.getDirectoryHandle("localpocket_blobs",{create:!0}),j),$async$bk)
case 9:k=new f.pk(b)
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
return A.f($async$bk,r)},
gcB(){var s=0,r=A.h(t.y),q,p=this
var $async$gcB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bk(),$async$gcB)
case 3:q=b!=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcB,r)},
aH(a,b,c){return this.xE(a,b,c)},
fT(a){return this.aH(a,null,null)},
xE(a,a0,a1){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b
var $async$aH=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:f=new A.oT(A.l([],t.bs))
s=3
return A.a(A.l7(a,a0,a1,null,268435456,new A.zd(f)),$async$aH)
case 3:e=a3
d=f.iZ()
s=4
return A.a(m.bk(),$async$aH)
case 4:c=a3
s=c!=null?5:7
break
case 5:l="tmp_"+e.a
p=8
s=11
return A.a(c.az(l,d),$async$aH)
case 11:s=12
return A.a(c.az(e.a,d),$async$aH)
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
p=14
s=17
return A.a(c.F(0,l),$async$aH)
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
if(h>134217728)A.u(A.iA(A.B("volatile blob memory cap exceeded: would reach "+h+" of 134217728 bytes"),j))
m.d.j(0,j,i)
m.e+=g
case 6:q=e.a
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aH,r)},
bD(a){return this.xk(a)},
xk(a){var s=0,r=A.h(t.v),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$bD=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.lD(a)
j=n.d
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.Ej(j,t.L)
s=1
break}s=3
return A.a(n.bk(),$async$bD)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.eL(a),$async$bD)
case 10:l=c
j=A.Ej(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.A(h)
if(!(k instanceof A.ew))throw A.b(A.iA(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.B("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bD,r)},
bb(a){return this.vh(a)},
vh(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$bb=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.lD(a)
l=o.d.F(0,a)
if(l!=null)o.e=o.e-l.length
s=2
return A.a(o.bk(),$async$bb)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.F(0,a),$async$bb)
case 9:q=1
s=8
break
case 6:q=5
j=p.pop()
m=A.A(j)
if(!(m instanceof A.ew))throw A.b(A.iA(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$bb,r)},
aZ(a){return this.w4(a)},
w4(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$aZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lD(a)
if(p.d.I(a)){q=!0
s=1
break}s=3
return A.a(p.bk(),$async$aZ)
case 3:o=c
if(o!=null){q=o.aZ(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aZ,r)},
aW(a){return this.pa(a)},
pa(a){var s=0,r=A.h(t.u),q,p=this,o,n
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.lD(a)
o=p.d
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bk(),$async$aW)
case 3:n=c
if(n!=null){q=n.aW(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aW,r)},
c8(a){return this.uU(a)},
uU(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$c8=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bk(),$async$c8)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.eE(),$async$c8)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.JC(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.F(0,l),$async$c8)
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
return A.f($async$c8,r)},
cD(){var s=0,r=A.h(t.a),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$cD=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.d
i=A.c0(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bk(),$async$cD)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.eE(),$async$cD)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Fc()
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
return A.f($async$cD,r)}}
A.zd.prototype={
$1(a){return this.a.u(0,a)},
$S:11}
A.pk.prototype={
eL(a){return this.xQ(a)},
xQ(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
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
j=A.A(g)
if(A.GA(j))throw A.b(A.Fw(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eL,r)},
az(a,b){return this.yI(a,b)},
yI(a1,a2){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
return A.a(A.a4(f.write(t.i.a(B.f.gad(a2))),j),$async$az)
case 8:s=9
return A.a(A.a4(f.close(),j),$async$az)
case 9:q=1
s=7
break
case 5:q=4
e=p.pop()
n=A.A(e)
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
case 13:throw A.b(A.iA(n,a1))
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
return A.a(A.mv(h,a1),$async$az)
case 27:q=16
s=26
break
case 24:q=23
c=p.pop()
s=26
break
case 23:s=16
break
case 26:g=A.iA(A.B("write verification failed: persisted "+A.r(A.D9(l,"size"))+" of "+g+" bytes"),a1)
throw A.b(g)
case 22:q=1
s=18
break
case 16:q=15
b=p.pop()
g=A.A(b)
s=g instanceof A.fC?28:30
break
case 28:throw b
s=29
break
case 30:k=g
q=32
s=35
return A.a(A.mv(h,a1),$async$az)
case 35:q=15
s=34
break
case 32:q=31
a=p.pop()
s=34
break
case 31:s=15
break
case 34:throw A.b(A.iA(k,a1))
case 29:s=18
break
case 15:s=1
break
case 18:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$az,r)},
F(a,b){return this.y0(0,b)},
y0(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$F=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.mv(o.a,b),$async$F)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.A(l)
if(A.GA(n))throw A.b(A.Fw(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$F,r)},
aZ(a){return this.w5(a)},
w5(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$aZ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),t.m),$async$aZ)
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
return A.f($async$aZ,r)},
aW(a){return this.pb(a)},
pb(a){var s=0,r=A.h(t.u),q,p=2,o=[],n=this,m,l,k,j,i
var $async$aW=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a4(n.a.getFileHandle(a,{create:!1}),k),$async$aW)
case 7:m=c
s=8
return A.a(A.a4(m.getFile(),k),$async$aW)
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
return A.f($async$aW,r)},
eE(){var s=0,r=A.h(t.a),q,p=2,o=[],n=[],m=this,l,k,j
var $async$eE=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.c5(A.cq(A.FN(m.a),"stream",t.K),t.hT)
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
$iG9:1}
A.vt.prototype={
d4(a,b){return this.wp(a,b)},
wp(a,b){var s=0,r=A.h(t.X),q,p
var $async$d4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.l5(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d4,r)},
iN(a,b,c,d){return this.xl(a,b,c,d)},
xl(c2,c3,c4,c5){var s=0,r=A.h(t.n),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$iN=A.c(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:b7=c2.xg(c3,c4)
b8=t.N
b9=new A.iN(A.t(b8,t.fw),b7)
c0=!1
p=4
a8=c5==null
n=A.Iy(a8?null:A.l1(c5),"backupDbName")
if(n!=null&&typeof n!="string"){a2=A.aL('"backupDbName" must be a string.')
throw A.b(a2)}a9=A.a0(n)
m=a9==null?c3:a9
b9.e=new A.vu(m)
b9.f=new A.vv(m)
b7.N("PRAGMA journal_mode=TRUNCATE")
b0=b7.oX("PRAGMA journal_mode")
l=b0.gH(b0).b[0]
if(J.Y(l).toLowerCase()!=="truncate"){a2=A.B("journal_mode read-back was "+A.r(l)+", expected truncate")
throw A.b(a2)}k=A.Pl(a8?null:A.l1(c5))
b1=t.bE.a(J.Q(k,"stores"))
j=b1==null?A.l([],t.aw):b1
b2=A.aU(J.Q(k,"maxDocBytes"))
i=b2==null?19e5:b2
b0=A.Ca(J.Q(k,"destructiveBackup"))
h=b0!==!1
b3=t.b.a(J.Q(k,"storePolicies"))
g=b3==null?B.j:b3
f=A.aU(J.Q(k,"groupCommitWindowMs"))
e=A.aU(J.Q(k,"txSessionTtlMs"))
d=A.aU(J.Q(k,"callbackTimeoutMs"))
c=A.aU(J.Q(k,"clockOffsetMs"))
b0=A.Ca(J.Q(k,"syncProxy"))
b=b0===!0
a=b?new A.xg(A.t(t.S,t.oj)):null
b0=A.Ca(J.Q(k,"blobProxy"))
a0=b0===!0
b0=d==null?B.W:A.bX(0,d,0)
a1=new A.zk(b0,A.l([],t.m2))
a2=A.l([],t.oq)
for(b0=j,b4=b0.length,b5=0;b5<b0.length;b0.length===b4||(0,A.p)(b0),++b5){a3=b0[b5]
J.aO(a2,A.I6(a3,J.Q(g,a3.a),a1))}a4=a2
a5=A.Pk(A.Iy(a8?null:A.l1(c5),"fieldCipher"))
if(A.P2(j,a5)){a2=A.G("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a2)}a6=a0?new A.xh(a1):new A.zc(A.t(b8,t.p))
a2=f==null?B.I:A.bX(0,f,0)
b8=e==null?B.ak:A.bX(0,e,0)
a8=c==null||c===0?null:new A.vw(c)
if(b){b0=a
b0.toString
b0=new A.xi(a1,b0)}else b0=B.c0
s=7
return A.a(A.df(a6,a1,b9,h,a5,a2,i,a8,c3,B.aG,a4,b0,b8),$async$iN)
case 7:a7=c7
c0=!0
b8=t.be
q=new A.mX(b7,new A.oF(a7,a1,a,A.aP(b8)),A.t(t.eg,b8))
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
return A.f($async$iN,r)}}
A.vu.prototype={
$1(a){return A.pW(this.a,a)},
$S:165}
A.vv.prototype={
$1(a){return A.pX(this.a,a)},
$S:166}
A.vw.prototype={
$0(){return Date.now()+this.a},
$S:10}
A.mX.prototype={
d4(a,b){return this.wq(a,b)},
wq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$d4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.E3(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.KD(j)
if(o==null){q=A.E3(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.r
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.oY(a)
k.a=l
n.j(0,a,l)
a.b.a.U(new A.vF(k,p,a),t.H)}i=A
s=3
return A.a(p.f.iu(k.a,o),$async$d4)
case 3:q=i.KE(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d4,r)}}
A.vF.prototype={
$1(a){var s,r=this.b
r.r.F(0,this.c)
r=r.f
s=this.a.a
r.f.F(0,s)
B.b.F(r.d.b,s)},
$S:44}
A.oY.prototype={
ky(a){var s=this,r=s.b
if(r>=128)return
s.b=r+1
s.a.fp(A.l5(a)).b6(new A.Ap(s),new A.Aq(s),t.H)},
$1(a){return this.oJ(a)},
oJ(a){var s=0,r=A.h(t.X),q,p=this,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.fp(A.l5(a)),$async$$1)
case 3:o=c
q=o==null?null:A.l1(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$ioH:1,
$iGB:1}
A.Ap.prototype={
$1(a){--this.a.b},
$S:57}
A.Aq.prototype={
$1(a){--this.a.b},
$S:28}
A.Db.prototype={
$1(a){return B.b.bq(a.c,new A.Da())},
$S:168}
A.Da.prototype={
$1(a){return a.e},
$S:58}
A.zj.prototype={
xn(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.aL('Invalid "'+a+'" argument: expected '+A.bU(b).m(0)+", got "+J.c9(s).m(0)+"."))
return b.a(s)}}
A.zk.prototype={
cA(a,b){return this.wO(a,b)},
wO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$cA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.b
k=l.length===0?null:B.b.gH(l)
if(k==null)throw A.b(A.G('No connected page can serve the "'+a+'" callback.',null))
l=p.c++
o=new A.w($.D,t.ny)
n=new A.aG(o,t.bF)
m=A.c4(p.a,new A.zl(p,n,a))
k.$1(A.m(["kind","callback_rpc","rpcId",l,"channel",a,"args",b],t.N,t.X)).b6(new A.zm(p,m,n,a),new A.zn(m,n,a),t.H)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cA,r)},
rZ(a,b){var s
if(!t.f.b(a))throw A.b(A.aL('The "'+b+'" callback reply must be a map.'))
s=A.br(a)
if(!J.x(s.h(0,"kind"),"callback_rpc_result"))throw A.b(A.aL('The "'+b+'" callback reply has kind "'+A.r(s.h(0,"kind"))+'".'))
if(J.x(s.h(0,"ok"),!0))return s.h(0,"value")
throw A.b(A.G('The "'+b+'" callback failed on the page: '+A.r(s.h(0,"error")),null))}}
A.zl.prototype={
$0(){var s=this.b
if((s.a.a&30)===0)s.aY(new A.e9(null,'The "'+this.c+'" callback did not answer within '+B.c.M(this.a.a.a,1000)+" ms."))},
$S:0}
A.zm.prototype={
$1(a){var s,r,q,p,o=this
o.b.A()
q=o.c
if((q.a.a&30)!==0)return
try{q.aB(o.a.rZ(a,o.d))}catch(p){s=A.A(p)
r=A.af(p)
q.bA(s,r)}},
$S:57}
A.zn.prototype={
$2(a,b){var s
this.a.A()
s=this.b
if((s.a.a&30)===0)s.bA(new A.e9(null,'The "'+this.c+'" callback failed: '+A.r(a)),b)},
$S:6}
A.hM.prototype={}
A.k8.prototype={}
A.f6.prototype={}
A.oG.prototype={
hA(a,b){return this.rb(a,b)},
rb(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hA=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.aL('Contract envelope requires a "request" map.'))
j=A.br(b)
i=j.h(0,"tag")
if(typeof i!="string")A.u(A.R("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.u(A.R("Missing request payload."))
g=A.l2(h)
j=t.G
if(!j.b(g))A.u(A.R("Malformed request payload."))
f=A.JZ(i,g)
if(f==null)A.u(A.R("Unknown request tag: "+i))
m=f
p=4
e=n.c.r
e===$&&A.v()
s=7
return A.a(e.wk(m),$async$hA)
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
k=A.A(a)
j=A.m(["error",A.OQ(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hA,r)}}
A.oF.prototype={
iu(a,b){return this.wE(a,b)},
wE(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$iu=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:n.f.u(0,a)
i=n.d.b
if(!B.b.E(i,a))i.push(a)
if(n.r==null){i=n.c.r
i===$&&A.v()
i=i.b
n.r=new A.b0(i,A.n(i).i("b0<1>")).b2(new A.zy(n))}m=null
try{m=A.LA(b)}catch(e){l=A.A(e)
i=J.Y(l)
q=new A.f6("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.f6("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jx(a,m),$async$iu)
case 7:k=d
i=m.b
q=new A.k8(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
j=A.A(f)
i=m.b
g=J.Y(j)
q=new A.f6("localpocket",g,A.m(["type",A.CM(j)],t.N,t.X),i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iu,r)},
r8(a,b){var s=this.e
if(s==null)throw A.b(A.aL("The open did not configure a proxy sync backend."))
return s.iP(A.br(b.d))},
jx(a,b){return this.qB(a,b)},
qB(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.w
if(l===$){o=A.m(["open",p.grh(),"contract_request",p.gra(),"backend_call",p.gr7()],t.N,t.n1)
p.w!==$&&A.DA()
p.w=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.aL("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jx,r)}}
A.zy.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gY(),"payload",A.fp(a.p())],r,q)],r,q)
for(r=this.a.f,r=A.eh(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).ky(p)}},
$S:171}
A.oE.prototype={
hB(a,b){return this.ri(a,b)},
ri(b0,b1){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$hB=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a4=b1.d
a5=new A.zj(a4).xn("stores",t.kS)
a6=a4.h(0,"manifestFingerprints")
a7=t.N
a8=A.t(a7,a7)
a9=t.f
if(a9.b(a6))a6.a5(0,new A.zs(a8))
o=p.t0(a4)
s=a5!=null?3:4
break
case 3:a4=J.E(a5),n=p.c,m=n.fy,l=t.X,k=p.d,j=n.cx==null
case 5:if(!a4.k()){s=6
break}i=a4.gn()
if(!a9.b(i))A.u(A.ac("Schema must be a map: "+A.r(i),null,null))
h=A.qM(A.br(i),l)
g=A.I6(h,o.h(0,h.a),k)
if(B.b.bq(g.c,new A.zt())&&j)throw A.b(A.G('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.Ef(g)
e=g.a
d=a8.h(0,e)
if(d!=null){c=new A.a7("")
A.cr(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.cb()
a0=A.d6(a)
a0.u(0,b)
a0.q()
a0=d!==A.at(a.a.a)
b=a0}else b=!1
if(b){a1=o.h(0,e)
throw A.b(A.aL(A.GD(e,a1!=null,A.LB(a1,h),A.Eq(g))))}s=!m.I(e)?7:9
break
case 7:e=n.f
e===$&&A.v()
s=10
return A.a(e.b0(g),$async$hB)
case 10:s=8
break
case 9:a2=m.h(0,e)
if(a2==null)A.u(A.B('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a7("")
A.cr(c,a2.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.cb()
a0=A.d6(a)
a0.u(0,b)
a0.q()
a0=A.at(a.a.a)
c=new A.a7("")
A.cr(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.cb()
a3=A.d6(a)
a3.u(0,b)
a3.q()
if(a0!==A.at(a.a.a))throw A.b(A.aL(A.GD(e,!0,A.Eq(g),A.Eq(a2.a))))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a7,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hB,r)},
t0(a){var s,r,q,p,o,n,m,l=a.h(0,"storePolicies")
if(l==null)return B.j
s=t.f
if(!s.b(l))throw A.b(A.aL('"storePolicies" must be a map.'))
r=A.t(t.N,t.X)
for(q=l.ga3(),q=q.gt(q);q.k();){p=q.gn()
o=p.a
n=J.cL(o)
m=n.m(o)
p=p.b
o=n.m(o)
if(!s.b(p))A.u(A.aL('The store policy for "'+o+'" must be a map.'))
r.j(0,m,A.br(p))}return r}}
A.zs.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:70}
A.zt.prototype={
$1(a){return a.e},
$S:58}
A.zx.prototype={
$1(a){return a.d!=null},
$S:31}
A.zp.prototype={
$1(a){var s,r=this.a,q=t.f
if(!q.b(r))return B.aD
s=r.h(0,a)
return q.b(s)?s:B.aD},
$S:172}
A.zo.prototype={
$1(a){var s,r=this.a
if(!t.f.b(r))return B.k
s=r.h(0,a)
if(!t.j.b(s))return B.k
r=A.O(s,t.X)
B.b.aj(r)
return r},
$S:173}
A.zq.prototype={
$0(){var s,r=J.Q(this.a.$1("conflictPolicy"),"fieldOverrides")
if(!t.f.b(r))return B.k
s=J.bB(r.gJ(),new A.zr(),t.N).bU(0)
B.b.aj(s)
return s},
$S:174}
A.zr.prototype={
$1(a){return J.Y(a)},
$S:33}
A.zu.prototype={
$1(a){return J.Y(a)},
$S:33}
A.zv.prototype={
$1(a){return J.Y(a)},
$S:33}
A.zw.prototype={
$1(a){return this.a[a.a]===a.b},
$S:263}
A.pO.prototype={}
A.rl.prototype={
ux(a){var s,r=null
A.HZ("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.be(a)>0&&!s.d5(a)
if(s)return a
s=A.Ib()
return this.nw(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
vk(a){var s,r,q=A.e_(a,this.a)
q.fX()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kZ(s)
q.e.pop()
q.fX()
return q.m(0)},
nw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.HZ("join",s)
return this.wS(new A.eb(s,t.U))},
wS(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.d3(s,new A.rm(),a.$ti.i("d3<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.d5(m)&&o){l=A.e_(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.B(k,0,q.eP(k,!0))
l.b=n
if(q.fM(n))l.e[0]=q.gdT()
n=l.m(0)}else if(q.be(m)>0){o=!q.d5(m)
n=m}else{if(!(m.length!==0&&q.kr(m[0])))if(p)n+=q.gdT()
n+=m}p=q.fM(m)}return n.charCodeAt(0)==0?n:n},
dh(a,b){var s=A.e_(b,this.a),r=s.d,q=A.a2(r).i("ap<1>")
r=A.O(new A.ap(r,new A.rn(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aG(r,0,q)
return s.d},
eI(a){var s
if(!this.rF(a))return a
s=A.e_(a,this.a)
s.kS()
return s.m(0)},
rF(a){var s,r,q,p,o,n,m,l=this.a,k=l.be(a)
if(k!==0){if(l===$.q6())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cC(n)){if(l===$.q6()&&n===47)return!0
if(q!=null&&l.cC(q))return!0
if(q===46)m=o==null||o===46||l.cC(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cC(q))return!0
if(q===46)l=o==null||l.cC(o)||o===46
else l=!1
if(l)return!0
return!1},
xZ(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.be(a)
if(l<=0)return o.eI(a)
s=A.Ib()
if(m.be(s)<=0&&m.be(a)>0)return o.eI(a)
if(m.be(a)<=0||m.d5(a))a=o.ux(a)
if(m.be(a)<=0&&m.be(s)>0)throw A.b(A.Ga(n+a+'" from "'+s+'".'))
r=A.e_(s,m)
r.kS()
q=A.e_(a,m)
q.kS()
l=r.d
if(l.length!==0&&l[0]===".")return q.m(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kW(l,p)
else l=!1
if(l)return q.m(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kW(l[0],p[0])}else l=!1
if(!l)break
B.b.iX(r.d,0)
B.b.iX(r.e,1)
B.b.iX(q.d,0)
B.b.iX(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Ga(n+a+'" from "'+s+'".'))
l=t.N
B.b.kL(q.d,0,A.a9(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kL(p,1,A.a9(r.d.length,m.gdT(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga0(m)==="."){B.b.kZ(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fX()
return q.m(0)},
nH(a){var s,r,q=this,p=A.HD(a)
if(p.gb9()==="file"&&q.a===$.lc())return p.m(0)
else if(p.gb9()!=="file"&&p.gb9()!==""&&q.a!==$.lc())return p.m(0)
s=q.eI(q.a.kV(A.HD(p)))
r=q.xZ(s)
return q.dh(0,r).length>q.dh(0,s).length?s:r}}
A.rm.prototype={
$1(a){return a!==""},
$S:13}
A.rn.prototype={
$1(a){return a.length!==0},
$S:13}
A.CH.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:176}
A.ui.prototype={
oV(a){var s=this.be(a)
if(s>0)return B.a.B(a,0,s)
return this.d5(a)?a[0]:null},
kW(a,b){return a===b}}
A.ng.prototype={
gkm(){var s=this,r=t.N,q=new A.ng(s.a,s.b,s.c,A.bQ(s.d,!0,r),A.bQ(s.e,!0,r))
q.fX()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga0(r)},
fX(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga0(s)===""))break
B.b.kZ(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kS(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kL(m,0,A.a9(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.a9(m.length+1,s.gdT(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fM(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.q6())n.b=A.C(r,"/","\\")
n.fX()},
m(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga0(q)
return o.charCodeAt(0)==0?o:o}}
A.nh.prototype={
m(a){return"PathException: "+this.a},
$iI:1}
A.yp.prototype={
m(a){return this.gb_()}}
A.x2.prototype={
kr(a){return B.a.E(a,"/")},
cC(a){return a===47},
fM(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eP(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
be(a){return this.eP(a,!1)},
d5(a){return!1},
kV(a){var s
if(a.gb9()===""||a.gb9()==="file"){s=a.gbE()
return A.EH(s,0,s.length,B.o,!1)}throw A.b(A.U("Uri "+a.m(0)+" must have scheme 'file:'.",null))},
gb_(){return"posix"},
gdT(){return"/"}}
A.yZ.prototype={
kr(a){return B.a.E(a,"/")},
cC(a){return a===47},
fM(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.cb(a,"://")&&this.be(a)===s},
eP(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cw(a,"/",B.a.af(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.T(a,"file://"))return q
p=A.Ii(a,q+1)
return p==null?q:p}}return 0},
be(a){return this.eP(a,!1)},
d5(a){return a.length!==0&&a.charCodeAt(0)===47},
kV(a){return a.m(0)},
gb_(){return"url"},
gdT(){return"/"}}
A.zi.prototype={
kr(a){return B.a.E(a,"/")},
cC(a){return a===47||a===92},
fM(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eP(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cw(a,"\\",2)
if(s>0){s=B.a.cw(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.In(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
be(a){return this.eP(a,!1)},
d5(a){return this.be(a)===1},
kV(a){var s,r
if(a.gb9()!==""&&a.gb9()!=="file")throw A.b(A.U("Uri "+a.m(0)+" must have scheme 'file:'.",null))
s=a.gbE()
if(a.gdF()===""){if(s.length>=3&&B.a.T(s,"/")&&A.Ii(s,1)!=null)s=B.a.l0(s,"/","")}else s="\\\\"+a.gdF()+s
r=A.C(s,"/","\\")
return A.EH(r,0,r.length,B.o,!1)},
uW(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kW(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.uW(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gb_(){return"windows"},
gdT(){return"\\"}}
A.y8.prototype={
gl(a){return this.c.length},
gwT(){return this.b.length},
pC(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.K(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eV(a){var s,r=this
if(a<0)throw A.b(A.b8("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b8("Offset "+a+u.D+r.gl(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga0(s))return s.length-1
if(r.ru(a)){s=r.d
s.toString
return s}return r.d=r.pY(a)-1},
ru(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pY(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
jc(a){var s,r,q=this
if(a<0)throw A.b(A.b8("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b8("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gl(0)+"."))
s=q.eV(a)
r=q.b[s]
if(r>a)throw A.b(A.b8("Line "+s+" comes after offset "+a+"."))
return a-r},
ha(a){var s,r,q,p
if(a<0)throw A.b(A.b8("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b8("Line "+a+" must be less than the number of lines in the file, "+this.gwT()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b8("Line "+a+" doesn't have 0 columns."))
return q}}
A.mq.prototype={
ga6(){return this.a.a},
gah(){return this.a.eV(this.b)},
gau(){return this.a.jc(this.b)},
gav(){return this.b}}
A.hW.prototype={
ga6(){return this.a.a},
gl(a){return this.c-this.b},
gR(){return A.DR(this.a,this.b)},
gO(){return A.DR(this.a,this.c)},
gaT(){return A.e6(B.y.V(this.a.c,this.b,this.c),0,null)},
gbr(){var s=this,r=s.a,q=s.c,p=r.eV(q)
if(r.jc(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.e6(B.y.V(r.c,r.ha(p),r.ha(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.ha(p+1)
return A.e6(B.y.V(r.c,r.ha(r.eV(s.b)),q),0,null)},
a2(a,b){var s
if(!(b instanceof A.hW))return this.pq(0,b)
s=B.c.a2(this.b,b.b)
return s===0?B.c.a2(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hW))return s.pp(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gK(a){return A.ch(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idp:1}
A.tP.prototype={
wK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mV(B.b.gH(a1).c)
s=a.e
r=A.a9(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.i_("\u2575")
q.a+="\n"
a.mV(l)}else if(m.b+1!==n.b){a.uw("...")
q.a+="\n"}}for(l=n.d,k=A.a2(l).i("bG<1>"),j=new A.bG(l,k),j=new A.ar(j,j.gl(0),k.i("ar<a1.E>")),k=k.i("a1.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gah()!==f.gO().gah()&&f.gR().gah()===i&&a.rw(B.a.B(h,0,f.gR().gau()))){e=B.b.cc(r,a0)
if(e<0)A.u(A.U(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.uv(i)
q.a+=" "
a.uu(n,r)
if(s)q.a+=" "
d=B.b.nq(l,new A.u9())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gah()===i?j.gR().gau():0
a.us(h,g,j.gO().gah()===i?j.gO().gau():h.length,p)}else a.i1(h)
q.a+="\n"
if(k)a.ut(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.i_("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mV(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.i_("\u2577")
else{q.i_("\u250c")
q.bv(new A.tX(q),"\x1b[34m")
s=q.r
r=" "+$.iu().nH(a)
s.a+=r}q.r.a+="\n"},
hY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gah()
i=k?null:l.a.gO().gah()
if(s&&l===c){h.bv(new A.u3(h,j,a),r)
n=!0}else if(n)h.bv(new A.u4(h,l),r)
else if(k)if(g.a)h.bv(new A.u5(h),g.b)
else o.a+=" "
else h.bv(new A.u6(g,h,c,j,a,l,i),p)}},
uu(a,b){return this.hY(a,b,null)},
us(a,b,c,d){var s=this
s.i1(B.a.B(a,0,b))
s.bv(new A.tY(s,a,b,c),d)
s.i1(B.a.B(a,c,a.length))},
ut(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gah()===p.gO().gah()){r.ki()
p=r.r
p.a+=" "
r.hY(a,c,b)
if(c.length!==0)p.a+=" "
r.mW(b,c,r.bv(new A.tZ(r,a,b),q))}else{s=a.b
if(p.gR().gah()===s){if(B.b.E(c,b))return
A.Pr(c,b)
r.ki()
p=r.r
p.a+=" "
r.hY(a,c,b)
r.bv(new A.u_(r,a,b),q)
p.a+="\n"}else if(p.gO().gah()===s){p=p.gO().gau()
if(p===a.a.length){A.Iz(c,b)
return}r.ki()
r.r.a+=" "
r.hY(a,c,b)
r.mW(b,c,r.bv(new A.u0(r,!1,a,b),q))
A.Iz(c,b)}}},
mU(a,b,c){var s=c?0:1,r=this.r
s=B.a.bu("\u2500",1+b+this.ju(B.a.B(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
ur(a,b){return this.mU(a,b,!0)},
mW(a,b,c){this.r.a+="\n"
return},
i1(a){var s,r,q,p
for(s=new A.cv(a),r=t.E,s=new A.ar(s,s.gl(0),r.i("ar<M.E>")),q=this.r,r=r.i("M.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bu(" ",4)
else{p=A.bF(p)
q.a+=p}}},
i0(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.m(b+1)
this.bv(new A.u7(s,this,a),"\x1b[34m")},
i_(a){return this.i0(a,null,null)},
uw(a){return this.i0(null,null,a)},
uv(a){return this.i0(null,a,null)},
ki(){return this.i0(null,null,null)},
ju(a){var s,r,q,p
for(s=new A.cv(a),r=t.E,s=new A.ar(s,s.gl(0),r.i("ar<M.E>")),r=r.i("M.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
rw(a){var s,r,q
for(s=new A.cv(a),r=t.E,s=new A.ar(s,s.gl(0),r.i("ar<M.E>")),r=r.i("M.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
qd(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bv(a,b){return this.qd(a,b,t.z)}}
A.u8.prototype={
$0(){return this.a},
$S:177}
A.tR.prototype={
$1(a){var s=a.d
return new A.ap(s,new A.tQ(),A.a2(s).i("ap<1>")).gl(0)},
$S:178}
A.tQ.prototype={
$1(a){var s=a.a
return s.gR().gah()!==s.gO().gah()},
$S:39}
A.tS.prototype={
$1(a){return a.c},
$S:180}
A.tU.prototype={
$1(a){var s=a.a.ga6()
return s==null?new A.k():s},
$S:181}
A.tV.prototype={
$2(a,b){return a.a.a2(0,b.a)},
$S:182}
A.tW.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.ax(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbr()
n=A.D4(o,p.gaT(),p.gR().gau())
n.toString
m=B.a.i2("\n",B.a.B(o,0,n)).gl(0)
l=p.gR().gah()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga0(b).b)b.push(new A.cJ(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.p)(b),++k){j=b[k]
h&1&&A.K(i,16)
B.b.tA(i,new A.tT(j),!0)
f=i.length
for(q=s.ba(c,g),p=q.$ti,q=new A.ar(q,q.gl(0),p.i("ar<a1.E>")),n=j.b,p=p.i("a1.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gah()>n)break
i.push(e)}g+=i.length-f
B.b.D(j.d,i)}return b},
$S:183}
A.tT.prototype={
$1(a){return a.a.gO().gah()<this.a.b},
$S:39}
A.u9.prototype={
$1(a){return!0},
$S:39}
A.tX.prototype={
$0(){this.a.r.a+=B.a.bu("\u2500",2)+">"
return null},
$S:0}
A.u3.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.u4.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.u5.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.u6.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bv(new A.u1(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gO().gau()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bv(new A.u2(r,o),p.b)}}},
$S:2}
A.u1.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.u2.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.tY.prototype={
$0(){var s=this
return s.a.i1(B.a.B(s.b,s.c,s.d))},
$S:0}
A.tZ.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gau(),l=n.gO().gau()
n=this.b.a
s=q.ju(B.a.B(n,0,m))
r=q.ju(B.a.B(n,m,l))
m+=s*3
n=(p.a+=B.a.bu(" ",m))+B.a.bu("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.u_.prototype={
$0(){return this.a.ur(this.b,this.c.a.gR().gau())},
$S:0}
A.u0.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bu("\u2500",3)
else r.mU(s.c,Math.max(s.d.a.gO().gau()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.u7.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.xp(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bA.prototype={
m(a){var s=this.a
s="primary "+(""+s.gR().gah()+":"+s.gR().gau()+"-"+s.gO().gah()+":"+s.gO().gau())
return s.charCodeAt(0)==0?s:s}}
A.B0.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.D4(o.gbr(),o.gaT(),o.gR().gau())!=null)){s=A.nM(o.gR().gav(),0,0,o.ga6())
r=o.gO().gav()
q=o.ga6()
p=A.OC(o.gaT(),10)
o=A.y9(s,A.nM(r,A.GT(o.gaT()),p,q),o.gaT(),o.gaT())}return A.M0(A.M2(A.M1(o)))},
$S:184}
A.cJ.prototype={
m(a){return""+this.b+': "'+this.a+'" ('+B.b.C(this.d,", ")+")"}}
A.cD.prototype={
kx(a){var s=this.a
if(!J.x(s,a.ga6()))throw A.b(A.U('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga6())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a2(a,b){var s=this.a
if(!J.x(s,b.ga6()))throw A.b(A.U('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga6())+"\" don't match.",null))
return this.b-b.gav()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga6())&&this.b===b.gav()},
gK(a){var s=this.a
s=s==null?null:s.gK(s)
if(s==null)s=0
return s+this.b},
m(a){var s=this,r=A.d9(s).m(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iay:1,
ga6(){return this.a},
gav(){return this.b},
gah(){return this.c},
gau(){return this.d}}
A.nN.prototype={
kx(a){if(!J.x(this.a.a,a.ga6()))throw A.b(A.U('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(a.ga6())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a2(a,b){if(!J.x(this.a.a,b.ga6()))throw A.b(A.U('Source URLs "'+A.r(this.ga6())+'" and "'+A.r(b.ga6())+"\" don't match.",null))
return this.b-b.gav()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga6())&&this.b===b.gav()},
gK(a){var s=this.a.a
s=s==null?null:s.gK(s)
if(s==null)s=0
return s+this.b},
m(a){var s=A.d9(this).m(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.eV(r)+1)+":"+(q.jc(r)+1))+">"},
$iay:1,
$icD:1}
A.nP.prototype={
pD(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga6(),q.ga6()))throw A.b(A.U('Source URLs "'+A.r(q.ga6())+'" and  "'+A.r(r.ga6())+"\" don't match.",null))
else if(r.gav()<q.gav())throw A.b(A.U("End "+r.m(0)+" must come after start "+q.m(0)+".",null))
else{s=this.c
if(s.length!==q.kx(r))throw A.b(A.U('Text "'+s+'" must be '+q.kx(r)+" characters long.",null))}},
gR(){return this.a},
gO(){return this.b},
gaT(){return this.c}}
A.nQ.prototype={
giI(){return this.a},
m(a){var s,r,q,p=this.b,o="line "+(p.gR().gah()+1)+", column "+(p.gR().gau()+1)
if(p.ga6()!=null){s=p.ga6()
r=$.iu()
s.toString
s=o+(" of "+r.nH(s))
o=s}o+=": "+this.a
q=p.wL(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iI:1}
A.hs.prototype={
gav(){var s=this.b
s=A.DR(s.a,s.b)
return s.b},
$ibv:1,
ghf(){return this.c}}
A.ht.prototype={
ga6(){return this.gR().ga6()},
gl(a){return this.gO().gav()-this.gR().gav()},
a2(a,b){var s=this.gR().a2(0,b.gR())
return s===0?this.gO().a2(0,b.gO()):s},
wL(a){var s=this
if(!t.ol.b(s)&&s.gl(s)===0)return""
return A.Kk(s,a).wK()},
P(a,b){if(b==null)return!1
return b instanceof A.ht&&this.gR().P(0,b.gR())&&this.gO().P(0,b.gO())},
gK(a){return A.ch(this.gR(),this.gO(),B.d,B.d,B.d,B.d,B.d)},
m(a){var s=this
return"<"+A.d9(s).m(0)+": from "+s.gR().m(0)+" to "+s.gO().m(0)+' "'+s.gaT()+'">'},
$iay:1}
A.dp.prototype={
gbr(){return this.d}}
A.jW.prototype={
a7(){return"SqliteUpdateKind."+this.b}}
A.cE.prototype={
gK(a){return A.ch(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.cE&&b.a===this.a&&b.b===this.b&&b.c===this.c},
m(a){return"SqliteUpdate: "+this.a.m(0)+" on "+this.b+", rowid = "+this.c}}
A.cj.prototype={
m(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.r(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.bB(p,new A.ye(),t.N).C(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iI:1}
A.ye.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.Y(a)},
$S:185}
A.lm.prototype={}
A.rM.prototype={
ud(){var s=this,r=s.d
return r==null?s.d=new A.el(s,A.l([],t.fU),new A.rV(s),new A.rW(s),t.jy):r},
tE(){var s=this,r=s.e
return r==null?s.e=new A.el(s,A.l([],t.lw),new A.rS(s),new A.rT(s),t.lU):r},
qf(){var s=this,r=s.f
return r==null?s.f=new A.el(s,A.l([],t.lw),new A.rO(s),new A.rP(s),t.ah):r},
v3(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.u(A.aD(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.bc(m))
r=n.a
q=r.ep(s,1)
s=r.d
p=A.EX(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.dm(new A.rX(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.Dz(this,p,o,o,o)},
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
r=s.ll()
q=r!==0?A.F0(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aJ(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.u(A.B("This database has already been closed"))
r=p.b
q=r.a
s=q.ep(B.e.v(a),1)
q=q.d
r=A.EX(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.Dz(p,r,"executing",a,b)}else{s=p.iQ(a,!0)
try{s.ew(new A.bY(b))}finally{s.q()}}},
N(a){return this.aJ(a,B.k)},
t5(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.u(A.B("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cY(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.zb(r,p,n,o)
l=A.l([],t.lE)
k=new A.rQ(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.ln(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.Dz(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null)l.push(new A.hu(f,e,new A.dA(!1).dl(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.ln(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null){l.push(new A.hu(f,e,""))
k.$0()
throw A.b(A.aD(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aD(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
iQ(a,b){var s=this.t5(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aD(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
xx(a){return this.iQ(a,!1)},
oY(a,b){var s,r=this.iQ(a,!0)
try{s=r.lg(new A.bY(b))
return s}finally{r.q()}},
oX(a){return this.oY(a,B.k)}}
A.rV.prototype={
$0(){var s=this.a,r=s.b
r.a.nc(r.b,new A.rU(s))},
$S:0}
A.rU.prototype={
$3(a,b,c){var s=A.Ln(a)
if(s==null)return
this.a.d.kv(new A.cE(s,b,c))},
$S:186}
A.rW.prototype={
$0(){var s=this.a.b
s.a.nc(s.b,null)
return null},
$S:0}
A.rS.prototype={
$0(){var s=this.a,r=s.b
r.a.nb(r.b,new A.rR(s))
return null},
$S:0}
A.rR.prototype={
$0(){this.a.e.kv(null)},
$S:0}
A.rT.prototype={
$0(){var s=this.a.b
s.a.nb(s.b,null)
return null},
$S:0}
A.rO.prototype={
$0(){var s=this.a,r=s.b
r.a.na(r.b,new A.rN(s))
return null},
$S:0}
A.rN.prototype={
$0(){var s=this.a.f
s.kv(null)
return 0},
$S:10}
A.rP.prototype={
$0(){var s=this.a.b
s.a.na(s.b,null)
return null},
$S:0}
A.rX.prototype={
$2(a,b){A.N6(a,this.a,b)},
$S:187}
A.rQ.prototype={
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
A.ow.prototype={
gl(a){return this.a.b},
sl(a,b){throw A.b(A.a3("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.L6(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.L8(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.U("The argument list is unmodifiable",null))},
$iyb:1}
A.el.prototype={
gcL(){var s=this.r
return s==null?this.r=this.r5(!1):s},
r5(a){return new A.dz(new A.BG(this,!1),this.$ti.i("dz<1>"))},
kv(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.u(o.c_())
if((n&1)!==0)o.gaX().aD(a)}else{n=o.b
if(n>=4)A.u(o.c_())
if((n&1)!==0)o.cT(a)
else if((n&3)===0){n=o.hr()
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
A.BG.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.BH(q,a,s)
a.r=a.e=new A.BI(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dX<1>)")}}
A.BH.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.kB(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.BI.prototype={
$0(){var s=this.a,r=s.c
B.b.F(r,new A.kB(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.ya.prototype={
nr(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Lm(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
xg(a,b){var s,r,q,p,o,n,m,l,k,j
this.nr()
switch(2){case 2:break}s=this.a
r=s.a
q=r.ep(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.ep(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.di(r.b.buffer,0,null)[B.c.ag(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.k()
k=new A.z4(r,l,o)
r=r.r
if(r!=null)r.n3(k,l,o)
if(m!==0){j=A.F0(s,k,m,"opening the database",null,null)
k.ll()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.rM(s,k,!1)}}
A.hu.prototype={
gqe(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.oI(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dA(!1).dl(o,0,null,!0))}return q},
gu4(){return null},
bT(a,b){A.Dz(this.b,a,b,this.d,this.e)},
lY(){if(this.r||this.b.r)throw A.b(A.B(u.f))},
ht(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dM()
if(s!==0?s!==101:q)r.bT(s,"executing statement")},
tN(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.tr(o))
l.push(p)}m.dM()
if(p!==0?p!==101:k)m.bT(p,"selecting from statement")
n=m.gqe()
m.gu4()
k=new A.nz(l,n,B.L)
k.q7()
return k},
tr(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ai(r.Number(s)):A.GP(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.pf(a)
case 4:return s.lm(a)
case 5:default:return null}},
q0(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.u(A.aD(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.q1(a[s-1],s)
this.e=a},
q1(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.a6(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aQ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.Fv(a).m(0)))
break A}if(A.aV(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.pe(b,a)
break A}if(t.L.b(a)){s=q.a.pd(b,a)
break A}s=q.q_(a,b)
break A}if(s!==0)q.bT(s,"binding parameter")},
q_(a,b){throw A.b(A.aD(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eZ(a){A:{if(a instanceof A.bY){this.q0(a.a)
break A}if(a instanceof A.lX)a.a.$1(this)}},
dM(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dM()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.nf(s.d)}},
lg(a){var s=this
s.lY()
s.dM()
s.eZ(a)
return s.tN()},
ew(a){var s=this
s.lY()
s.dM()
s.eZ(a)
s.ht()}}
A.mE.prototype={
j7(a,b){return this.d.I(a)?1:0},
l8(a,b){this.d.F(0,a)},
l9(a){return new v.G.URL(a,"file:///").pathname},
dQ(a,b){var s,r=a.a
if(r==null)r=A.FR(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cI(new Uint8Array(0),0))
else throw A.b(A.hG(14))
return new A.i1(new A.pa(this,r,(b&8)!==0),0)},
lb(a){}}
A.pa.prototype={
nM(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bV(B.f.gad(r.a),0,r.b),b)
return s},
l7(){return this.d>=2?1:0},
j8(){if(this.c)this.a.d.F(0,this.b)},
h6(){return this.a.d.h(0,this.b).b},
la(a){this.d=a},
lc(a){},
h7(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cI(new Uint8Array(0),0))
s.h(0,r).sl(0,a)}else q.sl(0,a)},
ld(a){this.d=a},
eU(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cI(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sl(0,s)
p.aA(0,b,s,a)}}
A.Dk.prototype={
$1(a){return a.length!==0},
$S:13}
A.rr.prototype={
q7(){var s,r,q,p,o=A.t(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o.j(0,p,B.b.d6(s,p))}this.c=o}}
A.nz.prototype={
gt(a){return new A.Bp(this)},
h(a,b){return new A.ci(this,A.fY(this.d[b],t.X))},
j(a,b,c){throw A.b(A.a3("Can't change rows from a result set"))},
gl(a){return this.d.length},
$iL:1,
$io:1,
$iq:1}
A.ci.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.a6(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gJ(){return this.a.a},
gaU(){return this.b},
$iF:1}
A.Bp.prototype={
gn(){var s=this.a
return new A.ci(s,A.fY(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.pr.prototype={}
A.ps.prototype={}
A.pu.prototype={}
A.pv.prototype={}
A.wm.prototype={
a7(){return"OpenMode."+this.b}}
A.eC.prototype={}
A.bY.prototype={}
A.lX.prototype={}
A.dw.prototype={
m(a){return"VfsException("+this.a+")"},
$iI:1}
A.jV.prototype={}
A.bh.prototype={}
A.lC.prototype={}
A.lB.prototype={
gj9(){return 0},
o3(a,b){return 12},
gjb(){return 4096},
ja(a,b){var s=this.nM(a,b),r=a.length
if(s<r){B.f.kD(a,s,r,0)
throw A.b(B.eo)}},
$iby:1,
$ik5:1}
A.f7.prototype={}
A.Dv.prototype={
$0(){var s,r,q
for(s=this.a;!s.gG(0);){if(s.b===0)A.u(A.B("No such element"))
r=s.c
q=r.a
q.toString
q.ke(A.n(r).i("bf.E").a(r))
r.d.$0()}},
$S:0}
A.Dt.prototype={
$1(a){var s=this.a,r=s.b
s.hC(s.c,new A.f7(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:19}
A.Du.prototype={
$4(a,b,c,d){this.a.$1(c.fn(d))},
$S:189}
A.z9.prototype={}
A.z4.prototype={
ll(){var s=this.a,r=s.r
if(r!=null)r.nf(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.zb.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
ln(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.EX(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.di(o.b.buffer,0,null)[B.c.ag(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.za(s,o,n)
o=o.w
if(o!=null)o.n3(r,s,n)}return new A.pp(r,p)}}
A.za.prototype={
pd(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cY(b),J.ag(b))},
pe(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cY(s),s.length)},
lm(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.GE(s.b,q.sqlite3_column_blob(r,a),p)},
pf(a){var s=this.c
return A.ec(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.ea.prototype={$iEc:1}
A.dx.prototype={$iEd:1}
A.hI.prototype={
sl(a,b){throw A.b(A.a3("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dx(s,A.di(s.b.buffer,0,null)[B.c.ag(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.a3("Setting element in WasmValueList"))},
gl(a){return this.b}}
A.m0.prototype={
x5(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.ec(q,a,null)
r=$.NC
if(r==null)A.Iv(s)
else r.$1(s)},
x3(a,b){var s,r=new A.aI(A.m4(A.ai(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.G7(q.buffer,b,8)
s.$flags&2&&A.K(s)
s[0]=A.Ea(r)
s[1]=A.E8(r)
s[2]=A.E7(r)
s[3]=A.x6(r)
s[4]=A.E9(r)-1
s[5]=A.Eb(r)-1900
s[6]=B.c.ao(A.KY(r),7)},
z7(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.jV(A.Er(j,b,k))
try{r=a.dQ(s,d)
if(e!==0){p=r.b
o=A.di(j.buffer,0,k)
n=B.c.ag(e,2)
o.$flags&2&&A.K(o)
o[n]=p}p=A.di(j.buffer,0,k)
o=B.c.ag(c,2)
p.$flags&2&&A.K(p)
p[o]=0
m=r.a
return m}catch(l){p=A.A(l)
if(p instanceof A.dw){q=p
p=q.a
j=A.di(j.buffer,0,k)
o=B.c.ag(c,2)
j.$flags&2&&A.K(j)
j[o]=p}else{j=j.buffer
j=A.di(j,0,k)
p=B.c.ag(c,2)
j.$flags&2&&A.K(j)
j[p]=1}}return k},
yX(a,b,c){var s=this.b
s===$&&A.v()
return A.c8(new A.rx(a,A.ec(s,b,null),c))},
yP(a,b,c,d){var s=this.b
s===$&&A.v()
return A.c8(new A.ru(this,a,A.ec(s,b,null),c,d))},
z3(a,b,c,d){var s=this.b
s===$&&A.v()
return A.c8(new A.rz(this,a,A.ec(s,b,null),c,d))},
z9(a,b,c){return A.c8(new A.rB(this,c,b,a))},
ze(a,b){return A.c8(new A.rD(a,b))},
yV(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.DZ(A.G6(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
yT(a){return A.c8(new A.rw(a))},
zb(a,b,c,d){return A.c8(new A.rC(this,a,b,c,d))},
zm(a,b,c,d){return A.c8(new A.rH(this,a,b,c,d))},
zi(a,b){return A.c8(new A.rF(a,b))},
zg(a,b){return A.c8(new A.rE(a,b))},
z1(a,b){return A.c8(new A.ry(this,a,b))},
z5(a,b){return A.c8(new A.rA(a,b))},
zk(a,b){return A.c8(new A.rG(a,b))},
yR(a,b){return A.c8(new A.rv(this,a,b))},
yY(a){return a.gj9()},
z_(a,b,c){if(t.j2.b(a))return a.o3(b,c)
return 12},
zc(a){if(t.j2.b(a))return a.gjb()
return 4096},
vx(a){a.$0()},
vs(a){return a.$0()},
vv(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.ec(s,d,null),A.ai(v.G.Number(e)))},
vD(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.ea(s,b),new A.hI(s,c,d))},
vH(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.ea(s,b),new A.hI(s,c,d))},
vF(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.v()
null.$2(new A.ea(s,b),new A.hI(s,c,d))},
vJ(a,b){var s
null.toString
s=this.a
s===$&&A.v()
null.$1(new A.ea(s,b))},
vB(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.v()
r.$1(new A.ea(s,b))},
vz(a,b,c,d,e){var s=this.b
s===$&&A.v()
return null.$2(A.Er(s,c,b),A.Er(s,e,d))},
vq(a,b){return a.$1(b)},
vo(a,b){return a.gzq().$1(b)},
vm(a,b,c){return a.gzp().$2(b,c)}}
A.rx.prototype={
$0(){return this.a.l8(this.b,this.c)},
$S:0}
A.ru.prototype={
$0(){var s,r=this,q=r.b.j7(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.di(p.buffer,0,null)
s=B.c.ag(r.e,2)
p.$flags&2&&A.K(p)
p[s]=q},
$S:0}
A.rz.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.l9(q.c)),o=p.length
if(o>q.d)throw A.b(A.hG(14))
s=q.a.b
s===$&&A.v()
s=A.c2(s.buffer,0,null)
r=q.e
B.f.dg(s,r,p)
s.$flags&2&&A.K(s)
s[r+o]=0},
$S:0}
A.rB.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.c2(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.Ft(s,q.b)
else return A.Ft(s,null)},
$S:0}
A.rD.prototype={
$0(){this.a.lb(A.bX(this.b,0,0))},
$S:0}
A.rw.prototype={
$0(){return this.a.j8()},
$S:0}
A.rC.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.ja(A.c2(r.buffer,s.c,s.d),A.ai(v.G.Number(s.e)))},
$S:0}
A.rH.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.eU(A.c2(r.buffer,s.c,s.d),A.ai(v.G.Number(s.e)))},
$S:0}
A.rF.prototype={
$0(){return this.a.h7(A.ai(v.G.Number(this.b)))},
$S:0}
A.rE.prototype={
$0(){return this.a.lc(this.b)},
$S:0}
A.ry.prototype={
$0(){var s,r=this.b.h6(),q=this.a.b
q===$&&A.v()
q=A.di(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.K(q)
q[s]=r},
$S:0}
A.rA.prototype={
$0(){return this.a.la(this.b)},
$S:0}
A.rG.prototype={
$0(){return this.a.ld(this.b)},
$S:0}
A.rv.prototype={
$0(){var s,r=this.b.l7(),q=this.a.b
q===$&&A.v()
q=A.di(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.K(q)
q[s]=r},
$S:0}
A.dm.prototype={}
A.iy.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bo(A.DZ(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.nU(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.qk(q,this,p,o)
o.d=s
o.f=new A.ql(q,o,s)
return new A.bi(o,A.n(o).i("bi<1>")).aa(a,b,c,d)},
bC(a,b,c){return this.aa(a,null,b,c)}}
A.qk.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a4(q,t.m).b6(new A.qm(p,r.b,s,r),s.guB(),t.P)},
$S:0}
A.qm.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaX().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:22}
A.ql.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaX().e&4)!==0:(r&2)===0)}else s=!1
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
return s==null?A.u(A.B("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.w($.D,t.g5)
s=new A.as(o,t.ex)
r=p.d
q=t.m
p.b=A.bz(r,"success",new A.At(p,s),!1,q)
p.c=A.bz(r,"error",new A.Au(p,s),!1,q)
return o}}
A.At.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.Au.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.aY(s)},
$S:1}
A.r5.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r6.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aY(s)},
$S:1}
A.ra.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.rb.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aY(s)},
$S:1}
A.rc.prototype={
$1(a){this.a.aY(new A.bw("IndexedDB open blocked"))},
$S:1}
A.tv.prototype={
$1(a){return A.bo(a[1])},
$S:211}
A.z5.prototype={
v4(){var s={}
s.dart=new A.z6(this).$0()
return s},
iG(a){return this.wY(a)},
wY(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(v.G.WebAssembly.instantiateStreaming(a,p.v4()),t.m),$async$iG)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iG,r)}}
A.z6.prototype={
$0(){var s=this.a.a,r=A.bo(v.G.Object),q=A.bo(r.create.apply(r,[null]))
q.error_log=A.d8(s.gx4())
q.localtime=A.c6(s.gx0())
q.xOpen=A.EL(s.gz6())
q.xDelete=A.pV(s.gyW())
q.xAccess=A.ie(s.gyO())
q.xFullPathname=A.ie(s.gz2())
q.xRandomness=A.pV(s.gz8())
q.xSleep=A.c6(s.gzd())
q.xCurrentTimeInt64=A.c6(s.gyU())
q.xClose=A.d8(s.gyS())
q.xRead=A.ie(s.gza())
q.xWrite=A.ie(s.gzl())
q.xTruncate=A.c6(s.gzh())
q.xSync=A.c6(s.gzf())
q.xFileSize=A.c6(s.gz0())
q.xLock=A.c6(s.gz4())
q.xUnlock=A.c6(s.gzj())
q.xCheckReservedLock=A.c6(s.gyQ())
q.xDeviceCharacteristics=A.d8(s.gj9())
q.xFileControl=A.pV(s.gyZ())
q.xSectorSize=A.d8(s.gjb())
q["dispatch_()v"]=A.d8(s.gvw())
q["dispatch_()i"]=A.d8(s.gvr())
q.dispatch_update=A.EL(s.gvu())
q.dispatch_xFunc=A.ie(s.gvC())
q.dispatch_xStep=A.ie(s.gvG())
q.dispatch_xInverse=A.ie(s.gvE())
q.dispatch_xValue=A.c6(s.gvI())
q.dispatch_xFinal=A.c6(s.gvA())
q.dispatch_compare=A.EL(s.gvy())
q.dispatch_busy=A.c6(s.gvp())
q.changeset_apply_filter=A.c6(s.gvn())
q.changeset_apply_conflict=A.pV(s.gvl())
return q},
$S:37}
A.hH.prototype={}
A.qn.prototype={
iM(){var s=0,r=A.h(t.H),q=this,p,o
var $async$iM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.D,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.d8(new A.qq(o))
new A.as(p,t.h1).aB(A.JW(o,t.m))
s=2
return A.a(p,$async$iM)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$iM,r)},
ek(a,b){return this.tG(a,b)},
tG(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$ek=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Jm(),b)
o=A.M3(p)
s=2
return A.a(A.Ps(new A.qp(a,o,p),t.mj),$async$ek)
case 2:s=3
return A.a(o.b.a,$async$ek)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$ek,r)},
t3(a){return this.ek(new A.qo(a),"readwrite")}}
A.qq.prototype={
$1(a){var s=A.bo(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:22}
A.qp.prototype={
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
A.qo.prototype={
$1(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.H),q=this,p,o,n
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
$S:26}
A.kr.prototype={
pH(a){var s=A.Cu(new A.B3(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.Cu(new A.B4(this))},
jZ(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
tn(a){return this.jZ(a,9007199254740992,0)},
tp(a,b){return this.jZ(a,9007199254740992,b)},
iE(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$iE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.t(t.N,t.S)
k=new A.fb(p.d.index("fileName").openKeyCursor(),t.nz)
case 3:s=5
return A.a(k.k(),$async$iE)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.u(A.B("Await moveNext() first"))
n=o.key
n.toString
A.H(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ai(A.fk(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iE,r)},
ik(a){return this.wb(a)},
wb(a){var s=0,r=A.h(t.u),q,p=this,o
var $async$ik=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cO(p.d.index("fileName").getKey(a),t.W),$async$ik)
case 3:q=o.ai(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
k_(a){return A.cO(this.d.get(a),t.mU).U(new A.B2(a),t.m)},
eW(a,b){return this.pg(a,b)},
pg(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.k_(a),$async$eW)
case 3:h=d
g=h.length
f=new A.cI(new Uint8Array(g),g)
e=new A.fb(p.e.openCursor(p.tn(a)),t.nz)
g=t.i,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eW)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.u(A.B("Await moveNext() first"))
k=n.a(l.key)
j=A.ai(A.fk(k[1]))
if(j>=h.length){s=5
break}i=new A.B5(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.xR(A.bo(l.value)).U(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eW,r)},
ic(a){return this.v1(a)},
v1(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$ic=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.u(A.B("IDB transaction already completed"))
o=A
s=3
return A.a(A.cO(p.d.put({name:a,length:0}),t.W),$async$ic)
case 3:q=o.ai(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ic,r)},
az(a,b){return this.yH(a,b)},
yH(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$az=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.B("IDB transaction already completed"))
s=2
return A.a(q.k_(a),$async$az)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.O(new A.T(o,n),n.i("o.E"))
B.b.aj(m)
s=3
return A.a(A.DT(new A.Z(m,new A.B6(new A.B7(q,a),b),A.a2(m).i("Z<1,y<~>>")),t.H),$async$az)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.fb(q.d.openCursor(a),t.nz)
s=6
return A.a(l.k(),$async$az)
case 6:s=7
return A.a(A.cO(l.gn().update({name:p.name,length:b.c}),t.X),$async$az)
case 7:case 5:return A.e(null,r)}})
return A.f($async$az,r)},
dO(a,b,c){return this.yi(0,b,c)},
yi(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.B("IDB transaction already completed"))
s=2
return A.a(q.k_(b),$async$dO)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cO(q.e.delete(q.tp(b,B.c.M(c,4096)*4096)),t.X),$async$dO)
case 5:case 4:o=new A.fb(q.d.openCursor(b),t.nz)
s=6
return A.a(o.k(),$async$dO)
case 6:s=7
return A.a(A.cO(o.gn().update({name:p.name,length:c}),t.X),$async$dO)
case 7:return A.e(null,r)}})
return A.f($async$dO,r)},
ig(a){return this.vj(a)},
vj(a){var s=0,r=A.h(t.H),q=this,p
var $async$ig=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.B("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.DT(A.l([A.cO(q.e.delete(q.jZ(a,9007199254740992,0)),p),A.cO(q.d.delete(a),p)],t.iw),t.H),$async$ig)
case 2:return A.e(null,r)}})
return A.f($async$ig,r)}}
A.B3.prototype={
$0(){this.a.b.al()},
$S:2}
A.B4.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aY(r)},
$S:2}
A.B2.prototype={
$1(a){if(a==null)throw A.b(A.aD(this.a,"fileId","File not found in database"))
else return a},
$S:214}
A.B5.prototype={
$1(a){var s=this.a
s.dg(s,this.b,J.bV(a,0,this.c))},
$S:215}
A.B7.prototype={
oL(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cO(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.mU),$async$$2)
case 2:m=d
l=t.i.a(B.f.gad(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cO(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cO(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.oL(a,b)},
$S:216}
A.B6.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:217}
A.AF.prototype={
uc(a,b,c){B.f.dg(this.b.nK(a,new A.AG(this,a)),b,c)},
uF(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.ao(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.uc(p*4096,o,J.bV(B.f.gad(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.AG.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.dg(s,0,J.bV(B.f.gad(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:218}
A.pj.prototype={}
A.dP.prototype={
fj(a){var s=this
if(s.e||s.d.a==null)A.u(A.hG(10))
if(a.kM(s.x)){s.cV(!0)
return a.d.a}else return A.be(null,t.H)},
cV(a){return this.u1(a)},
u1(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gG(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.ak(0)
s=5
return A.a(p.d.t3(n).b8(new A.uc(p,n,a)),$async$cV)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cV,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.fj(new A.kp(new A.ud(),new A.as(new A.w($.D,t.D),t.F)))
p.e=!0
p.cV(!1)
q=o
s=1
break}else{n=p.x
if(!n.gG(0)){q=n.ga0(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
e5(a,b){return this.r1(a,b)},
r1(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$e5=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.ik(b),$async$e5)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
fc(){var s=0,r=A.h(t.H),q=this,p
var $async$fc=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.ek(new A.ub(q,p),"readonly"),$async$fc)
case 2:s=3
return A.a(A.Kh(p,t.H),$async$fc)
case 3:return A.e(null,r)}})
return A.f($async$fc,r)},
d3(){return this.cV(!1)},
j7(a,b){return this.w.d.I(a)?1:0},
l8(a,b){var s=this
s.w.d.F(0,a)
if(!s.y.F(0,a))s.fj(new A.kj(s,a,new A.as(new A.w($.D,t.D),t.F)))},
l9(a){return new v.G.URL(a,"file:///").pathname},
dQ(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.FR(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dQ(new A.jV(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.fj(new A.hS(p,o,new A.as(new A.w($.D,t.D),t.F)))
return new A.i1(new A.pb(p,q.a,o),0)},
lb(a){}}
A.uc.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.u(A.B("Future already completed"))
p.cN(null)}o.cV(this.c)},
$S:2}
A.ud.prototype={
$1(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:26}
A.ub.prototype={
$1(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.iE(),$async$$1)
case 2:m=c
l=q.a
l.z.D(0,m)
p=m.ga3(),p=p.gt(p),o=q.b,l=l.w.d
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
$S:26}
A.pb.prototype={
ja(a,b){this.b.ja(a,b)},
gj9(){return 0},
gjb(){return 4096},
l7(){return this.b.d>=2?1:0},
j8(){},
h6(){return this.b.h6()},
la(a){this.b.d=a
return null},
lc(a){},
o3(a,b){return 12},
h7(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.u(A.hG(10))
s.b.h7(a)
if(!r.y.E(0,s.c))r.fj(new A.kp(new A.B1(s,a),new A.as(new A.w($.D,t.D),t.F)))},
ld(a){this.b.d=a
return null},
eU(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.u(A.hG(10))
s=m.c
if(l.y.E(0,s)){m.b.eU(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cI(new Uint8Array(0),0)
q=J.bV(B.f.gad(r.a),0,r.b)
m.b.eU(a,b)
p=new Uint8Array(a.length)
B.f.dg(p,0,a)
o=A.l([],t.p8)
n=$.D
o.push(new A.pj(b,p))
l.fj(new A.ia(l,s,q,o,new A.as(new A.w(n,t.D),t.F)))},
$iby:1,
$ik5:1}
A.B1.prototype={
$1(a){return this.oK(a)},
oK(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.e5(a,o.c),$async$$1)
case 3:q=n.dO(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:26}
A.bj.prototype={
kM(a){a.hC(a.c,this,!1)
return!0}}
A.kp.prototype={
b4(a){return this.w.$1(a)}}
A.kj.prototype={
kM(a){var s,r,q,p
if(!a.gG(0)){s=a.ga0(0)
for(r=this.x;s!=null;)if(s instanceof A.kj)if(s.x===r)return!1
else s=s.gfQ()
else if(s instanceof A.ia){q=s.gfQ()
if(s.x===r){p=s.a
p.toString
p.ke(A.n(s).i("bf.E").a(s))}s=q}else if(s instanceof A.hS){if(s.x===r){r=s.a
r.toString
r.ke(A.n(s).i("bf.E").a(s))
return!1}s=s.gfQ()}else break}a.hC(a.c,this,!1)
return!0},
b4(a){return this.ya(a)},
ya(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.e5(a,o),$async$b4)
case 2:n=c
p.z.F(0,o)
s=3
return A.a(a.ig(n),$async$b4)
case 3:return A.e(null,r)}})
return A.f($async$b4,r)}}
A.hS.prototype={
b4(a){return this.y9(a)},
y9(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.ic(p),$async$b4)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$b4,r)}}
A.ia.prototype={
kM(a){var s,r=a.b===0?null:a.ga0(0)
for(s=this.x;r!=null;)if(r instanceof A.ia)if(r.x===s){B.b.D(r.z,this.z)
return!1}else r=r.gfQ()
else if(r instanceof A.hS){if(r.x===s)break
r=r.gfQ()}else break
a.hC(a.c,this,!1)
return!0},
b4(a){return this.yb(a)},
yb(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$b4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.AF(m,A.t(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.p)(m),++o){n=m[o]
l.uF(n.a,n.b)}k=a
s=3
return A.a(q.w.e5(a,q.x),$async$b4)
case 3:s=2
return A.a(k.az(c,l),$async$b4)
case 2:return A.e(null,r)}})
return A.f($async$b4,r)}}
A.fU.prototype={
a7(){return"FileType."+this.b}}
A.hr.prototype={
c6(){var s=this.d
if(s!=null)return s
throw A.b(A.B("VFS closed"))},
j7(a,b){var s=$.DC().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.c6().aZ(s)?1:0},
l8(a,b){var s=$.DC().h(0,a)
if(s==null){this.e.d.F(0,a)
return null}else this.c6().fJ(s,!1)},
l9(a){return new v.G.URL(a,"file:///").pathname},
dQ(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dQ(a,b)
s=$.DC().h(0,p)
if(s==null)return q.e.dQ(a,b)
r=q.c6()
if(!r.aZ(s))if((b&4)!==0){r.dE(s).truncate(0)
r.fJ(s,!0)}else throw A.b(B.en)
return new A.i1(new A.pA(q,s,(b&8)!==0),0)},
lb(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
d9(a,b){return this.xj(a,b)},
bD(a){return this.d9(a,!1)},
xj(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$d9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.y7(a,b)
s=2
return A.a(m.$1("meta"),$async$d9)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$d9)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$d9)
case 4:o=d
n=q.d=new A.Bl(new Uint8Array(2),l,p,o)
if(k){n.fJ(B.b5,p.getSize()>0)
n.fJ(B.b6,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$d9,r)}}
A.y7.prototype={
oF(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.oF(a)},
$S:219}
A.pA.prototype={
nM(a,b){return A.FO(this.a.c6().dE(this.b),a,{at:b})},
l7(){return this.d>=2?1:0},
j8(){var s=this.a,r=this.b
s.c6().dE(r).flush()
if(this.c)s.c6().fJ(r,!1)},
h6(){return this.a.c6().dE(this.b).getSize()},
la(a){this.d=a},
lc(a){this.a.c6().dE(this.b).flush()},
h7(a){this.a.c6().dE(this.b).truncate(a)},
ld(a){this.d=a},
eU(a,b){if(A.FP(this.a.c6().dE(this.b),a,{at:b})<a.length)throw A.b(B.ep)}}
A.Bl.prototype={
aZ(a){var s=this.a
A.FO(this.b,s,{at:0})
return s[a.a]!==0},
fJ(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.K(s)
s[a.a]=r
A.FP(this.b,s,{at:0})},
dE(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.z_.prototype={
pE(a,b){var s=this,r=s.c
r.a!==$&&A.dD()
r.a=s
r=t.S
A.AH(new A.z0(s),r)
A.AH(new A.z1(s),r)
s.r=A.AH(new A.z2(s),r)
s.w=A.AH(new A.z3(s),r)},
ep(a,b){var s=J.J(a),r=this.d.dart_sqlite3_malloc(s.gl(a)+b),q=A.c2(this.b.buffer,0,null)
B.f.aA(q,r,r+s.gl(a),a)
B.f.kD(q,r+s.gl(a),r+s.gl(a)+b,0)
return r},
cY(a){return this.ep(a,0)},
nc(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
na(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
nb(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.z0.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.z1.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.z2.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.z3.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.iJ.prototype={}
A.x9.prototype={
pB(a){var s,r=this,q=r.a
q.start()
r.c=A.bz(q,"message",new A.xd(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.le()
q.toString
A.k7(q,s,null,null,!1).U(new A.xe(r),t.P)}},
jN(a){return this.rf(a)},
rf(a){var s=0,r=A.h(t.H),q=this
var $async$jN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.OO(a,new A.xa(q),q.gwA(),new A.xb(q),new A.xc(q))
return A.e(null,r)}})
return A.f($async$jN,r)},
hd(a,b,c){return this.p7(a,b,c,c)},
p7(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$hd=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.JM(null))
o=p.e++
n=new A.w($.D,t.a7)
p.f.j(0,o,new A.as(n,t.h1))
a.i=o
p.a.postMessage(a,A.il(a))
s=3
return A.a(n,$async$hd)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.La(m))
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
rA(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();)r.d.aY(new A.iF(a))
s.ak(0)
p.al()},
me(){return this.rA(null)}}
A.xd.prototype={
$1(a){if(a.data=="_disconnect"){this.a.me()
return}this.a.jN(A.bo(a.data))},
$S:1}
A.xe.prototype={
$1(a){this.a.me()
a.a.al()},
$S:220}
A.xc.prototype={
$1(a){var s=this.a.f.F(0,a.i)
if(s!=null)s.aB(a)},
$S:22}
A.xb.prototype={
$1(a){return this.ox(a)},
ox(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.vt(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bH(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.A(a0)
k=A.af(a0)
if(!(l instanceof A.dE)){b.console.error("Error in worker: "+J.Y(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.cj){h=A.K9(b)
g=0}else{g=b instanceof A.dE?1:null
h=null}f={e:J.Y(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.F(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.il(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:221}
A.xa.prototype={
$1(a){var s=this.a.r.F(0,a.i)
if(s!=null)s.abort()},
$S:22}
A.iF.prototype={
m(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iI:1}
A.rK.prototype={
cE(a){return this.wZ(a)},
wZ(a){var s=0,r=A.h(t.R),q
var $async$cE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.z8(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cE,r)}}
A.lW.prototype={}
A.rs.prototype={}
A.f5.prototype={}
A.mf.prototype={
iH(){var s=0,r=A.h(t.H),q=this
var $async$iH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.bD(q.b),$async$iH)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iH,r)},
kY(){var s=0,r=A.h(t.H),q=this
var $async$kY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kY,r)}}
A.tN.prototype={
yd(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
r6(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.zf.prototype={
$1(a){var s=new A.w($.D,t.D),r=new A.dd(new A.as(s,t.F))
this.a.a=r
this.b.aB(r)
return A.Ki(s)},
$S:222}
A.zg.prototype={
$2(a,b){var s,r,q
A.bo(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bA(new A.dE("Operation was cancelled"),b)
else q.bA(a,b)}return null},
$S:223}
A.dd.prototype={}
A.m1.prototype={
guR(){if(this.c.a)return!1
return!this.d||this.f!=null},
dX(a){return this.pM(a)},
pM(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dX=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.le()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.k7(n,o.a,null,o.grj(),!0),$async$dX)
case 6:m=c
s=7
return A.a(A.k7(n,o.b,a,null,!1),$async$dX)
case 7:l=c
j=o.e
j=j==null?null:j.iH()
s=8
return A.a(j instanceof A.w?j:A.bH(j,t.H),$async$dX)
case 8:o.f=new A.a_(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.al()
j=l
if(j!=null)j.a.al()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dX,r)},
rk(){this.nO()},
kR(a,b,c){return this.c.j3(new A.rZ(this,a,b,c),b,c)},
nO(){return this.c.l6(new A.t_(this),t.H)}}
A.rZ.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dX(r.c).U(new A.rY(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rY.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.t_.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kY()
s.a.al()
r.a.al()
p.f=null}},
$S:2}
A.js.prototype={
j3(a,b,c){return this.yG(a,b,c,c)},
l6(a,b){return this.j3(a,null,b)},
yG(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$j3=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.at)
h.a=!1
o=new A.we(h,p)
if(!p.a){h.a=p.a=!0
q=A.iZ(a,c).b8(o)
s=1
break}else{n={}
m=new A.w($.D,c.i("w<0>"))
l=new A.as(m,c.i("as<0>"))
n.a=null
h=new A.wd(h,n,l,a,c)
if(!g)n.a=A.bz(b,"abort",new A.wc(n,p,l,h),!1,t.m)
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
return A.f($async$j3,r)}}
A.we.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gG(0)){s=r.b
if(s===r.c)A.u(A.au());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.wd.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.aB(A.iZ(r.d,r.e))},
$S:0}
A.wc.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.F(0,r.d)
s.aY(B.at)}},
$S:1}
A.eD.prototype={
gnU(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
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
A.tf.prototype={
$1(a){if(a!=null)return A.H(a)
return null},
$S:224}
A.n_.prototype={
a7(){return"MessageType."+this.b}}
A.xU.prototype={
vt(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.is(a,b)
case"connect":return p.kG(a,b)
case"custom":return p.eA(a,b)
case"fileSystemExists":return p.fD(a,b)
case"fileSystemFlush":return p.fE(a,b)
case"fileSystemAccess":return p.fC(a,b)
case"runQuery":return p.iw(a,b)
case"exclusiveLock":return p.ir(a,b)
case"releaseLock":s=p.bJ(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.u(A.B("Lock to be released is not active."))
q.b.al()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.ip(a,b)
case"openAdditionalConnection":return p.it(a,b)
case"updateRequest":return p.ix(a,b)
case"rollbackRequest":return p.iv(a,b)
case"commitRequest":return p.iq(a,b)
case"dedicatedCompatibilityCheck":return p.e7(a,b)
case"sharedCompatibilityCheck":return p.e7(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.e7(a,b)
default:r=A.fl(new A.bL(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.w($.D,t.hl)
q.cM(r)
return q}}}
A.dL.prototype={
a7(){return"FileSystemImplementation."+this.b}}
A.cH.prototype={
a7(){return"TypeCode."+this.b},
v9(a){var s=null
switch(this.a){case 0:s=A.u(A.U("Unsupported type code",null))
break
case 1:a=A.ai(A.fk(a))
s=a
break
case 2:s=A.GP(t.bJ.a(a).toString(),null)
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
case 7:A.ic(a)
s=a
break
case 6:break}return s}}
A.eF.prototype={
n4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.U("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aK:B.ba[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ai(A.fk(h))))
if(k!==0)a.bT(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bT(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.fk(h))
if(k!==0)a.bT(k,e)
break
case 4:g=B.e.v(A.H(h))
k=s.dart_sqlite3_bind_text(d,i,c.cY(g),g.length)
if(k!==0)a.bT(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cY(h),h.length)
if(k!==0)a.bT(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bT(k,e)
break
case 7:f=A.ic(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bT(k,e)
break
case 0:throw A.b(A.a3("Unknown type code"))}}},
gl(a){return this.a.length},
sl(a,b){this.mQ()},
h(a,b){var s=this.c[b],r=s>=8?B.aK:B.ba[s]
return r.v9(this.a[b])},
j(a,b,c){this.mQ()},
mQ(){throw A.b(A.a3("decodeValues list is unmodifiable"))}}
A.CQ.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:22}
A.r3.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r4.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aY(s)},
$S:1}
A.r7.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.r8.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aY(s)},
$S:1}
A.r9.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aY(s)},
$S:1}
A.x5.prototype={
vM(){var s,r,q,p
for(s=this.b,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.ak(0)}}
A.iV.prototype={
a7(){return"FileType."+this.b}}
A.e4.prototype={
a7(){return"StorageMode."+this.b}}
A.hj.prototype={
m(a){return"Remote error: "+this.a},
$iI:1}
A.dE.prototype={}
A.Ct.prototype={
$1(a){return A.bo(a.data)},
$S:226}
A.kF.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.hR.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n)p[n].abort()
B.b.ak(p)
p=q.f
if(p!=null)p.b.al()
s=2
return A.a(q.a.fs(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
mI(a){var s=new v.G.AbortController()
a.onabort=A.Cu(new A.Ak(s))
this.w.push(s)
return s},
l4(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.guR()){r=p.mI(b)
o=s.kR(c,r.signal,d).b8(new A.Ao(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.B("Requested operation on inactive lock state."))}if(o==null)o=A.iZ(c,d)
q=p.a.z
return q instanceof A.dP?o.b8(q.gwe()):o},
xf(a){var s=this,r=s.mI(a),q=new A.w($.D,t.hy),p=new A.aG(q,t.ho),o=t.H
A.DS(s.a.f.kR(new A.Al(s,p),r.signal,o),new A.Am(p),o,t.K)
return q.b8(new A.An(s,r))}}
A.Ak.prototype={
$0(){return this.a.abort()},
$S:0}
A.Ao.prototype={
$0(){B.b.F(this.a.w,this.b)},
$S:2}
A.Al.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.D,t.D)
s.f=new A.a_(r,new A.aG(q,t.Q))
this.b.aB(r)
return q},
$S:3}
A.Am.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bA(a,b)},
$S:6}
A.An.prototype={
$0(){B.b.F(this.a.w,this.b)},
$S:2}
A.hP.prototype={
pG(a,b,c){this.b.a.b8(new A.A4(this))},
e7(a,b){return this.r9(a,b)},
r9(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$e7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.n6(a),$async$e7)
case 3:q={r:d.gnU(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e7,r)},
kG(a,b){return this.wn(a,b)},
wn(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$kG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gm8()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.il(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kG,r)},
eA(a,b){return this.wo(a,b)},
wo(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lS(l)
n=a.r
s=7
return A.a(o.a.gcG(),$async$eA)
case 7:s=6
return A.a(d.d4(p,new A.rs(n)),$async$eA)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.d4(p,new A.lW(a)),$async$eA)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eA,r)},
is(a,b){return this.wC(a,b)},
wC(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$is=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.l6(new A.A9(p,a),t.m),$async$is)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)},
iw(a,b){return this.wG(a,b)},
wG(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$iw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bJ(a)
n=o.a
s=3
return A.a(n.gcG(),$async$iw)
case 3:m=d
q=o.l4(a.z,b,new A.Ac(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ir(a,b){return this.ws(a,b)},
ws(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ir=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bJ(a).xf(b),$async$ir)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
iq(a,b){return this.wm(a,b)},
wm(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bJ(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dV(n,new A.A6(p,o),a),$async$iq)
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
iv(a,b){return this.wF(a,b)},
wF(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bJ(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dV(n,new A.Ab(p,o),a),$async$iv)
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
return A.f($async$iv,r)},
ix(a,b){return this.wI(a,b)},
wI(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ix=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bJ(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dV(n,new A.Ae(p,o),a),$async$ix)
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
return A.f($async$ix,r)},
it(a,b){return this.wD(a,b)},
wD(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$it=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bJ(a).a;++m.w
s=3
return A.a(A.CT(),$async$it)
case 3:o=d
n=o.a
p.w.lv(o.b).x.push(A.GQ(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
ip(a,b){return this.wl(a,b)},
wl(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$ip=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bJ(a)
B.b.F(p.x,o)
s=3
return A.a(o.q(),$async$ip)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
fE(a,b){return this.wv(a,b)},
wv(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bJ(a).a.gde(),$async$fE)
case 3:o=d
s=o instanceof A.dP?4:5
break
case 4:s=6
return A.a(o.cV(!1),$async$fE)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fC(a,b){return this.wt(a,b)},
wt(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bJ(a)
n=B.bb[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gde(),$async$fC)
case 4:s=3
return A.a(l.l4(null,k,new j.A7(d,n,m,a),t.m),$async$fC)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
fD(a,b){return this.wu(a,b)},
wu(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bJ(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gde(),$async$fD)
case 4:s=3
return A.a(n.l4(null,m,new l.A8(d,a),t.y),$async$fD)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
dV(a,b,c){return this.pi(a,b,c)},
pi(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dV)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
wB(a){},
fp(a){var s=0,r=A.h(t.X),q,p=this
var $async$fp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.hd({r:a,z:null,i:0,d:null,t:"custom"},B.dk,t.m),$async$fp)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
lS(a){return B.b.kE(this.x,new A.A3(a))},
bJ(a){var s=a.d
if(s!=null)return this.lS(s)
else throw A.b(A.U("Request requires database id",null))},
$iFB:1}
A.A4.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.p)(p),++n
s=2
break
case 4:B.b.ak(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.A9.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cE(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.wc(h.d,A.Kc(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gde():m.gcG(),$async$$0)
case 8:l=A.GQ(m,null)
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
case 9:B.b.F(j.x,l)
s=11
return A.a(m.fs(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:227}
A.Ac.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.B("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.eF(s,r,A.c2(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oZ(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ai(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.w1(l,k.s,q)
s=o.d
return A.Ir(s.sqlite3_get_autocommit(p)!==0,m,A.ai(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:37}
A.A6.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcG(),$async$$0)
case 3:q=b.a.qf().gcL().b2(new A.A5(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.A5.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.il(s))},
$S:74}
A.Ab.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcG(),$async$$0)
case 3:q=b.a.tE().gcL().b2(new A.Aa(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:73}
A.Aa.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.il(s))},
$S:74}
A.Ae.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcG(),$async$$0)
case 3:q=b.a.ud().gcL().b2(new A.Ad(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:230}
A.Ad.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.il(s))},
$S:231}
A.A7.prototype={
$0(){var s,r,q,p=this,o=p.a.dQ(new A.jV(A.Ht(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.h7(s.byteLength)
o.eU(A.c2(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.h6()
r=new Uint8Array(q)
o.ja(r,0)
q={r:t.i.a(J.Ju(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.j8()}},
$S:37}
A.A8.prototype={
$0(){return this.a.j7(A.Ht(B.bb[this.b.f]),0)===1},
$S:49}
A.A3.prototype={
$1(a){return a.b===this.a},
$S:232}
A.m2.prototype={
gde(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gde=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iZ(new A.t2(p),t.H):o,$async$gde)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gde,r)},
gcG(){var s=0,r=A.h(t.n),q,p=this,o
var $async$gcG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iZ(new A.t1(p),t.n):o,$async$gcG)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcG,r)},
fs(){var s=0,r=A.h(t.H),q=this
var $async$fs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$fs)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fs,r)},
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
if(j!=null)j.vM()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.Ff()
A.DQ(m)
k=l.a.get(m)
if(k==null)A.u(A.B("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bH(j,t.H),$async$q)
case 6:q.f.nO()
return A.e(null,r)}})
return A.f($async$q,r)},
mm(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.F(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a_(s,!0)
p=a.iQ(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.F(0,new A.T(n,A.n(n).i("T<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a_(p,!0)}return new A.a_(p,!1)},
w1(a,b,c){var s,r,q
if(c.gl(0)===0)return a.aJ(b,B.k)
else{s=null
r=null
q=this.mm(a,b)
s=q.a
r=q.b
try{s.ew(new A.lX(c.guP()))}finally{if(r)s.dM()
else s.q()}}},
oZ(a,b,c){var s,r=null,q=null,p=this.mm(a,b)
r=p.a
q=p.b
try{s=A.Lb(r,c)
return s}finally{if(q)r.dM()
else r.q()}}}
A.t2.prototype={
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
return A.a(A.y6("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ges()
s=3
break
case 5:case 6:s=10
return A.a(A.mg("drift_db/"+l.c,k===B.aA,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ges()
s=3
break
case 7:s=11
return A.a(A.mG(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ges()
s=3
break
case 8:l.z=A.DV("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.t1.prototype={
$0(){var s=0,r=A.h(t.n),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gde(),$async$$0)
case 4:n=b
o.nr()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.ep(B.e.v(n.a),1),n,0)
if(m===0)A.u(A.B("could not register vfs"))
$.Ff().j(0,n,m)
s=5
return A.a(l.f.kR(new A.t0(l,o),null,t.n),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:75}
A.t0.prototype={
$0(){var s=this.a
return s.a.b.iN(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:75}
A.zz.prototype={
gm8(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.pc()
r.Q!==$&&A.DA()
r.Q=s
q=s}return q},
eB(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eB=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.c5(A.cq(A.N5(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$eB)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.iJ(i.port,i.lockName,null)
n.lv(l)
s=9
break
case 10:s=A.Pb(m.t)?11:12
break
case 11:s=13
return A.a(n.n6(m),$async$eB)
case 13:k=b
j.postMessage(k.gnU())
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
lv(a){var s=this,r=A.LV(a,s.d++,s)
s.c.push(r)
r.b.a.b8(new A.zA(s,r))
return r},
n6(a){return this.x.l6(new A.zB(this,a),t.p6)},
cE(a){return this.x_(a)},
x_(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bo(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.B("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bH(n,t.he),$async$cE)
case 5:s=3
break
case 4:o=A.DS(q.b.cE(m),new A.zC(q),t.R,t.K)
q.r=o
s=6
return A.a(o,$async$cE)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cE,r)},
wc(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.aA||b===B.b4
o=A.E2(t.cj)
n=c===0?null:new A.x5(c,A.dU(null,null,t.N,t.fw))
n=new A.m2(this,r,a,b,d,new A.m1(q+"-outer",q,new A.js(o),p),n)
s.j(0,r,n)
return n}}
A.zA.prototype={
$0(){var s=this.a,r=s.c
B.b.F(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.zB.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.ep(),$async$$0)
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
return A.a(A.q0(),$async$$0)
case 9:case 8:j=a1
i=A.aP(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gm8()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.il(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hV(n,"message",!1,t.d4).gH(0),$async$$0)
case 15:e=b.JT(a.bo(a1.data))
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
return A.a(A.ip(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a_(B.bm,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.CP(c),$async$$0)
case 23:if(a1)i.u(0,new A.a_(B.bn,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.eD(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:234}
A.zC.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:235}
A.kR.prototype={}
A.p2.prototype={
gnp(){return new A.hV(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.py.prototype={
gnp(){return new A.dz(new A.BA(this),t.k8)},
q(){}}
A.BA.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.bz(this.a.a,"connect",new A.Bx(new A.BB(s,r,a)),!1,t.m))
a.r=new A.By(r)},
$S:236}
A.BB.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bz(a,"message",new A.Bz(this.c),!1,t.m))},
$S:1}
A.Bz.prototype={
$1(a){this.a.uE(a)},
$S:1}
A.Bx.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bW(r,A.a2(r).i("bW<1,N>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.By.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].A()},
$S:2}
A.p3.prototype={
pc(){var s=v.G
if(!("Worker" in s))return null
return new A.AA(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.AA.prototype={}
A.nY.prototype={
ghf(){return A.H(this.c)}}
A.yo.prototype={
gkQ(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
jd(a){var s,r=this,q=r.d=J.Jy(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gO()
return s},
nk(a,b){var s
if(this.jd(a))return
if(b==null)if(a instanceof A.eN)b="/"+a.a+"/"
else{s=J.Y(a)
s=A.C(s,"\\","\\\\")
b='"'+A.C(s,'"','\\"')+'"'}this.m_(b)},
fA(a){return this.nk(a,null)},
w6(){if(this.c===this.b.length)return
this.m_("no more input")},
w0(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.u(A.b8("position must be greater than or equal to 0."))
else if(c>n.length)A.u(A.b8("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.u(A.b8("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.y8(s,r,new Uint32Array(q))
p.pC(new A.cv(n),s)
o=c+b
if(o>q)A.u(A.b8("End "+o+u.D+p.gl(0)+"."))
else if(c<0)A.u(A.b8("Start may not be negative, was "+c+"."))
throw A.b(new A.nY(n,a,new A.hW(p,c,o)))},
m_(a){this.w0("expected "+a+".",0,this.c)}}
A.hD.prototype={
gl(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.FS(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.FS(b,this))
s=this.a
s.$flags&2&&A.K(s)
s[b]=c},
sl(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.K(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lO(b)
B.f.aA(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.u9(q)
q=r.a
s=r.b++
q.$flags&2&&A.K(q)
q[s]=b},
lO(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
u9(a){var s=this.lO(null)
B.f.aA(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.aA(c,0,s,null,null))
s=this.a
if(d instanceof A.cI)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
aA(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.pc.prototype={}
A.cI.prototype={}
A.DO.prototype={}
A.hV.prototype={
aa(a,b,c,d){return A.bz(this.a,this.b,a,!1,this.$ti.c)},
bC(a,b,c){return this.aa(a,null,b,c)}}
A.kn.prototype={
A(){var s=this,r=A.be(null,t.H)
if(s.b==null)return r
s.kf()
s.d=s.b=null
return r},
iL(a){var s,r=this
if(r.b==null)throw A.b(A.B("Subscription has been canceled."))
r.kf()
s=A.I0(new A.AE(a),t.m)
s=s==null?null:A.d8(s)
r.d=s
r.kd()},
bc(){if(this.b==null)return;++this.a
this.kf()},
b3(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.kd()},
kd(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
kf(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibx:1}
A.AD.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.AE.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dT.prototype
s.po=s.m
s=A.bO.prototype
s.pk=s.ns
s.pl=s.nt
s.pn=s.nv
s.pm=s.nu
s=A.bb.prototype
s.jf=s.aD
s.ls=s.aM
s.lt=s.b1
s=A.dy.prototype
s.pr=s.lL
s.ps=s.m4
s.pu=s.mF
s.pt=s.eh
s=A.M.prototype
s.lr=s.ai
s=A.aH.prototype
s.lq=s.uO
s=A.kG.prototype
s.pv=s.q
s=A.o.prototype
s.pj=s.dP
s=A.ly.prototype
s.lo=s.im
s=A.fE.prototype
s.lp=s.fu
s=A.ht.prototype
s.pq=s.a2
s.pp=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Nf","Ks",50)
r(A,"Ns","KW",10)
q(A,"O2","LG",19)
q(A,"O3","LH",19)
q(A,"O4","LI",19)
q(A,"O5","Nu",15)
r(A,"I5","NV",0)
q(A,"O6","Nv",27)
s(A,"O7","Nx",14)
r(A,"CK","Nw",0)
p(A,"Oc",5,null,["$5"],["NP"],238,0)
p(A,"Oh",4,null,["$1$4","$4"],["CD",function(a,b,c,d){return A.CD(a,b,c,d,t.z)}],239,0)
p(A,"Oj",5,null,["$2$5","$5"],["CE",function(a,b,c,d,e){var i=t.z
return A.CE(a,b,c,d,e,i,i)}],240,0)
p(A,"Oi",6,null,["$3$6"],["ET"],241,0)
p(A,"Of",4,null,["$1$4","$4"],["HN",function(a,b,c,d){return A.HN(a,b,c,d,t.z)}],242,0)
p(A,"Og",4,null,["$2$4","$4"],["HO",function(a,b,c,d){var i=t.z
return A.HO(a,b,c,d,i,i)}],243,0)
p(A,"Oe",4,null,["$3$4","$4"],["HM",function(a,b,c,d){var i=t.z
return A.HM(a,b,c,d,i,i,i)}],244,0)
p(A,"Oa",5,null,["$5"],["NO"],245,0)
p(A,"Ok",4,null,["$4"],["CF"],246,0)
p(A,"O9",5,null,["$5"],["NN"],247,0)
p(A,"O8",5,null,["$5"],["NM"],248,0)
p(A,"Od",4,null,["$4"],["NQ"],249,0)
p(A,"Ob",5,null,["$5"],["HL"],250,0)
var j
o(j=A.f8.prototype,"gf6","c3",0)
o(j,"gf7","c4",0)
n(A.f9.prototype,"guY",0,1,null,["$2","$1"],["bA","aY"],71,0,0)
m(A.w.prototype,"gjs","qk",14)
n(j=A.ek.prototype,"guB",0,1,null,["$2","$1"],["bp","kk"],71,0,0)
l(j,"gpV","aD",17)
m(j,"gpP","aM",14)
o(j,"gqb","b1",0)
o(j=A.ee.prototype,"gf6","c3",0)
o(j,"gf7","c4",0)
o(j=A.bb.prototype,"gf6","c3",0)
o(j,"gf7","c4",0)
o(A.hU.prototype,"gmj","rS",0)
l(j=A.c5.prototype,"grK","rL",17)
m(j,"grO","rP",14)
o(j,"grM","rN",0)
o(j=A.hX.prototype,"gf6","c3",0)
o(j,"gf7","c4",0)
l(j,"gjH","jI",17)
m(j,"gjL","jM",153)
o(j,"gjJ","jK",0)
o(j=A.i3.prototype,"gf6","c3",0)
o(j,"gf7","c4",0)
l(j,"gjH","jI",17)
m(j,"gjL","jM",14)
o(j,"gjJ","jK",0)
s(A,"EZ","MZ",35)
q(A,"F_","N_",36)
s(A,"Oq","KA",50)
q(A,"OA","N2",41)
k(j=A.oS.prototype,"guA","u",17)
o(j,"ges","q",0)
q(A,"Ia","P4",36)
s(A,"I9","P3",35)
q(A,"OB","Ly",7)
p(A,"Ph",2,null,["$1$2","$2"],["Ip",function(a,b){return A.Ip(a,b,t.cZ)}],251,0)
m(j=A.m5.prototype,"gw_","X",35)
l(j,"gwJ","ae",36)
l(j,"gwQ","wR",15)
q(A,"Oo","JL",7)
o(j=A.jC.prototype,"grQ","rR",0)
l(j,"grT","rU",112)
q(A,"Pt","KU",60)
q(A,"I8","K_",253)
q(A,"Ow","K4",254)
q(A,"Oy","Ko",255)
q(A,"Ov","JG",256)
q(A,"Ox","Kb",257)
q(A,"q2","K3",7)
q(A,"OV","FM",258)
r(A,"OW","NY",259)
r(A,"Pd","N0",10)
r(A,"QN","N1",10)
q(A,"Pj","NL",260)
l(A.ni.prototype,"gxM","xN",9)
q(A,"Os","DK",261)
l(j=A.o_.prototype,"gwy","wz",45)
l(j,"gww","wx",139)
o(j,"grH","jX",0)
q(A,"PA","Lr",60)
p(A,"IG",1,null,["$2$where"],["OM"],262,0)
o(A.oX.prototype,"gwg","kF",0)
o(A.nt.prototype,"gkw","fu",0)
o(A.nd.prototype,"gkw","fu",0)
l(j=A.fE.prototype,"grI","rJ",45)
o(j,"gmT","en",3)
m(A.oG.prototype,"gra","hA",42)
m(A.oF.prototype,"gr7","r8",42)
m(A.oE.prototype,"grh","hB",42)
l(j=A.m0.prototype,"gx4","x5",9)
m(j,"gx0","x3",190)
n(j,"gz6",0,5,null,["$5"],["z7"],191,0,0)
n(j,"gyW",0,3,null,["$3"],["yX"],192,0,0)
n(j,"gyO",0,4,null,["$4"],["yP"],62,0,0)
n(j,"gz2",0,4,null,["$4"],["z3"],62,0,0)
n(j,"gz8",0,3,null,["$3"],["z9"],194,0,0)
m(j,"gzd","ze",63)
m(j,"gyU","yV",63)
l(j,"gyS","yT",48)
n(j,"gza",0,4,null,["$4"],["zb"],65,0,0)
n(j,"gzl",0,4,null,["$4"],["zm"],65,0,0)
m(j,"gzh","zi",198)
m(j,"gzf","zg",18)
m(j,"gz0","z1",18)
m(j,"gz4","z5",18)
m(j,"gzj","zk",18)
m(j,"gyQ","yR",18)
l(j,"gj9","yY",48)
n(j,"gyZ",0,3,null,["$3"],["z_"],200,0,0)
l(j,"gjb","zc",48)
l(j,"gvw","vx",19)
l(j,"gvr","vs",201)
n(j,"gvu",0,5,null,["$5"],["vv"],202,0,0)
n(j,"gvC",0,4,null,["$4"],["vD"],46,0,0)
n(j,"gvG",0,4,null,["$4"],["vH"],46,0,0)
n(j,"gvE",0,4,null,["$4"],["vF"],46,0,0)
m(j,"gvI","vJ",68)
m(j,"gvA","vB",68)
n(j,"gvy",0,5,null,["$5"],["vz"],205,0,0)
m(j,"gvp","vq",206)
m(j,"gvn","vo",207)
n(j,"gvl",0,3,null,["$3"],["vm"],208,0,0)
o(j=A.dP.prototype,"ges","q",3)
o(j,"gwe","d3",3)
o(A.hr.prototype,"ges","q",0)
o(A.m1.prototype,"grj","rk",0)
l(A.eF.prototype,"guP","n4",225)
l(A.hP.prototype,"gwA","wB",1)
p(A,"Ol",1,null,["$2$where"],["OF"],175,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.E0,J.mI,A.jQ,J.fB,A.As,A.oT,A.o,A.lG,A.eB,A.W,A.aj,A.M,A.y4,A.ar,A.mY,A.d3,A.mc,A.oc,A.nK,A.m9,A.oC,A.dQ,A.iW,A.oo,A.k2,A.i0,A.jg,A.fJ,A.hY,A.cC,A.yS,A.nc,A.iQ,A.kD,A.vq,A.bl,A.aS,A.mV,A.eN,A.i_,A.oL,A.hx,A.BJ,A.oU,A.pK,A.cB,A.p8,A.pH,A.kH,A.ka,A.oN,A.ks,A.pE,A.aq,A.ad,A.bb,A.kg,A.od,A.kq,A.f9,A.cm,A.w,A.oM,A.ek,A.pF,A.kc,A.oJ,A.p4,A.AB,A.ei,A.hU,A.c5,A.km,A.C7,A.C9,A.C8,A.C5,A.C6,A.C4,A.C1,A.pR,A.C0,A.C_,A.C3,A.C2,A.pQ,A.pS,A.pP,A.ib,A.k9,A.p9,A.Bj,A.eg,A.pg,A.bf,A.pi,A.pJ,A.ph,A.nX,A.lJ,A.aH,A.oP,A.qw,A.oO,A.lH,A.pz,A.fa,A.Bf,A.BK,A.pN,A.dA,A.aQ,A.p7,A.aI,A.aF,A.AC,A.nf,A.jX,A.p6,A.bv,A.mH,A.V,A.X,A.pD,A.jZ,A.nC,A.a7,A.kO,A.yX,A.cn,A.md,A.nb,A.B8,A.B9,A.ma,A.a8,A.m6,A.j5,A.eP,A.i8,A.hZ,A.jf,A.m5,A.na,A.op,A.cw,A.cb,A.tO,A.qJ,A.je,A.jT,A.vG,A.jS,A.y3,A.rt,A.rJ,A.Ar,A.eA,A.lx,A.ly,A.qs,A.n3,A.h_,A.qr,A.jC,A.x0,A.BC,A.wQ,A.wy,A.jE,A.i4,A.wR,A.BD,A.eL,A.dM,A.mC,A.cR,A.dN,A.e5,A.ww,A.lO,A.jH,A.cc,A.mt,A.nw,A.ah,A.wa,A.xK,A.eY,A.cU,A.nr,A.y1,A.nF,A.f2,A.bg,A.f4,A.nR,A.e2,A.a5,A.qG,A.qH,A.qI,A.tg,A.fi,A.Bh,A.pG,A.i2,A.uo,A.iN,A.r2,A.iM,A.dV,A.iR,A.bu,A.vx,A.cQ,A.tw,A.mn,A.qu,A.ew,A.fC,A.nV,A.iU,A.tj,A.vo,A.nT,A.x1,A.pf,A.vH,A.wb,A.bC,A.ni,A.vp,A.BL,A.xI,A.dk,A.ba,A.cy,A.nq,A.cW,A.y0,A.cA,A.xS,A.b6,A.dO,A.fV,A.eK,A.c3,A.lQ,A.ca,A.nE,A.xZ,A.oW,A.hN,A.qg,A.bt,A.re,A.o_,A.dh,A.eV,A.jh,A.aT,A.mZ,A.Bq,A.Bo,A.wi,A.qt,A.jd,A.jK,A.wn,A.np,A.xj,A.b2,A.xs,A.hy,A.yq,A.b9,A.lu,A.hw,A.cV,A.hf,A.hg,A.ct,A.oe,A.ys,A.xg,A.hd,A.pL,A.xi,A.jJ,A.k1,A.yF,A.cZ,A.cz,A.eW,A.bR,A.Bv,A.yI,A.oX,A.hQ,A.fE,A.zD,A.hK,A.oB,A.ze,A.pk,A.rK,A.f5,A.oY,A.zj,A.zk,A.hM,A.oG,A.oE,A.rl,A.yp,A.ng,A.nh,A.y8,A.nN,A.ht,A.tP,A.bA,A.cJ,A.cD,A.nQ,A.cE,A.cj,A.lm,A.rM,A.el,A.ya,A.eC,A.bh,A.lB,A.rr,A.pu,A.Bp,A.bY,A.lX,A.dw,A.jV,A.z9,A.z4,A.zb,A.za,A.ea,A.dx,A.m0,A.dm,A.fb,A.z5,A.qn,A.kr,A.AF,A.pj,A.pb,A.Bl,A.z_,A.iJ,A.xU,A.iF,A.lW,A.mf,A.tN,A.dd,A.m1,A.js,A.eD,A.x5,A.hj,A.kF,A.hR,A.m2,A.zz,A.kR,A.p3,A.AA,A.yo,A.DO,A.kn])
q(J.mI,[J.mL,J.j7,J.aJ,J.bD,J.fX,J.eM,J.dR])
q(J.aJ,[J.dT,J.z,A.h6,A.ju])
q(J.dT,[J.nj,J.e8,J.bZ])
r(J.mJ,A.jQ)
r(J.ul,J.z)
q(J.eM,[J.j6,J.mM])
q(A.o,[A.ed,A.L,A.cx,A.ap,A.iS,A.f3,A.dn,A.eb,A.de,A.fe,A.oK,A.pC,A.i6,A.eO,A.jP])
q(A.ed,[A.ey,A.kS])
r(A.kk,A.ey)
r(A.kh,A.kS)
q(A.eB,[A.qL,A.qE,A.qK,A.ue,A.yG,A.Dd,A.Df,A.zK,A.zJ,A.Ce,A.Cd,A.tL,A.tG,A.AJ,A.AI,A.AU,A.AX,A.yk,A.yl,A.yi,A.Az,A.Ay,A.Bu,A.B_,A.Av,A.Bi,A.vM,A.Bd,A.rq,A.zX,A.tH,A.Dh,A.Dn,A.Do,A.CU,A.qz,A.qB,A.qD,A.lA,A.qv,A.Cg,A.qx,A.vQ,A.D2,A.wP,A.wO,A.wz,A.wK,A.wL,A.wM,A.wN,A.wI,A.wJ,A.x_,A.wU,A.wV,A.wS,A.wX,A.ro,A.rp,A.xM,A.xH,A.x3,A.yc,A.yd,A.uS,A.uT,A.uV,A.vg,A.uW,A.uX,A.uY,A.uZ,A.v_,A.v0,A.v1,A.v2,A.v3,A.v4,A.v6,A.v7,A.v8,A.v9,A.va,A.vb,A.vc,A.vd,A.uE,A.uG,A.uK,A.ur,A.uq,A.uI,A.uH,A.uO,A.uP,A.uQ,A.uR,A.uy,A.uA,A.uC,A.uu,A.us,A.uM,A.uN,A.ux,A.uv,A.td,A.tc,A.te,A.tb,A.ta,A.t9,A.t8,A.t4,A.t5,A.t6,A.vy,A.vA,A.vC,A.vE,A.vz,A.tx,A.ty,A.Dm,A.tm,A.tk,A.tn,A.to,A.tq,A.ts,A.tu,A.Ds,A.vK,A.vJ,A.vI,A.vL,A.w6,A.w1,A.w4,A.w2,A.w5,A.w3,A.Dw,A.xf,A.D1,A.Cq,A.Cs,A.Cm,A.Cn,A.xA,A.xC,A.xD,A.xE,A.xV,A.xY,A.y_,A.qZ,A.r1,A.qY,A.r0,A.qV,A.qU,A.qR,A.r_,A.qW,A.qT,A.qS,A.qX,A.qO,A.qh,A.qi,A.rg,A.rf,A.yD,A.yt,A.yB,A.yw,A.yx,A.yy,A.yu,A.CR,A.CS,A.qf,A.qe,A.w0,A.vZ,A.w_,A.vS,A.vT,A.vU,A.vV,A.vW,A.vX,A.wk,A.wl,A.wt,A.wr,A.wq,A.wp,A.ws,A.xq,A.xk,A.xm,A.xo,A.xt,A.xy,A.yr,A.D5,A.Dr,A.Dp,A.Dq,A.CV,A.CW,A.yR,A.yP,A.yL,A.yN,A.yJ,A.Ai,A.Af,A.xO,A.xN,A.zE,A.zd,A.vu,A.vv,A.vF,A.Ap,A.Aq,A.Db,A.Da,A.zm,A.zy,A.zt,A.zx,A.zp,A.zo,A.zr,A.zu,A.zv,A.zw,A.rm,A.rn,A.CH,A.tR,A.tQ,A.tS,A.tU,A.tW,A.tT,A.u9,A.ye,A.rU,A.BG,A.Dk,A.Dt,A.Du,A.qm,A.At,A.Au,A.r5,A.r6,A.ra,A.rb,A.rc,A.tv,A.qq,A.qo,A.B2,A.B5,A.B6,A.ud,A.ub,A.B1,A.y7,A.z0,A.z1,A.z2,A.z3,A.xd,A.xe,A.xc,A.xb,A.xa,A.zf,A.rY,A.wc,A.tf,A.CQ,A.r3,A.r4,A.r7,A.r8,A.r9,A.Ct,A.A5,A.Aa,A.Ad,A.A3,A.BA,A.BB,A.Bz,A.Bx,A.AD,A.AE])
q(A.qL,[A.A1,A.qF,A.rk,A.um,A.De,A.Cf,A.CI,A.tM,A.tF,A.AK,A.AV,A.AY,A.zG,A.AZ,A.vr,A.vO,A.Bg,A.zW,A.BU,A.yY,A.BT,A.BS,A.tJ,A.tI,A.qy,A.qA,A.qC,A.lz,A.w9,A.vR,A.wv,A.wB,A.wT,A.wx,A.Co,A.xL,A.xG,A.x4,A.xJ,A.y2,A.DB,A.Dy,A.CO,A.up,A.ut,A.uw,A.t7,A.tz,A.Cz,A.w7,A.Dx,A.Cp,A.xF,A.xW,A.xX,A.qQ,A.qj,A.yv,A.CA,A.zh,A.zn,A.zs,A.tV,A.rX,A.B7,A.zg,A.Am,A.zC])
r(A.bW,A.kh)
q(A.W,[A.ez,A.bO,A.dy,A.pd])
q(A.aj,[A.dS,A.nu,A.du,A.mN,A.on,A.nD,A.p5,A.jD,A.ja,A.lq,A.bL,A.d2,A.om,A.bw,A.lM])
q(A.M,[A.hF,A.nH,A.ow,A.hI,A.eF,A.hD])
r(A.cv,A.hF)
q(A.qK,[A.Dj,A.x7,A.zL,A.zM,A.BN,A.BM,A.Cc,A.zO,A.zP,A.zR,A.zS,A.zQ,A.zN,A.tK,A.AL,A.AQ,A.AP,A.AN,A.AM,A.AT,A.AS,A.AR,A.AW,A.yj,A.ym,A.yh,A.BF,A.BE,A.zF,A.A0,A.A_,A.Bm,A.Bk,A.Ch,A.Ci,A.Ax,A.Aw,A.Bt,A.Bs,A.CC,A.BX,A.BW,A.t3,A.Cw,A.Cx,A.vP,A.wu,A.wG,A.wH,A.wD,A.wA,A.wE,A.wF,A.wC,A.wY,A.wZ,A.wW,A.uU,A.v5,A.vi,A.vj,A.vk,A.vl,A.vm,A.vn,A.ve,A.vf,A.vh,A.uD,A.uF,A.uJ,A.uz,A.uB,A.uL,A.ti,A.vB,A.vD,A.tl,A.tp,A.tr,A.tt,A.Cr,A.xB,A.th,A.ua,A.tD,A.tC,A.yg,A.qN,A.qP,A.rd,A.rj,A.ri,A.rh,A.yA,A.yz,A.yC,A.xr,A.xl,A.xn,A.xp,A.xu,A.xz,A.xx,A.xw,A.xv,A.yE,A.wo,A.wj,A.yQ,A.yO,A.yM,A.yK,A.Aj,A.Ag,A.Ah,A.xP,A.wh,A.vw,A.zl,A.zq,A.u8,A.tX,A.u3,A.u4,A.u5,A.u6,A.u1,A.u2,A.tY,A.tZ,A.u_,A.u0,A.u7,A.B0,A.rV,A.rW,A.rS,A.rR,A.rT,A.rO,A.rN,A.rP,A.rQ,A.BH,A.BI,A.Dv,A.rx,A.ru,A.rz,A.rB,A.rD,A.rw,A.rC,A.rH,A.rF,A.rE,A.ry,A.rA,A.rG,A.rv,A.qk,A.ql,A.z6,A.qp,A.B3,A.B4,A.AG,A.uc,A.rZ,A.t_,A.we,A.wd,A.Ak,A.Ao,A.Al,A.An,A.A4,A.A9,A.Ac,A.A6,A.Ab,A.Ae,A.A7,A.A8,A.t2,A.t1,A.t0,A.zA,A.zB,A.By])
q(A.L,[A.a1,A.eI,A.T,A.av,A.aK,A.fd,A.ku])
q(A.a1,[A.cF,A.Z,A.bG,A.jc,A.pe])
r(A.eH,A.cx)
r(A.iO,A.f3)
r(A.fN,A.dn)
r(A.eG,A.de)
q(A.i0,[A.pl,A.pm,A.pn])
q(A.pl,[A.a_,A.kA,A.po,A.kB,A.i1,A.pp])
r(A.ej,A.pm)
q(A.pn,[A.fh,A.pq])
r(A.kN,A.jg)
r(A.d1,A.kN)
r(A.iK,A.d1)
q(A.fJ,[A.aE,A.j_])
q(A.cC,[A.iL,A.kC])
r(A.dJ,A.iL)
r(A.j3,A.ue)
r(A.jz,A.du)
q(A.yG,[A.yf,A.iB])
q(A.bO,[A.j9,A.j8,A.kt])
r(A.h5,A.h6)
q(A.ju,[A.jt,A.h7])
q(A.h7,[A.kw,A.ky])
r(A.kx,A.kw)
r(A.dZ,A.kx)
r(A.kz,A.ky)
r(A.c1,A.kz)
q(A.dZ,[A.n5,A.n6])
q(A.c1,[A.n7,A.n8,A.n9,A.jv,A.jw,A.jx,A.eU])
r(A.kI,A.p5)
q(A.ad,[A.i5,A.k_,A.kl,A.dz,A.ko,A.kf,A.iy,A.hV])
r(A.bi,A.i5)
r(A.b0,A.bi)
q(A.bb,[A.ee,A.hX,A.i3])
r(A.f8,A.ee)
r(A.kb,A.kg)
q(A.f9,[A.aG,A.as])
q(A.ek,[A.d4,A.i7])
r(A.kE,A.oJ)
q(A.p4,[A.cl,A.hT])
r(A.kv,A.d4)
r(A.ff,A.ko)
q(A.pP,[A.oZ,A.pt])
q(A.dy,[A.ef,A.ki])
r(A.cK,A.kC)
q(A.nX,[A.kG,A.BO,A.zT,A.pB])
r(A.Bb,A.kG)
q(A.lJ,[A.eJ,A.lv,A.un])
q(A.eJ,[A.lo,A.mT,A.ot])
q(A.aH,[A.pI,A.iz,A.lw,A.mQ,A.mP,A.ou,A.k4,A.mz])
q(A.pI,[A.lp,A.mU])
r(A.zY,A.oP)
q(A.qw,[A.zU,A.hO,A.oS,A.BV])
r(A.zH,A.zU)
r(A.mO,A.ja)
r(A.Bc,A.lH)
r(A.Be,A.Bf)
r(A.pT,A.pN)
r(A.BY,A.pT)
q(A.bL,[A.dl,A.j1])
r(A.p1,A.kO)
r(A.hp,A.i8)
r(A.pw,A.mz)
r(A.Bw,A.tO)
r(A.px,A.Bw)
r(A.lk,A.qJ)
r(A.jU,A.y3)
r(A.p_,A.lk)
r(A.lZ,A.p_)
r(A.p0,A.vG)
r(A.rI,A.p0)
r(A.nx,A.eA)
r(A.lE,A.lx)
r(A.dH,A.k_)
q(A.ly,[A.w8,A.xT])
r(A.k0,A.qs)
r(A.nW,A.k0)
r(A.iD,A.a8)
r(A.jF,A.jC)
q(A.cc,[A.lK,A.lS,A.k6,A.fR,A.o7,A.lt])
q(A.nw,[A.mi,A.mj,A.mo,A.mk,A.mh,A.mx,A.mr,A.mm,A.ml,A.mu,A.mp,A.mb,A.nS,A.ne,A.lF,A.mA,A.lI,A.my,A.nA,A.n4,A.ns,A.lV,A.lU,A.m7,A.mD,A.ll,A.me,A.nG,A.of,A.og,A.oi,A.ok,A.oj,A.oh,A.oz,A.oA,A.oy,A.ln,A.ox,A.ov,A.oD,A.no,A.lL,A.nB,A.lR,A.lP,A.ny,A.li,A.lj,A.lT,A.o5,A.oa,A.o0,A.o1,A.o3,A.ob,A.o4,A.o8])
q(A.ah,[A.mw,A.iT,A.fT,A.ms,A.fS,A.fQ,A.hv,A.h9,A.iC,A.mB,A.hl,A.hm,A.h4,A.hi,A.fK,A.fM,A.fW,A.fz,A.fP,A.ho,A.fI,A.fH,A.hC,A.hJ,A.he,A.fG,A.hL,A.o6,A.o2,A.o9])
q(A.wa,[A.jn,A.jq,A.jo,A.jr,A.jk,A.jl,A.jj,A.jp,A.jm])
q(A.AC,[A.b7,A.cN,A.e7,A.nk,A.iE,A.dI,A.dg,A.lN,A.cd,A.j2,A.dW,A.dY,A.ev,A.ck,A.cu,A.d_,A.fy,A.ha,A.jA,A.m8,A.jW,A.wm,A.fU,A.n_,A.dL,A.cH,A.iV,A.e4])
q(A.cU,[A.jb,A.jy,A.iv,A.iw])
r(A.qd,A.tg)
q(A.dV,[A.e9,A.hE,A.h8,A.iG,A.jG,A.iX,A.dq,A.jO,A.jM,A.jR,A.hn,A.jY,A.ji,A.iI,A.fL,A.jL])
q(A.hn,[A.k3,A.iY])
q(A.qu,[A.xh,A.zc])
r(A.mR,A.pf)
q(A.bC,[A.lY,A.hk,A.fZ,A.hq,A.eE,A.eu,A.fA])
r(A.jI,A.lY)
q(A.dk,[A.am,A.cg,A.dF,A.db])
r(A.fF,A.oW)
r(A.zI,A.Bo)
q(A.b9,[A.dt,A.cX,A.f_,A.bM,A.ce,A.cf,A.dj,A.e0,A.dK,A.hz,A.dc,A.e3])
q(A.fE,[A.nt,A.nd])
r(A.vt,A.rK)
r(A.mX,A.f5)
q(A.hM,[A.k8,A.f6])
r(A.pO,A.oG)
r(A.oF,A.pO)
r(A.ui,A.yp)
q(A.ui,[A.x2,A.yZ,A.zi])
r(A.mq,A.nN)
q(A.ht,[A.hW,A.nP])
r(A.hs,A.nQ)
r(A.dp,A.nP)
r(A.hu,A.eC)
r(A.lC,A.bh)
q(A.lC,[A.mE,A.dP,A.hr])
q(A.lB,[A.pa,A.pA])
r(A.pr,A.rr)
r(A.ps,A.pr)
r(A.nz,A.ps)
r(A.pv,A.pu)
r(A.ci,A.pv)
q(A.bf,[A.f7,A.bj])
r(A.hH,A.ya)
q(A.bj,[A.kp,A.kj,A.hS,A.ia])
r(A.x9,A.xU)
r(A.rs,A.lW)
r(A.dE,A.hj)
r(A.hP,A.x9)
q(A.kR,[A.p2,A.py])
r(A.nY,A.hs)
r(A.pc,A.hD)
r(A.cI,A.pc)
s(A.hF,A.oo)
s(A.kS,A.M)
s(A.kw,A.M)
s(A.kx,A.iW)
s(A.ky,A.M)
s(A.kz,A.iW)
s(A.d4,A.kc)
s(A.i7,A.pF)
s(A.kN,A.pJ)
s(A.pT,A.nX)
s(A.p_,A.rt)
s(A.p0,A.rJ)
s(A.pf,A.qH)
s(A.oW,A.qI)
s(A.pO,A.oE)
s(A.pr,A.M)
s(A.ps,A.na)
s(A.pu,A.op)
s(A.pv,A.W)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ae:"double",b4:"num",j:"String",P:"bool",X:"Null",q:"List",k:"Object",F:"Map",N:"JSObject"},mangledNames:{},types:["~()","~(N)","X()","y<~>()","y<X>(bR)","y<~>(bR)","X(k,aM)","j(j)","h9(~)","~(i)","i()","~(q<i>)","V<j,@>(@,@)","P(j)","~(k,aM)","P(k?)","0&()","~(k?)","i(by,i)","~(~())","X(k)","y<b2>()","X(N)","y<X>()","P(@)","P(bu)","y<~>(kr)","~(@)","X(@)","~(ds)","V<j,k?>(@,@)","P(c3)","y<X>(rL)","j(@)","k?(k?)","P(k?,k?)","i(k?)","N()","~(j,j)","P(bA)","k?(F<j,k?>)","@(@)","y<k?>(oH,hK)","~(k?,k?)","X(~)","~(a5)","~(dm,i,i,i)","y<~>(~)","i(by)","P()","i(@,@)","~(j,k?)","bu()","P(dO)","y<q<j>>()","j(F<j,k?>)","y<@>()","X(k?)","P(b6)","y<i>()","ae(i)","y<cR>(j)","i(bh,i,i,i)","i(bh,i)","i(cR)","i(by,i,i,bD)","j(eS)","~(j,@)","~(dm,i)","@()","~(@,@)","~(k[aM?])","@(j)","y<bx<~>>()","~(~)","y<f5>()","y<F<j,k?>>(F<j,k?>)","hi(cA)","fG(i)","fI(q<bt>)","fH(bt?)","fT(q<bu>)","fS(i)","fQ(i)","hv(P)","h4(q<j>)","y<cA>()","X(@,aM)","y<q<cW>>()","ho(q<cW>)","P(j,j)","hC(~)","P(i2)","~(F<j,k?>?)","~(q<F<j,k?>>)","i(j)","ad<q<i>>()","X(j,j[k?])","~(f2)","~(q<bt>)","F<j,k?>(ci)","~(dX<q<i>>)","k?(yb)","~(i,@)","j(j,j)","fa<@,@>(bN<@>)","y<bu>(bR)","h_()","i(i,i)","i(i,cQ)","P(cQ)","j(cQ)","~(jE)","~(q<cw>)","y<ad<q<i>>>()","j?(F<j,k?>)","V<j,dM>(j,hw)","i(c3,c3)","cV(@)","y<aT?>(jh)","y<~>?()","P(dW)","y<q<j>>(F<j,k?>)","i(i)","j(cy)","j()","P(cy)","b6()","dO()","fV()","eK()","c3()","w<@>?()","y<F<j,k?>?>(j)","P(i)","j(i,i)","y<e5>(j)","bt()","i(e5)","~(ct)","aF(i)","y<bg>(bg)","bg(bg)","bg(k)","X(bg)","y<X>(~)","~(j)","aT(aT?)","aT/(k?)","y<k?>(k?)","F<j,k?>(q<k?>)","k?(aT?)","y<i>(bR)","~(@,aM)","P(cN)","j(i[i])","cZ()","cz()","eW()","P(e7)","j(cu)","P(cu)","0&(j,i?)","y<@>(bR)","q<F<j,k?>>(cA)","y<P>(j)","y<~>(j)","q<eY>(k?)","P(ca<k?>)","P(b7)","q<cU>(k?)","~(cc)","F<k?,k?>(j)","q<k?>(j)","q<k?>()","k(k?{where!j})","j(j?)","j?()","i(cJ)","i(+(j,k),+(j,k))","k(cJ)","k(bA)","i(bA,bA)","q<cJ>(V<k,q<bA>>)","dp()","j(k?)","~(i,j,i)","~(Ec,q<Ed>)","~(j,j?)","~(S,aw,S,~())","~(bD,i)","by?(bh,i,i,i,i)","i(bh,i,i)","X(bZ,bZ)","i(bh?,i,i)","P(j,k?)","i(+(j,k?),+(j,k?))","~(e2)","i(by,bD)","k?(~)","i(by,i,i)","i(i())","~(~(i,j,i),i,i,i,bD)","y<F<j,k?>?>()","hl(F<j,k?>?)","i(dm,i,i,i,i)","i(i(i),i)","i(Eg,i)","i(Eg,i,i)","y<q<F<j,k?>?>>()","hm(q<F<j,k?>?>)","N(z<k?>)","X(~())","y<q<k?>>()","N(N?)","~(ex)","y<~>(i,d0)","y<~>(i)","d0()","y<N>(j)","X(dd)","y<X>(N)","N(k)","X(k?,aM)","j?(k?)","~(eC)","N(N)","y<N>()","@(@,j)","y<b4?>()","y<bx<cE>>()","~(cE)","P(hR)","y<j>()","y<eD>()","0&(k?,aM)","~(dX<N>)","he(i)","~(S?,aw?,S,k,aM)","0^(S?,aw?,S,0^())<k?>","0^(S?,aw?,S,0^(1^),1^)<k?,k?>","0^(S?,aw?,S,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(S,aw,S,0^())<k?>","0^(1^)(S,aw,S,0^(1^))<k?,k?>","0^(1^,2^)(S,aw,S,0^(1^,2^))<k?,k?,k?>","aq?(S,aw,S,k,aM?)","~(S?,aw?,S,~())","ds(S,aw,S,aF,~())","ds(S,aw,S,aF,~(ds))","~(S,aw,S,j)","S(S?,aw?,S,k9?,F<k?,k?>?)","0^(0^,0^)<b4>","hL(+blobs,rows(i,i))","fK(i)","fM(q<k?>)","fW(q<j>)","fz(b4?)","fP(j)","bu(F<j,k?>)","aI()","P(bC?)","bt(F<j,k?>)","b9(k?{where!j})","P(+(i,j))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a_&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.kA&&a.b(c.a)&&b.b(c.b),"2;blobs,rows":(a,b)=>c=>c instanceof A.po&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.kB&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.i1&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.pp&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ej&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fh&&A.It(a,b.a),"6;blocked,conflicts,hidden,pending,quarantineError,quarantined":a=>b=>b instanceof A.pq&&A.It(a,b.a)}}
A.Mp(v.typeUniverse,JSON.parse('{"bZ":"dT","nj":"dT","e8":"dT","PW":"h6","z":{"q":["1"],"aJ":[],"L":["1"],"N":[],"o":["1"],"bk":["1"]},"mL":{"P":[],"an":[]},"j7":{"X":[],"an":[]},"aJ":{"N":[]},"dT":{"aJ":[],"N":[]},"mJ":{"jQ":[]},"ul":{"z":["1"],"q":["1"],"aJ":[],"L":["1"],"N":[],"o":["1"],"bk":["1"]},"eM":{"ae":[],"b4":[],"ay":["b4"]},"j6":{"ae":[],"i":[],"b4":[],"ay":["b4"],"an":[]},"mM":{"ae":[],"b4":[],"ay":["b4"],"an":[]},"dR":{"j":[],"ay":["j"],"bk":["@"],"an":[]},"ed":{"o":["2"]},"ey":{"ed":["1","2"],"o":["2"],"o.E":"2"},"kk":{"ey":["1","2"],"ed":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"kh":{"M":["2"],"q":["2"],"ed":["1","2"],"L":["2"],"o":["2"]},"bW":{"kh":["1","2"],"M":["2"],"q":["2"],"ed":["1","2"],"L":["2"],"o":["2"],"M.E":"2","o.E":"2"},"ez":{"W":["3","4"],"F":["3","4"],"W.V":"4","W.K":"3"},"dS":{"aj":[]},"nu":{"aj":[]},"cv":{"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"L":{"o":["1"]},"a1":{"L":["1"],"o":["1"]},"cF":{"a1":["1"],"L":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"cx":{"o":["2"],"o.E":"2"},"eH":{"cx":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"Z":{"a1":["2"],"L":["2"],"o":["2"],"a1.E":"2","o.E":"2"},"ap":{"o":["1"],"o.E":"1"},"iS":{"o":["2"],"o.E":"2"},"f3":{"o":["1"],"o.E":"1"},"iO":{"f3":["1"],"L":["1"],"o":["1"],"o.E":"1"},"dn":{"o":["1"],"o.E":"1"},"fN":{"dn":["1"],"L":["1"],"o":["1"],"o.E":"1"},"eI":{"L":["1"],"o":["1"],"o.E":"1"},"eb":{"o":["1"],"o.E":"1"},"de":{"o":["+(i,1)"],"o.E":"+(i,1)"},"eG":{"de":["1"],"L":["+(i,1)"],"o":["+(i,1)"],"o.E":"+(i,1)"},"hF":{"M":["1"],"q":["1"],"L":["1"],"o":["1"]},"bG":{"a1":["1"],"L":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"iK":{"d1":["1","2"],"F":["1","2"]},"fJ":{"F":["1","2"]},"aE":{"fJ":["1","2"],"F":["1","2"]},"fe":{"o":["1"],"o.E":"1"},"j_":{"fJ":["1","2"],"F":["1","2"]},"iL":{"cC":["1"],"f0":["1"],"L":["1"],"o":["1"]},"dJ":{"cC":["1"],"f0":["1"],"L":["1"],"o":["1"]},"jz":{"du":[],"aj":[]},"mN":{"aj":[]},"on":{"aj":[]},"nc":{"I":[]},"kD":{"aM":[]},"nD":{"aj":[]},"bO":{"W":["1","2"],"F":["1","2"],"W.V":"2","W.K":"1"},"T":{"L":["1"],"o":["1"],"o.E":"1"},"av":{"L":["1"],"o":["1"],"o.E":"1"},"aK":{"L":["V<1,2>"],"o":["V<1,2>"],"o.E":"V<1,2>"},"j9":{"bO":["1","2"],"W":["1","2"],"F":["1","2"],"W.V":"2","W.K":"1"},"j8":{"bO":["1","2"],"W":["1","2"],"F":["1","2"],"W.V":"2","W.K":"1"},"i_":{"nv":[],"eS":[]},"oK":{"o":["nv"],"o.E":"nv"},"hx":{"eS":[]},"pC":{"o":["eS"],"o.E":"eS"},"h5":{"aJ":[],"N":[],"ex":[],"an":[]},"h6":{"aJ":[],"N":[],"ex":[],"an":[]},"ju":{"aJ":[],"N":[]},"pK":{"ex":[]},"jt":{"aJ":[],"DI":[],"N":[],"an":[]},"h7":{"c_":["1"],"aJ":[],"N":[],"bk":["1"]},"dZ":{"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bk":["ae"],"o":["ae"]},"c1":{"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"]},"n5":{"dZ":[],"tA":[],"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bk":["ae"],"o":["ae"],"an":[],"M.E":"ae"},"n6":{"dZ":[],"tB":[],"M":["ae"],"q":["ae"],"c_":["ae"],"aJ":[],"L":["ae"],"N":[],"bk":["ae"],"o":["ae"],"an":[],"M.E":"ae"},"n7":{"c1":[],"uf":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"n8":{"c1":[],"ug":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"n9":{"c1":[],"uh":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"jv":{"c1":[],"yU":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"jw":{"c1":[],"yV":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"jx":{"c1":[],"yW":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"eU":{"c1":[],"d0":[],"M":["i"],"q":["i"],"c_":["i"],"aJ":[],"L":["i"],"N":[],"bk":["i"],"o":["i"],"an":[],"M.E":"i"},"p5":{"aj":[]},"kI":{"du":[],"aj":[]},"aq":{"aj":[]},"w":{"y":["1"]},"dX":{"bN":["1"]},"kH":{"ds":[]},"ka":{"iH":["1"]},"i6":{"o":["1"],"o.E":"1"},"b0":{"bi":["1"],"i5":["1"],"ad":["1"],"ad.T":"1"},"f8":{"ee":["1"],"bb":["1"],"bx":["1"],"bb.T":"1"},"kg":{"bN":["1"]},"kb":{"kg":["1"],"bN":["1"]},"od":{"I":[]},"jD":{"aj":[]},"f9":{"iH":["1"]},"aG":{"f9":["1"],"iH":["1"]},"as":{"f9":["1"],"iH":["1"]},"k_":{"ad":["1"]},"ek":{"bN":["1"]},"d4":{"kc":["1"],"ek":["1"],"bN":["1"]},"i7":{"ek":["1"],"bN":["1"]},"bi":{"i5":["1"],"ad":["1"],"ad.T":"1"},"ee":{"bb":["1"],"bx":["1"],"bb.T":"1"},"kE":{"oJ":["1"]},"bb":{"bx":["1"],"bb.T":"1"},"i5":{"ad":["1"]},"hU":{"bx":["1"]},"kl":{"ad":["1"],"ad.T":"1"},"dz":{"ad":["1"],"ad.T":"1"},"kv":{"d4":["1"],"kc":["1"],"ek":["1"],"dX":["1"],"bN":["1"]},"ko":{"ad":["2"]},"hX":{"bb":["2"],"bx":["2"],"bb.T":"2"},"ff":{"ko":["1","2"],"ad":["2"],"ad.T":"2"},"km":{"bN":["1"]},"i3":{"bb":["2"],"bx":["2"],"bb.T":"2"},"kf":{"ad":["2"],"ad.T":"2"},"pP":{"S":[]},"oZ":{"S":[]},"pt":{"S":[]},"ib":{"aw":[]},"dy":{"W":["1","2"],"F":["1","2"],"W.V":"2","W.K":"1"},"ef":{"dy":["1","2"],"W":["1","2"],"F":["1","2"],"W.V":"2","W.K":"1"},"ki":{"dy":["1","2"],"W":["1","2"],"F":["1","2"],"W.V":"2","W.K":"1"},"fd":{"L":["1"],"o":["1"],"o.E":"1"},"kt":{"bO":["1","2"],"W":["1","2"],"F":["1","2"],"W.V":"2","W.K":"1"},"cK":{"cC":["1"],"f0":["1"],"L":["1"],"o":["1"]},"eO":{"o":["1"],"o.E":"1"},"M":{"q":["1"],"L":["1"],"o":["1"]},"W":{"F":["1","2"]},"ku":{"L":["2"],"o":["2"],"o.E":"2"},"jg":{"F":["1","2"]},"d1":{"F":["1","2"]},"jc":{"a1":["1"],"L":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"cC":{"f0":["1"],"L":["1"],"o":["1"]},"kC":{"cC":["1"],"f0":["1"],"L":["1"],"o":["1"]},"fa":{"bN":["1"]},"pd":{"W":["j","@"],"F":["j","@"],"W.V":"@","W.K":"j"},"pe":{"a1":["j"],"L":["j"],"o":["j"],"a1.E":"j","o.E":"j"},"lo":{"eJ":[]},"pI":{"aH":["j","q<i>"]},"lp":{"aH":["j","q<i>"],"aH.T":"q<i>"},"iz":{"aH":["q<i>","j"],"aH.T":"j"},"lw":{"aH":["j","q<i>"],"aH.T":"q<i>"},"ja":{"aj":[]},"mO":{"aj":[]},"mQ":{"aH":["k?","j"],"aH.T":"j"},"mP":{"aH":["j","k?"],"aH.T":"k?"},"mT":{"eJ":[]},"mU":{"aH":["j","q<i>"],"aH.T":"q<i>"},"ot":{"eJ":[]},"ou":{"aH":["j","q<i>"],"aH.T":"q<i>"},"k4":{"aH":["q<i>","j"],"aH.T":"j"},"Fu":{"ay":["Fu"]},"aI":{"ay":["aI"]},"ae":{"b4":[],"ay":["b4"]},"aF":{"ay":["aF"]},"i":{"b4":[],"ay":["b4"]},"q":{"L":["1"],"o":["1"]},"b4":{"ay":["b4"]},"nv":{"eS":[]},"f0":{"L":["1"],"o":["1"]},"j":{"ay":["j"]},"aQ":{"ay":["Fu"]},"lq":{"aj":[]},"du":{"aj":[]},"bL":{"aj":[]},"dl":{"aj":[]},"j1":{"dl":[],"aj":[]},"d2":{"aj":[]},"om":{"d2":[],"aj":[]},"bw":{"aj":[]},"lM":{"aj":[]},"nf":{"aj":[]},"jX":{"aj":[]},"p6":{"I":[]},"bv":{"I":[]},"mH":{"d2":[],"I":[],"aj":[]},"pD":{"aM":[]},"jP":{"o":["i"],"o.E":"i"},"kO":{"oq":[]},"cn":{"oq":[]},"p1":{"oq":[]},"nb":{"I":[]},"uh":{"q":["i"],"L":["i"],"o":["i"]},"d0":{"q":["i"],"L":["i"],"o":["i"]},"yW":{"q":["i"],"L":["i"],"o":["i"]},"uf":{"q":["i"],"L":["i"],"o":["i"]},"yU":{"q":["i"],"L":["i"],"o":["i"]},"ug":{"q":["i"],"L":["i"],"o":["i"]},"yV":{"q":["i"],"L":["i"],"o":["i"]},"tA":{"q":["ae"],"L":["ae"],"o":["ae"]},"tB":{"q":["ae"],"L":["ae"],"o":["ae"]},"a8":{"F":["2","3"]},"hp":{"i8":["1","f0<1>"],"i8.E":"1"},"mz":{"aH":["q<i>","cw"]},"pw":{"aH":["q<i>","cw"],"aH.T":"cw"},"jT":{"I":[]},"nH":{"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"nx":{"I":[]},"lx":{"DJ":[]},"lE":{"DJ":[]},"dH":{"ad":["q<i>"],"ad.T":"q<i>"},"eA":{"I":[]},"nW":{"k0":[]},"iD":{"a8":["j","j","1"],"F":["j","1"],"a8.V":"1","a8.K":"j","a8.C":"j"},"jC":{"nZ":[]},"jF":{"nZ":[]},"dN":{"I":[]},"mw":{"ah":[]},"iT":{"ah":[]},"fT":{"ah":[]},"ms":{"ah":[]},"fS":{"ah":[]},"fQ":{"ah":[]},"hv":{"ah":[]},"h9":{"ah":[]},"iC":{"ah":[]},"mB":{"ah":[]},"hl":{"ah":[]},"hm":{"ah":[]},"h4":{"ah":[]},"hi":{"ah":[]},"fK":{"ah":[]},"fM":{"ah":[]},"fW":{"ah":[]},"fz":{"ah":[]},"fP":{"ah":[]},"ho":{"ah":[]},"fI":{"ah":[]},"fH":{"ah":[]},"hC":{"ah":[]},"hJ":{"ah":[]},"he":{"ah":[]},"fG":{"ah":[]},"hL":{"ah":[]},"o6":{"ah":[]},"o2":{"ah":[]},"o9":{"ah":[]},"jH":{"I":[]},"lK":{"cc":[]},"lS":{"cc":[]},"k6":{"cc":[]},"fR":{"cc":[]},"jb":{"cU":[]},"jy":{"cU":[]},"iv":{"cU":[]},"iw":{"cU":[]},"o7":{"cc":[]},"lt":{"cc":[]},"f4":{"I":[]},"fi":{"I":[]},"iN":{"rL":[]},"dV":{"I":[]},"e9":{"I":[]},"hE":{"I":[]},"h8":{"I":[]},"iG":{"I":[]},"jG":{"I":[]},"iX":{"I":[]},"dq":{"I":[]},"jO":{"I":[]},"jM":{"I":[]},"jR":{"I":[]},"hn":{"I":[]},"k3":{"I":[]},"iY":{"I":[]},"jY":{"I":[]},"ji":{"I":[]},"iI":{"I":[]},"fL":{"I":[]},"jL":{"I":[]},"ew":{"I":[]},"fC":{"I":[]},"jI":{"bC":[]},"am":{"dk":[]},"cg":{"dk":[]},"dF":{"dk":[]},"db":{"dk":[]},"hN":{"I":[]},"dh":{"I":[]},"hk":{"bC":[]},"fZ":{"bC":[]},"hq":{"bC":[]},"eE":{"bC":[]},"eu":{"bC":[]},"fA":{"bC":[]},"lY":{"bC":[]},"b9":{"I":[]},"dt":{"I":[]},"cX":{"I":[]},"f_":{"I":[]},"bM":{"I":[]},"ce":{"I":[]},"cf":{"I":[]},"dj":{"I":[]},"e0":{"I":[]},"dK":{"I":[]},"hz":{"I":[]},"dc":{"I":[]},"e3":{"I":[]},"hd":{"nZ":[]},"pk":{"G9":[]},"mX":{"f5":[]},"oY":{"oH":[],"GB":[]},"k8":{"hM":[]},"f6":{"hM":[]},"nh":{"I":[]},"mq":{"cD":[],"ay":["cD"]},"hW":{"dp":[],"ay":["nO"]},"cD":{"ay":["cD"]},"nN":{"cD":[],"ay":["cD"]},"nO":{"ay":["nO"]},"nP":{"ay":["nO"]},"nQ":{"I":[]},"hs":{"bv":[],"I":[]},"ht":{"ay":["nO"]},"dp":{"ay":["nO"]},"cj":{"I":[]},"yb":{"q":["k?"],"L":["k?"],"o":["k?"]},"ow":{"M":["k?"],"yb":[],"q":["k?"],"L":["k?"],"o":["k?"],"M.E":"k?"},"hu":{"eC":[]},"mE":{"bh":[]},"pa":{"k5":[],"by":[]},"ci":{"W":["j","@"],"F":["j","@"],"W.V":"@","W.K":"j"},"nz":{"M":["ci"],"q":["ci"],"L":["ci"],"o":["ci"],"M.E":"ci"},"dw":{"I":[]},"lC":{"bh":[]},"lB":{"k5":[],"by":[]},"f7":{"bf":["f7"],"bf.E":"f7"},"dx":{"Ed":[]},"ea":{"Ec":[]},"hI":{"M":["dx"],"q":["dx"],"L":["dx"],"o":["dx"],"M.E":"dx"},"iy":{"ad":["1"],"ad.T":"1"},"dP":{"bh":[]},"bj":{"bf":["bj"]},"pb":{"k5":[],"by":[]},"kp":{"bj":[],"bf":["bj"],"bf.E":"bj"},"kj":{"bj":[],"bf":["bj"],"bf.E":"bj"},"hS":{"bj":[],"bf":["bj"],"bf.E":"bj"},"ia":{"bj":[],"bf":["bj"],"bf.E":"bj"},"hr":{"bh":[]},"pA":{"k5":[],"by":[]},"iF":{"I":[]},"eF":{"M":["k?"],"q":["k?"],"L":["k?"],"o":["k?"],"M.E":"k?"},"hj":{"I":[]},"dE":{"I":[]},"hP":{"FB":[]},"p2":{"kR":["N"]},"py":{"kR":["N"]},"nY":{"bv":[],"I":[]},"cI":{"hD":["i"],"M":["i"],"q":["i"],"L":["i"],"o":["i"],"M.E":"i"},"hD":{"M":["1"],"q":["1"],"L":["1"],"o":["1"]},"pc":{"hD":["i"],"M":["i"],"q":["i"],"L":["i"],"o":["i"]},"hV":{"ad":["1"],"ad.T":"1"},"kn":{"bx":["1"]}}'))
A.Mo(v.typeUniverse,JSON.parse('{"iW":1,"oo":1,"hF":1,"kS":2,"iL":1,"h7":1,"bN":1,"k_":1,"pF":1,"p4":1,"pJ":2,"jg":2,"kC":1,"kN":2,"lH":1,"lJ":2,"kG":1,"na":1,"op":2,"nw":1,"fE":1,"JF":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aa
return{fM:s("@<@>"),ie:s("JF<k?>"),ko:s("eu"),bG:s("ev"),om:s("iy<z<k?>>"),hw:s("ct"),lo:s("ex"),fW:s("DI"),jA:s("iC"),fo:s("iD<j>"),iv:s("a5"),eg:s("FB"),dF:s("DJ()"),E:s("cv"),bU:s("ca<k?>"),fw:s("eC"),bP:s("ay<@>"),p6:s("eD"),br:s("iH<N>"),n8:s("bt"),pb:s("bC"),x:s("aE<j,k?>"),M:s("dJ<j>"),d_:s("eE"),lp:s("m2"),O:s("L<@>"),C:s("aj"),fq:s("cc"),mA:s("I"),eZ:s("mf"),d9:s("b6"),oX:s("mn"),A:s("bu"),k4:s("iU"),f6:s("cQ"),pk:s("tA"),kI:s("tB"),Y:s("bv"),gY:s("PS"),mi:s("F<j,k?>/(F<j,k?>)"),nW:s("y<N>"),fB:s("y<q<j>>"),b3:s("y<F<j,k?>>"),fr:s("y<aT>"),mj:s("y<X>"),g7:s("y<@>"),fP:s("y<dd?>"),d3:s("y<F<j,k?>?>"),op:s("y<aT?>"),n1:s("y<k?>(oH,hK)"),jN:s("y<hH?>"),co:s("dM"),w:s("cR"),cF:s("dP"),m6:s("uf"),bW:s("ug"),jx:s("uh"),nZ:s("j5<@>"),e7:s("o<@>"),gi:s("z<a5>"),aw:s("z<ca<@>>"),oq:s("z<ca<k?>>"),oS:s("z<lO>"),i5:s("z<cw>"),mK:s("z<b6>"),kB:s("z<mt>"),iw:s("z<y<~>>"),mr:s("z<dO>"),kG:s("z<N>"),bi:s("z<q<F<j,k?>>>"),h2:s("z<q<k>>"),ae:s("z<q<eY>>"),dO:s("z<q<k?>>"),ic:s("z<F<j,k>>"),d:s("z<F<j,k?>>"),e8:s("z<n3>"),i7:s("z<eV>"),hf:s("z<k>"),ox:s("z<eW>"),fi:s("z<cy>"),my:s("z<cz>"),k:s("z<dk>"),eK:s("z<cU>"),k1:s("z<hf>"),g2:s("z<hg>"),bo:s("z<jK>"),cM:s("z<eY>"),gc:s("z<nr>"),eb:s("z<e2>"),fU:s("z<+controller,sync(dX<cE>,P)>"),lw:s("z<+controller,sync(dX<~>,P)>"),kC:s("z<+(e4,j)>"),jO:s("z<+(j,F<j,k?>)>"),l5:s("z<+(j,k)>"),fj:s("z<+(j,b6?)>"),iE:s("z<+(j,k?)>"),nw:s("z<+(i,F<j,k?>)>"),kW:s("z<+(i,j,F<j,k?>)>"),aY:s("z<+(hQ,k?,k?,aM?)>"),g1:s("z<cV>"),cP:s("z<nF>"),kj:s("z<cW>"),lE:s("z<hu>"),c0:s("z<c3>"),dw:s("z<bx<@>>"),s:s("z<j>"),en:s("z<hy>"),bs:s("z<d0>"),fC:s("z<ba>"),m2:s("z<GB>"),az:s("z<hP>"),i4:s("z<hQ>"),fV:s("z<hR>"),pg:s("z<bA>"),dg:s("z<cJ>"),p8:s("z<pj>"),mc:s("z<i2>"),gy:s("z<i4>"),gR:s("z<pL>"),gk:s("z<ae>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<aq?>"),eU:s("z<F<j,k?>?>"),c:s("z<k?>"),mf:s("z<j?>"),iy:s("bk<@>"),T:s("j7"),m:s("N"),bJ:s("bD"),g:s("bZ"),dX:s("c_<@>"),aq:s("aJ"),fZ:s("mR"),kk:s("eO<f7>"),p3:s("eO<bj>"),hI:s("eP<@>"),ba:s("q<bt>"),ck:s("q<bu>"),ip:s("q<N>"),ew:s("q<F<j,k>>"),J:s("q<F<j,k?>>"),eT:s("q<eV>"),hg:s("q<eW>"),a6:s("q<cz>"),jX:s("q<hg>"),kR:s("q<cV>"),fE:s("q<cW>"),a:s("q<j>"),bR:s("q<hy>"),j:s("q<@>"),L:s("q<i>"),oz:s("q<F<j,k?>?>"),kS:s("q<k?>"),jD:s("jd"),ia:s("V<j,dM>"),ag:s("V<j,j>"),I:s("V<j,@>"),B:s("V<j,k?>"),a3:s("jf<@,@>"),cy:s("F<j,cZ>"),dV:s("F<j,i>"),f:s("F<@,@>"),G:s("F<j,k?>"),d2:s("F<k?,k?>"),lJ:s("Z<cu,j>"),iZ:s("Z<j,@>"),r:s("aT"),i:s("h5"),dQ:s("dZ"),aj:s("c1"),Z:s("eU"),P:s("X"),K:s("k"),k5:s("cy"),dZ:s("cz"),i0:s("cA"),jS:s("dk"),oj:s("hd"),ot:s("np"),gq:s("hf"),e:s("b2"),b0:s("dl"),lZ:s("PY"),oZ:s("e2"),aK:s("+()"),ja:s("+(N,iJ)"),hP:s("+(F<j,cZ>,F<j,F<j,k?>>)"),cU:s("+(e4,j)"),mk:s("+(P,N)"),kO:s("+basicSupport,supportsReadWriteUnsafe(P,P)"),no:s("+blobs,rows(i,i)"),mt:s("+(N?,N)"),po:s("+(k?,i)"),fe:s("+(k?,k?)"),g0:s("+(F<j,k?>?,cZ?,cz?)"),iD:s("+blocked,conflicts,hidden,pending,quarantineError,quarantined(i,i,i,i,j?,i)"),lu:s("nv"),h:s("cV"),V:s("ah"),hF:s("bG<j>"),cu:s("hp<@>"),aJ:s("f0<j>"),g_:s("hr"),hq:s("cD"),ol:s("dp"),gE:s("nR"),l:s("aM"),nv:s("nT"),h3:s("hw"),ha:s("bx<cE>"),dz:s("bx<@>"),ey:s("bx<~>"),bv:s("nV"),v:s("ad<q<i>>"),lI:s("e5"),hL:s("k0"),N:s("j"),f_:s("hy"),k6:s("k1"),o8:s("nZ"),n6:s("ck"),fD:s("bg"),o:s("cZ"),kf:s("f2"),hU:s("ds"),q:s("oe"),dH:s("an"),do:s("du"),hM:s("yU"),mC:s("yV"),oR:s("cI"),nn:s("yW"),p:s("d0"),cx:s("e8"),ph:s("d1<j,j>"),eo:s("d2"),jJ:s("oq"),e6:s("bh"),j2:s("k5"),R:s("hH"),fA:s("ba"),gx:s("ap<cN>"),mz:s("ap<b7>"),mE:s("ap<e7>"),U:s("eb<j>"),n:s("f5"),bp:s("f6"),be:s("oH"),ec:s("hM"),iq:s("aG<d0>"),jk:s("aG<@>"),ho:s("aG<i>"),bF:s("aG<k?>"),Q:s("aG<~>"),oW:s("fa<@,@>"),nz:s("fb<N>"),d4:s("hV<N>"),nI:s("w<dd>"),a7:s("w<N>"),af:s("w<F<j,k?>>"),hl:s("w<0&>"),os:s("w<j>"),jz:s("w<d0>"),g5:s("w<P>"),_:s("w<@>"),hy:s("w<i>"),ji:s("w<F<j,k?>?>"),ny:s("w<k?>"),D:s("w<~>"),nf:s("bA"),mp:s("ef<k?,k?>"),mB:s("hZ"),k8:s("dz<N>"),fb:s("dz<q<i>>"),mI:s("pz<cw>"),jy:s("el<cE,~()>"),ah:s("el<~,P()>"),lU:s("el<~,~()>"),hT:s("c5<N>"),lj:s("c5<q<i>>"),aP:s("as<dd>"),h1:s("as<N>"),ex:s("as<P>"),F:s("as<~>"),g8:s("pG"),y:s("P"),W:s("ae"),z:s("@"),mq:s("@(k)"),ng:s("@(k,aM)"),S:s("i"),ma:s("bt?"),gK:s("y<X>?"),fm:s("dd?"),mU:s("N?"),bE:s("q<ca<@>>?"),lH:s("q<@>?"),b:s("F<j,k?>?"),nh:s("aT?"),X:s("k?"),ad:s("G9?"),dY:s("cz?"),lY:s("jJ?"),jB:s("cV?"),jv:s("j?"),f8:s("cZ?"),a_:s("cI?"),he:s("hH?"),dd:s("bA?"),o9:s("P?"),dA:s("ae?"),u:s("i?"),jh:s("b4?"),cZ:s("b4"),H:s("~"),cj:s("~()"),i6:s("~(k)"),b9:s("~(k,aM)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cy=J.mI.prototype
B.b=J.z.prototype
B.c=J.j6.prototype
B.w=J.eM.prototype
B.a=J.dR.prototype
B.cz=J.bZ.prototype
B.cA=J.aJ.prototype
B.aF=A.jt.prototype
B.dn=A.jv.prototype
B.y=A.jw.prototype
B.f=A.eU.prototype
B.bi=J.nj.prototype
B.aR=J.e8.prototype
B.at=new A.dE("Operation was cancelled")
B.ab=new A.fy(0,"visible")
B.aU=new A.fy(1,"hidden")
B.bB=new A.lm(1)
B.eD=new A.lm(-1)
B.ac=new A.ev(0,"applied")
B.ad=new A.ev(1,"quarantined")
B.bC=new A.ev(2,"conflict")
B.ae=new A.ev(3,"skipped")
B.bD=new A.lp(127)
B.Q=new A.cu(0,"changed")
B.au=new A.cu(1,"deleted")
B.bG=new A.iz(!1)
B.R=new A.lv(B.bG)
B.bH=new A.iz(!0)
B.bF=new A.lv(B.bH)
B.cd=new A.kl(A.aa("kl<q<i>>"))
B.bI=new A.dH(B.cd)
B.bJ=new A.j3(A.Ph(),A.aa("j3<i>"))
B.bK=new A.fA()
B.bL=new A.eu()
B.bM=new A.lt()
B.af=new A.lw()
B.bN=new A.lF()
B.bO=new A.lI()
B.aV=new A.rI()
B.bP=new A.m6(A.aa("m6<0&>"))
B.p=new A.m5()
B.aW=new A.m9(A.aa("m9<0&>"))
B.aX=new A.ma()
B.S=new A.ma()
B.bQ=new A.mA()
B.bR=new A.mH()
B.aY=function getTagFallback(o) {
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
B.aZ=function(hooks) { return hooks; }

B.h=new A.un()
B.bY=new A.vt()
B.bZ=new A.fZ()
B.l=new A.h9()
B.c_=new A.nf()
B.b_=new A.wQ()
B.c0=new A.x0()
B.c1=new A.no()
B.T=new A.hk()
B.d=new A.y4()
B.c2=new A.hq()
B.c3=new A.nS()
B.c4=new A.o0()
B.c5=new A.o1()
B.c6=new A.o3()
B.c7=new A.o8()
B.c8=new A.oa()
B.o=new A.ot()
B.e=new A.ou()
B.c9=new A.ov()
B.ca=new A.ox()
B.cb=new A.oD()
B.cc=new A.zI()
B.u=new A.Ar()
B.ag=new A.AB()
B.av=new A.B8()
B.b0=new A.fi()
B.i=new A.pt()
B.m=new A.pw()
B.ce=new A.BL()
B.U=new A.pD()
B.ah=new A.dI(0,"create")
B.A=new A.dI(1,"update")
B.cf=new A.dI(2,"archive")
B.cg=new A.dI(3,"restore")
B.aw=new A.dI(4,"purge")
B.ch=new A.dI(5,"hide")
B.H=new A.iE(0,"local")
B.ax=new A.iE(1,"remote")
B.ai=new A.iE(2,"resolution")
B.ci=new A.lN(3,"ignore")
B.V=new A.lN(4,"replace")
B.E={}
B.dd=new A.aE(B.E,[],A.aa("aE<j,bC>"))
B.aE=new A.dW(0,"conflict")
B.cj=new A.lQ(null,B.dd,!1,B.aE)
B.q=new A.m8(0,"normal")
B.b1=new A.m8(1,"full")
B.I=new A.aF(0)
B.ay=new A.aF(1e6)
B.aj=new A.aF(12e7)
B.b2=new A.aF(16e3)
B.ck=new A.aF(18e8)
B.cl=new A.aF(2e5)
B.b3=new A.aF(3e5)
B.W=new A.aF(3e7)
B.ak=new A.aF(3e8)
B.al=new A.aF(5e5)
B.cm=new A.aF(5e6)
B.eE=new A.aF(6048e8)
B.cn=new A.aF(7776e9)
B.eF=new A.aF(864e8)
B.az=new A.cd(0,"text")
B.X=new A.cd(1,"int")
B.Y=new A.cd(2,"real")
B.B=new A.cd(3,"bool")
B.Z=new A.cd(4,"date")
B.J=new A.cd(5,"enumValue")
B.a_=new A.cd(6,"json")
B.a0=new A.cd(7,"jsonList")
B.K=new A.cd(8,"ref")
B.co=new A.iU(!1)
B.aA=new A.dL("x",1,"opfsExternalLocks")
B.b4=new A.dL("y",2,"opfsExternalLocksWorkaround")
B.b5=new A.fU("/database",0,"database")
B.b6=new A.fU("/database-journal",1,"journal")
B.cu=new A.bv("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cv=new A.bv("fieldCipher envelope must be a map.",null,null)
B.aC=new A.aE(B.E,[],A.aa("aE<j,j>"))
B.cw=new A.eK(B.aC)
B.b7=new A.j2(0,"live")
B.cB=new A.mP(null)
B.cC=new A.mQ(null)
B.cD=new A.dg(0,"textExpected")
B.cE=new A.dg(1,"intExpected")
B.b8=new A.dg(2,"numberExpected")
B.cF=new A.dg(3,"boolExpected")
B.cG=new A.dg(4,"jsonExpected")
B.cH=new A.dg(5,"jsonListExpected")
B.cI=new A.dg(6,"enumValueRejected")
B.cJ=new A.mU(255)
B.aB=new A.eP(B.bP,A.aa("eP<j>"))
B.cK=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b9=s([13,10],t.t)
B.aK=new A.cH(0,"unknown")
B.aL=new A.cH(1,"integer")
B.aM=new A.cH(2,"bigInt")
B.aN=new A.cH(3,"float")
B.aO=new A.cH(4,"text")
B.aP=new A.cH(5,"blob")
B.aQ=new A.cH(6,"$null")
B.bv=new A.cH(7,"boolean")
B.ba=s([B.aK,B.aL,B.aM,B.aN,B.aO,B.aP,B.aQ,B.bv],A.aa("z<cH>"))
B.cL=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.dl=new A.dW(1,"recreate")
B.dm=new A.dW(2,"discardLocal")
B.cM=s([B.aE,B.dl,B.dm],A.aa("z<dW>"))
B.bl=new A.b7(0,"eq")
B.dy=new A.b7(1,"neq")
B.dC=new A.b7(2,"gt")
B.dD=new A.b7(3,"gte")
B.dE=new A.b7(4,"lt")
B.dF=new A.b7(5,"lte")
B.dG=new A.b7(6,"inValues")
B.dH=new A.b7(7,"between")
B.dI=new A.b7(8,"startsWith")
B.dJ=new A.b7(9,"endsWith")
B.dz=new A.b7(10,"contains")
B.dA=new A.b7(11,"isNull")
B.dB=new A.b7(12,"isNotNull")
B.cN=s([B.bl,B.dy,B.dC,B.dD,B.dE,B.dF,B.dG,B.dH,B.dI,B.dJ,B.dz,B.dA,B.dB],A.aa("z<b7>"))
B.cO=s(["lp_sync_row","lp_outbox","lp_op_queue","lp_conflicts","lp_dead_letter","lp_sync_state","lp_file_refs","lp_blobs"],t.s)
B.cs=new A.iV(0,"database")
B.ct=new A.iV(1,"journal")
B.bb=s([B.cs,B.ct],A.aa("z<iV>"))
B.bw=new A.fy(2,"purged")
B.cP=s([B.ab,B.aU,B.bw],A.aa("z<fy>"))
B.z=new A.d_(0,"clean")
B.G=new A.d_(1,"dirty")
B.bs=new A.d_(2,"inFlight")
B.aa=new A.d_(3,"conflict")
B.as=new A.d_(4,"error")
B.dZ=new A.d_(5,"quarantine")
B.e_=new A.d_(6,"blocked")
B.cQ=s([B.z,B.G,B.bs,B.aa,B.as,B.dZ,B.e_],A.aa("z<d_>"))
B.a1=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.am=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cR=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.cx=new A.j2(1,"notArchived")
B.cS=s([B.b7,B.cx],A.aa("z<j2>"))
B.cT=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.cU=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  local_name TEXT,\n  ref_group TEXT,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.bg=new A.jA(0,"fileUpload")
B.bh=new A.jA(1,"fileRemove")
B.cV=s([B.bg,B.bh],A.aa("z<jA>"))
B.cr=new A.dL("s",0,"opfsShared")
B.cp=new A.dL("i",3,"indexedDb")
B.cq=new A.dL("m",4,"inMemory")
B.cW=s([B.cr,B.aA,B.b4,B.cp,B.cq],A.aa("z<dL>"))
B.an=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bx=new A.cN(0,"sum")
B.by=new A.cN(1,"avg")
B.bz=new A.cN(2,"min")
B.bA=new A.cN(3,"max")
B.cX=s([B.bx,B.by,B.bz,B.bA],A.aa("z<cN>"))
B.cY=s([B.az,B.X,B.Y,B.B,B.Z,B.J,B.a_,B.a0,B.K],A.aa("z<cd>"))
B.n=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ao=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.a2=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cZ=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.ha(0,"upsert")
B.N=new A.ha(1,"archive")
B.a6=new A.ha(2,"restore")
B.d_=s([B.v,B.N,B.a6],A.aa("z<ha>"))
B.d2=s([],A.aa("z<dM>"))
B.bc=s([],t.d)
B.d0=s([],t.my)
B.d3=s([],t.kj)
B.r=s([],t.s)
B.d1=s([],t.t)
B.ap=s([],t.dG)
B.k=s([],t.c)
B.d4=s(["*"],t.s)
B.d5=s([B.b5,B.b6],A.aa("z<fU>"))
B.d6=s(["id","updated"],t.s)
B.d7=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bm=new A.e4(0,"opfs")
B.bn=new A.e4(1,"indexedDb")
B.dT=new A.e4(2,"inMemory")
B.d8=s([B.bm,B.bn,B.dT],A.aa("z<e4>"))
B.bt=new A.e7(0,"normal")
B.bu=new A.e7(1,"full")
B.d9=s([B.bt,B.bu],A.aa("z<e7>"))
B.aq=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.bE=new A.cu(2,"authChanged")
B.bd=s([B.Q,B.au,B.bE],A.aa("z<cu>"))
B.da=new A.jd(!0)
B.db=new A.j_([16,10,24,12,32,14],A.aa("j_<i,i>"))
B.dr={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.x=new A.mT()
B.t=new A.lo()
B.dc=new A.aE(B.dr,[B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.x,B.t,B.t,B.t,B.t,B.t,B.t,B.t,B.t,B.t,B.t,B.t,B.o,B.o],A.aa("aE<j,eJ>"))
B.L=new A.aE(B.E,[],A.aa("aE<j,i>"))
B.j=new A.aE(B.E,[],t.x)
B.be=new A.aE(B.E,[],A.aa("aE<i,F<j,k?>/(F<j,k?>)>"))
B.aD=new A.aE(B.E,[],A.aa("aE<k?,k?>"))
B.a5={kind:0}
B.de=new A.aE(B.a5,["setUnionDeletionWins"],t.x)
B.df=new A.aE(B.a5,["appendOnlyList"],t.x)
B.dg=new A.aE(B.a5,["remoteWins"],t.x)
B.dh=new A.aE(B.a5,["appendOnlyLines"],t.x)
B.di=new A.aE(B.a5,["localWins"],t.x)
B.ds={ok:0}
B.dj=new A.aE(B.ds,[!0],A.aa("aE<j,P>"))
B.dk=new A.n_(11,"simpleSuccessResponse",A.aa("n_<N>"))
B.a3=new A.dY(0,"createOrUpdate")
B.a4=new A.dY(1,"createOrUpdateMerge")
B.bf=new A.dY(2,"create")
B.M=new A.dY(3,"update")
B.C=new A.dY(4,"archive")
B.D=new A.dY(5,"restore")
B.eG=new A.wm(2,"readWriteCreate")
B.du=new A.cy("id",!1)
B.dv=new A.cA(B.bc,null,null,!1,!1)
B.bj=new A.nk(0,"native")
B.aG=new A.nk(1,"web")
B.F=new A.b2(0,1,0,0,0,!1)
B.dw=new A.b2(0,0,0,0,1,!1)
B.ar=new A.b2(0,0,0,0,0,!0)
B.a7=new A.b2(0,0,0,0,0,!1)
B.dx=new A.b2(0,0,0,1,0,!1)
B.bk=new A.b2(0,0,1,0,0,!1)
B.a8=new A.b2(1,0,0,0,0,!1)
B.dK=new A.a_("archived",!0)
B.dL=new A.a_("0",B.k)
B.aH=new A.kA(!1,!1)
B.dM=new A.ej(0,0,0)
B.dN=new A.ej(null,null,null)
B.dt={id:0,archived:1,hidden:2,extra:3,rowid:4,_rowid_:5,oid:6}
B.aI=new A.dJ(B.dt,7,t.M)
B.dq={hidden:0}
B.dO=new A.dJ(B.dq,1,t.M)
B.dp={open:0,contract_request:1,contract_event:2,backend_call:3}
B.dP=new A.dJ(B.dp,4,t.M)
B.a9=new A.dJ(B.E,0,t.M)
B.dQ=new A.jW(0,"insert")
B.dR=new A.jW(1,"update")
B.dS=new A.jW(2,"delete")
B.dU=new A.k1(-1,null)
B.dV=new A.k2("_clientToken")
B.O=new A.ck(0,"closed")
B.dW=new A.ck(1,"opening")
B.bo=new A.ck(2,"offline")
B.aJ=new A.ck(3,"authRequired")
B.bp=new A.ck(4,"idle")
B.dX=new A.ck(5,"pulling")
B.dY=new A.ck(6,"pushing")
B.bq=new A.ck(7,"backoff")
B.br=new A.ck(8,"paused")
B.P=new A.bg(B.L,B.L,B.L,0,0,0,0,!1)
B.e0=new A.f2(B.O,0,0,0,0,0,null,null,null,null)
B.e1=A.b5("lk")
B.e2=A.b5("fA")
B.e3=A.b5("eu")
B.e4=A.b5("ex")
B.e5=A.b5("DI")
B.e6=A.b5("eE")
B.e7=A.b5("tA")
B.e8=A.b5("tB")
B.e9=A.b5("uf")
B.ea=A.b5("ug")
B.eb=A.b5("uh")
B.ec=A.b5("N")
B.ed=A.b5("fZ")
B.ee=A.b5("k")
B.ef=A.b5("hk")
B.eg=A.b5("jU")
B.eh=A.b5("yU")
B.ei=A.b5("yV")
B.ej=A.b5("yW")
B.ek=A.b5("d0")
B.el=A.b5("hq")
B.aS=new A.k4(!1)
B.em=new A.k4(!0)
B.en=new A.dw(14)
B.eo=new A.dw(522)
B.ep=new A.dw(778)
B.eq=new A.C_(B.i,A.O8())
B.er=new A.C0(B.i,A.O9())
B.es=new A.C1(B.i,A.Oa())
B.et=new A.C2(B.i,A.Ob())
B.eu=new A.pQ(B.i,A.Oc())
B.ev=new A.C3(B.i,A.Od())
B.ew=new A.C4(B.i,A.Oe())
B.ex=new A.C5(B.i,A.Of())
B.ey=new A.C6(B.i,A.Og())
B.ez=new A.C8(B.i,A.Oi())
B.eA=new A.C9(B.i,A.Oj())
B.eB=new A.C7(B.i,A.Oh())
B.eC=new A.pR(B.i,A.Ok())
B.aT=new A.pS(B.i,B.aD)})();(function staticFields(){$.Ba=null
$.fm=A.l([],t.hf)
$.NC=null
$.Gc=null
$.x8=0
$.nm=A.Ns()
$.Fz=null
$.Fy=null
$.Im=null
$.I2=null
$.Iw=null
$.D_=null
$.Dg=null
$.F5=null
$.Bn=A.l([],A.aa("z<q<k>?>"))
$.ig=null
$.kU=null
$.kV=null
$.EN=!1
$.D=B.i
$.Br=null
$.GJ=null
$.GK=null
$.GL=null
$.GM=null
$.Es=A.A2("_lastQuoRemDigits")
$.Et=A.A2("_lastQuoRemUsed")
$.ke=A.A2("_lastRemUsed")
$.Eu=A.A2("_lastRem_nsh")
$.Gx=""
$.Gy=null
$.hh=function(){var s=t.N
return A.t(s,s)}()
$.Hp=null
$.Cl=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"PO","IP",()=>A.D7("_$dart_dartClosure"))
s($,"PN","fu",()=>A.D7("_$dart_dartClosure_dartJSInterop"))
s($,"Qr","q7",()=>A.wf(0))
s($,"QP","Jo",()=>B.i.b5(new A.Dj(),A.aa("y<~>")))
s($,"QJ","Jl",()=>A.l([new J.mJ()],A.aa("z<jQ>")))
s($,"Q5","IT",()=>A.dv(A.yT({
toString:function(){return"$receiver$"}})))
s($,"Q6","IU",()=>A.dv(A.yT({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Q7","IV",()=>A.dv(A.yT(null)))
s($,"Q8","IW",()=>A.dv(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Qb","IZ",()=>A.dv(A.yT(void 0)))
s($,"Qc","J_",()=>A.dv(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Qa","IY",()=>A.dv(A.Gt(null)))
s($,"Q9","IX",()=>A.dv(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Qe","J1",()=>A.dv(A.Gt(void 0)))
s($,"Qd","J0",()=>A.dv(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Qh","Fg",()=>A.LF())
s($,"PU","et",()=>$.Jo())
s($,"PT","IQ",()=>A.LY(!1,B.i,t.y))
s($,"Qx","Jb",()=>A.wf(4096))
s($,"Qv","J9",()=>new A.BX().$0())
s($,"Qw","Ja",()=>new A.BW().$0())
s($,"Qj","Fh",()=>A.KO(A.bc(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Qi","J2",()=>A.wf(0))
s($,"Qq","cs",()=>A.kd(0))
s($,"Qo","fv",()=>A.kd(1))
s($,"Qp","J5",()=>A.kd(2))
s($,"Qm","Fj",()=>$.fv().bX(0))
s($,"Qk","Fi",()=>A.kd(1e4))
r($,"Qn","J4",()=>A.ak("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Ql","J3",()=>A.wf(8))
s($,"Qs","J6",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Qt","J7",()=>A.ak("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Qu","J8",()=>typeof URLSearchParams=="function")
s($,"QA","fw",()=>A.l6(B.ee))
s($,"PZ","lb",()=>{A.KZ()
return $.x8})
s($,"QB","Je",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"PX","DD",()=>{var q=new A.B9(A.KN(8))
q.pI()
return q})
s($,"PP","la",()=>A.JK(B.dn.gad(A.KP(A.bc(A.l([1],t.t)))),0,null).getInt8(0)===1?B.S:B.aX)
s($,"PG","Fb",()=>A.ak("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"QD","DE",()=>A.ak("\\r\\n|\\r|\\n",!0,!1))
s($,"PV","IR",()=>A.Gh())
s($,"Qy","Fk",()=>A.ak("^[\\x00-\\x7F]+$",!0,!1))
s($,"Qz","Jc",()=>A.ak('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"QR","Jp",()=>A.ak('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"QC","Jf",()=>A.ak("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"QG","Ji",()=>A.ak('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"QF","Jh",()=>A.ak("\\\\(.)",!0,!1))
s($,"QO","Jn",()=>A.ak('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"QS","Jq",()=>A.ak("(?:"+$.Jf().a+")*",!0,!1))
s($,"PK","Fc",()=>A.ak("^[0-9a-f]{64}$",!0,!1))
s($,"QI","Jk",()=>A.Gi())
s($,"QQ","q8",()=>A.ak("^[A-Za-z0-9_]{15}$",!0,!1))
r($,"Nb","Jd",()=>A.K0().a)
s($,"PQ","Fd",()=>A.ak("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"PL","IN",()=>A.DP("declaredNames",t.aJ))
s($,"PM","IO",()=>A.DP("fieldByName",A.aa("F<j,b6>")))
s($,"QE","Jg",()=>A.ak("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Q4","ld",()=>new A.k())
s($,"QL","iu",()=>new A.rl($.Fe()))
s($,"Q1","IS",()=>new A.x2(A.ak("/",!0,!1),A.ak("[^/]$",!0,!1),A.ak("^/",!0,!1)))
s($,"Q3","q6",()=>new A.zi(A.ak("[/\\\\]",!0,!1),A.ak("[^/\\\\]$",!0,!1),A.ak("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ak("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"Q2","lc",()=>new A.yZ(A.ak("/",!0,!1),A.ak("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ak("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ak("^/",!0,!1)))
s($,"Q0","Fe",()=>A.Lq())
s($,"PJ","IM",()=>$.fv().bY(0,63).bX(0))
s($,"PI","IL",()=>{var q=$.fv()
return q.bY(0,63).hh(0,q)})
s($,"PH","q5",()=>A.Gi())
s($,"Qf","Ff",()=>A.DP(null,t.S))
s($,"QK","Jm",()=>A.KC(A.l([A.Ek("files"),A.Ek("blocks")],t.s)))
s($,"PR","DC",()=>{var q,p,o=A.t(t.N,A.aa("fU"))
for(q=0;q<2;++q){p=B.d5[q]
o.j(0,p.c,p)}return o})
s($,"QH","Jj",()=>A.Gh())
r($,"Qg","le",()=>{var q="navigator"
return A.Kt(A.Ku(A.D9(A.IC(),q),A.Ek("locks")))?A.D9(A.D9(A.IC(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.h6,ArrayBuffer:A.h5,ArrayBufferView:A.ju,DataView:A.jt,Float32Array:A.n5,Float64Array:A.n6,Int16Array:A.n7,Int32Array:A.n8,Int8Array:A.n9,Uint16Array:A.jv,Uint32Array:A.jw,Uint8ClampedArray:A.jx,CanvasPixelArray:A.jx,Uint8Array:A.eU})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.h7.$nativeSuperclassTag="ArrayBufferView"
A.kw.$nativeSuperclassTag="ArrayBufferView"
A.kx.$nativeSuperclassTag="ArrayBufferView"
A.dZ.$nativeSuperclassTag="ArrayBufferView"
A.ky.$nativeSuperclassTag="ArrayBufferView"
A.kz.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.Pf
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
