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
if(a[b]!==s){A.Jj(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.zx(b)
return new s(c,this)}:function(){if(s===null)s=A.zx(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.zx(a).prototype
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
zG(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xU(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.zE==null){A.IP()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.B5("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.we
if(o==null)o=$.we=A.xT(n)
p=q[o]}if(p!=null)return p
p=A.IZ(a)
if(p!=null)return p
if(typeof a=="function")return B.bO
s=Object.getPrototypeOf(a)
if(s==null)return B.b0
if(s===Object.prototype)return B.b0
if(typeof q=="function"){o=$.we
if(o==null)o=$.we=A.xT(n)
Object.defineProperty(q,o,{value:B.av,enumerable:false,writable:true,configurable:true})
return B.av}return B.av},
yJ(a,b){if(a<0||a>4294967295)throw A.b(A.ak(a,0,4294967295,"length",null))
return J.Az(new Array(a),b)},
Ay(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
Ax(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
Az(a,b){var s=A.l(a,b.i("B<0>"))
s.$flags=1
return s},
EL(a,b){return J.A_(a,b)},
AB(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EN(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.AB(r))break;++b}return b},
AC(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.AB(r))break}return b},
dE(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hC.prototype
return J.kk.prototype}if(typeof a=="string")return J.da.prototype
if(a==null)return J.hD.prototype
if(typeof a=="boolean")return J.kj.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xU(a)},
K(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xU(a)},
aA(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xU(a)},
IH(a){if(typeof a=="number")return J.dY.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dm.prototype
return a},
II(a){if(typeof a=="number")return J.dY.prototype
if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dm.prototype
return a},
xS(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dm.prototype
return a},
jk(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xU(a)},
t(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dE(a).R(a,b)},
T(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.CP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)},
bN(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.CP(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).j(a,b,c)},
bp(a,b){return J.aA(a).u(a,b)},
zV(a,b){return J.aA(a).F(a,b)},
zW(a,b){return J.xS(a).hn(a,b)},
nb(a){return J.jk(a).m1(a)},
zX(a,b,c){return J.jk(a).ho(a,b,c)},
zY(a,b,c){return J.jk(a).m2(a,b,c)},
DS(a){return J.jk(a).m3(a)},
bB(a,b,c){return J.jk(a).hp(a,b,c)},
ju(a,b){return J.aA(a).hs(a,b)},
zZ(a,b,c){return J.IH(a).cU(a,b,c)},
A_(a,b){return J.II(a).X(a,b)},
yq(a,b){return J.K(a).C(a,b)},
nc(a,b){return J.aA(a).a4(a,b)},
jv(a,b){return J.aA(a).dS(a,b)},
DT(a){return J.jk(a).ga5(a)},
c2(a){return J.aA(a).gD(a)},
a2(a){return J.dE(a).gI(a)},
bO(a){return J.K(a).gA(a)},
eG(a){return J.K(a).gW(a)},
I(a){return J.aA(a).gt(a)},
nd(a){return J.aA(a).ga3(a)},
ao(a){return J.K(a).gl(a)},
bq(a){return J.dE(a).gak(a)},
yr(a){return J.aA(a).gau(a)},
DU(a,b,c){return J.aA(a).fg(a,b,c)},
DV(a,b,c){return J.aA(a).aC(a,b,c)},
aL(a,b,c){return J.aA(a).c5(a,b,c)},
DW(a,b,c){return J.xS(a).e0(a,b,c)},
DX(a,b){return J.K(a).sl(a,b)},
DY(a,b,c,d,e){return J.aA(a).af(a,b,c,d,e)},
ne(a,b){return J.aA(a).bd(a,b)},
A0(a,b){return J.aA(a).c8(a,b)},
DZ(a,b){return J.xS(a).dj(a,b)},
E_(a,b){return J.xS(a).S(a,b)},
ys(a,b){return J.aA(a).cv(a,b)},
E0(a){return J.aA(a).ea(a)},
ap(a){return J.dE(a).k(a)},
A1(a,b){return J.aA(a).kh(a,b)},
kh:function kh(){},
kj:function kj(){},
hD:function hD(){},
au:function au(){},
dc:function dc(){},
kO:function kO(){},
dm:function dm(){},
bE:function bE(){},
bf:function bf(){},
eT:function eT(){},
B:function B(a){this.$ti=a},
ki:function ki(){},
q7:function q7(a){this.$ti=a},
eH:function eH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dY:function dY(){},
hC:function hC(){},
kk:function kk(){},
da:function da(){}},A={yM:function yM(){},
eJ(a,b,c){if(t.O.b(a))return new A.iE(a,b.i("@<0>").T(c).i("iE<1,2>"))
return new A.dK(a,b.i("@<0>").T(c).i("dK<1,2>"))},
AE(a){return new A.db("Field '"+a+"' has been assigned during initialization.")},
AF(a){return new A.db("Field '"+a+"' has not been initialized.")},
EO(a){return new A.db("Field '"+a+"' has already been initialized.")},
xX(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
an(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fg(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bL(a,b,c){return a},
zF(a){var s,r
for(s=$.ex.length,r=0;r<s;++r)if(a===$.ex[r])return!0
return!1},
cf(a,b,c,d){A.b0(b,"start")
if(c!=null){A.b0(c,"end")
if(b>c)A.v(A.ak(b,0,c,"start",null))}return new A.ce(a,b,c,d.i("ce<0>"))},
e3(a,b,c,d){if(t.O.b(a))return new A.dS(a,b,c.i("@<0>").T(d).i("dS<1,2>"))
return new A.c7(a,b,c.i("@<0>").T(d).i("c7<1,2>"))},
AZ(a,b,c){var s="takeCount"
A.jx(b,s)
A.b0(b,s)
if(t.O.b(a))return new A.hl(a,b,c.i("hl<0>"))
return new A.ee(a,b,c.i("ee<0>"))},
AX(a,b,c){var s="count"
if(t.O.b(a)){A.jx(b,s)
A.b0(b,s)
return new A.eO(a,b,c.i("eO<0>"))}A.jx(b,s)
A.b0(b,s)
return new A.cN(a,b,c.i("cN<0>"))},
at(){return new A.bk("No element")},
hA(){return new A.bk("Too many elements")},
Aw(){return new A.bk("Too few elements")},
l6(a,b,c,d){if(c-b<=32)A.Ft(a,b,c,d)
else A.Fs(a,b,c,d)},
Ft(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.K(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Fs(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.b.K(a5-a4+1,6),h=a4+i,g=a5-i,f=B.b.K(a4+a5,2),e=f-i,d=f+i,c=J.K(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
p=J.t(a6.$2(a,a1),0)
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
A.l6(a3,a4,r-2,a6)
A.l6(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.t(a6.$2(c.h(a3,r),a),0))++r
while(J.t(a6.$2(c.h(a3,q),a1),0))--q
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
break}}A.l6(a3,r,q,a6)}else A.l6(a3,r,q,a6)},
vw:function vw(a){this.a=0
this.b=a},
v6:function v6(a){this.a=0
this.b=a},
dr:function dr(){},
jO:function jO(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b){this.a=a
this.$ti=b},
iE:function iE(a,b){this.a=a
this.$ti=b},
iA:function iA(){},
v7:function v7(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b){this.a=a
this.$ti=b},
nI:function nI(a,b){this.a=a
this.b=b},
nH:function nH(a){this.a=a},
db:function db(a){this.a=a},
kV:function kV(a){this.a=a},
c4:function c4(a){this.a=a},
y3:function y3(){},
t5:function t5(){},
G:function G(){},
V:function V(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
dS:function dS(a,b,c){this.a=a
this.b=b
this.$ti=c},
kv:function kv(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a_:function a_(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
dp:function dp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.$ti=c},
lk:function lk(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c){this.a=a
this.b=b
this.$ti=c},
l5:function l5(a,b,c){this.a=a
this.b=b
this.$ti=c},
dT:function dT(a){this.$ti=a},
k4:function k4(a){this.$ti=a},
bv:function bv(a,b){this.a=a
this.$ti=b},
lz:function lz(a,b){this.a=a
this.$ti=b},
hr:function hr(){},
lq:function lq(){},
fj:function fj(){},
e9:function e9(a,b){this.a=a
this.$ti=b},
ik:function ik(a){this.a=a},
jb:function jb(){},
Ej(a,b,c){var s,r,q,p,o,n,m=A.m(a),l=A.eU(new A.U(a,m.i("U<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.A)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aM(q,A.eU(new A.av(a,m.i("av<2>")),!0,c),b.i("@<0>").T(c).i("aM<1,2>"))
n.$keys=l
return n}return new A.hg(A.b_(a,b,c),b.i("@<0>").T(c).i("hg<1,2>"))},
Ek(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
El(){throw A.b(A.Y("Cannot modify constant Set"))},
D7(a){var s=A.D6(a)
if(s!=null)return s
return"minified:"+a},
CP(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ap(a)
return s},
e8(a){var s,r=$.AO
if(r==null)r=$.AO=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
i_(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
Fh(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.dc(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kR(a){var s,r,q,p
if(a instanceof A.j)return A.bn(A.bz(a),null)
s=J.dE(a)
if(s===B.bN||s===B.bP||t.cx.b(a)){r=B.aE(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bn(A.bz(a),null)},
AQ(a){var s,r,q
if(a==null||typeof a=="number"||A.c0(a))return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dN)return a.k(0)
if(a instanceof A.er)return a.lP(!0)
s=$.DM()
for(r=0;r<1;++r){q=s[r].x5(a)
if(q!=null)return q}return"Instance of '"+A.kR(a)+"'"},
Fd(){return Date.now()},
Fg(){var s,r
if($.rB!==0)return
$.rB=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.rB=1e6
$.kS=new A.rA(r)},
Fc(){if(!!self.location)return self.location.href
return null},
AN(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Fi(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r){q=a[r]
if(!A.aE(q))throw A.b(A.ez(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.b.ac(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.ez(q))}return A.AN(p)},
AR(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.aE(q))throw A.b(A.ez(q))
if(q<0)throw A.b(A.ez(q))
if(q>65535)return A.Fi(a)}return A.AN(a)},
Fj(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bh(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.ac(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ak(a,0,1114111,null,null))},
Fk(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.b.aj(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.b.K(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bg(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
yW(a){return a.c?A.bg(a).getUTCFullYear()+0:A.bg(a).getFullYear()+0},
yU(a){return a.c?A.bg(a).getUTCMonth()+1:A.bg(a).getMonth()+1},
rz(a){return a.c?A.bg(a).getUTCDate()+0:A.bg(a).getDate()+0},
yS(a){return a.c?A.bg(a).getUTCHours()+0:A.bg(a).getHours()+0},
yT(a){return a.c?A.bg(a).getUTCMinutes()+0:A.bg(a).getMinutes()+0},
yV(a){return a.c?A.bg(a).getUTCSeconds()+0:A.bg(a).getSeconds()+0},
AP(a){return a.c?A.bg(a).getUTCMilliseconds()+0:A.bg(a).getMilliseconds()+0},
Ff(a){return B.b.aj((a.c?A.bg(a).getUTCDay()+0:A.bg(a).getDay()+0)+6,7)+1},
Fe(a){var s=a.$thrownJsError
if(s==null)return null
return A.a7(s)},
kT(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aF(a,s)
a.$thrownJsError=s
s.stack=b.k(0)}},
xK(a,b){var s,r="index"
if(!A.aE(b))return new A.bC(!0,b,r,null)
s=J.ao(a)
if(b<0||b>=s)return A.ke(b,s,a,null,r)
return A.t_(b,r)},
Iz(a,b,c){if(a<0||a>c)return A.ak(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ak(b,a,c,"end",null)
return new A.bC(!0,b,"end",null)},
ez(a){return new A.bC(!0,a,null,null)},
b(a){return A.aF(a,new Error())},
aF(a,b){var s
if(a==null)a=new A.cS()
b.dartException=a
s=A.Jk
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Jk(){return J.ap(this.dartException)},
v(a,b){throw A.aF(a,b==null?new Error():b)},
E(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.v(A.Ha(a,b,c),s)},
Ha(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cy("'"+s+"': Cannot "+o+" "+l+k+n)},
A(a){throw A.b(A.aq(a))},
cT(a){var s,r,q,p,o,n
a=A.CY(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.tH(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
tI(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
B4(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
yN(a,b){var s=b==null,r=s?null:b.method
return new A.kl(a,r,s?null:b.receiver)},
C(a){if(a==null)return new A.kJ(a)
if(a instanceof A.hn)return A.dF(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.dF(a,a.dartException)
return A.I1(a)},
dF(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
I1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.ac(r,16)&8191)===10)switch(q){case 438:return A.dF(a,A.yN(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.dF(a,new A.hU())}}if(a instanceof TypeError){p=$.Dj()
o=$.Dk()
n=$.Dl()
m=$.Dm()
l=$.Dp()
k=$.Dq()
j=$.Do()
$.Dn()
i=$.Ds()
h=$.Dr()
g=p.bJ(s)
if(g!=null)return A.dF(a,A.yN(s,g))
else{g=o.bJ(s)
if(g!=null){g.method="call"
return A.dF(a,A.yN(s,g))}else if(n.bJ(s)!=null||m.bJ(s)!=null||l.bJ(s)!=null||k.bJ(s)!=null||j.bJ(s)!=null||m.bJ(s)!=null||i.bJ(s)!=null||h.bJ(s)!=null)return A.dF(a,new A.hU())}return A.dF(a,new A.lp(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.id()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.dF(a,new A.bC(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.id()
return a},
a7(a){var s
if(a instanceof A.hn)return a.b
if(a==null)return new A.iX(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iX(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jm(a){if(a==null)return J.a2(a)
if(typeof a=="object")return A.e8(a)
return J.a2(a)},
It(a){if(typeof a=="number")return B.t.gI(a)
if(a instanceof A.mF)return A.e8(a)
if(a instanceof A.er)return a.gI(a)
if(a instanceof A.ik)return a.gI(0)
return A.jm(a)},
CL(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
IF(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
Hm(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Al("Unsupported number of arguments for wrapped closure"))},
dC(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Iu(a,b)
a.$identity=s
return s},
Iu(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Hm)},
Ed(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.tg().constructor.prototype):Object.create(new A.h8(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Ae(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.E9(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Ae(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
E9(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.E3)}throw A.b("Error in functionType of tearoff")},
Ea(a,b,c,d){var s=A.Ac
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Ae(a,b,c,d){if(c)return A.Ec(a,b,d)
return A.Ea(b.length,d,a,b)},
Eb(a,b,c,d){var s=A.Ac,r=A.E4
switch(b?-1:a){case 0:throw A.b(new A.l1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Ec(a,b,c){var s,r
if($.Aa==null)$.Aa=A.A9("interceptor")
if($.Ab==null)$.Ab=A.A9("receiver")
s=b.length
r=A.Eb(s,c,a,b)
return r},
zx(a){return A.Ed(a)},
E3(a,b){return A.j5(v.typeUniverse,A.bz(a.a),b)},
Ac(a){return a.a},
E4(a){return a.b},
A9(a){var s,r,q,p=new A.h8("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
xT(a){return v.getIsolateTag(a)},
Jo(a,b){var s=$.u
if(s===B.i)return a
return s.hr(a,b)},
yh(){return v.G},
Ky(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IZ(a){var s,r,q,p,o,n=$.CN.$1(a),m=$.xL[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.y0[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Cv.$2(a,n)
if(q!=null){m=$.xL[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.y0[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.y2(s)
$.xL[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.y0[n]=s
return s}if(p==="-"){o=A.y2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.CV(a,s)
if(p==="*")throw A.b(A.B5(n))
if(v.leafTags[n]===true){o=A.y2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.CV(a,s)},
CV(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.zG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
y2(a){return J.zG(a,!1,null,!!a.$ibF)},
J0(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.y2(s)
else return J.zG(s,c,null,null)},
IP(){if(!0===$.zE)return
$.zE=!0
A.IQ()},
IQ(){var s,r,q,p,o,n,m,l
$.xL=Object.create(null)
$.y0=Object.create(null)
A.IO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.CX.$1(o)
if(n!=null){m=A.J0(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
IO(){var s,r,q,p,o,n,m=B.bm()
m=A.fU(B.bn,A.fU(B.bo,A.fU(B.aF,A.fU(B.aF,A.fU(B.bp,A.fU(B.bq,A.fU(B.br(B.aE),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.CN=new A.xY(p)
$.Cv=new A.xZ(o)
$.CX=new A.y_(n)},
fU(a,b){return a(b)||b},
Gt(a,b){var s
for(s=0;s<a.length;++s)if(!J.t(a[s],b[s]))return!1
return!0},
Iy(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yL(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a3("Illegal RegExp pattern ("+String(o)+")",a,null))},
Jd(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eS){s=B.a.ag(a,c)
return b.b.test(s)}else return!J.zW(b,B.a.ag(a,c)).gA(0)},
CK(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
CY(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.Jf(a,b,c)
if(b instanceof A.eS){s=b.gln()
s.lastIndex=0
return a.replace(s,A.CK(c))}return A.Je(a,b,c)},
Je(a,b,c){var s,r,q,p
for(s=J.zW(b,a),s=s.gt(s),r=0,q="";s.m();){p=s.gn()
q=q+a.substring(r,p.gN())+c
r=p.gM()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Jf(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.CY(b),"g"),A.CK(c))},
Cp(a){return a},
D1(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hn(0,a),s=new A.lM(s.a,s.b,s.c),r=t.lu,q=0,p="";s.m();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.Cp(B.a.q(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.Cp(B.a.ag(a,q)))
return s.charCodeAt(0)==0?s:s},
Jg(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.D2(a,s,s+b.length,c)},
D2(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
az:function az(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
mn:function mn(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a},
mo:function mo(a){this.a=a},
hg:function hg(a,b){this.a=a
this.$ti=b},
eK:function eK(){},
oi:function oi(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
eo:function eo(a,b){this.a=a
this.$ti=b},
fz:function fz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hv:function hv(a,b){this.a=a
this.$ti=b},
hh:function hh(){},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
q1:function q1(){},
hz:function hz(a,b){this.a=a
this.$ti=b},
rA:function rA(a){this.a=a},
i5:function i5(){},
tH:function tH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(){},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
lp:function lp(a){this.a=a},
kJ:function kJ(a){this.a=a},
hn:function hn(a,b){this.a=a
this.b=b},
iX:function iX(a){this.a=a
this.b=null},
dN:function dN(){},
nN:function nN(){},
nO:function nO(){},
tF:function tF(){},
tg:function tg(){},
h8:function h8(a,b){this.a=a
this.b=b},
l1:function l1(a){this.a=a},
bt:function bt(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
q8:function q8(a){this.a=a},
qa:function qa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
U:function U(a,b){this.a=a
this.$ti=b},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(a,b){this.a=a
this.$ti=b},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aB:function aB(a,b){this.a=a
this.$ti=b},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hF:function hF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hE:function hE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
xY:function xY(a){this.a=a},
xZ:function xZ(a){this.a=a},
y_:function y_(a){this.a=a},
er:function er(){},
mk:function mk(){},
ml:function ml(){},
mm:function mm(){},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
fC:function fC(a){this.b=a},
lL:function lL(a,b,c){this.a=a
this.b=b
this.c=c},
lM:function lM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fd:function fd(a,b){this.a=a
this.c=b},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
wL:function wL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Jj(a){throw A.aF(A.AE(a),new Error())},
x(){throw A.aF(A.AF(""),new Error())},
D3(){throw A.aF(A.EO(""),new Error())},
yj(){throw A.aF(A.AE(""),new Error())},
zg(){var s=new A.lU("")
return s.b=s},
v8(a){var s=new A.lU(a)
return s.b=s},
lU:function lU(a){this.a=a
this.b=null},
fP(a,b,c){},
aY(a){var s,r,q
if(t.iy.b(a))return a
s=J.K(a)
r=A.aG(s.gl(a),null,!1,t.z)
for(q=0;q<s.gl(a);++q)r[q]=s.h(a,q)
return r},
F4(a){return new DataView(new ArrayBuffer(a))},
AI(a,b,c){A.fP(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
cK(a,b,c){A.fP(a,b,c)
c=B.b.K(a.byteLength-b,4)
return new Int32Array(a,b,c)},
F5(a){return new Int8Array(a)},
F6(a){return new Uint16Array(a)},
AJ(a,b,c){A.fP(a,b,c)
if(c==null)c=B.b.K(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
qX(a){return new Uint8Array(a)},
bH(a,b,c){A.fP(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
d_(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.xK(b,a))},
d0(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Iz(a,b,c))
if(b==null)return c
return b},
f_:function f_(){},
eZ:function eZ(){},
hP:function hP(){},
mI:function mI(a){this.a=a},
hO:function hO(){},
f0:function f0(){},
dh:function dh(){},
bG:function bG(){},
kC:function kC(){},
kD:function kD(){},
kE:function kE(){},
kF:function kF(){},
kG:function kG(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
e5:function e5(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
z_(a,b){var s=b.c
return s==null?b.c=A.j3(a,"y",[b.x]):s},
AV(a){var s=a.w
if(s===6||s===7)return A.AV(a.x)
return s===11||s===12},
Fr(a){return a.as},
CU(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.wR(v.typeUniverse,a,!1)},
IT(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.dA(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
dA(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dA(a1,s,a3,a4)
if(r===s)return a2
return A.BC(a1,r,!0)
case 7:s=a2.x
r=A.dA(a1,s,a3,a4)
if(r===s)return a2
return A.BB(a1,r,!0)
case 8:q=a2.y
p=A.fT(a1,q,a3,a4)
if(p===q)return a2
return A.j3(a1,a2.x,p)
case 9:o=a2.x
n=A.dA(a1,o,a3,a4)
m=a2.y
l=A.fT(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.zk(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fT(a1,j,a3,a4)
if(i===j)return a2
return A.BD(a1,k,i)
case 11:h=a2.x
g=A.dA(a1,h,a3,a4)
f=a2.y
e=A.HX(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.BA(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fT(a1,d,a3,a4)
o=a2.x
n=A.dA(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.zl(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jB("Attempted to substitute unexpected RTI kind "+a0))}},
fT(a,b,c,d){var s,r,q,p,o=b.length,n=A.x0(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dA(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
HY(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.x0(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dA(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
HX(a,b,c,d){var s,r=b.a,q=A.fT(a,r,c,d),p=b.b,o=A.fT(a,p,c,d),n=b.c,m=A.HY(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.m7()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
n2(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.IJ(s)
return a.$S()}return null},
IS(a,b){var s
if(A.AV(b))if(a instanceof A.dN){s=A.n2(a)
if(s!=null)return s}return A.bz(a)},
bz(a){if(a instanceof A.j)return A.m(a)
if(Array.isArray(a))return A.a6(a)
return A.zs(J.dE(a))},
a6(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.zs(a)},
zs(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Hk(a,s)},
Hk(a,b){var s=a instanceof A.dN?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.GD(v.typeUniverse,s.name)
b.$ccache=r
return r},
IJ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.wR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
d1(a){return A.by(A.m(a))},
zD(a){var s=A.n2(a)
return A.by(s==null?A.bz(a):s)},
zv(a){var s
if(a instanceof A.er)return a.lc()
s=a instanceof A.dN?A.n2(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.bq(a).a
if(Array.isArray(a))return A.a6(a)
return A.bz(a)},
by(a){var s=a.r
return s==null?a.r=new A.mF(a):s},
IC(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.j5(v.typeUniverse,A.zv(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.BF(v.typeUniverse,s,A.zv(q[r]))
return A.j5(v.typeUniverse,s,a)},
bA(a){return A.by(A.wR(v.typeUniverse,a,!1))},
Hj(a){var s=this
s.b=A.HV(s)
return s.b(a)},
HV(a){var s,r,q,p
if(a===t.K)return A.Hs
if(A.eA(a))return A.Hw
s=a.w
if(s===6)return A.Hg
if(s===1)return A.C8
if(s===7)return A.Hn
r=A.HU(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eA)){a.f="$i"+q
if(q==="p")return A.Hq
if(a===t.m)return A.Hp
return A.Hv}}else if(s===10){p=A.Iy(a.x,a.y)
return p==null?A.C8:p}return A.He},
HU(a){if(a.w===8){if(a===t.S)return A.aE
if(a===t.i||a===t.o)return A.Hr
if(a===t.N)return A.Hu
if(a===t.y)return A.c0}return null},
Hi(a){var s=this,r=A.Hd
if(A.eA(s))r=A.GT
else if(s===t.K)r=A.GS
else if(A.fY(s)){r=A.Hf
if(s===t.I)r=A.b4
else if(s===t.v)r=A.aa
else if(s===t.o9)r=A.BU
else if(s===t.jh)r=A.GR
else if(s===t.dz)r=A.BV
else if(s===t.B)r=A.BW}else if(s===t.S)r=A.ah
else if(s===t.N)r=A.M
else if(s===t.y)r=A.fO
else if(s===t.o)r=A.GQ
else if(s===t.i)r=A.ev
else if(s===t.m)r=A.b5
s.a=r
return s.a(a)},
He(a){var s=this
if(a==null)return A.fY(s)
return A.IW(v.typeUniverse,A.IS(a,s),s)},
Hg(a){if(a==null)return!0
return this.x.b(a)},
Hv(a){var s,r=this
if(a==null)return A.fY(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dE(a)[s]},
Hq(a){var s,r=this
if(a==null)return A.fY(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dE(a)[s]},
Hp(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
C7(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Hd(a){var s=this
if(a==null){if(A.fY(s))return a}else if(s.b(a))return a
throw A.aF(A.C0(a,s),new Error())},
Hf(a){var s=this
if(a==null||s.b(a))return a
throw A.aF(A.C0(a,s),new Error())},
C0(a,b){return new A.j1("TypeError: "+A.Br(a,A.bn(b,null)))},
Br(a,b){return A.hm(a)+": type '"+A.bn(A.zv(a),null)+"' is not a subtype of type '"+b+"'"},
c_(a,b){return new A.j1("TypeError: "+A.Br(a,b))},
Hn(a){var s=this
return s.x.b(a)||A.z_(v.typeUniverse,s).b(a)},
Hs(a){return a!=null},
GS(a){if(a!=null)return a
throw A.aF(A.c_(a,"Object"),new Error())},
Hw(a){return!0},
GT(a){return a},
C8(a){return!1},
c0(a){return!0===a||!1===a},
fO(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aF(A.c_(a,"bool"),new Error())},
BU(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aF(A.c_(a,"bool?"),new Error())},
ev(a){if(typeof a=="number")return a
throw A.aF(A.c_(a,"double"),new Error())},
BV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.c_(a,"double?"),new Error())},
aE(a){return typeof a=="number"&&Math.floor(a)===a},
ah(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aF(A.c_(a,"int"),new Error())},
b4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aF(A.c_(a,"int?"),new Error())},
Hr(a){return typeof a=="number"},
GQ(a){if(typeof a=="number")return a
throw A.aF(A.c_(a,"num"),new Error())},
GR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.c_(a,"num?"),new Error())},
Hu(a){return typeof a=="string"},
M(a){if(typeof a=="string")return a
throw A.aF(A.c_(a,"String"),new Error())},
aa(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aF(A.c_(a,"String?"),new Error())},
b5(a){if(A.C7(a))return a
throw A.aF(A.c_(a,"JSObject"),new Error())},
BW(a){if(a==null)return a
if(A.C7(a))return a
throw A.aF(A.c_(a,"JSObject?"),new Error())},
Ck(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bn(a[q],b)
return s},
HK(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Ck(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bn(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
C4(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bn(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bn(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bn(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bn(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bn(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bn(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bn(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bn(a.x,b)+">"
if(m===8){p=A.I0(a.x)
o=a.y
return o.length>0?p+("<"+A.Ck(o,b)+">"):p}if(m===10)return A.HK(a,b)
if(m===11)return A.C4(a,b,null)
if(m===12)return A.C4(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
I0(a){var s=A.D6(a)
if(s!=null)return s
return"minified:"+a},
GE(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
GD(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.wR(a,b,!1)
else if(typeof m=="number"){s=m
r=A.j4(a,5,"#")
q=A.x0(s)
for(p=0;p<s;++p)q[p]=r
o=A.j3(a,b,q)
n[b]=o
return o}else return m},
GC(a,b){return A.BS(a.tR,b)},
GB(a,b){return A.BS(a.eT,b)},
wR(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.BE(a,null,b,!1)
r.set(b,s)
return s},
j5(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.BE(a,b,c,!0)
q.set(c,r)
return r},
BF(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.zk(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
BE(a,b,c,d){return A.Gr(A.Gl(a,b,c,d))},
dz(a,b){b.a=A.Hi
b.b=A.Hj
return b},
j4(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ca(null,null)
s.w=b
s.as=c
r=A.dz(a,s)
a.eC.set(c,r)
return r},
BC(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Gz(a,b,r,c)
a.eC.set(r,s)
return s},
Gz(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eA(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.fY(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.ca(null,null)
q.w=6
q.x=b
q.as=c
return A.dz(a,q)},
BB(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Gx(a,b,r,c)
a.eC.set(r,s)
return s},
Gx(a,b,c,d){var s,r
if(d){s=b.w
if(A.eA(b)||b===t.K)return b
else if(s===1)return A.j3(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.ca(null,null)
r.w=7
r.x=b
r.as=c
return A.dz(a,r)},
GA(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ca(null,null)
s.w=13
s.x=b
s.as=q
r=A.dz(a,s)
a.eC.set(q,r)
return r},
j2(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Gw(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
j3(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.j2(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ca(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dz(a,r)
a.eC.set(p,q)
return q},
zk(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.j2(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ca(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dz(a,o)
a.eC.set(q,n)
return n},
BD(a,b,c){var s,r,q="+"+(b+"("+A.j2(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ca(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dz(a,s)
a.eC.set(q,r)
return r},
BA(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.j2(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.j2(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Gw(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ca(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dz(a,p)
a.eC.set(r,o)
return o},
zl(a,b,c,d){var s,r=b.as+("<"+A.j2(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Gy(a,b,c,r,d)
a.eC.set(r,s)
return s},
Gy(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.x0(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dA(a,b,r,0)
m=A.fT(a,c,r,0)
return A.zl(a,n,m,c!==m)}}l=new A.ca(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dz(a,l)},
Gl(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Gr(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Gn(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Bw(a,r,l,k,!1)
else if(q===46)r=A.Bw(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eq(a.u,a.e,k.pop()))
break
case 94:k.push(A.GA(a.u,k.pop()))
break
case 35:k.push(A.j4(a.u,5,"#"))
break
case 64:k.push(A.j4(a.u,2,"@"))
break
case 126:k.push(A.j4(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Gp(a,k)
break
case 38:A.Go(a,k)
break
case 63:p=a.u
k.push(A.BC(p,A.eq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.BB(p,A.eq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Gm(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Bx(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Gs(a.u,a.e,o)
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
return A.eq(a.u,a.e,m)},
Gn(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Bw(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.GE(s,o.x)[p]
if(n==null)A.v('No "'+p+'" in "'+A.Fr(o)+'"')
d.push(A.j5(s,o,n))}else d.push(p)
return m},
Gp(a,b){var s,r=a.u,q=A.Bv(a,b),p=b.pop()
if(typeof p=="string")b.push(A.j3(r,p,q))
else{s=A.eq(r,a.e,p)
switch(s.w){case 11:b.push(A.zl(r,s,q,a.n))
break
default:b.push(A.zk(r,s,q))
break}}},
Gm(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Bv(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eq(p,a.e,o)
q=new A.m7()
q.a=s
q.b=n
q.c=m
b.push(A.BA(p,r,q))
return
case-4:b.push(A.BD(p,b.pop(),s))
return
default:throw A.b(A.jB("Unexpected state under `()`: "+A.r(o)))}},
Go(a,b){var s=b.pop()
if(0===s){b.push(A.j4(a.u,1,"0&"))
return}if(1===s){b.push(A.j4(a.u,4,"1&"))
return}throw A.b(A.jB("Unexpected extended operation "+A.r(s)))},
Bv(a,b){var s=b.splice(a.p)
A.Bx(a.u,a.e,s)
a.p=b.pop()
return s},
eq(a,b,c){if(typeof c=="string")return A.j3(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Gq(a,b,c)}else return c},
Bx(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eq(a,b,c[s])},
Gs(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eq(a,b,c[s])},
Gq(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jB("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jB("Bad index "+c+" for "+b.k(0)))},
IW(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aK(a,b,null,c,null)
r.set(c,s)}return s},
aK(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eA(d))return!0
s=b.w
if(s===4)return!0
if(A.eA(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aK(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aK(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aK(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aK(a,b.x,c,d,e))return!1
return A.aK(a,A.z_(a,b),c,d,e)}if(s===6)return A.aK(a,p,c,d,e)&&A.aK(a,b.x,c,d,e)
if(q===7){if(A.aK(a,b,c,d.x,e))return!0
return A.aK(a,b,c,A.z_(a,d),e)}if(q===6)return A.aK(a,b,c,p,e)||A.aK(a,b,c,d.x,e)
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
if(!A.aK(a,j,c,i,e)||!A.aK(a,i,e,j,c))return!1}return A.C6(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.C6(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ho(a,b,c,d,e)}if(o&&q===10)return A.Ht(a,b,c,d,e)
return!1},
C6(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aK(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aK(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aK(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aK(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aK(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Ho(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j5(a,b,r[o])
return A.BT(a,p,null,c,d.y,e)}return A.BT(a,b.y,null,c,d.y,e)},
BT(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aK(a,b[s],d,e[s],f))return!1
return!0},
Ht(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aK(a,r[s],c,q[s],e))return!1
return!0},
fY(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.eA(a))if(s!==6)r=s===7&&A.fY(a.x)
return r},
eA(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
BS(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
x0(a){return a>0?new Array(a):v.typeUniverse.sEA},
ca:function ca(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
m7:function m7(){this.c=this.b=this.a=null},
mF:function mF(a){this.a=a},
m4:function m4(){},
j1:function j1(a){this.a=a},
FS(){var s,r,q
if(self.scheduleImmediate!=null)return A.I3()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dC(new A.uP(s),1)).observe(r,{childList:true})
return new A.uO(s,r,q)}else if(self.setImmediate!=null)return A.I4()
return A.I5()},
FT(a){self.scheduleImmediate(A.dC(new A.uQ(a),0))},
FU(a){self.setImmediate(A.dC(new A.uR(a),0))},
FV(a){A.z7(B.A,a)},
z7(a,b){var s=B.b.K(a.a,1000)
return A.Gu(s<0?0:s,b)},
B0(a,b){var s=B.b.K(a.a,1000)
return A.Gv(s<0?0:s,b)},
Gu(a,b){var s=new A.j0(!0)
s.on(a,b)
return s},
Gv(a,b){var s=new A.j0(!1)
s.oo(a,b)
return s},
h(a){return new A.it(new A.q($.u,a.i("q<0>")),a.i("it<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.BX(a,b)},
e(a,b){b.az(a)},
d(a,b){b.bt(A.C(a),A.a7(a))},
BX(a,b){var s,r,q=new A.xf(b),p=new A.xg(b)
if(a instanceof A.q)a.lN(q,p,t.z)
else{s=t.z
if(a instanceof A.q)a.bu(q,p,s)
else{r=new A.q($.u,t._)
r.a=8
r.c=a
r.lN(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.u.f2(new A.xv(s),t.H,t.S,t.z)},
bI(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cF(null)
else{s=c.a
s===$&&A.x()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.C(a)
q=A.a7(a)
s.al(new A.ad(r,q))}else{s=A.C(a)
r=A.a7(a)
q=c.a
q===$&&A.x()
q.bG(s,r)
c.a.p()}return}if(a instanceof A.iM){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.x()
r.u(0,s)
A.jp(new A.xd(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.x()
s.tU(p,!1).aO(new A.xe(c,b),t.P)
return}}A.BX(a,b)},
Co(a){var s=a.a
s===$&&A.x()
return new A.bb(s,A.m(s).i("bb<1>"))},
FW(a,b){var s=new A.lO(b.i("lO<0>"))
s.oi(a,b)
return s},
C9(a,b){return A.FW(a,b)},
Gh(a){return new A.iM(a,1)},
du(a){return new A.iM(a,0)},
Bz(a,b,c){return 0},
h6(a){var s
if(t.C.b(a)){s=a.gc9()
if(s!=null)return s}return B.M},
hu(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.C(q)
r=A.a7(q)
p=new A.q($.u,b.i("q<0>"))
o=s
n=r
m=A.jc(o,n)
if(m==null)o=new A.ad(o,n==null?A.h6(o):n)
else o=m
p.ca(o)
return p}return b.i("y<0>").b(l)?l:A.bd(l,b)},
c6(a,b){var s=a==null?b.a(a):a,r=new A.q($.u,b.i("q<0>"))
r.aU(s)
return r},
EE(a,b){var s
if(!b.b(null))throw A.b(A.aI(null,"computation","The type parameter is not nullable"))
s=new A.q($.u,b.i("q<0>"))
A.cv(a,new A.px(null,s,b))
return s},
yG(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.q($.u,b.i("q<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pz(i,h,g,f)
try{for(n=J.I(a),m=t.P;n.m();){r=n.gn()
q=i.b
r.bu(new A.py(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cF(A.l([],b.i("B<0>")))
return n}i.a=A.aG(n,null,!1,b.i("0?"))}catch(l){p=A.C(l)
o=A.a7(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.jc(m,k)
if(j==null)m=new A.ad(m,k==null?A.h6(m):k)
else m=j
n.ca(m)
return n}else{i.d=p
i.c=o}}return f},
yF(a,b,c,d){var s=new A.ps(d,null,b,c),r=$.u,q=new A.q(r,c.i("q<0>"))
if(r!==B.i)s=r.f2(s,c.i("0/"),t.K,t.l)
a.dn(new A.bX(q,2,null,s,a.$ti.i("@<1>").T(c).i("bX<1,2>")))
return q},
EC(a,b){var s,r,q,p=A.l([],b.i("B<iK<0>>"))
for(s=a.length,r=b.i("iK<0>"),q=0;q<a.length;a.length===s||(0,A.A)(a),++q)p.push(new A.iK(a[q],r))
if(p.length===0)return A.c6(A.l([],b.i("B<0>")),b.i("p<0>"))
s=new A.q($.u,b.i("q<p<0>>"))
A.Gb(p,new A.pt(new A.ag(s,b.i("ag<p<0>>")),p,b))
return s},
HA(a){return a!=null},
Gb(a,b){var s,r={},q=r.a=r.b=0,p=new A.vM(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.A)(a),++q)a[q].tF(p)},
jc(a,b){var s,r,q,p=$.u
if(p===B.i)return null
s=p.mk(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.kT(r,q)
return s},
ew(a,b){var s
if($.u!==B.i){s=A.jc(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gc9()
if(b==null){A.kT(a,B.M)
b=B.M}}else b=B.M
else if(t.C.b(a))A.kT(a,b)
return new A.ad(a,b)},
Ga(a,b,c){var s=new A.q(b,c.i("q<0>"))
s.a=8
s.c=a
return s},
bd(a,b){var s=new A.q($.u,b.i("q<0>"))
s.a=8
s.c=a
return s},
vS(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.z1()
b.ca(new A.ad(new A.bC(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lt(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.ev()
b.fp(p.a)
A.em(b,q)
return}b.a^=2
b.b.cB(new A.vT(p,b))},
em(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.eN(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.em(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbZ()===k.gbZ())}else f=!1
if(f){f=g.a
r=f.c
f.b.eN(r.a,r.b)
return}j=$.u
if(j!==k)$.u=k
else j=null
f=s.a.c
if((f&15)===8)new A.vX(s,g,p).$0()
else if(q){if((f&1)!==0)new A.vW(s,m).$0()}else if((f&2)!==0)new A.vV(g,s).$0()
if(j!=null)$.u=j
f=s.c
if(f instanceof A.q){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hd(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.vS(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hd(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
Ce(a,b){if(t.ng.b(a))return b.f2(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.d6(a,t.z,t.K)
throw A.b(A.aI(a,"onError",u.w))},
Hz(){var s,r
for(s=$.fR;s!=null;s=$.fR){$.je=null
r=s.b
$.fR=r
if(r==null)$.jd=null
s.a.$0()}},
HW(){$.zt=!0
try{A.Hz()}finally{$.je=null
$.zt=!1
if($.fR!=null)$.zP().$1(A.Cw())}},
Cm(a){var s=new A.lN(a),r=$.jd
if(r==null){$.fR=$.jd=s
if(!$.zt)$.zP().$1(A.Cw())}else $.jd=r.b=s},
HT(a){var s,r,q,p=$.fR
if(p==null){A.Cm(a)
$.je=$.jd
return}s=new A.lN(a)
r=$.je
if(r==null){s.b=p
$.fR=$.je=s}else{q=r.b
s.b=q
$.je=r.b=s
if(q==null)$.jd=s}},
jp(a){var s,r=null,q=$.u
if(B.i===q){A.xt(r,r,B.i,a)
return}if(B.i===q.gjg().a)s=B.i.gbZ()===q.gbZ()
else s=!1
if(s){A.xt(r,r,q,q.bM(a,t.H))
return}s=$.u
s.cB(s.eD(a))},
z3(a,b){var s=null,r=b.i("cA<0>"),q=new A.cA(s,s,s,s,r)
q.aw(a)
q.kR()
return new A.bb(q,r.i("bb<1>"))},
JM(a,b){return new A.bZ(A.bL(a,"stream",t.K),b.i("bZ<0>"))},
z2(a,b,c,d,e){return d?new A.fI(b,null,c,a,e.i("fI<0>")):new A.cA(b,null,c,a,e.i("cA<0>"))},
ed(a,b,c){return new A.iu(b,a,c.i("iu<0>"))},
n_(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.C(q)
r=A.a7(q)
$.u.eN(s,r)}},
G8(a,b,c,d,e,f){var s=$.u,r=e?1:0,q=c!=null?32:0,p=A.lS(s,b,f),o=A.v3(s,c),n=d==null?A.xw():d
return new A.ds(a,p,o,s.bM(n,t.H),s,r|q,f.i("ds<0>"))},
FR(a){return new A.uL(a)},
lS(a,b,c){var s=b==null?A.I7():b
return a.d6(s,t.H,c)},
v3(a,b){if(b==null)b=A.I8()
if(t.b9.b(b))return a.f2(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.d6(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
HB(a){},
HD(a,b){$.u.eN(a,b)},
HC(){},
Bq(a,b){var s=$.u,r=new A.fv(s,b.i("fv<0>"))
A.jp(r.glp())
if(a!=null)r.c=s.bM(a,t.H)
return r},
H0(a,b,c){var s=a.B()
if(s!==$.dG())s.aQ(new A.xi(b,c))
else b.al(c)},
H1(a,b,c){var s=a.B()
if(s!==$.dG())s.aQ(new A.xj(b,c))
else b.cb(c)},
cv(a,b){var s=$.u
if(s===B.i)return s.jy(a,b)
return s.jy(a,s.eD(b))},
B_(a,b){var s,r=$.u
if(r===B.i)return r.jx(a,b)
s=r.hr(b,t.hU)
return $.u.jx(a,s)},
yg(a,b,c,d){return A.HS(a,c,b,d)},
HS(a,b,c,d){return $.u.mr(c,b).aZ(a,d)},
HQ(a,b,c,d,e){A.jh(d,e)},
jh(a,b){A.HT(new A.xq(a,b))},
xr(a,b,c,d){var s,r=$.u
if(r===c)return d.$0()
$.u=c
s=r
try{r=d.$0()
return r}finally{$.u=s}},
xs(a,b,c,d,e){var s,r=$.u
if(r===c)return d.$1(e)
$.u=c
s=r
try{r=d.$1(e)
return r}finally{$.u=s}},
zu(a,b,c,d,e,f){var s,r=$.u
if(r===c)return d.$2(e,f)
$.u=c
s=r
try{r=d.$2(e,f)
return r}finally{$.u=s}},
Ci(a,b,c,d){return d},
Cj(a,b,c,d){return d},
Ch(a,b,c,d){return d},
HP(a,b,c,d,e){return null},
xt(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gbZ()
r=c.gbZ()
d=s!==r?c.eD(d):c.js(d,t.H)}A.Cm(d)},
HO(a,b,c,d,e){return A.z7(d,B.i!==c?c.js(e,t.H):e)},
HN(a,b,c,d,e){e=c.u6(e,t.H,t.hU)
return A.B0(d,e)},
HR(a,b,c,d){A.CW(d)},
Cg(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.yH(o,o,o,s,s)
r.F(0,e)}else r=o
s=new A.lY(c.glD(),c.glF(),c.glE(),c.glz(),c.glA(),c.gly(),c.gl6(),c.gjg(),c.gl_(),c.gkZ(),c.glu(),c.gl9(),c.gj_(),c.gjo(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.mT(s,q)
p=d.a
if(p!=null)s.as=new A.mS(s,p)}if(r!=null)s.at=new A.mU(s,r)
return s},
uP:function uP(a){this.a=a},
uO:function uO(a,b,c){this.a=a
this.b=b
this.c=c},
uQ:function uQ(a){this.a=a},
uR:function uR(a){this.a=a},
j0:function j0(a){this.a=a
this.b=null
this.c=0},
wO:function wO(a,b){this.a=a
this.b=b},
wN:function wN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b){this.a=a
this.b=!1
this.$ti=b},
xf:function xf(a){this.a=a},
xg:function xg(a){this.a=a},
xv:function xv(a){this.a=a},
xd:function xd(a,b){this.a=a
this.b=b},
xe:function xe(a,b){this.a=a
this.b=b},
lO:function lO(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
uW:function uW(a){this.a=a},
uX:function uX(a,b){this.a=a
this.b=b},
uV:function uV(a,b){this.a=a
this.b=b},
uS:function uS(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
mD:function mD(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
fH:function fH(a,b){this.a=a
this.$ti=b},
ad:function ad(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b,c,d,e,f,g){var _=this
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
iz:function iz(){},
iu:function iu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
px:function px(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
py:function py(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ps:function ps(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ll:function ll(a,b){this.a=a
this.b=b},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a,b,c){this.c=a
this.d=b
this.$ti=c},
iK:function iK(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
vN:function vN(a,b){this.a=a
this.b=b},
vO:function vO(a,b){this.a=a
this.b=b},
vM:function vM(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(){},
aC:function aC(a,b){this.a=a
this.$ti=b},
ag:function ag(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
q:function q(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
vP:function vP(a,b){this.a=a
this.b=b},
vU:function vU(a,b){this.a=a
this.b=b},
vT:function vT(a,b){this.a=a
this.b=b},
vR:function vR(a,b){this.a=a
this.b=b},
vQ:function vQ(a,b){this.a=a
this.b=b},
vX:function vX(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(a,b){this.a=a
this.b=b},
vZ:function vZ(a){this.a=a},
vW:function vW(a,b){this.a=a
this.b=b},
vV:function vV(a,b){this.a=a
this.b=b},
w_:function w_(a,b){this.a=a
this.b=b},
w0:function w0(a,b,c){this.a=a
this.b=b
this.c=c},
w1:function w1(a,b){this.a=a
this.b=b},
lN:function lN(a){this.a=a
this.b=null},
a4:function a4(){},
tk:function tk(a,b){this.a=a
this.b=b},
tl:function tl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tm:function tm(a,b){this.a=a
this.b=b},
tn:function tn(a,b){this.a=a
this.b=b},
ti:function ti(a){this.a=a},
tj:function tj(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(){},
dx:function dx(){},
wH:function wH(a){this.a=a},
wG:function wG(a){this.a=a},
mE:function mE(){},
iv:function iv(){},
cA:function cA(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
fI:function fI(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
bb:function bb(a,b){this.a=a
this.$ti=b},
ds:function ds(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
lK:function lK(){},
uL:function uL(a){this.a=a},
uK:function uK(a){this.a=a},
iY:function iY(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
aP:function aP(){},
v5:function v5(a,b,c){this.a=a
this.b=b
this.c=c},
v4:function v4(a){this.a=a},
fG:function fG(){},
m3:function m3(){},
bW:function bW(a,b){this.b=a
this.a=null
this.$ti=b},
fu:function fu(a,b){this.b=a
this.c=b
this.a=null},
vF:function vF(){},
dw:function dw(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
wp:function wp(a,b){this.a=a
this.b=b},
fv:function fv(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
bZ:function bZ(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
iF:function iF(a){this.$ti=a},
cY:function cY(a,b){this.b=a
this.$ti=b},
wn:function wn(a,b){this.a=a
this.b=b},
iP:function iP(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
xi:function xi(a,b){this.a=a
this.b=b},
xj:function xj(a,b){this.a=a
this.b=b},
iI:function iI(){},
fy:function fy(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
ep:function ep(a,b,c){this.b=a
this.a=b
this.$ti=c},
iG:function iG(a,b){this.a=a
this.$ti=b},
fE:function fE(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
iy:function iy(a,b,c){this.a=a
this.b=b
this.$ti=c},
xa:function xa(a,b){this.a=a
this.b=b},
xc:function xc(a,b){this.a=a
this.b=b},
xb:function xb(a,b){this.a=a
this.b=b},
x8:function x8(a,b){this.a=a
this.b=b},
x9:function x9(a,b){this.a=a
this.b=b},
x7:function x7(a,b){this.a=a
this.b=b},
x4:function x4(a,b){this.a=a
this.b=b},
mT:function mT(a,b){this.a=a
this.b=b},
x3:function x3(a,b){this.a=a
this.b=b},
x2:function x2(a,b){this.a=a
this.b=b},
x6:function x6(a,b){this.a=a
this.b=b},
x5:function x5(a,b){this.a=a
this.b=b},
mS:function mS(a,b){this.a=a
this.b=b},
mU:function mU(a,b){this.a=a
this.b=b},
mR:function mR(){},
lY:function lY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
vB:function vB(a,b,c){this.a=a
this.b=b
this.c=c},
vD:function vD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vA:function vA(a,b){this.a=a
this.b=b},
vC:function vC(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function mr(){},
ww:function ww(a,b,c){this.a=a
this.b=b
this.c=c},
wv:function wv(a,b){this.a=a
this.b=b},
wx:function wx(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a){this.a=a},
xq:function xq(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
yH(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cW(d.i("@<0>").T(e).i("cW<1,2>"))
b=A.zz()}else{if(A.CC()===b&&A.CB()===a)return new A.dt(d.i("@<0>").T(e).i("dt<1,2>"))
if(a==null)a=A.zy()}else{if(b==null)b=A.zz()
if(a==null)a=A.zy()}return A.G9(a,b,c,d,e)},
Bs(a,b){var s=a[b]
return s===a?null:s},
zi(a,b,c){if(c==null)a[b]=a
else a[b]=c},
zh(){var s=Object.create(null)
A.zi(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
G9(a,b,c,d,e){var s=c!=null?c:new A.vz(d)
return new A.iC(a,b,s,d.i("@<0>").T(e).i("iC<1,2>"))},
hH(a,b,c,d){if(b==null){if(a==null)return new A.bt(c.i("@<0>").T(d).i("bt<1,2>"))
b=A.zz()}else{if(A.CC()===b&&A.CB()===a)return new A.hF(c.i("@<0>").T(d).i("hF<1,2>"))
if(a==null)a=A.zy()}return A.Gk(a,b,null,c,d)},
n(a,b,c){return A.CL(a,new A.bt(b.i("@<0>").T(c).i("bt<1,2>")))},
D(a,b){return new A.bt(a.i("@<0>").T(b).i("bt<1,2>"))},
Gk(a,b,c,d,e){return new A.iN(a,b,new A.wl(d),d.i("@<0>").T(e).i("iN<1,2>"))},
qc(a){return new A.cX(a.i("cX<0>"))},
aS(a){return new A.cX(a.i("cX<0>"))},
ai(a,b){return A.IF(a,new A.cX(b.i("cX<0>")))},
zj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fA(a,b,c){var s=new A.dv(a,b,c.i("dv<0>"))
s.c=a.e
return s},
H5(a,b){return J.t(a,b)},
H6(a){return J.a2(a)},
b_(a,b,c){var s=A.hH(null,null,b,c)
a.a2(0,new A.qb(s,b,c))
return s},
dZ(a,b,c){var s=A.hH(null,null,b,c)
s.F(0,a)
return s},
qd(a,b){var s,r,q=A.qc(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r)q.u(0,b.a(a[r]))
return q},
e_(a,b){var s=A.qc(b)
s.F(0,a)
return s},
EP(a,b){var s=t.bP
return J.A_(s.a(a),s.a(b))},
qz(a){var s,r
if(A.zF(a))return"{...}"
s=new A.ab("")
try{r={}
$.ex.push(a)
s.a+="{"
r.a=!0
a.a2(0,new A.qA(r,s))
s.a+="}"}finally{$.ex.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
yO(a){return new A.hI(A.aG(A.EQ(null),null,!1,a.i("0?")),a.i("hI<0>"))},
EQ(a){return 8},
cW:function cW(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
w3:function w3(a){this.a=a},
w2:function w2(a){this.a=a},
dt:function dt(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
iC:function iC(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
vz:function vz(a){this.a=a},
en:function en(a,b){this.a=a
this.$ti=b},
m8:function m8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iN:function iN(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
wl:function wl(a){this.a=a},
cX:function cX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
wm:function wm(a){this.a=a
this.c=this.b=null},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
qb:function qb(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
me:function me(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aT:function aT(){},
F:function F(){},
Q:function Q(){},
qy:function qy(a){this.a=a},
qA:function qA(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.$ti=b},
mh:function mh(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
mH:function mH(){},
hM:function hM(){},
cx:function cx(a,b){this.a=a
this.$ti=b},
hI:function hI(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
mf:function mf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cb:function cb(){},
iW:function iW(){},
j6:function j6(){},
Cc(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.C(r)
q=A.a3(String(s),null,null)
throw A.b(q)}q=A.xk(p)
return q},
xk(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mc(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.xk(a[s])
return a},
GP(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.DC()
else s=new Uint8Array(o)
for(r=J.K(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
GO(a,b,c,d){var s=a?$.DB():$.DA()
if(s==null)return null
if(0===c&&d===b.length)return A.BQ(s,b)
return A.BQ(s,b.subarray(c,d))},
BQ(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
A3(a,b,c,d,e,f){if(B.b.aj(f,4)!==0)throw A.b(A.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a3("Invalid base64 padding, more than two '=' characters",a,b))},
G_(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.K(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.E(f)
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
if(3-k===1){r&2&&A.E(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.E(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.aI(b,"Not a byte value at index "+q+": 0x"+B.b.ke(s.h(b,q),16),null))},
FZ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.b.ac(f,2),i=f&3,h=$.zQ()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.E(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.a3(l,a,r))
s&2&&A.E(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a3(l,a,r))
s&2&&A.E(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.Bf(a,r+1,c,-m-1)}throw A.b(A.a3(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a3(k,a,r))},
FX(a,b,c,d){var s=A.FY(a,b,c),r=(d&3)+(s-b),q=B.b.ac(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Dt()},
FY(a,b,c){var s,r=c,q=r,p=0
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
Bf(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.a3("Invalid padding character",a,b))
return-s-1},
Er(a){return B.cm.h(0,a.toLowerCase())},
AD(a,b,c){return new A.hG(a,b)},
H9(a){return a.am()},
Gi(a,b){return new A.wi(a,[],A.Iv())},
Gj(a,b,c){var s,r=new A.ab("")
A.Bu(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Bu(a,b,c,d){var s=A.Gi(b,c)
s.ie(a)},
BR(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
mc:function mc(a,b){this.a=a
this.b=b
this.c=null},
wh:function wh(a){this.a=a},
md:function md(a){this.a=a},
wf:function wf(a,b,c){this.b=a
this.c=b
this.a=c},
wZ:function wZ(){},
wY:function wY(){},
jy:function jy(){},
mG:function mG(){},
jz:function jz(a){this.a=a},
wQ:function wQ(a,b){this.a=a
this.b=b},
ns:function ns(){},
jE:function jE(){},
lQ:function lQ(a){this.a=0
this.b=a},
v2:function v2(a){this.c=null
this.a=0
this.b=a},
uZ:function uZ(){},
uM:function uM(a,b){this.a=a
this.b=b},
jD:function jD(){},
lP:function lP(){this.a=0},
uY:function uY(a,b){this.a=a
this.b=b},
nz:function nz(){},
fq:function fq(a){this.a=a},
lT:function lT(a,b){this.a=a
this.b=b
this.c=0},
jP:function jP(){},
my:function my(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
jQ:function jQ(){},
ar:function ar(){},
om:function om(a){this.a=a},
dU:function dU(){},
hG:function hG(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
q9:function q9(){},
ko:function ko(a){this.b=a},
wg:function wg(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
kn:function kn(a){this.a=a},
wj:function wj(){},
wk:function wk(a,b){this.a=a
this.b=b},
wi:function wi(a,b,c){this.c=a
this.a=b
this.b=c},
kp:function kp(){},
kq:function kq(a){this.a=a},
lg:function lg(){},
wM:function wM(a,b){this.a=a
this.b=b},
j_:function j_(){},
mA:function mA(a){this.a=a},
wX:function wX(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(){},
lw:function lw(){},
mJ:function mJ(a){this.b=this.a=0
this.c=a},
x_:function x_(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
im:function im(a){this.a=a},
cZ:function cZ(a){this.a=a
this.b=16
this.c=0},
mV:function mV(){},
zf(a,b){var s=A.G6(a,b)
if(s==null)throw A.b(A.a3("Could not parse BigInt",a,null))
return s},
G3(a,b){var s,r,q=$.c1(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bb(0,$.zR()).fe(0,A.iw(s))
s=0
o=0}}if(b)return q.bw(0)
return q},
Bh(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
G4(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.t.u8(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.Bh(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.Bh(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.c1()
l=A.bw(j,i)
return new A.ay(l===0?!1:c,i,l)},
G6(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Dv().dT(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.G3(p,q)
if(o!=null)return A.G4(o,2,q)
return null},
bw(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
zd(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
Bg(a){var s
if(a===0)return $.c1()
if(a===1)return $.eE()
if(a===2)return $.Dw()
if(Math.abs(a)<4294967296)return A.iw(B.b.i7(a))
s=A.G0(a)
return s},
iw(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bw(4,s)
return new A.ay(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bw(1,s)
return new A.ay(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.b.ac(a,16)
r=A.bw(2,s)
return new A.ay(r===0?!1:o,s,r)}r=B.b.K(B.b.gm6(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.b.K(a,65536)}r=A.bw(r,s)
return new A.ay(r===0?!1:o,s,r)},
G0(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.O("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.c1()
r=$.Du()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.E(r)
r[p]=0}q=J.nb(B.e.ga5(r))
q.$flags&2&&A.E(q,13)
q.setFloat64(0,a,!0)
q=r[7]
o=r[6]
n=(q<<4>>>0)+(o>>>4)-1075
m=new Uint16Array(4)
m[0]=(r[1]<<8>>>0)+r[0]
m[1]=(r[3]<<8>>>0)+r[2]
m[2]=(r[5]<<8>>>0)+r[4]
m[3]=o&15|16
l=new A.ay(!1,m,4)
if(n<0)k=l.di(0,-n)
else k=n>0?l.bx(0,n):l
if(s)return k.bw(0)
return k},
ze(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.E(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.E(d)
d[s]=0}return b+c},
Bn(a,b,c,d){var s,r,q,p,o,n=B.b.K(c,16),m=B.b.aj(c,16),l=16-m,k=B.b.bx(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.b.di(p,l)
r&2&&A.E(d)
d[s+n+1]=(o|q)>>>0
q=B.b.bx((p&k)>>>0,m)}r&2&&A.E(d)
d[n]=q},
Bi(a,b,c,d){var s,r,q,p,o=B.b.K(c,16)
if(B.b.aj(c,16)===0)return A.ze(a,b,o,d)
s=b+o+1
A.Bn(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.E(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
G5(a,b,c,d){var s,r,q,p,o=B.b.K(c,16),n=B.b.aj(c,16),m=16-n,l=B.b.bx(1,n)-1,k=B.b.di(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.b.bx((q&l)>>>0,m)
s&2&&A.E(d)
d[r]=(p|k)>>>0
k=B.b.di(q,n)}s&2&&A.E(d)
d[j]=k},
v_(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
G1(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.E(e)
e[q]=r&65535
r=B.b.ac(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.E(e)
e[q]=r&65535
r=B.b.ac(r,16)}s&2&&A.E(e)
e[b]=r},
lR(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.E(e)
e[q]=r&65535
r=0-(B.b.ac(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.E(e)
e[q]=r&65535
r=0-(B.b.ac(r,16)&1)}},
Bo(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.E(d)
d[e]=p&65535
r=B.b.K(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.E(d)
d[e]=n&65535
r=B.b.K(n,65536)}},
G2(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.b.iq((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
IN(a){return A.jm(a)},
yB(a,b){return new A.k7(new WeakMap(),a,b.i("k7<0>"))},
yC(a){if(A.c0(a)||typeof a=="number"||typeof a=="string"||a instanceof A.er)A.Ew(a)},
Ew(a){throw A.b(A.aI(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
vL(a,b){var s=$.Dx()
s=s==null?null:new s(A.dC(A.Jo(a,b),1))
return new A.m6(s,b.i("m6<0>"))},
ax(a){var s=A.i_(a,null)
if(s!=null)return s
throw A.b(A.a3(a,null,null))},
IB(a){var s=A.Fh(a)
if(s!=null)return s
throw A.b(A.a3("Invalid double",a,null))},
Ev(a,b){a=A.aF(a,new Error())
a.stack=b.k(0)
throw a},
aG(a,b,c,d){var s,r=c?J.Ay(a,d):J.yJ(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
eU(a,b,c){var s,r=A.l([],c.i("B<0>"))
for(s=J.I(a);s.m();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
P(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("B<0>"))
s=A.l([],b.i("B<0>"))
for(r=J.I(a);r.m();)s.push(r.gn())
return s},
dd(a,b){var s=A.eU(a,!1,b)
s.$flags=3
return s},
dl(a,b,c){var s,r,q,p,o
A.b0(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ak(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.AR(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.FB(a,b,c)
if(r)a=J.ys(a,c)
if(b>0)a=J.ne(a,b)
s=A.P(a,t.S)
return A.AR(s)},
FB(a,b,c){var s=a.length
if(b>=s)return""
return A.Fj(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.eS(a,A.yL(a,!1,b,c,!1,""))},
IM(a,b){return a==null?b==null:a===b},
to(a,b,c){var s=J.I(b)
if(!s.m())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.m())}else{a+=A.r(s.gn())
while(s.m())a=a+c+A.r(s.gn())}return a},
z8(){var s,r,q=A.Fc()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.B8
if(s!=null&&q===$.B7)return s
r=A.lu(q)
$.B8=r
$.B7=q
return r},
fL(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.Dy()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.f.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bh(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
GJ(a){var s,r,q
if(!$.Dz())return A.GK(a)
s=new URLSearchParams()
a.a2(0,new A.wW(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.q(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
z1(){return A.a7(new Error())},
yy(a,b,c,d,e,f,g){var s=A.Fk(a,b,c,d,e,f,g,0,!0)
return new A.aN(s==null?new A.p0(a,b,c,d,e,f,g,0).$0():s,0,!0)},
En(){return new A.aN(Date.now(),0,!1)},
p1(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ak(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ak(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aI(b,s,u.B))
A.bL(c,"isUtc",t.y)
return a},
Eo(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Ai(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
k_(a){if(a>=10)return""+a
return"0"+a},
cE(a,b,c){return new A.as(a+1000*b+1e6*c)},
eP(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aI(b,"name","No enum value with that name"))},
hm(a){if(typeof a=="number"||A.c0(a)||a==null)return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
return A.AQ(a)},
Ak(a,b){A.bL(a,"error",t.K)
A.bL(b,"stackTrace",t.l)
A.Ev(a,b)},
jB(a){return new A.jA(a)},
O(a,b){return new A.bC(!1,null,b,a)},
aI(a,b,c){return new A.bC(!0,a,b,c)},
jx(a,b){return a},
aO(a){var s=null
return new A.cL(s,s,!1,s,s,a)},
t_(a,b){return new A.cL(null,null,!0,a,b,"Value not in range")},
ak(a,b,c,d,e){return new A.cL(b,c,!0,a,d,"Invalid value")},
AU(a,b,c,d){if(a<b||a>c)throw A.b(A.ak(a,b,c,d,null))
return a},
Fl(a,b,c,d){return A.Av(a,d,b,null,c)},
b1(a,b,c){if(0>a||a>c)throw A.b(A.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ak(b,a,c,"end",null))
return b}return c},
b0(a,b){if(a<0)throw A.b(A.ak(a,0,null,b,null))
return a},
Au(a,b){var s=b.b
return new A.hx(s,!0,a,null,"Index out of range")},
ke(a,b,c,d,e){return new A.hx(b,!0,a,e,"Index out of range")},
Av(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.ke(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cy(a)},
B5(a){return new A.lo(a)},
w(a){return new A.bk(a)},
aq(a){return new A.jS(a)},
Al(a){return new A.m5(a)},
a3(a,b,c){return new A.b8(a,b,c)},
EJ(a,b,c){var s,r
if(A.zF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.ex.push(a)
try{A.Hx(a,s)}finally{$.ex.pop()}r=A.to(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
q6(a,b,c){var s,r
if(A.zF(a))return b+"..."+c
s=new A.ab(b)
$.ex.push(a)
try{r=s
r.a=A.to(r.a,a,", ")}finally{$.ex.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Hx(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.r(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.r(p))
return}r=A.r(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
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
AG(a,b,c,d,e){return new A.dL(a,b.i("@<0>").T(c).T(d).T(e).i("dL<1,2,3,4>"))},
c8(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a2(a)
b=J.a2(b)
return A.fg(A.an(A.an($.eF(),s),b))}if(B.d===d){s=J.a2(a)
b=J.a2(b)
c=J.a2(c)
return A.fg(A.an(A.an(A.an($.eF(),s),b),c))}if(B.d===e){s=J.a2(a)
b=J.a2(b)
c=J.a2(c)
d=J.a2(d)
return A.fg(A.an(A.an(A.an(A.an($.eF(),s),b),c),d))}if(B.d===f){s=J.a2(a)
b=J.a2(b)
c=J.a2(c)
d=J.a2(d)
e=J.a2(e)
return A.fg(A.an(A.an(A.an(A.an(A.an($.eF(),s),b),c),d),e))}if(B.d===g){s=J.a2(a)
b=J.a2(b)
c=J.a2(c)
d=J.a2(d)
e=J.a2(e)
f=J.a2(f)
return A.fg(A.an(A.an(A.an(A.an(A.an(A.an($.eF(),s),b),c),d),e),f))}s=J.a2(a)
b=J.a2(b)
c=J.a2(c)
d=J.a2(d)
e=J.a2(e)
f=J.a2(f)
g=J.a2(g)
g=A.fg(A.an(A.an(A.an(A.an(A.an(A.an(A.an($.eF(),s),b),c),d),e),f),g))
return g},
qY(a){var s,r=$.eF()
for(s=J.I(a);s.m();)r=A.an(r,J.a2(s.gn()))
return A.fg(r)},
BY(a,b){return 65536+((a&1023)<<10)+(b&1023)},
lu(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.B6(a4<a4?B.a.q(a5,0,a4):a5,5,a3).gmZ()
else if(s===32)return A.B6(B.a.q(a5,5,a4),0,a3).gmZ()}r=A.aG(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Cl(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Cl(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.aa(a5,"\\",n))if(p>0)h=B.a.aa(a5,"\\",p-1)||B.a.aa(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.aa(a5,"..",n)))h=m>n+2&&B.a.aa(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.aa(a5,"file",0)){if(p<=0){if(!B.a.aa(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.q(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.d7(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.aa(a5,"http",0)){if(i&&o+3===n&&B.a.aa(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.d7(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.aa(a5,"https",0)){if(i&&o+4===n&&B.a.aa(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.d7(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bY(a4<a5.length?B.a.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.zn(a5,0,q)
else{if(q===0)A.fK(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.BM(a5,c,p-1):""
a=A.BK(a5,p,o,!1)
i=o+1
if(i<n){a0=A.i_(B.a.q(a5,i,n),a3)
d=A.wS(a0==null?A.v(A.a3("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.BL(a5,n,m,a3,j,a!=null)
a2=m<l?A.wT(a5,m+1,l,a3):a3
return A.j8(j,b,a,d,a1,a2,l<a4?A.BJ(a5,l+1,a4):a3)},
FM(a){return A.zq(a,0,a.length,B.k,!1)},
lt(a,b,c){throw A.b(A.a3("Illegal IPv4 address, "+a,b,c))},
FJ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.lt("each part must be in the range 0..255",a,r)}A.lt("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.lt(k,a,q)}l=p+1
s&2&&A.E(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.lt(k,a,q)
p=l}A.lt("IPv4 address should contain exactly 4 parts",a,q)},
FK(a,b,c){var s
if(b===c)throw A.b(A.a3("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.FL(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.B9(a,b,c)
return!0},
FL(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.b8(o,a,r)
s=r
break}return new A.b8("Unexpected character",a,r-1)}if(s-1===b)return new A.b8(o,a,s)
return new A.b8("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.b8("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.b8("Invalid IPvFuture address character",a,s)}},
B9(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.tS(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.FJ(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.b.ac(n,8)
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
B.e.af(s,b,16,s,c)
B.e.jI(s,c,b,0)}}return s},
j8(a,b,c,d,e,f,g){return new A.j7(a,b,c,d,e,f,g)},
BG(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fK(a,b,c){throw A.b(A.a3(c,a,b))},
GG(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.C(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
wS(a,b){if(a!=null&&a===A.BG(b))return null
return a},
BK(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.fK(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.GH(a,r,s)
if(p<s){o=p+1
q=A.BP(a,B.a.aa(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.FK(a,r,s)
m=B.a.q(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.c1(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.BP(a,B.a.aa(a,"25",o)?s+3:o,c,"%25")}else q=""
A.B9(a,b,s)
return"["+B.a.q(a,b,s)+q+"]"}return A.GM(a,b,c)},
GH(a,b,c){var s=B.a.c1(a,"%",b)
return s>=b&&s<c?s:c},
BP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.ab(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.zo(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.ab("")
m=i.a+=B.a.q(a,r,s)
if(n)o=B.a.q(a,s,s+3)
else if(o==="%")A.fK(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.ab("")
if(r<s){i.a+=B.a.q(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.q(a,r,s)
if(i==null){i=new A.ab("")
n=i}else n=i
n.a+=j
m=A.zm(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.q(a,b,c)
if(r<c){j=B.a.q(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
GM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.zo(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.ab("")
l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.q(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.ab("")
if(r<s){q.a+=B.a.q(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.fK(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.ab("")
m=q}else m=q
m.a+=l
k=A.zm(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.q(a,b,c)
if(r<c){l=B.a.q(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
zn(a,b,c){var s,r,q
if(b===c)return""
if(!A.BI(a.charCodeAt(b)))A.fK(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.fK(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.q(a,b,c)
return A.GF(r?a.toLowerCase():a)},
GF(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
BM(a,b,c){if(a==null)return""
return A.j9(a,b,c,16,!1,!1)},
BL(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.j9(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.GL(s,e,f)},
GL(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.zp(a,!s||c)
return A.eu(a)},
wT(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.j9(a,b,c,256,!0,!1)}if(d==null)return null
return A.GJ(d)},
GK(a){var s={},r=new A.ab("")
s.a=""
a.a2(0,new A.wU(new A.wV(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
BJ(a,b,c){if(a==null)return null
return A.j9(a,b,c,256,!0,!1)},
zo(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.xX(s)
p=A.xX(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bh(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.q(a,b,b+3).toUpperCase()
return null},
zm(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.b.lJ(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dl(s,0,null)},
j9(a,b,c,d,e,f){var s=A.BO(a,b,c,d,e,f)
return s==null?B.a.q(a,b,c):s},
BO(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.zo(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.fK(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.zm(o)}if(p==null){p=new A.ab("")
l=p}else l=p
l.a=(l.a+=B.a.q(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.q(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
BN(a){if(B.a.S(a,"."))return!0
return B.a.c0(a,"/.")!==-1},
eu(a){var s,r,q,p,o,n
if(!A.BN(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.c.J(s,"/")},
zp(a,b){var s,r,q,p,o,n
if(!A.BN(a))return!b?A.BH(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.ga3(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.BH(s[0])
return B.c.J(s,"/")},
BH(a){var s,r,q=a.length
if(q>=2&&A.BI(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.q(a,0,s)+"%3A"+B.a.ag(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
GN(a,b){if(a.vX("package")&&a.c==null)return A.Cn(b,0,b.length)
return-1},
GI(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
zq(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.q(a,b,c)
else p=new A.c4(B.a.q(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.O("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.O("Truncated URI",null))
p.push(A.GI(a,o+1))
o+=2}else p.push(r)}}return d.hw(p)},
BI(a){var s=a|32
return 97<=s&&s<=122},
B6(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a3(k,a,r))}}if(q<0&&r>b)throw A.b(A.a3(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.c.ga3(j)
if(p!==44||r!==n+7||!B.a.aa(a,"base64",n+1))throw A.b(A.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aA.we(a,m,s)
else{l=A.BO(a,m,s,256,!0,!1)
if(l!=null)a=B.a.d7(a,m,s,l)}return new A.tR(a,j,c)},
Cl(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
By(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.Cn(a.a,a.e,a.f)
return-1},
Cn(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
H3(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
v0:function v0(){},
v1:function v1(){},
m6:function m6(a,b){this.a=a
this.$ti=b},
wW:function wW(a){this.a=a},
p0:function p0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a){this.a=a},
vG:function vG(){},
a8:function a8(){},
jA:function jA(a){this.a=a},
cS:function cS(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hx:function hx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cy:function cy(a){this.a=a},
lo:function lo(a){this.a=a},
bk:function bk(a){this.a=a},
jS:function jS(a){this.a=a},
kK:function kK(){},
id:function id(){},
m5:function m5(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(){},
o:function o(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
R:function R(){},
j:function j(){},
mC:function mC(){},
ie:function ie(){this.b=this.a=0},
l0:function l0(a){this.a=a},
l_:function l_(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
ab:function ab(a){this.a=a},
tS:function tS(a){this.a=a},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
wV:function wV(a,b){this.a=a
this.b=b},
wU:function wU(a){this.a=a},
tR:function tR(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
m0:function m0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
k7:function k7(a,b,c){this.a=a
this.b=b
this.$ti=c},
ER(a){return a},
AA(a){return a},
z4(a){return a},
F8(a){return a!=null},
EK(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.BW(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
ED(a){return new v.G.Promise(A.bJ(new A.pw(a)))},
kI:function kI(a){this.a=a},
pw:function pw(a){this.a=a},
pu:function pu(a){this.a=a},
pv:function pv(a){this.a=a},
xn(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.GV,a)
s[$.eD()]=a
return s},
cB(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.GW,a)
s[$.eD()]=a
return s},
bJ(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.GX,a)
s[$.eD()]=a
return s},
mX(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.GY,a)
s[$.eD()]=a
return s},
fQ(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.GZ,a)
s[$.eD()]=a
return s},
zr(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.H_,a)
s[$.eD()]=a
return s},
GV(a){return a.$0()},
GW(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
GX(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
GY(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
GZ(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
H_(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Cb(a){return a==null||A.c0(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
eB(a){if(A.Cb(a))return a
return new A.y1(new A.dt(t.mp)).$1(a)},
n5(a,b){return a[b]},
C5(a,b){return a[b]},
zw(a,b,c){return a[b].apply(a,c)},
In(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.c.F(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a0(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.aC(s,b.i("aC<0>"))
a.then(A.dC(new A.y7(r),1),A.dC(new A.y8(r),1))
return s},
Ca(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
n3(a){if(A.Ca(a))return a
return new A.xE(new A.dt(t.mp)).$1(a)},
y1:function y1(a){this.a=a},
y7:function y7(a){this.a=a},
y8:function y8(a){this.a=a},
xE:function xE(a){this.a=a},
CQ(a,b){return Math.max(a,b)},
AS(){return B.af},
AT(){return $.yn()},
wc:function wc(){},
wd:function wd(a){this.a=a},
E6(a,b,c){return J.zX(a,b,c)},
k5:function k5(){},
Z:function Z(){},
nB:function nB(a){this.a=a},
nC:function nC(a){this.a=a},
nD:function nD(a,b){this.a=a
this.b=b},
nE:function nE(a){this.a=a},
nF:function nF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nG:function nG(a){this.a=a},
k1:function k1(a){this.$ti=a},
hB:function hB(a,b){this.a=a
this.$ti=b},
e1:function e1(a,b){this.a=a
this.$ti=b},
fJ:function fJ(){},
f7:function f7(a,b){this.a=a
this.$ti=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b,c){this.a=a
this.b=b
this.$ti=c},
k0:function k0(){},
AK(){throw A.b(A.Y(u.O))},
FI(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
kH:function kH(){},
lr:function lr(){},
aD(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dl(m,0,null)},
c5:function c5(a){this.a=a},
eM:function eM(){this.a=null},
kb:function kb(){},
pB:function pB(){},
mw(a){var s=new Uint32Array(A.aY(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.mv(s,r,a,q,new Uint32Array(16))},
mu:function mu(){},
wz:function wz(){},
mv:function mv(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
nw:function nw(a,b,c){this.c=a
this.d=b
this.a=c},
E5(){var s=$.zU()
return s},
ny:function ny(a){this.a=a},
h5:function h5(){},
nM:function nM(){},
on:function on(){},
hK:function hK(a){this.a=a},
i8:function i8(){},
qx:function qx(){},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
t4:function t4(){},
i9:function i9(a,b){this.b=a
this.c=b},
l2:function l2(a){this.a=a},
bo(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
Ag(a,b,c){if($.jq()!==B.L)A.v(A.w("BigEndian systems are unsupported"))
return new A.oq(a,c,b)},
jW(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bo(a5[0])
r=A.bo(a5[1])
q=A.bo(a5[2])
p=A.bo(a5[3])
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
g=B.b.aj(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.b.aj(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.b.bx(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bo(s)
a5.$flags&2&&A.E(a5)
a5[0]=k
a5[1]=A.bo(r)
a5[2]=A.bo(q)
a5[3]=A.bo(p)},
Ah(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.e.cD(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.b.K(q,n),!1)
r.setUint32(12,B.b.aj(q,n),!1)
p=J.bB(B.al.ga5(r),0,null)
o=new Uint32Array(4)
A.jW(o,a,b)
A.jW(o,a,p)
return J.bB(B.u.ga5(o),0,null)},
oq:function oq(a,b,c){this.c=a
this.d=b
this.a=c},
oG:function oG(){},
lZ:function lZ(){},
m_:function m_(){},
n0(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.jq()===B.L){a5=A.ey(a5)
a6=A.ey(a6)
a7=A.ey(a7)
a8=A.ey(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.a8[a5>>>24&255]^B.a6[a6>>>16&255]^B.a7[a7>>>8&255]^B.a9[a8&255]^b3[r]
o=B.a8[a6>>>24&255]^B.a6[a7>>>16&255]^B.a7[a8>>>8&255]^B.a9[a5&255]^b3[r+1]
n=B.a8[a7>>>24&255]^B.a6[a8>>>16&255]^B.a7[a5>>>8&255]^B.a9[a6&255]^b3[r+2]
m=B.a8[a8>>>24&255]^B.a6[a5>>>16&255]^B.a7[a6>>>8&255]^B.a9[a7&255]^b3[r+3]
r+=4}o=B.j[a5>>>24&255]
n=B.j[a6>>>16&255]
m=B.j[a7>>>8&255]
l=B.j[a8&255]
k=B.j[a6>>>24&255]
j=B.j[a7>>>16&255]
i=B.j[a8>>>8&255]
h=B.j[a5&255]
g=B.j[a7>>>24&255]
f=B.j[a8>>>16&255]
e=B.j[a5>>>8&255]
d=B.j[a6&255]
c=B.j[a8>>>24&255]
b=B.j[a5>>>16&255]
a=B.j[a6>>>8&255]
a0=B.j[a7&255]
a1=(((o&255)<<24|(n&255)<<16|(m&255)<<8|l&255)^b3[r])>>>0
a2=(((k&255)<<24|(j&255)<<16|(i&255)<<8|h&255)^b3[r+1])>>>0
a3=(((g&255)<<24|(f&255)<<16|(e&255)<<8|d&255)^b3[r+2])>>>0
a4=(((c&255)<<24|(b&255)<<16|(a&255)<<8|a0&255)^b3[r+3])>>>0
if($.jq()===B.L){a1=A.ey(a1)
a2=A.ey(a2)
a3=A.ey(a3)
a4=A.ey(a4)}a9.$flags&2&&A.E(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Cu(a){var s,r,q,p,o,n,m,l,k,j,i=a.gdN(),h=B.cl.h(0,i.gl(0))
if(h==null)throw A.b(A.O("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.zX(B.u.ga5(r),r.byteOffset,i.gl(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.E(q,9)
q.setUint8(m,l);++m}k=i.gl(0)/4|0
if($.jq()===B.L)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.b.aj(m,k)
if(n===0)j=A.Cq((j<<8|j>>>24)>>>0)^B.c0[B.b.iq(m,k)-1]<<24
else if(o&&n===4)j=A.Cq(j)
r[m]=(j^r[m-k])>>>0}return r},
Cq(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
ey(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
or:function or(){},
Em(a){return new A.hi(a)},
hi:function hi(a){this.a=a},
oH:function oH(){},
vv:function vv(){},
kY:function kY(a,b){this.a=a
this.b=b},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
jI:function jI(){},
nt:function nt(){},
Cr(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.kY("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.dM)){s=J.ap(a)
if(B.a.S(s,"TypeError: "))s=B.a.ag(s,11)
a=new A.dM(s,b.b)}return a},
Cf(a,b,c){A.Ak(A.Cr(a,c),b)},
GU(a,b){return new A.cY(new A.xh(a,b),t.fb)},
fS(a,b,c){return A.HJ(a,b,c)},
HJ(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fS=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.p(),$async$fS)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.xo(e)
a1.r=new A.xp(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a0(c.read(),k),$async$fS)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.C(b)
l=A.a7(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Cr(m,a)
k=l
j=a1.b
if(j>=4)A.v(a1.bz())
if((j&1)!==0){j=a1.gaI()
j.aE(d,k==null?B.M:k)}s=15
return A.a(a1.p(),$async$fS)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.ua()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.v(a1.bz())
if((f&1)!==0)a1.gaI().aw(g)}g=a1.b
s=((g&1)!==0?(a1.gaI().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aC(new A.q($.u,j),i):g).a,$async$fS)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fS,r)},
jN:function jN(a){this.b=!1
this.c=a},
nx:function nx(a){this.a=a},
xh:function xh(a,b){this.a=a
this.b=b},
xo:function xo(a){this.a=a},
xp:function xp(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.a=a},
nA:function nA(a){this.a=a},
Ad(a,b){return new A.dM(a,b)},
dM:function dM(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
F3(a,b){var s=t.N,r=A.l([],t.e8),q=$.zK()
if(!q.b.test(a))A.v(A.aI(a,"method","Not a valid method"))
return new A.qS(A.D(s,s),r,a,b,A.hH(new A.jH(),new A.jI(),s,s))},
qS:function qS(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
qT:function qT(a,b){this.a=a
this.b=b},
Fo(a,b){var s=new Uint8Array(0),r=$.zK()
if(!r.b.test(a))A.v(A.aI(a,"method","Not a valid method"))
r=t.N
return new A.t2(s,a,b,A.hH(new A.jH(),new A.jI(),r,r))},
t2:function t2(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
ii:function ii(){},
lf:function lf(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
E7(a){return a.toLowerCase()},
h9:function h9(a,b,c){this.a=a
this.c=b
this.$ti=c},
EW(a){return A.Jn("media type",a,new A.qB(a))},
yQ(a,b,c){var s=t.N
if(c==null)s=A.D(s,s)
else{s=new A.h9(A.Io(),A.D(s,t.gc),t.kj)
s.F(0,c)}return new A.eW(a.toLowerCase(),b.toLowerCase(),new A.cx(s,t.ph))},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(a){this.a=a},
qD:function qD(a){this.a=a},
qC:function qC(){},
ID(a){var s
a.ml($.DJ(),"quoted string")
s=a.gjU().h(0,0)
return A.D1(B.a.q(s,1,s.length-1),$.DI(),new A.xP(),null)},
xP:function xP(){},
aj(a){var s,r=new A.ab("")
A.h2(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
zJ(a){var s,r,q
for(s=new A.l_(a),r=0;s.m();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
H2(a){var s
if(!isFinite(a))return B.t.k(a)
s=B.t.k(a)
if(B.a.bY(s,".0"))s=B.a.q(s,0,s.length-2)
return s==="-0"?"0":s},
h2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.c0(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.aE(b)){r=B.b.k(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.H2(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.t.k(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a7(b,h)
a.a+=r
return A.zJ(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.K(b),p<s.gl(b);++p){if(p>0){a.a+=",";++q}q+=A.h2(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.I(b.gO());s.m();){n=s.gn()
r=J.ap(n)
if(B.c.cS(o,new A.yk(r)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.az(r,n))}B.c.c8(o,new A.yl())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.A)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a7(k.a,h)
a.a+=j
i=A.zJ(j)
a.a+=":"
q=q+i+1+A.h2(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.O("Cannot canonicalize value of type "+J.bq(b).k(0),h))},
yk:function yk(a){this.a=a},
yl:function yl(){},
Fv(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).dT(a)
if(p==null)return B.cz
s=p.b
r=s[1]
r.toString
r=A.ax(r)
q=s[2]
q.toString
q=A.ax(q)
s=s[3]
s=A.i_(s==null?"":s,null)
return new A.es(r,q,s==null?0:s)},
AY(a,b,c){var s,r=A.Fv(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
ec(a,b){return A.Fw(a,b)},
Fw(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ec=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.aX("SELECT sqlite_version() AS v"),$async$ec)
case 3:g=d.T(c.c2(a2),"v")
g.toString
A.M(g)
k=t.x
d=A
c=A
b=J
s=4
return A.a(a.aX("PRAGMA compile_options"),$async$ec)
case 4:j=d.P(new c.bv(b.aL(a2,new A.td(),t.X),k),k.i("o.E"))
n=B.c.cS(j,new A.te())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.H("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$ec)
case 11:s=12
return A.a(a.H("DROP TABLE lp__fts5_probe"),$async$ec)
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
k=a0===B.b1
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.aX("PRAGMA journal_mode"),$async$ec)
case 19:l=a2
if(J.eG(l))m=A.aa(J.c2(J.c2(l).gaP()))
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
case 18:case 14:h=A.AY(g,3,37)
k=k&&J.t(m,"wal")
q=new A.lc(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ec,r)},
kP:function kP(a,b){this.a=a
this.b=b},
lc:function lc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
td:function td(){},
te:function te(){},
ha:function ha(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
aV:function aV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a1:function a1(a,b){this.a=a
this.b=b},
nJ:function nJ(a,b){this.a=a
this.b=b},
nK:function nK(){},
nL:function nL(){},
A2(a){return new Uint8Array(A.aY(a))},
pe:function pe(){},
nf:function nf(a,b,c){this.b=a
this.c=b
this.d=c},
zC(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.bS
if(r===B.E){r=a.f
r.toString
r=!B.c.C(r,b)}else r=!1
if(r)return B.bY
return s
case 1:case 4:return!A.aE(b)?B.bT:s
case 2:return typeof b!="number"?B.bU:s
case 3:return!A.c0(b)?B.bV:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.bW:s
case 7:return!t.j.b(b)?B.bX:s}},
dD(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gdR(),h=t.N,g=t.X,f=A.n(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.C_(n,a0.h(0,l),new Uint8Array(A.aY(B.f.v(q+l+"\x00"+e))),m))}k=A.D(h,g)
for(h=new A.aB(a0,A.m(a0).i("aB<1,2>")).gt(0);h.m();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.C(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.aj(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
CJ(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.C_(b,c,new Uint8Array(A.aY(B.f.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
cj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.n(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.aa(b.h(0,"id"))
f.j(0,n,A.H4(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.t(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.aA(k,null)
if(t.f.b(j))f.F(0,A.b_(j,h,g))}return f},
CE(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.I(b);s.m();)r.push(A.cj(a,s.gn(),c,d))
return r},
H4(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.w('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.ig("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bq(b).k(0)+"."))
r=B.k.hw(s.uq(B.bi.v(b),new Uint8Array(A.aY(B.f.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.a3===q||B.a5===q){p=A.ax(r)
break A}if(B.a4===q){p=A.IB(r)
break A}if(B.O===q||B.P===q){p=B.h.aA(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.t(b,1)
if(p===B.O||p===B.P){if(typeof b!="string")throw A.b(A.ig("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bq(b).k(0)+"."))
return B.h.aA(b,o)}return b},
C_(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.w('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.t(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.ap(b)
break
case 6:case 7:s=A.aj(b)
break
default:A.M(b)
s=b}r=d.v4(B.f.v(s),c)
return B.aA.gjE().v(r)}switch(a.b.a){case 3:return J.t(b,!0)?1:0
case 6:case 7:return A.aj(b)
default:return b}},
b6(a,b){var s,r,q,p,o,n="archived",m=a.gdR(),l=b.h(0,"id"),k=A.n(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.A)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.t(o,!0):o)}for(l=b.gaK(),l=l.gt(l);l.m();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.C(0,p))continue
k.j(0,p,s.b)}if(J.t(b.h(0,n),!0))k.j(0,n,!0)
return k},
Cx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=b.gdR(),h=A.l([],t.iE)
h.push(new A.az("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)h.push(new A.az(o,p.b===B.B?J.t(n,!0):n))}for(s=new A.aB(c,A.m(c).i("aB<1,2>")).gt(0);s.m();){m=s.d
r=m.a
if(r==="id"||r==="archived"||i.C(0,r))continue
h.push(new A.az(r,m.b))}if(J.t(c.h(0,"archived"),!0))h.push(B.cy)
B.c.c8(h,new A.xy())
a.a+="{"
for(s=h.length,l=1,k=!0,q=0;q<h.length;h.length===s||(0,A.A)(h),++q,k=!1){r=h[q]
if(!k){a.a+=",";++l}j=B.h.a7(r.a,null)
a.a+=j
o=A.zJ(j)
a.a+=":"
l=l+o+1+A.h2(a,r.b)}a.a+="}"
return l+1},
cG:function cG(a,b){this.a=a
this.b=b},
xy:function xy(){},
xN(a2,a3,a4,a5){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$xN=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)A:switch(s){case 0:a0=a4.b
a1=a4.r
if(a0==="explain")a1="EXPLAIN QUERY PLAN "+a1
if(a0==="query"&&a5===0){q=A.n(["items",A.l([],t.d),"lastRow",null,"firstRow",null,"hasNext",!1],t.N,t.X)
s=1
break}s=3
return A.a(a3.$2(a1,a4.w),$async$xN)
case 3:p=a7
switch(a0){case"query":a0=a5==null
o=!a0&&J.ao(p)>a5
n=a0?p:J.ys(p,a5).ea(0)
m=A.CE(a2.ae(a4.d).a,n,a2.y,a2.z)
l=a4.y
if(l==null)k=m
else{a0=A.l([],t.d)
for(j=m.length,i=l.$ti,h=i.i("ae<F.E>"),i=i.i("F.E"),g=t.N,f=t.X,e=0;e<m.length;m.length===j||(0,A.A)(m),++e){d=m[e]
c=A.D(g,f)
for(b=new A.ae(l,l.gl(0),h);b.m();){a=b.d
if(a==null)a=i.a(a)
if(d.G(a))c.j(0,a,d.h(0,a))}a0.push(c)}k=a0}a0=m.length!==0?B.c.ga3(m):null
q=A.n(["items",k,"lastRow",a0,"firstRow",m.length!==0?B.c.gD(m):null,"hasNext",o],t.N,t.X)
s=1
break A
case"count":case"countDistinct":a0=A.fX(p)
q=A.n(["value",a0==null?0:a0],t.N,t.X)
s=1
break A
case"distinct":a0=[]
for(j=J.I(p);j.m();){i=j.gn()
if(i.gW(i))a0.push(J.c2(i.gaP()))}q=A.n(["values",a0],t.N,t.X)
s=1
break A
case"ids":a0=A.l([],t.s)
for(j=J.I(p);j.m();){i=j.gn().h(0,"id")
i.toString
a0.push(A.M(i))}q=A.n(["ids",a0],t.N,t.X)
s=1
break A
case"explain":a0=t.X
q=A.n(["plan",J.aL(p,new A.xO(),a0).J(0,"\n")],t.N,a0)
s=1
break A
case"sum":case"avg":case"min":case"max":a0=J.K(p)
q=A.n(["value",a0.gA(p)?null:J.T(a0.gD(p),"v")],t.N,t.X)
s=1
break A
case"search":a0=A.l([],t.d)
for(j=J.I(p),i=t.N,h=t.X;j.m();){g=j.gn()
f=g.h(0,"id")
f.toString
a0.push(A.n(["id",A.M(f),"score",g.h(0,"score")],i,h))}q=A.n(["results",a0],i,h)
s=1
break A
default:throw A.b(A.w("Unsupported compiled operation: "+a0))}case 1:return A.e(q,r)}})
return A.f($async$xN,r)},
xO:function xO(){},
Aj(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
jT:function jT(a,b){this.a=a
this.b=b},
k2:function k2(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
pb:function pb(){},
pa:function pa(){},
pc:function pc(){},
p9:function p9(a){this.a=a},
Eq(a){return'"'+A.z(a,'"','""')+'"'},
Ep(a,b){var s,r,q,p=a.a,o=J.K(p),n=b.a,m=J.K(n)
if(o.gl(p)>=m.gl(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gl(p);++q)if(!J.t(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
nZ:function nZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hk:function hk(a){this.a=a},
p8:function p8(a){this.a=a},
p7:function p7(){},
p6:function p6(a){this.a=a},
p5:function p5(a,b){this.a=a
this.b=b},
p2:function p2(a){this.a=a},
p3:function p3(a){this.a=a},
p4:function p4(){},
aJ(a,b){return new A.io(a)},
ig(a){return new A.cQ(a)},
yZ(a){return new A.i4(a)},
bj(a){return new A.f6(a)},
As(a){return new A.ht(a)},
Af(a){return new A.he(a)},
yz(a){return new A.eL(a)},
D5(a,b){var s,r="UNIQUE constraint failed",q=J.ap(a),p=a instanceof A.cP,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.C(q,"PRIMARY KEY")&&!B.a.C(q,r)
else p=!0
if(p)return new A.hZ("PRIMARY KEY constraint violated.")
if(o===2067||B.a.C(q,r)){s=A.C3(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.il('Unique constraint violated on "'+s+'".')}if(o===1299||B.a.C(q,"NOT NULL constraint failed")){p=A.C3(q,"NOT NULL constraint failed:")
return new A.hT('NOT NULL constraint violated on "'+p+'".')}if(B.a.C(q,"CHECK constraint failed")||o===275||n===275)return new A.hc("CHECK constraint violated.")
if(B.a.C(q,"FOREIGN KEY")||o===787||n===787)return new A.hs("FOREIGN KEY constraint violated.")
if(B.a.C(q,"database or disk is full"))return new A.cQ("Database full: "+A.r(a))
return new A.cQ("SQLite error: "+A.r(a))},
C3(a,b){var s,r,q,p,o,n,m=B.a.c0(a,b)
if(m<0)return"?"
s=B.a.ag(a,m+b.length)
r=s.length
q=B.a.c0(s,",")
if(q>=0)r=q
p=B.a.c0(s,"(")
s=B.a.dc(B.a.q(s,0,p>=0&&p<r?p:r))
o=B.a.d1(s,".")
s=B.a.dc(o>=0?B.a.ag(s,o+1):s)
if(B.a.S(s,'"')&&B.a.bY(s,'"')){n=B.a.q(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
eV:function eV(){},
io:function io(a){this.a=a},
il:function il(a){this.a=a},
hT:function hT(a){this.a=a},
hc:function hc(a){this.a=a},
hZ:function hZ(a){this.a=a},
hs:function hs(a){this.a=a},
cQ:function cQ(a){this.a=a},
i4:function i4(a){this.a=a},
i6:function i6(a){this.a=a},
f6:function f6(a){this.a=a},
ht:function ht(a){this.a=a},
he:function he(a){this.a=a},
eL:function eL(a){this.a=a},
t1:function t1(){},
J8(a,b,c){a.uh(!0,new A.yc(c),"lp_norm_"+b)},
CM(a,b,c,d){var s,r,q='""',p=b.a
if(p.gA(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
yc:function yc(a){this.a=a},
H7(){return Date.now()},
mW(a){var s,r,q
if(t.G.b(a)){s=A.D(t.N,t.X)
for(r=a.gaK(),r=r.gt(r);r.m();){q=r.gn()
s.j(0,q.a,A.mW(q.b))}return s}if(t.f.b(a)){s=A.D(t.z,t.X)
for(r=a.gaK(),r=r.gt(r);r.m();){q=r.gn()
s.j(0,q.a,A.mW(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.I(a);r.m();)s.push(A.mW(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.aY(a))
return a},
cH(a,b,c,d,e,f,g,h){var s=null,r=B.A,q=null,p=null
return A.EV(a,b,c,d,e,f,g,h)},
EV(a7,a8,a9,b0,b1,b2,b3,b4){var s=0,r=A.h(t.kM),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cH=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:a0=null
a1=B.A
a2=null
a3=null
a4=null
a4=a8
p=4
s=7
return A.a(A.cp(a4,b3),$async$cH)
case 7:s=8
return A.a(A.ec(a4,b3),$async$cH)
case 8:n=b6
i=0
case 9:if(!(i<3)){s=11
break}m=B.c6[i]
s=12
return A.a(a4.H(m),$async$cH)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.ck[i]
s=16
return A.a(a4.H(l),$async$cH)
case 16:case 14:++i
s=13
break
case 15:h=a4
g=a2
if(g==null)g=A.IY()
f=t.N
e=t.ls
d=new A.kN()
c=new A.ks(b2,h,n,d,b1,a9,a3,a7,b0,a0,g,A.D(f,t.nv),new A.tJ(A.D(f,e),A.D(e,t.nL)),a1,new A.nJ(A.ed(null,null,t.iv),A.ed(null,null,t.oZ)))
c.d=new A.uI(A.c6(null,t.H),d.gwA())
d=$.yn()
c.as=new A.r4(c,d)
c.at=new A.r_(c,d)
c.ax=new A.oc(c)
c.ay=new A.qh(c,a7)
k=c
s=17
return A.a(A.ku(a4,k.Q),$async$cH)
case 17:h=b4.length,i=0
case 18:if(!(i<b4.length)){s=20
break}j=b4[i]
s=21
return A.a(k.b8(j),$async$cH)
case 21:case 19:b4.length===h||(0,A.A)(b4),++i
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
return A.a(a4.p(),$async$cH)
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
return A.f($async$cH,r)},
cp(a,b){return A.EU(a,b)},
EU(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cp=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.b1?2:3
break
case 2:q=5
s=8
return A.a(a.H("PRAGMA journal_mode=WAL"),$async$cp)
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
return A.a(a.H("PRAGMA wal_autocheckpoint=0"),$async$cp)
case 9:s=10
return A.a(a.H("PRAGMA mmap_size=67108864"),$async$cp)
case 10:case 3:s=11
return A.a(a.H("PRAGMA synchronous=NORMAL"),$async$cp)
case 11:s=12
return A.a(a.H("PRAGMA foreign_keys=ON"),$async$cp)
case 12:s=13
return A.a(a.H("PRAGMA busy_timeout=5000"),$async$cp)
case 13:s=14
return A.a(a.H("PRAGMA cache_size=-8000"),$async$cp)
case 14:s=15
return A.a(a.H("PRAGMA temp_store=MEMORY"),$async$cp)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cp,r)},
ku(a,b){var s=0,r=A.h(t.H),q,p
var $async$ku=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.e3("lp_migrations","version = ?",[1]),$async$ku)
case 3:if(p.eG(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.n(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$ku)
case 4:case 1:return A.e(q,r)}})
return A.f($async$ku,r)},
k3:function k3(a,b){this.a=a
this.b=b},
ld:function ld(a,b){this.a=a
this.d=b},
rw:function rw(a){this.a=a},
ks:function ks(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ay=_.ax=_.at=_.as=$
_.ch=l
_.CW=!1
_.cx=m
_.cy="NORMAL"
_.dx=n
_.dy=null
_.fr=0
_.a$=o},
qr:function qr(a,b){this.a=a
this.b=b},
qw:function qw(a){this.a=a},
qs:function qs(a){this.a=a},
qv:function qv(a){this.a=a},
qu:function qu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qt:function qt(){},
qq:function qq(a){this.a=a},
qp:function qp(){},
lW:function lW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
vp:function vp(a,b){this.a=a
this.b=b},
vo:function vo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vm:function vm(a,b){this.a=a
this.b=b},
vn:function vn(a,b){this.a=a
this.b=b},
vl:function vl(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
mg:function mg(){},
eX(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$eX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.b
h=b.x
g=A.a6(h).i("b2<1>")
f=A.P(new A.b2(h,new A.qP(c,b),g),g.i("o.E"))
B.c.c8(f,new A.qQ())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.Q,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.bj('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.ie()
$.jr()
j.av()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aH(a,b,m),$async$eX)
case 8:s=6
break
case 7:s=9
return A.a(A.ky(a,b,m),$async$eX)
case 9:case 6:if(j.b==null)j.b=$.kS.$0()
s=10
return A.a(A.eY(i,j.gmh(),o,q+l,p,l),$async$eX)
case 10:case 3:f.length===h||(0,A.A)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.bj('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.n(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$eX)
case 11:return A.e(null,r)}})
return A.f($async$eX,r)},
eY(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$eY=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.aX("SELECT MAX(version) AS m FROM lp_migrations"),$async$eY)
case 2:q=p.fX(h)
if(q==null)q=0
s=3
return A.a(a.aC(0,"lp_migrations",A.n(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$eY)
case 3:return A.e(null,r)}})
return A.f($async$eY,r)},
ky(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$ky=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.b
k=b.a
j=t.x
h=A
g=A
f=J
s=2
return A.a(l.aX("PRAGMA table_info("+('"'+A.z(k,'"','""')+'"')+")"),$async$ky)
case 2:i=h.e_(new g.bv(f.aL(e,new A.qM(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.zM()
if(!m.b.test(n))A.v(A.bj('Field "'+n+u.Z))
if(o.c)throw A.b(A.bj('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.C(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.H("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.gkw()),$async$ky)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.A)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$ky,r)},
aH(a,b,c){return A.F_(a,b,c)},
F_(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aH=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.b
if(!b0.r)throw A.b(A.yz('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.hk(b0.c).ju(b1)
j=A.F2(b0.a,a2,a3)
p=4
s=7
return A.a(A.qN(a7,l),$async$aH)
case 7:i=b4
s=8
return A.a(b0.hq(j),$async$aH)
case 8:h=b4
if(J.t(i,"done")&&h){a3=A.yz('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.kA(a7,m),$async$aH)
case 9:g=b4
s=10
return A.a(A.kA(a7,n),$async$aH)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.aX("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aH)
case 13:a0=a9.fX(b4)
e=a0==null?0:a0
a3=A.z(m,'"','""')
s=14
return A.a(a7.H("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aH)
case 14:s=15
return A.a(A.cJ(b0,a7,b1,k,l,e),$async$aH)
case 15:s=1
break
case 12:s=16
return A.a(a7.H("DROP TABLE IF EXISTS "+('"'+A.z(m,'"','""')+'"')),$async$aH)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.hx(j),$async$aH)
case 19:case 18:s=20
return A.a(A.kz(a7,l,"rebuilding"),$async$aH)
case 20:s=21
return A.a(a7.H("VACUUM INTO '"+A.z(j,"'","''")+"'"),$async$aH)
case 21:a3=k.b
a4=A.z(n,'"','""')
d=B.a.mP(a3,'"'+a4+'"','"'+A.z(m,'"','""')+'"')
s=22
return A.a(a7.H(d),$async$aH)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ai("SELECT rowid, * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aH)
case 25:b=b4
if(J.bO(b)){s=24
break}s=26
return A.a(a7.Z(new A.qO(b,b1,b0,b2,m),a3),$async$aH)
case 26:a4=J.T(J.nd(b),"rowid")
a4.toString
c=A.ah(a4)
if(J.ao(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.aX("SELECT COUNT(*) c FROM "+('"'+A.z(n,'"','""')+'"')),$async$aH)
case 27:a5=a9.fX(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.aX("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aH)
case 28:e=a9.fX(b4)
a0=e==null?0:e
if(!J.t(a,a0)){a3=A.w('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.H("DROP TABLE "+('"'+A.z(n,'"','""')+'"')),$async$aH)
case 29:a3=A.z(m,'"','""')
s=30
return A.a(a7.H("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aH)
case 30:s=31
return A.a(A.cJ(b0,a7,b1,k,l,a),$async$aH)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.C(a8)
if(a3 instanceof A.eL)throw a8
else if(a3 instanceof A.cP){a1=a3
throw A.b(A.yz('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aH,r)},
cJ(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l
var $async$cJ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.H(q[o]),$async$cJ)
case 5:case 3:q.length===p||(0,A.A)(q),++o
s=2
break
case 4:q=c.w!=null
s=q?6:7
break
case 6:s=8
return A.a(b.H("DROP TABLE IF EXISTS "+('"'+A.z(c.a+"_fts",'"','""')+'"')),$async$cJ)
case 8:case 7:p=d.d,n=p.length,o=0
case 9:if(!(o<p.length)){s=11
break}s=12
return A.a(b.H(p[o]),$async$cJ)
case 12:case 10:p.length===n||(0,A.A)(p),++o
s=9
break
case 11:s=q?13:14
break
case 13:q=c.a+"_fts"
p=A.z(q,'"','""')
s=15
return A.a(b.H("INSERT INTO "+('"'+p+'"')+"("+('"'+A.z(q,'"','""')+'"')+") VALUES('rebuild')"),$async$cJ)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.aX("SELECT COUNT(*) c FROM "+('"'+A.z(q,'"','""')+'"')),$async$cJ)
case 16:m=l.fX(h)
if((m==null?0:m)!==f)throw A.b(A.w('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.kz(b,e,"done"),$async$cJ)
case 17:return A.e(null,r)}})
return A.f($async$cJ,r)},
kA(a,b){var s=0,r=A.h(t.y),q,p
var $async$kA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ai("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$kA)
case 3:q=p.eG(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kA,r)},
F2(a,b,c){var s=null,r=$.h3(),q=r.uw(a),p=A.di(a,r.a).gjr()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mz(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
F1(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.aJ('Field "'+s+'" is required.',s))}if(b==null)return
r=A.zC(a,b)
if(r!=null)throw A.b(A.aJ(A.EZ(a,b,r),a.a))},
F0(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
A.F1(p,b.h(0,p.a))}},
EZ(a,b,c){var s,r=a.a,q=J.bq(b)
switch(c.a){case 0:s='Field "'+r+'" must be a string, got '+q.k(0)+"."
break
case 1:s='Field "'+r+'" must be an integer, got '+q.k(0)+"."
break
case 2:s='Field "'+r+'" must be a number, got '+q.k(0)+"."
break
case 3:s='Field "'+r+'" must be a boolean, got '+q.k(0)+"."
break
case 4:s='Field "'+r+'" must be JSON, got '+q.k(0)+"."
break
case 5:s='Field "'+r+'" must be a JSON array, got '+q.k(0)+"."
break
case 6:s='Field "'+r+'" has unknown enum value "'+A.r(b)+'".'
break
default:s=null}return s},
qN(a,b){var s=0,r=A.h(t.v),q,p,o
var $async$qN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.mI("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$qN)
case 3:p=d
o=J.K(p)
q=o.gA(p)?null:A.aa(J.T(o.gD(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qN,r)},
kz(a,b,c){var s=0,r=A.h(t.H)
var $async$kz=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.c2(0,"lp_meta",A.n(["k",b,"v",c],t.N,t.X),B.N),$async$kz)
case 2:return A.e(null,r)}})
return A.f($async$kz,r)},
H8(){return Date.now()},
qP:function qP(a,b){this.a=a
this.b=b},
qQ:function qQ(){},
qM:function qM(){},
qO:function qO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kN:function kN(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
rZ:function rZ(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e},
jg(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.eV)throw q
else{s=r
r=A.ig("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
Am(a){return A.jg(new A.pf(a))},
EI(a){return A.jg(new A.pY(a))},
EB(a){return A.jg(new A.pr(a))},
Ar(a,b){var s
if(new A.l0(a).gl(0)!==1)throw A.b(A.bj('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.bj('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
EA(a){return A.jg(new A.pq(a))},
Ez(a,b){var s,r
if(a.gl(a)!==b.gl(b))return!1
for(s=a.gaK(),s=s.gt(s);s.m();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
FA(a){return A.jg(new A.th(a))},
yv(a,b){return A.jg(new A.nP(a,b))},
I2(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.cn.h(0,s)
return b},
bR:function bR(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pf:function pf(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(a){this.a=a},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
pr:function pr(a){this.a=a},
dV:function dV(a){this.a=a},
pq:function pq(a){this.a=a},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
th:function th(a){this.a=a},
qR:function qR(a,b){this.a=a
this.b=b},
oa:function oa(){},
bQ:function bQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
nP:function nP(a,b){this.a=a
this.b=b},
Ee(a,b){var s,r=a.a
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
s='Field "'+r+'" must be one of '+B.c.J(s,", ")+"."
break
default:s=null}return s},
dg:function dg(a,b){this.a=a
this.b=b},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nW:function nW(a,b){this.a=a
this.b=b},
nY:function nY(a,b){this.a=a
this.b=b},
nU:function nU(a,b,c){this.a=a
this.b=b
this.c=c},
nT:function nT(a,b){this.a=a
this.b=b},
nX:function nX(a,b){this.a=a
this.b=b},
nV:function nV(a,b){this.a=a
this.b=b},
nS:function nS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nR:function nR(){},
nQ:function nQ(){},
lV:function lV(){},
B3(a,b,c,d){return new A.bu(a,b,c,d,new A.wy())},
ln(a){var s=$.u.h(0,$.n9())
if(s instanceof A.bu&&s.a===a)return s
return null},
bu:function bu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
tG:function tG(a,b,c){this.a=a
this.b=b
this.c=c},
wy:function wy(){this.a=0
this.b=null},
Ir(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.I(a);s.m();){r=new A.ab("")
A.h2(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}B.c.aT(o)
p=B.c.J(o,"|")
b.$1(p.length)
return A.aD(B.l.v(B.f.v(p)).a)},
hV:function hV(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
qZ:function qZ(a){this.a=a},
c3:function c3(){},
uI:function uI(a,b){this.a=a
this.b=0
this.c=b},
uJ:function uJ(a,b,c){this.a=a
this.b=b
this.c=c},
jM(a){var s=$.zL()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
A7(a){return new A.eI(a)},
A8(a,b){return new A.jL(a,b)},
jn(a,b,c,d,e){return A.J7(a,b,c,d,e)},
J7(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$jn=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.fq(A.mw(new A.my(new A.y6(g),A.l([],h),t.mI)))
e=0
h=new A.bZ(A.bL(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.m(),$async$jn)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.q)){j=new A.q($.u,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$jn)
case 9:f.a.u(0,m)
e+=J.ao(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.B(),$async$jn)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.t(e,c))throw A.b(A.w("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.aD(B.c.gau(g).a)
A.jM(i)
if(b!=null&&i!==b)throw A.b(A.w("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.le(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$jn,r)},
nv:function nv(){},
eI:function eI(a){this.a=a},
jL:function jL(a,b){this.a=a
this.b=b},
le:function le(a){this.a=a},
y6:function y6(a){this.a=a},
hp:function hp(a){this.d=a},
ph:function ph(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pj:function pj(a,b){this.a=a
this.b=b},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(a,b,c){this.a=a
this.b=b
this.c=c},
pl:function pl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pm:function pm(){},
An(a){return A.n6("lp_file_refs",new A.pg(a))},
b7:function b7(a,b,c,d,e,f,g,h,i,j){var _=this
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
pg:function pg(a){this.a=a},
qh:function qh(a,b){this.a=a
this.b=b},
qi:function qi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qk:function qk(a){this.a=a},
ql:function ql(a){this.a=a},
qm:function qm(a){this.a=a},
qn:function qn(a){this.a=a},
qo:function qo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qj:function qj(a,b){this.a=a
this.b=b},
Ba(a){var s
if(t.m.b(a))s=J.t(a.name,"NotFoundError")||J.t(a.name,"TypeMismatchError")
else s=!1
return s},
u6:function u6(a){this.b=a
this.d=null},
u7:function u7(a){this.a=a},
mj:function mj(a){this.a=a},
B1(a){var s=Date.now()
return new A.lm(a,new A.aN(s,0,!1))},
lm:function lm(a,b){this.a=a
this.c=b},
nr:function nr(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
kQ:function kQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=e
_.z=_.y=$
_.Q=null
_.ax=_.at=_.as=!1
_.ay=f
_.ch=g
_.CW=h},
ru:function ru(a,b){this.a=a
this.b=b},
rv:function rv(){},
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(a){this.a=a},
rh:function rh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ri:function ri(){},
rj:function rj(a,b){this.a=a
this.b=b},
rk:function rk(){},
rf:function rf(a,b){this.a=a
this.b=b},
rg:function rg(){},
Fa(a){return 0.5+B.af.mD()},
Fb(a,b,c){return new A.rt(a,b,c)},
hY:function hY(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
rm:function rm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(){},
rq:function rq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rn:function rn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ro:function ro(){},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
wF:function wF(a,b){this.a=a
this.b=null
this.c=b},
hw(a,b){return new A.d7(a)},
dW:function dW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a){this.a=a},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
ng:function ng(a){this.a=a},
nh:function nh(a,b){this.a=a
this.b=b},
ni:function ni(a){this.a=a},
nj:function nj(){},
yw(a){return A.n6("lp_conflicts",new A.ob(a))},
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
ob:function ob(a){this.a=a},
oc:function oc(a){this.a=a},
oh:function oh(a,b,c){this.a=a
this.b=b
this.c=c},
og:function og(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oe:function oe(a,b){this.a=a
this.b=b},
of:function of(a,b){this.a=a
this.b=b},
od:function od(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
li:function li(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
tC:function tC(a){this.a=a},
tu:function tu(a){this.a=a},
tA:function tA(a,b){this.a=a
this.b=b},
tz:function tz(a){this.a=a},
ty:function ty(a,b){this.a=a
this.b=b},
tB:function tB(a){this.a=a},
tv:function tv(a,b){this.a=a
this.b=b},
tw:function tw(){},
tx:function tx(){},
e2(a){return new A.cI(a)},
zI(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.eC(a,b)
r=A.b6(a,s)
q=A.aj(r)
p=A.aD(B.l.v(B.f.v(q)).a)
return new A.e6(b,s,q,p,k)}catch(m){l=A.C(m)
if(l instanceof A.cI){o=l
return new A.e6(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.e6(b,k,k,k,l)}}},
J2(a,b){var s,r=A.l([],t.i7)
for(s=J.I(b);s.m();)r.push(A.zI(a,s.gn()))
return r},
zH(a,b){var s=0,r=A.h(t.eT),q
var $async$zH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.J2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$zH,r)},
eC(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.b_(b.d,j,i),g=a.gdR(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.t(f,s))throw A.b(A.e2('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.c0(r))throw A.b(A.e2('Field "archived" must be a boolean, got '+J.bq(r).k(0)+"."))
q=A.n(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.A)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.e2('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.zC(o,n)
if(m!=null)throw A.b(A.e2(A.HL(o,n,m)))
q.j(0,s,n)}for(j=new A.aB(h,A.m(h).i("aB<1,2>")).gt(0);j.m();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.C(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.t(r,!0))
return q},
HL(a,b,c){var s,r=a.a,q=J.bq(b)
switch(c.a){case 0:s='Field "'+r+'" must be a string, got '+q.k(0)+"."
break
case 1:s='Field "'+r+'" must be an integer, got '+q.k(0)+"."
break
case 2:s='Field "'+r+'" must be a number, got '+q.k(0)+"."
break
case 3:s='Field "'+r+'" must be a boolean, got '+q.k(0)+"."
break
case 4:s='Field "'+r+'" must be JSON, got '+q.k(0)+"."
break
case 5:s='Field "'+r+'" must be a JSON array, got '+q.k(0)+"."
break
case 6:s='Field "'+r+'" has unknown enum value "'+A.r(b)+'".'
break
default:s=null}return s},
h_(a){var s,r,q,p
if(a==null||a.length===0)return B.z
s=null
try{s=B.h.aA(a,null)}catch(q){r=A.C(q)
p=A.e2("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.e2("Corrupt payload JSON: expected an object, got "+J.bq(s).k(0)+"."))
return A.b_(s,t.N,t.X)},
cI:function cI(a){this.a=a},
e6:function e6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bx(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aS(i),g=A.e_(a.gO(),i)
g.F(0,b.gO())
for(g=A.fA(g,g.r,A.m(g).c),s=g.$ti.c,r=t.f,q=t.X;g.m();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.n.Y(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.jv(o.gO(),new A.xB())&&J.jv(n.gO(),new A.xC())){m=A.bx(A.b_(o,i,q),A.b_(n,i,q))
for(l=A.m(m),k=new A.dv(m,m.r,l.i("dv<1>")),k.c=m.e,p+=".",l=l.c;k.m();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
EX(a,b,c,d,e,f,g){return new A.qE()},
HG(a,b){var s,r,q=a.b
if(q.gA(q))return null
for(s=b;;){q.h(0,s)
r=B.a.d1(s,".")
if(r<=0)return null
s=B.a.q(s,0,r)}},
yR(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$yR=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.EY(B.bv,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yR,r)},
EY(a,b,c,d,e,f,g){var s,r,q,p=A.bx(b,c),o=A.bx(b,f)
A.EX(b,p,o,c,e,f,g)
s=t.N
r=A.e_(c.gO(),s)
r.F(0,new A.U(f,A.m(f).i("U<1>")))
r.F(0,b.gO())
q=A.P(r,A.m(r).c)
return A.qK(a,b,p,o,0,q,c,A.D(s,t.X),d,e,f,new A.wt(),g)},
qK(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.de(h,a0.a,null)
s=f[e]
r=g.h(0,s)
q=k.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.t(p,!0)
n=J.t(r,!0)
m=J.t(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{i.b.h(0,s)
h.j(0,s,m)}return A.qK(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.AH(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.q)return l.aO(new A.qL(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.qK(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
AH(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.n.Y(a1,a4))return a1
if(B.n.Y(a1,a0))return a4
if(B.n.Y(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.jv(a1.gO(),new A.qF()))if(J.jv(a4.gO(),new A.qG()))if(a0!=null)r=s.b(a0)&&J.jv(a0.gO(),new A.qH())
else r=!0
if(r){r=t.N
q=t.X
p=A.b_(a1,r,q)
o=A.b_(a4,r,q)
n=a0==null?null:A.b_(s.a(a0),r,q)
s=A.aS(r)
m=n==null
l=m?null:new A.U(n,A.m(n).i("U<1>"))
if(l!=null)s.F(0,l)
s.F(0,new A.U(p,A.m(p).i("U<1>")))
s.F(0,new A.U(o,A.m(o).i("U<1>")))
k=A.D(r,q)
j=[]
for(r=s.$ti.c,l=A.fA(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.m();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.AH(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.q)g=!0
j.push(d)}if(!g){for(s=A.fA(s,s.r,r),r=s.$ti.c,c=0;s.m();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.yG(new A.a_(j,new A.qI(),A.a6(j).i("a_<1,y<j?>>")),q).aO(new A.qJ(s,k),q)}A.HG(a3,a2)
return a4},
CR(a,b,c,d,e,f){return A.yR(a,b,c,d,e,f)},
xB:function xB(){},
xC:function xC(){},
qE:function qE(){},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a,b,c){this.a=a
this.b=b
this.c=c},
wt:function wt(){this.a=!1},
wr:function wr(){},
uN:function uN(){},
qL:function qL(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qF:function qF(){},
qG:function qG(){},
qH:function qH(){},
qI:function qI(){},
qJ:function qJ(a,b){this.a=a
this.b=b},
r_:function r_(a,b){this.a=a
this.b=b},
r1:function r1(a){this.a=a},
r2:function r2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(){},
i3:function i3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r4:function r4(a,b){this.a=a
this.b=b},
rb:function rb(a,b){this.a=a
this.b=b},
r9:function r9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r8:function r8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
r7:function r7(a,b,c){this.a=a
this.b=b
this.c=c},
ra:function ra(a){this.a=a},
dH:function dH(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.b=a
this.f=b},
rI:function rI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rQ:function rQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rP:function rP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rK:function rK(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rL:function rL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rR:function rR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
rT:function rT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rY:function rY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rW:function rW(a,b,c){this.a=a
this.b=b
this.c=c},
rV:function rV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rU:function rU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rS:function rS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rX:function rX(a,b,c,d,e,f,g,h,i,j){var _=this
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
bV:function bV(a,b){this.a=a
this.b=b},
b9:function b9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ff:function ff(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fe:function fe(a,b){this.a=a
this.b=b},
tr:function tr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ts:function ts(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B2(a){return new A.fh(a)},
E2(a){return new A.bP(a)},
Ey(a){return new A.cn(a)},
F7(a){return new A.cq(a)},
bi(a){return new A.f3(a)},
IG(a){var s=a.x_(),r=new A.xR()
return A.r(r.$2(A.yW(s),4))+"-"+A.r(r.$1(A.yU(s)))+"-"+A.r(r.$1(A.rz(s)))+" "+A.r(r.$1(A.yS(s)))+":"+A.r(r.$1(A.yT(s)))+":"+A.r(r.$1(A.yV(s)))+"."+A.r(r.$2(A.AP(s),3))+"Z"},
bm:function bm(){},
fh:function fh(a){this.a=a},
ea:function ea(a,b){this.b=a
this.a=b},
ia:function ia(a){this.a=a},
bP:function bP(a){this.a=a},
cn:function cn(a){this.a=a},
cq:function cq(a){this.a=a},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
eN:function eN(a){this.a=a},
dI:function dI(a){this.a=a},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i2:function i2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jC:function jC(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
xR:function xR(){},
FD(a){return 0.5+B.af.mD()},
z5(a){var s,r=a.toLowerCase()
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
FE(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).dT(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.z5(r)
if(q==null)return k
r=s[3]
r.toString
r=A.ax(r)
p=s[1]
p.toString
p=A.ax(p)
o=s[4]
o.toString
o=A.ax(o)
n=s[5]
n.toString
n=A.ax(n)
s=s[6]
s.toString
return A.z6(r,q,p,o,n,A.ax(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).dT(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.z5(r)
if(q==null)return k
r=s[3]
r.toString
m=A.ax(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.ax(r)
p=s[4]
p.toString
p=A.ax(p)
o=s[5]
o.toString
o=A.ax(o)
s=s[6]
s.toString
return A.z6(l,q,r,p,o,A.ax(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).dT(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.z5(r)
if(q==null)return k
r=s[6]
r.toString
r=A.ax(r)
p=s[2]
p.toString
p=A.ax(p)
o=s[3]
o.toString
o=A.ax(o)
n=s[4]
n.toString
n=A.ax(n)
s=s[5]
s.toString
return A.z6(r,q,p,o,n,A.ax(s))}return k},
z6(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.yy(a,b,c,d,e,f,0)
return s}catch(r){return null}},
tt:function tt(a,b){this.at=a
this.ay=b},
i1:function i1(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
tE:function tE(a,b){this.a=a
this.b=b},
Im(a,b,c,d,e,f,g,h,i,j){var s,r=A.CT(a,b,c,null,d,e,f,g,h,i,j),q=A.D(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.aT[s],r[s])
return q},
CT(a,b,c,d,e,f,g,h,i,j,k){var s=[]
s.push(j)
s.push(i)
s.push(f.b)
s.push(h)
s.push(b)
s.push(a)
s.push(e)
s.push(g)
s.push(c)
s.push(k)
s.push(d)
return s},
CZ(a){return new A.a_(a,new A.yb(),A.a6(a).i("a_<1,k>")).J(0,", ")},
lj(a){return A.n6("lp_sync_row",new A.tD(a))},
r5(a){return A.n6("lp_outbox",new A.r6(a))},
F9(a){return A.n6("lp_op_queue",new A.r0(a))},
jo(a,b){var s=0,r=A.h(t.gi),q,p,o,n,m,l,k,j,i,h
var $async$jo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aS(n)
l=A.P(b,A.m(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.c.J(A.aG(k,"?",!1,n),", ")
k=a.ai("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$jo)
case 3:j.F(0,i.aL(h.a(d),new A.y9(),n))
k=A.P(l,n)
k.push("pending")
k.push("failed")
k=a.ai("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$jo)
case 4:j.F(0,i.aL(h.a(d),new A.ya(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jo,r)},
h1(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$h1=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.e4("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$h1)
case 5:s=p.bO(o.a(f))?2:4
break
case 2:q=a.aC(0,"lp_blobs",A.n(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$h1)
case 6:s=3
break
case 4:q=a.aB("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$h1)
case 7:case 3:return A.e(null,r)}})
return A.f($async$h1,r)},
xH(a,b){var s=0,r=A.h(t.H),q,p
var $async$xH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aB(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$xH)
case 3:case 1:return A.e(q,r)}})
return A.f($async$xH,r)},
ck(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$ck=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.mI("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$ck)
case 2:m=l.I(k.a(f))
case 3:if(!m.m()){s=4
break}q=m.gn()
p=a.a6("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$ck)
case 5:o=A.aa(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.xH(a,o),$async$ck)
case 8:case 7:s=3
break
case 4:m=a.a6("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$ck)
case 9:m=t.N
m=a.L("lp_op_queue",A.n(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$ck)
case 10:s=d?11:12
break
case 11:m=a.a6("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$ck)
case 13:n=a.a6("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$ck)
case 14:case 12:return A.e(null,r)}})
return A.f($async$ck,r)},
cu:function cu(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
yb:function yb(){},
ct:function ct(a,b,c,d,e,f,g,h,i,j){var _=this
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
tD:function tD(a){this.a=a},
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
r6:function r6(a){this.a=a},
e7:function e7(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
r0:function r0(a){this.a=a},
y9:function y9(){},
ya:function ya(){},
tJ:function tJ(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.a=g
_.b=h
_.d=_.c=null
_.f=_.e=!1
_.r=null},
o_:function o_(a){this.a=a},
ES(a){var s,r,q
try{s=A.n3(a)
if(t.f.b(s)){r=A.fV(s)
return r}}catch(q){}return null},
ET(a){if(a instanceof A.ir)return A.eB(new A.ly(3,a.a,a.b,null).am())
t.bp.a(a)
return A.yP(a.a,a.b,a.c,a.d)},
yP(a,b,c,d){return A.eB(new A.ly(3,a,null,new A.u8(b,c,d)).am())},
jf(a){return A.HE(a)},
HE(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$jf=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.h0()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a0(f.getDirectory(),k),$async$jf)
case 7:n=c
j=$.h3()
i=A.P(j.dj(0,"drift_db"),t.N)
m=i
J.zV(m,j.dj(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ao(l)===0){s=9
break}s=11
return A.a(A.a0(n.getDirectoryHandle(l,{create:!1}),k),$async$jf)
case 11:n=c
case 9:m.length===j||(0,A.A)(m),++h
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
return A.f($async$jf,r)},
mY(a,b){return A.HF(a,b)},
HF(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$mY=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.jf(a),$async$mY)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a0(m.getFileHandle(A.di(b,$.h3().a).gjr(),{create:!1}),t.m),$async$mY)
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
return A.f($async$mY,r)},
mZ(a,b){return A.HM(a,b)},
HM(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$mZ=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.jf(a),$async$mZ)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.yE(m,A.di(b,$.h3().a).gjr()),$async$mZ)
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
return A.f($async$mZ,r)},
qe:function qe(){},
qf:function qf(a){this.a=a},
qg:function qg(a){this.a=a},
kt:function kt(a,b){this.a=a
this.d=b},
lX:function lX(a){this.a=a},
bM(a){var s,r,q
if(a instanceof A.aN)return A.n(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.ay){s=t.N
return A.n(["lp:bigint",a.k(0)],s,s)}if(t.p.b(a))return A.n(["lp:bytes",A.dd(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aL(a,A.CA(),s)
r=A.P(r,r.$ti.i("V.E"))
return A.dd(r,s)}if(t.f.b(a)){q=A.D(t.N,t.X)
a.a2(0,new A.xM(q))
return q}if(a==null||A.c0(a)||A.aE(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.bq(a).k(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
n4(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gl(a)===1&&a.G(l)){s=a.h(0,l)
if(A.aE(s)){r=B.b.aj(s,1000)
q=B.b.K(s-r,1000)
if(q<-864e13||q>864e13)A.v(A.ak(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.v(A.aI(r,"microsecond",u.B))
A.bL(!0,"isUtc",t.y)
return new A.aN(q,r,!0)}throw A.b(A.O("Malformed wire DateTime: "+A.r(s),k))}if(a.gl(a)===1&&a.G(j)){s=a.h(0,j)
if(typeof s=="string")return A.zf(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.r(s),k))}if(a.gl(a)===1&&a.G(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.K(s)
q=r.gl(s)
p=new Uint8Array(q)
for(o=0;o<r.gl(s);++o){n=r.h(s,o)
if(!A.aE(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.r(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.r(s),k))}m=A.D(t.N,t.X)
a.a2(0,new A.xG(m))
return m}if(t.j.b(a)){r=t.X
q=J.aL(a,A.Cz(),r)
q=A.P(q,q.$ti.i("V.E"))
return A.dd(q,r)}return a},
xM:function xM(a){this.a=a},
xG:function xG(a){this.a=a},
jl(a,b,c,d,e){return A.IR(a,b,c,d,e,e)},
IR(a,b,c,d,e,f){var s=0,r=A.h(f),q,p=2,o=[],n,m,l
var $async$jl=A.c(function(g,h){if(g===1){o.push(h)
s=p}for(;;)switch(s){case 0:p=4
d.$0()
c.$0()
s=7
return A.a(b.$0(),$async$jl)
case 7:n=h
q=n
s=1
break
p=2
s=6
break
case 4:p=3
l=o.pop()
s=8
return A.a(a.$0(),$async$jl)
case 8:throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$jl,r)},
HZ(){return new A.aN(Date.now(),0,!1)},
cz:function cz(a,b,c,d,e,f,g,h,i,j){var _=this
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
tN:function tN(a,b){this.f=a
this.r=b},
tQ:function tQ(){},
tO:function tO(a){this.a=a},
tP:function tP(){},
J4(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.D(t.N,t.X)
try{if(t.f.b(a)){s=A.fV(a)
r=A.D(t.N,t.X)
q=t.j
if(q.b(J.T(s,n))){p=J.T(s,n)
p.toString
p=J.aL(q.a(p),new A.y4(),t.bU)
q=A.P(p,p.$ti.i("V.E"))
J.bN(r,n,q)}if(A.aE(J.T(s,m)))J.bN(r,m,J.T(s,m))
if(A.c0(J.T(s,l)))J.bN(r,l,J.T(s,l))
return r}}catch(o){}return A.D(t.N,t.X)},
D_(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fV(a).h(0,b)
return s}}catch(r){}return null},
IL(a,b){if(b!=null)return!1
return B.c.cS(a,new A.xW())},
y4:function y4(){},
xW:function xW(){},
xV:function xV(){},
Jc(a){if(a instanceof A.eV){if(a instanceof A.io)return"ValidationException"
if(a instanceof A.il)return"UniqueConstraintException"
if(a instanceof A.hT)return"NotNullConstraintException"
if(a instanceof A.hc)return"CheckConstraintException"
if(a instanceof A.hZ)return"PrimaryKeyConstraintException"
if(a instanceof A.hs)return"ForeignKeyConstraintException"
if(a instanceof A.cQ)return"StorageError"
if(a instanceof A.i4)return"RecordNotFoundException"
if(a instanceof A.i6)return"SchemaTooNewError"
if(a instanceof A.ht)return"FtsUnavailableError"
if(a instanceof A.f6)return"SchemaRegistrationError"
if(a instanceof A.he)return"ConflictBlockedError"
if(a instanceof A.eL)return"DestructiveMigrationRefusedError"
if(a instanceof A.t1)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bm){if(a instanceof A.fh)return"TransientNetworkError"
if(a instanceof A.ea)return"ServerBusyError"
if(a instanceof A.ia)return"ServerError"
if(a instanceof A.bP)return"AuthError"
if(a instanceof A.cn)return"ForbiddenError"
if(a instanceof A.cq)return"NotFoundError"
if(a instanceof A.f2)return"PayloadError"
if(a instanceof A.f3)return"ProtocolError"
if(a instanceof A.eN)return"DuplicateIdError"
if(a instanceof A.dI)return"BatchFailedError"
return"SyncError"}if(a instanceof A.i0)return"ProtocolEnvelopeException"
if(a instanceof A.hj)return"DatabaseWorkerClosedException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bk)return"StateError"
if(a instanceof A.bC)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
FO(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.aE(s))throw A.b(A.c9('Request "v" must be an int.'))
if(!A.aE(r)||r<0)throw A.b(A.c9('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.cD.C(0,q))throw A.b(A.c9("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.c9('Request "a" must be a map.'))
return new A.fn(s,r,q,p.c6(0,new A.ub(),t.N,t.X))},
c9(a){return new A.i0(a)},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ub:function ub(){},
ly:function ly(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u8:function u8(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a){this.a=a},
i0:function i0(a){this.a=a},
kX:function kX(a,b){this.a=a
this.b=b},
Bb(a){return A.bn(A.by(a).a,null)},
Bc(a){return A.bn(J.bq(a).a,null)},
W:function W(a){this.a=a},
J5(a){if(!t.f.b(a))throw A.b(A.a3("Schema must be a map: "+A.r(a),null,null))
return A.yv(A.fV(a),t.X)},
fV(a){var s=A.D(t.N,t.X)
a.a2(0,new A.xJ(s))
return s},
FQ(a){var s,r=A.D(t.N,t.X)
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
Bd(a){var s,r=A.D(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.bM(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.bM(s))
return r},
fo:function fo(){},
ir:function ir(a,b){this.b=a
this.a=b},
eg:function eg(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
xJ:function xJ(a){this.a=a},
xI:function xI(){},
lC:function lC(){},
uk:function uk(a){this.a=a},
ul:function ul(a){this.a=a},
ui:function ui(){},
uj:function uj(){},
uh:function uh(a,b,c,d,e){var _=this
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
um:function um(a){this.a=a},
lA:function lA(){},
ue:function ue(a,b,c){this.a=a
this.b=b
this.c=c},
ud:function ud(a){this.a=a},
lB:function lB(){},
uf:function uf(a,b,c){this.a=a
this.b=b
this.c=c},
ug:function ug(){},
lE:function lE(){},
un:function un(a){this.a=a},
uo:function uo(a){this.a=a},
lF:function lF(){},
x1:function x1(a,b){this.a=a
this.b=b},
lG:function lG(){},
ut:function ut(a){this.a=a},
uu:function uu(a,b){this.a=a
this.b=b},
wP:function wP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lH:function lH(){},
uv:function uv(){},
uw:function uw(){},
ux:function ux(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fp:function fp(a){this.a=a},
lI:function lI(){},
uE:function uE(a,b,c){this.a=a
this.b=b
this.c=c},
uF:function uF(a){this.a=a},
uH:function uH(a,b,c){this.a=a
this.b=b
this.c=c},
uG:function uG(a,b,c){this.a=a
this.b=b
this.c=c},
uz:function uz(a){this.a=a},
uD:function uD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uy:function uy(a,b,c){this.a=a
this.b=b
this.c=c},
uC:function uC(a,b,c){this.a=a
this.b=b
this.c=c},
uB:function uB(a,b,c){this.a=a
this.b=b
this.c=c},
uA:function uA(a,b,c){this.a=a
this.b=b
this.c=c},
mK:function mK(){},
mL:function mL(){},
mM:function mM(){},
mN:function mN(){},
mO:function mO(){},
mP:function mP(){},
mQ:function mQ(){},
Cd(a){return a},
Cs(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.ab("")
o=a+"("
p.a=o
n=A.a6(b)
m=n.i("ce<1>")
l=new A.ce(b,0,s,m)
l.ir(b,0,s,n.c)
m=o+new A.a_(l,new A.xu(),m.i("a_<V.E,k>")).J(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.k(0),null))}},
oj:function oj(a){this.a=a},
ok:function ok(){},
ol:function ol(){},
xu:function xu(){},
q5:function q5(){},
di(a,b){var s,r,q,p,o,n=b.nF(a),m=b.cr(a)
if(n!=null)a=B.a.ag(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.c3(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.c3(a.charCodeAt(o))){r.push(B.a.q(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ag(a,p))
q.push("")}return new A.kL(b,n,m,r,q)},
kL:function kL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
AM(a){return new A.kM(a)},
kM:function kM(a){this.a=a},
FC(){var s,r,q,p,o,n,m,l,k=null
if(A.z8().gaS()!=="file")return $.js()
if(!B.a.bY(A.z8().gbl(),"/"))return $.js()
s=A.BM(k,0,0)
r=A.BK(k,0,0,!1)
q=A.wT(k,0,0,k)
p=A.BJ(k,0,0)
o=A.wS(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.BL("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.zp(l,m)
else l=A.eu(l)
if(A.j8("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kd()==="a\\b")return $.n8()
return $.Di()},
tq:function tq(){},
rx:function rx(a,b,c){this.d=a
this.e=b
this.f=c},
tT:function tT(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
uc:function uc(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
yD(a,b){if(b<0)A.v(A.aO("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.v(A.aO("Offset "+b+u.D+a.gl(0)+"."))
return new A.ka(a,b)},
t9:function t9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ka:function ka(a,b){this.a=a
this.b=b},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
EF(a,b){var s=A.EG(A.l([A.Gc(a,!0)],t.pg)),r=new A.pW(b).$0(),q=B.b.k(B.c.ga3(s).b+1),p=A.EH(s)?0:3,o=A.a6(s)
return new A.pC(s,r,null,1+Math.max(q.length,p),new A.a_(s,new A.pE(),o.i("a_<1,i>")).wJ(0,B.bh),!A.IU(new A.a_(s,new A.pF(),o.i("a_<1,j?>"))),new A.ab(""))},
EH(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.t(r.c,q.c))return!1}return!0},
EG(a){var s,r,q=A.IK(a,new A.pH(),t.nf,t.K)
for(s=A.m(q),r=new A.aR(q,q.r,q.e,s.i("aR<2>"));r.m();)J.A0(r.d,new A.pI())
s=s.i("aB<1,2>")
r=s.i("ho<o.E,ci>")
s=A.P(new A.ho(new A.aB(q,s),new A.pJ(),r),r.i("o.E"))
return s},
Gc(a,b){var s=new A.w4(a).$0()
return new A.be(s,!0,null)},
Ge(a){var s,r,q,p,o,n,m=a.gaH()
if(!B.a.C(m,"\r\n"))return a
s=a.gM().gaq()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gN()
p=a.ga0()
o=a.gM().gad()
p=A.l7(s,a.gM().gao(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gb6()
return A.ta(r,p,o,A.z(n,"\r\n","\n"))},
Gf(a){var s,r,q,p,o,n,m
if(!B.a.bY(a.gb6(),"\n"))return a
if(B.a.bY(a.gaH(),"\n\n"))return a
s=B.a.q(a.gb6(),0,a.gb6().length-1)
r=a.gaH()
q=a.gN()
p=a.gM()
if(B.a.bY(a.gaH(),"\n")){o=A.xQ(a.gb6(),a.gaH(),a.gN().gao())
o.toString
o=o+a.gN().gao()+a.gl(a)===a.gb6().length}else o=!1
if(o){r=B.a.q(a.gaH(),0,a.gaH().length-1)
if(r.length===0)p=q
else{o=a.gM().gaq()
n=a.ga0()
m=a.gM().gad()
p=A.l7(o-1,A.Bt(s),m-1,n)
q=a.gN().gaq()===a.gM().gaq()?p:a.gN()}}return A.ta(q,p,r,s)},
Gd(a){var s,r,q,p,o
if(a.gM().gao()!==0)return a
if(a.gM().gad()===a.gN().gad())return a
s=B.a.q(a.gaH(),0,a.gaH().length-1)
r=a.gN()
q=a.gM().gaq()
p=a.ga0()
o=a.gM().gad()
p=A.l7(q-1,s.length-B.a.d1(s,"\n")-1,o-1,p)
return A.ta(r,p,s,B.a.bY(a.gb6(),"\n")?B.a.q(a.gb6(),0,a.gb6().length-1):a.gb6())},
Bt(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.hR(a,"\n",s-2)-1
else return s-B.a.d1(a,"\n")-1},
pC:function pC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pW:function pW(a){this.a=a},
pE:function pE(){},
pD:function pD(){},
pF:function pF(){},
pH:function pH(){},
pI:function pI(){},
pJ:function pJ(){},
pG:function pG(a){this.a=a},
pX:function pX(){},
pK:function pK(a){this.a=a},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a,b){this.a=a
this.b=b},
pT:function pT(a){this.a=a},
pU:function pU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pP:function pP(a,b){this.a=a
this.b=b},
pQ:function pQ(a,b){this.a=a
this.b=b},
pL:function pL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
w4:function w4(a){this.a=a},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l7(a,b,c,d){if(a<0)A.v(A.aO("Offset may not be negative, was "+a+"."))
else if(c<0)A.v(A.aO("Line may not be negative, was "+c+"."))
else if(b<0)A.v(A.aO("Column may not be negative, was "+b+"."))
return new A.cc(d,a,c,b)},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l8:function l8(){},
la:function la(){},
Fu(a,b,c){return new A.f9(c,a,b)},
lb:function lb(){},
f9:function f9(a,b,c){this.c=a
this.a=b
this.b=c},
fa:function fa(){},
ta(a,b,c,d){var s=new A.cO(d,a,b,c)
s.og(a,b,c)
if(!B.a.C(d,c))A.v(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.xQ(d,c,a.gao())==null)A.v(A.O('The span text "'+c+'" must start at column '+(a.gao()+1)+' in a line within "'+d+'".',null))
return s},
cO:function cO(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Fy(a){var s
A:{if(18===a){s=B.cE
break A}if(23===a){s=B.cF
break A}if(9===a){s=B.cG
break A}s=null
break A}return s},
ic:function ic(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
Fx(a,b,c,d,e,f,g){return new A.cP(d,b,c,e,f,a,g)},
cP:function cP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tf:function tf(){},
jw:function jw(a){this.a=a},
Hc(a,b,c){var s,r,q,p,o,n=new A.lx(c,A.aG(c.b,null,!1,t.X))
try{A.C1(a,b.$1(n))}catch(r){s=A.C(r)
q=B.f.v(A.hm(s))
p=a.a
o=p.cn(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
C1(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.aE(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Bg(b).k(0)))
break A}if(b instanceof A.ay){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.A6(b).k(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.c0(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Bg(b?1:0).k(0)))
break A}if(typeof b=="string"){r=B.f.v(b)
q=a.a
p=q.cn(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cn(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.ao(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.C1(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.v(A.aI(b,"result","Unsupported type"))}return s},
oJ:function oJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
oS:function oS(a){this.a=a},
oR:function oR(a){this.a=a},
oT:function oT(a){this.a=a},
oP:function oP(a){this.a=a},
oO:function oO(a){this.a=a},
oQ:function oQ(a){this.a=a},
oL:function oL(a){this.a=a},
oK:function oK(a){this.a=a},
oM:function oM(a){this.a=a},
oU:function oU(a){this.a=a},
oN:function oN(a,b){this.a=a
this.b=b},
lx:function lx(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
wI:function wI(a,b){this.a=a
this.b=b},
wJ:function wJ(a,b,c){this.a=a
this.b=b
this.c=c},
wK:function wK(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(){},
fb:function fb(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
yI(a,b){var s=$.n7()
return new A.kd(A.D(t.N,t.a_),s,a)},
kd:function kd(a,b,c){this.d=a
this.b=b
this.a=c},
m9:function m9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
J6(a){var s=J.DZ(new v.G.URL(a,"file:///").pathname,"/")
return new A.b2(s,new A.y5(),A.a6(s).i("b2<1>"))},
y5:function y5(){},
oo:function oo(){},
kZ:function kZ(a,b,c){this.d=a
this.a=b
this.c=c},
bT:function bT(a,b){this.a=a
this.b=b},
ws:function ws(a){this.a=a
this.b=-1},
mp:function mp(){},
mq:function mq(){},
ms:function ms(){},
mt:function mt(){},
r3:function r3(a,b){this.a=a
this.b=b},
Fm(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bv(r,"step")}return s},
dP:function dP(){},
dX:function dX(a){this.a=a},
jV:function jV(a){this.a=a},
fk(a){return new A.cU(a)},
A4(a,b){var s,r,q,p
if(b==null)b=$.n7()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cs(256)
r&2&&A.E(a)
a[q]=p}},
cU:function cU(a){this.a=a},
ib:function ib(a){this.a=a},
aW:function aW(){},
jK:function jK(){},
jJ:function jJ(){},
Ja(a,b){var s=null,r=new A.e0(t.kk)
return A.yg(a,new A.is(s,s,s,s,s,s,s,s,new A.ye(new A.yd(r,A.xn(new A.yf(r)))),s,s,s,s),s,b)},
eh:function eh(a){var _=this
_.d=a
_.c=_.b=_.a=null},
yf:function yf(a){this.a=a},
yd:function yd(a,b){this.a=a
this.b=b},
ye:function ye(a){this.a=a},
u3:function u3(a){this.a=a},
tZ:function tZ(a,b,c){this.a=a
this.b=b
this.c=c},
u5:function u5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u4:function u4(a,b,c){this.b=a
this.c=b
this.d=c},
dn:function dn(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
bK(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.C(r)
if(q instanceof A.cU){s=q
return s.a}else return 1}},
jX:function jX(a){this.b=this.a=$
this.d=a},
ov:function ov(a,b,c){this.a=a
this.b=b
this.c=c},
os:function os(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ox:function ox(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oB:function oB(a,b){this.a=a
this.b=b},
ou:function ou(a){this.a=a},
oA:function oA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oF:function oF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oD:function oD(a,b){this.a=a
this.b=b},
oC:function oC(a,b){this.a=a
this.b=b},
ow:function ow(a,b,c){this.a=a
this.b=b
this.c=c},
oy:function oy(a,b){this.a=a
this.b=b},
oE:function oE(a,b){this.a=a
this.b=b},
ot:function ot(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a,b){this.a=a
this.$ti=b},
nk:function nk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nm:function nm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nl:function nl(a,b,c){this.a=a
this.b=b
this.c=c},
cm(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.o2(r,a,b),!1,q)
A.bc(a,"error",new A.o3(r,a),!1,q)
return s},
Ei(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.o7(r,a,b),!1,q)
A.bc(a,"error",new A.o8(r,a),!1,q)
A.bc(a,"blocked",new A.o9(r),!1,q)
return s},
el:function el(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
vx:function vx(a,b){this.a=a
this.b=b},
vy:function vy(a,b){this.a=a
this.b=b},
o2:function o2(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function o3(a,b){this.a=a
this.b=b},
o7:function o7(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function o8(a,b){this.a=a
this.b=b},
o9:function o9(a){this.a=a},
h0(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
Ap(a,b,c){var s=a.read(b,c)
return s},
Aq(a,b,c){var s=a.write(b,c)
return s},
yE(a,b){return A.a0(a.removeEntry(b,{recursive:!1}),t.X)},
Ao(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.v(A.O("Target object does not implement the async iterable interface",null))
return new A.ep(new A.pn(),new A.h7(a,s),s.i("ep<a4.T,L>"))},
pn:function pn(){},
u_:function u_(a){this.a=a},
u0:function u0(a){this.a=a},
u2(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$u2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a0(p.fetch(new p.URL(a,A.b5(p.location).href),null),t.m),$async$u2)
case 3:q=o.u1(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$u2,r)},
u1(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$u1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.jX(A.D(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.u_(p).hT(a),$async$u1)
case 3:q=new o.fl(new n.u3(m.FN(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$u1,r)},
fl:function fl(a){this.a=a},
Gg(a){var s=new A.iL(a,new A.ag(new A.q($.u,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.ol(a)
return s},
kf(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$kf=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.nn(a)
n=A.yI("dart-memory",null)
m=$.n7()
l=new A.d9(o,n,new A.e0(t.p3),A.aS(p),A.D(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.hW(),$async$kf)
case 3:s=4
return A.a(l.es(),$async$kf)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kf,r)},
nn:function nn(a){this.a=null
this.b=a},
nq:function nq(a){this.a=a},
np:function np(a,b,c){this.a=a
this.b=b
this.c=c},
no:function no(a){this.a=a},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
w7:function w7(a){this.a=a},
w8:function w8(a){this.a=a},
w6:function w6(a){this.a=a},
w9:function w9(a,b,c){this.a=a
this.b=b
this.c=c},
wb:function wb(a,b){this.a=a
this.b=b},
wa:function wa(a,b){this.a=a
this.b=b},
vJ:function vJ(a,b,c){this.a=a
this.b=b
this.c=c},
vK:function vK(a,b){this.a=a
this.b=b},
mi:function mi(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
q_:function q_(a,b,c){this.a=a
this.b=b
this.c=c},
q0:function q0(){},
pZ:function pZ(a,b){this.a=a
this.b=b},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
w5:function w5(a,b){this.a=a
this.b=b},
aX:function aX(){},
iJ:function iJ(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
iD:function iD(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
ft:function ft(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
fM:function fM(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
AW(a){var s=A.yI("dart-memory",null),r=$.n7()
return new A.f8(s,r,a)},
l3(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$l3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.h0()
if(j==null)throw A.b(A.fk(1))
p=t.m
s=3
return A.a(A.a0(j.getDirectory(),p),$async$l3)
case 3:o=d
n=A.J6(a),m=J.I(n.a),n=new A.dp(m,n.b,n.$ti.i("dp<1>")),l=null
case 4:if(!n.m()){s=6
break}s=7
return A.a(A.a0(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$l3)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.az(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$l3,r)},
l4(a){var s=0,r=A.h(t.m),q
var $async$l4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.l3(a,!0),$async$l4)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$l4,r)},
t7(a,b){var s=0,r=A.h(t.g_),q,p
var $async$t7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.h0()==null)throw A.b(A.fk(1))
p=A
s=3
return A.a(A.l4(a),$async$t7)
case 3:q=p.t6(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$t7,r)},
t6(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$t6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.AW(c)
s=3
return A.a(p.cu(a,!1),$async$t6)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$t6,r)},
eQ:function eQ(a,b,c){this.c=a
this.a=b
this.b=c},
f8:function f8(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
t8:function t8(a,b){this.a=a
this.b=b},
mz:function mz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
wo:function wo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FN(a,b){var s=A.b5(a.exports.memory)
b.b!==$&&A.D3()
b.b=s
s=new A.tU(s,b,a.exports)
s.oh(a,b)
return s},
lJ(a,b){var s,r=A.bH(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dq(a,b,c){var s=a.buffer
return B.k.hw(A.bH(s,b,c==null?A.lJ(a,b):c))},
z9(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.hw(A.bH(s,b,c==null?A.lJ(a,b):c))},
Be(a,b,c){var s=new Uint8Array(c)
B.e.cD(s,0,A.bH(a.buffer,b,c))
return s},
tU:function tU(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
tV:function tV(a){this.a=a},
tW:function tW(a){this.a=a},
tX:function tX(a){this.a=a},
tY:function tY(a){this.a=a},
xD(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$xD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.jt()
s=l!=null?3:5
break
case 3:p=A.HI()
s=6
return A.a(A.iq(l,p,null,null,!1),$async$xD)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.az({port:m.port1,lockName:p},new A.hf(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xD,r)},
HI(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bh(97+$.DK().cs(26))
return r.charCodeAt(0)==0?r:r},
E8(a){return new A.hb(a)},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
rC:function rC(){},
rG:function rG(a){this.a=a},
rH:function rH(a){this.a=a},
rF:function rF(a){this.a=a},
rE:function rE(a){this.a=a},
rD:function rD(a){this.a=a},
hb:function hb(a){this.a=a},
oI:function oI(){},
jU:function jU(a){this.a=a},
op:function op(a){this.a=a},
ef:function ef(){},
k9(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$k9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.l4(a),$async$k9)
case 3:p=e
o=A.AW(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cu(p,!0),$async$k9)
case 6:case 5:q=new A.k8(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k9,r)},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
pA:function pA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
iq(a,b,c,d,e){var s,r,q={},p=new A.q($.u,t.nI),o=new A.ag(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.yF(A.a0(a.request(b,s,A.cB(new A.u9(q,o))),r),new A.ua(q,d,o),r,t.K)
return p},
u9:function u9(a,b){this.a=a
this.b=b},
ua:function ua(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.a=a},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
oW:function oW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oV:function oV(a,b){this.a=a
this.b=b},
oX:function oX(a){this.a=a},
hN:function hN(a){this.a=!1
this.b=a},
qW:function qW(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qU:function qU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ef(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.k.b(n)?n:new A.bD(n,A.a6(n).i("bD<1,k>"))
for(s=J.K(m),r=0;r<s.gl(m)/2;++r){q=r*2
o.push(new A.az(A.eP(B.cj,s.h(m,q)),s.h(m,q+1)))}s=A.fO(a.b)
q=A.fO(a.c)
p=A.fO(a.d)
return new A.dQ(o,s,q,A.fO(a.g),p)},
dQ:function dQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Fp(a){var s
if(J.t(a.t,"errorResponse")){s=A.Es(a)
if(s!=null&&s instanceof A.d2)return s
else return new A.f5(a.e)}else return new A.f5("Did not respond with expected type, got "+A.r(a))},
Es(a){var s=a.s,r=s==null?null:A.ah(s)
A:{if(0===r){s=A.Et(t.c.a(a.r))
break A}if(1===r){s=B.ae
break A}s=null
break A}return s},
Et(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.w("Pattern matching error"))
n=new A.pd()
l=A.ah(A.ev(l))
A.M(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.dR(i,h,A.bH(h,0,o))}else p=o
n=n.$1(k)
A.BV(g)
return new A.cP(s,r,l,g==null?o:A.ah(g),n,q,p)},
Eu(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.FG(l)
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
Fq(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.pA(a2,512,"transfer" in a2)
a5.m5(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Fm(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.pk(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.ap}else g=B.aq
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.ar
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.lJ(r,f)
f=new Uint8Array(e,f,d)
c=new A.cZ(!1).cH(f,0,a,!0)
i=c
g=B.as
break
case 4:i=s.ky(j)
g=B.at
break
case 5:default:i=a
g=B.au}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.lJ(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.cZ(!1).cH(a0,0,a,!0)}return A.CS(!1,b,0,0,a1,a,a3.wX(0))},
IV(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
pd:function pd(){},
CS(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
fW(a){var s,r,q,p,o=v.G,n=new o.Array()
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
IA(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
kx:function kx(a,b,c){this.a=a
this.b=b
this.$ti=c},
t3:function t3(){},
Ex(a){var s,r
for(s=0;s<5;++s){r=B.c8[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
FF(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.au
break A}q=A.aE(a)
p=q?a:j
if(q){s=p
r=B.ap
break A}q=a instanceof A.ay
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.k(0))
r=B.aq
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.ar
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.as
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.at
break A}q=A.c0(a)
k=q?a:j
if(q){s=k
r=B.bb
break A}throw A.b(A.O("Unsupported value: "+A.r(a),j))}return new A.az(r,s)},
FG(a){var s,r,q,p,o,n
if(a instanceof A.dR)return new A.az(a.a,a.b)
s=[]
r=J.K(a)
q=r.gl(a)
p=new Uint8Array(q)
for(o=0;o<r.gl(a);++o){n=A.FF(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.az(s,t.a.a(B.e.ga5(p)))},
d5:function d5(a,b,c){this.c=a
this.a=b
this.b=c},
cg:function cg(a,b){this.a=a
this.b=b},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
n1(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$n1=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.b5(i.indexedDB)
i=$.jt()
i=i==null?null:A.iq(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bd(i,t.b3),$async$n1)
case 3:l=b
p=5
s=8
return A.a(A.Eh(m.open("drift_mock_db"),t.m),$async$n1)
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
if(i!=null)i.a.ap()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$n1,r)},
xz(a){return A.Ip(a)},
Ip(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$xz=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.b5(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cB(new A.xA(j,m))
s=7
return A.a(A.Eg(m,t.m),$async$xz)
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
return A.f($async$xz,r)},
fZ(){var s=0,r=A.h(t.k),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$fZ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.h0()
if(h==null){q=B.q
s=1
break}j=t.m
s=3
return A.a(A.a0(h.getDirectory(),j),$async$fZ)
case 3:m=b
p=5
s=8
return A.a(A.a0(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$fZ)
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
case 7:l=A.l([],t.s)
j=new A.bZ(A.bL(A.Ao(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.m(),$async$fZ)
case 14:if(!b){s=13
break}k=j.gn()
if(J.t(k.kind,"directory"))J.bp(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.B(),$async$fZ)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fZ,r)},
Eg(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.o0(r,a,b),!1,q)
A.bc(a,"error",new A.o1(r,a),!1,q)
return s},
Eh(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.o4(r,a,b),!1,q)
A.bc(a,"error",new A.o5(r,a),!1,q)
A.bc(a,"blocked",new A.o6(r,a),!1,q)
return s},
xA:function xA(a,b){this.a=a
this.b=b},
o0:function o0(a,b,c){this.a=a
this.b=b
this.c=c},
o1:function o1(a,b){this.a=a
this.b=b},
o4:function o4(a,b,c){this.a=a
this.b=b
this.c=c},
o5:function o5(a,b){this.a=a
this.b=b},
o6:function o6(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
d2:function d2(a){this.a=a},
Hb(a){var s=a.gmt()
return new A.ep(new A.xm(),s,A.m(s).i("ep<a4.T,L>"))},
Bp(a,b){var s=A.l([],t.E),r=b==null?a.b:b
return new A.fs(a,r,new A.iZ(),new A.iZ(),new A.iZ(),s)},
G7(a,b,c){var s=t.S
s=new A.iB(c,A.l([],t.fV),a.a,new A.aC(new A.q($.u,t.D),t.h),A.D(s,t.br),A.D(s,t.m))
s.oe(a)
s.oj(a,b,c)
return s},
C2(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
dB(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dB=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.h0()
if(b==null){q=B.am
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.jt()
d=d==null?null:A.iq(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bd(d,t.b3),$async$dB)
case 7:j=a1
d=t.m
s=8
return A.a(A.a0(b.getDirectory(),d),$async$dB)
case 8:m=a1
s=9
return A.a(A.a0(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$dB)
case 9:l=a1
s=10
return A.a(A.ji(l),$async$dB)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.yK(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a0(A.b5(e),t.X),$async$dB)
case 13:q=B.am
n=[1]
s=5
break
case 12:g=i
q=new A.iU(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.am
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.ap()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.yE(m,"_drift_feature_detection"),$async$dB)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dB,r)},
ji(a){return A.I_(a)},
I_(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$ji=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a0(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$ji)
case 7:j=c
s=8
return A.a(A.a0(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$ji)
case 8:n=c
n.close()
l=j
q=new A.az(!0,l)
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
return A.a(A.a0(a.createSyncAccessHandle(),t.m),$async$ji)
case 9:m=c
q=new A.az(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ji,r)},
xm:function xm(){},
iZ:function iZ(){this.a=null},
fs:function fs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
vq:function vq(a){this.a=a},
vu:function vu(a,b){this.a=a
this.b=b},
vr:function vr(a,b){this.a=a
this.b=b},
vs:function vs(a){this.a=a},
vt:function vt(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
va:function va(a){this.a=a},
vf:function vf(a,b){this.a=a
this.b=b},
vi:function vi(a,b,c){this.a=a
this.b=b
this.c=c},
vc:function vc(a,b){this.a=a
this.b=b},
vb:function vb(a,b){this.a=a
this.b=b},
vh:function vh(a,b){this.a=a
this.b=b},
vg:function vg(a,b){this.a=a
this.b=b},
vk:function vk(a,b){this.a=a
this.b=b},
vj:function vj(a,b){this.a=a
this.b=b},
vd:function vd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ve:function ve(a,b){this.a=a
this.b=b},
v9:function v9(a){this.a=a},
jZ:function jZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
p_:function p_(a){this.a=a},
oZ:function oZ(a){this.a=a},
oY:function oY(a,b){this.a=a
this.b=b},
up:function up(a,b,c,d,e,f){var _=this
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
uq:function uq(a,b){this.a=a
this.b=b},
ur:function ur(a,b){this.a=a
this.b=b},
us:function us(a){this.a=a},
FP(){var s=v.G
if(A.EK(s,"DedicatedWorkerGlobalScope"))return new A.m1(s,new A.m2(s.location.href))
else return new A.mx(s,new A.m2(s.location.href))},
ja:function ja(){},
m1:function m1(a,b){this.a=a
this.b=b},
mx:function mx(a,b){this.a=a
this.b=b},
wD:function wD(a){this.a=a},
wE:function wE(a,b,c){this.a=a
this.b=b
this.c=c},
wC:function wC(a){this.a=a},
wA:function wA(a){this.a=a},
wB:function wB(a){this.a=a},
m2:function m2(a){this.a=a},
vE:function vE(a){this.a=a},
lh:function lh(a,b,c){this.c=a
this.a=b
this.b=c},
tp:function tp(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
fi:function fi(){},
mb:function mb(){},
ch:function ch(a,b){this.a=a
this.b=b},
bc(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Ct(new A.vH(c),t.m)
s=s==null?null:A.cB(s)}s=new A.iH(a,b,s,!1,e.i("iH<0>"))
s.jk()
return s},
Ct(a,b){var s=$.u
if(s===B.i)return a
return s.hr(a,b)},
yA:function yA(a,b){this.a=a
this.$ti=b},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iH:function iH(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
vH:function vH(a){this.a=a},
vI:function vI(a){this.a=a},
D6(a){return v.mangledGlobalNames[a]},
CW(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
EM(a,b){return b in a},
yK(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
IK(a,b,c,d){var s,r,q,p,o,n=A.D(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.bp(p,q)}return n},
xx(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.E(a)
a[r]=s&255
b=s/256|0;--r}},
Jl(a){return a},
D4(a){if(a instanceof A.d3)return a
return new A.d3(a)},
Jn(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.C(p)
if(q instanceof A.f9){s=q
throw A.b(A.Fu("Invalid "+a+": "+s.a,s.b,s.gfl()))}else if(t.Y.b(q)){r=q
throw A.b(A.a3("Invalid "+a+' "'+b+'": '+r.gjW(),r.gfl(),r.gaq()))}else throw p}},
jj(){var s,r,q,p=$.DL(),o=$.DE()+1
$.Hh=o
s=B.a.hY(B.b.ke(o,36),8,"0")
r=J.Ax(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cs(36)]
return B.a.q(s+B.c.dX(r),0,15)},
n6(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.cQ)throw q
else{s=r
r=A.ig("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
xF(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.z
try{s=B.h.aA(a,null)
if(t.f.b(s)){q=A.b_(s,t.N,t.X)
return q}return B.z}catch(p){r=A.C(p)
q=A.ig("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
CG(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.b4
try{s=B.h.aA(a,null)
if(t.j.b(s)){q=J.ju(s,t.N)
q=q.wZ(q)
return q}return B.b4}catch(p){r=A.C(p)
q=A.ig("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
CF(a){var s,r,q,p,o=null
if(a==null)return B.q
A.M(a)
if(a.length===0)return B.q
s=B.h.aA(a,o)
if(!t.j.b(s))throw A.b(A.a3("expected a JSON array, got "+J.bq(s).k(0),o,o))
r=A.l([],t.s)
for(q=J.I(s);q.m();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.v(A.a3("dirty-field member is "+J.bq(p).k(0)+", expected String",o,o)))}return r},
fX(a){var s,r=J.K(a)
if(r.gA(a))return null
s=J.c2(r.gD(a).gaP())
if(A.aE(s))return s
if(typeof s=="string")return A.i_(s,null)
return null},
Jh(a,b,c){var s=A.z(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
J3(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.bK)
s=a.h(0,"type")
if(!J.t(s,"aes-gcm"))throw A.b(A.a3("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ao(r)!==32)throw A.b(B.bJ)
q=new Uint8Array(32)
for(p=J.K(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.aE(n)||n<0||n>255)throw A.b(A.a3("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.A2(q)
p=$.yn()
return new A.nf($.Dd().jp(12,32).mU(),new A.i9(new A.l2(A.A2(q)),m),p)},
CI(a){var s,r=A.D(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.bM(a.c))
r.j(0,"local",A.bM(a.d))
r.j(0,"remote",A.bM(a.e))
s=a.f
s=A.P(s,A.m(s).c)
B.c.aT(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.P(s,A.m(s).c)
B.c.aT(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.bM(s))
return r},
J_(){var s=A.FP(),r=t.cj
new A.up(s,B.bs,A.l([],t.az),A.D(t.S,t.lp),new A.hN(A.yO(r)),new A.hN(A.yO(r))).dV()},
CD(){var s,r,q,p,o=null
try{o=A.z8()}catch(s){if(t.mA.b(A.C(s))){r=$.xl
if(r!=null)return r
throw s}else throw s}if(J.t(o,$.BZ)){r=$.xl
r.toString
return r}$.BZ=o
if($.zN()===$.js())r=$.xl=o.bn(".").k(0)
else{q=o.kd()
p=q.length-1
r=$.xl=p===0?q:B.a.q(q,0,p)}return r},
CO(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
CH(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.CO(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.q(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
IU(a){var s,r,q,p
if(a.gl(0)===0)return!0
s=a.gD(0)
for(r=A.cf(a,1,null,a.$ti.i("V.E")),q=r.$ti,r=new A.ae(r,r.gl(0),q.i("ae<V.E>")),q=q.i("V.E");r.m();){p=r.d
if(!J.t(p==null?q.a(p):p,s))return!1}return!0},
J9(a,b){var s=B.c.c0(a,null)
if(s<0)throw A.b(A.O(A.r(a)+" contains no null elements.",null))
a[s]=b},
D0(a,b){var s=B.c.c0(a,b)
if(s<0)throw A.b(A.O(A.r(a)+" contains no elements matching "+b.k(0)+".",null))
a[s]=null},
Ix(a,b){var s,r,q,p
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),r=r.i("F.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
xQ(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.c1(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.c0(a,b)
while(r!==-1){q=r===0?0:B.a.hR(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.c1(a,b,r+1)}return null},
zA(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.cP(A.dq(r.b,p.sqlite3_errmsg(q),null),A.dq(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
yi(a,b,c,d,e){throw A.b(A.zA(a.a,a.b,b,c,d,e))},
A6(a){if(a.X(0,$.D9())<0||a.X(0,$.D8())>0)throw A.b(A.Al("BigInt value exceeds the range of 64 bits"))
return a},
Fn(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ah(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dq(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.Be(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
At(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bh("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cs(61)))
return s.charCodeAt(0)==0?s:s},
t0(a){var s=0,r=A.h(t.lo),q
var $async$t0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a0(a.arrayBuffer(),t.a),$async$t0)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$t0,r)}},B={}
var w=[A,J,B]
var $={}
A.yM.prototype={}
J.kh.prototype={
R(a,b){return a===b},
gI(a){return A.e8(a)},
k(a){return"Instance of '"+A.kR(a)+"'"},
gak(a){return A.by(A.zs(this))}}
J.kj.prototype={
k(a){return String(a)},
gI(a){return a?519018:218159},
gak(a){return A.by(t.y)},
$ia9:1,
$iX:1}
J.hD.prototype={
R(a,b){return null==b},
k(a){return"null"},
gI(a){return 0},
gak(a){return A.by(t.P)},
$ia9:1,
$iR:1}
J.au.prototype={$iL:1}
J.dc.prototype={
gI(a){return 0},
gak(a){return B.cY},
k(a){return String(a)}}
J.kO.prototype={}
J.dm.prototype={}
J.bE.prototype={
k(a){var s=a[$.Df()]
if(s==null)s=a[$.eD()]
if(s==null)return this.o4(a)
return"JavaScript function for "+J.ap(s)}}
J.bf.prototype={
gI(a){return 0},
k(a){return String(a)}}
J.eT.prototype={
gI(a){return 0},
k(a){return String(a)}}
J.B.prototype={
hs(a,b){return new A.bD(a,A.a6(a).i("@<1>").T(b).i("bD<1,2>"))},
u(a,b){a.$flags&1&&A.E(a,29)
a.push(b)},
i5(a,b){var s
a.$flags&1&&A.E(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.t_(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.E(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.t_(b,null))
a.splice(b,0,c)},
jO(a,b,c){var s,r
a.$flags&1&&A.E(a,"insertAll",2)
A.AU(b,0,a.length,"index")
if(!t.O.b(c))c=J.E0(c)
s=J.ao(c)
a.length=a.length+s
r=b+s
this.af(a,r,a.length,a,b)
this.ar(a,b,r,c)},
k9(a){a.$flags&1&&A.E(a,"removeLast",1)
if(a.length===0)throw A.b(A.xK(a,-1))
return a.pop()},
E(a,b){var s
a.$flags&1&&A.E(a,"remove",1)
for(s=0;s<a.length;++s)if(J.t(a[s],b)){a.splice(s,1)
return!0}return!1},
t6(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aq(a))}q=p.length
if(q===o)return
this.sl(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
F(a,b){var s
a.$flags&1&&A.E(a,"addAll",2)
if(Array.isArray(b)){this.or(a,b)
return}for(s=J.I(b);s.m();)a.push(s.gn())},
or(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aq(a))
for(s=0;s<r;++s)a.push(b[s])},
ah(a){a.$flags&1&&A.E(a,"clear","clear")
a.length=0},
c5(a,b,c){return new A.a_(a,b,A.a6(a).i("@<1>").T(c).i("a_<1,2>"))},
J(a,b){var s,r=A.aG(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
dX(a){return this.J(a,"")},
cv(a,b){return A.cf(a,0,A.bL(b,"count",t.S),A.a6(a).c)},
bd(a,b){return A.cf(a,b,null,A.a6(a).c)},
eJ(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aq(a))}if(c!=null)return c.$0()
throw A.b(A.at())},
mp(a,b){return this.eJ(a,b,null)},
a4(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.ak(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ak(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a6(a))
return A.l(a.slice(b,c),A.a6(a))},
b1(a,b){return this.U(a,b,null)},
fg(a,b,c){A.b1(b,c,a.length)
return A.cf(a,b,c,A.a6(a).c)},
gD(a){if(a.length>0)return a[0]
throw A.b(A.at())},
ga3(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.at())},
gau(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.at())
throw A.b(A.hA())},
mN(a,b,c){a.$flags&1&&A.E(a,18)
A.b1(b,c,a.length)
a.splice(b,c-b)},
af(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.E(a,5)
A.b1(b,c,a.length)
s=c-b
if(s===0)return
A.b0(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.ne(d,e).cw(0,!1)
q=0}p=J.K(r)
if(q+s>p.gl(r))throw A.b(A.Aw())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
cS(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aq(a))}return!1},
dS(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aq(a))}return!0},
c8(a,b){var s,r,q,p,o
a.$flags&2&&A.E(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Hl()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a6(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dC(b,2))
if(p>0)this.t7(a,p)},
aT(a){return this.c8(a,null)},
t7(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
c0(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.t(a[s],b))return s
return-1},
d1(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.t(a[s],b))return s
return-1},
C(a,b){var s
for(s=0;s<a.length;++s)if(J.t(a[s],b))return!0
return!1},
gA(a){return a.length===0},
gW(a){return a.length!==0},
k(a){return A.q6(a,"[","]")},
cw(a,b){var s=A.l(a.slice(0),A.a6(a))
return s},
ea(a){return this.cw(a,!0)},
gt(a){return new J.eH(a,a.length,A.a6(a).i("eH<1>"))},
gI(a){return A.e8(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.E(a,"set length","change the length of")
if(b<0)throw A.b(A.ak(b,0,null,"newLength",null))
if(b>a.length)A.a6(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.xK(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.E(a)
if(!(b>=0&&b<a.length))throw A.b(A.xK(a,b))
a[b]=c},
kh(a,b){return new A.bv(a,b.i("bv<0>"))},
vS(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gak(a){return A.by(A.a6(a))},
$iaZ:1,
$iG:1,
$io:1,
$ip:1}
J.ki.prototype={
x5(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kR(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.q7.prototype={}
J.eH.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.A(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.dY.prototype={
X(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gjT(b)
if(this.gjT(a)===s)return 0
if(this.gjT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gjT(a){return a===0?1/a<0:a<0},
i7(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
u8(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
vk(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
mR(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
cU(a,b,c){if(this.X(b,c)>0)throw A.b(A.ez(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
ke(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ak(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.v(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bb("0",q)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fe(a,b){return a+b},
aj(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iq(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.lL(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.lL(a,b)},
lL(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bx(a,b){if(b<0)throw A.b(A.ez(b))
return b>31?0:a<<b>>>0},
tn(a,b){return b>31?0:a<<b>>>0},
di(a,b){var s
if(b<0)throw A.b(A.ez(b))
if(a>0)s=this.ji(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ac(a,b){var s
if(a>0)s=this.ji(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lJ(a,b){if(0>b)throw A.b(A.ez(b))
return this.ji(a,b)},
ji(a,b){return b>31?0:a>>>b},
nG(a,b){return a>b},
gak(a){return A.by(t.o)},
$iam:1,
$ia5:1}
J.hC.prototype={
gm6(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.K(q,4294967296)
s+=32}return s-Math.clz32(q)},
gak(a){return A.by(t.S)},
$ia9:1,
$ii:1}
J.kk.prototype={
gak(a){return A.by(t.i)},
$ia9:1}
J.da.prototype={
jq(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.mB(b,a,c)},
hn(a,b){return this.jq(a,b,0)},
e0(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.fd(c,a)},
bY(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ag(a,r-s)},
mP(a,b,c){A.AU(0,0,a.length,"startIndex")
return A.Jg(a,b,c,0)},
dj(a,b){var s=A.l(a.split(b),t.s)
return s},
d7(a,b,c,d){var s=A.b1(b,c,a.length)
return A.D2(a,b,s,d)},
aa(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.aa(a,b,0)},
q(a,b,c){return a.substring(b,A.b1(b,c,a.length))},
ag(a,b){return this.q(a,b,null)},
dc(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.EN(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.AC(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
x3(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.AC(r,s))},
bb(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bu)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
hY(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bb(c,s)+a},
wn(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bb(" ",s)},
c1(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c0(a,b){return this.c1(a,b,0)},
hR(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
d1(a,b){return this.hR(a,b,null)},
C(a,b){return A.Jd(a,b,0)},
X(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
k(a){return a},
gI(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gak(a){return A.by(t.N)},
gl(a){return a.length},
$iaZ:1,
$ia9:1,
$iam:1,
$ik:1}
A.vw.prototype={
u(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.K(b),i=j.gl(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.b.ac(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.e.ar(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.e.ar(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.E(r)
r[q+m]=l}k.a=s},
kc(){var s,r=this
if(r.a===0)return $.na()
s=J.bB(B.e.ga5(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.na()
return s},
gl(a){return this.a}}
A.v6.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.aY(b))
this.b.push(s)
this.a=this.a+s.length},
kc(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.na()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.c.ah(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.A)(s),++o,p=m){n=s[o]
m=p+n.length
B.e.ar(q,p,m,n)}l.a=0
B.c.ah(s)
return q},
gl(a){return this.a}}
A.dr.prototype={
gt(a){return new A.jO(J.I(this.gb5()),A.m(this).i("jO<1,2>"))},
gl(a){return J.ao(this.gb5())},
gA(a){return J.bO(this.gb5())},
gW(a){return J.eG(this.gb5())},
bd(a,b){var s=A.m(this)
return A.eJ(J.ne(this.gb5(),b),s.c,s.y[1])},
cv(a,b){var s=A.m(this)
return A.eJ(J.ys(this.gb5(),b),s.c,s.y[1])},
a4(a,b){return A.m(this).y[1].a(J.nc(this.gb5(),b))},
gD(a){return A.m(this).y[1].a(J.c2(this.gb5()))},
ga3(a){return A.m(this).y[1].a(J.nd(this.gb5()))},
gau(a){return A.m(this).y[1].a(J.yr(this.gb5()))},
C(a,b){return J.yq(this.gb5(),b)},
k(a){return J.ap(this.gb5())}}
A.jO.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.dK.prototype={
gb5(){return this.a}}
A.iE.prototype={$iG:1}
A.iA.prototype={
h(a,b){return this.$ti.y[1].a(J.T(this.a,b))},
j(a,b,c){J.bN(this.a,b,this.$ti.c.a(c))},
sl(a,b){J.DX(this.a,b)},
u(a,b){J.bp(this.a,this.$ti.c.a(b))},
c8(a,b){var s=b==null?null:new A.v7(this,b)
J.A0(this.a,s)},
fg(a,b,c){var s=this.$ti
return A.eJ(J.DU(this.a,b,c),s.c,s.y[1])},
af(a,b,c,d,e){var s=this.$ti
J.DY(this.a,b,c,A.eJ(d,s.y[1],s.c),e)},
ar(a,b,c,d){return this.af(0,b,c,d,0)},
$iG:1,
$ip:1}
A.v7.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bD.prototype={
hs(a,b){return new A.bD(this.a,this.$ti.i("@<1>").T(b).i("bD<1,2>"))},
gb5(){return this.a}}
A.dL.prototype={
bW(a,b,c){return new A.dL(this.a,this.$ti.i("@<1,2>").T(b).T(c).i("dL<1,2,3,4>"))},
G(a){return this.a.G(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a2(a,b){this.a.a2(0,new A.nI(this,b))},
gO(){var s=this.$ti
return A.eJ(this.a.gO(),s.c,s.y[2])},
gaP(){var s=this.$ti
return A.eJ(this.a.gaP(),s.y[1],s.y[3])},
gl(a){var s=this.a
return s.gl(s)},
gA(a){var s=this.a
return s.gA(s)},
gW(a){var s=this.a
return s.gW(s)},
gaK(){var s=this.a.gaK()
return s.c5(s,new A.nH(this),this.$ti.i("S<3,4>"))}}
A.nI.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.nH.prototype={
$1(a){var s=this.a.$ti
return new A.S(s.y[2].a(a.a),s.y[3].a(a.b),s.i("S<3,4>"))},
$S(){return this.a.$ti.i("S<3,4>(S<1,2>)")}}
A.db.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.kV.prototype={
k(a){return"ReachabilityError: "+this.a}}
A.c4.prototype={
gl(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.y3.prototype={
$0(){return A.c6(null,t.H)},
$S:3}
A.t5.prototype={}
A.G.prototype={}
A.V.prototype={
gt(a){var s=this
return new A.ae(s,s.gl(s),A.m(s).i("ae<V.E>"))},
gA(a){return this.gl(this)===0},
gD(a){if(this.gl(this)===0)throw A.b(A.at())
return this.a4(0,0)},
ga3(a){var s=this
if(s.gl(s)===0)throw A.b(A.at())
return s.a4(0,s.gl(s)-1)},
gau(a){var s=this
if(s.gl(s)===0)throw A.b(A.at())
if(s.gl(s)>1)throw A.b(A.hA())
return s.a4(0,0)},
C(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(J.t(r.a4(0,s),b))return!0
if(q!==r.gl(r))throw A.b(A.aq(r))}return!1},
dS(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(!b.$1(r.a4(0,s)))return!1
if(q!==r.gl(r))throw A.b(A.aq(r))}return!0},
J(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a4(0,0))
if(o!==p.gl(p))throw A.b(A.aq(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a4(0,q))
if(o!==p.gl(p))throw A.b(A.aq(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a4(0,q))
if(o!==p.gl(p))throw A.b(A.aq(p))}return r.charCodeAt(0)==0?r:r}},
dX(a){return this.J(0,"")},
c5(a,b,c){return new A.a_(this,b,A.m(this).i("@<V.E>").T(c).i("a_<1,2>"))},
wJ(a,b){var s,r,q=this,p=q.gl(q)
if(p===0)throw A.b(A.at())
s=q.a4(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a4(0,r))
if(p!==q.gl(q))throw A.b(A.aq(q))}return s},
bd(a,b){return A.cf(this,b,null,A.m(this).i("V.E"))},
cv(a,b){return A.cf(this,0,A.bL(b,"count",t.S),A.m(this).i("V.E"))}}
A.ce.prototype={
ir(a,b,c,d){var s,r=this.b
A.b0(r,"start")
s=this.c
if(s!=null){A.b0(s,"end")
if(r>s)throw A.b(A.ak(r,0,s,"start",null))}},
gp6(){var s=J.ao(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtr(){var s=J.ao(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.ao(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a4(a,b){var s=this,r=s.gtr()+b
if(b<0||r>=s.gp6())throw A.b(A.ke(b,s.gl(0),s,null,"index"))
return J.nc(s.a,r)},
bd(a,b){var s,r,q=this
A.b0(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dT(q.$ti.i("dT<1>"))
return A.cf(q.a,s,r,q.$ti.c)},
cv(a,b){var s,r,q,p=this
A.b0(b,"count")
s=p.c
r=p.b
if(s==null)return A.cf(p.a,r,B.b.fe(r,b),p.$ti.c)
else{q=B.b.fe(r,b)
if(s<q)return p
return A.cf(p.a,r,q,p.$ti.c)}},
cw(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.K(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Ay(0,n):J.yJ(0,n)}r=A.aG(s,m.a4(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a4(n,o+q)
if(m.gl(n)<l)throw A.b(A.aq(p))}return r},
ea(a){return this.cw(0,!0)}}
A.ae.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.K(q),o=p.gl(q)
if(r.b!==o)throw A.b(A.aq(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a4(q,s);++r.c
return!0}}
A.c7.prototype={
gt(a){return new A.kv(J.I(this.a),this.b,A.m(this).i("kv<1,2>"))},
gl(a){return J.ao(this.a)},
gA(a){return J.bO(this.a)},
gD(a){return this.b.$1(J.c2(this.a))},
ga3(a){return this.b.$1(J.nd(this.a))},
gau(a){return this.b.$1(J.yr(this.a))},
a4(a,b){return this.b.$1(J.nc(this.a,b))}}
A.dS.prototype={$iG:1}
A.kv.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.a_.prototype={
gl(a){return J.ao(this.a)},
a4(a,b){return this.b.$1(J.nc(this.a,b))}}
A.b2.prototype={
gt(a){return new A.dp(J.I(this.a),this.b,this.$ti.i("dp<1>"))},
c5(a,b,c){return new A.c7(this,b,this.$ti.i("@<1>").T(c).i("c7<1,2>"))}}
A.dp.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.ho.prototype={
gt(a){return new A.k6(J.I(this.a),this.b,B.aC,this.$ti.i("k6<1,2>"))}}
A.k6.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.I(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.ee.prototype={
gt(a){var s=this.a
return new A.lk(s.gt(s),this.b,A.m(this).i("lk<1>"))}}
A.hl.prototype={
gl(a){var s=this.a,r=s.gl(s)
s=this.b
if(B.b.nG(r,s))return s
return r},
$iG:1}
A.lk.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.cN.prototype={
bd(a,b){A.jx(b,"count")
A.b0(b,"count")
return new A.cN(this.a,this.b+b,A.m(this).i("cN<1>"))},
gt(a){var s=this.a
return new A.l5(s.gt(s),this.b,A.m(this).i("l5<1>"))}}
A.eO.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
bd(a,b){A.jx(b,"count")
A.b0(b,"count")
return new A.eO(this.a,this.b+b,this.$ti)},
$iG:1}
A.l5.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gn(){return this.a.gn()}}
A.dT.prototype={
gt(a){return B.aC},
gA(a){return!0},
gl(a){return 0},
gD(a){throw A.b(A.at())},
ga3(a){throw A.b(A.at())},
gau(a){throw A.b(A.at())},
a4(a,b){throw A.b(A.ak(b,0,0,"index",null))},
C(a,b){return!1},
dS(a,b){return!0},
c5(a,b,c){return new A.dT(c.i("dT<0>"))},
bd(a,b){A.b0(b,"count")
return this},
cv(a,b){A.b0(b,"count")
return this},
cw(a,b){var s=J.yJ(0,this.$ti.c)
return s}}
A.k4.prototype={
m(){return!1},
gn(){throw A.b(A.at())}}
A.bv.prototype={
gt(a){return new A.lz(J.I(this.a),this.$ti.i("lz<1>"))}}
A.lz.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.hr.prototype={
sl(a,b){throw A.b(A.Y(u.O))},
u(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.lq.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sl(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
c8(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
af(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ar(a,b,c,d){return this.af(0,b,c,d,0)}}
A.fj.prototype={}
A.e9.prototype={
gl(a){return J.ao(this.a)},
a4(a,b){var s=this.a,r=J.K(s)
return r.a4(s,r.gl(s)-1-b)}}
A.ik.prototype={
gI(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gI(this.a)&536870911
this._hashCode=s
return s},
k(a){return'Symbol("'+this.a+'")'},
R(a,b){if(b==null)return!1
return b instanceof A.ik&&this.a===b.a}}
A.jb.prototype={}
A.az.prototype={$r:"+(1,2)",$s:1}
A.iU.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.iV.prototype={$r:"+controller,sync(1,2)",$s:3}
A.fD.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.mn.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.es.prototype={$r:"+(1,2,3)",$s:6}
A.et.prototype={$r:"+(1,2,3,4)",$s:7}
A.mo.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.hg.prototype={}
A.eK.prototype={
bW(a,b,c){var s=A.m(this)
return A.AG(this,s.c,s.y[1],b,c)},
gA(a){return this.gl(this)===0},
gW(a){return this.gl(this)!==0},
k(a){return A.qz(this)},
j(a,b,c){A.Ek()},
gaK(){return new A.fH(this.v7(),A.m(this).i("fH<S<1,2>>"))},
v7(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gaK(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gO(),o=o.gt(o),n=A.m(s).i("S<1,2>")
case 2:if(!o.m()){r=3
break}m=o.gn()
r=4
return a.b=new A.S(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
c6(a,b,c,d){var s=A.D(c,d)
this.a2(0,new A.oi(this,b,s))
return s},
$iH:1}
A.oi.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.aM.prototype={
gl(a){return this.b.length},
glh(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
G(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.G(b))return null
return this.b[this.a[b]]},
a2(a,b){var s,r,q=this.glh(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gO(){return new A.eo(this.glh(),this.$ti.i("eo<1>"))},
gaP(){return new A.eo(this.b,this.$ti.i("eo<2>"))}}
A.eo.prototype={
gl(a){return this.a.length},
gA(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.fz(s,s.length,this.$ti.i("fz<1>"))}}
A.fz.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.hv.prototype={
dt(){var s=this,r=s.$map
if(r==null){r=new A.hE(s.$ti.i("hE<1,2>"))
A.CL(s.a,r)
s.$map=r}return r},
G(a){return this.dt().G(a)},
h(a,b){return this.dt().h(0,b)},
a2(a,b){this.dt().a2(0,b)},
gO(){var s=this.dt()
return new A.U(s,A.m(s).i("U<1>"))},
gaP(){var s=this.dt()
return new A.av(s,A.m(s).i("av<2>"))},
gl(a){return this.dt().a}}
A.hh.prototype={
u(a,b){A.El()}}
A.cD.prototype={
gl(a){return this.b},
gA(a){return this.b===0},
gW(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.fz(s,s.length,r.$ti.i("fz<1>"))},
C(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.q1.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.hz&&this.a.R(0,b.a)&&A.zD(this)===A.zD(b)},
gI(a){return A.c8(this.a,A.zD(this),B.d,B.d,B.d,B.d,B.d)},
k(a){var s=B.c.J([A.by(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.hz.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.IT(A.n2(this.a),this.$ti)}}
A.rA.prototype={
$0(){return B.t.vk(1000*this.a.now())},
$S:9}
A.i5.prototype={}
A.tH.prototype={
bJ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hU.prototype={
k(a){return"Null check operator used on a null value"}}
A.kl.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lp.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kJ.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iJ:1}
A.hn.prototype={}
A.iX.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaw:1}
A.dN.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.D7(r==null?"unknown":r)+"'"},
gak(a){var s=A.n2(this)
return A.by(s==null?A.bz(this):s)},
gxY(){return this},
$C:"$1",
$R:1,
$D:null}
A.nN.prototype={$C:"$0",$R:0}
A.nO.prototype={$C:"$2",$R:2}
A.tF.prototype={}
A.tg.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.D7(s)+"'"}}
A.h8.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.h8))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.jm(this.a)^A.e8(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kR(this.a)+"'")}}
A.l1.prototype={
k(a){return"RuntimeError: "+this.a}}
A.bt.prototype={
gl(a){return this.a},
gA(a){return this.a===0},
gW(a){return this.a!==0},
gO(){return new A.U(this,A.m(this).i("U<1>"))},
gaP(){return new A.av(this,A.m(this).i("av<2>"))},
gaK(){return new A.aB(this,A.m(this).i("aB<1,2>"))},
G(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mv(a)},
mv(a){var s=this.d
if(s==null)return!1
return this.d0(this.lb(s,a),a)>=0},
F(a,b){b.a2(0,new A.q8(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mw(b)},
mw(a){var s,r,q=this.d
if(q==null)return null
s=this.lb(q,a)
r=this.d0(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kF(s==null?q.b=q.j5():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kF(r==null?q.c=q.j5():r,b,c)}else q.my(b,c)},
my(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.j5()
s=p.dW(a)
r=o[s]
if(r==null)o[s]=[p.it(a,b)]
else{q=p.d0(r,a)
if(q>=0)r[q].b=b
else r.push(p.it(a,b))}},
mH(a,b){var s,r,q=this
if(q.G(a)){s=q.h(0,a)
return s==null?A.m(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
E(a,b){var s=this
if(typeof b=="string")return s.lB(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lB(s.c,b)
else return s.mx(b)},
mx(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dW(a)
r=n[s]
q=o.d0(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.lR(p)
if(r.length===0)delete n[s]
return p.b},
ah(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.is()}},
a2(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aq(s))
r=r.c}},
kF(a,b,c){var s=a[b]
if(s==null)a[b]=this.it(b,c)
else s.b=c},
lB(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.lR(s)
delete a[b]
return s.b},
is(){this.r=this.r+1&1073741823},
it(a,b){var s,r=this,q=new A.qa(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.is()
return q},
lR(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.is()},
dW(a){return J.a2(a)&1073741823},
lb(a,b){return a[this.dW(b)]},
d0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.t(a[r].a,b))return r
return-1},
k(a){return A.qz(this)},
j5(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.q8.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.qa.prototype={}
A.U.prototype={
gl(a){return this.a.a},
gA(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bS(s,s.r,s.e,this.$ti.i("bS<1>"))},
C(a,b){return this.a.G(b)}}
A.bS.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aq(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.av.prototype={
gl(a){return this.a.a},
gA(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aR(s,s.r,s.e,this.$ti.i("aR<1>"))}}
A.aR.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aq(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aB.prototype={
gl(a){return this.a.a},
gA(a){return this.a.a===0},
gt(a){var s=this.a
return new A.kr(s,s.r,s.e,this.$ti.i("kr<1,2>"))}}
A.kr.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aq(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.S(s.a,s.b,r.$ti.i("S<1,2>"))
r.c=s.c
return!0}}}
A.hF.prototype={
dW(a){return A.jm(a)&1073741823},
d0(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.hE.prototype={
dW(a){return A.It(a)&1073741823},
d0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.t(a[r].a,b))return r
return-1}}
A.xY.prototype={
$1(a){return this.a(a)},
$S:40}
A.xZ.prototype={
$2(a,b){return this.a(a,b)},
$S:68}
A.y_.prototype={
$1(a){return this.a(a)},
$S:44}
A.er.prototype={
gak(a){return A.by(this.lc())},
lc(){return A.IC(this.$r,this.fw())},
k(a){return this.lP(!1)},
lP(a){var s,r,q,p,o,n=this.pf(),m=this.fw(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.AQ(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pf(){var s,r=this.$s
while($.wq.length<=r)$.wq.push(null)
s=$.wq[r]
if(s==null){s=this.oO()
$.wq[r]=s}return s},
oO(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Ax(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.dd(j,k)}}
A.mk.prototype={
fw(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.mk&&this.$s===b.$s&&J.t(this.a,b.a)&&J.t(this.b,b.b)},
gI(a){return A.c8(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.ml.prototype={
fw(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.ml&&s.$s===b.$s&&J.t(s.a,b.a)&&J.t(s.b,b.b)&&J.t(s.c,b.c)},
gI(a){var s=this
return A.c8(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.mm.prototype={
fw(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.mm&&this.$s===b.$s&&A.Gt(this.a,b.a)},
gI(a){return A.c8(this.$s,A.qY(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eS.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gln(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.yL(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
grg(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.yL(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
dT(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fC(s)},
jq(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.lL(this,b,c)},
hn(a,b){return this.jq(0,b,0)},
pb(a,b){var s,r=this.gln()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fC(s)},
pa(a,b){var s,r=this.grg()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fC(s)},
e0(a,b,c){if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,null,null))
return this.pa(b,c)}}
A.fC.prototype={
gN(){return this.b.index},
gM(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ie4:1,
$ikW:1}
A.lL.prototype={
gt(a){return new A.lM(this.a,this.b,this.c)}}
A.lM.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pb(l,s)
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
A.fd.prototype={
gM(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.t_(b,null))
return this.c},
$ie4:1,
gN(){return this.a}}
A.mB.prototype={
gt(a){return new A.wL(this.a,this.b,this.c)},
gD(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.fd(r,s)
throw A.b(A.at())}}
A.wL.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.fd(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.lU.prototype={
bi(){var s=this.b
if(s===this)throw A.b(new A.db("Local '"+this.a+"' has not been initialized."))
return s},
bq(){var s=this.b
if(s===this)throw A.b(A.AF(this.a))
return s},
smo(a){var s=this
if(s.b!==s)throw A.b(new A.db("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.f_.prototype={
gak(a){return B.cR},
hp(a,b,c){A.fP(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
m3(a){return this.hp(a,0,null)},
m2(a,b,c){A.fP(a,b,c)
if(c==null)c=B.b.K(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
ho(a,b,c){A.fP(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
m1(a){return this.ho(a,0,null)},
$ia9:1,
$idJ:1}
A.eZ.prototype={$ieZ:1}
A.hP.prototype={
ga5(a){if(((a.$flags|0)&2)!==0)return new A.mI(a.buffer)
else return a.buffer},
r5(a,b,c,d){var s=A.ak(b,0,c,d,null)
throw A.b(s)},
kQ(a,b,c,d){if(b>>>0!==b||b>c)this.r5(a,b,c,d)}}
A.mI.prototype={
hp(a,b,c){var s=A.bH(this.a,b,c)
s.$flags=3
return s},
m3(a){return this.hp(0,0,null)},
m2(a,b,c){var s=A.AJ(this.a,b,c)
s.$flags=3
return s},
ho(a,b,c){var s=A.AI(this.a,b,c)
s.$flags=3
return s},
m1(a){return this.ho(0,0,null)},
$idJ:1}
A.hO.prototype={
gak(a){return B.cS},
$ia9:1,
$iyt:1}
A.f0.prototype={
gl(a){return a.length},
lI(a,b,c,d,e){var s,r,q=a.length
this.kQ(a,b,q,"start")
this.kQ(a,c,q,"end")
if(b>c)throw A.b(A.ak(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.O(e,null))
r=d.length
if(r-e<s)throw A.b(A.w("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaZ:1,
$ibF:1}
A.dh.prototype={
h(a,b){A.d_(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.E(a)
A.d_(b,a,a.length)
a[b]=c},
af(a,b,c,d,e){a.$flags&2&&A.E(a,5)
if(t.dQ.b(d)){this.lI(a,b,c,d,e)
return}this.kC(a,b,c,d,e)},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
$iG:1,
$io:1,
$ip:1}
A.bG.prototype={
j(a,b,c){a.$flags&2&&A.E(a)
A.d_(b,a,a.length)
a[b]=c},
af(a,b,c,d,e){a.$flags&2&&A.E(a,5)
if(t.aj.b(d)){this.lI(a,b,c,d,e)
return}this.kC(a,b,c,d,e)},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
$iG:1,
$io:1,
$ip:1}
A.kC.prototype={
gak(a){return B.cT},
U(a,b,c){return new Float32Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$ipo:1}
A.kD.prototype={
gak(a){return B.cU},
U(a,b,c){return new Float64Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$ipp:1}
A.kE.prototype={
gak(a){return B.cV},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$iq2:1}
A.kF.prototype={
gak(a){return B.cW},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$iq3:1}
A.kG.prototype={
gak(a){return B.cX},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$iq4:1}
A.hQ.prototype={
gak(a){return B.d0},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$itK:1}
A.hR.prototype={
gak(a){return B.d1},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$itL:1}
A.hS.prototype={
gak(a){return B.d2},
gl(a){return a.length},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$itM:1}
A.e5.prototype={
gak(a){return B.d3},
gl(a){return a.length},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$ie5:1,
$icw:1}
A.iQ.prototype={}
A.iR.prototype={}
A.iS.prototype={}
A.iT.prototype={}
A.ca.prototype={
i(a){return A.j5(v.typeUniverse,this,a)},
T(a){return A.BF(v.typeUniverse,this,a)}}
A.m7.prototype={}
A.mF.prototype={
k(a){return A.bn(this.a,null)}}
A.m4.prototype={
k(a){return this.a}}
A.j1.prototype={$icS:1}
A.uP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.uO.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:111}
A.uQ.prototype={
$0(){this.a.$0()},
$S:4}
A.uR.prototype={
$0(){this.a.$0()},
$S:4}
A.j0.prototype={
on(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dC(new A.wO(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oo(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.dC(new A.wN(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
B(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$icR:1}
A.wO.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.wN.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.iq(s,o)}q.c=p
r.d.$1(q)},
$S:4}
A.it.prototype={
az(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aU(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.kP(a)
else s.cF(a)}},
bt(a,b){var s
if(b==null)b=A.h6(a)
s=this.a
if(this.b)s.al(new A.ad(a,b))
else s.ca(new A.ad(a,b))},
aG(a){return this.bt(a,null)},
$ihd:1}
A.xf.prototype={
$1(a){return this.a.$2(0,a)},
$S:22}
A.xg.prototype={
$2(a,b){this.a.$2(1,new A.hn(a,b))},
$S:125}
A.xv.prototype={
$2(a,b){this.a(a,b)},
$S:156}
A.xd.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.x()
s=q.b
if((s&1)!==0?(q.gaI().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.xe.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:21}
A.lO.prototype={
oi(a,b){var s=new A.uT(a)
this.a=A.z2(new A.uV(this,a),new A.uW(s),new A.uX(this,s),!1,b)}}
A.uT.prototype={
$0(){A.jp(new A.uU(this.a))},
$S:4}
A.uU.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.uW.prototype={
$0(){this.a.$0()},
$S:0}
A.uX.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.uV.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.x()
if((r.b&4)===0){s.c=new A.q($.u,t._)
if(s.b){s.b=!1
A.jp(new A.uS(this.b))}return s.c}},
$S:199}
A.uS.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.iM.prototype={
k(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.mD.prototype={
gn(){return this.b},
t8(a,b){var s,r,q
a=a
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gn()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.t8(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Bz
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Bz
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.w("sync*"))}return!1},
xZ(a){var s,r,q=this
if(a instanceof A.fH){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.I(a)
return 2}}}
A.fH.prototype={
gt(a){return new A.mD(this.a(),this.$ti.i("mD<1>"))}}
A.ad.prototype={
k(a){return A.r(this.a)},
$ia8:1,
gc9(){return this.b}}
A.b3.prototype={}
A.ei.prototype={
bB(){},
bC(){}}
A.iz.prototype={
gcE(){return new A.b3(this,A.m(this).i("b3<1>"))},
ghQ(){return(this.c&4)!==0},
gj3(){return this.c<4},
t5(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.Bq(c,A.m(j).c)
s=A.m(j)
r=$.u
q=d?1:0
p=b!=null?32:0
o=A.lS(r,a,s.c)
n=A.v3(r,b)
m=c==null?A.xw():c
l=new A.ei(j,o,n,r.bM(m,t.H),r,q|p,s.i("ei<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.n_(j.a)
return l},
lv(a){var s,r=this
A.m(r).i("ei<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.t5(a)
if((r.c&2)===0&&r.d==null)r.oG()}return null},
lw(a){},
lx(a){},
iv(){if((this.c&4)!==0)return new A.bk("Cannot add new events after calling close")
return new A.bk("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gj3())throw A.b(this.iv())
this.ci(b)},
bG(a,b){var s
if(!this.gj3())throw A.b(this.iv())
s=A.ew(a,b)
this.cj(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gj3())throw A.b(q.iv())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.q($.u,t.D)
q.cQ()
return r},
aE(a,b){this.cj(a,b)},
aL(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aU(null)},
oG(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aU(null)}A.n_(this.b)},
$ibs:1}
A.iu.prototype={
ci(a){var s,r
for(s=this.d,r=this.$ti.i("bW<1>");s!=null;s=s.ch)s.bQ(new A.bW(a,r))},
cj(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bQ(new A.fu(a,b))},
cQ(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bQ(B.Z)
else this.r.aU(null)}}
A.px.prototype={
$0(){this.c.a(null)
this.b.cb(null)},
$S:0}
A.pz.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.al(new A.ad(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.al(new A.ad(q,r))}},
$S:11}
A.py.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bN(j,m.b,a)
if(J.t(k,0)){l=m.d
s=A.l([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.A)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.bp(s,n)}m.c.cF(s)}}else if(J.t(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.ad(s,l))}},
$S(){return this.d.i("R(0)")}}
A.ps.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aw)")}}
A.ll.prototype={
k(a){var s=this.b.k(0)
return"TimeoutException after "+s+": "+this.a},
$iJ:1}
A.pt.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("B<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.az(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("B<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.A)(r),++p)n.push(r[p].b)
l.a.aG(new A.hX(B.c.mp(s,A.I6()),a,q.i("hX<p<0?>,p<ad?>>")))}},
$S:8}
A.hX.prototype={
k(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gc9(){var s=this.c
s=s==null?null:s.b
return s==null?A.a8.prototype.gc9.call(this):s}}
A.iK.prototype={
tF(a){this.a.bu(new A.vN(this,a),new A.vO(this,a),t.P)}}
A.vN.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("R(1)")}}
A.vO.prototype={
$2(a,b){this.a.c=new A.ad(a,b)
this.b.$1(1)},
$S:10}
A.vM.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.ej.prototype={
bt(a,b){if((this.a.a&30)!==0)throw A.b(A.w("Future already completed"))
this.al(A.ew(a,b))},
aG(a){return this.bt(a,null)},
$ihd:1}
A.aC.prototype={
az(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.aU(a)},
ap(){return this.az(null)},
al(a){this.a.ca(a)}}
A.ag.prototype={
az(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.cb(a)},
ap(){return this.az(null)},
al(a){this.a.al(a)}}
A.bX.prototype={
wd(a){if((this.c&15)!==6)return!0
return this.b.b.e9(this.d,a.a,t.y,t.K)},
vx(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kb(r,n,a.b,p,o,t.l)
else q=m.e9(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.C(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.q.prototype={
bu(a,b,c){var s,r,q=$.u
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aI(b,"onError",u.w))}else{a=q.d6(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.Ce(b,q)}s=new A.q($.u,c.i("q<0>"))
r=b==null?1:3
this.dn(new A.bX(s,r,a,b,this.$ti.i("@<1>").T(c).i("bX<1,2>")))
return s},
aO(a,b){return this.bu(a,null,b)},
lN(a,b,c){var s=new A.q($.u,c.i("q<0>"))
this.dn(new A.bX(s,19,a,b,this.$ti.i("@<1>").T(c).i("bX<1,2>")))
return s},
m7(a){var s=this.$ti,r=$.u,q=new A.q(r,s)
if(r!==B.i)a=A.Ce(a,r)
this.dn(new A.bX(q,2,null,a,s.i("bX<1,1>")))
return q},
aQ(a){var s=this.$ti,r=$.u,q=new A.q(r,s)
if(r!==B.i)a=r.bM(a,t.z)
this.dn(new A.bX(q,8,a,null,s.i("bX<1,1>")))
return q},
tj(a){this.a=this.a&1|16
this.c=a},
fp(a){this.a=a.a&30|this.a&1
this.c=a.c},
dn(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dn(a)
return}s.fp(r)}s.b.cB(new A.vP(s,a))}},
lt(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lt(a)
return}n.fp(s)}m.a=n.hd(a)
n.b.cB(new A.vU(m,n))}},
ev(){var s=this.c
this.c=null
return this.hd(s)},
hd(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cb(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.vS(a,r,!0)
else{s=r.ev()
r.a=8
r.c=a
A.em(r,s)}},
cF(a){var s=this,r=s.ev()
s.a=8
s.c=a
A.em(s,r)},
oN(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbZ()===r.gbZ())}else s=!1
if(s)return
q=p.ev()
p.fp(a)
A.em(p,q)},
al(a){var s=this.ev()
this.tj(a)
A.em(this,s)},
oM(a,b){this.al(new A.ad(a,b))},
aU(a){if(this.$ti.i("y<1>").b(a)){this.kP(a)
return}this.kL(a)},
kL(a){this.a^=2
this.b.cB(new A.vR(this,a))},
kP(a){A.vS(a,this,!1)
return},
ca(a){this.a^=2
this.b.cB(new A.vQ(this,a))},
i6(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.q($.u,r.$ti)
q.aU(r)
return q}s=new A.q($.u,r.$ti)
q.a=null
q.a=A.cv(a,new A.w_(s,a))
r.bu(new A.w0(q,r,s),new A.w1(q,s),t.P)
return s},
$iy:1}
A.vP.prototype={
$0(){A.em(this.a,this.b)},
$S:0}
A.vU.prototype={
$0(){A.em(this.b,this.a.a)},
$S:0}
A.vT.prototype={
$0(){A.vS(this.a.a,this.b,!0)},
$S:0}
A.vR.prototype={
$0(){this.a.cF(this.b)},
$S:0}
A.vQ.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.vX.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aZ(q.d,t.z)}catch(p){s=A.C(p)
r=A.a7(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.h6(q)
n=k.a
n.c=new A.ad(q,o)
q=n}q.b=!0
return}if(j instanceof A.q&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.q){m=k.b.a
l=new A.q(m.b,m.$ti)
j.bu(new A.vY(l,m),new A.vZ(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.vY.prototype={
$1(a){this.a.oN(this.b)},
$S:21}
A.vZ.prototype={
$2(a,b){this.a.al(new A.ad(a,b))},
$S:10}
A.vW.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.e9(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.C(n)
r=A.a7(n)
q=s
p=r
if(p==null)p=A.h6(q)
o=this.a
o.c=new A.ad(q,p)
o.b=!0}},
$S:0}
A.vV.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.wd(s)&&p.a.e!=null){p.c=p.a.vx(s)
p.b=!1}}catch(o){r=A.C(o)
q=A.a7(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.h6(p)
m=l.b
m.c=new A.ad(p,n)
p=m}p.b=!0}},
$S:0}
A.w_.prototype={
$0(){var s=A.z1()
this.a.al(new A.ad(new A.ll("Future not completed",this.b),s))},
$S:0}
A.w0.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.B()
this.c.cF(a)}},
$S(){return this.b.$ti.i("R(1)")}}
A.w1.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.B()
this.b.al(new A.ad(a,b))}},
$S:10}
A.lN.prototype={}
A.a4.prototype={
dX(a){var s=new A.q($.u,t.os),r=new A.ab(""),q=this.a9(null,!0,new A.tk(s,r),s.giA())
q.hV(new A.tl(this,r,q,s))
return s},
gl(a){var s={},r=new A.q($.u,t.hy)
s.a=0
this.a9(new A.tm(s,this),!0,new A.tn(s,r),r.giA())
return r},
gD(a){var s=new A.q($.u,A.m(this).i("q<a4.T>")),r=this.a9(null,!0,new A.ti(s),s.giA())
r.hV(new A.tj(this,r,s))
return s}}
A.tk.prototype={
$0(){var s=this.b.a
this.a.cb(s.charCodeAt(0)==0?s:s)},
$S:0}
A.tl.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.C(o)
r=A.a7(o)
q=s
p=r
n=A.jc(q,p)
if(n==null)q=new A.ad(q,p)
else q=n
A.H0(this.c,this.d,q)}},
$S(){return A.m(this.a).i("~(a4.T)")}}
A.tm.prototype={
$1(a){++this.a.a},
$S(){return A.m(this.b).i("~(a4.T)")}}
A.tn.prototype={
$0(){this.b.cb(this.a.a)},
$S:0}
A.ti.prototype={
$0(){var s,r=A.z1(),q=new A.bk("No element")
A.kT(q,r)
s=A.jc(q,r)
if(s==null)s=new A.ad(q,r)
this.a.al(s)},
$S:0}
A.tj.prototype={
$1(a){A.H1(this.b,this.c,a)},
$S(){return A.m(this.a).i("~(a4.T)")}}
A.ih.prototype={
a9(a,b,c,d){return this.a.a9(a,b,c,d)},
bI(a,b,c){return this.a9(a,null,b,c)},
aW(a){return this.a9(a,null,null,null)}}
A.dx.prototype={
gcE(){return new A.bb(this,A.m(this).i("bb<1>"))},
ghQ(){return(this.b&4)!==0},
grE(){if((this.b&8)===0)return this.a
return this.a.c},
ft(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.dw(A.m(q).i("dw<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.dw(A.m(q).i("dw<1>")):s},
gaI(){var s=this.a
return(this.b&8)!==0?s.c:s},
bz(){if((this.b&4)!==0)return new A.bk("Cannot add event after closing")
return new A.bk("Cannot add event while adding a stream")},
tU(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bz())
if((o&2)!==0){o=new A.q($.u,t._)
o.aU(null)
return o}o=p.a
s=b===!0
r=new A.q($.u,t._)
q=s?A.FR(p):p.gos()
q=a.a9(p.gou(),s,p.goI(),q)
s=p.b
if((s&1)!==0?(p.gaI().e&4)!==0:(s&2)===0)q.bm()
p.a=new A.iY(o,r,q,A.m(p).i("iY<1>"))
p.b|=8
return r},
l4(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.dG():new A.q($.u,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bz())
this.aw(b)},
bG(a,b){var s
if(this.b>=4)throw A.b(this.bz())
s=A.ew(a,b)
this.aE(s.a,s.b)},
tT(a){return this.bG(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.l4()
if(r>=4)throw A.b(s.bz())
s.kR()
return s.l4()},
kR(){var s=this.b|=4
if((s&1)!==0)this.cQ()
else if((s&3)===0)this.ft().u(0,B.Z)},
aw(a){var s=this,r=s.b
if((r&1)!==0)s.ci(a)
else if((r&3)===0)s.ft().u(0,new A.bW(a,A.m(s).i("bW<1>")))},
aE(a,b){var s=this.b
if((s&1)!==0)this.cj(a,b)
else if((s&3)===0)this.ft().u(0,new A.fu(a,b))},
aL(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aU(null)},
jj(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.w("Stream has already been listened to."))
s=A.G8(p,a,b,c,d,A.m(p).c)
r=p.grE()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b9()}else p.a=s
s.tk(r)
s.iK(new A.wH(p))
return s},
lv(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.B()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.q)k=r}catch(o){q=A.C(o)
p=A.a7(o)
n=new A.q($.u,t.D)
n.ca(new A.ad(q,p))
k=n}else k=k.aQ(s)
m=new A.wG(l)
if(k!=null)k=k.aQ(m)
else m.$0()
return k},
lw(a){if((this.b&8)!==0)this.a.b.bm()
A.n_(this.e)},
lx(a){if((this.b&8)!==0)this.a.b.b9()
A.n_(this.f)},
$ibs:1}
A.wH.prototype={
$0(){A.n_(this.a.d)},
$S:0}
A.wG.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aU(null)},
$S:0}
A.mE.prototype={
ci(a){this.gaI().aw(a)},
cj(a,b){this.gaI().aE(a,b)},
cQ(){this.gaI().aL()}}
A.iv.prototype={
ci(a){this.gaI().bQ(new A.bW(a,A.m(this).i("bW<1>")))},
cj(a,b){this.gaI().bQ(new A.fu(a,b))},
cQ(){this.gaI().bQ(B.Z)}}
A.cA.prototype={}
A.fI.prototype={}
A.bb.prototype={
gI(a){return(A.e8(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bb&&b.a===this.a}}
A.ds.prototype={
h9(){return this.w.lv(this)},
bB(){this.w.lw(this)},
bC(){this.w.lx(this)}}
A.lK.prototype={
B(){var s=this.b.B()
return s.aQ(new A.uK(this))}}
A.uL.prototype={
$2(a,b){var s=this.a
s.aE(a,b)
s.aL()},
$S:10}
A.uK.prototype={
$0(){this.a.a.aU(null)},
$S:4}
A.iY.prototype={}
A.aP.prototype={
tk(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fh(s)}},
hV(a){this.a=A.lS(this.d,a,A.m(this).i("aP.T"))},
bm(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.iK(q.gem())},
b9(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fh(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.iK(s.gen())}}},
B(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.ix()
r=s.f
return r==null?$.dG():r},
ix(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.h9()},
aw(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.ci(a)
else s.bQ(new A.bW(a,A.m(s).i("bW<aP.T>")))},
aE(a,b){var s
if(t.C.b(a))A.kT(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cj(a,b)
else this.bQ(new A.fu(a,b))},
aL(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.cQ()
else s.bQ(B.Z)},
bB(){},
bC(){},
h9(){return null},
bQ(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.dw(A.m(r).i("dw<aP.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fh(r)}},
ci(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.f8(s.a,a,A.m(s).i("aP.T"))
s.e=(s.e&4294967231)>>>0
s.iz((r&4)!==0)},
cj(a,b){var s,r=this,q=r.e,p=new A.v5(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.ix()
s=r.f
if(s!=null&&s!==$.dG())s.aQ(p)
else p.$0()}else{p.$0()
r.iz((q&4)!==0)}},
cQ(){var s,r=this,q=new A.v4(r)
r.ix()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.dG())s.aQ(q)
else q.$0()},
iK(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.iz((r&4)!==0)},
iz(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bB()
else q.bC()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fh(q)},
$ibl:1}
A.v5.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.mS(s,o,this.c,r,t.l)
else q.f8(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.v4.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.f7(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.fG.prototype={
a9(a,b,c,d){return this.a.jj(a,d,c,b===!0)},
bI(a,b,c){return this.a9(a,null,b,c)},
aW(a){return this.a9(a,null,null,null)}}
A.m3.prototype={
ge1(){return this.a},
se1(a){return this.a=a}}
A.bW.prototype={
k5(a){a.ci(this.b)}}
A.fu.prototype={
k5(a){a.cj(this.b,this.c)}}
A.vF.prototype={
k5(a){a.cQ()},
ge1(){return null},
se1(a){throw A.b(A.w("No events after a done."))}}
A.dw.prototype={
fh(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.jp(new A.wp(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.se1(b)
s.c=b}}}
A.wp.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.ge1()
q.b=r
if(r==null)q.c=null
s.k5(this.b)},
$S:0}
A.fv.prototype={
hV(a){},
bm(){var s=this.a
if(s>=0)this.a=s+2},
b9(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.jp(s.glp())}else s.a=r},
B(){this.a=-1
this.c=null
return $.dG()},
ru(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.f7(s)}}else r.a=q},
$ibl:1}
A.bZ.prototype={
gn(){if(this.c)return this.b
return null},
m(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.q($.u,t.g5)
r.b=s
r.c=!1
q.b9()
return s}throw A.b(A.w("Already waiting for next."))}return r.r4()},
r4(){var s,r,q=this,p=q.b
if(p!=null){s=new A.q($.u,t.g5)
q.b=s
r=p.a9(q.grm(),!0,q.gro(),q.grq())
if(q.b!=null)q.a=r
return s}return $.Dg()},
B(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aU(!1)
else s.c=!1
return r.B()}return $.dG()},
rn(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cb(!0)
if(q.c){r=q.a
if(r!=null)r.bm()}},
rr(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.ad(a,b))
else q.ca(new A.ad(a,b))},
rp(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cF(!1)
else q.kL(!1)}}
A.iF.prototype={
a9(a,b,c,d){return A.Bq(c,this.$ti.c)},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.cY.prototype={
a9(a,b,c,d){var s=null,r=new A.iP(s,s,s,s,this.$ti.i("iP<1>"))
r.d=new A.wn(this,r)
return r.jj(a,d,c,b===!0)},
bI(a,b,c){return this.a9(a,null,b,c)},
aW(a){return this.a9(a,null,null,null)}}
A.wn.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.iP.prototype={
tV(a){var s=this.b
if(s>=4)throw A.b(this.bz())
if((s&1)!==0)this.gaI().aw(a)},
ua(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bz())
r|=4
s.b=r
if((r&1)!==0)s.gaI().aL()},
gcE(){throw A.b(A.Y("Not available"))},
$idf:1}
A.xi.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.xj.prototype={
$0(){return this.a.cb(this.b)},
$S:0}
A.iI.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.u,q=b===!0?1:0,p=d!=null?32:0,o=A.lS(r,a,s.y[1]),n=A.v3(r,d),m=c==null?A.xw():c
s=new A.fy(this,o,n,r.bM(m,t.H),r,q|p,s.i("fy<1,2>"))
s.x=this.a.bI(s.giO(),s.giQ(),s.giS())
return s},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.fy.prototype={
aw(a){if((this.e&2)!==0)return
this.ip(a)},
aE(a,b){if((this.e&2)!==0)return
this.kD(a,b)},
bB(){var s=this.x
if(s!=null)s.bm()},
bC(){var s=this.x
if(s!=null)s.b9()},
h9(){var s=this.x
if(s!=null){this.x=null
return s.B()}return null},
iP(a){this.w.pI(a,this)},
iT(a,b){this.aE(a,b)},
iR(){this.aL()}}
A.ep.prototype={
pI(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.C(q)
r=A.a7(q)
p=s
o=r
n=A.jc(p,o)
if(n!=null){p=n.a
o=n.b}b.aE(p,o)
return}b.aw(m)}}
A.iG.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.v(A.w("Stream is already closed"))
s.ip(b)},
bG(a,b){this.a.aE(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.v(A.w("Stream is already closed"))
s.kE()},
$ibs:1}
A.fE.prototype={
aw(a){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.ip(a)},
aE(a,b){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.kD(a,b)},
aL(){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.kE()},
bB(){var s=this.x
if(s!=null)s.bm()},
bC(){var s=this.x
if(s!=null)s.b9()},
h9(){var s=this.x
if(s!=null){this.x=null
return s.B()}return null},
iP(a){var s,r,q,p
try{q=this.w
q===$&&A.x()
q.u(0,a)}catch(p){s=A.C(p)
r=A.a7(p)
this.aE(s,r)}},
iT(a,b){var s,r,q,p
try{q=this.w
q===$&&A.x()
q.bG(a,b)}catch(p){s=A.C(p)
r=A.a7(p)
if(s===a)this.aE(a,b)
else this.aE(s,r)}},
iR(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.x()
q.p()}catch(p){s=A.C(p)
r=A.a7(p)
this.aE(s,r)}}}
A.iy.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.u,q=b===!0?1:0,p=d!=null?32:0,o=A.lS(r,a,s.y[1]),n=A.v3(r,d),m=c==null?A.xw():c,l=new A.fE(o,n,r.bM(m,t.H),r,q|p,s.i("fE<1,2>"))
l.w=this.a.$1(new A.iG(l,s.i("iG<2>")))
l.x=this.b.bI(l.giO(),l.giQ(),l.giS())
return l},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.xa.prototype={}
A.xc.prototype={}
A.xb.prototype={}
A.x8.prototype={}
A.x9.prototype={}
A.x7.prototype={}
A.x4.prototype={}
A.mT.prototype={}
A.x3.prototype={}
A.x2.prototype={}
A.x6.prototype={}
A.x5.prototype={}
A.mS.prototype={
vq(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.mU.prototype={}
A.mR.prototype={
er(a,b,c){var s,r,q,p,o,n,m=this.gj_(),l=m.a
if(l===B.i){A.jh(b,c)
return}o=l.gjZ()
o.toString
s=o
r=$.u
try{$.u=s
m.vq(l,l.gb3(),a,b,c)
$.u=r}catch(n){q=A.C(n)
p=A.a7(n)
$.u=r
o=b===q?c:p
s.er(l,q,o)}},
$iN:1}
A.lY.prototype={
gl1(){var s=this.ax
return s==null?this.ax=new A.fN(this):s},
gb3(){return this.ay.gl1()},
gbZ(){return this.as.a},
f7(a){var s,r,q
try{this.aZ(a,t.H)}catch(q){s=A.C(q)
r=A.a7(q)
this.er(this,s,r)}},
f8(a,b,c){var s,r,q
try{this.e9(a,b,t.H,c)}catch(q){s=A.C(q)
r=A.a7(q)
this.er(this,s,r)}},
mS(a,b,c,d,e){var s,r,q
try{this.kb(a,b,c,t.H,d,e)}catch(q){s=A.C(q)
r=A.a7(q)
this.er(this,s,r)}},
js(a,b){return new A.vB(this,this.bM(a,b),b)},
u6(a,b,c){return new A.vD(this,this.d6(a,b,c),c,b)},
eD(a){return new A.vA(this,this.bM(a,t.H))},
hr(a,b){return new A.vC(this,this.d6(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.ax)return null
s=q.b
r=s.h(0,b)
return r!=null||s.G(b)?r:this.t3(q,b)},
t3(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gjZ().gjo()
if(s===B.ax)break
q=s.b
r=q.h(0,b)
if(r!=null||q.G(b)){a.b.j(0,b,r)
break}}return r},
eN(a,b){this.er(this,a,b)},
mr(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb3(),this,a,b)},
aZ(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb3(),this,a,b)},
e9(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb3(),this,a,b,c,d)},
kb(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb3(),this,a,b,c,d,e,f)},
bM(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb3(),this,a,b)},
d6(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb3(),this,a,b,c)},
f2(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb3(),this,a,b,c,d)},
mk(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb3(),this,a,b)},
cB(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb3(),this,a)},
jy(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb3(),this,a,b)},
jx(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb3(),this,a,b)},
glD(){return this.a},
glF(){return this.b},
glE(){return this.c},
glz(){return this.d},
glA(){return this.e},
gly(){return this.f},
gl6(){return this.r},
gjg(){return this.w},
gl_(){return this.x},
gkZ(){return this.y},
glu(){return this.z},
gl9(){return this.Q},
gj_(){return this.as},
gjo(){return this.at},
gjZ(){return this.ay}}
A.vB.prototype={
$0(){return this.a.aZ(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.vD.prototype={
$1(a){var s=this
return s.a.e9(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").T(this.c).i("1(2)")}}
A.vA.prototype={
$0(){return this.a.f7(this.b)},
$S:0}
A.vC.prototype={
$1(a){return this.a.f8(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.mr.prototype={
glD(){return B.dj},
glF(){return B.di},
glE(){return B.dh},
glz(){return B.df},
glA(){return B.dg},
gly(){return B.de},
gl6(){return B.da},
gjg(){return B.dk},
gl_(){return B.d9},
gkZ(){return B.d8},
glu(){return B.dd},
gl9(){return B.db},
gj_(){return B.dc},
gjo(){return B.ax},
gjZ(){return null},
gl1(){var s=$.wu
return s==null?$.wu=new A.fN(this):s},
gb3(){var s=$.wu
return s==null?$.wu=new A.fN(this):s},
gbZ(){return this},
f7(a){var s,r,q
try{if(B.i===$.u){a.$0()
return}A.xr(null,null,this,a)}catch(q){s=A.C(q)
r=A.a7(q)
A.jh(s,r)}},
f8(a,b){var s,r,q
try{if(B.i===$.u){a.$1(b)
return}A.xs(null,null,this,a,b)}catch(q){s=A.C(q)
r=A.a7(q)
A.jh(s,r)}},
mS(a,b,c){var s,r,q
try{if(B.i===$.u){a.$2(b,c)
return}A.zu(null,null,this,a,b,c)}catch(q){s=A.C(q)
r=A.a7(q)
A.jh(s,r)}},
js(a,b){return new A.ww(this,a,b)},
eD(a){return new A.wv(this,a)},
hr(a,b){return new A.wx(this,a,b)},
h(a,b){return null},
eN(a,b){A.jh(a,b)},
mr(a,b){return A.Cg(null,null,this,a,b)},
aZ(a){if($.u===B.i)return a.$0()
return A.xr(null,null,this,a)},
e9(a,b){if($.u===B.i)return a.$1(b)
return A.xs(null,null,this,a,b)},
kb(a,b,c){if($.u===B.i)return a.$2(b,c)
return A.zu(null,null,this,a,b,c)},
bM(a){return a},
d6(a){return a},
f2(a){return a},
mk(a,b){return null},
cB(a){A.xt(null,null,this,a)},
jy(a,b){return A.z7(a,b)},
jx(a,b){return A.B0(a,b)}}
A.ww.prototype={
$0(){return this.a.aZ(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.wv.prototype={
$0(){return this.a.f7(this.b)},
$S:0}
A.wx.prototype={
$1(a){return this.a.f8(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.fN.prototype={$ial:1}
A.xq.prototype={
$0(){A.Ak(this.a,this.b)},
$S:0}
A.is.prototype={}
A.cW.prototype={
gl(a){return this.a},
gA(a){return this.a===0},
gW(a){return this.a!==0},
gO(){return new A.en(this,A.m(this).i("en<1>"))},
gaP(){var s=A.m(this)
return A.e3(new A.en(this,s.i("en<1>")),new A.w3(this),s.c,s.y[1])},
G(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kW(a)},
kW(a){var s=this.d
if(s==null)return!1
return this.bS(this.kT(s,a),a)>=0},
F(a,b){b.a2(0,new A.w2(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Bs(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Bs(q,b)
return r}else return this.la(b)},
la(a){var s,r,q=this.d
if(q==null)return null
s=this.kT(q,a)
r=this.bS(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.kJ(s==null?q.b=A.zh():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.kJ(r==null?q.c=A.zh():r,b,c)}else q.lH(b,c)},
lH(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.zh()
s=p.cc(a)
r=o[s]
if(r==null){A.zi(o,s,[a,b]);++p.a
p.e=null}else{q=p.bS(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a2(a,b){var s,r,q,p,o,n=this,m=n.kS()
for(s=m.length,r=A.m(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aq(n))}},
kS(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aG(i.a,null,!1,t.z)
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
kJ(a,b,c){if(a[b]==null){++this.a
this.e=null}A.zi(a,b,c)},
cc(a){return J.a2(a)&1073741823},
kT(a,b){return a[this.cc(b)]},
bS(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.t(a[r],b))return r
return-1}}
A.w3.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.m(s).y[1].a(r):r},
$S(){return A.m(this.a).i("2(1)")}}
A.w2.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.dt.prototype={
cc(a){return A.jm(a)&1073741823},
bS(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.iC.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.o8(b)},
j(a,b,c){this.o9(b,c)},
G(a){if(!this.w.$1(a))return!1
return this.o7(a)},
cc(a){return this.r.$1(a)&1073741823},
bS(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.vz.prototype={
$1(a){return this.a.b(a)},
$S:23}
A.en.prototype={
gl(a){return this.a.a},
gA(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.m8(s,s.kS(),this.$ti.i("m8<1>"))},
C(a,b){return this.a.G(b)}}
A.m8.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aq(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.iN.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.o1(b)},
j(a,b,c){this.o3(b,c)},
G(a){if(!this.y.$1(a))return!1
return this.o0(a)},
E(a,b){if(!this.y.$1(b))return null
return this.o2(b)},
dW(a){return this.x.$1(a)&1073741823},
d0(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.wl.prototype={
$1(a){return this.a.b(a)},
$S:23}
A.cX.prototype={
gt(a){var s=this,r=new A.dv(s,s.r,A.m(s).i("dv<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gA(a){return this.a===0},
gW(a){return this.a!==0},
C(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.oR(b)},
oR(a){var s=this.d
if(s==null)return!1
return this.bS(s[this.cc(a)],a)>=0},
gD(a){var s=this.e
if(s==null)throw A.b(A.w("No elements"))
return s.a},
ga3(a){var s=this.f
if(s==null)throw A.b(A.w("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.kI(s==null?q.b=A.zj():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.kI(r==null?q.c=A.zj():r,b)}else return q.oq(b)},
oq(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.zj()
s=q.cc(a)
r=p[s]
if(r==null)p[s]=[q.j6(a)]
else{if(q.bS(r,a)>=0)return!1
r.push(q.j6(a))}return!0},
E(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.kU(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.kU(s.c,b)
else return s.je(b)},
je(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cc(a)
r=n[s]
q=o.bS(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.kV(p)
return!0},
ah(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.j4()}},
kI(a,b){if(a[b]!=null)return!1
a[b]=this.j6(b)
return!0},
kU(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.kV(s)
delete a[b]
return!0},
j4(){this.r=this.r+1&1073741823},
j6(a){var s,r=this,q=new A.wm(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.j4()
return q},
kV(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.j4()},
cc(a){return J.a2(a)&1073741823},
bS(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.t(a[r].a,b))return r
return-1}}
A.wm.prototype={}
A.dv.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aq(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.qb.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:33}
A.e0.prototype={
C(a,b){return b instanceof A.aT&&this===b.a},
gt(a){var s=this
return new A.me(s,s.a,s.c,s.$ti.i("me<1>"))},
gl(a){return this.b},
ah(a){var s,r,q,p=this;++p.a
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
gD(a){var s
if(this.b===0)throw A.b(A.w("No such element"))
s=this.c
s.toString
return s},
ga3(a){var s
if(this.b===0)throw A.b(A.w("No such element"))
s=this.c.c
s.toString
return s},
gau(a){var s=this.b
if(s===0)throw A.b(A.w("No such element"))
if(s>1)throw A.b(A.w("Too many elements"))
s=this.c
s.toString
return s},
gA(a){return this.b===0},
h8(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.w("LinkedListEntry is already in a LinkedList"));++q.a
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
jl(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.me.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.aq(s))
if(r.b!==0)r=s.e&&s.d===r.gD(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aT.prototype={
geY(){var s=this.a
if(s==null||this===s.gD(0))return null
return this.c}}
A.F.prototype={
gt(a){return new A.ae(a,this.gl(a),A.bz(a).i("ae<F.E>"))},
a4(a,b){return this.h(a,b)},
gA(a){return this.gl(a)===0},
gW(a){return!this.gA(a)},
gD(a){if(this.gl(a)===0)throw A.b(A.at())
return this.h(a,0)},
ga3(a){if(this.gl(a)===0)throw A.b(A.at())
return this.h(a,this.gl(a)-1)},
gau(a){if(this.gl(a)===0)throw A.b(A.at())
if(this.gl(a)>1)throw A.b(A.hA())
return this.h(a,0)},
C(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.t(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.b(A.aq(a))}return!1},
dS(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gl(a))throw A.b(A.aq(a))}return!0},
eJ(a,b,c){var s,r,q,p=this.gl(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gl(a))throw A.b(A.aq(a))}q=c.$0()
return q},
J(a,b){var s
if(this.gl(a)===0)return""
s=A.to("",a,b)
return s.charCodeAt(0)==0?s:s},
kh(a,b){return new A.bv(a,b.i("bv<0>"))},
c5(a,b,c){return new A.a_(a,b,A.bz(a).i("@<F.E>").T(c).i("a_<1,2>"))},
bd(a,b){return A.cf(a,b,null,A.bz(a).i("F.E"))},
cv(a,b){return A.cf(a,0,A.bL(b,"count",t.S),A.bz(a).i("F.E"))},
wZ(a){var s,r=A.qc(A.bz(a).i("F.E"))
for(s=0;s<this.gl(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gl(a)
this.sl(a,s+1)
this.j(a,s,b)},
hs(a,b){return new A.bD(a,A.bz(a).i("@<F.E>").T(b).i("bD<1,2>"))},
c8(a,b){var s=b==null?A.Iq():b
A.l6(a,0,this.gl(a)-1,s)},
U(a,b,c){var s,r=this.gl(a)
if(c==null)c=r
A.b1(b,c,r)
s=A.P(this.fg(a,b,c),A.bz(a).i("F.E"))
return s},
b1(a,b){return this.U(a,b,null)},
fg(a,b,c){A.b1(b,c,this.gl(a))
return A.cf(a,b,c,A.bz(a).i("F.E"))},
jI(a,b,c,d){var s
A.b1(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
af(a,b,c,d,e){var s,r,q,p,o
A.b1(b,c,this.gl(a))
s=c-b
if(s===0)return
A.b0(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.ne(d,e).cw(0,!1)
r=0}p=J.K(q)
if(r+s>p.gl(q))throw A.b(A.Aw())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
cD(a,b,c){var s,r
if(t.j.b(c))this.ar(a,b,b+c.length,c)
else for(s=J.I(c);s.m();b=r){r=b+1
this.j(a,b,s.gn())}},
k(a){return A.q6(a,"[","]")},
$iG:1,
$io:1,
$ip:1}
A.Q.prototype={
bW(a,b,c){var s=A.m(this)
return A.AG(this,s.i("Q.K"),s.i("Q.V"),b,c)},
a2(a,b){var s,r,q,p
for(s=J.I(this.gO()),r=A.m(this).i("Q.V");s.m();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gaK(){return J.aL(this.gO(),new A.qy(this),A.m(this).i("S<Q.K,Q.V>"))},
c6(a,b,c,d){var s,r,q,p,o,n=A.D(c,d)
for(s=J.I(this.gO()),r=A.m(this).i("Q.V");s.m();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
G(a){return J.yq(this.gO(),a)},
gl(a){return J.ao(this.gO())},
gA(a){return J.bO(this.gO())},
gW(a){return J.eG(this.gO())},
gaP(){return new A.iO(this,A.m(this).i("iO<Q.K,Q.V>"))},
k(a){return A.qz(this)},
$iH:1}
A.qy.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.m(s).i("Q.V").a(r)
return new A.S(a,r,A.m(s).i("S<Q.K,Q.V>"))},
$S(){return A.m(this.a).i("S<Q.K,Q.V>(Q.K)")}}
A.qA.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:26}
A.iO.prototype={
gl(a){var s=this.a
return s.gl(s)},
gA(a){var s=this.a
return s.gA(s)},
gW(a){var s=this.a
return s.gW(s)},
gD(a){var s=this.a
s=s.h(0,J.c2(s.gO()))
return s==null?this.$ti.y[1].a(s):s},
gau(a){var s=this.a
s=s.h(0,J.yr(s.gO()))
return s==null?this.$ti.y[1].a(s):s},
ga3(a){var s=this.a
s=s.h(0,J.nd(s.gO()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.mh(J.I(s.gO()),s,this.$ti.i("mh<1,2>"))}}
A.mh.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.mH.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.hM.prototype={
bW(a,b,c){return this.a.bW(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
G(a){return this.a.G(a)},
a2(a,b){this.a.a2(0,b)},
gA(a){var s=this.a
return s.gA(s)},
gW(a){var s=this.a
return s.gW(s)},
gl(a){var s=this.a
return s.gl(s)},
gO(){return this.a.gO()},
k(a){return this.a.k(0)},
gaP(){return this.a.gaP()},
gaK(){return this.a.gaK()},
c6(a,b,c,d){return this.a.c6(0,b,c,d)},
$iH:1}
A.cx.prototype={
bW(a,b,c){return new A.cx(this.a.bW(0,b,c),b.i("@<0>").T(c).i("cx<1,2>"))}}
A.hI.prototype={
gt(a){var s=this
return new A.mf(s,s.c,s.d,s.b,s.$ti.i("mf<1>"))},
gA(a){return this.b===this.c},
gl(a){return(this.c-this.b&this.a.length-1)>>>0},
gD(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.at())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga3(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.at())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gau(a){var s,r=this
if(r.b===r.c)throw A.b(A.at())
if(r.gl(0)>1)throw A.b(A.hA())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a4(a,b){var s,r=this
A.Av(b,r.gl(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
E(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.t(r.a[s],b)){r.je(s);++r.d
return!0}return!1},
k(a){return A.q6(this,"{","}")},
je(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.mf.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a
if(r.c!==q.d)A.v(A.aq(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.cb.prototype={
gA(a){return this.gl(this)===0},
gW(a){return this.gl(this)!==0},
F(a,b){var s
for(s=J.I(b);s.m();)this.u(0,s.gn())},
c5(a,b,c){return new A.dS(this,b,A.m(this).i("@<1>").T(c).i("dS<1,2>"))},
gau(a){var s,r=this
if(r.gl(r)>1)throw A.b(A.hA())
s=r.gt(r)
if(!s.m())throw A.b(A.at())
return s.gn()},
k(a){return A.q6(this,"{","}")},
dS(a,b){var s
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
cv(a,b){return A.AZ(this,b,A.m(this).c)},
bd(a,b){return A.AX(this,b,A.m(this).c)},
gD(a){var s=this.gt(this)
if(!s.m())throw A.b(A.at())
return s.gn()},
ga3(a){var s,r=this.gt(this)
if(!r.m())throw A.b(A.at())
do s=r.gn()
while(r.m())
return s},
a4(a,b){var s,r
A.b0(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.ke(b,b-r,this,null,"index"))},
$iG:1,
$io:1,
$ieb:1}
A.iW.prototype={}
A.j6.prototype={}
A.mc.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rK(b):s}},
gl(a){return this.b==null?this.c.a:this.dq().length},
gA(a){return this.gl(0)===0},
gW(a){return this.gl(0)>0},
gO(){if(this.b==null){var s=this.c
return new A.U(s,A.m(s).i("U<1>"))}return new A.md(this)},
gaP(){var s,r=this
if(r.b==null){s=r.c
return new A.av(s,A.m(s).i("av<2>"))}return A.e3(r.dq(),new A.wh(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.G(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tB().j(0,b,c)},
G(a){if(this.b==null)return this.c.G(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a2(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a2(0,b)
s=o.dq()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.xk(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aq(o))}},
dq(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
tB(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.D(t.N,t.z)
r=n.dq()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.c.ah(r)
n.a=n.b=null
return n.c=s},
rK(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.xk(this.a[a])
return this.b[a]=s}}
A.wh.prototype={
$1(a){return this.a.h(0,a)},
$S:44}
A.md.prototype={
gl(a){return this.a.gl(0)},
a4(a,b){var s=this.a
return s.b==null?s.gO().a4(0,b):s.dq()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gO()
s=s.gt(s)}else{s=s.dq()
s=new J.eH(s,s.length,A.a6(s).i("eH<1>"))}return s},
C(a,b){return this.a.G(b)}}
A.wf.prototype={
p(){var s,r,q=this
q.oa()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aw(A.Cc(r.charCodeAt(0)==0?r:r,q.b))
s.aL()}}
A.wZ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:45}
A.wY.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:45}
A.jy.prototype={
gb7(){return"us-ascii"},
jD(a){return B.bf.v(a)}}
A.mG.prototype={
v(a){var s,r,q,p=A.b1(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aI(a,"string","Contains invalid characters."))
o[r]=q}return o},
bP(a){return new A.wQ(new A.fq(a),this.a)}}
A.jz.prototype={}
A.wQ.prototype={
p(){this.a.a.p()},
bH(a,b,c,d){var s,r,q,p
A.b1(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.c4(a)
p=this.a.a
p.u(0,s.U(s,b,c))
if(d)p.p()}}
A.ns.prototype={
gjE(){return B.bj},
we(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.b1(a1,a2,a0.length)
s=$.zQ()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.xX(a0.charCodeAt(l))
h=A.xX(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.ab("")
e=p}else e=p
e.a+=B.a.q(a0,q,r)
d=A.bh(k)
e.a+=d
q=l
continue}}throw A.b(A.a3("Invalid base64 data",a0,r))}if(p!=null){e=B.a.q(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.A3(a0,n,a2,o,m,d)
else{c=B.b.aj(d-1,4)+1
if(c===1)throw A.b(A.a3(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.d7(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.A3(a0,n,a2,o,m,b)
else{c=B.b.aj(b,4)
if(c===1)throw A.b(A.a3(a,a0,a2))
if(c>1)a0=B.a.d7(a0,a2,a2,c===2?"==":"=")}return a0}}
A.jE.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.lQ(u.U).mj(a,0,s,!0)
s.toString
return A.dl(s,0,null)},
bP(a){return new A.uM(a,new A.v2(u.U))}}
A.lQ.prototype={
ma(a){return new Uint8Array(a)},
mj(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.b.K(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.ma(o)
r.a=A.G_(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.v2.prototype={
ma(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bB(B.e.ga5(s),s.byteOffset,a)}}
A.uZ.prototype={
u(a,b){this.kX(b,0,J.ao(b),!1)},
p(){this.kX(B.cd,0,0,!0)}}
A.uM.prototype={
kX(a,b,c,d){var s=this.b.mj(a,b,c,d)
if(s!=null)this.a.a.aw(A.dl(s,0,null))
if(d)this.a.a.aL()}}
A.jD.prototype={
v(a){var s,r,q=A.b1(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.lP()
r=s.jA(a,0,q)
r.toString
s.jt(a,q)
return r},
bP(a){return new A.uY(a,new A.lP())}}
A.lP.prototype={
jA(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Bf(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.FX(a,b,c,q)
r.a=A.FZ(a,b,c,s,0,r.a)
return s},
jt(a,b){var s=this.a
if(s<-1)throw A.b(A.a3("Missing padding character",a,b))
if(s>0)throw A.b(A.a3("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.uY.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.jA(b,0,r)
if(s!=null)this.a.a.aw(s)},
p(){this.b.jt(null,null)
this.a.a.aL()},
bH(a,b,c,d){var s,r
A.b1(b,c,a.length)
if(b===c)return
s=this.b
r=s.jA(a,b,c)
if(r!=null)this.a.a.aw(r)
if(d){s.jt(a,c)
this.a.a.aL()}}}
A.nz.prototype={}
A.fq.prototype={
u(a,b){this.a.u(0,b)},
p(){this.a.p()}}
A.lT.prototype={
u(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.K(b)
if(n.gl(b)>p.length-o){p=q.b
s=n.gl(b)+p.length-1
s|=B.b.ac(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.e.ar(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.e.ar(p,o,o+n.gl(b),b)
q.c=q.c+n.gl(b)},
p(){this.a.$1(B.e.U(this.b,0,this.c))}}
A.jP.prototype={}
A.my.prototype={
u(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.ek.prototype={
u(a,b){this.b.u(0,b)},
bG(a,b){A.bL(a,"error",t.K)
this.a.bG(a,b)},
p(){this.b.p()},
$ibs:1}
A.jQ.prototype={}
A.ar.prototype={
bP(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.k(0)))},
u4(a){return new A.iy(new A.om(this),a,t.fM.T(A.m(this).i("ar.T")).i("iy<1,2>"))}}
A.om.prototype={
$1(a){return new A.ek(a,this.a.bP(a),t.oW)},
$S:87}
A.dU.prototype={}
A.hG.prototype={
k(a){var s=A.hm(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.km.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.q9.prototype={
aA(a,b){var s=A.Cc(a,this.guo().a)
return s},
a7(a,b){var s=A.Gj(a,this.gjE().b,null)
return s},
gjE(){return B.bR},
guo(){return B.bQ}}
A.ko.prototype={
bP(a){return new A.wg(null,this.b,new A.mA(a))}}
A.wg.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.w("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.ab("")
q=new A.wM(r,s)
A.Bu(b,q,p.b,p.a)
if(r.a.length!==0)q.iJ()
s.p()},
p(){}}
A.kn.prototype={
bP(a){return new A.wf(this.a,a,new A.ab(""))}}
A.wj.prototype={
n0(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.ig(a,s,r)
s=r+1
n.an(92)
n.an(117)
n.an(100)
p=q>>>8&15
n.an(p<10?48+p:87+p)
p=q>>>4&15
n.an(p<10?48+p:87+p)
p=q&15
n.an(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.ig(a,s,r)
s=r+1
n.an(92)
switch(q){case 8:n.an(98)
break
case 9:n.an(116)
break
case 10:n.an(110)
break
case 12:n.an(102)
break
case 13:n.an(114)
break
default:n.an(117)
n.an(48)
n.an(48)
p=q>>>4&15
n.an(p<10?48+p:87+p)
p=q&15
n.an(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.ig(a,s,r)
s=r+1
n.an(92)
n.an(q)}}if(s===0)n.b_(a)
else if(s<m)n.ig(a,s,m)},
iy(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.km(a,null))}s.push(a)},
ie(a){var s,r,q,p,o=this
if(o.n_(a))return
o.iy(a)
try{s=o.b.$1(a)
if(!o.n_(s)){q=A.AD(a,null,o.glr())
throw A.b(q)}o.a.pop()}catch(p){r=A.C(p)
q=A.AD(a,r,o.glr())
throw A.b(q)}},
n_(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xl(a)
return!0}else if(a===!0){r.b_("true")
return!0}else if(a===!1){r.b_("false")
return!0}else if(a==null){r.b_("null")
return!0}else if(typeof a=="string"){r.b_('"')
r.n0(a)
r.b_('"')
return!0}else if(t.j.b(a)){r.iy(a)
r.xj(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iy(a)
s=r.xk(a)
r.a.pop()
return s}else return!1},
xj(a){var s,r,q=this
q.b_("[")
s=J.K(a)
if(s.gW(a)){q.ie(s.h(a,0))
for(r=1;r<s.gl(a);++r){q.b_(",")
q.ie(s.h(a,r))}}q.b_("]")},
xk(a){var s,r,q,p,o=this,n={}
if(a.gA(a)){o.b_("{}")
return!0}s=a.gl(a)*2
r=A.aG(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a2(0,new A.wk(n,r))
if(!n.b)return!1
o.b_("{")
for(p='"';q<s;q+=2,p=',"'){o.b_(p)
o.n0(A.M(r[q]))
o.b_('":')
o.ie(r[q+1])}o.b_("}")
return!0}}
A.wk.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:26}
A.wi.prototype={
glr(){var s=this.c
return s instanceof A.ab?s.k(0):null},
xl(a){this.c.ic(B.t.k(a))},
b_(a){this.c.ic(a)},
ig(a,b,c){this.c.ic(B.a.q(a,b,c))},
an(a){this.c.an(a)}}
A.kp.prototype={
gb7(){return"iso-8859-1"},
jD(a){return B.bZ.v(a)}}
A.kq.prototype={}
A.lg.prototype={
u(a,b){this.bH(b,0,b.length,!1)}}
A.wM.prototype={
an(a){var s=this.a,r=A.bh(a)
if((s.a+=r).length>16)this.iJ()},
ic(a){if(this.a.a.length!==0)this.iJ()
this.b.u(0,a)},
iJ(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.j_.prototype={
p(){},
bH(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bh(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
u(a,b){this.a.a+=b}}
A.mA.prototype={
u(a,b){this.a.a.aw(b)},
bH(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aw(a)
else r.aw(B.a.q(a,b,c))
if(d)r.aL()},
p(){this.a.a.aL()}}
A.wX.prototype={
p(){var s,r,q,p=this.c
this.a.vm(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bH(q,0,q.length,!0)}else r.p()},
u(a,b){this.bH(b,0,J.ao(b),!1)},
bH(a,b,c,d){var s,r=this.c,q=this.a.cH(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bH(s,0,s.length,!1)
r.a=""
return}}}
A.lv.prototype={
gb7(){return"utf-8"},
ul(a,b){return new A.cZ((b===!0?B.d4:B.aw).a).cH(a,0,null,!0)},
hw(a){return this.ul(a,null)},
jD(a){return B.f.v(a)}}
A.lw.prototype={
v(a){var s,r,q=A.b1(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.mJ(s)
if(r.l8(a,0,q)!==q)r.hj()
return B.e.U(s,0,r.b)},
bP(a){return new A.x_(new A.fq(a),new Uint8Array(1024))}}
A.mJ.prototype={
hj(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.E(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
lY(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.E(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.hj()
return!1}},
l8(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.E(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.lY(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hj()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.E(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.E(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.x_.prototype={
p(){if(this.a!==0){this.bH("",0,0,!0)
return}this.d.a.p()},
bH(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.lY(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.l8(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hj()
else n.a=a.charCodeAt(b);++b}s.u(0,B.e.U(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.im.prototype={
bP(a){return new A.wX(new A.cZ(this.a),new A.mA(a),new A.ab(""))}}
A.cZ.prototype={
cH(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.b1(b,c,J.ao(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.GP(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.GO(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.iC(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.BR(p)
m.b=0
throw A.b(A.a3(n,a,q+m.c))}return o},
iC(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.K(b+c,2)
r=q.iC(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.iC(a,s,c,d)}return q.un(a,b,c,d)},
vm(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bh(65533)
a.a+=s}else throw A.b(A.a3(A.BR(77),null,null))},
un(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.ab(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bh(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bh(k)
h.a+=q
break
case 65:q=A.bh(k)
h.a+=q;--g
break
default:q=A.bh(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bh(a[m])
h.a+=q}else{q=A.dl(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bh(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.mV.prototype={}
A.ay.prototype={
bw(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bw(p,r)
return new A.ay(p===0?!1:s,r,p)},
oY(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.c1()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bw(s,q)
return new A.ay(n===0?!1:o,q,n)},
p0(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.c1()
s=k-a
if(s<=0)return l.a?$.zS():$.c1()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bw(s,q)
m=new A.ay(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fn(0,$.eE())
return m},
bx(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.b.K(b,16)
if(B.b.aj(b,16)===0)return n.oY(r)
q=s+r+1
p=new Uint16Array(q)
A.Bn(n.b,s,b,p)
s=n.a
o=A.bw(q,p)
return new A.ay(o===0?!1:s,p,o)},
di(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.K(b,16)
q=B.b.aj(b,16)
if(q===0)return j.p0(r)
p=s-r
if(p<=0)return j.a?$.zS():$.c1()
o=j.b
n=new Uint16Array(p)
A.G5(o,s,b,n)
s=j.a
m=A.bw(p,n)
l=new A.ay(m===0?!1:s,n,m)
if(s){if((o[r]&B.b.bx(1,q)-1)>>>0!==0)return l.fn(0,$.eE())
for(k=0;k<r;++k)if(o[k]!==0)return l.fn(0,$.eE())}return l},
X(a,b){var s,r=this.a
if(r===b.a){s=A.v_(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iu(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iu(p,b)
if(o===0)return $.c1()
if(n===0)return p.a===b?p:p.bw(0)
s=o+1
r=new Uint16Array(s)
A.G1(p.b,o,a.b,n,r)
q=A.bw(s,r)
return new A.ay(q===0?!1:b,r,q)},
fo(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.c1()
s=a.c
if(s===0)return p.a===b?p:p.bw(0)
r=new Uint16Array(o)
A.lR(p.b,o,a.b,s,r)
q=A.bw(o,r)
return new A.ay(q===0?!1:b,r,q)},
fe(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iu(b,r)
if(A.v_(q.b,p,b.b,s)>=0)return q.fo(b,r)
return b.fo(q,!r)},
fn(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bw(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iu(b,r)
if(A.v_(q.b,p,b.b,s)>=0)return q.fo(b,r)
return b.fo(q,!r)},
bb(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.c1()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.Bo(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bw(s,p)
return new A.ay(m===0?!1:n,p,m)},
oX(a){var s,r,q,p
if(this.c<a.c)return $.c1()
this.l3(a)
s=$.zb.bq()-$.ix.bq()
r=A.zd($.za.bq(),$.ix.bq(),$.zb.bq(),s)
q=A.bw(s,r)
p=new A.ay(!1,r,q)
return this.a!==a.a&&q>0?p.bw(0):p},
t4(a){var s,r,q,p=this
if(p.c<a.c)return p
p.l3(a)
s=A.zd($.za.bq(),0,$.ix.bq(),$.ix.bq())
r=A.bw($.ix.bq(),s)
q=new A.ay(!1,s,r)
if($.zc.bq()>0)q=q.di(0,$.zc.bq())
return p.a&&q.c>0?q.bw(0):q},
l3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Bk&&a.c===$.Bm&&c.b===$.Bj&&a.b===$.Bl)return
s=a.b
r=a.c
q=16-B.b.gm6(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.Bi(s,r,q,p)
n=new Uint16Array(b+5)
m=A.Bi(c.b,b,q,n)}else{n=A.zd(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.ze(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.v_(n,m,j,i)>=0){g&2&&A.E(n)
n[m]=1
A.lR(n,h,j,i,n)}else{g&2&&A.E(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.lR(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.G2(l,n,e);--k
A.Bo(d,f,0,n,k,o)
if(n[e]<d){i=A.ze(f,o,k,j)
A.lR(n,h,j,i,n)
while(--d,n[e]<d)A.lR(n,h,j,i,n)}--e}$.Bj=c.b
$.Bk=b
$.Bl=s
$.Bm=r
$.za.b=n
$.zb.b=h
$.ix.b=o
$.zc.b=q},
gI(a){var s,r,q,p=new A.v0(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.v1().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.ay&&this.X(0,b)===0},
k(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.b.k(-n.b[0])
return B.b.k(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bw(0):n
while(r.c>1){q=$.zR()
if(q.c===0)A.v(B.bl)
p=r.t4(q).k(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.oX(q)}s.push(B.b.k(r.b[0]))
if(m)s.push("-")
return new A.e9(s,t.hF).dX(0)},
$iam:1}
A.v0.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:102}
A.v1.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:179}
A.m6.prototype={
m4(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mg(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.wW.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.I(b),r=this.a;s.m();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.aa(b)}},
$S:49}
A.p0.prototype={
$0(){var s=this
return A.v(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:31}
A.aN.prototype={
iw(a){var s=1000,r=B.b.aj(a,s),q=B.b.K(a-r,s),p=this.b+r,o=B.b.aj(p,s),n=this.c
return new A.aN(A.p1(this.a+B.b.K(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aN&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.c8(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
jR(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
X(a,b){var s=B.b.X(this.a,b.a)
if(s!==0)return s
return B.b.X(this.b,b.b)},
x_(){var s=this
if(s.c)return s
return new A.aN(s.a,s.b,!0)},
k(a){var s=this,r=A.Eo(A.yW(s)),q=A.k_(A.yU(s)),p=A.k_(A.rz(s)),o=A.k_(A.yS(s)),n=A.k_(A.yT(s)),m=A.k_(A.yV(s)),l=A.Ai(A.AP(s)),k=s.b,j=k===0?"":A.Ai(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iam:1}
A.as.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.as&&this.a===b.a},
gI(a){return B.b.gI(this.a)},
X(a,b){return B.b.X(this.a,b.a)},
k(a){var s,r,q,p,o,n=this.a,m=B.b.K(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.K(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.K(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.hY(B.b.k(n%1e6),6,"0")},
$iam:1}
A.vG.prototype={
k(a){return this.ab()}}
A.a8.prototype={
gc9(){return A.Fe(this)}}
A.jA.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hm(s)
return"Assertion failed"}}
A.cS.prototype={}
A.bC.prototype={
giI(){return"Invalid argument"+(!this.a?"(s)":"")},
giH(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.giI()+q+o
if(!s.a)return n
return n+s.giH()+": "+A.hm(s.gjQ())},
gjQ(){return this.b}}
A.cL.prototype={
gjQ(){return this.b},
giI(){return"RangeError"},
giH(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.hx.prototype={
gjQ(){return this.b},
giI(){return"RangeError"},
giH(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$icL:1,
gl(a){return this.f}}
A.cy.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.lo.prototype={
k(a){return"UnimplementedError: "+this.a},
$icy:1}
A.bk.prototype={
k(a){return"Bad state: "+this.a}}
A.jS.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hm(s)+"."}}
A.kK.prototype={
k(a){return"Out of Memory"},
gc9(){return null},
$ia8:1}
A.id.prototype={
k(a){return"Stack Overflow"},
gc9(){return null},
$ia8:1}
A.m5.prototype={
k(a){return"Exception: "+this.a},
$iJ:1}
A.b8.prototype={
k(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.q(e,0,75)+"..."
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
k=""}return g+l+B.a.q(e,i,j)+k+"\n"+B.a.bb(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iJ:1,
gjW(){return this.a},
gfl(){return this.b},
gaq(){return this.c}}
A.kg.prototype={
gc9(){return null},
k(a){return"IntegerDivisionByZeroException"},
$ia8:1,
$icy:1,
$iJ:1}
A.o.prototype={
hs(a,b){return A.eJ(this,A.m(this).i("o.E"),b)},
c5(a,b,c){return A.e3(this,b,A.m(this).i("o.E"),c)},
kh(a,b){return new A.bv(this,b.i("bv<0>"))},
C(a,b){var s
for(s=this.gt(this);s.m();)if(J.t(s.gn(),b))return!0
return!1},
vo(a,b,c){var s,r
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
vp(a,b,c){return this.vo(0,b,c,t.z)},
dS(a,b){var s
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
J(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.ap(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=J.ap(q.gn())
while(q.m())}else{r=s
do r=r+b+J.ap(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
cw(a,b){var s=A.m(this).i("o.E")
if(b)s=A.P(this,s)
else{s=A.P(this,s)
s.$flags=1
s=s}return s},
ea(a){return this.cw(0,!0)},
gl(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gA(a){return!this.gt(this).m()},
gW(a){return!this.gA(this)},
cv(a,b){return A.AZ(this,b,A.m(this).i("o.E"))},
bd(a,b){return A.AX(this,b,A.m(this).i("o.E"))},
gD(a){var s=this.gt(this)
if(!s.m())throw A.b(A.at())
return s.gn()},
ga3(a){var s,r=this.gt(this)
if(!r.m())throw A.b(A.at())
do s=r.gn()
while(r.m())
return s},
gau(a){var s,r=this.gt(this)
if(!r.m())throw A.b(A.at())
s=r.gn()
if(r.m())throw A.b(A.hA())
return s},
eJ(a,b,c){var s,r
for(s=this.gt(this);s.m();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a4(a,b){var s,r
A.b0(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.ke(b,b-r,this,null,"index"))},
k(a){return A.EJ(this,"(",")")}}
A.S.prototype={
k(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.R.prototype={
gI(a){return A.j.prototype.gI.call(this,0)},
k(a){return"null"}}
A.j.prototype={$ij:1,
R(a,b){return this===b},
gI(a){return A.e8(this)},
k(a){return"Instance of '"+A.kR(this)+"'"},
gak(a){return A.d1(this)},
toString(){return this.k(this)}}
A.mC.prototype={
k(a){return""},
$iaw:1}
A.ie.prototype={
gv1(){var s=this.gmi()
if($.jr()===1e6)return s
return s*1000},
gmh(){var s=this.gmi()
if($.jr()===1000)return s
return B.b.K(s,1000)},
av(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.kS.$0()-r)
s.b=null}},
gmi(){var s=this.b
if(s==null)s=$.kS.$0()
return s-this.a}}
A.l0.prototype={
gt(a){return new A.l_(this.a)},
ga3(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.w("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.BY(r,s)}return s}}
A.l_.prototype={
gn(){return this.d},
m(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.BY(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.ab.prototype={
gl(a){return this.a.length},
ic(a){var s=A.r(a)
this.a+=s},
an(a){var s=A.bh(a)
this.a+=s},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.tS.prototype={
$2(a,b){throw A.b(A.a3("Illegal IPv6 address, "+a,this.a,b))},
$S:69}
A.j7.prototype={
glM(){var s,r,q,p,o=this,n=o.w
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
gwo(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ag(s,1)
r=s.length===0?B.q:A.dd(new A.a_(A.l(s.split("/"),t.s),A.Iw(),t.iZ),t.N)
q.x!==$&&A.yj()
p=q.x=r}return p},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.a.gI(r.glM())
r.y!==$&&A.yj()
r.y=s
q=s}return q},
gkg(){return this.b},
gd_(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.aa(s,"v",1))return B.a.q(s,1,s.length-1)
return s},
geX(){var s=this.d
return s==null?A.BG(this.a):s},
gf1(){var s=this.f
return s==null?"":s},
ghE(){var s=this.r
return s==null?"":s},
vX(a){var s=this.a
if(a.length!==s.length)return!1
return A.H3(a,s,0)>=0},
f5(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.zn(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.wS(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.wT(null,0,0,a)
else k=j.f
return A.j8(b,q,o,p,l,k,j.r)},
ka(a){return this.f5(a,null)},
mO(a){return this.f5(null,a)},
lk(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.aa(b,"../",r);){r+=3;++s}q=B.a.d1(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.hR(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.d7(a,q+1,null,B.a.ag(b,r-3*s))},
bn(a){return this.f6(A.lu(a))},
f6(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaS().length!==0)return a
else{s=h.a
if(a.gjL()){r=a.mO(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gms())m=a.ghO()?a.gf1():h.f
else{l=A.GN(h,n)
if(l>0){k=B.a.q(n,0,l)
n=a.gjK()?k+A.eu(a.gbl()):k+A.eu(h.lk(B.a.ag(n,k.length),a.gbl()))}else if(a.gjK())n=A.eu(a.gbl())
else if(n.length===0)if(p==null)n=s.length===0?a.gbl():A.eu(a.gbl())
else n=A.eu("/"+a.gbl())
else{j=h.lk(n,a.gbl())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.eu(j)
else n=A.zp(j,!r||p!=null)}m=a.ghO()?a.gf1():null}}}i=a.gjM()?a.ghE():null
return A.j8(s,q,p,o,n,m,i)},
gjL(){return this.c!=null},
ghO(){return this.f!=null},
gjM(){return this.r!=null},
gms(){return this.e.length===0},
gjK(){return B.a.S(this.e,"/")},
kd(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gd_()!=="")A.v(A.Y(u.Q))
s=r.gwo()
A.GG(s,!1)
q=A.to(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
k(a){return this.glM()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gaS())if(p.c!=null===b.gjL())if(p.b===b.gkg())if(p.gd_()===b.gd_())if(p.geX()===b.geX())if(p.e===b.gbl()){r=p.f
q=r==null
if(!q===b.ghO()){if(q)r=""
if(r===b.gf1()){r=p.r
q=r==null
if(!q===b.gjM()){s=q?"":r
s=s===b.ghE()}}}}return s},
$ils:1,
gaS(){return this.a},
gbl(){return this.e}}
A.wV.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.fL(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.fL(1,b,B.k,!0)
s.a+=r}},
$S:91}
A.wU.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.I(b),r=this.a;s.m();)r.$2(a,s.gn())},
$S:49}
A.tR.prototype={
gmZ(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.c1(m,"?",s)
q=m.length
if(r>=0){p=A.j9(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.m0("data","",n,n,A.j9(m,s,q,128,!1,!1),p,n)}return m},
k(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bY.prototype={
gjL(){return this.c>0},
gjN(){return this.c>0&&this.d+1<this.e},
ghO(){return this.f<this.r},
gjM(){return this.r<this.a.length},
gjK(){return B.a.aa(this.a,"/",this.e)},
gms(){return this.e===this.f},
gaS(){var s=this.w
return s==null?this.w=this.oP():s},
oP(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.q(r.a,0,q)},
gkg(){var s=this.c,r=this.b+3
return s>r?B.a.q(this.a,r,s-1):""},
gd_(){var s=this.c
return s>0?B.a.q(this.a,s,this.d):""},
geX(){var s,r=this
if(r.gjN())return A.ax(B.a.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbl(){return B.a.q(this.a,this.e,this.f)},
gf1(){var s=this.f,r=this.r
return s<r?B.a.q(this.a,s+1,r):""},
ghE(){var s=this.r,r=this.a
return s<r.length?B.a.ag(r,s+1):""},
lg(a){var s=this.d+1
return s+a.length===this.e&&B.a.aa(this.a,a,s)},
wP(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bY(B.a.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
f5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.zn(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gaS()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.q(h.a,h.b+3,q):""
o=h.gjN()?h.geX():g
if(s)o=A.wS(o,b)
q=h.c
if(q>0)n=B.a.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.wT(g,0,0,a)
else{k=h.r
j=m<k?B.a.q(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ag(q,m+1):g
return A.j8(b,p,n,o,l,j,i)},
ka(a){return this.f5(a,null)},
mO(a){return this.f5(null,a)},
bn(a){return this.f6(A.lu(a))},
f6(a){if(a instanceof A.bY)return this.tp(this,a)
return this.lO().f6(a)},
tp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lg("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lg("443")
if(p){o=r+1
return new A.bY(B.a.q(a.a,0,o)+B.a.ag(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.lO().f6(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bY(B.a.q(a.a,0,r)+B.a.ag(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bY(B.a.q(a.a,0,r)+B.a.ag(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wP()}s=b.a
if(B.a.aa(s,"/",n)){m=a.e
l=A.By(this)
k=l>0?l:m
o=k-n
return new A.bY(B.a.q(a.a,0,k)+B.a.ag(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.aa(s,"../",n))n+=3
o=j-n+1
return new A.bY(B.a.q(a.a,0,j)+"/"+B.a.ag(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.By(this)
if(l>=0)g=l
else for(g=j;B.a.aa(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.aa(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.aa(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bY(B.a.q(h,0,i)+d+B.a.ag(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kd(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gaS()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.v(A.Y(u.Q))
q=B.a.q(s,r.e,q)
return q},
gI(a){var s=this.x
return s==null?this.x=B.a.gI(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.k(0)},
lO(){var s=this,r=null,q=s.gaS(),p=s.gkg(),o=s.c>0?s.gd_():r,n=s.gjN()?s.geX():r,m=s.a,l=s.f,k=B.a.q(m,s.e,l),j=s.r
l=l<j?s.gf1():r
return A.j8(q,p,o,n,k,l,j<m.length?s.ghE():r)},
k(a){return this.a},
$ils:1}
A.m0.prototype={}
A.k7.prototype={
j(a,b,c){this.a.set(b,c)},
k(a){return"Expando:"+A.r(this.b)}}
A.kI.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iJ:1}
A.pw.prototype={
$2(a,b){this.a.bu(new A.pu(a),new A.pv(b),t.X)},
$S:67}
A.pu.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:97}
A.pv.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.In(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.v("Attempting to box non-Dart object.")
s={}
s[$.DF()]=a
p.error=s
p.stack=b.k(0)
r=this.a
r.call(r,p)},
$S:10}
A.y1.prototype={
$1(a){var s,r,q,p
if(A.Cb(a))return a
s=this.a
if(s.G(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.I(a.gO());s.m();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.U.b(a)){p=[]
s.j(0,a,p)
B.c.F(p,J.aL(a,this,t.z))
return p}else return a},
$S:14}
A.y7.prototype={
$1(a){return this.a.az(a)},
$S:22}
A.y8.prototype={
$1(a){if(a==null)return this.a.aG(new A.kI(a===undefined))
return this.a.aG(a)},
$S:22}
A.xE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Ca(a))return a
s=this.a
a.toString
if(s.G(a))return s.h(0,a)
if(a instanceof Date)return new A.aN(A.p1(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.O("structured clone of RegExp",null))
if(a instanceof Promise)return A.a0(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.D(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aA(o),q=s.gt(o);q.m();)n.push(A.n3(q.gn()))
for(m=0;m<s.gl(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.K(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:14}
A.wc.prototype={
cs(a){if(a<=0||a>4294967296)throw A.b(A.aO(u.E+a))
return Math.random()*a>>>0},
mD(){return Math.random()}}
A.wd.prototype={
om(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cs(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aO(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.E(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ah(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bB(B.al.ga5(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.k5.prototype={}
A.Z.prototype={
h(a,b){var s,r=this
if(!r.j0(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("Z.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.j0(b))return
s.c.j(0,s.a.$1(b),new A.S(b,c,s.$ti.i("S<Z.K,Z.V>")))},
F(a,b){b.a2(0,new A.nB(this))},
bW(a,b,c){return this.c.bW(0,b,c)},
G(a){var s=this
if(!s.j0(a))return!1
return s.c.G(s.a.$1(s.$ti.i("Z.K").a(a)))},
gaK(){var s=this.c,r=A.m(s).i("aB<1,2>")
return A.e3(new A.aB(s,r),new A.nC(this),r.i("o.E"),this.$ti.i("S<Z.K,Z.V>"))},
a2(a,b){this.c.a2(0,new A.nD(this,b))},
gA(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gO(){var s=this.c,r=A.m(s).i("av<2>")
return A.e3(new A.av(s,r),new A.nE(this),r.i("o.E"),this.$ti.i("Z.K"))},
gl(a){return this.c.a},
c6(a,b,c,d){return this.c.c6(0,new A.nF(this,b,c,d),c,d)},
gaP(){var s=this.c,r=A.m(s).i("av<2>")
return A.e3(new A.av(s,r),new A.nG(this),r.i("o.E"),this.$ti.i("Z.V"))},
k(a){return A.qz(this)},
j0(a){return this.$ti.i("Z.K").b(a)},
$iH:1}
A.nB.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(Z.K,Z.V)")}}
A.nC.prototype={
$1(a){var s=a.b
return new A.S(s.a,s.b,this.a.$ti.i("S<Z.K,Z.V>"))},
$S(){return this.a.$ti.i("S<Z.K,Z.V>(S<Z.C,S<Z.K,Z.V>>)")}}
A.nD.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(Z.C,S<Z.K,Z.V>)")}}
A.nE.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("Z.K(S<Z.K,Z.V>)")}}
A.nF.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.T(this.c).T(this.d).i("S<1,2>(Z.C,S<Z.K,Z.V>)")}}
A.nG.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("Z.V(S<Z.K,Z.V>)")}}
A.k1.prototype={
Y(a,b){return J.t(a,b)},
a8(a){return J.a2(a)}}
A.hB.prototype={
Y(a,b){var s,r,q,p
if(a===b)return!0
s=J.I(a)
r=J.I(b)
for(q=this.a;;){p=s.m()
if(p!==r.m())return!1
if(!p)return!0
if(!q.Y(s.gn(),r.gn()))return!1}},
a8(a){var s,r,q
for(s=J.I(a),r=this.a,q=0;s.m();){q=q+r.a8(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.e1.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.K(a)
r=s.gl(a)
q=J.K(b)
if(r!==q.gl(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.Y(s.h(a,o),q.h(b,o)))return!1
return!0},
a8(a){var s,r,q,p
for(s=J.K(a),r=this.a,q=0,p=0;p<s.gl(a);++p){q=q+r.a8(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.fJ.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.yH(s.gv8(),s.gvP(),s.gvY(),A.m(this).i("fJ.E"),t.S)
for(s=J.I(a),q=0;s.m();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.I(b);s.m();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
a8(a){var s,r,q
for(s=J.I(a),r=this.a,q=0;s.m();)q=q+r.a8(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.f7.prototype={}
A.fB.prototype={
gI(a){var s=this.a
return 3*s.a.a8(this.b)+7*s.b.a8(this.c)&2147483647},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.fB){s=this.a
s=s.a.Y(this.b,b.b)&&s.b.Y(this.c,b.c)}else s=!1
return s}}
A.hL.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gl(a)!==b.gl(b))return!1
s=A.yH(null,null,null,t.fA,t.S)
for(r=J.I(a.gO());r.m();){q=r.gn()
p=new A.fB(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.I(b.gO());r.m();){q=r.gn()
p=new A.fB(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
a8(a){var s,r,q,p,o,n,m,l
for(s=J.I(a.gO()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.m();){n=s.gn()
m=r.a8(n)
l=a.h(0,n)
o=o+3*m+7*q.a8(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.k0.prototype={
Y(a,b){var s,r=this
if(a instanceof A.cb)return b instanceof A.cb&&new A.f7(r,t.cu).Y(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.hL(r,r,t.a3).Y(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.e1(r,t.hI).Y(a,b)
s=t.U
if(s.b(a))return s.b(b)&&new A.hB(r,t.nZ).Y(a,b)
return J.t(a,b)},
a8(a){var s=this
if(a instanceof A.cb)return new A.f7(s,t.cu).a8(a)
if(t.f.b(a))return new A.hL(s,s,t.a3).a8(a)
if(t.j.b(a))return new A.e1(s,t.hI).a8(a)
if(t.U.b(a))return new A.hB(s,t.nZ).a8(a)
return J.a2(a)},
vZ(a){return!0}}
A.kH.prototype={
sl(a,b){A.AK()},
u(a,b){return A.AK()}}
A.lr.prototype={
j(a,b,c){return A.FI()}}
A.c5.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.c5){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gI(a){return A.qY(this.a)},
k(a){return A.aD(this.a)}}
A.eM.prototype={
u(a,b){if(this.a!=null)throw A.b(A.w("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.w("add must be called once."))}}
A.kb.prototype={
v(a){var s=new A.eM(),r=A.mw(s)
r.u(0,a)
r.p()
r=s.a
r.toString
return r}}
A.pB.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.w("Hash.add() called after close()."))
s.r=s.r+J.ao(b)
s.kH(b)},
kH(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.nb(B.e.ga5(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.K(a),o=0;;j=0){n=j+p.gl(a)-o
if(n<h){B.e.af(i,j,n,a,o)
k.e=n
return}B.e.af(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.E(s)
s[m]=l;++m}while(m<q)
k.x7(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.v(A.Y("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.nb(B.e.ga5(q))
m=B.b.K(p,4294967296)
n.$flags&2&&A.E(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kH(q)
s=l.a
s.u(0,new A.c5(l.oE()))
s.p()},
oE(){var s,r,q,p,o,n,m
if(B.aD===$.jq())return J.DS(B.u.ga5(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.nb(B.e.ga5(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.E(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.mu.prototype={
bP(a){var s=new Uint32Array(A.aY(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.fq(new A.mv(s,r,a,q,new Uint32Array(16)))}}
A.wz.prototype={
x7(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.E(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.E(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.c4[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.E(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.mv.prototype={}
A.nw.prototype={
gcC(){return this.c},
gd2(){return this.d}}
A.ny.prototype={
jp(a,b){var s=this.o_(a,b),r=$.zU()
if(r&&b!==24)return new A.nw(b,a,null)
return s}}
A.h5.prototype={
gI(a){return A.c8(B.cQ,this.gcC(),this.gd2(),B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.h5&&this.gcC()===b.gcC()&&this.gd2()===b.gd2()},
k(a){var s=this
if(s.gd2()===12)return A.d1(s).k(0)+".with"+s.gcC()*8+"bits()"
return A.d1(s).k(0)+".with"+s.gcC()*8+"bits(nonceLength: "+s.gd2()+")"},
mU(){var s=this.gcC()
return A.Ag(this.gd2(),this.a,s)}}
A.nM.prototype={}
A.on.prototype={}
A.hK.prototype={
gI(a){return B.o.a8(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.hK&&B.o.Y(this.a,b.a)},
k(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.e.J(s,",")+"])"}}
A.i8.prototype={
k(a){return A.d1(this).k(0)+": SecretBox has wrong message authentication code (MAC)"},
$iJ:1}
A.qx.prototype={
k(a){return A.d1(this).k(0)+"()"}}
A.i7.prototype={
gI(a){return(B.o.a8(this.b.a)^B.o.a8(this.c)^B.o.a8(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.i7){s=B.o.Y(this.b.a,b.b.a)
s=s&&B.o.Y(this.c,b.c)&&B.o.Y(this.a,b.a)}else s=!1
return s},
k(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.e.J(this.c,",")+"],\n  mac: "+this.b.k(0)+",\n)"}}
A.t4.prototype={}
A.i9.prototype={
gdN(){return this.b},
gI(a){var s=A.e8(B.d_),r=B.o.a8(this.gdN())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.i9&&B.o.Y(this.gdN(),b.gdN())},
k(a){return"SecretKeyData(...)"}}
A.l2.prototype={
gl(a){return this.a.length},
sl(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.oq.prototype={
ur(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.gdN().gl(0),f=this.d
if(g!==f)throw A.b(A.aI(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Cu(c)
r=new Uint32Array(4)
A.n0(r,0,r,0,s)
r[0]=A.bo(r[0])
r[1]=A.bo(r[1])
r[2]=A.bo(r[2])
r[3]=A.bo(r[3])
q=A.Ah(r,a.c)
p=J.zY(B.e.ga5(q),0,null)
o=a.a
n=B.o.Y(B.aB.kO(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.i8())
A.xx(q,1)
n=o.length
m=B.b.K(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.n0(l,k,p,0,s)
A.xx(q,1)}j=J.bB(B.u.ga5(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.E(j)
j[k]=i^h}return j},
v5(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.gdN().gl(0),f=this.d
if(g!==f)throw A.b(A.aI(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Cu(d)
r=new Uint32Array(4)
A.n0(r,0,r,0,s)
r[0]=A.bo(r[0])
r[1]=A.bo(r[1])
r[2]=A.bo(r[2])
r[3]=A.bo(r[3])
q=A.Ah(r,c)
p=J.zY(B.e.ga5(q),0,null)
o=new Uint32Array(A.aY(p))
A.xx(q,1)
n=a.length
m=(B.b.K(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.n0(l,k,p,0,s)
A.xx(q,1)}j=J.bB(B.u.ga5(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.E(j)
j[k]=i^h}return new A.i7(j,B.aB.kO(j,b,s,r,o),c)},
mU(){return this},
gd2(){return this.c},
gcC(){return this.d}}
A.oG.prototype={
k(a){return"DartGcm()"},
kO(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.jW(n,d,b)
A.jW(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.b.K(s,o),!1)
q.setUint32(4,B.b.aj(s,o),!1)
q.setUint32(8,B.b.K(r,o),!1)
q.setUint32(12,B.b.aj(r,o),!1)
A.jW(n,d,J.bB(B.al.ga5(q),0,null))
p=new Uint32Array(4)
A.n0(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.hK(J.bB(B.u.ga5(n),0,null))}}
A.lZ.prototype={}
A.m_.prototype={}
A.or.prototype={}
A.hi.prototype={
jp(a,b){return A.Ag(a,this.a,b)}}
A.oH.prototype={}
A.vv.prototype={
Y(a,b){var s,r,q=J.K(a),p=J.K(b)
if(q.gl(a)!==p.gl(b))return!1
for(s=0,r=0;r<q.gl(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
a8(a){var s,r,q,p,o
for(s=J.K(a),r=0,q=0;q<s.gl(a);++q){p=s.h(a,q)
o=B.b.aj(q,16)
r=(r^B.b.tn(p,o)^B.b.lJ(p,16-o))>>>0}return r}}
A.kY.prototype={}
A.jF.prototype={$iyu:1}
A.jG.prototype={
hD(){if(this.w)throw A.b(A.w("Can't finalize a finalized Request."))
this.w=!0
return B.bg},
k(a){return this.a+" "+this.b.k(0)}}
A.jH.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:134}
A.jI.prototype={
$1(a){return B.a.gI(a.toLowerCase())},
$S:142}
A.nt.prototype={
od(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.r(s)+".",null))}}}
A.jN.prototype={
b0(a){return this.nK(a)},
nK(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b0=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.Ad("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hD().wY(),$async$b0)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.k(0)
a8=!J.bO(k)?k:null
a9=t.N
f=A.D(a9,t.K)
e=b4.gm9()
d=null
if(e!=null){d=e
J.bN(f,"content-length",d)}for(b0=b4.r,b0=new A.aB(b0,A.m(b0).i("aB<1,2>")).gt(0);b0.m();){b1=b0.d
b1.toString
c=b1
J.bN(f,c.a,c.b)}f=A.eB(f)
f.toString
A.b5(f)
b0=l.signal
s=8
return A.a(A.a0(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b0)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.i_(a,null):null
if(a0==null&&a!=null){f=A.Ad("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.D(a9,a9)
b.headers.forEach(A.mX(new A.nx(a1)))
f=A.GU(b4,b)
a4=b.status
a6=a1
a8=a0
A.lu(b.url)
a9=b.statusText
f=new A.lf(A.D4(f),a4,a8,a6)
f.od(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.a7(b3)
A.Cf(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.c.E(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b0,r)},
p(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].abort()
this.b=!0}}
A.nx.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:145}
A.xh.prototype={
$1(a){return A.fS(this.a,this.b,a)},
$S:149}
A.xo.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ap()}},
$S:0}
A.xp.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a0(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.C(k)
m=A.a7(k)
if(!o.a.b)A.Cf(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.d3.prototype={
wY(){var s=new A.q($.u,t.jz),r=new A.aC(s,t.iq),q=new A.lT(new A.nA(r),new Uint8Array(1024))
this.a9(q.gtR(q),!0,q.gdP(),r.guf())
return s}}
A.nA.prototype={
$1(a){return this.a.az(new Uint8Array(A.aY(a)))},
$S:25}
A.dM.prototype={
k(a){var s=this.b.k(0)
return"ClientException: "+this.a+", uri="+s},
$iJ:1}
A.kB.prototype={
gl(a){return this.b}}
A.qS.prototype={
gm9(){var s,r,q,p=this,o={},n=o.a=0
p.x.a2(0,new A.qT(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.A)(s),++n){q=s[n]
o.a=o.a+(74+B.f.v(p.le(q)).length+q.b+2)}return o.a+2+70+4},
hD(){var s=this,r=s.oA()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kA()
return new A.d3(s.bg(r))},
bg(a){return this.ph(a)},
ph(a){var $async$bg=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.f.v(f+"\r\n")
d=B.f.v(f+"--\r\n")
f=m.x,f=new A.aB(f,A.m(f).i("aB<1,2>")).gt(0)
case 3:if(!f.m()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bI(A.du(e),$async$bg,r)
case 5:k=l.b
j=$.yo()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.zT()
s=6
q=[1]
return A.bI(A.du(B.f.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bg,r)
case 6:s=7
q=[1]
return A.bI(A.du(B.f.v(k)),$async$bg,r)
case 7:s=8
q=[1]
return A.bI(A.du(B.aQ),$async$bg,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bI(A.du(e),$async$bg,r)
case 12:s=13
q=[1]
return A.bI(A.du(B.f.v(m.le(g))),$async$bg,r)
case 13:if(g.f)A.v(A.w("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bI(A.Gh(g.e),$async$bg,r)
case 14:s=15
q=[1]
return A.bI(A.du(B.aQ),$async$bg,r)
case 15:case 10:f.length===l||(0,A.A)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bI(A.du(d),$async$bg,r)
case 16:case 1:return A.bI(null,0,r)
case 2:return A.bI(o.at(-1),1,r)}})
var s=0,r=A.C9($async$bg,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Co(r)},
r2(a,b){var s,r=$.yo()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.zT()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
le(a){var s=a.d.k(0),r=$.yo(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
oA(){var s,r=J.Az(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.ci[$.Dh().cs(66)]
return"dart-http-boundary-"+A.dl(r,0,null)}}
A.qT.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.f.v(this.b.r2(a,b)).length+B.f.v(b).length+2)},
$S:29}
A.t2.prototype={
gm9(){return this.y.length},
gjF(){var s,r
if(this.gcd()==null||!this.gcd().c.a.G("charset"))return B.k
s=this.gcd().c.a.h(0,"charset")
s.toString
r=A.Er(s)
return r==null?A.v(A.a3('Unsupported encoding "'+s+'".',null,null)):r},
hD(){this.kA()
return new A.d3(A.z3(this.y,t.L))},
gcd(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.EW(s)},
scd(a){this.r.j(0,"content-type",a.k(0))},
oH(){if(!this.w)return
throw A.b(A.w("Can't modify a finalized Request."))}}
A.ii.prototype={}
A.lf.prototype={}
A.h9.prototype={}
A.eW.prototype={
k(a){var s=new A.ab(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a2(0,new A.qD(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.qB.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.tp(null,j),h=$.DR()
i.io(h)
s=$.DQ()
i.eI(s)
r=i.gjU().h(0,0)
r.toString
i.eI("/")
i.eI(s)
q=i.gjU().h(0,0)
q.toString
i.io(h)
p=t.N
o=A.D(p,p)
for(;;){p=i.d=B.a.e0(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gM():n
if(!m)break
p=i.d=h.e0(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gM()
i.eI(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.eI("=")
n=i.d=s.e0(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gM()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.ID(i)
n=i.d=h.e0(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gM()
o.j(0,p,k)}i.ve()
return A.yQ(r,q,o)},
$S:158}
A.qD.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.DO()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.D1(b,$.DD(),new A.qC(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:29}
A.qC.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:62}
A.xP.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:62}
A.yk.prototype={
$1(a){return a.a===this.a},
$S:96}
A.yl.prototype={
$2(a,b){return B.a.X(a.a,b.a)},
$S:79}
A.kP.prototype={
ab(){return"PlatformProfile."+this.b}}
A.lc.prototype={
am(){var s=this
return A.n(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.td.prototype={
$1(a){return J.c2(a.gaP())},
$S:30}
A.te.prototype={
$1(a){return B.a.C(a,"ENABLE_FTS5")},
$S:12}
A.ha.prototype={
ab(){return"ChangeOrigin."+this.b}}
A.d4.prototype={
ab(){return"ChangeAction."+this.b}}
A.aV.prototype={
am(){var s,r=this,q=A.D(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"id",r.b)
q.j(0,"origin",r.c.b)
q.j(0,"action",r.d.b)
s=r.e
if(s!=null)q.j(0,"oldRecord",s)
s=r.f
if(s!=null)q.j(0,"newRecord",s)
s=r.r
s=A.P(s,A.m(s).c)
B.c.aT(s)
q.j(0,"changedFields",s)
return q},
R(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aV))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.n.Y(b.e,s.e)&&B.n.Y(b.f,s.f)&&B.n.Y(b.r,s.r)},
gI(a){var s=this
return A.c8(s.a,s.b,s.c,s.d,B.n.a8(s.e),B.n.a8(s.f),B.n.a8(s.r))},
k(a){var s=this
return"RecordChangeEvent("+s.c.k(0)+" "+s.d.k(0)+" "+s.a+"/"+s.b+" changed: "+s.r.k(0)+")"}}
A.a1.prototype={}
A.nJ.prototype={
v2(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
v3(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.nK.prototype={}
A.nL.prototype={}
A.pe.prototype={}
A.nf.prototype={
v4(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cs(256)
q=this.b.v5(new Uint8Array(A.aY(a)),b,m,this.c)
s=q.a
p=s.length
o=29+p
n=new Uint8Array(o)
n[0]=1
B.e.ar(n,1,13,q.c)
p=13+p
B.e.ar(n,13,p,s)
B.e.ar(n,p,o,q.b.a)
return n},
uq(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.O("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.w("Unsupported ciphertext version 0x"+B.a.hY(B.b.ke(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.aY(B.e.U(a,1,13)))
n-=16
r=new Uint8Array(A.aY(B.e.b1(a,n)))
q=new Uint8Array(A.aY(B.e.U(a,13,n)))
try{n=this.b.ur(new A.i7(q,new A.hK(r),s),b,this.c)
return n}catch(o){if(A.C(o) instanceof A.i8)throw A.b(A.w("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.cG.prototype={
ab(){return"KindViolation."+this.b}}
A.xy.prototype={
$2(a,b){return B.a.X(a.a,b.a)},
$S:110}
A.xO.prototype={
$1(a){return a.h(0,"detail")},
$S:30}
A.jT.prototype={
ab(){return"ConflictAlgorithm."+this.b}}
A.k2.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aR(o,o.r,o.e,A.m(o).i("aR<2>"));n.m();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.ah(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
kr(a){var s,r=this.a,q=r.E(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.E(0,new A.U(r,A.m(r).i("U<1>")).gD(0))
if(s!=null)s.p()}q=this.b.wp(a)
r.j(0,a,q)
return q},
nJ(a,b){var s=this.kr(a).ks(new A.dX(b)),r=A.m(s).i("a_<F.E,H<k,j?>>")
r=A.P(new A.a_(s,new A.pb(),r),r.i("V.E"))
return r},
eH(a,b){this.kr(a).jH(new A.dX(b))},
jG(a){return this.eH(a,B.y)},
aB(a,b){return this.vb(a,b)},
H(a){return this.aB(a,B.y)},
vb(a,b){var s=0,r=A.h(t.H),q=this
var $async$aB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.eH(a,b)
return A.e(null,r)}})
return A.f($async$aB,r)},
ai(a,b){return this.wC(a,b)},
aX(a){return this.ai(a,B.y)},
wC(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ai=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.nJ(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ai,r)},
bK(a,b,c,d,e,f,g){return this.wz(a,b,c,d,e,f,g)},
aM(a,b,c,d){return this.bK(a,null,b,null,null,c,d)},
e4(a,b,c,d,e){return this.bK(a,b,c,null,null,d,e)},
mI(a,b,c,d){return this.bK(a,b,null,null,null,c,d)},
e3(a,b,c){var s=null
return this.bK(a,s,s,s,s,b,c)},
wv(a,b,c,d){return this.bK(a,null,null,null,b,c,d)},
ww(a,b,c,d,e){return this.bK(a,b,c,d,e,null,null)},
wy(a,b,c,d,e,f){return this.bK(a,b,c,null,d,e,f)},
wx(a,b,c,d,e){return this.bK(a,null,b,null,c,d,e)},
wz(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bK=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.c.J(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.y:g
q=p.ai(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bK,r)},
c2(a,b,c,d){return this.vV(0,b,c,d)},
aC(a,b,c){return this.c2(0,b,c,null)},
vV(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$c2=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.m(c)
n=o.i("U<1>")
m=t.N
l=A.e3(new A.U(c,n),new A.pa(),n.i("o.E"),m).J(0,", ")
k=B.c.J(A.aG(c.a,"?",!1,m),", ")
j=A.Aj(d)
o=o.i("av<2>")
o=A.P(new A.av(c,o),o.i("o.E"))
p.eH("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ah(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c2,r)},
L(a,b,c,d){return this.x6(a,b,c,d)},
x6(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.m(b)
n=o.i("U<1>")
m=A.e3(new A.U(b,n),new A.pc(),n.i("o.E"),t.N).J(0,", ")
n="UPDATE"+A.Aj(null)+' "'+a+'" SET '+m
o=A.P(new A.av(b,o.i("av<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.c.F(o,d)}p.eH(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
a6(a,b,c){return this.us(a,b,c)},
us(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$a6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.c.F(n,c)}p.eH(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a6,r)},
uh(a,b,c){this.b.ui(B.bd,!0,!1,new A.p9(b),c)},
Z(a,b){return this.x0(a,b,b)},
x0(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$Z=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jG("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$Z)
case 7:m=e
n.jG("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jG("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$Z,r)},
$iyx:1}
A.pb.prototype={
$1(a){return A.b_(a,t.N,t.X)},
$S:112}
A.pa.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.pc.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.p9.prototype={
$1(a){var s=a.gl(0)===0?null:a.gD(a)
return this.a.$1(s)},
$S:75}
A.nZ.prototype={}
A.hk.prototype={
ju(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aS(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.A)(s),++n){m=s[n]
l=m.a
k=$.zM()
if(!k.b.test(l))A.v(A.bj('Field "'+l+u.Z))
if(B.b3.C(0,l))throw A.b(A.bj('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.bj('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.bj(e+l+'" cannot be unique.'))
if(B.c.cS(o,new A.p8(m)))throw A.b(A.bj(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.C(k,l)}else k=!1
if(k)throw A.b(A.bj(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.A)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ae(l,l.gl(0),k.i("ae<F.E>")),k=k.i("F.E");l.m();){j=l.d
if(j==null)j=k.a(j)
if(!c.C(0,j)&&!B.b3.C(0,j))throw A.b(A.bj('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.aj.Y(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.k(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.Ep(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.k(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.k(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.As("FTS5 is not available on this SQLite engine."))
if(q.b&&!A.AY(r.a,3,34))throw A.b(A.As("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.ae(r,r.gl(0),p.i("ae<F.E>")),p=p.i("F.E");r.m();){o=r.d
if(o==null)o=p.a(o)
if(!c.C(0,o))throw A.b(A.bj('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gaK(),r=r.gt(r);r.m();){q=r.gn()
A.Ar(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.E){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.bj('Enum field "'+m.a+'" must declare values.'))
if(q===B.F){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.bj('Ref field "'+m.a+'" must declare its target store.'))}return new A.nZ(f.oD(a),f.oC(a),f.oB(a),d)},
oD(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.gkw()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.E&&q){k=o.f
k.toString
j=new A.a_(k,new A.p7(),A.a6(k).i("a_<1,k>")).J(0,", ")
m+=" CHECK ("+('"'+A.z(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.F&&o.w){n=o.r
n.toString
n=A.z(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.z("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.z(a.a,'"',i)
r=B.c.J(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
oC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.A)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("a_<F.E,k>")
j=A.P(new A.a_(l,A.zB(),k),k.i("V.E"))
if(!l.C(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.aP?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.J(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.c.J(j,", ")+") WHERE "+i+";")}else{l=l.J(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.c.J(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.A)(r),++n){h=r[n]
if(h.b!==B.F)continue
if(B.c.cS(s,new A.p6(h)))continue
k=h.a
g=A.z(p+k,e,d)
f=A.z(q,e,d)
k=A.z(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.z("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.A)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.z(o+s,e,d)
l=A.z(q,e,d)
g=A.z(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.z(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
oB(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.q
s=A.l([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("a_<F.E,k>")
n=A.P(new A.a_(p,A.zB(),o),o.i("V.E"))
m=new A.p5(r,a0.c)
l=new A.a_(p,new A.p2(m),o).J(0,f)
k=new A.a_(p,new A.p3(m),o).J(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.c.J(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.c.J(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.c.J(n,f)+a+k+");\nEND;")
i=new A.a_(n,new A.p4(),A.a6(n).i("a_<1,k>")).J(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.c.J(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.c.J(n,f)+b+l+");\nEND;")
return s}}
A.p8.prototype={
$1(a){var s=a.a
return s.C(s,this.a.a)},
$S:46}
A.p7.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:7}
A.p6.prototype={
$1(a){var s=a.a
return s.C(s,this.a.a)},
$S:46}
A.p5.prototype={
$2(a,b){return A.CM(this.a,this.b,a,b)},
$S:80}
A.p2.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.p3.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.p4.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.eV.prototype={
k(a){return A.d1(this).k(0)+": "+this.a},
$iJ:1}
A.io.prototype={}
A.il.prototype={}
A.hT.prototype={}
A.hc.prototype={}
A.hZ.prototype={}
A.hs.prototype={}
A.cQ.prototype={}
A.i4.prototype={}
A.i6.prototype={}
A.f6.prototype={}
A.ht.prototype={}
A.he.prototype={}
A.eL.prototype={}
A.t1.prototype={}
A.yc.prototype={
$1(a){if(typeof a!="string")return a
return this.a.eV(a)},
$S:14}
A.k3.prototype={
ab(){return"DurabilityClass."+this.b}}
A.ld.prototype={}
A.rw.prototype={
bN(a){var s,r=this.a
if(!r.G(a))return null
s=r.E(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.mW(s)
r.toString
t.G.a(r)}return r},
kt(a,b){var s,r=this.a
if(r.a>=256)r.E(0,new A.U(r,A.m(r).i("U<1>")).gD(0))
if(b==null)s=null
else{s=A.mW(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vW(a){var s,r,q,p=a.a
if(p===0){this.a.ah(0)
return}s=this.a
if(p>=s.a){s.ah(0)
return}for(p=A.fA(a,a.r,A.m(a).c),r=p.$ti.c;p.m();){q=p.d
s.E(0,q==null?r.a(q):q)}}}
A.ks.prototype={
b8(a){return this.wL(a)},
wL(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$b8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:k=new A.hk(q.c).ju(a)
j=a.w
if(j!=null)A.J8(q.b,a.a,j.c)
j=q.b
p=a.a
s=2
return A.a(j.aM("lp_stores",1,"store = ?",[p]),$async$b8)
case 2:o=c
n=J.K(o)
s=n.gA(o)?3:5
break
case 3:s=6
return A.a(j.H(k.b),$async$b8)
case 6:n=k.c,m=n.length,l=0
case 7:if(!(l<n.length)){s=9
break}s=10
return A.a(j.H(n[l]),$async$b8)
case 10:case 8:n.length===m||(0,A.A)(n),++l
s=7
break
case 9:n=k.d,m=n.length,l=0
case 11:if(!(l<n.length)){s=13
break}s=14
return A.a(j.H(n[l]),$async$b8)
case 14:case 12:n.length===m||(0,A.A)(n),++l
s=11
break
case 13:n=a.b
m=q.Q
s=15
return A.a(j.aC(0,"lp_stores",A.n(["store",p,"table_name",p,"schema_ver",n,"definition_json",B.h.a7(a.am(),null),"created_at",m.$0()],t.N,t.X)),$async$b8)
case 15:s=16
return A.a(A.eY(j,0,0,"create:"+p,m,n),$async$b8)
case 16:s=4
break
case 5:n=J.T(n.gD(o),"schema_ver")
n.toString
A.ah(n)
m=a.b
if(n>m)throw A.b(new A.i6('Store "'+p+'" on disk is schema v'+n+", but this package supports v"+m+"."))
s=n<m?17:18
break
case 17:s=19
return A.a(A.eX(q,a,n),$async$b8)
case 19:case 18:s=20
return A.a(q.bE(a),$async$b8)
case 20:s=21
return A.a(j.L("lp_stores",A.n(["definition_json",B.h.a7(a.am(),null),"schema_ver",m],t.N,t.X),"store = ?",[p]),$async$b8)
case 21:case 4:q.ch.j(0,p,new A.ld(a,new A.rw(A.D(t.N,t.b))))
return A.e(null,r)}})
return A.f($async$b8,r)},
hq(a){return this.u3(a)},
u3(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hq)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
bE(a){return this.t_(a)},
t_(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bE=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.b
a1=a3.a
s=3
return A.a(a0.e4("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a1]),$async$bE)
case 3:a2=a6
if(J.bO(a2)){s=1
break}o=null
try{n=J.T(J.c2(a2),"definition_json")
m=typeof n=="string"?B.h.aA(n,null):n
l=m
l.toString
k=t.X
o=A.yv(A.b_(t.f.a(l),t.N,k),k)}catch(a4){if(A.C(a4) instanceof A.cQ){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.aj.Y(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.ie()
$.jr()
f.av()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.H("DROP TRIGGER IF EXISTS "+('"'+A.z(a1+d,'"','""')+'"')),$async$bE)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.H("DROP TABLE IF EXISTS "+('"'+A.z(a1+"_fts",'"','""')+'"')),$async$bE)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.hk(p.c).ju(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.H(l[e]),$async$bE)
case 16:case 14:l.length===k||(0,A.A)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.z(l,'"','""')
s=17
return A.a(a0.H("INSERT INTO "+('"'+k+'"')+"("+('"'+A.z(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bE)
case 17:k=h.a
c=k.$ti.i("a_<F.E,k>")
b=new A.a_(k,A.zB(),c).J(0,", ")
a=new A.a_(k,new A.qr(a3,h),c).J(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.H("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bE)
case 18:case 12:if(f.b==null)f.b=$.kS.$0()
l=a3.b
s=19
return A.a(A.eY(a0,f.gmh(),l,"fts:"+a1,p.Q,l),$async$bE)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bE,r)},
hx(a){return this.uu(a)},
uu(a){var s=0,r=A.h(t.H),q=this,p
var $async$hx=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hx)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hx,r)},
ae(a){var s=this.ch.h(0,a)
if(s==null)throw A.b(A.w('No store "'+a+'" registered in this LocalPocket.'))
return s},
cz(a,b,c){var s,r
if(A.ln(this)!=null)A.v(A.w(u.L))
s=this.dy
if(s!=null&&s.b===b&&!s.d){r=new A.q($.u,t._)
s.c.push(new A.fr(a,new A.aC(r,t.jk)))
return r.aO(new A.qw(c),c)}return this.tq(a,b,c)},
Z(a,b){return this.cz(a,B.p,b)},
tq(a,b,c){var s,r,q,p=this
if(p.dx.a>0){s=p.dy
if(s!=null)s.mq()}s=A.l([],t.i4)
r=new A.lW(p,b,s)
p.dy=r
r.wR()
q=new A.q($.u,t._)
s.push(new A.fr(a,new A.aC(q,t.jk)))
return q.aO(new A.qs(c),c)},
mW(a){++this.e.e
return this.b.aB(a,B.y)},
mX(a,b){++this.e.f
return this.b.ai(a,b)},
dM(a){return this.tZ(a)},
tY(){return this.dM(null)},
tZ(a){var s=0,r=A.h(t.H),q=this,p
var $async$dM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.H("ANALYZE"),$async$dM)
case 5:s=3
break
case 4:s=6
return A.a(p.H("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$dM)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dM,r)},
fb(){var s=0,r=A.h(t.H),q=this
var $async$fb=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.H("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fb)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fb,r)},
ia(){var s=0,r=A.h(t.H),q=this
var $async$ia=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.H("PRAGMA wal_checkpoint(PASSIVE)"),$async$ia)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ia,r)},
fa(a){return this.xd(a)},
xd(a){var s=0,r=A.h(t.H),q=this,p
var $async$fa=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a!=null?2:4
break
case 2:s=5
return A.a(p.H("PRAGMA incremental_vacuum("+A.r(a)+")"),$async$fa)
case 5:s=3
break
case 4:s=6
return A.a(p.H("VACUUM"),$async$fa)
case 6:case 3:return A.e(null,r)}})
return A.f($async$fa,r)},
eZ(a){return this.wr(a)},
wq(){return this.eZ(1e4)},
wr(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$eZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.Z(new A.qv(o),t.P),$async$eZ)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eZ,r)},
d9(a){return this.wW(a)},
wW(a){var s=0,r=A.h(t.H),q=this,p
var $async$d9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.ch,p=new A.bS(p,p.r,p.e,A.m(p).i("bS<1>"))
case 2:if(!p.m()){s=3
break}s=4
return A.a(q.ud(p.d,a),$async$d9)
case 4:s=2
break
case 3:s=5
return A.a(q.wq(),$async$d9)
case 5:s=6
return A.a(q.fb(),$async$d9)
case 6:s=7
return A.a(q.tY(),$async$d9)
case 7:return A.e(null,r)}})
return A.f($async$d9,r)},
dQ(a,b,c){return this.ue(a,b,c)},
ud(a,b){return this.dQ(a,null,b)},
ue(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i
var $async$dQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:k={}
j=b==null?p.Q.$0():b
i=j-B.b.K(c.a,1000)
k.a=0
o=p.ae(a).a
n=t.P,m=p.b
case 3:s=5
return A.a(m.ai("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",i,250]),$async$dQ)
case 5:l=e
if(J.bO(l)){s=4
break}s=6
return A.a(p.Z(new A.qu(k,p,l,a,i,o),n),$async$dQ)
case 6:s=3
break
case 4:q=k.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
ri(){if(++this.fr<64)return
this.fr=0
A.cv(B.A,new A.qq(this))},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.CW){s=1
break}n.CW=!0
m=n.a$
m.a.p()
m.b.p()
n.cx.b.ah(0)
p=4
s=7
return A.a(n.b.H("PRAGMA optimize"),$async$p)
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
return A.a(n.b.p(),$async$p)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$p,r)}}
A.qr.prototype={
$1(a){return A.CM(this.a.a,this.b.c,"",a)},
$S:7}
A.qw.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.qs.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.qv.prototype={
$1(a){return this.ne(a)},
ne(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.aX("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.I(c),o=q.a
case 3:if(!p.m()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.M(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.a6("lp_outbox","store = ? AND record_id = ?",[m,A.M(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qu.prototype={
$1(a){return this.nd(a)},
nd(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.I(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.e,j=q.e,i=q.f,h=q.b,g=h.y,h=h.z
case 2:if(!p.m()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.M(f)
a1=J
s=4
return A.a(a0.ai("SELECT b.id FROM "+('"'+A.z(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.bO(a4)){s=2
break}s=5
return A.a(a0.ai("SELECT * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.K(e)
c=d.gW(e)?A.cj(i,d.gD(e),g,h):null
s=6
return A.a(A.ck(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.a6(n,"id = ?",[f]),$async$$1)
case 7:d=A.ai([f],m)
l.push(new A.a1(n,d))
k.r+=d.a
if(c!=null){d=A.m(c).i("U<1>")
b=d.i("b2<o.E>")
a=A.qc(b.i("o.E"))
a.F(0,new A.b2(new A.U(c,d),new A.qt(),b))
a2.bs(new A.aV(n,f,B.a_,B.aH,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qt.prototype={
$1(a){return a!=="id"},
$S:12}
A.qq.prototype={
$0(){this.a.ia().m7(new A.qp())},
$S:0}
A.qp.prototype={
$1(a){},
$S:37}
A.lW.prototype={
wR(){var s,r,q,p=this,o=new A.aC(new A.q($.u,t.D),t.h)
p.e=o
s=p.a
r=s.d
r===$&&A.x()
r.aZ(new A.vp(p,o),t.H)
q=s.dx
s=p.gvn()
if(q.a>0)A.cv(q,s)
else A.cv(B.A,s)},
mq(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.dy===r)s.dy=null
s=r.e
if(s!=null)s.ap()},
cp(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$cp=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.e;++b2.b
b2.c+=b1}b3=new A.ie()
$.jr()
b3.av()
k=b3
b1=m.a
j=m.b===B.aI&&b1.a!==":memory:"
s=j&&b1.cy!=="FULL"?3:4
break
case 3:s=5
return A.a(b1.mW("PRAGMA synchronous=FULL"),$async$cp)
case 5:b1.cy="FULL"
case 4:i=A.l([],t.aL)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b1.b.Z(new A.vo(m,i,h,l,g),t.P),$async$cp)
case 10:for(b2=g,b4=b2.length,b5=0;b5<b2.length;b2.length===b4||(0,A.A)(b2),++b5){f=b2[b5]
e=null
d=null
c=null
b=null
a=f
e=a.a[0]
d=a.a[1]
c=a.a[2]
b=a.a[3]
if(c!=null){b6=e.b
b7=c
b8=b
if((b6.a.a&30)!==0)A.v(A.w("Future already completed"))
b6.al(A.ew(b7,b8))}else{b6=e.b
b7=d
b6=b6.a
if((b6.a&30)!==0)A.v(A.w("Future already completed"))
b6.aU(b7)}}for(f=i,b2=f.length,b4=b1.a$,b6=b1.ch,b5=0;b5<f.length;f.length===b2||(0,A.A)(f),++b5){a0=f[b5]
b7=b6.h(0,a0.a)
if(b7!=null)b7.d.vW(a0.b)
b4.v2(a0)}for(f=h,b2=f.length,b5=0;b5<f.length;f.length===b2||(0,A.A)(f),++b5){a1=f[b5]
b4.v3(a1)}n.push(9)
s=8
break
case 7:p=6
c0=o.pop()
a2=A.C(c0)
a3=A.a7(c0)
for(f=g,b2=f.length,b5=0;b5<f.length;f.length===b2||(0,A.A)(f),++b5){a4=f[b5]
a5=null
a6=null
a7=null
a8=a4
a5=a8.a[0]
a6=a8.a[2]
a7=a8.a[3]
if((a5.b.a.a&30)!==0)continue
if(a6!=null&&a2===a6){b4=a5.b
b6=a6
b7=a7
if((b4.a.a&30)!==0)A.v(A.w("Future already completed"))
b4.al(A.ew(b6,b7))}else{b4=a5.b
if((b4.a.a&30)!==0)A.v(A.w("Future already completed"))
b4.al(A.ew(a2,a3))}}throw c0
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.cy!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b1.mW("PRAGMA synchronous=NORMAL"),$async$cp)
case 17:b1.cy="NORMAL"
p=2
s=16
break
case 14:p=13
c1=o.pop()
s=16
break
case 13:s=2
break
case 16:case 12:f=b1.e
a4=k.gv1();++f.a
f.d+=a4
b1.ri()
for(f=b0.length,b5=0;b5<b0.length;b0.length===f||(0,A.A)(b0),++b5){a9=b0[b5]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.v(A.w("Future already completed"))
a4.al(A.ew(new A.bk("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cp,r)}}
A.vp.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cp(),$async$$0)
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
A.vo.prototype={
$1(a){return this.ny(a)},
ny(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.B3(a.a,a3,o.b,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.yg(new A.vm(a,a0),null,A.n([$.n9(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.et([B.c.gau(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.C(a1)
l=A.a7(a1)
o.e.push(new A.et([B.c.gau(a.c),null,m,l]))
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
return A.a(A.yg(new A.vn(a0,k),null,A.n([$.n9(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.et([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.C(a2)
h=A.a7(a2)
e.push(new A.et([k,null,i,h]))
s=16
break
case 13:s=1
break
case 16:case 11:a.length===g||(0,A.A)(a),++b
s=10
break
case 12:case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:47}
A.vm.prototype={
$0(){return B.c.gau(this.a.c).a.$1(this.b)},
$S:48}
A.vn.prototype={
$0(){var s=this.a,r=s.f,q=r.b,p=r.a,o=""+p,n=q!=null?q+"_"+o:"lp_sp"+o
r.a=p+1
return s.cm(n,new A.vl(this.b),t.z)},
$S:48}
A.vl.prototype={
$1(a){return this.a.a.$1(a)},
$S:113}
A.fr.prototype={}
A.mg.prototype={}
A.qP.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:139}
A.qQ.prototype={
$2(a,b){return B.b.X(a.a,b.a)},
$S:141}
A.qM.prototype={
$1(a){return a.h(0,"name")},
$S:30}
A.qO.prototype={
$1(a){return this.nf(a)},
nf(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.I(q.a),k=q.b,j=q.c,i=j.y,j=j.z,h=q.e
case 2:if(!l.m()){s=3
break}p=l.gn()
o=A.cj(k,p,i,j)
n=o
A.F0(k,n)
g=J.T(o,"id")
g.toString
A.M(g)
m=A.dD(k,J.t(J.T(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:47}
A.kN.prototype={
wB(a){if(a>this.w)this.w=a}}
A.rZ.prototype={}
A.bR.prototype={
ab(){return"FieldKind."+this.b}}
A.aQ.prototype={
gkw(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.ah===s||B.E===s||B.O===s||B.P===s||B.F===s){r="TEXT"
break A}if(B.a3===s||B.B===s||B.a5===s){r="INTEGER"
break A}if(B.a4===s){r="REAL"
break A}throw A.b(new A.kV("None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}return r},
am(){var s,r=this,q=A.D(t.N,t.X)
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
A.pf.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.eP(B.c9,A.M(m))
m=n.h(0,"name")
m.toString
A.M(m)
r=J.t(n.h(0,"required"),!0)
q=J.t(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aQ(m,B.ah,r,J.t(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aQ(m,B.a3,r,!1,q,o,o,!1)
case 2:return new A.aQ(m,B.a4,r,!1,q,o,o,!1)
case 3:return new A.aQ(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aQ(m,B.a5,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aQ(m,B.E,r,!1,!1,A.dd(J.ju(t.j.a(n),p),p),o,!1)
case 6:return new A.aQ(m,B.O,!1,!1,q,o,o,!1)
case 7:return new A.aQ(m,B.P,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aQ(m,B.F,!1,!1,!1,o,A.M(p),J.t(n.h(0,"enforceFk"),!0))}},
$S:143}
A.hy.prototype={
ab(){return"IndexScope."+this.b}}
A.d8.prototype={
am(){return A.n(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.pY.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.ju(t.j.a(q),t.N)
s=J.t(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.d8(q,s,A.eP(B.c5,A.M(r)))},
$S:150}
A.eR.prototype={
am(){var s,r=t.N,q=t.X,p=A.D(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gW(s))p.j(0,"normalize",A.n(["rules",s],r,q))
return p},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.eR&&r.b===b.b&&B.aj.Y(r.a,b.a)&&r.c.R(0,b.c)
else s=!0
return s},
gI(a){return A.c8(A.qY(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.pr.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.ju(t.j.a(p),s)
r=J.t(r.h(0,"fuzzy"),!0)
return new A.eR(p,r,t.f.b(q)?A.EA(q.bW(0,s,t.X)):B.bL)},
$S:159}
A.dV.prototype={
eV(a){var s,r,q,p
for(s=this.a.gaK(),s=s.gt(s),r=a;s.m();){q=s.gn()
p=q.a
if(!B.a.C(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
am(){return A.n(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.dV&&A.Ez(this.a,b.a)
else s=!0
return s},
gI(a){var s,r,q,p=this.a,o=p.gO(),n=A.P(o,A.m(o).i("o.E"))
B.c.aT(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.A)(n),++r){q=n[r]
o.push(A.c8(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.qY(o)},
k(a){var s=this.a
return"FtsNormalization("+s.gl(s)+" rules)"}}
A.pq.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.D(s,s)
for(o=t.d2.a(o).gaK(),o=o.gt(o);o.m();){q=o.gn()
p=q.a
p.toString
A.M(p)
q=q.b
q.toString
A.M(q)
A.Ar(p,q)
r.j(0,p,q)}return new A.dV(A.Ej(r,s,s))},
$S:174}
A.bU.prototype={
am(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)p.push(s[q].am())
return A.n(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.th.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ah(o)
s=J.t(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.I(p==null?B.aU:p)
q=t.G
while(p.m())r.push(A.Am(q.a(p.gn())))
return new A.bU(o,s,r)},
$S:175}
A.qR.prototype={
ab(){return"MissingRemotePolicy."+this.b}}
A.oa.prototype={}
A.bQ.prototype={
gdR(){var s,r,q,p,o=this,n=$.Db()
A.yC(o)
s=n.a.get(o)
if(s==null){s=A.aS(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
mn(a){var s,r,q,p,o,n=this,m=$.Dc()
A.yC(n)
s=m.a.get(n)
if(s==null){s=A.D(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.T(m,a)},
am(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.D(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.A)(q),++o)r.push(q[o].am())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.A)(q),++o){n=q[o]
r.push(A.n(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.w
if(l!=null)j.j(0,"fts",l.am())
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.A)(k),++o)l.push(k[o].am())
j.j(0,"migrations",l)
return j}}
A.nP.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.M(j)
s=k.h(0,"version")
s.toString
A.ah(s)
r=A.l([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.I(p.a(q))
o=t.G
while(q.m())r.push(A.Am(o.a(q.gn())))
q=A.l([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.I(p.a(n))
while(n.m())q.push(A.EI(o.a(n.gn())))
p=J.t(k.h(0,"keepUnsyncedArchives"),!0)
n=J.t(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.EB(o.a(m))}else m=null
l=A.l([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.I(k==null?B.aU:k)
while(k.m())l.push(A.FA(o.a(k.gn())))
return new A.bQ(j,s,r,q,n,p,m,l,this.b.i("bQ<0>"))},
$S(){return this.b.i("bQ<0>()")}}
A.dg.prototype={
ab(){return"MutationAction."+this.b}}
A.dO.prototype={
gbf(){var s=this.c
return s==null?this.a.b:s},
gb7(){return this.b.a.a},
iG(){},
i1(a){var s=this
if(s.d!=null)return s.lm(B.aW,a)
return s.a.cz(new A.nW(s,a),B.p,t.H)},
mY(a){var s=this
if(s.d!=null)return s.lm(B.aX,a)
return s.a.cz(new A.nY(s,a),B.p,t.H)},
mF(a,b){var s=this
if(s.d!=null)return s.dD(a,b)
return s.a.cz(new A.nU(s,a,b),B.p,t.H)},
m0(a){var s=this
if(s.d!=null)return s.ll(B.C,a)
return s.a.cz(new A.nT(s,a),B.p,t.H)},
mQ(a){var s=this
if(s.d!=null)return s.ll(B.H,a)
return s.a.cz(new A.nX(s,a),B.p,t.H)},
k6(a){var s=this
if(s.d!=null)return s.dF(a)
return s.a.cz(new A.nV(s,a),B.p,t.H)},
dF(a){return this.rN(a)},
rN(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.iG()
s=2
return A.a(q.dH(a),$async$dF)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.ck(n,m,a,!0),$async$dF)
case 3:s=4
return A.a(n.a6(m,"id = ?",[a]),$async$dF)
case 4:l=t.N
o.a_(new A.a1(m,A.ai([a],l)))
if(p!=null){l=A.e_(p.gO(),l)
l.E(0,"id")
o.bs(new A.aV(m,a,B.a_,B.aH,p,null,l))}return A.e(null,r)}})
return A.f($async$dF,r)},
dD(a,b){return this.rC(a,b)},
rC(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$dD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.iG()
s=3
return A.a(p.gbf().ai("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$dD)
case 3:o=d
n=J.K(o)
if(n.gW(o)){m=n.gD(o)
l=A.lj(m)
k=m.h(0,"o_kind")!=null?A.r5(A.n(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.ac&&k!=null?4:5
break
case 4:s=6
return A.a(p.eo(a,b,l,k,!1),$async$dD)
case 6:s=1
break
case 5:s=7
return A.a(p.cL(a,b,!1,k,l),$async$dD)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dD,r)},
cL(a,b,c,d,e){return this.pd(a,b,!1,d,e)},
pd(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cL=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dH(a),$async$cL)
case 2:m=g
if(m==null)throw A.b(A.yZ("No record "+q.gb7()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.dZ(m,p,o)
n.F(0,b)
o=A.D(p,o)
o.j(0,"id",a)
o.F(0,n)
s=3
return A.a(q.aV(B.G,!1,m,a,d,e,o),$async$cL)
case 3:return A.e(null,r)}})
return A.f($async$cL,r)},
eo(a,b,c,d,e){return this.rD(a,b,c,d,!1)},
rD(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eo=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.aA(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.cL(a7,a8,!1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.t(i,a7)){q=n.cL(a7,a8,!1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.dZ(a5,h,g)
f.F(0,a8)
m=f
J.bN(m,"id",a7)
e=new A.ab("")
f=n.b
d=f.a
c=A.Cx(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.dZ(m,h,g)
b.E(0,"id")
n.lT(a7,b,a,c)
a0=n.l2(a5,m,B.G)
l=null
b=a0.length===1&&d.gdR().C(0,B.c.gau(a0))
a1=n.a
a2=a1.y
a3=a1.z
if(b){a4=d.mn(B.c.gau(a0))
b=a4.a
l=A.n([b,A.CJ(d,a4,J.T(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dD(d,J.t(J.T(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbf().L(d.a,l,"id = ?",[a7]),$async$eo)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.C(a6)
h=A.D5(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.as
g===$&&A.x()
b=n.gbf()
a1=l
s=8
return A.a(g.bj(B.G,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$eo)
case 8:g=n.d
if(g!=null)g.a_(new A.a1(d.a,A.ai([a7],h)))
h=g==null
f=h?null:g.a.a$.b.d!=null
if(f===!0)if(!h)g.bs(new A.aV(d.a,a7,B.a_,B.x,a5,m,A.qd(a0,A.a6(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eo,r)},
aV(a,b,c,d,e,f,g){return this.rf(a,!1,c,d,e,f,g)},
ll(a,b){var s=null
return this.aV(a,!1,s,b,s,s,s)},
lm(a,b){var s=null
return this.aV(a,!1,s,s,s,s,b)},
rf(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aV=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.iG()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.nS(b5,n,c2,c1)
s=b7===B.aW?3:5
break
case 3:h=A.aa(c3.h(0,"id"))
if(h==null)h=A.jj()
g=$.yp()
if(!g.b.test(h))throw A.b(A.aJ('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aV)
case 6:l=n.j1(c3,m)
b7=b5.a==null?B.aY:B.G
s=4
break
case 5:s=b7===B.G?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aV)
case 10:if(b5.a==null)throw A.b(A.yZ("No record "+n.gb7()+"/"+A.r(m)+" to update."))
c3.toString
l=n.j1(c3,m)
s=8
break
case 9:s=b7===B.aX?11:13
break
case 11:h=A.aa(c3.h(0,"id"))
if(h==null)h=A.jj()
g=$.yp()
if(!g.b.test(h))throw A.b(A.aJ('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aV)
case 14:g=b5.a
if(g==null){l=n.j1(c3,m)
b7=B.aY}else{l=A.dZ(g,t.N,t.X)
for(g=new A.aB(c3,A.m(c3).i("aB<1,2>")).gt(0);g.m();){f=g.d
e=f.a
if(e==="id")continue
J.bN(l,e,f.b)}b7=B.G}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aV)
case 15:g=b5.a
if(g==null)throw A.b(A.yZ("No record "+n.gb7()+"/"+A.r(m)+" to archive/restore."))
g=A.dZ(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.ab("")
g=n.b
e=g.a
c=l
b=A.Cx(d,e,c,J.ao(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.lT(m,l,a,b)
s=b5.a==null?16:18
break
case 16:a0=null
s=17
break
case 18:c=c2==null?b5.c:c2
s=c==null?19:21
break
case 19:c=n.a.as
c===$&&A.x()
s=22
return A.a(c.bL(n.gbf(),e.a,m),$async$aV)
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
case 26:c=n.a.as
c===$&&A.x()
s=29
return A.a(c.e6(n.gbf(),e.a,m),$async$aV)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.U)throw A.b(A.Af("Record "+n.gb7()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.w
else a5=!1
if(a4&&a5){a6=A.aj(A.b6(e,a3))
a2=A.aD(B.l.v(B.f.v(a6)).a)
a7=new A.nu(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.y
a8=a3.z
a9=A.dD(e,J.t(J.T(l,"archived"),!0),a4,a8,c,a2)
b0=n.l2(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gdR().C(0,B.c.gau(b0))){b1=e.mn(B.c.gau(b0))
c=b1.a
k=A.n([c,A.CJ(e,b1,J.T(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
s=b5.a==null?34:36
break
case 34:s=37
return A.a(n.gbf().aC(0,c,k),$async$aV)
case 37:s=35
break
case 36:s=38
return A.a(n.gbf().L(c,k,"id = ?",[m]),$async$aV)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.C(b6)
g=A.D5(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.as
c===$&&A.x()
a2=n.gbf()
a3=m
a4=b5.a
s=39
return A.a(c.bj(b7,a7,b0,a2,a3,l,a4,a1,a,a9,a0,g),$async$aV)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.aG:B.x
break
case 3:b3=B.x
break
case 4:b3=B.bx
break
case 5:b3=B.by
break
default:b3=null}if(b7===B.C||b7===B.H)b4=A.ai(["archived"],t.N)
else if(b5.a==null){g=l
c=A.m(g).i("U<1>")
a2=c.i("b2<o.E>")
b4=A.e_(new A.b2(new A.U(g,c),new A.nR(),a2),a2.i("o.E"))}else b4=A.qd(b0,A.a6(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bs(new A.aV(e.a,m,B.a_,b3,b5.a,l,b4))
if(!c)g.a_(new A.a1(e.a,A.ai([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aV,r)},
j1(a,b){var s,r,q,p=A.D(t.N,t.X)
for(s=new A.aB(a,A.m(a).i("aB<1,2>")).gt(0);s.m();){r=s.d
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.mH("archived",new A.nQ())
return p},
l2(a,b,c){var s,r,q,p,o
if(a==null)return B.cf
s=t.N
r=A.aS(s)
s=A.e_(a.gO(),s)
s.F(0,new A.U(b,A.m(b).i("U<1>")))
for(s=A.fA(s,s.r,A.m(s).c),q=s.$ti.c;s.m();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.n.Y(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.P(r,r.$ti.c)
B.c.aT(o)
return o},
dH(a){return this.rY(a)},
rY(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbf().ai('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dH)
case 3:m=c
l=J.K(m)
if(l.gA(m)){q=null
s=1
break}o=p.a
q=A.cj(n,l.gD(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dH,r)},
ha(a){return this.rI(a)},
rI(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$ha=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbf().ai('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$ha)
case 3:j=c
k=J.K(j)
if(k.gA(j)){q=B.cA
s=1
break}o=k.gD(j)
k=p.a
n=A.cj(l,o,k.y,k.z)
m=o.h(0,"s_sync_state")!=null?A.lj(A.n(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.es(n,m,o.h(0,"o_kind")!=null?A.r5(A.n(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
bN(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.d==null
if(g&&p.b.d.a.G(a)){q=p.b.d.bN(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
s=m>1?3:5
break
case 3:s=6
return A.a(p.gbf().ai("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bN)
case 6:s=4
break
case 5:s=7
return A.a(p.gbf().ai('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bN)
case 7:case 4:k=c
l=J.K(k)
if(l.gA(k)){if(g)o.d.kt(a,null)
q=null
s=1
break}j=l.gD(k)
l=p.a
i=A.cj(n,j,l.y,l.z)
h=A.b4(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.I2(n,i,h,m)
if(g)o.d.kt(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
lT(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.aJ('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.zC(p,n)
if(m!=null)throw A.b(A.aJ(A.Ee(p,m),o))}s=this.a.f
if(d>s)throw A.b(A.aJ("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.nW.prototype={
$1(a){return a.bX(this.a.b.a.a).i1(this.b)},
$S:6}
A.nY.prototype={
$1(a){return a.bX(this.a.b.a.a).mY(this.b)},
$S:6}
A.nU.prototype={
$1(a){return a.bX(this.a.b.a.a).mF(this.b,this.c)},
$S:6}
A.nT.prototype={
$1(a){return a.bX(this.a.b.a.a).m0(this.b)},
$S:6}
A.nX.prototype={
$1(a){return a.bX(this.a.b.a.a).mQ(this.b)},
$S:6}
A.nV.prototype={
$1(a){return a.bX(this.a.b.a.a).k6(this.b)},
$S:6}
A.nS.prototype={
n3(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dH(a),$async$$1)
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
$1(a){return this.n3(a)},
$S:183}
A.nR.prototype={
$1(a){return a!=="id"},
$S:12}
A.nQ.prototype={
$0(){return!1},
$S:42}
A.lV.prototype={}
A.bu.prototype={
a_(a){this.c.push(a)
this.a.e.r+=a.b.a},
bs(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bX(a){var s=this.a
return new A.dO(s,s.ae(a),this.b,this)},
cm(a,b,c){return this.tH(a,b,c,c)},
tH(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cm=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.H("SAVEPOINT "+a2),$async$cm)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.e
k=e.r
p=5
d=A.B3(f,a,h,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.yg(new A.tG(a3,j,a4),null,A.n([$.n9(),j],f,f),a4.i("y<0>")),$async$cm)
case 8:i=a7
s=9
return A.a(a.H("RELEASE "+a2),$async$cm)
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
return A.a(a.H("ROLLBACK TO "+a2),$async$cm)
case 14:s=15
return A.a(a.H("RELEASE "+a2),$async$cm)
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
if(a>m)B.c.mN(h,m,a)
a=g.length
if(a>l)B.c.mN(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cm,r)}}
A.tG.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.wy.prototype={}
A.hV.prototype={
kv(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.C(0,this.x))return!1
return!0},
c_(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$c_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.b.aM(n.a,1,"id = ?",[p.x]),$async$c_)
case 3:m=b
l=J.K(m)
if(l.gA(m)){q=null
s=1
break}q=A.cj(n,l.gD(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
jv(a){return a==null?"<null>":A.aD(B.l.v(B.f.v(A.aj(a))).a)},
mE(a){var s=this.y
return s==null?null:s.u(0,a)},
jY(a,b){var s=this.y
return s==null?null:s.bG(a,b)},
nW(){var s=this.y=A.z2(this.guW(),new A.qZ(this),null,!1,t.b)
return new A.bb(s,A.m(s).i("bb<1>"))},
hz(){this.nZ()
var s=this.y
if(s!=null)s.p()}}
A.qZ.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.av()
s=2
return A.a(p.eA(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.c3.prototype={
jY(a,b){},
av(){var s=this.a.a$.a
this.c=new A.b3(s,A.m(s).i("b3<1>")).aW(this.grk())},
hP(){return this.vU(A.m(this).i("c3.T"))},
vU(a){var s=0,r=A.h(a),q,p=this,o
var $async$hP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c_(),$async$hP)
case 3:o=c
p.r=p.jv(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
rl(a){var s,r=this
if(!r.kv(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.B()
r.d=A.cv(r.b,r.glU())},
eA(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$eA=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.e;++i.y
q=3
s=6
return A.a(n.c_(),$async$eA)
case 6:m=b
l=n.jv(m)
if(!J.t(l,n.r)){n.r=l;++i.z
n.mE(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.C(g)
j=A.a7(g)
n.jY(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.B()
n.d=A.cv(n.b,n.glU())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eA,r)},
hz(){var s=this.d
if(s!=null)s.B()
s=this.c
if(s!=null)s.B()}}
A.uI.prototype={
aZ(a,b){var s,r=this;++r.b
r.lo()
s=new A.q($.u,b.i("q<0>"))
r.a=r.a.aO(new A.uJ(r,new A.aC(s,b.i("aC<0>")),a),t.H)
return s},
lo(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.uJ.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.az(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.C(i)
l=A.a7(i)
n.b.bt(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lo()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:28}
A.nv.prototype={}
A.eI.prototype={
k(a){return"BlobMissingError: "+this.a},
$iJ:1}
A.jL.prototype={
k(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iJ:1}
A.le.prototype={}
A.y6.prototype={
$1(a){return B.c.F(this.a,a)},
$S:70}
A.hp.prototype={}
A.ph.prototype={
bo(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bo=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.bD
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.at
a3===$&&A.x()
b5=J
s=3
return A.a(a3.eF(25),$async$bo)
case 3:a4=b5.I(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.m()){s=5
break}i=a4.gn()
p=7
s=i.e===B.aZ?10:12
break
case 10:s=13
return A.a(n.ce(i,b2),$async$bo)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.mC(i.b),$async$bo)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b_?17:18
break
case 17:s=19
return A.a(n.eq(i),$async$bo)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.mC(i.b),$async$bo)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.C(b3)
j=!0
e=i.w+1
d=a5.me(e)
a8=i.b
a9=J.ap(f)
b0=a6.$0()
s=23
return A.a(a3.wb(a8,a9,e,b0+B.b.K(d.a,1000)),$async$bo)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.ch,a4=new A.bS(a3,a3.r,a3.e,A.m(a3).i("bS<1>")),a2=a2.b
case 24:if(!a4.m()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.v(A.w('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.e3("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bo)
case 28:a5=b5.I(b7)
case 29:if(!a5.m()){s=30
break}b=a5.gn()
p=32
a6=J.T(b,"ref_id")
a6.toString
a=A.M(a6)
a6=J.T(b,"record_id")
a6.toString
a0=A.M(a6)
a1=A.aa(J.T(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cX(a0,a,a1,c),$async$bo)
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
case 25:q=new A.hp(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bo,r)},
ce(a,b){return this.rM(a,b)},
rM(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ce=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aA(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.M(a1)
l=a0.h(0,"hash")
l.toString
A.M(l)
k=A.aa(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bk(l),$async$ce)
case 3:if(!a6)throw A.b(A.w("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bc(l),$async$ce)
case 4:j=a6
if(j==null)throw A.b(A.w("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.z
i===$&&A.x()
s=9
return A.a(i.bO(a3.d),$async$ce)
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
if(m!=null){f=B.a.q(l,0,B.b.cU(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.xb(a3.d,A.n([k,new A.fc(k,j,new A.pj(a4,l))],t.N,t.h3)),$async$ce)
case 13:l=a6.e
a.a=l.length!==0?B.c.ga3(l):k
case 11:s=14
return A.a(n.a.Z(new A.pk(a,a1,a3),t.P),$async$ce)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ce,r)},
eq(a){return this.rL(a)},
rL(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aA(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.M(l)
o=A.aa(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.M(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.x9(a.d,A.l([o],t.s)),$async$eq)
case 5:case 4:s=6
return A.a(p.a.Z(new A.pi(l,n,a),t.P),$async$eq)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eq,r)},
cX(a,b,c,d){return this.uY(a,b,c,d)},
uY(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cX=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.x()
k=m
s=4
return A.a(l.hA(c,a,null),$async$cX)
case 4:s=3
return A.a(k.i1(f),$async$cX)
case 3:o=f
s=5
return A.a(m.bc(o),$async$cX)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.Z(new A.pl(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cX)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cX,r)},
d3(a,b,c,d){return this.wf(a,b,c,d)},
wf(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$d3=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.e3("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$d3)
case 2:k=f
j=A.qd(c,A.a6(c).c)
i=J.aA(k)
h=t.x
g=A.e_(new A.bv(i.c5(k,new A.pm(),t.v),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.C(0,n)?6:7
break
case 6:s=8
return A.a(a.c2(0,"lp_file_refs",A.n(["ref_id",A.jj(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bA),$async$d3)
case 8:case 7:case 4:c.length===h||(0,A.A)(c),++o
s=3
break
case 5:i=i.gt(k)
case 9:if(!i.m()){s=10
break}h=i.gn()
m=A.aa(h.h(0,"remote_name"))
if(m==null){s=9
break}if(j.C(0,m)){s=9
break}q=h.h(0,"state")
q.toString
A.M(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.a6("lp_file_refs","ref_id = ?",[q]),$async$d3)
case 11:l=A.aa(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.S(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aB(u.y,[l]),$async$d3)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$d3,r)}}
A.pj.prototype={
$0(){return this.a.ct(this.b)},
$S:71}
A.pk.prototype={
$1(a){return this.n6(a)},
n6(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.n(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a1(p.c,A.ai([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pi.prototype={
$1(a){return this.n5(a)},
n5(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.a6("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aB(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a_(new A.a1(p.c,A.ai([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pl.prototype={
$1(a){return this.n7(a)},
n7(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.h1(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.n(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a_(new A.a1(q.f,A.ai([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pm.prototype={
$1(a){return A.aa(a.h(0,"remote_name"))},
$S:72}
A.b7.prototype={}
A.pg.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"ref_id")
j.toString
A.M(j)
s=k.h(0,"store")
s.toString
A.M(s)
r=k.h(0,"record_id")
r.toString
A.M(r)
q=k.h(0,"field")
q.toString
A.M(q)
p=k.h(0,"hash")
p.toString
A.M(p)
o=A.aa(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.M(n)
m=A.b4(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.b4(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.b7(j,s,r,q,p,o,n,m,l,A.aa(k.h(0,"last_error")))},
$S:73}
A.qh.prototype={
glC(){return this.b},
gjS(){var s=0,r=A.h(t.y),q,p=this
var $async$gjS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dA()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gjS,r)},
dZ(a,b,c){return this.w1(a,b,c)},
w1(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$dZ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.b.e3("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$dZ)
case 3:o=n.aL(e,A.IE(),t.A)
o=A.P(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
cT(a,b,c,d,e,f,g,h){return this.u2(a,b,c,d,e,f,g,h)},
u2(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$cT=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.glC()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dA(),$async$cT)
case 5:j=!j
case 4:if(j)throw A.b(A.w("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.d5(b,c,d),$async$cT)
case 6:o=j
s=7
return A.a(m.bc(o),$async$cT)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.Z(new A.qi(p,h,g,e,o,n,A.jj(),f),t.A),$async$cT)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cT,r)},
eW(a,b,c,d,e){return this.wi(a,b,c,d,e)},
wi(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$eW=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.glC()
s=3
return A.a(p.dZ(a,c,e),$async$eW)
case 3:k=g
j=J.K(k)
if(j.gA(k))throw A.b(A.w("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.eJ(k,new A.qk(d),new A.ql(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.w("File is remote_only; download it before opening."))
j=p.a
n=j.Q.$0()
m=o.e
s=4
return A.a(j.b.aB("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$eW)
case 4:q=l.ct(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eW,r)},
f3(a,b,c,d,e,f){return this.wN(0,b,c,d,e,f)},
wN(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$f3=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dZ(b,d,f),$async$f3)
case 3:n=h
m=J.K(n)
if(m.gA(n)){s=1
break}o=e!=null?m.eJ(n,new A.qm(e),new A.qn(e)):m.h(n,c)
s=4
return A.a(p.a.Z(new A.qo(p,o,f,d,b),t.P),$async$f3)
case 4:case 1:return A.e(q,r)}})
return A.f($async$f3,r)},
ba(a,b){return this.nB(a,b)},
nB(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$ba=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.dO(a8),$async$ba)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.Q.$0()-B.b.K(a7.a,1000)
s=6
return A.a(e.Z(new A.qj(a2,n),t.P),$async$ba)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.eO(),$async$ba)
case 13:l=b0
s=J.eG(l)?14:15
break
case 14:k=0
j=A.aS(t.N)
d=e.b,c=t.s
case 16:s=18
return A.a(d.ww("lp_blobs",A.l(["hash"],c),250,k,"hash ASC"),$async$ba)
case 18:i=b0
for(b=J.I(i);b.m();){h=b.gn()
a=J.T(h,"hash")
a.toString
J.bp(j,A.M(a))}if(J.ao(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.I(l),c=t.jQ
case 19:if(!d.m()){s=20
break}g=d.gn()
if(J.yq(j,g)){s=19
break}p=22
b=new A.q($.u,c)
b.aU(null)
s=25
return A.a(b,$async$ba)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.cW(g),$async$ba)
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
case 12:case 8:e=e.b,d=t.s
case 27:s=29
return A.a(e.wy("lp_blobs",A.l(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$ba)
case 29:a1=b0
c=J.K(a1)
if(c.gA(a1)){s=28
break}c=c.gt(a1)
case 30:if(!c.m()){s=31
break}b=c.gn().h(0,"hash")
b.toString
A.M(b)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.cW(b),$async$ba)
case 34:case 33:s=35
return A.a(e.a6("lp_blobs","hash = ?",[b]),$async$ba)
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
return A.f($async$ba,r)},
co(a){return this.v6(a)},
v6(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$co=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.b
e=A
s=3
return A.a(g.aX("SELECT SUM(size) as total FROM lp_blobs"),$async$co)
case 3:f=e.fX(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.aX("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$co)
case 6:l=c
k=J.K(l)
if(k.gA(l)){s=5
break}k=k.gt(l)
case 7:if(!k.m()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.M(i)
j=j.h(0,"size")
j.toString
A.ah(j)
s=9
return A.a(h.cW(i),$async$co)
case 9:s=10
return A.a(g.L("lp_file_refs",A.n(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$co)
case 10:s=11
return A.a(g.a6("lp_blobs","hash = ?",[i]),$async$co)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$co,r)}}
A.qi.prototype={
$1(a){return this.na(a)},
na(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.Q.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.e4("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.K(c)
if(b.gW(c)){q=A.An(b.gD(c))
s=1
break}s=4
return A.a(A.h1(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.e4("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.K(o)
n=h.gW(o)&&J.T(h.gD(o),"base_updated")==null?A.aa(J.T(h.gD(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.c2(0,"lp_file_refs",A.n(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.N),$async$$1)
case 6:k=A.jj()
s=7
return A.a(j.aC(0,"lp_op_queue",A.n(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a7(A.n(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a_(new A.a1(g,A.ai([f],m)))
q=new A.b7(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:74}
A.qk.prototype={
$1(a){return a.a===this.a},
$S:50}
A.ql.prototype={
$0(){return A.v(A.w("FileRef "+this.a+" not found"))},
$S:31}
A.qm.prototype={
$1(a){return a.a===this.a},
$S:50}
A.qn.prototype={
$0(){return A.v(A.w("FileRef "+this.a+" not found"))},
$S:31}
A.qo.prototype={
$1(a){return this.nc(a)},
nc(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.a.a.Q.$0()
n=q.b
m=n.r==="pending_upload"&&n.f==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.a6("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aB(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.n(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.n(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.n(["op_id",A.jj(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a7(A.n(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a1(q.c,A.ai([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qj.prototype={
$1(a){return this.nb(a)},
nb(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.ch,p=new A.bS(p,p.r,p.e,A.m(p).i("bS<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.m()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ai('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.z(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.I(c)
case 5:if(!l.m()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.M(j)
k=k.h(0,"hash")
k.toString
A.M(k)
s=7
return A.a(i.a6("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aB(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.L("lp_op_queue",A.n(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.u6.prototype={
ep(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$ep=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.h0()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a0(n.getDirectory(),l),$async$ep)
case 7:m=b
s=8
return A.a(A.a0(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$ep)
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
return A.f($async$ep,r)},
dA(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.ep(),$async$dA)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
bh(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bh=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dA(),$async$bh)
case 3:if(!b){q=null
s=1
break}p=5
m=A.h0()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a0(m.getDirectory(),k),$async$bh)
case 8:l=b
s=9
return A.a(A.a0(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bh)
case 9:k=b
q=new A.mj(k)
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
return A.f($async$bh,r)},
d5(a,b,c){return this.wu(a,b,c)},
i1(a){return this.d5(a,null,null)},
wu(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$d5=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.v6(A.l([],t.bs))
s=3
return A.a(A.jn(a,b,c,null,new A.u7(o)),$async$d5)
case 3:n=e
m=o.kc()
s=4
return A.a(p.bh(),$async$d5)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.aR(k,m),$async$d5)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d5,r)},
ct(a){return this.wk(a)},
wk(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$ct=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jM(a)
j=n.b
if(j.G(a)){j=j.h(0,a)
j.toString
q=A.z3(j,t.L)
s=1
break}s=3
return A.a(n.bh(),$async$ct)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.e5(a),$async$ct)
case 10:l=c
j=A.z3(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.C(h)
if(!(k instanceof A.eI))throw A.b(A.A8(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.w("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ct,r)},
cW(a){return this.ut(a)},
ut(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$cW=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.jM(a)
o.b.E(0,a)
s=2
return A.a(o.bh(),$async$cW)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.E(0,a),$async$cW)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.C(k)
if(!(m instanceof A.eI))throw A.b(A.A8(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cW,r)},
bk(a){return this.vc(a)},
vc(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.jM(a)
if(p.b.G(a)){q=!0
s=1
break}s=3
return A.a(p.bh(),$async$bk)
case 3:o=c
if(o!=null){q=o.bk(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bk,r)},
bc(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.I),q,p=this,o,n
var $async$bc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.jM(a)
o=p.b
if(o.G(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bh(),$async$bc)
case 3:n=c
if(n!=null){q=n.bc(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bc,r)},
dO(a){return this.u9(a)},
u9(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$dO=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bh(),$async$dO)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.dY(),$async$dO)
case 8:k=f.I(c)
case 9:if(!k.m()){s=10
break}l=k.gn()
if(!J.E_(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.E(0,l),$async$dO)
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
return A.f($async$dO,r)},
eO(){var s=0,r=A.h(t.k),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$eO=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.e_(new A.U(j,A.m(j).i("U<1>")),t.N)
s=3
return A.a(n.bh(),$async$eO)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.dY(),$async$eO)
case 10:j=f.I(b)
case 11:if(!j.m()){s=12
break}m=j.gn()
l=$.zL()
if(l.b.test(m))J.bp(i,m)
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
j=A.P(j,A.m(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eO,r)}}
A.u7.prototype={
$1(a){return this.a.u(0,a)},
$S:25}
A.mj.prototype={
e5(a){return this.wD(a)},
wD(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$e5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a0(n.a.getFileHandle(a,{create:!1}),i),$async$e5)
case 7:m=c
s=8
return A.a(A.a0(m.getFile(),i),$async$e5)
case 8:l=c
s=9
return A.a(A.a0(l.arrayBuffer(),t.a),$async$e5)
case 9:k=c
i=A.bH(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.C(g)
if(A.Ba(j))throw A.b(A.A7(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e5,r)},
aR(a,b){return this.xh(a,b)},
xh(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.m
n=A
s=3
return A.a(A.a0(q.a.getFileHandle(a,{create:!0}),p),$async$aR)
case 3:s=2
return A.a(n.a0(d.createWritable(),p),$async$aR)
case 2:o=d
p=t.X
s=4
return A.a(A.a0(o.write(t.a.a(B.e.ga5(b))),p),$async$aR)
case 4:s=5
return A.a(A.a0(o.close(),p),$async$aR)
case 5:return A.e(null,r)}})
return A.f($async$aR,r)},
E(a,b){return this.wO(0,b)},
wO(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$E=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.yE(o.a,b),$async$E)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.C(l)
if(A.Ba(n))throw A.b(A.A7(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$E,r)},
bk(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bk=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a0(n.a.getFileHandle(a,{create:!1}),t.m),$async$bk)
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
return A.f($async$bk,r)},
bc(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.I),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bc=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a0(n.a.getFileHandle(a,{create:!1}),k),$async$bc)
case 7:m=c
s=8
return A.a(A.a0(m.getFile(),k),$async$bc)
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
return A.f($async$bc,r)},
dY(){var s=0,r=A.h(t.k),q,p=2,o=[],n=[],m=this,l,k,j
var $async$dY=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.bZ(A.bL(A.Ao(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.m(),$async$dY)
case 8:if(!b){s=7
break}l=j.gn()
J.bp(k,l.name)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=9
return A.a(j.B(),$async$dY)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dY,r)},
$iAL:1}
A.lm.prototype={
gmL(){return 1}}
A.nr.prototype={
da(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$da=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.el(),$async$da)
case 5:o=b
s=o.gmL()<0.25?6:7
break
case 6:s=8
return A.a(p.jd(o),$async$da)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gmL()<0.25?9:10
break
case 9:s=11
return A.a(p.jd(m),$async$da)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$da,r)},
i4(){var s=0,r=A.h(t.q),q,p=this
var $async$i4=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.el(),$async$i4)
case 3:q=p.jd(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i4,r)},
el(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$el=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.jz():j
p=3
s=6
return A.a(l,$async$el)
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
return A.f($async$el,r)},
jd(a){var s=this.c
if(s!=null)return s
return this.c=this.fs(a)},
fs(a){return this.p_(a)},
p_(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fs=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.w("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.k7(l),$async$fs)
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
return A.f($async$fs,r)}}
A.kQ.prototype={
hZ(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$hZ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.x()
s=7
return A.a(m.i0(),$async$hZ)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.C(k)
if(m instanceof A.cn){n.as=!1
n.ax=!0}else if(m instanceof A.bm)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hZ,r)},
fm(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$fm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.x()
n=A.l(["data"],t.s)
m=A.c6(null,t.H)
l=A.Fb(B.bB,B.aL,A.Jb())
k=new A.rm(o,n,l,p.grs(),p.grv(),m)
p.Q=k
s=3
return A.a(k.av(),$async$fm)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
eg(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aD()
s=2
return A.a(o instanceof A.q?o:A.bd(o,t.H),$async$eg)
case 2:q.Q=null
for(o=q.ch,p=new A.aR(o,o.r,o.e,A.m(o).i("aR<2>"));p.m();)p.d.B()
o.ah(0)
q.CW.ah(0)
return A.e(null,r)}})
return A.f($async$eg,r)},
rt(){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
this.eh(p,new A.cl(p,B.Y,null))}},
rw(a){var s=a.b,r=s.b
if(!B.c.C(this.c,r))return
if(a.a==="delete"){this.hh(s)
return}this.eh(r,new A.cl(r,B.Y,s))},
hh(a){return this.tE(a)},
tE(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hh=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.c.C(n.c,j)){s=1
break}m=null
p=4
l=n.z
l===$&&A.x()
s=7
return A.a(l.bO(a.a),$async$hh)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.C(i)
if(l instanceof A.cq){n.eh(j,new A.cl(j,B.az,null))
s=1
break}else if(l instanceof A.bm){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eh(j,new A.cl(j,B.az,null))
s=1
break}n.eh(j,new A.cl(j,B.Y,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hh,r)},
eh(a,b){var s,r
this.CW.j(0,a,b)
s=this.ch
r=s.h(0,a)
if(r!=null)r.B()
s.j(0,a,A.cv(B.bC,new A.ru(this,a)))},
x9(a,b){return this.i9(null,a,null,b,null)},
i9(a,b,c,d,e){return this.xc(a,b,c,d,e)},
xb(a,b){return this.i9(null,a,null,null,b)},
xc(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$i9=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.c6(0,new A.rv(),t.N,t.co)
n=p.z
n===$&&A.x()
q=n.i8(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)}}
A.ru.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.E(0,q)
s=r.CW.E(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.u(0,s)},
$S:0}
A.rv.prototype={
$2(a,b){return new A.S(a,new A.d6("imgs+",b.a,b.b,b.c),t.ia)},
$S:77}
A.re.prototype={
eQ(a,b,c,d,e,f){return this.w3(a,b,c,d,e,f)},
w3(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$eQ=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Jh(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.z(c,"'","\\'")+"'")}n=t.N
n=A.D(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.b.i7(B.b.cU(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.c.J(b,","))
k=p.b.bn("/api/collections/data/records").ka(n)
s=3
return A.a(p.lG("GET",k),$async$eQ)
case 3:j=a0
p.cK(j,A.l([200],t.t),k)
i=p.cJ(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bi("List response has no items array."))
h=J.aL(i,new A.rl(p),t.Q)
h=A.P(h,h.$ti.i("V.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eQ,r)},
bO(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bn("/api/collections/data/records/"+A.fL(2,a,B.k,!1))
s=3
return A.a(p.lG("GET",o),$async$bO)
case 3:n=c
if(n.a===404)throw A.b(A.F7("not found"))
p.cK(n,A.l([200],t.t),o)
q=p.dC(p.cJ(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bO,r)},
hv(a,b,c){return this.uk(a,b,c)},
uk(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hv=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bn("/api/collections/data/records")
s=3
return A.a(p.ex("POST",o,B.h.a7(A.n(["id",b,"store",c,"data",B.h.aA(a,null)],t.N,t.z),null)),$async$hv)
case 3:n=e
if(n.a===400&&p.r6(n))throw A.b(new A.eN(p.ei(n)))
p.cK(n,A.l([200,201],t.t),o)
q=p.dC(p.cJ(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
r6(a){var s,r,q,p,o,n
try{s=this.cJ(a)
r=J.T(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.t(p,"validation_not_unique")||J.t(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
f9(a,b,c){return this.x8(a,b,c)},
x8(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$f9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bn("/api/collections/data/records/"+A.fL(2,c,B.k,!1))
s=3
return A.a(p.ex("PATCH",o,B.h.a7(A.n(["data",B.h.aA(b,null)],t.N,t.z),null)),$async$f9)
case 3:n=e
p.cK(n,A.l([200],t.t),o)
q=p.dC(p.cJ(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
i8(a,b,c,d,e){return this.xa(a,b,c,d,e)},
xa(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$i8=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bn("/api/collections/data/records/"+A.fL(2,b,B.k,!1))
m=t.N
l=A.D(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a7(d,null))
if(e==null)m=null
else{m=A.m(e).i("av<2>")
m=A.P(new A.av(e,m),m.i("o.E"))}s=3
return A.a(p.ti(new A.kc("PATCH",n,B.ak,l,m==null?B.cc:m)),$async$i8)
case 3:o=g
p.cK(o,A.l([200],t.t),n)
q=p.dC(p.cJ(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
hA(a,b,c){return this.uZ(a,b,c)},
uZ(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.D(l,l)
o=p.b.bn("/api/files/data/"+A.fL(2,b,B.k,!1)+"/"+A.fL(2,a,B.k,!1))
n=l.a===0?o:o.ka(l)
s=3
return A.a(p.rz(new A.dW("GET",n,B.ak,null)),$async$hA)
case 3:m=e
p.cK(new A.co(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
f_(a){return this.wt(a)},
wt(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$f_=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bn("/api/batch")
a3=A.l([],t.ic)
for(o=J.aA(a4),n=o.gt(a4),m=t.N,l=t.z,k=t.K;n.m();){j=n.gn()
a3.push(A.n(["method","PUT","url","/api/collections/data/records","body",A.n(["id",j.c,"store",j.b,"data",B.h.aA(j.d,null)],m,l)],m,k))}s=3
return A.a(p.ex("POST",a2,B.h.a7(A.n(["requests",a3],m,t.ew),null)),$async$f_)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.Ey(p.ei(i)))
if(a3===400)throw A.b(new A.dI(p.ei(i)))
p.cK(i,A.l([200],t.t),a2)
h=B.h.aA(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bi("Batch response has no results array."))}else throw A.b(A.bi("Batch response is not a list or envelope."))
g=e}a3=J.K(g)
if(a3.gl(g)!==o.gl(a4))throw A.b(A.bi("Batch response has "+a3.gl(g)+" results for "+o.gl(a4)+" requests."))
d=A.l([],t.g2)
for(n=t.f,c=0;c<o.gl(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bi("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dE(a)
a0=l.R(a,200)||l.R(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dC(a1):null
k=a0?null:p.p8(b)
j=a0&&n.b(a1)?B.h.a7(a1.h(0,"data"),null):null
d.push(new A.i2(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f_,r)},
i0(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$i0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ex("POST",p.b.bn("/api/batch"),B.h.a7(A.n(["requests",[]],t.N,t.W),null)),$async$i0)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.E2(p.ei(o)))
if(n===408||n===429||n>=500)throw A.b(A.B2("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
ex(a,b,c){return this.bV(new A.rh(this,a,b,c),new A.ri(),t.w)},
lG(a,b){return this.ex(a,b,null)},
ti(a){return this.bV(new A.rj(this,a),new A.rk(),t.w)},
rz(a){return this.bV(new A.rf(this,a),new A.rg(),t.lI)},
bV(a,b,c){return this.tG(a,b,c,c)},
tG(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bV=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.da(),$async$bV)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$bV)
case 8:l=f
s=J.t(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.i4(),$async$bV)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$bV)
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
if(i instanceof A.d7){j=i
throw A.b(A.B2(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bV,r)},
jh(a,b,c,d){return this.tg(a,b,c,d)},
tg(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jh=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.D(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b0(new A.dW(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jh,r)},
cK(a,b,c){if(B.c.C(b,a.a))return
throw A.b(this.r9(a,c))},
r9(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.ei(a)
if(401===s)return new A.bP(q)
if(403===s)return new A.cn(q)
if(404===s)return new A.cq(q)
if(408===s||429===s)return new A.ea(r,q)
if(400===s)return new A.f2(q)
if(s>=500)return new A.ia(q)
return new A.f3("Unexpected status "+s+" for "+b.k(0)+": "+q)},
ei(a){var s,r,q,p,o
try{s=this.cJ(a)
r=J.T(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.T(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.h.a7(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.q(p,0,500)},
cJ(a){var s,r,q,p=null
try{p=B.h.aA(a.c,null)}catch(r){q=A.C(r)
if(t.Y.b(q)){s=q
throw A.b(A.bi("Response is not valid JSON: "+s.gjW()))}else throw r}if(t.f.b(p))return A.b_(p,t.N,t.X)
throw A.b(A.bi("Expected a JSON object, got "+J.bq(p).k(0)+"."))},
dC(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bi("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bi("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.b_(o,n,m):A.D(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.A1(k,n)
j=A.P(j,j.$ti.i("o.E"))}else j=B.q
return new A.cs(s,p,q,l,j)},
p8(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.rl.prototype={
$1(a){return this.a.dC(a)},
$S:78}
A.rh.prototype={
$1(a){var s=this
return s.a.jh(s.b,s.c,s.d,a)},
$S:51}
A.ri.prototype={
$1(a){return a.a},
$S:52}
A.rj.prototype={
$1(a){var s=this.b,r=t.N
r=A.dZ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dg(new A.kc(s.a,s.b,r,s.d,s.e))},
$S:51}
A.rk.prototype={
$1(a){return a.a},
$S:52}
A.rf.prototype={
$1(a){var s=this.b,r=t.N
r=A.dZ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.e2(new A.dW(s.a,s.b,r,s.d))},
$S:81}
A.rg.prototype={
$1(a){return a.a},
$S:82}
A.hY.prototype={}
A.fF.prototype={}
A.rm.prototype={
av(){var s=0,r=A.h(t.H),q,p=this
var $async$av=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.ew()
case 1:return A.e(q,r)}})
return A.f($async$av,r)},
aD(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.B()
s=2
return A.a(n instanceof A.q?n:A.bd(n,t.H),$async$aD)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.ap()
return A.e(null,r)}})
return A.f($async$aD,r)},
ew(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$ew=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.cG(),$async$ew)
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
return A.a(A.EE(n.$1(k),m),$async$ew)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ew,r)},
cG(){return this.oQ()},
oQ(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.da(),$async$cG)
case 3:m=b
l=t.N
s=4
return A.a(n.a.e2(new A.dW("GET",n.b.bn("/api/realtime"),A.n(["Authorization","Bearer "+m.a],l,l),null)),$async$cG)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.hw("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aW(new A.rp()).B(),$async$cG)
case 7:s=1
break
case 6:++p.as
p.z=new A.aC(new A.q($.u,t.D),t.h)
n=$.na()
l=A.l([],t.s)
o.a=o.b=!1
p.y=k.c.bI(new A.rq(o,p,new A.wF(new A.vw(n),l),m),new A.rr(p),new A.rs(p))
s=8
return A.a(p.z.a,$async$cG)
case 8:p.y=null
if(o.a)throw A.b(A.hw("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cG,r)},
fM(a,b){return this.q2(a,b)},
q2(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$fM=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b0(new A.dW("POST",l.b.bn("/api/realtime"),A.n(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a7(A.n(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$fM)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.hw("realtime subscribe status "+l,null))
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
l=l.b(j)?A.b_(j,t.N,t.X):B.z
if(t.j.b(f)){c=J.A1(f,t.N)
c=A.P(c,c.$ti.i("o.E"))}else c=B.q
m=new A.cs(k,e,d,l,c)
p.w.$1(new A.hY(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$fM,r)}}
A.rt.prototype={
$1(a){var s,r,q,p,o=a<1?1:a,n=this.a.a
if(n<0)n=0
s=this.b.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.cE(B.t.mR(r*J.zZ(this.c.$1(o),0.5,1.5)),0,0)},
$S:83}
A.rp.prototype={
$1(a){},
$S:25}
A.rq.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.vg(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.A)(k),++n){m=k[n]
r.Q=r.Q.aO(new A.rn(q,r,m,p),o).m7(new A.ro())}},
$S:25}
A.rn.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=n.a
if(k.a){s=1
break}p=4
s=7
return A.a(n.b.fM(n.c,n.d),$async$$1)
case 7:p=2
s=6
break
case 4:p=3
j=o.pop()
k.a=!0
k=n.b
l=k.y
l=l==null?null:l.B()
s=8
return A.a(l instanceof A.q?l:A.bd(l,t.H),$async$$1)
case 8:k=k.z
if((k.a.a&30)===0)k.ap()
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
$S:84}
A.ro.prototype={
$1(a){},
$S:37}
A.rr.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.ap()},
$S:0}
A.rs.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.ap()},
$S:37}
A.wF.prototype={
vg(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.kc()
r=A.l([],t.bi)
for(q=s.length,p=0;;){o=this.r3(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.d0(p,o,q)))
p=o+1
m=this.oW(B.a.x3(new A.cZ(!0).cH(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.e.b1(s,p))
return r},
r3(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
pi(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.c.ah(k)
return l}s=m.b
r=B.c.J(k,"\n")
m.b=null
B.c.ah(k)
try{q=B.h.aA(r,l)
if(t.f.b(q)){p=A.b_(q,t.N,t.X)
o=J.T(p,"clientId")
if(J.t(s,"PB_CONNECT")&&typeof o=="string")return new A.fF(o,l)
return new A.fF(l,p)}}catch(n){}return l},
oW(a){var s,r=this,q=null
if(a.length===0)return r.pi()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.c.ah(r.c)
return new A.fF(B.a.dc(B.a.ag(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.dc(B.a.ag(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.dc(B.a.ag(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.dW.prototype={}
A.d6.prototype={
nX(){return this.d.$0()},
gl(a){return this.c}}
A.kc.prototype={}
A.co.prototype={}
A.d7.prototype={
k(a){return"HttpTransportException: "+this.a},
$iJ:1}
A.dk.prototype={}
A.rc.prototype={
b0(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.e2(a),$async$b0)
case 7:m=c
j=m.c
s=8
return A.a(B.aw.kB(j).dX(0).i6(B.a1),$async$b0)
case 8:l=c
j=m.a
i=m.b
q=new A.co(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.C(g)
if(j instanceof A.d7)throw g
else{k=j
j=A.hw("HTTP "+a.a+" "+a.b.k(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b0,r)},
dg(a){return this.nM(a)},
nM(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dg=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.F3(a6.a,a6.b)
h.r.F(0,a6.c)
h.x.F(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.nX(),$async$dg)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.D4(a0)
a3=new A.eW("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cx(A.D(d,d),e))
b.push(new A.kB(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.A)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b0(m).i6(B.a1),$async$dg)
case 11:k=a8
g=k.w
s=12
return A.a(B.aw.kB(g).dX(0).i6(B.a1),$async$dg)
case 12:j=a8
g=k.b
f=k.e
q=new A.co(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.C(a5)
if(g instanceof A.d7)throw a5
else{i=g
g=A.hw("HTTP multipart "+a6.a+" "+a6.b.k(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dg,r)},
e2(a){return this.wm(a)},
wm(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$e2=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.Fo(a,a0)
a1.r.F(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjF().jD(j)
i.oH()
i.y=A.Jl(j)
h=i.gcd()
if(h==null){j=t.N
i.scd(A.yQ("text","plain",A.n(["charset",i.gjF().gb7()],j,j)))}else{j=i.gcd()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.bY(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.G("charset")){j=t.N
f=A.n(["charset",i.gjF().gb7()],j,j)
e=h.a
d=h.b
c=A.b_(h.c,j,j)
c.F(0,f)
i.scd(A.yQ(e,d,c))}}}p=4
s=7
return A.a(n.a.b0(a1).i6(B.a1),$async$e2)
case 7:m=a5
j=t.N
l=A.D(j,j)
m.e.a2(0,new A.rd(l))
j=m.b
i=m.w
q=new A.dk(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.C(a2)
if(j instanceof A.d7)throw a2
else{k=j
a=A.hw("HTTP "+a+" "+a0.k(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e2,r)}}
A.rd.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:29}
A.ng.prototype={
aZ(a,b){var s=this.a.aO(new A.nh(a,b),b)
this.a=s.bu(new A.ni(b),new A.nj(),t.H)
return s}}
A.nh.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.ni.prototype={
$1(a){},
$S(){return this.a.i("R(0)")}}
A.nj.prototype={
$2(a,b){},
$S:10}
A.br.prototype={
gmM(){var s=this.e
return s.gl(s)===1&&J.t(s.h(0,"__lp_deleted__"),!0)}}
A.ob.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.M(d)
s=e.h(0,"record_id")
s.toString
A.M(s)
r=A.xF(e.h(0,l),l,k)
q=A.xF(e.h(0,j),j,k)
p=A.xF(e.h(0,i),i,k)
o=A.CG(e.h(0,h),h,k)
n=A.CG(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ah(m)
return new A.br(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.xF(e.h(0,f),f,k):null)},
$S:85}
A.oc.prototype={
eP(a){return this.w2(a)},
w2(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$eP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.b.wv("lp_conflicts","detected_at ASC",n,o),$async$eP)
case 3:o=m.aL(c,A.Is(),t.n8)
o=A.P(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eP,r)},
df(a,b){return this.nD(a,b)},
nD(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$df=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$df)
case 3:o=d
n=J.K(o)
if(n.gA(o)){q=null
s=1
break}q=A.yw(n.gD(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$df,r)},
xe(a){var s={},r=A.zg()
s.a=null
r.smo(A.ed(new A.of(s,r),new A.og(s,this,a,new A.oh(this,r,a)),t.ba))
return r.bi().gcE()},
e7(a,b,c){return this.wS(a,b,c)},
wS(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$e7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.ae(c)
s=2
return A.a(p.Z(new A.od(q,c,a,o.a,o,b),t.P),$async$e7)
case 2:return A.e(null,r)}})
return A.f($async$e7,r)},
eB(a,b){return this.tP(a,b)},
tP(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.df(a,b),$async$eB)
case 2:p=d
if(p==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=3
return A.a(q.e7(b,p.d,a),$async$eB)
case 3:return A.e(null,r)}})
return A.f($async$eB,r)},
dK(a,b){return this.tQ(a,b)},
tQ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$dK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.df(a,b),$async$dK)
case 3:n=d
if(n==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=n.gmM()?4:5
break
case 4:o=p.a
if(A.ln(o)!=null)A.v(A.w(u.L))
s=6
return A.a(new A.dO(o,o.ae(a),null,null).k6(b),$async$dK)
case 6:s=1
break
case 5:s=7
return A.a(p.e7(b,n.e,a),$async$dK)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dK,r)}}
A.oh.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bi().ghQ()){s=1
break}p=4
s=7
return A.a(n.a.eP(n.c),$async$$0)
case 7:m=b
if(!i.bi().ghQ())J.bp(i.bi(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.C(h)
k=A.a7(h)
if(!i.bi().ghQ())i.bi().bG(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.og.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b3(p,A.m(p).i("b3<1>")).aW(new A.oe(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.oe.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:41}
A.of.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.B()
s=2
return A.a(p instanceof A.q?p:A.bd(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bi().p(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.od.prototype={
$1(a){return this.n4(a)},
n4(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.K(a3)
if(a4.gA(a3))throw A.b(A.w("No conflict found for "+a1+"/"+a2))
o=A.yw(a4.gD(a3))
n=o.gmM()
m=n?null:A.aj(o.e)
l=n?"":A.aD(B.l.v(B.f.v(A.aj(A.b6(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aM(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bO(a8)?4:5
break
case 4:s=7
return A.a(a0.a6("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.a6("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.a6("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a_(new A.a1(a1,A.ai([a2],a4)))
a6.a_(new A.a1("lp_conflicts",A.ai([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aM("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.K(k)
if(i.gW(k)){h=A.aa(J.T(i.gD(k),"base_updated"))
i=h==null?A.aa(J.T(i.gD(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.a6("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.dZ(p.f,i,h)
g.j(0,"id",a2)
f=J.t(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dD(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bx(n?B.z:o.e,g)
d=A.P(a4,A.m(a4).c)
B.c.aT(d)
c=A.aj(A.b6(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.n(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a7(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aM("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bO(a8)?14:16
break
case 14:a4=p.a.a
b=a4.Q.$0()
h=f?B.I:B.v
e=B.h.a7(d,null)
a4=a4.as
a4===$&&A.x()
s=18
return A.a(a0.aC(0,"lp_outbox",A.Im(l,j,b,e,h,a4.kq(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.n(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a_(new A.a1(a1,A.ai([a2],i)))
a6.a_(new A.a1("lp_conflicts",A.ai([a2],i)))
a4=o.d
a=A.bx(a4,g)
a.E(0,"id")
a6.bs(new A.aV(a1,a2,B.a0,B.x,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.li.prototype={
av(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$av=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.ed(null,null,t.n6)
n.ay=A.ed(null,null,t.em)}n.z=!0
s=3
return A.a(n.aJ(B.cK),$async$av)
case 3:p=5
l=n.b
s=8
return A.a(l.hZ(),$async$av)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.x()
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
n.fr=new A.b3(l,A.m(l).i("b3<1>")).aW(n.gvE())
l=n.b.ay
n.fx=new A.b3(l,A.m(l).i("b3<1>")).aW(n.gvC())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aD(),$async$av)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.B_(B.aL,new A.tC(n))
s=14
return A.a(n.aJ(n.dr()),$async$av)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.cP(),$async$av)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$av,r)},
aD(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1;++p.db
o=p.fy
if(o!=null)o.B()
o=p.go
if(o!=null)o.B()
o=p.id
if(o!=null)o.B()
o=p.k1
if(o!=null)o.B()
s=3
return A.a(p.k4,$async$aD)
case 3:s=4
return A.a(p.dx,$async$aD)
case 4:s=5
return A.a(p.dy.a,$async$aD)
case 5:s=6
return A.a(p.p2,$async$aD)
case 6:o=p.fr
o=o==null?null:o.B()
n=t.H
s=7
return A.a(o instanceof A.q?o:A.bd(o,n),$async$aD)
case 7:o=p.fx
o=o==null?null:o.B()
s=8
return A.a(o instanceof A.q?o:A.bd(o,n),$async$aD)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.T
o.u(0,B.T)
s=12
return A.a(p.ax.p(),$async$aD)
case 12:s=10
break
case 11:p.y=B.T
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.p(),$async$aD)
case 15:case 14:p.y=B.T
case 1:return A.e(q,r)}})
return A.f($async$aD,r)},
dr(){if(this.at)return B.b9
if(this.Q)return B.b7
if(this.as)return B.an
return B.b8},
aJ(a){return this.tw(a)},
tw(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.p5(),$async$aJ)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aJ,r)},
p5(){return this.p2=this.p2.aO(new A.tu(this),t.H)},
fq(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fq=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=n.z
if(!g){s=1
break}m=0
l=0
k=0
j=0
p=4
g=n.e
g===$&&A.x()
s=7
return A.a(g.ht(),$async$fq)
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
if((g.c&4)===0)g.u(0,new A.ff(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fq,r)},
vF(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.te(B.a2)},
vD(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.ch.G(s))return
r=a.c
if(r!=null&&a.b===B.Y){q.p1.push("fast:"+s)
q.dx=q.dx.aO(new A.tA(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hf(B.a2,A.l([s],t.s))},
fv(a){return this.pe(a)},
pe(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$fv=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hf(B.a2,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.x()
s=7
return A.a(l.hB(a),$async$fv)
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
break}if(!m)n.hf(B.a2,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fv,r)},
vN(){if(!this.z)return
this.p1.push("cycle")
this.cP()},
hf(a,b){var s=this,r=s.go
if(r!=null)r.B()
if(b==null)s.k2=!0
else s.k3.F(0,b)
s.go=A.cv(a,new A.tz(s))},
te(a){return this.hf(a,null)},
td(a){var s=this.id
if(s!=null)s.B()
this.id=A.cv(B.A,new A.ty(this,a))},
j7(){this.as=!0
this.aJ(B.an)
A.hu(this.d,t.H)},
e_(){var s=0,r=A.h(t.H),q,p=this,o
var $async$e_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.as
o===$&&A.x()
s=3
return A.a(o.wQ(),$async$e_)
case 3:s=4
return A.a(p.aJ(p.dr()),$async$e_)
case 4:p.p1.push("cycle")
s=5
return A.a(p.cP(),$async$e_)
case 5:case 1:return A.e(q,r)}})
return A.f($async$e_,r)},
fk(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.H),q=this,p
var $async$fk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.B()
q.k1=A.cv(B.aJ,new A.tB(q))
s=3
break
case 4:s=5
return A.a(q.aJ(B.b7),$async$fk)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fk,r)},
bm(){var s=0,r=A.h(t.H),q=this
var $async$bm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aJ(B.b9),$async$bm)
case 2:return A.e(null,r)}})
return A.f($async$bm,r)},
b9(){var s=0,r=A.h(t.H),q,p=this
var $async$b9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aJ(p.dr()),$async$b9)
case 3:p.p1.push("cycle")
s=4
return A.a(p.cP(),$async$b9)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b9,r)},
jf(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.B()}s=t.mv
r=q.k4.aO(new A.tv(q,a),s)
q.k4=r.bu(new A.tw(),new A.tx(),s)
return r},
cP(){return this.jf(null)},
b2(a){return this.oZ(a)},
oZ(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b2=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.K
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aJ(n.dr()),$async$b2)
case 5:q=B.K
s=1
break
case 4:b3=t.N
a4=t.S
m=A.D(b3,a4)
l=A.D(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
s=6
return A.a(n.aJ(B.cL),$async$b2)
case 6:b3=b8==null
if(b3){a4=n.a.ch
a5=A.m(a4).i("U<1>")
a6=A.P(new A.U(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.x()
s=14
return A.a(a5.d4(h),$async$b2)
case 14:g=c0
J.bN(m,h,g.b)
if(g.f&&g.b>0)J.bp(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.C(b4)
if(a5 instanceof A.bP){n.j7()
s=9
break}else if(a5 instanceof A.bm){f=a5
k=!0
j=!0
n.ch=f.a}else throw b4
s=13
break
case 10:s=2
break
case 13:case 8:a6.length===a4||(0,A.A)(a6),++a7
s=7
break
case 9:s=n.as?15:16
break
case 15:s=17
return A.a(n.aJ(B.an),$async$b2)
case 17:q=n.ok=new A.b9(m,B.aa,0,0,0,0,!0)
s=1
break
case 16:s=b3?18:19
break
case 18:p=21
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.x()
s=24
return A.a(b3.dl(e),$async$b2)
case 24:d=c0
for(b3=J.I(d);b3.m();){c=b3.gn()
a4=c.a
a5=J.T(l,c.a)
if(a5==null)a5=0
J.bN(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.C(b5)
if(b3 instanceof A.bm){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aJ(B.cM),$async$b2)
case 25:a=B.R
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.x()
s=33
return A.a(b3.f0(),$async$b2)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.b.aX("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b2)
case 36:a0=c0
if(J.eG(a0)&&typeof J.T(J.c2(a0),"last_error")=="string"){b3=J.T(J.c2(a0),"last_error")
b3.toString
n.ch=A.M(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.C(b6)
if(b3 instanceof A.bP)n.j7()
else if(b3 instanceof A.bm){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b3=n.x
b3===$&&A.x()
s=41
return A.a(b3.bo(),$async$b2)
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
case 40:if(!(n.z&&b2===n.db)){q=B.K
s=1
break}if(J.ao(i)!==0)n.td(i)
a9=k||a.f
b0=new A.aN(A.p1(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dr()
s=42
return A.a(n.aJ(a9&&b1===B.b8?B.cN:b1),$async$b2)
case 42:q=n.ok=new A.b9(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b2,r)}}
A.tC.prototype={
$1(a){return this.a.vN()},
$S:53}
A.tu.prototype={
$1(a){return this.a.fq()},
$S:28}
A.tA.prototype={
$1(a){return this.a.fv(this.b)},
$S:28}
A.tz.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.P(q,A.m(q).c)
s.k2=!1
q.ah(0)
if(r||p.length===0)s.cP()
else s.jf(p)},
$S:0}
A.ty.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jf(this.b)},
$S:0}
A.tB.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aJ(p.dr()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.cP(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tv.prototype={
$1(a){return this.a.b2(this.b)},
$S:88}
A.tw.prototype={
$1(a){return B.K},
$S:89}
A.tx.prototype={
$1(a){return B.K},
$S:90}
A.cI.prototype={
k(a){return"MapFailure: "+this.a},
$iJ:1}
A.e6.prototype={}
A.xB.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.xC.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qE.prototype={}
A.de.prototype={}
A.kw.prototype={}
A.wt.prototype={}
A.wr.prototype={}
A.uN.prototype={}
A.qL.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.qK(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:92}
A.qF.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qG.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qH.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qI.prototype={
$1(a){return a instanceof A.q?a:A.c6(a,t.X)},
$S:93}
A.qJ.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.fA(s,s.r,A.m(s).c),r=this.b,q=J.K(a),p=s.$ti.c,o=0;s.m();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:94}
A.r_.prototype={
eF(a){return this.v_(a)},
v_(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$eF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.Q.$0()
e=e.b
s=3
return A.a(e.wx("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$eF)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.I(o);l.m();)m.push(A.F9(l.gn()))
l=A.aS(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.A)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.jo(e,l),$async$eF)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.A)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.C(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eF,r)},
mC(a){return this.a.Z(new A.r1(a),t.H)},
wb(a,b,c,d){return this.a.Z(new A.r2(c,d,b,a),t.H)}}
A.r1.prototype={
$1(a){return this.ng(a)},
ng(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.n(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r2.prototype={
$1(a){return this.nh(a)},
nh(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.n(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.nu.prototype={}
A.hJ.prototype={}
A.i3.prototype={}
A.r4.prototype={
kq(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cs(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
e6(a,b,c){return this.wF(a,b,c)},
wF(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$e6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$e6)
case 3:p=e
o=J.K(p)
q=o.gA(p)?null:A.r5(o.gD(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e6,r)},
bL(a,b,c){return this.wH(a,b,c)},
wH(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bL)
case 3:p=e
o=J.K(p)
q=o.gA(p)?null:A.lj(o.gD(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bL,r)},
bj(a,b,c,d,e,f,g,h,i,j,k,l){return this.u_(a,b,c,d,e,f,g,h,i,j,k,l)},
u_(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$bj=A.c(function(b8,b9){if(b8===1)return A.d(b9,r)
for(;;)switch(s){case 0:a2=b7.a
a3=a2.a
a4=b6==null
a5=!a4
if(a5&&b6.w===B.U)throw A.b(A.Af("Record "+a3+"/"+b0+u.W))
o=a5&&b6.w===B.ad
a5=b3==null
n=a5?null:b3.c
m=!1
if(a5){A:{if(B.C===a6){l=a7==null?B.v:B.I
break A}if(B.H===a6){l=a7==null?B.v:B.Q
break A}l=B.v
break A}n=l}else{l=b3.e
switch(b3.c.a){case 0:if(l==null){m=a6===B.C&&!a2.r
n=m?n:B.v}else{B:{if(B.C===a6){l=B.I
break B}if(B.H===a6){l=B.Q
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.H===a6){l=B.Q
break C}l=B.I
break C}n=l
break
case 2:D:{if(B.C===a6){l=B.I
break D}if(B.H===a6){l=B.Q
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a9.a6("lp_outbox","store = ? AND record_id = ?",[a3,b0]),$async$bj)
case 5:s=6
return A.a(a9.a6("lp_sync_row","store = ? AND record_id = ?",[a3,b0]),$async$bj)
case 6:s=7
return A.a(p.hg(a9,a3,b0),$async$bj)
case 7:s=8
return A.a(a9.a6(a3,"id = ?",[b0]),$async$bj)
case 8:q=B.bt
s=1
break
case 4:k=p.a.Q.$0()
j=a5?null:b3.w
if(j==null)j=p.kq()
i=a5?null:b3.e
if(i==null)i=a7==null?null:a7.c
l=a5?null:b3.f
if(l==null){l=a7==null?null:a7.b
h=l}else h=l
if(h==null)h=""
g=a4?null:b6.r
if(g==null)g=a7==null?null:a7.a
l=t.N
f=A.aS(l)
e=a5?null:b3.r
if(e!=null)f.F(0,e)
f.F(0,a8)
d=A.P(f,f.$ti.c)
B.c.aT(d)
c=a5?null:b3.x
if(c==null)c=k
b=B.h.a7(d,null)
a=a4?null:b6.y
if(a==null)a=0
s=a5?9:11
break
case 9:f=A.CZ(B.aT)
e=B.c.J(A.aG(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a9.aB("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.CT(h,i,c,null,b,n,j,b4,b0,a3,k)),$async$bj)
case 12:s=10
break
case 11:s=13
return A.a(a9.aB('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b4,b,k,a3,b0]),$async$bj)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a5)B.c.F(f,B.ca)
if(o)B.c.F(f,B.c_)
s=a4?14:16
break
case 14:a4=A.CZ(B.c3)
l=B.c.J(A.aG(16,"?",!1,l),", ")
a0=[]
a0.push(a3)
a0.push(b0)
a0.push(null)
a0.push(null)
a0.push(i)
a0.push(h)
a0.push(g)
a0.push("dirty")
a0.push(b)
a0.push(a+1)
a0.push("visible")
a0.push(j)
a0.push(0)
a0.push(0)
a0.push(null)
a0.push(a2.b)
s=17
return A.a(a9.aB("INSERT INTO lp_sync_row ("+a4+") VALUES ("+l+")",a0),$async$bj)
case 17:s=15
break
case 16:for(a4=f.length,a1=0,l="UPDATE lp_sync_row SET ";a1<a4;++a1){if(a1>0)l+=", "
l+='"'+f[a1]+'" = ?'}a4=l+' WHERE "store" = ? AND "record_id" = ?'
a2=["dirty",b,a+1,j,a2.b]
if(a5)B.c.F(a2,[i,h,g])
if(o)B.c.F(a2,[0,0,null])
a2.push(a3)
a2.push(b0)
s=18
return A.a(a9.aB(a4.charCodeAt(0)==0?a4:a4,a2),$async$bj)
case 18:case 15:q=new A.hJ()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bj,r)},
hg(a,b,c){return this.tD(a,b,c)},
tD(a,b,c){var s=0,r=A.h(t.H)
var $async$hg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.ck(a,b,c,!1),$async$hg)
case 2:return A.e(null,r)}})
return A.f($async$hg,r)},
eG(a,b){return this.v0(a,b)},
v0(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.b
f=new A.ab("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").k(0)
e=A.P([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ai("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$eG)
case 3:o=d
f=J.K(o)
if(f.gA(o)){q=B.ce
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.m();)n.push(A.r5(f.gn()))
f=A.aS(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.A)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.jo(g,f),$async$eG)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.A)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.C(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eG,r)},
ku(a){if(a.length===0)return A.c6(null,t.H)
return this.a.Z(new A.rb(this,a),t.H)},
aF(a,b){return this.tm(a,b)},
tm(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aF=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.ae(a0).a
a4=a2.Q.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aM("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aF)
case 5:o=a9
n=J.K(o)
s=!(n.gW(o)&&!J.t(J.T(n.gD(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aF)
case 8:m=a9
n=J.K(m)
l=n.gW(m)?A.cj(a3,n.gD(m),a2.y,a2.z):null
s=9
return A.a(b.L(a,A.dD(a3,J.t(a5.h(0,"archived"),!0),a2.y,a2.z,a1,a5),"id = ?",[a1]),$async$aF)
case 9:a6.a_(new A.a1(a0,A.ai([a1],t.N)))
k=A.bx(l==null?B.z:l,a5)
k.E(0,"id")
a6.bs(new A.aV(a0,a1,B.a0,B.x,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aF)
case 10:j=a9
a5=J.K(j)
s=a5.gA(j)?11:12
break
case 11:s=13
return A.a(b.a6("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aF)
case 13:s=14
return A.a(p.cN(b,a0,a1,a7.c,a4),$async$aF)
case 14:a6.a_(new A.a1(a0,A.ai([a1],t.N)))
s=1
break
case 12:n=a2.y
a2=a2.z
i=A.cj(a3,a5.gD(j),n,a2)
h=A.aD(B.l.v(B.f.v(A.aj(A.b6(a3,i)))).a)
a5=a7.b
g=A.aD(B.l.v(B.f.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.a6("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aF)
case 18:s=19
return A.a(p.cN(b,a0,a1,a7.c,a4),$async$aF)
case 19:a6.a_(new A.a1(a0,A.ai([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aA(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.b_(d,a5,f):A.D(a5,f)
s=23
return A.a(b.L(a,A.dD(a3,J.t(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aF)
case 23:s=24
return A.a(b.a6("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aF)
case 24:s=25
return A.a(p.cN(b,a0,a1,a7.c,a4),$async$aF)
case 25:a6.a_(new A.a1(a0,A.ai([a1],a5)))
k=A.bx(i,c)
k.E(0,"id")
a6.bs(new A.aV(a0,a1,B.a0,B.x,i,c,k))
s=21
break
case 22:g=A.aD(B.l.v(B.f.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.n(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aF)
case 26:s=27
return A.a(b.L("lp_outbox",A.n(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aF)
case 27:s=28
return A.a(b.L(a,A.n(["hidden",0],n,f),"id = ?",[a1]),$async$aF)
case 28:a6.a_(new A.a1(a0,A.ai([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aF,r)},
cN(a,b,c,d,e){return this.ra(a,b,c,d,e)},
ra(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$cN=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.n(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$cN)
case 2:s=3
return A.a(a.L(q.a.ae(b).a.a,A.n(["hidden",0],p,o),"id = ?",[c]),$async$cN)
case 3:return A.e(null,r)}})
return A.f($async$cN,r)},
wI(a,b,c,d,e){return this.a.Z(new A.r9(c,e,d,B.ac,a,b),t.H)},
mB(a,b,c,d,e,f){return this.a.Z(new A.r8(this,c,f,b,a,d,e),t.H)},
eR(a,b,c,d,e){return this.mB(a,b,c,d,B.ad,e)},
mA(a,b,c){return this.a.Z(new A.r7(a,c,b),t.H)},
wQ(){return this.a.Z(new A.ra(null),t.S)},
eC(a,b,c,d,e,f,g){return this.tX(a,b,c,d,e,f,g)},
tX(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eC=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.n(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eC)
case 2:p=A.D(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eC)
case 3:return A.e(null,r)}})
return A.f($async$eC,r)}}
A.rb.prototype={
$1(a){return this.nm(a)},
nm(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=q.a
n=o.a.e
m=n.at
l=q.b
k=l.length
n.at=m+k
p=0
case 2:if(!(p<l.length)){s=4
break}s=5
return A.a(o.aF(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.A)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r9.prototype={
$1(a){return this.nk(a)},
nk(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.n(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r8.prototype={
$1(a){return this.nj(a)},
nj(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aC(0,"lp_dead_letter",A.n(["at",q.a.a.Q.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.n(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r7.prototype={
$1(a){return this.ni(a)},
ni(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.n(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.ra.prototype={
$1(a){return this.nl(a)},
nl(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.n(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:95}
A.dH.prototype={
ab(){return"ApplyResult."+this.b}}
A.kU.prototype={}
A.rI.prototype={
d4(a){return this.ws(a)},
ws(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$d4=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.i2(b4),$async$d4)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.DH().dT(n)
if(m==null)A.v(A.bi('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.ax(k)
k=l[2]
k.toString
i=A.ax(k)
k=l[3]
k.toString
h=A.ax(k)
k=l[4]
k.toString
g=A.ax(k)
k=l[5]
k.toString
f=A.ax(k)
k=l[6]
k.toString
e=A.ax(k)
l=l[7]
l.toString
d=A.ax(l)
if(i<1||i>12||g>23||f>59||e>59)A.v(A.bi('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.yy(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.rz(k))A.v(A.bi('Bad timestamp "'+n+'"'))
o=A.IG(A.yy(j,i,h,g,f,e,d).iw(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.b.i7(B.b.cU(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.e,k=k.ch,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.z
a4===$&&A.x()
s=6
return A.a(a4.eQ(b4,null,a2,o,null,b),$async$d4)
case 6:a5=b6
a4=J.K(a5)
if(a4.gA(a5)){s=5
break}++a.ax
a6=p.rd(a5)
a7=k.h(0,b4)
if(a7==null)A.v(A.w(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.zH(a7.a,a5),$async$d4)
case 8:s=7
return A.a(b0.aZ(new b1.rQ(b2,p,b3,b6,a6),l),$async$d4)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gl(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.kU(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d4,r)},
lQ(a,b){var s=B.a.X(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.X(a.a,b.b)<=0},
tx(a,b){var s=B.a.X(a.c,b.c)
if(s!==0)return s>0
return B.a.X(a.a,b.a)>0},
rd(a){var s,r,q,p=J.aA(a),o=p.gD(a)
for(p=p.bd(a,1),s=p.$ti,p=new A.ae(p,p.gl(0),s.i("ae<V.E>")),s=s.i("V.E");p.m();){r=p.d
q=r==null?s.a(r):r
if(this.tx(q,o))o=q}return o},
hB(a){return this.vf(a)},
vf(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aZ(new A.rK(o,p,a),t.P),$async$hB)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hB,r)},
cY(a,b){return this.vh(a,b)},
vh(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$cY=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.eU(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.ch,e=n.b,d=A.a6(j),c=d.c,d=d.i("ce<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ce(j,0,200,d)
a2.ir(j,0,200,c)
a3=a2.ea(0)
a4=a3.length
b&1&&A.E(j,18)
A.b1(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.z
a7===$&&A.x()
s=12
return A.a(a7.bO(l),$async$cY)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.C(b1)
if(a7 instanceof A.cq){J.bp(m,l)
s=6
break}else if(a7 instanceof A.bP)throw b1
else if(a7 instanceof A.bm){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.bp(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.A)(a3),++a6
s=5
break
case 7:s=J.ao(m)!==0?13:14
break
case 13:s=15
return A.a(n.eT(b2,m),$async$cY)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.v(A.w(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.A)(a5),++a6)a2.push(A.zI(b0,a5[a6]))
s=16
return A.a(i.aZ(new A.rM(n,a2,b2,b0),h),$async$cY)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cY,r)},
dE(a,b,c,d){return this.rH(a,b,c,d)},
rH(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dE=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.D(c,t.nw)
a=A.D(c,t.G)
o=p.a,n=o.y,m=o.z,o=o.ch,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.c.U(a4,k,B.b.cU(i,0,j))
g=B.c.J(A.aG(h.length,"?",!1,c),", ")
j=[a2]
B.c.F(j,h)
a0=J
s=6
return A.a(a1.ai(u.m+g+")",j),$async$dE)
case 6:j=a0.I(a6)
case 7:if(!j.m()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.M(e),A.lj(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.v(A.w(l))
a0=J
s=9
return A.a(a1.e3(d.a.a,"id IN ("+g+")",h),$async$dE)
case 9:j=a0.I(a6)
case 10:if(!j.m()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.M(e),A.cj(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.az(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dE,r)},
m_(a,b,c,d,e){return this.a1(a,b,A.zI(this.a.ae(b).a,c),null,!1,d,e)},
u1(a,b,c){return this.m_(a,b,c,null,!1)},
a1(a,b,c,d,e,f,g){return this.u0(a,b,c,d,e,f,g)},
lZ(a,b,c){return this.a1(a,b,c,null,!1,null,!1)},
u0(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a1=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.ae(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bD(a4,a7,b2,a8,a9),$async$a1)
case 5:q=B.W
s=1
break
case 4:a9=b3.b
a9.toString
j=A.b6(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bD(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a1)
case 8:q=B.W
s=1
break
case 7:g=a8.a
f=$.yp()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bD(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a1)
case 11:q=B.W
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.as
g===$&&A.x()
s=15
return A.a(g.bL(a4,b2,a8.a),$async$a1)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aM(a6.a,1,"id = ?",[a8.a]),$async$a1)
case 19:c=b9
g=J.K(c)
d=g.gA(c)?null:A.cj(a7,g.gD(c),a5.y,a5.z)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.d3(a4,a8.a,a8.e,b2),$async$a1)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.DV(a4,a6.a,A.dD(a7,J.t(a9.h(0,"archived"),!0),a5.y,a5.z,i,a9)),$async$a1)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.cR(a4,b2,i,n.c.ay.$0(),m,a5,B.w,!0),$async$a1)
case 26:b1.a_(new A.a1(b2,A.ai([a8.a],t.N)))
b=A.bx(B.z,a9)
b.E(0,"id")
b1.bs(new A.aV(b2,a8.a,B.ag,B.aG,null,a9,b))
q=B.V
s=1
break
case 24:g=m
a=g==null?null:g.w
if(a==null)a=B.w
s=a===B.w?27:28
break
case 27:i=m
i=i==null?null:i.c
s=i===a8.c?29:30
break
case 29:s=31
return A.a(n.bU(b1,b2,a8.a,a8.c,!1),$async$a1)
case 31:q=B.X
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dD(a7,J.t(a9.h(0,"archived"),!0),a5.y,a5.z,i,a9),"id = ?",[a8.a]),$async$a1)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.cR(a4,b2,i,n.c.ay.$0(),m,a5,B.w,!0),$async$a1)
case 33:b1.a_(new A.a1(b2,A.ai([a8.a],t.N)))
b=A.bx(d,a9)
b.E(0,"id")
b1.bs(new A.aV(b2,a8.a,B.ag,B.x,d,a9,b))
q=B.V
s=1
break
case 28:s=a===B.ac||a===B.ba||a===B.U?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.bU(b1,b2,a8.a,a8.c,!1),$async$a1)
case 38:q=B.X
s=1
break
case 37:s=a===B.U?39:40
break
case 39:s=41
return A.a(n.bU(b1,b2,a8.a,a8.c,!1),$async$a1)
case 41:q=B.X
s=1
break
case 40:a0=A.b6(a7,d)
s=A.aj(a0)===i?42:43
break
case 42:s=44
return A.a(a4.a6("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a1)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.cR(a4,b2,a5,n.c.ay.$0(),m,a9,B.w,!0),$async$a1)
case 45:b1.a_(new A.a1(b2,A.ai([a8.a],t.N)))
q=B.V
s=1
break
case 43:l=null
p=47
a9=m
l=A.h_(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.C(b0)
s=a5 instanceof A.cI?50:52
break
case 50:k=a5
s=53
return A.a(n.bD(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a1)
case 53:q=B.W
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
a9=A.CR(l,a0,new A.kw(null,B.aV,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bd(a9,t.r),$async$a1)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eu(a4,b2,a8,a7,m,a0,l,a2),$async$a1)
case 57:s=58
return A.a(n.bU(b1,b2,a8.a,a8.c,!1),$async$a1)
case 58:a5=t.N
b1.a_(new A.a1(b2,A.ai([a8.a],a5)))
b1.a_(new A.a1("lp_conflicts",A.ai([a8.a],a5)))
q=B.be
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dD(a7,J.t(a3.h(0,"archived"),!0),a5.y,a5.z,a9,a3),"id = ?",[a8.a]),$async$a1)
case 59:a5=a5.as
a5===$&&A.x()
s=60
return A.a(a5.eC(a4,b2,a8.a,h,i,a8.c,A.aj(a3)),$async$a1)
case 60:s=61
return A.a(n.tu(b1,b2,a8.a,a8.c),$async$a1)
case 61:b1.a_(new A.a1(b2,A.ai([a8.a],t.N)))
b=A.bx(d,a3)
b.E(0,"id")
b1.bs(new A.aV(b2,a8.a,B.a0,B.x,d,a3,b))
q=B.V
s=1
break
case 35:q=B.X
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a1,r)},
eu(a,b,c,d,e,f,g,h){return this.t1(a,b,c,d,e,f,g,h)},
t1(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eu=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.b6(d,A.eC(d,c))
k=A.bx(g,f)
j=A.P(k,A.m(k).c)
B.c.aT(j)
k=A.bx(g,l)
p=A.P(k,A.m(k).c)
B.c.aT(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.aj(g)
n=t.N
m=t.X
s=2
return A.a(a.c2(0,"lp_conflicts",A.n(["store",b,"record_id",k,"base_json",o,"local_json",A.aj(f),"remote_json",A.aj(l),"dirty_local",B.h.a7(j,null),"dirty_remote",B.h.a7(p,null),"detected_at",q.c.ay.$0()],n,m),B.N),$async$eu)
case 2:s=3
return A.a(a.L("lp_sync_row",A.n(["sync_state","conflict","base_json",A.aj(l),"base_hash",A.aD(B.l.v(B.f.v(A.aj(A.b6(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eu)
case 3:return A.e(null,r)}})
return A.f($async$eu,r)},
bD(a,b,c,d,e){return this.rV(a,b,c,d,e)},
rV(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bD=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a7(d.d,null)}catch(a1){o=t.N
e=B.h.a7(A.n(["raw",d.d.k(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aC(0,"lp_dead_letter",A.n(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bD)
case 2:j=q.a.as
j===$&&A.x()
s=3
return A.a(j.bL(a,c,m),$async$bD)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.b.K(o.me(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aC(0,"lp_sync_row",A.n(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bD)
case 7:s=5
break
case 6:s=8
return A.a(a.L("lp_sync_row",A.n(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bD)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bD,r)},
cR(a,b,c,d,e,f,g,h){return this.tC(a,b,c,d,e,f,g,!0)},
tC(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$cR=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.ae(b)
o=A.D(t.N,t.X)
o.j(0,"store",b)
o.j(0,"record_id",c)
o.j(0,"remote_updated",f)
o.j(0,"last_seen_at",d)
o.j(0,"sync_state",g.b)
o.j(0,"access_state","visible")
o.j(0,"schema_ver",p.a.b)
p=g===B.w
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
return A.a(a.aC(0,"lp_sync_row",o),$async$cR)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$cR)
case 6:case 3:return A.e(null,r)}})
return A.f($async$cR,r)},
bU(a,b,c,d,e){return this.tv(a,b,c,d,e)},
tu(a,b,c,d){return this.bU(a,b,c,d,!0)},
tv(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bU=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.D(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$bU)
case 2:s=3
return A.a(p.L(q.a.ae(b).a.a,A.n(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$bU)
case 3:if(g>0)a.a_(new A.a1(b,A.ai([c],o)))
return A.e(null,r)}})
return A.f($async$bU,r)},
eT(a,b){return this.wc(a,b)},
wc(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.eU(b,!0,t.N)
n=A.a6(o),m=n.c,n=n.i("ce<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ce(o,0,500,n)
i.ir(o,0,500,m)
h=i.ea(0)
g=h.length
l&1&&A.E(o,18)
A.b1(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aZ(new A.rO(p,a,h),j),$async$eT)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$eT,r)}}
A.rQ.prototype={
$0(){var s=this,r=s.b
return r.a.Z(new A.rP(s.a,r,s.c,s.d,s.e),t.P)},
$S:16}
A.rP.prototype={
$1(a){return this.nr(a)},
nr(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.ae(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.aA(p),n=o.gt(p);n.m();)a3.push(n.gn().a.a)
s=2
return A.a(a.dE(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aS(t.N)
a2=o.gt(p),a0=a0.e
case 3:if(!a2.m()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.lQ(i,c)){s=3
break}p=i.a
s=j.C(0,p)?5:7
break
case 5:s=8
return A.a(a.lZ(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a1(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.lQ(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eb(b,a1,e,f),$async$$1)
case 10:d.a=new A.i1(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rK.prototype={
$0(){var s=this.b
return s.a.Z(new A.rJ(this.a,s,this.c),t.P)},
$S:16}
A.rJ.prototype={
$1(a){return this.no(a)},
no(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.as
k===$&&A.x()
o=p.c
n=o.b
s=3
return A.a(k.bL(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.u1(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.w){s=1
break}k=m.c
if(k!=null&&B.a.X(o.c,k)<=0){s=1
break}s=7
return A.a(l.m_(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.rM.prototype={
$0(){var s=this,r=s.a
return r.a.Z(new A.rL(r,s.b,s.c,s.d),t.P)},
$S:16}
A.rL.prototype={
$1(a){return this.np(a)},
np(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dE(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aS(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.C(0,g)?6:8
break
case 6:s=9
return A.a(o.lZ(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a1(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.u(0,g)
case 7:case 4:p.length===e||(0,A.A)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rO.prototype={
$0(){var s=this.a
return s.a.Z(new A.rN(s,this.b,this.c),t.P)},
$S:16}
A.rN.prototype={
$1(a){return this.nq(a)},
nq(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.ae(g).a
e=h.ae(g).a.a
d=q.c
c=t.N
b=B.c.J(A.aG(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.D(c,t.G)
a1=J
s=2
return A.a(i.e3(e,a,d),$async$$1)
case 2:p=a1.I(a4),o=h.y,h=h.z
case 3:if(!p.m()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.M(m),A.cj(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.n(["access_state","hidden"],c,h)
o=[g]
B.c.F(o,d)
s=5
return A.a(i.L("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.L(e,A.n(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a_(new A.a1(g,A.qd(d,A.a6(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.A)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.hH(null,null,c,h)
p.F(0,j)
p.j(0,"hidden",!0)
a2.bs(new A.aV(g,k,B.ag,B.bz,j,p,B.cB))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aU.prototype={}
A.rR.prototype={
f0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$f0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.as
f===$&&A.x()
s=3
return A.a(f.eG(25,p.c.ay.$0()),$async$f0)
case 3:o=b
f=J.K(o)
if(f.gA(o)){q=B.R
s=1
break}if(p.f){q=p.b4(o)
s=1
break}f=f.gt(o),n=B.R
case 4:if(!f.m()){s=5
break}s=6
return A.a(p.dG(f.gn()),$async$f0)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.aU(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f0,r)},
dG(a){return this.rR(a)},
rR(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.as
l===$&&A.x()
m=m.b
s=3
return A.a(l.e6(m,a.a,a.b),$async$dG)
case 3:o=c
if(o==null){q=B.R
s=1
break}s=4
return A.a(l.bL(m,o.a,o.b),$async$dG)
case 4:n=c
if(n==null){q=B.R
s=1
break}if(o.e==null){q=p.rP(o,n)
s=1
break}q=p.j9(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dG,r)},
bA(a,b,c,d,e){return this.qk(a,b,c,d,e)},
qj(a,b,c,d){return this.bA(a,b,c,!1,d)},
qh(a,b,c){return this.bA(a,b,c,!1,!1)},
qi(a,b,c,d){return this.bA(a,b,c,d,!1)},
qk(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bA=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bA)
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
s=k instanceof A.bP?8:10
break
case 8:n.e.$0()
q=B.ab
s=1
break
s=9
break
case 10:s=k instanceof A.cn?11:13
break
case 11:k=n.a.as
k===$&&A.x()
s=14
return A.a(k.mA("forbidden_push",a.b,a.a),$async$bA)
case 14:q=B.cx
s=1
break
s=12
break
case 13:s=k instanceof A.f2?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.cI(a,"validation_push",m.a),$async$bA)
case 20:q=B.J
s=1
break
case 19:q=n.cg(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cq){q=n.dw(a,b,!e)
s=1
break}else if(k instanceof A.bm){l=k
q=n.cg(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bA,r)},
j8(a,b,c){return this.rQ(a,b,c)},
rP(a,b){return this.j8(a,b,!1)},
rQ(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$j8=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bA(a,b,new A.rT(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j8,r)},
jc(a,b,c){return this.t2(a,b,c)},
t2(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jc=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qj(a,b,new A.rY(p,a,p.a.ae(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jc,r)},
j9(a,b){return this.rS(a,b)},
rS(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$j9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qh(a,b,new A.rW(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j9,r)},
cO(a,b,c,d){return this.rU(a,b,c,d)},
rT(a,b,c){return this.cO(a,b,c,!1)},
rU(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$cO=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.kK(a,c)
j=n.a.ae(a.a).a
i=a.d
s=A.aD(B.l.v(B.f.v(A.aj(A.b6(j,A.eC(j,c))))).a)===A.aD(B.l.v(B.f.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.ey(a,c),$async$cO)
case 5:q=B.S
s=1
break
case 4:m=null
l=null
p=7
m=A.h_(b.r)
l=A.h_(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.C(f)
s=i instanceof A.cI?10:12
break
case 10:k=i
s=13
return A.a(n.cI(a,"corrupt_payload",k.a),$async$cO)
case 13:q=B.J
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
return A.a(n.dB(a,b,c,j,m,l),$async$cO)
case 14:g=a0
if(g==null){q=B.b2
s=1
break}q=n.bA(a,b,new A.rU(n,a,A.aj(A.b6(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cO,r)},
b4(a){return this.rO(a)},
rO(c9){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
var $async$b4=A.c(function(d0,d1){if(d0===1){o.push(d1)
s=p}for(;;)switch(s){case 0:b8=A.l([],t.k1)
b9=t.N
c0=A.D(b9,t.G)
c1=0
c2=0
c3=0
c4=0
c5=0
c6=A.D(b9,b9)
b9=J.I(c9),d=n.a,c=d.e,b=n.b,a=d.ch,a0=d.b
case 3:if(!b9.m()){s=4
break}a1=b9.gn()
a2=d.as
a2===$&&A.x()
s=5
return A.a(a2.e6(a0,a1.a,a1.b),$async$b4)
case 5:m=d1
if(m==null){s=3
break}c6.j(0,m.w,m.d)
s=6
return A.a(a2.bL(a0,m.a,m.b),$async$b4)
case 6:l=d1
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.v(A.w('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.z
a5===$&&A.x()
s=11
return A.a(a5.bO(a1),$async$b4)
case 11:k=d1
p=2
s=10
break
case 8:p=7
c7=o.pop()
a1=A.C(c7)
s=a1 instanceof A.cq?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.ld(m,l),$async$b4)
case 17:j=d1
c1+=j.a
c2+=j.b
c3+=j.c
c4+=j.d
c5+=j.e
s=3
break
case 16:k=null
s=13
break
case 14:s=a1 instanceof A.bP?18:20
break
case 18:n.e.$0()
q=B.ab
s=1
break
s=19
break
case 20:s=a1 instanceof A.cn?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.mA("forbidden_push",m.b,a1),$async$b4)
case 24:++c4
s=3
break
s=22
break
case 23:s=a1 instanceof A.bm?25:27
break
case 25:i=a1
s=28
return A.a(n.cg(m,l,i),$async$b4)
case 28:h=d1
c1+=h.a
c2+=h.b
s=3
break
s=26
break
case 27:throw c7
case 26:case 22:case 19:case 13:s=10
break
case 7:s=2
break
case 10:s=k!=null?29:30
break
case 29:a1=k.a
a5=m.b
if(a1!==a5)A.v(A.e2('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.ab("")
A.h2(a7,A.b6(a4,A.eC(a4,k)))
a1=a7.a
a1=B.f.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.eM()
a5=A.mw(a8)
a5.u(0,a1)
a5.p()
a9=A.aD(a8.a.a)
a5=B.f.v(m.d)
a8=new A.eM()
a1=A.mw(a8)
a1.u(0,a5)
a1.p()
s=a9===A.aD(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.ey(m,k),$async$b4)
case 33:++c1
s=3
break
case 32:g=null
f=null
p=35
g=A.h_(l.r)
f=A.h_(m.d)
p=2
s=37
break
case 35:p=34
c8=o.pop()
a1=A.C(c8)
s=a1 instanceof A.cI?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.eR(e.a,a5,"corrupt_payload",m.d,a1),$async$b4)
case 41:++c2
s=3
break
s=39
break
case 40:throw c8
case 39:s=37
break
case 34:s=2
break
case 37:s=42
return A.a(n.dB(m,l,k,a4,g,f),$async$b4)
case 42:b0=d1
if(b0==null){++c3
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.ab("")
A.h2(a7,A.b6(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b8.push(new A.f4(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c0.j(0,m.w,b1)
s=3
break
case 30:b8.push(new A.f4(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b8.length!==0?43:44
break
case 43:b4=0
case 45:if(!(b5=b8.length,b4<b5)){s=47
break}b6=b4+25
s=48
return A.a(n.bT(B.c.U(b8,b4,b6<b5?b6:b5),c0,c6),$async$b4)
case 48:b7=d1
c1+=b7.a
c2+=b7.b
c3+=b7.c
c5+=b7.e
if(b7.f){q=new A.aU(c1,c2,c3,c4,c5,!0)
s=1
break}case 46:b4=b6
s=45
break
case 47:case 44:q=new A.aU(c1,c2,c3,c4,c5,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
dB(a,b,c,d,e,f){return this.re(a,b,c,d,e,f)},
re(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dB=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.eC(d,c)
n=A.CR(e,f,new A.kw(null,B.aV,!1),a.b,A.b6(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bd(n,t.r),$async$dB)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hc(a,b,c,m,e,f),$async$dB)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dB,r)},
bT(a,b,c){return this.th(a,b,c)},
th(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$bT=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.z
a7===$&&A.x()
s=7
return A.a(a7.f_(b9),$async$bT)
case 7:m=c3
a7=t.N
l=A.D(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.A)(b9),++a9){k=b9[a9]
J.bN(l,k.a,k)}j=l
i=A.aS(a7)
for(l=J.I(m);l.m();){h=l.gn()
if(!J.bp(i,h.a)){l=A.bi("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.G(h.a)){l=A.bi("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.I(m),a7=n.a
case 8:if(!l.m()){s=9
break}f=l.gn()
a8=J.T(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.j2(e,c1.h(0,e.a))
b0=B.f.v(e.d)
b1=new A.eM()
b2=A.mw(b1)
b2.u(0,b0)
b2.p()
b2=A.aD(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.bp(g,new A.i3(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.as
a8===$&&A.x()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.eR(b4,b2,b3,e.d,b0),$async$bT)
case 13:++b7
case 11:s=8
break
case 9:l=a7.as
l===$&&A.x()
s=14
return A.a(l.ku(g),$async$bT)
case 14:l=b6
a7=b7
q=new A.aU(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.C(b8)
s=l instanceof A.dI?15:17
break
case 15:q=n.bR(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cn?18:20
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
return A.a(n.dG(n.li(a0)),$async$bT)
case 24:a1=c3
b6+=a1.a
b7+=a1.b
d+=a1.c
c+=a1.d
b+=a1.e
a=a||a1.f
case 22:b9.length===l||(0,A.A)(b9),++a9
s=21
break
case 23:q=new A.aU(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.bP?25:27
break
case 25:n.e.$0()
q=B.ab
s=1
break
s=26
break
case 27:s=l instanceof A.bm?28:30
break
case 28:a2=l
a3=a2 instanceof A.ea?a2:new A.fh("network error")
l=b9.length,a7=n.a,a8=a7.b,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.as
b0===$&&A.x()
s=34
return A.a(b0.bL(a8,a4.b,a4.c),$async$bT)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cg(n.li(a4),a5,a3),$async$bT)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.A)(b9),++a9
s=31
break
case 33:q=new A.aU(b6,b7,0,0,0,!0)
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
return A.f($async$bT,r)},
bR(a,b,c){return this.ow(a,b,c)},
ow(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bR=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.K(b5)
s=b3.gl(b5)===1?3:4
break
case 3:g=b3.gau(b5)
h=n.a.as
h===$&&A.x()
b3=g.b
s=5
return A.a(h.eR("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bR)
case 5:q=B.J
s=1
break
case 4:a0=B.b.K(b3.gl(b5),2)
m=0
l=0
k=!1
b3=[b3.U(b5,0,a0),b3.b1(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.z
a6===$&&A.x()
s=13
return A.a(a6.f_(j),$async$bR)
case 13:i=b9
h=A.D(a2,a4)
for(a6=J.I(j);a6.m();){g=a6.gn()
J.bN(h,g.a,g)}f=h
e=A.aS(a2)
for(a6=J.I(i);a6.m();){d=a6.gn()
if(!J.bp(e,d.a)){a6=A.bi("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.G(d.a)){a6=A.bi("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.I(i)
case 14:if(!a6.m()){s=15
break}c=a6.gn()
a7=J.T(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.j2(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dJ(a7,a8,a9,b0==null?b.d:b0),$async$bR)
case 19:++m
s=17
break
case 18:a7=a1.as
a7===$&&A.x()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.eR(b1,a9,b0,b.d,a8),$async$bR)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.C(b4)
s=a6 instanceof A.dI?21:23
break
case 21:s=24
return A.a(n.bR(j,b6,b7),$async$bR)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bm){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.aU(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bR,r)},
j2(a,b){var s=b==null?a.d:b
return new A.cr(a.b,a.c,B.v,s,a.e,A.aD(B.l.v(B.f.v(a.d)).a),B.q,a.a,0,null)},
li(a){return this.j2(a,null)},
dJ(a,b,c,d){return this.tl(a,b,c,d)},
ey(a,b){return this.dJ(a,b,null,null)},
tl(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dJ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.ae(a.a).a
n=A.eC(o,b)
m=d==null
l=m?A.aj(A.b6(o,n)):d
p=p.as
p===$&&A.x()
s=2
return A.a(p.ku(A.l([new A.i3(a,l,b.c,A.aD(B.l.v(B.f.v(m?a.d:d)).a),c)],t.bo)),$async$dJ)
case 2:return A.e(null,r)}})
return A.f($async$dJ,r)},
kK(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.e2('record id "'+s+'" does not match requested "'+r+'"'))},
cg(a,b,c){return this.t9(a,b,c)},
t9(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.ea?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.as
o===$&&A.x()
s=5
return A.a(o.mB(c.a,a.b,"max_attempts",a.d,B.ad,a.a),$async$cg)
case 5:q=B.J
s=1
break
case 4:o=p.c
n=o.mf(l,k)
m=p.a.as
m===$&&A.x()
s=6
return A.a(m.wI(a.a,a.b,l,c.a,o.ay.$0()+B.b.K(n.a,1000)),$async$cg)
case 6:q=B.ab
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cg,r)},
cI(a,b,c){return this.oT(a,b,c)},
oS(a,b){return this.cI(a,b,null)},
oT(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.as
o===$&&A.x()
p=c==null?b:c
s=2
return A.a(o.eR(p,a.b,b,a.d,a.a),$async$cI)
case 2:return A.e(null,r)}})
return A.f($async$cI,r)},
dw(a,b,c){return this.q8(a,b,c)},
ld(a,b){return this.dw(a,b,!0)},
q8(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dw=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.ae(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:m=null
l=null
p=7
m=A.h_(b.r)
l=A.h_(a.d)
p=2
s=9
break
case 7:p=6
h=o.pop()
i=A.C(h)
s=i instanceof A.cI?10:12
break
case 10:k=i
s=13
return A.a(n.cI(a,"corrupt_payload",k.a),$async$dw)
case 13:q=B.J
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
return A.a(n.fu(a,b,m,l),$async$dw)
case 14:q=B.b2
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dw,r)},
fu(a,b,c,d){return this.p9(a,b,c,d)},
p9(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$fu=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bx(c,d)
n=A.P(o,A.m(o).c)
B.c.aT(n)
p=b.r
if(p==null)p=A.aj(c)
s=2
return A.a(q.a.Z(new A.rS(q,a,p,d,n),t.P),$async$fu)
case 2:return A.e(null,r)}})
return A.f($async$fu,r)},
hc(a,b,c,d,e,f){return this.t0(a,b,c,d,e,f)},
t0(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hc=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.ae(a.a).a
m=A.b6(n,A.eC(n,c))
l=A.bx(e,f)
k=A.P(l,A.m(l).c)
B.c.aT(k)
l=A.bx(e,m)
p=A.P(l,A.m(l).c)
B.c.aT(p)
s=2
return A.a(o.Z(new A.rX(q,a,b,e,f,m,k,p,n,c),t.P),$async$hc)
case 2:return A.e(null,r)}})
return A.f($async$hc,r)}}
A.rT.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.x()
s=7
return A.a(j.hv(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.ey(k,m),$async$$0)
case 8:q=B.S
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.C(h) instanceof A.eN){q=n.a.jc(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:17}
A.rY.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.x()
s=3
return A.a(l.bO(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.oS(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.J
s=1
break
case 5:l=p.c
s=A.aD(B.l.v(B.f.v(A.aj(A.b6(l,A.eC(l,o))))).a)===A.aD(B.l.v(B.f.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.ey(m,o),$async$$0)
case 9:q=B.S
s=1
break
case 8:q=n.cO(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.rW.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.x()
s=3
return A.a(l.bO(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.ld(m,p.c)
s=1
break}n.kK(m,o)
if(o.c===m.e){l=p.c
q=n.qi(m,l,new A.rV(n,m,o,l),!0)
s=1
break}q=n.rT(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.rV.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.x()
s=7
return A.a(j.f9(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.ey(k,m),$async$$0)
case 8:q=B.S
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
$S:17}
A.rU.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.z
l===$&&A.x()
k=o
j=n
s=4
return A.a(l.f9(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dJ(j,b,p.e.a,m),$async$$0)
case 3:q=B.S
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.rS.prototype={
$1(a){return this.ns(a)},
ns(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.c2(0,"lp_conflicts",A.n(["store",n,"record_id",m,"base_json",l,"local_json",A.aj(q.d),"remote_json",A.aj(A.n(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a7(q.e,null),"dirty_remote",B.h.a7(B.q,null),"detected_at",q.a.c.ay.$0()],k,j),B.N),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.n(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a_(new A.a1(n,A.ai([m],k)))
a.a_(new A.a1("lp_conflicts",A.ai([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rX.prototype={
$1(a){return this.nt(a)},
nt(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.c2(0,"lp_conflicts",A.n(["store",j,"record_id",k,"base_json",p,"local_json",A.aj(q.e),"remote_json",A.aj(o),"dirty_local",B.h.a7(q.r,null),"dirty_remote",B.h.a7(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.N),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.n(["sync_state","conflict","base_json",A.aj(o),"base_hash",A.aD(B.l.v(B.f.v(A.aj(A.b6(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a_(new A.a1(j,A.ai([k],n)))
a.a_(new A.a1("lp_conflicts",A.ai([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bV.prototype={
ab(){return"SyncEngineState."+this.b}}
A.b9.prototype={
k(a){var s=this
return"SyncReport(pulled: "+s.a.k(0)+", swept: "+s.b.k(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.ff.prototype={}
A.fe.prototype={}
A.tr.prototype={
gkN(){return 36},
dl(a){return this.oc(a)},
oc(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dl=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.ch,g=new A.bS(g,g.r,g.e,A.m(g).i("bS<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.m()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.i3(m),$async$dl)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gkN():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.b.aj(c.a+1,n.gkN())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.by(m,a),$async$dl)
case 13:a5.bp(a6,a9)
case 11:++j
s=10
break
case 12:s=14
return A.a(h.Z(new A.ts(c,n,m,a3),f),$async$dl)
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
return A.f($async$dl,r)},
by(a,b){return this.ob(a,b)},
ob(a4,a5){var s=0,r=A.h(t.eg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$by=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aS(t.N)
m=B.b.i7(B.b.cU(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.z
g===$&&A.x()
s=5
return A.a(g.eQ(a4,B.ch,h,null,o,m),$async$by)
case 5:f=a7
g=J.K(f)
if(g.gA(f)){s=4
break}for(e=g.gt(f);e.m();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=g.gt(f);d.m();)e.push(d.gn().a)
s=6
return A.a(p.hb(a4,e),$async$by)
case 6:c=a7
b=A.l([],l)
for(e=g.gt(f);e.m();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.ay||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.cY(a4,b),$async$by)
case 9:i+=b.length
case 8:h=g.ga3(f).a
if(g.gl(f)<m){s=4
break}s=3
break
case 4:k=p.a.b
g=o+"%"
s=10
return A.a(k.ai("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$by)
case 10:a1=a7
a2=A.l([],l)
for(e=J.I(a1);e.m();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.M(a)
if(!n.C(0,a)){if(J.t(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.eT(a4,a2),$async$by)
case 13:case 12:s=14
return A.a(k.ai("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$by)
case 14:a3=a7
k=J.K(a3)
s=k.gW(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.m();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.M(g))}s=17
return A.a(j.cY(a4,l),$async$by)
case 17:case 16:q=new A.fe(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$by,r)},
hb(a,b){return this.rJ(a,b)},
rJ(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.D(g,t.nw)
o=p.a.b,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.c.U(b,n,B.b.cU(l,0,m))
j=B.c.J(A.aG(k.length,"?",!1,g),", ")
m=[a]
B.c.F(m,k)
e=J
s=6
return A.a(o.ai(u.m+j+")",m),$async$hb)
case 6:m=e.I(d)
case 7:if(!m.m()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.M(h),A.lj(i))
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
A.ts.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.ec(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bm.prototype={
k(a){return A.d1(this).k(0)+": "+this.a},
$iJ:1}
A.fh.prototype={}
A.ea.prototype={}
A.ia.prototype={}
A.bP.prototype={}
A.cn.prototype={}
A.cq.prototype={}
A.f2.prototype={}
A.f3.prototype={}
A.eN.prototype={}
A.dI.prototype={}
A.fc.prototype={
gl(a){return this.b}}
A.cs.prototype={}
A.f4.prototype={}
A.i2.prototype={}
A.jC.prototype={
ab(){return"BackendHintKind."+this.b}}
A.cl.prototype={}
A.xR.prototype={
$2(a,b){return B.a.hY(B.b.k(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:98}
A.tt.prototype={
mf(a,b){var s,r,q,p,o,n
if(b!=null){s=this.rB(b)
if(A.aE(s))return A.cE(0,0,s<0?0:s)
if(s instanceof A.aN){r=s.a-this.ay.$0()
return r<=0?B.A:A.cE(0,r,0)}return B.aJ}q=a<1?1:a
p=1e6
o=1
for(;;){if(!(o<q&&p<3e8))break
n=p*2
p=n>3e8?3e8:n;++o}return A.cE(B.t.mR(p*J.zZ(this.at.$1(q),0.5,1.5)),0,0)},
me(a){return this.mf(a,null)},
rB(a){var s=B.a.dc(a),r=A.i_(s,null)
if(r!=null)return r
return A.FE(s)}}
A.i1.prototype={}
A.ij.prototype={}
A.tE.prototype={
i2(a){return this.wE(a)},
wE(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$i2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.e4("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$i2)
case 3:m=c
l=J.K(m)
if(l.gA(m)){q=null
s=1
break}o=A.aa(J.T(l.gD(m),"cursor_updated"))
n=A.aa(J.T(l.gD(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.i1(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
eb(a,b,c,d){return this.xi(a,b,c,d)},
xi(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eb=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eb)
case 5:s=m.bO(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.n(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eb)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.n(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eb)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eb,r)},
i3(a){return this.wG(a)},
wG(a){var s=0,r=A.h(t.k5),q,p=this,o,n,m
var $async$i3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.e4("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$i3)
case 3:n=c
m=J.K(n)
if(m.gA(n)){q=B.cI
s=1
break}o=A.b4(J.T(m.gD(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.ij(o,A.b4(J.T(m.gD(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
ec(a,b,c,d){return this.xm(a,b,c,d)},
xm(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ec=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ec)
case 5:s=m.bO(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.n(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$ec)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.n(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$ec)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ec,r)},
ht(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$ht=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aX("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$ht)
case 3:l=b
k=J.K(l)
j=k.gA(l)?B.z:k.gD(l)
k=A.b4(j.h(0,"pending"))
if(k==null)k=0
o=A.b4(j.h(0,"conflicts"))
if(o==null)o=0
n=A.b4(j.h(0,"hidden"))
if(n==null)n=0
m=A.b4(j.h(0,"blocked"))
q=new A.mo([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)}}
A.cu.prototype={
ab(){return"SyncState."+this.b}}
A.h4.prototype={
ab(){return"AccessState."+this.b}}
A.f1.prototype={
ab(){return"OutboxKind."+this.b}}
A.hW.prototype={
ab(){return"OpQueueKind."+this.b}}
A.yb.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.ct.prototype={}
A.tD.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.M(i)
i=j.h(0,"record_id")
i.toString
A.M(i)
i=A.aa(j.h(0,"remote_updated"))
s=A.b4(j.h(0,"last_seen_at"))
r=A.aa(j.h(0,"base_updated"))
A.aa(j.h(0,"base_hash"))
q=A.aa(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.eP(B.c2,A.M(p))
A.CF(j.h(0,"dirty_fields"))
o=A.b4(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.eP(B.c1,A.M(n))
A.aa(j.h(0,"op_id"))
m=A.b4(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.b4(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.aa(j.h(0,"last_error"))
A.b4(j.h(0,"schema_ver"))
return new A.ct(i,s,r,q,p,o,n,m,l,k)},
$S:99}
A.cr.prototype={}
A.r6.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.M(i)
s=j.h(0,"record_id")
s.toString
A.M(s)
r=j.h(0,"kind")
r.toString
r=A.eP(B.cb,A.M(r))
q=j.h(0,"payload_json")
q.toString
A.M(q)
p=A.aa(j.h(0,"base_updated"))
o=A.aa(j.h(0,"base_hash"))
if(o==null)o=""
n=A.CF(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.M(m)
l=j.h(0,"created_at")
l.toString
A.ah(l)
k=j.h(0,"updated_at")
k.toString
A.ah(k)
return new A.cr(i,s,r,q,p,o,n,m,l,A.aa(j.h(0,"depends_on_op")))},
$S:100}
A.e7.prototype={}
A.r0.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ah(l)
l=m.h(0,"op_id")
l.toString
A.M(l)
s=m.h(0,"store")
s.toString
A.M(s)
r=m.h(0,"record_id")
r.toString
A.M(r)
q=m.h(0,"kind")
q.toString
q=A.eP(B.c7,A.M(q))
p=m.h(0,"payload_json")
p.toString
A.M(p)
o=m.h(0,"state")
o.toString
A.M(o)
o=A.b4(m.h(0,"attempt_count"))
if(o==null)o=0
A.b4(m.h(0,"next_retry_at"))
A.aa(m.h(0,"last_error"))
n=A.aa(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ah(m)
return new A.e7(l,s,r,q,p,o,n)},
$S:101}
A.y9.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.M(s)},
$S:54}
A.ya.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.M(s)},
$S:54}
A.tJ.prototype={}
A.jR.prototype={
kv(a){return a.a===this.w.a},
c_(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c_=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
b=A
a=p.w
s=3
return A.a(e.mX(p.x,p.y),$async$c_)
case 3:d=b.CE(a,a1,e.y,e.z)
c=p.z
if(c==null){q=d
s=1
break}e=A.l([],t.d)
for(o=d.length,n=c.$ti,m=n.i("ae<F.E>"),n=n.i("F.E"),l=t.N,k=t.X,j=0;j<d.length;d.length===o||(0,A.A)(d),++j){i=d[j]
h=A.D(l,k)
for(g=new A.ae(c,c.gl(0),m);g.m();){f=g.d
if(f==null)f=n.a(f)
if(i.G(f))h.j(0,f,i.h(0,f))}e.push(h)}q=e
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
jv(a){return A.Ir(a,new A.o_(this),!1)},
mE(a){return this.as.$1(a)},
jY(a,b){return null}}
A.o_.prototype={
$1(a){return this.a.a.e.Q+=a},
$S:8}
A.qe.prototype={
cq(a,b){return this.vv(a,b)},
vv(a,b){var s=0,r=A.h(t.X),q,p
var $async$cq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.eB(A.n(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cq,r)},
hX(a,b,c,d){return this.wl(a,b,c,d)},
wl(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$hX=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.wh(a6,a7)
a=t.N
a0=new A.k2(A.D(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.aa(A.D_(a2?null:A.n3(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.qf(a3)
a0.e=new A.qg(a3)
p=4
b.H("PRAGMA journal_mode=TRUNCATE")
f=b.fi("PRAGMA journal_mode")
n=f.gD(f).b[0]
if(J.ap(n).toLowerCase()!=="truncate"){a=A.w("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.J4(a2?null:A.n3(a8))
e=t.bE.a(J.T(m,"stores"))
l=e==null?A.l([],t.aw):e
d=A.b4(J.T(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.BU(J.T(m,"destructiveBackup"))
j=f!==!1
i=A.J3(A.D_(a2?null:A.n3(a8),"fieldCipher"))
if(A.IL(l,i)){a=A.aJ("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.u6(A.D(a,t.p))
s=7
return A.a(A.cH(h,a0,j,i,k,a6,B.cw,l),$async$hX)
case 7:g=b0
a1=!0
a=b
a2=t.S
q=new A.kt(a,new A.uh(a,g,A.D(a2,t.oS),new A.tN(A.IX(),A.D(a2,t.oc)),A.aS(t.be)))
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
return A.f($async$hX,r)}}
A.qf.prototype={
$1(a){return A.mY(this.a,a)},
$S:103}
A.qg.prototype={
$1(a){return A.mZ(this.a,a)},
$S:104}
A.kt.prototype={
cq(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.yP(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.ES(n)
if(o==null){q=A.yP(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.hK(new A.lX(a),o),$async$cq)
case 3:q=m.ET(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cq,r)}}
A.lX.prototype={$ilD:1}
A.xM.prototype={
$2(a,b){this.a.j(0,J.ap(a),A.bM(b))},
$S:33}
A.xG.prototype={
$2(a,b){this.a.j(0,J.ap(a),A.n4(b))},
$S:33}
A.cz.prototype={}
A.tN.prototype={
gmV(){var s=this.r
return new A.av(s,A.m(s).i("av<2>")).vp(0,0,new A.tQ())},
mm(){var s,r=this.r,q=A.m(r).i("av<2>"),p=q.i("c7<o.E,i>"),o=A.P(new A.c7(new A.b2(new A.av(r,q),new A.tO(this.f.$0()),q.i("b2<o.E>")),new A.tP(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.A)(o),++s)r.E(0,o[s])
return p}}
A.tQ.prototype={
$2(a,b){return a+b.f},
$S:105}
A.tO.prototype={
$1(a){return!a.z.jR(this.a)},
$S:106}
A.tP.prototype={
$1(a){return a.a},
$S:107}
A.y4.prototype={
$1(a){return A.J5(a)},
$S:108}
A.xW.prototype={
$1(a){return B.c.cS(a.c,new A.xV())},
$S:109}
A.xV.prototype={
$1(a){return a.e},
$S:55}
A.fn.prototype={
am(){var s=this
return A.n(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.ub.prototype={
$2(a,b){return new A.S(J.ap(a),b,t.eB)},
$S:32}
A.ly.prototype={
am(){var s,r=this,q=A.D(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.am())
else q.j(0,"r",r.c)
return q}}
A.u8.prototype={
am(){var s,r=A.D(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.hj.prototype={
k(a){return"DatabaseWorkerClosedException: "+this.a},
$iJ:1}
A.i0.prototype={
k(a){return"ProtocolEnvelopeException: "+this.a},
$iJ:1}
A.kX.prototype={
k(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iJ:1}
A.W.prototype={
P(a,b,c){var s,r,q,p=this.a.h(0,a)
if(!c.b(p)){s=b==null?"":" for "+b
r=A.Bb(c)
q=p==null?"null":A.Bc(p)
throw A.b(A.c9('Missing or invalid "'+a+'" argument'+s+": expected "+r+", got "+q+"."))}return p},
V(a,b){var s=this.a
if(!s.G(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.c9('Invalid "'+a+'" argument: expected '+A.Bb(b)+", got "+A.Bc(s)+"."))
return b.a(s)}}
A.fo.prototype={}
A.ir.prototype={}
A.eg.prototype={}
A.xJ.prototype={
$2(a,b){var s,r,q=J.ap(a)
if(t.f.b(b))this.a.j(0,q,A.fV(b))
else{s=this.a
if(t.j.b(b)){r=J.aL(b,new A.xI(),t.z)
r=A.P(r,r.$ti.i("V.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:26}
A.xI.prototype={
$1(a){return t.f.b(a)?A.fV(a):a},
$S:40}
A.lC.prototype={
iM(a,b){return this.pv(a,b)},
pv(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$iM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.iE(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iM,r)},
lq(a){var s,r,q,p,o,n=a.h(0,"type"),m=a.h(0,"operation"),l=a.h(0,"compilerVersion"),k=a.h(0,"store"),j=a.h(0,"schemaVersion"),i=a.h(0,"schemaFingerprint"),h=a.h(0,"argumentCount"),g=a.h(0,"sql"),f=a.h(0,"args")
if(!J.t(n,"query_plan")||typeof m!="string"||!B.cC.C(0,m)||!J.t(l,2)||typeof k!="string"||!A.aE(j)||typeof i!="string"||!A.aE(h)||typeof g!="string"||!t.j.b(f))throw A.b(A.c9("Malformed or stale compiled query plan."))
s=this.c.ae(k).a
r=A.aD(B.l.v(B.f.v(A.aj(s.am()))).a)
if(s.b!==j||r!==i||J.ao(f)!==h||!B.a.S(g,"SELECT "))throw A.b(A.c9("Stale or mismatched compiled query plan."))
q=a.h(0,"projection")
a.h(0,"limit")
a.h(0,"shape")
n.toString
A.M(n)
p=t.X
o=J.aL(f,A.Cz(),p)
o=A.P(o,o.$ti.i("V.E"))
p=A.dd(o,p)
o=t.j.b(q)?J.ju(q,t.N):null
return new A.rZ(m,k,g,p,o)},
iE(a){return this.oV(a)},
oV(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k
var $async$iE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.lq(a)
n=a.h(0,"sessionId")
m=A.aE(n)?new A.uk(p.cf(n)):new A.ul(p)
l=a.h(0,"pageLimit")
k=A.aE(l)?l:null
q=A.xN(p.c,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iE,r)},
cM(a,b){return this.pq(a,b)},
pq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$cM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cl(),$async$cM)
case 3:o=p.f,n=new A.aR(o,o.r,o.e,A.m(o).i("aR<2>"))
case 4:if(!n.m()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$cM)
case 6:s=4
break
case 5:o.ah(0)
o=p.w
if(o!=null)o.B()
p.w=null
p.r.r.ah(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.aG(new A.hj("Database closed."))
p.d=null
o=p.ax
o=o==null?null:o.B()
s=7
return A.a(o instanceof A.q?o:A.bd(o,t.H),$async$cM)
case 7:p.ax=null
p.at.ah(0)
s=8
return A.a(p.c.p(),$async$cM)
case 8:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cM,r)},
cl(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cl=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.y
q.y=null
p=q.Q
p=p==null?null:p.B()
s=2
return A.a(p instanceof A.q?p:A.bd(p,t.H),$async$cl)
case 2:q.Q=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aD(),$async$cl)
case 5:s=6
return A.a(o.eg(),$async$cl)
case 6:o.eg()
p=o.ay
if((p.c&4)===0)p.p()
o.x.a.p()
case 4:q.as=q.z=null
return A.e(null,r)}})
return A.f($async$cl,r)},
bp(a,b){return this.ot(a,b)},
ot(a,b){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i
var $async$bp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=t.f
if(!i.b(b))throw A.b(A.c9("Mutation element must be a map, got "+A.r(b==null?"null":J.bq(b))+"."))
q=t.N
p=t.X
o=new A.W(b.c6(0,new A.ui(),q,p))
n=o.P("action",null,q)
m=o.V("id",q)
l=b.h(0,"record")
if(l!=null){k=A.n4(l)
if(!i.b(k))throw A.b(A.c9('Mutation "record" must decode to a map, got '+J.bq(k).k(0)+"."))
j=k.c6(0,new A.uj(),q,p)}else j=null
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
return A.a(a.i1(j),$async$bp)
case 11:s=3
break
case 5:j.toString
s=12
return A.a(a.mY(j),$async$bp)
case 12:s=3
break
case 6:m.toString
j.toString
s=13
return A.a(a.mF(m,j),$async$bp)
case 13:s=3
break
case 7:m.toString
s=14
return A.a(a.m0(m),$async$bp)
case 14:s=3
break
case 8:m.toString
s=15
return A.a(a.mQ(m),$async$bp)
case 15:s=3
break
case 9:m.toString
s=16
return A.a(a.k6(m),$async$bp)
case 16:s=3
break
case 10:throw A.b(A.aJ("Unknown mutation action: "+n,null))
case 3:return A.e(null,r)}})
return A.f($async$bp,r)},
iF(a,b,c){a.a.cV(A.eB(A.n(["v",3,"op","worker_event","watchId",b,"value",A.bM(c)],t.N,t.X)))},
cf(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.w("No active transaction session matching ID "+A.r(a)+"."))
s=this.d
s.toString
return s}}
A.uk.prototype={
$2(a,b){return this.a.c.b.ai(a,b)},
$S:57}
A.ul.prototype={
$2(a,b){return this.a.c.mX(a,b)},
$S:57}
A.ui.prototype={
$2(a,b){return new A.S(J.ap(a),b,t.eB)},
$S:32}
A.uj.prototype={
$2(a,b){return new A.S(J.ap(a),b,t.eB)},
$S:32}
A.uh.prototype={
hK(a,b){return this.vK(a,b)},
vK(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hK=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.at.u(0,a)
if(n.ax==null){i=n.c.a$.b
n.ax=new A.b3(i,A.m(i).i("b3<1>")).aW(new A.um(n))}m=null
try{m=A.FO(b)}catch(d){l=A.C(d)
i=J.ap(l)
q=new A.eg("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eg("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.n(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.iD(a,m),$async$hK)
case 7:k=a0
i=m.b
q=new A.ir(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.C(e)
i=m.b
g=J.ap(j)
f=A.n(["type",A.Jc(j)],t.N,t.X)
q=new A.eg("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hK,r)},
iD(a,b){return this.oU(a,b)},
oU(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$iD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.ay
if(l===$){o=A.n(["health",p.gq5(),"capabilities",p.gpn(),"get",p.gq3(),"mutate_batch",p.gq9(),"compiled_query",p.gpu(),"open",p.gqb(),"analyze",p.gpl(),"wal_checkpoint",p.gqV(),"vacuum",p.gqT(),"prune_outbox",p.gqf(),"compact",p.gpr(),"run_maintenance",p.gql(),"tx_begin",p.gqD(),"tx_get",p.gqH(),"tx_mutate_batch",p.gqJ(),"tx_savepoint",p.gqR(),"tx_rollback_to",p.gqP(),"tx_release",p.gqL(),"tx_commit",p.gqF(),"tx_rollback",p.gqN(),"watch_query",p.gr0(),"watch_one",p.gqZ(),"watch_cancel",p.gqX(),"sync_start",p.gqv(),"sync_stop",p.gqz(),"sync_now",p.gqn(),"sync_pause",p.gqp(),"sync_resume",p.gqr(),"sync_set_connectivity",p.gqt(),"sync_update_auth",p.gqB(),"sync_status",p.gqx(),"file_upload_begin",p.gpX(),"file_upload_chunk",p.gpZ(),"file_upload_finish",p.gq0(),"file_upload_abort",p.gpV(),"file_list",p.gpN(),"file_open",p.gpP(),"file_remove",p.gpR(),"file_gc",p.gpL(),"file_enforce_storage_cap",p.gpJ(),"file_storage_status",p.gpT(),"conflicts_list",p.gpC(),"conflicts_get",p.gpA(),"conflicts_resolve",p.gpE(),"conflicts_accept_local",p.gpw(),"conflicts_accept_remote",p.gpy(),"conflicts_watch",p.gpG(),"close",p.gpp()],t.N,t.n1)
p.ay!==$&&A.yj()
p.ay=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.c9("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iD,r)}}
A.um.prototype={
$1(a){var s,r,q,p=A.n(["v",3,"op","record_event","event",A.bM(a.am())],t.N,t.X)
for(s=this.a.at,s=A.fA(s,s.r,A.m(s).c),r=s.$ti.c;s.m();){q=s.d;(q==null?r.a(q):q).a.cV(A.eB(p))}},
$S:114}
A.lA.prototype={
fE(a,b){return this.pD(a,b)},
pD(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.W(b.d).V("store",o)
m=p.c.ax
m===$&&A.x()
l=J
s=3
return A.a(m.eP(n),$async$fE)
case 3:m=l.aL(d,A.Cy(),t.G)
m=A.P(m,m.$ti.i("V.E"))
q=A.n(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fD(a,b){return this.pB(a,b)},
pB(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.W(b.d)
m=t.N
l=n.P("store","conflicts_get",m)
k=n.P("id","conflicts_get",m)
m=p.c.ax
m===$&&A.x()
s=3
return A.a(m.df(l,k),$async$fD)
case 3:o=d
q=o==null?null:A.CI(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
fF(a,b){return this.pF(a,b)},
pF(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=new A.W(n)
l=t.N
k=m.P("store","conflicts_resolve",l)
j=m.P("id","conflicts_resolve",l)
n=A.n4(n.h(0,"merged"))
n.toString
t.G.a(n)
o=p.c.ax
o===$&&A.x()
s=3
return A.a(o.e7(j,n,k),$async$fF)
case 3:q=A.n(["ok",!0],l,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
fB(a,b){return this.px(a,b)},
px(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","conflicts_accept_local",n)
l=o.P("id","conflicts_accept_local",n)
k=p.c.ax
k===$&&A.x()
s=3
return A.a(k.eB(m,l),$async$fB)
case 3:q=A.n(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
fC(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","conflicts_accept_remote",n)
l=o.P("id","conflicts_accept_remote",n)
k=p.c.ax
k===$&&A.x()
s=3
return A.a(k.dK(m,l),$async$fC)
case 3:q=A.n(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
iN(a,b){return this.pH(a,b)},
pH(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$iN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.S
m=o.P("watchId","conflicts_watch",n)
l=t.N
k=o.V("store",l)
j=p.c.ax
j===$&&A.x()
p.f.j(0,m,new A.fp(new A.ud(j.xe(k).aW(new A.ue(p,a,m)))))
q=A.n(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iN,r)}}
A.ue.prototype={
$1(a){var s=J.aL(a,A.Cy(),t.G)
s=A.P(s,s.$ti.i("V.E"))
this.a.iF(this.b,this.c,s)},
$S:115}
A.ud.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.B(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.lB.prototype={
fN(a,b){return this.q4(a,b)},
q4(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","get",n)
l=o.P("id","get",n)
n=p.c
if(A.ln(n)!=null)A.v(A.w(u.L))
k=A
s=3
return A.a(new A.dO(n,n.ae(m),null,null).bN(l),$async$fN)
case 3:q=k.bM(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
ej(a,b){return this.qa(a,b)},
qa(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$ej=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.W(b.d)
m=t.N
l=n.P("store","mutate_batch",m)
k=n.P("mutations","mutate_batch",t.W)
j=p.rA(n.V("durability",m),"mutate_batch")
i=J.K(k)
s=i.gl(k)===1&&j===B.p?3:4
break
case 3:o=p.c
if(A.ln(o)!=null)A.v(A.w(u.L))
s=5
return A.a(p.bp(new A.dO(o,o.ae(l),null,null),i.gD(k)),$async$ej)
case 5:q=A.n(["ok",!0],m,t.y)
s=1
break
case 4:s=6
return A.a(p.c.cz(new A.uf(p,l,k),j,t.P),$async$ej)
case 6:q=A.n(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ej,r)},
rA(a,b){switch(a){case null:case void 0:return B.p
case"normal":return B.p
case"full":return B.aI
default:throw A.b(A.c9('Invalid "'+b+'" durability argument: expected "normal" or "full", got "'+a+'".'))}},
fO(a,b){return this.qc(a,b)},
qc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.W(b.d).V("stores",t.W)
s=g!=null?3:4
break
case 3:o=J.I(g),n=p.c,m=n.ch,l=t.X,k=t.f,j=n.y==null
case 5:if(!o.m()){s=6
break}i=o.gn()
if(!k.b(i))A.v(A.a3("Schema must be a map: "+A.r(i),null,null))
h=A.yv(A.fV(i),l)
if(B.c.cS(h.c,new A.ug())&&j)throw A.b(A.aJ('Store "'+h.a+'" declares encrypted fields but no fieldCipher was provided.',null))
s=!m.G(h.a)?7:8
break
case 7:s=9
return A.a(n.b8(h),$async$fO)
case 9:case 8:s=5
break
case 6:case 4:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)}}
A.uf.prototype={
$1(a){return this.nw(a)},
nw(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=a.bX(q.b)
p=J.I(q.c),o=q.a
case 2:if(!p.m()){s=3
break}s=4
return A.a(o.bp(n,p.gn()),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ug.prototype={
$1(a){return a.e},
$S:55}
A.lE.prototype={
p7(){if(this.w!=null)return
this.w=A.B_(A.cE(9e8,0,0),new A.un(this))},
iV(a,b){return this.pY(a,b)},
pY(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$iV=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:p.p7()
o=new A.W(b.d)
n=p.x++
m=p.r
l=t.N
k=o.P("store","file_upload_begin",l)
j=o.P("recordId","file_upload_begin",l)
i=o.V("field",l)
if(i==null)i="imgs"
h=o.V("name",l)
if(h==null)h="blob.bin"
g=t.S
f=o.P("size","file_upload_begin",g)
e=o.V("expectedSha256",l)
d=o.V("allowVolatileBlobs",t.y)
m.mm()
c=m.r
if(c.a>=16)A.v(A.aJ("Maximum concurrent uploads exceeded (16).",null))
if(f<0||f>268435456)A.v(A.aJ("Invalid file size: "+f,null))
if(m.gmV()+f>536870912)A.v(A.aJ("Aggregate upload quota exceeded: "+m.gmV()+" + "+f+" > 536870912",null))
m=m.f.$0().iw(18e8)
c.j(0,n,new A.cz(n,k,j,i,h,f,e,d===!0,A.l([],t.bs),m))
q=A.n(["uploadId",n],l,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iV,r)},
iW(a,b){return this.q_(a,b)},
q_(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$iW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=new A.W(i).P("uploadId","file_upload_chunk",t.S)
i=A.n4(i.h(0,"chunk"))
i.toString
o=p.r
i=new Uint8Array(A.aY(t.L.a(i)))
n=o.r
m=n.h(0,h)
if(m==null)A.v(A.aJ("Unknown upload session: "+h,null))
o=o.f
if(!m.z.jR(o.$0())){n.E(0,h)
A.v(A.aJ("Upload session expired: "+h,null))}l=i.length
if(l>262144){n.E(0,h)
A.v(A.aJ("Chunk too large: "+l+" > 262144",null))}k=m.x
j=m.f
if(k+l>j){n.E(0,h)
A.v(A.aJ("Upload exceeds declared size "+j,null))}m.y.push(i)
m.x+=l
m.z=o.$0().iw(18e8)
q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iW,r)},
fL(a,b){return this.q1(a,b)},
q1(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.W(b.d).P("uploadId","file_upload_finish",t.S)
f=p.r
e=f.r.E(0,g)
if(e==null)A.v(A.aJ("Unknown upload session: "+g,null))
if(!e.z.jR(f.f.$0()))A.v(A.aJ("Upload session expired: "+g,null))
f=e.x
o=e.f
if(f!==o)A.v(A.aJ("Upload size mismatch: expected "+o+" but got "+f,null))
f=p.c.ay
f===$&&A.x()
n=e.b
m=e.c
l=new A.uo(e).$0()
k=e.d
j=e.e
i=e.r
s=3
return A.a(f.cT(e.w,l,i,o,k,j,m,n),$async$fL)
case 3:h=d
q=A.n(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
iU(a,b){return this.pW(a,b)},
pW(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$iU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.r.r.E(0,new A.W(b.d).P("uploadId","file_upload_abort",t.S))
q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iU,r)},
fI(a,b){return this.pO(a,b)},
pO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.W(b.d)
j=p.c.ay
j===$&&A.x()
o=t.N
n=k.P("store","file_list",o)
m=k.P("recordId","file_list",o)
l=k.V("field",o)
i=J
s=3
return A.a(j.dZ(l==null?"imgs":l,m,n),$async$fI)
case 3:j=i.aL(d,A.Jm(),t.G)
j=A.P(j,j.$ti.i("V.E"))
q=A.n(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
dv(a,b){return this.pQ(a,b)},
pQ(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dv=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.W(b.d)
c=m.c.ay
c===$&&A.x()
i=t.N
h=d.P("store","file_open",i)
g=d.P("recordId","file_open",i)
f=d.V("field",i)
if(f==null)f="imgs"
e=d.V("index",t.S)
if(e==null)e=0
s=3
return A.a(c.eW(f,e,g,d.V("refId",i),h),$async$dv)
case 3:l=a1
k=A.l([],t.t)
h=new A.bZ(A.bL(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.m(),$async$dv)
case 9:if(!a1){s=8
break}j=h.gn()
J.zV(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.B(),$async$dv)
case 10:s=n.pop()
break
case 6:q=A.n(["bytes",A.bM(new Uint8Array(A.aY(k))),"size",J.ao(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dv,r)},
fJ(a,b){return this.pS(a,b)},
pS(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.W(b.d)
i=p.c.ay
i===$&&A.x()
o=t.N
n=j.P("store","file_remove",o)
m=j.P("recordId","file_remove",o)
l=j.V("field",o)
if(l==null)l="imgs"
k=j.V("index",t.S)
if(k==null)k=0
s=3
return A.a(i.f3(0,l,k,m,j.V("refId",o),n),$async$fJ)
case 3:q=A.n(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
fH(a,b){return this.pM(a,b)},
pM(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.W(b.d)
k=p.c.ay
k===$&&A.x()
o=t.S
n=l.V("blobGraceMs",o)
n=A.cE(0,n==null?6048e5:n,0)
m=l.V("tmpGraceMs",o)
j=A
s=3
return A.a(k.ba(n,A.cE(0,m==null?864e5:m,0)),$async$fH)
case 3:q=j.n(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
fG(a,b){return this.pK(a,b)},
pK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.ay
n===$&&A.x()
o=t.S
m=A
s=3
return A.a(n.co(new A.W(b.d).P("maxBytes","file_enforce_storage_cap",o)),$async$fG)
case 3:q=m.n(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
fK(a,b){return this.pU(a,b)},
pU(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.ay
o===$&&A.x()
n=A
s=3
return A.a(o.gjS(),$async$fK)
case 3:q=n.n(["durable",d],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fK,r)}}
A.un.prototype={
$1(a){return this.a.r.mm()},
$S:53}
A.uo.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bI(A.du(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.A)(l),++j
s=3
break
case 5:case 1:return A.bI(null,0,r)
case 2:return A.bI(o.at(-1),1,r)}})
var s=0,r=A.C9($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Co(r)},
$S:116}
A.lF.prototype={
iX(a,b){return this.q6(a,b)},
q6(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$iX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.fi("SELECT sqlite_version() AS v")
m=n.gD(n).h(0,"v")
o=o.fi("PRAGMA journal_mode")
q=A.n(["ok",!0,"sqliteVersion",m,"journalMode",o.gD(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iX,r)},
iL(a,b){return this.po(a,b)},
po(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$iL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.c
n=p.a.fi("PRAGMA journal_mode")
q=A.n(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gD(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iL,r)},
fz(a,b){return this.pm(a,b)},
pm(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.a(p.c.dM(new A.W(b.d).V("store",o)),$async$fz)
case 3:q=A.n(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
h4(a,b){return this.qW(a,b)},
qW(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$h4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.fb(),$async$h4)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h4,r)},
h3(a,b){return this.qU(a,b)},
qU(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$h3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.fa(new A.W(b.d).V("pages",t.S)),$async$h3)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h3,r)},
fP(a,b){return this.qg(a,b)},
qg(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.S
n=new A.W(b.d).V("maxEntries",o)
if(n==null)n=1e4
m=A
s=3
return A.a(p.c.eZ(n),$async$fP)
case 3:q=m.n(["pruned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fP,r)},
fA(a,b){return this.ps(a,b)},
ps(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","compact",n)
l=t.S
k=o.P("olderThanMs","compact",l)
j=A
s=3
return A.a(p.c.dQ(m,o.V("nowMs",l),A.cE(0,k,0)),$async$fA)
case 3:q=j.n(["compacted",d],n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
fQ(a,b){return this.qm(a,b)},
qm(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d).V("compactOlderThanMs",t.S)
s=3
return A.a(p.c.d9(A.cE(0,o==null?7776e6:o,0)),$async$fQ)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fQ,r)}}
A.x1.prototype={
jz(){var s=0,r=A.h(t.q),q,p=this,o
var $async$jz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.B1(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jz,r)},
k7(a){return this.wK(a)},
wK(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$k7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.B1(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k7,r)}}
A.lG.prototype={
dz(a,b){return this.qw(a,b)},
qw(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dz=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.W(a5.d)
a2=t.N
a3=a1.V("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.aJ("syncStart requires baseUrl.",null))
s=3
return A.a(p.cl(),$async$dz)
case 3:o=a1.V("token",a2)
n=a1.V("scopeId",a2)
if(n==null)n="web-sync"
m=new A.x1(o,n)
l=A.lu(a3)
k=p.c
j=k.ch
i=A.m(j).i("U<1>")
j=A.P(new A.U(j,i),i.i("o.E"))
i=t.hw
h=A.ed(null,null,i)
g=$.u.h(0,B.cJ)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.jN(A.l([],t.E))
f=new A.rc(f)
e=new A.kQ(l,m,j,n,f,h,A.D(a2,t.hU),A.D(a2,i))
i=new A.nr(m)
e.y=i
e.z=new A.re(f,l,i)
d=A.zg()
i=A.ed(null,null,t.n6)
f=A.ed(null,null,t.em)
h=t.H
j=A.c6(null,h)
c=new A.ng(A.c6(null,h))
b=A.c6(B.K,t.mv)
a=A.l([],t.s)
h=A.c6(null,h)
a0=new A.tt(A.Ji(),k.Q)
h=new A.li(k,e,a0,new A.ut(a4),B.T,i,f,j,c,A.aS(a2),b,a,h)
l=h.e=new A.tE(k,B.a.q(A.aD(B.l.v(B.f.v(l.k(0)+"|"+n)).a),0,12))
j=new A.ph(k,e,a0,k.x)
h.x=j
j=new A.rI(k,e,a0,l,j,c)
h.f=j
h.r=new A.tr(k,e,a0,l,j)
h.w=new A.rR(k,e,a0,h.grj(),e.as)
d.b=h
p.z=m
p.y=d.bi()
h=d.bi().ay
p.Q=new A.b3(h,A.m(h).i("b3<1>")).aW(new A.uu(p,a4))
s=4
return A.a(d.bi().av(),$async$dz)
case 4:s=5
return A.a(e.fm(),$async$dz)
case 5:q=A.n(["ok",!0,"state",d.bi().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
fV(a,b){return this.qA(a,b)},
qA(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cl(),$async$fV)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fV,r)},
fR(a,b){return this.qo(a,b)},
qo(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.w("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.cP(),$async$fR)
case 3:o=d
q=A.n(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fR,r)},
fS(a,b){return this.qq(a,b)},
qq(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.bm(),$async$fS)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
fT(a,b){return this.qs(a,b)},
qs(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.b9(),$async$fT)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
fU(a,b){return this.qu(a,b)},
qu(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.w("Sync is not started."))
o=t.y
s=3
return A.a(n.fk(new A.W(b.d).P("online","sync_set_connectivity",o)),$async$fU)
case 3:q=A.n(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fU,r)},
fW(a,b){return this.qC(a,b)},
qC(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
m=p.y
if(n==null||m==null)throw A.b(A.w("Sync is not started."))
o=t.N
n.a=new A.W(b.d).V("token",o)
s=3
return A.a(m.e_(),$async$fW)
case 3:q=A.n(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fW,r)},
iZ(a,b){return this.qy(a,b)},
qy(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.as
if(o==null){o=t.N
o=A.n(["state","closed"],o,o)}else o=A.Bd(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iZ,r)}}
A.ut.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.cV(A.eB(A.n(["v",3,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uu.prototype={
$1(a){this.a.as=a
this.b.a.cV(A.eB(A.n(["v",3,"op","sync_status","status",A.Bd(a)],t.N,t.X)))},
$S:117}
A.wP.prototype={}
A.lH.prototype={
fX(a,b){return this.qE(a,b)},
qE(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.w("A transaction session is already active on this database."))
o=p.e++
n=$.u
m=t.D
l=t.h
k=new A.q(n,m)
p.he(new A.aC(new A.q(n,m),l),new A.aC(new A.q(n,m),l),new A.aC(k,l),o)
s=3
return A.a(k,$async$fX)
case 3:q=A.n(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fX,r)},
he(a,b,c,d){return this.tc(a,b,c,d)},
tc(a,b,c,d){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$he=A.c(function(e,f){if(e===1){p.push(f)
s=q}for(;;)switch(s){case 0:j=b.a
j.bu(new A.uv(),new A.uw(),t.H)
q=3
s=6
return A.a(n.c.Z(new A.ux(n,d,a,b,c),t.P),$async$he)
case 6:if((j.a&30)===0)b.ap()
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.C(i)
l=A.a7(i)
if((j.a&30)===0)b.bt(m,l)
if((c.a.a&30)===0)c.bt(m,l)
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
return A.f($async$he,r)},
fZ(a,b){return this.qI(a,b)},
qI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=p.cf(new A.W(m).V("sessionId",t.S))
k=new A.W(m)
m=t.N
o=k.P("store","tx_get",m)
n=k.P("id","tx_get",m)
j=A
s=3
return A.a(l.c.bX(o).bN(n),$async$fZ)
case 3:q=j.bM(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fZ,r)},
h_(a,b){return this.qK(a,b)},
qK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$h_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=b.d
j=p.cf(new A.W(k).V("sessionId",t.S))
i=new A.W(k)
k=t.N
o=i.P("store","tx_mutate_batch",k)
n=i.P("mutations","tx_mutate_batch",t.W)
m=j.c.bX(o)
l=J.I(n)
case 3:if(!l.m()){s=4
break}s=5
return A.a(p.bp(m,l.gn()),$async$h_)
case 5:s=3
break
case 4:q=A.n(["ok",!0],k,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h_,r)},
h2(a,b){return this.qS(a,b)},
qS(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$h2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.cf(new A.W(b.d).V("sessionId",t.S))
n=o.e
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.H("SAVEPOINT "+m),$async$h2)
case 3:n=t.N
q=A.n(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h2,r)},
ek(a,b){return this.qQ(a,b)},
qQ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$ek=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cf(new A.W(o).V("sessionId",t.S))
m=t.N
l=new A.W(o).P("savepoint","tx_rollback_to",m)
o=n.c.b
s=3
return A.a(o.H("ROLLBACK TO "+l),$async$ek)
case 3:s=4
return A.a(o.H("RELEASE "+l),$async$ek)
case 4:B.c.E(n.e,l)
q=A.n(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ek,r)},
h0(a,b){return this.qM(a,b)},
qM(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$h0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cf(new A.W(o).V("sessionId",t.S))
m=t.N
l=new A.W(o).P("savepoint","tx_release",m)
s=3
return A.a(n.c.b.H("RELEASE "+l),$async$h0)
case 3:B.c.E(n.e,l)
q=A.n(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h0,r)},
fY(a,b){return this.qG(a,b)},
qG(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j
var $async$fY=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:j=m.cf(new A.W(b.d).V("sessionId",t.S))
p=3
l=m.d
k=j
if(l==null?k==null:l===k)m.d=null
j.b.ap()
s=6
return A.a(j.d.a,$async$fY)
case 6:l=A.n(["ok",!0],t.N,t.y)
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
return A.f($async$fY,r)},
h1(a,b){return this.qO(a,b)},
qO(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$h1=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=m.cf(new A.W(b.d).V("sessionId",t.S))
p=3
j=m.d
i=g
if(j==null?i==null:j===i)m.d=null
l=new A.kX("rollback","Transaction rolled back.")
g.b.aG(l)
p=7
s=10
return A.a(g.d.a,$async$h1)
case 10:p=3
s=9
break
case 7:p=6
f=o.pop()
k=A.C(f)
j=k
i=l
if(j==null?i!=null:j!==i)throw f
s=9
break
case 6:s=3
break
case 9:j=A.n(["ok",!0],t.N,t.y)
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
return A.f($async$h1,r)}}
A.uv.prototype={
$1(a){},
$S:118}
A.uw.prototype={
$1(a){},
$S:21}
A.ux.prototype={
$1(a){return this.nx(a)},
nx(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
o=new A.wP(q.b,p,a,q.d,A.l([],t.s))
q.a.d=o
q.e.ap()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.fp.prototype={}
A.lI.prototype={
h7(a,b){return this.r1(a,b)},
r1(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$h7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=new A.W(m).P("watchId","watch_query",t.S)
k=p.lq(m)
m=p.c
o=new A.jR(m.ae(k.d).a,k.r,k.w,k.y,null,new A.uE(p,a,l),m,B.aK)
n=new A.fp(new A.uF(o))
j=J
s=3
return A.a(A.jl(new A.uG(p,l,n),o.gvT(),new A.uH(p,l,n),o.gN(),t.J),$async$h7)
case 3:m=j.aL(d,A.CA(),t.X)
m=A.P(m,m.$ti.i("V.E"))
q=A.n(["watchId",l,"items",m],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)},
h6(a,b){return this.r_(a,b)},
r_(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$h6=A.c(function(c,a0){if(c===1)return A.d(a0,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=o.P("watchId","watch_one",t.S)
m=t.N
l=o.P("store","watch_one",m)
k=o.P("id","watch_one",m)
j=p.c
i=j.ae(l)
h=A.zg()
g=new A.fp(new A.uz(h))
f=A
e=n
d=A
s=3
return A.a(A.jl(new A.uA(p,n,g),new A.uB(p,l,k),new A.uC(p,n,g),new A.uD(p,h,new A.hV(i,k,j,B.aK),a,n),t.b),$async$h6)
case 3:q=f.n(["watchId",e,"item",d.bM(a0)],m,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h6,r)},
h5(a,b){return this.qY(a,b)},
qY(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$h5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.E(0,new A.W(b.d).P("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$h5)
case 5:case 4:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)}}
A.uE.prototype={
$1(a){return this.a.iF(this.b,this.c,a)},
$S:119}
A.uF.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.hz()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uH.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.uG.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.E(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uz.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.bi().B(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uD.prototype={
$0(){var s=this
s.b.smo(s.c.nW().aW(new A.uy(s.a,s.d,s.e)))},
$S:0}
A.uy.prototype={
$1(a){this.a.iF(this.b,this.c,a)},
$S:120}
A.uC.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.uB.prototype={
$0(){var s=this.a.c
if(A.ln(s)!=null)A.v(A.w(u.L))
return new A.dO(s,s.ae(this.b),null,null).bN(this.c)},
$S:121}
A.uA.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.E(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mK.prototype={}
A.mL.prototype={}
A.mM.prototype={}
A.mN.prototype={}
A.mO.prototype={}
A.mP.prototype={}
A.mQ.prototype={}
A.oj.prototype={
tO(a){var s,r=null
A.Cs("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.aY(a)>0&&!s.cr(a)
if(s)return a
s=A.CD()
return this.mz(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
uw(a){var s,r,q=A.di(a,this.a)
q.f4()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.c.k9(s)
q.e.pop()
q.f4()
return q.k(0)},
mz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Cs("join",s)
return this.w_(new A.bv(s,t.x))},
w_(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.dp(s,new A.ok(),a.$ti.i("dp<o.E>")),q=this.a,p=!1,o=!1,n="";r.m();){m=s.gn()
if(q.cr(m)&&o){l=A.di(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.q(k,0,q.e8(k,!0))
l.b=n
if(q.eU(n))l.e[0]=q.gdh()
n=l.k(0)}else if(q.aY(m)>0){o=!q.cr(m)
n=m}else{if(!(m.length!==0&&q.jw(m[0])))if(p)n+=q.gdh()
n+=m}p=q.eU(m)}return n.charCodeAt(0)==0?n:n},
dj(a,b){var s=A.di(b,this.a),r=s.d,q=A.a6(r).i("b2<1>")
r=A.P(new A.b2(r,new A.ol(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.c.aC(r,0,q)
return s.d},
eV(a){var s
if(!this.rh(a))return a
s=A.di(a,this.a)
s.jX()
return s.k(0)},
rh(a){var s,r,q,p,o,n,m,l=this.a,k=l.aY(a)
if(k!==0){if(l===$.n8())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.c3(n)){if(l===$.n8()&&n===47)return!0
if(q!=null&&l.c3(q))return!0
if(q===46)m=o==null||o===46||l.c3(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.c3(q))return!0
if(q===46)l=o==null||l.c3(o)||o===46
else l=!1
if(l)return!0
return!1},
wM(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aY(a)
if(l<=0)return o.eV(a)
s=A.CD()
if(m.aY(s)<=0&&m.aY(a)>0)return o.eV(a)
if(m.aY(a)<=0||m.cr(a))a=o.tO(a)
if(m.aY(a)<=0&&m.aY(s)>0)throw A.b(A.AM(n+a+'" from "'+s+'".'))
r=A.di(s,m)
r.jX()
q=A.di(a,m)
q.jX()
l=r.d
if(l.length!==0&&l[0]===".")return q.k(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.k0(l,p)
else l=!1
if(l)return q.k(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.k0(l[0],p[0])}else l=!1
if(!l)break
B.c.i5(r.d,0)
B.c.i5(r.e,1)
B.c.i5(q.d,0)
B.c.i5(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.AM(n+a+'" from "'+s+'".'))
l=t.N
B.c.jO(q.d,0,A.aG(p,"..",!1,l))
p=q.e
p[0]=""
B.c.jO(p,1,A.aG(r.d.length,m.gdh(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.c.ga3(m)==="."){B.c.k9(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.f4()
return q.k(0)},
mG(a){var s,r,q=this,p=A.Cd(a)
if(p.gaS()==="file"&&q.a===$.js())return p.k(0)
else if(p.gaS()!=="file"&&p.gaS()!==""&&q.a!==$.js())return p.k(0)
s=q.eV(q.a.k_(A.Cd(p)))
r=q.wM(s)
return q.dj(0,r).length>q.dj(0,s).length?s:r}}
A.ok.prototype={
$1(a){return a!==""},
$S:12}
A.ol.prototype={
$1(a){return a.length!==0},
$S:12}
A.xu.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:122}
A.q5.prototype={
nF(a){var s=this.aY(a)
if(s>0)return B.a.q(a,0,s)
return this.cr(a)?a[0]:null},
k0(a,b){return a===b}}
A.kL.prototype={
gjr(){var s=this,r=t.N,q=new A.kL(s.a,s.b,s.c,A.eU(s.d,!0,r),A.eU(s.e,!0,r))
q.f4()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.c.ga3(r)},
f4(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.c.ga3(s)===""))break
B.c.k9(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
jX(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.c.jO(m,0,A.aG(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.aG(m.length+1,s.gdh(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.eU(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.n8())n.b=A.z(r,"/","\\")
n.f4()},
k(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.c.ga3(q)
return o.charCodeAt(0)==0?o:o}}
A.kM.prototype={
k(a){return"PathException: "+this.a},
$iJ:1}
A.tq.prototype={
k(a){return this.gb7()}}
A.rx.prototype={
jw(a){return B.a.C(a,"/")},
c3(a){return a===47},
eU(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
e8(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aY(a){return this.e8(a,!1)},
cr(a){return!1},
k_(a){var s
if(a.gaS()===""||a.gaS()==="file"){s=a.gbl()
return A.zq(s,0,s.length,B.k,!1)}throw A.b(A.O("Uri "+a.k(0)+" must have scheme 'file:'.",null))},
gb7(){return"posix"},
gdh(){return"/"}}
A.tT.prototype={
jw(a){return B.a.C(a,"/")},
c3(a){return a===47},
eU(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bY(a,"://")&&this.aY(a)===s},
e8(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.c1(a,"/",B.a.aa(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.CH(a,q+1)
return p==null?q:p}}return 0},
aY(a){return this.e8(a,!1)},
cr(a){return a.length!==0&&a.charCodeAt(0)===47},
k_(a){return a.k(0)},
gb7(){return"url"},
gdh(){return"/"}}
A.uc.prototype={
jw(a){return B.a.C(a,"/")},
c3(a){return a===47||a===92},
eU(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
e8(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.c1(a,"\\",2)
if(s>0){s=B.a.c1(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.CO(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aY(a){return this.e8(a,!1)},
cr(a){return this.aY(a)===1},
k_(a){var s,r
if(a.gaS()!==""&&a.gaS()!=="file")throw A.b(A.O("Uri "+a.k(0)+" must have scheme 'file:'.",null))
s=a.gbl()
if(a.gd_()===""){if(s.length>=3&&B.a.S(s,"/")&&A.CH(s,1)!=null)s=B.a.mP(s,"/","")}else s="\\\\"+a.gd_()+s
r=A.z(s,"/","\\")
return A.zq(r,0,r.length,B.k,!1)},
uc(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
k0(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.uc(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gb7(){return"windows"},
gdh(){return"\\"}}
A.t9.prototype={
gl(a){return this.c.length},
gw0(){return this.b.length},
of(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.E(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ee(a){var s,r=this
if(a<0)throw A.b(A.aO("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aO("Offset "+a+u.D+r.gl(0)+"."))
s=r.b
if(a<B.c.gD(s))return-1
if(a>=B.c.ga3(s))return s.length-1
if(r.r7(a)){s=r.d
s.toString
return s}return r.d=r.ov(a)-1},
r7(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
ov(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.b.K(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
im(a){var s,r,q=this
if(a<0)throw A.b(A.aO("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aO("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gl(0)+"."))
s=q.ee(a)
r=q.b[s]
if(r>a)throw A.b(A.aO("Line "+s+" comes after offset "+a+"."))
return a-r},
ff(a){var s,r,q,p
if(a<0)throw A.b(A.aO("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aO("Line "+a+" must be less than the number of lines in the file, "+this.gw0()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aO("Line "+a+" doesn't have 0 columns."))
return q}}
A.ka.prototype={
ga0(){return this.a.a},
gad(){return this.a.ee(this.b)},
gao(){return this.a.im(this.b)},
gaq(){return this.b}}
A.fx.prototype={
ga0(){return this.a.a},
gl(a){return this.c-this.b},
gN(){return A.yD(this.a,this.b)},
gM(){return A.yD(this.a,this.c)},
gaH(){return A.dl(B.u.U(this.a.c,this.b,this.c),0,null)},
gb6(){var s=this,r=s.a,q=s.c,p=r.ee(q)
if(r.im(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dl(B.u.U(r.c,r.ff(p),r.ff(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.ff(p+1)
return A.dl(B.u.U(r.c,r.ff(r.ee(s.b)),q),0,null)},
X(a,b){var s
if(!(b instanceof A.fx))return this.o6(0,b)
s=B.b.X(this.b,b.b)
return s===0?B.b.X(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.fx))return s.o5(0,b)
return s.b===b.b&&s.c===b.c&&J.t(s.a.a,b.a.a)},
gI(a){return A.c8(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$icO:1}
A.pC.prototype={
vQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.lW(B.c.gD(a1).c)
s=a.e
r=A.aG(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.t(m.c,l)){a.hk("\u2575")
q.a+="\n"
a.lW(l)}else if(m.b+1!==n.b){a.tN("...")
q.a+="\n"}}for(l=n.d,k=A.a6(l).i("e9<1>"),j=new A.e9(l,k),j=new A.ae(j,j.gl(0),k.i("ae<V.E>")),k=k.i("V.E"),i=n.b,h=n.a;j.m();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gN().gad()!==f.gM().gad()&&f.gN().gad()===i&&a.r8(B.a.q(h,0,f.gN().gao()))){e=B.c.c0(r,a0)
if(e<0)A.v(A.O(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.tM(i)
q.a+=" "
a.tL(n,r)
if(s)q.a+=" "
d=B.c.vS(l,new A.pX())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gN().gad()===i?j.gN().gao():0
a.tJ(h,g,j.gM().gad()===i?j.gM().gao():h.length,p)}else a.hm(h)
q.a+="\n"
if(k)a.tK(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hk("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
lW(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hk("\u2577")
else{q.hk("\u250c")
q.be(new A.pK(q),"\x1b[34m")
s=q.r
r=" "+$.h3().mG(a)
s.a+=r}q.r.a+="\n"},
hi(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gN().gad()
i=k?null:l.a.gM().gad()
if(s&&l===c){h.be(new A.pR(h,j,a),r)
n=!0}else if(n)h.be(new A.pS(h,l),r)
else if(k)if(g.a)h.be(new A.pT(h),g.b)
else o.a+=" "
else h.be(new A.pU(g,h,c,j,a,l,i),p)}},
tL(a,b){return this.hi(a,b,null)},
tJ(a,b,c,d){var s=this
s.hm(B.a.q(a,0,b))
s.be(new A.pL(s,a,b,c),d)
s.hm(B.a.q(a,c,a.length))},
tK(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gN().gad()===p.gM().gad()){r.jn()
p=r.r
p.a+=" "
r.hi(a,c,b)
if(c.length!==0)p.a+=" "
r.lX(b,c,r.be(new A.pM(r,a,b),q))}else{s=a.b
if(p.gN().gad()===s){if(B.c.C(c,b))return
A.J9(c,b)
r.jn()
p=r.r
p.a+=" "
r.hi(a,c,b)
r.be(new A.pN(r,a,b),q)
p.a+="\n"}else if(p.gM().gad()===s){p=p.gM().gao()
if(p===a.a.length){A.D0(c,b)
return}r.jn()
r.r.a+=" "
r.hi(a,c,b)
r.lX(b,c,r.be(new A.pO(r,!1,a,b),q))
A.D0(c,b)}}},
lV(a,b,c){var s=c?0:1,r=this.r
s=B.a.bb("\u2500",1+b+this.iB(B.a.q(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tI(a,b){return this.lV(a,b,!0)},
lX(a,b,c){this.r.a+="\n"
return},
hm(a){var s,r,q,p
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),q=this.r,r=r.i("F.E");s.m();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bb(" ",4)
else{p=A.bh(p)
q.a+=p}}},
hl(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.b.k(b+1)
this.be(new A.pV(s,this,a),"\x1b[34m")},
hk(a){return this.hl(a,null,null)},
tN(a){return this.hl(null,null,a)},
tM(a){return this.hl(null,a,null)},
jn(){return this.hl(null,null,null)},
iB(a){var s,r,q,p
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),r=r.i("F.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
r8(a){var s,r,q
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),r=r.i("F.E");s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
oJ(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
be(a,b){return this.oJ(a,b,t.z)}}
A.pW.prototype={
$0(){return this.a},
$S:123}
A.pE.prototype={
$1(a){var s=a.d
return new A.b2(s,new A.pD(),A.a6(s).i("b2<1>")).gl(0)},
$S:124}
A.pD.prototype={
$1(a){var s=a.a
return s.gN().gad()!==s.gM().gad()},
$S:34}
A.pF.prototype={
$1(a){return a.c},
$S:126}
A.pH.prototype={
$1(a){var s=a.a.ga0()
return s==null?new A.j():s},
$S:127}
A.pI.prototype={
$2(a,b){return a.a.X(0,b.a)},
$S:128}
A.pJ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aA(c),r=s.gt(c),q=t.pg;r.m();){p=r.gn().a
o=p.gb6()
n=A.xQ(o,p.gaH(),p.gN().gao())
n.toString
m=B.a.hn("\n",B.a.q(o,0,n)).gl(0)
l=p.gN().gad()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.c.ga3(b).b)b.push(new A.ci(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.A)(b),++k){j=b[k]
h&1&&A.E(i,16)
B.c.t6(i,new A.pG(j),!0)
f=i.length
for(q=s.bd(c,g),p=q.$ti,q=new A.ae(q,q.gl(0),p.i("ae<V.E>")),n=j.b,p=p.i("V.E");q.m();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gN().gad()>n)break
i.push(e)}g+=i.length-f
B.c.F(j.d,i)}return b},
$S:129}
A.pG.prototype={
$1(a){return a.a.gM().gad()<this.a.b},
$S:34}
A.pX.prototype={
$1(a){return!0},
$S:34}
A.pK.prototype={
$0(){this.a.r.a+=B.a.bb("\u2500",2)+">"
return null},
$S:0}
A.pR.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:4}
A.pS.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:4}
A.pT.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.pU.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.be(new A.pP(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gM().gao()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.be(new A.pQ(r,o),p.b)}}},
$S:4}
A.pP.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:4}
A.pQ.prototype={
$0(){this.a.r.a+=this.b},
$S:4}
A.pL.prototype={
$0(){var s=this
return s.a.hm(B.a.q(s.b,s.c,s.d))},
$S:0}
A.pM.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gN().gao(),l=n.gM().gao()
n=this.b.a
s=q.iB(B.a.q(n,0,m))
r=q.iB(B.a.q(n,m,l))
m+=s*3
n=(p.a+=B.a.bb(" ",m))+B.a.bb("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:9}
A.pN.prototype={
$0(){return this.a.tI(this.b,this.c.a.gN().gao())},
$S:0}
A.pO.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bb("\u2500",3)
else r.lV(s.c,Math.max(s.d.a.gM().gao()-1,0),!1)
return q.a.length-p.length},
$S:9}
A.pV.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wn(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:4}
A.be.prototype={
k(a){var s=this.a
s="primary "+(""+s.gN().gad()+":"+s.gN().gao()+"-"+s.gM().gad()+":"+s.gM().gao())
return s.charCodeAt(0)==0?s:s}}
A.w4.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.xQ(o.gb6(),o.gaH(),o.gN().gao())!=null)){s=A.l7(o.gN().gaq(),0,0,o.ga0())
r=o.gM().gaq()
q=o.ga0()
p=A.Ix(o.gaH(),10)
o=A.ta(s,A.l7(r,A.Bt(o.gaH()),p,q),o.gaH(),o.gaH())}return A.Gd(A.Gf(A.Ge(o)))},
$S:130}
A.ci.prototype={
k(a){return""+this.b+': "'+this.a+'" ('+B.c.J(this.d,", ")+")"}}
A.cc.prototype={
jC(a){var s=this.a
if(!J.t(s,a.ga0()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga0())+"\" don't match.",null))
return Math.abs(this.b-a.gaq())},
X(a,b){var s=this.a
if(!J.t(s,b.ga0()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga0())+"\" don't match.",null))
return this.b-b.gaq()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.t(this.a,b.ga0())&&this.b===b.gaq()},
gI(a){var s=this.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
k(a){var s=this,r=A.d1(s).k(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iam:1,
ga0(){return this.a},
gaq(){return this.b},
gad(){return this.c},
gao(){return this.d}}
A.l8.prototype={
jC(a){if(!J.t(this.a.a,a.ga0()))throw A.b(A.O('Source URLs "'+A.r(this.ga0())+'" and "'+A.r(a.ga0())+"\" don't match.",null))
return Math.abs(this.b-a.gaq())},
X(a,b){if(!J.t(this.a.a,b.ga0()))throw A.b(A.O('Source URLs "'+A.r(this.ga0())+'" and "'+A.r(b.ga0())+"\" don't match.",null))
return this.b-b.gaq()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.t(this.a.a,b.ga0())&&this.b===b.gaq()},
gI(a){var s=this.a.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
k(a){var s=A.d1(this).k(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ee(r)+1)+":"+(q.im(r)+1))+">"},
$iam:1,
$icc:1}
A.la.prototype={
og(a,b,c){var s,r=this.b,q=this.a
if(!J.t(r.ga0(),q.ga0()))throw A.b(A.O('Source URLs "'+A.r(q.ga0())+'" and  "'+A.r(r.ga0())+"\" don't match.",null))
else if(r.gaq()<q.gaq())throw A.b(A.O("End "+r.k(0)+" must come after start "+q.k(0)+".",null))
else{s=this.c
if(s.length!==q.jC(r))throw A.b(A.O('Text "'+s+'" must be '+q.jC(r)+" characters long.",null))}},
gN(){return this.a},
gM(){return this.b},
gaH(){return this.c}}
A.lb.prototype={
gjW(){return this.a},
k(a){var s,r,q,p=this.b,o="line "+(p.gN().gad()+1)+", column "+(p.gN().gao()+1)
if(p.ga0()!=null){s=p.ga0()
r=$.h3()
s.toString
s=o+(" of "+r.mG(s))
o=s}o+=": "+this.a
q=p.vR(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iJ:1}
A.f9.prototype={
gaq(){var s=this.b
s=A.yD(s.a,s.b)
return s.b},
$ib8:1,
gfl(){return this.c}}
A.fa.prototype={
ga0(){return this.gN().ga0()},
gl(a){return this.gM().gaq()-this.gN().gaq()},
X(a,b){var s=this.gN().X(0,b.gN())
return s===0?this.gM().X(0,b.gM()):s},
vR(a){var s=this
if(!t.ol.b(s)&&s.gl(s)===0)return""
return A.EF(s,a).vQ()},
R(a,b){if(b==null)return!1
return b instanceof A.fa&&this.gN().R(0,b.gN())&&this.gM().R(0,b.gM())},
gI(a){return A.c8(this.gN(),this.gM(),B.d,B.d,B.d,B.d,B.d)},
k(a){var s=this
return"<"+A.d1(s).k(0)+": from "+s.gN().k(0)+" to "+s.gM().k(0)+' "'+s.gaH()+'">'},
$iam:1}
A.cO.prototype={
gb6(){return this.d}}
A.ic.prototype={
ab(){return"SqliteUpdateKind."+this.b}}
A.cd.prototype={
gI(a){return A.c8(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.cd&&b.a===this.a&&b.b===this.b&&b.c===this.c},
k(a){return"SqliteUpdate: "+this.a.k(0)+" on "+this.b+", rowid = "+this.c}}
A.cP.prototype={
k(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.r(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.aL(p,new A.tf(),t.N).J(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iJ:1}
A.tf.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.ap(a)},
$S:131}
A.jw.prototype={}
A.oJ.prototype={
tA(){var s=this,r=s.d
return r==null?s.d=new A.dy(s,A.l([],t.fU),new A.oS(s),new A.oT(s),t.jy):r},
ta(){var s=this,r=s.e
return r==null?s.e=new A.dy(s,A.l([],t.lw),new A.oP(s),new A.oQ(s),t.lU):r},
oL(){var s=this,r=s.f
return r==null?s.f=new A.dy(s,A.l([],t.lw),new A.oL(s),new A.oM(s),t.af):r},
ui(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.f.v(e)
if(m.length>255)A.v(A.aI(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.aY(m))
r=n.a
q=r.dL(s,1)
s=r.d
p=A.zw(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.cM(new A.oU(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.yi(this,p,o,o,o)},
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
r=s.kx()
q=r!==0?A.zA(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aB(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.v(A.w("This database has already been closed"))
r=p.b
q=r.a
s=q.dL(B.f.v(a),1)
q=q.d
r=A.zw(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.yi(p,r,"executing",a,b)}else{s=p.i_(a,!0)
try{s.jH(new A.dX(b))}finally{s.p()}}},
H(a){return this.aB(a,B.y)},
rG(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.v(A.w("This database has already been closed"))
s=B.f.v(a)
r=e.b
q=r.a
p=q.cn(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.u5(r,p,n,o)
l=A.l([],t.lE)
k=new A.oN(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kz(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.yi(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.K(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.ac(o,2)]-p
f=i.a
if(f!=null)l.push(new A.fb(f,e,new A.cZ(!1).cH(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kz(j,r-j,0)
n=q.buffer
h=B.b.K(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.ac(o,2)]-p
f=i.a
if(f!=null){l.push(new A.fb(f,e,""))
k.$0()
throw A.b(A.aI(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aI(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
i_(a,b){var s=this.rG(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aI(a,"sql","Must contain an SQL statement."))
return B.c.gD(s)},
wp(a){return this.i_(a,!1)},
nH(a,b){var s,r=this.i_(a,!0)
try{s=r.ks(new A.dX(b))
return s}finally{r.p()}},
fi(a){return this.nH(a,B.y)}}
A.oS.prototype={
$0(){var s=this.a,r=s.b
r.a.md(r.b,new A.oR(s))},
$S:0}
A.oR.prototype={
$3(a,b,c){var s=A.Fy(a)
if(s==null)return
this.a.d.jB(new A.cd(s,b,c))},
$S:132}
A.oT.prototype={
$0(){var s=this.a.b
s.a.md(s.b,null)
return null},
$S:0}
A.oP.prototype={
$0(){var s=this.a,r=s.b
r.a.mc(r.b,new A.oO(s))
return null},
$S:0}
A.oO.prototype={
$0(){this.a.e.jB(null)},
$S:0}
A.oQ.prototype={
$0(){var s=this.a.b
s.a.mc(s.b,null)
return null},
$S:0}
A.oL.prototype={
$0(){var s=this.a,r=s.b
r.a.mb(r.b,new A.oK(s))
return null},
$S:0}
A.oK.prototype={
$0(){var s=this.a.f
s.jB(null)
return 0},
$S:9}
A.oM.prototype={
$0(){var s=this.a.b
s.a.mb(s.b,null)
return null},
$S:0}
A.oU.prototype={
$2(a,b){A.Hc(a,this.a,b)},
$S:133}
A.oN.prototype={
$0(){var s,r,q,p,o,n
this.a.p()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
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
A.lx.prototype={
gl(a){return this.a.b},
sl(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Fl(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.Fn(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.O("The argument list is unmodifiable",null))},
$itc:1}
A.dy.prototype={
gcE(){var s=this.r
return s==null?this.r=this.pj(!1):s},
pj(a){return new A.cY(new A.wI(this,!1),this.$ti.i("cY<1>"))},
jB(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.v(o.bz())
if((n&1)!==0)o.gaI().aw(a)}else{n=o.b
if(n>=4)A.v(o.bz())
if((n&1)!==0)o.ci(a)
else if((n&3)===0){n=o.ft()
o=new A.bW(a,o.$ti.i("bW<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.se1(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.wI.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.wJ(q,a,s)
a.r=a.e=new A.wK(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(df<1>)")}}
A.wJ.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.iV(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.wK.prototype={
$0(){var s=this.a,r=s.c
B.c.E(r,new A.iV(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.tb.prototype={
mu(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Fx(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wh(a,b){var s,r,q,p,o,n,m,l,k,j
this.mu()
switch(2){case 2:break}s=this.a
r=s.a
q=r.dL(B.f.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.dL(B.f.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.cK(r.b.buffer,0,null)[B.b.ac(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.tZ(r,l,o)
r=r.r
if(r!=null)r.m4(k,l,o)
if(m!==0){j=A.zA(s,k,m,"opening the database",null,null)
k.kx()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.oJ(s,k,!1)}}
A.fb.prototype={
goK(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.lJ(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.cZ(!1).cH(o,0,null,!0))}return q},
gtt(){return null},
bv(a,b){A.yi(this.b,a,b,this.d,this.e)},
l5(){if(this.r||this.b.r)throw A.b(A.w("Tried to operate on a released prepared statement"))},
pc(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.d8()
if(s!==0?s!==101:q)r.bv(s,"executing statement")},
tf(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rZ(o))
l.push(p)}m.d8()
if(p!==0?p!==101:k)m.bv(p,"selecting from statement")
n=m.goK()
m.gtt()
k=new A.kZ(l,n,B.aa)
k.oF()
return k},
rZ(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ah(r.Number(s)):A.zf(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.nU(a)
case 4:return s.ky(a)
case 5:default:return null}},
oy(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.v(A.aI(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.oz(a[s-1],s)
this.e=a},
oz(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.aE(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.ay){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.A6(a).k(0)))
break A}if(A.c0(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.nT(b,a)
break A}if(t.L.b(a)){s=q.a.nS(b,a)
break A}s=q.ox(a,b)
break A}if(s!==0)q.bv(s,"binding parameter")},
ox(a,b){throw A.b(A.aI(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
kM(a){A:{if(a instanceof A.dX){this.oy(a.a)
break A}if(a instanceof A.jV)a.a.$1(this)}},
d8(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.d8()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mg(s.d)}},
ks(a){var s=this
s.l5()
s.d8()
s.kM(a)
return s.tf()},
jH(a){var s=this
s.l5()
s.d8()
s.kM(a)
s.pc()}}
A.kd.prototype={
ih(a,b){return this.d.G(a)?1:0},
kk(a,b){this.d.E(0,a)},
kl(a){return new v.G.URL(a,"file:///").pathname},
de(a,b){var s,r=a.a
if(r==null)r=A.At(this.b,"/")
s=this.d
if(!s.G(r))if((b&4)!==0)s.j(0,r,new A.ch(new Uint8Array(0),0))
else throw A.b(A.fk(14))
return new A.fD(new A.m9(this,r,(b&8)!==0),0)},
kn(a){}}
A.m9.prototype={
mJ(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.e.af(a,0,s,J.bB(B.e.ga5(r.a),0,r.b),b)
return s},
kj(){return this.d>=2?1:0},
ii(){if(this.c)this.a.d.E(0,this.b)},
fc(){return this.a.d.h(0,this.b).b},
km(a){this.d=a},
ko(a){},
fd(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.ch(new Uint8Array(0),0))
s.h(0,r).sl(0,a)}else q.sl(0,a)},
kp(a){this.d=a},
ed(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.ch(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sl(0,s)
p.ar(0,b,s,a)}}
A.y5.prototype={
$1(a){return a.length!==0},
$S:12}
A.oo.prototype={
oF(){var s,r,q,p,o=A.D(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o.j(0,p,B.c.d1(s,p))}this.c=o}}
A.kZ.prototype={
gt(a){return new A.ws(this)},
h(a,b){return new A.bT(this,A.dd(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gl(a){return this.d.length},
$iG:1,
$io:1,
$ip:1}
A.bT.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.aE(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gO(){return this.a.a},
gaP(){return this.b},
$iH:1}
A.ws.prototype={
gn(){var s=this.a
return new A.bT(s,A.dd(s.d[this.b],t.X))},
m(){return++this.b<this.a.d.length}}
A.mp.prototype={}
A.mq.prototype={}
A.ms.prototype={}
A.mt.prototype={}
A.r3.prototype={
ab(){return"OpenMode."+this.b}}
A.dP.prototype={}
A.dX.prototype={}
A.jV.prototype={}
A.cU.prototype={
k(a){return"VfsException("+this.a+")"},
$iJ:1}
A.ib.prototype={}
A.aW.prototype={}
A.jK.prototype={}
A.jJ.prototype={
gij(){return 0},
n1(a,b){return 12},
gil(){return 4096},
ik(a,b){var s=this.mJ(a,b),r=a.length
if(s<r){B.e.jI(a,s,r,0)
throw A.b(B.d6)}},
$iba:1,
$iip:1}
A.eh.prototype={}
A.yf.prototype={
$0(){var s,r,q
for(s=this.a;!s.gA(0);){if(s.b===0)A.v(A.w("No such element"))
r=s.c
q=r.a
q.toString
q.jl(A.m(r).i("aT.E").a(r))
r.d.$0()}},
$S:0}
A.yd.prototype={
$1(a){var s=this.a,r=s.b
s.h8(s.c,new A.eh(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:18}
A.ye.prototype={
$4(a,b,c,d){this.a.$1(c.eD(d))},
$S:203}
A.u3.prototype={}
A.tZ.prototype={
kx(){var s=this.a,r=s.r
if(r!=null)r.mg(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.u5.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kz(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.zw(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.cK(o.b.buffer,0,null)[B.b.ac(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.u4(s,o,n)
o=o.w
if(o!=null)o.m4(r,s,n)}return new A.mn(r,p)}}
A.u4.prototype={
nS(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cn(b),J.ao(b))},
nT(a,b){var s=B.f.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cn(s),s.length)},
ky(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.Be(s.b,q.sqlite3_column_blob(r,a),p)},
nU(a){var s=this.c
return A.dq(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dn.prototype={$iyX:1}
A.cV.prototype={$iyY:1}
A.fm.prototype={
sl(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.cV(s,A.cK(s.b.buffer,0,null)[B.b.ac(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gl(a){return this.b}}
A.jX.prototype={
wa(a){var s,r,q=this.b
q===$&&A.x()
s="[sqlite3] "+A.dq(q,a,null)
r=$.HH
if(r==null)A.CW(s)
else r.$1(s)},
w8(a,b){var s,r=new A.aN(A.p1(A.ah(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.x()
s=A.AJ(q.buffer,b,8)
s.$flags&2&&A.E(s)
s[0]=A.yV(r)
s[1]=A.yT(r)
s[2]=A.yS(r)
s[3]=A.rz(r)
s[4]=A.yU(r)-1
s[5]=A.yW(r)-1900
s[6]=B.b.aj(A.Ff(r),7)},
xI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.x()
s=new A.ib(A.z9(j,b,k))
try{r=a.de(s,d)
if(e!==0){p=r.b
o=A.cK(j.buffer,0,k)
n=B.b.ac(e,2)
o.$flags&2&&A.E(o)
o[n]=p}p=A.cK(j.buffer,0,k)
o=B.b.ac(c,2)
p.$flags&2&&A.E(p)
p[o]=0
m=r.a
return m}catch(l){p=A.C(l)
if(p instanceof A.cU){q=p
p=q.a
j=A.cK(j.buffer,0,k)
o=B.b.ac(c,2)
j.$flags&2&&A.E(j)
j[o]=p}else{j=j.buffer
j=A.cK(j,0,k)
p=B.b.ac(c,2)
j.$flags&2&&A.E(j)
j[p]=1}}return k},
xx(a,b,c){var s=this.b
s===$&&A.x()
return A.bK(new A.ov(a,A.dq(s,b,null),c))},
xo(a,b,c,d){var s=this.b
s===$&&A.x()
return A.bK(new A.os(this,a,A.dq(s,b,null),c,d))},
xE(a,b,c,d){var s=this.b
s===$&&A.x()
return A.bK(new A.ox(this,a,A.dq(s,b,null),c,d))},
xK(a,b,c){return A.bK(new A.oz(this,c,b,a))},
xP(a,b){return A.bK(new A.oB(a,b))},
xv(a,b){var s,r=Date.now(),q=this.b
q===$&&A.x()
s=v.G.BigInt(r)
A.yK(A.AI(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xt(a){return A.bK(new A.ou(a))},
xM(a,b,c,d){return A.bK(new A.oA(this,a,b,c,d))},
xX(a,b,c,d){return A.bK(new A.oF(this,a,b,c,d))},
xT(a,b){return A.bK(new A.oD(a,b))},
xR(a,b){return A.bK(new A.oC(a,b))},
xC(a,b){return A.bK(new A.ow(this,a,b))},
xG(a,b){return A.bK(new A.oy(a,b))},
xV(a,b){return A.bK(new A.oE(a,b))},
xq(a,b){return A.bK(new A.ot(this,a,b))},
xy(a){return a.gij()},
xA(a,b,c){if(t.j2.b(a))return a.n1(b,c)
return 12},
xN(a){if(t.j2.b(a))return a.gil()
return 4096},
uJ(a){a.$0()},
uE(a){return a.$0()},
uH(a,b,c,d,e){var s=this.b
s===$&&A.x()
a.$3(b,A.dq(s,d,null),A.ah(v.G.Number(e)))},
uP(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.x()
r.$2(new A.dn(s,b),new A.fm(s,c,d))},
uT(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.x()
r.$2(new A.dn(s,b),new A.fm(s,c,d))},
uR(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.x()
null.$2(new A.dn(s,b),new A.fm(s,c,d))},
uV(a,b){var s
null.toString
s=this.a
s===$&&A.x()
null.$1(new A.dn(s,b))},
uN(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.x()
r.$1(new A.dn(s,b))},
uL(a,b,c,d,e){var s=this.b
s===$&&A.x()
return null.$2(A.z9(s,c,b),A.z9(s,e,d))},
uC(a,b){return a.$1(b)},
uA(a,b){return a.gy0().$1(b)},
uy(a,b,c){return a.gy_().$2(b,c)}}
A.ov.prototype={
$0(){return this.a.kk(this.b,this.c)},
$S:0}
A.os.prototype={
$0(){var s,r=this,q=r.b.ih(r.c,r.d),p=r.a.b
p===$&&A.x()
p=A.cK(p.buffer,0,null)
s=B.b.ac(r.e,2)
p.$flags&2&&A.E(p)
p[s]=q},
$S:0}
A.ox.prototype={
$0(){var s,r,q=this,p=B.f.v(q.b.kl(q.c)),o=p.length
if(o>q.d)throw A.b(A.fk(14))
s=q.a.b
s===$&&A.x()
s=A.bH(s.buffer,0,null)
r=q.e
B.e.cD(s,r,p)
s.$flags&2&&A.E(s)
s[r+o]=0},
$S:0}
A.oz.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.x()
s=A.bH(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.A4(s,q.b)
else return A.A4(s,null)},
$S:0}
A.oB.prototype={
$0(){this.a.kn(A.cE(this.b,0,0))},
$S:0}
A.ou.prototype={
$0(){return this.a.ii()},
$S:0}
A.oA.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.x()
s.b.ik(A.bH(r.buffer,s.c,s.d),A.ah(v.G.Number(s.e)))},
$S:0}
A.oF.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.x()
s.b.ed(A.bH(r.buffer,s.c,s.d),A.ah(v.G.Number(s.e)))},
$S:0}
A.oD.prototype={
$0(){return this.a.fd(A.ah(v.G.Number(this.b)))},
$S:0}
A.oC.prototype={
$0(){return this.a.ko(this.b)},
$S:0}
A.ow.prototype={
$0(){var s,r=this.b.fc(),q=this.a.b
q===$&&A.x()
q=A.cK(q.buffer,0,null)
s=B.b.ac(this.c,2)
q.$flags&2&&A.E(q)
q[s]=r},
$S:0}
A.oy.prototype={
$0(){return this.a.km(this.b)},
$S:0}
A.oE.prototype={
$0(){return this.a.kp(this.b)},
$S:0}
A.ot.prototype={
$0(){var s,r=this.b.kj(),q=this.a.b
q===$&&A.x()
q=A.cK(q.buffer,0,null)
s=B.b.ac(this.c,2)
q.$flags&2&&A.E(q)
q[s]=r},
$S:0}
A.cM.prototype={}
A.h7.prototype={
a9(a,b,c,d){var s,r=null,q={},p=A.b5(A.yK(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.z2(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.nk(q,this,p,o)
o.d=s
o.f=new A.nl(q,o,s)
return new A.bb(o,A.m(o).i("bb<1>")).a9(a,b,c,d)},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.nk.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a0(q,t.m).bu(new A.nm(p,r.b,s,r),s.gtS(),t.P)},
$S:0}
A.nm.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaI().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:20}
A.nl.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaI().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.el.prototype={
B(){var s=0,r=A.h(t.H),q=this,p
var $async$B=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.B()
p=q.c
if(p!=null)p.B()
q.c=q.b=null
return A.e(null,r)}})
return A.f($async$B,r)},
gn(){var s=this.a
return s==null?A.v(A.w("Await moveNext() first")):s},
m(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.q($.u,t.g5)
s=new A.ag(o,t.ex)
r=p.d
q=t.m
p.b=A.bc(r,"success",new A.vx(p,s),!1,q)
p.c=A.bc(r,"error",new A.vy(p,s),!1,q)
return o}}
A.vx.prototype={
$1(a){var s,r=this.a
r.B()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.az(s!=null)},
$S:2}
A.vy.prototype={
$1(a){var s=this.a
s.B()
s=s.d.error
if(s==null)s=a
this.b.aG(s)},
$S:2}
A.o2.prototype={
$1(a){this.a.az(this.c.a(this.b.result))},
$S:2}
A.o3.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.o7.prototype={
$1(a){this.a.az(this.c.a(this.b.result))},
$S:2}
A.o8.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.o9.prototype={
$1(a){this.a.aG(new A.bk("IndexedDB open blocked"))},
$S:2}
A.pn.prototype={
$1(a){return A.b5(a[1])},
$S:157}
A.u_.prototype={
uj(){var s={}
s.dart=new A.u0(this).$0()
return s},
hT(a){return this.w4(a)},
w4(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a0(v.G.WebAssembly.instantiateStreaming(a,p.uj()),t.m),$async$hT)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)}}
A.u0.prototype={
$0(){var s=this.a.a,r=A.b5(v.G.Object),q=A.b5(r.create.apply(r,[null]))
q.error_log=A.cB(s.gw9())
q.localtime=A.bJ(s.gw7())
q.xOpen=A.zr(s.gxH())
q.xDelete=A.mX(s.gxw())
q.xAccess=A.fQ(s.gxn())
q.xFullPathname=A.fQ(s.gxD())
q.xRandomness=A.mX(s.gxJ())
q.xSleep=A.bJ(s.gxO())
q.xCurrentTimeInt64=A.bJ(s.gxu())
q.xClose=A.cB(s.gxs())
q.xRead=A.fQ(s.gxL())
q.xWrite=A.fQ(s.gxW())
q.xTruncate=A.bJ(s.gxS())
q.xSync=A.bJ(s.gxQ())
q.xFileSize=A.bJ(s.gxB())
q.xLock=A.bJ(s.gxF())
q.xUnlock=A.bJ(s.gxU())
q.xCheckReservedLock=A.bJ(s.gxp())
q.xDeviceCharacteristics=A.cB(s.gij())
q.xFileControl=A.mX(s.gxz())
q.xSectorSize=A.cB(s.gil())
q["dispatch_()v"]=A.cB(s.guI())
q["dispatch_()i"]=A.cB(s.guD())
q.dispatch_update=A.zr(s.guG())
q.dispatch_xFunc=A.fQ(s.guO())
q.dispatch_xStep=A.fQ(s.guS())
q.dispatch_xInverse=A.fQ(s.guQ())
q.dispatch_xValue=A.bJ(s.guU())
q.dispatch_xFinal=A.bJ(s.guM())
q.dispatch_compare=A.zr(s.guK())
q.dispatch_busy=A.bJ(s.guB())
q.changeset_apply_filter=A.bJ(s.guz())
q.changeset_apply_conflict=A.mX(s.gux())
return q},
$S:27}
A.fl.prototype={}
A.nn.prototype={
hW(){var s=0,r=A.h(t.H),q=this,p,o
var $async$hW=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.q($.u,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cB(new A.nq(o))
new A.ag(p,t.h1).az(A.Ei(o,t.m))
s=2
return A.a(p,$async$hW)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$hW,r)},
dI(a,b){return this.tb(a,b)},
tb(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.DN(),b)
o=A.Gg(p)
s=2
return A.a(A.Ja(new A.np(a,o,p),t.mj),$async$dI)
case 2:s=3
return A.a(o.b.a,$async$dI)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dI,r)},
rF(a){return this.dI(new A.no(a),"readwrite")}}
A.nq.prototype={
$1(a){var s=A.b5(this.a.result)
if(J.t(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:20}
A.np.prototype={
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
A.no.prototype={
$1(a){return this.n2(a)},
n2(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aN(a),$async$$1)
case 5:case 3:p.length===o||(0,A.A)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.iL.prototype={
ol(a){var s=A.xn(new A.w7(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.xn(new A.w8(this))},
ja(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
rW(a){return this.ja(a,9007199254740992,0)},
rX(a,b){return this.ja(a,9007199254740992,b)},
hS(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$hS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.D(t.N,t.S)
k=new A.el(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.m(),$async$hS)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.v(A.w("Await moveNext() first"))
n=o.key
n.toString
A.M(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ah(A.ev(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)},
hC(a){return this.vi(a)},
vi(a){var s=0,r=A.h(t.I),q,p=this,o
var $async$hC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cm(p.d.index("fileName").getKey(a),t.i),$async$hC)
case 3:q=o.ah(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hC,r)},
jb(a){return A.cm(this.d.get(a),t.B).aO(new A.w6(a),t.m)},
ef(a,b){return this.nV(a,b)},
nV(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ef=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jb(a),$async$ef)
case 3:h=d
g=h.length
f=new A.ch(new Uint8Array(g),g)
e=new A.el(p.e.openCursor(p.rW(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.m(),$async$ef)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.v(A.w("Await moveNext() first"))
k=n.a(l.key)
j=A.ah(A.ev(k[1]))
if(j>=h.length){s=5
break}i=new A.w9(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.t0(A.b5(l.value)).aO(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ef,r)},
hu(a){return this.ug(a)},
ug(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hu=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
o=A
s=3
return A.a(A.cm(p.d.put({name:a,length:0}),t.i),$async$hu)
case 3:q=o.ah(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
aR(a,b){return this.xg(a,b)},
xg(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
s=2
return A.a(q.jb(a),$async$aR)
case 2:p=d
o=b.b
n=A.m(o).i("U<1>")
m=A.P(new A.U(o,n),n.i("o.E"))
B.c.aT(m)
s=3
return A.a(A.yG(new A.a_(m,new A.wa(new A.wb(q,a),b),A.a6(m).i("a_<1,y<~>>")),t.H),$async$aR)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.el(q.d.openCursor(a),t.R)
s=6
return A.a(l.m(),$async$aR)
case 6:s=7
return A.a(A.cm(l.gn().update({name:p.name,length:b.c}),t.X),$async$aR)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aR,r)},
dd(a,b,c){return this.x4(0,b,c)},
x4(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dd=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
s=2
return A.a(q.jb(b),$async$dd)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cm(q.e.delete(q.rX(b,B.b.K(c,4096)*4096)),t.X),$async$dd)
case 5:case 4:o=new A.el(q.d.openCursor(b),t.R)
s=6
return A.a(o.m(),$async$dd)
case 6:s=7
return A.a(A.cm(o.gn().update({name:p.name,length:c}),t.X),$async$dd)
case 7:return A.e(null,r)}})
return A.f($async$dd,r)},
hy(a){return this.uv(a)},
uv(a){var s=0,r=A.h(t.H),q=this,p
var $async$hy=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.yG(A.l([A.cm(q.e.delete(q.ja(a,9007199254740992,0)),p),A.cm(q.d.delete(a),p)],t.iw),t.H),$async$hy)
case 2:return A.e(null,r)}})
return A.f($async$hy,r)}}
A.w7.prototype={
$0(){this.a.b.ap()},
$S:4}
A.w8.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aG(r)},
$S:4}
A.w6.prototype={
$1(a){if(a==null)throw A.b(A.aI(this.a,"fileId","File not found in database"))
else return a},
$S:160}
A.w9.prototype={
$1(a){var s=this.a
s.cD(s,this.b,J.bB(a,0,this.c))},
$S:161}
A.wb.prototype={
nA(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cm(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.e.ga5(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cm(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cm(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.nA(a,b)},
$S:162}
A.wa.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:163}
A.vJ.prototype={
tz(a,b,c){B.e.cD(this.b.mH(a,new A.vK(this,a)),b,c)},
tW(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.K(q,4096)
o=B.b.aj(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.tz(p*4096,o,J.bB(B.e.ga5(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.vK.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.e.cD(s,0,J.bB(B.e.ga5(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:164}
A.mi.prototype={}
A.d9.prototype={
ez(a){var s=this
if(s.e||s.d.a==null)A.v(A.fk(10))
if(a.jP(s.x)){s.ck(!0)
return a.d.a}else return A.c6(null,t.H)},
ck(a){return this.ts(a)},
ts(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$ck=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gA(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.P(o,o.$ti.i("o.E"))
o.ah(0)
s=5
return A.a(p.d.rF(n).aQ(new A.q_(p,n,a)),$async$ck)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$ck,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.ez(new A.iJ(new A.q0(),new A.ag(new A.q($.u,t.D),t.F)))
p.e=!0
p.ck(!1)
q=o
s=1
break}else{n=p.x
if(!n.gA(0)){q=n.ga3(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
ds(a,b){return this.pg(a,b)},
pg(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$ds=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.G(b)?3:5
break
case 3:n=n.h(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.a(a.hC(b),$async$ds)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$ds,r)},
es(){var s=0,r=A.h(t.H),q=this,p
var $async$es=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.dI(new A.pZ(q,p),"readonly"),$async$es)
case 2:s=3
return A.a(A.EC(p,t.H),$async$es)
case 3:return A.e(null,r)}})
return A.f($async$es,r)},
cp(){return this.ck(!1)},
ih(a,b){return this.w.d.G(a)?1:0},
kk(a,b){var s=this
s.w.d.E(0,a)
if(!s.y.E(0,a))s.ez(new A.iD(s,a,new A.ag(new A.q($.u,t.D),t.F)))},
kl(a){return new v.G.URL(a,"file:///").pathname},
de(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.At(p.b,"/")
s=p.w
r=s.d.G(o)?1:0
q=s.de(new A.ib(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.ez(new A.ft(p,o,new A.ag(new A.q($.u,t.D),t.F)))
return new A.fD(new A.ma(p,q.a,o),0)},
kn(a){}}
A.q_.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.v(A.w("Future already completed"))
p.cb(null)}o.ck(this.c)},
$S:4}
A.q0.prototype={
$1(a){return this.n9(a)},
n9(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.pZ.prototype={
$1(a){return this.n8(a)},
n8(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.hS(),$async$$1)
case 2:m=c
l=q.a
l.z.F(0,m)
p=m.gaK(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.m()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.ef(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.ma.prototype={
ik(a,b){this.b.ik(a,b)},
gij(){return 0},
gil(){return 4096},
kj(){return this.b.d>=2?1:0},
ii(){},
fc(){return this.b.fc()},
km(a){this.b.d=a
return null},
ko(a){},
n1(a,b){return 12},
fd(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.v(A.fk(10))
s.b.fd(a)
if(!r.y.C(0,s.c))r.ez(new A.iJ(new A.w5(s,a),new A.ag(new A.q($.u,t.D),t.F)))},
kp(a){this.b.d=a
return null},
ed(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.v(A.fk(10))
s=m.c
if(l.y.C(0,s)){m.b.ed(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.ch(new Uint8Array(0),0)
q=J.bB(B.e.ga5(r.a),0,r.b)
m.b.ed(a,b)
p=new Uint8Array(a.length)
B.e.cD(p,0,a)
o=A.l([],t.p8)
n=$.u
o.push(new A.mi(b,p))
l.ez(new A.fM(l,s,q,o,new A.ag(new A.q(n,t.D),t.F)))},
$iba:1,
$iip:1}
A.w5.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.ds(a,o.c),$async$$1)
case 3:q=n.dd(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:24}
A.aX.prototype={
jP(a){a.h8(a.c,this,!1)
return!0}}
A.iJ.prototype={
aN(a){return this.w.$1(a)}}
A.iD.prototype={
jP(a){var s,r,q,p
if(!a.gA(0)){s=a.ga3(0)
for(r=this.x;s!=null;)if(s instanceof A.iD)if(s.x===r)return!1
else s=s.geY()
else if(s instanceof A.fM){q=s.geY()
if(s.x===r){p=s.a
p.toString
p.jl(A.m(s).i("aT.E").a(s))}s=q}else if(s instanceof A.ft){if(s.x===r){r=s.a
r.toString
r.jl(A.m(s).i("aT.E").a(s))
return!1}s=s.geY()}else break}a.h8(a.c,this,!1)
return!0},
aN(a){return this.wU(a)},
wU(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.ds(a,o),$async$aN)
case 2:n=c
p.z.E(0,o)
s=3
return A.a(a.hy(n),$async$aN)
case 3:return A.e(null,r)}})
return A.f($async$aN,r)}}
A.ft.prototype={
aN(a){return this.wT(a)},
wT(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hu(p),$async$aN)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aN,r)}}
A.fM.prototype={
jP(a){var s,r=a.b===0?null:a.ga3(0)
for(s=this.x;r!=null;)if(r instanceof A.fM)if(r.x===s){B.c.F(r.z,this.z)
return!1}else r=r.geY()
else if(r instanceof A.ft){if(r.x===s)break
r=r.geY()}else break
a.h8(a.c,this,!1)
return!0},
aN(a){return this.wV(a)},
wV(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.vJ(m,A.D(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.A)(m),++o){n=m[o]
l.tW(n.a,n.b)}k=a
s=3
return A.a(q.w.ds(a,q.x),$async$aN)
case 3:s=2
return A.a(k.aR(c,l),$async$aN)
case 2:return A.e(null,r)}})
return A.f($async$aN,r)}}
A.eQ.prototype={
ab(){return"FileType."+this.b}}
A.f8.prototype={
bF(){var s=this.d
if(s!=null)return s
throw A.b(A.w("VFS closed"))},
ih(a,b){var s=$.ym().h(0,a)
if(s==null)return this.e.d.G(a)?1:0
else return this.bF().bk(s)?1:0},
kk(a,b){var s=$.ym().h(0,a)
if(s==null){this.e.d.E(0,a)
return null}else this.bF().eS(s,!1)},
kl(a){return new v.G.URL(a,"file:///").pathname},
de(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.de(a,b)
s=$.ym().h(0,p)
if(s==null)return q.e.de(a,b)
r=q.bF()
if(!r.bk(s))if((b&4)!==0){r.cZ(s).truncate(0)
r.eS(s,!0)}else throw A.b(B.d5)
return new A.fD(new A.mz(q,s,(b&8)!==0),0)},
kn(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cu(a,b){return this.wj(a,b)},
ct(a){return this.cu(a,!1)},
wj(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.t8(a,b)
s=2
return A.a(m.$1("meta"),$async$cu)
case 2:l=d
k=J.t(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cu)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cu)
case 4:o=d
n=q.d=new A.wo(new Uint8Array(2),l,p,o)
if(k){n.eS(B.aN,p.getSize()>0)
n.eS(B.aO,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cu,r)}}
A.t8.prototype={
nu(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a0(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a0(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.nu(a)},
$S:165}
A.mz.prototype={
mJ(a,b){return A.Ap(this.a.bF().cZ(this.b),a,{at:b})},
kj(){return this.d>=2?1:0},
ii(){var s=this.a,r=this.b
s.bF().cZ(r).flush()
if(this.c)s.bF().eS(r,!1)},
fc(){return this.a.bF().cZ(this.b).getSize()},
km(a){this.d=a},
ko(a){this.a.bF().cZ(this.b).flush()},
fd(a){this.a.bF().cZ(this.b).truncate(a)},
kp(a){this.d=a},
ed(a,b){if(A.Aq(this.a.bF().cZ(this.b),a,{at:b})<a.length)throw A.b(B.d7)}}
A.wo.prototype={
bk(a){var s=this.a
A.Ap(this.b,s,{at:0})
return s[a.a]!==0},
eS(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.E(s)
s[a.a]=r
A.Aq(this.b,s,{at:0})},
cZ(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.tU.prototype={
oh(a,b){var s=this,r=s.c
r.a!==$&&A.D3()
r.a=s
r=t.S
A.vL(new A.tV(s),r)
A.vL(new A.tW(s),r)
s.r=A.vL(new A.tX(s),r)
s.w=A.vL(new A.tY(s),r)},
dL(a,b){var s=J.K(a),r=this.d.dart_sqlite3_malloc(s.gl(a)+b),q=A.bH(this.b.buffer,0,null)
B.e.ar(q,r,r+s.gl(a),a)
B.e.jI(q,r+s.gl(a),r+s.gl(a)+b,0)
return r},
cn(a){return this.dL(a,0)},
md(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mb(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mc(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.tV.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.tW.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.tX.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.tY.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.hf.prototype={}
A.rC.prototype={
oe(a){var s,r=this,q=r.a
q.start()
r.c=A.bc(q,"message",new A.rG(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.jt()
q.toString
A.iq(q,s,null,null,!1).aO(new A.rH(r),t.P)}},
iY(a){return this.q7(a)},
q7(a){var s=0,r=A.h(t.H),q=this
var $async$iY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.IA(a,new A.rD(q),q.gvG(),new A.rE(q),new A.rF(q))
return A.e(null,r)}})
return A.f($async$iY,r)},
fj(a,b,c){return this.nN(a,b,c,c)},
nN(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fj=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.E8(null))
o=p.e++
n=new A.q($.u,t.a7)
p.f.j(0,o,new A.ag(n,t.h1))
a.i=o
p.a.postMessage(a,A.fW(a))
s=3
return A.a(n,$async$fj)
case 3:m=f
if(J.t(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Fp(m))
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
rb(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.B()
s=q.d
if(s!=null)s.B()
for(s=q.f,r=new A.aR(s,s.r,s.e,A.m(s).i("aR<2>"));r.m();)r.d.aG(new A.hb(a))
s.ah(0)
p.ap()},
lj(){return this.rb(null)}}
A.rG.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lj()
return}this.a.iY(A.b5(a.data))},
$S:2}
A.rH.prototype={
$1(a){this.a.lj()
a.a.ap()},
$S:166}
A.rF.prototype={
$1(a){var s=this.a.f.E(0,a.i)
if(s!=null)s.az(a)},
$S:20}
A.rE.prototype={
$1(a){return this.nn(a)},
nn(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
return A.a(t.nW.b(j)?j:A.bd(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.C(a0)
k=A.a7(a0)
if(!(l instanceof A.d2)){b.console.error("Error in worker: "+J.ap(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.cP){h=A.Eu(b)
g=0}else{g=b instanceof A.d2?1:null
h=null}f={e:J.ap(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.E(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.fW(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:167}
A.rD.prototype={
$1(a){var s=this.a.r.E(0,a.i)
if(s!=null)s.abort()},
$S:20}
A.hb.prototype={
k(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iJ:1}
A.oI.prototype={
c4(a){return this.w5(a)},
w5(a){var s=0,r=A.h(t.n),q
var $async$c4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.u2(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c4,r)}}
A.jU.prototype={}
A.op.prototype={}
A.ef.prototype={}
A.k8.prototype={
hU(){var s=0,r=A.h(t.H),q=this
var $async$hU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.ct(q.b),$async$hU)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hU,r)},
k8(){var s=0,r=A.h(t.H),q=this
var $async$k8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$k8,r)}}
A.pA.prototype={
wX(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
pk(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.u9.prototype={
$1(a){var s=new A.q($.u,t.D),r=new A.cF(new A.ag(s,t.F))
this.a.a=r
this.b.az(r)
return A.ED(s)},
$S:168}
A.ua.prototype={
$2(a,b){var s,r,q
A.b5(a)
s=J.t(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bt(new A.d2("Operation was cancelled"),b)
else q.bt(a,b)}return null},
$S:169}
A.cF.prototype={}
A.jY.prototype={
gu7(){if(this.c.a)return!1
return!this.d||this.f!=null},
dm(a){return this.op(a)},
op(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dm=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.jt()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.iq(n,o.a,null,o.gqd(),!0),$async$dm)
case 6:m=c
s=7
return A.a(A.iq(n,o.b,a,null,!1),$async$dm)
case 7:l=c
j=o.e
j=j==null?null:j.hU()
s=8
return A.a(j instanceof A.q?j:A.bd(j,t.H),$async$dm)
case 8:o.f=new A.az(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.ap()
j=l
if(j!=null)j.a.ap()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dm,r)},
qe(){this.mK()},
jV(a,b,c){return this.c.ib(new A.oW(this,a,b,c),b,c)},
mK(){return this.c.ki(new A.oX(this),t.H)}}
A.oW.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dm(r.c).aO(new A.oV(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.oV.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.oX.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.k8()
s.a.ap()
r.a.ap()
p.f=null}},
$S:4}
A.hN.prototype={
ib(a,b,c){return this.xf(a,b,c,c)},
ki(a,b){return this.ib(a,null,b)},
xf(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ib=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.t(g?null:b.aborted,!0))throw A.b(B.ae)
h.a=!1
o=new A.qW(h,p)
if(!p.a){h.a=p.a=!0
q=A.hu(a,c).aQ(o)
s=1
break}else{n={}
m=new A.q($.u,c.i("q<0>"))
l=new A.ag(m,c.i("ag<0>"))
n.a=null
h=new A.qV(h,n,l,a,c)
if(!g)n.a=A.bc(b,"abort",new A.qU(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.aG(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.c.af(j,0,i,h,n)
B.c.af(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aQ(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$ib,r)}}
A.qW.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gA(0)){s=r.b
if(s===r.c)A.v(A.at());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.qV.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.B()
r.c.az(A.hu(r.d,r.e))},
$S:0}
A.qU.prototype={
$1(a){var s,r=this
r.a.a.B()
s=r.c
if((s.a.a&30)===0){r.b.b.E(0,r.d)
s.aG(B.ae)}},
$S:2}
A.dQ.prototype={
gmT(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
B.c.F(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.pd.prototype={
$1(a){if(a!=null)return A.M(a)
return null},
$S:170}
A.kx.prototype={
ab(){return"MessageType."+this.b}}
A.t3.prototype={
uF(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hI(a,b)
case"connect":return p.jJ(a,b)
case"custom":return p.dU(a,b)
case"fileSystemExists":return p.eL(a,b)
case"fileSystemFlush":return p.eM(a,b)
case"fileSystemAccess":return p.eK(a,b)
case"runQuery":return p.hM(a,b)
case"exclusiveLock":return p.hH(a,b)
case"releaseLock":s=p.br(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.v(A.w("Lock to be released is not active."))
q.b.ap()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hF(a,b)
case"openAdditionalConnection":return p.hJ(a,b)
case"updateRequest":return p.hN(a,b)
case"rollbackRequest":return p.hL(a,b)
case"commitRequest":return p.hG(a,b)
case"dedicatedCompatibilityCheck":return p.du(a,b)
case"sharedCompatibilityCheck":return p.du(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.du(a,b)
default:r=A.ew(new A.bC(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.q($.u,t.hl)
q.ca(r)
return q}}}
A.d5.prototype={
ab(){return"FileSystemImplementation."+this.b}}
A.cg.prototype={
ab(){return"TypeCode."+this.b},
um(a){var s=null
switch(this.a){case 0:s=A.v(A.O("Unsupported type code",null))
break
case 1:a=A.ah(A.ev(a))
s=a
break
case 2:s=A.zf(t.bJ.a(a).toString(),null)
break
case 3:A.ev(a)
s=a
break
case 4:A.M(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.fO(a)
s=a
break
case 6:break}return s}}
A.dR.prototype={
m5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.ao:B.aR[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ah(A.ev(h))))
if(k!==0)a.bv(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bv(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.ev(h))
if(k!==0)a.bv(k,e)
break
case 4:g=B.f.v(A.M(h))
k=s.dart_sqlite3_bind_text(d,i,c.cn(g),g.length)
if(k!==0)a.bv(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cn(h),h.length)
if(k!==0)a.bv(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bv(k,e)
break
case 7:f=A.fO(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bv(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gl(a){return this.a.length},
sl(a,b){this.lS()},
h(a,b){var s=this.c[b],r=s>=8?B.ao:B.aR[s]
return r.um(this.a[b])},
j(a,b,c){this.lS()},
lS(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.xA.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:20}
A.o0.prototype={
$1(a){this.a.az(this.c.a(this.b.result))},
$S:2}
A.o1.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.o4.prototype={
$1(a){this.a.az(this.c.a(this.b.result))},
$S:2}
A.o5.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.o6.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.ry.prototype={
uX(){var s,r,q,p
for(s=this.b,r=new A.aR(s,s.r,s.e,A.m(s).i("aR<2>"));r.m();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.ah(0)}}
A.hq.prototype={
ab(){return"FileType."+this.b}}
A.dj.prototype={
ab(){return"StorageMode."+this.b}}
A.f5.prototype={
k(a){return"Remote error: "+this.a},
$iJ:1}
A.d2.prototype={}
A.xm.prototype={
$1(a){return A.b5(a.data)},
$S:172}
A.iZ.prototype={
B(){var s=this.a
if(s!=null)s.B()
this.a=null}}
A.fs.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.B()
q.d.B()
q.e.B()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)p[n].abort()
B.c.ah(p)
p=q.f
if(p!=null)p.b.ap()
s=2
return A.a(q.a.eE(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
lK(a){var s=new v.G.AbortController()
a.onabort=A.xn(new A.vq(s))
this.w.push(s)
return s},
kf(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gu7()){r=p.lK(b)
o=s.jV(c,r.signal,d).aQ(new A.vu(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.w("Requested operation on inactive lock state."))}if(o==null)o=A.hu(c,d)
q=p.a.z
return q instanceof A.d9?o.aQ(q.gvl()):o},
wg(a){var s=this,r=s.lK(a),q=new A.q($.u,t.hy),p=new A.aC(q,t.ho),o=t.H
A.yF(s.a.f.jV(new A.vr(s,p),r.signal,o),new A.vs(p),o,t.K)
return q.aQ(new A.vt(s,r))}}
A.vq.prototype={
$0(){return this.a.abort()},
$S:0}
A.vu.prototype={
$0(){B.c.E(this.a.w,this.b)},
$S:4}
A.vr.prototype={
$0(){var s=this.a,r=s.r++,q=new A.q($.u,t.D)
s.f=new A.az(r,new A.aC(q,t.h))
this.b.az(r)
return q},
$S:3}
A.vs.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bt(a,b)},
$S:10}
A.vt.prototype={
$0(){B.c.E(this.a.w,this.b)},
$S:4}
A.iB.prototype={
oj(a,b,c){this.b.a.aQ(new A.va(this))},
du(a,b){return this.pt(a,b)},
pt(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$du=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.m8(a),$async$du)
case 3:q={r:d.gmT(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$du,r)},
jJ(a,b){return this.vt(a,b)},
vt(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$jJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glf()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.fW(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jJ,r)},
dU(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$dU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.l0(l)
n=a.r
s=7
return A.a(o.a.gc7(),$async$dU)
case 7:s=6
return A.a(d.cq(p,new A.op(n)),$async$dU)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cq(p,new A.jU(a)),$async$dU)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
hI(a,b){return this.vI(a,b)},
vI(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.ki(new A.vf(p,a),t.m),$async$hI)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
hM(a,b){return this.vM(a,b)},
vM(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.a
s=3
return A.a(n.gc7(),$async$hM)
case 3:m=d
q=o.kf(a.z,b,new A.vi(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)},
hH(a,b){return this.vy(a,b)},
vy(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.br(a).wg(b),$async$hH)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
hG(a,b){return this.vs(a,b)},
vs(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dk(n,new A.vc(p,o),a),$async$hG)
case 6:q=d
s=1
break
s=4
break
case 5:n.B()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
hL(a,b){return this.vL(a,b)},
vL(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dk(n,new A.vh(p,o),a),$async$hL)
case 6:q=d
s=1
break
s=4
break
case 5:n.B()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$hL,r)},
hN(a,b){return this.vO(a,b)},
vO(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dk(n,new A.vk(p,o),a),$async$hN)
case 6:q=d
s=1
break
s=4
break
case 5:n.B()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
hJ(a,b){return this.vJ(a,b)},
vJ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.br(a).a;++m.w
s=3
return A.a(A.xD(),$async$hJ)
case 3:o=d
n=o.a
p.w.kG(o.b).x.push(A.Bp(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
hF(a,b){return this.vr(a,b)},
vr(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
B.c.E(p.x,o)
s=3
return A.a(o.p(),$async$hF)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
eM(a,b){return this.vB(a,b)},
vB(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$eM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.br(a).a.gcA(),$async$eM)
case 3:o=d
s=o instanceof A.d9?4:5
break
case 4:s=6
return A.a(o.ck(!1),$async$eM)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eM,r)},
eK(a,b){return this.vz(a,b)},
vz(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$eK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=B.aS[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcA(),$async$eK)
case 4:s=3
return A.a(l.kf(null,k,new j.vd(d,n,m,a),t.m),$async$eK)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eK,r)},
eL(a,b){return this.vA(a,b)},
vA(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcA(),$async$eL)
case 4:s=3
return A.a(n.kf(null,m,new l.ve(d,a),t.y),$async$eL)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
dk(a,b,c){return this.nY(a,b,c)},
nY(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dk=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dk)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
vH(a){},
cV(a){var s=0,r=A.h(t.X),q,p=this
var $async$cV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fj({r:a,z:null,i:0,d:null,t:"custom"},B.cp,t.m),$async$cV)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cV,r)},
l0(a){return B.c.mp(this.x,new A.v9(a))},
br(a){var s=a.d
if(s!=null)return this.l0(s)
else throw A.b(A.O("Request requires database id",null))}}
A.va.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.A)(p),++n
s=2
break
case 4:B.c.ah(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.vf.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.c4(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vj(h.d,A.Ex(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcA():m.gc7(),$async$$0)
case 8:l=A.Bp(m,null)
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
case 9:B.c.E(j.x,l)
s=11
return A.a(m.eE(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:173}
A.vi.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.w("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.dR(s,r,A.bH(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.nI(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ah(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.va(l,k.s,q)
s=o.d
return A.CS(s.sqlite3_get_autocommit(p)!==0,m,A.ah(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:27}
A.vc.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gc7(),$async$$0)
case 3:q=b.a.oL().gcE().aW(new A.vb(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:63}
A.vb.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.fW(s))},
$S:64}
A.vh.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gc7(),$async$$0)
case 3:q=b.a.ta().gcE().aW(new A.vg(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:63}
A.vg.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.fW(s))},
$S:64}
A.vk.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gc7(),$async$$0)
case 3:q=b.a.tA().gcE().aW(new A.vj(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:176}
A.vj.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.fW(s))},
$S:177}
A.vd.prototype={
$0(){var s,r,q,p=this,o=p.a.de(new A.ib(A.C2(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fd(s.byteLength)
o.ed(A.bH(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fc()
r=new Uint8Array(q)
o.ik(r,0)
q={r:t.a.a(J.DT(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.ii()}},
$S:27}
A.ve.prototype={
$0(){return this.a.ih(A.C2(B.aS[this.b.f]),0)===1},
$S:42}
A.v9.prototype={
$1(a){return a.b===this.a},
$S:178}
A.jZ.prototype={
gcA(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.hu(new A.p_(p),t.H):o,$async$gcA)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcA,r)},
gc7(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gc7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.hu(new A.oZ(p),t.u):o,$async$gc7)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gc7,r)},
eE(){var s=0,r=A.h(t.H),q=this
var $async$eE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$eE)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eE,r)},
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
if(j!=null)j.uX()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.zO()
A.yC(m)
k=l.a.get(m)
if(k==null)A.v(A.w("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.q?j:A.bd(j,t.H),$async$p)
case 6:q.f.mK()
return A.e(null,r)}})
return A.f($async$p,r)},
ls(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.E(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.az(s,!0)
p=a.i_(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.E(0,new A.U(n,A.m(n).i("U<1>")).gD(0)).p()
n.j(0,p.d,p)
return new A.az(p,!0)}return new A.az(p,!1)},
va(a,b,c){var s,r,q
if(c.gl(0)===0)return a.aB(b,B.y)
else{s=null
r=null
q=this.ls(a,b)
s=q.a
r=q.b
try{s.jH(new A.jV(c.gu5()))}finally{if(r)s.d8()
else s.p()}}},
nI(a,b,c){var s,r=null,q=null,p=this.ls(a,b)
r=p.a
q=p.b
try{s=A.Fq(r,c)
return s}finally{if(q)r.d8()
else r.p()}}}
A.p_.prototype={
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
return A.a(A.t7("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gdP()
s=3
break
case 5:case 6:s=10
return A.a(A.k9("drift_db/"+l.c,k===B.ai,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gdP()
s=3
break
case 7:s=11
return A.a(A.kf(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gdP()
s=3
break
case 8:l.z=A.yI("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.oZ.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcA(),$async$$0)
case 4:n=b
o.mu()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.dL(B.f.v(n.a),1),n,0)
if(m===0)A.v(A.w("could not register vfs"))
$.zO().j(0,n,m)
s=5
return A.a(l.f.jV(new A.oY(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:65}
A.oY.prototype={
$0(){var s=this.a
return s.a.b.hX(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:65}
A.up.prototype={
glf(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.nR()
r.Q!==$&&A.yj()
r.Q=s
q=s}return q},
dV(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$dV=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bZ(A.bL(A.Hb(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.m(),$async$dV)
case 7:if(!b){s=6
break}m=h.gn()
s=J.t(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.hf(i.port,i.lockName,null)
n.kG(l)
s=9
break
case 10:s=A.IV(m.t)?11:12
break
case 11:s=13
return A.a(n.m8(m),$async$dV)
case 13:k=b
j.postMessage(k.gmT())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.B(),$async$dV)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dV,r)},
kG(a){var s=this,r=A.G7(a,s.d++,s)
s.c.push(r)
r.b.a.aQ(new A.uq(s,r))
return r},
m8(a){return this.x.ki(new A.ur(this,a),t.p6)},
c4(a){return this.w6(a)},
w6(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.b5(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.w("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bd(n,t.he),$async$c4)
case 5:s=3
break
case 4:o=A.yF(q.b.c4(m),new A.us(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$c4)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$c4,r)},
vj(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aR(s,s.r,s.e,A.m(s).i("aR<2>"));r.m();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ai||b===B.aM
o=A.yO(t.cj)
n=c===0?null:new A.ry(c,A.hH(null,null,t.N,t.fw))
n=new A.jZ(this,r,a,b,d,new A.jY(q+"-outer",q,new A.hN(o),p),n)
s.j(0,r,n)
return n}}
A.uq.prototype={
$0(){var s=this.a,r=s.c
B.c.E(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.ur.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.t(d.t,"dedicatedCompatibilityCheck")||J.t(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.dB(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.t(d.t,"dedicatedCompatibilityCheck")||J.t(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.n1(),$async$$0)
case 9:case 8:j=a1
i=A.aS(t.cU)
s=J.t(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glf()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.fW(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.fw(n,"message",!1,t.d4).gD(0),$async$$0)
case 15:e=b.Ef(a.b5(a1.data))
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
return A.a(A.fZ(),$async$$0)
case 18:d=b.I(a1)
case 19:if(!d.m()){s=20
break}i.u(0,new A.az(B.b5,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.xz(c),$async$$0)
case 23:if(a1)i.u(0,new A.az(B.b6,c))
case 22:d=A.P(i,i.$ti.c)
q=new A.dQ(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:180}
A.us.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:181}
A.ja.prototype={}
A.m1.prototype={
gmt(){return new A.fw(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.mx.prototype={
gmt(){return new A.cY(new A.wD(this),t.k8)},
p(){}}
A.wD.prototype={
$1(a){var s=A.l([],t.E),r=A.l([],t.dw)
r.push(A.bc(this.a.a,"connect",new A.wA(new A.wE(s,r,a)),!1,t.m))
a.r=new A.wB(r)},
$S:182}
A.wE.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bc(a,"message",new A.wC(this.c),!1,t.m))},
$S:2}
A.wC.prototype={
$1(a){this.a.tV(a)},
$S:2}
A.wA.prototype={
$1(a){var s,r=a.ports
r=J.I(t.ip.b(r)?r:new A.bD(r,A.a6(r).i("bD<1,L>")))
s=this.a
while(r.m())s.$1(r.gn())},
$S:2}
A.wB.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].B()},
$S:4}
A.m2.prototype={
nR(){var s=v.G
if(!("Worker" in s))return null
return new A.vE(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.vE.prototype={}
A.lh.prototype={
gfl(){return A.M(this.c)}}
A.tp.prototype={
gjU(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
io(a){var s,r=this,q=r.d=J.DW(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gM()
return s},
ml(a,b){var s
if(this.io(a))return
if(b==null)if(a instanceof A.eS)b="/"+a.a+"/"
else{s=J.ap(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.l7(b)},
eI(a){return this.ml(a,null)},
ve(){if(this.c===this.b.length)return
this.l7("no more input")},
v9(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.v(A.aO("position must be greater than or equal to 0."))
else if(c>n.length)A.v(A.aO("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.v(A.aO("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.t9(s,r,new Uint32Array(q))
p.of(new A.c4(n),s)
o=c+b
if(o>q)A.v(A.aO("End "+o+u.D+p.gl(0)+"."))
else if(c<0)A.v(A.aO("Start may not be negative, was "+c+"."))
throw A.b(new A.lh(n,a,new A.fx(p,c,o)))},
l7(a){this.v9("expected "+a+".",0,this.c)}}
A.fi.prototype={
gl(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Au(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Au(b,this))
s=this.a
s.$flags&2&&A.E(s)
s[b]=c},
sl(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.E(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.kY(b)
B.e.ar(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.ty(q)
q=r.a
s=r.b++
q.$flags&2&&A.E(q)
q[s]=b},
kY(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
ty(a){var s=this.kY(null)
B.e.ar(s,0,a,this.a)
this.a=s},
af(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ak(c,0,s,null,null))
s=this.a
if(d instanceof A.ch)B.e.af(s,b,c,d.a,e)
else B.e.af(s,b,c,d,e)},
ar(a,b,c,d){return this.af(0,b,c,d,0)}}
A.mb.prototype={}
A.ch.prototype={}
A.yA.prototype={}
A.fw.prototype={
a9(a,b,c,d){return A.bc(this.a,this.b,a,!1,this.$ti.c)},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.iH.prototype={
B(){var s=this,r=A.c6(null,t.H)
if(s.b==null)return r
s.jm()
s.d=s.b=null
return r},
hV(a){var s,r=this
if(r.b==null)throw A.b(A.w("Subscription has been canceled."))
r.jm()
s=A.Ct(new A.vI(a),t.m)
s=s==null?null:A.cB(s)
r.d=s
r.jk()},
bm(){if(this.b==null)return;++this.a
this.jm()},
b9(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jk()},
jk(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jm(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibl:1}
A.vH.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.vI.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.dc.prototype
s.o4=s.k
s=A.bt.prototype
s.o0=s.mv
s.o1=s.mw
s.o3=s.my
s.o2=s.mx
s=A.aP.prototype
s.ip=s.aw
s.kD=s.aE
s.kE=s.aL
s=A.cW.prototype
s.o7=s.kW
s.o8=s.la
s.o9=s.lH
s=A.F.prototype
s.kC=s.af
s=A.ar.prototype
s.kB=s.u4
s=A.j_.prototype
s.oa=s.p
s=A.hi.prototype
s.o_=s.jp
s=A.jG.prototype
s.kA=s.hD
s=A.c3.prototype
s.nZ=s.hz
s=A.fa.prototype
s.o6=s.X
s.o5=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Hl","EL",66)
r(A,"Hy","Fd",9)
q(A,"I3","FT",18)
q(A,"I4","FU",18)
q(A,"I5","FV",18)
q(A,"I6","HA",23)
r(A,"Cw","HW",0)
q(A,"I7","HB",22)
s(A,"I8","HD",11)
r(A,"xw","HC",0)
p(A,"Id",5,null,["$5"],["HQ"],184,0)
p(A,"Ii",4,null,["$1$4","$4"],["xr",function(a,b,c,d){return A.xr(a,b,c,d,t.z)}],185,0)
p(A,"Ik",5,null,["$2$5","$5"],["xs",function(a,b,c,d,e){var i=t.z
return A.xs(a,b,c,d,e,i,i)}],186,0)
p(A,"Ij",6,null,["$3$6"],["zu"],187,0)
p(A,"Ig",4,null,["$1$4","$4"],["Ci",function(a,b,c,d){return A.Ci(a,b,c,d,t.z)}],188,0)
p(A,"Ih",4,null,["$2$4","$4"],["Cj",function(a,b,c,d){var i=t.z
return A.Cj(a,b,c,d,i,i)}],189,0)
p(A,"If",4,null,["$3$4","$4"],["Ch",function(a,b,c,d){var i=t.z
return A.Ch(a,b,c,d,i,i,i)}],190,0)
p(A,"Ib",5,null,["$5"],["HP"],191,0)
p(A,"Il",4,null,["$4"],["xt"],192,0)
p(A,"Ia",5,null,["$5"],["HO"],193,0)
p(A,"I9",5,null,["$5"],["HN"],194,0)
p(A,"Ie",4,null,["$4"],["HR"],195,0)
p(A,"Ic",5,null,["$5"],["Cg"],196,0)
var j
o(j=A.ei.prototype,"gem","bB",0)
o(j,"gen","bC",0)
n(A.ej.prototype,"guf",0,1,null,["$2","$1"],["bt","aG"],56,0,0)
m(A.q.prototype,"giA","oM",11)
n(j=A.dx.prototype,"gtS",0,1,null,["$2","$1"],["bG","tT"],56,0,0)
l(j,"gou","aw",13)
m(j,"gos","aE",11)
o(j,"goI","aL",0)
o(j=A.ds.prototype,"gem","bB",0)
o(j,"gen","bC",0)
o(j=A.aP.prototype,"gem","bB",0)
o(j,"gen","bC",0)
o(A.fv.prototype,"glp","ru",0)
l(j=A.bZ.prototype,"grm","rn",13)
m(j,"grq","rr",11)
o(j,"gro","rp",0)
o(j=A.fy.prototype,"gem","bB",0)
o(j,"gen","bC",0)
l(j,"giO","iP",13)
m(j,"giS","iT",155)
o(j,"giQ","iR",0)
o(j=A.fE.prototype,"gem","bB",0)
o(j,"gen","bC",0)
l(j,"giO","iP",13)
m(j,"giS","iT",11)
o(j,"giQ","iR",0)
s(A,"zy","H5",35)
q(A,"zz","H6",39)
s(A,"Iq","EP",66)
q(A,"Iv","H9",40)
k(j=A.lT.prototype,"gtR","u",13)
o(j,"gdP","p",0)
q(A,"CC","IN",39)
s(A,"CB","IM",35)
q(A,"Iw","FM",7)
p(A,"J1",2,null,["$1$2","$2"],["CQ",function(a,b){return A.CQ(a,b,t.o)}],197,0)
m(j=A.k0.prototype,"gv8","Y",35)
l(j,"gvP","a8",39)
l(j,"gvY","vZ",23)
q(A,"Io","E7",7)
q(A,"zB","Eq",7)
r(A,"IY","H7",9)
o(A.lW.prototype,"gvn","mq",0)
r(A,"KA","H8",9)
l(A.kN.prototype,"gwA","wB",8)
o(A.hV.prototype,"guW","hz",0)
o(j=A.c3.prototype,"gN","av",0)
o(j,"gvT","hP","y<c3.T>()")
l(j,"grk","rl",41)
o(j,"glU","eA",3)
q(A,"IE","An",198)
o(j=A.kQ.prototype,"grs","rt",0)
l(j,"grv","rw",76)
q(A,"Jb","Fa",43)
q(A,"Is","yw",200)
l(j=A.li.prototype,"gvE","vF",41)
l(j,"gvC","vD",86)
o(j,"grj","j7",0)
q(A,"Ji","FD",43)
q(A,"CA","bM",14)
q(A,"Cz","n4",14)
r(A,"IX","HZ",201)
q(A,"Jm","FQ",148)
m(j=A.lC.prototype,"gpu","iM",1)
m(j,"gpp","cM",1)
m(j=A.lA.prototype,"gpC","fE",1)
m(j,"gpA","fD",1)
m(j,"gpE","fF",1)
m(j,"gpw","fB",1)
m(j,"gpy","fC",1)
m(j,"gpG","iN",1)
m(j=A.lB.prototype,"gq3","fN",1)
m(j,"gq9","ej",1)
m(j,"gqb","fO",1)
m(j=A.lE.prototype,"gpX","iV",1)
m(j,"gpZ","iW",1)
m(j,"gq0","fL",1)
m(j,"gpV","iU",1)
m(j,"gpN","fI",1)
m(j,"gpP","dv",1)
m(j,"gpR","fJ",1)
m(j,"gpL","fH",1)
m(j,"gpJ","fG",1)
m(j,"gpT","fK",1)
m(j=A.lF.prototype,"gq5","iX",1)
m(j,"gpn","iL",1)
m(j,"gpl","fz",1)
m(j,"gqV","h4",1)
m(j,"gqT","h3",1)
m(j,"gqf","fP",1)
m(j,"gpr","fA",1)
m(j,"gql","fQ",1)
m(j=A.lG.prototype,"gqv","dz",1)
m(j,"gqz","fV",1)
m(j,"gqn","fR",1)
m(j,"gqp","fS",1)
m(j,"gqr","fT",1)
m(j,"gqt","fU",1)
m(j,"gqB","fW",1)
m(j,"gqx","iZ",1)
m(j=A.lH.prototype,"gqD","fX",1)
m(j,"gqH","fZ",1)
m(j,"gqJ","h_",1)
m(j,"gqR","h2",1)
m(j,"gqP","ek",1)
m(j,"gqL","h0",1)
m(j,"gqF","fY",1)
m(j,"gqN","h1",1)
m(j=A.lI.prototype,"gr0","h7",1)
m(j,"gqZ","h6",1)
m(j,"gqX","h5",1)
l(j=A.jX.prototype,"gw9","wa",8)
m(j,"gw7","w8",136)
n(j,"gxH",0,5,null,["$5"],["xI"],137,0,0)
n(j,"gxw",0,3,null,["$3"],["xx"],138,0,0)
n(j,"gxn",0,4,null,["$4"],["xo"],58,0,0)
n(j,"gxD",0,4,null,["$4"],["xE"],58,0,0)
n(j,"gxJ",0,3,null,["$3"],["xK"],140,0,0)
m(j,"gxO","xP",59)
m(j,"gxu","xv",59)
l(j,"gxs","xt",36)
n(j,"gxL",0,4,null,["$4"],["xM"],60,0,0)
n(j,"gxW",0,4,null,["$4"],["xX"],60,0,0)
m(j,"gxS","xT",144)
m(j,"gxQ","xR",19)
m(j,"gxB","xC",19)
m(j,"gxF","xG",19)
m(j,"gxU","xV",19)
m(j,"gxp","xq",19)
l(j,"gij","xy",36)
n(j,"gxz",0,3,null,["$3"],["xA"],146,0,0)
l(j,"gil","xN",36)
l(j,"guI","uJ",18)
l(j,"guD","uE",147)
n(j,"guG",0,5,null,["$5"],["uH"],202,0,0)
n(j,"guO",0,4,null,["$4"],["uP"],38,0,0)
n(j,"guS",0,4,null,["$4"],["uT"],38,0,0)
n(j,"guQ",0,4,null,["$4"],["uR"],38,0,0)
m(j,"guU","uV",61)
m(j,"guM","uN",61)
n(j,"guK",0,5,null,["$5"],["uL"],151,0,0)
m(j,"guB","uC",152)
m(j,"guz","uA",153)
n(j,"gux",0,3,null,["$3"],["uy"],154,0,0)
o(j=A.d9.prototype,"gdP","p",3)
o(j,"gvl","cp",3)
o(A.f8.prototype,"gdP","p",0)
o(A.jY.prototype,"gqd","qe",0)
l(A.dR.prototype,"gu5","m5",171)
l(A.iB.prototype,"gvG","vH",2)
q(A,"Cy","CI",135)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.yM,J.kh,A.i5,J.eH,A.vw,A.v6,A.o,A.jO,A.dN,A.Q,A.a8,A.F,A.t5,A.ae,A.kv,A.dp,A.k6,A.lk,A.l5,A.k4,A.lz,A.hr,A.lq,A.ik,A.er,A.hM,A.eK,A.fz,A.cb,A.tH,A.kJ,A.hn,A.iX,A.qa,A.bS,A.aR,A.kr,A.eS,A.fC,A.lM,A.fd,A.wL,A.lU,A.mI,A.ca,A.m7,A.mF,A.j0,A.it,A.lO,A.iM,A.mD,A.ad,A.a4,A.aP,A.iz,A.ll,A.iK,A.ej,A.bX,A.q,A.lN,A.dx,A.mE,A.iv,A.lK,A.m3,A.vF,A.dw,A.fv,A.bZ,A.iG,A.xa,A.xc,A.xb,A.x8,A.x9,A.x7,A.x4,A.mT,A.x3,A.x2,A.x6,A.x5,A.mS,A.mU,A.mR,A.fN,A.is,A.m8,A.wm,A.dv,A.me,A.aT,A.mh,A.mH,A.mf,A.lg,A.jQ,A.ar,A.lQ,A.nz,A.lP,A.jP,A.my,A.ek,A.wj,A.wM,A.mJ,A.cZ,A.ay,A.m6,A.aN,A.as,A.vG,A.kK,A.id,A.m5,A.b8,A.kg,A.S,A.R,A.mC,A.ie,A.l_,A.ab,A.j7,A.tR,A.bY,A.k7,A.kI,A.wc,A.wd,A.k5,A.Z,A.k1,A.hB,A.e1,A.fJ,A.fB,A.hL,A.k0,A.kH,A.lr,A.c5,A.eM,A.pB,A.nM,A.on,A.hK,A.i8,A.qx,A.i7,A.t4,A.or,A.oH,A.vv,A.dM,A.jF,A.jG,A.nt,A.kB,A.eW,A.lc,A.aV,A.a1,A.nJ,A.nK,A.nL,A.pe,A.k2,A.nZ,A.hk,A.eV,A.ld,A.rw,A.mg,A.lW,A.fr,A.kN,A.rZ,A.aQ,A.d8,A.eR,A.dV,A.bU,A.oa,A.bQ,A.lV,A.bu,A.wy,A.c3,A.uI,A.nv,A.eI,A.jL,A.le,A.hp,A.ph,A.b7,A.qh,A.mj,A.lm,A.nr,A.kQ,A.re,A.hY,A.fF,A.rm,A.wF,A.dW,A.d6,A.kc,A.co,A.d7,A.dk,A.rc,A.ng,A.br,A.oc,A.li,A.cI,A.e6,A.qE,A.de,A.kw,A.wt,A.wr,A.r_,A.nu,A.hJ,A.i3,A.r4,A.kU,A.rI,A.aU,A.rR,A.b9,A.ff,A.fe,A.tr,A.bm,A.fc,A.cs,A.f4,A.i2,A.cl,A.tt,A.i1,A.ij,A.tE,A.ct,A.cr,A.e7,A.tJ,A.oI,A.ef,A.lX,A.cz,A.tN,A.fn,A.ly,A.u8,A.hj,A.i0,A.kX,A.W,A.fo,A.lC,A.lA,A.lB,A.lE,A.lF,A.x1,A.lG,A.wP,A.lH,A.fp,A.lI,A.oj,A.tq,A.kL,A.kM,A.t9,A.l8,A.fa,A.pC,A.be,A.ci,A.cc,A.lb,A.cd,A.cP,A.jw,A.oJ,A.dy,A.tb,A.dP,A.aW,A.jJ,A.oo,A.ms,A.ws,A.dX,A.jV,A.cU,A.ib,A.u3,A.tZ,A.u5,A.u4,A.dn,A.cV,A.jX,A.cM,A.el,A.u_,A.nn,A.iL,A.vJ,A.mi,A.ma,A.wo,A.tU,A.hf,A.t3,A.hb,A.jU,A.k8,A.pA,A.cF,A.jY,A.hN,A.dQ,A.ry,A.f5,A.iZ,A.fs,A.jZ,A.up,A.ja,A.m2,A.vE,A.tp,A.yA,A.iH])
q(J.kh,[J.kj,J.hD,J.au,J.bf,J.eT,J.dY,J.da])
q(J.au,[J.dc,J.B,A.f_,A.hP])
q(J.dc,[J.kO,J.dm,J.bE])
r(J.ki,A.i5)
r(J.q7,J.B)
q(J.dY,[J.hC,J.kk])
q(A.o,[A.dr,A.G,A.c7,A.b2,A.ho,A.ee,A.cN,A.bv,A.eo,A.lL,A.mB,A.fH,A.e0,A.l0])
q(A.dr,[A.dK,A.jb])
r(A.iE,A.dK)
r(A.iA,A.jb)
q(A.dN,[A.nO,A.nH,A.nN,A.q1,A.tF,A.xY,A.y_,A.uP,A.uO,A.xf,A.xe,A.py,A.pt,A.vN,A.vM,A.vY,A.w0,A.tl,A.tm,A.tj,A.vD,A.vC,A.wx,A.w3,A.vz,A.wl,A.qy,A.wh,A.om,A.v1,A.pu,A.y1,A.y7,A.y8,A.xE,A.nC,A.nE,A.nG,A.jI,A.nx,A.xh,A.nA,A.qC,A.xP,A.yk,A.td,A.te,A.xO,A.pb,A.pa,A.pc,A.p9,A.p8,A.p7,A.p6,A.p2,A.p3,A.p4,A.yc,A.qr,A.qw,A.qs,A.qv,A.qu,A.qt,A.qp,A.vo,A.vl,A.qP,A.qM,A.qO,A.nW,A.nY,A.nU,A.nT,A.nX,A.nV,A.nS,A.nR,A.uJ,A.y6,A.pk,A.pi,A.pl,A.pm,A.qi,A.qk,A.qm,A.qo,A.qj,A.u7,A.rl,A.rh,A.ri,A.rj,A.rk,A.rf,A.rg,A.rt,A.rp,A.rq,A.rn,A.ro,A.rs,A.nh,A.ni,A.oe,A.od,A.tC,A.tu,A.tA,A.tv,A.tw,A.tx,A.xB,A.xC,A.qL,A.qF,A.qG,A.qH,A.qI,A.qJ,A.r1,A.r2,A.rb,A.r9,A.r8,A.r7,A.ra,A.rP,A.rJ,A.rL,A.rN,A.rS,A.rX,A.ts,A.xR,A.yb,A.y9,A.ya,A.o_,A.qf,A.qg,A.tO,A.tP,A.y4,A.xW,A.xV,A.xI,A.um,A.ue,A.uf,A.ug,A.un,A.uu,A.uv,A.uw,A.ux,A.uE,A.uy,A.ok,A.ol,A.xu,A.pE,A.pD,A.pF,A.pH,A.pJ,A.pG,A.pX,A.tf,A.oR,A.wI,A.y5,A.yd,A.ye,A.nm,A.vx,A.vy,A.o2,A.o3,A.o7,A.o8,A.o9,A.pn,A.nq,A.no,A.w6,A.w9,A.wa,A.q0,A.pZ,A.w5,A.t8,A.tV,A.tW,A.tX,A.tY,A.rG,A.rH,A.rF,A.rE,A.rD,A.u9,A.oV,A.qU,A.pd,A.xA,A.o0,A.o1,A.o4,A.o5,A.o6,A.xm,A.vb,A.vg,A.vj,A.v9,A.wD,A.wE,A.wC,A.wA,A.vH,A.vI])
q(A.nO,[A.v7,A.nI,A.oi,A.q8,A.xZ,A.xg,A.xv,A.pz,A.ps,A.vO,A.vZ,A.w1,A.uL,A.w2,A.qb,A.qA,A.wk,A.v0,A.wW,A.tS,A.wV,A.wU,A.pw,A.pv,A.nB,A.nD,A.nF,A.jH,A.qT,A.qD,A.yl,A.xy,A.p5,A.qQ,A.rv,A.rd,A.nj,A.xM,A.xG,A.tQ,A.ub,A.xJ,A.uk,A.ul,A.ui,A.uj,A.pI,A.oU,A.wb,A.ua,A.vs,A.us])
r(A.bD,A.iA)
q(A.Q,[A.dL,A.bt,A.cW,A.mc])
q(A.a8,[A.db,A.kV,A.cS,A.kl,A.lp,A.l1,A.m4,A.hX,A.hG,A.jA,A.bC,A.cy,A.lo,A.bk,A.jS])
q(A.F,[A.fj,A.l2,A.lx,A.fm,A.dR,A.fi])
r(A.c4,A.fj)
q(A.nN,[A.y3,A.rA,A.uQ,A.uR,A.wO,A.wN,A.xd,A.uT,A.uU,A.uW,A.uX,A.uV,A.uS,A.px,A.vP,A.vU,A.vT,A.vR,A.vQ,A.vX,A.vW,A.vV,A.w_,A.tk,A.tn,A.ti,A.wH,A.wG,A.uK,A.v5,A.v4,A.wp,A.wn,A.xi,A.xj,A.vB,A.vA,A.ww,A.wv,A.xq,A.wZ,A.wY,A.p0,A.xo,A.xp,A.qB,A.qq,A.vp,A.vm,A.vn,A.pf,A.pY,A.pr,A.pq,A.th,A.nP,A.nQ,A.tG,A.qZ,A.pj,A.pg,A.ql,A.qn,A.ru,A.rr,A.ob,A.oh,A.og,A.of,A.tz,A.ty,A.tB,A.rQ,A.rK,A.rM,A.rO,A.rT,A.rY,A.rW,A.rV,A.rU,A.tD,A.r6,A.r0,A.ud,A.uo,A.ut,A.uF,A.uH,A.uG,A.uz,A.uD,A.uC,A.uB,A.uA,A.pW,A.pK,A.pR,A.pS,A.pT,A.pU,A.pP,A.pQ,A.pL,A.pM,A.pN,A.pO,A.pV,A.w4,A.oS,A.oT,A.oP,A.oO,A.oQ,A.oL,A.oK,A.oM,A.oN,A.wJ,A.wK,A.yf,A.ov,A.os,A.ox,A.oz,A.oB,A.ou,A.oA,A.oF,A.oD,A.oC,A.ow,A.oy,A.oE,A.ot,A.nk,A.nl,A.u0,A.np,A.w7,A.w8,A.vK,A.q_,A.oW,A.oX,A.qW,A.qV,A.vq,A.vu,A.vr,A.vt,A.va,A.vf,A.vi,A.vc,A.vh,A.vk,A.vd,A.ve,A.p_,A.oZ,A.oY,A.uq,A.ur,A.wB])
q(A.G,[A.V,A.dT,A.U,A.av,A.aB,A.en,A.iO])
q(A.V,[A.ce,A.a_,A.e9,A.hI,A.md])
r(A.dS,A.c7)
r(A.hl,A.ee)
r(A.eO,A.cN)
q(A.er,[A.mk,A.ml,A.mm])
q(A.mk,[A.az,A.iU,A.iV,A.fD,A.mn])
r(A.es,A.ml)
q(A.mm,[A.et,A.mo])
r(A.j6,A.hM)
r(A.cx,A.j6)
r(A.hg,A.cx)
q(A.eK,[A.aM,A.hv])
q(A.cb,[A.hh,A.iW])
r(A.cD,A.hh)
r(A.hz,A.q1)
r(A.hU,A.cS)
q(A.tF,[A.tg,A.h8])
q(A.bt,[A.hF,A.hE,A.iN])
r(A.eZ,A.f_)
q(A.hP,[A.hO,A.f0])
q(A.f0,[A.iQ,A.iS])
r(A.iR,A.iQ)
r(A.dh,A.iR)
r(A.iT,A.iS)
r(A.bG,A.iT)
q(A.dh,[A.kC,A.kD])
q(A.bG,[A.kE,A.kF,A.kG,A.hQ,A.hR,A.hS,A.e5])
r(A.j1,A.m4)
q(A.a4,[A.fG,A.ih,A.iF,A.cY,A.iI,A.iy,A.h7,A.fw])
r(A.bb,A.fG)
r(A.b3,A.bb)
q(A.aP,[A.ds,A.fy,A.fE])
r(A.ei,A.ds)
r(A.iu,A.iz)
q(A.ej,[A.aC,A.ag])
q(A.dx,[A.cA,A.fI])
r(A.iY,A.lK)
q(A.m3,[A.bW,A.fu])
r(A.iP,A.cA)
r(A.ep,A.iI)
q(A.mR,[A.lY,A.mr])
q(A.cW,[A.dt,A.iC])
r(A.cX,A.iW)
q(A.lg,[A.j_,A.wQ,A.uY,A.mA])
r(A.wf,A.j_)
q(A.jQ,[A.dU,A.ns,A.q9])
q(A.dU,[A.jy,A.kp,A.lv])
q(A.ar,[A.mG,A.jE,A.jD,A.ko,A.kn,A.lw,A.im,A.kb])
q(A.mG,[A.jz,A.kq])
r(A.v2,A.lQ)
q(A.nz,[A.uZ,A.fq,A.lT,A.wX])
r(A.uM,A.uZ)
r(A.km,A.hG)
r(A.wg,A.jP)
r(A.wi,A.wj)
r(A.mV,A.mJ)
r(A.x_,A.mV)
q(A.bC,[A.cL,A.hx])
r(A.m0,A.j7)
r(A.f7,A.fJ)
r(A.mu,A.kb)
r(A.wz,A.pB)
r(A.mv,A.wz)
r(A.h5,A.nM)
q(A.h5,[A.nw,A.lZ])
r(A.hi,A.on)
r(A.ny,A.hi)
r(A.i9,A.t4)
r(A.oq,A.lZ)
r(A.m_,A.qx)
r(A.oG,A.m_)
r(A.kY,A.dM)
r(A.jN,A.jF)
r(A.d3,A.ih)
q(A.jG,[A.qS,A.t2])
r(A.ii,A.nt)
r(A.lf,A.ii)
r(A.h9,A.Z)
q(A.vG,[A.kP,A.ha,A.d4,A.cG,A.jT,A.k3,A.bR,A.hy,A.qR,A.dg,A.dH,A.bV,A.jC,A.cu,A.h4,A.f1,A.hW,A.ic,A.r3,A.eQ,A.kx,A.d5,A.cg,A.hq,A.dj])
r(A.nf,A.pe)
q(A.eV,[A.io,A.il,A.hT,A.hc,A.hZ,A.hs,A.cQ,A.i4,A.i6,A.f6,A.he,A.eL,A.t1])
r(A.ht,A.f6)
r(A.ks,A.mg)
r(A.dO,A.lV)
q(A.c3,[A.hV,A.jR])
r(A.u6,A.nv)
r(A.uN,A.wr)
q(A.bm,[A.fh,A.ea,A.ia,A.bP,A.cn,A.cq,A.f2,A.f3,A.eN,A.dI])
r(A.qe,A.oI)
r(A.kt,A.ef)
q(A.fo,[A.ir,A.eg])
r(A.mK,A.lC)
r(A.mL,A.mK)
r(A.mM,A.mL)
r(A.mN,A.mM)
r(A.mO,A.mN)
r(A.mP,A.mO)
r(A.mQ,A.mP)
r(A.uh,A.mQ)
r(A.q5,A.tq)
q(A.q5,[A.rx,A.tT,A.uc])
r(A.ka,A.l8)
q(A.fa,[A.fx,A.la])
r(A.f9,A.lb)
r(A.cO,A.la)
r(A.fb,A.dP)
r(A.jK,A.aW)
q(A.jK,[A.kd,A.d9,A.f8])
q(A.jJ,[A.m9,A.mz])
r(A.mp,A.oo)
r(A.mq,A.mp)
r(A.kZ,A.mq)
r(A.mt,A.ms)
r(A.bT,A.mt)
q(A.aT,[A.eh,A.aX])
r(A.fl,A.tb)
q(A.aX,[A.iJ,A.iD,A.ft,A.fM])
r(A.rC,A.t3)
r(A.op,A.jU)
r(A.d2,A.f5)
r(A.iB,A.rC)
q(A.ja,[A.m1,A.mx])
r(A.lh,A.f9)
r(A.mb,A.fi)
r(A.ch,A.mb)
s(A.fj,A.lq)
s(A.jb,A.F)
s(A.iQ,A.F)
s(A.iR,A.hr)
s(A.iS,A.F)
s(A.iT,A.hr)
s(A.cA,A.iv)
s(A.fI,A.mE)
s(A.j6,A.mH)
s(A.mV,A.lg)
s(A.lZ,A.or)
s(A.m_,A.oH)
s(A.mg,A.nK)
s(A.lV,A.nL)
s(A.mK,A.lB)
s(A.mL,A.lF)
s(A.mM,A.lH)
s(A.mN,A.lI)
s(A.mO,A.lG)
s(A.mP,A.lE)
s(A.mQ,A.lA)
s(A.mp,A.F)
s(A.mq,A.kH)
s(A.ms,A.lr)
s(A.mt,A.Q)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",a5:"double",cC:"num",k:"String",X:"bool",R:"Null",p:"List",j:"Object",H:"Map",L:"JSObject"},mangledNames:{},types:["~()","y<j?>(lD,fn)","~(L)","y<~>()","R()","y<R>(bu)","y<~>(bu)","k(k)","~(i)","i()","R(j,aw)","~(j,aw)","X(k)","~(j?)","j?(j?)","X(@)","y<R>()","y<aU>()","~(~())","i(ba,i)","R(L)","R(@)","~(@)","X(j?)","y<~>(iL)","~(p<i>)","~(j?,j?)","L()","y<~>(~)","~(k,k)","j?(H<k,j?>)","0&()","S<k,j?>(@,@)","~(@,@)","X(be)","X(j?,j?)","i(ba)","R(j)","~(cM,i,i,i)","i(j?)","@(@)","~(a1)","X()","a5(i)","@(k)","@()","X(d8)","y<R>(yx)","y<@>()","~(k,@)","X(b7)","y<co>(k)","i(co)","~(cR)","k(H<k,j?>)","X(aQ)","~(j[aw?])","y<p<H<k,j?>>>(k,p<j?>)","i(aW,i,i,i)","i(aW,i)","i(ba,i,i,bf)","~(cM,i)","k(e4)","y<bl<~>>()","~(~)","y<ef>()","i(@,@)","R(bE,bE)","@(@,k)","0&(k,i?)","~(p<c5>)","y<a4<p<i>>>()","k?(H<k,j?>)","b7()","y<b7>(bu)","j?(tc)","~(hY)","S<k,d6>(k,fc)","cs(@)","i(+(k,j),+(k,j))","k(k,k)","y<dk>(k)","i(dk)","as(i)","y<R>(~)","br()","~(cl)","ek<@,@>(bs<@>)","y<b9>(b9)","b9(b9)","b9(j)","~(k,k?)","de/(j?)","y<j?>(j?)","H<k,j?>(p<j?>)","y<i>(bu)","X(+(k,j))","j?(~)","k(i[i])","ct()","cr()","e7()","i(i,i)","y<X>(k)","y<~>(k)","i(i,cz)","X(cz)","i(cz)","bQ<j?>(@)","X(bQ<j?>)","i(+(k,j?),+(k,j?))","R(~())","H<k,j?>(bT)","y<@>(bu)","~(aV)","~(p<br>)","a4<p<i>>()","~(ff)","R(~)","~(p<H<k,j?>>)","~(H<k,j?>?)","y<H<k,j?>?>()","k(k?)","k?()","i(ci)","R(@,aw)","j(ci)","j(be)","i(be,be)","p<ci>(S<j,p<be>>)","cO()","k(j?)","~(i,k,i)","~(yX,p<yY>)","X(k,k)","H<k,j?>(br)","~(bf,i)","ba?(aW,i,i,i,i)","i(aW,i,i)","X(bU)","i(aW?,i,i)","i(bU,bU)","i(k)","aQ()","i(ba,bf)","R(k,k[j?])","i(ba,i,i)","i(i())","H<k,j?>(b7)","~(df<p<i>>)","d8()","i(cM,i,i,i,i)","i(i(i),i)","i(z0,i)","i(z0,i,i)","~(@,aw)","~(i,@)","L(B<j?>)","eW()","eR()","L(L?)","~(dJ)","y<~>(i,cw)","y<~>(i)","cw()","y<L>(k)","R(cF)","y<R>(L)","L(j)","R(j?,aw)","k?(j?)","~(dP)","L(L)","y<L>()","dV()","bU()","y<bl<cd>>()","~(cd)","X(fs)","i(i)","y<dQ>()","0&(j?,aw)","~(df<L>)","y<H<k,j?>?>(k)","~(N?,al?,N,j,aw)","0^(N?,al?,N,0^())<j?>","0^(N?,al?,N,0^(1^),1^)<j?,j?>","0^(N?,al?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,al,N,0^())<j?>","0^(1^)(N,al,N,0^(1^))<j?,j?>","0^(1^,2^)(N,al,N,0^(1^,2^))<j?,j?,j?>","ad?(N,al,N,j,aw?)","~(N?,al?,N,~())","cR(N,al,N,as,~())","cR(N,al,N,as,~(cR))","~(N,al,N,k)","N(N?,al?,N,is?,H<j?,j?>?)","0^(0^,0^)<cC>","b7(H<k,j?>)","q<@>?()","br(H<k,j?>)","aN()","~(~(i,k,i),i,i,i,bf)","~(N,al,N,~())"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.az&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.iU&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.iV&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.fD&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.mn&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.es&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.et&&A.CU(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.mo&&A.CU(a,b.a)}}
A.GC(v.typeUniverse,JSON.parse('{"bE":"dc","kO":"dc","dm":"dc","JI":"f_","B":{"p":["1"],"au":[],"G":["1"],"L":[],"o":["1"],"aZ":["1"]},"kj":{"X":[],"a9":[]},"hD":{"R":[],"a9":[]},"au":{"L":[]},"dc":{"au":[],"L":[]},"ki":{"i5":[]},"q7":{"B":["1"],"p":["1"],"au":[],"G":["1"],"L":[],"o":["1"],"aZ":["1"]},"dY":{"a5":[],"am":["cC"]},"hC":{"a5":[],"i":[],"am":["cC"],"a9":[]},"kk":{"a5":[],"am":["cC"],"a9":[]},"da":{"k":[],"am":["k"],"aZ":["@"],"a9":[]},"dr":{"o":["2"]},"dK":{"dr":["1","2"],"o":["2"],"o.E":"2"},"iE":{"dK":["1","2"],"dr":["1","2"],"G":["2"],"o":["2"],"o.E":"2"},"iA":{"F":["2"],"p":["2"],"dr":["1","2"],"G":["2"],"o":["2"]},"bD":{"iA":["1","2"],"F":["2"],"p":["2"],"dr":["1","2"],"G":["2"],"o":["2"],"F.E":"2","o.E":"2"},"dL":{"Q":["3","4"],"H":["3","4"],"Q.V":"4","Q.K":"3"},"db":{"a8":[]},"kV":{"a8":[]},"c4":{"F":["i"],"p":["i"],"G":["i"],"o":["i"],"F.E":"i"},"G":{"o":["1"]},"V":{"G":["1"],"o":["1"]},"ce":{"V":["1"],"G":["1"],"o":["1"],"V.E":"1","o.E":"1"},"c7":{"o":["2"],"o.E":"2"},"dS":{"c7":["1","2"],"G":["2"],"o":["2"],"o.E":"2"},"a_":{"V":["2"],"G":["2"],"o":["2"],"V.E":"2","o.E":"2"},"b2":{"o":["1"],"o.E":"1"},"ho":{"o":["2"],"o.E":"2"},"ee":{"o":["1"],"o.E":"1"},"hl":{"ee":["1"],"G":["1"],"o":["1"],"o.E":"1"},"cN":{"o":["1"],"o.E":"1"},"eO":{"cN":["1"],"G":["1"],"o":["1"],"o.E":"1"},"dT":{"G":["1"],"o":["1"],"o.E":"1"},"bv":{"o":["1"],"o.E":"1"},"fj":{"F":["1"],"p":["1"],"G":["1"],"o":["1"]},"e9":{"V":["1"],"G":["1"],"o":["1"],"V.E":"1","o.E":"1"},"hg":{"cx":["1","2"],"H":["1","2"]},"eK":{"H":["1","2"]},"aM":{"eK":["1","2"],"H":["1","2"]},"eo":{"o":["1"],"o.E":"1"},"hv":{"eK":["1","2"],"H":["1","2"]},"hh":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"cD":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"hU":{"cS":[],"a8":[]},"kl":{"a8":[]},"lp":{"a8":[]},"kJ":{"J":[]},"iX":{"aw":[]},"l1":{"a8":[]},"bt":{"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"U":{"G":["1"],"o":["1"],"o.E":"1"},"av":{"G":["1"],"o":["1"],"o.E":"1"},"aB":{"G":["S<1,2>"],"o":["S<1,2>"],"o.E":"S<1,2>"},"hF":{"bt":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"hE":{"bt":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"fC":{"kW":[],"e4":[]},"lL":{"o":["kW"],"o.E":"kW"},"fd":{"e4":[]},"mB":{"o":["e4"],"o.E":"e4"},"eZ":{"au":[],"L":[],"dJ":[],"a9":[]},"f_":{"au":[],"L":[],"dJ":[],"a9":[]},"hP":{"au":[],"L":[]},"mI":{"dJ":[]},"hO":{"au":[],"yt":[],"L":[],"a9":[]},"f0":{"bF":["1"],"au":[],"L":[],"aZ":["1"]},"dh":{"F":["a5"],"p":["a5"],"bF":["a5"],"au":[],"G":["a5"],"L":[],"aZ":["a5"],"o":["a5"]},"bG":{"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"]},"kC":{"dh":[],"po":[],"F":["a5"],"p":["a5"],"bF":["a5"],"au":[],"G":["a5"],"L":[],"aZ":["a5"],"o":["a5"],"a9":[],"F.E":"a5"},"kD":{"dh":[],"pp":[],"F":["a5"],"p":["a5"],"bF":["a5"],"au":[],"G":["a5"],"L":[],"aZ":["a5"],"o":["a5"],"a9":[],"F.E":"a5"},"kE":{"bG":[],"q2":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"kF":{"bG":[],"q3":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"kG":{"bG":[],"q4":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"hQ":{"bG":[],"tK":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"hR":{"bG":[],"tL":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"hS":{"bG":[],"tM":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"e5":{"bG":[],"cw":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"m4":{"a8":[]},"j1":{"cS":[],"a8":[]},"ad":{"a8":[]},"q":{"y":["1"]},"df":{"bs":["1"]},"j0":{"cR":[]},"it":{"hd":["1"]},"fH":{"o":["1"],"o.E":"1"},"b3":{"bb":["1"],"fG":["1"],"a4":["1"],"a4.T":"1"},"ei":{"ds":["1"],"aP":["1"],"bl":["1"],"aP.T":"1"},"iz":{"bs":["1"]},"iu":{"iz":["1"],"bs":["1"]},"ll":{"J":[]},"hX":{"a8":[]},"ej":{"hd":["1"]},"aC":{"ej":["1"],"hd":["1"]},"ag":{"ej":["1"],"hd":["1"]},"ih":{"a4":["1"]},"dx":{"bs":["1"]},"cA":{"iv":["1"],"dx":["1"],"bs":["1"]},"fI":{"dx":["1"],"bs":["1"]},"bb":{"fG":["1"],"a4":["1"],"a4.T":"1"},"ds":{"aP":["1"],"bl":["1"],"aP.T":"1"},"iY":{"lK":["1"]},"aP":{"bl":["1"],"aP.T":"1"},"fG":{"a4":["1"]},"fv":{"bl":["1"]},"iF":{"a4":["1"],"a4.T":"1"},"cY":{"a4":["1"],"a4.T":"1"},"iP":{"cA":["1"],"iv":["1"],"dx":["1"],"df":["1"],"bs":["1"]},"iI":{"a4":["2"]},"fy":{"aP":["2"],"bl":["2"],"aP.T":"2"},"ep":{"iI":["1","2"],"a4":["2"],"a4.T":"2"},"iG":{"bs":["1"]},"fE":{"aP":["2"],"bl":["2"],"aP.T":"2"},"iy":{"a4":["2"],"a4.T":"2"},"mR":{"N":[]},"lY":{"N":[]},"mr":{"N":[]},"fN":{"al":[]},"cW":{"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"dt":{"cW":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"iC":{"cW":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"en":{"G":["1"],"o":["1"],"o.E":"1"},"iN":{"bt":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"cX":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"e0":{"o":["1"],"o.E":"1"},"F":{"p":["1"],"G":["1"],"o":["1"]},"Q":{"H":["1","2"]},"iO":{"G":["2"],"o":["2"],"o.E":"2"},"hM":{"H":["1","2"]},"cx":{"H":["1","2"]},"hI":{"V":["1"],"G":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cb":{"eb":["1"],"G":["1"],"o":["1"]},"iW":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"ek":{"bs":["1"]},"mc":{"Q":["k","@"],"H":["k","@"],"Q.V":"@","Q.K":"k"},"md":{"V":["k"],"G":["k"],"o":["k"],"V.E":"k","o.E":"k"},"jy":{"dU":[]},"mG":{"ar":["k","p<i>"]},"jz":{"ar":["k","p<i>"],"ar.T":"p<i>"},"jE":{"ar":["p<i>","k"],"ar.T":"k"},"jD":{"ar":["k","p<i>"],"ar.T":"p<i>"},"hG":{"a8":[]},"km":{"a8":[]},"ko":{"ar":["j?","k"],"ar.T":"k"},"kn":{"ar":["k","j?"],"ar.T":"j?"},"kp":{"dU":[]},"kq":{"ar":["k","p<i>"],"ar.T":"p<i>"},"lv":{"dU":[]},"lw":{"ar":["k","p<i>"],"ar.T":"p<i>"},"im":{"ar":["p<i>","k"],"ar.T":"k"},"A5":{"am":["A5"]},"aN":{"am":["aN"]},"a5":{"am":["cC"]},"as":{"am":["as"]},"i":{"am":["cC"]},"p":{"G":["1"],"o":["1"]},"cC":{"am":["cC"]},"kW":{"e4":[]},"eb":{"G":["1"],"o":["1"]},"k":{"am":["k"]},"ay":{"am":["A5"]},"jA":{"a8":[]},"cS":{"a8":[]},"bC":{"a8":[]},"cL":{"a8":[]},"hx":{"cL":[],"a8":[]},"cy":{"a8":[]},"lo":{"cy":[],"a8":[]},"bk":{"a8":[]},"jS":{"a8":[]},"kK":{"a8":[]},"id":{"a8":[]},"m5":{"J":[]},"b8":{"J":[]},"kg":{"cy":[],"J":[],"a8":[]},"mC":{"aw":[]},"l0":{"o":["i"],"o.E":"i"},"j7":{"ls":[]},"bY":{"ls":[]},"m0":{"ls":[]},"kI":{"J":[]},"q4":{"p":["i"],"G":["i"],"o":["i"]},"cw":{"p":["i"],"G":["i"],"o":["i"]},"tM":{"p":["i"],"G":["i"],"o":["i"]},"q2":{"p":["i"],"G":["i"],"o":["i"]},"tK":{"p":["i"],"G":["i"],"o":["i"]},"q3":{"p":["i"],"G":["i"],"o":["i"]},"tL":{"p":["i"],"G":["i"],"o":["i"]},"po":{"p":["a5"],"G":["a5"],"o":["a5"]},"pp":{"p":["a5"],"G":["a5"],"o":["a5"]},"Z":{"H":["2","3"]},"f7":{"fJ":["1","eb<1>"],"fJ.E":"1"},"kb":{"ar":["p<i>","c5"]},"mu":{"ar":["p<i>","c5"],"ar.T":"c5"},"i8":{"J":[]},"l2":{"F":["i"],"p":["i"],"G":["i"],"o":["i"],"F.E":"i"},"kY":{"J":[]},"jF":{"yu":[]},"jN":{"yu":[]},"d3":{"a4":["p<i>"],"a4.T":"p<i>"},"dM":{"J":[]},"lf":{"ii":[]},"h9":{"Z":["k","k","1"],"H":["k","1"],"Z.V":"1","Z.K":"k","Z.C":"k"},"k2":{"yx":[]},"eV":{"J":[]},"io":{"J":[]},"il":{"J":[]},"hT":{"J":[]},"hc":{"J":[]},"hZ":{"J":[]},"hs":{"J":[]},"cQ":{"J":[]},"i4":{"J":[]},"i6":{"J":[]},"f6":{"J":[]},"ht":{"J":[]},"he":{"J":[]},"eL":{"J":[]},"hV":{"c3":["H<k,j?>?"],"c3.T":"H<k,j?>?"},"eI":{"J":[]},"jL":{"J":[]},"mj":{"AL":[]},"d7":{"J":[]},"cI":{"J":[]},"bm":{"J":[]},"fh":{"J":[]},"ea":{"J":[]},"ia":{"J":[]},"bP":{"J":[]},"cn":{"J":[]},"cq":{"J":[]},"f2":{"J":[]},"f3":{"J":[]},"eN":{"J":[]},"dI":{"J":[]},"jR":{"c3":["p<H<k,j?>>"],"c3.T":"p<H<k,j?>>"},"kt":{"ef":[]},"lX":{"lD":[]},"hj":{"J":[]},"i0":{"J":[]},"kX":{"J":[]},"ir":{"fo":[]},"eg":{"fo":[]},"kM":{"J":[]},"ka":{"cc":[],"am":["cc"]},"fx":{"cO":[],"am":["l9"]},"cc":{"am":["cc"]},"l8":{"cc":[],"am":["cc"]},"l9":{"am":["l9"]},"la":{"am":["l9"]},"lb":{"J":[]},"f9":{"b8":[],"J":[]},"fa":{"am":["l9"]},"cO":{"am":["l9"]},"cP":{"J":[]},"tc":{"p":["j?"],"G":["j?"],"o":["j?"]},"lx":{"F":["j?"],"tc":[],"p":["j?"],"G":["j?"],"o":["j?"],"F.E":"j?"},"fb":{"dP":[]},"kd":{"aW":[]},"m9":{"ip":[],"ba":[]},"bT":{"Q":["k","@"],"H":["k","@"],"Q.V":"@","Q.K":"k"},"kZ":{"F":["bT"],"p":["bT"],"G":["bT"],"o":["bT"],"F.E":"bT"},"cU":{"J":[]},"jK":{"aW":[]},"jJ":{"ip":[],"ba":[]},"eh":{"aT":["eh"],"aT.E":"eh"},"cV":{"yY":[]},"dn":{"yX":[]},"fm":{"F":["cV"],"p":["cV"],"G":["cV"],"o":["cV"],"F.E":"cV"},"h7":{"a4":["1"],"a4.T":"1"},"d9":{"aW":[]},"aX":{"aT":["aX"]},"ma":{"ip":[],"ba":[]},"iJ":{"aX":[],"aT":["aX"],"aT.E":"aX"},"iD":{"aX":[],"aT":["aX"],"aT.E":"aX"},"ft":{"aX":[],"aT":["aX"],"aT.E":"aX"},"fM":{"aX":[],"aT":["aX"],"aT.E":"aX"},"f8":{"aW":[]},"mz":{"ip":[],"ba":[]},"hb":{"J":[]},"dR":{"F":["j?"],"p":["j?"],"G":["j?"],"o":["j?"],"F.E":"j?"},"f5":{"J":[]},"d2":{"J":[]},"m1":{"ja":["L"]},"mx":{"ja":["L"]},"lh":{"b8":[],"J":[]},"ch":{"fi":["i"],"F":["i"],"p":["i"],"G":["i"],"o":["i"],"F.E":"i"},"fi":{"F":["1"],"p":["1"],"G":["1"],"o":["1"]},"mb":{"fi":["i"],"F":["i"],"p":["i"],"G":["i"],"o":["i"]},"fw":{"a4":["1"],"a4.T":"1"},"iH":{"bl":["1"]}}'))
A.GB(v.typeUniverse,JSON.parse('{"hr":1,"lq":1,"fj":1,"jb":2,"hh":1,"f0":1,"bs":1,"ih":1,"mE":1,"m3":1,"mH":2,"hM":2,"iW":1,"j6":2,"jP":1,"jQ":2,"j_":1,"kH":1,"lr":2,"E1":1,"Fz":1,"FH":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("E1<j?>"),bG:s("dH"),om:s("h7<B<j?>>"),hw:s("cl"),lo:s("dJ"),fW:s("yt"),kj:s("h9<k>"),iv:s("a1"),dF:s("yu()"),V:s("c4"),bU:s("bQ<j?>"),fw:s("dP"),bP:s("am<@>"),p6:s("dQ"),br:s("hd<L>"),n8:s("br"),M:s("cD<k>"),lp:s("jZ"),O:s("G<@>"),C:s("a8"),mA:s("J"),eZ:s("k8"),d9:s("aQ"),A:s("b7"),k4:s("hp"),pk:s("po"),kI:s("pp"),Y:s("b8"),gY:s("JE"),nW:s("y<L>"),fr:s("y<de>"),mj:s("y<R>"),g7:s("y<@>"),fP:s("y<cF?>"),n1:s("y<j?>(lD,fn)"),jN:s("y<fl?>"),co:s("d6"),w:s("co"),cF:s("d9"),m6:s("q2"),bW:s("q3"),jx:s("q4"),nZ:s("hB<@>"),U:s("o<@>"),aL:s("B<a1>"),aw:s("B<bQ<@>>"),i5:s("B<c5>"),mK:s("B<aQ>"),iw:s("B<y<~>>"),mr:s("B<d8>"),E:s("B<L>"),dO:s("B<p<j?>>"),ic:s("B<H<k,j>>"),d:s("B<H<k,j?>>"),e8:s("B<kB>"),i7:s("B<e6>"),hf:s("B<j>"),ox:s("B<e7>"),my:s("B<cr>"),k1:s("B<f4>"),g2:s("B<i2>"),bo:s("B<i3>"),eb:s("B<aV>"),fU:s("B<+controller,sync(df<cd>,X)>"),lw:s("B<+controller,sync(df<~>,X)>"),kC:s("B<+(dj,k)>"),l5:s("B<+(k,j)>"),iE:s("B<+(k,j?)>"),aY:s("B<+(fr,j?,j?,aw?)>"),g1:s("B<cs>"),lE:s("B<fb>"),c0:s("B<bU>"),dw:s("B<bl<@>>"),s:s("B<k>"),en:s("B<fe>"),bs:s("B<cw>"),az:s("B<iB>"),i4:s("B<fr>"),fV:s("B<fs>"),pg:s("B<be>"),dg:s("B<ci>"),p8:s("B<mi>"),bi:s("B<fF>"),gk:s("B<a5>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<ad?>"),c:s("B<j?>"),mf:s("B<k?>"),iy:s("aZ<@>"),T:s("hD"),m:s("L"),bJ:s("bf"),g:s("bE"),dX:s("bF<@>"),aq:s("au"),kk:s("e0<eh>"),p3:s("e0<aX>"),hI:s("e1<@>"),ba:s("p<br>"),ck:s("p<b7>"),ip:s("p<L>"),ew:s("p<H<k,j>>"),J:s("p<H<k,j?>>"),eT:s("p<e6>"),hg:s("p<e7>"),a6:s("p<cr>"),jX:s("p<i2>"),kR:s("p<cs>"),k:s("p<k>"),bR:s("p<fe>"),j:s("p<@>"),L:s("p<i>"),W:s("p<j?>"),kM:s("ks"),jD:s("hJ"),ia:s("S<k,d6>"),gc:s("S<k,k>"),eB:s("S<k,j?>"),a3:s("hL<@,@>"),cy:s("H<k,ct>"),dV:s("H<k,i>"),f:s("H<@,@>"),G:s("H<k,j?>"),d2:s("H<j?,j?>"),iZ:s("a_<k,@>"),r:s("de"),a:s("eZ"),dQ:s("dh"),aj:s("bG"),Z:s("e5"),P:s("R"),K:s("j"),ot:s("kU"),gq:s("f4"),e:s("aU"),b0:s("cL"),lZ:s("JK"),oZ:s("aV"),aK:s("+()"),ja:s("+(L,hf)"),hP:s("+(H<k,ct>,H<k,H<k,j?>>)"),cU:s("+(dj,k)"),mk:s("+(X,L)"),kO:s("+basicSupport,supportsReadWriteUnsafe(X,X)"),mt:s("+(L?,L)"),po:s("+(j?,i)"),g0:s("+(H<k,j?>?,ct?,cr?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("kW"),Q:s("cs"),hF:s("e9<k>"),cu:s("f7<@>"),gi:s("eb<k>"),g_:s("f8"),hq:s("cc"),ol:s("cO"),gE:s("lc"),l:s("aw"),ls:s("Fz<j?>"),nv:s("ld"),h3:s("fc"),ha:s("bl<cd>"),ey:s("bl<~>"),bv:s("le"),ku:s("a4<p<i>>"),lI:s("dk"),hL:s("ii"),N:s("k"),eg:s("fe"),k5:s("ij"),n6:s("bV"),mv:s("b9"),nw:s("ct"),em:s("ff"),hU:s("cR"),q:s("lm"),aJ:s("a9"),do:s("cS"),nL:s("FH<j?>"),hM:s("tK"),mC:s("tL"),oR:s("ch"),nn:s("tM"),p:s("cw"),cx:s("dm"),ph:s("cx<k,k>"),eo:s("cy"),oc:s("cz"),jJ:s("ls"),e6:s("aW"),j2:s("ip"),n:s("fl"),x:s("bv<k>"),u:s("ef"),bp:s("eg"),be:s("lD"),ec:s("fo"),oS:s("fp"),iq:s("aC<cw>"),jk:s("aC<@>"),ho:s("aC<i>"),h:s("aC<~>"),oW:s("ek<@,@>"),R:s("el<L>"),d4:s("fw<L>"),nI:s("q<cF>"),a7:s("q<L>"),hl:s("q<0&>"),os:s("q<k>"),jz:s("q<cw>"),g5:s("q<X>"),_:s("q<@>"),hy:s("q<i>"),jQ:s("q<i?>"),D:s("q<~>"),nf:s("be"),mp:s("dt<j?,j?>"),fA:s("fB"),k8:s("cY<L>"),fb:s("cY<p<i>>"),mI:s("my<c5>"),jy:s("dy<cd,~()>"),af:s("dy<~,X()>"),lU:s("dy<~,~()>"),hT:s("bZ<L>"),lj:s("bZ<p<i>>"),aP:s("ag<cF>"),h1:s("ag<L>"),ex:s("ag<X>"),F:s("ag<~>"),y:s("X"),i:s("a5"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aw)"),S:s("i"),ma:s("br?"),gK:s("y<R>?"),b3:s("cF?"),B:s("L?"),bE:s("p<bQ<@>>?"),lH:s("p<@>?"),b:s("H<k,j?>?"),nh:s("de?"),X:s("j?"),ad:s("AL?"),dY:s("cr?"),lY:s("i1?"),jB:s("cs?"),v:s("k?"),f8:s("ct?"),a_:s("ch?"),he:s("fl?"),dd:s("be?"),o9:s("X?"),dz:s("a5?"),I:s("i?"),jh:s("cC?"),o:s("cC"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aw)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bN=J.kh.prototype
B.c=J.B.prototype
B.b=J.hC.prototype
B.t=J.dY.prototype
B.a=J.da.prototype
B.bO=J.bE.prototype
B.bP=J.au.prototype
B.al=A.hO.prototype
B.cq=A.hQ.prototype
B.u=A.hR.prototype
B.e=A.e5.prototype
B.b0=J.kO.prototype
B.av=J.dm.prototype
B.ae=new A.d2("Operation was cancelled")
B.ay=new A.h4(1,"hidden")
B.bd=new A.jw(1)
B.dl=new A.jw(-1)
B.V=new A.dH(0,"applied")
B.W=new A.dH(1,"quarantined")
B.be=new A.dH(2,"conflict")
B.X=new A.dH(3,"skipped")
B.bf=new A.jz(127)
B.Y=new A.jC(0,"changed")
B.az=new A.jC(1,"deleted")
B.bw=new A.iF(A.ac("iF<p<i>>"))
B.bg=new A.d3(B.bw)
B.bh=new A.hz(A.J1(),A.ac("hz<i>"))
B.bj=new A.jE()
B.aA=new A.ns()
B.bi=new A.jD()
B.D={}
B.aV=new A.aM(B.D,[],A.ac("aM<k,j>"))
B.dt=new A.qR(0,"conflict")
B.dm=new A.oa()
B.aB=new A.oG()
B.bk=new A.k1(A.ac("k1<0&>"))
B.n=new A.k0()
B.aC=new A.k4(A.ac("k4<0&>"))
B.aD=new A.k5()
B.L=new A.k5()
B.bl=new A.kg()
B.aE=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bm=function() {
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
B.br=function(getTagFallback) {
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
B.bn=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bq=function(hooks) {
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
B.bp=function(hooks) {
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
B.bo=function(hooks) {
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
B.aF=function(hooks) { return hooks; }

B.h=new A.q9()
B.bs=new A.qe()
B.bt=new A.hJ()
B.bu=new A.kK()
B.d=new A.t5()
B.k=new A.lv()
B.f=new A.lw()
B.bv=new A.uN()
B.o=new A.vv()
B.Z=new A.vF()
B.af=new A.wc()
B.i=new A.mr()
B.l=new A.mu()
B.M=new A.mC()
B.aG=new A.d4(0,"create")
B.x=new A.d4(1,"update")
B.bx=new A.d4(2,"archive")
B.by=new A.d4(3,"restore")
B.aH=new A.d4(4,"purge")
B.bz=new A.d4(5,"hide")
B.a_=new A.ha(0,"local")
B.ag=new A.ha(1,"remote")
B.a0=new A.ha(2,"resolution")
B.bA=new A.jT(3,"ignore")
B.N=new A.jT(4,"replace")
B.p=new A.k3(0,"normal")
B.aI=new A.k3(1,"full")
B.A=new A.as(0)
B.aJ=new A.as(1e6)
B.aK=new A.as(16e3)
B.dn=new A.as(18e8)
B.bB=new A.as(2e5)
B.bC=new A.as(3e5)
B.a1=new A.as(3e7)
B.aL=new A.as(3e8)
B.a2=new A.as(5e5)
B.dp=new A.as(5e6)
B.dq=new A.as(6048e8)
B.dr=new A.as(7776e9)
B.ds=new A.as(864e8)
B.ah=new A.bR(0,"text")
B.a3=new A.bR(1,"int")
B.a4=new A.bR(2,"real")
B.B=new A.bR(3,"bool")
B.a5=new A.bR(4,"date")
B.E=new A.bR(5,"enumValue")
B.O=new A.bR(6,"json")
B.P=new A.bR(7,"jsonList")
B.F=new A.bR(8,"ref")
B.bD=new A.hp(!1)
B.ai=new A.d5("x",1,"opfsExternalLocks")
B.aM=new A.d5("y",2,"opfsExternalLocksWorkaround")
B.aN=new A.eQ("/database",0,"database")
B.aO=new A.eQ("/database-journal",1,"journal")
B.bJ=new A.b8("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.bK=new A.b8("fieldCipher envelope must be a map.",null,null)
B.ak=new A.aM(B.D,[],A.ac("aM<k,k>"))
B.bL=new A.dV(B.ak)
B.aP=new A.hy(0,"live")
B.bQ=new A.kn(null)
B.bR=new A.ko(null)
B.bS=new A.cG(0,"textExpected")
B.bT=new A.cG(1,"intExpected")
B.bU=new A.cG(2,"numberExpected")
B.bV=new A.cG(3,"boolExpected")
B.bW=new A.cG(4,"jsonExpected")
B.bX=new A.cG(5,"jsonListExpected")
B.bY=new A.cG(6,"enumValueRejected")
B.bZ=new A.kq(255)
B.aj=new A.e1(B.bk,A.ac("e1<k>"))
B.c_=s(["attempt_count","next_retry_at","last_error"],t.s)
B.aQ=s([13,10],t.t)
B.ao=new A.cg(0,"unknown")
B.ap=new A.cg(1,"integer")
B.aq=new A.cg(2,"bigInt")
B.ar=new A.cg(3,"float")
B.as=new A.cg(4,"text")
B.at=new A.cg(5,"blob")
B.au=new A.cg(6,"$null")
B.bb=new A.cg(7,"boolean")
B.aR=s([B.ao,B.ap,B.aq,B.ar,B.as,B.at,B.au,B.bb],A.ac("B<cg>"))
B.c0=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.bc=new A.h4(0,"visible")
B.c1=s([B.bc,B.ay],A.ac("B<h4>"))
B.bH=new A.hq(0,"database")
B.bI=new A.hq(1,"journal")
B.aS=s([B.bH,B.bI],A.ac("B<hq>"))
B.w=new A.cu(0,"clean")
B.ac=new A.cu(1,"dirty")
B.ba=new A.cu(2,"inFlight")
B.U=new A.cu(3,"conflict")
B.ad=new A.cu(4,"error")
B.cO=new A.cu(5,"quarantine")
B.cP=new A.cu(6,"blocked")
B.c2=s([B.w,B.ac,B.ba,B.U,B.ad,B.cO,B.cP],A.ac("B<cu>"))
B.c3=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.a6=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.c4=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.bM=new A.hy(1,"notArchived")
B.c5=s([B.aP,B.bM],A.ac("B<hy>"))
B.c6=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.aZ=new A.hW(0,"fileUpload")
B.b_=new A.hW(1,"fileRemove")
B.c7=s([B.aZ,B.b_],A.ac("B<hW>"))
B.bG=new A.d5("s",0,"opfsShared")
B.bE=new A.d5("i",3,"indexedDb")
B.bF=new A.d5("m",4,"inMemory")
B.c8=s([B.bG,B.ai,B.aM,B.bE,B.bF],A.ac("B<d5>"))
B.a7=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.c9=s([B.ah,B.a3,B.a4,B.B,B.a5,B.E,B.O,B.P,B.F],A.ac("B<bR>"))
B.j=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.a8=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.aT=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.ca=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.f1(0,"upsert")
B.I=new A.f1(1,"archive")
B.Q=new A.f1(2,"restore")
B.cb=s([B.v,B.I,B.Q],A.ac("B<f1>"))
B.cc=s([],A.ac("B<d6>"))
B.ce=s([],t.my)
B.q=s([],t.s)
B.cd=s([],t.t)
B.aU=s([],t.dG)
B.y=s([],t.c)
B.cf=s(["*"],t.s)
B.cg=s([B.aN,B.aO],A.ac("B<eQ>"))
B.ch=s(["id","updated"],t.s)
B.ci=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.b5=new A.dj(0,"opfs")
B.b6=new A.dj(1,"indexedDb")
B.cH=new A.dj(2,"inMemory")
B.cj=s([B.b5,B.b6,B.cH],A.ac("B<dj>"))
B.a9=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.ck=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cl=new A.hv([16,10,24,12,32,14],A.ac("hv<i,i>"))
B.cv={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.r=new A.kp()
B.m=new A.jy()
B.cm=new A.aM(B.cv,[B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.k,B.k],A.ac("aM<k,dU>"))
B.aa=new A.aM(B.D,[],A.ac("aM<k,i>"))
B.z=new A.aM(B.D,[],A.ac("aM<k,j?>"))
B.cn=new A.aM(B.D,[],A.ac("aM<i,H<k,j?>(H<k,j?>)>"))
B.cp=new A.kx(11,"simpleSuccessResponse",A.ac("kx<L>"))
B.aW=new A.dg(0,"createOrUpdate")
B.aX=new A.dg(1,"createOrUpdateMerge")
B.aY=new A.dg(2,"create")
B.G=new A.dg(3,"update")
B.C=new A.dg(4,"archive")
B.H=new A.dg(5,"restore")
B.du=new A.r3(2,"readWriteCreate")
B.b1=new A.kP(0,"native")
B.cw=new A.kP(1,"web")
B.J=new A.aU(0,1,0,0,0,!1)
B.ab=new A.aU(0,0,0,0,0,!0)
B.R=new A.aU(0,0,0,0,0,!1)
B.cx=new A.aU(0,0,0,1,0,!1)
B.b2=new A.aU(0,0,1,0,0,!1)
B.S=new A.aU(1,0,0,0,0,!1)
B.cy=new A.az("archived",!0)
B.am=new A.iU(!1,!1)
B.cz=new A.es(0,0,0)
B.cA=new A.es(null,null,null)
B.cu={hidden:0}
B.cB=new A.cD(B.cu,1,t.M)
B.cr={id:0,archived:1,hidden:2,extra:3}
B.b3=new A.cD(B.cr,4,t.M)
B.cs={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.cC=new A.cD(B.cs,11,t.M)
B.b4=new A.cD(B.D,0,t.M)
B.ct={open:0,close:1,health:2,worker_event:3,record_event:4,capabilities:5,get:6,mutate_batch:7,compiled_query:8,analyze:9,wal_checkpoint:10,vacuum:11,prune_outbox:12,compact:13,run_maintenance:14,tx_begin:15,tx_get:16,tx_mutate_batch:17,tx_savepoint:18,tx_rollback_to:19,tx_release:20,tx_commit:21,tx_rollback:22,watch_query:23,watch_one:24,watch_cancel:25,sync_start:26,sync_stop:27,sync_now:28,sync_status:29,auth_required:30,sync_pause:31,sync_resume:32,sync_update_auth:33,sync_set_connectivity:34,file_upload_begin:35,file_upload_chunk:36,file_upload_finish:37,file_upload_abort:38,file_list:39,file_open:40,file_remove:41,file_gc:42,file_enforce_storage_cap:43,file_storage_status:44,conflicts_list:45,conflicts_get:46,conflicts_resolve:47,conflicts_accept_local:48,conflicts_accept_remote:49,conflicts_watch:50}
B.cD=new A.cD(B.ct,51,t.M)
B.cE=new A.ic(0,"insert")
B.cF=new A.ic(1,"update")
B.cG=new A.ic(2,"delete")
B.cI=new A.ij(-1,null)
B.cJ=new A.ik("_clientToken")
B.T=new A.bV(0,"closed")
B.cK=new A.bV(1,"opening")
B.b7=new A.bV(2,"offline")
B.an=new A.bV(3,"authRequired")
B.b8=new A.bV(4,"idle")
B.cL=new A.bV(5,"pulling")
B.cM=new A.bV(6,"pushing")
B.cN=new A.bV(7,"backoff")
B.b9=new A.bV(8,"paused")
B.K=new A.b9(B.aa,B.aa,0,0,0,0,!1)
B.cQ=A.bA("h5")
B.cR=A.bA("dJ")
B.cS=A.bA("yt")
B.cT=A.bA("po")
B.cU=A.bA("pp")
B.cV=A.bA("q2")
B.cW=A.bA("q3")
B.cX=A.bA("q4")
B.cY=A.bA("L")
B.cZ=A.bA("j")
B.d_=A.bA("i9")
B.d0=A.bA("tK")
B.d1=A.bA("tL")
B.d2=A.bA("tM")
B.d3=A.bA("cw")
B.aw=new A.im(!1)
B.d4=new A.im(!0)
B.d5=new A.cU(14)
B.d6=new A.cU(522)
B.d7=new A.cU(778)
B.d8=new A.x2(B.i,A.I9())
B.d9=new A.x3(B.i,A.Ia())
B.da=new A.x4(B.i,A.Ib())
B.db=new A.x5(B.i,A.Ic())
B.dc=new A.mS(B.i,A.Id())
B.dd=new A.x6(B.i,A.Ie())
B.de=new A.x7(B.i,A.If())
B.df=new A.x8(B.i,A.Ig())
B.dg=new A.x9(B.i,A.Ih())
B.dh=new A.xb(B.i,A.Ij())
B.di=new A.xc(B.i,A.Ik())
B.dj=new A.xa(B.i,A.Ii())
B.dk=new A.mT(B.i,A.Il())
B.co=new A.aM(B.D,[],A.ac("aM<j?,j?>"))
B.ax=new A.mU(B.i,B.co)})();(function staticFields(){$.we=null
$.ex=A.l([],t.hf)
$.HH=null
$.AO=null
$.rB=0
$.kS=A.Hy()
$.Ab=null
$.Aa=null
$.CN=null
$.Cv=null
$.CX=null
$.xL=null
$.y0=null
$.zE=null
$.wq=A.l([],A.ac("B<p<j>?>"))
$.fR=null
$.jd=null
$.je=null
$.zt=!1
$.u=B.i
$.wu=null
$.Bj=null
$.Bk=null
$.Bl=null
$.Bm=null
$.za=A.v8("_lastQuoRemDigits")
$.zb=A.v8("_lastQuoRemUsed")
$.ix=A.v8("_lastRemUsed")
$.zc=A.v8("_lastRem_nsh")
$.B7=""
$.B8=null
$.BZ=null
$.xl=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"JA","Df",()=>A.xT("_$dart_dartClosure"))
s($,"Jz","eD",()=>A.xT("_$dart_dartClosure_dartJSInterop"))
s($,"Kd","na",()=>A.qX(0))
s($,"KC","DP",()=>B.i.aZ(new A.y3(),A.ac("y<~>")))
s($,"Kv","DM",()=>A.l([new J.ki()],A.ac("B<i5>")))
s($,"JS","Dj",()=>A.cT(A.tI({
toString:function(){return"$receiver$"}})))
s($,"JT","Dk",()=>A.cT(A.tI({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"JU","Dl",()=>A.cT(A.tI(null)))
s($,"JV","Dm",()=>A.cT(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"JY","Dp",()=>A.cT(A.tI(void 0)))
s($,"JZ","Dq",()=>A.cT(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"JX","Do",()=>A.cT(A.B4(null)))
s($,"JW","Dn",()=>A.cT(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"K0","Ds",()=>A.cT(A.B4(void 0)))
s($,"K_","Dr",()=>A.cT(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"K3","zP",()=>A.FS())
s($,"JG","dG",()=>$.DP())
s($,"JF","Dg",()=>A.Ga(!1,B.i,t.y))
s($,"Kj","DC",()=>A.qX(4096))
s($,"Kh","DA",()=>new A.wZ().$0())
s($,"Ki","DB",()=>new A.wY().$0())
s($,"K5","zQ",()=>A.F5(A.aY(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"K4","Dt",()=>A.qX(0))
s($,"Kc","c1",()=>A.iw(0))
s($,"Ka","eE",()=>A.iw(1))
s($,"Kb","Dw",()=>A.iw(2))
s($,"K8","zS",()=>$.eE().bw(0))
s($,"K6","zR",()=>A.iw(1e4))
r($,"K9","Dv",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"K7","Du",()=>A.qX(8))
s($,"Ke","Dx",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Kf","Dy",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Kg","Dz",()=>typeof URLSearchParams=="function")
s($,"Km","eF",()=>A.jm(B.cZ))
s($,"JL","jr",()=>{A.Fg()
return $.rB})
s($,"Kn","DF",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"JJ","yn",()=>{var q=new A.wd(A.F4(8))
q.om()
return q})
s($,"JB","jq",()=>A.E6(B.cq.ga5(A.F6(A.aY(A.l([1],t.t)))),0,null).getInt8(0)===1?B.L:B.aD)
s($,"Kz","zU",()=>A.F8(A.n5(A.C5(A.yh(),"crypto"),"subtle"))&&A.AA(A.n5(A.C5(A.yh(),"window"),"isSecureContext")))
s($,"Ju","Da",()=>A.E5()?new A.ny(null):A.Em(null))
s($,"Jy","De",()=>$.Da())
r($,"Jx","Dd",()=>$.De())
s($,"Jp","zK",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Kp","yo",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"JH","Dh",()=>A.AS())
s($,"Kk","zT",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"Kl","DD",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"KE","DQ",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Ko","DG",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Ks","DJ",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Kr","DI",()=>A.af("\\\\(.)",!0,!1))
s($,"KB","DO",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"KF","DR",()=>A.af("(?:"+$.DG().a+")*",!0,!1))
s($,"Ku","DL",()=>A.AT())
s($,"KD","yp",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"Hh","DE",()=>A.En().a)
s($,"JC","zM",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"Jv","Db",()=>A.yB("declaredNames",t.gi))
s($,"Jw","Dc",()=>A.yB("fieldByName",A.ac("H<k,aQ>")))
s($,"JR","n9",()=>new A.j())
s($,"Jt","zL",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"Kq","DH",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Kx","h3",()=>new A.oj($.zN()))
s($,"JO","Di",()=>new A.rx(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"JQ","n8",()=>new A.uc(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"JP","js",()=>new A.tT(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"JN","zN",()=>A.FC())
s($,"Js","D9",()=>$.eE().bx(0,63).bw(0))
s($,"Jr","D8",()=>{var q=$.eE()
return q.bx(0,63).fn(0,q)})
s($,"Jq","n7",()=>A.AT())
s($,"K1","zO",()=>A.yB(null,t.S))
s($,"Kw","DN",()=>A.ER(A.l([A.z4("files"),A.z4("blocks")],t.s)))
s($,"JD","ym",()=>{var q,p,o=A.D(t.N,A.ac("eQ"))
for(q=0;q<2;++q){p=B.cg[q]
o.j(0,p.c,p)}return o})
s($,"Kt","DK",()=>A.AS())
r($,"K2","jt",()=>{var q="navigator"
return A.AA(A.EM(A.n5(A.yh(),q),A.z4("locks")))?A.n5(A.n5(A.yh(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.f_,ArrayBuffer:A.eZ,ArrayBufferView:A.hP,DataView:A.hO,Float32Array:A.kC,Float64Array:A.kD,Int16Array:A.kE,Int32Array:A.kF,Int8Array:A.kG,Uint16Array:A.hQ,Uint32Array:A.hR,Uint8ClampedArray:A.hS,CanvasPixelArray:A.hS,Uint8Array:A.e5})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.f0.$nativeSuperclassTag="ArrayBufferView"
A.iQ.$nativeSuperclassTag="ArrayBufferView"
A.iR.$nativeSuperclassTag="ArrayBufferView"
A.dh.$nativeSuperclassTag="ArrayBufferView"
A.iS.$nativeSuperclassTag="ArrayBufferView"
A.iT.$nativeSuperclassTag="ArrayBufferView"
A.bG.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.J_
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
