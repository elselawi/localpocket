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
if(a[b]!==s){A.NH(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.DG(b)
return new s(c,this)}:function(){if(s===null)s=A.DG(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.DG(a).prototype
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
DP(a,b,c,d){return{i:a,p:b,e:c,x:d}},
C_(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.DN==null){A.Ne()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.F9("Return interceptor for "+A.p(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.Ai
if(o==null)o=$.Ai=A.BZ(n)
p=q[o]}if(p!=null)return p
p=A.Nm(a)
if(p!=null)return p
if(typeof a=="function")return B.co
s=Object.getPrototypeOf(a)
if(s==null)return B.bd
if(s===Object.prototype)return B.bd
if(typeof q=="function"){o=$.Ai
if(o==null)o=$.Ai=A.BZ(n)
Object.defineProperty(q,o,{value:B.aN,enumerable:false,writable:true,configurable:true})
return B.aN}return B.aN},
CL(a,b){if(a<0||a>4294967295)throw A.b(A.ax(a,0,4294967295,"length",null))
return J.ED(new Array(a),b)},
CM(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("z<0>"))},
EC(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("z<0>"))},
ED(a,b){var s=A.j(a,b.i("z<0>"))
s.$flags=1
return s},
IU(a,b){return J.E5(a,b)},
EE(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
IX(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.EE(r))break;++b}return b},
EF(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.EE(r))break}return b},
dp(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iH.prototype
return J.mf.prototype}if(typeof a=="string")return J.dC.prototype
if(a==null)return J.iI.prototype
if(typeof a=="boolean")return J.me.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
if(typeof a=="symbol")return J.fE.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.l)return a
return J.C_(a)},
L(a){if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
if(typeof a=="symbol")return J.fE.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.l)return a
return J.C_(a)},
aD(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
if(typeof a=="symbol")return J.fE.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.l)return a
return J.C_(a)},
N6(a){if(typeof a=="number")return J.es.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.dU.prototype
return a},
N7(a){if(typeof a=="number")return J.es.prototype
if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.dU.prototype
return a},
BY(a){if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.dU.prototype
return a},
kD(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
if(typeof a=="symbol")return J.fE.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.l)return a
return J.C_(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dp(a).P(a,b)},
W(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.GT(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
cX(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.GT(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aD(a).j(a,b,c)},
aO(a,b){return J.aD(a).t(a,b)},
E2(a,b){return J.aD(a).F(a,b)},
Ct(a,b){return J.BY(a).hF(a,b)},
pz(a){return J.kD(a).mD(a)},
E3(a,b,c){return J.kD(a).hG(a,b,c)},
E4(a,b,c){return J.kD(a).mE(a,b,c)},
HU(a){return J.kD(a).mF(a)},
bK(a,b,c){return J.kD(a).hH(a,b,c)},
pA(a,b){return J.aD(a).f3(a,b)},
HV(a,b,c){return J.N6(a).bp(a,b,c)},
E5(a,b){return J.N7(a).a0(a,b)},
Cu(a,b){return J.L(a).D(a,b)},
pB(a,b){return J.aD(a).a9(a,b)},
kN(a,b){return J.aD(a).cI(a,b)},
HW(a,b,c){return J.aD(a).cK(a,b,c)},
HX(a){return J.kD(a).gab(a)},
bL(a){return J.aD(a).gH(a)},
a8(a){return J.dp(a).gJ(a)},
bz(a){return J.L(a).gE(a)},
dr(a){return J.L(a).gY(a)},
E(a){return J.aD(a).gu(a)},
pC(a){return J.aD(a).ga1(a)},
ar(a){return J.L(a).gm(a)},
bY(a){return J.dp(a).gak(a)},
Cv(a){return J.aD(a).gap(a)},
HY(a,b,c){return J.aD(a).fQ(a,b,c)},
HZ(a,b,c){return J.aD(a).aD(a,b,c)},
bZ(a,b,c){return J.aD(a).cj(a,b,c)},
I_(a,b,c){return J.BY(a).em(a,b,c)},
I0(a,b){return J.L(a).sm(a,b)},
I1(a,b,c,d,e){return J.aD(a).ai(a,b,c,d,e)},
pD(a,b){return J.aD(a).bl(a,b)},
E6(a,b){return J.aD(a).co(a,b)},
I2(a,b){return J.BY(a).d_(a,b)},
I3(a,b){return J.BY(a).S(a,b)},
I4(a,b,c){return J.aD(a).T(a,b,c)},
Cw(a,b){return J.aD(a).cV(a,b)},
I5(a){return J.aD(a).cW(a)},
Z(a){return J.dp(a).l(a)},
I6(a,b){return J.aD(a).dw(a,b)},
mc:function mc(){},
me:function me(){},
iI:function iI(){},
aH:function aH(){},
dE:function dE(){},
mM:function mM(){},
dU:function dU(){},
bO:function bO(){},
bs:function bs(){},
fE:function fE(){},
z:function z(a){this.$ti=a},
md:function md(){},
tK:function tK(a){this.$ti=a},
fh:function fh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
es:function es(){},
iH:function iH(){},
mf:function mf(){},
dC:function dC(){}},A={CP:function CP(){},
fj(a,b,c){if(t.O.b(a))return new A.jV(a,b.i("@<0>").X(c).i("jV<1,2>"))
return new A.eg(a,b.i("@<0>").X(c).i("eg<1,2>"))},
EH(a){return new A.dD("Field '"+a+"' has been assigned during initialization.")},
EI(a){return new A.dD("Field '"+a+"' has not been initialized.")},
J0(a){return new A.dD("Field '"+a+"' has already been initialized.")},
eF(a){return new A.mY(a)},
C3(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ay(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ha(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cw(a,b,c){return a},
DO(a){var s,r
for(s=$.f3.length,r=0;r<s;++r)if(a===$.f3[r])return!0
return!1},
cr(a,b,c,d){A.bc(b,"start")
if(c!=null){A.bc(c,"end")
if(b>c)A.u(A.ax(b,0,c,"start",null))}return new A.cq(a,b,c,d.i("cq<0>"))},
dH(a,b,c,d){if(t.O.b(a))return new A.en(a,b,c.i("@<0>").X(d).i("en<1,2>"))
return new A.ci(a,b,c.i("@<0>").X(d).i("ci<1,2>"))},
F4(a,b,c){var s="takeCount"
A.kU(b,s)
A.bc(b,s)
if(t.O.b(a))return new A.io(a,b,c.i("io<0>"))
return new A.eJ(a,b,c.i("eJ<0>"))},
F2(a,b,c){var s="count"
if(t.O.b(a)){A.kU(b,s)
A.bc(b,s)
return new A.fu(a,b,c.i("fu<0>"))}A.kU(b,s)
A.bc(b,s)
return new A.d8(a,b,c.i("d8<0>"))},
aG(){return new A.bm("No element")},
iF(){return new A.bm("Too many elements")},
EA(){return new A.bm("Too few elements")},
ne(a,b,c,d){if(c-b<=32)A.JK(a,b,c,d)
else A.JJ(a,b,c,d)},
JK(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.L(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
JJ(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.L(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.L(a4+a5,2),e=f-i,d=f+i,c=J.L(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.ne(a3,a4,r-2,a6)
A.ne(a3,q+2,a5,a6)
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
break}}A.ne(a3,r,q,a6)}else A.ne(a3,r,q,a6)},
zA:function zA(a){this.a=0
this.b=a},
z8:function z8(a){this.a=0
this.b=a},
dY:function dY(){},
lc:function lc(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b){this.a=a
this.$ti=b},
jV:function jV(a,b){this.a=a
this.$ti=b},
jS:function jS(){},
z9:function z9(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.$ti=b},
eh:function eh(a,b){this.a=a
this.$ti=b},
q3:function q3(a,b){this.a=a
this.b=b},
q2:function q2(a){this.a=a},
dD:function dD(a){this.a=a},
mY:function mY(a){this.a=a},
cg:function cg(a){this.a=a},
Ca:function Ca(){},
xl:function xl(){},
K:function K(){},
a_:function a_(){},
cq:function cq(a,b,c,d){var _=this
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
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
mq:function mq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
is:function is(a,b,c){this.a=a
this.b=b
this.$ti=c},
lH:function lH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b,c){this.a=a
this.b=b
this.$ti=c},
nF:function nF(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.$ti=c},
nd:function nd(a,b,c){this.a=a
this.b=b
this.$ti=c},
eo:function eo(a){this.$ti=a},
lE:function lE(a){this.$ti=a},
dW:function dW(a,b){this.a=a
this.$ti=b},
o4:function o4(a,b){this.a=a
this.$ti=b},
iw:function iw(){},
nR:function nR(){},
he:function he(){},
bv:function bv(a,b){this.a=a
this.$ti=b},
jD:function jD(a){this.a=a},
ks:function ks(){},
Io(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bE(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aW(q,A.bE(new A.al(a,m.i("al<2>")),!0,c),b.i("@<0>").X(c).i("aW<1,2>"))
n.$keys=l
return n}return new A.ij(A.bl(a,b,c),b.i("@<0>").X(c).i("ij<1,2>"))},
Ip(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
Iq(){throw A.b(A.Y("Cannot modify constant Set"))},
Hc(a){var s=A.Hb(a)
if(s!=null)return s
return"minified:"+a},
GT(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
return s},
eC(a){var s,r=$.ES
if(r==null)r=$.ES=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jf(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
Js(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cm(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mP(a){var s,r,q,p
if(a instanceof A.l)return A.bV(A.bh(a),null)
s=J.dp(a)
if(s===B.cn||s===B.cp||t.cx.b(a)){r=B.aV(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bV(A.bh(a),null)},
EU(a){var s,r,q
if(a==null||typeof a=="number"||A.bx(a))return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ej)return a.l(0)
if(a instanceof A.hB)return a.mr(!0)
s=$.HO()
for(r=0;r<1;++r){q=s[r].xg(a)
if(q!=null)return q}return"Instance of '"+A.mP(a)+"'"},
Jo(){return Date.now()},
Jr(){var s,r
if($.wt!==0)return
$.wt=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.wt=1e6
$.mQ=new A.ws(r)},
Jn(){if(!!self.location)return self.location.href
return null},
ER(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Jt(a){var s,r,q,p=A.j([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(!A.av(q))throw A.b(A.f5(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.af(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.f5(q))}return A.ER(p)},
EV(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.av(q))throw A.b(A.f5(q))
if(q<0)throw A.b(A.f5(q))
if(q>65535)return A.Jt(a)}return A.ER(a)},
Ju(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bu(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.af(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ax(a,0,1114111,null,null))},
Jv(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.al(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.L(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bt(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
D_(a){return a.c?A.bt(a).getUTCFullYear()+0:A.bt(a).getFullYear()+0},
CY(a){return a.c?A.bt(a).getUTCMonth()+1:A.bt(a).getMonth()+1},
wr(a){return a.c?A.bt(a).getUTCDate()+0:A.bt(a).getDate()+0},
CW(a){return a.c?A.bt(a).getUTCHours()+0:A.bt(a).getHours()+0},
CX(a){return a.c?A.bt(a).getUTCMinutes()+0:A.bt(a).getMinutes()+0},
CZ(a){return a.c?A.bt(a).getUTCSeconds()+0:A.bt(a).getSeconds()+0},
ET(a){return a.c?A.bt(a).getUTCMilliseconds()+0:A.bt(a).getMilliseconds()+0},
Jq(a){return B.c.al((a.c?A.bt(a).getUTCDay()+0:A.bt(a).getDay()+0)+6,7)+1},
Jp(a){var s=a.$thrownJsError
if(s==null)return null
return A.ae(s)},
mR(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aP(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
BT(a,b){var s,r="index"
if(!A.av(b))return new A.bA(!0,b,r,null)
s=J.ar(a)
if(b<0||b>=s)return A.m9(b,s,a,null,r)
return A.x6(b,r)},
MX(a,b,c){if(a<0||a>c)return A.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ax(b,a,c,"end",null)
return new A.bA(!0,b,"end",null)},
f5(a){return new A.bA(!0,a,null,null)},
b(a){return A.aP(a,new Error())},
aP(a,b){var s
if(a==null)a=new A.dd()
b.dartException=a
s=A.NI
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
NI(){return J.Z(this.dartException)},
u(a,b){throw A.aP(a,b==null?new Error():b)},
H(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.u(A.Lp(a,b,c),s)},
Lp(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cR("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.b(A.aA(a))},
de(a){var s,r,q,p,o,n
a=A.H1(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.y9(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ya(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
F8(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
CQ(a,b){var s=b==null,r=s?null:b.method
return new A.mg(a,r,s?null:b.receiver)},
C(a){if(a==null)return new A.mF(a)
if(a instanceof A.iq)return A.ea(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ea(a,a.dartException)
return A.Mi(a)},
ea(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Mi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.af(r,16)&8191)===10)switch(q){case 438:return A.ea(a,A.CQ(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.ea(a,new A.j8())}}if(a instanceof TypeError){p=$.Hl()
o=$.Hm()
n=$.Hn()
m=$.Ho()
l=$.Hr()
k=$.Hs()
j=$.Hq()
$.Hp()
i=$.Hu()
h=$.Ht()
g=p.bT(s)
if(g!=null)return A.ea(a,A.CQ(s,g))
else{g=o.bT(s)
if(g!=null){g.method="call"
return A.ea(a,A.CQ(s,g))}else if(n.bT(s)!=null||m.bT(s)!=null||l.bT(s)!=null||k.bT(s)!=null||j.bT(s)!=null||m.bT(s)!=null||i.bT(s)!=null||h.bT(s)!=null)return A.ea(a,new A.j8())}return A.ea(a,new A.nQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jx()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ea(a,new A.bA(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jx()
return a},
ae(a){var s
if(a instanceof A.iq)return a.b
if(a==null)return new A.kd(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.kd(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kE(a){if(a==null)return J.a8(a)
if(typeof a=="object")return A.eC(a)
return J.a8(a)},
ML(a){if(typeof a=="number")return B.x.gJ(a)
if(a instanceof A.p5)return A.eC(a)
if(a instanceof A.hB)return a.gJ(a)
if(a instanceof A.jD)return a.gJ(0)
return A.kE(a)},
GQ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
N4(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
LC(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Eq("Unsupported number of arguments for wrapped closure"))},
e9(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.MQ(a,b)
a.$identity=s
return s},
MQ(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.LC)},
Ii(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.xw().constructor.prototype):Object.create(new A.i9(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Ej(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Ie(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Ej(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Ie(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.I9)}throw A.b("Error in functionType of tearoff")},
If(a,b,c,d){var s=A.Eg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Ej(a,b,c,d){if(c)return A.Ih(a,b,d)
return A.If(b.length,d,a,b)},
Ig(a,b,c,d){var s=A.Eg,r=A.Ia
switch(b?-1:a){case 0:throw A.b(new A.n6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Ih(a,b,c){var s,r
if($.Ee==null)$.Ee=A.Ed("interceptor")
if($.Ef==null)$.Ef=A.Ed("receiver")
s=b.length
r=A.Ig(s,c,a,b)
return r},
DG(a){return A.Ii(a)},
I9(a,b){return A.km(v.typeUniverse,A.bh(a.a),b)},
Eg(a){return a.a},
Ia(a){return a.b},
Ed(a){var s,r,q,p=new A.i9("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.Q("Field name "+a+" not found.",null))},
BZ(a){return v.getIsolateTag(a)},
NL(a,b){var s=$.D
if(s===B.i)return a
return s.hK(a,b)},
H5(){return v.G},
OT(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Nm(a){var s,r,q,p,o,n=$.GR.$1(a),m=$.BU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.C7[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.GB.$2(a,n)
if(q!=null){m=$.BU[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.C7[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.C9(s)
$.BU[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.C7[n]=s
return s}if(p==="-"){o=A.C9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.GZ(a,s)
if(p==="*")throw A.b(A.F9(n))
if(v.leafTags[n]===true){o=A.C9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.GZ(a,s)},
GZ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.DP(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
C9(a){return J.DP(a,!1,null,!!a.$ibP)},
No(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.C9(s)
else return J.DP(s,c,null,null)},
Ne(){if(!0===$.DN)return
$.DN=!0
A.Nf()},
Nf(){var s,r,q,p,o,n,m,l
$.BU=Object.create(null)
$.C7=Object.create(null)
A.Nd()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.H0.$1(o)
if(n!=null){m=A.No(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Nd(){var s,r,q,p,o,n,m=B.bL()
m=A.hT(B.bM,A.hT(B.bN,A.hT(B.aW,A.hT(B.aW,A.hT(B.bO,A.hT(B.bP,A.hT(B.bQ(B.aV),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.GR=new A.C4(p)
$.GB=new A.C5(o)
$.H0=new A.C6(n)},
hT(a,b){return a(b)||b},
KH(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
MU(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
CO(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a9("Illegal RegExp pattern ("+String(o)+")",a,null))},
NB(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.et){s=B.a.ae(a,c)
return b.b.test(s)}else return!J.Ct(b,B.a.ae(a,c)).gE(0)},
GO(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
H1(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B(a,b,c){var s
if(typeof b=="string")return A.ND(a,b,c)
if(b instanceof A.et){s=b.glX()
s.lastIndex=0
return a.replace(s,A.GO(c))}return A.NC(a,b,c)},
NC(a,b,c){var s,r,q,p
for(s=J.Ct(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
ND(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.H1(b),"g"),A.GO(c))},
Gt(a){return a},
H6(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hF(0,a),s=new A.ob(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.p(A.Gt(B.a.B(a,q,m)))+A.p(c.$1(o))
q=m+n[0].length}s=p+A.p(A.Gt(B.a.ae(a,q)))
return s.charCodeAt(0)==0?s:s},
NE(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.H7(a,s,s+b.length,c)},
H7(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a5:function a5(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
oO:function oO(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
oP:function oP(a){this.a=a},
ij:function ij(a,b){this.a=a
this.$ti=b},
fp:function fp(){},
qK:function qK(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b){this.a=a
this.$ti=b},
hx:function hx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iA:function iA(a,b){this.a=a
this.$ti=b},
ik:function ik(){},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
tE:function tE(){},
iE:function iE(a,b){this.a=a
this.$ti=b},
ws:function ws(a){this.a=a},
jp:function jp(){},
y9:function y9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j8:function j8(){},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
nQ:function nQ(a){this.a=a},
mF:function mF(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b},
kd:function kd(a){this.a=a
this.b=null},
ej:function ej(){},
q8:function q8(){},
q9:function q9(){},
xY:function xY(){},
xw:function xw(){},
i9:function i9(a,b){this.a=a
this.b=b},
n6:function n6(a){this.a=a},
bC:function bC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tL:function tL(a){this.a=a},
uO:function uO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
T:function T(a,b){this.a=a
this.$ti=b},
bD:function bD(a,b,c,d){var _=this
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
aI:function aI(a,b){this.a=a
this.$ti=b},
mo:function mo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iK:function iK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iJ:function iJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
C4:function C4(a){this.a=a},
C5:function C5(a){this.a=a},
C6:function C6(a){this.a=a},
hB:function hB(){},
oL:function oL(){},
oM:function oM(){},
oN:function oN(){},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a){this.b=a},
oa:function oa(a,b,c){this.a=a
this.b=b
this.c=c},
ob:function ob(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h7:function h7(a,b){this.a=a
this.c=b},
p0:function p0(a,b,c){this.a=a
this.b=b
this.c=c},
AR:function AR(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
NH(a){throw A.aP(A.EH(a),new Error())},
t(){throw A.aP(A.EI(""),new Error())},
eb(){throw A.aP(A.J0(""),new Error())},
Co(){throw A.aP(A.EH(""),new Error())},
ok(){var s=new A.oj("")
return s.b=s},
za(a){var s=new A.oj(a)
return s.b=s},
oj:function oj(a){this.a=a
this.b=null},
hO(a,b,c){},
b9(a){var s,r,q
if(t.iy.b(a))return a
s=J.L(a)
r=A.a7(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
Jf(a){return new DataView(new ArrayBuffer(a))},
EM(a,b,c){A.hO(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d3(a,b,c){A.hO(a,b,c)
c=B.c.L(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Jg(a){return new Int8Array(a)},
Jh(a){return new Uint16Array(a)},
EN(a,b,c){A.hO(a,b,c)
if(c==null)c=B.c.L(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
vA(a){return new Uint8Array(a)},
bR(a,b,c){A.hO(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dl(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.BT(b,a))},
dm(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.MX(a,b,c))
if(b==null)return c
return b},
fL:function fL(){},
fK:function fK(){},
j3:function j3(){},
p8:function p8(a){this.a=a},
j2:function j2(){},
fM:function fM(){},
dL:function dL(){},
bQ:function bQ(){},
my:function my(){},
mz:function mz(){},
mA:function mA(){},
mB:function mB(){},
mC:function mC(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
ey:function ey(){},
k6:function k6(){},
k7:function k7(){},
k8:function k8(){},
k9:function k9(){},
D2(a,b){var s=b.c
return s==null?b.c=A.kk(a,"y",[b.x]):s},
F_(a){var s=a.w
if(s===6||s===7)return A.F_(a.x)
return s===11||s===12},
JE(a){return a.as},
GY(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ad(a){return A.AX(v.typeUniverse,a,!1)},
Nh(a,b){var s,r,q,p,o
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
return A.FE(a1,r,!0)
case 7:s=a2.x
r=A.e7(a1,s,a3,a4)
if(r===s)return a2
return A.FD(a1,r,!0)
case 8:q=a2.y
p=A.hS(a1,q,a3,a4)
if(p===q)return a2
return A.kk(a1,a2.x,p)
case 9:o=a2.x
n=A.e7(a1,o,a3,a4)
m=a2.y
l=A.hS(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Do(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hS(a1,j,a3,a4)
if(i===j)return a2
return A.FF(a1,k,i)
case 11:h=a2.x
g=A.e7(a1,h,a3,a4)
f=a2.y
e=A.Md(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.FC(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hS(a1,d,a3,a4)
o=a2.x
n=A.e7(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Dp(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kY("Attempted to substitute unexpected RTI kind "+a0))}},
hS(a,b,c,d){var s,r,q,p,o=b.length,n=A.B6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e7(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Me(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.B6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e7(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Md(a,b,c,d){var s,r=b.a,q=A.hS(a,r,c,d),p=b.b,o=A.hS(a,p,c,d),n=b.c,m=A.Me(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.oy()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
pp(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.N8(s)
return a.$S()}return null},
Ng(a,b){var s
if(A.F_(b))if(a instanceof A.ej){s=A.pp(a)
if(s!=null)return s}return A.bh(a)},
bh(a){if(a instanceof A.l)return A.n(a)
if(Array.isArray(a))return A.a0(a)
return A.Dz(J.dp(a))},
a0(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Dz(a)},
Dz(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.LA(a,s)},
LA(a,b){var s=a instanceof A.ej?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.KR(v.typeUniverse,s.name)
b.$ccache=r
return r},
N8(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.AX(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dq(a){return A.bI(A.n(a))},
DM(a){var s=A.pp(a)
return A.bI(s==null?A.bh(a):s)},
DC(a){var s
if(a instanceof A.hB)return a.lL()
s=a instanceof A.ej?A.pp(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bY(a).a
if(Array.isArray(a))return A.a0(a)
return A.bh(a)},
bI(a){var s=a.r
return s==null?a.r=new A.p5(a):s},
N0(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.km(v.typeUniverse,A.DC(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.FH(v.typeUniverse,s,A.DC(q[r]))
return A.km(v.typeUniverse,s,a)},
bJ(a){return A.bI(A.AX(v.typeUniverse,a,!1))},
Lz(a){var s=this
s.b=A.Mb(s)
return s.b(a)},
Mb(a){var s,r,q,p
if(a===t.K)return A.LI
if(A.f9(a))return A.LM
s=a.w
if(s===6)return A.Lw
if(s===1)return A.Gb
if(s===7)return A.LD
r=A.Ma(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f9)){a.f="$i"+q
if(q==="q")return A.LG
if(a===t.m)return A.LF
return A.LL}}else if(s===10){p=A.MU(a.x,a.y)
return p==null?A.Gb:p}return A.Lu},
Ma(a){if(a.w===8){if(a===t.S)return A.av
if(a===t.W||a===t.cZ)return A.LH
if(a===t.N)return A.LK
if(a===t.y)return A.bx}return null},
Ly(a){var s=this,r=A.Lt
if(A.f9(s))r=A.L4
else if(s===t.K)r=A.L3
else if(A.hW(s)){r=A.Lv
if(s===t.U)r=A.be
else if(s===t.x)r=A.a6
else if(s===t.o9)r=A.FW
else if(s===t.jh)r=A.G_
else if(s===t.dA)r=A.FX
else if(s===t.B)r=A.FY}else if(s===t.S)r=A.ap
else if(s===t.N)r=A.F
else if(s===t.y)r=A.hN
else if(s===t.cZ)r=A.FZ
else if(s===t.W)r=A.f1
else if(s===t.m)r=A.bf
s.a=r
return s.a(a)},
Lu(a){var s=this
if(a==null)return A.hW(s)
return A.Nk(v.typeUniverse,A.Ng(a,s),s)},
Lw(a){if(a==null)return!0
return this.x.b(a)},
LL(a){var s,r=this
if(a==null)return A.hW(r)
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.dp(a)[s]},
LG(a){var s,r=this
if(a==null)return A.hW(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.l)return!!a[s]
return!!J.dp(a)[s]},
LF(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.l)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Ga(a){if(typeof a=="object"){if(a instanceof A.l)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Lt(a){var s=this
if(a==null){if(A.hW(s))return a}else if(s.b(a))return a
throw A.aP(A.G4(a,s),new Error())},
Lv(a){var s=this
if(a==null||s.b(a))return a
throw A.aP(A.G4(a,s),new Error())},
G4(a,b){return new A.ki("TypeError: "+A.Ft(a,A.bV(b,null)))},
Ft(a,b){return A.ip(a)+": type '"+A.bV(A.DC(a),null)+"' is not a subtype of type '"+b+"'"},
cd(a,b){return new A.ki("TypeError: "+A.Ft(a,b))},
LD(a){var s=this
return s.x.b(a)||A.D2(v.typeUniverse,s).b(a)},
LI(a){return a!=null},
L3(a){if(a!=null)return a
throw A.aP(A.cd(a,"Object"),new Error())},
LM(a){return!0},
L4(a){return a},
Gb(a){return!1},
bx(a){return!0===a||!1===a},
hN(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aP(A.cd(a,"bool"),new Error())},
FW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aP(A.cd(a,"bool?"),new Error())},
f1(a){if(typeof a=="number")return a
throw A.aP(A.cd(a,"double"),new Error())},
FX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aP(A.cd(a,"double?"),new Error())},
av(a){return typeof a=="number"&&Math.floor(a)===a},
ap(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aP(A.cd(a,"int"),new Error())},
be(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aP(A.cd(a,"int?"),new Error())},
LH(a){return typeof a=="number"},
FZ(a){if(typeof a=="number")return a
throw A.aP(A.cd(a,"num"),new Error())},
G_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aP(A.cd(a,"num?"),new Error())},
LK(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.aP(A.cd(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aP(A.cd(a,"String?"),new Error())},
bf(a){if(A.Ga(a))return a
throw A.aP(A.cd(a,"JSObject"),new Error())},
FY(a){if(a==null)return a
if(A.Ga(a))return a
throw A.aP(A.cd(a,"JSObject?"),new Error())},
Go(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bV(a[q],b)
return s},
M0(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Go(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bV(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
G8(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.j([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bV(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bV(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bV(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bV(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bV(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bV(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bV(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bV(a.x,b)+">"
if(m===8){p=A.Mh(a.x)
o=a.y
return o.length>0?p+("<"+A.Go(o,b)+">"):p}if(m===10)return A.M0(a,b)
if(m===11)return A.G8(a,b,null)
if(m===12)return A.G8(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
Mh(a){var s=A.Hb(a)
if(s!=null)return s
return"minified:"+a},
KS(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
KR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.AX(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kl(a,5,"#")
q=A.B6(s)
for(p=0;p<s;++p)q[p]=r
o=A.kk(a,b,q)
n[b]=o
return o}else return m},
KQ(a,b){return A.FU(a.tR,b)},
KP(a,b){return A.FU(a.eT,b)},
AX(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.FG(a,null,b,!1)
r.set(b,s)
return s},
km(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.FG(a,b,c,!0)
q.set(c,r)
return r},
FH(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Do(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
FG(a,b,c,d){return A.KF(A.Kz(a,b,c,d))},
e5(a,b){b.a=A.Ly
b.b=A.Lz
return b},
kl(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cm(null,null)
s.w=b
s.as=c
r=A.e5(a,s)
a.eC.set(c,r)
return r},
FE(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.KN(a,b,r,c)
a.eC.set(r,s)
return s},
KN(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f9(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.hW(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cm(null,null)
q.w=6
q.x=b
q.as=c
return A.e5(a,q)},
FD(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.KL(a,b,r,c)
a.eC.set(r,s)
return s},
KL(a,b,c,d){var s,r
if(d){s=b.w
if(A.f9(b)||b===t.K)return b
else if(s===1)return A.kk(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cm(null,null)
r.w=7
r.x=b
r.as=c
return A.e5(a,r)},
KO(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cm(null,null)
s.w=13
s.x=b
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
kj(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
KK(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kk(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cm(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e5(a,r)
a.eC.set(p,q)
return q},
Do(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cm(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e5(a,o)
a.eC.set(q,n)
return n},
FF(a,b,c){var s,r,q="+"+(b+"("+A.kj(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cm(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
FC(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kj(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kj(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.KK(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cm(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e5(a,p)
a.eC.set(r,o)
return o},
Dp(a,b,c,d){var s,r=b.as+("<"+A.kj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.KM(a,b,c,r,d)
a.eC.set(r,s)
return s},
KM(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.B6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e7(a,b,r,0)
m=A.hS(a,c,r,0)
return A.Dp(a,n,m,c!==m)}}l=new A.cm(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e5(a,l)},
Kz(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
KF(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.KB(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Fy(a,r,l,k,!1)
else if(q===46)r=A.Fy(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eX(a.u,a.e,k.pop()))
break
case 94:k.push(A.KO(a.u,k.pop()))
break
case 35:k.push(A.kl(a.u,5,"#"))
break
case 64:k.push(A.kl(a.u,2,"@"))
break
case 126:k.push(A.kl(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.KD(a,k)
break
case 38:A.KC(a,k)
break
case 63:p=a.u
k.push(A.FE(p,A.eX(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.FD(p,A.eX(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.KA(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Fz(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.KG(a.u,a.e,o)
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
KB(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Fy(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.KS(s,o.x)[p]
if(n==null)A.u('No "'+p+'" in "'+A.JE(o)+'"')
d.push(A.km(s,o,n))}else d.push(p)
return m},
KD(a,b){var s,r=a.u,q=A.Fx(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kk(r,p,q))
else{s=A.eX(r,a.e,p)
switch(s.w){case 11:b.push(A.Dp(r,s,q,a.n))
break
default:b.push(A.Do(r,s,q))
break}}},
KA(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Fx(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eX(p,a.e,o)
q=new A.oy()
q.a=s
q.b=n
q.c=m
b.push(A.FC(p,r,q))
return
case-4:b.push(A.FF(p,b.pop(),s))
return
default:throw A.b(A.kY("Unexpected state under `()`: "+A.p(o)))}},
KC(a,b){var s=b.pop()
if(0===s){b.push(A.kl(a.u,1,"0&"))
return}if(1===s){b.push(A.kl(a.u,4,"1&"))
return}throw A.b(A.kY("Unexpected extended operation "+A.p(s)))},
Fx(a,b){var s=b.splice(a.p)
A.Fz(a.u,a.e,s)
a.p=b.pop()
return s},
eX(a,b,c){if(typeof c=="string")return A.kk(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.KE(a,b,c)}else return c},
Fz(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eX(a,b,c[s])},
KG(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eX(a,b,c[s])},
KE(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kY("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kY("Bad index "+c+" for "+b.l(0)))},
Nk(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aU(a,b,null,c,null)
r.set(c,s)}return s},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f9(d))return!0
s=b.w
if(s===4)return!0
if(A.f9(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aU(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aU(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aU(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aU(a,b.x,c,d,e))return!1
return A.aU(a,A.D2(a,b),c,d,e)}if(s===6)return A.aU(a,p,c,d,e)&&A.aU(a,b.x,c,d,e)
if(q===7){if(A.aU(a,b,c,d.x,e))return!0
return A.aU(a,b,c,A.D2(a,d),e)}if(q===6)return A.aU(a,b,c,p,e)||A.aU(a,b,c,d.x,e)
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
if(!A.aU(a,j,c,i,e)||!A.aU(a,i,e,j,c))return!1}return A.G9(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.G9(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.LE(a,b,c,d,e)}if(o&&q===10)return A.LJ(a,b,c,d,e)
return!1},
G9(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
LE(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.km(a,b,r[o])
return A.FV(a,p,null,c,d.y,e)}return A.FV(a,b.y,null,c,d.y,e)},
FV(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aU(a,b[s],d,e[s],f))return!1
return!0},
LJ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aU(a,r[s],c,q[s],e))return!1
return!0},
hW(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.f9(a))if(s!==6)r=s===7&&A.hW(a.x)
return r},
f9(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
FU(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
B6(a){return a>0?new Array(a):v.typeUniverse.sEA},
cm:function cm(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
oy:function oy(){this.c=this.b=this.a=null},
p5:function p5(a){this.a=a},
ov:function ov(){},
ki:function ki(a){this.a=a},
K5(){var s,r,q
if(self.scheduleImmediate!=null)return A.Ml()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e9(new A.yR(s),1)).observe(r,{childList:true})
return new A.yQ(s,r,q)}else if(self.setImmediate!=null)return A.Mm()
return A.Mn()},
K6(a){self.scheduleImmediate(A.e9(new A.yS(a),0))},
K7(a){self.setImmediate(A.e9(new A.yT(a),0))},
K8(a){A.Dc(B.D,a)},
Dc(a,b){var s=B.c.L(a.a,1000)
return A.KI(s<0?0:s,b)},
F5(a,b){var s=B.c.L(a.a,1000)
return A.KJ(s<0?0:s,b)},
KI(a,b){var s=new A.kh(!0)
s.p6(a,b)
return s},
KJ(a,b){var s=new A.kh(!1)
s.p7(a,b)
return s},
h(a){return new A.jL(new A.w($.D,a.i("w<0>")),a.i("jL<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.G0(a,b)},
e(a,b){b.aC(a)},
d(a,b){b.bQ(A.C(a),A.ae(a))},
G0(a,b){var s,r,q=new A.Bk(b),p=new A.Bl(b)
if(a instanceof A.w)a.mp(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.b5(q,p,s)
else{r=new A.w($.D,t._)
r.a=8
r.c=a
r.mp(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.D.fA(new A.BD(s),t.H,t.S,t.z)},
bT(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.d2(null)
else{s=c.a
s===$&&A.t()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.C(a)
q=A.ae(a)
s.am(new A.am(r,q))}else{s=A.C(a)
r=A.ae(a)
q=c.a
q===$&&A.t()
q.bf(s,r)
c.a.q()}return}if(a instanceof A.k2){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.t()
r.t(0,s)
A.kH(new A.Bi(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.t()
s.tR(p,!1).W(new A.Bj(c,b),t.P)
return}}A.G0(a,b)},
Gs(a){var s=a.a
s===$&&A.t()
return new A.b7(s,A.n(s).i("b7<1>"))},
K9(a,b){var s=new A.od(b.i("od<0>"))
s.oZ(a,b)
return s},
Gc(a,b){return A.K9(a,b)},
Kv(a){return new A.k2(a,1)},
e0(a){return new A.k2(a,0)},
FB(a,b,c){return 0},
i4(a){var s
if(t.C.b(a)){s=a.gcp()
if(s!=null)return s}return B.Q},
iz(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.C(q)
r=A.ae(q)
p=new A.w($.D,b.i("w<0>"))
o=s
n=r
m=A.kt(o,n)
if(m==null)o=new A.am(o,n==null?A.i4(o):n)
else o=m
p.cr(o)
return p}return b.i("y<0>").b(l)?l:A.bw(l,b)},
ba(a,b){var s=a==null?b.a(a):a,r=new A.w($.D,b.i("w<0>"))
r.aE(s)
return r},
IL(a,b){var s
if(!b.b(null))throw A.b(A.az(null,"computation","The type parameter is not nullable"))
s=new A.w($.D,b.i("w<0>"))
A.c9(a,new A.t9(null,s,b))
return s},
CH(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.D,b.i("w<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.tb(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.b5(new A.ta(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.d2(A.j([],b.i("z<0>")))
return n}i.a=A.a7(n,null,!1,b.i("0?"))}catch(l){p=A.C(l)
o=A.ae(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kt(m,k)
if(j==null)m=new A.am(m,k==null?A.i4(m):k)
else m=j
n.cr(m)
return n}else{i.d=p
i.c=o}}return f},
CG(a,b,c,d){var s=new A.t4(d,null,b,c),r=$.D,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fA(s,c.i("0/"),t.K,t.l)
a.dH(new A.cb(q,2,null,s,a.$ti.i("@<1>").X(c).i("cb<1,2>")))
return q},
IJ(a,b){var s,r,q,p=A.j([],b.i("z<k0<0>>"))
for(s=a.length,r=b.i("k0<0>"),q=0;q<a.length;a.length===s||(0,A.r)(a),++q)p.push(new A.k0(a[q],r))
if(p.length===0)return A.ba(A.j([],b.i("z<0>")),b.i("q<0>"))
s=new A.w($.D,b.i("w<q<0>>"))
A.Kp(p,new A.t5(new A.ao(s,b.i("ao<q<0>>")),p,b))
return s},
LQ(a){return a!=null},
Kp(a,b){var s,r={},q=r.a=r.b=0,p=new A.zQ(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.r)(a),++q)a[q].ty(p)},
kt(a,b){var s,r,q,p=$.D
if(p===B.i)return null
s=p.mW(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mR(r,q)
return s},
f2(a,b){var s
if($.D!==B.i){s=A.kt(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcp()
if(b==null){A.mR(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.C.b(a))A.mR(a,b)
return new A.am(a,b)},
Ko(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bw(a,b){var s=new A.w($.D,b.i("w<0>"))
s.a=8
s.c=a
return s},
zW(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.D5()
b.cr(new A.am(new A.bA(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.m2(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eV()
b.h0(p.a)
A.eT(b,q)
return}b.a^=2
b.b.cY(new A.zX(p,b))},
eT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fh(r.a,r.b)}return}s.a=b
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
f=!(f===k||f.gcd()===k.gcd())}else f=!1
if(f){f=g.a
r=f.c
f.b.fh(r.a,r.b)
return}j=$.D
if(j!==k)$.D=k
else j=null
f=s.a.c
if((f&15)===8)new A.A0(s,g,p).$0()
else if(q){if((f&1)!==0)new A.A_(s,m).$0()}else if((f&2)!==0)new A.zZ(g,s).$0()
if(j!=null)$.D=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hp(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.zW(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hp(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
Gi(a,b){if(t.ng.b(a))return b.fA(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dr(a,t.z,t.K)
throw A.b(A.az(a,"onError",u.w))},
LP(){var s,r
for(s=$.hQ;s!=null;s=$.hQ){$.kv=null
r=s.b
$.hQ=r
if(r==null)$.ku=null
s.a.$0()}},
Mc(){$.DA=!0
try{A.LP()}finally{$.kv=null
$.DA=!1
if($.hQ!=null)$.DY().$1(A.GE())}},
Gq(a){var s=new A.oc(a),r=$.ku
if(r==null){$.hQ=$.ku=s
if(!$.DA)$.DY().$1(A.GE())}else $.ku=r.b=s},
M9(a){var s,r,q,p=$.hQ
if(p==null){A.Gq(a)
$.kv=$.ku
return}s=new A.oc(a)
r=$.kv
if(r==null){s.b=p
$.hQ=$.kv=s}else{q=r.b
s.b=q
$.kv=r.b=s
if(q==null)$.ku=s}},
kH(a){var s,r=null,q=$.D
if(B.i===q){A.BB(r,r,B.i,a)
return}if(B.i===q.gjK().a)s=B.i.gcd()===q.gcd()
else s=!1
if(s){A.BB(r,r,q,q.bW(a,t.H))
return}s=$.D
s.cY(s.f2(a))},
D7(a,b){var s=null,r=b.i("cT<0>"),q=new A.cT(s,s,s,s,r)
q.aA(a)
q.lk()
return new A.b7(q,r.i("b7<1>"))},
O6(a,b){return new A.cv(A.cw(a,"stream",t.K),b.i("cv<0>"))},
nn(a,b,c,d,e,f){return e?new A.hI(b,c,d,a,f.i("hI<0>")):new A.cT(b,c,d,a,f.i("cT<0>"))},
dQ(a,b,c){return new A.jM(b,a,c.i("jM<0>"))},
pl(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.C(q)
r=A.ae(q)
$.D.fh(s,r)}},
Km(a,b,c,d,e,f){var s=$.D,r=e?1:0,q=c!=null?32:0,p=A.oh(s,b,f),o=A.z5(s,c),n=d==null?A.BE():d
return new A.dZ(a,p,o,s.bW(n,t.H),s,r|q,f.i("dZ<0>"))},
K4(a){return new A.yN(a)},
oh(a,b,c){var s=b==null?A.Mp():b
return a.dr(s,t.H,c)},
z5(a,b){if(b==null)b=A.Mq()
if(t.b9.b(b))return a.fA(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dr(b,t.z,t.K)
throw A.b(A.Q("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
LR(a){},
LT(a,b){$.D.fh(a,b)},
LS(){},
Fs(a,b){var s=$.D,r=new A.ht(s,b.i("ht<0>"))
A.kH(r.glZ())
if(a!=null)r.c=s.bW(a,t.H)
return r},
Lc(a,b,c){var s=a.A()
if(s!==$.ec())s.b0(new A.Bn(b,c))
else b.am(c)},
Ld(a,b,c){var s=a.A()
if(s!==$.ec())s.b0(new A.Bo(b,c))
else b.cs(c)},
c9(a,b){var s=$.D
if(s===B.i)return s.k7(a,b)
return s.k7(a,s.f2(b))},
xZ(a,b){var s,r=$.D
if(r===B.i)return r.k6(a,b)
s=r.hK(b,t.hU)
return $.D.k6(a,s)},
pu(a,b,c,d){return A.M8(a,c,b,d)},
M8(a,b,c,d){return $.D.n_(c,b).aY(a,d)},
M6(a,b,c,d,e){A.kz(d,e)},
kz(a,b){A.M9(new A.By(a,b))},
Bz(a,b,c,d){var s,r=$.D
if(r===c)return d.$0()
$.D=c
s=r
try{r=d.$0()
return r}finally{$.D=s}},
BA(a,b,c,d,e){var s,r=$.D
if(r===c)return d.$1(e)
$.D=c
s=r
try{r=d.$1(e)
return r}finally{$.D=s}},
DB(a,b,c,d,e,f){var s,r=$.D
if(r===c)return d.$2(e,f)
$.D=c
s=r
try{r=d.$2(e,f)
return r}finally{$.D=s}},
Gm(a,b,c,d){return d},
Gn(a,b,c,d){return d},
Gl(a,b,c,d){return d},
M5(a,b,c,d,e){return null},
BB(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gcd()
r=c.gcd()
d=s!==r?c.f2(d):c.jY(d,t.H)}A.Gq(d)},
M4(a,b,c,d,e){return A.Dc(d,B.i!==c?c.jY(e,t.H):e)},
M3(a,b,c,d,e){e=c.u3(e,t.H,t.hU)
return A.F5(d,e)},
M7(a,b,c,d){A.H_(d)},
Gk(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.CI(o,o,o,s,s)
r.F(0,e)}else r=o
s=new A.oo(c.gmc(),c.gmg(),c.gme(),c.gm8(),c.gm9(),c.gm7(),c.glD(),c.gjK(),c.glv(),c.glu(),c.gm3(),c.glI(),c.gjs(),c.gjU(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.pe(s,q)
p=d.a
if(p!=null)s.as=new A.pd(s,p)}if(r!=null)s.at=new A.pf(s,r)
return s},
yR:function yR(a){this.a=a},
yQ:function yQ(a,b,c){this.a=a
this.b=b
this.c=c},
yS:function yS(a){this.a=a},
yT:function yT(a){this.a=a},
kh:function kh(a){this.a=a
this.b=null
this.c=0},
AV:function AV(a,b){this.a=a
this.b=b},
AU:function AU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jL:function jL(a,b){this.a=a
this.b=!1
this.$ti=b},
Bk:function Bk(a){this.a=a},
Bl:function Bl(a){this.a=a},
BD:function BD(a){this.a=a},
Bi:function Bi(a,b){this.a=a
this.b=b},
Bj:function Bj(a,b){this.a=a
this.b=b},
od:function od(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
yV:function yV(a){this.a=a},
yW:function yW(a){this.a=a},
yY:function yY(a){this.a=a},
yZ:function yZ(a,b){this.a=a
this.b=b},
yX:function yX(a,b){this.a=a
this.b=b},
yU:function yU(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
p2:function p2(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hH:function hH(a,b){this.a=a
this.$ti=b},
am:function am(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
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
jR:function jR(){},
jM:function jM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ta:function ta(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
t4:function t4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nG:function nG(a,b){this.a=a
this.b=b},
t5:function t5(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b,c){this.c=a
this.d=b
this.$ti=c},
k0:function k0(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
zR:function zR(a,b){this.a=a
this.b=b},
zS:function zS(a,b){this.a=a
this.b=b},
zQ:function zQ(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(){},
aL:function aL(a,b){this.a=a
this.$ti=b},
ao:function ao(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e){var _=this
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
zT:function zT(a,b){this.a=a
this.b=b},
zY:function zY(a,b){this.a=a
this.b=b},
zX:function zX(a,b){this.a=a
this.b=b},
zV:function zV(a,b){this.a=a
this.b=b},
zU:function zU(a,b){this.a=a
this.b=b},
A0:function A0(a,b,c){this.a=a
this.b=b
this.c=c},
A1:function A1(a,b){this.a=a
this.b=b},
A2:function A2(a){this.a=a},
A_:function A_(a,b){this.a=a
this.b=b},
zZ:function zZ(a,b){this.a=a
this.b=b},
A3:function A3(a,b){this.a=a
this.b=b},
A4:function A4(a,b,c){this.a=a
this.b=b
this.c=c},
A5:function A5(a,b){this.a=a
this.b=b},
oc:function oc(a){this.a=a
this.b=null},
aa:function aa(){},
xA:function xA(a,b){this.a=a
this.b=b},
xB:function xB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xC:function xC(a,b){this.a=a
this.b=b},
xD:function xD(a,b){this.a=a
this.b=b},
xy:function xy(a){this.a=a},
xz:function xz(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(){},
e3:function e3(){},
AN:function AN(a){this.a=a},
AM:function AM(a){this.a=a},
p3:function p3(){},
jN:function jN(){},
cT:function cT(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
hI:function hI(a,b,c,d,e){var _=this
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
dZ:function dZ(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
o9:function o9(){},
yN:function yN(a){this.a=a},
yM:function yM(a){this.a=a},
ke:function ke(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b1:function b1(){},
z7:function z7(a,b,c){this.a=a
this.b=b
this.c=c},
z6:function z6(a){this.a=a},
hG:function hG(){},
ou:function ou(){},
ca:function ca(a,b){this.b=a
this.a=null
this.$ti=b},
hs:function hs(a,b){this.b=a
this.c=b
this.a=null},
zJ:function zJ(){},
e2:function e2(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
Au:function Au(a,b){this.a=a
this.b=b},
ht:function ht(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cv:function cv(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jW:function jW(a){this.$ti=a},
dj:function dj(a,b){this.b=a
this.$ti=b},
As:function As(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
Bn:function Bn(a,b){this.a=a
this.b=b},
Bo:function Bo(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
hw:function hw(a,b,c,d,e,f,g){var _=this
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
jX:function jX(a,b){this.a=a
this.$ti=b},
hE:function hE(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
Bf:function Bf(a,b){this.a=a
this.b=b},
Bh:function Bh(a,b){this.a=a
this.b=b},
Bg:function Bg(a,b){this.a=a
this.b=b},
Bd:function Bd(a,b){this.a=a
this.b=b},
Be:function Be(a,b){this.a=a
this.b=b},
Bc:function Bc(a,b){this.a=a
this.b=b},
B9:function B9(a,b){this.a=a
this.b=b},
pe:function pe(a,b){this.a=a
this.b=b},
B8:function B8(a,b){this.a=a
this.b=b},
B7:function B7(a,b){this.a=a
this.b=b},
Bb:function Bb(a,b){this.a=a
this.b=b},
Ba:function Ba(a,b){this.a=a
this.b=b},
pd:function pd(a,b){this.a=a
this.b=b},
pf:function pf(a,b){this.a=a
this.b=b},
pc:function pc(){},
oo:function oo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
zF:function zF(a,b,c){this.a=a
this.b=b
this.c=c},
zH:function zH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zE:function zE(a,b){this.a=a
this.b=b},
zG:function zG(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(){},
AB:function AB(a,b,c){this.a=a
this.b=b
this.c=c},
AA:function AA(a,b){this.a=a
this.b=b},
AC:function AC(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a){this.a=a},
By:function By(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
CI(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dh(d.i("@<0>").X(e).i("dh<1,2>"))
b=A.DI()}else{if(A.GI()===b&&A.GH()===a)return new A.e_(d.i("@<0>").X(e).i("e_<1,2>"))
if(a==null)a=A.DH()}else{if(b==null)b=A.DI()
if(a==null)a=A.DH()}return A.Kn(a,b,c,d,e)},
Fu(a,b){var s=a[b]
return s===a?null:s},
Dm(a,b,c){if(c==null)a[b]=a
else a[b]=c},
Dl(){var s=Object.create(null)
A.Dm(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Kn(a,b,c,d,e){var s=c!=null?c:new A.zD(d)
return new A.jT(a,b,s,d.i("@<0>").X(e).i("jT<1,2>"))},
dF(a,b,c,d){if(b==null){if(a==null)return new A.bC(c.i("@<0>").X(d).i("bC<1,2>"))
b=A.DI()}else{if(A.GI()===b&&A.GH()===a)return new A.iK(c.i("@<0>").X(d).i("iK<1,2>"))
if(a==null)a=A.DH()}return A.Ky(a,b,null,c,d)},
m(a,b,c){return A.GQ(a,new A.bC(b.i("@<0>").X(c).i("bC<1,2>")))},
v(a,b){return new A.bC(a.i("@<0>").X(b).i("bC<1,2>"))},
Ky(a,b,c,d,e){return new A.k3(a,b,new A.Aq(d),d.i("@<0>").X(e).i("k3<1,2>"))},
uQ(a){return new A.di(a.i("di<0>"))},
aM(a){return new A.di(a.i("di<0>"))},
as(a,b){return A.N4(a,new A.di(b.i("di<0>")))},
Dn(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hy(a,b,c){var s=new A.e1(a,b,c.i("e1<0>"))
s.c=a.e
return s},
Lk(a,b){return J.x(a,b)},
Ll(a){return J.a8(a)},
EB(a){if(a.length===0)return null
return B.b.ga1(a)},
bl(a,b,c){var s=A.dF(null,null,b,c)
a.a8(0,new A.uP(s,b,c))
return s},
cI(a,b,c){var s=A.dF(null,null,b,c)
s.F(0,a)
return s},
uR(a,b){var s,r,q=A.uQ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.t(0,b.a(a[r]))
return q},
d1(a,b){var s=A.uQ(b)
s.F(0,a)
return s},
J1(a,b){var s=t.bP
return J.E5(s.a(a),s.a(b))},
v9(a){var s,r
if(A.DO(a))return"{...}"
s=new A.a3("")
try{r={}
$.f3.push(a)
s.a+="{"
r.a=!0
a.a8(0,new A.va(r,s))
s.a+="}"}finally{$.f3.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
CR(a){return new A.iN(A.a7(A.J2(null),null,!1,a.i("0?")),a.i("iN<0>"))},
J2(a){return 8},
dh:function dh(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
A7:function A7(a){this.a=a},
A6:function A6(a){this.a=a},
e_:function e_(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jT:function jT(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
zD:function zD(a){this.a=a},
eU:function eU(a,b){this.a=a
this.$ti=b},
oz:function oz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
k3:function k3(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
Aq:function Aq(a){this.a=a},
di:function di(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Ar:function Ar(a){this.a=a
this.c=this.b=null},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
uP:function uP(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
oG:function oG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b3:function b3(){},
I:function I(){},
V:function V(){},
v8:function v8(a){this.a=a},
va:function va(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.$ti=b},
oI:function oI(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
p7:function p7(){},
iR:function iR(){},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
iN:function iN(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
oH:function oH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cn:function cn(){},
kc:function kc(){},
kn:function kn(){},
Gg(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.C(r)
q=A.a9(String(s),null,null)
throw A.b(q)}q=A.Bq(p)
return q},
Bq(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.oD(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.Bq(a[s])
return a},
L2(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.HE()
else s=new Uint8Array(o)
for(r=J.L(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
L1(a,b,c,d){var s=a?$.HD():$.HC()
if(s==null)return null
if(0===c&&d===b.length)return A.FS(s,b)
return A.FS(s,b.subarray(c,d))},
FS(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
E8(a,b,c,d,e,f){if(B.c.al(f,4)!==0)throw A.b(A.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a9("Invalid base64 padding, more than two '=' characters",a,b))},
Kd(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.az(b,"Not a byte value at index "+q+": 0x"+B.c.kJ(s.h(b,q),16),null))},
Kc(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.af(f,2),i=f&3,h=$.DZ()
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
if(i===3){if((j&3)!==0)throw A.b(A.a9(l,a,r))
s&2&&A.H(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a9(l,a,r))
s&2&&A.H(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.Fg(a,r+1,c,-m-1)}throw A.b(A.a9(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a9(k,a,r))},
Ka(a,b,c,d){var s=A.Kb(a,b,c),r=(d&3)+(s-b),q=B.c.af(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Hv()},
Kb(a,b,c){var s,r=c,q=r,p=0
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
Fg(a,b,c,d){var s,r
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
Iy(a){return B.d_.h(0,a.toLowerCase())},
EG(a,b,c){return new A.iL(a,b)},
Lo(a){return a.p()},
Kw(a,b){return new A.Am(a,[],A.MR())},
Kx(a,b,c){var s,r=new A.a3("")
A.Fw(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Fw(a,b,c,d){var s=A.Kw(b,c)
s.iK(a)},
FT(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oD:function oD(a,b){this.a=a
this.b=b
this.c=null},
Al:function Al(a){this.a=a},
oE:function oE(a){this.a=a},
Aj:function Aj(a,b,c){this.b=a
this.c=b
this.a=c},
B4:function B4(){},
B3:function B3(){},
kV:function kV(){},
p6:function p6(){},
kW:function kW(a){this.a=a},
AW:function AW(a,b){this.a=a
this.b=b},
l1:function l1(a){this.a=a},
i6:function i6(a){this.a=a},
of:function of(a){this.a=0
this.b=a},
z4:function z4(a){this.c=null
this.a=0
this.b=a},
z0:function z0(){},
yO:function yO(a,b){this.a=a
this.b=b},
l2:function l2(){},
oe:function oe(){this.a=0},
z_:function z_(a,b){this.a=a
this.b=b},
pV:function pV(){},
hn:function hn(a){this.a=a},
oi:function oi(a,b){this.a=a
this.b=b
this.c=0},
ld:function ld(){},
oY:function oY(a,b,c){this.a=a
this.b=b
this.$ti=c},
eR:function eR(a,b,c){this.a=a
this.b=b
this.$ti=c},
lf:function lf(){},
aE:function aE(){},
qQ:function qQ(a){this.a=a},
ep:function ep(){},
iL:function iL(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
tM:function tM(){},
mj:function mj(a){this.b=a},
Ak:function Ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mi:function mi(a){this.a=a},
An:function An(){},
Ao:function Ao(a,b){this.a=a
this.b=b},
Am:function Am(a,b,c){this.c=a
this.a=b
this.b=c},
mm:function mm(){},
mn:function mn(a){this.a=a},
nq:function nq(){},
AS:function AS(a,b){this.a=a
this.b=b},
kg:function kg(){},
p_:function p_(a){this.a=a},
B2:function B2(a,b,c){this.a=a
this.b=b
this.c=c},
nW:function nW(){},
nX:function nX(){},
pa:function pa(a){this.b=this.a=0
this.c=a},
B5:function B5(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jF:function jF(a){this.a=a},
dk:function dk(a){this.a=a
this.b=16
this.c=0},
pg:function pg(){},
Fq(a,b){var s=A.Kk(a,b)
if(s==null)throw A.b(A.a9("Could not parse BigInt",a,null))
return s},
Kh(a,b){var s,r,q=$.cf(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bj(0,$.E_()).fM(0,A.jO(s))
s=0
o=0}}if(b)return q.bF(0)
return q},
Fi(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Ki(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.u5(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.Fi(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.Fi(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cf()
l=A.bG(j,i)
return new A.aN(l===0?!1:c,i,l)},
Kk(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Hx().ef(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.Kh(p,q)
if(o!=null)return A.Ki(o,2,q)
return null},
bG(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
Dj(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
Fh(a){var s
if(a===0)return $.cf()
if(a===1)return $.fd()
if(a===2)return $.Hy()
if(Math.abs(a)<4294967296)return A.jO(B.c.iC(a))
s=A.Ke(a)
return s},
jO(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bG(4,s)
return new A.aN(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bG(1,s)
return new A.aN(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.af(a,16)
r=A.bG(2,s)
return new A.aN(r===0?!1:o,s,r)}r=B.c.L(B.c.gmI(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.L(a,65536)}r=A.bG(r,s)
return new A.aN(r===0?!1:o,s,r)},
Ke(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.Q("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cf()
r=$.Hw()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.H(r)
r[p]=0}q=J.pz(B.f.gab(r))
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
l=new A.aN(!1,m,4)
if(n<0)k=l.dD(0,-n)
else k=n>0?l.bG(0,n):l
if(s)return k.bF(0)
return k},
Dk(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.H(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.H(d)
d[s]=0}return b+c},
Fo(a,b,c,d){var s,r,q,p,o,n=B.c.L(c,16),m=B.c.al(c,16),l=16-m,k=B.c.bG(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dD(p,l)
r&2&&A.H(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bG((p&k)>>>0,m)}r&2&&A.H(d)
d[n]=q},
Fj(a,b,c,d){var s,r,q,p,o=B.c.L(c,16)
if(B.c.al(c,16)===0)return A.Dk(a,b,o,d)
s=b+o+1
A.Fo(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.H(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
Kj(a,b,c,d){var s,r,q,p,o=B.c.L(c,16),n=B.c.al(c,16),m=16-n,l=B.c.bG(1,n)-1,k=B.c.dD(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bG((q&l)>>>0,m)
s&2&&A.H(d)
d[r]=(p|k)>>>0
k=B.c.dD(q,n)}s&2&&A.H(d)
d[j]=k},
z1(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Kf(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}s&2&&A.H(e)
e[b]=r},
og(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}},
Fp(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.H(d)
d[e]=p&65535
r=B.c.L(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.H(d)
d[e]=n&65535
r=B.c.L(n,65536)}},
Kg(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iV((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Nc(a){return A.kE(a)},
CD(a,b){return new A.lI(new WeakMap(),a,b.i("lI<0>"))},
CE(a){},
zP(a,b){var s=$.Hz()
s=s==null?null:new s(A.e9(A.NL(a,b),1))
return new A.ox(s,b.i("ox<0>"))},
aK(a){var s=A.jf(a,null)
if(s!=null)return s
throw A.b(A.a9(a,null,null))},
MZ(a){var s=A.Js(a)
if(s!=null)return s
throw A.b(A.a9("Invalid double",a,null))},
IC(a,b){a=A.aP(a,new Error())
a.stack=b.l(0)
throw a},
a7(a,b,c,d){var s,r=c?J.CM(a,d):J.CL(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bE(a,b,c){var s,r=A.j([],c.i("z<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
P(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.i("z<0>"))
s=A.j([],b.i("z<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fF(a,b){var s=A.bE(a,!1,b)
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
return A.EV(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.JR(a,b,c)
if(r)a=J.Cw(a,c)
if(b>0)a=J.pD(a,b)
s=A.P(a,t.S)
return A.EV(s)},
JR(a,b,c){var s=a.length
if(b>=s)return""
return A.Ju(a,b,c==null||c>s?s:c)},
ag(a,b,c){return new A.et(a,A.CO(a,!1,b,c,!1,""))},
Nb(a,b){return a==null?b==null:a===b},
xE(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.p(s.gn())
while(s.k())}else{a+=A.p(s.gn())
while(s.k())a=a+c+A.p(s.gn())}return a},
De(){var s,r,q=A.Jn()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.Fc
if(s!=null&&q===$.Fb)return s
r=A.nV(q)
$.Fc=r
$.Fb=q
return r},
p9(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.HA()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bu(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
KX(a){var s,r,q
if(!$.HB())return A.KY(a)
s=new URLSearchParams()
a.a8(0,new A.B1(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.B(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
D5(){return A.ae(new Error())},
CA(a,b,c,d,e,f,g){var s=A.Jv(a,b,c,d,e,f,g,0,!0)
return new A.aF(s==null?new A.rt(a,b,c,d,e,f,g,0).$0():s,0,!0)},
It(){return new A.aF(Date.now(),0,!1)},
lz(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ax(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ax(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.az(b,s,"Time including microseconds is outside valid range"))
A.cw(c,"isUtc",t.y)
return a},
Iu(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
En(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ly(a){if(a>=10)return""+a
return"0"+a},
cD(a,b,c){return new A.aB(a+1000*b+1e6*c)},
fv(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.az(b,"name","No enum value with that name"))},
ip(a){if(typeof a=="number"||A.bx(a)||a==null)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return A.EU(a)},
Ep(a,b){A.cw(a,"error",t.K)
A.cw(b,"stackTrace",t.l)
A.IC(a,b)},
kY(a){return new A.kX(a)},
Q(a,b){return new A.bA(!1,null,b,a)},
az(a,b,c){return new A.bA(!0,a,b,c)},
kU(a,b){return a},
aZ(a){var s=null
return new A.d5(s,s,!1,s,s,a)},
x6(a,b){return new A.d5(null,null,!0,a,b,"Value not in range")},
ax(a,b,c,d,e){return new A.d5(b,c,!0,a,d,"Invalid value")},
EZ(a,b,c,d){if(a<b||a>c)throw A.b(A.ax(a,b,c,d,null))
return a},
Jy(a,b,c,d){return A.Ez(a,d,b,null,c)},
bd(a,b,c){if(0>a||a>c)throw A.b(A.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ax(b,a,c,"end",null))
return b}return c},
bc(a,b){if(a<0)throw A.b(A.ax(a,0,null,b,null))
return a},
Ey(a,b){var s=b.b
return new A.iC(s,!0,a,null,"Index out of range")},
m9(a,b,c,d,e){return new A.iC(b,!0,a,e,"Index out of range")},
Ez(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.m9(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cR(a)},
F9(a){return new A.nP(a)},
A(a){return new A.bm(a)},
aA(a){return new A.li(a)},
Eq(a){return new A.ow(a)},
a9(a,b,c){return new A.bk(a,b,c)},
IS(a,b,c){var s,r
if(A.DO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
$.f3.push(a)
try{A.LN(a,s)}finally{$.f3.pop()}r=A.xE(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tJ(a,b,c){var s,r
if(A.DO(a))return b+"..."+c
s=new A.a3(b)
$.f3.push(a)
try{r=s
r.a=A.xE(r.a,a,", ")}finally{$.f3.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
LN(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.p(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.k()){if(j<=4){b.push(A.p(p))
return}r=A.p(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.k();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.p(p)
r=A.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
EJ(a,b,c,d,e){return new A.eh(a,b.i("@<0>").X(c).X(d).X(e).i("eh<1,2,3,4>"))},
c4(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a8(a)
b=J.a8(b)
return A.ha(A.ay(A.ay($.fe(),s),b))}if(B.d===d){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
return A.ha(A.ay(A.ay(A.ay($.fe(),s),b),c))}if(B.d===e){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
return A.ha(A.ay(A.ay(A.ay(A.ay($.fe(),s),b),c),d))}if(B.d===f){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
return A.ha(A.ay(A.ay(A.ay(A.ay(A.ay($.fe(),s),b),c),d),e))}if(B.d===g){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
f=J.a8(f)
return A.ha(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fe(),s),b),c),d),e),f))}s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
f=J.a8(f)
g=J.a8(g)
g=A.ha(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fe(),s),b),c),d),e),f),g))
return g},
vB(a){var s,r=$.fe()
for(s=J.E(a);s.k();)r=A.ay(r,J.a8(s.gn()))
return A.ha(r)},
G1(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nV(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Fa(a4<a4?B.a.B(a5,0,a4):a5,5,a3).gnz()
else if(s===32)return A.Fa(B.a.B(a5,5,a4),0,a3).gnz()}r=A.a7(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Gp(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Gp(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+B.a.B(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.ds(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.ad(a5,"http",0)){if(i&&o+3===n&&B.a.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.ds(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.ad(a5,"https",0)){if(i&&o+4===n&&B.a.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.ds(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cc(a4<a5.length?B.a.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Dr(a5,0,q)
else{if(q===0)A.hK(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.FO(a5,c,p-1):""
a=A.FM(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jf(B.a.B(a5,i,n),a3)
d=A.AY(a0==null?A.u(A.a9("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.FN(a5,n,m,a3,j,a!=null)
a2=m<l?A.AZ(a5,m+1,l,a3):a3
return A.kp(j,b,a,d,a1,a2,l<a4?A.FL(a5,l+1,a4):a3)},
K0(a){return A.Du(a,0,a.length,B.o,!1)},
nU(a,b,c){throw A.b(A.a9("Illegal IPv4 address, "+a,b,c))},
JY(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.nU("each part must be in the range 0..255",a,r)}A.nU("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.nU(k,a,q)}l=p+1
s&2&&A.H(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.nU(k,a,q)
p=l}A.nU("IPv4 address should contain exactly 4 parts",a,q)},
JZ(a,b,c){var s
if(b===c)throw A.b(A.a9("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.K_(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Fd(a,b,c)
return!0},
K_(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
Fd(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.yf(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.JY(a1,o,a3,s,q*2)
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
B.f.kh(s,c,b,0)}}return s},
kp(a,b,c,d,e,f,g){return new A.ko(a,b,c,d,e,f,g)},
FI(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hK(a,b,c){throw A.b(A.a9(c,a,b))},
KU(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.D(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
AY(a,b){if(a!=null&&a===A.FI(b))return null
return a},
FM(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hK(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.KV(a,r,s)
if(p<s){o=p+1
q=A.FR(a,B.a.ad(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.JZ(a,r,s)
m=B.a.B(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.ce(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.FR(a,B.a.ad(a,"25",o)?s+3:o,c,"%25")}else q=""
A.Fd(a,b,s)
return"["+B.a.B(a,b,s)+q+"]"}return A.L_(a,b,c)},
KV(a,b,c){var s=B.a.ce(a,"%",b)
return s>=b&&s<c?s:c},
FR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a3(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.Ds(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a3("")
m=i.a+=B.a.B(a,r,s)
if(n)o=B.a.B(a,s,s+3)
else if(o==="%")A.hK(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a3("")
if(r<s){i.a+=B.a.B(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.B(a,r,s)
if(i==null){i=new A.a3("")
n=i}else n=i
n.a+=j
m=A.Dq(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.B(a,b,c)
if(r<c){j=B.a.B(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
L_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.Ds(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a3("")
l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.B(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a3("")
if(r<s){q.a+=B.a.B(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hK(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a3("")
m=q}else m=q
m.a+=l
k=A.Dq(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.B(a,b,c)
if(r<c){l=B.a.B(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
Dr(a,b,c){var s,r,q
if(b===c)return""
if(!A.FK(a.charCodeAt(b)))A.hK(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hK(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.B(a,b,c)
return A.KT(r?a.toLowerCase():a)},
KT(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
FO(a,b,c){if(a==null)return""
return A.kq(a,b,c,16,!1,!1)},
FN(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kq(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.KZ(s,e,f)},
KZ(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.Dt(a,!s||c)
return A.f0(a)},
AZ(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.Q("Both query and queryParameters specified",null))
return A.kq(a,b,c,256,!0,!1)}if(d==null)return null
return A.KX(d)},
KY(a){var s={},r=new A.a3("")
s.a=""
a.a8(0,new A.B_(new A.B0(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
FL(a,b,c){if(a==null)return null
return A.kq(a,b,c,256,!0,!1)},
Ds(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.C3(s)
p=A.C3(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bu(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.B(a,b,b+3).toUpperCase()
return null},
Dq(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.ml(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dS(s,0,null)},
kq(a,b,c,d,e,f){var s=A.FQ(a,b,c,d,e,f)
return s==null?B.a.B(a,b,c):s},
FQ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.Ds(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hK(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.Dq(o)}if(p==null){p=new A.a3("")
l=p}else l=p
l.a=(l.a+=B.a.B(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.B(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
FP(a){if(B.a.S(a,"."))return!0
return B.a.bS(a,"/.")!==-1},
f0(a){var s,r,q,p,o,n
if(!A.FP(a))return a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.C(s,"/")},
Dt(a,b){var s,r,q,p,o,n
if(!A.FP(a))return!b?A.FJ(a):a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga1(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.FJ(s[0])
return B.b.C(s,"/")},
FJ(a){var s,r,q=a.length
if(q>=2&&A.FK(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.B(a,0,s)+"%3A"+B.a.ae(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
L0(a,b){if(a.vX("package")&&a.c==null)return A.Gr(b,0,b.length)
return-1},
KW(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.Q("Invalid URL encoding",null))}}return s},
Du(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.B(a,b,c)
else p=new A.cg(B.a.B(a,b,c))
else{p=A.j([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.Q("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.Q("Truncated URI",null))
p.push(A.KW(a,o+1))
o+=2}else p.push(r)}}return d.f4(p)},
FK(a){var s=a|32
return 97<=s&&s<=122},
Fa(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.j([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a9(k,a,r))}}if(q<0&&r>b)throw A.b(A.a9(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga1(j)
if(p!==44||r!==n+7||!B.a.ad(a,"base64",n+1))throw A.b(A.a9("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.ar.wh(a,m,s)
else{l=A.FQ(a,m,s,256,!0,!1)
if(l!=null)a=B.a.ds(a,m,s,l)}return new A.ye(a,j,c)},
Gp(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
FA(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.Gr(a.a,a.e,a.f)
return-1},
Gr(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
Lf(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
z2:function z2(){},
z3:function z3(){},
ox:function ox(a,b){this.a=a
this.$ti=b},
B1:function B1(a){this.a=a},
rt:function rt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a){this.a=a},
zK:function zK(){},
af:function af(){},
kX:function kX(a){this.a=a},
dd:function dd(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d5:function d5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iC:function iC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cR:function cR(a){this.a=a},
nP:function nP(a){this.a=a},
bm:function bm(a){this.a=a},
li:function li(a){this.a=a},
mI:function mI(){},
jx:function jx(){},
ow:function ow(a){this.a=a},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
mb:function mb(){},
o:function o(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(){},
l:function l(){},
p1:function p1(){},
jz:function jz(){this.b=this.a=0},
jo:function jo(a){this.a=a},
n5:function n5(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a3:function a3(a){this.a=a},
yf:function yf(a){this.a=a},
ko:function ko(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
B0:function B0(a,b){this.a=a
this.b=b},
B_:function B_(a){this.a=a},
ye:function ye(a,b,c){this.a=a
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
or:function or(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
lI:function lI(a,b,c){this.a=a
this.b=b
this.$ti=c},
J3(a){return a},
IV(a){return a},
D8(a){return a},
IT(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.FY(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
IK(a){return new v.G.Promise(A.bU(new A.t8(a)))},
mE:function mE(a){this.a=a},
t8:function t8(a){this.a=a},
t6:function t6(a){this.a=a},
t7:function t7(a){this.a=a},
Bu(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.L6,a)
s[$.fc()]=a
return s},
cV(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.L7,a)
s[$.fc()]=a
return s},
bU(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.L8,a)
s[$.fc()]=a
return s},
pi(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.L9,a)
s[$.fc()]=a
return s},
hP(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.La,a)
s[$.fc()]=a
return s},
Dy(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Lb,a)
s[$.fc()]=a
return s},
L6(a){return a.$0()},
L7(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
L8(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
L9(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
La(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Lb(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Ge(a){return a==null||A.bx(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
ps(a){if(A.Ge(a))return a
return new A.C8(new A.e_(t.mp)).$1(a)},
C0(a,b){return a[b]},
DF(a,b,c){return a[b].apply(a,c)},
MF(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.b.F(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a1(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.aL(s,b.i("aL<0>"))
a.then(A.e9(new A.Ce(r),1),A.e9(new A.Cf(r),1))
return s},
Gd(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
pq(a){if(A.Gd(a))return a
return new A.BO(new A.e_(t.mp)).$1(a)},
C8:function C8(a){this.a=a},
Ce:function Ce(a){this.a=a},
Cf:function Cf(a){this.a=a},
BO:function BO(a){this.a=a},
GU(a,b){return Math.max(a,b)},
EX(){return B.at},
EY(){return $.Cr()},
Ag:function Ag(){},
Ah:function Ah(a){this.a=a},
Ib(a,b,c){return J.E3(a,b,c)},
lF:function lF(){},
a4:function a4(){},
pX:function pX(a){this.a=a},
pY:function pY(a){this.a=a},
pZ:function pZ(a,b){this.a=a
this.b=b},
q_:function q_(a){this.a=a},
q0:function q0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q1:function q1(a){this.a=a},
lB:function lB(a){this.$ti=a},
iG:function iG(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b){this.a=a
this.$ti=b},
hJ:function hJ(){},
h0:function h0(a,b){this.a=a
this.$ti=b},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
lA:function lA(){},
EO(){throw A.b(A.Y(u.O))},
JX(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
mD:function mD(){},
nS:function nS(){},
aq(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dS(m,0,null)},
ch:function ch(a){this.a=a},
c0:function c0(){this.a=null},
m3:function m3(){},
td:function td(){},
cU(a){var s=new Uint32Array(A.b9(A.j([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.oW(s,r,a,q,new Uint32Array(16))},
oV:function oV(){},
AE:function AE(){},
oW:function oW(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kQ:function kQ(){},
q7:function q7(){},
iP:function iP(a){this.a=a},
js:function js(){},
v3:function v3(){},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
xk:function xk(){},
jt:function jt(a,b){this.b=a
this.c=b},
na:function na(a){this.a=a},
by(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lu(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
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
a5.$flags&2&&A.H(a5)
a5[0]=k
a5[1]=A.by(r)
a5[2]=A.by(q)
a5[3]=A.by(p)},
Em(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cZ(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.L(q,n),!1)
r.setUint32(12,B.c.al(q,n),!1)
p=J.bK(B.aB.gab(r),0,null)
o=new Uint32Array(4)
A.lu(o,a,b)
A.lu(o,a,p)
return J.bK(B.y.gab(o),0,null)},
lt:function lt(a,b,c){this.c=a
this.d=b
this.a=c},
r7:function r7(){},
op:function op(){},
oq:function oq(){},
pn(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kI()===B.P){a5=A.f4(a5)
a6=A.f4(a6)
a7=A.f4(a7)
a8=A.f4(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.aj[a5>>>24&255]^B.ah[a6>>>16&255]^B.ai[a7>>>8&255]^B.al[a8&255]^b3[r]
o=B.aj[a6>>>24&255]^B.ah[a7>>>16&255]^B.ai[a8>>>8&255]^B.al[a5&255]^b3[r+1]
n=B.aj[a7>>>24&255]^B.ah[a8>>>16&255]^B.ai[a5>>>8&255]^B.al[a6&255]^b3[r+2]
m=B.aj[a8>>>24&255]^B.ah[a5>>>16&255]^B.ai[a6>>>8&255]^B.al[a7&255]^b3[r+3]
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
if($.kI()===B.P){a1=A.f4(a1)
a2=A.f4(a2)
a3=A.f4(a3)
a4=A.f4(a4)}a9.$flags&2&&A.H(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
GA(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge8(),h=B.cZ.h(0,i.gm(0))
if(h==null)throw A.b(A.Q("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.E3(B.y.gab(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.H(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.kI()===B.P)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.al(m,k)
if(n===0)j=A.Gv((j<<8|j>>>24)>>>0)^B.cA[B.c.iV(m,k)-1]<<24
else if(o&&n===4)j=A.Gv(j)
r[m]=(j^r[m-k])>>>0}return r},
Gv(a){return(B.m[a>>>24&255]<<24|B.m[a>>>16&255]<<16|B.m[a>>>8&255]<<8|B.m[a&255])>>>0},
f4(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qT:function qT(){},
r8:function r8(){},
zz:function zz(){},
n0:function n0(a,b){this.a=a
this.b=b},
l3:function l3(){},
l4:function l4(){},
l5:function l5(){},
l6:function l6(){},
pR:function pR(){},
Gw(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.n0("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.ei)){s=J.Z(a)
if(B.a.S(s,"TypeError: "))s=B.a.ae(s,11)
a=new A.ei(s,b.b)}return a},
Gj(a,b,c){A.Ep(A.Gw(a,c),b)},
L5(a,b){return new A.dj(new A.Bm(a,b),t.fb)},
hR(a,b,c){return A.M_(a,b,c)},
M_(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hR=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$hR)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.Bv(e)
a1.r=new A.Bw(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a1(c.read(),k),$async$hR)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.C(b)
l=A.ae(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Gw(m,a)
k=l
j=a1.b
if(j>=4)A.u(a1.bI())
if((j&1)!==0){j=a1.gaO()
j.aK(d,k==null?B.Q:k)}s=15
return A.a(a1.q(),$async$hR)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.u7()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.u(a1.bI())
if((f&1)!==0)a1.gaO().aA(g)}g=a1.b
s=((g&1)!==0?(a1.gaO().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aL(new A.w($.D,j),i):g).a,$async$hR)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hR,r)},
la:function la(a){this.b=!1
this.c=a},
pU:function pU(a){this.a=a},
Bm:function Bm(a,b){this.a=a
this.b=b},
Bv:function Bv(a){this.a=a},
Bw:function Bw(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a},
pW:function pW(a){this.a=a},
Ei(a,b){return new A.ei(a,b)},
ei:function ei(a,b){this.a=a
this.b=b},
mw:function mw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Je(a,b){var s=t.N,r=A.j([],t.e8),q=$.DT()
if(!q.b.test(a))A.u(A.az(a,"method","Not a valid method"))
return new A.vt(A.v(s,s),r,a,b,A.dF(new A.l5(),new A.l6(),s,s))},
vt:function vt(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
vu:function vu(a,b){this.a=a
this.b=b},
JB(a,b){var s=new Uint8Array(0),r=$.DT()
if(!r.b.test(a))A.u(A.az(a,"method","Not a valid method"))
r=t.N
return new A.x9(s,a,b,A.dF(new A.l5(),new A.l6(),r,r))},
x9:function x9(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jB:function jB(){},
np:function np(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
Ic(a){return a.toLowerCase()},
ib:function ib(a,b,c){this.a=a
this.c=b
this.$ti=c},
J6(a){return A.NK("media type",a,new A.vb(a))},
CT(a,b,c){var s=t.N
if(c==null)s=A.v(s,s)
else{s=new A.ib(A.MG(),A.v(s,t.af),t.fo)
s.F(0,c)}return new A.fG(a.toLowerCase(),b.toLowerCase(),new A.cQ(s,t.ph))},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
vb:function vb(a){this.a=a},
vd:function vd(a){this.a=a},
vc:function vc(){},
N1(a){var s
a.mX($.HL(),"quoted string")
s=a.gkt().h(0,0)
return A.H6(B.a.B(s,1,s.length-1),$.HK(),new A.BV(),null)},
BV:function BV(){},
pQ:function pQ(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jb:function jb(){},
vP:function vP(a,b){this.a=a
this.b=b},
vQ:function vQ(a){this.a=a},
mO:function mO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
wl:function wl(){},
AK:function AK(a){this.a=a},
wa:function wa(){},
fQ(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aS("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aS("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aS('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.j
else if(j.b(o))n=A.bl(o,t.N,t.X)
else throw A.b(A.aS('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.u
else if(t.j.b(m)){for(j=J.L(m),k=0;k<j.gm(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aS('Record field "imgs"['+k+"] is present but not a string."))
j=j.f3(m,t.N)
l=j.cW(j)}else throw A.b(A.aS('Record field "imgs" is present but not a list.'))
return new A.d7(s,p,r,n,l)},
vT:function vT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w9:function w9(a){this.a=a},
w8:function w8(){},
w0:function w0(a,b,c){this.a=a
this.b=b
this.c=c},
w1:function w1(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vU:function vU(a,b){this.a=a
this.b=b},
vW:function vW(a,b){this.a=a
this.b=b},
vV:function vV(a,b){this.a=a
this.b=b},
vZ:function vZ(a){this.a=a},
w_:function w_(a,b){this.a=a
this.b=b},
vX:function vX(a){this.a=a},
w4:function w4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w5:function w5(){},
w6:function w6(a,b){this.a=a
this.b=b},
w7:function w7(){},
w2:function w2(a,b){this.a=a
this.b=b},
w3:function w3(){},
Jl(a,b,c,d,e,f){var s=A.ba(null,t.H)
return new A.wb(b,c,f,new A.wk(a,B.S,null),e,d,s)},
Jm(a){return 0.5+B.at.nd()},
jd:function jd(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
wb:function wb(a,b,c,d,e,f,g){var _=this
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
wk:function wk(a,b,c){this.a=a
this.b=b
this.c=c},
we:function we(){},
wi:function wi(a){this.a=a},
wj:function wj(a){this.a=a},
wf:function wf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wc:function wc(a,b,c){this.a=a
this.b=b
this.c=c},
wd:function wd(a){this.a=a},
wg:function wg(a){this.a=a},
wh:function wh(a){this.a=a},
AL:function AL(a,b){this.a=a
this.b=null
this.c=b},
IP(a,b,c){return new A.cG(a,b,c)},
iB(a,b){return new A.dz(a)},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m6:function m6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a){this.a=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
vR:function vR(a){this.a=a},
vS:function vS(a){this.a=a},
Ir(c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="recordId",b0="field",b1="imgs",b2="name",b3="expectedSha256",b4="allowVolatileBlobs",b5="session",b6="index",b7="refId",b8="token",b9="id",c0="spec",c1="store"
switch(c2){case"open":s=c3.h(0,"stores")
r=c3.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.N("Malformed open payload."))
q=A.j([],t.d)
for(p=J.L(s),o=0;o<p.gm(s);++o)q.push(A.El(p.h(s,o),"stores["+o+"]"))
p=t.N
p=A.v(p,p)
for(n=r.ga7(),n=n.gu(n);n.k();){m=n.gn()
p.j(0,J.Z(m.a),A.DE(m.b,"fingerprint"))}return new A.mH(q,p)
case"capabilities":return B.bG
case"health":return B.bJ
case"close":return B.bH
case"fileBeginUpload":l=c3.h(0,"size")
if(!A.av(l))throw A.b(A.N("Malformed fileBeginUpload payload."))
return new A.lN(A.aQ(c3),A.b2(c3,a9),A.kx(c3.h(0,b0),b0,b1),A.kx(c3.h(0,b2),b2,"blob.bin"),l,A.cW(c3.h(0,b3),b3),A.e6(c3.h(0,b4),b4,!1))
case"fileChunk":k=c3.h(0,"chunk")
if(!t.p.b(k))throw A.b(A.N("Malformed fileChunk payload."))
return new A.lO(A.b2(c3,b5),k)
case"fileFinish":return new A.lT(A.b2(c3,b5))
case"fileAbort":return new A.lM(A.b2(c3,b5))
case"filesList":return new A.m1(A.aQ(c3),A.b2(c3,a9),A.kx(c3.h(0,b0),b0,b1))
case"fileOpen":return new A.lW(A.aQ(c3),A.b2(c3,a9),A.kx(c3.h(0,b0),b0,b1),A.Gf(c3.h(0,b6),b6,0),A.cW(c3.h(0,b7),b7))
case"fileDownload":return new A.lR(A.aQ(c3),A.b2(c3,a9),A.kx(c3.h(0,b0),b0,b1),A.cW(c3.h(0,b7),b7))
case"fileCredit":j=c3.h(0,"bytes")
if(!A.av(j))throw A.b(A.N("Malformed fileCredit payload."))
return new A.lQ(A.b2(c3,"stream"),j)
case"fileClose":return new A.lP(A.b2(c3,"stream"))
case"fileRemove":return new A.lZ(A.aQ(c3),A.b2(c3,a9),A.kx(c3.h(0,b0),b0,b1),A.Gf(c3.h(0,b6),b6,0),A.cW(c3.h(0,b7),b7))
case"fileGc":i=c3.h(0,"blobGraceMs")
h=c3.h(0,"tmpGraceMs")
if(!A.av(i)||!A.av(h))throw A.b(A.N("Malformed fileGc payload."))
return new A.lU(i,h)
case"fileEnforceStorageCap":g=c3.h(0,"maxBytes")
if(!A.av(g))throw A.b(A.N("Malformed fileEnforceStorageCap payload."))
return new A.lG(g)
case"fileStorageStatus":return B.bV
case"syncStart":f=c3.h(0,"baseUrl")
if(typeof f!="string")throw A.b(A.N("Malformed syncStart payload."))
return new A.ny(f,A.cW(c3.h(0,"scopeId"),"scopeId"),A.cW(c3.h(0,b8),b8))
case"syncStop":return B.c_
case"syncNow":return B.bW
case"syncPause":return B.bX
case"syncResume":return B.bY
case"syncUpdateAuth":return new A.nE(A.cW(c3.h(0,b8),b8))
case"syncSetConnectivity":e=c3.h(0,"online")
if(!A.bx(e))throw A.b(A.N("Malformed syncSetConnectivity payload."))
return new A.nx(e)
case"syncStatus":return B.bZ
case"get":return new A.m2(A.aQ(c3),A.b2(c3,b9),A.cC(c3))
case"rows":d=c3.h(0,"ids")
if(!t.j.b(d))throw A.b(A.N("Malformed rows payload."))
return new A.n3(A.aQ(c3),A.Gy(d,"ids"),A.cC(c3))
case"mutate":return new A.mx(A.aQ(c3),A.Lj(c3.h(0,"mutation")),A.cC(c3))
case"query":return new A.mW(A.aQ(c3),A.eE(c3.h(0,c0)),A.cC(c3))
case"count":return new A.lq(A.aQ(c3),A.eE(c3.h(0,c0)),A.cC(c3))
case"countDistinct":return new A.lp(A.aQ(c3),A.b2(c3,b0),A.eE(c3.h(0,c0)),A.cC(c3))
case"distinct":q=A.aQ(c3)
p=A.b2(c3,b0)
n=c3.h(0,c0)
return new A.lC(q,p,A.eE(n==null?B.j:n),A.cC(c3))
case"ids":return new A.m7(A.aQ(c3),A.eE(c3.h(0,c0)),A.cC(c3))
case"aggregate":c=c3.h(0,"fn")
b=A.CK(new A.at(B.cJ,new A.qO(c),t.gx))
if(b==null)throw A.b(A.N("Unknown aggregate: "+A.p(c)))
return new A.kR(A.aQ(c3),b,A.b2(c3,b0),A.eE(c3.h(0,c0)),A.cC(c3))
case"explain":return new A.lJ(A.aQ(c3),A.eE(c3.h(0,c0)),A.cC(c3))
case"search":return new A.n9(A.aQ(c3),A.JI(c3.h(0,c0)),A.cC(c3))
case"txBegin":a=c3.h(0,"readOnly")
if(!A.bx(a))throw A.b(A.N("Malformed txBegin payload."))
a0=c3.h(0,"durability")
if(a0==null)a1=B.bp
else if(typeof a0=="string"){q=A.CK(new A.at(B.cW,new A.qP(a0),t.mE))
if(q==null)q=A.u(A.N("Unknown tx durability: "+a0))
a1=q}else{q=A.u(A.N("Malformed txBegin durability."))
a1=q}return new A.nI(a,a1)
case"txCommit":case"txRollback":a2=c3.h(0,b5)
if(typeof a2!="string")throw A.b(A.N("Malformed tx payload."))
return c2==="txCommit"?new A.nJ(a2):new A.nL(a2)
case"txSavepoint":case"txRollbackTo":case"txRelease":a2=c3.h(0,b5)
a3=c3.h(0,b2)
if(typeof a2!="string"||typeof a3!="string")throw A.b(A.N("Malformed savepoint payload."))
A:{if("txSavepoint"===c2){q=new A.nN(a2,a3)
break A}if("txRollbackTo"===c2){q=new A.nM(a2,a3)
break A}q=new A.nK(a2,a3)
break A}return q
case"watchOne":return new A.o1(A.aQ(c3),A.b2(c3,b9))
case"watch":return new A.o2(A.aQ(c3),A.eE(c3.h(0,c0)))
case"watchCancel":a4=c3.h(0,"subscription")
if(typeof a4!="string")throw A.b(A.N("Malformed watchCancel payload."))
return new A.o0(a4)
case"analyze":return new A.kT(A.cW(c3.h(0,c1),c1))
case"walCheckpoint":return B.c1
case"vacuum":return B.c0
case"pruneOutbox":return B.bU
case"compact":a5=c3.h(0,c1)
a6=c3.h(0,"olderThanMs")
if(typeof a5!="string"||!A.av(a6))throw A.b(A.N("Malformed compact payload."))
return new A.lh(a5,a6)
case"runMaintenance":a7=c3.h(0,"compactOlderThanMs")
if(!A.av(a7))throw A.b(A.N("Malformed runMaintenance payload."))
return new A.n4(a7)
case"conflictsList":return new A.lm(A.cW(c3.h(0,c1),c1))
case"conflictGet":return new A.ll(A.aQ(c3),A.b2(c3,b9))
case"conflictsResolve":a8=c3.h(0,"merged")
if(!t.f.b(a8))throw A.b(A.N("Malformed conflictsResolve payload."))
return new A.n1(A.aQ(c3),A.b2(c3,b9),A.El(a8,"merged"))
case"conflictsAcceptLocal":return new A.kO(A.aQ(c3),A.b2(c3,b9))
case"conflictsAcceptRemote":return new A.kP(A.aQ(c3),A.b2(c3,b9))
case"conflictsWatch":return new A.lo(A.cW(c3.h(0,c1),c1))
default:return null}},
aQ(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.N("Malformed store name."))
return s},
b2(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.N('Malformed field "'+b+'".'))
return s},
cC(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.N("Malformed session id."))
return s},
El(a,b){var s,r,q
if(t.f.b(a)){s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.N('Malformed field "'+b+'".'))},
BG(a){var s,r=u.P
if(a instanceof A.dG){A:{if(a instanceof A.hf){s="ValidationException"
break A}if(a instanceof A.hd){s="UniqueConstraintException"
break A}if(a instanceof A.fN){s="NotNullConstraintException"
break A}if(a instanceof A.ie){s="CheckConstraintException"
break A}if(a instanceof A.je){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.ix){s="ForeignKeyConstraintException"
break A}if(a instanceof A.jE){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.iy){s="FtsUnavailableError"
break A}if(a instanceof A.fZ){s="SchemaRegistrationError"
break A}if(a instanceof A.jq){s="SchemaTooNewError"
break A}if(a instanceof A.da){s="StorageError"
break A}if(a instanceof A.jn){s="RemoteOnlyError"
break A}if(a instanceof A.jl){s="RecordNotFoundException"
break A}if(a instanceof A.jy){s="StaleCursorError"
break A}if(a instanceof A.iS){s="MissingLimitError"
break A}if(a instanceof A.ih){s="ConflictBlockedError"
break A}if(a instanceof A.fr){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.jk){s="ReadOnlyTxError"
break A}throw A.b(A.eF(r))}return s}if(t.b0.b(a))return"RangeError"
if(a instanceof A.bA)return"ArgumentError"
if(a instanceof A.bm)return"StateError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
if(a instanceof A.bo){B:{if(a instanceof A.eK){s="TransientNetworkError"
break B}if(a instanceof A.dO){s="ServerBusyError"
break B}if(a instanceof A.ju){s="ServerError"
break B}if(a instanceof A.c_){s="AuthError"
break B}if(a instanceof A.cF){s="ForbiddenError"
break B}if(a instanceof A.cK){s="NotFoundError"
break B}if(a instanceof A.eB){s="PayloadError"
break B}if(a instanceof A.fR){s="ProtocolError"
break B}if(a instanceof A.ft){s="DuplicateIdError"
break B}if(a instanceof A.ee){s="BatchFailedError"
break B}if(a instanceof A.xV){s="SyncIdentityError"
break B}throw A.b(A.eF(r))}return s}if(a instanceof A.jg)return"ProtocolEnvelopeException"
if(a instanceof A.eL)return"WireException"
return"unknown"},
bS(a){return new A.jg(a)},
N_(a){var s,r,q,p=J.Z(a),o=null
if(a instanceof A.dG){s=A.BG(a)
p=a.a
if(a instanceof A.hf&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.hd){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.f7(a.c))}catch(r){if(!(A.C(r) instanceof A.eL))throw r}}else if(a instanceof A.fN)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.bo){s=A.BG(a)
p=a.a
if(a instanceof A.dO&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else{s=A.BG(a)
if(a instanceof A.eL)p=a.a
else if(a instanceof A.bm)p=a.a
else if(t.b0.b(a))p=A.p(a.d)
else if(a instanceof A.bA)p=A.p(a.d)}q=A.v(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
Lq(a){var s
A:{if(a instanceof A.iX){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.j_){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iY){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.j0){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iU){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iV){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iT){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iZ){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iW){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.eF(u.P))}return s},
Lj(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.N("Malformed mutation payload."))
s=t.N
r=a.aV(0,new A.Bs(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iX(A.pm(r.h(0,n),n))
case"upsert":return new A.j_(A.pm(r.h(0,n),n))
case"putAll":return new A.iY(A.Gu(r.h(0,m),m))
case"upsertAll":return new A.j0(A.Gu(r.h(0,m),m))
case"patch":return new A.iU(A.Bx(r.h(0,l),l),A.pm(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.N("Malformed patchAll patches."))
k=A.v(s,t.G)
for(s=p.ga7(),s=s.gu(s);s.k();){o=s.gn()
k.j(0,J.Z(o.a),A.pm(o.b,"patches"))}return new A.iV(k)
case"archive":return new A.iT(A.Bx(r.h(0,l),l))
case"restore":return new A.iZ(A.Bx(r.h(0,l),l))
case"purge":return new A.iW(A.Bx(r.h(0,l),l))
default:throw A.b(A.N("Unknown mutation kind: "+A.p(q)))}},
Bx(a,b){if(typeof a=="string")return a
throw A.b(A.N('Malformed mutation field "'+b+'".'))},
pm(a,b){var s,r,q
if(t.f.b(a)){s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.N('Malformed mutation field "'+b+'".'))},
Gu(a,b){var s,r
if(t.j.b(a)){s=A.j([],t.d)
for(r=J.E(a);r.k();)s.push(A.pm(r.gn(),b))
return s}throw A.b(A.N('Malformed mutation field "'+b+'".'))},
eE(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.N("Malformed query spec."))
s=a0.aV(0,new A.x1(),t.N,t.z)
r=new A.x2()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.j([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.u(A.N("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.I(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.CV(s.h(0,e)):A.u(A.N("Malformed query predicate."))
i=A.j([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.u(A.N("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.Jx(h.gn()))
h=m==null?null:A.DD(m,"limit")
g=A.e6(s.h(0,"all"),"all",!1)
f=n==null?null:A.Gy(n,"select")
return new A.x0(k,j,a,i,h,g,f,A.e6(s.h(0,d),d,!1),A.e6(s.h(0,c),c,!1),A.cW(l,"cursor"),A.e6(s.h(0,b),b,!1))},
EW(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.N(k))
s=a.aV(0,new A.wX(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.N(k))
p=A.CK(new A.at(B.cB,new A.wY(q),t.mz))
if(p==null)throw A.b(A.N("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.N('Query condition "values" must be a list.'))
n=A.kB(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.kB(l.gn()))}else m=null
return new A.eD(r,p,n,m)},
CV(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.N("Malformed predicate tree."))
s=a.aV(0,new A.wp(),t.N,t.z)
r=new A.wo()
switch(s.h(0,"kind")){case"leaf":return new A.iM(A.EW(s))
case"not":return new A.j7(A.CV(s.h(0,"child")))
case"all":return new A.i2(r.$1(s.h(0,q)))
case"any":return new A.i3(r.$1(s.h(0,q)))
default:throw A.b(A.N("Unknown predicate node kind: "+A.p(s.h(0,"kind"))))}},
Jx(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.N(q))
s=a.aV(0,new A.x_(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.N(q))
return new A.mV(r,A.e6(s.h(0,"desc"),"desc",!1))},
JI(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.N("Malformed search spec."))
s=a.aV(0,new A.xj(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.N("Malformed search term."))
q=s.h(0,p)==null?null:A.DD(s.h(0,p),p)
return new A.xi(r,q,A.e6(s.h(0,"all"),"all",!1),A.e6(s.h(0,o),o,!1),A.e6(s.h(0,n),n,!1))},
Is(a){return new A.fq(a)},
Ix(a){return new A.fs(a)},
IQ(a){return new A.fD(a)},
I8(a){return new A.fg(a)},
ID(a){return new A.fw(a)},
f7(a){var s,r,q,p
if(a instanceof A.aF)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.ar.gfa().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.f7(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.v(s,t.X)
for(q=a.ga7(),q=q.gu(q);q.k();){p=q.gn()
r.j(0,J.Z(p.a),A.f7(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),A.f7(q.b))}return s}if(a==null||A.bx(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.N("Value of type "+J.bY(a).l(0)+" is not wire-safe."))},
kB(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.dp(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.av(s))return new A.aF(A.lz(s,0,!0),0,!0)
throw A.b(A.N("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.as.v(s)
return i}catch(p){if(t.Y.b(A.C(p)))throw A.b(A.N(k))
else throw p}throw A.b(A.N(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.N("Malformed map wire value."))
n=A.v(t.N,t.X)
for(i=o.ga7(),i=i.gu(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.N(j+A.p(m)))
n.j(0,m,A.kB(q.b))}return n}l=A.v(t.N,t.X)
for(i=a.ga7(),i=i.gu(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.N(j+A.p(m)))
l.j(0,m,A.kB(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.kB(q.gn()))
return i}return a},
N(a){return new A.eL(a)},
DE(a,b){if(typeof a=="string")return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
DD(a,b){if(A.av(a))return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
cW(a,b){if(a==null)return null
return A.DE(a,b)},
Gf(a,b,c){if(a==null)return c
return A.DD(a,b)},
e6(a,b,c){if(a==null)return!1
if(A.bx(a))return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
kx(a,b,c){if(a==null)return c
return A.DE(a,b)},
Gy(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.j([],t.s)
for(r=J.L(a),q=0;q<r.gm(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.N(p+b+"["+q+']".'))
s.push(A.F(r.h(a,q)))}return s}throw A.b(A.N(p+b+'".'))},
qO:function qO(a){this.a=a},
qP:function qP(a){this.a=a},
lk:function lk(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jg:function jg(a){this.a=a},
c1:function c1(){},
lg:function lg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ln:function ln(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
lY:function lY(a,b,c,d,e,f,g,h,i,j){var _=this
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
lN:function lN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lO:function lO(a,b){this.a=a
this.b=b},
lT:function lT(a){this.a=a},
lP:function lP(a){this.a=a},
lM:function lM(a){this.a=a},
m1:function m1(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lR:function lR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lQ:function lQ(a,b){this.a=a
this.b=b},
lZ:function lZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lU:function lU(a,b){this.a=a
this.b=b},
lG:function lG(a){this.a=a},
nl:function nl(){},
m0:function m0(a,b){this.a=a
this.b=b},
it:function it(a){this.a=a},
fA:function fA(a){this.a=a},
lX:function lX(a){this.a=a},
fz:function fz(a){this.a=a},
fx:function fx(a){this.a=a},
h5:function h5(a){this.a=a},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vv:function vv(){},
iX:function iX(a){this.a=a},
j_:function j_(a){this.a=a},
iY:function iY(a){this.a=a},
j0:function j0(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iT:function iT(a){this.a=a},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
Bs:function Bs(){},
x0:function x0(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
x1:function x1(){},
x2:function x2(){},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wX:function wX(){},
wY:function wY(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
cL:function cL(){},
wp:function wp(){},
wo:function wo(){},
iM:function iM(a){this.a=a},
j7:function j7(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
mV:function mV(a,b){this.a=a
this.b=b},
x_:function x_(){},
cy:function cy(a,b){this.a=a
this.b=b},
xi:function xi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xj:function xj(){},
n_:function n_(){},
mH:function mH(a,b){this.a=a
this.b=b},
lb:function lb(){},
m4:function m4(){},
le:function le(){},
m2:function m2(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function n3(a,b,c){this.a=a
this.b=b
this.c=c},
mx:function mx(a,b,c){this.a=a
this.b=b
this.c=c},
mW:function mW(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
lp:function lp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
n9:function n9(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
nI:function nI(a,b){this.a=a
this.b=b},
nJ:function nJ(a){this.a=a},
nL:function nL(a){this.a=a},
nN:function nN(a,b){this.a=a
this.b=b},
nM:function nM(a,b){this.a=a
this.b=b},
nK:function nK(a,b){this.a=a
this.b=b},
o1:function o1(a,b){this.a=a
this.b=b},
o2:function o2(a,b){this.a=a
this.b=b},
o0:function o0(a){this.a=a},
kT:function kT(a){this.a=a},
o_:function o_(){},
nY:function nY(){},
mS:function mS(){},
lh:function lh(a,b){this.a=a
this.b=b},
n4:function n4(a){this.a=a},
lm:function lm(a){this.a=a},
ll:function ll(a,b){this.a=a
this.b=b},
n1:function n1(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a,b){this.a=a
this.b=b},
kP:function kP(a,b){this.a=a
this.b=b},
lo:function lo(a){this.a=a},
ah:function ah(){},
fO:function fO(){},
ia:function ia(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m5:function m5(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
fJ:function fJ(a){this.a=a},
fV:function fV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fq:function fq(a){this.a=a},
fs:function fs(a){this.a=a},
fD:function fD(a){this.a=a},
fg:function fg(a){this.a=a},
fw:function fw(a){this.a=a},
h_:function h_(a){this.a=a},
n8:function n8(a,b){this.a=a
this.b=b},
fo:function fo(a){this.a=a},
fn:function fn(a){this.a=a},
hb:function hb(a){this.a=a},
hj:function hj(a){this.a=a},
fS:function fS(a){this.a=a},
fm:function fm(a){this.a=a},
eI:function eI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b5:function b5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ny:function ny(a,b,c){this.a=a
this.b=b
this.c=c},
nD:function nD(){},
nt:function nt(){},
nu:function nu(){},
nw:function nw(){},
nE:function nE(a){this.a=a},
nx:function nx(a){this.a=a},
nB:function nB(){},
nz:function nz(a){this.a=a},
nv:function nv(a){this.a=a},
nC:function nC(a){this.a=a},
nA:function nA(a){this.a=a},
l_:function l_(){},
eL:function eL(a){this.a=a},
ai(a){var s,r=new A.a3("")
A.ce(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
DS(a){var s,r,q
for(s=new A.n5(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
Le(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.bR(s,".0"))s=B.a.B(s,0,s.length-2)
return s==="-0"?"0":s},
ce(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(b==null){a.a+="null"
return 4}if(A.bx(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.av(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.Le(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a6(b,g)
a.a+=r
return A.DS(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.L(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.ce(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.j([],t.l5)
n=A.aM(t.N)
for(s=J.E(b.gM());s.k();){m=s.gn()
r=J.Z(m)
if(!n.t(0,r))throw A.b(A.Q('Cannot canonicalize map: keys collide after toString() ("'+r+'").',g))
o.push(new A.a5(r,m))}B.b.co(o,new A.Cp())
a.a+="{"
for(s=o.length,q=1,l=!0,k=0;k<o.length;o.length===s||(0,A.r)(o),++k,l=!1){j=o[k]
if(!l){a.a+=",";++q}i=B.h.a6(j.a,g)
a.a+=i
h=A.DS(i)
a.a+=":"
q=q+h+1+A.ce(a,b.h(0,j.b))}a.a+="}"
return q+1}throw A.b(A.Q("Cannot canonicalize value of type "+J.bY(b).l(0),g))},
Cp:function Cp(){},
JM(a){var s,r,q,p=A.ag("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ef(a)
if(p==null)return B.dp
s=p.b
r=s[1]
r.toString
r=A.aK(r)
q=s[2]
q.toString
q=A.aK(q)
s=s[3]
s=A.jf(s==null?"":s,null)
return new A.eY(r,q,s==null?0:s)},
F3(a,b,c){var s,r=A.JM(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eH(a,b){return A.JN(a,b)},
JN(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eH=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b3("SELECT sqlite_version() AS v"),$async$eH)
case 3:g=d.W(c.bL(a2),"v")
g.toString
A.F(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b3("PRAGMA compile_options"),$async$eH)
case 4:j=d.P(new c.dW(b.bZ(a2,new A.xt(),t.X),k),k.i("o.E"))
n=B.b.ca(j,new A.xu())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eH)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$eH)
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
k=a0===B.be
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b3("PRAGMA journal_mode"),$async$eH)
case 19:l=a2
if(J.dr(l))m=A.a6(J.bL(J.bL(l).gb_()))
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
case 18:case 14:h=A.F3(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nk(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eH,r)},
mN:function mN(a,b){this.a=a
this.b=b},
nk:function nk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xt:function xt(){},
xu:function xu(){},
ic:function ic(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a2:function a2(a,b){this.a=a
this.b=b},
q4:function q4(a,b){this.a=a
this.b=b},
q5:function q5(){},
q6:function q6(){},
E7(a){return new Uint8Array(A.b9(a))},
rG:function rG(){},
pE:function pE(a,b,c){this.b=a
this.c=b
this.d=c},
DK(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cs
if(r===B.I){r=a.f
r.toString
r=!B.b.D(r,b)}else r=!1
if(r)return B.cx
return s
case 1:case 4:return!A.av(b)?B.ct:s
case 2:if(typeof b!="number")return B.b5
if(!isFinite(b))return B.b5
return s
case 3:return!A.bx(b)?B.cu:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cv:s
case 7:return!t.j.b(b)?B.cw:s}},
dn(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gde(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.Dx(n,a0.h(0,l),new Uint8Array(A.b9(B.e.v(q+l+"\x00"+e))),m))}k=A.v(h,g)
for(h=new A.aI(a0,A.n(a0).i("aI<1,2>")).gu(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.D(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ai(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
GN(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.Dx(b,c,new Uint8Array(A.b9(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
Mj(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gde()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.Dx(n,g.h(0,l),new Uint8Array(A.b9(B.e.v(q+l+"\x00"+f))),m))}k=A.v(t.N,t.X)
for(s=g.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.D(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ai(k))
a.push(c?1:0)
a.push(0)},
bX(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.v(j,i),g=b.h(0,"extra")
if(typeof g=="string"&&g.length!==0){s=B.h.aF(g,null)
if(t.f.b(s))for(j=A.bl(s,j,i),j=new A.aI(j,A.n(j).i("aI<1,2>")).gu(0);j.k();){r=j.d
i=r.a
if(B.aE.D(0,i))continue
h.j(0,i,r.b)}}h.j(0,"id",b.h(0,"id"))
for(j=a.c,i=j.length,q=a.a,p=0;p<j.length;j.length===i||(0,A.r)(j),++p){o=j[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
h.j(0,n,A.Dw(o,m,c,d,l==null?"":l,q))}h.j(0,k,J.x(b.h(0,k),1))
return h},
MV(a,b,c,d){var s,r=A.j([],t.d)
for(s=J.E(b);s.k();)r.push(A.bX(a,s.gn(),c,d))
return r},
MW(a,b,c,d,e){var s,r,q,p,o,n,m=A.j([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.r)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a5(p,a.ee(p)))}s=A.j([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.Li(o.gn(),m,r,c,e,n))
return s},
Li(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.Dw(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
Dw(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=null,k=' row: encrypted field "'
if(b==null)return l
if(a.e){if(c==null)p=l
else p=c
s=p
if(s==null)throw A.b(A.A('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.db("Corrupt "+f+k+a.a+'" must be TEXT ciphertext but is '+J.bY(b).l(0)+"."))
r=null
try{r=B.o.f4(s.uo(B.as.v(b),new Uint8Array(A.b9(B.e.v(f+"\x00"+a.a+"\x00"+e)))))}catch(o){q=A.C(o)
n=A.db("Corrupt "+f+k+a.a+'" failed to decrypt ('+A.p(q)+").")
throw A.b(n)}m=a.b
A:{if(B.B===m){n=J.x(r,"1")||J.x(r,"true")
break A}if(B.T===m||B.V===m){n=A.aK(r)
break A}if(B.U===m){n=A.MZ(r)
break A}if(B.W===m||B.X===m){n=B.h.aF(r,l)
break A}n=r
break A}return n}n=a.b
if(n===B.B)return J.x(b,1)
if(n===B.W||n===B.X){if(typeof b!="string")throw A.b(A.db("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bY(b).l(0)+"."))
return B.h.aF(b,l)}return b},
Dx(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.A('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.Z(b)
break
case 6:case 7:s=A.ai(b)
break
default:A.F(b)
s=b}r=d.v5(B.e.v(s),c)
return B.ar.gfa().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.ai(b)
default:return b}},
bg(a,b){var s,r,q,p,o,n="archived",m=a.gde(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.r)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga7(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.D(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
BH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gde(),i=A.j([],t.iE)
i.push(new A.a5("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a5(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga7(),s=s.gu(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.D(0,o))continue
i.push(new A.a5(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dm)
B.b.co(i,new A.BI())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.r)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a6(r.a,null)
a.a+=k
o=A.DS(k)
a.a+=":"
m=m+o+1+A.ce(a,r.b)}a.a+="}"
return m+1},
d0:function d0(a,b){this.a=a
this.b=b},
BI:function BI(){},
IY(a){var s=A.dQ(null,null,t.fq),r=t.N
s=new A.tN(a,s,A.v(r,t.g8),A.v(r,t.dz),new A.rW(A.N3(),A.v(r,t.f6)),A.v(r,t.oX))
s.oT(a,B.c9)
return s},
Cc(a){var s,r,q,p
A:{if(a instanceof A.iM){s=A.LX(a.a)
break A}if(a instanceof A.j7){s=new A.c3(A.Cc(a.a))
break A}if(a instanceof A.i2){r=a.a
s=A.j([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.Cc(r[p]))
s=new A.dt(s)
break A}if(a instanceof A.i3){r=a.a
s=A.j([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.Cc(r[p]))
s=new A.cY(s)
break A}throw A.b(A.eF(u.P))}return s},
LX(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.aj(m,n,B.n)
return new A.aj(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.Q("neq(null) matches no rows; use isNotNull.",o))
return new A.c3(new A.aj(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.ac('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.aj(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.n
if(B.b.D(q,o))throw A.b(A.ac("inValues does not accept null \u2014 use isNull().",o))
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
f_:function f_(){},
Ap:function Ap(a){this.a=a},
p4:function p4(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=null
_.w=$
_.x=e},
hD:function hD(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
tN:function tN(a,b,c,d,e,f){var _=this
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
ug:function ug(a){this.a=a},
uh:function uh(){},
ui:function ui(a,b){this.a=a
this.b=b},
uj:function uj(){},
uu:function uu(a,b){this.a=a
this.b=b},
uF:function uF(){},
uG:function uG(a,b){this.a=a
this.b=b},
uH:function uH(a,b){this.a=a
this.b=b},
uI:function uI(a,b){this.a=a
this.b=b},
uJ:function uJ(a,b){this.a=a
this.b=b},
uK:function uK(a,b){this.a=a
this.b=b},
uL:function uL(a,b){this.a=a
this.b=b},
uk:function uk(){},
ul:function ul(){},
um:function um(){},
un:function un(){},
uo:function uo(){},
up:function up(){},
uq:function uq(a){this.a=a},
ur:function ur(a){this.a=a},
us:function us(){},
ut:function ut(){},
uv:function uv(){},
uw:function uw(a){this.a=a},
ux:function ux(){},
uy:function uy(){},
uz:function uz(){},
uA:function uA(){},
uB:function uB(){},
uC:function uC(a){this.a=a},
uD:function uD(a){this.a=a},
uE:function uE(a,b){this.a=a
this.b=b},
u1:function u1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u2:function u2(){},
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
u4:function u4(){},
u7:function u7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u8:function u8(){},
tQ:function tQ(a){this.a=a},
tO:function tO(a,b,c){this.a=a
this.b=b
this.c=c},
tP:function tP(a){this.a=a},
u6:function u6(a){this.a=a},
u5:function u5(a){this.a=a},
uc:function uc(a,b){this.a=a
this.b=b},
ud:function ud(a,b,c){this.a=a
this.b=b
this.c=c},
ue:function ue(a,b){this.a=a
this.b=b},
uf:function uf(a,b,c){this.a=a
this.b=b
this.c=c},
tX:function tX(a){this.a=a},
tY:function tY(a){this.a=a},
tZ:function tZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u0:function u0(a,b){this.a=a
this.b=b},
u_:function u_(a,b){this.a=a
this.b=b},
tT:function tT(a){this.a=a},
tR:function tR(){},
tS:function tS(){},
u9:function u9(a){this.a=a},
ua:function ua(a){this.a=a},
ub:function ub(a,b){this.a=a
this.b=b},
tW:function tW(a,b){this.a=a
this.b=b},
tU:function tU(){},
tV:function tV(){},
Eo(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
lj:function lj(a,b){this.a=a
this.b=b},
im:function im(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.d=!1
_.f=_.e=null},
rD:function rD(){},
rC:function rC(){},
rE:function rE(){},
rB:function rB(a){this.a=a},
Iw(a){return'"'+A.B(a,'"','""')+'"'},
Iv(a,b){var s,r,q,p=a.a,o=J.L(p),n=b.a,m=J.L(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qr:function qr(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
il:function il(a){this.a=a},
rA:function rA(a){this.a=a},
rz:function rz(){},
ry:function ry(a){this.a=a},
rx:function rx(a,b){this.a=a
this.b=b},
ru:function ru(a){this.a=a},
rv:function rv(a){this.a=a},
rw:function rw(){},
ac(a,b){return new A.hf(b,a)},
db(a){return new A.da(a)},
jm(a){return new A.jl(a)},
F0(a){return new A.jq(a)},
aC(a){return new A.fZ(a)},
t3(a){return new A.iy(a)},
D6(a){return new A.jy(a)},
EL(a){return new A.iS(a)},
Ek(a){return new A.ih(a)},
CB(a){return new A.fr(a)},
Ha(a,b){var s,r="UNIQUE constraint failed",q=J.Z(a),p=a instanceof A.c6,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.D(q,"PRIMARY KEY")&&!B.a.D(q,r)
else p=!0
if(p)return new A.je("PRIMARY KEY constraint violated.")
if(o===2067||B.a.D(q,r)){s=A.G7(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.hd(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.D(q,"NOT NULL constraint failed")){p=A.G7(q,"NOT NULL constraint failed:")
return new A.fN(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.D(q,"CHECK constraint failed")||o===275||n===275)return new A.ie("CHECK constraint violated.")
if(B.a.D(q,"FOREIGN KEY")||o===787||n===787)return new A.ix("FOREIGN KEY constraint violated.")
if(B.a.D(q,"database or disk is full"))return new A.da("Database full: "+A.p(a))
return new A.da("SQLite error: "+A.p(a))},
G7(a,b){var s,r,q,p,o,n,m=B.a.bS(a,b)
if(m<0)return"?"
s=B.a.ae(a,m+b.length)
r=s.length
q=B.a.bS(s,",")
if(q>=0)r=q
p=B.a.bS(s,"(")
s=B.a.cm(B.a.B(s,0,p>=0&&p<r?p:r))
o=B.a.dl(s,".")
s=B.a.cm(o>=0?B.a.ae(s,o+1):s)
if(B.a.S(s,'"')&&B.a.bR(s,'"')){n=B.a.B(s,1,s.length-1)
s=A.B(n,'""','"')}return s.length===0?"?":s},
dG:function dG(){},
hf:function hf(a,b){this.b=a
this.a=b},
hd:function hd(a,b,c){this.b=a
this.c=b
this.a=c},
fN:function fN(a,b){this.b=a
this.a=b},
ie:function ie(a){this.a=a},
je:function je(a){this.a=a},
ix:function ix(a){this.a=a},
da:function da(a){this.a=a},
jn:function jn(a){this.a=a},
jl:function jl(a){this.a=a},
jq:function jq(a){this.a=a},
fZ:function fZ(a){this.a=a},
jE:function jE(a){this.a=a},
iy:function iy(a){this.a=a},
jy:function jy(a){this.a=a},
iS:function iS(a){this.a=a},
ih:function ih(a){this.a=a},
fr:function fr(a){this.a=a},
jk:function jk(a){this.a=a},
ir:function ir(a){this.b=a},
Es(a){return A.pt("lp_file_refs",new A.rI(a))},
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
rI:function rI(a){this.a=a},
uV:function uV(a,b){this.a=a
this.b=b},
uW:function uW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uY:function uY(a){this.a=a},
uZ:function uZ(a){this.a=a},
v_:function v_(a){this.a=a},
v0:function v0(a){this.a=a},
v1:function v1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uX:function uX(a,b){this.a=a
this.b=b},
Mf(){return new A.aF(Date.now(),0,!1)},
cE:function cE(a,b,c,d,e,f,g,h,i,j){var _=this
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
rW:function rW(a,b){this.f=a
this.r=b},
rZ:function rZ(){},
rX:function rX(a){this.a=a},
rY:function rY(){},
lS:function lS(a){this.b=0
this.c=a
this.d=$},
l9(a){var s=$.DU()
if(!s.b.test(a))throw A.b(A.Q('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
Ec(a){return new A.fi(a)},
i8(a,b){return new A.i7(a,b)},
kF(a,b,c,d,e,f){return A.Nu(a,b,c,d,e,f)},
Nu(a,b,c,a0,a1,a2){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d
var $async$kF=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=t.i5
f=A.j([],g)
e=new A.hn(A.cU(new A.oY(new A.Cd(f),A.j([],g),t.mI)))
d=0
g=new A.cv(A.cw(a,"stream",t.K),t.lj)
p=3
k=t.D
case 6:s=8
return A.a(g.k(),$async$kF)
case 8:if(!a4){s=7
break}m=g.gn()
j=a2.$1(m)
if(!(j instanceof A.w)){i=new A.w($.D,k)
i.a=8
i.c=j
j=i}s=9
return A.a(j,$async$kF)
case 9:e.a.t(0,m)
d+=J.ar(m)
l=a1
if(l!=null&&d>l){k=A.A("Blob exceeds the "+A.p(l)+" byte ceiling (streamed "+A.p(d)+" bytes).")
throw A.b(k)}s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(g.A(),$async$kF)
case 10:s=n.pop()
break
case 5:e.a.q()
if(c!=null&&!J.x(d,c))throw A.b(A.A("Size mismatch: expected "+A.p(c)+" but got "+A.p(d)))
h=A.aq(B.b.gap(f).a)
A.l9(h)
if(b!=null&&h!==b)throw A.b(A.A("SHA-256 mismatch: expected "+b+" but got "+h))
q=new A.no(h)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kF,r)},
pT:function pT(){},
fi:function fi(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
no:function no(a){this.a=a},
Cd:function Cd(a){this.a=a},
iu:function iu(a){this.d=a},
rJ:function rJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rL:function rL(a,b){this.a=a
this.b=b},
rM:function rM(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rO:function rO(a){this.a=a},
rP:function rP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rQ:function rQ(){},
rR:function rR(a){this.a=a},
rS:function rS(a){this.a=a},
rT:function rT(a){this.a=a},
rU:function rU(){},
Nx(a,b,c){a.uf(!0,new A.Cj(c),"lp_norm_"+b)},
DL(a,b,c,d){var s,r='"'+A.B(d,'"','""')+'"',q=b.a
if(q.gE(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.B(c,'"','""')+'".'+r
return'"'+A.B("lp_norm_"+a,'"','""')+'"('+s+")"},
Cj:function Cj(a){this.a=a},
uM:function uM(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
_.ax=k},
Lm(){return Date.now()},
ph(a){var s,r,q
if(t.G.b(a)){s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.ph(q.b))}return s}if(t.f.b(a)){s=A.v(t.z,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.ph(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.ph(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b9(a))
return a},
d_(a,b,c,d,e,f,g,h,i){var s=null,r=B.D,q=null,p=null,o=B.S
return A.J_(a,b,c,d,e,f,g,h,i)},
J_(b2,b3,b4,b5,b6,b7,b8,b9,c0){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$d_=A.c(function(c1,c2){if(c1===1){o.push(c2)
s=p}for(;;)switch(s){case 0:a4=null
a5=B.D
a6=null
a7=null
a8=B.S
a9=null
a9=b3
p=4
s=7
return A.a(A.cH(a9,b8),$async$d_)
case 7:s=8
return A.a(A.eH(a9,b8),$async$d_)
case 8:n=c2
i=0
case 9:if(!(i<3)){s=11
break}m=B.cG[i]
s=12
return A.a(a9.O(m),$async$d_)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cX[i]
s=16
return A.a(a9.O(l),$async$d_)
case 16:case 14:++i
s=13
break
case 15:h=a9
g=n
f=a6
if(f==null)f=A.Nl()
e=a7
d=a4
c=a5
b=a8
a=new A.mL()
a0=new A.mk(b7,h,g,a,b6,b4,c0,e,b2,b5,d,f,A.v(t.N,t.nv),c,b,new A.q4(A.dQ(null,null,t.iv),A.dQ(null,null,t.oZ)))
a1=new A.yK(A.ba(null,t.H),a.gwK())
a0.z=a1
b=a0.a=new A.uM(a0,h,g,a1,a,f,e,b5,d,c,b)
a0.b=new A.y_(b)
a0.c=new A.vw()
a0.d=new A.x8()
c=$.Cr()
a0.db=new A.vI(a0,c)
a0.dx=new A.vD(a0,c)
a0.dy=new A.qE(a0)
a0.fr=new A.uV(a0,b2)
a0.e=new A.v4(b)
a0.f=new A.xf(b)
b=A.IY(b)
a0.r!==$&&A.eb()
a0.r=b
k=a0
s=17
return A.a(A.ml(a9,k.cy),$async$d_)
case 17:h=b9.length,i=0
case 18:if(!(i<b9.length)){s=20
break}j=b9[i]
g=k.f
g===$&&A.t()
s=21
return A.a(g.aR(j),$async$d_)
case 21:case 19:b9.length===h||(0,A.r)(b9),++i
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
return A.a(a9.q(),$async$d_)
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
return A.f($async$d_,r)},
cH(a,b){return A.IZ(a,b)},
IZ(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cH=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.be?2:3
break
case 2:q=5
s=8
return A.a(a.O("PRAGMA journal_mode=WAL"),$async$cH)
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
return A.a(a.O("PRAGMA wal_autocheckpoint=0"),$async$cH)
case 9:s=10
return A.a(a.O("PRAGMA mmap_size=67108864"),$async$cH)
case 10:case 3:s=11
return A.a(a.O("PRAGMA synchronous=NORMAL"),$async$cH)
case 11:s=12
return A.a(a.O("PRAGMA foreign_keys=ON"),$async$cH)
case 12:s=13
return A.a(a.O("PRAGMA busy_timeout=5000"),$async$cH)
case 13:s=14
return A.a(a.O("PRAGMA cache_size=-8000"),$async$cH)
case 14:s=15
return A.a(a.O("PRAGMA temp_store=MEMORY"),$async$cH)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cH,r)},
ml(a,b){var s=0,r=A.h(t.H),q,p
var $async$ml=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.bD("lp_migrations","version = ?",[1]),$async$ml)
case 3:if(p.dr(d)){s=1
break}s=4
return A.a(a.aD(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$ml)
case 4:case 1:return A.e(q,r)}})
return A.f($async$ml,r)},
nm:function nm(a,b,c){this.a=a
this.c=b
this.e=c},
wm:function wm(a){this.a=a},
mk:function mk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fr=_.dy=_.dx=_.db=$
_.fx=m
_.fy=!1
_.id=n
_.k1=o
_.a$=p},
oF:function oF(){},
v4:function v4(a){this.a=a},
v7:function v7(a){this.a=a},
v6:function v6(a,b){this.a=a
this.b=b},
v5:function v5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.x
h=b.x
g=A.a0(h).i("at<1>")
f=A.P(new A.at(h,new A.vq(c,b),g),g.i("o.E"))
B.b.co(f,new A.vr())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.cy,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aC('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jz()
$.kJ()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aR(a,b,m),$async$fH)
case 8:s=6
break
case 7:s=9
return A.a(A.mt(a,b,m),$async$fH)
case 9:case 6:if(j.b==null)j.b=$.mQ.$0()
s=10
return A.a(A.fI(i,j.gmT(),o,q+l,p,l),$async$fH)
case 10:case 3:f.length===h||(0,A.r)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aC('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.K("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fH)
case 11:return A.e(null,r)}})
return A.f($async$fH,r)},
fI(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fI=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b3("SELECT MAX(version) AS m FROM lp_migrations"),$async$fI)
case 2:q=p.f8(h)
if(q==null)q=0
s=3
return A.a(a.aD(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fI)
case 3:return A.e(null,r)}})
return A.f($async$fI,r)},
mt(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$mt=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.x
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b3("PRAGMA table_info("+('"'+A.B(k,'"','""')+'"')+")"),$async$mt)
case 2:i=h.d1(new g.dW(f.bZ(e,new A.vm(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.DV()
if(!m.b.test(n))A.u(A.aC('Field "'+n+u.Z))
if(o.c)throw A.b(A.aC('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.D(0,n)){s=4
break}m=A.B(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.B(n,'"','""')+'"')+" "+o.gkZ()),$async$mt)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.r)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$mt,r)},
aR(a,b,c){return A.Ja(a,b,c)},
Ja(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aR=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.x
if(!b0.at)throw A.b(A.CB('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.il(b0.y).k0(b1)
j=A.Jd(b0.w,a2,a3)
p=4
s=7
return A.a(A.vo(a7,l),$async$aR)
case 7:i=b4
a3=b0.f
a3===$&&A.t()
s=8
return A.a(a3.hJ(j),$async$aR)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.CB('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.p(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.mv(a7,m),$async$aR)
case 9:g=b4
s=10
return A.a(A.mv(a7,n),$async$aR)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b3("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$aR)
case 13:a0=a9.f8(b4)
e=a0==null?0:a0
a3=A.B(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.B(n,'"','""')+'"')),$async$aR)
case 14:s=15
return A.a(A.cJ(b0,a7,b1,k,l,e),$async$aR)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.B(m,'"','""')+'"')),$async$aR)
case 16:s=h?17:18
break
case 17:s=19
return A.a(a3.hS(j),$async$aR)
case 19:case 18:s=20
return A.a(A.mu(a7,l,"rebuilding"),$async$aR)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.B(j,"'","''")+"'"),$async$aR)
case 21:a3=k.b
a4=A.B(n,'"','""')
d=B.a.kF(a3,'"'+a4+'"','"'+A.B(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aR)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ah("SELECT rowid, * FROM "+('"'+A.B(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aR)
case 25:b=b4
if(J.bz(b)){s=24
break}s=26
return A.a(a7.a2(new A.vp(b,b1,b0,b2,m),a3),$async$aR)
case 26:a4=J.W(J.pC(b),"rowid")
a4.toString
c=A.ap(a4)
if(J.ar(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b3("SELECT COUNT(*) c FROM "+('"'+A.B(n,'"','""')+'"')),$async$aR)
case 27:a5=a9.f8(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b3("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$aR)
case 28:e=a9.f8(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.A('Rebuild of "'+a2+'" count mismatch: '+A.p(a)+" vs "+A.p(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.B(n,'"','""')+'"')),$async$aR)
case 29:a3=A.B(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.B(n,'"','""')+'"')),$async$aR)
case 30:s=31
return A.a(A.cJ(b0,a7,b1,k,l,a),$async$aR)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.C(a8)
if(a3 instanceof A.fr)throw a8
else if(a3 instanceof A.c6){a1=a3
throw A.b(A.CB('Destructive migration for "'+a2+'" failed: '+A.p(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aR,r)},
cJ(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h
var $async$cJ=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.O(q[o]),$async$cJ)
case 5:case 3:q.length===p||(0,A.r)(q),++o
s=2
break
case 4:q=c.w
p=q!=null
s=p?6:7
break
case 6:s=8
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.B(c.a+"_fts",'"','""')+'"')),$async$cJ)
case 8:case 7:n=d.d,m=n.length,o=0
case 9:if(!(o<n.length)){s=11
break}s=12
return A.a(b.O(n[o]),$async$cJ)
case 12:case 10:n.length===m||(0,A.r)(n),++o
s=9
break
case 11:s=p?13:14
break
case 13:p=c.a
n=p+"_fts"
m=A.B(n,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+m+'"')+"("+('"'+A.B(n,'"','""')+'"')+") VALUES('delete-all')"),$async$cJ)
case 15:m=q.a
l=m.$ti.i("X<I.E,k>")
k=new A.X(m,A.pr(),l).C(0,", ")
j=new A.X(m,new A.vn(c,q),l).C(0,", ")
q=A.B(n,'"','""')
s=16
return A.a(b.O("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.B(p,'"','""')+'"')),$async$cJ)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.b3("SELECT COUNT(*) c FROM "+('"'+A.B(q,'"','""')+'"')),$async$cJ)
case 17:i=h.f8(a0)
if((i==null?0:i)!==f)throw A.b(A.A('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.mu(b,e,"done"),$async$cJ)
case 18:return A.e(null,r)}})
return A.f($async$cJ,r)},
mv(a,b){var s=0,r=A.h(t.y),q,p
var $async$mv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ah("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mv)
case 3:q=p.dr(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mv,r)},
Jd(a,b,c){var s=null,r=$.i1(),q=r.uw(a),p=A.dM(a,r.a).gjX()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.n8(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
Jc(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.ac('Field "'+s+'" is required.',s))}if(b==null)return
r=A.DK(a,b)
if(r!=null)throw A.b(A.ac(A.J9(a,b,r),a.a))},
Jb(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
A.Jc(p,b.h(0,p.a))}},
J9(a,b,c){var s,r=a.a,q=J.bY(b)
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
case 6:s='Field "'+r+'" has unknown enum value "'+A.p(b)+'".'
break
default:s=null}return s},
vo(a,b){var s=0,r=A.h(t.x),q,p,o
var $async$vo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.nl("lp_meta",A.j(["v"],t.s),"k = ?",[b]),$async$vo)
case 3:p=d
o=J.L(p)
q=o.gE(p)?null:A.a6(J.W(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vo,r)},
mu(a,b,c){var s=0,r=A.h(t.H)
var $async$mu=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cf(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.R),$async$mu)
case 2:return A.e(null,r)}})
return A.f($async$mu,r)},
Ln(){return Date.now()},
vq:function vq(a,b){this.a=a
this.b=b},
vr:function vr(){},
vm:function vm(){},
vp:function vp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vn:function vn(a,b){this.a=a
this.b=b},
vw:function vw(){},
mL:function mL(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
uN:function uN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AT:function AT(){},
wZ:function wZ(a,b){this.a=a
this.b=b},
kC(a){var s=A.B(a,"\\","\\\\")
s=A.B(s,"%","\\%")
return A.B(s,"_","\\_")},
Dv(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.aj){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.u(A.az(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.az(q,l,'The "'+s+'" predicate carries exactly '+A.p(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.az(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.az(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c3){A.Dv(a.a)
break A}p=a instanceof A.dt
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cY
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.az(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.r)(n),++m)A.Dv(n[m])}break A}},
Bp(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.aj)return A.G2(a,!1,b)
if(a instanceof A.c3){s=a.a
r=A.Bp(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cY||s instanceof A.c3){s=new A.a5("NOT "+q,p)
break A}s=new A.a5("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dt){o=A.j([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){l=A.Bp(s[m],!1)
o.push(l.a)
B.b.F(p,l.b)}k=B.b.C(o," AND ")
return new A.a5(b?k:"("+k+")",p)}if(a instanceof A.cY){o=A.j([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){j=A.Lg(s[m])
o.push(j.a)
B.b.F(p,j.b)}return new A.a5("("+B.b.C(o," OR ")+")",p)}throw A.b(A.eF(u.M))},
Lg(a){var s
A:{if(a instanceof A.aj){s=A.G2(a,!0,!1)
break A}s=A.Bp(a,!1)
break A}return s},
G2(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.B(a.a,'"','""')+'"',n=A.P(a.c,t.X),m=a.b
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
case"inValues":s=o+" IN ("+B.b.C(A.a7(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.kC(A.F(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kC(A.F(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kC(A.F(r))+"%"
break
default:throw A.b(A.az(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a5(q?"("+s+")":s,n)},
d4:function d4(){},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a){this.a=a},
dt:function dt(a){this.a=a},
cY:function cY(a){this.a=a},
Jw(a,b){var s,r=$.fU.G(0,a)
if(r!=null){$.fU.j(0,a,r)
return r}s=b.$0()
if($.fU.a>=512)$.fU.G(0,new A.T($.fU,A.n($.fU).i("T<1>")).gH(0))
$.fU.j(0,a,s)
return s},
b_:function b_(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
mU:function mU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
wW:function wW(a,b,c){this.a=a
this.b=b
this.c=c},
wR:function wR(){},
wS:function wS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wT:function wT(a){this.a=a},
wU:function wU(){},
wV:function wV(){},
JH(a){var s,r,q=B.a.cm(a)
if(q.length===0)return
s=!0
if(!B.a.D(q,'"')){r=A.ag("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.ag("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.ac("Invalid search term: "+a,null))},
JG(a){var s,r,q,p
for(s=B.a.d_(a,A.ag("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
if(p.length!==0&&new A.jo(p).gm(0)<3)throw A.b(A.ac('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cM:function cM(a,b){this.a=a
this.b=b},
xh:function xh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
cl:function cl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x8:function x8(){},
ky(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.dG)throw q
else{s=r
r=A.db("Malformed schema JSON: "+A.p(s))
throw A.b(r)}}},
Er(a){return A.ky(new A.rH(a))},
IR(a){return A.ky(new A.tA(a))},
II(a){return A.ky(new A.t2(a))},
Ew(a,b){var s
if(new A.jo(a).gm(0)!==1)throw A.b(A.aC('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aC('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
IH(a){return A.ky(new A.t1(a))},
IG(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
JQ(a){return A.ky(new A.xx(a))},
qa(a,b){return A.ky(new A.qb(a,b))},
Mk(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.an.h(0,s)
return b},
c2:function c2(a,b){this.a=a
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
rH:function rH(a){this.a=a},
iD:function iD(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
tA:function tA(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
t2:function t2(a){this.a=a},
eq:function eq(a){this.a=a},
t1:function t1(a){this.a=a},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
xx:function xx(a){this.a=a},
vs:function vs(a,b){this.a=a
this.b=b},
qC:function qC(){},
cA:function cA(a,b,c,d,e,f,g,h,i,j){var _=this
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
qb:function qb(a,b){this.a=a
this.b=b},
D3(a){var s=A.Lh(a),r=A.j([],t.s)
if(B.a_.gY(B.a_))r.push("fieldResolvers")
if(B.b.ca(a.x,new A.xb()))r.push("migrationTransform")
if(B.an.gY(B.an))r.push("documentMigrations")
return new A.n7(s,A.fF(r,t.N),1,a.a,a.b,2)},
JF(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aC("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aV(0,new A.xc(),s,r)
p=q.h(0,"formatVersion")
if(!A.av(p))throw A.b(A.aC("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.F0("Schema manifest format v"+A.p(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.av(n)||!j.b(m)||!t.j.b(l)||!A.av(k))throw A.b(A.aC('Malformed schema manifest for store "'+A.p(o==null?"???":o)+'"'))
return new A.n7(m.aV(0,new A.xd(),s,t.X),A.fF(J.bZ(l,new A.xe(),r),s),p,o,n,k)},
Lh(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cI(a.p(),n,m),k=B.a_.gM()
k=A.P(k,A.n(k).i("o.E"))
B.b.aI(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.j([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].p()
o=A.dF(null,null,n,m)
o.F(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.an.gM()
n=A.P(n,A.n(n).i("o.E"))
B.b.aI(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
n7:function n7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xb:function xb(){},
xc:function xc(){},
xd:function xd(){},
xe:function xe(){},
xf:function xf(a){this.a=a},
xg:function xg(a,b){this.a=a
this.b=b},
Ij(a,b){var s,r=a.a
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
dK:function dK(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qn:function qn(a,b){this.a=a
this.b=b},
qq:function qq(a,b){this.a=a
this.b=b},
qm:function qm(a,b){this.a=a
this.b=b},
qp:function qp(a,b){this.a=a
this.b=b},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function qi(a,b){this.a=a
this.b=b},
qf:function qf(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b},
qk:function qk(a,b){this.a=a
this.b=b},
qh:function qh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qg:function qg(){},
ql:function ql(){},
qe:function qe(){},
qc:function qc(){},
qd:function qd(){},
hm:function hm(){},
ol:function ol(){},
pF:function pF(a){this.a=a},
pG:function pG(a,b){this.a=a
this.b=b},
pH:function pH(a){this.a=a},
pI:function pI(){},
Cz(a){return A.pt("lp_conflicts",new A.qD(a))},
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
qD:function qD(a){this.a=a},
qE:function qE(a){this.a=a},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qI:function qI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qG:function qG(a,b){this.a=a
this.b=b},
qH:function qH(a,b){this.a=a
this.b=b},
qF:function qF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ns:function ns(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xU:function xU(a){this.a=a},
xK:function xK(a){this.a=a},
xS:function xS(a,b){this.a=a
this.b=b},
xR:function xR(a){this.a=a},
xQ:function xQ(a,b){this.a=a
this.b=b},
xT:function xT(a){this.a=a},
xN:function xN(a,b){this.a=a
this.b=b},
xO:function xO(){},
xP:function xP(){},
xL:function xL(){},
xM:function xM(a){this.a=a},
ew(a){return new A.d2(a)},
DR(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fa(a,b)
r=A.bg(a,s)
q=A.ai(r)
p=A.aq(B.l.v(B.e.v(q)).a)
return new A.ez(b,s,q,p,k)}catch(m){l=A.C(m)
if(l instanceof A.d2){o=l
return new A.ez(b,k,k,k,o.a)}else{n=l
l=A.p(n)
return new A.ez(b,k,k,k,l)}}},
Nq(a,b){var s,r=A.j([],t.i7)
for(s=J.E(b);s.k();)r.push(A.DR(a,s.gn()))
return r},
DQ(a,b){var s=0,r=A.h(t.eT),q
var $async$DQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Nq(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$DQ,r)},
fa(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bl(b.d,j,i),g=a.gde(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.ew('data.id "'+A.p(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bx(r))throw A.b(A.ew('Field "archived" must be a boolean, got '+J.bY(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.r)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ew('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.DK(o,n)
if(m!=null)throw A.b(A.ew(A.M1(o,n,m)))
q.j(0,s,n)}for(j=new A.aI(h,A.n(h).i("aI<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.D(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
M1(a,b,c){var s,r=a.a,q=J.bY(b)
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
case 6:s='Field "'+r+'" has unknown enum value "'+A.p(b)+'".'
break
default:s=null}return s},
hY(a){var s,r,q,p
if(a==null||a.length===0)return B.j
s=null
try{s=B.h.aF(a,null)}catch(q){r=A.C(q)
p=A.ew("Corrupt payload JSON: "+A.p(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ew("Corrupt payload JSON: expected an object, got "+J.bY(s).l(0)+"."))
return A.bl(s,t.N,t.X)},
d2:function d2(a){this.a=a},
ez:function ez(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bH(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aM(i),g=A.d1(a.gM(),i)
g.F(0,b.gM())
for(g=A.hy(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.r.Z(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.kN(o.gM(),new A.BL())&&J.kN(n.gM(),new A.BM())){m=A.bH(A.bl(o,i,q),A.bl(n,i,q))
for(l=A.n(m),k=new A.e1(m,m.r,l.i("e1<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
J7(a,b,c,d,e,f,g){return new A.ve()},
LW(a,b){var s,r,q=a.b
if(q.gE(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dl(s,".")
if(r<=0)return null
s=B.a.B(s,0,r)}},
CU(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$CU=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.J8(B.c2,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$CU,r)},
J8(a,b,c,d,e,f,g){var s,r,q,p=A.bH(b,c),o=A.bH(b,f)
A.J7(b,p,o,c,e,f,g)
s=t.N
r=A.d1(c.gM(),s)
r.F(0,new A.T(f,A.n(f).i("T<1>")))
r.F(0,b.gM())
q=A.P(r,A.n(r).c)
return A.vk(a,b,p,o,0,q,c,A.v(s,t.X),d,e,f,new A.Ay(),g)},
vk(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dI(h,a0.a,null)
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
h.j(0,s,m)}return A.vk(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.EK(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.w)return l.W(new A.vl(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.vk(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
EK(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.r.Z(a1,a4))return a1
if(B.r.Z(a1,a0))return a4
if(B.r.Z(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kN(a1.gM(),new A.vf()))if(J.kN(a4.gM(),new A.vg()))if(a0!=null)r=s.b(a0)&&J.kN(a0.gM(),new A.vh())
else r=!0
if(r){r=t.N
q=t.X
p=A.bl(a1,r,q)
o=A.bl(a4,r,q)
n=a0==null?null:A.bl(s.a(a0),r,q)
s=A.aM(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.F(0,l)
s.F(0,new A.T(p,A.n(p).i("T<1>")))
s.F(0,new A.T(o,A.n(o).i("T<1>")))
k=A.v(r,q)
j=[]
for(r=s.$ti.c,l=A.hy(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.EK(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.hy(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.CH(new A.X(j,new A.vi(),A.a0(j).i("X<1,y<l?>>")),q).W(new A.vj(s,k),q)}A.LW(a3,a2)
return a4},
GV(a,b,c,d,e,f){return A.CU(a,b,c,d,e,f)},
BL:function BL(){},
BM:function BM(){},
ve:function ve(){},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function mr(a,b,c){this.a=a
this.b=b
this.c=c},
Ay:function Ay(){this.a=!1},
Aw:function Aw(){},
yP:function yP(){},
vl:function vl(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
vf:function vf(){},
vg:function vg(){},
vh:function vh(){},
vi:function vi(){},
vj:function vj(a,b){this.a=a
this.b=b},
vD:function vD(a,b){this.a=a
this.b=b},
vF:function vF(a){this.a=a},
vG:function vG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pS:function pS(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
jj:function jj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vI:function vI(a,b){this.a=a
this.b=b},
vO:function vO(a,b){this.a=a
this.b=b},
vM:function vM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vL:function vL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vK:function vK(a,b,c){this.a=a
this.b=b
this.c=c},
vN:function vN(a){this.a=a},
ed:function ed(a,b){this.a=a
this.b=b},
mT:function mT(a,b){this.b=a
this.f=b},
wA:function wA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wI:function wI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wH:function wH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wC:function wC(a,b,c){this.a=a
this.b=b
this.c=c},
wB:function wB(a,b,c){this.a=a
this.b=b
this.c=c},
wE:function wE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wD:function wD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wG:function wG(a,b,c){this.a=a
this.b=b
this.c=c},
wF:function wF(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wJ:function wJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wL:function wL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wQ:function wQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wO:function wO(a,b,c){this.a=a
this.b=b
this.c=c},
wN:function wN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wM:function wM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wK:function wK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wP:function wP(a,b,c,d,e,f,g,h,i,j){var _=this
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
h8:function h8(a,b){this.a=a
this.b=b},
xH:function xH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xI:function xI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F7(a){return new A.eK(a)},
kZ(a){return new A.c_(a)},
IF(a){return new A.cF(a)},
Ji(a){return new A.cK(a)},
Jk(a){return new A.eB(a)},
aS(a){return new A.fR(a)},
N5(a){var s=a.xc(),r=new A.BX()
return A.p(r.$2(A.D_(s),4))+"-"+A.p(r.$1(A.CY(s)))+"-"+A.p(r.$1(A.wr(s)))+" "+A.p(r.$1(A.CW(s)))+":"+A.p(r.$1(A.CX(s)))+":"+A.p(r.$1(A.CZ(s)))+"."+A.p(r.$2(A.ET(s),3))+"Z"},
F6(a){var s=Date.now()
return new A.nH(a,new A.aF(s,0,!1))},
bo:function bo(){},
eK:function eK(a){this.a=a},
dO:function dO(a,b){this.b=a
this.a=b},
ju:function ju(a){this.a=a},
c_:function c_(a){this.a=a},
cF:function cF(a){this.a=a},
cK:function cK(a){this.a=a},
eB:function eB(a){this.a=a},
fR:function fR(a){this.a=a},
ft:function ft(a){this.a=a},
xV:function xV(){},
ee:function ee(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fT:function fT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l0:function l0(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
BX:function BX(){},
nH:function nH(a,b){this.a=a
this.c=b},
JT(a){return 0.5+B.at.nd()},
Da(a){var s,r=a.toLowerCase()
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
JU(a){var s,r,q,p,o,n,m,l,k=null,j=A.ag("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ef(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Da(r)
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
return A.Db(r,q,p,o,n,A.aK(s))}j=A.ag("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ef(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Da(r)
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
return A.Db(l,q,r,p,o,A.aK(s))}j=A.ag("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ef(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.Da(r)
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
return A.Db(r,q,p,o,n,A.aK(s))}return k},
Db(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.CA(a,b,c,d,e,f,0)
return s}catch(r){return null}},
xJ:function xJ(a,b){this.at=a
this.ay=b},
jh:function jh(a,b){this.a=a
this.b=b},
jC:function jC(a,b){this.a=a
this.b=b},
xX:function xX(a,b){this.a=a
this.b=b},
GF(a,b,c,d,e,f,g,h,i,j){var s,r=A.GX(a,b,c,null,d,e,f,g,h,i,j),q=A.v(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.Z[s],r[s])
return q},
GX(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.GC(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
GC(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
ME(a,b,c,d,e,f,g){var s,r=null,q=A.H8(B.a6,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.v(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.Y[s],q[s])
return p},
H8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.GD(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
GD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
H4(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
hZ(a){return new A.X(a,new A.Ci(),A.a0(a).i("X<1,k>")).C(0,", ")},
h9(a){return A.pt("lp_sync_row",new A.xW(a))},
ja(a){return A.pt("lp_outbox",new A.vJ(a))},
Jj(a){return A.pt("lp_op_queue",new A.vE(a))},
kG(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aM(n)
l=A.P(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.C(A.a7(k,"?",!1,n),", ")
k=a.ah("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kG)
case 3:j.F(0,i.bZ(h.a(d),new A.Cg(),n))
k=A.P(l,n)
k.push("pending")
k.push("failed")
k=a.ah("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kG)
case 4:j.F(0,i.bZ(h.a(d),new A.Ch(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kG,r)},
i0(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$i0=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eq("lp_blobs",A.j(["hash"],q),1,"hash = ?",A.j([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$i0)
case 5:s=p.bz(o.a(f))?2:4
break
case 2:q=a.aD(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$i0)
case 6:s=3
break
case 4:q=a.aG("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.j([c,b],t.hf))
s=7
return A.a(q,$async$i0)
case 7:case 3:return A.e(null,r)}})
return A.f($async$i0,r)},
BQ(a,b){var s=0,r=A.h(t.H),q,p
var $async$BQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aG(u.y,A.j([b],t.s))
s=3
return A.a(p,$async$BQ)
case 3:case 1:return A.e(q,r)}})
return A.f($async$BQ,r)},
cx(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cx=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nl("lp_file_refs",A.j(["ref_id","hash"],n),"store = ? AND record_id = ?",A.j([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cx)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.U("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cx)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.BQ(a,o),$async$cx)
case 8:case 7:s=3
break
case 4:m=a.U("lp_conflicts","store = ? AND record_id = ?",A.j([b,c],n))
s=9
return A.a(m,$async$cx)
case 9:m=t.N
m=a.K("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.j([b,c],n))
s=10
return A.a(m,$async$cx)
case 10:s=d?11:12
break
case 11:m=a.U("lp_outbox","store = ? AND record_id = ?",A.j([b,c],n))
s=13
return A.a(m,$async$cx)
case 13:n=a.U("lp_sync_row","store = ? AND record_id = ?",A.j([b,c],n))
s=14
return A.a(n,$async$cx)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cx,r)},
cO:function cO(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
Ci:function Ci(){},
cN:function cN(a,b,c,d,e,f,g,h,i,j){var _=this
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
xW:function xW(a){this.a=a},
ck:function ck(a,b,c,d,e,f,g,h,i,j){var _=this
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
vJ:function vJ(a){this.a=a},
eA:function eA(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
vE:function vE(a){this.a=a},
Cg:function Cg(){},
Ch:function Ch(){},
Dd(a,b,c,d,e){var s=e==null?A.j([],t.eb):e
return new A.bF(a,b,c,s,d,new A.AD())},
nO(a){var s=$.D.h(0,$.kL())
if(s instanceof A.bF&&s.a===a)return s
return null},
bF:function bF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
y8:function y8(){},
y7:function y7(a,b,c){this.a=a
this.b=b
this.c=c},
AD:function AD(){this.a=0
this.b=null},
lD:function lD(a,b){this.a=a
this.b=b},
y_:function y_(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
y6:function y6(a){this.a=a},
y2:function y2(a){this.a=a},
y5:function y5(a,b,c){this.a=a
this.b=b
this.c=c},
y4:function y4(a,b,c){this.a=a
this.b=b
this.c=c},
y3:function y3(a,b,c){this.a=a
this.b=b
this.c=c},
y1:function y1(a){this.a=a},
y0:function y0(){},
om:function om(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
zr:function zr(a,b){this.a=a
this.b=b},
zq:function zq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zo:function zo(a,b){this.a=a
this.b=b},
zp:function zp(a,b){this.a=a
this.b=b},
zn:function zn(a){this.a=a},
hp:function hp(a,b){this.a=a
this.b=b},
MJ(a,b,c){var s,r,q,p,o=A.j([],t.s)
for(s=J.E(a);s.k();){r=new A.a3("")
A.ce(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aI(o)
p=B.b.C(o,"|")
b.$1(p.length)
return A.aq(B.l.v(B.e.v(p)).a)},
mX:function mX(a,b,c){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
x4:function x4(){},
x3:function x3(a){this.a=a},
x5:function x5(a){this.a=a},
mG:function mG(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=null
_.a=c
_.b=d
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
vC:function vC(a){this.a=a},
fk:function fk(){},
yK:function yK(a,b){this.a=a
this.b=0
this.c=b},
yL:function yL(a,b,c){this.a=a
this.b=b
this.c=c},
K2(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.av(s))throw A.b(A.bS('Request "v" must be an int.'))
if(!A.av(r)||r<0)throw A.b(A.bS('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.ds.D(0,q))throw A.b(A.bS("Unknown request operation: "+A.p(q)))
if(!t.f.b(p))throw A.b(A.bS('Request "a" must be a map.'))
return new A.hk(s,r,q,p.aV(0,new A.yz(),t.N,t.X))},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yz:function yz(){},
o3:function o3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yw:function yw(a,b,c){this.a=a
this.b=b
this.c=c},
Fe(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
yu:function yu(a){var _=this
_.d=a
_.e=0
_.r=null
_.w=!1
_.x=null},
yv:function yv(a){this.a=a},
oK:function oK(a){this.a=a},
J4(a){var s,r,q
try{s=A.pq(a)
if(t.f.b(s)){r=A.f6(s)
return r}}catch(q){}return null},
J5(a){if(a instanceof A.jJ)return A.ps(new A.o3(3,a.a,a.b,null).p())
t.bp.a(a)
return A.CS(a.a,a.b,a.c,a.d)},
CS(a,b,c,d){return A.ps(new A.o3(3,a,null,new A.yw(b,c,d)).p())},
kw(a){return A.LU(a)},
LU(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kw=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.i_()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a1(f.getDirectory(),k),$async$kw)
case 7:n=c
j=$.i1()
i=A.P(j.d_(0,"drift_db"),t.N)
m=i
J.E2(m,j.d_(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ar(l)===0){s=9
break}s=11
return A.a(A.a1(n.getDirectoryHandle(l,{create:!1}),k),$async$kw)
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
return A.f($async$kw,r)},
pj(a,b){return A.LV(a,b)},
LV(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pj=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kw(a),$async$pj)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a1(m.getFileHandle(A.dM(b,$.i1().a).gjX(),{create:!1}),t.m),$async$pj)
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
return A.f($async$pj,r)},
pk(a,b){return A.M2(a,b)},
M2(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pk=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kw(a),$async$pk)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.m_(m,A.dM(b,$.i1().a).gjX()),$async$pk)
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
return A.f($async$pk,r)},
uS:function uS(){},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
mp:function mp(a,b,c){this.a=a
this.d=b
this.e=c},
v2:function v2(a,b,c){this.a=a
this.b=b
this.c=c},
on:function on(a){this.a=a
this.b=0},
zx:function zx(a){this.a=a},
zy:function zy(a){this.a=a},
Ns(a){var s,r,q,p,o,n,m,l,k,j,i="maxDocBytes",h="destructiveBackup"
if(a==null)return A.v(t.N,t.X)
s=t.f
if(!s.b(a))throw A.b(A.bS("Open options must be a map."))
r=A.f6(a)
q=t.X
p=A.v(t.N,q)
o=r.h(0,"stores")
if(o!=null){if(!t.j.b(o))throw A.b(A.bS('"stores" must be a list.'))
n=A.j([],t.oq)
for(m=J.E(o);m.k();){l=m.gn()
if(!s.b(l))A.u(A.a9("Schema must be a map: "+A.p(l),null,null))
n.push(A.qa(A.f6(l),q))}p.j(0,"stores",n)}k=r.h(0,i)
if(k!=null){if(!A.av(k))throw A.b(A.bS('"maxDocBytes" must be an int.'))
p.j(0,i,k)}j=r.h(0,h)
if(j!=null){if(!A.bx(j))throw A.b(A.bS('"destructiveBackup" must be a bool.'))
p.j(0,h,j)}return p},
H2(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.f6(a).h(0,b)
return s}}catch(r){}return null},
Na(a,b){if(b!=null)return!1
return B.b.ca(a,new A.C2())},
C2:function C2(){},
C1:function C1(){},
yB:function yB(a){this.a=a},
f6(a){var s=A.v(t.N,t.X)
a.a8(0,new A.BS(s))
return s},
hl:function hl(){},
jJ:function jJ(a,b){this.b=a
this.a=b},
eN:function eN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
BS:function BS(a){this.a=a},
BR:function BR(){},
o6:function o6(){},
yE:function yE(a,b){var _=this
_.f=$
_.c=a
_.d=b
_.e=null},
yF:function yF(a){this.a=a},
o5:function o5(){},
yC:function yC(a){this.a=a},
yD:function yD(){},
pb:function pb(){},
Gh(a){return a},
Gx(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a3("")
o=a+"("
p.a=o
n=A.a0(b)
m=n.i("cq<1>")
l=new A.cq(b,0,s,m)
l.iW(b,0,s,n.c)
m=o+new A.X(l,new A.BC(),m.i("X<a_.E,k>")).C(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.Q(p.l(0),null))}},
qL:function qL(a){this.a=a},
qM:function qM(){},
qN:function qN(){},
BC:function BC(){},
tI:function tI(){},
dM(a,b){var s,r,q,p,o,n=b.oj(a),m=b.cN(a)
if(n!=null)a=B.a.ae(a,n.length)
s=t.s
r=A.j([],s)
q=A.j([],s)
s=a.length
if(s!==0&&b.cg(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cg(a.charCodeAt(o))){r.push(B.a.B(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ae(a,p))
q.push("")}return new A.mJ(b,n,m,r,q)},
mJ:function mJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
EQ(a){return new A.mK(a)},
mK:function mK(a){this.a=a},
JS(){var s,r,q,p,o,n,m,l,k=null
if(A.De().gb1()!=="file")return $.kK()
if(!B.a.bR(A.De().gbt(),"/"))return $.kK()
s=A.FO(k,0,0)
r=A.FM(k,0,0,!1)
q=A.AZ(k,0,0,k)
p=A.FL(k,0,0)
o=A.AY(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.FN("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.Dt(l,m)
else l=A.f0(l)
if(A.kp("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kI()==="a\\b")return $.pw()
return $.Hk()},
xG:function xG(){},
wn:function wn(a,b,c){this.d=a
this.e=b
this.f=c},
yg:function yg(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
yA:function yA(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
CF(a,b){if(b<0)A.u(A.aZ("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.u(A.aZ("Offset "+b+u.D+a.gm(0)+"."))
return new A.lV(a,b)},
xp:function xp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lV:function lV(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
IM(a,b){var s=A.IN(A.j([A.Kq(a,!0)],t.pg)),r=new A.ty(b).$0(),q=B.c.l(B.b.ga1(s).b+1),p=A.IO(s)?0:3,o=A.a0(s)
return new A.te(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.tg(),o.i("X<1,i>")).wU(0,B.bE),!A.Ni(new A.X(s,new A.th(),o.i("X<1,l?>"))),new A.a3(""))},
IO(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
IN(a){var s,r,q=A.N9(a,new A.tj(),t.nf,t.K)
for(s=A.n(q),r=new A.aT(q,q.r,q.e,s.i("aT<2>"));r.k();)J.E6(r.d,new A.tk())
s=s.i("aI<1,2>")
r=s.i("is<o.E,cu>")
s=A.P(new A.is(new A.aI(q,s),new A.tl(),r),r.i("o.E"))
return s},
Kq(a,b){var s=new A.A8(a).$0()
return new A.br(s,!0,null)},
Ks(a){var s,r,q,p,o,n,m=a.gaN()
if(!B.a.D(m,"\r\n"))return a
s=a.gN().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga3()
o=a.gN().gag()
p=A.nf(s,a.gN().gaq(),o,p)
o=A.B(m,"\r\n","\n")
n=a.gbg()
return A.xq(r,p,o,A.B(n,"\r\n","\n"))},
Kt(a){var s,r,q,p,o,n,m
if(!B.a.bR(a.gbg(),"\n"))return a
if(B.a.bR(a.gaN(),"\n\n"))return a
s=B.a.B(a.gbg(),0,a.gbg().length-1)
r=a.gaN()
q=a.gR()
p=a.gN()
if(B.a.bR(a.gaN(),"\n")){o=A.BW(a.gbg(),a.gaN(),a.gR().gaq())
o.toString
o=o+a.gR().gaq()+a.gm(a)===a.gbg().length}else o=!1
if(o){r=B.a.B(a.gaN(),0,a.gaN().length-1)
if(r.length===0)p=q
else{o=a.gN().gar()
n=a.ga3()
m=a.gN().gag()
p=A.nf(o-1,A.Fv(s),m-1,n)
q=a.gR().gar()===a.gN().gar()?p:a.gR()}}return A.xq(q,p,r,s)},
Kr(a){var s,r,q,p,o
if(a.gN().gaq()!==0)return a
if(a.gN().gag()===a.gR().gag())return a
s=B.a.B(a.gaN(),0,a.gaN().length-1)
r=a.gR()
q=a.gN().gar()
p=a.ga3()
o=a.gN().gag()
p=A.nf(q-1,s.length-B.a.dl(s,"\n")-1,o-1,p)
return A.xq(r,p,s,B.a.bR(a.gbg(),"\n")?B.a.B(a.gbg(),0,a.gbg().length-1):a.gbg())},
Fv(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.ig(a,"\n",s-2)-1
else return s-B.a.dl(a,"\n")-1},
te:function te(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ty:function ty(a){this.a=a},
tg:function tg(){},
tf:function tf(){},
th:function th(){},
tj:function tj(){},
tk:function tk(){},
tl:function tl(){},
ti:function ti(a){this.a=a},
tz:function tz(){},
tm:function tm(a){this.a=a},
tt:function tt(a,b,c){this.a=a
this.b=b
this.c=c},
tu:function tu(a,b){this.a=a
this.b=b},
tv:function tv(a){this.a=a},
tw:function tw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tr:function tr(a,b){this.a=a
this.b=b},
ts:function ts(a,b){this.a=a
this.b=b},
tn:function tn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(a,b,c){this.a=a
this.b=b
this.c=c},
tq:function tq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tx:function tx(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
A8:function A8(a){this.a=a},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nf(a,b,c,d){if(a<0)A.u(A.aZ("Offset may not be negative, was "+a+"."))
else if(c<0)A.u(A.aZ("Line may not be negative, was "+c+"."))
else if(b<0)A.u(A.aZ("Column may not be negative, was "+b+"."))
return new A.co(d,a,c,b)},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ng:function ng(){},
ni:function ni(){},
JL(a,b,c){return new A.h2(c,a,b)},
nj:function nj(){},
h2:function h2(a,b,c){this.c=a
this.a=b
this.b=c},
h3:function h3(){},
xq(a,b,c,d){var s=new A.d9(d,a,b,c)
s.oX(a,b,c)
if(!B.a.D(d,c))A.u(A.Q('The context line "'+d+'" must contain "'+c+'".',null))
if(A.BW(d,c,a.gaq())==null)A.u(A.Q('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
d9:function d9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
JP(a){var s
A:{if(18===a){s=B.dt
break A}if(23===a){s=B.du
break A}if(9===a){s=B.dv
break A}s=null
break A}return s},
jw:function jw(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
JO(a,b,c,d,e,f,g){return new A.c6(d,b,c,e,f,a,g)},
c6:function c6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xv:function xv(){},
kS:function kS(a){this.a=a},
Ls(a,b,c){var s,r,q,p,o,n=new A.nZ(c,A.a7(c.b,null,!1,t.X))
try{A.G5(a,b.$1(n))}catch(r){s=A.C(r)
q=B.e.v(A.ip(s))
p=a.a
o=p.cF(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
G5(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.av(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Fh(b).l(0)))
break A}if(b instanceof A.aN){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Eb(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bx(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Fh(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cF(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cF(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.ar(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.G5(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.u(A.az(b,"result","Unsupported type"))}return s},
rb:function rb(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rk:function rk(a){this.a=a},
rj:function rj(a){this.a=a},
rl:function rl(a){this.a=a},
rh:function rh(a){this.a=a},
rg:function rg(a){this.a=a},
ri:function ri(a){this.a=a},
rd:function rd(a){this.a=a},
rc:function rc(a){this.a=a},
re:function re(a){this.a=a},
rm:function rm(a){this.a=a},
rf:function rf(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
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
AO:function AO(a,b){this.a=a
this.b=b},
AP:function AP(a,b,c){this.a=a
this.b=b
this.c=c},
AQ:function AQ(a,b,c){this.a=a
this.b=b
this.c=c},
xr:function xr(){},
h4:function h4(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
CJ(a,b){var s=$.pv()
return new A.m8(A.v(t.N,t.a_),s,a)},
m8:function m8(a,b,c){this.d=a
this.b=b
this.a=c},
oA:function oA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Nt(a){var s=J.I2(new v.G.URL(a,"file:///").pathname,"/")
return new A.at(s,new A.Cb(),A.a0(s).i("at<1>"))},
Cb:function Cb(){},
qR:function qR(){},
n2:function n2(a,b,c){this.d=a
this.a=b
this.c=c},
c5:function c5(a,b){this.a=a
this.b=b},
Ax:function Ax(a){this.a=a
this.b=-1},
oQ:function oQ(){},
oR:function oR(){},
oT:function oT(){},
oU:function oU(){},
vH:function vH(a,b){this.a=a
this.b=b},
Jz(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bE(r,"step")}return s},
ek:function ek(){},
bN:function bN(a){this.a=a},
ls:function ls(a){this.a=a},
hg(a){return new A.df(a)},
E9(a,b){var s,r,q,p
if(b==null)b=$.pv()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cP(256)
r&2&&A.H(a)
a[q]=p}},
df:function df(a){this.a=a},
jv:function jv(a){this.a=a},
b6:function b6(){},
l8:function l8(){},
l7:function l7(){},
Nz(a,b){var s=null,r=new A.eu(t.kk)
return A.pu(a,new A.jK(s,s,s,s,s,s,s,s,new A.Cl(new A.Ck(r,A.Bu(new A.Cm(r)))),s,s,s,s),s,b)},
eO:function eO(a){var _=this
_.d=a
_.c=_.b=_.a=null},
Cm:function Cm(a){this.a=a},
Ck:function Ck(a,b){this.a=a
this.b=b},
Cl:function Cl(a){this.a=a},
yr:function yr(a){this.a=a},
ym:function ym(a,b,c){this.a=a
this.b=b
this.c=c},
yt:function yt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ys:function ys(a,b,c){this.b=a
this.c=b
this.d=c},
dV:function dV(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
bW(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.C(r)
if(q instanceof A.df){s=q
return s.a}else return 1}},
lv:function lv(a){this.b=this.a=$
this.d=a},
qX:function qX(a,b,c){this.a=a
this.b=b
this.c=c},
qU:function qU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qZ:function qZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r0:function r0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r2:function r2(a,b){this.a=a
this.b=b},
qW:function qW(a){this.a=a},
r1:function r1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r6:function r6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r4:function r4(a,b){this.a=a
this.b=b},
r3:function r3(a,b){this.a=a
this.b=b},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a,b){this.a=a
this.b=b},
r5:function r5(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b){this.a=a
this.$ti=b},
pJ:function pJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pL:function pL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pK:function pK(a,b,c){this.a=a
this.b=b
this.c=c},
cB(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bq(a,"success",new A.qu(r,a,b),!1,q)
A.bq(a,"error",new A.qv(r,a),!1,q)
return s},
In(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bq(a,"success",new A.qz(r,a,b),!1,q)
A.bq(a,"error",new A.qA(r,a),!1,q)
A.bq(a,"blocked",new A.qB(r),!1,q)
return s},
eS:function eS(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
zB:function zB(a,b){this.a=a
this.b=b},
zC:function zC(a,b){this.a=a
this.b=b},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
qv:function qv(a,b){this.a=a
this.b=b},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(a,b){this.a=a
this.b=b},
qB:function qB(a){this.a=a},
i_(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
Eu(a,b,c){var s=a.read(b,c)
return s},
Ev(a,b,c){var s=a.write(b,c)
return s},
m_(a,b){return A.a1(a.removeEntry(b,{recursive:!1}),t.X)},
Et(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.u(A.Q("Target object does not implement the async iterable interface",null))
return new A.eW(new A.rV(),new A.i5(a,s),s.i("eW<aa.T,M>"))},
rV:function rV(){},
yn:function yn(a){this.a=a},
yo:function yo(a){this.a=a},
yq(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$yq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a1(p.fetch(new p.URL(a,A.bf(p.location).href),null),t.m),$async$yq)
case 3:q=o.yp(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yq,r)},
yp(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$yp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lv(A.v(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.yn(p).ii(a),$async$yp)
case 3:q=new o.hh(new n.yr(m.K1(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yp,r)},
hh:function hh(a){this.a=a},
Ku(a){var s=new A.k1(a,new A.ao(new A.w($.D,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.p0(a)
return s},
ma(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$ma=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.pM(a)
n=A.CJ("dart-memory",null)
m=$.pv()
l=new A.dB(o,n,new A.eu(t.p3),A.aM(p),A.v(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.ip(),$async$ma)
case 3:s=4
return A.a(l.eT(),$async$ma)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ma,r)},
pM:function pM(a){this.a=null
this.b=a},
pP:function pP(a){this.a=a},
pO:function pO(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(a){this.a=a},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
Ab:function Ab(a){this.a=a},
Ac:function Ac(a){this.a=a},
Aa:function Aa(a){this.a=a},
Ad:function Ad(a,b,c){this.a=a
this.b=b
this.c=c},
Af:function Af(a,b){this.a=a
this.b=b},
Ae:function Ae(a,b){this.a=a
this.b=b},
zN:function zN(a,b,c){this.a=a
this.b=b
this.c=c},
zO:function zO(a,b){this.a=a
this.b=b},
oJ:function oJ(a,b){this.a=a
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
tC:function tC(a,b,c){this.a=a
this.b=b
this.c=c},
tD:function tD(){},
tB:function tB(a,b){this.a=a
this.b=b},
oB:function oB(a,b,c){this.a=a
this.b=b
this.c=c},
A9:function A9(a,b){this.a=a
this.b=b},
b8:function b8(){},
k_:function k_(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jU:function jU(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hr:function hr(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hL:function hL(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
F1(a){var s=A.CJ("dart-memory",null),r=$.pv()
return new A.h1(s,r,a)},
nb(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$nb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.i_()
if(j==null)throw A.b(A.hg(1))
p=t.m
s=3
return A.a(A.a1(j.getDirectory(),p),$async$nb)
case 3:o=d
n=A.Nt(a),m=J.E(n.a),n=new A.cS(m,n.b,n.$ti.i("cS<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a1(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$nb)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a5(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nb,r)},
nc(a){var s=0,r=A.h(t.m),q
var $async$nc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nb(a,!0),$async$nc)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$nc,r)},
xn(a,b){var s=0,r=A.h(t.g_),q,p
var $async$xn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.i_()==null)throw A.b(A.hg(1))
p=A
s=3
return A.a(A.nc(a),$async$xn)
case 3:q=p.xm(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xn,r)},
xm(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$xm=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.F1(c)
s=3
return A.a(p.cR(a,!1),$async$xm)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xm,r)},
fB:function fB(a,b,c){this.c=a
this.a=b
this.b=c},
h1:function h1(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
xo:function xo(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
At:function At(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K1(a,b){var s=A.bf(a.exports.memory)
b.b!==$&&A.eb()
b.b=s
s=new A.yh(s,b,a.exports)
s.oY(a,b)
return s},
o8(a,b){var s,r=A.bR(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dX(a,b,c){var s=a.buffer
return B.o.f4(A.bR(s,b,c==null?A.o8(a,b):c))},
Df(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.f4(A.bR(s,b,c==null?A.o8(a,b):c))},
Ff(a,b,c){var s=new Uint8Array(c)
B.f.cZ(s,0,A.bR(a.buffer,b,c))
return s},
yh:function yh(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
yi:function yi(a){this.a=a},
yj:function yj(a){this.a=a},
yk:function yk(a){this.a=a},
yl:function yl(a){this.a=a},
BN(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$BN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kM()
s=l!=null?3:5
break
case 3:p=A.LZ()
s=6
return A.a(A.jI(l,p,null,null,!1),$async$BN)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a5({port:m.port1,lockName:p},new A.ii(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$BN,r)},
LZ(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bu(97+$.HM().cP(26))
return r.charCodeAt(0)==0?r:r},
Id(a){return new A.id(a)},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
wu:function wu(){},
wy:function wy(a){this.a=a},
wz:function wz(a){this.a=a},
wx:function wx(a){this.a=a},
ww:function ww(a){this.a=a},
wv:function wv(a){this.a=a},
id:function id(a){this.a=a},
r9:function r9(){},
lr:function lr(a){this.a=a},
qS:function qS(a){this.a=a},
eM:function eM(){},
lL(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.nc(a),$async$lL)
case 3:p=e
o=A.F1(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cR(p,!0),$async$lL)
case 6:case 5:q=new A.lK(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lL,r)},
lK:function lK(a,b,c){this.a=a
this.b=b
this.c=c},
tc:function tc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jI(a,b,c,d,e){var s,r,q={},p=new A.w($.D,t.nI),o=new A.ao(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.CG(A.a1(a.request(b,s,A.cV(new A.yx(q,o))),r),new A.yy(q,d,o),r,t.K)
return p},
yx:function yx(a,b){this.a=a
this.b=b},
yy:function yy(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.a=a},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
ro:function ro(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rn:function rn(a,b){this.a=a
this.b=b},
rp:function rp(a){this.a=a},
j1:function j1(a){this.a=!1
this.b=a},
vz:function vz(a,b){this.a=a
this.b=b},
vy:function vy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vx:function vx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ik(a){var s,r,q,p,o=A.j([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bM(n,A.a0(n).i("bM<1,k>"))
for(s=J.L(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a5(A.fv(B.cV,s.h(m,q)),s.h(m,q+1)))}s=A.hN(a.b)
q=A.hN(a.c)
p=A.hN(a.d)
return new A.el(o,s,q,A.hN(a.g),p)},
el:function el(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
JC(a){var s
if(J.x(a.t,"errorResponse")){s=A.Iz(a)
if(s!=null&&s instanceof A.ds)return s
else return new A.fW(a.e)}else return new A.fW("Did not respond with expected type, got "+A.p(a))},
Iz(a){var s=a.s,r=s==null?null:A.ap(s)
A:{if(0===r){s=A.IA(t.c.a(a.r))
break A}if(1===r){s=B.aq
break A}s=null
break A}return s},
IA(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.A("Pattern matching error"))
n=new A.rF()
l=A.ap(A.f1(l))
A.F(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.em(i,h,A.bR(h,0,o))}else p=o
n=n.$1(k)
A.FX(g)
return new A.c6(s,r,l,g==null?o:A.ap(g),n,q,p)},
IB(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.JW(l)
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
JD(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.tc(a2,512,"transfer" in a2)
a5.mH(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Jz(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qr(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aH}else g=B.aI
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aJ
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.o8(r,f)
f=new Uint8Array(e,f,d)
c=new A.dk(!1).d3(f,0,a,!0)
i=c
g=B.aK
break
case 4:i=s.l0(j)
g=B.aL
break
case 5:default:i=a
g=B.aM}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.o8(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dk(!1).d3(a0,0,a,!0)}return A.GW(!1,b,0,0,a1,a,a3.xa(0))},
Nj(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rF:function rF(){},
GW(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
hU(a){var s,r,q,p,o=v.G,n=new o.Array()
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
MY(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
ms:function ms(a,b,c){this.a=a
this.b=b
this.$ti=c},
xa:function xa(){},
IE(a){var s,r
for(s=0;s<5;++s){r=B.cI[s]
if(r.c===a)return r}throw A.b(A.Q("Unknown FS implementation: "+a,null))},
JV(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aM
break A}q=A.av(a)
p=q?a:j
if(q){s=p
r=B.aH
break A}q=a instanceof A.aN
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aI
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aJ
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aK
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aL
break A}q=A.bx(a)
k=q?a:j
if(q){s=k
r=B.br
break A}throw A.b(A.Q("Unsupported value: "+A.p(a),j))}return new A.a5(r,s)},
JW(a){var s,r,q,p,o,n
if(a instanceof A.em)return new A.a5(a.a,a.b)
s=[]
r=J.L(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.JV(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a5(s,t.a.a(B.f.gab(p)))},
dx:function dx(a,b,c){this.c=a
this.a=b
this.b=c},
cs:function cs(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
po(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$po=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bf(i.indexedDB)
i=$.kM()
i=i==null?null:A.jI(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bw(i,t.b3),$async$po)
case 3:l=b
p=5
s=8
return A.a(A.Im(m.open("drift_mock_db"),t.m),$async$po)
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
return A.f($async$po,r)},
BJ(a){return A.MH(a)},
MH(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$BJ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bf(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cV(new A.BK(j,m))
s=7
return A.a(A.Il(m,t.m),$async$BJ)
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
return A.f($async$BJ,r)},
hX(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$hX=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.i_()
if(h==null){q=B.u
s=1
break}j=t.m
s=3
return A.a(A.a1(h.getDirectory(),j),$async$hX)
case 3:m=b
p=5
s=8
return A.a(A.a1(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$hX)
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
case 7:l=A.j([],t.s)
j=new A.cv(A.cw(A.Et(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$hX)
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
return A.a(j.A(),$async$hX)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hX,r)},
Il(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bq(a,"success",new A.qs(r,a,b),!1,q)
A.bq(a,"error",new A.qt(r,a),!1,q)
return s},
Im(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ao(s,b.i("ao<0>")),q=t.m
A.bq(a,"success",new A.qw(r,a,b),!1,q)
A.bq(a,"error",new A.qx(r,a),!1,q)
A.bq(a,"blocked",new A.qy(r,a),!1,q)
return s},
BK:function BK(a,b){this.a=a
this.b=b},
qs:function qs(a,b,c){this.a=a
this.b=b
this.c=c},
qt:function qt(a,b){this.a=a
this.b=b},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(a,b){this.a=a
this.b=b},
qy:function qy(a,b){this.a=a
this.b=b},
wq:function wq(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
fW:function fW(a){this.a=a},
ds:function ds(a){this.a=a},
Lr(a){var s=a.gn1()
return new A.eW(new A.Bt(),s,A.n(s).i("eW<aa.T,M>"))},
Fr(a,b){var s=A.j([],t.kG),r=b==null?a.b:b
return new A.hq(a,r,new A.kf(),new A.kf(),new A.kf(),s)},
Kl(a,b,c){var s=t.S
s=new A.ho(c,A.j([],t.fV),a.a,new A.aL(new A.w($.D,t.D),t.h),A.v(s,t.br),A.v(s,t.m))
s.oV(a)
s.p_(a,b,c)
return s},
G6(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e8(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e8=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.i_()
if(b==null){q=B.aD
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.kM()
d=d==null?null:A.jI(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bw(d,t.b3),$async$e8)
case 7:j=a1
d=t.m
s=8
return A.a(A.a1(b.getDirectory(),d),$async$e8)
case 8:m=a1
s=9
return A.a(A.a1(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e8)
case 9:l=a1
s=10
return A.a(A.kA(l),$async$e8)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.CN(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a1(A.bf(e),t.X),$async$e8)
case 13:q=B.aD
n=[1]
s=5
break
case 12:g=i
q=new A.ka(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.aD
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
return A.a(A.m_(m,"_drift_feature_detection"),$async$e8)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e8,r)},
kA(a){return A.Mg(a)},
Mg(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kA=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a1(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kA)
case 7:j=c
s=8
return A.a(A.a1(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kA)
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
return A.a(A.a1(a.createSyncAccessHandle(),t.m),$async$kA)
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
return A.f($async$kA,r)},
Bt:function Bt(){},
kf:function kf(){this.a=null},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
zs:function zs(a){this.a=a},
zw:function zw(a,b){this.a=a
this.b=b},
zt:function zt(a,b){this.a=a
this.b=b},
zu:function zu(a){this.a=a},
zv:function zv(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
zc:function zc(a){this.a=a},
zh:function zh(a,b){this.a=a
this.b=b},
zk:function zk(a,b,c){this.a=a
this.b=b
this.c=c},
ze:function ze(a,b){this.a=a
this.b=b},
zd:function zd(a,b){this.a=a
this.b=b},
zj:function zj(a,b){this.a=a
this.b=b},
zi:function zi(a,b){this.a=a
this.b=b},
zm:function zm(a,b){this.a=a
this.b=b},
zl:function zl(a,b){this.a=a
this.b=b},
zf:function zf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zg:function zg(a,b){this.a=a
this.b=b},
zb:function zb(a){this.a=a},
lx:function lx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
rs:function rs(a){this.a=a},
rr:function rr(a){this.a=a},
rq:function rq(a,b){this.a=a
this.b=b},
yG:function yG(a,b,c,d,e,f){var _=this
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
yH:function yH(a,b){this.a=a
this.b=b},
yI:function yI(a,b){this.a=a
this.b=b},
yJ:function yJ(a){this.a=a},
K3(){var s=v.G
if(A.IT(s,"DedicatedWorkerGlobalScope"))return new A.os(s,new A.ot(s.location.href))
else return new A.oX(s,new A.ot(s.location.href))},
kr:function kr(){},
os:function os(a,b){this.a=a
this.b=b},
oX:function oX(a,b){this.a=a
this.b=b},
AI:function AI(a){this.a=a},
AJ:function AJ(a,b,c){this.a=a
this.b=b
this.c=c},
AH:function AH(a){this.a=a},
AF:function AF(a){this.a=a},
AG:function AG(a){this.a=a},
ot:function ot(a){this.a=a},
zI:function zI(a){this.a=a},
nr:function nr(a,b,c){this.c=a
this.a=b
this.b=c},
xF:function xF(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hc:function hc(){},
oC:function oC(){},
ct:function ct(a,b){this.a=a
this.b=b},
bq(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Gz(new A.zL(c),t.m)
s=s==null?null:A.cV(s)}s=new A.jY(a,b,s,!1,e.i("jY<0>"))
s.jO()
return s},
Gz(a,b){var s=$.D
if(s===B.i)return a
return s.hK(a,b)},
CC:function CC(a,b){this.a=a
this.$ti=b},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jY:function jY(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
zL:function zL(a){this.a=a},
zM:function zM(a){this.a=a},
Hb(a){return v.mangledGlobalNames[a]},
H_(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
IW(a,b){return b in a},
CN(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
N9(a,b,c,d){var s,r,q,p,o,n=A.v(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.j([],s)
n.j(0,p,o)
p=o}else p=o
J.aO(p,q)}return n},
CK(a){var s=J.E(a.a)
if(new A.cS(s,a.b,a.$ti.i("cS<1>")).k())return s.gn()
return null},
BF(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.H(a)
a[r]=s&255
b=s/256|0;--r}},
NJ(a){return a},
H9(a){if(a instanceof A.du)return a
return new A.du(a)},
NK(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.C(p)
if(q instanceof A.h2){s=q
throw A.b(A.JL("Invalid "+a+": "+s.a,s.b,s.gfU()))}else if(t.Y.b(q)){r=q
throw A.b(A.a9("Invalid "+a+' "'+b+'": '+r.gik(),r.gfU(),r.gar()))}else throw p}},
fb(a){if(B.a.bR(a,"\\"))throw A.b(A.aS('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.B(a,"'","\\'")+"'"},
NF(a,b,c,d){var s="("+d+"="+A.fb(a)+" && id~"+A.fb(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.fb(c)+")"},
hV(){var s,r,q,p=$.HN(),o=$.HG()+1
$.Lx=o
s=B.a.ir(B.c.kJ(o,36),8,"0")
r=J.EC(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cP(36)]
return B.a.B(s+B.b.ej(r),0,15)},
Nv(a,b){var s,r,q,p=A.v(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
Nw(a,b){var s,r,q=A.j([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.push(A.Nv(a[r],b))
return q},
pt(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.da)throw q
else{s=r
r=A.db("Corrupt "+a+" row: "+A.p(s))
throw A.b(r)}}},
BP(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.aF(a,null)
if(t.f.b(s)){q=A.bl(s,t.N,t.X)
return q}return B.j}catch(p){r=A.C(p)
q=A.db("Corrupt "+c+" row: "+b+": "+A.p(r))
throw A.b(q)}},
GL(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bh
try{s=B.h.aF(a,null)
if(t.j.b(s)){q=J.pA(s,t.N)
q=q.iD(q)
return q}return B.bh}catch(p){r=A.C(p)
q=A.db("Corrupt "+c+" row: "+b+": "+A.p(r))
throw A.b(q)}},
GK(a){var s,r,q,p,o=null
if(a==null)return B.u
A.F(a)
if(a.length===0)return B.u
s=B.h.aF(a,o)
if(!t.j.b(s))throw A.b(A.a9("expected a JSON array, got "+J.bY(s).l(0),o,o))
r=A.j([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.u(A.a9("dirty-field member is "+J.bY(p).l(0)+", expected String",o,o)))}return r},
f8(a){var s,r=J.L(a)
if(r.gE(a))return null
s=J.bL(r.gH(a).gb_())
if(A.av(s))return s
if(typeof s=="string")return A.jf(s,null)
return null},
GP(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.cD(B.x.x5(r*J.HV(d.$1(o),0.5,1.5)),0,0)},
Nr(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.ck)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.a9("Unsupported fieldCipher type: "+A.p(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ar(r)!==32)throw A.b(B.cj)
q=new Uint8Array(32)
for(p=J.L(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.av(n)||n<0||n>255)throw A.b(A.a9("Malformed AES-256-GCM key byte at index "+o+": "+A.p(n),m,m))
q[o]=n}A.E7(q)
p=$.Cr()
if($.kI()!==B.P)A.u(A.A("BigEndian systems are unsupported"))
return new A.pE(new A.lt(12,32,m),new A.jt(new A.na(A.E7(q)),m),p)},
Nn(){var s=A.K3(),r=t.cj
new A.yG(s,B.bR,A.j([],t.az),A.v(t.S,t.lp),new A.j1(A.CR(r)),new A.j1(A.CR(r))).eh()},
GJ(){var s,r,q,p,o=null
try{o=A.De()}catch(s){if(t.mA.b(A.C(s))){r=$.Br
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.G3)){r=$.Br
r.toString
return r}$.G3=o
if($.DW()===$.kK())r=$.Br=o.bX(".").l(0)
else{q=o.kI()
p=q.length-1
r=$.Br=p===0?q:B.a.B(q,0,p)}return r},
GS(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
GM(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.GS(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.B(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Ni(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gH(0)
for(r=A.cr(a,1,null,a.$ti.i("a_.E")),q=r.$ti,r=new A.an(r,r.gm(0),q.i("an<a_.E>")),q=q.i("a_.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
Ny(a,b){var s=B.b.bS(a,null)
if(s<0)throw A.b(A.Q(A.p(a)+" contains no null elements.",null))
a[s]=b},
H3(a,b){var s=B.b.bS(a,b)
if(s<0)throw A.b(A.Q(A.p(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
MT(a,b){var s,r,q,p
for(s=new A.cg(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
BW(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.ce(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bS(a,b)
while(r!==-1){q=r===0?0:B.a.ig(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.ce(a,b,r+1)}return null},
DJ(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c6(A.dX(r.b,p.sqlite3_errmsg(q),null),A.dX(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.p(o)+")",c,n,d,e,f)},
Cn(a,b,c,d,e){throw A.b(A.DJ(a.a,a.b,b,c,d,e))},
Eb(a){if(a.a0(0,$.He())<0||a.a0(0,$.Hd())>0)throw A.b(A.Eq("BigInt value exceeds the range of 64 bits"))
return a},
JA(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ap(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dX(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.Ff(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Ex(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bu("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cP(61)))
return s.charCodeAt(0)==0?s:s},
x7(a){var s=0,r=A.h(t.lo),q
var $async$x7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a1(a.arrayBuffer(),t.a),$async$x7)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$x7,r)}},B={}
var w=[A,J,B]
var $={}
A.CP.prototype={}
J.mc.prototype={
P(a,b){return a===b},
gJ(a){return A.eC(a)},
l(a){return"Instance of '"+A.mP(a)+"'"},
gak(a){return A.bI(A.Dz(this))}}
J.me.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gak(a){return A.bI(t.y)},
$iak:1,
$iR:1}
J.iI.prototype={
P(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gak(a){return A.bI(t.P)},
$iak:1,
$iU:1}
J.aH.prototype={$iM:1}
J.dE.prototype={
gJ(a){return 0},
gak(a){return B.dN},
l(a){return String(a)}}
J.mM.prototype={}
J.dU.prototype={}
J.bO.prototype={
l(a){var s=a[$.Hh()]
if(s==null)s=a[$.fc()]
if(s==null)return this.oJ(a)
return"JavaScript function for "+J.Z(s)}}
J.bs.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fE.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.z.prototype={
f3(a,b){return new A.bM(a,A.a0(a).i("@<1>").X(b).i("bM<1,2>"))},
t(a,b){a.$flags&1&&A.H(a,29)
a.push(b)},
iA(a,b){var s
a.$flags&1&&A.H(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.x6(b,null))
return a.splice(b,1)[0]},
aD(a,b,c){var s
a.$flags&1&&A.H(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.x6(b,null))
a.splice(b,0,c)},
ko(a,b,c){var s,r
a.$flags&1&&A.H(a,"insertAll",2)
A.EZ(b,0,a.length,"index")
if(!t.O.b(c))c=J.I5(c)
s=J.ar(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.aw(a,b,r,c)},
kD(a){a.$flags&1&&A.H(a,"removeLast",1)
if(a.length===0)throw A.b(A.BT(a,-1))
return a.pop()},
G(a,b){var s
a.$flags&1&&A.H(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
rQ(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aA(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dw(a,b){return new A.at(a,b,A.a0(a).i("at<1>"))},
F(a,b){var s
a.$flags&1&&A.H(a,"addAll",2)
if(Array.isArray(b)){this.pa(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
pa(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aA(a))
for(s=0;s<r;++s)a.push(b[s])},
an(a){a.$flags&1&&A.H(a,"clear","clear")
a.length=0},
cj(a,b,c){return new A.X(a,b,A.a0(a).i("@<1>").X(c).i("X<1,2>"))},
C(a,b){var s,r=A.a7(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.p(a[s])
return r.join(b)},
ej(a){return this.C(a,"")},
cV(a,b){return A.cr(a,0,A.cw(b,"count",t.S),A.a0(a).c)},
bl(a,b){return A.cr(a,b,null,A.a0(a).c)},
cK(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aA(a))}if(c!=null)return c.$0()
throw A.b(A.aG())},
mZ(a,b){return this.cK(a,b,null)},
a9(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.ax(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ax(c,b,a.length,"end",null))
if(b===c)return A.j([],A.a0(a))
return A.j(a.slice(b,c),A.a0(a))},
b8(a,b){return this.T(a,b,null)},
fQ(a,b,c){A.bd(b,c,a.length)
return A.cr(a,b,c,A.a0(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.aG())},
ga1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aG())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aG())
throw A.b(A.iF())},
iB(a,b,c){a.$flags&1&&A.H(a,18)
A.bd(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.H(a,5)
A.bd(b,c,a.length)
s=c-b
if(s===0)return
A.bc(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.pD(d,e).bY(0,!1)
q=0}p=J.L(r)
if(q+s>p.gm(r))throw A.b(A.EA())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aw(a,b,c,d){return this.ai(a,b,c,d,0)},
ca(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aA(a))}return!1},
cI(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aA(a))}return!0},
co(a,b){var s,r,q,p,o
a.$flags&2&&A.H(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.LB()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a0(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e9(b,2))
if(p>0)this.rR(a,p)},
aI(a){return this.co(a,null)},
rR(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bS(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
dl(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
D(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gY(a){return a.length!==0},
l(a){return A.tJ(a,"[","]")},
bY(a,b){var s=A.j(a.slice(0),A.a0(a))
return s},
cW(a){return this.bY(a,!0)},
gu(a){return new J.fh(a,a.length,A.a0(a).i("fh<1>"))},
gJ(a){return A.eC(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.H(a,"set length","change the length of")
if(b<0)throw A.b(A.ax(b,0,null,"newLength",null))
if(b>a.length)A.a0(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.BT(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
if(!(b>=0&&b<a.length))throw A.b(A.BT(a,b))
a[b]=c},
n2(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gak(a){return A.bI(A.a0(a))},
$ibb:1,
$iK:1,
$io:1,
$iq:1}
J.md.prototype={
xg(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mP(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.tK.prototype={}
J.fh.prototype={
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
a0(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gks(b)
if(this.gks(a)===s)return 0
if(this.gks(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gks(a){return a===0?1/a<0:a<0},
iC(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
u5(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
vm(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
x5(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bp(a,b,c){if(this.a0(b,c)>0)throw A.b(A.f5(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
kJ(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ax(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.u(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bj("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fM(a,b){return a+b},
al(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iV(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mn(a,b)},
L(a,b){return(a|0)===a?a/b|0:this.mn(a,b)},
mn(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
bG(a,b){if(b<0)throw A.b(A.f5(b))
return b>31?0:a<<b>>>0},
tc(a,b){return b>31?0:a<<b>>>0},
dD(a,b){var s
if(b<0)throw A.b(A.f5(b))
if(a>0)s=this.jM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){var s
if(a>0)s=this.jM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ml(a,b){if(0>b)throw A.b(A.f5(b))
return this.jM(a,b)},
jM(a,b){return b>31?0:a>>>b},
ol(a,b){return a>b},
gak(a){return A.bI(t.cZ)},
$iaw:1,
$iab:1,
$iaV:1}
J.iH.prototype={
gmI(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.L(q,4294967296)
s+=32}return s-Math.clz32(q)},
gak(a){return A.bI(t.S)},
$iak:1,
$ii:1}
J.mf.prototype={
gak(a){return A.bI(t.W)},
$iak:1}
J.dC.prototype={
jW(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.p0(b,a,c)},
hF(a,b){return this.jW(a,b,0)},
em(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.h7(c,a)},
bR(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ae(a,r-s)},
kF(a,b,c){A.EZ(0,0,a.length,"startIndex")
return A.NE(a,b,c,0)},
d_(a,b){var s
if(typeof b=="string")return A.j(a.split(b),t.s)
else{if(b instanceof A.et){s=b.e
s=!(s==null?b.e=b.pI():s)}else s=!1
if(s)return A.j(a.split(b.b),t.s)
else return this.pV(a,b)}},
ds(a,b,c,d){var s=A.bd(b,c,a.length)
return A.H7(a,b,s,d)},
pV(a,b){var s,r,q,p,o,n,m=A.j([],t.s)
for(s=J.Ct(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gn()
o=p.gR()
n=p.gN()
q=n-o
if(q===0&&r===o)continue
m.push(this.B(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ae(a,r))
return m},
ad(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.ad(a,b,0)},
B(a,b,c){return a.substring(b,A.bd(b,c,a.length))},
ae(a,b){return this.B(a,b,null)},
cm(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.IX(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.EF(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
xe(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.EF(r,s))},
bj(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bS)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ir(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bj(c,s)+a},
ws(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bj(" ",s)},
ce(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bS(a,b){return this.ce(a,b,0)},
ig(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dl(a,b){return this.ig(a,b,null)},
D(a,b){return A.NB(a,b,0)},
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
gak(a){return A.bI(t.N)},
gm(a){return a.length},
$ibb:1,
$iak:1,
$iaw:1,
$ik:1}
A.zA.prototype={
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
B.f.aw(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.aw(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.H(r)
r[q+m]=l}k.a=s},
kH(){var s,r=this
if(r.a===0)return $.px()
s=J.bK(B.f.gab(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.px()
return s},
gm(a){return this.a}}
A.z8.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b9(b))
this.b.push(s)
this.a=this.a+s.length},
kH(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.px()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.an(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.r)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.aw(q,p,m,n)}l.a=0
B.b.an(s)
return q},
gm(a){return this.a}}
A.dY.prototype={
gu(a){return new A.lc(J.E(this.gbe()),A.n(this).i("lc<1,2>"))},
gm(a){return J.ar(this.gbe())},
gE(a){return J.bz(this.gbe())},
gY(a){return J.dr(this.gbe())},
bl(a,b){var s=A.n(this)
return A.fj(J.pD(this.gbe(),b),s.c,s.y[1])},
cV(a,b){var s=A.n(this)
return A.fj(J.Cw(this.gbe(),b),s.c,s.y[1])},
a9(a,b){return A.n(this).y[1].a(J.pB(this.gbe(),b))},
gH(a){return A.n(this).y[1].a(J.bL(this.gbe()))},
ga1(a){return A.n(this).y[1].a(J.pC(this.gbe()))},
gap(a){return A.n(this).y[1].a(J.Cv(this.gbe()))},
D(a,b){return J.Cu(this.gbe(),b)},
l(a){return J.Z(this.gbe())}}
A.lc.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.eg.prototype={
gbe(){return this.a}}
A.jV.prototype={$iK:1}
A.jS.prototype={
h(a,b){return this.$ti.y[1].a(J.W(this.a,b))},
j(a,b,c){J.cX(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.I0(this.a,b)},
t(a,b){J.aO(this.a,this.$ti.c.a(b))},
co(a,b){var s=b==null?null:new A.z9(this,b)
J.E6(this.a,s)},
fQ(a,b,c){var s=this.$ti
return A.fj(J.HY(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.I1(this.a,b,c,A.fj(d,s.y[1],s.c),e)},
aw(a,b,c,d){return this.ai(0,b,c,d,0)},
$iK:1,
$iq:1}
A.z9.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bM.prototype={
f3(a,b){return new A.bM(this.a,this.$ti.i("@<1>").X(b).i("bM<1,2>"))},
gbe(){return this.a}}
A.eh.prototype={
cb(a,b,c){return new A.eh(this.a,this.$ti.i("@<1,2>").X(b).X(c).i("eh<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a8(a,b){this.a.a8(0,new A.q3(this,b))},
gM(){var s=this.$ti
return A.fj(this.a.gM(),s.c,s.y[2])},
gb_(){var s=this.$ti
return A.fj(this.a.gb_(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gY(a){var s=this.a
return s.gY(s)},
ga7(){var s=this.a.ga7()
return s.cj(s,new A.q2(this),this.$ti.i("S<3,4>"))}}
A.q3.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.q2.prototype={
$1(a){var s=this.a.$ti
return new A.S(s.y[2].a(a.a),s.y[3].a(a.b),s.i("S<3,4>"))},
$S(){return this.a.$ti.i("S<3,4>(S<1,2>)")}}
A.dD.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mY.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cg.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.Ca.prototype={
$0(){return A.ba(null,t.H)},
$S:3}
A.xl.prototype={}
A.K.prototype={}
A.a_.prototype={
gu(a){var s=this
return new A.an(s,s.gm(s),A.n(s).i("an<a_.E>"))},
gE(a){return this.gm(this)===0},
gH(a){if(this.gm(this)===0)throw A.b(A.aG())
return this.a9(0,0)},
ga1(a){var s=this
if(s.gm(s)===0)throw A.b(A.aG())
return s.a9(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aG())
if(s.gm(s)>1)throw A.b(A.iF())
return s.a9(0,0)},
D(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.x(r.a9(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aA(r))}return!1},
cI(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a9(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.aA(r))}return!0},
C(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.p(p.a9(0,0))
if(o!==p.gm(p))throw A.b(A.aA(p))
for(r=s,q=1;q<o;++q){r=r+b+A.p(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.p(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}},
ej(a){return this.C(0,"")},
dw(a,b){return this.oE(0,b)},
cj(a,b,c){return new A.X(this,b,A.n(this).i("@<a_.E>").X(c).i("X<1,2>"))},
wU(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aG())
s=q.a9(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a9(0,r))
if(p!==q.gm(q))throw A.b(A.aA(q))}return s},
bl(a,b){return A.cr(this,b,null,A.n(this).i("a_.E"))},
cV(a,b){return A.cr(this,0,A.cw(b,"count",t.S),A.n(this).i("a_.E"))}}
A.cq.prototype={
iW(a,b,c,d){var s,r=this.b
A.bc(r,"start")
s=this.c
if(s!=null){A.bc(s,"end")
if(r>s)throw A.b(A.ax(r,0,s,"start",null))}},
gq4(){var s=J.ar(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtg(){var s=J.ar(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ar(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.gtg()+b
if(b<0||r>=s.gq4())throw A.b(A.m9(b,s.gm(0),s,null,"index"))
return J.pB(s.a,r)},
bl(a,b){var s,r,q=this
A.bc(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.eo(q.$ti.i("eo<1>"))
return A.cr(q.a,s,r,q.$ti.c)},
cV(a,b){var s,r,q,p=this
A.bc(b,"count")
s=p.c
r=p.b
if(s==null)return A.cr(p.a,r,B.c.fM(r,b),p.$ti.c)
else{q=B.c.fM(r,b)
if(s<q)return p
return A.cr(p.a,r,q,p.$ti.c)}},
bY(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.L(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.CM(0,n):J.CL(0,n)}r=A.a7(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a9(n,o+q)
if(m.gm(n)<l)throw A.b(A.aA(p))}return r},
cW(a){return this.bY(0,!0)}}
A.an.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.L(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0}}
A.ci.prototype={
gu(a){return new A.mq(J.E(this.a),this.b,A.n(this).i("mq<1,2>"))},
gm(a){return J.ar(this.a)},
gE(a){return J.bz(this.a)},
gH(a){return this.b.$1(J.bL(this.a))},
ga1(a){return this.b.$1(J.pC(this.a))},
gap(a){return this.b.$1(J.Cv(this.a))},
a9(a,b){return this.b.$1(J.pB(this.a,b))}}
A.en.prototype={$iK:1}
A.mq.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.ar(this.a)},
a9(a,b){return this.b.$1(J.pB(this.a,b))}}
A.at.prototype={
gu(a){return new A.cS(J.E(this.a),this.b,this.$ti.i("cS<1>"))},
cj(a,b,c){return new A.ci(this,b,this.$ti.i("@<1>").X(c).i("ci<1,2>"))}}
A.cS.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.is.prototype={
gu(a){return new A.lH(J.E(this.a),this.b,B.aT,this.$ti.i("lH<1,2>"))}}
A.lH.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eJ.prototype={
gu(a){var s=this.a
return new A.nF(s.gu(s),this.b,A.n(this).i("nF<1>"))}}
A.io.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.ol(r,s))return s
return r},
$iK:1}
A.nF.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.d8.prototype={
bl(a,b){A.kU(b,"count")
A.bc(b,"count")
return new A.d8(this.a,this.b+b,A.n(this).i("d8<1>"))},
gu(a){var s=this.a
return new A.nd(s.gu(s),this.b,A.n(this).i("nd<1>"))}}
A.fu.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bl(a,b){A.kU(b,"count")
A.bc(b,"count")
return new A.fu(this.a,this.b+b,this.$ti)},
$iK:1}
A.nd.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.eo.prototype={
gu(a){return B.aT},
gE(a){return!0},
gm(a){return 0},
gH(a){throw A.b(A.aG())},
ga1(a){throw A.b(A.aG())},
gap(a){throw A.b(A.aG())},
a9(a,b){throw A.b(A.ax(b,0,0,"index",null))},
D(a,b){return!1},
cI(a,b){return!0},
dw(a,b){return this},
cj(a,b,c){return new A.eo(c.i("eo<0>"))},
bl(a,b){A.bc(b,"count")
return this},
cV(a,b){A.bc(b,"count")
return this},
bY(a,b){var s=J.CL(0,this.$ti.c)
return s},
iD(a){return A.uQ(this.$ti.c)}}
A.lE.prototype={
k(){return!1},
gn(){throw A.b(A.aG())}}
A.dW.prototype={
gu(a){return new A.o4(J.E(this.a),this.$ti.i("o4<1>"))}}
A.o4.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iw.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.nR.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
co(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
aw(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.he.prototype={}
A.bv.prototype={
gm(a){return J.ar(this.a)},
a9(a,b){var s=this.a,r=J.L(s)
return r.a9(s,r.gm(s)-1-b)}}
A.jD.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.jD&&this.a===b.a}}
A.ks.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.ka.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.kb.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hC.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.oO.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.eY.prototype={$r:"+(1,2,3)",$s:7}
A.eZ.prototype={$r:"+(1,2,3,4)",$s:8}
A.oP.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.ij.prototype={}
A.fp.prototype={
cb(a,b,c){var s=A.n(this)
return A.EJ(this,s.c,s.y[1],b,c)},
gE(a){return this.gm(this)===0},
gY(a){return this.gm(this)!==0},
l(a){return A.v9(this)},
j(a,b,c){A.Ip()},
ga7(){return new A.hH(this.v8(),A.n(this).i("hH<S<1,2>>"))},
v8(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ga7(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gM(),o=o.gu(o),n=A.n(s).i("S<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.S(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aV(a,b,c,d){var s=A.v(c,d)
this.a8(0,new A.qK(this,b,s))
return s},
$iJ:1}
A.qK.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aW.prototype={
gm(a){return this.b.length},
glQ(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a8(a,b){var s,r,q=this.glQ(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gM(){return new A.eV(this.glQ(),this.$ti.i("eV<1>"))},
gb_(){return new A.eV(this.b,this.$ti.i("eV<2>"))}}
A.eV.prototype={
gm(a){return this.a.length},
gE(a){return 0===this.a.length},
gY(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.hx(s,s.length,this.$ti.i("hx<1>"))}}
A.hx.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iA.prototype={
dO(){var s=this,r=s.$map
if(r==null){r=new A.iJ(s.$ti.i("iJ<1,2>"))
A.GQ(s.a,r)
s.$map=r}return r},
I(a){return this.dO().I(a)},
h(a,b){return this.dO().h(0,b)},
a8(a,b){this.dO().a8(0,b)},
gM(){var s=this.dO()
return new A.T(s,A.n(s).i("T<1>"))},
gb_(){var s=this.dO()
return new A.al(s,A.n(s).i("al<2>"))},
gm(a){return this.dO().a}}
A.ik.prototype={
t(a,b){A.Iq()}}
A.dw.prototype={
gm(a){return this.b},
gE(a){return this.b===0},
gY(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hx(s,s.length,r.$ti.i("hx<1>"))},
D(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.tE.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.iE&&this.a.P(0,b.a)&&A.DM(this)===A.DM(b)},
gJ(a){return A.c4(this.a,A.DM(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.C([A.bI(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iE.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Nh(A.pp(this.a),this.$ti)}}
A.ws.prototype={
$0(){return B.x.vm(1000*this.a.now())},
$S:10}
A.jp.prototype={}
A.y9.prototype={
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
A.j8.prototype={
l(a){return"Null check operator used on a null value"}}
A.mg.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.nQ.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mF.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iG:1}
A.iq.prototype={}
A.kd.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaJ:1}
A.ej.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Hc(r==null?"unknown":r)+"'"},
gak(a){var s=A.pp(this)
return A.bI(s==null?A.bh(this):s)},
gyl(){return this},
$C:"$1",
$R:1,
$D:null}
A.q8.prototype={$C:"$0",$R:0}
A.q9.prototype={$C:"$2",$R:2}
A.xY.prototype={}
A.xw.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Hc(s)+"'"}}
A.i9.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.i9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kE(this.a)^A.eC(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mP(this.a)+"'")}}
A.n6.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bC.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gY(a){return this.a!==0},
gM(){return new A.T(this,A.n(this).i("T<1>"))},
gb_(){return new A.al(this,A.n(this).i("al<2>"))},
ga7(){return new A.aI(this,A.n(this).i("aI<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.n4(a)},
n4(a){var s=this.d
if(s==null)return!1
return this.dk(this.lK(s,a),a)>=0},
F(a,b){b.a8(0,new A.tL(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.n5(b)},
n5(a){var s,r,q=this.d
if(q==null)return null
s=this.lK(q,a)
r=this.dk(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.l8(s==null?q.b=q.jx():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.l8(r==null?q.c=q.jx():r,b,c)}else q.n7(b,c)},
n7(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jx()
s=p.ei(a)
r=o[s]
if(r==null)o[s]=[p.iY(a,b)]
else{q=p.dk(r,a)
if(q>=0)r[q].b=b
else r.push(p.iY(a,b))}},
nk(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
G(a,b){var s=this
if(typeof b=="string")return s.ma(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.ma(s.c,b)
else return s.n6(b)},
n6(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ei(a)
r=n[s]
q=o.dk(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mt(p)
if(r.length===0)delete n[s]
return p.b},
an(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iX()}},
a8(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aA(s))
r=r.c}},
l8(a,b,c){var s=a[b]
if(s==null)a[b]=this.iY(b,c)
else s.b=c},
ma(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mt(s)
delete a[b]
return s.b},
iX(){this.r=this.r+1&1073741823},
iY(a,b){var s,r=this,q=new A.uO(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iX()
return q},
mt(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iX()},
ei(a){return J.a8(a)&1073741823},
lK(a,b){return a[this.ei(b)]},
dk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.v9(this)},
jx(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.tL.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.uO.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bD(s,s.r,s.e,this.$ti.i("bD<1>"))},
D(a,b){return this.a.I(b)}}
A.bD.prototype={
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
A.aI.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.mo(s,s.r,s.e,this.$ti.i("mo<1,2>"))}}
A.mo.prototype={
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
A.iK.prototype={
ei(a){return A.kE(a)&1073741823},
dk(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iJ.prototype={
ei(a){return A.ML(a)&1073741823},
dk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.C4.prototype={
$1(a){return this.a(a)},
$S:41}
A.C5.prototype={
$2(a,b){return this.a(a,b)},
$S:222}
A.C6.prototype={
$1(a){return this.a(a)},
$S:68}
A.hB.prototype={
gak(a){return A.bI(this.lL())},
lL(){return A.N0(this.$r,this.hd())},
l(a){return this.mr(!1)},
mr(a){var s,r,q,p,o,n=this.qe(),m=this.hd(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.EU(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qe(){var s,r=this.$s
while($.Av.length<=r)$.Av.push(null)
s=$.Av[r]
if(s==null){s=this.pH()
$.Av[r]=s}return s},
pH(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.EC(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fF(j,k)}}
A.oL.prototype={
hd(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.oL&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gJ(a){return A.c4(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.oM.prototype={
hd(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.oM&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gJ(a){var s=this
return A.c4(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.oN.prototype={
hd(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.oN&&this.$s===b.$s&&A.KH(this.a,b.a)},
gJ(a){return A.c4(this.$s,A.vB(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.et.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glX(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.CO(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqU(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.CO(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pI(){var s,r=this.a
if(!B.a.D(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ef(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hA(s)},
jW(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.oa(this,b,c)},
hF(a,b){return this.jW(0,b,0)},
qb(a,b){var s,r=this.glX()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hA(s)},
qa(a,b){var s,r=this.gqU()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hA(s)},
em(a,b,c){if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,null,null))
return this.qa(b,c)}}
A.hA.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$iex:1,
$imZ:1}
A.oa.prototype={
gu(a){return new A.ob(this.a,this.b,this.c)}}
A.ob.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.qb(l,s)
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
A.h7.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.x6(b,null))
return this.c},
$iex:1,
gR(){return this.a}}
A.p0.prototype={
gu(a){return new A.AR(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h7(r,s)
throw A.b(A.aG())}}
A.AR.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.h7(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.oj.prototype={
aB(){var s=this.b
if(s===this)throw A.b(new A.dD("Local '"+this.a+"' has not been initialized."))
return s},
bx(){var s=this.b
if(s===this)throw A.b(A.EI(this.a))
return s},
shZ(a){var s=this
if(s.b!==s)throw A.b(new A.dD("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fL.prototype={
gak(a){return B.dG},
hH(a,b,c){A.hO(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mF(a){return this.hH(a,0,null)},
mE(a,b,c){A.hO(a,b,c)
if(c==null)c=B.c.L(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hG(a,b,c){A.hO(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mD(a){return this.hG(a,0,null)},
$iak:1,
$ief:1}
A.fK.prototype={$ifK:1}
A.j3.prototype={
gab(a){if(((a.$flags|0)&2)!==0)return new A.p8(a.buffer)
else return a.buffer},
qK(a,b,c,d){var s=A.ax(b,0,c,d,null)
throw A.b(s)},
lj(a,b,c,d){if(b>>>0!==b||b>c)this.qK(a,b,c,d)}}
A.p8.prototype={
hH(a,b,c){var s=A.bR(this.a,b,c)
s.$flags=3
return s},
mF(a){return this.hH(0,0,null)},
mE(a,b,c){var s=A.EN(this.a,b,c)
s.$flags=3
return s},
hG(a,b,c){var s=A.EM(this.a,b,c)
s.$flags=3
return s},
mD(a){return this.hG(0,0,null)},
$ief:1}
A.j2.prototype={
gak(a){return B.dH},
$iak:1,
$iCx:1}
A.fM.prototype={
gm(a){return a.length},
mk(a,b,c,d,e){var s,r,q=a.length
this.lj(a,b,q,"start")
this.lj(a,c,q,"end")
if(b>c)throw A.b(A.ax(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.Q(e,null))
r=d.length
if(r-e<s)throw A.b(A.A("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibb:1,
$ibP:1}
A.dL.prototype={
h(a,b){A.dl(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
A.dl(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.dQ.b(d)){this.mk(a,b,c,d,e)
return}this.l5(a,b,c,d,e)},
aw(a,b,c,d){return this.ai(a,b,c,d,0)},
$iK:1,
$io:1,
$iq:1}
A.bQ.prototype={
j(a,b,c){a.$flags&2&&A.H(a)
A.dl(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.aj.b(d)){this.mk(a,b,c,d,e)
return}this.l5(a,b,c,d,e)},
aw(a,b,c,d){return this.ai(a,b,c,d,0)},
$iK:1,
$io:1,
$iq:1}
A.my.prototype={
gak(a){return B.dI},
T(a,b,c){return new Float32Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$it_:1}
A.mz.prototype={
gak(a){return B.dJ},
T(a,b,c){return new Float64Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$it0:1}
A.mA.prototype={
gak(a){return B.dK},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$itF:1}
A.mB.prototype={
gak(a){return B.dL},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$itG:1}
A.mC.prototype={
gak(a){return B.dM},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$itH:1}
A.j4.prototype={
gak(a){return B.dQ},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$iyb:1}
A.j5.prototype={
gak(a){return B.dR},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$iyc:1}
A.j6.prototype={
gak(a){return B.dS},
gm(a){return a.length},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$iyd:1}
A.ey.prototype={
gak(a){return B.dT},
gm(a){return a.length},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dm(b,c,a.length)))},
b8(a,b){return this.T(a,b,null)},
$iak:1,
$iey:1,
$icP:1}
A.k6.prototype={}
A.k7.prototype={}
A.k8.prototype={}
A.k9.prototype={}
A.cm.prototype={
i(a){return A.km(v.typeUniverse,this,a)},
X(a){return A.FH(v.typeUniverse,this,a)}}
A.oy.prototype={}
A.p5.prototype={
l(a){return A.bV(this.a,null)}}
A.ov.prototype={
l(a){return this.a}}
A.ki.prototype={$idd:1}
A.yR.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:29}
A.yQ.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:214}
A.yS.prototype={
$0(){this.a.$0()},
$S:2}
A.yT.prototype={
$0(){this.a.$0()},
$S:2}
A.kh.prototype={
p6(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e9(new A.AV(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
p7(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e9(new A.AU(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idc:1}
A.AV.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.AU.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iV(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.jL.prototype={
aC(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aE(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.li(a)
else s.d2(a)}},
bQ(a,b){var s
if(b==null)b=A.i4(a)
s=this.a
if(this.b)s.am(new A.am(a,b))
else s.cr(new A.am(a,b))},
aT(a){return this.bQ(a,null)},
$iig:1}
A.Bk.prototype={
$1(a){return this.a.$2(0,a)},
$S:28}
A.Bl.prototype={
$2(a,b){this.a.$2(1,new A.iq(a,b))},
$S:81}
A.BD.prototype={
$2(a,b){this.a(a,b)},
$S:101}
A.Bi.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.t()
s=q.b
if((s&1)!==0?(q.gaO().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.Bj.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:29}
A.od.prototype={
oZ(a,b){var s=new A.yV(a)
this.a=A.nn(new A.yX(this,a),new A.yY(s),null,new A.yZ(this,s),!1,b)}}
A.yV.prototype={
$0(){A.kH(new A.yW(this.a))},
$S:2}
A.yW.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.yY.prototype={
$0(){this.a.$0()},
$S:0}
A.yZ.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.yX.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.t()
if((r.b&4)===0){s.c=new A.w($.D,t._)
if(s.b){s.b=!1
A.kH(new A.yU(this.b))}return s.c}},
$S:134}
A.yU.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.k2.prototype={
l(a){return"IterationMarker("+this.b+", "+A.p(this.a)+")"}}
A.p2.prototype={
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
if(p==null||p.length===0){o.a=A.FB
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.FB
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.A("sync*"))}return!1},
ym(a){var s,r,q=this
if(a instanceof A.hH){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hH.prototype={
gu(a){return new A.p2(this.a(),this.$ti.i("p2<1>"))}}
A.am.prototype={
l(a){return A.p(this.a)},
$iaf:1,
gcp(){return this.b}}
A.b0.prototype={}
A.eP.prototype={
bL(){},
bM(){}}
A.jR.prototype={
gcq(){return new A.b0(this,A.n(this).i("b0<1>"))},
gie(){return(this.c&4)!==0},
gjv(){return this.c<4},
rP(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.Fs(c,A.n(j).c)
s=A.n(j)
r=$.D
q=d?1:0
p=b!=null?32:0
o=A.oh(r,a,s.c)
n=A.z5(r,b)
m=c==null?A.BE():c
l=new A.eP(j,o,n,r.bW(m,t.H),r,q|p,s.i("eP<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pl(j.a)
return l},
m4(a){var s,r=this
A.n(r).i("eP<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.rP(a)
if((r.c&2)===0&&r.d==null)r.pt()}return null},
m5(a){},
m6(a){},
j_(){if((this.c&4)!==0)return new A.bm("Cannot add new events after calling close")
return new A.bm("Cannot add new events while doing an addStream")},
t(a,b){if(!this.gjv())throw A.b(this.j_())
this.cA(b)},
bf(a,b){var s
if(!this.gjv())throw A.b(this.j_())
s=A.f2(a,b)
this.cB(s.a,s.b)},
jV(a){return this.bf(a,null)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjv())throw A.b(q.j_())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.D,t.D)
q.da()
return r},
aK(a,b){this.cB(a,b)},
aS(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aE(null)},
pt(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aE(null)}A.pl(this.b)},
$ibB:1}
A.jM.prototype={
cA(a){var s,r
for(s=this.d,r=this.$ti.i("ca<1>");s!=null;s=s.ch)s.c1(new A.ca(a,r))},
cB(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.c1(new A.hs(a,b))},
da(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.c1(B.ab)
else this.r.aE(null)}}
A.t9.prototype={
$0(){this.c.a(null)
this.b.cs(null)},
$S:0}
A.tb.prototype={
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
A.ta.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.cX(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.j([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aO(s,n)}m.c.d2(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.am(new A.am(s,l))}},
$S(){return this.d.i("U(0)")}}
A.t4.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(l,aJ)")}}
A.nG.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iG:1}
A.t5.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.j([],l.c.i("z<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aC(s)}else{s=A.j([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(r[p].c)
q=l.c
n=A.j([],q.i("z<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.r)(r),++p)n.push(r[p].b)
l.a.aT(new A.jc(B.b.mZ(s,A.Mo()),a,q.i("jc<q<0?>,q<am?>>")))}},
$S:9}
A.jc.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.p(p.a)},
gcp(){var s=this.c
s=s==null?null:s.b
return s==null?A.af.prototype.gcp.call(this):s}}
A.k0.prototype={
ty(a){this.a.b5(new A.zR(this,a),new A.zS(this,a),t.P)}}
A.zR.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("U(1)")}}
A.zS.prototype={
$2(a,b){this.a.c=new A.am(a,b)
this.b.$1(1)},
$S:6}
A.zQ.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.eQ.prototype={
bQ(a,b){if((this.a.a&30)!==0)throw A.b(A.A("Future already completed"))
this.am(A.f2(a,b))},
aT(a){return this.bQ(a,null)},
$iig:1}
A.aL.prototype={
aC(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.aE(a)},
aj(){return this.aC(null)},
am(a){this.a.cr(a)}}
A.ao.prototype={
aC(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.cs(a)},
aj(){return this.aC(null)},
am(a){this.a.am(a)}}
A.cb.prototype={
wd(a){if((this.c&15)!==6)return!0
return this.b.b.ex(this.d,a.a,t.y,t.K)},
vA(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kG(r,n,a.b,p,o,t.l)
else q=m.ex(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.C(s))){if((this.c&1)!==0)throw A.b(A.Q("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.Q("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
b5(a,b,c){var s,r,q=$.D
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.az(b,"onError",u.w))}else{a=q.dr(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.Gi(b,q)}s=new A.w($.D,c.i("w<0>"))
r=b==null?1:3
this.dH(new A.cb(s,r,a,b,this.$ti.i("@<1>").X(c).i("cb<1,2>")))
return s},
W(a,b){return this.b5(a,null,b)},
mp(a,b,c){var s=new A.w($.D,c.i("w<0>"))
this.dH(new A.cb(s,19,a,b,this.$ti.i("@<1>").X(c).i("cb<1,2>")))
return s},
jZ(a){var s=this.$ti,r=$.D,q=new A.w(r,s)
if(r!==B.i)a=A.Gi(a,r)
this.dH(new A.cb(q,2,null,a,s.i("cb<1,1>")))
return q},
b0(a){var s=this.$ti,r=$.D,q=new A.w(r,s)
if(r!==B.i)a=r.bW(a,t.z)
this.dH(new A.cb(q,8,a,null,s.i("cb<1,1>")))
return q},
t6(a){this.a=this.a&1|16
this.c=a},
h0(a){this.a=a.a&30|this.a&1
this.c=a.c},
dH(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dH(a)
return}s.h0(r)}s.b.cY(new A.zT(s,a))}},
m2(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.m2(a)
return}n.h0(s)}m.a=n.hp(a)
n.b.cY(new A.zY(m,n))}},
eV(){var s=this.c
this.c=null
return this.hp(s)},
hp(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cs(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.zW(a,r,!0)
else{s=r.eV()
r.a=8
r.c=a
A.eT(r,s)}},
d2(a){var s=this,r=s.eV()
s.a=8
s.c=a
A.eT(s,r)},
pG(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gcd()===r.gcd())}else s=!1
if(s)return
q=p.eV()
p.h0(a)
A.eT(p,q)},
am(a){var s=this.eV()
this.t6(a)
A.eT(this,s)},
pF(a,b){this.am(new A.am(a,b))},
aE(a){if(this.$ti.i("y<1>").b(a)){this.li(a)
return}this.lf(a)},
lf(a){this.a^=2
this.b.cY(new A.zV(this,a))},
li(a){A.zW(a,this,!1)
return},
cr(a){this.a^=2
this.b.cY(new A.zU(this,a))},
fH(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.D,r.$ti)
q.aE(r)
return q}s=new A.w($.D,r.$ti)
q.a=null
q.a=A.c9(a,new A.A3(s,a))
r.b5(new A.A4(q,r,s),new A.A5(q,s),t.P)
return s},
$iy:1}
A.zT.prototype={
$0(){A.eT(this.a,this.b)},
$S:0}
A.zY.prototype={
$0(){A.eT(this.b,this.a.a)},
$S:0}
A.zX.prototype={
$0(){A.zW(this.a.a,this.b,!0)},
$S:0}
A.zV.prototype={
$0(){this.a.d2(this.b)},
$S:0}
A.zU.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.A0.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aY(q.d,t.z)}catch(p){s=A.C(p)
r=A.ae(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.i4(q)
n=k.a
n.c=new A.am(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.b5(new A.A1(l,m),new A.A2(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.A1.prototype={
$1(a){this.a.pG(this.b)},
$S:29}
A.A2.prototype={
$2(a,b){this.a.am(new A.am(a,b))},
$S:6}
A.A_.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.ex(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.C(n)
r=A.ae(n)
q=s
p=r
if(p==null)p=A.i4(q)
o=this.a
o.c=new A.am(q,p)
o.b=!0}},
$S:0}
A.zZ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.wd(s)&&p.a.e!=null){p.c=p.a.vA(s)
p.b=!1}}catch(o){r=A.C(o)
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
A.A3.prototype={
$0(){var s=A.D5()
this.a.am(new A.am(new A.nG("Future not completed",this.b),s))},
$S:0}
A.A4.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.d2(a)}},
$S(){return this.b.$ti.i("U(1)")}}
A.A5.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.am(new A.am(a,b))}},
$S:6}
A.oc.prototype={}
A.aa.prototype={
ej(a){var s=new A.w($.D,t.os),r=new A.a3(""),q=this.aa(null,!0,new A.xA(s,r),s.gj6())
q.io(new A.xB(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.D,t.hy)
s.a=0
this.aa(new A.xC(s,this),!0,new A.xD(s,r),r.gj6())
return r},
gH(a){var s=new A.w($.D,A.n(this).i("w<aa.T>")),r=this.aa(null,!0,new A.xy(s),s.gj6())
r.io(new A.xz(this,r,s))
return s}}
A.xA.prototype={
$0(){var s=this.b.a
this.a.cs(s.charCodeAt(0)==0?s:s)},
$S:0}
A.xB.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.p(a)
q.a+=p}catch(o){s=A.C(o)
r=A.ae(o)
q=s
p=r
n=A.kt(q,p)
if(n==null)q=new A.am(q,p)
else q=n
A.Lc(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.xC.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(aa.T)")}}
A.xD.prototype={
$0(){this.b.cs(this.a.a)},
$S:0}
A.xy.prototype={
$0(){var s,r=A.D5(),q=new A.bm("No element")
A.mR(q,r)
s=A.kt(q,r)
if(s==null)s=new A.am(q,r)
this.a.am(s)},
$S:0}
A.xz.prototype={
$1(a){A.Ld(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.jA.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bs(a,b,c){return this.aa(a,null,b,c)},
aU(a){return this.aa(a,null,null,null)}}
A.e3.prototype={
gcq(){return new A.b7(this,A.n(this).i("b7<1>"))},
gie(){return(this.b&4)!==0},
grg(){if((this.b&8)===0)return this.a
return this.a.c},
h5(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e2(A.n(q).i("e2<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e2(A.n(q).i("e2<1>")):s},
gaO(){var s=this.a
return(this.b&8)!==0?s.c:s},
bI(){if((this.b&4)!==0)return new A.bm("Cannot add event after closing")
return new A.bm("Cannot add event while adding a stream")},
tR(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bI())
if((o&2)!==0){o=new A.w($.D,t._)
o.aE(null)
return o}o=p.a
s=b===!0
r=new A.w($.D,t._)
q=s?A.K4(p):p.gpb()
q=a.aa(p.gpf(),s,p.gpw(),q)
s=p.b
if((s&1)!==0?(p.gaO().e&4)!==0:(s&2)===0)q.b2()
p.a=new A.ke(o,r,q,A.n(p).i("ke<1>"))
p.b|=8
return r},
lB(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.ec():new A.w($.D,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bI())
this.aA(b)},
bf(a,b){var s
if(this.b>=4)throw A.b(this.bI())
s=A.f2(a,b)
this.aK(s.a,s.b)},
jV(a){return this.bf(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lB()
if(r>=4)throw A.b(s.bI())
s.lk()
return s.lB()},
lk(){var s=this.b|=4
if((s&1)!==0)this.da()
else if((s&3)===0)this.h5().t(0,B.ab)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.cA(a)
else if((r&3)===0)s.h5().t(0,new A.ca(a,A.n(s).i("ca<1>")))},
aK(a,b){var s=this.b
if((s&1)!==0)this.cB(a,b)
else if((s&3)===0)this.h5().t(0,new A.hs(a,b))},
aS(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aE(null)},
jN(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.A("Stream has already been listened to."))
s=A.Km(p,a,b,c,d,A.n(p).c)
r=p.grg()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.aW()}else p.a=s
s.t7(r)
s.jk(new A.AN(p))
return s},
m4(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.C(o)
p=A.ae(o)
n=new A.w($.D,t.D)
n.cr(new A.am(q,p))
k=n}else k=k.b0(s)
m=new A.AM(l)
if(k!=null)k=k.b0(m)
else m.$0()
return k},
m5(a){if((this.b&8)!==0)this.a.b.b2()
A.pl(this.e)},
m6(a){if((this.b&8)!==0)this.a.b.aW()
A.pl(this.f)},
$ibB:1}
A.AN.prototype={
$0(){A.pl(this.a.d)},
$S:0}
A.AM.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aE(null)},
$S:0}
A.p3.prototype={
cA(a){this.gaO().aA(a)},
cB(a,b){this.gaO().aK(a,b)},
da(){this.gaO().aS()}}
A.jN.prototype={
cA(a){this.gaO().c1(new A.ca(a,A.n(this).i("ca<1>")))},
cB(a,b){this.gaO().c1(new A.hs(a,b))},
da(){this.gaO().c1(B.ab)}}
A.cT.prototype={}
A.hI.prototype={}
A.b7.prototype={
gJ(a){return(A.eC(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b7&&b.a===this.a}}
A.dZ.prototype={
hi(){return this.w.m4(this)},
bL(){this.w.m5(this)},
bM(){this.w.m6(this)}}
A.o9.prototype={
A(){var s=this.b.A()
return s.b0(new A.yM(this))}}
A.yN.prototype={
$2(a,b){var s=this.a
s.aK(a,b)
s.aS()},
$S:6}
A.yM.prototype={
$0(){this.a.a.aE(null)},
$S:2}
A.ke.prototype={}
A.b1.prototype={
t7(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fR(s)}},
io(a){this.a=A.oh(this.d,a,A.n(this).i("b1.T"))},
b2(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jk(q.geM())},
aW(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fR(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jk(s.geN())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.j2()
r=s.f
return r==null?$.ec():r},
j2(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hi()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cA(a)
else s.c1(new A.ca(a,A.n(s).i("ca<b1.T>")))},
aK(a,b){var s
if(t.C.b(a))A.mR(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cB(a,b)
else this.c1(new A.hs(a,b))},
aS(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.da()
else s.c1(B.ab)},
bL(){},
bM(){},
hi(){return null},
c1(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e2(A.n(r).i("e2<b1.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fR(r)}},
cA(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fG(s.a,a,A.n(s).i("b1.T"))
s.e=(s.e&4294967231)>>>0
s.j4((r&4)!==0)},
cB(a,b){var s,r=this,q=r.e,p=new A.z7(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.j2()
s=r.f
if(s!=null&&s!==$.ec())s.b0(p)
else p.$0()}else{p.$0()
r.j4((q&4)!==0)}},
da(){var s,r=this,q=new A.z6(r)
r.j2()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.ec())s.b0(q)
else q.$0()},
jk(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.j4((r&4)!==0)},
j4(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bL()
else q.bM()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fR(q)},
$ibn:1}
A.z7.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nt(s,o,this.c,r,t.l)
else q.fG(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.z6.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fF(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hG.prototype={
aa(a,b,c,d){return this.a.jN(a,d,c,b===!0)},
bs(a,b,c){return this.aa(a,null,b,c)},
aU(a){return this.aa(a,null,null,null)},
n9(a,b){return this.aa(a,null,null,b)}}
A.ou.prototype={
gen(){return this.a},
sen(a){return this.a=a}}
A.ca.prototype={
kA(a){a.cA(this.b)}}
A.hs.prototype={
kA(a){a.cB(this.b,this.c)}}
A.zJ.prototype={
kA(a){a.da()},
gen(){return null},
sen(a){throw A.b(A.A("No events after a done."))}}
A.e2.prototype={
fR(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kH(new A.Au(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sen(b)
s.c=b}}}
A.Au.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gen()
q.b=r
if(r==null)q.c=null
s.kA(this.b)},
$S:0}
A.ht.prototype={
io(a){},
b2(){var s=this.a
if(s>=0)this.a=s+2},
aW(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kH(s.glZ())}else s.a=r},
A(){this.a=-1
this.c=null
return $.ec()},
r7(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fF(s)}}else r.a=q},
$ibn:1}
A.cv.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.D,t.g5)
r.b=s
r.c=!1
q.aW()
return s}throw A.b(A.A("Already waiting for next."))}return r.qJ()},
qJ(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.D,t.g5)
q.b=s
r=p.aa(q.gr_(),!0,q.gr1(),q.gr3())
if(q.b!=null)q.a=r
return s}return $.Hi()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aE(!1)
else s.c=!1
return r.A()}return $.ec()},
r0(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cs(!0)
if(q.c){r=q.a
if(r!=null)r.b2()}},
r4(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.am(new A.am(a,b))
else q.cr(new A.am(a,b))},
r2(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.d2(!1)
else q.lf(!1)}}
A.jW.prototype={
aa(a,b,c,d){return A.Fs(c,this.$ti.c)},
bs(a,b,c){return this.aa(a,null,b,c)}}
A.dj.prototype={
aa(a,b,c,d){var s=null,r=new A.k5(s,s,s,s,this.$ti.i("k5<1>"))
r.d=new A.As(this,r)
return r.jN(a,d,c,b===!0)},
bs(a,b,c){return this.aa(a,null,b,c)},
aU(a){return this.aa(a,null,null,null)}}
A.As.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.k5.prototype={
tS(a){var s=this.b
if(s>=4)throw A.b(this.bI())
if((s&1)!==0)this.gaO().aA(a)},
u7(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bI())
r|=4
s.b=r
if((r&1)!==0)s.gaO().aS()},
gcq(){throw A.b(A.Y("Not available"))},
$idJ:1}
A.Bn.prototype={
$0(){return this.a.am(this.b)},
$S:0}
A.Bo.prototype={
$0(){return this.a.cs(this.b)},
$S:0}
A.jZ.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.D,q=b===!0?1:0,p=d!=null?32:0,o=A.oh(r,a,s.y[1]),n=A.z5(r,d),m=c==null?A.BE():c
s=new A.hw(this,o,n,r.bW(m,t.H),r,q|p,s.i("hw<1,2>"))
s.x=this.a.bs(s.gjl(),s.gjn(),s.gjp())
return s},
bs(a,b,c){return this.aa(a,null,b,c)}}
A.hw.prototype={
aA(a){if((this.e&2)!==0)return
this.iU(a)},
aK(a,b){if((this.e&2)!==0)return
this.l6(a,b)},
bL(){var s=this.x
if(s!=null)s.b2()},
bM(){var s=this.x
if(s!=null)s.aW()},
hi(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jm(a){this.w.qv(a,this)},
jq(a,b){this.aK(a,b)},
jo(){this.aS()}}
A.eW.prototype={
qv(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.C(q)
r=A.ae(q)
p=s
o=r
n=A.kt(p,o)
if(n!=null){p=n.a
o=n.b}b.aK(p,o)
return}b.aA(m)}}
A.jX.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.u(A.A("Stream is already closed"))
s.iU(b)},
bf(a,b){this.a.aK(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.u(A.A("Stream is already closed"))
s.l7()},
$ibB:1}
A.hE.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.iU(a)},
aK(a,b){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.l6(a,b)},
aS(){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.l7()},
bL(){var s=this.x
if(s!=null)s.b2()},
bM(){var s=this.x
if(s!=null)s.aW()},
hi(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
jm(a){var s,r,q,p
try{q=this.w
q===$&&A.t()
q.t(0,a)}catch(p){s=A.C(p)
r=A.ae(p)
this.aK(s,r)}},
jq(a,b){var s,r,q,p
try{q=this.w
q===$&&A.t()
q.bf(a,b)}catch(p){s=A.C(p)
r=A.ae(p)
if(s===a)this.aK(a,b)
else this.aK(s,r)}},
jo(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.t()
q.q()}catch(p){s=A.C(p)
r=A.ae(p)
this.aK(s,r)}}}
A.jQ.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.D,q=b===!0?1:0,p=d!=null?32:0,o=A.oh(r,a,s.y[1]),n=A.z5(r,d),m=c==null?A.BE():c,l=new A.hE(o,n,r.bW(m,t.H),r,q|p,s.i("hE<1,2>"))
l.w=this.a.$1(new A.jX(l,s.i("jX<2>")))
l.x=this.b.bs(l.gjl(),l.gjn(),l.gjp())
return l},
bs(a,b,c){return this.aa(a,null,b,c)}}
A.Bf.prototype={}
A.Bh.prototype={}
A.Bg.prototype={}
A.Bd.prototype={}
A.Be.prototype={}
A.Bc.prototype={}
A.B9.prototype={}
A.pe.prototype={}
A.B8.prototype={}
A.B7.prototype={}
A.Bb.prototype={}
A.Ba.prototype={}
A.pd.prototype={
vs(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.pf.prototype={}
A.pc.prototype={
eR(a,b,c){var s,r,q,p,o,n,m=this.gjs(),l=m.a
if(l===B.i){A.kz(b,c)
return}o=l.gkx()
o.toString
s=o
r=$.D
try{$.D=s
m.vs(l,l.gbb(),a,b,c)
$.D=r}catch(n){q=A.C(n)
p=A.ae(n)
$.D=r
o=b===q?c:p
s.eR(l,q,o)}},
$iO:1}
A.oo.prototype={
gly(){var s=this.ax
return s==null?this.ax=new A.hM(this):s},
gbb(){return this.ay.gly()},
gcd(){return this.as.a},
fF(a){var s,r,q
try{this.aY(a,t.H)}catch(q){s=A.C(q)
r=A.ae(q)
this.eR(this,s,r)}},
fG(a,b,c){var s,r,q
try{this.ex(a,b,t.H,c)}catch(q){s=A.C(q)
r=A.ae(q)
this.eR(this,s,r)}},
nt(a,b,c,d,e){var s,r,q
try{this.kG(a,b,c,t.H,d,e)}catch(q){s=A.C(q)
r=A.ae(q)
this.eR(this,s,r)}},
jY(a,b){return new A.zF(this,this.bW(a,b),b)},
u3(a,b,c){return new A.zH(this,this.dr(a,b,c),c,b)},
f2(a){return new A.zE(this,this.bW(a,t.H))},
hK(a,b){return new A.zG(this,this.dr(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aP)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.rM(q,b)},
rM(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkx().gjU()
if(s===B.aP)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fh(a,b){this.eR(this,a,b)},
n_(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gbb(),this,a,b)},
aY(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gbb(),this,a,b)},
ex(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gbb(),this,a,b,c,d)},
kG(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gbb(),this,a,b,c,d,e,f)},
bW(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gbb(),this,a,b)},
dr(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gbb(),this,a,b,c)},
fA(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gbb(),this,a,b,c,d)},
mW(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gbb(),this,a,b)},
cY(a){var s=this.w,r=s.a
return s.b.$4(r,r.gbb(),this,a)},
k7(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gbb(),this,a,b)},
k6(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gbb(),this,a,b)},
gmc(){return this.a},
gmg(){return this.b},
gme(){return this.c},
gm8(){return this.d},
gm9(){return this.e},
gm7(){return this.f},
glD(){return this.r},
gjK(){return this.w},
glv(){return this.x},
glu(){return this.y},
gm3(){return this.z},
glI(){return this.Q},
gjs(){return this.as},
gjU(){return this.at},
gkx(){return this.ay}}
A.zF.prototype={
$0(){return this.a.aY(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zH.prototype={
$1(a){var s=this
return s.a.ex(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").X(this.c).i("1(2)")}}
A.zE.prototype={
$0(){return this.a.fF(this.b)},
$S:0}
A.zG.prototype={
$1(a){return this.a.fG(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.oS.prototype={
gmc(){return B.e8},
gmg(){return B.e7},
gme(){return B.e6},
gm8(){return B.e4},
gm9(){return B.e5},
gm7(){return B.e3},
glD(){return B.e_},
gjK(){return B.e9},
glv(){return B.dZ},
glu(){return B.dY},
gm3(){return B.e2},
glI(){return B.e0},
gjs(){return B.e1},
gjU(){return B.aP},
gkx(){return null},
gly(){var s=$.Az
return s==null?$.Az=new A.hM(this):s},
gbb(){var s=$.Az
return s==null?$.Az=new A.hM(this):s},
gcd(){return this},
fF(a){var s,r,q
try{if(B.i===$.D){a.$0()
return}A.Bz(null,null,this,a)}catch(q){s=A.C(q)
r=A.ae(q)
A.kz(s,r)}},
fG(a,b){var s,r,q
try{if(B.i===$.D){a.$1(b)
return}A.BA(null,null,this,a,b)}catch(q){s=A.C(q)
r=A.ae(q)
A.kz(s,r)}},
nt(a,b,c){var s,r,q
try{if(B.i===$.D){a.$2(b,c)
return}A.DB(null,null,this,a,b,c)}catch(q){s=A.C(q)
r=A.ae(q)
A.kz(s,r)}},
jY(a,b){return new A.AB(this,a,b)},
f2(a){return new A.AA(this,a)},
hK(a,b){return new A.AC(this,a,b)},
h(a,b){return null},
fh(a,b){A.kz(a,b)},
n_(a,b){return A.Gk(null,null,this,a,b)},
aY(a){if($.D===B.i)return a.$0()
return A.Bz(null,null,this,a)},
ex(a,b){if($.D===B.i)return a.$1(b)
return A.BA(null,null,this,a,b)},
kG(a,b,c){if($.D===B.i)return a.$2(b,c)
return A.DB(null,null,this,a,b,c)},
bW(a){return a},
dr(a){return a},
fA(a){return a},
mW(a,b){return null},
cY(a){A.BB(null,null,this,a)},
k7(a,b){return A.Dc(a,b)},
k6(a,b){return A.F5(a,b)}}
A.AB.prototype={
$0(){return this.a.aY(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.AA.prototype={
$0(){return this.a.fF(this.b)},
$S:0}
A.AC.prototype={
$1(a){return this.a.fG(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hM.prototype={$iau:1}
A.By.prototype={
$0(){A.Ep(this.a,this.b)},
$S:0}
A.jK.prototype={}
A.dh.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gY(a){return this.a!==0},
gM(){return new A.eU(this,A.n(this).i("eU<1>"))},
gb_(){var s=A.n(this)
return A.dH(new A.eU(this,s.i("eU<1>")),new A.A7(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lq(a)},
lq(a){var s=this.d
if(s==null)return!1
return this.c5(this.lm(s,a),a)>=0},
F(a,b){b.a8(0,new A.A6(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Fu(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Fu(q,b)
return r}else return this.lJ(b)},
lJ(a){var s,r,q=this.d
if(q==null)return null
s=this.lm(q,a)
r=this.c5(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.lc(s==null?q.b=A.Dl():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.lc(r==null?q.c=A.Dl():r,b,c)}else q.mj(b,c)},
mj(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.Dl()
s=p.ct(a)
r=o[s]
if(r==null){A.Dm(o,s,[a,b]);++p.a
p.e=null}else{q=p.c5(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a8(a,b){var s,r,q,p,o,n=this,m=n.ll()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aA(n))}},
ll(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.a7(i.a,null,!1,t.z)
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
lc(a,b,c){if(a[b]==null){++this.a
this.e=null}A.Dm(a,b,c)},
ct(a){return J.a8(a)&1073741823},
lm(a,b){return a[this.ct(b)]},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.A7.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.A6.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.e_.prototype={
ct(a){return A.kE(a)&1073741823},
c5(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jT.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.oN(b)},
j(a,b,c){this.oO(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.oM(a)},
ct(a){return this.r.$1(a)&1073741823},
c5(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.zD.prototype={
$1(a){return this.a.b(a)},
$S:16}
A.eU.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gY(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.oz(s,s.ll(),this.$ti.i("oz<1>"))},
D(a,b){return this.a.I(b)}}
A.oz.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aA(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.k3.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.oG(b)},
j(a,b,c){this.oI(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.oF(a)},
G(a,b){if(!this.y.$1(b))return null
return this.oH(b)},
ei(a){return this.x.$1(a)&1073741823},
dk(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.Aq.prototype={
$1(a){return this.a.b(a)},
$S:16}
A.di.prototype={
gu(a){var s=this,r=new A.e1(s,s.r,A.n(s).i("e1<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gE(a){return this.a===0},
gY(a){return this.a!==0},
D(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.pL(b)},
pL(a){var s=this.d
if(s==null)return!1
return this.c5(s[this.ct(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.A("No elements"))
return s.a},
ga1(a){var s=this.f
if(s==null)throw A.b(A.A("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.lb(s==null?q.b=A.Dn():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.lb(r==null?q.c=A.Dn():r,b)}else return q.p9(b)},
p9(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.Dn()
s=q.ct(a)
r=p[s]
if(r==null)p[s]=[q.jy(a)]
else{if(q.c5(r,a)>=0)return!1
r.push(q.jy(a))}return!0},
G(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ln(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ln(s.c,b)
else return s.jH(b)},
jH(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ct(a)
r=n[s]
q=o.c5(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lo(p)
return!0},
lb(a,b){if(a[b]!=null)return!1
a[b]=this.jy(b)
return!0},
ln(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lo(s)
delete a[b]
return!0},
jw(){this.r=this.r+1&1073741823},
jy(a){var s,r=this,q=new A.Ar(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jw()
return q},
lo(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jw()},
ct(a){return J.a8(a)&1073741823},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.Ar.prototype={}
A.e1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.uP.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:66}
A.eu.prototype={
D(a,b){return b instanceof A.b3&&this===b.a},
gu(a){var s=this
return new A.oG(s,s.a,s.c,s.$ti.i("oG<1>"))},
gm(a){return this.b},
an(a){var s,r,q,p=this;++p.a
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
hg(a,b,c){var s,r,q=this
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
jP(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.oG.prototype={
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
gft(){var s=this.a
if(s==null||this===s.gH(0))return null
return this.c}}
A.I.prototype={
gu(a){return new A.an(a,this.gm(a),A.bh(a).i("an<I.E>"))},
a9(a,b){return this.h(a,b)},
gE(a){return this.gm(a)===0},
gY(a){return!this.gE(a)},
gH(a){if(this.gm(a)===0)throw A.b(A.aG())
return this.h(a,0)},
ga1(a){if(this.gm(a)===0)throw A.b(A.aG())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aG())
if(this.gm(a)>1)throw A.b(A.iF())
return this.h(a,0)},
D(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aA(a))}return!1},
cI(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aA(a))}return!0},
cK(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aA(a))}q=c.$0()
return q},
C(a,b){var s
if(this.gm(a)===0)return""
s=A.xE("",a,b)
return s.charCodeAt(0)==0?s:s},
dw(a,b){return new A.at(a,b,A.bh(a).i("at<I.E>"))},
cj(a,b,c){return new A.X(a,b,A.bh(a).i("@<I.E>").X(c).i("X<1,2>"))},
bl(a,b){return A.cr(a,b,null,A.bh(a).i("I.E"))},
cV(a,b){return A.cr(a,0,A.cw(b,"count",t.S),A.bh(a).i("I.E"))},
bY(a,b){var s,r,q,p,o=this
if(o.gE(a)){s=J.CM(0,A.bh(a).i("I.E"))
return s}r=o.h(a,0)
q=A.a7(o.gm(a),r,!0,A.bh(a).i("I.E"))
for(p=1;p<o.gm(a);++p)q[p]=o.h(a,p)
return q},
cW(a){return this.bY(a,!0)},
iD(a){var s,r=A.uQ(A.bh(a).i("I.E"))
for(s=0;s<this.gm(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
f3(a,b){return new A.bM(a,A.bh(a).i("@<I.E>").X(b).i("bM<1,2>"))},
co(a,b){var s=b==null?A.MI():b
A.ne(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bd(b,c,r)
s=A.P(this.fQ(a,b,c),A.bh(a).i("I.E"))
return s},
b8(a,b){return this.T(a,b,null)},
fQ(a,b,c){A.bd(b,c,this.gm(a))
return A.cr(a,b,c,A.bh(a).i("I.E"))},
kh(a,b,c,d){var s
A.bd(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.bd(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bc(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.pD(d,e).bY(0,!1)
r=0}p=J.L(q)
if(r+s>p.gm(q))throw A.b(A.EA())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aw(a,b,c,d){return this.ai(a,b,c,d,0)},
cZ(a,b,c){var s,r
if(t.j.b(c))this.aw(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tJ(a,"[","]")},
$iK:1,
$io:1,
$iq:1}
A.V.prototype={
cb(a,b,c){var s=A.n(this)
return A.EJ(this,s.i("V.K"),s.i("V.V"),b,c)},
a8(a,b){var s,r,q,p
for(s=J.E(this.gM()),r=A.n(this).i("V.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga7(){return J.bZ(this.gM(),new A.v8(this),A.n(this).i("S<V.K,V.V>"))},
aV(a,b,c,d){var s,r,q,p,o,n=A.v(c,d)
for(s=J.E(this.gM()),r=A.n(this).i("V.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.Cu(this.gM(),a)},
gm(a){return J.ar(this.gM())},
gE(a){return J.bz(this.gM())},
gY(a){return J.dr(this.gM())},
gb_(){return new A.k4(this,A.n(this).i("k4<V.K,V.V>"))},
l(a){return A.v9(this)},
$iJ:1}
A.v8.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("V.V").a(r)
return new A.S(a,r,A.n(s).i("S<V.K,V.V>"))},
$S(){return A.n(this.a).i("S<V.K,V.V>(V.K)")}}
A.va.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:30}
A.k4.prototype={
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gY(a){var s=this.a
return s.gY(s)},
gH(a){var s=this.a
s=s.h(0,J.bL(s.gM()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.Cv(s.gM()))
return s==null?this.$ti.y[1].a(s):s},
ga1(a){var s=this.a
s=s.h(0,J.pC(s.gM()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.oI(J.E(s.gM()),s,this.$ti.i("oI<1,2>"))}}
A.oI.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.p7.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iR.prototype={
cb(a,b,c){return this.a.cb(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a8(a,b){this.a.a8(0,b)},
gE(a){var s=this.a
return s.gE(s)},
gY(a){var s=this.a
return s.gY(s)},
gm(a){var s=this.a
return s.gm(s)},
gM(){return this.a.gM()},
l(a){return this.a.l(0)},
gb_(){return this.a.gb_()},
ga7(){return this.a.ga7()},
aV(a,b,c,d){return this.a.aV(0,b,c,d)},
$iJ:1}
A.cQ.prototype={
cb(a,b,c){return new A.cQ(this.a.cb(0,b,c),b.i("@<0>").X(c).i("cQ<1,2>"))}}
A.iN.prototype={
gu(a){var s=this
return new A.oH(s,s.c,s.d,s.b,s.$ti.i("oH<1>"))},
gE(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gH(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aG())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga1(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aG())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gap(a){var s,r=this
if(r.b===r.c)throw A.b(A.aG())
if(r.gm(0)>1)throw A.b(A.iF())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a9(a,b){var s,r=this
A.Ez(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
G(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.jH(s);++r.d
return!0}return!1},
l(a){return A.tJ(this,"{","}")},
jH(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.oH.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.u(A.aA(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.cn.prototype={
gE(a){return this.gm(this)===0},
gY(a){return this.gm(this)!==0},
F(a,b){var s
for(s=J.E(b);s.k();)this.t(0,s.gn())},
cj(a,b,c){return new A.en(this,b,A.n(this).i("@<1>").X(c).i("en<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iF())
s=r.gu(r)
if(!s.k())throw A.b(A.aG())
return s.gn()},
l(a){return A.tJ(this,"{","}")},
dw(a,b){return new A.at(this,b,A.n(this).i("at<1>"))},
cI(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cV(a,b){return A.F4(this,b,A.n(this).c)},
bl(a,b){return A.F2(this,b,A.n(this).c)},
gH(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aG())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aG())
do s=r.gn()
while(r.k())
return s},
a9(a,b){var s,r
A.bc(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.m9(b,b-r,this,null,"index"))},
$iK:1,
$io:1,
$ieG:1}
A.kc.prototype={}
A.kn.prototype={}
A.oD.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ro(b):s}},
gm(a){return this.b==null?this.c.a:this.dJ().length},
gE(a){return this.gm(0)===0},
gY(a){return this.gm(0)>0},
gM(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.oE(this)},
gb_(){var s,r=this
if(r.b==null){s=r.c
return new A.al(s,A.n(s).i("al<2>"))}return A.dH(r.dJ(),new A.Al(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tu().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a8(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a8(0,b)
s=o.dJ()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.Bq(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aA(o))}},
dJ(){var s=this.c
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
tu(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.v(t.N,t.z)
r=n.dJ()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.an(r)
n.a=n.b=null
return n.c=s},
ro(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.Bq(this.a[a])
return this.b[a]=s}}
A.Al.prototype={
$1(a){return this.a.h(0,a)},
$S:68}
A.oE.prototype={
gm(a){return this.a.gm(0)},
a9(a,b){var s=this.a
return s.b==null?s.gM().a9(0,b):s.dJ()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gM()
s=s.gu(s)}else{s=s.dJ()
s=new J.fh(s,s.length,A.a0(s).i("fh<1>"))}return s},
D(a,b){return this.a.I(b)}}
A.Aj.prototype={
q(){var s,r,q=this
q.oP()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.Gg(r.charCodeAt(0)==0?r:r,q.b))
s.aS()}}
A.B4.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:65}
A.B3.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:65}
A.kV.prototype={
gaQ(){return"us-ascii"},
ke(a){return B.bz.v(a)}}
A.p6.prototype={
v(a){var s,r,q,p=A.bd(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.az(a,"string","Contains invalid characters."))
o[r]=q}return o},
c0(a){return new A.AW(new A.hn(a),this.a)}}
A.kW.prototype={}
A.AW.prototype={
q(){this.a.a.q()},
bP(a,b,c,d){var s,r,q,p
A.bd(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.Q("Source contains invalid character with code point: "+q+".",null))}s=new A.cg(a)
p=this.a.a
p.t(0,s.T(s,b,c))
if(d)p.q()}}
A.l1.prototype={
gfa(){return this.a},
wh(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bd(a1,a2,a0.length)
s=$.DZ()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.C3(a0.charCodeAt(l))
h=A.C3(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a3("")
e=p}else e=p
e.a+=B.a.B(a0,q,r)
d=A.bu(k)
e.a+=d
q=l
continue}}throw A.b(A.a9("Invalid base64 data",a0,r))}if(p!=null){e=B.a.B(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.E8(a0,n,a2,o,m,d)
else{c=B.c.al(d-1,4)+1
if(c===1)throw A.b(A.a9(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.ds(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.E8(a0,n,a2,o,m,b)
else{c=B.c.al(b,4)
if(c===1)throw A.b(A.a9(a,a0,a2))
if(c>1)a0=B.a.ds(a0,a2,a2,c===2?"==":"=")}return a0}}
A.i6.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.of(this.a?u.G:u.U).mV(a,0,s,!0)
s.toString
return A.dS(s,0,null)},
c0(a){return new A.yO(a,new A.z4(this.a?u.G:u.U))}}
A.of.prototype={
mM(a){return new Uint8Array(a)},
mV(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.L(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mM(o)
r.a=A.Kd(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.z4.prototype={
mM(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bK(B.f.gab(s),s.byteOffset,a)}}
A.z0.prototype={
t(a,b){this.lr(b,0,J.ar(b),!1)},
q(){this.lr(B.cO,0,0,!0)}}
A.yO.prototype={
lr(a,b,c,d){var s=this.b.mV(a,b,c,d)
if(s!=null)this.a.a.aA(A.dS(s,0,null))
if(d)this.a.a.aS()}}
A.l2.prototype={
v(a){var s,r,q=A.bd(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.oe()
r=s.k8(a,0,q)
r.toString
s.k_(a,q)
return r},
c0(a){return new A.z_(a,new A.oe())}}
A.oe.prototype={
k8(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Fg(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Ka(a,b,c,q)
r.a=A.Kc(a,b,c,s,0,r.a)
return s},
k_(a,b){var s=this.a
if(s<-1)throw A.b(A.a9("Missing padding character",a,b))
if(s>0)throw A.b(A.a9("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.z_.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.k8(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.k_(null,null)
this.a.a.aS()},
bP(a,b,c,d){var s,r
A.bd(b,c,a.length)
if(b===c)return
s=this.b
r=s.k8(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.k_(a,c)
this.a.a.aS()}}}
A.pV.prototype={}
A.hn.prototype={
t(a,b){this.a.t(0,b)},
q(){this.a.q()}}
A.oi.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.L(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.af(s,1)
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
q(){this.a.$1(B.f.T(this.b,0,this.c))}}
A.ld.prototype={}
A.oY.prototype={
t(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eR.prototype={
t(a,b){this.b.t(0,b)},
bf(a,b){A.cw(a,"error",t.K)
this.a.bf(a,b)},
q(){this.b.q()},
$ibB:1}
A.lf.prototype={}
A.aE.prototype={
c0(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
u1(a){return new A.jQ(new A.qQ(this),a,t.fM.X(A.n(this).i("aE.T")).i("jQ<1,2>"))}}
A.qQ.prototype={
$1(a){return new A.eR(a,this.a.c0(a),t.oW)},
$S:103}
A.ep.prototype={}
A.iL.prototype={
l(a){var s=A.ip(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.mh.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.tM.prototype={
aF(a,b){var s=A.Gg(a,this.gun().a)
return s},
a6(a,b){var s=A.Kx(a,this.gfa().b,null)
return s},
gfa(){return B.cr},
gun(){return B.cq}}
A.mj.prototype={
c0(a){return new A.Ak(null,this.b,new A.p_(a))}}
A.Ak.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.A("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a3("")
q=new A.AS(r,s)
A.Fw(b,q,p.b,p.a)
if(r.a.length!==0)q.jj()
s.q()},
q(){}}
A.mi.prototype={
c0(a){return new A.Aj(this.a,a,new A.a3(""))}}
A.An.prototype={
nC(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iL(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iL(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iL(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b6(a)
else if(s<m)n.iL(a,s,m)},
j3(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.mh(a,null))}s.push(a)},
iK(a){var s,r,q,p,o=this
if(o.nB(a))return
o.j3(a)
try{s=o.b.$1(a)
if(!o.nB(s)){q=A.EG(a,null,o.gm0())
throw A.b(q)}o.a.pop()}catch(p){r=A.C(p)
q=A.EG(a,r,o.gm0())
throw A.b(q)}},
nB(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xI(a)
return!0}else if(a===!0){r.b6("true")
return!0}else if(a===!1){r.b6("false")
return!0}else if(a==null){r.b6("null")
return!0}else if(typeof a=="string"){r.b6('"')
r.nC(a)
r.b6('"')
return!0}else if(t.j.b(a)){r.j3(a)
r.xG(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.j3(a)
s=r.xH(a)
r.a.pop()
return s}else return!1},
xG(a){var s,r,q=this
q.b6("[")
s=J.L(a)
if(s.gY(a)){q.iK(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b6(",")
q.iK(s.h(a,r))}}q.b6("]")},
xH(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.b6("{}")
return!0}s=a.gm(a)*2
r=A.a7(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a8(0,new A.Ao(n,r))
if(!n.b)return!1
o.b6("{")
for(p='"';q<s;q+=2,p=',"'){o.b6(p)
o.nC(A.F(r[q]))
o.b6('":')
o.iK(r[q+1])}o.b6("}")
return!0}}
A.Ao.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:30}
A.Am.prototype={
gm0(){var s=this.c
return s instanceof A.a3?s.l(0):null},
xI(a){this.c.iJ(B.x.l(a))},
b6(a){this.c.iJ(a)},
iL(a,b,c){this.c.iJ(B.a.B(a,b,c))},
ao(a){this.c.ao(a)}}
A.mm.prototype={
gaQ(){return"iso-8859-1"},
ke(a){return B.cy.v(a)}}
A.mn.prototype={}
A.nq.prototype={
t(a,b){this.bP(b,0,b.length,!1)}}
A.AS.prototype={
ao(a){var s=this.a,r=A.bu(a)
if((s.a+=r).length>16)this.jj()},
iJ(a){if(this.a.a.length!==0)this.jj()
this.b.t(0,a)},
jj(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.kg.prototype={
q(){},
bP(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bu(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
t(a,b){this.a.a+=b}}
A.p_.prototype={
t(a,b){this.a.a.aA(b)},
bP(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.B(a,b,c))
if(d)r.aS()},
q(){this.a.a.aS()}}
A.B2.prototype={
q(){var s,r,q,p=this.c
this.a.vo(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bP(q,0,q.length,!0)}else r.q()},
t(a,b){this.bP(b,0,J.ar(b),!1)},
bP(a,b,c,d){var s,r=this.c,q=this.a.d3(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bP(s,0,s.length,!1)
r.a=""
return}}}
A.nW.prototype={
gaQ(){return"utf-8"},
uj(a,b){return new A.dk((b===!0?B.dU:B.aO).a).d3(a,0,null,!0)},
f4(a){return this.uj(a,null)},
ke(a){return B.e.v(a)}}
A.nX.prototype={
v(a){var s,r,q=A.bd(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.pa(s)
if(r.lH(a,0,q)!==q)r.hB()
return B.f.T(s,0,r.b)},
c0(a){return new A.B5(new A.hn(a),new Uint8Array(1024))}}
A.pa.prototype={
hB(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.H(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mz(a,b){var s,r,q,p,o=this
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
return!0}else{o.hB()
return!1}},
lH(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.H(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mz(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hB()}else if(o<=2047){n=k.b
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
A.B5.prototype={
q(){if(this.a!==0){this.bP("",0,0,!0)
return}this.d.a.q()},
bP(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mz(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lH(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hB()
else n.a=a.charCodeAt(b);++b}s.t(0,B.f.T(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jF.prototype={
c0(a){return new A.B2(new A.dk(this.a),new A.p_(a),new A.a3(""))}}
A.dk.prototype={
d3(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bd(b,c,J.ar(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.L2(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.L1(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.ja(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.FT(p)
m.b=0
throw A.b(A.a9(n,a,q+m.c))}return o},
ja(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.L(b+c,2)
r=q.ja(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ja(a,s,c,d)}return q.um(a,b,c,d)},
vo(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bu(65533)
a.a+=s}else throw A.b(A.a9(A.FT(77),null,null))},
um(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a3(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bu(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bu(k)
h.a+=q
break
case 65:q=A.bu(k)
h.a+=q;--g
break
default:q=A.bu(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bu(a[m])
h.a+=q}else{q=A.dS(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bu(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.pg.prototype={}
A.aN.prototype={
bF(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bG(p,r)
return new A.aN(p===0?!1:s,r,p)},
q_(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cf()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bG(s,q)
return new A.aN(n===0?!1:o,q,n)},
q2(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cf()
s=k-a
if(s<=0)return l.a?$.E0():$.cf()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bG(s,q)
m=new A.aN(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fW(0,$.fd())
return m},
bG(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.L(b,16)
if(B.c.al(b,16)===0)return n.q_(r)
q=s+r+1
p=new Uint16Array(q)
A.Fo(n.b,s,b,p)
s=n.a
o=A.bG(q,p)
return new A.aN(o===0?!1:s,p,o)},
dD(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.L(b,16)
q=B.c.al(b,16)
if(q===0)return j.q2(r)
p=s-r
if(p<=0)return j.a?$.E0():$.cf()
o=j.b
n=new Uint16Array(p)
A.Kj(o,s,b,n)
s=j.a
m=A.bG(p,n)
l=new A.aN(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bG(1,q)-1)>>>0!==0)return l.fW(0,$.fd())
for(k=0;k<r;++k)if(o[k]!==0)return l.fW(0,$.fd())}return l},
a0(a,b){var s,r=this.a
if(r===b.a){s=A.z1(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iZ(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iZ(p,b)
if(o===0)return $.cf()
if(n===0)return p.a===b?p:p.bF(0)
s=o+1
r=new Uint16Array(s)
A.Kf(p.b,o,a.b,n,r)
q=A.bG(s,r)
return new A.aN(q===0?!1:b,r,q)},
fX(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cf()
s=a.c
if(s===0)return p.a===b?p:p.bF(0)
r=new Uint16Array(o)
A.og(p.b,o,a.b,s,r)
q=A.bG(o,r)
return new A.aN(q===0?!1:b,r,q)},
fM(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iZ(b,r)
if(A.z1(q.b,p,b.b,s)>=0)return q.fX(b,r)
return b.fX(q,!r)},
fW(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bF(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iZ(b,r)
if(A.z1(q.b,p,b.b,s)>=0)return q.fX(b,r)
return b.fX(q,!r)},
bj(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cf()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.Fp(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bG(s,p)
return new A.aN(m===0?!1:n,p,m)},
pZ(a){var s,r,q,p
if(this.c<a.c)return $.cf()
this.lA(a)
s=$.Dh.bx()-$.jP.bx()
r=A.Dj($.Dg.bx(),$.jP.bx(),$.Dh.bx(),s)
q=A.bG(s,r)
p=new A.aN(!1,r,q)
return this.a!==a.a&&q>0?p.bF(0):p},
rO(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lA(a)
s=A.Dj($.Dg.bx(),0,$.jP.bx(),$.jP.bx())
r=A.bG($.jP.bx(),s)
q=new A.aN(!1,s,r)
if($.Di.bx()>0)q=q.dD(0,$.Di.bx())
return p.a&&q.c>0?q.bF(0):q},
lA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Fl&&a.c===$.Fn&&c.b===$.Fk&&a.b===$.Fm)return
s=a.b
r=a.c
q=16-B.c.gmI(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.Fj(s,r,q,p)
n=new Uint16Array(b+5)
m=A.Fj(c.b,b,q,n)}else{n=A.Dj(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.Dk(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.z1(n,m,j,i)>=0){g&2&&A.H(n)
n[m]=1
A.og(n,h,j,i,n)}else{g&2&&A.H(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.og(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Kg(l,n,e);--k
A.Fp(d,f,0,n,k,o)
if(n[e]<d){i=A.Dk(f,o,k,j)
A.og(n,h,j,i,n)
while(--d,n[e]<d)A.og(n,h,j,i,n)}--e}$.Fk=c.b
$.Fl=b
$.Fm=s
$.Fn=r
$.Dg.b=n
$.Dh.b=h
$.jP.b=o
$.Di.b=q},
gJ(a){var s,r,q,p=new A.z2(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.z3().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aN&&this.a0(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.j([],t.s)
m=n.a
r=m?n.bF(0):n
while(r.c>1){q=$.E_()
if(q.c===0)A.u(B.bK)
p=r.rO(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pZ(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bv(s,t.hF).ej(0)},
$iaw:1}
A.z2.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:106}
A.z3.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:132}
A.ox.prototype={
mG(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mS(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.B1.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:63}
A.rt.prototype={
$0(){var s=this
return A.u(A.Q("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:18}
A.aF.prototype={
j0(a){var s=1000,r=B.c.al(a,s),q=B.c.L(a-r,s),p=this.b+r,o=B.c.al(p,s),n=this.c
return new A.aF(A.lz(this.a+B.c.L(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aF&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.c4(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kr(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a0(a,b){var s=B.c.a0(this.a,b.a)
if(s!==0)return s
return B.c.a0(this.b,b.b)},
xc(){var s=this
if(s.c)return s
return new A.aF(s.a,s.b,!0)},
l(a){var s=this,r=A.Iu(A.D_(s)),q=A.ly(A.CY(s)),p=A.ly(A.wr(s)),o=A.ly(A.CW(s)),n=A.ly(A.CX(s)),m=A.ly(A.CZ(s)),l=A.En(A.ET(s)),k=s.b,j=k===0?"":A.En(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaw:1}
A.aB.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aB&&this.a===b.a},
gJ(a){return B.c.gJ(this.a)},
a0(a,b){return B.c.a0(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.L(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.L(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.L(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.ir(B.c.l(n%1e6),6,"0")},
$iaw:1}
A.zK.prototype={
l(a){return this.a4()}}
A.af.prototype={
gcp(){return A.Jp(this)}}
A.kX.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ip(s)
return"Assertion failed"}}
A.dd.prototype={}
A.bA.prototype={
gjd(){return"Invalid argument"+(!this.a?"(s)":"")},
gjc(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gjd()+q+o
if(!s.a)return n
return n+s.gjc()+": "+A.ip(s.gkq())},
gkq(){return this.b}}
A.d5.prototype={
gkq(){return this.b},
gjd(){return"RangeError"},
gjc(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.iC.prototype={
gkq(){return this.b},
gjd(){return"RangeError"},
gjc(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id5:1,
gm(a){return this.f}}
A.cR.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.nP.prototype={
l(a){return"UnimplementedError: "+this.a},
$icR:1}
A.bm.prototype={
l(a){return"Bad state: "+this.a}}
A.li.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ip(s)+"."}}
A.mI.prototype={
l(a){return"Out of Memory"},
gcp(){return null},
$iaf:1}
A.jx.prototype={
l(a){return"Stack Overflow"},
gcp(){return null},
$iaf:1}
A.ow.prototype={
l(a){return"Exception: "+this.a},
$iG:1}
A.bk.prototype={
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
k=""}return g+l+B.a.B(e,i,j)+k+"\n"+B.a.bj(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.p(f)+")"):g},
$iG:1,
gik(){return this.a},
gfU(){return this.b},
gar(){return this.c}}
A.mb.prototype={
gcp(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iaf:1,
$icR:1,
$iG:1}
A.o.prototype={
f3(a,b){return A.fj(this,A.n(this).i("o.E"),b)},
cj(a,b,c){return A.dH(this,b,A.n(this).i("o.E"),c)},
dw(a,b){return new A.at(this,b,A.n(this).i("at<o.E>"))},
D(a,b){var s
for(s=this.gu(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
vq(a,b,c){var s,r
for(s=this.gu(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
vr(a,b,c){return this.vq(0,b,c,t.z)},
cI(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
C(a,b){var s,r,q=this.gu(this)
if(!q.k())return""
s=J.Z(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.Z(q.gn())
while(q.k())}else{r=s
do r=r+b+J.Z(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
ca(a,b){var s
for(s=this.gu(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
bY(a,b){var s=A.n(this).i("o.E")
if(b)s=A.P(this,s)
else{s=A.P(this,s)
s.$flags=1
s=s}return s},
cW(a){return this.bY(0,!0)},
iD(a){return A.d1(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gE(a){return!this.gu(this).k()},
gY(a){return!this.gE(this)},
cV(a,b){return A.F4(this,b,A.n(this).i("o.E"))},
bl(a,b){return A.F2(this,b,A.n(this).i("o.E"))},
gH(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aG())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aG())
do s=r.gn()
while(r.k())
return s},
gap(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aG())
s=r.gn()
if(r.k())throw A.b(A.iF())
return s},
cK(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a9(a,b){var s,r
A.bc(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.m9(b,b-r,this,null,"index"))},
l(a){return A.IS(this,"(",")")}}
A.S.prototype={
l(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"}}
A.U.prototype={
gJ(a){return A.l.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.l.prototype={$il:1,
P(a,b){return this===b},
gJ(a){return A.eC(this)},
l(a){return"Instance of '"+A.mP(this)+"'"},
gak(a){return A.dq(this)},
toString(){return this.l(this)}}
A.p1.prototype={
l(a){return""},
$iaJ:1}
A.jz.prototype={
gv3(){var s=this.gmU()
if($.kJ()===1e6)return s
return s*1000},
gmT(){var s=this.gmU()
if($.kJ()===1000)return s
return B.c.L(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mQ.$0()-r)
s.b=null}},
gmU(){var s=this.b
if(s==null)s=$.mQ.$0()
return s-this.a}}
A.jo.prototype={
gu(a){return new A.n5(this.a)},
ga1(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.A("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.G1(r,s)}return s}}
A.n5.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.G1(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a3.prototype={
gm(a){return this.a.length},
iJ(a){var s=A.p(a)
this.a+=s},
ao(a){var s=A.bu(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.yf.prototype={
$2(a,b){throw A.b(A.a9("Illegal IPv6 address, "+a,this.a,b))},
$S:164}
A.ko.prototype={
gmo(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.p(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gwx(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ae(s,1)
r=s.length===0?B.u:A.fF(new A.X(A.j(s.split("/"),t.s),A.MS(),t.iZ),t.N)
q.x!==$&&A.Co()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmo())
r.y!==$&&A.Co()
r.y=s
q=s}return q},
gkL(){return this.b},
gdj(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ad(s,"v",1))return B.a.B(s,1,s.length-1)
return s},
gfs(){var s=this.d
return s==null?A.FI(this.a):s},
gfz(){var s=this.f
return s==null?"":s},
gi0(){var s=this.r
return s==null?"":s},
vX(a){var s=this.a
if(a.length!==s.length)return!1
return A.Lf(a,s,0)>=0},
fD(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.Dr(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.AY(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.AZ(null,0,0,a)
else k=j.f
return A.kp(b,q,o,p,l,k,j.r)},
kE(a){return this.fD(a,null)},
nr(a){return this.fD(null,a)},
lW(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ad(b,"../",r);){r+=3;++s}q=B.a.dl(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.ig(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.ds(a,q+1,null,B.a.ae(b,r-3*s))},
bX(a){return this.fE(A.nV(a))},
fE(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb1().length!==0)return a
else{s=h.a
if(a.gkl()){r=a.nr(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gn0())m=a.gia()?a.gfz():h.f
else{l=A.L0(h,n)
if(l>0){k=B.a.B(n,0,l)
n=a.gkk()?k+A.f0(a.gbt()):k+A.f0(h.lW(B.a.ae(n,k.length),a.gbt()))}else if(a.gkk())n=A.f0(a.gbt())
else if(n.length===0)if(p==null)n=s.length===0?a.gbt():A.f0(a.gbt())
else n=A.f0("/"+a.gbt())
else{j=h.lW(n,a.gbt())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f0(j)
else n=A.Dt(j,!r||p!=null)}m=a.gia()?a.gfz():null}}}i=a.gkm()?a.gi0():null
return A.kp(s,q,p,o,n,m,i)},
gkl(){return this.c!=null},
gia(){return this.f!=null},
gkm(){return this.r!=null},
gn0(){return this.e.length===0},
gkk(){return B.a.S(this.e,"/")},
kI(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdj()!=="")A.u(A.Y(u.Q))
s=r.gwx()
A.KU(s,!1)
q=A.xE(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmo()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb1())if(p.c!=null===b.gkl())if(p.b===b.gkL())if(p.gdj()===b.gdj())if(p.gfs()===b.gfs())if(p.e===b.gbt()){r=p.f
q=r==null
if(!q===b.gia()){if(q)r=""
if(r===b.gfz()){r=p.r
q=r==null
if(!q===b.gkm()){s=q?"":r
s=s===b.gi0()}}}}return s},
$inT:1,
gb1(){return this.a},
gbt(){return this.e}}
A.B0.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.p9(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.p9(1,b,B.o,!0)
s.a+=r}},
$S:182}
A.B_.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:63}
A.ye.prototype={
gnz(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.ce(m,"?",s)
q=m.length
if(r>=0){p=A.kq(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.or("data","",n,n,A.kq(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cc.prototype={
gkl(){return this.c>0},
gkn(){return this.c>0&&this.d+1<this.e},
gia(){return this.f<this.r},
gkm(){return this.r<this.a.length},
gkk(){return B.a.ad(this.a,"/",this.e)},
gn0(){return this.e===this.f},
gb1(){var s=this.w
return s==null?this.w=this.pJ():s},
pJ(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.B(r.a,0,q)},
gkL(){var s=this.c,r=this.b+3
return s>r?B.a.B(this.a,r,s-1):""},
gdj(){var s=this.c
return s>0?B.a.B(this.a,s,this.d):""},
gfs(){var s,r=this
if(r.gkn())return A.aK(B.a.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbt(){return B.a.B(this.a,this.e,this.f)},
gfz(){var s=this.f,r=this.r
return s<r?B.a.B(this.a,s+1,r):""},
gi0(){var s=this.r,r=this.a
return s<r.length?B.a.ae(r,s+1):""},
lP(a){var s=this.d+1
return s+a.length===this.e&&B.a.ad(this.a,a,s)},
x_(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cc(B.a.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.Dr(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb1()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.B(h.a,h.b+3,q):""
o=h.gkn()?h.gfs():g
if(s)o=A.AY(o,b)
q=h.c
if(q>0)n=B.a.B(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.B(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.AZ(g,0,0,a)
else{k=h.r
j=m<k?B.a.B(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ae(q,m+1):g
return A.kp(b,p,n,o,l,j,i)},
kE(a){return this.fD(a,null)},
nr(a){return this.fD(null,a)},
bX(a){return this.fE(A.nV(a))},
fE(a){if(a instanceof A.cc)return this.td(this,a)
return this.mq().fE(a)},
td(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lP("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lP("443")
if(p){o=r+1
return new A.cc(B.a.B(a.a,0,o)+B.a.ae(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mq().fE(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cc(B.a.B(a.a,0,r)+B.a.ae(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cc(B.a.B(a.a,0,r)+B.a.ae(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.x_()}s=b.a
if(B.a.ad(s,"/",n)){m=a.e
l=A.FA(this)
k=l>0?l:m
o=k-n
return new A.cc(B.a.B(a.a,0,k)+B.a.ae(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ad(s,"../",n))n+=3
o=j-n+1
return new A.cc(B.a.B(a.a,0,j)+"/"+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.FA(this)
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
return new A.cc(B.a.B(h,0,i)+d+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kI(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb1()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.u(A.Y(u.Q))
q=B.a.B(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mq(){var s=this,r=null,q=s.gb1(),p=s.gkL(),o=s.c>0?s.gdj():r,n=s.gkn()?s.gfs():r,m=s.a,l=s.f,k=B.a.B(m,s.e,l),j=s.r
l=l<j?s.gfz():r
return A.kp(q,p,o,n,k,l,j<m.length?s.gi0():r)},
l(a){return this.a},
$inT:1}
A.or.prototype={}
A.lI.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.p(this.b)}}
A.mE.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iG:1}
A.t8.prototype={
$2(a,b){this.a.b5(new A.t6(a),new A.t7(b),t.X)},
$S:184}
A.t6.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:194}
A.t7.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.MF(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.u("Attempting to box non-Dart object.")
s={}
s[$.HH()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:6}
A.C8.prototype={
$1(a){var s,r,q,p
if(A.Ge(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gM());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.F(p,J.bZ(a,this,t.z))
return p}else return a},
$S:34}
A.Ce.prototype={
$1(a){return this.a.aC(a)},
$S:28}
A.Cf.prototype={
$1(a){if(a==null)return this.a.aT(new A.mE(a===undefined))
return this.a.aT(a)},
$S:28}
A.BO.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Gd(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aF(A.lz(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.Q("structured clone of RegExp",null))
if(a instanceof Promise)return A.a1(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.v(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aD(o),q=s.gu(o);q.k();)n.push(A.pq(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.L(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:34}
A.Ag.prototype={
cP(a){if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
return Math.random()*a>>>0},
nd(){return Math.random()}}
A.Ah.prototype={
p5(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cP(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.H(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ap(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bK(B.aB.gab(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.lF.prototype={}
A.a4.prototype={
h(a,b){var s,r=this
if(!r.jt(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a4.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jt(b))return
s.c.j(0,s.a.$1(b),new A.S(b,c,s.$ti.i("S<a4.K,a4.V>")))},
F(a,b){b.a8(0,new A.pX(this))},
cb(a,b,c){return this.c.cb(0,b,c)},
I(a){var s=this
if(!s.jt(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a4.K").a(a)))},
ga7(){var s=this.c,r=A.n(s).i("aI<1,2>")
return A.dH(new A.aI(s,r),new A.pY(this),r.i("o.E"),this.$ti.i("S<a4.K,a4.V>"))},
a8(a,b){this.c.a8(0,new A.pZ(this,b))},
gE(a){return this.c.a===0},
gY(a){return this.c.a!==0},
gM(){var s=this.c,r=A.n(s).i("al<2>")
return A.dH(new A.al(s,r),new A.q_(this),r.i("o.E"),this.$ti.i("a4.K"))},
gm(a){return this.c.a},
aV(a,b,c,d){return this.c.aV(0,new A.q0(this,b,c,d),c,d)},
gb_(){var s=this.c,r=A.n(s).i("al<2>")
return A.dH(new A.al(s,r),new A.q1(this),r.i("o.E"),this.$ti.i("a4.V"))},
l(a){return A.v9(this)},
jt(a){return this.$ti.i("a4.K").b(a)},
$iJ:1}
A.pX.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a4.K,a4.V)")}}
A.pY.prototype={
$1(a){var s=a.b
return new A.S(s.a,s.b,this.a.$ti.i("S<a4.K,a4.V>"))},
$S(){return this.a.$ti.i("S<a4.K,a4.V>(S<a4.C,S<a4.K,a4.V>>)")}}
A.pZ.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a4.C,S<a4.K,a4.V>)")}}
A.q_.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a4.K(S<a4.K,a4.V>)")}}
A.q0.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.X(this.c).X(this.d).i("S<1,2>(a4.C,S<a4.K,a4.V>)")}}
A.q1.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a4.V(S<a4.K,a4.V>)")}}
A.lB.prototype={
Z(a,b){return J.x(a,b)},
ac(a){return J.a8(a)}}
A.iG.prototype={
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
A.ev.prototype={
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
A.hJ.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.CI(s.gv9(),s.gvS(),s.gvY(),A.n(this).i("hJ.E"),t.S)
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
A.h0.prototype={}
A.hz.prototype={
gJ(a){var s=this.a
return 3*s.a.ac(this.b)+7*s.b.ac(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hz){s=this.a
s=s.a.Z(this.b,b.b)&&s.b.Z(this.c,b.c)}else s=!1
return s}}
A.iQ.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.CI(null,null,null,t.mB,t.S)
for(r=J.E(a.gM());r.k();){q=r.gn()
p=new A.hz(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gM());r.k();){q=r.gn()
p=new A.hz(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ac(a){var s,r,q,p,o,n,m,l
for(s=J.E(a.gM()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ac(n)
l=a.h(0,n)
o=o+3*m+7*q.ac(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.lA.prototype={
Z(a,b){var s,r=this
if(a instanceof A.cn)return b instanceof A.cn&&new A.h0(r,t.cu).Z(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iQ(r,r,t.a3).Z(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.ev(r,t.hI).Z(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iG(r,t.nZ).Z(a,b)
return J.x(a,b)},
ac(a){var s=this
if(a instanceof A.cn)return new A.h0(s,t.cu).ac(a)
if(t.f.b(a))return new A.iQ(s,s,t.a3).ac(a)
if(t.j.b(a))return new A.ev(s,t.hI).ac(a)
if(t.e7.b(a))return new A.iG(s,t.nZ).ac(a)
return J.a8(a)},
vZ(a){return!0}}
A.mD.prototype={
sm(a,b){A.EO()},
t(a,b){return A.EO()}}
A.nS.prototype={
j(a,b,c){return A.JX()}}
A.ch.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.ch){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.vB(this.a)},
l(a){return A.aq(this.a)}}
A.c0.prototype={
t(a,b){if(this.a!=null)throw A.b(A.A("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.A("add must be called once."))}}
A.m3.prototype={
v(a){var s=new A.c0(),r=A.cU(s)
r.t(0,a)
r.q()
r=s.a
r.toString
return r}}
A.td.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.A("Hash.add() called after close()."))
s.r=s.r+J.ar(b)
s.la(b)},
la(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pz(B.f.gab(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.L(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ai(i,j,n,a,o)
k.e=n
return}B.f.ai(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.H(s)
s[m]=l;++m}while(m<q)
k.xi(s)}},
q(){var s,r,q,p,o,n,m,l=this
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
n=J.pz(B.f.gab(q))
m=B.c.L(p,4294967296)
n.$flags&2&&A.H(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.la(q)
s=l.a
s.t(0,new A.ch(l.pr()))
s.q()},
pr(){var s,r,q,p,o,n,m
if(B.aU===$.kI())return J.HU(B.y.gab(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pz(B.f.gab(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.H(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oV.prototype={
c0(a){var s=new Uint32Array(A.b9(A.j([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hn(new A.oW(s,r,a,q,new Uint32Array(16)))}}
A.AE.prototype={
xi(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cE[q]+s[q]>>>0)>>>0)>>>0
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
A.oW.prototype={}
A.kQ.prototype={
gJ(a){return A.c4(B.dF,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lt&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dq(s).l(0)+".with"+s.d*8+"bits()"
return A.dq(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.q7.prototype={}
A.iP.prototype={
gJ(a){return B.t.ac(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.iP&&B.t.Z(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.C(s,",")+"])"}}
A.js.prototype={
l(a){return A.dq(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iG:1}
A.v3.prototype={
l(a){return A.dq(this).l(0)+"()"}}
A.jr.prototype={
gJ(a){return(B.t.ac(this.b.a)^B.t.ac(this.c)^B.t.ac(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jr){s=B.t.Z(this.b.a,b.b.a)
s=s&&B.t.Z(this.c,b.c)&&B.t.Z(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.C(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.xk.prototype={}
A.jt.prototype={
ge8(){return this.b},
gJ(a){var s=A.eC(B.dP),r=B.t.ac(this.ge8())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jt&&B.t.Z(this.ge8(),b.ge8())},
l(a){return"SecretKeyData(...)"}}
A.na.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.lt.prototype={
uq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge8().gm(0),f=this.d
if(g!==f)throw A.b(A.az(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.GA(c)
r=new Uint32Array(4)
A.pn(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.Em(r,a.c)
p=J.E4(B.f.gab(q),0,null)
o=a.a
n=B.t.Z(B.aS.lh(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.js())
A.BF(q,1)
n=o.length
m=B.c.L(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pn(l,k,p,0,s)
A.BF(q,1)}j=J.bK(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.H(j)
j[k]=i^h}return j},
v6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge8().gm(0),f=this.d
if(g!==f)throw A.b(A.az(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.GA(d)
r=new Uint32Array(4)
A.pn(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.Em(r,c)
p=J.E4(B.f.gab(q),0,null)
o=new Uint32Array(A.b9(p))
A.BF(q,1)
n=a.length
m=(B.c.L(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pn(l,k,p,0,s)
A.BF(q,1)}j=J.bK(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.H(j)
j[k]=i^h}return new A.jr(j,B.aS.lh(j,b,s,r,o),c)}}
A.r7.prototype={
l(a){return"DartGcm()"},
lh(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lu(n,d,b)
A.lu(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.L(s,o),!1)
q.setUint32(4,B.c.al(s,o),!1)
q.setUint32(8,B.c.L(r,o),!1)
q.setUint32(12,B.c.al(r,o),!1)
A.lu(n,d,J.bK(B.aB.gab(q),0,null))
p=new Uint32Array(4)
A.pn(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iP(J.bK(B.y.gab(n),0,null))}}
A.op.prototype={}
A.oq.prototype={}
A.qT.prototype={}
A.r8.prototype={}
A.zz.prototype={
Z(a,b){var s,r,q=J.L(a),p=J.L(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ac(a){var s,r,q,p,o
for(s=J.L(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.al(q,16)
r=(r^B.c.tc(p,o)^B.c.ml(p,16-o))>>>0}return r}}
A.n0.prototype={}
A.l3.prototype={$iCy:1}
A.l4.prototype={
i_(){if(this.w)throw A.b(A.A("Can't finalize a finalized Request."))
this.w=!0
return B.bD},
l(a){return this.a+" "+this.b.l(0)}}
A.l5.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:88}
A.l6.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:93}
A.pR.prototype={
oS(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.Q("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.Q("Invalid content length "+A.p(s)+".",null))}}}
A.la.prototype={
b7(a){return this.oq(a)},
oq(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b7=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.Ei("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.i_().xb(),$async$b7)
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
f=A.v(a9,t.K)
e=b4.gmL()
d=null
if(e!=null){d=e
J.cX(f,"content-length",d)}for(b0=b4.r,b0=new A.aI(b0,A.n(b0).i("aI<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.cX(f,c.a,c.b)}f=A.ps(f)
f.toString
A.bf(f)
b0=l.signal
s=8
return A.a(A.a1(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b7)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.jf(a,null):null
if(a0==null&&a!=null){f=A.Ei("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.v(a9,a9)
b.headers.forEach(A.pi(new A.pU(a1)))
f=A.L5(b4,b)
a4=b.status
a6=a1
a8=a0
A.nV(b.url)
a9=b.statusText
f=new A.np(A.H9(f),a4,a8,a6)
f.oS(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ae(b3)
A.Gj(a2,a3,b4)
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
return A.f($async$b7,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].abort()
this.b=!0}}
A.pU.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:95}
A.Bm.prototype={
$1(a){return A.hR(this.a,this.b,a)},
$S:99}
A.Bv.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.aj()}},
$S:0}
A.Bw.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a1(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.C(k)
m=A.ae(k)
if(!o.a.b)A.Gj(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.du.prototype={
xb(){var s=new A.w($.D,t.jz),r=new A.aL(s,t.iq),q=new A.oi(new A.pW(r),new Uint8Array(1024))
this.aa(q.gtO(q),!0,q.gea(),r.gua())
return s}}
A.pW.prototype={
$1(a){return this.a.aC(new Uint8Array(A.b9(a)))},
$S:11}
A.ei.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iG:1}
A.mw.prototype={
gm(a){return this.b}}
A.vt.prototype={
gmL(){var s,r,q,p=this,o={},n=o.a=0
p.x.a8(0,new A.vu(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.r)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lN(q)).length+q.b+2)}return o.a+2+70+4},
i_(){var s=this,r=s.pn()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.l2()
return new A.du(s.bn(r))},
bn(a){return this.qo(a)},
qo(a){var $async$bn=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aI(f,A.n(f).i("aI<1,2>")).gu(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bT(A.e0(e),$async$bn,r)
case 5:k=l.b
j=$.Cs()
l=A.B(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.B(l,'"',"%22")+'"'
l=$.E1()
s=6
q=[1]
return A.bT(A.e0(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bn,r)
case 6:s=7
q=[1]
return A.bT(A.e0(B.e.v(k)),$async$bn,r)
case 7:s=8
q=[1]
return A.bT(A.e0(B.b6),$async$bn,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bT(A.e0(e),$async$bn,r)
case 12:s=13
q=[1]
return A.bT(A.e0(B.e.v(m.lN(g))),$async$bn,r)
case 13:if(g.f)A.u(A.A("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bT(A.Kv(g.e),$async$bn,r)
case 14:s=15
q=[1]
return A.bT(A.e0(B.b6),$async$bn,r)
case 15:case 10:f.length===l||(0,A.r)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bT(A.e0(d),$async$bn,r)
case 16:case 1:return A.bT(null,0,r)
case 2:return A.bT(o.at(-1),1,r)}})
var s=0,r=A.Gc($async$bn,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Gs(r)},
qH(a,b){var s,r=$.Cs()
r=A.B(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.B(r,'"',"%22")+'"'
r=$.E1()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lN(a){var s=a.d.l(0),r=$.Cs(),q=A.B(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.B(q,'"',"%22")+'"'
s=A.B(a.c,r,"%0D%0A")
p=p+'; filename="'+A.B(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pn(){var s,r=J.ED(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cU[$.Hj().cP(66)]
return"dart-http-boundary-"+A.dS(r,0,null)}}
A.vu.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qH(a,b)).length+B.e.v(b).length+2)},
$S:39}
A.x9.prototype={
gmL(){return this.y.length},
gkf(){var s,r
if(this.gcu()==null||!this.gcu().c.a.I("charset"))return B.o
s=this.gcu().c.a.h(0,"charset")
s.toString
r=A.Iy(s)
return r==null?A.u(A.a9('Unsupported encoding "'+s+'".',null,null)):r},
i_(){this.l2()
return new A.du(A.D7(this.y,t.L))},
gcu(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.J6(s)},
scu(a){this.r.j(0,"content-type",a.l(0))},
pu(){if(!this.w)return
throw A.b(A.A("Can't modify a finalized Request."))}}
A.jB.prototype={}
A.np.prototype={}
A.ib.prototype={}
A.fG.prototype={
l(a){var s=new A.a3(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a8(0,new A.vd(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.vb.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.xF(null,j),h=$.HT()
i.iS(h)
s=$.HS()
i.fc(s)
r=i.gkt().h(0,0)
r.toString
i.fc("/")
i.fc(s)
q=i.gkt().h(0,0)
q.toString
i.iS(h)
p=t.N
o=A.v(p,p)
for(;;){p=i.d=B.a.em(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gN():n
if(!m)break
p=i.d=h.em(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gN()
i.fc(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.fc("=")
n=i.d=s.em(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gN()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.N1(i)
n=i.d=h.em(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.vf()
return A.CT(r,q,o)},
$S:105}
A.vd.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.HQ()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.H6(b,$.HF(),new A.vc(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:39}
A.vc.prototype={
$1(a){return"\\"+A.p(a.h(0,0))},
$S:60}
A.BV.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:60}
A.pQ.prototype={
du(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$du=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eK(),$async$du)
case 5:o=b
s=o.gnp()<0.25?6:7
break
case 6:s=8
return A.a(p.jG(o),$async$du)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnp()<0.25?9:10
break
case 9:s=11
return A.a(p.jG(m),$async$du)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$du,r)},
iy(){var s=0,r=A.h(t.q),q,p=this
var $async$iy=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eK(),$async$iy)
case 3:q=p.jG(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)},
eK(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eK=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.cc():j
p=3
s=6
return A.a(l,$async$eK)
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
return A.f($async$eK,r)},
jG(a){var s=this.c
if(s!=null)return s
return this.c=this.h4(a)},
h4(a){return this.q1(a)},
q1(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$h4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.kZ("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iz(l),$async$h4)
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
return A.f($async$h4,r)}}
A.jb.prototype={
oU(a,b,c,d,e,f,g,h,i,j,k){var s=this,r=new A.pQ(s.c)
s.Q!==$&&A.eb()
s.Q=r
s.as!==$&&A.eb()
s.as=new A.vT(s.z,s.b,r,s.x,s.a)},
is(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$is=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.ay){s=1
break}n.ay=!0
if(n.ch){s=1
break}p=4
m=n.as
m===$&&A.t()
s=7
return A.a(m.iu(),$async$is)
case 7:n.ax=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.C(k)
if(m instanceof A.cF){n.ax=!1
n.ch=!0}else if(m instanceof A.bo)n.ay=n.ax=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$is,r)},
fV(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.at!=null){s=1
break}o=p.as
o===$&&A.t()
n=A.Jl(B.ca,o,A.j(["data"],t.s),p.gr8(),p.gr5(),p.w)
p.at=n
s=3
return A.a(n.az(),$async$fV)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fV,r)},
eD(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.at
o=o==null?null:o.aJ()
s=2
return A.a(o instanceof A.w?o:A.bw(o,t.H),$async$eD)
case 2:q.at=null
for(o=q.cx,p=new A.aT(o,o.r,o.e,A.n(o).i("aT<2>"));p.k();)p.d.A()
o.an(0)
q.cy.an(0)
return A.e(null,r)}})
return A.f($async$eD,r)},
h1(){var s=0,r=A.h(t.H),q=this
var $async$h1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.eD(),$async$h1)
case 2:q.z.a.q()
return A.e(null,r)}})
return A.f($async$h1,r)},
r6(){var s,r,q,p
for(s=this.db,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
this.eH(p,new A.cz(p,B.aa,null))}},
r9(a){var s=a.b,r=s.b
if(!B.b.D(this.db,r))return
if(a.a==="delete"){this.hx(s)
return}this.eH(r,new A.cz(r,B.aa,s))},
hx(a){return this.tx(a)},
tx(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hx=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.D(n.db,j)){s=1
break}m=null
p=4
l=n.as
l===$&&A.t()
s=7
return A.a(l.c_(a.a),$async$hx)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.C(i)
if(l instanceof A.cK){n.eH(j,new A.cz(j,B.aR,null))
s=1
break}else if(l instanceof A.bo){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eH(j,new A.cz(j,B.aR,null))
s=1
break}n.eH(j,new A.cz(j,B.aa,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hx,r)},
eH(a,b){var s,r,q=this
q.cy.j(0,a,b)
s=q.cx
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.c9(q.d,new A.vP(q,a)))},
xk(a,b){return this.iF(null,a,null,b,null)},
iF(a,b,c,d,e){return this.xn(a,b,c,d,e)},
xm(a,b){return this.iF(null,a,null,null,b)},
xn(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iF=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aV(0,new A.vQ(p),t.N,t.co)
n=p.as
n===$&&A.t()
q=n.iE(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iF,r)},
$iD9:1}
A.vP.prototype={
$0(){var s,r=this.a,q=this.b
r.cx.G(0,q)
s=r.cy.G(0,q)
if(s!=null&&(r.CW.c&4)===0)r.CW.t(0,s)},
$S:0}
A.vQ.prototype={
$2(a,b){return new A.S(a,new A.dy("imgs+",b.a,b.b,b.c),t.ia)},
$S:115}
A.mO.prototype={}
A.wl.prototype={
hO(a,b,c,d){return this.ud(a,b,c,d)},
ud(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hO=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.AK(d)
n=t.hw
m=A.dQ(null,null,n)
l=t.N
k=$.D.h(0,B.dy)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.la(A.j([],t.kG))
j=new A.vR(j)
p=new A.mO(c,B.aX,a,o,B.b0,200,25,b,B.ae,B.ae,null,j,m,A.v(l,t.hU),A.v(l,n))
p.oU(a,B.ae,B.aX,b,25,200,null,B.b0,B.ae,o,null)
s=3
return A.a(p.fV(),$async$hO)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
hU(a){return this.uW(a)},
uW(a){var s=0,r=A.h(t.H),q
var $async$hU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.eD(),$async$hU)
case 2:a.h1()
q=a.CW
if((q.c&4)===0)q.q()
return A.e(null,r)}})
return A.f($async$hU,r)}}
A.AK.prototype={
cc(){var s=0,r=A.h(t.q),q,p=this,o
var $async$cc=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cc(),$async$cc)
case 3:q=o.F6(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cc,r)},
iz(a){return this.wV(a)},
wV(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cc(),$async$iz)
case 3:q=o.F6(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iz,r)}}
A.wa.prototype={}
A.vT.prototype={
hI(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hI=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.du(),$async$hI)
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
l=A.kZ("token provider failed: "+A.p(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hI,r)},
fl(a,b,c,d,e,f){return this.w3(a,b,c,d,e,f)},
w3(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fl=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.NF(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.fb(a)+" && updated>="+A.fb(n)+")"
o=c==null?m:m+" && (updated>"+A.fb(n)+" || (updated="+A.fb(n)+" && id>"+A.fb(c)+"))"}l=t.N
l=A.v(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.iC(B.c.bp(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.C(b,","))
k=p.b.bX("/api/collections/data/records").kE(l)
s=3
return A.a(p.mh("GET",k),$async$fl)
case 3:j=a0
p.dL(j,A.j([200],t.t),k)
i=p.d5(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aS("List response has no items array."))
h=J.bZ(i,new A.w9(p),t.Q)
h=A.P(h,h.$ti.i("a_.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
c_(a){return this.oi(a)},
oi(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$c_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jE(a)
s=3
return A.a(p.mh("GET",o),$async$c_)
case 3:n=c
if(n.a===404)throw A.b(A.Ji("not found"))
p.dL(n,A.j([200],t.t),o)
q=A.fQ(p.d5(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
hQ(a,b,c){return this.ui(a,b,c)},
ui(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bX("/api/collections/data/records")
s=3
return A.a(p.eY("POST",o,B.h.a6(A.m(["id",b,"store",c,"data",p.j9(a)],t.N,t.X),null)),$async$hQ)
case 3:n=e
if(n.a===400&&p.qL(n))throw A.b(new A.ft(p.eJ(n)))
p.dL(n,A.j([200,201],t.t),o)
q=A.fQ(p.d5(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
j9(a){var s,r,q
try{r=B.h.aF(a,null)
return r}catch(q){s=A.C(q)
r=A.Jk("Corrupt local payload: "+A.p(s))
throw A.b(r)}},
qL(a){var s,r,q,p,o,n
try{s=this.d5(a)
r=J.W(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fI(a,b,c){return this.xj(a,b,c)},
xj(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jE(c)
s=3
return A.a(p.eY("PATCH",o,B.h.a6(A.m(["data",p.j9(b)],t.N,t.X),null)),$async$fI)
case 3:n=e
p.dL(n,A.j([200],t.t),o)
q=A.fQ(p.d5(n),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
iE(a,b,c,d,e){return this.xl(a,b,c,d,e)},
xl(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iE=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jE(b)
m=t.N
l=A.v(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a6(d,null))
if(e==null)m=null
else{m=A.n(e).i("al<2>")
m=A.P(new A.al(e,m),m.i("o.E"))}s=3
return A.a(p.t5(new A.m6("PATCH",n,B.aA,l,m==null?B.cN:m)),$async$iE)
case 3:o=g
p.dL(o,A.j([200],t.t),n)
q=A.fQ(p.d5(o),p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iE,r)},
f7(a,b,c){return this.v_(a,b,c)},
v_(a,b,c){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$f7=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.v(i,i)
l=n.b.bX("/api/files/data/"+A.p9(2,b,B.o,!1)+"/"+A.p9(2,a,B.o,!1))
k=i.a===0?l:l.kE(i)
s=3
return A.a(n.rb(new A.er("GET",k,B.aA,null)),$async$f7)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.aU(new A.w8()).A().fH(B.cb),$async$f7)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.lU(A.IP(m.a,m.b,""),k))
case 5:q=n.pv(m.c)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f7,r)},
pv(a){var s,r,q={},p=this.d
if(p.a<=0)return a
s=A.ok()
q.a=q.b=null
r=new A.w0(q,p,s)
s.b=A.nn(new A.vX(q),new A.vY(q,r,a,s),new A.vZ(q),new A.w_(q,r),!0,t.L)
return s.aB().gcq()},
fv(a){return this.wC(a)},
wC(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$fv=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.bX("/api/batch")
a6=A.j([],t.kf)
for(l=J.aD(a7),k=l.gu(a7),j=t.N,i=t.X,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",p.j9(g.d)],j,i)],j,h))}s=3
return A.a(p.eY("POST",a5,B.h.a6(A.m(["requests",a6],j,t.ew),null)),$async$fv)
case 3:o=b0
if(o.a===403)throw A.b(A.IF(p.eJ(o)))
if(o.a===400)throw A.b(new A.ee(p.eJ(o)))
p.dL(o,A.j([200],t.t),a5)
n=null
try{n=B.h.aF(o.c,null)}catch(a8){a6=A.C(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aS("Batch response is not valid JSON: "+m.gik()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aS("Batch response has no results array."))}else throw A.b(A.aS("Batch response is not a list or envelope."))
e=c}a6=J.L(e)
if(a6.gm(e)!==l.gm(a7))throw A.b(A.aS("Batch response has "+a6.gm(e)+" results for "+l.gm(a7)+" requests."))
b=A.j([],t.g2)
for(k=t.f,j=p.e,a=0;a<l.gm(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aS("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.dp(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.fQ(a3,j):null
g=a2?null:p.q8(a0)
a4=a2&&k.b(a3)?B.h.a6(a3.h(0,"data"),null):null
b.push(new A.ji(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
iu(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iu=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eY("POST",p.b.bX("/api/batch"),B.h.a6(A.m(["requests",[]],t.N,t.kS),null)),$async$iu)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.kZ(p.eJ(o)))
if(n===408||n===429||n>=500)throw A.b(A.F7("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)},
jE(a){return this.b.bX("/api/collections/data/records/"+A.p9(2,a,B.o,!1))},
eY(a,b,c){return this.c9(new A.w4(this,a,b,c),new A.w5(),t.w)},
mh(a,b){return this.eY(a,b,null)},
t5(a){return this.c9(new A.w6(this,a),new A.w7(),t.w)},
rb(a){return this.c9(new A.w2(this,a),new A.w3(),t.lI)},
c9(a,b,c){return this.tC(a,b,c,c)},
tC(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c9=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.fZ(),$async$c9)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c9)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.j1(),$async$c9)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c9)
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
if(i instanceof A.dz){j=i
throw A.b(A.F7(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c9,r)},
fZ(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$fZ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.du(),$async$fZ)
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
l=A.kZ("token provider failed: "+A.p(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fZ,r)},
eu(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$eu=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.iy(),$async$eu)
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
l=A.kZ("token refresh failed: "+A.p(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eu,r)},
j1(){var s=0,r=A.h(t.q),q,p=this
var $async$j1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.eu()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j1,r)},
jL(a,b,c,d){return this.t3(a,b,c,d)},
t3(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jL=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.v(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b7(new A.er(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jL,r)},
dL(a,b,c){if(B.b.D(b,a.a))return
throw A.b(this.lU(a,c))},
lU(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eJ(a)
if(401===s)return new A.c_(q)
if(403===s)return new A.cF(q)
if(404===s)return new A.cK(q)
if(408===s||429===s)return new A.dO(r,q)
if(400===s)return new A.eB(q)
if(s>=500)return new A.ju(q)
return new A.fR("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eJ(a){var s,r,q,p,o
try{s=this.d5(a)
r=J.W(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.W(s,"data")
if(t.f.b(q)){p=q
p=p.gY(p)}else p=!1
if(p){p=B.h.a6(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.B(p,0,500)},
d5(a){var s,r,q,p=null
try{p=B.h.aF(a.c,null)}catch(r){q=A.C(r)
if(t.Y.b(q)){s=q
throw A.b(A.aS("Response is not valid JSON: "+s.gik()))}else throw r}if(t.f.b(p))return A.bl(p,t.N,t.X)
throw A.b(A.aS("Expected a JSON object, got "+J.bY(p).l(0)+"."))},
q8(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.p(r)+")"}}
A.w9.prototype={
$1(a){return A.fQ(a,this.a.e)},
$S:125}
A.w8.prototype={
$1(a){},
$S:11}
A.w0.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.A()
r=this.b
s.b=A.c9(r,new A.w1(s,this.c,r))},
$S:0}
A.w1.prototype={
$0(){var s=this.b
s.aB().jV(new A.eK("download stalled: no chunk within "+this.c.l(0)))
s.aB().q()
s=this.a.a
if(s!=null)s.A()},
$S:0}
A.vY.prototype={
$0(){var s,r,q=this,p=q.b
p.$0()
s=q.d
r=q.a
r.a=q.c.bs(new A.vU(p,s),new A.vV(r,s),new A.vW(r,s))},
$S:0}
A.vU.prototype={
$1(a){this.a.$0()
J.aO(this.b.aB(),a)},
$S:11}
A.vW.prototype={
$2(a,b){var s=this.a.b
if(s!=null)s.A()
this.b.aB().bf(a,b)},
$S:6}
A.vV.prototype={
$0(){var s=this.a.b
if(s!=null)s.A()
this.b.aB().q()},
$S:0}
A.vZ.prototype={
$0(){var s=this.a.a
return s==null?null:s.b2()},
$S:0}
A.w_.prototype={
$0(){var s=this.a.a
if(s!=null)s.aW()
this.b.$0()},
$S:0}
A.vX.prototype={
$0(){var s=this.a,r=s.b
if(r!=null)r.A()
s=s.a
return s==null?null:s.A()},
$S:130}
A.w4.prototype={
$1(a){var s=this
return s.a.jL(s.b,s.c,s.d,a)},
$S:57}
A.w5.prototype={
$1(a){return a.a},
$S:56}
A.w6.prototype={
$1(a){var s=this.b,r=t.N
r=A.cI(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dB(new A.m6(s.a,s.b,r,s.d,s.e))},
$S:57}
A.w7.prototype={
$1(a){return a.a},
$S:56}
A.w2.prototype={
$1(a){var s=this.b,r=t.N
r=A.cI(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.ep(new A.er(s.a,s.b,r,s.d))},
$S:139}
A.w3.prototype={
$1(a){return a.a},
$S:144}
A.jd.prototype={}
A.hF.prototype={}
A.wb.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.y){s=1
break}p.y=!0
p.eX()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aJ(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.y=!1
n=q.Q
if(n!=null)n.A()
q.Q=null
n=q.z
n=n==null?null:n.A()
s=2
return A.a(n instanceof A.w?n:A.bw(n,t.H),$async$aJ)
case 2:q.z=null
p=q.as
if(p!=null?(p.a.a&30)===0:o)p.aj()
return A.e(null,r)}})
return A.f($async$aJ,r)},
eX(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eX=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.r,m=t.H
case 2:if(!o.y){s=3
break}q=5
s=8
return A.a(o.bJ(),$async$eX)
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
return A.a(A.IL(n.$1(k),m),$async$eX)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eX,r)},
m_(a){var s=this.a,r=t.N
return s.a.ep(new A.er("GET",s.b.bX("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
mi(a,b){var s=this.a,r=t.N
return s.a.b7(new A.er("POST",s.b.bX("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a6(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
bJ(){return this.pK()},
pK(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$bJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.hI(),$async$bJ)
case 3:k=b
m.a=k
s=4
return A.a(p.m_(k),$async$bJ)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.eu(),$async$bJ)
case 7:k=b
m.a=k
s=8
return A.a(p.m_(k),$async$bJ)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iB("realtime connect status "+l,null))
s=!p.y?9:10
break
case 9:s=11
return A.a(o.c.aU(new A.we()).A(),$async$bJ)
case 11:s=1
break
case 10:++p.ax
p.as=new A.aL(new A.w($.D,t.D),t.h)
l=$.px()
n=A.j([],t.s)
m.b=m.c=!1
n=o.c.bs(new A.wf(m,p,new A.wi(p),new A.AL(new A.zA(l),n)),new A.wg(p),new A.wh(p))
p.z=n
s=!p.y?12:13
break
case 12:s=14
return A.a(n.A(),$async$bJ)
case 14:p.z=null
s=1
break
case 13:s=15
return A.a(p.as.a,$async$bJ)
case 15:l=p.Q
if(l!=null)l.A()
p.z=p.Q=null
if(m.b)throw A.b(A.iB("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$bJ,r)},
dQ(a,b){return this.qw(a,b)},
qw(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$dQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.mi(h,b),$async$dQ)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.eu(),$async$dQ)
case 10:s=9
return A.a(p.mi(g,d),$async$dQ)
case 9:s=7
break
case 8:d=l
case 7:k=d.a
if(k!==204&&k!==200)throw A.b(A.iB("realtime subscribe status "+k,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
if(!t.f.b(n)){s=1
break}try{m=A.fQ(n,p.a.e)
p.x.$1(new A.jd(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$dQ,r)}}
A.wk.prototype={
$1(a){return A.GP(a,this.a,this.b,A.NA())},
$S:145}
A.we.prototype={
$1(a){},
$S:11}
A.wi.prototype={
$0(){var s,r=this.a,q=r.e
if(q.a<=0)return
s=r.Q
if(s!=null)s.A()
r.Q=A.c9(q,new A.wj(r))},
$S:0}
A.wj.prototype={
$0(){var s,r=this.a
if(!r.y)return
s=r.z
if(s!=null)s.A()
r=r.as
if((r.a.a&30)===0)r.aj()},
$S:0}
A.wf.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
l.c.$0()
s=l.d.vh(a)
for(r=s.length,q=l.b,p=l.a,o=t.P,n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
q.at=q.at.W(new A.wc(p,q,m),o).jZ(new A.wd(q))}},
$S:11}
A.wc.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.b){s=1
break}p=4
s=7
return A.a(n.b.dQ(n.c,i.a),$async$$1)
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
return A.a(j instanceof A.w?j:A.bw(j,t.H),$async$$1)
case 8:i=i.as
if((i.a.a&30)===0)i.aj()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.c&&n.c.a!=null){i.c=!0
try{n.b.w.$0()}catch(g){m=A.C(g)
l=A.ae(g)
i=n.b
i.ay=m
i.ch=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:150}
A.wd.prototype={
$2(a,b){var s=this.a
if(s.ay==null)s.ay=a
if(s.ch==null)s.ch=b},
$S:6}
A.wg.prototype={
$0(){var s=this.a,r=s.Q
if(r!=null)r.A()
s=s.as
if((s.a.a&30)===0)s.aj()},
$S:0}
A.wh.prototype={
$1(a){var s=this.a,r=s.Q
if(r!=null)r.A()
s=s.as
if((s.a.a&30)===0)s.aj()},
$S:21}
A.AL.prototype={
vh(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.kH()
r=A.j([],t.gy)
for(q=s.length,p=0;;){o=this.qI(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dm(p,o,q)))
p=o+1
m=this.pY(B.a.xe(new A.dk(!0).d3(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.f.b8(s,p))
return r},
qI(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qp(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.an(k)
return l}s=m.b
r=B.b.C(k,"\n")
m.b=null
B.b.an(k)
try{q=B.h.aF(r,l)
if(t.f.b(q)){p=A.bl(q,t.N,t.X)
o=J.W(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.hF(o,l)
return new A.hF(l,p)}}catch(n){}return l},
pY(a){var s,r=this,q=null
if(a.length===0)return r.qp()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.an(r.c)
return new A.hF(B.a.cm(B.a.ae(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.cm(B.a.ae(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.cm(B.a.ae(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.er.prototype={}
A.dy.prototype={
oC(){return this.d.$0()},
gm(a){return this.c}}
A.m6.prototype={}
A.cG.prototype={}
A.dz.prototype={
l(a){return"HttpTransportException: "+this.a},
$iG:1}
A.dR.prototype={}
A.vR.prototype={
b7(a){return this.or(a)},
or(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b7=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.ep(a),$async$b7)
case 7:m=c
j=m.c
s=8
return A.a(B.aO.l4(j).ej(0).fH(B.af),$async$b7)
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
j=A.C(g)
if(j instanceof A.dz)throw g
else{k=j
j=A.iB("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b7,r)},
dB(a){return this.os(a)},
os(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dB=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Je(a6.a,a6.b)
h.r.F(0,a6.c)
h.x.F(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.oC(),$async$dB)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.H9(a0)
a3=new A.fG("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cQ(A.v(d,d),e))
b.push(new A.mw(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.r)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b7(m).fH(B.af),$async$dB)
case 11:k=a8
g=k.w
s=12
return A.a(B.aO.l4(g).ej(0).fH(B.af),$async$dB)
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
g=A.C(a5)
if(g instanceof A.dz)throw a5
else{i=g
g=A.iB("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dB,r)},
ep(a){return this.wp(a)},
wp(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ep=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.JB(a,a0)
a1.r.F(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gkf().ke(j)
i.pu()
i.y=A.NJ(j)
h=i.gcu()
if(h==null){j=t.N
i.scu(A.CT("text","plain",A.m(["charset",i.gkf().gaQ()],j,j)))}else{j=i.gcu()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.bR(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gkf().gaQ()],j,j)
e=h.a
d=h.b
c=A.bl(h.c,j,j)
c.F(0,f)
i.scu(A.CT(e,d,c))}}}p=4
s=7
return A.a(n.a.b7(a1).fH(B.af),$async$ep)
case 7:m=a5
j=t.N
l=A.v(j,j)
m.e.a8(0,new A.vS(l))
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
j=A.C(a2)
if(j instanceof A.dz)throw a2
else{k=j
a=A.iB("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ep,r)}}
A.vS.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:39}
A.qO.prototype={
$1(a){return a.b===this.a},
$S:158}
A.qP.prototype={
$1(a){return a.b===this.a},
$S:159}
A.lk.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.P(s,A.n(s).c)
B.b.aI(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.P(s,A.n(s).c)
B.b.aI(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.jg.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iG:1}
A.c1.prototype={}
A.lg.prototype={
gV(){return"committedChange"},
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
s=A.P(s,A.n(s).c)
B.b.aI(s)
q.j(0,"changedFields",s)
return q}}
A.ln.prototype={
gV(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jH.prototype={
gV(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.lY.prototype={
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
A.lN.prototype={
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
A.lO.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.lT.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lP.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.lM.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.m1.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.lW.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lR.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
s=r.d
if(s!=null)q.j(0,"refId",s)
return q}}
A.lQ.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.lZ.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lU.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.lG.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.nl.prototype={
p(){return B.j}}
A.m0.prototype={
gV(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.it.prototype={
gV(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fA.prototype={
gV(){return"fileRefs"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.lX.prototype={
gV(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fz.prototype={
gV(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fx.prototype={
gV(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.h5.prototype={
gV(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fy.prototype={
gV(){return"fileChunk"},
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",r.b)
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.vv.prototype={}
A.iX.prototype={}
A.j_.prototype={}
A.iY.prototype={}
A.j0.prototype={}
A.iU.prototype={}
A.iV.prototype={}
A.iT.prototype={}
A.iZ.prototype={}
A.iW.prototype={}
A.Bs.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.x0.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.v(k,j),h=t.d,g=A.j([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)g.push(s[q].p())
i.j(0,"where",g)
g=A.j([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=A.j([],h)
for(n=B.b.gu(p);n.k();)o.push(n.gn().p())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.p())
h=A.j([],h)
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
A.x1.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.x2.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.N("Malformed query conditions."))
s=A.j([],t.cM)
for(r=J.E(a);r.k();)s.push(A.EW(r.gn()))
return s},
$S:173}
A.eD.prototype={
p(){var s,r,q,p,o=this,n=A.v(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)r.push(A.f7(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.f7(o.c))
return n}}
A.wX.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.wY.prototype={
$1(a){return a.b===this.a},
$S:178}
A.aY.prototype={
a4(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.wp.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.wo.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.N("Malformed predicate children."))
s=A.j([],t.eK)
for(r=J.E(a);r.k();)s.push(A.CV(r.gn()))
return s},
$S:180}
A.iM.prototype={
p(){var s=A.v(t.N,t.X)
s.j(0,"kind","leaf")
s.F(0,this.a.p())
return s}}
A.j7.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.i2.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.i3.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mV.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.x_.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.cy.prototype={
a4(){return"AggregateFn."+this.b}}
A.xi.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.xj.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.n_.prototype={}
A.mH.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.lb.prototype={
p(){return B.j}}
A.m4.prototype={
p(){return B.j}}
A.le.prototype={
p(){return B.j}}
A.m2.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n3.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mx.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.Lq(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mW.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lq.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lp.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lC.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.m7.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kR.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.lJ.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n9.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dT.prototype={
a4(){return"TransactionDurability."+this.b}}
A.nI.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.nJ.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nL.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nN.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nM.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nK.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.o1.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.o2.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.o0.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kT.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.o_.prototype={
p(){return B.j}}
A.nY.prototype={
p(){return B.j}}
A.mS.prototype={
p(){return B.j}}
A.lh.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.n4.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lm.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ll.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.n1.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.kO.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.kP.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.lo.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ah.prototype={}
A.fO.prototype={
gV(){return"ok"},
p(){return B.j}}
A.ia.prototype={
gV(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.m5.prototype={
gV(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.fX.prototype={
gV(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.fY.prototype={
gV(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fJ.prototype={
gV(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fV.prototype={
gV(){return"queryRows"},
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fq.prototype={
gV(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fs.prototype={
gV(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fD.prototype={
gV(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fg.prototype={
gV(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fw.prototype={
gV(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.h_.prototype={
gV(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.j([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.n8.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fo.prototype={
gV(){return"conflicts"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fn.prototype={
gV(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hb.prototype={
gV(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hj.prototype={
gV(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fS.prototype={
gV(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fm.prototype={
gV(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.eI.prototype={
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
A.b5.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.ny.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.nD.prototype={
p(){return B.j}}
A.nt.prototype={
p(){return B.j}}
A.nu.prototype={
p(){return B.j}}
A.nw.prototype={
p(){return B.j}}
A.nE.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.nx.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.nB.prototype={
p(){return B.j}}
A.nz.prototype={
gV(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.nv.prototype={
gV(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.nC.prototype={
gV(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.nA.prototype={
gV(){return"syncStatusEvent"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.l_.prototype={
gV(){return"authRequired"},
p(){return B.j}}
A.eL.prototype={
l(a){return"WireException: "+this.a},
$iG:1}
A.Cp.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:181}
A.mN.prototype={
a4(){return"PlatformProfile."+this.b}}
A.nk.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.xt.prototype={
$1(a){return J.bL(a.gb_())},
$S:31}
A.xu.prototype={
$1(a){return B.a.D(a,"ENABLE_FTS5")},
$S:14}
A.ic.prototype={
a4(){return"ChangeOrigin."+this.b}}
A.dv.prototype={
a4(){return"ChangeAction."+this.b}}
A.dN.prototype={
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
s=A.P(s,A.n(s).c)
B.b.aI(s)
q.j(0,"changedFields",s)
return q},
P(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.dN))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.r.Z(b.e,s.e)&&B.r.Z(b.f,s.f)&&B.r.Z(b.r,s.r)},
gJ(a){var s=this
return A.c4(s.a,s.b,s.c,s.d,B.r.ac(s.e),B.r.ac(s.f),B.r.ac(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a2.prototype={}
A.q4.prototype={
kc(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
v4(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.q5.prototype={}
A.q6.prototype={}
A.rG.prototype={}
A.pE.prototype={
v5(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cP(256)
q=this.b.v6(new Uint8Array(A.b9(a)),b,m,this.c)
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
uo(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.Q("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.A("Unsupported ciphertext version 0x"+B.a.ir(B.c.kJ(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b9(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b9(B.f.b8(a,n)))
q=new Uint8Array(A.b9(B.f.T(a,13,n)))
try{n=this.b.uq(new A.jr(q,new A.iP(r),s),b,this.c)
return n}catch(o){if(A.C(o) instanceof A.js)throw A.b(A.A("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d0.prototype={
a4(){return"KindViolation."+this.b}}
A.BI.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:188}
A.f_.prototype={$iG:1}
A.Ap.prototype={
cc(){var s=0,r=A.h(t.N),q,p=this,o
var $async$cc=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cc,r)}}
A.p4.prototype={}
A.hD.prototype={}
A.tN.prototype={
oT(a,b){var s=this,r=s.a.a.a$.b
r=new A.b0(r,A.n(r).i("b0<1>")).aU(new A.ug(s))
s.c!==$&&A.eb()
s.c=r},
vt(a){var s,r,q=this
A:{if(a instanceof A.mH){s=q.hj(a.a,a.b)
break A}if(a instanceof A.lb){s=A.ba(q.h_(),t.V)
break A}if(a instanceof A.m4){s=A.ba(new A.m5(!0,q.a.d.a),t.V)
break A}if(a instanceof A.le){s=q.q().W(new A.uh(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.m2){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bz(r,new A.ui(s,q),new A.uj())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.n3){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bz(r,new A.uu(s,q),new A.uF())
break A}if(a instanceof A.mx){s=q.qT(a.a,a.b,a.c)
break A}if(a instanceof A.mW){s=q.rd(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lq){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bz(r,new A.uG(s,q),A.GG())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lp){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bz(r,new A.uH(s,q),A.GG())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lC){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bz(r,new A.uI(s,q),A.MN())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.m7){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bz(r,new A.uJ(s,q),A.MP())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kR){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bz(r,new A.uK(s,q),A.MM())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lJ){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bz(r,new A.uL(s,q),A.MO())
break A}if(a instanceof A.n9){s=q.t_(a.a,a.b,a.c)
break A}if(a instanceof A.nI){s=q.ph(a.a,a.b)
break A}if(a instanceof A.nJ){s=q.eZ(a.a,!0)
break A}if(a instanceof A.nL){s=q.eZ(a.a,!1)
break A}if(a instanceof A.nN){s=q.hr(a.a,a.b)
break A}if(a instanceof A.nM){s=q.hq(a.a,a.b)
break A}if(a instanceof A.nK){s=q.ho(a.a,a.b)
break A}if(a instanceof A.o1){s=q.hy(a.a,a.b)
break A}if(a instanceof A.o2){s=q.tz(a.a,a.b)
break A}if(a instanceof A.o0){s=q.jR(a.a)
break A}if(a instanceof A.kT){s=q.a.a.e
s===$&&A.t()
s=s.e7(a.a).W(new A.uk(),t.V)
break A}if(a instanceof A.o_){s=q.a.a.e
s===$&&A.t()
s=s.fJ().W(new A.ul(),t.V)
break A}if(a instanceof A.nY){s=q.a.a.e
s===$&&A.t()
s=s.iG().W(new A.um(),t.V)
break A}if(a instanceof A.mS){s=q.a.a.e
s===$&&A.t()
s=s.fu().W(new A.un(),t.V)
break A}if(a instanceof A.lh){s=q.a.a.e
s===$&&A.t()
s=s.eb(a.a,A.cD(0,a.b,0)).W(new A.uo(),t.V)
break A}if(a instanceof A.n4){s=q.a.a.e
s===$&&A.t()
s=s.cU(A.cD(0,a.a,0)).W(new A.up(),t.V)
break A}if(a instanceof A.lm){s=q.a.a.dy
s===$&&A.t()
s=s.fk(a.a).W(new A.uq(q),t.V)
break A}if(a instanceof A.ll){s=q.a.a.dy
s===$&&A.t()
s=s.dA(a.a,a.b).W(new A.ur(q),t.V)
break A}if(a instanceof A.n1){s=q.a.a.dy
s===$&&A.t()
s=s.ev(a.b,a.c,a.a).W(new A.us(),t.V)
break A}if(a instanceof A.kO){s=q.a.a.dy
s===$&&A.t()
s=s.f0(a.a,a.b).W(new A.ut(),t.V)
break A}if(a instanceof A.kP){s=q.a.a.dy
s===$&&A.t()
s=s.e5(a.a,a.b).W(new A.uv(),t.V)
break A}if(a instanceof A.lo){s=q.tA(a.a)
break A}if(a instanceof A.lN){s=q.jf(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.lO){s=q.jg(a.a,a.b)
break A}if(a instanceof A.lT){s=q.hb(a.a)
break A}if(a instanceof A.lM){s=q.je(a.a)
break A}if(a instanceof A.m1){s=q.a.a.fr
s===$&&A.t()
s=s.cO(a.c,a.b,a.a).W(new A.uw(q),t.V)
break A}if(a instanceof A.lW){s=q.hc(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.lQ){s=q.jh(a.a,a.b)
break A}if(a instanceof A.lP){s=q.h9(a.a)
break A}if(a instanceof A.lZ){s=q.a.a.fr
s===$&&A.t()
s=s.fB(0,a.c,a.d,a.b,a.e,a.a).W(new A.ux(),t.V)
break A}if(a instanceof A.lR){s=q.ha(a.a,a.b,a.c,a.d)
break A}if(a instanceof A.lU){s=q.a.a.fr
s===$&&A.t()
s=s.bi(A.cD(0,a.a,0),A.cD(0,a.b,0)).W(new A.uy(),t.V)
break A}if(a instanceof A.lG){s=q.a.a.fr
s===$&&A.t()
s=s.cH(a.a).W(new A.uz(),t.V)
break A}if(a instanceof A.nl){s=q.a.a.fr
s===$&&A.t()
s=s.gic().W(new A.uA(),t.V)
break A}if(a instanceof A.ny){s=q.e3(a.a,a.b,a.c)
break A}if(a instanceof A.nD){s=q.cD().W(new A.uB(),t.V)
break A}if(a instanceof A.nt){s=q.ht()
break A}if(a instanceof A.nu){s=q.e2(new A.uC(q))
break A}if(a instanceof A.nw){s=q.e2(new A.uD(q))
break A}if(a instanceof A.nE){s=q.hu(a.a)
break A}s={}
s.a=null
if(a instanceof A.nx){s.a=a.a
s=q.e2(new A.uE(s,q))
break A}if(a instanceof A.nB){s=q.ax
s=A.ba(new A.nC(s==null?B.dE:s),t.V)
break A}throw A.b(A.eF(u.P))}return s},
hj(a,b){return this.ra(a,b)},
ra(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hj=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.fx,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.qa(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:h=n.f
h===$&&A.t()
s=9
return A.a(h.aR(j),$async$hj)
case 9:s=7
break
case 8:g=m.h(0,i)
if(g==null)A.u(A.A('No store "'+i+'" registered in this LocalPocket.'))
f=g.c
e=A.D3(j)
d=new A.a3("")
A.ce(d,f.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.c0()
b=A.cU(c)
b.t(0,h)
b.q()
b=A.aq(c.a.a)
d=new A.a3("")
A.ce(d,e.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.c0()
a=A.cU(c)
a.t(0,h)
a.q()
if(b!==A.aq(c.a.a))throw A.b(A.aC('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){g=m.h(0,i)
if(g==null)A.u(A.A('No store "'+i+'" registered in this LocalPocket.'))
d=new A.a3("")
A.ce(d,g.c.p())
h=d.a
h=B.e.v(h.charCodeAt(0)==0?h:h)
c=new A.c0()
b=A.cU(c)
b.t(0,h)
b.q()
b=a0!==A.aq(c.a.a)
h=b}else h=!1
if(h)throw A.b(A.aC('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.r)(a1),++k
s=3
break
case 5:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
h_(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$h_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bL(B.b.gH(m.b.op("PRAGMA journal_mode")).gb_())
m=m.a.fr
m===$&&A.t()
s=3
return A.a(m.gic(),$async$h_)
case 3:o=b
m=l.e===B.aC
n=m?"opfs":"file"
q=new A.ia(l.a,l.b,l.c,l.d,m,n,o,J.Z(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h_,r)},
dI(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.au(a)
if(b!=null){s=this.d9(b)
r=A.EB(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.u(A.A('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.d9(b)
return new A.fl(n,m,new A.ir(q),p.r)}return new A.fl(n,m,o.gbq(),null)},
px(a){return this.dI(a,null)},
qT(a,b,c){return this.bz(c,new A.u1(this,a,c,b),new A.u2())},
bv(a,b){var s
A.aq(B.l.v(B.e.v(A.ai(this.a.a.au(a).c.p()))).a)
if(a.length===0)A.u(A.az(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.u(A.az(s,"spec.limit","must not be negative"))
return new A.wZ(a,b)},
bd(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.dI(a.a,a0),c=t.fC,b=new A.mU(d.a,d.b.a,d.c.b,A.j([],c),A.j([],c),A.j([],t.k),A.j([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.r)(d),++s)b=this.pd(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.r)(d),++s){o=d[s]
n=A.j([],p)
for(m=B.b.gu(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bg)throw A.b(A.ac('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.wr(n)}j=e.c
if(j!=null){d=A.Cc(j)
b.jS(d)
A.Dv(d)
i=A.Bp(d,!0)
h=b.h2()
h.d.push(new A.b_(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.r)(d),++s,b=h){g=d[s]
q=g.a
b.d1(q)
h=b.h2()
h.r.push(new A.cj(q,g.b))}d=e.r
if(d!=null)b=b.ls(A.bE(d,!0,r))
if(e.w)b=b.pO(!0)
if(e.x)b=b.pP(!0)
if(e.f)b=b.pM(!0)
else{d=e.e
if(d!=null){if(d<0)A.u(A.ac("Limit must be non-negative, got "+A.p(d)+".",f))
b=b.pQ(d)}}return b},
pd(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.nA(0,b.a,!0)
return a.xt(0,b.a,s)
case 1:return a.xA(0,b.a,b.c)
case 2:return a.xu(0,b.a,b.c)
case 3:return a.xv(0,b.a,b.c)
case 4:return a.xy(0,b.a,b.c)
case 5:return a.xz(0,b.a,b.c)
case 6:return a.xw(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.n
if(r.length!==2)throw A.b(A.Q("between requires exactly two values.",null))
return a.xp(0,b.a,new A.a5(r[0],r[1]))
case 8:return a.xB(0,b.a,A.a6(b.c))
case 9:return a.xs(0,b.a,A.a6(b.c))
case 10:return a.xq(0,b.a,A.a6(b.c))
case 11:return a.nA(0,b.a,!0)
case 12:return a.xx(0,b.a,!0)}},
rd(a,b,c){return this.bz(c,new A.u3(this,this.bv(a,b),c),new A.u4())},
t_(a,b,c){return this.bz(c,new A.u7(this,a,c,b),new A.u8())},
ph(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.A("A transaction session is already active on this database."))
s="tx"+ ++l.ay
r=$.D
q=t.D
p=t.h
o=new A.w(r,q)
n=new A.p4(s,new A.aL(new A.w(r,q),p),new A.aL(o,p),A.j([],t.mc),new A.aF(Date.now(),0,!1))
k.j(0,s,n)
l.q6()
m=l.a.a
k=new A.tQ(n)
if(a){if(A.nO(m)!=null)A.u(A.A(u.L))
r=m.b
r===$&&A.t()
k=r.wN(k,t.H)}else{r=b===B.bq?B.aZ:B.p
r=m.aZ(k,r,t.H)
k=r}n.w!==$&&A.eb()
n.w=k
k.jZ(new A.tO(l,n,s))
return o.W(new A.tP(s),t.V)},
eZ(a,b){return this.t8(a,b)},
t8(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eZ=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d9(a)
for(l=h.e,k=A.a0(l).i("bv<1>"),l=new A.bv(l,k),l=new A.an(l,l.gm(0),k.i("an<a_.E>")),k=k.i("a_.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.u(A.A("Future already completed"))
j.aE(null)}h.f=!b
h.c.aj()
p=4
l=h.w
l===$&&A.t()
s=7
return A.a(l,$async$eZ)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.C(g) instanceof A.f_){if(b)throw g}else throw g
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
return A.f($async$eZ,r)},
hr(a,b){return this.rX(a,b)},
rX(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d9(a)
n=$.D
m=t.D
l=t.h
k=new A.w(n,m)
j=new A.hD(b,new A.aL(new A.w(n,m),l),new A.aL(k,l))
l=o.r.a2(new A.u6(j),t.H)
j.f!==$&&A.eb()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hr)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
hq(a,b){return this.rV(a,b)},
rV(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hq=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d9(a).e
f=B.b.n2(g,new A.u5(b))
if(f<0)throw A.b(A.A('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a0(g).i("bv<1>")
l=A.P(new A.bv(g,l),l.i("a_.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bS(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.u(A.A("Future already completed"))
i.aE(null)
p=7
i=m.f
i===$&&A.t()
s=10
return A.a(i,$async$hq)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.C(e) instanceof A.f_))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:B.b.iB(g,f,g.length)
q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hq,r)},
ho(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$ho=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d9(a).e
j=A.EB(k)
if(j==null||j.a!==b)throw A.b(A.A('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.aj()
p=4
m=j.f
m===$&&A.t()
s=7
return A.a(m,$async$ho)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.C(i) instanceof A.f_)throw i
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
return A.f($async$ho,r)},
hy(a,b){return this.tB(a,b)},
tB(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.au(a)
s=3
return A.a(p.px(a).bZ(b),$async$hy)
case 3:o="w"+ ++p.ay
n=A.ok()
n.shZ(new A.mG(l,b,m,B.b_).iT().n9(new A.uc(p,o),new A.ud(p,n,o)))
p.f.j(0,o,n.aB())
q=A.ba(new A.hj(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
tz(a,b){var s=this,r="w"+ ++s.ay,q=s.bd(s.bv(a,b),null),p=A.ok()
p.shZ(new A.mX(q,q.ge_(),B.b_).iT().n9(new A.ue(s,r),new A.uf(s,p,r)))
s.f.j(0,r,p.aB())
return A.ba(new A.hj(r),t.V)},
jR(a){return this.tr(a)},
tr(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.G(0,a)
if(o!=null)o.A()
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jR,r)},
q7(){if(this.w!=null)return
this.w=A.xZ(A.cD(9e8,0,0),new A.tX(this))},
jf(a,b,c,d,e,f,g){return this.qg(a,b,c,d,e,f,g)},
qg(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$jf=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.q7()
o=p.r
n="u"+ ++p.ay
o.mY()
m=o.r
if(m.a>=16)A.u(A.ac("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.u(A.ac("Invalid file size: "+c,null))
if(o.gnv()+c>536870912)A.u(A.ac("Aggregate upload quota exceeded: "+o.gnv()+" + "+c+" > 536870912",null))
o=o.f.$0().j0(18e8)
m.j(0,n,new A.cE(n,a,b,d,e,c,f,g,A.j([],t.bs),o))
q=new A.m0("u"+p.ay,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jf,r)},
jg(a,b){return this.qh(a,b)},
qh(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$jg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.u(A.ac("Unknown upload session: "+a,null))
l=l.f
if(!j.z.kr(l.$0())){k.G(0,a)
A.u(A.ac("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.G(0,a)
A.u(A.ac("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.G(0,a)
A.u(A.ac("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().j0(18e8)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jg,r)},
hb(a){return this.ql(a)},
ql(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.G(0,a)
if(g==null)A.u(A.ac("Unknown upload session: "+a,null))
if(!g.z.kr(h.f.$0()))A.u(A.ac("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.u(A.ac("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.fr
h===$&&A.t()
n=g.b
m=g.c
l=new A.tY(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.dd(g.w,l,i,o,k,j,m,n),$async$hb)
case 3:q=new f.it(p.ji(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
je(a){return this.qf(a)},
qf(a){var s=0,r=A.h(t.V),q,p=this
var $async$je=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.G(0,a)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$je,r)},
hc(a,b,c,d,e){return this.qn(a,b,c,d,e)},
qn(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$hc=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.fr
k===$&&A.t()
s=3
return A.a(k.fq(c,d,b,e,a),$async$hc)
case 3:o=g
n="f"+ ++p.ay
m=new A.lS(new A.aF(Date.now(),0,!1))
m.c=new A.aF(Date.now(),0,!1)
l=A.ok()
l.shZ(o.bs(new A.tZ(p,m,n,l),new A.u_(p,n),new A.u0(p,n)))
k=l.aB()
m.d!==$&&A.eb()
m.d=k
p.x.j(0,n,m)
p.q5()
q=new A.lX(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
ha(a,b,c,d){return this.qk(a,b,c,d)},
qk(a,b,c,d){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$ha=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=p.e0().x
o===$&&A.t()
n=A
s=3
return A.a(o.dg(c,b,d,a),$async$ha)
case 3:q=new n.it(p.ji(f))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
jh(a,b){return this.qj(a,b)},
qj(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$jh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.A('Unknown file stream "'+a+'".'))
if((n.b-=b)<0)n.b=0
n.c=new A.aF(Date.now(),0,!1)
if(n.b<1048576){o=n.d
o===$&&A.t()
o.aW()}q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jh,r)},
q5(){if(this.y!=null)return
this.y=A.xZ(A.cD(45e7,0,0),new A.tT(this))},
h9(a){return this.qi(a)},
qi(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$h9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.G(0,a)
s=n!=null?3:4
break
case 3:o=n.d
o===$&&A.t()
s=5
return A.a(o.A(),$async$h9)
case 5:case 4:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
ji(a){return new A.lY(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
e3(a,b,c){return this.ti(a,b,c)},
ti(a,b,a0){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e3=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.ac("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cD(),$async$e3)
case 3:if(b==null||b.length===0)throw A.b(A.ac("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.Ap(a0)
m=A.nV(a)
l=o.fx
k=A.n(l).i("T<1>")
l=A.P(new A.T(l,k),k.i("o.E"))
s=4
return A.a(o.ax.hO(m,b,l,n),$async$e3)
case 4:j=a2
m=A.dQ(null,null,t.n6)
l=A.dQ(null,null,t.ic)
k=t.H
i=A.ba(null,k)
h=new A.pF(A.ba(null,k))
g=A.ba(B.O,t.fD)
f=A.j([],t.s)
k=A.ba(null,k)
e=new A.xJ(A.NG(),o.cy)
d=new A.ns(o,j,e,new A.u9(p),B.N,m,l,i,h,A.aM(t.N),g,f,k)
c=j.r
m=d.e=new A.xX(o,B.a.B(A.aq(B.l.v(B.e.v(j.b.l(0)+"|"+c)).a),0,12))
k=new A.rJ(o,j,e,o.ch)
d.x=k
k=new A.wA(o,j,e,m,k,h)
d.f=k
d.r=new A.xH(o,j,e,m,k)
d.w=new A.wJ(o,j,e,d.gqX(),j.ax)
p.as=n
p.Q=d
p.at=new A.b0(l,A.n(l).i("b0<1>")).aU(new A.ua(p))
s=5
return A.a(d.az(),$async$e3)
case 5:q=new A.nz(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e3,r)},
e0(){var s=this.Q
return s==null?A.u(A.ac("Sync is not started.",null)):s},
ht(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$ht=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.e0()
o.c6("cycle")
n=A
s=3
return A.a(o.eW(),$async$ht)
case 3:q=new n.nv(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
e2(a){var s=0,r=A.h(t.V),q
var $async$e2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$e2)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e2,r)},
hu(a){return this.tj(a)},
tj(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hu=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.as
n=p.e0()
if(o==null)throw A.b(A.ac("Sync is not started.",null))
o.a=a
s=3
return A.a(n.el(),$async$hu)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
cD(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.Q
q.Q=null
p=q.at
p=p==null?null:p.A()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bw(p,o),$async$cD)
case 2:q.at=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aJ(),$async$cD)
case 5:p=q.a.a.ax.hU(n)
s=6
return A.a(p,$async$cD)
case 6:case 4:q.ax=q.as=null
return A.e(null,r)}})
return A.f($async$cD,r)},
j7(a){return new A.lk(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
tA(a){var s=this,r="w"+ ++s.ay,q=s.a.a.dy
q===$&&A.t()
s.f.j(0,r,q.xo(a).aU(new A.ub(s,r)))
return A.ba(new A.hj(r),t.V)},
d9(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.A('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.A('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aF(Date.now(),0,!1)
return s},
q6(){var s,r,q=this
if(q.e!=null)return
s=q.a.ax
r=s.a
if(r<=0)return
q.e=A.xZ(A.cD(B.c.L(r,4),0,0),new A.tW(q,s))},
hz(a,b,c){return this.tE(a,b,c)},
bz(a,b,c){return this.hz(a,b,c,t.z)},
tE(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hz=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d9(a)
o=c
s=3
return A.a(b.$0(),$async$hz)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cD(),$async$q)
case 2:p=q.f,o=new A.aT(p,p.r,p.e,A.n(p).i("aT<2>"))
case 3:if(!o.k()){s=4
break}s=5
return A.a(o.d.A(),$async$q)
case 5:s=3
break
case 4:p.an(0)
p=q.w
if(p!=null)p.A()
q.w=null
p=q.e
if(p!=null)p.A()
q.e=null
p=q.y
if(p!=null)p.A()
q.y=null
q.r.r.an(0)
for(p=q.x,o=new A.aT(p,p.r,p.e,A.n(p).i("aT<2>"));o.k();){n=o.d.d
n===$&&A.t()
n.A()}p.an(0)
p=q.c
p===$&&A.t()
p.A()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.ug.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cI(r,t.N,t.X)
s=a.f
s=s==null?null:A.cI(s,t.N,t.X)
this.a.b.t(0,new A.lg(a.a,a.b,a.c,a.d,r,s,A.d1(a.r,t.N)))},
$S:189}
A.uh.prototype={
$1(a){return B.k},
$S:8}
A.ui.prototype={
$0(){var s=this.a
return this.b.dI(s.c,s.a).bZ(s.b)},
$S:195}
A.uj.prototype={
$1(a){return new A.fX(a)},
$S:197}
A.uu.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.j([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dI(o.c,o.a).bZ(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.r)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:198}
A.uF.prototype={
$1(a){return new A.fY(a)},
$S:213}
A.uG.prototype={
$0(){var s=this.b,r=this.a
return s.bd(s.bv(r.c,r.b),r.a).hL()},
$S:51}
A.uH.prototype={
$0(){var s=this.b,r=this.a
return s.bd(s.bv(r.d,r.b),r.a).hN(r.c)},
$S:51}
A.uI.prototype={
$0(){var s=this.b,r=this.a
return s.bd(s.bv(r.d,r.b),r.a).hV(r.c)},
$S:218}
A.uJ.prototype={
$0(){var s=this.b,r=this.a
return s.bd(s.bv(r.c,r.b),r.a).ib()},
$S:50}
A.uK.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.bd(s.bv(q.e,q.b),q.a).d0("SUM",q.c)
break
case 1:s=r.b
q=s.bd(s.bv(q.e,q.b),q.a).d0("AVG",q.c)
break
case 2:s=r.b
q=s.bd(s.bv(q.e,q.b),q.a).d0("MIN",q.c)
break
case 3:s=r.b
q=s.bd(s.bv(q.e,q.b),q.a).d0("MAX",q.c)
break
default:q=null}return q},
$S:237}
A.uL.prototype={
$0(){var s=this.b,r=this.a
return s.bd(s.bv(r.c,r.b),r.a).hW()},
$S:74}
A.uk.prototype={
$1(a){return B.k},
$S:8}
A.ul.prototype={
$1(a){return B.k},
$S:8}
A.um.prototype={
$1(a){return B.k},
$S:8}
A.un.prototype={
$1(a){return new A.fS(a)},
$S:75}
A.uo.prototype={
$1(a){return new A.fm(a)},
$S:76}
A.up.prototype={
$1(a){return B.k},
$S:8}
A.uq.prototype={
$1(a){var s,r,q=A.j([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.j7(s.gn()))
return new A.fo(q)},
$S:77}
A.ur.prototype={
$1(a){return new A.fn(a==null?null:this.a.j7(a))},
$S:78}
A.us.prototype={
$1(a){return B.k},
$S:8}
A.ut.prototype={
$1(a){return B.k},
$S:8}
A.uv.prototype={
$1(a){return B.k},
$S:8}
A.uw.prototype={
$1(a){var s,r,q=A.j([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.ji(s.gn()))
return new A.fA(q)},
$S:79}
A.ux.prototype={
$1(a){return B.k},
$S:8}
A.uy.prototype={
$1(a){return new A.fz(a)},
$S:80}
A.uz.prototype={
$1(a){return new A.fx(a)},
$S:73}
A.uA.prototype={
$1(a){return new A.h5(a)},
$S:82}
A.uB.prototype={
$1(a){return B.k},
$S:8}
A.uC.prototype={
$0(){return this.a.e0().b2()},
$S:3}
A.uD.prototype={
$0(){return this.a.e0().aW()},
$S:3}
A.uE.prototype={
$0(){return this.b.e0().fT(this.a.a)},
$S:3}
A.u1.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dI(p.b,a1)
a0.a.a.c===$&&A.t()
o=p.d
n=o instanceof A.iX
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.iv(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.im(B.a0,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.j([A.F(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 4:n=o instanceof A.j_
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nx(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.im(B.a1,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.j([A.F(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 11:k=o instanceof A.iY
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.ni(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.nj(i),$async$$0)
case 23:case 20:a0=A.j([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 18:k=o instanceof A.j0
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.ny(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bC(i,B.a1),$async$$0)
case 30:case 27:a0=A.j([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iU
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.nf(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.wv(b,c,!1),$async$$0)
case 37:case 34:q=A.j([b],t.s)
s=1
break
case 32:a0=o instanceof A.iV
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.ng(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.cS(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.P(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iT
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mC(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.il(B.C,b),$async$$0)
case 51:case 48:q=A.j([b],t.s)
s=1
break
case 46:e=o instanceof A.iZ
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.ns(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.il(B.E,b),$async$$0)
case 58:case 55:q=A.j([b],t.s)
s=1
break
case 53:e=o instanceof A.iW
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.kB(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dq(b),$async$$0)
case 65:case 62:q=A.j([b],t.s)
s=1
break
case 60:throw A.b(A.eF(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:50}
A.u2.prototype={
$1(a){return new A.fJ(a)},
$S:83}
A.u3.prototype={
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
return A.a(o.bd(m,n).pR(!0,k).cJ(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.bd(m,n).pN(k).cJ(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.bd(m,p.c).cJ()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:84}
A.u4.prototype={
$1(a){return new A.fV(a.a,a.d,a.e,a.b,a.c)},
$S:85}
A.u7.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dI(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.xh(m,l,o.c.b,n.a)
if(l.w==null)A.u(A.t3('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.y.d)A.u(A.t3(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.u(A.ac("Limit must be non-negative, got "+A.p(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cJ()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:86}
A.u8.prototype={
$1(a){var s,r,q=A.j([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.n8(r.a,r.b))}return new A.h_(q)},
$S:87}
A.tQ.prototype={
nM(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.aj()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aY)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nM(a)},
$S:4}
A.tO.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.G(0,this.c)
s.bQ(a,b)}},
$S:6}
A.tP.prototype={
$1(a){return new A.hb(this.a)},
$S:89}
A.u6.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.aj()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aY)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.u5.prototype={
$1(a){return a.a===this.a},
$S:90}
A.uc.prototype={
$1(a){var s=a==null?B.b9:A.j([a],t.d)
this.a.b.t(0,new A.jH(this.b,s))},
$S:91}
A.ud.prototype={
$1(a){this.b.aB().A()
this.a.f.G(0,this.c)},
$S:21}
A.ue.prototype={
$1(a){this.a.b.t(0,new A.jH(this.b,a))},
$S:92}
A.uf.prototype={
$1(a){this.b.aB().A()
this.a.f.G(0,this.c)},
$S:21}
A.tX.prototype={
$1(a){return this.a.r.mY()},
$S:26}
A.tY.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bT(A.e0(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:case 1:return A.bT(null,0,r)
case 2:return A.bT(o.at(-1),1,r)}})
var s=0,r=A.Gc($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Gs(r)},
$S:94}
A.tZ.prototype={
$1(a){var s=this,r=new Uint8Array(A.b9(a)),q=s.b
q.b=q.b+r.length
q.c=new A.aF(Date.now(),0,!1)
s.a.b.t(0,new A.fy(s.c,r,!1,null))
if(q.b>=1048576)s.d.aB().b2()},
$S:11}
A.u0.prototype={
$1(a){var s=this.a,r=this.b
s.x.G(0,r)
s.b.t(0,new A.fy(r,new Uint8Array(0),!0,J.Z(a)))},
$S:21}
A.u_.prototype={
$0(){var s=this.a,r=this.b
s.x.G(0,r)
s.b.t(0,new A.fy(r,new Uint8Array(0),!0,null))},
$S:0}
A.tT.prototype={
$1(a){var s,r,q,p,o,n,m,l=this.a,k=l.x
if(k.a===0){k=l.y
if(k!=null)k.A()
l.y=null
return}l=Date.now()
s=A.n(k).i("aI<1,2>")
s=A.P(new A.aI(k,s),s.i("o.E"))
r=s.length
q=t.H
p=0
for(;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.b
m=n.c
if(0-m.b+1000*(l-m.a)<=18e8)continue
k.G(0,o.a)
n=n.d
n===$&&A.t()
n.A().b5(new A.tR(),new A.tS(),q)}},
$S:26}
A.tR.prototype={
$1(a){},
$S:38}
A.tS.prototype={
$2(a,b){},
$S:6}
A.u9.prototype={
$0(){this.a.b.t(0,B.bF)},
$S:2}
A.ua.prototype={
$1(a){var s=this.a
s.ax=a
s.b.t(0,new A.nA(a))},
$S:96}
A.ub.prototype={
$1(a){var s,r=this.a,q=A.j([],t.oS)
for(s=J.E(a);s.k();)q.push(r.j7(s.gn()))
r.b.t(0,new A.ln(this.b,q))},
$S:97}
A.tW.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.A()
j.e=null
return}j=Date.now()
s=A.n(i).i("al<2>")
s=A.P(new A.al(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a0(m).i("bv<1>"),m=new A.bv(m,l),m=new A.an(m,m.gm(0),l.i("an<a_.E>")),l=l.i("a_.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aE(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aE(null)
i.G(0,n.a)
m=n.w
m===$&&A.t()
m.b5(new A.tU(),new A.tV(),p)}}},
$S:26}
A.tU.prototype={
$1(a){},
$S:38}
A.tV.prototype={
$2(a,b){},
$S:6}
A.lj.prototype={
a4(){return"ConflictAlgorithm."+this.b}}
A.im.prototype={
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
if(l!=null)l.unregister(m.d)}}}o.an(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
cn(a){var s,r=this.a,q=r.G(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(s!=null)s.q()}q=this.b.wy(a)
r.j(0,a,q)
return q},
kU(a,b){var s=this.cn(a).kV(new A.bN(b)),r=A.n(s).i("X<I.E,J<k,l?>>")
r=A.P(new A.X(s,new A.rD(),r),r.i("a_.E"))
return r},
op(a){return this.kU(a,B.n)},
fb(a,b){this.cn(a).ec(new A.bN(b))},
kg(a){return this.fb(a,B.n)},
aG(a,b){return this.vc(a,b)},
O(a){return this.aG(a,B.n)},
vc(a,b){var s=0,r=A.h(t.H),q=this
var $async$aG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.fb(a,b)
return A.e(null,r)}})
return A.f($async$aG,r)},
ah(a,b){return this.wM(a,b)},
b3(a){return this.ah(a,B.n)},
wM(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ah=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kU(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ah,r)},
bU(a,b,c,d,e,f,g){return this.wJ(a,b,c,d,e,f,g)},
aH(a,b,c,d){return this.bU(a,null,b,null,null,c,d)},
eq(a,b,c,d,e){return this.bU(a,b,c,null,null,d,e)},
nl(a,b,c,d){return this.bU(a,b,null,null,null,c,d)},
bD(a,b,c){var s=null
return this.bU(a,s,s,s,s,b,c)},
wH(a,b,c,d,e){return this.bU(a,null,b,null,c,d,e)},
wG(a,b,c,d,e){return this.bU(a,b,c,d,e,null,null)},
wI(a,b,c,d,e,f){return this.bU(a,b,c,null,d,e,f)},
wF(a,b,c,d){return this.bU(a,null,null,null,b,c,d)},
wJ(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bU=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.C(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.p(c)
if(d!=null)n+=" OFFSET "+A.p(d)
o=g==null?B.n:g
q=p.ah(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)},
cf(a,b,c,d){return this.vV(0,b,c,d)},
aD(a,b,c){return this.cf(0,b,c,null)},
vV(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cf=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.Q("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dH(new A.T(c,n),new A.rC(),n.i("o.E"),m).C(0,", ")
k=B.b.C(A.a7(c.a,"?",!1,m),", ")
j=A.Eo(d)
o=o.i("al<2>")
o=A.P(new A.al(c,o),o.i("o.E"))
p.fb("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ap(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cf,r)},
K(a,b,c,d){return this.xh(a,b,c,d)},
xh(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$K=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dH(new A.T(b,n),new A.rE(),n.i("o.E"),t.N).C(0,", ")
n="UPDATE"+A.Eo(null)+' "'+a+'" SET '+m
o=A.P(new A.al(b,o.i("al<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.F(o,d)}p.fb(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$K,r)},
U(a,b,c){return this.us(a,b,c)},
ur(a,b){return this.U(a,b,null)},
us(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$U=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
if(c!=null)B.b.F(n,c)}p.fb(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$U,r)},
uf(a,b,c){this.b.ug(B.bx,!0,!1,new A.rB(b),c)},
a2(a,b){return this.xd(a,b,b)},
xd(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:if(n.d)throw A.b(A.db("Database connection is wedged: an earlier rollback failed and left an open transaction. Reopen the database to recover."))
n.kg("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.kg("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.C(g)
try{n.kg("ROLLBACK")}catch(f){k=A.C(f)
h=J.Z(k).toLowerCase()
if(!(B.a.D(h,"no transaction is active")||B.a.D(h,"cannot rollback"))){n.d=!0
throw A.b(A.db("Rollback failed after a transaction error ("+A.p(k)+"); original error: "+A.p(l)+". The database connection is left in an open transaction; reopen to recover."))}}throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$ira:1}
A.rD.prototype={
$1(a){return A.bl(a,t.N,t.X)},
$S:98}
A.rC.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.rE.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.rB.prototype={
$1(a){var s=a.gm(0)===0?null:a.gH(a)
return this.a.$1(s)},
$S:100}
A.qr.prototype={}
A.il.prototype={
k0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.j([],t.s),c=A.aM(t.N),b=a.a
if(B.a.D(b,"'")||B.a.D(b,'"'))A.u(A.aC('Store name "'+b+"\" must not contain quote characters: a quote would break the FTS content reference and the database adapter's table quoting."))
if(B.a.S(b,"sqlite_")||B.a.S(b,"lp_"))A.u(A.aC('Store name "'+b+'" uses a reserved prefix (sqlite_ is SQLite-owned, lp_ is the engine metadata namespace).'))
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=$.DV()
if(!k.b.test(l))A.u(A.aC('Field "'+l+u.Z))
if(B.aE.D(0,l))throw A.b(A.aC('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.t(0,l))throw A.b(A.aC('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aC(e+l+'" cannot be unique.'))
if(B.b.ca(o,new A.rA(m)))throw A.b(A.aC(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.D(k,l)}else k=!1
if(k)throw A.b(A.aC(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.r)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.an(l,l.gm(0),k.i("an<I.E>")),k=k.i("I.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.D(0,j)&&!B.aE.D(0,j))throw A.b(A.aC('Index column "'+j+'" is not a declared field of store "'+b+'".'))}for(b=l,i=0;i<b;b=r,i=h)for(h=i+1,b=h,g=0;r=o.length,g<r;++g){if(i===g)continue
if(B.az.Z(o[i].a,o[g].a)){if(i<g){r=o[i].a
d.push("Duplicate index columns "+r.l(r)+" (declarations "+b+" and "+(g+1)+").")}}else if(A.Iv(o[g].a,o[i].a)&&!o[g].b){r=o[g].a
r=r.l(r)
l=o[i].a
d.push("Index "+r+" is prefix-subsumed by index "+l.l(l)+".")}}if(p){b=f.a
if(!b.d)throw A.b(A.t3(u.r))
if(q.b&&!A.F3(b.a,3,34))throw A.b(A.t3("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+b.a+")."))
for(b=q.a,r=b.$ti,b=new A.an(b,b.gm(0),r.i("an<I.E>")),r=r.i("I.E");b.k();){p=b.d
if(p==null)p=r.a(p)
if(!c.D(0,p))throw A.b(A.aC('FTS field "'+p+'" is not a declared field.'))}for(b=q.c.a.ga7(),b=b.gu(b);b.k();){r=b.gn()
A.Ew(r.a,r.b)}}for(b=s.length,n=0;n<b;++n){m=s[n]
r=m.b
if(r===B.I){q=m.f
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aC('Enum field "'+m.a+'" must declare values.'))
if(r===B.J){r=m.r
r=r==null||r.length===0}else r=!1
if(r)throw A.b(A.aC('Ref field "'+m.a+'" must declare its target store.'))}return new A.qr(f.pq(a),f.pp(a),f.po(a),d)},
pq(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.j(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.B(n,'"',i)+'"')+" "+o.gkZ()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.rz(),A.a0(k).i("X<1,k>")).C(0,", ")
m+=" CHECK ("+('"'+A.B(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.J&&o.w){n=o.r
n.toString
n=A.B(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.B("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.B(a.a,'"',i)
r=B.b.C(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
pp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.j([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=m.b
j=l.$ti.i("X<I.E,k>")
i=A.P(new A.X(l,A.pr(),j),j.i("a_.E"))
if(!k&&!l.D(l,"id"))i.push('"'+A.B("id",e,d)+'"')
h=m.c===B.b4?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.C(l,"_")
l=A.B(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}else{l=l.C(l,"_")
l=A.B(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.C(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.r)(r),++n){g=r[n]
if(g.b!==B.J)continue
if(B.b.ca(s,new A.ry(g)))continue
k=g.a
j=A.B(p+k,e,d)
f=A.B(q,e,d)
k=A.B(k,e,d)
b.push("CREATE INDEX "+('"'+j+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.B("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.r)(r),++n){g=r[n]
if(g.d){s=g.a
p=A.B(o+s,e,d)
l=A.B(q,e,d)
j=A.B(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+j+'"')+") WHERE "+('"'+A.B(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
po(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.u
s=a0.a
if(s.gm(0)===0)throw A.b(A.aC("FTS requires at least one field to index."))
r=A.j([],t.s)
q=a1.a
p=q+"_fts"
o=s.$ti.i("X<I.E,k>")
n=A.P(new A.X(s,A.pr(),o),o.i("a_.E"))
m=new A.rx(q,a0.c)
l=new A.X(s,new A.ru(m),o).C(0,f)
k=new A.X(s,new A.rv(m),o).C(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
r.push("CREATE VIRTUAL TABLE "+('"'+A.B(p,e,d)+'"')+" USING fts5(\n  "+B.b.C(n,f)+",\n  content = '"+q+"',\n  content_rowid = 'rowid'\n"+j)
s=A.B(q+"_ai",e,d)
o=A.B(q,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.B(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
s=A.B(q+"_ad",e,d)
o=A.B(q,e,d)
m=A.B(p,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.B(p,e,d)+'"')+", rowid, "+B.b.C(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.rw(),A.a0(n).i("X<1,k>")).C(0," OR ")
s=A.B(q+"_au",e,d)
o=A.B(q,e,d)
m=A.B(p,e,d)
h=A.B(p,e,d)
g=B.b.C(n,f)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.B(p,e,d)+'"')+"(rowid, "+B.b.C(n,f)+b+l+");\nEND;")
return r}}
A.rA.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:49}
A.rz.prototype={
$1(a){return"'"+A.B(a,"'","''")+"'"},
$S:7}
A.ry.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:49}
A.rx.prototype={
$2(a,b){return A.DL(this.a,this.b,a,b)},
$S:102}
A.ru.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.rv.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.rw.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dG.prototype={
l(a){return A.dq(this).l(0)+": "+this.a},
$iG:1}
A.hf.prototype={}
A.hd.prototype={}
A.fN.prototype={}
A.ie.prototype={}
A.je.prototype={}
A.ix.prototype={}
A.da.prototype={}
A.jn.prototype={}
A.jl.prototype={}
A.jq.prototype={}
A.fZ.prototype={}
A.jE.prototype={}
A.iy.prototype={}
A.jy.prototype={}
A.iS.prototype={}
A.ih.prototype={}
A.fr.prototype={}
A.jk.prototype={}
A.ir.prototype={}
A.bj.prototype={}
A.rI.prototype={
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
$S:47}
A.uV.prototype={
gmb(){return this.b},
gic(){var s=0,r=A.h(t.y),q,p=this
var $async$gic=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.gfi()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gic,r)},
lG(a,b){return b},
cO(a,b,c){return this.w1(a,b,c)},
w1(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$cO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.t()
n=J
s=3
return A.a(o.gbq().b.bD("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.lG(c,a)]),$async$cO)
case 3:o=n.bZ(e,A.N2(),t.A)
o=A.P(o,o.$ti.i("a_.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cO,r)},
dd(a,b,c,d,e,f,g,h){return this.u_(a,b,c,d,e,f,g,h)},
u_(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$dd=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gmb()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.gfi(),$async$dd)
case 5:j=!j
case 4:if(j)throw A.b(A.A("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.lG(h,e)
s=6
return A.a(l.cl(b,c,d),$async$dd)
case 6:n=j
s=7
return A.a(l.bk(n),$async$dd)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a2(new A.uW(p,h,g,o,n,m,A.hV(),f),t.A),$async$dd)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
fq(a,b,c,d,e){return this.wl(a,b,c,d,e)},
wl(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fq=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cO(a,c,e),$async$fq)
case 3:k=g
j=J.L(k)
if(j.gE(k))throw A.b(A.A("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.cK(k,new A.uY(d),new A.uZ(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(new A.jn("File is remote_only; call files.download(ref) to fetch its bytes, or enable prefetchFiles on the store and sync."))
n=p.gmb()
j=p.a
m=j.a
m===$&&A.t()
m=m.gbq()
j=j.cy.$0()
l=o.e
s=4
return A.a(m.b.aG("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,l]),$async$fq)
case 4:q=n.cQ(l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
fB(a,b,c,d,e,f){return this.wY(0,b,c,d,e,f)},
wY(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fB=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cO(b,d,f),$async$fB)
case 3:n=h
m=J.L(n)
if(m.gE(n)){s=1
break}o=e!=null?m.cK(n,new A.v_(e),new A.v0(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.v1(p,o,f,d,b),t.P),$async$fB)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
bi(a,b){return this.oe(a,b)},
oe(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bi=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e9(a8),$async$bi)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.cy.$0()-B.c.L(a7.a,1000)
s=6
return A.a(e.a2(new A.uX(a2,n),t.P),$async$bi)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fj(),$async$bi)
case 13:l=b0
s=J.dr(l)?14:15
break
case 14:k=0
j=A.aM(t.N)
d=t.s
case 16:c=e.a
c===$&&A.t()
s=18
return A.a(c.gbq().b.wG("lp_blobs",A.j(["hash"],d),250,k,"hash ASC"),$async$bi)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.W(h,"hash")
b.toString
J.aO(j,A.F(b))}if(J.ar(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.Cu(j,g)){s=19
break}p=22
b=new A.w($.D,c)
b.aE(null)
s=25
return A.a(b,$async$bi)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.df(g),$async$bi)
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
return A.a(b.gbq().b.wI("lp_blobs",A.j(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bi)
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
return A.a(a3.df(a1),$async$bi)
case 34:case 33:s=35
return A.a(d.U("lp_blobs","hash = ?",[a1]),$async$bi)
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
return A.f($async$bi,r)},
cH(a){return this.v7(a)},
v7(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.t()
d=A
s=3
return A.a(e.gbq().b.b3("SELECT SUM(size) as total FROM lp_blobs"),$async$cH)
case 3:o=d.f8(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.x,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbq().b.b3("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cH)
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
A.ap(i)
s=9
return A.a(g.df(h),$async$cH)
case 9:s=10
return A.a(e.gbq().b.K("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$cH)
case 10:s=11
return A.a(f.U("lp_blobs","hash = ?",[h]),$async$cH)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cH,r)}}
A.uW.prototype={
$1(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$$1=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:k=a.b
j=p.a.a.cy.$0()
i=t.s
h=p.b
g=p.c
f=p.d
e=p.e
s=3
return A.a(k.eq("lp_file_refs",A.j(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],i),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[h,g,f,e]),$async$$1)
case 3:d=a0
c=J.L(d)
if(c.gY(d)){q=A.Es(c.gH(d))
s=1
break}s=4
return A.a(A.i0(k,e,j,p.f),$async$$1)
case 4:s=5
return A.a(k.eq("lp_outbox",A.j(["op_id","base_updated"],i),1,"store = ? AND record_id = ?",[h,g]),$async$$1)
case 5:o=a0
i=J.L(o)
n=i.gY(o)&&J.W(i.gH(o),"base_updated")==null?A.a6(J.W(i.gH(o),"op_id")):null
i=p.r
c=t.N
m=t.X
s=6
return A.a(k.cf(0,"lp_file_refs",A.m(["ref_id",i,"store",h,"record_id",g,"field",f,"hash",e,"remote_name",null,"state","pending_upload"],c,m),B.R),$async$$1)
case 6:l=A.hV()
s=7
return A.a(k.aD(0,"lp_op_queue",A.m(["op_id",l,"store",h,"record_id",g,"kind","fileUpload","payload_json",B.h.a6(A.m(["ref_id",i,"field",f,"hash",e,"name",p.w],c,c),null),"state","pending","depends_on_op",n,"created_at",j],c,m)),$async$$1)
case 7:a.a_(new A.a2(h,A.as([g],c)))
q=new A.bj(i,h,g,f,e,null,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:104}
A.uY.prototype={
$1(a){return a.a===this.a},
$S:25}
A.uZ.prototype={
$0(){return A.u(A.A("FileRef "+this.a+" not found"))},
$S:18}
A.v_.prototype={
$1(a){return a.a===this.a},
$S:25}
A.v0.prototype={
$0(){return A.u(A.A("FileRef "+this.a+" not found"))},
$S:18}
A.v1.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.a.a.cy.$0()
n=q.b
m=n.r==="pending_upload"&&n.f==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.U("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aG(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.K("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.K("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aD(0,"lp_op_queue",A.m(["op_id",A.hV(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a6(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a2(q.c,A.as([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uX.prototype={
$1(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.fx,p=new A.bD(p,p.r,p.e,A.n(p).i("bD<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ah('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.B(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
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
return A.a(i.U("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aG(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.K("lp_op_queue",A.m(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.cE.prototype={}
A.rW.prototype={
gnv(){var s=this.r
return new A.al(s,A.n(s).i("al<2>")).vr(0,0,new A.rZ())},
mY(){var s,r=this.r,q=A.n(r).i("al<2>"),p=q.i("ci<o.E,k>"),o=A.P(new A.ci(new A.at(new A.al(r,q),new A.rX(this.f.$0()),q.i("at<o.E>")),new A.rY(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.r)(o),++s)r.G(0,o[s])
return p}}
A.rZ.prototype={
$2(a,b){return a+b.f},
$S:107}
A.rX.prototype={
$1(a){return!a.z.kr(this.a)},
$S:108}
A.rY.prototype={
$1(a){return a.a},
$S:109}
A.lS.prototype={}
A.pT.prototype={}
A.fi.prototype={
l(a){return"BlobMissingError: "+this.a},
$iG:1}
A.i7.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.p(this.a)},
$iG:1}
A.no.prototype={}
A.Cd.prototype={
$1(a){return B.b.F(this.a,a)},
$S:110}
A.iu.prototype={}
A.rJ.prototype={
bu(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bu=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.cd
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.dx
a3===$&&A.t()
b5=J
s=3
return A.a(a3.f8(25),$async$bu)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.bb?10:12
break
case 10:s=13
return A.a(n.cv(i,b2),$async$bu)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.nc(i.b),$async$bu)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.bc?17:18
break
case 17:s=19
return A.a(n.eQ(i),$async$bu)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.nc(i.b),$async$bu)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.C(b3)
j=!0
e=i.w+1
d=a5.mQ(e)
a8=i.b
a9=J.Z(f)
b0=a6.$0()
s=23
return A.a(a3.wb(a8,a9,e,b0+B.c.L(d.a,1000)),$async$bu)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.fx,a4=new A.bD(a3,a3.r,a3.e,A.n(a3).i("bD<1>")),a2=a2.x
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.u(A.A('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.bD("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bu)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.W(b,"ref_id")
a6.toString
a=A.F(a6)
a6=J.W(b,"record_id")
a6.toString
a0=A.F(a6)
a1=A.a6(J.W(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cG(a0,a,a1,c),$async$bu)
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
return A.f($async$bu,r)},
cv(a,b){return this.rq(a,b)},
rq(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cv=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aF(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.F(a1)
l=a0.h(0,"hash")
l.toString
A.F(l)
k=A.a6(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.br(l),$async$cv)
case 3:if(!a6)throw A.b(A.A("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bk(l),$async$cv)
case 4:j=a6
if(j==null)throw A.b(A.A("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.as
i===$&&A.t()
s=9
return A.a(i.c_(a3.d),$async$cv)
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
if(m!=null){f=B.a.B(l,0,B.c.bp(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.xm(a3.d,A.m([k,new A.h6(k,j,new A.rL(a4,l))],t.N,t.h3)),$async$cv)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga1(l):k
case 11:s=14
return A.a(n.a.a2(new A.rM(a,a1,a3),t.P),$async$cv)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cv,r)},
eQ(a){return this.rp(a)},
rp(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aF(a.f,null))
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
return A.a(p.b.xk(a.d,A.j([o],t.s)),$async$eQ)
case 5:case 4:s=6
return A.a(p.a.a2(new A.rK(l,n,a),t.P),$async$eQ)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eQ,r)},
cG(a,b,c,d){return this.uZ(a,b,c,d)},
uZ(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cG=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.as
l===$&&A.t()
k=m
s=4
return A.a(l.f7(c,a,null),$async$cG)
case 4:s=3
return A.a(k.iv(f),$async$cG)
case 3:o=f
s=5
return A.a(m.bk(o),$async$cG)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rN(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cG)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)},
dg(a,b,c,d){return this.v0(a,b,c,d)},
v0(a,b,c,d){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i
var $async$dg=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:k=p.a
j=k.fr
j===$&&A.t()
s=3
return A.a(j.cO(a,b,d),$async$dg)
case 3:o=f
n=J.L(o)
if(n.gE(o))throw A.b(A.jm("No file references for "+d+"/"+b+"/"+a+"."))
m=c!=null?n.cK(o,new A.rO(c),new A.rP(c,d,b,a)):n.cK(o,new A.rQ(),new A.rR(o))
i=J
s=4
return A.a(k.x.aH("lp_blobs",1,"hash = ?",[m.e]),$async$dg)
case 4:if(i.dr(f)&&m.r!=="remote_only"){q=m
s=1
break}l=m.f
if(l==null)throw A.b(A.ac("File "+m.a+" in "+d+"/"+b+"/"+a+" has no remote filename recorded and cannot be downloaded (state: "+m.r+"). Only remotely-known attachments are downloadable.",null))
s=5
return A.a(p.cG(b,m.a,l,d),$async$dg)
case 5:i=J
s=6
return A.a(j.cO(a,b,d),$async$dg)
case 6:q=i.HW(f,new A.rS(m),new A.rT(m))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dg,r)},
dm(a,b,c,d){return this.wi(a,b,c,d)},
wi(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dm=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.bD("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dm)
case 2:e=a5
d=A.uR(a2,A.a0(a2).c)
c=J.aD(e)
b=t.v
a=A.d1(new A.dW(c.cj(e,new A.rU(),t.x),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.fx,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.D(0,k)?6:7
break
case 6:j=A.hV()
i=n.h(0,a3)
if(i==null)A.u(A.A(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cf(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.c8),$async$dm)
case 8:case 7:case 4:a2.length===b||(0,A.r)(a2),++l
s=3
break
case 5:c=c.gu(e)
case 9:if(!c.k()){s=10
break}b=c.gn()
g=A.a6(b.h(0,"remote_name"))
if(g==null){s=9
break}if(d.D(0,g)){s=9
break}p=b.h(0,"state")
p.toString
A.F(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.U("lp_file_refs","ref_id = ?",[p]),$async$dm)
case 11:f=A.a6(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.S(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aG(u.y,[f]),$async$dm)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dm,r)}}
A.rL.prototype={
$0(){return this.a.cQ(this.b)},
$S:111}
A.rM.prototype={
$1(a){return this.nI(a)},
nI(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.K("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a2(p.c,A.as([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rK.prototype={
$1(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.U("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aG(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a_(new A.a2(p.c,A.as([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rN.prototype={
$1(a){return this.nJ(a)},
nJ(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.i0(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.K("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a_(new A.a2(q.f,A.as([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rO.prototype={
$1(a){return a.a===this.a},
$S:25}
A.rP.prototype={
$0(){var s=this
return A.u(A.jm("FileRef "+s.a+" not found for "+s.b+"/"+s.c+"/"+s.d+"."))},
$S:18}
A.rQ.prototype={
$1(a){return a.r==="remote_only"},
$S:25}
A.rR.prototype={
$0(){return J.bL(this.a)},
$S:47}
A.rS.prototype={
$1(a){return a.a===this.a.a},
$S:25}
A.rT.prototype={
$0(){return A.u(A.jm("FileRef "+this.a.a+" disappeared during download."))},
$S:18}
A.rU.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:112}
A.Cj.prototype={
$1(a){if(typeof a!="string")return a
return this.a.eo(a)},
$S:34}
A.uM.prototype={
gbq(){var s=this.c
return s===$?this.c=new A.ir(this.b):s}}
A.nm.prototype={}
A.wm.prototype={
bZ(a){var s,r=this.a
if(!r.I(a))return null
s=r.G(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.ph(s)
r.toString
t.G.a(r)}return r},
kW(a,b){var s,r=this.a
if(r.a>=256)r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(b==null)s=null
else{s=A.ph(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vW(a){var s,r,q,p=a.a
if(p===0){this.a.an(0)
return}s=this.a
if(p>=s.a){s.an(0)
return}for(p=A.hy(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.G(0,q==null?r.a(q):q)}}}
A.mk.prototype={
au(a){var s=this.fx.h(0,a)
if(s==null)throw A.b(A.A('No store "'+a+'" registered in this LocalPocket.'))
return s},
bA(a){var s,r,q=this
if(A.nO(q)!=null)A.u(A.A(u.L))
s=q.au(a)
r=q.a
r===$&&A.t()
return new A.fl(q,s,r.gbq(),null)},
aZ(a,b,c){var s
if(A.nO(this)!=null)A.u(A.A(u.L))
s=this.b
s===$&&A.t()
return s.aZ(a,b,c)},
a2(a,b){return this.aZ(a,B.p,b)},
q(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$q=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.fy){s=1
break}n.fy=!0
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
A.oF.prototype={}
A.v4.prototype={
nw(a,b){var s=this.a;++s.f.e
return s.b.aG(a,B.n)},
e7(a){return this.tW(a)},
tV(){return this.e7(null)},
tW(a){var s=0,r=A.h(t.H),q=this,p
var $async$e7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e7)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.B(a,'"','""')+'"')),$async$e7)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e7,r)},
fJ(){var s=0,r=A.h(t.H),q=this,p
var $async$fJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fJ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fJ,r)},
iH(){var s=0,r=A.h(t.H),q=this,p
var $async$iH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=p.d.c?2:3
break
case 2:s=4
return A.a(p.b.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iH)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iH,r)},
iG(){var s=0,r=A.h(t.H),q=this
var $async$iG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.b.O("VACUUM"),$async$iG)
case 2:return A.e(null,r)}})
return A.f($async$iG,r)},
fu(){return this.wz()},
wz(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fu=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a.a.a2(new A.v7(o),t.P),$async$fu)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
cU(a){return this.x9(a)},
x9(a){var s=0,r=A.h(t.H),q=this,p
var $async$cU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a.fx,p=new A.bD(p,p.r,p.e,A.n(p).i("bD<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.eb(p.d,a),$async$cU)
case 4:s=2
break
case 3:s=5
return A.a(q.fu(),$async$cU)
case 5:s=6
return A.a(q.fN(B.cc),$async$cU)
case 6:s=7
return A.a(q.fJ(),$async$cU)
case 7:s=8
return A.a(q.tV(),$async$cU)
case 8:return A.e(null,r)}})
return A.f($async$cU,r)},
fN(a){return this.of(a)},
of(a){var s=0,r=A.h(t.H),q=this
var $async$fN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a.a2(new A.v6(q,a),t.P),$async$fN)
case 2:return A.e(null,r)}})
return A.f($async$fN,r)},
eb(a,b){return this.u9(a,b)},
u9(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.a
h=i.x.$0()
g=h-B.c.L(b.a,1000)
j.a=0
o=i.a
n=o.au(a).a
m=t.P,i=i.b
case 3:s=5
return A.a(i.ah("SELECT b.id FROM "+('"'+A.B(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",g,250]),$async$eb)
case 5:l=d
if(J.bz(l)){s=4
break}if(A.nO(o)!=null)A.u(A.A(u.L))
k=o.b
k===$&&A.t()
s=6
return A.a(k.aZ(new A.v5(j,p,l,a,g,n),B.p,m),$async$eb)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eb,r)}}
A.v7.prototype={
$1(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b3("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.E(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.F(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.U("lp_outbox","store = ? AND record_id = ?",[m,A.F(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.v6.prototype={
$1(a){return this.nS(a)},
nS(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
s=2
return A.a(p.ur("lp_op_queue","state = 'done'"),$async$$1)
case 2:s=3
return A.a(p.U("lp_dead_letter","at < ?",[q.a.a.x.$0()-B.c.L(q.b.a,1000)]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.v5.prototype={
$1(a){return this.nR(a)},
nR(a1){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a=a1.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=t.X,k=a1.c,j=a1.a.Q,i=q.e,h=q.f,g=q.b.a,f=g.Q,g=g.as
case 2:if(!p.k()){s=3
break}e=p.gn().h(0,"id")
e.toString
A.F(e)
a0=J
s=4
return A.a(a.ah("SELECT b.id FROM "+('"'+A.B(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,e,"clean",i]),$async$$1)
case 4:if(a0.bz(a3)){s=2
break}s=5
return A.a(a.ah("SELECT * FROM "+('"'+A.B(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[e]),$async$$1)
case 5:d=a3
c=J.L(d)
b=c.gY(d)?A.bX(h,c.gH(d),f,g):null
s=6
return A.a(A.cx(a,n,e,!1),$async$$1)
case 6:s=7
return A.a(a.U("lp_outbox","store = ? AND record_id = ?",[n,e]),$async$$1)
case 7:s=8
return A.a(a.U(n,"id = ?",[e]),$async$$1)
case 8:s=9
return A.a(a.K("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.as([e],m)
k.push(new A.a2(n,c))
j.r+=c.a
if(b!=null)a1.kd(B.au,e,null,b,B.H,n);++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vq.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:72}
A.vr.prototype={
$2(a,b){return B.c.a0(a.a,b.a)},
$S:114}
A.vm.prototype={
$1(a){return a.h(0,"name")},
$S:31}
A.vp.prototype={
$1(a){return this.nU(a)},
nU(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.CW,j=j.cx,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.bX(k,p,i,j)
n=o
A.Jb(k,n)
g=J.W(o,"id")
g.toString
A.F(g)
m=A.dn(k,J.x(J.W(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aD(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:44}
A.vn.prototype={
$1(a){return A.DL(this.a.a,this.b.c,"",a)},
$S:7}
A.vw.prototype={}
A.mL.prototype={
wL(a){if(a>this.w)this.w=a},
nn(){return this.f++}}
A.uN.prototype={
uk(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aF(B.o.f4(B.as.v(a)),null))
i=J.W(s,"store")
h=J.W(s,"schemaVer")
g=J.W(s,"shape")
f=J.W(s,"ir")
q=t.lH
p=q.a(J.W(s,"sort"))
if(p==null)p=B.ak
e=A.bE(p,!0,t.N)
r=b?J.W(s,"pv"):J.W(s,"values")
q=q.a(r)
if(q==null)q=B.ak
d=A.bE(q,!0,t.X)}catch(o){q=A.D6(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.c4.Z(e,n)||J.ar(d)!==n.length)throw A.b(A.D6("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bx(l)&&!A.av(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.D6(j))}return d}}
A.AT.prototype={
Z(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.wZ.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.p(s.e)+", backward: "+s.z+")"}}
A.d4.prototype={}
A.aj.prototype={}
A.c3.prototype={}
A.dt.prototype={}
A.cY.prototype={}
A.b_.prototype={}
A.cj.prototype={}
A.mU.prototype={
cz(a,b){var s=this.ge_()
s.Q.nn()
return this.c.ah(a,b)},
c3(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bE(i.d,!0,h)
h=A.bE(i.e,!0,h)
s=a0==null?A.bE(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bE(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bE(i.f,!0,t.jS)
return new A.mU(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
h2(){var s=null
return this.c3(s,s,s,s,s,s,s,s,s)},
ls(a){var s=null
return this.c3(s,s,s,s,s,s,s,a,s)},
pO(a){var s=null
return this.c3(s,s,s,a,s,s,s,s,s)},
pP(a){var s=null
return this.c3(s,s,s,s,a,s,s,s,s)},
pM(a){var s=null
return this.c3(a,s,s,s,s,s,s,s,s)},
pQ(a){var s=null
return this.c3(s,s,s,s,s,a,s,s,s)},
pS(a,b,c){var s=null
return this.c3(s,s,s,s,s,s,a,b,c)},
pR(a,b){var s=null
return this.c3(s,a,b,s,s,s,s,s,s)},
pN(a){var s=null
return this.c3(s,s,a,s,s,s,s,s,s)},
d1(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aC('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.ac('Unknown field "'+a+'" for query.',a))},
bh(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.d1(a0)
s='"'+A.B(a0,'"','""')+'"'
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
if(k)r.push(new A.b_(s+" IN ("+B.b.C(A.a7(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b_(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b_(s+b,[A.kC(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b_(s+b,["%"+A.kC(a3)]))
g=a2!=null
if(g)r.push(new A.b_(s+b,["%"+A.kC(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b_(s+" IS NULL",B.n))
e=a8===!0
if(e)r.push(new A.b_(s+" IS NOT NULL",B.n))
d=this.h2()
B.b.F(d.d,r)
c=A.j([],t.k)
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
B.b.F(d.f,c)
return d},
nA(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
xt(a,b,c){var s=null
return this.bh(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xA(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xu(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xv(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xy(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xz(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xw(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
xp(a,b,c){var s=null
return this.bh(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xB(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
xs(a,b,c){var s=null
return this.bh(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
xq(a,b,c){var s=null
return this.bh(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xx(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
wr(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.j([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.j([],j)
q.a8(0,new A.wW(this,p,h))
if(p.length===0)continue
i.push("("+B.b.C(p," AND ")+")")}if(i.length===0)return this
o=this.h2()
o.e.push(new A.b_("("+B.b.C(i," OR ")+")",h))
j=t.k
s=A.j([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.r)(a),++r){q=a[r]
if(q.gY(0)){m=A.j([],j)
for(l=q.ga7().gu(0);l.k();){k=l.gn()
m.push(new A.aj(k.a,"eq",[k.b]))}s.push(new A.dt(m))}}o.f.push(new A.cY(s))
return o},
jS(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.aj
r=s?a.a:l
if(s){this.d1(r)
break A}s=a instanceof A.c3
q=s?a.a:l
if(s){this.jS(q)
break A}p=a instanceof A.dt
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cY
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.r)(n),++m)this.jS(n[m])
break A}},
gc4(){var s,r=A.P(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga1(r).a!=="id"
else s=!1
if(s)r.push(B.d7)
return r},
glp(){var s,r,q,p,o
if(this.at){s=A.j([],t.fi)
for(r=this.gc4(),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
s.push(new A.cj(o.a,!o.b))}}else s=this.gc4()
return s},
gte(){var s,r,q,p,o,n=A.j([],t.s)
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jI(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.EL('Query on "'+this.gaQ()+'" requires .limit(n) or .all().'))
return s},
gaQ(){return this.b.a},
ge_(){return this.a},
eG(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.j([],e),c=[],b=A.j([],e)
e=f.z
if(!e)b.push("archived = 0")
s=f.Q
if(!s)b.push("hidden = 0")
if(b.length!==0)d.push(B.b.C(b," AND "))
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.F(c,o.b)}for(r=f.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.F(c,o.b)}r=f.as
if(r!=null){n=f.glw().uk(r,f.at)
m=f.lR(f.glp(),n)
d.push(m.a)
B.b.F(c,m.b)}l=d.length===0?"":" WHERE "+B.b.C(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.B(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.B(a,'"','""')+'"')+") AS v"}else r=f.gt1()
k=r}j=f.glp()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.wR(),A.a0(j).i("X<1,k>")).C(0,", ")
h=A.Jw(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.C(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.p(a0)+"|af:"+A.p(a)+"|df:null",new A.wS(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jI():a3
g=e}return new A.a5(h+(g==null?"":" LIMIT "+A.p(g)),c)},
j5(a){return this.eG(null,null,!1,!1,a)},
pD(a,b){return this.eG(a,b,!1,!1,null)},
pB(){return this.eG(null,null,!1,!1,null)},
pE(a,b,c){return this.eG(a,null,b,c,null)},
pC(a){return this.eG(null,null,!1,a,null)},
gt1(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.ld())return"*"
o=A.P(o,t.N)
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(!B.b.D(o,p))o.push(p)}return new A.X(o,A.pr(),A.a0(o).i("X<1,k>")).C(0,", ")},
glw(){var s=this.b
return new A.uN(s.a,s.b,this.gte(),this.gtb())},
gtb(){var s,r,q,p,o,n=this,m=A.j([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.j([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.j([o.a,o.b],q))}return B.h.a6(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cI(a,new A.wT(a)),c=B.b.cI(b,new A.wU())
if(a.length>=2&&d&&!B.b.gH(a).b&&c){s=A.j([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
s.push('"'+A.B(p.a,'"','""')+'"')}o=B.b.C(s,", ")
n=B.b.gH(a).b?"<":">"
return new A.a5("("+o+") "+n+" ("+B.b.C(A.a7(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.j([],s)
l=[]
for(k=0;k<a.length;++k){j=A.j([],s)
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
i.push(e)}++g}if(h){m.push("("+B.b.C(j," AND ")+")")
B.b.F(l,i)}}if(m.length===0)return B.dn
return new A.a5("("+B.b.C(m," OR ")+")",l)},
lS(a,b){var s,r,q,p,o=this.glw(),n=[]
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gc4(),p=r.length,q=0;q<r.length;r.length===p||(0,A.r)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a6(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bA.gfa().v(o)},
ed(a){return this.vi(a)},
cJ(){return this.ed(null)},
vi(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ed=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.jI():a1
if(a0===0){q=B.d8
s=1
break}o=a0==null
n=p.j5(o?null:a0+1)
s=3
return A.a(p.cz(n.a,n.b),$async$ed)
case 3:m=a3
l=o?m:J.Cw(m,a0).cW(0)
k=!o&&J.ar(m)>a0
o=p.y
j=o!=null
i=j&&p.ld()
h=p.b
if(i){i=A.P(o,t.N)
B.b.F(i,p.rr())
g=A.MW(h,l,p.ge_().CW,i,p.ge_().cx)}else g=A.MV(h,l,p.ge_().CW,p.ge_().cx)
i=p.at
if(i&&g.length!==0){h=A.a0(g).i("bv<1>")
f=A.P(new A.bv(g,h),h.i("a_.E"))
B.b.an(g)
B.b.F(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hk(g),$async$ed)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.Nw(g,o):g
if(g.length!==0){b=e?p.lS(B.b.ga1(g),B.b.gH(g)):null
a=d?p.lS(B.b.ga1(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.cl(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ed,r)},
hk(a){return this.rl(a)},
rl(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga1(a)
e=p.gc4()
n=[]
for(m=p.gc4(),l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k)n.push(o.h(0,m[k].a))
j=p.lR(e,n)
e=t.s
i=A.j([],e)
h=[]
g=A.j([],e)
if(!p.z)g.push("archived = 0")
if(!p.Q)g.push("hidden = 0")
if(g.length!==0)i.push(B.b.C(g," AND "))
for(e=p.d,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.F(h,f.b)}for(e=p.e,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.F(h,f.b)}i.push(j.a)
B.b.F(h,j.b)
d=J
s=3
return A.a(p.cz("SELECT 1 FROM "+('"'+A.B(p.b.a,'"','""')+'"')+" WHERE "+B.b.C(i," AND ")+" LIMIT 1",h),$async$hk)
case 3:q=d.dr(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
ld(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.ee(o)==null)return!1}return!0},
rr(){var s,r,q,p,o=A.j([],t.s)
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hL(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pC(!0)
m=A
s=3
return A.a(p.cz(o.a,o.b),$async$hL)
case 3:n=m.f8(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)},
hN(a){return this.uc(a)},
uc(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.d1(a)
o=p.pE(a,!0,!0)
m=A
s=3
return A.a(p.cz(o.a,o.b),$async$hN)
case 3:n=m.f8(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
hV(a){return this.uY(a)},
uY(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$hV=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:p.d1(a)
o=A.j([a],t.s)
n=A.j([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pS(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.j5(h)
s=3
return A.a(i.cz(B.a.kF(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hV)
case 3:f=a0
o=p.b
e=o.ee(a)
n=[]
for(m=J.E(f),l=e==null,o=o.a,d=a==="archived";m.k();){c=m.gn().h(0,a)
if(l){if(d)c=J.x(c,1)}else c=A.Dw(e,c,null,null,"",o)
n.push(c)}q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
qN(a){var s,r,q=this.b.ee(a)
if(q==null)return!1
s=q.b
A:{r=B.T===s||B.U===s||B.B===s||B.V===s
break A}return r},
d0(a,b){return this.pc(a,b)},
pc(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$d0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.d1(b)
if(!p.qN(b))throw A.b(A.ac('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pD(b,a)
s=3
return A.a(p.cz(o.a,o.b),$async$d0)
case 3:n=d
m=J.L(n)
q=A.G_(m.gE(n)?null:J.W(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d0,r)},
ib(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$ib=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.ls(A.j(["id"],m))
k=l.pB()
s=3
return A.a(l.cz(k.a,k.b),$async$ib)
case 3:j=b
m=A.j([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.F(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)},
hW(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.j5(p.jI())
n=J
s=3
return A.a(p.cz("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hW)
case 3:q=n.bZ(b,new A.wV(),t.X).C(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)}}
A.wW.prototype={
$2(a,b){this.a.d1(a)
this.b.push('"'+A.B(a,'"','""')+'" = ?')
this.c.push(b)},
$S:116}
A.wR.prototype={
$1(a){var s=A.B(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:117}
A.wS.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.B(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:118}
A.wT.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:119}
A.wU.prototype={
$1(a){return a!=null},
$S:16}
A.wV.prototype={
$1(a){return a.h(0,"detail")},
$S:31}
A.cM.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.p(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cM&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gJ(a){return A.c4(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.xh.prototype={
t0(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.EL('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cJ(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cJ=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.cm(a3).length===0){q=B.cQ
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.eo(a3)
A.JH(d)
if(e.b)A.JG(d)
c=f.a
b=c+"_fts"
a=A.j(['"'+A.B(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.C(a," AND ")
a0=n.t0()
a1=a0==null?"":" LIMIT "+A.p(a0)
f=A.B(b,'"','""')
e=A.B(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.B(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.Q.nn()
s=7
return A.a(n.c.ah(m,l),$async$cJ)
case 7:j=a6
i=A.j([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.W(h,"id")
f.toString
A.F(f)
e=J.W(h,"score")
e.toString
J.aO(i,new A.cM(f,A.FZ(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.C(a4)
if(i instanceof A.c6){g=i
throw A.b(A.ac("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cJ,r)}}
A.cl.prototype={}
A.x8.prototype={}
A.c2.prototype={
a4(){return"FieldKind."+this.b}}
A.aX.prototype={
gkZ(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.ax===s||B.I===s||B.W===s||B.X===s||B.J===s){r="TEXT"
break A}if(B.T===s||B.B===s||B.V===s){r="INTEGER"
break A}if(B.U===s){r="REAL"
break A}throw A.b(A.eF(u.P))}return r},
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
A.rH.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fv(B.cK,A.F(m))
m=n.h(0,"name")
m.toString
A.F(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aX(m,B.ax,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aX(m,B.T,r,!1,q,o,o,!1)
case 2:return new A.aX(m,B.U,r,!1,q,o,o,!1)
case 3:return new A.aX(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aX(m,B.V,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aX(m,B.I,r,!1,!1,A.fF(J.pA(t.j.a(n),p),p),o,!1)
case 6:return new A.aX(m,B.W,!1,!1,q,o,o,!1)
case 7:return new A.aX(m,B.X,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aX(m,B.J,!1,!1,!1,o,A.F(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:120}
A.iD.prototype={
a4(){return"IndexScope."+this.b}}
A.dA.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.tA.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.pA(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dA(q,s,A.fv(B.cF,A.F(r)))},
$S:121}
A.fC.prototype={
p(){var s,r=t.N,q=t.X,p=A.v(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gY(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fC&&r.b===b.b&&B.az.Z(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gJ(a){return A.c4(A.vB(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.t2.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.pA(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fC(p,r,t.f.b(q)?A.IH(q.cb(0,s,t.X)):B.cl)},
$S:122}
A.eq.prototype={
eo(a){var s,r,q,p
for(s=this.a.ga7(),s=s.gu(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.D(r,p))continue
q=q.b
r=A.B(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.eq&&A.IG(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gM(),n=A.P(o,A.n(o).i("o.E"))
B.b.aI(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
o.push(A.c4(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.vB(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.t1.prototype={
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
A.Ew(p,q)
r.j(0,p,q)}return new A.eq(A.Io(r,s,s))},
$S:123}
A.c7.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.xx.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ap(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.j([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.ak:p)
q=t.G
while(p.k())r.push(A.Er(q.a(p.gn())))
return new A.c7(o,s,r)},
$S:124}
A.vs.prototype={
a4(){return"MissingRemotePolicy."+this.b}}
A.qC.prototype={}
A.cA.prototype={
gde(){var s,r,q,p,o=this,n=$.Hf()
A.CE(o)
s=n.a.get(o)
if(s==null){s=A.aM(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
ee(a){var s,r,q,p,o,n=this,m=$.Hg()
A.CE(n)
s=m.a.get(n)
if(s==null){s=A.v(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.W(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.v(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.j([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o)r.push(q[o].p())
j.j(0,"fields",r)
r=A.j([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.Q
if(l!=null)j.j(0,"attachmentField",l)
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.j([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.r)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.qb.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.F(h)
s=i.h(0,"version")
s.toString
A.ap(s)
r=A.j([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.Er(o.a(q.gn())))
q=A.j([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.IR(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.F(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.II(o.a(l))}else l=null
k=A.j([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.ak:i)
while(i.k())k.push(A.JQ(o.a(i.gn())))
return new A.cA(h,s,r,q,n,p,l,k,m,this.b.i("cA<0>"))},
$S(){return this.b.i("cA<0>()")}}
A.n7.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.xb.prototype={
$1(a){return!1},
$S:72}
A.xc.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.xd.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.eB)},
$S:45}
A.xe.prototype={
$1(a){return J.Z(a)},
$S:126}
A.xf.prototype={
aR(a){return this.wW(a)},
wW(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$aR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.a
h=i.a
g=h.fx
f=a.a
if(g.I(f))throw A.b(A.aC('Duplicate store name "'+f+'" in this open call.'))
p=A.D3(a)
o=i.d
if(o.e===B.aC&&p.b.length!==0)throw A.b(new A.jE('Store "'+f+'" declares executable features that cannot run on the worker runtime: '+B.b.C(p.b,", ")+"."))
s=2
return A.a(q.fY(a,p),$async$aR)
case 2:n=new A.il(o).k0(a)
o=a.w
if(o!=null)A.Nx(i.b,f,o.c)
o=i.b
s=3
return A.a(o.aH("lp_stores",1,"store = ?",[f]),$async$aR)
case 3:m=c
l=J.L(m)
s=l.gE(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$aR)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$aR)
case 11:case 9:l.length===k||(0,A.r)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aR)
case 15:case 13:l.length===k||(0,A.r)(l),++j
s=12
break
case 14:l=a.b
i=i.x
s=16
return A.a(o.aD(0,"lp_stores",A.m(["store",f,"table_name",f,"schema_ver",l,"definition_json",B.h.a6(a.p(),null),"created_at",i.$0()],t.N,t.X)),$async$aR)
case 16:s=17
return A.a(A.fI(o,0,0,"create:"+f,i,l),$async$aR)
case 17:s=5
break
case 6:i=J.W(l.gH(m),"schema_ver")
i.toString
A.ap(i)
l=a.b
if(i>l)throw A.b(A.F0('Store "'+f+'" on disk is schema v'+i+", but this package supports v"+l+"."))
s=i<l?18:19
break
case 18:s=20
return A.a(A.fH(h,a,i),$async$aR)
case 20:case 19:s=21
return A.a(q.bN(a),$async$aR)
case 21:s=22
return A.a(o.K("lp_stores",A.m(["definition_json",B.h.a6(a.p(),null),"schema_ver",l],t.N,t.X),"store = ?",[f]),$async$aR)
case 22:case 5:g.j(0,f,new A.nm(a,p,new A.wm(A.v(t.N,t.b))))
s=23
return A.a(q.dT(f,p),$async$aR)
case 23:return A.e(null,r)}})
return A.f($async$aR,r)},
fY(a,b){return this.pe(a,b)},
pe(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.a.b.aH("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fY)
case 3:j=d
if(J.bz(j)){s=1
break}o=null
try{n=J.W(J.bL(j),"v")
o=A.JF(typeof n=="string"?B.h.aF(n,null):n)}catch(i){if(A.C(i) instanceof A.dG){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.aq(B.l.v(B.e.v(A.ai(o.p()))).a)!==A.aq(B.l.v(B.e.v(A.ai(b.p()))).a))throw A.b(A.aC('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fY,r)},
dT(a,b){return this.ri(a,b)},
ri(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ai(b.p())
n=q.a.b
m=t.N
l=t.X
k=J
s=5
return A.a(n.aH("lp_meta",1,"k = ?",[p]),$async$dT)
case 5:s=k.bz(d)?2:4
break
case 2:s=6
return A.a(n.aD(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dT)
case 6:s=3
break
case 4:s=7
return A.a(n.K("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dT)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dT,r)},
hJ(a){return this.u0(a)},
u0(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a.b.e
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hJ)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
bN(a){return this.rI(a)},
rI(a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bN=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a0=p.a
a1=a0.b
a2=a4.a
s=3
return A.a(a1.eq("lp_stores",A.j(["definition_json"],t.s),1,"store = ?",[a2]),$async$bN)
case 3:a3=a7
if(J.bz(a3)){s=1
break}o=null
try{n=J.W(J.bL(a3),"definition_json")
m=typeof n=="string"?B.h.aF(n,null):n
l=m
l.toString
k=t.X
o=A.qa(A.bl(t.f.a(l),t.N,k),k)}catch(a5){if(A.C(a5) instanceof A.da){s=1
break}else throw a5}i=o.w
h=a4.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.az.Z(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jz()
$.kJ()
f.az()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a1.O("DROP TRIGGER IF EXISTS "+('"'+A.B(a2+d,'"','""')+'"')),$async$bN)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a1.O("DROP TABLE IF EXISTS "+('"'+A.B(a2+"_fts",'"','""')+'"')),$async$bN)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.il(a0.d).k0(a4).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a1.O(l[e]),$async$bN)
case 16:case 14:l.length===k||(0,A.r)(l),++e
s=13
break
case 15:l=a2+"_fts"
k=A.B(l,'"','""')
s=17
return A.a(a1.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.B(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bN)
case 17:k=h.a
c=k.$ti.i("X<I.E,k>")
b=new A.X(k,A.pr(),c).C(0,", ")
a=new A.X(k,new A.xg(a4,h),c).C(0,", ")
l=A.B(l,'"','""')
s=18
return A.a(a1.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.B(a2,'"','""')+'"')),$async$bN)
case 18:case 12:if(f.b==null)f.b=$.mQ.$0()
l=a4.b
s=19
return A.a(A.fI(a1,f.gmT(),l,"fts:"+a2,a0.x,l),$async$bN)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
hS(a){return this.uu(a)},
uu(a){var s=0,r=A.h(t.H),q=this,p
var $async$hS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.b.f
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hS)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hS,r)}}
A.xg.prototype={
$1(a){return A.DL(this.a.a,this.b.c,"",a)},
$S:7}
A.dK.prototype={
a4(){return"MutationAction."+this.b}}
A.fl.prototype={
gaQ(){return this.b.a.a},
eI(){var s=this.d
if(s!=null&&s.e){s=this.gaQ()
throw A.b(new A.jk('Cannot mutate "'+s+'" through a read-only Tx.'))}},
iv(a){var s=this
if(s.d!=null)return s.im(B.a0,a)
return s.a.aZ(new A.qn(s,a),B.p,t.H)},
nx(a){var s=this
if(s.d!=null)return s.im(B.a1,a)
return s.a.aZ(new A.qq(s,a),B.p,t.H)},
ni(a){var s=this
if(s.d!=null)return s.nj(a)
return s.a.aZ(new A.qm(s,a),B.p,t.H)},
ny(a){var s=this
if(s.d!=null)return s.bC(a,B.a1)
return s.a.aZ(new A.qp(s,a),B.p,t.H)},
nf(a,b){var s=this
if(s.d!=null)return s.wu(a,b)
return s.a.aZ(new A.qj(s,a,b),B.p,t.H)},
ng(a){var s=this
if(s.d!=null)return s.cS(a)
return s.a.aZ(new A.qi(s,a),B.p,t.H)},
cS(a){return this.wt(a)},
wt(a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cS=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:p.eI()
if(a7.a===0){s=1
break}o=p.c.b
n=A.n(a7)
m=n.i("T<1>")
l=A.P(new A.T(a7,m),m.i("o.E"))
m=t.N
k=A.v(m,t.G)
j=p.b.a,i=p.a,h=i.CW,i=i.cx,g=j.a,f='SELECT * FROM "'+g+'" WHERE id IN (',e=0
case 3:if(!(d=l.length,e<d)){s=5
break}c=e+2000
b=B.b.T(l,e,B.c.bp(c,0,d))
a6=J
s=6
return A.a(o.ah(f+B.b.C(A.a7(b.length,"?",!1,m),", ")+")",b),$async$cS)
case 6:d=a6.E(a9)
case 7:if(!d.k()){s=8
break}a=d.gn()
a0=a.h(0,"id")
a0.toString
k.j(0,A.F(a0),A.bX(j,a,h,i))
s=7
break
case 8:case 4:e=c
s=3
break
case 5:a1=A.v(m,t.o)
a2=A.v(m,t.dZ)
j=k.$ti.i("T<1>")
a3=A.P(new A.T(k,j),j.i("o.E"))
j=t.s,e=0
case 9:if(!(i=a3.length,e<i)){s=11
break}c=e+2000
b=B.b.T(a3,e,B.c.bp(c,0,i))
a4=B.b.C(A.a7(b.length,"?",!1,m),", ")
i=A.j([g],j)
B.b.F(i,b)
h="store = ? AND record_id IN ("+a4+")"
a6=J
s=12
return A.a(o.bD("lp_sync_row",h,i),$async$cS)
case 12:f=a6.E(a9)
case 13:if(!f.k()){s=14
break}d=f.gn()
a=d.h(0,"record_id")
a.toString
a1.j(0,A.F(a),A.h9(d))
s=13
break
case 14:a6=J
s=15
return A.a(o.bD("lp_outbox",h,i),$async$cS)
case 15:i=a6.E(a9)
case 16:if(!i.k()){s=17
break}h=i.gn()
f=h.h(0,"record_id")
f.toString
a2.j(0,A.F(f),A.ja(h))
s=16
break
case 17:case 10:e=c
s=9
break
case 11:j=new A.aI(a7,n.i("aI<1,2>")).gu(0)
case 18:if(!j.k()){s=19
break}a5=j.d
i=a5.a
h=a5.b
f=k.h(0,i)
d=a1.h(0,i)
s=20
return A.a(p.cT(i,h,!0,f,a2.h(0,i),d),$async$cS)
case 20:s=18
break
case 19:j=p.d
j.toString
m=A.aM(m)
for(n=new A.bD(a7,a7.r,a7.e,n.i("bD<1>"));n.k();)m.t(0,n.d)
j.a_(new A.a2(g,m))
case 1:return A.e(q,r)}})
return A.f($async$cS,r)},
mC(a){var s=this
if(s.d!=null)return s.il(B.C,a)
return s.a.aZ(new A.qf(s,a),B.p,t.H)},
ns(a){var s=this
if(s.d!=null)return s.il(B.E,a)
return s.a.aZ(new A.qo(s,a),B.p,t.H)},
kB(a){var s=this
if(s.d!=null)return s.dq(a)
return s.a.aZ(new A.qk(s,a),B.p,t.H)},
dq(a){return this.wB(a)},
wB(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eI()
s=2
return A.a(q.dZ(a),$async$dq)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cx(n,m,a,!0),$async$dq)
case 3:s=4
return A.a(n.U(m,"id = ?",[a]),$async$dq)
case 4:l=t.N
o.a_(new A.a2(m,A.as([a],l)))
if(p!=null){l=A.d1(p.gM(),l)
l.G(0,"id")
o.bB(B.au,l,a,null,p,B.H,m)}return A.e(null,r)}})
return A.f($async$dq,r)},
cT(a,b,c,d,e,f){return this.ww(a,b,c,d,e,f)},
wv(a,b,c){return this.cT(a,b,c,null,null,null)},
wu(a,b){return this.cT(a,b,!1,null,null,null)},
ww(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cT=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p.eI()
s=f!=null||e!=null?3:5
break
case 3:o=e
n=f
s=4
break
case 5:s=6
return A.a(p.c.b.ah("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cT)
case 6:m=h
l=J.L(m)
if(l.gY(m)){k=l.gH(m)
n=A.h9(k)
o=k.h(0,"o_kind")!=null?A.ja(A.m(["store",k.h(0,"o_store"),"record_id",k.h(0,"o_record_id"),"kind",k.h(0,"o_kind"),"payload_json",k.h(0,"o_payload_json"),"base_updated",k.h(0,"o_base_updated"),"base_hash",k.h(0,"o_base_hash"),"dirty_fields",k.h(0,"o_dirty_fields"),"op_id",k.h(0,"o_op_id"),"created_at",k.h(0,"o_created_at"),"updated_at",k.h(0,"o_updated_at"),"depends_on_op",k.h(0,"o_depends_on_op")],t.N,t.X)):null}else{n=null
o=null}case 4:s=n!=null&&n.w===B.G&&o!=null?7:8
break
case 7:s=9
return A.a(p.eO(a,b,n,o,c),$async$cT)
case 9:s=1
break
case 8:s=10
return A.a(p.dM(a,b,c,o,d,n),$async$cT)
case 10:case 1:return A.e(q,r)}})
return A.f($async$cT,r)},
dM(a,b,c,d,e,f){return this.qc(a,b,c,d,e,f)},
lF(a,b,c,d,e){return this.dM(a,b,c,d,null,e)},
qc(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dM=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=e==null?2:4
break
case 2:s=5
return A.a(q.dZ(a),$async$dM)
case 5:s=3
break
case 4:h=e
case 3:m=h
if(m==null)throw A.b(A.jm("No record "+q.gaQ()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cI(m,p,o)
n.F(0,b)
o=A.v(p,o)
o.j(0,"id",a)
o.F(0,n)
s=6
return A.a(q.aP(B.K,c,m,a,d,f,o),$async$dM)
case 6:return A.e(null,r)}})
return A.f($async$dM,r)},
eO(a,b,c,d,e){return this.rf(a,b,c,d,e)},
rf(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eO=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.aF(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.lF(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.x(i,a7)){q=n.lF(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.cI(a5,h,g)
f.F(0,a8)
m=f
J.cX(m,"id",a7)
e=new A.a3("")
f=n.b
d=f.a
c=A.BH(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cI(m,h,g)
b.G(0,"id")
n.hv(a7,b,a,c)
a0=n.lz(a5,m,B.K)
l=null
b=a0.length===1&&d.gde().D(0,B.b.gap(a0))
a1=n.a
a2=a1.CW
a3=a1.cx
if(b){a4=d.ee(B.b.gap(a0))
b=a4.a
l=A.m([b,A.GN(d,a4,J.W(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dn(d,J.x(J.W(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.c.b.K(d.a,l,"id = ?",[a7]),$async$eO)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.C(a6)
h=A.Ha(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.db
g===$&&A.t()
b=l
s=8
return A.a(g.bo(B.K,null,a0,n.c.b,a7,m,a5,b0,a,b,a9,f),$async$eO)
case 8:if(!b1){g=n.d
if(g!=null)g.a_(new A.a2(d.a,A.as([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g){g=a5
h.bB(B.A,A.uR(a0,A.a0(a0).c),a7,m,g,B.H,d.a)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eO,r)},
aP(a,b,c,d,e,f,g){return this.wg(a,b,c,d,e,f,g)},
im(a,b){var s=null
return this.aP(a,!1,s,s,s,s,b)},
il(a,b){var s=null
return this.aP(a,!1,s,b,s,s,s)},
we(a,b,c){var s=null
return this.aP(a,b,s,s,s,s,c)},
wf(a,b,c,d,e,f){return this.aP(a,b,c,null,d,e,f)},
wg(b9,c0,c1,c2,c3,c4,c5){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$aP=A.c(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:b7={}
n.eI()
m=null
b7.a=c1
l=null
b7.b=b7.c=null
i=new A.qh(b7,n,c4,c3)
s=b9===B.a0?3:5
break
case 3:h=A.a6(c5.h(0,"id"))
if(h==null)h=A.hV()
g=$.py()
if(!g.b.test(h))throw A.b(A.ac('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aP)
case 6:l=n.eL(c5,m)
b9=b7.a==null?B.ba:B.K
s=4
break
case 5:s=b9===B.K?7:9
break
case 7:c2.toString
m=c2
s=10
return A.a(i.$1(m),$async$aP)
case 10:if(b7.a==null)throw A.b(A.jm("No record "+n.gaQ()+"/"+A.p(m)+" to update."))
c5.toString
l=n.eL(c5,m)
s=8
break
case 9:s=b9===B.a1?11:13
break
case 11:h=A.a6(c5.h(0,"id"))
if(h==null)h=A.hV()
g=$.py()
if(!g.b.test(h))throw A.b(A.ac('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aP)
case 14:g=b7.a
if(g==null){l=n.eL(c5,m)
b9=B.ba}else{l=A.cI(g,t.N,t.X)
for(g=new A.aI(c5,A.n(c5).i("aI<1,2>")).gu(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.cX(l,e,f.b)}b9=B.K}s=12
break
case 13:c2.toString
m=c2
s=15
return A.a(i.$1(m),$async$aP)
case 15:g=b7.a
if(g==null)throw A.b(A.jm("No record "+n.gaQ()+"/"+A.p(m)+" to archive/restore."))
g=A.cI(g,t.N,t.X)
g.j(0,"archived",b9===B.C)
l=g
case 12:case 8:case 4:d=new A.a3("")
g=n.b
e=g.a
c=l
b=A.BH(d,e,c,J.ar(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hv(m,l,a,b)
s=b7.a==null?16:18
break
case 16:a0=null
s=17
break
case 18:c=c4==null?b7.c:c4
s=c==null?19:21
break
case 19:c=n.a.db
c===$&&A.t()
s=22
return A.a(c.bV(n.c.b,e.a,m),$async$aP)
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
case 26:c=n.a.db
c===$&&A.t()
s=29
return A.a(c.es(n.c.b,e.a,m),$async$aP)
case 29:c=c7
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a5)throw A.b(A.Ek("Record "+n.gaQ()+"/"+A.p(m)+u.W))
a3=b7.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ai(A.bg(e,a3))
a2=A.aq(B.l.v(B.e.v(a6)).a)
a7=new A.pS(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.CW
a8=a3.cx
a9=A.dn(e,J.x(J.W(l,"archived"),!0),a4,a8,c,a2)
b0=n.lz(b7.a,l,b9)
k=null
if(b7.a!=null&&b0.length===1&&e.gde().D(0,B.b.gap(b0))){b1=e.ee(B.b.gap(b0))
c=b1.a
k=A.m([c,A.GN(e,b1,J.W(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
a2=n.c.b
s=b7.a==null?34:36
break
case 34:s=37
return A.a(a2.aD(0,c,k),$async$aP)
case 37:s=35
break
case 36:s=38
return A.a(a2.K(c,k,"id = ?",[m]),$async$aP)
case 38:case 35:p=2
s=33
break
case 31:p=30
b8=o.pop()
j=A.C(b8)
g=A.Ha(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.db
c===$&&A.t()
a2=m
a3=b7.a
s=39
return A.a(c.bo(b9,a7,b0,n.c.b,a2,l,a3,a1,a,a9,a0,g),$async$aP)
case 39:b3=c7
b4=b3.a
if(b4)b5=B.au
else switch(b9.a){case 2:case 0:case 1:b5=b7.a==null?B.ac:B.A
break
case 3:b5=B.A
break
case 4:b5=B.c5
break
case 5:b5=B.c6
break
default:b5=null}if(b4){g=A.aM(t.N)
c=b7.a
c=J.E((c==null?l:c).gM())
while(c.k()){a2=c.gn()
if(a2!=="id")g.t(0,a2)}b6=g}else if(b9===B.C||b9===B.E)b6=A.as(["archived"],t.N)
else if(b7.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("at<o.E>")
b6=A.d1(new A.at(new A.T(g,c),new A.qg(),a2),a2.i("o.E"))}else b6=A.uR(b0,A.a0(b0).c)
g=n.d
c=g==null
if(!c){a2=m
a3=b7.a
a4=b4?null:l
g.bB(b5,b6,a2,a4,a3,B.H,e.a)}if(!c0)if(!c)g.a_(new A.a2(e.a,A.as([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
bC(a,b){return this.wE(a,b)},
nj(a){return this.bC(a,B.a0)},
wE(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bC=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eI()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.j([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.r)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a6(a0)
a2=a1?A.hV():a0
a1=$.py()
if(!a1.b.test(a2))throw A.b(A.ac('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aO(l,new A.a5(a2,a))}if(!c){a3=A.v(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.al(a3,a3.$ti.i("al<2>")).ca(0,new A.ql())}else a5=!1
s=c3===B.a0&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dX(m,l),$async$bC)
case 9:k=A.aM(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aO(k,i)}g.a_(new A.a2(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.C(c0) instanceof A.hm))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.v(k,t.G)
j=n.a,d=j.CW,j=j.cx,a1=t.s,a8=0
case 10:if(!(a8<J.ar(l))){s=12
break}a9=a8+2000
b0=B.c.bp(a9,0,J.ar(l))
a4=A.j([],a1)
for(b1=J.I4(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.r)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.bD(e,"id IN ("+B.b.C(A.a7(a4.length,"?",!1,k),", ")+")",a4),$async$bC)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.F(b2),A.bX(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.v(k,t.o)
b4=A.v(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.P(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bp(a9,0,j))
b7=B.b.C(A.a7(b6.length,"?",!1,k),", ")
j=A.j([e],a1)
B.b.F(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.bD("lp_sync_row",f,j),$async$bC)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.F(b1),A.h9(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.bD("lp_outbox",f,j),$async$bC)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.F(d),A.ja(f))
s=23
break
case 24:case 17:a8=a9
s=16
break
case 18:b8=A.aM(k)
j=l,f=j.length,d=t.X,b=0
case 25:if(!(b<j.length)){s=27
break}a1=j[b]
a2=a1.a
a=a1.b
b9=a7.h(0,a2)
s=b8.D(0,a2)?28:30
break
case 28:a1=A.dF(null,null,k,d)
a1.F(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.we(c3,!0,a1),$async$bC)
case 31:s=29
break
case 30:a1=A.dF(null,null,k,d)
a1.F(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.wf(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bC)
case 32:b8.t(0,a2)
case 29:case 26:j.length===f||(0,A.r)(j),++b
s=25
break
case 27:g.a_(new A.a2(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bC,r)},
dX(a,b){return this.rB(a,b)},
rB(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dX=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.im?3:4
break
case 3:s=5
return A.a(n.dY(a6,a7),$async$dX)
case 5:s=1
break
case 4:m=n.a.cy.$0()
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
return A.a(n.eE(a6,a4,h,g,m),$async$dX)
case 13:e=a9
if(l)J.aO(k,new A.a5(h,e));++j
case 11:a7.length===a0||(0,A.r)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.C(a5) instanceof A.c6?14:16
break
case 14:d=A.j([],t.s)
for(c=0;c<j;++c)J.aO(d,a7[c].a)
b=d
s=17
return A.a(n.d6(a6,b),$async$dX)
case 17:throw A.b(new A.hm())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.r)(i),++a1){a3=i[a1]
a.kd(B.ac,a3.a,a3.b,null,B.H,a0)}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dX,r)},
dY(a,b){return this.rC(a,b)},
rC(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dY=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.cy.$0()
d1=o.c.b
d2=t.s
d3=A.j(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.r)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.hZ(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.hZ(B.Z)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.hZ(B.Y)+") VALUES "
j=new A.qe()
b1=new A.a3("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.j([],t.jO):null
i=0,a9=b3==null,b4=c9.CW,b5=c9.cx,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bp(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eL(c2,c1):c2
b1.a=""
c4=A.BH(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hv(c1,c3,c5,c4)
A.Mj(f,c8,J.x(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.db
b7===$&&A.t()
c6=b7.fO()
A.GC(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.GD(d,B.a6,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a5(c1,c3))}c=!1
b=!1
q=6
b7=d1.cn(A.p(m)+A.p(j.$2(J.ar(n),g)))
if(b7.r||b7.b.r)A.u(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eF(new A.bN(f))
b7.h7()
c=!0
b7=d1.cn(A.p(l)+A.p(j.$2(11,g)))
if(b7.r||b7.b.r)A.u(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eF(new A.bN(e))
b7.h7()
b=!0
b7=d1.cn(A.p(k)+A.p(j.$2(16,g)))
if(b7.r||b7.b.r)A.u(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eF(new A.bN(d))
b7.h7()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.C(d4) instanceof A.c6?9:11
break
case 9:a=A.j([],d2)
for(a0=0;a0<i;++a0)J.aO(a,d6[a0].a)
a1=a
s=12
return A.a(o.d6(d5,a1),$async$dY)
case 12:s=c||b?13:14
break
case 13:a2=A.j([],d2)
for(a3=i;a3<h;++a3)J.aO(a2,d6[a3].a)
a4=a2
a5=B.b.C(A.a7(J.ar(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.U(d3,"id IN ("+A.p(a5)+")",a4),$async$dY)
case 17:case 16:s=b?18:19
break
case 18:a6=A.j([d3],d2)
J.E2(a6,a4)
a7=a6
s=20
return A.a(d5.U("lp_outbox","store = ? AND record_id IN ("+A.p(a5)+")",a7),$async$dY)
case 20:case 19:case 14:throw A.b(new A.hm())
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
a8.kd(B.ac,a2.a,a2.b,null,B.H,d3)}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dY,r)},
eE(a,b,c,d,e){return this.pg(a,b,c,d,e)},
pg(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eE=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eL(b1,b0)
a3=new A.a3("")
a4=A.BH(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hv(b0,a2,a6,a4)
a5=n.a
m=A.dn(a1,J.x(a2.h(0,"archived"),!0),a5.CW,a5.cx,b0,a2)
a5=a5.db
a5===$&&A.t()
e=a5.fO()
a5=a1.a
l=A.GF("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.ME('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dH(new A.T(d,c),new A.qc(),c.i("o.E"),b).C(0,", ")
g=B.b.C(A.a7(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.p(h)+") VALUES ("+A.p(g)+")"
c=a9.cn(f)
d=m
a=A.n(d).i("al<2>")
d=A.P(new A.al(d,a),a.i("o.E"))
c.ec(new A.bN(d))
j=!0
a9.cn("INSERT INTO lp_outbox ("+A.hZ(B.Z)+") VALUES ("+B.b.C(A.a7(11,"?",!1,b),", ")+")").ec(new A.bN(A.H4(l,B.Z)))
i=!0
a9.cn("INSERT INTO lp_sync_row ("+A.hZ(B.Y)+") VALUES ("+B.b.C(A.a7(16,"?",!1,b),", ")+")").ec(new A.bN(A.H4(k,B.Y)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.U(a5,"id = ?",[b0]),$async$eE)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.U("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$eE)
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
return A.f($async$eE,r)},
d6(a,b){return this.pW(a,b)},
pW(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$d6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.C(A.a7(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.U(m,"id IN ("+o+")",b),$async$d6)
case 3:m=A.j([m],t.s)
B.b.F(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.U("lp_outbox",n,m),$async$d6)
case 4:s=5
return A.a(a.U("lp_sync_row",n,m),$async$d6)
case 5:case 1:return A.e(q,r)}})
return A.f($async$d6,r)},
eL(a,b){var s,r,q,p=A.v(t.N,t.X)
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.nk("archived",new A.qd())
return p},
lz(a,b,c){var s,r,q,p,o
if(a==null)return B.cR
s=t.N
r=A.aM(s)
s=A.d1(a.gM(),s)
s.F(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hy(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.r.Z(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.P(r,r.$ti.c)
B.b.aI(o)
return o},
dZ(a){return this.rG(a)},
rG(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ah('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dZ)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=p.a
q=A.bX(n,l.gH(m),o.CW,o.cx)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
hl(a){return this.rm(a)},
rm(a){var s=0,r=A.h(t.nw),q,p=this,o,n,m,l,k,j
var $async$hl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ah('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hl)
case 3:j=c
k=J.L(j)
if(k.gE(j)){q=B.dq
s=1
break}o=k.gH(j)
k=p.a
n=A.bX(l,o,k.CW,k.cx)
m=o.h(0,"s_sync_state")!=null?A.h9(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eY(n,m,o.h(0,"o_kind")!=null?A.ja(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
bZ(a){return this.og(a)},
og(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
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
return A.a(k.ah("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bZ)
case 6:s=4
break
case 5:s=7
return A.a(k.ah('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bZ)
case 7:case 4:j=c
l=J.L(j)
if(l.gE(j)){if(f)o.e.kW(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.bX(n,i,l.CW,l.cx)
g=A.be(i.h(0,"lp_schema_ver"))
if(g==null)g=1
if(g<m)h=A.Mk(n,h,g,m)
if(f)o.e.kW(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
hv(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.ac('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.DK(p,n)
if(m!=null)throw A.b(A.ac(A.Ij(p,m),o))}s=this.a.as
if(d>s)throw A.b(A.ac("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.qn.prototype={
$1(a){return a.bA(this.a.b.a.a).iv(this.b)},
$S:4}
A.qq.prototype={
$1(a){return a.bA(this.a.b.a.a).nx(this.b)},
$S:4}
A.qm.prototype={
$1(a){return a.bA(this.a.b.a.a).ni(this.b)},
$S:4}
A.qp.prototype={
$1(a){return a.bA(this.a.b.a.a).ny(this.b)},
$S:4}
A.qj.prototype={
$1(a){return a.bA(this.a.b.a.a).nf(this.b,this.c)},
$S:4}
A.qi.prototype={
$1(a){return a.bA(this.a.b.a.a).ng(this.b)},
$S:4}
A.qf.prototype={
$1(a){return a.bA(this.a.b.a.a).mC(this.b)},
$S:4}
A.qo.prototype={
$1(a){return a.bA(this.a.b.a.a).ns(this.b)},
$S:4}
A.qk.prototype={
$1(a){return a.bA(this.a.b.a.a).kB(this.b)},
$S:4}
A.qh.prototype={
nF(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dZ(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hl(a),$async$$1)
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
$1(a){return this.nF(a)},
$S:127}
A.qg.prototype={
$1(a){return a!=="id"},
$S:14}
A.ql.prototype={
$1(a){return a>1},
$S:128}
A.qe.prototype={
$2(a,b){var s=t.N
return B.b.C(A.a7(b,"("+B.b.C(A.a7(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:129}
A.qc.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.qd.prototype={
$0(){return!1},
$S:46}
A.hm.prototype={$iG:1}
A.ol.prototype={}
A.pF.prototype={
aY(a,b){var s=this.a.W(new A.pG(a,b),b)
this.a=s.b5(new A.pH(b),new A.pI(),t.H)
return s}}
A.pG.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.pH.prototype={
$1(a){},
$S(){return this.a.i("U(0)")}}
A.pI.prototype={
$2(a,b){},
$S:6}
A.bi.prototype={
gnq(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.qD.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.F(d)
s=e.h(0,"record_id")
s.toString
A.F(s)
r=A.BP(e.h(0,l),l,k)
q=A.BP(e.h(0,j),j,k)
p=A.BP(e.h(0,i),i,k)
o=A.GL(e.h(0,h),h,k)
n=A.GL(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ap(m)
return new A.bi(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.BP(e.h(0,f),f,k):null)},
$S:131}
A.qE.prototype={
fk(a){return this.w2(a)},
w2(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.t()
m=m.gbq()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.wF("lp_conflicts","detected_at ASC",n,o),$async$fk)
case 3:o=l.bZ(c,A.MK(),t.n8)
m=A.P(o,o.$ti.i("a_.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
dA(a,b){return this.oh(a,b)},
oh(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.t()
s=3
return A.a(n.gbq().b.aH("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dA)
case 3:o=d
n=J.L(o)
if(n.gE(o)){q=null
s=1
break}q=A.Cz(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
xo(a){var s={},r=A.ok()
s.a=null
r.shZ(A.dQ(new A.qH(s,r),new A.qI(s,this,a,new A.qJ(this,r,a)),t.ba))
return r.aB().gcq()},
ev(a,b,c){return this.x4(a,b,c)},
x4(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ev=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(c)
s=2
return A.a(p.a2(new A.qF(q,c,a,o.a,o,b),t.P),$async$ev)
case 2:return A.e(null,r)}})
return A.f($async$ev,r)},
f0(a,b){return this.tM(a,b)},
tM(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$f0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dA(a,b),$async$f0)
case 2:p=d
if(p==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=3
return A.a(q.ev(b,p.d,a),$async$f0)
case 3:return A.e(null,r)}})
return A.f($async$f0,r)},
e5(a,b){return this.tN(a,b)},
tN(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$e5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dA(a,b),$async$e5)
case 3:o=d
if(o==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=o.gnq()?4:5
break
case 4:s=6
return A.a(p.a.bA(a).kB(b),$async$e5)
case 6:s=1
break
case 5:s=7
return A.a(p.ev(b,o.e,a),$async$e5)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e5,r)}}
A.qJ.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.aB().gie()){s=1
break}p=4
s=7
return A.a(n.a.fk(n.c),$async$$0)
case 7:m=b
if(!i.aB().gie())J.aO(i.aB(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.C(h)
k=A.ae(h)
if(!i.aB().gie())i.aB().bf(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.qI.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b0(p,A.n(p).i("b0<1>")).aU(new A.qG(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qG.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:40}
A.qH.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.w?p:A.bw(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.aB().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qF.prototype={
$1(a){return this.nG(a)},
nG(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aH("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.L(a3)
if(a4.gE(a3))throw A.b(A.A("No conflict found for "+a1+"/"+a2))
o=A.Cz(a4.gH(a3))
n=o.gnq()
m=n?null:A.ai(o.e)
l=n?"":A.aq(B.l.v(B.e.v(A.ai(A.bg(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aH(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bz(a8)?4:5
break
case 4:s=7
return A.a(a0.U("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.U("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.U("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a_(new A.a2(a1,A.as([a2],a4)))
a6.a_(new A.a2("lp_conflicts",A.as([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aH("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.L(k)
if(i.gY(k)){h=A.a6(J.W(i.gH(k),"base_updated"))
i=h==null?A.a6(J.W(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.U("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cI(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.K(a4,A.dn(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bH(n?B.j:o.e,g)
d=A.P(a4,A.n(a4).c)
B.b.aI(d)
c=A.ai(A.bg(e,g))
s=13
return A.a(a0.K("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a6(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aH("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bz(a8)?14:16
break
case 14:a4=p.a.a
b=a4.cy.$0()
h=f?B.L:B.v
e=B.h.a6(d,null)
a4=a4.db
a4===$&&A.t()
s=18
return A.a(a0.aD(0,"lp_outbox",A.GF(l,j,b,e,h,a4.fO(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.K("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a_(new A.a2(a1,A.as([a2],i)))
a6.a_(new A.a2("lp_conflicts",A.as([a2],i)))
a4=o.d
a=A.bH(a4,g)
a.G(0,"id")
a6.bB(B.A,a,a2,g,a4,B.ad,a1)
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.ns.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dQ(null,null,t.n6)
n.ay=A.dQ(null,null,t.ic)}n.z=!0
s=3
return A.a(n.aM(B.dz),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.is(),$async$az)
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
n.fr=new A.b0(l,A.n(l).i("b0<1>")).aU(n.gvH())
l=n.b.CW
n.fx=new A.b0(l,A.n(l).i("b0<1>")).aU(n.gvF())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aJ(),$async$az)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.xZ(B.S,new A.xU(n))
s=14
return A.a(n.aM(n.dK()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.c6("cycle")
s=17
return A.a(n.eW(),$async$az)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$az,r)},
aJ(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aJ=A.c(function(a,b){if(a===1)return A.d(b,r)
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
return A.a(p.k4,$async$aJ)
case 3:s=4
return A.a(p.dx,$async$aJ)
case 4:s=5
return A.a(p.dy.a,$async$aJ)
case 5:s=6
return A.a(p.p2,$async$aJ)
case 6:o=p.fr
o=o==null?null:o.A()
n=t.H
s=7
return A.a(o instanceof A.w?o:A.bw(o,n),$async$aJ)
case 7:o=p.fx
o=o==null?null:o.A()
s=8
return A.a(o instanceof A.w?o:A.bw(o,n),$async$aJ)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.N
o.t(0,B.N)
s=12
return A.a(p.ax.q(),$async$aJ)
case 12:s=10
break
case 11:p.y=B.N
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aJ)
case 15:case 14:p.y=B.N
case 1:return A.e(q,r)}})
return A.f($async$aJ,r)},
dK(){if(this.at)return B.bn
if(this.Q)return B.bk
if(this.as)return B.aF
return B.bl},
aM(a){return this.tn(a)},
tn(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.q3(),$async$aM)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aM,r)},
q3(){return this.p2=this.p2.W(new A.xK(this),t.H)},
h3(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$h3=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.hM(),$async$h3)
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
if((g.c&4)===0)g.t(0,new A.eI(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h3,r)},
vI(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.c6("push")
s.rZ(B.ag)},
vG(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.fx.I(s))return
r=a.c
if(r!=null&&a.b===B.aa){q.c6("fast:"+s)
q.dx=q.dx.W(new A.xS(q,r),t.H)
return}q.c6("pull:"+s)
q.hs(B.ag,A.j([s],t.s))},
h8(a){return this.qd(a)},
qd(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h8=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hs(B.ag,A.j([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.t()
s=7
return A.a(l.hX(a),$async$h8)
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
break}if(!m)n.hs(B.ag,A.j([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h8,r)},
vQ(){if(!this.z)return
this.c6("cycle")
this.md()},
hs(a,b){var s=this,r=s.go
if(r!=null)r.A()
if(b==null)s.k2=!0
else s.k3.F(0,b)
s.go=A.c9(a,new A.xR(s))},
rZ(a){return this.hs(a,null)},
rY(a){var s=this.id
if(s!=null)s.A()
this.id=A.c9(B.D,new A.xQ(this,a))},
jz(){this.as=!0
this.aM(B.aF)
A.iz(this.d,t.H)},
el(){var s=0,r=A.h(t.H),q,p=this,o
var $async$el=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.db
o===$&&A.t()
s=3
return A.a(o.x0(),$async$el)
case 3:s=4
return A.a(p.aM(p.dK()),$async$el)
case 4:p.c6("cycle")
s=5
return A.a(p.eW(),$async$el)
case 5:case 1:return A.e(q,r)}})
return A.f($async$el,r)},
fT(a){return this.ou(a)},
ou(a){var s=0,r=A.h(t.H),q=this,p
var $async$fT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.A()
q.k1=A.c9(B.aw,new A.xT(q))
s=3
break
case 4:s=5
return A.a(q.aM(B.bk),$async$fT)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fT,r)},
b2(){var s=0,r=A.h(t.H),q=this
var $async$b2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aM(B.bn),$async$b2)
case 2:return A.e(null,r)}})
return A.f($async$b2,r)},
aW(){var s=0,r=A.h(t.H),q,p=this
var $async$aW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aM(p.dK()),$async$aW)
case 3:p.c6("cycle")
s=4
return A.a(p.eW(),$async$aW)
case 4:case 1:return A.e(q,r)}})
return A.f($async$aW,r)},
mf(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.A()}s=t.fD
r=q.k4.W(new A.xN(q,a),s)
q.k4=r.b5(new A.xO(),new A.xP(),s)
return r},
eW(){return this.mf(null)},
c6(a){var s,r=this.p1
r.push(a)
s=r.length
if(s>1000)B.b.iB(r,0,s-1000)},
jJ(a){this.mf(a).b5(new A.xL(),new A.xM(this),t.H)},
md(){return this.jJ(null)},
b9(a){return this.q0(a)},
q0(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b9=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aM(n.dK()),$async$b9)
case 5:q=B.O
s=1
break
case 4:b3=t.N
a4=t.S
m=A.v(b3,a4)
l=A.v(b3,a4)
k=!1
j=!1
i=A.j([],t.s)
s=6
return A.a(n.aM(B.dA),$async$b9)
case 6:b3=b8==null
if(b3){a4=n.a.fx
a5=A.n(a4).i("T<1>")
a6=A.P(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.t()
s=14
return A.a(a5.dn(h),$async$b9)
case 14:g=c0
J.cX(m,h,g.b)
if(g.f&&g.b>0)J.aO(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.C(b4)
if(a5 instanceof A.c_){n.jz()
s=9
break}else if(a5 instanceof A.bo){f=a5
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
return A.a(n.aM(B.aF),$async$b9)
case 17:q=n.ok=new A.b5(m,B.am,0,0,0,0,!0)
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
return A.a(b3.dF(e),$async$b9)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.W(l,c.a)
if(a5==null)a5=0
J.cX(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.C(b5)
if(b3 instanceof A.bo){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aM(B.dB),$async$b9)
case 25:a=B.a3
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.t()
s=33
return A.a(b3.fw(),$async$b9)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.x.b3("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b9)
case 36:a0=c0
if(J.dr(a0)&&typeof J.W(J.bL(a0),"last_error")=="string"){b3=J.W(J.bL(a0),"last_error")
b3.toString
n.ch=A.F(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.C(b6)
if(b3 instanceof A.c_)n.jz()
else if(b3 instanceof A.bo){a1=b3
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
return A.a(b3.bu(),$async$b9)
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
n.ch=A.p(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.O
s=1
break}if(J.ar(i)!==0)n.rY(i)
a9=k||a.f
b0=new A.aF(A.lz(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dK()
s=42
return A.a(n.aM(a9&&b1===B.bl?B.bm:b1),$async$b9)
case 42:q=n.ok=new A.b5(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b9,r)}}
A.xU.prototype={
$1(a){return this.a.vQ()},
$S:26}
A.xK.prototype={
$1(a){return this.a.h3()},
$S:37}
A.xS.prototype={
$1(a){return this.a.h8(this.b)},
$S:37}
A.xR.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.P(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jw()}if(r||p.length===0)s.md()
else s.jJ(p)},
$S:0}
A.xQ.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jJ(this.b)},
$S:0}
A.xT.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aM(p.dK()),$async$$0)
case 2:p.c6("cycle")
s=3
return A.a(p.eW(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.xN.prototype={
$1(a){return this.a.b9(this.b)},
$S:135}
A.xO.prototype={
$1(a){return B.O},
$S:136}
A.xP.prototype={
$1(a){return B.O},
$S:137}
A.xL.prototype={
$1(a){},
$S:138}
A.xM.prototype={
$2(a,b){var s=this.a
if(s.ch==null)s.ch=A.p(a)
s.aM(B.bm)},
$S:6}
A.d2.prototype={
l(a){return"MapFailure: "+this.a},
$iG:1}
A.ez.prototype={}
A.BL.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.BM.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.ve.prototype={}
A.dI.prototype={}
A.mr.prototype={}
A.Ay.prototype={}
A.Aw.prototype={}
A.yP.prototype={}
A.vl.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.vk(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:140}
A.vf.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vg.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vh.prototype={
$1(a){return typeof a=="string"},
$S:24}
A.vi.prototype={
$1(a){return a instanceof A.w?a:A.ba(a,t.X)},
$S:141}
A.vj.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hy(s,s.r,A.n(s).c),r=this.b,q=J.L(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:142}
A.vD.prototype={
f8(a){return this.v1(a)},
v1(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.cy.$0()
e=e.x
s=3
return A.a(e.wH("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f8)
case 3:o=c
n=t.ox
m=A.j([],n)
for(l=J.E(o);l.k();)m.push(A.Jj(l.gn()))
l=A.aM(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.r)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.kG(e,l),$async$f8)
case 4:h=c
g=A.j([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.r)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.D(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f8,r)},
nc(a){return this.a.a2(new A.vF(a),t.H)},
wb(a,b,c,d){return this.a.a2(new A.vG(c,d,b,a),t.H)}}
A.vF.prototype={
$1(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.K("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vG.prototype={
$1(a){return this.nW(a)},
nW(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.K("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.pS.prototype={}
A.iO.prototype={}
A.jj.prototype={}
A.vI.prototype={
fO(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cP(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
es(a,b,c){return this.wQ(a,b,c)},
wQ(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$es=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aH("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$es)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.ja(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$es,r)},
bV(a,b,c){return this.wS(a,b,c)},
wS(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aH("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bV)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.h9(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
bo(a,b,c,d,e,f,g,h,i,j,k,l){return this.tX(a,b,c,d,e,f,g,h,i,j,k,l)},
tX(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bo=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a5)throw A.b(A.Ek("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ap
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
return A.a(a8.U("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bo)
case 5:s=6
return A.a(a8.U("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bo)
case 6:s=7
return A.a(p.hw(a8,a2,a9),$async$bo)
case 7:s=8
return A.a(a8.U(a2,"id = ?",[a9]),$async$bo)
case 8:q=B.cY
s=1
break
case 4:k=p.a.cy.$0()
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
if(i!=null&&g==null)throw A.b(A.db("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aM(l)
e=a4?null:b2.r
if(e!=null)f.F(0,e)
f.F(0,a7)
d=A.P(f,f.$ti.c)
B.b.aI(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a6(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.hZ(B.Z)
e=B.b.C(A.a7(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aG("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.GX(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bo)
case 12:s=10
break
case 11:s=13
return A.a(a8.aG('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bo)
case 13:case 10:f=A.j(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.F(f,B.cL)
if(o)B.b.F(f,B.cz)
s=a3?14:16
break
case 14:a3=A.hZ(B.Y)
l=B.b.C(A.a7(16,"?",!1,l),", ")
s=17
return A.a(a8.aG("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.H8(B.a6,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bo)
case 17:s=15
break
case 16:for(a3=f.length,a0=0,l="UPDATE lp_sync_row SET ";a0<a3;++a0){if(a0>0)l+=", "
l+='"'+f[a0]+'" = ?'}a3=l+' WHERE "store" = ? AND "record_id" = ?'
a1=["dirty",b,a+1,j,a1.b]
if(a4)B.b.F(a1,[i,h,g])
if(o)B.b.F(a1,[0,0,null])
a1.push(a2)
a1.push(a9)
s=18
return A.a(a8.aG(a3.charCodeAt(0)==0?a3:a3,a1),$async$bo)
case 18:case 15:q=new A.iO(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bo,r)},
hw(a,b,c){return this.tw(a,b,c)},
tw(a,b,c){var s=0,r=A.h(t.H)
var $async$hw=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cx(a,b,c,!1),$async$hw)
case 2:return A.e(null,r)}})
return A.f($async$hw,r)},
f9(a,b){return this.v2(a,b)},
v2(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.x
f=new A.a3("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.P([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ah("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f9)
case 3:o=d
f=J.L(o)
if(f.gE(o)){q=B.cP
s=1
break}e=t.my
n=A.j([],e)
for(f=f.gu(o);f.k();)n.push(A.ja(f.gn()))
f=A.aM(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.kG(g,f),$async$f9)
case 4:j=d
i=A.j([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.r)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.D(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
kX(a){if(a.length===0)return A.ba(null,t.H)
return this.a.a2(new A.vO(this,a),t.H)},
aL(a,b){return this.ta(a,b)},
ta(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aL=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.au(a0).a
a4=a2.cy.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aH("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aL)
case 5:o=a9
n=J.L(o)
s=!(n.gY(o)&&!J.x(J.W(n.gH(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aH(a,1,"id = ?",[a1]),$async$aL)
case 8:m=a9
n=J.L(m)
l=n.gY(m)?A.bX(a3,n.gH(m),a2.CW,a2.cx):null
s=9
return A.a(b.K(a,A.dn(a3,J.x(a5.h(0,"archived"),!0),a2.CW,a2.cx,a1,a5),"id = ?",[a1]),$async$aL)
case 9:a6.a_(new A.a2(a0,A.as([a1],t.N)))
k=A.bH(l==null?B.j:l,a5)
k.G(0,"id")
a6.bB(B.A,k,a1,a5,l,B.ad,a0)
case 7:case 4:a=a3.a
s=10
return A.a(b.aH(a,1,"id = ?",[a1]),$async$aL)
case 10:j=a9
a5=J.L(j)
s=a5.gE(j)?11:12
break
case 11:s=13
return A.a(b.U("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aL)
case 13:s=14
return A.a(p.d7(b,a0,a1,a7.c,a4),$async$aL)
case 14:a6.a_(new A.a2(a0,A.as([a1],t.N)))
s=1
break
case 12:n=a2.CW
a2=a2.cx
i=A.bX(a3,a5.gH(j),n,a2)
h=A.aq(B.l.v(B.e.v(A.ai(A.bg(a3,i)))).a)
a5=a7.b
g=A.aq(B.l.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.U("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aL)
case 18:s=19
return A.a(p.d7(b,a0,a1,a7.c,a4),$async$aL)
case 19:a6.a_(new A.a2(a0,A.as([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aF(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bl(d,a5,f):A.v(a5,f)
s=23
return A.a(b.K(a,A.dn(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aL)
case 23:s=24
return A.a(b.U("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aL)
case 24:s=25
return A.a(p.d7(b,a0,a1,a7.c,a4),$async$aL)
case 25:a6.a_(new A.a2(a0,A.as([a1],a5)))
k=A.bH(i,c)
k.G(0,"id")
a6.bB(B.A,k,a1,c,i,B.ad,a0)
s=21
break
case 22:g=A.aq(B.l.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.K("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aL)
case 26:s=27
return A.a(b.K("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aL)
case 27:s=28
return A.a(b.K(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aL)
case 28:a6.a_(new A.a2(a0,A.as([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aL,r)},
d7(a,b,c,d,e){return this.qP(a,b,c,d,e)},
qP(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d7=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.K("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d7)
case 2:s=3
return A.a(a.K(q.a.au(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d7)
case 3:return A.e(null,r)}})
return A.f($async$d7,r)},
wT(a,b,c,d,e){return this.a.a2(new A.vM(c,e,d,B.G,a,b),t.H)},
nb(a,b,c,d,e,f){return this.a.a2(new A.vL(this,c,f,b,a,d,e),t.H)},
fm(a,b,c,d,e){return this.nb(a,b,c,d,B.ap,e)},
na(a,b,c){return this.a.a2(new A.vK(a,c,b),t.H)},
x0(){return this.a.a2(new A.vN(null),t.S)},
f1(a,b,c,d,e,f,g){return this.tU(a,b,c,d,e,f,g)},
tU(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$f1=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.K("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$f1)
case 2:p=A.v(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.K("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$f1)
case 3:return A.e(null,r)}})
return A.f($async$f1,r)}}
A.vO.prototype={
$1(a){return this.o0(a)},
o0(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aL(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.r)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vM.prototype={
$1(a){return this.nZ(a)},
nZ(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.K("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vL.prototype={
$1(a){return this.nY(a)},
nY(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aD(0,"lp_dead_letter",A.m(["at",q.a.a.cy.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.K("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vK.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.K("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vN.prototype={
$1(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.j(["blocked"],t.s)
q=a.b.K("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:143}
A.ed.prototype={
a4(){return"ApplyResult."+this.b}}
A.mT.prototype={}
A.wA.prototype={
dn(a){return this.wA(a)},
wA(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dn=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iw(b4),$async$dn)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.HJ().ef(n)
if(m==null)A.u(A.aS('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.u(A.aS('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.CA(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.wr(k))A.u(A.aS('Bad timestamp "'+n+'"'))
o=A.N5(A.CA(j,i,h,g,f,e,d).j0(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iC(B.c.bp(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.Q,k=k.fx,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.as
a4===$&&A.t()
s=6
return A.a(a4.fl(b4,null,a2,o,null,b),$async$dn)
case 6:a5=b6
a4=J.L(a5)
if(a4.gE(a5)){s=5
break}++a.ax
a6=p.qR(a5)
a7=k.h(0,b4)
if(a7==null)A.u(A.A(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.DQ(a7.a,a5),$async$dn)
case 8:s=7
return A.a(b0.aY(new b1.wI(b2,p,b3,b6,a6),l),$async$dn)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mT(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dn,r)},
ms(a,b){var s=B.a.a0(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a0(a.a,b.b)<=0},
tp(a,b){var s=B.a.a0(a.c,b.c)
if(s!==0)return s>0
return B.a.a0(a.a,b.a)>0},
qR(a){var s,r,q,p=J.aD(a),o=p.gH(a)
for(p=p.bl(a,1),s=p.$ti,p=new A.an(p,p.gm(0),s.i("an<a_.E>")),s=s.i("a_.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.tp(q,o))o=q}return o},
hX(a){return this.vg(a)},
vg(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aY(new A.wC(o,p,a),t.P),$async$hX)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
dh(a,b){return this.vj(a,b)},
vj(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dh=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bE(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.fx,e=n.b,d=A.a0(j),c=d.c,d=d.i("cq<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cq(j,0,200,d)
a2.iW(j,0,200,c)
a3=a2.cW(0)
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
a7=e.as
a7===$&&A.t()
s=12
return A.a(a7.c_(l),$async$dh)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.C(b1)
if(a7 instanceof A.cK){J.aO(m,l)
s=6
break}else if(a7 instanceof A.c_)throw b1
else if(a7 instanceof A.bo){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aO(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.r)(a3),++a6
s=5
break
case 7:s=J.ar(m)!==0?13:14
break
case 13:s=15
return A.a(n.fo(b2,m),$async$dh)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.u(A.A(a1))
b0=a9.a
a2=A.j([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.r)(a5),++a6)a2.push(A.DR(b0,a5[a6]))
s=16
return A.a(i.aY(new A.wE(n,a2,b2,b0),h),$async$dh)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dh,r)},
dU(a,b,c,d){return this.rk(a,b,c,d)},
rk(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dU=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.v(c,t.o)
a=A.v(c,t.G)
o=p.a,n=o.CW,m=o.cx,o=o.fx,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bp(i,0,j))
g=B.b.C(A.a7(h.length,"?",!1,c),", ")
j=[a2]
B.b.F(j,h)
a0=J
s=6
return A.a(a1.ah(u.m+g+")",j),$async$dU)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.F(e),A.h9(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.u(A.A(l))
a0=J
s=9
return A.a(a1.bD(d.a.a,"id IN ("+g+")",h),$async$dU)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.F(e),A.bX(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a5(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
mB(a,b,c,d,e){return this.a5(a,b,A.DR(this.a.au(b).a,c),null,!1,d,e)},
tZ(a,b,c){return this.mB(a,b,c,null,!1)},
a5(a,b,c,d,e,f,g){return this.tY(a,b,c,d,e,f,g)},
mA(a,b,c){return this.a5(a,b,c,null,!1,null,!1)},
tY(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return A.a(n.bw(a4,a7,b2,a8,a9),$async$a5)
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
return A.a(n.bw(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a5)
case 8:q=B.a8
s=1
break
case 7:g=a8.a
f=$.py()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bw(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a5)
case 11:q=B.a8
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.db
g===$&&A.t()
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
return A.a(a4.aH(a6.a,1,"id = ?",[a8.a]),$async$a5)
case 19:c=b9
g=J.L(c)
d=g.gE(c)?null:A.bX(a7,g.gH(c),a5.CW,a5.cx)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dm(a4,a8.a,a8.e,b2),$async$a5)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.HZ(a4,a6.a,A.dn(a7,J.x(a9.h(0,"archived"),!0),a5.CW,a5.cx,i,a9)),$async$a5)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.dc(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 26:b1.a_(new A.a2(b2,A.as([a8.a],t.N)))
b=A.bH(B.j,a9)
b.G(0,"id")
b1.bB(B.ac,b,a8.a,a9,null,B.av,b2)
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
return A.a(n.c8(b1,b2,a8.a,a8.c,!1),$async$a5)
case 31:q=B.a9
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.K(a6.a,A.dn(a7,J.x(a9.h(0,"archived"),!0),a5.CW,a5.cx,i,a9),"id = ?",[a8.a]),$async$a5)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.dc(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 33:b1.a_(new A.a2(b2,A.as([a8.a],t.N)))
b=A.bH(d,a9)
b.G(0,"id")
b1.bB(B.A,b,a8.a,a9,d,B.av,b2)
q=B.a7
s=1
break
case 28:s=a===B.G||a===B.bo||a===B.a5?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.c8(b1,b2,a8.a,a8.c,!1),$async$a5)
case 38:q=B.a9
s=1
break
case 37:s=a===B.a5?39:40
break
case 39:s=41
return A.a(n.c8(b1,b2,a8.a,a8.c,!1),$async$a5)
case 41:q=B.a9
s=1
break
case 40:a0=A.bg(a7,d)
s=A.ai(a0)===i?42:43
break
case 42:s=44
return A.a(a4.U("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a5)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.dc(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a5)
case 45:b1.a_(new A.a2(b2,A.as([a8.a],t.N)))
q=B.a7
s=1
break
case 43:l=null
p=47
a9=m
l=A.hY(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.C(b0)
s=a5 instanceof A.d2?50:52
break
case 50:k=a5
s=53
return A.a(n.bw(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a5)
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
a9=A.GV(l,a0,new A.mr(null,B.a_,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bw(a9,t.r),$async$a5)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eU(a4,b2,a8,a7,m,a0,l,a2),$async$a5)
case 57:s=58
return A.a(n.c8(b1,b2,a8.a,a8.c,!1),$async$a5)
case 58:a5=t.N
b1.a_(new A.a2(b2,A.as([a8.a],a5)))
b1.a_(new A.a2("lp_conflicts",A.as([a8.a],a5)))
q=B.by
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.K(a6.a,A.dn(a7,J.x(a3.h(0,"archived"),!0),a5.CW,a5.cx,a9,a3),"id = ?",[a8.a]),$async$a5)
case 59:a5=a5.db
a5===$&&A.t()
s=60
return A.a(a5.f1(a4,b2,a8.a,h,i,a8.c,A.ai(a3)),$async$a5)
case 60:s=61
return A.a(n.tl(b1,b2,a8.a,a8.c),$async$a5)
case 61:b1.a_(new A.a2(b2,A.as([a8.a],t.N)))
b=A.bH(d,a3)
b.G(0,"id")
b1.bB(B.A,b,a8.a,a3,d,B.ad,b2)
q=B.a7
s=1
break
case 35:q=B.a9
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a5,r)},
eU(a,b,c,d,e,f,g,h){return this.rK(a,b,c,d,e,f,g,h)},
rK(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eU=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bg(d,A.fa(d,c))
k=A.bH(g,f)
j=A.P(k,A.n(k).c)
B.b.aI(j)
k=A.bH(g,l)
p=A.P(k,A.n(k).c)
B.b.aI(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ai(g)
n=t.N
m=t.X
s=2
return A.a(a.cf(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ai(f),"remote_json",A.ai(l),"dirty_local",B.h.a6(j,null),"dirty_remote",B.h.a6(p,null),"detected_at",q.c.ay.$0()],n,m),B.R),$async$eU)
case 2:s=3
return A.a(a.K("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(l),"base_hash",A.aq(B.l.v(B.e.v(A.ai(A.bg(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eU)
case 3:return A.e(null,r)}})
return A.f($async$eU,r)},
bw(a,b,c,d,e){return this.rD(a,b,c,d,e)},
rD(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bw=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a6(d.d,null)}catch(a1){o=t.N
e=B.h.a6(A.m(["raw",d.d.l(0)],o,o),null)}o=d.a
s=2
return A.a(a.U("lp_dead_letter","store = ? AND record_id = ?",[c,o]),$async$bw)
case 2:n=q.c
m=n.ay
l=t.N
k=t.X
s=3
return A.a(a.aD(0,"lp_dead_letter",A.m(["at",m.$0(),"kind","map_failure","store",c,"record_id",o,"error",a0,"payload_json",e],l,k)),$async$bw)
case 3:j=q.a.db
j===$&&A.t()
s=4
return A.a(j.bV(a,c,o),$async$bw)
case 4:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=g>=8?253402300799e3:m.$0()+B.c.L(n.mQ(g).a,1000)
n=d.c
s=j?5:7
break
case 5:s=8
return A.a(a.aD(0,"lp_sync_row",A.m(["store",c,"record_id",o,"remote_updated",n,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bw)
case 8:s=6
break
case 7:s=9
return A.a(a.K("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",n,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,o]),$async$bw)
case 9:case 6:return A.e(null,r)}})
return A.f($async$bw,r)},
dc(a,b,c,d,e,f,g,h){return this.tv(a,b,c,d,e,f,g,!0)},
tv(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$dc=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aD(0,"lp_sync_row",o),$async$dc)
case 5:s=3
break
case 4:s=6
return A.a(a.K("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$dc)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dc,r)},
c8(a,b,c,d,e){return this.tm(a,b,c,d,e)},
tl(a,b,c,d){return this.c8(a,b,c,d,!0)},
tm(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c8=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.v(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.K("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c8)
case 2:s=3
return A.a(p.K(q.a.au(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c8)
case 3:if(g>0)a.a_(new A.a2(b,A.as([c],o)))
return A.e(null,r)}})
return A.f($async$c8,r)},
fo(a,b){return this.wc(a,b)},
wc(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bE(b,!0,t.N)
n=A.a0(o),m=n.c,n=n.i("cq<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cq(o,0,500,n)
i.iW(o,0,500,m)
h=i.cW(0)
g=h.length
l&1&&A.H(o,18)
A.bd(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aY(new A.wG(p,a,h),j),$async$fo)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fo,r)}}
A.wI.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.wH(s.a,r,s.c,s.d,s.e),t.P)},
$S:23}
A.wH.prototype={
$1(a){return this.o5(a)},
o5(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.au(a1)
a3=A.j([],t.s)
for(p=q.d,o=J.aD(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dU(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aM(t.N)
a2=o.gu(p),a0=a0.Q
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.ms(i,c)){s=3
break}p=i.a
s=j.D(0,p)?5:7
break
case 5:s=8
return A.a(a.mA(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.ms(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.ey(b,a1,e,f),$async$$1)
case 10:d.a=new A.jh(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wC.prototype={
$0(){var s=this.b
return s.a.a2(new A.wB(this.a,s,this.c),t.P)},
$S:23}
A.wB.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.db
k===$&&A.t()
o=p.c
n=o.b
s=3
return A.a(k.bV(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tZ(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a0(o.c,k)<=0){s=1
break}s=7
return A.a(l.mB(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.wE.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.wD(r,s.b,s.c,s.d),t.P)},
$S:23}
A.wD.prototype={
$1(a){return this.o3(a)},
o3(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.j([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.r)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dU(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aM(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.D(0,g)?6:8
break
case 6:s=9
return A.a(o.mA(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a5(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.r)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wG.prototype={
$0(){var s=this.a
return s.a.a2(new A.wF(s,this.b,this.c),t.P)},
$S:23}
A.wF.prototype={
$1(a){return this.o4(a)},
o4(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.au(g).a
e=h.au(g).a.a
d=q.c
c=t.N
b=B.b.C(A.a7(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.v(c,t.G)
a1=J
s=2
return A.a(i.bD(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.CW,h=h.cx
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.F(m),A.bX(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.F(o,d)
s=5
return A.a(i.K("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.K(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a_(new A.a2(g,A.uR(d,A.a0(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.r)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dF(null,null,c,h)
p.F(0,j)
p.j(0,"hidden",!0)
a2.bB(B.c7,B.dr,k,p,j,B.av,g)}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b4.prototype={}
A.wJ.prototype={
fw(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.db
f===$&&A.t()
s=3
return A.a(f.f9(25,p.c.ay.$0()),$async$fw)
case 3:o=b
f=J.L(o)
if(f.gE(o)){q=B.a3
s=1
break}if(p.f){q=p.bc(o)
s=1
break}f=f.gu(o),n=B.a3
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dV(f.gn()),$async$fw)
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
return A.f($async$fw,r)},
dV(a){return this.rv(a)},
rv(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.db
l===$&&A.t()
m=m.x
s=3
return A.a(l.es(m,a.a,a.b),$async$dV)
case 3:o=c
if(o==null){q=B.a3
s=1
break}s=4
return A.a(l.bV(m,o.a,o.b),$async$dV)
case 4:n=c
if(n==null){q=B.a3
s=1
break}if(o.e==null){q=p.rt(o,n)
s=1
break}q=p.jB(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
bK(a,b,c,d,e){return this.qG(a,b,c,d,e)},
qF(a,b,c,d){return this.bK(a,b,c,!1,d)},
qD(a,b,c){return this.bK(a,b,c,!1,!1)},
qE(a,b,c,d){return this.bK(a,b,c,d,!1)},
qG(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bK=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bK)
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
s=k instanceof A.c_?8:10
break
case 8:n.e.$0()
q=B.ao
s=1
break
s=9
break
case 10:s=k instanceof A.cF?11:13
break
case 11:k=n.a.db
k===$&&A.t()
s=14
return A.a(k.na("forbidden_push",a.b,a.a),$async$bK)
case 14:q=B.d9
s=1
break
s=12
break
case 13:s=k instanceof A.eB?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.d4(a,"validation_push",m.a),$async$bK)
case 20:q=B.M
s=1
break
case 19:q=n.cw(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cK){q=n.dR(a,b,!e)
s=1
break}else if(k instanceof A.bo){l=k
q=n.cw(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bK,r)},
jA(a,b,c){return this.ru(a,b,c)},
rt(a,b){return this.jA(a,b,!1)},
ru(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bK(a,b,new A.wL(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jA,r)},
jF(a,b,c){return this.rL(a,b,c)},
rL(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jF=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qF(a,b,new A.wQ(p,a,p.a.au(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jF,r)},
jB(a,b){return this.rw(a,b)},
rw(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qD(a,b,new A.wO(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jB,r)},
d8(a,b,c,d){return this.rA(a,b,c,d)},
rz(a,b,c){return this.d8(a,b,c,!1)},
rA(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d8=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.le(a,c)
j=n.a.au(a.a).a
i=a.d
s=A.aq(B.l.v(B.e.v(A.ai(A.bg(j,A.fa(j,c))))).a)===A.aq(B.l.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eS(a,c),$async$d8)
case 5:q=B.a4
s=1
break
case 4:m=null
l=null
p=7
m=A.hY(b.r)
l=A.hY(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.C(f)
s=i instanceof A.d2?10:12
break
case 10:k=i
s=13
return A.a(n.d4(a,"corrupt_payload",k.a),$async$d8)
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
return A.a(n.dS(a,b,c,j,m,l),$async$d8)
case 14:g=a0
if(g==null){q=B.bf
s=1
break}q=n.bK(a,b,new A.wM(n,a,A.ai(A.bg(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d8,r)},
bc(a){return this.rs(a)},
rs(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$bc=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.j([],t.k1)
c0=t.N
c1=A.v(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.v(c0,c0)
c0=J.E(d0),d=n.a,c=d.Q,b=n.b,a=d.fx,a0=d.x
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.db
a2===$&&A.t()
s=5
return A.a(a2.es(a0,a1.a,a1.b),$async$bc)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bV(a0,m.a,m.b),$async$bc)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.u(A.A('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.as
a5===$&&A.t()
s=11
return A.a(a5.c_(a1),$async$bc)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.C(c8)
s=a1 instanceof A.cK?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lM(m,l),$async$bc)
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
case 14:s=a1 instanceof A.c_?18:20
break
case 18:n.e.$0()
q=B.ao
s=1
break
s=19
break
case 20:s=a1 instanceof A.cF?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.na("forbidden_push",m.b,a1),$async$bc)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bo?25:27
break
case 25:i=a1
s=28
return A.a(n.cw(m,l,i),$async$bc)
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
a7=new A.a3("")
A.ce(a7,A.bg(a4,A.fa(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c0()
a5=A.cU(a8)
a5.t(0,a1)
a5.q()
a9=A.aq(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c0()
a1=A.cU(a8)
a1.t(0,a5)
a1.q()
s=a9===A.aq(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eS(m,k),$async$bc)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.hY(l.r)
f=A.hY(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.C(c9)
s=a1 instanceof A.d2?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fm(e.a,a5,"corrupt_payload",m.d,a1),$async$bc)
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
return A.a(n.dS(m,l,k,a4,g,f),$async$bc)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a3("")
A.ce(a7,A.bg(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.fT(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.fT(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.c7(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$bc)
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
return A.f($async$bc,r)},
dS(a,b,c,d,e,f){return this.qS(a,b,c,d,e,f)},
qS(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n
var $async$dS=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.GV(e,f,new A.mr(null,B.a_,!1),a.b,A.bg(d,A.fa(d,c)),a.a)
s=3
return A.a(t.fr.b(o)?o:A.bw(o,t.r),$async$dS)
case 3:n=h
s=n.b?4:5
break
case 4:s=6
return A.a(p.hn(a,b,c,n,e,f),$async$dS)
case 6:q=null
s=1
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dS,r)},
c7(a,b,c){return this.t4(a,b,c)},
t4(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c7=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.as
a7===$&&A.t()
s=7
return A.a(a7.fv(b9),$async$c7)
case 7:m=c3
a7=t.N
l=A.v(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.r)(b9),++a9){k=b9[a9]
J.cX(l,k.a,k)}j=l
i=A.aM(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aO(i,h.a)){l=A.aS("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aS("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.j([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.W(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.ju(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c0()
b2=A.cU(b1)
b2.t(0,b0)
b2.q()
b2=A.aq(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aO(g,new A.jj(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.db
a8===$&&A.t()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.fm(b4,b2,b3,e.d,b0),$async$c7)
case 13:++b7
case 11:s=8
break
case 9:l=a7.db
l===$&&A.t()
s=14
return A.a(l.kX(g),$async$c7)
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
l=A.C(b8)
s=l instanceof A.ee?15:17
break
case 15:q=n.c2(b9,c0,c1)
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
return A.a(n.dV(n.lT(a0)),$async$c7)
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
case 23:q=new A.b4(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.c_?25:27
break
case 25:n.e.$0()
q=B.ao
s=1
break
s=26
break
case 27:s=l instanceof A.bo?28:30
break
case 28:a2=l
a3=a2 instanceof A.dO?a2:new A.eK("network error")
l=b9.length,a7=n.a,a8=a7.x,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.db
b0===$&&A.t()
s=34
return A.a(b0.bV(a8,a4.b,a4.c),$async$c7)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cw(n.lT(a4),a5,a3),$async$c7)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.r)(b9),++a9
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
return A.f($async$c7,r)},
c2(a,b,c){return this.pj(a,b,c)},
pj(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$c2=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.L(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.db
h===$&&A.t()
b3=g.b
s=5
return A.a(h.fm("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$c2)
case 5:q=B.M
s=1
break
case 4:a0=B.c.L(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.T(b5,0,a0),b3.b8(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.as
a6===$&&A.t()
s=13
return A.a(a6.fv(j),$async$c2)
case 13:i=b9
h=A.v(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.cX(h,g.a,g)}f=h
e=A.aM(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aO(e,d.a)){a6=A.aS("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aS("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.W(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.ju(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dW(a7,a8,a9,b0==null?b.d:b0),$async$c2)
case 19:++m
s=17
break
case 18:a7=a1.db
a7===$&&A.t()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.fm(b1,a9,b0,b.d,a8),$async$c2)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.C(b4)
s=a6 instanceof A.ee?21:23
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
ju(a,b){var s=b==null?a.d:b
return new A.ck(a.b,a.c,B.v,s,a.e,A.aq(B.l.v(B.e.v(a.d)).a),B.u,a.a,0,null)},
lT(a){return this.ju(a,null)},
dW(a,b,c,d){return this.t9(a,b,c,d)},
eS(a,b){return this.dW(a,b,null,null)},
t9(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dW=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(a.a).a
n=A.fa(o,b)
m=d==null
l=m?A.ai(A.bg(o,n)):d
p=p.db
p===$&&A.t()
s=2
return A.a(p.kX(A.j([new A.jj(a,l,b.c,A.aq(B.l.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dW)
case 2:return A.e(null,r)}})
return A.f($async$dW,r)},
le(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ew('record id "'+s+'" does not match requested "'+r+'"'))},
cw(a,b,c){return this.rT(a,b,c)},
rT(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cw=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.dO?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.db
o===$&&A.t()
s=5
return A.a(o.nb(c.a,a.b,"max_attempts",a.d,B.ap,a.a),$async$cw)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mR(l,k)
m=p.a.db
m===$&&A.t()
s=6
return A.a(m.wT(a.a,a.b,l,c.a,o.ay.$0()+B.c.L(n.a,1000)),$async$cw)
case 6:q=B.ao
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cw,r)},
d4(a,b,c){return this.pU(a,b,c)},
pT(a,b){return this.d4(a,b,null)},
pU(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d4=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.db
o===$&&A.t()
p=c==null?b:c
s=2
return A.a(o.fm(p,a.b,b,a.d,a.a),$async$d4)
case 2:return A.e(null,r)}})
return A.f($async$d4,r)},
dR(a,b,c){return this.qy(a,b,c)},
lM(a,b){return this.dR(a,b,!0)},
qy(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dR=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.au(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:m=null
l=null
p=7
m=A.hY(b.r)
l=A.hY(a.d)
p=2
s=9
break
case 7:p=6
h=o.pop()
i=A.C(h)
s=i instanceof A.d2?10:12
break
case 10:k=i
s=13
return A.a(n.d4(a,"corrupt_payload",k.a),$async$dR)
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
return A.a(n.h6(a,b,m,l),$async$dR)
case 14:q=B.bf
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dR,r)},
h6(a,b,c,d){return this.q9(a,b,c,d)},
q9(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$h6=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bH(c,d)
n=A.P(o,A.n(o).c)
B.b.aI(n)
p=b.r
if(p==null)p=A.ai(c)
s=2
return A.a(q.a.a2(new A.wK(q,a,p,d,n),t.P),$async$h6)
case 2:return A.e(null,r)}})
return A.f($async$h6,r)},
hn(a,b,c,d,e,f){return this.rJ(a,b,c,d,e,f)},
rJ(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hn=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.au(a.a).a
m=A.bg(n,A.fa(n,c))
l=A.bH(e,f)
k=A.P(l,A.n(l).c)
B.b.aI(k)
l=A.bH(e,m)
p=A.P(l,A.n(l).c)
B.b.aI(p)
s=2
return A.a(o.a2(new A.wP(q,a,b,e,f,m,k,p,n,c),t.P),$async$hn)
case 2:return A.e(null,r)}})
return A.f($async$hn,r)}}
A.wL.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.as
j===$&&A.t()
s=7
return A.a(j.hQ(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eS(k,m),$async$$0)
case 8:q=B.a4
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.C(h) instanceof A.ft){q=n.a.jF(n.b,n.c,n.d)
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
A.wQ.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.as
l===$&&A.t()
s=3
return A.a(l.c_(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.pT(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.aq(B.l.v(B.e.v(A.ai(A.bg(l,A.fa(l,o))))).a)===A.aq(B.l.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eS(m,o),$async$$0)
case 9:q=B.a4
s=1
break
case 8:q=n.d8(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.wO.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.as
l===$&&A.t()
s=3
return A.a(l.c_(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lM(m,p.c)
s=1
break}n.le(m,o)
if(o.c===m.e){l=p.c
q=n.qE(m,l,new A.wN(n,m,o,l),!0)
s=1
break}q=n.rz(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.wN.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.as
j===$&&A.t()
s=7
return A.a(j.fI(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eS(k,m),$async$$0)
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
$S:22}
A.wM.prototype={
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
return A.a(l.fI(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dW(j,b,p.e.a,m),$async$$0)
case 3:q=B.a4
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:22}
A.wK.prototype={
$1(a){return this.o6(a)},
o6(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cf(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ai(q.d),"remote_json",A.ai(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a6(q.e,null),"dirty_remote",B.h.a6(B.u,null),"detected_at",q.a.c.ay.$0()],k,j),B.R),$async$$1)
case 2:s=3
return A.a(p.K("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a_(new A.a2(n,A.as([m],k)))
a.a_(new A.a2("lp_conflicts",A.as([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wP.prototype={
$1(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cf(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ai(q.e),"remote_json",A.ai(o),"dirty_local",B.h.a6(q.r,null),"dirty_remote",B.h.a6(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.R),$async$$1)
case 2:s=3
return A.a(l.K("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(o),"base_hash",A.aq(B.l.v(B.e.v(A.ai(A.bg(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a_(new A.a2(j,A.as([k],n)))
a.a_(new A.a2("lp_conflicts",A.as([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.c8.prototype={
a4(){return"SyncEngineState."+this.b}}
A.h8.prototype={}
A.xH.prototype={
glg(){return 36},
dF(a){return this.oR(a)},
oR(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dF=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.j([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.fx,g=new A.bD(g,g.r,g.e,A.n(g).i("bD<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.ix(m),$async$dF)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glg():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.al(c.a+1,n.glg())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bH(m,a),$async$dF)
case 13:a5.aO(a6,a9)
case 11:++j
s=10
break
case 12:if(A.nO(h)!=null)A.u(A.A(u.L))
b=h.b
b===$&&A.t()
s=14
return A.a(b.aZ(new A.xI(c,n,m,a3),B.p,f),$async$dF)
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
return A.f($async$dF,r)},
bH(a,b){return this.oQ(a,b)},
oQ(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bH=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.Q("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aM(t.N)
m=B.c.iC(B.c.bp(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.as
g===$&&A.t()
s=5
return A.a(g.fl(a4,B.cT,h,null,o,m),$async$bH)
case 5:f=a7
g=J.L(f)
if(g.gE(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.j([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hm(a4,e),$async$bH)
case 6:c=a7
b=A.j([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aQ||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dh(a4,b),$async$bH)
case 9:i+=b.length
case 8:h=g.ga1(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.x
g=o+"%"
s=10
return A.a(k.ah("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bH)
case 10:a1=a7
a2=A.j([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.F(a)
if(!n.D(0,a)){if(J.x(d.h(0,"access_state"),"hidden")||J.x(d.h(0,"access_state"),"purged"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fo(a4,a2),$async$bH)
case 13:case 12:s=14
return A.a(k.ah("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bH)
case 14:a3=a7
k=J.L(a3)
s=k.gY(a3)?15:16
break
case 15:l=A.j([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.F(g))}s=17
return A.a(j.dh(a4,l),$async$bH)
case 17:case 16:q=new A.h8(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bH,r)},
hm(a,b){return this.rn(a,b)},
rn(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.v(g,t.o)
o=p.a.x,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bp(l,0,m))
j=B.b.C(A.a7(k.length,"?",!1,g),", ")
m=[a]
B.b.F(m,k)
e=J
s=6
return A.a(o.ah(u.m+j+")",m),$async$hm)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.F(h),A.h9(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hm,r)}}
A.xI.prototype={
$1(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.ez(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bo.prototype={
l(a){return A.dq(this).l(0)+": "+this.a},
$iG:1}
A.eK.prototype={}
A.dO.prototype={}
A.ju.prototype={}
A.c_.prototype={}
A.cF.prototype={}
A.cK.prototype={}
A.eB.prototype={}
A.fR.prototype={}
A.ft.prototype={}
A.xV.prototype={}
A.ee.prototype={}
A.h6.prototype={
gm(a){return this.b}}
A.d7.prototype={}
A.fT.prototype={}
A.ji.prototype={}
A.l0.prototype={
a4(){return"BackendHintKind."+this.b}}
A.cz.prototype={}
A.BX.prototype={
$2(a,b){return B.a.ir(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:146}
A.nH.prototype={
gnp(){return 1}}
A.xJ.prototype={
mR(a,b){var s,r
if(b!=null){s=this.re(b)
if(A.av(s))return A.cD(0,0,s<0?0:s)
if(s instanceof A.aF){r=s.a-this.ay.$0()
return r<=0?B.D:A.cD(0,r,0)}return B.aw}return A.GP(a,B.aw,B.S,this.at)},
mQ(a){return this.mR(a,null)},
re(a){var s=B.a.cm(a),r=A.jf(s,null)
if(r!=null)return r
return A.JU(s)}}
A.jh.prototype={}
A.jC.prototype={}
A.xX.prototype={
iw(a){return this.wP(a)},
wP(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eq("lp_sync_state",A.j(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iw)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=A.a6(J.W(l.gH(m),"cursor_updated"))
n=A.a6(J.W(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jh(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ey(a,b,c,d){return this.xF(a,b,c,d)},
xF(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ey=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aH("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ey)
case 5:s=m.bz(f)?2:4
break
case 2:s=6
return A.a(a.aD(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$ey)
case 6:s=3
break
case 4:s=7
return A.a(a.K("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$ey)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ey,r)},
ix(a){return this.wR(a)},
wR(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$ix=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.eq("lp_sync_state",A.j(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$ix)
case 3:n=c
m=J.L(n)
if(m.gE(n)){q=B.dx
s=1
break}o=A.be(J.W(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jC(o,A.be(J.W(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ix,r)},
ez(a,b,c,d){return this.xJ(a,b,c,d)},
xJ(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ez=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aH("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ez)
case 5:s=m.bz(f)?2:4
break
case 2:s=6
return A.a(a.aD(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$ez)
case 6:s=3
break
case 4:s=7
return A.a(a.K("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$ez)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ez,r)},
hM(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.x.b3("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hM)
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
q=new A.oP([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)}}
A.cO.prototype={
a4(){return"SyncState."+this.b}}
A.ff.prototype={
a4(){return"AccessState."+this.b}}
A.fP.prototype={
a4(){return"OutboxKind."+this.b}}
A.j9.prototype={
a4(){return"OpQueueKind."+this.b}}
A.Ci.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cN.prototype={}
A.xW.prototype={
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
p=A.fv(B.cD,A.F(p))
A.GK(j.h(0,"dirty_fields"))
o=A.be(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fv(B.cC,A.F(n))
A.a6(j.h(0,"op_id"))
m=A.be(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.be(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.be(j.h(0,"schema_ver"))
return new A.cN(i,s,r,q,p,o,n,m,l,k)},
$S:147}
A.ck.prototype={}
A.vJ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
s=j.h(0,"record_id")
s.toString
A.F(s)
r=j.h(0,"kind")
r.toString
r=A.fv(B.cM,A.F(r))
q=j.h(0,"payload_json")
q.toString
A.F(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.GK(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.F(m)
l=j.h(0,"created_at")
l.toString
A.ap(l)
k=j.h(0,"updated_at")
k.toString
A.ap(k)
return new A.ck(i,s,r,q,p,o,n,m,l,A.a6(j.h(0,"depends_on_op")))},
$S:148}
A.eA.prototype={}
A.vE.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ap(l)
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
q=A.fv(B.cH,A.F(q))
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
A.ap(m)
return new A.eA(l,s,r,q,p,o,n)},
$S:149}
A.Cg.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:52}
A.Ch.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:52}
A.bF.prototype={
a_(a){this.c.push(a)
this.a.Q.r+=a.b.a},
tQ(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bB(a,b,c,d,e,f,g){var s
if(this.a.a$.b.d==null)return
if(b==null){s=e==null?d:e
s=J.I6((s==null?B.j:s).gM(),new A.y8()).iD(0)}else s=b
this.tQ(new A.dN(g,c,f,a,e,d,s))},
kd(a,b,c,d,e,f){return this.bB(a,null,b,c,d,e,f)},
bA(a){var s=this.a
return new A.fl(s,s.au(a),new A.ir(this.b),this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.A("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cE(o,a,b)},
cE(a,b,c){return this.tD(a,b,c,c)},
tD(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cE=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cE)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.Q
k=e.r
p=5
d=A.Dd(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pu(new A.y7(a3,j,a4),null,A.m([$.kL(),j],f,f),a4.i("y<0>")),$async$cE)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cE)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cE)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cE)
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
if(a>m)B.b.iB(h,m,a)
a=g.length
if(a>l)B.b.iB(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cE,r)}}
A.y8.prototype={
$1(a){return a!=="id"},
$S:14}
A.y7.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.AD.prototype={}
A.lD.prototype={
a4(){return"DurabilityClass."+this.b}}
A.y_.prototype={
aZ(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.D,t._)
r.c.push(new A.hp(a,new A.aL(s,t.jk)))
return s.W(new A.y6(c),c)}return this.tf(a,b,c)},
tf(a,b,c){var s,r,q,p=this
if(p.a.at.a>0){s=p.c
if(s!=null)s.ki()}s=A.j([],t.i4)
r=new A.om(p,b,s)
p.c=r
r.x3()
q=new A.w($.D,t._)
s.push(new A.hp(a,new A.aL(q,t.jk)))
return q.W(new A.y2(c),c)},
wN(a,b){var s,r=this.a
if(r.at.a>0){s=this.c
if(s!=null)s.ki()}return r.e.aY(new A.y5(this,a,b),b)},
qW(){if(++this.d<64)return
this.d=0
A.c9(B.D,new A.y1(this))}}
A.y6.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.y2.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.y5.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.y4(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.y4.prototype={
$1(a){return this.oa(a,this.c)},
oa(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.Dd(p.a.a.a,a,A.j([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pu(new A.y3(p.b,o,n),null,A.m([$.kL(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(ra)")}}
A.y3.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.y1.prototype={
$0(){var s=this.a.a.a.e
s===$&&A.t()
s.iH().jZ(new A.y0())},
$S:0}
A.y0.prototype={
$1(a){},
$S:21}
A.om.prototype={
x3(){var s,r,q=this,p=new A.aL(new A.w($.D,t.D),t.h)
q.e=p
s=q.a.a
s.e.aY(new A.zr(q,p),t.H)
r=s.at
s=q.gvp()
if(r.a>0)A.c9(r,s)
else A.c9(B.D,s)},
ki(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.aj()},
cL(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cL=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jz()
$.kJ()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aZ&&b4.w!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:b5=b4.e
b5===$&&A.t()
s=5
return A.a(b5.nw("PRAGMA synchronous=FULL",null),$async$cL)
case 5:b1.b="FULL"
case 4:i=A.j([],t.gi)
h=A.j([],t.eb)
g=A.j([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.zq(m,i,h,l,g),t.P),$async$cL)
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
if((b8.a.a&30)!==0)A.u(A.A("Future already completed"))
b8.am(A.f2(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.u(A.A("Future already completed"))
b8.aE(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.fx,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.vW(a0.b)
b6.kc(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a1=f[b7]
b6.v4(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.C(c2)
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
if((b6.a.a&30)!==0)A.u(A.A("Future already completed"))
b6.am(A.f2(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.u(A.A("Future already completed"))
b6.am(A.f2(a2,a3))}}throw c2
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
return A.a(f.nw("PRAGMA synchronous=NORMAL",null),$async$cL)
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
a4=k.gv3();++f.a
f.d+=a4
b1.qW()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.r)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.u(A.A("Future already completed"))
a4.am(A.f2(new A.bm("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cL,r)}}
A.zr.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cL(),$async$$0)
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
A.zq.prototype={
$1(a){return this.ob(a)},
ob(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.Dd(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pu(new A.zo(a,a0),null,A.m([$.kL(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.eZ([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.C(a1)
l=A.ae(a1)
o.e.push(new A.eZ([B.b.gap(a.c),null,m,l]))
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
return A.a(A.pu(new A.zp(a0,k),null,A.m([$.kL(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.eZ([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.C(a2)
h=A.ae(a2)
e.push(new A.eZ([k,null,i,h]))
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
$S:44}
A.zo.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:53}
A.zp.prototype={
$0(){return this.a.a2(new A.zn(this.b),t.z)},
$S:53}
A.zn.prototype={
$1(a){return this.a.a.$1(a)},
$S:152}
A.hp.prototype={}
A.mX.prototype={
kY(a){return a.a===this.x.b.a},
fd(){var s=this.x
return s.ed(s.w==null&&!s.x?50:null).W(new A.x4(),t.J)},
mK(a){return A.MJ(a,new A.x3(this),this.x.r.length!==0)},
ne(a){var s=this.y
return s==null?null:s.t(0,a)},
kw(a,b){var s=this.y
return s==null?null:s.bf(a,b)},
iT(){var s=this.y=A.nn(this.gka(),new A.x5(this),null,null,!1,t.J)
return new A.b7(s,A.n(s).i("b7<1>"))},
f6(){this.l3()
var s=this.y
if(s!=null)s.q()}}
A.x4.prototype={
$1(a){return a.a},
$S:153}
A.x3.prototype={
$1(a){return this.a.a.Q.Q+=a},
$S:9}
A.x5.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e4(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mG.prototype={
kY(a){var s
if(a.a!==this.x.a.a)return!1
s=a.b
if(s.a!==0&&!s.D(0,this.y))return!1
return!0},
fd(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$fd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.t()
o=p.x.a
s=3
return A.a(l.gbq().b.aH(o.a,1,"id = ?",[p.y]),$async$fd)
case 3:n=b
l=J.L(n)
if(l.gE(n)){q=null
s=1
break}q=A.bX(o,l.gH(n),m.CW,m.cx)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
mK(a){return a==null?"<null>":A.aq(B.l.v(B.e.v(A.ai(a))).a)},
ne(a){var s=this.z
return s==null?null:s.t(0,a)},
kw(a,b){var s=this.z
return s==null?null:s.bf(a,b)},
iT(){var s=this.z=A.nn(this.gka(),new A.vC(this),null,null,!1,t.b)
return new A.b7(s,A.n(s).i("b7<1>"))},
f6(){this.l3()
var s=this.z
if(s!=null)s.q()}}
A.vC.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e4(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fk.prototype={
kw(a,b){},
az(){var s=this.a.a$.a
this.c=new A.b0(s,A.n(s).i("b0<1>")).aU(this.gqY())},
qZ(a){var s,r=this
if(!r.kY(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.A()
r.d=A.c9(r.b,r.gmv())},
e4(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$e4=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(m.r){s=1
break}m.e=!0
h=m.a.Q;++h.y
p=4
s=7
return A.a(m.fd(),$async$e4)
case 7:l=b
if(m.r){n=[1]
s=5
break}k=m.mK(l)
if(!J.x(k,m.w)){m.w=k;++h.z
m.ne(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.C(f)
i=A.ae(f)
if(!m.r)m.kw(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.A()
m.d=A.c9(m.b,m.gmv())}s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e4,r)},
f6(){var s,r=this
r.r=!0
s=r.d
if(s!=null)s.A()
r.f=!1
s=r.c
if(s!=null)s.A()}}
A.yK.prototype={
aY(a,b){var s,r=this;++r.b
r.lY()
s=new A.w($.D,b.i("w<0>"))
r.a=r.a.W(new A.yL(r,new A.aL(s,b.i("aL<0>")),a),t.H)
return s},
lY(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.yL.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.aC(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.C(i)
l=A.ae(i)
n.b.bQ(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lY()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:37}
A.hk.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.yz.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.eB)},
$S:45}
A.o3.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.yw.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.yu.prototype={
eP(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eP=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.i_()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a1(n.getDirectory(),l),$async$eP)
case 7:m=b
s=8
return A.a(A.a1(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eP)
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
return A.f($async$eP,r)},
hh(){var s=0,r=A.h(t.y),q,p=this,o
var $async$hh=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.w){q=!1
s=1
break}o=p.r
s=o==null?3:5
break
case 3:s=6
return A.a(p.eP(),$async$hh)
case 6:b=p.r=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
ba(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ba=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.x
if(h!=null){q=h
s=1
break}s=3
return A.a(n.hh(),$async$ba)
case 3:if(!b){q=null
s=1
break}p=5
m=A.i_()
if(m==null){q=null
s=1
break}j=t.m
s=8
return A.a(A.a1(m.getDirectory(),j),$async$ba)
case 8:l=b
f=A
s=9
return A.a(A.a1(l.getDirectoryHandle("localpocket_blobs",{create:!0}),j),$async$ba)
case 9:k=new f.oK(b)
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
return A.f($async$ba,r)},
gfi(){var s=0,r=A.h(t.y),q,p=this
var $async$gfi=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ba(),$async$gfi)
case 3:q=b!=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gfi,r)},
cl(a,b,c){return this.wD(a,b,c)},
iv(a){return this.cl(a,null,null)},
wD(a,a0,a1){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b
var $async$cl=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:f=new A.z8(A.j([],t.bs))
s=3
return A.a(A.kF(a,a0,a1,null,268435456,new A.yv(f)),$async$cl)
case 3:e=a3
d=f.kH()
s=4
return A.a(m.ba(),$async$cl)
case 4:c=a3
s=c!=null?5:7
break
case 5:l="tmp_"+e.a
p=8
s=11
return A.a(c.av(l,d),$async$cl)
case 11:s=12
return A.a(c.av(e.a,d),$async$cl)
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
p=14
s=17
return A.a(c.G(0,l),$async$cl)
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
if(h>134217728)A.u(A.i8(A.A("volatile blob memory cap exceeded: would reach "+h+" of 134217728 bytes"),j))
m.d.j(0,j,i)
m.e+=g
case 6:q=e.a
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cl,r)},
cQ(a){return this.wn(a)},
wn(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cQ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.l9(a)
j=n.d
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.D7(j,t.L)
s=1
break}s=3
return A.a(n.ba(),$async$cQ)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.er(a),$async$cQ)
case 10:l=c
j=A.D7(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.C(h)
if(!(k instanceof A.fi))throw A.b(A.i8(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.A("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cQ,r)},
df(a){return this.ut(a)},
ut(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$df=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.l9(a)
l=o.d.G(0,a)
if(l!=null)o.e=o.e-l.length
s=2
return A.a(o.ba(),$async$df)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.G(0,a),$async$df)
case 9:q=1
s=8
break
case 6:q=5
j=p.pop()
m=A.C(j)
if(!(m instanceof A.fi))throw A.b(A.i8(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$df,r)},
br(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$br=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l9(a)
if(p.d.I(a)){q=!0
s=1
break}s=3
return A.a(p.ba(),$async$br)
case 3:o=c
if(o!=null){q=o.br(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$br,r)},
bk(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l9(a)
o=p.d
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.ba(),$async$bk)
case 3:n=c
if(n!=null){q=n.bk(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bk,r)},
e9(a){return this.u6(a)},
u6(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e9=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.ba(),$async$e9)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.ek(),$async$e9)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.I3(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.G(0,l),$async$e9)
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
fj(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fj=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.d
i=A.d1(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.ba(),$async$fj)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ek(),$async$fj)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.DU()
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
j=A.P(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fj,r)}}
A.yv.prototype={
$1(a){return this.a.t(0,a)},
$S:11}
A.oK.prototype={
er(a){return this.wO(a)},
wO(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$er=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a1(n.a.getFileHandle(a,{create:!1}),i),$async$er)
case 7:m=c
s=8
return A.a(A.a1(m.getFile(),i),$async$er)
case 8:l=c
s=9
return A.a(A.a1(l.arrayBuffer(),t.a),$async$er)
case 9:k=c
i=A.bR(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.C(g)
if(A.Fe(j))throw A.b(A.Ec(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$er,r)},
av(a,b){return this.xE(a,b)},
xE(a1,a2){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$av=A.c(function(a3,a4){if(a3===1){p.push(a4)
s=q}for(;;)switch(s){case 0:h=o.a
g=t.m
a0=A
s=3
return A.a(A.a1(h.getFileHandle(a1,{create:!0}),g),$async$av)
case 3:s=2
return A.a(a0.a1(a4.createWritable(),g),$async$av)
case 2:f=a4
q=5
j=t.X
s=8
return A.a(A.a1(f.write(t.a.a(B.f.gab(a2))),j),$async$av)
case 8:s=9
return A.a(A.a1(f.close(),j),$async$av)
case 9:q=1
s=7
break
case 5:q=4
e=p.pop()
n=A.C(e)
q=11
s=14
return A.a(A.a1(f.abort(),t.X),$async$av)
case 14:q=4
s=13
break
case 11:q=10
d=p.pop()
s=13
break
case 10:s=4
break
case 13:throw A.b(A.i8(n,a1))
s=7
break
case 4:s=1
break
case 7:q=16
s=19
return A.a(A.a1(h.getFileHandle(a1,{create:!1}),g),$async$av)
case 19:m=a4
s=20
return A.a(A.a1(m.getFile(),g),$async$av)
case 20:l=a4
g=a2.length
s=!J.x(l.size,g)?21:22
break
case 21:q=24
s=27
return A.a(A.m_(h,a1),$async$av)
case 27:q=16
s=26
break
case 24:q=23
c=p.pop()
s=26
break
case 23:s=16
break
case 26:g=A.i8(A.A("write verification failed: persisted "+A.p(A.C0(l,"size"))+" of "+g+" bytes"),a1)
throw A.b(g)
case 22:q=1
s=18
break
case 16:q=15
b=p.pop()
g=A.C(b)
s=g instanceof A.i7?28:30
break
case 28:throw b
s=29
break
case 30:k=g
q=32
s=35
return A.a(A.m_(h,a1),$async$av)
case 35:q=15
s=34
break
case 32:q=31
a=p.pop()
s=34
break
case 31:s=15
break
case 34:throw A.b(A.i8(k,a1))
case 29:s=18
break
case 15:s=1
break
case 18:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$av,r)},
G(a,b){return this.wZ(0,b)},
wZ(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$G=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.m_(o.a,b),$async$G)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.C(l)
if(A.Fe(n))throw A.b(A.Ec(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$G,r)},
br(a){return this.ve(a)},
ve(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$br=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a1(n.a.getFileHandle(a,{create:!1}),t.m),$async$br)
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
return A.f($async$br,r)},
bk(a){return this.ow(a)},
ow(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bk=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a1(n.a.getFileHandle(a,{create:!1}),k),$async$bk)
case 7:m=c
s=8
return A.a(A.a1(m.getFile(),k),$async$bk)
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
return A.f($async$bk,r)},
ek(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ek=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.j([],t.s)
j=new A.cv(A.cw(A.Et(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ek)
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
return A.a(j.A(),$async$ek)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ek,r)},
$iEP:1}
A.uS.prototype={
cM(a,b){return this.vy(a,b)},
vy(a,b){var s=0,r=A.h(t.X),q,p
var $async$cM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.ps(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cM,r)},
iq(a,b,c,d){return this.wo(a,b,c,d)},
wo(a7,a8,a9,b0){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$iq=A.c(function(b1,b2){if(b1===1){o.push(b2)
s=p}for(;;)switch(s){case 0:a2=a7.wk(a8,a9)
a3=t.N
a4=new A.im(A.v(a3,t.fw),a2)
a5=!1
p=4
d=b0==null
n=A.H2(d?null:A.pq(b0),"backupDbName")
if(n!=null&&typeof n!="string"){a3=A.bS('"backupDbName" must be a string.')
throw A.b(a3)}c=A.a6(n)
m=c==null?a8:c
a4.e=new A.uT(m)
a4.f=new A.uU(m)
a2.O("PRAGMA journal_mode=TRUNCATE")
b=a2.om("PRAGMA journal_mode")
l=b.gH(b).b[0]
if(J.Z(l).toLowerCase()!=="truncate"){a3=A.A("journal_mode read-back was "+A.p(l)+", expected truncate")
throw A.b(a3)}k=A.Ns(d?null:A.pq(b0))
a=t.bE.a(J.W(k,"stores"))
j=a==null?A.j([],t.aw):a
a0=A.be(J.W(k,"maxDocBytes"))
i=a0==null?19e5:a0
b=A.FW(J.W(k,"destructiveBackup"))
h=b!==!1
g=A.Nr(A.H2(d?null:A.pq(b0),"fieldCipher"))
if(A.Na(j,g)){a3=A.ac("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a3)}f=new A.yu(A.v(a3,t.p))
s=7
return A.a(A.d_(f,a4,h,g,i,a8,B.aC,j,B.bT),$async$iq)
case 7:e=b2
a5=!0
a3=t.be
q=new A.mp(a2,new A.yE(e,A.aM(a3)),A.v(t.eg,a3))
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
return A.f($async$iq,r)}}
A.uT.prototype={
$1(a){return A.pj(this.a,a)},
$S:154}
A.uU.prototype={
$1(a){return A.pk(this.a,a)},
$S:155}
A.mp.prototype={
cM(a,b){return this.vz(a,b)},
vz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.CS(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.J4(j)
if(o==null){q=A.CS(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.e
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.on(a)
k.a=l
n.j(0,a,l)
a.b.a.W(new A.v2(k,p,a),t.H)}i=A
s=3
return A.a(p.d.i6(k.a,o),$async$cM)
case 3:q=i.J5(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cM,r)}}
A.v2.prototype={
$1(a){var s=this.b
s.e.G(0,this.c)
s.d.d.G(0,this.a.a)},
$S:38}
A.on.prototype={
kc(a){var s=this,r=s.b
if(r>=128)return
s.b=r+1
s.a.hR(A.ps(a)).b5(new A.zx(s),new A.zy(s),t.H)},
$io7:1}
A.zx.prototype={
$1(a){--this.a.b},
$S:156}
A.zy.prototype={
$1(a){--this.a.b},
$S:29}
A.C2.prototype={
$1(a){return B.b.ca(a.c,new A.C1())},
$S:157}
A.C1.prototype={
$1(a){return a.e},
$S:54}
A.yB.prototype={
wq(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.bS('Invalid "'+a+'" argument: expected '+A.bI(b).l(0)+", got "+J.bY(s).l(0)+"."))
return b.a(s)}}
A.hl.prototype={}
A.jJ.prototype={}
A.eN.prototype={}
A.BS.prototype={
$2(a,b){var s,r,q=J.Z(a)
if(t.f.b(b))this.a.j(0,q,A.f6(b))
else{s=this.a
if(t.j.b(b)){r=J.bZ(b,new A.BR(),t.z)
r=A.P(r,r.$ti.i("a_.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:30}
A.BR.prototype={
$1(a){return t.f.b(a)?A.f6(a):a},
$S:41}
A.o6.prototype={
he(a,b){return this.qu(a,b)},
qu(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$he=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.bS('Contract envelope requires a "request" map.'))
j=A.f6(b)
i=j.h(0,"tag")
if(typeof i!="string")A.u(A.N("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.u(A.N("Missing request payload."))
g=A.kB(h)
j=t.G
if(!j.b(g))A.u(A.N("Malformed request payload."))
f=A.Ir(i,g)
if(f==null)A.u(A.N("Unknown request tag: "+i))
m=f
p=4
e=n.c.r
e===$&&A.t()
s=7
return A.a(e.vt(m),$async$he)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gV(),"payload",A.f7(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.C(a)
j=A.m(["error",A.N_(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$he,r)}}
A.yE.prototype={
i6(a,b){return this.vN(a,b)},
vN(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$i6=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:n.d.t(0,a)
if(n.e==null){i=n.c.r
i===$&&A.t()
i=i.b
n.e=new A.b0(i,A.n(i).i("b0<1>")).aU(new A.yF(n))}m=null
try{m=A.K2(b)}catch(e){l=A.C(e)
i=J.Z(l)
q=new A.eN("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eN("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jb(a,m),$async$i6)
case 7:k=d
i=m.b
q=new A.jJ(k,i)
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
q=new A.eN("localpocket",g,A.m(["type",A.BG(j)],t.N,t.X),i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i6,r)},
jb(a,b){return this.pX(a,b)},
pX(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
if(l===$){o=A.m(["open",p.gqz(),"contract_request",p.gqt()],t.N,t.n1)
p.f!==$&&A.Co()
p.f=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.bS("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jb,r)}}
A.yF.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gV(),"payload",A.f7(a.p())],r,q)],r,q)
for(r=this.a.d,r=A.hy(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).kc(p)}},
$S:160}
A.o5.prototype={
hf(a,b){return this.qA(a,b)},
qA(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$hf=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.yB(a3).wq("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.v(a3,a3)
n=t.f
if(n.b(a5))a5.a8(0,new A.yC(o))
s=a4!=null?3:4
break
case 3:m=J.E(a4),l=p.c,k=l.fx,j=t.X,i=l.CW==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.u(A.a9("Schema must be a map: "+A.p(h),null,null))
g=A.qa(A.f6(h),j)
if(B.b.ca(g.c,new A.yD())&&i)throw A.b(A.ac('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.D3(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a3("")
A.ce(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c0()
a0=A.cU(a)
a0.t(0,b)
a0.q()
a0=d!==A.aq(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.bS('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.I(e)?7:9
break
case 7:e=l.f
e===$&&A.t()
s=10
return A.a(e.aR(g),$async$hf)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.u(A.A('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a3("")
A.ce(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c0()
a0=A.cU(a)
a0.t(0,b)
a0.q()
a0=A.aq(a.a.a)
c=new A.a3("")
A.ce(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c0()
a2=A.cU(a)
a2.t(0,b)
a2.q()
if(a0!==A.aq(a.a.a))throw A.b(A.bS('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)}}
A.yC.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:66}
A.yD.prototype={
$1(a){return a.e},
$S:54}
A.pb.prototype={}
A.qL.prototype={
tL(a){var s,r=null
A.Gx("absolute",A.j([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b4(a)>0&&!s.cN(a)
if(s)return a
s=A.GJ()
return this.n8(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
uw(a){var s,r,q=A.dM(a,this.a)
q.fC()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kD(s)
q.e.pop()
q.fC()
return q.l(0)},
n8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.j([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Gx("join",s)
return this.w_(new A.dW(s,t.v))},
w_(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.cS(s,new A.qM(),a.$ti.i("cS<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cN(m)&&o){l=A.dM(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.B(k,0,q.ew(k,!0))
l.b=n
if(q.fp(n))l.e[0]=q.gdC()
n=l.l(0)}else if(q.b4(m)>0){o=!q.cN(m)
n=m}else{if(!(m.length!==0&&q.k5(m[0])))if(p)n+=q.gdC()
n+=m}p=q.fp(m)}return n.charCodeAt(0)==0?n:n},
d_(a,b){var s=A.dM(b,this.a),r=s.d,q=A.a0(r).i("at<1>")
r=A.P(new A.at(r,new A.qN(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aD(r,0,q)
return s.d},
eo(a){var s
if(!this.qV(a))return a
s=A.dM(a,this.a)
s.kv()
return s.l(0)},
qV(a){var s,r,q,p,o,n,m,l=this.a,k=l.b4(a)
if(k!==0){if(l===$.pw())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cg(n)){if(l===$.pw()&&n===47)return!0
if(q!=null&&l.cg(q))return!0
if(q===46)m=o==null||o===46||l.cg(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cg(q))return!0
if(q===46)l=o==null||l.cg(o)||o===46
else l=!1
if(l)return!0
return!1},
wX(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b4(a)
if(l<=0)return o.eo(a)
s=A.GJ()
if(m.b4(s)<=0&&m.b4(a)>0)return o.eo(a)
if(m.b4(a)<=0||m.cN(a))a=o.tL(a)
if(m.b4(a)<=0&&m.b4(s)>0)throw A.b(A.EQ(n+a+'" from "'+s+'".'))
r=A.dM(s,m)
r.kv()
q=A.dM(a,m)
q.kv()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kz(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kz(l[0],p[0])}else l=!1
if(!l)break
B.b.iA(r.d,0)
B.b.iA(r.e,1)
B.b.iA(q.d,0)
B.b.iA(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.EQ(n+a+'" from "'+s+'".'))
l=t.N
B.b.ko(q.d,0,A.a7(p,"..",!1,l))
p=q.e
p[0]=""
B.b.ko(p,1,A.a7(r.d.length,m.gdC(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga1(m)==="."){B.b.kD(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fC()
return q.l(0)},
nh(a){var s,r,q=this,p=A.Gh(a)
if(p.gb1()==="file"&&q.a===$.kK())return p.l(0)
else if(p.gb1()!=="file"&&p.gb1()!==""&&q.a!==$.kK())return p.l(0)
s=q.eo(q.a.ky(A.Gh(p)))
r=q.wX(s)
return q.d_(0,r).length>q.d_(0,s).length?s:r}}
A.qM.prototype={
$1(a){return a!==""},
$S:14}
A.qN.prototype={
$1(a){return a.length!==0},
$S:14}
A.BC.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:161}
A.tI.prototype={
oj(a){var s=this.b4(a)
if(s>0)return B.a.B(a,0,s)
return this.cN(a)?a[0]:null},
kz(a,b){return a===b}}
A.mJ.prototype={
gjX(){var s=this,r=t.N,q=new A.mJ(s.a,s.b,s.c,A.bE(s.d,!0,r),A.bE(s.e,!0,r))
q.fC()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga1(r)},
fC(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga1(s)===""))break
B.b.kD(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kv(){var s,r,q,p,o,n=this,m=A.j([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.ko(m,0,A.a7(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.a7(m.length+1,s.gdC(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fp(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pw())n.b=A.B(r,"/","\\")
n.fC()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga1(q)
return o.charCodeAt(0)==0?o:o}}
A.mK.prototype={
l(a){return"PathException: "+this.a},
$iG:1}
A.xG.prototype={
l(a){return this.gaQ()}}
A.wn.prototype={
k5(a){return B.a.D(a,"/")},
cg(a){return a===47},
fp(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
ew(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b4(a){return this.ew(a,!1)},
cN(a){return!1},
ky(a){var s
if(a.gb1()===""||a.gb1()==="file"){s=a.gbt()
return A.Du(s,0,s.length,B.o,!1)}throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaQ(){return"posix"},
gdC(){return"/"}}
A.yg.prototype={
k5(a){return B.a.D(a,"/")},
cg(a){return a===47},
fp(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bR(a,"://")&&this.b4(a)===s},
ew(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.ce(a,"/",B.a.ad(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.GM(a,q+1)
return p==null?q:p}}return 0},
b4(a){return this.ew(a,!1)},
cN(a){return a.length!==0&&a.charCodeAt(0)===47},
ky(a){return a.l(0)},
gaQ(){return"url"},
gdC(){return"/"}}
A.yA.prototype={
k5(a){return B.a.D(a,"/")},
cg(a){return a===47||a===92},
fp(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
ew(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.ce(a,"\\",2)
if(s>0){s=B.a.ce(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.GS(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b4(a){return this.ew(a,!1)},
cN(a){return this.b4(a)===1},
ky(a){var s,r
if(a.gb1()!==""&&a.gb1()!=="file")throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbt()
if(a.gdj()===""){if(s.length>=3&&B.a.S(s,"/")&&A.GM(s,1)!=null)s=B.a.kF(s,"/","")}else s="\\\\"+a.gdj()+s
r=A.B(s,"/","\\")
return A.Du(r,0,r.length,B.o,!1)},
u8(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kz(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.u8(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaQ(){return"windows"},
gdC(){return"\\"}}
A.xp.prototype={
gm(a){return this.c.length},
gw0(){return this.b.length},
oW(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.H(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eB(a){var s,r=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aZ("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga1(s))return s.length-1
if(r.qM(a)){s=r.d
s.toString
return s}return r.d=r.pi(a)-1},
qM(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pi(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.L(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iR(a){var s,r,q=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aZ("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.eB(a)
r=q.b[s]
if(r>a)throw A.b(A.aZ("Line "+s+" comes after offset "+a+"."))
return a-r},
fP(a){var s,r,q,p
if(a<0)throw A.b(A.aZ("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aZ("Line "+a+" must be less than the number of lines in the file, "+this.gw0()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aZ("Line "+a+" doesn't have 0 columns."))
return q}}
A.lV.prototype={
ga3(){return this.a.a},
gag(){return this.a.eB(this.b)},
gaq(){return this.a.iR(this.b)},
gar(){return this.b}}
A.hv.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.CF(this.a,this.b)},
gN(){return A.CF(this.a,this.c)},
gaN(){return A.dS(B.y.T(this.a.c,this.b,this.c),0,null)},
gbg(){var s=this,r=s.a,q=s.c,p=r.eB(q)
if(r.iR(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dS(B.y.T(r.c,r.fP(p),r.fP(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fP(p+1)
return A.dS(B.y.T(r.c,r.fP(r.eB(s.b)),q),0,null)},
a0(a,b){var s
if(!(b instanceof A.hv))return this.oL(0,b)
s=B.c.a0(this.b,b.b)
return s===0?B.c.a0(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hv))return s.oK(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gJ(a){return A.c4(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$id9:1}
A.te.prototype={
vT(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mx(B.b.gH(a1).c)
s=a.e
r=A.a7(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hC("\u2575")
q.a+="\n"
a.mx(l)}else if(m.b+1!==n.b){a.tK("...")
q.a+="\n"}}for(l=n.d,k=A.a0(l).i("bv<1>"),j=new A.bv(l,k),j=new A.an(j,j.gm(0),k.i("an<a_.E>")),k=k.i("a_.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gag()!==f.gN().gag()&&f.gR().gag()===i&&a.qO(B.a.B(h,0,f.gR().gaq()))){e=B.b.bS(r,a0)
if(e<0)A.u(A.Q(A.p(r)+" contains no null elements.",a0))
r[e]=g}}a.tJ(i)
q.a+=" "
a.tI(n,r)
if(s)q.a+=" "
d=B.b.n2(l,new A.tz())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gag()===i?j.gR().gaq():0
a.tG(h,g,j.gN().gag()===i?j.gN().gaq():h.length,p)}else a.hE(h)
q.a+="\n"
if(k)a.tH(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hC("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mx(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hC("\u2577")
else{q.hC("\u250c")
q.bm(new A.tm(q),"\x1b[34m")
s=q.r
r=" "+$.i1().nh(a)
s.a+=r}q.r.a+="\n"},
hA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gag()
i=k?null:l.a.gN().gag()
if(s&&l===c){h.bm(new A.tt(h,j,a),r)
n=!0}else if(n)h.bm(new A.tu(h,l),r)
else if(k)if(g.a)h.bm(new A.tv(h),g.b)
else o.a+=" "
else h.bm(new A.tw(g,h,c,j,a,l,i),p)}},
tI(a,b){return this.hA(a,b,null)},
tG(a,b,c,d){var s=this
s.hE(B.a.B(a,0,b))
s.bm(new A.tn(s,a,b,c),d)
s.hE(B.a.B(a,c,a.length))},
tH(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gag()===p.gN().gag()){r.jT()
p=r.r
p.a+=" "
r.hA(a,c,b)
if(c.length!==0)p.a+=" "
r.my(b,c,r.bm(new A.to(r,a,b),q))}else{s=a.b
if(p.gR().gag()===s){if(B.b.D(c,b))return
A.Ny(c,b)
r.jT()
p=r.r
p.a+=" "
r.hA(a,c,b)
r.bm(new A.tp(r,a,b),q)
p.a+="\n"}else if(p.gN().gag()===s){p=p.gN().gaq()
if(p===a.a.length){A.H3(c,b)
return}r.jT()
r.r.a+=" "
r.hA(a,c,b)
r.my(b,c,r.bm(new A.tq(r,!1,a,b),q))
A.H3(c,b)}}},
mw(a,b,c){var s=c?0:1,r=this.r
s=B.a.bj("\u2500",1+b+this.j8(B.a.B(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tF(a,b){return this.mw(a,b,!0)},
my(a,b,c){this.r.a+="\n"
return},
hE(a){var s,r,q,p
for(s=new A.cg(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<I.E>")),q=this.r,r=r.i("I.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bj(" ",4)
else{p=A.bu(p)
q.a+=p}}},
hD(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bm(new A.tx(s,this,a),"\x1b[34m")},
hC(a){return this.hD(a,null,null)},
tK(a){return this.hD(null,null,a)},
tJ(a){return this.hD(null,a,null)},
jT(){return this.hD(null,null,null)},
j8(a){var s,r,q,p
for(s=new A.cg(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qO(a){var s,r,q
for(s=new A.cg(a),r=t.E,s=new A.an(s,s.gm(0),r.i("an<I.E>")),r=r.i("I.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
py(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bm(a,b){return this.py(a,b,t.z)}}
A.ty.prototype={
$0(){return this.a},
$S:162}
A.tg.prototype={
$1(a){var s=a.d
return new A.at(s,new A.tf(),A.a0(s).i("at<1>")).gm(0)},
$S:245}
A.tf.prototype={
$1(a){var s=a.a
return s.gR().gag()!==s.gN().gag()},
$S:42}
A.th.prototype={
$1(a){return a.c},
$S:165}
A.tj.prototype={
$1(a){var s=a.a.ga3()
return s==null?new A.l():s},
$S:166}
A.tk.prototype={
$2(a,b){return a.a.a0(0,b.a)},
$S:167}
A.tl.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.j([],t.dg)
for(s=J.aD(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbg()
n=A.BW(o,p.gaN(),p.gR().gaq())
n.toString
m=B.a.hF("\n",B.a.B(o,0,n)).gm(0)
l=p.gR().gag()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga1(b).b)b.push(new A.cu(j,l,d,A.j([],q)));++l}}i=A.j([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.r)(b),++k){j=b[k]
h&1&&A.H(i,16)
B.b.rQ(i,new A.ti(j),!0)
f=i.length
for(q=s.bl(c,g),p=q.$ti,q=new A.an(q,q.gm(0),p.i("an<a_.E>")),n=j.b,p=p.i("a_.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gag()>n)break
i.push(e)}g+=i.length-f
B.b.F(j.d,i)}return b},
$S:168}
A.ti.prototype={
$1(a){return a.a.gN().gag()<this.a.b},
$S:42}
A.tz.prototype={
$1(a){return!0},
$S:42}
A.tm.prototype={
$0(){this.a.r.a+=B.a.bj("\u2500",2)+">"
return null},
$S:0}
A.tt.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.tu.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.tv.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.tw.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bm(new A.tr(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bm(new A.ts(r,o),p.b)}}},
$S:2}
A.tr.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.ts.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.tn.prototype={
$0(){var s=this
return s.a.hE(B.a.B(s.b,s.c,s.d))},
$S:0}
A.to.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gaq(),l=n.gN().gaq()
n=this.b.a
s=q.j8(B.a.B(n,0,m))
r=q.j8(B.a.B(n,m,l))
m+=s*3
n=(p.a+=B.a.bj(" ",m))+B.a.bj("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.tp.prototype={
$0(){return this.a.tF(this.b,this.c.a.gR().gaq())},
$S:0}
A.tq.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bj("\u2500",3)
else r.mw(s.c,Math.max(s.d.a.gN().gaq()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.tx.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.ws(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.br.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gag()+":"+s.gR().gaq()+"-"+s.gN().gag()+":"+s.gN().gaq())
return s.charCodeAt(0)==0?s:s}}
A.A8.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.BW(o.gbg(),o.gaN(),o.gR().gaq())!=null)){s=A.nf(o.gR().gar(),0,0,o.ga3())
r=o.gN().gar()
q=o.ga3()
p=A.MT(o.gaN(),10)
o=A.xq(s,A.nf(r,A.Fv(o.gaN()),p,q),o.gaN(),o.gaN())}return A.Kr(A.Kt(A.Ks(o)))},
$S:169}
A.cu.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.C(this.d,", ")+")"}}
A.co.prototype={
kb(a){var s=this.a
if(!J.x(s,a.ga3()))throw A.b(A.Q('Source URLs "'+A.p(s)+'" and "'+A.p(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){var s=this.a
if(!J.x(s,b.ga3()))throw A.b(A.Q('Source URLs "'+A.p(s)+'" and "'+A.p(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dq(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.p(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaw:1,
ga3(){return this.a},
gar(){return this.b},
gag(){return this.c},
gaq(){return this.d}}
A.ng.prototype={
kb(a){if(!J.x(this.a.a,a.ga3()))throw A.b(A.Q('Source URLs "'+A.p(this.ga3())+'" and "'+A.p(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){if(!J.x(this.a.a,b.ga3()))throw A.b(A.Q('Source URLs "'+A.p(this.ga3())+'" and "'+A.p(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dq(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.p(p==null?"unknown source":p)+":"+(q.eB(r)+1)+":"+(q.iR(r)+1))+">"},
$iaw:1,
$ico:1}
A.ni.prototype={
oX(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga3(),q.ga3()))throw A.b(A.Q('Source URLs "'+A.p(q.ga3())+'" and  "'+A.p(r.ga3())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.Q("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.kb(r))throw A.b(A.Q('Text "'+s+'" must be '+q.kb(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaN(){return this.c}}
A.nj.prototype={
gik(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gag()+1)+", column "+(p.gR().gaq()+1)
if(p.ga3()!=null){s=p.ga3()
r=$.i1()
s.toString
s=o+(" of "+r.nh(s))
o=s}o+=": "+this.a
q=p.vU(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iG:1}
A.h2.prototype={
gar(){var s=this.b
s=A.CF(s.a,s.b)
return s.b},
$ibk:1,
gfU(){return this.c}}
A.h3.prototype={
ga3(){return this.gR().ga3()},
gm(a){return this.gN().gar()-this.gR().gar()},
a0(a,b){var s=this.gR().a0(0,b.gR())
return s===0?this.gN().a0(0,b.gN()):s},
vU(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.IM(s,a).vT()},
P(a,b){if(b==null)return!1
return b instanceof A.h3&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gJ(a){return A.c4(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dq(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaN()+'">'},
$iaw:1}
A.d9.prototype={
gbg(){return this.d}}
A.jw.prototype={
a4(){return"SqliteUpdateKind."+this.b}}
A.cp.prototype={
gJ(a){return A.c4(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.cp&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.c6.prototype={
l(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.p(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.bZ(p,new A.xv(),t.N).C(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iG:1}
A.xv.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.Z(a)},
$S:170}
A.kS.prototype={}
A.rb.prototype={
tt(){var s=this,r=s.d
return r==null?s.d=new A.e4(s,A.j([],t.fU),new A.rk(s),new A.rl(s),t.jy):r},
rU(){var s=this,r=s.e
return r==null?s.e=new A.e4(s,A.j([],t.lw),new A.rh(s),new A.ri(s),t.lU):r},
pA(){var s=this,r=s.f
return r==null?s.f=new A.e4(s,A.j([],t.lw),new A.rd(s),new A.re(s),t.ag):r},
ug(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.u(A.az(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b9(m))
r=n.a
q=r.e6(s,1)
s=r.d
p=A.DF(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.d6(new A.rm(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.Cn(this,p,o,o,o)},
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
r=s.l_()
q=r!==0?A.DJ(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aG(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.u(A.A("This database has already been closed"))
r=p.b
q=r.a
s=q.e6(B.e.v(a),1)
q=q.d
r=A.DF(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.Cn(p,r,"executing",a,b)}else{s=p.it(a,!0)
try{s.ec(new A.bN(b))}finally{s.q()}}},
O(a){return this.aG(a,B.n)},
rj(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.u(A.A("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cF(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.yt(r,p,n,o)
l=A.j([],t.lE)
k=new A.rf(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.l1(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.Cn(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.L(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h4(f,e,new A.dk(!1).d3(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.l1(j,r-j,0)
n=q.buffer
h=B.c.L(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h4(f,e,""))
k.$0()
throw A.b(A.az(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.az(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
it(a,b){var s=this.rj(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.az(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
wy(a){return this.it(a,!1)},
on(a,b){var s,r=this.it(a,!0)
try{s=r.kV(new A.bN(b))
return s}finally{r.q()}},
om(a){return this.on(a,B.n)}}
A.rk.prototype={
$0(){var s=this.a,r=s.b
r.a.mP(r.b,new A.rj(s))},
$S:0}
A.rj.prototype={
$3(a,b,c){var s=A.JP(a)
if(s==null)return
this.a.d.k9(new A.cp(s,b,c))},
$S:171}
A.rl.prototype={
$0(){var s=this.a.b
s.a.mP(s.b,null)
return null},
$S:0}
A.rh.prototype={
$0(){var s=this.a,r=s.b
r.a.mO(r.b,new A.rg(s))
return null},
$S:0}
A.rg.prototype={
$0(){this.a.e.k9(null)},
$S:0}
A.ri.prototype={
$0(){var s=this.a.b
s.a.mO(s.b,null)
return null},
$S:0}
A.rd.prototype={
$0(){var s=this.a,r=s.b
r.a.mN(r.b,new A.rc(s))
return null},
$S:0}
A.rc.prototype={
$0(){var s=this.a.f
s.k9(null)
return 0},
$S:10}
A.re.prototype={
$0(){var s=this.a.b
s.a.mN(s.b,null)
return null},
$S:0}
A.rm.prototype={
$2(a,b){A.Ls(a,this.a,b)},
$S:172}
A.rf.prototype={
$0(){var s,r,q,p,o,n
this.a.q()
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
A.nZ.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Jy(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.JA(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.Q("The argument list is unmodifiable",null))},
$ixs:1}
A.e4.prototype={
gcq(){var s=this.r
return s==null?this.r=this.qq(!1):s},
qq(a){return new A.dj(new A.AO(this,!1),this.$ti.i("dj<1>"))},
k9(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.u(o.bI())
if((n&1)!==0)o.gaO().aA(a)}else{n=o.b
if(n>=4)A.u(o.bI())
if((n&1)!==0)o.cA(a)
else if((n&3)===0){n=o.h5()
o=new A.ca(a,o.$ti.i("ca<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sen(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.AO.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.AP(q,a,s)
a.r=a.e=new A.AQ(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dJ<1>)")}}
A.AP.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.kb(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.AQ.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,new A.kb(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.xr.prototype={
n3(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.JO(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wk(a,b){var s,r,q,p,o,n,m,l,k,j
this.n3()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e6(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e6(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d3(r.b.buffer,0,null)[B.c.af(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.l()
k=new A.ym(r,l,o)
r=r.r
if(r!=null)r.mG(k,l,o)
if(m!==0){j=A.DJ(s,k,m,"opening the database",null,null)
k.l_()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.rb(s,k,!1)}}
A.h4.prototype={
gpz(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.j([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.o8(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dk(!1).d3(o,0,null,!0))}return q},
gtk(){return null},
bE(a,b){A.Cn(this.b,a,b,this.d,this.e)},
lC(){if(this.r||this.b.r)throw A.b(A.A(u.f))},
h7(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dt()
if(s!==0?s!==101:q)r.bE(s,"executing statement")},
t2(){var s,r,q,p,o,n,m=this,l=A.j([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rH(o))
l.push(p)}m.dt()
if(p!==0?p!==101:k)m.bE(p,"selecting from statement")
n=m.gpz()
m.gtk()
k=new A.n2(l,n,B.am)
k.ps()
return k},
rH(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ap(r.Number(s)):A.Fq(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oA(a)
case 4:return s.l0(a)
case 5:default:return null}},
pl(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.u(A.az(a,"parameters","Expected "+A.p(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.pm(a[s-1],s)
this.e=a},
pm(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.av(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aN){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.Eb(a).l(0)))
break A}if(A.bx(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oz(b,a)
break A}if(t.L.b(a)){s=q.a.oy(b,a)
break A}s=q.pk(a,b)
break A}if(s!==0)q.bE(s,"binding parameter")},
pk(a,b){throw A.b(A.az(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eF(a){A:{if(a instanceof A.bN){this.pl(a.a)
break A}if(a instanceof A.ls)a.a.$1(this)}},
dt(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dt()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mS(s.d)}},
kV(a){var s=this
s.lC()
s.dt()
s.eF(a)
return s.t2()},
ec(a){var s=this
s.lC()
s.dt()
s.eF(a)
s.h7()}}
A.m8.prototype={
iM(a,b){return this.d.I(a)?1:0},
kO(a,b){this.d.G(0,a)},
kP(a){return new v.G.URL(a,"file:///").pathname},
dz(a,b){var s,r=a.a
if(r==null)r=A.Ex(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.ct(new Uint8Array(0),0))
else throw A.b(A.hg(14))
return new A.hC(new A.oA(this,r,(b&8)!==0),0)},
kR(a){}}
A.oA.prototype={
nm(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bK(B.f.gab(r.a),0,r.b),b)
return s},
kN(){return this.d>=2?1:0},
iN(){if(this.c)this.a.d.G(0,this.b)},
fK(){return this.a.d.h(0,this.b).b},
kQ(a){this.d=a},
kS(a){},
fL(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.ct(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kT(a){this.d=a},
eA(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.ct(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.aw(0,b,s,a)}}
A.Cb.prototype={
$1(a){return a.length!==0},
$S:14}
A.qR.prototype={
ps(){var s,r,q,p,o=A.v(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o.j(0,p,B.b.dl(s,p))}this.c=o}}
A.n2.prototype={
gu(a){return new A.Ax(this)},
h(a,b){return new A.c5(this,A.fF(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iK:1,
$io:1,
$iq:1}
A.c5.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.av(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gM(){return this.a.a},
gb_(){return this.b},
$iJ:1}
A.Ax.prototype={
gn(){var s=this.a
return new A.c5(s,A.fF(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.oQ.prototype={}
A.oR.prototype={}
A.oT.prototype={}
A.oU.prototype={}
A.vH.prototype={
a4(){return"OpenMode."+this.b}}
A.ek.prototype={}
A.bN.prototype={}
A.ls.prototype={}
A.df.prototype={
l(a){return"VfsException("+this.a+")"},
$iG:1}
A.jv.prototype={}
A.b6.prototype={}
A.l8.prototype={}
A.l7.prototype={
giO(){return 0},
nD(a,b){return 12},
giQ(){return 4096},
iP(a,b){var s=this.nm(a,b),r=a.length
if(s<r){B.f.kh(a,s,r,0)
throw A.b(B.dW)}},
$ibp:1,
$ijG:1}
A.eO.prototype={}
A.Cm.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.u(A.A("No such element"))
r=s.c
q=r.a
q.toString
q.jP(A.n(r).i("b3.E").a(r))
r.d.$0()}},
$S:0}
A.Ck.prototype={
$1(a){var s=this.a,r=s.b
s.hg(s.c,new A.eO(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:20}
A.Cl.prototype={
$4(a,b,c,d){this.a.$1(c.f2(d))},
$S:174}
A.yr.prototype={}
A.ym.prototype={
l_(){var s=this.a,r=s.r
if(r!=null)r.mS(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.yt.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
l1(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.DF(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d3(o.b.buffer,0,null)[B.c.af(n,2)]
if(s===0)r=null
else{n=new A.l()
r=new A.ys(s,o,n)
o=o.w
if(o!=null)o.mG(r,s,n)}return new A.oO(r,p)}}
A.ys.prototype={
oy(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cF(b),J.ar(b))},
oz(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cF(s),s.length)},
l0(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.Ff(s.b,q.sqlite3_column_blob(r,a),p)},
oA(a){var s=this.c
return A.dX(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dV.prototype={$iD0:1}
A.dg.prototype={$iD1:1}
A.hi.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dg(s,A.d3(s.b.buffer,0,null)[B.c.af(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lv.prototype={
wa(a){var s,r,q=this.b
q===$&&A.t()
s="[sqlite3] "+A.dX(q,a,null)
r=$.LY
if(r==null)A.H_(s)
else r.$1(s)},
w8(a,b){var s,r=new A.aF(A.lz(A.ap(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.t()
s=A.EN(q.buffer,b,8)
s.$flags&2&&A.H(s)
s[0]=A.CZ(r)
s[1]=A.CX(r)
s[2]=A.CW(r)
s[3]=A.wr(r)
s[4]=A.CY(r)-1
s[5]=A.D_(r)-1900
s[6]=B.c.al(A.Jq(r),7)},
y5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.t()
s=new A.jv(A.Df(j,b,k))
try{r=a.dz(s,d)
if(e!==0){p=r.b
o=A.d3(j.buffer,0,k)
n=B.c.af(e,2)
o.$flags&2&&A.H(o)
o[n]=p}p=A.d3(j.buffer,0,k)
o=B.c.af(c,2)
p.$flags&2&&A.H(p)
p[o]=0
m=r.a
return m}catch(l){p=A.C(l)
if(p instanceof A.df){q=p
p=q.a
j=A.d3(j.buffer,0,k)
o=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[o]=p}else{j=j.buffer
j=A.d3(j,0,k)
p=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[p]=1}}return k},
xT(a,b,c){var s=this.b
s===$&&A.t()
return A.bW(new A.qX(a,A.dX(s,b,null),c))},
xL(a,b,c,d){var s=this.b
s===$&&A.t()
return A.bW(new A.qU(this,a,A.dX(s,b,null),c,d))},
y_(a,b,c,d){var s=this.b
s===$&&A.t()
return A.bW(new A.qZ(this,a,A.dX(s,b,null),c,d))},
y7(a,b,c){return A.bW(new A.r0(this,c,b,a))},
yc(a,b){return A.bW(new A.r2(a,b))},
xR(a,b){var s,r=Date.now(),q=this.b
q===$&&A.t()
s=v.G.BigInt(r)
A.CN(A.EM(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xP(a){return A.bW(new A.qW(a))},
y9(a,b,c,d){return A.bW(new A.r1(this,a,b,c,d))},
yk(a,b,c,d){return A.bW(new A.r6(this,a,b,c,d))},
yg(a,b){return A.bW(new A.r4(a,b))},
ye(a,b){return A.bW(new A.r3(a,b))},
xY(a,b){return A.bW(new A.qY(this,a,b))},
y3(a,b){return A.bW(new A.r_(a,b))},
yi(a,b){return A.bW(new A.r5(a,b))},
xN(a,b){return A.bW(new A.qV(this,a,b))},
xU(a){return a.giO()},
xW(a,b,c){if(t.j2.b(a))return a.nD(b,c)
return 12},
ya(a){if(t.j2.b(a))return a.giQ()
return 4096},
uJ(a){a.$0()},
uE(a){return a.$0()},
uH(a,b,c,d,e){var s=this.b
s===$&&A.t()
a.$3(b,A.dX(s,d,null),A.ap(v.G.Number(e)))},
uP(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.t()
r.$2(new A.dV(s,b),new A.hi(s,c,d))},
uT(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.t()
r.$2(new A.dV(s,b),new A.hi(s,c,d))},
uR(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.t()
null.$2(new A.dV(s,b),new A.hi(s,c,d))},
uV(a,b){var s
null.toString
s=this.a
s===$&&A.t()
null.$1(new A.dV(s,b))},
uN(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.t()
r.$1(new A.dV(s,b))},
uL(a,b,c,d,e){var s=this.b
s===$&&A.t()
return null.$2(A.Df(s,c,b),A.Df(s,e,d))},
uC(a,b){return a.$1(b)},
uA(a,b){return a.gyo().$1(b)},
uy(a,b,c){return a.gyn().$2(b,c)}}
A.qX.prototype={
$0(){return this.a.kO(this.b,this.c)},
$S:0}
A.qU.prototype={
$0(){var s,r=this,q=r.b.iM(r.c,r.d),p=r.a.b
p===$&&A.t()
p=A.d3(p.buffer,0,null)
s=B.c.af(r.e,2)
p.$flags&2&&A.H(p)
p[s]=q},
$S:0}
A.qZ.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kP(q.c)),o=p.length
if(o>q.d)throw A.b(A.hg(14))
s=q.a.b
s===$&&A.t()
s=A.bR(s.buffer,0,null)
r=q.e
B.f.cZ(s,r,p)
s.$flags&2&&A.H(s)
s[r+o]=0},
$S:0}
A.r0.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.t()
s=A.bR(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.E9(s,q.b)
else return A.E9(s,null)},
$S:0}
A.r2.prototype={
$0(){this.a.kR(A.cD(this.b,0,0))},
$S:0}
A.qW.prototype={
$0(){return this.a.iN()},
$S:0}
A.r1.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.t()
s.b.iP(A.bR(r.buffer,s.c,s.d),A.ap(v.G.Number(s.e)))},
$S:0}
A.r6.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.t()
s.b.eA(A.bR(r.buffer,s.c,s.d),A.ap(v.G.Number(s.e)))},
$S:0}
A.r4.prototype={
$0(){return this.a.fL(A.ap(v.G.Number(this.b)))},
$S:0}
A.r3.prototype={
$0(){return this.a.kS(this.b)},
$S:0}
A.qY.prototype={
$0(){var s,r=this.b.fK(),q=this.a.b
q===$&&A.t()
q=A.d3(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.r_.prototype={
$0(){return this.a.kQ(this.b)},
$S:0}
A.r5.prototype={
$0(){return this.a.kT(this.b)},
$S:0}
A.qV.prototype={
$0(){var s,r=this.b.kN(),q=this.a.b
q===$&&A.t()
q=A.d3(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.d6.prototype={}
A.i5.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bf(A.CN(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.nn(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.pJ(q,this,p,o)
o.d=s
o.f=new A.pK(q,o,s)
return new A.b7(o,A.n(o).i("b7<1>")).aa(a,b,c,d)},
bs(a,b,c){return this.aa(a,null,b,c)}}
A.pJ.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a1(q,t.m).b5(new A.pL(p,r.b,s,r),s.gtP(),t.P)},
$S:0}
A.pL.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaO().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:17}
A.pK.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaO().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eS.prototype={
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
o=new A.w($.D,t.g5)
s=new A.ao(o,t.ex)
r=p.d
q=t.m
p.b=A.bq(r,"success",new A.zB(p,s),!1,q)
p.c=A.bq(r,"error",new A.zC(p,s),!1,q)
return o}}
A.zB.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aC(s!=null)},
$S:1}
A.zC.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.aT(s)},
$S:1}
A.qu.prototype={
$1(a){this.a.aC(this.c.a(this.b.result))},
$S:1}
A.qv.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.qz.prototype={
$1(a){this.a.aC(this.c.a(this.b.result))},
$S:1}
A.qA.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.qB.prototype={
$1(a){this.a.aT(new A.bm("IndexedDB open blocked"))},
$S:1}
A.rV.prototype={
$1(a){return A.bf(a[1])},
$S:196}
A.yn.prototype={
uh(){var s={}
s.dart=new A.yo(this).$0()
return s},
ii(a){return this.w4(a)},
w4(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ii=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a1(v.G.WebAssembly.instantiateStreaming(a,p.uh()),t.m),$async$ii)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ii,r)}}
A.yo.prototype={
$0(){var s=this.a.a,r=A.bf(v.G.Object),q=A.bf(r.create.apply(r,[null]))
q.error_log=A.cV(s.gw9())
q.localtime=A.bU(s.gw7())
q.xOpen=A.Dy(s.gy4())
q.xDelete=A.pi(s.gxS())
q.xAccess=A.hP(s.gxK())
q.xFullPathname=A.hP(s.gxZ())
q.xRandomness=A.pi(s.gy6())
q.xSleep=A.bU(s.gyb())
q.xCurrentTimeInt64=A.bU(s.gxQ())
q.xClose=A.cV(s.gxO())
q.xRead=A.hP(s.gy8())
q.xWrite=A.hP(s.gyj())
q.xTruncate=A.bU(s.gyf())
q.xSync=A.bU(s.gyd())
q.xFileSize=A.bU(s.gxX())
q.xLock=A.bU(s.gy0())
q.xUnlock=A.bU(s.gyh())
q.xCheckReservedLock=A.bU(s.gxM())
q.xDeviceCharacteristics=A.cV(s.giO())
q.xFileControl=A.pi(s.gxV())
q.xSectorSize=A.cV(s.giQ())
q["dispatch_()v"]=A.cV(s.guI())
q["dispatch_()i"]=A.cV(s.guD())
q.dispatch_update=A.Dy(s.guG())
q.dispatch_xFunc=A.hP(s.guO())
q.dispatch_xStep=A.hP(s.guS())
q.dispatch_xInverse=A.hP(s.guQ())
q.dispatch_xValue=A.bU(s.guU())
q.dispatch_xFinal=A.bU(s.guM())
q.dispatch_compare=A.Dy(s.guK())
q.dispatch_busy=A.bU(s.guB())
q.changeset_apply_filter=A.bU(s.guz())
q.changeset_apply_conflict=A.pi(s.gux())
return q},
$S:33}
A.hh.prototype={}
A.pM.prototype={
ip(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ip=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.D,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cV(new A.pP(o))
new A.ao(p,t.h1).aC(A.In(o,t.m))
s=2
return A.a(p,$async$ip)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$ip,r)},
e1(a,b){return this.rW(a,b)},
rW(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$e1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.HP(),b)
o=A.Ku(p)
s=2
return A.a(A.Nz(new A.pO(a,o,p),t.mj),$async$e1)
case 2:s=3
return A.a(o.b.a,$async$e1)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$e1,r)},
rh(a){return this.e1(new A.pN(a),"readwrite")}}
A.pP.prototype={
$1(a){var s=A.bf(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:17}
A.pO.prototype={
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
A.pN.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aX(a),$async$$1)
case 5:case 3:p.length===o||(0,A.r)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.k1.prototype={
p0(a){var s=A.Bu(new A.Ab(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.Bu(new A.Ac(this))},
jC(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.j([a,c],s),A.j([a,b],s))},
rE(a){return this.jC(a,9007199254740992,0)},
rF(a,b){return this.jC(a,9007199254740992,b)},
ih(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ih=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.v(t.N,t.S)
k=new A.eS(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$ih)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.u(A.A("Await moveNext() first"))
n=o.key
n.toString
A.F(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ap(A.f1(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)},
hY(a){return this.vk(a)},
vk(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cB(p.d.index("fileName").getKey(a),t.W),$async$hY)
case 3:q=o.ap(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hY,r)},
jD(a){return A.cB(this.d.get(a),t.B).W(new A.Aa(a),t.m)},
eC(a,b){return this.oB(a,b)},
oB(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jD(a),$async$eC)
case 3:h=d
g=h.length
f=new A.ct(new Uint8Array(g),g)
e=new A.eS(p.e.openCursor(p.rE(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eC)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.u(A.A("Await moveNext() first"))
k=n.a(l.key)
j=A.ap(A.f1(k[1]))
if(j>=h.length){s=5
break}i=new A.Ad(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.x7(A.bf(l.value)).W(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eC,r)},
hP(a){return this.ue(a)},
ue(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
o=A
s=3
return A.a(A.cB(p.d.put({name:a,length:0}),t.W),$async$hP)
case 3:q=o.ap(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
av(a,b){return this.xD(a,b)},
xD(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$av=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
s=2
return A.a(q.jD(a),$async$av)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.P(new A.T(o,n),n.i("o.E"))
B.b.aI(m)
s=3
return A.a(A.CH(new A.X(m,new A.Ae(new A.Af(q,a),b),A.a0(m).i("X<1,y<~>>")),t.H),$async$av)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eS(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$av)
case 6:s=7
return A.a(A.cB(l.gn().update({name:p.name,length:b.c}),t.X),$async$av)
case 7:case 5:return A.e(null,r)}})
return A.f($async$av,r)},
dv(a,b,c){return this.xf(0,b,c)},
xf(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dv=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
s=2
return A.a(q.jD(b),$async$dv)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cB(q.e.delete(q.rF(b,B.c.L(c,4096)*4096)),t.X),$async$dv)
case 5:case 4:o=new A.eS(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dv)
case 6:s=7
return A.a(A.cB(o.gn().update({name:p.name,length:c}),t.X),$async$dv)
case 7:return A.e(null,r)}})
return A.f($async$dv,r)},
hT(a){return this.uv(a)},
uv(a){var s=0,r=A.h(t.H),q=this,p
var $async$hT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.A("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.CH(A.j([A.cB(q.e.delete(q.jC(a,9007199254740992,0)),p),A.cB(q.d.delete(a),p)],t.iw),t.H),$async$hT)
case 2:return A.e(null,r)}})
return A.f($async$hT,r)}}
A.Ab.prototype={
$0(){this.a.b.aj()},
$S:2}
A.Ac.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aT(r)},
$S:2}
A.Aa.prototype={
$1(a){if(a==null)throw A.b(A.az(this.a,"fileId","File not found in database"))
else return a},
$S:199}
A.Ad.prototype={
$1(a){var s=this.a
s.cZ(s,this.b,J.bK(a,0,this.c))},
$S:200}
A.Af.prototype={
od(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cB(p.openCursor(v.G.IDBKeyRange.only(A.j([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gab(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cB(p.put(l,A.j([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cB(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.od(a,b)},
$S:201}
A.Ae.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:202}
A.zN.prototype={
ts(a,b,c){B.f.cZ(this.b.nk(a,new A.zO(this,a)),b,c)},
tT(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.L(q,4096)
o=B.c.al(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.ts(p*4096,o,J.bK(B.f.gab(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.zO.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cZ(s,0,J.bK(B.f.gab(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:203}
A.oJ.prototype={}
A.dB.prototype={
f_(a){var s=this
if(s.e||s.d.a==null)A.u(A.hg(10))
if(a.kp(s.x)){s.cC(!0)
return a.d.a}else return A.ba(null,t.H)},
cC(a){return this.th(a)},
th(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.P(o,o.$ti.i("o.E"))
o.an(0)
s=5
return A.a(p.d.rh(n).b0(new A.tC(p,n,a)),$async$cC)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cC,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.f_(new A.k_(new A.tD(),new A.ao(new A.w($.D,t.D),t.F)))
p.e=!0
p.cC(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.ga1(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dN(a,b){return this.qm(a,b)},
qm(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dN=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hY(b),$async$dN)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dN,r)},
eT(){var s=0,r=A.h(t.H),q=this,p
var $async$eT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.j([],t.iw)
s=2
return A.a(q.d.e1(new A.tB(q,p),"readonly"),$async$eT)
case 2:s=3
return A.a(A.IJ(p,t.H),$async$eT)
case 3:return A.e(null,r)}})
return A.f($async$eT,r)},
cL(){return this.cC(!1)},
iM(a,b){return this.w.d.I(a)?1:0},
kO(a,b){var s=this
s.w.d.G(0,a)
if(!s.y.G(0,a))s.f_(new A.jU(s,a,new A.ao(new A.w($.D,t.D),t.F)))},
kP(a){return new v.G.URL(a,"file:///").pathname},
dz(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Ex(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dz(new A.jv(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.f_(new A.hr(p,o,new A.ao(new A.w($.D,t.D),t.F)))
return new A.hC(new A.oB(p,q.a,o),0)},
kR(a){}}
A.tC.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.u(A.A("Future already completed"))
p.cs(null)}o.cC(this.c)},
$S:2}
A.tD.prototype={
$1(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.tB.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ih(),$async$$1)
case 2:m=c
l=q.a
l.z.F(0,m)
p=m.ga7(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.eC(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.oB.prototype={
iP(a,b){this.b.iP(a,b)},
giO(){return 0},
giQ(){return 4096},
kN(){return this.b.d>=2?1:0},
iN(){},
fK(){return this.b.fK()},
kQ(a){this.b.d=a
return null},
kS(a){},
nD(a,b){return 12},
fL(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.u(A.hg(10))
s.b.fL(a)
if(!r.y.D(0,s.c))r.f_(new A.k_(new A.A9(s,a),new A.ao(new A.w($.D,t.D),t.F)))},
kT(a){this.b.d=a
return null},
eA(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.u(A.hg(10))
s=m.c
if(l.y.D(0,s)){m.b.eA(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.ct(new Uint8Array(0),0)
q=J.bK(B.f.gab(r.a),0,r.b)
m.b.eA(a,b)
p=new Uint8Array(a.length)
B.f.cZ(p,0,a)
o=A.j([],t.p8)
n=$.D
o.push(new A.oJ(b,p))
l.f_(new A.hL(l,s,q,o,new A.ao(new A.w(n,t.D),t.F)))},
$ibp:1,
$ijG:1}
A.A9.prototype={
$1(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dN(a,o.c),$async$$1)
case 3:q=n.dv(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:27}
A.b8.prototype={
kp(a){a.hg(a.c,this,!1)
return!0}}
A.k_.prototype={
aX(a){return this.w.$1(a)}}
A.jU.prototype={
kp(a){var s,r,q,p
if(!a.gE(0)){s=a.ga1(0)
for(r=this.x;s!=null;)if(s instanceof A.jU)if(s.x===r)return!1
else s=s.gft()
else if(s instanceof A.hL){q=s.gft()
if(s.x===r){p=s.a
p.toString
p.jP(A.n(s).i("b3.E").a(s))}s=q}else if(s instanceof A.hr){if(s.x===r){r=s.a
r.toString
r.jP(A.n(s).i("b3.E").a(s))
return!1}s=s.gft()}else break}a.hg(a.c,this,!1)
return!0},
aX(a){return this.x7(a)},
x7(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dN(a,o),$async$aX)
case 2:n=c
p.z.G(0,o)
s=3
return A.a(a.hT(n),$async$aX)
case 3:return A.e(null,r)}})
return A.f($async$aX,r)}}
A.hr.prototype={
aX(a){return this.x6(a)},
x6(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hP(p),$async$aX)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aX,r)}}
A.hL.prototype={
kp(a){var s,r=a.b===0?null:a.ga1(0)
for(s=this.x;r!=null;)if(r instanceof A.hL)if(r.x===s){B.b.F(r.z,this.z)
return!1}else r=r.gft()
else if(r instanceof A.hr){if(r.x===s)break
r=r.gft()}else break
a.hg(a.c,this,!1)
return!0},
aX(a){return this.x8(a)},
x8(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.zN(m,A.v(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.r)(m),++o){n=m[o]
l.tT(n.a,n.b)}k=a
s=3
return A.a(q.w.dN(a,q.x),$async$aX)
case 3:s=2
return A.a(k.av(c,l),$async$aX)
case 2:return A.e(null,r)}})
return A.f($async$aX,r)}}
A.fB.prototype={
a4(){return"FileType."+this.b}}
A.h1.prototype={
bO(){var s=this.d
if(s!=null)return s
throw A.b(A.A("VFS closed"))},
iM(a,b){var s=$.Cq().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bO().br(s)?1:0},
kO(a,b){var s=$.Cq().h(0,a)
if(s==null){this.e.d.G(0,a)
return null}else this.bO().fn(s,!1)},
kP(a){return new v.G.URL(a,"file:///").pathname},
dz(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dz(a,b)
s=$.Cq().h(0,p)
if(s==null)return q.e.dz(a,b)
r=q.bO()
if(!r.br(s))if((b&4)!==0){r.di(s).truncate(0)
r.fn(s,!0)}else throw A.b(B.dV)
return new A.hC(new A.oZ(q,s,(b&8)!==0),0)},
kR(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cR(a,b){return this.wm(a,b)},
cQ(a){return this.cR(a,!1)},
wm(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.xo(a,b)
s=2
return A.a(m.$1("meta"),$async$cR)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cR)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cR)
case 4:o=d
n=q.d=new A.At(new Uint8Array(2),l,p,o)
if(k){n.fn(B.b2,p.getSize()>0)
n.fn(B.b3,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cR,r)}}
A.xo.prototype={
o8(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a1(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a1(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.o8(a)},
$S:204}
A.oZ.prototype={
nm(a,b){return A.Eu(this.a.bO().di(this.b),a,{at:b})},
kN(){return this.d>=2?1:0},
iN(){var s=this.a,r=this.b
s.bO().di(r).flush()
if(this.c)s.bO().fn(r,!1)},
fK(){return this.a.bO().di(this.b).getSize()},
kQ(a){this.d=a},
kS(a){this.a.bO().di(this.b).flush()},
fL(a){this.a.bO().di(this.b).truncate(a)},
kT(a){this.d=a},
eA(a,b){if(A.Ev(this.a.bO().di(this.b),a,{at:b})<a.length)throw A.b(B.dX)}}
A.At.prototype={
br(a){var s=this.a
A.Eu(this.b,s,{at:0})
return s[a.a]!==0},
fn(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.H(s)
s[a.a]=r
A.Ev(this.b,s,{at:0})},
di(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.yh.prototype={
oY(a,b){var s=this,r=s.c
r.a!==$&&A.eb()
r.a=s
r=t.S
A.zP(new A.yi(s),r)
A.zP(new A.yj(s),r)
s.r=A.zP(new A.yk(s),r)
s.w=A.zP(new A.yl(s),r)},
e6(a,b){var s=J.L(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bR(this.b.buffer,0,null)
B.f.aw(q,r,r+s.gm(a),a)
B.f.kh(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cF(a){return this.e6(a,0)},
mP(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mN(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mO(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.yi.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.yj.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.yk.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.yl.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.ii.prototype={}
A.wu.prototype={
oV(a){var s,r=this,q=r.a
q.start()
r.c=A.bq(q,"message",new A.wy(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kM()
q.toString
A.jI(q,s,null,null,!1).W(new A.wz(r),t.P)}},
jr(a){return this.qx(a)},
qx(a){var s=0,r=A.h(t.H),q=this
var $async$jr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.MY(a,new A.wv(q),q.gvJ(),new A.ww(q),new A.wx(q))
return A.e(null,r)}})
return A.f($async$jr,r)},
fS(a,b,c){return this.ot(a,b,c,c)},
ot(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.Id(null))
o=p.e++
n=new A.w($.D,t.a7)
p.f.j(0,o,new A.ao(n,t.h1))
a.i=o
p.a.postMessage(a,A.hU(a))
s=3
return A.a(n,$async$fS)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.JC(m))
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
qQ(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();)r.d.aT(new A.id(a))
s.an(0)
p.aj()},
lV(){return this.qQ(null)}}
A.wy.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lV()
return}this.a.jr(A.bf(a.data))},
$S:1}
A.wz.prototype={
$1(a){this.a.lV()
a.a.aj()},
$S:205}
A.wx.prototype={
$1(a){var s=this.a.f.G(0,a.i)
if(s!=null)s.aC(a)},
$S:17}
A.ww.prototype={
$1(a){return this.o1(a)},
o1(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.uF(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bw(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.C(a0)
k=A.ae(a0)
if(!(l instanceof A.ds)){b.console.error("Error in worker: "+J.Z(l))
b.console.error("Original trace: "+A.p(k))}b=l
if(b instanceof A.c6){h=A.IB(b)
g=0}else{g=b instanceof A.ds?1:null
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
d.a.postMessage(c,A.hU(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:206}
A.wv.prototype={
$1(a){var s=this.a.r.G(0,a.i)
if(s!=null)s.abort()},
$S:17}
A.id.prototype={
l(a){return"Channel to database worker is closed: "+A.p(this.a)},
$iG:1}
A.r9.prototype={
ci(a){return this.w5(a)},
w5(a){var s=0,r=A.h(t.n),q
var $async$ci=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.yq(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ci,r)}}
A.lr.prototype={}
A.qS.prototype={}
A.eM.prototype={}
A.lK.prototype={
ij(){var s=0,r=A.h(t.H),q=this
var $async$ij=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cQ(q.b),$async$ij)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ij,r)},
kC(){var s=0,r=A.h(t.H),q=this
var $async$kC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kC,r)}}
A.tc.prototype={
xa(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
qr(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.yx.prototype={
$1(a){var s=new A.w($.D,t.D),r=new A.cZ(new A.ao(s,t.F))
this.a.a=r
this.b.aC(r)
return A.IK(s)},
$S:207}
A.yy.prototype={
$2(a,b){var s,r,q
A.bf(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bQ(new A.ds("Operation was cancelled"),b)
else q.bQ(a,b)}return null},
$S:208}
A.cZ.prototype={}
A.lw.prototype={
gu4(){if(this.c.a)return!1
return!this.d||this.f!=null},
dG(a){return this.p8(a)},
p8(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dG=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kM()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jI(n,o.a,null,o.gqB(),!0),$async$dG)
case 6:m=c
s=7
return A.a(A.jI(n,o.b,a,null,!1),$async$dG)
case 7:l=c
j=o.e
j=j==null?null:j.ij()
s=8
return A.a(j instanceof A.w?j:A.bw(j,t.H),$async$dG)
case 8:o.f=new A.a5(m,l)
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
return A.f($async$dG,r)},
qC(){this.no()},
ku(a,b,c){return this.c.iI(new A.ro(this,a,b,c),b,c)},
no(){return this.c.kM(new A.rp(this),t.H)}}
A.ro.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dG(r.c).W(new A.rn(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rn.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rp.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kC()
s.a.aj()
r.a.aj()
p.f=null}},
$S:2}
A.j1.prototype={
iI(a,b,c){return this.xC(a,b,c,c)},
kM(a,b){return this.iI(a,null,b)},
xC(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iI=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.aq)
h.a=!1
o=new A.vz(h,p)
if(!p.a){h.a=p.a=!0
q=A.iz(a,c).b0(o)
s=1
break}else{n={}
m=new A.w($.D,c.i("w<0>"))
l=new A.ao(m,c.i("ao<0>"))
n.a=null
h=new A.vy(h,n,l,a,c)
if(!g)n.a=A.bq(b,"abort",new A.vx(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.a7(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ai(j,0,i,h,n)
B.b.ai(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.b0(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iI,r)}}
A.vz.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gE(0)){s=r.b
if(s===r.c)A.u(A.aG());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.vy.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.aC(A.iz(r.d,r.e))},
$S:0}
A.vx.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.G(0,r.d)
s.aT(B.aq)}},
$S:1}
A.el.prototype={
gnu(){var s,r,q,p,o,n=this,m=t.s,l=A.j([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
B.b.F(l,A.j([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.rF.prototype={
$1(a){if(a!=null)return A.F(a)
return null},
$S:209}
A.ms.prototype={
a4(){return"MessageType."+this.b}}
A.xa.prototype={
uF(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.i4(a,b)
case"connect":return p.kj(a,b)
case"custom":return p.eg(a,b)
case"fileSystemExists":return p.ff(a,b)
case"fileSystemFlush":return p.fg(a,b)
case"fileSystemAccess":return p.fe(a,b)
case"runQuery":return p.i8(a,b)
case"exclusiveLock":return p.i3(a,b)
case"releaseLock":s=p.by(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.u(A.A("Lock to be released is not active."))
q.b.aj()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.i1(a,b)
case"openAdditionalConnection":return p.i5(a,b)
case"updateRequest":return p.i9(a,b)
case"rollbackRequest":return p.i7(a,b)
case"commitRequest":return p.i2(a,b)
case"dedicatedCompatibilityCheck":return p.dP(a,b)
case"sharedCompatibilityCheck":return p.dP(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dP(a,b)
default:r=A.f2(new A.bA(!1,o,o,"Unsupported request "+A.p(a.t)),o)
q=new A.w($.D,t.hl)
q.cr(r)
return q}}}
A.dx.prototype={
a4(){return"FileSystemImplementation."+this.b}}
A.cs.prototype={
a4(){return"TypeCode."+this.b},
ul(a){var s=null
switch(this.a){case 0:s=A.u(A.Q("Unsupported type code",null))
break
case 1:a=A.ap(A.f1(a))
s=a
break
case 2:s=A.Fq(t.bJ.a(a).toString(),null)
break
case 3:A.f1(a)
s=a
break
case 4:A.F(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hN(a)
s=a
break
case 6:break}return s}}
A.em.prototype={
mH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.Q("Expected "+A.p(r)+" parameters, got "+A.p(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aG:B.b7[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ap(A.f1(h))))
if(k!==0)a.bE(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bE(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f1(h))
if(k!==0)a.bE(k,e)
break
case 4:g=B.e.v(A.F(h))
k=s.dart_sqlite3_bind_text(d,i,c.cF(g),g.length)
if(k!==0)a.bE(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cF(h),h.length)
if(k!==0)a.bE(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bE(k,e)
break
case 7:f=A.hN(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bE(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mu()},
h(a,b){var s=this.c[b],r=s>=8?B.aG:B.b7[s]
return r.ul(this.a[b])},
j(a,b,c){this.mu()},
mu(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.BK.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:17}
A.qs.prototype={
$1(a){this.a.aC(this.c.a(this.b.result))},
$S:1}
A.qt.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.qw.prototype={
$1(a){this.a.aC(this.c.a(this.b.result))},
$S:1}
A.qx.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.qy.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:1}
A.wq.prototype={
uX(){var s,r,q,p
for(s=this.b,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.an(0)}}
A.iv.prototype={
a4(){return"FileType."+this.b}}
A.dP.prototype={
a4(){return"StorageMode."+this.b}}
A.fW.prototype={
l(a){return"Remote error: "+this.a},
$iG:1}
A.ds.prototype={}
A.Bt.prototype={
$1(a){return A.bf(a.data)},
$S:211}
A.kf.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.hq.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.r)(p),++n)p[n].abort()
B.b.an(p)
p=q.f
if(p!=null)p.b.aj()
s=2
return A.a(q.a.f5(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
mm(a){var s=new v.G.AbortController()
a.onabort=A.Bu(new A.zs(s))
this.w.push(s)
return s},
kK(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gu4()){r=p.mm(b)
o=s.ku(c,r.signal,d).b0(new A.zw(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.A("Requested operation on inactive lock state."))}if(o==null)o=A.iz(c,d)
q=p.a.z
return q instanceof A.dB?o.b0(q.gvn()):o},
wj(a){var s=this,r=s.mm(a),q=new A.w($.D,t.hy),p=new A.aL(q,t.ho),o=t.H
A.CG(s.a.f.ku(new A.zt(s,p),r.signal,o),new A.zu(p),o,t.K)
return q.b0(new A.zv(s,r))}}
A.zs.prototype={
$0(){return this.a.abort()},
$S:0}
A.zw.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.zt.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.D,t.D)
s.f=new A.a5(r,new A.aL(q,t.h))
this.b.aC(r)
return q},
$S:3}
A.zu.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bQ(a,b)},
$S:6}
A.zv.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.ho.prototype={
p_(a,b,c){this.b.a.b0(new A.zc(this))},
dP(a,b){return this.qs(a,b)},
qs(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mJ(a),$async$dP)
case 3:q={r:d.gnu(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dP,r)},
kj(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$kj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glO()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hU(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kj,r)},
eg(a,b){return this.vx(a,b)},
vx(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lx(l)
n=a.r
s=7
return A.a(o.a.gck(),$async$eg)
case 7:s=6
return A.a(d.cM(p,new A.qS(n)),$async$eg)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cM(p,new A.lr(a)),$async$eg)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
i4(a,b){return this.vL(a,b)},
vL(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kM(new A.zh(p,a),t.m),$async$i4)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i4,r)},
i8(a,b){return this.vP(a,b)},
vP(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.by(a)
n=o.a
s=3
return A.a(n.gck(),$async$i8)
case 3:m=d
q=o.kK(a.z,b,new A.zk(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
i3(a,b){return this.vB(a,b)},
vB(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.by(a).wj(b),$async$i3)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
i2(a,b){return this.vv(a,b)},
vv(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.by(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dE(n,new A.ze(p,o),a),$async$i2)
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
return A.f($async$i2,r)},
i7(a,b){return this.vO(a,b)},
vO(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.by(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dE(n,new A.zj(p,o),a),$async$i7)
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
return A.f($async$i7,r)},
i9(a,b){return this.vR(a,b)},
vR(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.by(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dE(n,new A.zm(p,o),a),$async$i9)
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
return A.f($async$i9,r)},
i5(a,b){return this.vM(a,b)},
vM(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.by(a).a;++m.w
s=3
return A.a(A.BN(),$async$i5)
case 3:o=d
n=o.a
p.w.l9(o.b).x.push(A.Fr(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i5,r)},
i1(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$i1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.by(a)
B.b.G(p.x,o)
s=3
return A.a(o.q(),$async$i1)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
fg(a,b){return this.vE(a,b)},
vE(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.by(a).a.gcX(),$async$fg)
case 3:o=d
s=o instanceof A.dB?4:5
break
case 4:s=6
return A.a(o.cC(!1),$async$fg)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
fe(a,b){return this.vC(a,b)},
vC(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fe=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.by(a)
n=B.b8[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcX(),$async$fe)
case 4:s=3
return A.a(l.kK(null,k,new j.zf(d,n,m,a),t.m),$async$fe)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fe,r)},
ff(a,b){return this.vD(a,b)},
vD(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ff=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.by(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcX(),$async$ff)
case 4:s=3
return A.a(n.kK(null,m,new l.zg(d,a),t.y),$async$ff)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ff,r)},
dE(a,b,c){return this.oD(a,b,c)},
oD(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dE)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dE,r)},
vK(a){},
hR(a){var s=0,r=A.h(t.X),q,p=this
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fS({r:a,z:null,i:0,d:null,t:"custom"},B.d1,t.m),$async$hR)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
lx(a){return B.b.mZ(this.x,new A.zb(a))},
by(a){var s=a.d
if(s!=null)return this.lx(s)
else throw A.b(A.Q("Request requires database id",null))},
$iEh:1}
A.zc.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.r)(p),++n
s=2
break
case 4:B.b.an(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.zh.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.ci(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vl(h.d,A.IE(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcX():m.gck(),$async$$0)
case 8:l=A.Fr(m,null)
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
return A.a(m.f5(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:212}
A.zk.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.A("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.em(s,r,A.bR(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oo(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ap(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.vb(l,k.s,q)
s=o.d
return A.GW(s.sqlite3_get_autocommit(p)!==0,m,A.ap(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:33}
A.ze.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gck(),$async$$0)
case 3:q=b.a.pA().gcq().aU(new A.zd(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:69}
A.zd.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hU(s))},
$S:70}
A.zj.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gck(),$async$$0)
case 3:q=b.a.rU().gcq().aU(new A.zi(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:69}
A.zi.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hU(s))},
$S:70}
A.zm.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gck(),$async$$0)
case 3:q=b.a.tt().gcq().aU(new A.zl(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:215}
A.zl.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hU(s))},
$S:216}
A.zf.prototype={
$0(){var s,r,q,p=this,o=p.a.dz(new A.jv(A.G6(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fL(s.byteLength)
o.eA(A.bR(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fK()
r=new Uint8Array(q)
o.iP(r,0)
q={r:t.a.a(J.HX(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iN()}},
$S:33}
A.zg.prototype={
$0(){return this.a.iM(A.G6(B.b8[this.b.f]),0)===1},
$S:46}
A.zb.prototype={
$1(a){return a.b===this.a},
$S:217}
A.lx.prototype={
gcX(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iz(new A.rs(p),t.H):o,$async$gcX)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcX,r)},
gck(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gck=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iz(new A.rr(p),t.u):o,$async$gck)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gck,r)},
f5(){var s=0,r=A.h(t.H),q=this
var $async$f5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$f5)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f5,r)},
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
if(j!=null)j.uX()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.DX()
A.CE(m)
k=l.a.get(m)
if(k==null)A.u(A.A("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bw(j,t.H),$async$q)
case 6:q.f.no()
return A.e(null,r)}})
return A.f($async$q,r)},
m1(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.G(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a5(s,!0)
p=a.it(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.G(0,new A.T(n,A.n(n).i("T<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a5(p,!0)}return new A.a5(p,!1)},
vb(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aG(b,B.n)
else{s=null
r=null
q=this.m1(a,b)
s=q.a
r=q.b
try{s.ec(new A.ls(c.gu2()))}finally{if(r)s.dt()
else s.q()}}},
oo(a,b,c){var s,r=null,q=null,p=this.m1(a,b)
r=p.a
q=p.b
try{s=A.JD(r,c)
return s}finally{if(q)r.dt()
else r.q()}}}
A.rs.prototype={
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
return A.a(A.xn("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gea()
s=3
break
case 5:case 6:s=10
return A.a(A.lL("drift_db/"+l.c,k===B.ay,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gea()
s=3
break
case 7:s=11
return A.a(A.ma(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gea()
s=3
break
case 8:l.z=A.CJ("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rr.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcX(),$async$$0)
case 4:n=b
o.n3()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e6(B.e.v(n.a),1),n,0)
if(m===0)A.u(A.A("could not register vfs"))
$.DX().j(0,n,m)
s=5
return A.a(l.f.ku(new A.rq(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:71}
A.rq.prototype={
$0(){var s=this.a
return s.a.b.iq(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:71}
A.yG.prototype={
glO(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.ox()
r.Q!==$&&A.Co()
r.Q=s
q=s}return q},
eh(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eh=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cv(A.cw(A.Lr(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$eh)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.ii(i.port,i.lockName,null)
n.l9(l)
s=9
break
case 10:s=A.Nj(m.t)?11:12
break
case 11:s=13
return A.a(n.mJ(m),$async$eh)
case 13:k=b
j.postMessage(k.gnu())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$eh)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eh,r)},
l9(a){var s=this,r=A.Kl(a,s.d++,s)
s.c.push(r)
r.b.a.b0(new A.yH(s,r))
return r},
mJ(a){return this.x.kM(new A.yI(this,a),t.p6)},
ci(a){return this.w6(a)},
w6(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ci=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bf(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.A("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.p(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bw(n,t.he),$async$ci)
case 5:s=3
break
case 4:o=A.CG(q.b.ci(m),new A.yJ(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$ci)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$ci,r)},
vl(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ay||b===B.b1
o=A.CR(t.cj)
n=c===0?null:new A.wq(c,A.dF(null,null,t.N,t.fw))
n=new A.lx(this,r,a,b,d,new A.lw(q+"-outer",q,new A.j1(o),p),n)
s.j(0,r,n)
return n}}
A.yH.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.yI.prototype={
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
return A.a(A.po(),$async$$0)
case 9:case 8:j=a1
i=A.aM(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glO()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.hU(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hu(n,"message",!1,t.d4).gH(0),$async$$0)
case 15:e=b.Ik(a.bf(a1.data))
k=e.c
l=e.d
i.F(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.hX(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.a5(B.bi,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.BJ(c),$async$$0)
case 23:if(a1)i.t(0,new A.a5(B.bj,c))
case 22:d=A.P(i,i.$ti.c)
q=new A.el(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:219}
A.yJ.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:220}
A.kr.prototype={}
A.os.prototype={
gn1(){return new A.hu(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oX.prototype={
gn1(){return new A.dj(new A.AI(this),t.k8)},
q(){}}
A.AI.prototype={
$1(a){var s=A.j([],t.kG),r=A.j([],t.dw)
r.push(A.bq(this.a.a,"connect",new A.AF(new A.AJ(s,r,a)),!1,t.m))
a.r=new A.AG(r)},
$S:221}
A.AJ.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bq(a,"message",new A.AH(this.c),!1,t.m))},
$S:1}
A.AH.prototype={
$1(a){this.a.tS(a)},
$S:1}
A.AF.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bM(r,A.a0(r).i("bM<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.AG.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].A()},
$S:2}
A.ot.prototype={
ox(){var s=v.G
if(!("Worker" in s))return null
return new A.zI(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.zI.prototype={}
A.nr.prototype={
gfU(){return A.F(this.c)}}
A.xF.prototype={
gkt(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iS(a){var s,r=this,q=r.d=J.I_(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
mX(a,b){var s
if(this.iS(a))return
if(b==null)if(a instanceof A.et)b="/"+a.a+"/"
else{s=J.Z(a)
s=A.B(s,"\\","\\\\")
b='"'+A.B(s,'"','\\"')+'"'}this.lE(b)},
fc(a){return this.mX(a,null)},
vf(){if(this.c===this.b.length)return
this.lE("no more input")},
va(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.u(A.aZ("position must be greater than or equal to 0."))
else if(c>n.length)A.u(A.aZ("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.u(A.aZ("position plus length must not go beyond the end of the string."))
s=this.a
r=A.j([0],t.t)
q=n.length
p=new A.xp(s,r,new Uint32Array(q))
p.oW(new A.cg(n),s)
o=c+b
if(o>q)A.u(A.aZ("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.u(A.aZ("Start may not be negative, was "+c+"."))
throw A.b(new A.nr(n,a,new A.hv(p,c,o)))},
lE(a){this.va("expected "+a+".",0,this.c)}}
A.hc.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Ey(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Ey(b,this))
s=this.a
s.$flags&2&&A.H(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.H(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lt(b)
B.f.aw(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.tq(q)
q=r.a
s=r.b++
q.$flags&2&&A.H(q)
q[s]=b},
lt(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
tq(a){var s=this.lt(null)
B.f.aw(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ax(c,0,s,null,null))
s=this.a
if(d instanceof A.ct)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
aw(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.oC.prototype={}
A.ct.prototype={}
A.CC.prototype={}
A.hu.prototype={
aa(a,b,c,d){return A.bq(this.a,this.b,a,!1,this.$ti.c)},
bs(a,b,c){return this.aa(a,null,b,c)}}
A.jY.prototype={
A(){var s=this,r=A.ba(null,t.H)
if(s.b==null)return r
s.jQ()
s.d=s.b=null
return r},
io(a){var s,r=this
if(r.b==null)throw A.b(A.A("Subscription has been canceled."))
r.jQ()
s=A.Gz(new A.zM(a),t.m)
s=s==null?null:A.cV(s)
r.d=s
r.jO()},
b2(){if(this.b==null)return;++this.a
this.jQ()},
aW(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jO()},
jO(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jQ(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibn:1}
A.zL.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.zM.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dE.prototype
s.oJ=s.l
s=A.bC.prototype
s.oF=s.n4
s.oG=s.n5
s.oI=s.n7
s.oH=s.n6
s=A.b1.prototype
s.iU=s.aA
s.l6=s.aK
s.l7=s.aS
s=A.dh.prototype
s.oM=s.lq
s.oN=s.lJ
s.oO=s.mj
s=A.I.prototype
s.l5=s.ai
s=A.aE.prototype
s.l4=s.u1
s=A.kg.prototype
s.oP=s.q
s=A.o.prototype
s.oE=s.dw
s=A.l4.prototype
s.l2=s.i_
s=A.fk.prototype
s.l3=s.f6
s=A.h3.prototype
s.oL=s.a0
s.oK=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"LB","IU",48)
r(A,"LO","Jo",10)
q(A,"Ml","K6",20)
q(A,"Mm","K7",20)
q(A,"Mn","K8",20)
q(A,"Mo","LQ",16)
r(A,"GE","Mc",0)
q(A,"Mp","LR",28)
s(A,"Mq","LT",13)
r(A,"BE","LS",0)
p(A,"Mv",5,null,["$5"],["M6"],223,0)
p(A,"MA",4,null,["$1$4","$4"],["Bz",function(a,b,c,d){return A.Bz(a,b,c,d,t.z)}],224,0)
p(A,"MC",5,null,["$2$5","$5"],["BA",function(a,b,c,d,e){var i=t.z
return A.BA(a,b,c,d,e,i,i)}],225,0)
p(A,"MB",6,null,["$3$6"],["DB"],226,0)
p(A,"My",4,null,["$1$4","$4"],["Gm",function(a,b,c,d){return A.Gm(a,b,c,d,t.z)}],227,0)
p(A,"Mz",4,null,["$2$4","$4"],["Gn",function(a,b,c,d){var i=t.z
return A.Gn(a,b,c,d,i,i)}],228,0)
p(A,"Mx",4,null,["$3$4","$4"],["Gl",function(a,b,c,d){var i=t.z
return A.Gl(a,b,c,d,i,i,i)}],229,0)
p(A,"Mt",5,null,["$5"],["M5"],230,0)
p(A,"MD",4,null,["$4"],["BB"],231,0)
p(A,"Ms",5,null,["$5"],["M4"],232,0)
p(A,"Mr",5,null,["$5"],["M3"],233,0)
p(A,"Mw",4,null,["$4"],["M7"],234,0)
p(A,"Mu",5,null,["$5"],["Gk"],235,0)
var j
o(j=A.eP.prototype,"geM","bL",0)
o(j,"geN","bM",0)
n(A.eQ.prototype,"gua",0,1,null,["$2","$1"],["bQ","aT"],67,0,0)
m(A.w.prototype,"gj6","pF",13)
n(j=A.e3.prototype,"gtP",0,1,null,["$2","$1"],["bf","jV"],67,0,0)
l(j,"gpf","aA",15)
m(j,"gpb","aK",13)
o(j,"gpw","aS",0)
o(j=A.dZ.prototype,"geM","bL",0)
o(j,"geN","bM",0)
o(j=A.b1.prototype,"geM","bL",0)
o(j,"geN","bM",0)
o(A.ht.prototype,"glZ","r7",0)
l(j=A.cv.prototype,"gr_","r0",15)
m(j,"gr3","r4",13)
o(j,"gr1","r2",0)
o(j=A.hw.prototype,"geM","bL",0)
o(j,"geN","bM",0)
l(j,"gjl","jm",15)
m(j,"gjp","jq",151)
o(j,"gjn","jo",0)
o(j=A.hE.prototype,"geM","bL",0)
o(j,"geN","bM",0)
l(j,"gjl","jm",15)
m(j,"gjp","jq",13)
o(j,"gjn","jo",0)
s(A,"DH","Lk",35)
q(A,"DI","Ll",36)
s(A,"MI","J1",48)
q(A,"MR","Lo",41)
k(j=A.oi.prototype,"gtO","t",15)
o(j,"gea","q",0)
q(A,"GI","Nc",36)
s(A,"GH","Nb",35)
q(A,"MS","K0",7)
p(A,"Np",2,null,["$1$2","$2"],["GU",function(a,b){return A.GU(a,b,t.cZ)}],236,0)
m(j=A.lA.prototype,"gv9","Z",35)
l(j,"gvS","ac",36)
l(j,"gvY","vZ",16)
q(A,"MG","Ic",7)
o(j=A.jb.prototype,"gr5","r6",0)
l(j,"gr8","r9",113)
q(A,"NA","Jm",62)
q(A,"GG","Is",238)
q(A,"MN","Ix",239)
q(A,"MP","IQ",240)
q(A,"MM","I8",241)
q(A,"MO","ID",242)
q(A,"pr","Iw",7)
q(A,"N2","Es",243)
r(A,"N3","Mf",244)
r(A,"Nl","Lm",10)
r(A,"OU","Ln",10)
l(A.mL.prototype,"gwK","wL",9)
q(A,"MK","Cz",163)
l(j=A.ns.prototype,"gvH","vI",40)
l(j,"gvF","vG",133)
o(j,"gqX","jz",0)
q(A,"NG","JT",62)
o(A.om.prototype,"gvp","ki",0)
o(A.mX.prototype,"gka","f6",0)
o(A.mG.prototype,"gka","f6",0)
l(j=A.fk.prototype,"gqY","qZ",40)
o(j,"gmv","e4",3)
m(A.o6.prototype,"gqt","he",55)
m(A.o5.prototype,"gqz","hf",55)
l(j=A.lv.prototype,"gw9","wa",9)
m(j,"gw7","w8",175)
n(j,"gy4",0,5,null,["$5"],["y5"],176,0,0)
n(j,"gxS",0,3,null,["$3"],["xT"],177,0,0)
n(j,"gxK",0,4,null,["$4"],["xL"],58,0,0)
n(j,"gxZ",0,4,null,["$4"],["y_"],58,0,0)
n(j,"gy6",0,3,null,["$3"],["y7"],179,0,0)
m(j,"gyb","yc",59)
m(j,"gxQ","xR",59)
l(j,"gxO","xP",43)
n(j,"gy8",0,4,null,["$4"],["y9"],61,0,0)
n(j,"gyj",0,4,null,["$4"],["yk"],61,0,0)
m(j,"gyf","yg",183)
m(j,"gyd","ye",19)
m(j,"gxX","xY",19)
m(j,"gy0","y3",19)
m(j,"gyh","yi",19)
m(j,"gxM","xN",19)
l(j,"giO","xU",43)
n(j,"gxV",0,3,null,["$3"],["xW"],185,0,0)
l(j,"giQ","ya",43)
l(j,"guI","uJ",20)
l(j,"guD","uE",186)
n(j,"guG",0,5,null,["$5"],["uH"],187,0,0)
n(j,"guO",0,4,null,["$4"],["uP"],32,0,0)
n(j,"guS",0,4,null,["$4"],["uT"],32,0,0)
n(j,"guQ",0,4,null,["$4"],["uR"],32,0,0)
m(j,"guU","uV",64)
m(j,"guM","uN",64)
n(j,"guK",0,5,null,["$5"],["uL"],190,0,0)
m(j,"guB","uC",191)
m(j,"guz","uA",192)
n(j,"gux",0,3,null,["$3"],["uy"],193,0,0)
o(j=A.dB.prototype,"gea","q",3)
o(j,"gvn","cL",3)
o(A.h1.prototype,"gea","q",0)
o(A.lw.prototype,"gqB","qC",0)
l(A.em.prototype,"gu2","mH",210)
l(A.ho.prototype,"gvJ","vK",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.l,null)
q(A.l,[A.CP,J.mc,A.jp,J.fh,A.zA,A.z8,A.o,A.lc,A.ej,A.V,A.af,A.I,A.xl,A.an,A.mq,A.cS,A.lH,A.nF,A.nd,A.lE,A.o4,A.iw,A.nR,A.jD,A.hB,A.iR,A.fp,A.hx,A.cn,A.y9,A.mF,A.iq,A.kd,A.uO,A.bD,A.aT,A.mo,A.et,A.hA,A.ob,A.h7,A.AR,A.oj,A.p8,A.cm,A.oy,A.p5,A.kh,A.jL,A.od,A.k2,A.p2,A.am,A.aa,A.b1,A.jR,A.nG,A.k0,A.eQ,A.cb,A.w,A.oc,A.e3,A.p3,A.jN,A.o9,A.ou,A.zJ,A.e2,A.ht,A.cv,A.jX,A.Bf,A.Bh,A.Bg,A.Bd,A.Be,A.Bc,A.B9,A.pe,A.B8,A.B7,A.Bb,A.Ba,A.pd,A.pf,A.pc,A.hM,A.jK,A.oz,A.Ar,A.e1,A.oG,A.b3,A.oI,A.p7,A.oH,A.nq,A.lf,A.aE,A.of,A.pV,A.oe,A.ld,A.oY,A.eR,A.An,A.AS,A.pa,A.dk,A.aN,A.ox,A.aF,A.aB,A.zK,A.mI,A.jx,A.ow,A.bk,A.mb,A.S,A.U,A.p1,A.jz,A.n5,A.a3,A.ko,A.ye,A.cc,A.lI,A.mE,A.Ag,A.Ah,A.lF,A.a4,A.lB,A.iG,A.ev,A.hJ,A.hz,A.iQ,A.lA,A.mD,A.nS,A.ch,A.c0,A.td,A.q7,A.iP,A.js,A.v3,A.jr,A.xk,A.qT,A.r8,A.zz,A.ei,A.l3,A.l4,A.pR,A.mw,A.fG,A.pQ,A.jb,A.wl,A.AK,A.wa,A.vT,A.jd,A.hF,A.wb,A.AL,A.er,A.dy,A.m6,A.cG,A.dz,A.dR,A.vR,A.lk,A.jg,A.c1,A.lY,A.n_,A.ah,A.vv,A.x0,A.eD,A.cL,A.mV,A.xi,A.n8,A.eI,A.b5,A.eL,A.nk,A.dN,A.a2,A.q4,A.q5,A.q6,A.rG,A.f_,A.Ap,A.p4,A.hD,A.tN,A.im,A.qr,A.il,A.dG,A.ir,A.bj,A.uV,A.cE,A.rW,A.lS,A.pT,A.fi,A.i7,A.no,A.iu,A.rJ,A.uM,A.nm,A.wm,A.oF,A.v4,A.vw,A.mL,A.uN,A.AT,A.wZ,A.d4,A.b_,A.cj,A.mU,A.cM,A.xh,A.cl,A.x8,A.aX,A.dA,A.fC,A.eq,A.c7,A.qC,A.cA,A.n7,A.xf,A.ol,A.hm,A.pF,A.bi,A.qE,A.ns,A.d2,A.ez,A.ve,A.dI,A.mr,A.Ay,A.Aw,A.vD,A.pS,A.iO,A.jj,A.vI,A.mT,A.wA,A.b4,A.wJ,A.h8,A.xH,A.bo,A.h6,A.d7,A.fT,A.ji,A.cz,A.nH,A.xJ,A.jh,A.jC,A.xX,A.cN,A.ck,A.eA,A.bF,A.AD,A.y_,A.om,A.hp,A.fk,A.yK,A.hk,A.o3,A.yw,A.oK,A.r9,A.eM,A.on,A.yB,A.hl,A.o6,A.o5,A.qL,A.xG,A.mJ,A.mK,A.xp,A.ng,A.h3,A.te,A.br,A.cu,A.co,A.nj,A.cp,A.c6,A.kS,A.rb,A.e4,A.xr,A.ek,A.b6,A.l7,A.qR,A.oT,A.Ax,A.bN,A.ls,A.df,A.jv,A.yr,A.ym,A.yt,A.ys,A.dV,A.dg,A.lv,A.d6,A.eS,A.yn,A.pM,A.k1,A.zN,A.oJ,A.oB,A.At,A.yh,A.ii,A.xa,A.id,A.lr,A.lK,A.tc,A.cZ,A.lw,A.j1,A.el,A.wq,A.fW,A.kf,A.hq,A.lx,A.yG,A.kr,A.ot,A.zI,A.xF,A.CC,A.jY])
q(J.mc,[J.me,J.iI,J.aH,J.bs,J.fE,J.es,J.dC])
q(J.aH,[J.dE,J.z,A.fL,A.j3])
q(J.dE,[J.mM,J.dU,J.bO])
r(J.md,A.jp)
r(J.tK,J.z)
q(J.es,[J.iH,J.mf])
q(A.o,[A.dY,A.K,A.ci,A.at,A.is,A.eJ,A.d8,A.dW,A.eV,A.oa,A.p0,A.hH,A.eu,A.jo])
q(A.dY,[A.eg,A.ks])
r(A.jV,A.eg)
r(A.jS,A.ks)
q(A.ej,[A.q9,A.q2,A.q8,A.tE,A.xY,A.C4,A.C6,A.yR,A.yQ,A.Bk,A.Bj,A.ta,A.t5,A.zR,A.zQ,A.A1,A.A4,A.xB,A.xC,A.xz,A.zH,A.zG,A.AC,A.A7,A.zD,A.Aq,A.v8,A.Al,A.qQ,A.z3,A.t6,A.C8,A.Ce,A.Cf,A.BO,A.pY,A.q_,A.q1,A.l6,A.pU,A.Bm,A.pW,A.vc,A.BV,A.w9,A.w8,A.vU,A.w4,A.w5,A.w6,A.w7,A.w2,A.w3,A.wk,A.we,A.wf,A.wc,A.wh,A.qO,A.qP,A.x2,A.wY,A.wo,A.xt,A.xu,A.ug,A.uh,A.uj,A.uF,A.uk,A.ul,A.um,A.un,A.uo,A.up,A.uq,A.ur,A.us,A.ut,A.uv,A.uw,A.ux,A.uy,A.uz,A.uA,A.uB,A.u2,A.u4,A.u8,A.tQ,A.tP,A.u6,A.u5,A.uc,A.ud,A.ue,A.uf,A.tX,A.tZ,A.u0,A.tT,A.tR,A.ua,A.ub,A.tW,A.tU,A.rD,A.rC,A.rE,A.rB,A.rA,A.rz,A.ry,A.ru,A.rv,A.rw,A.uW,A.uY,A.v_,A.v1,A.uX,A.rX,A.rY,A.Cd,A.rM,A.rK,A.rN,A.rO,A.rQ,A.rS,A.rU,A.Cj,A.v7,A.v6,A.v5,A.vq,A.vm,A.vp,A.vn,A.wR,A.wT,A.wU,A.wV,A.xb,A.xe,A.xg,A.qn,A.qq,A.qm,A.qp,A.qj,A.qi,A.qf,A.qo,A.qk,A.qh,A.qg,A.ql,A.qc,A.pG,A.pH,A.qG,A.qF,A.xU,A.xK,A.xS,A.xN,A.xO,A.xP,A.xL,A.BL,A.BM,A.vl,A.vf,A.vg,A.vh,A.vi,A.vj,A.vF,A.vG,A.vO,A.vM,A.vL,A.vK,A.vN,A.wH,A.wB,A.wD,A.wF,A.wK,A.wP,A.xI,A.BX,A.Ci,A.Cg,A.Ch,A.y8,A.y6,A.y2,A.y4,A.y0,A.zq,A.zn,A.x4,A.x3,A.yL,A.yv,A.uT,A.uU,A.v2,A.zx,A.zy,A.C2,A.C1,A.BR,A.yF,A.yD,A.qM,A.qN,A.BC,A.tg,A.tf,A.th,A.tj,A.tl,A.ti,A.tz,A.xv,A.rj,A.AO,A.Cb,A.Ck,A.Cl,A.pL,A.zB,A.zC,A.qu,A.qv,A.qz,A.qA,A.qB,A.rV,A.pP,A.pN,A.Aa,A.Ad,A.Ae,A.tD,A.tB,A.A9,A.xo,A.yi,A.yj,A.yk,A.yl,A.wy,A.wz,A.wx,A.ww,A.wv,A.yx,A.rn,A.vx,A.rF,A.BK,A.qs,A.qt,A.qw,A.qx,A.qy,A.Bt,A.zd,A.zi,A.zl,A.zb,A.AI,A.AJ,A.AH,A.AF,A.zL,A.zM])
q(A.q9,[A.z9,A.q3,A.qK,A.tL,A.C5,A.Bl,A.BD,A.tb,A.t4,A.zS,A.A2,A.A5,A.yN,A.A6,A.uP,A.va,A.Ao,A.z2,A.B1,A.yf,A.B0,A.B_,A.t8,A.t7,A.pX,A.pZ,A.q0,A.l5,A.vu,A.vd,A.vQ,A.vW,A.wd,A.vS,A.Bs,A.x1,A.wX,A.wp,A.x_,A.xj,A.Cp,A.BI,A.tO,A.tS,A.tV,A.rx,A.rZ,A.vr,A.wW,A.xc,A.xd,A.qe,A.pI,A.xM,A.yz,A.BS,A.yC,A.tk,A.rm,A.Af,A.yy,A.zu,A.yJ])
r(A.bM,A.jS)
q(A.V,[A.eh,A.bC,A.dh,A.oD])
q(A.af,[A.dD,A.mY,A.dd,A.mg,A.nQ,A.n6,A.ov,A.jc,A.iL,A.kX,A.bA,A.cR,A.nP,A.bm,A.li])
q(A.I,[A.he,A.na,A.nZ,A.hi,A.em,A.hc])
r(A.cg,A.he)
q(A.q8,[A.Ca,A.ws,A.yS,A.yT,A.AV,A.AU,A.Bi,A.yV,A.yW,A.yY,A.yZ,A.yX,A.yU,A.t9,A.zT,A.zY,A.zX,A.zV,A.zU,A.A0,A.A_,A.zZ,A.A3,A.xA,A.xD,A.xy,A.AN,A.AM,A.yM,A.z7,A.z6,A.Au,A.As,A.Bn,A.Bo,A.zF,A.zE,A.AB,A.AA,A.By,A.B4,A.B3,A.rt,A.Bv,A.Bw,A.vb,A.vP,A.w0,A.w1,A.vY,A.vV,A.vZ,A.w_,A.vX,A.wi,A.wj,A.wg,A.ui,A.uu,A.uG,A.uH,A.uI,A.uJ,A.uK,A.uL,A.uC,A.uD,A.uE,A.u1,A.u3,A.u7,A.tY,A.u_,A.u9,A.rI,A.uZ,A.v0,A.rL,A.rP,A.rR,A.rT,A.wS,A.rH,A.tA,A.t2,A.t1,A.xx,A.qb,A.qd,A.qD,A.qJ,A.qI,A.qH,A.xR,A.xQ,A.xT,A.wI,A.wC,A.wE,A.wG,A.wL,A.wQ,A.wO,A.wN,A.wM,A.xW,A.vJ,A.vE,A.y7,A.y5,A.y3,A.y1,A.zr,A.zo,A.zp,A.x5,A.vC,A.ty,A.tm,A.tt,A.tu,A.tv,A.tw,A.tr,A.ts,A.tn,A.to,A.tp,A.tq,A.tx,A.A8,A.rk,A.rl,A.rh,A.rg,A.ri,A.rd,A.rc,A.re,A.rf,A.AP,A.AQ,A.Cm,A.qX,A.qU,A.qZ,A.r0,A.r2,A.qW,A.r1,A.r6,A.r4,A.r3,A.qY,A.r_,A.r5,A.qV,A.pJ,A.pK,A.yo,A.pO,A.Ab,A.Ac,A.zO,A.tC,A.ro,A.rp,A.vz,A.vy,A.zs,A.zw,A.zt,A.zv,A.zc,A.zh,A.zk,A.ze,A.zj,A.zm,A.zf,A.zg,A.rs,A.rr,A.rq,A.yH,A.yI,A.AG])
q(A.K,[A.a_,A.eo,A.T,A.al,A.aI,A.eU,A.k4])
q(A.a_,[A.cq,A.X,A.bv,A.iN,A.oE])
r(A.en,A.ci)
r(A.io,A.eJ)
r(A.fu,A.d8)
q(A.hB,[A.oL,A.oM,A.oN])
q(A.oL,[A.a5,A.ka,A.kb,A.hC,A.oO])
r(A.eY,A.oM)
q(A.oN,[A.eZ,A.oP])
r(A.kn,A.iR)
r(A.cQ,A.kn)
r(A.ij,A.cQ)
q(A.fp,[A.aW,A.iA])
q(A.cn,[A.ik,A.kc])
r(A.dw,A.ik)
r(A.iE,A.tE)
r(A.j8,A.dd)
q(A.xY,[A.xw,A.i9])
q(A.bC,[A.iK,A.iJ,A.k3])
r(A.fK,A.fL)
q(A.j3,[A.j2,A.fM])
q(A.fM,[A.k6,A.k8])
r(A.k7,A.k6)
r(A.dL,A.k7)
r(A.k9,A.k8)
r(A.bQ,A.k9)
q(A.dL,[A.my,A.mz])
q(A.bQ,[A.mA,A.mB,A.mC,A.j4,A.j5,A.j6,A.ey])
r(A.ki,A.ov)
q(A.aa,[A.hG,A.jA,A.jW,A.dj,A.jZ,A.jQ,A.i5,A.hu])
r(A.b7,A.hG)
r(A.b0,A.b7)
q(A.b1,[A.dZ,A.hw,A.hE])
r(A.eP,A.dZ)
r(A.jM,A.jR)
q(A.eQ,[A.aL,A.ao])
q(A.e3,[A.cT,A.hI])
r(A.ke,A.o9)
q(A.ou,[A.ca,A.hs])
r(A.k5,A.cT)
r(A.eW,A.jZ)
q(A.pc,[A.oo,A.oS])
q(A.dh,[A.e_,A.jT])
r(A.di,A.kc)
q(A.nq,[A.kg,A.AW,A.z_,A.p_])
r(A.Aj,A.kg)
q(A.lf,[A.ep,A.l1,A.tM])
q(A.ep,[A.kV,A.mm,A.nW])
q(A.aE,[A.p6,A.i6,A.l2,A.mj,A.mi,A.nX,A.jF,A.m3])
q(A.p6,[A.kW,A.mn])
r(A.z4,A.of)
q(A.pV,[A.z0,A.hn,A.oi,A.B2])
r(A.yO,A.z0)
r(A.mh,A.iL)
r(A.Ak,A.ld)
r(A.Am,A.An)
r(A.pg,A.pa)
r(A.B5,A.pg)
q(A.bA,[A.d5,A.iC])
r(A.or,A.ko)
r(A.h0,A.hJ)
r(A.oV,A.m3)
r(A.AE,A.td)
r(A.oW,A.AE)
r(A.kQ,A.q7)
r(A.jt,A.xk)
r(A.op,A.kQ)
r(A.lt,A.op)
r(A.oq,A.v3)
r(A.r7,A.oq)
r(A.n0,A.ei)
r(A.la,A.l3)
r(A.du,A.jA)
q(A.l4,[A.vt,A.x9])
r(A.jB,A.pR)
r(A.np,A.jB)
r(A.ib,A.a4)
r(A.mO,A.jb)
q(A.c1,[A.lg,A.ln,A.jH,A.fy,A.nA,A.l_])
q(A.n_,[A.lN,A.lO,A.lT,A.lP,A.lM,A.m1,A.lW,A.lR,A.lQ,A.lZ,A.lU,A.lG,A.nl,A.mH,A.lb,A.m4,A.le,A.m2,A.n3,A.mx,A.mW,A.lq,A.lp,A.lC,A.m7,A.kR,A.lJ,A.n9,A.nI,A.nJ,A.nL,A.nN,A.nM,A.nK,A.o1,A.o2,A.o0,A.kT,A.o_,A.nY,A.mS,A.lh,A.n4,A.lm,A.ll,A.n1,A.kO,A.kP,A.lo,A.ny,A.nD,A.nt,A.nu,A.nw,A.nE,A.nx,A.nB])
q(A.ah,[A.m0,A.it,A.fA,A.lX,A.fz,A.fx,A.h5,A.fO,A.ia,A.m5,A.fX,A.fY,A.fJ,A.fV,A.fq,A.fs,A.fD,A.fg,A.fw,A.h_,A.fo,A.fn,A.hb,A.hj,A.fS,A.fm,A.nz,A.nv,A.nC])
q(A.vv,[A.iX,A.j_,A.iY,A.j0,A.iU,A.iV,A.iT,A.iZ,A.iW])
q(A.zK,[A.aY,A.cy,A.dT,A.mN,A.ic,A.dv,A.d0,A.lj,A.c2,A.iD,A.vs,A.dK,A.ed,A.c8,A.l0,A.cO,A.ff,A.fP,A.j9,A.lD,A.jw,A.vH,A.fB,A.ms,A.dx,A.cs,A.iv,A.dP])
q(A.cL,[A.iM,A.j7,A.i2,A.i3])
r(A.pE,A.rG)
q(A.dG,[A.hf,A.hd,A.fN,A.ie,A.je,A.ix,A.da,A.jn,A.jl,A.jq,A.fZ,A.jy,A.iS,A.ih,A.fr,A.jk])
q(A.fZ,[A.jE,A.iy])
r(A.mk,A.oF)
q(A.d4,[A.aj,A.c3,A.dt,A.cY])
r(A.fl,A.ol)
r(A.yP,A.Aw)
q(A.bo,[A.eK,A.dO,A.ju,A.c_,A.cF,A.cK,A.eB,A.fR,A.ft,A.xV,A.ee])
q(A.fk,[A.mX,A.mG])
r(A.yu,A.pT)
r(A.uS,A.r9)
r(A.mp,A.eM)
q(A.hl,[A.jJ,A.eN])
r(A.pb,A.o6)
r(A.yE,A.pb)
r(A.tI,A.xG)
q(A.tI,[A.wn,A.yg,A.yA])
r(A.lV,A.ng)
q(A.h3,[A.hv,A.ni])
r(A.h2,A.nj)
r(A.d9,A.ni)
r(A.h4,A.ek)
r(A.l8,A.b6)
q(A.l8,[A.m8,A.dB,A.h1])
q(A.l7,[A.oA,A.oZ])
r(A.oQ,A.qR)
r(A.oR,A.oQ)
r(A.n2,A.oR)
r(A.oU,A.oT)
r(A.c5,A.oU)
q(A.b3,[A.eO,A.b8])
r(A.hh,A.xr)
q(A.b8,[A.k_,A.jU,A.hr,A.hL])
r(A.wu,A.xa)
r(A.qS,A.lr)
r(A.ds,A.fW)
r(A.ho,A.wu)
q(A.kr,[A.os,A.oX])
r(A.nr,A.h2)
r(A.oC,A.hc)
r(A.ct,A.oC)
s(A.he,A.nR)
s(A.ks,A.I)
s(A.k6,A.I)
s(A.k7,A.iw)
s(A.k8,A.I)
s(A.k9,A.iw)
s(A.cT,A.jN)
s(A.hI,A.p3)
s(A.kn,A.p7)
s(A.pg,A.nq)
s(A.op,A.qT)
s(A.oq,A.r8)
s(A.oF,A.q5)
s(A.ol,A.q6)
s(A.pb,A.o5)
s(A.oQ,A.I)
s(A.oR,A.mD)
s(A.oT,A.nS)
s(A.oU,A.V)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ab:"double",aV:"num",k:"String",R:"bool",U:"Null",q:"List",l:"Object",J:"Map",M:"JSObject"},mangledNames:{},types:["~()","~(M)","U()","y<~>()","y<~>(bF)","y<U>(bF)","U(l,aJ)","k(k)","fO(~)","~(i)","i()","~(q<i>)","S<k,@>(@,@)","~(l,aJ)","R(k)","~(l?)","R(l?)","U(M)","0&()","i(bp,i)","~(~())","U(l)","y<b4>()","y<U>()","R(@)","R(bj)","~(dc)","y<~>(k1)","~(@)","U(@)","~(l?,l?)","l?(J<k,l?>)","~(d6,i,i,i)","M()","l?(l?)","R(l?,l?)","i(l?)","y<~>(~)","U(~)","~(k,k)","~(a2)","@(@)","R(br)","i(bp)","y<U>(ra)","S<k,l?>(@,@)","R()","bj()","i(@,@)","R(dA)","y<q<k>>()","y<i>()","k(J<k,l?>)","y<@>()","R(aX)","y<l?>(o7,hk)","i(cG)","y<cG>(k)","i(b6,i,i,i)","i(b6,i)","k(ex)","i(bp,i,i,bs)","ab(i)","~(k,@)","~(d6,i)","@()","~(@,@)","~(l[aJ?])","@(k)","y<bn<~>>()","~(~)","y<eM>()","R(c7)","fx(i)","y<k>()","fS(i)","fm(i)","fo(q<bi>)","fn(bi?)","fA(q<bj>)","fz(i)","U(@,aJ)","h5(R)","fJ(q<k>)","y<cl>()","fV(cl)","y<q<cM>>()","h_(q<cM>)","R(k,k)","hb(~)","R(hD)","~(J<k,l?>?)","~(q<J<k,l?>>)","i(k)","aa<q<i>>()","U(k,k[l?])","~(eI)","~(q<bi>)","J<k,l?>(c5)","~(dJ<q<i>>)","l?(xs)","~(i,@)","k(k,k)","eR<@,@>(bB<@>)","y<bj>(bF)","fG()","i(i,i)","i(i,cE)","R(cE)","k(cE)","~(q<ch>)","y<aa<q<i>>>()","k?(J<k,l?>)","~(jd)","i(c7,c7)","S<k,dy>(k,h6)","~(k,l?)","k(cj)","k()","R(cj)","aX()","dA()","fC()","eq()","c7()","d7(@)","k(@)","y<J<k,l?>?>(k)","R(i)","k(i,i)","y<~>?()","bi()","i(i)","~(cz)","w<@>?()","y<b5>(b5)","b5(b5)","b5(l)","U(b5)","y<dR>(k)","dI/(l?)","y<l?>(l?)","J<k,l?>(q<l?>)","y<i>(bF)","i(dR)","aB(i)","k(i[i])","cN()","ck()","eA()","y<U>(~)","~(@,aJ)","y<@>(bF)","q<J<k,l?>>(cl)","y<R>(k)","y<~>(k)","U(l?)","R(cA<l?>)","R(cy)","R(dT)","~(c1)","k(k?)","k?()","bi(J<k,l?>)","0&(k,i?)","l(cu)","l(br)","i(br,br)","q<cu>(S<l,q<br>>)","d9()","k(l?)","~(i,k,i)","~(D0,q<D1>)","q<eD>(l?)","~(O,au,O,~())","~(bs,i)","bp?(b6,i,i,i,i)","i(b6,i,i)","R(aY)","i(b6?,i,i)","q<cL>(l?)","i(+(k,l),+(k,l))","~(k,k?)","i(bp,bs)","U(bO,bO)","i(bp,i,i)","i(i())","~(~(i,k,i),i,i,i,bs)","i(+(k,l?),+(k,l?))","~(dN)","i(d6,i,i,i,i)","i(i(i),i)","i(D4,i)","i(D4,i,i)","l?(~)","y<J<k,l?>?>()","M(z<l?>)","fX(J<k,l?>?)","y<q<J<k,l?>?>>()","M(M?)","~(ef)","y<~>(i,cP)","y<~>(i)","cP()","y<M>(k)","U(cZ)","y<U>(M)","M(l)","U(l?,aJ)","k?(l?)","~(ek)","M(M)","y<M>()","fY(q<J<k,l?>?>)","U(~())","y<bn<cp>>()","~(cp)","R(hq)","y<q<l?>>()","y<el>()","0&(l?,aJ)","~(dJ<M>)","@(@,k)","~(O?,au?,O,l,aJ)","0^(O?,au?,O,0^())<l?>","0^(O?,au?,O,0^(1^),1^)<l?,l?>","0^(O?,au?,O,0^(1^,2^),1^,2^)<l?,l?,l?>","0^()(O,au,O,0^())<l?>","0^(1^)(O,au,O,0^(1^))<l?,l?>","0^(1^,2^)(O,au,O,0^(1^,2^))<l?,l?,l?>","am?(O,au,O,l,aJ?)","~(O?,au?,O,~())","dc(O,au,O,aB,~())","dc(O,au,O,aB,~(dc))","~(O,au,O,k)","O(O?,au?,O,jK?,J<l?,l?>?)","0^(0^,0^)<aV>","y<aV?>()","fq(i)","fs(q<l?>)","fD(q<k>)","fg(aV?)","fw(k)","bj(J<k,l?>)","aF()","i(cu)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.ka&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.kb&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hC&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.oO&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eY&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eZ&&A.GY(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.oP&&A.GY(a,b.a)}}
A.KQ(v.typeUniverse,JSON.parse('{"bO":"dE","mM":"dE","dU":"dE","O2":"fL","z":{"q":["1"],"aH":[],"K":["1"],"M":[],"o":["1"],"bb":["1"]},"me":{"R":[],"ak":[]},"iI":{"U":[],"ak":[]},"aH":{"M":[]},"dE":{"aH":[],"M":[]},"md":{"jp":[]},"tK":{"z":["1"],"q":["1"],"aH":[],"K":["1"],"M":[],"o":["1"],"bb":["1"]},"es":{"ab":[],"aV":[],"aw":["aV"]},"iH":{"ab":[],"i":[],"aV":[],"aw":["aV"],"ak":[]},"mf":{"ab":[],"aV":[],"aw":["aV"],"ak":[]},"dC":{"k":[],"aw":["k"],"bb":["@"],"ak":[]},"dY":{"o":["2"]},"eg":{"dY":["1","2"],"o":["2"],"o.E":"2"},"jV":{"eg":["1","2"],"dY":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"jS":{"I":["2"],"q":["2"],"dY":["1","2"],"K":["2"],"o":["2"]},"bM":{"jS":["1","2"],"I":["2"],"q":["2"],"dY":["1","2"],"K":["2"],"o":["2"],"I.E":"2","o.E":"2"},"eh":{"V":["3","4"],"J":["3","4"],"V.V":"4","V.K":"3"},"dD":{"af":[]},"mY":{"af":[]},"cg":{"I":["i"],"q":["i"],"K":["i"],"o":["i"],"I.E":"i"},"K":{"o":["1"]},"a_":{"K":["1"],"o":["1"]},"cq":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"ci":{"o":["2"],"o.E":"2"},"en":{"ci":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"X":{"a_":["2"],"K":["2"],"o":["2"],"a_.E":"2","o.E":"2"},"at":{"o":["1"],"o.E":"1"},"is":{"o":["2"],"o.E":"2"},"eJ":{"o":["1"],"o.E":"1"},"io":{"eJ":["1"],"K":["1"],"o":["1"],"o.E":"1"},"d8":{"o":["1"],"o.E":"1"},"fu":{"d8":["1"],"K":["1"],"o":["1"],"o.E":"1"},"eo":{"K":["1"],"o":["1"],"o.E":"1"},"dW":{"o":["1"],"o.E":"1"},"he":{"I":["1"],"q":["1"],"K":["1"],"o":["1"]},"bv":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"ij":{"cQ":["1","2"],"J":["1","2"]},"fp":{"J":["1","2"]},"aW":{"fp":["1","2"],"J":["1","2"]},"eV":{"o":["1"],"o.E":"1"},"iA":{"fp":["1","2"],"J":["1","2"]},"ik":{"cn":["1"],"eG":["1"],"K":["1"],"o":["1"]},"dw":{"cn":["1"],"eG":["1"],"K":["1"],"o":["1"]},"j8":{"dd":[],"af":[]},"mg":{"af":[]},"nQ":{"af":[]},"mF":{"G":[]},"kd":{"aJ":[]},"n6":{"af":[]},"bC":{"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"T":{"K":["1"],"o":["1"],"o.E":"1"},"al":{"K":["1"],"o":["1"],"o.E":"1"},"aI":{"K":["S<1,2>"],"o":["S<1,2>"],"o.E":"S<1,2>"},"iK":{"bC":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"iJ":{"bC":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"hA":{"mZ":[],"ex":[]},"oa":{"o":["mZ"],"o.E":"mZ"},"h7":{"ex":[]},"p0":{"o":["ex"],"o.E":"ex"},"fK":{"aH":[],"M":[],"ef":[],"ak":[]},"fL":{"aH":[],"M":[],"ef":[],"ak":[]},"j3":{"aH":[],"M":[]},"p8":{"ef":[]},"j2":{"aH":[],"Cx":[],"M":[],"ak":[]},"fM":{"bP":["1"],"aH":[],"M":[],"bb":["1"]},"dL":{"I":["ab"],"q":["ab"],"bP":["ab"],"aH":[],"K":["ab"],"M":[],"bb":["ab"],"o":["ab"]},"bQ":{"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"]},"my":{"dL":[],"t_":[],"I":["ab"],"q":["ab"],"bP":["ab"],"aH":[],"K":["ab"],"M":[],"bb":["ab"],"o":["ab"],"ak":[],"I.E":"ab"},"mz":{"dL":[],"t0":[],"I":["ab"],"q":["ab"],"bP":["ab"],"aH":[],"K":["ab"],"M":[],"bb":["ab"],"o":["ab"],"ak":[],"I.E":"ab"},"mA":{"bQ":[],"tF":[],"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"mB":{"bQ":[],"tG":[],"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"mC":{"bQ":[],"tH":[],"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"j4":{"bQ":[],"yb":[],"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"j5":{"bQ":[],"yc":[],"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"j6":{"bQ":[],"yd":[],"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"ey":{"bQ":[],"cP":[],"I":["i"],"q":["i"],"bP":["i"],"aH":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"ov":{"af":[]},"ki":{"dd":[],"af":[]},"am":{"af":[]},"w":{"y":["1"]},"dJ":{"bB":["1"]},"kh":{"dc":[]},"jL":{"ig":["1"]},"hH":{"o":["1"],"o.E":"1"},"b0":{"b7":["1"],"hG":["1"],"aa":["1"],"aa.T":"1"},"eP":{"dZ":["1"],"b1":["1"],"bn":["1"],"b1.T":"1"},"jR":{"bB":["1"]},"jM":{"jR":["1"],"bB":["1"]},"nG":{"G":[]},"jc":{"af":[]},"eQ":{"ig":["1"]},"aL":{"eQ":["1"],"ig":["1"]},"ao":{"eQ":["1"],"ig":["1"]},"jA":{"aa":["1"]},"e3":{"bB":["1"]},"cT":{"jN":["1"],"e3":["1"],"bB":["1"]},"hI":{"e3":["1"],"bB":["1"]},"b7":{"hG":["1"],"aa":["1"],"aa.T":"1"},"dZ":{"b1":["1"],"bn":["1"],"b1.T":"1"},"ke":{"o9":["1"]},"b1":{"bn":["1"],"b1.T":"1"},"hG":{"aa":["1"]},"ht":{"bn":["1"]},"jW":{"aa":["1"],"aa.T":"1"},"dj":{"aa":["1"],"aa.T":"1"},"k5":{"cT":["1"],"jN":["1"],"e3":["1"],"dJ":["1"],"bB":["1"]},"jZ":{"aa":["2"]},"hw":{"b1":["2"],"bn":["2"],"b1.T":"2"},"eW":{"jZ":["1","2"],"aa":["2"],"aa.T":"2"},"jX":{"bB":["1"]},"hE":{"b1":["2"],"bn":["2"],"b1.T":"2"},"jQ":{"aa":["2"],"aa.T":"2"},"pc":{"O":[]},"oo":{"O":[]},"oS":{"O":[]},"hM":{"au":[]},"dh":{"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"e_":{"dh":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"jT":{"dh":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"eU":{"K":["1"],"o":["1"],"o.E":"1"},"k3":{"bC":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"di":{"cn":["1"],"eG":["1"],"K":["1"],"o":["1"]},"eu":{"o":["1"],"o.E":"1"},"I":{"q":["1"],"K":["1"],"o":["1"]},"V":{"J":["1","2"]},"k4":{"K":["2"],"o":["2"],"o.E":"2"},"iR":{"J":["1","2"]},"cQ":{"J":["1","2"]},"iN":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"cn":{"eG":["1"],"K":["1"],"o":["1"]},"kc":{"cn":["1"],"eG":["1"],"K":["1"],"o":["1"]},"eR":{"bB":["1"]},"oD":{"V":["k","@"],"J":["k","@"],"V.V":"@","V.K":"k"},"oE":{"a_":["k"],"K":["k"],"o":["k"],"a_.E":"k","o.E":"k"},"kV":{"ep":[]},"p6":{"aE":["k","q<i>"]},"kW":{"aE":["k","q<i>"],"aE.T":"q<i>"},"i6":{"aE":["q<i>","k"],"aE.T":"k"},"l2":{"aE":["k","q<i>"],"aE.T":"q<i>"},"iL":{"af":[]},"mh":{"af":[]},"mj":{"aE":["l?","k"],"aE.T":"k"},"mi":{"aE":["k","l?"],"aE.T":"l?"},"mm":{"ep":[]},"mn":{"aE":["k","q<i>"],"aE.T":"q<i>"},"nW":{"ep":[]},"nX":{"aE":["k","q<i>"],"aE.T":"q<i>"},"jF":{"aE":["q<i>","k"],"aE.T":"k"},"Ea":{"aw":["Ea"]},"aF":{"aw":["aF"]},"ab":{"aV":[],"aw":["aV"]},"aB":{"aw":["aB"]},"i":{"aV":[],"aw":["aV"]},"q":{"K":["1"],"o":["1"]},"aV":{"aw":["aV"]},"mZ":{"ex":[]},"eG":{"K":["1"],"o":["1"]},"k":{"aw":["k"]},"aN":{"aw":["Ea"]},"kX":{"af":[]},"dd":{"af":[]},"bA":{"af":[]},"d5":{"af":[]},"iC":{"d5":[],"af":[]},"cR":{"af":[]},"nP":{"cR":[],"af":[]},"bm":{"af":[]},"li":{"af":[]},"mI":{"af":[]},"jx":{"af":[]},"ow":{"G":[]},"bk":{"G":[]},"mb":{"cR":[],"G":[],"af":[]},"p1":{"aJ":[]},"jo":{"o":["i"],"o.E":"i"},"ko":{"nT":[]},"cc":{"nT":[]},"or":{"nT":[]},"mE":{"G":[]},"tH":{"q":["i"],"K":["i"],"o":["i"]},"cP":{"q":["i"],"K":["i"],"o":["i"]},"yd":{"q":["i"],"K":["i"],"o":["i"]},"tF":{"q":["i"],"K":["i"],"o":["i"]},"yb":{"q":["i"],"K":["i"],"o":["i"]},"tG":{"q":["i"],"K":["i"],"o":["i"]},"yc":{"q":["i"],"K":["i"],"o":["i"]},"t_":{"q":["ab"],"K":["ab"],"o":["ab"]},"t0":{"q":["ab"],"K":["ab"],"o":["ab"]},"a4":{"J":["2","3"]},"h0":{"hJ":["1","eG<1>"],"hJ.E":"1"},"m3":{"aE":["q<i>","ch"]},"oV":{"aE":["q<i>","ch"],"aE.T":"ch"},"js":{"G":[]},"na":{"I":["i"],"q":["i"],"K":["i"],"o":["i"],"I.E":"i"},"n0":{"G":[]},"l3":{"Cy":[]},"la":{"Cy":[]},"du":{"aa":["q<i>"],"aa.T":"q<i>"},"ei":{"G":[]},"np":{"jB":[]},"ib":{"a4":["k","k","1"],"J":["k","1"],"a4.V":"1","a4.K":"k","a4.C":"k"},"jb":{"D9":[]},"mO":{"D9":[]},"dz":{"G":[]},"m0":{"ah":[]},"it":{"ah":[]},"fA":{"ah":[]},"lX":{"ah":[]},"fz":{"ah":[]},"fx":{"ah":[]},"h5":{"ah":[]},"fO":{"ah":[]},"ia":{"ah":[]},"m5":{"ah":[]},"fX":{"ah":[]},"fY":{"ah":[]},"fJ":{"ah":[]},"fV":{"ah":[]},"fq":{"ah":[]},"fs":{"ah":[]},"fD":{"ah":[]},"fg":{"ah":[]},"fw":{"ah":[]},"h_":{"ah":[]},"fo":{"ah":[]},"fn":{"ah":[]},"hb":{"ah":[]},"hj":{"ah":[]},"fS":{"ah":[]},"fm":{"ah":[]},"nz":{"ah":[]},"nv":{"ah":[]},"nC":{"ah":[]},"jg":{"G":[]},"lg":{"c1":[]},"ln":{"c1":[]},"jH":{"c1":[]},"fy":{"c1":[]},"iM":{"cL":[]},"j7":{"cL":[]},"i2":{"cL":[]},"i3":{"cL":[]},"nA":{"c1":[]},"l_":{"c1":[]},"eL":{"G":[]},"f_":{"G":[]},"im":{"ra":[]},"dG":{"G":[]},"hf":{"G":[]},"hd":{"G":[]},"fN":{"G":[]},"ie":{"G":[]},"je":{"G":[]},"ix":{"G":[]},"da":{"G":[]},"jn":{"G":[]},"jl":{"G":[]},"jq":{"G":[]},"fZ":{"G":[]},"jE":{"G":[]},"iy":{"G":[]},"jy":{"G":[]},"iS":{"G":[]},"ih":{"G":[]},"fr":{"G":[]},"jk":{"G":[]},"fi":{"G":[]},"i7":{"G":[]},"aj":{"d4":[]},"c3":{"d4":[]},"dt":{"d4":[]},"cY":{"d4":[]},"hm":{"G":[]},"d2":{"G":[]},"bo":{"G":[]},"eK":{"G":[]},"dO":{"G":[]},"ju":{"G":[]},"c_":{"G":[]},"cF":{"G":[]},"cK":{"G":[]},"eB":{"G":[]},"fR":{"G":[]},"ft":{"G":[]},"ee":{"G":[]},"oK":{"EP":[]},"mp":{"eM":[]},"on":{"o7":[]},"jJ":{"hl":[]},"eN":{"hl":[]},"mK":{"G":[]},"lV":{"co":[],"aw":["co"]},"hv":{"d9":[],"aw":["nh"]},"co":{"aw":["co"]},"ng":{"co":[],"aw":["co"]},"nh":{"aw":["nh"]},"ni":{"aw":["nh"]},"nj":{"G":[]},"h2":{"bk":[],"G":[]},"h3":{"aw":["nh"]},"d9":{"aw":["nh"]},"c6":{"G":[]},"xs":{"q":["l?"],"K":["l?"],"o":["l?"]},"nZ":{"I":["l?"],"xs":[],"q":["l?"],"K":["l?"],"o":["l?"],"I.E":"l?"},"h4":{"ek":[]},"m8":{"b6":[]},"oA":{"jG":[],"bp":[]},"c5":{"V":["k","@"],"J":["k","@"],"V.V":"@","V.K":"k"},"n2":{"I":["c5"],"q":["c5"],"K":["c5"],"o":["c5"],"I.E":"c5"},"df":{"G":[]},"l8":{"b6":[]},"l7":{"jG":[],"bp":[]},"eO":{"b3":["eO"],"b3.E":"eO"},"dg":{"D1":[]},"dV":{"D0":[]},"hi":{"I":["dg"],"q":["dg"],"K":["dg"],"o":["dg"],"I.E":"dg"},"i5":{"aa":["1"],"aa.T":"1"},"dB":{"b6":[]},"b8":{"b3":["b8"]},"oB":{"jG":[],"bp":[]},"k_":{"b8":[],"b3":["b8"],"b3.E":"b8"},"jU":{"b8":[],"b3":["b8"],"b3.E":"b8"},"hr":{"b8":[],"b3":["b8"],"b3.E":"b8"},"hL":{"b8":[],"b3":["b8"],"b3.E":"b8"},"h1":{"b6":[]},"oZ":{"jG":[],"bp":[]},"id":{"G":[]},"em":{"I":["l?"],"q":["l?"],"K":["l?"],"o":["l?"],"I.E":"l?"},"fW":{"G":[]},"ds":{"G":[]},"ho":{"Eh":[]},"os":{"kr":["M"]},"oX":{"kr":["M"]},"nr":{"bk":[],"G":[]},"ct":{"hc":["i"],"I":["i"],"q":["i"],"K":["i"],"o":["i"],"I.E":"i"},"hc":{"I":["1"],"q":["1"],"K":["1"],"o":["1"]},"oC":{"hc":["i"],"I":["i"],"q":["i"],"K":["i"],"o":["i"]},"hu":{"aa":["1"],"aa.T":"1"},"jY":{"bn":["1"]}}'))
A.KP(v.typeUniverse,JSON.parse('{"iw":1,"nR":1,"he":1,"ks":2,"ik":1,"fM":1,"bB":1,"jA":1,"p3":1,"ou":1,"p7":2,"iR":2,"kc":1,"kn":2,"ld":1,"lf":2,"kg":1,"mD":1,"nS":2,"n_":1,"fk":1,"I7":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ad
return{fM:s("@<@>"),ie:s("I7<l?>"),bG:s("ed"),om:s("i5<z<l?>>"),hw:s("cz"),lo:s("ef"),fW:s("Cx"),jA:s("ia"),fo:s("ib<k>"),iv:s("a2"),eg:s("Eh"),dF:s("Cy()"),E:s("cg"),fw:s("ek"),bP:s("aw<@>"),p6:s("el"),br:s("ig<M>"),n8:s("bi"),M:s("dw<k>"),lp:s("lx"),O:s("K<@>"),C:s("af"),fq:s("c1"),mA:s("G"),eZ:s("lK"),d9:s("aX"),oX:s("lS"),A:s("bj"),k4:s("iu"),f6:s("cE"),pk:s("t_"),kI:s("t0"),Y:s("bk"),gY:s("NZ"),nW:s("y<M>"),fr:s("y<dI>"),mj:s("y<U>"),g7:s("y<@>"),fP:s("y<cZ?>"),n1:s("y<l?>(o7,hk)"),jN:s("y<hh?>"),co:s("dy"),w:s("cG"),cF:s("dB"),m6:s("tF"),bW:s("tG"),jx:s("tH"),nZ:s("iG<@>"),e7:s("o<@>"),gi:s("z<a2>"),aw:s("z<cA<@>>"),oq:s("z<cA<l?>>"),oS:s("z<lk>"),i5:s("z<ch>"),mK:s("z<aX>"),kB:s("z<lY>"),iw:s("z<y<~>>"),mr:s("z<dA>"),kG:s("z<M>"),bi:s("z<q<J<k,l?>>>"),h2:s("z<q<l>>"),ae:s("z<q<eD>>"),dO:s("z<q<l?>>"),kf:s("z<J<k,l>>"),d:s("z<J<k,l?>>"),e8:s("z<mw>"),i7:s("z<ez>"),hf:s("z<l>"),ox:s("z<eA>"),fi:s("z<cj>"),my:s("z<ck>"),k:s("z<d4>"),eK:s("z<cL>"),k1:s("z<fT>"),g2:s("z<ji>"),bo:s("z<jj>"),cM:s("z<eD>"),gc:s("z<mV>"),eb:s("z<dN>"),fU:s("z<+controller,sync(dJ<cp>,R)>"),lw:s("z<+controller,sync(dJ<~>,R)>"),kC:s("z<+(dP,k)>"),jO:s("z<+(k,J<k,l?>)>"),l5:s("z<+(k,l)>"),fj:s("z<+(k,aX?)>"),iE:s("z<+(k,l?)>"),aY:s("z<+(hp,l?,l?,aJ?)>"),g1:s("z<d7>"),cP:s("z<n8>"),kj:s("z<cM>"),lE:s("z<h4>"),c0:s("z<c7>"),dw:s("z<bn<@>>"),s:s("z<k>"),en:s("z<h8>"),bs:s("z<cP>"),fC:s("z<b_>"),az:s("z<ho>"),i4:s("z<hp>"),fV:s("z<hq>"),pg:s("z<br>"),dg:s("z<cu>"),p8:s("z<oJ>"),mc:s("z<hD>"),gy:s("z<hF>"),gk:s("z<ab>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<am?>"),eU:s("z<J<k,l?>?>"),c:s("z<l?>"),mf:s("z<k?>"),iy:s("bb<@>"),T:s("iI"),m:s("M"),bJ:s("bs"),g:s("bO"),dX:s("bP<@>"),aq:s("aH"),fZ:s("mk"),kk:s("eu<eO>"),p3:s("eu<b8>"),hI:s("ev<@>"),ba:s("q<bi>"),ck:s("q<bj>"),ip:s("q<M>"),ew:s("q<J<k,l>>"),J:s("q<J<k,l?>>"),eT:s("q<ez>"),hg:s("q<eA>"),a6:s("q<ck>"),jX:s("q<ji>"),kR:s("q<d7>"),fE:s("q<cM>"),i:s("q<k>"),bR:s("q<h8>"),j:s("q<@>"),L:s("q<i>"),oz:s("q<J<k,l?>?>"),kS:s("q<l?>"),jD:s("iO"),ia:s("S<k,dy>"),af:s("S<k,k>"),I:s("S<k,@>"),eB:s("S<k,l?>"),a3:s("iQ<@,@>"),cy:s("J<k,cN>"),dV:s("J<k,i>"),f:s("J<@,@>"),G:s("J<k,l?>"),d2:s("J<l?,l?>"),iZ:s("X<k,@>"),r:s("dI"),a:s("fK"),dQ:s("dL"),aj:s("bQ"),Z:s("ey"),P:s("U"),K:s("l"),k5:s("cj"),dZ:s("ck"),i0:s("cl"),jS:s("d4"),ot:s("mT"),gq:s("fT"),e:s("b4"),b0:s("d5"),lZ:s("O4"),oZ:s("dN"),aK:s("+()"),ja:s("+(M,ii)"),hP:s("+(J<k,cN>,J<k,J<k,l?>>)"),cU:s("+(dP,k)"),mk:s("+(R,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(R,R)"),mt:s("+(M?,M)"),po:s("+(l?,i)"),nw:s("+(J<k,l?>?,cN?,ck?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mZ"),Q:s("d7"),V:s("ah"),hF:s("bv<k>"),cu:s("h0<@>"),aJ:s("eG<k>"),g_:s("h1"),hq:s("co"),ol:s("d9"),gE:s("nk"),l:s("aJ"),nv:s("nm"),h3:s("h6"),ha:s("bn<cp>"),dz:s("bn<@>"),ey:s("bn<~>"),bv:s("no"),ku:s("aa<q<i>>"),lI:s("dR"),hL:s("jB"),N:s("k"),f_:s("h8"),k6:s("jC"),o8:s("D9"),n6:s("c8"),fD:s("b5"),o:s("cN"),ic:s("eI"),hU:s("dc"),q:s("nH"),dH:s("ak"),do:s("dd"),hM:s("yb"),mC:s("yc"),oR:s("ct"),nn:s("yd"),p:s("cP"),cx:s("dU"),ph:s("cQ<k,k>"),eo:s("cR"),jJ:s("nT"),e6:s("b6"),j2:s("jG"),n:s("hh"),fA:s("b_"),gx:s("at<cy>"),mz:s("at<aY>"),mE:s("at<dT>"),v:s("dW<k>"),u:s("eM"),bp:s("eN"),be:s("o7"),ec:s("hl"),iq:s("aL<cP>"),jk:s("aL<@>"),ho:s("aL<i>"),h:s("aL<~>"),oW:s("eR<@,@>"),R:s("eS<M>"),d4:s("hu<M>"),nI:s("w<cZ>"),a7:s("w<M>"),hl:s("w<0&>"),os:s("w<k>"),jz:s("w<cP>"),g5:s("w<R>"),_:s("w<@>"),hy:s("w<i>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("br"),mp:s("e_<l?,l?>"),mB:s("hz"),k8:s("dj<M>"),fb:s("dj<q<i>>"),mI:s("oY<ch>"),jy:s("e4<cp,~()>"),ag:s("e4<~,R()>"),lU:s("e4<~,~()>"),hT:s("cv<M>"),lj:s("cv<q<i>>"),aP:s("ao<cZ>"),h1:s("ao<M>"),ex:s("ao<R>"),F:s("ao<~>"),g8:s("p4"),y:s("R"),W:s("ab"),z:s("@"),mq:s("@(l)"),ng:s("@(l,aJ)"),S:s("i"),ma:s("bi?"),gK:s("y<U>?"),b3:s("cZ?"),B:s("M?"),bE:s("q<cA<@>>?"),lH:s("q<@>?"),b:s("J<k,l?>?"),nh:s("dI?"),X:s("l?"),ad:s("EP?"),dY:s("ck?"),lY:s("jh?"),jB:s("d7?"),x:s("k?"),f8:s("cN?"),a_:s("ct?"),he:s("hh?"),dd:s("br?"),o9:s("R?"),dA:s("ab?"),U:s("i?"),jh:s("aV?"),cZ:s("aV"),H:s("~"),cj:s("~()"),i6:s("~(l)"),b9:s("~(l,aJ)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cn=J.mc.prototype
B.b=J.z.prototype
B.c=J.iH.prototype
B.x=J.es.prototype
B.a=J.dC.prototype
B.co=J.bO.prototype
B.cp=J.aH.prototype
B.aB=A.j2.prototype
B.d2=A.j4.prototype
B.y=A.j5.prototype
B.f=A.ey.prototype
B.bd=J.mM.prototype
B.aN=J.dU.prototype
B.aq=new A.ds("Operation was cancelled")
B.a6=new A.ff(0,"visible")
B.aQ=new A.ff(1,"hidden")
B.bx=new A.kS(1)
B.ea=new A.kS(-1)
B.a7=new A.ed(0,"applied")
B.a8=new A.ed(1,"quarantined")
B.by=new A.ed(2,"conflict")
B.a9=new A.ed(3,"skipped")
B.bz=new A.kW(127)
B.aa=new A.l0(0,"changed")
B.aR=new A.l0(1,"deleted")
B.bB=new A.i6(!1)
B.ar=new A.l1(B.bB)
B.bC=new A.i6(!0)
B.bA=new A.l1(B.bC)
B.c3=new A.jW(A.ad("jW<q<i>>"))
B.bD=new A.du(B.c3)
B.bE=new A.iE(A.Np(),A.ad("iE<i>"))
B.bF=new A.l_()
B.as=new A.l2()
B.bG=new A.lb()
B.bH=new A.le()
B.F={}
B.a_=new A.aW(B.F,[],A.ad("aW<k,NT>"))
B.ee=new A.vs(0,"conflict")
B.eb=new A.qC()
B.aS=new A.r7()
B.bI=new A.lB(A.ad("lB<0&>"))
B.r=new A.lA()
B.aT=new A.lE(A.ad("lE<0&>"))
B.aU=new A.lF()
B.P=new A.lF()
B.bJ=new A.m4()
B.bK=new A.mb()
B.aV=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bL=function() {
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
B.bQ=function(getTagFallback) {
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
B.bM=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bP=function(hooks) {
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
B.bO=function(hooks) {
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
B.bN=function(hooks) {
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
B.aW=function(hooks) { return hooks; }

B.h=new A.tM()
B.bR=new A.uS()
B.k=new A.fO()
B.bS=new A.mI()
B.aX=new A.wa()
B.bT=new A.wl()
B.bU=new A.mS()
B.d=new A.xl()
B.bV=new A.nl()
B.bW=new A.nt()
B.bX=new A.nu()
B.bY=new A.nw()
B.bZ=new A.nB()
B.c_=new A.nD()
B.o=new A.nW()
B.e=new A.nX()
B.c0=new A.nY()
B.c1=new A.o_()
B.c2=new A.yP()
B.t=new A.zz()
B.ab=new A.zJ()
B.at=new A.Ag()
B.aY=new A.f_()
B.i=new A.oS()
B.l=new A.oV()
B.c4=new A.AT()
B.Q=new A.p1()
B.ac=new A.dv(0,"create")
B.A=new A.dv(1,"update")
B.c5=new A.dv(2,"archive")
B.c6=new A.dv(3,"restore")
B.au=new A.dv(4,"purge")
B.c7=new A.dv(5,"hide")
B.H=new A.ic(0,"local")
B.av=new A.ic(1,"remote")
B.ad=new A.ic(2,"resolution")
B.c8=new A.lj(3,"ignore")
B.R=new A.lj(4,"replace")
B.p=new A.lD(0,"normal")
B.aZ=new A.lD(1,"full")
B.D=new A.aB(0)
B.aw=new A.aB(1e6)
B.ae=new A.aB(12e7)
B.b_=new A.aB(16e3)
B.c9=new A.aB(18e8)
B.ca=new A.aB(2e5)
B.b0=new A.aB(3e5)
B.af=new A.aB(3e7)
B.S=new A.aB(3e8)
B.ag=new A.aB(5e5)
B.cb=new A.aB(5e6)
B.ec=new A.aB(6048e8)
B.cc=new A.aB(7776e9)
B.ed=new A.aB(864e8)
B.ax=new A.c2(0,"text")
B.T=new A.c2(1,"int")
B.U=new A.c2(2,"real")
B.B=new A.c2(3,"bool")
B.V=new A.c2(4,"date")
B.I=new A.c2(5,"enumValue")
B.W=new A.c2(6,"json")
B.X=new A.c2(7,"jsonList")
B.J=new A.c2(8,"ref")
B.cd=new A.iu(!1)
B.ay=new A.dx("x",1,"opfsExternalLocks")
B.b1=new A.dx("y",2,"opfsExternalLocksWorkaround")
B.b2=new A.fB("/database",0,"database")
B.b3=new A.fB("/database-journal",1,"journal")
B.cj=new A.bk("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.ck=new A.bk("fieldCipher envelope must be a map.",null,null)
B.aA=new A.aW(B.F,[],A.ad("aW<k,k>"))
B.cl=new A.eq(B.aA)
B.b4=new A.iD(0,"live")
B.cq=new A.mi(null)
B.cr=new A.mj(null)
B.cs=new A.d0(0,"textExpected")
B.ct=new A.d0(1,"intExpected")
B.b5=new A.d0(2,"numberExpected")
B.cu=new A.d0(3,"boolExpected")
B.cv=new A.d0(4,"jsonExpected")
B.cw=new A.d0(5,"jsonListExpected")
B.cx=new A.d0(6,"enumValueRejected")
B.cy=new A.mn(255)
B.az=new A.ev(B.bI,A.ad("ev<k>"))
B.cz=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b6=s([13,10],t.t)
B.aG=new A.cs(0,"unknown")
B.aH=new A.cs(1,"integer")
B.aI=new A.cs(2,"bigInt")
B.aJ=new A.cs(3,"float")
B.aK=new A.cs(4,"text")
B.aL=new A.cs(5,"blob")
B.aM=new A.cs(6,"$null")
B.br=new A.cs(7,"boolean")
B.b7=s([B.aG,B.aH,B.aI,B.aJ,B.aK,B.aL,B.aM,B.br],A.ad("z<cs>"))
B.cA=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.bg=new A.aY(0,"eq")
B.da=new A.aY(1,"neq")
B.de=new A.aY(2,"gt")
B.df=new A.aY(3,"gte")
B.dg=new A.aY(4,"lt")
B.dh=new A.aY(5,"lte")
B.di=new A.aY(6,"inValues")
B.dj=new A.aY(7,"between")
B.dk=new A.aY(8,"startsWith")
B.dl=new A.aY(9,"endsWith")
B.db=new A.aY(10,"contains")
B.dc=new A.aY(11,"isNull")
B.dd=new A.aY(12,"isNotNull")
B.cB=s([B.bg,B.da,B.de,B.df,B.dg,B.dh,B.di,B.dj,B.dk,B.dl,B.db,B.dc,B.dd],A.ad("z<aY>"))
B.ch=new A.iv(0,"database")
B.ci=new A.iv(1,"journal")
B.b8=s([B.ch,B.ci],A.ad("z<iv>"))
B.bs=new A.ff(2,"purged")
B.cC=s([B.a6,B.aQ,B.bs],A.ad("z<ff>"))
B.z=new A.cO(0,"clean")
B.G=new A.cO(1,"dirty")
B.bo=new A.cO(2,"inFlight")
B.a5=new A.cO(3,"conflict")
B.ap=new A.cO(4,"error")
B.dC=new A.cO(5,"quarantine")
B.dD=new A.cO(6,"blocked")
B.cD=s([B.z,B.G,B.bo,B.a5,B.ap,B.dC,B.dD],A.ad("z<cO>"))
B.Y=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ah=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cE=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.cm=new A.iD(1,"notArchived")
B.cF=s([B.b4,B.cm],A.ad("z<iD>"))
B.cG=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.bb=new A.j9(0,"fileUpload")
B.bc=new A.j9(1,"fileRemove")
B.cH=s([B.bb,B.bc],A.ad("z<j9>"))
B.cg=new A.dx("s",0,"opfsShared")
B.ce=new A.dx("i",3,"indexedDb")
B.cf=new A.dx("m",4,"inMemory")
B.cI=s([B.cg,B.ay,B.b1,B.ce,B.cf],A.ad("z<dx>"))
B.ai=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bt=new A.cy(0,"sum")
B.bu=new A.cy(1,"avg")
B.bv=new A.cy(2,"min")
B.bw=new A.cy(3,"max")
B.cJ=s([B.bt,B.bu,B.bv,B.bw],A.ad("z<cy>"))
B.cK=s([B.ax,B.T,B.U,B.B,B.V,B.I,B.W,B.X,B.J],A.ad("z<c2>"))
B.m=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.aj=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.Z=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cL=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fP(0,"upsert")
B.L=new A.fP(1,"archive")
B.a2=new A.fP(2,"restore")
B.cM=s([B.v,B.L,B.a2],A.ad("z<fP>"))
B.cN=s([],A.ad("z<dy>"))
B.b9=s([],t.d)
B.cP=s([],t.my)
B.cQ=s([],t.kj)
B.u=s([],t.s)
B.cO=s([],t.t)
B.ak=s([],t.dG)
B.n=s([],t.c)
B.cR=s(["*"],t.s)
B.cS=s([B.b2,B.b3],A.ad("z<fB>"))
B.cT=s(["id","updated"],t.s)
B.cU=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bi=new A.dP(0,"opfs")
B.bj=new A.dP(1,"indexedDb")
B.dw=new A.dP(2,"inMemory")
B.cV=s([B.bi,B.bj,B.dw],A.ad("z<dP>"))
B.bp=new A.dT(0,"normal")
B.bq=new A.dT(1,"full")
B.cW=s([B.bp,B.bq],A.ad("z<dT>"))
B.al=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cX=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cY=new A.iO(!0)
B.cZ=new A.iA([16,10,24,12,32,14],A.ad("iA<i,i>"))
B.d4={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.mm()
B.q=new A.kV()
B.d_=new A.aW(B.d4,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.o,B.o],A.ad("aW<k,ep>"))
B.am=new A.aW(B.F,[],A.ad("aW<k,i>"))
B.j=new A.aW(B.F,[],A.ad("aW<k,l?>"))
B.an=new A.aW(B.F,[],A.ad("aW<i,J<k,l?>(J<k,l?>)>"))
B.d1=new A.ms(11,"simpleSuccessResponse",A.ad("ms<M>"))
B.a0=new A.dK(0,"createOrUpdate")
B.a1=new A.dK(1,"createOrUpdateMerge")
B.ba=new A.dK(2,"create")
B.K=new A.dK(3,"update")
B.C=new A.dK(4,"archive")
B.E=new A.dK(5,"restore")
B.ef=new A.vH(2,"readWriteCreate")
B.d7=new A.cj("id",!1)
B.d8=new A.cl(B.b9,null,null,!1,!1)
B.be=new A.mN(0,"native")
B.aC=new A.mN(1,"web")
B.M=new A.b4(0,1,0,0,0,!1)
B.ao=new A.b4(0,0,0,0,0,!0)
B.a3=new A.b4(0,0,0,0,0,!1)
B.d9=new A.b4(0,0,0,1,0,!1)
B.bf=new A.b4(0,0,1,0,0,!1)
B.a4=new A.b4(1,0,0,0,0,!1)
B.dm=new A.a5("archived",!0)
B.dn=new A.a5("0",B.n)
B.aD=new A.ka(!1,!1)
B.dp=new A.eY(0,0,0)
B.dq=new A.eY(null,null,null)
B.d6={id:0,archived:1,hidden:2,extra:3,rowid:4,_rowid_:5,oid:6}
B.aE=new A.dw(B.d6,7,t.M)
B.d3={hidden:0}
B.dr=new A.dw(B.d3,1,t.M)
B.d5={open:0,contract_request:1,contract_event:2}
B.ds=new A.dw(B.d5,3,t.M)
B.bh=new A.dw(B.F,0,t.M)
B.dt=new A.jw(0,"insert")
B.du=new A.jw(1,"update")
B.dv=new A.jw(2,"delete")
B.dx=new A.jC(-1,null)
B.dy=new A.jD("_clientToken")
B.N=new A.c8(0,"closed")
B.dz=new A.c8(1,"opening")
B.bk=new A.c8(2,"offline")
B.aF=new A.c8(3,"authRequired")
B.bl=new A.c8(4,"idle")
B.dA=new A.c8(5,"pulling")
B.dB=new A.c8(6,"pushing")
B.bm=new A.c8(7,"backoff")
B.bn=new A.c8(8,"paused")
B.O=new A.b5(B.am,B.am,0,0,0,0,!1)
B.dE=new A.eI(B.N,0,0,0,0,null,null,null)
B.dF=A.bJ("kQ")
B.dG=A.bJ("ef")
B.dH=A.bJ("Cx")
B.dI=A.bJ("t_")
B.dJ=A.bJ("t0")
B.dK=A.bJ("tF")
B.dL=A.bJ("tG")
B.dM=A.bJ("tH")
B.dN=A.bJ("M")
B.dO=A.bJ("l")
B.dP=A.bJ("jt")
B.dQ=A.bJ("yb")
B.dR=A.bJ("yc")
B.dS=A.bJ("yd")
B.dT=A.bJ("cP")
B.aO=new A.jF(!1)
B.dU=new A.jF(!0)
B.dV=new A.df(14)
B.dW=new A.df(522)
B.dX=new A.df(778)
B.dY=new A.B7(B.i,A.Mr())
B.dZ=new A.B8(B.i,A.Ms())
B.e_=new A.B9(B.i,A.Mt())
B.e0=new A.Ba(B.i,A.Mu())
B.e1=new A.pd(B.i,A.Mv())
B.e2=new A.Bb(B.i,A.Mw())
B.e3=new A.Bc(B.i,A.Mx())
B.e4=new A.Bd(B.i,A.My())
B.e5=new A.Be(B.i,A.Mz())
B.e6=new A.Bg(B.i,A.MB())
B.e7=new A.Bh(B.i,A.MC())
B.e8=new A.Bf(B.i,A.MA())
B.e9=new A.pe(B.i,A.MD())
B.d0=new A.aW(B.F,[],A.ad("aW<l?,l?>"))
B.aP=new A.pf(B.i,B.d0)})();(function staticFields(){$.Ai=null
$.f3=A.j([],t.hf)
$.LY=null
$.ES=null
$.wt=0
$.mQ=A.LO()
$.Ef=null
$.Ee=null
$.GR=null
$.GB=null
$.H0=null
$.BU=null
$.C7=null
$.DN=null
$.Av=A.j([],A.ad("z<q<l>?>"))
$.hQ=null
$.ku=null
$.kv=null
$.DA=!1
$.D=B.i
$.Az=null
$.Fk=null
$.Fl=null
$.Fm=null
$.Fn=null
$.Dg=A.za("_lastQuoRemDigits")
$.Dh=A.za("_lastQuoRemUsed")
$.jP=A.za("_lastRemUsed")
$.Di=A.za("_lastRem_nsh")
$.Fb=""
$.Fc=null
$.fU=function(){var s=t.N
return A.v(s,s)}()
$.G3=null
$.Br=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"NV","Hh",()=>A.BZ("_$dart_dartClosure"))
s($,"NU","fc",()=>A.BZ("_$dart_dartClosure_dartJSInterop"))
s($,"Oy","px",()=>A.vA(0))
s($,"OW","HR",()=>B.i.aY(new A.Ca(),A.ad("y<~>")))
s($,"OQ","HO",()=>A.j([new J.md()],A.ad("z<jp>")))
s($,"Oc","Hl",()=>A.de(A.ya({
toString:function(){return"$receiver$"}})))
s($,"Od","Hm",()=>A.de(A.ya({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Oe","Hn",()=>A.de(A.ya(null)))
s($,"Of","Ho",()=>A.de(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Oi","Hr",()=>A.de(A.ya(void 0)))
s($,"Oj","Hs",()=>A.de(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Oh","Hq",()=>A.de(A.F8(null)))
s($,"Og","Hp",()=>A.de(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Ol","Hu",()=>A.de(A.F8(void 0)))
s($,"Ok","Ht",()=>A.de(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Oo","DY",()=>A.K5())
s($,"O0","ec",()=>$.HR())
s($,"O_","Hi",()=>A.Ko(!1,B.i,t.y))
s($,"OE","HE",()=>A.vA(4096))
s($,"OC","HC",()=>new A.B4().$0())
s($,"OD","HD",()=>new A.B3().$0())
s($,"Oq","DZ",()=>A.Jg(A.b9(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Op","Hv",()=>A.vA(0))
s($,"Ox","cf",()=>A.jO(0))
s($,"Ov","fd",()=>A.jO(1))
s($,"Ow","Hy",()=>A.jO(2))
s($,"Ot","E0",()=>$.fd().bF(0))
s($,"Or","E_",()=>A.jO(1e4))
r($,"Ou","Hx",()=>A.ag("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Os","Hw",()=>A.vA(8))
s($,"Oz","Hz",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"OA","HA",()=>A.ag("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"OB","HB",()=>typeof URLSearchParams=="function")
s($,"OH","fe",()=>A.kE(B.dO))
s($,"O5","kJ",()=>{A.Jr()
return $.wt})
s($,"OI","HH",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"O3","Cr",()=>{var q=new A.Ah(A.Jf(8))
q.p5()
return q})
s($,"NW","kI",()=>A.Ib(B.d2.gab(A.Jh(A.b9(A.j([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aU)
s($,"NM","DT",()=>A.ag("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"OK","Cs",()=>A.ag("\\r\\n|\\r|\\n",!0,!1))
s($,"O1","Hj",()=>A.EX())
s($,"OF","E1",()=>A.ag("^[\\x00-\\x7F]+$",!0,!1))
s($,"OG","HF",()=>A.ag('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"OY","HS",()=>A.ag('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"OJ","HI",()=>A.ag("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"ON","HL",()=>A.ag('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"OM","HK",()=>A.ag("\\\\(.)",!0,!1))
s($,"OV","HQ",()=>A.ag('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"OZ","HT",()=>A.ag("(?:"+$.HI().a+")*",!0,!1))
s($,"NQ","DU",()=>A.ag("^[0-9a-f]{64}$",!0,!1))
s($,"OP","HN",()=>A.EY())
s($,"OX","py",()=>A.ag("^[a-z0-9]{15}$",!0,!1))
r($,"Lx","HG",()=>A.It().a)
s($,"NX","DV",()=>A.ag("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"NR","Hf",()=>A.CD("declaredNames",t.aJ))
s($,"NS","Hg",()=>A.CD("fieldByName",A.ad("J<k,aX>")))
s($,"OL","HJ",()=>A.ag("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Ob","kL",()=>new A.l())
s($,"OS","i1",()=>new A.qL($.DW()))
s($,"O8","Hk",()=>new A.wn(A.ag("/",!0,!1),A.ag("[^/]$",!0,!1),A.ag("^/",!0,!1)))
s($,"Oa","pw",()=>new A.yA(A.ag("[/\\\\]",!0,!1),A.ag("[^/\\\\]$",!0,!1),A.ag("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ag("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"O9","kK",()=>new A.yg(A.ag("/",!0,!1),A.ag("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ag("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ag("^/",!0,!1)))
s($,"O7","DW",()=>A.JS())
s($,"NP","He",()=>$.fd().bG(0,63).bF(0))
s($,"NO","Hd",()=>{var q=$.fd()
return q.bG(0,63).fW(0,q)})
s($,"NN","pv",()=>A.EY())
s($,"Om","DX",()=>A.CD(null,t.S))
s($,"OR","HP",()=>A.J3(A.j([A.D8("files"),A.D8("blocks")],t.s)))
s($,"NY","Cq",()=>{var q,p,o=A.v(t.N,A.ad("fB"))
for(q=0;q<2;++q){p=B.cS[q]
o.j(0,p.c,p)}return o})
s($,"OO","HM",()=>A.EX())
r($,"On","kM",()=>{var q="navigator"
return A.IV(A.IW(A.C0(A.H5(),q),A.D8("locks")))?A.C0(A.C0(A.H5(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fL,ArrayBuffer:A.fK,ArrayBufferView:A.j3,DataView:A.j2,Float32Array:A.my,Float64Array:A.mz,Int16Array:A.mA,Int32Array:A.mB,Int8Array:A.mC,Uint16Array:A.j4,Uint32Array:A.j5,Uint8ClampedArray:A.j6,CanvasPixelArray:A.j6,Uint8Array:A.ey})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fM.$nativeSuperclassTag="ArrayBufferView"
A.k6.$nativeSuperclassTag="ArrayBufferView"
A.k7.$nativeSuperclassTag="ArrayBufferView"
A.dL.$nativeSuperclassTag="ArrayBufferView"
A.k8.$nativeSuperclassTag="ArrayBufferView"
A.k9.$nativeSuperclassTag="ArrayBufferView"
A.bQ.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.Nn
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
