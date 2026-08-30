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
if(a[b]!==s){A.Mv(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Cj(b)
return new s(c,this)}:function(){if(s===null)s=A.Cj(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Cj(a).prototype
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
Cs(a,b,c,d){return{i:a,p:b,e:c,x:d}},
AD(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Cq==null){A.M1()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.DQ("Return interceptor for "+A.q(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.yT
if(o==null)o=$.yT=A.AC(n)
p=q[o]}if(p!=null)return p
p=A.Ma(a)
if(p!=null)return p
if(typeof a=="function")return B.c8
s=Object.getPrototypeOf(a)
if(s==null)return B.b9
if(s===Object.prototype)return B.b9
if(typeof q=="function"){o=$.yT
if(o==null)o=$.yT=A.AC(n)
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
Bq(a,b){if(a<0||a>4294967295)throw A.b(A.au(a,0,4294967295,"length",null))
return J.Di(new Array(a),b)},
Dh(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
Dg(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
Di(a,b){var s=A.l(a,b.i("B<0>"))
s.$flags=1
return s},
HH(a,b){return J.CI(a,b)},
Dj(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
HK(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Dj(r))break;++b}return b},
Dk(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Dj(r))break}return b},
ds(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iz.prototype
return J.lC.prototype}if(typeof a=="string")return J.dE.prototype
if(a==null)return J.iA.prototype
if(typeof a=="boolean")return J.lB.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AD(a)},
L(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AD(a)},
aC(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AD(a)},
LU(a){if(typeof a=="number")return J.es.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
LV(a){if(typeof a=="number")return J.es.prototype
if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
AB(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
km(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AD(a)},
v(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ds(a).R(a,b)},
S(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.FG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
c_(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.FG(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aC(a).j(a,b,c)},
aL(a,b){return J.aC(a).u(a,b)},
B7(a,b){return J.aC(a).C(a,b)},
B8(a,b){return J.AB(a).i4(a,b)},
oS(a){return J.km(a).mT(a)},
CG(a,b,c){return J.km(a).i5(a,b,c)},
CH(a,b,c){return J.km(a).mU(a,b,c)},
GH(a){return J.km(a).mV(a)},
bN(a,b,c){return J.km(a).i6(a,b,c)},
i0(a,b){return J.aC(a).i9(a,b)},
GI(a,b,c){return J.LU(a).bR(a,b,c)},
CI(a,b){return J.LV(a).a1(a,b)},
B9(a,b){return J.L(a).G(a,b)},
oT(a,b){return J.aC(a).a8(a,b)},
kw(a,b){return J.aC(a).cG(a,b)},
GJ(a){return J.km(a).gaa(a)},
c0(a){return J.aC(a).gE(a)},
a8(a){return J.ds(a).gJ(a)},
bA(a){return J.L(a).gF(a)},
eb(a){return J.L(a).gU(a)},
D(a){return J.aC(a).gt(a)},
oU(a){return J.aC(a).gY(a)},
aj(a){return J.L(a).gm(a)},
bp(a){return J.ds(a).gam(a)},
Ba(a){return J.aC(a).gar(a)},
GK(a,b,c){return J.aC(a).fQ(a,b,c)},
GL(a,b,c){return J.aC(a).aE(a,b,c)},
aS(a,b,c){return J.aC(a).cf(a,b,c)},
GM(a,b,c){return J.AB(a).em(a,b,c)},
GN(a,b){return J.L(a).sm(a,b)},
GO(a,b,c,d,e){return J.aC(a).ak(a,b,c,d,e)},
oV(a,b){return J.aC(a).bk(a,b)},
CJ(a,b){return J.aC(a).cl(a,b)},
GP(a,b){return J.AB(a).cS(a,b)},
GQ(a,b){return J.AB(a).S(a,b)},
GR(a,b,c){return J.aC(a).T(a,b,c)},
oW(a,b){return J.aC(a).cN(a,b)},
GS(a){return J.aC(a).dw(a)},
Z(a){return J.ds(a).l(a)},
CK(a,b){return J.aC(a).dB(a,b)},
CL(a,b){return J.aC(a).l7(a,b)},
lz:function lz(){},
lB:function lB(){},
iA:function iA(){},
aG:function aG(){},
dG:function dG(){},
mb:function mb(){},
dU:function dU(){},
bQ:function bQ(){},
br:function br(){},
fz:function fz(){},
B:function B(a){this.$ti=a},
lA:function lA(){},
rV:function rV(a){this.$ti=a},
ff:function ff(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
es:function es(){},
iz:function iz(){},
lC:function lC(){},
dE:function dE(){}},A={Bt:function Bt(){},
fh(a,b,c){if(t.O.b(a))return new A.jG(a,b.i("@<0>").V(c).i("jG<1,2>"))
return new A.ef(a,b.i("@<0>").V(c).i("ef<1,2>"))},
Dm(a){return new A.dF("Field '"+a+"' has been assigned during initialization.")},
Dn(a){return new A.dF("Field '"+a+"' has not been initialized.")},
HO(a){return new A.dF("Field '"+a+"' has already been initialized.")},
fR(a){return new A.mm(a)},
AG(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ay(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h8(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bZ(a,b,c){return a},
Cr(a){var s,r
for(s=$.f4.length,r=0;r<s;++r)if(a===$.f4[r])return!0
return!1},
cv(a,b,c,d){A.bb(b,"start")
if(c!=null){A.bb(c,"end")
if(b>c)A.u(A.au(b,0,c,"start",null))}return new A.cu(a,b,c,d.i("cu<0>"))},
dJ(a,b,c,d){if(t.O.b(a))return new A.en(a,b,c.i("@<0>").V(d).i("en<1,2>"))
return new A.cm(a,b,c.i("@<0>").V(d).i("cm<1,2>"))},
DK(a,b,c){var s="takeCount"
A.kB(b,s)
A.bb(b,s)
if(t.O.b(a))return new A.ij(a,b,c.i("ij<0>"))
return new A.eJ(a,b,c.i("eJ<0>"))},
DI(a,b,c){var s="count"
if(t.O.b(a)){A.kB(b,s)
A.bb(b,s)
return new A.fr(a,b,c.i("fr<0>"))}A.kB(b,s)
A.bb(b,s)
return new A.dd(a,b,c.i("dd<0>"))},
aF(){return new A.bi("No element")},
ix(){return new A.bi("Too many elements")},
De(){return new A.bi("Too few elements")},
mC(a,b,c,d){if(c-b<=32)A.Iw(a,b,c,d)
else A.Iv(a,b,c,d)},
Iw(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.L(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Iv(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.N(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.N(a4+a5,2),e=f-i,d=f+i,c=J.L(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.mC(a3,a4,r-2,a6)
A.mC(a3,q+2,a5,a6)
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
break}}A.mC(a3,r,q,a6)}else A.mC(a3,r,q,a6)},
y9:function y9(a){this.a=0
this.b=a},
xK:function xK(a){this.a=0
this.b=a},
dX:function dX(){},
kU:function kU(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){this.a=a
this.$ti=b},
jG:function jG(a,b){this.a=a
this.$ti=b},
jD:function jD(){},
xL:function xL(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b){this.a=a
this.$ti=b},
pm:function pm(a,b){this.a=a
this.b=b},
pl:function pl(a){this.a=a},
dF:function dF(a){this.a=a},
mm:function mm(a){this.a=a},
ck:function ck(a){this.a=a},
AN:function AN(){},
vK:function vK(){},
K:function K(){},
V:function V(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
lO:function lO(a,b,c){var _=this
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
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
lj:function lj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ij:function ij(a,b,c){this.a=a
this.b=b
this.$ti=c},
mP:function mP(a,b,c){this.a=a
this.b=b
this.$ti=c},
dd:function dd(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b,c){this.a=a
this.b=b
this.$ti=c},
mB:function mB(a,b,c){this.a=a
this.b=b
this.$ti=c},
eo:function eo(a){this.$ti=a},
lh:function lh(a){this.$ti=a},
bI:function bI(a,b){this.a=a
this.$ti=b},
ne:function ne(a,b){this.a=a
this.$ti=b},
iq:function iq(){},
n0:function n0(){},
hc:function hc(){},
bV:function bV(a,b){this.a=a
this.$ti=b},
jm:function jm(a){this.a=a},
kd:function kd(){},
Ha(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bG(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aX(q,A.bG(new A.as(a,m.i("as<2>")),!0,c),b.i("@<0>").V(c).i("aX<1,2>"))
n.$keys=l
return n}return new A.id(A.ba(a,b,c),b.i("@<0>").V(c).i("id<1,2>"))},
Hb(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
Hc(){throw A.b(A.Y("Cannot modify constant Set"))},
G_(a){var s=A.FZ(a)
if(s!=null)return s
return"minified:"+a},
FG(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
return s},
eC(a){var s,r=$.Dx
if(r==null)r=$.Dx=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
j3(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
Ie(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cj(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
md(a){var s,r,q,p
if(a instanceof A.j)return A.bx(A.bz(a),null)
s=J.ds(a)
if(s===B.c7||s===B.c9||t.cx.b(a)){r=B.aS(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bx(A.bz(a),null)},
Dz(a){var s,r,q
if(a==null||typeof a=="number"||A.bw(a))return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ei)return a.l(0)
if(a instanceof A.eY)return a.mJ(!0)
s=$.GB()
for(r=0;r<1;++r){q=s[r].yB(a)
if(q!=null)return q}return"Instance of '"+A.md(a)+"'"},
Ia(){return Date.now()},
Id(){var s,r
if($.uU!==0)return
$.uU=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.uU=1e6
$.me=new A.uT(r)},
I9(){if(!!self.location)return self.location.href
return null},
Dw(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
If(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(!A.ar(q))throw A.b(A.f6(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ah(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.f6(q))}return A.Dw(p)},
DA(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ar(q))throw A.b(A.f6(q))
if(q<0)throw A.b(A.f6(q))
if(q>65535)return A.If(a)}return A.Dw(a)},
Ig(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bt(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ah(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.au(a,0,1114111,null,null))},
Ih(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.al(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.N(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bs(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
BE(a){return a.c?A.bs(a).getUTCFullYear()+0:A.bs(a).getFullYear()+0},
BC(a){return a.c?A.bs(a).getUTCMonth()+1:A.bs(a).getMonth()+1},
uS(a){return a.c?A.bs(a).getUTCDate()+0:A.bs(a).getDate()+0},
BA(a){return a.c?A.bs(a).getUTCHours()+0:A.bs(a).getHours()+0},
BB(a){return a.c?A.bs(a).getUTCMinutes()+0:A.bs(a).getMinutes()+0},
BD(a){return a.c?A.bs(a).getUTCSeconds()+0:A.bs(a).getSeconds()+0},
Dy(a){return a.c?A.bs(a).getUTCMilliseconds()+0:A.bs(a).getMilliseconds()+0},
Ic(a){return B.c.al((a.c?A.bs(a).getUTCDay()+0:A.bs(a).getDay()+0)+6,7)+1},
Ib(a){var s=a.$thrownJsError
if(s==null)return null
return A.ae(s)},
mf(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
At(a,b){var s,r="index"
if(!A.ar(b))return new A.bB(!0,b,r,null)
s=J.aj(a)
if(b<0||b>=s)return A.lw(b,s,a,null,r)
return A.vx(b,r)},
LM(a,b,c){if(a<0||a>c)return A.au(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.au(b,a,c,"end",null)
return new A.bB(!0,b,"end",null)},
f6(a){return new A.bB(!0,a,null,null)},
b(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.dg()
b.dartException=a
s=A.Mw
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Mw(){return J.Z(this.dartException)},
u(a,b){throw A.aK(a,b==null?new Error():b)},
I(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.u(A.Ke(a,b,c),s)},
Ke(a,b,c){var s,r,q,p,o,n,m,l,k
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
r(a){throw A.b(A.aB(a))},
dh(a){var s,r,q,p,o,n
a=A.FP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.wu(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
wv(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
DP(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Bu(a,b){var s=b==null,r=s?null:b.method
return new A.lD(a,r,s?null:b.receiver)},
E(a){if(a==null)return new A.m2(a)
if(a instanceof A.il)return A.e9(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e9(a,a.dartException)
return A.L8(a)},
e9(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
L8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ah(r,16)&8191)===10)switch(q){case 438:return A.e9(a,A.Bu(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.e9(a,new A.j_())}}if(a instanceof TypeError){p=$.G8()
o=$.G9()
n=$.Ga()
m=$.Gb()
l=$.Ge()
k=$.Gf()
j=$.Gd()
$.Gc()
i=$.Gh()
h=$.Gg()
g=p.bU(s)
if(g!=null)return A.e9(a,A.Bu(s,g))
else{g=o.bU(s)
if(g!=null){g.method="call"
return A.e9(a,A.Bu(s,g))}else if(n.bU(s)!=null||m.bU(s)!=null||l.bU(s)!=null||k.bU(s)!=null||j.bU(s)!=null||m.bU(s)!=null||i.bU(s)!=null||h.bU(s)!=null)return A.e9(a,new A.j_())}return A.e9(a,new A.n_(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jg()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e9(a,new A.bB(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jg()
return a},
ae(a){var s
if(a instanceof A.il)return a.b
if(a==null)return new A.jZ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jZ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kn(a){if(a==null)return J.a8(a)
if(typeof a=="object")return A.eC(a)
return J.a8(a)},
LB(a){if(typeof a=="number")return B.x.gJ(a)
if(a instanceof A.oj)return A.eC(a)
if(a instanceof A.eY)return a.gJ(a)
if(a instanceof A.jm)return a.gJ(0)
return A.kn(a)},
FC(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
LS(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
Kr(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.D4("Unsupported number of arguments for wrapped closure"))},
e7(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.LH(a,b)
a.$identity=s
return s},
LH(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Kr)},
H4(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.vV().constructor.prototype):Object.create(new A.i7(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.CZ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.H0(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.CZ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
H0(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.GW)}throw A.b("Error in functionType of tearoff")},
H1(a,b,c,d){var s=A.CW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
CZ(a,b,c,d){if(c)return A.H3(a,b,d)
return A.H1(b.length,d,a,b)},
H2(a,b,c,d){var s=A.CW,r=A.GX
switch(b?-1:a){case 0:throw A.b(new A.mu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
H3(a,b,c){var s,r
if($.CU==null)$.CU=A.CT("interceptor")
if($.CV==null)$.CV=A.CT("receiver")
s=b.length
r=A.H2(s,c,a,b)
return r},
Cj(a){return A.H4(a)},
GW(a,b){return A.k7(v.typeUniverse,A.bz(a.a),b)},
CW(a){return a.a},
GX(a){return a.b},
CT(a){var s,r,q,p=new A.i7("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
AC(a){return v.getIsolateTag(a)},
MA(a,b){var s=$.C
if(s===B.i)return a
return s.i8(a,b)},
FT(){return v.G},
NH(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Ma(a){var s,r,q,p,o,n=$.FE.$1(a),m=$.Au[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.AK[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Fh.$2(a,n)
if(q!=null){m=$.Au[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.AK[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.AM(s)
$.Au[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.AK[n]=s
return s}if(p==="-"){o=A.AM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.FM(a,s)
if(p==="*")throw A.b(A.DQ(n))
if(v.leafTags[n]===true){o=A.AM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.FM(a,s)},
FM(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Cs(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
AM(a){return J.Cs(a,!1,null,!!a.$ibR)},
Mc(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.AM(s)
else return J.Cs(s,c,null,null)},
M1(){if(!0===$.Cq)return
$.Cq=!0
A.M2()},
M2(){var s,r,q,p,o,n,m,l
$.Au=Object.create(null)
$.AK=Object.create(null)
A.M0()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.FO.$1(o)
if(n!=null){m=A.Mc(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
M0(){var s,r,q,p,o,n,m=B.bF()
m=A.hR(B.bG,A.hR(B.bH,A.hR(B.aT,A.hR(B.aT,A.hR(B.bI,A.hR(B.bJ,A.hR(B.bK(B.aS),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.FE=new A.AH(p)
$.Fh=new A.AI(o)
$.FO=new A.AJ(n)},
hR(a,b){return a(b)||b},
Jw(a,b){var s
for(s=0;s<a.length;++s)if(!J.v(a[s],b[s]))return!1
return!0},
LL(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Bs(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a9("Illegal RegExp pattern ("+String(o)+")",a,null))},
Mp(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.et){s=B.a.ag(a,c)
return b.b.test(s)}else return!J.B8(b,B.a.ag(a,c)).gF(0)},
FA(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
FP(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.Mr(a,b,c)
if(b instanceof A.et){s=b.gme()
s.lastIndex=0
return a.replace(s,A.FA(c))}return A.Mq(a,b,c)},
Mq(a,b,c){var s,r,q,p
for(s=J.B8(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gP())+c
r=p.gO()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Mr(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.FP(b),"g"),A.FA(c))},
Fa(a){return a},
FU(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.i4(0,a),s=new A.nr(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.q(A.Fa(B.a.A(a,q,m)))+A.q(c.$1(o))
q=m+n[0].length}s=p+A.q(A.Fa(B.a.ag(a,q)))
return s.charCodeAt(0)==0?s:s},
Ms(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.FV(a,s,s+b.length,c)},
FV(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a5:function a5(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
o1:function o1(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
o2:function o2(a){this.a=a},
id:function id(a,b){this.a=a
this.$ti=b},
fn:function fn(){},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b){this.a=a
this.$ti=b},
hv:function hv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
is:function is(a,b){this.a=a
this.$ti=b},
ie:function ie(){},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
rP:function rP(){},
iw:function iw(a,b){this.a=a
this.$ti=b},
uT:function uT(a){this.a=a},
j9:function j9(){},
wu:function wu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j_:function j_(){},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function n_(a){this.a=a},
m2:function m2(a){this.a=a},
il:function il(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a
this.b=null},
ei:function ei(){},
pr:function pr(){},
ps:function ps(){},
wk:function wk(){},
vV:function vV(){},
i7:function i7(a,b){this.a=a
this.b=b},
mu:function mu(a){this.a=a},
bE:function bE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
rW:function rW(a){this.a=a},
tx:function tx(a,b){var _=this
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
as:function as(a,b){this.a=a
this.$ti=b},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
lL:function lL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iC:function iC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iB:function iB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
AH:function AH(a){this.a=a},
AI:function AI(a){this.a=a},
AJ:function AJ(a){this.a=a},
eY:function eY(){},
nZ:function nZ(){},
o_:function o_(){},
o0:function o0(){},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(a){this.b=a},
nq:function nq(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h5:function h5(a,b){this.a=a
this.c=b},
oe:function oe(a,b,c){this.a=a
this.b=b
this.c=c},
zp:function zp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Mv(a){throw A.aK(A.Dm(a),new Error())},
A(){throw A.aK(A.Dn(""),new Error())},
cz(){throw A.aK(A.HO(""),new Error())},
B1(){throw A.aK(A.Dm(""),new Error())},
C0(){var s=new A.nz("")
return s.b=s},
xM(a){var s=new A.nz(a)
return s.b=s},
nz:function nz(a){this.a=a
this.b=null},
hM(a,b,c){},
b3(a){var s,r,q
if(t.iy.b(a))return a
s=J.L(a)
r=A.ag(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
I2(a){return new DataView(new ArrayBuffer(a))},
Dr(a,b,c){A.hM(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d9(a,b,c){A.hM(a,b,c)
c=B.c.N(a.byteLength-b,4)
return new Int32Array(a,b,c)},
I3(a){return new Int8Array(a)},
I4(a){return new Uint16Array(a)},
Ds(a,b,c){A.hM(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
ud(a){return new Uint8Array(a)},
bT(a,b,c){A.hM(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dp(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.At(b,a))},
dq(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.LM(a,b,c))
if(b==null)return c
return b},
fG:function fG(){},
fF:function fF(){},
iV:function iV(){},
om:function om(a){this.a=a},
iU:function iU(){},
fH:function fH(){},
dN:function dN(){},
bS:function bS(){},
lW:function lW(){},
lX:function lX(){},
lY:function lY(){},
lZ:function lZ(){},
m_:function m_(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
ey:function ey(){},
jS:function jS(){},
jT:function jT(){},
jU:function jU(){},
jV:function jV(){},
BI(a,b){var s=b.c
return s==null?b.c=A.k5(a,"y",[b.x]):s},
DF(a){var s=a.w
if(s===6||s===7)return A.DF(a.x)
return s===11||s===12},
Iq(a){return a.as},
FL(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ad(a){return A.zv(v.typeUniverse,a,!1)},
M4(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.e5(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
e5(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e5(a1,s,a3,a4)
if(r===s)return a2
return A.El(a1,r,!0)
case 7:s=a2.x
r=A.e5(a1,s,a3,a4)
if(r===s)return a2
return A.Ek(a1,r,!0)
case 8:q=a2.y
p=A.hQ(a1,q,a3,a4)
if(p===q)return a2
return A.k5(a1,a2.x,p)
case 9:o=a2.x
n=A.e5(a1,o,a3,a4)
m=a2.y
l=A.hQ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.C4(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hQ(a1,j,a3,a4)
if(i===j)return a2
return A.Em(a1,k,i)
case 11:h=a2.x
g=A.e5(a1,h,a3,a4)
f=a2.y
e=A.L3(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Ej(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hQ(a1,d,a3,a4)
o=a2.x
n=A.e5(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.C5(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kF("Attempted to substitute unexpected RTI kind "+a0))}},
hQ(a,b,c,d){var s,r,q,p,o=b.length,n=A.zF(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e5(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
L4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.zF(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e5(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
L3(a,b,c,d){var s,r=b.a,q=A.hQ(a,r,c,d),p=b.b,o=A.hQ(a,p,c,d),n=b.c,m=A.L4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.nM()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
oH(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.LW(s)
return a.$S()}return null},
M3(a,b){var s
if(A.DF(b))if(a instanceof A.ei){s=A.oH(a)
if(s!=null)return s}return A.bz(a)},
bz(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a_(a)
return A.Ce(J.ds(a))},
a_(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Ce(a)},
Ce(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Kp(a,s)},
Kp(a,b){var s=a instanceof A.ei?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.JG(v.typeUniverse,s.name)
b.$ccache=r
return r},
LW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.zv(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dt(a){return A.bL(A.n(a))},
Cp(a){var s=A.oH(a)
return A.bL(s==null?A.bz(a):s)},
Ch(a){var s
if(a instanceof A.eY)return a.m3()
s=a instanceof A.ei?A.oH(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bp(a).a
if(Array.isArray(a))return A.a_(a)
return A.bz(a)},
bL(a){var s=a.r
return s==null?a.r=new A.oj(a):s},
LP(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.k7(v.typeUniverse,A.Ch(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Eo(v.typeUniverse,s,A.Ch(q[r]))
return A.k7(v.typeUniverse,s,a)},
bM(a){return A.bL(A.zv(v.typeUniverse,a,!1))},
Ko(a){var s=this
s.b=A.L1(s)
return s.b(a)},
L1(a){var s,r,q,p
if(a===t.K)return A.Kx
if(A.f8(a))return A.KB
s=a.w
if(s===6)return A.Kl
if(s===1)return A.EU
if(s===7)return A.Ks
r=A.L0(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f8)){a.f="$i"+q
if(q==="p")return A.Kv
if(a===t.m)return A.Ku
return A.KA}}else if(s===10){p=A.LL(a.x,a.y)
return p==null?A.EU:p}return A.Kj},
L0(a){if(a.w===8){if(a===t.S)return A.ar
if(a===t.W||a===t.cZ)return A.Kw
if(a===t.N)return A.Kz
if(a===t.y)return A.bw}return null},
Kn(a){var s=this,r=A.Ki
if(A.f8(s))r=A.JU
else if(s===t.K)r=A.JT
else if(A.hU(s)){r=A.Kk
if(s===t.aV)r=A.bd
else if(s===t.v)r=A.a7
else if(s===t.o9)r=A.ED
else if(s===t.jh)r=A.EH
else if(s===t.dA)r=A.EE
else if(s===t.o)r=A.EF}else if(s===t.S)r=A.ap
else if(s===t.N)r=A.G
else if(s===t.y)r=A.hL
else if(s===t.cZ)r=A.EG
else if(s===t.W)r=A.f2
else if(s===t.m)r=A.be
s.a=r
return s.a(a)},
Kj(a){var s=this
if(a==null)return A.hU(s)
return A.M7(v.typeUniverse,A.M3(a,s),s)},
Kl(a){if(a==null)return!0
return this.x.b(a)},
KA(a){var s,r=this
if(a==null)return A.hU(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.ds(a)[s]},
Kv(a){var s,r=this
if(a==null)return A.hU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.ds(a)[s]},
Ku(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ET(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ki(a){var s=this
if(a==null){if(A.hU(s))return a}else if(s.b(a))return a
throw A.aK(A.EN(a,s),new Error())},
Kk(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.EN(a,s),new Error())},
EN(a,b){return new A.k3("TypeError: "+A.Ea(a,A.bx(b,null)))},
Ea(a,b){return A.ik(a)+": type '"+A.bx(A.Ch(a),null)+"' is not a subtype of type '"+b+"'"},
cg(a,b){return new A.k3("TypeError: "+A.Ea(a,b))},
Ks(a){var s=this
return s.x.b(a)||A.BI(v.typeUniverse,s).b(a)},
Kx(a){return a!=null},
JT(a){if(a!=null)return a
throw A.aK(A.cg(a,"Object"),new Error())},
KB(a){return!0},
JU(a){return a},
EU(a){return!1},
bw(a){return!0===a||!1===a},
hL(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.cg(a,"bool"),new Error())},
ED(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.cg(a,"bool?"),new Error())},
f2(a){if(typeof a=="number")return a
throw A.aK(A.cg(a,"double"),new Error())},
EE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.cg(a,"double?"),new Error())},
ar(a){return typeof a=="number"&&Math.floor(a)===a},
ap(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.cg(a,"int"),new Error())},
bd(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.cg(a,"int?"),new Error())},
Kw(a){return typeof a=="number"},
EG(a){if(typeof a=="number")return a
throw A.aK(A.cg(a,"num"),new Error())},
EH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.cg(a,"num?"),new Error())},
Kz(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.aK(A.cg(a,"String"),new Error())},
a7(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.cg(a,"String?"),new Error())},
be(a){if(A.ET(a))return a
throw A.aK(A.cg(a,"JSObject"),new Error())},
EF(a){if(a==null)return a
if(A.ET(a))return a
throw A.aK(A.cg(a,"JSObject?"),new Error())},
F5(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bx(a[q],b)
return s},
KR(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.F5(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bx(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ER(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
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
if(m===8){p=A.L7(a.x)
o=a.y
return o.length>0?p+("<"+A.F5(o,b)+">"):p}if(m===10)return A.KR(a,b)
if(m===11)return A.ER(a,b,null)
if(m===12)return A.ER(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
L7(a){var s=A.FZ(a)
if(s!=null)return s
return"minified:"+a},
JH(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
JG(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.zv(a,b,!1)
else if(typeof m=="number"){s=m
r=A.k6(a,5,"#")
q=A.zF(s)
for(p=0;p<s;++p)q[p]=r
o=A.k5(a,b,q)
n[b]=o
return o}else return m},
JF(a,b){return A.EB(a.tR,b)},
JE(a,b){return A.EB(a.eT,b)},
zv(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.En(a,null,b,!1)
r.set(b,s)
return s},
k7(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.En(a,b,c,!0)
q.set(c,r)
return r},
Eo(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.C4(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
En(a,b,c,d){return A.Ju(A.Jo(a,b,c,d))},
e4(a,b){b.a=A.Kn
b.b=A.Ko
return b},
k6(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cq(null,null)
s.w=b
s.as=c
r=A.e4(a,s)
a.eC.set(c,r)
return r},
El(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.JC(a,b,r,c)
a.eC.set(r,s)
return s},
JC(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f8(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.hU(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cq(null,null)
q.w=6
q.x=b
q.as=c
return A.e4(a,q)},
Ek(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.JA(a,b,r,c)
a.eC.set(r,s)
return s},
JA(a,b,c,d){var s,r
if(d){s=b.w
if(A.f8(b)||b===t.K)return b
else if(s===1)return A.k5(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cq(null,null)
r.w=7
r.x=b
r.as=c
return A.e4(a,r)},
JD(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cq(null,null)
s.w=13
s.x=b
s.as=q
r=A.e4(a,s)
a.eC.set(q,r)
return r},
k4(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Jz(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
k5(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.k4(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cq(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e4(a,r)
a.eC.set(p,q)
return q},
C4(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.k4(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cq(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e4(a,o)
a.eC.set(q,n)
return n},
Em(a,b,c){var s,r,q="+"+(b+"("+A.k4(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cq(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e4(a,s)
a.eC.set(q,r)
return r},
Ej(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.k4(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.k4(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Jz(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cq(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e4(a,p)
a.eC.set(r,o)
return o},
C5(a,b,c,d){var s,r=b.as+("<"+A.k4(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.JB(a,b,c,r,d)
a.eC.set(r,s)
return s},
JB(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.zF(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e5(a,b,r,0)
m=A.hQ(a,c,r,0)
return A.C5(a,n,m,c!==m)}}l=new A.cq(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e4(a,l)},
Jo(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Ju(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Jq(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Ef(a,r,l,k,!1)
else if(q===46)r=A.Ef(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eX(a.u,a.e,k.pop()))
break
case 94:k.push(A.JD(a.u,k.pop()))
break
case 35:k.push(A.k6(a.u,5,"#"))
break
case 64:k.push(A.k6(a.u,2,"@"))
break
case 126:k.push(A.k6(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Js(a,k)
break
case 38:A.Jr(a,k)
break
case 63:p=a.u
k.push(A.El(p,A.eX(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Ek(p,A.eX(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Jp(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Eg(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Jv(a.u,a.e,o)
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
return A.eX(a.u,a.e,m)},
Jq(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Ef(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.JH(s,o.x)[p]
if(n==null)A.u('No "'+p+'" in "'+A.Iq(o)+'"')
d.push(A.k7(s,o,n))}else d.push(p)
return m},
Js(a,b){var s,r=a.u,q=A.Ee(a,b),p=b.pop()
if(typeof p=="string")b.push(A.k5(r,p,q))
else{s=A.eX(r,a.e,p)
switch(s.w){case 11:b.push(A.C5(r,s,q,a.n))
break
default:b.push(A.C4(r,s,q))
break}}},
Jp(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Ee(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eX(p,a.e,o)
q=new A.nM()
q.a=s
q.b=n
q.c=m
b.push(A.Ej(p,r,q))
return
case-4:b.push(A.Em(p,b.pop(),s))
return
default:throw A.b(A.kF("Unexpected state under `()`: "+A.q(o)))}},
Jr(a,b){var s=b.pop()
if(0===s){b.push(A.k6(a.u,1,"0&"))
return}if(1===s){b.push(A.k6(a.u,4,"1&"))
return}throw A.b(A.kF("Unexpected extended operation "+A.q(s)))},
Ee(a,b){var s=b.splice(a.p)
A.Eg(a.u,a.e,s)
a.p=b.pop()
return s},
eX(a,b,c){if(typeof c=="string")return A.k5(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Jt(a,b,c)}else return c},
Eg(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eX(a,b,c[s])},
Jv(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eX(a,b,c[s])},
Jt(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kF("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kF("Bad index "+c+" for "+b.l(0)))},
M7(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aV(a,b,null,c,null)
r.set(c,s)}return s},
aV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f8(d))return!0
s=b.w
if(s===4)return!0
if(A.f8(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aV(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aV(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aV(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aV(a,b.x,c,d,e))return!1
return A.aV(a,A.BI(a,b),c,d,e)}if(s===6)return A.aV(a,p,c,d,e)&&A.aV(a,b.x,c,d,e)
if(q===7){if(A.aV(a,b,c,d.x,e))return!0
return A.aV(a,b,c,A.BI(a,d),e)}if(q===6)return A.aV(a,b,c,p,e)||A.aV(a,b,c,d.x,e)
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
if(!A.aV(a,j,c,i,e)||!A.aV(a,i,e,j,c))return!1}return A.ES(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ES(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Kt(a,b,c,d,e)}if(o&&q===10)return A.Ky(a,b,c,d,e)
return!1},
ES(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Kt(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.k7(a,b,r[o])
return A.EC(a,p,null,c,d.y,e)}return A.EC(a,b.y,null,c,d.y,e)},
EC(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aV(a,b[s],d,e[s],f))return!1
return!0},
Ky(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aV(a,r[s],c,q[s],e))return!1
return!0},
hU(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.f8(a))if(s!==6)r=s===7&&A.hU(a.x)
return r},
f8(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
EB(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
zF(a){return a>0?new Array(a):v.typeUniverse.sEA},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
nM:function nM(){this.c=this.b=this.a=null},
oj:function oj(a){this.a=a},
nJ:function nJ(){},
k3:function k3(a){this.a=a},
IV(){var s,r,q
if(self.scheduleImmediate!=null)return A.Lb()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e7(new A.xs(s),1)).observe(r,{childList:true})
return new A.xr(s,r,q)}else if(self.setImmediate!=null)return A.Lc()
return A.Ld()},
IW(a){self.scheduleImmediate(A.e7(new A.xt(a),0))},
IX(a){self.setImmediate(A.e7(new A.xu(a),0))},
IY(a){A.BR(B.D,a)},
BR(a,b){var s=B.c.N(a.a,1000)
return A.Jx(s<0?0:s,b)},
DM(a,b){var s=B.c.N(a.a,1000)
return A.Jy(s<0?0:s,b)},
Jx(a,b){var s=new A.k2(!0)
s.ph(a,b)
return s},
Jy(a,b){var s=new A.k2(!1)
s.pi(a,b)
return s},
h(a){return new A.jw(new A.t($.C,a.i("t<0>")),a.i("jw<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.EI(a,b)},
e(a,b){b.aD(a)},
d(a,b){b.bB(A.E(a),A.ae(a))},
EI(a,b){var s,r,q=new A.zU(b),p=new A.zV(b)
if(a instanceof A.t)a.mH(q,p,t.z)
else{s=t.z
if(a instanceof A.t)a.bC(q,p,s)
else{r=new A.t($.C,t._)
r.a=8
r.c=a
r.mH(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fC(new A.Ac(s),t.H,t.S,t.z)},
bW(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cW(null)
else{s=c.a
s===$&&A.A()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.E(a)
q=A.ae(a)
s.ao(new A.am(r,q))}else{s=A.E(a)
r=A.ae(a)
q=c.a
q===$&&A.A()
q.bz(s,r)
c.a.p()}return}if(a instanceof A.jO){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.A()
r.u(0,s)
A.kq(new A.zS(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.A()
s.vn(p,!1).an(new A.zT(c,b),t.P)
return}}A.EI(a,b)},
F9(a){var s=a.a
s===$&&A.A()
return new A.b7(s,A.n(s).i("b7<1>"))},
IZ(a,b){var s=new A.nt(b.i("nt<0>"))
s.pd(a,b)
return s},
EV(a,b){return A.IZ(a,b)},
Jk(a){return new A.jO(a,1)},
e_(a){return new A.jO(a,0)},
Ei(a,b,c){return 0},
i4(a){var s
if(t.C.b(a)){s=a.gcm()
if(s!=null)return s}return B.P},
ir(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.E(q)
r=A.ae(q)
p=new A.t($.C,b.i("t<0>"))
o=s
n=r
m=A.ke(o,n)
if(m==null)o=new A.am(o,n==null?A.i4(o):n)
else o=m
p.cn(o)
return p}return b.i("y<0>").b(l)?l:A.bn(l,b)},
bq(a,b){var s=a==null?b.a(a):a,r=new A.t($.C,b.i("t<0>"))
r.aO(s)
return r},
Hz(a,b){var s
if(!b.b(null))throw A.b(A.aA(null,"computation","The type parameter is not nullable"))
s=new A.t($.C,b.i("t<0>"))
A.cR(a,new A.rk(null,s,b))
return s},
Bm(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.t($.C,b.i("t<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.rm(i,h,g,f)
try{for(n=J.D(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bC(new A.rl(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cW(A.l([],b.i("B<0>")))
return n}i.a=A.ag(n,null,!1,b.i("0?"))}catch(l){p=A.E(l)
o=A.ae(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.ke(m,k)
if(j==null)m=new A.am(m,k==null?A.i4(m):k)
else m=j
n.cn(m)
return n}else{i.d=p
i.c=o}}return f},
Bl(a,b,c,d){var s=new A.rf(d,null,b,c),r=$.C,q=new A.t(r,c.i("t<0>"))
if(r!==B.i)s=r.fC(s,c.i("0/"),t.K,t.l)
a.dK(new A.cd(q,2,null,s,a.$ti.i("@<1>").V(c).i("cd<1,2>")))
return q},
Hx(a,b){var s,r,q,p=A.l([],b.i("B<jM<0>>"))
for(s=a.length,r=b.i("jM<0>"),q=0;q<a.length;a.length===s||(0,A.r)(a),++q)p.push(new A.jM(a[q],r))
if(p.length===0)return A.bq(A.l([],b.i("B<0>")),b.i("p<0>"))
s=new A.t($.C,b.i("t<p<0>>"))
A.Je(p,new A.rg(new A.ao(s,b.i("ao<p<0>>")),p,b))
return s},
KG(a){return a!=null},
Je(a,b){var s,r={},q=r.a=r.b=0,p=new A.yq(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.r)(a),++q)a[q].v5(p)},
ke(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.nd(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mf(r,q)
return s},
f3(a,b){var s
if($.C!==B.i){s=A.ke(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcm()
if(b==null){A.mf(a,B.P)
b=B.P}}else b=B.P
else if(t.C.b(a))A.mf(a,b)
return new A.am(a,b)},
Jd(a,b,c){var s=new A.t(b,c.i("t<0>"))
s.a=8
s.c=a
return s},
bn(a,b){var s=new A.t($.C,b.i("t<0>"))
s.a=8
s.c=a
return s},
yw(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.BL()
b.cn(new A.am(new A.bB(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.mj(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eY()
b.h_(p.a)
A.eT(b,q)
return}b.a^=2
b.b.cQ(new A.yx(p,b))},
eT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fj(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eT(g.a,f)
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
f.b.fj(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.yB(s,g,p).$0()
else if(q){if((f&1)!==0)new A.yA(s,m).$0()}else if((f&2)!==0)new A.yz(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.t){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hO(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.yw(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hO(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
F_(a,b){if(t.ng.b(a))return b.fC(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.ds(a,t.z,t.K)
throw A.b(A.aA(a,"onError",u.w))},
KF(){var s,r
for(s=$.hO;s!=null;s=$.hO){$.kg=null
r=s.b
$.hO=r
if(r==null)$.kf=null
s.a.$0()}},
L2(){$.Cf=!0
try{A.KF()}finally{$.kg=null
$.Cf=!1
if($.hO!=null)$.CB().$1(A.Fk())}},
F7(a){var s=new A.ns(a),r=$.kf
if(r==null){$.hO=$.kf=s
if(!$.Cf)$.CB().$1(A.Fk())}else $.kf=r.b=s},
L_(a){var s,r,q,p=$.hO
if(p==null){A.F7(a)
$.kg=$.kf
return}s=new A.ns(a)
r=$.kg
if(r==null){s.b=p
$.hO=$.kg=s}else{q=r.b
s.b=q
$.kg=r.b=s
if(q==null)$.kf=s}},
kq(a){var s,r=null,q=$.C
if(B.i===q){A.Aa(r,r,B.i,a)
return}if(B.i===q.gk_().a)s=B.i.gc9()===q.gc9()
else s=!1
if(s){A.Aa(r,r,q,q.bX(a,t.H))
return}s=$.C
s.cQ(s.f4(a))},
BN(a,b){var s=null,r=b.i("cX<0>"),q=new A.cX(s,s,s,s,r)
q.aC(a)
q.lG()
return new A.b7(q,r.i("b7<1>"))},
MV(a,b){return new A.cf(A.bZ(a,"stream",t.K),b.i("cf<0>"))},
vX(a,b,c,d,e){return d?new A.hF(b,null,c,a,e.i("hF<0>")):new A.cX(b,null,c,a,e.i("cX<0>"))},
dQ(a,b,c){return new A.jx(b,a,c.i("jx<0>"))},
oD(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.E(q)
r=A.ae(q)
$.C.fj(s,r)}},
Jb(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.nx(s,b,f),o=A.xH(s,c),n=d==null?A.Ad():d
return new A.dY(a,p,o,s.bX(n,t.H),s,r|q,f.i("dY<0>"))},
IU(a){return new A.xo(a)},
nx(a,b,c){var s=b==null?A.Lf():b
return a.ds(s,t.H,c)},
xH(a,b){if(b==null)b=A.Lg()
if(t.b9.b(b))return a.fC(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.ds(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
KH(a){},
KJ(a,b){$.C.fj(a,b)},
KI(){},
E9(a,b){var s=$.C,r=new A.hr(s,b.i("hr<0>"))
A.kq(r.gmg())
if(a!=null)r.c=s.bX(a,t.H)
return r},
K1(a,b,c){var s=a.D()
if(s!==$.ea())s.b_(new A.zX(b,c))
else b.ao(c)},
K2(a,b,c){var s=a.D()
if(s!==$.ea())s.b_(new A.zY(b,c))
else b.co(c)},
cR(a,b){var s=$.C
if(s===B.i)return s.km(a,b)
return s.km(a,s.f4(b))},
DL(a,b){var s,r=$.C
if(r===B.i)return r.kl(a,b)
s=r.i8(b,t.hU)
return $.C.kl(a,s)},
oN(a,b,c,d){return A.KZ(a,c,b,d)},
KZ(a,b,c,d){return $.C.ni(c,b).aX(a,d)},
KX(a,b,c,d,e){A.kj(d,e)},
kj(a,b){A.L_(new A.A7(a,b))},
A8(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
A9(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
Cg(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
F3(a,b,c,d){return d},
F4(a,b,c,d){return d},
F2(a,b,c,d){return d},
KW(a,b,c,d,e){return null},
Aa(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gc9()
r=c.gc9()
d=s!==r?c.f4(d):c.kh(d,t.H)}A.F7(d)},
KV(a,b,c,d,e){return A.BR(d,B.i!==c?c.kh(e,t.H):e)},
KU(a,b,c,d,e){e=c.vA(e,t.H,t.hU)
return A.DM(d,e)},
KY(a,b,c,d){A.FN(d)},
F1(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.Bn(o,o,o,s,s)
r.C(0,e)}else r=o
s=new A.nC(c.gmv(),c.gmx(),c.gmw(),c.gmr(),c.gms(),c.gmq(),c.glY(),c.gk_(),c.glR(),c.glQ(),c.gmk(),c.gm0(),c.gjK(),c.gkd(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.ow(s,q)
p=d.a
if(p!=null)s.as=new A.ov(s,p)}if(r!=null)s.at=new A.ox(s,r)
return s},
xs:function xs(a){this.a=a},
xr:function xr(a,b,c){this.a=a
this.b=b
this.c=c},
xt:function xt(a){this.a=a},
xu:function xu(a){this.a=a},
k2:function k2(a){this.a=a
this.b=null
this.c=0},
zs:function zs(a,b){this.a=a
this.b=b},
zr:function zr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jw:function jw(a,b){this.a=a
this.b=!1
this.$ti=b},
zU:function zU(a){this.a=a},
zV:function zV(a){this.a=a},
Ac:function Ac(a){this.a=a},
zS:function zS(a,b){this.a=a
this.b=b},
zT:function zT(a,b){this.a=a
this.b=b},
nt:function nt(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
xw:function xw(a){this.a=a},
xx:function xx(a){this.a=a},
xz:function xz(a){this.a=a},
xA:function xA(a,b){this.a=a
this.b=b},
xy:function xy(a,b){this.a=a
this.b=b},
xv:function xv(a){this.a=a},
jO:function jO(a,b){this.a=a
this.b=b},
og:function og(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hE:function hE(a,b){this.a=a
this.$ti=b},
am:function am(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b,c,d,e,f,g){var _=this
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
jC:function jC(){},
jx:function jx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
rk:function rk(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rl:function rl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rf:function rf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mQ:function mQ(a,b){this.a=a
this.b=b},
rg:function rg(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c){this.c=a
this.d=b
this.$ti=c},
jM:function jM(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
yr:function yr(a,b){this.a=a
this.b=b},
ys:function ys(a,b){this.a=a
this.b=b},
yq:function yq(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(){},
az:function az(a,b){this.a=a
this.$ti=b},
ao:function ao(a,b){this.a=a
this.$ti=b},
cd:function cd(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
t:function t(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
yt:function yt(a,b){this.a=a
this.b=b},
yy:function yy(a,b){this.a=a
this.b=b},
yx:function yx(a,b){this.a=a
this.b=b},
yv:function yv(a,b){this.a=a
this.b=b},
yu:function yu(a,b){this.a=a
this.b=b},
yB:function yB(a,b,c){this.a=a
this.b=b
this.c=c},
yC:function yC(a,b){this.a=a
this.b=b},
yD:function yD(a){this.a=a},
yA:function yA(a,b){this.a=a
this.b=b},
yz:function yz(a,b){this.a=a
this.b=b},
yE:function yE(a,b){this.a=a
this.b=b},
yF:function yF(a,b,c){this.a=a
this.b=b
this.c=c},
yG:function yG(a,b){this.a=a
this.b=b},
ns:function ns(a){this.a=a
this.b=null},
ab:function ab(){},
w_:function w_(a,b){this.a=a
this.b=b},
w0:function w0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w1:function w1(a,b){this.a=a
this.b=b},
w2:function w2(a,b){this.a=a
this.b=b},
vY:function vY(a){this.a=a},
vZ:function vZ(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(){},
e2:function e2(){},
zl:function zl(a){this.a=a},
zk:function zk(a){this.a=a},
oh:function oh(){},
jy:function jy(){},
cX:function cX(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
hF:function hF(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
b7:function b7(a,b){this.a=a
this.$ti=b},
dY:function dY(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
np:function np(){},
xo:function xo(a){this.a=a},
xn:function xn(a){this.a=a},
k_:function k_(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b2:function b2(){},
xJ:function xJ(a,b,c){this.a=a
this.b=b
this.c=c},
xI:function xI(a){this.a=a},
hD:function hD(){},
nI:function nI(){},
cc:function cc(a,b){this.b=a
this.a=null
this.$ti=b},
hq:function hq(a,b){this.b=a
this.c=b
this.a=null},
yj:function yj(){},
e1:function e1(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
z3:function z3(a,b){this.a=a
this.b=b},
hr:function hr(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cf:function cf(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jH:function jH(a){this.$ti=a},
dm:function dm(a,b){this.b=a
this.$ti=b},
z1:function z1(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
zX:function zX(a,b){this.a=a
this.b=b},
zY:function zY(a,b){this.a=a
this.b=b},
jK:function jK(){},
hu:function hu(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
eW:function eW(a,b,c){this.b=a
this.a=b
this.$ti=c},
jI:function jI(a,b){this.a=a
this.$ti=b},
hB:function hB(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
jB:function jB(a,b,c){this.a=a
this.b=b
this.$ti=c},
zP:function zP(a,b){this.a=a
this.b=b},
zR:function zR(a,b){this.a=a
this.b=b},
zQ:function zQ(a,b){this.a=a
this.b=b},
zN:function zN(a,b){this.a=a
this.b=b},
zO:function zO(a,b){this.a=a
this.b=b},
zM:function zM(a,b){this.a=a
this.b=b},
zJ:function zJ(a,b){this.a=a
this.b=b},
ow:function ow(a,b){this.a=a
this.b=b},
zI:function zI(a,b){this.a=a
this.b=b},
zH:function zH(a,b){this.a=a
this.b=b},
zL:function zL(a,b){this.a=a
this.b=b},
zK:function zK(a,b){this.a=a
this.b=b},
ov:function ov(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
ou:function ou(){},
nC:function nC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
yf:function yf(a,b,c){this.a=a
this.b=b
this.c=c},
yh:function yh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ye:function ye(a,b){this.a=a
this.b=b},
yg:function yg(a,b,c){this.a=a
this.b=b
this.c=c},
o5:function o5(){},
za:function za(a,b,c){this.a=a
this.b=b
this.c=c},
z9:function z9(a,b){this.a=a
this.b=b},
zb:function zb(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
A7:function A7(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Bn(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dk(d.i("@<0>").V(e).i("dk<1,2>"))
b=A.Cl()}else{if(A.Fq()===b&&A.Fp()===a)return new A.dZ(d.i("@<0>").V(e).i("dZ<1,2>"))
if(a==null)a=A.Ck()}else{if(b==null)b=A.Cl()
if(a==null)a=A.Ck()}return A.Jc(a,b,c,d,e)},
Eb(a,b){var s=a[b]
return s===a?null:s},
C2(a,b,c){if(c==null)a[b]=a
else a[b]=c},
C1(){var s=Object.create(null)
A.C2(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Jc(a,b,c,d,e){var s=c!=null?c:new A.yd(d)
return new A.jE(a,b,s,d.i("@<0>").V(e).i("jE<1,2>"))},
dH(a,b,c,d){if(b==null){if(a==null)return new A.bE(c.i("@<0>").V(d).i("bE<1,2>"))
b=A.Cl()}else{if(A.Fq()===b&&A.Fp()===a)return new A.iC(c.i("@<0>").V(d).i("iC<1,2>"))
if(a==null)a=A.Ck()}return A.Jn(a,b,null,c,d)},
m(a,b,c){return A.FC(a,new A.bE(b.i("@<0>").V(c).i("bE<1,2>")))},
w(a,b){return new A.bE(a.i("@<0>").V(b).i("bE<1,2>"))},
Jn(a,b,c,d,e){return new A.jP(a,b,new A.z_(d),d.i("@<0>").V(e).i("jP<1,2>"))},
lM(a){return new A.dl(a.i("dl<0>"))},
aO(a){return new A.dl(a.i("dl<0>"))},
at(a,b){return A.LS(a,new A.dl(b.i("dl<0>")))},
C3(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hw(a,b,c){var s=new A.e0(a,b,c.i("e0<0>"))
s.c=a.e
return s},
K9(a,b){return J.v(a,b)},
Ka(a){return J.a8(a)},
Df(a){if(a.length===0)return null
return B.b.gY(a)},
ba(a,b,c){var s=A.dH(null,null,b,c)
a.a3(0,new A.ty(s,b,c))
return s},
cI(a,b,c){var s=A.dH(null,null,b,c)
s.C(0,a)
return s},
tz(a,b){var s,r,q=A.lM(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.u(0,b.a(a[r]))
return q},
d6(a,b){var s=A.lM(b)
s.C(0,a)
return s},
HP(a,b){var s=t.bP
return J.CI(s.a(a),s.a(b))},
tO(a){var s,r
if(A.Cr(a))return"{...}"
s=new A.a1("")
try{r={}
$.f4.push(a)
s.a+="{"
r.a=!0
a.a3(0,new A.tP(r,s))
s.a+="}"}finally{$.f4.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Bv(a){return new A.iF(A.ag(A.HQ(null),null,!1,a.i("0?")),a.i("iF<0>"))},
HQ(a){return 8},
dk:function dk(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
yI:function yI(a){this.a=a},
yH:function yH(a){this.a=a},
dZ:function dZ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jE:function jE(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
yd:function yd(a){this.a=a},
eU:function eU(a,b){this.a=a
this.$ti=b},
nN:function nN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
jP:function jP(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
z_:function z_(a){this.a=a},
dl:function dl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
z0:function z0(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ty:function ty(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
nU:function nU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b4:function b4(){},
J:function J(){},
U:function U(){},
tN:function tN(a){this.a=a},
tP:function tP(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.$ti=b},
nW:function nW(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ol:function ol(){},
iJ:function iJ(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
iF:function iF(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
nV:function nV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cr:function cr(){},
jY:function jY(){},
k8:function k8(){},
EY(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.E(r)
q=A.a9(String(s),null,null)
throw A.b(q)}q=A.A_(p)
return q},
A_(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.nR(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.A_(a[s])
return a},
JS(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Gr()
else s=new Uint8Array(o)
for(r=J.L(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
JR(a,b,c,d){var s=a?$.Gq():$.Gp()
if(s==null)return null
if(0===c&&d===b.length)return A.Ez(s,b)
return A.Ez(s,b.subarray(c,d))},
Ez(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
CN(a,b,c,d,e,f){if(B.c.al(f,4)!==0)throw A.b(A.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a9("Invalid base64 padding, more than two '=' characters",a,b))},
J2(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.L(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
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
if(o<0||o>255)break;++q}throw A.b(A.aA(b,"Not a byte value at index "+q+": 0x"+B.c.l2(s.h(b,q),16),null))},
J1(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ah(f,2),i=f&3,h=$.CC()
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
if(i===3){if((j&3)!==0)throw A.b(A.a9(l,a,r))
s&2&&A.I(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a9(l,a,r))
s&2&&A.I(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.DZ(a,r+1,c,-m-1)}throw A.b(A.a9(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a9(k,a,r))},
J_(a,b,c,d){var s=A.J0(a,b,c),r=(d&3)+(s-b),q=B.c.ah(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Gi()},
J0(a,b,c){var s,r=c,q=r,p=0
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
DZ(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.a9("Invalid padding character",a,b))
return-s-1},
Hl(a){return B.cK.h(0,a.toLowerCase())},
Dl(a,b,c){return new A.iD(a,b)},
Kd(a){return a.q()},
Jl(a,b){return new A.yX(a,[],A.LI())},
Jm(a,b,c){var s,r=new A.a1("")
A.Ed(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ed(a,b,c,d){var s=A.Jl(b,c)
s.j_(a)},
EA(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nR:function nR(a,b){this.a=a
this.b=b
this.c=null},
yW:function yW(a){this.a=a},
nS:function nS(a){this.a=a},
yU:function yU(a,b,c){this.b=a
this.c=b
this.a=c},
zD:function zD(){},
zC:function zC(){},
kC:function kC(){},
ok:function ok(){},
kD:function kD(a){this.a=a},
zu:function zu(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
i6:function i6(a){this.a=a},
nv:function nv(a){this.a=0
this.b=a},
xG:function xG(a){this.c=null
this.a=0
this.b=a},
xC:function xC(){},
xp:function xp(a,b){this.a=a
this.b=b},
kI:function kI(){},
nu:function nu(){this.a=0},
xB:function xB(a,b){this.a=a
this.b=b},
pd:function pd(){},
hk:function hk(a){this.a=a},
ny:function ny(a,b){this.a=a
this.b=b
this.c=0},
kV:function kV(){},
ob:function ob(a,b,c){this.a=a
this.b=b
this.$ti=c},
eR:function eR(a,b,c){this.a=a
this.b=b
this.$ti=c},
kX:function kX(){},
aD:function aD(){},
qa:function qa(a){this.a=a},
ep:function ep(){},
iD:function iD(a,b){this.a=a
this.b=b},
lE:function lE(a,b){this.a=a
this.b=b},
rX:function rX(){},
lG:function lG(a){this.b=a},
yV:function yV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
lF:function lF(a){this.a=a},
yY:function yY(){},
yZ:function yZ(a,b){this.a=a
this.b=b},
yX:function yX(a,b,c){this.c=a
this.a=b
this.b=c},
lJ:function lJ(){},
lK:function lK(a){this.a=a},
mM:function mM(){},
zq:function zq(a,b){this.a=a
this.b=b},
k1:function k1(){},
od:function od(a){this.a=a},
zB:function zB(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function n5(){},
n6:function n6(){},
on:function on(a){this.b=this.a=0
this.c=a},
zE:function zE(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jo:function jo(a){this.a=a},
dn:function dn(a){this.a=a
this.b=16
this.c=0},
oy:function oy(){},
C_(a,b){var s=A.J9(a,b)
if(s==null)throw A.b(A.a9("Could not parse BigInt",a,null))
return s},
J6(a,b){var s,r,q=$.cj(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bi(0,$.CD()).fN(0,A.jz(s))
s=0
o=0}}if(b)return q.bF(0)
return q},
E0(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
J7(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.vC(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.E0(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.E0(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cj()
l=A.bJ(j,i)
return new A.aJ(l===0?!1:c,i,l)},
J9(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Gk().ee(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.J6(p,q)
if(o!=null)return A.J7(o,2,q)
return null},
bJ(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
BY(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
E_(a){var s
if(a===0)return $.cj()
if(a===1)return $.fc()
if(a===2)return $.Gl()
if(Math.abs(a)<4294967296)return A.jz(B.c.iU(a))
s=A.J3(a)
return s},
jz(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bJ(4,s)
return new A.aJ(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bJ(1,s)
return new A.aJ(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ah(a,16)
r=A.bJ(2,s)
return new A.aJ(r===0?!1:o,s,r)}r=B.c.N(B.c.gmY(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.N(a,65536)}r=A.bJ(r,s)
return new A.aJ(r===0?!1:o,s,r)},
J3(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.O("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cj()
r=$.Gj()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.I(r)
r[p]=0}q=J.oS(B.f.gaa(r))
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
l=new A.aJ(!1,m,4)
if(n<0)k=l.dG(0,-n)
else k=n>0?l.bG(0,n):l
if(s)return k.bF(0)
return k},
BZ(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.I(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.I(d)
d[s]=0}return b+c},
E6(a,b,c,d){var s,r,q,p,o,n=B.c.N(c,16),m=B.c.al(c,16),l=16-m,k=B.c.bG(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dG(p,l)
r&2&&A.I(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bG((p&k)>>>0,m)}r&2&&A.I(d)
d[n]=q},
E1(a,b,c,d){var s,r,q,p,o=B.c.N(c,16)
if(B.c.al(c,16)===0)return A.BZ(a,b,o,d)
s=b+o+1
A.E6(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.I(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
J8(a,b,c,d){var s,r,q,p,o=B.c.N(c,16),n=B.c.al(c,16),m=16-n,l=B.c.bG(1,n)-1,k=B.c.dG(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bG((q&l)>>>0,m)
s&2&&A.I(d)
d[r]=(p|k)>>>0
k=B.c.dG(q,n)}s&2&&A.I(d)
d[j]=k},
xD(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
J4(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ah(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ah(r,16)}s&2&&A.I(e)
e[b]=r},
nw(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ah(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ah(r,16)&1)}},
E7(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.I(d)
d[e]=p&65535
r=B.c.N(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.I(d)
d[e]=n&65535
r=B.c.N(n,65536)}},
J5(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.ja((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
M_(a){return A.kn(a)},
Bh(a,b){return new A.lk(new WeakMap(),a,b.i("lk<0>"))},
Bi(a){if(A.bw(a)||typeof a=="number"||typeof a=="string"||a instanceof A.eY)A.Hq(a)},
Hq(a){throw A.b(A.aA(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
yp(a,b){var s=$.Gm()
s=s==null?null:new s(A.e7(A.MA(a,b),1))
return new A.nL(s,b.i("nL<0>"))},
aI(a){var s=A.j3(a,null)
if(s!=null)return s
throw A.b(A.a9(a,null,null))},
LO(a){var s=A.Ie(a)
if(s!=null)return s
throw A.b(A.a9("Invalid double",a,null))},
Hp(a,b){a=A.aK(a,new Error())
a.stack=b.l(0)
throw a},
ag(a,b,c,d){var s,r=c?J.Dh(a,d):J.Bq(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bG(a,b,c){var s,r=A.l([],c.i("B<0>"))
for(s=J.D(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("B<0>"))
s=A.l([],b.i("B<0>"))
for(r=J.D(a);r.k();)s.push(r.gn())
return s},
cJ(a,b){var s=A.bG(a,!1,b)
s.$flags=3
return s},
dS(a,b,c){var s,r,q,p,o
A.bb(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.au(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.DA(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.IE(a,b,c)
if(r)a=J.oW(a,c)
if(b>0)a=J.oV(a,b)
s=A.N(a,t.S)
return A.DA(s)},
IE(a,b,c){var s=a.length
if(b>=s)return""
return A.Ig(a,b,c==null||c>s?s:c)},
ah(a,b,c){return new A.et(a,A.Bs(a,!1,b,c,!1,""))},
LZ(a,b){return a==null?b==null:a===b},
w3(a,b,c){var s=J.D(b)
if(!s.k())return a
if(c.length===0){do a+=A.q(s.gn())
while(s.k())}else{a+=A.q(s.gn())
while(s.k())a=a+c+A.q(s.gn())}return a},
BT(){var s,r,q=A.I9()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.DT
if(s!=null&&q===$.DS)return s
r=A.n4(q)
$.DT=r
$.DS=q
return r},
hI(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.l){s=$.Gn()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bt(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
JM(a){var s,r,q
if(!$.Go())return A.JN(a)
s=new URLSearchParams()
a.a3(0,new A.zA(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
BL(){return A.ae(new Error())},
Be(a,b,c,d,e,f,g){var s=A.Ih(a,b,c,d,e,f,g,0,!0)
return new A.aM(s==null?new A.qO(a,b,c,d,e,f,g,0).$0():s,0,!0)},
Hg(){return new A.aM(Date.now(),0,!1)},
lc(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.au(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.au(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aA(b,s,u.B))
A.bZ(c,"isUtc",t.y)
return a},
Hh(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
D1(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
lb(a){if(a>=10)return""+a
return"0"+a},
d2(a,b,c){return new A.aE(a+1000*b+1e6*c)},
fs(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aA(b,"name","No enum value with that name"))},
ik(a){if(typeof a=="number"||A.bw(a)||a==null)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Dz(a)},
D3(a,b){A.bZ(a,"error",t.K)
A.bZ(b,"stackTrace",t.l)
A.Hp(a,b)},
kF(a){return new A.kE(a)},
O(a,b){return new A.bB(!1,null,b,a)},
aA(a,b,c){return new A.bB(!0,a,b,c)},
kB(a,b){return a},
b_(a){var s=null
return new A.db(s,s,!1,s,s,a)},
vx(a,b){return new A.db(null,null,!0,a,b,"Value not in range")},
au(a,b,c,d,e){return new A.db(b,c,!0,a,d,"Invalid value")},
DE(a,b,c,d){if(a<b||a>c)throw A.b(A.au(a,b,c,d,null))
return a},
Ik(a,b,c,d){return A.Dd(a,d,b,null,c)},
bc(a,b,c){if(0>a||a>c)throw A.b(A.au(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.au(b,a,c,"end",null))
return b}return c},
bb(a,b){if(a<0)throw A.b(A.au(a,0,null,b,null))
return a},
Dc(a,b){var s=b.b
return new A.iu(s,!0,a,null,"Index out of range")},
lw(a,b,c,d,e){return new A.iu(b,!0,a,e,"Index out of range")},
Dd(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lw(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cU(a)},
DQ(a){return new A.mZ(a)},
x(a){return new A.bi(a)},
aB(a){return new A.l_(a)},
D4(a){return new A.nK(a)},
a9(a,b,c){return new A.bh(a,b,c)},
HF(a,b,c){var s,r
if(A.Cr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.f4.push(a)
try{A.KC(a,s)}finally{$.f4.pop()}r=A.w3(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
rU(a,b,c){var s,r
if(A.Cr(a))return b+"..."+c
s=new A.a1(b)
$.f4.push(a)
try{r=s
r.a=A.w3(r.a,a,", ")}finally{$.f4.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
KC(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
Do(a,b,c,d,e){return new A.eg(a,b.i("@<0>").V(c).V(d).V(e).i("eg<1,2,3,4>"))},
c7(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a8(a)
b=J.a8(b)
return A.h8(A.ay(A.ay($.fd(),s),b))}if(B.d===d){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
return A.h8(A.ay(A.ay(A.ay($.fd(),s),b),c))}if(B.d===e){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
return A.h8(A.ay(A.ay(A.ay(A.ay($.fd(),s),b),c),d))}if(B.d===f){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
return A.h8(A.ay(A.ay(A.ay(A.ay(A.ay($.fd(),s),b),c),d),e))}if(B.d===g){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
f=J.a8(f)
return A.h8(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fd(),s),b),c),d),e),f))}s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
f=J.a8(f)
g=J.a8(g)
g=A.h8(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fd(),s),b),c),d),e),f),g))
return g},
ue(a){var s,r=$.fd()
for(s=J.D(a);s.k();)r=A.ay(r,J.a8(s.gn()))
return A.h8(r)},
EJ(a,b){return 65536+((a&1023)<<10)+(b&1023)},
n4(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.DR(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnN()
else if(s===32)return A.DR(B.a.A(a5,5,a4),0,a3).gnN()}r=A.ag(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.F6(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.F6(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+B.a.A(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.dt(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.af(a5,"http",0)){if(i&&o+3===n&&B.a.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dt(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.af(a5,"https",0)){if(i&&o+4===n&&B.a.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dt(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.ce(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.C7(a5,0,q)
else{if(q===0)A.hH(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Ev(a5,c,p-1):""
a=A.Et(a5,p,o,!1)
i=o+1
if(i<n){a0=A.j3(B.a.A(a5,i,n),a3)
d=A.zw(a0==null?A.u(A.a9("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Eu(a5,n,m,a3,j,a!=null)
a2=m<l?A.zx(a5,m+1,l,a3):a3
return A.ka(j,b,a,d,a1,a2,l<a4?A.Es(a5,l+1,a4):a3)},
IP(a){return A.Ca(a,0,a.length,B.l,!1)},
n3(a,b,c){throw A.b(A.a9("Illegal IPv4 address, "+a,b,c))},
IM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.n3("each part must be in the range 0..255",a,r)}A.n3("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.n3(k,a,q)}l=p+1
s&2&&A.I(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.n3(k,a,q)
p=l}A.n3("IPv4 address should contain exactly 4 parts",a,q)},
IN(a,b,c){var s
if(b===c)throw A.b(A.a9("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.IO(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.DU(a,b,c)
return!0},
IO(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bh(o,a,r)
s=r
break}return new A.bh("Unexpected character",a,r-1)}if(s-1===b)return new A.bh(o,a,s)
return new A.bh("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bh("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bh("Invalid IPvFuture address character",a,s)}},
DU(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.wF(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.IM(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.c.ah(n,8)
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
B.f.ak(s,b,16,s,c)
B.f.kv(s,c,b,0)}}return s},
ka(a,b,c,d,e,f,g){return new A.k9(a,b,c,d,e,f,g)},
Ep(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hH(a,b,c){throw A.b(A.a9(c,a,b))},
JJ(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.G(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
zw(a,b){if(a!=null&&a===A.Ep(b))return null
return a},
Et(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hH(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.JK(a,r,s)
if(p<s){o=p+1
q=A.Ey(a,B.a.af(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.IN(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cb(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Ey(a,B.a.af(a,"25",o)?s+3:o,c,"%25")}else q=""
A.DU(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.JP(a,b,c)},
JK(a,b,c){var s=B.a.cb(a,"%",b)
return s>=b&&s<c?s:c},
Ey(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a1(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.C8(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a1("")
m=i.a+=B.a.A(a,r,s)
if(n)o=B.a.A(a,s,s+3)
else if(o==="%")A.hH(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a1("")
if(r<s){i.a+=B.a.A(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.A(a,r,s)
if(i==null){i=new A.a1("")
n=i}else n=i
n.a+=j
m=A.C6(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
JP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.C8(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a1("")
l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.A(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a1("")
if(r<s){q.a+=B.a.A(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hH(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a1("")
m=q}else m=q
m.a+=l
k=A.C6(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
C7(a,b,c){var s,r,q
if(b===c)return""
if(!A.Er(a.charCodeAt(b)))A.hH(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hH(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.JI(r?a.toLowerCase():a)},
JI(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Ev(a,b,c){if(a==null)return""
return A.kb(a,b,c,16,!1,!1)},
Eu(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kb(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.JO(s,e,f)},
JO(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.C9(a,!s||c)
return A.f1(a)},
zx(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.kb(a,b,c,256,!0,!1)}if(d==null)return null
return A.JM(d)},
JN(a){var s={},r=new A.a1("")
s.a=""
a.a3(0,new A.zy(new A.zz(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Es(a,b,c){if(a==null)return null
return A.kb(a,b,c,256,!0,!1)},
C8(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.AG(s)
p=A.AG(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bt(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
C6(a){var s,r,q,p,o,n="0123456789ABCDEF"
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
p+=3}}return A.dS(s,0,null)},
kb(a,b,c,d,e,f){var s=A.Ex(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
Ex(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.C8(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hH(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.C6(o)}if(p==null){p=new A.a1("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Ew(a){if(B.a.S(a,"."))return!0
return B.a.bS(a,"/.")!==-1},
f1(a){var s,r,q,p,o,n
if(!A.Ew(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
C9(a,b){var s,r,q,p,o,n
if(!A.Ew(a))return!b?A.Eq(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.gY(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Eq(s[0])
return B.b.B(s,"/")},
Eq(a){var s,r,q=a.length
if(q>=2&&A.Er(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ag(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
JQ(a,b){if(a.xp("package")&&a.c==null)return A.F8(b,0,b.length)
return-1},
JL(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
Ca(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.l===d)return B.a.A(a,b,c)
else p=new A.ck(B.a.A(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.O("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.O("Truncated URI",null))
p.push(A.JL(a,o+1))
o+=2}else p.push(r)}}return d.f5(p)},
Er(a){var s=a|32
return 97<=s&&s<=122},
DR(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a9(k,a,r))}}if(q<0&&r>b)throw A.b(A.a9(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.gY(j)
if(p!==44||r!==n+7||!B.a.af(a,"base64",n+1))throw A.b(A.a9("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aq.xJ(a,m,s)
else{l=A.Ex(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dt(a,m,s,l)}return new A.wE(a,j,c)},
F6(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Eh(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.F8(a.a,a.e,a.f)
return-1},
F8(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
K4(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
xE:function xE(){},
xF:function xF(){},
nL:function nL(a,b){this.a=a
this.$ti=b},
zA:function zA(a){this.a=a},
qO:function qO(a,b,c,d,e,f,g,h){var _=this
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
aE:function aE(a){this.a=a},
yk:function yk(){},
af:function af(){},
kE:function kE(a){this.a=a},
dg:function dg(){},
bB:function bB(a,b,c,d){var _=this
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
iu:function iu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cU:function cU(a){this.a=a},
mZ:function mZ(a){this.a=a},
bi:function bi(a){this.a=a},
l_:function l_(a){this.a=a},
m5:function m5(){},
jg:function jg(){},
nK:function nK(a){this.a=a},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
ly:function ly(){},
o:function o(){},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
of:function of(){},
jh:function jh(){this.b=this.a=0},
j8:function j8(a){this.a=a},
mt:function mt(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a1:function a1(a){this.a=a},
wF:function wF(a){this.a=a},
k9:function k9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
zz:function zz(a,b){this.a=a
this.b=b},
zy:function zy(a){this.a=a},
wE:function wE(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
nF:function nF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
lk:function lk(a,b,c){this.a=a
this.b=b
this.$ti=c},
HR(a){return a},
HI(a){return a},
BO(a){return a},
HG(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.EF(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Hy(a){return new v.G.Promise(A.bX(new A.rj(a)))},
m1:function m1(a){this.a=a},
rj:function rj(a){this.a=a},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
A3(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.JW,a)
s[$.fb()]=a
return s},
cZ(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.JX,a)
s[$.fb()]=a
return s},
bX(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.JY,a)
s[$.fb()]=a
return s},
oA(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.JZ,a)
s[$.fb()]=a
return s},
hN(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.K_,a)
s[$.fb()]=a
return s},
Cd(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.K0,a)
s[$.fb()]=a
return s},
JW(a){return a.$0()},
JX(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
JY(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
JZ(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
K_(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
K0(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
EX(a){return a==null||A.bw(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
f9(a){if(A.EX(a))return a
return new A.AL(new A.dZ(t.mp)).$1(a)},
Co(a,b){return a[b]},
Ci(a,b,c){return a[b].apply(a,c)},
Lv(a,b){var s,r
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
a6(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.az(s,b.i("az<0>"))
a.then(A.e7(new A.AS(r),1),A.e7(new A.AT(r),1))
return s},
EW(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
oI(a){if(A.EW(a))return a
return new A.Am(new A.dZ(t.mp)).$1(a)},
AL:function AL(a){this.a=a},
AS:function AS(a){this.a=a},
AT:function AT(a){this.a=a},
Am:function Am(a){this.a=a},
FH(a,b){return Math.max(a,b)},
DC(){return B.as},
DD(){return $.B5()},
yR:function yR(){},
yS:function yS(a){this.a=a},
GY(a,b,c){return J.CG(a,b,c)},
li:function li(){},
a3:function a3(){},
pf:function pf(a){this.a=a},
pg:function pg(a){this.a=a},
ph:function ph(a,b){this.a=a
this.b=b},
pi:function pi(a){this.a=a},
pj:function pj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pk:function pk(a){this.a=a},
le:function le(a){this.$ti=a},
iy:function iy(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b){this.a=a
this.$ti=b},
hG:function hG(){},
fZ:function fZ(a,b){this.a=a
this.$ti=b},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c){this.a=a
this.b=b
this.$ti=c},
ld:function ld(){},
Dt(){throw A.b(A.Y(u.O))},
IL(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
m0:function m0(){},
n1:function n1(){},
aq(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dS(m,0,null)},
cl:function cl(a){this.a=a},
c4:function c4(){this.a=null},
lq:function lq(){},
ro:function ro(){},
cY(a){var s=new Uint32Array(A.b3(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.o9(s,r,a,q,new Uint32Array(16))},
o8:function o8(){},
zd:function zd(){},
o9:function o9(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kx:function kx(){},
pq:function pq(){},
iH:function iH(a){this.a=a},
jb:function jb(){},
tM:function tM(){},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
vJ:function vJ(){},
jc:function jc(a,b){this.b=a
this.c=b},
my:function my(a){this.a=a},
by(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
l7(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
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
if((f&B.c.bG(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.by(s)
a5.$flags&2&&A.I(a5)
a5[0]=k
a5[1]=A.by(r)
a5[2]=A.by(q)
a5[3]=A.by(p)},
D0(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cR(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.N(q,n),!1)
r.setUint32(12,B.c.al(q,n),!1)
p=J.bN(B.az.gaa(r),0,null)
o=new Uint32Array(4)
A.l7(o,a,b)
A.l7(o,a,p)
return J.bN(B.y.gaa(o),0,null)},
l6:function l6(a,b,c){this.c=a
this.d=b
this.a=c},
qs:function qs(){},
nD:function nD(){},
nE:function nE(){},
oF(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kr()===B.O){a5=A.f5(a5)
a6=A.f5(a6)
a7=A.f5(a7)
a8=A.f5(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ai[a5>>>24&255]^B.ag[a6>>>16&255]^B.ah[a7>>>8&255]^B.ak[a8&255]^b3[r]
o=B.ai[a6>>>24&255]^B.ag[a7>>>16&255]^B.ah[a8>>>8&255]^B.ak[a5&255]^b3[r+1]
n=B.ai[a7>>>24&255]^B.ag[a8>>>16&255]^B.ah[a5>>>8&255]^B.ak[a6&255]^b3[r+2]
m=B.ai[a8>>>24&255]^B.ag[a5>>>16&255]^B.ah[a6>>>8&255]^B.ak[a7&255]^b3[r+3]
r+=4}o=B.k[a5>>>24&255]
n=B.k[a6>>>16&255]
m=B.k[a7>>>8&255]
l=B.k[a8&255]
k=B.k[a6>>>24&255]
j=B.k[a7>>>16&255]
i=B.k[a8>>>8&255]
h=B.k[a5&255]
g=B.k[a7>>>24&255]
f=B.k[a8>>>16&255]
e=B.k[a5>>>8&255]
d=B.k[a6&255]
c=B.k[a8>>>24&255]
b=B.k[a5>>>16&255]
a=B.k[a6>>>8&255]
a0=B.k[a7&255]
a1=(((o&255)<<24|(n&255)<<16|(m&255)<<8|l&255)^b3[r])>>>0
a2=(((k&255)<<24|(j&255)<<16|(i&255)<<8|h&255)^b3[r+1])>>>0
a3=(((g&255)<<24|(f&255)<<16|(e&255)<<8|d&255)^b3[r+2])>>>0
a4=(((c&255)<<24|(b&255)<<16|(a&255)<<8|a0&255)^b3[r+3])>>>0
if($.kr()===B.O){a1=A.f5(a1)
a2=A.f5(a2)
a3=A.f5(a3)
a4=A.f5(a4)}a9.$flags&2&&A.I(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Fg(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge8(),h=B.cJ.h(0,i.gm(0))
if(h==null)throw A.b(A.O("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.CG(B.y.gaa(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.I(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.kr()===B.O)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.al(m,k)
if(n===0)j=A.Fc((j<<8|j>>>24)>>>0)^B.cl[B.c.ja(m,k)-1]<<24
else if(o&&n===4)j=A.Fc(j)
r[m]=(j^r[m-k])>>>0}return r},
Fc(a){return(B.k[a>>>24&255]<<24|B.k[a>>>16&255]<<16|B.k[a>>>8&255]<<8|B.k[a&255])>>>0},
f5(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qd:function qd(){},
qt:function qt(){},
y8:function y8(){},
mq:function mq(a,b){this.a=a
this.b=b},
kJ:function kJ(){},
kK:function kK(){},
kL:function kL(){},
kM:function kM(){},
p9:function p9(){},
Fd(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mq("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eh)){s=J.Z(a)
if(B.a.S(s,"TypeError: "))s=B.a.ag(s,11)
a=new A.eh(s,b.b)}return a},
F0(a,b,c){A.D3(A.Fd(a,c),b)},
JV(a,b){return new A.dm(new A.zW(a,b),t.fb)},
hP(a,b,c){return A.KQ(a,b,c)},
KQ(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hP=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.p(),$async$hP)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.A4(e)
a1.r=new A.A5(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a6(c.read(),k),$async$hP)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.E(b)
l=A.ae(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Fd(m,a)
k=l
j=a1.b
if(j>=4)A.u(a1.bI())
if((j&1)!==0){j=a1.gaQ()
j.aI(d,k==null?B.P:k)}s=15
return A.a(a1.p(),$async$hP)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.vE()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.u(a1.bI())
if((f&1)!==0)a1.gaQ().aC(g)}g=a1.b
s=((g&1)!==0?(a1.gaQ().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.az(new A.t($.C,j),i):g).a,$async$hP)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hP,r)},
kR:function kR(a){this.b=!1
this.c=a},
pc:function pc(a){this.a=a},
zW:function zW(a,b){this.a=a
this.b=b},
A4:function A4(a){this.a=a},
A5:function A5(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a){this.a=a},
pe:function pe(a){this.a=a},
CY(a,b){return new A.eh(a,b)},
eh:function eh(a,b){this.a=a
this.b=b},
lU:function lU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
I1(a,b){var s=t.N,r=A.l([],t.e8),q=$.Cw()
if(!q.b.test(a))A.u(A.aA(a,"method","Not a valid method"))
return new A.u6(A.w(s,s),r,a,b,A.dH(new A.kL(),new A.kM(),s,s))},
u6:function u6(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
u7:function u7(a,b){this.a=a
this.b=b},
In(a,b){var s=new Uint8Array(0),r=$.Cw()
if(!r.b.test(a))A.u(A.aA(a,"method","Not a valid method"))
r=t.N
return new A.vA(s,a,b,A.dH(new A.kL(),new A.kM(),r,r))},
vA:function vA(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jk:function jk(){},
mL:function mL(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
GZ(a){return a.toLowerCase()},
i8:function i8(a,b,c){this.a=a
this.c=b
this.$ti=c},
HU(a){return A.Mz("media type",a,new A.tQ(a))},
Bx(a,b,c){var s=t.N
if(c==null)s=A.w(s,s)
else{s=new A.i8(A.Lw(),A.w(s,t.af),t.fo)
s.C(0,c)}return new A.fA(a.toLowerCase(),b.toLowerCase(),new A.cT(s,t.ph))},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
tQ:function tQ(a){this.a=a},
tS:function tS(a){this.a=a},
tR:function tR(){},
LQ(a){var s
a.ne($.Gy(),"quoted string")
s=a.gkI().h(0,0)
return A.FU(B.a.A(s,1,s.length-1),$.Gx(),new A.Ay(),null)},
Ay:function Ay(){},
Hd(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="spec",a0="field",a1="store"
switch(a2){case"open":s=a3.h(0,"stores")
r=a3.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.a4("Malformed open payload."))
q=A.l([],t.d)
for(p=J.D(s);p.k();)q.push(A.He(p.gn(),"stores"))
p=t.N
p=A.w(p,p)
for(o=r.gac(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string"&&typeof n.b=="string")p.j(0,m,A.G(n.b))}return new A.m4(q,p)
case"capabilities":return B.bA
case"health":return B.bD
case"close":return B.bB
case"get":return new A.lp(A.c3(a3),A.l1(a3,"id"),A.cE(a3))
case"rows":l=a3.h(0,"ids")
if(!t.j.b(l))throw A.b(A.a4("Malformed rows payload."))
q=A.c3(a3)
p=A.l([],t.s)
for(o=J.D(l);o.k();)p.push(A.G(o.gn()))
return new A.ms(q,p,A.cE(a3))
case"mutate":return new A.lV(A.c3(a3),A.K8(a3.h(0,"mutation")),A.cE(a3))
case"query":return new A.mk(A.c3(a3),A.eE(a3.h(0,a)),A.cE(a3))
case"count":return new A.l3(A.c3(a3),A.eE(a3.h(0,a)),A.cE(a3))
case"countDistinct":return new A.l2(A.c3(a3),A.l1(a3,a0),A.eE(a3.h(0,a)),A.cE(a3))
case"distinct":q=A.c3(a3)
p=A.l1(a3,a0)
o=a3.h(0,a)
return new A.lf(q,p,A.eE(o==null?B.n:o),A.cE(a3))
case"ids":return new A.lu(A.c3(a3),A.eE(a3.h(0,a)),A.cE(a3))
case"aggregate":k=a3.h(0,"fn")
j=A.Bp(new A.al(B.cu,new A.q8(k),t.gx))
if(j==null)throw A.b(A.a4("Unknown aggregate: "+A.q(k)))
return new A.ky(A.c3(a3),j,A.l1(a3,a0),A.eE(a3.h(0,a)),A.cE(a3))
case"explain":return new A.ll(A.c3(a3),A.eE(a3.h(0,a)),A.cE(a3))
case"search":return new A.mx(A.c3(a3),A.Iu(a3.h(0,a)),A.cE(a3))
case"txBegin":i=a3.h(0,"readOnly")
if(!A.bw(i))throw A.b(A.a4("Malformed txBegin payload."))
h=a3.h(0,"durability")
g=A.Bp(new A.al(B.cH,new A.q9(h),t.mE))
if(typeof h=="string"&&g==null)throw A.b(A.a4("Unknown tx durability: "+h))
return new A.mS(i,g==null?B.bl:g)
case"txCommit":case"txRollback":f=a3.h(0,"session")
if(typeof f!="string")throw A.b(A.a4("Malformed tx payload."))
return a2==="txCommit"?new A.mT(f):new A.mV(f)
case"txSavepoint":case"txRollbackTo":case"txRelease":f=a3.h(0,"session")
e=a3.h(0,"name")
if(typeof f!="string"||typeof e!="string")throw A.b(A.a4("Malformed savepoint payload."))
A:{if("txSavepoint"===a2){q=new A.mX(f,e)
break A}if("txRollbackTo"===a2){q=new A.mW(f,e)
break A}q=new A.mU(f,e)
break A}return q
case"watchOne":return new A.nb(A.c3(a3),A.l1(a3,"id"))
case"watch":return new A.nc(A.c3(a3),A.eE(a3.h(0,a)))
case"watchCancel":d=a3.h(0,"subscription")
if(typeof d!="string")throw A.b(A.a4("Malformed watchCancel payload."))
return new A.na(d)
case"analyze":if(typeof a3.h(0,a1)=="string"){q=a3.h(0,a1)
q.toString
A.G(q)}else q=null
return new A.kA(q)
case"walCheckpoint":return B.bQ
case"vacuum":return B.bP
case"pruneOutbox":return B.bO
case"compact":c=a3.h(0,a1)
b=a3.h(0,"olderThanMs")
if(typeof c!="string"||!A.ar(b))throw A.b(A.a4("Malformed compact payload."))
return new A.kZ(c,b)
default:return null}},
c3(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.a4("Malformed store name."))
return s},
l1(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.a4('Malformed field "'+b+'".'))
return s},
cE(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.a4("Malformed session id."))
return s},
He(a,b){var s,r,q
if(t.f.b(a)){s=A.w(t.N,t.X)
for(r=a.gac(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.a4('Malformed field "'+b+'".'))},
KE(a){var s
A:{if(a instanceof A.eL){s="ValidationException"
break A}if(a instanceof A.eK){s="UniqueConstraintException"
break A}if(a instanceof A.eA){s="NotNullConstraintException"
break A}if(a instanceof A.fi){s="CheckConstraintException"
break A}if(a instanceof A.fL){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fv){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hd){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fx){s="FtsUnavailableError"
break A}if(a instanceof A.eF){s="SchemaRegistrationError"
break A}if(a instanceof A.fX){s="SchemaTooNewError"
break A}if(a instanceof A.cO){s="StorageError"
break A}if(a instanceof A.fT){s="RecordNotFoundException"
break A}if(a instanceof A.h2){s="StaleCursorError"
break A}if(a instanceof A.fD){s="MissingLimitError"
break A}if(a instanceof A.fm){s="ConflictBlockedError"
break A}if(a instanceof A.em){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.fS){s="ReadOnlyTxError"
break A}throw A.b(A.fR(u.P))}return s},
Kf(a){var s
A:{if(a instanceof A.iO){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.iR){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iP){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iS){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iL){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iM){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iK){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iQ){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iN){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.fR(u.P))}return s},
K8(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.a4("Malformed mutation payload."))
s=t.N
r=a.aL(0,new A.A1(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iO(A.oE(r.h(0,n),n))
case"upsert":return new A.iR(A.oE(r.h(0,n),n))
case"putAll":return new A.iP(A.Fb(r.h(0,m),m))
case"upsertAll":return new A.iS(A.Fb(r.h(0,m),m))
case"patch":return new A.iL(A.A6(r.h(0,l),l),A.oE(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.a4("Malformed patchAll patches."))
k=A.w(s,t.G)
for(s=p.gac(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.Z(o.a),A.oE(o.b,"patches"))}return new A.iM(k)
case"archive":return new A.iK(A.A6(r.h(0,l),l))
case"restore":return new A.iQ(A.A6(r.h(0,l),l))
case"purge":return new A.iN(A.A6(r.h(0,l),l))
default:throw A.b(A.a4("Unknown mutation kind: "+A.q(q)))}},
A6(a,b){if(typeof a=="string")return a
throw A.b(A.a4('Malformed mutation field "'+b+'".'))},
oE(a,b){var s,r,q
if(t.f.b(a)){s=A.w(t.N,t.X)
for(r=a.gac(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.a4('Malformed mutation field "'+b+'".'))},
Fb(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.D(a);r.k();)s.push(A.oE(r.gn(),b))
return s}throw A.b(A.a4('Malformed mutation field "'+b+'".'))},
eE(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="predicate",a=null,a0=t.f
if(!a0.b(a1))throw A.b(A.a4("Malformed query spec."))
s=a1.aL(0,new A.vs(),t.N,t.z)
r=new A.vt()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.l([],t.ae)
i=t.j
if(i.b(p))for(h=J.D(p);h.k();)j.push(r.$1(h.gn()))
a0=a0.b(s.h(0,b))?A.Bz(s.h(0,b)):a
h=A.l([],t.gc)
if(i.b(o))for(g=J.D(o);g.k();)h.push(A.Ij(g.gn()))
g=A.ar(m)?m:a
f=J.v(s.h(0,"all"),!0)
if(i.b(n)){i=A.l([],t.s)
for(e=J.D(n);e.k();)i.push(J.Z(e.gn()))}else i=a
e=J.v(s.h(0,"includeArchived"),!0)
d=J.v(s.h(0,"includeHidden"),!0)
c=typeof l=="string"?l:a
return new A.vr(k,j,a0,h,g,f,i,e,d,c,J.v(s.h(0,"backward"),!0))},
DB(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.a4(l))
s=a.aL(0,new A.vn(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.a4(l))
p=A.Bp(new A.al(B.cn,new A.vo(q),t.mz))
if(p==null)throw A.b(A.a4("Unknown query operator: "+q))
o=A.oJ(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.D(n.a(s.h(0,"values")));n.k();)m.push(A.oJ(n.gn()))
n=m}else n=null
return new A.eD(r,p,o,n)},
Bz(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.a4("Malformed predicate tree."))
s=a.aL(0,new A.uQ(),t.N,t.z)
r=new A.uP()
switch(s.h(0,"kind")){case"leaf":return new A.iE(A.DB(s))
case"not":return new A.iZ(A.Bz(s.h(0,"child")))
case"all":return new A.i2(r.$1(s.h(0,q)))
case"any":return new A.i3(r.$1(s.h(0,q)))
default:throw A.b(A.a4("Unknown predicate node kind: "+A.q(s.h(0,"kind"))))}},
Ij(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.a4(q))
s=a.aL(0,new A.vp(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.a4(q))
return new A.mj(r,J.v(s.h(0,"desc"),!0))},
Iu(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.a4("Malformed search spec."))
s=a.aL(0,new A.vI(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.a4("Malformed search term."))
q=s.h(0,"limit")
p=A.ar(q)?q:null
return new A.vH(r,p,J.v(s.h(0,"all"),!0),J.v(s.h(0,"includeArchived"),!0),J.v(s.h(0,"includeHidden"),!0))},
Hf(a){return new A.fo(a)},
Hk(a){return new A.fp(a)},
HD(a){return new A.fy(a)},
GU(a){return new A.fe(a)},
Hr(a){return new A.ft(a)},
oL(a){var s,r,q
if(a instanceof A.aM)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gfa().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.oL(r.gn()))
return s}if(t.f.b(a)){s=A.w(t.N,t.X)
for(r=a.gac(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),A.oL(q.b))}return s}if(a==null||A.bw(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.a4("Value of type "+J.bp(a).l(0)+" is not wire-safe."))},
oJ(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value."
if(t.f.b(a)){r=a.h(0,"__lp_t")
q=J.ds(r)
if(q.R(r,"datetime")){s=a.h(0,"v")
if(A.ar(s))return new A.aM(A.lc(s,0,!0),0,!0)
throw A.b(A.a4("Malformed datetime wire value."))}if(q.R(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{q=B.ar.v(s)
return q}catch(p){if(t.Y.b(A.E(p)))throw A.b(A.a4(l))
else throw p}throw A.b(A.a4(l))}q=A.w(t.N,t.X)
for(o=a.gac(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string")q.j(0,m,A.oJ(n.b))}return q}if(t.j.b(a)){q=[]
for(o=J.D(a);o.k();)q.push(A.oJ(o.gn()))
return q}return a},
a4(a){return new A.jt(a)},
q8:function q8(a){this.a=a},
q9:function q9(a){this.a=a},
dy:function dy(){},
kY:function kY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jq:function jq(a,b){this.a=a
this.b=b},
u8:function u8(){},
iO:function iO(a){this.a=a},
iR:function iR(a){this.a=a},
iP:function iP(a){this.a=a},
iS:function iS(a){this.a=a},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a},
iK:function iK(a){this.a=a},
iQ:function iQ(a){this.a=a},
iN:function iN(a){this.a=a},
A1:function A1(){},
vr:function vr(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
vs:function vs(){},
vt:function vt(){},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vn:function vn(){},
vo:function vo(a){this.a=a},
aZ:function aZ(a,b){this.a=a
this.b=b},
cL:function cL(){},
uQ:function uQ(){},
uP:function uP(){},
iE:function iE(a){this.a=a},
iZ:function iZ(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
mj:function mj(a,b){this.a=a
this.b=b},
vp:function vp(){},
cB:function cB(a,b){this.a=a
this.b=b},
vH:function vH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vI:function vI(){},
mp:function mp(){},
m4:function m4(a,b){this.a=a
this.b=b},
kS:function kS(){},
lr:function lr(){},
kW:function kW(){},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
ms:function ms(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function mk(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lf:function lf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lu:function lu(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ll:function ll(a,b,c){this.a=a
this.b=b
this.c=c},
mx:function mx(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
mS:function mS(a,b){this.a=a
this.b=b},
mT:function mT(a){this.a=a},
mV:function mV(a){this.a=a},
mX:function mX(a,b){this.a=a
this.b=b},
mW:function mW(a,b){this.a=a
this.b=b},
mU:function mU(a,b){this.a=a
this.b=b},
nb:function nb(a,b){this.a=a
this.b=b},
nc:function nc(a,b){this.a=a
this.b=b},
na:function na(a){this.a=a},
kA:function kA(a){this.a=a},
n9:function n9(){},
n7:function n7(){},
mg:function mg(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
fI:function fI(){},
kT:function kT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ls:function ls(a,b){this.a=a
this.b=b},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
fE:function fE(a){this.a=a},
fQ:function fQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
fy:function fy(a){this.a=a},
fe:function fe(a){this.a=a},
ft:function ft(a){this.a=a},
fY:function fY(a){this.a=a},
mw:function mw(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
jr:function jr(a){this.a=a},
fN:function fN(a){this.a=a},
fl:function fl(a){this.a=a},
jt:function jt(a){this.a=a},
ai(a){var s,r=new A.a1("")
A.ci(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Cv(a){var s,r,q
for(s=new A.mt(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
K3(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c8(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
ci(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bw(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.ar(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.K3(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a7(b,h)
a.a+=r
return A.Cv(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.L(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.ci(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.D(b.gL());s.k();){n=s.gn()
r=J.Z(n)
if(B.b.bQ(o,new A.B2(r)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a5(r,n))}B.b.cl(o,new A.B3())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.r)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a7(k.a,h)
a.a+=j
i=A.Cv(j)
a.a+=":"
q=q+i+1+A.ci(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.O("Cannot canonicalize value of type "+J.bp(b).l(0),h))},
B2:function B2(a){this.a=a},
B3:function B3(){},
Iy(a){var s,r,q,p=A.ah("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ee(a)
if(p==null)return B.d9
s=p.b
r=s[1]
r.toString
r=A.aI(r)
q=s[2]
q.toString
q=A.aI(q)
s=s[3]
s=A.j3(s==null?"":s,null)
return new A.eZ(r,q,s==null?0:s)},
DJ(a,b,c){var s,r=A.Iy(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eI(a,b){return A.Iz(a,b)},
Iz(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eI=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b2("SELECT sqlite_version() AS v"),$async$eI)
case 3:g=d.S(c.c0(a2),"v")
g.toString
A.G(g)
k=t.B
d=A
c=A
b=J
s=4
return A.a(a.b2("PRAGMA compile_options"),$async$eI)
case 4:j=d.N(new c.bI(b.aS(a2,new A.vS(),t.X),k),k.i("o.E"))
n=B.b.bQ(j,new A.vT())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.K("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eI)
case 11:s=12
return A.a(a.K("DROP TABLE lp__fts5_probe"),$async$eI)
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
return A.a(a.b2("PRAGMA journal_mode"),$async$eI)
case 19:l=a2
if(J.eb(l))m=A.a7(J.c0(J.c0(l).gaZ()))
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
case 18:case 14:h=A.DJ(g,3,37)
k=k&&J.v(m,"wal")
q=new A.mI(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eI,r)},
mc:function mc(a,b){this.a=a
this.b=b},
mI:function mI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vS:function vS(){},
vT:function vT(){},
i9:function i9(a,b){this.a=a
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
a0:function a0(a,b){this.a=a
this.b=b},
pn:function pn(a,b){this.a=a
this.b=b},
po:function po(){},
pp:function pp(){},
CM(a){return new Uint8Array(A.b3(a))},
r0:function r0(){},
oX:function oX(a,b,c){this.b=a
this.c=b
this.d=c},
Cn(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cc
if(r===B.I){r=a.f
r.toString
r=!B.b.G(r,b)}else r=!1
if(r)return B.ci
return s
case 1:case 4:return!A.ar(b)?B.cd:s
case 2:return typeof b!="number"?B.ce:s
case 3:return!A.bw(b)?B.cf:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cg:s
case 7:return!t.j.b(b)?B.ch:s}},
dr(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gdf(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.Cc(n,a0.h(0,l),new Uint8Array(A.b3(B.e.v(q+l+"\x00"+e))),m))}k=A.w(h,g)
for(h=new A.aN(a0,A.n(a0).i("aN<1,2>")).gt(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.G(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ai(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
Fy(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.Cc(b,c,new Uint8Array(A.b3(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
L9(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gdf()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.Cc(n,g.h(0,l),new Uint8Array(A.b3(B.e.v(q+l+"\x00"+f))),m))}k=A.w(t.N,t.X)
for(s=g.gac(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.G(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ai(k))
a.push(c?1:0)
a.push(0)},
ch(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a7(b.h(0,"id"))
f.j(0,n,A.EM(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.v(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.az(k,null)
if(t.f.b(j))f.C(0,A.ba(j,h,g))}return f},
Fs(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.D(b);s.k();)r.push(A.ch(a,s.gn(),c,d))
return r},
Ft(a,b,c,d,e){var s,r,q,p,o=A.l([],t.fj)
for(s=J.D(d),r=!1;s.k();){q=s.gn()
if(q==="id")continue
if(q==="archived"){r=!0
continue}o.push(new A.a5(q,a.fe(q)))}s=A.l([],t.d)
for(q=J.D(b),p=a.a;q.k();)s.push(A.K7(q.gn(),o,r,c,e,p))
return s},
K7(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a7(a.h(0,"id"))
l.j(0,p,A.EM(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.v(a.h(0,m),1))
return l},
EM(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.x('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.ji("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bp(b).l(0)+"."))
r=B.l.f5(s.vS(B.ar.v(b),new Uint8Array(A.b3(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.R===q||B.T===q){p=A.aI(r)
break A}if(B.S===q){p=A.LO(r)
break A}if(B.U===q||B.V===q){p=B.h.az(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.v(b,1)
if(p===B.U||p===B.V){if(typeof b!="string")throw A.b(A.ji("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bp(b).l(0)+"."))
return B.h.az(b,o)}return b},
Cc(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.x('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.v(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.Z(b)
break
case 6:case 7:s=A.ai(b)
break
default:A.G(b)
s=b}r=d.ww(B.e.v(s),c)
return B.aq.gfa().v(r)}switch(a.b.a){case 3:return J.v(b,!0)?1:0
case 6:case 7:return A.ai(b)
default:return b}},
bf(a,b){var s,r,q,p,o,n="archived",m=a.gdf(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.r)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.v(o,!0):o)}for(l=b.gac(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.G(0,p))continue
k.j(0,p,s.b)}if(J.v(b.h(0,n),!0))k.j(0,n,!0)
return k},
Af(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gdf(),i=A.l([],t.iE)
i.push(new A.a5("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a5(o,p.b===B.B?J.v(n,!0):n))}for(s=c.gac(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.G(0,o))continue
i.push(new A.a5(o,r.b))}if(J.v(c.h(0,"archived"),!0))i.push(B.d7)
B.b.cl(i,new A.Ag())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.r)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a7(r.a,null)
a.a+=k
o=A.Cv(k)
a.a+=":"
m=m+o+1+A.ci(a,r.b)}a.a+="}"
return m+1},
d5:function d5(a,b){this.a=a
this.b=b},
Ag:function Ag(){},
Aw(a4,a5,a6,a7){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$Aw=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)A:switch(s){case 0:a2=a6.b
a3=a6.r
if(a2==="explain")a3="EXPLAIN QUERY PLAN "+a3
if(a2==="query"&&a7===0){q=A.m(["items",A.l([],t.d),"lastRow",null,"firstRow",null,"hasNext",!1],t.N,t.X)
s=1
break}s=3
return A.a(a5.$2(a3,a6.w),$async$Aw)
case 3:p=a9
switch(a2){case"query":a2=a7==null
o=!a2&&J.aj(p)>a7
n=a2?p:J.oW(p,a7).dw(0)
m=a4.ap(a6.d).a
l=a6.z
a2=a4.ax
k=a4.ay
j=l!=null?A.Ft(m,n,a2,l,k):A.Fs(m,n,a2,k)
i=a6.y
if(i==null)h=j
else{a2=A.l([],t.d)
for(k=j.length,g=i.$ti,f=g.i("an<J.E>"),g=g.i("J.E"),e=t.N,d=t.X,c=0;c<j.length;j.length===k||(0,A.r)(j),++c){b=j[c]
a=A.w(e,d)
for(a0=new A.an(i,i.gm(0),f);a0.k();){a1=a0.d
if(a1==null)a1=g.a(a1)
if(b.I(a1))a.j(0,a1,b.h(0,a1))}a2.push(a)}h=a2}a2=j.length!==0?B.b.gY(j):null
q=A.m(["items",h,"lastRow",a2,"firstRow",j.length!==0?B.b.gE(j):null,"hasNext",o],t.N,t.X)
s=1
break A
case"count":case"countDistinct":a2=A.e8(p)
q=A.m(["value",a2==null?0:a2],t.N,t.X)
s=1
break A
case"distinct":a2=[]
for(k=J.D(p);k.k();){g=k.gn()
if(g.gU(g))a2.push(J.c0(g.gaZ()))}q=A.m(["values",a2],t.N,t.X)
s=1
break A
case"ids":a2=A.l([],t.s)
for(k=J.D(p);k.k();){g=k.gn().h(0,"id")
g.toString
a2.push(A.G(g))}q=A.m(["ids",a2],t.N,t.X)
s=1
break A
case"explain":a2=t.X
q=A.m(["plan",J.aS(p,new A.Ax(),a2).B(0,"\n")],t.N,a2)
s=1
break A
case"sum":case"avg":case"min":case"max":a2=J.L(p)
q=A.m(["value",a2.gF(p)?null:J.S(a2.gE(p),"v")],t.N,t.X)
s=1
break A
case"search":a2=A.l([],t.d)
for(k=J.D(p),g=t.N,f=t.X;k.k();){e=k.gn()
d=e.h(0,"id")
d.toString
a2.push(A.m(["id",A.G(d),"score",e.h(0,"score")],g,f))}q=A.m(["results",a2],g,f)
s=1
break A
default:throw A.b(A.x("Unsupported compiled operation: "+a2))}case 1:return A.e(q,r)}})
return A.f($async$Aw,r)},
Ax:function Ax(){},
D2(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
l0:function l0(a,b){this.a=a
this.b=b},
ii:function ii(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
qY:function qY(){},
qX:function qX(){},
qZ:function qZ(){},
qW:function qW(a){this.a=a},
Hj(a){return'"'+A.z(a,'"','""')+'"'},
Hi(a,b){var s,r,q,p=a.a,o=J.L(p),n=b.a,m=J.L(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.v(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
pM:function pM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ih:function ih(a){this.a=a},
qV:function qV(a){this.a=a},
qU:function qU(){},
qT:function qT(a){this.a=a},
qS:function qS(a,b){this.a=a
this.b=b},
qP:function qP(a){this.a=a},
qQ:function qQ(a){this.a=a},
qR:function qR(){},
av(a,b){return new A.eL(b,a)},
ji(a){return new A.cO(a)},
BH(a){return new A.fT(a)},
DG(a){return new A.fX(a)},
aR(a){return new A.eF(a)},
re(a){return new A.fx(a)},
BM(a){return new A.h2(a)},
Dq(a){return new A.fD(a)},
D_(a){return new A.fm(a)},
Bf(a){return new A.em(a)},
FY(a,b){var s,r="UNIQUE constraint failed",q=J.Z(a),p=a instanceof A.c9,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.G(q,"PRIMARY KEY")&&!B.a.G(q,r)
else p=!0
if(p)return new A.fL("PRIMARY KEY constraint violated.")
if(o===2067||B.a.G(q,r)){s=A.EQ(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.eK(s,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.G(q,"NOT NULL constraint failed")){p=A.EQ(q,"NOT NULL constraint failed:")
return new A.eA(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.G(q,"CHECK constraint failed")||o===275||n===275)return new A.fi("CHECK constraint violated.")
if(B.a.G(q,"FOREIGN KEY")||o===787||n===787)return new A.fv("FOREIGN KEY constraint violated.")
if(B.a.G(q,"database or disk is full"))return new A.cO("Database full: "+A.q(a))
return new A.cO("SQLite error: "+A.q(a))},
EQ(a,b){var s,r,q,p,o,n,m=B.a.bS(a,b)
if(m<0)return"?"
s=B.a.ag(a,m+b.length)
r=s.length
q=B.a.bS(s,",")
if(q>=0)r=q
p=B.a.bS(s,"(")
s=B.a.cj(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.dm(s,".")
s=B.a.cj(o>=0?B.a.ag(s,o+1):s)
if(B.a.S(s,'"')&&B.a.c8(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
dI:function dI(){},
eL:function eL(a,b){this.b=a
this.a=b},
eK:function eK(a,b){this.b=a
this.a=b},
eA:function eA(a,b){this.b=a
this.a=b},
fi:function fi(a){this.a=a},
fL:function fL(a){this.a=a},
fv:function fv(a){this.a=a},
cO:function cO(a){this.a=a},
fT:function fT(a){this.a=a},
fX:function fX(a){this.a=a},
eF:function eF(a){this.a=a},
hd:function hd(a){this.a=a},
fx:function fx(a){this.a=a},
h2:function h2(a){this.a=a},
fD:function fD(a){this.a=a},
fm:function fm(a){this.a=a},
em:function em(a){this.a=a},
fS:function fS(a){this.a=a},
Mk(a,b,c){a.vK(!0,new A.AX(c),"lp_norm_"+b)},
FD(a,b,c,d){var s,r,q='""',p=b.a
if(p.gF(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
AX:function AX(a){this.a=a},
Kb(){return Date.now()},
oz(a){var s,r,q
if(t.G.b(a)){s=A.w(t.N,t.X)
for(r=a.gac(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.oz(q.b))}return s}if(t.f.b(a)){s=A.w(t.z,t.X)
for(r=a.gac(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.oz(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.oz(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b3(a))
return a},
d4(a,b,c,d,e,f,g,h){var s=null,r=B.D,q=null,p=null
return A.HN(a,b,c,d,e,f,g,h)},
HN(b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d4=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a3=null
a4=B.D
a5=null
a6=null
a7=null
a7=b1
p=4
s=7
return A.a(A.cH(a7,b6),$async$d4)
case 7:s=8
return A.a(A.eI(a7,b6),$async$d4)
case 8:n=b9
i=0
case 9:if(!(i<3)){s=11
break}m=B.cr[i]
s=12
return A.a(a7.K(m),$async$d4)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cI[i]
s=16
return A.a(a7.K(l),$async$d4)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a5
if(f==null)f=A.M9()
e=a6
d=a4
c=t.N
b=t.ls
a=new A.ma()
a0=new A.lH(b5,h,g,a,b4,b2,e,b0,b3,a3,f,A.w(c,t.nv),new A.ww(A.w(c,b),A.w(b,t.nL)),d,new A.pn(A.dQ(null,null,t.iv),A.dQ(null,null,t.oZ)))
b=new A.xl(A.bq(null,t.H),a.gy6())
a0.x=b
d=a0.a=new A.ts(a0,h,g,b,a,e,d)
a0.b=new A.wl(d)
a0.c=new A.u9()
a0.d=new A.vz(d)
d=A.HL(d)
a0.e!==$&&A.cz()
a0.e=d
d=$.B5()
a0.CW!==$&&A.cz()
a0.CW=new A.ul(a0,d)
a0.cx!==$&&A.cz()
a0.cx=new A.ug(a0,d)
a0.cy!==$&&A.cz()
a0.cy=new A.pZ(a0)
a0.db!==$&&A.cz()
a0.db=new A.tD(a0,b0)
k=a0
s=17
return A.a(A.lI(a7,k.ch),$async$d4)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aT(j),$async$d4)
case 21:case 19:b7.length===h||(0,A.r)(b7),++i
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
return A.a(a7.p(),$async$d4)
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
return A.f($async$d4,r)},
cH(a,b){return A.HM(a,b)},
HM(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cH=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.ba?2:3
break
case 2:q=5
s=8
return A.a(a.K("PRAGMA journal_mode=WAL"),$async$cH)
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
return A.a(a.K("PRAGMA wal_autocheckpoint=0"),$async$cH)
case 9:s=10
return A.a(a.K("PRAGMA mmap_size=67108864"),$async$cH)
case 10:case 3:s=11
return A.a(a.K("PRAGMA synchronous=NORMAL"),$async$cH)
case 11:s=12
return A.a(a.K("PRAGMA foreign_keys=ON"),$async$cH)
case 12:s=13
return A.a(a.K("PRAGMA busy_timeout=5000"),$async$cH)
case 13:s=14
return A.a(a.K("PRAGMA cache_size=-8000"),$async$cH)
case 14:s=15
return A.a(a.K("PRAGMA temp_store=MEMORY"),$async$cH)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cH,r)},
lI(a,b){var s=0,r=A.h(t.H),q,p
var $async$lI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ci("lp_migrations","version = ?",[1]),$async$lI)
case 3:if(p.eb(d)){s=1
break}s=4
return A.a(a.aE(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$lI)
case 4:case 1:return A.e(q,r)}})
return A.f($async$lI,r)},
HL(a){var s=t.N
s=new A.rY(a,A.dQ(null,null,t.fq),A.w(s,t.g8),A.w(s,t.dz))
s.p7(a)
return s},
AQ(a){var s,r,q,p
A:{if(a instanceof A.iE){s=A.KN(a.a)
break A}if(a instanceof A.iZ){s=new A.c6(A.AQ(a.a))
break A}if(a instanceof A.i2){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.AQ(r[p]))
s=new A.dv(s)
break A}if(a instanceof A.i3){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.AQ(r[p]))
s=new A.d0(s)
break A}throw A.b(A.fR(u.P))}return s},
KN(a){var s,r,q,p="isNull",o=a.a
switch(a.b.a){case 0:s=a.c
if(s==null)return new A.aa(o,p,B.m)
return new A.aa(o,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.O("neq(null) matches no rows; use isNotNull.",null))
return new A.c6(new A.aa(o,"eq",[s]))
case 2:return new A.aa(o,"gt",[a.c])
case 3:return new A.aa(o,"gte",[a.c])
case 4:return new A.aa(o,"lt",[a.c])
case 5:return new A.aa(o,"lte",[a.c])
case 6:r=a.d
return new A.aa(o,"inValues",r==null?B.m:r)
case 7:q=a.d
if(q==null)q=B.m
if(q.length!==2)throw A.b(A.O("between requires exactly two values.",null))
return new A.aa(o,"between",q)
case 8:return new A.aa(o,"startsWith",[a.c])
case 9:return new A.aa(o,"endsWith",[a.c])
case 10:return new A.aa(o,"contains",[a.c])
case 11:return new A.aa(o,p,B.m)
case 12:return new A.c6(new A.aa(o,p,B.m))}},
ts:function ts(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.as=g},
lg:function lg(a,b){this.a=a
this.b=b},
mJ:function mJ(a,b,c){this.a=a
this.c=b
this.e=c},
uN:function uN(a){this.a=a},
lH:function lH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
tt:function tt(a,b){this.a=a
this.b=b},
tw:function tw(a){this.a=a},
tv:function tv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tu:function tu(){},
nB:function nB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
y2:function y2(a,b){this.a=a
this.b=b},
y1:function y1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y_:function y_(a,b){this.a=a
this.b=b},
y0:function y0(a,b){this.a=a
this.b=b},
xZ:function xZ(a){this.a=a},
hm:function hm(a,b){this.a=a
this.b=b},
vz:function vz(a){this.a=a},
wl:function wl(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
ws:function ws(a){this.a=a},
wo:function wo(a){this.a=a},
wr:function wr(a,b,c){this.a=a
this.b=b
this.c=c},
wq:function wq(a,b,c){this.a=a
this.b=b
this.c=c},
wp:function wp(a,b,c){this.a=a
this.b=b
this.c=c},
wn:function wn(a){this.a=a},
wm:function wm(){},
f0:function f0(){},
oi:function oi(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=!1
_.r=null
_.w=$},
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
rY:function rY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=0},
tb:function tb(a){this.a=a},
tc:function tc(){},
td:function td(a,b){this.a=a
this.b=b},
te:function te(){},
tk:function tk(a,b){this.a=a
this.b=b},
tl:function tl(){},
tm:function tm(a,b){this.a=a
this.b=b},
tn:function tn(a,b){this.a=a
this.b=b},
to:function to(a,b){this.a=a
this.b=b},
tp:function tp(a,b){this.a=a
this.b=b},
tq:function tq(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
tf:function tf(){},
tg:function tg(){},
th:function th(){},
ti:function ti(){},
tj:function tj(){},
t0:function t0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t1:function t1(){},
t2:function t2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t3:function t3(){},
t6:function t6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t7:function t7(){},
t_:function t_(a){this.a=a},
rZ:function rZ(a){this.a=a},
t5:function t5(a){this.a=a},
t4:function t4(a){this.a=a},
t8:function t8(a,b){this.a=a
this.b=b},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
ta:function ta(a,b){this.a=a
this.b=b},
nT:function nT(){},
fB(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a_(h).i("al<1>")
f=A.N(new A.al(h,new A.u3(c,b),g),g.i("o.E"))
B.b.cl(f,new A.u4())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.ch,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aR('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jh()
$.ks()
j.aB()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aP(a,b,m),$async$fB)
case 8:s=6
break
case 7:s=9
return A.a(A.lR(a,b,m),$async$fB)
case 9:case 6:if(j.b==null)j.b=$.me.$0()
s=10
return A.a(A.fC(i,j.gna(),o,q+l,p,l),$async$fB)
case 10:case 3:f.length===h||(0,A.r)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aR('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.M("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fB)
case 11:return A.e(null,r)}})
return A.f($async$fB,r)},
fC(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fC=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b2("SELECT MAX(version) AS m FROM lp_migrations"),$async$fC)
case 2:q=p.e8(h)
if(q==null)q=0
s=3
return A.a(a.aE(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fC)
case 3:return A.e(null,r)}})
return A.f($async$fC,r)},
lR(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$lR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.B
h=A
g=A
f=J
s=2
return A.a(l.b2("PRAGMA table_info("+('"'+A.z(k,'"','""')+'"')+")"),$async$lR)
case 2:i=h.d6(new g.bI(f.aS(e,new A.u0(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Cy()
if(!m.b.test(n))A.u(A.aR('Field "'+n+u.Z))
if(o.c)throw A.b(A.aR('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.G(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.K("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.glk()),$async$lR)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.r)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$lR,r)},
aP(a,b,c){return A.HY(a,b,c)},
HY(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aP=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.Bf('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.ih(b0.w).kj(b1)
j=A.I0(b0.f,a2,a3)
p=4
s=7
return A.a(A.u1(a7,l),$async$aP)
case 7:i=b4
s=8
return A.a(b0.i7(j),$async$aP)
case 8:h=b4
if(J.v(i,"done")&&h){a3=A.Bf('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.q(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.lT(a7,m),$async$aP)
case 9:g=b4
s=10
return A.a(A.lT(a7,n),$async$aP)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b2("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aP)
case 13:a0=a9.e8(b4)
e=a0==null?0:a0
a3=A.z(m,'"','""')
s=14
return A.a(a7.K("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 14:s=15
return A.a(A.d8(b0,a7,b1,k,l,e),$async$aP)
case 15:s=1
break
case 12:s=16
return A.a(a7.K("DROP TABLE IF EXISTS "+('"'+A.z(m,'"','""')+'"')),$async$aP)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.ih(j),$async$aP)
case 19:case 18:s=20
return A.a(A.lS(a7,l,"rebuilding"),$async$aP)
case 20:s=21
return A.a(a7.K("VACUUM INTO '"+A.z(j,"'","''")+"'"),$async$aP)
case 21:a3=k.b
a4=A.z(n,'"','""')
d=B.a.kY(a3,'"'+a4+'"','"'+A.z(m,'"','""')+'"')
s=22
return A.a(a7.K(d),$async$aP)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ae("SELECT rowid, * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aP)
case 25:b=b4
if(J.bA(b)){s=24
break}s=26
return A.a(a7.a2(new A.u2(b,b1,b0,b2,m),a3),$async$aP)
case 26:a4=J.S(J.oU(b),"rowid")
a4.toString
c=A.ap(a4)
if(J.aj(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b2("SELECT COUNT(*) c FROM "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 27:a5=a9.e8(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b2("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aP)
case 28:e=a9.e8(b4)
a0=e==null?0:e
if(!J.v(a,a0)){a3=A.x('Rebuild of "'+a2+'" count mismatch: '+A.q(a)+" vs "+A.q(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.K("DROP TABLE "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 29:a3=A.z(m,'"','""')
s=30
return A.a(a7.K("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 30:s=31
return A.a(A.d8(b0,a7,b1,k,l,a),$async$aP)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.E(a8)
if(a3 instanceof A.em)throw a8
else if(a3 instanceof A.c9){a1=a3
throw A.b(A.Bf('Destructive migration for "'+a2+'" failed: '+A.q(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
d8(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l
var $async$d8=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.K(q[o]),$async$d8)
case 5:case 3:q.length===p||(0,A.r)(q),++o
s=2
break
case 4:q=c.w!=null
s=q?6:7
break
case 6:s=8
return A.a(b.K("DROP TABLE IF EXISTS "+('"'+A.z(c.a+"_fts",'"','""')+'"')),$async$d8)
case 8:case 7:p=d.d,n=p.length,o=0
case 9:if(!(o<p.length)){s=11
break}s=12
return A.a(b.K(p[o]),$async$d8)
case 12:case 10:p.length===n||(0,A.r)(p),++o
s=9
break
case 11:s=q?13:14
break
case 13:q=c.a+"_fts"
p=A.z(q,'"','""')
s=15
return A.a(b.K("INSERT INTO "+('"'+p+'"')+"("+('"'+A.z(q,'"','""')+'"')+") VALUES('rebuild')"),$async$d8)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.b2("SELECT COUNT(*) c FROM "+('"'+A.z(q,'"','""')+'"')),$async$d8)
case 16:m=l.e8(h)
if((m==null?0:m)!==f)throw A.b(A.x('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.lS(b,e,"done"),$async$d8)
case 17:return A.e(null,r)}})
return A.f($async$d8,r)},
lT(a,b){var s=0,r=A.h(t.y),q,p
var $async$lT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ae("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$lT)
case 3:q=p.eb(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lT,r)},
I0(a,b,c){var s=null,r=$.i_(),q=r.vY(a),p=A.dO(a,r.a).gkg()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.nr(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
I_(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.av('Field "'+s+'" is required.',s))}if(b==null)return
r=A.Cn(a,b)
if(r!=null)throw A.b(A.av(A.HX(a,b,r),a.a))},
HZ(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
A.I_(p,b.h(0,p.a))}},
HX(a,b,c){var s,r=a.a,q=J.bp(b)
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
u1(a,b){var s=0,r=A.h(t.v),q,p,o
var $async$u1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.nB("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$u1)
case 3:p=d
o=J.L(p)
q=o.gF(p)?null:A.a7(J.S(o.gE(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$u1,r)},
lS(a,b,c){var s=0,r=A.h(t.H)
var $async$lS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cc(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.Q),$async$lS)
case 2:return A.e(null,r)}})
return A.f($async$lS,r)},
Kc(){return Date.now()},
u3:function u3(a,b){this.a=a
this.b=b},
u4:function u4(){},
u0:function u0(){},
u2:function u2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ma:function ma(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
kl(a){var s=A.z(a,"\\","\\\\")
s=A.z(s,"%","\\%")
return A.z(s,"_","\\_")},
Cb(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.aa){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.u(A.aA(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aA(q,l,'The "'+s+'" predicate carries exactly '+A.q(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aA(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gar(a.c)==null)throw A.b(A.aA(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c6){A.Cb(a.a)
break A}p=a instanceof A.dv
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d0
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aA(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.r)(n),++m)A.Cb(n[m])}break A}},
zZ(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.aa)return A.EK(a,!1,b)
if(a instanceof A.c6){s=a.a
r=A.zZ(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.d0||s instanceof A.c6){s=new A.a5("NOT "+q,p)
break A}s=new A.a5("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dv){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){l=A.zZ(s[m],!1)
o.push(l.a)
B.b.C(p,l.b)}k=B.b.B(o," AND ")
return new A.a5(b?k:"("+k+")",p)}if(a instanceof A.d0){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){j=A.K5(s[m])
o.push(j.a)
B.b.C(p,j.b)}return new A.a5("("+B.b.B(o," OR ")+")",p)}throw A.b(A.fR(u.M))},
K5(a){var s
A:{if(a instanceof A.aa){s=A.EK(a,!0,!1)
break A}s=A.zZ(a,!1)
break A}return s},
EK(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.z(a.a,'"','""')+'"',n=A.N(a.c,t.X),m=a.b
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
case"inValues":s=o+" IN ("+B.b.B(A.ag(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.kl(A.G(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kl(A.G(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kl(A.G(r))+"%"
break
default:throw A.b(A.aA(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a5(q?"("+s+")":s,n)},
da:function da(){},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a){this.a=a},
dv:function dv(a){this.a=a},
d0:function d0(a){this.a=a},
Ii(a,b){var s,r=$.fP.H(0,a)
if(r!=null){$.fP.j(0,a,r)
return r}s=b.$0()
if($.fP.a>=512)$.fP.H(0,new A.T($.fP,A.n($.fP).i("T<1>")).gE(0))
$.fP.j(0,a,s)
return s},
b0:function b0(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
ya:function ya(a){this.a=a},
mi:function mi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
vm:function vm(a,b,c){this.a=a
this.b=b
this.c=c},
vh:function vh(){},
vi:function vi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vj:function vj(a){this.a=a},
vk:function vk(){},
vl:function vl(){},
It(a){var s,r,q=B.a.cj(a)
if(q.length===0)return
s=!0
if(!B.a.G(q,'"')){r=A.ah("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.ah("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.av("Invalid search term: "+a,null))},
Is(a){var s,r,q,p
for(s=B.a.cS(a,A.ah("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
if(p.length!==0&&new A.j8(p).gm(0)<3)throw A.b(A.av('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cN:function cN(a,b){this.a=a
this.b=b},
vG:function vG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
vq:function vq(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e
_.z=f},
ki(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.dI)throw q
else{s=r
r=A.ji("Malformed schema JSON: "+A.q(s))
throw A.b(r)}}},
D5(a){return A.ki(new A.r1(a))},
HE(a){return A.ki(new A.rL(a))},
Hw(a){return A.ki(new A.rd(a))},
Da(a,b){var s
if(new A.j8(a).gm(0)!==1)throw A.b(A.aR('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aR('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Hv(a){return A.ki(new A.rc(a))},
Hu(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.gac(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
ID(a){return A.ki(new A.vW(a))},
pt(a,b){return A.ki(new A.pu(a,b))},
La(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.am.h(0,s)
return b},
c5:function c5(a,b){this.a=a
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
r1:function r1(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
rL:function rL(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
rd:function rd(a){this.a=a},
eq:function eq(a){this.a=a},
rc:function rc(a){this.a=a},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
vW:function vW(a){this.a=a},
u5:function u5(a,b){this.a=a
this.b=b},
pX:function pX(){},
c2:function c2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
pu:function pu(a,b){this.a=a
this.b=b},
BJ(a){var s=A.K6(a),r=A.l([],t.s)
if(B.Y.gU(B.Y))r.push("fieldResolvers")
if(B.b.bQ(a.x,new A.vC()))r.push("migrationTransform")
if(B.am.gU(B.am))r.push("documentMigrations")
return new A.mv(s,A.cJ(r,t.N),1,a.a,a.b,2)},
Ir(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aR("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aL(0,new A.vD(),s,r)
p=q.h(0,"formatVersion")
if(!A.ar(p))throw A.b(A.aR("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.DG("Schema manifest format v"+A.q(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.ar(n)||!j.b(m)||!t.j.b(l)||!A.ar(k))throw A.b(A.aR('Malformed schema manifest for store "'+A.q(o==null?"???":o)+'"'))
return new A.mv(m.aL(0,new A.vE(),s,t.X),A.cJ(J.aS(l,new A.vF(),r),s),p,o,n,k)},
K6(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cI(a.q(),n,m),k=B.Y.gL()
k=A.N(k,A.n(k).i("o.E"))
B.b.aG(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].q()
o=A.dH(null,null,n,m)
o.C(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gL()
n=A.N(n,A.n(n).i("o.E"))
B.b.aG(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
mv:function mv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
H5(a,b){var s,r=a.a
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
u9:function u9(){},
dM:function dM(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pI:function pI(a,b){this.a=a
this.b=b},
pL:function pL(a,b){this.a=a
this.b=b},
pH:function pH(a,b){this.a=a
this.b=b},
pK:function pK(a,b){this.a=a
this.b=b},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a,b){this.a=a
this.b=b},
pD:function pD(a,b){this.a=a
this.b=b},
pJ:function pJ(a,b){this.a=a
this.b=b},
pG:function pG(a,b){this.a=a
this.b=b},
py:function py(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
px:function px(){},
pC:function pC(){},
pB:function pB(){},
pA:function pA(){},
pz:function pz(){},
pv:function pv(){},
pw:function pw(){},
hj:function hj(){},
nA:function nA(){},
BS(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bH(a,b,c,s,d,new A.zc())},
mY(a){var s=$.C.h(0,$.ku())
if(s instanceof A.bH&&s.a===a)return s
return null},
bH:function bH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wt:function wt(a,b,c){this.a=a
this.b=b
this.c=c},
zc:function zc(){this.a=0
this.b=null},
Lz(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.D(a);s.k();){r=new A.a1("")
A.ci(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aG(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.aq(B.j.v(B.e.v(p)).a)},
ml:function ml(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
vv:function vv(){},
vu:function vu(a){this.a=a},
vw:function vw(a){this.a=a},
m3:function m3(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
uf:function uf(a){this.a=a},
fj:function fj(){},
xl:function xl(a,b){this.a=a
this.b=0
this.c=b},
xm:function xm(a,b,c){this.a=a
this.b=b
this.c=c},
kQ(a){var s=$.Cx()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
CR(a){return new A.fg(a)},
CS(a,b){return new A.kP(a,b)},
ko(a,b,c,d,e){return A.Mj(a,b,c,d,e)},
Mj(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$ko=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.hk(A.cY(new A.ob(new A.AR(g),A.l([],h),t.mI)))
e=0
h=new A.cf(A.bZ(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$ko)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.t)){j=new A.t($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$ko)
case 9:f.a.u(0,m)
e+=J.aj(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.D(),$async$ko)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.v(e,c))throw A.b(A.x("Size mismatch: expected "+A.q(c)+" but got "+A.q(e)))
i=A.aq(B.b.gar(g).a)
A.kQ(i)
if(b!=null&&i!==b)throw A.b(A.x("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.mK(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ko,r)},
pb:function pb(){},
fg:function fg(a){this.a=a},
kP:function kP(a,b){this.a=a
this.b=b},
mK:function mK(a){this.a=a},
AR:function AR(a){this.a=a},
io:function io(a){this.d=a},
r3:function r3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r5:function r5(a,b){this.a=a
this.b=b},
r6:function r6(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
r8:function r8(){},
D6(a){return A.oM("lp_file_refs",new A.r2(a))},
bg:function bg(a,b,c,d,e,f,g,h,i,j){var _=this
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
r2:function r2(a){this.a=a},
tD:function tD(a,b){this.a=a
this.b=b},
tE:function tE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tG:function tG(a){this.a=a},
tH:function tH(a){this.a=a},
tI:function tI(a){this.a=a},
tJ:function tJ(a){this.a=a},
tK:function tK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tF:function tF(a,b){this.a=a
this.b=b},
DV(a){var s
if(t.m.b(a))s=J.v(a.name,"NotFoundError")||J.v(a.name,"TypeMismatchError")
else s=!1
return s},
wU:function wU(a){this.b=a
this.d=null},
wV:function wV(a){this.a=a},
nY:function nY(a){this.a=a},
DN(a){var s=Date.now()
return new A.mR(a,new A.aM(s,0,!1))},
mR:function mR(a,b){this.a=a
this.c=b},
p8:function p8(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
m7:function m7(){},
us:function us(a,b){this.a=a
this.b=b},
ut:function ut(){},
uM:function uM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
uw:function uw(a,b,c){this.a=a
this.b=b
this.c=c},
uD:function uD(a){this.a=a},
uz:function uz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uA:function uA(){},
uB:function uB(a,b){this.a=a
this.b=b},
uC:function uC(){},
ux:function ux(a,b){this.a=a
this.b=b},
uy:function uy(){},
I7(a,b,c,d,e){var s=A.bq(null,t.H)
return new A.uE(b,c,new A.uL(a,B.av,null),e,d,s)},
I8(a){return 0.5+B.as.nv()},
j2:function j2(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
uE:function uE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
uL:function uL(a,b,c){this.a=a
this.b=b
this.c=c},
uH:function uH(){},
uI:function uI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uF:function uF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uG:function uG(){},
uJ:function uJ(a){this.a=a},
uK:function uK(a){this.a=a},
zj:function zj(a,b){this.a=a
this.b=null
this.c=b},
it(a,b){return new A.dB(a)},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lt:function lt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a){this.a=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
oY:function oY(a){this.a=a},
oZ:function oZ(a,b){this.a=a
this.b=b},
p_:function p_(a){this.a=a},
p0:function p0(){},
Bd(a){return A.oM("lp_conflicts",new A.pY(a))},
bC:function bC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
pY:function pY(a){this.a=a},
pZ:function pZ(a){this.a=a},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
q2:function q2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q0:function q0(a,b){this.a=a
this.b=b},
q1:function q1(a,b){this.a=a
this.b=b},
q_:function q_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mO:function mO(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
wh:function wh(a){this.a=a},
w9:function w9(a){this.a=a},
wf:function wf(a,b){this.a=a
this.b=b},
we:function we(a){this.a=a},
wd:function wd(a,b){this.a=a
this.b=b},
wg:function wg(a){this.a=a},
wa:function wa(a,b){this.a=a
this.b=b},
wb:function wb(){},
wc:function wc(){},
ew(a){return new A.d7(a)},
Cu(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fa(a,b)
r=A.bf(a,s)
q=A.ai(r)
p=A.aq(B.j.v(B.e.v(q)).a)
return new A.ez(b,s,q,p,k)}catch(m){l=A.E(m)
if(l instanceof A.d7){o=l
return new A.ez(b,k,k,k,o.a)}else{n=l
l=A.q(n)
return new A.ez(b,k,k,k,l)}}},
Me(a,b){var s,r=A.l([],t.i7)
for(s=J.D(b);s.k();)r.push(A.Cu(a,s.gn()))
return r},
Ct(a,b){var s=0,r=A.h(t.eT),q
var $async$Ct=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Me(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Ct,r)},
fa(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.ba(b.d,j,i),g=a.gdf(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.v(f,s))throw A.b(A.ew('data.id "'+A.q(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bw(r))throw A.b(A.ew('Field "archived" must be a boolean, got '+J.bp(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.r)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ew('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Cn(o,n)
if(m!=null)throw A.b(A.ew(A.KS(o,n,m)))
q.j(0,s,n)}for(j=new A.aN(h,A.n(h).i("aN<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.G(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.v(r,!0))
return q},
KS(a,b,c){var s,r=a.a,q=J.bp(b)
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
hW(a){var s,r,q,p
if(a==null||a.length===0)return B.n
s=null
try{s=B.h.az(a,null)}catch(q){r=A.E(q)
p=A.ew("Corrupt payload JSON: "+A.q(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ew("Corrupt payload JSON: expected an object, got "+J.bp(s).l(0)+"."))
return A.ba(s,t.N,t.X)},
d7:function d7(a){this.a=a},
ez:function ez(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aO(i),g=A.d6(a.gL(),i)
g.C(0,b.gL())
for(g=A.hw(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.r.X(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.kw(o.gL(),new A.Aj())&&J.kw(n.gL(),new A.Ak())){m=A.bK(A.ba(o,i,q),A.ba(n,i,q))
for(l=A.n(m),k=new A.e0(m,m.r,l.i("e0<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
HV(a,b,c,d,e,f,g){return new A.tT()},
KM(a,b){var s,r,q=a.b
if(q.gF(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dm(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
By(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$By=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.HW(B.bR,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$By,r)},
HW(a,b,c,d,e,f,g){var s,r,q,p=A.bK(b,c),o=A.bK(b,f)
A.HV(b,p,o,c,e,f,g)
s=t.N
r=A.d6(c.gL(),s)
r.C(0,new A.T(f,A.n(f).i("T<1>")))
r.C(0,b.gL())
q=A.N(r,A.n(r).c)
return A.tZ(a,b,p,o,0,q,c,A.w(s,t.X),d,e,f,new A.z7(),g)},
tZ(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dK(h,a0.a,null)
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
h.j(0,s,m)}return A.tZ(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.Dp(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.t)return l.an(new A.u_(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.tZ(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
Dp(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.r.X(a1,a4))return a1
if(B.r.X(a1,a0))return a4
if(B.r.X(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kw(a1.gL(),new A.tU()))if(J.kw(a4.gL(),new A.tV()))if(a0!=null)r=s.b(a0)&&J.kw(a0.gL(),new A.tW())
else r=!0
if(r){r=t.N
q=t.X
p=A.ba(a1,r,q)
o=A.ba(a4,r,q)
n=a0==null?null:A.ba(s.a(a0),r,q)
s=A.aO(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.C(0,l)
s.C(0,new A.T(p,A.n(p).i("T<1>")))
s.C(0,new A.T(o,A.n(o).i("T<1>")))
k=A.w(r,q)
j=[]
for(r=s.$ti.c,l=A.hw(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.Dp(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.t)g=!0
j.push(d)}if(!g){for(s=A.hw(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.Bm(new A.X(j,new A.tX(),A.a_(j).i("X<1,y<j?>>")),q).an(new A.tY(s,k),q)}A.KM(a3,a2)
return a4},
FI(a,b,c,d,e,f){return A.By(a,b,c,d,e,f)},
Aj:function Aj(){},
Ak:function Ak(){},
tT:function tT(){},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(a,b,c){this.a=a
this.b=b
this.c=c},
z7:function z7(){this.a=!1},
z5:function z5(){},
xq:function xq(){},
u_:function u_(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
tU:function tU(){},
tV:function tV(){},
tW:function tW(){},
tX:function tX(){},
tY:function tY(a,b){this.a=a
this.b=b},
ug:function ug(a,b){this.a=a
this.b=b},
ui:function ui(a){this.a=a},
uj:function uj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pa:function pa(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(){},
j7:function j7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ul:function ul(a,b){this.a=a
this.b=b},
ur:function ur(a,b){this.a=a
this.b=b},
up:function up(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uo:function uo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
un:function un(a,b,c){this.a=a
this.b=b
this.c=c},
uq:function uq(a){this.a=a},
ec:function ec(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.b=a
this.f=b},
v0:function v0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v8:function v8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v7:function v7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v2:function v2(a,b,c){this.a=a
this.b=b
this.c=c},
v1:function v1(a,b,c){this.a=a
this.b=b
this.c=c},
v4:function v4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v3:function v3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v6:function v6(a,b,c){this.a=a
this.b=b
this.c=c},
v5:function v5(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v9:function v9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
vb:function vb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vg:function vg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ve:function ve(a,b,c){this.a=a
this.b=b
this.c=c},
vd:function vd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vc:function vc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
va:function va(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vf:function vf(a,b,c,d,e,f,g,h,i,j){var _=this
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
cb:function cb(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h7:function h7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
h6:function h6(a,b){this.a=a
this.b=b},
w6:function w6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w7:function w7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
DO(a){return new A.ha(a)},
GV(a){return new A.c1(a)},
Ht(a){return new A.cF(a)},
I5(a){return new A.cK(a)},
bu(a){return new A.fM(a)},
LT(a){var s=a.yx(),r=new A.AA()
return A.q(r.$2(A.BE(s),4))+"-"+A.q(r.$1(A.BC(s)))+"-"+A.q(r.$1(A.uS(s)))+" "+A.q(r.$1(A.BA(s)))+":"+A.q(r.$1(A.BB(s)))+":"+A.q(r.$1(A.BD(s)))+"."+A.q(r.$2(A.Dy(s),3))+"Z"},
bv:function bv(){},
ha:function ha(a){this.a=a},
eG:function eG(a,b){this.b=a
this.a=b},
jd:function jd(a){this.a=a},
c1:function c1(a){this.a=a},
cF:function cF(a){this.a=a},
cK:function cK(a){this.a=a},
fK:function fK(a){this.a=a},
fM:function fM(a){this.a=a},
fq:function fq(a){this.a=a},
ed:function ed(a){this.a=a},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fO:function fO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j6:function j6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kG:function kG(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
AA:function AA(){},
IG(a){return 0.5+B.as.nv()},
BP(a){var s,r=a.toLowerCase()
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
IH(a){var s,r,q,p,o,n,m,l,k=null,j=A.ah("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ee(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.BP(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aI(r)
p=s[1]
p.toString
p=A.aI(p)
o=s[4]
o.toString
o=A.aI(o)
n=s[5]
n.toString
n=A.aI(n)
s=s[6]
s.toString
return A.BQ(r,q,p,o,n,A.aI(s))}j=A.ah("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ee(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.BP(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aI(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aI(r)
p=s[4]
p.toString
p=A.aI(p)
o=s[5]
o.toString
o=A.aI(o)
s=s[6]
s.toString
return A.BQ(l,q,r,p,o,A.aI(s))}j=A.ah("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ee(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.BP(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aI(r)
p=s[2]
p.toString
p=A.aI(p)
o=s[3]
o.toString
o=A.aI(o)
n=s[4]
n.toString
n=A.aI(n)
s=s[5]
s.toString
return A.BQ(r,q,p,o,n,A.aI(s))}return k},
BQ(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.Be(a,b,c,d,e,f,0)
return s}catch(r){return null}},
w8:function w8(a,b){this.at=a
this.ay=b},
j5:function j5(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
wj:function wj(a,b){this.a=a
this.b=b},
Fl(a,b,c,d,e,f,g,h,i,j){var s,r=A.FK(a,b,c,null,d,e,f,g,h,i,j),q=A.w(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.X[s],r[s])
return q},
FK(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.Fi(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
Fi(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Lu(a,b,c,d,e,f,g){var s,r=null,q=A.FW(B.a5,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.w(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.W[s],q[s])
return p},
FW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.Fj(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
Fj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
FS(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
hX(a){return new A.X(a,new A.AW(),A.a_(a).i("X<1,k>")).B(0,", ")},
jn(a){return A.oM("lp_sync_row",new A.wi(a))},
m6(a){return A.oM("lp_outbox",new A.um(a))},
I6(a){return A.oM("lp_op_queue",new A.uh(a))},
kp(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aO(n)
l=A.N(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.ag(k,"?",!1,n),", ")
k=a.ae("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kp)
case 3:j.C(0,i.aS(h.a(d),new A.AU(),n))
k=A.N(l,n)
k.push("pending")
k.push("failed")
k=a.ae("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kp)
case 4:j.C(0,i.aS(h.a(d),new A.AV(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kp,r)},
hZ(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$hZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eq("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$hZ)
case 5:s=p.bA(o.a(f))?2:4
break
case 2:q=a.aE(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$hZ)
case 6:s=3
break
case 4:q=a.aF("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$hZ)
case 7:case 3:return A.e(null,r)}})
return A.f($async$hZ,r)},
Aq(a,b){var s=0,r=A.h(t.H),q,p
var $async$Aq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aF(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$Aq)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Aq,r)},
cA(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cA=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nB("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cA)
case 2:m=l.D(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.W("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cA)
case 5:o=A.a7(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Aq(a,o),$async$cA)
case 8:case 7:s=3
break
case 4:m=a.W("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cA)
case 9:m=t.N
m=a.M("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cA)
case 10:s=d?11:12
break
case 11:m=a.W("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cA)
case 13:n=a.W("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cA)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cA,r)},
cQ:function cQ(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
AW:function AW(){},
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
wi:function wi(a){this.a=a},
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
um:function um(a){this.a=a},
eB:function eB(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
uh:function uh(a){this.a=a},
AU:function AU(){},
AV:function AV(){},
ww:function ww(a,b){this.a=a
this.b=b},
HS(a){var s,r,q
try{s=A.oI(a)
if(t.f.b(s)){r=A.f7(s)
return r}}catch(q){}return null},
HT(a){if(a instanceof A.ju)return A.f9(new A.nd(3,a.a,a.b,null).q())
t.bp.a(a)
return A.Bw(a.a,a.b,a.c,a.d)},
Bw(a,b,c,d){return A.f9(new A.nd(3,a,null,new A.wW(b,c,d)).q())},
kh(a){return A.KK(a)},
KK(a){var s=0,r=A.h(t.o),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kh=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.hY()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a6(f.getDirectory(),k),$async$kh)
case 7:n=c
j=$.i_()
i=A.N(j.cS(0,"drift_db"),t.N)
m=i
J.B7(m,j.cS(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.aj(l)===0){s=9
break}s=11
return A.a(A.a6(n.getDirectoryHandle(l,{create:!1}),k),$async$kh)
case 11:n=c
case 9:m.length===j||(0,A.r)(m),++h
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
return A.f($async$kh,r)},
oB(a,b){return A.KL(a,b)},
KL(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$oB=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kh(a),$async$oB)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a6(m.getFileHandle(A.dO(b,$.i_().a).gkg(),{create:!1}),t.m),$async$oB)
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
return A.f($async$oB,r)},
oC(a,b){return A.KT(a,b)},
KT(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$oC=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kh(a),$async$oC)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.Bk(m,A.dO(b,$.i_().a).gkg()),$async$oC)
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
return A.f($async$oC,r)},
tA:function tA(){},
tB:function tB(a){this.a=a},
tC:function tC(a){this.a=a},
lN:function lN(a,b,c){this.a=a
this.d=b
this.e=c},
tL:function tL(a){this.a=a},
ho:function ho(a){this.a=a},
d_(a){var s,r,q
if(a instanceof A.aM)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.aJ){s=t.N
return A.m(["lp:bigint",a.l(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.cJ(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aS(a,A.LG(),s)
r=A.N(r,r.$ti.i("V.E"))
return A.cJ(r,s)}if(t.f.b(a)){q=A.w(t.N,t.X)
a.a3(0,new A.Av(q))
return q}if(a==null||A.bw(a)||A.ar(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.bp(a).l(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
oK(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gm(a)===1&&a.I(l)){s=a.h(0,l)
if(A.ar(s)){r=B.c.al(s,1000)
q=B.c.N(s-r,1000)
if(q<-864e13||q>864e13)A.u(A.au(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.u(A.aA(r,"microsecond",u.B))
A.bZ(!0,"isUtc",t.y)
return new A.aM(q,r,!0)}throw A.b(A.O("Malformed wire DateTime: "+A.q(s),k))}if(a.gm(a)===1&&a.I(j)){s=a.h(0,j)
if(typeof s=="string")return A.C_(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.q(s),k))}if(a.gm(a)===1&&a.I(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.L(s)
q=r.gm(s)
p=new Uint8Array(q)
for(o=0;o<r.gm(s);++o){n=r.h(s,o)
if(!A.ar(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.q(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.q(s),k))}m=A.w(t.N,t.X)
a.a3(0,new A.Ap(m))
return m}if(t.j.b(a)){r=t.X
q=J.aS(a,A.Fo(),r)
q=A.N(q,q.$ti.i("V.E"))
return A.cJ(q,r)}return a},
Av:function Av(a){this.a=a},
Ap:function Ap(a){this.a=a},
L5(){return new A.aM(Date.now(),0,!1)},
cV:function cV(a,b,c,d,e,f,g,h,i,j){var _=this
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
wA:function wA(a,b){this.f=a
this.r=b},
wD:function wD(){},
wB:function wB(a){this.a=a},
wC:function wC(){},
Mg(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.w(t.N,t.X)
try{if(t.f.b(a)){s=A.f7(a)
r=A.w(t.N,t.X)
q=t.j
if(q.b(J.S(s,n))){p=J.S(s,n)
p.toString
p=J.aS(q.a(p),new A.AO(),t.bU)
q=A.N(p,p.$ti.i("V.E"))
J.c_(r,n,q)}if(A.ar(J.S(s,m)))J.c_(r,m,J.S(s,m))
if(A.bw(J.S(s,l)))J.c_(r,l,J.S(s,l))
return r}}catch(o){}return A.w(t.N,t.X)},
FQ(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.f7(a).h(0,b)
return s}}catch(r){}return null},
LY(a,b){if(b!=null)return!1
return B.b.bQ(a,new A.AF())},
AO:function AO(){},
AF:function AF(){},
AE:function AE(){},
Mo(a){if(a instanceof A.dI){if(a instanceof A.eL)return"ValidationException"
if(a instanceof A.eK)return"UniqueConstraintException"
if(a instanceof A.eA)return"NotNullConstraintException"
if(a instanceof A.fi)return"CheckConstraintException"
if(a instanceof A.fL)return"PrimaryKeyConstraintException"
if(a instanceof A.fv)return"ForeignKeyConstraintException"
if(a instanceof A.cO)return"StorageError"
if(a instanceof A.fT)return"RecordNotFoundException"
if(a instanceof A.fX)return"SchemaTooNewError"
if(a instanceof A.fx)return"FtsUnavailableError"
if(a instanceof A.hd)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eF)return"SchemaRegistrationError"
if(a instanceof A.h2)return"StaleCursorError"
if(a instanceof A.fD)return"MissingLimitError"
if(a instanceof A.fm)return"ConflictBlockedError"
if(a instanceof A.em)return"DestructiveMigrationRefusedError"
if(a instanceof A.fS)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bv){if(a instanceof A.ha)return"TransientNetworkError"
if(a instanceof A.eG)return"ServerBusyError"
if(a instanceof A.jd)return"ServerError"
if(a instanceof A.c1)return"AuthError"
if(a instanceof A.cF)return"ForbiddenError"
if(a instanceof A.cK)return"NotFoundError"
if(a instanceof A.fK)return"PayloadError"
if(a instanceof A.fM)return"ProtocolError"
if(a instanceof A.fq)return"DuplicateIdError"
if(a instanceof A.ed)return"BatchFailedError"
return"SyncError"}if(a instanceof A.j4)return"ProtocolEnvelopeException"
if(a instanceof A.ig)return"DatabaseWorkerClosedException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bi)return"StateError"
if(a instanceof A.bB)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
IR(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.ar(s))throw A.b(A.bU('Request "v" must be an int.'))
if(!A.ar(r)||r<0)throw A.b(A.bU('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.db.G(0,q))throw A.b(A.bU("Unknown request operation: "+A.q(q)))
if(!t.f.b(p))throw A.b(A.bU('Request "a" must be a map.'))
return new A.hh(s,r,q,p.aL(0,new A.wZ(),t.N,t.X))},
bU(a){return new A.j4(a)},
hh:function hh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wZ:function wZ(){},
nd:function nd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wW:function wW(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a){this.a=a},
j4:function j4(a){this.a=a},
mo:function mo(a,b){this.a=a
this.b=b},
DW(a){return A.bx(A.bL(a).a,null)},
DX(a){return A.bx(J.bp(a).a,null)},
a2:function a2(a){this.a=a},
Mh(a){if(!t.f.b(a))throw A.b(A.a9("Schema must be a map: "+A.q(a),null,null))
return A.pt(A.f7(a),t.X)},
f7(a){var s=A.w(t.N,t.X)
a.a3(0,new A.As(s))
return s},
IT(a){var s,r=A.w(t.N,t.X)
r.j(0,"refId",a.a)
r.j(0,"store",a.b)
r.j(0,"recordId",a.c)
r.j(0,"field",a.d)
r.j(0,"hash",a.e)
s=a.f
if(s!=null)r.j(0,"remoteName",s)
r.j(0,"state",a.r)
r.j(0,"nextRetryAt",a.w)
r.j(0,"attemptCount",a.x)
s=a.y
if(s!=null)r.j(0,"lastError",s)
return r},
hi:function hi(){},
ju:function ju(a,b){this.b=a
this.a=b},
eN:function eN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
As:function As(a){this.a=a},
Ar:function Ar(){},
nh:function nh(){},
x7:function x7(a){this.a=a},
x8:function x8(a){this.a=a},
x5:function x5(){},
x6:function x6(){},
x4:function x4(a,b,c,d,e){var _=this
_.ay=$
_.a=a
_.c=b
_.d=null
_.e=1
_.f=c
_.r=d
_.w=null
_.x=1
_.as=_.Q=_.z=_.y=null
_.at=e
_.ax=null},
x9:function x9(a){this.a=a},
no:function no(a){this.a=a},
nf:function nf(){},
x1:function x1(a,b,c){this.a=a
this.b=b
this.c=c},
x0:function x0(a){this.a=a},
ng:function ng(){},
x2:function x2(a){this.a=a},
x3:function x3(){},
nj:function nj(){},
xa:function xa(a){this.a=a},
xb:function xb(a){this.a=a},
nk:function nk(){},
zG:function zG(a,b){this.a=a
this.b=b},
nl:function nl(){},
xg:function xg(a){this.a=a},
xh:function xh(a,b){this.a=a
this.b=b},
zt:function zt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nm:function nm(){},
xi:function xi(){},
xj:function xj(){},
xk:function xk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oo:function oo(){},
op:function op(){},
oq:function oq(){},
or:function or(){},
os:function os(){},
ot:function ot(){},
EZ(a){return a},
Fe(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a1("")
o=a+"("
p.a=o
n=A.a_(b)
m=n.i("cu<1>")
l=new A.cu(b,0,s,m)
l.jb(b,0,s,n.c)
m=o+new A.X(l,new A.Ab(),m.i("X<V.E,k>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.l(0),null))}},
q5:function q5(a){this.a=a},
q6:function q6(){},
q7:function q7(){},
Ab:function Ab(){},
rT:function rT(){},
dO(a,b){var s,r,q,p,o,n=b.ow(a),m=b.cJ(a)
if(n!=null)a=B.a.ag(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.cd(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cd(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ag(a,p))
q.push("")}return new A.m8(b,n,m,r,q)},
m8:function m8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Dv(a){return new A.m9(a)},
m9:function m9(a){this.a=a},
IF(){var s,r,q,p,o,n,m,l,k=null
if(A.BT().gb1()!=="file")return $.kt()
if(!B.a.c8(A.BT().gbr(),"/"))return $.kt()
s=A.Ev(k,0,0)
r=A.Et(k,0,0,!1)
q=A.zx(k,0,0,k)
p=A.Es(k,0,0)
o=A.zw(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Eu("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.C9(l,m)
else l=A.f1(l)
if(A.ka("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).l1()==="a\\b")return $.oP()
return $.G7()},
w5:function w5(){},
uO:function uO(a,b,c){this.d=a
this.e=b
this.f=c},
wG:function wG(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
x_:function x_(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
Bj(a,b){if(b<0)A.u(A.b_("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.u(A.b_("Offset "+b+u.D+a.gm(0)+"."))
return new A.lo(a,b)},
vO:function vO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lo:function lo(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
HA(a,b){var s=A.HB(A.l([A.Jf(a,!0)],t.pg)),r=new A.rJ(b).$0(),q=B.c.l(B.b.gY(s).b+1),p=A.HC(s)?0:3,o=A.a_(s)
return new A.rp(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.rr(),o.i("X<1,i>")).yg(0,B.bz),!A.M5(new A.X(s,new A.rs(),o.i("X<1,j?>"))),new A.a1(""))},
HC(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.v(r.c,q.c))return!1}return!0},
HB(a){var s,r,q=A.LX(a,new A.ru(),t.nf,t.K)
for(s=A.n(q),r=new A.aT(q,q.r,q.e,s.i("aT<2>"));r.k();)J.CJ(r.d,new A.rv())
s=s.i("aN<1,2>")
r=s.i("im<o.E,cy>")
s=A.N(new A.im(new A.aN(q,s),new A.rw(),r),r.i("o.E"))
return s},
Jf(a,b){var s=new A.yJ(a).$0()
return new A.bo(s,!0,null)},
Jh(a){var s,r,q,p,o,n,m=a.gaN()
if(!B.a.G(m,"\r\n"))return a
s=a.gO().gav()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gP()
p=a.ga4()
o=a.gO().gaj()
p=A.mD(s,a.gO().gau(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gbe()
return A.vP(r,p,o,A.z(n,"\r\n","\n"))},
Ji(a){var s,r,q,p,o,n,m
if(!B.a.c8(a.gbe(),"\n"))return a
if(B.a.c8(a.gaN(),"\n\n"))return a
s=B.a.A(a.gbe(),0,a.gbe().length-1)
r=a.gaN()
q=a.gP()
p=a.gO()
if(B.a.c8(a.gaN(),"\n")){o=A.Az(a.gbe(),a.gaN(),a.gP().gau())
o.toString
o=o+a.gP().gau()+a.gm(a)===a.gbe().length}else o=!1
if(o){r=B.a.A(a.gaN(),0,a.gaN().length-1)
if(r.length===0)p=q
else{o=a.gO().gav()
n=a.ga4()
m=a.gO().gaj()
p=A.mD(o-1,A.Ec(s),m-1,n)
q=a.gP().gav()===a.gO().gav()?p:a.gP()}}return A.vP(q,p,r,s)},
Jg(a){var s,r,q,p,o
if(a.gO().gau()!==0)return a
if(a.gO().gaj()===a.gP().gaj())return a
s=B.a.A(a.gaN(),0,a.gaN().length-1)
r=a.gP()
q=a.gO().gav()
p=a.ga4()
o=a.gO().gaj()
p=A.mD(q-1,s.length-B.a.dm(s,"\n")-1,o-1,p)
return A.vP(r,p,s,B.a.c8(a.gbe(),"\n")?B.a.A(a.gbe(),0,a.gbe().length-1):a.gbe())},
Ec(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.iD(a,"\n",s-2)-1
else return s-B.a.dm(a,"\n")-1},
rp:function rp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rJ:function rJ(a){this.a=a},
rr:function rr(){},
rq:function rq(){},
rs:function rs(){},
ru:function ru(){},
rv:function rv(){},
rw:function rw(){},
rt:function rt(a){this.a=a},
rK:function rK(){},
rx:function rx(a){this.a=a},
rE:function rE(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(a,b){this.a=a
this.b=b},
rG:function rG(a){this.a=a},
rH:function rH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rC:function rC(a,b){this.a=a
this.b=b},
rD:function rD(a,b){this.a=a
this.b=b},
ry:function ry(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rz:function rz(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b,c){this.a=a
this.b=b
this.c=c},
rB:function rB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rI:function rI(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
yJ:function yJ(a){this.a=a},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mD(a,b,c,d){if(a<0)A.u(A.b_("Offset may not be negative, was "+a+"."))
else if(c<0)A.u(A.b_("Line may not be negative, was "+c+"."))
else if(b<0)A.u(A.b_("Column may not be negative, was "+b+"."))
return new A.cs(d,a,c,b)},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mE:function mE(){},
mG:function mG(){},
Ix(a,b,c){return new A.h0(c,a,b)},
mH:function mH(){},
h0:function h0(a,b,c){this.c=a
this.a=b
this.b=c},
h1:function h1(){},
vP(a,b,c,d){var s=new A.de(d,a,b,c)
s.pb(a,b,c)
if(!B.a.G(d,c))A.u(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Az(d,c,a.gau())==null)A.u(A.O('The span text "'+c+'" must start at column '+(a.gau()+1)+' in a line within "'+d+'".',null))
return s},
de:function de(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
IB(a){var s
A:{if(18===a){s=B.de
break A}if(23===a){s=B.df
break A}if(9===a){s=B.dg
break A}s=null
break A}return s},
jf:function jf(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
IA(a,b,c,d,e,f,g){return new A.c9(d,b,c,e,f,a,g)},
c9:function c9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vU:function vU(){},
kz:function kz(a){this.a=a},
Kh(a,b,c){var s,r,q,p,o,n=new A.n8(c,A.ag(c.b,null,!1,t.X))
try{A.EO(a,b.$1(n))}catch(r){s=A.E(r)
q=B.e.v(A.ik(s))
p=a.a
o=p.cE(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
EO(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.ar(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.E_(b).l(0)))
break A}if(b instanceof A.aJ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.CQ(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bw(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.E_(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cE(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cE(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.aj(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.EO(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.u(A.aA(b,"result","Unsupported type"))}return s},
qw:function qw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
qF:function qF(a){this.a=a},
qE:function qE(a){this.a=a},
qG:function qG(a){this.a=a},
qC:function qC(a){this.a=a},
qB:function qB(a){this.a=a},
qD:function qD(a){this.a=a},
qy:function qy(a){this.a=a},
qx:function qx(a){this.a=a},
qz:function qz(a){this.a=a},
qH:function qH(a){this.a=a},
qA:function qA(a,b){this.a=a
this.b=b},
n8:function n8(a,b){this.a=a
this.b=b},
e3:function e3(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
zm:function zm(a,b){this.a=a
this.b=b},
zn:function zn(a,b,c){this.a=a
this.b=b
this.c=c},
zo:function zo(a,b,c){this.a=a
this.b=b
this.c=c},
vQ:function vQ(){},
h3:function h3(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
Bo(a,b){var s=$.oO()
return new A.lv(A.w(t.N,t.a_),s,a)},
lv:function lv(a,b,c){this.d=a
this.b=b
this.a=c},
nO:function nO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Mi(a){var s=J.GP(new v.G.URL(a,"file:///").pathname,"/")
return new A.al(s,new A.AP(),A.a_(s).i("al<1>"))},
AP:function AP(){},
qb:function qb(){},
mr:function mr(a,b,c){this.d=a
this.a=b
this.c=c},
c8:function c8(a,b){this.a=a
this.b=b},
z6:function z6(a){this.a=a
this.b=-1},
o3:function o3(){},
o4:function o4(){},
o6:function o6(){},
o7:function o7(){},
uk:function uk(a,b){this.a=a
this.b=b},
Il(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bD(r,"step")}return s},
ej:function ej(){},
bP:function bP(a){this.a=a},
l5:function l5(a){this.a=a},
he(a){return new A.di(a)},
CO(a,b){var s,r,q,p
if(b==null)b=$.oO()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cK(256)
r&2&&A.I(a)
a[q]=p}},
di:function di(a){this.a=a},
je:function je(a){this.a=a},
b6:function b6(){},
kO:function kO(){},
kN:function kN(){},
Mm(a,b){var s=null,r=new A.eu(t.kk)
return A.oN(a,new A.jv(s,s,s,s,s,s,s,s,new A.AZ(new A.AY(r,A.A3(new A.B_(r)))),s,s,s,s),s,b)},
eO:function eO(a){var _=this
_.d=a
_.c=_.b=_.a=null},
B_:function B_(a){this.a=a},
AY:function AY(a,b){this.a=a
this.b=b},
AZ:function AZ(a){this.a=a},
wR:function wR(a){this.a=a},
wM:function wM(a,b,c){this.a=a
this.b=b
this.c=c},
wT:function wT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wS:function wS(a,b,c){this.b=a
this.c=b
this.d=c},
dV:function dV(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
bY(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.E(r)
if(q instanceof A.di){s=q
return s.a}else return 1}},
l8:function l8(a){this.b=this.a=$
this.d=a},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
qe:function qe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qj:function qj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ql:function ql(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qn:function qn(a,b){this.a=a
this.b=b},
qg:function qg(a){this.a=a},
qm:function qm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qr:function qr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qp:function qp(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b){this.a=a
this.b=b},
qq:function qq(a,b){this.a=a
this.b=b},
qf:function qf(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b){this.a=a
this.$ti=b},
p1:function p1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p3:function p3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p2:function p2(a,b,c){this.a=a
this.b=b
this.c=c},
cD(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bm(a,"success",new A.pP(r,a,b),!1,q)
A.bm(a,"error",new A.pQ(r,a),!1,q)
return s},
H9(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bm(a,"success",new A.pU(r,a,b),!1,q)
A.bm(a,"error",new A.pV(r,a),!1,q)
A.bm(a,"blocked",new A.pW(r),!1,q)
return s},
eS:function eS(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
yb:function yb(a,b){this.a=a
this.b=b},
yc:function yc(a,b){this.a=a
this.b=b},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a,b){this.a=a
this.b=b},
pU:function pU(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a,b){this.a=a
this.b=b},
pW:function pW(a){this.a=a},
hY(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
D8(a,b,c){var s=a.read(b,c)
return s},
D9(a,b,c){var s=a.write(b,c)
return s},
Bk(a,b){return A.a6(a.removeEntry(b,{recursive:!1}),t.X)},
D7(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.u(A.O("Target object does not implement the async iterable interface",null))
return new A.eW(new A.r9(),new A.i5(a,s),s.i("eW<ab.T,M>"))},
r9:function r9(){},
wN:function wN(a){this.a=a},
wO:function wO(a){this.a=a},
wQ(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$wQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a6(p.fetch(new p.URL(a,A.be(p.location).href),null),t.m),$async$wQ)
case 3:q=o.wP(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wQ,r)},
wP(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$wP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.l8(A.w(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.wN(p).iF(a),$async$wP)
case 3:q=new o.hf(new n.wR(m.IQ(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wP,r)},
hf:function hf(a){this.a=a},
Jj(a){var s=new A.jN(a,new A.ao(new A.t($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.pf(a)
return s},
lx(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$lx=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.p4(a)
n=A.Bo("dart-memory",null)
m=$.oO()
l=new A.dD(o,n,new A.eu(t.p3),A.aO(p),A.w(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.iI(),$async$lx)
case 3:s=4
return A.a(l.eW(),$async$lx)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lx,r)},
p4:function p4(a){this.a=null
this.b=a},
p7:function p7(a){this.a=a},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
p5:function p5(a){this.a=a},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
yM:function yM(a){this.a=a},
yN:function yN(a){this.a=a},
yL:function yL(a){this.a=a},
yO:function yO(a,b,c){this.a=a
this.b=b
this.c=c},
yQ:function yQ(a,b){this.a=a
this.b=b},
yP:function yP(a,b){this.a=a
this.b=b},
yn:function yn(a,b,c){this.a=a
this.b=b
this.c=c},
yo:function yo(a,b){this.a=a
this.b=b},
nX:function nX(a,b){this.a=a
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
rN:function rN(a,b,c){this.a=a
this.b=b
this.c=c},
rO:function rO(){},
rM:function rM(a,b){this.a=a
this.b=b},
nP:function nP(a,b,c){this.a=a
this.b=b
this.c=c},
yK:function yK(a,b){this.a=a
this.b=b},
b8:function b8(){},
jL:function jL(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jF:function jF(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hp:function hp(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hJ:function hJ(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
DH(a){var s=A.Bo("dart-memory",null),r=$.oO()
return new A.h_(s,r,a)},
mz(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$mz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.hY()
if(j==null)throw A.b(A.he(1))
p=t.m
s=3
return A.a(A.a6(j.getDirectory(),p),$async$mz)
case 3:o=d
n=A.Mi(a),m=J.D(n.a),n=new A.cW(m,n.b,n.$ti.i("cW<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a6(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$mz)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a5(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mz,r)},
mA(a){var s=0,r=A.h(t.m),q
var $async$mA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.mz(a,!0),$async$mA)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mA,r)},
vM(a,b){var s=0,r=A.h(t.g_),q,p
var $async$vM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.hY()==null)throw A.b(A.he(1))
p=A
s=3
return A.a(A.mA(a),$async$vM)
case 3:q=p.vL(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vM,r)},
vL(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$vL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.DH(c)
s=3
return A.a(p.cM(a,!1),$async$vL)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vL,r)},
fu:function fu(a,b,c){this.c=a
this.a=b
this.b=c},
h_:function h_(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
vN:function vN(a,b){this.a=a
this.b=b},
oc:function oc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
z2:function z2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
IQ(a,b){var s=A.be(a.exports.memory)
b.b!==$&&A.cz()
b.b=s
s=new A.wH(s,b,a.exports)
s.pc(a,b)
return s},
nn(a,b){var s,r=A.bT(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dW(a,b,c){var s=a.buffer
return B.l.f5(A.bT(s,b,c==null?A.nn(a,b):c))},
BU(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.l.f5(A.bT(s,b,c==null?A.nn(a,b):c))},
DY(a,b,c){var s=new Uint8Array(c)
B.f.cR(s,0,A.bT(a.buffer,b,c))
return s},
wH:function wH(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
wI:function wI(a){this.a=a},
wJ:function wJ(a){this.a=a},
wK:function wK(a){this.a=a},
wL:function wL(a){this.a=a},
Al(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Al=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kv()
s=l!=null?3:5
break
case 3:p=A.KP()
s=6
return A.a(A.js(l,p,null,null,!1),$async$Al)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a5({port:m.port1,lockName:p},new A.ic(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Al,r)},
KP(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bt(97+$.Gz().cK(26))
return r.charCodeAt(0)==0?r:r},
H_(a){return new A.ia(a)},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
uV:function uV(){},
uZ:function uZ(a){this.a=a},
v_:function v_(a){this.a=a},
uY:function uY(a){this.a=a},
uX:function uX(a){this.a=a},
uW:function uW(a){this.a=a},
ia:function ia(a){this.a=a},
qu:function qu(){},
l4:function l4(a){this.a=a},
qc:function qc(a){this.a=a},
eM:function eM(){},
ln(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$ln=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.mA(a),$async$ln)
case 3:p=e
o=A.DH(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cM(p,!0),$async$ln)
case 6:case 5:q=new A.lm(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ln,r)},
lm:function lm(a,b,c){this.a=a
this.b=b
this.c=c},
rn:function rn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
js(a,b,c,d,e){var s,r,q={},p=new A.t($.C,t.nI),o=new A.ao(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.Bl(A.a6(a.request(b,s,A.cZ(new A.wX(q,o))),r),new A.wY(q,d,o),r,t.K)
return p},
wX:function wX(a,b){this.a=a
this.b=b},
wY:function wY(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.a=a},
l9:function l9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
qJ:function qJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qI:function qI(a,b){this.a=a
this.b=b},
qK:function qK(a){this.a=a},
iT:function iT(a){this.a=!1
this.b=a},
uc:function uc(a,b){this.a=a
this.b=b},
ub:function ub(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ua:function ua(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H6(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bO(n,A.a_(n).i("bO<1,k>"))
for(s=J.L(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a5(A.fs(B.cG,s.h(m,q)),s.h(m,q+1)))}s=A.hL(a.b)
q=A.hL(a.c)
p=A.hL(a.d)
return new A.ek(o,s,q,A.hL(a.g),p)},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Io(a){var s
if(J.v(a.t,"errorResponse")){s=A.Hm(a)
if(s!=null&&s instanceof A.du)return s
else return new A.fU(a.e)}else return new A.fU("Did not respond with expected type, got "+A.q(a))},
Hm(a){var s=a.s,r=s==null?null:A.ap(s)
A:{if(0===r){s=A.Hn(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
Hn(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.x("Pattern matching error"))
n=new A.r_()
l=A.ap(A.f2(l))
A.G(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.el(i,h,A.bT(h,0,o))}else p=o
n=n.$1(k)
A.EE(g)
return new A.c9(s,r,l,g==null?o:A.ap(g),n,q,p)},
Ho(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.IJ(l)
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
Ip(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.rn(a2,512,"transfer" in a2)
a5.mX(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Il(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qu(l)
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
d=A.nn(r,f)
f=new Uint8Array(e,f,d)
c=new A.dn(!1).cY(f,0,a,!0)
i=c
g=B.aH
break
case 4:i=s.lm(j)
g=B.aI
break
case 5:default:i=a
g=B.aJ}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.nn(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dn(!1).cY(a0,0,a,!0)}return A.FJ(!1,b,0,0,a1,a,a3.yv(0))},
M6(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
r_:function r_(){},
FJ(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
hS(a){var s,r,q,p,o=v.G,n=new o.Array()
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
LN(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
lQ:function lQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
vB:function vB(){},
Hs(a){var s,r
for(s=0;s<5;++s){r=B.ct[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
II(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aJ
break A}q=A.ar(a)
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
break A}throw A.b(A.O("Unsupported value: "+A.q(a),j))}return new A.a5(r,s)},
IJ(a){var s,r,q,p,o,n
if(a instanceof A.el)return new A.a5(a.a,a.b)
s=[]
r=J.L(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.II(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a5(s,t.a.a(B.f.gaa(p)))},
dz:function dz(a,b,c){this.c=a
this.a=b
this.b=c},
cw:function cw(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
oG(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$oG=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.be(i.indexedDB)
i=$.kv()
i=i==null?null:A.js(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bn(i,t.b3),$async$oG)
case 3:l=b
p=5
s=8
return A.a(A.H8(m.open("drift_mock_db"),t.m),$async$oG)
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
if(i!=null)i.a.ai()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$oG,r)},
Ah(a){return A.Lx(a)},
Lx(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$Ah=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.be(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cZ(new A.Ai(j,m))
s=7
return A.a(A.H7(m,t.m),$async$Ah)
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
return A.f($async$Ah,r)},
hV(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$hV=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.hY()
if(h==null){q=B.p
s=1
break}j=t.m
s=3
return A.a(A.a6(h.getDirectory(),j),$async$hV)
case 3:m=b
p=5
s=8
return A.a(A.a6(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$hV)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.p
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.l([],t.s)
j=new A.cf(A.bZ(A.D7(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$hV)
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
return A.a(j.D(),$async$hV)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hV,r)},
H7(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bm(a,"success",new A.pN(r,a,b),!1,q)
A.bm(a,"error",new A.pO(r,a),!1,q)
return s},
H8(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bm(a,"success",new A.pR(r,a,b),!1,q)
A.bm(a,"error",new A.pS(r,a),!1,q)
A.bm(a,"blocked",new A.pT(r,a),!1,q)
return s},
Ai:function Ai(a,b){this.a=a
this.b=b},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(a,b){this.a=a
this.b=b},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a,b){this.a=a
this.b=b},
pT:function pT(a,b){this.a=a
this.b=b},
uR:function uR(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
du:function du(a){this.a=a},
Kg(a){var s=a.gnk()
return new A.eW(new A.A2(),s,A.n(s).i("eW<ab.T,M>"))},
E8(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hn(a,r,new A.k0(),new A.k0(),new A.k0(),s)},
Ja(a,b,c){var s=t.S
s=new A.hl(c,A.l([],t.fV),a.a,new A.az(new A.t($.C,t.D),t.h),A.w(s,t.br),A.w(s,t.m))
s.p9(a)
s.pe(a,b,c)
return s},
EP(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e6(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e6=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.hY()
if(b==null){q=B.aB
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.kv()
d=d==null?null:A.js(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bn(d,t.b3),$async$e6)
case 7:j=a1
d=t.m
s=8
return A.a(A.a6(b.getDirectory(),d),$async$e6)
case 8:m=a1
s=9
return A.a(A.a6(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e6)
case 9:l=a1
s=10
return A.a(A.kk(l),$async$e6)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.Br(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a6(A.be(e),t.X),$async$e6)
case 13:q=B.aB
n=[1]
s=5
break
case 12:g=i
q=new A.jW(!0,g)
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
if(g!=null)g.a.ai()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.Bk(m,"_drift_feature_detection"),$async$e6)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e6,r)},
kk(a){return A.L6(a)},
L6(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kk=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a6(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kk)
case 7:j=c
s=8
return A.a(A.a6(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kk)
case 8:n=c
n.close()
l=j
q=new A.a5(!0,l)
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
return A.a(A.a6(a.createSyncAccessHandle(),t.m),$async$kk)
case 9:m=c
q=new A.a5(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kk,r)},
A2:function A2(){},
k0:function k0(){this.a=null},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
y3:function y3(a){this.a=a},
y7:function y7(a,b){this.a=a
this.b=b},
y4:function y4(a,b){this.a=a
this.b=b},
y5:function y5(a){this.a=a},
y6:function y6(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
xO:function xO(a){this.a=a},
xT:function xT(a,b){this.a=a
this.b=b},
xW:function xW(a,b,c){this.a=a
this.b=b
this.c=c},
xQ:function xQ(a,b){this.a=a
this.b=b},
xP:function xP(a,b){this.a=a
this.b=b},
xV:function xV(a,b){this.a=a
this.b=b},
xU:function xU(a,b){this.a=a
this.b=b},
xY:function xY(a,b){this.a=a
this.b=b},
xX:function xX(a,b){this.a=a
this.b=b},
xR:function xR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xS:function xS(a,b){this.a=a
this.b=b},
xN:function xN(a){this.a=a},
la:function la(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
qN:function qN(a){this.a=a},
qM:function qM(a){this.a=a},
qL:function qL(a,b){this.a=a
this.b=b},
xc:function xc(a,b,c,d,e,f){var _=this
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
xd:function xd(a,b){this.a=a
this.b=b},
xe:function xe(a,b){this.a=a
this.b=b},
xf:function xf(a){this.a=a},
IS(){var s=v.G
if(A.HG(s,"DedicatedWorkerGlobalScope"))return new A.nG(s,new A.nH(s.location.href))
else return new A.oa(s,new A.nH(s.location.href))},
kc:function kc(){},
nG:function nG(a,b){this.a=a
this.b=b},
oa:function oa(a,b){this.a=a
this.b=b},
zh:function zh(a){this.a=a},
zi:function zi(a,b,c){this.a=a
this.b=b
this.c=c},
zg:function zg(a){this.a=a},
ze:function ze(a){this.a=a},
zf:function zf(a){this.a=a},
nH:function nH(a){this.a=a},
yi:function yi(a){this.a=a},
mN:function mN(a,b,c){this.c=a
this.a=b
this.b=c},
w4:function w4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hb:function hb(){},
nQ:function nQ(){},
cx:function cx(a,b){this.a=a
this.b=b},
bm(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Ff(new A.yl(c),t.m)
s=s==null?null:A.cZ(s)}s=new A.jJ(a,b,s,!1,e.i("jJ<0>"))
s.k7()
return s},
Ff(a,b){var s=$.C
if(s===B.i)return a
return s.i8(a,b)},
Bg:function Bg(a,b){this.a=a
this.$ti=b},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
yl:function yl(a){this.a=a},
ym:function ym(a){this.a=a},
FZ(a){return v.mangledGlobalNames[a]},
FN(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
HJ(a,b){return b in a},
Br(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
LX(a,b,c,d){var s,r,q,p,o,n=A.w(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aL(p,q)}return n},
Bp(a){var s=J.D(a.a)
if(new A.cW(s,a.b,a.$ti.i("cW<1>")).k())return s.gn()
return null},
Ae(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.I(a)
a[r]=s&255
b=s/256|0;--r}},
Mx(a){return a},
FX(a){if(a instanceof A.dw)return a
return new A.dw(a)},
Mz(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.E(p)
if(q instanceof A.h0){s=q
throw A.b(A.Ix("Invalid "+a+": "+s.a,s.b,s.gfV()))}else if(t.Y.b(q)){r=q
throw A.b(A.a9("Invalid "+a+' "'+b+'": '+r.gkK(),r.gfV(),r.gav()))}else throw p}},
hT(){var s,r,q,p=$.GA(),o=$.Gt()+1
$.Km=o
s=B.a.iK(B.c.l2(o,36),8,"0")
r=J.Dg(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cK(36)]
return B.a.A(s+B.b.ei(r),0,15)},
oM(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.cO)throw q
else{s=r
r=A.ji("Corrupt "+a+" row: "+A.q(s))
throw A.b(r)}}},
Ao(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.n
try{s=B.h.az(a,null)
if(t.f.b(s)){q=A.ba(s,t.N,t.X)
return q}return B.n}catch(p){r=A.E(p)
q=A.ji("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
Fv(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.be
try{s=B.h.az(a,null)
if(t.j.b(s)){q=J.i0(s,t.N)
q=q.fJ(q)
return q}return B.be}catch(p){r=A.E(p)
q=A.ji("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
Fu(a){var s,r,q,p,o=null
if(a==null)return B.p
A.G(a)
if(a.length===0)return B.p
s=B.h.az(a,o)
if(!t.j.b(s))throw A.b(A.a9("expected a JSON array, got "+J.bp(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.D(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.u(A.a9("dirty-field member is "+J.bp(p).l(0)+", expected String",o,o)))}return r},
e8(a){var s,r=J.L(a)
if(r.gF(a))return null
s=J.c0(r.gE(a).gaZ())
if(A.ar(s))return s
if(typeof s=="string")return A.j3(s,null)
return null},
Mt(a,b,c){var s=A.z(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
FB(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.d2(B.x.yq(r*J.GI(d.$1(o),0.5,1.5)),0,0)},
Mf(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.c4)
s=a.h(0,"type")
if(!J.v(s,"aes-gcm"))throw A.b(A.a9("Unsupported fieldCipher type: "+A.q(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.aj(r)!==32)throw A.b(B.c3)
q=new Uint8Array(32)
for(p=J.L(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.ar(n)||n<0||n>255)throw A.b(A.a9("Malformed AES-256-GCM key byte at index "+o+": "+A.q(n),m,m))
q[o]=n}A.CM(q)
p=$.B5()
if($.kr()!==B.O)A.u(A.x("BigEndian systems are unsupported"))
return new A.oX(new A.l6(12,32,m),new A.jc(new A.my(A.CM(q)),m),p)},
Fx(a){var s,r=A.w(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.d_(a.c))
r.j(0,"local",A.d_(a.d))
r.j(0,"remote",A.d_(a.e))
s=a.f
s=A.N(s,A.n(s).c)
B.b.aG(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.N(s,A.n(s).c)
B.b.aG(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.d_(s))
return r},
Fz(a){var s,r=A.w(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.d_(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.d_(s))
return r},
Mb(){var s=A.IS(),r=t.cj
new A.xc(s,B.bL,A.l([],t.az),A.w(t.S,t.lp),new A.iT(A.Bv(r)),new A.iT(A.Bv(r))).eg()},
Fr(){var s,r,q,p,o=null
try{o=A.BT()}catch(s){if(t.mA.b(A.E(s))){r=$.A0
if(r!=null)return r
throw s}else throw s}if(J.v(o,$.EL)){r=$.A0
r.toString
return r}$.EL=o
if($.Cz()===$.kt())r=$.A0=o.bt(".").l(0)
else{q=o.l1()
p=q.length-1
r=$.A0=p===0?q:B.a.A(q,0,p)}return r},
FF(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Fw(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.FF(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
M5(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gE(0)
for(r=A.cv(a,1,null,a.$ti.i("V.E")),q=r.$ti,r=new A.an(r,r.gm(0),q.i("an<V.E>")),q=q.i("V.E");r.k();){p=r.d
if(!J.v(p==null?q.a(p):p,s))return!1}return!0},
Ml(a,b){var s=B.b.bS(a,null)
if(s<0)throw A.b(A.O(A.q(a)+" contains no null elements.",null))
a[s]=b},
FR(a,b){var s=B.b.bS(a,b)
if(s<0)throw A.b(A.O(A.q(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
LK(a,b){var s,r,q,p
for(s=new A.ck(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<J.E>")),r=r.i("J.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Az(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cb(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bS(a,b)
while(r!==-1){q=r===0?0:B.a.iD(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cb(a,b,r+1)}return null},
Cm(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c9(A.dW(r.b,p.sqlite3_errmsg(q),null),A.dW(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.q(o)+")",c,n,d,e,f)},
B0(a,b,c,d,e){throw A.b(A.Cm(a.a,a.b,b,c,d,e))},
CQ(a){if(a.a1(0,$.G1())<0||a.a1(0,$.G0())>0)throw A.b(A.D4("BigInt value exceeds the range of 64 bits"))
return a},
Im(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ap(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dW(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.DY(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Db(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bt("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cK(61)))
return s.charCodeAt(0)==0?s:s},
vy(a){var s=0,r=A.h(t.lo),q
var $async$vy=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a6(a.arrayBuffer(),t.a),$async$vy)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vy,r)}},B={}
var w=[A,J,B]
var $={}
A.Bt.prototype={}
J.lz.prototype={
R(a,b){return a===b},
gJ(a){return A.eC(a)},
l(a){return"Instance of '"+A.md(a)+"'"},
gam(a){return A.bL(A.Ce(this))}}
J.lB.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gam(a){return A.bL(t.y)},
$iak:1,
$iR:1}
J.iA.prototype={
R(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gam(a){return A.bL(t.P)},
$iak:1,
$iW:1}
J.aG.prototype={$iM:1}
J.dG.prototype={
gJ(a){return 0},
gam(a){return B.dz},
l(a){return String(a)}}
J.mb.prototype={}
J.dU.prototype={}
J.bQ.prototype={
l(a){var s=a[$.G4()]
if(s==null)s=a[$.fb()]
if(s==null)return this.oU(a)
return"JavaScript function for "+J.Z(s)}}
J.br.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fz.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.B.prototype={
i9(a,b){return new A.bO(a,A.a_(a).i("@<1>").V(b).i("bO<1,2>"))},
u(a,b){a.$flags&1&&A.I(a,29)
a.push(b)},
iS(a,b){var s
a.$flags&1&&A.I(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.vx(b,null))
return a.splice(b,1)[0]},
aE(a,b,c){var s
a.$flags&1&&A.I(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.vx(b,null))
a.splice(b,0,c)},
kC(a,b,c){var s,r
a.$flags&1&&A.I(a,"insertAll",2)
A.DE(b,0,a.length,"index")
if(!t.O.b(c))c=J.GS(c)
s=J.aj(c)
a.length=a.length+s
r=b+s
this.ak(a,r,a.length,a,b)
this.aw(a,b,r,c)},
kV(a){a.$flags&1&&A.I(a,"removeLast",1)
if(a.length===0)throw A.b(A.At(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.I(a,"remove",1)
for(s=0;s<a.length;++s)if(J.v(a[s],b)){a.splice(s,1)
return!0}return!1},
uo(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aB(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dB(a,b){return new A.al(a,b,A.a_(a).i("al<1>"))},
C(a,b){var s
a.$flags&1&&A.I(a,"addAll",2)
if(Array.isArray(b)){this.pl(a,b)
return}for(s=J.D(b);s.k();)a.push(s.gn())},
pl(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aB(a))
for(s=0;s<r;++s)a.push(b[s])},
ab(a){a.$flags&1&&A.I(a,"clear","clear")
a.length=0},
cf(a,b,c){return new A.X(a,b,A.a_(a).i("@<1>").V(c).i("X<1,2>"))},
B(a,b){var s,r=A.ag(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.q(a[s])
return r.join(b)},
ei(a){return this.B(a,"")},
cN(a,b){return A.cv(a,0,A.bZ(b,"count",t.S),A.a_(a).c)},
bk(a,b){return A.cv(a,b,null,A.a_(a).c)},
ff(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aB(a))}if(c!=null)return c.$0()
throw A.b(A.aF())},
nh(a,b){return this.ff(a,b,null)},
a8(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.au(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.au(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a_(a))
return A.l(a.slice(b,c),A.a_(a))},
b6(a,b){return this.T(a,b,null)},
fQ(a,b,c){A.bc(b,c,a.length)
return A.cv(a,b,c,A.a_(a).c)},
gE(a){if(a.length>0)return a[0]
throw A.b(A.aF())},
gY(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aF())},
gar(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aF())
throw A.b(A.ix())},
kW(a,b,c){a.$flags&1&&A.I(a,18)
A.bc(b,c,a.length)
a.splice(b,c-b)},
ak(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.I(a,5)
A.bc(b,c,a.length)
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.oV(d,e).cO(0,!1)
q=0}p=J.L(r)
if(q+s>p.gm(r))throw A.b(A.De())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aw(a,b,c,d){return this.ak(a,b,c,d,0)},
bQ(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aB(a))}return!1},
cG(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aB(a))}return!0},
cl(a,b){var s,r,q,p,o
a.$flags&2&&A.I(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Kq()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a_(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e7(b,2))
if(p>0)this.uq(a,p)},
aG(a){return this.cl(a,null)},
uq(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bS(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.v(a[s],b))return s
return-1},
dm(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.v(a[s],b))return s
return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.v(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gU(a){return a.length!==0},
l(a){return A.rU(a,"[","]")},
cO(a,b){var s=A.l(a.slice(0),A.a_(a))
return s},
dw(a){return this.cO(a,!0)},
gt(a){return new J.ff(a,a.length,A.a_(a).i("ff<1>"))},
gJ(a){return A.eC(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.I(a,"set length","change the length of")
if(b<0)throw A.b(A.au(b,0,null,"newLength",null))
if(b>a.length)A.a_(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.At(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
if(!(b>=0&&b<a.length))throw A.b(A.At(a,b))
a[b]=c},
l7(a,b){return new A.bI(a,b.i("bI<0>"))},
nl(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gam(a){return A.bL(A.a_(a))},
$ib9:1,
$iK:1,
$io:1,
$ip:1}
J.lA.prototype={
yB(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.md(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.rV.prototype={}
J.ff.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.es.prototype={
a1(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkH(b)
if(this.gkH(a)===s)return 0
if(this.gkH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkH(a){return a===0?1/a<0:a<0},
iU(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
vC(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
wN(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
yq(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bR(a,b,c){if(this.a1(b,c)>0)throw A.b(A.f6(b))
if(this.a1(a,b)<0)return b
if(this.a1(a,c)>0)return c
return a},
l2(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.au(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.u(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bi("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fN(a,b){return a+b},
al(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ja(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mF(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.mF(a,b)},
mF(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
bG(a,b){if(b<0)throw A.b(A.f6(b))
return b>31?0:a<<b>>>0},
uM(a,b){return b>31?0:a<<b>>>0},
dG(a,b){var s
if(b<0)throw A.b(A.f6(b))
if(a>0)s=this.k5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ah(a,b){var s
if(a>0)s=this.k5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mC(a,b){if(0>b)throw A.b(A.f6(b))
return this.k5(a,b)},
k5(a,b){return b>31?0:a>>>b},
ox(a,b){return a>b},
gam(a){return A.bL(t.cZ)},
$iax:1,
$iac:1,
$iaW:1}
J.iz.prototype={
gmY(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.N(q,4294967296)
s+=32}return s-Math.clz32(q)},
gam(a){return A.bL(t.S)},
$iak:1,
$ii:1}
J.lC.prototype={
gam(a){return A.bL(t.W)},
$iak:1}
J.dE.prototype={
ke(a,b,c){var s=b.length
if(c>s)throw A.b(A.au(c,0,s,null,null))
return new A.oe(b,a,c)},
i4(a,b){return this.ke(a,b,0)},
em(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.au(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.h5(c,a)},
c8(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ag(a,r-s)},
kY(a,b,c){A.DE(0,0,a.length,"startIndex")
return A.Ms(a,b,c,0)},
cS(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.et){s=b.e
s=!(s==null?b.e=b.pT():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.q6(a,b)}},
dt(a,b,c,d){var s=A.bc(b,c,a.length)
return A.FV(a,b,s,d)},
q6(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.B8(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
o=p.gP()
n=p.gO()
q=n-o
if(q===0&&r===o)continue
m.push(this.A(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ag(a,r))
return m},
af(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.au(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.af(a,b,0)},
A(a,b,c){return a.substring(b,A.bc(b,c,a.length))},
ag(a,b){return this.A(a,b,null)},
cj(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.HK(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Dk(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
yz(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.Dk(r,s))},
bi(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bN)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iK(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bi(c,s)+a},
xT(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bi(" ",s)},
cb(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.au(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bS(a,b){return this.cb(a,b,0)},
iD(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.au(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dm(a,b){return this.iD(a,b,null)},
G(a,b){return A.Mp(a,b,0)},
a1(a,b){var s
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
gam(a){return A.bL(t.N)},
gm(a){return a.length},
$ib9:1,
$iak:1,
$iax:1,
$ik:1}
A.y9.prototype={
u(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.L(b),i=j.gm(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.c.ah(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.f.aw(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.aw(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.I(r)
r[q+m]=l}k.a=s},
l0(){var s,r=this
if(r.a===0)return $.oQ()
s=J.bN(B.f.gaa(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.oQ()
return s},
gm(a){return this.a}}
A.xK.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b3(b))
this.b.push(s)
this.a=this.a+s.length},
l0(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.oQ()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.ab(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.r)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.aw(q,p,m,n)}l.a=0
B.b.ab(s)
return q},
gm(a){return this.a}}
A.dX.prototype={
gt(a){return new A.kU(J.D(this.gbc()),A.n(this).i("kU<1,2>"))},
gm(a){return J.aj(this.gbc())},
gF(a){return J.bA(this.gbc())},
gU(a){return J.eb(this.gbc())},
bk(a,b){var s=A.n(this)
return A.fh(J.oV(this.gbc(),b),s.c,s.y[1])},
cN(a,b){var s=A.n(this)
return A.fh(J.oW(this.gbc(),b),s.c,s.y[1])},
a8(a,b){return A.n(this).y[1].a(J.oT(this.gbc(),b))},
gE(a){return A.n(this).y[1].a(J.c0(this.gbc()))},
gY(a){return A.n(this).y[1].a(J.oU(this.gbc()))},
gar(a){return A.n(this).y[1].a(J.Ba(this.gbc()))},
G(a,b){return J.B9(this.gbc(),b)},
l(a){return J.Z(this.gbc())}}
A.kU.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ef.prototype={
gbc(){return this.a}}
A.jG.prototype={$iK:1}
A.jD.prototype={
h(a,b){return this.$ti.y[1].a(J.S(this.a,b))},
j(a,b,c){J.c_(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.GN(this.a,b)},
u(a,b){J.aL(this.a,this.$ti.c.a(b))},
cl(a,b){var s=b==null?null:new A.xL(this,b)
J.CJ(this.a,s)},
fQ(a,b,c){var s=this.$ti
return A.fh(J.GK(this.a,b,c),s.c,s.y[1])},
ak(a,b,c,d,e){var s=this.$ti
J.GO(this.a,b,c,A.fh(d,s.y[1],s.c),e)},
aw(a,b,c,d){return this.ak(0,b,c,d,0)},
$iK:1,
$ip:1}
A.xL.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bO.prototype={
i9(a,b){return new A.bO(this.a,this.$ti.i("@<1>").V(b).i("bO<1,2>"))},
gbc(){return this.a}}
A.eg.prototype={
c7(a,b,c){return new A.eg(this.a,this.$ti.i("@<1,2>").V(b).V(c).i("eg<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a3(a,b){this.a.a3(0,new A.pm(this,b))},
gL(){var s=this.$ti
return A.fh(this.a.gL(),s.c,s.y[2])},
gaZ(){var s=this.$ti
return A.fh(this.a.gaZ(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gU(a){var s=this.a
return s.gU(s)},
gac(){var s=this.a.gac()
return s.cf(s,new A.pl(this),this.$ti.i("Q<3,4>"))}}
A.pm.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pl.prototype={
$1(a){var s=this.a.$ti
return new A.Q(s.y[2].a(a.a),s.y[3].a(a.b),s.i("Q<3,4>"))},
$S(){return this.a.$ti.i("Q<3,4>(Q<1,2>)")}}
A.dF.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mm.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.ck.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.AN.prototype={
$0(){return A.bq(null,t.H)},
$S:4}
A.vK.prototype={}
A.K.prototype={}
A.V.prototype={
gt(a){var s=this
return new A.an(s,s.gm(s),A.n(s).i("an<V.E>"))},
gF(a){return this.gm(this)===0},
gE(a){if(this.gm(this)===0)throw A.b(A.aF())
return this.a8(0,0)},
gY(a){var s=this
if(s.gm(s)===0)throw A.b(A.aF())
return s.a8(0,s.gm(s)-1)},
gar(a){var s=this
if(s.gm(s)===0)throw A.b(A.aF())
if(s.gm(s)>1)throw A.b(A.ix())
return s.a8(0,0)},
G(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.v(r.a8(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aB(r))}return!1},
cG(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a8(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.aB(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.a8(0,0))
if(o!==p.gm(p))throw A.b(A.aB(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.aB(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.aB(p))}return r.charCodeAt(0)==0?r:r}},
ei(a){return this.B(0,"")},
dB(a,b){return this.oP(0,b)},
cf(a,b,c){return new A.X(this,b,A.n(this).i("@<V.E>").V(c).i("X<1,2>"))},
yg(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aF())
s=q.a8(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a8(0,r))
if(p!==q.gm(q))throw A.b(A.aB(q))}return s},
bk(a,b){return A.cv(this,b,null,A.n(this).i("V.E"))},
cN(a,b){return A.cv(this,0,A.bZ(b,"count",t.S),A.n(this).i("V.E"))}}
A.cu.prototype={
jb(a,b,c,d){var s,r=this.b
A.bb(r,"start")
s=this.c
if(s!=null){A.bb(s,"end")
if(r>s)throw A.b(A.au(r,0,s,"start",null))}},
gqh(){var s=J.aj(this.a),r=this.c
if(r==null||r>s)return s
return r},
guP(){var s=J.aj(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.aj(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a8(a,b){var s=this,r=s.guP()+b
if(b<0||r>=s.gqh())throw A.b(A.lw(b,s.gm(0),s,null,"index"))
return J.oT(s.a,r)},
bk(a,b){var s,r,q=this
A.bb(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.eo(q.$ti.i("eo<1>"))
return A.cv(q.a,s,r,q.$ti.c)},
cN(a,b){var s,r,q,p=this
A.bb(b,"count")
s=p.c
r=p.b
if(s==null)return A.cv(p.a,r,B.c.fN(r,b),p.$ti.c)
else{q=B.c.fN(r,b)
if(s<q)return p
return A.cv(p.a,r,q,p.$ti.c)}},
cO(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.L(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Dh(0,n):J.Bq(0,n)}r=A.ag(s,m.a8(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a8(n,o+q)
if(m.gm(n)<l)throw A.b(A.aB(p))}return r},
dw(a){return this.cO(0,!0)}}
A.an.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.L(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.aB(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a8(q,s);++r.c
return!0}}
A.cm.prototype={
gt(a){return new A.lO(J.D(this.a),this.b,A.n(this).i("lO<1,2>"))},
gm(a){return J.aj(this.a)},
gF(a){return J.bA(this.a)},
gE(a){return this.b.$1(J.c0(this.a))},
gY(a){return this.b.$1(J.oU(this.a))},
gar(a){return this.b.$1(J.Ba(this.a))},
a8(a,b){return this.b.$1(J.oT(this.a,b))}}
A.en.prototype={$iK:1}
A.lO.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.aj(this.a)},
a8(a,b){return this.b.$1(J.oT(this.a,b))}}
A.al.prototype={
gt(a){return new A.cW(J.D(this.a),this.b,this.$ti.i("cW<1>"))},
cf(a,b,c){return new A.cm(this,b,this.$ti.i("@<1>").V(c).i("cm<1,2>"))}}
A.cW.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.im.prototype={
gt(a){return new A.lj(J.D(this.a),this.b,B.aQ,this.$ti.i("lj<1,2>"))}}
A.lj.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.D(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eJ.prototype={
gt(a){var s=this.a
return new A.mP(s.gt(s),this.b,A.n(this).i("mP<1>"))}}
A.ij.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.ox(r,s))return s
return r},
$iK:1}
A.mP.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.dd.prototype={
bk(a,b){A.kB(b,"count")
A.bb(b,"count")
return new A.dd(this.a,this.b+b,A.n(this).i("dd<1>"))},
gt(a){var s=this.a
return new A.mB(s.gt(s),this.b,A.n(this).i("mB<1>"))}}
A.fr.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bk(a,b){A.kB(b,"count")
A.bb(b,"count")
return new A.fr(this.a,this.b+b,this.$ti)},
$iK:1}
A.mB.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.eo.prototype={
gt(a){return B.aQ},
gF(a){return!0},
gm(a){return 0},
gE(a){throw A.b(A.aF())},
gY(a){throw A.b(A.aF())},
gar(a){throw A.b(A.aF())},
a8(a,b){throw A.b(A.au(b,0,0,"index",null))},
G(a,b){return!1},
cG(a,b){return!0},
dB(a,b){return this},
cf(a,b,c){return new A.eo(c.i("eo<0>"))},
bk(a,b){A.bb(b,"count")
return this},
cN(a,b){A.bb(b,"count")
return this},
cO(a,b){var s=J.Bq(0,this.$ti.c)
return s},
fJ(a){return A.lM(this.$ti.c)}}
A.lh.prototype={
k(){return!1},
gn(){throw A.b(A.aF())}}
A.bI.prototype={
gt(a){return new A.ne(J.D(this.a),this.$ti.i("ne<1>"))}}
A.ne.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iq.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
u(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.n0.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
cl(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ak(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
aw(a,b,c,d){return this.ak(0,b,c,d,0)}}
A.hc.prototype={}
A.bV.prototype={
gm(a){return J.aj(this.a)},
a8(a,b){var s=this.a,r=J.L(s)
return r.a8(s,r.gm(s)-1-b)}}
A.jm.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
R(a,b){if(b==null)return!1
return b instanceof A.jm&&this.a===b.a}}
A.kd.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.jW.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.jX.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hz.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.o1.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.eZ.prototype={$r:"+(1,2,3)",$s:6}
A.f_.prototype={$r:"+(1,2,3,4)",$s:7}
A.o2.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.id.prototype={}
A.fn.prototype={
c7(a,b,c){var s=A.n(this)
return A.Do(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gU(a){return this.gm(this)!==0},
l(a){return A.tO(this)},
j(a,b,c){A.Hb()},
gac(){return new A.hE(this.wz(),A.n(this).i("hE<Q<1,2>>"))},
wz(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gac(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gL(),o=o.gt(o),n=A.n(s).i("Q<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.Q(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aL(a,b,c,d){var s=A.w(c,d)
this.a3(0,new A.q4(this,b,s))
return s},
$iF:1}
A.q4.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aX.prototype={
gm(a){return this.b.length},
gm8(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a3(a,b){var s,r,q=this.gm8(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gL(){return new A.eV(this.gm8(),this.$ti.i("eV<1>"))},
gaZ(){return new A.eV(this.b,this.$ti.i("eV<2>"))}}
A.eV.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gU(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hv(s,s.length,this.$ti.i("hv<1>"))}}
A.hv.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.is.prototype={
dP(){var s=this,r=s.$map
if(r==null){r=new A.iB(s.$ti.i("iB<1,2>"))
A.FC(s.a,r)
s.$map=r}return r},
I(a){return this.dP().I(a)},
h(a,b){return this.dP().h(0,b)},
a3(a,b){this.dP().a3(0,b)},
gL(){var s=this.dP()
return new A.T(s,A.n(s).i("T<1>"))},
gaZ(){var s=this.dP()
return new A.as(s,A.n(s).i("as<2>"))},
gm(a){return this.dP().a}}
A.ie.prototype={
u(a,b){A.Hc()}}
A.d1.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gU(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hv(s,s.length,r.$ti.i("hv<1>"))},
G(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.rP.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.iw&&this.a.R(0,b.a)&&A.Cp(this)===A.Cp(b)},
gJ(a){return A.c7(this.a,A.Cp(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bL(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iw.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.M4(A.oH(this.a),this.$ti)}}
A.uT.prototype={
$0(){return B.x.wN(1000*this.a.now())},
$S:10}
A.j9.prototype={}
A.wu.prototype={
bU(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.j_.prototype={
l(a){return"Null check operator used on a null value"}}
A.lD.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.n_.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.m2.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iH:1}
A.il.prototype={}
A.jZ.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaH:1}
A.ei.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.G_(r==null?"unknown":r)+"'"},
gam(a){var s=A.oH(this)
return A.bL(s==null?A.bz(this):s)},
gzG(){return this},
$C:"$1",
$R:1,
$D:null}
A.pr.prototype={$C:"$0",$R:0}
A.ps.prototype={$C:"$2",$R:2}
A.wk.prototype={}
A.vV.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.G_(s)+"'"}}
A.i7.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.i7))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kn(this.a)^A.eC(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.md(this.a)+"'")}}
A.mu.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bE.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gU(a){return this.a!==0},
gL(){return new A.T(this,A.n(this).i("T<1>"))},
gaZ(){return new A.as(this,A.n(this).i("as<2>"))},
gac(){return new A.aN(this,A.n(this).i("aN<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nn(a)},
nn(a){var s=this.d
if(s==null)return!1
return this.dl(this.m2(s,a),a)>=0},
C(a,b){b.a3(0,new A.rW(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.no(b)},
no(a){var s,r,q=this.d
if(q==null)return null
s=this.m2(q,a)
r=this.dl(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.lu(s==null?q.b=q.jP():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.lu(r==null?q.c=q.jP():r,b,c)}else q.nq(b,c)},
nq(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jP()
s=p.eh(a)
r=o[s]
if(r==null)o[s]=[p.jd(a,b)]
else{q=p.dl(r,a)
if(q>=0)r[q].b=b
else r.push(p.jd(a,b))}},
kS(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.mt(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.mt(s.c,b)
else return s.np(b)},
np(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eh(a)
r=n[s]
q=o.dl(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mL(p)
if(r.length===0)delete n[s]
return p.b},
ab(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.jc()}},
a3(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aB(s))
r=r.c}},
lu(a,b,c){var s=a[b]
if(s==null)a[b]=this.jd(b,c)
else s.b=c},
mt(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mL(s)
delete a[b]
return s.b},
jc(){this.r=this.r+1&1073741823},
jd(a,b){var s,r=this,q=new A.tx(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.jc()
return q},
mL(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.jc()},
eh(a){return J.a8(a)&1073741823},
m2(a,b){return a[this.eh(b)]},
dl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1},
l(a){return A.tO(this)},
jP(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.rW.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.tx.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bF(s,s.r,s.e,this.$ti.i("bF<1>"))},
G(a,b){return this.a.I(b)}}
A.bF.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aB(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.as.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aT(s,s.r,s.e,this.$ti.i("aT<1>"))}}
A.aT.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aB(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aN.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.lL(s,s.r,s.e,this.$ti.i("lL<1,2>"))}}
A.lL.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aB(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.Q(s.a,s.b,r.$ti.i("Q<1,2>"))
r.c=s.c
return!0}}}
A.iC.prototype={
eh(a){return A.kn(a)&1073741823},
dl(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iB.prototype={
eh(a){return A.LB(a)&1073741823},
dl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.AH.prototype={
$1(a){return this.a(a)},
$S:37}
A.AI.prototype={
$2(a,b){return this.a(a,b)},
$S:184}
A.AJ.prototype={
$1(a){return this.a(a)},
$S:45}
A.eY.prototype={
gam(a){return A.bL(this.m3())},
m3(){return A.LP(this.$r,this.h7())},
l(a){return this.mJ(!1)},
mJ(a){var s,r,q,p,o,n=this.qp(),m=this.h7(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Dz(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qp(){var s,r=this.$s
while($.z4.length<=r)$.z4.push(null)
s=$.z4[r]
if(s==null){s=this.pS()
$.z4[r]=s}return s},
pS(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Dg(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.cJ(j,k)}}
A.nZ.prototype={
h7(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.nZ&&this.$s===b.$s&&J.v(this.a,b.a)&&J.v(this.b,b.b)},
gJ(a){return A.c7(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.o_.prototype={
h7(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.o_&&s.$s===b.$s&&J.v(s.a,b.a)&&J.v(s.b,b.b)&&J.v(s.c,b.c)},
gJ(a){var s=this
return A.c7(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.o0.prototype={
h7(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.o0&&this.$s===b.$s&&A.Jw(this.a,b.a)},
gJ(a){return A.c7(this.$s,A.ue(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.et.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gme(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Bs(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gtp(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Bs(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pT(){var s,r=this.a
if(!B.a.G(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ee(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hy(s)},
ke(a,b,c){var s=b.length
if(c>s)throw A.b(A.au(c,0,s,null,null))
return new A.nq(this,b,c)},
i4(a,b){return this.ke(0,b,0)},
qm(a,b){var s,r=this.gme()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hy(s)},
ql(a,b){var s,r=this.gtp()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hy(s)},
em(a,b,c){if(c<0||c>b.length)throw A.b(A.au(c,0,b.length,null,null))
return this.ql(b,c)}}
A.hy.prototype={
gP(){return this.b.index},
gO(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$iex:1,
$imn:1}
A.nq.prototype={
gt(a){return new A.nr(this.a,this.b,this.c)}}
A.nr.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.qm(l,s)
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
A.h5.prototype={
gO(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.vx(b,null))
return this.c},
$iex:1,
gP(){return this.a}}
A.oe.prototype={
gt(a){return new A.zp(this.a,this.b,this.c)},
gE(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h5(r,s)
throw A.b(A.aF())}}
A.zp.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.h5(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.nz.prototype={
bb(){var s=this.b
if(s===this)throw A.b(new A.dF("Local '"+this.a+"' has not been initialized."))
return s},
bw(){var s=this.b
if(s===this)throw A.b(A.Dn(this.a))
return s},
sng(a){var s=this
if(s.b!==s)throw A.b(new A.dF("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fG.prototype={
gam(a){return B.ds},
i6(a,b,c){A.hM(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mV(a){return this.i6(a,0,null)},
mU(a,b,c){A.hM(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
i5(a,b,c){A.hM(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mT(a){return this.i5(a,0,null)},
$iak:1,
$iee:1}
A.fF.prototype={$ifF:1}
A.iV.prototype={
gaa(a){if(((a.$flags|0)&2)!==0)return new A.om(a.buffer)
else return a.buffer},
tc(a,b,c,d){var s=A.au(b,0,c,d,null)
throw A.b(s)},
lF(a,b,c,d){if(b>>>0!==b||b>c)this.tc(a,b,c,d)}}
A.om.prototype={
i6(a,b,c){var s=A.bT(this.a,b,c)
s.$flags=3
return s},
mV(a){return this.i6(0,0,null)},
mU(a,b,c){var s=A.Ds(this.a,b,c)
s.$flags=3
return s},
i5(a,b,c){var s=A.Dr(this.a,b,c)
s.$flags=3
return s},
mT(a){return this.i5(0,0,null)},
$iee:1}
A.iU.prototype={
gam(a){return B.dt},
$iak:1,
$iBb:1}
A.fH.prototype={
gm(a){return a.length},
mA(a,b,c,d,e){var s,r,q=a.length
this.lF(a,b,q,"start")
this.lF(a,c,q,"end")
if(b>c)throw A.b(A.au(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.O(e,null))
r=d.length
if(r-e<s)throw A.b(A.x("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ib9:1,
$ibR:1}
A.dN.prototype={
h(a,b){A.dp(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
A.dp(b,a,a.length)
a[b]=c},
ak(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.dQ.b(d)){this.mA(a,b,c,d,e)
return}this.lr(a,b,c,d,e)},
aw(a,b,c,d){return this.ak(a,b,c,d,0)},
$iK:1,
$io:1,
$ip:1}
A.bS.prototype={
j(a,b,c){a.$flags&2&&A.I(a)
A.dp(b,a,a.length)
a[b]=c},
ak(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.aj.b(d)){this.mA(a,b,c,d,e)
return}this.lr(a,b,c,d,e)},
aw(a,b,c,d){return this.ak(a,b,c,d,0)},
$iK:1,
$io:1,
$ip:1}
A.lW.prototype={
gam(a){return B.du},
T(a,b,c){return new Float32Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$ira:1}
A.lX.prototype={
gam(a){return B.dv},
T(a,b,c){return new Float64Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$irb:1}
A.lY.prototype={
gam(a){return B.dw},
h(a,b){A.dp(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$irQ:1}
A.lZ.prototype={
gam(a){return B.dx},
h(a,b){A.dp(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$irR:1}
A.m_.prototype={
gam(a){return B.dy},
h(a,b){A.dp(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$irS:1}
A.iW.prototype={
gam(a){return B.dC},
h(a,b){A.dp(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$iwx:1}
A.iX.prototype={
gam(a){return B.dD},
h(a,b){A.dp(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$iwy:1}
A.iY.prototype={
gam(a){return B.dE},
gm(a){return a.length},
h(a,b){A.dp(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$iwz:1}
A.ey.prototype={
gam(a){return B.dF},
gm(a){return a.length},
h(a,b){A.dp(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dq(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iak:1,
$iey:1,
$icS:1}
A.jS.prototype={}
A.jT.prototype={}
A.jU.prototype={}
A.jV.prototype={}
A.cq.prototype={
i(a){return A.k7(v.typeUniverse,this,a)},
V(a){return A.Eo(v.typeUniverse,this,a)}}
A.nM.prototype={}
A.oj.prototype={
l(a){return A.bx(this.a,null)}}
A.nJ.prototype={
l(a){return this.a}}
A.k3.prototype={$idg:1}
A.xs.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:24}
A.xr.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:179}
A.xt.prototype={
$0(){this.a.$0()},
$S:3}
A.xu.prototype={
$0(){this.a.$0()},
$S:3}
A.k2.prototype={
ph(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e7(new A.zs(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
pi(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e7(new A.zr(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
D(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idf:1}
A.zs.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.zr.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.ja(s,o)}q.c=p
r.d.$1(q)},
$S:3}
A.jw.prototype={
aD(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aO(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.lE(a)
else s.cW(a)}},
bB(a,b){var s
if(b==null)b=A.i4(a)
s=this.a
if(this.b)s.ao(new A.am(a,b))
else s.cn(new A.am(a,b))},
aK(a){return this.bB(a,null)},
$iib:1}
A.zU.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.zV.prototype={
$2(a,b){this.a.$2(1,new A.il(a,b))},
$S:190}
A.Ac.prototype={
$2(a,b){this.a(a,b)},
$S:87}
A.zS.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.A()
s=q.b
if((s&1)!==0?(q.gaQ().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.zT.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:24}
A.nt.prototype={
pd(a,b){var s=new A.xw(a)
this.a=A.vX(new A.xy(this,a),new A.xz(s),new A.xA(this,s),!1,b)}}
A.xw.prototype={
$0(){A.kq(new A.xx(this.a))},
$S:3}
A.xx.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.xz.prototype={
$0(){this.a.$0()},
$S:0}
A.xA.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.xy.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.A()
if((r.b&4)===0){s.c=new A.t($.C,t._)
if(s.b){s.b=!1
A.kq(new A.xv(this.b))}return s.c}},
$S:139}
A.xv.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jO.prototype={
l(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.og.prototype={
gn(){return this.b},
ur(a,b){var s,r,q
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
o.d=null}q=o.ur(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Ei
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Ei
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.x("sync*"))}return!1},
zH(a){var s,r,q=this
if(a instanceof A.hE){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.D(a)
return 2}}}
A.hE.prototype={
gt(a){return new A.og(this.a(),this.$ti.i("og<1>"))}}
A.am.prototype={
l(a){return A.q(this.a)},
$iaf:1,
gcm(){return this.b}}
A.b1.prototype={}
A.eP.prototype={
bK(){},
bL(){}}
A.jC.prototype={
gcT(){return new A.b1(this,A.n(this).i("b1<1>"))},
giC(){return(this.c&4)!==0},
gjN(){return this.c<4},
un(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
k6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.E9(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.nx(r,a,s.c)
n=A.xH(r,b)
m=c==null?A.Ad():c
l=new A.eP(j,o,n,r.bX(m,t.H),r,q|p,s.i("eP<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.oD(j.a)
return l},
mm(a){var s,r=this
A.n(r).i("eP<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.un(a)
if((r.c&2)===0&&r.d==null)r.pF()}return null},
mn(a){},
mo(a){},
jf(){if((this.c&4)!==0)return new A.bi("Cannot add new events after calling close")
return new A.bi("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjN())throw A.b(this.jf())
this.cw(b)},
bz(a,b){var s
if(!this.gjN())throw A.b(this.jf())
s=A.f3(a,b)
this.cz(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjN())throw A.b(q.jf())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.t($.C,t.D)
q.d9()
return r},
aI(a,b){this.cz(a,b)},
aU(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aO(null)},
pF(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aO(null)}A.oD(this.b)},
$ibD:1}
A.jx.prototype={
cw(a){var s,r
for(s=this.d,r=this.$ti.i("cc<1>");s!=null;s=s.ch)s.c_(new A.cc(a,r))},
cz(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.c_(new A.hq(a,b))},
d9(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.c_(B.aa)
else this.r.aO(null)}}
A.rk.prototype={
$0(){this.c.a(null)
this.b.co(null)},
$S:0}
A.rm.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.ao(new A.am(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.ao(new A.am(q,r))}},
$S:13}
A.rl.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.c_(j,m.b,a)
if(J.v(k,0)){l=m.d
s=A.l([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aL(s,n)}m.c.cW(s)}}else if(J.v(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ao(new A.am(s,l))}},
$S(){return this.d.i("W(0)")}}
A.rf.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aH)")}}
A.mQ.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iH:1}
A.rg.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("B<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aD(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("B<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.r)(r),++p)n.push(r[p].b)
l.a.aK(new A.j1(B.b.nh(s,A.Le()),a,q.i("j1<p<0?>,p<am?>>")))}},
$S:8}
A.j1.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.q(p.a)},
gcm(){var s=this.c
s=s==null?null:s.b
return s==null?A.af.prototype.gcm.call(this):s}}
A.jM.prototype={
v5(a){this.a.bC(new A.yr(this,a),new A.ys(this,a),t.P)}}
A.yr.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.ys.prototype={
$2(a,b){this.a.c=new A.am(a,b)
this.b.$1(1)},
$S:11}
A.yq.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eQ.prototype={
bB(a,b){if((this.a.a&30)!==0)throw A.b(A.x("Future already completed"))
this.ao(A.f3(a,b))},
aK(a){return this.bB(a,null)},
$iib:1}
A.az.prototype={
aD(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.aO(a)},
ai(){return this.aD(null)},
ao(a){this.a.cn(a)}}
A.ao.prototype={
aD(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.co(a)},
ai(){return this.aD(null)},
ao(a){this.a.ao(a)}}
A.cd.prototype={
xI(a){if((this.c&15)!==6)return!0
return this.b.b.ew(this.d,a.a,t.y,t.K)},
x0(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.l_(r,n,a.b,p,o,t.l)
else q=m.ew(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.E(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.t.prototype={
bC(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aA(b,"onError",u.w))}else{a=q.ds(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.F_(b,q)}s=new A.t($.C,c.i("t<0>"))
r=b==null?1:3
this.dK(new A.cd(s,r,a,b,this.$ti.i("@<1>").V(c).i("cd<1,2>")))
return s},
an(a,b){return this.bC(a,null,b)},
mH(a,b,c){var s=new A.t($.C,c.i("t<0>"))
this.dK(new A.cd(s,19,a,b,this.$ti.i("@<1>").V(c).i("cd<1,2>")))
return s},
mZ(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=A.F_(a,r)
this.dK(new A.cd(q,2,null,a,s.i("cd<1,1>")))
return q},
b_(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=r.bX(a,t.z)
this.dK(new A.cd(q,8,a,null,s.i("cd<1,1>")))
return q},
uH(a){this.a=this.a&1|16
this.c=a},
h_(a){this.a=a.a&30|this.a&1
this.c=a.c},
dK(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dK(a)
return}s.h_(r)}s.b.cQ(new A.yt(s,a))}},
mj(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.mj(a)
return}n.h_(s)}m.a=n.hO(a)
n.b.cQ(new A.yy(m,n))}},
eY(){var s=this.c
this.c=null
return this.hO(s)},
hO(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
co(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.yw(a,r,!0)
else{s=r.eY()
r.a=8
r.c=a
A.eT(r,s)}},
cW(a){var s=this,r=s.eY()
s.a=8
s.c=a
A.eT(s,r)},
pR(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gc9()===r.gc9())}else s=!1
if(s)return
q=p.eY()
p.h_(a)
A.eT(p,q)},
ao(a){var s=this.eY()
this.uH(a)
A.eT(this,s)},
pQ(a,b){this.ao(new A.am(a,b))},
aO(a){if(this.$ti.i("y<1>").b(a)){this.lE(a)
return}this.lB(a)},
lB(a){this.a^=2
this.b.cQ(new A.yv(this,a))},
lE(a){A.yw(a,this,!1)
return},
cn(a){this.a^=2
this.b.cQ(new A.yu(this,a))},
iT(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.t($.C,r.$ti)
q.aO(r)
return q}s=new A.t($.C,r.$ti)
q.a=null
q.a=A.cR(a,new A.yE(s,a))
r.bC(new A.yF(q,r,s),new A.yG(q,s),t.P)
return s},
$iy:1}
A.yt.prototype={
$0(){A.eT(this.a,this.b)},
$S:0}
A.yy.prototype={
$0(){A.eT(this.b,this.a.a)},
$S:0}
A.yx.prototype={
$0(){A.yw(this.a.a,this.b,!0)},
$S:0}
A.yv.prototype={
$0(){this.a.cW(this.b)},
$S:0}
A.yu.prototype={
$0(){this.a.ao(this.b)},
$S:0}
A.yB.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aX(q.d,t.z)}catch(p){s=A.E(p)
r=A.ae(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.i4(q)
n=k.a
n.c=new A.am(q,o)
q=n}q.b=!0
return}if(j instanceof A.t&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.t){m=k.b.a
l=new A.t(m.b,m.$ti)
j.bC(new A.yC(l,m),new A.yD(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.yC.prototype={
$1(a){this.a.pR(this.b)},
$S:24}
A.yD.prototype={
$2(a,b){this.a.ao(new A.am(a,b))},
$S:11}
A.yA.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.ew(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.E(n)
r=A.ae(n)
q=s
p=r
if(p==null)p=A.i4(q)
o=this.a
o.c=new A.am(q,p)
o.b=!0}},
$S:0}
A.yz.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.xI(s)&&p.a.e!=null){p.c=p.a.x0(s)
p.b=!1}}catch(o){r=A.E(o)
q=A.ae(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.i4(p)
m=l.b
m.c=new A.am(p,n)
p=m}p.b=!0}},
$S:0}
A.yE.prototype={
$0(){var s=A.BL()
this.a.ao(new A.am(new A.mQ("Future not completed",this.b),s))},
$S:0}
A.yF.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.D()
this.c.cW(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.yG.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.D()
this.b.ao(new A.am(a,b))}},
$S:11}
A.ns.prototype={}
A.ab.prototype={
ei(a){var s=new A.t($.C,t.os),r=new A.a1(""),q=this.a9(null,!0,new A.w_(s,r),s.gjm())
q.iH(new A.w0(this,r,q,s))
return s},
gm(a){var s={},r=new A.t($.C,t.hy)
s.a=0
this.a9(new A.w1(s,this),!0,new A.w2(s,r),r.gjm())
return r},
gE(a){var s=new A.t($.C,A.n(this).i("t<ab.T>")),r=this.a9(null,!0,new A.vY(s),s.gjm())
r.iH(new A.vZ(this,r,s))
return s}}
A.w_.prototype={
$0(){var s=this.b.a
this.a.co(s.charCodeAt(0)==0?s:s)},
$S:0}
A.w0.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.q(a)
q.a+=p}catch(o){s=A.E(o)
r=A.ae(o)
q=s
p=r
n=A.ke(q,p)
if(n==null)q=new A.am(q,p)
else q=n
A.K1(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(ab.T)")}}
A.w1.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(ab.T)")}}
A.w2.prototype={
$0(){this.b.co(this.a.a)},
$S:0}
A.vY.prototype={
$0(){var s,r=A.BL(),q=new A.bi("No element")
A.mf(q,r)
s=A.ke(q,r)
if(s==null)s=new A.am(q,r)
this.a.ao(s)},
$S:0}
A.vZ.prototype={
$1(a){A.K2(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(ab.T)")}}
A.jj.prototype={
a9(a,b,c,d){return this.a.a9(a,b,c,d)},
bT(a,b,c){return this.a9(a,null,b,c)},
aV(a){return this.a9(a,null,null,null)}}
A.e2.prototype={
gcT(){return new A.b7(this,A.n(this).i("b7<1>"))},
giC(){return(this.b&4)!==0},
gtO(){if((this.b&8)===0)return this.a
return this.a.c},
h3(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e1(A.n(q).i("e1<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e1(A.n(q).i("e1<1>")):s},
gaQ(){var s=this.a
return(this.b&8)!==0?s.c:s},
bI(){if((this.b&4)!==0)return new A.bi("Cannot add event after closing")
return new A.bi("Cannot add event while adding a stream")},
vn(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bI())
if((o&2)!==0){o=new A.t($.C,t._)
o.aO(null)
return o}o=p.a
s=b===!0
r=new A.t($.C,t._)
q=s?A.IU(p):p.gpm()
q=a.a9(p.gpr(),s,p.gpH(),q)
s=p.b
if((s&1)!==0?(p.gaQ().e&4)!==0:(s&2)===0)q.bs()
p.a=new A.k_(o,r,q,A.n(p).i("k_<1>"))
p.b|=8
return r},
lW(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.ea():new A.t($.C,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bI())
this.aC(b)},
bz(a,b){var s
if(this.b>=4)throw A.b(this.bI())
s=A.f3(a,b)
this.aI(s.a,s.b)},
vm(a){return this.bz(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.lW()
if(r>=4)throw A.b(s.bI())
s.lG()
return s.lW()},
lG(){var s=this.b|=4
if((s&1)!==0)this.d9()
else if((s&3)===0)this.h3().u(0,B.aa)},
aC(a){var s=this,r=s.b
if((r&1)!==0)s.cw(a)
else if((r&3)===0)s.h3().u(0,new A.cc(a,A.n(s).i("cc<1>")))},
aI(a,b){var s=this.b
if((s&1)!==0)this.cz(a,b)
else if((s&3)===0)this.h3().u(0,new A.hq(a,b))},
aU(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aO(null)},
k6(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.x("Stream has already been listened to."))
s=A.Jb(p,a,b,c,d,A.n(p).c)
r=p.gtO()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.bf()}else p.a=s
s.uI(r)
s.ju(new A.zl(p))
return s},
mm(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.D()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.t)k=r}catch(o){q=A.E(o)
p=A.ae(o)
n=new A.t($.C,t.D)
n.cn(new A.am(q,p))
k=n}else k=k.b_(s)
m=new A.zk(l)
if(k!=null)k=k.b_(m)
else m.$0()
return k},
mn(a){if((this.b&8)!==0)this.a.b.bs()
A.oD(this.e)},
mo(a){if((this.b&8)!==0)this.a.b.bf()
A.oD(this.f)},
$ibD:1}
A.zl.prototype={
$0(){A.oD(this.a.d)},
$S:0}
A.zk.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aO(null)},
$S:0}
A.oh.prototype={
cw(a){this.gaQ().aC(a)},
cz(a,b){this.gaQ().aI(a,b)},
d9(){this.gaQ().aU()}}
A.jy.prototype={
cw(a){this.gaQ().c_(new A.cc(a,A.n(this).i("cc<1>")))},
cz(a,b){this.gaQ().c_(new A.hq(a,b))},
d9(){this.gaQ().c_(B.aa)}}
A.cX.prototype={}
A.hF.prototype={}
A.b7.prototype={
gJ(a){return(A.eC(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b7&&b.a===this.a}}
A.dY.prototype={
hH(){return this.w.mm(this)},
bK(){this.w.mn(this)},
bL(){this.w.mo(this)}}
A.np.prototype={
D(){var s=this.b.D()
return s.b_(new A.xn(this))}}
A.xo.prototype={
$2(a,b){var s=this.a
s.aI(a,b)
s.aU()},
$S:11}
A.xn.prototype={
$0(){this.a.a.aO(null)},
$S:3}
A.k_.prototype={}
A.b2.prototype={
uI(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fR(s)}},
iH(a){this.a=A.nx(this.d,a,A.n(this).i("b2.T"))},
bs(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.ju(q.geO())},
bf(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fR(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.ju(s.geP())}}},
D(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.ji()
r=s.f
return r==null?$.ea():r},
ji(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hH()},
aC(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cw(a)
else s.c_(new A.cc(a,A.n(s).i("cc<b2.T>")))},
aI(a,b){var s
if(t.C.b(a))A.mf(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cz(a,b)
else this.c_(new A.hq(a,b))},
aU(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d9()
else s.c_(B.aa)},
bK(){},
bL(){},
hH(){return null},
c_(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e1(A.n(r).i("e1<b2.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fR(r)}},
cw(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fI(s.a,a,A.n(s).i("b2.T"))
s.e=(s.e&4294967231)>>>0
s.jk((r&4)!==0)},
cz(a,b){var s,r=this,q=r.e,p=new A.xJ(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.ji()
s=r.f
if(s!=null&&s!==$.ea())s.b_(p)
else p.$0()}else{p.$0()
r.jk((q&4)!==0)}},
d9(){var s,r=this,q=new A.xI(r)
r.ji()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.ea())s.b_(q)
else q.$0()},
ju(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.jk((r&4)!==0)},
jk(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bK()
else q.bL()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fR(q)},
$ibj:1}
A.xJ.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nI(s,o,this.c,r,t.l)
else q.fI(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.xI.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fH(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hD.prototype={
a9(a,b,c,d){return this.a.k6(a,d,c,b===!0)},
bT(a,b,c){return this.a9(a,null,b,c)},
aV(a){return this.a9(a,null,null,null)},
xy(a,b){return this.a9(a,null,null,b)}}
A.nI.prototype={
gen(){return this.a},
sen(a){return this.a=a}}
A.cc.prototype={
kR(a){a.cw(this.b)}}
A.hq.prototype={
kR(a){a.cz(this.b,this.c)}}
A.yj.prototype={
kR(a){a.d9()},
gen(){return null},
sen(a){throw A.b(A.x("No events after a done."))}}
A.e1.prototype={
fR(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kq(new A.z3(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sen(b)
s.c=b}}}
A.z3.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gen()
q.b=r
if(r==null)q.c=null
s.kR(this.b)},
$S:0}
A.hr.prototype={
iH(a){},
bs(){var s=this.a
if(s>=0)this.a=s+2},
bf(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kq(s.gmg())}else s.a=r},
D(){this.a=-1
this.c=null
return $.ea()},
tD(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fH(s)}}else r.a=q},
$ibj:1}
A.cf.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.t($.C,t.g5)
r.b=s
r.c=!1
q.bf()
return s}throw A.b(A.x("Already waiting for next."))}return r.tb()},
tb(){var s,r,q=this,p=q.b
if(p!=null){s=new A.t($.C,t.g5)
q.b=s
r=p.a9(q.gtv(),!0,q.gtx(),q.gtz())
if(q.b!=null)q.a=r
return s}return $.G5()},
D(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aO(!1)
else s.c=!1
return r.D()}return $.ea()},
tw(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.co(!0)
if(q.c){r=q.a
if(r!=null)r.bs()}},
tA(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ao(new A.am(a,b))
else q.cn(new A.am(a,b))},
ty(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cW(!1)
else q.lB(!1)}}
A.jH.prototype={
a9(a,b,c,d){return A.E9(c,this.$ti.c)},
bT(a,b,c){return this.a9(a,null,b,c)}}
A.dm.prototype={
a9(a,b,c,d){var s=null,r=new A.jR(s,s,s,s,this.$ti.i("jR<1>"))
r.d=new A.z1(this,r)
return r.k6(a,d,c,b===!0)},
bT(a,b,c){return this.a9(a,null,b,c)},
aV(a){return this.a9(a,null,null,null)}}
A.z1.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jR.prototype={
vo(a){var s=this.b
if(s>=4)throw A.b(this.bI())
if((s&1)!==0)this.gaQ().aC(a)},
vE(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bI())
r|=4
s.b=r
if((r&1)!==0)s.gaQ().aU()},
gcT(){throw A.b(A.Y("Not available"))},
$idL:1}
A.zX.prototype={
$0(){return this.a.ao(this.b)},
$S:0}
A.zY.prototype={
$0(){return this.a.co(this.b)},
$S:0}
A.jK.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nx(r,a,s.y[1]),n=A.xH(r,d),m=c==null?A.Ad():c
s=new A.hu(this,o,n,r.bX(m,t.H),r,q|p,s.i("hu<1,2>"))
s.x=this.a.bT(s.gjy(),s.gjA(),s.gjC())
return s},
bT(a,b,c){return this.a9(a,null,b,c)}}
A.hu.prototype={
aC(a){if((this.e&2)!==0)return
this.j9(a)},
aI(a,b){if((this.e&2)!==0)return
this.ls(a,b)},
bK(){var s=this.x
if(s!=null)s.bs()},
bL(){var s=this.x
if(s!=null)s.bf()},
hH(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
jz(a){this.w.qU(a,this)},
jD(a,b){this.aI(a,b)},
jB(){this.aU()}}
A.eW.prototype={
qU(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.E(q)
r=A.ae(q)
p=s
o=r
n=A.ke(p,o)
if(n!=null){p=n.a
o=n.b}b.aI(p,o)
return}b.aC(m)}}
A.jI.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.u(A.x("Stream is already closed"))
s.j9(b)},
bz(a,b){this.a.aI(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.u(A.x("Stream is already closed"))
s.lt()},
$ibD:1}
A.hB.prototype={
aC(a){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.j9(a)},
aI(a,b){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.ls(a,b)},
aU(){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.lt()},
bK(){var s=this.x
if(s!=null)s.bs()},
bL(){var s=this.x
if(s!=null)s.bf()},
hH(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
jz(a){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.u(0,a)}catch(p){s=A.E(p)
r=A.ae(p)
this.aI(s,r)}},
jD(a,b){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.bz(a,b)}catch(p){s=A.E(p)
r=A.ae(p)
if(s===a)this.aI(a,b)
else this.aI(s,r)}},
jB(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.A()
q.p()}catch(p){s=A.E(p)
r=A.ae(p)
this.aI(s,r)}}}
A.jB.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nx(r,a,s.y[1]),n=A.xH(r,d),m=c==null?A.Ad():c,l=new A.hB(o,n,r.bX(m,t.H),r,q|p,s.i("hB<1,2>"))
l.w=this.a.$1(new A.jI(l,s.i("jI<2>")))
l.x=this.b.bT(l.gjy(),l.gjA(),l.gjC())
return l},
bT(a,b,c){return this.a9(a,null,b,c)}}
A.zP.prototype={}
A.zR.prototype={}
A.zQ.prototype={}
A.zN.prototype={}
A.zO.prototype={}
A.zM.prototype={}
A.zJ.prototype={}
A.ow.prototype={}
A.zI.prototype={}
A.zH.prototype={}
A.zL.prototype={}
A.zK.prototype={}
A.ov.prototype={
wT(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.ox.prototype={}
A.ou.prototype={
eU(a,b,c){var s,r,q,p,o,n,m=this.gjK(),l=m.a
if(l===B.i){A.kj(b,c)
return}o=l.gkN()
o.toString
s=o
r=$.C
try{$.C=s
m.wT(l,l.gb8(),a,b,c)
$.C=r}catch(n){q=A.E(n)
p=A.ae(n)
$.C=r
o=b===q?c:p
s.eU(l,q,o)}},
$iP:1}
A.nC.prototype={
glT(){var s=this.ax
return s==null?this.ax=new A.hK(this):s},
gb8(){return this.ay.glT()},
gc9(){return this.as.a},
fH(a){var s,r,q
try{this.aX(a,t.H)}catch(q){s=A.E(q)
r=A.ae(q)
this.eU(this,s,r)}},
fI(a,b,c){var s,r,q
try{this.ew(a,b,t.H,c)}catch(q){s=A.E(q)
r=A.ae(q)
this.eU(this,s,r)}},
nI(a,b,c,d,e){var s,r,q
try{this.l_(a,b,c,t.H,d,e)}catch(q){s=A.E(q)
r=A.ae(q)
this.eU(this,s,r)}},
kh(a,b){return new A.yf(this,this.bX(a,b),b)},
vA(a,b,c){return new A.yh(this,this.ds(a,b,c),c,b)},
f4(a){return new A.ye(this,this.bX(a,t.H))},
i8(a,b){return new A.yg(this,this.ds(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aM)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.uk(q,b)},
uk(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkN().gkd()
if(s===B.aM)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fj(a,b){this.eU(this,a,b)},
ni(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
aX(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
ew(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb8(),this,a,b,c,d)},
l_(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb8(),this,a,b,c,d,e,f)},
bX(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
ds(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb8(),this,a,b,c)},
fC(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb8(),this,a,b,c,d)},
nd(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb8(),this,a,b)},
cQ(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb8(),this,a)},
km(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
kl(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
gmv(){return this.a},
gmx(){return this.b},
gmw(){return this.c},
gmr(){return this.d},
gms(){return this.e},
gmq(){return this.f},
glY(){return this.r},
gk_(){return this.w},
glR(){return this.x},
glQ(){return this.y},
gmk(){return this.z},
gm0(){return this.Q},
gjK(){return this.as},
gkd(){return this.at},
gkN(){return this.ay}}
A.yf.prototype={
$0(){return this.a.aX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.yh.prototype={
$1(a){var s=this
return s.a.ew(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").V(this.c).i("1(2)")}}
A.ye.prototype={
$0(){return this.a.fH(this.b)},
$S:0}
A.yg.prototype={
$1(a){return this.a.fI(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.o5.prototype={
gmv(){return B.dV},
gmx(){return B.dU},
gmw(){return B.dT},
gmr(){return B.dR},
gms(){return B.dS},
gmq(){return B.dQ},
glY(){return B.dM},
gk_(){return B.dW},
glR(){return B.dL},
glQ(){return B.dK},
gmk(){return B.dP},
gm0(){return B.dN},
gjK(){return B.dO},
gkd(){return B.aM},
gkN(){return null},
glT(){var s=$.z8
return s==null?$.z8=new A.hK(this):s},
gb8(){var s=$.z8
return s==null?$.z8=new A.hK(this):s},
gc9(){return this},
fH(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.A8(null,null,this,a)}catch(q){s=A.E(q)
r=A.ae(q)
A.kj(s,r)}},
fI(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.A9(null,null,this,a,b)}catch(q){s=A.E(q)
r=A.ae(q)
A.kj(s,r)}},
nI(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.Cg(null,null,this,a,b,c)}catch(q){s=A.E(q)
r=A.ae(q)
A.kj(s,r)}},
kh(a,b){return new A.za(this,a,b)},
f4(a){return new A.z9(this,a)},
i8(a,b){return new A.zb(this,a,b)},
h(a,b){return null},
fj(a,b){A.kj(a,b)},
ni(a,b){return A.F1(null,null,this,a,b)},
aX(a){if($.C===B.i)return a.$0()
return A.A8(null,null,this,a)},
ew(a,b){if($.C===B.i)return a.$1(b)
return A.A9(null,null,this,a,b)},
l_(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.Cg(null,null,this,a,b,c)},
bX(a){return a},
ds(a){return a},
fC(a){return a},
nd(a,b){return null},
cQ(a){A.Aa(null,null,this,a)},
km(a,b){return A.BR(a,b)},
kl(a,b){return A.DM(a,b)}}
A.za.prototype={
$0(){return this.a.aX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.z9.prototype={
$0(){return this.a.fH(this.b)},
$S:0}
A.zb.prototype={
$1(a){return this.a.fI(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hK.prototype={$iaw:1}
A.A7.prototype={
$0(){A.D3(this.a,this.b)},
$S:0}
A.jv.prototype={}
A.dk.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gU(a){return this.a!==0},
gL(){return new A.eU(this,A.n(this).i("eU<1>"))},
gaZ(){var s=A.n(this)
return A.dJ(new A.eU(this,s.i("eU<1>")),new A.yI(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lM(a)},
lM(a){var s=this.d
if(s==null)return!1
return this.c3(this.lI(s,a),a)>=0},
C(a,b){b.a3(0,new A.yH(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Eb(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Eb(q,b)
return r}else return this.m1(b)},
m1(a){var s,r,q=this.d
if(q==null)return null
s=this.lI(q,a)
r=this.c3(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.ly(s==null?q.b=A.C1():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.ly(r==null?q.c=A.C1():r,b,c)}else q.mz(b,c)},
mz(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.C1()
s=p.cp(a)
r=o[s]
if(r==null){A.C2(o,s,[a,b]);++p.a
p.e=null}else{q=p.c3(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a3(a,b){var s,r,q,p,o,n=this,m=n.lH()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aB(n))}},
lH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.ag(i.a,null,!1,t.z)
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
this.e=null}A.C2(a,b,c)},
cp(a){return J.a8(a)&1073741823},
lI(a,b){return a[this.cp(b)]},
c3(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.v(a[r],b))return r
return-1}}
A.yI.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.yH.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.dZ.prototype={
cp(a){return A.kn(a)&1073741823},
c3(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jE.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.oY(b)},
j(a,b,c){this.oZ(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.oX(a)},
cp(a){return this.r.$1(a)&1073741823},
c3(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.yd.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.eU.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gU(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.nN(s,s.lH(),this.$ti.i("nN<1>"))},
G(a,b){return this.a.I(b)}}
A.nN.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aB(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.jP.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.oR(b)},
j(a,b,c){this.oT(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.oQ(a)},
H(a,b){if(!this.y.$1(b))return null
return this.oS(b)},
eh(a){return this.x.$1(a)&1073741823},
dl(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.z_.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.dl.prototype={
gt(a){var s=this,r=new A.e0(s,s.r,A.n(s).i("e0<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gF(a){return this.a===0},
gU(a){return this.a!==0},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.pW(b)},
pW(a){var s=this.d
if(s==null)return!1
return this.c3(s[this.cp(a)],a)>=0},
gE(a){var s=this.e
if(s==null)throw A.b(A.x("No elements"))
return s.a},
gY(a){var s=this.f
if(s==null)throw A.b(A.x("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.lx(s==null?q.b=A.C3():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.lx(r==null?q.c=A.C3():r,b)}else return q.pk(b)},
pk(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.C3()
s=q.cp(a)
r=p[s]
if(r==null)p[s]=[q.jQ(a)]
else{if(q.c3(r,a)>=0)return!1
r.push(q.jQ(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lJ(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lJ(s.c,b)
else return s.jX(b)},
jX(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cp(a)
r=n[s]
q=o.c3(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lK(p)
return!0},
ab(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.jO()}},
lx(a,b){if(a[b]!=null)return!1
a[b]=this.jQ(b)
return!0},
lJ(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lK(s)
delete a[b]
return!0},
jO(){this.r=this.r+1&1073741823},
jQ(a){var s,r=this,q=new A.z0(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jO()
return q},
lK(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jO()},
cp(a){return J.a8(a)&1073741823},
c3(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.z0.prototype={}
A.e0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aB(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.ty.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:26}
A.eu.prototype={
G(a,b){return b instanceof A.b4&&this===b.a},
gt(a){var s=this
return new A.nU(s,s.a,s.c,s.$ti.i("nU<1>"))},
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
gE(a){var s
if(this.b===0)throw A.b(A.x("No such element"))
s=this.c
s.toString
return s},
gY(a){var s
if(this.b===0)throw A.b(A.x("No such element"))
s=this.c.c
s.toString
return s},
gar(a){var s=this.b
if(s===0)throw A.b(A.x("No such element"))
if(s>1)throw A.b(A.x("Too many elements"))
s=this.c
s.toString
return s},
gF(a){return this.b===0},
hG(a,b,c){var s,r,q=this
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
k8(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.nU.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.aB(s))
if(r.b!==0)r=s.e&&s.d===r.gE(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b4.prototype={
gfu(){var s=this.a
if(s==null||this===s.gE(0))return null
return this.c}}
A.J.prototype={
gt(a){return new A.an(a,this.gm(a),A.bz(a).i("an<J.E>"))},
a8(a,b){return this.h(a,b)},
gF(a){return this.gm(a)===0},
gU(a){return!this.gF(a)},
gE(a){if(this.gm(a)===0)throw A.b(A.aF())
return this.h(a,0)},
gY(a){if(this.gm(a)===0)throw A.b(A.aF())
return this.h(a,this.gm(a)-1)},
gar(a){if(this.gm(a)===0)throw A.b(A.aF())
if(this.gm(a)>1)throw A.b(A.ix())
return this.h(a,0)},
G(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.v(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aB(a))}return!1},
cG(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aB(a))}return!0},
ff(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aB(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.w3("",a,b)
return s.charCodeAt(0)==0?s:s},
dB(a,b){return new A.al(a,b,A.bz(a).i("al<J.E>"))},
l7(a,b){return new A.bI(a,b.i("bI<0>"))},
cf(a,b,c){return new A.X(a,b,A.bz(a).i("@<J.E>").V(c).i("X<1,2>"))},
bk(a,b){return A.cv(a,b,null,A.bz(a).i("J.E"))},
cN(a,b){return A.cv(a,0,A.bZ(b,"count",t.S),A.bz(a).i("J.E"))},
fJ(a){var s,r=A.lM(A.bz(a).i("J.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
i9(a,b){return new A.bO(a,A.bz(a).i("@<J.E>").V(b).i("bO<1,2>"))},
cl(a,b){var s=b==null?A.Ly():b
A.mC(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bc(b,c,r)
s=A.N(this.fQ(a,b,c),A.bz(a).i("J.E"))
return s},
b6(a,b){return this.T(a,b,null)},
fQ(a,b,c){A.bc(b,c,this.gm(a))
return A.cv(a,b,c,A.bz(a).i("J.E"))},
kv(a,b,c,d){var s
A.bc(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ak(a,b,c,d,e){var s,r,q,p,o
A.bc(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.oV(d,e).cO(0,!1)
r=0}p=J.L(q)
if(r+s>p.gm(q))throw A.b(A.De())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aw(a,b,c,d){return this.ak(a,b,c,d,0)},
cR(a,b,c){var s,r
if(t.j.b(c))this.aw(a,b,b+c.length,c)
else for(s=J.D(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.rU(a,"[","]")},
$iK:1,
$io:1,
$ip:1}
A.U.prototype={
c7(a,b,c){var s=A.n(this)
return A.Do(this,s.i("U.K"),s.i("U.V"),b,c)},
a3(a,b){var s,r,q,p
for(s=J.D(this.gL()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gac(){return J.aS(this.gL(),new A.tN(this),A.n(this).i("Q<U.K,U.V>"))},
aL(a,b,c,d){var s,r,q,p,o,n=A.w(c,d)
for(s=J.D(this.gL()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.B9(this.gL(),a)},
gm(a){return J.aj(this.gL())},
gF(a){return J.bA(this.gL())},
gU(a){return J.eb(this.gL())},
gaZ(){return new A.jQ(this,A.n(this).i("jQ<U.K,U.V>"))},
l(a){return A.tO(this)},
$iF:1}
A.tN.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.Q(a,r,A.n(s).i("Q<U.K,U.V>"))},
$S(){return A.n(this.a).i("Q<U.K,U.V>(U.K)")}}
A.tP.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:41}
A.jQ.prototype={
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gU(a){var s=this.a
return s.gU(s)},
gE(a){var s=this.a
s=s.h(0,J.c0(s.gL()))
return s==null?this.$ti.y[1].a(s):s},
gar(a){var s=this.a
s=s.h(0,J.Ba(s.gL()))
return s==null?this.$ti.y[1].a(s):s},
gY(a){var s=this.a
s=s.h(0,J.oU(s.gL()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.nW(J.D(s.gL()),s,this.$ti.i("nW<1,2>"))}}
A.nW.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.ol.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iJ.prototype={
c7(a,b,c){return this.a.c7(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a3(a,b){this.a.a3(0,b)},
gF(a){var s=this.a
return s.gF(s)},
gU(a){var s=this.a
return s.gU(s)},
gm(a){var s=this.a
return s.gm(s)},
gL(){return this.a.gL()},
l(a){return this.a.l(0)},
gaZ(){return this.a.gaZ()},
gac(){return this.a.gac()},
aL(a,b,c,d){return this.a.aL(0,b,c,d)},
$iF:1}
A.cT.prototype={
c7(a,b,c){return new A.cT(this.a.c7(0,b,c),b.i("@<0>").V(c).i("cT<1,2>"))}}
A.iF.prototype={
gt(a){var s=this
return new A.nV(s,s.c,s.d,s.b,s.$ti.i("nV<1>"))},
gF(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gE(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aF())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
gY(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aF())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gar(a){var s,r=this
if(r.b===r.c)throw A.b(A.aF())
if(r.gm(0)>1)throw A.b(A.ix())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a8(a,b){var s,r=this
A.Dd(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.v(r.a[s],b)){r.jX(s);++r.d
return!0}return!1},
l(a){return A.rU(this,"{","}")},
jX(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.nV.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.u(A.aB(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.cr.prototype={
gF(a){return this.gm(this)===0},
gU(a){return this.gm(this)!==0},
C(a,b){var s
for(s=J.D(b);s.k();)this.u(0,s.gn())},
cf(a,b,c){return new A.en(this,b,A.n(this).i("@<1>").V(c).i("en<1,2>"))},
gar(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.ix())
s=r.gt(r)
if(!s.k())throw A.b(A.aF())
return s.gn()},
l(a){return A.rU(this,"{","}")},
dB(a,b){return new A.al(this,b,A.n(this).i("al<1>"))},
cG(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cN(a,b){return A.DK(this,b,A.n(this).c)},
bk(a,b){return A.DI(this,b,A.n(this).c)},
gE(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aF())
return s.gn()},
gY(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aF())
do s=r.gn()
while(r.k())
return s},
a8(a,b){var s,r
A.bb(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lw(b,b-r,this,null,"index"))},
$iK:1,
$io:1,
$ieH:1}
A.jY.prototype={}
A.k8.prototype={}
A.nR.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.tW(b):s}},
gm(a){return this.b==null?this.c.a:this.dM().length},
gF(a){return this.gm(0)===0},
gU(a){return this.gm(0)>0},
gL(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.nS(this)},
gaZ(){var s,r=this
if(r.b==null){s=r.c
return new A.as(s,A.n(s).i("as<2>"))}return A.dJ(r.dM(),new A.yW(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.v1().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a3(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a3(0,b)
s=o.dM()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.A_(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aB(o))}},
dM(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
v1(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.dM()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.ab(r)
n.a=n.b=null
return n.c=s},
tW(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.A_(this.a[a])
return this.b[a]=s}}
A.yW.prototype={
$1(a){return this.a.h(0,a)},
$S:45}
A.nS.prototype={
gm(a){return this.a.gm(0)},
a8(a,b){var s=this.a
return s.b==null?s.gL().a8(0,b):s.dM()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gL()
s=s.gt(s)}else{s=s.dM()
s=new J.ff(s,s.length,A.a_(s).i("ff<1>"))}return s},
G(a,b){return this.a.I(b)}}
A.yU.prototype={
p(){var s,r,q=this
q.p_()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aC(A.EY(r.charCodeAt(0)==0?r:r,q.b))
s.aU()}}
A.zD.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:53}
A.zC.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:53}
A.kC.prototype={
gaS(){return"us-ascii"},
ks(a){return B.bu.v(a)}}
A.ok.prototype={
v(a){var s,r,q,p=A.bc(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aA(a,"string","Contains invalid characters."))
o[r]=q}return o},
bZ(a){return new A.zu(new A.hk(a),this.a)}}
A.kD.prototype={}
A.zu.prototype={
p(){this.a.a.p()},
bP(a,b,c,d){var s,r,q,p
A.bc(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.ck(a)
p=this.a.a
p.u(0,s.T(s,b,c))
if(d)p.p()}}
A.kH.prototype={
gfa(){return this.a},
xJ(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bc(a1,a2,a0.length)
s=$.CC()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.AG(a0.charCodeAt(l))
h=A.AG(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a1("")
e=p}else e=p
e.a+=B.a.A(a0,q,r)
d=A.bt(k)
e.a+=d
q=l
continue}}throw A.b(A.a9("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.CN(a0,n,a2,o,m,d)
else{c=B.c.al(d-1,4)+1
if(c===1)throw A.b(A.a9(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dt(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.CN(a0,n,a2,o,m,b)
else{c=B.c.al(b,4)
if(c===1)throw A.b(A.a9(a,a0,a2))
if(c>1)a0=B.a.dt(a0,a2,a2,c===2?"==":"=")}return a0}}
A.i6.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.nv(this.a?u.G:u.U).nc(a,0,s,!0)
s.toString
return A.dS(s,0,null)},
bZ(a){return new A.xp(a,new A.xG(this.a?u.G:u.U))}}
A.nv.prototype={
n3(a){return new Uint8Array(a)},
nc(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.N(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.n3(o)
r.a=A.J2(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.xG.prototype={
n3(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bN(B.f.gaa(s),s.byteOffset,a)}}
A.xC.prototype={
u(a,b){this.lN(b,0,J.aj(b),!1)},
p(){this.lN(B.cA,0,0,!0)}}
A.xp.prototype={
lN(a,b,c,d){var s=this.b.nc(a,b,c,d)
if(s!=null)this.a.a.aC(A.dS(s,0,null))
if(d)this.a.a.aU()}}
A.kI.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.nu()
r=s.ko(a,0,q)
r.toString
s.ki(a,q)
return r},
bZ(a){return new A.xB(a,new A.nu())}}
A.nu.prototype={
ko(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.DZ(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.J_(a,b,c,q)
r.a=A.J1(a,b,c,s,0,r.a)
return s},
ki(a,b){var s=this.a
if(s<-1)throw A.b(A.a9("Missing padding character",a,b))
if(s>0)throw A.b(A.a9("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.xB.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.ko(b,0,r)
if(s!=null)this.a.a.aC(s)},
p(){this.b.ki(null,null)
this.a.a.aU()},
bP(a,b,c,d){var s,r
A.bc(b,c,a.length)
if(b===c)return
s=this.b
r=s.ko(a,b,c)
if(r!=null)this.a.a.aC(r)
if(d){s.ki(a,c)
this.a.a.aU()}}}
A.pd.prototype={}
A.hk.prototype={
u(a,b){this.a.u(0,b)},
p(){this.a.p()}}
A.ny.prototype={
u(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.L(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.ah(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.aw(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.aw(p,o,o+n.gm(b),b)
q.c=q.c+n.gm(b)},
p(){this.a.$1(B.f.T(this.b,0,this.c))}}
A.kV.prototype={}
A.ob.prototype={
u(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.eR.prototype={
u(a,b){this.b.u(0,b)},
bz(a,b){A.bZ(a,"error",t.K)
this.a.bz(a,b)},
p(){this.b.p()},
$ibD:1}
A.kX.prototype={}
A.aD.prototype={
bZ(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
vy(a){return new A.jB(new A.qa(this),a,t.fM.V(A.n(this).i("aD.T")).i("jB<1,2>"))}}
A.qa.prototype={
$1(a){return new A.eR(a,this.a.bZ(a),t.oW)},
$S:98}
A.ep.prototype={}
A.iD.prototype={
l(a){var s=A.ik(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lE.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.rX.prototype={
az(a,b){var s=A.EY(a,this.gvR().a)
return s},
a7(a,b){var s=A.Jm(a,this.gfa().b,null)
return s},
gfa(){return B.cb},
gvR(){return B.ca}}
A.lG.prototype={
bZ(a){return new A.yV(null,this.b,new A.od(a))}}
A.yV.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.x("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a1("")
q=new A.zq(r,s)
A.Ed(b,q,p.b,p.a)
if(r.a.length!==0)q.jt()
s.p()},
p(){}}
A.lF.prototype={
bZ(a){return new A.yU(this.a,a,new A.a1(""))}}
A.yY.prototype={
nP(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.j0(a,s,r)
s=r+1
n.aq(92)
n.aq(117)
n.aq(100)
p=q>>>8&15
n.aq(p<10?48+p:87+p)
p=q>>>4&15
n.aq(p<10?48+p:87+p)
p=q&15
n.aq(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.j0(a,s,r)
s=r+1
n.aq(92)
switch(q){case 8:n.aq(98)
break
case 9:n.aq(116)
break
case 10:n.aq(110)
break
case 12:n.aq(102)
break
case 13:n.aq(114)
break
default:n.aq(117)
n.aq(48)
n.aq(48)
p=q>>>4&15
n.aq(p<10?48+p:87+p)
p=q&15
n.aq(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.j0(a,s,r)
s=r+1
n.aq(92)
n.aq(q)}}if(s===0)n.b4(a)
else if(s<m)n.j0(a,s,m)},
jj(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.lE(a,null))}s.push(a)},
j_(a){var s,r,q,p,o=this
if(o.nO(a))return
o.jj(a)
try{s=o.b.$1(a)
if(!o.nO(s)){q=A.Dl(a,null,o.gmh())
throw A.b(q)}o.a.pop()}catch(p){r=A.E(p)
q=A.Dl(a,r,o.gmh())
throw A.b(q)}},
nO(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.z4(a)
return!0}else if(a===!0){r.b4("true")
return!0}else if(a===!1){r.b4("false")
return!0}else if(a==null){r.b4("null")
return!0}else if(typeof a=="string"){r.b4('"')
r.nP(a)
r.b4('"')
return!0}else if(t.j.b(a)){r.jj(a)
r.z2(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.jj(a)
s=r.z3(a)
r.a.pop()
return s}else return!1},
z2(a){var s,r,q=this
q.b4("[")
s=J.L(a)
if(s.gU(a)){q.j_(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b4(",")
q.j_(s.h(a,r))}}q.b4("]")},
z3(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.b4("{}")
return!0}s=a.gm(a)*2
r=A.ag(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a3(0,new A.yZ(n,r))
if(!n.b)return!1
o.b4("{")
for(p='"';q<s;q+=2,p=',"'){o.b4(p)
o.nP(A.G(r[q]))
o.b4('":')
o.j_(r[q+1])}o.b4("}")
return!0}}
A.yZ.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:41}
A.yX.prototype={
gmh(){var s=this.c
return s instanceof A.a1?s.l(0):null},
z4(a){this.c.iZ(B.x.l(a))},
b4(a){this.c.iZ(a)},
j0(a,b,c){this.c.iZ(B.a.A(a,b,c))},
aq(a){this.c.aq(a)}}
A.lJ.prototype={
gaS(){return"iso-8859-1"},
ks(a){return B.cj.v(a)}}
A.lK.prototype={}
A.mM.prototype={
u(a,b){this.bP(b,0,b.length,!1)}}
A.zq.prototype={
aq(a){var s=this.a,r=A.bt(a)
if((s.a+=r).length>16)this.jt()},
iZ(a){if(this.a.a.length!==0)this.jt()
this.b.u(0,a)},
jt(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.k1.prototype={
p(){},
bP(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bt(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
u(a,b){this.a.a+=b}}
A.od.prototype={
u(a,b){this.a.a.aC(b)},
bP(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aC(a)
else r.aC(B.a.A(a,b,c))
if(d)r.aU()},
p(){this.a.a.aU()}}
A.zB.prototype={
p(){var s,r,q,p=this.c
this.a.wP(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bP(q,0,q.length,!0)}else r.p()},
u(a,b){this.bP(b,0,J.aj(b),!1)},
bP(a,b,c,d){var s,r=this.c,q=this.a.cY(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bP(s,0,s.length,!1)
r.a=""
return}}}
A.n5.prototype={
gaS(){return"utf-8"},
vO(a,b){return new A.dn((b===!0?B.dG:B.aL).a).cY(a,0,null,!0)},
f5(a){return this.vO(a,null)},
ks(a){return B.e.v(a)}}
A.n6.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.on(s)
if(r.m_(a,0,q)!==q)r.i0()
return B.f.T(s,0,r.b)},
bZ(a){return new A.zE(new A.hk(a),new Uint8Array(1024))}}
A.on.prototype={
i0(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.I(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mQ(a,b){var s,r,q,p,o=this
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
return!0}else{o.i0()
return!1}},
m_(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.I(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mQ(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.i0()}else if(o<=2047){n=k.b
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
A.zE.prototype={
p(){if(this.a!==0){this.bP("",0,0,!0)
return}this.d.a.p()},
bP(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mQ(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.m_(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.i0()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.T(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.jo.prototype={
bZ(a){return new A.zB(new A.dn(this.a),new A.od(a),new A.a1(""))}}
A.dn.prototype={
cY(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bc(b,c,J.aj(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.JS(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.JR(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.jo(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.EA(p)
m.b=0
throw A.b(A.a9(n,a,q+m.c))}return o},
jo(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.N(b+c,2)
r=q.jo(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.jo(a,s,c,d)}return q.vQ(a,b,c,d)},
wP(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bt(65533)
a.a+=s}else throw A.b(A.a9(A.EA(77),null,null))},
vQ(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a1(""),g=b+1,f=a[b]
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
h.a+=q}else{q=A.dS(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bt(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.oy.prototype={}
A.aJ.prototype={
bF(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bJ(p,r)
return new A.aJ(p===0?!1:s,r,p)},
qc(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cj()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bJ(s,q)
return new A.aJ(n===0?!1:o,q,n)},
qf(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cj()
s=k-a
if(s<=0)return l.a?$.CE():$.cj()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bJ(s,q)
m=new A.aJ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fX(0,$.fc())
return m},
bG(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.N(b,16)
if(B.c.al(b,16)===0)return n.qc(r)
q=s+r+1
p=new Uint16Array(q)
A.E6(n.b,s,b,p)
s=n.a
o=A.bJ(q,p)
return new A.aJ(o===0?!1:s,p,o)},
dG(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.N(b,16)
q=B.c.al(b,16)
if(q===0)return j.qf(r)
p=s-r
if(p<=0)return j.a?$.CE():$.cj()
o=j.b
n=new Uint16Array(p)
A.J8(o,s,b,n)
s=j.a
m=A.bJ(p,n)
l=new A.aJ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bG(1,q)-1)>>>0!==0)return l.fX(0,$.fc())
for(k=0;k<r;++k)if(o[k]!==0)return l.fX(0,$.fc())}return l},
a1(a,b){var s,r=this.a
if(r===b.a){s=A.xD(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
je(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.je(p,b)
if(o===0)return $.cj()
if(n===0)return p.a===b?p:p.bF(0)
s=o+1
r=new Uint16Array(s)
A.J4(p.b,o,a.b,n,r)
q=A.bJ(s,r)
return new A.aJ(q===0?!1:b,r,q)},
fY(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cj()
s=a.c
if(s===0)return p.a===b?p:p.bF(0)
r=new Uint16Array(o)
A.nw(p.b,o,a.b,s,r)
q=A.bJ(o,r)
return new A.aJ(q===0?!1:b,r,q)},
fN(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.je(b,r)
if(A.xD(q.b,p,b.b,s)>=0)return q.fY(b,r)
return b.fY(q,!r)},
fX(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bF(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.je(b,r)
if(A.xD(q.b,p,b.b,s)>=0)return q.fY(b,r)
return b.fY(q,!r)},
bi(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cj()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.E7(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bJ(s,p)
return new A.aJ(m===0?!1:n,p,m)},
qb(a){var s,r,q,p
if(this.c<a.c)return $.cj()
this.lV(a)
s=$.BW.bw()-$.jA.bw()
r=A.BY($.BV.bw(),$.jA.bw(),$.BW.bw(),s)
q=A.bJ(s,r)
p=new A.aJ(!1,r,q)
return this.a!==a.a&&q>0?p.bF(0):p},
um(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lV(a)
s=A.BY($.BV.bw(),0,$.jA.bw(),$.jA.bw())
r=A.bJ($.jA.bw(),s)
q=new A.aJ(!1,s,r)
if($.BX.bw()>0)q=q.dG(0,$.BX.bw())
return p.a&&q.c>0?q.bF(0):q},
lV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.E3&&a.c===$.E5&&c.b===$.E2&&a.b===$.E4)return
s=a.b
r=a.c
q=16-B.c.gmY(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.E1(s,r,q,p)
n=new Uint16Array(b+5)
m=A.E1(c.b,b,q,n)}else{n=A.BY(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.BZ(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.xD(n,m,j,i)>=0){g&2&&A.I(n)
n[m]=1
A.nw(n,h,j,i,n)}else{g&2&&A.I(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.nw(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.J5(l,n,e);--k
A.E7(d,f,0,n,k,o)
if(n[e]<d){i=A.BZ(f,o,k,j)
A.nw(n,h,j,i,n)
while(--d,n[e]<d)A.nw(n,h,j,i,n)}--e}$.E2=c.b
$.E3=b
$.E4=s
$.E5=r
$.BV.b=n
$.BW.b=h
$.jA.b=o
$.BX.b=q},
gJ(a){var s,r,q,p=new A.xE(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.xF().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.aJ&&this.a1(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bF(0):n
while(r.c>1){q=$.CD()
if(q.c===0)A.u(B.bE)
p=r.um(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.qb(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bV(s,t.hF).ei(0)},
$iax:1}
A.xE.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:105}
A.xF.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:116}
A.nL.prototype={
mW(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
n9(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.zA.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.D(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a7(b)}},
$S:56}
A.qO.prototype={
$0(){var s=this
return A.u(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:38}
A.aM.prototype={
jg(a){var s=1000,r=B.c.al(a,s),q=B.c.N(a-r,s),p=this.b+r,o=B.c.al(p,s),n=this.c
return new A.aM(A.lc(this.a+B.c.N(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aM&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.c7(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kF(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a1(a,b){var s=B.c.a1(this.a,b.a)
if(s!==0)return s
return B.c.a1(this.b,b.b)},
yx(){var s=this
if(s.c)return s
return new A.aM(s.a,s.b,!0)},
l(a){var s=this,r=A.Hh(A.BE(s)),q=A.lb(A.BC(s)),p=A.lb(A.uS(s)),o=A.lb(A.BA(s)),n=A.lb(A.BB(s)),m=A.lb(A.BD(s)),l=A.D1(A.Dy(s)),k=s.b,j=k===0?"":A.D1(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iax:1}
A.aE.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aE&&this.a===b.a},
gJ(a){return B.c.gJ(this.a)},
a1(a,b){return B.c.a1(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.N(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.N(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.N(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.iK(B.c.l(n%1e6),6,"0")},
$iax:1}
A.yk.prototype={
l(a){return this.a5()}}
A.af.prototype={
gcm(){return A.Ib(this)}}
A.kE.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ik(s)
return"Assertion failed"}}
A.dg.prototype={}
A.bB.prototype={
gjs(){return"Invalid argument"+(!this.a?"(s)":"")},
gjr(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gjs()+q+o
if(!s.a)return n
return n+s.gjr()+": "+A.ik(s.gkE())},
gkE(){return this.b}}
A.db.prototype={
gkE(){return this.b},
gjs(){return"RangeError"},
gjr(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.iu.prototype={
gkE(){return this.b},
gjs(){return"RangeError"},
gjr(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$idb:1,
gm(a){return this.f}}
A.cU.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.mZ.prototype={
l(a){return"UnimplementedError: "+this.a},
$icU:1}
A.bi.prototype={
l(a){return"Bad state: "+this.a}}
A.l_.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ik(s)+"."}}
A.m5.prototype={
l(a){return"Out of Memory"},
gcm(){return null},
$iaf:1}
A.jg.prototype={
l(a){return"Stack Overflow"},
gcm(){return null},
$iaf:1}
A.nK.prototype={
l(a){return"Exception: "+this.a},
$iH:1}
A.bh.prototype={
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
k=""}return g+l+B.a.A(e,i,j)+k+"\n"+B.a.bi(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g},
$iH:1,
gkK(){return this.a},
gfV(){return this.b},
gav(){return this.c}}
A.ly.prototype={
gcm(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iaf:1,
$icU:1,
$iH:1}
A.o.prototype={
i9(a,b){return A.fh(this,A.n(this).i("o.E"),b)},
cf(a,b,c){return A.dJ(this,b,A.n(this).i("o.E"),c)},
dB(a,b){return new A.al(this,b,A.n(this).i("al<o.E>"))},
l7(a,b){return new A.bI(this,b.i("bI<0>"))},
G(a,b){var s
for(s=this.gt(this);s.k();)if(J.v(s.gn(),b))return!0
return!1},
wR(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
wS(a,b,c){return this.wR(0,b,c,t.z)},
cG(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
B(a,b){var s,r,q=this.gt(this)
if(!q.k())return""
s=J.Z(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.Z(q.gn())
while(q.k())}else{r=s
do r=r+b+J.Z(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bQ(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cO(a,b){var s=A.n(this).i("o.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
dw(a){return this.cO(0,!0)},
fJ(a){return A.d6(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gt(this).k()},
gU(a){return!this.gF(this)},
cN(a,b){return A.DK(this,b,A.n(this).i("o.E"))},
bk(a,b){return A.DI(this,b,A.n(this).i("o.E"))},
gE(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aF())
return s.gn()},
gY(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aF())
do s=r.gn()
while(r.k())
return s},
gar(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aF())
s=r.gn()
if(r.k())throw A.b(A.ix())
return s},
ff(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a8(a,b){var s,r
A.bb(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lw(b,b-r,this,null,"index"))},
l(a){return A.HF(this,"(",")")}}
A.Q.prototype={
l(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.W.prototype={
gJ(a){return A.j.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
R(a,b){return this===b},
gJ(a){return A.eC(this)},
l(a){return"Instance of '"+A.md(this)+"'"},
gam(a){return A.dt(this)},
toString(){return this.l(this)}}
A.of.prototype={
l(a){return""},
$iaH:1}
A.jh.prototype={
gwt(){var s=this.gnb()
if($.ks()===1e6)return s
return s*1000},
gna(){var s=this.gnb()
if($.ks()===1000)return s
return B.c.N(s,1000)},
aB(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.me.$0()-r)
s.b=null}},
gnb(){var s=this.b
if(s==null)s=$.me.$0()
return s-this.a}}
A.j8.prototype={
gt(a){return new A.mt(this.a)},
gY(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.x("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.EJ(r,s)}return s}}
A.mt.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.EJ(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a1.prototype={
gm(a){return this.a.length},
iZ(a){var s=A.q(a)
this.a+=s},
aq(a){var s=A.bt(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.wF.prototype={
$2(a,b){throw A.b(A.a9("Illegal IPv6 address, "+a,this.a,b))},
$S:159}
A.k9.prototype={
gmG(){var s,r,q,p,o=this,n=o.w
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
gxU(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ag(s,1)
r=s.length===0?B.p:A.cJ(new A.X(A.l(s.split("/"),t.s),A.LJ(),t.iZ),t.N)
q.x!==$&&A.B1()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmG())
r.y!==$&&A.B1()
r.y=s
q=s}return q},
gl6(){return this.b},
gdk(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.af(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gft(){var s=this.d
return s==null?A.Ep(this.a):s},
gfB(){var s=this.f
return s==null?"":s},
giq(){var s=this.r
return s==null?"":s},
xp(a){var s=this.a
if(a.length!==s.length)return!1
return A.K4(a,s,0)>=0},
fF(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.C7(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.zw(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.zx(null,0,0,a)
else k=j.f
return A.ka(b,q,o,p,l,k,j.r)},
kX(a){return this.fF(a,null)},
nH(a){return this.fF(null,a)},
md(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.af(b,"../",r);){r+=3;++s}q=B.a.dm(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.iD(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dt(a,q+1,null,B.a.ag(b,r-3*s))},
bt(a){return this.fG(A.n4(a))},
fG(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb1().length!==0)return a
else{s=h.a
if(a.gkz()){r=a.nH(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gnj())m=a.giA()?a.gfB():h.f
else{l=A.JQ(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gky()?k+A.f1(a.gbr()):k+A.f1(h.md(B.a.ag(n,k.length),a.gbr()))}else if(a.gky())n=A.f1(a.gbr())
else if(n.length===0)if(p==null)n=s.length===0?a.gbr():A.f1(a.gbr())
else n=A.f1("/"+a.gbr())
else{j=h.md(n,a.gbr())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f1(j)
else n=A.C9(j,!r||p!=null)}m=a.giA()?a.gfB():null}}}i=a.gkA()?a.giq():null
return A.ka(s,q,p,o,n,m,i)},
gkz(){return this.c!=null},
giA(){return this.f!=null},
gkA(){return this.r!=null},
gnj(){return this.e.length===0},
gky(){return B.a.S(this.e,"/")},
l1(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdk()!=="")A.u(A.Y(u.Q))
s=r.gxU()
A.JJ(s,!1)
q=A.w3(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmG()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb1())if(p.c!=null===b.gkz())if(p.b===b.gl6())if(p.gdk()===b.gdk())if(p.gft()===b.gft())if(p.e===b.gbr()){r=p.f
q=r==null
if(!q===b.giA()){if(q)r=""
if(r===b.gfB()){r=p.r
q=r==null
if(!q===b.gkA()){s=q?"":r
s=s===b.giq()}}}}return s},
$in2:1,
gb1(){return this.a},
gbr(){return this.e}}
A.zz.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.hI(1,a,B.l,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.hI(1,b,B.l,!0)
s.a+=r}},
$S:173}
A.zy.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.D(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:56}
A.wE.prototype={
gnN(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cb(m,"?",s)
q=m.length
if(r>=0){p=A.kb(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.nF("data","",n,n,A.kb(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.ce.prototype={
gkz(){return this.c>0},
gkB(){return this.c>0&&this.d+1<this.e},
giA(){return this.f<this.r},
gkA(){return this.r<this.a.length},
gky(){return B.a.af(this.a,"/",this.e)},
gnj(){return this.e===this.f},
gb1(){var s=this.w
return s==null?this.w=this.pU():s},
pU(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gl6(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdk(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gft(){var s,r=this
if(r.gkB())return A.aI(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbr(){return B.a.A(this.a,this.e,this.f)},
gfB(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
giq(){var s=this.r,r=this.a
return s<r.length?B.a.ag(r,s+1):""},
m7(a){var s=this.d+1
return s+a.length===this.e&&B.a.af(this.a,a,s)},
ym(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.ce(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.C7(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb1()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gkB()?h.gft():g
if(s)o=A.zw(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.zx(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ag(q,m+1):g
return A.ka(b,p,n,o,l,j,i)},
kX(a){return this.fF(a,null)},
nH(a){return this.fF(null,a)},
bt(a){return this.fG(A.n4(a))},
fG(a){if(a instanceof A.ce)return this.uN(this,a)
return this.mI().fG(a)},
uN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.m7("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.m7("443")
if(p){o=r+1
return new A.ce(B.a.A(a.a,0,o)+B.a.ag(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mI().fG(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.ce(B.a.A(a.a,0,r)+B.a.ag(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.ce(B.a.A(a.a,0,r)+B.a.ag(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.ym()}s=b.a
if(B.a.af(s,"/",n)){m=a.e
l=A.Eh(this)
k=l>0?l:m
o=k-n
return new A.ce(B.a.A(a.a,0,k)+B.a.ag(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.af(s,"../",n))n+=3
o=j-n+1
return new A.ce(B.a.A(a.a,0,j)+"/"+B.a.ag(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Eh(this)
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
return new A.ce(B.a.A(h,0,i)+d+B.a.ag(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
l1(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb1()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.u(A.Y(u.Q))
q=B.a.A(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mI(){var s=this,r=null,q=s.gb1(),p=s.gl6(),o=s.c>0?s.gdk():r,n=s.gkB()?s.gft():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfB():r
return A.ka(q,p,o,n,k,l,j<m.length?s.giq():r)},
l(a){return this.a},
$in2:1}
A.nF.prototype={}
A.lk.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.q(this.b)}}
A.m1.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iH:1}
A.rj.prototype={
$2(a,b){this.a.bC(new A.rh(a),new A.ri(b),t.X)},
$S:176}
A.rh.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:177}
A.ri.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Lv(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.u("Attempting to box non-Dart object.")
s={}
s[$.Gu()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:11}
A.AL.prototype={
$1(a){var s,r,q,p
if(A.EX(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.D(a.gL());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.C(p,J.aS(a,this,t.z))
return p}else return a},
$S:16}
A.AS.prototype={
$1(a){return this.a.aD(a)},
$S:25}
A.AT.prototype={
$1(a){if(a==null)return this.a.aK(new A.m1(a===undefined))
return this.a.aK(a)},
$S:25}
A.Am.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.EW(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aM(A.lc(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.O("structured clone of RegExp",null))
if(a instanceof Promise)return A.a6(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.w(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aC(o),q=s.gt(o);q.k();)n.push(A.oI(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.L(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:16}
A.yR.prototype={
cK(a){if(a<=0||a>4294967296)throw A.b(A.b_(u.E+a))
return Math.random()*a>>>0},
nv(){return Math.random()}}
A.yS.prototype={
pg(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cK(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b_(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.I(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ap(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bN(B.az.gaa(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.li.prototype={}
A.a3.prototype={
h(a,b){var s,r=this
if(!r.jL(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jL(b))return
s.c.j(0,s.a.$1(b),new A.Q(b,c,s.$ti.i("Q<a3.K,a3.V>")))},
C(a,b){b.a3(0,new A.pf(this))},
c7(a,b,c){return this.c.c7(0,b,c)},
I(a){var s=this
if(!s.jL(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a3.K").a(a)))},
gac(){var s=this.c,r=A.n(s).i("aN<1,2>")
return A.dJ(new A.aN(s,r),new A.pg(this),r.i("o.E"),this.$ti.i("Q<a3.K,a3.V>"))},
a3(a,b){this.c.a3(0,new A.ph(this,b))},
gF(a){return this.c.a===0},
gU(a){return this.c.a!==0},
gL(){var s=this.c,r=A.n(s).i("as<2>")
return A.dJ(new A.as(s,r),new A.pi(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aL(a,b,c,d){return this.c.aL(0,new A.pj(this,b,c,d),c,d)},
gaZ(){var s=this.c,r=A.n(s).i("as<2>")
return A.dJ(new A.as(s,r),new A.pk(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.tO(this)},
jL(a){return this.$ti.i("a3.K").b(a)},
$iF:1}
A.pf.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pg.prototype={
$1(a){var s=a.b
return new A.Q(s.a,s.b,this.a.$ti.i("Q<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("Q<a3.K,a3.V>(Q<a3.C,Q<a3.K,a3.V>>)")}}
A.ph.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,Q<a3.K,a3.V>)")}}
A.pi.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(Q<a3.K,a3.V>)")}}
A.pj.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.V(this.c).V(this.d).i("Q<1,2>(a3.C,Q<a3.K,a3.V>)")}}
A.pk.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(Q<a3.K,a3.V>)")}}
A.le.prototype={
X(a,b){return J.v(a,b)},
ad(a){return J.a8(a)}}
A.iy.prototype={
X(a,b){var s,r,q,p
if(a===b)return!0
s=J.D(a)
r=J.D(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.X(s.gn(),r.gn()))return!1}},
ad(a){var s,r,q
for(s=J.D(a),r=this.a,q=0;s.k();){q=q+r.ad(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.ev.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.L(a)
r=s.gm(a)
q=J.L(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.X(s.h(a,o),q.h(b,o)))return!1
return!0},
ad(a){var s,r,q,p
for(s=J.L(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ad(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hG.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.Bn(s.gwA(),s.gxk(),s.gxq(),A.n(this).i("hG.E"),t.S)
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
A.fZ.prototype={}
A.hx.prototype={
gJ(a){var s=this.a
return 3*s.a.ad(this.b)+7*s.b.ad(this.c)&2147483647},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.hx){s=this.a
s=s.a.X(this.b,b.b)&&s.b.X(this.c,b.c)}else s=!1
return s}}
A.iI.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.Bn(null,null,null,t.mB,t.S)
for(r=J.D(a.gL());r.k();){q=r.gn()
p=new A.hx(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.D(b.gL());r.k();){q=r.gn()
p=new A.hx(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ad(a){var s,r,q,p,o,n,m,l
for(s=J.D(a.gL()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ad(n)
l=a.h(0,n)
o=o+3*m+7*q.ad(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.ld.prototype={
X(a,b){var s,r=this
if(a instanceof A.cr)return b instanceof A.cr&&new A.fZ(r,t.cu).X(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iI(r,r,t.a3).X(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.ev(r,t.hI).X(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iy(r,t.nZ).X(a,b)
return J.v(a,b)},
ad(a){var s=this
if(a instanceof A.cr)return new A.fZ(s,t.cu).ad(a)
if(t.f.b(a))return new A.iI(s,s,t.a3).ad(a)
if(t.j.b(a))return new A.ev(s,t.hI).ad(a)
if(t.e7.b(a))return new A.iy(s,t.nZ).ad(a)
return J.a8(a)},
xs(a){return!0}}
A.m0.prototype={
sm(a,b){A.Dt()},
u(a,b){return A.Dt()}}
A.n1.prototype={
j(a,b,c){return A.IL()}}
A.cl.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cl){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.ue(this.a)},
l(a){return A.aq(this.a)}}
A.c4.prototype={
u(a,b){if(this.a!=null)throw A.b(A.x("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.x("add must be called once."))}}
A.lq.prototype={
v(a){var s=new A.c4(),r=A.cY(s)
r.u(0,a)
r.p()
r=s.a
r.toString
return r}}
A.ro.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.x("Hash.add() called after close()."))
s.r=s.r+J.aj(b)
s.lw(b)},
lw(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.oS(B.f.gaa(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.L(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ak(i,j,n,a,o)
k.e=n
return}B.f.ak(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.I(s)
s[m]=l;++m}while(m<q)
k.yD(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.u(A.Y("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.oS(B.f.gaa(q))
m=B.c.N(p,4294967296)
n.$flags&2&&A.I(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.lw(q)
s=l.a
s.u(0,new A.cl(l.pD()))
s.p()},
pD(){var s,r,q,p,o,n,m
if(B.aR===$.kr())return J.GH(B.y.gaa(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.oS(B.f.gaa(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.I(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.o8.prototype={
bZ(a){var s=new Uint32Array(A.b3(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hk(new A.o9(s,r,a,q,new Uint32Array(16)))}}
A.zd.prototype={
yD(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cp[q]+s[q]>>>0)>>>0)>>>0
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
A.o9.prototype={}
A.kx.prototype={
gJ(a){return A.c7(B.dr,this.d,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.l6&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dt(s).l(0)+".with"+s.d*8+"bits()"
return A.dt(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.pq.prototype={}
A.iH.prototype={
gJ(a){return B.t.ad(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.iH&&B.t.X(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jb.prototype={
l(a){return A.dt(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iH:1}
A.tM.prototype={
l(a){return A.dt(this).l(0)+"()"}}
A.ja.prototype={
gJ(a){return(B.t.ad(this.b.a)^B.t.ad(this.c)^B.t.ad(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.ja){s=B.t.X(this.b.a,b.b.a)
s=s&&B.t.X(this.c,b.c)&&B.t.X(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.vJ.prototype={}
A.jc.prototype={
ge8(){return this.b},
gJ(a){var s=A.eC(B.dB),r=B.t.ad(this.ge8())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.jc&&B.t.X(this.ge8(),b.ge8())},
l(a){return"SecretKeyData(...)"}}
A.my.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.l6.prototype={
vT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge8().gm(0),f=this.d
if(g!==f)throw A.b(A.aA(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Fg(c)
r=new Uint32Array(4)
A.oF(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.D0(r,a.c)
p=J.CH(B.f.gaa(q),0,null)
o=a.a
n=B.t.X(B.aP.lD(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jb())
A.Ae(q,1)
n=o.length
m=B.c.N(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oF(l,k,p,0,s)
A.Ae(q,1)}j=J.bN(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.I(j)
j[k]=i^h}return j},
wx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge8().gm(0),f=this.d
if(g!==f)throw A.b(A.aA(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Fg(d)
r=new Uint32Array(4)
A.oF(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.D0(r,c)
p=J.CH(B.f.gaa(q),0,null)
o=new Uint32Array(A.b3(p))
A.Ae(q,1)
n=a.length
m=(B.c.N(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oF(l,k,p,0,s)
A.Ae(q,1)}j=J.bN(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.I(j)
j[k]=i^h}return new A.ja(j,B.aP.lD(j,b,s,r,o),c)}}
A.qs.prototype={
l(a){return"DartGcm()"},
lD(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.l7(n,d,b)
A.l7(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.N(s,o),!1)
q.setUint32(4,B.c.al(s,o),!1)
q.setUint32(8,B.c.N(r,o),!1)
q.setUint32(12,B.c.al(r,o),!1)
A.l7(n,d,J.bN(B.az.gaa(q),0,null))
p=new Uint32Array(4)
A.oF(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iH(J.bN(B.y.gaa(n),0,null))}}
A.nD.prototype={}
A.nE.prototype={}
A.qd.prototype={}
A.qt.prototype={}
A.y8.prototype={
X(a,b){var s,r,q=J.L(a),p=J.L(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ad(a){var s,r,q,p,o
for(s=J.L(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.al(q,16)
r=(r^B.c.uM(p,o)^B.c.mC(p,16-o))>>>0}return r}}
A.mq.prototype={}
A.kJ.prototype={$iBc:1}
A.kK.prototype={
ip(){if(this.w)throw A.b(A.x("Can't finalize a finalized Request."))
this.w=!0
return B.by},
l(a){return this.a+" "+this.b.l(0)}}
A.kL.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:213}
A.kM.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:238}
A.p9.prototype={
p6(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.q(s)+".",null))}}}
A.kR.prototype={
b5(a){return this.oB(a)},
oB(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b5=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.CY("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.ip().yw(),$async$b5)
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
f=A.w(a9,t.K)
e=b4.gn2()
d=null
if(e!=null){d=e
J.c_(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.n(b0).i("aN<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.c_(f,c.a,c.b)}f=A.f9(f)
f.toString
A.be(f)
b0=l.signal
s=8
return A.a(A.a6(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b5)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.j3(a,null):null
if(a0==null&&a!=null){f=A.CY("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.w(a9,a9)
b.headers.forEach(A.oA(new A.pc(a1)))
f=A.JV(b4,b)
a4=b.status
a6=a1
a8=a0
A.n4(b.url)
a9=b.statusText
f=new A.mL(A.FX(f),a4,a8,a6)
f.p6(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ae(b3)
A.F0(a2,a3,b4)
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
p(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].abort()
this.b=!0}}
A.pc.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:81}
A.zW.prototype={
$1(a){return A.hP(this.a,this.b,a)},
$S:82}
A.A4.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ai()}},
$S:0}
A.A5.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a6(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.E(k)
m=A.ae(k)
if(!o.a.b)A.F0(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.dw.prototype={
yw(){var s=new A.t($.C,t.jz),r=new A.az(s,t.iq),q=new A.ny(new A.pe(r),new Uint8Array(1024))
this.a9(q.gvk(q),!0,q.gea(),r.gvH())
return s}}
A.pe.prototype={
$1(a){return this.a.aD(new Uint8Array(A.b3(a)))},
$S:27}
A.eh.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iH:1}
A.lU.prototype={
gm(a){return this.b}}
A.u6.prototype={
gn2(){var s,r,q,p=this,o={},n=o.a=0
p.x.a3(0,new A.u7(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.r)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.m5(q)).length+q.b+2)}return o.a+2+70+4},
ip(){var s=this,r=s.pz()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.lo()
return new A.dw(s.bn(r))},
bn(a){return this.qr(a)},
qr(a){var $async$bn=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aN(f,A.n(f).i("aN<1,2>")).gt(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bW(A.e_(e),$async$bn,r)
case 5:k=l.b
j=$.B6()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.CF()
s=6
q=[1]
return A.bW(A.e_(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bn,r)
case 6:s=7
q=[1]
return A.bW(A.e_(B.e.v(k)),$async$bn,r)
case 7:s=8
q=[1]
return A.bW(A.e_(B.b2),$async$bn,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bW(A.e_(e),$async$bn,r)
case 12:s=13
q=[1]
return A.bW(A.e_(B.e.v(m.m5(g))),$async$bn,r)
case 13:if(g.f)A.u(A.x("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bW(A.Jk(g.e),$async$bn,r)
case 14:s=15
q=[1]
return A.bW(A.e_(B.b2),$async$bn,r)
case 15:case 10:f.length===l||(0,A.r)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bW(A.e_(d),$async$bn,r)
case 16:case 1:return A.bW(null,0,r)
case 2:return A.bW(o.at(-1),1,r)}})
var s=0,r=A.EV($async$bn,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.F9(r)},
t9(a,b){var s,r=$.B6()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.CF()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
m5(a){var s=a.d.l(0),r=$.B6(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pz(){var s,r=J.Di(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cF[$.G6().cK(66)]
return"dart-http-boundary-"+A.dS(r,0,null)}}
A.u7.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.t9(a,b)).length+B.e.v(b).length+2)},
$S:32}
A.vA.prototype={
gn2(){return this.y.length},
gkt(){var s,r
if(this.gcq()==null||!this.gcq().c.a.I("charset"))return B.l
s=this.gcq().c.a.h(0,"charset")
s.toString
r=A.Hl(s)
return r==null?A.u(A.a9('Unsupported encoding "'+s+'".',null,null)):r},
ip(){this.lo()
return new A.dw(A.BN(this.y,t.L))},
gcq(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.HU(s)},
scq(a){this.r.j(0,"content-type",a.l(0))},
pG(){if(!this.w)return
throw A.b(A.x("Can't modify a finalized Request."))}}
A.jk.prototype={}
A.mL.prototype={}
A.i8.prototype={}
A.fA.prototype={
l(a){var s=new A.a1(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a3(0,new A.tS(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.tQ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.w4(null,j),h=$.GG()
i.j7(h)
s=$.GF()
i.fc(s)
r=i.gkI().h(0,0)
r.toString
i.fc("/")
i.fc(s)
q=i.gkI().h(0,0)
q.toString
i.j7(h)
p=t.N
o=A.w(p,p)
for(;;){p=i.d=B.a.em(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gO():n
if(!m)break
p=i.d=h.em(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gO()
i.fc(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.fc("=")
n=i.d=s.em(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gO()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.LQ(i)
n=i.d=h.em(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gO()
o.j(0,p,k)}i.wG()
return A.Bx(r,q,o)},
$S:103}
A.tS.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.GD()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.FU(b,$.Gs(),new A.tR(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:32}
A.tR.prototype={
$1(a){return"\\"+A.q(a.h(0,0))},
$S:48}
A.Ay.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:48}
A.q8.prototype={
$1(a){return a.b===this.a},
$S:106}
A.q9.prototype={
$1(a){return a.b===this.a},
$S:112}
A.dy.prototype={}
A.kY.prototype={
gaA(){return"committedChange"},
q(){var s,r=this,q=A.w(t.N,t.X)
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
B.b.aG(s)
q.j(0,"changedFields",s)
return q}}
A.jq.prototype={
gaA(){return"watchSnapshot"},
q(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.u8.prototype={}
A.iO.prototype={}
A.iR.prototype={}
A.iP.prototype={}
A.iS.prototype={}
A.iL.prototype={}
A.iM.prototype={}
A.iK.prototype={}
A.iQ.prototype={}
A.iN.prototype={}
A.A1.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.I)},
$S:12}
A.vr.prototype={
q(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.w(k,j),h=t.d,g=A.l([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)g.push(s[q].q())
i.j(0,"where",g)
g=A.l([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=A.l([],h)
for(n=B.b.gt(p);n.k();)o.push(n.gn().q())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.q())
h=A.l([],h)
for(g=l.d,s=g.length,q=0;q<g.length;g.length===s||(0,A.r)(g),++q){m=g[q]
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
A.vs.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.I)},
$S:12}
A.vt.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.a4("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.D(a);r.k();)s.push(A.DB(r.gn()))
return s},
$S:117}
A.eD.prototype={
q(){var s,r,q,p,o=this,n=A.w(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)r.push(A.oL(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.oL(o.c))
return n}}
A.vn.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.I)},
$S:12}
A.vo.prototype={
$1(a){return a.b===this.a},
$S:124}
A.aZ.prototype={
a5(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.uQ.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.I)},
$S:12}
A.uP.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.a4("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.D(a);r.k();)s.push(A.Bz(r.gn()))
return s},
$S:128}
A.iE.prototype={
q(){var s=A.w(t.N,t.X)
s.j(0,"kind","leaf")
s.C(0,this.a.q())
return s}}
A.iZ.prototype={
q(){return A.m(["kind","not","child",this.a.q()],t.N,t.X)}}
A.i2.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].q())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.i3.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].q())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mj.prototype={
q(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.vp.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.I)},
$S:12}
A.cB.prototype={
a5(){return"AggregateFn."+this.b}}
A.vH.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.vI.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.I)},
$S:12}
A.mp.prototype={}
A.m4.prototype={
q(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.kS.prototype={
q(){return B.n}}
A.lr.prototype={
q(){return B.n}}
A.kW.prototype={
q(){return B.n}}
A.lp.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.ms.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lV.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.Kf(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mk.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l3.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l2.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.q())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lf.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.q())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lu.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.ky.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.q())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.ll.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mx.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dT.prototype={
a5(){return"TransactionDurability."+this.b}}
A.mS.prototype={
q(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.mT.prototype={
q(){return A.m(["session",this.a],t.N,t.X)}}
A.mV.prototype={
q(){return A.m(["session",this.a],t.N,t.X)}}
A.mX.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.mW.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.mU.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nb.prototype={
q(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nc.prototype={
q(){return A.m(["store",this.a,"spec",this.b.q()],t.N,t.X)}}
A.na.prototype={
q(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kA.prototype={
q(){var s=A.w(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.n9.prototype={
q(){return B.n}}
A.n7.prototype={
q(){return B.n}}
A.mg.prototype={
q(){return B.n}}
A.kZ.prototype={
q(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.aQ.prototype={}
A.fI.prototype={
gaA(){return"ok"},
q(){return B.n}}
A.kT.prototype={
gaA(){return"capabilities"},
q(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e],t.N,t.X)}}
A.ls.prototype={
gaA(){return"health"},
q(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.fV.prototype={
gaA(){return"row"},
q(){return A.m(["row",this.a],t.N,t.X)}}
A.fW.prototype={
gaA(){return"rows"},
q(){return A.m(["rows",this.a],t.N,t.X)}}
A.fE.prototype={
gaA(){return"mutation"},
q(){return A.m(["ids",this.a],t.N,t.X)}}
A.fQ.prototype={
gaA(){return"queryRows"},
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fo.prototype={
gaA(){return"count"},
q(){return A.m(["value",this.a],t.N,t.X)}}
A.fp.prototype={
gaA(){return"distinct"},
q(){return A.m(["values",this.a],t.N,t.X)}}
A.fy.prototype={
gaA(){return"ids"},
q(){return A.m(["ids",this.a],t.N,t.X)}}
A.fe.prototype={
gaA(){return"aggregate"},
q(){return A.m(["value",this.a],t.N,t.X)}}
A.ft.prototype={
gaA(){return"explain"},
q(){return A.m(["plan",this.a],t.N,t.X)}}
A.fY.prototype={
gaA(){return"searchHits"},
q(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.mw.prototype={
q(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.h9.prototype={
gaA(){return"txBegin"},
q(){return A.m(["session",this.a],t.N,t.X)}}
A.jr.prototype={
gaA(){return"watchStarted"},
q(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fN.prototype={
gaA(){return"pruneOutbox"},
q(){return A.m(["removed",this.a],t.N,t.X)}}
A.fl.prototype={
gaA(){return"compact"},
q(){return A.m(["removed",this.a],t.N,t.X)}}
A.jt.prototype={
l(a){return"WireException: "+this.a},
$iH:1}
A.B2.prototype={
$1(a){return a.a===this.a},
$S:133}
A.B3.prototype={
$2(a,b){return B.a.a1(a.a,b.a)},
$S:134}
A.mc.prototype={
a5(){return"PlatformProfile."+this.b}}
A.mI.prototype={
q(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.vS.prototype={
$1(a){return J.c0(a.gaZ())},
$S:28}
A.vT.prototype={
$1(a){return B.a.G(a,"ENABLE_FTS5")},
$S:9}
A.i9.prototype={
a5(){return"ChangeOrigin."+this.b}}
A.dx.prototype={
a5(){return"ChangeAction."+this.b}}
A.aU.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
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
B.b.aG(s)
q.j(0,"changedFields",s)
return q},
R(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aU))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.r.X(b.e,s.e)&&B.r.X(b.f,s.f)&&B.r.X(b.r,s.r)},
gJ(a){var s=this
return A.c7(s.a,s.b,s.c,s.d,B.r.ad(s.e),B.r.ad(s.f),B.r.ad(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a0.prototype={}
A.pn.prototype={
wu(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
wv(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.po.prototype={}
A.pp.prototype={}
A.r0.prototype={}
A.oX.prototype={
ww(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cK(256)
q=this.b.wx(new Uint8Array(A.b3(a)),b,m,this.c)
s=q.a
p=s.length
o=29+p
n=new Uint8Array(o)
n[0]=1
B.f.aw(n,1,13,q.c)
p=13+p
B.f.aw(n,13,p,s)
B.f.aw(n,p,o,q.b.a)
return n},
vS(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.O("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.x("Unsupported ciphertext version 0x"+B.a.iK(B.c.l2(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b3(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b3(B.f.b6(a,n)))
q=new Uint8Array(A.b3(B.f.T(a,13,n)))
try{n=this.b.vT(new A.ja(q,new A.iH(r),s),b,this.c)
return n}catch(o){if(A.E(o) instanceof A.jb)throw A.b(A.x("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d5.prototype={
a5(){return"KindViolation."+this.b}}
A.Ag.prototype={
$2(a,b){return B.a.a1(a.a,b.a)},
$S:149}
A.Ax.prototype={
$1(a){return a.h(0,"detail")},
$S:28}
A.l0.prototype={
a5(){return"ConflictAlgorithm."+this.b}}
A.ii.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
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
if(l!=null)l.unregister(m.d)}}}o.ab(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
ck(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gE(0))
if(s!=null)s.p()}q=this.b.xV(a)
r.j(0,a,q)
return q},
oA(a,b){var s=this.ck(a).lg(new A.bP(b)),r=A.n(s).i("X<J.E,F<k,j?>>")
r=A.N(new A.X(s,new A.qY(),r),r.i("V.E"))
return r},
fb(a,b){this.ck(a).ec(new A.bP(b))},
ku(a){return this.fb(a,B.m)},
aF(a,b){return this.wD(a,b)},
K(a){return this.aF(a,B.m)},
wD(a,b){var s=0,r=A.h(t.H),q=this
var $async$aF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.fb(a,b)
return A.e(null,r)}})
return A.f($async$aF,r)},
ae(a,b){return this.y8(a,b)},
b2(a){return this.ae(a,B.m)},
y8(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.oA(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ae,r)},
bV(a,b,c,d,e,f,g){return this.y5(a,b,c,d,e,f,g)},
aM(a,b,c,d){return this.bV(a,null,b,null,null,c,d)},
eq(a,b,c,d,e){return this.bV(a,b,c,null,null,d,e)},
nB(a,b,c,d){return this.bV(a,b,null,null,null,c,d)},
ci(a,b,c){var s=null
return this.bV(a,s,s,s,s,b,c)},
y_(a,b,c,d){return this.bV(a,null,null,null,b,c,d)},
y0(a,b,c,d,e){return this.bV(a,b,c,d,e,null,null)},
y4(a,b,c,d,e,f){return this.bV(a,b,c,null,d,e,f)},
y3(a,b,c,d,e){return this.bV(a,null,b,null,c,d,e)},
y5(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bV=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.q(c)
if(d!=null)n+=" OFFSET "+A.q(d)
o=g==null?B.m:g
q=p.ae(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
cc(a,b,c,d){return this.xn(0,b,c,d)},
aE(a,b,c){return this.cc(0,b,c,null)},
xn(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cc=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dJ(new A.T(c,n),new A.qX(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.ag(c.a,"?",!1,m),", ")
j=A.D2(d)
o=o.i("as<2>")
o=A.N(new A.as(c,o),o.i("o.E"))
p.fb("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ap(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cc,r)},
M(a,b,c,d){return this.yC(a,b,c,d)},
yC(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$M=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dJ(new A.T(b,n),new A.qZ(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.D2(null)+' "'+a+'" SET '+m
o=A.N(new A.as(b,o.i("as<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.C(o,d)}p.fb(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$M,r)},
W(a,b,c){return this.vU(a,b,c)},
vU(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$W=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.C(n,c)}p.fb(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$W,r)},
vK(a,b,c){this.b.vL(B.bs,!0,!1,new A.qW(b),c)},
a2(a,b){return this.yy(a,b,b)},
yy(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.ku("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.ku("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.ku("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$iqv:1}
A.qY.prototype={
$1(a){return A.ba(a,t.N,t.X)},
$S:150}
A.qX.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.qZ.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.qW.prototype={
$1(a){var s=a.gm(0)===0?null:a.gE(a)
return this.a.$1(s)},
$S:168}
A.pM.prototype={}
A.ih.prototype={
kj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aO(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=$.Cy()
if(!k.b.test(l))A.u(A.aR('Field "'+l+u.Z))
if(B.bd.G(0,l))throw A.b(A.aR('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aR('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aR(e+l+'" cannot be unique.'))
if(B.b.bQ(o,new A.qV(m)))throw A.b(A.aR(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.G(k,l)}else k=!1
if(k)throw A.b(A.aR(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.r)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.an(l,l.gm(0),k.i("an<J.E>")),k=k.i("J.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.G(0,j)&&!B.bd.G(0,j))throw A.b(A.aR('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.af.X(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.Hi(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.re(u.r))
if(q.b&&!A.DJ(r.a,3,34))throw A.b(A.re("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.an(r,r.gm(0),p.i("an<J.E>")),p=p.i("J.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.G(0,o))throw A.b(A.aR('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gac(),r=r.gt(r);r.k();){q=r.gn()
A.Da(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aR('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aR('Ref field "'+m.a+'" must declare its target store.'))}return new A.pM(f.pC(a),f.pB(a),f.pA(a),d)},
pC(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.glk()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.qU(),A.a_(k).i("X<1,k>")).B(0,", ")
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
pB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("X<J.E,k>")
j=A.N(new A.X(l,A.An(),k),k.i("V.E"))
if(!l.G(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.b1?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.r)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bQ(s,new A.qT(h)))continue
k=h.a
g=A.z(p+k,e,d)
f=A.z(q,e,d)
k=A.z(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.z("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.r)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.z(o+s,e,d)
l=A.z(q,e,d)
g=A.z(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.z(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
pA(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.p
s=A.l([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<J.E,k>")
n=A.N(new A.X(p,A.An(),o),o.i("V.E"))
m=new A.qS(r,a0.c)
l=new A.X(p,new A.qP(m),o).B(0,f)
k=new A.X(p,new A.qQ(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.qR(),A.a_(n).i("X<1,k>")).B(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.qV.prototype={
$1(a){var s=a.a
return s.G(s,this.a.a)},
$S:61}
A.qU.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:7}
A.qT.prototype={
$1(a){var s=a.a
return s.G(s,this.a.a)},
$S:61}
A.qS.prototype={
$2(a,b){return A.FD(this.a,this.b,a,b)},
$S:175}
A.qP.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.qQ.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.qR.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dI.prototype={
l(a){return A.dt(this).l(0)+": "+this.a},
$iH:1}
A.eL.prototype={}
A.eK.prototype={}
A.eA.prototype={}
A.fi.prototype={}
A.fL.prototype={}
A.fv.prototype={}
A.cO.prototype={}
A.fT.prototype={}
A.fX.prototype={}
A.eF.prototype={}
A.hd.prototype={}
A.fx.prototype={}
A.h2.prototype={}
A.fD.prototype={}
A.fm.prototype={}
A.em.prototype={}
A.fS.prototype={}
A.AX.prototype={
$1(a){if(typeof a!="string")return a
return this.a.eo(a)},
$S:16}
A.ts.prototype={}
A.lg.prototype={
a5(){return"DurabilityClass."+this.b}}
A.mJ.prototype={}
A.uN.prototype={
bE(a){var s,r=this.a
if(!r.I(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.oz(s)
r.toString
t.G.a(r)}return r},
lh(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gE(0))
if(b==null)s=null
else{s=A.oz(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
xo(a){var s,r,q,p=a.a
if(p===0){this.a.ab(0)
return}s=this.a
if(p>=s.a){s.ab(0)
return}for(p=A.hw(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.lH.prototype={
aT(a){return this.yi(a)},
yi(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dx
h=a.a
if(i.I(h))throw A.b(A.aR('Duplicate store name "'+h+'" in this open call.'))
p=A.BJ(a)
o=q.w
if(o.e===B.aA&&p.b.length!==0)throw A.b(new A.hd('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fZ(a,p),$async$aT)
case 2:n=new A.ih(o).kj(a)
o=a.w
if(o!=null)A.Mk(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aM("lp_stores",1,"store = ?",[h]),$async$aT)
case 3:m=c
l=J.L(m)
s=l.gF(m)?4:6
break
case 4:s=7
return A.a(o.K(n.b),$async$aT)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.K(l[j]),$async$aT)
case 11:case 9:l.length===k||(0,A.r)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.K(l[j]),$async$aT)
case 15:case 13:l.length===k||(0,A.r)(l),++j
s=12
break
case 14:l=a.b
k=q.ch
s=16
return A.a(o.aE(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a7(a.q(),null),"created_at",k.$0()],t.N,t.X)),$async$aT)
case 16:s=17
return A.a(A.fC(o,0,0,"create:"+h,k,l),$async$aT)
case 17:s=5
break
case 6:l=J.S(l.gE(m),"schema_ver")
l.toString
A.ap(l)
k=a.b
if(l>k)throw A.b(A.DG('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fB(q,a,l),$async$aT)
case 20:case 19:s=21
return A.a(q.bN(a),$async$aT)
case 21:s=22
return A.a(o.M("lp_stores",A.m(["definition_json",B.h.a7(a.q(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aT)
case 22:case 5:i.j(0,h,new A.mJ(a,p,new A.uN(A.w(t.N,t.b))))
s=23
return A.a(q.dX(h,p),$async$aT)
case 23:return A.e(null,r)}})
return A.f($async$aT,r)},
fZ(a,b){return this.pq(a,b)},
pq(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aM("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fZ)
case 3:j=d
if(J.bA(j)){s=1
break}o=null
try{n=J.S(J.c0(j),"v")
o=A.Ir(typeof n=="string"?B.h.az(n,null):n)}catch(i){if(A.E(i) instanceof A.dI){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.aq(B.j.v(B.e.v(A.ai(o.q()))).a)!==A.aq(B.j.v(B.e.v(A.ai(b.q()))).a))throw A.b(A.aR('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fZ,r)},
dX(a,b){return this.tQ(a,b)},
tQ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ai(b.q())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aM("lp_meta",1,"k = ?",[p]),$async$dX)
case 5:s=k.bA(d)?2:4
break
case 2:s=6
return A.a(n.aE(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dX)
case 6:s=3
break
case 4:s=7
return A.a(n.M("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dX)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dX,r)},
i7(a){return this.vx(a)},
vx(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$i7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$i7)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)},
bN(a){return this.ug(a)},
ug(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bN=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.eq("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a1]),$async$bN)
case 3:a2=a6
if(J.bA(a2)){s=1
break}o=null
try{n=J.S(J.c0(a2),"definition_json")
m=typeof n=="string"?B.h.az(n,null):n
l=m
l.toString
k=t.X
o=A.pt(A.ba(t.f.a(l),t.N,k),k)}catch(a4){if(A.E(a4) instanceof A.cO){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.af.X(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.jh()
$.ks()
f.aB()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.K("DROP TRIGGER IF EXISTS "+('"'+A.z(a1+d,'"','""')+'"')),$async$bN)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.K("DROP TABLE IF EXISTS "+('"'+A.z(a1+"_fts",'"','""')+'"')),$async$bN)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.ih(p.w).kj(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.K(l[e]),$async$bN)
case 16:case 14:l.length===k||(0,A.r)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.z(l,'"','""')
s=17
return A.a(a0.K("INSERT INTO "+('"'+k+'"')+"("+('"'+A.z(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bN)
case 17:k=h.a
c=k.$ti.i("X<J.E,k>")
b=new A.X(k,A.An(),c).B(0,", ")
a=new A.X(k,new A.tt(a3,h),c).B(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.K("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bN)
case 18:case 12:if(f.b==null)f.b=$.me.$0()
l=a3.b
s=19
return A.a(A.fC(a0,f.gna(),l,"fts:"+a1,p.ch,l),$async$bN)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
ih(a){return this.vW(a)},
vW(a){var s=0,r=A.h(t.H),q=this,p
var $async$ih=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$ih)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ih,r)},
ap(a){var s=this.dx.h(0,a)
if(s==null)throw A.b(A.x('No store "'+a+'" registered in this LocalPocket.'))
return s},
aY(a,b,c){var s
if(A.mY(this)!=null)A.u(A.x(u.L))
s=this.b
s===$&&A.A()
return s.aY(a,b,c)},
a2(a,b){return this.aY(a,B.o,b)},
nL(a,b){++this.y.e
return this.r.aF(a,B.m)},
l3(a,b){this.y.nD()
return this.r.ae(a,b)},
dc(a){return this.vs(a)},
vr(){return this.dc(null)},
vs(a){var s=0,r=A.h(t.H),q=this,p
var $async$dc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.K("ANALYZE"),$async$dc)
case 5:s=3
break
case 4:s=6
return A.a(p.K("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$dc)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dc,r)},
ey(){var s=0,r=A.h(t.H),q=this
var $async$ey=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.K("PRAGMA wal_checkpoint(TRUNCATE)"),$async$ey)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ey,r)},
iX(){var s=0,r=A.h(t.H),q=this
var $async$iX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.K("PRAGMA wal_checkpoint(PASSIVE)"),$async$iX)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iX,r)},
ex(a){return this.yK(a)},
yJ(){return this.ex(null)},
yK(a){var s=0,r=A.h(t.H),q=this,p
var $async$ex=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a!=null?2:4
break
case 2:s=5
return A.a(p.K("PRAGMA incremental_vacuum("+A.q(a)+")"),$async$ex)
case 5:s=3
break
case 4:s=6
return A.a(p.K("VACUUM"),$async$ex)
case 6:case 3:return A.e(null,r)}})
return A.f($async$ex,r)},
fv(a){return this.xW(a)},
nz(){return this.fv(1e4)},
xW(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$fv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.tw(o),t.P),$async$fv)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
dv(a){return this.yu(a)},
yu(a){var s=0,r=A.h(t.H),q=this,p
var $async$dv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dx,p=new A.bF(p,p.r,p.e,A.n(p).i("bF<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.n0(p.d,a),$async$dv)
case 4:s=2
break
case 3:s=5
return A.a(q.nz(),$async$dv)
case 5:s=6
return A.a(q.ey(),$async$dv)
case 6:s=7
return A.a(q.vr(),$async$dv)
case 7:return A.e(null,r)}})
return A.f($async$dv,r)},
eb(a,b,c){return this.vG(a,b,c)},
n0(a,b){return this.eb(a,null,b)},
vG(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$eb=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:j={}
i=b==null?p.ch.$0():b
h=i-B.c.N(c.a,1000)
j.a=0
o=p.ap(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ae("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$eb)
case 5:l=e
if(J.bA(l)){s=4
break}if(A.mY(p)!=null)A.u(A.x(u.L))
k=p.b
k===$&&A.A()
s=6
return A.a(k.aY(new A.tv(j,p,l,a,h,o),B.o,n),$async$eb)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eb,r)},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.dy){s=1
break}n.dy=!0
m=n.a$
m.a.p()
m.b.p()
n.fr.b.ab(0)
p=4
s=7
return A.a(n.r.K("PRAGMA optimize"),$async$p)
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
return A.a(n.r.p(),$async$p)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$p,r)}}
A.tt.prototype={
$1(a){return A.FD(this.a.a,this.b.c,"",a)},
$S:7}
A.tw.prototype={
$1(a){return this.o1(a)},
o1(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b2("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.D(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.G(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.W("lp_outbox","store = ? AND record_id = ?",[m,A.G(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tv.prototype={
$1(a){return this.o0(a)},
o0(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.D(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ax,h=h.ay
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.G(f)
a1=J
s=4
return A.a(a0.ae("SELECT b.id FROM "+('"'+A.z(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.bA(a4)){s=2
break}s=5
return A.a(a0.ae("SELECT * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.L(e)
c=d.gU(e)?A.ch(i,d.gE(e),g,h):null
s=6
return A.a(A.cA(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.W(n,"id = ?",[f]),$async$$1)
case 7:d=A.at([f],m)
l.push(new A.a0(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("al<o.E>")
a=A.lM(b.i("o.E"))
a.C(0,new A.al(new A.T(c,d),new A.tu(),b))
a2.bd(new A.aU(n,f,B.H,B.aV,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tu.prototype={
$1(a){return a!=="id"},
$S:9}
A.nB.prototype={
yo(){var s,r,q=this,p=new A.az(new A.t($.C,t.D),t.h)
q.e=p
s=q.a.a
s.d.aX(new A.y2(q,p),t.H)
r=s.as
s=q.gwQ()
if(r.a>0)A.cR(r,s)
else A.cR(B.D,s)},
kw(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.ai()},
cH(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cH=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.e;++b2.b
b2.c+=b1}b3=new A.jh()
$.ks()
b3.aB()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aW&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nL("PRAGMA synchronous=FULL",null),$async$cH)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.y1(m,i,h,l,g),t.P),$async$cH)
case 10:for(b5=g,b6=b5.length,b7=0;b7<b5.length;b5.length===b6||(0,A.r)(b5),++b7){f=b5[b7]
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
if((b8.a.a&30)!==0)A.u(A.x("Future already completed"))
b8.ao(A.f3(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.u(A.x("Future already completed"))
b8.aO(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dx,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.xo(a0.b)
b6.wu(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a1=f[b7]
b6.wv(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.E(c2)
a3=A.ae(c2)
for(f=g,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a4=f[b7]
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
if((b6.a.a&30)!==0)A.u(A.x("Future already completed"))
b6.ao(A.f3(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.u(A.x("Future already completed"))
b6.ao(A.f3(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.nL("PRAGMA synchronous=NORMAL",null),$async$cH)
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
a4=k.gwt();++f.a
f.d+=a4
b1.tr()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.r)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.u(A.x("Future already completed"))
a4.ao(A.f3(new A.bi("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cH,r)}}
A.y2.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cH(),$async$$0)
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
A.y1.prototype={
$1(a){return this.op(a)},
op(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.BS(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.oN(new A.y_(a,a0),null,A.m([$.ku(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.f_([B.b.gar(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.E(a1)
l=A.ae(a1)
o.e.push(new A.f_([B.b.gar(a.c),null,m,l]))
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
return A.a(A.oN(new A.y0(a0,k),null,A.m([$.ku(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.f_([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.E(a2)
h=A.ae(a2)
e.push(new A.f_([k,null,i,h]))
s=16
break
case 13:s=1
break
case 16:case 11:a.length===g||(0,A.r)(a),++b
s=10
break
case 12:case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:65}
A.y_.prototype={
$0(){return B.b.gar(this.a.c).a.$1(this.b)},
$S:67}
A.y0.prototype={
$0(){return this.a.a2(new A.xZ(this.b),t.z)},
$S:67}
A.xZ.prototype={
$1(a){return this.a.a.$1(a)},
$S:183}
A.hm.prototype={}
A.vz.prototype={}
A.wl.prototype={
aY(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.t($.C,t._)
r.c.push(new A.hm(a,new A.az(s,t.jk)))
return s.an(new A.ws(c),c)}return this.uO(a,b,c)},
uO(a,b,c){var s,r,q,p=this
if(p.a.as.a>0){s=p.c
if(s!=null)s.kw()}s=A.l([],t.i4)
r=new A.nB(p,b,s)
p.c=r
r.yo()
q=new A.t($.C,t._)
s.push(new A.hm(a,new A.az(q,t.jk)))
return q.an(new A.wo(c),c)},
y9(a,b){var s,r=this.a
if(r.as.a>0){s=this.c
if(s!=null)s.kw()}return r.d.aX(new A.wr(this,a,b),b)},
tr(){if(++this.d<64)return
this.d=0
A.cR(B.D,new A.wn(this))}}
A.ws.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.wo.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.wr.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.wq(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.wq.prototype={
$1(a){return this.on(a,this.c)},
on(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.BS(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.oN(new A.wp(p.b,o,n),null,A.m([$.ku(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(qv)")}}
A.wp.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.wn.prototype={
$0(){this.a.a.a.iX().mZ(new A.wm())},
$S:0}
A.wm.prototype={
$1(a){},
$S:29}
A.f0.prototype={$iH:1}
A.oi.prototype={}
A.hA.prototype={}
A.rY.prototype={
p7(a){var s=this,r=s.a.a.a$.b
r=new A.b1(r,A.n(r).i("b1<1>")).aV(new A.tb(s))
s.c!==$&&A.cz()
s.c=r},
wU(a){var s,r,q,p=this
A:{if(a instanceof A.m4){s=p.hI(a.a,a.b)
break A}if(a instanceof A.kS){r=p.a.c
s=A.bq(new A.kT(r.a,r.b,r.c,r.d,r.e===B.aA),t.V)
break A}if(a instanceof A.lr){s=A.bq(new A.ls(!0,p.a.c.a),t.V)
break A}if(a instanceof A.kW){s=p.p().an(new A.tc(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lp){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.td(s,p),new A.te())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ms){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tk(s,p),new A.tl())
break A}if(a instanceof A.lV){s=p.tm(a.a,a.b,a.c)
break A}if(a instanceof A.mk){s=p.tI(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.l3){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tm(s,p),A.Fn())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.l2){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.by(q,new A.tn(s,p),A.Fn())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lf){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.by(q,new A.to(s,p),A.LD())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lu){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tp(s,p),A.LF())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.ky){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
q=a.e
s.a=q
s=p.by(q,new A.tq(s,p),A.LC())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ll){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tr(s,p),A.LE())
break A}if(a instanceof A.mx){s=p.uA(a.a,a.b,a.c)
break A}if(a instanceof A.mS){s=p.pt(a.a,a.b)
break A}if(a instanceof A.mT){s=p.f0(a.a,!0)
break A}if(a instanceof A.mV){s=p.f0(a.a,!1)
break A}if(a instanceof A.mX){s=p.hR(a.a,a.b)
break A}if(a instanceof A.mW){s=p.hP(a.a,a.b)
break A}if(a instanceof A.mU){s=p.hN(a.a,a.b)
break A}if(a instanceof A.nb){s=p.hY(a.a,a.b)
break A}if(a instanceof A.nc){s=p.v6(a.a,a.b)
break A}if(a instanceof A.na){s=p.ka(a.a)
break A}if(a instanceof A.kA){s=p.a.a.dc(a.a).an(new A.tf(),t.V)
break A}if(a instanceof A.n9){s=p.a.a.ey().an(new A.tg(),t.V)
break A}if(a instanceof A.n7){s=p.a.a.yJ().an(new A.th(),t.V)
break A}if(a instanceof A.mg){s=p.a.a.nz().an(new A.ti(),t.V)
break A}if(a instanceof A.kZ){s=p.a.a.n0(a.a,A.d2(0,a.b,0)).an(new A.tj(),t.V)
break A}throw A.b(A.fR(u.P))}return s},
hI(a,b){return this.tG(a,b)},
tG(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hI=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dx,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.pt(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:s=9
return A.a(n.aT(j),$async$hI)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.u(A.x('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.BJ(j)
e=new A.a1("")
A.ci(e,g.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c4()
b=A.cY(c)
b.u(0,d)
b.p()
b=A.aq(c.a.a)
e=new A.a1("")
A.ci(e,f.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c4()
a=A.cY(c)
a.u(0,d)
a.p()
if(b!==A.aq(c.a.a))throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.u(A.x('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a1("")
A.ci(e,h.c.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c4()
b=A.cY(c)
b.u(0,d)
b.p()
b=a0!==A.aq(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.r)(a1),++k
s=3
break
case 5:q=B.v
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
dL(a,b){var s,r,q,p=this.a.a,o=p.ap(a)
if(b!=null){s=this.d7(b)
r=A.Df(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.u(A.x('Transaction session "'+b+'" has no executor.'))
return new A.fk(p,o,q.b,this.d7(b).r)}return new A.fk(p,o,null,null)},
pI(a){return this.dL(a,null)},
tm(a,b,c){return this.by(c,new A.t0(this,a,c,b),new A.t1())},
ba(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.dL(a,c),e=t.fC,d=new A.mi(f.a,f.b.a,f.c,A.l([],e),A.l([],e),A.l([],t.k),A.l([],t.fi),g,!1,g,!1,!1,g,!1,!1)
for(f=b.a,e=f.length,s=0;s<f.length;f.length===e||(0,A.r)(f),++s)d=this.po(d,f[s])
for(f=b.b,e=f.length,r=t.N,q=t.X,p=t.d,s=0;s<f.length;f.length===e||(0,A.r)(f),++s){o=f[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
if(l.b===B.bc)n.push(A.m([l.a,l.c],r,q))}d=d.xS(n)}k=b.c
if(k!=null){f=A.AQ(k)
d.kb(f)
A.Cb(f)
j=A.zZ(f,!0)
i=d.h0()
i.d.push(new A.b0(j.a,j.b))
i.f.push(f)
d=i}for(f=b.d,e=f.length,s=0;s<f.length;f.length===e||(0,A.r)(f),++s,d=i){h=f[s]
q=h.a
d.cV(q)
i=d.h0()
i.r.push(new A.cn(q,h.b))}f=b.r
if(f!=null)d=d.lO(A.bG(f,!0,r))
if(b.w)d=d.pZ(!0)
if(b.x)d=d.q_(!0)
if(b.f)d=d.pX(!0)
else{f=b.e
if(f!=null){if(f<0)A.u(A.av("Limit must be non-negative, got "+A.q(f)+".",g))
d=d.q0(f)}}return d},
po(a,b){var s
switch(b.b.a){case 0:return a.yP(0,b.a,b.c)
case 1:return a.yX(0,b.a,b.c)
case 2:return a.yQ(0,b.a,b.c)
case 3:return a.yR(0,b.a,b.c)
case 4:return a.yV(0,b.a,b.c)
case 5:return a.yW(0,b.a,b.c)
case 6:return a.yS(0,b.a,b.d)
case 7:s=b.d
if(s==null)s=B.m
if(s.length!==2)throw A.b(A.O("between requires exactly two values.",null))
return a.yM(0,b.a,new A.a5(s[0],s[1]))
case 8:return a.yY(0,b.a,A.a7(b.c))
case 9:return a.yO(0,b.a,A.a7(b.c))
case 10:return a.yN(0,b.a,A.a7(b.c))
case 11:return a.yU(0,b.a,!0)
case 12:return a.yT(0,b.a,!0)}},
tI(a,b,c){return this.by(c,new A.t2(this,b,a,c),new A.t3())},
uA(a,b,c){return this.by(c,new A.t6(this,a,c,b),new A.t7())},
pt(a,b){var s,r="tx"+ ++this.f,q=$.C,p=t.D,o=t.h,n=new A.t(q,p),m=new A.oi(new A.az(new A.t(q,p),o),new A.az(n,o),A.l([],t.mc))
this.d.j(0,r,m)
s=this.a.a
o=new A.t_(m)
if(a){if(A.mY(s)!=null)A.u(A.x(u.L))
q=s.b
q===$&&A.A()
o=q.y9(o,t.H)
q=o}else{q=b===B.bm?B.aW:B.o
q=s.aY(o,q,t.H)}m.w!==$&&A.cz()
m.w=q
return n.an(new A.rZ(r),t.V)},
f0(a,b){return this.uJ(a,b)},
uJ(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$f0=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d7(a)
for(l=h.e,k=A.a_(l).i("bV<1>"),l=new A.bV(l,k),l=new A.an(l,l.gm(0),k.i("an<V.E>")),k=k.i("V.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.u(A.x("Future already completed"))
j.aO(null)}h.f=!b
h.c.ai()
p=4
l=h.w
l===$&&A.A()
s=7
return A.a(l,$async$f0)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.E(g) instanceof A.f0){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.H(0,a)
s=n.pop()
break
case 6:q=B.v
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f0,r)},
hR(a,b){return this.ux(a,b)},
ux(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d7(a)
n=$.C
m=t.D
l=t.h
k=new A.t(n,m)
j=new A.hA(b,new A.az(new A.t(n,m),l),new A.az(k,l))
l=o.r.a2(new A.t5(j),t.H)
j.f!==$&&A.cz()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hR)
case 3:q=B.v
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
hP(a,b){return this.uu(a,b)},
uu(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hP=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d7(a).e
f=B.b.nl(g,new A.t4(b))
if(f<0)throw A.b(A.x('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a_(g).i("bV<1>")
l=A.N(new A.bV(g,l),l.i("V.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bS(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.u(A.x("Future already completed"))
i.aO(null)
p=7
i=m.f
i===$&&A.A()
s=10
return A.a(i,$async$hP)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.E(e) instanceof A.f0))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:B.b.kW(g,f,g.length)
q=B.v
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hP,r)},
hN(a,b){return this.ul(a,b)},
ul(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hN=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d7(a).e
j=A.Df(k)
if(j==null||j.a!==b)throw A.b(A.x('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.ai()
p=4
m=j.f
m===$&&A.A()
s=7
return A.a(m,$async$hN)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.E(i) instanceof A.f0)throw i
else throw i
s=6
break
case 3:s=2
break
case 6:k.pop()
q=B.v
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hN,r)},
hY(a,b){return this.v7(a,b)},
v7(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.ap(a)
s=3
return A.a(p.pI(a).bE(b),$async$hY)
case 3:o="w"+ ++p.f
n=A.C0()
n.sng(new A.m3(l,b,m,B.aX).j8().xy(new A.t8(p,o),new A.t9(p,n,o)))
p.e.j(0,o,n.bb())
q=A.bq(new A.jr(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hY,r)},
v6(a,b){var s=this,r="w"+ ++s.f,q=s.ba(a,b,null)
s.e.j(0,r,new A.ml(q,q.ge4(),B.aX).j8().aV(new A.ta(s,r)))
return A.bq(new A.jr(r),t.V)},
ka(a){return this.uZ(a)},
uZ(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$ka=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.e.H(0,a)
if(o!=null)o.D()
q=B.v
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ka,r)},
d7(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.x('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.x('Transaction session "'+a+'" is not ready yet.'))
return s},
hZ(a,b,c){return this.va(a,b,c)},
by(a,b,c){return this.hZ(a,b,c,t.z)},
va(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hZ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d7(a)
o=c
s=3
return A.a(b.$0(),$async$hZ)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hZ,r)},
p(){var s=0,r=A.h(t.H),q=this,p,o
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.e,o=new A.aT(p,p.r,p.e,A.n(p).i("aT<2>"))
case 2:if(!o.k()){s=3
break}s=4
return A.a(o.d.D(),$async$p)
case 4:s=2
break
case 3:p.ab(0)
p=q.c
p===$&&A.A()
p.D()
s=5
return A.a(q.a.a.p(),$async$p)
case 5:s=6
return A.a(q.b.p(),$async$p)
case 6:return A.e(null,r)}})
return A.f($async$p,r)}}
A.tb.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cI(r,t.N,t.X)
s=a.f
s=s==null?null:A.cI(s,t.N,t.X)
this.a.b.u(0,new A.kY(a.a,a.b,a.c,a.d,r,s,A.d6(a.r,t.N)))},
$S:189}
A.tc.prototype={
$1(a){return B.v},
$S:30}
A.td.prototype={
$0(){var s=this.a
return this.b.dL(s.c,s.a).bE(s.b)},
$S:192}
A.te.prototype={
$1(a){return new A.fV(a)},
$S:193}
A.tk.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dL(o.c,o.a).bE(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.r)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:208}
A.tl.prototype={
$1(a){return new A.fW(a)},
$S:209}
A.tm.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).ia()},
$S:71}
A.tn.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).ic(s.c)},
$S:71}
A.to.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).ij(s.c)},
$S:217}
A.tp.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).iB()},
$S:55}
A.tq.prototype={
$0(){var s=this,r=s.a
switch(r.d.a){case 0:r=s.b.ba(r.e,r.b,r.a).cU("SUM",r.c)
break
case 1:r=s.b.ba(r.e,r.b,r.a).cU("AVG",r.c)
break
case 2:r=s.b.ba(r.e,r.b,r.a).cU("MIN",r.c)
break
case 3:r=s.b.ba(r.e,r.b,r.a).cU("MAX",r.c)
break
default:r=null}return r},
$S:73}
A.tr.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).il()},
$S:74}
A.tf.prototype={
$1(a){return B.v},
$S:30}
A.tg.prototype={
$1(a){return B.v},
$S:30}
A.th.prototype={
$1(a){return B.v},
$S:30}
A.ti.prototype={
$1(a){return new A.fN(a)},
$S:75}
A.tj.prototype={
$1(a){return new A.fl(a)},
$S:76}
A.t0.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dL(p.b,a1)
a0.a.a.c===$&&A.A()
o=p.d
n=o instanceof A.iO
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.fA(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.hU(B.Z,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.p
q=a0
s=1
break
case 4:n=o instanceof A.iR
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.l4(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.hU(B.a_,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.p
q=a0
s=1
break
case 11:k=o instanceof A.iP
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.nA(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.ml(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 18:k=o instanceof A.iS
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nM(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bv(i,B.a_),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iL
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.kO(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cs(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.iM
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.nx(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.eQ(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.N(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iK
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.kf(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.hT(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.iQ
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.kZ(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.hT(B.E,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.iN
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
return A.a(a2.d5(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.fR(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:55}
A.t1.prototype={
$1(a){return new A.fE(a)},
$S:77}
A.t2.prototype={
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
return A.a(o.ba(n,l,m).q1(!0,k).ca(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.ba(n,l,m).pY(k).ca(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.ba(p.c,l,p.d).ca()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:78}
A.t3.prototype={
$1(a){return new A.fQ(a.a,a.d,a.e,a.b,a.c)},
$S:79}
A.t6.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dL(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.vG(m,l,o.c,n.a)
if(l.w==null)A.u(A.re('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.u(A.re(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.u(A.av("Limit must be non-negative, got "+A.q(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.ca()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:80}
A.t7.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.D(a);s.k();){r=s.gn()
q.push(new A.mw(r.a,r.b))}return new A.fY(q)},
$S:72}
A.t_.prototype={
nZ(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.ai()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nZ(a)},
$S:5}
A.rZ.prototype={
$1(a){return new A.h9(this.a)},
$S:83}
A.t5.prototype={
$1(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.ai()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t4.prototype={
$1(a){return a.a===this.a},
$S:84}
A.t8.prototype={
$1(a){var s=a==null?B.b5:A.l([a],t.d)
this.a.b.u(0,new A.jq(this.b,s))},
$S:85}
A.t9.prototype={
$1(a){this.b.bb().D()
this.a.e.H(0,this.c)},
$S:29}
A.ta.prototype={
$1(a){this.a.b.u(0,new A.jq(this.b,a))},
$S:86}
A.nT.prototype={}
A.u3.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:70}
A.u4.prototype={
$2(a,b){return B.c.a1(a.a,b.a)},
$S:88}
A.u0.prototype={
$1(a){return a.h(0,"name")},
$S:28}
A.u2.prototype={
$1(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.D(q.a),k=q.b,j=q.c,i=j.ax,j=j.ay,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.ch(k,p,i,j)
n=o
A.HZ(k,n)
g=J.S(o,"id")
g.toString
A.G(g)
m=A.dr(k,J.v(J.S(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aE(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:65}
A.ma.prototype={
y7(a){if(a>this.w)this.w=a},
nD(){return this.f++}}
A.da.prototype={}
A.aa.prototype={}
A.c6.prototype={}
A.dv.prototype={}
A.d0.prototype={}
A.b0.prototype={}
A.cn.prototype={}
A.ya.prototype={}
A.mi.prototype={
cv(a,b){var s=this.ge4(),r=this.c
if(r==null)return s.l3(a,b)
s.y.nD()
return r.ae(a,b)},
c2(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bG(i.d,!0,h)
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
return new A.mi(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
h0(){var s=null
return this.c2(s,s,s,s,s,s,s,s,s)},
lO(a){var s=null
return this.c2(s,s,s,s,s,s,s,a,s)},
pZ(a){var s=null
return this.c2(s,s,s,a,s,s,s,s,s)},
q_(a){var s=null
return this.c2(s,s,s,s,a,s,s,s,s)},
pX(a){var s=null
return this.c2(a,s,s,s,s,s,s,s,s)},
q0(a){var s=null
return this.c2(s,s,s,s,s,a,s,s,s)},
q2(a,b,c){var s=null
return this.c2(s,s,s,s,s,s,a,b,c)},
q1(a,b){var s=null
return this.c2(s,a,b,s,s,s,s,s,s)},
pY(a){var s=null
return this.c2(s,s,a,s,s,s,s,s,s)},
cV(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aR('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.av('Unknown field "'+a+'" for query.',a))},
bg(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cV(a0)
s='"'+A.z(a0,'"','""')+'"'
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
if(k)r.push(new A.b0(s+" IN ("+B.b.B(A.ag(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b0(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b0(s+b,[A.kl(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b0(s+b,["%"+A.kl(a3)]))
g=a2!=null
if(g)r.push(new A.b0(s+b,["%"+A.kl(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b0(s+" IS NULL",B.m))
e=a8===!0
if(e)r.push(new A.b0(s+" IS NOT NULL",B.m))
d=this.h0()
B.b.C(d.d,r)
c=A.l([],t.k)
if(q)c.push(new A.aa(a0,"eq",[a4]))
if(p)c.push(new A.c6(new A.aa(a0,"eq",[b2])))
if(o)c.push(new A.aa(a0,"gt",[a5]))
if(n)c.push(new A.aa(a0,"gte",[a6]))
if(m)c.push(new A.aa(a0,"lt",[b0]))
if(l)c.push(new A.aa(a0,"lte",[b1]))
if(k)c.push(new A.aa(a0,"inValues",a7))
if(j)c.push(new A.aa(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.aa(a0,"startsWith",[b3]))
if(h)c.push(new A.aa(a0,"endsWith",[a3]))
if(g)c.push(new A.aa(a0,"contains",[a2]))
if(f)c.push(new A.aa(a0,"isNull",B.m))
if(e)c.push(new A.c6(new A.aa(a0,"isNull",B.m)))
B.b.C(d.f,c)
return d},
yP(a,b,c){var s=null
return this.bg(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
yX(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
yQ(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
yR(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
yV(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
yW(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
yS(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
yM(a,b,c){var s=null
return this.bg(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
yY(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
yO(a,b,c){var s=null
return this.bg(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
yN(a,b,c){var s=null
return this.bg(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
yU(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
yT(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
xS(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.l([],j)
q.a3(0,new A.vm(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.h0()
o.e.push(new A.b0("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.r)(a),++r){q=a[r]
if(q.gU(0)){m=A.l([],j)
for(l=q.gac().gt(0);l.k();){k=l.gn()
m.push(new A.aa(k.a,"eq",[k.b]))}s.push(new A.dv(m))}}o.f.push(new A.d0(s))
return o},
kb(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.aa
r=s?a.a:l
if(s){this.cV(r)
break A}s=a instanceof A.c6
q=s?a.a:l
if(s){this.kb(q)
break A}p=a instanceof A.dv
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d0
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.r)(n),++m)this.kb(n[m])
break A}},
gcr(){var s,r=A.N(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.gY(r).a!=="id"
else s=!1
if(s)r.push(B.cT)
return r},
glL(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gcr(),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
s.push(new A.cn(o.a,!o.b))}}else s=this.gcr()
return s},
gmD(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gcr(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jY(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.Dq('Query on "'+this.gaS()+'" requires .limit(n) or .all().'))
return s},
gaS(){return this.b.a},
ge4(){return this.a},
eH(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
e=f.z
if(!e)b.push("archived = 0")
s=f.Q
if(!s)b.push("hidden = 0")
if(b.length!==0)d.push(B.b.B(b," AND "))
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.C(c,o.b)}for(r=f.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.C(c,o.b)}r=f.as
if(r!=null){n=f.q5(r)
m=f.m9(f.glL(),n.a)
d.push(m.a)
B.b.C(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.z(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.z(a,'"','""')+'"')+") AS v"}else r=f.guC()
k=r}j=f.glL()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.vh(),A.a_(j).i("X<1,k>")).B(0,", ")
h=A.Ii(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.q(a0)+"|af:"+A.q(a)+"|df:null",new A.vi(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jY():a3
g=e}return new A.a5(h+(g==null?"":" LIMIT "+A.q(g)),c)},
jl(a){return this.eH(null,null,!1,!1,a)},
pO(a,b){return this.eH(a,b,!1,!1,null)},
pM(){return this.eH(null,null,!1,!1,null)},
pP(a,b,c){return this.eH(a,null,b,c,null)},
pN(a){return this.eH(null,null,!1,a,null)},
guC(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.lz())return"*"
o=A.N(o,t.N)
for(s=this.gcr(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(!B.b.G(o,p))o.push(p)}return new A.X(o,A.An(),A.a_(o).i("X<1,k>")).B(0,", ")},
q5(a){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null
try{s=t.G.a(B.h.az(B.l.f5(B.ar.v(a)),null))
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
e=A.bG(q,!0,t.X)}catch(o){q=A.BM(j)
throw A.b(q)}n=k.gmD()
q=k.b
if(!J.v(i,q.a)||!J.v(h,q.b)||!J.v(g,k.gmB())||!B.af.X(f,n)||J.aj(e)!==n.length)throw A.b(A.BM("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=e,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bw(l)&&!A.ar(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.BM(j))}return new A.ya(e)},
gmB(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a7(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
m9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cG(a,new A.vj(a)),c=B.b.cG(b,new A.vk())
if(a.length>=2&&d&&!B.b.gE(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
s.push('"'+A.z(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gE(a).b?"<":">"
return new A.a5("("+o+") "+n+" ("+B.b.B(A.ag(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.l([],s)
l=[]
for(k=0;k<a.length;++k){j=A.l([],s)
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
return new A.a5("("+B.b.B(m," OR ")+")",l)},
ma(a,b){var s,r,q,p=this,o=p.gcr(),n=p.b,m=p.gmD(),l=p.gmB(),k=[]
for(s=o.length,r=0;q=o.length,r<q;o.length===s||(0,A.r)(o),++r)k.push(a.h(0,o[r].a))
s=[]
for(r=0;r<o.length;o.length===q||(0,A.r)(o),++r)s.push(b.h(0,o[r].a))
n=B.e.v(B.h.a7(A.m(["store",n.a,"schemaVer",n.b,"sort",m,"shape",l,"values",k,"pv",s],t.N,t.K),null))
return B.bv.gfa().v(n)},
ed(a){return this.wJ(a)},
ca(){return this.ed(null)},
wJ(a8){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ed=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a7=a8==null?p.jY():a8
if(a7===0){q=B.cU
s=1
break}o=a7==null
n=p.jl(o?null:a7+1)
s=3
return A.a(p.cv(n.a,n.b),$async$ed)
case 3:m=b0
l=!o&&J.aj(m)>a7
k=o?m:J.oW(m,a7).dw(0)
o=p.y
j=o!=null
i=j&&p.lz()
h=p.b
if(i){i=A.N(o,t.N)
B.b.C(i,p.tZ())
g=A.Ft(h,k,p.ge4().ax,i,p.ge4().ay)}else g=A.Fs(h,k,p.ge4().ax,p.ge4().ay)
i=p.at
if(i&&g.length!==0){h=A.a_(g).i("bV<1>")
f=A.N(new A.bV(g,h),h.i("V.E"))
B.b.ab(g)
B.b.C(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hJ(g),$async$ed)
case 7:e=b0
d=l
l=e
s=5
break
case 6:d=p.as!=null&&g.length!==0
case 5:c=A.l([],t.d)
for(i=g.length,h=t.N,b=t.X,a=0;a0=g.length,a<a0;g.length===i||(0,A.r)(g),++a){a1=g[a]
if(j){a0=A.w(h,b)
for(a2=o.length,a3=0;a3<o.length;o.length===a2||(0,A.r)(o),++a3){a4=o[a3]
if(a1.I(a4))a0.j(0,a4,a1.h(0,a4))}c.push(a0)}else c.push(a1)}if(a0!==0){a5=l?p.ma(B.b.gY(g),B.b.gE(g)):null
a6=d?p.ma(B.b.gY(g),B.b.gE(g)):null}else{a5=null
a6=null}q=new A.cp(c,a5,a6,l,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ed,r)},
hJ(a){return this.tT(a)},
tT(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.gY(a)
e=p.gcr()
n=[]
for(m=p.gcr(),l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k)n.push(o.h(0,m[k].a))
j=p.m9(e,n)
e=t.s
i=A.l([],e)
h=[]
g=A.l([],e)
if(!p.z)g.push("archived = 0")
if(!p.Q)g.push("hidden = 0")
if(g.length!==0)i.push(B.b.B(g," AND "))
for(e=p.d,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.C(h,f.b)}for(e=p.e,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.C(h,f.b)}i.push(j.a)
B.b.C(h,j.b)
d=J
s=3
return A.a(p.cv("SELECT 1 FROM "+('"'+A.z(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hJ)
case 3:q=d.eb(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
lz(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.fe(o)==null)return!1}return!0},
tZ(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gcr(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
ia(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$ia=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pN(!0)
m=A
s=3
return A.a(p.cv(o.a,o.b),$async$ia)
case 3:n=m.e8(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
ic(a){return this.vI(a)},
vI(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$ic=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cV(a)
o=p.pP(a,!0,!0)
m=A
s=3
return A.a(p.cv(o.a,o.b),$async$ic)
case 3:n=m.e8(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ic,r)},
ij(a){return this.wo(a)},
wo(a){var s=0,r=A.h(t.R),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$ij=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cV(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.q2(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.jl(h)
o=[]
f=J
s=3
return A.a(i.cv(B.a.kY(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$ij)
case 3:n=f.D(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
tf(a){var s,r,q=this.b.fe(a)
if(q==null)return!1
s=q.b
A:{r=B.R===s||B.S===s||B.B===s||B.T===s
break A}return r},
cU(a,b){return this.pn(a,b)},
pn(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cV(b)
if(!p.tf(b))throw A.b(A.av('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pO(b,a)
s=3
return A.a(p.cv(o.a,o.b),$async$cU)
case 3:n=d
m=J.L(n)
q=A.EH(m.gF(n)?null:J.S(m.gE(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cU,r)},
iB(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$iB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lO(A.l(["id"],m))
k=l.pM()
s=3
return A.a(l.cv(k.a,k.b),$async$iB)
case 3:j=b
m=A.l([],m)
for(o=J.D(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.G(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iB,r)},
il(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$il=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.jl(p.jY())
n=J
s=3
return A.a(p.cv("EXPLAIN QUERY PLAN "+o.a,o.b),$async$il)
case 3:q=n.aS(b,new A.vl(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)}}
A.vm.prototype={
$2(a,b){this.a.cV(a)
this.b.push('"'+A.z(a,'"','""')+'" = ?')
this.c.push(b)},
$S:89}
A.vh.prototype={
$1(a){var s=A.z(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:90}
A.vi.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.z(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:91}
A.vj.prototype={
$1(a){return a.b===B.b.gE(this.a).b},
$S:92}
A.vk.prototype={
$1(a){return a!=null},
$S:15}
A.vl.prototype={
$1(a){return a.h(0,"detail")},
$S:28}
A.cN.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.q(this.b)+")"},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cN&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gJ(a){return A.c7(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.vG.prototype={
uB(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.Dq('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
ca(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$ca=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a4=n.d
if(B.a.cj(a4).length===0){q=B.cy
s=1
break}m=n.a
if(m==null)throw A.b(A.x("A compile-only SearchBuilder cannot execute fetch()."))
l=null
k=null
e=n.b
d=e.w
c=d.c.eo(a4)
A.It(c)
if(d.b)A.Is(c)
b=e.a
a=b+"_fts"
a0=A.l(['"'+A.z(a,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a0.push("b.archived = 0")
if(!n.w)a0.push("b.hidden = 0")
a4=B.b.B(a0," AND ")
a1=n.uB()
a2=a1==null?"":" LIMIT "+A.q(a1)
e=A.z(a,'"','""')
d=A.z(b,'"','""')
l="SELECT b.id, rank AS score FROM "+('"'+e+'"')+" JOIN "+('"'+d+'"')+" b ON b.rowid = "+('"'+A.z(a,'"','""')+'"')+".rowid"+(" WHERE "+a4)+" ORDER BY rank"+a2
k=[c]
p=4
j=n.c
s=j==null?7:9
break
case 7:s=10
return A.a(m.l3(l,k),$async$ca)
case 10:s=8
break
case 9:s=11
return A.a(j.ae(l,k),$async$ca)
case 11:case 8:i=a7
h=A.l([],t.kj)
for(a4=J.D(i);a4.k();){g=a4.gn()
e=J.S(g,"id")
e.toString
A.G(e)
d=J.S(g,"score")
d.toString
J.aL(h,new A.cN(e,A.EG(d)))}q=h
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
h=A.E(a5)
if(h instanceof A.c9){f=h
throw A.b(A.av("Invalid search term: "+f.a,null))}else throw a5
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ca,r)}}
A.vq.prototype={}
A.c5.prototype={
a5(){return"FieldKind."+this.b}}
A.aY.prototype={
glk(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aw===s||B.I===s||B.U===s||B.V===s||B.J===s){r="TEXT"
break A}if(B.R===s||B.B===s||B.T===s){r="INTEGER"
break A}if(B.S===s){r="REAL"
break A}throw A.b(A.fR(u.P))}return r},
q(){var s,r=this,q=A.w(t.N,t.X)
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
A.r1.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fs(B.cv,A.G(m))
m=n.h(0,"name")
m.toString
A.G(m)
r=J.v(n.h(0,"required"),!0)
q=J.v(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aY(m,B.aw,r,J.v(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aY(m,B.R,r,!1,q,o,o,!1)
case 2:return new A.aY(m,B.S,r,!1,q,o,o,!1)
case 3:return new A.aY(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aY(m,B.T,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aY(m,B.I,r,!1,!1,A.cJ(J.i0(t.j.a(n),p),p),o,!1)
case 6:return new A.aY(m,B.U,!1,!1,q,o,o,!1)
case 7:return new A.aY(m,B.V,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aY(m,B.J,!1,!1,!1,o,A.G(p),J.v(n.h(0,"enforceFk"),!0))}},
$S:93}
A.iv.prototype={
a5(){return"IndexScope."+this.b}}
A.dC.prototype={
q(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.rL.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.i0(t.j.a(q),t.N)
s=J.v(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dC(q,s,A.fs(B.cq,A.G(r)))},
$S:94}
A.fw.prototype={
q(){var s,r=t.N,q=t.X,p=A.w(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gU(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fw&&r.b===b.b&&B.af.X(r.a,b.a)&&r.c.R(0,b.c)
else s=!0
return s},
gJ(a){return A.c7(A.ue(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rd.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.i0(t.j.a(p),s)
r=J.v(r.h(0,"fuzzy"),!0)
return new A.fw(p,r,t.f.b(q)?A.Hv(q.c7(0,s,t.X)):B.c5)},
$S:95}
A.eq.prototype={
eo(a){var s,r,q,p
for(s=this.a.gac(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.G(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
q(){return A.m(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.eq&&A.Hu(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gL(),n=A.N(o,A.n(o).i("o.E"))
B.b.aG(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
o.push(A.c7(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.ue(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.rc.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.w(s,s)
for(o=t.d2.a(o).gac(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.G(p)
q=q.b
q.toString
A.G(q)
A.Da(p,q)
r.j(0,p,q)}return new A.eq(A.Ha(r,s,s))},
$S:96}
A.ca.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].q())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.vW.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ap(o)
s=J.v(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.D(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.D5(q.a(p.gn())))
return new A.ca(o,s,r)},
$S:97}
A.u5.prototype={
a5(){return"MissingRemotePolicy."+this.b}}
A.pX.prototype={}
A.c2.prototype={
gdf(){var s,r,q,p,o=this,n=$.G2()
A.Bi(o)
s=n.a.get(o)
if(s==null){s=A.aO(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
fe(a){var s,r,q,p,o,n=this,m=$.G3()
A.Bi(n)
s=m.a.get(n)
if(s==null){s=A.w(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.S(m,a)},
q(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.w(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o)r.push(q[o].q())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.w
if(l!=null)j.j(0,"fts",l.q())
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.r)(k),++o)l.push(k[o].q())
j.j(0,"migrations",l)
return j}}
A.pu.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.G(j)
s=k.h(0,"version")
s.toString
A.ap(s)
r=A.l([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.D(p.a(q))
o=t.G
while(q.k())r.push(A.D5(o.a(q.gn())))
q=A.l([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.D(p.a(n))
while(n.k())q.push(A.HE(o.a(n.gn())))
p=J.v(k.h(0,"keepUnsyncedArchives"),!0)
n=J.v(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.Hw(o.a(m))}else m=null
l=A.l([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.D(k==null?B.aj:k)
while(k.k())l.push(A.ID(o.a(k.gn())))
return new A.c2(j,s,r,q,n,p,m,l,this.b.i("c2<0>"))},
$S(){return this.b.i("c2<0>()")}}
A.mv.prototype={
q(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.vC.prototype={
$1(a){return!1},
$S:70}
A.vD.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.I)},
$S:12}
A.vE.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.x)},
$S:31}
A.vF.prototype={
$1(a){return J.Z(a)},
$S:99}
A.u9.prototype={}
A.dM.prototype={
a5(){return"MutationAction."+this.b}}
A.cp.prototype={}
A.fk.prototype={
gbm(){var s=this.c
return s==null?this.a.r:s},
gaS(){return this.b.a.a},
eJ(){var s=this.d
if(s!=null&&s.e){s=this.gaS()
throw A.b(new A.fS('Cannot mutate "'+s+'" through a read-only Tx.'))}},
fA(a){var s=this
if(s.d!=null)return s.hU(B.Z,a)
return s.a.aY(new A.pI(s,a),B.o,t.H)},
l4(a){var s=this
if(s.d!=null)return s.hU(B.a_,a)
return s.a.aY(new A.pL(s,a),B.o,t.H)},
nA(a){var s=this
if(s.d!=null)return s.ml(a)
return s.a.aY(new A.pH(s,a),B.o,t.H)},
nM(a){var s=this
if(s.d!=null)return s.bv(a,B.a_)
return s.a.aY(new A.pK(s,a),B.o,t.H)},
kO(a,b){var s=this
if(s.d!=null)return s.tK(a,b)
return s.a.aY(new A.pF(s,a,b),B.o,t.H)},
nx(a){var s=this
if(s.d!=null)return s.eQ(a)
return s.a.aY(new A.pE(s,a),B.o,t.H)},
eQ(a){return this.tM(a)},
tM(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$eQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eJ()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aN(a,o.i("aN<1,2>")).gt(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cs(m.a,m.b,!0),$async$eQ)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aO(t.N)
for(o=new A.bF(a,a.r,a.e,o.i("bF<1>"));o.k();)l.u(0,o.d)
n.a0(new A.a0(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$eQ,r)},
kf(a){var s=this
if(s.d!=null)return s.hT(B.C,a)
return s.a.aY(new A.pD(s,a),B.o,t.H)},
kZ(a){var s=this
if(s.d!=null)return s.hT(B.E,a)
return s.a.aY(new A.pJ(s,a),B.o,t.H)},
iO(a){var s=this
if(s.d!=null)return s.d5(a)
return s.a.aY(new A.pG(s,a),B.o,t.H)},
d5(a){return this.u_(a)},
u_(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eJ()
s=2
return A.a(q.e2(a),$async$d5)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cA(n,m,a,!0),$async$d5)
case 3:s=4
return A.a(n.W(m,"id = ?",[a]),$async$d5)
case 4:l=t.N
o.a0(new A.a0(m,A.at([a],l)))
if(p!=null){l=A.d6(p.gL(),l)
l.H(0,"id")
o.bd(new A.aU(m,a,B.H,B.aV,p,null,l))}return A.e(null,r)}})
return A.f($async$d5,r)},
cs(a,b,c){return this.tL(a,b,c)},
tK(a,b){return this.cs(a,b,!1)},
tL(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cs=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eJ()
s=3
return A.a(p.gbm().ae("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cs)
case 3:o=e
n=J.L(o)
if(n.gU(o)){m=n.gE(o)
l=A.jn(m)
k=m.h(0,"o_kind")!=null?A.m6(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eR(a,b,l,k,c),$async$cs)
case 6:s=1
break
case 5:s=7
return A.a(p.d2(a,b,c,k,l),$async$cs)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cs,r)},
d2(a,b,c,d,e){return this.qn(a,b,c,d,e)},
qn(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d2=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.e2(a),$async$d2)
case 2:m=g
if(m==null)throw A.b(A.BH("No record "+q.gaS()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cI(m,p,o)
n.C(0,b)
o=A.w(p,o)
o.j(0,"id",a)
o.C(0,n)
s=3
return A.a(q.aP(B.K,c,m,a,d,e,o),$async$d2)
case 3:return A.e(null,r)}})
return A.f($async$d2,r)},
eR(a,b,c,d,e){return this.tN(a,b,c,d,e)},
tN(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eR=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.az(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.d2(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.v(i,a7)){q=n.d2(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.cI(a5,h,g)
f.C(0,a8)
m=f
J.c_(m,"id",a7)
e=new A.a1("")
f=n.b
d=f.a
c=A.Af(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cI(m,h,g)
b.H(0,"id")
n.hV(a7,b,a,c)
a0=n.lU(a5,m,B.K)
l=null
b=a0.length===1&&d.gdf().G(0,B.b.gar(a0))
a1=n.a
a2=a1.ax
a3=a1.ay
if(b){a4=d.fe(B.b.gar(a0))
b=a4.a
l=A.m([b,A.Fy(d,a4,J.S(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dr(d,J.v(J.S(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbm().M(d.a,l,"id = ?",[a7]),$async$eR)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.E(a6)
h=A.FY(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.CW
g===$&&A.A()
b=n.gbm()
a1=l
s=8
return A.a(g.bp(B.K,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$eR)
case 8:if(!b1){g=n.d
if(g!=null)g.a0(new A.a0(d.a,A.at([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bd(new A.aU(d.a,a7,B.H,B.A,a5,m,A.tz(a0,A.a_(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eR,r)},
aP(a,b,c,d,e,f,g){return this.tn(a,b,c,d,e,f,g)},
hU(a,b){var s=null
return this.aP(a,!1,s,s,s,s,b)},
hT(a,b){var s=null
return this.aP(a,!1,s,b,s,s,s)},
uR(a,b,c){var s=null
return this.aP(a,b,s,s,s,s,c)},
uS(a,b,c,d,e,f){return this.aP(a,b,c,null,d,e,f)},
tn(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aP=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eJ()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.py(b5,n,c2,c1)
s=b7===B.Z?3:5
break
case 3:h=A.a7(c3.h(0,"id"))
if(h==null)h=A.hT()
g=$.oR()
if(!g.b.test(h))throw A.b(A.av('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aP)
case 6:l=n.eN(c3,m)
b7=b5.a==null?B.b6:B.K
s=4
break
case 5:s=b7===B.K?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aP)
case 10:if(b5.a==null)throw A.b(A.BH("No record "+n.gaS()+"/"+A.q(m)+" to update."))
c3.toString
l=n.eN(c3,m)
s=8
break
case 9:s=b7===B.a_?11:13
break
case 11:h=A.a7(c3.h(0,"id"))
if(h==null)h=A.hT()
g=$.oR()
if(!g.b.test(h))throw A.b(A.av('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aP)
case 14:g=b5.a
if(g==null){l=n.eN(c3,m)
b7=B.b6}else{l=A.cI(g,t.N,t.X)
for(g=new A.aN(c3,A.n(c3).i("aN<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.c_(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aP)
case 15:g=b5.a
if(g==null)throw A.b(A.BH("No record "+n.gaS()+"/"+A.q(m)+" to archive/restore."))
g=A.cI(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a1("")
g=n.b
e=g.a
c=l
b=A.Af(d,e,c,J.aj(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hV(m,l,a,b)
s=b5.a==null?16:18
break
case 16:a0=null
s=17
break
case 18:c=c2==null?b5.c:c2
s=c==null?19:21
break
case 19:c=n.a.CW
c===$&&A.A()
s=22
return A.a(c.bW(n.gbm(),e.a,m),$async$aP)
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
c===$&&A.A()
s=29
return A.a(c.es(n.gbm(),e.a,m),$async$aP)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a4)throw A.b(A.D_("Record "+n.gaS()+"/"+A.q(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ai(A.bf(e,a3))
a2=A.aq(B.j.v(B.e.v(a6)).a)
a7=new A.pa(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ax
a8=a3.ay
a9=A.dr(e,J.v(J.S(l,"archived"),!0),a4,a8,c,a2)
b0=n.lU(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gdf().G(0,B.b.gar(b0))){b1=e.fe(B.b.gar(b0))
c=b1.a
k=A.m([c,A.Fy(e,b1,J.S(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
s=b5.a==null?34:36
break
case 34:s=37
return A.a(n.gbm().aE(0,c,k),$async$aP)
case 37:s=35
break
case 36:s=38
return A.a(n.gbm().M(c,k,"id = ?",[m]),$async$aP)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.E(b6)
g=A.FY(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.CW
c===$&&A.A()
a2=n.gbm()
a3=m
a4=b5.a
s=39
return A.a(c.bp(b7,a7,b0,a2,a3,l,a4,a1,a,a9,a0,g),$async$aP)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.ab:B.A
break
case 3:b3=B.A
break
case 4:b3=B.bT
break
case 5:b3=B.bU
break
default:b3=null}if(b7===B.C||b7===B.E)b4=A.at(["archived"],t.N)
else if(b5.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("al<o.E>")
b4=A.d6(new A.al(new A.T(g,c),new A.px(),a2),a2.i("o.E"))}else b4=A.tz(b0,A.a_(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bd(new A.aU(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.a0(new A.a0(e.a,A.at([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
bv(a,b){return this.u7(a,b)},
ml(a){return this.bv(a,B.Z)},
u7(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bv=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eJ()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.l([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.r)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a7(a0)
a2=a1?A.hT():a0
a1=$.oR()
if(!a1.b.test(a2))throw A.b(A.av('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aL(l,new A.a5(a2,a))}if(!c){a3=A.w(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.as(a3,a3.$ti.i("as<2>")).bQ(0,new A.pC())}else a5=!1
s=c3===B.Z&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.e0(m,l),$async$bv)
case 9:k=A.aO(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aL(k,i)}g.a0(new A.a0(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.E(c0) instanceof A.hj))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.w(k,t.G)
j=n.a,d=j.ax,j=j.ay,a1=t.s,a8=0
case 10:if(!(a8<J.aj(l))){s=12
break}a9=a8+2000
b0=B.c.bR(a9,0,J.aj(l))
a4=A.l([],a1)
for(b1=J.GR(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.r)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.ci(e,"id IN ("+B.b.B(A.ag(a4.length,"?",!1,k),", ")+")",a4),$async$bv)
case 13:a4=c1.D(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.G(b2),A.ch(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.w(k,t.nw)
b4=A.w(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.N(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bR(a9,0,j))
b7=B.b.B(A.ag(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.C(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.ci("lp_sync_row",f,j),$async$bv)
case 19:d=c1.D(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.G(b1),A.jn(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.ci("lp_outbox",f,j),$async$bv)
case 22:j=c1.D(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.G(d),A.m6(f))
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
s=b8.G(0,a2)?28:30
break
case 28:a1=A.dH(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.uR(c3,!0,a1),$async$bv)
case 31:s=29
break
case 30:a1=A.dH(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.uS(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bv)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.r)(j),++b
s=25
break
case 27:g.a0(new A.a0(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bv,r)},
e0(a,b){return this.u8(a,b)},
u8(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$e0=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a3=n.a
a4=a3.r
s=a4 instanceof A.ii?3:4
break
case 3:s=5
return A.a(n.e1(a6,a7),$async$e0)
case 5:s=1
break
case 4:m=a3.ch.$0()
a3=n.d
a=a3==null?null:a3.a.a$.b.d!=null
l=a===!0
k=A.l([],t.jO)
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
return A.a(n.eF(a6,a4,h,g,m),$async$e0)
case 13:e=a9
if(l)J.aL(k,new A.a5(h,e));++j
case 11:a7.length===a||(0,A.r)(a7),++a0
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.E(a5) instanceof A.c9?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aL(d,a7[c].a)
b=d
s=17
return A.a(n.d0(a6,b),$async$e0)
case 17:throw A.b(new A.hj())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a=n.b.a.a,a0=0;a0<i.length;i.length===d||(0,A.r)(i),++a0){a2=i[a0]
e=a2.b
a3.toString
a3.bd(new A.aU(a,a2.a,B.H,B.ab,null,e,J.CK(e.gL(),new A.pB()).fJ(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e0,r)},
e1(a,b){return this.u9(a,b)},
u9(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$e1=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.ch.$0()
d1=c9.r
d2=t.s
d3=A.l(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.r)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.hX(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.hX(B.X)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.hX(B.W)+") VALUES "
j=new A.pA()
b1=new A.a1("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.l([],t.jO):null
i=0,a9=b3==null,b4=c9.ax,b5=c9.ay,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bR(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eN(c2,c1):c2
b1.a=""
c4=A.Af(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hV(c1,c3,c5,c4)
A.L9(f,c8,J.v(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.CW
b7===$&&A.A()
c6=b7.fO()
A.Fi(e,"",null,d0,null,'["*"]',B.u,c6,c5,c1,d3,d0)
A.Fj(d,B.a5,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a5(c1,c3))}c=!1
b=!1
q=6
b7=d1.ck(A.q(m)+A.q(j.$2(J.aj(n),g)))
if(b7.r||b7.b.r)A.u(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eG(new A.bP(f))
b7.h5()
c=!0
b7=d1.ck(A.q(l)+A.q(j.$2(11,g)))
if(b7.r||b7.b.r)A.u(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eG(new A.bP(e))
b7.h5()
b=!0
b7=d1.ck(A.q(k)+A.q(j.$2(16,g)))
if(b7.r||b7.b.r)A.u(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eG(new A.bP(d))
b7.h5()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.E(d4) instanceof A.c9?9:11
break
case 9:a=A.l([],d2)
for(a0=0;a0<i;++a0)J.aL(a,d6[a0].a)
a1=a
s=12
return A.a(o.d0(d5,a1),$async$e1)
case 12:s=c||b?13:14
break
case 13:a2=A.l([],d2)
for(a3=i;a3<h;++a3)J.aL(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.ag(J.aj(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.W(d3,"id IN ("+A.q(a5)+")",a4),$async$e1)
case 17:case 16:s=b?18:19
break
case 18:a6=A.l([d3],d2)
J.B7(a6,a4)
a7=a6
s=20
return A.a(d5.W("lp_outbox","store = ? AND record_id IN ("+A.q(a5)+")",a7),$async$e1)
case 20:case 19:case 14:throw A.b(new A.hj())
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
case 4:if(b2)for(a=b3.length,b0=0;b0<b3.length;b3.length===a||(0,A.r)(b3),++b0){a2=b3[b0]
c3=a2.b
a8.toString
a8.bd(new A.aU(d3,a2.a,B.H,B.ab,null,c3,J.CK(c3.gL(),new A.pz()).fJ(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e1,r)},
eF(a,b,c,d,e){return this.ps(a,b,c,d,e)},
ps(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eF=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eN(b1,b0)
a3=new A.a1("")
a4=A.Af(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hV(b0,a2,a6,a4)
a5=n.a
m=A.dr(a1,J.v(a2.h(0,"archived"),!0),a5.ax,a5.ay,b0,a2)
a5=a5.CW
a5===$&&A.A()
e=a5.fO()
a5=a1.a
l=A.Fl("",null,b2,'["*"]',B.u,e,a6,b0,a5,b2)
k=A.Lu('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dJ(new A.T(d,c),new A.pv(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.ag(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.q(h)+") VALUES ("+A.q(g)+")"
c=a9.ck(f)
d=m
a=A.n(d).i("as<2>")
d=A.N(new A.as(d,a),a.i("o.E"))
c.ec(new A.bP(d))
j=!0
a9.ck("INSERT INTO lp_outbox ("+A.hX(B.X)+") VALUES ("+B.b.B(A.ag(11,"?",!1,b),", ")+")").ec(new A.bP(A.FS(l,B.X)))
i=!0
a9.ck("INSERT INTO lp_sync_row ("+A.hX(B.W)+") VALUES ("+B.b.B(A.ag(16,"?",!1,b),", ")+")").ec(new A.bP(A.FS(k,B.W)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.W(a5,"id = ?",[b0]),$async$eF)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.W("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$eF)
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
return A.f($async$eF,r)},
d0(a,b){return this.q7(a,b)},
q7(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$d0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.ag(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.W(m,"id IN ("+o+")",b),$async$d0)
case 3:m=A.l([m],t.s)
B.b.C(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.W("lp_outbox",n,m),$async$d0)
case 4:s=5
return A.a(a.W("lp_sync_row",n,m),$async$d0)
case 5:case 1:return A.e(q,r)}})
return A.f($async$d0,r)},
eN(a,b){var s,r,q,p=A.w(t.N,t.X)
for(s=a.gac(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.kS("archived",new A.pw())
return p},
lU(a,b,c){var s,r,q,p,o
if(a==null)return B.cC
s=t.N
r=A.aO(s)
s=A.d6(a.gL(),s)
s.C(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hw(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.r.X(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.N(r,r.$ti.c)
B.b.aG(o)
return o},
e2(a){return this.ue(a)},
ue(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$e2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbm().ae('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$e2)
case 3:m=c
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.ch(n,l.gE(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e2,r)},
hK(a){return this.tU(a)},
tU(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbm().ae('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hK)
case 3:j=c
k=J.L(j)
if(k.gF(j)){q=B.da
s=1
break}o=k.gE(j)
k=p.a
n=A.ch(l,o,k.ax,k.ay)
m=o.h(0,"s_sync_state")!=null?A.jn(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eZ(n,m,o.h(0,"o_kind")!=null?A.m6(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
bE(a){return this.ot(a)},
ot(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.d==null
if(g&&p.b.e.a.I(a)){q=p.b.e.bE(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
s=m>1?3:5
break
case 3:s=6
return A.a(p.gbm().ae("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bE)
case 6:s=4
break
case 5:s=7
return A.a(p.gbm().ae('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bE)
case 7:case 4:k=c
l=J.L(k)
if(l.gF(k)){if(g)o.e.lh(a,null)
q=null
s=1
break}j=l.gE(k)
l=p.a
i=A.ch(n,j,l.ax,l.ay)
h=A.bd(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.La(n,i,h,m)
if(g)o.e.lh(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bE,r)},
hV(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.av('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.Cn(p,n)
if(m!=null)throw A.b(A.av(A.H5(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.av("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.pI.prototype={
$1(a){return a.bA(this.a.b.a.a).fA(this.b)},
$S:5}
A.pL.prototype={
$1(a){return a.bA(this.a.b.a.a).l4(this.b)},
$S:5}
A.pH.prototype={
$1(a){return a.bA(this.a.b.a.a).nA(this.b)},
$S:5}
A.pK.prototype={
$1(a){return a.bA(this.a.b.a.a).nM(this.b)},
$S:5}
A.pF.prototype={
$1(a){return a.bA(this.a.b.a.a).kO(this.b,this.c)},
$S:5}
A.pE.prototype={
$1(a){return a.bA(this.a.b.a.a).nx(this.b)},
$S:5}
A.pD.prototype={
$1(a){return a.bA(this.a.b.a.a).kf(this.b)},
$S:5}
A.pJ.prototype={
$1(a){return a.bA(this.a.b.a.a).kZ(this.b)},
$S:5}
A.pG.prototype={
$1(a){return a.bA(this.a.b.a.a).iO(this.b)},
$S:5}
A.py.prototype={
nS(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.e2(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hK(a),$async$$1)
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
$1(a){return this.nS(a)},
$S:100}
A.px.prototype={
$1(a){return a!=="id"},
$S:9}
A.pC.prototype={
$1(a){return a>1},
$S:101}
A.pB.prototype={
$1(a){return a!=="id"},
$S:9}
A.pA.prototype={
$2(a,b){var s=t.N
return B.b.B(A.ag(b,"("+B.b.B(A.ag(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:102}
A.pz.prototype={
$1(a){return a!=="id"},
$S:9}
A.pv.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.pw.prototype={
$0(){return!1},
$S:50}
A.hj.prototype={$iH:1}
A.nA.prototype={}
A.bH.prototype={
a0(a){this.c.push(a)
this.a.y.r+=a.b.a},
bd(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bA(a){var s=this.a
return new A.fk(s,s.ap(a),this.b,this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.x("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cC(o,a,b)},
cC(a,b,c){return this.v9(a,b,c,c)},
v9(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cC=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.K("SAVEPOINT "+a2),$async$cC)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.y
k=e.r
p=5
d=A.BS(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.oN(new A.wt(a3,j,a4),null,A.m([$.ku(),j],f,f),a4.i("y<0>")),$async$cC)
case 8:i=a7
s=9
return A.a(a.K("RELEASE "+a2),$async$cC)
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
return A.a(a.K("ROLLBACK TO "+a2),$async$cC)
case 14:s=15
return A.a(a.K("RELEASE "+a2),$async$cC)
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
if(a>m)B.b.kW(h,m,a)
a=g.length
if(a>l)B.b.kW(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cC,r)}}
A.wt.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.zc.prototype={}
A.ml.prototype={
lj(a){return a.a===this.w.b.a},
fd(){var s=this.w
return s.ed(s.w==null&&!s.x?50:null).an(new A.vv(),t.J)},
n1(a){return A.Lz(a,new A.vu(this),this.w.r.length!==0)},
nw(a){var s=this.x
return s==null?null:s.u(0,a)},
kM(a,b){var s=this.x
return s==null?null:s.bz(a,b)},
j8(){var s=this.x=A.vX(this.gkq(),new A.vw(this),null,!1,t.J)
return new A.b7(s,A.n(s).i("b7<1>"))},
f7(){this.lp()
var s=this.x
if(s!=null)s.p()}}
A.vv.prototype={
$1(a){return a.a},
$S:104}
A.vu.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.vw.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aB()
s=2
return A.a(p.e3(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.m3.prototype={
lj(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.G(0,this.x))return!1
return!0},
fd(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$fd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.r.aM(n.a,1,"id = ?",[p.x]),$async$fd)
case 3:m=b
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}q=A.ch(n,l.gE(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
n1(a){return a==null?"<null>":A.aq(B.j.v(B.e.v(A.ai(a))).a)},
nw(a){var s=this.y
return s==null?null:s.u(0,a)},
kM(a,b){var s=this.y
return s==null?null:s.bz(a,b)},
j8(){var s=this.y=A.vX(this.gkq(),new A.uf(this),null,!1,t.b)
return new A.b7(s,A.n(s).i("b7<1>"))},
f7(){this.lp()
var s=this.y
if(s!=null)s.p()}}
A.uf.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aB()
s=2
return A.a(p.e3(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.fj.prototype={
kM(a,b){},
aB(){var s=this.a.a$.a
this.c=new A.b1(s,A.n(s).i("b1<1>")).aV(this.gtt())},
tu(a){var s,r=this
if(!r.lj(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.D()
r.d=A.cR(r.b,r.gmp())},
e3(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$e3=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.fd(),$async$e3)
case 6:m=b
l=n.n1(m)
if(!J.v(l,n.r)){n.r=l;++i.z
n.nw(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.E(g)
j=A.ae(g)
n.kM(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.D()
n.d=A.cR(n.b,n.gmp())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e3,r)},
f7(){var s=this.d
if(s!=null)s.D()
s=this.c
if(s!=null)s.D()}}
A.xl.prototype={
aX(a,b){var s,r=this;++r.b
r.mf()
s=new A.t($.C,b.i("t<0>"))
r.a=r.a.an(new A.xm(r,new A.az(s,b.i("az<0>")),a),t.H)
return s},
mf(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.xm.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.aD(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.E(i)
l=A.ae(i)
n.b.bB(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.mf()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:40}
A.pb.prototype={}
A.fg.prototype={
l(a){return"BlobMissingError: "+this.a},
$iH:1}
A.kP.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.q(this.a)},
$iH:1}
A.mK.prototype={}
A.AR.prototype={
$1(a){return B.b.C(this.a,a)},
$S:107}
A.io.prototype={}
A.r3.prototype={
bu(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bu=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.bY
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.cx
a3===$&&A.A()
b5=J
s=3
return A.a(a3.f8(25),$async$bu)
case 3:a4=b5.D(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b7?10:12
break
case 10:s=13
return A.a(n.ct(i,b2),$async$bu)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.nu(i.b),$async$bu)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b8?17:18
break
case 17:s=19
return A.a(n.eT(i),$async$bu)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.nu(i.b),$async$bu)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.E(b3)
j=!0
e=i.w+1
d=a5.n7(e)
a8=i.b
a9=J.Z(f)
b0=a6.$0()
s=23
return A.a(a3.xG(a8,a9,e,b0+B.c.N(d.a,1000)),$async$bu)
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
if(b1==null)A.u(A.x('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.ci("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bu)
case 28:a5=b5.D(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.S(b,"ref_id")
a6.toString
a=A.G(a6)
a6=J.S(b,"record_id")
a6.toString
a0=A.G(a6)
a1=A.a7(J.S(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.dh(a0,a,a1,c),$async$bu)
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
case 25:q=new A.io(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bu,r)},
ct(a,b){return this.tY(a,b)},
tY(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ct=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.az(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.G(a1)
l=a0.h(0,"hash")
l.toString
A.G(l)
k=A.a7(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bq(l),$async$ct)
case 3:if(!a6)throw A.b(A.x("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bj(l),$async$ct)
case 4:j=a6
if(j==null)throw A.b(A.x("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.y
i===$&&A.A()
s=9
return A.a(i.bY(a3.d),$async$ct)
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
if(m!=null){f=B.a.A(l,0,B.c.bR(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.yH(a3.d,A.m([k,new A.h4(k,j,new A.r5(a4,l))],t.N,t.h3)),$async$ct)
case 13:l=a6.e
a.a=l.length!==0?B.b.gY(l):k
case 11:s=14
return A.a(n.a.a2(new A.r6(a,a1,a3),t.P),$async$ct)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ct,r)},
eT(a){return this.tX(a)},
tX(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.az(a.f,null))
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
return A.a(p.b.yF(a.d,A.l([o],t.s)),$async$eT)
case 5:case 4:s=6
return A.a(p.a.a2(new A.r4(l,n,a),t.P),$async$eT)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eT,r)},
dh(a,b,c,d){return this.wp(a,b,c,d)},
wp(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dh=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.y
l===$&&A.A()
k=m
s=4
return A.a(l.ik(c,a,null),$async$dh)
case 4:s=3
return A.a(k.fA(f),$async$dh)
case 3:o=f
s=5
return A.a(m.bj(o),$async$dh)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.r7(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$dh)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
dn(a,b,c,d){return this.xK(a,b,c,d)},
xK(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$dn=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ci("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$dn)
case 2:k=f
j=A.tz(c,A.a_(c).c)
i=J.aC(k)
h=t.B
g=A.d6(new A.bI(i.cf(k,new A.r8(),t.v),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.G(0,n)?6:7
break
case 6:s=8
return A.a(a.cc(0,"lp_file_refs",A.m(["ref_id",A.hT(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bW),$async$dn)
case 8:case 7:case 4:c.length===h||(0,A.r)(c),++o
s=3
break
case 5:i=i.gt(k)
case 9:if(!i.k()){s=10
break}h=i.gn()
m=A.a7(h.h(0,"remote_name"))
if(m==null){s=9
break}if(j.G(0,m)){s=9
break}q=h.h(0,"state")
q.toString
A.G(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.W("lp_file_refs","ref_id = ?",[q]),$async$dn)
case 11:l=A.a7(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.S(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aF(u.y,[l]),$async$dn)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dn,r)}}
A.r5.prototype={
$0(){return this.a.cL(this.b)},
$S:108}
A.r6.prototype={
$1(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.M("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a0(new A.a0(p.c,A.at([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r4.prototype={
$1(a){return this.nU(a)},
nU(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.W("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aF(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a0(new A.a0(p.c,A.at([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r7.prototype={
$1(a){return this.nW(a)},
nW(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.hZ(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.M("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a0(new A.a0(q.f,A.at([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r8.prototype={
$1(a){return A.a7(a.h(0,"remote_name"))},
$S:109}
A.bg.prototype={}
A.r2.prototype={
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
m=A.bd(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bd(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bg(j,s,r,q,p,o,n,m,l,A.a7(k.h(0,"last_error")))},
$S:110}
A.tD.prototype={
gmu(){return this.b},
gkG(){var s=0,r=A.h(t.y),q,p=this
var $async$gkG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dU()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gkG,r)},
ek(a,b,c){return this.xv(a,b,c)},
xv(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$ek=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.r.ci("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$ek)
case 3:o=n.aS(e,A.LR(),t.A)
o=A.N(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ek,r)},
dd(a,b,c,d,e,f,g,h){return this.vw(a,b,c,d,e,f,g,h)},
vw(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$dd=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.gmu()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dU(),$async$dd)
case 5:j=!j
case 4:if(j)throw A.b(A.x("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.dr(b,c,d),$async$dd)
case 6:o=j
s=7
return A.a(m.bj(o),$async$dd)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.a2(new A.tE(p,h,g,e,o,n,A.hT(),f),t.A),$async$dd)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
fs(a,b,c,d,e){return this.xN(a,b,c,d,e)},
xN(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fs=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gmu()
s=3
return A.a(p.ek(a,c,e),$async$fs)
case 3:k=g
j=J.L(k)
if(j.gF(k))throw A.b(A.x("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.ff(k,new A.tG(d),new A.tH(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.x("File is remote_only; download it before opening."))
j=p.a
n=j.ch.$0()
m=o.e
s=4
return A.a(j.r.aF("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$fs)
case 4:q=l.cL(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)},
fD(a,b,c,d,e,f){return this.yk(0,b,c,d,e,f)},
yk(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fD=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ek(b,d,f),$async$fD)
case 3:n=h
m=J.L(n)
if(m.gF(n)){s=1
break}o=e!=null?m.ff(n,new A.tI(e),new A.tJ(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.tK(p,o,f,d,b),t.P),$async$fD)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
bh(a,b){return this.os(a,b)},
os(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bh=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e9(a8),$async$bh)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.ch.$0()-B.c.N(a7.a,1000)
s=6
return A.a(e.a2(new A.tF(a2,n),t.P),$async$bh)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fk(),$async$bh)
case 13:l=b0
s=J.eb(l)?14:15
break
case 14:k=0
j=A.aO(t.N)
d=e.r,c=t.s
case 16:s=18
return A.a(d.y0("lp_blobs",A.l(["hash"],c),250,k,"hash ASC"),$async$bh)
case 18:i=b0
for(b=J.D(i);b.k();){h=b.gn()
a=J.S(h,"hash")
a.toString
J.aL(j,A.G(a))}if(J.aj(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.D(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.B9(j,g)){s=19
break}p=22
b=new A.t($.C,c)
b.aO(null)
s=25
return A.a(b,$async$bh)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.dg(g),$async$bh)
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
return A.a(e.y4("lp_blobs",A.l(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bh)
case 29:a1=b0
c=J.L(a1)
if(c.gF(a1)){s=28
break}c=c.gt(a1)
case 30:if(!c.k()){s=31
break}b=c.gn().h(0,"hash")
b.toString
A.G(b)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.dg(b),$async$bh)
case 34:case 33:s=35
return A.a(e.W("lp_blobs","hash = ?",[b]),$async$bh)
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
return A.f($async$bh,r)},
cF(a){return this.wy(a)},
wy(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.r
e=A
s=3
return A.a(g.b2("SELECT SUM(size) as total FROM lp_blobs"),$async$cF)
case 3:f=e.e8(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.b2("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cF)
case 6:l=c
k=J.L(l)
if(k.gF(l)){s=5
break}k=k.gt(l)
case 7:if(!k.k()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.G(i)
j=j.h(0,"size")
j.toString
A.ap(j)
s=9
return A.a(h.dg(i),$async$cF)
case 9:s=10
return A.a(g.M("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cF)
case 10:s=11
return A.a(g.W("lp_blobs","hash = ?",[i]),$async$cF)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cF,r)}}
A.tE.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.ch.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.eq("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.L(c)
if(b.gU(c)){q=A.D6(b.gE(c))
s=1
break}s=4
return A.a(A.hZ(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.eq("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.L(o)
n=h.gU(o)&&J.S(h.gE(o),"base_updated")==null?A.a7(J.S(h.gE(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cc(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.Q),$async$$1)
case 6:k=A.hT()
s=7
return A.a(j.aE(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a7(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a0(new A.a0(g,A.at([f],m)))
q=new A.bg(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:111}
A.tG.prototype={
$1(a){return a.a===this.a},
$S:66}
A.tH.prototype={
$0(){return A.u(A.x("FileRef "+this.a+" not found"))},
$S:38}
A.tI.prototype={
$1(a){return a.a===this.a},
$S:66}
A.tJ.prototype={
$0(){return A.u(A.x("FileRef "+this.a+" not found"))},
$S:38}
A.tK.prototype={
$1(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.W("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aF(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.M("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.M("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aE(0,"lp_op_queue",A.m(["op_id",A.hT(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a7(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a0(new A.a0(q.c,A.at([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tF.prototype={
$1(a){return this.o3(a)},
o3(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dx,p=new A.bF(p,p.r,p.e,A.n(p).i("bF<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ae('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.z(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.D(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.G(j)
k=k.h(0,"hash")
k.toString
A.G(k)
s=7
return A.a(i.W("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aF(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.M("lp_op_queue",A.m(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.wU.prototype={
eS(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eS=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.hY()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a6(n.getDirectory(),l),$async$eS)
case 7:m=b
s=8
return A.a(A.a6(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eS)
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
return A.f($async$eS,r)},
dU(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eS(),$async$dU)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
bo(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bo=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dU(),$async$bo)
case 3:if(!b){q=null
s=1
break}p=5
m=A.hY()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a6(m.getDirectory(),k),$async$bo)
case 8:l=b
s=9
return A.a(A.a6(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bo)
case 9:k=b
q=new A.nY(k)
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
return A.f($async$bo,r)},
dr(a,b,c){return this.xZ(a,b,c)},
fA(a){return this.dr(a,null,null)},
xZ(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.xK(A.l([],t.bs))
s=3
return A.a(A.ko(a,b,c,null,new A.wV(o)),$async$dr)
case 3:n=e
m=o.l0()
s=4
return A.a(p.bo(),$async$dr)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.b0(k,m),$async$dr)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
cL(a){return this.xP(a)},
xP(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cL=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.kQ(a)
j=n.b
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.BN(j,t.L)
s=1
break}s=3
return A.a(n.bo(),$async$cL)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.er(a),$async$cL)
case 10:l=c
j=A.BN(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.E(h)
if(!(k instanceof A.fg))throw A.b(A.CS(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.x("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cL,r)},
dg(a){return this.vV(a)},
vV(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$dg=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.kQ(a)
o.b.H(0,a)
s=2
return A.a(o.bo(),$async$dg)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.H(0,a),$async$dg)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.E(k)
if(!(m instanceof A.fg))throw A.b(A.CS(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dg,r)},
bq(a){return this.wE(a)},
wE(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kQ(a)
if(p.b.I(a)){q=!0
s=1
break}s=3
return A.a(p.bo(),$async$bq)
case 3:o=c
if(o!=null){q=o.bq(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bq,r)},
bj(a){return this.oG(a)},
oG(a){var s=0,r=A.h(t.aV),q,p=this,o,n
var $async$bj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kQ(a)
o=p.b
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bo(),$async$bj)
case 3:n=c
if(n!=null){q=n.bj(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bj,r)},
e9(a){return this.vD(a)},
vD(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e9=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bo(),$async$e9)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.ej(),$async$e9)
case 8:k=f.D(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.GQ(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.H(0,l),$async$e9)
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
return A.f($async$e9,r)},
fk(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fk=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.d6(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bo(),$async$fk)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ej(),$async$fk)
case 10:j=f.D(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Cx()
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
j=A.N(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fk,r)}}
A.wV.prototype={
$1(a){return this.a.u(0,a)},
$S:27}
A.nY.prototype={
er(a){return this.ya(a)},
ya(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$er=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a6(n.a.getFileHandle(a,{create:!1}),i),$async$er)
case 7:m=c
s=8
return A.a(A.a6(m.getFile(),i),$async$er)
case 8:l=c
s=9
return A.a(A.a6(l.arrayBuffer(),t.a),$async$er)
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
j=A.E(g)
if(A.DV(j))throw A.b(A.CR(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$er,r)},
b0(a,b){return this.z0(a,b)},
z0(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.m
n=A
s=3
return A.a(A.a6(q.a.getFileHandle(a,{create:!0}),p),$async$b0)
case 3:s=2
return A.a(n.a6(d.createWritable(),p),$async$b0)
case 2:o=d
p=t.X
s=4
return A.a(A.a6(o.write(t.a.a(B.f.gaa(b))),p),$async$b0)
case 4:s=5
return A.a(A.a6(o.close(),p),$async$b0)
case 5:return A.e(null,r)}})
return A.f($async$b0,r)},
H(a,b){return this.yl(0,b)},
yl(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.Bk(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.E(l)
if(A.DV(n))throw A.b(A.CR(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
bq(a){return this.wF(a)},
wF(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a6(n.a.getFileHandle(a,{create:!1}),t.m),$async$bq)
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
return A.f($async$bq,r)},
bj(a){return this.oH(a)},
oH(a){var s=0,r=A.h(t.aV),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bj=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a6(n.a.getFileHandle(a,{create:!1}),k),$async$bj)
case 7:m=c
s=8
return A.a(A.a6(m.getFile(),k),$async$bj)
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
return A.f($async$bj,r)},
ej(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ej=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.cf(A.bZ(A.D7(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ej)
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
return A.a(j.D(),$async$ej)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ej,r)},
$iDu:1}
A.mR.prototype={
gnF(){return 1}}
A.p8.prototype={
dz(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eM(),$async$dz)
case 5:o=b
s=o.gnF()<0.25?6:7
break
case 6:s=8
return A.a(p.jh(o),$async$dz)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnF()<0.25?9:10
break
case 9:s=11
return A.a(p.jh(m),$async$dz)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
iR(){var s=0,r=A.h(t.q),q,p=this
var $async$iR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eM(),$async$iR)
case 3:q=p.jh(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iR,r)},
eM(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eM=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.kn():j
p=3
s=6
return A.a(l,$async$eM)
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
return A.f($async$eM,r)},
jh(a){var s=this.c
if(s!=null)return s
return this.c=this.h2(a)},
h2(a){return this.qe(a)},
qe(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$h2=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.x("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.kT(l),$async$h2)
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
A.m7.prototype={
p8(a,b,c,d,e,f,g,h){var s=this,r=new A.p8(s.b)
s.x!==$&&A.cz()
s.x=r
s.y!==$&&A.cz()
s.y=new A.uw(s.w,s.a,r)},
iL(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$iL=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.as){s=1
break}n.as=!0
if(n.at){s=1
break}p=4
m=n.y
m===$&&A.A()
s=7
return A.a(m.iN(),$async$iL)
case 7:n.Q=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.E(k)
if(m instanceof A.cF){n.Q=!1
n.at=!0}else if(m instanceof A.bv)n.as=n.Q=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iL,r)},
fW(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.z!=null){s=1
break}o=p.y
o===$&&A.A()
n=A.I7(B.bX,o,A.l([p.r],t.s),p.gtE(),p.gtB())
p.z=n
s=3
return A.a(n.aB(),$async$fW)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fW,r)},
eE(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.z
o=o==null?null:o.aH()
s=2
return A.a(o instanceof A.t?o:A.bn(o,t.H),$async$eE)
case 2:q.z=null
for(o=q.ay,p=new A.aT(o,o.r,o.e,A.n(o).i("aT<2>"));p.k();)p.d.D()
o.ab(0)
q.ch.ab(0)
return A.e(null,r)}})
return A.f($async$eE,r)},
tC(){var s,r,q,p
for(s=this.CW,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
this.eI(p,new A.cC(p,B.a9,null))}},
tF(a){var s=a.b,r=s.b
if(!B.b.G(this.CW,r))return
if(a.a==="delete"){this.hX(s)
return}this.eI(r,new A.cC(r,B.a9,s))},
hX(a){return this.v4(a)},
v4(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hX=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.G(n.CW,j)){s=1
break}m=null
p=4
l=n.y
l===$&&A.A()
s=7
return A.a(l.bY(a.a),$async$hX)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.E(i)
if(l instanceof A.cK){n.eI(j,new A.cC(j,B.aO,null))
s=1
break}else if(l instanceof A.bv){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eI(j,new A.cC(j,B.aO,null))
s=1
break}n.eI(j,new A.cC(j,B.a9,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hX,r)},
eI(a,b){var s,r,q=this
q.ch.j(0,a,b)
s=q.ay
r=s.h(0,a)
if(r!=null)r.D()
s.j(0,a,A.cR(q.c,new A.us(q,a)))},
yF(a,b){return this.iW(null,a,null,b,null)},
iW(a,b,c,d,e){return this.yI(a,b,c,d,e)},
yH(a,b){return this.iW(null,a,null,null,b)},
yI(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iW=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aL(0,new A.ut(),t.N,t.co)
n=p.y
n===$&&A.A()
q=n.iV(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iW,r)}}
A.us.prototype={
$0(){var s,r=this.a,q=this.b
r.ay.H(0,q)
s=r.ch.H(0,q)
if(s!=null&&(r.ax.c&4)===0)r.ax.u(0,s)},
$S:0}
A.ut.prototype={
$2(a,b){return new A.Q(a,new A.dA("imgs+",b.a,b.b,b.c),t.ia)},
$S:114}
A.uM.prototype={}
A.uw.prototype={
fm(a,b,c,d,e,f){return this.xx(a,b,c,d,e,f)},
xx(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fm=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Mt(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.z(c,"'","\\'")+"'")}n=t.N
n=A.w(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.iU(B.c.bR(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.B(b,","))
k=p.b.bt("/api/collections/data/records").kX(n)
s=3
return A.a(p.my("GET",k),$async$fm)
case 3:j=a0
p.d1(j,A.l([200],t.t),k)
i=p.d_(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bu("List response has no items array."))
h=J.aS(i,new A.uD(p),t.Q)
h=A.N(h,h.$ti.i("V.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
bY(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records/"+A.hI(2,a,B.l,!1))
s=3
return A.a(p.my("GET",o),$async$bY)
case 3:n=c
if(n.a===404)throw A.b(A.I5("not found"))
p.d1(n,A.l([200],t.t),o)
q=p.dW(p.d_(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bY,r)},
ig(a,b,c){return this.vN(a,b,c)},
vN(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$ig=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records")
s=3
return A.a(p.f_("POST",o,B.h.a7(A.m(["id",b,"store",c,"data",B.h.az(a,null)],t.N,t.z),null)),$async$ig)
case 3:n=e
if(n.a===400&&p.td(n))throw A.b(new A.fq(p.eK(n)))
p.d1(n,A.l([200,201],t.t),o)
q=p.dW(p.d_(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ig,r)},
td(a){var s,r,q,p,o,n
try{s=this.d_(a)
r=J.S(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.v(p,"validation_not_unique")||J.v(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fK(a,b,c){return this.yE(a,b,c)},
yE(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fK=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records/"+A.hI(2,c,B.l,!1))
s=3
return A.a(p.f_("PATCH",o,B.h.a7(A.m(["data",B.h.az(b,null)],t.N,t.z),null)),$async$fK)
case 3:n=e
p.d1(n,A.l([200],t.t),o)
q=p.dW(p.d_(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fK,r)},
iV(a,b,c,d,e){return this.yG(a,b,c,d,e)},
yG(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iV=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bt("/api/collections/data/records/"+A.hI(2,b,B.l,!1))
m=t.N
l=A.w(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a7(d,null))
if(e==null)m=null
else{m=A.n(e).i("as<2>")
m=A.N(new A.as(e,m),m.i("o.E"))}s=3
return A.a(p.uG(new A.lt("PATCH",n,B.ay,l,m==null?B.cz:m)),$async$iV)
case 3:o=g
p.d1(o,A.l([200],t.t),n)
q=p.dW(p.d_(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iV,r)},
ik(a,b,c){return this.wq(a,b,c)},
wq(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$ik=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.w(l,l)
o=p.b.bt("/api/files/data/"+A.hI(2,b,B.l,!1)+"/"+A.hI(2,a,B.l,!1))
n=l.a===0?o:o.kX(l)
s=3
return A.a(p.tH(new A.er("GET",n,B.ay,null)),$async$ik)
case 3:m=e
p.d1(new A.cG(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
fw(a){return this.xY(a)},
xY(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$fw=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bt("/api/batch")
a3=A.l([],t.ic)
for(o=J.aC(a4),n=o.gt(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.h.az(j.d,null)],m,l)],m,k))}s=3
return A.a(p.f_("POST",a2,B.h.a7(A.m(["requests",a3],m,t.ew),null)),$async$fw)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.Ht(p.eK(i)))
if(a3===400)throw A.b(new A.ed(p.eK(i)))
p.d1(i,A.l([200],t.t),a2)
h=B.h.az(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bu("Batch response has no results array."))}else throw A.b(A.bu("Batch response is not a list or envelope."))
g=e}a3=J.L(g)
if(a3.gm(g)!==o.gm(a4))throw A.b(A.bu("Batch response has "+a3.gm(g)+" results for "+o.gm(a4)+" requests."))
d=A.l([],t.g2)
for(n=t.f,c=0;c<o.gm(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bu("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.ds(a)
a0=l.R(a,200)||l.R(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dW(a1):null
k=a0?null:p.qj(b)
j=a0&&n.b(a1)?B.h.a7(a1.h(0,"data"),null):null
d.push(new A.j6(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
iN(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f_("POST",p.b.bt("/api/batch"),B.h.a7(A.m(["requests",[]],t.N,t.R),null)),$async$iN)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.GV(p.eK(o)))
if(n===408||n===429||n>=500)throw A.b(A.DO("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iN,r)},
f_(a,b,c){return this.c6(new A.uz(this,a,b,c),new A.uA(),t.w)},
my(a,b){return this.f_(a,b,null)},
uG(a){return this.c6(new A.uB(this,a),new A.uC(),t.w)},
tH(a){return this.c6(new A.ux(this,a),new A.uy(),t.lI)},
c6(a,b,c){return this.v8(a,b,c,c)},
v8(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c6=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dz(),$async$c6)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c6)
case 8:l=f
s=J.v(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.iR(),$async$c6)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c6)
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
if(i instanceof A.dB){j=i
throw A.b(A.DO(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c6,r)},
k0(a,b,c,d){return this.uE(a,b,c,d)},
uE(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$k0=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.w(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b5(new A.er(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k0,r)},
d1(a,b,c){if(B.b.G(b,a.a))return
throw A.b(this.th(a,c))},
th(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eK(a)
if(401===s)return new A.c1(q)
if(403===s)return new A.cF(q)
if(404===s)return new A.cK(q)
if(408===s||429===s)return new A.eG(r,q)
if(400===s)return new A.fK(q)
if(s>=500)return new A.jd(q)
return new A.fM("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eK(a){var s,r,q,p,o
try{s=this.d_(a)
r=J.S(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.S(s,"data")
if(t.f.b(q)){p=q
p=p.gU(p)}else p=!1
if(p){p=B.h.a7(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
d_(a){var s,r,q,p=null
try{p=B.h.az(a.c,null)}catch(r){q=A.E(r)
if(t.Y.b(q)){s=q
throw A.b(A.bu("Response is not valid JSON: "+s.gkK()))}else throw r}if(t.f.b(p))return A.ba(p,t.N,t.X)
throw A.b(A.bu("Expected a JSON object, got "+J.bp(p).l(0)+"."))},
dW(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bu("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bu("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.ba(o,n,m):A.w(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.CL(k,n)
j=A.N(j,j.$ti.i("o.E"))}else j=B.p
return new A.cM(s,p,q,l,j)},
qj(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.q(r)+")"}}
A.uD.prototype={
$1(a){return this.a.dW(a)},
$S:115}
A.uz.prototype={
$1(a){var s=this
return s.a.k0(s.b,s.c,s.d,a)},
$S:44}
A.uA.prototype={
$1(a){return a.a},
$S:46}
A.uB.prototype={
$1(a){var s=this.b,r=t.N
r=A.cI(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dE(new A.lt(s.a,s.b,r,s.d,s.e))},
$S:44}
A.uC.prototype={
$1(a){return a.a},
$S:46}
A.ux.prototype={
$1(a){var s=this.b,r=t.N
r=A.cI(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.ep(new A.er(s.a,s.b,r,s.d))},
$S:118}
A.uy.prototype={
$1(a){return a.a},
$S:119}
A.j2.prototype={}
A.hC.prototype={}
A.uE.prototype={
aB(){var s=0,r=A.h(t.H),q,p=this
var $async$aB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eZ()
case 1:return A.e(q,r)}})
return A.f($async$aB,r)},
aH(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.D()
s=2
return A.a(n instanceof A.t?n:A.bn(n,t.H),$async$aH)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.ai()
return A.e(null,r)}})
return A.f($async$aH,r)},
eZ(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eZ=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.cX(),$async$eZ)
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
return A.a(A.Hz(n.$1(k),m),$async$eZ)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eZ,r)},
cX(){return this.pV()},
pV(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.dz(),$async$cX)
case 3:m=b
l=t.N
s=4
return A.a(n.a.ep(new A.er("GET",n.b.bt("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cX)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.it("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aV(new A.uH()).D(),$async$cX)
case 7:s=1
break
case 6:++p.as
p.z=new A.az(new A.t($.C,t.D),t.h)
n=$.oQ()
l=A.l([],t.s)
o.a=o.b=!1
p.y=k.c.bT(new A.uI(o,p,new A.zj(new A.y9(n),l),m),new A.uJ(p),new A.uK(p))
s=8
return A.a(p.z.a,$async$cX)
case 8:p.y=null
if(o.a)throw A.b(A.it("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cX,r)},
hm(a,b){return this.rf(a,b)},
rf(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hm=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b5(new A.er("POST",l.b.bt("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a7(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$hm)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.it("realtime subscribe status "+l,null))
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
l=l.b(j)?A.ba(j,t.N,t.X):B.n
if(t.j.b(f)){c=J.CL(f,t.N)
c=A.N(c,c.$ti.i("o.E"))}else c=B.p
m=new A.cM(k,e,d,l,c)
p.w.$1(new A.j2(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$hm,r)}}
A.uL.prototype={
$1(a){return A.FB(a,this.a,this.b,A.Mn())},
$S:120}
A.uH.prototype={
$1(a){},
$S:27}
A.uI.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.wI(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.r)(k),++n){m=k[n]
r.Q=r.Q.an(new A.uF(q,r,m,p),o).mZ(new A.uG())}},
$S:27}
A.uF.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=n.a
if(k.a){s=1
break}p=4
s=7
return A.a(n.b.hm(n.c,n.d),$async$$1)
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
return A.a(l instanceof A.t?l:A.bn(l,t.H),$async$$1)
case 8:k=k.z
if((k.a.a&30)===0)k.ai()
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
$S:121}
A.uG.prototype={
$1(a){},
$S:29}
A.uJ.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.ai()},
$S:0}
A.uK.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.ai()},
$S:29}
A.zj.prototype={
wI(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.l0()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.ta(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dq(p,o,q)))
p=o+1
m=this.qa(B.a.yz(new A.dn(!0).cY(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.b6(s,p))
return r},
ta(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qs(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.ab(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.ab(k)
try{q=B.h.az(r,l)
if(t.f.b(q)){p=A.ba(q,t.N,t.X)
o=J.S(p,"clientId")
if(J.v(s,"PB_CONNECT")&&typeof o=="string")return new A.hC(o,l)
return new A.hC(l,p)}}catch(n){}return l},
qa(a){var s,r=this,q=null
if(a.length===0)return r.qs()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.ab(r.c)
return new A.hC(B.a.cj(B.a.ag(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.cj(B.a.ag(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.cj(B.a.ag(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.er.prototype={}
A.dA.prototype={
oN(){return this.d.$0()},
gm(a){return this.c}}
A.lt.prototype={}
A.cG.prototype={}
A.dB.prototype={
l(a){return"HttpTransportException: "+this.a},
$iH:1}
A.dR.prototype={}
A.uu.prototype={
b5(a){return this.oC(a)},
oC(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.ep(a),$async$b5)
case 7:m=c
j=m.c
s=8
return A.a(B.aL.lq(j).ei(0).iT(B.ad),$async$b5)
case 8:l=c
j=m.a
i=m.b
q=new A.cG(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.E(g)
if(j instanceof A.dB)throw g
else{k=j
j=A.it("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b5,r)},
dE(a){return this.oD(a)},
oD(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dE=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.I1(a6.a,a6.b)
h.r.C(0,a6.c)
h.x.C(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.oN(),$async$dE)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.FX(a0)
a3=new A.fA("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cT(A.w(d,d),e))
b.push(new A.lU(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.r)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b5(m).iT(B.ad),$async$dE)
case 11:k=a8
g=k.w
s=12
return A.a(B.aL.lq(g).ei(0).iT(B.ad),$async$dE)
case 12:j=a8
g=k.b
f=k.e
q=new A.cG(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.E(a5)
if(g instanceof A.dB)throw a5
else{i=g
g=A.it("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dE,r)},
ep(a){return this.xR(a)},
xR(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ep=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.In(a,a0)
a1.r.C(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gkt().ks(j)
i.pG()
i.y=A.Mx(j)
h=i.gcq()
if(h==null){j=t.N
i.scq(A.Bx("text","plain",A.m(["charset",i.gkt().gaS()],j,j)))}else{j=i.gcq()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c8(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gkt().gaS()],j,j)
e=h.a
d=h.b
c=A.ba(h.c,j,j)
c.C(0,f)
i.scq(A.Bx(e,d,c))}}}p=4
s=7
return A.a(n.a.b5(a1).iT(B.ad),$async$ep)
case 7:m=a5
j=t.N
l=A.w(j,j)
m.e.a3(0,new A.uv(l))
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
j=A.E(a2)
if(j instanceof A.dB)throw a2
else{k=j
a=A.it("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ep,r)}}
A.uv.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:32}
A.oY.prototype={
aX(a,b){var s=this.a.an(new A.oZ(a,b),b)
this.a=s.bC(new A.p_(b),new A.p0(),t.H)
return s}}
A.oZ.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.p_.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.p0.prototype={
$2(a,b){},
$S:11}
A.bC.prototype={
gnG(){var s=this.e
return s.gm(s)===1&&J.v(s.h(0,"__lp_deleted__"),!0)}}
A.pY.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.G(d)
s=e.h(0,"record_id")
s.toString
A.G(s)
r=A.Ao(e.h(0,l),l,k)
q=A.Ao(e.h(0,j),j,k)
p=A.Ao(e.h(0,i),i,k)
o=A.Fv(e.h(0,h),h,k)
n=A.Fv(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ap(m)
return new A.bC(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Ao(e.h(0,f),f,k):null)},
$S:122}
A.pZ.prototype={
fl(a){return this.xw(a)},
xw(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$fl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.r.y_("lp_conflicts","detected_at ASC",n,o),$async$fl)
case 3:o=m.aS(c,A.LA(),t.n8)
o=A.N(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
dD(a,b){return this.ou(a,b)},
ou(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dD)
case 3:o=d
n=J.L(o)
if(n.gF(o)){q=null
s=1
break}q=A.Bd(n.gE(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dD,r)},
yL(a){var s={},r=A.C0()
s.a=null
r.sng(A.dQ(new A.q1(s,r),new A.q2(s,this,a,new A.q3(this,r,a)),t.ba))
return r.bb().gcT()},
eu(a,b,c){return this.yp(a,b,c)},
yp(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eu=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.ap(c)
s=2
return A.a(p.a2(new A.q_(q,c,a,o.a,o,b),t.P),$async$eu)
case 2:return A.e(null,r)}})
return A.f($async$eu,r)},
f2(a,b){return this.vi(a,b)},
vi(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$f2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dD(a,b),$async$f2)
case 2:p=d
if(p==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eu(b,p.d,a),$async$f2)
case 3:return A.e(null,r)}})
return A.f($async$f2,r)},
e6(a,b){return this.vj(a,b)},
vj(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$e6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dD(a,b),$async$e6)
case 3:n=d
if(n==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=n.gnG()?4:5
break
case 4:o=p.a
if(A.mY(o)!=null)A.u(A.x(u.L))
s=6
return A.a(new A.fk(o,o.ap(a),null,null).iO(b),$async$e6)
case 6:s=1
break
case 5:s=7
return A.a(p.eu(b,n.e,a),$async$e6)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e6,r)}}
A.q3.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bb().giC()){s=1
break}p=4
s=7
return A.a(n.a.fl(n.c),$async$$0)
case 7:m=b
if(!i.bb().giC())J.aL(i.bb(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.E(h)
k=A.ae(h)
if(!i.bb().giC())i.bb().bz(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.q2.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b1(p,A.n(p).i("b1<1>")).aV(new A.q0(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.q0.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:39}
A.q1.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.t?p:A.bn(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bb().p(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.q_.prototype={
$1(a){return this.nT(a)},
nT(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.L(a3)
if(a4.gF(a3))throw A.b(A.x("No conflict found for "+a1+"/"+a2))
o=A.Bd(a4.gE(a3))
n=o.gnG()
m=n?null:A.ai(o.e)
l=n?"":A.aq(B.j.v(B.e.v(A.ai(A.bf(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aM(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bA(a8)?4:5
break
case 4:s=7
return A.a(a0.W("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.W("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.W("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a0(new A.a0(a1,A.at([a2],a4)))
a6.a0(new A.a0("lp_conflicts",A.at([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aM("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.L(k)
if(i.gU(k)){h=A.a7(J.S(i.gE(k),"base_updated"))
i=h==null?A.a7(J.S(i.gE(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.W("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cI(p.f,i,h)
g.j(0,"id",a2)
f=J.v(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.M(a4,A.dr(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bK(n?B.n:o.e,g)
d=A.N(a4,A.n(a4).c)
B.b.aG(d)
c=A.ai(A.bf(e,g))
s=13
return A.a(a0.M("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a7(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aM("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bA(a8)?14:16
break
case 14:a4=p.a.a
b=a4.ch.$0()
h=f?B.L:B.u
e=B.h.a7(d,null)
a4=a4.CW
a4===$&&A.A()
s=18
return A.a(a0.aE(0,"lp_outbox",A.Fl(l,j,b,e,h,a4.fO(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.M("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a0(new A.a0(a1,A.at([a2],i)))
a6.a0(new A.a0("lp_conflicts",A.at([a2],i)))
a4=o.d
a=A.bK(a4,g)
a.H(0,"id")
a6.bd(new A.aU(a1,a2,B.ac,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:6}
A.mO.prototype={
aB(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aB=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dQ(null,null,t.n6)
n.ay=A.dQ(null,null,t.em)}n.z=!0
s=3
return A.a(n.aR(B.dk),$async$aB)
case 3:p=5
l=n.b
s=8
return A.a(l.iL(),$async$aB)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.A()
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
n.fr=new A.b1(l,A.n(l).i("b1<1>")).aV(n.gx9())
l=n.b.ax
n.fx=new A.b1(l,A.n(l).i("b1<1>")).aV(n.gx7())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aH(),$async$aB)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.DL(B.av,new A.wh(n))
s=14
return A.a(n.aR(n.dN()),$async$aB)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d8(),$async$aB)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aB,r)},
aH(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aH=A.c(function(a,b){if(a===1)return A.d(b,r)
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
return A.a(p.k4,$async$aH)
case 3:s=4
return A.a(p.dx,$async$aH)
case 4:s=5
return A.a(p.dy.a,$async$aH)
case 5:s=6
return A.a(p.p2,$async$aH)
case 6:o=p.fr
o=o==null?null:o.D()
n=t.H
s=7
return A.a(o instanceof A.t?o:A.bn(o,n),$async$aH)
case 7:o=p.fx
o=o==null?null:o.D()
s=8
return A.a(o instanceof A.t?o:A.bn(o,n),$async$aH)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.a3
o.u(0,B.a3)
s=12
return A.a(p.ax.p(),$async$aH)
case 12:s=10
break
case 11:p.y=B.a3
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.p(),$async$aH)
case 15:case 14:p.y=B.a3
case 1:return A.e(q,r)}})
return A.f($async$aH,r)},
dN(){if(this.at)return B.bj
if(this.Q)return B.bh
if(this.as)return B.aC
return B.bi},
aR(a){return this.uW(a)},
uW(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.qg(),$async$aR)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aR,r)},
qg(){return this.p2=this.p2.an(new A.w9(this),t.H)},
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
g===$&&A.A()
s=7
return A.a(g.ib(),$async$h1)
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
if((g.c&4)===0)g.u(0,new A.h7(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h1,r)},
xa(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.uz(B.ae)},
x8(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dx.I(s))return
r=a.c
if(r!=null&&a.b===B.a9){q.p1.push("fast:"+s)
q.dx=q.dx.an(new A.wf(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hS(B.ae,A.l([s],t.s))},
h6(a){return this.qo(a)},
qo(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h6=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hS(B.ae,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.A()
s=7
return A.a(l.im(a),$async$h6)
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
break}if(!m)n.hS(B.ae,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h6,r)},
xi(){if(!this.z)return
this.p1.push("cycle")
this.d8()},
hS(a,b){var s=this,r=s.go
if(r!=null)r.D()
if(b==null)s.k2=!0
else s.k3.C(0,b)
s.go=A.cR(a,new A.we(s))},
uz(a){return this.hS(a,null)},
uy(a){var s=this.id
if(s!=null)s.D()
this.id=A.cR(B.D,new A.wd(this,a))},
jR(){this.as=!0
this.aR(B.aC)
A.ir(this.d,t.H)},
el(){var s=0,r=A.h(t.H),q,p=this,o
var $async$el=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.CW
o===$&&A.A()
s=3
return A.a(o.yn(),$async$el)
case 3:s=4
return A.a(p.aR(p.dN()),$async$el)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d8(),$async$el)
case 5:case 1:return A.e(q,r)}})
return A.f($async$el,r)},
fU(a){return this.oF(a)},
oF(a){var s=0,r=A.h(t.H),q=this,p
var $async$fU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.D()
q.k1=A.cR(B.au,new A.wg(q))
s=3
break
case 4:s=5
return A.a(q.aR(B.bh),$async$fU)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fU,r)},
bs(){var s=0,r=A.h(t.H),q=this
var $async$bs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aR(B.bj),$async$bs)
case 2:return A.e(null,r)}})
return A.f($async$bs,r)},
bf(){var s=0,r=A.h(t.H),q,p=this
var $async$bf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aR(p.dN()),$async$bf)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d8(),$async$bf)
case 4:case 1:return A.e(q,r)}})
return A.f($async$bf,r)},
jZ(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.D()}s=t.mv
r=q.k4.an(new A.wa(q,a),s)
q.k4=r.bC(new A.wb(),new A.wc(),s)
return r},
d8(){return this.jZ(null)},
b7(a){return this.qd(a)},
qd(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b7=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.N
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aR(n.dN()),$async$b7)
case 5:q=B.N
s=1
break
case 4:b3=t.N
a4=t.S
m=A.w(b3,a4)
l=A.w(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
s=6
return A.a(n.aR(B.dl),$async$b7)
case 6:b3=b8==null
if(b3){a4=n.a.dx
a5=A.n(a4).i("T<1>")
a6=A.N(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.A()
s=14
return A.a(a5.dq(h),$async$b7)
case 14:g=c0
J.c_(m,h,g.b)
if(g.f&&g.b>0)J.aL(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.E(b4)
if(a5 instanceof A.c1){n.jR()
s=9
break}else if(a5 instanceof A.bv){f=a5
k=!0
j=!0
n.ch=f.a}else throw b4
s=13
break
case 10:s=2
break
case 13:case 8:a6.length===a4||(0,A.r)(a6),++a7
s=7
break
case 9:s=n.as?15:16
break
case 15:s=17
return A.a(n.aR(B.aC),$async$b7)
case 17:q=n.ok=new A.bk(m,B.al,0,0,0,0,!0)
s=1
break
case 16:s=b3?18:19
break
case 18:p=21
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.A()
s=24
return A.a(b3.dI(e),$async$b7)
case 24:d=c0
for(b3=J.D(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.S(l,c.a)
if(a5==null)a5=0
J.c_(l,a4,a5+c.b)}p=2
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
return A.a(n.aR(B.dm),$async$b7)
case 25:a=B.a1
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.A()
s=33
return A.a(b3.fz(),$async$b7)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b2("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b7)
case 36:a0=c0
if(J.eb(a0)&&typeof J.S(J.c0(a0),"last_error")=="string"){b3=J.S(J.c0(a0),"last_error")
b3.toString
n.ch=A.G(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.E(b6)
if(b3 instanceof A.c1)n.jR()
else if(b3 instanceof A.bv){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b3=n.x
b3===$&&A.A()
s=41
return A.a(b3.bu(),$async$b7)
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
n.ch=A.q(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.N
s=1
break}if(J.aj(i)!==0)n.uy(i)
a9=k||a.f
b0=new A.aM(A.lc(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dN()
s=42
return A.a(n.aR(a9&&b1===B.bi?B.dn:b1),$async$b7)
case 42:q=n.ok=new A.bk(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b7,r)}}
A.wh.prototype={
$1(a){return this.a.xi()},
$S:59}
A.w9.prototype={
$1(a){return this.a.h1()},
$S:40}
A.wf.prototype={
$1(a){return this.a.h6(this.b)},
$S:40}
A.we.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.N(q,A.n(q).c)
s.k2=!1
q.ab(0)
if(r||p.length===0)s.d8()
else s.jZ(p)},
$S:0}
A.wd.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jZ(this.b)},
$S:0}
A.wg.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aR(p.dN()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d8(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.wa.prototype={
$1(a){return this.a.b7(this.b)},
$S:125}
A.wb.prototype={
$1(a){return B.N},
$S:126}
A.wc.prototype={
$1(a){return B.N},
$S:127}
A.d7.prototype={
l(a){return"MapFailure: "+this.a},
$iH:1}
A.ez.prototype={}
A.Aj.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.Ak.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.tT.prototype={}
A.dK.prototype={}
A.lP.prototype={}
A.z7.prototype={}
A.z5.prototype={}
A.xq.prototype={}
A.u_.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.tZ(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:129}
A.tU.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.tV.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.tW.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.tX.prototype={
$1(a){return a instanceof A.t?a:A.bq(a,t.X)},
$S:130}
A.tY.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hw(s,s.r,A.n(s).c),r=this.b,q=J.L(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:131}
A.ug.prototype={
f8(a){return this.wr(a)},
wr(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.ch.$0()
e=e.r
s=3
return A.a(e.y3("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f8)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.D(o);l.k();)m.push(A.I6(l.gn()))
l=A.aO(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.r)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.kp(e,l),$async$f8)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.r)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.G(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f8,r)},
nu(a){return this.a.a2(new A.ui(a),t.H)},
xG(a,b,c,d){return this.a.a2(new A.uj(c,d,b,a),t.H)}}
A.ui.prototype={
$1(a){return this.o6(a)},
o6(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uj.prototype={
$1(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pa.prototype={}
A.iG.prototype={}
A.j7.prototype={}
A.ul.prototype={
fO(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cK(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
es(a,b,c){return this.yc(a,b,c)},
yc(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$es=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$es)
case 3:p=e
o=J.L(p)
q=o.gF(p)?null:A.m6(o.gE(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$es,r)},
bW(a,b,c){return this.ye(a,b,c)},
ye(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bW=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bW)
case 3:p=e
o=J.L(p)
q=o.gF(p)?null:A.jn(o.gE(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
bp(a,b,c,d,e,f,g,h,i,j,k,l){return this.vt(a,b,c,d,e,f,g,h,i,j,k,l)},
vt(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bp=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a4)throw A.b(A.D_("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ao
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.u:B.L
break A}if(B.E===a5){l=a6==null?B.u:B.a0
break A}l=B.u
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.u}else{B:{if(B.C===a5){l=B.L
break B}if(B.E===a5){l=B.a0
break B}l=B.u
break B}n=l}break
case 1:C:{if(B.E===a5){l=B.a0
break C}l=B.L
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.L
break D}if(B.E===a5){l=B.a0
break D}l=B.u
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.W("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bp)
case 5:s=6
return A.a(a8.W("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bp)
case 6:s=7
return A.a(p.hW(a8,a2,a9),$async$bp)
case 7:s=8
return A.a(a8.W(a2,"id = ?",[a9]),$async$bp)
case 8:q=B.bM
s=1
break
case 4:k=p.a.ch.$0()
j=a4?null:b2.w
if(j==null)j=p.fO()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
l=t.N
f=A.aO(l)
e=a4?null:b2.r
if(e!=null)f.C(0,e)
f.C(0,a7)
d=A.N(f,f.$ti.c)
B.b.aG(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a7(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.hX(B.X)
e=B.b.B(A.ag(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aF("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.FK(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bp)
case 12:s=10
break
case 11:s=13
return A.a(a8.aF('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bp)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.C(f,B.cw)
if(o)B.b.C(f,B.ck)
s=a3?14:16
break
case 14:a3=A.hX(B.W)
l=B.b.B(A.ag(16,"?",!1,l),", ")
s=17
return A.a(a8.aF("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.FW(B.a5,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bp)
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
return A.a(a8.aF(a3.charCodeAt(0)==0?a3:a3,a1),$async$bp)
case 18:case 15:q=new A.iG()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bp,r)},
hW(a,b,c){return this.v3(a,b,c)},
v3(a,b,c){var s=0,r=A.h(t.H)
var $async$hW=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cA(a,b,c,!1),$async$hW)
case 2:return A.e(null,r)}})
return A.f($async$hW,r)},
f9(a,b){return this.ws(a,b)},
ws(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a1("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.N([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ae("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f9)
case 3:o=d
f=J.L(o)
if(f.gF(o)){q=B.cB
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.k();)n.push(A.m6(f.gn()))
f=A.aO(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.kp(g,f),$async$f9)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.r)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.G(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
li(a){if(a.length===0)return A.bq(null,t.H)
return this.a.a2(new A.ur(this,a),t.H)},
aJ(a,b){return this.uL(a,b)},
uL(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aJ=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.ap(a0).a
a4=a2.ch.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aM("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 5:o=a9
n=J.L(o)
s=!(n.gU(o)&&!J.v(J.S(n.gE(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aJ)
case 8:m=a9
n=J.L(m)
l=n.gU(m)?A.ch(a3,n.gE(m),a2.ax,a2.ay):null
s=9
return A.a(b.M(a,A.dr(a3,J.v(a5.h(0,"archived"),!0),a2.ax,a2.ay,a1,a5),"id = ?",[a1]),$async$aJ)
case 9:a6.a0(new A.a0(a0,A.at([a1],t.N)))
k=A.bK(l==null?B.n:l,a5)
k.H(0,"id")
a6.bd(new A.aU(a0,a1,B.ac,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aJ)
case 10:j=a9
a5=J.L(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 13:s=14
return A.a(p.d4(b,a0,a1,a7.c,a4),$async$aJ)
case 14:a6.a0(new A.a0(a0,A.at([a1],t.N)))
s=1
break
case 12:n=a2.ax
a2=a2.ay
i=A.ch(a3,a5.gE(j),n,a2)
h=A.aq(B.j.v(B.e.v(A.ai(A.bf(a3,i)))).a)
a5=a7.b
g=A.aq(B.j.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 18:s=19
return A.a(p.d4(b,a0,a1,a7.c,a4),$async$aJ)
case 19:a6.a0(new A.a0(a0,A.at([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.az(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.ba(d,a5,f):A.w(a5,f)
s=23
return A.a(b.M(a,A.dr(a3,J.v(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aJ)
case 23:s=24
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 24:s=25
return A.a(p.d4(b,a0,a1,a7.c,a4),$async$aJ)
case 25:a6.a0(new A.a0(a0,A.at([a1],a5)))
k=A.bK(i,c)
k.H(0,"id")
a6.bd(new A.aU(a0,a1,B.ac,B.A,i,c,k))
s=21
break
case 22:g=A.aq(B.j.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.M("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 26:s=27
return A.a(b.M("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 27:s=28
return A.a(b.M(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aJ)
case 28:a6.a0(new A.a0(a0,A.at([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aJ,r)},
d4(a,b,c,d,e){return this.ti(a,b,c,d,e)},
ti(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d4=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.M("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d4)
case 2:s=3
return A.a(a.M(q.a.ap(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d4)
case 3:return A.e(null,r)}})
return A.f($async$d4,r)},
yf(a,b,c,d,e){return this.a.a2(new A.up(c,e,d,B.G,a,b),t.H)},
nt(a,b,c,d,e,f){return this.a.a2(new A.uo(this,c,f,b,a,d,e),t.H)},
fn(a,b,c,d,e){return this.nt(a,b,c,d,B.ao,e)},
ns(a,b,c){return this.a.a2(new A.un(a,c,b),t.H)},
yn(){return this.a.a2(new A.uq(null),t.S)},
f3(a,b,c,d,e,f,g){return this.vq(a,b,c,d,e,f,g)},
vq(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$f3=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.M("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$f3)
case 2:p=A.w(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.M("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$f3)
case 3:return A.e(null,r)}})
return A.f($async$f3,r)}}
A.ur.prototype={
$1(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aJ(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.r)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.up.prototype={
$1(a){return this.oa(a)},
oa(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uo.prototype={
$1(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aE(0,"lp_dead_letter",A.m(["at",q.a.a.ch.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.M("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.un.prototype={
$1(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uq.prototype={
$1(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.M("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:132}
A.ec.prototype={
a5(){return"ApplyResult."+this.b}}
A.mh.prototype={}
A.v0.prototype={
dq(a){return this.xX(a)},
xX(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dq=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iP(b4),$async$dq)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Gw().ee(n)
if(m==null)A.u(A.bu('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aI(k)
k=l[2]
k.toString
i=A.aI(k)
k=l[3]
k.toString
h=A.aI(k)
k=l[4]
k.toString
g=A.aI(k)
k=l[5]
k.toString
f=A.aI(k)
k=l[6]
k.toString
e=A.aI(k)
l=l[7]
l.toString
d=A.aI(l)
if(i<1||i>12||g>23||f>59||e>59)A.u(A.bu('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.Be(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.uS(k))A.u(A.bu('Bad timestamp "'+n+'"'))
o=A.LT(A.Be(j,i,h,g,f,e,d).jg(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iU(B.c.bR(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dx,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.y
a4===$&&A.A()
s=6
return A.a(a4.fm(b4,null,a2,o,null,b),$async$dq)
case 6:a5=b6
a4=J.L(a5)
if(a4.gF(a5)){s=5
break}++a.ax
a6=p.tk(a5)
a7=k.h(0,b4)
if(a7==null)A.u(A.x(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.Ct(a7.a,a5),$async$dq)
case 8:s=7
return A.a(b0.aX(new b1.v8(b2,p,b3,b6,a6),l),$async$dq)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mh(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
mK(a,b){var s=B.a.a1(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a1(a.a,b.b)<=0},
uX(a,b){var s=B.a.a1(a.c,b.c)
if(s!==0)return s>0
return B.a.a1(a.a,b.a)>0},
tk(a){var s,r,q,p=J.aC(a),o=p.gE(a)
for(p=p.bk(a,1),s=p.$ti,p=new A.an(p,p.gm(0),s.i("an<V.E>")),s=s.i("V.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.uX(q,o))o=q}return o},
im(a){return this.wH(a)},
wH(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$im=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aX(new A.v2(o,p,a),t.P),$async$im)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$im,r)},
di(a,b){return this.wK(a,b)},
wK(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$di=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bG(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dx,e=n.b,d=A.a_(j),c=d.c,d=d.i("cu<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cu(j,0,200,d)
a2.jb(j,0,200,c)
a3=a2.dw(0)
a4=a3.length
b&1&&A.I(j,18)
A.bc(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.y
a7===$&&A.A()
s=12
return A.a(a7.bY(l),$async$di)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.E(b1)
if(a7 instanceof A.cK){J.aL(m,l)
s=6
break}else if(a7 instanceof A.c1)throw b1
else if(a7 instanceof A.bv){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aL(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.r)(a3),++a6
s=5
break
case 7:s=J.aj(m)!==0?13:14
break
case 13:s=15
return A.a(n.fp(b2,m),$async$di)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.u(A.x(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.r)(a5),++a6)a2.push(A.Cu(b0,a5[a6]))
s=16
return A.a(i.aX(new A.v4(n,a2,b2,b0),h),$async$di)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$di,r)},
dY(a,b,c,d){return this.tS(a,b,c,d)},
tS(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dY=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.w(c,t.nw)
a=A.w(c,t.G)
o=p.a,n=o.ax,m=o.ay,o=o.dx,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bR(i,0,j))
g=B.b.B(A.ag(h.length,"?",!1,c),", ")
j=[a2]
B.b.C(j,h)
a0=J
s=6
return A.a(a1.ae(u.m+g+")",j),$async$dY)
case 6:j=a0.D(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.G(e),A.jn(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.u(A.x(l))
a0=J
s=9
return A.a(a1.ci(d.a.a,"id IN ("+g+")",h),$async$dY)
case 9:j=a0.D(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.G(e),A.ch(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a5(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
mS(a,b,c,d,e){return this.a6(a,b,A.Cu(this.a.ap(b).a,c),null,!1,d,e)},
vv(a,b,c){return this.mS(a,b,c,null,!1)},
a6(a,b,c,d,e,f,g){return this.vu(a,b,c,d,e,f,g)},
mR(a,b,c){return this.a6(a,b,c,null,!1,null,!1)},
vu(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a6=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.ap(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bM(a4,a7,b2,a8,a9),$async$a6)
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
return A.a(n.bM(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a6)
case 8:q=B.a7
s=1
break
case 7:g=a8.a
f=$.oR()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bM(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a6)
case 11:q=B.a7
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.CW
g===$&&A.A()
s=15
return A.a(g.bW(a4,b2,a8.a),$async$a6)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aM(a6.a,1,"id = ?",[a8.a]),$async$a6)
case 19:c=b9
g=J.L(c)
d=g.gF(c)?null:A.ch(a7,g.gE(c),a5.ax,a5.ay)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dn(a4,a8.a,a8.e,b2),$async$a6)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.GL(a4,a6.a,A.dr(a7,J.v(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9)),$async$a6)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.da(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a6)
case 26:b1.a0(new A.a0(b2,A.at([a8.a],t.N)))
b=A.bK(B.n,a9)
b.H(0,"id")
b1.bd(new A.aU(b2,a8.a,B.at,B.ab,null,a9,b))
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
return A.a(n.c5(b1,b2,a8.a,a8.c,!1),$async$a6)
case 31:q=B.a8
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.M(a6.a,A.dr(a7,J.v(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9),"id = ?",[a8.a]),$async$a6)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.da(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a6)
case 33:b1.a0(new A.a0(b2,A.at([a8.a],t.N)))
b=A.bK(d,a9)
b.H(0,"id")
b1.bd(new A.aU(b2,a8.a,B.at,B.A,d,a9,b))
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
return A.a(n.c5(b1,b2,a8.a,a8.c,!1),$async$a6)
case 38:q=B.a8
s=1
break
case 37:s=a===B.a4?39:40
break
case 39:s=41
return A.a(n.c5(b1,b2,a8.a,a8.c,!1),$async$a6)
case 41:q=B.a8
s=1
break
case 40:a0=A.bf(a7,d)
s=A.ai(a0)===i?42:43
break
case 42:s=44
return A.a(a4.W("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a6)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.da(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a6)
case 45:b1.a0(new A.a0(b2,A.at([a8.a],t.N)))
q=B.a6
s=1
break
case 43:l=null
p=47
a9=m
l=A.hW(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.E(b0)
s=a5 instanceof A.d7?50:52
break
case 50:k=a5
s=53
return A.a(n.bM(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a6)
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
a9=A.FI(l,a0,new A.lP(null,B.Y,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bn(a9,t.r),$async$a6)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eX(a4,b2,a8,a7,m,a0,l,a2),$async$a6)
case 57:s=58
return A.a(n.c5(b1,b2,a8.a,a8.c,!1),$async$a6)
case 58:a5=t.N
b1.a0(new A.a0(b2,A.at([a8.a],a5)))
b1.a0(new A.a0("lp_conflicts",A.at([a8.a],a5)))
q=B.bt
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.M(a6.a,A.dr(a7,J.v(a3.h(0,"archived"),!0),a5.ax,a5.ay,a9,a3),"id = ?",[a8.a]),$async$a6)
case 59:a5=a5.CW
a5===$&&A.A()
s=60
return A.a(a5.f3(a4,b2,a8.a,h,i,a8.c,A.ai(a3)),$async$a6)
case 60:s=61
return A.a(n.uU(b1,b2,a8.a,a8.c),$async$a6)
case 61:b1.a0(new A.a0(b2,A.at([a8.a],t.N)))
b=A.bK(d,a3)
b.H(0,"id")
b1.bd(new A.aU(b2,a8.a,B.ac,B.A,d,a3,b))
q=B.a6
s=1
break
case 35:q=B.a8
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a6,r)},
eX(a,b,c,d,e,f,g,h){return this.ui(a,b,c,d,e,f,g,h)},
ui(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eX=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bf(d,A.fa(d,c))
k=A.bK(g,f)
j=A.N(k,A.n(k).c)
B.b.aG(j)
k=A.bK(g,l)
p=A.N(k,A.n(k).c)
B.b.aG(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ai(g)
n=t.N
m=t.X
s=2
return A.a(a.cc(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ai(f),"remote_json",A.ai(l),"dirty_local",B.h.a7(j,null),"dirty_remote",B.h.a7(p,null),"detected_at",q.c.ay.$0()],n,m),B.Q),$async$eX)
case 2:s=3
return A.a(a.M("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(l),"base_hash",A.aq(B.j.v(B.e.v(A.ai(A.bf(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eX)
case 3:return A.e(null,r)}})
return A.f($async$eX,r)},
bM(a,b,c,d,e){return this.ua(a,b,c,d,e)},
ua(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bM=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a7(d.d,null)}catch(a1){o=t.N
e=B.h.a7(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aE(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bM)
case 2:j=q.a.CW
j===$&&A.A()
s=3
return A.a(j.bW(a,c,m),$async$bM)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.N(o.n7(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aE(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bM)
case 7:s=5
break
case 6:s=8
return A.a(a.M("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bM)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bM,r)},
da(a,b,c,d,e,f,g,h){return this.v2(a,b,c,d,e,f,g,!0)},
v2(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$da=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.ap(b)
o=A.w(t.N,t.X)
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
return A.a(a.aE(0,"lp_sync_row",o),$async$da)
case 5:s=3
break
case 4:s=6
return A.a(a.M("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$da)
case 6:case 3:return A.e(null,r)}})
return A.f($async$da,r)},
c5(a,b,c,d,e){return this.uV(a,b,c,d,e)},
uU(a,b,c,d){return this.c5(a,b,c,d,!0)},
uV(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c5=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.w(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.M("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c5)
case 2:s=3
return A.a(p.M(q.a.ap(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c5)
case 3:if(g>0)a.a0(new A.a0(b,A.at([c],o)))
return A.e(null,r)}})
return A.f($async$c5,r)},
fp(a,b){return this.xH(a,b)},
xH(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bG(b,!0,t.N)
n=A.a_(o),m=n.c,n=n.i("cu<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cu(o,0,500,n)
i.jb(o,0,500,m)
h=i.dw(0)
g=h.length
l&1&&A.I(o,18)
A.bc(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aX(new A.v6(p,a,h),j),$async$fp)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fp,r)}}
A.v8.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.v7(s.a,r,s.c,s.d,s.e),t.P)},
$S:18}
A.v7.prototype={
$1(a){return this.oh(a)},
oh(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.ap(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.aC(p),n=o.gt(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dY(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aO(t.N)
a2=o.gt(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mK(i,c)){s=3
break}p=i.a
s=j.G(0,p)?5:7
break
case 5:s=8
return A.a(a.mR(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a6(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.mK(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.ez(b,a1,e,f),$async$$1)
case 10:d.a=new A.j5(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.v2.prototype={
$0(){var s=this.b
return s.a.a2(new A.v1(this.a,s,this.c),t.P)},
$S:18}
A.v1.prototype={
$1(a){return this.oe(a)},
oe(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.CW
k===$&&A.A()
o=p.c
n=o.b
s=3
return A.a(k.bW(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.vv(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a1(o.c,k)<=0){s=1
break}s=7
return A.a(l.mS(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:6}
A.v4.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.v3(r,s.b,s.c,s.d),t.P)},
$S:18}
A.v3.prototype={
$1(a){return this.of(a)},
of(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.r)(p),++n)e.push(p[n].a.a)
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
s=i.G(0,g)?6:8
break
case 6:s=9
return A.a(o.mR(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a6(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.u(0,g)
case 7:case 4:p.length===e||(0,A.r)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.v6.prototype={
$0(){var s=this.a
return s.a.a2(new A.v5(s,this.b,this.c),t.P)},
$S:18}
A.v5.prototype={
$1(a){return this.og(a)},
og(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.ap(g).a
e=h.ap(g).a.a
d=q.c
c=t.N
b=B.b.B(A.ag(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.w(c,t.G)
a1=J
s=2
return A.a(i.ci(e,a,d),$async$$1)
case 2:p=a1.D(a4),o=h.ax,h=h.ay
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.G(m),A.ch(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.C(o,d)
s=5
return A.a(i.M("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.M(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a0(new A.a0(g,A.tz(d,A.a_(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.r)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dH(null,null,c,h)
p.C(0,j)
p.j(0,"hidden",!0)
a2.bd(new A.aU(g,k,B.at,B.bV,j,p,B.dc))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.b5.prototype={}
A.v9.prototype={
fz(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.CW
f===$&&A.A()
s=3
return A.a(f.f9(25,p.c.ay.$0()),$async$fz)
case 3:o=b
f=J.L(o)
if(f.gF(o)){q=B.a1
s=1
break}if(p.f){q=p.b9(o)
s=1
break}f=f.gt(o),n=B.a1
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dZ(f.gn()),$async$fz)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.b5(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
dZ(a){return this.u3(a)},
u3(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.CW
l===$&&A.A()
m=m.r
s=3
return A.a(l.es(m,a.a,a.b),$async$dZ)
case 3:o=c
if(o==null){q=B.a1
s=1
break}s=4
return A.a(l.bW(m,o.a,o.b),$async$dZ)
case 4:n=c
if(n==null){q=B.a1
s=1
break}if(o.e==null){q=p.u1(o,n)
s=1
break}q=p.jT(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
bJ(a,b,c,d,e){return this.rt(a,b,c,d,e)},
rs(a,b,c,d){return this.bJ(a,b,c,!1,d)},
rq(a,b,c){return this.bJ(a,b,c,!1,!1)},
rr(a,b,c,d){return this.bJ(a,b,c,d,!1)},
rt(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bJ=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bJ)
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
s=k instanceof A.c1?8:10
break
case 8:n.e.$0()
q=B.an
s=1
break
s=9
break
case 10:s=k instanceof A.cF?11:13
break
case 11:k=n.a.CW
k===$&&A.A()
s=14
return A.a(k.ns("forbidden_push",a.b,a.a),$async$bJ)
case 14:q=B.cV
s=1
break
s=12
break
case 13:s=k instanceof A.fK?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.cZ(a,"validation_push",m.a),$async$bJ)
case 20:q=B.M
s=1
break
case 19:q=n.cu(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cK){q=n.dS(a,b,!e)
s=1
break}else if(k instanceof A.bv){l=k
q=n.cu(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bJ,r)},
jS(a,b,c){return this.u2(a,b,c)},
u1(a,b){return this.jS(a,b,!1)},
u2(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bJ(a,b,new A.vb(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jS,r)},
jW(a,b,c){return this.uj(a,b,c)},
uj(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jW=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.rs(a,b,new A.vg(p,a,p.a.ap(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jW,r)},
jT(a,b){return this.u4(a,b)},
u4(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.rq(a,b,new A.ve(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jT,r)},
d6(a,b,c,d){return this.u6(a,b,c,d)},
u5(a,b,c){return this.d6(a,b,c,!1)},
u6(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d6=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.lA(a,c)
j=n.a.ap(a.a).a
i=a.d
s=A.aq(B.j.v(B.e.v(A.ai(A.bf(j,A.fa(j,c))))).a)===A.aq(B.j.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eV(a,c),$async$d6)
case 5:q=B.a2
s=1
break
case 4:m=null
l=null
p=7
m=A.hW(b.r)
l=A.hW(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.E(f)
s=i instanceof A.d7?10:12
break
case 10:k=i
s=13
return A.a(n.cZ(a,"corrupt_payload",k.a),$async$d6)
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
return A.a(n.dV(a,b,c,j,m,l),$async$d6)
case 14:g=a0
if(g==null){q=B.bb
s=1
break}q=n.bJ(a,b,new A.vc(n,a,A.ai(A.bf(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d6,r)},
b9(a){return this.u0(a)},
u0(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b9=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.l([],t.k1)
c0=t.N
c1=A.w(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.w(c0,c0)
c0=J.D(d0),d=n.a,c=d.y,b=n.b,a=d.dx,a0=d.r
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.CW
a2===$&&A.A()
s=5
return A.a(a2.es(a0,a1.a,a1.b),$async$b9)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bW(a0,m.a,m.b),$async$b9)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.u(A.x('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.y
a5===$&&A.A()
s=11
return A.a(a5.bY(a1),$async$b9)
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
return A.a(n.m4(m,l),$async$b9)
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
case 14:s=a1 instanceof A.c1?18:20
break
case 18:n.e.$0()
q=B.an
s=1
break
s=19
break
case 20:s=a1 instanceof A.cF?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.ns("forbidden_push",m.b,a1),$async$b9)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bv?25:27
break
case 25:i=a1
s=28
return A.a(n.cu(m,l,i),$async$b9)
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
if(a1!==a5)A.u(A.ew('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a1("")
A.ci(a7,A.bf(a4,A.fa(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c4()
a5=A.cY(a8)
a5.u(0,a1)
a5.p()
a9=A.aq(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c4()
a1=A.cY(a8)
a1.u(0,a5)
a1.p()
s=a9===A.aq(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eV(m,k),$async$b9)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.hW(l.r)
f=A.hW(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.E(c9)
s=a1 instanceof A.d7?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fn(e.a,a5,"corrupt_payload",m.d,a1),$async$b9)
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
return A.a(n.dV(m,l,k,a4,g,f),$async$b9)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a1("")
A.ci(a7,A.bf(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.fO(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.fO(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.c4(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b9)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b5(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b5(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b9,r)},
dV(a,b,c,d,e,f){return this.tl(a,b,c,d,e,f)},
tl(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dV=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.fa(d,c)
n=A.FI(e,f,new A.lP(null,B.Y,!1),a.b,A.bf(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bn(n,t.r),$async$dV)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hM(a,b,c,m,e,f),$async$dV)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
c4(a,b,c){return this.uF(a,b,c)},
uF(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c4=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.y
a7===$&&A.A()
s=7
return A.a(a7.fw(b9),$async$c4)
case 7:m=c3
a7=t.N
l=A.w(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.r)(b9),++a9){k=b9[a9]
J.c_(l,k.a,k)}j=l
i=A.aO(a7)
for(l=J.D(m);l.k();){h=l.gn()
if(!J.aL(i,h.a)){l=A.bu("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.bu("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.D(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.S(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jM(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c4()
b2=A.cY(b1)
b2.u(0,b0)
b2.p()
b2=A.aq(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aL(g,new A.j7(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.CW
a8===$&&A.A()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.fn(b4,b2,b3,e.d,b0),$async$c4)
case 13:++b7
case 11:s=8
break
case 9:l=a7.CW
l===$&&A.A()
s=14
return A.a(l.li(g),$async$c4)
case 14:l=b6
a7=b7
q=new A.b5(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.E(b8)
s=l instanceof A.ed?15:17
break
case 15:q=n.c1(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cF?18:20
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
return A.a(n.dZ(n.mb(a0)),$async$c4)
case 24:a1=c3
b6+=a1.a
b7+=a1.b
d+=a1.c
c+=a1.d
b+=a1.e
a=a||a1.f
case 22:b9.length===l||(0,A.r)(b9),++a9
s=21
break
case 23:q=new A.b5(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.c1?25:27
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
a3=a2 instanceof A.eG?a2:new A.ha("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.CW
b0===$&&A.A()
s=34
return A.a(b0.bW(a8,a4.b,a4.c),$async$c4)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cu(n.mb(a4),a5,a3),$async$c4)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.r)(b9),++a9
s=31
break
case 33:q=new A.b5(b6,b7,0,0,0,!0)
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
return A.f($async$c4,r)},
c1(a,b,c){return this.pv(a,b,c)},
pv(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$c1=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.L(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gar(b5)
h=n.a.CW
h===$&&A.A()
b3=g.b
s=5
return A.a(h.fn("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$c1)
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
a6===$&&A.A()
s=13
return A.a(a6.fw(j),$async$c1)
case 13:i=b9
h=A.w(a2,a4)
for(a6=J.D(j);a6.k();){g=a6.gn()
J.c_(h,g.a,g)}f=h
e=A.aO(a2)
for(a6=J.D(i);a6.k();){d=a6.gn()
if(!J.aL(e,d.a)){a6=A.bu("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.bu("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.D(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.S(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jM(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.e_(a7,a8,a9,b0==null?b.d:b0),$async$c1)
case 19:++m
s=17
break
case 18:a7=a1.CW
a7===$&&A.A()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.fn(b1,a9,b0,b.d,a8),$async$c1)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.E(b4)
s=a6 instanceof A.ed?21:23
break
case 21:s=24
return A.a(n.c1(j,b6,b7),$async$c1)
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
case 8:q=new A.b5(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c1,r)},
jM(a,b){var s=b==null?a.d:b
return new A.co(a.b,a.c,B.u,s,a.e,A.aq(B.j.v(B.e.v(a.d)).a),B.p,a.a,0,null)},
mb(a){return this.jM(a,null)},
e_(a,b,c,d){return this.uK(a,b,c,d)},
eV(a,b){return this.e_(a,b,null,null)},
uK(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$e_=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.ap(a.a).a
n=A.fa(o,b)
m=d==null
l=m?A.ai(A.bf(o,n)):d
p=p.CW
p===$&&A.A()
s=2
return A.a(p.li(A.l([new A.j7(a,l,b.c,A.aq(B.j.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$e_)
case 2:return A.e(null,r)}})
return A.f($async$e_,r)},
lA(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ew('record id "'+s+'" does not match requested "'+r+'"'))},
cu(a,b,c){return this.us(a,b,c)},
us(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cu=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.eG?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.CW
o===$&&A.A()
s=5
return A.a(o.nt(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$cu)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.n8(l,k)
m=p.a.CW
m===$&&A.A()
s=6
return A.a(m.yf(a.a,a.b,l,c.a,o.ay.$0()+B.c.N(n.a,1000)),$async$cu)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cu,r)},
cZ(a,b,c){return this.q4(a,b,c)},
q3(a,b){return this.cZ(a,b,null)},
q4(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cZ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.CW
o===$&&A.A()
p=c==null?b:c
s=2
return A.a(o.fn(p,a.b,b,a.d,a.a),$async$cZ)
case 2:return A.e(null,r)}})
return A.f($async$cZ,r)},
dS(a,b,c){return this.rj(a,b,c)},
m4(a,b){return this.dS(a,b,!0)},
rj(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dS=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.ap(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:m=null
l=null
p=7
m=A.hW(b.r)
l=A.hW(a.d)
p=2
s=9
break
case 7:p=6
h=o.pop()
i=A.E(h)
s=i instanceof A.d7?10:12
break
case 10:k=i
s=13
return A.a(n.cZ(a,"corrupt_payload",k.a),$async$dS)
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
return A.a(n.h4(a,b,m,l),$async$dS)
case 14:q=B.bb
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dS,r)},
h4(a,b,c,d){return this.qk(a,b,c,d)},
qk(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$h4=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bK(c,d)
n=A.N(o,A.n(o).c)
B.b.aG(n)
p=b.r
if(p==null)p=A.ai(c)
s=2
return A.a(q.a.a2(new A.va(q,a,p,d,n),t.P),$async$h4)
case 2:return A.e(null,r)}})
return A.f($async$h4,r)},
hM(a,b,c,d,e,f){return this.uh(a,b,c,d,e,f)},
uh(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hM=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.ap(a.a).a
m=A.bf(n,A.fa(n,c))
l=A.bK(e,f)
k=A.N(l,A.n(l).c)
B.b.aG(k)
l=A.bK(e,m)
p=A.N(l,A.n(l).c)
B.b.aG(p)
s=2
return A.a(o.a2(new A.vf(q,a,b,e,f,m,k,p,n,c),t.P),$async$hM)
case 2:return A.e(null,r)}})
return A.f($async$hM,r)}}
A.vb.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.A()
s=7
return A.a(j.ig(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eV(k,m),$async$$0)
case 8:q=B.a2
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.E(h) instanceof A.fq){q=n.a.jW(n.b,n.c,n.d)
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
A.vg.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.A()
s=3
return A.a(l.bY(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.q3(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.aq(B.j.v(B.e.v(A.ai(A.bf(l,A.fa(l,o))))).a)===A.aq(B.j.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eV(m,o),$async$$0)
case 9:q=B.a2
s=1
break
case 8:q=n.d6(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.ve.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.A()
s=3
return A.a(l.bY(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.m4(m,p.c)
s=1
break}n.lA(m,o)
if(o.c===m.e){l=p.c
q=n.rr(m,l,new A.vd(n,m,o,l),!0)
s=1
break}q=n.u5(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.vd.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.A()
s=7
return A.a(j.fK(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eV(k,m),$async$$0)
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
$S:19}
A.vc.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.y
l===$&&A.A()
k=o
j=n
s=4
return A.a(l.fK(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.e_(j,b,p.e.a,m),$async$$0)
case 3:q=B.a2
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.va.prototype={
$1(a){return this.oi(a)},
oi(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cc(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ai(q.d),"remote_json",A.ai(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a7(q.e,null),"dirty_remote",B.h.a7(B.p,null),"detected_at",q.a.c.ay.$0()],k,j),B.Q),$async$$1)
case 2:s=3
return A.a(p.M("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a0(new A.a0(n,A.at([m],k)))
a.a0(new A.a0("lp_conflicts",A.at([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.vf.prototype={
$1(a){return this.oj(a)},
oj(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cc(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ai(q.e),"remote_json",A.ai(o),"dirty_local",B.h.a7(q.r,null),"dirty_remote",B.h.a7(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.Q),$async$$1)
case 2:s=3
return A.a(l.M("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(o),"base_hash",A.aq(B.j.v(B.e.v(A.ai(A.bf(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a0(new A.a0(j,A.at([k],n)))
a.a0(new A.a0("lp_conflicts",A.at([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.cb.prototype={
a5(){return"SyncEngineState."+this.b}}
A.bk.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.h7.prototype={}
A.h6.prototype={}
A.w6.prototype={
glC(){return 36},
dI(a){return this.p5(a)},
p5(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dI=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dx,g=new A.bF(g,g.r,g.e,A.n(g).i("bF<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iQ(m),$async$dI)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glC():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.al(c.a+1,n.glC())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bH(m,a),$async$dI)
case 13:a5.aL(a6,a9)
case 11:++j
s=10
break
case 12:if(A.mY(h)!=null)A.u(A.x(u.L))
b=h.b
b===$&&A.A()
s=14
return A.a(b.aY(new A.w7(c,n,m,a3),B.o,f),$async$dI)
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
return A.f($async$dI,r)},
bH(a,b){return this.p0(a,b)},
p0(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bH=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aO(t.N)
m=B.c.iU(B.c.bR(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.y
g===$&&A.A()
s=5
return A.a(g.fm(a4,B.cE,h,null,o,m),$async$bH)
case 5:f=a7
g=J.L(f)
if(g.gF(f)){s=4
break}for(e=g.gt(f);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=g.gt(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hL(a4,e),$async$bH)
case 6:c=a7
b=A.l([],l)
for(e=g.gt(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aN||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.di(a4,b),$async$bH)
case 9:i+=b.length
case 8:h=g.gY(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ae("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bH)
case 10:a1=a7
a2=A.l([],l)
for(e=J.D(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.G(a)
if(!n.G(0,a)){if(J.v(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fp(a4,a2),$async$bH)
case 13:case 12:s=14
return A.a(k.ae("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bH)
case 14:a3=a7
k=J.L(a3)
s=k.gU(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.G(g))}s=17
return A.a(j.di(a4,l),$async$bH)
case 17:case 16:q=new A.h6(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bH,r)},
hL(a,b){return this.tV(a,b)},
tV(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.w(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bR(l,0,m))
j=B.b.B(A.ag(k.length,"?",!1,g),", ")
m=[a]
B.b.C(m,k)
e=J
s=6
return A.a(o.ae(u.m+j+")",m),$async$hL)
case 6:m=e.D(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.G(h),A.jn(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)}}
A.w7.prototype={
$1(a){return this.om(a)},
om(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eA(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.bv.prototype={
l(a){return A.dt(this).l(0)+": "+this.a},
$iH:1}
A.ha.prototype={}
A.eG.prototype={}
A.jd.prototype={}
A.c1.prototype={}
A.cF.prototype={}
A.cK.prototype={}
A.fK.prototype={}
A.fM.prototype={}
A.fq.prototype={}
A.ed.prototype={}
A.h4.prototype={
gm(a){return this.b}}
A.cM.prototype={}
A.fO.prototype={}
A.j6.prototype={}
A.kG.prototype={
a5(){return"BackendHintKind."+this.b}}
A.cC.prototype={}
A.AA.prototype={
$2(a,b){return B.a.iK(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:135}
A.w8.prototype={
n8(a,b){var s,r
if(b!=null){s=this.tJ(b)
if(A.ar(s))return A.d2(0,0,s<0?0:s)
if(s instanceof A.aM){r=s.a-this.ay.$0()
return r<=0?B.D:A.d2(0,r,0)}return B.au}return A.FB(a,B.au,B.av,this.at)},
n7(a){return this.n8(a,null)},
tJ(a){var s=B.a.cj(a),r=A.j3(s,null)
if(r!=null)return r
return A.IH(s)}}
A.j5.prototype={}
A.jl.prototype={}
A.wj.prototype={
iP(a){return this.yb(a)},
yb(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.eq("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iP)
case 3:m=c
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}o=A.a7(J.S(l.gE(m),"cursor_updated"))
n=A.a7(J.S(l.gE(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.j5(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iP,r)},
ez(a,b,c,d){return this.z1(a,b,c,d)},
z1(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ez=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ez)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$ez)
case 6:s=3
break
case 4:s=7
return A.a(a.M("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$ez)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ez,r)},
iQ(a){return this.yd(a)},
yd(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.eq("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iQ)
case 3:n=c
m=J.L(n)
if(m.gF(n)){q=B.di
s=1
break}o=A.bd(J.S(m.gE(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jl(o,A.bd(J.S(m.gE(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iQ,r)},
eA(a,b,c,d){return this.z5(a,b,c,d)},
z5(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eA=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eA)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eA)
case 6:s=3
break
case 4:s=7
return A.a(a.M("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eA)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eA,r)},
ib(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$ib=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b2("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$ib)
case 3:l=b
k=J.L(l)
j=k.gF(l)?B.n:k.gE(l)
k=A.bd(j.h(0,"pending"))
if(k==null)k=0
o=A.bd(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bd(j.h(0,"hidden"))
if(n==null)n=0
m=A.bd(j.h(0,"blocked"))
q=new A.o2([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)}}
A.cQ.prototype={
a5(){return"SyncState."+this.b}}
A.i1.prototype={
a5(){return"AccessState."+this.b}}
A.fJ.prototype={
a5(){return"OutboxKind."+this.b}}
A.j0.prototype={
a5(){return"OpQueueKind."+this.b}}
A.AW.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cP.prototype={}
A.wi.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
i=j.h(0,"record_id")
i.toString
A.G(i)
i=A.a7(j.h(0,"remote_updated"))
s=A.bd(j.h(0,"last_seen_at"))
r=A.a7(j.h(0,"base_updated"))
A.a7(j.h(0,"base_hash"))
q=A.a7(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fs(B.co,A.G(p))
A.Fu(j.h(0,"dirty_fields"))
o=A.bd(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fs(B.cm,A.G(n))
A.a7(j.h(0,"op_id"))
m=A.bd(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bd(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a7(j.h(0,"last_error"))
A.bd(j.h(0,"schema_ver"))
return new A.cP(i,s,r,q,p,o,n,m,l,k)},
$S:136}
A.co.prototype={}
A.um.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
s=j.h(0,"record_id")
s.toString
A.G(s)
r=j.h(0,"kind")
r.toString
r=A.fs(B.cx,A.G(r))
q=j.h(0,"payload_json")
q.toString
A.G(q)
p=A.a7(j.h(0,"base_updated"))
o=A.a7(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Fu(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.G(m)
l=j.h(0,"created_at")
l.toString
A.ap(l)
k=j.h(0,"updated_at")
k.toString
A.ap(k)
return new A.co(i,s,r,q,p,o,n,m,l,A.a7(j.h(0,"depends_on_op")))},
$S:137}
A.eB.prototype={}
A.uh.prototype={
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
q=A.fs(B.cs,A.G(q))
p=m.h(0,"payload_json")
p.toString
A.G(p)
o=m.h(0,"state")
o.toString
A.G(o)
o=A.bd(m.h(0,"attempt_count"))
if(o==null)o=0
A.bd(m.h(0,"next_retry_at"))
A.a7(m.h(0,"last_error"))
n=A.a7(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ap(m)
return new A.eB(l,s,r,q,p,o,n)},
$S:138}
A.AU.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:51}
A.AV.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:51}
A.ww.prototype={}
A.tA.prototype={
cI(a,b){return this.wZ(a,b)},
wZ(a,b){var s=0,r=A.h(t.X),q,p
var $async$cI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.f9(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cI,r)},
iJ(a,b,c,d){return this.xQ(a,b,c,d)},
xQ(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$iJ=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.xM(a6,a7)
a=t.N
a0=new A.ii(A.w(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.a7(A.FQ(a2?null:A.oI(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.tB(a3)
a0.e=new A.tC(a3)
p=4
b.K("PRAGMA journal_mode=TRUNCATE")
f=b.fS("PRAGMA journal_mode")
n=f.gE(f).b[0]
if(J.Z(n).toLowerCase()!=="truncate"){a=A.x("journal_mode read-back was "+A.q(n)+", expected truncate")
throw A.b(a)}m=A.Mg(a2?null:A.oI(a8))
e=t.bE.a(J.S(m,"stores"))
l=e==null?A.l([],t.aw):e
d=A.bd(J.S(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.ED(J.S(m,"destructiveBackup"))
j=f!==!1
i=A.Mf(A.FQ(a2?null:A.oI(a8),"fieldCipher"))
if(A.LY(l,i)){a=A.av("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.wU(A.w(a,t.p))
s=7
return A.a(A.d4(h,a0,j,i,k,a6,B.aA,l),$async$iJ)
case 7:g=b0
a1=!0
a=b
a2=t.be
f=t.S
q=new A.lN(a,new A.x4(a,g,A.w(f,t.oS),new A.wA(A.M8(),A.w(f,t.oc)),A.aO(a2)),A.w(t.eg,a2))
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
if(!a1)b.p()
throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iJ,r)}}
A.tB.prototype={
$1(a){return A.oB(this.a,a)},
$S:140}
A.tC.prototype={
$1(a){return A.oC(this.a,a)},
$S:141}
A.lN.prototype={
cI(a,b){return this.x_(a,b)},
x_(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.Bw(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.HS(n)
if(o==null){q=A.Bw(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.iw(p.e.kS(a,new A.tL(a)),o),$async$cI)
case 3:q=m.HT(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cI,r)}}
A.tL.prototype={
$0(){return new A.ho(this.a)},
$S:142}
A.ho.prototype={$ini:1}
A.Av.prototype={
$2(a,b){this.a.j(0,J.Z(a),A.d_(b))},
$S:26}
A.Ap.prototype={
$2(a,b){this.a.j(0,J.Z(a),A.oK(b))},
$S:26}
A.cV.prototype={}
A.wA.prototype={
gnK(){var s=this.r
return new A.as(s,A.n(s).i("as<2>")).wS(0,0,new A.wD())},
nf(){var s,r=this.r,q=A.n(r).i("as<2>"),p=q.i("cm<o.E,i>"),o=A.N(new A.cm(new A.al(new A.as(r,q),new A.wB(this.f.$0()),q.i("al<o.E>")),new A.wC(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.r)(o),++s)r.H(0,o[s])
return p}}
A.wD.prototype={
$2(a,b){return a+b.f},
$S:143}
A.wB.prototype={
$1(a){return!a.z.kF(this.a)},
$S:144}
A.wC.prototype={
$1(a){return a.a},
$S:145}
A.AO.prototype={
$1(a){return A.Mh(a)},
$S:146}
A.AF.prototype={
$1(a){return B.b.bQ(a.c,new A.AE())},
$S:147}
A.AE.prototype={
$1(a){return a.e},
$S:52}
A.hh.prototype={
q(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.wZ.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.x)},
$S:31}
A.nd.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.q())
else q.j(0,"r",r.c)
return q}}
A.wW.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.ig.prototype={
l(a){return"DatabaseWorkerClosedException: "+this.a},
$iH:1}
A.j4.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iH:1}
A.mo.prototype={
l(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iH:1}
A.a2.prototype={
a_(a,b,c){var s,r,q,p=this.a.h(0,a)
if(!c.b(p)){s=b==null?"":" for "+b
r=A.DW(c)
q=p==null?"null":A.DX(p)
throw A.b(A.bU('Missing or invalid "'+a+'" argument'+s+": expected "+r+", got "+q+"."))}return p},
Z(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.bU('Invalid "'+a+'" argument: expected '+A.DW(b)+", got "+A.DX(s)+"."))
return b.a(s)}}
A.hi.prototype={}
A.ju.prototype={}
A.eN.prototype={}
A.As.prototype={
$2(a,b){var s,r,q=J.Z(a)
if(t.f.b(b))this.a.j(0,q,A.f7(b))
else{s=this.a
if(t.j.b(b)){r=J.aS(b,new A.Ar(),t.z)
r=A.N(r,r.$ti.i("V.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:41}
A.Ar.prototype={
$1(a){return t.f.b(a)?A.f7(a):a},
$S:37}
A.nh.prototype={
jw(a,b){return this.qF(a,b)},
qF(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$jw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.jq(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jw,r)},
jq(a){return this.q9(a)},
q9(a6){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$jq=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:c=a6.h(0,"type")
b=a6.h(0,"operation")
a=a6.h(0,"compilerVersion")
a0=a6.h(0,"store")
a1=a6.h(0,"schemaVersion")
a2=a6.h(0,"schemaFingerprint")
a3=a6.h(0,"argumentCount")
a4=a6.h(0,"sql")
a5=a6.h(0,"args")
if(!J.v(c,"query_plan")||typeof b!="string"||!B.dd.G(0,b)||!J.v(a,2)||typeof a0!="string"||!A.ar(a1)||typeof a2!="string"||!A.ar(a3)||typeof a4!="string"||!t.j.b(a5))A.u(A.bU("Malformed or stale compiled query plan."))
o=p.c
n=o.ap(a0).a
m=A.aq(B.j.v(B.e.v(A.ai(n.q()))).a)
if(n.b!==a1||m!==a2||J.aj(a5)!==a3||!B.a.S(a4,"SELECT "))A.u(A.bU("Stale or mismatched compiled query plan."))
l=a6.h(0,"projection")
a6.h(0,"limit")
a6.h(0,"shape")
k=a6.h(0,"decodeColumns")
c.toString
A.G(c)
j=t.X
i=J.aS(a5,A.Fo(),j)
i=A.N(i,i.$ti.i("V.E"))
j=A.cJ(i,j)
i=t.j
h=i.b(l)?J.i0(l,t.N):null
i=i.b(k)?J.i0(k,t.N):null
g=a6.h(0,"sessionId")
f=A.ar(g)?new A.x7(p.cD(g)):new A.x8(p)
e=a6.h(0,"pageLimit")
d=A.ar(e)?e:null
o=o.d
o===$&&A.A()
q=A.Aw(o.a.a,f,new A.vq(b,a0,a4,j,h,i),d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jq,r)},
d3(a,b){return this.qA(a,b)},
qA(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$d3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cB(),$async$d3)
case 3:o=p.f,n=new A.aT(o,o.r,o.e,A.n(o).i("aT<2>"))
case 4:if(!n.k()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$d3)
case 6:s=4
break
case 5:o.ab(0)
o=p.w
if(o!=null)o.D()
p.w=null
p.r.r.ab(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.aK(new A.ig("Database closed."))
p.d=null
o=p.ax
o=o==null?null:o.D()
s=7
return A.a(o instanceof A.t?o:A.bn(o,t.H),$async$d3)
case 7:p.ax=null
p.at.ab(0)
s=8
return A.a(p.c.p(),$async$d3)
case 8:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d3,r)},
hf(a,b){return this.qT(a,b)},
qT(a3,a4){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$hf=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a1=a4.d.h(0,"request")
if(!t.f.b(a1))throw A.b(A.bU('Contract envelope requires a "request" map.'))
j=A.f7(a1)
i=j.h(0,"tag")
if(typeof i!="string")A.u(A.a4("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.u(A.a4("Missing request payload."))
g=A.oJ(h)
j=t.G
if(!j.b(g))A.u(A.a4("Malformed request payload."))
f=A.Hd(i,g)
if(f==null)A.u(A.a4("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.A()
s=7
return A.a(e.wU(m),$async$hf)
case 7:l=a6
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gaA(),"payload",A.oL(e.q())],d,t.X)],d,j)
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
b=J.Z(e)
if(e instanceof A.dI){a=A.KE(e)
b=e.a
if(e instanceof A.eL&&e.b!=null)a0=A.m(["field",e.b],t.N,t.X)
else if(e instanceof A.eK)a0=A.m(["field",e.b],t.N,t.X)
else a0=e instanceof A.eA?A.m(["field",e.b],t.N,t.X):null}else{if(e instanceof A.jt){b=e.a
a="WireException"}else if(e instanceof A.bi){b=e.a
a="StateError"}else if(e instanceof A.bB){b=A.q(e.d)
a="ArgumentError"}else if(t.b0.b(e)){b=A.q(e.d)
a="RangeError"}else a="unknown"
a0=null}e=t.N
d=A.w(e,t.X)
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
return A.f($async$hf,r)},
cB(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.y
q.y=null
p=q.Q
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.t?p:A.bn(p,t.H),$async$cB)
case 2:q.Q=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aH(),$async$cB)
case 5:s=6
return A.a(o.eE(),$async$cB)
case 6:o.eE()
p=o.ax
if((p.c&4)===0)p.p()
o.w.a.p()
case 4:q.as=q.z=null
return A.e(null,r)}})
return A.f($async$cB,r)},
c0(a,b){return this.pp(a,b)},
pp(a,b){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i
var $async$c0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=t.f
if(!i.b(b))throw A.b(A.bU("Mutation element must be a map, got "+A.q(b==null?"null":J.bp(b))+"."))
q=t.N
p=t.X
o=new A.a2(b.aL(0,new A.x5(),q,p))
n=o.a_("action",null,q)
m=o.Z("id",q)
l=b.h(0,"record")
if(l!=null){k=A.oK(l)
if(!i.b(k))throw A.b(A.bU('Mutation "record" must decode to a map, got '+J.bp(k).l(0)+"."))
j=k.aL(0,new A.x6(),q,p)}else j=null
case 2:switch(n){case"put":s=4
break
case"upsert":s=5
break
case"patch":s=6
break
case"archive":s=7
break
case"restore":s=8
break
case"purge":s=9
break
default:s=10
break}break
case 4:j.toString
s=11
return A.a(a.fA(j),$async$c0)
case 11:s=3
break
case 5:j.toString
s=12
return A.a(a.l4(j),$async$c0)
case 12:s=3
break
case 6:m.toString
j.toString
s=13
return A.a(a.kO(m,j),$async$c0)
case 13:s=3
break
case 7:m.toString
s=14
return A.a(a.kf(m),$async$c0)
case 14:s=3
break
case 8:m.toString
s=15
return A.a(a.kZ(m),$async$c0)
case 15:s=3
break
case 9:m.toString
s=16
return A.a(a.iO(m),$async$c0)
case 16:s=3
break
case 10:throw A.b(A.av("Unknown mutation action: "+n,null))
case 3:return A.e(null,r)}})
return A.f($async$c0,r)},
cD(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.x("No active transaction session matching ID "+A.q(a)+"."))
s=this.d
s.toString
return s}}
A.x7.prototype={
$2(a,b){return this.a.c.b.ae(a,b)},
$S:54}
A.x8.prototype={
$2(a,b){return this.a.c.l3(a,b)},
$S:54}
A.x5.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.x)},
$S:31}
A.x6.prototype={
$2(a,b){return new A.Q(J.Z(a),b,t.x)},
$S:31}
A.x4.prototype={
iw(a,b){return this.xf(a,b)},
xf(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$iw=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.at.u(0,a)
if(n.ax==null){i=n.c.e
i===$&&A.A()
i=i.b
n.ax=new A.b1(i,A.n(i).i("b1<1>")).aV(new A.x9(n))}m=null
try{m=A.IR(b)}catch(d){l=A.E(d)
i=J.Z(l)
q=new A.eN("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eN("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jp(a,m),$async$iw)
case 7:k=a0
i=m.b
q=new A.ju(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.E(e)
i=m.b
g=J.Z(j)
f=A.m(["type",A.Mo(j)],t.N,t.X)
q=new A.eN("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iw,r)},
jp(a,b){return this.q8(a,b)},
q8(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.ay
if(l===$){o=A.m(["health",p.grg(),"capabilities",p.gqx(),"compiled_query",p.gqE(),"open",p.grk(),"analyze",p.gqv(),"wal_checkpoint",p.gt5(),"vacuum",p.gt3(),"prune_outbox",p.gro(),"compact",p.gqB(),"run_maintenance",p.gru(),"tx_begin",p.grO(),"tx_get",p.grS(),"tx_mutate_batch",p.grU(),"tx_savepoint",p.gt1(),"tx_rollback_to",p.gt_(),"tx_release",p.grW(),"tx_commit",p.grQ(),"tx_rollback",p.grY(),"watch_cancel",p.gt7(),"sync_start",p.grG(),"sync_stop",p.grK(),"sync_now",p.grw(),"sync_pause",p.grA(),"sync_resume",p.grC(),"sync_set_connectivity",p.grE(),"sync_update_auth",p.grM(),"sync_status",p.grI(),"file_upload_begin",p.gr8(),"file_upload_chunk",p.gra(),"file_upload_finish",p.grd(),"file_upload_abort",p.gr6(),"file_list",p.gqZ(),"file_open",p.gr0(),"file_remove",p.gr2(),"file_gc",p.gqX(),"file_enforce_storage_cap",p.gqV(),"file_storage_status",p.gr4(),"conflicts_list",p.gqM(),"conflicts_get",p.gqK(),"conflicts_resolve",p.gqO(),"conflicts_accept_local",p.gqG(),"conflicts_accept_remote",p.gqI(),"conflicts_watch",p.gqQ(),"contract_request",p.gqS(),"close",p.gqz()],t.N,t.n1)
p.ay!==$&&A.B1()
p.ay=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.bU("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jp,r)}}
A.x9.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gaA(),"payload",a.q()],r,q)],r,q)
for(r=this.a.at,r=A.hw(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).a.de(A.f9(p))}},
$S:151}
A.no.prototype={}
A.nf.prototype={
hd(a,b){return this.qN(a,b)},
qN(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$hd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.a2(b.d).Z("store",o)
m=p.c.cy
m===$&&A.A()
l=J
s=3
return A.a(m.fl(n),$async$hd)
case 3:m=l.aS(d,A.Fm(),t.G)
m=A.N(m,m.$ti.i("V.E"))
q=A.m(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
hc(a,b){return this.qL(a,b)},
qL(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$hc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.a2(b.d)
m=t.N
l=n.a_("store","conflicts_get",m)
k=n.a_("id","conflicts_get",m)
m=p.c.cy
m===$&&A.A()
s=3
return A.a(m.dD(l,k),$async$hc)
case 3:o=d
q=o==null?null:A.Fx(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
he(a,b){return this.qP(a,b)},
qP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$he=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=new A.a2(n)
l=t.N
k=m.a_("store","conflicts_resolve",l)
j=m.a_("id","conflicts_resolve",l)
n=A.oK(n.h(0,"merged"))
n.toString
t.G.a(n)
o=p.c.cy
o===$&&A.A()
s=3
return A.a(o.eu(j,n,k),$async$he)
case 3:q=A.m(["ok",!0],l,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
ha(a,b){return this.qH(a,b)},
qH(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$ha=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.a2(b.d)
n=t.N
m=o.a_("store","conflicts_accept_local",n)
l=o.a_("id","conflicts_accept_local",n)
k=p.c.cy
k===$&&A.A()
s=3
return A.a(k.f2(m,l),$async$ha)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
hb(a,b){return this.qJ(a,b)},
qJ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$hb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.a2(b.d)
n=t.N
m=o.a_("store","conflicts_accept_remote",n)
l=o.a_("id","conflicts_accept_remote",n)
k=p.c.cy
k===$&&A.A()
s=3
return A.a(k.e6(m,l),$async$hb)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
jx(a,b){return this.qR(a,b)},
qR(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$jx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.a2(b.d)
n=t.S
m=o.a_("watchId","conflicts_watch",n)
l=t.N
k=o.Z("store",l)
j=p.c.cy
j===$&&A.A()
p.f.j(0,m,new A.no(new A.x0(j.yL(k).aV(new A.x1(p,a,m)))))
q=A.m(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jx,r)},
hF(a,b){return this.t8(a,b)},
t8(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.H(0,new A.a2(b.d).a_("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$hF)
case 5:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)}}
A.x1.prototype={
$1(a){var s=J.aS(a,A.Fm(),t.G)
s=A.N(s,s.$ti.i("V.E"))
this.b.a.de(A.f9(A.m(["v",3,"op","worker_event","watchId",this.c,"value",A.d_(s)],t.N,t.X)))},
$S:152}
A.x0.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.D(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.ng.prototype={
hn(a,b){return this.rl(a,b)},
rl(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$hn=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.a2(a3).Z("stores",t.R)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.w(a3,a3)
n=t.f
if(n.b(a5))a5.a3(0,new A.x2(o))
s=a4!=null?3:4
break
case 3:m=J.D(a4),l=p.c,k=l.dx,j=t.X,i=l.ax==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.u(A.a9("Schema must be a map: "+A.q(h),null,null))
g=A.pt(A.f7(h),j)
if(B.b.bQ(g.c,new A.x3())&&i)throw A.b(A.av('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.BJ(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a1("")
A.ci(c,f.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c4()
a0=A.cY(a)
a0.u(0,b)
a0.p()
a0=d!==A.aq(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.bU('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.I(e)?7:9
break
case 7:s=10
return A.a(l.aT(g),$async$hn)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.u(A.x('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a1("")
A.ci(c,a1.c.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c4()
a0=A.cY(a)
a0.u(0,b)
a0.p()
a0=A.aq(a.a.a)
c=new A.a1("")
A.ci(c,f.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c4()
a2=A.cY(a)
a2.u(0,b)
a2.p()
if(a0!==A.aq(a.a.a))throw A.b(A.bU('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hn,r)}}
A.x2.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:26}
A.x3.prototype={
$1(a){return a.e},
$S:52}
A.nj.prototype={
qi(){if(this.w!=null)return
this.w=A.DL(A.d2(9e8,0,0),new A.xa(this))},
jF(a,b){return this.r9(a,b)},
r9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$jF=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:p.qi()
o=new A.a2(b.d)
n=p.x++
m=p.r
l=t.N
k=o.a_("store","file_upload_begin",l)
j=o.a_("recordId","file_upload_begin",l)
i=o.Z("field",l)
if(i==null)i="imgs"
h=o.Z("name",l)
if(h==null)h="blob.bin"
g=t.S
f=o.a_("size","file_upload_begin",g)
e=o.Z("expectedSha256",l)
d=o.Z("allowVolatileBlobs",t.y)
m.nf()
c=m.r
if(c.a>=16)A.u(A.av("Maximum concurrent uploads exceeded (16).",null))
if(f<0||f>268435456)A.u(A.av("Invalid file size: "+f,null))
if(m.gnK()+f>536870912)A.u(A.av("Aggregate upload quota exceeded: "+m.gnK()+" + "+f+" > 536870912",null))
m=m.f.$0().jg(18e8)
c.j(0,n,new A.cV(n,k,j,i,h,f,e,d===!0,A.l([],t.bs),m))
q=A.m(["uploadId",n],l,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jF,r)},
jG(a,b){return this.rb(a,b)},
rb(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$jG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=new A.a2(i).a_("uploadId","file_upload_chunk",t.S)
i=A.oK(i.h(0,"chunk"))
i.toString
o=p.r
i=new Uint8Array(A.b3(t.L.a(i)))
n=o.r
m=n.h(0,h)
if(m==null)A.u(A.av("Unknown upload session: "+h,null))
o=o.f
if(!m.z.kF(o.$0())){n.H(0,h)
A.u(A.av("Upload session expired: "+h,null))}l=i.length
if(l>262144){n.H(0,h)
A.u(A.av("Chunk too large: "+l+" > 262144",null))}k=m.x
j=m.f
if(k+l>j){n.H(0,h)
A.u(A.av("Upload exceeds declared size "+j,null))}m.y.push(i)
m.x+=l
m.z=o.$0().jg(18e8)
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jG,r)},
hl(a,b){return this.re(a,b)},
re(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.a2(b.d).a_("uploadId","file_upload_finish",t.S)
f=p.r
e=f.r.H(0,g)
if(e==null)A.u(A.av("Unknown upload session: "+g,null))
if(!e.z.kF(f.f.$0()))A.u(A.av("Upload session expired: "+g,null))
f=e.x
o=e.f
if(f!==o)A.u(A.av("Upload size mismatch: expected "+o+" but got "+f,null))
f=p.c.db
f===$&&A.A()
n=e.b
m=e.c
l=new A.xb(e).$0()
k=e.d
j=e.e
i=e.r
s=3
return A.a(f.dd(e.w,l,i,o,k,j,m,n),$async$hl)
case 3:h=d
q=A.m(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
jE(a,b){return this.r7(a,b)},
r7(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$jE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.r.r.H(0,new A.a2(b.d).a_("uploadId","file_upload_abort",t.S))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jE,r)},
hi(a,b){return this.r_(a,b)},
r_(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.a2(b.d)
j=p.c.db
j===$&&A.A()
o=t.N
n=k.a_("store","file_list",o)
m=k.a_("recordId","file_list",o)
l=k.Z("field",o)
i=J
s=3
return A.a(j.ek(l==null?"imgs":l,m,n),$async$hi)
case 3:j=i.aS(d,A.My(),t.G)
j=A.N(j,j.$ti.i("V.E"))
q=A.m(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
dR(a,b){return this.r1(a,b)},
r1(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dR=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.a2(b.d)
c=m.c.db
c===$&&A.A()
i=t.N
h=d.a_("store","file_open",i)
g=d.a_("recordId","file_open",i)
f=d.Z("field",i)
if(f==null)f="imgs"
e=d.Z("index",t.S)
if(e==null)e=0
s=3
return A.a(c.fs(f,e,g,d.Z("refId",i),h),$async$dR)
case 3:l=a1
k=A.l([],t.t)
h=new A.cf(A.bZ(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.k(),$async$dR)
case 9:if(!a1){s=8
break}j=h.gn()
J.B7(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.D(),$async$dR)
case 10:s=n.pop()
break
case 6:q=A.m(["bytes",A.d_(new Uint8Array(A.b3(k))),"size",J.aj(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dR,r)},
hj(a,b){return this.r3(a,b)},
r3(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.a2(b.d)
i=p.c.db
i===$&&A.A()
o=t.N
n=j.a_("store","file_remove",o)
m=j.a_("recordId","file_remove",o)
l=j.Z("field",o)
if(l==null)l="imgs"
k=j.Z("index",t.S)
if(k==null)k=0
s=3
return A.a(i.fD(0,l,k,m,j.Z("refId",o),n),$async$hj)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
hh(a,b){return this.qY(a,b)},
qY(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.a2(b.d)
k=p.c.db
k===$&&A.A()
o=t.S
n=l.Z("blobGraceMs",o)
n=A.d2(0,n==null?6048e5:n,0)
m=l.Z("tmpGraceMs",o)
j=A
s=3
return A.a(k.bh(n,A.d2(0,m==null?864e5:m,0)),$async$hh)
case 3:q=j.m(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
hg(a,b){return this.qW(a,b)},
qW(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.db
n===$&&A.A()
o=t.S
m=A
s=3
return A.a(n.cF(new A.a2(b.d).a_("maxBytes","file_enforce_storage_cap",o)),$async$hg)
case 3:q=m.m(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
hk(a,b){return this.r5(a,b)},
r5(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.db
o===$&&A.A()
n=A
s=3
return A.a(o.gkG(),$async$hk)
case 3:q=n.m(["durable",d],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)}}
A.xa.prototype={
$1(a){return this.a.r.nf()},
$S:59}
A.xb.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bW(A.e_(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:case 1:return A.bW(null,0,r)
case 2:return A.bW(o.at(-1),1,r)}})
var s=0,r=A.EV($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.F9(r)},
$S:153}
A.nk.prototype={
jH(a,b){return this.rh(a,b)},
rh(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$jH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.fS("SELECT sqlite_version() AS v")
m=n.gE(n).h(0,"v")
o=o.fS("PRAGMA journal_mode")
q=A.m(["ok",!0,"sqliteVersion",m,"journalMode",o.gE(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jH,r)},
jv(a,b){return this.qy(a,b)},
qy(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$jv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.w
n=p.a.fS("PRAGMA journal_mode")
q=A.m(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gE(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jv,r)},
h8(a,b){return this.qw(a,b)},
qw(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$h8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.a(p.c.dc(new A.a2(b.d).Z("store",o)),$async$h8)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
hE(a,b){return this.t6(a,b)},
t6(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.ey(),$async$hE)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
hD(a,b){return this.t4(a,b)},
t4(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.ex(new A.a2(b.d).Z("pages",t.S)),$async$hD)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)},
ho(a,b){return this.rp(a,b)},
rp(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$ho=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.S
n=new A.a2(b.d).Z("maxEntries",o)
if(n==null)n=1e4
m=A
s=3
return A.a(p.c.fv(n),$async$ho)
case 3:q=m.m(["pruned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
h9(a,b){return this.qC(a,b)},
qC(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$h9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.a2(b.d)
n=t.N
m=o.a_("store","compact",n)
l=t.S
k=o.a_("olderThanMs","compact",l)
j=A
s=3
return A.a(p.c.eb(m,o.Z("nowMs",l),A.d2(0,k,0)),$async$h9)
case 3:q=j.m(["compacted",d],n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
hp(a,b){return this.rv(a,b)},
rv(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.a2(b.d).Z("compactOlderThanMs",t.S)
s=3
return A.a(p.c.dv(A.d2(0,o==null?7776e6:o,0)),$async$hp)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)}}
A.zG.prototype={
kn(){var s=0,r=A.h(t.q),q,p=this,o
var $async$kn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.DN(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kn,r)},
kT(a){return this.yh(a)},
yh(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$kT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.DN(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kT,r)}}
A.nl.prototype={
dT(a,b){return this.rH(a,b)},
rH(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dT=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.a2(a5.d)
a2=t.N
a3=a1.Z("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.av("syncStart requires baseUrl.",null))
s=3
return A.a(p.cB(),$async$dT)
case 3:o=a1.Z("token",a2)
n=a1.Z("scopeId",a2)
if(n==null)n="web-sync"
m=new A.zG(o,n)
l=A.n4(a3)
k=p.c
j=k.dx
i=A.n(j).i("T<1>")
j=A.N(new A.T(j,i),i.i("o.E"))
i=t.hw
h=A.dQ(null,null,i)
g=$.C.h(0,B.dj)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.kR(A.l([],t.kG))
f=new A.uu(f)
e=new A.uM(j,l,m,B.aY,200,25,n,"data",f,h,A.w(a2,t.hU),A.w(a2,i))
e.p8(l,n,25,200,"data",B.aY,m,null)
d=A.C0()
i=A.dQ(null,null,t.n6)
h=A.dQ(null,null,t.em)
f=t.H
j=A.bq(null,f)
c=new A.oY(A.bq(null,f))
b=A.bq(B.N,t.mv)
a=A.l([],t.s)
f=A.bq(null,f)
a0=new A.w8(A.Mu(),k.ch)
f=new A.mO(k,e,a0,new A.xg(a4),B.a3,i,h,j,c,A.aO(a2),b,a,f)
l=f.e=new A.wj(k,B.a.A(A.aq(B.j.v(B.e.v(l.l(0)+"|"+n)).a),0,12))
j=new A.r3(k,e,a0,k.at)
f.x=j
j=new A.v0(k,e,a0,l,j,c)
f.f=j
f.r=new A.w6(k,e,a0,l,j)
f.w=new A.v9(k,e,a0,f.gts(),e.Q)
d.b=f
p.z=m
p.y=d.bb()
f=d.bb().ay
p.Q=new A.b1(f,A.n(f).i("b1<1>")).aV(new A.xh(p,a4))
s=4
return A.a(d.bb().aB(),$async$dT)
case 4:s=5
return A.a(e.fW(),$async$dT)
case 5:q=A.m(["ok",!0,"state",d.bb().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
hu(a,b){return this.rL(a,b)},
rL(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cB(),$async$hu)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
hq(a,b){return this.rz(a,b)},
rz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.x("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.d8(),$async$hq)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"blocked",o.e,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
hr(a,b){return this.rB(a,b)},
rB(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.bs(),$async$hr)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
hs(a,b){return this.rD(a,b)},
rD(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.bf(),$async$hs)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
ht(a,b){return this.rF(a,b)},
rF(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$ht=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.x("Sync is not started."))
o=t.y
s=3
return A.a(n.fU(new A.a2(b.d).a_("online","sync_set_connectivity",o)),$async$ht)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
hv(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
m=p.y
if(n==null||m==null)throw A.b(A.x("Sync is not started."))
o=t.N
n.a=new A.a2(b.d).Z("token",o)
s=3
return A.a(m.el(),$async$hv)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
jJ(a,b){return this.rJ(a,b)},
rJ(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$jJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.as
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.Fz(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jJ,r)}}
A.xg.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.de(A.f9(A.m(["v",3,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.xh.prototype={
$1(a){this.a.as=a
this.b.a.de(A.f9(A.m(["v",3,"op","sync_status","status",A.Fz(a)],t.N,t.X)))},
$S:154}
A.zt.prototype={}
A.nm.prototype={
hw(a,b){return this.rP(a,b)},
rP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$hw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.x("A transaction session is already active on this database."))
o=p.e++
n=$.C
m=t.D
l=t.h
k=new A.t(n,m)
p.hQ(new A.az(new A.t(n,m),l),new A.az(new A.t(n,m),l),new A.az(k,l),o)
s=3
return A.a(k,$async$hw)
case 3:q=A.m(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hw,r)},
hQ(a,b,c,d){return this.uw(a,b,c,d)},
uw(a,b,c,d){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$hQ=A.c(function(e,f){if(e===1){p.push(f)
s=q}for(;;)switch(s){case 0:j=b.a
j.bC(new A.xi(),new A.xj(),t.H)
q=3
s=6
return A.a(n.c.a2(new A.xk(n,d,a,b,c),t.P),$async$hQ)
case 6:if((j.a&30)===0)b.ai()
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.E(i)
l=A.ae(i)
if((j.a&30)===0)b.bB(m,l)
if((c.a.a&30)===0)c.bB(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.d=null
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$hQ,r)},
hy(a,b){return this.rT(a,b)},
rT(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$hy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=p.cD(new A.a2(m).Z("sessionId",t.S))
k=new A.a2(m)
m=t.N
o=k.a_("store","tx_get",m)
n=k.a_("id","tx_get",m)
j=A
s=3
return A.a(l.c.bA(o).bE(n),$async$hy)
case 3:q=j.d_(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
hz(a,b){return this.rV(a,b)},
rV(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=b.d
j=p.cD(new A.a2(k).Z("sessionId",t.S))
i=new A.a2(k)
k=t.N
o=i.a_("store","tx_mutate_batch",k)
n=i.a_("mutations","tx_mutate_batch",t.R)
m=j.c.bA(o)
l=J.D(n)
case 3:if(!l.k()){s=4
break}s=5
return A.a(p.c0(m,l.gn()),$async$hz)
case 5:s=3
break
case 4:q=A.m(["ok",!0],k,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
hC(a,b){return this.t2(a,b)},
t2(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.cD(new A.a2(b.d).Z("sessionId",t.S))
n=o.e
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.K("SAVEPOINT "+m),$async$hC)
case 3:n=t.N
q=A.m(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hC,r)},
eL(a,b){return this.t0(a,b)},
t0(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$eL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cD(new A.a2(o).Z("sessionId",t.S))
m=t.N
l=new A.a2(o).a_("savepoint","tx_rollback_to",m)
o=n.c.b
s=3
return A.a(o.K("ROLLBACK TO "+l),$async$eL)
case 3:s=4
return A.a(o.K("RELEASE "+l),$async$eL)
case 4:B.b.H(n.e,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
hA(a,b){return this.rX(a,b)},
rX(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$hA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cD(new A.a2(o).Z("sessionId",t.S))
m=t.N
l=new A.a2(o).a_("savepoint","tx_release",m)
s=3
return A.a(n.c.b.K("RELEASE "+l),$async$hA)
case 3:B.b.H(n.e,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
hx(a,b){return this.rR(a,b)},
rR(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j
var $async$hx=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:j=m.cD(new A.a2(b.d).Z("sessionId",t.S))
p=3
l=m.d
k=j
if(l==null?k==null:l===k)m.d=null
j.b.ai()
s=6
return A.a(j.d.a,$async$hx)
case 6:l=A.m(["ok",!0],t.N,t.y)
q=l
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l=m.d
k=j
if(l==null?k==null:l===k)m.d=null
s=n.pop()
break
case 5:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hx,r)},
hB(a,b){return this.rZ(a,b)},
rZ(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$hB=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=m.cD(new A.a2(b.d).Z("sessionId",t.S))
p=3
j=m.d
i=g
if(j==null?i==null:j===i)m.d=null
l=new A.mo("rollback","Transaction rolled back.")
g.b.aK(l)
p=7
s=10
return A.a(g.d.a,$async$hB)
case 10:p=3
s=9
break
case 7:p=6
f=o.pop()
k=A.E(f)
j=k
i=l
if(j==null?i!=null:j!==i)throw f
s=9
break
case 6:s=3
break
case 9:j=A.m(["ok",!0],t.N,t.y)
q=j
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
j=m.d
i=g
if(j==null?i==null:j===i)m.d=null
s=n.pop()
break
case 5:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hB,r)}}
A.xi.prototype={
$1(a){},
$S:155}
A.xj.prototype={
$1(a){},
$S:24}
A.xk.prototype={
$1(a){return this.oo(a)},
oo(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
o=new A.zt(q.b,p,a,q.d,A.l([],t.s))
q.a.d=o
q.e.ai()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.oo.prototype={}
A.op.prototype={}
A.oq.prototype={}
A.or.prototype={}
A.os.prototype={}
A.ot.prototype={}
A.q5.prototype={
vh(a){var s,r=null
A.Fe("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b3(a)>0&&!s.cJ(a)
if(s)return a
s=A.Fr()
return this.nr(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
vY(a){var s,r,q=A.dO(a,this.a)
q.fE()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kV(s)
q.e.pop()
q.fE()
return q.l(0)},
nr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Fe("join",s)
return this.xt(new A.bI(s,t.B))},
xt(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.cW(s,new A.q6(),a.$ti.i("cW<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cJ(m)&&o){l=A.dO(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.ev(k,!0))
l.b=n
if(q.fq(n))l.e[0]=q.gdF()
n=l.l(0)}else if(q.b3(m)>0){o=!q.cJ(m)
n=m}else{if(!(m.length!==0&&q.kk(m[0])))if(p)n+=q.gdF()
n+=m}p=q.fq(m)}return n.charCodeAt(0)==0?n:n},
cS(a,b){var s=A.dO(b,this.a),r=s.d,q=A.a_(r).i("al<1>")
r=A.N(new A.al(r,new A.q7(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aE(r,0,q)
return s.d},
eo(a){var s
if(!this.tq(a))return a
s=A.dO(a,this.a)
s.kL()
return s.l(0)},
tq(a){var s,r,q,p,o,n,m,l=this.a,k=l.b3(a)
if(k!==0){if(l===$.oP())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cd(n)){if(l===$.oP()&&n===47)return!0
if(q!=null&&l.cd(q))return!0
if(q===46)m=o==null||o===46||l.cd(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cd(q))return!0
if(q===46)l=o==null||l.cd(o)||o===46
else l=!1
if(l)return!0
return!1},
yj(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b3(a)
if(l<=0)return o.eo(a)
s=A.Fr()
if(m.b3(s)<=0&&m.b3(a)>0)return o.eo(a)
if(m.b3(a)<=0||m.cJ(a))a=o.vh(a)
if(m.b3(a)<=0&&m.b3(s)>0)throw A.b(A.Dv(n+a+'" from "'+s+'".'))
r=A.dO(s,m)
r.kL()
q=A.dO(a,m)
q.kL()
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
B.b.iS(r.d,0)
B.b.iS(r.e,1)
B.b.iS(q.d,0)
B.b.iS(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Dv(n+a+'" from "'+s+'".'))
l=t.N
B.b.kC(q.d,0,A.ag(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kC(p,1,A.ag(r.d.length,m.gdF(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.gY(m)==="."){B.b.kV(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fE()
return q.l(0)},
ny(a){var s,r,q=this,p=A.EZ(a)
if(p.gb1()==="file"&&q.a===$.kt())return p.l(0)
else if(p.gb1()!=="file"&&p.gb1()!==""&&q.a!==$.kt())return p.l(0)
s=q.eo(q.a.kP(A.EZ(p)))
r=q.yj(s)
return q.cS(0,r).length>q.cS(0,s).length?s:r}}
A.q6.prototype={
$1(a){return a!==""},
$S:9}
A.q7.prototype={
$1(a){return a.length!==0},
$S:9}
A.Ab.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:156}
A.rT.prototype={
ow(a){var s=this.b3(a)
if(s>0)return B.a.A(a,0,s)
return this.cJ(a)?a[0]:null},
kQ(a,b){return a===b}}
A.m8.prototype={
gkg(){var s=this,r=t.N,q=new A.m8(s.a,s.b,s.c,A.bG(s.d,!0,r),A.bG(s.e,!0,r))
q.fE()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.gY(r)},
fE(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.gY(s)===""))break
B.b.kV(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kL(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kC(m,0,A.ag(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.ag(m.length+1,s.gdF(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fq(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.oP())n.b=A.z(r,"/","\\")
n.fE()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.gY(q)
return o.charCodeAt(0)==0?o:o}}
A.m9.prototype={
l(a){return"PathException: "+this.a},
$iH:1}
A.w5.prototype={
l(a){return this.gaS()}}
A.uO.prototype={
kk(a){return B.a.G(a,"/")},
cd(a){return a===47},
fq(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
ev(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b3(a){return this.ev(a,!1)},
cJ(a){return!1},
kP(a){var s
if(a.gb1()===""||a.gb1()==="file"){s=a.gbr()
return A.Ca(s,0,s.length,B.l,!1)}throw A.b(A.O("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaS(){return"posix"},
gdF(){return"/"}}
A.wG.prototype={
kk(a){return B.a.G(a,"/")},
cd(a){return a===47},
fq(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c8(a,"://")&&this.b3(a)===s},
ev(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cb(a,"/",B.a.af(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.Fw(a,q+1)
return p==null?q:p}}return 0},
b3(a){return this.ev(a,!1)},
cJ(a){return a.length!==0&&a.charCodeAt(0)===47},
kP(a){return a.l(0)},
gaS(){return"url"},
gdF(){return"/"}}
A.x_.prototype={
kk(a){return B.a.G(a,"/")},
cd(a){return a===47||a===92},
fq(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
ev(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cb(a,"\\",2)
if(s>0){s=B.a.cb(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.FF(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b3(a){return this.ev(a,!1)},
cJ(a){return this.b3(a)===1},
kP(a){var s,r
if(a.gb1()!==""&&a.gb1()!=="file")throw A.b(A.O("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbr()
if(a.gdk()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Fw(s,1)!=null)s=B.a.kY(s,"/","")}else s="\\\\"+a.gdk()+s
r=A.z(s,"/","\\")
return A.Ca(r,0,r.length,B.l,!1)},
vF(a,b){var s
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
for(r=0;r<s;++r)if(!this.vF(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaS(){return"windows"},
gdF(){return"\\"}}
A.vO.prototype={
gm(a){return this.c.length},
gxu(){return this.b.length},
pa(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.I(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eC(a){var s,r=this
if(a<0)throw A.b(A.b_("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b_("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gE(s))return-1
if(a>=B.b.gY(s))return s.length-1
if(r.te(a)){s=r.d
s.toString
return s}return r.d=r.pu(a)-1},
te(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pu(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.N(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
j6(a){var s,r,q=this
if(a<0)throw A.b(A.b_("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b_("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.eC(a)
r=q.b[s]
if(r>a)throw A.b(A.b_("Line "+s+" comes after offset "+a+"."))
return a-r},
fP(a){var s,r,q,p
if(a<0)throw A.b(A.b_("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b_("Line "+a+" must be less than the number of lines in the file, "+this.gxu()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b_("Line "+a+" doesn't have 0 columns."))
return q}}
A.lo.prototype={
ga4(){return this.a.a},
gaj(){return this.a.eC(this.b)},
gau(){return this.a.j6(this.b)},
gav(){return this.b}}
A.ht.prototype={
ga4(){return this.a.a},
gm(a){return this.c-this.b},
gP(){return A.Bj(this.a,this.b)},
gO(){return A.Bj(this.a,this.c)},
gaN(){return A.dS(B.y.T(this.a.c,this.b,this.c),0,null)},
gbe(){var s=this,r=s.a,q=s.c,p=r.eC(q)
if(r.j6(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dS(B.y.T(r.c,r.fP(p),r.fP(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fP(p+1)
return A.dS(B.y.T(r.c,r.fP(r.eC(s.b)),q),0,null)},
a1(a,b){var s
if(!(b instanceof A.ht))return this.oW(0,b)
s=B.c.a1(this.b,b.b)
return s===0?B.c.a1(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.ht))return s.oV(0,b)
return s.b===b.b&&s.c===b.c&&J.v(s.a.a,b.a.a)},
gJ(a){return A.c7(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$ide:1}
A.rp.prototype={
xl(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mO(B.b.gE(a1).c)
s=a.e
r=A.ag(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.v(m.c,l)){a.i1("\u2575")
q.a+="\n"
a.mO(l)}else if(m.b+1!==n.b){a.vg("...")
q.a+="\n"}}for(l=n.d,k=A.a_(l).i("bV<1>"),j=new A.bV(l,k),j=new A.an(j,j.gm(0),k.i("an<V.E>")),k=k.i("V.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP().gaj()!==f.gO().gaj()&&f.gP().gaj()===i&&a.tg(B.a.A(h,0,f.gP().gau()))){e=B.b.bS(r,a0)
if(e<0)A.u(A.O(A.q(r)+" contains no null elements.",a0))
r[e]=g}}a.vf(i)
q.a+=" "
a.ve(n,r)
if(s)q.a+=" "
d=B.b.nl(l,new A.rK())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gP().gaj()===i?j.gP().gau():0
a.vc(h,g,j.gO().gaj()===i?j.gO().gau():h.length,p)}else a.i3(h)
q.a+="\n"
if(k)a.vd(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.i1("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mO(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.i1("\u2577")
else{q.i1("\u250c")
q.bl(new A.rx(q),"\x1b[34m")
s=q.r
r=" "+$.i_().ny(a)
s.a+=r}q.r.a+="\n"},
i_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gP().gaj()
i=k?null:l.a.gO().gaj()
if(s&&l===c){h.bl(new A.rE(h,j,a),r)
n=!0}else if(n)h.bl(new A.rF(h,l),r)
else if(k)if(g.a)h.bl(new A.rG(h),g.b)
else o.a+=" "
else h.bl(new A.rH(g,h,c,j,a,l,i),p)}},
ve(a,b){return this.i_(a,b,null)},
vc(a,b,c,d){var s=this
s.i3(B.a.A(a,0,b))
s.bl(new A.ry(s,a,b,c),d)
s.i3(B.a.A(a,c,a.length))},
vd(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gP().gaj()===p.gO().gaj()){r.kc()
p=r.r
p.a+=" "
r.i_(a,c,b)
if(c.length!==0)p.a+=" "
r.mP(b,c,r.bl(new A.rz(r,a,b),q))}else{s=a.b
if(p.gP().gaj()===s){if(B.b.G(c,b))return
A.Ml(c,b)
r.kc()
p=r.r
p.a+=" "
r.i_(a,c,b)
r.bl(new A.rA(r,a,b),q)
p.a+="\n"}else if(p.gO().gaj()===s){p=p.gO().gau()
if(p===a.a.length){A.FR(c,b)
return}r.kc()
r.r.a+=" "
r.i_(a,c,b)
r.mP(b,c,r.bl(new A.rB(r,!1,a,b),q))
A.FR(c,b)}}},
mN(a,b,c){var s=c?0:1,r=this.r
s=B.a.bi("\u2500",1+b+this.jn(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
vb(a,b){return this.mN(a,b,!0)},
mP(a,b,c){this.r.a+="\n"
return},
i3(a){var s,r,q,p
for(s=new A.ck(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<J.E>")),q=this.r,r=r.i("J.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bi(" ",4)
else{p=A.bt(p)
q.a+=p}}},
i2(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bl(new A.rI(s,this,a),"\x1b[34m")},
i1(a){return this.i2(a,null,null)},
vg(a){return this.i2(null,null,a)},
vf(a){return this.i2(null,a,null)},
kc(){return this.i2(null,null,null)},
jn(a){var s,r,q,p
for(s=new A.ck(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<J.E>")),r=r.i("J.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
tg(a){var s,r,q
for(s=new A.ck(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<J.E>")),r=r.i("J.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pJ(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bl(a,b){return this.pJ(a,b,t.z)}}
A.rJ.prototype={
$0(){return this.a},
$S:157}
A.rr.prototype={
$1(a){var s=a.d
return new A.al(s,new A.rq(),A.a_(s).i("al<1>")).gm(0)},
$S:158}
A.rq.prototype={
$1(a){var s=a.a
return s.gP().gaj()!==s.gO().gaj()},
$S:42}
A.rs.prototype={
$1(a){return a.c},
$S:160}
A.ru.prototype={
$1(a){var s=a.a.ga4()
return s==null?new A.j():s},
$S:242}
A.rv.prototype={
$2(a,b){return a.a.a1(0,b.a)},
$S:162}
A.rw.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aC(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbe()
n=A.Az(o,p.gaN(),p.gP().gau())
n.toString
m=B.a.i4("\n",B.a.A(o,0,n)).gm(0)
l=p.gP().gaj()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.gY(b).b)b.push(new A.cy(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.r)(b),++k){j=b[k]
h&1&&A.I(i,16)
B.b.uo(i,new A.rt(j),!0)
f=i.length
for(q=s.bk(c,g),p=q.$ti,q=new A.an(q,q.gm(0),p.i("an<V.E>")),n=j.b,p=p.i("V.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gP().gaj()>n)break
i.push(e)}g+=i.length-f
B.b.C(j.d,i)}return b},
$S:163}
A.rt.prototype={
$1(a){return a.a.gO().gaj()<this.a.b},
$S:42}
A.rK.prototype={
$1(a){return!0},
$S:42}
A.rx.prototype={
$0(){this.a.r.a+=B.a.bi("\u2500",2)+">"
return null},
$S:0}
A.rE.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:3}
A.rF.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:3}
A.rG.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.rH.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bl(new A.rC(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gO().gau()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bl(new A.rD(r,o),p.b)}}},
$S:3}
A.rC.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:3}
A.rD.prototype={
$0(){this.a.r.a+=this.b},
$S:3}
A.ry.prototype={
$0(){var s=this
return s.a.i3(B.a.A(s.b,s.c,s.d))},
$S:0}
A.rz.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP().gau(),l=n.gO().gau()
n=this.b.a
s=q.jn(B.a.A(n,0,m))
r=q.jn(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bi(" ",m))+B.a.bi("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.rA.prototype={
$0(){return this.a.vb(this.b,this.c.a.gP().gau())},
$S:0}
A.rB.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bi("\u2500",3)
else r.mN(s.c,Math.max(s.d.a.gO().gau()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.rI.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.xT(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:3}
A.bo.prototype={
l(a){var s=this.a
s="primary "+(""+s.gP().gaj()+":"+s.gP().gau()+"-"+s.gO().gaj()+":"+s.gO().gau())
return s.charCodeAt(0)==0?s:s}}
A.yJ.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Az(o.gbe(),o.gaN(),o.gP().gau())!=null)){s=A.mD(o.gP().gav(),0,0,o.ga4())
r=o.gO().gav()
q=o.ga4()
p=A.LK(o.gaN(),10)
o=A.vP(s,A.mD(r,A.Ec(o.gaN()),p,q),o.gaN(),o.gaN())}return A.Jg(A.Ji(A.Jh(o)))},
$S:164}
A.cy.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cs.prototype={
kr(a){var s=this.a
if(!J.v(s,a.ga4()))throw A.b(A.O('Source URLs "'+A.q(s)+'" and "'+A.q(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a1(a,b){var s=this.a
if(!J.v(s,b.ga4()))throw A.b(A.O('Source URLs "'+A.q(s)+'" and "'+A.q(b.ga4())+"\" don't match.",null))
return this.b-b.gav()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a,b.ga4())&&this.b===b.gav()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dt(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.q(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iax:1,
ga4(){return this.a},
gav(){return this.b},
gaj(){return this.c},
gau(){return this.d}}
A.mE.prototype={
kr(a){if(!J.v(this.a.a,a.ga4()))throw A.b(A.O('Source URLs "'+A.q(this.ga4())+'" and "'+A.q(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a1(a,b){if(!J.v(this.a.a,b.ga4()))throw A.b(A.O('Source URLs "'+A.q(this.ga4())+'" and "'+A.q(b.ga4())+"\" don't match.",null))
return this.b-b.gav()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a.a,b.ga4())&&this.b===b.gav()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dt(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.q(p==null?"unknown source":p)+":"+(q.eC(r)+1)+":"+(q.j6(r)+1))+">"},
$iax:1,
$ics:1}
A.mG.prototype={
pb(a,b,c){var s,r=this.b,q=this.a
if(!J.v(r.ga4(),q.ga4()))throw A.b(A.O('Source URLs "'+A.q(q.ga4())+'" and  "'+A.q(r.ga4())+"\" don't match.",null))
else if(r.gav()<q.gav())throw A.b(A.O("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.kr(r))throw A.b(A.O('Text "'+s+'" must be '+q.kr(r)+" characters long.",null))}},
gP(){return this.a},
gO(){return this.b},
gaN(){return this.c}}
A.mH.prototype={
gkK(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gP().gaj()+1)+", column "+(p.gP().gau()+1)
if(p.ga4()!=null){s=p.ga4()
r=$.i_()
s.toString
s=o+(" of "+r.ny(s))
o=s}o+=": "+this.a
q=p.xm(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iH:1}
A.h0.prototype={
gav(){var s=this.b
s=A.Bj(s.a,s.b)
return s.b},
$ibh:1,
gfV(){return this.c}}
A.h1.prototype={
ga4(){return this.gP().ga4()},
gm(a){return this.gO().gav()-this.gP().gav()},
a1(a,b){var s=this.gP().a1(0,b.gP())
return s===0?this.gO().a1(0,b.gO()):s},
xm(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.HA(s,a).xl()},
R(a,b){if(b==null)return!1
return b instanceof A.h1&&this.gP().R(0,b.gP())&&this.gO().R(0,b.gO())},
gJ(a){return A.c7(this.gP(),this.gO(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dt(s).l(0)+": from "+s.gP().l(0)+" to "+s.gO().l(0)+' "'+s.gaN()+'">'},
$iax:1}
A.de.prototype={
gbe(){return this.d}}
A.jf.prototype={
a5(){return"SqliteUpdateKind."+this.b}}
A.ct.prototype={
gJ(a){return A.c7(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.ct&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.c9.prototype={
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
p=p!=null?s+(", parameters: "+J.aS(p,new A.vU(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iH:1}
A.vU.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.Z(a)},
$S:165}
A.kz.prototype={}
A.qw.prototype={
v0(){var s=this,r=s.d
return r==null?s.d=new A.e3(s,A.l([],t.fU),new A.qF(s),new A.qG(s),t.jy):r},
ut(){var s=this,r=s.e
return r==null?s.e=new A.e3(s,A.l([],t.lw),new A.qC(s),new A.qD(s),t.lU):r},
pL(){var s=this,r=s.f
return r==null?s.f=new A.e3(s,A.l([],t.lw),new A.qy(s),new A.qz(s),t.ag):r},
vL(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.u(A.aA(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b3(m))
r=n.a
q=r.e7(s,1)
s=r.d
p=A.Ci(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.dc(new A.qH(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.B0(this,p,o,o,o)},
p(){var s,r,q,p=this
if(p.r)return
p.r=!0
s=p.d
if(s!=null)s.p()
s=p.f
if(s!=null)s.p()
s=p.e
if(s!=null)s.p()
s=p.b
r=s.ll()
q=r!==0?A.Cm(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aF(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.u(A.x("This database has already been closed"))
r=p.b
q=r.a
s=q.e7(B.e.v(a),1)
q=q.d
r=A.Ci(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.B0(p,r,"executing",a,b)}else{s=p.iM(a,!0)
try{s.ec(new A.bP(b))}finally{s.p()}}},
K(a){return this.aF(a,B.m)},
tR(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.u(A.x("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cE(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.wT(r,p,n,o)
l=A.l([],t.lE)
k=new A.qA(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.ln(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.B0(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.N(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ah(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h3(f,e,new A.dn(!1).cY(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.ln(j,r-j,0)
n=q.buffer
h=B.c.N(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ah(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h3(f,e,""))
k.$0()
throw A.b(A.aA(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aA(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
iM(a,b){var s=this.tR(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aA(a,"sql","Must contain an SQL statement."))
return B.b.gE(s)},
xV(a){return this.iM(a,!1)},
oy(a,b){var s,r=this.iM(a,!0)
try{s=r.lg(new A.bP(b))
return s}finally{r.p()}},
fS(a){return this.oy(a,B.m)}}
A.qF.prototype={
$0(){var s=this.a,r=s.b
r.a.n6(r.b,new A.qE(s))},
$S:0}
A.qE.prototype={
$3(a,b,c){var s=A.IB(a)
if(s==null)return
this.a.d.kp(new A.ct(s,b,c))},
$S:166}
A.qG.prototype={
$0(){var s=this.a.b
s.a.n6(s.b,null)
return null},
$S:0}
A.qC.prototype={
$0(){var s=this.a,r=s.b
r.a.n5(r.b,new A.qB(s))
return null},
$S:0}
A.qB.prototype={
$0(){this.a.e.kp(null)},
$S:0}
A.qD.prototype={
$0(){var s=this.a.b
s.a.n5(s.b,null)
return null},
$S:0}
A.qy.prototype={
$0(){var s=this.a,r=s.b
r.a.n4(r.b,new A.qx(s))
return null},
$S:0}
A.qx.prototype={
$0(){var s=this.a.f
s.kp(null)
return 0},
$S:10}
A.qz.prototype={
$0(){var s=this.a.b
s.a.n4(s.b,null)
return null},
$S:0}
A.qH.prototype={
$2(a,b){A.Kh(a,this.a,b)},
$S:167}
A.qA.prototype={
$0(){var s,r,q,p,o,n
this.a.p()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
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
A.n8.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Ik(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.Im(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.O("The argument list is unmodifiable",null))},
$ivR:1}
A.e3.prototype={
gcT(){var s=this.r
return s==null?this.r=this.qt(!1):s},
qt(a){return new A.dm(new A.zm(this,!1),this.$ti.i("dm<1>"))},
kp(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.u(o.bI())
if((n&1)!==0)o.gaQ().aC(a)}else{n=o.b
if(n>=4)A.u(o.bI())
if((n&1)!==0)o.cw(a)
else if((n&3)===0){n=o.h3()
o=new A.cc(a,o.$ti.i("cc<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sen(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.zm.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.zn(q,a,s)
a.r=a.e=new A.zo(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dL<1>)")}}
A.zn.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.jX(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.zo.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.jX(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.vQ.prototype={
nm(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.IA(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
xM(a,b){var s,r,q,p,o,n,m,l,k,j
this.nm()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e7(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e7(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d9(r.b.buffer,0,null)[B.c.ah(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.wM(r,l,o)
r=r.r
if(r!=null)r.mW(k,l,o)
if(m!==0){j=A.Cm(s,k,m,"opening the database",null,null)
k.ll()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.qw(s,k,!1)}}
A.h3.prototype={
gpK(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.nn(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dn(!1).cY(o,0,null,!0))}return q},
guT(){return null},
bD(a,b){A.B0(this.b,a,b,this.d,this.e)},
lX(){if(this.r||this.b.r)throw A.b(A.x(u.f))},
h5(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.du()
if(s!==0?s!==101:q)r.bD(s,"executing statement")},
uD(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.uf(o))
l.push(p)}m.du()
if(p!==0?p!==101:k)m.bD(p,"selecting from statement")
n=m.gpK()
m.guT()
k=new A.mr(l,n,B.al)
k.pE()
return k},
uf(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ap(r.Number(s)):A.C_(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oL(a)
case 4:return s.lm(a)
case 5:default:return null}},
px(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.u(A.aA(a,"parameters","Expected "+A.q(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.py(a[s-1],s)
this.e=a},
py(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.ar(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aJ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.CQ(a).l(0)))
break A}if(A.bw(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oK(b,a)
break A}if(t.L.b(a)){s=q.a.oJ(b,a)
break A}s=q.pw(a,b)
break A}if(s!==0)q.bD(s,"binding parameter")},
pw(a,b){throw A.b(A.aA(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eG(a){A:{if(a instanceof A.bP){this.px(a.a)
break A}if(a instanceof A.l5)a.a.$1(this)}},
du(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.du()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.n9(s.d)}},
lg(a){var s=this
s.lX()
s.du()
s.eG(a)
return s.uD()},
ec(a){var s=this
s.lX()
s.du()
s.eG(a)
s.h5()}}
A.lv.prototype={
j1(a,b){return this.d.I(a)?1:0},
la(a,b){this.d.H(0,a)},
lb(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r=a.a
if(r==null)r=A.Db(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cx(new Uint8Array(0),0))
else throw A.b(A.he(14))
return new A.hz(new A.nO(this,r,(b&8)!==0),0)},
ld(a){}}
A.nO.prototype={
nC(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ak(a,0,s,J.bN(B.f.gaa(r.a),0,r.b),b)
return s},
l9(){return this.d>=2?1:0},
j2(){if(this.c)this.a.d.H(0,this.b)},
fL(){return this.a.d.h(0,this.b).b},
lc(a){this.d=a},
le(a){},
fM(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cx(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
lf(a){this.d=a},
eB(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cx(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.aw(0,b,s,a)}}
A.AP.prototype={
$1(a){return a.length!==0},
$S:9}
A.qb.prototype={
pE(){var s,r,q,p,o=A.w(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o.j(0,p,B.b.dm(s,p))}this.c=o}}
A.mr.prototype={
gt(a){return new A.z6(this)},
h(a,b){return new A.c8(this,A.cJ(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iK:1,
$io:1,
$ip:1}
A.c8.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.ar(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gL(){return this.a.a},
gaZ(){return this.b},
$iF:1}
A.z6.prototype={
gn(){var s=this.a
return new A.c8(s,A.cJ(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.o3.prototype={}
A.o4.prototype={}
A.o6.prototype={}
A.o7.prototype={}
A.uk.prototype={
a5(){return"OpenMode."+this.b}}
A.ej.prototype={}
A.bP.prototype={}
A.l5.prototype={}
A.di.prototype={
l(a){return"VfsException("+this.a+")"},
$iH:1}
A.je.prototype={}
A.b6.prototype={}
A.kO.prototype={}
A.kN.prototype={
gj3(){return 0},
nQ(a,b){return 12},
gj5(){return 4096},
j4(a,b){var s=this.nC(a,b),r=a.length
if(s<r){B.f.kv(a,s,r,0)
throw A.b(B.dI)}},
$ibl:1,
$ijp:1}
A.eO.prototype={}
A.B_.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.u(A.x("No such element"))
r=s.c
q=r.a
q.toString
q.k8(A.n(r).i("b4.E").a(r))
r.d.$0()}},
$S:0}
A.AY.prototype={
$1(a){var s=this.a,r=s.b
s.hG(s.c,new A.eO(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:20}
A.AZ.prototype={
$4(a,b,c,d){this.a.$1(c.f4(d))},
$S:169}
A.wR.prototype={}
A.wM.prototype={
ll(){var s=this.a,r=s.r
if(r!=null)r.n9(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.wT.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
ln(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Ci(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d9(o.b.buffer,0,null)[B.c.ah(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.wS(s,o,n)
o=o.w
if(o!=null)o.mW(r,s,n)}return new A.o1(r,p)}}
A.wS.prototype={
oJ(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cE(b),J.aj(b))},
oK(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cE(s),s.length)},
lm(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.DY(s.b,q.sqlite3_column_blob(r,a),p)},
oL(a){var s=this.c
return A.dW(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dV.prototype={$iBF:1}
A.dj.prototype={$iBG:1}
A.hg.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dj(s,A.d9(s.b.buffer,0,null)[B.c.ah(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.l8.prototype={
xF(a){var s,r,q=this.b
q===$&&A.A()
s="[sqlite3] "+A.dW(q,a,null)
r=$.KO
if(r==null)A.FN(s)
else r.$1(s)},
xD(a,b){var s,r=new A.aM(A.lc(A.ap(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.A()
s=A.Ds(q.buffer,b,8)
s.$flags&2&&A.I(s)
s[0]=A.BD(r)
s[1]=A.BB(r)
s[2]=A.BA(r)
s[3]=A.uS(r)
s[4]=A.BC(r)-1
s[5]=A.BE(r)-1900
s[6]=B.c.al(A.Ic(r),7)},
zq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.A()
s=new A.je(A.BU(j,b,k))
try{r=a.dC(s,d)
if(e!==0){p=r.b
o=A.d9(j.buffer,0,k)
n=B.c.ah(e,2)
o.$flags&2&&A.I(o)
o[n]=p}p=A.d9(j.buffer,0,k)
o=B.c.ah(c,2)
p.$flags&2&&A.I(p)
p[o]=0
m=r.a
return m}catch(l){p=A.E(l)
if(p instanceof A.di){q=p
p=q.a
j=A.d9(j.buffer,0,k)
o=B.c.ah(c,2)
j.$flags&2&&A.I(j)
j[o]=p}else{j=j.buffer
j=A.d9(j,0,k)
p=B.c.ah(c,2)
j.$flags&2&&A.I(j)
j[p]=1}}return k},
zf(a,b,c){var s=this.b
s===$&&A.A()
return A.bY(new A.qh(a,A.dW(s,b,null),c))},
z7(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bY(new A.qe(this,a,A.dW(s,b,null),c,d))},
zm(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bY(new A.qj(this,a,A.dW(s,b,null),c,d))},
zs(a,b,c){return A.bY(new A.ql(this,c,b,a))},
zx(a,b){return A.bY(new A.qn(a,b))},
zd(a,b){var s,r=Date.now(),q=this.b
q===$&&A.A()
s=v.G.BigInt(r)
A.Br(A.Dr(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
zb(a){return A.bY(new A.qg(a))},
zu(a,b,c,d){return A.bY(new A.qm(this,a,b,c,d))},
zF(a,b,c,d){return A.bY(new A.qr(this,a,b,c,d))},
zB(a,b){return A.bY(new A.qp(a,b))},
zz(a,b){return A.bY(new A.qo(a,b))},
zk(a,b){return A.bY(new A.qi(this,a,b))},
zo(a,b){return A.bY(new A.qk(a,b))},
zD(a,b){return A.bY(new A.qq(a,b))},
z9(a,b){return A.bY(new A.qf(this,a,b))},
zg(a){return a.gj3()},
zi(a,b,c){if(t.j2.b(a))return a.nQ(b,c)
return 12},
zv(a){if(t.j2.b(a))return a.gj5()
return 4096},
wa(a){a.$0()},
w5(a){return a.$0()},
w8(a,b,c,d,e){var s=this.b
s===$&&A.A()
a.$3(b,A.dW(s,d,null),A.ap(v.G.Number(e)))},
wg(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dV(s,b),new A.hg(s,c,d))},
wk(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dV(s,b),new A.hg(s,c,d))},
wi(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.A()
null.$2(new A.dV(s,b),new A.hg(s,c,d))},
wm(a,b){var s
null.toString
s=this.a
s===$&&A.A()
null.$1(new A.dV(s,b))},
we(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.A()
r.$1(new A.dV(s,b))},
wc(a,b,c,d,e){var s=this.b
s===$&&A.A()
return null.$2(A.BU(s,c,b),A.BU(s,e,d))},
w3(a,b){return a.$1(b)},
w1(a,b){return a.gzJ().$1(b)},
w_(a,b,c){return a.gzI().$2(b,c)}}
A.qh.prototype={
$0(){return this.a.la(this.b,this.c)},
$S:0}
A.qe.prototype={
$0(){var s,r=this,q=r.b.j1(r.c,r.d),p=r.a.b
p===$&&A.A()
p=A.d9(p.buffer,0,null)
s=B.c.ah(r.e,2)
p.$flags&2&&A.I(p)
p[s]=q},
$S:0}
A.qj.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.lb(q.c)),o=p.length
if(o>q.d)throw A.b(A.he(14))
s=q.a.b
s===$&&A.A()
s=A.bT(s.buffer,0,null)
r=q.e
B.f.cR(s,r,p)
s.$flags&2&&A.I(s)
s[r+o]=0},
$S:0}
A.ql.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.A()
s=A.bT(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.CO(s,q.b)
else return A.CO(s,null)},
$S:0}
A.qn.prototype={
$0(){this.a.ld(A.d2(this.b,0,0))},
$S:0}
A.qg.prototype={
$0(){return this.a.j2()},
$S:0}
A.qm.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.j4(A.bT(r.buffer,s.c,s.d),A.ap(v.G.Number(s.e)))},
$S:0}
A.qr.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.eB(A.bT(r.buffer,s.c,s.d),A.ap(v.G.Number(s.e)))},
$S:0}
A.qp.prototype={
$0(){return this.a.fM(A.ap(v.G.Number(this.b)))},
$S:0}
A.qo.prototype={
$0(){return this.a.le(this.b)},
$S:0}
A.qi.prototype={
$0(){var s,r=this.b.fL(),q=this.a.b
q===$&&A.A()
q=A.d9(q.buffer,0,null)
s=B.c.ah(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.qk.prototype={
$0(){return this.a.lc(this.b)},
$S:0}
A.qq.prototype={
$0(){return this.a.lf(this.b)},
$S:0}
A.qf.prototype={
$0(){var s,r=this.b.l9(),q=this.a.b
q===$&&A.A()
q=A.d9(q.buffer,0,null)
s=B.c.ah(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.dc.prototype={}
A.i5.prototype={
a9(a,b,c,d){var s,r=null,q={},p=A.be(A.Br(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.vX(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.p1(q,this,p,o)
o.d=s
o.f=new A.p2(q,o,s)
return new A.b7(o,A.n(o).i("b7<1>")).a9(a,b,c,d)},
bT(a,b,c){return this.a9(a,null,b,c)}}
A.p1.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a6(q,t.m).bC(new A.p3(p,r.b,s,r),s.gvl(),t.P)},
$S:0}
A.p3.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaQ().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:22}
A.p2.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaQ().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eS.prototype={
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
return s==null?A.u(A.x("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.t($.C,t.g5)
s=new A.ao(o,t.ex)
r=p.d
q=t.m
p.b=A.bm(r,"success",new A.yb(p,s),!1,q)
p.c=A.bm(r,"error",new A.yc(p,s),!1,q)
return o}}
A.yb.prototype={
$1(a){var s,r=this.a
r.D()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aD(s!=null)},
$S:2}
A.yc.prototype={
$1(a){var s=this.a
s.D()
s=s.d.error
if(s==null)s=a
this.b.aK(s)},
$S:2}
A.pP.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pQ.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aK(s)},
$S:2}
A.pU.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pV.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aK(s)},
$S:2}
A.pW.prototype={
$1(a){this.a.aK(new A.bi("IndexedDB open blocked"))},
$S:2}
A.r9.prototype={
$1(a){return A.be(a[1])},
$S:191}
A.wN.prototype={
vM(){var s={}
s.dart=new A.wO(this).$0()
return s},
iF(a){return this.xz(a)},
xz(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a6(v.G.WebAssembly.instantiateStreaming(a,p.vM()),t.m),$async$iF)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iF,r)}}
A.wO.prototype={
$0(){var s=this.a.a,r=A.be(v.G.Object),q=A.be(r.create.apply(r,[null]))
q.error_log=A.cZ(s.gxE())
q.localtime=A.bX(s.gxC())
q.xOpen=A.Cd(s.gzp())
q.xDelete=A.oA(s.gze())
q.xAccess=A.hN(s.gz6())
q.xFullPathname=A.hN(s.gzl())
q.xRandomness=A.oA(s.gzr())
q.xSleep=A.bX(s.gzw())
q.xCurrentTimeInt64=A.bX(s.gzc())
q.xClose=A.cZ(s.gza())
q.xRead=A.hN(s.gzt())
q.xWrite=A.hN(s.gzE())
q.xTruncate=A.bX(s.gzA())
q.xSync=A.bX(s.gzy())
q.xFileSize=A.bX(s.gzj())
q.xLock=A.bX(s.gzn())
q.xUnlock=A.bX(s.gzC())
q.xCheckReservedLock=A.bX(s.gz8())
q.xDeviceCharacteristics=A.cZ(s.gj3())
q.xFileControl=A.oA(s.gzh())
q.xSectorSize=A.cZ(s.gj5())
q["dispatch_()v"]=A.cZ(s.gw9())
q["dispatch_()i"]=A.cZ(s.gw4())
q.dispatch_update=A.Cd(s.gw7())
q.dispatch_xFunc=A.hN(s.gwf())
q.dispatch_xStep=A.hN(s.gwj())
q.dispatch_xInverse=A.hN(s.gwh())
q.dispatch_xValue=A.bX(s.gwl())
q.dispatch_xFinal=A.bX(s.gwd())
q.dispatch_compare=A.Cd(s.gwb())
q.dispatch_busy=A.bX(s.gw2())
q.changeset_apply_filter=A.bX(s.gw0())
q.changeset_apply_conflict=A.oA(s.gvZ())
return q},
$S:33}
A.hf.prototype={}
A.p4.prototype={
iI(){var s=0,r=A.h(t.H),q=this,p,o
var $async$iI=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.t($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cZ(new A.p7(o))
new A.ao(p,t.h1).aD(A.H9(o,t.m))
s=2
return A.a(p,$async$iI)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$iI,r)},
e5(a,b){return this.uv(a,b)},
uv(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$e5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.GC(),b)
o=A.Jj(p)
s=2
return A.a(A.Mm(new A.p6(a,o,p),t.mj),$async$e5)
case 2:s=3
return A.a(o.b.a,$async$e5)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$e5,r)},
tP(a){return this.e5(new A.p5(a),"readwrite")}}
A.p7.prototype={
$1(a){var s=A.be(this.a.result)
if(J.v(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:22}
A.p6.prototype={
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
$S:18}
A.p5.prototype={
$1(a){return this.nR(a)},
nR(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aW(a),$async$$1)
case 5:case 3:p.length===o||(0,A.r)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:23}
A.jN.prototype={
pf(a){var s=A.A3(new A.yM(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.A3(new A.yN(this))},
jU(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
uc(a){return this.jU(a,9007199254740992,0)},
ud(a,b){return this.jU(a,9007199254740992,b)},
iE(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$iE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.w(t.N,t.S)
k=new A.eS(p.d.index("fileName").openKeyCursor(),t.U)
case 3:s=5
return A.a(k.k(),$async$iE)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.u(A.x("Await moveNext() first"))
n=o.key
n.toString
A.G(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ap(A.f2(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iE,r)},
io(a){return this.wL(a)},
wL(a){var s=0,r=A.h(t.aV),q,p=this,o
var $async$io=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cD(p.d.index("fileName").getKey(a),t.W),$async$io)
case 3:q=o.ap(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$io,r)},
jV(a){return A.cD(this.d.get(a),t.o).an(new A.yL(a),t.m)},
eD(a,b){return this.oM(a,b)},
oM(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jV(a),$async$eD)
case 3:h=d
g=h.length
f=new A.cx(new Uint8Array(g),g)
e=new A.eS(p.e.openCursor(p.uc(a)),t.U)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eD)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.u(A.x("Await moveNext() first"))
k=n.a(l.key)
j=A.ap(A.f2(k[1]))
if(j>=h.length){s=5
break}i=new A.yO(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.vy(A.be(l.value)).an(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eD,r)},
ie(a){return this.vJ(a)},
vJ(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$ie=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
o=A
s=3
return A.a(A.cD(p.d.put({name:a,length:0}),t.W),$async$ie)
case 3:q=o.ap(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ie,r)},
b0(a,b){return this.z_(a,b)},
z_(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$b0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
s=2
return A.a(q.jV(a),$async$b0)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.N(new A.T(o,n),n.i("o.E"))
B.b.aG(m)
s=3
return A.a(A.Bm(new A.X(m,new A.yP(new A.yQ(q,a),b),A.a_(m).i("X<1,y<~>>")),t.H),$async$b0)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eS(q.d.openCursor(a),t.U)
s=6
return A.a(l.k(),$async$b0)
case 6:s=7
return A.a(A.cD(l.gn().update({name:p.name,length:b.c}),t.X),$async$b0)
case 7:case 5:return A.e(null,r)}})
return A.f($async$b0,r)},
dA(a,b,c){return this.yA(0,b,c)},
yA(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
s=2
return A.a(q.jV(b),$async$dA)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cD(q.e.delete(q.ud(b,B.c.N(c,4096)*4096)),t.X),$async$dA)
case 5:case 4:o=new A.eS(q.d.openCursor(b),t.U)
s=6
return A.a(o.k(),$async$dA)
case 6:s=7
return A.a(A.cD(o.gn().update({name:p.name,length:c}),t.X),$async$dA)
case 7:return A.e(null,r)}})
return A.f($async$dA,r)},
ii(a){return this.vX(a)},
vX(a){var s=0,r=A.h(t.H),q=this,p
var $async$ii=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.Bm(A.l([A.cD(q.e.delete(q.jU(a,9007199254740992,0)),p),A.cD(q.d.delete(a),p)],t.iw),t.H),$async$ii)
case 2:return A.e(null,r)}})
return A.f($async$ii,r)}}
A.yM.prototype={
$0(){this.a.b.ai()},
$S:3}
A.yN.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aK(r)},
$S:3}
A.yL.prototype={
$1(a){if(a==null)throw A.b(A.aA(this.a,"fileId","File not found in database"))
else return a},
$S:194}
A.yO.prototype={
$1(a){var s=this.a
s.cR(s,this.b,J.bN(a,0,this.c))},
$S:195}
A.yQ.prototype={
or(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cD(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.o),$async$$2)
case 2:m=d
l=t.a.a(B.f.gaa(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cD(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cD(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.or(a,b)},
$S:196}
A.yP.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:197}
A.yn.prototype={
v_(a,b,c){B.f.cR(this.b.kS(a,new A.yo(this,a)),b,c)},
vp(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.N(q,4096)
o=B.c.al(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.v_(p*4096,o,J.bN(B.f.gaa(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.yo.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cR(s,0,J.bN(B.f.gaa(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:198}
A.nX.prototype={}
A.dD.prototype={
f1(a){var s=this
if(s.e||s.d.a==null)A.u(A.he(10))
if(a.kD(s.x)){s.cA(!0)
return a.d.a}else return A.bq(null,t.H)},
cA(a){return this.uQ(a)},
uQ(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.N(o,o.$ti.i("o.E"))
o.ab(0)
s=5
return A.a(p.d.tP(n).b_(new A.rN(p,n,a)),$async$cA)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cA,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.f1(new A.jL(new A.rO(),new A.ao(new A.t($.C,t.D),t.F)))
p.e=!0
p.cA(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.gY(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
dO(a,b){return this.qq(a,b)},
qq(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dO=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.io(b),$async$dO)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
eW(){var s=0,r=A.h(t.H),q=this,p
var $async$eW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.e5(new A.rM(q,p),"readonly"),$async$eW)
case 2:s=3
return A.a(A.Hx(p,t.H),$async$eW)
case 3:return A.e(null,r)}})
return A.f($async$eW,r)},
cH(){return this.cA(!1)},
j1(a,b){return this.w.d.I(a)?1:0},
la(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.f1(new A.jF(s,a,new A.ao(new A.t($.C,t.D),t.F)))},
lb(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Db(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dC(new A.je(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.f1(new A.hp(p,o,new A.ao(new A.t($.C,t.D),t.F)))
return new A.hz(new A.nP(p,q.a,o),0)},
ld(a){}}
A.rN.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.u(A.x("Future already completed"))
p.co(null)}o.cA(this.c)},
$S:3}
A.rO.prototype={
$1(a){return this.nY(a)},
nY(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:23}
A.rM.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.iE(),$async$$1)
case 2:m=c
l=q.a
l.z.C(0,m)
p=m.gac(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.eD(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:23}
A.nP.prototype={
j4(a,b){this.b.j4(a,b)},
gj3(){return 0},
gj5(){return 4096},
l9(){return this.b.d>=2?1:0},
j2(){},
fL(){return this.b.fL()},
lc(a){this.b.d=a
return null},
le(a){},
nQ(a,b){return 12},
fM(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.u(A.he(10))
s.b.fM(a)
if(!r.y.G(0,s.c))r.f1(new A.jL(new A.yK(s,a),new A.ao(new A.t($.C,t.D),t.F)))},
lf(a){this.b.d=a
return null},
eB(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.u(A.he(10))
s=m.c
if(l.y.G(0,s)){m.b.eB(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cx(new Uint8Array(0),0)
q=J.bN(B.f.gaa(r.a),0,r.b)
m.b.eB(a,b)
p=new Uint8Array(a.length)
B.f.cR(p,0,a)
o=A.l([],t.p8)
n=$.C
o.push(new A.nX(b,p))
l.f1(new A.hJ(l,s,q,o,new A.ao(new A.t(n,t.D),t.F)))},
$ibl:1,
$ijp:1}
A.yK.prototype={
$1(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dO(a,o.c),$async$$1)
case 3:q=n.dA(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:23}
A.b8.prototype={
kD(a){a.hG(a.c,this,!1)
return!0}}
A.jL.prototype={
aW(a){return this.w.$1(a)}}
A.jF.prototype={
kD(a){var s,r,q,p
if(!a.gF(0)){s=a.gY(0)
for(r=this.x;s!=null;)if(s instanceof A.jF)if(s.x===r)return!1
else s=s.gfu()
else if(s instanceof A.hJ){q=s.gfu()
if(s.x===r){p=s.a
p.toString
p.k8(A.n(s).i("b4.E").a(s))}s=q}else if(s instanceof A.hp){if(s.x===r){r=s.a
r.toString
r.k8(A.n(s).i("b4.E").a(s))
return!1}s=s.gfu()}else break}a.hG(a.c,this,!1)
return!0},
aW(a){return this.ys(a)},
ys(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dO(a,o),$async$aW)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.ii(n),$async$aW)
case 3:return A.e(null,r)}})
return A.f($async$aW,r)}}
A.hp.prototype={
aW(a){return this.yr(a)},
yr(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.ie(p),$async$aW)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aW,r)}}
A.hJ.prototype={
kD(a){var s,r=a.b===0?null:a.gY(0)
for(s=this.x;r!=null;)if(r instanceof A.hJ)if(r.x===s){B.b.C(r.z,this.z)
return!1}else r=r.gfu()
else if(r instanceof A.hp){if(r.x===s)break
r=r.gfu()}else break
a.hG(a.c,this,!1)
return!0},
aW(a){return this.yt(a)},
yt(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.yn(m,A.w(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.r)(m),++o){n=m[o]
l.vp(n.a,n.b)}k=a
s=3
return A.a(q.w.dO(a,q.x),$async$aW)
case 3:s=2
return A.a(k.b0(c,l),$async$aW)
case 2:return A.e(null,r)}})
return A.f($async$aW,r)}}
A.fu.prototype={
a5(){return"FileType."+this.b}}
A.h_.prototype={
bO(){var s=this.d
if(s!=null)return s
throw A.b(A.x("VFS closed"))},
j1(a,b){var s=$.B4().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bO().bq(s)?1:0},
la(a,b){var s=$.B4().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bO().fo(s,!1)},
lb(a){return new v.G.URL(a,"file:///").pathname},
dC(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dC(a,b)
s=$.B4().h(0,p)
if(s==null)return q.e.dC(a,b)
r=q.bO()
if(!r.bq(s))if((b&4)!==0){r.dj(s).truncate(0)
r.fo(s,!0)}else throw A.b(B.dH)
return new A.hz(new A.oc(q,s,(b&8)!==0),0)},
ld(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cM(a,b){return this.xO(a,b)},
cL(a){return this.cM(a,!1)},
xO(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.vN(a,b)
s=2
return A.a(m.$1("meta"),$async$cM)
case 2:l=d
k=J.v(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cM)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cM)
case 4:o=d
n=q.d=new A.z2(new Uint8Array(2),l,p,o)
if(k){n.fo(B.b_,p.getSize()>0)
n.fo(B.b0,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cM,r)}}
A.vN.prototype={
ol(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a6(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a6(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.ol(a)},
$S:199}
A.oc.prototype={
nC(a,b){return A.D8(this.a.bO().dj(this.b),a,{at:b})},
l9(){return this.d>=2?1:0},
j2(){var s=this.a,r=this.b
s.bO().dj(r).flush()
if(this.c)s.bO().fo(r,!1)},
fL(){return this.a.bO().dj(this.b).getSize()},
lc(a){this.d=a},
le(a){this.a.bO().dj(this.b).flush()},
fM(a){this.a.bO().dj(this.b).truncate(a)},
lf(a){this.d=a},
eB(a,b){if(A.D9(this.a.bO().dj(this.b),a,{at:b})<a.length)throw A.b(B.dJ)}}
A.z2.prototype={
bq(a){var s=this.a
A.D8(this.b,s,{at:0})
return s[a.a]!==0},
fo(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.I(s)
s[a.a]=r
A.D9(this.b,s,{at:0})},
dj(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.wH.prototype={
pc(a,b){var s=this,r=s.c
r.a!==$&&A.cz()
r.a=s
r=t.S
A.yp(new A.wI(s),r)
A.yp(new A.wJ(s),r)
s.r=A.yp(new A.wK(s),r)
s.w=A.yp(new A.wL(s),r)},
e7(a,b){var s=J.L(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bT(this.b.buffer,0,null)
B.f.aw(q,r,r+s.gm(a),a)
B.f.kv(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cE(a){return this.e7(a,0)},
n6(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
n4(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
n5(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.wI.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.wJ.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.wK.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.wL.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.ic.prototype={}
A.uV.prototype={
p9(a){var s,r=this,q=r.a
q.start()
r.c=A.bm(q,"message",new A.uZ(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kv()
q.toString
A.js(q,s,null,null,!1).an(new A.v_(r),t.P)}},
jI(a){return this.ri(a)},
ri(a){var s=0,r=A.h(t.H),q=this
var $async$jI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.LN(a,new A.uW(q),q.gxb(),new A.uX(q),new A.uY(q))
return A.e(null,r)}})
return A.f($async$jI,r)},
fT(a,b,c){return this.oE(a,b,c,c)},
oE(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.H_(null))
o=p.e++
n=new A.t($.C,t.a7)
p.f.j(0,o,new A.ao(n,t.h1))
a.i=o
p.a.postMessage(a,A.hS(a))
s=3
return A.a(n,$async$fT)
case 3:m=f
if(J.v(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Io(m))
case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
tj(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.D()
s=q.d
if(s!=null)s.D()
for(s=q.f,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();)r.d.aK(new A.ia(a))
s.ab(0)
p.ai()},
mc(){return this.tj(null)}}
A.uZ.prototype={
$1(a){if(a.data=="_disconnect"){this.a.mc()
return}this.a.jI(A.be(a.data))},
$S:2}
A.v_.prototype={
$1(a){this.a.mc()
a.a.ai()},
$S:200}
A.uY.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aD(a)},
$S:22}
A.uX.prototype={
$1(a){return this.od(a)},
od(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.w6(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bn(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.E(a0)
k=A.ae(a0)
if(!(l instanceof A.du)){b.console.error("Error in worker: "+J.Z(l))
b.console.error("Original trace: "+A.q(k))}b=l
if(b instanceof A.c9){h=A.Ho(b)
g=0}else{g=b instanceof A.du?1:null
h=null}f={e:J.Z(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.H(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.hS(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:201}
A.uW.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:22}
A.ia.prototype={
l(a){return"Channel to database worker is closed: "+A.q(this.a)},
$iH:1}
A.qu.prototype={
ce(a){return this.xA(a)},
xA(a){var s=0,r=A.h(t.n),q
var $async$ce=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.wQ(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ce,r)}}
A.l4.prototype={}
A.qc.prototype={}
A.eM.prototype={}
A.lm.prototype={
iG(){var s=0,r=A.h(t.H),q=this
var $async$iG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cL(q.b),$async$iG)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iG,r)},
kU(){var s=0,r=A.h(t.H),q=this
var $async$kU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$kU,r)}}
A.rn.prototype={
yv(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
qu(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.wX.prototype={
$1(a){var s=new A.t($.C,t.D),r=new A.d3(new A.ao(s,t.F))
this.a.a=r
this.b.aD(r)
return A.Hy(s)},
$S:202}
A.wY.prototype={
$2(a,b){var s,r,q
A.be(a)
s=J.v(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bB(new A.du("Operation was cancelled"),b)
else q.bB(a,b)}return null},
$S:203}
A.d3.prototype={}
A.l9.prototype={
gvB(){if(this.c.a)return!1
return!this.d||this.f!=null},
dJ(a){return this.pj(a)},
pj(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dJ=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kv()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.js(n,o.a,null,o.grm(),!0),$async$dJ)
case 6:m=c
s=7
return A.a(A.js(n,o.b,a,null,!1),$async$dJ)
case 7:l=c
j=o.e
j=j==null?null:j.iG()
s=8
return A.a(j instanceof A.t?j:A.bn(j,t.H),$async$dJ)
case 8:o.f=new A.a5(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.ai()
j=l
if(j!=null)j.a.ai()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dJ,r)},
rn(){this.nE()},
kJ(a,b,c){return this.c.iY(new A.qJ(this,a,b,c),b,c)},
nE(){return this.c.l8(new A.qK(this),t.H)}}
A.qJ.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dJ(r.c).an(new A.qI(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.qI.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.qK.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kU()
s.a.ai()
r.a.ai()
p.f=null}},
$S:3}
A.iT.prototype={
iY(a,b,c){return this.yZ(a,b,c,c)},
l8(a,b){return this.iY(a,null,b)},
yZ(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iY=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.v(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.uc(h,p)
if(!p.a){h.a=p.a=!0
q=A.ir(a,c).b_(o)
s=1
break}else{n={}
m=new A.t($.C,c.i("t<0>"))
l=new A.ao(m,c.i("ao<0>"))
n.a=null
h=new A.ub(h,n,l,a,c)
if(!g)n.a=A.bm(b,"abort",new A.ua(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.ag(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ak(j,0,i,h,n)
B.b.ak(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.b_(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iY,r)}}
A.uc.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gF(0)){s=r.b
if(s===r.c)A.u(A.aF());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.ub.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.D()
r.c.aD(A.ir(r.d,r.e))},
$S:0}
A.ua.prototype={
$1(a){var s,r=this
r.a.a.D()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aK(B.ap)}},
$S:2}
A.ek.prototype={
gnJ(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
B.b.C(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.r_.prototype={
$1(a){if(a!=null)return A.G(a)
return null},
$S:204}
A.lQ.prototype={
a5(){return"MessageType."+this.b}}
A.vB.prototype={
w6(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.iu(a,b)
case"connect":return p.kx(a,b)
case"custom":return p.ef(a,b)
case"fileSystemExists":return p.fh(a,b)
case"fileSystemFlush":return p.fi(a,b)
case"fileSystemAccess":return p.fg(a,b)
case"runQuery":return p.iy(a,b)
case"exclusiveLock":return p.it(a,b)
case"releaseLock":s=p.bx(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.u(A.x("Lock to be released is not active."))
q.b.ai()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.ir(a,b)
case"openAdditionalConnection":return p.iv(a,b)
case"updateRequest":return p.iz(a,b)
case"rollbackRequest":return p.ix(a,b)
case"commitRequest":return p.is(a,b)
case"dedicatedCompatibilityCheck":return p.dQ(a,b)
case"sharedCompatibilityCheck":return p.dQ(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dQ(a,b)
default:r=A.f3(new A.bB(!1,o,o,"Unsupported request "+A.q(a.t)),o)
q=new A.t($.C,t.hl)
q.cn(r)
return q}}}
A.dz.prototype={
a5(){return"FileSystemImplementation."+this.b}}
A.cw.prototype={
a5(){return"TypeCode."+this.b},
vP(a){var s=null
switch(this.a){case 0:s=A.u(A.O("Unsupported type code",null))
break
case 1:a=A.ap(A.f2(a))
s=a
break
case 2:s=A.C_(t.bJ.a(a).toString(),null)
break
case 3:A.f2(a)
s=a
break
case 4:A.G(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hL(a)
s=a
break
case 6:break}return s}}
A.el.prototype={
mX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.q(r)+" parameters, got "+A.q(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aD:B.b3[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ap(A.f2(h))))
if(k!==0)a.bD(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bD(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f2(h))
if(k!==0)a.bD(k,e)
break
case 4:g=B.e.v(A.G(h))
k=s.dart_sqlite3_bind_text(d,i,c.cE(g),g.length)
if(k!==0)a.bD(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cE(h),h.length)
if(k!==0)a.bD(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bD(k,e)
break
case 7:f=A.hL(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bD(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mM()},
h(a,b){var s=this.c[b],r=s>=8?B.aD:B.b3[s]
return r.vP(this.a[b])},
j(a,b,c){this.mM()},
mM(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.Ai.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:22}
A.pN.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pO.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aK(s)},
$S:2}
A.pR.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pS.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aK(s)},
$S:2}
A.pT.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aK(s)},
$S:2}
A.uR.prototype={
wn(){var s,r,q,p
for(s=this.b,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.ab(0)}}
A.ip.prototype={
a5(){return"FileType."+this.b}}
A.dP.prototype={
a5(){return"StorageMode."+this.b}}
A.fU.prototype={
l(a){return"Remote error: "+this.a},
$iH:1}
A.du.prototype={}
A.A2.prototype={
$1(a){return A.be(a.data)},
$S:206}
A.k0.prototype={
D(){var s=this.a
if(s!=null)s.D()
this.a=null}}
A.hn.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.D()
q.d.D()
q.e.D()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.r)(p),++n)p[n].abort()
B.b.ab(p)
p=q.f
if(p!=null)p.b.ai()
s=2
return A.a(q.a.f6(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
mE(a){var s=new v.G.AbortController()
a.onabort=A.A3(new A.y3(s))
this.w.push(s)
return s},
l5(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gvB()){r=p.mE(b)
o=s.kJ(c,r.signal,d).b_(new A.y7(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.x("Requested operation on inactive lock state."))}if(o==null)o=A.ir(c,d)
q=p.a.z
return q instanceof A.dD?o.b_(q.gwO()):o},
xL(a){var s=this,r=s.mE(a),q=new A.t($.C,t.hy),p=new A.az(q,t.ho),o=t.H
A.Bl(s.a.f.kJ(new A.y4(s,p),r.signal,o),new A.y5(p),o,t.K)
return q.b_(new A.y6(s,r))}}
A.y3.prototype={
$0(){return this.a.abort()},
$S:0}
A.y7.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:3}
A.y4.prototype={
$0(){var s=this.a,r=s.r++,q=new A.t($.C,t.D)
s.f=new A.a5(r,new A.az(q,t.h))
this.b.aD(r)
return q},
$S:4}
A.y5.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bB(a,b)},
$S:11}
A.y6.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:3}
A.hl.prototype={
pe(a,b,c){this.b.a.b_(new A.xO(this))},
dQ(a,b){return this.qD(a,b)},
qD(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.n_(a),$async$dQ)
case 3:q={r:d.gnJ(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
kx(a,b){return this.wX(a,b)},
wX(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$kx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gm6()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hS(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kx,r)},
ef(a,b){return this.wY(a,b)},
wY(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ef=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lS(l)
n=a.r
s=7
return A.a(o.a.gcg(),$async$ef)
case 7:s=6
return A.a(d.cI(p,new A.qc(n)),$async$ef)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cI(p,new A.l4(a)),$async$ef)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ef,r)},
iu(a,b){return this.xd(a,b)},
xd(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$iu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.l8(new A.xT(p,a),t.m),$async$iu)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)},
iy(a,b){return this.xh(a,b)},
xh(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$iy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.a
s=3
return A.a(n.gcg(),$async$iy)
case 3:m=d
q=o.l5(a.z,b,new A.xW(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)},
it(a,b){return this.x3(a,b)},
x3(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$it=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bx(a).xL(b),$async$it)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
is(a,b){return this.wW(a,b)},
wW(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$is=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.xQ(p,o),a),$async$is)
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
return A.f($async$is,r)},
ix(a,b){return this.xg(a,b)},
xg(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ix=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.xV(p,o),a),$async$ix)
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
return A.f($async$ix,r)},
iz(a,b){return this.xj(a,b)},
xj(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dH(n,new A.xY(p,o),a),$async$iz)
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
return A.f($async$iz,r)},
iv(a,b){return this.xe(a,b)},
xe(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$iv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bx(a).a;++m.w
s=3
return A.a(A.Al(),$async$iv)
case 3:o=d
n=o.a
p.w.lv(o.b).x.push(A.E8(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
ir(a,b){return this.wV(a,b)},
wV(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$ir=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
B.b.H(p.x,o)
s=3
return A.a(o.p(),$async$ir)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
fi(a,b){return this.x6(a,b)},
x6(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bx(a).a.gcP(),$async$fi)
case 3:o=d
s=o instanceof A.dD?4:5
break
case 4:s=6
return A.a(o.cA(!1),$async$fi)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
fg(a,b){return this.x4(a,b)},
x4(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=B.b4[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcP(),$async$fg)
case 4:s=3
return A.a(l.l5(null,k,new j.xR(d,n,m,a),t.m),$async$fg)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
fh(a,b){return this.x5(a,b)},
x5(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcP(),$async$fh)
case 4:s=3
return A.a(n.l5(null,m,new l.xS(d,a),t.y),$async$fh)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
dH(a,b,c){return this.oO(a,b,c)},
oO(a,b,c){var s=0,r=A.h(t.m),q,p
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
xc(a){},
de(a){var s=0,r=A.h(t.X),q,p=this
var $async$de=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fT({r:a,z:null,i:0,d:null,t:"custom"},B.cM,t.m),$async$de)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$de,r)},
lS(a){return B.b.nh(this.x,new A.xN(a))},
bx(a){var s=a.d
if(s!=null)return this.lS(s)
else throw A.b(A.O("Request requires database id",null))},
$iCX:1}
A.xO.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.r)(p),++n
s=2
break
case 4:B.b.ab(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.xT.prototype={
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
m=i.wM(h.d,A.Hs(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcP():m.gcg(),$async$$0)
case 8:l=A.E8(m,null)
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
return A.a(m.f6(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:207}
A.xW.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.x("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.el(s,r,A.bT(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oz(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ap(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.wC(l,k.s,q)
s=o.d
return A.FJ(s.sqlite3_get_autocommit(p)!==0,m,A.ap(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:33}
A.xQ.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcg(),$async$$0)
case 3:q=b.a.pL().gcT().aV(new A.xP(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.xP.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hS(s))},
$S:69}
A.xV.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcg(),$async$$0)
case 3:q=b.a.ut().gcT().aV(new A.xU(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.xU.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hS(s))},
$S:69}
A.xY.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcg(),$async$$0)
case 3:q=b.a.v0().gcT().aV(new A.xX(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:210}
A.xX.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hS(s))},
$S:211}
A.xR.prototype={
$0(){var s,r,q,p=this,o=p.a.dC(new A.je(A.EP(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fM(s.byteLength)
o.eB(A.bT(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fL()
r=new Uint8Array(q)
o.j4(r,0)
q={r:t.a.a(J.GJ(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.j2()}},
$S:33}
A.xS.prototype={
$0(){return this.a.j1(A.EP(B.b4[this.b.f]),0)===1},
$S:50}
A.xN.prototype={
$1(a){return a.b===this.a},
$S:212}
A.la.prototype={
gcP(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.ir(new A.qN(p),t.H):o,$async$gcP)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcP,r)},
gcg(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.ir(new A.qM(p),t.u):o,$async$gcg)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcg,r)},
f6(){var s=0,r=A.h(t.H),q=this
var $async$f6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$f6)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f6,r)},
p(){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:j=q.a.r
j.toString
s=2
return A.a(j,$async$p)
case 2:p=b
o=q.x
s=o!=null?3:4
break
case 3:s=5
return A.a(o,$async$p)
case 5:n=b
j=q.r
if(j!=null)j.wn()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.CA()
A.Bi(m)
k=l.a.get(m)
if(k==null)A.u(A.x("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.t?j:A.bn(j,t.H),$async$p)
case 6:q.f.nE()
return A.e(null,r)}})
return A.f($async$p,r)},
mi(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a5(s,!0)
p=a.iM(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gE(0)).p()
n.j(0,p.d,p)
return new A.a5(p,!0)}return new A.a5(p,!1)},
wC(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aF(b,B.m)
else{s=null
r=null
q=this.mi(a,b)
s=q.a
r=q.b
try{s.ec(new A.l5(c.gvz()))}finally{if(r)s.du()
else s.p()}}},
oz(a,b,c){var s,r=null,q=null,p=this.mi(a,b)
r=p.a
q=p.b
try{s=A.Ip(r,c)
return s}finally{if(q)r.du()
else r.p()}}}
A.qN.prototype={
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
return A.a(A.vM("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gea()
s=3
break
case 5:case 6:s=10
return A.a(A.ln("drift_db/"+l.c,k===B.ax,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gea()
s=3
break
case 7:s=11
return A.a(A.lx(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gea()
s=3
break
case 8:l.z=A.Bo("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.qM.prototype={
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
o.nm()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e7(B.e.v(n.a),1),n,0)
if(m===0)A.u(A.x("could not register vfs"))
$.CA().j(0,n,m)
s=5
return A.a(l.f.kJ(new A.qL(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:57}
A.qL.prototype={
$0(){var s=this.a
return s.a.b.iJ(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:57}
A.xc.prototype={
gm6(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.oI()
r.Q!==$&&A.B1()
r.Q=s
q=s}return q},
eg(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eg=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cf(A.bZ(A.Kg(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$eg)
case 7:if(!b){s=6
break}m=h.gn()
s=J.v(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.ic(i.port,i.lockName,null)
n.lv(l)
s=9
break
case 10:s=A.M6(m.t)?11:12
break
case 11:s=13
return A.a(n.n_(m),$async$eg)
case 13:k=b
j.postMessage(k.gnJ())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.D(),$async$eg)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eg,r)},
lv(a){var s=this,r=A.Ja(a,s.d++,s)
s.c.push(r)
r.b.a.b_(new A.xd(s,r))
return r},
n_(a){return this.x.l8(new A.xe(this,a),t.p6)},
ce(a){return this.xB(a)},
xB(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ce=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.be(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.x("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.q(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bn(n,t.he),$async$ce)
case 5:s=3
break
case 4:o=A.Bl(q.b.ce(m),new A.xf(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$ce)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$ce,r)},
wM(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ax||b===B.aZ
o=A.Bv(t.cj)
n=c===0?null:new A.uR(c,A.dH(null,null,t.N,t.fw))
n=new A.la(this,r,a,b,d,new A.l9(q+"-outer",q,new A.iT(o),p),n)
s.j(0,r,n)
return n}}
A.xd.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.xe.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.v(d.t,"dedicatedCompatibilityCheck")||J.v(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.e6(),$async$$0)
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
return A.a(A.oG(),$async$$0)
case 9:case 8:j=a1
i=A.aO(t.cU)
s=J.v(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gm6()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.hS(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hs(n,"message",!1,t.d4).gE(0),$async$$0)
case 15:e=b.H6(a.be(a1.data))
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
return A.a(A.hV(),$async$$0)
case 18:d=b.D(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a5(B.bf,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.Ah(c),$async$$0)
case 23:if(a1)i.u(0,new A.a5(B.bg,c))
case 22:d=A.N(i,i.$ti.c)
q=new A.ek(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.xf.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:215}
A.kc.prototype={}
A.nG.prototype={
gnk(){return new A.hs(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.oa.prototype={
gnk(){return new A.dm(new A.zh(this),t.k8)},
p(){}}
A.zh.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.bm(this.a.a,"connect",new A.ze(new A.zi(s,r,a)),!1,t.m))
a.r=new A.zf(r)},
$S:216}
A.zi.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bm(a,"message",new A.zg(this.c),!1,t.m))},
$S:2}
A.zg.prototype={
$1(a){this.a.vo(a)},
$S:2}
A.ze.prototype={
$1(a){var s,r=a.ports
r=J.D(t.ip.b(r)?r:new A.bO(r,A.a_(r).i("bO<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:2}
A.zf.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].D()},
$S:3}
A.nH.prototype={
oI(){var s=v.G
if(!("Worker" in s))return null
return new A.yi(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.yi.prototype={}
A.mN.prototype={
gfV(){return A.G(this.c)}}
A.w4.prototype={
gkI(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
j7(a){var s,r=this,q=r.d=J.GM(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gO()
return s},
ne(a,b){var s
if(this.j7(a))return
if(b==null)if(a instanceof A.et)b="/"+a.a+"/"
else{s=J.Z(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.lZ(b)},
fc(a){return this.ne(a,null)},
wG(){if(this.c===this.b.length)return
this.lZ("no more input")},
wB(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.u(A.b_("position must be greater than or equal to 0."))
else if(c>n.length)A.u(A.b_("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.u(A.b_("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.vO(s,r,new Uint32Array(q))
p.pa(new A.ck(n),s)
o=c+b
if(o>q)A.u(A.b_("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.u(A.b_("Start may not be negative, was "+c+"."))
throw A.b(new A.mN(n,a,new A.ht(p,c,o)))},
lZ(a){this.wB("expected "+a+".",0,this.c)}}
A.hb.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Dc(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Dc(b,this))
s=this.a
s.$flags&2&&A.I(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.I(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lP(b)
B.f.aw(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.uY(q)
q=r.a
s=r.b++
q.$flags&2&&A.I(q)
q[s]=b},
lP(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
uY(a){var s=this.lP(null)
B.f.aw(s,0,a,this.a)
this.a=s},
ak(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.au(c,0,s,null,null))
s=this.a
if(d instanceof A.cx)B.f.ak(s,b,c,d.a,e)
else B.f.ak(s,b,c,d,e)},
aw(a,b,c,d){return this.ak(0,b,c,d,0)}}
A.nQ.prototype={}
A.cx.prototype={}
A.Bg.prototype={}
A.hs.prototype={
a9(a,b,c,d){return A.bm(this.a,this.b,a,!1,this.$ti.c)},
bT(a,b,c){return this.a9(a,null,b,c)}}
A.jJ.prototype={
D(){var s=this,r=A.bq(null,t.H)
if(s.b==null)return r
s.k9()
s.d=s.b=null
return r},
iH(a){var s,r=this
if(r.b==null)throw A.b(A.x("Subscription has been canceled."))
r.k9()
s=A.Ff(new A.ym(a),t.m)
s=s==null?null:A.cZ(s)
r.d=s
r.k7()},
bs(){if(this.b==null)return;++this.a
this.k9()},
bf(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.k7()},
k7(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
k9(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibj:1}
A.yl.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.ym.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.dG.prototype
s.oU=s.l
s=A.bE.prototype
s.oQ=s.nn
s.oR=s.no
s.oT=s.nq
s.oS=s.np
s=A.b2.prototype
s.j9=s.aC
s.ls=s.aI
s.lt=s.aU
s=A.dk.prototype
s.oX=s.lM
s.oY=s.m1
s.oZ=s.mz
s=A.J.prototype
s.lr=s.ak
s=A.aD.prototype
s.lq=s.vy
s=A.k1.prototype
s.p_=s.p
s=A.o.prototype
s.oP=s.dB
s=A.kK.prototype
s.lo=s.ip
s=A.fj.prototype
s.lp=s.f7
s=A.h1.prototype
s.oW=s.a1
s.oV=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Kq","HH",47)
r(A,"KD","Ia",10)
q(A,"Lb","IW",20)
q(A,"Lc","IX",20)
q(A,"Ld","IY",20)
q(A,"Le","KG",15)
r(A,"Fk","L2",0)
q(A,"Lf","KH",25)
s(A,"Lg","KJ",13)
r(A,"Ad","KI",0)
p(A,"Ll",5,null,["$5"],["KX"],218,0)
p(A,"Lq",4,null,["$1$4","$4"],["A8",function(a,b,c,d){return A.A8(a,b,c,d,t.z)}],219,0)
p(A,"Ls",5,null,["$2$5","$5"],["A9",function(a,b,c,d,e){var i=t.z
return A.A9(a,b,c,d,e,i,i)}],220,0)
p(A,"Lr",6,null,["$3$6"],["Cg"],221,0)
p(A,"Lo",4,null,["$1$4","$4"],["F3",function(a,b,c,d){return A.F3(a,b,c,d,t.z)}],222,0)
p(A,"Lp",4,null,["$2$4","$4"],["F4",function(a,b,c,d){var i=t.z
return A.F4(a,b,c,d,i,i)}],223,0)
p(A,"Ln",4,null,["$3$4","$4"],["F2",function(a,b,c,d){var i=t.z
return A.F2(a,b,c,d,i,i,i)}],224,0)
p(A,"Lj",5,null,["$5"],["KW"],225,0)
p(A,"Lt",4,null,["$4"],["Aa"],226,0)
p(A,"Li",5,null,["$5"],["KV"],227,0)
p(A,"Lh",5,null,["$5"],["KU"],228,0)
p(A,"Lm",4,null,["$4"],["KY"],229,0)
p(A,"Lk",5,null,["$5"],["F1"],230,0)
var j
o(j=A.eP.prototype,"geO","bK",0)
o(j,"geP","bL",0)
n(A.eQ.prototype,"gvH",0,1,null,["$2","$1"],["bB","aK"],49,0,0)
m(A.t.prototype,"gjm","pQ",13)
n(j=A.e2.prototype,"gvl",0,1,null,["$2","$1"],["bz","vm"],49,0,0)
l(j,"gpr","aC",14)
m(j,"gpm","aI",13)
o(j,"gpH","aU",0)
o(j=A.dY.prototype,"geO","bK",0)
o(j,"geP","bL",0)
o(j=A.b2.prototype,"geO","bK",0)
o(j,"geP","bL",0)
o(A.hr.prototype,"gmg","tD",0)
l(j=A.cf.prototype,"gtv","tw",14)
m(j,"gtz","tA",13)
o(j,"gtx","ty",0)
o(j=A.hu.prototype,"geO","bK",0)
o(j,"geP","bL",0)
l(j,"gjy","jz",14)
m(j,"gjC","jD",148)
o(j,"gjA","jB",0)
o(j=A.hB.prototype,"geO","bK",0)
o(j,"geP","bL",0)
l(j,"gjy","jz",14)
m(j,"gjC","jD",13)
o(j,"gjA","jB",0)
s(A,"Ck","K9",34)
q(A,"Cl","Ka",36)
s(A,"Ly","HP",47)
q(A,"LI","Kd",37)
k(j=A.ny.prototype,"gvk","u",14)
o(j,"gea","p",0)
q(A,"Fq","M_",36)
s(A,"Fp","LZ",34)
q(A,"LJ","IP",7)
p(A,"Md",2,null,["$1$2","$2"],["FH",function(a,b){return A.FH(a,b,t.cZ)}],231,0)
m(j=A.ld.prototype,"gwA","X",34)
l(j,"gxk","ad",36)
l(j,"gxq","xs",15)
q(A,"Lw","GZ",7)
q(A,"Fn","Hf",232)
q(A,"LD","Hk",233)
q(A,"LF","HD",234)
q(A,"LC","GU",235)
q(A,"LE","Hr",236)
q(A,"An","Hj",7)
r(A,"M9","Kb",10)
o(A.nB.prototype,"gwQ","kw",0)
r(A,"NI","Kc",10)
l(A.ma.prototype,"gy6","y7",8)
o(A.ml.prototype,"gkq","f7",0)
o(A.m3.prototype,"gkq","f7",0)
l(j=A.fj.prototype,"gtt","tu",39)
o(j,"gmp","e3",4)
q(A,"LR","D6",237)
o(j=A.m7.prototype,"gtB","tC",0)
l(j,"gtE","tF",113)
q(A,"Mn","I8",62)
q(A,"LA","Bd",239)
l(j=A.mO.prototype,"gx9","xa",39)
l(j,"gx7","x8",123)
o(j,"gts","jR",0)
q(A,"Mu","IG",62)
q(A,"LG","d_",16)
q(A,"Fo","oK",16)
r(A,"M8","L5",240)
q(A,"My","IT",241)
m(j=A.nh.prototype,"gqE","jw",1)
m(j,"gqz","d3",1)
m(j,"gqS","hf",1)
m(j=A.nf.prototype,"gqM","hd",1)
m(j,"gqK","hc",1)
m(j,"gqO","he",1)
m(j,"gqG","ha",1)
m(j,"gqI","hb",1)
m(j,"gqQ","jx",1)
m(j,"gt7","hF",1)
m(A.ng.prototype,"grk","hn",1)
m(j=A.nj.prototype,"gr8","jF",1)
m(j,"gra","jG",1)
m(j,"grd","hl",1)
m(j,"gr6","jE",1)
m(j,"gqZ","hi",1)
m(j,"gr0","dR",1)
m(j,"gr2","hj",1)
m(j,"gqX","hh",1)
m(j,"gqV","hg",1)
m(j,"gr4","hk",1)
m(j=A.nk.prototype,"grg","jH",1)
m(j,"gqx","jv",1)
m(j,"gqv","h8",1)
m(j,"gt5","hE",1)
m(j,"gt3","hD",1)
m(j,"gro","ho",1)
m(j,"gqB","h9",1)
m(j,"gru","hp",1)
m(j=A.nl.prototype,"grG","dT",1)
m(j,"grK","hu",1)
m(j,"grw","hq",1)
m(j,"grA","hr",1)
m(j,"grC","hs",1)
m(j,"grE","ht",1)
m(j,"grM","hv",1)
m(j,"grI","jJ",1)
m(j=A.nm.prototype,"grO","hw",1)
m(j,"grS","hy",1)
m(j,"grU","hz",1)
m(j,"gt1","hC",1)
m(j,"gt_","eL",1)
m(j,"grW","hA",1)
m(j,"grQ","hx",1)
m(j,"grY","hB",1)
l(j=A.l8.prototype,"gxE","xF",8)
m(j,"gxC","xD",170)
n(j,"gzp",0,5,null,["$5"],["zq"],171,0,0)
n(j,"gze",0,3,null,["$3"],["zf"],172,0,0)
n(j,"gz6",0,4,null,["$4"],["z7"],64,0,0)
n(j,"gzl",0,4,null,["$4"],["zm"],64,0,0)
n(j,"gzr",0,3,null,["$3"],["zs"],174,0,0)
m(j,"gzw","zx",58)
m(j,"gzc","zd",58)
l(j,"gza","zb",35)
n(j,"gzt",0,4,null,["$4"],["zu"],60,0,0)
n(j,"gzE",0,4,null,["$4"],["zF"],60,0,0)
m(j,"gzA","zB",178)
m(j,"gzy","zz",21)
m(j,"gzj","zk",21)
m(j,"gzn","zo",21)
m(j,"gzC","zD",21)
m(j,"gz8","z9",21)
l(j,"gj3","zg",35)
n(j,"gzh",0,3,null,["$3"],["zi"],180,0,0)
l(j,"gj5","zv",35)
l(j,"gw9","wa",20)
l(j,"gw4","w5",181)
n(j,"gw7",0,5,null,["$5"],["w8"],182,0,0)
n(j,"gwf",0,4,null,["$4"],["wg"],43,0,0)
n(j,"gwj",0,4,null,["$4"],["wk"],43,0,0)
n(j,"gwh",0,4,null,["$4"],["wi"],43,0,0)
m(j,"gwl","wm",63)
m(j,"gwd","we",63)
n(j,"gwb",0,5,null,["$5"],["wc"],185,0,0)
m(j,"gw2","w3",186)
m(j,"gw0","w1",187)
n(j,"gvZ",0,3,null,["$3"],["w_"],188,0,0)
o(j=A.dD.prototype,"gea","p",4)
o(j,"gwO","cH",4)
o(A.h_.prototype,"gea","p",0)
o(A.l9.prototype,"grm","rn",0)
l(A.el.prototype,"gvz","mX",205)
l(A.hl.prototype,"gxb","xc",2)
q(A,"Fm","Fx",161)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.Bt,J.lz,A.j9,J.ff,A.y9,A.xK,A.o,A.kU,A.ei,A.U,A.af,A.J,A.vK,A.an,A.lO,A.cW,A.lj,A.mP,A.mB,A.lh,A.ne,A.iq,A.n0,A.jm,A.eY,A.iJ,A.fn,A.hv,A.cr,A.wu,A.m2,A.il,A.jZ,A.tx,A.bF,A.aT,A.lL,A.et,A.hy,A.nr,A.h5,A.zp,A.nz,A.om,A.cq,A.nM,A.oj,A.k2,A.jw,A.nt,A.jO,A.og,A.am,A.ab,A.b2,A.jC,A.mQ,A.jM,A.eQ,A.cd,A.t,A.ns,A.e2,A.oh,A.jy,A.np,A.nI,A.yj,A.e1,A.hr,A.cf,A.jI,A.zP,A.zR,A.zQ,A.zN,A.zO,A.zM,A.zJ,A.ow,A.zI,A.zH,A.zL,A.zK,A.ov,A.ox,A.ou,A.hK,A.jv,A.nN,A.z0,A.e0,A.nU,A.b4,A.nW,A.ol,A.nV,A.mM,A.kX,A.aD,A.nv,A.pd,A.nu,A.kV,A.ob,A.eR,A.yY,A.zq,A.on,A.dn,A.aJ,A.nL,A.aM,A.aE,A.yk,A.m5,A.jg,A.nK,A.bh,A.ly,A.Q,A.W,A.of,A.jh,A.mt,A.a1,A.k9,A.wE,A.ce,A.lk,A.m1,A.yR,A.yS,A.li,A.a3,A.le,A.iy,A.ev,A.hG,A.hx,A.iI,A.ld,A.m0,A.n1,A.cl,A.c4,A.ro,A.pq,A.iH,A.jb,A.tM,A.ja,A.vJ,A.qd,A.qt,A.y8,A.eh,A.kJ,A.kK,A.p9,A.lU,A.fA,A.dy,A.u8,A.vr,A.eD,A.cL,A.mj,A.vH,A.mp,A.aQ,A.mw,A.jt,A.mI,A.aU,A.a0,A.pn,A.po,A.pp,A.r0,A.ii,A.pM,A.ih,A.dI,A.ts,A.mJ,A.uN,A.nT,A.nB,A.hm,A.vz,A.wl,A.f0,A.oi,A.hA,A.rY,A.ma,A.da,A.b0,A.cn,A.ya,A.mi,A.cN,A.vG,A.vq,A.aY,A.dC,A.fw,A.eq,A.ca,A.pX,A.c2,A.mv,A.u9,A.cp,A.nA,A.hj,A.bH,A.zc,A.fj,A.xl,A.pb,A.fg,A.kP,A.mK,A.io,A.r3,A.bg,A.tD,A.nY,A.mR,A.p8,A.m7,A.uw,A.j2,A.hC,A.uE,A.zj,A.er,A.dA,A.lt,A.cG,A.dB,A.dR,A.uu,A.oY,A.bC,A.pZ,A.mO,A.d7,A.ez,A.tT,A.dK,A.lP,A.z7,A.z5,A.ug,A.pa,A.iG,A.j7,A.ul,A.mh,A.v0,A.b5,A.v9,A.bk,A.h7,A.h6,A.w6,A.bv,A.h4,A.cM,A.fO,A.j6,A.cC,A.w8,A.j5,A.jl,A.wj,A.cP,A.co,A.eB,A.ww,A.qu,A.eM,A.ho,A.cV,A.wA,A.hh,A.nd,A.wW,A.ig,A.j4,A.mo,A.a2,A.hi,A.nh,A.no,A.nf,A.ng,A.nj,A.nk,A.zG,A.nl,A.zt,A.nm,A.q5,A.w5,A.m8,A.m9,A.vO,A.mE,A.h1,A.rp,A.bo,A.cy,A.cs,A.mH,A.ct,A.c9,A.kz,A.qw,A.e3,A.vQ,A.ej,A.b6,A.kN,A.qb,A.o6,A.z6,A.bP,A.l5,A.di,A.je,A.wR,A.wM,A.wT,A.wS,A.dV,A.dj,A.l8,A.dc,A.eS,A.wN,A.p4,A.jN,A.yn,A.nX,A.nP,A.z2,A.wH,A.ic,A.vB,A.ia,A.l4,A.lm,A.rn,A.d3,A.l9,A.iT,A.ek,A.uR,A.fU,A.k0,A.hn,A.la,A.xc,A.kc,A.nH,A.yi,A.w4,A.Bg,A.jJ])
q(J.lz,[J.lB,J.iA,J.aG,J.br,J.fz,J.es,J.dE])
q(J.aG,[J.dG,J.B,A.fG,A.iV])
q(J.dG,[J.mb,J.dU,J.bQ])
r(J.lA,A.j9)
r(J.rV,J.B)
q(J.es,[J.iz,J.lC])
q(A.o,[A.dX,A.K,A.cm,A.al,A.im,A.eJ,A.dd,A.bI,A.eV,A.nq,A.oe,A.hE,A.eu,A.j8])
q(A.dX,[A.ef,A.kd])
r(A.jG,A.ef)
r(A.jD,A.kd)
q(A.ei,[A.ps,A.pl,A.pr,A.rP,A.wk,A.AH,A.AJ,A.xs,A.xr,A.zU,A.zT,A.rl,A.rg,A.yr,A.yq,A.yC,A.yF,A.w0,A.w1,A.vZ,A.yh,A.yg,A.zb,A.yI,A.yd,A.z_,A.tN,A.yW,A.qa,A.xF,A.rh,A.AL,A.AS,A.AT,A.Am,A.pg,A.pi,A.pk,A.kM,A.pc,A.zW,A.pe,A.tR,A.Ay,A.q8,A.q9,A.vt,A.vo,A.uP,A.B2,A.vS,A.vT,A.Ax,A.qY,A.qX,A.qZ,A.qW,A.qV,A.qU,A.qT,A.qP,A.qQ,A.qR,A.AX,A.tt,A.tw,A.tv,A.tu,A.y1,A.xZ,A.ws,A.wo,A.wq,A.wm,A.tb,A.tc,A.te,A.tl,A.tf,A.tg,A.th,A.ti,A.tj,A.t1,A.t3,A.t7,A.t_,A.rZ,A.t5,A.t4,A.t8,A.t9,A.ta,A.u3,A.u0,A.u2,A.vh,A.vj,A.vk,A.vl,A.vC,A.vF,A.pI,A.pL,A.pH,A.pK,A.pF,A.pE,A.pD,A.pJ,A.pG,A.py,A.px,A.pC,A.pB,A.pz,A.pv,A.vv,A.vu,A.xm,A.AR,A.r6,A.r4,A.r7,A.r8,A.tE,A.tG,A.tI,A.tK,A.tF,A.wV,A.uD,A.uz,A.uA,A.uB,A.uC,A.ux,A.uy,A.uL,A.uH,A.uI,A.uF,A.uG,A.uK,A.oZ,A.p_,A.q0,A.q_,A.wh,A.w9,A.wf,A.wa,A.wb,A.wc,A.Aj,A.Ak,A.u_,A.tU,A.tV,A.tW,A.tX,A.tY,A.ui,A.uj,A.ur,A.up,A.uo,A.un,A.uq,A.v7,A.v1,A.v3,A.v5,A.va,A.vf,A.w7,A.AA,A.AW,A.AU,A.AV,A.tB,A.tC,A.wB,A.wC,A.AO,A.AF,A.AE,A.Ar,A.x9,A.x1,A.x3,A.xa,A.xh,A.xi,A.xj,A.xk,A.q6,A.q7,A.Ab,A.rr,A.rq,A.rs,A.ru,A.rw,A.rt,A.rK,A.vU,A.qE,A.zm,A.AP,A.AY,A.AZ,A.p3,A.yb,A.yc,A.pP,A.pQ,A.pU,A.pV,A.pW,A.r9,A.p7,A.p5,A.yL,A.yO,A.yP,A.rO,A.rM,A.yK,A.vN,A.wI,A.wJ,A.wK,A.wL,A.uZ,A.v_,A.uY,A.uX,A.uW,A.wX,A.qI,A.ua,A.r_,A.Ai,A.pN,A.pO,A.pR,A.pS,A.pT,A.A2,A.xP,A.xU,A.xX,A.xN,A.zh,A.zi,A.zg,A.ze,A.yl,A.ym])
q(A.ps,[A.xL,A.pm,A.q4,A.rW,A.AI,A.zV,A.Ac,A.rm,A.rf,A.ys,A.yD,A.yG,A.xo,A.yH,A.ty,A.tP,A.yZ,A.xE,A.zA,A.wF,A.zz,A.zy,A.rj,A.ri,A.pf,A.ph,A.pj,A.kL,A.u7,A.tS,A.A1,A.vs,A.vn,A.uQ,A.vp,A.vI,A.B3,A.Ag,A.qS,A.u4,A.vm,A.vD,A.vE,A.pA,A.ut,A.uv,A.p0,A.Av,A.Ap,A.wD,A.wZ,A.As,A.x7,A.x8,A.x5,A.x6,A.x2,A.rv,A.qH,A.yQ,A.wY,A.y5,A.xf])
r(A.bO,A.jD)
q(A.U,[A.eg,A.bE,A.dk,A.nR])
q(A.af,[A.dF,A.mm,A.dg,A.lD,A.n_,A.mu,A.nJ,A.j1,A.iD,A.kE,A.bB,A.cU,A.mZ,A.bi,A.l_])
q(A.J,[A.hc,A.my,A.n8,A.hg,A.el,A.hb])
r(A.ck,A.hc)
q(A.pr,[A.AN,A.uT,A.xt,A.xu,A.zs,A.zr,A.zS,A.xw,A.xx,A.xz,A.xA,A.xy,A.xv,A.rk,A.yt,A.yy,A.yx,A.yv,A.yu,A.yB,A.yA,A.yz,A.yE,A.w_,A.w2,A.vY,A.zl,A.zk,A.xn,A.xJ,A.xI,A.z3,A.z1,A.zX,A.zY,A.yf,A.ye,A.za,A.z9,A.A7,A.zD,A.zC,A.qO,A.A4,A.A5,A.tQ,A.y2,A.y_,A.y0,A.wr,A.wp,A.wn,A.td,A.tk,A.tm,A.tn,A.to,A.tp,A.tq,A.tr,A.t0,A.t2,A.t6,A.vi,A.r1,A.rL,A.rd,A.rc,A.vW,A.pu,A.pw,A.wt,A.vw,A.uf,A.r5,A.r2,A.tH,A.tJ,A.us,A.uJ,A.pY,A.q3,A.q2,A.q1,A.we,A.wd,A.wg,A.v8,A.v2,A.v4,A.v6,A.vb,A.vg,A.ve,A.vd,A.vc,A.wi,A.um,A.uh,A.tL,A.x0,A.xb,A.xg,A.rJ,A.rx,A.rE,A.rF,A.rG,A.rH,A.rC,A.rD,A.ry,A.rz,A.rA,A.rB,A.rI,A.yJ,A.qF,A.qG,A.qC,A.qB,A.qD,A.qy,A.qx,A.qz,A.qA,A.zn,A.zo,A.B_,A.qh,A.qe,A.qj,A.ql,A.qn,A.qg,A.qm,A.qr,A.qp,A.qo,A.qi,A.qk,A.qq,A.qf,A.p1,A.p2,A.wO,A.p6,A.yM,A.yN,A.yo,A.rN,A.qJ,A.qK,A.uc,A.ub,A.y3,A.y7,A.y4,A.y6,A.xO,A.xT,A.xW,A.xQ,A.xV,A.xY,A.xR,A.xS,A.qN,A.qM,A.qL,A.xd,A.xe,A.zf])
q(A.K,[A.V,A.eo,A.T,A.as,A.aN,A.eU,A.jQ])
q(A.V,[A.cu,A.X,A.bV,A.iF,A.nS])
r(A.en,A.cm)
r(A.ij,A.eJ)
r(A.fr,A.dd)
q(A.eY,[A.nZ,A.o_,A.o0])
q(A.nZ,[A.a5,A.jW,A.jX,A.hz,A.o1])
r(A.eZ,A.o_)
q(A.o0,[A.f_,A.o2])
r(A.k8,A.iJ)
r(A.cT,A.k8)
r(A.id,A.cT)
q(A.fn,[A.aX,A.is])
q(A.cr,[A.ie,A.jY])
r(A.d1,A.ie)
r(A.iw,A.rP)
r(A.j_,A.dg)
q(A.wk,[A.vV,A.i7])
q(A.bE,[A.iC,A.iB,A.jP])
r(A.fF,A.fG)
q(A.iV,[A.iU,A.fH])
q(A.fH,[A.jS,A.jU])
r(A.jT,A.jS)
r(A.dN,A.jT)
r(A.jV,A.jU)
r(A.bS,A.jV)
q(A.dN,[A.lW,A.lX])
q(A.bS,[A.lY,A.lZ,A.m_,A.iW,A.iX,A.iY,A.ey])
r(A.k3,A.nJ)
q(A.ab,[A.hD,A.jj,A.jH,A.dm,A.jK,A.jB,A.i5,A.hs])
r(A.b7,A.hD)
r(A.b1,A.b7)
q(A.b2,[A.dY,A.hu,A.hB])
r(A.eP,A.dY)
r(A.jx,A.jC)
q(A.eQ,[A.az,A.ao])
q(A.e2,[A.cX,A.hF])
r(A.k_,A.np)
q(A.nI,[A.cc,A.hq])
r(A.jR,A.cX)
r(A.eW,A.jK)
q(A.ou,[A.nC,A.o5])
q(A.dk,[A.dZ,A.jE])
r(A.dl,A.jY)
q(A.mM,[A.k1,A.zu,A.xB,A.od])
r(A.yU,A.k1)
q(A.kX,[A.ep,A.kH,A.rX])
q(A.ep,[A.kC,A.lJ,A.n5])
q(A.aD,[A.ok,A.i6,A.kI,A.lG,A.lF,A.n6,A.jo,A.lq])
q(A.ok,[A.kD,A.lK])
r(A.xG,A.nv)
q(A.pd,[A.xC,A.hk,A.ny,A.zB])
r(A.xp,A.xC)
r(A.lE,A.iD)
r(A.yV,A.kV)
r(A.yX,A.yY)
r(A.oy,A.on)
r(A.zE,A.oy)
q(A.bB,[A.db,A.iu])
r(A.nF,A.k9)
r(A.fZ,A.hG)
r(A.o8,A.lq)
r(A.zd,A.ro)
r(A.o9,A.zd)
r(A.kx,A.pq)
r(A.jc,A.vJ)
r(A.nD,A.kx)
r(A.l6,A.nD)
r(A.nE,A.tM)
r(A.qs,A.nE)
r(A.mq,A.eh)
r(A.kR,A.kJ)
r(A.dw,A.jj)
q(A.kK,[A.u6,A.vA])
r(A.jk,A.p9)
r(A.mL,A.jk)
r(A.i8,A.a3)
q(A.dy,[A.kY,A.jq])
q(A.u8,[A.iO,A.iR,A.iP,A.iS,A.iL,A.iM,A.iK,A.iQ,A.iN])
q(A.yk,[A.aZ,A.cB,A.dT,A.mc,A.i9,A.dx,A.d5,A.l0,A.lg,A.c5,A.iv,A.u5,A.dM,A.ec,A.cb,A.kG,A.cQ,A.i1,A.fJ,A.j0,A.jf,A.uk,A.fu,A.lQ,A.dz,A.cw,A.ip,A.dP])
q(A.cL,[A.iE,A.iZ,A.i2,A.i3])
q(A.mp,[A.m4,A.kS,A.lr,A.kW,A.lp,A.ms,A.lV,A.mk,A.l3,A.l2,A.lf,A.lu,A.ky,A.ll,A.mx,A.mS,A.mT,A.mV,A.mX,A.mW,A.mU,A.nb,A.nc,A.na,A.kA,A.n9,A.n7,A.mg,A.kZ])
q(A.aQ,[A.fI,A.kT,A.ls,A.fV,A.fW,A.fE,A.fQ,A.fo,A.fp,A.fy,A.fe,A.ft,A.fY,A.h9,A.jr,A.fN,A.fl])
r(A.oX,A.r0)
q(A.dI,[A.eL,A.eK,A.eA,A.fi,A.fL,A.fv,A.cO,A.fT,A.fX,A.eF,A.h2,A.fD,A.fm,A.em,A.fS])
q(A.eF,[A.hd,A.fx])
r(A.lH,A.nT)
q(A.da,[A.aa,A.c6,A.dv,A.d0])
r(A.fk,A.nA)
q(A.fj,[A.ml,A.m3])
r(A.wU,A.pb)
r(A.uM,A.m7)
r(A.xq,A.z5)
q(A.bv,[A.ha,A.eG,A.jd,A.c1,A.cF,A.cK,A.fK,A.fM,A.fq,A.ed])
r(A.tA,A.qu)
r(A.lN,A.eM)
q(A.hi,[A.ju,A.eN])
r(A.oo,A.nh)
r(A.op,A.oo)
r(A.oq,A.op)
r(A.or,A.oq)
r(A.os,A.or)
r(A.ot,A.os)
r(A.x4,A.ot)
r(A.rT,A.w5)
q(A.rT,[A.uO,A.wG,A.x_])
r(A.lo,A.mE)
q(A.h1,[A.ht,A.mG])
r(A.h0,A.mH)
r(A.de,A.mG)
r(A.h3,A.ej)
r(A.kO,A.b6)
q(A.kO,[A.lv,A.dD,A.h_])
q(A.kN,[A.nO,A.oc])
r(A.o3,A.qb)
r(A.o4,A.o3)
r(A.mr,A.o4)
r(A.o7,A.o6)
r(A.c8,A.o7)
q(A.b4,[A.eO,A.b8])
r(A.hf,A.vQ)
q(A.b8,[A.jL,A.jF,A.hp,A.hJ])
r(A.uV,A.vB)
r(A.qc,A.l4)
r(A.du,A.fU)
r(A.hl,A.uV)
q(A.kc,[A.nG,A.oa])
r(A.mN,A.h0)
r(A.nQ,A.hb)
r(A.cx,A.nQ)
s(A.hc,A.n0)
s(A.kd,A.J)
s(A.jS,A.J)
s(A.jT,A.iq)
s(A.jU,A.J)
s(A.jV,A.iq)
s(A.cX,A.jy)
s(A.hF,A.oh)
s(A.k8,A.ol)
s(A.oy,A.mM)
s(A.nD,A.qd)
s(A.nE,A.qt)
s(A.nT,A.po)
s(A.nA,A.pp)
s(A.oo,A.ng)
s(A.op,A.nk)
s(A.oq,A.nm)
s(A.or,A.nl)
s(A.os,A.nj)
s(A.ot,A.nf)
s(A.o3,A.J)
s(A.o4,A.m0)
s(A.o6,A.n1)
s(A.o7,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ac:"double",aW:"num",k:"String",R:"bool",W:"Null",p:"List",j:"Object",F:"Map",M:"JSObject"},mangledNames:{},types:["~()","y<j?>(ni,hh)","~(M)","W()","y<~>()","y<~>(bH)","y<W>(bH)","k(k)","~(i)","R(k)","i()","W(j,aH)","Q<k,@>(@,@)","~(j,aH)","~(j?)","R(j?)","j?(j?)","R(@)","y<W>()","y<b5>()","~(~())","i(bl,i)","W(M)","y<~>(jN)","W(@)","~(@)","~(@,@)","~(p<i>)","j?(F<k,j?>)","W(j)","fI(~)","Q<k,j?>(@,@)","~(k,k)","M()","R(j?,j?)","i(bl)","i(j?)","@(@)","0&()","~(a0)","y<~>(~)","~(j?,j?)","R(bo)","~(dc,i,i,i)","y<cG>(k)","@(k)","i(cG)","i(@,@)","k(ex)","~(j[aH?])","R()","k(F<k,j?>)","R(aY)","@()","y<p<F<k,j?>>>(k,p<j?>)","y<p<k>>()","~(k,@)","y<eM>()","i(b6,i)","~(df)","i(bl,i,i,br)","R(dC)","ac(i)","~(dc,i)","i(b6,i,i,i)","y<W>(qv)","R(bg)","y<@>()","y<bj<~>>()","~(~)","R(ca)","y<i>()","fY(p<cN>)","y<aW?>()","y<k>()","fN(i)","fl(i)","fE(p<k>)","y<cp>()","fQ(cp)","y<p<cN>>()","W(k,k[j?])","~(dL<p<i>>)","h9(~)","R(hA)","~(F<k,j?>?)","~(p<F<k,j?>>)","~(i,@)","i(ca,ca)","~(k,j?)","k(cn)","k()","R(cn)","aY()","dC()","fw()","eq()","ca()","eR<@,@>(bD<@>)","k(@)","y<F<k,j?>?>(k)","R(i)","k(i,i)","fA()","p<F<k,j?>>(cp)","i(i,i)","R(cB)","~(p<cl>)","y<ab<p<i>>>()","k?(F<k,j?>)","bg()","y<bg>(bH)","R(dT)","~(j2)","Q<k,dA>(k,h4)","cM(@)","i(i)","p<eD>(j?)","y<dR>(k)","i(dR)","aE(i)","y<W>(~)","bC()","~(cC)","R(aZ)","y<bk>(bk)","bk(bk)","bk(j)","p<cL>(j?)","dK/(j?)","y<j?>(j?)","F<k,j?>(p<j?>)","y<i>(bH)","R(+(k,j))","i(+(k,j),+(k,j))","k(i[i])","cP()","co()","eB()","t<@>?()","y<R>(k)","y<~>(k)","ho()","i(i,cV)","R(cV)","i(cV)","c2<j?>(@)","R(c2<j?>)","~(@,aH)","i(+(k,j?),+(k,j?))","F<k,j?>(c8)","~(dy)","~(p<bC>)","ab<p<i>>()","~(h7)","W(~)","k(k?)","k?()","i(cy)","0&(k,i?)","j(cy)","F<k,j?>(bC)","i(bo,bo)","p<cy>(Q<j,p<bo>>)","de()","k(j?)","~(i,k,i)","~(BF,p<BG>)","j?(vR)","~(P,aw,P,~())","~(br,i)","bl?(b6,i,i,i,i)","i(b6,i,i)","~(k,k?)","i(b6?,i,i)","k(k,k)","W(bQ,bQ)","j?(~)","i(bl,br)","W(~())","i(bl,i,i)","i(i())","~(~(i,k,i),i,i,i,br)","y<@>(bH)","@(@,k)","i(dc,i,i,i,i)","i(i(i),i)","i(BK,i)","i(BK,i,i)","~(aU)","W(@,aH)","M(B<j?>)","y<F<k,j?>?>()","fV(F<k,j?>?)","M(M?)","~(ee)","y<~>(i,cS)","y<~>(i)","cS()","y<M>(k)","W(d3)","y<W>(M)","M(j)","W(j?,aH)","k?(j?)","~(ej)","M(M)","y<M>()","y<p<F<k,j?>?>>()","fW(p<F<k,j?>?>)","y<bj<ct>>()","~(ct)","R(hn)","R(k,k)","y<ek>()","0&(j?,aH)","~(dL<M>)","y<p<j?>>()","~(P?,aw?,P,j,aH)","0^(P?,aw?,P,0^())<j?>","0^(P?,aw?,P,0^(1^),1^)<j?,j?>","0^(P?,aw?,P,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(P,aw,P,0^())<j?>","0^(1^)(P,aw,P,0^(1^))<j?,j?>","0^(1^,2^)(P,aw,P,0^(1^,2^))<j?,j?,j?>","am?(P,aw,P,j,aH?)","~(P?,aw?,P,~())","df(P,aw,P,aE,~())","df(P,aw,P,aE,~(df))","~(P,aw,P,k)","P(P?,aw?,P,jv?,F<j?,j?>?)","0^(0^,0^)<aW>","fo(i)","fp(p<j?>)","fy(p<k>)","fe(aW?)","ft(k)","bg(F<k,j?>)","i(k)","bC(F<k,j?>)","aM()","F<k,j?>(bg)","j(bo)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.jW&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.jX&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hz&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.o1&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eZ&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.f_&&A.FL(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.o2&&A.FL(a,b.a)}}
A.JF(v.typeUniverse,JSON.parse('{"bQ":"dG","mb":"dG","dU":"dG","MR":"fG","B":{"p":["1"],"aG":[],"K":["1"],"M":[],"o":["1"],"b9":["1"]},"lB":{"R":[],"ak":[]},"iA":{"W":[],"ak":[]},"aG":{"M":[]},"dG":{"aG":[],"M":[]},"lA":{"j9":[]},"rV":{"B":["1"],"p":["1"],"aG":[],"K":["1"],"M":[],"o":["1"],"b9":["1"]},"es":{"ac":[],"aW":[],"ax":["aW"]},"iz":{"ac":[],"i":[],"aW":[],"ax":["aW"],"ak":[]},"lC":{"ac":[],"aW":[],"ax":["aW"],"ak":[]},"dE":{"k":[],"ax":["k"],"b9":["@"],"ak":[]},"dX":{"o":["2"]},"ef":{"dX":["1","2"],"o":["2"],"o.E":"2"},"jG":{"ef":["1","2"],"dX":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"jD":{"J":["2"],"p":["2"],"dX":["1","2"],"K":["2"],"o":["2"]},"bO":{"jD":["1","2"],"J":["2"],"p":["2"],"dX":["1","2"],"K":["2"],"o":["2"],"J.E":"2","o.E":"2"},"eg":{"U":["3","4"],"F":["3","4"],"U.V":"4","U.K":"3"},"dF":{"af":[]},"mm":{"af":[]},"ck":{"J":["i"],"p":["i"],"K":["i"],"o":["i"],"J.E":"i"},"K":{"o":["1"]},"V":{"K":["1"],"o":["1"]},"cu":{"V":["1"],"K":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cm":{"o":["2"],"o.E":"2"},"en":{"cm":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"X":{"V":["2"],"K":["2"],"o":["2"],"V.E":"2","o.E":"2"},"al":{"o":["1"],"o.E":"1"},"im":{"o":["2"],"o.E":"2"},"eJ":{"o":["1"],"o.E":"1"},"ij":{"eJ":["1"],"K":["1"],"o":["1"],"o.E":"1"},"dd":{"o":["1"],"o.E":"1"},"fr":{"dd":["1"],"K":["1"],"o":["1"],"o.E":"1"},"eo":{"K":["1"],"o":["1"],"o.E":"1"},"bI":{"o":["1"],"o.E":"1"},"hc":{"J":["1"],"p":["1"],"K":["1"],"o":["1"]},"bV":{"V":["1"],"K":["1"],"o":["1"],"V.E":"1","o.E":"1"},"id":{"cT":["1","2"],"F":["1","2"]},"fn":{"F":["1","2"]},"aX":{"fn":["1","2"],"F":["1","2"]},"eV":{"o":["1"],"o.E":"1"},"is":{"fn":["1","2"],"F":["1","2"]},"ie":{"cr":["1"],"eH":["1"],"K":["1"],"o":["1"]},"d1":{"cr":["1"],"eH":["1"],"K":["1"],"o":["1"]},"j_":{"dg":[],"af":[]},"lD":{"af":[]},"n_":{"af":[]},"m2":{"H":[]},"jZ":{"aH":[]},"mu":{"af":[]},"bE":{"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"T":{"K":["1"],"o":["1"],"o.E":"1"},"as":{"K":["1"],"o":["1"],"o.E":"1"},"aN":{"K":["Q<1,2>"],"o":["Q<1,2>"],"o.E":"Q<1,2>"},"iC":{"bE":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"iB":{"bE":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"hy":{"mn":[],"ex":[]},"nq":{"o":["mn"],"o.E":"mn"},"h5":{"ex":[]},"oe":{"o":["ex"],"o.E":"ex"},"fF":{"aG":[],"M":[],"ee":[],"ak":[]},"fG":{"aG":[],"M":[],"ee":[],"ak":[]},"iV":{"aG":[],"M":[]},"om":{"ee":[]},"iU":{"aG":[],"Bb":[],"M":[],"ak":[]},"fH":{"bR":["1"],"aG":[],"M":[],"b9":["1"]},"dN":{"J":["ac"],"p":["ac"],"bR":["ac"],"aG":[],"K":["ac"],"M":[],"b9":["ac"],"o":["ac"]},"bS":{"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"]},"lW":{"dN":[],"ra":[],"J":["ac"],"p":["ac"],"bR":["ac"],"aG":[],"K":["ac"],"M":[],"b9":["ac"],"o":["ac"],"ak":[],"J.E":"ac"},"lX":{"dN":[],"rb":[],"J":["ac"],"p":["ac"],"bR":["ac"],"aG":[],"K":["ac"],"M":[],"b9":["ac"],"o":["ac"],"ak":[],"J.E":"ac"},"lY":{"bS":[],"rQ":[],"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"J.E":"i"},"lZ":{"bS":[],"rR":[],"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"J.E":"i"},"m_":{"bS":[],"rS":[],"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"J.E":"i"},"iW":{"bS":[],"wx":[],"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"J.E":"i"},"iX":{"bS":[],"wy":[],"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"J.E":"i"},"iY":{"bS":[],"wz":[],"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"J.E":"i"},"ey":{"bS":[],"cS":[],"J":["i"],"p":["i"],"bR":["i"],"aG":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"J.E":"i"},"nJ":{"af":[]},"k3":{"dg":[],"af":[]},"am":{"af":[]},"t":{"y":["1"]},"dL":{"bD":["1"]},"k2":{"df":[]},"jw":{"ib":["1"]},"hE":{"o":["1"],"o.E":"1"},"b1":{"b7":["1"],"hD":["1"],"ab":["1"],"ab.T":"1"},"eP":{"dY":["1"],"b2":["1"],"bj":["1"],"b2.T":"1"},"jC":{"bD":["1"]},"jx":{"jC":["1"],"bD":["1"]},"mQ":{"H":[]},"j1":{"af":[]},"eQ":{"ib":["1"]},"az":{"eQ":["1"],"ib":["1"]},"ao":{"eQ":["1"],"ib":["1"]},"jj":{"ab":["1"]},"e2":{"bD":["1"]},"cX":{"jy":["1"],"e2":["1"],"bD":["1"]},"hF":{"e2":["1"],"bD":["1"]},"b7":{"hD":["1"],"ab":["1"],"ab.T":"1"},"dY":{"b2":["1"],"bj":["1"],"b2.T":"1"},"k_":{"np":["1"]},"b2":{"bj":["1"],"b2.T":"1"},"hD":{"ab":["1"]},"hr":{"bj":["1"]},"jH":{"ab":["1"],"ab.T":"1"},"dm":{"ab":["1"],"ab.T":"1"},"jR":{"cX":["1"],"jy":["1"],"e2":["1"],"dL":["1"],"bD":["1"]},"jK":{"ab":["2"]},"hu":{"b2":["2"],"bj":["2"],"b2.T":"2"},"eW":{"jK":["1","2"],"ab":["2"],"ab.T":"2"},"jI":{"bD":["1"]},"hB":{"b2":["2"],"bj":["2"],"b2.T":"2"},"jB":{"ab":["2"],"ab.T":"2"},"ou":{"P":[]},"nC":{"P":[]},"o5":{"P":[]},"hK":{"aw":[]},"dk":{"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"dZ":{"dk":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"jE":{"dk":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"eU":{"K":["1"],"o":["1"],"o.E":"1"},"jP":{"bE":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"dl":{"cr":["1"],"eH":["1"],"K":["1"],"o":["1"]},"eu":{"o":["1"],"o.E":"1"},"J":{"p":["1"],"K":["1"],"o":["1"]},"U":{"F":["1","2"]},"jQ":{"K":["2"],"o":["2"],"o.E":"2"},"iJ":{"F":["1","2"]},"cT":{"F":["1","2"]},"iF":{"V":["1"],"K":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cr":{"eH":["1"],"K":["1"],"o":["1"]},"jY":{"cr":["1"],"eH":["1"],"K":["1"],"o":["1"]},"eR":{"bD":["1"]},"nR":{"U":["k","@"],"F":["k","@"],"U.V":"@","U.K":"k"},"nS":{"V":["k"],"K":["k"],"o":["k"],"V.E":"k","o.E":"k"},"kC":{"ep":[]},"ok":{"aD":["k","p<i>"]},"kD":{"aD":["k","p<i>"],"aD.T":"p<i>"},"i6":{"aD":["p<i>","k"],"aD.T":"k"},"kI":{"aD":["k","p<i>"],"aD.T":"p<i>"},"iD":{"af":[]},"lE":{"af":[]},"lG":{"aD":["j?","k"],"aD.T":"k"},"lF":{"aD":["k","j?"],"aD.T":"j?"},"lJ":{"ep":[]},"lK":{"aD":["k","p<i>"],"aD.T":"p<i>"},"n5":{"ep":[]},"n6":{"aD":["k","p<i>"],"aD.T":"p<i>"},"jo":{"aD":["p<i>","k"],"aD.T":"k"},"CP":{"ax":["CP"]},"aM":{"ax":["aM"]},"ac":{"aW":[],"ax":["aW"]},"aE":{"ax":["aE"]},"i":{"aW":[],"ax":["aW"]},"p":{"K":["1"],"o":["1"]},"aW":{"ax":["aW"]},"mn":{"ex":[]},"eH":{"K":["1"],"o":["1"]},"k":{"ax":["k"]},"aJ":{"ax":["CP"]},"kE":{"af":[]},"dg":{"af":[]},"bB":{"af":[]},"db":{"af":[]},"iu":{"db":[],"af":[]},"cU":{"af":[]},"mZ":{"cU":[],"af":[]},"bi":{"af":[]},"l_":{"af":[]},"m5":{"af":[]},"jg":{"af":[]},"nK":{"H":[]},"bh":{"H":[]},"ly":{"cU":[],"H":[],"af":[]},"of":{"aH":[]},"j8":{"o":["i"],"o.E":"i"},"k9":{"n2":[]},"ce":{"n2":[]},"nF":{"n2":[]},"m1":{"H":[]},"rS":{"p":["i"],"K":["i"],"o":["i"]},"cS":{"p":["i"],"K":["i"],"o":["i"]},"wz":{"p":["i"],"K":["i"],"o":["i"]},"rQ":{"p":["i"],"K":["i"],"o":["i"]},"wx":{"p":["i"],"K":["i"],"o":["i"]},"rR":{"p":["i"],"K":["i"],"o":["i"]},"wy":{"p":["i"],"K":["i"],"o":["i"]},"ra":{"p":["ac"],"K":["ac"],"o":["ac"]},"rb":{"p":["ac"],"K":["ac"],"o":["ac"]},"a3":{"F":["2","3"]},"fZ":{"hG":["1","eH<1>"],"hG.E":"1"},"lq":{"aD":["p<i>","cl"]},"o8":{"aD":["p<i>","cl"],"aD.T":"cl"},"jb":{"H":[]},"my":{"J":["i"],"p":["i"],"K":["i"],"o":["i"],"J.E":"i"},"mq":{"H":[]},"kJ":{"Bc":[]},"kR":{"Bc":[]},"dw":{"ab":["p<i>"],"ab.T":"p<i>"},"eh":{"H":[]},"mL":{"jk":[]},"i8":{"a3":["k","k","1"],"F":["k","1"],"a3.V":"1","a3.K":"k","a3.C":"k"},"fI":{"aQ":[]},"kT":{"aQ":[]},"ls":{"aQ":[]},"fV":{"aQ":[]},"fW":{"aQ":[]},"fE":{"aQ":[]},"fQ":{"aQ":[]},"fo":{"aQ":[]},"fp":{"aQ":[]},"fy":{"aQ":[]},"fe":{"aQ":[]},"ft":{"aQ":[]},"fY":{"aQ":[]},"h9":{"aQ":[]},"jr":{"aQ":[]},"fN":{"aQ":[]},"fl":{"aQ":[]},"kY":{"dy":[]},"jq":{"dy":[]},"iE":{"cL":[]},"iZ":{"cL":[]},"i2":{"cL":[]},"i3":{"cL":[]},"jt":{"H":[]},"ii":{"qv":[]},"dI":{"H":[]},"eL":{"H":[]},"eK":{"H":[]},"eA":{"H":[]},"fi":{"H":[]},"fL":{"H":[]},"fv":{"H":[]},"cO":{"H":[]},"fT":{"H":[]},"fX":{"H":[]},"eF":{"H":[]},"hd":{"H":[]},"fx":{"H":[]},"h2":{"H":[]},"fD":{"H":[]},"fm":{"H":[]},"em":{"H":[]},"fS":{"H":[]},"f0":{"H":[]},"aa":{"da":[]},"c6":{"da":[]},"dv":{"da":[]},"d0":{"da":[]},"hj":{"H":[]},"fg":{"H":[]},"kP":{"H":[]},"nY":{"Du":[]},"dB":{"H":[]},"d7":{"H":[]},"bv":{"H":[]},"ha":{"H":[]},"eG":{"H":[]},"jd":{"H":[]},"c1":{"H":[]},"cF":{"H":[]},"cK":{"H":[]},"fK":{"H":[]},"fM":{"H":[]},"fq":{"H":[]},"ed":{"H":[]},"ho":{"ni":[]},"lN":{"eM":[]},"ig":{"H":[]},"j4":{"H":[]},"mo":{"H":[]},"ju":{"hi":[]},"eN":{"hi":[]},"m9":{"H":[]},"lo":{"cs":[],"ax":["cs"]},"ht":{"de":[],"ax":["mF"]},"cs":{"ax":["cs"]},"mE":{"cs":[],"ax":["cs"]},"mF":{"ax":["mF"]},"mG":{"ax":["mF"]},"mH":{"H":[]},"h0":{"bh":[],"H":[]},"h1":{"ax":["mF"]},"de":{"ax":["mF"]},"c9":{"H":[]},"vR":{"p":["j?"],"K":["j?"],"o":["j?"]},"n8":{"J":["j?"],"vR":[],"p":["j?"],"K":["j?"],"o":["j?"],"J.E":"j?"},"h3":{"ej":[]},"lv":{"b6":[]},"nO":{"jp":[],"bl":[]},"c8":{"U":["k","@"],"F":["k","@"],"U.V":"@","U.K":"k"},"mr":{"J":["c8"],"p":["c8"],"K":["c8"],"o":["c8"],"J.E":"c8"},"di":{"H":[]},"kO":{"b6":[]},"kN":{"jp":[],"bl":[]},"eO":{"b4":["eO"],"b4.E":"eO"},"dj":{"BG":[]},"dV":{"BF":[]},"hg":{"J":["dj"],"p":["dj"],"K":["dj"],"o":["dj"],"J.E":"dj"},"i5":{"ab":["1"],"ab.T":"1"},"dD":{"b6":[]},"b8":{"b4":["b8"]},"nP":{"jp":[],"bl":[]},"jL":{"b8":[],"b4":["b8"],"b4.E":"b8"},"jF":{"b8":[],"b4":["b8"],"b4.E":"b8"},"hp":{"b8":[],"b4":["b8"],"b4.E":"b8"},"hJ":{"b8":[],"b4":["b8"],"b4.E":"b8"},"h_":{"b6":[]},"oc":{"jp":[],"bl":[]},"ia":{"H":[]},"el":{"J":["j?"],"p":["j?"],"K":["j?"],"o":["j?"],"J.E":"j?"},"fU":{"H":[]},"du":{"H":[]},"hl":{"CX":[]},"nG":{"kc":["M"]},"oa":{"kc":["M"]},"mN":{"bh":[],"H":[]},"cx":{"hb":["i"],"J":["i"],"p":["i"],"K":["i"],"o":["i"],"J.E":"i"},"hb":{"J":["1"],"p":["1"],"K":["1"],"o":["1"]},"nQ":{"hb":["i"],"J":["i"],"p":["i"],"K":["i"],"o":["i"]},"hs":{"ab":["1"],"ab.T":"1"},"jJ":{"bj":["1"]}}'))
A.JE(v.typeUniverse,JSON.parse('{"iq":1,"n0":1,"hc":1,"kd":2,"ie":1,"fH":1,"bD":1,"jj":1,"oh":1,"nI":1,"ol":2,"iJ":2,"jY":1,"k8":2,"kV":1,"kX":2,"k1":1,"m0":1,"n1":2,"mp":1,"fj":1,"GT":1,"IC":1,"IK":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ad
return{fM:s("@<@>"),ie:s("GT<j?>"),bG:s("ec"),om:s("i5<B<j?>>"),hw:s("cC"),lo:s("ee"),fW:s("Bb"),fo:s("i8<k>"),iv:s("a0"),eg:s("CX"),dF:s("Bc()"),E:s("ck"),bU:s("c2<j?>"),fw:s("ej"),bP:s("ax<@>"),p6:s("ek"),br:s("ib<M>"),n8:s("bC"),M:s("d1<k>"),lp:s("la"),O:s("K<@>"),C:s("af"),fq:s("dy"),mA:s("H"),eZ:s("lm"),d9:s("aY"),A:s("bg"),k4:s("io"),pk:s("ra"),kI:s("rb"),Y:s("bh"),gY:s("MN"),nW:s("y<M>"),fr:s("y<dK>"),mj:s("y<W>"),g7:s("y<@>"),fP:s("y<d3?>"),n1:s("y<j?>(ni,hh)"),jN:s("y<hf?>"),co:s("dA"),w:s("cG"),cF:s("dD"),m6:s("rQ"),bW:s("rR"),jx:s("rS"),nZ:s("iy<@>"),e7:s("o<@>"),gi:s("B<a0>"),aw:s("B<c2<@>>"),i5:s("B<cl>"),mK:s("B<aY>"),iw:s("B<y<~>>"),mr:s("B<dC>"),kG:s("B<M>"),bi:s("B<p<F<k,j?>>>"),h2:s("B<p<j>>"),ae:s("B<p<eD>>"),dO:s("B<p<j?>>"),ic:s("B<F<k,j>>"),d:s("B<F<k,j?>>"),e8:s("B<lU>"),i7:s("B<ez>"),hf:s("B<j>"),ox:s("B<eB>"),fi:s("B<cn>"),my:s("B<co>"),k:s("B<da>"),eK:s("B<cL>"),k1:s("B<fO>"),g2:s("B<j6>"),bo:s("B<j7>"),cM:s("B<eD>"),gc:s("B<mj>"),eb:s("B<aU>"),fU:s("B<+controller,sync(dL<ct>,R)>"),lw:s("B<+controller,sync(dL<~>,R)>"),kC:s("B<+(dP,k)>"),jO:s("B<+(k,F<k,j?>)>"),l5:s("B<+(k,j)>"),fj:s("B<+(k,aY?)>"),iE:s("B<+(k,j?)>"),aY:s("B<+(hm,j?,j?,aH?)>"),g1:s("B<cM>"),cP:s("B<mw>"),kj:s("B<cN>"),lE:s("B<h3>"),c0:s("B<ca>"),dw:s("B<bj<@>>"),s:s("B<k>"),en:s("B<h6>"),bs:s("B<cS>"),fC:s("B<b0>"),az:s("B<hl>"),i4:s("B<hm>"),fV:s("B<hn>"),pg:s("B<bo>"),dg:s("B<cy>"),p8:s("B<nX>"),mc:s("B<hA>"),gy:s("B<hC>"),gk:s("B<ac>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<am?>"),eU:s("B<F<k,j?>?>"),c:s("B<j?>"),mf:s("B<k?>"),iy:s("b9<@>"),T:s("iA"),m:s("M"),bJ:s("br"),g:s("bQ"),dX:s("bR<@>"),aq:s("aG"),fZ:s("lH"),kk:s("eu<eO>"),p3:s("eu<b8>"),hI:s("ev<@>"),ba:s("p<bC>"),ck:s("p<bg>"),ip:s("p<M>"),ew:s("p<F<k,j>>"),J:s("p<F<k,j?>>"),eT:s("p<ez>"),hg:s("p<eB>"),a6:s("p<co>"),jX:s("p<j6>"),kR:s("p<cM>"),fE:s("p<cN>"),i:s("p<k>"),bR:s("p<h6>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<F<k,j?>?>"),R:s("p<j?>"),jD:s("iG"),ia:s("Q<k,dA>"),af:s("Q<k,k>"),I:s("Q<k,@>"),x:s("Q<k,j?>"),a3:s("iI<@,@>"),cy:s("F<k,cP>"),dV:s("F<k,i>"),f:s("F<@,@>"),G:s("F<k,j?>"),d2:s("F<j?,j?>"),iZ:s("X<k,@>"),r:s("dK"),a:s("fF"),dQ:s("dN"),aj:s("bS"),Z:s("ey"),P:s("W"),K:s("j"),k5:s("cn"),dZ:s("co"),i0:s("cp"),jS:s("da"),ot:s("mh"),gq:s("fO"),e:s("b5"),b0:s("db"),lZ:s("MT"),oZ:s("aU"),aK:s("+()"),ja:s("+(M,ic)"),hP:s("+(F<k,cP>,F<k,F<k,j?>>)"),cU:s("+(dP,k)"),mk:s("+(R,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(R,R)"),mt:s("+(M?,M)"),po:s("+(j?,i)"),g0:s("+(F<k,j?>?,cP?,co?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mn"),Q:s("cM"),V:s("aQ"),hF:s("bV<k>"),cu:s("fZ<@>"),aJ:s("eH<k>"),g_:s("h_"),hq:s("cs"),ol:s("de"),gE:s("mI"),l:s("aH"),ls:s("IC<j?>"),nv:s("mJ"),h3:s("h4"),ha:s("bj<ct>"),dz:s("bj<@>"),ey:s("bj<~>"),bv:s("mK"),ku:s("ab<p<i>>"),lI:s("dR"),hL:s("jk"),N:s("k"),f_:s("h6"),k6:s("jl"),n6:s("cb"),mv:s("bk"),nw:s("cP"),em:s("h7"),hU:s("df"),q:s("mR"),dH:s("ak"),do:s("dg"),nL:s("IK<j?>"),hM:s("wx"),mC:s("wy"),oR:s("cx"),nn:s("wz"),p:s("cS"),cx:s("dU"),ph:s("cT<k,k>"),eo:s("cU"),oc:s("cV"),jJ:s("n2"),e6:s("b6"),j2:s("jp"),n:s("hf"),fA:s("b0"),gx:s("al<cB>"),mz:s("al<aZ>"),mE:s("al<dT>"),B:s("bI<k>"),u:s("eM"),bp:s("eN"),be:s("ni"),ec:s("hi"),oS:s("no"),iq:s("az<cS>"),jk:s("az<@>"),ho:s("az<i>"),h:s("az<~>"),oW:s("eR<@,@>"),U:s("eS<M>"),d4:s("hs<M>"),nI:s("t<d3>"),a7:s("t<M>"),hl:s("t<0&>"),os:s("t<k>"),jz:s("t<cS>"),g5:s("t<R>"),_:s("t<@>"),hy:s("t<i>"),jQ:s("t<i?>"),D:s("t<~>"),nf:s("bo"),mp:s("dZ<j?,j?>"),mB:s("hx"),k8:s("dm<M>"),fb:s("dm<p<i>>"),mI:s("ob<cl>"),jy:s("e3<ct,~()>"),ag:s("e3<~,R()>"),lU:s("e3<~,~()>"),hT:s("cf<M>"),lj:s("cf<p<i>>"),aP:s("ao<d3>"),h1:s("ao<M>"),ex:s("ao<R>"),F:s("ao<~>"),g8:s("oi"),y:s("R"),W:s("ac"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aH)"),S:s("i"),ma:s("bC?"),gK:s("y<W>?"),b3:s("d3?"),o:s("M?"),bE:s("p<c2<@>>?"),lH:s("p<@>?"),b:s("F<k,j?>?"),nh:s("dK?"),X:s("j?"),ad:s("Du?"),dY:s("co?"),lY:s("j5?"),jB:s("cM?"),v:s("k?"),f8:s("cP?"),a_:s("cx?"),he:s("hf?"),dd:s("bo?"),o9:s("R?"),dA:s("ac?"),aV:s("i?"),jh:s("aW?"),cZ:s("aW"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aH)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.c7=J.lz.prototype
B.b=J.B.prototype
B.c=J.iz.prototype
B.x=J.es.prototype
B.a=J.dE.prototype
B.c8=J.bQ.prototype
B.c9=J.aG.prototype
B.az=A.iU.prototype
B.cN=A.iW.prototype
B.y=A.iX.prototype
B.f=A.ey.prototype
B.b9=J.mb.prototype
B.aK=J.dU.prototype
B.ap=new A.du("Operation was cancelled")
B.a5=new A.i1(0,"visible")
B.aN=new A.i1(1,"hidden")
B.bs=new A.kz(1)
B.dX=new A.kz(-1)
B.a6=new A.ec(0,"applied")
B.a7=new A.ec(1,"quarantined")
B.bt=new A.ec(2,"conflict")
B.a8=new A.ec(3,"skipped")
B.bu=new A.kD(127)
B.a9=new A.kG(0,"changed")
B.aO=new A.kG(1,"deleted")
B.bw=new A.i6(!1)
B.aq=new A.kH(B.bw)
B.bx=new A.i6(!0)
B.bv=new A.kH(B.bx)
B.bS=new A.jH(A.ad("jH<p<i>>"))
B.by=new A.dw(B.bS)
B.bz=new A.iw(A.Md(),A.ad("iw<i>"))
B.ar=new A.kI()
B.bA=new A.kS()
B.bB=new A.kW()
B.F={}
B.Y=new A.aX(B.F,[],A.ad("aX<k,j>"))
B.e3=new A.u5(0,"conflict")
B.dY=new A.pX()
B.aP=new A.qs()
B.bC=new A.le(A.ad("le<0&>"))
B.r=new A.ld()
B.aQ=new A.lh(A.ad("lh<0&>"))
B.aR=new A.li()
B.O=new A.li()
B.bD=new A.lr()
B.bE=new A.ly()
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

B.h=new A.rX()
B.bL=new A.tA()
B.bM=new A.iG()
B.v=new A.fI()
B.bN=new A.m5()
B.bO=new A.mg()
B.d=new A.vK()
B.l=new A.n5()
B.e=new A.n6()
B.bP=new A.n7()
B.bQ=new A.n9()
B.bR=new A.xq()
B.t=new A.y8()
B.aa=new A.yj()
B.as=new A.yR()
B.aU=new A.f0()
B.i=new A.o5()
B.j=new A.o8()
B.P=new A.of()
B.ab=new A.dx(0,"create")
B.A=new A.dx(1,"update")
B.bT=new A.dx(2,"archive")
B.bU=new A.dx(3,"restore")
B.aV=new A.dx(4,"purge")
B.bV=new A.dx(5,"hide")
B.H=new A.i9(0,"local")
B.at=new A.i9(1,"remote")
B.ac=new A.i9(2,"resolution")
B.bW=new A.l0(3,"ignore")
B.Q=new A.l0(4,"replace")
B.o=new A.lg(0,"normal")
B.aW=new A.lg(1,"full")
B.D=new A.aE(0)
B.au=new A.aE(1e6)
B.aX=new A.aE(16e3)
B.dZ=new A.aE(18e8)
B.bX=new A.aE(2e5)
B.aY=new A.aE(3e5)
B.ad=new A.aE(3e7)
B.av=new A.aE(3e8)
B.ae=new A.aE(5e5)
B.e_=new A.aE(5e6)
B.e0=new A.aE(6048e8)
B.e1=new A.aE(7776e9)
B.e2=new A.aE(864e8)
B.aw=new A.c5(0,"text")
B.R=new A.c5(1,"int")
B.S=new A.c5(2,"real")
B.B=new A.c5(3,"bool")
B.T=new A.c5(4,"date")
B.I=new A.c5(5,"enumValue")
B.U=new A.c5(6,"json")
B.V=new A.c5(7,"jsonList")
B.J=new A.c5(8,"ref")
B.bY=new A.io(!1)
B.ax=new A.dz("x",1,"opfsExternalLocks")
B.aZ=new A.dz("y",2,"opfsExternalLocksWorkaround")
B.b_=new A.fu("/database",0,"database")
B.b0=new A.fu("/database-journal",1,"journal")
B.c3=new A.bh("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.c4=new A.bh("fieldCipher envelope must be a map.",null,null)
B.ay=new A.aX(B.F,[],A.ad("aX<k,k>"))
B.c5=new A.eq(B.ay)
B.b1=new A.iv(0,"live")
B.ca=new A.lF(null)
B.cb=new A.lG(null)
B.cc=new A.d5(0,"textExpected")
B.cd=new A.d5(1,"intExpected")
B.ce=new A.d5(2,"numberExpected")
B.cf=new A.d5(3,"boolExpected")
B.cg=new A.d5(4,"jsonExpected")
B.ch=new A.d5(5,"jsonListExpected")
B.ci=new A.d5(6,"enumValueRejected")
B.cj=new A.lK(255)
B.af=new A.ev(B.bC,A.ad("ev<k>"))
B.ck=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b2=s([13,10],t.t)
B.aD=new A.cw(0,"unknown")
B.aE=new A.cw(1,"integer")
B.aF=new A.cw(2,"bigInt")
B.aG=new A.cw(3,"float")
B.aH=new A.cw(4,"text")
B.aI=new A.cw(5,"blob")
B.aJ=new A.cw(6,"$null")
B.bn=new A.cw(7,"boolean")
B.b3=s([B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.aJ,B.bn],A.ad("B<cw>"))
B.cl=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.cm=s([B.a5,B.aN],A.ad("B<i1>"))
B.bc=new A.aZ(0,"eq")
B.cW=new A.aZ(1,"neq")
B.d_=new A.aZ(2,"gt")
B.d0=new A.aZ(3,"gte")
B.d1=new A.aZ(4,"lt")
B.d2=new A.aZ(5,"lte")
B.d3=new A.aZ(6,"inValues")
B.d4=new A.aZ(7,"between")
B.d5=new A.aZ(8,"startsWith")
B.d6=new A.aZ(9,"endsWith")
B.cX=new A.aZ(10,"contains")
B.cY=new A.aZ(11,"isNull")
B.cZ=new A.aZ(12,"isNotNull")
B.cn=s([B.bc,B.cW,B.d_,B.d0,B.d1,B.d2,B.d3,B.d4,B.d5,B.d6,B.cX,B.cY,B.cZ],A.ad("B<aZ>"))
B.c1=new A.ip(0,"database")
B.c2=new A.ip(1,"journal")
B.b4=s([B.c1,B.c2],A.ad("B<ip>"))
B.z=new A.cQ(0,"clean")
B.G=new A.cQ(1,"dirty")
B.bk=new A.cQ(2,"inFlight")
B.a4=new A.cQ(3,"conflict")
B.ao=new A.cQ(4,"error")
B.dp=new A.cQ(5,"quarantine")
B.dq=new A.cQ(6,"blocked")
B.co=s([B.z,B.G,B.bk,B.a4,B.ao,B.dp,B.dq],A.ad("B<cQ>"))
B.W=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cp=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.c6=new A.iv(1,"notArchived")
B.cq=s([B.b1,B.c6],A.ad("B<iv>"))
B.cr=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b7=new A.j0(0,"fileUpload")
B.b8=new A.j0(1,"fileRemove")
B.cs=s([B.b7,B.b8],A.ad("B<j0>"))
B.c0=new A.dz("s",0,"opfsShared")
B.bZ=new A.dz("i",3,"indexedDb")
B.c_=new A.dz("m",4,"inMemory")
B.ct=s([B.c0,B.ax,B.aZ,B.bZ,B.c_],A.ad("B<dz>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bo=new A.cB(0,"sum")
B.bp=new A.cB(1,"avg")
B.bq=new A.cB(2,"min")
B.br=new A.cB(3,"max")
B.cu=s([B.bo,B.bp,B.bq,B.br],A.ad("B<cB>"))
B.cv=s([B.aw,B.R,B.S,B.B,B.T,B.I,B.U,B.V,B.J],A.ad("B<c5>"))
B.k=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.X=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cw=s(["base_updated","base_hash","base_json"],t.s)
B.u=new A.fJ(0,"upsert")
B.L=new A.fJ(1,"archive")
B.a0=new A.fJ(2,"restore")
B.cx=s([B.u,B.L,B.a0],A.ad("B<fJ>"))
B.cz=s([],A.ad("B<dA>"))
B.b5=s([],t.d)
B.cB=s([],t.my)
B.cy=s([],t.kj)
B.p=s([],t.s)
B.cA=s([],t.t)
B.aj=s([],t.dG)
B.m=s([],t.c)
B.cC=s(["*"],t.s)
B.cD=s([B.b_,B.b0],A.ad("B<fu>"))
B.cE=s(["id","updated"],t.s)
B.cF=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bf=new A.dP(0,"opfs")
B.bg=new A.dP(1,"indexedDb")
B.dh=new A.dP(2,"inMemory")
B.cG=s([B.bf,B.bg,B.dh],A.ad("B<dP>"))
B.bl=new A.dT(0,"normal")
B.bm=new A.dT(1,"full")
B.cH=s([B.bl,B.bm],A.ad("B<dT>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cI=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cJ=new A.is([16,10,24,12,32,14],A.ad("is<i,i>"))
B.cS={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.lJ()
B.q=new A.kC()
B.cK=new A.aX(B.cS,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.l,B.l],A.ad("aX<k,ep>"))
B.al=new A.aX(B.F,[],A.ad("aX<k,i>"))
B.n=new A.aX(B.F,[],A.ad("aX<k,j?>"))
B.am=new A.aX(B.F,[],A.ad("aX<i,F<k,j?>(F<k,j?>)>"))
B.cM=new A.lQ(11,"simpleSuccessResponse",A.ad("lQ<M>"))
B.Z=new A.dM(0,"createOrUpdate")
B.a_=new A.dM(1,"createOrUpdateMerge")
B.b6=new A.dM(2,"create")
B.K=new A.dM(3,"update")
B.C=new A.dM(4,"archive")
B.E=new A.dM(5,"restore")
B.e4=new A.uk(2,"readWriteCreate")
B.cT=new A.cn("id",!1)
B.cU=new A.cp(B.b5,null,null,!1,!1)
B.ba=new A.mc(0,"native")
B.aA=new A.mc(1,"web")
B.M=new A.b5(0,1,0,0,0,!1)
B.an=new A.b5(0,0,0,0,0,!0)
B.a1=new A.b5(0,0,0,0,0,!1)
B.cV=new A.b5(0,0,0,1,0,!1)
B.bb=new A.b5(0,0,1,0,0,!1)
B.a2=new A.b5(1,0,0,0,0,!1)
B.d7=new A.a5("archived",!0)
B.d8=new A.a5("0",B.m)
B.aB=new A.jW(!1,!1)
B.d9=new A.eZ(0,0,0)
B.da=new A.eZ(null,null,null)
B.cP={open:0,close:1,health:2,worker_event:3,capabilities:4,compiled_query:5,analyze:6,wal_checkpoint:7,vacuum:8,prune_outbox:9,compact:10,run_maintenance:11,tx_begin:12,tx_get:13,tx_mutate_batch:14,tx_savepoint:15,tx_rollback_to:16,tx_release:17,tx_commit:18,tx_rollback:19,watch_cancel:20,sync_start:21,sync_stop:22,sync_now:23,sync_status:24,auth_required:25,sync_pause:26,sync_resume:27,sync_update_auth:28,sync_set_connectivity:29,file_upload_begin:30,file_upload_chunk:31,file_upload_finish:32,file_upload_abort:33,file_list:34,file_open:35,file_remove:36,file_gc:37,file_enforce_storage_cap:38,file_storage_status:39,conflicts_list:40,conflicts_get:41,conflicts_resolve:42,conflicts_accept_local:43,conflicts_accept_remote:44,conflicts_watch:45,contract_request:46,contract_event:47}
B.db=new A.d1(B.cP,48,t.M)
B.cR={hidden:0}
B.dc=new A.d1(B.cR,1,t.M)
B.cO={id:0,archived:1,hidden:2,extra:3}
B.bd=new A.d1(B.cO,4,t.M)
B.cQ={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.dd=new A.d1(B.cQ,11,t.M)
B.be=new A.d1(B.F,0,t.M)
B.de=new A.jf(0,"insert")
B.df=new A.jf(1,"update")
B.dg=new A.jf(2,"delete")
B.di=new A.jl(-1,null)
B.dj=new A.jm("_clientToken")
B.a3=new A.cb(0,"closed")
B.dk=new A.cb(1,"opening")
B.bh=new A.cb(2,"offline")
B.aC=new A.cb(3,"authRequired")
B.bi=new A.cb(4,"idle")
B.dl=new A.cb(5,"pulling")
B.dm=new A.cb(6,"pushing")
B.dn=new A.cb(7,"backoff")
B.bj=new A.cb(8,"paused")
B.N=new A.bk(B.al,B.al,0,0,0,0,!1)
B.dr=A.bM("kx")
B.ds=A.bM("ee")
B.dt=A.bM("Bb")
B.du=A.bM("ra")
B.dv=A.bM("rb")
B.dw=A.bM("rQ")
B.dx=A.bM("rR")
B.dy=A.bM("rS")
B.dz=A.bM("M")
B.dA=A.bM("j")
B.dB=A.bM("jc")
B.dC=A.bM("wx")
B.dD=A.bM("wy")
B.dE=A.bM("wz")
B.dF=A.bM("cS")
B.aL=new A.jo(!1)
B.dG=new A.jo(!0)
B.dH=new A.di(14)
B.dI=new A.di(522)
B.dJ=new A.di(778)
B.dK=new A.zH(B.i,A.Lh())
B.dL=new A.zI(B.i,A.Li())
B.dM=new A.zJ(B.i,A.Lj())
B.dN=new A.zK(B.i,A.Lk())
B.dO=new A.ov(B.i,A.Ll())
B.dP=new A.zL(B.i,A.Lm())
B.dQ=new A.zM(B.i,A.Ln())
B.dR=new A.zN(B.i,A.Lo())
B.dS=new A.zO(B.i,A.Lp())
B.dT=new A.zQ(B.i,A.Lr())
B.dU=new A.zR(B.i,A.Ls())
B.dV=new A.zP(B.i,A.Lq())
B.dW=new A.ow(B.i,A.Lt())
B.cL=new A.aX(B.F,[],A.ad("aX<j?,j?>"))
B.aM=new A.ox(B.i,B.cL)})();(function staticFields(){$.yT=null
$.f4=A.l([],t.hf)
$.KO=null
$.Dx=null
$.uU=0
$.me=A.KD()
$.CV=null
$.CU=null
$.FE=null
$.Fh=null
$.FO=null
$.Au=null
$.AK=null
$.Cq=null
$.z4=A.l([],A.ad("B<p<j>?>"))
$.hO=null
$.kf=null
$.kg=null
$.Cf=!1
$.C=B.i
$.z8=null
$.E2=null
$.E3=null
$.E4=null
$.E5=null
$.BV=A.xM("_lastQuoRemDigits")
$.BW=A.xM("_lastQuoRemUsed")
$.jA=A.xM("_lastRemUsed")
$.BX=A.xM("_lastRem_nsh")
$.DS=""
$.DT=null
$.fP=function(){var s=t.N
return A.w(s,s)}()
$.EL=null
$.A0=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"MJ","G4",()=>A.AC("_$dart_dartClosure"))
s($,"MI","fb",()=>A.AC("_$dart_dartClosure_dartJSInterop"))
s($,"Nm","oQ",()=>A.ud(0))
s($,"NK","GE",()=>B.i.aX(new A.AN(),A.ad("y<~>")))
s($,"NE","GB",()=>A.l([new J.lA()],A.ad("B<j9>")))
s($,"N0","G8",()=>A.dh(A.wv({
toString:function(){return"$receiver$"}})))
s($,"N1","G9",()=>A.dh(A.wv({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"N2","Ga",()=>A.dh(A.wv(null)))
s($,"N3","Gb",()=>A.dh(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"N6","Ge",()=>A.dh(A.wv(void 0)))
s($,"N7","Gf",()=>A.dh(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"N5","Gd",()=>A.dh(A.DP(null)))
s($,"N4","Gc",()=>A.dh(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"N9","Gh",()=>A.dh(A.DP(void 0)))
s($,"N8","Gg",()=>A.dh(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Nc","CB",()=>A.IV())
s($,"MP","ea",()=>$.GE())
s($,"MO","G5",()=>A.Jd(!1,B.i,t.y))
s($,"Ns","Gr",()=>A.ud(4096))
s($,"Nq","Gp",()=>new A.zD().$0())
s($,"Nr","Gq",()=>new A.zC().$0())
s($,"Ne","CC",()=>A.I3(A.b3(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Nd","Gi",()=>A.ud(0))
s($,"Nl","cj",()=>A.jz(0))
s($,"Nj","fc",()=>A.jz(1))
s($,"Nk","Gl",()=>A.jz(2))
s($,"Nh","CE",()=>$.fc().bF(0))
s($,"Nf","CD",()=>A.jz(1e4))
r($,"Ni","Gk",()=>A.ah("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Ng","Gj",()=>A.ud(8))
s($,"Nn","Gm",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"No","Gn",()=>A.ah("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Np","Go",()=>typeof URLSearchParams=="function")
s($,"Nv","fd",()=>A.kn(B.dA))
s($,"MU","ks",()=>{A.Id()
return $.uU})
s($,"Nw","Gu",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"MS","B5",()=>{var q=new A.yS(A.I2(8))
q.pg()
return q})
s($,"MK","kr",()=>A.GY(B.cN.gaa(A.I4(A.b3(A.l([1],t.t)))),0,null).getInt8(0)===1?B.O:B.aR)
s($,"MB","Cw",()=>A.ah("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Ny","B6",()=>A.ah("\\r\\n|\\r|\\n",!0,!1))
s($,"MQ","G6",()=>A.DC())
s($,"Nt","CF",()=>A.ah("^[\\x00-\\x7F]+$",!0,!1))
s($,"Nu","Gs",()=>A.ah('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"NM","GF",()=>A.ah('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Nx","Gv",()=>A.ah("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"NB","Gy",()=>A.ah('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"NA","Gx",()=>A.ah("\\\\(.)",!0,!1))
s($,"NJ","GD",()=>A.ah('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"NN","GG",()=>A.ah("(?:"+$.Gv().a+")*",!0,!1))
s($,"ND","GA",()=>A.DD())
s($,"NL","oR",()=>A.ah("^[a-z0-9]{15}$",!0,!1))
r($,"Km","Gt",()=>A.Hg().a)
s($,"ML","Cy",()=>A.ah("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"MG","G2",()=>A.Bh("declaredNames",t.aJ))
s($,"MH","G3",()=>A.Bh("fieldByName",A.ad("F<k,aY>")))
s($,"N_","ku",()=>new A.j())
s($,"MF","Cx",()=>A.ah("^[0-9a-f]{64}$",!0,!1))
s($,"Nz","Gw",()=>A.ah("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"NG","i_",()=>new A.q5($.Cz()))
s($,"MX","G7",()=>new A.uO(A.ah("/",!0,!1),A.ah("[^/]$",!0,!1),A.ah("^/",!0,!1)))
s($,"MZ","oP",()=>new A.x_(A.ah("[/\\\\]",!0,!1),A.ah("[^/\\\\]$",!0,!1),A.ah("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ah("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"MY","kt",()=>new A.wG(A.ah("/",!0,!1),A.ah("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ah("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ah("^/",!0,!1)))
s($,"MW","Cz",()=>A.IF())
s($,"ME","G1",()=>$.fc().bG(0,63).bF(0))
s($,"MD","G0",()=>{var q=$.fc()
return q.bG(0,63).fX(0,q)})
s($,"MC","oO",()=>A.DD())
s($,"Na","CA",()=>A.Bh(null,t.S))
s($,"NF","GC",()=>A.HR(A.l([A.BO("files"),A.BO("blocks")],t.s)))
s($,"MM","B4",()=>{var q,p,o=A.w(t.N,A.ad("fu"))
for(q=0;q<2;++q){p=B.cD[q]
o.j(0,p.c,p)}return o})
s($,"NC","Gz",()=>A.DC())
r($,"Nb","kv",()=>{var q="navigator"
return A.HI(A.HJ(A.Co(A.FT(),q),A.BO("locks")))?A.Co(A.Co(A.FT(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fG,ArrayBuffer:A.fF,ArrayBufferView:A.iV,DataView:A.iU,Float32Array:A.lW,Float64Array:A.lX,Int16Array:A.lY,Int32Array:A.lZ,Int8Array:A.m_,Uint16Array:A.iW,Uint32Array:A.iX,Uint8ClampedArray:A.iY,CanvasPixelArray:A.iY,Uint8Array:A.ey})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fH.$nativeSuperclassTag="ArrayBufferView"
A.jS.$nativeSuperclassTag="ArrayBufferView"
A.jT.$nativeSuperclassTag="ArrayBufferView"
A.dN.$nativeSuperclassTag="ArrayBufferView"
A.jU.$nativeSuperclassTag="ArrayBufferView"
A.jV.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.Mb
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
