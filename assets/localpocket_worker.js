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
if(a[b]!==s){A.J7(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.zt(b)
return new s(c,this)}:function(){if(s===null)s=A.zt(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.zt(a).prototype
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
zD(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xQ(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.zB==null){A.ID()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.B_("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.wa
if(o==null)o=$.wa=A.xP(n)
p=q[o]}if(p!=null)return p
p=A.IN(a)
if(p!=null)return p
if(typeof a=="function")return B.bO
s=Object.getPrototypeOf(a)
if(s==null)return B.b1
if(s===Object.prototype)return B.b1
if(typeof q=="function"){o=$.wa
if(o==null)o=$.wa=A.xP(n)
Object.defineProperty(q,o,{value:B.av,enumerable:false,writable:true,configurable:true})
return B.av}return B.av},
yF(a,b){if(a<0||a>4294967295)throw A.b(A.ak(a,0,4294967295,"length",null))
return J.Au(new Array(a),b)},
At(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
As(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
Au(a,b){var s=A.l(a,b.i("B<0>"))
s.$flags=1
return s},
Ez(a,b){return J.zW(a,b)},
Av(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EC(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Av(r))break;++b}return b},
Aw(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Av(r))break}return b},
dE(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hA.prototype
return J.kk.prototype}if(typeof a=="string")return J.da.prototype
if(a==null)return J.hB.prototype
if(typeof a=="boolean")return J.kj.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xQ(a)},
K(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xQ(a)},
aA(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xQ(a)},
Iv(a){if(typeof a=="number")return J.dY.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dm.prototype
return a},
Iw(a){if(typeof a=="number")return J.dY.prototype
if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dm.prototype
return a},
xO(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dm.prototype
return a},
ji(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.j)return a
return J.xQ(a)},
t(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dE(a).R(a,b)},
T(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.CI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)},
bN(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.CI(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).j(a,b,c)},
bp(a,b){return J.aA(a).u(a,b)},
zR(a,b){return J.aA(a).F(a,b)},
zS(a,b){return J.xO(a).hl(a,b)},
na(a){return J.ji(a).lZ(a)},
zT(a,b,c){return J.ji(a).hm(a,b,c)},
zU(a,b,c){return J.ji(a).m_(a,b,c)},
DI(a){return J.ji(a).m0(a)},
bB(a,b,c){return J.ji(a).hn(a,b,c)},
js(a,b){return J.aA(a).hq(a,b)},
zV(a,b,c){return J.Iv(a).cT(a,b,c)},
zW(a,b){return J.Iw(a).X(a,b)},
ym(a,b){return J.K(a).C(a,b)},
nb(a,b){return J.aA(a).a4(a,b)},
jt(a,b){return J.aA(a).dQ(a,b)},
DJ(a){return J.ji(a).ga5(a)},
c2(a){return J.aA(a).gD(a)},
a2(a){return J.dE(a).gI(a)},
bO(a){return J.K(a).gA(a)},
eG(a){return J.K(a).gW(a)},
I(a){return J.aA(a).gt(a)},
nc(a){return J.aA(a).ga3(a)},
ao(a){return J.K(a).gl(a)},
bq(a){return J.dE(a).gak(a)},
yn(a){return J.aA(a).gau(a)},
DK(a,b,c){return J.aA(a).fe(a,b,c)},
DL(a,b,c){return J.aA(a).aC(a,b,c)},
aL(a,b,c){return J.aA(a).c5(a,b,c)},
DM(a,b,c){return J.xO(a).dZ(a,b,c)},
DN(a,b){return J.K(a).sl(a,b)},
DO(a,b,c,d,e){return J.aA(a).af(a,b,c,d,e)},
nd(a,b){return J.aA(a).bd(a,b)},
zX(a,b){return J.aA(a).c8(a,b)},
DP(a,b){return J.xO(a).dh(a,b)},
DQ(a,b){return J.xO(a).S(a,b)},
yo(a,b){return J.aA(a).cv(a,b)},
DR(a){return J.aA(a).e8(a)},
ap(a){return J.dE(a).k(a)},
zY(a,b){return J.aA(a).ke(a,b)},
kh:function kh(){},
kj:function kj(){},
hB:function hB(){},
au:function au(){},
dc:function dc(){},
kP:function kP(){},
dm:function dm(){},
bE:function bE(){},
bf:function bf(){},
eT:function eT(){},
B:function B(a){this.$ti=a},
ki:function ki(){},
q2:function q2(a){this.$ti=a},
eH:function eH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dY:function dY(){},
hA:function hA(){},
kk:function kk(){},
da:function da(){}},A={yI:function yI(){},
eJ(a,b,c){if(t.O.b(a))return new A.iC(a,b.i("@<0>").T(c).i("iC<1,2>"))
return new A.dK(a,b.i("@<0>").T(c).i("dK<1,2>"))},
Ay(a){return new A.db("Field '"+a+"' has been assigned during initialization.")},
Az(a){return new A.db("Field '"+a+"' has not been initialized.")},
ED(a){return new A.db("Field '"+a+"' has already been initialized.")},
xT(a){var s,r=a^48
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
zC(a){var s,r
for(s=$.ex.length,r=0;r<s;++r)if(a===$.ex[r])return!0
return!1},
cf(a,b,c,d){A.b0(b,"start")
if(c!=null){A.b0(c,"end")
if(b>c)A.v(A.ak(b,0,c,"start",null))}return new A.ce(a,b,c,d.i("ce<0>"))},
e3(a,b,c,d){if(t.O.b(a))return new A.dS(a,b,c.i("@<0>").T(d).i("dS<1,2>"))
return new A.c7(a,b,c.i("@<0>").T(d).i("c7<1,2>"))},
AT(a,b,c){var s="takeCount"
A.jw(b,s)
A.b0(b,s)
if(t.O.b(a))return new A.hj(a,b,c.i("hj<0>"))
return new A.ee(a,b,c.i("ee<0>"))},
AR(a,b,c){var s="count"
if(t.O.b(a)){A.jw(b,s)
A.b0(b,s)
return new A.eO(a,b,c.i("eO<0>"))}A.jw(b,s)
A.b0(b,s)
return new A.cN(a,b,c.i("cN<0>"))},
at(){return new A.bk("No element")},
hy(){return new A.bk("Too many elements")},
Ar(){return new A.bk("Too few elements")},
l6(a,b,c,d){if(c-b<=32)A.Fh(a,b,c,d)
else A.Fg(a,b,c,d)},
Fh(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.K(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Fg(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.b.K(a5-a4+1,6),h=a4+i,g=a5-i,f=B.b.K(a4+a5,2),e=f-i,d=f+i,c=J.K(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
vs:function vs(a){this.a=0
this.b=a},
v2:function v2(a){this.a=0
this.b=a},
dr:function dr(){},
jN:function jN(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b){this.a=a
this.$ti=b},
iC:function iC(a,b){this.a=a
this.$ti=b},
iy:function iy(){},
v3:function v3(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b){this.a=a
this.$ti=b},
nF:function nF(a,b){this.a=a
this.b=b},
nE:function nE(a){this.a=a},
db:function db(a){this.a=a},
kV:function kV(a){this.a=a},
c4:function c4(a){this.a=a},
y_:function y_(){},
t1:function t1(){},
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
hm:function hm(a,b,c){this.a=a
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
hj:function hj(a,b,c){this.a=a
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
hp:function hp(){},
lq:function lq(){},
fj:function fj(){},
e9:function e9(a,b){this.a=a
this.$ti=b},
ii:function ii(a){this.a=a},
j9:function j9(){},
E8(a,b,c){var s,r,q,p,o,n,m=A.m(a),l=A.eU(new A.U(a,m.i("U<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.A)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aM(q,A.eU(new A.av(a,m.i("av<2>")),!0,c),b.i("@<0>").T(c).i("aM<1,2>"))
n.$keys=l
return n}return new A.hf(A.b_(a,b,c),b.i("@<0>").T(c).i("hf<1,2>"))},
E9(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
Ea(){throw A.b(A.Y("Cannot modify constant Set"))},
D0(a){var s=A.D_(a)
if(s!=null)return s
return"minified:"+a},
CI(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ap(a)
return s},
e8(a){var s,r=$.AI
if(r==null)r=$.AI=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hY(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
F5(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.d9(a)
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
AK(a){var s,r,q
if(a==null||typeof a=="number"||A.c0(a))return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dN)return a.k(0)
if(a instanceof A.er)return a.lM(!0)
s=$.DC()
for(r=0;r<1;++r){q=s[r].x_(a)
if(q!=null)return q}return"Instance of '"+A.kR(a)+"'"},
F1(){return Date.now()},
F4(){var s,r
if($.rx!==0)return
$.rx=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.rx=1e6
$.kS=new A.rw(r)},
F0(){if(!!self.location)return self.location.href
return null},
AH(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
F6(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r){q=a[r]
if(!A.aE(q))throw A.b(A.ez(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.b.ac(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.ez(q))}return A.AH(p)},
AL(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.aE(q))throw A.b(A.ez(q))
if(q<0)throw A.b(A.ez(q))
if(q>65535)return A.F6(a)}return A.AH(a)},
F7(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bh(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.ac(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ak(a,0,1114111,null,null))},
F8(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.b.aj(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.b.K(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bg(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
yS(a){return a.c?A.bg(a).getUTCFullYear()+0:A.bg(a).getFullYear()+0},
yQ(a){return a.c?A.bg(a).getUTCMonth()+1:A.bg(a).getMonth()+1},
rv(a){return a.c?A.bg(a).getUTCDate()+0:A.bg(a).getDate()+0},
yO(a){return a.c?A.bg(a).getUTCHours()+0:A.bg(a).getHours()+0},
yP(a){return a.c?A.bg(a).getUTCMinutes()+0:A.bg(a).getMinutes()+0},
yR(a){return a.c?A.bg(a).getUTCSeconds()+0:A.bg(a).getSeconds()+0},
AJ(a){return a.c?A.bg(a).getUTCMilliseconds()+0:A.bg(a).getMilliseconds()+0},
F3(a){return B.b.aj((a.c?A.bg(a).getUTCDay()+0:A.bg(a).getDay()+0)+6,7)+1},
F2(a){var s=a.$thrownJsError
if(s==null)return null
return A.a7(s)},
kT(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aF(a,s)
a.$thrownJsError=s
s.stack=b.k(0)}},
xG(a,b){var s,r="index"
if(!A.aE(b))return new A.bC(!0,b,r,null)
s=J.ao(a)
if(b<0||b>=s)return A.ke(b,s,a,null,r)
return A.rW(b,r)},
In(a,b,c){if(a<0||a>c)return A.ak(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ak(b,a,c,"end",null)
return new A.bC(!0,b,"end",null)},
ez(a){return new A.bC(!0,a,null,null)},
b(a){return A.aF(a,new Error())},
aF(a,b){var s
if(a==null)a=new A.cS()
b.dartException=a
s=A.J8
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
J8(){return J.ap(this.dartException)},
v(a,b){throw A.aF(a,b==null?new Error():b)},
E(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.v(A.GZ(a,b,c),s)},
GZ(a,b,c){var s,r,q,p,o,n,m,l,k
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
a=A.CR(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.tD(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
tE(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
AZ(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
yJ(a,b){var s=b==null,r=s?null:b.method
return new A.kl(a,r,s?null:b.receiver)},
C(a){if(a==null)return new A.kJ(a)
if(a instanceof A.hl)return A.dF(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.dF(a,a.dartException)
return A.HQ(a)},
dF(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
HQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.ac(r,16)&8191)===10)switch(q){case 438:return A.dF(a,A.yJ(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.dF(a,new A.hS())}}if(a instanceof TypeError){p=$.D9()
o=$.Da()
n=$.Db()
m=$.Dc()
l=$.Df()
k=$.Dg()
j=$.De()
$.Dd()
i=$.Di()
h=$.Dh()
g=p.bJ(s)
if(g!=null)return A.dF(a,A.yJ(s,g))
else{g=o.bJ(s)
if(g!=null){g.method="call"
return A.dF(a,A.yJ(s,g))}else if(n.bJ(s)!=null||m.bJ(s)!=null||l.bJ(s)!=null||k.bJ(s)!=null||j.bJ(s)!=null||m.bJ(s)!=null||i.bJ(s)!=null||h.bJ(s)!=null)return A.dF(a,new A.hS())}return A.dF(a,new A.lp(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ib()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.dF(a,new A.bC(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ib()
return a},
a7(a){var s
if(a instanceof A.hl)return a.b
if(a==null)return new A.iV(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iV(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jk(a){if(a==null)return J.a2(a)
if(typeof a=="object")return A.e8(a)
return J.a2(a)},
Ih(a){if(typeof a=="number")return B.t.gI(a)
if(a instanceof A.mF)return A.e8(a)
if(a instanceof A.er)return a.gI(a)
if(a instanceof A.ii)return a.gI(0)
return A.jk(a)},
CE(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
It(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
Ha(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Ag("Unsupported number of arguments for wrapped closure"))},
dC(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Ii(a,b)
a.$identity=s
return s},
Ii(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Ha)},
E2(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.tc().constructor.prototype):Object.create(new A.h7(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Aa(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.DZ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Aa(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
DZ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.DU)}throw A.b("Error in functionType of tearoff")},
E_(a,b,c,d){var s=A.A8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Aa(a,b,c,d){if(c)return A.E1(a,b,d)
return A.E_(b.length,d,a,b)},
E0(a,b,c,d){var s=A.A8,r=A.DV
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
E1(a,b,c){var s,r
if($.A6==null)$.A6=A.A5("interceptor")
if($.A7==null)$.A7=A.A5("receiver")
s=b.length
r=A.E0(s,c,a,b)
return r},
zt(a){return A.E2(a)},
DU(a,b){return A.j3(v.typeUniverse,A.bz(a.a),b)},
A8(a){return a.a},
DV(a){return a.b},
A5(a){var s,r,q,p=new A.h7("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
xP(a){return v.getIsolateTag(a)},
Jc(a,b){var s=$.u
if(s===B.i)return a
return s.hp(a,b)},
CV(){return v.G},
Kj(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IN(a){var s,r,q,p,o,n=$.CG.$1(a),m=$.xH[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xX[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Cn.$2(a,n)
if(q!=null){m=$.xH[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xX[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.xZ(s)
$.xH[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.xX[n]=s
return s}if(p==="-"){o=A.xZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.CO(a,s)
if(p==="*")throw A.b(A.B_(n))
if(v.leafTags[n]===true){o=A.xZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.CO(a,s)},
CO(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.zD(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
xZ(a){return J.zD(a,!1,null,!!a.$ibF)},
IP(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.xZ(s)
else return J.zD(s,c,null,null)},
ID(){if(!0===$.zB)return
$.zB=!0
A.IE()},
IE(){var s,r,q,p,o,n,m,l
$.xH=Object.create(null)
$.xX=Object.create(null)
A.IC()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.CQ.$1(o)
if(n!=null){m=A.IP(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
IC(){var s,r,q,p,o,n,m=B.bn()
m=A.fU(B.bo,A.fU(B.bp,A.fU(B.aF,A.fU(B.aF,A.fU(B.bq,A.fU(B.br,A.fU(B.bs(B.aE),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.CG=new A.xU(p)
$.Cn=new A.xV(o)
$.CQ=new A.xW(n)},
fU(a,b){return a(b)||b},
Gh(a,b){var s
for(s=0;s<a.length;++s)if(!J.t(a[s],b[s]))return!1
return!0},
Im(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yH(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a3("Illegal RegExp pattern ("+String(o)+")",a,null))},
J1(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eS){s=B.a.ag(a,c)
return b.b.test(s)}else return!J.zS(b,B.a.ag(a,c)).gA(0)},
CD(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
CR(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.J3(a,b,c)
if(b instanceof A.eS){s=b.glk()
s.lastIndex=0
return a.replace(s,A.CD(c))}return A.J2(a,b,c)},
J2(a,b,c){var s,r,q,p
for(s=J.zS(b,a),s=s.gt(s),r=0,q="";s.m();){p=s.gn()
q=q+a.substring(r,p.gN())+c
r=p.gM()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
J3(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.CR(b),"g"),A.CD(c))},
Ch(a){return a},
CW(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hl(0,a),s=new A.lM(s.a,s.b,s.c),r=t.lu,q=0,p="";s.m();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.Ch(B.a.q(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.Ch(B.a.ag(a,q)))
return s.charCodeAt(0)==0?s:s},
J4(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.CX(a,s,s+b.length,c)},
CX(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
az:function az(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
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
hf:function hf(a,b){this.a=a
this.$ti=b},
eK:function eK(){},
of:function of(a,b,c){this.a=a
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
ht:function ht(a,b){this.a=a
this.$ti=b},
hg:function hg(){},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
pX:function pX(){},
hx:function hx(a,b){this.a=a
this.$ti=b},
rw:function rw(a){this.a=a},
i3:function i3(){},
tD:function tD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hS:function hS(){},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
lp:function lp(a){this.a=a},
kJ:function kJ(a){this.a=a},
hl:function hl(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a
this.b=null},
dN:function dN(){},
nK:function nK(){},
nL:function nL(){},
tB:function tB(){},
tc:function tc(){},
h7:function h7(a,b){this.a=a
this.b=b},
l1:function l1(a){this.a=a},
bt:function bt(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
q3:function q3(a){this.a=a},
q5:function q5(a,b){var _=this
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
hD:function hD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hC:function hC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
xU:function xU(a){this.a=a},
xV:function xV(a){this.a=a},
xW:function xW(a){this.a=a},
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
wH:function wH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
J7(a){throw A.aF(A.Ay(a),new Error())},
x(){throw A.aF(A.Az(""),new Error())},
yf(){throw A.aF(A.ED(""),new Error())},
ye(){throw A.aF(A.Ay(""),new Error())},
zc(){var s=new A.lU("")
return s.b=s},
v4(a){var s=new A.lU(a)
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
EU(a){return new DataView(new ArrayBuffer(a))},
AC(a,b,c){A.fP(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
cK(a,b,c){A.fP(a,b,c)
c=B.b.K(a.byteLength-b,4)
return new Int32Array(a,b,c)},
EV(a){return new Int8Array(a)},
EW(a){return new Uint16Array(a)},
AD(a,b,c){A.fP(a,b,c)
if(c==null)c=B.b.K(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
qS(a){return new Uint8Array(a)},
bH(a,b,c){A.fP(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
d_(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.xG(b,a))},
d0(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.In(a,b,c))
if(b==null)return c
return b},
f_:function f_(){},
eZ:function eZ(){},
hN:function hN(){},
mI:function mI(a){this.a=a},
hM:function hM(){},
f0:function f0(){},
dh:function dh(){},
bG:function bG(){},
kC:function kC(){},
kD:function kD(){},
kE:function kE(){},
kF:function kF(){},
kG:function kG(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
e5:function e5(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
yW(a,b){var s=b.c
return s==null?b.c=A.j1(a,"y",[b.x]):s},
AP(a){var s=a.w
if(s===6||s===7)return A.AP(a.x)
return s===11||s===12},
Ff(a){return a.as},
CN(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.wN(v.typeUniverse,a,!1)},
IH(a,b){var s,r,q,p,o
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
return A.Bv(a1,r,!0)
case 7:s=a2.x
r=A.dA(a1,s,a3,a4)
if(r===s)return a2
return A.Bu(a1,r,!0)
case 8:q=a2.y
p=A.fT(a1,q,a3,a4)
if(p===q)return a2
return A.j1(a1,a2.x,p)
case 9:o=a2.x
n=A.dA(a1,o,a3,a4)
m=a2.y
l=A.fT(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.zg(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fT(a1,j,a3,a4)
if(i===j)return a2
return A.Bw(a1,k,i)
case 11:h=a2.x
g=A.dA(a1,h,a3,a4)
f=a2.y
e=A.HL(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Bt(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fT(a1,d,a3,a4)
o=a2.x
n=A.dA(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.zh(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jA("Attempted to substitute unexpected RTI kind "+a0))}},
fT(a,b,c,d){var s,r,q,p,o=b.length,n=A.wX(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dA(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
HM(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.wX(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dA(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
HL(a,b,c,d){var s,r=b.a,q=A.fT(a,r,c,d),p=b.b,o=A.fT(a,p,c,d),n=b.c,m=A.HM(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.m7()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
n2(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Ix(s)
return a.$S()}return null},
IG(a,b){var s
if(A.AP(b))if(a instanceof A.dN){s=A.n2(a)
if(s!=null)return s}return A.bz(a)},
bz(a){if(a instanceof A.j)return A.m(a)
if(Array.isArray(a))return A.a6(a)
return A.zo(J.dE(a))},
a6(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.zo(a)},
zo(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.H8(a,s)},
H8(a,b){var s=a instanceof A.dN?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Gr(v.typeUniverse,s.name)
b.$ccache=r
return r},
Ix(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.wN(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
d1(a){return A.by(A.m(a))},
zA(a){var s=A.n2(a)
return A.by(s==null?A.bz(a):s)},
zr(a){var s
if(a instanceof A.er)return a.l9()
s=a instanceof A.dN?A.n2(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.bq(a).a
if(Array.isArray(a))return A.a6(a)
return A.bz(a)},
by(a){var s=a.r
return s==null?a.r=new A.mF(a):s},
Iq(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.j3(v.typeUniverse,A.zr(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.By(v.typeUniverse,s,A.zr(q[r]))
return A.j3(v.typeUniverse,s,a)},
bA(a){return A.by(A.wN(v.typeUniverse,a,!1))},
H7(a){var s=this
s.b=A.HJ(s)
return s.b(a)},
HJ(a){var s,r,q,p
if(a===t.K)return A.Hg
if(A.eA(a))return A.Hk
s=a.w
if(s===6)return A.H4
if(s===1)return A.C0
if(s===7)return A.Hb
r=A.HI(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eA)){a.f="$i"+q
if(q==="p")return A.He
if(a===t.m)return A.Hd
return A.Hj}}else if(s===10){p=A.Im(a.x,a.y)
return p==null?A.C0:p}return A.H2},
HI(a){if(a.w===8){if(a===t.S)return A.aE
if(a===t.i||a===t.o)return A.Hf
if(a===t.N)return A.Hi
if(a===t.y)return A.c0}return null},
H6(a){var s=this,r=A.H1
if(A.eA(s))r=A.GH
else if(s===t.K)r=A.GG
else if(A.fY(s)){r=A.H3
if(s===t.I)r=A.b4
else if(s===t.v)r=A.aa
else if(s===t.o9)r=A.BN
else if(s===t.jh)r=A.GF
else if(s===t.dz)r=A.BO
else if(s===t.B)r=A.BP}else if(s===t.S)r=A.ah
else if(s===t.N)r=A.M
else if(s===t.y)r=A.fO
else if(s===t.o)r=A.GE
else if(s===t.i)r=A.ev
else if(s===t.m)r=A.b5
s.a=r
return s.a(a)},
H2(a){var s=this
if(a==null)return A.fY(s)
return A.IK(v.typeUniverse,A.IG(a,s),s)},
H4(a){if(a==null)return!0
return this.x.b(a)},
Hj(a){var s,r=this
if(a==null)return A.fY(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dE(a)[s]},
He(a){var s,r=this
if(a==null)return A.fY(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dE(a)[s]},
Hd(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
C_(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
H1(a){var s=this
if(a==null){if(A.fY(s))return a}else if(s.b(a))return a
throw A.aF(A.BU(a,s),new Error())},
H3(a){var s=this
if(a==null||s.b(a))return a
throw A.aF(A.BU(a,s),new Error())},
BU(a,b){return new A.j_("TypeError: "+A.Bk(a,A.bn(b,null)))},
Bk(a,b){return A.hk(a)+": type '"+A.bn(A.zr(a),null)+"' is not a subtype of type '"+b+"'"},
c_(a,b){return new A.j_("TypeError: "+A.Bk(a,b))},
Hb(a){var s=this
return s.x.b(a)||A.yW(v.typeUniverse,s).b(a)},
Hg(a){return a!=null},
GG(a){if(a!=null)return a
throw A.aF(A.c_(a,"Object"),new Error())},
Hk(a){return!0},
GH(a){return a},
C0(a){return!1},
c0(a){return!0===a||!1===a},
fO(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aF(A.c_(a,"bool"),new Error())},
BN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aF(A.c_(a,"bool?"),new Error())},
ev(a){if(typeof a=="number")return a
throw A.aF(A.c_(a,"double"),new Error())},
BO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.c_(a,"double?"),new Error())},
aE(a){return typeof a=="number"&&Math.floor(a)===a},
ah(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aF(A.c_(a,"int"),new Error())},
b4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aF(A.c_(a,"int?"),new Error())},
Hf(a){return typeof a=="number"},
GE(a){if(typeof a=="number")return a
throw A.aF(A.c_(a,"num"),new Error())},
GF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.c_(a,"num?"),new Error())},
Hi(a){return typeof a=="string"},
M(a){if(typeof a=="string")return a
throw A.aF(A.c_(a,"String"),new Error())},
aa(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aF(A.c_(a,"String?"),new Error())},
b5(a){if(A.C_(a))return a
throw A.aF(A.c_(a,"JSObject"),new Error())},
BP(a){if(a==null)return a
if(A.C_(a))return a
throw A.aF(A.c_(a,"JSObject?"),new Error())},
Cc(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bn(a[q],b)
return s},
Hy(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Cc(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bn(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
BY(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
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
if(m===8){p=A.HP(a.x)
o=a.y
return o.length>0?p+("<"+A.Cc(o,b)+">"):p}if(m===10)return A.Hy(a,b)
if(m===11)return A.BY(a,b,null)
if(m===12)return A.BY(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
HP(a){var s=A.D_(a)
if(s!=null)return s
return"minified:"+a},
Gs(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Gr(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.wN(a,b,!1)
else if(typeof m=="number"){s=m
r=A.j2(a,5,"#")
q=A.wX(s)
for(p=0;p<s;++p)q[p]=r
o=A.j1(a,b,q)
n[b]=o
return o}else return m},
Gq(a,b){return A.BL(a.tR,b)},
Gp(a,b){return A.BL(a.eT,b)},
wN(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Bx(a,null,b,!1)
r.set(b,s)
return s},
j3(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Bx(a,b,c,!0)
q.set(c,r)
return r},
By(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.zg(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Bx(a,b,c,d){return A.Gf(A.G9(a,b,c,d))},
dz(a,b){b.a=A.H6
b.b=A.H7
return b},
j2(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ca(null,null)
s.w=b
s.as=c
r=A.dz(a,s)
a.eC.set(c,r)
return r},
Bv(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Gn(a,b,r,c)
a.eC.set(r,s)
return s},
Gn(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eA(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.fY(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.ca(null,null)
q.w=6
q.x=b
q.as=c
return A.dz(a,q)},
Bu(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Gl(a,b,r,c)
a.eC.set(r,s)
return s},
Gl(a,b,c,d){var s,r
if(d){s=b.w
if(A.eA(b)||b===t.K)return b
else if(s===1)return A.j1(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.ca(null,null)
r.w=7
r.x=b
r.as=c
return A.dz(a,r)},
Go(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ca(null,null)
s.w=13
s.x=b
s.as=q
r=A.dz(a,s)
a.eC.set(q,r)
return r},
j0(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Gk(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
j1(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.j0(c)+">"
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
zg(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.j0(r)+">")
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
Bw(a,b,c){var s,r,q="+"+(b+"("+A.j0(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ca(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dz(a,s)
a.eC.set(q,r)
return r},
Bt(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.j0(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.j0(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Gk(i)+"}"}r=n+(g+")")
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
zh(a,b,c,d){var s,r=b.as+("<"+A.j0(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Gm(a,b,c,r,d)
a.eC.set(r,s)
return s},
Gm(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.wX(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dA(a,b,r,0)
m=A.fT(a,c,r,0)
return A.zh(a,n,m,c!==m)}}l=new A.ca(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dz(a,l)},
G9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Gf(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Gb(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Bp(a,r,l,k,!1)
else if(q===46)r=A.Bp(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eq(a.u,a.e,k.pop()))
break
case 94:k.push(A.Go(a.u,k.pop()))
break
case 35:k.push(A.j2(a.u,5,"#"))
break
case 64:k.push(A.j2(a.u,2,"@"))
break
case 126:k.push(A.j2(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Gd(a,k)
break
case 38:A.Gc(a,k)
break
case 63:p=a.u
k.push(A.Bv(p,A.eq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Bu(p,A.eq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Ga(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Bq(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Gg(a.u,a.e,o)
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
Gb(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Bp(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Gs(s,o.x)[p]
if(n==null)A.v('No "'+p+'" in "'+A.Ff(o)+'"')
d.push(A.j3(s,o,n))}else d.push(p)
return m},
Gd(a,b){var s,r=a.u,q=A.Bo(a,b),p=b.pop()
if(typeof p=="string")b.push(A.j1(r,p,q))
else{s=A.eq(r,a.e,p)
switch(s.w){case 11:b.push(A.zh(r,s,q,a.n))
break
default:b.push(A.zg(r,s,q))
break}}},
Ga(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Bo(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eq(p,a.e,o)
q=new A.m7()
q.a=s
q.b=n
q.c=m
b.push(A.Bt(p,r,q))
return
case-4:b.push(A.Bw(p,b.pop(),s))
return
default:throw A.b(A.jA("Unexpected state under `()`: "+A.r(o)))}},
Gc(a,b){var s=b.pop()
if(0===s){b.push(A.j2(a.u,1,"0&"))
return}if(1===s){b.push(A.j2(a.u,4,"1&"))
return}throw A.b(A.jA("Unexpected extended operation "+A.r(s)))},
Bo(a,b){var s=b.splice(a.p)
A.Bq(a.u,a.e,s)
a.p=b.pop()
return s},
eq(a,b,c){if(typeof c=="string")return A.j1(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Ge(a,b,c)}else return c},
Bq(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eq(a,b,c[s])},
Gg(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eq(a,b,c[s])},
Ge(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jA("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jA("Bad index "+c+" for "+b.k(0)))},
IK(a,b,c){var s,r=b.d
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
return A.aK(a,A.yW(a,b),c,d,e)}if(s===6)return A.aK(a,p,c,d,e)&&A.aK(a,b.x,c,d,e)
if(q===7){if(A.aK(a,b,c,d.x,e))return!0
return A.aK(a,b,c,A.yW(a,d),e)}if(q===6)return A.aK(a,b,c,p,e)||A.aK(a,b,c,d.x,e)
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
if(!A.aK(a,j,c,i,e)||!A.aK(a,i,e,j,c))return!1}return A.BZ(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.BZ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Hc(a,b,c,d,e)}if(o&&q===10)return A.Hh(a,b,c,d,e)
return!1},
BZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Hc(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j3(a,b,r[o])
return A.BM(a,p,null,c,d.y,e)}return A.BM(a,b.y,null,c,d.y,e)},
BM(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aK(a,b[s],d,e[s],f))return!1
return!0},
Hh(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aK(a,r[s],c,q[s],e))return!1
return!0},
fY(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.eA(a))if(s!==6)r=s===7&&A.fY(a.x)
return r},
eA(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
BL(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
wX(a){return a>0?new Array(a):v.typeUniverse.sEA},
ca:function ca(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
m7:function m7(){this.c=this.b=this.a=null},
mF:function mF(a){this.a=a},
m4:function m4(){},
j_:function j_(a){this.a=a},
FG(){var s,r,q
if(self.scheduleImmediate!=null)return A.HS()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dC(new A.uL(s),1)).observe(r,{childList:true})
return new A.uK(s,r,q)}else if(self.setImmediate!=null)return A.HT()
return A.HU()},
FH(a){self.scheduleImmediate(A.dC(new A.uM(a),0))},
FI(a){self.setImmediate(A.dC(new A.uN(a),0))},
FJ(a){A.z3(B.A,a)},
z3(a,b){var s=B.b.K(a.a,1000)
return A.Gi(s<0?0:s,b)},
AV(a,b){var s=B.b.K(a.a,1000)
return A.Gj(s<0?0:s,b)},
Gi(a,b){var s=new A.iZ(!0)
s.oi(a,b)
return s},
Gj(a,b){var s=new A.iZ(!1)
s.oj(a,b)
return s},
h(a){return new A.ir(new A.q($.u,a.i("q<0>")),a.i("ir<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.BQ(a,b)},
e(a,b){b.az(a)},
d(a,b){b.bt(A.C(a),A.a7(a))},
BQ(a,b){var s,r,q=new A.xb(b),p=new A.xc(b)
if(a instanceof A.q)a.lK(q,p,t.z)
else{s=t.z
if(a instanceof A.q)a.bu(q,p,s)
else{r=new A.q($.u,t._)
r.a=8
r.c=a
r.lK(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.u.f0(new A.xr(s),t.H,t.S,t.z)},
bI(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cE(null)
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
c.a.p()}return}if(a instanceof A.iK){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.x()
r.u(0,s)
A.jn(new A.x9(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.x()
s.tQ(p,!1).aO(new A.xa(c,b),t.P)
return}}A.BQ(a,b)},
Cg(a){var s=a.a
s===$&&A.x()
return new A.bb(s,A.m(s).i("bb<1>"))},
FK(a,b){var s=new A.lO(b.i("lO<0>"))
s.oe(a,b)
return s},
C1(a,b){return A.FK(a,b)},
G5(a){return new A.iK(a,1)},
du(a){return new A.iK(a,0)},
Bs(a,b,c){return 0},
h5(a){var s
if(t.C.b(a)){s=a.gc9()
if(s!=null)return s}return B.M},
hs(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.C(q)
r=A.a7(q)
p=new A.q($.u,b.i("q<0>"))
o=s
n=r
m=A.ja(o,n)
if(m==null)o=new A.ad(o,n==null?A.h5(o):n)
else o=m
p.ca(o)
return p}return b.i("y<0>").b(l)?l:A.bd(l,b)},
c6(a,b){var s=a==null?b.a(a):a,r=new A.q($.u,b.i("q<0>"))
r.aU(s)
return r},
Es(a,b){var s
if(!b.b(null))throw A.b(A.aI(null,"computation","The type parameter is not nullable"))
s=new A.q($.u,b.i("q<0>"))
A.cv(a,new A.ps(null,s,b))
return s},
yC(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.q($.u,b.i("q<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pu(i,h,g,f)
try{for(n=J.I(a),m=t.P;n.m();){r=n.gn()
q=i.b
r.bu(new A.pt(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cE(A.l([],b.i("B<0>")))
return n}i.a=A.aG(n,null,!1,b.i("0?"))}catch(l){p=A.C(l)
o=A.a7(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.ja(m,k)
if(j==null)m=new A.ad(m,k==null?A.h5(m):k)
else m=j
n.ca(m)
return n}else{i.d=p
i.c=o}}return f},
yB(a,b,c,d){var s=new A.pn(d,null,b,c),r=$.u,q=new A.q(r,c.i("q<0>"))
if(r!==B.i)s=r.f0(s,c.i("0/"),t.K,t.l)
a.dl(new A.bX(q,2,null,s,a.$ti.i("@<1>").T(c).i("bX<1,2>")))
return q},
Eq(a,b){var s,r,q,p=A.l([],b.i("B<iI<0>>"))
for(s=a.length,r=b.i("iI<0>"),q=0;q<a.length;a.length===s||(0,A.A)(a),++q)p.push(new A.iI(a[q],r))
if(p.length===0)return A.c6(A.l([],b.i("B<0>")),b.i("p<0>"))
s=new A.q($.u,b.i("q<p<0>>"))
A.G_(p,new A.po(new A.ag(s,b.i("ag<p<0>>")),p,b))
return s},
Ho(a){return a!=null},
G_(a,b){var s,r={},q=r.a=r.b=0,p=new A.vI(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.A)(a),++q)a[q].tB(p)},
ja(a,b){var s,r,q,p=$.u
if(p===B.i)return null
s=p.mh(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.kT(r,q)
return s},
ew(a,b){var s
if($.u!==B.i){s=A.ja(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gc9()
if(b==null){A.kT(a,B.M)
b=B.M}}else b=B.M
else if(t.C.b(a))A.kT(a,b)
return new A.ad(a,b)},
FZ(a,b,c){var s=new A.q(b,c.i("q<0>"))
s.a=8
s.c=a
return s},
bd(a,b){var s=new A.q($.u,b.i("q<0>"))
s.a=8
s.c=a
return s},
vO(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.yY()
b.ca(new A.ad(new A.bC(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lq(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.es()
b.fn(p.a)
A.em(b,q)
return}b.a^=2
b.b.cB(new A.vP(p,b))},
em(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.eL(r.a,r.b)}return}s.a=b
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
f.b.eL(r.a,r.b)
return}j=$.u
if(j!==k)$.u=k
else j=null
f=s.a.c
if((f&15)===8)new A.vT(s,g,p).$0()
else if(q){if((f&1)!==0)new A.vS(s,m).$0()}else if((f&2)!==0)new A.vR(g,s).$0()
if(j!=null)$.u=j
f=s.c
if(f instanceof A.q){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hb(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.vO(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hb(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
C6(a,b){if(t.ng.b(a))return b.f0(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.d4(a,t.z,t.K)
throw A.b(A.aI(a,"onError",u.w))},
Hn(){var s,r
for(s=$.fR;s!=null;s=$.fR){$.jc=null
r=s.b
$.fR=r
if(r==null)$.jb=null
s.a.$0()}},
HK(){$.zp=!0
try{A.Hn()}finally{$.jc=null
$.zp=!1
if($.fR!=null)$.zM().$1(A.Co())}},
Ce(a){var s=new A.lN(a),r=$.jb
if(r==null){$.fR=$.jb=s
if(!$.zp)$.zM().$1(A.Co())}else $.jb=r.b=s},
HH(a){var s,r,q,p=$.fR
if(p==null){A.Ce(a)
$.jc=$.jb
return}s=new A.lN(a)
r=$.jc
if(r==null){s.b=p
$.fR=$.jc=s}else{q=r.b
s.b=q
$.jc=r.b=s
if(q==null)$.jb=s}},
jn(a){var s,r=null,q=$.u
if(B.i===q){A.xp(r,r,B.i,a)
return}if(B.i===q.gje().a)s=B.i.gbZ()===q.gbZ()
else s=!1
if(s){A.xp(r,r,q,q.bM(a,t.H))
return}s=$.u
s.cB(s.eB(a))},
z_(a,b){var s=null,r=b.i("cA<0>"),q=new A.cA(s,s,s,s,r)
q.aw(a)
q.kO()
return new A.bb(q,r.i("bb<1>"))},
Jx(a,b){return new A.bZ(A.bL(a,"stream",t.K),b.i("bZ<0>"))},
yZ(a,b,c,d,e){return d?new A.fI(b,null,c,a,e.i("fI<0>")):new A.cA(b,null,c,a,e.i("cA<0>"))},
ed(a,b,c){return new A.is(b,a,c.i("is<0>"))},
n_(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.C(q)
r=A.a7(q)
$.u.eL(s,r)}},
FX(a,b,c,d,e,f){var s=$.u,r=e?1:0,q=c!=null?32:0,p=A.lS(s,b,f),o=A.v_(s,c),n=d==null?A.xs():d
return new A.ds(a,p,o,s.bM(n,t.H),s,r|q,f.i("ds<0>"))},
FF(a){return new A.uH(a)},
lS(a,b,c){var s=b==null?A.HW():b
return a.d4(s,t.H,c)},
v_(a,b){if(b==null)b=A.HX()
if(t.b9.b(b))return a.f0(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.d4(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Hp(a){},
Hr(a,b){$.u.eL(a,b)},
Hq(){},
Bj(a,b){var s=$.u,r=new A.fv(s,b.i("fv<0>"))
A.jn(r.glm())
if(a!=null)r.c=s.bM(a,t.H)
return r},
GP(a,b,c){var s=a.B()
if(s!==$.dG())s.aQ(new A.xe(b,c))
else b.al(c)},
GQ(a,b,c){var s=a.B()
if(s!==$.dG())s.aQ(new A.xf(b,c))
else b.cb(c)},
cv(a,b){var s=$.u
if(s===B.i)return s.jv(a,b)
return s.jv(a,s.eB(b))},
AU(a,b){var s,r=$.u
if(r===B.i)return r.ju(a,b)
s=r.hp(b,t.hU)
return $.u.ju(a,s)},
yc(a,b,c,d){return A.HG(a,c,b,d)},
HG(a,b,c,d){return $.u.mo(c,b).aZ(a,d)},
HE(a,b,c,d,e){A.jf(d,e)},
jf(a,b){A.HH(new A.xm(a,b))},
xn(a,b,c,d){var s,r=$.u
if(r===c)return d.$0()
$.u=c
s=r
try{r=d.$0()
return r}finally{$.u=s}},
xo(a,b,c,d,e){var s,r=$.u
if(r===c)return d.$1(e)
$.u=c
s=r
try{r=d.$1(e)
return r}finally{$.u=s}},
zq(a,b,c,d,e,f){var s,r=$.u
if(r===c)return d.$2(e,f)
$.u=c
s=r
try{r=d.$2(e,f)
return r}finally{$.u=s}},
Ca(a,b,c,d){return d},
Cb(a,b,c,d){return d},
C9(a,b,c,d){return d},
HD(a,b,c,d,e){return null},
xp(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gbZ()
r=c.gbZ()
d=s!==r?c.eB(d):c.jp(d,t.H)}A.Ce(d)},
HC(a,b,c,d,e){return A.z3(d,B.i!==c?c.jp(e,t.H):e)},
HB(a,b,c,d,e){e=c.u2(e,t.H,t.hU)
return A.AV(d,e)},
HF(a,b,c,d){A.CP(d)},
C8(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.yD(o,o,o,s,s)
r.F(0,e)}else r=o
s=new A.lY(c.glA(),c.glC(),c.glB(),c.glw(),c.glx(),c.glv(),c.gl3(),c.gje(),c.gkX(),c.gkW(),c.glr(),c.gl6(),c.giY(),c.gjm(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.mT(s,q)
p=d.a
if(p!=null)s.as=new A.mS(s,p)}if(r!=null)s.at=new A.mU(s,r)
return s},
uL:function uL(a){this.a=a},
uK:function uK(a,b,c){this.a=a
this.b=b
this.c=c},
uM:function uM(a){this.a=a},
uN:function uN(a){this.a=a},
iZ:function iZ(a){this.a=a
this.b=null
this.c=0},
wK:function wK(a,b){this.a=a
this.b=b},
wJ:function wJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b){this.a=a
this.b=!1
this.$ti=b},
xb:function xb(a){this.a=a},
xc:function xc(a){this.a=a},
xr:function xr(a){this.a=a},
x9:function x9(a,b){this.a=a
this.b=b},
xa:function xa(a,b){this.a=a
this.b=b},
lO:function lO(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
uP:function uP(a){this.a=a},
uQ:function uQ(a){this.a=a},
uS:function uS(a){this.a=a},
uT:function uT(a,b){this.a=a
this.b=b},
uR:function uR(a,b){this.a=a
this.b=b},
uO:function uO(a){this.a=a},
iK:function iK(a,b){this.a=a
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
ix:function ix(){},
is:function is(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
ps:function ps(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pt:function pt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pn:function pn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ll:function ll(a,b){this.a=a
this.b=b},
po:function po(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a,b,c){this.c=a
this.d=b
this.$ti=c},
iI:function iI(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
vJ:function vJ(a,b){this.a=a
this.b=b},
vK:function vK(a,b){this.a=a
this.b=b},
vI:function vI(a,b,c){this.a=a
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
vL:function vL(a,b){this.a=a
this.b=b},
vQ:function vQ(a,b){this.a=a
this.b=b},
vP:function vP(a,b){this.a=a
this.b=b},
vN:function vN(a,b){this.a=a
this.b=b},
vM:function vM(a,b){this.a=a
this.b=b},
vT:function vT(a,b,c){this.a=a
this.b=b
this.c=c},
vU:function vU(a,b){this.a=a
this.b=b},
vV:function vV(a){this.a=a},
vS:function vS(a,b){this.a=a
this.b=b},
vR:function vR(a,b){this.a=a
this.b=b},
vW:function vW(a,b){this.a=a
this.b=b},
vX:function vX(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(a,b){this.a=a
this.b=b},
lN:function lN(a){this.a=a
this.b=null},
a4:function a4(){},
tg:function tg(a,b){this.a=a
this.b=b},
th:function th(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ti:function ti(a,b){this.a=a
this.b=b},
tj:function tj(a,b){this.a=a
this.b=b},
te:function te(a){this.a=a},
tf:function tf(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(){},
dx:function dx(){},
wD:function wD(a){this.a=a},
wC:function wC(a){this.a=a},
mE:function mE(){},
it:function it(){},
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
uH:function uH(a){this.a=a},
uG:function uG(a){this.a=a},
iW:function iW(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
aP:function aP(){},
v1:function v1(a,b,c){this.a=a
this.b=b
this.c=c},
v0:function v0(a){this.a=a},
fG:function fG(){},
m3:function m3(){},
bW:function bW(a,b){this.b=a
this.a=null
this.$ti=b},
fu:function fu(a,b){this.b=a
this.c=b
this.a=null},
vB:function vB(){},
dw:function dw(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
wl:function wl(a,b){this.a=a
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
iD:function iD(a){this.$ti=a},
cY:function cY(a,b){this.b=a
this.$ti=b},
wj:function wj(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
xe:function xe(a,b){this.a=a
this.b=b},
xf:function xf(a,b){this.a=a
this.b=b},
iG:function iG(){},
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
iE:function iE(a,b){this.a=a
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
iw:function iw(a,b,c){this.a=a
this.b=b
this.$ti=c},
x6:function x6(a,b){this.a=a
this.b=b},
x8:function x8(a,b){this.a=a
this.b=b},
x7:function x7(a,b){this.a=a
this.b=b},
x4:function x4(a,b){this.a=a
this.b=b},
x5:function x5(a,b){this.a=a
this.b=b},
x3:function x3(a,b){this.a=a
this.b=b},
x0:function x0(a,b){this.a=a
this.b=b},
mT:function mT(a,b){this.a=a
this.b=b},
x_:function x_(a,b){this.a=a
this.b=b},
wZ:function wZ(a,b){this.a=a
this.b=b},
x2:function x2(a,b){this.a=a
this.b=b},
x1:function x1(a,b){this.a=a
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
vx:function vx(a,b,c){this.a=a
this.b=b
this.c=c},
vz:function vz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vw:function vw(a,b){this.a=a
this.b=b},
vy:function vy(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function mr(){},
ws:function ws(a,b,c){this.a=a
this.b=b
this.c=c},
wr:function wr(a,b){this.a=a
this.b=b},
wt:function wt(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a){this.a=a},
xm:function xm(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
yD(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cW(d.i("@<0>").T(e).i("cW<1,2>"))
b=A.zv()}else{if(A.Cu()===b&&A.Ct()===a)return new A.dt(d.i("@<0>").T(e).i("dt<1,2>"))
if(a==null)a=A.zu()}else{if(b==null)b=A.zv()
if(a==null)a=A.zu()}return A.FY(a,b,c,d,e)},
Bl(a,b){var s=a[b]
return s===a?null:s},
ze(a,b,c){if(c==null)a[b]=a
else a[b]=c},
zd(){var s=Object.create(null)
A.ze(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
FY(a,b,c,d,e){var s=c!=null?c:new A.vv(d)
return new A.iA(a,b,s,d.i("@<0>").T(e).i("iA<1,2>"))},
hF(a,b,c,d){if(b==null){if(a==null)return new A.bt(c.i("@<0>").T(d).i("bt<1,2>"))
b=A.zv()}else{if(A.Cu()===b&&A.Ct()===a)return new A.hD(c.i("@<0>").T(d).i("hD<1,2>"))
if(a==null)a=A.zu()}return A.G8(a,b,null,c,d)},
n(a,b,c){return A.CE(a,new A.bt(b.i("@<0>").T(c).i("bt<1,2>")))},
D(a,b){return new A.bt(a.i("@<0>").T(b).i("bt<1,2>"))},
G8(a,b,c,d,e){return new A.iL(a,b,new A.wh(d),d.i("@<0>").T(e).i("iL<1,2>"))},
q7(a){return new A.cX(a.i("cX<0>"))},
aS(a){return new A.cX(a.i("cX<0>"))},
ai(a,b){return A.It(a,new A.cX(b.i("cX<0>")))},
zf(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fA(a,b,c){var s=new A.dv(a,b,c.i("dv<0>"))
s.c=a.e
return s},
GU(a,b){return J.t(a,b)},
GV(a){return J.a2(a)},
b_(a,b,c){var s=A.hF(null,null,b,c)
a.a2(0,new A.q6(s,b,c))
return s},
dZ(a,b,c){var s=A.hF(null,null,b,c)
s.F(0,a)
return s},
q8(a,b){var s,r,q=A.q7(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r)q.u(0,b.a(a[r]))
return q},
e_(a,b){var s=A.q7(b)
s.F(0,a)
return s},
EE(a,b){var s=t.bP
return J.zW(s.a(a),s.a(b))},
qu(a){var s,r
if(A.zC(a))return"{...}"
s=new A.ab("")
try{r={}
$.ex.push(a)
s.a+="{"
r.a=!0
a.a2(0,new A.qv(r,s))
s.a+="}"}finally{$.ex.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
yK(a){return new A.hG(A.aG(A.EF(null),null,!1,a.i("0?")),a.i("hG<0>"))},
EF(a){return 8},
cW:function cW(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
w_:function w_(a){this.a=a},
vZ:function vZ(a){this.a=a},
dt:function dt(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
iA:function iA(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
vv:function vv(a){this.a=a},
en:function en(a,b){this.a=a
this.$ti=b},
m8:function m8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iL:function iL(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
wh:function wh(a){this.a=a},
cX:function cX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
wi:function wi(a){this.a=a
this.c=this.b=null},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
q6:function q6(a,b,c){this.a=a
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
qt:function qt(a){this.a=a},
qv:function qv(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.$ti=b},
mh:function mh(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
mH:function mH(){},
hK:function hK(){},
cx:function cx(a,b){this.a=a
this.$ti=b},
hG:function hG(a,b){var _=this
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
iU:function iU(){},
j4:function j4(){},
C4(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.C(r)
q=A.a3(String(s),null,null)
throw A.b(q)}q=A.xg(p)
return q},
xg(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mc(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.xg(a[s])
return a},
GD(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Ds()
else s=new Uint8Array(o)
for(r=J.K(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
GC(a,b,c,d){var s=a?$.Dr():$.Dq()
if(s==null)return null
if(0===c&&d===b.length)return A.BJ(s,b)
return A.BJ(s,b.subarray(c,d))},
BJ(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
A_(a,b,c,d,e,f){if(B.b.aj(f,4)!==0)throw A.b(A.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a3("Invalid base64 padding, more than two '=' characters",a,b))},
FO(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.aI(b,"Not a byte value at index "+q+": 0x"+B.b.kb(s.h(b,q),16),null))},
FN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.b.ac(f,2),i=f&3,h=$.zN()
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
return A.B8(a,r+1,c,-m-1)}throw A.b(A.a3(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a3(k,a,r))},
FL(a,b,c,d){var s=A.FM(a,b,c),r=(d&3)+(s-b),q=B.b.ac(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Dj()},
FM(a,b,c){var s,r=c,q=r,p=0
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
B8(a,b,c,d){var s,r
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
Ef(a){return B.cm.h(0,a.toLowerCase())},
Ax(a,b,c){return new A.hE(a,b)},
GY(a){return a.am()},
G6(a,b){return new A.we(a,[],A.Ij())},
G7(a,b,c){var s,r=new A.ab("")
A.Bn(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Bn(a,b,c,d){var s=A.G6(b,c)
s.ib(a)},
BK(a){switch(a){case 65:return"Missing extension byte"
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
wd:function wd(a){this.a=a},
md:function md(a){this.a=a},
wb:function wb(a,b,c){this.b=a
this.c=b
this.a=c},
wV:function wV(){},
wU:function wU(){},
jx:function jx(){},
mG:function mG(){},
jy:function jy(a){this.a=a},
wM:function wM(a,b){this.a=a
this.b=b},
nr:function nr(){},
jD:function jD(){},
lQ:function lQ(a){this.a=0
this.b=a},
uZ:function uZ(a){this.c=null
this.a=0
this.b=a},
uV:function uV(){},
uI:function uI(a,b){this.a=a
this.b=b},
jC:function jC(){},
lP:function lP(){this.a=0},
uU:function uU(a,b){this.a=a
this.b=b},
nw:function nw(){},
fq:function fq(a){this.a=a},
lT:function lT(a,b){this.a=a
this.b=b
this.c=0},
jO:function jO(){},
my:function my(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
jP:function jP(){},
ar:function ar(){},
oj:function oj(a){this.a=a},
dU:function dU(){},
hE:function hE(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
q4:function q4(){},
ko:function ko(a){this.b=a},
wc:function wc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
kn:function kn(a){this.a=a},
wf:function wf(){},
wg:function wg(a,b){this.a=a
this.b=b},
we:function we(a,b,c){this.c=a
this.a=b
this.b=c},
kp:function kp(){},
kq:function kq(a){this.a=a},
lg:function lg(){},
wI:function wI(a,b){this.a=a
this.b=b},
iY:function iY(){},
mA:function mA(a){this.a=a},
wT:function wT(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(){},
lw:function lw(){},
mJ:function mJ(a){this.b=this.a=0
this.c=a},
wW:function wW(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
ik:function ik(a){this.a=a},
cZ:function cZ(a){this.a=a
this.b=16
this.c=0},
mV:function mV(){},
zb(a,b){var s=A.FV(a,b)
if(s==null)throw A.b(A.a3("Could not parse BigInt",a,null))
return s},
FS(a,b){var s,r,q=$.c1(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bb(0,$.zO()).fc(0,A.iu(s))
s=0
o=0}}if(b)return q.bw(0)
return q},
Ba(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
FT(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.t.u4(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.Ba(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.Ba(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.c1()
l=A.bw(j,i)
return new A.ay(l===0?!1:c,i,l)},
FV(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Dl().dR(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.FS(p,q)
if(o!=null)return A.FT(o,2,q)
return null},
bw(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
z9(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
B9(a){var s
if(a===0)return $.c1()
if(a===1)return $.eE()
if(a===2)return $.Dm()
if(Math.abs(a)<4294967296)return A.iu(B.b.i5(a))
s=A.FP(a)
return s},
iu(a){var s,r,q,p,o=a<0
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
return new A.ay(r===0?!1:o,s,r)}r=B.b.K(B.b.gm3(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.b.K(a,65536)}r=A.bw(r,s)
return new A.ay(r===0?!1:o,s,r)},
FP(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.O("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.c1()
r=$.Dk()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.E(r)
r[p]=0}q=J.na(B.e.ga5(r))
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
if(n<0)k=l.dg(0,-n)
else k=n>0?l.bx(0,n):l
if(s)return k.bw(0)
return k},
za(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.E(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.E(d)
d[s]=0}return b+c},
Bg(a,b,c,d){var s,r,q,p,o,n=B.b.K(c,16),m=B.b.aj(c,16),l=16-m,k=B.b.bx(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.b.dg(p,l)
r&2&&A.E(d)
d[s+n+1]=(o|q)>>>0
q=B.b.bx((p&k)>>>0,m)}r&2&&A.E(d)
d[n]=q},
Bb(a,b,c,d){var s,r,q,p,o=B.b.K(c,16)
if(B.b.aj(c,16)===0)return A.za(a,b,o,d)
s=b+o+1
A.Bg(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.E(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
FU(a,b,c,d){var s,r,q,p,o=B.b.K(c,16),n=B.b.aj(c,16),m=16-n,l=B.b.bx(1,n)-1,k=B.b.dg(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.b.bx((q&l)>>>0,m)
s&2&&A.E(d)
d[r]=(p|k)>>>0
k=B.b.dg(q,n)}s&2&&A.E(d)
d[j]=k},
uW(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
FQ(a,b,c,d,e){var s,r,q
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
Bh(a,b,c,d,e,f){var s,r,q,p,o,n
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
FR(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.b.io((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
IB(a){return A.jk(a)},
yx(a,b){return new A.k7(new WeakMap(),a,b.i("k7<0>"))},
yy(a){if(A.c0(a)||typeof a=="number"||typeof a=="string"||a instanceof A.er)A.Ek(a)},
Ek(a){throw A.b(A.aI(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
vH(a,b){var s=$.Dn()
s=s==null?null:new s(A.dC(A.Jc(a,b),1))
return new A.m6(s,b.i("m6<0>"))},
ax(a){var s=A.hY(a,null)
if(s!=null)return s
throw A.b(A.a3(a,null,null))},
Ip(a){var s=A.F5(a)
if(s!=null)return s
throw A.b(A.a3("Invalid double",a,null))},
Ej(a,b){a=A.aF(a,new Error())
a.stack=b.k(0)
throw a},
aG(a,b,c,d){var s,r=c?J.At(a,d):J.yF(a,d)
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
return A.AL(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Fp(a,b,c)
if(r)a=J.yo(a,c)
if(b>0)a=J.nd(a,b)
s=A.P(a,t.S)
return A.AL(s)},
Fp(a,b,c){var s=a.length
if(b>=s)return""
return A.F7(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.eS(a,A.yH(a,!1,b,c,!1,""))},
IA(a,b){return a==null?b==null:a===b},
tk(a,b,c){var s=J.I(b)
if(!s.m())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.m())}else{a+=A.r(s.gn())
while(s.m())a=a+c+A.r(s.gn())}return a},
z4(){var s,r,q=A.F0()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.B2
if(s!=null&&q===$.B1)return s
r=A.lu(q)
$.B2=r
$.B1=q
return r},
fL(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.Do()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.f.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bh(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Gx(a){var s,r,q
if(!$.Dp())return A.Gy(a)
s=new URLSearchParams()
a.a2(0,new A.wS(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.q(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
yY(){return A.a7(new Error())},
yu(a,b,c,d,e,f,g){var s=A.F8(a,b,c,d,e,f,g,0,!0)
return new A.aN(s==null?new A.oW(a,b,c,d,e,f,g,0).$0():s,0,!0)},
Eb(){return new A.aN(Date.now(),0,!1)},
oX(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ak(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ak(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aI(b,s,u.B))
A.bL(c,"isUtc",t.y)
return a},
Ec(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Ad(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
k_(a){if(a>=10)return""+a
return"0"+a},
cE(a,b,c){return new A.as(a+1000*b+1e6*c)},
eP(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aI(b,"name","No enum value with that name"))},
hk(a){if(typeof a=="number"||A.c0(a)||a==null)return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
return A.AK(a)},
Af(a,b){A.bL(a,"error",t.K)
A.bL(b,"stackTrace",t.l)
A.Ej(a,b)},
jA(a){return new A.jz(a)},
O(a,b){return new A.bC(!1,null,b,a)},
aI(a,b,c){return new A.bC(!0,a,b,c)},
jw(a,b){return a},
aO(a){var s=null
return new A.cL(s,s,!1,s,s,a)},
rW(a,b){return new A.cL(null,null,!0,a,b,"Value not in range")},
ak(a,b,c,d,e){return new A.cL(b,c,!0,a,d,"Invalid value")},
AO(a,b,c,d){if(a<b||a>c)throw A.b(A.ak(a,b,c,d,null))
return a},
F9(a,b,c,d){return A.Aq(a,d,b,null,c)},
b1(a,b,c){if(0>a||a>c)throw A.b(A.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ak(b,a,c,"end",null))
return b}return c},
b0(a,b){if(a<0)throw A.b(A.ak(a,0,null,b,null))
return a},
Ap(a,b){var s=b.b
return new A.hv(s,!0,a,null,"Index out of range")},
ke(a,b,c,d,e){return new A.hv(b,!0,a,e,"Index out of range")},
Aq(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.ke(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cy(a)},
B_(a){return new A.lo(a)},
w(a){return new A.bk(a)},
aq(a){return new A.jR(a)},
Ag(a){return new A.m5(a)},
a3(a,b,c){return new A.b8(a,b,c)},
Ex(a,b,c){var s,r
if(A.zC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.ex.push(a)
try{A.Hl(a,s)}finally{$.ex.pop()}r=A.tk(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
q1(a,b,c){var s,r
if(A.zC(a))return b+"..."+c
s=new A.ab(b)
$.ex.push(a)
try{r=s
r.a=A.tk(r.a,a,", ")}finally{$.ex.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Hl(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
AA(a,b,c,d,e){return new A.dL(a,b.i("@<0>").T(c).T(d).T(e).i("dL<1,2,3,4>"))},
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
qT(a){var s,r=$.eF()
for(s=J.I(a);s.m();)r=A.an(r,J.a2(s.gn()))
return A.fg(r)},
BR(a,b){return 65536+((a&1023)<<10)+(b&1023)},
lu(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.B0(a4<a4?B.a.q(a5,0,a4):a5,5,a3).gmV()
else if(s===32)return A.B0(B.a.q(a5,5,a4),0,a3).gmV()}r=A.aG(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Cd(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Cd(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.d5(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.aa(a5,"http",0)){if(i&&o+3===n&&B.a.aa(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.d5(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.aa(a5,"https",0)){if(i&&o+4===n&&B.a.aa(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.d5(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bY(a4<a5.length?B.a.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.zj(a5,0,q)
else{if(q===0)A.fK(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.BF(a5,c,p-1):""
a=A.BD(a5,p,o,!1)
i=o+1
if(i<n){a0=A.hY(B.a.q(a5,i,n),a3)
d=A.wO(a0==null?A.v(A.a3("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.BE(a5,n,m,a3,j,a!=null)
a2=m<l?A.wP(a5,m+1,l,a3):a3
return A.j6(j,b,a,d,a1,a2,l<a4?A.BC(a5,l+1,a4):a3)},
FA(a){return A.zm(a,0,a.length,B.k,!1)},
lt(a,b,c){throw A.b(A.a3("Illegal IPv4 address, "+a,b,c))},
Fx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
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
Fy(a,b,c){var s
if(b===c)throw A.b(A.a3("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Fz(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.B3(a,b,c)
return!0},
Fz(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
B3(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.tO(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Fx(a1,o,a3,s,q*2)
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
B.e.jF(s,c,b,0)}}return s},
j6(a,b,c,d,e,f,g){return new A.j5(a,b,c,d,e,f,g)},
Bz(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fK(a,b,c){throw A.b(A.a3(c,a,b))},
Gu(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.C(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
wO(a,b){if(a!=null&&a===A.Bz(b))return null
return a},
BD(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.fK(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Gv(a,r,s)
if(p<s){o=p+1
q=A.BI(a,B.a.aa(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Fy(a,r,s)
m=B.a.q(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.c1(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.BI(a,B.a.aa(a,"25",o)?s+3:o,c,"%25")}else q=""
A.B3(a,b,s)
return"["+B.a.q(a,b,s)+q+"]"}return A.GA(a,b,c)},
Gv(a,b,c){var s=B.a.c1(a,"%",b)
return s>=b&&s<c?s:c},
BI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.ab(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.zk(a,s,!0)
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
m=A.zi(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.q(a,b,c)
if(r<c){j=B.a.q(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
GA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.zk(a,s,!0)
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
k=A.zi(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.q(a,b,c)
if(r<c){l=B.a.q(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
zj(a,b,c){var s,r,q
if(b===c)return""
if(!A.BB(a.charCodeAt(b)))A.fK(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.fK(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.q(a,b,c)
return A.Gt(r?a.toLowerCase():a)},
Gt(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
BF(a,b,c){if(a==null)return""
return A.j7(a,b,c,16,!1,!1)},
BE(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.j7(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.Gz(s,e,f)},
Gz(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.zl(a,!s||c)
return A.eu(a)},
wP(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.j7(a,b,c,256,!0,!1)}if(d==null)return null
return A.Gx(d)},
Gy(a){var s={},r=new A.ab("")
s.a=""
a.a2(0,new A.wQ(new A.wR(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
BC(a,b,c){if(a==null)return null
return A.j7(a,b,c,256,!0,!1)},
zk(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.xT(s)
p=A.xT(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bh(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.q(a,b,b+3).toUpperCase()
return null},
zi(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.b.lG(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dl(s,0,null)},
j7(a,b,c,d,e,f){var s=A.BH(a,b,c,d,e,f)
return s==null?B.a.q(a,b,c):s},
BH(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.zk(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.fK(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.zi(o)}if(p==null){p=new A.ab("")
l=p}else l=p
l.a=(l.a+=B.a.q(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.q(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
BG(a){if(B.a.S(a,"."))return!0
return B.a.c0(a,"/.")!==-1},
eu(a){var s,r,q,p,o,n
if(!A.BG(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.c.J(s,"/")},
zl(a,b){var s,r,q,p,o,n
if(!A.BG(a))return!b?A.BA(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.ga3(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.BA(s[0])
return B.c.J(s,"/")},
BA(a){var s,r,q=a.length
if(q>=2&&A.BB(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.q(a,0,s)+"%3A"+B.a.ag(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
GB(a,b){if(a.vT("package")&&a.c==null)return A.Cf(b,0,b.length)
return-1},
Gw(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
zm(a,b,c,d,e){var s,r,q,p,o=b
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
p.push(A.Gw(a,o+1))
o+=2}else p.push(r)}}return d.hu(p)},
BB(a){var s=a|32
return 97<=s&&s<=122},
B0(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
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
if((j.length&1)===1)a=B.aA.wa(a,m,s)
else{l=A.BH(a,m,s,256,!0,!1)
if(l!=null)a=B.a.d5(a,m,s,l)}return new A.tN(a,j,c)},
Cd(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Br(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.Cf(a.a,a.e,a.f)
return-1},
Cf(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
GS(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
uX:function uX(){},
uY:function uY(){},
m6:function m6(a,b){this.a=a
this.$ti=b},
wS:function wS(a){this.a=a},
oW:function oW(a,b,c,d,e,f,g,h){var _=this
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
vC:function vC(){},
a8:function a8(){},
jz:function jz(a){this.a=a},
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
hv:function hv(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cy:function cy(a){this.a=a},
lo:function lo(a){this.a=a},
bk:function bk(a){this.a=a},
jR:function jR(a){this.a=a},
kK:function kK(){},
ib:function ib(){},
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
ic:function ic(){this.b=this.a=0},
l0:function l0(a){this.a=a},
l_:function l_(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
ab:function ab(a){this.a=a},
tO:function tO(a){this.a=a},
j5:function j5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
wR:function wR(a,b){this.a=a
this.b=b},
wQ:function wQ(a){this.a=a},
tN:function tN(a,b,c){this.a=a
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
EG(a){return a},
EA(a){return a},
z0(a){return a},
Ey(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.BP(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Er(a){return new v.G.Promise(A.bJ(new A.pr(a)))},
kI:function kI(a){this.a=a},
pr:function pr(a){this.a=a},
pp:function pp(a){this.a=a},
pq:function pq(a){this.a=a},
xj(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.GJ,a)
s[$.eD()]=a
return s},
cB(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.GK,a)
s[$.eD()]=a
return s},
bJ(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.GL,a)
s[$.eD()]=a
return s},
mX(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.GM,a)
s[$.eD()]=a
return s},
fQ(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.GN,a)
s[$.eD()]=a
return s},
zn(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.GO,a)
s[$.eD()]=a
return s},
GJ(a){return a.$0()},
GK(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
GL(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
GM(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
GN(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
GO(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
C3(a){return a==null||A.c0(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
eB(a){if(A.C3(a))return a
return new A.xY(new A.dt(t.mp)).$1(a)},
zz(a,b){return a[b]},
zs(a,b,c){return a[b].apply(a,c)},
Ib(a,b){var s,r
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
a.then(A.dC(new A.y3(r),1),A.dC(new A.y4(r),1))
return s},
C2(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
n3(a){if(A.C2(a))return a
return new A.xA(new A.dt(t.mp)).$1(a)},
xY:function xY(a){this.a=a},
y3:function y3(a){this.a=a},
y4:function y4(a){this.a=a},
xA:function xA(a){this.a=a},
CJ(a,b){return Math.max(a,b)},
AM(){return B.af},
AN(){return $.yj()},
w8:function w8(){},
w9:function w9(a){this.a=a},
DW(a,b,c){return J.zT(a,b,c)},
k5:function k5(){},
Z:function Z(){},
ny:function ny(a){this.a=a},
nz:function nz(a){this.a=a},
nA:function nA(a,b){this.a=a
this.b=b},
nB:function nB(a){this.a=a},
nC:function nC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nD:function nD(a){this.a=a},
k1:function k1(a){this.$ti=a},
hz:function hz(a,b){this.a=a
this.$ti=b},
e1:function e1(a,b){this.a=a
this.$ti=b},
fJ:function fJ(){},
f7:function f7(a,b){this.a=a
this.$ti=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
k0:function k0(){},
AE(){throw A.b(A.Y(u.O))},
Fw(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
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
pw:function pw(){},
mw(a){var s=new Uint32Array(A.aY(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.mv(s,r,a,q,new Uint32Array(16))},
mu:function mu(){},
wv:function wv(){},
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
ju:function ju(){},
nJ:function nJ(){},
hI:function hI(a){this.a=a},
i6:function i6(){},
qs:function qs(){},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
t0:function t0(){},
i7:function i7(a,b){this.b=a
this.c=b},
l2:function l2(a){this.a=a},
bo(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
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
Ac(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.e.cC(s,0,b)
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
jV:function jV(a,b,c){this.c=a
this.d=b
this.a=c},
oB:function oB(){},
lZ:function lZ(){},
m_:function m_(){},
n0(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.jo()===B.L){a5=A.ey(a5)
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
if($.jo()===B.L){a1=A.ey(a1)
a2=A.ey(a2)
a3=A.ey(a3)
a4=A.ey(a4)}a9.$flags&2&&A.E(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Cm(a){var s,r,q,p,o,n,m,l,k,j,i=a.gdL(),h=B.cl.h(0,i.gl(0))
if(h==null)throw A.b(A.O("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.zT(B.u.ga5(r),r.byteOffset,i.gl(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.E(q,9)
q.setUint8(m,l);++m}k=i.gl(0)/4|0
if($.jo()===B.L)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.b.aj(m,k)
if(n===0)j=A.Ci((j<<8|j>>>24)>>>0)^B.c0[B.b.io(m,k)-1]<<24
else if(o&&n===4)j=A.Ci(j)
r[m]=(j^r[m-k])>>>0}return r},
Ci(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
ey(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
om:function om(){},
oC:function oC(){},
vr:function vr(){},
kY:function kY(a,b){this.a=a
this.b=b},
jE:function jE(){},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
ns:function ns(){},
Cj(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.kY("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.dM)){s=J.ap(a)
if(B.a.S(s,"TypeError: "))s=B.a.ag(s,11)
a=new A.dM(s,b.b)}return a},
C7(a,b,c){A.Af(A.Cj(a,c),b)},
GI(a,b){return new A.cY(new A.xd(a,b),t.fb)},
fS(a,b,c){return A.Hx(a,b,c)},
Hx(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
a1.f=new A.xk(e)
a1.r=new A.xl(e,c,a)
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
d=A.Cj(m,a)
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
case 11:if(n.done){a1.u6()
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
jM:function jM(a){this.b=!1
this.c=a},
nv:function nv(a){this.a=a},
xd:function xd(a,b){this.a=a
this.b=b},
xk:function xk(a){this.a=a},
xl:function xl(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.a=a},
nx:function nx(a){this.a=a},
A9(a,b){return new A.dM(a,b)},
dM:function dM(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
ET(a,b){var s=t.N,r=A.l([],t.e8),q=$.zH()
if(!q.b.test(a))A.v(A.aI(a,"method","Not a valid method"))
return new A.qN(A.D(s,s),r,a,b,A.hF(new A.jG(),new A.jH(),s,s))},
qN:function qN(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
qO:function qO(a,b){this.a=a
this.b=b},
Fc(a,b){var s=new Uint8Array(0),r=$.zH()
if(!r.b.test(a))A.v(A.aI(a,"method","Not a valid method"))
r=t.N
return new A.rZ(s,a,b,A.hF(new A.jG(),new A.jH(),r,r))},
rZ:function rZ(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
ig:function ig(){},
lf:function lf(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
DX(a){return a.toLowerCase()},
h8:function h8(a,b,c){this.a=a
this.c=b
this.$ti=c},
EL(a){return A.Jb("media type",a,new A.qw(a))},
yM(a,b,c){var s=t.N
if(c==null)s=A.D(s,s)
else{s=new A.h8(A.Ic(),A.D(s,t.gc),t.kj)
s.F(0,c)}return new A.eW(a.toLowerCase(),b.toLowerCase(),new A.cx(s,t.ph))},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a){this.a=a},
qy:function qy(a){this.a=a},
qx:function qx(){},
Ir(a){var s
a.mi($.Dz(),"quoted string")
s=a.gjR().h(0,0)
return A.CW(B.a.q(s,1,s.length-1),$.Dy(),new A.xL(),null)},
xL:function xL(){},
aj(a){var s,r=new A.ab("")
A.h2(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
zG(a){var s,r,q
for(s=new A.l_(a),r=0;s.m();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
GR(a){var s
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
return r.length}if(typeof b=="number"){r=A.GR(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.t.k(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a7(b,h)
a.a+=r
return A.zG(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.K(b),p<s.gl(b);++p){if(p>0){a.a+=",";++q}q+=A.h2(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.I(b.gO());s.m();){n=s.gn()
r=J.ap(n)
if(B.c.cR(o,new A.yg(r)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.az(r,n))}B.c.c8(o,new A.yh())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.A)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a7(k.a,h)
a.a+=j
i=A.zG(j)
a.a+=":"
q=q+i+1+A.h2(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.O("Cannot canonicalize value of type "+J.bq(b).k(0),h))},
yg:function yg(a){this.a=a},
yh:function yh(){},
Fj(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).dR(a)
if(p==null)return B.cz
s=p.b
r=s[1]
r.toString
r=A.ax(r)
q=s[2]
q.toString
q=A.ax(q)
s=s[3]
s=A.hY(s==null?"":s,null)
return new A.es(r,q,s==null?0:s)},
AS(a,b,c){var s,r=A.Fj(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
ec(a,b){return A.Fk(a,b)},
Fk(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
case 4:j=d.P(new c.bv(b.aL(a2,new A.t9(),t.X),k),k.i("o.E"))
n=B.c.cR(j,new A.ta())
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
k=a0===B.b2
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
case 18:case 14:h=A.AS(g,3,37)
k=k&&J.t(m,"wal")
q=new A.lc(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ec,r)},
kQ:function kQ(a,b){this.a=a
this.b=b},
lc:function lc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t9:function t9(){},
ta:function ta(){},
h9:function h9(a,b){this.a=a
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
nG:function nG(a,b){this.a=a
this.b=b},
nH:function nH(){},
nI:function nI(){},
zZ(a){return new Uint8Array(A.aY(a))},
p9:function p9(){},
ne:function ne(a,b,c){this.b=a
this.c=b
this.d=c},
zy(a,b){var s=null,r=a.b
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
dD(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gdP(),h=t.N,g=t.X,f=A.n(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.BT(n,a0.h(0,l),new Uint8Array(A.aY(B.f.v(q+l+"\x00"+e))),m))}k=A.D(h,g)
for(h=new A.aB(a0,A.m(a0).i("aB<1,2>")).gt(0);h.m();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.C(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.aj(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
CB(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.BT(b,c,new Uint8Array(A.aY(B.f.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
cj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.n(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.aa(b.h(0,"id"))
f.j(0,n,A.GT(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.t(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.aA(k,null)
if(t.f.b(j))f.F(0,A.b_(j,h,g))}return f},
Cw(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.I(b);s.m();)r.push(A.cj(a,s.gn(),c,d))
return r},
GT(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.w('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.id("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bq(b).k(0)+"."))
r=B.k.hu(s.ul(B.bj.v(b),new Uint8Array(A.aY(B.f.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.a3===q||B.a5===q){p=A.ax(r)
break A}if(B.a4===q){p=A.Ip(r)
break A}if(B.O===q||B.P===q){p=B.h.aA(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.t(b,1)
if(p===B.O||p===B.P){if(typeof b!="string")throw A.b(A.id("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bq(b).k(0)+"."))
return B.h.aA(b,o)}return b},
BT(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.w('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.t(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.ap(b)
break
case 6:case 7:s=A.aj(b)
break
default:A.M(b)
s=b}r=d.v0(B.f.v(s),c)
return B.aA.gjB().v(r)}switch(a.b.a){case 3:return J.t(b,!0)?1:0
case 6:case 7:return A.aj(b)
default:return b}},
b6(a,b){var s,r,q,p,o,n="archived",m=a.gdP(),l=b.h(0,"id"),k=A.n(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.A)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.t(o,!0):o)}for(l=b.gaK(),l=l.gt(l);l.m();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.C(0,p))continue
k.j(0,p,s.b)}if(J.t(b.h(0,n),!0))k.j(0,n,!0)
return k},
Cp(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=b.gdP(),h=A.l([],t.iE)
h.push(new A.az("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)h.push(new A.az(o,p.b===B.B?J.t(n,!0):n))}for(s=new A.aB(c,A.m(c).i("aB<1,2>")).gt(0);s.m();){m=s.d
r=m.a
if(r==="id"||r==="archived"||i.C(0,r))continue
h.push(new A.az(r,m.b))}if(J.t(c.h(0,"archived"),!0))h.push(B.cy)
B.c.c8(h,new A.xu())
a.a+="{"
for(s=h.length,l=1,k=!0,q=0;q<h.length;h.length===s||(0,A.A)(h),++q,k=!1){r=h[q]
if(!k){a.a+=",";++l}j=B.h.a7(r.a,null)
a.a+=j
o=A.zG(j)
a.a+=":"
l=l+o+1+A.h2(a,r.b)}a.a+="}"
return l+1},
cG:function cG(a,b){this.a=a
this.b=b},
xu:function xu(){},
xJ(a2,a3,a4,a5){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$xJ=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)A:switch(s){case 0:a0=a4.b
a1=a4.r
if(a0==="explain")a1="EXPLAIN QUERY PLAN "+a1
if(a0==="query"&&a5===0){q=A.n(["items",A.l([],t.d),"lastRow",null,"firstRow",null,"hasNext",!1],t.N,t.X)
s=1
break}s=3
return A.a(a3.$2(a1,a4.w),$async$xJ)
case 3:p=a7
switch(a0){case"query":a0=a5==null
o=!a0&&J.ao(p)>a5
n=a0?p:J.yo(p,a5).e8(0)
m=A.Cw(a2.ae(a4.d).a,n,a2.y,a2.z)
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
q=A.n(["plan",J.aL(p,new A.xK(),a0).J(0,"\n")],t.N,a0)
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
return A.f($async$xJ,r)},
xK:function xK(){},
Ae(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
jS:function jS(a,b){this.a=a
this.b=b},
k2:function k2(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
p6:function p6(){},
p5:function p5(){},
p7:function p7(){},
p4:function p4(a){this.a=a},
Ee(a){return'"'+A.z(a,'"','""')+'"'},
Ed(a,b){var s,r,q,p=a.a,o=J.K(p),n=b.a,m=J.K(n)
if(o.gl(p)>=m.gl(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gl(p);++q)if(!J.t(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
nW:function nW(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hi:function hi(a){this.a=a},
p3:function p3(a){this.a=a},
p2:function p2(){},
p1:function p1(a){this.a=a},
p0:function p0(a,b){this.a=a
this.b=b},
oY:function oY(a){this.a=a},
oZ:function oZ(a){this.a=a},
p_:function p_(){},
aJ(a,b){return new A.il(a)},
id(a){return new A.cQ(a)},
yV(a){return new A.i2(a)},
bj(a){return new A.f6(a)},
An(a){return new A.hr(a)},
Ab(a){return new A.hd(a)},
yv(a){return new A.eL(a)},
CZ(a,b){var s,r="UNIQUE constraint failed",q=J.ap(a),p=a instanceof A.cP,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.C(q,"PRIMARY KEY")&&!B.a.C(q,r)
else p=!0
if(p)return new A.hX("PRIMARY KEY constraint violated.")
if(o===2067||B.a.C(q,r)){s=A.BX(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.ij('Unique constraint violated on "'+s+'".')}if(o===1299||B.a.C(q,"NOT NULL constraint failed")){p=A.BX(q,"NOT NULL constraint failed:")
return new A.hR('NOT NULL constraint violated on "'+p+'".')}if(B.a.C(q,"CHECK constraint failed")||o===275||n===275)return new A.hb("CHECK constraint violated.")
if(B.a.C(q,"FOREIGN KEY")||o===787||n===787)return new A.hq("FOREIGN KEY constraint violated.")
if(B.a.C(q,"database or disk is full"))return new A.cQ("Database full: "+A.r(a))
return new A.cQ("SQLite error: "+A.r(a))},
BX(a,b){var s,r,q,p,o,n,m=B.a.c0(a,b)
if(m<0)return"?"
s=B.a.ag(a,m+b.length)
r=s.length
q=B.a.c0(s,",")
if(q>=0)r=q
p=B.a.c0(s,"(")
s=B.a.d9(B.a.q(s,0,p>=0&&p<r?p:r))
o=B.a.d0(s,".")
s=B.a.d9(o>=0?B.a.ag(s,o+1):s)
if(B.a.S(s,'"')&&B.a.bY(s,'"')){n=B.a.q(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
eV:function eV(){},
il:function il(a){this.a=a},
ij:function ij(a){this.a=a},
hR:function hR(a){this.a=a},
hb:function hb(a){this.a=a},
hX:function hX(a){this.a=a},
hq:function hq(a){this.a=a},
cQ:function cQ(a){this.a=a},
i2:function i2(a){this.a=a},
i4:function i4(a){this.a=a},
f6:function f6(a){this.a=a},
hr:function hr(a){this.a=a},
hd:function hd(a){this.a=a},
eL:function eL(a){this.a=a},
rY:function rY(){},
IX(a,b,c){a.ud(!0,new A.y8(c),"lp_norm_"+b)},
CF(a,b,c,d){var s,r,q='""',p=b.a
if(p.gA(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
y8:function y8(a){this.a=a},
GW(){return Date.now()},
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
return A.EK(a,b,c,d,e,f,g,h)},
EK(a7,a8,a9,b0,b1,b2,b3,b4){var s=0,r=A.h(t.kM),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
if(g==null)g=A.IM()
f=t.N
e=t.ls
d=new A.kO()
c=new A.ks(b2,h,n,d,b1,a9,a3,a7,b0,a0,g,A.D(f,t.nv),new A.tF(A.D(f,e),A.D(e,t.nL)),a1,new A.nG(A.ed(null,null,t.iv),A.ed(null,null,t.oZ)))
c.d=new A.uE(A.c6(null,t.H),d.gww())
d=$.yj()
c.as=new A.r_(c,d)
c.at=new A.qV(c,d)
c.ax=new A.o9(c)
c.ay=new A.qc(c,a7)
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
cp(a,b){return A.EJ(a,b)},
EJ(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cp=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.b2?2:3
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
return A.a(a.e1("lp_migrations","version = ?",[1]),$async$ku)
case 3:if(p.eG(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.n(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$ku)
case 4:case 1:return A.e(q,r)}})
return A.f($async$ku,r)},
k3:function k3(a,b){this.a=a
this.b=b},
ld:function ld(a,b){this.a=a
this.d=b},
rs:function rs(a){this.a=a},
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
qm:function qm(a,b){this.a=a
this.b=b},
qr:function qr(a){this.a=a},
qn:function qn(a){this.a=a},
qq:function qq(a){this.a=a},
qp:function qp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qo:function qo(){},
ql:function ql(a){this.a=a},
qk:function qk(){},
lW:function lW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
vl:function vl(a,b){this.a=a
this.b=b},
vk:function vk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vi:function vi(a,b){this.a=a
this.b=b},
vj:function vj(a,b){this.a=a
this.b=b},
vh:function vh(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
mg:function mg(){},
eX(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$eX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.b
h=b.x
g=A.a6(h).i("b2<1>")
f=A.P(new A.b2(h,new A.qK(c,b),g),g.i("o.E"))
B.c.c8(f,new A.qL())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.Q,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.bj('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.ic()
$.jp()
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
return A.a(A.eY(i,j.gme(),o,q+l,p,l),$async$eX)
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
case 2:i=h.e_(new g.bv(f.aL(e,new A.qH(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.zJ()
if(!m.b.test(n))A.v(A.bj('Field "'+n+u.Z))
if(o.c)throw A.b(A.bj('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.C(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.H("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.gkt()),$async$ky)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.A)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$ky,r)},
aH(a,b,c){return A.EP(a,b,c)},
EP(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aH=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.b
if(!b0.r)throw A.b(A.yv('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.hi(b0.c).jr(b1)
j=A.ES(b0.a,a2,a3)
p=4
s=7
return A.a(A.qI(a7,l),$async$aH)
case 7:i=b4
s=8
return A.a(b0.ho(j),$async$aH)
case 8:h=b4
if(J.t(i,"done")&&h){a3=A.yv('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
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
return A.a(b0.hv(j),$async$aH)
case 19:case 18:s=20
return A.a(A.kz(a7,l,"rebuilding"),$async$aH)
case 20:s=21
return A.a(a7.H("VACUUM INTO '"+A.z(j,"'","''")+"'"),$async$aH)
case 21:a3=k.b
a4=A.z(n,'"','""')
d=B.a.mM(a3,'"'+a4+'"','"'+A.z(m,'"','""')+'"')
s=22
return A.a(a7.H(d),$async$aH)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ai("SELECT rowid, * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aH)
case 25:b=b4
if(J.bO(b)){s=24
break}s=26
return A.a(a7.Z(new A.qJ(b,b1,b0,b2,m),a3),$async$aH)
case 26:a4=J.T(J.nc(b),"rowid")
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
throw A.b(A.yv('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
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
ES(a,b,c){var s=null,r=$.h3(),q=r.us(a),p=A.di(a,r.a).gjo()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mw(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
ER(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.aJ('Field "'+s+'" is required.',s))}if(b==null)return
r=A.zy(a,b)
if(r!=null)throw A.b(A.aJ(A.EO(a,b,r),a.a))},
EQ(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
A.ER(p,b.h(0,p.a))}},
EO(a,b,c){var s,r=a.a,q=J.bq(b)
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
qI(a,b){var s=0,r=A.h(t.v),q,p,o
var $async$qI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.mF("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$qI)
case 3:p=d
o=J.K(p)
q=o.gA(p)?null:A.aa(J.T(o.gD(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qI,r)},
kz(a,b,c){var s=0,r=A.h(t.H)
var $async$kz=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.c2(0,"lp_meta",A.n(["k",b,"v",c],t.N,t.X),B.N),$async$kz)
case 2:return A.e(null,r)}})
return A.f($async$kz,r)},
GX(){return Date.now()},
qK:function qK(a,b){this.a=a
this.b=b},
qL:function qL(){},
qH:function qH(){},
qJ:function qJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kO:function kO(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
rV:function rV(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e},
je(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.eV)throw q
else{s=r
r=A.id("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
Ah(a){return A.je(new A.pa(a))},
Ew(a){return A.je(new A.pT(a))},
Ep(a){return A.je(new A.pm(a))},
Am(a,b){var s
if(new A.l0(a).gl(0)!==1)throw A.b(A.bj('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.bj('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Eo(a){return A.je(new A.pl(a))},
En(a,b){var s,r
if(a.gl(a)!==b.gl(b))return!1
for(s=a.gaK(),s=s.gt(s);s.m();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Fo(a){return A.je(new A.td(a))},
yr(a,b){return A.je(new A.nM(a,b))},
HR(a,b,c,d){var s
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
pa:function pa(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
pT:function pT(a){this.a=a},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
pm:function pm(a){this.a=a},
dV:function dV(a){this.a=a},
pl:function pl(a){this.a=a},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
td:function td(a){this.a=a},
qM:function qM(a,b){this.a=a
this.b=b},
o7:function o7(){},
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
nM:function nM(a,b){this.a=a
this.b=b},
E3(a,b){var s,r=a.a
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
nT:function nT(a,b){this.a=a
this.b=b},
nV:function nV(a,b){this.a=a
this.b=b},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
nQ:function nQ(a,b){this.a=a
this.b=b},
nU:function nU(a,b){this.a=a
this.b=b},
nS:function nS(a,b){this.a=a
this.b=b},
nP:function nP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nO:function nO(){},
nN:function nN(){},
lV:function lV(){},
AY(a,b,c,d){return new A.bu(a,b,c,d,new A.wu())},
ln(a){var s=$.u.h(0,$.n8())
if(s instanceof A.bu&&s.a===a)return s
return null},
bu:function bu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
tC:function tC(a,b,c){this.a=a
this.b=b
this.c=c},
wu:function wu(){this.a=0
this.b=null},
If(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.I(a);s.m();){r=new A.ab("")
A.h2(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}B.c.aT(o)
p=B.c.J(o,"|")
b.$1(p.length)
return A.aD(B.l.v(B.f.v(p)).a)},
hT:function hT(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
qU:function qU(a){this.a=a},
c3:function c3(){},
uE:function uE(a,b){this.a=a
this.b=0
this.c=b},
uF:function uF(a,b,c){this.a=a
this.b=b
this.c=c},
jL(a){var s=$.zI()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
A3(a){return new A.eI(a)},
A4(a,b){return new A.jK(a,b)},
jl(a,b,c,d,e){return A.IW(a,b,c,d,e)},
IW(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$jl=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.fq(A.mw(new A.my(new A.y2(g),A.l([],h),t.mI)))
e=0
h=new A.bZ(A.bL(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.m(),$async$jl)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.q)){j=new A.q($.u,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$jl)
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
return A.a(h.B(),$async$jl)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.t(e,c))throw A.b(A.w("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.aD(B.c.gau(g).a)
A.jL(i)
if(b!=null&&i!==b)throw A.b(A.w("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.le(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$jl,r)},
nu:function nu(){},
eI:function eI(a){this.a=a},
jK:function jK(a,b){this.a=a
this.b=b},
le:function le(a){this.a=a},
y2:function y2(a){this.a=a},
hn:function hn(a){this.d=a},
pc:function pc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pe:function pe(a,b){this.a=a
this.b=b},
pf:function pf(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function pd(a,b,c){this.a=a
this.b=b
this.c=c},
pg:function pg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ph:function ph(){},
Ai(a){return A.n5("lp_file_refs",new A.pb(a))},
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
pb:function pb(a){this.a=a},
qc:function qc(a,b){this.a=a
this.b=b},
qd:function qd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qf:function qf(a){this.a=a},
qg:function qg(a){this.a=a},
qh:function qh(a){this.a=a},
qi:function qi(a){this.a=a},
qj:function qj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qe:function qe(a,b){this.a=a
this.b=b},
B4(a){var s
if(t.m.b(a))s=J.t(a.name,"NotFoundError")||J.t(a.name,"TypeMismatchError")
else s=!1
return s},
u2:function u2(a){this.b=a
this.d=null},
u3:function u3(a){this.a=a},
mj:function mj(a){this.a=a},
AW(a){var s=Date.now()
return new A.lm(a,new A.aN(s,0,!1))},
lm:function lm(a,b){this.a=a
this.c=b},
nq:function nq(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
kL:function kL(){},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(){},
rr:function rr(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a){this.a=a},
re:function re(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rf:function rf(){},
rg:function rg(a,b){this.a=a
this.b=b},
rh:function rh(){},
rc:function rc(a,b){this.a=a
this.b=b},
rd:function rd(){},
EZ(a){return 0.5+B.af.mA()},
F_(a,b,c){return new A.rq(a,b,c)},
hW:function hW(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
rj:function rj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(){},
rn:function rn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rk:function rk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rl:function rl(){},
ro:function ro(a){this.a=a},
rp:function rp(a){this.a=a},
wB:function wB(a,b){this.a=a
this.b=null
this.c=b},
hu(a,b){return new A.d7(a)},
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
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
nf:function nf(a){this.a=a},
ng:function ng(a,b){this.a=a
this.b=b},
nh:function nh(a){this.a=a},
ni:function ni(){},
ys(a){return A.n5("lp_conflicts",new A.o8(a))},
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
o8:function o8(a){this.a=a},
o9:function o9(a){this.a=a},
oe:function oe(a,b,c){this.a=a
this.b=b
this.c=c},
od:function od(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ob:function ob(a,b){this.a=a
this.b=b},
oc:function oc(a,b){this.a=a
this.b=b},
oa:function oa(a,b,c,d,e,f){var _=this
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
ty:function ty(a){this.a=a},
tq:function tq(a){this.a=a},
tw:function tw(a,b){this.a=a
this.b=b},
tv:function tv(a){this.a=a},
tu:function tu(a,b){this.a=a
this.b=b},
tx:function tx(a){this.a=a},
tr:function tr(a,b){this.a=a
this.b=b},
ts:function ts(){},
tt:function tt(){},
e2(a){return new A.cI(a)},
zF(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.eC(a,b)
r=A.b6(a,s)
q=A.aj(r)
p=A.aD(B.l.v(B.f.v(q)).a)
return new A.e6(b,s,q,p,k)}catch(m){l=A.C(m)
if(l instanceof A.cI){o=l
return new A.e6(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.e6(b,k,k,k,l)}}},
IR(a,b){var s,r=A.l([],t.i7)
for(s=J.I(b);s.m();)r.push(A.zF(a,s.gn()))
return r},
zE(a,b){var s=0,r=A.h(t.eT),q
var $async$zE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.IR(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$zE,r)},
eC(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.b_(b.d,j,i),g=a.gdP(),f=h.h(0,"id")
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
continue}m=A.zy(o,n)
if(m!=null)throw A.b(A.e2(A.Hz(o,n,m)))
q.j(0,s,n)}for(j=new A.aB(h,A.m(h).i("aB<1,2>")).gt(0);j.m();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.C(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.t(r,!0))
return q},
Hz(a,b,c){var s,r=a.a,q=J.bq(b)
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
if(r.b(o)&&r.b(n)&&J.jt(o.gO(),new A.xx())&&J.jt(n.gO(),new A.xy())){m=A.bx(A.b_(o,i,q),A.b_(n,i,q))
for(l=A.m(m),k=new A.dv(m,m.r,l.i("dv<1>")),k.c=m.e,p+=".",l=l.c;k.m();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
EM(a,b,c,d,e,f,g){return new A.qz()},
Hu(a,b){var s,r,q=a.b
if(q.gA(q))return null
for(s=b;;){q.h(0,s)
r=B.a.d0(s,".")
if(r<=0)return null
s=B.a.q(s,0,r)}},
yN(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$yN=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.EN(B.bw,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yN,r)},
EN(a,b,c,d,e,f,g){var s,r,q,p=A.bx(b,c),o=A.bx(b,f)
A.EM(b,p,o,c,e,f,g)
s=t.N
r=A.e_(c.gO(),s)
r.F(0,new A.U(f,A.m(f).i("U<1>")))
r.F(0,b.gO())
q=A.P(r,A.m(r).c)
return A.qF(a,b,p,o,0,q,c,A.D(s,t.X),d,e,f,new A.wp(),g)},
qF(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
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
h.j(0,s,m)}return A.qF(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.AB(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.q)return l.aO(new A.qG(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.qF(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
AB(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.n.Y(a1,a4))return a1
if(B.n.Y(a1,a0))return a4
if(B.n.Y(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.jt(a1.gO(),new A.qA()))if(J.jt(a4.gO(),new A.qB()))if(a0!=null)r=s.b(a0)&&J.jt(a0.gO(),new A.qC())
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
d=A.AB(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.q)g=!0
j.push(d)}if(!g){for(s=A.fA(s,s.r,r),r=s.$ti.c,c=0;s.m();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.yC(new A.a_(j,new A.qD(),A.a6(j).i("a_<1,y<j?>>")),q).aO(new A.qE(s,k),q)}A.Hu(a3,a2)
return a4},
CK(a,b,c,d,e,f){return A.yN(a,b,c,d,e,f)},
xx:function xx(){},
xy:function xy(){},
qz:function qz(){},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a,b,c){this.a=a
this.b=b
this.c=c},
wp:function wp(){this.a=!1},
wn:function wn(){},
uJ:function uJ(){},
qG:function qG(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qA:function qA(){},
qB:function qB(){},
qC:function qC(){},
qD:function qD(){},
qE:function qE(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
qX:function qX(a){this.a=a},
qY:function qY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nt:function nt(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(){},
i1:function i1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r_:function r_(a,b){this.a=a
this.b=b},
r6:function r6(a,b){this.a=a
this.b=b},
r4:function r4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r3:function r3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
r5:function r5(a){this.a=a},
dH:function dH(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.b=a
this.f=b},
rE:function rE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rM:function rM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rL:function rL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(a,b,c){this.a=a
this.b=b
this.c=c},
rI:function rI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rH:function rH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rK:function rK(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rN:function rN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
rP:function rP(a,b,c,d){var _=this
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
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
rR:function rR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rQ:function rQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rO:function rO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rT:function rT(a,b,c,d,e,f,g,h,i,j){var _=this
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
tn:function tn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
to:function to(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AX(a){return new A.fh(a)},
DT(a){return new A.bP(a)},
Em(a){return new A.cn(a)},
EX(a){return new A.cq(a)},
bi(a){return new A.f3(a)},
Iu(a){var s=a.wW(),r=new A.xN()
return A.r(r.$2(A.yS(s),4))+"-"+A.r(r.$1(A.yQ(s)))+"-"+A.r(r.$1(A.rv(s)))+" "+A.r(r.$1(A.yO(s)))+":"+A.r(r.$1(A.yP(s)))+":"+A.r(r.$1(A.yR(s)))+"."+A.r(r.$2(A.AJ(s),3))+"Z"},
bm:function bm(){},
fh:function fh(a){this.a=a},
ea:function ea(a,b){this.b=a
this.a=b},
i8:function i8(a){this.a=a},
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
i0:function i0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jB:function jB(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
xN:function xN(){},
Fr(a){return 0.5+B.af.mA()},
z1(a){var s,r=a.toLowerCase()
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
Fs(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).dR(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.z1(r)
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
return A.z2(r,q,p,o,n,A.ax(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).dR(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.z1(r)
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
return A.z2(l,q,r,p,o,A.ax(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).dR(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.z1(r)
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
return A.z2(r,q,p,o,n,A.ax(s))}return k},
z2(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.yu(a,b,c,d,e,f,0)
return s}catch(r){return null}},
tp:function tp(a,b){this.at=a
this.ay=b},
i_:function i_(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
tA:function tA(a,b){this.a=a
this.b=b},
Ia(a,b,c,d,e,f,g,h,i,j){var s,r=A.CM(a,b,c,null,d,e,f,g,h,i,j),q=A.D(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.aU[s],r[s])
return q},
CM(a,b,c,d,e,f,g,h,i,j,k){var s=[]
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
CS(a){return new A.a_(a,new A.y7(),A.a6(a).i("a_<1,k>")).J(0,", ")},
lj(a){return A.n5("lp_sync_row",new A.tz(a))},
r0(a){return A.n5("lp_outbox",new A.r1(a))},
EY(a){return A.n5("lp_op_queue",new A.qW(a))},
jm(a,b){var s=0,r=A.h(t.gi),q,p,o,n,m,l,k,j,i,h
var $async$jm=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(k,$async$jm)
case 3:j.F(0,i.aL(h.a(d),new A.y5(),n))
k=A.P(l,n)
k.push("pending")
k.push("failed")
k=a.ai("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$jm)
case 4:j.F(0,i.aL(h.a(d),new A.y6(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jm,r)},
h1(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$h1=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.e2("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
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
xD(a,b){var s=0,r=A.h(t.H),q,p
var $async$xD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aB(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$xD)
case 3:case 1:return A.e(q,r)}})
return A.f($async$xD,r)},
ck(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$ck=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.mF("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
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
return A.a(A.xD(a,o),$async$ck)
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
hU:function hU(a,b){this.a=a
this.b=b},
y7:function y7(){},
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
tz:function tz(a){this.a=a},
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
r1:function r1(a){this.a=a},
e7:function e7(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
qW:function qW(a){this.a=a},
y5:function y5(){},
y6:function y6(){},
tF:function tF(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b,c,d,e,f,g,h){var _=this
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
nX:function nX(a){this.a=a},
EH(a){var s,r,q
try{s=A.n3(a)
if(t.f.b(s)){r=A.fV(s)
return r}}catch(q){}return null},
EI(a){if(a instanceof A.ip)return A.eB(new A.ly(3,a.a,a.b,null).am())
t.bp.a(a)
return A.yL(a.a,a.b,a.c,a.d)},
yL(a,b,c,d){return A.eB(new A.ly(3,a,null,new A.u4(b,c,d)).am())},
jd(a){return A.Hs(a)},
Hs(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$jd=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.h0()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a0(f.getDirectory(),k),$async$jd)
case 7:n=c
j=$.h3()
i=A.P(j.dh(0,"drift_db"),t.N)
m=i
J.zR(m,j.dh(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ao(l)===0){s=9
break}s=11
return A.a(A.a0(n.getDirectoryHandle(l,{create:!1}),k),$async$jd)
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
return A.f($async$jd,r)},
mY(a,b){return A.Ht(a,b)},
Ht(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$mY=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.jd(a),$async$mY)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a0(m.getFileHandle(A.di(b,$.h3().a).gjo(),{create:!1}),t.m),$async$mY)
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
mZ(a,b){return A.HA(a,b)},
HA(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$mZ=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.jd(a),$async$mZ)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.yA(m,A.di(b,$.h3().a).gjo()),$async$mZ)
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
q9:function q9(){},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
kt:function kt(a,b){this.a=a
this.d=b},
lX:function lX(a){this.a=a},
bM(a){var s,r,q
if(a instanceof A.aN)return A.n(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.ay){s=t.N
return A.n(["lp:bigint",a.k(0)],s,s)}if(t.p.b(a))return A.n(["lp:bytes",A.dd(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aL(a,A.Cs(),s)
r=A.P(r,r.$ti.i("V.E"))
return A.dd(r,s)}if(t.f.b(a)){q=A.D(t.N,t.X)
a.a2(0,new A.xI(q))
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
if(typeof s=="string")return A.zb(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.r(s),k))}if(a.gl(a)===1&&a.G(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.K(s)
q=r.gl(s)
p=new Uint8Array(q)
for(o=0;o<r.gl(s);++o){n=r.h(s,o)
if(!A.aE(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.r(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.r(s),k))}m=A.D(t.N,t.X)
a.a2(0,new A.xC(m))
return m}if(t.j.b(a)){r=t.X
q=J.aL(a,A.Cr(),r)
q=A.P(q,q.$ti.i("V.E"))
return A.dd(q,r)}return a},
xI:function xI(a){this.a=a},
xC:function xC(a){this.a=a},
jj(a,b,c,d,e){return A.IF(a,b,c,d,e,e)},
IF(a,b,c,d,e,f){var s=0,r=A.h(f),q,p=2,o=[],n,m,l
var $async$jj=A.c(function(g,h){if(g===1){o.push(h)
s=p}for(;;)switch(s){case 0:p=4
d.$0()
c.$0()
s=7
return A.a(b.$0(),$async$jj)
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
return A.a(a.$0(),$async$jj)
case 8:throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$jj,r)},
HN(){return new A.aN(Date.now(),0,!1)},
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
tJ:function tJ(a,b){this.f=a
this.r=b},
tM:function tM(){},
tK:function tK(a){this.a=a},
tL:function tL(){},
IT(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.D(t.N,t.X)
try{if(t.f.b(a)){s=A.fV(a)
r=A.D(t.N,t.X)
q=t.j
if(q.b(J.T(s,n))){p=J.T(s,n)
p.toString
p=J.aL(q.a(p),new A.y0(),t.bU)
q=A.P(p,p.$ti.i("V.E"))
J.bN(r,n,q)}if(A.aE(J.T(s,m)))J.bN(r,m,J.T(s,m))
if(A.c0(J.T(s,l)))J.bN(r,l,J.T(s,l))
return r}}catch(o){}return A.D(t.N,t.X)},
CT(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fV(a).h(0,b)
return s}}catch(r){}return null},
Iz(a,b){if(b!=null)return!1
return B.c.cR(a,new A.xS())},
y0:function y0(){},
xS:function xS(){},
xR:function xR(){},
J0(a){if(a instanceof A.eV){if(a instanceof A.il)return"ValidationException"
if(a instanceof A.ij)return"UniqueConstraintException"
if(a instanceof A.hR)return"NotNullConstraintException"
if(a instanceof A.hb)return"CheckConstraintException"
if(a instanceof A.hX)return"PrimaryKeyConstraintException"
if(a instanceof A.hq)return"ForeignKeyConstraintException"
if(a instanceof A.cQ)return"StorageError"
if(a instanceof A.i2)return"RecordNotFoundException"
if(a instanceof A.i4)return"SchemaTooNewError"
if(a instanceof A.hr)return"FtsUnavailableError"
if(a instanceof A.f6)return"SchemaRegistrationError"
if(a instanceof A.hd)return"ConflictBlockedError"
if(a instanceof A.eL)return"DestructiveMigrationRefusedError"
if(a instanceof A.rY)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bm){if(a instanceof A.fh)return"TransientNetworkError"
if(a instanceof A.ea)return"ServerBusyError"
if(a instanceof A.i8)return"ServerError"
if(a instanceof A.bP)return"AuthError"
if(a instanceof A.cn)return"ForbiddenError"
if(a instanceof A.cq)return"NotFoundError"
if(a instanceof A.f2)return"PayloadError"
if(a instanceof A.f3)return"ProtocolError"
if(a instanceof A.eN)return"DuplicateIdError"
if(a instanceof A.dI)return"BatchFailedError"
return"SyncError"}if(a instanceof A.hZ)return"ProtocolEnvelopeException"
if(a instanceof A.hh)return"DatabaseWorkerClosedException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bk)return"StateError"
if(a instanceof A.bC)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
FC(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.aE(s))throw A.b(A.c9('Request "v" must be an int.'))
if(!A.aE(r)||r<0)throw A.b(A.c9('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.cD.C(0,q))throw A.b(A.c9("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.c9('Request "a" must be a map.'))
return new A.fn(s,r,q,p.c6(0,new A.u7(),t.N,t.X))},
c9(a){return new A.hZ(a)},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u7:function u7(){},
ly:function ly(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u4:function u4(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a){this.a=a},
hZ:function hZ(a){this.a=a},
kX:function kX(a,b){this.a=a
this.b=b},
B5(a){return A.bn(A.by(a).a,null)},
B6(a){return A.bn(J.bq(a).a,null)},
W:function W(a){this.a=a},
IU(a){if(!t.f.b(a))throw A.b(A.a3("Schema must be a map: "+A.r(a),null,null))
return A.yr(A.fV(a),t.X)},
fV(a){var s=A.D(t.N,t.X)
a.a2(0,new A.xF(s))
return s},
FE(a){var s,r=A.D(t.N,t.X)
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
fo:function fo(){},
ip:function ip(a,b){this.b=a
this.a=b},
eg:function eg(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
xF:function xF(a){this.a=a},
xE:function xE(){},
lC:function lC(){},
ug:function ug(a){this.a=a},
uh:function uh(a){this.a=a},
ue:function ue(){},
uf:function uf(){},
ud:function ud(a,b,c,d,e){var _=this
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
ui:function ui(a){this.a=a},
lA:function lA(){},
ua:function ua(a,b,c){this.a=a
this.b=b
this.c=c},
u9:function u9(a){this.a=a},
lB:function lB(){},
ub:function ub(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(){},
lE:function lE(){},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
lF:function lF(){},
wY:function wY(a,b){this.a=a
this.b=b},
lG:function lG(){},
up:function up(a){this.a=a},
uq:function uq(a,b){this.a=a
this.b=b},
wL:function wL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lH:function lH(){},
ur:function ur(){},
us:function us(){},
ut:function ut(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fp:function fp(a){this.a=a},
lI:function lI(){},
uA:function uA(a,b,c){this.a=a
this.b=b
this.c=c},
uB:function uB(a){this.a=a},
uD:function uD(a,b,c){this.a=a
this.b=b
this.c=c},
uC:function uC(a,b,c){this.a=a
this.b=b
this.c=c},
uv:function uv(a){this.a=a},
uz:function uz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uu:function uu(a,b,c){this.a=a
this.b=b
this.c=c},
uy:function uy(a,b,c){this.a=a
this.b=b
this.c=c},
ux:function ux(a,b,c){this.a=a
this.b=b
this.c=c},
uw:function uw(a,b,c){this.a=a
this.b=b
this.c=c},
mK:function mK(){},
mL:function mL(){},
mM:function mM(){},
mN:function mN(){},
mO:function mO(){},
mP:function mP(){},
mQ:function mQ(){},
C5(a){return a},
Ck(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.ab("")
o=a+"("
p.a=o
n=A.a6(b)
m=n.i("ce<1>")
l=new A.ce(b,0,s,m)
l.ip(b,0,s,n.c)
m=o+new A.a_(l,new A.xq(),m.i("a_<V.E,k>")).J(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.k(0),null))}},
og:function og(a){this.a=a},
oh:function oh(){},
oi:function oi(){},
xq:function xq(){},
q0:function q0(){},
di(a,b){var s,r,q,p,o,n=b.nB(a),m=b.cr(a)
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
q.push("")}return new A.kM(b,n,m,r,q)},
kM:function kM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
AG(a){return new A.kN(a)},
kN:function kN(a){this.a=a},
Fq(){var s,r,q,p,o,n,m,l,k=null
if(A.z4().gaS()!=="file")return $.jq()
if(!B.a.bY(A.z4().gbl(),"/"))return $.jq()
s=A.BF(k,0,0)
r=A.BD(k,0,0,!1)
q=A.wP(k,0,0,k)
p=A.BC(k,0,0)
o=A.wO(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.BE("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.zl(l,m)
else l=A.eu(l)
if(A.j6("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).ka()==="a\\b")return $.n7()
return $.D8()},
tm:function tm(){},
rt:function rt(a,b,c){this.d=a
this.e=b
this.f=c},
tP:function tP(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
u8:function u8(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
yz(a,b){if(b<0)A.v(A.aO("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.v(A.aO("Offset "+b+u.D+a.gl(0)+"."))
return new A.ka(a,b)},
t5:function t5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ka:function ka(a,b){this.a=a
this.b=b},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
Et(a,b){var s=A.Eu(A.l([A.G0(a,!0)],t.pg)),r=new A.pR(b).$0(),q=B.b.k(B.c.ga3(s).b+1),p=A.Ev(s)?0:3,o=A.a6(s)
return new A.px(s,r,null,1+Math.max(q.length,p),new A.a_(s,new A.pz(),o.i("a_<1,i>")).wF(0,B.bi),!A.II(new A.a_(s,new A.pA(),o.i("a_<1,j?>"))),new A.ab(""))},
Ev(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.t(r.c,q.c))return!1}return!0},
Eu(a){var s,r,q=A.Iy(a,new A.pC(),t.nf,t.K)
for(s=A.m(q),r=new A.aR(q,q.r,q.e,s.i("aR<2>"));r.m();)J.zX(r.d,new A.pD())
s=s.i("aB<1,2>")
r=s.i("hm<o.E,ci>")
s=A.P(new A.hm(new A.aB(q,s),new A.pE(),r),r.i("o.E"))
return s},
G0(a,b){var s=new A.w0(a).$0()
return new A.be(s,!0,null)},
G2(a){var s,r,q,p,o,n,m=a.gaH()
if(!B.a.C(m,"\r\n"))return a
s=a.gM().gaq()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gN()
p=a.ga0()
o=a.gM().gad()
p=A.l7(s,a.gM().gao(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gb6()
return A.t6(r,p,o,A.z(n,"\r\n","\n"))},
G3(a){var s,r,q,p,o,n,m
if(!B.a.bY(a.gb6(),"\n"))return a
if(B.a.bY(a.gaH(),"\n\n"))return a
s=B.a.q(a.gb6(),0,a.gb6().length-1)
r=a.gaH()
q=a.gN()
p=a.gM()
if(B.a.bY(a.gaH(),"\n")){o=A.xM(a.gb6(),a.gaH(),a.gN().gao())
o.toString
o=o+a.gN().gao()+a.gl(a)===a.gb6().length}else o=!1
if(o){r=B.a.q(a.gaH(),0,a.gaH().length-1)
if(r.length===0)p=q
else{o=a.gM().gaq()
n=a.ga0()
m=a.gM().gad()
p=A.l7(o-1,A.Bm(s),m-1,n)
q=a.gN().gaq()===a.gM().gaq()?p:a.gN()}}return A.t6(q,p,r,s)},
G1(a){var s,r,q,p,o
if(a.gM().gao()!==0)return a
if(a.gM().gad()===a.gN().gad())return a
s=B.a.q(a.gaH(),0,a.gaH().length-1)
r=a.gN()
q=a.gM().gaq()
p=a.ga0()
o=a.gM().gad()
p=A.l7(q-1,s.length-B.a.d0(s,"\n")-1,o-1,p)
return A.t6(r,p,s,B.a.bY(a.gb6(),"\n")?B.a.q(a.gb6(),0,a.gb6().length-1):a.gb6())},
Bm(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.hP(a,"\n",s-2)-1
else return s-B.a.d0(a,"\n")-1},
px:function px(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pR:function pR(a){this.a=a},
pz:function pz(){},
py:function py(){},
pA:function pA(){},
pC:function pC(){},
pD:function pD(){},
pE:function pE(){},
pB:function pB(a){this.a=a},
pS:function pS(){},
pF:function pF(a){this.a=a},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(a,b){this.a=a
this.b=b},
pO:function pO(a){this.a=a},
pP:function pP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pK:function pK(a,b){this.a=a
this.b=b},
pL:function pL(a,b){this.a=a
this.b=b},
pG:function pG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function pJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pQ:function pQ(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
w0:function w0(a){this.a=a},
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
Fi(a,b,c){return new A.f9(c,a,b)},
lb:function lb(){},
f9:function f9(a,b,c){this.c=a
this.a=b
this.b=c},
fa:function fa(){},
t6(a,b,c,d){var s=new A.cO(d,a,b,c)
s.oc(a,b,c)
if(!B.a.C(d,c))A.v(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.xM(d,c,a.gao())==null)A.v(A.O('The span text "'+c+'" must start at column '+(a.gao()+1)+' in a line within "'+d+'".',null))
return s},
cO:function cO(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Fm(a){var s
A:{if(18===a){s=B.cE
break A}if(23===a){s=B.cF
break A}if(9===a){s=B.cG
break A}s=null
break A}return s},
ia:function ia(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
Fl(a,b,c,d,e,f,g){return new A.cP(d,b,c,e,f,a,g)},
cP:function cP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tb:function tb(){},
jv:function jv(a){this.a=a},
H0(a,b,c){var s,r,q,p,o,n=new A.lx(c,A.aG(c.b,null,!1,t.X))
try{A.BV(a,b.$1(n))}catch(r){s=A.C(r)
q=B.f.v(A.hk(s))
p=a.a
o=p.cn(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
BV(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.aE(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.B9(b).k(0)))
break A}if(b instanceof A.ay){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.A2(b).k(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.c0(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.B9(b?1:0).k(0)))
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
break A}if(t.po.b(b)){A.BV(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.v(A.aI(b,"result","Unsupported type"))}return s},
oE:function oE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
oN:function oN(a){this.a=a},
oM:function oM(a){this.a=a},
oO:function oO(a){this.a=a},
oK:function oK(a){this.a=a},
oJ:function oJ(a){this.a=a},
oL:function oL(a){this.a=a},
oG:function oG(a){this.a=a},
oF:function oF(a){this.a=a},
oH:function oH(a){this.a=a},
oP:function oP(a){this.a=a},
oI:function oI(a,b){this.a=a
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
wE:function wE(a,b){this.a=a
this.b=b},
wF:function wF(a,b,c){this.a=a
this.b=b
this.c=c},
wG:function wG(a,b,c){this.a=a
this.b=b
this.c=c},
t7:function t7(){},
fb:function fb(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
yE(a,b){var s=$.n6()
return new A.kd(A.D(t.N,t.a_),s,a)},
kd:function kd(a,b,c){this.d=a
this.b=b
this.a=c},
m9:function m9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
IV(a){var s=J.DP(new v.G.URL(a,"file:///").pathname,"/")
return new A.b2(s,new A.y1(),A.a6(s).i("b2<1>"))},
y1:function y1(){},
ok:function ok(){},
kZ:function kZ(a,b,c){this.d=a
this.a=b
this.c=c},
bT:function bT(a,b){this.a=a
this.b=b},
wo:function wo(a){this.a=a
this.b=-1},
mp:function mp(){},
mq:function mq(){},
ms:function ms(){},
mt:function mt(){},
qZ:function qZ(a,b){this.a=a
this.b=b},
Fa(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bv(r,"step")}return s},
dP:function dP(){},
dX:function dX(a){this.a=a},
jU:function jU(a){this.a=a},
fk(a){return new A.cU(a)},
A0(a,b){var s,r,q,p
if(b==null)b=$.n6()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cs(256)
r&2&&A.E(a)
a[q]=p}},
cU:function cU(a){this.a=a},
i9:function i9(a){this.a=a},
aW:function aW(){},
jJ:function jJ(){},
jI:function jI(){},
IZ(a,b){var s=null,r=new A.e0(t.kk)
return A.yc(a,new A.iq(s,s,s,s,s,s,s,s,new A.ya(new A.y9(r,A.xj(new A.yb(r)))),s,s,s,s),s,b)},
eh:function eh(a){var _=this
_.d=a
_.c=_.b=_.a=null},
yb:function yb(a){this.a=a},
y9:function y9(a,b){this.a=a
this.b=b},
ya:function ya(a){this.a=a},
u_:function u_(a){this.a=a},
tV:function tV(a,b,c){this.a=a
this.b=b
this.c=c},
u1:function u1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u0:function u0(a,b,c){this.b=a
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
oq:function oq(a,b,c){this.a=a
this.b=b
this.c=c},
on:function on(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
os:function os(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ou:function ou(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ow:function ow(a,b){this.a=a
this.b=b},
op:function op(a){this.a=a},
ov:function ov(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oA:function oA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oy:function oy(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
or:function or(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function ot(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
oo:function oo(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b){this.a=a
this.$ti=b},
nj:function nj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nl:function nl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
cm(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.o_(r,a,b),!1,q)
A.bc(a,"error",new A.o0(r,a),!1,q)
return s},
E7(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.o4(r,a,b),!1,q)
A.bc(a,"error",new A.o5(r,a),!1,q)
A.bc(a,"blocked",new A.o6(r),!1,q)
return s},
el:function el(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
vt:function vt(a,b){this.a=a
this.b=b},
vu:function vu(a,b){this.a=a
this.b=b},
o_:function o_(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(a,b){this.a=a
this.b=b},
o4:function o4(a,b,c){this.a=a
this.b=b
this.c=c},
o5:function o5(a,b){this.a=a
this.b=b},
o6:function o6(a){this.a=a},
h0(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
Ak(a,b,c){var s=a.read(b,c)
return s},
Al(a,b,c){var s=a.write(b,c)
return s},
yA(a,b){return A.a0(a.removeEntry(b,{recursive:!1}),t.X)},
Aj(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.v(A.O("Target object does not implement the async iterable interface",null))
return new A.ep(new A.pi(),new A.h6(a,s),s.i("ep<a4.T,L>"))},
pi:function pi(){},
tW:function tW(a){this.a=a},
tX:function tX(a){this.a=a},
tZ(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$tZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a0(p.fetch(new p.URL(a,A.b5(p.location).href),null),t.m),$async$tZ)
case 3:q=o.tY(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$tZ,r)},
tY(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$tY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.jX(A.D(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.tW(p).hR(a),$async$tY)
case 3:q=new o.fl(new n.u_(m.FB(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$tY,r)},
fl:function fl(a){this.a=a},
G4(a){var s=new A.iJ(a,new A.ag(new A.q($.u,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.og(a)
return s},
kf(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$kf=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.nm(a)
n=A.yE("dart-memory",null)
m=$.n6()
l=new A.d9(o,n,new A.e0(t.p3),A.aS(p),A.D(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.hU(),$async$kf)
case 3:s=4
return A.a(l.eq(),$async$kf)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kf,r)},
nm:function nm(a){this.a=null
this.b=a},
np:function np(a){this.a=a},
no:function no(a,b,c){this.a=a
this.b=b
this.c=c},
nn:function nn(a){this.a=a},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
w3:function w3(a){this.a=a},
w4:function w4(a){this.a=a},
w2:function w2(a){this.a=a},
w5:function w5(a,b,c){this.a=a
this.b=b
this.c=c},
w7:function w7(a,b){this.a=a
this.b=b},
w6:function w6(a,b){this.a=a
this.b=b},
vF:function vF(a,b,c){this.a=a
this.b=b
this.c=c},
vG:function vG(a,b){this.a=a
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
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
pW:function pW(){},
pU:function pU(a,b){this.a=a
this.b=b},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
w1:function w1(a,b){this.a=a
this.b=b},
aX:function aX(){},
iH:function iH(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
iB:function iB(a,b,c){var _=this
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
AQ(a){var s=A.yE("dart-memory",null),r=$.n6()
return new A.f8(s,r,a)},
l3(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$l3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.h0()
if(j==null)throw A.b(A.fk(1))
p=t.m
s=3
return A.a(A.a0(j.getDirectory(),p),$async$l3)
case 3:o=d
n=A.IV(a),m=J.I(n.a),n=new A.dp(m,n.b,n.$ti.i("dp<1>")),l=null
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
t3(a,b){var s=0,r=A.h(t.g_),q,p
var $async$t3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.h0()==null)throw A.b(A.fk(1))
p=A
s=3
return A.a(A.l4(a),$async$t3)
case 3:q=p.t2(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$t3,r)},
t2(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$t2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.AQ(c)
s=3
return A.a(p.cu(a,!1),$async$t2)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$t2,r)},
eQ:function eQ(a,b,c){this.c=a
this.a=b
this.b=c},
f8:function f8(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
t4:function t4(a,b){this.a=a
this.b=b},
mz:function mz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
wk:function wk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FB(a,b){var s=A.b5(a.exports.memory)
b.b!==$&&A.yf()
b.b=s
s=new A.tQ(s,b,a.exports)
s.od(a,b)
return s},
lJ(a,b){var s,r=A.bH(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dq(a,b,c){var s=a.buffer
return B.k.hu(A.bH(s,b,c==null?A.lJ(a,b):c))},
z5(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.hu(A.bH(s,b,c==null?A.lJ(a,b):c))},
B7(a,b,c){var s=new Uint8Array(c)
B.e.cC(s,0,A.bH(a.buffer,b,c))
return s},
tQ:function tQ(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
tR:function tR(a){this.a=a},
tS:function tS(a){this.a=a},
tT:function tT(a){this.a=a},
tU:function tU(a){this.a=a},
xz(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$xz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.jr()
s=l!=null?3:5
break
case 3:p=A.Hw()
s=6
return A.a(A.io(l,p,null,null,!1),$async$xz)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.az({port:m.port1,lockName:p},new A.he(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xz,r)},
Hw(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bh(97+$.DA().cs(26))
return r.charCodeAt(0)==0?r:r},
DY(a){return new A.ha(a)},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
ry:function ry(){},
rC:function rC(a){this.a=a},
rD:function rD(a){this.a=a},
rB:function rB(a){this.a=a},
rA:function rA(a){this.a=a},
rz:function rz(a){this.a=a},
ha:function ha(a){this.a=a},
oD:function oD(){},
jT:function jT(a){this.a=a},
ol:function ol(a){this.a=a},
ef:function ef(){},
k9(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$k9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.l4(a),$async$k9)
case 3:p=e
o=A.AQ(c)
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
pv:function pv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
io(a,b,c,d,e){var s,r,q={},p=new A.q($.u,t.nI),o=new A.ag(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.yB(A.a0(a.request(b,s,A.cB(new A.u5(q,o))),r),new A.u6(q,d,o),r,t.K)
return p},
u5:function u5(a,b){this.a=a
this.b=b},
u6:function u6(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.a=a},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
oR:function oR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oQ:function oQ(a,b){this.a=a
this.b=b},
oS:function oS(a){this.a=a},
hL:function hL(a){this.a=!1
this.b=a},
qR:function qR(a,b){this.a=a
this.b=b},
qQ:function qQ(a,b,c,d,e){var _=this
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
E4(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.k.b(n)?n:new A.bD(n,A.a6(n).i("bD<1,k>"))
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
Fd(a){var s
if(J.t(a.t,"errorResponse")){s=A.Eg(a)
if(s!=null&&s instanceof A.d2)return s
else return new A.f5(a.e)}else return new A.f5("Did not respond with expected type, got "+A.r(a))},
Eg(a){var s=a.s,r=s==null?null:A.ah(s)
A:{if(0===r){s=A.Eh(t.c.a(a.r))
break A}if(1===r){s=B.ae
break A}s=null
break A}return s},
Eh(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.w("Pattern matching error"))
n=new A.p8()
l=A.ah(A.ev(l))
A.M(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.dR(i,h,A.bH(h,0,o))}else p=o
n=n.$1(k)
A.BO(g)
return new A.cP(s,r,l,g==null?o:A.ah(g),n,q,p)},
Ei(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Fu(l)
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
Fe(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.pv(a2,512,"transfer" in a2)
a5.m2(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Fa(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.pg(l)
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
c=new A.cZ(!1).cG(f,0,a,!0)
i=c
g=B.as
break
case 4:i=s.kv(j)
g=B.at
break
case 5:default:i=a
g=B.au}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.lJ(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.cZ(!1).cG(a0,0,a,!0)}return A.CL(!1,b,0,0,a1,a,a3.wT(0))},
IJ(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
p8:function p8(){},
CL(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
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
Io(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
kx:function kx(a,b,c){this.a=a
this.b=b
this.$ti=c},
t_:function t_(){},
El(a){var s,r
for(s=0;s<5;++s){r=B.c8[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
Ft(a){var s,r,q,p,o,n,m,l,k,j=null
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
r=B.bc
break A}throw A.b(A.O("Unsupported value: "+A.r(a),j))}return new A.az(r,s)},
Fu(a){var s,r,q,p,o,n
if(a instanceof A.dR)return new A.az(a.a,a.b)
s=[]
r=J.K(a)
q=r.gl(a)
p=new Uint8Array(q)
for(o=0;o<r.gl(a);++o){n=A.Ft(r.h(a,o))
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
i=$.jr()
i=i==null?null:A.io(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bd(i,t.b3),$async$n1)
case 3:l=b
p=5
s=8
return A.a(A.E6(m.open("drift_mock_db"),t.m),$async$n1)
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
xv(a){return A.Id(a)},
Id(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$xv=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.b5(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cB(new A.xw(j,m))
s=7
return A.a(A.E5(m,t.m),$async$xv)
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
return A.f($async$xv,r)},
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
j=new A.bZ(A.bL(A.Aj(m),"stream",t.K),t.hT)
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
E5(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.nY(r,a,b),!1,q)
A.bc(a,"error",new A.nZ(r,a),!1,q)
return s},
E6(a,b){var s=new A.q($.u,b.i("q<0>")),r=new A.ag(s,b.i("ag<0>")),q=t.m
A.bc(a,"success",new A.o1(r,a,b),!1,q)
A.bc(a,"error",new A.o2(r,a),!1,q)
A.bc(a,"blocked",new A.o3(r,a),!1,q)
return s},
xw:function xw(a,b){this.a=a
this.b=b},
nY:function nY(a,b,c){this.a=a
this.b=b
this.c=c},
nZ:function nZ(a,b){this.a=a
this.b=b},
o1:function o1(a,b,c){this.a=a
this.b=b
this.c=c},
o2:function o2(a,b){this.a=a
this.b=b},
o3:function o3(a,b){this.a=a
this.b=b},
ru:function ru(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
d2:function d2(a){this.a=a},
H_(a){var s=a.gmq()
return new A.ep(new A.xi(),s,A.m(s).i("ep<a4.T,L>"))},
Bi(a,b){var s=A.l([],t.E),r=b==null?a.b:b
return new A.fs(a,r,new A.iX(),new A.iX(),new A.iX(),s)},
FW(a,b,c){var s=t.S
s=new A.iz(c,A.l([],t.fV),a.a,new A.aC(new A.q($.u,t.D),t.h),A.D(s,t.br),A.D(s,t.m))
s.oa(a)
s.of(a,b,c)
return s},
BW(a){var s
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
d=$.jr()
d=d==null?null:A.io(d,"_drift_feature_detection",null,null,!1)
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
return A.a(A.jg(l),$async$dB)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.yG(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a0(A.b5(e),t.X),$async$dB)
case 13:q=B.am
n=[1]
s=5
break
case 12:g=i
q=new A.iS(!0,g)
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
return A.a(A.yA(m,"_drift_feature_detection"),$async$dB)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dB,r)},
jg(a){return A.HO(a)},
HO(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$jg=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a0(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$jg)
case 7:j=c
s=8
return A.a(A.a0(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$jg)
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
return A.a(A.a0(a.createSyncAccessHandle(),t.m),$async$jg)
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
return A.f($async$jg,r)},
xi:function xi(){},
iX:function iX(){this.a=null},
fs:function fs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
vm:function vm(a){this.a=a},
vq:function vq(a,b){this.a=a
this.b=b},
vn:function vn(a,b){this.a=a
this.b=b},
vo:function vo(a){this.a=a},
vp:function vp(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
v6:function v6(a){this.a=a},
vb:function vb(a,b){this.a=a
this.b=b},
ve:function ve(a,b,c){this.a=a
this.b=b
this.c=c},
v8:function v8(a,b){this.a=a
this.b=b},
v7:function v7(a,b){this.a=a
this.b=b},
vd:function vd(a,b){this.a=a
this.b=b},
vc:function vc(a,b){this.a=a
this.b=b},
vg:function vg(a,b){this.a=a
this.b=b},
vf:function vf(a,b){this.a=a
this.b=b},
v9:function v9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
va:function va(a,b){this.a=a
this.b=b},
v5:function v5(a){this.a=a},
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
oV:function oV(a){this.a=a},
oU:function oU(a){this.a=a},
oT:function oT(a,b){this.a=a
this.b=b},
ul:function ul(a,b,c,d,e,f){var _=this
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
um:function um(a,b){this.a=a
this.b=b},
un:function un(a,b){this.a=a
this.b=b},
uo:function uo(a){this.a=a},
FD(){var s=v.G
if(A.Ey(s,"DedicatedWorkerGlobalScope"))return new A.m1(s,new A.m2(s.location.href))
else return new A.mx(s,new A.m2(s.location.href))},
j8:function j8(){},
m1:function m1(a,b){this.a=a
this.b=b},
mx:function mx(a,b){this.a=a
this.b=b},
wz:function wz(a){this.a=a},
wA:function wA(a,b,c){this.a=a
this.b=b
this.c=c},
wy:function wy(a){this.a=a},
ww:function ww(a){this.a=a},
wx:function wx(a){this.a=a},
m2:function m2(a){this.a=a},
vA:function vA(a){this.a=a},
lh:function lh(a,b,c){this.c=a
this.a=b
this.b=c},
tl:function tl(a,b){var _=this
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
else{s=A.Cl(new A.vD(c),t.m)
s=s==null?null:A.cB(s)}s=new A.iF(a,b,s,!1,e.i("iF<0>"))
s.ji()
return s},
Cl(a,b){var s=$.u
if(s===B.i)return a
return s.hp(a,b)},
yw:function yw(a,b){this.a=a
this.$ti=b},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iF:function iF(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
vD:function vD(a){this.a=a},
vE:function vE(a){this.a=a},
D_(a){return v.mangledGlobalNames[a]},
CP(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
EB(a,b){return b in a},
yG(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Iy(a,b,c,d){var s,r,q,p,o,n=A.D(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.bp(p,q)}return n},
xt(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.E(a)
a[r]=s&255
b=s/256|0;--r}},
J9(a){return a},
CY(a){if(a instanceof A.d3)return a
return new A.d3(a)},
Jb(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.C(p)
if(q instanceof A.f9){s=q
throw A.b(A.Fi("Invalid "+a+": "+s.a,s.b,s.gfj()))}else if(t.Y.b(q)){r=q
throw A.b(A.a3("Invalid "+a+' "'+b+'": '+r.gjT(),r.gfj(),r.gaq()))}else throw p}},
jh(){var s,r,q,p=$.DB(),o=$.Du()+1
$.H5=o
s=B.a.hW(B.b.kb(o,36),8,"0")
r=J.As(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cs(36)]
return B.a.q(s+B.c.dV(r),0,15)},
n5(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.cQ)throw q
else{s=r
r=A.id("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
xB(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.z
try{s=B.h.aA(a,null)
if(t.f.b(s)){q=A.b_(s,t.N,t.X)
return q}return B.z}catch(p){r=A.C(p)
q=A.id("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Cy(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.b5
try{s=B.h.aA(a,null)
if(t.j.b(s)){q=J.js(s,t.N)
q=q.wV(q)
return q}return B.b5}catch(p){r=A.C(p)
q=A.id("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Cx(a){var s,r,q,p,o=null
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
if(typeof s=="string")return A.hY(s,null)
return null},
J5(a,b,c){var s=A.z(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
IS(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.bK)
s=a.h(0,"type")
if(!J.t(s,"aes-gcm"))throw A.b(A.a3("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ao(r)!==32)throw A.b(B.bJ)
q=new Uint8Array(32)
for(p=J.K(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.aE(n)||n<0||n>255)throw A.b(A.a3("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.zZ(q)
p=$.yj()
if($.jo()!==B.L)A.v(A.w("BigEndian systems are unsupported"))
return new A.ne(new A.jV(12,32,m),new A.i7(new A.l2(A.zZ(q)),m),p)},
CA(a){var s,r=A.D(t.N,t.X)
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
CC(a){var s,r=A.D(t.N,t.X)
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
IO(){var s=A.FD(),r=t.cj
new A.ul(s,B.bt,A.l([],t.az),A.D(t.S,t.lp),new A.hL(A.yK(r)),new A.hL(A.yK(r))).dT()},
Cv(){var s,r,q,p,o=null
try{o=A.z4()}catch(s){if(t.mA.b(A.C(s))){r=$.xh
if(r!=null)return r
throw s}else throw s}if(J.t(o,$.BS)){r=$.xh
r.toString
return r}$.BS=o
if($.zK()===$.jq())r=$.xh=o.bn(".").k(0)
else{q=o.ka()
p=q.length-1
r=$.xh=p===0?q:B.a.q(q,0,p)}return r},
CH(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Cz(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.CH(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.q(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
II(a){var s,r,q,p
if(a.gl(0)===0)return!0
s=a.gD(0)
for(r=A.cf(a,1,null,a.$ti.i("V.E")),q=r.$ti,r=new A.ae(r,r.gl(0),q.i("ae<V.E>")),q=q.i("V.E");r.m();){p=r.d
if(!J.t(p==null?q.a(p):p,s))return!1}return!0},
IY(a,b){var s=B.c.c0(a,null)
if(s<0)throw A.b(A.O(A.r(a)+" contains no null elements.",null))
a[s]=b},
CU(a,b){var s=B.c.c0(a,b)
if(s<0)throw A.b(A.O(A.r(a)+" contains no elements matching "+b.k(0)+".",null))
a[s]=null},
Il(a,b){var s,r,q,p
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),r=r.i("F.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
xM(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.c1(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.c0(a,b)
while(r!==-1){q=r===0?0:B.a.hP(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.c1(a,b,r+1)}return null},
zw(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.cP(A.dq(r.b,p.sqlite3_errmsg(q),null),A.dq(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
yd(a,b,c,d,e){throw A.b(A.zw(a.a,a.b,b,c,d,e))},
A2(a){if(a.X(0,$.D2())<0||a.X(0,$.D1())>0)throw A.b(A.Ag("BigInt value exceeds the range of 64 bits"))
return a},
Fb(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ah(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dq(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.B7(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Ao(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bh("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cs(61)))
return s.charCodeAt(0)==0?s:s},
rX(a){var s=0,r=A.h(t.lo),q
var $async$rX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a0(a.arrayBuffer(),t.a),$async$rX)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$rX,r)}},B={}
var w=[A,J,B]
var $={}
A.yI.prototype={}
J.kh.prototype={
R(a,b){return a===b},
gI(a){return A.e8(a)},
k(a){return"Instance of '"+A.kR(a)+"'"},
gak(a){return A.by(A.zo(this))}}
J.kj.prototype={
k(a){return String(a)},
gI(a){return a?519018:218159},
gak(a){return A.by(t.y)},
$ia9:1,
$iX:1}
J.hB.prototype={
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
J.kP.prototype={}
J.dm.prototype={}
J.bE.prototype={
k(a){var s=a[$.D5()]
if(s==null)s=a[$.eD()]
if(s==null)return this.o_(a)
return"JavaScript function for "+J.ap(s)}}
J.bf.prototype={
gI(a){return 0},
k(a){return String(a)}}
J.eT.prototype={
gI(a){return 0},
k(a){return String(a)}}
J.B.prototype={
hq(a,b){return new A.bD(a,A.a6(a).i("@<1>").T(b).i("bD<1,2>"))},
u(a,b){a.$flags&1&&A.E(a,29)
a.push(b)},
i3(a,b){var s
a.$flags&1&&A.E(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.rW(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.E(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.rW(b,null))
a.splice(b,0,c)},
jL(a,b,c){var s,r
a.$flags&1&&A.E(a,"insertAll",2)
A.AO(b,0,a.length,"index")
if(!t.O.b(c))c=J.DR(c)
s=J.ao(c)
a.length=a.length+s
r=b+s
this.af(a,r,a.length,a,b)
this.ar(a,b,r,c)},
k6(a){a.$flags&1&&A.E(a,"removeLast",1)
if(a.length===0)throw A.b(A.xG(a,-1))
return a.pop()},
E(a,b){var s
a.$flags&1&&A.E(a,"remove",1)
for(s=0;s<a.length;++s)if(J.t(a[s],b)){a.splice(s,1)
return!0}return!1},
t2(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aq(a))}q=p.length
if(q===o)return
this.sl(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
F(a,b){var s
a.$flags&1&&A.E(a,"addAll",2)
if(Array.isArray(b)){this.on(a,b)
return}for(s=J.I(b);s.m();)a.push(s.gn())},
on(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aq(a))
for(s=0;s<r;++s)a.push(b[s])},
ah(a){a.$flags&1&&A.E(a,"clear","clear")
a.length=0},
c5(a,b,c){return new A.a_(a,b,A.a6(a).i("@<1>").T(c).i("a_<1,2>"))},
J(a,b){var s,r=A.aG(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
dV(a){return this.J(a,"")},
cv(a,b){return A.cf(a,0,A.bL(b,"count",t.S),A.a6(a).c)},
bd(a,b){return A.cf(a,b,null,A.a6(a).c)},
eH(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aq(a))}if(c!=null)return c.$0()
throw A.b(A.at())},
mm(a,b){return this.eH(a,b,null)},
a4(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.ak(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ak(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a6(a))
return A.l(a.slice(b,c),A.a6(a))},
b1(a,b){return this.U(a,b,null)},
fe(a,b,c){A.b1(b,c,a.length)
return A.cf(a,b,c,A.a6(a).c)},
gD(a){if(a.length>0)return a[0]
throw A.b(A.at())},
ga3(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.at())},
gau(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.at())
throw A.b(A.hy())},
mK(a,b,c){a.$flags&1&&A.E(a,18)
A.b1(b,c,a.length)
a.splice(b,c-b)},
af(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.E(a,5)
A.b1(b,c,a.length)
s=c-b
if(s===0)return
A.b0(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.nd(d,e).cw(0,!1)
q=0}p=J.K(r)
if(q+s>p.gl(r))throw A.b(A.Ar())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
cR(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aq(a))}return!1},
dQ(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aq(a))}return!0},
c8(a,b){var s,r,q,p,o
a.$flags&2&&A.E(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.H9()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a6(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dC(b,2))
if(p>0)this.t3(a,p)},
aT(a){return this.c8(a,null)},
t3(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
c0(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.t(a[s],b))return s
return-1},
d0(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.t(a[s],b))return s
return-1},
C(a,b){var s
for(s=0;s<a.length;++s)if(J.t(a[s],b))return!0
return!1},
gA(a){return a.length===0},
gW(a){return a.length!==0},
k(a){return A.q1(a,"[","]")},
cw(a,b){var s=A.l(a.slice(0),A.a6(a))
return s},
e8(a){return this.cw(a,!0)},
gt(a){return new J.eH(a,a.length,A.a6(a).i("eH<1>"))},
gI(a){return A.e8(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.E(a,"set length","change the length of")
if(b<0)throw A.b(A.ak(b,0,null,"newLength",null))
if(b>a.length)A.a6(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.xG(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.E(a)
if(!(b>=0&&b<a.length))throw A.b(A.xG(a,b))
a[b]=c},
ke(a,b){return new A.bv(a,b.i("bv<0>"))},
vO(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gak(a){return A.by(A.a6(a))},
$iaZ:1,
$iG:1,
$io:1,
$ip:1}
J.ki.prototype={
x_(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kR(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.q2.prototype={}
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
else if(a===b){if(a===0){s=this.gjQ(b)
if(this.gjQ(a)===s)return 0
if(this.gjQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gjQ(a){return a===0?1/a<0:a<0},
i5(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
u4(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
vg(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
mO(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
cT(a,b,c){if(this.X(b,c)>0)throw A.b(A.ez(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
kb(a,b){var s,r,q,p
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
fc(a,b){return a+b},
aj(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
io(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.lI(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.lI(a,b)},
lI(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bx(a,b){if(b<0)throw A.b(A.ez(b))
return b>31?0:a<<b>>>0},
tj(a,b){return b>31?0:a<<b>>>0},
dg(a,b){var s
if(b<0)throw A.b(A.ez(b))
if(a>0)s=this.jg(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ac(a,b){var s
if(a>0)s=this.jg(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lG(a,b){if(0>b)throw A.b(A.ez(b))
return this.jg(a,b)},
jg(a,b){return b>31?0:a>>>b},
nC(a,b){return a>b},
gak(a){return A.by(t.o)},
$iam:1,
$ia5:1}
J.hA.prototype={
gm3(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.K(q,4294967296)
s+=32}return s-Math.clz32(q)},
gak(a){return A.by(t.S)},
$ia9:1,
$ii:1}
J.kk.prototype={
gak(a){return A.by(t.i)},
$ia9:1}
J.da.prototype={
jn(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.mB(b,a,c)},
hl(a,b){return this.jn(a,b,0)},
dZ(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.fd(c,a)},
bY(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ag(a,r-s)},
mM(a,b,c){A.AO(0,0,a.length,"startIndex")
return A.J4(a,b,c,0)},
dh(a,b){var s=A.l(a.split(b),t.s)
return s},
d5(a,b,c,d){var s=A.b1(b,c,a.length)
return A.CX(a,b,s,d)},
aa(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.aa(a,b,0)},
q(a,b,c){return a.substring(b,A.b1(b,c,a.length))},
ag(a,b){return this.q(a,b,null)},
d9(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.EC(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Aw(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wY(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.Aw(r,s))},
bb(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bv)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
hW(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bb(c,s)+a},
wj(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bb(" ",s)},
c1(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c0(a,b){return this.c1(a,b,0)},
hP(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
d0(a,b){return this.hP(a,b,null)},
C(a,b){return A.J1(a,b,0)},
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
A.vs.prototype={
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
k9(){var s,r=this
if(r.a===0)return $.n9()
s=J.bB(B.e.ga5(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.n9()
return s},
gl(a){return this.a}}
A.v2.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.aY(b))
this.b.push(s)
this.a=this.a+s.length},
k9(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.n9()
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
gt(a){return new A.jN(J.I(this.gb5()),A.m(this).i("jN<1,2>"))},
gl(a){return J.ao(this.gb5())},
gA(a){return J.bO(this.gb5())},
gW(a){return J.eG(this.gb5())},
bd(a,b){var s=A.m(this)
return A.eJ(J.nd(this.gb5(),b),s.c,s.y[1])},
cv(a,b){var s=A.m(this)
return A.eJ(J.yo(this.gb5(),b),s.c,s.y[1])},
a4(a,b){return A.m(this).y[1].a(J.nb(this.gb5(),b))},
gD(a){return A.m(this).y[1].a(J.c2(this.gb5()))},
ga3(a){return A.m(this).y[1].a(J.nc(this.gb5()))},
gau(a){return A.m(this).y[1].a(J.yn(this.gb5()))},
C(a,b){return J.ym(this.gb5(),b)},
k(a){return J.ap(this.gb5())}}
A.jN.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.dK.prototype={
gb5(){return this.a}}
A.iC.prototype={$iG:1}
A.iy.prototype={
h(a,b){return this.$ti.y[1].a(J.T(this.a,b))},
j(a,b,c){J.bN(this.a,b,this.$ti.c.a(c))},
sl(a,b){J.DN(this.a,b)},
u(a,b){J.bp(this.a,this.$ti.c.a(b))},
c8(a,b){var s=b==null?null:new A.v3(this,b)
J.zX(this.a,s)},
fe(a,b,c){var s=this.$ti
return A.eJ(J.DK(this.a,b,c),s.c,s.y[1])},
af(a,b,c,d,e){var s=this.$ti
J.DO(this.a,b,c,A.eJ(d,s.y[1],s.c),e)},
ar(a,b,c,d){return this.af(0,b,c,d,0)},
$iG:1,
$ip:1}
A.v3.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bD.prototype={
hq(a,b){return new A.bD(this.a,this.$ti.i("@<1>").T(b).i("bD<1,2>"))},
gb5(){return this.a}}
A.dL.prototype={
bW(a,b,c){return new A.dL(this.a,this.$ti.i("@<1,2>").T(b).T(c).i("dL<1,2,3,4>"))},
G(a){return this.a.G(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a2(a,b){this.a.a2(0,new A.nF(this,b))},
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
return s.c5(s,new A.nE(this),this.$ti.i("S<3,4>"))}}
A.nF.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.nE.prototype={
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
A.y_.prototype={
$0(){return A.c6(null,t.H)},
$S:3}
A.t1.prototype={}
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
if(s.gl(s)>1)throw A.b(A.hy())
return s.a4(0,0)},
C(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(J.t(r.a4(0,s),b))return!0
if(q!==r.gl(r))throw A.b(A.aq(r))}return!1},
dQ(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(!b.$1(r.a4(0,s)))return!1
if(q!==r.gl(r))throw A.b(A.aq(r))}return!0},
J(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a4(0,0))
if(o!==p.gl(p))throw A.b(A.aq(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a4(0,q))
if(o!==p.gl(p))throw A.b(A.aq(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a4(0,q))
if(o!==p.gl(p))throw A.b(A.aq(p))}return r.charCodeAt(0)==0?r:r}},
dV(a){return this.J(0,"")},
c5(a,b,c){return new A.a_(this,b,A.m(this).i("@<V.E>").T(c).i("a_<1,2>"))},
wF(a,b){var s,r,q=this,p=q.gl(q)
if(p===0)throw A.b(A.at())
s=q.a4(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a4(0,r))
if(p!==q.gl(q))throw A.b(A.aq(q))}return s},
bd(a,b){return A.cf(this,b,null,A.m(this).i("V.E"))},
cv(a,b){return A.cf(this,0,A.bL(b,"count",t.S),A.m(this).i("V.E"))}}
A.ce.prototype={
ip(a,b,c,d){var s,r=this.b
A.b0(r,"start")
s=this.c
if(s!=null){A.b0(s,"end")
if(r>s)throw A.b(A.ak(r,0,s,"start",null))}},
goZ(){var s=J.ao(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtm(){var s=J.ao(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.ao(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a4(a,b){var s=this,r=s.gtm()+b
if(b<0||r>=s.goZ())throw A.b(A.ke(b,s.gl(0),s,null,"index"))
return J.nb(s.a,r)},
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
if(s==null)return A.cf(p.a,r,B.b.fc(r,b),p.$ti.c)
else{q=B.b.fc(r,b)
if(s<q)return p
return A.cf(p.a,r,q,p.$ti.c)}},
cw(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.K(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.At(0,n):J.yF(0,n)}r=A.aG(s,m.a4(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a4(n,o+q)
if(m.gl(n)<l)throw A.b(A.aq(p))}return r},
e8(a){return this.cw(0,!0)}}
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
ga3(a){return this.b.$1(J.nc(this.a))},
gau(a){return this.b.$1(J.yn(this.a))},
a4(a,b){return this.b.$1(J.nb(this.a,b))}}
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
a4(a,b){return this.b.$1(J.nb(this.a,b))}}
A.b2.prototype={
gt(a){return new A.dp(J.I(this.a),this.b,this.$ti.i("dp<1>"))},
c5(a,b,c){return new A.c7(this,b,this.$ti.i("@<1>").T(c).i("c7<1,2>"))}}
A.dp.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.hm.prototype={
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
A.hj.prototype={
gl(a){var s=this.a,r=s.gl(s)
s=this.b
if(B.b.nC(r,s))return s
return r},
$iG:1}
A.lk.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.cN.prototype={
bd(a,b){A.jw(b,"count")
A.b0(b,"count")
return new A.cN(this.a,this.b+b,A.m(this).i("cN<1>"))},
gt(a){var s=this.a
return new A.l5(s.gt(s),this.b,A.m(this).i("l5<1>"))}}
A.eO.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
bd(a,b){A.jw(b,"count")
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
dQ(a,b){return!0},
c5(a,b,c){return new A.dT(c.i("dT<0>"))},
bd(a,b){A.b0(b,"count")
return this},
cv(a,b){A.b0(b,"count")
return this},
cw(a,b){var s=J.yF(0,this.$ti.c)
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
A.hp.prototype={
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
A.ii.prototype={
gI(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gI(this.a)&536870911
this._hashCode=s
return s},
k(a){return'Symbol("'+this.a+'")'},
R(a,b){if(b==null)return!1
return b instanceof A.ii&&this.a===b.a}}
A.j9.prototype={}
A.az.prototype={$r:"+(1,2)",$s:1}
A.iS.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.iT.prototype={$r:"+controller,sync(1,2)",$s:3}
A.fD.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.mn.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.es.prototype={$r:"+(1,2,3)",$s:6}
A.et.prototype={$r:"+(1,2,3,4)",$s:7}
A.mo.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.hf.prototype={}
A.eK.prototype={
bW(a,b,c){var s=A.m(this)
return A.AA(this,s.c,s.y[1],b,c)},
gA(a){return this.gl(this)===0},
gW(a){return this.gl(this)!==0},
k(a){return A.qu(this)},
j(a,b,c){A.E9()},
gaK(){return new A.fH(this.v3(),A.m(this).i("fH<S<1,2>>"))},
v3(){var s=this
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
this.a2(0,new A.of(this,b,s))
return s},
$iH:1}
A.of.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.aM.prototype={
gl(a){return this.b.length},
gle(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
G(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.G(b))return null
return this.b[this.a[b]]},
a2(a,b){var s,r,q=this.gle(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gO(){return new A.eo(this.gle(),this.$ti.i("eo<1>"))},
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
A.ht.prototype={
dr(){var s=this,r=s.$map
if(r==null){r=new A.hC(s.$ti.i("hC<1,2>"))
A.CE(s.a,r)
s.$map=r}return r},
G(a){return this.dr().G(a)},
h(a,b){return this.dr().h(0,b)},
a2(a,b){this.dr().a2(0,b)},
gO(){var s=this.dr()
return new A.U(s,A.m(s).i("U<1>"))},
gaP(){var s=this.dr()
return new A.av(s,A.m(s).i("av<2>"))},
gl(a){return this.dr().a}}
A.hg.prototype={
u(a,b){A.Ea()}}
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
A.pX.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.hx&&this.a.R(0,b.a)&&A.zA(this)===A.zA(b)},
gI(a){return A.c8(this.a,A.zA(this),B.d,B.d,B.d,B.d,B.d)},
k(a){var s=B.c.J([A.by(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.hx.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.IH(A.n2(this.a),this.$ti)}}
A.rw.prototype={
$0(){return B.t.vg(1000*this.a.now())},
$S:9}
A.i3.prototype={}
A.tD.prototype={
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
A.hS.prototype={
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
A.hl.prototype={}
A.iV.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaw:1}
A.dN.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.D0(r==null?"unknown":r)+"'"},
gak(a){var s=A.n2(this)
return A.by(s==null?A.bz(this):s)},
gxU(){return this},
$C:"$1",
$R:1,
$D:null}
A.nK.prototype={$C:"$0",$R:0}
A.nL.prototype={$C:"$2",$R:2}
A.tB.prototype={}
A.tc.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.D0(s)+"'"}}
A.h7.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.h7))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.jk(this.a)^A.e8(this.$_target))>>>0},
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
return r[a]!=null}else return this.ms(a)},
ms(a){var s=this.d
if(s==null)return!1
return this.d_(this.l8(s,a),a)>=0},
F(a,b){b.a2(0,new A.q3(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mt(b)},
mt(a){var s,r,q=this.d
if(q==null)return null
s=this.l8(q,a)
r=this.d_(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kC(s==null?q.b=q.j3():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kC(r==null?q.c=q.j3():r,b,c)}else q.mv(b,c)},
mv(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.j3()
s=p.dU(a)
r=o[s]
if(r==null)o[s]=[p.ir(a,b)]
else{q=p.d_(r,a)
if(q>=0)r[q].b=b
else r.push(p.ir(a,b))}},
mE(a,b){var s,r,q=this
if(q.G(a)){s=q.h(0,a)
return s==null?A.m(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
E(a,b){var s=this
if(typeof b=="string")return s.ly(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.ly(s.c,b)
else return s.mu(b)},
mu(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dU(a)
r=n[s]
q=o.d_(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.lO(p)
if(r.length===0)delete n[s]
return p.b},
ah(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iq()}},
a2(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aq(s))
r=r.c}},
kC(a,b,c){var s=a[b]
if(s==null)a[b]=this.ir(b,c)
else s.b=c},
ly(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.lO(s)
delete a[b]
return s.b},
iq(){this.r=this.r+1&1073741823},
ir(a,b){var s,r=this,q=new A.q5(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iq()
return q},
lO(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iq()},
dU(a){return J.a2(a)&1073741823},
l8(a,b){return a[this.dU(b)]},
d_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.t(a[r].a,b))return r
return-1},
k(a){return A.qu(this)},
j3(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.q3.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.q5.prototype={}
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
A.hD.prototype={
dU(a){return A.jk(a)&1073741823},
d_(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.hC.prototype={
dU(a){return A.Ih(a)&1073741823},
d_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.t(a[r].a,b))return r
return-1}}
A.xU.prototype={
$1(a){return this.a(a)},
$S:40}
A.xV.prototype={
$2(a,b){return this.a(a,b)},
$S:68}
A.xW.prototype={
$1(a){return this.a(a)},
$S:44}
A.er.prototype={
gak(a){return A.by(this.l9())},
l9(){return A.Iq(this.$r,this.fu())},
k(a){return this.lM(!1)},
lM(a){var s,r,q,p,o,n=this.pb(),m=this.fu(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.AK(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pb(){var s,r=this.$s
while($.wm.length<=r)$.wm.push(null)
s=$.wm[r]
if(s==null){s=this.oK()
$.wm[r]=s}return s},
oK(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.As(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.dd(j,k)}}
A.mk.prototype={
fu(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.mk&&this.$s===b.$s&&J.t(this.a,b.a)&&J.t(this.b,b.b)},
gI(a){return A.c8(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.ml.prototype={
fu(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.ml&&s.$s===b.$s&&J.t(s.a,b.a)&&J.t(s.b,b.b)&&J.t(s.c,b.c)},
gI(a){var s=this
return A.c8(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.mm.prototype={
fu(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.mm&&this.$s===b.$s&&A.Gh(this.a,b.a)},
gI(a){return A.c8(this.$s,A.qT(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eS.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
glk(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.yH(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
grb(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.yH(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
dR(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fC(s)},
jn(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.lL(this,b,c)},
hl(a,b){return this.jn(0,b,0)},
p7(a,b){var s,r=this.glk()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fC(s)},
p6(a,b){var s,r=this.grb()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fC(s)},
dZ(a,b,c){if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,null,null))
return this.p6(b,c)}}
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
p=q.p7(l,s)
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
h(a,b){if(b!==0)throw A.b(A.rW(b,null))
return this.c},
$ie4:1,
gN(){return this.a}}
A.mB.prototype={
gt(a){return new A.wH(this.a,this.b,this.c)},
gD(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.fd(r,s)
throw A.b(A.at())}}
A.wH.prototype={
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
if(s===this)throw A.b(A.Az(this.a))
return s},
sml(a){var s=this
if(s.b!==s)throw A.b(new A.db("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.f_.prototype={
gak(a){return B.cR},
hn(a,b,c){A.fP(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
m0(a){return this.hn(a,0,null)},
m_(a,b,c){A.fP(a,b,c)
if(c==null)c=B.b.K(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hm(a,b,c){A.fP(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
lZ(a){return this.hm(a,0,null)},
$ia9:1,
$idJ:1}
A.eZ.prototype={$ieZ:1}
A.hN.prototype={
ga5(a){if(((a.$flags|0)&2)!==0)return new A.mI(a.buffer)
else return a.buffer},
r1(a,b,c,d){var s=A.ak(b,0,c,d,null)
throw A.b(s)},
kN(a,b,c,d){if(b>>>0!==b||b>c)this.r1(a,b,c,d)}}
A.mI.prototype={
hn(a,b,c){var s=A.bH(this.a,b,c)
s.$flags=3
return s},
m0(a){return this.hn(0,0,null)},
m_(a,b,c){var s=A.AD(this.a,b,c)
s.$flags=3
return s},
hm(a,b,c){var s=A.AC(this.a,b,c)
s.$flags=3
return s},
lZ(a){return this.hm(0,0,null)},
$idJ:1}
A.hM.prototype={
gak(a){return B.cS},
$ia9:1,
$iyp:1}
A.f0.prototype={
gl(a){return a.length},
lF(a,b,c,d,e){var s,r,q=a.length
this.kN(a,b,q,"start")
this.kN(a,c,q,"end")
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
if(t.dQ.b(d)){this.lF(a,b,c,d,e)
return}this.kz(a,b,c,d,e)},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
$iG:1,
$io:1,
$ip:1}
A.bG.prototype={
j(a,b,c){a.$flags&2&&A.E(a)
A.d_(b,a,a.length)
a[b]=c},
af(a,b,c,d,e){a.$flags&2&&A.E(a,5)
if(t.aj.b(d)){this.lF(a,b,c,d,e)
return}this.kz(a,b,c,d,e)},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
$iG:1,
$io:1,
$ip:1}
A.kC.prototype={
gak(a){return B.cT},
U(a,b,c){return new Float32Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$ipj:1}
A.kD.prototype={
gak(a){return B.cU},
U(a,b,c){return new Float64Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$ipk:1}
A.kE.prototype={
gak(a){return B.cV},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$ipY:1}
A.kF.prototype={
gak(a){return B.cW},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$ipZ:1}
A.kG.prototype={
gak(a){return B.cX},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$iq_:1}
A.hO.prototype={
gak(a){return B.d0},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$itG:1}
A.hP.prototype={
gak(a){return B.d1},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$itH:1}
A.hQ.prototype={
gak(a){return B.d2},
gl(a){return a.length},
h(a,b){A.d_(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.d0(b,c,a.length)))},
b1(a,b){return this.U(a,b,null)},
$ia9:1,
$itI:1}
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
A.iO.prototype={}
A.iP.prototype={}
A.iQ.prototype={}
A.iR.prototype={}
A.ca.prototype={
i(a){return A.j3(v.typeUniverse,this,a)},
T(a){return A.By(v.typeUniverse,this,a)}}
A.m7.prototype={}
A.mF.prototype={
k(a){return A.bn(this.a,null)}}
A.m4.prototype={
k(a){return this.a}}
A.j_.prototype={$icS:1}
A.uL.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.uK.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:111}
A.uM.prototype={
$0(){this.a.$0()},
$S:4}
A.uN.prototype={
$0(){this.a.$0()},
$S:4}
A.iZ.prototype={
oi(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dC(new A.wK(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oj(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.dC(new A.wJ(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
B(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$icR:1}
A.wK.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.wJ.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.io(s,o)}q.c=p
r.d.$1(q)},
$S:4}
A.ir.prototype={
az(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aU(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.kM(a)
else s.cE(a)}},
bt(a,b){var s
if(b==null)b=A.h5(a)
s=this.a
if(this.b)s.al(new A.ad(a,b))
else s.ca(new A.ad(a,b))},
aG(a){return this.bt(a,null)},
$ihc:1}
A.xb.prototype={
$1(a){return this.a.$2(0,a)},
$S:22}
A.xc.prototype={
$2(a,b){this.a.$2(1,new A.hl(a,b))},
$S:125}
A.xr.prototype={
$2(a,b){this.a(a,b)},
$S:156}
A.x9.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.x()
s=q.b
if((s&1)!==0?(q.gaI().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.xa.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:21}
A.lO.prototype={
oe(a,b){var s=new A.uP(a)
this.a=A.yZ(new A.uR(this,a),new A.uS(s),new A.uT(this,s),!1,b)}}
A.uP.prototype={
$0(){A.jn(new A.uQ(this.a))},
$S:4}
A.uQ.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.uS.prototype={
$0(){this.a.$0()},
$S:0}
A.uT.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.uR.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.x()
if((r.b&4)===0){s.c=new A.q($.u,t._)
if(s.b){s.b=!1
A.jn(new A.uO(this.b))}return s.c}},
$S:199}
A.uO.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.iK.prototype={
k(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.mD.prototype={
gn(){return this.b},
t4(a,b){var s,r,q
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
o.d=null}q=o.t4(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Bs
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Bs
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.w("sync*"))}return!1},
xV(a){var s,r,q=this
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
A.ix.prototype={
gcD(){return new A.b3(this,A.m(this).i("b3<1>"))},
ghO(){return(this.c&4)!==0},
gj1(){return this.c<4},
t1(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jh(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.Bj(c,A.m(j).c)
s=A.m(j)
r=$.u
q=d?1:0
p=b!=null?32:0
o=A.lS(r,a,s.c)
n=A.v_(r,b)
m=c==null?A.xs():c
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
ls(a){var s,r=this
A.m(r).i("ei<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.t1(a)
if((r.c&2)===0&&r.d==null)r.oC()}return null},
lt(a){},
lu(a){},
it(){if((this.c&4)!==0)return new A.bk("Cannot add new events after calling close")
return new A.bk("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gj1())throw A.b(this.it())
this.ci(b)},
bG(a,b){var s
if(!this.gj1())throw A.b(this.it())
s=A.ew(a,b)
this.cj(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gj1())throw A.b(q.it())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.q($.u,t.D)
q.cP()
return r},
aE(a,b){this.cj(a,b)},
aL(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aU(null)},
oC(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aU(null)}A.n_(this.b)},
$ibs:1}
A.is.prototype={
ci(a){var s,r
for(s=this.d,r=this.$ti.i("bW<1>");s!=null;s=s.ch)s.bQ(new A.bW(a,r))},
cj(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bQ(new A.fu(a,b))},
cP(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bQ(B.Z)
else this.r.aU(null)}}
A.ps.prototype={
$0(){this.c.a(null)
this.b.cb(null)},
$S:0}
A.pu.prototype={
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
A.pt.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bN(j,m.b,a)
if(J.t(k,0)){l=m.d
s=A.l([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.A)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.bp(s,n)}m.c.cE(s)}}else if(J.t(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.ad(s,l))}},
$S(){return this.d.i("R(0)")}}
A.pn.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aw)")}}
A.ll.prototype={
k(a){var s=this.b.k(0)
return"TimeoutException after "+s+": "+this.a},
$iJ:1}
A.po.prototype={
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
l.a.aG(new A.hV(B.c.mm(s,A.HV()),a,q.i("hV<p<0?>,p<ad?>>")))}},
$S:8}
A.hV.prototype={
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
A.iI.prototype={
tB(a){this.a.bu(new A.vJ(this,a),new A.vK(this,a),t.P)}}
A.vJ.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("R(1)")}}
A.vK.prototype={
$2(a,b){this.a.c=new A.ad(a,b)
this.b.$1(1)},
$S:10}
A.vI.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.ej.prototype={
bt(a,b){if((this.a.a&30)!==0)throw A.b(A.w("Future already completed"))
this.al(A.ew(a,b))},
aG(a){return this.bt(a,null)},
$ihc:1}
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
w9(a){if((this.c&15)!==6)return!0
return this.b.b.e7(this.d,a.a,t.y,t.K)},
vt(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.k8(r,n,a.b,p,o,t.l)
else q=m.e7(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.C(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.q.prototype={
bu(a,b,c){var s,r,q=$.u
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aI(b,"onError",u.w))}else{a=q.d4(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.C6(b,q)}s=new A.q($.u,c.i("q<0>"))
r=b==null?1:3
this.dl(new A.bX(s,r,a,b,this.$ti.i("@<1>").T(c).i("bX<1,2>")))
return s},
aO(a,b){return this.bu(a,null,b)},
lK(a,b,c){var s=new A.q($.u,c.i("q<0>"))
this.dl(new A.bX(s,19,a,b,this.$ti.i("@<1>").T(c).i("bX<1,2>")))
return s},
m4(a){var s=this.$ti,r=$.u,q=new A.q(r,s)
if(r!==B.i)a=A.C6(a,r)
this.dl(new A.bX(q,2,null,a,s.i("bX<1,1>")))
return q},
aQ(a){var s=this.$ti,r=$.u,q=new A.q(r,s)
if(r!==B.i)a=r.bM(a,t.z)
this.dl(new A.bX(q,8,a,null,s.i("bX<1,1>")))
return q},
tf(a){this.a=this.a&1|16
this.c=a},
fn(a){this.a=a.a&30|this.a&1
this.c=a.c},
dl(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dl(a)
return}s.fn(r)}s.b.cB(new A.vL(s,a))}},
lq(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lq(a)
return}n.fn(s)}m.a=n.hb(a)
n.b.cB(new A.vQ(m,n))}},
es(){var s=this.c
this.c=null
return this.hb(s)},
hb(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cb(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.vO(a,r,!0)
else{s=r.es()
r.a=8
r.c=a
A.em(r,s)}},
cE(a){var s=this,r=s.es()
s.a=8
s.c=a
A.em(s,r)},
oJ(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbZ()===r.gbZ())}else s=!1
if(s)return
q=p.es()
p.fn(a)
A.em(p,q)},
al(a){var s=this.es()
this.tf(a)
A.em(this,s)},
oI(a,b){this.al(new A.ad(a,b))},
aU(a){if(this.$ti.i("y<1>").b(a)){this.kM(a)
return}this.kI(a)},
kI(a){this.a^=2
this.b.cB(new A.vN(this,a))},
kM(a){A.vO(a,this,!1)
return},
ca(a){this.a^=2
this.b.cB(new A.vM(this,a))},
i4(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.q($.u,r.$ti)
q.aU(r)
return q}s=new A.q($.u,r.$ti)
q.a=null
q.a=A.cv(a,new A.vW(s,a))
r.bu(new A.vX(q,r,s),new A.vY(q,s),t.P)
return s},
$iy:1}
A.vL.prototype={
$0(){A.em(this.a,this.b)},
$S:0}
A.vQ.prototype={
$0(){A.em(this.b,this.a.a)},
$S:0}
A.vP.prototype={
$0(){A.vO(this.a.a,this.b,!0)},
$S:0}
A.vN.prototype={
$0(){this.a.cE(this.b)},
$S:0}
A.vM.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.vT.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aZ(q.d,t.z)}catch(p){s=A.C(p)
r=A.a7(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.h5(q)
n=k.a
n.c=new A.ad(q,o)
q=n}q.b=!0
return}if(j instanceof A.q&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.q){m=k.b.a
l=new A.q(m.b,m.$ti)
j.bu(new A.vU(l,m),new A.vV(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.vU.prototype={
$1(a){this.a.oJ(this.b)},
$S:21}
A.vV.prototype={
$2(a,b){this.a.al(new A.ad(a,b))},
$S:10}
A.vS.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.e7(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.C(n)
r=A.a7(n)
q=s
p=r
if(p==null)p=A.h5(q)
o=this.a
o.c=new A.ad(q,p)
o.b=!0}},
$S:0}
A.vR.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.w9(s)&&p.a.e!=null){p.c=p.a.vt(s)
p.b=!1}}catch(o){r=A.C(o)
q=A.a7(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.h5(p)
m=l.b
m.c=new A.ad(p,n)
p=m}p.b=!0}},
$S:0}
A.vW.prototype={
$0(){var s=A.yY()
this.a.al(new A.ad(new A.ll("Future not completed",this.b),s))},
$S:0}
A.vX.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.B()
this.c.cE(a)}},
$S(){return this.b.$ti.i("R(1)")}}
A.vY.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.B()
this.b.al(new A.ad(a,b))}},
$S:10}
A.lN.prototype={}
A.a4.prototype={
dV(a){var s=new A.q($.u,t.os),r=new A.ab(""),q=this.a9(null,!0,new A.tg(s,r),s.giy())
q.hT(new A.th(this,r,q,s))
return s},
gl(a){var s={},r=new A.q($.u,t.hy)
s.a=0
this.a9(new A.ti(s,this),!0,new A.tj(s,r),r.giy())
return r},
gD(a){var s=new A.q($.u,A.m(this).i("q<a4.T>")),r=this.a9(null,!0,new A.te(s),s.giy())
r.hT(new A.tf(this,r,s))
return s}}
A.tg.prototype={
$0(){var s=this.b.a
this.a.cb(s.charCodeAt(0)==0?s:s)},
$S:0}
A.th.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.C(o)
r=A.a7(o)
q=s
p=r
n=A.ja(q,p)
if(n==null)q=new A.ad(q,p)
else q=n
A.GP(this.c,this.d,q)}},
$S(){return A.m(this.a).i("~(a4.T)")}}
A.ti.prototype={
$1(a){++this.a.a},
$S(){return A.m(this.b).i("~(a4.T)")}}
A.tj.prototype={
$0(){this.b.cb(this.a.a)},
$S:0}
A.te.prototype={
$0(){var s,r=A.yY(),q=new A.bk("No element")
A.kT(q,r)
s=A.ja(q,r)
if(s==null)s=new A.ad(q,r)
this.a.al(s)},
$S:0}
A.tf.prototype={
$1(a){A.GQ(this.b,this.c,a)},
$S(){return A.m(this.a).i("~(a4.T)")}}
A.ie.prototype={
a9(a,b,c,d){return this.a.a9(a,b,c,d)},
bI(a,b,c){return this.a9(a,null,b,c)},
aW(a){return this.a9(a,null,null,null)}}
A.dx.prototype={
gcD(){return new A.bb(this,A.m(this).i("bb<1>"))},
ghO(){return(this.b&4)!==0},
grA(){if((this.b&8)===0)return this.a
return this.a.c},
fq(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.dw(A.m(q).i("dw<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.dw(A.m(q).i("dw<1>")):s},
gaI(){var s=this.a
return(this.b&8)!==0?s.c:s},
bz(){if((this.b&4)!==0)return new A.bk("Cannot add event after closing")
return new A.bk("Cannot add event while adding a stream")},
tQ(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bz())
if((o&2)!==0){o=new A.q($.u,t._)
o.aU(null)
return o}o=p.a
s=b===!0
r=new A.q($.u,t._)
q=s?A.FF(p):p.goo()
q=a.a9(p.goq(),s,p.goE(),q)
s=p.b
if((s&1)!==0?(p.gaI().e&4)!==0:(s&2)===0)q.bm()
p.a=new A.iW(o,r,q,A.m(p).i("iW<1>"))
p.b|=8
return r},
l1(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.dG():new A.q($.u,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bz())
this.aw(b)},
bG(a,b){var s
if(this.b>=4)throw A.b(this.bz())
s=A.ew(a,b)
this.aE(s.a,s.b)},
tP(a){return this.bG(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.l1()
if(r>=4)throw A.b(s.bz())
s.kO()
return s.l1()},
kO(){var s=this.b|=4
if((s&1)!==0)this.cP()
else if((s&3)===0)this.fq().u(0,B.Z)},
aw(a){var s=this,r=s.b
if((r&1)!==0)s.ci(a)
else if((r&3)===0)s.fq().u(0,new A.bW(a,A.m(s).i("bW<1>")))},
aE(a,b){var s=this.b
if((s&1)!==0)this.cj(a,b)
else if((s&3)===0)this.fq().u(0,new A.fu(a,b))},
aL(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aU(null)},
jh(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.w("Stream has already been listened to."))
s=A.FX(p,a,b,c,d,A.m(p).c)
r=p.grA()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b9()}else p.a=s
s.tg(r)
s.iI(new A.wD(p))
return s},
ls(a){var s,r,q,p,o,n,m,l=this,k=null
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
m=new A.wC(l)
if(k!=null)k=k.aQ(m)
else m.$0()
return k},
lt(a){if((this.b&8)!==0)this.a.b.bm()
A.n_(this.e)},
lu(a){if((this.b&8)!==0)this.a.b.b9()
A.n_(this.f)},
$ibs:1}
A.wD.prototype={
$0(){A.n_(this.a.d)},
$S:0}
A.wC.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aU(null)},
$S:0}
A.mE.prototype={
ci(a){this.gaI().aw(a)},
cj(a,b){this.gaI().aE(a,b)},
cP(){this.gaI().aL()}}
A.it.prototype={
ci(a){this.gaI().bQ(new A.bW(a,A.m(this).i("bW<1>")))},
cj(a,b){this.gaI().bQ(new A.fu(a,b))},
cP(){this.gaI().bQ(B.Z)}}
A.cA.prototype={}
A.fI.prototype={}
A.bb.prototype={
gI(a){return(A.e8(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bb&&b.a===this.a}}
A.ds.prototype={
h7(){return this.w.ls(this)},
bB(){this.w.lt(this)},
bC(){this.w.lu(this)}}
A.lK.prototype={
B(){var s=this.b.B()
return s.aQ(new A.uG(this))}}
A.uH.prototype={
$2(a,b){var s=this.a
s.aE(a,b)
s.aL()},
$S:10}
A.uG.prototype={
$0(){this.a.a.aU(null)},
$S:4}
A.iW.prototype={}
A.aP.prototype={
tg(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.ff(s)}},
hT(a){this.a=A.lS(this.d,a,A.m(this).i("aP.T"))},
bm(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.iI(q.gek())},
b9(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.ff(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.iI(s.gel())}}},
B(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.iv()
r=s.f
return r==null?$.dG():r},
iv(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.h7()},
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
if(r<64)s.cP()
else s.bQ(B.Z)},
bB(){},
bC(){},
h7(){return null},
bQ(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.dw(A.m(r).i("dw<aP.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.ff(r)}},
ci(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.f6(s.a,a,A.m(s).i("aP.T"))
s.e=(s.e&4294967231)>>>0
s.ix((r&4)!==0)},
cj(a,b){var s,r=this,q=r.e,p=new A.v1(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.iv()
s=r.f
if(s!=null&&s!==$.dG())s.aQ(p)
else p.$0()}else{p.$0()
r.ix((q&4)!==0)}},
cP(){var s,r=this,q=new A.v0(r)
r.iv()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.dG())s.aQ(q)
else q.$0()},
iI(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.ix((r&4)!==0)},
ix(a){var s,r,q=this,p=q.e
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
q.e=p}if((p&128)!==0&&p<256)q.r.ff(q)},
$ibl:1}
A.v1.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.mP(s,o,this.c,r,t.l)
else q.f6(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.v0.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.f5(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.fG.prototype={
a9(a,b,c,d){return this.a.jh(a,d,c,b===!0)},
bI(a,b,c){return this.a9(a,null,b,c)},
aW(a){return this.a9(a,null,null,null)}}
A.m3.prototype={
ge_(){return this.a},
se_(a){return this.a=a}}
A.bW.prototype={
jZ(a){a.ci(this.b)}}
A.fu.prototype={
jZ(a){a.cj(this.b,this.c)}}
A.vB.prototype={
jZ(a){a.cP()},
ge_(){return null},
se_(a){throw A.b(A.w("No events after a done."))}}
A.dw.prototype={
ff(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.jn(new A.wl(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.se_(b)
s.c=b}}}
A.wl.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.ge_()
q.b=r
if(r==null)q.c=null
s.jZ(this.b)},
$S:0}
A.fv.prototype={
hT(a){},
bm(){var s=this.a
if(s>=0)this.a=s+2},
b9(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.jn(s.glm())}else s.a=r},
B(){this.a=-1
this.c=null
return $.dG()},
rq(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.f5(s)}}else r.a=q},
$ibl:1}
A.bZ.prototype={
gn(){if(this.c)return this.b
return null},
m(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.q($.u,t.g5)
r.b=s
r.c=!1
q.b9()
return s}throw A.b(A.w("Already waiting for next."))}return r.r0()},
r0(){var s,r,q=this,p=q.b
if(p!=null){s=new A.q($.u,t.g5)
q.b=s
r=p.a9(q.gri(),!0,q.grk(),q.grm())
if(q.b!=null)q.a=r
return s}return $.D6()},
B(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aU(!1)
else s.c=!1
return r.B()}return $.dG()},
rj(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cb(!0)
if(q.c){r=q.a
if(r!=null)r.bm()}},
rn(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.ad(a,b))
else q.ca(new A.ad(a,b))},
rl(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cE(!1)
else q.kI(!1)}}
A.iD.prototype={
a9(a,b,c,d){return A.Bj(c,this.$ti.c)},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.cY.prototype={
a9(a,b,c,d){var s=null,r=new A.iN(s,s,s,s,this.$ti.i("iN<1>"))
r.d=new A.wj(this,r)
return r.jh(a,d,c,b===!0)},
bI(a,b,c){return this.a9(a,null,b,c)},
aW(a){return this.a9(a,null,null,null)}}
A.wj.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.iN.prototype={
tR(a){var s=this.b
if(s>=4)throw A.b(this.bz())
if((s&1)!==0)this.gaI().aw(a)},
u6(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bz())
r|=4
s.b=r
if((r&1)!==0)s.gaI().aL()},
gcD(){throw A.b(A.Y("Not available"))},
$idf:1}
A.xe.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.xf.prototype={
$0(){return this.a.cb(this.b)},
$S:0}
A.iG.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.u,q=b===!0?1:0,p=d!=null?32:0,o=A.lS(r,a,s.y[1]),n=A.v_(r,d),m=c==null?A.xs():c
s=new A.fy(this,o,n,r.bM(m,t.H),r,q|p,s.i("fy<1,2>"))
s.x=this.a.bI(s.giM(),s.giO(),s.giQ())
return s},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.fy.prototype={
aw(a){if((this.e&2)!==0)return
this.im(a)},
aE(a,b){if((this.e&2)!==0)return
this.kA(a,b)},
bB(){var s=this.x
if(s!=null)s.bm()},
bC(){var s=this.x
if(s!=null)s.b9()},
h7(){var s=this.x
if(s!=null){this.x=null
return s.B()}return null},
iN(a){this.w.pE(a,this)},
iR(a,b){this.aE(a,b)},
iP(){this.aL()}}
A.ep.prototype={
pE(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.C(q)
r=A.a7(q)
p=s
o=r
n=A.ja(p,o)
if(n!=null){p=n.a
o=n.b}b.aE(p,o)
return}b.aw(m)}}
A.iE.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.v(A.w("Stream is already closed"))
s.im(b)},
bG(a,b){this.a.aE(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.v(A.w("Stream is already closed"))
s.kB()},
$ibs:1}
A.fE.prototype={
aw(a){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.im(a)},
aE(a,b){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.kA(a,b)},
aL(){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.kB()},
bB(){var s=this.x
if(s!=null)s.bm()},
bC(){var s=this.x
if(s!=null)s.b9()},
h7(){var s=this.x
if(s!=null){this.x=null
return s.B()}return null},
iN(a){var s,r,q,p
try{q=this.w
q===$&&A.x()
q.u(0,a)}catch(p){s=A.C(p)
r=A.a7(p)
this.aE(s,r)}},
iR(a,b){var s,r,q,p
try{q=this.w
q===$&&A.x()
q.bG(a,b)}catch(p){s=A.C(p)
r=A.a7(p)
if(s===a)this.aE(a,b)
else this.aE(s,r)}},
iP(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.x()
q.p()}catch(p){s=A.C(p)
r=A.a7(p)
this.aE(s,r)}}}
A.iw.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.u,q=b===!0?1:0,p=d!=null?32:0,o=A.lS(r,a,s.y[1]),n=A.v_(r,d),m=c==null?A.xs():c,l=new A.fE(o,n,r.bM(m,t.H),r,q|p,s.i("fE<1,2>"))
l.w=this.a.$1(new A.iE(l,s.i("iE<2>")))
l.x=this.b.bI(l.giM(),l.giO(),l.giQ())
return l},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.x6.prototype={}
A.x8.prototype={}
A.x7.prototype={}
A.x4.prototype={}
A.x5.prototype={}
A.x3.prototype={}
A.x0.prototype={}
A.mT.prototype={}
A.x_.prototype={}
A.wZ.prototype={}
A.x2.prototype={}
A.x1.prototype={}
A.mS.prototype={
vm(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.mU.prototype={}
A.mR.prototype={
ep(a,b,c){var s,r,q,p,o,n,m=this.giY(),l=m.a
if(l===B.i){A.jf(b,c)
return}o=l.gjW()
o.toString
s=o
r=$.u
try{$.u=s
m.vm(l,l.gb3(),a,b,c)
$.u=r}catch(n){q=A.C(n)
p=A.a7(n)
$.u=r
o=b===q?c:p
s.ep(l,q,o)}},
$iN:1}
A.lY.prototype={
gkZ(){var s=this.ax
return s==null?this.ax=new A.fN(this):s},
gb3(){return this.ay.gkZ()},
gbZ(){return this.as.a},
f5(a){var s,r,q
try{this.aZ(a,t.H)}catch(q){s=A.C(q)
r=A.a7(q)
this.ep(this,s,r)}},
f6(a,b,c){var s,r,q
try{this.e7(a,b,t.H,c)}catch(q){s=A.C(q)
r=A.a7(q)
this.ep(this,s,r)}},
mP(a,b,c,d,e){var s,r,q
try{this.k8(a,b,c,t.H,d,e)}catch(q){s=A.C(q)
r=A.a7(q)
this.ep(this,s,r)}},
jp(a,b){return new A.vx(this,this.bM(a,b),b)},
u2(a,b,c){return new A.vz(this,this.d4(a,b,c),c,b)},
eB(a){return new A.vw(this,this.bM(a,t.H))},
hp(a,b){return new A.vy(this,this.d4(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.ax)return null
s=q.b
r=s.h(0,b)
return r!=null||s.G(b)?r:this.t_(q,b)},
t_(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gjW().gjm()
if(s===B.ax)break
q=s.b
r=q.h(0,b)
if(r!=null||q.G(b)){a.b.j(0,b,r)
break}}return r},
eL(a,b){this.ep(this,a,b)},
mo(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb3(),this,a,b)},
aZ(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb3(),this,a,b)},
e7(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb3(),this,a,b,c,d)},
k8(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb3(),this,a,b,c,d,e,f)},
bM(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb3(),this,a,b)},
d4(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb3(),this,a,b,c)},
f0(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb3(),this,a,b,c,d)},
mh(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb3(),this,a,b)},
cB(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb3(),this,a)},
jv(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb3(),this,a,b)},
ju(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb3(),this,a,b)},
glA(){return this.a},
glC(){return this.b},
glB(){return this.c},
glw(){return this.d},
glx(){return this.e},
glv(){return this.f},
gl3(){return this.r},
gje(){return this.w},
gkX(){return this.x},
gkW(){return this.y},
glr(){return this.z},
gl6(){return this.Q},
giY(){return this.as},
gjm(){return this.at},
gjW(){return this.ay}}
A.vx.prototype={
$0(){return this.a.aZ(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.vz.prototype={
$1(a){var s=this
return s.a.e7(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").T(this.c).i("1(2)")}}
A.vw.prototype={
$0(){return this.a.f5(this.b)},
$S:0}
A.vy.prototype={
$1(a){return this.a.f6(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.mr.prototype={
glA(){return B.dj},
glC(){return B.di},
glB(){return B.dh},
glw(){return B.df},
glx(){return B.dg},
glv(){return B.de},
gl3(){return B.da},
gje(){return B.dk},
gkX(){return B.d9},
gkW(){return B.d8},
glr(){return B.dd},
gl6(){return B.db},
giY(){return B.dc},
gjm(){return B.ax},
gjW(){return null},
gkZ(){var s=$.wq
return s==null?$.wq=new A.fN(this):s},
gb3(){var s=$.wq
return s==null?$.wq=new A.fN(this):s},
gbZ(){return this},
f5(a){var s,r,q
try{if(B.i===$.u){a.$0()
return}A.xn(null,null,this,a)}catch(q){s=A.C(q)
r=A.a7(q)
A.jf(s,r)}},
f6(a,b){var s,r,q
try{if(B.i===$.u){a.$1(b)
return}A.xo(null,null,this,a,b)}catch(q){s=A.C(q)
r=A.a7(q)
A.jf(s,r)}},
mP(a,b,c){var s,r,q
try{if(B.i===$.u){a.$2(b,c)
return}A.zq(null,null,this,a,b,c)}catch(q){s=A.C(q)
r=A.a7(q)
A.jf(s,r)}},
jp(a,b){return new A.ws(this,a,b)},
eB(a){return new A.wr(this,a)},
hp(a,b){return new A.wt(this,a,b)},
h(a,b){return null},
eL(a,b){A.jf(a,b)},
mo(a,b){return A.C8(null,null,this,a,b)},
aZ(a){if($.u===B.i)return a.$0()
return A.xn(null,null,this,a)},
e7(a,b){if($.u===B.i)return a.$1(b)
return A.xo(null,null,this,a,b)},
k8(a,b,c){if($.u===B.i)return a.$2(b,c)
return A.zq(null,null,this,a,b,c)},
bM(a){return a},
d4(a){return a},
f0(a){return a},
mh(a,b){return null},
cB(a){A.xp(null,null,this,a)},
jv(a,b){return A.z3(a,b)},
ju(a,b){return A.AV(a,b)}}
A.ws.prototype={
$0(){return this.a.aZ(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.wr.prototype={
$0(){return this.a.f5(this.b)},
$S:0}
A.wt.prototype={
$1(a){return this.a.f6(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.fN.prototype={$ial:1}
A.xm.prototype={
$0(){A.Af(this.a,this.b)},
$S:0}
A.iq.prototype={}
A.cW.prototype={
gl(a){return this.a},
gA(a){return this.a===0},
gW(a){return this.a!==0},
gO(){return new A.en(this,A.m(this).i("en<1>"))},
gaP(){var s=A.m(this)
return A.e3(new A.en(this,s.i("en<1>")),new A.w_(this),s.c,s.y[1])},
G(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kT(a)},
kT(a){var s=this.d
if(s==null)return!1
return this.bS(this.kQ(s,a),a)>=0},
F(a,b){b.a2(0,new A.vZ(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Bl(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Bl(q,b)
return r}else return this.l7(b)},
l7(a){var s,r,q=this.d
if(q==null)return null
s=this.kQ(q,a)
r=this.bS(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.kG(s==null?q.b=A.zd():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.kG(r==null?q.c=A.zd():r,b,c)}else q.lE(b,c)},
lE(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.zd()
s=p.cc(a)
r=o[s]
if(r==null){A.ze(o,s,[a,b]);++p.a
p.e=null}else{q=p.bS(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a2(a,b){var s,r,q,p,o,n=this,m=n.kP()
for(s=m.length,r=A.m(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aq(n))}},
kP(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
kG(a,b,c){if(a[b]==null){++this.a
this.e=null}A.ze(a,b,c)},
cc(a){return J.a2(a)&1073741823},
kQ(a,b){return a[this.cc(b)]},
bS(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.t(a[r],b))return r
return-1}}
A.w_.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.m(s).y[1].a(r):r},
$S(){return A.m(this.a).i("2(1)")}}
A.vZ.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.dt.prototype={
cc(a){return A.jk(a)&1073741823},
bS(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.iA.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.o3(b)},
j(a,b,c){this.o4(b,c)},
G(a){if(!this.w.$1(a))return!1
return this.o2(a)},
cc(a){return this.r.$1(a)&1073741823},
bS(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.vv.prototype={
$1(a){return this.a.b(a)},
$S:23}
A.en.prototype={
gl(a){return this.a.a},
gA(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.m8(s,s.kP(),this.$ti.i("m8<1>"))},
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
A.iL.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.nX(b)},
j(a,b,c){this.nZ(b,c)},
G(a){if(!this.y.$1(a))return!1
return this.nW(a)},
E(a,b){if(!this.y.$1(b))return null
return this.nY(b)},
dU(a){return this.x.$1(a)&1073741823},
d_(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.wh.prototype={
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
return r[b]!=null}else return this.oN(b)},
oN(a){var s=this.d
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
return q.kF(s==null?q.b=A.zf():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.kF(r==null?q.c=A.zf():r,b)}else return q.om(b)},
om(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.zf()
s=q.cc(a)
r=p[s]
if(r==null)p[s]=[q.j4(a)]
else{if(q.bS(r,a)>=0)return!1
r.push(q.j4(a))}return!0},
E(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.kR(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.kR(s.c,b)
else return s.jc(b)},
jc(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cc(a)
r=n[s]
q=o.bS(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.kS(p)
return!0},
ah(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.j2()}},
kF(a,b){if(a[b]!=null)return!1
a[b]=this.j4(b)
return!0},
kR(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.kS(s)
delete a[b]
return!0},
j2(){this.r=this.r+1&1073741823},
j4(a){var s,r=this,q=new A.wi(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.j2()
return q},
kS(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.j2()},
cc(a){return J.a2(a)&1073741823},
bS(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.t(a[r].a,b))return r
return-1}}
A.wi.prototype={}
A.dv.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aq(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.q6.prototype={
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
h6(a,b,c){var s,r,q=this
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
jj(a){var s,r,q=this;++q.a
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
geW(){var s=this.a
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
if(this.gl(a)>1)throw A.b(A.hy())
return this.h(a,0)},
C(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.t(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.b(A.aq(a))}return!1},
dQ(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gl(a))throw A.b(A.aq(a))}return!0},
eH(a,b,c){var s,r,q,p=this.gl(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gl(a))throw A.b(A.aq(a))}q=c.$0()
return q},
J(a,b){var s
if(this.gl(a)===0)return""
s=A.tk("",a,b)
return s.charCodeAt(0)==0?s:s},
ke(a,b){return new A.bv(a,b.i("bv<0>"))},
c5(a,b,c){return new A.a_(a,b,A.bz(a).i("@<F.E>").T(c).i("a_<1,2>"))},
bd(a,b){return A.cf(a,b,null,A.bz(a).i("F.E"))},
cv(a,b){return A.cf(a,0,A.bL(b,"count",t.S),A.bz(a).i("F.E"))},
wV(a){var s,r=A.q7(A.bz(a).i("F.E"))
for(s=0;s<this.gl(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gl(a)
this.sl(a,s+1)
this.j(a,s,b)},
hq(a,b){return new A.bD(a,A.bz(a).i("@<F.E>").T(b).i("bD<1,2>"))},
c8(a,b){var s=b==null?A.Ie():b
A.l6(a,0,this.gl(a)-1,s)},
U(a,b,c){var s,r=this.gl(a)
if(c==null)c=r
A.b1(b,c,r)
s=A.P(this.fe(a,b,c),A.bz(a).i("F.E"))
return s},
b1(a,b){return this.U(a,b,null)},
fe(a,b,c){A.b1(b,c,this.gl(a))
return A.cf(a,b,c,A.bz(a).i("F.E"))},
jF(a,b,c,d){var s
A.b1(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
af(a,b,c,d,e){var s,r,q,p,o
A.b1(b,c,this.gl(a))
s=c-b
if(s===0)return
A.b0(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.nd(d,e).cw(0,!1)
r=0}p=J.K(q)
if(r+s>p.gl(q))throw A.b(A.Ar())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
ar(a,b,c,d){return this.af(a,b,c,d,0)},
cC(a,b,c){var s,r
if(t.j.b(c))this.ar(a,b,b+c.length,c)
else for(s=J.I(c);s.m();b=r){r=b+1
this.j(a,b,s.gn())}},
k(a){return A.q1(a,"[","]")},
$iG:1,
$io:1,
$ip:1}
A.Q.prototype={
bW(a,b,c){var s=A.m(this)
return A.AA(this,s.i("Q.K"),s.i("Q.V"),b,c)},
a2(a,b){var s,r,q,p
for(s=J.I(this.gO()),r=A.m(this).i("Q.V");s.m();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gaK(){return J.aL(this.gO(),new A.qt(this),A.m(this).i("S<Q.K,Q.V>"))},
c6(a,b,c,d){var s,r,q,p,o,n=A.D(c,d)
for(s=J.I(this.gO()),r=A.m(this).i("Q.V");s.m();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
G(a){return J.ym(this.gO(),a)},
gl(a){return J.ao(this.gO())},
gA(a){return J.bO(this.gO())},
gW(a){return J.eG(this.gO())},
gaP(){return new A.iM(this,A.m(this).i("iM<Q.K,Q.V>"))},
k(a){return A.qu(this)},
$iH:1}
A.qt.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.m(s).i("Q.V").a(r)
return new A.S(a,r,A.m(s).i("S<Q.K,Q.V>"))},
$S(){return A.m(this.a).i("S<Q.K,Q.V>(Q.K)")}}
A.qv.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:26}
A.iM.prototype={
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
s=s.h(0,J.yn(s.gO()))
return s==null?this.$ti.y[1].a(s):s},
ga3(a){var s=this.a
s=s.h(0,J.nc(s.gO()))
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
A.hK.prototype={
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
A.hG.prototype={
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
if(r.gl(0)>1)throw A.b(A.hy())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a4(a,b){var s,r=this
A.Aq(b,r.gl(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
E(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.t(r.a[s],b)){r.jc(s);++r.d
return!0}return!1},
k(a){return A.q1(this,"{","}")},
jc(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
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
if(r.gl(r)>1)throw A.b(A.hy())
s=r.gt(r)
if(!s.m())throw A.b(A.at())
return s.gn()},
k(a){return A.q1(this,"{","}")},
dQ(a,b){var s
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
cv(a,b){return A.AT(this,b,A.m(this).c)},
bd(a,b){return A.AR(this,b,A.m(this).c)},
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
A.iU.prototype={}
A.j4.prototype={}
A.mc.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rG(b):s}},
gl(a){return this.b==null?this.c.a:this.dm().length},
gA(a){return this.gl(0)===0},
gW(a){return this.gl(0)>0},
gO(){if(this.b==null){var s=this.c
return new A.U(s,A.m(s).i("U<1>"))}return new A.md(this)},
gaP(){var s,r=this
if(r.b==null){s=r.c
return new A.av(s,A.m(s).i("av<2>"))}return A.e3(r.dm(),new A.wd(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.G(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tx().j(0,b,c)},
G(a){if(this.b==null)return this.c.G(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a2(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a2(0,b)
s=o.dm()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.xg(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aq(o))}},
dm(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
tx(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.D(t.N,t.z)
r=n.dm()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.c.ah(r)
n.a=n.b=null
return n.c=s},
rG(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.xg(this.a[a])
return this.b[a]=s}}
A.wd.prototype={
$1(a){return this.a.h(0,a)},
$S:44}
A.md.prototype={
gl(a){return this.a.gl(0)},
a4(a,b){var s=this.a
return s.b==null?s.gO().a4(0,b):s.dm()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gO()
s=s.gt(s)}else{s=s.dm()
s=new J.eH(s,s.length,A.a6(s).i("eH<1>"))}return s},
C(a,b){return this.a.G(b)}}
A.wb.prototype={
p(){var s,r,q=this
q.o5()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aw(A.C4(r.charCodeAt(0)==0?r:r,q.b))
s.aL()}}
A.wV.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:45}
A.wU.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:45}
A.jx.prototype={
gb7(){return"us-ascii"},
jA(a){return B.bg.v(a)}}
A.mG.prototype={
v(a){var s,r,q,p=A.b1(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aI(a,"string","Contains invalid characters."))
o[r]=q}return o},
bP(a){return new A.wM(new A.fq(a),this.a)}}
A.jy.prototype={}
A.wM.prototype={
p(){this.a.a.p()},
bH(a,b,c,d){var s,r,q,p
A.b1(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.c4(a)
p=this.a.a
p.u(0,s.U(s,b,c))
if(d)p.p()}}
A.nr.prototype={
gjB(){return B.bk},
wa(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.b1(a1,a2,a0.length)
s=$.zN()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.xT(a0.charCodeAt(l))
h=A.xT(a0.charCodeAt(l+1))
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
if(o>=0)A.A_(a0,n,a2,o,m,d)
else{c=B.b.aj(d-1,4)+1
if(c===1)throw A.b(A.a3(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.d5(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.A_(a0,n,a2,o,m,b)
else{c=B.b.aj(b,4)
if(c===1)throw A.b(A.a3(a,a0,a2))
if(c>1)a0=B.a.d5(a0,a2,a2,c===2?"==":"=")}return a0}}
A.jD.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.lQ(u.U).mg(a,0,s,!0)
s.toString
return A.dl(s,0,null)},
bP(a){return new A.uI(a,new A.uZ(u.U))}}
A.lQ.prototype={
m7(a){return new Uint8Array(a)},
mg(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.b.K(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.m7(o)
r.a=A.FO(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.uZ.prototype={
m7(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bB(B.e.ga5(s),s.byteOffset,a)}}
A.uV.prototype={
u(a,b){this.kU(b,0,J.ao(b),!1)},
p(){this.kU(B.cd,0,0,!0)}}
A.uI.prototype={
kU(a,b,c,d){var s=this.b.mg(a,b,c,d)
if(s!=null)this.a.a.aw(A.dl(s,0,null))
if(d)this.a.a.aL()}}
A.jC.prototype={
v(a){var s,r,q=A.b1(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.lP()
r=s.jx(a,0,q)
r.toString
s.jq(a,q)
return r},
bP(a){return new A.uU(a,new A.lP())}}
A.lP.prototype={
jx(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.B8(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.FL(a,b,c,q)
r.a=A.FN(a,b,c,s,0,r.a)
return s},
jq(a,b){var s=this.a
if(s<-1)throw A.b(A.a3("Missing padding character",a,b))
if(s>0)throw A.b(A.a3("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.uU.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.jx(b,0,r)
if(s!=null)this.a.a.aw(s)},
p(){this.b.jq(null,null)
this.a.a.aL()},
bH(a,b,c,d){var s,r
A.b1(b,c,a.length)
if(b===c)return
s=this.b
r=s.jx(a,b,c)
if(r!=null)this.a.a.aw(r)
if(d){s.jq(a,c)
this.a.a.aL()}}}
A.nw.prototype={}
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
A.jO.prototype={}
A.my.prototype={
u(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.ek.prototype={
u(a,b){this.b.u(0,b)},
bG(a,b){A.bL(a,"error",t.K)
this.a.bG(a,b)},
p(){this.b.p()},
$ibs:1}
A.jP.prototype={}
A.ar.prototype={
bP(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.k(0)))},
u0(a){return new A.iw(new A.oj(this),a,t.fM.T(A.m(this).i("ar.T")).i("iw<1,2>"))}}
A.oj.prototype={
$1(a){return new A.ek(a,this.a.bP(a),t.oW)},
$S:87}
A.dU.prototype={}
A.hE.prototype={
k(a){var s=A.hk(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.km.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.q4.prototype={
aA(a,b){var s=A.C4(a,this.guk().a)
return s},
a7(a,b){var s=A.G7(a,this.gjB().b,null)
return s},
gjB(){return B.bR},
guk(){return B.bQ}}
A.ko.prototype={
bP(a){return new A.wc(null,this.b,new A.mA(a))}}
A.wc.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.w("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.ab("")
q=new A.wI(r,s)
A.Bn(b,q,p.b,p.a)
if(r.a.length!==0)q.iH()
s.p()},
p(){}}
A.kn.prototype={
bP(a){return new A.wb(this.a,a,new A.ab(""))}}
A.wf.prototype={
mX(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.ic(a,s,r)
s=r+1
n.an(92)
n.an(117)
n.an(100)
p=q>>>8&15
n.an(p<10?48+p:87+p)
p=q>>>4&15
n.an(p<10?48+p:87+p)
p=q&15
n.an(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.ic(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.ic(a,s,r)
s=r+1
n.an(92)
n.an(q)}}if(s===0)n.b_(a)
else if(s<m)n.ic(a,s,m)},
iw(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.km(a,null))}s.push(a)},
ib(a){var s,r,q,p,o=this
if(o.mW(a))return
o.iw(a)
try{s=o.b.$1(a)
if(!o.mW(s)){q=A.Ax(a,null,o.glo())
throw A.b(q)}o.a.pop()}catch(p){r=A.C(p)
q=A.Ax(a,r,o.glo())
throw A.b(q)}},
mW(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xh(a)
return!0}else if(a===!0){r.b_("true")
return!0}else if(a===!1){r.b_("false")
return!0}else if(a==null){r.b_("null")
return!0}else if(typeof a=="string"){r.b_('"')
r.mX(a)
r.b_('"')
return!0}else if(t.j.b(a)){r.iw(a)
r.xf(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iw(a)
s=r.xg(a)
r.a.pop()
return s}else return!1},
xf(a){var s,r,q=this
q.b_("[")
s=J.K(a)
if(s.gW(a)){q.ib(s.h(a,0))
for(r=1;r<s.gl(a);++r){q.b_(",")
q.ib(s.h(a,r))}}q.b_("]")},
xg(a){var s,r,q,p,o=this,n={}
if(a.gA(a)){o.b_("{}")
return!0}s=a.gl(a)*2
r=A.aG(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a2(0,new A.wg(n,r))
if(!n.b)return!1
o.b_("{")
for(p='"';q<s;q+=2,p=',"'){o.b_(p)
o.mX(A.M(r[q]))
o.b_('":')
o.ib(r[q+1])}o.b_("}")
return!0}}
A.wg.prototype={
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
A.we.prototype={
glo(){var s=this.c
return s instanceof A.ab?s.k(0):null},
xh(a){this.c.ia(B.t.k(a))},
b_(a){this.c.ia(a)},
ic(a,b,c){this.c.ia(B.a.q(a,b,c))},
an(a){this.c.an(a)}}
A.kp.prototype={
gb7(){return"iso-8859-1"},
jA(a){return B.bZ.v(a)}}
A.kq.prototype={}
A.lg.prototype={
u(a,b){this.bH(b,0,b.length,!1)}}
A.wI.prototype={
an(a){var s=this.a,r=A.bh(a)
if((s.a+=r).length>16)this.iH()},
ia(a){if(this.a.a.length!==0)this.iH()
this.b.u(0,a)},
iH(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.iY.prototype={
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
A.wT.prototype={
p(){var s,r,q,p=this.c
this.a.vi(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bH(q,0,q.length,!0)}else r.p()},
u(a,b){this.bH(b,0,J.ao(b),!1)},
bH(a,b,c,d){var s,r=this.c,q=this.a.cG(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bH(s,0,s.length,!1)
r.a=""
return}}}
A.lv.prototype={
gb7(){return"utf-8"},
uh(a,b){return new A.cZ((b===!0?B.d4:B.aw).a).cG(a,0,null,!0)},
hu(a){return this.uh(a,null)},
jA(a){return B.f.v(a)}}
A.lw.prototype={
v(a){var s,r,q=A.b1(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.mJ(s)
if(r.l5(a,0,q)!==q)r.hh()
return B.e.U(s,0,r.b)},
bP(a){return new A.wW(new A.fq(a),new Uint8Array(1024))}}
A.mJ.prototype={
hh(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.E(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
lV(a,b){var s,r,q,p,o=this
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
return!0}else{o.hh()
return!1}},
l5(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.E(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.lV(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hh()}else if(o<=2047){n=k.b
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
A.wW.prototype={
p(){if(this.a!==0){this.bH("",0,0,!0)
return}this.d.a.p()},
bH(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.lV(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.l5(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hh()
else n.a=a.charCodeAt(b);++b}s.u(0,B.e.U(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.ik.prototype={
bP(a){return new A.wT(new A.cZ(this.a),new A.mA(a),new A.ab(""))}}
A.cZ.prototype={
cG(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.b1(b,c,J.ao(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.GD(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.GC(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.iA(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.BK(p)
m.b=0
throw A.b(A.a3(n,a,q+m.c))}return o},
iA(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.K(b+c,2)
r=q.iA(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.iA(a,s,c,d)}return q.uj(a,b,c,d)},
vi(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bh(65533)
a.a+=s}else throw A.b(A.a3(A.BK(77),null,null))},
uj(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.ab(""),g=b+1,f=a[b]
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
oU(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.c1()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bw(s,q)
return new A.ay(n===0?!1:o,q,n)},
oX(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.c1()
s=k-a
if(s<=0)return l.a?$.zP():$.c1()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bw(s,q)
m=new A.ay(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fl(0,$.eE())
return m},
bx(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.b.K(b,16)
if(B.b.aj(b,16)===0)return n.oU(r)
q=s+r+1
p=new Uint16Array(q)
A.Bg(n.b,s,b,p)
s=n.a
o=A.bw(q,p)
return new A.ay(o===0?!1:s,p,o)},
dg(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.K(b,16)
q=B.b.aj(b,16)
if(q===0)return j.oX(r)
p=s-r
if(p<=0)return j.a?$.zP():$.c1()
o=j.b
n=new Uint16Array(p)
A.FU(o,s,b,n)
s=j.a
m=A.bw(p,n)
l=new A.ay(m===0?!1:s,n,m)
if(s){if((o[r]&B.b.bx(1,q)-1)>>>0!==0)return l.fl(0,$.eE())
for(k=0;k<r;++k)if(o[k]!==0)return l.fl(0,$.eE())}return l},
X(a,b){var s,r=this.a
if(r===b.a){s=A.uW(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
is(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.is(p,b)
if(o===0)return $.c1()
if(n===0)return p.a===b?p:p.bw(0)
s=o+1
r=new Uint16Array(s)
A.FQ(p.b,o,a.b,n,r)
q=A.bw(s,r)
return new A.ay(q===0?!1:b,r,q)},
fm(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.c1()
s=a.c
if(s===0)return p.a===b?p:p.bw(0)
r=new Uint16Array(o)
A.lR(p.b,o,a.b,s,r)
q=A.bw(o,r)
return new A.ay(q===0?!1:b,r,q)},
fc(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.is(b,r)
if(A.uW(q.b,p,b.b,s)>=0)return q.fm(b,r)
return b.fm(q,!r)},
fl(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bw(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.is(b,r)
if(A.uW(q.b,p,b.b,s)>=0)return q.fm(b,r)
return b.fm(q,!r)},
bb(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.c1()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.Bh(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bw(s,p)
return new A.ay(m===0?!1:n,p,m)},
oT(a){var s,r,q,p
if(this.c<a.c)return $.c1()
this.l0(a)
s=$.z7.bq()-$.iv.bq()
r=A.z9($.z6.bq(),$.iv.bq(),$.z7.bq(),s)
q=A.bw(s,r)
p=new A.ay(!1,r,q)
return this.a!==a.a&&q>0?p.bw(0):p},
t0(a){var s,r,q,p=this
if(p.c<a.c)return p
p.l0(a)
s=A.z9($.z6.bq(),0,$.iv.bq(),$.iv.bq())
r=A.bw($.iv.bq(),s)
q=new A.ay(!1,s,r)
if($.z8.bq()>0)q=q.dg(0,$.z8.bq())
return p.a&&q.c>0?q.bw(0):q},
l0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Bd&&a.c===$.Bf&&c.b===$.Bc&&a.b===$.Be)return
s=a.b
r=a.c
q=16-B.b.gm3(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.Bb(s,r,q,p)
n=new Uint16Array(b+5)
m=A.Bb(c.b,b,q,n)}else{n=A.z9(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.za(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.uW(n,m,j,i)>=0){g&2&&A.E(n)
n[m]=1
A.lR(n,h,j,i,n)}else{g&2&&A.E(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.lR(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.FR(l,n,e);--k
A.Bh(d,f,0,n,k,o)
if(n[e]<d){i=A.za(f,o,k,j)
A.lR(n,h,j,i,n)
while(--d,n[e]<d)A.lR(n,h,j,i,n)}--e}$.Bc=c.b
$.Bd=b
$.Be=s
$.Bf=r
$.z6.b=n
$.z7.b=h
$.iv.b=o
$.z8.b=q},
gI(a){var s,r,q,p=new A.uX(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.uY().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.ay&&this.X(0,b)===0},
k(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.b.k(-n.b[0])
return B.b.k(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bw(0):n
while(r.c>1){q=$.zO()
if(q.c===0)A.v(B.bm)
p=r.t0(q).k(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.oT(q)}s.push(B.b.k(r.b[0]))
if(m)s.push("-")
return new A.e9(s,t.hF).dV(0)},
$iam:1}
A.uX.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:102}
A.uY.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:179}
A.m6.prototype={
m1(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
md(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.wS.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.I(b),r=this.a;s.m();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.aa(b)}},
$S:49}
A.oW.prototype={
$0(){var s=this
return A.v(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:31}
A.aN.prototype={
iu(a){var s=1000,r=B.b.aj(a,s),q=B.b.K(a-r,s),p=this.b+r,o=B.b.aj(p,s),n=this.c
return new A.aN(A.oX(this.a+B.b.K(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aN&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.c8(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
jO(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
X(a,b){var s=B.b.X(this.a,b.a)
if(s!==0)return s
return B.b.X(this.b,b.b)},
wW(){var s=this
if(s.c)return s
return new A.aN(s.a,s.b,!0)},
k(a){var s=this,r=A.Ec(A.yS(s)),q=A.k_(A.yQ(s)),p=A.k_(A.rv(s)),o=A.k_(A.yO(s)),n=A.k_(A.yP(s)),m=A.k_(A.yR(s)),l=A.Ad(A.AJ(s)),k=s.b,j=k===0?"":A.Ad(k)
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
return s+m+":"+q+r+":"+o+p+"."+B.a.hW(B.b.k(n%1e6),6,"0")},
$iam:1}
A.vC.prototype={
k(a){return this.ab()}}
A.a8.prototype={
gc9(){return A.F2(this)}}
A.jz.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hk(s)
return"Assertion failed"}}
A.cS.prototype={}
A.bC.prototype={
giG(){return"Invalid argument"+(!this.a?"(s)":"")},
giF(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.giG()+q+o
if(!s.a)return n
return n+s.giF()+": "+A.hk(s.gjN())},
gjN(){return this.b}}
A.cL.prototype={
gjN(){return this.b},
giG(){return"RangeError"},
giF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.hv.prototype={
gjN(){return this.b},
giG(){return"RangeError"},
giF(){if(this.b<0)return": index must not be negative"
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
A.jR.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hk(s)+"."}}
A.kK.prototype={
k(a){return"Out of Memory"},
gc9(){return null},
$ia8:1}
A.ib.prototype={
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
gjT(){return this.a},
gfj(){return this.b},
gaq(){return this.c}}
A.kg.prototype={
gc9(){return null},
k(a){return"IntegerDivisionByZeroException"},
$ia8:1,
$icy:1,
$iJ:1}
A.o.prototype={
hq(a,b){return A.eJ(this,A.m(this).i("o.E"),b)},
c5(a,b,c){return A.e3(this,b,A.m(this).i("o.E"),c)},
ke(a,b){return new A.bv(this,b.i("bv<0>"))},
C(a,b){var s
for(s=this.gt(this);s.m();)if(J.t(s.gn(),b))return!0
return!1},
vk(a,b,c){var s,r
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
vl(a,b,c){return this.vk(0,b,c,t.z)},
dQ(a,b){var s
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
e8(a){return this.cw(0,!0)},
gl(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gA(a){return!this.gt(this).m()},
gW(a){return!this.gA(this)},
cv(a,b){return A.AT(this,b,A.m(this).i("o.E"))},
bd(a,b){return A.AR(this,b,A.m(this).i("o.E"))},
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
if(r.m())throw A.b(A.hy())
return s},
eH(a,b,c){var s,r
for(s=this.gt(this);s.m();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a4(a,b){var s,r
A.b0(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.ke(b,b-r,this,null,"index"))},
k(a){return A.Ex(this,"(",")")}}
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
A.ic.prototype={
guY(){var s=this.gmf()
if($.jp()===1e6)return s
return s*1000},
gme(){var s=this.gmf()
if($.jp()===1000)return s
return B.b.K(s,1000)},
av(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.kS.$0()-r)
s.b=null}},
gmf(){var s=this.b
if(s==null)s=$.kS.$0()
return s-this.a}}
A.l0.prototype={
gt(a){return new A.l_(this.a)},
ga3(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.w("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.BR(r,s)}return s}}
A.l_.prototype={
gn(){return this.d},
m(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.BR(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.ab.prototype={
gl(a){return this.a.length},
ia(a){var s=A.r(a)
this.a+=s},
an(a){var s=A.bh(a)
this.a+=s},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.tO.prototype={
$2(a,b){throw A.b(A.a3("Illegal IPv6 address, "+a,this.a,b))},
$S:69}
A.j5.prototype={
glJ(){var s,r,q,p,o=this,n=o.w
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
gwk(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ag(s,1)
r=s.length===0?B.q:A.dd(new A.a_(A.l(s.split("/"),t.s),A.Ik(),t.iZ),t.N)
q.x!==$&&A.ye()
p=q.x=r}return p},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.a.gI(r.glJ())
r.y!==$&&A.ye()
r.y=s
q=s}return q},
gkd(){return this.b},
gcZ(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.aa(s,"v",1))return B.a.q(s,1,s.length-1)
return s},
geV(){var s=this.d
return s==null?A.Bz(this.a):s},
gf_(){var s=this.f
return s==null?"":s},
ghC(){var s=this.r
return s==null?"":s},
vT(a){var s=this.a
if(a.length!==s.length)return!1
return A.GS(a,s,0)>=0},
f3(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.zj(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.wO(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.wP(null,0,0,a)
else k=j.f
return A.j6(b,q,o,p,l,k,j.r)},
k7(a){return this.f3(a,null)},
mL(a){return this.f3(null,a)},
lh(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.aa(b,"../",r);){r+=3;++s}q=B.a.d0(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.hP(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.d5(a,q+1,null,B.a.ag(b,r-3*s))},
bn(a){return this.f4(A.lu(a))},
f4(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaS().length!==0)return a
else{s=h.a
if(a.gjI()){r=a.mL(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmp())m=a.ghM()?a.gf_():h.f
else{l=A.GB(h,n)
if(l>0){k=B.a.q(n,0,l)
n=a.gjH()?k+A.eu(a.gbl()):k+A.eu(h.lh(B.a.ag(n,k.length),a.gbl()))}else if(a.gjH())n=A.eu(a.gbl())
else if(n.length===0)if(p==null)n=s.length===0?a.gbl():A.eu(a.gbl())
else n=A.eu("/"+a.gbl())
else{j=h.lh(n,a.gbl())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.eu(j)
else n=A.zl(j,!r||p!=null)}m=a.ghM()?a.gf_():null}}}i=a.gjJ()?a.ghC():null
return A.j6(s,q,p,o,n,m,i)},
gjI(){return this.c!=null},
ghM(){return this.f!=null},
gjJ(){return this.r!=null},
gmp(){return this.e.length===0},
gjH(){return B.a.S(this.e,"/")},
ka(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gcZ()!=="")A.v(A.Y(u.Q))
s=r.gwk()
A.Gu(s,!1)
q=A.tk(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
k(a){return this.glJ()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gaS())if(p.c!=null===b.gjI())if(p.b===b.gkd())if(p.gcZ()===b.gcZ())if(p.geV()===b.geV())if(p.e===b.gbl()){r=p.f
q=r==null
if(!q===b.ghM()){if(q)r=""
if(r===b.gf_()){r=p.r
q=r==null
if(!q===b.gjJ()){s=q?"":r
s=s===b.ghC()}}}}return s},
$ils:1,
gaS(){return this.a},
gbl(){return this.e}}
A.wR.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.fL(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.fL(1,b,B.k,!0)
s.a+=r}},
$S:91}
A.wQ.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.I(b),r=this.a;s.m();)r.$2(a,s.gn())},
$S:49}
A.tN.prototype={
gmV(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.c1(m,"?",s)
q=m.length
if(r>=0){p=A.j7(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.m0("data","",n,n,A.j7(m,s,q,128,!1,!1),p,n)}return m},
k(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bY.prototype={
gjI(){return this.c>0},
gjK(){return this.c>0&&this.d+1<this.e},
ghM(){return this.f<this.r},
gjJ(){return this.r<this.a.length},
gjH(){return B.a.aa(this.a,"/",this.e)},
gmp(){return this.e===this.f},
gaS(){var s=this.w
return s==null?this.w=this.oL():s},
oL(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.q(r.a,0,q)},
gkd(){var s=this.c,r=this.b+3
return s>r?B.a.q(this.a,r,s-1):""},
gcZ(){var s=this.c
return s>0?B.a.q(this.a,s,this.d):""},
geV(){var s,r=this
if(r.gjK())return A.ax(B.a.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbl(){return B.a.q(this.a,this.e,this.f)},
gf_(){var s=this.f,r=this.r
return s<r?B.a.q(this.a,s+1,r):""},
ghC(){var s=this.r,r=this.a
return s<r.length?B.a.ag(r,s+1):""},
ld(a){var s=this.d+1
return s+a.length===this.e&&B.a.aa(this.a,a,s)},
wL(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bY(B.a.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
f3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.zj(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gaS()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.q(h.a,h.b+3,q):""
o=h.gjK()?h.geV():g
if(s)o=A.wO(o,b)
q=h.c
if(q>0)n=B.a.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.wP(g,0,0,a)
else{k=h.r
j=m<k?B.a.q(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ag(q,m+1):g
return A.j6(b,p,n,o,l,j,i)},
k7(a){return this.f3(a,null)},
mL(a){return this.f3(null,a)},
bn(a){return this.f4(A.lu(a))},
f4(a){if(a instanceof A.bY)return this.tk(this,a)
return this.lL().f4(a)},
tk(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.ld("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.ld("443")
if(p){o=r+1
return new A.bY(B.a.q(a.a,0,o)+B.a.ag(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.lL().f4(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bY(B.a.q(a.a,0,r)+B.a.ag(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bY(B.a.q(a.a,0,r)+B.a.ag(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wL()}s=b.a
if(B.a.aa(s,"/",n)){m=a.e
l=A.Br(this)
k=l>0?l:m
o=k-n
return new A.bY(B.a.q(a.a,0,k)+B.a.ag(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.aa(s,"../",n))n+=3
o=j-n+1
return new A.bY(B.a.q(a.a,0,j)+"/"+B.a.ag(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Br(this)
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
ka(){var s,r=this,q=r.b
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
lL(){var s=this,r=null,q=s.gaS(),p=s.gkd(),o=s.c>0?s.gcZ():r,n=s.gjK()?s.geV():r,m=s.a,l=s.f,k=B.a.q(m,s.e,l),j=s.r
l=l<j?s.gf_():r
return A.j6(q,p,o,n,k,l,j<m.length?s.ghC():r)},
k(a){return this.a},
$ils:1}
A.m0.prototype={}
A.k7.prototype={
j(a,b,c){this.a.set(b,c)},
k(a){return"Expando:"+A.r(this.b)}}
A.kI.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iJ:1}
A.pr.prototype={
$2(a,b){this.a.bu(new A.pp(a),new A.pq(b),t.X)},
$S:67}
A.pp.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:97}
A.pq.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Ib(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.v("Attempting to box non-Dart object.")
s={}
s[$.Dv()]=a
p.error=s
p.stack=b.k(0)
r=this.a
r.call(r,p)},
$S:10}
A.xY.prototype={
$1(a){var s,r,q,p
if(A.C3(a))return a
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
A.y3.prototype={
$1(a){return this.a.az(a)},
$S:22}
A.y4.prototype={
$1(a){if(a==null)return this.a.aG(new A.kI(a===undefined))
return this.a.aG(a)},
$S:22}
A.xA.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.C2(a))return a
s=this.a
a.toString
if(s.G(a))return s.h(0,a)
if(a instanceof Date)return new A.aN(A.oX(a.getTime(),0,!0),0,!0)
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
A.w8.prototype={
cs(a){if(a<=0||a>4294967296)throw A.b(A.aO(u.E+a))
return Math.random()*a>>>0},
mA(){return Math.random()}}
A.w9.prototype={
oh(){var s=self.crypto
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
if(!r.iZ(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("Z.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.iZ(b))return
s.c.j(0,s.a.$1(b),new A.S(b,c,s.$ti.i("S<Z.K,Z.V>")))},
F(a,b){b.a2(0,new A.ny(this))},
bW(a,b,c){return this.c.bW(0,b,c)},
G(a){var s=this
if(!s.iZ(a))return!1
return s.c.G(s.a.$1(s.$ti.i("Z.K").a(a)))},
gaK(){var s=this.c,r=A.m(s).i("aB<1,2>")
return A.e3(new A.aB(s,r),new A.nz(this),r.i("o.E"),this.$ti.i("S<Z.K,Z.V>"))},
a2(a,b){this.c.a2(0,new A.nA(this,b))},
gA(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gO(){var s=this.c,r=A.m(s).i("av<2>")
return A.e3(new A.av(s,r),new A.nB(this),r.i("o.E"),this.$ti.i("Z.K"))},
gl(a){return this.c.a},
c6(a,b,c,d){return this.c.c6(0,new A.nC(this,b,c,d),c,d)},
gaP(){var s=this.c,r=A.m(s).i("av<2>")
return A.e3(new A.av(s,r),new A.nD(this),r.i("o.E"),this.$ti.i("Z.V"))},
k(a){return A.qu(this)},
iZ(a){return this.$ti.i("Z.K").b(a)},
$iH:1}
A.ny.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(Z.K,Z.V)")}}
A.nz.prototype={
$1(a){var s=a.b
return new A.S(s.a,s.b,this.a.$ti.i("S<Z.K,Z.V>"))},
$S(){return this.a.$ti.i("S<Z.K,Z.V>(S<Z.C,S<Z.K,Z.V>>)")}}
A.nA.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(Z.C,S<Z.K,Z.V>)")}}
A.nB.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("Z.K(S<Z.K,Z.V>)")}}
A.nC.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.T(this.c).T(this.d).i("S<1,2>(Z.C,S<Z.K,Z.V>)")}}
A.nD.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("Z.V(S<Z.K,Z.V>)")}}
A.k1.prototype={
Y(a,b){return J.t(a,b)},
a8(a){return J.a2(a)}}
A.hz.prototype={
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
r=A.yD(s.gv4(),s.gvL(),s.gvU(),A.m(this).i("fJ.E"),t.S)
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
A.hJ.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gl(a)!==b.gl(b))return!1
s=A.yD(null,null,null,t.fA,t.S)
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
if(s.b(a))return s.b(b)&&new A.hJ(r,r,t.a3).Y(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.e1(r,t.hI).Y(a,b)
s=t.U
if(s.b(a))return s.b(b)&&new A.hz(r,t.nZ).Y(a,b)
return J.t(a,b)},
a8(a){var s=this
if(a instanceof A.cb)return new A.f7(s,t.cu).a8(a)
if(t.f.b(a))return new A.hJ(s,s,t.a3).a8(a)
if(t.j.b(a))return new A.e1(s,t.hI).a8(a)
if(t.U.b(a))return new A.hz(s,t.nZ).a8(a)
return J.a2(a)},
vV(a){return!0}}
A.kH.prototype={
sl(a,b){A.AE()},
u(a,b){return A.AE()}}
A.lr.prototype={
j(a,b,c){return A.Fw()}}
A.c5.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.c5){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gI(a){return A.qT(this.a)},
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
A.pw.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.w("Hash.add() called after close()."))
s.r=s.r+J.ao(b)
s.kE(b)},
kE(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.na(B.e.ga5(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.K(a),o=0;;j=0){n=j+p.gl(a)-o
if(n<h){B.e.af(i,j,n,a,o)
k.e=n
return}B.e.af(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.E(s)
s[m]=l;++m}while(m<q)
k.x3(s)}},
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
n=J.na(B.e.ga5(q))
m=B.b.K(p,4294967296)
n.$flags&2&&A.E(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kE(q)
s=l.a
s.u(0,new A.c5(l.oA()))
s.p()},
oA(){var s,r,q,p,o,n,m
if(B.aD===$.jo())return J.DI(B.u.ga5(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.na(B.e.ga5(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.E(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.mu.prototype={
bP(a){var s=new Uint32Array(A.aY(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.fq(new A.mv(s,r,a,q,new Uint32Array(16)))}}
A.wv.prototype={
x3(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
A.ju.prototype={
gI(a){return A.c8(B.cQ,this.d,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.jV&&this.d===b.d&&this.c===b.c},
k(a){var s=this,r=s.c
if(r===12)return A.d1(s).k(0)+".with"+s.d*8+"bits()"
return A.d1(s).k(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.nJ.prototype={}
A.hI.prototype={
gI(a){return B.o.a8(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.hI&&B.o.Y(this.a,b.a)},
k(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.e.J(s,",")+"])"}}
A.i6.prototype={
k(a){return A.d1(this).k(0)+": SecretBox has wrong message authentication code (MAC)"},
$iJ:1}
A.qs.prototype={
k(a){return A.d1(this).k(0)+"()"}}
A.i5.prototype={
gI(a){return(B.o.a8(this.b.a)^B.o.a8(this.c)^B.o.a8(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.i5){s=B.o.Y(this.b.a,b.b.a)
s=s&&B.o.Y(this.c,b.c)&&B.o.Y(this.a,b.a)}else s=!1
return s},
k(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.e.J(this.c,",")+"],\n  mac: "+this.b.k(0)+",\n)"}}
A.t0.prototype={}
A.i7.prototype={
gdL(){return this.b},
gI(a){var s=A.e8(B.d_),r=B.o.a8(this.gdL())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.i7&&B.o.Y(this.gdL(),b.gdL())},
k(a){return"SecretKeyData(...)"}}
A.l2.prototype={
gl(a){return this.a.length},
sl(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.jV.prototype={
um(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.gdL().gl(0),f=this.d
if(g!==f)throw A.b(A.aI(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Cm(c)
r=new Uint32Array(4)
A.n0(r,0,r,0,s)
r[0]=A.bo(r[0])
r[1]=A.bo(r[1])
r[2]=A.bo(r[2])
r[3]=A.bo(r[3])
q=A.Ac(r,a.c)
p=J.zU(B.e.ga5(q),0,null)
o=a.a
n=B.o.Y(B.aB.kL(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.i6())
A.xt(q,1)
n=o.length
m=B.b.K(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.n0(l,k,p,0,s)
A.xt(q,1)}j=J.bB(B.u.ga5(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.E(j)
j[k]=i^h}return j},
v1(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.gdL().gl(0),f=this.d
if(g!==f)throw A.b(A.aI(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Cm(d)
r=new Uint32Array(4)
A.n0(r,0,r,0,s)
r[0]=A.bo(r[0])
r[1]=A.bo(r[1])
r[2]=A.bo(r[2])
r[3]=A.bo(r[3])
q=A.Ac(r,c)
p=J.zU(B.e.ga5(q),0,null)
o=new Uint32Array(A.aY(p))
A.xt(q,1)
n=a.length
m=(B.b.K(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.n0(l,k,p,0,s)
A.xt(q,1)}j=J.bB(B.u.ga5(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.E(j)
j[k]=i^h}return new A.i5(j,B.aB.kL(j,b,s,r,o),c)}}
A.oB.prototype={
k(a){return"DartGcm()"},
kL(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
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
return new A.hI(J.bB(B.u.ga5(n),0,null))}}
A.lZ.prototype={}
A.m_.prototype={}
A.om.prototype={}
A.oC.prototype={}
A.vr.prototype={
Y(a,b){var s,r,q=J.K(a),p=J.K(b)
if(q.gl(a)!==p.gl(b))return!1
for(s=0,r=0;r<q.gl(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
a8(a){var s,r,q,p,o
for(s=J.K(a),r=0,q=0;q<s.gl(a);++q){p=s.h(a,q)
o=B.b.aj(q,16)
r=(r^B.b.tj(p,o)^B.b.lG(p,16-o))>>>0}return r}}
A.kY.prototype={}
A.jE.prototype={$iyq:1}
A.jF.prototype={
hB(){if(this.w)throw A.b(A.w("Can't finalize a finalized Request."))
this.w=!0
return B.bh},
k(a){return this.a+" "+this.b.k(0)}}
A.jG.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:134}
A.jH.prototype={
$1(a){return B.a.gI(a.toLowerCase())},
$S:142}
A.ns.prototype={
o8(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.r(s)+".",null))}}}
A.jM.prototype={
b0(a){return this.nG(a)},
nG(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b0=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.A9("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hB().wU(),$async$b0)
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
e=b4.gm6()
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
a0=a!=null?A.hY(a,null):null
if(a0==null&&a!=null){f=A.A9("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.D(a9,a9)
b.headers.forEach(A.mX(new A.nv(a1)))
f=A.GI(b4,b)
a4=b.status
a6=a1
a8=a0
A.lu(b.url)
a9=b.statusText
f=new A.lf(A.CY(f),a4,a8,a6)
f.o8(a4,a8,a6,!1,!0,a9,b4)
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
A.C7(a2,a3,b4)
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
A.nv.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:145}
A.xd.prototype={
$1(a){return A.fS(this.a,this.b,a)},
$S:149}
A.xk.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ap()}},
$S:0}
A.xl.prototype={
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
if(!o.a.b)A.C7(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.d3.prototype={
wU(){var s=new A.q($.u,t.jz),r=new A.aC(s,t.iq),q=new A.lT(new A.nx(r),new Uint8Array(1024))
this.a9(q.gtN(q),!0,q.gdN(),r.gua())
return s}}
A.nx.prototype={
$1(a){return this.a.az(new Uint8Array(A.aY(a)))},
$S:25}
A.dM.prototype={
k(a){var s=this.b.k(0)
return"ClientException: "+this.a+", uri="+s},
$iJ:1}
A.kB.prototype={
gl(a){return this.b}}
A.qN.prototype={
gm6(){var s,r,q,p=this,o={},n=o.a=0
p.x.a2(0,new A.qO(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.A)(s),++n){q=s[n]
o.a=o.a+(74+B.f.v(p.lb(q)).length+q.b+2)}return o.a+2+70+4},
hB(){var s=this,r=s.ow()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kx()
return new A.d3(s.bg(r))},
bg(a){return this.pd(a)},
pd(a){var $async$bg=A.c(function(b,c){switch(b){case 2:n=q
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
j=$.yk()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.zQ()
s=6
q=[1]
return A.bI(A.du(B.f.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bg,r)
case 6:s=7
q=[1]
return A.bI(A.du(B.f.v(k)),$async$bg,r)
case 7:s=8
q=[1]
return A.bI(A.du(B.aR),$async$bg,r)
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
return A.bI(A.du(B.f.v(m.lb(g))),$async$bg,r)
case 13:if(g.f)A.v(A.w("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bI(A.G5(g.e),$async$bg,r)
case 14:s=15
q=[1]
return A.bI(A.du(B.aR),$async$bg,r)
case 15:case 10:f.length===l||(0,A.A)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bI(A.du(d),$async$bg,r)
case 16:case 1:return A.bI(null,0,r)
case 2:return A.bI(o.at(-1),1,r)}})
var s=0,r=A.C1($async$bg,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Cg(r)},
qZ(a,b){var s,r=$.yk()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.zQ()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lb(a){var s=a.d.k(0),r=$.yk(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
ow(){var s,r=J.Au(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.ci[$.D7().cs(66)]
return"dart-http-boundary-"+A.dl(r,0,null)}}
A.qO.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.f.v(this.b.qZ(a,b)).length+B.f.v(b).length+2)},
$S:29}
A.rZ.prototype={
gm6(){return this.y.length},
gjC(){var s,r
if(this.gcd()==null||!this.gcd().c.a.G("charset"))return B.k
s=this.gcd().c.a.h(0,"charset")
s.toString
r=A.Ef(s)
return r==null?A.v(A.a3('Unsupported encoding "'+s+'".',null,null)):r},
hB(){this.kx()
return new A.d3(A.z_(this.y,t.L))},
gcd(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.EL(s)},
scd(a){this.r.j(0,"content-type",a.k(0))},
oD(){if(!this.w)return
throw A.b(A.w("Can't modify a finalized Request."))}}
A.ig.prototype={}
A.lf.prototype={}
A.h8.prototype={}
A.eW.prototype={
k(a){var s=new A.ab(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a2(0,new A.qy(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.qw.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.tl(null,j),h=$.DH()
i.il(h)
s=$.DG()
i.eG(s)
r=i.gjR().h(0,0)
r.toString
i.eG("/")
i.eG(s)
q=i.gjR().h(0,0)
q.toString
i.il(h)
p=t.N
o=A.D(p,p)
for(;;){p=i.d=B.a.dZ(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gM():n
if(!m)break
p=i.d=h.dZ(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gM()
i.eG(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.eG("=")
n=i.d=s.dZ(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gM()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.Ir(i)
n=i.d=h.dZ(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gM()
o.j(0,p,k)}i.va()
return A.yM(r,q,o)},
$S:158}
A.qy.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.DE()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.CW(b,$.Dt(),new A.qx(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:29}
A.qx.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:62}
A.xL.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:62}
A.yg.prototype={
$1(a){return a.a===this.a},
$S:96}
A.yh.prototype={
$2(a,b){return B.a.X(a.a,b.a)},
$S:79}
A.kQ.prototype={
ab(){return"PlatformProfile."+this.b}}
A.lc.prototype={
am(){var s=this
return A.n(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.t9.prototype={
$1(a){return J.c2(a.gaP())},
$S:30}
A.ta.prototype={
$1(a){return B.a.C(a,"ENABLE_FTS5")},
$S:12}
A.h9.prototype={
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
A.nG.prototype={
uZ(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
v_(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.nH.prototype={}
A.nI.prototype={}
A.p9.prototype={}
A.ne.prototype={
v0(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cs(256)
q=this.b.v1(new Uint8Array(A.aY(a)),b,m,this.c)
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
ul(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.O("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.w("Unsupported ciphertext version 0x"+B.a.hW(B.b.kb(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.aY(B.e.U(a,1,13)))
n-=16
r=new Uint8Array(A.aY(B.e.b1(a,n)))
q=new Uint8Array(A.aY(B.e.U(a,13,n)))
try{n=this.b.um(new A.i5(q,new A.hI(r),s),b,this.c)
return n}catch(o){if(A.C(o) instanceof A.i6)throw A.b(A.w("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.cG.prototype={
ab(){return"KindViolation."+this.b}}
A.xu.prototype={
$2(a,b){return B.a.X(a.a,b.a)},
$S:110}
A.xK.prototype={
$1(a){return a.h(0,"detail")},
$S:30}
A.jS.prototype={
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
ko(a){var s,r=this.a,q=r.E(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.E(0,new A.U(r,A.m(r).i("U<1>")).gD(0))
if(s!=null)s.p()}q=this.b.wl(a)
r.j(0,a,q)
return q},
nF(a,b){var s=this.ko(a).kp(new A.dX(b)),r=A.m(s).i("a_<F.E,H<k,j?>>")
r=A.P(new A.a_(s,new A.p6(),r),r.i("V.E"))
return r},
eF(a,b){this.ko(a).jE(new A.dX(b))},
jD(a){return this.eF(a,B.y)},
aB(a,b){return this.v7(a,b)},
H(a){return this.aB(a,B.y)},
v7(a,b){var s=0,r=A.h(t.H),q=this
var $async$aB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.eF(a,b)
return A.e(null,r)}})
return A.f($async$aB,r)},
ai(a,b){return this.wy(a,b)},
aX(a){return this.ai(a,B.y)},
wy(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ai=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.nF(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ai,r)},
bK(a,b,c,d,e,f,g){return this.wv(a,b,c,d,e,f,g)},
aM(a,b,c,d){return this.bK(a,null,b,null,null,c,d)},
e2(a,b,c,d,e){return this.bK(a,b,c,null,null,d,e)},
mF(a,b,c,d){return this.bK(a,b,null,null,null,c,d)},
e1(a,b,c){var s=null
return this.bK(a,s,s,s,s,b,c)},
wr(a,b,c,d){return this.bK(a,null,null,null,b,c,d)},
ws(a,b,c,d,e){return this.bK(a,b,c,d,e,null,null)},
wu(a,b,c,d,e,f){return this.bK(a,b,c,null,d,e,f)},
wt(a,b,c,d,e){return this.bK(a,null,b,null,c,d,e)},
wv(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
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
c2(a,b,c,d){return this.vR(0,b,c,d)},
aC(a,b,c){return this.c2(0,b,c,null)},
vR(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$c2=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.m(c)
n=o.i("U<1>")
m=t.N
l=A.e3(new A.U(c,n),new A.p5(),n.i("o.E"),m).J(0,", ")
k=B.c.J(A.aG(c.a,"?",!1,m),", ")
j=A.Ae(d)
o=o.i("av<2>")
o=A.P(new A.av(c,o),o.i("o.E"))
p.eF("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ah(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c2,r)},
L(a,b,c,d){return this.x0(a,b,c,d)},
x0(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.m(b)
n=o.i("U<1>")
m=A.e3(new A.U(b,n),new A.p7(),n.i("o.E"),t.N).J(0,", ")
n="UPDATE"+A.Ae(null)+' "'+a+'" SET '+m
o=A.P(new A.av(b,o.i("av<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.c.F(o,d)}p.eF(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
a6(a,b,c){return this.un(a,b,c)},
un(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$a6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.c.F(n,c)}p.eF(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a6,r)},
ud(a,b,c){this.b.ue(B.be,!0,!1,new A.p4(b),c)},
Z(a,b){return this.wX(a,b,b)},
wX(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$Z=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jD("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$Z)
case 7:m=e
n.jD("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jD("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$Z,r)},
$iyt:1}
A.p6.prototype={
$1(a){return A.b_(a,t.N,t.X)},
$S:112}
A.p5.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.p7.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.p4.prototype={
$1(a){var s=a.gl(0)===0?null:a.gD(a)
return this.a.$1(s)},
$S:75}
A.nW.prototype={}
A.hi.prototype={
jr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aS(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.A)(s),++n){m=s[n]
l=m.a
k=$.zJ()
if(!k.b.test(l))A.v(A.bj('Field "'+l+u.Z))
if(B.b4.C(0,l))throw A.b(A.bj('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.bj('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.bj(e+l+'" cannot be unique.'))
if(B.c.cR(o,new A.p3(m)))throw A.b(A.bj(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.C(k,l)}else k=!1
if(k)throw A.b(A.bj(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.A)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ae(l,l.gl(0),k.i("ae<F.E>")),k=k.i("F.E");l.m();){j=l.d
if(j==null)j=k.a(j)
if(!c.C(0,j)&&!B.b4.C(0,j))throw A.b(A.bj('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.aj.Y(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.k(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.Ed(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.k(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.k(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.An("FTS5 is not available on this SQLite engine."))
if(q.b&&!A.AS(r.a,3,34))throw A.b(A.An("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.ae(r,r.gl(0),p.i("ae<F.E>")),p=p.i("F.E");r.m();){o=r.d
if(o==null)o=p.a(o)
if(!c.C(0,o))throw A.b(A.bj('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gaK(),r=r.gt(r);r.m();){q=r.gn()
A.Am(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.E){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.bj('Enum field "'+m.a+'" must declare values.'))
if(q===B.F){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.bj('Ref field "'+m.a+'" must declare its target store.'))}return new A.nW(f.oz(a),f.oy(a),f.ox(a),d)},
oz(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.gkt()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.E&&q){k=o.f
k.toString
j=new A.a_(k,new A.p2(),A.a6(k).i("a_<1,k>")).J(0,", ")
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
oy(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.A)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("a_<F.E,k>")
j=A.P(new A.a_(l,A.zx(),k),k.i("V.E"))
if(!l.C(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.aQ?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.J(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.c.J(j,", ")+") WHERE "+i+";")}else{l=l.J(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.c.J(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.A)(r),++n){h=r[n]
if(h.b!==B.F)continue
if(B.c.cR(s,new A.p1(h)))continue
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
ox(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.q
s=A.l([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("a_<F.E,k>")
n=A.P(new A.a_(p,A.zx(),o),o.i("V.E"))
m=new A.p0(r,a0.c)
l=new A.a_(p,new A.oY(m),o).J(0,f)
k=new A.a_(p,new A.oZ(m),o).J(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.c.J(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.c.J(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.c.J(n,f)+a+k+");\nEND;")
i=new A.a_(n,new A.p_(),A.a6(n).i("a_<1,k>")).J(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.c.J(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.c.J(n,f)+b+l+");\nEND;")
return s}}
A.p3.prototype={
$1(a){var s=a.a
return s.C(s,this.a.a)},
$S:46}
A.p2.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:7}
A.p1.prototype={
$1(a){var s=a.a
return s.C(s,this.a.a)},
$S:46}
A.p0.prototype={
$2(a,b){return A.CF(this.a,this.b,a,b)},
$S:80}
A.oY.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.oZ.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.p_.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.eV.prototype={
k(a){return A.d1(this).k(0)+": "+this.a},
$iJ:1}
A.il.prototype={}
A.ij.prototype={}
A.hR.prototype={}
A.hb.prototype={}
A.hX.prototype={}
A.hq.prototype={}
A.cQ.prototype={}
A.i2.prototype={}
A.i4.prototype={}
A.f6.prototype={}
A.hr.prototype={}
A.hd.prototype={}
A.eL.prototype={}
A.rY.prototype={}
A.y8.prototype={
$1(a){if(typeof a!="string")return a
return this.a.eT(a)},
$S:14}
A.k3.prototype={
ab(){return"DurabilityClass."+this.b}}
A.ld.prototype={}
A.rs.prototype={
bN(a){var s,r=this.a
if(!r.G(a))return null
s=r.E(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.mW(s)
r.toString
t.G.a(r)}return r},
kq(a,b){var s,r=this.a
if(r.a>=256)r.E(0,new A.U(r,A.m(r).i("U<1>")).gD(0))
if(b==null)s=null
else{s=A.mW(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vS(a){var s,r,q,p=a.a
if(p===0){this.a.ah(0)
return}s=this.a
if(p>=s.a){s.ah(0)
return}for(p=A.fA(a,a.r,A.m(a).c),r=p.$ti.c;p.m();){q=p.d
s.E(0,q==null?r.a(q):q)}}}
A.ks.prototype={
b8(a){return this.wH(a)},
wH(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$b8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:k=new A.hi(q.c).jr(a)
j=a.w
if(j!=null)A.IX(q.b,a.a,j.c)
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
if(n>m)throw A.b(new A.i4('Store "'+p+'" on disk is schema v'+n+", but this package supports v"+m+"."))
s=n<m?17:18
break
case 17:s=19
return A.a(A.eX(q,a,n),$async$b8)
case 19:case 18:s=20
return A.a(q.bE(a),$async$b8)
case 20:s=21
return A.a(j.L("lp_stores",A.n(["definition_json",B.h.a7(a.am(),null),"schema_ver",m],t.N,t.X),"store = ?",[p]),$async$b8)
case 21:case 4:q.ch.j(0,p,new A.ld(a,new A.rs(A.D(t.N,t.b))))
return A.e(null,r)}})
return A.f($async$b8,r)},
ho(a){return this.u_(a)},
u_(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$ho=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$ho)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
bE(a){return this.rW(a)},
rW(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bE=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.b
a1=a3.a
s=3
return A.a(a0.e2("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a1]),$async$bE)
case 3:a2=a6
if(J.bO(a2)){s=1
break}o=null
try{n=J.T(J.c2(a2),"definition_json")
m=typeof n=="string"?B.h.aA(n,null):n
l=m
l.toString
k=t.X
o=A.yr(A.b_(t.f.a(l),t.N,k),k)}catch(a4){if(A.C(a4) instanceof A.cQ){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.aj.Y(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.ic()
$.jp()
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
case 11:l=new A.hi(p.c).jr(a3).d,k=l.length,e=0
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
b=new A.a_(k,A.zx(),c).J(0,", ")
a=new A.a_(k,new A.qm(a3,h),c).J(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.H("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bE)
case 18:case 12:if(f.b==null)f.b=$.kS.$0()
l=a3.b
s=19
return A.a(A.eY(a0,f.gme(),l,"fts:"+a1,p.Q,l),$async$bE)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bE,r)},
hv(a){return this.uq(a)},
uq(a){var s=0,r=A.h(t.H),q=this,p
var $async$hv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hv)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hv,r)},
ae(a){var s=this.ch.h(0,a)
if(s==null)throw A.b(A.w('No store "'+a+'" registered in this LocalPocket.'))
return s},
cz(a,b,c){var s,r
if(A.ln(this)!=null)A.v(A.w(u.L))
s=this.dy
if(s!=null&&s.b===b&&!s.d){r=new A.q($.u,t._)
s.c.push(new A.fr(a,new A.aC(r,t.jk)))
return r.aO(new A.qr(c),c)}return this.tl(a,b,c)},
Z(a,b){return this.cz(a,B.p,b)},
tl(a,b,c){var s,r,q,p=this
if(p.dx.a>0){s=p.dy
if(s!=null)s.mn()}s=A.l([],t.i4)
r=new A.lW(p,b,s)
p.dy=r
r.wN()
q=new A.q($.u,t._)
s.push(new A.fr(a,new A.aC(q,t.jk)))
return q.aO(new A.qn(c),c)},
mS(a){++this.e.e
return this.b.aB(a,B.y)},
mT(a,b){++this.e.f
return this.b.ai(a,b)},
dK(a){return this.tV(a)},
tU(){return this.dK(null)},
tV(a){var s=0,r=A.h(t.H),q=this,p
var $async$dK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.H("ANALYZE"),$async$dK)
case 5:s=3
break
case 4:s=6
return A.a(p.H("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$dK)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dK,r)},
f9(){var s=0,r=A.h(t.H),q=this
var $async$f9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.H("PRAGMA wal_checkpoint(TRUNCATE)"),$async$f9)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f9,r)},
i8(){var s=0,r=A.h(t.H),q=this
var $async$i8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.H("PRAGMA wal_checkpoint(PASSIVE)"),$async$i8)
case 4:case 3:return A.e(null,r)}})
return A.f($async$i8,r)},
f8(a){return this.x9(a)},
x9(a){var s=0,r=A.h(t.H),q=this,p
var $async$f8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a!=null?2:4
break
case 2:s=5
return A.a(p.H("PRAGMA incremental_vacuum("+A.r(a)+")"),$async$f8)
case 5:s=3
break
case 4:s=6
return A.a(p.H("VACUUM"),$async$f8)
case 6:case 3:return A.e(null,r)}})
return A.f($async$f8,r)},
eX(a){return this.wn(a)},
wm(){return this.eX(1e4)},
wn(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$eX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.Z(new A.qq(o),t.P),$async$eX)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eX,r)},
d7(a){return this.wS(a)},
wS(a){var s=0,r=A.h(t.H),q=this,p
var $async$d7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.ch,p=new A.bS(p,p.r,p.e,A.m(p).i("bS<1>"))
case 2:if(!p.m()){s=3
break}s=4
return A.a(q.u8(p.d,a),$async$d7)
case 4:s=2
break
case 3:s=5
return A.a(q.wm(),$async$d7)
case 5:s=6
return A.a(q.f9(),$async$d7)
case 6:s=7
return A.a(q.tU(),$async$d7)
case 7:return A.e(null,r)}})
return A.f($async$d7,r)},
dO(a,b,c){return this.u9(a,b,c)},
u8(a,b){return this.dO(a,null,b)},
u9(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i
var $async$dO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:k={}
j=b==null?p.Q.$0():b
i=j-B.b.K(c.a,1000)
k.a=0
o=p.ae(a).a
n=t.P,m=p.b
case 3:s=5
return A.a(m.ai("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",i,250]),$async$dO)
case 5:l=e
if(J.bO(l)){s=4
break}s=6
return A.a(p.Z(new A.qp(k,p,l,a,i,o),n),$async$dO)
case 6:s=3
break
case 4:q=k.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
re(){if(++this.fr<64)return
this.fr=0
A.cv(B.A,new A.ql(this))},
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
A.qm.prototype={
$1(a){return A.CF(this.a.a,this.b.c,"",a)},
$S:7}
A.qr.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.qn.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.qq.prototype={
$1(a){return this.na(a)},
na(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
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
A.qp.prototype={
$1(a){return this.n9(a)},
n9(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a=A.q7(b.i("o.E"))
a.F(0,new A.b2(new A.U(c,d),new A.qo(),b))
a2.bs(new A.aV(n,f,B.a_,B.aH,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qo.prototype={
$1(a){return a!=="id"},
$S:12}
A.ql.prototype={
$0(){this.a.i8().m4(new A.qk())},
$S:0}
A.qk.prototype={
$1(a){},
$S:37}
A.lW.prototype={
wN(){var s,r,q,p=this,o=new A.aC(new A.q($.u,t.D),t.h)
p.e=o
s=p.a
r=s.d
r===$&&A.x()
r.aZ(new A.vl(p,o),t.H)
q=s.dx
s=p.gvj()
if(q.a>0)A.cv(q,s)
else A.cv(B.A,s)},
mn(){var s,r=this
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
b2.c+=b1}b3=new A.ic()
$.jp()
b3.av()
k=b3
b1=m.a
j=m.b===B.aI&&b1.a!==":memory:"
s=j&&b1.cy!=="FULL"?3:4
break
case 3:s=5
return A.a(b1.mS("PRAGMA synchronous=FULL"),$async$cp)
case 5:b1.cy="FULL"
case 4:i=A.l([],t.aL)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b1.b.Z(new A.vk(m,i,h,l,g),t.P),$async$cp)
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
if(b7!=null)b7.d.vS(a0.b)
b4.uZ(a0)}for(f=h,b2=f.length,b5=0;b5<f.length;f.length===b2||(0,A.A)(f),++b5){a1=f[b5]
b4.v_(a1)}n.push(9)
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
return A.a(b1.mS("PRAGMA synchronous=NORMAL"),$async$cp)
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
a4=k.guY();++f.a
f.d+=a4
b1.re()
for(f=b0.length,b5=0;b5<b0.length;b0.length===f||(0,A.A)(b0),++b5){a9=b0[b5]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.v(A.w("Future already completed"))
a4.al(A.ew(new A.bk("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cp,r)}}
A.vl.prototype={
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
A.vk.prototype={
$1(a){return this.nu(a)},
nu(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.AY(a.a,a3,o.b,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.yc(new A.vi(a,a0),null,A.n([$.n8(),a0],g,g),t.g7),$async$$1)
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
return A.a(A.yc(new A.vj(a0,k),null,A.n([$.n8(),a0],c,c),d),$async$$1)
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
A.vi.prototype={
$0(){return B.c.gau(this.a.c).a.$1(this.b)},
$S:48}
A.vj.prototype={
$0(){var s=this.a,r=s.f,q=r.b,p=r.a,o=""+p,n=q!=null?q+"_"+o:"lp_sp"+o
r.a=p+1
return s.cm(n,new A.vh(this.b),t.z)},
$S:48}
A.vh.prototype={
$1(a){return this.a.a.$1(a)},
$S:113}
A.fr.prototype={}
A.mg.prototype={}
A.qK.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:139}
A.qL.prototype={
$2(a,b){return B.b.X(a.a,b.a)},
$S:141}
A.qH.prototype={
$1(a){return a.h(0,"name")},
$S:30}
A.qJ.prototype={
$1(a){return this.nb(a)},
nb(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.I(q.a),k=q.b,j=q.c,i=j.y,j=j.z,h=q.e
case 2:if(!l.m()){s=3
break}p=l.gn()
o=A.cj(k,p,i,j)
n=o
A.EQ(k,n)
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
A.kO.prototype={
wx(a){if(a>this.w)this.w=a}}
A.rV.prototype={}
A.bR.prototype={
ab(){return"FieldKind."+this.b}}
A.aQ.prototype={
gkt(){var s,r
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
A.pa.prototype={
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
return new A.aQ(m,B.E,r,!1,!1,A.dd(J.js(t.j.a(n),p),p),o,!1)
case 6:return new A.aQ(m,B.O,!1,!1,q,o,o,!1)
case 7:return new A.aQ(m,B.P,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aQ(m,B.F,!1,!1,!1,o,A.M(p),J.t(n.h(0,"enforceFk"),!0))}},
$S:143}
A.hw.prototype={
ab(){return"IndexScope."+this.b}}
A.d8.prototype={
am(){return A.n(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.pT.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.js(t.j.a(q),t.N)
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
gI(a){return A.c8(A.qT(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.pm.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.js(t.j.a(p),s)
r=J.t(r.h(0,"fuzzy"),!0)
return new A.eR(p,r,t.f.b(q)?A.Eo(q.bW(0,s,t.X)):B.bL)},
$S:159}
A.dV.prototype={
eT(a){var s,r,q,p
for(s=this.a.gaK(),s=s.gt(s),r=a;s.m();){q=s.gn()
p=q.a
if(!B.a.C(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
am(){return A.n(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.dV&&A.En(this.a,b.a)
else s=!0
return s},
gI(a){var s,r,q,p=this.a,o=p.gO(),n=A.P(o,A.m(o).i("o.E"))
B.c.aT(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.A)(n),++r){q=n[r]
o.push(A.c8(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.qT(o)},
k(a){var s=this.a
return"FtsNormalization("+s.gl(s)+" rules)"}}
A.pl.prototype={
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
A.Am(p,q)
r.j(0,p,q)}return new A.dV(A.E8(r,s,s))},
$S:174}
A.bU.prototype={
am(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)p.push(s[q].am())
return A.n(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.td.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ah(o)
s=J.t(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.I(p==null?B.aV:p)
q=t.G
while(p.m())r.push(A.Ah(q.a(p.gn())))
return new A.bU(o,s,r)},
$S:175}
A.qM.prototype={
ab(){return"MissingRemotePolicy."+this.b}}
A.o7.prototype={}
A.bQ.prototype={
gdP(){var s,r,q,p,o=this,n=$.D3()
A.yy(o)
s=n.a.get(o)
if(s==null){s=A.aS(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
mk(a){var s,r,q,p,o,n=this,m=$.D4()
A.yy(n)
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
A.nM.prototype={
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
while(q.m())r.push(A.Ah(o.a(q.gn())))
q=A.l([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.I(p.a(n))
while(n.m())q.push(A.Ew(o.a(n.gn())))
p=J.t(k.h(0,"keepUnsyncedArchives"),!0)
n=J.t(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.Ep(o.a(m))}else m=null
l=A.l([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.I(k==null?B.aV:k)
while(k.m())l.push(A.Fo(o.a(k.gn())))
return new A.bQ(j,s,r,q,n,p,m,l,this.b.i("bQ<0>"))},
$S(){return this.b.i("bQ<0>()")}}
A.dg.prototype={
ab(){return"MutationAction."+this.b}}
A.dO.prototype={
gbf(){var s=this.c
return s==null?this.a.b:s},
gb7(){return this.b.a.a},
iE(){},
i_(a){var s=this
if(s.d!=null)return s.lj(B.aX,a)
return s.a.cz(new A.nT(s,a),B.p,t.H)},
mU(a){var s=this
if(s.d!=null)return s.lj(B.aY,a)
return s.a.cz(new A.nV(s,a),B.p,t.H)},
mC(a,b){var s=this
if(s.d!=null)return s.dB(a,b)
return s.a.cz(new A.nR(s,a,b),B.p,t.H)},
lY(a){var s=this
if(s.d!=null)return s.li(B.C,a)
return s.a.cz(new A.nQ(s,a),B.p,t.H)},
mN(a){var s=this
if(s.d!=null)return s.li(B.H,a)
return s.a.cz(new A.nU(s,a),B.p,t.H)},
k_(a){var s=this
if(s.d!=null)return s.dD(a)
return s.a.cz(new A.nS(s,a),B.p,t.H)},
dD(a){return this.rJ(a)},
rJ(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.iE()
s=2
return A.a(q.dF(a),$async$dD)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.ck(n,m,a,!0),$async$dD)
case 3:s=4
return A.a(n.a6(m,"id = ?",[a]),$async$dD)
case 4:l=t.N
o.a_(new A.a1(m,A.ai([a],l)))
if(p!=null){l=A.e_(p.gO(),l)
l.E(0,"id")
o.bs(new A.aV(m,a,B.a_,B.aH,p,null,l))}return A.e(null,r)}})
return A.f($async$dD,r)},
dB(a,b){return this.rw(a,b)},
rw(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$dB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.iE()
s=3
return A.a(p.gbf().ai("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$dB)
case 3:o=d
n=J.K(o)
if(n.gW(o)){m=n.gD(o)
l=A.lj(m)
k=m.h(0,"o_kind")!=null?A.r0(A.n(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.ac&&k!=null?4:5
break
case 4:s=6
return A.a(p.em(a,b,l,k,!1),$async$dB)
case 6:s=1
break
case 5:s=7
return A.a(p.cK(a,b,!1,k,l),$async$dB)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dB,r)},
cK(a,b,c,d,e){return this.p9(a,b,!1,d,e)},
p9(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cK=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dF(a),$async$cK)
case 2:m=g
if(m==null)throw A.b(A.yV("No record "+q.gb7()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.dZ(m,p,o)
n.F(0,b)
o=A.D(p,o)
o.j(0,"id",a)
o.F(0,n)
s=3
return A.a(q.aV(B.G,!1,m,a,d,e,o),$async$cK)
case 3:return A.e(null,r)}})
return A.f($async$cK,r)},
em(a,b,c,d,e){return this.rz(a,b,c,d,!1)},
rz(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$em=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.aA(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.cK(a7,a8,!1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.t(i,a7)){q=n.cK(a7,a8,!1,b0,a9)
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
c=A.Cp(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.dZ(m,h,g)
b.E(0,"id")
n.lQ(a7,b,a,c)
a0=n.l_(a5,m,B.G)
l=null
b=a0.length===1&&d.gdP().C(0,B.c.gau(a0))
a1=n.a
a2=a1.y
a3=a1.z
if(b){a4=d.mk(B.c.gau(a0))
b=a4.a
l=A.n([b,A.CB(d,a4,J.T(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dD(d,J.t(J.T(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbf().L(d.a,l,"id = ?",[a7]),$async$em)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.C(a6)
h=A.CZ(k,m)
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
return A.a(g.bj(B.G,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$em)
case 8:g=n.d
if(g!=null)g.a_(new A.a1(d.a,A.ai([a7],h)))
h=g==null
f=h?null:g.a.a$.b.d!=null
if(f===!0)if(!h)g.bs(new A.aV(d.a,a7,B.a_,B.x,a5,m,A.q8(a0,A.a6(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$em,r)},
aV(a,b,c,d,e,f,g){return this.ra(a,!1,c,d,e,f,g)},
li(a,b){var s=null
return this.aV(a,!1,s,b,s,s,s)},
lj(a,b){var s=null
return this.aV(a,!1,s,s,s,s,b)},
ra(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aV=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.iE()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.nP(b5,n,c2,c1)
s=b7===B.aX?3:5
break
case 3:h=A.aa(c3.h(0,"id"))
if(h==null)h=A.jh()
g=$.yl()
if(!g.b.test(h))throw A.b(A.aJ('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aV)
case 6:l=n.j_(c3,m)
b7=b5.a==null?B.aZ:B.G
s=4
break
case 5:s=b7===B.G?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aV)
case 10:if(b5.a==null)throw A.b(A.yV("No record "+n.gb7()+"/"+A.r(m)+" to update."))
c3.toString
l=n.j_(c3,m)
s=8
break
case 9:s=b7===B.aY?11:13
break
case 11:h=A.aa(c3.h(0,"id"))
if(h==null)h=A.jh()
g=$.yl()
if(!g.b.test(h))throw A.b(A.aJ('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aV)
case 14:g=b5.a
if(g==null){l=n.j_(c3,m)
b7=B.aZ}else{l=A.dZ(g,t.N,t.X)
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
if(g==null)throw A.b(A.yV("No record "+n.gb7()+"/"+A.r(m)+" to archive/restore."))
g=A.dZ(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.ab("")
g=n.b
e=g.a
c=l
b=A.Cp(d,e,c,J.ao(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.lQ(m,l,a,b)
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
return A.a(c.e4(n.gbf(),e.a,m),$async$aV)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.U)throw A.b(A.Ab("Record "+n.gb7()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.w
else a5=!1
if(a4&&a5){a6=A.aj(A.b6(e,a3))
a2=A.aD(B.l.v(B.f.v(a6)).a)
a7=new A.nt(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.y
a8=a3.z
a9=A.dD(e,J.t(J.T(l,"archived"),!0),a4,a8,c,a2)
b0=n.l_(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gdP().C(0,B.c.gau(b0))){b1=e.mk(B.c.gau(b0))
c=b1.a
k=A.n([c,A.CB(e,b1,J.T(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
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
g=A.CZ(j,l)
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
case 4:b3=B.by
break
case 5:b3=B.bz
break
default:b3=null}if(b7===B.C||b7===B.H)b4=A.ai(["archived"],t.N)
else if(b5.a==null){g=l
c=A.m(g).i("U<1>")
a2=c.i("b2<o.E>")
b4=A.e_(new A.b2(new A.U(g,c),new A.nO(),a2),a2.i("o.E"))}else b4=A.q8(b0,A.a6(b0).c)
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
j_(a,b){var s,r,q,p=A.D(t.N,t.X)
for(s=new A.aB(a,A.m(a).i("aB<1,2>")).gt(0);s.m();){r=s.d
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.mE("archived",new A.nN())
return p},
l_(a,b,c){var s,r,q,p,o
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
dF(a){return this.rU(a)},
rU(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbf().ai('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dF)
case 3:m=c
l=J.K(m)
if(l.gA(m)){q=null
s=1
break}o=p.a
q=A.cj(n,l.gD(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dF,r)},
h8(a){return this.rE(a)},
rE(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$h8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbf().ai('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$h8)
case 3:j=c
k=J.K(j)
if(k.gA(j)){q=B.cA
s=1
break}o=k.gD(j)
k=p.a
n=A.cj(l,o,k.y,k.z)
m=o.h(0,"s_sync_state")!=null?A.lj(A.n(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.es(n,m,o.h(0,"o_kind")!=null?A.r0(A.n(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
bN(a){return this.ny(a)},
ny(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
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
if(l.gA(k)){if(g)o.d.kq(a,null)
q=null
s=1
break}j=l.gD(k)
l=p.a
i=A.cj(n,j,l.y,l.z)
h=A.b4(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.HR(n,i,h,m)
if(g)o.d.kq(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
lQ(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.aJ('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.zy(p,n)
if(m!=null)throw A.b(A.aJ(A.E3(p,m),o))}s=this.a.f
if(d>s)throw A.b(A.aJ("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.nT.prototype={
$1(a){return a.bX(this.a.b.a.a).i_(this.b)},
$S:6}
A.nV.prototype={
$1(a){return a.bX(this.a.b.a.a).mU(this.b)},
$S:6}
A.nR.prototype={
$1(a){return a.bX(this.a.b.a.a).mC(this.b,this.c)},
$S:6}
A.nQ.prototype={
$1(a){return a.bX(this.a.b.a.a).lY(this.b)},
$S:6}
A.nU.prototype={
$1(a){return a.bX(this.a.b.a.a).mN(this.b)},
$S:6}
A.nS.prototype={
$1(a){return a.bX(this.a.b.a.a).k_(this.b)},
$S:6}
A.nP.prototype={
n_(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dF(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.h8(a),$async$$1)
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
$1(a){return this.n_(a)},
$S:183}
A.nO.prototype={
$1(a){return a!=="id"},
$S:12}
A.nN.prototype={
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
cm(a,b,c){return this.tD(a,b,c,c)},
tD(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
d=A.AY(f,a,h,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.yc(new A.tC(a3,j,a4),null,A.n([$.n8(),j],f,f),a4.i("y<0>")),$async$cm)
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
if(a>m)B.c.mK(h,m,a)
a=g.length
if(a>l)B.c.mK(g,l,a)
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
A.tC.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.wu.prototype={}
A.hT.prototype={
ks(a){var s
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
js(a){return a==null?"<null>":A.aD(B.l.v(B.f.v(A.aj(a))).a)},
mB(a){var s=this.y
return s==null?null:s.u(0,a)},
jV(a,b){var s=this.y
return s==null?null:s.bG(a,b)},
nS(){var s=this.y=A.yZ(this.guS(),new A.qU(this),null,!1,t.b)
return new A.bb(s,A.m(s).i("bb<1>"))},
hx(){this.nV()
var s=this.y
if(s!=null)s.p()}}
A.qU.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.av()
s=2
return A.a(p.ey(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.c3.prototype={
jV(a,b){},
av(){var s=this.a.a$.a
this.c=new A.b3(s,A.m(s).i("b3<1>")).aW(this.grg())},
hN(){return this.vQ(A.m(this).i("c3.T"))},
vQ(a){var s=0,r=A.h(a),q,p=this,o
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c_(),$async$hN)
case 3:o=c
p.r=p.js(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
rh(a){var s,r=this
if(!r.ks(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.B()
r.d=A.cv(r.b,r.glR())},
ey(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$ey=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.e;++i.y
q=3
s=6
return A.a(n.c_(),$async$ey)
case 6:m=b
l=n.js(m)
if(!J.t(l,n.r)){n.r=l;++i.z
n.mB(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.C(g)
j=A.a7(g)
n.jV(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.B()
n.d=A.cv(n.b,n.glR())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ey,r)},
hx(){var s=this.d
if(s!=null)s.B()
s=this.c
if(s!=null)s.B()}}
A.uE.prototype={
aZ(a,b){var s,r=this;++r.b
r.ll()
s=new A.q($.u,b.i("q<0>"))
r.a=r.a.aO(new A.uF(r,new A.aC(s,b.i("aC<0>")),a),t.H)
return s},
ll(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.uF.prototype={
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
j.ll()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:28}
A.nu.prototype={}
A.eI.prototype={
k(a){return"BlobMissingError: "+this.a},
$iJ:1}
A.jK.prototype={
k(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iJ:1}
A.le.prototype={}
A.y2.prototype={
$1(a){return B.c.F(this.a,a)},
$S:70}
A.hn.prototype={}
A.pc.prototype={
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
return A.a(a3.eD(25),$async$bo)
case 3:a4=b5.I(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.m()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b_?10:12
break
case 10:s=13
return A.a(n.ce(i,b2),$async$bo)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.mz(i.b),$async$bo)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b0?17:18
break
case 17:s=19
return A.a(n.eo(i),$async$bo)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.mz(i.b),$async$bo)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.C(b3)
j=!0
e=i.w+1
d=a5.mb(e)
a8=i.b
a9=J.ap(f)
b0=a6.$0()
s=23
return A.a(a3.w7(a8,a9,e,b0+B.b.K(d.a,1000)),$async$bo)
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
return A.a(a2.e1("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bo)
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
return A.a(n.cW(a0,a,a1,c),$async$bo)
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
case 25:q=new A.hn(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bo,r)},
ce(a,b){return this.rI(a,b)},
rI(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
i=n.b.y
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
if(m!=null){f=B.a.q(l,0,B.b.cT(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.x7(a3.d,A.n([k,new A.fc(k,j,new A.pe(a4,l))],t.N,t.h3)),$async$ce)
case 13:l=a6.e
a.a=l.length!==0?B.c.ga3(l):k
case 11:s=14
return A.a(n.a.Z(new A.pf(a,a1,a3),t.P),$async$ce)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ce,r)},
eo(a){return this.rH(a)},
rH(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eo=A.c(function(b,c){if(b===1)return A.d(c,r)
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
return A.a(p.b.x5(a.d,A.l([o],t.s)),$async$eo)
case 5:case 4:s=6
return A.a(p.a.Z(new A.pd(l,n,a),t.P),$async$eo)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eo,r)},
cW(a,b,c,d){return this.uU(a,b,c,d)},
uU(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cW=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.y
l===$&&A.x()
k=m
s=4
return A.a(l.hy(c,a,null),$async$cW)
case 4:s=3
return A.a(k.i_(f),$async$cW)
case 3:o=f
s=5
return A.a(m.bc(o),$async$cW)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.Z(new A.pg(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cW)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cW,r)},
d1(a,b,c,d){return this.wb(a,b,c,d)},
wb(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$d1=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.e1("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$d1)
case 2:k=f
j=A.q8(c,A.a6(c).c)
i=J.aA(k)
h=t.x
g=A.e_(new A.bv(i.c5(k,new A.ph(),t.v),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.C(0,n)?6:7
break
case 6:s=8
return A.a(a.c2(0,"lp_file_refs",A.n(["ref_id",A.jh(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bB),$async$d1)
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
return A.a(a.a6("lp_file_refs","ref_id = ?",[q]),$async$d1)
case 11:l=A.aa(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.S(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aB(u.y,[l]),$async$d1)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$d1,r)}}
A.pe.prototype={
$0(){return this.a.ct(this.b)},
$S:71}
A.pf.prototype={
$1(a){return this.n2(a)},
n2(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.n(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a1(p.c,A.ai([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pd.prototype={
$1(a){return this.n1(a)},
n1(a){var s=0,r=A.h(t.P),q=this,p,o
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
A.pg.prototype={
$1(a){return this.n3(a)},
n3(a){var s=0,r=A.h(t.P),q=this,p,o,n
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
A.ph.prototype={
$1(a){return A.aa(a.h(0,"remote_name"))},
$S:72}
A.b7.prototype={}
A.pb.prototype={
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
A.qc.prototype={
glz(){return this.b},
gjP(){var s=0,r=A.h(t.y),q,p=this
var $async$gjP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dw()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gjP,r)},
dX(a,b,c){return this.vY(a,b,c)},
vY(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$dX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.b.e1("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$dX)
case 3:o=n.aL(e,A.Is(),t.A)
o=A.P(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dX,r)},
cS(a,b,c,d,e,f,g,h){return this.tZ(a,b,c,d,e,f,g,h)},
tZ(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$cS=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.glz()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dw(),$async$cS)
case 5:j=!j
case 4:if(j)throw A.b(A.w("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.d3(b,c,d),$async$cS)
case 6:o=j
s=7
return A.a(m.bc(o),$async$cS)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.Z(new A.qd(p,h,g,e,o,n,A.jh(),f),t.A),$async$cS)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cS,r)},
eU(a,b,c,d,e){return this.we(a,b,c,d,e)},
we(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$eU=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.glz()
s=3
return A.a(p.dX(a,c,e),$async$eU)
case 3:k=g
j=J.K(k)
if(j.gA(k))throw A.b(A.w("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.eH(k,new A.qf(d),new A.qg(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.w("File is remote_only; download it before opening."))
j=p.a
n=j.Q.$0()
m=o.e
s=4
return A.a(j.b.aB("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$eU)
case 4:q=l.ct(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eU,r)},
f1(a,b,c,d,e,f){return this.wJ(0,b,c,d,e,f)},
wJ(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$f1=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dX(b,d,f),$async$f1)
case 3:n=h
m=J.K(n)
if(m.gA(n)){s=1
break}o=e!=null?m.eH(n,new A.qh(e),new A.qi(e)):m.h(n,c)
s=4
return A.a(p.a.Z(new A.qj(p,o,f,d,b),t.P),$async$f1)
case 4:case 1:return A.e(q,r)}})
return A.f($async$f1,r)},
ba(a,b){return this.nx(a,b)},
nx(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$ba=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.dM(a8),$async$ba)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.Q.$0()-B.b.K(a7.a,1000)
s=6
return A.a(e.Z(new A.qe(a2,n),t.P),$async$ba)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.eM(),$async$ba)
case 13:l=b0
s=J.eG(l)?14:15
break
case 14:k=0
j=A.aS(t.N)
d=e.b,c=t.s
case 16:s=18
return A.a(d.ws("lp_blobs",A.l(["hash"],c),250,k,"hash ASC"),$async$ba)
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
if(J.ym(j,g)){s=19
break}p=22
b=new A.q($.u,c)
b.aU(null)
s=25
return A.a(b,$async$ba)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.cV(g),$async$ba)
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
return A.a(e.wu("lp_blobs",A.l(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$ba)
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
return A.a(a3.cV(b),$async$ba)
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
co(a){return this.v2(a)},
v2(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
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
return A.a(h.cV(i),$async$co)
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
A.qd.prototype={
$1(a){return this.n6(a)},
n6(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.Q.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.e2("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.K(c)
if(b.gW(c)){q=A.Ai(b.gD(c))
s=1
break}s=4
return A.a(A.h1(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.e2("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.K(o)
n=h.gW(o)&&J.T(h.gD(o),"base_updated")==null?A.aa(J.T(h.gD(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.c2(0,"lp_file_refs",A.n(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.N),$async$$1)
case 6:k=A.jh()
s=7
return A.a(j.aC(0,"lp_op_queue",A.n(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a7(A.n(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a_(new A.a1(g,A.ai([f],m)))
q=new A.b7(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:74}
A.qf.prototype={
$1(a){return a.a===this.a},
$S:50}
A.qg.prototype={
$0(){return A.v(A.w("FileRef "+this.a+" not found"))},
$S:31}
A.qh.prototype={
$1(a){return a.a===this.a},
$S:50}
A.qi.prototype={
$0(){return A.v(A.w("FileRef "+this.a+" not found"))},
$S:31}
A.qj.prototype={
$1(a){return this.n8(a)},
n8(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.aC(0,"lp_op_queue",A.n(["op_id",A.jh(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a7(A.n(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a1(q.c,A.ai([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qe.prototype={
$1(a){return this.n7(a)},
n7(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
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
A.u2.prototype={
en(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$en=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.h0()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a0(n.getDirectory(),l),$async$en)
case 7:m=b
s=8
return A.a(A.a0(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$en)
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
return A.f($async$en,r)},
dw(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.en(),$async$dw)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dw,r)},
bh(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bh=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dw(),$async$bh)
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
d3(a,b,c){return this.wq(a,b,c)},
i_(a){return this.d3(a,null,null)},
wq(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$d3=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.v2(A.l([],t.bs))
s=3
return A.a(A.jl(a,b,c,null,new A.u3(o)),$async$d3)
case 3:n=e
m=o.k9()
s=4
return A.a(p.bh(),$async$d3)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.aR(k,m),$async$d3)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d3,r)},
ct(a){return this.wg(a)},
wg(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$ct=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jL(a)
j=n.b
if(j.G(a)){j=j.h(0,a)
j.toString
q=A.z_(j,t.L)
s=1
break}s=3
return A.a(n.bh(),$async$ct)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.e3(a),$async$ct)
case 10:l=c
j=A.z_(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.C(h)
if(!(k instanceof A.eI))throw A.b(A.A4(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.w("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ct,r)},
cV(a){return this.uo(a)},
uo(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$cV=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.jL(a)
o.b.E(0,a)
s=2
return A.a(o.bh(),$async$cV)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.E(0,a),$async$cV)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.C(k)
if(!(m instanceof A.eI))throw A.b(A.A4(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cV,r)},
bk(a){return this.v8(a)},
v8(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.jL(a)
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
bc(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.I),q,p=this,o,n
var $async$bc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.jL(a)
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
dM(a){return this.u5(a)},
u5(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$dM=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bh(),$async$dM)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.dW(),$async$dM)
case 8:k=f.I(c)
case 9:if(!k.m()){s=10
break}l=k.gn()
if(!J.DQ(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.E(0,l),$async$dM)
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
return A.f($async$dM,r)},
eM(){var s=0,r=A.h(t.k),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$eM=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.e_(new A.U(j,A.m(j).i("U<1>")),t.N)
s=3
return A.a(n.bh(),$async$eM)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.dW(),$async$eM)
case 10:j=f.I(b)
case 11:if(!j.m()){s=12
break}m=j.gn()
l=$.zI()
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
return A.f($async$eM,r)}}
A.u3.prototype={
$1(a){return this.a.u(0,a)},
$S:25}
A.mj.prototype={
e3(a){return this.wz(a)},
wz(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$e3=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a0(n.a.getFileHandle(a,{create:!1}),i),$async$e3)
case 7:m=c
s=8
return A.a(A.a0(m.getFile(),i),$async$e3)
case 8:l=c
s=9
return A.a(A.a0(l.arrayBuffer(),t.a),$async$e3)
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
if(A.B4(j))throw A.b(A.A3(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e3,r)},
aR(a,b){return this.xd(a,b)},
xd(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
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
E(a,b){return this.wK(0,b)},
wK(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$E=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.yA(o.a,b),$async$E)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.C(l)
if(A.B4(n))throw A.b(A.A3(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$E,r)},
bk(a){return this.v9(a)},
v9(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
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
bc(a){return this.nM(a)},
nM(a){var s=0,r=A.h(t.I),q,p=2,o=[],n=this,m,l,k,j,i
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
dW(){var s=0,r=A.h(t.k),q,p=2,o=[],n=[],m=this,l,k,j
var $async$dW=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.bZ(A.bL(A.Aj(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.m(),$async$dW)
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
return A.a(j.B(),$async$dW)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dW,r)},
$iAF:1}
A.lm.prototype={
gmI(){return 1}}
A.nq.prototype={
d8(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$d8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.ej(),$async$d8)
case 5:o=b
s=o.gmI()<0.25?6:7
break
case 6:s=8
return A.a(p.jb(o),$async$d8)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gmI()<0.25?9:10
break
case 9:s=11
return A.a(p.jb(m),$async$d8)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d8,r)},
i2(){var s=0,r=A.h(t.q),q,p=this
var $async$i2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ej(),$async$i2)
case 3:q=p.jb(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
ej(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$ej=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.jw():j
p=3
s=6
return A.a(l,$async$ej)
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
return A.f($async$ej,r)},
jb(a){var s=this.c
if(s!=null)return s
return this.c=this.fp(a)},
fp(a){return this.oW(a)},
oW(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fp=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.w("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.k0(l),$async$fp)
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
return A.f($async$fp,r)}}
A.kL.prototype={
o9(a,b,c,d,e,f,g,h){var s=this,r=new A.nq(s.b)
s.x!==$&&A.yf()
s.x=r
s.y!==$&&A.yf()
s.y=new A.rb(s.w,s.a,r)},
hX(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$hX=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.as){s=1
break}n.as=!0
if(n.at){s=1
break}p=4
m=n.y
m===$&&A.x()
s=7
return A.a(m.hZ(),$async$hX)
case 7:n.Q=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.C(k)
if(m instanceof A.cn){n.Q=!1
n.at=!0}else if(m instanceof A.bm)n.as=n.Q=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hX,r)},
fk(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$fk=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.z!=null){s=1
break}o=p.y
o===$&&A.x()
n=A.l([p.r],t.s)
m=A.c6(null,t.H)
l=A.F_(B.bC,B.aM,A.J_())
k=new A.rj(o,n,l,p.gro(),p.grr(),m)
p.z=k
s=3
return A.a(k.av(),$async$fk)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
ee(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ee=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.z
o=o==null?null:o.aD()
s=2
return A.a(o instanceof A.q?o:A.bd(o,t.H),$async$ee)
case 2:q.z=null
for(o=q.ay,p=new A.aR(o,o.r,o.e,A.m(o).i("aR<2>"));p.m();)p.d.B()
o.ah(0)
q.ch.ah(0)
return A.e(null,r)}})
return A.f($async$ee,r)},
rp(){var s,r,q,p
for(s=this.CW,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
this.ef(p,new A.cl(p,B.Y,null))}},
rs(a){var s=a.b,r=s.b
if(!B.c.C(this.CW,r))return
if(a.a==="delete"){this.hf(s)
return}this.ef(r,new A.cl(r,B.Y,s))},
hf(a){return this.tA(a)},
tA(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hf=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.c.C(n.CW,j)){s=1
break}m=null
p=4
l=n.y
l===$&&A.x()
s=7
return A.a(l.bO(a.a),$async$hf)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.C(i)
if(l instanceof A.cq){n.ef(j,new A.cl(j,B.az,null))
s=1
break}else if(l instanceof A.bm){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.ef(j,new A.cl(j,B.az,null))
s=1
break}n.ef(j,new A.cl(j,B.Y,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hf,r)},
ef(a,b){var s,r,q=this
q.ch.j(0,a,b)
s=q.ay
r=s.h(0,a)
if(r!=null)r.B()
s.j(0,a,A.cv(q.c,new A.r7(q,a)))},
x5(a,b){return this.i7(null,a,null,b,null)},
i7(a,b,c,d,e){return this.x8(a,b,c,d,e)},
x7(a,b){return this.i7(null,a,null,null,b)},
x8(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$i7=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.c6(0,new A.r8(),t.N,t.co)
n=p.y
n===$&&A.x()
q=n.i6(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)}}
A.r7.prototype={
$0(){var s,r=this.a,q=this.b
r.ay.E(0,q)
s=r.ch.E(0,q)
if(s!=null&&(r.ax.c&4)===0)r.ax.u(0,s)},
$S:0}
A.r8.prototype={
$2(a,b){return new A.S(a,new A.d6("imgs+",b.a,b.b,b.c),t.ia)},
$S:77}
A.rr.prototype={}
A.rb.prototype={
eO(a,b,c,d,e,f){return this.w_(a,b,c,d,e,f)},
w_(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$eO=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.J5(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.z(c,"'","\\'")+"'")}n=t.N
n=A.D(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.b.i5(B.b.cT(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.c.J(b,","))
k=p.b.bn("/api/collections/data/records").k7(n)
s=3
return A.a(p.lD("GET",k),$async$eO)
case 3:j=a0
p.cJ(j,A.l([200],t.t),k)
i=p.cI(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bi("List response has no items array."))
h=J.aL(i,new A.ri(p),t.Q)
h=A.P(h,h.$ti.i("V.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eO,r)},
bO(a){return this.nA(a)},
nA(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bn("/api/collections/data/records/"+A.fL(2,a,B.k,!1))
s=3
return A.a(p.lD("GET",o),$async$bO)
case 3:n=c
if(n.a===404)throw A.b(A.EX("not found"))
p.cJ(n,A.l([200],t.t),o)
q=p.dA(p.cI(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bO,r)},
ht(a,b,c){return this.ug(a,b,c)},
ug(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$ht=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bn("/api/collections/data/records")
s=3
return A.a(p.ev("POST",o,B.h.a7(A.n(["id",b,"store",c,"data",B.h.aA(a,null)],t.N,t.z),null)),$async$ht)
case 3:n=e
if(n.a===400&&p.r2(n))throw A.b(new A.eN(p.eg(n)))
p.cJ(n,A.l([200,201],t.t),o)
q=p.dA(p.cI(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
r2(a){var s,r,q,p,o,n
try{s=this.cI(a)
r=J.T(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.t(p,"validation_not_unique")||J.t(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
f7(a,b,c){return this.x4(a,b,c)},
x4(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$f7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bn("/api/collections/data/records/"+A.fL(2,c,B.k,!1))
s=3
return A.a(p.ev("PATCH",o,B.h.a7(A.n(["data",B.h.aA(b,null)],t.N,t.z),null)),$async$f7)
case 3:n=e
p.cJ(n,A.l([200],t.t),o)
q=p.dA(p.cI(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f7,r)},
i6(a,b,c,d,e){return this.x6(a,b,c,d,e)},
x6(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$i6=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bn("/api/collections/data/records/"+A.fL(2,b,B.k,!1))
m=t.N
l=A.D(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a7(d,null))
if(e==null)m=null
else{m=A.m(e).i("av<2>")
m=A.P(new A.av(e,m),m.i("o.E"))}s=3
return A.a(p.te(new A.kc("PATCH",n,B.ak,l,m==null?B.cc:m)),$async$i6)
case 3:o=g
p.cJ(o,A.l([200],t.t),n)
q=p.dA(p.cI(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i6,r)},
hy(a,b,c){return this.uV(a,b,c)},
uV(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hy=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.D(l,l)
o=p.b.bn("/api/files/data/"+A.fL(2,b,B.k,!1)+"/"+A.fL(2,a,B.k,!1))
n=l.a===0?o:o.k7(l)
s=3
return A.a(p.rt(new A.dW("GET",n,B.ak,null)),$async$hy)
case 3:m=e
p.cJ(new A.co(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
eY(a){return this.wp(a)},
wp(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eY=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bn("/api/batch")
a3=A.l([],t.ic)
for(o=J.aA(a4),n=o.gt(a4),m=t.N,l=t.z,k=t.K;n.m();){j=n.gn()
a3.push(A.n(["method","PUT","url","/api/collections/data/records","body",A.n(["id",j.c,"store",j.b,"data",B.h.aA(j.d,null)],m,l)],m,k))}s=3
return A.a(p.ev("POST",a2,B.h.a7(A.n(["requests",a3],m,t.ew),null)),$async$eY)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.Em(p.eg(i)))
if(a3===400)throw A.b(new A.dI(p.eg(i)))
p.cJ(i,A.l([200],t.t),a2)
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
l=a0&&n.b(a1)?p.dA(a1):null
k=a0?null:p.p0(b)
j=a0&&n.b(a1)?B.h.a7(a1.h(0,"data"),null):null
d.push(new A.i0(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eY,r)},
hZ(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$hZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ev("POST",p.b.bn("/api/batch"),B.h.a7(A.n(["requests",[]],t.N,t.W),null)),$async$hZ)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.DT(p.eg(o)))
if(n===408||n===429||n>=500)throw A.b(A.AX("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hZ,r)},
ev(a,b,c){return this.bV(new A.re(this,a,b,c),new A.rf(),t.w)},
lD(a,b){return this.ev(a,b,null)},
te(a){return this.bV(new A.rg(this,a),new A.rh(),t.w)},
rt(a){return this.bV(new A.rc(this,a),new A.rd(),t.lI)},
bV(a,b,c){return this.tC(a,b,c,c)},
tC(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bV=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.d8(),$async$bV)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$bV)
case 8:l=f
s=J.t(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.i2(),$async$bV)
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
throw A.b(A.AX(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bV,r)},
jf(a,b,c,d){return this.tc(a,b,c,d)},
tc(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jf=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.D(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b0(new A.dW(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jf,r)},
cJ(a,b,c){if(B.c.C(b,a.a))return
throw A.b(this.r5(a,c))},
r5(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eg(a)
if(401===s)return new A.bP(q)
if(403===s)return new A.cn(q)
if(404===s)return new A.cq(q)
if(408===s||429===s)return new A.ea(r,q)
if(400===s)return new A.f2(q)
if(s>=500)return new A.i8(q)
return new A.f3("Unexpected status "+s+" for "+b.k(0)+": "+q)},
eg(a){var s,r,q,p,o
try{s=this.cI(a)
r=J.T(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.T(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.h.a7(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.q(p,0,500)},
cI(a){var s,r,q,p=null
try{p=B.h.aA(a.c,null)}catch(r){q=A.C(r)
if(t.Y.b(q)){s=q
throw A.b(A.bi("Response is not valid JSON: "+s.gjT()))}else throw r}if(t.f.b(p))return A.b_(p,t.N,t.X)
throw A.b(A.bi("Expected a JSON object, got "+J.bq(p).k(0)+"."))},
dA(a){var s,r,q,p,o,n,m,l,k,j=t.f
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
if(t.j.b(k)){j=J.zY(k,n)
j=A.P(j,j.$ti.i("o.E"))}else j=B.q
return new A.cs(s,p,q,l,j)},
p0(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.ri.prototype={
$1(a){return this.a.dA(a)},
$S:78}
A.re.prototype={
$1(a){var s=this
return s.a.jf(s.b,s.c,s.d,a)},
$S:51}
A.rf.prototype={
$1(a){return a.a},
$S:52}
A.rg.prototype={
$1(a){var s=this.b,r=t.N
r=A.dZ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.de(new A.kc(s.a,s.b,r,s.d,s.e))},
$S:51}
A.rh.prototype={
$1(a){return a.a},
$S:52}
A.rc.prototype={
$1(a){var s=this.b,r=t.N
r=A.dZ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.e0(new A.dW(s.a,s.b,r,s.d))},
$S:81}
A.rd.prototype={
$1(a){return a.a},
$S:82}
A.hW.prototype={}
A.fF.prototype={}
A.rj.prototype={
av(){var s=0,r=A.h(t.H),q,p=this
var $async$av=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eu()
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
eu(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eu=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.cF(),$async$eu)
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
return A.a(A.Es(n.$1(k),m),$async$eu)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eu,r)},
cF(){return this.oM()},
oM(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.d8(),$async$cF)
case 3:m=b
l=t.N
s=4
return A.a(n.a.e0(new A.dW("GET",n.b.bn("/api/realtime"),A.n(["Authorization","Bearer "+m.a],l,l),null)),$async$cF)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.hu("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aW(new A.rm()).B(),$async$cF)
case 7:s=1
break
case 6:++p.as
p.z=new A.aC(new A.q($.u,t.D),t.h)
n=$.n9()
l=A.l([],t.s)
o.a=o.b=!1
p.y=k.c.bI(new A.rn(o,p,new A.wB(new A.vs(n),l),m),new A.ro(p),new A.rp(p))
s=8
return A.a(p.z.a,$async$cF)
case 8:p.y=null
if(o.a)throw A.b(A.hu("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cF,r)},
fK(a,b){return this.pZ(a,b)},
pZ(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$fK=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b0(new A.dW("POST",l.b.bn("/api/realtime"),A.n(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a7(A.n(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$fK)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.hu("realtime subscribe status "+l,null))
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
if(t.j.b(f)){c=J.zY(f,t.N)
c=A.P(c,c.$ti.i("o.E"))}else c=B.q
m=new A.cs(k,e,d,l,c)
p.w.$1(new A.hW(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$fK,r)}}
A.rq.prototype={
$1(a){var s,r,q,p,o=a<1?1:a,n=this.a.a
if(n<0)n=0
s=this.b.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.cE(B.t.mO(r*J.zV(this.c.$1(o),0.5,1.5)),0,0)},
$S:83}
A.rm.prototype={
$1(a){},
$S:25}
A.rn.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.vc(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.A)(k),++n){m=k[n]
r.Q=r.Q.aO(new A.rk(q,r,m,p),o).m4(new A.rl())}},
$S:25}
A.rk.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=n.a
if(k.a){s=1
break}p=4
s=7
return A.a(n.b.fK(n.c,n.d),$async$$1)
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
A.rl.prototype={
$1(a){},
$S:37}
A.ro.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.ap()},
$S:0}
A.rp.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.ap()},
$S:37}
A.wB.prototype={
vc(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.k9()
r=A.l([],t.bi)
for(q=s.length,p=0;;){o=this.r_(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.d0(p,o,q)))
p=o+1
m=this.oS(B.a.wY(new A.cZ(!0).cG(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.e.b1(s,p))
return r},
r_(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
pe(){var s,r,q,p,o,n,m=this,l=null,k=m.c
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
oS(a){var s,r=this,q=null
if(a.length===0)return r.pe()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.c.ah(r.c)
return new A.fF(B.a.d9(B.a.ag(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.d9(B.a.ag(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.d9(B.a.ag(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.dW.prototype={}
A.d6.prototype={
nT(){return this.d.$0()},
gl(a){return this.c}}
A.kc.prototype={}
A.co.prototype={}
A.d7.prototype={
k(a){return"HttpTransportException: "+this.a},
$iJ:1}
A.dk.prototype={}
A.r9.prototype={
b0(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.e0(a),$async$b0)
case 7:m=c
j=m.c
s=8
return A.a(B.aw.ky(j).dV(0).i4(B.a1),$async$b0)
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
j=A.hu("HTTP "+a.a+" "+a.b.k(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b0,r)},
de(a){return this.nI(a)},
nI(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$de=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.ET(a6.a,a6.b)
h.r.F(0,a6.c)
h.x.F(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.nT(),$async$de)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.CY(a0)
a3=new A.eW("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cx(A.D(d,d),e))
b.push(new A.kB(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.A)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b0(m).i4(B.a1),$async$de)
case 11:k=a8
g=k.w
s=12
return A.a(B.aw.ky(g).dV(0).i4(B.a1),$async$de)
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
g=A.hu("HTTP multipart "+a6.a+" "+a6.b.k(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$de,r)},
e0(a){return this.wi(a)},
wi(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$e0=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.Fc(a,a0)
a1.r.F(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjC().jA(j)
i.oD()
i.y=A.J9(j)
h=i.gcd()
if(h==null){j=t.N
i.scd(A.yM("text","plain",A.n(["charset",i.gjC().gb7()],j,j)))}else{j=i.gcd()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.bY(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.G("charset")){j=t.N
f=A.n(["charset",i.gjC().gb7()],j,j)
e=h.a
d=h.b
c=A.b_(h.c,j,j)
c.F(0,f)
i.scd(A.yM(e,d,c))}}}p=4
s=7
return A.a(n.a.b0(a1).i4(B.a1),$async$e0)
case 7:m=a5
j=t.N
l=A.D(j,j)
m.e.a2(0,new A.ra(l))
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
a=A.hu("HTTP "+a+" "+a0.k(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e0,r)}}
A.ra.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:29}
A.nf.prototype={
aZ(a,b){var s=this.a.aO(new A.ng(a,b),b)
this.a=s.bu(new A.nh(b),new A.ni(),t.H)
return s}}
A.ng.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.nh.prototype={
$1(a){},
$S(){return this.a.i("R(0)")}}
A.ni.prototype={
$2(a,b){},
$S:10}
A.br.prototype={
gmJ(){var s=this.e
return s.gl(s)===1&&J.t(s.h(0,"__lp_deleted__"),!0)}}
A.o8.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.M(d)
s=e.h(0,"record_id")
s.toString
A.M(s)
r=A.xB(e.h(0,l),l,k)
q=A.xB(e.h(0,j),j,k)
p=A.xB(e.h(0,i),i,k)
o=A.Cy(e.h(0,h),h,k)
n=A.Cy(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ah(m)
return new A.br(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.xB(e.h(0,f),f,k):null)},
$S:85}
A.o9.prototype={
eN(a){return this.vZ(a)},
vZ(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$eN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.b.wr("lp_conflicts","detected_at ASC",n,o),$async$eN)
case 3:o=m.aL(c,A.Ig(),t.n8)
o=A.P(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eN,r)},
dd(a,b){return this.nz(a,b)},
nz(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dd)
case 3:o=d
n=J.K(o)
if(n.gA(o)){q=null
s=1
break}q=A.ys(n.gD(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
xa(a){var s={},r=A.zc()
s.a=null
r.sml(A.ed(new A.oc(s,r),new A.od(s,this,a,new A.oe(this,r,a)),t.ba))
return r.bi().gcD()},
e5(a,b,c){return this.wO(a,b,c)},
wO(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$e5=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.ae(c)
s=2
return A.a(p.Z(new A.oa(q,c,a,o.a,o,b),t.P),$async$e5)
case 2:return A.e(null,r)}})
return A.f($async$e5,r)},
ez(a,b){return this.tL(a,b)},
tL(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dd(a,b),$async$ez)
case 2:p=d
if(p==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=3
return A.a(q.e5(b,p.d,a),$async$ez)
case 3:return A.e(null,r)}})
return A.f($async$ez,r)},
dI(a,b){return this.tM(a,b)},
tM(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$dI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dd(a,b),$async$dI)
case 3:n=d
if(n==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=n.gmJ()?4:5
break
case 4:o=p.a
if(A.ln(o)!=null)A.v(A.w(u.L))
s=6
return A.a(new A.dO(o,o.ae(a),null,null).k_(b),$async$dI)
case 6:s=1
break
case 5:s=7
return A.a(p.e5(b,n.e,a),$async$dI)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dI,r)}}
A.oe.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bi().ghO()){s=1
break}p=4
s=7
return A.a(n.a.eN(n.c),$async$$0)
case 7:m=b
if(!i.bi().ghO())J.bp(i.bi(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.C(h)
k=A.a7(h)
if(!i.bi().ghO())i.bi().bG(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.od.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b3(p,A.m(p).i("b3<1>")).aW(new A.ob(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.ob.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:41}
A.oc.prototype={
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
A.oa.prototype={
$1(a){return this.n0(a)},
n0(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.K(a3)
if(a4.gA(a3))throw A.b(A.w("No conflict found for "+a1+"/"+a2))
o=A.ys(a4.gD(a3))
n=o.gmJ()
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
return A.a(a0.aC(0,"lp_outbox",A.Ia(l,j,b,e,h,a4.kn(),c,a2,a1,b)),$async$$1)
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
return A.a(l.hX(),$async$av)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.x()
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
n.fr=new A.b3(l,A.m(l).i("b3<1>")).aW(n.gvA())
l=n.b.ax
n.fx=new A.b3(l,A.m(l).i("b3<1>")).aW(n.gvy())
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
case 12:n.fy=A.AU(B.aM,new A.ty(n))
s=14
return A.a(n.aJ(n.dn()),$async$av)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.cO(),$async$av)
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
dn(){if(this.at)return B.ba
if(this.Q)return B.b8
if(this.as)return B.an
return B.b9},
aJ(a){return this.ts(a)},
ts(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.oY(),$async$aJ)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aJ,r)},
oY(){return this.p2=this.p2.aO(new A.tq(this),t.H)},
fo(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fo=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.hr(),$async$fo)
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
return A.f($async$fo,r)},
vB(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.ta(B.a2)},
vz(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.ch.G(s))return
r=a.c
if(r!=null&&a.b===B.Y){q.p1.push("fast:"+s)
q.dx=q.dx.aO(new A.tw(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hd(B.a2,A.l([s],t.s))},
ft(a){return this.pa(a)},
pa(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$ft=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hd(B.a2,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.x()
s=7
return A.a(l.hz(a),$async$ft)
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
break}if(!m)n.hd(B.a2,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ft,r)},
vJ(){if(!this.z)return
this.p1.push("cycle")
this.cO()},
hd(a,b){var s=this,r=s.go
if(r!=null)r.B()
if(b==null)s.k2=!0
else s.k3.F(0,b)
s.go=A.cv(a,new A.tv(s))},
ta(a){return this.hd(a,null)},
t9(a){var s=this.id
if(s!=null)s.B()
this.id=A.cv(B.A,new A.tu(this,a))},
j5(){this.as=!0
this.aJ(B.an)
A.hs(this.d,t.H)},
dY(){var s=0,r=A.h(t.H),q,p=this,o
var $async$dY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.as
o===$&&A.x()
s=3
return A.a(o.wM(),$async$dY)
case 3:s=4
return A.a(p.aJ(p.dn()),$async$dY)
case 4:p.p1.push("cycle")
s=5
return A.a(p.cO(),$async$dY)
case 5:case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
fi(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.H),q=this,p
var $async$fi=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.B()
q.k1=A.cv(B.aJ,new A.tx(q))
s=3
break
case 4:s=5
return A.a(q.aJ(B.b8),$async$fi)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fi,r)},
bm(){var s=0,r=A.h(t.H),q=this
var $async$bm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aJ(B.ba),$async$bm)
case 2:return A.e(null,r)}})
return A.f($async$bm,r)},
b9(){var s=0,r=A.h(t.H),q,p=this
var $async$b9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aJ(p.dn()),$async$b9)
case 3:p.p1.push("cycle")
s=4
return A.a(p.cO(),$async$b9)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b9,r)},
jd(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.B()}s=t.mv
r=q.k4.aO(new A.tr(q,a),s)
q.k4=r.bu(new A.ts(),new A.tt(),s)
return r},
cO(){return this.jd(null)},
b2(a){return this.oV(a)},
oV(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b2=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.K
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aJ(n.dn()),$async$b2)
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
return A.a(a5.d2(h),$async$b2)
case 14:g=c0
J.bN(m,h,g.b)
if(g.f&&g.b>0)J.bp(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.C(b4)
if(a5 instanceof A.bP){n.j5()
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
return A.a(b3.dj(e),$async$b2)
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
return A.a(b3.eZ(),$async$b2)
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
if(b3 instanceof A.bP)n.j5()
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
break}if(J.ao(i)!==0)n.t9(i)
a9=k||a.f
b0=new A.aN(A.oX(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dn()
s=42
return A.a(n.aJ(a9&&b1===B.b9?B.cN:b1),$async$b2)
case 42:q=n.ok=new A.b9(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b2,r)}}
A.ty.prototype={
$1(a){return this.a.vJ()},
$S:53}
A.tq.prototype={
$1(a){return this.a.fo()},
$S:28}
A.tw.prototype={
$1(a){return this.a.ft(this.b)},
$S:28}
A.tv.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.P(q,A.m(q).c)
s.k2=!1
q.ah(0)
if(r||p.length===0)s.cO()
else s.jd(p)},
$S:0}
A.tu.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jd(this.b)},
$S:0}
A.tx.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aJ(p.dn()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.cO(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tr.prototype={
$1(a){return this.a.b2(this.b)},
$S:88}
A.ts.prototype={
$1(a){return B.K},
$S:89}
A.tt.prototype={
$1(a){return B.K},
$S:90}
A.cI.prototype={
k(a){return"MapFailure: "+this.a},
$iJ:1}
A.e6.prototype={}
A.xx.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.xy.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qz.prototype={}
A.de.prototype={}
A.kw.prototype={}
A.wp.prototype={}
A.wn.prototype={}
A.uJ.prototype={}
A.qG.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.qF(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:92}
A.qA.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qB.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qC.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.qD.prototype={
$1(a){return a instanceof A.q?a:A.c6(a,t.X)},
$S:93}
A.qE.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.fA(s,s.r,A.m(s).c),r=this.b,q=J.K(a),p=s.$ti.c,o=0;s.m();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:94}
A.qV.prototype={
eD(a){return this.uW(a)},
uW(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$eD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.Q.$0()
e=e.b
s=3
return A.a(e.wt("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$eD)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.I(o);l.m();)m.push(A.EY(l.gn()))
l=A.aS(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.A)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.jm(e,l),$async$eD)
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
return A.f($async$eD,r)},
mz(a){return this.a.Z(new A.qX(a),t.H)},
w7(a,b,c,d){return this.a.Z(new A.qY(c,d,b,a),t.H)}}
A.qX.prototype={
$1(a){return this.nc(a)},
nc(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.n(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.qY.prototype={
$1(a){return this.nd(a)},
nd(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.n(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.nt.prototype={}
A.hH.prototype={}
A.i1.prototype={}
A.r_.prototype={
kn(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cs(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
e4(a,b,c){return this.wB(a,b,c)},
wB(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$e4=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$e4)
case 3:p=e
o=J.K(p)
q=o.gA(p)?null:A.r0(o.gD(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e4,r)},
bL(a,b,c){return this.wD(a,b,c)},
wD(a,b,c){var s=0,r=A.h(t.f8),q,p,o
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
bj(a,b,c,d,e,f,g,h,i,j,k,l){return this.tW(a,b,c,d,e,f,g,h,i,j,k,l)},
tW(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$bj=A.c(function(b8,b9){if(b8===1)return A.d(b9,r)
for(;;)switch(s){case 0:a2=b7.a
a3=a2.a
a4=b6==null
a5=!a4
if(a5&&b6.w===B.U)throw A.b(A.Ab("Record "+a3+"/"+b0+u.W))
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
return A.a(p.he(a9,a3,b0),$async$bj)
case 7:s=8
return A.a(a9.a6(a3,"id = ?",[b0]),$async$bj)
case 8:q=B.bu
s=1
break
case 4:k=p.a.Q.$0()
j=a5?null:b3.w
if(j==null)j=p.kn()
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
case 9:f=A.CS(B.aU)
e=B.c.J(A.aG(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a9.aB("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.CM(h,i,c,null,b,n,j,b4,b0,a3,k)),$async$bj)
case 12:s=10
break
case 11:s=13
return A.a(a9.aB('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b4,b,k,a3,b0]),$async$bj)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a5)B.c.F(f,B.ca)
if(o)B.c.F(f,B.c_)
s=a4?14:16
break
case 14:a4=A.CS(B.c3)
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
case 18:case 15:q=new A.hH()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bj,r)},
he(a,b,c){return this.tz(a,b,c)},
tz(a,b,c){var s=0,r=A.h(t.H)
var $async$he=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.ck(a,b,c,!1),$async$he)
case 2:return A.e(null,r)}})
return A.f($async$he,r)},
eE(a,b){return this.uX(a,b)},
uX(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.b
f=new A.ab("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").k(0)
e=A.P([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ai("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$eE)
case 3:o=d
f=J.K(o)
if(f.gA(o)){q=B.ce
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.m();)n.push(A.r0(f.gn()))
f=A.aS(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.A)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.jm(g,f),$async$eE)
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
return A.f($async$eE,r)},
kr(a){if(a.length===0)return A.c6(null,t.H)
return this.a.Z(new A.r6(this,a),t.H)},
aF(a,b){return this.ti(a,b)},
ti(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return A.a(p.cM(b,a0,a1,a7.c,a4),$async$aF)
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
return A.a(p.cM(b,a0,a1,a7.c,a4),$async$aF)
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
return A.a(p.cM(b,a0,a1,a7.c,a4),$async$aF)
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
cM(a,b,c,d,e){return this.r6(a,b,c,d,e)},
r6(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$cM=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.n(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$cM)
case 2:s=3
return A.a(a.L(q.a.ae(b).a.a,A.n(["hidden",0],p,o),"id = ?",[c]),$async$cM)
case 3:return A.e(null,r)}})
return A.f($async$cM,r)},
wE(a,b,c,d,e){return this.a.Z(new A.r4(c,e,d,B.ac,a,b),t.H)},
my(a,b,c,d,e,f){return this.a.Z(new A.r3(this,c,f,b,a,d,e),t.H)},
eP(a,b,c,d,e){return this.my(a,b,c,d,B.ad,e)},
mx(a,b,c){return this.a.Z(new A.r2(a,c,b),t.H)},
wM(){return this.a.Z(new A.r5(null),t.S)},
eA(a,b,c,d,e,f,g){return this.tT(a,b,c,d,e,f,g)},
tT(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eA=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.n(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eA)
case 2:p=A.D(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eA)
case 3:return A.e(null,r)}})
return A.f($async$eA,r)}}
A.r6.prototype={
$1(a){return this.ni(a)},
ni(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.r4.prototype={
$1(a){return this.ng(a)},
ng(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.n(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r3.prototype={
$1(a){return this.nf(a)},
nf(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.r2.prototype={
$1(a){return this.ne(a)},
ne(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.n(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r5.prototype={
$1(a){return this.nh(a)},
nh(a){var s=0,r=A.h(t.S),q,p
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
A.rE.prototype={
d2(a){return this.wo(a)},
wo(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$d2=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.i0(b4),$async$d2)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Dx().dR(n)
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
k=A.yu(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.rv(k))A.v(A.bi('Bad timestamp "'+n+'"'))
o=A.Iu(A.yu(j,i,h,g,f,e,d).iu(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.b.i5(B.b.cT(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.e,k=k.ch,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.y
a4===$&&A.x()
s=6
return A.a(a4.eO(b4,null,a2,o,null,b),$async$d2)
case 6:a5=b6
a4=J.K(a5)
if(a4.gA(a5)){s=5
break}++a.ax
a6=p.r8(a5)
a7=k.h(0,b4)
if(a7==null)A.v(A.w(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.zE(a7.a,a5),$async$d2)
case 8:s=7
return A.a(b0.aZ(new b1.rM(b2,p,b3,b6,a6),l),$async$d2)
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
return A.f($async$d2,r)},
lN(a,b){var s=B.a.X(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.X(a.a,b.b)<=0},
tt(a,b){var s=B.a.X(a.c,b.c)
if(s!==0)return s>0
return B.a.X(a.a,b.a)>0},
r8(a){var s,r,q,p=J.aA(a),o=p.gD(a)
for(p=p.bd(a,1),s=p.$ti,p=new A.ae(p,p.gl(0),s.i("ae<V.E>")),s=s.i("V.E");p.m();){r=p.d
q=r==null?s.a(r):r
if(this.tt(q,o))o=q}return o},
hz(a){return this.vb(a)},
vb(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aZ(new A.rG(o,p,a),t.P),$async$hz)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
cX(a,b){return this.vd(a,b)},
vd(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$cX=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.eU(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.ch,e=n.b,d=A.a6(j),c=d.c,d=d.i("ce<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ce(j,0,200,d)
a2.ip(j,0,200,c)
a3=a2.e8(0)
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
a7=e.y
a7===$&&A.x()
s=12
return A.a(a7.bO(l),$async$cX)
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
return A.a(n.eR(b2,m),$async$cX)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.v(A.w(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.A)(a5),++a6)a2.push(A.zF(b0,a5[a6]))
s=16
return A.a(i.aZ(new A.rI(n,a2,b2,b0),h),$async$cX)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cX,r)},
dC(a,b,c,d){return this.rD(a,b,c,d)},
rD(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dC=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.D(c,t.nw)
a=A.D(c,t.G)
o=p.a,n=o.y,m=o.z,o=o.ch,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.c.U(a4,k,B.b.cT(i,0,j))
g=B.c.J(A.aG(h.length,"?",!1,c),", ")
j=[a2]
B.c.F(j,h)
a0=J
s=6
return A.a(a1.ai(u.m+g+")",j),$async$dC)
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
return A.a(a1.e1(d.a.a,"id IN ("+g+")",h),$async$dC)
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
return A.f($async$dC,r)},
lX(a,b,c,d,e){return this.a1(a,b,A.zF(this.a.ae(b).a,c),null,!1,d,e)},
tY(a,b,c){return this.lX(a,b,c,null,!1)},
a1(a,b,c,d,e,f,g){return this.tX(a,b,c,d,e,f,g)},
lW(a,b,c){return this.a1(a,b,c,null,!1,null,!1)},
tX(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
f=$.yl()
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
return A.a(n.e.d1(a4,a8.a,a8.e,b2),$async$a1)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.DL(a4,a6.a,A.dD(a7,J.t(a9.h(0,"archived"),!0),a5.y,a5.z,i,a9)),$async$a1)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.cQ(a4,b2,i,n.c.ay.$0(),m,a5,B.w,!0),$async$a1)
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
return A.a(n.cQ(a4,b2,i,n.c.ay.$0(),m,a5,B.w,!0),$async$a1)
case 33:b1.a_(new A.a1(b2,A.ai([a8.a],t.N)))
b=A.bx(d,a9)
b.E(0,"id")
b1.bs(new A.aV(b2,a8.a,B.ag,B.x,d,a9,b))
q=B.V
s=1
break
case 28:s=a===B.ac||a===B.bb||a===B.U?34:35
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
return A.a(n.cQ(a4,b2,a5,n.c.ay.$0(),m,a9,B.w,!0),$async$a1)
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
a9=A.CK(l,a0,new A.kw(null,B.aW,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bd(a9,t.r),$async$a1)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.er(a4,b2,a8,a7,m,a0,l,a2),$async$a1)
case 57:s=58
return A.a(n.bU(b1,b2,a8.a,a8.c,!1),$async$a1)
case 58:a5=t.N
b1.a_(new A.a1(b2,A.ai([a8.a],a5)))
b1.a_(new A.a1("lp_conflicts",A.ai([a8.a],a5)))
q=B.bf
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dD(a7,J.t(a3.h(0,"archived"),!0),a5.y,a5.z,a9,a3),"id = ?",[a8.a]),$async$a1)
case 59:a5=a5.as
a5===$&&A.x()
s=60
return A.a(a5.eA(a4,b2,a8.a,h,i,a8.c,A.aj(a3)),$async$a1)
case 60:s=61
return A.a(n.tq(b1,b2,a8.a,a8.c),$async$a1)
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
er(a,b,c,d,e,f,g,h){return this.rY(a,b,c,d,e,f,g,h)},
rY(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$er=A.c(function(i,a0){if(i===1)return A.d(a0,r)
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
return A.a(a.c2(0,"lp_conflicts",A.n(["store",b,"record_id",k,"base_json",o,"local_json",A.aj(f),"remote_json",A.aj(l),"dirty_local",B.h.a7(j,null),"dirty_remote",B.h.a7(p,null),"detected_at",q.c.ay.$0()],n,m),B.N),$async$er)
case 2:s=3
return A.a(a.L("lp_sync_row",A.n(["sync_state","conflict","base_json",A.aj(l),"base_hash",A.aD(B.l.v(B.f.v(A.aj(A.b6(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$er)
case 3:return A.e(null,r)}})
return A.f($async$er,r)},
bD(a,b,c,d,e){return this.rR(a,b,c,d,e)},
rR(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
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
f=n.$0()+B.b.K(o.mb(g).a,1000)
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
cQ(a,b,c,d,e,f,g,h){return this.ty(a,b,c,d,e,f,g,!0)},
ty(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$cQ=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aC(0,"lp_sync_row",o),$async$cQ)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$cQ)
case 6:case 3:return A.e(null,r)}})
return A.f($async$cQ,r)},
bU(a,b,c,d,e){return this.tr(a,b,c,d,e)},
tq(a,b,c,d){return this.bU(a,b,c,d,!0)},
tr(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
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
eR(a,b){return this.w8(a,b)},
w8(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.eU(b,!0,t.N)
n=A.a6(o),m=n.c,n=n.i("ce<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ce(o,0,500,n)
i.ip(o,0,500,m)
h=i.e8(0)
g=h.length
l&1&&A.E(o,18)
A.b1(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aZ(new A.rK(p,a,h),j),$async$eR)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$eR,r)}}
A.rM.prototype={
$0(){var s=this,r=s.b
return r.a.Z(new A.rL(s.a,r,s.c,s.d,s.e),t.P)},
$S:16}
A.rL.prototype={
$1(a){return this.nn(a)},
nn(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
return A.a(a.dC(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aS(t.N)
a2=o.gt(p),a0=a0.e
case 3:if(!a2.m()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.lN(i,c)){s=3
break}p=i.a
s=j.C(0,p)?5:7
break
case 5:s=8
return A.a(a.lW(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.lN(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.e9(b,a1,e,f),$async$$1)
case 10:d.a=new A.i_(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rG.prototype={
$0(){var s=this.b
return s.a.Z(new A.rF(this.a,s,this.c),t.P)},
$S:16}
A.rF.prototype={
$1(a){return this.nk(a)},
nk(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
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
return A.a(l.tY(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.w){s=1
break}k=m.c
if(k!=null&&B.a.X(o.c,k)<=0){s=1
break}s=7
return A.a(l.lX(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.rI.prototype={
$0(){var s=this,r=s.a
return r.a.Z(new A.rH(r,s.b,s.c,s.d),t.P)},
$S:16}
A.rH.prototype={
$1(a){return this.nl(a)},
nl(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dC(a.b,m,q.d,e),$async$$1)
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
return A.a(o.lW(a,m,h),$async$$1)
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
A.rK.prototype={
$0(){var s=this.a
return s.a.Z(new A.rJ(s,this.b,this.c),t.P)},
$S:16}
A.rJ.prototype={
$1(a){return this.nm(a)},
nm(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
return A.a(i.e1(e,a,d),$async$$1)
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
case 6:a2.a_(new A.a1(g,A.q8(d,A.a6(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.A)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.hF(null,null,c,h)
p.F(0,j)
p.j(0,"hidden",!0)
a2.bs(new A.aV(g,k,B.ag,B.bA,j,p,B.cB))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aU.prototype={}
A.rN.prototype={
eZ(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$eZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.as
f===$&&A.x()
s=3
return A.a(f.eE(25,p.c.ay.$0()),$async$eZ)
case 3:o=b
f=J.K(o)
if(f.gA(o)){q=B.R
s=1
break}if(p.f){q=p.b4(o)
s=1
break}f=f.gt(o),n=B.R
case 4:if(!f.m()){s=5
break}s=6
return A.a(p.dE(f.gn()),$async$eZ)
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
return A.f($async$eZ,r)},
dE(a){return this.rN(a)},
rN(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.as
l===$&&A.x()
m=m.b
s=3
return A.a(l.e4(m,a.a,a.b),$async$dE)
case 3:o=c
if(o==null){q=B.R
s=1
break}s=4
return A.a(l.bL(m,o.a,o.b),$async$dE)
case 4:n=c
if(n==null){q=B.R
s=1
break}if(o.e==null){q=p.rL(o,n)
s=1
break}q=p.j7(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dE,r)},
bA(a,b,c,d,e){return this.qg(a,b,c,d,e)},
qf(a,b,c,d){return this.bA(a,b,c,!1,d)},
qd(a,b,c){return this.bA(a,b,c,!1,!1)},
qe(a,b,c,d){return this.bA(a,b,c,d,!1)},
qg(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
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
return A.a(k.mx("forbidden_push",a.b,a.a),$async$bA)
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
return A.a(n.cH(a,"validation_push",m.a),$async$bA)
case 20:q=B.J
s=1
break
case 19:q=n.cg(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cq){q=n.du(a,b,!e)
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
j6(a,b,c){return this.rM(a,b,c)},
rL(a,b){return this.j6(a,b,!1)},
rM(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$j6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bA(a,b,new A.rP(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j6,r)},
ja(a,b,c){return this.rZ(a,b,c)},
rZ(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$ja=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qf(a,b,new A.rU(p,a,p.a.ae(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ja,r)},
j7(a,b){return this.rO(a,b)},
rO(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$j7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qd(a,b,new A.rS(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j7,r)},
cN(a,b,c,d){return this.rQ(a,b,c,d)},
rP(a,b,c){return this.cN(a,b,c,!1)},
rQ(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$cN=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.kH(a,c)
j=n.a.ae(a.a).a
i=a.d
s=A.aD(B.l.v(B.f.v(A.aj(A.b6(j,A.eC(j,c))))).a)===A.aD(B.l.v(B.f.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.ew(a,c),$async$cN)
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
return A.a(n.cH(a,"corrupt_payload",k.a),$async$cN)
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
return A.a(n.dz(a,b,c,j,m,l),$async$cN)
case 14:g=a0
if(g==null){q=B.b3
s=1
break}q=n.bA(a,b,new A.rQ(n,a,A.aj(A.b6(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cN,r)},
b4(a){return this.rK(a)},
rK(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b4=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.l([],t.k1)
c0=t.N
c1=A.D(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.D(c0,c0)
c0=J.I(d0),d=n.a,c=d.e,b=n.b,a=d.ch,a0=d.b
case 3:if(!c0.m()){s=4
break}a1=c0.gn()
a2=d.as
a2===$&&A.x()
s=5
return A.a(a2.e4(a0,a1.a,a1.b),$async$b4)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bL(a0,m.a,m.b),$async$b4)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.v(A.w('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.y
a5===$&&A.x()
s=11
return A.a(a5.bO(a1),$async$b4)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.C(c8)
s=a1 instanceof A.cq?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.la(m,l),$async$b4)
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
return A.a(a2.mx("forbidden_push",m.b,a1),$async$b4)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bm?25:27
break
case 25:i=a1
s=28
return A.a(n.cg(m,l,i),$async$b4)
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
return A.a(n.ew(m,k),$async$b4)
case 33:++c2
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
c9=o.pop()
a1=A.C(c9)
s=a1 instanceof A.cI?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.eP(e.a,a5,"corrupt_payload",m.d,a1),$async$b4)
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
return A.a(n.dz(m,l,k,a4,g,f),$async$b4)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.ab("")
A.h2(a7,A.b6(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.f4(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.f4(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.bT(B.c.U(b9,b5,b7<b6?b7:b6),c1,c7),$async$b4)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.aU(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.aU(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
dz(a,b,c,d,e,f){return this.r9(a,b,c,d,e,f)},
r9(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dz=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.eC(d,c)
n=A.CK(e,f,new A.kw(null,B.aW,!1),a.b,A.b6(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bd(n,t.r),$async$dz)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.ha(a,b,c,m,e,f),$async$dz)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
bT(a,b,c){return this.td(a,b,c)},
td(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$bT=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.y
a7===$&&A.x()
s=7
return A.a(a7.eY(b9),$async$bT)
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
case 10:a8=n.j0(e,c1.h(0,e.a))
b0=B.f.v(e.d)
b1=new A.eM()
b2=A.mw(b1)
b2.u(0,b0)
b2.p()
b2=A.aD(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.bp(g,new A.i1(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
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
return A.a(a8.eP(b4,b2,b3,e.d,b0),$async$bT)
case 13:++b7
case 11:s=8
break
case 9:l=a7.as
l===$&&A.x()
s=14
return A.a(l.kr(g),$async$bT)
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
return A.a(n.dE(n.lf(a0)),$async$bT)
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
return A.a(n.cg(n.lf(a4),a5,a3),$async$bT)
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
bR(a,b,c){return this.os(a,b,c)},
os(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bR=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.K(b5)
s=b3.gl(b5)===1?3:4
break
case 3:g=b3.gau(b5)
h=n.a.as
h===$&&A.x()
b3=g.b
s=5
return A.a(h.eP("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bR)
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
a6=a3.y
a6===$&&A.x()
s=13
return A.a(a6.eY(j),$async$bR)
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
case 16:a7=n.j0(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dH(a7,a8,a9,b0==null?b.d:b0),$async$bR)
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
return A.a(a7.eP(b1,a9,b0,b.d,a8),$async$bR)
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
j0(a,b){var s=b==null?a.d:b
return new A.cr(a.b,a.c,B.v,s,a.e,A.aD(B.l.v(B.f.v(a.d)).a),B.q,a.a,0,null)},
lf(a){return this.j0(a,null)},
dH(a,b,c,d){return this.th(a,b,c,d)},
ew(a,b){return this.dH(a,b,null,null)},
th(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dH=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.ae(a.a).a
n=A.eC(o,b)
m=d==null
l=m?A.aj(A.b6(o,n)):d
p=p.as
p===$&&A.x()
s=2
return A.a(p.kr(A.l([new A.i1(a,l,b.c,A.aD(B.l.v(B.f.v(m?a.d:d)).a),c)],t.bo)),$async$dH)
case 2:return A.e(null,r)}})
return A.f($async$dH,r)},
kH(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.e2('record id "'+s+'" does not match requested "'+r+'"'))},
cg(a,b,c){return this.t5(a,b,c)},
t5(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.ea?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.as
o===$&&A.x()
s=5
return A.a(o.my(c.a,a.b,"max_attempts",a.d,B.ad,a.a),$async$cg)
case 5:q=B.J
s=1
break
case 4:o=p.c
n=o.mc(l,k)
m=p.a.as
m===$&&A.x()
s=6
return A.a(m.wE(a.a,a.b,l,c.a,o.ay.$0()+B.b.K(n.a,1000)),$async$cg)
case 6:q=B.ab
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cg,r)},
cH(a,b,c){return this.oP(a,b,c)},
oO(a,b){return this.cH(a,b,null)},
oP(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.as
o===$&&A.x()
p=c==null?b:c
s=2
return A.a(o.eP(p,a.b,b,a.d,a.a),$async$cH)
case 2:return A.e(null,r)}})
return A.f($async$cH,r)},
du(a,b,c){return this.q4(a,b,c)},
la(a,b){return this.du(a,b,!0)},
q4(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$du=A.c(function(d,e){if(d===1){o.push(e)
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
return A.a(n.cH(a,"corrupt_payload",k.a),$async$du)
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
return A.a(n.fs(a,b,m,l),$async$du)
case 14:q=B.b3
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$du,r)},
fs(a,b,c,d){return this.p5(a,b,c,d)},
p5(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$fs=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bx(c,d)
n=A.P(o,A.m(o).c)
B.c.aT(n)
p=b.r
if(p==null)p=A.aj(c)
s=2
return A.a(q.a.Z(new A.rO(q,a,p,d,n),t.P),$async$fs)
case 2:return A.e(null,r)}})
return A.f($async$fs,r)},
ha(a,b,c,d,e,f){return this.rX(a,b,c,d,e,f)},
rX(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$ha=A.c(function(g,h){if(g===1)return A.d(h,r)
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
return A.a(o.Z(new A.rT(q,a,b,e,f,m,k,p,n,c),t.P),$async$ha)
case 2:return A.e(null,r)}})
return A.f($async$ha,r)}}
A.rP.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.x()
s=7
return A.a(j.ht(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.ew(k,m),$async$$0)
case 8:q=B.S
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.C(h) instanceof A.eN){q=n.a.ja(n.b,n.c,n.d)
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
A.rU.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.x()
s=3
return A.a(l.bO(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.oO(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.J
s=1
break
case 5:l=p.c
s=A.aD(B.l.v(B.f.v(A.aj(A.b6(l,A.eC(l,o))))).a)===A.aD(B.l.v(B.f.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.ew(m,o),$async$$0)
case 9:q=B.S
s=1
break
case 8:q=n.cN(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.rS.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.x()
s=3
return A.a(l.bO(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.la(m,p.c)
s=1
break}n.kH(m,o)
if(o.c===m.e){l=p.c
q=n.qe(m,l,new A.rR(n,m,o,l),!0)
s=1
break}q=n.rP(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.rR.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.x()
s=7
return A.a(j.f7(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.ew(k,m),$async$$0)
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
A.rQ.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.y
l===$&&A.x()
k=o
j=n
s=4
return A.a(l.f7(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dH(j,b,p.e.a,m),$async$$0)
case 3:q=B.S
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.rO.prototype={
$1(a){return this.no(a)},
no(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
A.rT.prototype={
$1(a){return this.np(a)},
np(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
A.tn.prototype={
gkK(){return 36},
dj(a){return this.o7(a)},
o7(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dj=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.ch,g=new A.bS(g,g.r,g.e,A.m(g).i("bS<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.m()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.i1(m),$async$dj)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gkK():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.b.aj(c.a+1,n.gkK())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.by(m,a),$async$dj)
case 13:a5.bp(a6,a9)
case 11:++j
s=10
break
case 12:s=14
return A.a(h.Z(new A.to(c,n,m,a3),f),$async$dj)
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
return A.f($async$dj,r)},
by(a,b){return this.o6(a,b)},
o6(a4,a5){var s=0,r=A.h(t.eg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$by=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aS(t.N)
m=B.b.i5(B.b.cT(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.y
g===$&&A.x()
s=5
return A.a(g.eO(a4,B.ch,h,null,o,m),$async$by)
case 5:f=a7
g=J.K(f)
if(g.gA(f)){s=4
break}for(e=g.gt(f);e.m();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=g.gt(f);d.m();)e.push(d.gn().a)
s=6
return A.a(p.h9(a4,e),$async$by)
case 6:c=a7
b=A.l([],l)
for(e=g.gt(f);e.m();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.ay||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.cX(a4,b),$async$by)
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
return A.a(j.eR(a4,a2),$async$by)
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
return A.a(j.cX(a4,l),$async$by)
case 17:case 16:q=new A.fe(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$by,r)},
h9(a,b){return this.rF(a,b)},
rF(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$h9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.D(g,t.nw)
o=p.a.b,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.c.U(b,n,B.b.cT(l,0,m))
j=B.c.J(A.aG(k.length,"?",!1,g),", ")
m=[a]
B.c.F(m,k)
e=J
s=6
return A.a(o.ai(u.m+j+")",m),$async$h9)
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
return A.f($async$h9,r)}}
A.to.prototype={
$1(a){return this.nr(a)},
nr(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.ea(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bm.prototype={
k(a){return A.d1(this).k(0)+": "+this.a},
$iJ:1}
A.fh.prototype={}
A.ea.prototype={}
A.i8.prototype={}
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
A.i0.prototype={}
A.jB.prototype={
ab(){return"BackendHintKind."+this.b}}
A.cl.prototype={}
A.xN.prototype={
$2(a,b){return B.a.hW(B.b.k(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:98}
A.tp.prototype={
mc(a,b){var s,r,q,p,o,n
if(b!=null){s=this.rv(b)
if(A.aE(s))return A.cE(0,0,s<0?0:s)
if(s instanceof A.aN){r=s.a-this.ay.$0()
return r<=0?B.A:A.cE(0,r,0)}return B.aJ}q=a<1?1:a
p=1e6
o=1
for(;;){if(!(o<q&&p<3e8))break
n=p*2
p=n>3e8?3e8:n;++o}return A.cE(B.t.mO(p*J.zV(this.at.$1(q),0.5,1.5)),0,0)},
mb(a){return this.mc(a,null)},
rv(a){var s=B.a.d9(a),r=A.hY(s,null)
if(r!=null)return r
return A.Fs(s)}}
A.i_.prototype={}
A.ih.prototype={}
A.tA.prototype={
i0(a){return this.wA(a)},
wA(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$i0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.e2("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$i0)
case 3:m=c
l=J.K(m)
if(l.gA(m)){q=null
s=1
break}o=A.aa(J.T(l.gD(m),"cursor_updated"))
n=A.aa(J.T(l.gD(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.i_(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
e9(a,b,c,d){return this.xe(a,b,c,d)},
xe(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$e9=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$e9)
case 5:s=m.bO(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.n(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$e9)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.n(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$e9)
case 7:case 3:return A.e(null,r)}})
return A.f($async$e9,r)},
i1(a){return this.wC(a)},
wC(a){var s=0,r=A.h(t.k5),q,p=this,o,n,m
var $async$i1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.e2("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$i1)
case 3:n=c
m=J.K(n)
if(m.gA(n)){q=B.cI
s=1
break}o=A.b4(J.T(m.gD(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.ih(o,A.b4(J.T(m.gD(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
ea(a,b,c,d){return this.xi(a,b,c,d)},
xi(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ea=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ea)
case 5:s=m.bO(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.n(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$ea)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.n(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$ea)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ea,r)},
hr(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hr=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aX("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hr)
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
return A.f($async$hr,r)}}
A.cu.prototype={
ab(){return"SyncState."+this.b}}
A.h4.prototype={
ab(){return"AccessState."+this.b}}
A.f1.prototype={
ab(){return"OutboxKind."+this.b}}
A.hU.prototype={
ab(){return"OpQueueKind."+this.b}}
A.y7.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.ct.prototype={}
A.tz.prototype={
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
A.Cx(j.h(0,"dirty_fields"))
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
A.r1.prototype={
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
n=A.Cx(j.h(0,"dirty_fields"))
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
A.qW.prototype={
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
A.y5.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.M(s)},
$S:54}
A.y6.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.M(s)},
$S:54}
A.tF.prototype={}
A.jQ.prototype={
ks(a){return a.a===this.w.a},
c_(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c_=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
b=A
a=p.w
s=3
return A.a(e.mT(p.x,p.y),$async$c_)
case 3:d=b.Cw(a,a1,e.y,e.z)
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
js(a){return A.If(a,new A.nX(this),!1)},
mB(a){return this.as.$1(a)},
jV(a,b){return null}}
A.nX.prototype={
$1(a){return this.a.a.e.Q+=a},
$S:8}
A.q9.prototype={
cq(a,b){return this.vr(a,b)},
vr(a,b){var s=0,r=A.h(t.X),q,p
var $async$cq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.eB(A.n(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cq,r)},
hV(a,b,c,d){return this.wh(a,b,c,d)},
wh(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$hV=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.wd(a6,a7)
a=t.N
a0=new A.k2(A.D(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.aa(A.CT(a2?null:A.n3(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.qa(a3)
a0.e=new A.qb(a3)
p=4
b.H("PRAGMA journal_mode=TRUNCATE")
f=b.fg("PRAGMA journal_mode")
n=f.gD(f).b[0]
if(J.ap(n).toLowerCase()!=="truncate"){a=A.w("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.IT(a2?null:A.n3(a8))
e=t.bE.a(J.T(m,"stores"))
l=e==null?A.l([],t.aw):e
d=A.b4(J.T(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.BN(J.T(m,"destructiveBackup"))
j=f!==!1
i=A.IS(A.CT(a2?null:A.n3(a8),"fieldCipher"))
if(A.Iz(l,i)){a=A.aJ("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.u2(A.D(a,t.p))
s=7
return A.a(A.cH(h,a0,j,i,k,a6,B.cw,l),$async$hV)
case 7:g=b0
a1=!0
a=b
a2=t.S
q=new A.kt(a,new A.ud(a,g,A.D(a2,t.oS),new A.tJ(A.IL(),A.D(a2,t.oc)),A.aS(t.be)))
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
return A.f($async$hV,r)}}
A.qa.prototype={
$1(a){return A.mY(this.a,a)},
$S:103}
A.qb.prototype={
$1(a){return A.mZ(this.a,a)},
$S:104}
A.kt.prototype={
cq(a,b){return this.vs(a,b)},
vs(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.yL(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.EH(n)
if(o==null){q=A.yL(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.hI(new A.lX(a),o),$async$cq)
case 3:q=m.EI(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cq,r)}}
A.lX.prototype={$ilD:1}
A.xI.prototype={
$2(a,b){this.a.j(0,J.ap(a),A.bM(b))},
$S:33}
A.xC.prototype={
$2(a,b){this.a.j(0,J.ap(a),A.n4(b))},
$S:33}
A.cz.prototype={}
A.tJ.prototype={
gmR(){var s=this.r
return new A.av(s,A.m(s).i("av<2>")).vl(0,0,new A.tM())},
mj(){var s,r=this.r,q=A.m(r).i("av<2>"),p=q.i("c7<o.E,i>"),o=A.P(new A.c7(new A.b2(new A.av(r,q),new A.tK(this.f.$0()),q.i("b2<o.E>")),new A.tL(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.A)(o),++s)r.E(0,o[s])
return p}}
A.tM.prototype={
$2(a,b){return a+b.f},
$S:105}
A.tK.prototype={
$1(a){return!a.z.jO(this.a)},
$S:106}
A.tL.prototype={
$1(a){return a.a},
$S:107}
A.y0.prototype={
$1(a){return A.IU(a)},
$S:108}
A.xS.prototype={
$1(a){return B.c.cR(a.c,new A.xR())},
$S:109}
A.xR.prototype={
$1(a){return a.e},
$S:55}
A.fn.prototype={
am(){var s=this
return A.n(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.u7.prototype={
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
A.u4.prototype={
am(){var s,r=A.D(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.hh.prototype={
k(a){return"DatabaseWorkerClosedException: "+this.a},
$iJ:1}
A.hZ.prototype={
k(a){return"ProtocolEnvelopeException: "+this.a},
$iJ:1}
A.kX.prototype={
k(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iJ:1}
A.W.prototype={
P(a,b,c){var s,r,q,p=this.a.h(0,a)
if(!c.b(p)){s=b==null?"":" for "+b
r=A.B5(c)
q=p==null?"null":A.B6(p)
throw A.b(A.c9('Missing or invalid "'+a+'" argument'+s+": expected "+r+", got "+q+"."))}return p},
V(a,b){var s=this.a
if(!s.G(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.c9('Invalid "'+a+'" argument: expected '+A.B5(b)+", got "+A.B6(s)+"."))
return b.a(s)}}
A.fo.prototype={}
A.ip.prototype={}
A.eg.prototype={}
A.xF.prototype={
$2(a,b){var s,r,q=J.ap(a)
if(t.f.b(b))this.a.j(0,q,A.fV(b))
else{s=this.a
if(t.j.b(b)){r=J.aL(b,new A.xE(),t.z)
r=A.P(r,r.$ti.i("V.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:26}
A.xE.prototype={
$1(a){return t.f.b(a)?A.fV(a):a},
$S:40}
A.lC.prototype={
iK(a,b){return this.pr(a,b)},
pr(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$iK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.iC(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iK,r)},
ln(a){var s,r,q,p,o,n=a.h(0,"type"),m=a.h(0,"operation"),l=a.h(0,"compilerVersion"),k=a.h(0,"store"),j=a.h(0,"schemaVersion"),i=a.h(0,"schemaFingerprint"),h=a.h(0,"argumentCount"),g=a.h(0,"sql"),f=a.h(0,"args")
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
o=J.aL(f,A.Cr(),p)
o=A.P(o,o.$ti.i("V.E"))
p=A.dd(o,p)
o=t.j.b(q)?J.js(q,t.N):null
return new A.rV(m,k,g,p,o)},
iC(a){return this.oR(a)},
oR(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k
var $async$iC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.ln(a)
n=a.h(0,"sessionId")
m=A.aE(n)?new A.ug(p.cf(n)):new A.uh(p)
l=a.h(0,"pageLimit")
k=A.aE(l)?l:null
q=A.xJ(p.c,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iC,r)},
cL(a,b){return this.pm(a,b)},
pm(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$cL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cl(),$async$cL)
case 3:o=p.f,n=new A.aR(o,o.r,o.e,A.m(o).i("aR<2>"))
case 4:if(!n.m()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$cL)
case 6:s=4
break
case 5:o.ah(0)
o=p.w
if(o!=null)o.B()
p.w=null
p.r.r.ah(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.aG(new A.hh("Database closed."))
p.d=null
o=p.ax
o=o==null?null:o.B()
s=7
return A.a(o instanceof A.q?o:A.bd(o,t.H),$async$cL)
case 7:p.ax=null
p.at.ah(0)
s=8
return A.a(p.c.p(),$async$cL)
case 8:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cL,r)},
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
return A.a(o.ee(),$async$cl)
case 6:o.ee()
p=o.ax
if((p.c&4)===0)p.p()
o.w.a.p()
case 4:q.as=q.z=null
return A.e(null,r)}})
return A.f($async$cl,r)},
bp(a,b){return this.op(a,b)},
op(a,b){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i
var $async$bp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=t.f
if(!i.b(b))throw A.b(A.c9("Mutation element must be a map, got "+A.r(b==null?"null":J.bq(b))+"."))
q=t.N
p=t.X
o=new A.W(b.c6(0,new A.ue(),q,p))
n=o.P("action",null,q)
m=o.V("id",q)
l=b.h(0,"record")
if(l!=null){k=A.n4(l)
if(!i.b(k))throw A.b(A.c9('Mutation "record" must decode to a map, got '+J.bq(k).k(0)+"."))
j=k.c6(0,new A.uf(),q,p)}else j=null
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
return A.a(a.i_(j),$async$bp)
case 11:s=3
break
case 5:j.toString
s=12
return A.a(a.mU(j),$async$bp)
case 12:s=3
break
case 6:m.toString
j.toString
s=13
return A.a(a.mC(m,j),$async$bp)
case 13:s=3
break
case 7:m.toString
s=14
return A.a(a.lY(m),$async$bp)
case 14:s=3
break
case 8:m.toString
s=15
return A.a(a.mN(m),$async$bp)
case 15:s=3
break
case 9:m.toString
s=16
return A.a(a.k_(m),$async$bp)
case 16:s=3
break
case 10:throw A.b(A.aJ("Unknown mutation action: "+n,null))
case 3:return A.e(null,r)}})
return A.f($async$bp,r)},
iD(a,b,c){a.a.cU(A.eB(A.n(["v",3,"op","worker_event","watchId",b,"value",A.bM(c)],t.N,t.X)))},
cf(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.w("No active transaction session matching ID "+A.r(a)+"."))
s=this.d
s.toString
return s}}
A.ug.prototype={
$2(a,b){return this.a.c.b.ai(a,b)},
$S:57}
A.uh.prototype={
$2(a,b){return this.a.c.mT(a,b)},
$S:57}
A.ue.prototype={
$2(a,b){return new A.S(J.ap(a),b,t.eB)},
$S:32}
A.uf.prototype={
$2(a,b){return new A.S(J.ap(a),b,t.eB)},
$S:32}
A.ud.prototype={
hI(a,b){return this.vG(a,b)},
vG(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hI=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.at.u(0,a)
if(n.ax==null){i=n.c.a$.b
n.ax=new A.b3(i,A.m(i).i("b3<1>")).aW(new A.ui(n))}m=null
try{m=A.FC(b)}catch(d){l=A.C(d)
i=J.ap(l)
q=new A.eg("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eg("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.n(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.iB(a,m),$async$hI)
case 7:k=a0
i=m.b
q=new A.ip(k,i)
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
f=A.n(["type",A.J0(j)],t.N,t.X)
q=new A.eg("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hI,r)},
iB(a,b){return this.oQ(a,b)},
oQ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$iB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.ay
if(l===$){o=A.n(["health",p.gq1(),"capabilities",p.gpj(),"get",p.gq_(),"mutate_batch",p.gq5(),"compiled_query",p.gpq(),"open",p.gq7(),"analyze",p.gph(),"wal_checkpoint",p.gqR(),"vacuum",p.gqP(),"prune_outbox",p.gqb(),"compact",p.gpn(),"run_maintenance",p.gqh(),"tx_begin",p.gqz(),"tx_get",p.gqD(),"tx_mutate_batch",p.gqF(),"tx_savepoint",p.gqN(),"tx_rollback_to",p.gqL(),"tx_release",p.gqH(),"tx_commit",p.gqB(),"tx_rollback",p.gqJ(),"watch_query",p.gqX(),"watch_one",p.gqV(),"watch_cancel",p.gqT(),"sync_start",p.gqr(),"sync_stop",p.gqv(),"sync_now",p.gqj(),"sync_pause",p.gql(),"sync_resume",p.gqn(),"sync_set_connectivity",p.gqp(),"sync_update_auth",p.gqx(),"sync_status",p.gqt(),"file_upload_begin",p.gpT(),"file_upload_chunk",p.gpV(),"file_upload_finish",p.gpX(),"file_upload_abort",p.gpR(),"file_list",p.gpJ(),"file_open",p.gpL(),"file_remove",p.gpN(),"file_gc",p.gpH(),"file_enforce_storage_cap",p.gpF(),"file_storage_status",p.gpP(),"conflicts_list",p.gpy(),"conflicts_get",p.gpw(),"conflicts_resolve",p.gpA(),"conflicts_accept_local",p.gps(),"conflicts_accept_remote",p.gpu(),"conflicts_watch",p.gpC(),"close",p.gpl()],t.N,t.n1)
p.ay!==$&&A.ye()
p.ay=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.c9("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iB,r)}}
A.ui.prototype={
$1(a){var s,r,q,p=A.n(["v",3,"op","record_event","event",A.bM(a.am())],t.N,t.X)
for(s=this.a.at,s=A.fA(s,s.r,A.m(s).c),r=s.$ti.c;s.m();){q=s.d;(q==null?r.a(q):q).a.cU(A.eB(p))}},
$S:114}
A.lA.prototype={
fC(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.W(b.d).V("store",o)
m=p.c.ax
m===$&&A.x()
l=J
s=3
return A.a(m.eN(n),$async$fC)
case 3:m=l.aL(d,A.Cq(),t.G)
m=A.P(m,m.$ti.i("V.E"))
q=A.n(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
fB(a,b){return this.px(a,b)},
px(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.W(b.d)
m=t.N
l=n.P("store","conflicts_get",m)
k=n.P("id","conflicts_get",m)
m=p.c.ax
m===$&&A.x()
s=3
return A.a(m.dd(l,k),$async$fB)
case 3:o=d
q=o==null?null:A.CA(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
fD(a,b){return this.pB(a,b)},
pB(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(o.e5(j,n,k),$async$fD)
case 3:q=A.n(["ok",!0],l,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
fz(a,b){return this.pt(a,b)},
pt(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","conflicts_accept_local",n)
l=o.P("id","conflicts_accept_local",n)
k=p.c.ax
k===$&&A.x()
s=3
return A.a(k.ez(m,l),$async$fz)
case 3:q=A.n(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
fA(a,b){return this.pv(a,b)},
pv(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","conflicts_accept_remote",n)
l=o.P("id","conflicts_accept_remote",n)
k=p.c.ax
k===$&&A.x()
s=3
return A.a(k.dI(m,l),$async$fA)
case 3:q=A.n(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
iL(a,b){return this.pD(a,b)},
pD(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$iL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.S
m=o.P("watchId","conflicts_watch",n)
l=t.N
k=o.V("store",l)
j=p.c.ax
j===$&&A.x()
p.f.j(0,m,new A.fp(new A.u9(j.xa(k).aW(new A.ua(p,a,m)))))
q=A.n(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iL,r)}}
A.ua.prototype={
$1(a){var s=J.aL(a,A.Cq(),t.G)
s=A.P(s,s.$ti.i("V.E"))
this.a.iD(this.b,this.c,s)},
$S:115}
A.u9.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.B(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.lB.prototype={
fL(a,b){return this.q0(a,b)},
q0(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","get",n)
l=o.P("id","get",n)
n=p.c
if(A.ln(n)!=null)A.v(A.w(u.L))
k=A
s=3
return A.a(new A.dO(n,n.ae(m),null,null).bN(l),$async$fL)
case 3:q=k.bM(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
eh(a,b){return this.q6(a,b)},
q6(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$eh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.W(b.d)
m=t.N
l=n.P("store","mutate_batch",m)
k=n.P("mutations","mutate_batch",t.W)
j=p.ru(n.V("durability",m),"mutate_batch")
i=J.K(k)
s=i.gl(k)===1&&j===B.p?3:4
break
case 3:o=p.c
if(A.ln(o)!=null)A.v(A.w(u.L))
s=5
return A.a(p.bp(new A.dO(o,o.ae(l),null,null),i.gD(k)),$async$eh)
case 5:q=A.n(["ok",!0],m,t.y)
s=1
break
case 4:s=6
return A.a(p.c.cz(new A.ub(p,l,k),j,t.P),$async$eh)
case 6:q=A.n(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eh,r)},
ru(a,b){switch(a){case null:case void 0:return B.p
case"normal":return B.p
case"full":return B.aI
default:throw A.b(A.c9('Invalid "'+b+'" durability argument: expected "normal" or "full", got "'+a+'".'))}},
fM(a,b){return this.q8(a,b)},
q8(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.W(b.d).V("stores",t.W)
s=g!=null?3:4
break
case 3:o=J.I(g),n=p.c,m=n.ch,l=t.X,k=t.f,j=n.y==null
case 5:if(!o.m()){s=6
break}i=o.gn()
if(!k.b(i))A.v(A.a3("Schema must be a map: "+A.r(i),null,null))
h=A.yr(A.fV(i),l)
if(B.c.cR(h.c,new A.uc())&&j)throw A.b(A.aJ('Store "'+h.a+'" declares encrypted fields but no fieldCipher was provided.',null))
s=!m.G(h.a)?7:8
break
case 7:s=9
return A.a(n.b8(h),$async$fM)
case 9:case 8:s=5
break
case 6:case 4:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fM,r)}}
A.ub.prototype={
$1(a){return this.ns(a)},
ns(a){var s=0,r=A.h(t.P),q=this,p,o,n
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
A.uc.prototype={
$1(a){return a.e},
$S:55}
A.lE.prototype={
p_(){if(this.w!=null)return
this.w=A.AU(A.cE(9e8,0,0),new A.uj(this))},
iT(a,b){return this.pU(a,b)},
pU(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$iT=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:p.p_()
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
m.mj()
c=m.r
if(c.a>=16)A.v(A.aJ("Maximum concurrent uploads exceeded (16).",null))
if(f<0||f>268435456)A.v(A.aJ("Invalid file size: "+f,null))
if(m.gmR()+f>536870912)A.v(A.aJ("Aggregate upload quota exceeded: "+m.gmR()+" + "+f+" > 536870912",null))
m=m.f.$0().iu(18e8)
c.j(0,n,new A.cz(n,k,j,i,h,f,e,d===!0,A.l([],t.bs),m))
q=A.n(["uploadId",n],l,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iT,r)},
iU(a,b){return this.pW(a,b)},
pW(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$iU=A.c(function(c,d){if(c===1)return A.d(d,r)
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
if(!m.z.jO(o.$0())){n.E(0,h)
A.v(A.aJ("Upload session expired: "+h,null))}l=i.length
if(l>262144){n.E(0,h)
A.v(A.aJ("Chunk too large: "+l+" > 262144",null))}k=m.x
j=m.f
if(k+l>j){n.E(0,h)
A.v(A.aJ("Upload exceeds declared size "+j,null))}m.y.push(i)
m.x+=l
m.z=o.$0().iu(18e8)
q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iU,r)},
fJ(a,b){return this.pY(a,b)},
pY(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.W(b.d).P("uploadId","file_upload_finish",t.S)
f=p.r
e=f.r.E(0,g)
if(e==null)A.v(A.aJ("Unknown upload session: "+g,null))
if(!e.z.jO(f.f.$0()))A.v(A.aJ("Upload session expired: "+g,null))
f=e.x
o=e.f
if(f!==o)A.v(A.aJ("Upload size mismatch: expected "+o+" but got "+f,null))
f=p.c.ay
f===$&&A.x()
n=e.b
m=e.c
l=new A.uk(e).$0()
k=e.d
j=e.e
i=e.r
s=3
return A.a(f.cS(e.w,l,i,o,k,j,m,n),$async$fJ)
case 3:h=d
q=A.n(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
iS(a,b){return this.pS(a,b)},
pS(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$iS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.r.r.E(0,new A.W(b.d).P("uploadId","file_upload_abort",t.S))
q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iS,r)},
fG(a,b){return this.pK(a,b)},
pK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.W(b.d)
j=p.c.ay
j===$&&A.x()
o=t.N
n=k.P("store","file_list",o)
m=k.P("recordId","file_list",o)
l=k.V("field",o)
i=J
s=3
return A.a(j.dX(l==null?"imgs":l,m,n),$async$fG)
case 3:j=i.aL(d,A.Ja(),t.G)
j=A.P(j,j.$ti.i("V.E"))
q=A.n(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
dt(a,b){return this.pM(a,b)},
pM(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dt=A.c(function(a0,a1){if(a0===1){o.push(a1)
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
return A.a(c.eU(f,e,g,d.V("refId",i),h),$async$dt)
case 3:l=a1
k=A.l([],t.t)
h=new A.bZ(A.bL(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.m(),$async$dt)
case 9:if(!a1){s=8
break}j=h.gn()
J.zR(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.B(),$async$dt)
case 10:s=n.pop()
break
case 6:q=A.n(["bytes",A.bM(new Uint8Array(A.aY(k))),"size",J.ao(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dt,r)},
fH(a,b){return this.pO(a,b)},
pO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fH=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(i.f1(0,l,k,m,j.V("refId",o),n),$async$fH)
case 3:q=A.n(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
fF(a,b){return this.pI(a,b)},
pI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.W(b.d)
k=p.c.ay
k===$&&A.x()
o=t.S
n=l.V("blobGraceMs",o)
n=A.cE(0,n==null?6048e5:n,0)
m=l.V("tmpGraceMs",o)
j=A
s=3
return A.a(k.ba(n,A.cE(0,m==null?864e5:m,0)),$async$fF)
case 3:q=j.n(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
fE(a,b){return this.pG(a,b)},
pG(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.ay
n===$&&A.x()
o=t.S
m=A
s=3
return A.a(n.co(new A.W(b.d).P("maxBytes","file_enforce_storage_cap",o)),$async$fE)
case 3:q=m.n(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fI(a,b){return this.pQ(a,b)},
pQ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.ay
o===$&&A.x()
n=A
s=3
return A.a(o.gjP(),$async$fI)
case 3:q=n.n(["durable",d],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)}}
A.uj.prototype={
$1(a){return this.a.r.mj()},
$S:53}
A.uk.prototype={
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
var s=0,r=A.C1($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Cg(r)},
$S:116}
A.lF.prototype={
iV(a,b){return this.q2(a,b)},
q2(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$iV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.fg("SELECT sqlite_version() AS v")
m=n.gD(n).h(0,"v")
o=o.fg("PRAGMA journal_mode")
q=A.n(["ok",!0,"sqliteVersion",m,"journalMode",o.gD(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iV,r)},
iJ(a,b){return this.pk(a,b)},
pk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$iJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.c
n=p.a.fg("PRAGMA journal_mode")
q=A.n(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gD(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iJ,r)},
fv(a,b){return this.pi(a,b)},
pi(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.a(p.c.dK(new A.W(b.d).V("store",o)),$async$fv)
case 3:q=A.n(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
h2(a,b){return this.qS(a,b)},
qS(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$h2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.f9(),$async$h2)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h2,r)},
h1(a,b){return this.qQ(a,b)},
qQ(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$h1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.f8(new A.W(b.d).V("pages",t.S)),$async$h1)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h1,r)},
fN(a,b){return this.qc(a,b)},
qc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.S
n=new A.W(b.d).V("maxEntries",o)
if(n==null)n=1e4
m=A
s=3
return A.a(p.c.eX(n),$async$fN)
case 3:q=m.n(["pruned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
fw(a,b){return this.po(a,b)},
po(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=t.N
m=o.P("store","compact",n)
l=t.S
k=o.P("olderThanMs","compact",l)
j=A
s=3
return A.a(p.c.dO(m,o.V("nowMs",l),A.cE(0,k,0)),$async$fw)
case 3:q=j.n(["compacted",d],n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
fO(a,b){return this.qi(a,b)},
qi(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.W(b.d).V("compactOlderThanMs",t.S)
s=3
return A.a(p.c.d7(A.cE(0,o==null?7776e6:o,0)),$async$fO)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)}}
A.wY.prototype={
jw(){var s=0,r=A.h(t.q),q,p=this,o
var $async$jw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.AW(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jw,r)},
k0(a){return this.wG(a)},
wG(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$k0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.AW(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k0,r)}}
A.lG.prototype={
dv(a,b){return this.qs(a,b)},
qs(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dv=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.W(a5.d)
a2=t.N
a3=a1.V("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.aJ("syncStart requires baseUrl.",null))
s=3
return A.a(p.cl(),$async$dv)
case 3:o=a1.V("token",a2)
n=a1.V("scopeId",a2)
if(n==null)n="web-sync"
m=new A.wY(o,n)
l=A.lu(a3)
k=p.c
j=k.ch
i=A.m(j).i("U<1>")
j=A.P(new A.U(j,i),i.i("o.E"))
i=t.hw
h=A.ed(null,null,i)
g=$.u.h(0,B.cJ)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.jM(A.l([],t.E))
f=new A.r9(f)
e=new A.rr(j,l,m,B.aL,200,25,n,"data",f,h,A.D(a2,t.hU),A.D(a2,i))
e.o9(l,n,25,200,"data",B.aL,m,null)
d=A.zc()
i=A.ed(null,null,t.n6)
h=A.ed(null,null,t.em)
f=t.H
j=A.c6(null,f)
c=new A.nf(A.c6(null,f))
b=A.c6(B.K,t.mv)
a=A.l([],t.s)
f=A.c6(null,f)
a0=new A.tp(A.J6(),k.Q)
f=new A.li(k,e,a0,new A.up(a4),B.T,i,h,j,c,A.aS(a2),b,a,f)
l=f.e=new A.tA(k,B.a.q(A.aD(B.l.v(B.f.v(l.k(0)+"|"+n)).a),0,12))
j=new A.pc(k,e,a0,k.x)
f.x=j
j=new A.rE(k,e,a0,l,j,c)
f.f=j
f.r=new A.tn(k,e,a0,l,j)
f.w=new A.rN(k,e,a0,f.grf(),e.Q)
d.b=f
p.z=m
p.y=d.bi()
f=d.bi().ay
p.Q=new A.b3(f,A.m(f).i("b3<1>")).aW(new A.uq(p,a4))
s=4
return A.a(d.bi().av(),$async$dv)
case 4:s=5
return A.a(e.fk(),$async$dv)
case 5:q=A.n(["ok",!0,"state",d.bi().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
fT(a,b){return this.qw(a,b)},
qw(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cl(),$async$fT)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
fP(a,b){return this.qk(a,b)},
qk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.w("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.cO(),$async$fP)
case 3:o=d
q=A.n(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fP,r)},
fQ(a,b){return this.qm(a,b)},
qm(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.bm(),$async$fQ)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
fR(a,b){return this.qo(a,b)},
qo(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.b9(),$async$fR)
case 3:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fR,r)},
fS(a,b){return this.qq(a,b)},
qq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.w("Sync is not started."))
o=t.y
s=3
return A.a(n.fi(new A.W(b.d).P("online","sync_set_connectivity",o)),$async$fS)
case 3:q=A.n(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
fU(a,b){return this.qy(a,b)},
qy(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
m=p.y
if(n==null||m==null)throw A.b(A.w("Sync is not started."))
o=t.N
n.a=new A.W(b.d).V("token",o)
s=3
return A.a(m.dY(),$async$fU)
case 3:q=A.n(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fU,r)},
iX(a,b){return this.qu(a,b)},
qu(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.as
if(o==null){o=t.N
o=A.n(["state","closed"],o,o)}else o=A.CC(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iX,r)}}
A.up.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.cU(A.eB(A.n(["v",3,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uq.prototype={
$1(a){this.a.as=a
this.b.a.cU(A.eB(A.n(["v",3,"op","sync_status","status",A.CC(a)],t.N,t.X)))},
$S:117}
A.wL.prototype={}
A.lH.prototype={
fV(a,b){return this.qA(a,b)},
qA(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.w("A transaction session is already active on this database."))
o=p.e++
n=$.u
m=t.D
l=t.h
k=new A.q(n,m)
p.hc(new A.aC(new A.q(n,m),l),new A.aC(new A.q(n,m),l),new A.aC(k,l),o)
s=3
return A.a(k,$async$fV)
case 3:q=A.n(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fV,r)},
hc(a,b,c,d){return this.t8(a,b,c,d)},
t8(a,b,c,d){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$hc=A.c(function(e,f){if(e===1){p.push(f)
s=q}for(;;)switch(s){case 0:j=b.a
j.bu(new A.ur(),new A.us(),t.H)
q=3
s=6
return A.a(n.c.Z(new A.ut(n,d,a,b,c),t.P),$async$hc)
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
return A.f($async$hc,r)},
fX(a,b){return this.qE(a,b)},
qE(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=p.cf(new A.W(m).V("sessionId",t.S))
k=new A.W(m)
m=t.N
o=k.P("store","tx_get",m)
n=k.P("id","tx_get",m)
j=A
s=3
return A.a(l.c.bX(o).bN(n),$async$fX)
case 3:q=j.bM(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fX,r)},
fY(a,b){return this.qG(a,b)},
qG(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fY=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(p.bp(m,l.gn()),$async$fY)
case 5:s=3
break
case 4:q=A.n(["ok",!0],k,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fY,r)},
h0(a,b){return this.qO(a,b)},
qO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$h0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.cf(new A.W(b.d).V("sessionId",t.S))
n=o.e
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.H("SAVEPOINT "+m),$async$h0)
case 3:n=t.N
q=A.n(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h0,r)},
ei(a,b){return this.qM(a,b)},
qM(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$ei=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cf(new A.W(o).V("sessionId",t.S))
m=t.N
l=new A.W(o).P("savepoint","tx_rollback_to",m)
o=n.c.b
s=3
return A.a(o.H("ROLLBACK TO "+l),$async$ei)
case 3:s=4
return A.a(o.H("RELEASE "+l),$async$ei)
case 4:B.c.E(n.e,l)
q=A.n(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ei,r)},
fZ(a,b){return this.qI(a,b)},
qI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cf(new A.W(o).V("sessionId",t.S))
m=t.N
l=new A.W(o).P("savepoint","tx_release",m)
s=3
return A.a(n.c.b.H("RELEASE "+l),$async$fZ)
case 3:B.c.E(n.e,l)
q=A.n(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fZ,r)},
fW(a,b){return this.qC(a,b)},
qC(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j
var $async$fW=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:j=m.cf(new A.W(b.d).V("sessionId",t.S))
p=3
l=m.d
k=j
if(l==null?k==null:l===k)m.d=null
j.b.ap()
s=6
return A.a(j.d.a,$async$fW)
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
return A.f($async$fW,r)},
h_(a,b){return this.qK(a,b)},
qK(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$h_=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=m.cf(new A.W(b.d).V("sessionId",t.S))
p=3
j=m.d
i=g
if(j==null?i==null:j===i)m.d=null
l=new A.kX("rollback","Transaction rolled back.")
g.b.aG(l)
p=7
s=10
return A.a(g.d.a,$async$h_)
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
return A.f($async$h_,r)}}
A.ur.prototype={
$1(a){},
$S:118}
A.us.prototype={
$1(a){},
$S:21}
A.ut.prototype={
$1(a){return this.nt(a)},
nt(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
o=new A.wL(q.b,p,a,q.d,A.l([],t.s))
q.a.d=o
q.e.ap()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.fp.prototype={}
A.lI.prototype={
h5(a,b){return this.qY(a,b)},
qY(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$h5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=new A.W(m).P("watchId","watch_query",t.S)
k=p.ln(m)
m=p.c
o=new A.jQ(m.ae(k.d).a,k.r,k.w,k.y,null,new A.uA(p,a,l),m,B.aK)
n=new A.fp(new A.uB(o))
j=J
s=3
return A.a(A.jj(new A.uC(p,l,n),o.gvP(),new A.uD(p,l,n),o.gN(),t.J),$async$h5)
case 3:m=j.aL(d,A.Cs(),t.X)
m=A.P(m,m.$ti.i("V.E"))
q=A.n(["watchId",l,"items",m],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)},
h4(a,b){return this.qW(a,b)},
qW(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$h4=A.c(function(c,a0){if(c===1)return A.d(a0,r)
for(;;)switch(s){case 0:o=new A.W(b.d)
n=o.P("watchId","watch_one",t.S)
m=t.N
l=o.P("store","watch_one",m)
k=o.P("id","watch_one",m)
j=p.c
i=j.ae(l)
h=A.zc()
g=new A.fp(new A.uv(h))
f=A
e=n
d=A
s=3
return A.a(A.jj(new A.uw(p,n,g),new A.ux(p,l,k),new A.uy(p,n,g),new A.uz(p,h,new A.hT(i,k,j,B.aK),a,n),t.b),$async$h4)
case 3:q=f.n(["watchId",e,"item",d.bM(a0)],m,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h4,r)},
h3(a,b){return this.qU(a,b)},
qU(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$h3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.E(0,new A.W(b.d).P("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$h3)
case 5:case 4:q=A.n(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h3,r)}}
A.uA.prototype={
$1(a){return this.a.iD(this.b,this.c,a)},
$S:119}
A.uB.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.hx()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uD.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.uC.prototype={
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
A.uv.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.bi().B(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uz.prototype={
$0(){var s=this
s.b.sml(s.c.nS().aW(new A.uu(s.a,s.d,s.e)))},
$S:0}
A.uu.prototype={
$1(a){this.a.iD(this.b,this.c,a)},
$S:120}
A.uy.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.ux.prototype={
$0(){var s=this.a.c
if(A.ln(s)!=null)A.v(A.w(u.L))
return new A.dO(s,s.ae(this.b),null,null).bN(this.c)},
$S:121}
A.uw.prototype={
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
A.og.prototype={
tK(a){var s,r=null
A.Ck("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.aY(a)>0&&!s.cr(a)
if(s)return a
s=A.Cv()
return this.mw(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
us(a){var s,r,q=A.di(a,this.a)
q.f2()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.c.k6(s)
q.e.pop()
q.f2()
return q.k(0)},
mw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Ck("join",s)
return this.vW(new A.bv(s,t.x))},
vW(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.dp(s,new A.oh(),a.$ti.i("dp<o.E>")),q=this.a,p=!1,o=!1,n="";r.m();){m=s.gn()
if(q.cr(m)&&o){l=A.di(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.q(k,0,q.e6(k,!0))
l.b=n
if(q.eS(n))l.e[0]=q.gdf()
n=l.k(0)}else if(q.aY(m)>0){o=!q.cr(m)
n=m}else{if(!(m.length!==0&&q.jt(m[0])))if(p)n+=q.gdf()
n+=m}p=q.eS(m)}return n.charCodeAt(0)==0?n:n},
dh(a,b){var s=A.di(b,this.a),r=s.d,q=A.a6(r).i("b2<1>")
r=A.P(new A.b2(r,new A.oi(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.c.aC(r,0,q)
return s.d},
eT(a){var s
if(!this.rd(a))return a
s=A.di(a,this.a)
s.jU()
return s.k(0)},
rd(a){var s,r,q,p,o,n,m,l=this.a,k=l.aY(a)
if(k!==0){if(l===$.n7())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.c3(n)){if(l===$.n7()&&n===47)return!0
if(q!=null&&l.c3(q))return!0
if(q===46)m=o==null||o===46||l.c3(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.c3(q))return!0
if(q===46)l=o==null||l.c3(o)||o===46
else l=!1
if(l)return!0
return!1},
wI(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aY(a)
if(l<=0)return o.eT(a)
s=A.Cv()
if(m.aY(s)<=0&&m.aY(a)>0)return o.eT(a)
if(m.aY(a)<=0||m.cr(a))a=o.tK(a)
if(m.aY(a)<=0&&m.aY(s)>0)throw A.b(A.AG(n+a+'" from "'+s+'".'))
r=A.di(s,m)
r.jU()
q=A.di(a,m)
q.jU()
l=r.d
if(l.length!==0&&l[0]===".")return q.k(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.jY(l,p)
else l=!1
if(l)return q.k(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.jY(l[0],p[0])}else l=!1
if(!l)break
B.c.i3(r.d,0)
B.c.i3(r.e,1)
B.c.i3(q.d,0)
B.c.i3(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.AG(n+a+'" from "'+s+'".'))
l=t.N
B.c.jL(q.d,0,A.aG(p,"..",!1,l))
p=q.e
p[0]=""
B.c.jL(p,1,A.aG(r.d.length,m.gdf(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.c.ga3(m)==="."){B.c.k6(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.f2()
return q.k(0)},
mD(a){var s,r,q=this,p=A.C5(a)
if(p.gaS()==="file"&&q.a===$.jq())return p.k(0)
else if(p.gaS()!=="file"&&p.gaS()!==""&&q.a!==$.jq())return p.k(0)
s=q.eT(q.a.jX(A.C5(p)))
r=q.wI(s)
return q.dh(0,r).length>q.dh(0,s).length?s:r}}
A.oh.prototype={
$1(a){return a!==""},
$S:12}
A.oi.prototype={
$1(a){return a.length!==0},
$S:12}
A.xq.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:122}
A.q0.prototype={
nB(a){var s=this.aY(a)
if(s>0)return B.a.q(a,0,s)
return this.cr(a)?a[0]:null},
jY(a,b){return a===b}}
A.kM.prototype={
gjo(){var s=this,r=t.N,q=new A.kM(s.a,s.b,s.c,A.eU(s.d,!0,r),A.eU(s.e,!0,r))
q.f2()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.c.ga3(r)},
f2(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.c.ga3(s)===""))break
B.c.k6(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
jU(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.c.jL(m,0,A.aG(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.aG(m.length+1,s.gdf(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.eS(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.n7())n.b=A.z(r,"/","\\")
n.f2()},
k(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.c.ga3(q)
return o.charCodeAt(0)==0?o:o}}
A.kN.prototype={
k(a){return"PathException: "+this.a},
$iJ:1}
A.tm.prototype={
k(a){return this.gb7()}}
A.rt.prototype={
jt(a){return B.a.C(a,"/")},
c3(a){return a===47},
eS(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
e6(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aY(a){return this.e6(a,!1)},
cr(a){return!1},
jX(a){var s
if(a.gaS()===""||a.gaS()==="file"){s=a.gbl()
return A.zm(s,0,s.length,B.k,!1)}throw A.b(A.O("Uri "+a.k(0)+" must have scheme 'file:'.",null))},
gb7(){return"posix"},
gdf(){return"/"}}
A.tP.prototype={
jt(a){return B.a.C(a,"/")},
c3(a){return a===47},
eS(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bY(a,"://")&&this.aY(a)===s},
e6(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.c1(a,"/",B.a.aa(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.Cz(a,q+1)
return p==null?q:p}}return 0},
aY(a){return this.e6(a,!1)},
cr(a){return a.length!==0&&a.charCodeAt(0)===47},
jX(a){return a.k(0)},
gb7(){return"url"},
gdf(){return"/"}}
A.u8.prototype={
jt(a){return B.a.C(a,"/")},
c3(a){return a===47||a===92},
eS(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
e6(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.c1(a,"\\",2)
if(s>0){s=B.a.c1(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.CH(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aY(a){return this.e6(a,!1)},
cr(a){return this.aY(a)===1},
jX(a){var s,r
if(a.gaS()!==""&&a.gaS()!=="file")throw A.b(A.O("Uri "+a.k(0)+" must have scheme 'file:'.",null))
s=a.gbl()
if(a.gcZ()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Cz(s,1)!=null)s=B.a.mM(s,"/","")}else s="\\\\"+a.gcZ()+s
r=A.z(s,"/","\\")
return A.zm(r,0,r.length,B.k,!1)},
u7(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
jY(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.u7(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gb7(){return"windows"},
gdf(){return"\\"}}
A.t5.prototype={
gl(a){return this.c.length},
gvX(){return this.b.length},
ob(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.E(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ec(a){var s,r=this
if(a<0)throw A.b(A.aO("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aO("Offset "+a+u.D+r.gl(0)+"."))
s=r.b
if(a<B.c.gD(s))return-1
if(a>=B.c.ga3(s))return s.length-1
if(r.r3(a)){s=r.d
s.toString
return s}return r.d=r.or(a)-1},
r3(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
or(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.b.K(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
ik(a){var s,r,q=this
if(a<0)throw A.b(A.aO("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aO("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gl(0)+"."))
s=q.ec(a)
r=q.b[s]
if(r>a)throw A.b(A.aO("Line "+s+" comes after offset "+a+"."))
return a-r},
fd(a){var s,r,q,p
if(a<0)throw A.b(A.aO("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aO("Line "+a+" must be less than the number of lines in the file, "+this.gvX()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aO("Line "+a+" doesn't have 0 columns."))
return q}}
A.ka.prototype={
ga0(){return this.a.a},
gad(){return this.a.ec(this.b)},
gao(){return this.a.ik(this.b)},
gaq(){return this.b}}
A.fx.prototype={
ga0(){return this.a.a},
gl(a){return this.c-this.b},
gN(){return A.yz(this.a,this.b)},
gM(){return A.yz(this.a,this.c)},
gaH(){return A.dl(B.u.U(this.a.c,this.b,this.c),0,null)},
gb6(){var s=this,r=s.a,q=s.c,p=r.ec(q)
if(r.ik(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dl(B.u.U(r.c,r.fd(p),r.fd(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fd(p+1)
return A.dl(B.u.U(r.c,r.fd(r.ec(s.b)),q),0,null)},
X(a,b){var s
if(!(b instanceof A.fx))return this.o1(0,b)
s=B.b.X(this.b,b.b)
return s===0?B.b.X(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.fx))return s.o0(0,b)
return s.b===b.b&&s.c===b.c&&J.t(s.a.a,b.a.a)},
gI(a){return A.c8(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$icO:1}
A.px.prototype={
vM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.lT(B.c.gD(a1).c)
s=a.e
r=A.aG(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.t(m.c,l)){a.hi("\u2575")
q.a+="\n"
a.lT(l)}else if(m.b+1!==n.b){a.tJ("...")
q.a+="\n"}}for(l=n.d,k=A.a6(l).i("e9<1>"),j=new A.e9(l,k),j=new A.ae(j,j.gl(0),k.i("ae<V.E>")),k=k.i("V.E"),i=n.b,h=n.a;j.m();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gN().gad()!==f.gM().gad()&&f.gN().gad()===i&&a.r4(B.a.q(h,0,f.gN().gao()))){e=B.c.c0(r,a0)
if(e<0)A.v(A.O(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.tI(i)
q.a+=" "
a.tH(n,r)
if(s)q.a+=" "
d=B.c.vO(l,new A.pS())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gN().gad()===i?j.gN().gao():0
a.tF(h,g,j.gM().gad()===i?j.gM().gao():h.length,p)}else a.hk(h)
q.a+="\n"
if(k)a.tG(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hi("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
lT(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hi("\u2577")
else{q.hi("\u250c")
q.be(new A.pF(q),"\x1b[34m")
s=q.r
r=" "+$.h3().mD(a)
s.a+=r}q.r.a+="\n"},
hg(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gN().gad()
i=k?null:l.a.gM().gad()
if(s&&l===c){h.be(new A.pM(h,j,a),r)
n=!0}else if(n)h.be(new A.pN(h,l),r)
else if(k)if(g.a)h.be(new A.pO(h),g.b)
else o.a+=" "
else h.be(new A.pP(g,h,c,j,a,l,i),p)}},
tH(a,b){return this.hg(a,b,null)},
tF(a,b,c,d){var s=this
s.hk(B.a.q(a,0,b))
s.be(new A.pG(s,a,b,c),d)
s.hk(B.a.q(a,c,a.length))},
tG(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gN().gad()===p.gM().gad()){r.jl()
p=r.r
p.a+=" "
r.hg(a,c,b)
if(c.length!==0)p.a+=" "
r.lU(b,c,r.be(new A.pH(r,a,b),q))}else{s=a.b
if(p.gN().gad()===s){if(B.c.C(c,b))return
A.IY(c,b)
r.jl()
p=r.r
p.a+=" "
r.hg(a,c,b)
r.be(new A.pI(r,a,b),q)
p.a+="\n"}else if(p.gM().gad()===s){p=p.gM().gao()
if(p===a.a.length){A.CU(c,b)
return}r.jl()
r.r.a+=" "
r.hg(a,c,b)
r.lU(b,c,r.be(new A.pJ(r,!1,a,b),q))
A.CU(c,b)}}},
lS(a,b,c){var s=c?0:1,r=this.r
s=B.a.bb("\u2500",1+b+this.iz(B.a.q(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tE(a,b){return this.lS(a,b,!0)},
lU(a,b,c){this.r.a+="\n"
return},
hk(a){var s,r,q,p
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),q=this.r,r=r.i("F.E");s.m();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bb(" ",4)
else{p=A.bh(p)
q.a+=p}}},
hj(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.b.k(b+1)
this.be(new A.pQ(s,this,a),"\x1b[34m")},
hi(a){return this.hj(a,null,null)},
tJ(a){return this.hj(null,null,a)},
tI(a){return this.hj(null,a,null)},
jl(){return this.hj(null,null,null)},
iz(a){var s,r,q,p
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),r=r.i("F.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
r4(a){var s,r,q
for(s=new A.c4(a),r=t.V,s=new A.ae(s,s.gl(0),r.i("ae<F.E>")),r=r.i("F.E");s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
oF(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
be(a,b){return this.oF(a,b,t.z)}}
A.pR.prototype={
$0(){return this.a},
$S:123}
A.pz.prototype={
$1(a){var s=a.d
return new A.b2(s,new A.py(),A.a6(s).i("b2<1>")).gl(0)},
$S:124}
A.py.prototype={
$1(a){var s=a.a
return s.gN().gad()!==s.gM().gad()},
$S:34}
A.pA.prototype={
$1(a){return a.c},
$S:126}
A.pC.prototype={
$1(a){var s=a.a.ga0()
return s==null?new A.j():s},
$S:127}
A.pD.prototype={
$2(a,b){return a.a.X(0,b.a)},
$S:128}
A.pE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aA(c),r=s.gt(c),q=t.pg;r.m();){p=r.gn().a
o=p.gb6()
n=A.xM(o,p.gaH(),p.gN().gao())
n.toString
m=B.a.hl("\n",B.a.q(o,0,n)).gl(0)
l=p.gN().gad()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.c.ga3(b).b)b.push(new A.ci(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.A)(b),++k){j=b[k]
h&1&&A.E(i,16)
B.c.t2(i,new A.pB(j),!0)
f=i.length
for(q=s.bd(c,g),p=q.$ti,q=new A.ae(q,q.gl(0),p.i("ae<V.E>")),n=j.b,p=p.i("V.E");q.m();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gN().gad()>n)break
i.push(e)}g+=i.length-f
B.c.F(j.d,i)}return b},
$S:129}
A.pB.prototype={
$1(a){return a.a.gM().gad()<this.a.b},
$S:34}
A.pS.prototype={
$1(a){return!0},
$S:34}
A.pF.prototype={
$0(){this.a.r.a+=B.a.bb("\u2500",2)+">"
return null},
$S:0}
A.pM.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:4}
A.pN.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:4}
A.pO.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.pP.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.be(new A.pK(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gM().gao()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.be(new A.pL(r,o),p.b)}}},
$S:4}
A.pK.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:4}
A.pL.prototype={
$0(){this.a.r.a+=this.b},
$S:4}
A.pG.prototype={
$0(){var s=this
return s.a.hk(B.a.q(s.b,s.c,s.d))},
$S:0}
A.pH.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gN().gao(),l=n.gM().gao()
n=this.b.a
s=q.iz(B.a.q(n,0,m))
r=q.iz(B.a.q(n,m,l))
m+=s*3
n=(p.a+=B.a.bb(" ",m))+B.a.bb("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:9}
A.pI.prototype={
$0(){return this.a.tE(this.b,this.c.a.gN().gao())},
$S:0}
A.pJ.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bb("\u2500",3)
else r.lS(s.c,Math.max(s.d.a.gM().gao()-1,0),!1)
return q.a.length-p.length},
$S:9}
A.pQ.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wj(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:4}
A.be.prototype={
k(a){var s=this.a
s="primary "+(""+s.gN().gad()+":"+s.gN().gao()+"-"+s.gM().gad()+":"+s.gM().gao())
return s.charCodeAt(0)==0?s:s}}
A.w0.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.xM(o.gb6(),o.gaH(),o.gN().gao())!=null)){s=A.l7(o.gN().gaq(),0,0,o.ga0())
r=o.gM().gaq()
q=o.ga0()
p=A.Il(o.gaH(),10)
o=A.t6(s,A.l7(r,A.Bm(o.gaH()),p,q),o.gaH(),o.gaH())}return A.G1(A.G3(A.G2(o)))},
$S:130}
A.ci.prototype={
k(a){return""+this.b+': "'+this.a+'" ('+B.c.J(this.d,", ")+")"}}
A.cc.prototype={
jz(a){var s=this.a
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
jz(a){if(!J.t(this.a.a,a.ga0()))throw A.b(A.O('Source URLs "'+A.r(this.ga0())+'" and "'+A.r(a.ga0())+"\" don't match.",null))
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
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ec(r)+1)+":"+(q.ik(r)+1))+">"},
$iam:1,
$icc:1}
A.la.prototype={
oc(a,b,c){var s,r=this.b,q=this.a
if(!J.t(r.ga0(),q.ga0()))throw A.b(A.O('Source URLs "'+A.r(q.ga0())+'" and  "'+A.r(r.ga0())+"\" don't match.",null))
else if(r.gaq()<q.gaq())throw A.b(A.O("End "+r.k(0)+" must come after start "+q.k(0)+".",null))
else{s=this.c
if(s.length!==q.jz(r))throw A.b(A.O('Text "'+s+'" must be '+q.jz(r)+" characters long.",null))}},
gN(){return this.a},
gM(){return this.b},
gaH(){return this.c}}
A.lb.prototype={
gjT(){return this.a},
k(a){var s,r,q,p=this.b,o="line "+(p.gN().gad()+1)+", column "+(p.gN().gao()+1)
if(p.ga0()!=null){s=p.ga0()
r=$.h3()
s.toString
s=o+(" of "+r.mD(s))
o=s}o+=": "+this.a
q=p.vN(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iJ:1}
A.f9.prototype={
gaq(){var s=this.b
s=A.yz(s.a,s.b)
return s.b},
$ib8:1,
gfj(){return this.c}}
A.fa.prototype={
ga0(){return this.gN().ga0()},
gl(a){return this.gM().gaq()-this.gN().gaq()},
X(a,b){var s=this.gN().X(0,b.gN())
return s===0?this.gM().X(0,b.gM()):s},
vN(a){var s=this
if(!t.ol.b(s)&&s.gl(s)===0)return""
return A.Et(s,a).vM()},
R(a,b){if(b==null)return!1
return b instanceof A.fa&&this.gN().R(0,b.gN())&&this.gM().R(0,b.gM())},
gI(a){return A.c8(this.gN(),this.gM(),B.d,B.d,B.d,B.d,B.d)},
k(a){var s=this
return"<"+A.d1(s).k(0)+": from "+s.gN().k(0)+" to "+s.gM().k(0)+' "'+s.gaH()+'">'},
$iam:1}
A.cO.prototype={
gb6(){return this.d}}
A.ia.prototype={
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
p=p!=null?s+(", parameters: "+J.aL(p,new A.tb(),t.N).J(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iJ:1}
A.tb.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.ap(a)},
$S:131}
A.jv.prototype={}
A.oE.prototype={
tw(){var s=this,r=s.d
return r==null?s.d=new A.dy(s,A.l([],t.fU),new A.oN(s),new A.oO(s),t.jy):r},
t6(){var s=this,r=s.e
return r==null?s.e=new A.dy(s,A.l([],t.lw),new A.oK(s),new A.oL(s),t.lU):r},
oH(){var s=this,r=s.f
return r==null?s.f=new A.dy(s,A.l([],t.lw),new A.oG(s),new A.oH(s),t.af):r},
ue(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.f.v(e)
if(m.length>255)A.v(A.aI(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.aY(m))
r=n.a
q=r.dJ(s,1)
s=r.d
p=A.zs(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.cM(new A.oP(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.yd(this,p,o,o,o)},
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
r=s.ku()
q=r!==0?A.zw(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aB(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.v(A.w("This database has already been closed"))
r=p.b
q=r.a
s=q.dJ(B.f.v(a),1)
q=q.d
r=A.zs(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.yd(p,r,"executing",a,b)}else{s=p.hY(a,!0)
try{s.jE(new A.dX(b))}finally{s.p()}}},
H(a){return this.aB(a,B.y)},
rC(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.v(A.w("This database has already been closed"))
s=B.f.v(a)
r=e.b
q=r.a
p=q.cn(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.u1(r,p,n,o)
l=A.l([],t.lE)
k=new A.oI(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kw(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.yd(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.K(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.ac(o,2)]-p
f=i.a
if(f!=null)l.push(new A.fb(f,e,new A.cZ(!1).cG(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kw(j,r-j,0)
n=q.buffer
h=B.b.K(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.ac(o,2)]-p
f=i.a
if(f!=null){l.push(new A.fb(f,e,""))
k.$0()
throw A.b(A.aI(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aI(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
hY(a,b){var s=this.rC(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aI(a,"sql","Must contain an SQL statement."))
return B.c.gD(s)},
wl(a){return this.hY(a,!1)},
nD(a,b){var s,r=this.hY(a,!0)
try{s=r.kp(new A.dX(b))
return s}finally{r.p()}},
fg(a){return this.nD(a,B.y)}}
A.oN.prototype={
$0(){var s=this.a,r=s.b
r.a.ma(r.b,new A.oM(s))},
$S:0}
A.oM.prototype={
$3(a,b,c){var s=A.Fm(a)
if(s==null)return
this.a.d.jy(new A.cd(s,b,c))},
$S:132}
A.oO.prototype={
$0(){var s=this.a.b
s.a.ma(s.b,null)
return null},
$S:0}
A.oK.prototype={
$0(){var s=this.a,r=s.b
r.a.m9(r.b,new A.oJ(s))
return null},
$S:0}
A.oJ.prototype={
$0(){this.a.e.jy(null)},
$S:0}
A.oL.prototype={
$0(){var s=this.a.b
s.a.m9(s.b,null)
return null},
$S:0}
A.oG.prototype={
$0(){var s=this.a,r=s.b
r.a.m8(r.b,new A.oF(s))
return null},
$S:0}
A.oF.prototype={
$0(){var s=this.a.f
s.jy(null)
return 0},
$S:9}
A.oH.prototype={
$0(){var s=this.a.b
s.a.m8(s.b,null)
return null},
$S:0}
A.oP.prototype={
$2(a,b){A.H0(a,this.a,b)},
$S:133}
A.oI.prototype={
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
A.F9(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.Fb(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.O("The argument list is unmodifiable",null))},
$it8:1}
A.dy.prototype={
gcD(){var s=this.r
return s==null?this.r=this.pf(!1):s},
pf(a){return new A.cY(new A.wE(this,!1),this.$ti.i("cY<1>"))},
jy(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.v(o.bz())
if((n&1)!==0)o.gaI().aw(a)}else{n=o.b
if(n>=4)A.v(o.bz())
if((n&1)!==0)o.ci(a)
else if((n&3)===0){n=o.fq()
o=new A.bW(a,o.$ti.i("bW<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.se_(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.wE.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.wF(q,a,s)
a.r=a.e=new A.wG(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(df<1>)")}}
A.wF.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.iT(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.wG.prototype={
$0(){var s=this.a,r=s.c
B.c.E(r,new A.iT(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.t7.prototype={
mr(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Fl(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wd(a,b){var s,r,q,p,o,n,m,l,k,j
this.mr()
switch(2){case 2:break}s=this.a
r=s.a
q=r.dJ(B.f.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.dJ(B.f.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.cK(r.b.buffer,0,null)[B.b.ac(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.tV(r,l,o)
r=r.r
if(r!=null)r.m1(k,l,o)
if(m!==0){j=A.zw(s,k,m,"opening the database",null,null)
k.ku()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.oE(s,k,!1)}}
A.fb.prototype={
goG(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.lJ(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.cZ(!1).cG(o,0,null,!0))}return q},
gtp(){return null},
bv(a,b){A.yd(this.b,a,b,this.d,this.e)},
l2(){if(this.r||this.b.r)throw A.b(A.w("Tried to operate on a released prepared statement"))},
p8(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.d6()
if(s!==0?s!==101:q)r.bv(s,"executing statement")},
tb(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rV(o))
l.push(p)}m.d6()
if(p!==0?p!==101:k)m.bv(p,"selecting from statement")
n=m.goG()
m.gtp()
k=new A.kZ(l,n,B.aa)
k.oB()
return k},
rV(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ah(r.Number(s)):A.zb(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.nQ(a)
case 4:return s.kv(a)
case 5:default:return null}},
ou(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.v(A.aI(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.ov(a[s-1],s)
this.e=a},
ov(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.aE(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.ay){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.A2(a).k(0)))
break A}if(A.c0(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.nP(b,a)
break A}if(t.L.b(a)){s=q.a.nO(b,a)
break A}s=q.ot(a,b)
break A}if(s!==0)q.bv(s,"binding parameter")},
ot(a,b){throw A.b(A.aI(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
kJ(a){A:{if(a instanceof A.dX){this.ou(a.a)
break A}if(a instanceof A.jU)a.a.$1(this)}},
d6(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.d6()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.md(s.d)}},
kp(a){var s=this
s.l2()
s.d6()
s.kJ(a)
return s.tb()},
jE(a){var s=this
s.l2()
s.d6()
s.kJ(a)
s.p8()}}
A.kd.prototype={
ie(a,b){return this.d.G(a)?1:0},
kh(a,b){this.d.E(0,a)},
ki(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r=a.a
if(r==null)r=A.Ao(this.b,"/")
s=this.d
if(!s.G(r))if((b&4)!==0)s.j(0,r,new A.ch(new Uint8Array(0),0))
else throw A.b(A.fk(14))
return new A.fD(new A.m9(this,r,(b&8)!==0),0)},
kk(a){}}
A.m9.prototype={
mG(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.e.af(a,0,s,J.bB(B.e.ga5(r.a),0,r.b),b)
return s},
kg(){return this.d>=2?1:0},
ig(){if(this.c)this.a.d.E(0,this.b)},
fa(){return this.a.d.h(0,this.b).b},
kj(a){this.d=a},
kl(a){},
fb(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.ch(new Uint8Array(0),0))
s.h(0,r).sl(0,a)}else q.sl(0,a)},
km(a){this.d=a},
eb(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.ch(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sl(0,s)
p.ar(0,b,s,a)}}
A.y1.prototype={
$1(a){return a.length!==0},
$S:12}
A.ok.prototype={
oB(){var s,r,q,p,o=A.D(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o.j(0,p,B.c.d0(s,p))}this.c=o}}
A.kZ.prototype={
gt(a){return new A.wo(this)},
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
A.wo.prototype={
gn(){var s=this.a
return new A.bT(s,A.dd(s.d[this.b],t.X))},
m(){return++this.b<this.a.d.length}}
A.mp.prototype={}
A.mq.prototype={}
A.ms.prototype={}
A.mt.prototype={}
A.qZ.prototype={
ab(){return"OpenMode."+this.b}}
A.dP.prototype={}
A.dX.prototype={}
A.jU.prototype={}
A.cU.prototype={
k(a){return"VfsException("+this.a+")"},
$iJ:1}
A.i9.prototype={}
A.aW.prototype={}
A.jJ.prototype={}
A.jI.prototype={
gih(){return 0},
mY(a,b){return 12},
gij(){return 4096},
ii(a,b){var s=this.mG(a,b),r=a.length
if(s<r){B.e.jF(a,s,r,0)
throw A.b(B.d6)}},
$iba:1,
$iim:1}
A.eh.prototype={}
A.yb.prototype={
$0(){var s,r,q
for(s=this.a;!s.gA(0);){if(s.b===0)A.v(A.w("No such element"))
r=s.c
q=r.a
q.toString
q.jj(A.m(r).i("aT.E").a(r))
r.d.$0()}},
$S:0}
A.y9.prototype={
$1(a){var s=this.a,r=s.b
s.h6(s.c,new A.eh(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:18}
A.ya.prototype={
$4(a,b,c,d){this.a.$1(c.eB(d))},
$S:203}
A.u_.prototype={}
A.tV.prototype={
ku(){var s=this.a,r=s.r
if(r!=null)r.md(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.u1.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kw(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.zs(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.cK(o.b.buffer,0,null)[B.b.ac(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.u0(s,o,n)
o=o.w
if(o!=null)o.m1(r,s,n)}return new A.mn(r,p)}}
A.u0.prototype={
nO(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cn(b),J.ao(b))},
nP(a,b){var s=B.f.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cn(s),s.length)},
kv(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.B7(s.b,q.sqlite3_column_blob(r,a),p)},
nQ(a){var s=this.c
return A.dq(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dn.prototype={$iyT:1}
A.cV.prototype={$iyU:1}
A.fm.prototype={
sl(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.cV(s,A.cK(s.b.buffer,0,null)[B.b.ac(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gl(a){return this.b}}
A.jX.prototype={
w6(a){var s,r,q=this.b
q===$&&A.x()
s="[sqlite3] "+A.dq(q,a,null)
r=$.Hv
if(r==null)A.CP(s)
else r.$1(s)},
w4(a,b){var s,r=new A.aN(A.oX(A.ah(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.x()
s=A.AD(q.buffer,b,8)
s.$flags&2&&A.E(s)
s[0]=A.yR(r)
s[1]=A.yP(r)
s[2]=A.yO(r)
s[3]=A.rv(r)
s[4]=A.yQ(r)-1
s[5]=A.yS(r)-1900
s[6]=B.b.aj(A.F3(r),7)},
xE(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.x()
s=new A.i9(A.z5(j,b,k))
try{r=a.dc(s,d)
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
xt(a,b,c){var s=this.b
s===$&&A.x()
return A.bK(new A.oq(a,A.dq(s,b,null),c))},
xk(a,b,c,d){var s=this.b
s===$&&A.x()
return A.bK(new A.on(this,a,A.dq(s,b,null),c,d))},
xA(a,b,c,d){var s=this.b
s===$&&A.x()
return A.bK(new A.os(this,a,A.dq(s,b,null),c,d))},
xG(a,b,c){return A.bK(new A.ou(this,c,b,a))},
xL(a,b){return A.bK(new A.ow(a,b))},
xq(a,b){var s,r=Date.now(),q=this.b
q===$&&A.x()
s=v.G.BigInt(r)
A.yG(A.AC(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xo(a){return A.bK(new A.op(a))},
xI(a,b,c,d){return A.bK(new A.ov(this,a,b,c,d))},
xT(a,b,c,d){return A.bK(new A.oA(this,a,b,c,d))},
xP(a,b){return A.bK(new A.oy(a,b))},
xN(a,b){return A.bK(new A.ox(a,b))},
xy(a,b){return A.bK(new A.or(this,a,b))},
xC(a,b){return A.bK(new A.ot(a,b))},
xR(a,b){return A.bK(new A.oz(a,b))},
xm(a,b){return A.bK(new A.oo(this,a,b))},
xu(a){return a.gih()},
xw(a,b,c){if(t.j2.b(a))return a.mY(b,c)
return 12},
xJ(a){if(t.j2.b(a))return a.gij()
return 4096},
uF(a){a.$0()},
uA(a){return a.$0()},
uD(a,b,c,d,e){var s=this.b
s===$&&A.x()
a.$3(b,A.dq(s,d,null),A.ah(v.G.Number(e)))},
uL(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.x()
r.$2(new A.dn(s,b),new A.fm(s,c,d))},
uP(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.x()
r.$2(new A.dn(s,b),new A.fm(s,c,d))},
uN(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.x()
null.$2(new A.dn(s,b),new A.fm(s,c,d))},
uR(a,b){var s
null.toString
s=this.a
s===$&&A.x()
null.$1(new A.dn(s,b))},
uJ(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.x()
r.$1(new A.dn(s,b))},
uH(a,b,c,d,e){var s=this.b
s===$&&A.x()
return null.$2(A.z5(s,c,b),A.z5(s,e,d))},
uy(a,b){return a.$1(b)},
uw(a,b){return a.gxX().$1(b)},
uu(a,b,c){return a.gxW().$2(b,c)}}
A.oq.prototype={
$0(){return this.a.kh(this.b,this.c)},
$S:0}
A.on.prototype={
$0(){var s,r=this,q=r.b.ie(r.c,r.d),p=r.a.b
p===$&&A.x()
p=A.cK(p.buffer,0,null)
s=B.b.ac(r.e,2)
p.$flags&2&&A.E(p)
p[s]=q},
$S:0}
A.os.prototype={
$0(){var s,r,q=this,p=B.f.v(q.b.ki(q.c)),o=p.length
if(o>q.d)throw A.b(A.fk(14))
s=q.a.b
s===$&&A.x()
s=A.bH(s.buffer,0,null)
r=q.e
B.e.cC(s,r,p)
s.$flags&2&&A.E(s)
s[r+o]=0},
$S:0}
A.ou.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.x()
s=A.bH(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.A0(s,q.b)
else return A.A0(s,null)},
$S:0}
A.ow.prototype={
$0(){this.a.kk(A.cE(this.b,0,0))},
$S:0}
A.op.prototype={
$0(){return this.a.ig()},
$S:0}
A.ov.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.x()
s.b.ii(A.bH(r.buffer,s.c,s.d),A.ah(v.G.Number(s.e)))},
$S:0}
A.oA.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.x()
s.b.eb(A.bH(r.buffer,s.c,s.d),A.ah(v.G.Number(s.e)))},
$S:0}
A.oy.prototype={
$0(){return this.a.fb(A.ah(v.G.Number(this.b)))},
$S:0}
A.ox.prototype={
$0(){return this.a.kl(this.b)},
$S:0}
A.or.prototype={
$0(){var s,r=this.b.fa(),q=this.a.b
q===$&&A.x()
q=A.cK(q.buffer,0,null)
s=B.b.ac(this.c,2)
q.$flags&2&&A.E(q)
q[s]=r},
$S:0}
A.ot.prototype={
$0(){return this.a.kj(this.b)},
$S:0}
A.oz.prototype={
$0(){return this.a.km(this.b)},
$S:0}
A.oo.prototype={
$0(){var s,r=this.b.kg(),q=this.a.b
q===$&&A.x()
q=A.cK(q.buffer,0,null)
s=B.b.ac(this.c,2)
q.$flags&2&&A.E(q)
q[s]=r},
$S:0}
A.cM.prototype={}
A.h6.prototype={
a9(a,b,c,d){var s,r=null,q={},p=A.b5(A.yG(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.yZ(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.nj(q,this,p,o)
o.d=s
o.f=new A.nk(q,o,s)
return new A.bb(o,A.m(o).i("bb<1>")).a9(a,b,c,d)},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.nj.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a0(q,t.m).bu(new A.nl(p,r.b,s,r),s.gtO(),t.P)},
$S:0}
A.nl.prototype={
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
A.nk.prototype={
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
p.b=A.bc(r,"success",new A.vt(p,s),!1,q)
p.c=A.bc(r,"error",new A.vu(p,s),!1,q)
return o}}
A.vt.prototype={
$1(a){var s,r=this.a
r.B()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.az(s!=null)},
$S:2}
A.vu.prototype={
$1(a){var s=this.a
s.B()
s=s.d.error
if(s==null)s=a
this.b.aG(s)},
$S:2}
A.o_.prototype={
$1(a){this.a.az(this.c.a(this.b.result))},
$S:2}
A.o0.prototype={
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
$1(a){this.a.aG(new A.bk("IndexedDB open blocked"))},
$S:2}
A.pi.prototype={
$1(a){return A.b5(a[1])},
$S:157}
A.tW.prototype={
uf(){var s={}
s.dart=new A.tX(this).$0()
return s},
hR(a){return this.w0(a)},
w0(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a0(v.G.WebAssembly.instantiateStreaming(a,p.uf()),t.m),$async$hR)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)}}
A.tX.prototype={
$0(){var s=this.a.a,r=A.b5(v.G.Object),q=A.b5(r.create.apply(r,[null]))
q.error_log=A.cB(s.gw5())
q.localtime=A.bJ(s.gw3())
q.xOpen=A.zn(s.gxD())
q.xDelete=A.mX(s.gxs())
q.xAccess=A.fQ(s.gxj())
q.xFullPathname=A.fQ(s.gxz())
q.xRandomness=A.mX(s.gxF())
q.xSleep=A.bJ(s.gxK())
q.xCurrentTimeInt64=A.bJ(s.gxp())
q.xClose=A.cB(s.gxn())
q.xRead=A.fQ(s.gxH())
q.xWrite=A.fQ(s.gxS())
q.xTruncate=A.bJ(s.gxO())
q.xSync=A.bJ(s.gxM())
q.xFileSize=A.bJ(s.gxx())
q.xLock=A.bJ(s.gxB())
q.xUnlock=A.bJ(s.gxQ())
q.xCheckReservedLock=A.bJ(s.gxl())
q.xDeviceCharacteristics=A.cB(s.gih())
q.xFileControl=A.mX(s.gxv())
q.xSectorSize=A.cB(s.gij())
q["dispatch_()v"]=A.cB(s.guE())
q["dispatch_()i"]=A.cB(s.guz())
q.dispatch_update=A.zn(s.guC())
q.dispatch_xFunc=A.fQ(s.guK())
q.dispatch_xStep=A.fQ(s.guO())
q.dispatch_xInverse=A.fQ(s.guM())
q.dispatch_xValue=A.bJ(s.guQ())
q.dispatch_xFinal=A.bJ(s.guI())
q.dispatch_compare=A.zn(s.guG())
q.dispatch_busy=A.bJ(s.gux())
q.changeset_apply_filter=A.bJ(s.guv())
q.changeset_apply_conflict=A.mX(s.gut())
return q},
$S:27}
A.fl.prototype={}
A.nm.prototype={
hU(){var s=0,r=A.h(t.H),q=this,p,o
var $async$hU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.q($.u,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cB(new A.np(o))
new A.ag(p,t.h1).az(A.E7(o,t.m))
s=2
return A.a(p,$async$hU)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$hU,r)},
dG(a,b){return this.t7(a,b)},
t7(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.DD(),b)
o=A.G4(p)
s=2
return A.a(A.IZ(new A.no(a,o,p),t.mj),$async$dG)
case 2:s=3
return A.a(o.b.a,$async$dG)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dG,r)},
rB(a){return this.dG(new A.nn(a),"readwrite")}}
A.np.prototype={
$1(a){var s=A.b5(this.a.result)
if(J.t(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:20}
A.no.prototype={
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
A.nn.prototype={
$1(a){return this.mZ(a)},
mZ(a){var s=0,r=A.h(t.H),q=this,p,o,n
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
A.iJ.prototype={
og(a){var s=A.xj(new A.w3(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.xj(new A.w4(this))},
j8(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
rS(a){return this.j8(a,9007199254740992,0)},
rT(a,b){return this.j8(a,9007199254740992,b)},
hQ(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$hQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.D(t.N,t.S)
k=new A.el(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.m(),$async$hQ)
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
return A.f($async$hQ,r)},
hA(a){return this.ve(a)},
ve(a){var s=0,r=A.h(t.I),q,p=this,o
var $async$hA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cm(p.d.index("fileName").getKey(a),t.i),$async$hA)
case 3:q=o.ah(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
j9(a){return A.cm(this.d.get(a),t.B).aO(new A.w2(a),t.m)},
ed(a,b){return this.nR(a,b)},
nR(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ed=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.j9(a),$async$ed)
case 3:h=d
g=h.length
f=new A.ch(new Uint8Array(g),g)
e=new A.el(p.e.openCursor(p.rS(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.m(),$async$ed)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.v(A.w("Await moveNext() first"))
k=n.a(l.key)
j=A.ah(A.ev(k[1]))
if(j>=h.length){s=5
break}i=new A.w5(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.rX(A.b5(l.value)).aO(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ed,r)},
hs(a){return this.uc(a)},
uc(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hs=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
o=A
s=3
return A.a(A.cm(p.d.put({name:a,length:0}),t.i),$async$hs)
case 3:q=o.ah(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
aR(a,b){return this.xc(a,b)},
xc(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
s=2
return A.a(q.j9(a),$async$aR)
case 2:p=d
o=b.b
n=A.m(o).i("U<1>")
m=A.P(new A.U(o,n),n.i("o.E"))
B.c.aT(m)
s=3
return A.a(A.yC(new A.a_(m,new A.w6(new A.w7(q,a),b),A.a6(m).i("a_<1,y<~>>")),t.H),$async$aR)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.el(q.d.openCursor(a),t.R)
s=6
return A.a(l.m(),$async$aR)
case 6:s=7
return A.a(A.cm(l.gn().update({name:p.name,length:b.c}),t.X),$async$aR)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aR,r)},
da(a,b,c){return this.wZ(0,b,c)},
wZ(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$da=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
s=2
return A.a(q.j9(b),$async$da)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cm(q.e.delete(q.rT(b,B.b.K(c,4096)*4096)),t.X),$async$da)
case 5:case 4:o=new A.el(q.d.openCursor(b),t.R)
s=6
return A.a(o.m(),$async$da)
case 6:s=7
return A.a(A.cm(o.gn().update({name:p.name,length:c}),t.X),$async$da)
case 7:return A.e(null,r)}})
return A.f($async$da,r)},
hw(a){return this.ur(a)},
ur(a){var s=0,r=A.h(t.H),q=this,p
var $async$hw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.w("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.yC(A.l([A.cm(q.e.delete(q.j8(a,9007199254740992,0)),p),A.cm(q.d.delete(a),p)],t.iw),t.H),$async$hw)
case 2:return A.e(null,r)}})
return A.f($async$hw,r)}}
A.w3.prototype={
$0(){this.a.b.ap()},
$S:4}
A.w4.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aG(r)},
$S:4}
A.w2.prototype={
$1(a){if(a==null)throw A.b(A.aI(this.a,"fileId","File not found in database"))
else return a},
$S:160}
A.w5.prototype={
$1(a){var s=this.a
s.cC(s,this.b,J.bB(a,0,this.c))},
$S:161}
A.w7.prototype={
nw(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
$2(a,b){return this.nw(a,b)},
$S:162}
A.w6.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:163}
A.vF.prototype={
tv(a,b,c){B.e.cC(this.b.mE(a,new A.vG(this,a)),b,c)},
tS(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.K(q,4096)
o=B.b.aj(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.tv(p*4096,o,J.bB(B.e.ga5(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.vG.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.e.cC(s,0,J.bB(B.e.ga5(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:164}
A.mi.prototype={}
A.d9.prototype={
ex(a){var s=this
if(s.e||s.d.a==null)A.v(A.fk(10))
if(a.jM(s.x)){s.ck(!0)
return a.d.a}else return A.c6(null,t.H)},
ck(a){return this.tn(a)},
tn(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$ck=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gA(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.P(o,o.$ti.i("o.E"))
o.ah(0)
s=5
return A.a(p.d.rB(n).aQ(new A.pV(p,n,a)),$async$ck)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$ck,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.ex(new A.iH(new A.pW(),new A.ag(new A.q($.u,t.D),t.F)))
p.e=!0
p.ck(!1)
q=o
s=1
break}else{n=p.x
if(!n.gA(0)){q=n.ga3(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
dq(a,b){return this.pc(a,b)},
pc(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dq=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hA(b),$async$dq)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
eq(){var s=0,r=A.h(t.H),q=this,p
var $async$eq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.dG(new A.pU(q,p),"readonly"),$async$eq)
case 2:s=3
return A.a(A.Eq(p,t.H),$async$eq)
case 3:return A.e(null,r)}})
return A.f($async$eq,r)},
cp(){return this.ck(!1)},
ie(a,b){return this.w.d.G(a)?1:0},
kh(a,b){var s=this
s.w.d.E(0,a)
if(!s.y.E(0,a))s.ex(new A.iB(s,a,new A.ag(new A.q($.u,t.D),t.F)))},
ki(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Ao(p.b,"/")
s=p.w
r=s.d.G(o)?1:0
q=s.dc(new A.i9(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.ex(new A.ft(p,o,new A.ag(new A.q($.u,t.D),t.F)))
return new A.fD(new A.ma(p,q.a,o),0)},
kk(a){}}
A.pV.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.v(A.w("Future already completed"))
p.cb(null)}o.ck(this.c)},
$S:4}
A.pW.prototype={
$1(a){return this.n5(a)},
n5(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.pU.prototype={
$1(a){return this.n4(a)},
n4(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.hQ(),$async$$1)
case 2:m=c
l=q.a
l.z.F(0,m)
p=m.gaK(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.m()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.ed(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.ma.prototype={
ii(a,b){this.b.ii(a,b)},
gih(){return 0},
gij(){return 4096},
kg(){return this.b.d>=2?1:0},
ig(){},
fa(){return this.b.fa()},
kj(a){this.b.d=a
return null},
kl(a){},
mY(a,b){return 12},
fb(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.v(A.fk(10))
s.b.fb(a)
if(!r.y.C(0,s.c))r.ex(new A.iH(new A.w1(s,a),new A.ag(new A.q($.u,t.D),t.F)))},
km(a){this.b.d=a
return null},
eb(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.v(A.fk(10))
s=m.c
if(l.y.C(0,s)){m.b.eb(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.ch(new Uint8Array(0),0)
q=J.bB(B.e.ga5(r.a),0,r.b)
m.b.eb(a,b)
p=new Uint8Array(a.length)
B.e.cC(p,0,a)
o=A.l([],t.p8)
n=$.u
o.push(new A.mi(b,p))
l.ex(new A.fM(l,s,q,o,new A.ag(new A.q(n,t.D),t.F)))},
$iba:1,
$iim:1}
A.w1.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dq(a,o.c),$async$$1)
case 3:q=n.da(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:24}
A.aX.prototype={
jM(a){a.h6(a.c,this,!1)
return!0}}
A.iH.prototype={
aN(a){return this.w.$1(a)}}
A.iB.prototype={
jM(a){var s,r,q,p
if(!a.gA(0)){s=a.ga3(0)
for(r=this.x;s!=null;)if(s instanceof A.iB)if(s.x===r)return!1
else s=s.geW()
else if(s instanceof A.fM){q=s.geW()
if(s.x===r){p=s.a
p.toString
p.jj(A.m(s).i("aT.E").a(s))}s=q}else if(s instanceof A.ft){if(s.x===r){r=s.a
r.toString
r.jj(A.m(s).i("aT.E").a(s))
return!1}s=s.geW()}else break}a.h6(a.c,this,!1)
return!0},
aN(a){return this.wQ(a)},
wQ(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dq(a,o),$async$aN)
case 2:n=c
p.z.E(0,o)
s=3
return A.a(a.hw(n),$async$aN)
case 3:return A.e(null,r)}})
return A.f($async$aN,r)}}
A.ft.prototype={
aN(a){return this.wP(a)},
wP(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hs(p),$async$aN)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aN,r)}}
A.fM.prototype={
jM(a){var s,r=a.b===0?null:a.ga3(0)
for(s=this.x;r!=null;)if(r instanceof A.fM)if(r.x===s){B.c.F(r.z,this.z)
return!1}else r=r.geW()
else if(r instanceof A.ft){if(r.x===s)break
r=r.geW()}else break
a.h6(a.c,this,!1)
return!0},
aN(a){return this.wR(a)},
wR(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.vF(m,A.D(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.A)(m),++o){n=m[o]
l.tS(n.a,n.b)}k=a
s=3
return A.a(q.w.dq(a,q.x),$async$aN)
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
ie(a,b){var s=$.yi().h(0,a)
if(s==null)return this.e.d.G(a)?1:0
else return this.bF().bk(s)?1:0},
kh(a,b){var s=$.yi().h(0,a)
if(s==null){this.e.d.E(0,a)
return null}else this.bF().eQ(s,!1)},
ki(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dc(a,b)
s=$.yi().h(0,p)
if(s==null)return q.e.dc(a,b)
r=q.bF()
if(!r.bk(s))if((b&4)!==0){r.cY(s).truncate(0)
r.eQ(s,!0)}else throw A.b(B.d5)
return new A.fD(new A.mz(q,s,(b&8)!==0),0)},
kk(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cu(a,b){return this.wf(a,b)},
ct(a){return this.cu(a,!1)},
wf(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.t4(a,b)
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
n=q.d=new A.wk(new Uint8Array(2),l,p,o)
if(k){n.eQ(B.aO,p.getSize()>0)
n.eQ(B.aP,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cu,r)}}
A.t4.prototype={
nq(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.nq(a)},
$S:165}
A.mz.prototype={
mG(a,b){return A.Ak(this.a.bF().cY(this.b),a,{at:b})},
kg(){return this.d>=2?1:0},
ig(){var s=this.a,r=this.b
s.bF().cY(r).flush()
if(this.c)s.bF().eQ(r,!1)},
fa(){return this.a.bF().cY(this.b).getSize()},
kj(a){this.d=a},
kl(a){this.a.bF().cY(this.b).flush()},
fb(a){this.a.bF().cY(this.b).truncate(a)},
km(a){this.d=a},
eb(a,b){if(A.Al(this.a.bF().cY(this.b),a,{at:b})<a.length)throw A.b(B.d7)}}
A.wk.prototype={
bk(a){var s=this.a
A.Ak(this.b,s,{at:0})
return s[a.a]!==0},
eQ(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.E(s)
s[a.a]=r
A.Al(this.b,s,{at:0})},
cY(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.tQ.prototype={
od(a,b){var s=this,r=s.c
r.a!==$&&A.yf()
r.a=s
r=t.S
A.vH(new A.tR(s),r)
A.vH(new A.tS(s),r)
s.r=A.vH(new A.tT(s),r)
s.w=A.vH(new A.tU(s),r)},
dJ(a,b){var s=J.K(a),r=this.d.dart_sqlite3_malloc(s.gl(a)+b),q=A.bH(this.b.buffer,0,null)
B.e.ar(q,r,r+s.gl(a),a)
B.e.jF(q,r+s.gl(a),r+s.gl(a)+b,0)
return r},
cn(a){return this.dJ(a,0)},
ma(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
m8(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
m9(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.tR.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.tS.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.tT.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.tU.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.he.prototype={}
A.ry.prototype={
oa(a){var s,r=this,q=r.a
q.start()
r.c=A.bc(q,"message",new A.rC(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.jr()
q.toString
A.io(q,s,null,null,!1).aO(new A.rD(r),t.P)}},
iW(a){return this.q3(a)},
q3(a){var s=0,r=A.h(t.H),q=this
var $async$iW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Io(a,new A.rz(q),q.gvC(),new A.rA(q),new A.rB(q))
return A.e(null,r)}})
return A.f($async$iW,r)},
fh(a,b,c){return this.nJ(a,b,c,c)},
nJ(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fh=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.DY(null))
o=p.e++
n=new A.q($.u,t.a7)
p.f.j(0,o,new A.ag(n,t.h1))
a.i=o
p.a.postMessage(a,A.fW(a))
s=3
return A.a(n,$async$fh)
case 3:m=f
if(J.t(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Fd(m))
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
r7(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.B()
s=q.d
if(s!=null)s.B()
for(s=q.f,r=new A.aR(s,s.r,s.e,A.m(s).i("aR<2>"));r.m();)r.d.aG(new A.ha(a))
s.ah(0)
p.ap()},
lg(){return this.r7(null)}}
A.rC.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lg()
return}this.a.iW(A.b5(a.data))},
$S:2}
A.rD.prototype={
$1(a){this.a.lg()
a.a.ap()},
$S:166}
A.rB.prototype={
$1(a){var s=this.a.f.E(0,a.i)
if(s!=null)s.az(a)},
$S:20}
A.rA.prototype={
$1(a){return this.nj(a)},
nj(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.uB(a1,m.signal)
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
if(b instanceof A.cP){h=A.Ei(b)
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
A.rz.prototype={
$1(a){var s=this.a.r.E(0,a.i)
if(s!=null)s.abort()},
$S:20}
A.ha.prototype={
k(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iJ:1}
A.oD.prototype={
c4(a){return this.w1(a)},
w1(a){var s=0,r=A.h(t.n),q
var $async$c4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.tZ(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c4,r)}}
A.jT.prototype={}
A.ol.prototype={}
A.ef.prototype={}
A.k8.prototype={
hS(){var s=0,r=A.h(t.H),q=this
var $async$hS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.ct(q.b),$async$hS)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hS,r)},
k5(){var s=0,r=A.h(t.H),q=this
var $async$k5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$k5,r)}}
A.pv.prototype={
wT(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
pg(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.u5.prototype={
$1(a){var s=new A.q($.u,t.D),r=new A.cF(new A.ag(s,t.F))
this.a.a=r
this.b.az(r)
return A.Er(s)},
$S:168}
A.u6.prototype={
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
gu3(){if(this.c.a)return!1
return!this.d||this.f!=null},
dk(a){return this.ol(a)},
ol(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dk=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.jr()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.io(n,o.a,null,o.gq9(),!0),$async$dk)
case 6:m=c
s=7
return A.a(A.io(n,o.b,a,null,!1),$async$dk)
case 7:l=c
j=o.e
j=j==null?null:j.hS()
s=8
return A.a(j instanceof A.q?j:A.bd(j,t.H),$async$dk)
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
return A.f($async$dk,r)},
qa(){this.mH()},
jS(a,b,c){return this.c.i9(new A.oR(this,a,b,c),b,c)},
mH(){return this.c.kf(new A.oS(this),t.H)}}
A.oR.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dk(r.c).aO(new A.oQ(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.oQ.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.oS.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.k5()
s.a.ap()
r.a.ap()
p.f=null}},
$S:4}
A.hL.prototype={
i9(a,b,c){return this.xb(a,b,c,c)},
kf(a,b){return this.i9(a,null,b)},
xb(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$i9=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.t(g?null:b.aborted,!0))throw A.b(B.ae)
h.a=!1
o=new A.qR(h,p)
if(!p.a){h.a=p.a=!0
q=A.hs(a,c).aQ(o)
s=1
break}else{n={}
m=new A.q($.u,c.i("q<0>"))
l=new A.ag(m,c.i("ag<0>"))
n.a=null
h=new A.qQ(h,n,l,a,c)
if(!g)n.a=A.bc(b,"abort",new A.qP(n,p,l,h),!1,t.m)
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
return A.f($async$i9,r)}}
A.qR.prototype={
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
A.qQ.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.B()
r.c.az(A.hs(r.d,r.e))},
$S:0}
A.qP.prototype={
$1(a){var s,r=this
r.a.a.B()
s=r.c
if((s.a.a&30)===0){r.b.b.E(0,r.d)
s.aG(B.ae)}},
$S:2}
A.dQ.prototype={
gmQ(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
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
A.p8.prototype={
$1(a){if(a!=null)return A.M(a)
return null},
$S:170}
A.kx.prototype={
ab(){return"MessageType."+this.b}}
A.t_.prototype={
uB(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hG(a,b)
case"connect":return p.jG(a,b)
case"custom":return p.dS(a,b)
case"fileSystemExists":return p.eJ(a,b)
case"fileSystemFlush":return p.eK(a,b)
case"fileSystemAccess":return p.eI(a,b)
case"runQuery":return p.hK(a,b)
case"exclusiveLock":return p.hF(a,b)
case"releaseLock":s=p.br(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.v(A.w("Lock to be released is not active."))
q.b.ap()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hD(a,b)
case"openAdditionalConnection":return p.hH(a,b)
case"updateRequest":return p.hL(a,b)
case"rollbackRequest":return p.hJ(a,b)
case"commitRequest":return p.hE(a,b)
case"dedicatedCompatibilityCheck":return p.ds(a,b)
case"sharedCompatibilityCheck":return p.ds(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.ds(a,b)
default:r=A.ew(new A.bC(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.q($.u,t.hl)
q.ca(r)
return q}}}
A.d5.prototype={
ab(){return"FileSystemImplementation."+this.b}}
A.cg.prototype={
ab(){return"TypeCode."+this.b},
ui(a){var s=null
switch(this.a){case 0:s=A.v(A.O("Unsupported type code",null))
break
case 1:a=A.ah(A.ev(a))
s=a
break
case 2:s=A.zb(t.bJ.a(a).toString(),null)
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
m2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.ao:B.aS[k]
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
sl(a,b){this.lP()},
h(a,b){var s=this.c[b],r=s>=8?B.ao:B.aS[s]
return r.ui(this.a[b])},
j(a,b,c){this.lP()},
lP(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.xw.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:20}
A.nY.prototype={
$1(a){this.a.az(this.c.a(this.b.result))},
$S:2}
A.nZ.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.o1.prototype={
$1(a){this.a.az(this.c.a(this.b.result))},
$S:2}
A.o2.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.o3.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aG(s)},
$S:2}
A.ru.prototype={
uT(){var s,r,q,p
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
A.ho.prototype={
ab(){return"FileType."+this.b}}
A.dj.prototype={
ab(){return"StorageMode."+this.b}}
A.f5.prototype={
k(a){return"Remote error: "+this.a},
$iJ:1}
A.d2.prototype={}
A.xi.prototype={
$1(a){return A.b5(a.data)},
$S:172}
A.iX.prototype={
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
return A.a(q.a.eC(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
lH(a){var s=new v.G.AbortController()
a.onabort=A.xj(new A.vm(s))
this.w.push(s)
return s},
kc(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gu3()){r=p.lH(b)
o=s.jS(c,r.signal,d).aQ(new A.vq(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.w("Requested operation on inactive lock state."))}if(o==null)o=A.hs(c,d)
q=p.a.z
return q instanceof A.d9?o.aQ(q.gvh()):o},
wc(a){var s=this,r=s.lH(a),q=new A.q($.u,t.hy),p=new A.aC(q,t.ho),o=t.H
A.yB(s.a.f.jS(new A.vn(s,p),r.signal,o),new A.vo(p),o,t.K)
return q.aQ(new A.vp(s,r))}}
A.vm.prototype={
$0(){return this.a.abort()},
$S:0}
A.vq.prototype={
$0(){B.c.E(this.a.w,this.b)},
$S:4}
A.vn.prototype={
$0(){var s=this.a,r=s.r++,q=new A.q($.u,t.D)
s.f=new A.az(r,new A.aC(q,t.h))
this.b.az(r)
return q},
$S:3}
A.vo.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bt(a,b)},
$S:10}
A.vp.prototype={
$0(){B.c.E(this.a.w,this.b)},
$S:4}
A.iz.prototype={
of(a,b,c){this.b.a.aQ(new A.v6(this))},
ds(a,b){return this.pp(a,b)},
pp(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ds=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.m5(a),$async$ds)
case 3:q={r:d.gmQ(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ds,r)},
jG(a,b){return this.vp(a,b)},
vp(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$jG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glc()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.fW(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jG,r)},
dS(a,b){return this.vq(a,b)},
vq(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$dS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.kY(l)
n=a.r
s=7
return A.a(o.a.gc7(),$async$dS)
case 7:s=6
return A.a(d.cq(p,new A.ol(n)),$async$dS)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cq(p,new A.jT(a)),$async$dS)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dS,r)},
hG(a,b){return this.vE(a,b)},
vE(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kf(new A.vb(p,a),t.m),$async$hG)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
hK(a,b){return this.vI(a,b)},
vI(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.a
s=3
return A.a(n.gc7(),$async$hK)
case 3:m=d
q=o.kc(a.z,b,new A.ve(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
hF(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.br(a).wc(b),$async$hF)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
hE(a,b){return this.vo(a,b)},
vo(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.di(n,new A.v8(p,o),a),$async$hE)
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
return A.f($async$hE,r)},
hJ(a,b){return this.vH(a,b)},
vH(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.di(n,new A.vd(p,o),a),$async$hJ)
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
return A.f($async$hJ,r)},
hL(a,b){return this.vK(a,b)},
vK(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.di(n,new A.vg(p,o),a),$async$hL)
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
hH(a,b){return this.vF(a,b)},
vF(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.br(a).a;++m.w
s=3
return A.a(A.xz(),$async$hH)
case 3:o=d
n=o.a
p.w.kD(o.b).x.push(A.Bi(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
hD(a,b){return this.vn(a,b)},
vn(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
B.c.E(p.x,o)
s=3
return A.a(o.p(),$async$hD)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)},
eK(a,b){return this.vx(a,b)},
vx(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$eK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.br(a).a.gcA(),$async$eK)
case 3:o=d
s=o instanceof A.d9?4:5
break
case 4:s=6
return A.a(o.ck(!1),$async$eK)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eK,r)},
eI(a,b){return this.vv(a,b)},
vv(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$eI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=B.aT[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcA(),$async$eI)
case 4:s=3
return A.a(l.kc(null,k,new j.v9(d,n,m,a),t.m),$async$eI)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eI,r)},
eJ(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.br(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcA(),$async$eJ)
case 4:s=3
return A.a(n.kc(null,m,new l.va(d,a),t.y),$async$eJ)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eJ,r)},
di(a,b,c){return this.nU(a,b,c)},
nU(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$di=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$di)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$di,r)},
vD(a){},
cU(a){var s=0,r=A.h(t.X),q,p=this
var $async$cU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fh({r:a,z:null,i:0,d:null,t:"custom"},B.cp,t.m),$async$cU)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cU,r)},
kY(a){return B.c.mm(this.x,new A.v5(a))},
br(a){var s=a.d
if(s!=null)return this.kY(s)
else throw A.b(A.O("Request requires database id",null))}}
A.v6.prototype={
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
A.vb.prototype={
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
m=i.vf(h.d,A.El(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcA():m.gc7(),$async$$0)
case 8:l=A.Bi(m,null)
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
return A.a(m.eC(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:173}
A.ve.prototype={
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
if(k.r){n=s.nE(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ah(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.v6(l,k.s,q)
s=o.d
return A.CL(s.sqlite3_get_autocommit(p)!==0,m,A.ah(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:27}
A.v8.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gc7(),$async$$0)
case 3:q=b.a.oH().gcD().aW(new A.v7(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:63}
A.v7.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.fW(s))},
$S:64}
A.vd.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gc7(),$async$$0)
case 3:q=b.a.t6().gcD().aW(new A.vc(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:63}
A.vc.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.fW(s))},
$S:64}
A.vg.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gc7(),$async$$0)
case 3:q=b.a.tw().gcD().aW(new A.vf(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:176}
A.vf.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.fW(s))},
$S:177}
A.v9.prototype={
$0(){var s,r,q,p=this,o=p.a.dc(new A.i9(A.BW(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fb(s.byteLength)
o.eb(A.bH(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fa()
r=new Uint8Array(q)
o.ii(r,0)
q={r:t.a.a(J.DJ(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.ig()}},
$S:27}
A.va.prototype={
$0(){return this.a.ie(A.BW(B.aT[this.b.f]),0)===1},
$S:42}
A.v5.prototype={
$1(a){return a.b===this.a},
$S:178}
A.jZ.prototype={
gcA(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.hs(new A.oV(p),t.H):o,$async$gcA)
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
return A.a(o==null?p.x=A.hs(new A.oU(p),t.u):o,$async$gc7)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gc7,r)},
eC(){var s=0,r=A.h(t.H),q=this
var $async$eC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$eC)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eC,r)},
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
if(j!=null)j.uT()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.zL()
A.yy(m)
k=l.a.get(m)
if(k==null)A.v(A.w("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.q?j:A.bd(j,t.H),$async$p)
case 6:q.f.mH()
return A.e(null,r)}})
return A.f($async$p,r)},
lp(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.E(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.az(s,!0)
p=a.hY(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.E(0,new A.U(n,A.m(n).i("U<1>")).gD(0)).p()
n.j(0,p.d,p)
return new A.az(p,!0)}return new A.az(p,!1)},
v6(a,b,c){var s,r,q
if(c.gl(0)===0)return a.aB(b,B.y)
else{s=null
r=null
q=this.lp(a,b)
s=q.a
r=q.b
try{s.jE(new A.jU(c.gu1()))}finally{if(r)s.d6()
else s.p()}}},
nE(a,b,c){var s,r=null,q=null,p=this.lp(a,b)
r=p.a
q=p.b
try{s=A.Fe(r,c)
return s}finally{if(q)r.d6()
else r.p()}}}
A.oV.prototype={
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
return A.a(A.t3("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gdN()
s=3
break
case 5:case 6:s=10
return A.a(A.k9("drift_db/"+l.c,k===B.ai,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gdN()
s=3
break
case 7:s=11
return A.a(A.kf(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gdN()
s=3
break
case 8:l.z=A.yE("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.oU.prototype={
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
o.mr()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.dJ(B.f.v(n.a),1),n,0)
if(m===0)A.v(A.w("could not register vfs"))
$.zL().j(0,n,m)
s=5
return A.a(l.f.jS(new A.oT(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:65}
A.oT.prototype={
$0(){var s=this.a
return s.a.b.hV(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:65}
A.ul.prototype={
glc(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.nN()
r.Q!==$&&A.ye()
r.Q=s
q=s}return q},
dT(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$dT=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bZ(A.bL(A.H_(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.m(),$async$dT)
case 7:if(!b){s=6
break}m=h.gn()
s=J.t(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.he(i.port,i.lockName,null)
n.kD(l)
s=9
break
case 10:s=A.IJ(m.t)?11:12
break
case 11:s=13
return A.a(n.m5(m),$async$dT)
case 13:k=b
j.postMessage(k.gmQ())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.B(),$async$dT)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dT,r)},
kD(a){var s=this,r=A.FW(a,s.d++,s)
s.c.push(r)
r.b.a.aQ(new A.um(s,r))
return r},
m5(a){return this.x.kf(new A.un(this,a),t.p6)},
c4(a){return this.w2(a)},
w2(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
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
case 4:o=A.yB(q.b.c4(m),new A.uo(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$c4)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$c4,r)},
vf(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aR(s,s.r,s.e,A.m(s).i("aR<2>"));r.m();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ai||b===B.aN
o=A.yK(t.cj)
n=c===0?null:new A.ru(c,A.hF(null,null,t.N,t.fw))
n=new A.jZ(this,r,a,b,d,new A.jY(q+"-outer",q,new A.hL(o),p),n)
s.j(0,r,n)
return n}}
A.um.prototype={
$0(){var s=this.a,r=s.c
B.c.E(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.un.prototype={
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
case 10:h=p.a.glc()
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
case 15:e=b.E4(a.b5(a1.data))
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
break}i.u(0,new A.az(B.b6,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.xv(c),$async$$0)
case 23:if(a1)i.u(0,new A.az(B.b7,c))
case 22:d=A.P(i,i.$ti.c)
q=new A.dQ(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:180}
A.uo.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:181}
A.j8.prototype={}
A.m1.prototype={
gmq(){return new A.fw(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.mx.prototype={
gmq(){return new A.cY(new A.wz(this),t.k8)},
p(){}}
A.wz.prototype={
$1(a){var s=A.l([],t.E),r=A.l([],t.dw)
r.push(A.bc(this.a.a,"connect",new A.ww(new A.wA(s,r,a)),!1,t.m))
a.r=new A.wx(r)},
$S:182}
A.wA.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bc(a,"message",new A.wy(this.c),!1,t.m))},
$S:2}
A.wy.prototype={
$1(a){this.a.tR(a)},
$S:2}
A.ww.prototype={
$1(a){var s,r=a.ports
r=J.I(t.ip.b(r)?r:new A.bD(r,A.a6(r).i("bD<1,L>")))
s=this.a
while(r.m())s.$1(r.gn())},
$S:2}
A.wx.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].B()},
$S:4}
A.m2.prototype={
nN(){var s=v.G
if(!("Worker" in s))return null
return new A.vA(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.vA.prototype={}
A.lh.prototype={
gfj(){return A.M(this.c)}}
A.tl.prototype={
gjR(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
il(a){var s,r=this,q=r.d=J.DM(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gM()
return s},
mi(a,b){var s
if(this.il(a))return
if(b==null)if(a instanceof A.eS)b="/"+a.a+"/"
else{s=J.ap(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.l4(b)},
eG(a){return this.mi(a,null)},
va(){if(this.c===this.b.length)return
this.l4("no more input")},
v5(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.v(A.aO("position must be greater than or equal to 0."))
else if(c>n.length)A.v(A.aO("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.v(A.aO("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.t5(s,r,new Uint32Array(q))
p.ob(new A.c4(n),s)
o=c+b
if(o>q)A.v(A.aO("End "+o+u.D+p.gl(0)+"."))
else if(c<0)A.v(A.aO("Start may not be negative, was "+c+"."))
throw A.b(new A.lh(n,a,new A.fx(p,c,o)))},
l4(a){this.v5("expected "+a+".",0,this.c)}}
A.fi.prototype={
gl(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Ap(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Ap(b,this))
s=this.a
s.$flags&2&&A.E(s)
s[b]=c},
sl(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.E(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.kV(b)
B.e.ar(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.tu(q)
q=r.a
s=r.b++
q.$flags&2&&A.E(q)
q[s]=b},
kV(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
tu(a){var s=this.kV(null)
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
A.yw.prototype={}
A.fw.prototype={
a9(a,b,c,d){return A.bc(this.a,this.b,a,!1,this.$ti.c)},
bI(a,b,c){return this.a9(a,null,b,c)}}
A.iF.prototype={
B(){var s=this,r=A.c6(null,t.H)
if(s.b==null)return r
s.jk()
s.d=s.b=null
return r},
hT(a){var s,r=this
if(r.b==null)throw A.b(A.w("Subscription has been canceled."))
r.jk()
s=A.Cl(new A.vE(a),t.m)
s=s==null?null:A.cB(s)
r.d=s
r.ji()},
bm(){if(this.b==null)return;++this.a
this.jk()},
b9(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.ji()},
ji(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jk(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibl:1}
A.vD.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.vE.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.dc.prototype
s.o_=s.k
s=A.bt.prototype
s.nW=s.ms
s.nX=s.mt
s.nZ=s.mv
s.nY=s.mu
s=A.aP.prototype
s.im=s.aw
s.kA=s.aE
s.kB=s.aL
s=A.cW.prototype
s.o2=s.kT
s.o3=s.l7
s.o4=s.lE
s=A.F.prototype
s.kz=s.af
s=A.ar.prototype
s.ky=s.u0
s=A.iY.prototype
s.o5=s.p
s=A.jF.prototype
s.kx=s.hB
s=A.c3.prototype
s.nV=s.hx
s=A.fa.prototype
s.o1=s.X
s.o0=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"H9","Ez",66)
r(A,"Hm","F1",9)
q(A,"HS","FH",18)
q(A,"HT","FI",18)
q(A,"HU","FJ",18)
q(A,"HV","Ho",23)
r(A,"Co","HK",0)
q(A,"HW","Hp",22)
s(A,"HX","Hr",11)
r(A,"xs","Hq",0)
p(A,"I1",5,null,["$5"],["HE"],184,0)
p(A,"I6",4,null,["$1$4","$4"],["xn",function(a,b,c,d){return A.xn(a,b,c,d,t.z)}],185,0)
p(A,"I8",5,null,["$2$5","$5"],["xo",function(a,b,c,d,e){var i=t.z
return A.xo(a,b,c,d,e,i,i)}],186,0)
p(A,"I7",6,null,["$3$6"],["zq"],187,0)
p(A,"I4",4,null,["$1$4","$4"],["Ca",function(a,b,c,d){return A.Ca(a,b,c,d,t.z)}],188,0)
p(A,"I5",4,null,["$2$4","$4"],["Cb",function(a,b,c,d){var i=t.z
return A.Cb(a,b,c,d,i,i)}],189,0)
p(A,"I3",4,null,["$3$4","$4"],["C9",function(a,b,c,d){var i=t.z
return A.C9(a,b,c,d,i,i,i)}],190,0)
p(A,"I_",5,null,["$5"],["HD"],191,0)
p(A,"I9",4,null,["$4"],["xp"],192,0)
p(A,"HZ",5,null,["$5"],["HC"],193,0)
p(A,"HY",5,null,["$5"],["HB"],194,0)
p(A,"I2",4,null,["$4"],["HF"],195,0)
p(A,"I0",5,null,["$5"],["C8"],196,0)
var j
o(j=A.ei.prototype,"gek","bB",0)
o(j,"gel","bC",0)
n(A.ej.prototype,"gua",0,1,null,["$2","$1"],["bt","aG"],56,0,0)
m(A.q.prototype,"giy","oI",11)
n(j=A.dx.prototype,"gtO",0,1,null,["$2","$1"],["bG","tP"],56,0,0)
l(j,"goq","aw",13)
m(j,"goo","aE",11)
o(j,"goE","aL",0)
o(j=A.ds.prototype,"gek","bB",0)
o(j,"gel","bC",0)
o(j=A.aP.prototype,"gek","bB",0)
o(j,"gel","bC",0)
o(A.fv.prototype,"glm","rq",0)
l(j=A.bZ.prototype,"gri","rj",13)
m(j,"grm","rn",11)
o(j,"grk","rl",0)
o(j=A.fy.prototype,"gek","bB",0)
o(j,"gel","bC",0)
l(j,"giM","iN",13)
m(j,"giQ","iR",155)
o(j,"giO","iP",0)
o(j=A.fE.prototype,"gek","bB",0)
o(j,"gel","bC",0)
l(j,"giM","iN",13)
m(j,"giQ","iR",11)
o(j,"giO","iP",0)
s(A,"zu","GU",35)
q(A,"zv","GV",39)
s(A,"Ie","EE",66)
q(A,"Ij","GY",40)
k(j=A.lT.prototype,"gtN","u",13)
o(j,"gdN","p",0)
q(A,"Cu","IB",39)
s(A,"Ct","IA",35)
q(A,"Ik","FA",7)
p(A,"IQ",2,null,["$1$2","$2"],["CJ",function(a,b){return A.CJ(a,b,t.o)}],197,0)
m(j=A.k0.prototype,"gv4","Y",35)
l(j,"gvL","a8",39)
l(j,"gvU","vV",23)
q(A,"Ic","DX",7)
q(A,"zx","Ee",7)
r(A,"IM","GW",9)
o(A.lW.prototype,"gvj","mn",0)
r(A,"Kk","GX",9)
l(A.kO.prototype,"gww","wx",8)
o(A.hT.prototype,"guS","hx",0)
o(j=A.c3.prototype,"gN","av",0)
o(j,"gvP","hN","y<c3.T>()")
l(j,"grg","rh",41)
o(j,"glR","ey",3)
q(A,"Is","Ai",198)
o(j=A.kL.prototype,"gro","rp",0)
l(j,"grr","rs",76)
q(A,"J_","EZ",43)
q(A,"Ig","ys",200)
l(j=A.li.prototype,"gvA","vB",41)
l(j,"gvy","vz",86)
o(j,"grf","j5",0)
q(A,"J6","Fr",43)
q(A,"Cs","bM",14)
q(A,"Cr","n4",14)
r(A,"IL","HN",201)
q(A,"Ja","FE",148)
m(j=A.lC.prototype,"gpq","iK",1)
m(j,"gpl","cL",1)
m(j=A.lA.prototype,"gpy","fC",1)
m(j,"gpw","fB",1)
m(j,"gpA","fD",1)
m(j,"gps","fz",1)
m(j,"gpu","fA",1)
m(j,"gpC","iL",1)
m(j=A.lB.prototype,"gq_","fL",1)
m(j,"gq5","eh",1)
m(j,"gq7","fM",1)
m(j=A.lE.prototype,"gpT","iT",1)
m(j,"gpV","iU",1)
m(j,"gpX","fJ",1)
m(j,"gpR","iS",1)
m(j,"gpJ","fG",1)
m(j,"gpL","dt",1)
m(j,"gpN","fH",1)
m(j,"gpH","fF",1)
m(j,"gpF","fE",1)
m(j,"gpP","fI",1)
m(j=A.lF.prototype,"gq1","iV",1)
m(j,"gpj","iJ",1)
m(j,"gph","fv",1)
m(j,"gqR","h2",1)
m(j,"gqP","h1",1)
m(j,"gqb","fN",1)
m(j,"gpn","fw",1)
m(j,"gqh","fO",1)
m(j=A.lG.prototype,"gqr","dv",1)
m(j,"gqv","fT",1)
m(j,"gqj","fP",1)
m(j,"gql","fQ",1)
m(j,"gqn","fR",1)
m(j,"gqp","fS",1)
m(j,"gqx","fU",1)
m(j,"gqt","iX",1)
m(j=A.lH.prototype,"gqz","fV",1)
m(j,"gqD","fX",1)
m(j,"gqF","fY",1)
m(j,"gqN","h0",1)
m(j,"gqL","ei",1)
m(j,"gqH","fZ",1)
m(j,"gqB","fW",1)
m(j,"gqJ","h_",1)
m(j=A.lI.prototype,"gqX","h5",1)
m(j,"gqV","h4",1)
m(j,"gqT","h3",1)
l(j=A.jX.prototype,"gw5","w6",8)
m(j,"gw3","w4",136)
n(j,"gxD",0,5,null,["$5"],["xE"],137,0,0)
n(j,"gxs",0,3,null,["$3"],["xt"],138,0,0)
n(j,"gxj",0,4,null,["$4"],["xk"],58,0,0)
n(j,"gxz",0,4,null,["$4"],["xA"],58,0,0)
n(j,"gxF",0,3,null,["$3"],["xG"],140,0,0)
m(j,"gxK","xL",59)
m(j,"gxp","xq",59)
l(j,"gxn","xo",36)
n(j,"gxH",0,4,null,["$4"],["xI"],60,0,0)
n(j,"gxS",0,4,null,["$4"],["xT"],60,0,0)
m(j,"gxO","xP",144)
m(j,"gxM","xN",19)
m(j,"gxx","xy",19)
m(j,"gxB","xC",19)
m(j,"gxQ","xR",19)
m(j,"gxl","xm",19)
l(j,"gih","xu",36)
n(j,"gxv",0,3,null,["$3"],["xw"],146,0,0)
l(j,"gij","xJ",36)
l(j,"guE","uF",18)
l(j,"guz","uA",147)
n(j,"guC",0,5,null,["$5"],["uD"],202,0,0)
n(j,"guK",0,4,null,["$4"],["uL"],38,0,0)
n(j,"guO",0,4,null,["$4"],["uP"],38,0,0)
n(j,"guM",0,4,null,["$4"],["uN"],38,0,0)
m(j,"guQ","uR",61)
m(j,"guI","uJ",61)
n(j,"guG",0,5,null,["$5"],["uH"],151,0,0)
m(j,"gux","uy",152)
m(j,"guv","uw",153)
n(j,"gut",0,3,null,["$3"],["uu"],154,0,0)
o(j=A.d9.prototype,"gdN","p",3)
o(j,"gvh","cp",3)
o(A.f8.prototype,"gdN","p",0)
o(A.jY.prototype,"gq9","qa",0)
l(A.dR.prototype,"gu1","m2",171)
l(A.iz.prototype,"gvC","vD",2)
q(A,"Cq","CA",135)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.yI,J.kh,A.i3,J.eH,A.vs,A.v2,A.o,A.jN,A.dN,A.Q,A.a8,A.F,A.t1,A.ae,A.kv,A.dp,A.k6,A.lk,A.l5,A.k4,A.lz,A.hp,A.lq,A.ii,A.er,A.hK,A.eK,A.fz,A.cb,A.tD,A.kJ,A.hl,A.iV,A.q5,A.bS,A.aR,A.kr,A.eS,A.fC,A.lM,A.fd,A.wH,A.lU,A.mI,A.ca,A.m7,A.mF,A.iZ,A.ir,A.lO,A.iK,A.mD,A.ad,A.a4,A.aP,A.ix,A.ll,A.iI,A.ej,A.bX,A.q,A.lN,A.dx,A.mE,A.it,A.lK,A.m3,A.vB,A.dw,A.fv,A.bZ,A.iE,A.x6,A.x8,A.x7,A.x4,A.x5,A.x3,A.x0,A.mT,A.x_,A.wZ,A.x2,A.x1,A.mS,A.mU,A.mR,A.fN,A.iq,A.m8,A.wi,A.dv,A.me,A.aT,A.mh,A.mH,A.mf,A.lg,A.jP,A.ar,A.lQ,A.nw,A.lP,A.jO,A.my,A.ek,A.wf,A.wI,A.mJ,A.cZ,A.ay,A.m6,A.aN,A.as,A.vC,A.kK,A.ib,A.m5,A.b8,A.kg,A.S,A.R,A.mC,A.ic,A.l_,A.ab,A.j5,A.tN,A.bY,A.k7,A.kI,A.w8,A.w9,A.k5,A.Z,A.k1,A.hz,A.e1,A.fJ,A.fB,A.hJ,A.k0,A.kH,A.lr,A.c5,A.eM,A.pw,A.nJ,A.hI,A.i6,A.qs,A.i5,A.t0,A.om,A.oC,A.vr,A.dM,A.jE,A.jF,A.ns,A.kB,A.eW,A.lc,A.aV,A.a1,A.nG,A.nH,A.nI,A.p9,A.k2,A.nW,A.hi,A.eV,A.ld,A.rs,A.mg,A.lW,A.fr,A.kO,A.rV,A.aQ,A.d8,A.eR,A.dV,A.bU,A.o7,A.bQ,A.lV,A.bu,A.wu,A.c3,A.uE,A.nu,A.eI,A.jK,A.le,A.hn,A.pc,A.b7,A.qc,A.mj,A.lm,A.nq,A.kL,A.rb,A.hW,A.fF,A.rj,A.wB,A.dW,A.d6,A.kc,A.co,A.d7,A.dk,A.r9,A.nf,A.br,A.o9,A.li,A.cI,A.e6,A.qz,A.de,A.kw,A.wp,A.wn,A.qV,A.nt,A.hH,A.i1,A.r_,A.kU,A.rE,A.aU,A.rN,A.b9,A.ff,A.fe,A.tn,A.bm,A.fc,A.cs,A.f4,A.i0,A.cl,A.tp,A.i_,A.ih,A.tA,A.ct,A.cr,A.e7,A.tF,A.oD,A.ef,A.lX,A.cz,A.tJ,A.fn,A.ly,A.u4,A.hh,A.hZ,A.kX,A.W,A.fo,A.lC,A.lA,A.lB,A.lE,A.lF,A.wY,A.lG,A.wL,A.lH,A.fp,A.lI,A.og,A.tm,A.kM,A.kN,A.t5,A.l8,A.fa,A.px,A.be,A.ci,A.cc,A.lb,A.cd,A.cP,A.jv,A.oE,A.dy,A.t7,A.dP,A.aW,A.jI,A.ok,A.ms,A.wo,A.dX,A.jU,A.cU,A.i9,A.u_,A.tV,A.u1,A.u0,A.dn,A.cV,A.jX,A.cM,A.el,A.tW,A.nm,A.iJ,A.vF,A.mi,A.ma,A.wk,A.tQ,A.he,A.t_,A.ha,A.jT,A.k8,A.pv,A.cF,A.jY,A.hL,A.dQ,A.ru,A.f5,A.iX,A.fs,A.jZ,A.ul,A.j8,A.m2,A.vA,A.tl,A.yw,A.iF])
q(J.kh,[J.kj,J.hB,J.au,J.bf,J.eT,J.dY,J.da])
q(J.au,[J.dc,J.B,A.f_,A.hN])
q(J.dc,[J.kP,J.dm,J.bE])
r(J.ki,A.i3)
r(J.q2,J.B)
q(J.dY,[J.hA,J.kk])
q(A.o,[A.dr,A.G,A.c7,A.b2,A.hm,A.ee,A.cN,A.bv,A.eo,A.lL,A.mB,A.fH,A.e0,A.l0])
q(A.dr,[A.dK,A.j9])
r(A.iC,A.dK)
r(A.iy,A.j9)
q(A.dN,[A.nL,A.nE,A.nK,A.pX,A.tB,A.xU,A.xW,A.uL,A.uK,A.xb,A.xa,A.pt,A.po,A.vJ,A.vI,A.vU,A.vX,A.th,A.ti,A.tf,A.vz,A.vy,A.wt,A.w_,A.vv,A.wh,A.qt,A.wd,A.oj,A.uY,A.pp,A.xY,A.y3,A.y4,A.xA,A.nz,A.nB,A.nD,A.jH,A.nv,A.xd,A.nx,A.qx,A.xL,A.yg,A.t9,A.ta,A.xK,A.p6,A.p5,A.p7,A.p4,A.p3,A.p2,A.p1,A.oY,A.oZ,A.p_,A.y8,A.qm,A.qr,A.qn,A.qq,A.qp,A.qo,A.qk,A.vk,A.vh,A.qK,A.qH,A.qJ,A.nT,A.nV,A.nR,A.nQ,A.nU,A.nS,A.nP,A.nO,A.uF,A.y2,A.pf,A.pd,A.pg,A.ph,A.qd,A.qf,A.qh,A.qj,A.qe,A.u3,A.ri,A.re,A.rf,A.rg,A.rh,A.rc,A.rd,A.rq,A.rm,A.rn,A.rk,A.rl,A.rp,A.ng,A.nh,A.ob,A.oa,A.ty,A.tq,A.tw,A.tr,A.ts,A.tt,A.xx,A.xy,A.qG,A.qA,A.qB,A.qC,A.qD,A.qE,A.qX,A.qY,A.r6,A.r4,A.r3,A.r2,A.r5,A.rL,A.rF,A.rH,A.rJ,A.rO,A.rT,A.to,A.xN,A.y7,A.y5,A.y6,A.nX,A.qa,A.qb,A.tK,A.tL,A.y0,A.xS,A.xR,A.xE,A.ui,A.ua,A.ub,A.uc,A.uj,A.uq,A.ur,A.us,A.ut,A.uA,A.uu,A.oh,A.oi,A.xq,A.pz,A.py,A.pA,A.pC,A.pE,A.pB,A.pS,A.tb,A.oM,A.wE,A.y1,A.y9,A.ya,A.nl,A.vt,A.vu,A.o_,A.o0,A.o4,A.o5,A.o6,A.pi,A.np,A.nn,A.w2,A.w5,A.w6,A.pW,A.pU,A.w1,A.t4,A.tR,A.tS,A.tT,A.tU,A.rC,A.rD,A.rB,A.rA,A.rz,A.u5,A.oQ,A.qP,A.p8,A.xw,A.nY,A.nZ,A.o1,A.o2,A.o3,A.xi,A.v7,A.vc,A.vf,A.v5,A.wz,A.wA,A.wy,A.ww,A.vD,A.vE])
q(A.nL,[A.v3,A.nF,A.of,A.q3,A.xV,A.xc,A.xr,A.pu,A.pn,A.vK,A.vV,A.vY,A.uH,A.vZ,A.q6,A.qv,A.wg,A.uX,A.wS,A.tO,A.wR,A.wQ,A.pr,A.pq,A.ny,A.nA,A.nC,A.jG,A.qO,A.qy,A.yh,A.xu,A.p0,A.qL,A.r8,A.ra,A.ni,A.xI,A.xC,A.tM,A.u7,A.xF,A.ug,A.uh,A.ue,A.uf,A.pD,A.oP,A.w7,A.u6,A.vo,A.uo])
r(A.bD,A.iy)
q(A.Q,[A.dL,A.bt,A.cW,A.mc])
q(A.a8,[A.db,A.kV,A.cS,A.kl,A.lp,A.l1,A.m4,A.hV,A.hE,A.jz,A.bC,A.cy,A.lo,A.bk,A.jR])
q(A.F,[A.fj,A.l2,A.lx,A.fm,A.dR,A.fi])
r(A.c4,A.fj)
q(A.nK,[A.y_,A.rw,A.uM,A.uN,A.wK,A.wJ,A.x9,A.uP,A.uQ,A.uS,A.uT,A.uR,A.uO,A.ps,A.vL,A.vQ,A.vP,A.vN,A.vM,A.vT,A.vS,A.vR,A.vW,A.tg,A.tj,A.te,A.wD,A.wC,A.uG,A.v1,A.v0,A.wl,A.wj,A.xe,A.xf,A.vx,A.vw,A.ws,A.wr,A.xm,A.wV,A.wU,A.oW,A.xk,A.xl,A.qw,A.ql,A.vl,A.vi,A.vj,A.pa,A.pT,A.pm,A.pl,A.td,A.nM,A.nN,A.tC,A.qU,A.pe,A.pb,A.qg,A.qi,A.r7,A.ro,A.o8,A.oe,A.od,A.oc,A.tv,A.tu,A.tx,A.rM,A.rG,A.rI,A.rK,A.rP,A.rU,A.rS,A.rR,A.rQ,A.tz,A.r1,A.qW,A.u9,A.uk,A.up,A.uB,A.uD,A.uC,A.uv,A.uz,A.uy,A.ux,A.uw,A.pR,A.pF,A.pM,A.pN,A.pO,A.pP,A.pK,A.pL,A.pG,A.pH,A.pI,A.pJ,A.pQ,A.w0,A.oN,A.oO,A.oK,A.oJ,A.oL,A.oG,A.oF,A.oH,A.oI,A.wF,A.wG,A.yb,A.oq,A.on,A.os,A.ou,A.ow,A.op,A.ov,A.oA,A.oy,A.ox,A.or,A.ot,A.oz,A.oo,A.nj,A.nk,A.tX,A.no,A.w3,A.w4,A.vG,A.pV,A.oR,A.oS,A.qR,A.qQ,A.vm,A.vq,A.vn,A.vp,A.v6,A.vb,A.ve,A.v8,A.vd,A.vg,A.v9,A.va,A.oV,A.oU,A.oT,A.um,A.un,A.wx])
q(A.G,[A.V,A.dT,A.U,A.av,A.aB,A.en,A.iM])
q(A.V,[A.ce,A.a_,A.e9,A.hG,A.md])
r(A.dS,A.c7)
r(A.hj,A.ee)
r(A.eO,A.cN)
q(A.er,[A.mk,A.ml,A.mm])
q(A.mk,[A.az,A.iS,A.iT,A.fD,A.mn])
r(A.es,A.ml)
q(A.mm,[A.et,A.mo])
r(A.j4,A.hK)
r(A.cx,A.j4)
r(A.hf,A.cx)
q(A.eK,[A.aM,A.ht])
q(A.cb,[A.hg,A.iU])
r(A.cD,A.hg)
r(A.hx,A.pX)
r(A.hS,A.cS)
q(A.tB,[A.tc,A.h7])
q(A.bt,[A.hD,A.hC,A.iL])
r(A.eZ,A.f_)
q(A.hN,[A.hM,A.f0])
q(A.f0,[A.iO,A.iQ])
r(A.iP,A.iO)
r(A.dh,A.iP)
r(A.iR,A.iQ)
r(A.bG,A.iR)
q(A.dh,[A.kC,A.kD])
q(A.bG,[A.kE,A.kF,A.kG,A.hO,A.hP,A.hQ,A.e5])
r(A.j_,A.m4)
q(A.a4,[A.fG,A.ie,A.iD,A.cY,A.iG,A.iw,A.h6,A.fw])
r(A.bb,A.fG)
r(A.b3,A.bb)
q(A.aP,[A.ds,A.fy,A.fE])
r(A.ei,A.ds)
r(A.is,A.ix)
q(A.ej,[A.aC,A.ag])
q(A.dx,[A.cA,A.fI])
r(A.iW,A.lK)
q(A.m3,[A.bW,A.fu])
r(A.iN,A.cA)
r(A.ep,A.iG)
q(A.mR,[A.lY,A.mr])
q(A.cW,[A.dt,A.iA])
r(A.cX,A.iU)
q(A.lg,[A.iY,A.wM,A.uU,A.mA])
r(A.wb,A.iY)
q(A.jP,[A.dU,A.nr,A.q4])
q(A.dU,[A.jx,A.kp,A.lv])
q(A.ar,[A.mG,A.jD,A.jC,A.ko,A.kn,A.lw,A.ik,A.kb])
q(A.mG,[A.jy,A.kq])
r(A.uZ,A.lQ)
q(A.nw,[A.uV,A.fq,A.lT,A.wT])
r(A.uI,A.uV)
r(A.km,A.hE)
r(A.wc,A.jO)
r(A.we,A.wf)
r(A.mV,A.mJ)
r(A.wW,A.mV)
q(A.bC,[A.cL,A.hv])
r(A.m0,A.j5)
r(A.f7,A.fJ)
r(A.mu,A.kb)
r(A.wv,A.pw)
r(A.mv,A.wv)
r(A.ju,A.nJ)
r(A.i7,A.t0)
r(A.lZ,A.ju)
r(A.jV,A.lZ)
r(A.m_,A.qs)
r(A.oB,A.m_)
r(A.kY,A.dM)
r(A.jM,A.jE)
r(A.d3,A.ie)
q(A.jF,[A.qN,A.rZ])
r(A.ig,A.ns)
r(A.lf,A.ig)
r(A.h8,A.Z)
q(A.vC,[A.kQ,A.h9,A.d4,A.cG,A.jS,A.k3,A.bR,A.hw,A.qM,A.dg,A.dH,A.bV,A.jB,A.cu,A.h4,A.f1,A.hU,A.ia,A.qZ,A.eQ,A.kx,A.d5,A.cg,A.ho,A.dj])
r(A.ne,A.p9)
q(A.eV,[A.il,A.ij,A.hR,A.hb,A.hX,A.hq,A.cQ,A.i2,A.i4,A.f6,A.hd,A.eL,A.rY])
r(A.hr,A.f6)
r(A.ks,A.mg)
r(A.dO,A.lV)
q(A.c3,[A.hT,A.jQ])
r(A.u2,A.nu)
r(A.rr,A.kL)
r(A.uJ,A.wn)
q(A.bm,[A.fh,A.ea,A.i8,A.bP,A.cn,A.cq,A.f2,A.f3,A.eN,A.dI])
r(A.q9,A.oD)
r(A.kt,A.ef)
q(A.fo,[A.ip,A.eg])
r(A.mK,A.lC)
r(A.mL,A.mK)
r(A.mM,A.mL)
r(A.mN,A.mM)
r(A.mO,A.mN)
r(A.mP,A.mO)
r(A.mQ,A.mP)
r(A.ud,A.mQ)
r(A.q0,A.tm)
q(A.q0,[A.rt,A.tP,A.u8])
r(A.ka,A.l8)
q(A.fa,[A.fx,A.la])
r(A.f9,A.lb)
r(A.cO,A.la)
r(A.fb,A.dP)
r(A.jJ,A.aW)
q(A.jJ,[A.kd,A.d9,A.f8])
q(A.jI,[A.m9,A.mz])
r(A.mp,A.ok)
r(A.mq,A.mp)
r(A.kZ,A.mq)
r(A.mt,A.ms)
r(A.bT,A.mt)
q(A.aT,[A.eh,A.aX])
r(A.fl,A.t7)
q(A.aX,[A.iH,A.iB,A.ft,A.fM])
r(A.ry,A.t_)
r(A.ol,A.jT)
r(A.d2,A.f5)
r(A.iz,A.ry)
q(A.j8,[A.m1,A.mx])
r(A.lh,A.f9)
r(A.mb,A.fi)
r(A.ch,A.mb)
s(A.fj,A.lq)
s(A.j9,A.F)
s(A.iO,A.F)
s(A.iP,A.hp)
s(A.iQ,A.F)
s(A.iR,A.hp)
s(A.cA,A.it)
s(A.fI,A.mE)
s(A.j4,A.mH)
s(A.mV,A.lg)
s(A.lZ,A.om)
s(A.m_,A.oC)
s(A.mg,A.nH)
s(A.lV,A.nI)
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
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",a5:"double",cC:"num",k:"String",X:"bool",R:"Null",p:"List",j:"Object",H:"Map",L:"JSObject"},mangledNames:{},types:["~()","y<j?>(lD,fn)","~(L)","y<~>()","R()","y<R>(bu)","y<~>(bu)","k(k)","~(i)","i()","R(j,aw)","~(j,aw)","X(k)","~(j?)","j?(j?)","X(@)","y<R>()","y<aU>()","~(~())","i(ba,i)","R(L)","R(@)","~(@)","X(j?)","y<~>(iJ)","~(p<i>)","~(j?,j?)","L()","y<~>(~)","~(k,k)","j?(H<k,j?>)","0&()","S<k,j?>(@,@)","~(@,@)","X(be)","X(j?,j?)","i(ba)","R(j)","~(cM,i,i,i)","i(j?)","@(@)","~(a1)","X()","a5(i)","@(k)","@()","X(d8)","y<R>(yt)","y<@>()","~(k,@)","X(b7)","y<co>(k)","i(co)","~(cR)","k(H<k,j?>)","X(aQ)","~(j[aw?])","y<p<H<k,j?>>>(k,p<j?>)","i(aW,i,i,i)","i(aW,i)","i(ba,i,i,bf)","~(cM,i)","k(e4)","y<bl<~>>()","~(~)","y<ef>()","i(@,@)","R(bE,bE)","@(@,k)","0&(k,i?)","~(p<c5>)","y<a4<p<i>>>()","k?(H<k,j?>)","b7()","y<b7>(bu)","j?(t8)","~(hW)","S<k,d6>(k,fc)","cs(@)","i(+(k,j),+(k,j))","k(k,k)","y<dk>(k)","i(dk)","as(i)","y<R>(~)","br()","~(cl)","ek<@,@>(bs<@>)","y<b9>(b9)","b9(b9)","b9(j)","~(k,k?)","de/(j?)","y<j?>(j?)","H<k,j?>(p<j?>)","y<i>(bu)","X(+(k,j))","j?(~)","k(i[i])","ct()","cr()","e7()","i(i,i)","y<X>(k)","y<~>(k)","i(i,cz)","X(cz)","i(cz)","bQ<j?>(@)","X(bQ<j?>)","i(+(k,j?),+(k,j?))","R(~())","H<k,j?>(bT)","y<@>(bu)","~(aV)","~(p<br>)","a4<p<i>>()","~(ff)","R(~)","~(p<H<k,j?>>)","~(H<k,j?>?)","y<H<k,j?>?>()","k(k?)","k?()","i(ci)","R(@,aw)","j(ci)","j(be)","i(be,be)","p<ci>(S<j,p<be>>)","cO()","k(j?)","~(i,k,i)","~(yT,p<yU>)","X(k,k)","H<k,j?>(br)","~(bf,i)","ba?(aW,i,i,i,i)","i(aW,i,i)","X(bU)","i(aW?,i,i)","i(bU,bU)","i(k)","aQ()","i(ba,bf)","R(k,k[j?])","i(ba,i,i)","i(i())","H<k,j?>(b7)","~(df<p<i>>)","d8()","i(cM,i,i,i,i)","i(i(i),i)","i(yX,i)","i(yX,i,i)","~(@,aw)","~(i,@)","L(B<j?>)","eW()","eR()","L(L?)","~(dJ)","y<~>(i,cw)","y<~>(i)","cw()","y<L>(k)","R(cF)","y<R>(L)","L(j)","R(j?,aw)","k?(j?)","~(dP)","L(L)","y<L>()","dV()","bU()","y<bl<cd>>()","~(cd)","X(fs)","i(i)","y<dQ>()","0&(j?,aw)","~(df<L>)","y<H<k,j?>?>(k)","~(N?,al?,N,j,aw)","0^(N?,al?,N,0^())<j?>","0^(N?,al?,N,0^(1^),1^)<j?,j?>","0^(N?,al?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,al,N,0^())<j?>","0^(1^)(N,al,N,0^(1^))<j?,j?>","0^(1^,2^)(N,al,N,0^(1^,2^))<j?,j?,j?>","ad?(N,al,N,j,aw?)","~(N?,al?,N,~())","cR(N,al,N,as,~())","cR(N,al,N,as,~(cR))","~(N,al,N,k)","N(N?,al?,N,iq?,H<j?,j?>?)","0^(0^,0^)<cC>","b7(H<k,j?>)","q<@>?()","br(H<k,j?>)","aN()","~(~(i,k,i),i,i,i,bf)","~(N,al,N,~())"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.az&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.iS&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.iT&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.fD&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.mn&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.es&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.et&&A.CN(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.mo&&A.CN(a,b.a)}}
A.Gq(v.typeUniverse,JSON.parse('{"bE":"dc","kP":"dc","dm":"dc","Jt":"f_","B":{"p":["1"],"au":[],"G":["1"],"L":[],"o":["1"],"aZ":["1"]},"kj":{"X":[],"a9":[]},"hB":{"R":[],"a9":[]},"au":{"L":[]},"dc":{"au":[],"L":[]},"ki":{"i3":[]},"q2":{"B":["1"],"p":["1"],"au":[],"G":["1"],"L":[],"o":["1"],"aZ":["1"]},"dY":{"a5":[],"am":["cC"]},"hA":{"a5":[],"i":[],"am":["cC"],"a9":[]},"kk":{"a5":[],"am":["cC"],"a9":[]},"da":{"k":[],"am":["k"],"aZ":["@"],"a9":[]},"dr":{"o":["2"]},"dK":{"dr":["1","2"],"o":["2"],"o.E":"2"},"iC":{"dK":["1","2"],"dr":["1","2"],"G":["2"],"o":["2"],"o.E":"2"},"iy":{"F":["2"],"p":["2"],"dr":["1","2"],"G":["2"],"o":["2"]},"bD":{"iy":["1","2"],"F":["2"],"p":["2"],"dr":["1","2"],"G":["2"],"o":["2"],"F.E":"2","o.E":"2"},"dL":{"Q":["3","4"],"H":["3","4"],"Q.V":"4","Q.K":"3"},"db":{"a8":[]},"kV":{"a8":[]},"c4":{"F":["i"],"p":["i"],"G":["i"],"o":["i"],"F.E":"i"},"G":{"o":["1"]},"V":{"G":["1"],"o":["1"]},"ce":{"V":["1"],"G":["1"],"o":["1"],"V.E":"1","o.E":"1"},"c7":{"o":["2"],"o.E":"2"},"dS":{"c7":["1","2"],"G":["2"],"o":["2"],"o.E":"2"},"a_":{"V":["2"],"G":["2"],"o":["2"],"V.E":"2","o.E":"2"},"b2":{"o":["1"],"o.E":"1"},"hm":{"o":["2"],"o.E":"2"},"ee":{"o":["1"],"o.E":"1"},"hj":{"ee":["1"],"G":["1"],"o":["1"],"o.E":"1"},"cN":{"o":["1"],"o.E":"1"},"eO":{"cN":["1"],"G":["1"],"o":["1"],"o.E":"1"},"dT":{"G":["1"],"o":["1"],"o.E":"1"},"bv":{"o":["1"],"o.E":"1"},"fj":{"F":["1"],"p":["1"],"G":["1"],"o":["1"]},"e9":{"V":["1"],"G":["1"],"o":["1"],"V.E":"1","o.E":"1"},"hf":{"cx":["1","2"],"H":["1","2"]},"eK":{"H":["1","2"]},"aM":{"eK":["1","2"],"H":["1","2"]},"eo":{"o":["1"],"o.E":"1"},"ht":{"eK":["1","2"],"H":["1","2"]},"hg":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"cD":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"hS":{"cS":[],"a8":[]},"kl":{"a8":[]},"lp":{"a8":[]},"kJ":{"J":[]},"iV":{"aw":[]},"l1":{"a8":[]},"bt":{"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"U":{"G":["1"],"o":["1"],"o.E":"1"},"av":{"G":["1"],"o":["1"],"o.E":"1"},"aB":{"G":["S<1,2>"],"o":["S<1,2>"],"o.E":"S<1,2>"},"hD":{"bt":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"hC":{"bt":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"fC":{"kW":[],"e4":[]},"lL":{"o":["kW"],"o.E":"kW"},"fd":{"e4":[]},"mB":{"o":["e4"],"o.E":"e4"},"eZ":{"au":[],"L":[],"dJ":[],"a9":[]},"f_":{"au":[],"L":[],"dJ":[],"a9":[]},"hN":{"au":[],"L":[]},"mI":{"dJ":[]},"hM":{"au":[],"yp":[],"L":[],"a9":[]},"f0":{"bF":["1"],"au":[],"L":[],"aZ":["1"]},"dh":{"F":["a5"],"p":["a5"],"bF":["a5"],"au":[],"G":["a5"],"L":[],"aZ":["a5"],"o":["a5"]},"bG":{"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"]},"kC":{"dh":[],"pj":[],"F":["a5"],"p":["a5"],"bF":["a5"],"au":[],"G":["a5"],"L":[],"aZ":["a5"],"o":["a5"],"a9":[],"F.E":"a5"},"kD":{"dh":[],"pk":[],"F":["a5"],"p":["a5"],"bF":["a5"],"au":[],"G":["a5"],"L":[],"aZ":["a5"],"o":["a5"],"a9":[],"F.E":"a5"},"kE":{"bG":[],"pY":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"kF":{"bG":[],"pZ":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"kG":{"bG":[],"q_":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"hO":{"bG":[],"tG":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"hP":{"bG":[],"tH":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"hQ":{"bG":[],"tI":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"e5":{"bG":[],"cw":[],"F":["i"],"p":["i"],"bF":["i"],"au":[],"G":["i"],"L":[],"aZ":["i"],"o":["i"],"a9":[],"F.E":"i"},"m4":{"a8":[]},"j_":{"cS":[],"a8":[]},"ad":{"a8":[]},"q":{"y":["1"]},"df":{"bs":["1"]},"iZ":{"cR":[]},"ir":{"hc":["1"]},"fH":{"o":["1"],"o.E":"1"},"b3":{"bb":["1"],"fG":["1"],"a4":["1"],"a4.T":"1"},"ei":{"ds":["1"],"aP":["1"],"bl":["1"],"aP.T":"1"},"ix":{"bs":["1"]},"is":{"ix":["1"],"bs":["1"]},"ll":{"J":[]},"hV":{"a8":[]},"ej":{"hc":["1"]},"aC":{"ej":["1"],"hc":["1"]},"ag":{"ej":["1"],"hc":["1"]},"ie":{"a4":["1"]},"dx":{"bs":["1"]},"cA":{"it":["1"],"dx":["1"],"bs":["1"]},"fI":{"dx":["1"],"bs":["1"]},"bb":{"fG":["1"],"a4":["1"],"a4.T":"1"},"ds":{"aP":["1"],"bl":["1"],"aP.T":"1"},"iW":{"lK":["1"]},"aP":{"bl":["1"],"aP.T":"1"},"fG":{"a4":["1"]},"fv":{"bl":["1"]},"iD":{"a4":["1"],"a4.T":"1"},"cY":{"a4":["1"],"a4.T":"1"},"iN":{"cA":["1"],"it":["1"],"dx":["1"],"df":["1"],"bs":["1"]},"iG":{"a4":["2"]},"fy":{"aP":["2"],"bl":["2"],"aP.T":"2"},"ep":{"iG":["1","2"],"a4":["2"],"a4.T":"2"},"iE":{"bs":["1"]},"fE":{"aP":["2"],"bl":["2"],"aP.T":"2"},"iw":{"a4":["2"],"a4.T":"2"},"mR":{"N":[]},"lY":{"N":[]},"mr":{"N":[]},"fN":{"al":[]},"cW":{"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"dt":{"cW":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"iA":{"cW":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"en":{"G":["1"],"o":["1"],"o.E":"1"},"iL":{"bt":["1","2"],"Q":["1","2"],"H":["1","2"],"Q.V":"2","Q.K":"1"},"cX":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"e0":{"o":["1"],"o.E":"1"},"F":{"p":["1"],"G":["1"],"o":["1"]},"Q":{"H":["1","2"]},"iM":{"G":["2"],"o":["2"],"o.E":"2"},"hK":{"H":["1","2"]},"cx":{"H":["1","2"]},"hG":{"V":["1"],"G":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cb":{"eb":["1"],"G":["1"],"o":["1"]},"iU":{"cb":["1"],"eb":["1"],"G":["1"],"o":["1"]},"ek":{"bs":["1"]},"mc":{"Q":["k","@"],"H":["k","@"],"Q.V":"@","Q.K":"k"},"md":{"V":["k"],"G":["k"],"o":["k"],"V.E":"k","o.E":"k"},"jx":{"dU":[]},"mG":{"ar":["k","p<i>"]},"jy":{"ar":["k","p<i>"],"ar.T":"p<i>"},"jD":{"ar":["p<i>","k"],"ar.T":"k"},"jC":{"ar":["k","p<i>"],"ar.T":"p<i>"},"hE":{"a8":[]},"km":{"a8":[]},"ko":{"ar":["j?","k"],"ar.T":"k"},"kn":{"ar":["k","j?"],"ar.T":"j?"},"kp":{"dU":[]},"kq":{"ar":["k","p<i>"],"ar.T":"p<i>"},"lv":{"dU":[]},"lw":{"ar":["k","p<i>"],"ar.T":"p<i>"},"ik":{"ar":["p<i>","k"],"ar.T":"k"},"A1":{"am":["A1"]},"aN":{"am":["aN"]},"a5":{"am":["cC"]},"as":{"am":["as"]},"i":{"am":["cC"]},"p":{"G":["1"],"o":["1"]},"cC":{"am":["cC"]},"kW":{"e4":[]},"eb":{"G":["1"],"o":["1"]},"k":{"am":["k"]},"ay":{"am":["A1"]},"jz":{"a8":[]},"cS":{"a8":[]},"bC":{"a8":[]},"cL":{"a8":[]},"hv":{"cL":[],"a8":[]},"cy":{"a8":[]},"lo":{"cy":[],"a8":[]},"bk":{"a8":[]},"jR":{"a8":[]},"kK":{"a8":[]},"ib":{"a8":[]},"m5":{"J":[]},"b8":{"J":[]},"kg":{"cy":[],"J":[],"a8":[]},"mC":{"aw":[]},"l0":{"o":["i"],"o.E":"i"},"j5":{"ls":[]},"bY":{"ls":[]},"m0":{"ls":[]},"kI":{"J":[]},"q_":{"p":["i"],"G":["i"],"o":["i"]},"cw":{"p":["i"],"G":["i"],"o":["i"]},"tI":{"p":["i"],"G":["i"],"o":["i"]},"pY":{"p":["i"],"G":["i"],"o":["i"]},"tG":{"p":["i"],"G":["i"],"o":["i"]},"pZ":{"p":["i"],"G":["i"],"o":["i"]},"tH":{"p":["i"],"G":["i"],"o":["i"]},"pj":{"p":["a5"],"G":["a5"],"o":["a5"]},"pk":{"p":["a5"],"G":["a5"],"o":["a5"]},"Z":{"H":["2","3"]},"f7":{"fJ":["1","eb<1>"],"fJ.E":"1"},"kb":{"ar":["p<i>","c5"]},"mu":{"ar":["p<i>","c5"],"ar.T":"c5"},"i6":{"J":[]},"l2":{"F":["i"],"p":["i"],"G":["i"],"o":["i"],"F.E":"i"},"kY":{"J":[]},"jE":{"yq":[]},"jM":{"yq":[]},"d3":{"a4":["p<i>"],"a4.T":"p<i>"},"dM":{"J":[]},"lf":{"ig":[]},"h8":{"Z":["k","k","1"],"H":["k","1"],"Z.V":"1","Z.K":"k","Z.C":"k"},"k2":{"yt":[]},"eV":{"J":[]},"il":{"J":[]},"ij":{"J":[]},"hR":{"J":[]},"hb":{"J":[]},"hX":{"J":[]},"hq":{"J":[]},"cQ":{"J":[]},"i2":{"J":[]},"i4":{"J":[]},"f6":{"J":[]},"hr":{"J":[]},"hd":{"J":[]},"eL":{"J":[]},"hT":{"c3":["H<k,j?>?"],"c3.T":"H<k,j?>?"},"eI":{"J":[]},"jK":{"J":[]},"mj":{"AF":[]},"d7":{"J":[]},"cI":{"J":[]},"bm":{"J":[]},"fh":{"J":[]},"ea":{"J":[]},"i8":{"J":[]},"bP":{"J":[]},"cn":{"J":[]},"cq":{"J":[]},"f2":{"J":[]},"f3":{"J":[]},"eN":{"J":[]},"dI":{"J":[]},"jQ":{"c3":["p<H<k,j?>>"],"c3.T":"p<H<k,j?>>"},"kt":{"ef":[]},"lX":{"lD":[]},"hh":{"J":[]},"hZ":{"J":[]},"kX":{"J":[]},"ip":{"fo":[]},"eg":{"fo":[]},"kN":{"J":[]},"ka":{"cc":[],"am":["cc"]},"fx":{"cO":[],"am":["l9"]},"cc":{"am":["cc"]},"l8":{"cc":[],"am":["cc"]},"l9":{"am":["l9"]},"la":{"am":["l9"]},"lb":{"J":[]},"f9":{"b8":[],"J":[]},"fa":{"am":["l9"]},"cO":{"am":["l9"]},"cP":{"J":[]},"t8":{"p":["j?"],"G":["j?"],"o":["j?"]},"lx":{"F":["j?"],"t8":[],"p":["j?"],"G":["j?"],"o":["j?"],"F.E":"j?"},"fb":{"dP":[]},"kd":{"aW":[]},"m9":{"im":[],"ba":[]},"bT":{"Q":["k","@"],"H":["k","@"],"Q.V":"@","Q.K":"k"},"kZ":{"F":["bT"],"p":["bT"],"G":["bT"],"o":["bT"],"F.E":"bT"},"cU":{"J":[]},"jJ":{"aW":[]},"jI":{"im":[],"ba":[]},"eh":{"aT":["eh"],"aT.E":"eh"},"cV":{"yU":[]},"dn":{"yT":[]},"fm":{"F":["cV"],"p":["cV"],"G":["cV"],"o":["cV"],"F.E":"cV"},"h6":{"a4":["1"],"a4.T":"1"},"d9":{"aW":[]},"aX":{"aT":["aX"]},"ma":{"im":[],"ba":[]},"iH":{"aX":[],"aT":["aX"],"aT.E":"aX"},"iB":{"aX":[],"aT":["aX"],"aT.E":"aX"},"ft":{"aX":[],"aT":["aX"],"aT.E":"aX"},"fM":{"aX":[],"aT":["aX"],"aT.E":"aX"},"f8":{"aW":[]},"mz":{"im":[],"ba":[]},"ha":{"J":[]},"dR":{"F":["j?"],"p":["j?"],"G":["j?"],"o":["j?"],"F.E":"j?"},"f5":{"J":[]},"d2":{"J":[]},"m1":{"j8":["L"]},"mx":{"j8":["L"]},"lh":{"b8":[],"J":[]},"ch":{"fi":["i"],"F":["i"],"p":["i"],"G":["i"],"o":["i"],"F.E":"i"},"fi":{"F":["1"],"p":["1"],"G":["1"],"o":["1"]},"mb":{"fi":["i"],"F":["i"],"p":["i"],"G":["i"],"o":["i"]},"fw":{"a4":["1"],"a4.T":"1"},"iF":{"bl":["1"]}}'))
A.Gp(v.typeUniverse,JSON.parse('{"hp":1,"lq":1,"fj":1,"j9":2,"hg":1,"f0":1,"bs":1,"ie":1,"mE":1,"m3":1,"mH":2,"hK":2,"iU":1,"j4":2,"jO":1,"jP":2,"iY":1,"kH":1,"lr":2,"DS":1,"Fn":1,"Fv":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("DS<j?>"),bG:s("dH"),om:s("h6<B<j?>>"),hw:s("cl"),lo:s("dJ"),fW:s("yp"),kj:s("h8<k>"),iv:s("a1"),dF:s("yq()"),V:s("c4"),bU:s("bQ<j?>"),fw:s("dP"),bP:s("am<@>"),p6:s("dQ"),br:s("hc<L>"),n8:s("br"),M:s("cD<k>"),lp:s("jZ"),O:s("G<@>"),C:s("a8"),mA:s("J"),eZ:s("k8"),d9:s("aQ"),A:s("b7"),k4:s("hn"),pk:s("pj"),kI:s("pk"),Y:s("b8"),gY:s("Jp"),nW:s("y<L>"),fr:s("y<de>"),mj:s("y<R>"),g7:s("y<@>"),fP:s("y<cF?>"),n1:s("y<j?>(lD,fn)"),jN:s("y<fl?>"),co:s("d6"),w:s("co"),cF:s("d9"),m6:s("pY"),bW:s("pZ"),jx:s("q_"),nZ:s("hz<@>"),U:s("o<@>"),aL:s("B<a1>"),aw:s("B<bQ<@>>"),i5:s("B<c5>"),mK:s("B<aQ>"),iw:s("B<y<~>>"),mr:s("B<d8>"),E:s("B<L>"),dO:s("B<p<j?>>"),ic:s("B<H<k,j>>"),d:s("B<H<k,j?>>"),e8:s("B<kB>"),i7:s("B<e6>"),hf:s("B<j>"),ox:s("B<e7>"),my:s("B<cr>"),k1:s("B<f4>"),g2:s("B<i0>"),bo:s("B<i1>"),eb:s("B<aV>"),fU:s("B<+controller,sync(df<cd>,X)>"),lw:s("B<+controller,sync(df<~>,X)>"),kC:s("B<+(dj,k)>"),l5:s("B<+(k,j)>"),iE:s("B<+(k,j?)>"),aY:s("B<+(fr,j?,j?,aw?)>"),g1:s("B<cs>"),lE:s("B<fb>"),c0:s("B<bU>"),dw:s("B<bl<@>>"),s:s("B<k>"),en:s("B<fe>"),bs:s("B<cw>"),az:s("B<iz>"),i4:s("B<fr>"),fV:s("B<fs>"),pg:s("B<be>"),dg:s("B<ci>"),p8:s("B<mi>"),bi:s("B<fF>"),gk:s("B<a5>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<ad?>"),c:s("B<j?>"),mf:s("B<k?>"),iy:s("aZ<@>"),T:s("hB"),m:s("L"),bJ:s("bf"),g:s("bE"),dX:s("bF<@>"),aq:s("au"),kk:s("e0<eh>"),p3:s("e0<aX>"),hI:s("e1<@>"),ba:s("p<br>"),ck:s("p<b7>"),ip:s("p<L>"),ew:s("p<H<k,j>>"),J:s("p<H<k,j?>>"),eT:s("p<e6>"),hg:s("p<e7>"),a6:s("p<cr>"),jX:s("p<i0>"),kR:s("p<cs>"),k:s("p<k>"),bR:s("p<fe>"),j:s("p<@>"),L:s("p<i>"),W:s("p<j?>"),kM:s("ks"),jD:s("hH"),ia:s("S<k,d6>"),gc:s("S<k,k>"),eB:s("S<k,j?>"),a3:s("hJ<@,@>"),cy:s("H<k,ct>"),dV:s("H<k,i>"),f:s("H<@,@>"),G:s("H<k,j?>"),d2:s("H<j?,j?>"),iZ:s("a_<k,@>"),r:s("de"),a:s("eZ"),dQ:s("dh"),aj:s("bG"),Z:s("e5"),P:s("R"),K:s("j"),ot:s("kU"),gq:s("f4"),e:s("aU"),b0:s("cL"),lZ:s("Jv"),oZ:s("aV"),aK:s("+()"),ja:s("+(L,he)"),hP:s("+(H<k,ct>,H<k,H<k,j?>>)"),cU:s("+(dj,k)"),mk:s("+(X,L)"),kO:s("+basicSupport,supportsReadWriteUnsafe(X,X)"),mt:s("+(L?,L)"),po:s("+(j?,i)"),g0:s("+(H<k,j?>?,ct?,cr?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("kW"),Q:s("cs"),hF:s("e9<k>"),cu:s("f7<@>"),gi:s("eb<k>"),g_:s("f8"),hq:s("cc"),ol:s("cO"),gE:s("lc"),l:s("aw"),ls:s("Fn<j?>"),nv:s("ld"),h3:s("fc"),ha:s("bl<cd>"),ey:s("bl<~>"),bv:s("le"),ku:s("a4<p<i>>"),lI:s("dk"),hL:s("ig"),N:s("k"),eg:s("fe"),k5:s("ih"),n6:s("bV"),mv:s("b9"),nw:s("ct"),em:s("ff"),hU:s("cR"),q:s("lm"),aJ:s("a9"),do:s("cS"),nL:s("Fv<j?>"),hM:s("tG"),mC:s("tH"),oR:s("ch"),nn:s("tI"),p:s("cw"),cx:s("dm"),ph:s("cx<k,k>"),eo:s("cy"),oc:s("cz"),jJ:s("ls"),e6:s("aW"),j2:s("im"),n:s("fl"),x:s("bv<k>"),u:s("ef"),bp:s("eg"),be:s("lD"),ec:s("fo"),oS:s("fp"),iq:s("aC<cw>"),jk:s("aC<@>"),ho:s("aC<i>"),h:s("aC<~>"),oW:s("ek<@,@>"),R:s("el<L>"),d4:s("fw<L>"),nI:s("q<cF>"),a7:s("q<L>"),hl:s("q<0&>"),os:s("q<k>"),jz:s("q<cw>"),g5:s("q<X>"),_:s("q<@>"),hy:s("q<i>"),jQ:s("q<i?>"),D:s("q<~>"),nf:s("be"),mp:s("dt<j?,j?>"),fA:s("fB"),k8:s("cY<L>"),fb:s("cY<p<i>>"),mI:s("my<c5>"),jy:s("dy<cd,~()>"),af:s("dy<~,X()>"),lU:s("dy<~,~()>"),hT:s("bZ<L>"),lj:s("bZ<p<i>>"),aP:s("ag<cF>"),h1:s("ag<L>"),ex:s("ag<X>"),F:s("ag<~>"),y:s("X"),i:s("a5"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aw)"),S:s("i"),ma:s("br?"),gK:s("y<R>?"),b3:s("cF?"),B:s("L?"),bE:s("p<bQ<@>>?"),lH:s("p<@>?"),b:s("H<k,j?>?"),nh:s("de?"),X:s("j?"),ad:s("AF?"),dY:s("cr?"),lY:s("i_?"),jB:s("cs?"),v:s("k?"),f8:s("ct?"),a_:s("ch?"),he:s("fl?"),dd:s("be?"),o9:s("X?"),dz:s("a5?"),I:s("i?"),jh:s("cC?"),o:s("cC"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aw)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bN=J.kh.prototype
B.c=J.B.prototype
B.b=J.hA.prototype
B.t=J.dY.prototype
B.a=J.da.prototype
B.bO=J.bE.prototype
B.bP=J.au.prototype
B.al=A.hM.prototype
B.cq=A.hO.prototype
B.u=A.hP.prototype
B.e=A.e5.prototype
B.b1=J.kP.prototype
B.av=J.dm.prototype
B.ae=new A.d2("Operation was cancelled")
B.ay=new A.h4(1,"hidden")
B.be=new A.jv(1)
B.dl=new A.jv(-1)
B.V=new A.dH(0,"applied")
B.W=new A.dH(1,"quarantined")
B.bf=new A.dH(2,"conflict")
B.X=new A.dH(3,"skipped")
B.bg=new A.jy(127)
B.Y=new A.jB(0,"changed")
B.az=new A.jB(1,"deleted")
B.bx=new A.iD(A.ac("iD<p<i>>"))
B.bh=new A.d3(B.bx)
B.bi=new A.hx(A.IQ(),A.ac("hx<i>"))
B.bk=new A.jD()
B.aA=new A.nr()
B.bj=new A.jC()
B.D={}
B.aW=new A.aM(B.D,[],A.ac("aM<k,j>"))
B.dt=new A.qM(0,"conflict")
B.dm=new A.o7()
B.aB=new A.oB()
B.bl=new A.k1(A.ac("k1<0&>"))
B.n=new A.k0()
B.aC=new A.k4(A.ac("k4<0&>"))
B.aD=new A.k5()
B.L=new A.k5()
B.bm=new A.kg()
B.aE=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bn=function() {
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
B.bs=function(getTagFallback) {
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
B.bo=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.br=function(hooks) {
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
B.bq=function(hooks) {
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
B.bp=function(hooks) {
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

B.h=new A.q4()
B.bt=new A.q9()
B.bu=new A.hH()
B.bv=new A.kK()
B.d=new A.t1()
B.k=new A.lv()
B.f=new A.lw()
B.bw=new A.uJ()
B.o=new A.vr()
B.Z=new A.vB()
B.af=new A.w8()
B.i=new A.mr()
B.l=new A.mu()
B.M=new A.mC()
B.aG=new A.d4(0,"create")
B.x=new A.d4(1,"update")
B.by=new A.d4(2,"archive")
B.bz=new A.d4(3,"restore")
B.aH=new A.d4(4,"purge")
B.bA=new A.d4(5,"hide")
B.a_=new A.h9(0,"local")
B.ag=new A.h9(1,"remote")
B.a0=new A.h9(2,"resolution")
B.bB=new A.jS(3,"ignore")
B.N=new A.jS(4,"replace")
B.p=new A.k3(0,"normal")
B.aI=new A.k3(1,"full")
B.A=new A.as(0)
B.aJ=new A.as(1e6)
B.aK=new A.as(16e3)
B.dn=new A.as(18e8)
B.bC=new A.as(2e5)
B.aL=new A.as(3e5)
B.a1=new A.as(3e7)
B.aM=new A.as(3e8)
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
B.bD=new A.hn(!1)
B.ai=new A.d5("x",1,"opfsExternalLocks")
B.aN=new A.d5("y",2,"opfsExternalLocksWorkaround")
B.aO=new A.eQ("/database",0,"database")
B.aP=new A.eQ("/database-journal",1,"journal")
B.bJ=new A.b8("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.bK=new A.b8("fieldCipher envelope must be a map.",null,null)
B.ak=new A.aM(B.D,[],A.ac("aM<k,k>"))
B.bL=new A.dV(B.ak)
B.aQ=new A.hw(0,"live")
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
B.aj=new A.e1(B.bl,A.ac("e1<k>"))
B.c_=s(["attempt_count","next_retry_at","last_error"],t.s)
B.aR=s([13,10],t.t)
B.ao=new A.cg(0,"unknown")
B.ap=new A.cg(1,"integer")
B.aq=new A.cg(2,"bigInt")
B.ar=new A.cg(3,"float")
B.as=new A.cg(4,"text")
B.at=new A.cg(5,"blob")
B.au=new A.cg(6,"$null")
B.bc=new A.cg(7,"boolean")
B.aS=s([B.ao,B.ap,B.aq,B.ar,B.as,B.at,B.au,B.bc],A.ac("B<cg>"))
B.c0=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.bd=new A.h4(0,"visible")
B.c1=s([B.bd,B.ay],A.ac("B<h4>"))
B.bH=new A.ho(0,"database")
B.bI=new A.ho(1,"journal")
B.aT=s([B.bH,B.bI],A.ac("B<ho>"))
B.w=new A.cu(0,"clean")
B.ac=new A.cu(1,"dirty")
B.bb=new A.cu(2,"inFlight")
B.U=new A.cu(3,"conflict")
B.ad=new A.cu(4,"error")
B.cO=new A.cu(5,"quarantine")
B.cP=new A.cu(6,"blocked")
B.c2=s([B.w,B.ac,B.bb,B.U,B.ad,B.cO,B.cP],A.ac("B<cu>"))
B.c3=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.a6=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.c4=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.bM=new A.hw(1,"notArchived")
B.c5=s([B.aQ,B.bM],A.ac("B<hw>"))
B.c6=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b_=new A.hU(0,"fileUpload")
B.b0=new A.hU(1,"fileRemove")
B.c7=s([B.b_,B.b0],A.ac("B<hU>"))
B.bG=new A.d5("s",0,"opfsShared")
B.bE=new A.d5("i",3,"indexedDb")
B.bF=new A.d5("m",4,"inMemory")
B.c8=s([B.bG,B.ai,B.aN,B.bE,B.bF],A.ac("B<d5>"))
B.a7=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.c9=s([B.ah,B.a3,B.a4,B.B,B.a5,B.E,B.O,B.P,B.F],A.ac("B<bR>"))
B.j=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.a8=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.aU=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.ca=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.f1(0,"upsert")
B.I=new A.f1(1,"archive")
B.Q=new A.f1(2,"restore")
B.cb=s([B.v,B.I,B.Q],A.ac("B<f1>"))
B.cc=s([],A.ac("B<d6>"))
B.ce=s([],t.my)
B.q=s([],t.s)
B.cd=s([],t.t)
B.aV=s([],t.dG)
B.y=s([],t.c)
B.cf=s(["*"],t.s)
B.cg=s([B.aO,B.aP],A.ac("B<eQ>"))
B.ch=s(["id","updated"],t.s)
B.ci=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.b6=new A.dj(0,"opfs")
B.b7=new A.dj(1,"indexedDb")
B.cH=new A.dj(2,"inMemory")
B.cj=s([B.b6,B.b7,B.cH],A.ac("B<dj>"))
B.a9=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.ck=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cl=new A.ht([16,10,24,12,32,14],A.ac("ht<i,i>"))
B.cv={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.r=new A.kp()
B.m=new A.jx()
B.cm=new A.aM(B.cv,[B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.k,B.k],A.ac("aM<k,dU>"))
B.aa=new A.aM(B.D,[],A.ac("aM<k,i>"))
B.z=new A.aM(B.D,[],A.ac("aM<k,j?>"))
B.cn=new A.aM(B.D,[],A.ac("aM<i,H<k,j?>(H<k,j?>)>"))
B.cp=new A.kx(11,"simpleSuccessResponse",A.ac("kx<L>"))
B.aX=new A.dg(0,"createOrUpdate")
B.aY=new A.dg(1,"createOrUpdateMerge")
B.aZ=new A.dg(2,"create")
B.G=new A.dg(3,"update")
B.C=new A.dg(4,"archive")
B.H=new A.dg(5,"restore")
B.du=new A.qZ(2,"readWriteCreate")
B.b2=new A.kQ(0,"native")
B.cw=new A.kQ(1,"web")
B.J=new A.aU(0,1,0,0,0,!1)
B.ab=new A.aU(0,0,0,0,0,!0)
B.R=new A.aU(0,0,0,0,0,!1)
B.cx=new A.aU(0,0,0,1,0,!1)
B.b3=new A.aU(0,0,1,0,0,!1)
B.S=new A.aU(1,0,0,0,0,!1)
B.cy=new A.az("archived",!0)
B.am=new A.iS(!1,!1)
B.cz=new A.es(0,0,0)
B.cA=new A.es(null,null,null)
B.cu={hidden:0}
B.cB=new A.cD(B.cu,1,t.M)
B.cr={id:0,archived:1,hidden:2,extra:3}
B.b4=new A.cD(B.cr,4,t.M)
B.cs={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.cC=new A.cD(B.cs,11,t.M)
B.b5=new A.cD(B.D,0,t.M)
B.ct={open:0,close:1,health:2,worker_event:3,record_event:4,capabilities:5,get:6,mutate_batch:7,compiled_query:8,analyze:9,wal_checkpoint:10,vacuum:11,prune_outbox:12,compact:13,run_maintenance:14,tx_begin:15,tx_get:16,tx_mutate_batch:17,tx_savepoint:18,tx_rollback_to:19,tx_release:20,tx_commit:21,tx_rollback:22,watch_query:23,watch_one:24,watch_cancel:25,sync_start:26,sync_stop:27,sync_now:28,sync_status:29,auth_required:30,sync_pause:31,sync_resume:32,sync_update_auth:33,sync_set_connectivity:34,file_upload_begin:35,file_upload_chunk:36,file_upload_finish:37,file_upload_abort:38,file_list:39,file_open:40,file_remove:41,file_gc:42,file_enforce_storage_cap:43,file_storage_status:44,conflicts_list:45,conflicts_get:46,conflicts_resolve:47,conflicts_accept_local:48,conflicts_accept_remote:49,conflicts_watch:50}
B.cD=new A.cD(B.ct,51,t.M)
B.cE=new A.ia(0,"insert")
B.cF=new A.ia(1,"update")
B.cG=new A.ia(2,"delete")
B.cI=new A.ih(-1,null)
B.cJ=new A.ii("_clientToken")
B.T=new A.bV(0,"closed")
B.cK=new A.bV(1,"opening")
B.b8=new A.bV(2,"offline")
B.an=new A.bV(3,"authRequired")
B.b9=new A.bV(4,"idle")
B.cL=new A.bV(5,"pulling")
B.cM=new A.bV(6,"pushing")
B.cN=new A.bV(7,"backoff")
B.ba=new A.bV(8,"paused")
B.K=new A.b9(B.aa,B.aa,0,0,0,0,!1)
B.cQ=A.bA("ju")
B.cR=A.bA("dJ")
B.cS=A.bA("yp")
B.cT=A.bA("pj")
B.cU=A.bA("pk")
B.cV=A.bA("pY")
B.cW=A.bA("pZ")
B.cX=A.bA("q_")
B.cY=A.bA("L")
B.cZ=A.bA("j")
B.d_=A.bA("i7")
B.d0=A.bA("tG")
B.d1=A.bA("tH")
B.d2=A.bA("tI")
B.d3=A.bA("cw")
B.aw=new A.ik(!1)
B.d4=new A.ik(!0)
B.d5=new A.cU(14)
B.d6=new A.cU(522)
B.d7=new A.cU(778)
B.d8=new A.wZ(B.i,A.HY())
B.d9=new A.x_(B.i,A.HZ())
B.da=new A.x0(B.i,A.I_())
B.db=new A.x1(B.i,A.I0())
B.dc=new A.mS(B.i,A.I1())
B.dd=new A.x2(B.i,A.I2())
B.de=new A.x3(B.i,A.I3())
B.df=new A.x4(B.i,A.I4())
B.dg=new A.x5(B.i,A.I5())
B.dh=new A.x7(B.i,A.I7())
B.di=new A.x8(B.i,A.I8())
B.dj=new A.x6(B.i,A.I6())
B.dk=new A.mT(B.i,A.I9())
B.co=new A.aM(B.D,[],A.ac("aM<j?,j?>"))
B.ax=new A.mU(B.i,B.co)})();(function staticFields(){$.wa=null
$.ex=A.l([],t.hf)
$.Hv=null
$.AI=null
$.rx=0
$.kS=A.Hm()
$.A7=null
$.A6=null
$.CG=null
$.Cn=null
$.CQ=null
$.xH=null
$.xX=null
$.zB=null
$.wm=A.l([],A.ac("B<p<j>?>"))
$.fR=null
$.jb=null
$.jc=null
$.zp=!1
$.u=B.i
$.wq=null
$.Bc=null
$.Bd=null
$.Be=null
$.Bf=null
$.z6=A.v4("_lastQuoRemDigits")
$.z7=A.v4("_lastQuoRemUsed")
$.iv=A.v4("_lastRemUsed")
$.z8=A.v4("_lastRem_nsh")
$.B1=""
$.B2=null
$.BS=null
$.xh=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Jl","D5",()=>A.xP("_$dart_dartClosure"))
s($,"Jk","eD",()=>A.xP("_$dart_dartClosure_dartJSInterop"))
s($,"JZ","n9",()=>A.qS(0))
s($,"Km","DF",()=>B.i.aZ(new A.y_(),A.ac("y<~>")))
s($,"Kg","DC",()=>A.l([new J.ki()],A.ac("B<i3>")))
s($,"JD","D9",()=>A.cT(A.tE({
toString:function(){return"$receiver$"}})))
s($,"JE","Da",()=>A.cT(A.tE({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"JF","Db",()=>A.cT(A.tE(null)))
s($,"JG","Dc",()=>A.cT(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"JJ","Df",()=>A.cT(A.tE(void 0)))
s($,"JK","Dg",()=>A.cT(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"JI","De",()=>A.cT(A.AZ(null)))
s($,"JH","Dd",()=>A.cT(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"JM","Di",()=>A.cT(A.AZ(void 0)))
s($,"JL","Dh",()=>A.cT(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"JP","zM",()=>A.FG())
s($,"Jr","dG",()=>$.DF())
s($,"Jq","D6",()=>A.FZ(!1,B.i,t.y))
s($,"K4","Ds",()=>A.qS(4096))
s($,"K2","Dq",()=>new A.wV().$0())
s($,"K3","Dr",()=>new A.wU().$0())
s($,"JR","zN",()=>A.EV(A.aY(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"JQ","Dj",()=>A.qS(0))
s($,"JY","c1",()=>A.iu(0))
s($,"JW","eE",()=>A.iu(1))
s($,"JX","Dm",()=>A.iu(2))
s($,"JU","zP",()=>$.eE().bw(0))
s($,"JS","zO",()=>A.iu(1e4))
r($,"JV","Dl",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"JT","Dk",()=>A.qS(8))
s($,"K_","Dn",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"K0","Do",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"K1","Dp",()=>typeof URLSearchParams=="function")
s($,"K7","eF",()=>A.jk(B.cZ))
s($,"Jw","jp",()=>{A.F4()
return $.rx})
s($,"K8","Dv",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"Ju","yj",()=>{var q=new A.w9(A.EU(8))
q.oh()
return q})
s($,"Jm","jo",()=>A.DW(B.cq.ga5(A.EW(A.aY(A.l([1],t.t)))),0,null).getInt8(0)===1?B.L:B.aD)
s($,"Jd","zH",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Ka","yk",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"Js","D7",()=>A.AM())
s($,"K5","zQ",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"K6","Dt",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Ko","DG",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"K9","Dw",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Kd","Dz",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Kc","Dy",()=>A.af("\\\\(.)",!0,!1))
s($,"Kl","DE",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Kp","DH",()=>A.af("(?:"+$.Dw().a+")*",!0,!1))
s($,"Kf","DB",()=>A.AN())
s($,"Kn","yl",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"H5","Du",()=>A.Eb().a)
s($,"Jn","zJ",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"Ji","D3",()=>A.yx("declaredNames",t.gi))
s($,"Jj","D4",()=>A.yx("fieldByName",A.ac("H<k,aQ>")))
s($,"JC","n8",()=>new A.j())
s($,"Jh","zI",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"Kb","Dx",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Ki","h3",()=>new A.og($.zK()))
s($,"Jz","D8",()=>new A.rt(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"JB","n7",()=>new A.u8(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"JA","jq",()=>new A.tP(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"Jy","zK",()=>A.Fq())
s($,"Jg","D2",()=>$.eE().bx(0,63).bw(0))
s($,"Jf","D1",()=>{var q=$.eE()
return q.bx(0,63).fl(0,q)})
s($,"Je","n6",()=>A.AN())
s($,"JN","zL",()=>A.yx(null,t.S))
s($,"Kh","DD",()=>A.EG(A.l([A.z0("files"),A.z0("blocks")],t.s)))
s($,"Jo","yi",()=>{var q,p,o=A.D(t.N,A.ac("eQ"))
for(q=0;q<2;++q){p=B.cg[q]
o.j(0,p.c,p)}return o})
s($,"Ke","DA",()=>A.AM())
r($,"JO","jr",()=>{var q="navigator"
return A.EA(A.EB(A.zz(A.CV(),q),A.z0("locks")))?A.zz(A.zz(A.CV(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.f_,ArrayBuffer:A.eZ,ArrayBufferView:A.hN,DataView:A.hM,Float32Array:A.kC,Float64Array:A.kD,Int16Array:A.kE,Int32Array:A.kF,Int8Array:A.kG,Uint16Array:A.hO,Uint32Array:A.hP,Uint8ClampedArray:A.hQ,CanvasPixelArray:A.hQ,Uint8Array:A.e5})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.f0.$nativeSuperclassTag="ArrayBufferView"
A.iO.$nativeSuperclassTag="ArrayBufferView"
A.iP.$nativeSuperclassTag="ArrayBufferView"
A.dh.$nativeSuperclassTag="ArrayBufferView"
A.iQ.$nativeSuperclassTag="ArrayBufferView"
A.iR.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.IO
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
