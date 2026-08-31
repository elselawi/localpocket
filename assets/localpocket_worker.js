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
if(a[b]!==s){A.Mh(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.C6(b)
return new s(c,this)}:function(){if(s===null)s=A.C6(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.C6(a).prototype
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
Cf(a,b,c,d){return{i:a,p:b,e:c,x:d}},
Ap(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Cd==null){A.LO()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.DD("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.yH
if(o==null)o=$.yH=A.Ao(n)
p=q[o]}if(p!=null)return p
p=A.LX(a)
if(p!=null)return p
if(typeof a=="function")return B.c8
s=Object.getPrototypeOf(a)
if(s==null)return B.b9
if(s===Object.prototype)return B.b9
if(typeof q=="function"){o=$.yH
if(o==null)o=$.yH=A.Ao(n)
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
Bd(a,b){if(a<0||a>4294967295)throw A.b(A.as(a,0,4294967295,"length",null))
return J.D5(new Array(a),b)},
D4(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
D3(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
D5(a,b){var s=A.l(a,b.i("B<0>"))
s.$flags=1
return s},
Hq(a,b){return J.Cv(a,b)},
D6(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Ht(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.D6(r))break;++b}return b},
D7(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.D6(r))break}return b},
dq(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ix.prototype
return J.lA.prototype}if(typeof a=="string")return J.dE.prototype
if(a==null)return J.iy.prototype
if(typeof a=="boolean")return J.lz.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fy.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Ap(a)},
L(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fy.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Ap(a)},
az(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fy.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Ap(a)},
LG(a){if(typeof a=="number")return J.er.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
LH(a){if(typeof a=="number")return J.er.prototype
if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
An(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
kk(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fy.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Ap(a)},
w(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dq(a).R(a,b)},
S(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Fq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
bZ(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Fq(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.az(a).j(a,b,c)},
aL(a,b){return J.az(a).u(a,b)},
AU(a,b){return J.az(a).C(a,b)},
AV(a,b){return J.An(a).hL(a,b)},
oN(a){return J.kk(a).mv(a)},
Ct(a,b,c){return J.kk(a).hM(a,b,c)},
Cu(a,b,c){return J.kk(a).mw(a,b,c)},
Gr(a){return J.kk(a).mx(a)},
bM(a,b,c){return J.kk(a).hN(a,b,c)},
oO(a,b){return J.az(a).hQ(a,b)},
Gs(a,b,c){return J.LG(a).bN(a,b,c)},
Cv(a,b){return J.LH(a).Z(a,b)},
AW(a,b){return J.L(a).F(a,b)},
oP(a,b){return J.az(a).a6(a,b)},
ku(a,b){return J.az(a).cE(a,b)},
Gt(a){return J.kk(a).ga8(a)},
ci(a){return J.az(a).gG(a)},
a7(a){return J.dq(a).gJ(a)},
by(a){return J.L(a).gE(a)},
ea(a){return J.L(a).gV(a)},
E(a){return J.az(a).gt(a)},
oQ(a){return J.az(a).ga_(a)},
ak(a){return J.L(a).gm(a)},
bN(a){return J.dq(a).gal(a)},
AX(a){return J.az(a).gap(a)},
Gu(a,b,c){return J.az(a).fL(a,b,c)},
Gv(a,b,c){return J.az(a).aE(a,b,c)},
b3(a,b,c){return J.az(a).ce(a,b,c)},
Gw(a,b,c){return J.An(a).ej(a,b,c)},
Gx(a,b){return J.L(a).sm(a,b)},
Gy(a,b,c,d,e){return J.az(a).ah(a,b,c,d,e)},
oR(a,b){return J.az(a).bk(a,b)},
Cw(a,b){return J.az(a).ck(a,b)},
Gz(a,b){return J.An(a).cQ(a,b)},
GA(a,b){return J.An(a).S(a,b)},
GB(a,b,c){return J.az(a).T(a,b,c)},
AY(a,b){return J.az(a).cL(a,b)},
GC(a){return J.az(a).eu(a)},
a_(a){return J.dq(a).l(a)},
Cx(a,b){return J.az(a).dv(a,b)},
Cy(a,b){return J.az(a).kI(a,b)},
lx:function lx(){},
lz:function lz(){},
iy:function iy(){},
aE:function aE(){},
dG:function dG(){},
m9:function m9(){},
dU:function dU(){},
bQ:function bQ(){},
bq:function bq(){},
fy:function fy(){},
B:function B(a){this.$ti=a},
ly:function ly(){},
rQ:function rQ(a){this.$ti=a},
fe:function fe(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
er:function er(){},
ix:function ix(){},
lA:function lA(){},
dE:function dE(){}},A={Bg:function Bg(){},
fg(a,b,c){if(t.O.b(a))return new A.jE(a,b.i("@<0>").U(c).i("jE<1,2>"))
return new A.ee(a,b.i("@<0>").U(c).i("ee<1,2>"))},
D9(a){return new A.dF("Field '"+a+"' has been assigned during initialization.")},
Da(a){return new A.dF("Field '"+a+"' has not been initialized.")},
Hx(a){return new A.dF("Field '"+a+"' has already been initialized.")},
fQ(a){return new A.mk(a)},
As(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
av(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h7(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bY(a,b,c){return a},
Ce(a){var s,r
for(s=$.f2.length,r=0;r<s;++r)if(a===$.f2[r])return!0
return!1},
cu(a,b,c,d){A.bb(b,"start")
if(c!=null){A.bb(c,"end")
if(b>c)A.v(A.as(b,0,c,"start",null))}return new A.ct(a,b,c,d.i("ct<0>"))},
dJ(a,b,c,d){if(t.O.b(a))return new A.em(a,b,c.i("@<0>").U(d).i("em<1,2>"))
return new A.cl(a,b,c.i("@<0>").U(d).i("cl<1,2>"))},
Dx(a,b,c){var s="takeCount"
A.kz(b,s)
A.bb(b,s)
if(t.O.b(a))return new A.ih(a,b,c.i("ih<0>"))
return new A.eI(a,b,c.i("eI<0>"))},
Dv(a,b,c){var s="count"
if(t.O.b(a)){A.kz(b,s)
A.bb(b,s)
return new A.fq(a,b,c.i("fq<0>"))}A.kz(b,s)
A.bb(b,s)
return new A.da(a,b,c.i("da<0>"))},
aD(){return new A.bi("No element")},
iv(){return new A.bi("Too many elements")},
D1(){return new A.bi("Too few elements")},
mA(a,b,c,d){if(c-b<=32)A.If(a,b,c,d)
else A.Ie(a,b,c,d)},
If(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.L(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Ie(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.L(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
p=J.w(a6.$2(a,a1),0)
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
A.mA(a3,a4,r-2,a6)
A.mA(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.w(a6.$2(c.h(a3,r),a),0))++r
while(J.w(a6.$2(c.h(a3,q),a1),0))--q
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
break}}A.mA(a3,r,q,a6)}else A.mA(a3,r,q,a6)},
xY:function xY(a){this.a=0
this.b=a},
xy:function xy(a){this.a=0
this.b=a},
dX:function dX(){},
kS:function kS(a,b){this.a=a
this.$ti=b},
ee:function ee(a,b){this.a=a
this.$ti=b},
jE:function jE(a,b){this.a=a
this.$ti=b},
jB:function jB(){},
xz:function xz(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){this.a=a
this.$ti=b},
ph:function ph(a,b){this.a=a
this.b=b},
pg:function pg(a){this.a=a},
dF:function dF(a){this.a=a},
mk:function mk(a){this.a=a},
cj:function cj(a){this.a=a},
Az:function Az(){},
vF:function vF(){},
J:function J(){},
V:function V(){},
ct:function ct(a,b,c,d){var _=this
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
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
lM:function lM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
aj:function aj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
ik:function ik(a,b,c){this.a=a
this.b=b
this.$ti=c},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eI:function eI(a,b,c){this.a=a
this.b=b
this.$ti=c},
ih:function ih(a,b,c){this.a=a
this.b=b
this.$ti=c},
mN:function mN(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b,c){this.a=a
this.b=b
this.$ti=c},
mz:function mz(a,b,c){this.a=a
this.b=b
this.$ti=c},
en:function en(a){this.$ti=a},
lf:function lf(a){this.$ti=a},
bG:function bG(a,b){this.a=a
this.$ti=b},
nc:function nc(a,b){this.a=a
this.$ti=b},
io:function io(){},
mZ:function mZ(){},
hb:function hb(){},
bU:function bU(a,b){this.a=a
this.$ti=b},
jk:function jk(a){this.a=a},
kb:function kb(){},
GV(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bE(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.q)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aW(q,A.bE(new A.ao(a,m.i("ao<2>")),!0,c),b.i("@<0>").U(c).i("aW<1,2>"))
n.$keys=l
return n}return new A.ic(A.ba(a,b,c),b.i("@<0>").U(c).i("ic<1,2>"))},
GW(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
GX(){throw A.b(A.Y("Cannot modify constant Set"))},
FK(a){var s=A.FJ(a)
if(s!=null)return s
return"minified:"+a},
Fq(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a_(a)
return s},
eB(a){var s,r=$.Dk
if(r==null)r=$.Dk=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
j1(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
HY(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.ci(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mb(a){var s,r,q,p
if(a instanceof A.j)return A.bv(A.bx(a),null)
s=J.dq(a)
if(s===B.c7||s===B.c9||t.cx.b(a)){r=B.aS(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bv(A.bx(a),null)},
Dm(a){var s,r,q
if(a==null||typeof a=="number"||A.bI(a))return J.a_(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eh)return a.l(0)
if(a instanceof A.hy)return a.mk(!0)
s=$.Gl()
for(r=0;r<1;++r){q=s[r].xE(a)
if(q!=null)return q}return"Instance of '"+A.mb(a)+"'"},
HU(){return Date.now()},
HX(){var s,r
if($.uQ!==0)return
$.uQ=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.uQ=1e6
$.mc=new A.uP(r)},
HT(){if(!!self.location)return self.location.href
return null},
Dj(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
HZ(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
if(!A.ax(q))throw A.b(A.f4(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ae(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.f4(q))}return A.Dj(p)},
Dn(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ax(q))throw A.b(A.f4(q))
if(q<0)throw A.b(A.f4(q))
if(q>65535)return A.HZ(a)}return A.Dj(a)},
I_(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bs(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ae(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.as(a,0,1114111,null,null))},
I0(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.ak(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
br(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Br(a){return a.c?A.br(a).getUTCFullYear()+0:A.br(a).getFullYear()+0},
Bp(a){return a.c?A.br(a).getUTCMonth()+1:A.br(a).getMonth()+1},
uO(a){return a.c?A.br(a).getUTCDate()+0:A.br(a).getDate()+0},
Bn(a){return a.c?A.br(a).getUTCHours()+0:A.br(a).getHours()+0},
Bo(a){return a.c?A.br(a).getUTCMinutes()+0:A.br(a).getMinutes()+0},
Bq(a){return a.c?A.br(a).getUTCSeconds()+0:A.br(a).getSeconds()+0},
Dl(a){return a.c?A.br(a).getUTCMilliseconds()+0:A.br(a).getMilliseconds()+0},
HW(a){return B.c.ak((a.c?A.br(a).getUTCDay()+0:A.br(a).getDay()+0)+6,7)+1},
HV(a){var s=a.$thrownJsError
if(s==null)return null
return A.ag(s)},
md(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
Ah(a,b){var s,r="index"
if(!A.ax(b))return new A.bz(!0,b,r,null)
s=J.ak(a)
if(b<0||b>=s)return A.lu(b,s,a,null,r)
return A.vs(b,r)},
Ly(a,b,c){if(a<0||a>c)return A.as(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.as(b,a,c,"end",null)
return new A.bz(!0,b,"end",null)},
f4(a){return new A.bz(!0,a,null,null)},
b(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.dd()
b.dartException=a
s=A.Mi
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Mi(){return J.a_(this.dartException)},
v(a,b){throw A.aK(a,b==null?new Error():b)},
I(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.v(A.JY(a,b,c),s)},
JY(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cS("'"+s+"': Cannot "+o+" "+l+k+n)},
q(a){throw A.b(A.ay(a))},
de(a){var s,r,q,p,o,n
a=A.Fz(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.wp(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
wq(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
DC(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Bh(a,b){var s=b==null,r=s?null:b.method
return new A.lB(a,r,s?null:b.receiver)},
D(a){if(a==null)return new A.m0(a)
if(a instanceof A.ij)return A.e8(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e8(a,a.dartException)
return A.KS(a)},
e8(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
KS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ae(r,16)&8191)===10)switch(q){case 438:return A.e8(a,A.Bh(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.e8(a,new A.iY())}}if(a instanceof TypeError){p=$.FT()
o=$.FU()
n=$.FV()
m=$.FW()
l=$.FZ()
k=$.G_()
j=$.FY()
$.FX()
i=$.G1()
h=$.G0()
g=p.bQ(s)
if(g!=null)return A.e8(a,A.Bh(s,g))
else{g=o.bQ(s)
if(g!=null){g.method="call"
return A.e8(a,A.Bh(s,g))}else if(n.bQ(s)!=null||m.bQ(s)!=null||l.bQ(s)!=null||k.bQ(s)!=null||j.bQ(s)!=null||m.bQ(s)!=null||i.bQ(s)!=null||h.bQ(s)!=null)return A.e8(a,new A.iY())}return A.e8(a,new A.mY(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.je()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e8(a,new A.bz(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.je()
return a},
ag(a){var s
if(a instanceof A.ij)return a.b
if(a==null)return new A.jX(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jX(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kl(a){if(a==null)return J.a7(a)
if(typeof a=="object")return A.eB(a)
return J.a7(a)},
Lk(a){if(typeof a=="number")return B.x.gJ(a)
if(a instanceof A.og)return A.eB(a)
if(a instanceof A.hy)return a.gJ(a)
if(a instanceof A.jk)return a.gJ(0)
return A.kl(a)},
Fm(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
LE(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
Ka(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.CS("Unsupported number of arguments for wrapped closure"))},
e7(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Lr(a,b)
a.$identity=s
return s},
Lr(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Ka)},
GP(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.vQ().constructor.prototype):Object.create(new A.i6(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.CM(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.GL(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.CM(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
GL(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.GG)}throw A.b("Error in functionType of tearoff")},
GM(a,b,c,d){var s=A.CJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
CM(a,b,c,d){if(c)return A.GO(a,b,d)
return A.GM(b.length,d,a,b)},
GN(a,b,c,d){var s=A.CJ,r=A.GH
switch(b?-1:a){case 0:throw A.b(new A.ms("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
GO(a,b,c){var s,r
if($.CH==null)$.CH=A.CG("interceptor")
if($.CI==null)$.CI=A.CG("receiver")
s=b.length
r=A.GN(s,c,a,b)
return r},
C6(a){return A.GP(a)},
GG(a,b){return A.k5(v.typeUniverse,A.bx(a.a),b)},
CJ(a){return a.a},
GH(a){return a.b},
CG(a){var s,r,q,p=new A.i6("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
Ao(a){return v.getIsolateTag(a)},
Mm(a,b){var s=$.C
if(s===B.i)return a
return s.hP(a,b)},
FD(){return v.G},
Nt(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
LX(a){var s,r,q,p,o,n=$.Fo.$1(a),m=$.Ai[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Aw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.F4.$2(a,n)
if(q!=null){m=$.Ai[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Aw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.Ay(s)
$.Ai[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.Aw[n]=s
return s}if(p==="-"){o=A.Ay(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Fw(a,s)
if(p==="*")throw A.b(A.DD(n))
if(v.leafTags[n]===true){o=A.Ay(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Fw(a,s)},
Fw(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Cf(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
Ay(a){return J.Cf(a,!1,null,!!a.$ibR)},
LZ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.Ay(s)
else return J.Cf(s,c,null,null)},
LO(){if(!0===$.Cd)return
$.Cd=!0
A.LP()},
LP(){var s,r,q,p,o,n,m,l
$.Ai=Object.create(null)
$.Aw=Object.create(null)
A.LN()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Fy.$1(o)
if(n!=null){m=A.LZ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
LN(){var s,r,q,p,o,n,m=B.bF()
m=A.hR(B.bG,A.hR(B.bH,A.hR(B.aT,A.hR(B.aT,A.hR(B.bI,A.hR(B.bJ,A.hR(B.bK(B.aS),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Fo=new A.At(p)
$.F4=new A.Au(o)
$.Fy=new A.Av(n)},
hR(a,b){return a(b)||b},
Jf(a,b){var s
for(s=0;s<a.length;++s)if(!J.w(a[s],b[s]))return!1
return!0},
Lv(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Bf(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
Mb(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.es){s=B.a.ad(a,c)
return b.b.test(s)}else return!J.AV(b,B.a.ad(a,c)).gE(0)},
Fk(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Fz(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
y(a,b,c){var s
if(typeof b=="string")return A.Md(a,b,c)
if(b instanceof A.es){s=b.glQ()
s.lastIndex=0
return a.replace(s,A.Fk(c))}return A.Mc(a,b,c)},
Mc(a,b,c){var s,r,q,p
for(s=J.AV(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gP())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Md(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Fz(b),"g"),A.Fk(c))},
EY(a){return a},
FE(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hL(0,a),s=new A.no(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.EY(B.a.A(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.EY(B.a.ad(a,q)))
return s.charCodeAt(0)==0?s:s},
Me(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.FF(a,s,s+b.length,c)},
FF(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a4:function a4(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a){this.a=a},
o_:function o_(a){this.a=a},
ic:function ic(a,b){this.a=a
this.$ti=b},
fm:function fm(){},
q_:function q_(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
eU:function eU(a,b){this.a=a
this.$ti=b},
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iq:function iq(a,b){this.a=a
this.$ti=b},
id:function id(){},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
rK:function rK(){},
iu:function iu(a,b){this.a=a
this.$ti=b},
uP:function uP(a){this.a=a},
j7:function j7(){},
wp:function wp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iY:function iY(){},
lB:function lB(a,b,c){this.a=a
this.b=b
this.c=c},
mY:function mY(a){this.a=a},
m0:function m0(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
jX:function jX(a){this.a=a
this.b=null},
eh:function eh(){},
pm:function pm(){},
pn:function pn(){},
wf:function wf(){},
vQ:function vQ(){},
i6:function i6(a,b){this.a=a
this.b=b},
ms:function ms(a){this.a=a},
bC:function bC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
rR:function rR(a){this.a=a},
tt:function tt(a,b){var _=this
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
ao:function ao(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
lJ:function lJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iA:function iA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iz:function iz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
At:function At(a){this.a=a},
Au:function Au(a){this.a=a},
Av:function Av(a){this.a=a},
hy:function hy(){},
nW:function nW(){},
nX:function nX(){},
nY:function nY(){},
es:function es(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(a){this.b=a},
nn:function nn(a,b,c){this.a=a
this.b=b
this.c=c},
no:function no(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h4:function h4(a,b){this.a=a
this.c=b},
ob:function ob(a,b,c){this.a=a
this.b=b
this.c=c},
zd:function zd(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Mh(a){throw A.aK(A.D9(a),new Error())},
A(){throw A.aK(A.Da(""),new Error())},
cy(){throw A.aK(A.Hx(""),new Error())},
AO(){throw A.aK(A.D9(""),new Error())},
BO(){var s=new A.nw("")
return s.b=s},
xA(a){var s=new A.nw(a)
return s.b=s},
nw:function nw(a){this.a=a
this.b=null},
hM(a,b,c){},
b2(a){var s,r,q
if(t.iy.b(a))return a
s=J.L(a)
r=A.ae(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
HM(a){return new DataView(new ArrayBuffer(a))},
De(a,b,c){A.hM(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d5(a,b,c){A.hM(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
HN(a){return new Int8Array(a)},
HO(a){return new Uint16Array(a)},
Df(a,b,c){A.hM(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
u9(a){return new Uint8Array(a)},
bT(a,b,c){A.hM(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dl(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.Ah(b,a))},
dm(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Ly(a,b,c))
if(b==null)return c
return b},
fF:function fF(){},
fE:function fE(){},
iT:function iT(){},
oj:function oj(a){this.a=a},
iS:function iS(){},
fG:function fG(){},
dN:function dN(){},
bS:function bS(){},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
lX:function lX(){},
lY:function lY(){},
iU:function iU(){},
iV:function iV(){},
iW:function iW(){},
ex:function ex(){},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
jT:function jT(){},
Bv(a,b){var s=b.c
return s==null?b.c=A.k3(a,"z",[b.x]):s},
Ds(a){var s=a.w
if(s===6||s===7)return A.Ds(a.x)
return s===11||s===12},
I9(a){return a.as},
Fv(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.zi(v.typeUniverse,a,!1)},
LR(a,b){var s,r,q,p,o
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
return A.E8(a1,r,!0)
case 7:s=a2.x
r=A.e5(a1,s,a3,a4)
if(r===s)return a2
return A.E7(a1,r,!0)
case 8:q=a2.y
p=A.hQ(a1,q,a3,a4)
if(p===q)return a2
return A.k3(a1,a2.x,p)
case 9:o=a2.x
n=A.e5(a1,o,a3,a4)
m=a2.y
l=A.hQ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.BS(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hQ(a1,j,a3,a4)
if(i===j)return a2
return A.E9(a1,k,i)
case 11:h=a2.x
g=A.e5(a1,h,a3,a4)
f=a2.y
e=A.KN(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.E6(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hQ(a1,d,a3,a4)
o=a2.x
n=A.e5(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.BT(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kD("Attempted to substitute unexpected RTI kind "+a0))}},
hQ(a,b,c,d){var s,r,q,p,o=b.length,n=A.zs(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e5(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
KO(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.zs(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e5(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
KN(a,b,c,d){var s,r=b.a,q=A.hQ(a,r,c,d),p=b.b,o=A.hQ(a,p,c,d),n=b.c,m=A.KO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.nJ()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
oD(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.LI(s)
return a.$S()}return null},
LQ(a,b){var s
if(A.Ds(b))if(a instanceof A.eh){s=A.oD(a)
if(s!=null)return s}return A.bx(a)},
bx(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.Z(a)
return A.C1(J.dq(a))},
Z(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.C1(a)},
C1(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.K8(a,s)},
K8(a,b){var s=a instanceof A.eh?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Jp(v.typeUniverse,s.name)
b.$ccache=r
return r},
LI(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.zi(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dr(a){return A.bK(A.n(a))},
Cc(a){var s=A.oD(a)
return A.bK(s==null?A.bx(a):s)},
C4(a){var s
if(a instanceof A.hy)return a.lF()
s=a instanceof A.eh?A.oD(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bN(a).a
if(Array.isArray(a))return A.Z(a)
return A.bx(a)},
bK(a){var s=a.r
return s==null?a.r=new A.og(a):s},
LB(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.k5(v.typeUniverse,A.C4(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Eb(v.typeUniverse,s,A.C4(q[r]))
return A.k5(v.typeUniverse,s,a)},
bL(a){return A.bK(A.zi(v.typeUniverse,a,!1))},
K7(a){var s=this
s.b=A.KL(s)
return s.b(a)},
KL(a){var s,r,q,p
if(a===t.K)return A.Kg
if(A.f7(a))return A.Kk
s=a.w
if(s===6)return A.K4
if(s===1)return A.EH
if(s===7)return A.Kb
r=A.KK(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f7)){a.f="$i"+q
if(q==="p")return A.Ke
if(a===t.m)return A.Kd
return A.Kj}}else if(s===10){p=A.Lv(a.x,a.y)
return p==null?A.EH:p}return A.K2},
KK(a){if(a.w===8){if(a===t.S)return A.ax
if(a===t.W||a===t.o)return A.Kf
if(a===t.N)return A.Ki
if(a===t.y)return A.bI}return null},
K6(a){var s=this,r=A.K1
if(A.f7(s))r=A.JD
else if(s===t.K)r=A.JC
else if(A.hU(s)){r=A.K3
if(s===t.U)r=A.bd
else if(s===t.v)r=A.a6
else if(s===t.o9)r=A.Eq
else if(s===t.jh)r=A.Eu
else if(s===t.dA)r=A.Er
else if(s===t.B)r=A.Es}else if(s===t.S)r=A.an
else if(s===t.N)r=A.G
else if(s===t.y)r=A.hL
else if(s===t.o)r=A.Et
else if(s===t.W)r=A.f0
else if(s===t.m)r=A.be
s.a=r
return s.a(a)},
K2(a){var s=this
if(a==null)return A.hU(s)
return A.LU(v.typeUniverse,A.LQ(a,s),s)},
K4(a){if(a==null)return!0
return this.x.b(a)},
Kj(a){var s,r=this
if(a==null)return A.hU(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dq(a)[s]},
Ke(a){var s,r=this
if(a==null)return A.hU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dq(a)[s]},
Kd(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
EG(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
K1(a){var s=this
if(a==null){if(A.hU(s))return a}else if(s.b(a))return a
throw A.aK(A.EA(a,s),new Error())},
K3(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.EA(a,s),new Error())},
EA(a,b){return new A.k1("TypeError: "+A.DY(a,A.bv(b,null)))},
DY(a,b){return A.ii(a)+": type '"+A.bv(A.C4(a),null)+"' is not a subtype of type '"+b+"'"},
ce(a,b){return new A.k1("TypeError: "+A.DY(a,b))},
Kb(a){var s=this
return s.x.b(a)||A.Bv(v.typeUniverse,s).b(a)},
Kg(a){return a!=null},
JC(a){if(a!=null)return a
throw A.aK(A.ce(a,"Object"),new Error())},
Kk(a){return!0},
JD(a){return a},
EH(a){return!1},
bI(a){return!0===a||!1===a},
hL(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.ce(a,"bool"),new Error())},
Eq(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.ce(a,"bool?"),new Error())},
f0(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"double"),new Error())},
Er(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"double?"),new Error())},
ax(a){return typeof a=="number"&&Math.floor(a)===a},
an(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.ce(a,"int"),new Error())},
bd(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.ce(a,"int?"),new Error())},
Kf(a){return typeof a=="number"},
Et(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"num"),new Error())},
Eu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"num?"),new Error())},
Ki(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.aK(A.ce(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.ce(a,"String?"),new Error())},
be(a){if(A.EG(a))return a
throw A.aK(A.ce(a,"JSObject"),new Error())},
Es(a){if(a==null)return a
if(A.EG(a))return a
throw A.aK(A.ce(a,"JSObject?"),new Error())},
ET(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bv(a[q],b)
return s},
KA(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ET(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bv(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
EE(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bv(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bv(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bv(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bv(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bv(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bv(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bv(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bv(a.x,b)+">"
if(m===8){p=A.KR(a.x)
o=a.y
return o.length>0?p+("<"+A.ET(o,b)+">"):p}if(m===10)return A.KA(a,b)
if(m===11)return A.EE(a,b,null)
if(m===12)return A.EE(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
KR(a){var s=A.FJ(a)
if(s!=null)return s
return"minified:"+a},
Jq(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Jp(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.zi(a,b,!1)
else if(typeof m=="number"){s=m
r=A.k4(a,5,"#")
q=A.zs(s)
for(p=0;p<s;++p)q[p]=r
o=A.k3(a,b,q)
n[b]=o
return o}else return m},
Jo(a,b){return A.Eo(a.tR,b)},
Jn(a,b){return A.Eo(a.eT,b)},
zi(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Ea(a,null,b,!1)
r.set(b,s)
return s},
k5(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Ea(a,b,c,!0)
q.set(c,r)
return r},
Eb(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.BS(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Ea(a,b,c,d){return A.Jd(A.J7(a,b,c,d))},
e4(a,b){b.a=A.K6
b.b=A.K7
return b},
k4(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cp(null,null)
s.w=b
s.as=c
r=A.e4(a,s)
a.eC.set(c,r)
return r},
E8(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Jl(a,b,r,c)
a.eC.set(r,s)
return s},
Jl(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f7(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.hU(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cp(null,null)
q.w=6
q.x=b
q.as=c
return A.e4(a,q)},
E7(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Jj(a,b,r,c)
a.eC.set(r,s)
return s},
Jj(a,b,c,d){var s,r
if(d){s=b.w
if(A.f7(b)||b===t.K)return b
else if(s===1)return A.k3(a,"z",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cp(null,null)
r.w=7
r.x=b
r.as=c
return A.e4(a,r)},
Jm(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=13
s.x=b
s.as=q
r=A.e4(a,s)
a.eC.set(q,r)
return r},
k2(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ji(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
k3(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.k2(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cp(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e4(a,r)
a.eC.set(p,q)
return q},
BS(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.k2(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cp(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e4(a,o)
a.eC.set(q,n)
return n},
E9(a,b,c){var s,r,q="+"+(b+"("+A.k2(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e4(a,s)
a.eC.set(q,r)
return r},
E6(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.k2(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.k2(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ji(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cp(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e4(a,p)
a.eC.set(r,o)
return o},
BT(a,b,c,d){var s,r=b.as+("<"+A.k2(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Jk(a,b,c,r,d)
a.eC.set(r,s)
return s},
Jk(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.zs(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e5(a,b,r,0)
m=A.hQ(a,c,r,0)
return A.BT(a,n,m,c!==m)}}l=new A.cp(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e4(a,l)},
J7(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Jd(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.J9(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.E2(a,r,l,k,!1)
else if(q===46)r=A.E2(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eW(a.u,a.e,k.pop()))
break
case 94:k.push(A.Jm(a.u,k.pop()))
break
case 35:k.push(A.k4(a.u,5,"#"))
break
case 64:k.push(A.k4(a.u,2,"@"))
break
case 126:k.push(A.k4(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Jb(a,k)
break
case 38:A.Ja(a,k)
break
case 63:p=a.u
k.push(A.E8(p,A.eW(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.E7(p,A.eW(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.J8(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.E3(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Je(a.u,a.e,o)
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
return A.eW(a.u,a.e,m)},
J9(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
E2(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Jq(s,o.x)[p]
if(n==null)A.v('No "'+p+'" in "'+A.I9(o)+'"')
d.push(A.k5(s,o,n))}else d.push(p)
return m},
Jb(a,b){var s,r=a.u,q=A.E1(a,b),p=b.pop()
if(typeof p=="string")b.push(A.k3(r,p,q))
else{s=A.eW(r,a.e,p)
switch(s.w){case 11:b.push(A.BT(r,s,q,a.n))
break
default:b.push(A.BS(r,s,q))
break}}},
J8(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.E1(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eW(p,a.e,o)
q=new A.nJ()
q.a=s
q.b=n
q.c=m
b.push(A.E6(p,r,q))
return
case-4:b.push(A.E9(p,b.pop(),s))
return
default:throw A.b(A.kD("Unexpected state under `()`: "+A.r(o)))}},
Ja(a,b){var s=b.pop()
if(0===s){b.push(A.k4(a.u,1,"0&"))
return}if(1===s){b.push(A.k4(a.u,4,"1&"))
return}throw A.b(A.kD("Unexpected extended operation "+A.r(s)))},
E1(a,b){var s=b.splice(a.p)
A.E3(a.u,a.e,s)
a.p=b.pop()
return s},
eW(a,b,c){if(typeof c=="string")return A.k3(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Jc(a,b,c)}else return c},
E3(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eW(a,b,c[s])},
Je(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eW(a,b,c[s])},
Jc(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kD("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kD("Bad index "+c+" for "+b.l(0)))},
LU(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aU(a,b,null,c,null)
r.set(c,s)}return s},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f7(d))return!0
s=b.w
if(s===4)return!0
if(A.f7(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aU(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aU(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aU(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aU(a,b.x,c,d,e))return!1
return A.aU(a,A.Bv(a,b),c,d,e)}if(s===6)return A.aU(a,p,c,d,e)&&A.aU(a,b.x,c,d,e)
if(q===7){if(A.aU(a,b,c,d.x,e))return!0
return A.aU(a,b,c,A.Bv(a,d),e)}if(q===6)return A.aU(a,b,c,p,e)||A.aU(a,b,c,d.x,e)
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
if(!A.aU(a,j,c,i,e)||!A.aU(a,i,e,j,c))return!1}return A.EF(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.EF(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Kc(a,b,c,d,e)}if(o&&q===10)return A.Kh(a,b,c,d,e)
return!1},
EF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Kc(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.k5(a,b,r[o])
return A.Ep(a,p,null,c,d.y,e)}return A.Ep(a,b.y,null,c,d.y,e)},
Ep(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aU(a,b[s],d,e[s],f))return!1
return!0},
Kh(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aU(a,r[s],c,q[s],e))return!1
return!0},
hU(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.f7(a))if(s!==6)r=s===7&&A.hU(a.x)
return r},
f7(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Eo(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
zs(a){return a>0?new Array(a):v.typeUniverse.sEA},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
nJ:function nJ(){this.c=this.b=this.a=null},
og:function og(a){this.a=a},
nG:function nG(){},
k1:function k1(a){this.a=a},
IE(){var s,r,q
if(self.scheduleImmediate!=null)return A.KV()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e7(new A.xg(s),1)).observe(r,{childList:true})
return new A.xf(s,r,q)}else if(self.setImmediate!=null)return A.KW()
return A.KX()},
IF(a){self.scheduleImmediate(A.e7(new A.xh(a),0))},
IG(a){self.setImmediate(A.e7(new A.xi(a),0))},
IH(a){A.BE(B.D,a)},
BE(a,b){var s=B.c.M(a.a,1000)
return A.Jg(s<0?0:s,b)},
Dz(a,b){var s=B.c.M(a.a,1000)
return A.Jh(s<0?0:s,b)},
Jg(a,b){var s=new A.k0(!0)
s.oR(a,b)
return s},
Jh(a,b){var s=new A.k0(!1)
s.oS(a,b)
return s},
h(a){return new A.ju(new A.t($.C,a.i("t<0>")),a.i("ju<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.Ev(a,b)},
e(a,b){b.aD(a)},
d(a,b){b.c6(A.D(a),A.ag(a))},
Ev(a,b){var s,r,q=new A.zH(b),p=new A.zI(b)
if(a instanceof A.t)a.mi(q,p,t.z)
else{s=t.z
if(a instanceof A.t)a.bU(q,p,s)
else{r=new A.t($.C,t._)
r.a=8
r.c=a
r.mi(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fu(new A.A_(s),t.H,t.S,t.z)},
bV(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cU(null)
else{s=c.a
s===$&&A.A()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.D(a)
q=A.ag(a)
s.am(new A.al(r,q))}else{s=A.D(a)
r=A.ag(a)
q=c.a
q===$&&A.A()
q.bz(s,r)
c.a.p()}return}if(a instanceof A.jM){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.A()
r.u(0,s)
A.ko(new A.zF(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.A()
s.us(p,!1).aj(new A.zG(c,b),t.P)
return}}A.Ev(a,b)},
EX(a){var s=a.a
s===$&&A.A()
return new A.b7(s,A.n(s).i("b7<1>"))},
II(a,b){var s=new A.nq(b.i("nq<0>"))
s.oN(a,b)
return s},
EI(a,b){return A.II(a,b)},
J3(a){return new A.jM(a,1)},
e_(a){return new A.jM(a,0)},
E5(a,b,c){return 0},
i3(a){var s
if(t.C.b(a)){s=a.gcl()
if(s!=null)return s}return B.P},
ip(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.D(q)
r=A.ag(q)
p=new A.t($.C,b.i("t<0>"))
o=s
n=r
m=A.kc(o,n)
if(m==null)o=new A.al(o,n==null?A.i3(o):n)
else o=m
p.cm(o)
return p}return b.i("z<0>").b(l)?l:A.bn(l,b)},
bp(a,b){var s=a==null?b.a(a):a,r=new A.t($.C,b.i("t<0>"))
r.aM(s)
return r},
Hi(a,b){var s
if(!b.b(null))throw A.b(A.aA(null,"computation","The type parameter is not nullable"))
s=new A.t($.C,b.i("t<0>"))
A.cP(a,new A.rf(null,s,b))
return s},
B9(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.t($.C,b.i("t<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.rh(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bU(new A.rg(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cU(A.l([],b.i("B<0>")))
return n}i.a=A.ae(n,null,!1,b.i("0?"))}catch(l){p=A.D(l)
o=A.ag(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kc(m,k)
if(j==null)m=new A.al(m,k==null?A.i3(m):k)
else m=j
n.cm(m)
return n}else{i.d=p
i.c=o}}return f},
B8(a,b,c,d){var s=new A.ra(d,null,b,c),r=$.C,q=new A.t(r,c.i("t<0>"))
if(r!==B.i)s=r.fu(s,c.i("0/"),t.K,t.l)
a.dG(new A.cb(q,2,null,s,a.$ti.i("@<1>").U(c).i("cb<1,2>")))
return q},
Hg(a,b){var s,r,q,p=A.l([],b.i("B<jK<0>>"))
for(s=a.length,r=b.i("jK<0>"),q=0;q<a.length;a.length===s||(0,A.q)(a),++q)p.push(new A.jK(a[q],r))
if(p.length===0)return A.bp(A.l([],b.i("B<0>")),b.i("p<0>"))
s=new A.t($.C,b.i("t<p<0>>"))
A.IY(p,new A.rb(new A.am(s,b.i("am<p<0>>")),p,b))
return s},
Kp(a){return a!=null},
IY(a,b){var s,r={},q=r.a=r.b=0,p=new A.ye(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.q)(a),++q)a[q].u8(p)},
kc(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.mP(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.md(r,q)
return s},
f1(a,b){var s
if($.C!==B.i){s=A.kc(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcl()
if(b==null){A.md(a,B.P)
b=B.P}}else b=B.P
else if(t.C.b(a))A.md(a,b)
return new A.al(a,b)},
IX(a,b,c){var s=new A.t(b,c.i("t<0>"))
s.a=8
s.c=a
return s},
bn(a,b){var s=new A.t($.C,b.i("t<0>"))
s.a=8
s.c=a
return s},
yk(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.By()
b.cm(new A.al(new A.bz(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lV(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eT()
b.fU(p.a)
A.eS(b,q)
return}b.a^=2
b.b.cO(new A.yl(p,b))},
eS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fe(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eS(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gc8()===k.gc8())}else f=!1
if(f){f=g.a
r=f.c
f.b.fe(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.yp(s,g,p).$0()
else if(q){if((f&1)!==0)new A.yo(s,m).$0()}else if((f&2)!==0)new A.yn(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.t){r=s.a.$ti
r=r.i("z<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hv(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.yk(f,i,!0)
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
EN(a,b){if(t.ng.b(a))return b.fu(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dn(a,t.z,t.K)
throw A.b(A.aA(a,"onError",u.w))},
Ko(){var s,r
for(s=$.hO;s!=null;s=$.hO){$.ke=null
r=s.b
$.hO=r
if(r==null)$.kd=null
s.a.$0()}},
KM(){$.C2=!0
try{A.Ko()}finally{$.ke=null
$.C2=!1
if($.hO!=null)$.Co().$1(A.F7())}},
EV(a){var s=new A.np(a),r=$.kd
if(r==null){$.hO=$.kd=s
if(!$.C2)$.Co().$1(A.F7())}else $.kd=r.b=s},
KJ(a){var s,r,q,p=$.hO
if(p==null){A.EV(a)
$.ke=$.kd
return}s=new A.np(a)
r=$.ke
if(r==null){s.b=p
$.hO=$.ke=s}else{q=r.b
s.b=q
$.ke=r.b=s
if(q==null)$.kd=s}},
ko(a){var s,r=null,q=$.C
if(B.i===q){A.zY(r,r,B.i,a)
return}if(B.i===q.gjE().a)s=B.i.gc8()===q.gc8()
else s=!1
if(s){A.zY(r,r,q,q.bT(a,t.H))
return}s=$.C
s.cO(s.f_(a))},
BA(a,b){var s=null,r=b.i("cV<0>"),q=new A.cV(s,s,s,s,r)
q.aC(a)
q.lh()
return new A.b7(q,r.i("b7<1>"))},
MH(a,b){return new A.cd(A.bY(a,"stream",t.K),b.i("cd<0>"))},
vS(a,b,c,d,e){return d?new A.hF(b,null,c,a,e.i("hF<0>")):new A.cV(b,null,c,a,e.i("cV<0>"))},
dQ(a,b,c){return new A.jv(b,a,c.i("jv<0>"))},
oz(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.D(q)
r=A.ag(q)
$.C.fe(s,r)}},
IV(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.nu(s,b,f),o=A.xv(s,c),n=d==null?A.A0():d
return new A.dY(a,p,o,s.bT(n,t.H),s,r|q,f.i("dY<0>"))},
ID(a){return new A.xc(a)},
nu(a,b,c){var s=b==null?A.KZ():b
return a.dn(s,t.H,c)},
xv(a,b){if(b==null)b=A.L_()
if(t.b9.b(b))return a.fu(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dn(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Kq(a){},
Ks(a,b){$.C.fe(a,b)},
Kr(){},
DX(a,b){var s=$.C,r=new A.hq(s,b.i("hq<0>"))
A.ko(r.glS())
if(a!=null)r.c=s.bT(a,t.H)
return r},
JL(a,b,c){var s=a.D()
if(s!==$.e9())s.aZ(new A.zK(b,c))
else b.am(c)},
JM(a,b,c){var s=a.D()
if(s!==$.e9())s.aZ(new A.zL(b,c))
else b.cn(c)},
cP(a,b){var s=$.C
if(s===B.i)return s.jW(a,b)
return s.jW(a,s.f_(b))},
Dy(a,b){var s,r=$.C
if(r===B.i)return r.jV(a,b)
s=r.hP(b,t.hU)
return $.C.jV(a,s)},
oI(a,b,c,d){return A.KI(a,c,b,d)},
KI(a,b,c,d){return $.C.mU(c,b).aX(a,d)},
KG(a,b,c,d,e){A.kh(d,e)},
kh(a,b){A.KJ(new A.zV(a,b))},
zW(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
zX(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
C3(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
ER(a,b,c,d){return d},
ES(a,b,c,d){return d},
EQ(a,b,c,d){return d},
KF(a,b,c,d,e){return null},
zY(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gc8()
r=c.gc8()
d=s!==r?c.f_(d):c.jR(d,t.H)}A.EV(d)},
KE(a,b,c,d,e){return A.BE(d,B.i!==c?c.jR(e,t.H):e)},
KD(a,b,c,d,e){e=c.uF(e,t.H,t.hU)
return A.Dz(d,e)},
KH(a,b,c,d){A.Fx(d)},
EP(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.Ba(o,o,o,s,s)
r.C(0,e)}else r=o
s=new A.nz(c.gm6(),c.gm8(),c.gm7(),c.gm2(),c.gm3(),c.gm1(),c.glz(),c.gjE(),c.gls(),c.glr(),c.glW(),c.glC(),c.gjo(),c.gjO(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.os(s,q)
p=d.a
if(p!=null)s.as=new A.or(s,p)}if(r!=null)s.at=new A.ot(s,r)
return s},
xg:function xg(a){this.a=a},
xf:function xf(a,b,c){this.a=a
this.b=b
this.c=c},
xh:function xh(a){this.a=a},
xi:function xi(a){this.a=a},
k0:function k0(a){this.a=a
this.b=null
this.c=0},
zg:function zg(a,b){this.a=a
this.b=b},
zf:function zf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ju:function ju(a,b){this.a=a
this.b=!1
this.$ti=b},
zH:function zH(a){this.a=a},
zI:function zI(a){this.a=a},
A_:function A_(a){this.a=a},
zF:function zF(a,b){this.a=a
this.b=b},
zG:function zG(a,b){this.a=a
this.b=b},
nq:function nq(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
xk:function xk(a){this.a=a},
xl:function xl(a){this.a=a},
xn:function xn(a){this.a=a},
xo:function xo(a,b){this.a=a
this.b=b},
xm:function xm(a,b){this.a=a
this.b=b},
xj:function xj(a){this.a=a},
jM:function jM(a,b){this.a=a
this.b=b},
od:function od(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hE:function hE(a,b){this.a=a
this.$ti=b},
al:function al(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b,c,d,e,f,g){var _=this
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
jA:function jA(){},
jv:function jv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
rf:function rf(a,b,c){this.a=a
this.b=b
this.c=c},
rh:function rh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rg:function rg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ra:function ra(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mO:function mO(a,b){this.a=a
this.b=b},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a,b,c){this.c=a
this.d=b
this.$ti=c},
jK:function jK(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
yf:function yf(a,b){this.a=a
this.b=b},
yg:function yg(a,b){this.a=a
this.b=b},
ye:function ye(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(){},
aH:function aH(a,b){this.a=a
this.$ti=b},
am:function am(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e){var _=this
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
yh:function yh(a,b){this.a=a
this.b=b},
ym:function ym(a,b){this.a=a
this.b=b},
yl:function yl(a,b){this.a=a
this.b=b},
yj:function yj(a,b){this.a=a
this.b=b},
yi:function yi(a,b){this.a=a
this.b=b},
yp:function yp(a,b,c){this.a=a
this.b=b
this.c=c},
yq:function yq(a,b){this.a=a
this.b=b},
yr:function yr(a){this.a=a},
yo:function yo(a,b){this.a=a
this.b=b},
yn:function yn(a,b){this.a=a
this.b=b},
ys:function ys(a,b){this.a=a
this.b=b},
yt:function yt(a,b,c){this.a=a
this.b=b
this.c=c},
yu:function yu(a,b){this.a=a
this.b=b},
np:function np(a){this.a=a
this.b=null},
aa:function aa(){},
vV:function vV(a,b){this.a=a
this.b=b},
vW:function vW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vX:function vX(a,b){this.a=a
this.b=b},
vY:function vY(a,b){this.a=a
this.b=b},
vT:function vT(a){this.a=a},
vU:function vU(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(){},
e2:function e2(){},
z9:function z9(a){this.a=a},
z8:function z8(a){this.a=a},
oe:function oe(){},
jw:function jw(){},
cV:function cV(a,b,c,d,e){var _=this
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
nm:function nm(){},
xc:function xc(a){this.a=a},
xb:function xb(a){this.a=a},
jY:function jY(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b1:function b1(){},
xx:function xx(a,b,c){this.a=a
this.b=b
this.c=c},
xw:function xw(a){this.a=a},
hD:function hD(){},
nF:function nF(){},
ca:function ca(a,b){this.b=a
this.a=null
this.$ti=b},
hp:function hp(a,b){this.b=a
this.c=b
this.a=null},
y7:function y7(){},
e1:function e1(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
yS:function yS(a,b){this.a=a
this.b=b},
hq:function hq(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cd:function cd(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jF:function jF(a){this.$ti=a},
dj:function dj(a,b){this.b=a
this.$ti=b},
yQ:function yQ(a,b){this.a=a
this.b=b},
jP:function jP(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
zK:function zK(a,b){this.a=a
this.b=b},
zL:function zL(a,b){this.a=a
this.b=b},
jI:function jI(){},
ht:function ht(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
eV:function eV(a,b,c){this.b=a
this.a=b
this.$ti=c},
jG:function jG(a,b){this.a=a
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
jz:function jz(a,b,c){this.a=a
this.b=b
this.$ti=c},
zC:function zC(a,b){this.a=a
this.b=b},
zE:function zE(a,b){this.a=a
this.b=b},
zD:function zD(a,b){this.a=a
this.b=b},
zA:function zA(a,b){this.a=a
this.b=b},
zB:function zB(a,b){this.a=a
this.b=b},
zz:function zz(a,b){this.a=a
this.b=b},
zw:function zw(a,b){this.a=a
this.b=b},
os:function os(a,b){this.a=a
this.b=b},
zv:function zv(a,b){this.a=a
this.b=b},
zu:function zu(a,b){this.a=a
this.b=b},
zy:function zy(a,b){this.a=a
this.b=b},
zx:function zx(a,b){this.a=a
this.b=b},
or:function or(a,b){this.a=a
this.b=b},
ot:function ot(a,b){this.a=a
this.b=b},
oq:function oq(){},
nz:function nz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
y3:function y3(a,b,c){this.a=a
this.b=b
this.c=c},
y5:function y5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y2:function y2(a,b){this.a=a
this.b=b},
y4:function y4(a,b,c){this.a=a
this.b=b
this.c=c},
o2:function o2(){},
yZ:function yZ(a,b,c){this.a=a
this.b=b
this.c=c},
yY:function yY(a,b){this.a=a
this.b=b},
z_:function z_(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
zV:function zV(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Ba(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dh(d.i("@<0>").U(e).i("dh<1,2>"))
b=A.C8()}else{if(A.Fc()===b&&A.Fb()===a)return new A.dZ(d.i("@<0>").U(e).i("dZ<1,2>"))
if(a==null)a=A.C7()}else{if(b==null)b=A.C8()
if(a==null)a=A.C7()}return A.IW(a,b,c,d,e)},
DZ(a,b){var s=a[b]
return s===a?null:s},
BQ(a,b,c){if(c==null)a[b]=a
else a[b]=c},
BP(){var s=Object.create(null)
A.BQ(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
IW(a,b,c,d,e){var s=c!=null?c:new A.y1(d)
return new A.jC(a,b,s,d.i("@<0>").U(e).i("jC<1,2>"))},
dH(a,b,c,d){if(b==null){if(a==null)return new A.bC(c.i("@<0>").U(d).i("bC<1,2>"))
b=A.C8()}else{if(A.Fc()===b&&A.Fb()===a)return new A.iA(c.i("@<0>").U(d).i("iA<1,2>"))
if(a==null)a=A.C7()}return A.J6(a,b,null,c,d)},
m(a,b,c){return A.Fm(a,new A.bC(b.i("@<0>").U(c).i("bC<1,2>")))},
u(a,b){return new A.bC(a.i("@<0>").U(b).i("bC<1,2>"))},
J6(a,b,c,d,e){return new A.jN(a,b,new A.yO(d),d.i("@<0>").U(e).i("jN<1,2>"))},
lK(a){return new A.di(a.i("di<0>"))},
aO(a){return new A.di(a.i("di<0>"))},
ap(a,b){return A.LE(a,new A.di(b.i("di<0>")))},
BR(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hv(a,b,c){var s=new A.e0(a,b,c.i("e0<0>"))
s.c=a.e
return s},
JT(a,b){return J.w(a,b)},
JU(a){return J.a7(a)},
D2(a){if(a.length===0)return null
return B.b.ga_(a)},
ba(a,b,c){var s=A.dH(null,null,b,c)
a.a1(0,new A.tu(s,b,c))
return s},
cH(a,b,c){var s=A.dH(null,null,b,c)
s.C(0,a)
return s},
tv(a,b){var s,r,q=A.lK(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.u(0,b.a(a[r]))
return q},
d1(a,b){var s=A.lK(b)
s.C(0,a)
return s},
Hy(a,b){var s=t.bP
return J.Cv(s.a(a),s.a(b))},
tK(a){var s,r
if(A.Ce(a))return"{...}"
s=new A.a1("")
try{r={}
$.f2.push(a)
s.a+="{"
r.a=!0
a.a1(0,new A.tL(r,s))
s.a+="}"}finally{$.f2.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Bi(a){return new A.iD(A.ae(A.Hz(null),null,!1,a.i("0?")),a.i("iD<0>"))},
Hz(a){return 8},
dh:function dh(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
yw:function yw(a){this.a=a},
yv:function yv(a){this.a=a},
dZ:function dZ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jC:function jC(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
y1:function y1(a){this.a=a},
eT:function eT(a,b){this.a=a
this.$ti=b},
nK:function nK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
jN:function jN(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
yO:function yO(a){this.a=a},
di:function di(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
yP:function yP(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
tu:function tu(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
nR:function nR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b4:function b4(){},
K:function K(){},
U:function U(){},
tJ:function tJ(a){this.a=a},
tL:function tL(a,b){this.a=a
this.b=b},
jO:function jO(a,b){this.a=a
this.$ti=b},
nT:function nT(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
oi:function oi(){},
iH:function iH(){},
cR:function cR(a,b){this.a=a
this.$ti=b},
iD:function iD(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
nS:function nS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cq:function cq(){},
jW:function jW(){},
k6:function k6(){},
EL(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.D(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.zN(p)
return q},
zN(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.nO(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.zN(a[s])
return a},
JB(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Gb()
else s=new Uint8Array(o)
for(r=J.L(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
JA(a,b,c,d){var s=a?$.Ga():$.G9()
if(s==null)return null
if(0===c&&d===b.length)return A.Em(s,b)
return A.Em(s,b.subarray(c,d))},
Em(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
CA(a,b,c,d,e,f){if(B.c.ak(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
IM(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.aA(b,"Not a byte value at index "+q+": 0x"+B.c.kF(s.h(b,q),16),null))},
IL(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ae(f,2),i=f&3,h=$.Cp()
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
if(i===3){if((j&3)!==0)throw A.b(A.a8(l,a,r))
s&2&&A.I(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a8(l,a,r))
s&2&&A.I(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.DM(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
IJ(a,b,c,d){var s=A.IK(a,b,c),r=(d&3)+(s-b),q=B.c.ae(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.G2()},
IK(a,b,c){var s,r=c,q=r,p=0
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
DM(a,b,c,d){var s,r
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
H5(a){return B.cK.h(0,a.toLowerCase())},
D8(a,b,c){return new A.iB(a,b)},
JX(a){return a.q()},
J4(a,b){return new A.yL(a,[],A.Ls())},
J5(a,b,c){var s,r=new A.a1("")
A.E0(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
E0(a,b,c,d){var s=A.J4(b,c)
s.iH(a)},
En(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nO:function nO(a,b){this.a=a
this.b=b
this.c=null},
yK:function yK(a){this.a=a},
nP:function nP(a){this.a=a},
yI:function yI(a,b,c){this.b=a
this.c=b
this.a=c},
zq:function zq(){},
zp:function zp(){},
kA:function kA(){},
oh:function oh(){},
kB:function kB(a){this.a=a},
zh:function zh(a,b){this.a=a
this.b=b},
kF:function kF(a){this.a=a},
i5:function i5(a){this.a=a},
ns:function ns(a){this.a=0
this.b=a},
xu:function xu(a){this.c=null
this.a=0
this.b=a},
xq:function xq(){},
xd:function xd(a,b){this.a=a
this.b=b},
kG:function kG(){},
nr:function nr(){this.a=0},
xp:function xp(a,b){this.a=a
this.b=b},
p8:function p8(){},
hj:function hj(a){this.a=a},
nv:function nv(a,b){this.a=a
this.b=b
this.c=0},
kT:function kT(){},
o8:function o8(a,b,c){this.a=a
this.b=b
this.$ti=c},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
kV:function kV(){},
aB:function aB(){},
q5:function q5(a){this.a=a},
eo:function eo(){},
iB:function iB(a,b){this.a=a
this.b=b},
lC:function lC(a,b){this.a=a
this.b=b},
rS:function rS(){},
lE:function lE(a){this.b=a},
yJ:function yJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
lD:function lD(a){this.a=a},
yM:function yM(){},
yN:function yN(a,b){this.a=a
this.b=b},
yL:function yL(a,b,c){this.c=a
this.a=b
this.b=c},
lH:function lH(){},
lI:function lI(a){this.a=a},
mK:function mK(){},
ze:function ze(a,b){this.a=a
this.b=b},
k_:function k_(){},
oa:function oa(a){this.a=a},
zo:function zo(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function n3(){},
n4:function n4(){},
ok:function ok(a){this.b=this.a=0
this.c=a},
zr:function zr(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jm:function jm(a){this.a=a},
dk:function dk(a){this.a=a
this.b=16
this.c=0},
ou:function ou(){},
BN(a,b){var s=A.IT(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
IQ(a,b){var s,r,q=$.ch(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bi(0,$.Cq()).fI(0,A.jx(s))
s=0
o=0}}if(b)return q.bB(0)
return q},
DO(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
IR(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.uH(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.DO(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.DO(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ch()
l=A.bH(j,i)
return new A.aI(l===0?!1:c,i,l)},
IT(a,b){var s,r,q,p,o
if(a==="")return null
s=$.G4().eb(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.IQ(p,q)
if(o!=null)return A.IR(o,2,q)
return null},
bH(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
BL(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
DN(a){var s
if(a===0)return $.ch()
if(a===1)return $.fb()
if(a===2)return $.G5()
if(Math.abs(a)<4294967296)return A.jx(B.c.iA(a))
s=A.IN(a)
return s},
jx(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bH(4,s)
return new A.aI(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bH(1,s)
return new A.aI(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ae(a,16)
r=A.bH(2,s)
return new A.aI(r===0?!1:o,s,r)}r=B.c.M(B.c.gmA(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bH(r,s)
return new A.aI(r===0?!1:o,s,r)},
IN(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.O("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.ch()
r=$.G3()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.I(r)
r[p]=0}q=J.oN(B.f.ga8(r))
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
l=new A.aI(!1,m,4)
if(n<0)k=l.dC(0,-n)
else k=n>0?l.bC(0,n):l
if(s)return k.bB(0)
return k},
BM(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.I(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.I(d)
d[s]=0}return b+c},
DU(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.ak(c,16),l=16-m,k=B.c.bC(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dC(p,l)
r&2&&A.I(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bC((p&k)>>>0,m)}r&2&&A.I(d)
d[n]=q},
DP(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.ak(c,16)===0)return A.BM(a,b,o,d)
s=b+o+1
A.DU(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.I(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
IS(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.ak(c,16),m=16-n,l=B.c.bC(1,n)-1,k=B.c.dC(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bC((q&l)>>>0,m)
s&2&&A.I(d)
d[r]=(p|k)>>>0
k=B.c.dC(q,n)}s&2&&A.I(d)
d[j]=k},
xr(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
IO(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ae(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ae(r,16)}s&2&&A.I(e)
e[b]=r},
nt(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ae(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ae(r,16)&1)}},
DV(a,b,c,d,e,f){var s,r,q,p,o,n
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
IP(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iS((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
LM(a){return A.kl(a)},
B4(a,b){return new A.li(new WeakMap(),a,b.i("li<0>"))},
B5(a){},
yd(a,b){var s=$.G6()
s=s==null?null:new s(A.e7(A.Mm(a,b),1))
return new A.nI(s,b.i("nI<0>"))},
aG(a){var s=A.j1(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
LA(a){var s=A.HY(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
H9(a,b){a=A.aK(a,new Error())
a.stack=b.l(0)
throw a},
ae(a,b,c,d){var s,r=c?J.D4(a,d):J.Bd(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bE(a,b,c){var s,r=A.l([],c.i("B<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("B<0>"))
s=A.l([],b.i("B<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
d2(a,b){var s=A.bE(a,!1,b)
s.$flags=3
return s},
dS(a,b,c){var s,r,q,p,o
A.bb(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.as(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Dn(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.In(a,b,c)
if(r)a=J.AY(a,c)
if(b>0)a=J.oR(a,b)
s=A.N(a,t.S)
return A.Dn(s)},
In(a,b,c){var s=a.length
if(b>=s)return""
return A.I_(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.es(a,A.Bf(a,!1,b,c,!1,""))},
LL(a,b){return a==null?b==null:a===b},
vZ(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
BG(){var s,r,q=A.HT()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.DG
if(s!=null&&q===$.DF)return s
r=A.n2(q)
$.DG=r
$.DF=q
return r},
hI(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.G7()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bs(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Jv(a){var s,r,q
if(!$.G8())return A.Jw(a)
s=new URLSearchParams()
a.a1(0,new A.zn(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
By(){return A.ag(new Error())},
B1(a,b,c,d,e,f,g){var s=A.I0(a,b,c,d,e,f,g,0,!0)
return new A.aM(s==null?new A.qJ(a,b,c,d,e,f,g,0).$0():s,0,!0)},
H0(){return new A.aM(Date.now(),0,!1)},
la(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.as(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.as(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aA(b,s,u.B))
A.bY(c,"isUtc",t.y)
return a},
H1(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
CP(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
l9(a){if(a>=10)return""+a
return"0"+a},
dx(a,b,c){return new A.aC(a+1000*b+1e6*c)},
fr(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aA(b,"name","No enum value with that name"))},
ii(a){if(typeof a=="number"||A.bI(a)||a==null)return J.a_(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Dm(a)},
CR(a,b){A.bY(a,"error",t.K)
A.bY(b,"stackTrace",t.l)
A.H9(a,b)},
kD(a){return new A.kC(a)},
O(a,b){return new A.bz(!1,null,b,a)},
aA(a,b,c){return new A.bz(!0,a,b,c)},
kz(a,b){return a},
aZ(a){var s=null
return new A.d8(s,s,!1,s,s,a)},
vs(a,b){return new A.d8(null,null,!0,a,b,"Value not in range")},
as(a,b,c,d,e){return new A.d8(b,c,!0,a,d,"Invalid value")},
Dr(a,b,c,d){if(a<b||a>c)throw A.b(A.as(a,b,c,d,null))
return a},
I3(a,b,c,d){return A.D0(a,d,b,null,c)},
bc(a,b,c){if(0>a||a>c)throw A.b(A.as(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.as(b,a,c,"end",null))
return b}return c},
bb(a,b){if(a<0)throw A.b(A.as(a,0,null,b,null))
return a},
D_(a,b){var s=b.b
return new A.is(s,!0,a,null,"Index out of range")},
lu(a,b,c,d,e){return new A.is(b,!0,a,e,"Index out of range")},
D0(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lu(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cS(a)},
DD(a){return new A.mX(a)},
x(a){return new A.bi(a)},
ay(a){return new A.kY(a)},
CS(a){return new A.nH(a)},
a8(a,b,c){return new A.bh(a,b,c)},
Ho(a,b,c){var s,r
if(A.Ce(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.f2.push(a)
try{A.Kl(a,s)}finally{$.f2.pop()}r=A.vZ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
rP(a,b,c){var s,r
if(A.Ce(a))return b+"..."+c
s=new A.a1(b)
$.f2.push(a)
try{r=s
r.a=A.vZ(r.a,a,", ")}finally{$.f2.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Kl(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
Db(a,b,c,d,e){return new A.ef(a,b.i("@<0>").U(c).U(d).U(e).i("ef<1,2,3,4>"))},
c5(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.h7(A.av(A.av($.fc(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.h7(A.av(A.av(A.av($.fc(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.h7(A.av(A.av(A.av(A.av($.fc(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.h7(A.av(A.av(A.av(A.av(A.av($.fc(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.h7(A.av(A.av(A.av(A.av(A.av(A.av($.fc(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.h7(A.av(A.av(A.av(A.av(A.av(A.av(A.av($.fc(),s),b),c),d),e),f),g))
return g},
ua(a){var s,r=$.fc()
for(s=J.E(a);s.k();)r=A.av(r,J.a7(s.gn()))
return A.h7(r)},
Ew(a,b){return 65536+((a&1023)<<10)+(b&1023)},
n2(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.DE(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnr()
else if(s===32)return A.DE(B.a.A(a5,5,a4),0,a3).gnr()}r=A.ae(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.EU(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.EU(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.ac(a5,"\\",n))if(p>0)h=B.a.ac(a5,"\\",p-1)||B.a.ac(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.ac(a5,"..",n)))h=m>n+2&&B.a.ac(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.ac(a5,"file",0)){if(p<=0){if(!B.a.ac(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.A(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.dq(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.ac(a5,"http",0)){if(i&&o+3===n&&B.a.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dq(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.ac(a5,"https",0)){if(i&&o+4===n&&B.a.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dq(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cc(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.BV(a5,0,q)
else{if(q===0)A.hH(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Ei(a5,c,p-1):""
a=A.Eg(a5,p,o,!1)
i=o+1
if(i<n){a0=A.j1(B.a.A(a5,i,n),a3)
d=A.zj(a0==null?A.v(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Eh(a5,n,m,a3,j,a!=null)
a2=m<l?A.zk(a5,m+1,l,a3):a3
return A.k8(j,b,a,d,a1,a2,l<a4?A.Ef(a5,l+1,a4):a3)},
Iy(a){return A.BY(a,0,a.length,B.k,!1)},
n1(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
Iv(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.n1("each part must be in the range 0..255",a,r)}A.n1("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.n1(k,a,q)}l=p+1
s&2&&A.I(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.n1(k,a,q)
p=l}A.n1("IPv4 address should contain exactly 4 parts",a,q)},
Iw(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Ix(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.DH(a,b,c)
return!0},
Ix(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
DH(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.wA(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Iv(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.c.ae(n,8)
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
B.f.ah(s,b,16,s,c)
B.f.k8(s,c,b,0)}}return s},
k8(a,b,c,d,e,f,g){return new A.k7(a,b,c,d,e,f,g)},
Ec(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hH(a,b,c){throw A.b(A.a8(c,a,b))},
Js(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.F(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
zj(a,b){if(a!=null&&a===A.Ec(b))return null
return a},
Eg(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hH(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Jt(a,r,s)
if(p<s){o=p+1
q=A.El(a,B.a.ac(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Iw(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.ca(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.El(a,B.a.ac(a,"25",o)?s+3:o,c,"%25")}else q=""
A.DH(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.Jy(a,b,c)},
Jt(a,b,c){var s=B.a.ca(a,"%",b)
return s>=b&&s<c?s:c},
El(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a1(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.BW(a,s,!0)
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
m=A.BU(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Jy(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.BW(a,s,!0)
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
k=A.BU(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
BV(a,b,c){var s,r,q
if(b===c)return""
if(!A.Ee(a.charCodeAt(b)))A.hH(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hH(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.Jr(r?a.toLowerCase():a)},
Jr(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Ei(a,b,c){if(a==null)return""
return A.k9(a,b,c,16,!1,!1)},
Eh(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.k9(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.Jx(s,e,f)},
Jx(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.BX(a,!s||c)
return A.f_(a)},
zk(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.k9(a,b,c,256,!0,!1)}if(d==null)return null
return A.Jv(d)},
Jw(a){var s={},r=new A.a1("")
s.a=""
a.a1(0,new A.zl(new A.zm(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Ef(a,b,c){if(a==null)return null
return A.k9(a,b,c,256,!0,!1)},
BW(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.As(s)
p=A.As(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bs(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
BU(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.md(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dS(s,0,null)},
k9(a,b,c,d,e,f){var s=A.Ek(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
Ek(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.BW(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hH(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.BU(o)}if(p==null){p=new A.a1("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Ej(a){if(B.a.S(a,"."))return!0
return B.a.bO(a,"/.")!==-1},
f_(a){var s,r,q,p,o,n
if(!A.Ej(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
BX(a,b){var s,r,q,p,o,n
if(!A.Ej(a))return!b?A.Ed(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Ed(s[0])
return B.b.B(s,"/")},
Ed(a){var s,r,q=a.length
if(q>=2&&A.Ee(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ad(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Jz(a,b){if(a.ws("package")&&a.c==null)return A.EW(b,0,b.length)
return-1},
Ju(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
BY(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.A(a,b,c)
else p=new A.cj(B.a.A(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.O("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.O("Truncated URI",null))
p.push(A.Ju(a,o+1))
o+=2}else p.push(r)}}return d.f0(p)},
Ee(a){var s=a|32
return 97<=s&&s<=122},
DE(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a8(k,a,r))}}if(q<0&&r>b)throw A.b(A.a8(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga_(j)
if(p!==44||r!==n+7||!B.a.ac(a,"base64",n+1))throw A.b(A.a8("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aq.wL(a,m,s)
else{l=A.Ek(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dq(a,m,s,l)}return new A.wz(a,j,c)},
EU(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
E4(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.EW(a.a,a.e,a.f)
return-1},
EW(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
JO(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
xs:function xs(){},
xt:function xt(){},
nI:function nI(a,b){this.a=a
this.$ti=b},
zn:function zn(a){this.a=a},
qJ:function qJ(a,b,c,d,e,f,g,h){var _=this
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
aC:function aC(a){this.a=a},
y8:function y8(){},
ad:function ad(){},
kC:function kC(a){this.a=a},
dd:function dd(){},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d8:function d8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
is:function is(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cS:function cS(a){this.a=a},
mX:function mX(a){this.a=a},
bi:function bi(a){this.a=a},
kY:function kY(a){this.a=a},
m3:function m3(){},
je:function je(){},
nH:function nH(a){this.a=a},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
lw:function lw(){},
o:function o(){},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
oc:function oc(){},
jf:function jf(){this.b=this.a=0},
j6:function j6(a){this.a=a},
mr:function mr(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a1:function a1(a){this.a=a},
wA:function wA(a){this.a=a},
k7:function k7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
zm:function zm(a,b){this.a=a
this.b=b},
zl:function zl(a){this.a=a},
wz:function wz(a,b,c){this.a=a
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
nC:function nC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
li:function li(a,b,c){this.a=a
this.b=b
this.$ti=c},
HA(a){return a},
Hr(a){return a},
BB(a){return a},
Hp(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.Es(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Hh(a){return new v.G.Promise(A.bW(new A.re(a)))},
m_:function m_(a){this.a=a},
re:function re(a){this.a=a},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
zR(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.JF,a)
s[$.fa()]=a
return s},
cX(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.JG,a)
s[$.fa()]=a
return s},
bW(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.JH,a)
s[$.fa()]=a
return s},
ow(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.JI,a)
s[$.fa()]=a
return s},
hN(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.JJ,a)
s[$.fa()]=a
return s},
C0(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.JK,a)
s[$.fa()]=a
return s},
JF(a){return a.$0()},
JG(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
JH(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
JI(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
JJ(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
JK(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
EK(a){return a==null||A.bI(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
f8(a){if(A.EK(a))return a
return new A.Ax(new A.dZ(t.mp)).$1(a)},
Cb(a,b){return a[b]},
C5(a,b,c){return a[b].apply(a,c)},
Le(a,b){var s,r
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
a5(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.aH(s,b.i("aH<0>"))
a.then(A.e7(new A.AE(r),1),A.e7(new A.AF(r),1))
return s},
EJ(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
oE(a){if(A.EJ(a))return a
return new A.A9(new A.dZ(t.mp)).$1(a)},
Ax:function Ax(a){this.a=a},
AE:function AE(a){this.a=a},
AF:function AF(a){this.a=a},
A9:function A9(a){this.a=a},
Fr(a,b){return Math.max(a,b)},
Dp(){return B.as},
Dq(){return $.AS()},
yF:function yF(){},
yG:function yG(a){this.a=a},
GI(a,b,c){return J.Ct(a,b,c)},
lg:function lg(){},
a3:function a3(){},
pa:function pa(a){this.a=a},
pb:function pb(a){this.a=a},
pc:function pc(a,b){this.a=a
this.b=b},
pd:function pd(a){this.a=a},
pe:function pe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pf:function pf(a){this.a=a},
lc:function lc(a){this.$ti=a},
iw:function iw(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b){this.a=a
this.$ti=b},
hG:function hG(){},
fY:function fY(a,b){this.a=a
this.$ti=b},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b,c){this.a=a
this.b=b
this.$ti=c},
lb:function lb(){},
Dg(){throw A.b(A.Y(u.O))},
Iu(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
lZ:function lZ(){},
n_:function n_(){},
aq(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dS(m,0,null)},
ck:function ck(a){this.a=a},
c2:function c2(){this.a=null},
lo:function lo(){},
rj:function rj(){},
cW(a){var s=new Uint32Array(A.b2(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.o6(s,r,a,q,new Uint32Array(16))},
o5:function o5(){},
z1:function z1(){},
o6:function o6(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kv:function kv(){},
pl:function pl(){},
iF:function iF(a){this.a=a},
j9:function j9(){},
tI:function tI(){},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
vE:function vE(){},
ja:function ja(a,b){this.b=a
this.c=b},
mw:function mw(a){this.a=a},
bw(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
l5(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
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
g=B.c.ak(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.ak(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bC(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bw(s)
a5.$flags&2&&A.I(a5)
a5[0]=k
a5[1]=A.bw(r)
a5[2]=A.bw(q)
a5[3]=A.bw(p)},
CO(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cP(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.ak(q,n),!1)
p=J.bM(B.az.ga8(r),0,null)
o=new Uint32Array(4)
A.l5(o,a,b)
A.l5(o,a,p)
return J.bM(B.y.ga8(o),0,null)},
l4:function l4(a,b,c){this.c=a
this.d=b
this.a=c},
qn:function qn(){},
nA:function nA(){},
nB:function nB(){},
oB(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kp()===B.O){a5=A.f3(a5)
a6=A.f3(a6)
a7=A.f3(a7)
a8=A.f3(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ai[a5>>>24&255]^B.ag[a6>>>16&255]^B.ah[a7>>>8&255]^B.ak[a8&255]^b3[r]
o=B.ai[a6>>>24&255]^B.ag[a7>>>16&255]^B.ah[a8>>>8&255]^B.ak[a5&255]^b3[r+1]
n=B.ai[a7>>>24&255]^B.ag[a8>>>16&255]^B.ah[a5>>>8&255]^B.ak[a6&255]^b3[r+2]
m=B.ai[a8>>>24&255]^B.ag[a5>>>16&255]^B.ah[a6>>>8&255]^B.ak[a7&255]^b3[r+3]
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
if($.kp()===B.O){a1=A.f3(a1)
a2=A.f3(a2)
a3=A.f3(a3)
a4=A.f3(a4)}a9.$flags&2&&A.I(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
F3(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge5(),h=B.cJ.h(0,i.gm(0))
if(h==null)throw A.b(A.O("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.Ct(B.y.ga8(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.I(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.kp()===B.O)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.ak(m,k)
if(n===0)j=A.F_((j<<8|j>>>24)>>>0)^B.cl[B.c.iS(m,k)-1]<<24
else if(o&&n===4)j=A.F_(j)
r[m]=(j^r[m-k])>>>0}return r},
F_(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
f3(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
q8:function q8(){},
qo:function qo(){},
xX:function xX(){},
mn:function mn(a,b){this.a=a
this.b=b},
kH:function kH(){},
kI:function kI(){},
kJ:function kJ(){},
kK:function kK(){},
p4:function p4(){},
F0(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mn("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eg)){s=J.a_(a)
if(B.a.S(s,"TypeError: "))s=B.a.ad(s,11)
a=new A.eg(s,b.b)}return a},
EO(a,b,c){A.CR(A.F0(a,c),b)},
JE(a,b){return new A.dj(new A.zJ(a,b),t.fb)},
hP(a,b,c){return A.Kz(a,b,c)},
Kz(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
a1.f=new A.zS(e)
a1.r=new A.zT(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a5(c.read(),k),$async$hP)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.D(b)
l=A.ag(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.F0(m,a)
k=l
j=a1.b
if(j>=4)A.v(a1.bE())
if((j&1)!==0){j=a1.gaO()
j.aI(d,k==null?B.P:k)}s=15
return A.a(a1.p(),$async$hP)
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
if(f>=4)A.v(a1.bE())
if((f&1)!==0)a1.gaO().aC(g)}g=a1.b
s=((g&1)!==0?(a1.gaO().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aH(new A.t($.C,j),i):g).a,$async$hP)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hP,r)},
kP:function kP(a){this.b=!1
this.c=a},
p7:function p7(a){this.a=a},
zJ:function zJ(a,b){this.a=a
this.b=b},
zS:function zS(a){this.a=a},
zT:function zT(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a},
p9:function p9(a){this.a=a},
CL(a,b){return new A.eg(a,b)},
eg:function eg(a,b){this.a=a
this.b=b},
lS:function lS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
HL(a,b){var s=t.N,r=A.l([],t.e8),q=$.Cj()
if(!q.b.test(a))A.v(A.aA(a,"method","Not a valid method"))
return new A.u2(A.u(s,s),r,a,b,A.dH(new A.kJ(),new A.kK(),s,s))},
u2:function u2(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
u3:function u3(a,b){this.a=a
this.b=b},
I6(a,b){var s=new Uint8Array(0),r=$.Cj()
if(!r.b.test(a))A.v(A.aA(a,"method","Not a valid method"))
r=t.N
return new A.vv(s,a,b,A.dH(new A.kJ(),new A.kK(),r,r))},
vv:function vv(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
ji:function ji(){},
mJ:function mJ(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
GJ(a){return a.toLowerCase()},
i7:function i7(a,b,c){this.a=a
this.c=b
this.$ti=c},
HD(a){return A.Ml("media type",a,new A.tM(a))},
Bk(a,b,c){var s=t.N
if(c==null)s=A.u(s,s)
else{s=new A.i7(A.Lf(),A.u(s,t.af),t.fo)
s.C(0,c)}return new A.fz(a.toLowerCase(),b.toLowerCase(),new A.cR(s,t.ph))},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
tM:function tM(a){this.a=a},
tO:function tO(a){this.a=a},
tN:function tN(){},
LC(a){var s
a.mQ($.Gi(),"quoted string")
s=a.gkl().h(0,0)
return A.FE(B.a.A(s,1,s.length-1),$.Gh(),new A.Ak(),null)},
Ak:function Ak(){},
GY(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="spec",a1="field",a2="store"
switch(a3){case"open":s=a4.h(0,"stores")
r=a4.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.a2("Malformed open payload."))
q=A.l([],t.d)
for(p=J.E(s);p.k();)q.push(A.GZ(p.gn(),"stores"))
p=t.N
p=A.u(p,p)
for(o=r.gaa(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string"&&typeof n.b=="string")p.j(0,m,A.G(n.b))}return new A.m2(q,p)
case"capabilities":return B.bA
case"health":return B.bD
case"close":return B.bB
case"get":return new A.ln(A.c1(a4),A.l_(a4,"id"),A.cD(a4))
case"rows":l=a4.h(0,"ids")
if(!t.j.b(l))throw A.b(A.a2("Malformed rows payload."))
q=A.c1(a4)
p=A.l([],t.s)
for(o=J.E(l);o.k();)p.push(A.G(o.gn()))
return new A.mp(q,p,A.cD(a4))
case"mutate":return new A.lT(A.c1(a4),A.JS(a4.h(0,"mutation")),A.cD(a4))
case"query":return new A.mi(A.c1(a4),A.eD(a4.h(0,a0)),A.cD(a4))
case"count":return new A.l1(A.c1(a4),A.eD(a4.h(0,a0)),A.cD(a4))
case"countDistinct":return new A.l0(A.c1(a4),A.l_(a4,a1),A.eD(a4.h(0,a0)),A.cD(a4))
case"distinct":q=A.c1(a4)
p=A.l_(a4,a1)
o=a4.h(0,a0)
return new A.ld(q,p,A.eD(o==null?B.n:o),A.cD(a4))
case"ids":return new A.ls(A.c1(a4),A.eD(a4.h(0,a0)),A.cD(a4))
case"aggregate":k=a4.h(0,"fn")
j=A.Bc(new A.aj(B.cu,new A.q3(k),t.gx))
if(j==null)throw A.b(A.a2("Unknown aggregate: "+A.r(k)))
return new A.kw(A.c1(a4),j,A.l_(a4,a1),A.eD(a4.h(0,a0)),A.cD(a4))
case"explain":return new A.lj(A.c1(a4),A.eD(a4.h(0,a0)),A.cD(a4))
case"search":return new A.mv(A.c1(a4),A.Id(a4.h(0,a0)),A.cD(a4))
case"txBegin":i=a4.h(0,"readOnly")
if(!A.bI(i))throw A.b(A.a2("Malformed txBegin payload."))
h=a4.h(0,"durability")
g=A.Bc(new A.aj(B.cH,new A.q4(h),t.mE))
if(typeof h=="string"&&g==null)throw A.b(A.a2("Unknown tx durability: "+h))
return new A.mQ(i,g==null?B.bl:g)
case"txCommit":case"txRollback":f=a4.h(0,"session")
if(typeof f!="string")throw A.b(A.a2("Malformed tx payload."))
return a3==="txCommit"?new A.mR(f):new A.mT(f)
case"txSavepoint":case"txRollbackTo":case"txRelease":f=a4.h(0,"session")
e=a4.h(0,"name")
if(typeof f!="string"||typeof e!="string")throw A.b(A.a2("Malformed savepoint payload."))
A:{if("txSavepoint"===a3){q=new A.mV(f,e)
break A}if("txRollbackTo"===a3){q=new A.mU(f,e)
break A}q=new A.mS(f,e)
break A}return q
case"watchOne":return new A.n9(A.c1(a4),A.l_(a4,"id"))
case"watch":return new A.na(A.c1(a4),A.eD(a4.h(0,a0)))
case"watchCancel":d=a4.h(0,"subscription")
if(typeof d!="string")throw A.b(A.a2("Malformed watchCancel payload."))
return new A.n8(d)
case"analyze":if(typeof a4.h(0,a2)=="string"){q=a4.h(0,a2)
q.toString
A.G(q)}else q=null
return new A.ky(q)
case"walCheckpoint":return B.bQ
case"vacuum":return B.bP
case"pruneOutbox":return B.bO
case"compact":c=a4.h(0,a2)
b=a4.h(0,"olderThanMs")
if(typeof c!="string"||!A.ax(b))throw A.b(A.a2("Malformed compact payload."))
return new A.kX(c,b)
case"runMaintenance":a=a4.h(0,"compactOlderThanMs")
if(!A.ax(a))throw A.b(A.a2("Malformed runMaintenance payload."))
return new A.mq(a)
default:return null}},
c1(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.a2("Malformed store name."))
return s},
l_(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.a2('Malformed field "'+b+'".'))
return s},
cD(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.a2("Malformed session id."))
return s},
GZ(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),q.b)}return s}throw A.b(A.a2('Malformed field "'+b+'".'))},
Kn(a){var s
A:{if(a instanceof A.eK){s="ValidationException"
break A}if(a instanceof A.eJ){s="UniqueConstraintException"
break A}if(a instanceof A.ez){s="NotNullConstraintException"
break A}if(a instanceof A.fh){s="CheckConstraintException"
break A}if(a instanceof A.fK){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fu){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hc){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fw){s="FtsUnavailableError"
break A}if(a instanceof A.eE){s="SchemaRegistrationError"
break A}if(a instanceof A.fW){s="SchemaTooNewError"
break A}if(a instanceof A.cM){s="StorageError"
break A}if(a instanceof A.fS){s="RecordNotFoundException"
break A}if(a instanceof A.h1){s="StaleCursorError"
break A}if(a instanceof A.fC){s="MissingLimitError"
break A}if(a instanceof A.fl){s="ConflictBlockedError"
break A}if(a instanceof A.el){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.fR){s="ReadOnlyTxError"
break A}throw A.b(A.fQ(u.P))}return s},
JZ(a){var s
A:{if(a instanceof A.iM){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.iP){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iN){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iQ){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iJ){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iK){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iI){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iO){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iL){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.fQ(u.P))}return s},
JS(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.a2("Malformed mutation payload."))
s=t.N
r=a.aV(0,new A.zP(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iM(A.oA(r.h(0,n),n))
case"upsert":return new A.iP(A.oA(r.h(0,n),n))
case"putAll":return new A.iN(A.EZ(r.h(0,m),m))
case"upsertAll":return new A.iQ(A.EZ(r.h(0,m),m))
case"patch":return new A.iJ(A.zU(r.h(0,l),l),A.oA(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.a2("Malformed patchAll patches."))
k=A.u(s,t.G)
for(s=p.gaa(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.a_(o.a),A.oA(o.b,"patches"))}return new A.iK(k)
case"archive":return new A.iI(A.zU(r.h(0,l),l))
case"restore":return new A.iO(A.zU(r.h(0,l),l))
case"purge":return new A.iL(A.zU(r.h(0,l),l))
default:throw A.b(A.a2("Unknown mutation kind: "+A.r(q)))}},
zU(a,b){if(typeof a=="string")return a
throw A.b(A.a2('Malformed mutation field "'+b+'".'))},
oA(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),q.b)}return s}throw A.b(A.a2('Malformed mutation field "'+b+'".'))},
EZ(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.E(a);r.k();)s.push(A.oA(r.gn(),b))
return s}throw A.b(A.a2('Malformed mutation field "'+b+'".'))},
eD(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="predicate",a=null,a0=t.f
if(!a0.b(a1))throw A.b(A.a2("Malformed query spec."))
s=a1.aV(0,new A.vn(),t.N,t.z)
r=new A.vo()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.l([],t.ae)
i=t.j
if(i.b(p))for(h=J.E(p);h.k();)j.push(r.$1(h.gn()))
a0=a0.b(s.h(0,b))?A.Bm(s.h(0,b)):a
h=A.l([],t.gc)
if(i.b(o))for(g=J.E(o);g.k();)h.push(A.I2(g.gn()))
g=A.ax(m)?m:a
f=J.w(s.h(0,"all"),!0)
if(i.b(n)){i=A.l([],t.s)
for(e=J.E(n);e.k();)i.push(J.a_(e.gn()))}else i=a
e=J.w(s.h(0,"includeArchived"),!0)
d=J.w(s.h(0,"includeHidden"),!0)
c=typeof l=="string"?l:a
return new A.vm(k,j,a0,h,g,f,i,e,d,c,J.w(s.h(0,"backward"),!0))},
Do(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.a2(l))
s=a.aV(0,new A.vj(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.a2(l))
p=A.Bc(new A.aj(B.cn,new A.vk(q),t.mz))
if(p==null)throw A.b(A.a2("Unknown query operator: "+q))
o=A.oF(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.E(n.a(s.h(0,"values")));n.k();)m.push(A.oF(n.gn()))
n=m}else n=null
return new A.eC(r,p,o,n)},
Bm(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.a2("Malformed predicate tree."))
s=a.aV(0,new A.uM(),t.N,t.z)
r=new A.uL()
switch(s.h(0,"kind")){case"leaf":return new A.iC(A.Do(s))
case"not":return new A.iX(A.Bm(s.h(0,"child")))
case"all":return new A.i1(r.$1(s.h(0,q)))
case"any":return new A.i2(r.$1(s.h(0,q)))
default:throw A.b(A.a2("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
I2(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.a2(q))
s=a.aV(0,new A.vl(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.a2(q))
return new A.mh(r,J.w(s.h(0,"desc"),!0))},
Id(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.a2("Malformed search spec."))
s=a.aV(0,new A.vD(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.a2("Malformed search term."))
q=s.h(0,"limit")
p=A.ax(q)?q:null
return new A.vC(r,p,J.w(s.h(0,"all"),!0),J.w(s.h(0,"includeArchived"),!0),J.w(s.h(0,"includeHidden"),!0))},
H_(a){return new A.fn(a)},
H4(a){return new A.fo(a)},
Hm(a){return new A.fx(a)},
GE(a){return new A.fd(a)},
Ha(a){return new A.fs(a)},
oG(a){var s,r,q
if(a instanceof A.aM)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gf5().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.oG(r.gn()))
return s}if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),A.oG(q.b))}return s}if(a==null||A.bI(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.a2("Value of type "+J.bN(a).l(0)+" is not wire-safe."))},
oF(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value."
if(t.f.b(a)){r=a.h(0,"__lp_t")
q=J.dq(r)
if(q.R(r,"datetime")){s=a.h(0,"v")
if(A.ax(s))return new A.aM(A.la(s,0,!0),0,!0)
throw A.b(A.a2("Malformed datetime wire value."))}if(q.R(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{q=B.ar.v(s)
return q}catch(p){if(t.Y.b(A.D(p)))throw A.b(A.a2(l))
else throw p}throw A.b(A.a2(l))}q=A.u(t.N,t.X)
for(o=a.gaa(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string")q.j(0,m,A.oF(n.b))}return q}if(t.j.b(a)){q=[]
for(o=J.E(a);o.k();)q.push(A.oF(o.gn()))
return q}return a},
a2(a){return new A.jr(a)},
q3:function q3(a){this.a=a},
q4:function q4(a){this.a=a},
dy:function dy(){},
kW:function kW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jo:function jo(a,b){this.a=a
this.b=b},
u4:function u4(){},
iM:function iM(a){this.a=a},
iP:function iP(a){this.a=a},
iN:function iN(a){this.a=a},
iQ:function iQ(a){this.a=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
iI:function iI(a){this.a=a},
iO:function iO(a){this.a=a},
iL:function iL(a){this.a=a},
zP:function zP(){},
vm:function vm(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
vn:function vn(){},
vo:function vo(){},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vj:function vj(){},
vk:function vk(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
uM:function uM(){},
uL:function uL(){},
iC:function iC(a){this.a=a},
iX:function iX(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
mh:function mh(a,b){this.a=a
this.b=b},
vl:function vl(){},
cA:function cA(a,b){this.a=a
this.b=b},
vC:function vC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vD:function vD(){},
mm:function mm(){},
m2:function m2(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
lp:function lp(){},
kU:function kU(){},
ln:function ln(a,b,c){this.a=a
this.b=b
this.c=c},
mp:function mp(a,b,c){this.a=a
this.b=b
this.c=c},
lT:function lT(a,b,c){this.a=a
this.b=b
this.c=c},
mi:function mi(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ld:function ld(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lj:function lj(a,b,c){this.a=a
this.b=b
this.c=c},
mv:function mv(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
mQ:function mQ(a,b){this.a=a
this.b=b},
mR:function mR(a){this.a=a},
mT:function mT(a){this.a=a},
mV:function mV(a,b){this.a=a
this.b=b},
mU:function mU(a,b){this.a=a
this.b=b},
mS:function mS(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
this.b=b},
na:function na(a,b){this.a=a
this.b=b},
n8:function n8(a){this.a=a},
ky:function ky(a){this.a=a},
n7:function n7(){},
n5:function n5(){},
me:function me(){},
kX:function kX(a,b){this.a=a
this.b=b},
mq:function mq(a){this.a=a},
aQ:function aQ(){},
fH:function fH(){},
kR:function kR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lq:function lq(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fD:function fD(a){this.a=a},
fP:function fP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
fx:function fx(a){this.a=a},
fd:function fd(a){this.a=a},
fs:function fs(a){this.a=a},
fX:function fX(a){this.a=a},
mu:function mu(a,b){this.a=a
this.b=b},
h8:function h8(a){this.a=a},
jp:function jp(a){this.a=a},
fM:function fM(a){this.a=a},
fk:function fk(a){this.a=a},
jr:function jr(a){this.a=a},
ai(a){var s,r=new A.a1("")
A.cg(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ci(a){var s,r,q
for(s=new A.mr(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
JN(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c7(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
cg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bI(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.ax(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.JN(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a5(b,h)
a.a+=r
return A.Ci(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.L(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cg(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.E(b.gK());s.k();){n=s.gn()
r=J.a_(n)
if(B.b.bM(o,new A.AP(r)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a4(r,n))}B.b.ck(o,new A.AQ())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.q)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a5(k.a,h)
a.a+=j
i=A.Ci(j)
a.a+=":"
q=q+i+1+A.cg(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.O("Cannot canonicalize value of type "+J.bN(b).l(0),h))},
AP:function AP(a){this.a=a},
AQ:function AQ(){},
Ih(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).eb(a)
if(p==null)return B.d8
s=p.b
r=s[1]
r.toString
r=A.aG(r)
q=s[2]
q.toString
q=A.aG(q)
s=s[3]
s=A.j1(s==null?"":s,null)
return new A.eX(r,q,s==null?0:s)},
Dw(a,b,c){var s,r=A.Ih(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eH(a,b){return A.Ii(a,b)},
Ii(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eH=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b1("SELECT sqlite_version() AS v"),$async$eH)
case 3:g=d.S(c.ci(a2),"v")
g.toString
A.G(g)
k=t.x
d=A
c=A
b=J
s=4
return A.a(a.b1("PRAGMA compile_options"),$async$eH)
case 4:j=d.N(new c.bG(b.b3(a2,new A.vN(),t.X),k),k.i("o.E"))
n=B.b.bM(j,new A.vO())
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
k=a0===B.ba
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b1("PRAGMA journal_mode"),$async$eH)
case 19:l=a2
if(J.ea(l))m=A.a6(J.ci(J.ci(l).gb3()))
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
case 18:case 14:h=A.Dw(g,3,37)
k=k&&J.w(m,"wal")
q=new A.mG(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eH,r)},
ma:function ma(a,b){this.a=a
this.b=b},
mG:function mG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vN:function vN(){},
vO:function vO(){},
i8:function i8(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
aT:function aT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a0:function a0(a,b){this.a=a
this.b=b},
pi:function pi(a,b){this.a=a
this.b=b},
pj:function pj(){},
pk:function pk(){},
Cz(a){return new Uint8Array(A.b2(a))},
qW:function qW(){},
oS:function oS(a,b,c){this.b=a
this.c=b
this.d=c},
Ca(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cc
if(r===B.I){r=a.f
r.toString
r=!B.b.F(r,b)}else r=!1
if(r)return B.ci
return s
case 1:case 4:return!A.ax(b)?B.cd:s
case 2:return typeof b!="number"?B.ce:s
case 3:return!A.bI(b)?B.cf:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cg:s
case 7:return!t.j.b(b)?B.ch:s}},
dn(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gdc(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.C_(n,a0.h(0,l),new Uint8Array(A.b2(B.e.v(q+l+"\x00"+e))),m))}k=A.u(h,g)
for(h=new A.aN(a0,A.n(a0).i("aN<1,2>")).gt(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.F(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ai(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
Fi(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.C_(b,c,new Uint8Array(A.b2(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
KT(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gdc()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.C_(n,g.h(0,l),new Uint8Array(A.b2(B.e.v(q+l+"\x00"+f))),m))}k=A.u(t.N,t.X)
for(s=g.gaa(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.F(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ai(k))
a.push(c?1:0)
a.push(0)},
cf(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
f.j(0,n,A.Ez(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.w(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.av(k,null)
if(t.f.b(j))f.C(0,A.ba(j,h,g))}return f},
Lw(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.E(b);s.k();)r.push(A.cf(a,s.gn(),c,d))
return r},
Lx(a,b,c,d,e){var s,r,q,p,o,n,m=A.l([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.q)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a4(p,a.f9(p)))}s=A.l([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.JR(o.gn(),m,r,c,e,n))
return s},
JR(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.Ez(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.w(a.h(0,m),1))
return l},
Ez(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.x('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.jg("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bN(b).l(0)+"."))
r=B.k.f0(s.uX(B.ar.v(b),new Uint8Array(A.b2(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.R===q||B.T===q){p=A.aG(r)
break A}if(B.S===q){p=A.LA(r)
break A}if(B.U===q||B.V===q){p=B.h.av(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.w(b,1)
if(p===B.U||p===B.V){if(typeof b!="string")throw A.b(A.jg("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bN(b).l(0)+"."))
return B.h.av(b,o)}return b},
C_(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.x('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.w(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a_(b)
break
case 6:case 7:s=A.ai(b)
break
default:A.G(b)
s=b}r=d.vB(B.e.v(s),c)
return B.aq.gf5().v(r)}switch(a.b.a){case 3:return J.w(b,!0)?1:0
case 6:case 7:return A.ai(b)
default:return b}},
bf(a,b){var s,r,q,p,o,n="archived",m=a.gdc(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.q)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.w(o,!0):o)}for(l=b.gaa(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.F(0,p))continue
k.j(0,p,s.b)}if(J.w(b.h(0,n),!0))k.j(0,n,!0)
return k},
A2(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gdc(),i=A.l([],t.iE)
i.push(new A.a4("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a4(o,p.b===B.B?J.w(n,!0):n))}for(s=c.gaa(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.F(0,o))continue
i.push(new A.a4(o,r.b))}if(J.w(c.h(0,"archived"),!0))i.push(B.d6)
B.b.ck(i,new A.A3())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.q)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a5(r.a,null)
a.a+=k
o=A.Ci(k)
a.a+=":"
m=m+o+1+A.cg(a,r.b)}a.a+="}"
return m+1},
d0:function d0(a,b){this.a=a
this.b=b},
A3:function A3(){},
CQ(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
kZ:function kZ(a,b){this.a=a
this.b=b},
ig:function ig(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
qT:function qT(){},
qS:function qS(){},
qU:function qU(){},
qR:function qR(a){this.a=a},
H3(a){return'"'+A.y(a,'"','""')+'"'},
H2(a,b){var s,r,q,p=a.a,o=J.L(p),n=b.a,m=J.L(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.w(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
pH:function pH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ie:function ie(a){this.a=a},
qQ:function qQ(a){this.a=a},
qP:function qP(){},
qO:function qO(a){this.a=a},
qN:function qN(a,b){this.a=a
this.b=b},
qK:function qK(a){this.a=a},
qL:function qL(a){this.a=a},
qM:function qM(){},
aw(a,b){return new A.eK(b,a)},
jg(a){return new A.cM(a)},
Bu(a){return new A.fS(a)},
Dt(a){return new A.fW(a)},
aR(a){return new A.eE(a)},
r9(a){return new A.fw(a)},
Bz(a){return new A.h1(a)},
Dd(a){return new A.fC(a)},
CN(a){return new A.fl(a)},
B2(a){return new A.el(a)},
FI(a,b){var s,r="UNIQUE constraint failed",q=J.a_(a),p=a instanceof A.c7,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.F(q,"PRIMARY KEY")&&!B.a.F(q,r)
else p=!0
if(p)return new A.fK("PRIMARY KEY constraint violated.")
if(o===2067||B.a.F(q,r)){s=A.ED(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.eJ(s,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.F(q,"NOT NULL constraint failed")){p=A.ED(q,"NOT NULL constraint failed:")
return new A.ez(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.F(q,"CHECK constraint failed")||o===275||n===275)return new A.fh("CHECK constraint violated.")
if(B.a.F(q,"FOREIGN KEY")||o===787||n===787)return new A.fu("FOREIGN KEY constraint violated.")
if(B.a.F(q,"database or disk is full"))return new A.cM("Database full: "+A.r(a))
return new A.cM("SQLite error: "+A.r(a))},
ED(a,b){var s,r,q,p,o,n,m=B.a.bO(a,b)
if(m<0)return"?"
s=B.a.ad(a,m+b.length)
r=s.length
q=B.a.bO(s,",")
if(q>=0)r=q
p=B.a.bO(s,"(")
s=B.a.ci(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.dj(s,".")
s=B.a.ci(o>=0?B.a.ad(s,o+1):s)
if(B.a.S(s,'"')&&B.a.c7(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.y(n,'""','"')}return s.length===0?"?":s},
dI:function dI(){},
eK:function eK(a,b){this.b=a
this.a=b},
eJ:function eJ(a,b){this.b=a
this.a=b},
ez:function ez(a,b){this.b=a
this.a=b},
fh:function fh(a){this.a=a},
fK:function fK(a){this.a=a},
fu:function fu(a){this.a=a},
cM:function cM(a){this.a=a},
fS:function fS(a){this.a=a},
fW:function fW(a){this.a=a},
eE:function eE(a){this.a=a},
hc:function hc(a){this.a=a},
fw:function fw(a){this.a=a},
h1:function h1(a){this.a=a},
fC:function fC(a){this.a=a},
fl:function fl(a){this.a=a},
el:function el(a){this.a=a},
fR:function fR(a){this.a=a},
M6(a,b,c){a.uP(!0,new A.AJ(c),"lp_norm_"+b)},
Fn(a,b,c,d){var s,r,q='""',p=b.a
if(p.gE(p))return c+"."+('"'+A.y(d,'"',q)+'"')
s='"'+A.y(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.y(c,'"',q)+'".'+s
return'"'+A.y("lp_norm_"+a,'"',q)+'"('+r+")"},
AJ:function AJ(a){this.a=a},
JV(){return Date.now()},
ov(a){var s,r,q
if(t.G.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.ov(q.b))}return s}if(t.f.b(a)){s=A.u(t.z,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.ov(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.ov(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b2(a))
return a},
d_(a,b,c,d,e,f,g,h){var s=null,r=B.D,q=null,p=null
return A.Hw(a,b,c,d,e,f,g,h)},
Hw(b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d_=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a3=null
a4=B.D
a5=null
a6=null
a7=null
a7=b1
p=4
s=7
return A.a(A.cG(a7,b6),$async$d_)
case 7:s=8
return A.a(A.eH(a7,b6),$async$d_)
case 8:n=b9
i=0
case 9:if(!(i<3)){s=11
break}m=B.cr[i]
s=12
return A.a(a7.O(m),$async$d_)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cI[i]
s=16
return A.a(a7.O(l),$async$d_)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a5
if(f==null)f=A.LW()
e=a6
d=a4
c=t.N
b=t.ls
a=new A.m8()
a0=new A.lF(b5,h,g,a,b4,b2,e,b0,b3,a3,f,A.u(c,t.nv),new A.wr(A.u(c,b),A.u(b,t.nL)),d,new A.pi(A.dQ(null,null,t.iv),A.dQ(null,null,t.oZ)))
b=new A.x9(A.bp(null,t.H),a.gx8())
a0.x=b
d=a0.a=new A.to(a0,h,g,b,a,e,d)
a0.b=new A.wg(d)
a0.c=new A.u5()
a0.d=new A.vu()
d=A.Hu(d)
a0.e!==$&&A.cy()
a0.e=d
d=$.AS()
a0.CW!==$&&A.cy()
a0.CW=new A.uh(a0,d)
a0.cx!==$&&A.cy()
a0.cx=new A.uc(a0,d)
a0.cy!==$&&A.cy()
a0.cy=new A.pU(a0)
a0.db!==$&&A.cy()
a0.db=new A.tz(a0,b0)
k=a0
s=17
return A.a(A.lG(a7,k.ch),$async$d_)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aR(j),$async$d_)
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
return A.a(a7.p(),$async$d_)
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
return A.f($async$d_,r)},
cG(a,b){return A.Hv(a,b)},
Hv(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cG=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.ba?2:3
break
case 2:q=5
s=8
return A.a(a.O("PRAGMA journal_mode=WAL"),$async$cG)
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
return A.a(a.O("PRAGMA wal_autocheckpoint=0"),$async$cG)
case 9:s=10
return A.a(a.O("PRAGMA mmap_size=67108864"),$async$cG)
case 10:case 3:s=11
return A.a(a.O("PRAGMA synchronous=NORMAL"),$async$cG)
case 11:s=12
return A.a(a.O("PRAGMA foreign_keys=ON"),$async$cG)
case 12:s=13
return A.a(a.O("PRAGMA busy_timeout=5000"),$async$cG)
case 13:s=14
return A.a(a.O("PRAGMA cache_size=-8000"),$async$cG)
case 14:s=15
return A.a(a.O("PRAGMA temp_store=MEMORY"),$async$cG)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cG,r)},
lG(a,b){var s=0,r=A.h(t.H),q,p
var $async$lG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.cg("lp_migrations","version = ?",[1]),$async$lG)
case 3:if(p.ea(d)){s=1
break}s=4
return A.a(a.aE(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$lG)
case 4:case 1:return A.e(q,r)}})
return A.f($async$lG,r)},
Hu(a){var s=t.N
s=new A.rT(a,A.dQ(null,null,t.fq),A.u(s,t.g8),A.u(s,t.dz))
s.oH(a)
return s},
AC(a){var s,r,q,p
A:{if(a instanceof A.iC){s=A.Kw(a.a)
break A}if(a instanceof A.iX){s=new A.c4(A.AC(a.a))
break A}if(a instanceof A.i1){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.AC(r[p]))
s=new A.dt(s)
break A}if(a instanceof A.i2){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.AC(r[p]))
s=new A.cY(s)
break A}throw A.b(A.fQ(u.P))}return s},
Kw(a){var s,r,q,p="isNull",o=a.a
switch(a.b.a){case 0:s=a.c
if(s==null)return new A.a9(o,p,B.m)
return new A.a9(o,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.O("neq(null) matches no rows; use isNotNull.",null))
return new A.c4(new A.a9(o,"eq",[s]))
case 2:return new A.a9(o,"gt",[a.c])
case 3:return new A.a9(o,"gte",[a.c])
case 4:return new A.a9(o,"lt",[a.c])
case 5:return new A.a9(o,"lte",[a.c])
case 6:r=a.d
return new A.a9(o,"inValues",r==null?B.m:r)
case 7:q=a.d
if(q==null)q=B.m
if(q.length!==2)throw A.b(A.O("between requires exactly two values.",null))
return new A.a9(o,"between",q)
case 8:return new A.a9(o,"startsWith",[a.c])
case 9:return new A.a9(o,"endsWith",[a.c])
case 10:return new A.a9(o,"contains",[a.c])
case 11:return new A.a9(o,p,B.m)
case 12:return new A.c4(new A.a9(o,p,B.m))}},
to:function to(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.as=g},
le:function le(a,b){this.a=a
this.b=b},
mH:function mH(a,b,c){this.a=a
this.c=b
this.e=c},
uJ:function uJ(a){this.a=a},
lF:function lF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
tp:function tp(a,b){this.a=a
this.b=b},
ts:function ts(a){this.a=a},
tr:function tr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tq:function tq(){},
ny:function ny(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
xR:function xR(a,b){this.a=a
this.b=b},
xQ:function xQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xO:function xO(a,b){this.a=a
this.b=b},
xP:function xP(a,b){this.a=a
this.b=b},
xN:function xN(a){this.a=a},
hl:function hl(a,b){this.a=a
this.b=b},
vu:function vu(){},
wg:function wg(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
wn:function wn(a){this.a=a},
wj:function wj(a){this.a=a},
wm:function wm(a,b,c){this.a=a
this.b=b
this.c=c},
wl:function wl(a,b,c){this.a=a
this.b=b
this.c=c},
wk:function wk(a,b,c){this.a=a
this.b=b
this.c=c},
wi:function wi(a){this.a=a},
wh:function wh(){},
eZ:function eZ(){},
of:function of(a,b,c){var _=this
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
rT:function rT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=0},
t6:function t6(a){this.a=a},
t7:function t7(){},
t8:function t8(a,b){this.a=a
this.b=b},
t9:function t9(){},
tg:function tg(a,b){this.a=a
this.b=b},
th:function th(){},
ti:function ti(a,b){this.a=a
this.b=b},
tj:function tj(a,b){this.a=a
this.b=b},
tk:function tk(a,b){this.a=a
this.b=b},
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
tn:function tn(a,b){this.a=a
this.b=b},
ta:function ta(){},
tb:function tb(){},
tc:function tc(){},
td:function td(){},
te:function te(){},
tf:function tf(){},
rW:function rW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rX:function rX(){},
rY:function rY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rZ:function rZ(){},
t1:function t1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t2:function t2(){},
rV:function rV(a){this.a=a},
rU:function rU(a){this.a=a},
t0:function t0(a){this.a=a},
t_:function t_(a){this.a=a},
t3:function t3(a,b){this.a=a
this.b=b},
t4:function t4(a,b,c){this.a=a
this.b=b
this.c=c},
t5:function t5(a,b){this.a=a
this.b=b},
nQ:function nQ(){},
fA(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.Z(h).i("aj<1>")
f=A.N(new A.aj(h,new A.u_(c,b),g),g.i("o.E"))
B.b.ck(f,new A.u0())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.ch,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aR('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jf()
$.kq()
j.aB()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aP(a,b,m),$async$fA)
case 8:s=6
break
case 7:s=9
return A.a(A.lP(a,b,m),$async$fA)
case 9:case 6:if(j.b==null)j.b=$.mc.$0()
s=10
return A.a(A.fB(i,j.gmM(),o,q+l,p,l),$async$fA)
case 10:case 3:f.length===h||(0,A.q)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aR('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fA)
case 11:return A.e(null,r)}})
return A.f($async$fA,r)},
fB(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fB=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b1("SELECT MAX(version) AS m FROM lp_migrations"),$async$fB)
case 2:q=p.f6(h)
if(q==null)q=0
s=3
return A.a(a.aE(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fB)
case 3:return A.e(null,r)}})
return A.f($async$fB,r)},
lP(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$lP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.x
h=A
g=A
f=J
s=2
return A.a(l.b1("PRAGMA table_info("+('"'+A.y(k,'"','""')+'"')+")"),$async$lP)
case 2:i=h.d1(new g.bG(f.b3(e,new A.tX(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Cl()
if(!m.b.test(n))A.v(A.aR('Field "'+n+u.Z))
if(o.c)throw A.b(A.aR('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.F(0,n)){s=4
break}m=A.y(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.y(n,'"','""')+'"')+" "+o.gkW()),$async$lP)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.q)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$lP,r)},
aP(a,b,c){return A.HH(a,b,c)},
HH(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aP=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.B2('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.ie(b0.w).jT(b1)
j=A.HK(b0.f,a2,a3)
p=4
s=7
return A.a(A.tY(a7,l),$async$aP)
case 7:i=b4
s=8
return A.a(b0.hO(j),$async$aP)
case 8:h=b4
if(J.w(i,"done")&&h){a3=A.B2('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.lR(a7,m),$async$aP)
case 9:g=b4
s=10
return A.a(A.lR(a7,n),$async$aP)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b1("SELECT COUNT(*) c FROM "+('"'+A.y(m,'"','""')+'"')),$async$aP)
case 13:a0=a9.f6(b4)
e=a0==null?0:a0
a3=A.y(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 14:s=15
return A.a(A.d4(b0,a7,b1,k,l,e),$async$aP)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.y(m,'"','""')+'"')),$async$aP)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.hW(j),$async$aP)
case 19:case 18:s=20
return A.a(A.lQ(a7,l,"rebuilding"),$async$aP)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.y(j,"'","''")+"'"),$async$aP)
case 21:a3=k.b
a4=A.y(n,'"','""')
d=B.a.kB(a3,'"'+a4+'"','"'+A.y(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aP)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ag("SELECT rowid, * FROM "+('"'+A.y(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aP)
case 25:b=b4
if(J.by(b)){s=24
break}s=26
return A.a(a7.a0(new A.tZ(b,b1,b0,b2,m),a3),$async$aP)
case 26:a4=J.S(J.oQ(b),"rowid")
a4.toString
c=A.an(a4)
if(J.ak(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b1("SELECT COUNT(*) c FROM "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 27:a5=a9.f6(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b1("SELECT COUNT(*) c FROM "+('"'+A.y(m,'"','""')+'"')),$async$aP)
case 28:e=a9.f6(b4)
a0=e==null?0:e
if(!J.w(a,a0)){a3=A.x('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 29:a3=A.y(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 30:s=31
return A.a(A.d4(b0,a7,b1,k,l,a),$async$aP)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.D(a8)
if(a3 instanceof A.el)throw a8
else if(a3 instanceof A.c7){a1=a3
throw A.b(A.B2('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
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
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.y(c.a+"_fts",'"','""')+'"')),$async$d4)
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
p=A.y(q,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+p+'"')+"("+('"'+A.y(q,'"','""')+'"')+") VALUES('rebuild')"),$async$d4)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.b1("SELECT COUNT(*) c FROM "+('"'+A.y(q,'"','""')+'"')),$async$d4)
case 16:m=l.f6(h)
if((m==null?0:m)!==f)throw A.b(A.x('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.lQ(b,e,"done"),$async$d4)
case 17:return A.e(null,r)}})
return A.f($async$d4,r)},
lR(a,b){var s=0,r=A.h(t.y),q,p
var $async$lR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ag("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$lR)
case 3:q=p.ea(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lR,r)},
HK(a,b,c){var s=null,r=$.i_(),q=r.v2(a),p=A.dO(a,r.a).gjQ()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.n2(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
HJ(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.aw('Field "'+s+'" is required.',s))}if(b==null)return
r=A.Ca(a,b)
if(r!=null)throw A.b(A.aw(A.HG(a,b,r),a.a))},
HI(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
A.HJ(p,b.h(0,p.a))}},
HG(a,b,c){var s,r=a.a,q=J.bN(b)
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
tY(a,b){var s=0,r=A.h(t.v),q,p,o
var $async$tY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.nc("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$tY)
case 3:p=d
o=J.L(p)
q=o.gE(p)?null:A.a6(J.S(o.gG(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$tY,r)},
lQ(a,b,c){var s=0,r=A.h(t.H)
var $async$lQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cb(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.Q),$async$lQ)
case 2:return A.e(null,r)}})
return A.f($async$lQ,r)},
JW(){return Date.now()},
u_:function u_(a,b){this.a=a
this.b=b},
u0:function u0(){},
tX:function tX(){},
tZ:function tZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m8:function m8(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
kj(a){var s=A.y(a,"\\","\\\\")
s=A.y(s,"%","\\%")
return A.y(s,"_","\\_")},
BZ(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.a9){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.v(A.aA(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aA(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aA(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.aA(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c4){A.BZ(a.a)
break A}p=a instanceof A.dt
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cY
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aA(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.q)(n),++m)A.BZ(n[m])}break A}},
zM(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.a9)return A.Ex(a,!1,b)
if(a instanceof A.c4){s=a.a
r=A.zM(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cY||s instanceof A.c4){s=new A.a4("NOT "+q,p)
break A}s=new A.a4("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dt){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){l=A.zM(s[m],!1)
o.push(l.a)
B.b.C(p,l.b)}k=B.b.B(o," AND ")
return new A.a4(b?k:"("+k+")",p)}if(a instanceof A.cY){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){j=A.JP(s[m])
o.push(j.a)
B.b.C(p,j.b)}return new A.a4("("+B.b.B(o," OR ")+")",p)}throw A.b(A.fQ(u.M))},
JP(a){var s
A:{if(a instanceof A.a9){s=A.Ex(a,!0,!1)
break A}s=A.zM(a,!1)
break A}return s},
Ex(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.y(a.a,'"','""')+'"',n=A.N(a.c,t.X),m=a.b
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
n[0]=A.kj(A.G(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kj(A.G(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kj(A.G(r))+"%"
break
default:throw A.b(A.aA(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a4(q?"("+s+")":s,n)},
d6:function d6(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a){this.a=a},
dt:function dt(a){this.a=a},
cY:function cY(a){this.a=a},
I1(a,b){var s,r=$.fO.H(0,a)
if(r!=null){$.fO.j(0,a,r)
return r}s=b.$0()
if($.fO.a>=512)$.fO.H(0,new A.T($.fO,A.n($.fO).i("T<1>")).gG(0))
$.fO.j(0,a,s)
return s},
b_:function b_(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
xZ:function xZ(a){this.a=a},
mg:function mg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
vi:function vi(a,b,c){this.a=a
this.b=b
this.c=c},
vd:function vd(){},
ve:function ve(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vf:function vf(a){this.a=a},
vg:function vg(){},
vh:function vh(){},
Ic(a){var s,r,q=B.a.ci(a)
if(q.length===0)return
s=!0
if(!B.a.F(q,'"')){r=A.af("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.af("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.aw("Invalid search term: "+a,null))},
Ib(a){var s,r,q,p
for(s=B.a.cQ(a,A.af("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
if(p.length!==0&&new A.j6(p).gm(0)<3)throw A.b(A.aw('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cL:function cL(a,b){this.a=a
this.b=b},
vB:function vB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
kg(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.dI)throw q
else{s=r
r=A.jg("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
CT(a){return A.kg(new A.qX(a))},
Hn(a){return A.kg(new A.rG(a))},
Hf(a){return A.kg(new A.r8(a))},
CY(a,b){var s
if(new A.j6(a).gm(0)!==1)throw A.b(A.aR('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aR('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
He(a){return A.kg(new A.r7(a))},
Hd(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.gaa(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Im(a){return A.kg(new A.vR(a))},
po(a,b){return A.kg(new A.pp(a,b))},
KU(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.am.h(0,s)
return b},
c3:function c3(a,b){this.a=a
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
qX:function qX(a){this.a=a},
it:function it(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
rG:function rG(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a){this.a=a},
ep:function ep(a){this.a=a},
r7:function r7(a){this.a=a},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
vR:function vR(a){this.a=a},
u1:function u1(a,b){this.a=a
this.b=b},
pS:function pS(){},
c0:function c0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
pp:function pp(a,b){this.a=a
this.b=b},
Bw(a){var s=A.JQ(a),r=A.l([],t.s)
if(B.Y.gV(B.Y))r.push("fieldResolvers")
if(B.b.bM(a.x,new A.vx()))r.push("migrationTransform")
if(B.am.gV(B.am))r.push("documentMigrations")
return new A.mt(s,A.d2(r,t.N),1,a.a,a.b,2)},
Ia(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aR("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aV(0,new A.vy(),s,r)
p=q.h(0,"formatVersion")
if(!A.ax(p))throw A.b(A.aR("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.Dt("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.ax(n)||!j.b(m)||!t.j.b(l)||!A.ax(k))throw A.b(A.aR('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.mt(m.aV(0,new A.vz(),s,t.X),A.d2(J.b3(l,new A.vA(),r),s),p,o,n,k)},
JQ(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cH(a.q(),n,m),k=B.Y.gK()
k=A.N(k,A.n(k).i("o.E"))
B.b.aG(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].q()
o=A.dH(null,null,n,m)
o.C(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gK()
n=A.N(n,A.n(n).i("o.E"))
B.b.aG(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
mt:function mt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vx:function vx(){},
vy:function vy(){},
vz:function vz(){},
vA:function vA(){},
GQ(a,b){var s,r=a.a
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
u5:function u5(){},
dM:function dM(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pD:function pD(a,b){this.a=a
this.b=b},
pG:function pG(a,b){this.a=a
this.b=b},
pC:function pC(a,b){this.a=a
this.b=b},
pF:function pF(a,b){this.a=a
this.b=b},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a,b){this.a=a
this.b=b},
py:function py(a,b){this.a=a
this.b=b},
pE:function pE(a,b){this.a=a
this.b=b},
pB:function pB(a,b){this.a=a
this.b=b},
pt:function pt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ps:function ps(){},
px:function px(){},
pw:function pw(){},
pv:function pv(){},
pu:function pu(){},
pq:function pq(){},
pr:function pr(){},
hi:function hi(){},
nx:function nx(){},
BF(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bF(a,b,c,s,d,new A.z0())},
mW(a){var s=$.C.h(0,$.ks())
if(s instanceof A.bF&&s.a===a)return s
return null},
bF:function bF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wo:function wo(a,b,c){this.a=a
this.b=b
this.c=c},
z0:function z0(){this.a=0
this.b=null},
Li(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.E(a);s.k();){r=new A.a1("")
A.cg(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aG(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.aq(B.l.v(B.e.v(p)).a)},
mj:function mj(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
vq:function vq(){},
vp:function vp(a){this.a=a},
vr:function vr(a){this.a=a},
m1:function m1(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
ub:function ub(a){this.a=a},
fi:function fi(){},
x9:function x9(a,b){this.a=a
this.b=0
this.c=b},
xa:function xa(a,b,c){this.a=a
this.b=b
this.c=c},
kO(a){var s=$.Ck()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
CE(a){return new A.ff(a)},
CF(a,b){return new A.kN(a,b)},
km(a,b,c,d,e){return A.M5(a,b,c,d,e)},
M5(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$km=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.hj(A.cW(new A.o8(new A.AD(g),A.l([],h),t.mI)))
e=0
h=new A.cd(A.bY(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$km)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.t)){j=new A.t($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$km)
case 9:f.a.u(0,m)
e+=J.ak(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.D(),$async$km)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.w(e,c))throw A.b(A.x("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.aq(B.b.gap(g).a)
A.kO(i)
if(b!=null&&i!==b)throw A.b(A.x("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.mI(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$km,r)},
p6:function p6(){},
ff:function ff(a){this.a=a},
kN:function kN(a,b){this.a=a
this.b=b},
mI:function mI(a){this.a=a},
AD:function AD(a){this.a=a},
il:function il(a){this.d=a},
qZ:function qZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r0:function r0(a,b){this.a=a
this.b=b},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
r3:function r3(){},
CU(a){return A.oH("lp_file_refs",new A.qY(a))},
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
qY:function qY(a){this.a=a},
tz:function tz(a,b){this.a=a
this.b=b},
tA:function tA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tC:function tC(a){this.a=a},
tD:function tD(a){this.a=a},
tE:function tE(a){this.a=a},
tF:function tF(a){this.a=a},
tG:function tG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tB:function tB(a,b){this.a=a
this.b=b},
DI(a){var s
if(t.m.b(a))s=J.w(a.name,"NotFoundError")||J.w(a.name,"TypeMismatchError")
else s=!1
return s},
wP:function wP(a){this.b=a
this.d=null},
wQ:function wQ(a){this.a=a},
nV:function nV(a){this.a=a},
DA(a){var s=Date.now()
return new A.mP(a,new A.aM(s,0,!1))},
mP:function mP(a,b){this.a=a
this.c=b},
p3:function p3(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
m5:function m5(){},
uo:function uo(a,b){this.a=a
this.b=b},
up:function up(){},
uI:function uI(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
us:function us(a,b,c){this.a=a
this.b=b
this.c=c},
uz:function uz(a){this.a=a},
uv:function uv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uw:function uw(){},
ux:function ux(a,b){this.a=a
this.b=b},
uy:function uy(){},
ut:function ut(a,b){this.a=a
this.b=b},
uu:function uu(){},
HR(a,b,c,d,e){var s=A.bp(null,t.H)
return new A.uA(b,c,new A.uH(a,B.av,null),e,d,s)},
HS(a){return 0.5+B.as.n6()},
j0:function j0(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
uA:function uA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
uH:function uH(a,b,c){this.a=a
this.b=b
this.c=c},
uD:function uD(){},
uE:function uE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uB:function uB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uC:function uC(){},
uF:function uF(a){this.a=a},
uG:function uG(a){this.a=a},
z7:function z7(a,b){this.a=a
this.b=null
this.c=b},
ir(a,b){return new A.dB(a)},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lr:function lr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a){this.a=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
uq:function uq(a){this.a=a},
ur:function ur(a){this.a=a},
oT:function oT(a){this.a=a},
oU:function oU(a,b){this.a=a
this.b=b},
oV:function oV(a){this.a=a},
oW:function oW(){},
B0(a){return A.oH("lp_conflicts",new A.pT(a))},
bA:function bA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
pT:function pT(a){this.a=a},
pU:function pU(a){this.a=a},
pZ:function pZ(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pW:function pW(a,b){this.a=a
this.b=b},
pX:function pX(a,b){this.a=a
this.b=b},
pV:function pV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mM:function mM(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
wc:function wc(a){this.a=a},
w4:function w4(a){this.a=a},
wa:function wa(a,b){this.a=a
this.b=b},
w9:function w9(a){this.a=a},
w8:function w8(a,b){this.a=a
this.b=b},
wb:function wb(a){this.a=a},
w5:function w5(a,b){this.a=a
this.b=b},
w6:function w6(){},
w7:function w7(){},
ev(a){return new A.d3(a)},
Ch(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.f9(a,b)
r=A.bf(a,s)
q=A.ai(r)
p=A.aq(B.l.v(B.e.v(q)).a)
return new A.ey(b,s,q,p,k)}catch(m){l=A.D(m)
if(l instanceof A.d3){o=l
return new A.ey(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.ey(b,k,k,k,l)}}},
M0(a,b){var s,r=A.l([],t.i7)
for(s=J.E(b);s.k();)r.push(A.Ch(a,s.gn()))
return r},
Cg(a,b){var s=0,r=A.h(t.eT),q
var $async$Cg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.M0(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cg,r)},
f9(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.ba(b.d,j,i),g=a.gdc(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.w(f,s))throw A.b(A.ev('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bI(r))throw A.b(A.ev('Field "archived" must be a boolean, got '+J.bN(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.q)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ev('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Ca(o,n)
if(m!=null)throw A.b(A.ev(A.KB(o,n,m)))
q.j(0,s,n)}for(j=new A.aN(h,A.n(h).i("aN<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.F(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.w(r,!0))
return q},
KB(a,b,c){var s,r=a.a,q=J.bN(b)
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
hW(a){var s,r,q,p
if(a==null||a.length===0)return B.n
s=null
try{s=B.h.av(a,null)}catch(q){r=A.D(q)
p=A.ev("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ev("Corrupt payload JSON: expected an object, got "+J.bN(s).l(0)+"."))
return A.ba(s,t.N,t.X)},
d3:function d3(a){this.a=a},
ey:function ey(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bJ(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aO(i),g=A.d1(a.gK(),i)
g.C(0,b.gK())
for(g=A.hv(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.r.X(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.ku(o.gK(),new A.A6())&&J.ku(n.gK(),new A.A7())){m=A.bJ(A.ba(o,i,q),A.ba(n,i,q))
for(l=A.n(m),k=new A.e0(m,m.r,l.i("e0<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
HE(a,b,c,d,e,f,g){return new A.tP()},
Kv(a,b){var s,r,q=a.b
if(q.gE(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dj(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
Bl(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$Bl=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.HF(B.bR,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Bl,r)},
HF(a,b,c,d,e,f,g){var s,r,q,p=A.bJ(b,c),o=A.bJ(b,f)
A.HE(b,p,o,c,e,f,g)
s=t.N
r=A.d1(c.gK(),s)
r.C(0,new A.T(f,A.n(f).i("T<1>")))
r.C(0,b.gK())
q=A.N(r,A.n(r).c)
return A.tV(a,b,p,o,0,q,c,A.u(s,t.X),d,e,f,new A.yW(),g)},
tV(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dK(h,a0.a,null)
s=f[e]
r=g.h(0,s)
q=k.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.w(p,!0)
n=J.w(r,!0)
m=J.w(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{i.b.h(0,s)
h.j(0,s,m)}return A.tV(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.Dc(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.t)return l.aj(new A.tW(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.tV(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
Dc(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.r.X(a1,a4))return a1
if(B.r.X(a1,a0))return a4
if(B.r.X(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.ku(a1.gK(),new A.tQ()))if(J.ku(a4.gK(),new A.tR()))if(a0!=null)r=s.b(a0)&&J.ku(a0.gK(),new A.tS())
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
k=A.u(r,q)
j=[]
for(r=s.$ti.c,l=A.hv(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.Dc(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.t)g=!0
j.push(d)}if(!g){for(s=A.hv(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.B9(new A.X(j,new A.tT(),A.Z(j).i("X<1,z<j?>>")),q).aj(new A.tU(s,k),q)}A.Kv(a3,a2)
return a4},
Fs(a,b,c,d,e,f){return A.Bl(a,b,c,d,e,f)},
A6:function A6(){},
A7:function A7(){},
tP:function tP(){},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a,b,c){this.a=a
this.b=b
this.c=c},
yW:function yW(){this.a=!1},
yU:function yU(){},
xe:function xe(){},
tW:function tW(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
tQ:function tQ(){},
tR:function tR(){},
tS:function tS(){},
tT:function tT(){},
tU:function tU(a,b){this.a=a
this.b=b},
uc:function uc(a,b){this.a=a
this.b=b},
ue:function ue(a){this.a=a},
uf:function uf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(){},
j5:function j5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uh:function uh(a,b){this.a=a
this.b=b},
un:function un(a,b){this.a=a
this.b=b},
ul:function ul(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uk:function uk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
uj:function uj(a,b,c){this.a=a
this.b=b
this.c=c},
um:function um(a){this.a=a},
eb:function eb(a,b){this.a=a
this.b=b},
mf:function mf(a,b){this.b=a
this.f=b},
uX:function uX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v4:function v4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v3:function v3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uZ:function uZ(a,b,c){this.a=a
this.b=b
this.c=c},
uY:function uY(a,b,c){this.a=a
this.b=b
this.c=c},
v0:function v0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v_:function v_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v2:function v2(a,b,c){this.a=a
this.b=b
this.c=c},
v1:function v1(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v5:function v5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
v7:function v7(a,b,c,d){var _=this
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
va:function va(a,b,c){this.a=a
this.b=b
this.c=c},
v9:function v9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v8:function v8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v6:function v6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vb:function vb(a,b,c,d,e,f,g,h,i,j){var _=this
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
c9:function c9(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h6:function h6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
h5:function h5(a,b){this.a=a
this.b=b},
w1:function w1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w2:function w2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
DB(a){return new A.h9(a)},
GF(a){return new A.c_(a)},
Hc(a){return new A.cE(a)},
HP(a){return new A.cI(a)},
bt(a){return new A.fL(a)},
LF(a){var s=a.xA(),r=new A.Am()
return A.r(r.$2(A.Br(s),4))+"-"+A.r(r.$1(A.Bp(s)))+"-"+A.r(r.$1(A.uO(s)))+" "+A.r(r.$1(A.Bn(s)))+":"+A.r(r.$1(A.Bo(s)))+":"+A.r(r.$1(A.Bq(s)))+"."+A.r(r.$2(A.Dl(s),3))+"Z"},
bu:function bu(){},
h9:function h9(a){this.a=a},
eF:function eF(a,b){this.b=a
this.a=b},
jb:function jb(a){this.a=a},
c_:function c_(a){this.a=a},
cE:function cE(a){this.a=a},
cI:function cI(a){this.a=a},
fJ:function fJ(a){this.a=a},
fL:function fL(a){this.a=a},
fp:function fp(a){this.a=a},
ec:function ec(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fN:function fN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j4:function j4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kE:function kE(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
Am:function Am(){},
Ip(a){return 0.5+B.as.n6()},
BC(a){var s,r=a.toLowerCase()
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
Iq(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).eb(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.BC(r)
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
return A.BD(r,q,p,o,n,A.aG(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).eb(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.BC(r)
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
return A.BD(l,q,r,p,o,A.aG(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).eb(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.BC(r)
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
return A.BD(r,q,p,o,n,A.aG(s))}return k},
BD(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.B1(a,b,c,d,e,f,0)
return s}catch(r){return null}},
w3:function w3(a,b){this.at=a
this.ay=b},
j3:function j3(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b},
we:function we(a,b){this.a=a
this.b=b},
F8(a,b,c,d,e,f,g,h,i,j){var s,r=A.Fu(a,b,c,null,d,e,f,g,h,i,j),q=A.u(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.X[s],r[s])
return q},
Fu(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.F5(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
F5(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Ld(a,b,c,d,e,f,g){var s,r=null,q=A.FG(B.a5,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.u(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.W[s],q[s])
return p},
FG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.F6(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
F6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
FC(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
hX(a){return new A.X(a,new A.AI(),A.Z(a).i("X<1,k>")).B(0,", ")},
jl(a){return A.oH("lp_sync_row",new A.wd(a))},
m4(a){return A.oH("lp_outbox",new A.ui(a))},
HQ(a){return A.oH("lp_op_queue",new A.ud(a))},
kn(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aO(n)
l=A.N(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.ae(k,"?",!1,n),", ")
k=a.ag("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kn)
case 3:j.C(0,i.b3(h.a(d),new A.AG(),n))
k=A.N(l,n)
k.push("pending")
k.push("failed")
k=a.ag("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kn)
case 4:j.C(0,i.b3(h.a(d),new A.AH(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kn,r)},
hZ(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$hZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.en("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$hZ)
case 5:s=p.by(o.a(f))?2:4
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
Ae(a,b){var s=0,r=A.h(t.H),q,p
var $async$Ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aF(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$Ae)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Ae,r)},
cz(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nc("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cz)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.W("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cz)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Ae(a,o),$async$cz)
case 8:case 7:s=3
break
case 4:m=a.W("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cz)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cz)
case 10:s=d?11:12
break
case 11:m=a.W("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cz)
case 13:n=a.W("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cz)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cz,r)},
cO:function cO(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
AI:function AI(){},
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
wd:function wd(a){this.a=a},
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
ui:function ui(a){this.a=a},
eA:function eA(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
ud:function ud(a){this.a=a},
AG:function AG(){},
AH:function AH(){},
wr:function wr(a,b){this.a=a
this.b=b},
HB(a){var s,r,q
try{s=A.oE(a)
if(t.f.b(s)){r=A.f5(s)
return r}}catch(q){}return null},
HC(a){if(a instanceof A.js)return A.f8(new A.nb(3,a.a,a.b,null).q())
t.bp.a(a)
return A.Bj(a.a,a.b,a.c,a.d)},
Bj(a,b,c,d){return A.f8(new A.nb(3,a,null,new A.wR(b,c,d)).q())},
kf(a){return A.Kt(a)},
Kt(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kf=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.hY()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a5(f.getDirectory(),k),$async$kf)
case 7:n=c
j=$.i_()
i=A.N(j.cQ(0,"drift_db"),t.N)
m=i
J.AU(m,j.cQ(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ak(l)===0){s=9
break}s=11
return A.a(A.a5(n.getDirectoryHandle(l,{create:!1}),k),$async$kf)
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
return A.f($async$kf,r)},
ox(a,b){return A.Ku(a,b)},
Ku(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$ox=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kf(a),$async$ox)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a5(m.getFileHandle(A.dO(b,$.i_().a).gjQ(),{create:!1}),t.m),$async$ox)
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
return A.f($async$ox,r)},
oy(a,b){return A.KC(a,b)},
KC(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$oy=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kf(a),$async$oy)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.B7(m,A.dO(b,$.i_().a).gjQ()),$async$oy)
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
return A.f($async$oy,r)},
tw:function tw(){},
tx:function tx(a){this.a=a},
ty:function ty(a){this.a=a},
lL:function lL(a,b,c){this.a=a
this.d=b
this.e=c},
tH:function tH(a){this.a=a},
hn:function hn(a){this.a=a},
dp(a){var s,r,q
if(a instanceof A.aM)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.aI){s=t.N
return A.m(["lp:bigint",a.l(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.d2(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.b3(a,A.Lq(),s)
r=A.N(r,r.$ti.i("V.E"))
return A.d2(r,s)}if(t.f.b(a)){q=A.u(t.N,t.X)
a.a1(0,new A.Aj(q))
return q}if(a==null||A.bI(a)||A.ax(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.bN(a).l(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
Ac(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gm(a)===1&&a.I(l)){s=a.h(0,l)
if(A.ax(s)){r=B.c.ak(s,1000)
q=B.c.M(s-r,1000)
if(q<-864e13||q>864e13)A.v(A.as(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.v(A.aA(r,"microsecond",u.B))
A.bY(!0,"isUtc",t.y)
return new A.aM(q,r,!0)}throw A.b(A.O("Malformed wire DateTime: "+A.r(s),k))}if(a.gm(a)===1&&a.I(j)){s=a.h(0,j)
if(typeof s=="string")return A.BN(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.r(s),k))}if(a.gm(a)===1&&a.I(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.L(s)
q=r.gm(s)
p=new Uint8Array(q)
for(o=0;o<r.gm(s);++o){n=r.h(s,o)
if(!A.ax(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.r(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.r(s),k))}m=A.u(t.N,t.X)
a.a1(0,new A.Ad(m))
return m}if(t.j.b(a)){r=t.X
q=J.b3(a,A.Lp(),r)
q=A.N(q,q.$ti.i("V.E"))
return A.d2(q,r)}return a},
Aj:function Aj(a){this.a=a},
Ad:function Ad(a){this.a=a},
KP(){return new A.aM(Date.now(),0,!1)},
cT:function cT(a,b,c,d,e,f,g,h,i,j){var _=this
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
wv:function wv(a,b){this.f=a
this.r=b},
wy:function wy(){},
ww:function ww(a){this.a=a},
wx:function wx(){},
M2(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.u(t.N,t.X)
try{if(t.f.b(a)){s=A.f5(a)
r=A.u(t.N,t.X)
q=t.j
if(q.b(J.S(s,n))){p=J.S(s,n)
p.toString
p=J.b3(q.a(p),new A.AA(),t.bU)
q=A.N(p,p.$ti.i("V.E"))
J.bZ(r,n,q)}if(A.ax(J.S(s,m)))J.bZ(r,m,J.S(s,m))
if(A.bI(J.S(s,l)))J.bZ(r,l,J.S(s,l))
return r}}catch(o){}return A.u(t.N,t.X)},
FA(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.f5(a).h(0,b)
return s}}catch(r){}return null},
LK(a,b){if(b!=null)return!1
return B.b.bM(a,new A.Ar())},
AA:function AA(){},
Ar:function Ar(){},
Aq:function Aq(){},
Ma(a){if(a instanceof A.dI){if(a instanceof A.eK)return"ValidationException"
if(a instanceof A.eJ)return"UniqueConstraintException"
if(a instanceof A.ez)return"NotNullConstraintException"
if(a instanceof A.fh)return"CheckConstraintException"
if(a instanceof A.fK)return"PrimaryKeyConstraintException"
if(a instanceof A.fu)return"ForeignKeyConstraintException"
if(a instanceof A.cM)return"StorageError"
if(a instanceof A.fS)return"RecordNotFoundException"
if(a instanceof A.fW)return"SchemaTooNewError"
if(a instanceof A.fw)return"FtsUnavailableError"
if(a instanceof A.hc)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eE)return"SchemaRegistrationError"
if(a instanceof A.h1)return"StaleCursorError"
if(a instanceof A.fC)return"MissingLimitError"
if(a instanceof A.fl)return"ConflictBlockedError"
if(a instanceof A.el)return"DestructiveMigrationRefusedError"
if(a instanceof A.fR)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bu){if(a instanceof A.h9)return"TransientNetworkError"
if(a instanceof A.eF)return"ServerBusyError"
if(a instanceof A.jb)return"ServerError"
if(a instanceof A.c_)return"AuthError"
if(a instanceof A.cE)return"ForbiddenError"
if(a instanceof A.cI)return"NotFoundError"
if(a instanceof A.fJ)return"PayloadError"
if(a instanceof A.fL)return"ProtocolError"
if(a instanceof A.fp)return"DuplicateIdError"
if(a instanceof A.ec)return"BatchFailedError"
return"SyncError"}if(a instanceof A.j2)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bi)return"StateError"
if(a instanceof A.bz)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
IA(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.ax(s))throw A.b(A.d7('Request "v" must be an int.'))
if(!A.ax(r)||r<0)throw A.b(A.d7('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.da.F(0,q))throw A.b(A.d7("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.d7('Request "a" must be a map.'))
return new A.hg(s,r,q,p.aV(0,new A.wU(),t.N,t.X))},
d7(a){return new A.j2(a)},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wU:function wU(){},
nb:function nb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wR:function wR(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
DJ(a){return A.bv(A.bK(a).a,null)},
DK(a){return A.bv(J.bN(a).a,null)},
aJ:function aJ(a){this.a=a},
M3(a){if(!t.f.b(a))throw A.b(A.a8("Schema must be a map: "+A.r(a),null,null))
return A.po(A.f5(a),t.X)},
f5(a){var s=A.u(t.N,t.X)
a.a1(0,new A.Ag(s))
return s},
IC(a){var s,r=A.u(t.N,t.X)
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
hh:function hh(){},
js:function js(a,b){this.b=a
this.a=b},
eM:function eM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
Ag:function Ag(a){this.a=a},
Af:function Af(){},
nf:function nf(){},
x_:function x_(a,b,c,d,e){var _=this
_.at=$
_.a=a
_.c=b
_.d=c
_.e=d
_.f=null
_.r=1
_.z=_.y=_.x=_.w=null
_.Q=e
_.as=null},
x0:function x0(a){this.a=a},
nl:function nl(a){this.a=a},
nd:function nd(){},
wX:function wX(a,b,c){this.a=a
this.b=b
this.c=c},
wW:function wW(a){this.a=a},
ne:function ne(){},
wY:function wY(a){this.a=a},
wZ:function wZ(){},
nh:function nh(){},
x1:function x1(a){this.a=a},
x2:function x2(a){this.a=a},
ni:function ni(){},
zt:function zt(a,b){this.a=a
this.b=b},
nj:function nj(){},
x7:function x7(a){this.a=a},
x8:function x8(a,b){this.a=a
this.b=b},
ol:function ol(){},
om:function om(){},
on:function on(){},
oo:function oo(){},
op:function op(){},
EM(a){return a},
F1(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a1("")
o=a+"("
p.a=o
n=A.Z(b)
m=n.i("ct<1>")
l=new A.ct(b,0,s,m)
l.iT(b,0,s,n.c)
m=o+new A.X(l,new A.zZ(),m.i("X<V.E,k>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.l(0),null))}},
q0:function q0(a){this.a=a},
q1:function q1(){},
q2:function q2(){},
zZ:function zZ(){},
rO:function rO(){},
dO(a,b){var s,r,q,p,o,n=b.o8(a),m=b.cH(a)
if(n!=null)a=B.a.ad(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.cc(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cc(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ad(a,p))
q.push("")}return new A.m6(b,n,m,r,q)},
m6:function m6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Di(a){return new A.m7(a)},
m7:function m7(a){this.a=a},
Io(){var s,r,q,p,o,n,m,l,k=null
if(A.BG().gb0()!=="file")return $.kr()
if(!B.a.c7(A.BG().gbr(),"/"))return $.kr()
s=A.Ei(k,0,0)
r=A.Eg(k,0,0,!1)
q=A.zk(k,0,0,k)
p=A.Ef(k,0,0)
o=A.zj(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Eh("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.BX(l,m)
else l=A.f_(l)
if(A.k8("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kE()==="a\\b")return $.oK()
return $.FS()},
w0:function w0(){},
uK:function uK(a,b,c){this.d=a
this.e=b
this.f=c},
wB:function wB(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
wV:function wV(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
B6(a,b){if(b<0)A.v(A.aZ("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.v(A.aZ("Offset "+b+u.D+a.gm(0)+"."))
return new A.lm(a,b)},
vJ:function vJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lm:function lm(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
Hj(a,b){var s=A.Hk(A.l([A.IZ(a,!0)],t.pg)),r=new A.rE(b).$0(),q=B.c.l(B.b.ga_(s).b+1),p=A.Hl(s)?0:3,o=A.Z(s)
return new A.rk(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.rm(),o.i("X<1,i>")).xi(0,B.bz),!A.LS(new A.X(s,new A.rn(),o.i("X<1,j?>"))),new A.a1(""))},
Hl(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.w(r.c,q.c))return!1}return!0},
Hk(a){var s,r,q=A.LJ(a,new A.rp(),t.nf,t.K)
for(s=A.n(q),r=new A.aS(q,q.r,q.e,s.i("aS<2>"));r.k();)J.Cw(r.d,new A.rq())
s=s.i("aN<1,2>")
r=s.i("ik<o.E,cx>")
s=A.N(new A.ik(new A.aN(q,s),new A.rr(),r),r.i("o.E"))
return s},
IZ(a,b){var s=new A.yx(a).$0()
return new A.bo(s,!0,null)},
J0(a){var s,r,q,p,o,n,m=a.gaL()
if(!B.a.F(m,"\r\n"))return a
s=a.gN().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gP()
p=a.ga2()
o=a.gN().gaf()
p=A.mB(s,a.gN().gaq(),o,p)
o=A.y(m,"\r\n","\n")
n=a.gbe()
return A.vK(r,p,o,A.y(n,"\r\n","\n"))},
J1(a){var s,r,q,p,o,n,m
if(!B.a.c7(a.gbe(),"\n"))return a
if(B.a.c7(a.gaL(),"\n\n"))return a
s=B.a.A(a.gbe(),0,a.gbe().length-1)
r=a.gaL()
q=a.gP()
p=a.gN()
if(B.a.c7(a.gaL(),"\n")){o=A.Al(a.gbe(),a.gaL(),a.gP().gaq())
o.toString
o=o+a.gP().gaq()+a.gm(a)===a.gbe().length}else o=!1
if(o){r=B.a.A(a.gaL(),0,a.gaL().length-1)
if(r.length===0)p=q
else{o=a.gN().gar()
n=a.ga2()
m=a.gN().gaf()
p=A.mB(o-1,A.E_(s),m-1,n)
q=a.gP().gar()===a.gN().gar()?p:a.gP()}}return A.vK(q,p,r,s)},
J_(a){var s,r,q,p,o
if(a.gN().gaq()!==0)return a
if(a.gN().gaf()===a.gP().gaf())return a
s=B.a.A(a.gaL(),0,a.gaL().length-1)
r=a.gP()
q=a.gN().gar()
p=a.ga2()
o=a.gN().gaf()
p=A.mB(q-1,s.length-B.a.dj(s,"\n")-1,o-1,p)
return A.vK(r,p,s,B.a.c7(a.gbe(),"\n")?B.a.A(a.gbe(),0,a.gbe().length-1):a.gbe())},
E_(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.ii(a,"\n",s-2)-1
else return s-B.a.dj(a,"\n")-1},
rk:function rk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rE:function rE(a){this.a=a},
rm:function rm(){},
rl:function rl(){},
rn:function rn(){},
rp:function rp(){},
rq:function rq(){},
rr:function rr(){},
ro:function ro(a){this.a=a},
rF:function rF(){},
rs:function rs(a){this.a=a},
rz:function rz(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
rC:function rC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rx:function rx(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
rt:function rt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ru:function ru(a,b,c){this.a=a
this.b=b
this.c=c},
rv:function rv(a,b,c){this.a=a
this.b=b
this.c=c},
rw:function rw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rD:function rD(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
yx:function yx(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mB(a,b,c,d){if(a<0)A.v(A.aZ("Offset may not be negative, was "+a+"."))
else if(c<0)A.v(A.aZ("Line may not be negative, was "+c+"."))
else if(b<0)A.v(A.aZ("Column may not be negative, was "+b+"."))
return new A.cr(d,a,c,b)},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mC:function mC(){},
mE:function mE(){},
Ig(a,b,c){return new A.h_(c,a,b)},
mF:function mF(){},
h_:function h_(a,b,c){this.c=a
this.a=b
this.b=c},
h0:function h0(){},
vK(a,b,c,d){var s=new A.db(d,a,b,c)
s.oL(a,b,c)
if(!B.a.F(d,c))A.v(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Al(d,c,a.gaq())==null)A.v(A.O('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
db:function db(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Ik(a){var s
A:{if(18===a){s=B.dc
break A}if(23===a){s=B.dd
break A}if(9===a){s=B.de
break A}s=null
break A}return s},
jd:function jd(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
Ij(a,b,c,d,e,f,g){return new A.c7(d,b,c,e,f,a,g)},
c7:function c7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vP:function vP(){},
kx:function kx(a){this.a=a},
K0(a,b,c){var s,r,q,p,o,n=new A.n6(c,A.ae(c.b,null,!1,t.X))
try{A.EB(a,b.$1(n))}catch(r){s=A.D(r)
q=B.e.v(A.ii(s))
p=a.a
o=p.cC(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
EB(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.ax(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.DN(b).l(0)))
break A}if(b instanceof A.aI){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.CD(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bI(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.DN(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cC(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cC(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.ak(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.EB(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.v(A.aA(b,"result","Unsupported type"))}return s},
qr:function qr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
qA:function qA(a){this.a=a},
qz:function qz(a){this.a=a},
qB:function qB(a){this.a=a},
qx:function qx(a){this.a=a},
qw:function qw(a){this.a=a},
qy:function qy(a){this.a=a},
qt:function qt(a){this.a=a},
qs:function qs(a){this.a=a},
qu:function qu(a){this.a=a},
qC:function qC(a){this.a=a},
qv:function qv(a,b){this.a=a
this.b=b},
n6:function n6(a,b){this.a=a
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
za:function za(a,b){this.a=a
this.b=b},
zb:function zb(a,b,c){this.a=a
this.b=b
this.c=c},
zc:function zc(a,b,c){this.a=a
this.b=b
this.c=c},
vL:function vL(){},
h2:function h2(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
Bb(a,b){var s=$.oJ()
return new A.lt(A.u(t.N,t.a_),s,a)},
lt:function lt(a,b,c){this.d=a
this.b=b
this.a=c},
nL:function nL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
M4(a){var s=J.Gz(new v.G.URL(a,"file:///").pathname,"/")
return new A.aj(s,new A.AB(),A.Z(s).i("aj<1>"))},
AB:function AB(){},
q6:function q6(){},
mo:function mo(a,b,c){this.d=a
this.a=b
this.c=c},
c6:function c6(a,b){this.a=a
this.b=b},
yV:function yV(a){this.a=a
this.b=-1},
o0:function o0(){},
o1:function o1(){},
o3:function o3(){},
o4:function o4(){},
ug:function ug(a,b){this.a=a
this.b=b},
I4(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bA(r,"step")}return s},
ei:function ei(){},
bP:function bP(a){this.a=a},
l3:function l3(a){this.a=a},
hd(a){return new A.df(a)},
CB(a,b){var s,r,q,p
if(b==null)b=$.oJ()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cI(256)
r&2&&A.I(a)
a[q]=p}},
df:function df(a){this.a=a},
jc:function jc(a){this.a=a},
b6:function b6(){},
kM:function kM(){},
kL:function kL(){},
M8(a,b){var s=null,r=new A.et(t.kk)
return A.oI(a,new A.jt(s,s,s,s,s,s,s,s,new A.AL(new A.AK(r,A.zR(new A.AM(r)))),s,s,s,s),s,b)},
eN:function eN(a){var _=this
_.d=a
_.c=_.b=_.a=null},
AM:function AM(a){this.a=a},
AK:function AK(a,b){this.a=a
this.b=b},
AL:function AL(a){this.a=a},
wM:function wM(a){this.a=a},
wH:function wH(a,b,c){this.a=a
this.b=b
this.c=c},
wO:function wO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wN:function wN(a,b,c){this.b=a
this.c=b
this.d=c},
dV:function dV(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
bX(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.D(r)
if(q instanceof A.df){s=q
return s.a}else return 1}},
l6:function l6(a){this.b=this.a=$
this.d=a},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qe:function qe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qg:function qg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qi:function qi(a,b){this.a=a
this.b=b},
qb:function qb(a){this.a=a},
qh:function qh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qm:function qm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qk:function qk(a,b){this.a=a
this.b=b},
qj:function qj(a,b){this.a=a
this.b=b},
qd:function qd(a,b,c){this.a=a
this.b=b
this.c=c},
qf:function qf(a,b){this.a=a
this.b=b},
ql:function ql(a,b){this.a=a
this.b=b},
qa:function qa(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b){this.a=a
this.$ti=b},
oX:function oX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oZ:function oZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oY:function oY(a,b,c){this.a=a
this.b=b
this.c=c},
cC(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bm(a,"success",new A.pK(r,a,b),!1,q)
A.bm(a,"error",new A.pL(r,a),!1,q)
return s},
GU(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bm(a,"success",new A.pP(r,a,b),!1,q)
A.bm(a,"error",new A.pQ(r,a),!1,q)
A.bm(a,"blocked",new A.pR(r),!1,q)
return s},
eR:function eR(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
y_:function y_(a,b){this.a=a
this.b=b},
y0:function y0(a,b){this.a=a
this.b=b},
pK:function pK(a,b,c){this.a=a
this.b=b
this.c=c},
pL:function pL(a,b){this.a=a
this.b=b},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a,b){this.a=a
this.b=b},
pR:function pR(a){this.a=a},
hY(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
CW(a,b,c){var s=a.read(b,c)
return s},
CX(a,b,c){var s=a.write(b,c)
return s},
B7(a,b){return A.a5(a.removeEntry(b,{recursive:!1}),t.X)},
CV(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.v(A.O("Target object does not implement the async iterable interface",null))
return new A.eV(new A.r4(),new A.i4(a,s),s.i("eV<aa.T,M>"))},
r4:function r4(){},
wI:function wI(a){this.a=a},
wJ:function wJ(a){this.a=a},
wL(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$wL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a5(p.fetch(new p.URL(a,A.be(p.location).href),null),t.m),$async$wL)
case 3:q=o.wK(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wL,r)},
wK(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$wK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.l6(A.u(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.wI(p).ik(a),$async$wK)
case 3:q=new o.he(new n.wM(m.Iz(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wK,r)},
he:function he(a){this.a=a},
J2(a){var s=new A.jL(a,new A.am(new A.t($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oP(a)
return s},
lv(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$lv=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.p_(a)
n=A.Bb("dart-memory",null)
m=$.oJ()
l=new A.dD(o,n,new A.et(t.p3),A.aO(p),A.u(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.io(),$async$lv)
case 3:s=4
return A.a(l.eR(),$async$lv)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lv,r)},
p_:function p_(a){this.a=null
this.b=a},
p2:function p2(a){this.a=a},
p1:function p1(a,b,c){this.a=a
this.b=b
this.c=c},
p0:function p0(a){this.a=a},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
yA:function yA(a){this.a=a},
yB:function yB(a){this.a=a},
yz:function yz(a){this.a=a},
yC:function yC(a,b,c){this.a=a
this.b=b
this.c=c},
yE:function yE(a,b){this.a=a
this.b=b},
yD:function yD(a,b){this.a=a
this.b=b},
yb:function yb(a,b,c){this.a=a
this.b=b
this.c=c},
yc:function yc(a,b){this.a=a
this.b=b},
nU:function nU(a,b){this.a=a
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
rI:function rI(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(){},
rH:function rH(a,b){this.a=a
this.b=b},
nM:function nM(a,b,c){this.a=a
this.b=b
this.c=c},
yy:function yy(a,b){this.a=a
this.b=b},
b8:function b8(){},
jJ:function jJ(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jD:function jD(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
ho:function ho(a,b,c){var _=this
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
Du(a){var s=A.Bb("dart-memory",null),r=$.oJ()
return new A.fZ(s,r,a)},
mx(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$mx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.hY()
if(j==null)throw A.b(A.hd(1))
p=t.m
s=3
return A.a(A.a5(j.getDirectory(),p),$async$mx)
case 3:o=d
n=A.M4(a),m=J.E(n.a),n=new A.cU(m,n.b,n.$ti.i("cU<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a5(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$mx)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a4(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mx,r)},
my(a){var s=0,r=A.h(t.m),q
var $async$my=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.mx(a,!0),$async$my)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$my,r)},
vH(a,b){var s=0,r=A.h(t.g_),q,p
var $async$vH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.hY()==null)throw A.b(A.hd(1))
p=A
s=3
return A.a(A.my(a),$async$vH)
case 3:q=p.vG(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vH,r)},
vG(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$vG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.Du(c)
s=3
return A.a(p.cK(a,!1),$async$vG)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vG,r)},
ft:function ft(a,b,c){this.c=a
this.a=b
this.b=c},
fZ:function fZ(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
vI:function vI(a,b){this.a=a
this.b=b},
o9:function o9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
yR:function yR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Iz(a,b){var s=A.be(a.exports.memory)
b.b!==$&&A.cy()
b.b=s
s=new A.wC(s,b,a.exports)
s.oM(a,b)
return s},
nk(a,b){var s,r=A.bT(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dW(a,b,c){var s=a.buffer
return B.k.f0(A.bT(s,b,c==null?A.nk(a,b):c))},
BH(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.f0(A.bT(s,b,c==null?A.nk(a,b):c))},
DL(a,b,c){var s=new Uint8Array(c)
B.f.cP(s,0,A.bT(a.buffer,b,c))
return s},
wC:function wC(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
wD:function wD(a){this.a=a},
wE:function wE(a){this.a=a},
wF:function wF(a){this.a=a},
wG:function wG(a){this.a=a},
A8(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$A8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kt()
s=l!=null?3:5
break
case 3:p=A.Ky()
s=6
return A.a(A.jq(l,p,null,null,!1),$async$A8)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a4({port:m.port1,lockName:p},new A.ib(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$A8,r)},
Ky(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bs(97+$.Gj().cI(26))
return r.charCodeAt(0)==0?r:r},
GK(a){return new A.i9(a)},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
uR:function uR(){},
uV:function uV(a){this.a=a},
uW:function uW(a){this.a=a},
uU:function uU(a){this.a=a},
uT:function uT(a){this.a=a},
uS:function uS(a){this.a=a},
i9:function i9(a){this.a=a},
qp:function qp(){},
l2:function l2(a){this.a=a},
q7:function q7(a){this.a=a},
eL:function eL(){},
ll(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$ll=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.my(a),$async$ll)
case 3:p=e
o=A.Du(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cK(p,!0),$async$ll)
case 6:case 5:q=new A.lk(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ll,r)},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jq(a,b,c,d,e){var s,r,q={},p=new A.t($.C,t.nI),o=new A.am(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.B8(A.a5(a.request(b,s,A.cX(new A.wS(q,o))),r),new A.wT(q,d,o),r,t.K)
return p},
wS:function wS(a,b){this.a=a
this.b=b},
wT:function wT(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.a=a},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
qE:function qE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qD:function qD(a,b){this.a=a
this.b=b},
qF:function qF(a){this.a=a},
iR:function iR(a){this.a=!1
this.b=a},
u8:function u8(a,b){this.a=a
this.b=b},
u7:function u7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
u6:function u6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
GR(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bO(n,A.Z(n).i("bO<1,k>"))
for(s=J.L(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a4(A.fr(B.cG,s.h(m,q)),s.h(m,q+1)))}s=A.hL(a.b)
q=A.hL(a.c)
p=A.hL(a.d)
return new A.ej(o,s,q,A.hL(a.g),p)},
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
I7(a){var s
if(J.w(a.t,"errorResponse")){s=A.H6(a)
if(s!=null&&s instanceof A.ds)return s
else return new A.fT(a.e)}else return new A.fT("Did not respond with expected type, got "+A.r(a))},
H6(a){var s=a.s,r=s==null?null:A.an(s)
A:{if(0===r){s=A.H7(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
H7(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.x("Pattern matching error"))
n=new A.qV()
l=A.an(A.f0(l))
A.G(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ek(i,h,A.bT(h,0,o))}else p=o
n=n.$1(k)
A.Er(g)
return new A.c7(s,r,l,g==null?o:A.an(g),n,q,p)},
H8(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Is(l)
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
I8(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.ri(a2,512,"transfer" in a2)
a5.mz(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.I4(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.q5(l)
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
d=A.nk(r,f)
f=new Uint8Array(e,f,d)
c=new A.dk(!1).cW(f,0,a,!0)
i=c
g=B.aH
break
case 4:i=s.kY(j)
g=B.aI
break
case 5:default:i=a
g=B.aJ}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.nk(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dk(!1).cW(a0,0,a,!0)}return A.Ft(!1,b,0,0,a1,a,a3.xy(0))},
LT(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
qV:function qV(){},
Ft(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
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
Lz(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
lO:function lO(a,b,c){this.a=a
this.b=b
this.$ti=c},
vw:function vw(){},
Hb(a){var s,r
for(s=0;s<5;++s){r=B.ct[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
Ir(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aJ
break A}q=A.ax(a)
p=q?a:j
if(q){s=p
r=B.aE
break A}q=a instanceof A.aI
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
break A}q=A.bI(a)
k=q?a:j
if(q){s=k
r=B.bn
break A}throw A.b(A.O("Unsupported value: "+A.r(a),j))}return new A.a4(r,s)},
Is(a){var s,r,q,p,o,n
if(a instanceof A.ek)return new A.a4(a.a,a.b)
s=[]
r=J.L(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Ir(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a4(s,t.a.a(B.f.ga8(p)))},
dz:function dz(a,b,c){this.c=a
this.a=b
this.b=c},
cv:function cv(a,b){this.a=a
this.b=b},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
oC(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$oC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.be(i.indexedDB)
i=$.kt()
i=i==null?null:A.jq(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bn(i,t.b3),$async$oC)
case 3:l=b
p=5
s=8
return A.a(A.GT(m.open("drift_mock_db"),t.m),$async$oC)
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
return A.f($async$oC,r)},
A4(a){return A.Lg(a)},
Lg(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$A4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.be(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cX(new A.A5(j,m))
s=7
return A.a(A.GS(m,t.m),$async$A4)
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
return A.f($async$A4,r)},
hV(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$hV=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.hY()
if(h==null){q=B.p
s=1
break}j=t.m
s=3
return A.a(A.a5(h.getDirectory(),j),$async$hV)
case 3:m=b
p=5
s=8
return A.a(A.a5(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$hV)
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
j=new A.cd(A.bY(A.CV(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$hV)
case 14:if(!b){s=13
break}k=j.gn()
if(J.w(k.kind,"directory"))J.aL(l,k.name)
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
GS(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bm(a,"success",new A.pI(r,a,b),!1,q)
A.bm(a,"error",new A.pJ(r,a),!1,q)
return s},
GT(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bm(a,"success",new A.pM(r,a,b),!1,q)
A.bm(a,"error",new A.pN(r,a),!1,q)
A.bm(a,"blocked",new A.pO(r,a),!1,q)
return s},
A5:function A5(a,b){this.a=a
this.b=b},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function pJ(a,b){this.a=a
this.b=b},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(a,b){this.a=a
this.b=b},
pO:function pO(a,b){this.a=a
this.b=b},
uN:function uN(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
fT:function fT(a){this.a=a},
ds:function ds(a){this.a=a},
K_(a){var s=a.gmW()
return new A.eV(new A.zQ(),s,A.n(s).i("eV<aa.T,M>"))},
DW(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hm(a,r,new A.jZ(),new A.jZ(),new A.jZ(),s)},
IU(a,b,c){var s=t.S
s=new A.hk(c,A.l([],t.fV),a.a,new A.aH(new A.t($.C,t.D),t.h),A.u(s,t.br),A.u(s,t.m))
s.oJ(a)
s.oO(a,b,c)
return s},
EC(a){var s
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
d=$.kt()
d=d==null?null:A.jq(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bn(d,t.b3),$async$e6)
case 7:j=a1
d=t.m
s=8
return A.a(A.a5(b.getDirectory(),d),$async$e6)
case 8:m=a1
s=9
return A.a(A.a5(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e6)
case 9:l=a1
s=10
return A.a(A.ki(l),$async$e6)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.Be(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a5(A.be(e),t.X),$async$e6)
case 13:q=B.aB
n=[1]
s=5
break
case 12:g=i
q=new A.jU(!0,g)
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
return A.a(A.B7(m,"_drift_feature_detection"),$async$e6)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e6,r)},
ki(a){return A.KQ(a)},
KQ(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$ki=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$ki)
case 7:j=c
s=8
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$ki)
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
return A.a(A.a5(a.createSyncAccessHandle(),t.m),$async$ki)
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
return A.f($async$ki,r)},
zQ:function zQ(){},
jZ:function jZ(){this.a=null},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
xS:function xS(a){this.a=a},
xW:function xW(a,b){this.a=a
this.b=b},
xT:function xT(a,b){this.a=a
this.b=b},
xU:function xU(a){this.a=a},
xV:function xV(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
xC:function xC(a){this.a=a},
xH:function xH(a,b){this.a=a
this.b=b},
xK:function xK(a,b,c){this.a=a
this.b=b
this.c=c},
xE:function xE(a,b){this.a=a
this.b=b},
xD:function xD(a,b){this.a=a
this.b=b},
xJ:function xJ(a,b){this.a=a
this.b=b},
xI:function xI(a,b){this.a=a
this.b=b},
xM:function xM(a,b){this.a=a
this.b=b},
xL:function xL(a,b){this.a=a
this.b=b},
xF:function xF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xG:function xG(a,b){this.a=a
this.b=b},
xB:function xB(a){this.a=a},
l8:function l8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
qI:function qI(a){this.a=a},
qH:function qH(a){this.a=a},
qG:function qG(a,b){this.a=a
this.b=b},
x3:function x3(a,b,c,d,e,f){var _=this
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
x4:function x4(a,b){this.a=a
this.b=b},
x5:function x5(a,b){this.a=a
this.b=b},
x6:function x6(a){this.a=a},
IB(){var s=v.G
if(A.Hp(s,"DedicatedWorkerGlobalScope"))return new A.nD(s,new A.nE(s.location.href))
else return new A.o7(s,new A.nE(s.location.href))},
ka:function ka(){},
nD:function nD(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
z5:function z5(a){this.a=a},
z6:function z6(a,b,c){this.a=a
this.b=b
this.c=c},
z4:function z4(a){this.a=a},
z2:function z2(a){this.a=a},
z3:function z3(a){this.a=a},
nE:function nE(a){this.a=a},
y6:function y6(a){this.a=a},
mL:function mL(a,b,c){this.c=a
this.a=b
this.b=c},
w_:function w_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
ha:function ha(){},
nN:function nN(){},
cw:function cw(a,b){this.a=a
this.b=b},
bm(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.F2(new A.y9(c),t.m)
s=s==null?null:A.cX(s)}s=new A.jH(a,b,s,!1,e.i("jH<0>"))
s.jI()
return s},
F2(a,b){var s=$.C
if(s===B.i)return a
return s.hP(a,b)},
B3:function B3(a,b){this.a=a
this.$ti=b},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jH:function jH(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
y9:function y9(a){this.a=a},
ya:function ya(a){this.a=a},
FJ(a){return v.mangledGlobalNames[a]},
Fx(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Hs(a,b){return b in a},
Be(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
LJ(a,b,c,d){var s,r,q,p,o,n=A.u(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aL(p,q)}return n},
Bc(a){var s=J.E(a.a)
if(new A.cU(s,a.b,a.$ti.i("cU<1>")).k())return s.gn()
return null},
A1(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.I(a)
a[r]=s&255
b=s/256|0;--r}},
Mj(a){return a},
FH(a){if(a instanceof A.du)return a
return new A.du(a)},
Ml(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.D(p)
if(q instanceof A.h_){s=q
throw A.b(A.Ig("Invalid "+a+": "+s.a,s.b,s.gfP()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gkn(),r.gfP(),r.gar()))}else throw p}},
hT(){var s,r,q,p=$.Gk(),o=$.Gd()+1
$.K5=o
s=B.a.iq(B.c.kF(o,36),8,"0")
r=J.D3(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cI(36)]
return B.a.A(s+B.b.ef(r),0,15)},
oH(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.cM)throw q
else{s=r
r=A.jg("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
Ab(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.n
try{s=B.h.av(a,null)
if(t.f.b(s)){q=A.ba(s,t.N,t.X)
return q}return B.n}catch(p){r=A.D(p)
q=A.jg("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Ff(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.be
try{s=B.h.av(a,null)
if(t.j.b(s)){q=J.oO(s,t.N)
q=q.fD(q)
return q}return B.be}catch(p){r=A.D(p)
q=A.jg("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Fe(a){var s,r,q,p,o=null
if(a==null)return B.p
A.G(a)
if(a.length===0)return B.p
s=B.h.av(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.bN(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.v(A.a8("dirty-field member is "+J.bN(p).l(0)+", expected String",o,o)))}return r},
f6(a){var s,r=J.L(a)
if(r.gE(a))return null
s=J.ci(r.gG(a).gb3())
if(A.ax(s))return s
if(typeof s=="string")return A.j1(s,null)
return null},
Mf(a,b,c){var s=A.y(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.y(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.y(c,"'","\\'")+"'")+")"},
Fl(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.dx(B.x.xt(r*J.Gs(d.$1(o),0.5,1.5)),0,0)},
M1(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.c4)
s=a.h(0,"type")
if(!J.w(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ak(r)!==32)throw A.b(B.c3)
q=new Uint8Array(32)
for(p=J.L(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.ax(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.Cz(q)
p=$.AS()
if($.kp()!==B.O)A.v(A.x("BigEndian systems are unsupported"))
return new A.oS(new A.l4(12,32,m),new A.ja(new A.mw(A.Cz(q)),m),p)},
Fh(a){var s,r=A.u(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.dp(a.c))
r.j(0,"local",A.dp(a.d))
r.j(0,"remote",A.dp(a.e))
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
if(s!=null)r.j(0,"resolved",A.dp(s))
return r},
Fj(a){var s,r=A.u(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.dp(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.dp(s))
return r},
LY(){var s=A.IB(),r=t.cj
new A.x3(s,B.bL,A.l([],t.az),A.u(t.S,t.lp),new A.iR(A.Bi(r)),new A.iR(A.Bi(r))).ed()},
Fd(){var s,r,q,p,o=null
try{o=A.BG()}catch(s){if(t.mA.b(A.D(s))){r=$.zO
if(r!=null)return r
throw s}else throw s}if(J.w(o,$.Ey)){r=$.zO
r.toString
return r}$.Ey=o
if($.Cm()===$.kr())r=$.zO=o.bt(".").l(0)
else{q=o.kE()
p=q.length-1
r=$.zO=p===0?q:B.a.A(q,0,p)}return r},
Fp(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Fg(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Fp(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
LS(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gG(0)
for(r=A.cu(a,1,null,a.$ti.i("V.E")),q=r.$ti,r=new A.ar(r,r.gm(0),q.i("ar<V.E>")),q=q.i("V.E");r.k();){p=r.d
if(!J.w(p==null?q.a(p):p,s))return!1}return!0},
M7(a,b){var s=B.b.bO(a,null)
if(s<0)throw A.b(A.O(A.r(a)+" contains no null elements.",null))
a[s]=b},
FB(a,b){var s=B.b.bO(a,b)
if(s<0)throw A.b(A.O(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Lu(a,b){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Al(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.ca(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bO(a,b)
while(r!==-1){q=r===0?0:B.a.ii(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.ca(a,b,r+1)}return null},
C9(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c7(A.dW(r.b,p.sqlite3_errmsg(q),null),A.dW(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
AN(a,b,c,d,e){throw A.b(A.C9(a.a,a.b,b,c,d,e))},
CD(a){if(a.Z(0,$.FM())<0||a.Z(0,$.FL())>0)throw A.b(A.CS("BigInt value exceeds the range of 64 bits"))
return a},
I5(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.an(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dW(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.DL(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
CZ(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bs("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cI(61)))
return s.charCodeAt(0)==0?s:s},
vt(a){var s=0,r=A.h(t.lo),q
var $async$vt=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(a.arrayBuffer(),t.a),$async$vt)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vt,r)}},B={}
var w=[A,J,B]
var $={}
A.Bg.prototype={}
J.lx.prototype={
R(a,b){return a===b},
gJ(a){return A.eB(a)},
l(a){return"Instance of '"+A.mb(a)+"'"},
gal(a){return A.bK(A.C1(this))}}
J.lz.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gal(a){return A.bK(t.y)},
$iah:1,
$iQ:1}
J.iy.prototype={
R(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gal(a){return A.bK(t.P)},
$iah:1,
$iW:1}
J.aE.prototype={$iM:1}
J.dG.prototype={
gJ(a){return 0},
gal(a){return B.dx},
l(a){return String(a)}}
J.m9.prototype={}
J.dU.prototype={}
J.bQ.prototype={
l(a){var s=a[$.FP()]
if(s==null)s=a[$.fa()]
if(s==null)return this.ox(a)
return"JavaScript function for "+J.a_(s)}}
J.bq.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fy.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.B.prototype={
hQ(a,b){return new A.bO(a,A.Z(a).i("@<1>").U(b).i("bO<1,2>"))},
u(a,b){a.$flags&1&&A.I(a,29)
a.push(b)},
iy(a,b){var s
a.$flags&1&&A.I(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.vs(b,null))
return a.splice(b,1)[0]},
aE(a,b,c){var s
a.$flags&1&&A.I(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.vs(b,null))
a.splice(b,0,c)},
kf(a,b,c){var s,r
a.$flags&1&&A.I(a,"insertAll",2)
A.Dr(b,0,a.length,"index")
if(!t.O.b(c))c=J.GC(c)
s=J.ak(c)
a.length=a.length+s
r=b+s
this.ah(a,r,a.length,a,b)
this.au(a,b,r,c)},
ky(a){a.$flags&1&&A.I(a,"removeLast",1)
if(a.length===0)throw A.b(A.Ah(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.I(a,"remove",1)
for(s=0;s<a.length;++s)if(J.w(a[s],b)){a.splice(s,1)
return!0}return!1},
tt(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.ay(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dv(a,b){return new A.aj(a,b,A.Z(a).i("aj<1>"))},
C(a,b){var s
a.$flags&1&&A.I(a,"addAll",2)
if(Array.isArray(b)){this.oV(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
oV(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.ay(a))
for(s=0;s<r;++s)a.push(b[s])},
a9(a){a.$flags&1&&A.I(a,"clear","clear")
a.length=0},
ce(a,b,c){return new A.X(a,b,A.Z(a).i("@<1>").U(c).i("X<1,2>"))},
B(a,b){var s,r=A.ae(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ef(a){return this.B(a,"")},
cL(a,b){return A.cu(a,0,A.bY(b,"count",t.S),A.Z(a).c)},
bk(a,b){return A.cu(a,b,null,A.Z(a).c)},
fa(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.ay(a))}if(c!=null)return c.$0()
throw A.b(A.aD())},
mT(a,b){return this.fa(a,b,null)},
a6(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.as(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.as(c,b,a.length,"end",null))
if(b===c)return A.l([],A.Z(a))
return A.l(a.slice(b,c),A.Z(a))},
b6(a,b){return this.T(a,b,null)},
fL(a,b,c){A.bc(b,c,a.length)
return A.cu(a,b,c,A.Z(a).c)},
gG(a){if(a.length>0)return a[0]
throw A.b(A.aD())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aD())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aD())
throw A.b(A.iv())},
kz(a,b,c){a.$flags&1&&A.I(a,18)
A.bc(b,c,a.length)
a.splice(b,c-b)},
ah(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.I(a,5)
A.bc(b,c,a.length)
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.oR(d,e).cM(0,!1)
q=0}p=J.L(r)
if(q+s>p.gm(r))throw A.b(A.D1())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
au(a,b,c,d){return this.ah(a,b,c,d,0)},
bM(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.ay(a))}return!1},
cE(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.ay(a))}return!0},
ck(a,b){var s,r,q,p,o
a.$flags&2&&A.I(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.K9()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.Z(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e7(b,2))
if(p>0)this.tu(a,p)},
aG(a){return this.ck(a,null)},
tu(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bO(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.w(a[s],b))return s
return-1},
dj(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.w(a[s],b))return s
return-1},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.w(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gV(a){return a.length!==0},
l(a){return A.rP(a,"[","]")},
cM(a,b){var s=A.l(a.slice(0),A.Z(a))
return s},
eu(a){return this.cM(a,!0)},
gt(a){return new J.fe(a,a.length,A.Z(a).i("fe<1>"))},
gJ(a){return A.eB(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.I(a,"set length","change the length of")
if(b<0)throw A.b(A.as(b,0,null,"newLength",null))
if(b>a.length)A.Z(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.Ah(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
if(!(b>=0&&b<a.length))throw A.b(A.Ah(a,b))
a[b]=c},
kI(a,b){return new A.bG(a,b.i("bG<0>"))},
mX(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gal(a){return A.bK(A.Z(a))},
$ib9:1,
$iJ:1,
$io:1,
$ip:1}
J.ly.prototype={
xE(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mb(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.rQ.prototype={}
J.fe.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.er.prototype={
Z(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkk(b)
if(this.gkk(a)===s)return 0
if(this.gkk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkk(a){return a===0?1/a<0:a<0},
iA(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
uH(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
vS(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
xt(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bN(a,b,c){if(this.Z(b,c)>0)throw A.b(A.f4(b))
if(this.Z(a,b)<0)return b
if(this.Z(a,c)>0)return c
return a},
kF(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.as(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.v(A.Y("Unexpected toString result: "+s))
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
fI(a,b){return a+b},
ak(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iS(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mg(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.mg(a,b)},
mg(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bC(a,b){if(b<0)throw A.b(A.f4(b))
return b>31?0:a<<b>>>0},
tP(a,b){return b>31?0:a<<b>>>0},
dC(a,b){var s
if(b<0)throw A.b(A.f4(b))
if(a>0)s=this.jG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ae(a,b){var s
if(a>0)s=this.jG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
md(a,b){if(0>b)throw A.b(A.f4(b))
return this.jG(a,b)},
jG(a,b){return b>31?0:a>>>b},
o9(a,b){return a>b},
gal(a){return A.bK(t.o)},
$iau:1,
$iab:1,
$iaV:1}
J.ix.prototype={
gmA(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gal(a){return A.bK(t.S)},
$iah:1,
$ii:1}
J.lA.prototype={
gal(a){return A.bK(t.W)},
$iah:1}
J.dE.prototype={
jP(a,b,c){var s=b.length
if(c>s)throw A.b(A.as(c,0,s,null,null))
return new A.ob(b,a,c)},
hL(a,b){return this.jP(a,b,0)},
ej(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.as(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.h4(c,a)},
c7(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ad(a,r-s)},
kB(a,b,c){A.Dr(0,0,a.length,"startIndex")
return A.Me(a,b,c,0)},
cQ(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.es){s=b.e
s=!(s==null?b.e=b.pv():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.pJ(a,b)}},
dq(a,b,c,d){var s=A.bc(b,c,a.length)
return A.FF(a,b,s,d)},
pJ(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.AV(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
o=p.gP()
n=p.gN()
q=n-o
if(q===0&&r===o)continue
m.push(this.A(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ad(a,r))
return m},
ac(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.as(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.ac(a,b,0)},
A(a,b,c){return a.substring(b,A.bc(b,c,a.length))},
ad(a,b){return this.A(a,b,null)},
ci(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Ht(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.D7(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
xC(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.D7(r,s))},
bi(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bN)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iq(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bi(c,s)+a},
wV(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bi(" ",s)},
ca(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.as(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bO(a,b){return this.ca(a,b,0)},
ii(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.as(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dj(a,b){return this.ii(a,b,null)},
F(a,b){return A.Mb(a,b,0)},
Z(a,b){var s
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
gal(a){return A.bK(t.N)},
gm(a){return a.length},
$ib9:1,
$iah:1,
$iau:1,
$ik:1}
A.xY.prototype={
u(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.L(b),i=j.gm(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.c.ae(o,1)
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
r.$flags&2&&A.I(r)
r[q+m]=l}k.a=s},
kD(){var s,r=this
if(r.a===0)return $.oL()
s=J.bM(B.f.ga8(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.oL()
return s},
gm(a){return this.a}}
A.xy.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b2(b))
this.b.push(s)
this.a=this.a+s.length},
kD(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.oL()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.a9(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.q)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.au(q,p,m,n)}l.a=0
B.b.a9(s)
return q},
gm(a){return this.a}}
A.dX.prototype={
gt(a){return new A.kS(J.E(this.gbc()),A.n(this).i("kS<1,2>"))},
gm(a){return J.ak(this.gbc())},
gE(a){return J.by(this.gbc())},
gV(a){return J.ea(this.gbc())},
bk(a,b){var s=A.n(this)
return A.fg(J.oR(this.gbc(),b),s.c,s.y[1])},
cL(a,b){var s=A.n(this)
return A.fg(J.AY(this.gbc(),b),s.c,s.y[1])},
a6(a,b){return A.n(this).y[1].a(J.oP(this.gbc(),b))},
gG(a){return A.n(this).y[1].a(J.ci(this.gbc()))},
ga_(a){return A.n(this).y[1].a(J.oQ(this.gbc()))},
gap(a){return A.n(this).y[1].a(J.AX(this.gbc()))},
F(a,b){return J.AW(this.gbc(),b)},
l(a){return J.a_(this.gbc())}}
A.kS.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ee.prototype={
gbc(){return this.a}}
A.jE.prototype={$iJ:1}
A.jB.prototype={
h(a,b){return this.$ti.y[1].a(J.S(this.a,b))},
j(a,b,c){J.bZ(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.Gx(this.a,b)},
u(a,b){J.aL(this.a,this.$ti.c.a(b))},
ck(a,b){var s=b==null?null:new A.xz(this,b)
J.Cw(this.a,s)},
fL(a,b,c){var s=this.$ti
return A.fg(J.Gu(this.a,b,c),s.c,s.y[1])},
ah(a,b,c,d,e){var s=this.$ti
J.Gy(this.a,b,c,A.fg(d,s.y[1],s.c),e)},
au(a,b,c,d){return this.ah(0,b,c,d,0)},
$iJ:1,
$ip:1}
A.xz.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bO.prototype={
hQ(a,b){return new A.bO(this.a,this.$ti.i("@<1>").U(b).i("bO<1,2>"))},
gbc(){return this.a}}
A.ef.prototype={
c4(a,b,c){return new A.ef(this.a,this.$ti.i("@<1,2>").U(b).U(c).i("ef<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a1(a,b){this.a.a1(0,new A.ph(this,b))},
gK(){var s=this.$ti
return A.fg(this.a.gK(),s.c,s.y[2])},
gb3(){var s=this.$ti
return A.fg(this.a.gb3(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gV(a){var s=this.a
return s.gV(s)},
gaa(){var s=this.a.gaa()
return s.ce(s,new A.pg(this),this.$ti.i("R<3,4>"))}}
A.ph.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pg.prototype={
$1(a){var s=this.a.$ti
return new A.R(s.y[2].a(a.a),s.y[3].a(a.b),s.i("R<3,4>"))},
$S(){return this.a.$ti.i("R<3,4>(R<1,2>)")}}
A.dF.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mk.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cj.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.Az.prototype={
$0(){return A.bp(null,t.H)},
$S:5}
A.vF.prototype={}
A.J.prototype={}
A.V.prototype={
gt(a){var s=this
return new A.ar(s,s.gm(s),A.n(s).i("ar<V.E>"))},
gE(a){return this.gm(this)===0},
gG(a){if(this.gm(this)===0)throw A.b(A.aD())
return this.a6(0,0)},
ga_(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
return s.a6(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
if(s.gm(s)>1)throw A.b(A.iv())
return s.a6(0,0)},
F(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.w(r.a6(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.ay(r))}return!1},
cE(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a6(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.ay(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a6(0,0))
if(o!==p.gm(p))throw A.b(A.ay(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a6(0,q))
if(o!==p.gm(p))throw A.b(A.ay(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a6(0,q))
if(o!==p.gm(p))throw A.b(A.ay(p))}return r.charCodeAt(0)==0?r:r}},
ef(a){return this.B(0,"")},
dv(a,b){return this.os(0,b)},
ce(a,b,c){return new A.X(this,b,A.n(this).i("@<V.E>").U(c).i("X<1,2>"))},
xi(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aD())
s=q.a6(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a6(0,r))
if(p!==q.gm(q))throw A.b(A.ay(q))}return s},
bk(a,b){return A.cu(this,b,null,A.n(this).i("V.E"))},
cL(a,b){return A.cu(this,0,A.bY(b,"count",t.S),A.n(this).i("V.E"))}}
A.ct.prototype={
iT(a,b,c,d){var s,r=this.b
A.bb(r,"start")
s=this.c
if(s!=null){A.bb(s,"end")
if(r>s)throw A.b(A.as(r,0,s,"start",null))}},
gpT(){var s=J.ak(this.a),r=this.c
if(r==null||r>s)return s
return r},
gtS(){var s=J.ak(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ak(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a6(a,b){var s=this,r=s.gtS()+b
if(b<0||r>=s.gpT())throw A.b(A.lu(b,s.gm(0),s,null,"index"))
return J.oP(s.a,r)},
bk(a,b){var s,r,q=this
A.bb(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.en(q.$ti.i("en<1>"))
return A.cu(q.a,s,r,q.$ti.c)},
cL(a,b){var s,r,q,p=this
A.bb(b,"count")
s=p.c
r=p.b
if(s==null)return A.cu(p.a,r,B.c.fI(r,b),p.$ti.c)
else{q=B.c.fI(r,b)
if(s<q)return p
return A.cu(p.a,r,q,p.$ti.c)}},
cM(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.L(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.D4(0,n):J.Bd(0,n)}r=A.ae(s,m.a6(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a6(n,o+q)
if(m.gm(n)<l)throw A.b(A.ay(p))}return r},
eu(a){return this.cM(0,!0)}}
A.ar.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.L(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.ay(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a6(q,s);++r.c
return!0}}
A.cl.prototype={
gt(a){return new A.lM(J.E(this.a),this.b,A.n(this).i("lM<1,2>"))},
gm(a){return J.ak(this.a)},
gE(a){return J.by(this.a)},
gG(a){return this.b.$1(J.ci(this.a))},
ga_(a){return this.b.$1(J.oQ(this.a))},
gap(a){return this.b.$1(J.AX(this.a))},
a6(a,b){return this.b.$1(J.oP(this.a,b))}}
A.em.prototype={$iJ:1}
A.lM.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.ak(this.a)},
a6(a,b){return this.b.$1(J.oP(this.a,b))}}
A.aj.prototype={
gt(a){return new A.cU(J.E(this.a),this.b,this.$ti.i("cU<1>"))},
ce(a,b,c){return new A.cl(this,b,this.$ti.i("@<1>").U(c).i("cl<1,2>"))}}
A.cU.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.ik.prototype={
gt(a){return new A.lh(J.E(this.a),this.b,B.aQ,this.$ti.i("lh<1,2>"))}}
A.lh.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eI.prototype={
gt(a){var s=this.a
return new A.mN(s.gt(s),this.b,A.n(this).i("mN<1>"))}}
A.ih.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.o9(r,s))return s
return r},
$iJ:1}
A.mN.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.da.prototype={
bk(a,b){A.kz(b,"count")
A.bb(b,"count")
return new A.da(this.a,this.b+b,A.n(this).i("da<1>"))},
gt(a){var s=this.a
return new A.mz(s.gt(s),this.b,A.n(this).i("mz<1>"))}}
A.fq.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bk(a,b){A.kz(b,"count")
A.bb(b,"count")
return new A.fq(this.a,this.b+b,this.$ti)},
$iJ:1}
A.mz.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.en.prototype={
gt(a){return B.aQ},
gE(a){return!0},
gm(a){return 0},
gG(a){throw A.b(A.aD())},
ga_(a){throw A.b(A.aD())},
gap(a){throw A.b(A.aD())},
a6(a,b){throw A.b(A.as(b,0,0,"index",null))},
F(a,b){return!1},
cE(a,b){return!0},
dv(a,b){return this},
ce(a,b,c){return new A.en(c.i("en<0>"))},
bk(a,b){A.bb(b,"count")
return this},
cL(a,b){A.bb(b,"count")
return this},
cM(a,b){var s=J.Bd(0,this.$ti.c)
return s},
fD(a){return A.lK(this.$ti.c)}}
A.lf.prototype={
k(){return!1},
gn(){throw A.b(A.aD())}}
A.bG.prototype={
gt(a){return new A.nc(J.E(this.a),this.$ti.i("nc<1>"))}}
A.nc.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.io.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
u(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.mZ.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
ck(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ah(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
au(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.hb.prototype={}
A.bU.prototype={
gm(a){return J.ak(this.a)},
a6(a,b){var s=this.a,r=J.L(s)
return r.a6(s,r.gm(s)-1-b)}}
A.jk.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
R(a,b){if(b==null)return!1
return b instanceof A.jk&&this.a===b.a}}
A.kb.prototype={}
A.a4.prototype={$r:"+(1,2)",$s:1}
A.jU.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.jV.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hz.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.nZ.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.eX.prototype={$r:"+(1,2,3)",$s:6}
A.eY.prototype={$r:"+(1,2,3,4)",$s:7}
A.o_.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.ic.prototype={}
A.fm.prototype={
c4(a,b,c){var s=A.n(this)
return A.Db(this,s.c,s.y[1],b,c)},
gE(a){return this.gm(this)===0},
gV(a){return this.gm(this)!==0},
l(a){return A.tK(this)},
j(a,b,c){A.GW()},
gaa(){return new A.hE(this.vE(),A.n(this).i("hE<R<1,2>>"))},
vE(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gaa(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gK(),o=o.gt(o),n=A.n(s).i("R<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.R(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aV(a,b,c,d){var s=A.u(c,d)
this.a1(0,new A.q_(this,b,s))
return s},
$iF:1}
A.q_.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aW.prototype={
gm(a){return this.b.length},
glK(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a1(a,b){var s,r,q=this.glK(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.eU(this.glK(),this.$ti.i("eU<1>"))},
gb3(){return new A.eU(this.b,this.$ti.i("eU<2>"))}}
A.eU.prototype={
gm(a){return this.a.length},
gE(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hu(s,s.length,this.$ti.i("hu<1>"))}}
A.hu.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iq.prototype={
dL(){var s=this,r=s.$map
if(r==null){r=new A.iz(s.$ti.i("iz<1,2>"))
A.Fm(s.a,r)
s.$map=r}return r},
I(a){return this.dL().I(a)},
h(a,b){return this.dL().h(0,b)},
a1(a,b){this.dL().a1(0,b)},
gK(){var s=this.dL()
return new A.T(s,A.n(s).i("T<1>"))},
gb3(){var s=this.dL()
return new A.ao(s,A.n(s).i("ao<2>"))},
gm(a){return this.dL().a}}
A.id.prototype={
u(a,b){A.GX()}}
A.dw.prototype={
gm(a){return this.b},
gE(a){return this.b===0},
gV(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hu(s,s.length,r.$ti.i("hu<1>"))},
F(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.rK.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.iu&&this.a.R(0,b.a)&&A.Cc(this)===A.Cc(b)},
gJ(a){return A.c5(this.a,A.Cc(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bK(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iu.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.LR(A.oD(this.a),this.$ti)}}
A.uP.prototype={
$0(){return B.x.vS(1000*this.a.now())},
$S:10}
A.j7.prototype={}
A.wp.prototype={
bQ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.iY.prototype={
l(a){return"Null check operator used on a null value"}}
A.lB.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.mY.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.m0.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iH:1}
A.ij.prototype={}
A.jX.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaF:1}
A.eh.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.FK(r==null?"unknown":r)+"'"},
gal(a){var s=A.oD(this)
return A.bK(s==null?A.bx(this):s)},
gyJ(){return this},
$C:"$1",
$R:1,
$D:null}
A.pm.prototype={$C:"$0",$R:0}
A.pn.prototype={$C:"$2",$R:2}
A.wf.prototype={}
A.vQ.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.FK(s)+"'"}}
A.i6.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.i6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kl(this.a)^A.eB(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mb(this.a)+"'")}}
A.ms.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bC.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gV(a){return this.a!==0},
gK(){return new A.T(this,A.n(this).i("T<1>"))},
gb3(){return new A.ao(this,A.n(this).i("ao<2>"))},
gaa(){return new A.aN(this,A.n(this).i("aN<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mZ(a)},
mZ(a){var s=this.d
if(s==null)return!1
return this.di(this.lE(s,a),a)>=0},
C(a,b){b.a1(0,new A.rR(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.n_(b)},
n_(a){var s,r,q=this.d
if(q==null)return null
s=this.lE(q,a)
r=this.di(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.l5(s==null?q.b=q.jt():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.l5(r==null?q.c=q.jt():r,b,c)}else q.n1(b,c)},
n1(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jt()
s=p.ee(a)
r=o[s]
if(r==null)o[s]=[p.iV(a,b)]
else{q=p.di(r,a)
if(q>=0)r[q].b=b
else r.push(p.iV(a,b))}},
kv(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.m4(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.m4(s.c,b)
else return s.n0(b)},
n0(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ee(a)
r=n[s]
q=o.di(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mm(p)
if(r.length===0)delete n[s]
return p.b},
a9(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iU()}},
a1(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ay(s))
r=r.c}},
l5(a,b,c){var s=a[b]
if(s==null)a[b]=this.iV(b,c)
else s.b=c},
m4(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mm(s)
delete a[b]
return s.b},
iU(){this.r=this.r+1&1073741823},
iV(a,b){var s,r=this,q=new A.tt(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iU()
return q},
mm(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iU()},
ee(a){return J.a7(a)&1073741823},
lE(a,b){return a[this.ee(b)]},
di(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.w(a[r].a,b))return r
return-1},
l(a){return A.tK(this)},
jt(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.rR.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.tt.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bD(s,s.r,s.e,this.$ti.i("bD<1>"))},
F(a,b){return this.a.I(b)}}
A.bD.prototype={
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
gE(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aS(s,s.r,s.e,this.$ti.i("aS<1>"))}}
A.aS.prototype={
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
gE(a){return this.a.a===0},
gt(a){var s=this.a
return new A.lJ(s,s.r,s.e,this.$ti.i("lJ<1,2>"))}}
A.lJ.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.R(s.a,s.b,r.$ti.i("R<1,2>"))
r.c=s.c
return!0}}}
A.iA.prototype={
ee(a){return A.kl(a)&1073741823},
di(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iz.prototype={
ee(a){return A.Lk(a)&1073741823},
di(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.w(a[r].a,b))return r
return-1}}
A.At.prototype={
$1(a){return this.a(a)},
$S:32}
A.Au.prototype={
$2(a,b){return this.a(a,b)},
$S:187}
A.Av.prototype={
$1(a){return this.a(a)},
$S:58}
A.hy.prototype={
gal(a){return A.bK(this.lF())},
lF(){return A.LB(this.$r,this.h1())},
l(a){return this.mk(!1)},
mk(a){var s,r,q,p,o,n=this.q0(),m=this.h1(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Dm(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
q0(){var s,r=this.$s
while($.yT.length<=r)$.yT.push(null)
s=$.yT[r]
if(s==null){s=this.pu()
$.yT[r]=s}return s},
pu(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.D3(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.d2(j,k)}}
A.nW.prototype={
h1(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.nW&&this.$s===b.$s&&J.w(this.a,b.a)&&J.w(this.b,b.b)},
gJ(a){return A.c5(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.nX.prototype={
h1(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.nX&&s.$s===b.$s&&J.w(s.a,b.a)&&J.w(s.b,b.b)&&J.w(s.c,b.c)},
gJ(a){var s=this
return A.c5(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.nY.prototype={
h1(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.nY&&this.$s===b.$s&&A.Jf(this.a,b.a)},
gJ(a){return A.c5(this.$s,A.ua(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.es.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glQ(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Bf(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
grs(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Bf(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pv(){var s,r=this.a
if(!B.a.F(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
eb(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hx(s)},
jP(a,b,c){var s=b.length
if(c>s)throw A.b(A.as(c,0,s,null,null))
return new A.nn(this,b,c)},
hL(a,b){return this.jP(0,b,0)},
pY(a,b){var s,r=this.glQ()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hx(s)},
pX(a,b){var s,r=this.grs()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hx(s)},
ej(a,b,c){if(c<0||c>b.length)throw A.b(A.as(c,0,b.length,null,null))
return this.pX(b,c)}}
A.hx.prototype={
gP(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$iew:1,
$iml:1}
A.nn.prototype={
gt(a){return new A.no(this.a,this.b,this.c)}}
A.no.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pY(l,s)
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
A.h4.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.vs(b,null))
return this.c},
$iew:1,
gP(){return this.a}}
A.ob.prototype={
gt(a){return new A.zd(this.a,this.b,this.c)},
gG(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h4(r,s)
throw A.b(A.aD())}}
A.zd.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.h4(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.nw.prototype={
bb(){var s=this.b
if(s===this)throw A.b(new A.dF("Local '"+this.a+"' has not been initialized."))
return s},
bw(){var s=this.b
if(s===this)throw A.b(A.Da(this.a))
return s},
smS(a){var s=this
if(s.b!==s)throw A.b(new A.dF("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fF.prototype={
gal(a){return B.dq},
hN(a,b,c){A.hM(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mx(a){return this.hN(a,0,null)},
mw(a,b,c){A.hM(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hM(a,b,c){A.hM(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mv(a){return this.hM(a,0,null)},
$iah:1,
$ied:1}
A.fE.prototype={$ifE:1}
A.iT.prototype={
ga8(a){if(((a.$flags|0)&2)!==0)return new A.oj(a.buffer)
else return a.buffer},
rg(a,b,c,d){var s=A.as(b,0,c,d,null)
throw A.b(s)},
lg(a,b,c,d){if(b>>>0!==b||b>c)this.rg(a,b,c,d)}}
A.oj.prototype={
hN(a,b,c){var s=A.bT(this.a,b,c)
s.$flags=3
return s},
mx(a){return this.hN(0,0,null)},
mw(a,b,c){var s=A.Df(this.a,b,c)
s.$flags=3
return s},
hM(a,b,c){var s=A.De(this.a,b,c)
s.$flags=3
return s},
mv(a){return this.hM(0,0,null)},
$ied:1}
A.iS.prototype={
gal(a){return B.dr},
$iah:1,
$iAZ:1}
A.fG.prototype={
gm(a){return a.length},
mb(a,b,c,d,e){var s,r,q=a.length
this.lg(a,b,q,"start")
this.lg(a,c,q,"end")
if(b>c)throw A.b(A.as(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.O(e,null))
r=d.length
if(r-e<s)throw A.b(A.x("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ib9:1,
$ibR:1}
A.dN.prototype={
h(a,b){A.dl(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
A.dl(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.dQ.b(d)){this.mb(a,b,c,d,e)
return}this.l2(a,b,c,d,e)},
au(a,b,c,d){return this.ah(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.bS.prototype={
j(a,b,c){a.$flags&2&&A.I(a)
A.dl(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.aj.b(d)){this.mb(a,b,c,d,e)
return}this.l2(a,b,c,d,e)},
au(a,b,c,d){return this.ah(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.lU.prototype={
gal(a){return B.ds},
T(a,b,c){return new Float32Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$ir5:1}
A.lV.prototype={
gal(a){return B.dt},
T(a,b,c){return new Float64Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$ir6:1}
A.lW.prototype={
gal(a){return B.du},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$irL:1}
A.lX.prototype={
gal(a){return B.dv},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$irM:1}
A.lY.prototype={
gal(a){return B.dw},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$irN:1}
A.iU.prototype={
gal(a){return B.dA},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iws:1}
A.iV.prototype={
gal(a){return B.dB},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iwt:1}
A.iW.prototype={
gal(a){return B.dC},
gm(a){return a.length},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iwu:1}
A.ex.prototype={
gal(a){return B.dD},
gm(a){return a.length},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iex:1,
$icQ:1}
A.jQ.prototype={}
A.jR.prototype={}
A.jS.prototype={}
A.jT.prototype={}
A.cp.prototype={
i(a){return A.k5(v.typeUniverse,this,a)},
U(a){return A.Eb(v.typeUniverse,this,a)}}
A.nJ.prototype={}
A.og.prototype={
l(a){return A.bv(this.a,null)}}
A.nG.prototype={
l(a){return this.a}}
A.k1.prototype={$idd:1}
A.xg.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:34}
A.xf.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:181}
A.xh.prototype={
$0(){this.a.$0()},
$S:3}
A.xi.prototype={
$0(){this.a.$0()},
$S:3}
A.k0.prototype={
oR(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e7(new A.zg(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oS(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e7(new A.zf(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
D(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idc:1}
A.zg.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.zf.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iS(s,o)}q.c=p
r.d.$1(q)},
$S:3}
A.ju.prototype={
aD(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aM(a)
else{s=r.a
if(r.$ti.i("z<1>").b(a))s.lf(a)
else s.cU(a)}},
c6(a,b){var s
if(b==null)b=A.i3(a)
s=this.a
if(this.b)s.am(new A.al(a,b))
else s.cm(new A.al(a,b))},
aT(a){return this.c6(a,null)},
$iia:1}
A.zH.prototype={
$1(a){return this.a.$2(0,a)},
$S:26}
A.zI.prototype={
$2(a,b){this.a.$2(1,new A.ij(a,b))},
$S:190}
A.A_.prototype={
$2(a,b){this.a(a,b)},
$S:87}
A.zF.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.A()
s=q.b
if((s&1)!==0?(q.gaO().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.zG.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:34}
A.nq.prototype={
oN(a,b){var s=new A.xk(a)
this.a=A.vS(new A.xm(this,a),new A.xn(s),new A.xo(this,s),!1,b)}}
A.xk.prototype={
$0(){A.ko(new A.xl(this.a))},
$S:3}
A.xl.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.xn.prototype={
$0(){this.a.$0()},
$S:0}
A.xo.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.xm.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.A()
if((r.b&4)===0){s.c=new A.t($.C,t._)
if(s.b){s.b=!1
A.ko(new A.xj(this.b))}return s.c}},
$S:139}
A.xj.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jM.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.od.prototype={
gn(){return this.b},
tv(a,b){var s,r,q
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
o.d=null}q=o.tv(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.E5
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.E5
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.x("sync*"))}return!1},
yK(a){var s,r,q=this
if(a instanceof A.hE){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hE.prototype={
gt(a){return new A.od(this.a(),this.$ti.i("od<1>"))}}
A.al.prototype={
l(a){return A.r(this.a)},
$iad:1,
gcl(){return this.b}}
A.b0.prototype={}
A.eO.prototype={
bG(){},
bH(){}}
A.jA.prototype={
gcR(){return new A.b0(this,A.n(this).i("b0<1>"))},
gih(){return(this.c&4)!==0},
gjr(){return this.c<4},
ts(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.DX(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.nu(r,a,s.c)
n=A.xv(r,b)
m=c==null?A.A0():c
l=new A.eO(j,o,n,r.bT(m,t.H),r,q|p,s.i("eO<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.oz(j.a)
return l},
lY(a){var s,r=this
A.n(r).i("eO<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.ts(a)
if((r.c&2)===0&&r.d==null)r.ph()}return null},
lZ(a){},
m_(a){},
iX(){if((this.c&4)!==0)return new A.bi("Cannot add new events after calling close")
return new A.bi("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjr())throw A.b(this.iX())
this.cv(b)},
bz(a,b){var s
if(!this.gjr())throw A.b(this.iX())
s=A.f1(a,b)
this.cw(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjr())throw A.b(q.iX())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.t($.C,t.D)
q.d7()
return r},
aI(a,b){this.cw(a,b)},
aS(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aM(null)},
ph(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aM(null)}A.oz(this.b)},
$ibB:1}
A.jv.prototype={
cv(a){var s,r
for(s=this.d,r=this.$ti.i("ca<1>");s!=null;s=s.ch)s.bY(new A.ca(a,r))},
cw(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bY(new A.hp(a,b))},
d7(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bY(B.aa)
else this.r.aM(null)}}
A.rf.prototype={
$0(){this.c.a(null)
this.b.cn(null)},
$S:0}
A.rh.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.am(new A.al(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.am(new A.al(q,r))}},
$S:13}
A.rg.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bZ(j,m.b,a)
if(J.w(k,0)){l=m.d
s=A.l([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aL(s,n)}m.c.cU(s)}}else if(J.w(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.am(new A.al(s,l))}},
$S(){return this.d.i("W(0)")}}
A.ra.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aF)")}}
A.mO.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iH:1}
A.rb.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("B<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aD(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("B<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.q)(r),++p)n.push(r[p].b)
l.a.aT(new A.j_(B.b.mT(s,A.KY()),a,q.i("j_<p<0?>,p<al?>>")))}},
$S:8}
A.j_.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcl(){var s=this.c
s=s==null?null:s.b
return s==null?A.ad.prototype.gcl.call(this):s}}
A.jK.prototype={
u8(a){this.a.bU(new A.yf(this,a),new A.yg(this,a),t.P)}}
A.yf.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.yg.prototype={
$2(a,b){this.a.c=new A.al(a,b)
this.b.$1(1)},
$S:11}
A.ye.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eP.prototype={
c6(a,b){if((this.a.a&30)!==0)throw A.b(A.x("Future already completed"))
this.am(A.f1(a,b))},
aT(a){return this.c6(a,null)},
$iia:1}
A.aH.prototype={
aD(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.aM(a)},
an(){return this.aD(null)},
am(a){this.a.cm(a)}}
A.am.prototype={
aD(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.cn(a)},
an(){return this.aD(null)},
am(a){this.a.am(a)}}
A.cb.prototype={
wK(a){if((this.c&15)!==6)return!0
return this.b.b.es(this.d,a.a,t.y,t.K)},
w5(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kC(r,n,a.b,p,o,t.l)
else q=m.es(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.D(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.t.prototype={
bU(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aA(b,"onError",u.w))}else{a=q.dn(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.EN(b,q)}s=new A.t($.C,c.i("t<0>"))
r=b==null?1:3
this.dG(new A.cb(s,r,a,b,this.$ti.i("@<1>").U(c).i("cb<1,2>")))
return s},
aj(a,b){return this.bU(a,null,b)},
mi(a,b,c){var s=new A.t($.C,c.i("t<0>"))
this.dG(new A.cb(s,19,a,b,this.$ti.i("@<1>").U(c).i("cb<1,2>")))
return s},
mB(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=A.EN(a,r)
this.dG(new A.cb(q,2,null,a,s.i("cb<1,1>")))
return q},
aZ(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=r.bT(a,t.z)
this.dG(new A.cb(q,8,a,null,s.i("cb<1,1>")))
return q},
tK(a){this.a=this.a&1|16
this.c=a},
fU(a){this.a=a.a&30|this.a&1
this.c=a.c},
dG(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dG(a)
return}s.fU(r)}s.b.cO(new A.yh(s,a))}},
lV(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lV(a)
return}n.fU(s)}m.a=n.hv(a)
n.b.cO(new A.ym(m,n))}},
eT(){var s=this.c
this.c=null
return this.hv(s)},
hv(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cn(a){var s,r=this
if(r.$ti.i("z<1>").b(a))A.yk(a,r,!0)
else{s=r.eT()
r.a=8
r.c=a
A.eS(r,s)}},
cU(a){var s=this,r=s.eT()
s.a=8
s.c=a
A.eS(s,r)},
pt(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gc8()===r.gc8())}else s=!1
if(s)return
q=p.eT()
p.fU(a)
A.eS(p,q)},
am(a){var s=this.eT()
this.tK(a)
A.eS(this,s)},
ps(a,b){this.am(new A.al(a,b))},
aM(a){if(this.$ti.i("z<1>").b(a)){this.lf(a)
return}this.lc(a)},
lc(a){this.a^=2
this.b.cO(new A.yj(this,a))},
lf(a){A.yk(a,this,!1)
return},
cm(a){this.a^=2
this.b.cO(new A.yi(this,a))},
iz(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.t($.C,r.$ti)
q.aM(r)
return q}s=new A.t($.C,r.$ti)
q.a=null
q.a=A.cP(a,new A.ys(s,a))
r.bU(new A.yt(q,r,s),new A.yu(q,s),t.P)
return s},
$iz:1}
A.yh.prototype={
$0(){A.eS(this.a,this.b)},
$S:0}
A.ym.prototype={
$0(){A.eS(this.b,this.a.a)},
$S:0}
A.yl.prototype={
$0(){A.yk(this.a.a,this.b,!0)},
$S:0}
A.yj.prototype={
$0(){this.a.cU(this.b)},
$S:0}
A.yi.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.yp.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aX(q.d,t.z)}catch(p){s=A.D(p)
r=A.ag(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.i3(q)
n=k.a
n.c=new A.al(q,o)
q=n}q.b=!0
return}if(j instanceof A.t&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.t){m=k.b.a
l=new A.t(m.b,m.$ti)
j.bU(new A.yq(l,m),new A.yr(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.yq.prototype={
$1(a){this.a.pt(this.b)},
$S:34}
A.yr.prototype={
$2(a,b){this.a.am(new A.al(a,b))},
$S:11}
A.yo.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.es(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.D(n)
r=A.ag(n)
q=s
p=r
if(p==null)p=A.i3(q)
o=this.a
o.c=new A.al(q,p)
o.b=!0}},
$S:0}
A.yn.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.wK(s)&&p.a.e!=null){p.c=p.a.w5(s)
p.b=!1}}catch(o){r=A.D(o)
q=A.ag(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.i3(p)
m=l.b
m.c=new A.al(p,n)
p=m}p.b=!0}},
$S:0}
A.ys.prototype={
$0(){var s=A.By()
this.a.am(new A.al(new A.mO("Future not completed",this.b),s))},
$S:0}
A.yt.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.D()
this.c.cU(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.yu.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.D()
this.b.am(new A.al(a,b))}},
$S:11}
A.np.prototype={}
A.aa.prototype={
ef(a){var s=new A.t($.C,t.os),r=new A.a1(""),q=this.a7(null,!0,new A.vV(s,r),s.gj3())
q.im(new A.vW(this,r,q,s))
return s},
gm(a){var s={},r=new A.t($.C,t.hy)
s.a=0
this.a7(new A.vX(s,this),!0,new A.vY(s,r),r.gj3())
return r},
gG(a){var s=new A.t($.C,A.n(this).i("t<aa.T>")),r=this.a7(null,!0,new A.vT(s),s.gj3())
r.im(new A.vU(this,r,s))
return s}}
A.vV.prototype={
$0(){var s=this.b.a
this.a.cn(s.charCodeAt(0)==0?s:s)},
$S:0}
A.vW.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.D(o)
r=A.ag(o)
q=s
p=r
n=A.kc(q,p)
if(n==null)q=new A.al(q,p)
else q=n
A.JL(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.vX.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(aa.T)")}}
A.vY.prototype={
$0(){this.b.cn(this.a.a)},
$S:0}
A.vT.prototype={
$0(){var s,r=A.By(),q=new A.bi("No element")
A.md(q,r)
s=A.kc(q,r)
if(s==null)s=new A.al(q,r)
this.a.am(s)},
$S:0}
A.vU.prototype={
$1(a){A.JM(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.jh.prototype={
a7(a,b,c,d){return this.a.a7(a,b,c,d)},
bP(a,b,c){return this.a7(a,null,b,c)},
aU(a){return this.a7(a,null,null,null)}}
A.e2.prototype={
gcR(){return new A.b7(this,A.n(this).i("b7<1>"))},
gih(){return(this.b&4)!==0},
grT(){if((this.b&8)===0)return this.a
return this.a.c},
fY(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e1(A.n(q).i("e1<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e1(A.n(q).i("e1<1>")):s},
gaO(){var s=this.a
return(this.b&8)!==0?s.c:s},
bE(){if((this.b&4)!==0)return new A.bi("Cannot add event after closing")
return new A.bi("Cannot add event while adding a stream")},
us(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bE())
if((o&2)!==0){o=new A.t($.C,t._)
o.aM(null)
return o}o=p.a
s=b===!0
r=new A.t($.C,t._)
q=s?A.ID(p):p.goW()
q=a.a7(p.gp_(),s,p.gpj(),q)
s=p.b
if((s&1)!==0?(p.gaO().e&4)!==0:(s&2)===0)q.bs()
p.a=new A.jY(o,r,q,A.n(p).i("jY<1>"))
p.b|=8
return r},
lx(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.e9():new A.t($.C,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bE())
this.aC(b)},
bz(a,b){var s
if(this.b>=4)throw A.b(this.bE())
s=A.f1(a,b)
this.aI(s.a,s.b)},
ur(a){return this.bz(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.lx()
if(r>=4)throw A.b(s.bE())
s.lh()
return s.lx()},
lh(){var s=this.b|=4
if((s&1)!==0)this.d7()
else if((s&3)===0)this.fY().u(0,B.aa)},
aC(a){var s=this,r=s.b
if((r&1)!==0)s.cv(a)
else if((r&3)===0)s.fY().u(0,new A.ca(a,A.n(s).i("ca<1>")))},
aI(a,b){var s=this.b
if((s&1)!==0)this.cw(a,b)
else if((s&3)===0)this.fY().u(0,new A.hp(a,b))},
aS(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aM(null)},
jH(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.x("Stream has already been listened to."))
s=A.IV(p,a,b,c,d,A.n(p).c)
r=p.grT()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.bf()}else p.a=s
s.tL(r)
s.ja(new A.z9(p))
return s},
lY(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.D()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.t)k=r}catch(o){q=A.D(o)
p=A.ag(o)
n=new A.t($.C,t.D)
n.cm(new A.al(q,p))
k=n}else k=k.aZ(s)
m=new A.z8(l)
if(k!=null)k=k.aZ(m)
else m.$0()
return k},
lZ(a){if((this.b&8)!==0)this.a.b.bs()
A.oz(this.e)},
m_(a){if((this.b&8)!==0)this.a.b.bf()
A.oz(this.f)},
$ibB:1}
A.z9.prototype={
$0(){A.oz(this.a.d)},
$S:0}
A.z8.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aM(null)},
$S:0}
A.oe.prototype={
cv(a){this.gaO().aC(a)},
cw(a,b){this.gaO().aI(a,b)},
d7(){this.gaO().aS()}}
A.jw.prototype={
cv(a){this.gaO().bY(new A.ca(a,A.n(this).i("ca<1>")))},
cw(a,b){this.gaO().bY(new A.hp(a,b))},
d7(){this.gaO().bY(B.aa)}}
A.cV.prototype={}
A.hF.prototype={}
A.b7.prototype={
gJ(a){return(A.eB(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b7&&b.a===this.a}}
A.dY.prototype={
ho(){return this.w.lY(this)},
bG(){this.w.lZ(this)},
bH(){this.w.m_(this)}}
A.nm.prototype={
D(){var s=this.b.D()
return s.aZ(new A.xb(this))}}
A.xc.prototype={
$2(a,b){var s=this.a
s.aI(a,b)
s.aS()},
$S:11}
A.xb.prototype={
$0(){this.a.a.aM(null)},
$S:3}
A.jY.prototype={}
A.b1.prototype={
tL(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fM(s)}},
im(a){this.a=A.nu(this.d,a,A.n(this).i("b1.T"))},
bs(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.ja(q.geJ())},
bf(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fM(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.ja(s.geK())}}},
D(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.j_()
r=s.f
return r==null?$.e9():r},
j_(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.ho()},
aC(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cv(a)
else s.bY(new A.ca(a,A.n(s).i("ca<b1.T>")))},
aI(a,b){var s
if(t.C.b(a))A.md(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cw(a,b)
else this.bY(new A.hp(a,b))},
aS(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d7()
else s.bY(B.aa)},
bG(){},
bH(){},
ho(){return null},
bY(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e1(A.n(r).i("e1<b1.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fM(r)}},
cv(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fC(s.a,a,A.n(s).i("b1.T"))
s.e=(s.e&4294967231)>>>0
s.j1((r&4)!==0)},
cw(a,b){var s,r=this,q=r.e,p=new A.xx(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.j_()
s=r.f
if(s!=null&&s!==$.e9())s.aZ(p)
else p.$0()}else{p.$0()
r.j1((q&4)!==0)}},
d7(){var s,r=this,q=new A.xw(r)
r.j_()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.e9())s.aZ(q)
else q.$0()},
ja(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.j1((r&4)!==0)},
j1(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bG()
else q.bH()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fM(q)},
$ibj:1}
A.xx.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nk(s,o,this.c,r,t.l)
else q.fC(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.xw.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fB(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hD.prototype={
a7(a,b,c,d){return this.a.jH(a,d,c,b===!0)},
bP(a,b,c){return this.a7(a,null,b,c)},
aU(a){return this.a7(a,null,null,null)},
wA(a,b){return this.a7(a,null,null,b)}}
A.nF.prototype={
gek(){return this.a},
sek(a){return this.a=a}}
A.ca.prototype={
kt(a){a.cv(this.b)}}
A.hp.prototype={
kt(a){a.cw(this.b,this.c)}}
A.y7.prototype={
kt(a){a.d7()},
gek(){return null},
sek(a){throw A.b(A.x("No events after a done."))}}
A.e1.prototype={
fM(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.ko(new A.yS(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sek(b)
s.c=b}}}
A.yS.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gek()
q.b=r
if(r==null)q.c=null
s.kt(this.b)},
$S:0}
A.hq.prototype={
im(a){},
bs(){var s=this.a
if(s>=0)this.a=s+2},
bf(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.ko(s.glS())}else s.a=r},
D(){this.a=-1
this.c=null
return $.e9()},
rI(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fB(s)}}else r.a=q},
$ibj:1}
A.cd.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.t($.C,t.g5)
r.b=s
r.c=!1
q.bf()
return s}throw A.b(A.x("Already waiting for next."))}return r.rf()},
rf(){var s,r,q=this,p=q.b
if(p!=null){s=new A.t($.C,t.g5)
q.b=s
r=p.a7(q.grA(),!0,q.grC(),q.grE())
if(q.b!=null)q.a=r
return s}return $.FQ()},
D(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aM(!1)
else s.c=!1
return r.D()}return $.e9()},
rB(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cn(!0)
if(q.c){r=q.a
if(r!=null)r.bs()}},
rF(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.am(new A.al(a,b))
else q.cm(new A.al(a,b))},
rD(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cU(!1)
else q.lc(!1)}}
A.jF.prototype={
a7(a,b,c,d){return A.DX(c,this.$ti.c)},
bP(a,b,c){return this.a7(a,null,b,c)}}
A.dj.prototype={
a7(a,b,c,d){var s=null,r=new A.jP(s,s,s,s,this.$ti.i("jP<1>"))
r.d=new A.yQ(this,r)
return r.jH(a,d,c,b===!0)},
bP(a,b,c){return this.a7(a,null,b,c)},
aU(a){return this.a7(a,null,null,null)}}
A.yQ.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jP.prototype={
ut(a){var s=this.b
if(s>=4)throw A.b(this.bE())
if((s&1)!==0)this.gaO().aC(a)},
uJ(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bE())
r|=4
s.b=r
if((r&1)!==0)s.gaO().aS()},
gcR(){throw A.b(A.Y("Not available"))},
$idL:1}
A.zK.prototype={
$0(){return this.a.am(this.b)},
$S:0}
A.zL.prototype={
$0(){return this.a.cn(this.b)},
$S:0}
A.jI.prototype={
a7(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nu(r,a,s.y[1]),n=A.xv(r,d),m=c==null?A.A0():c
s=new A.ht(this,o,n,r.bT(m,t.H),r,q|p,s.i("ht<1,2>"))
s.x=this.a.bP(s.gjd(),s.gjf(),s.gjh())
return s},
bP(a,b,c){return this.a7(a,null,b,c)}}
A.ht.prototype={
aC(a){if((this.e&2)!==0)return
this.iR(a)},
aI(a,b){if((this.e&2)!==0)return
this.l3(a,b)},
bG(){var s=this.x
if(s!=null)s.bs()},
bH(){var s=this.x
if(s!=null)s.bf()},
ho(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
je(a){this.w.qp(a,this)},
ji(a,b){this.aI(a,b)},
jg(){this.aS()}}
A.eV.prototype={
qp(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.D(q)
r=A.ag(q)
p=s
o=r
n=A.kc(p,o)
if(n!=null){p=n.a
o=n.b}b.aI(p,o)
return}b.aC(m)}}
A.jG.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.v(A.x("Stream is already closed"))
s.iR(b)},
bz(a,b){this.a.aI(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.v(A.x("Stream is already closed"))
s.l4()},
$ibB:1}
A.hB.prototype={
aC(a){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.iR(a)},
aI(a,b){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.l3(a,b)},
aS(){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.l4()},
bG(){var s=this.x
if(s!=null)s.bs()},
bH(){var s=this.x
if(s!=null)s.bf()},
ho(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
je(a){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.u(0,a)}catch(p){s=A.D(p)
r=A.ag(p)
this.aI(s,r)}},
ji(a,b){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.bz(a,b)}catch(p){s=A.D(p)
r=A.ag(p)
if(s===a)this.aI(a,b)
else this.aI(s,r)}},
jg(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.A()
q.p()}catch(p){s=A.D(p)
r=A.ag(p)
this.aI(s,r)}}}
A.jz.prototype={
a7(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nu(r,a,s.y[1]),n=A.xv(r,d),m=c==null?A.A0():c,l=new A.hB(o,n,r.bT(m,t.H),r,q|p,s.i("hB<1,2>"))
l.w=this.a.$1(new A.jG(l,s.i("jG<2>")))
l.x=this.b.bP(l.gjd(),l.gjf(),l.gjh())
return l},
bP(a,b,c){return this.a7(a,null,b,c)}}
A.zC.prototype={}
A.zE.prototype={}
A.zD.prototype={}
A.zA.prototype={}
A.zB.prototype={}
A.zz.prototype={}
A.zw.prototype={}
A.os.prototype={}
A.zv.prototype={}
A.zu.prototype={}
A.zy.prototype={}
A.zx.prototype={}
A.or.prototype={
vY(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.ot.prototype={}
A.oq.prototype={
eP(a,b,c){var s,r,q,p,o,n,m=this.gjo(),l=m.a
if(l===B.i){A.kh(b,c)
return}o=l.gkq()
o.toString
s=o
r=$.C
try{$.C=s
m.vY(l,l.gb8(),a,b,c)
$.C=r}catch(n){q=A.D(n)
p=A.ag(n)
$.C=r
o=b===q?c:p
s.eP(l,q,o)}},
$iP:1}
A.nz.prototype={
glu(){var s=this.ax
return s==null?this.ax=new A.hK(this):s},
gb8(){return this.ay.glu()},
gc8(){return this.as.a},
fB(a){var s,r,q
try{this.aX(a,t.H)}catch(q){s=A.D(q)
r=A.ag(q)
this.eP(this,s,r)}},
fC(a,b,c){var s,r,q
try{this.es(a,b,t.H,c)}catch(q){s=A.D(q)
r=A.ag(q)
this.eP(this,s,r)}},
nk(a,b,c,d,e){var s,r,q
try{this.kC(a,b,c,t.H,d,e)}catch(q){s=A.D(q)
r=A.ag(q)
this.eP(this,s,r)}},
jR(a,b){return new A.y3(this,this.bT(a,b),b)},
uF(a,b,c){return new A.y5(this,this.dn(a,b,c),c,b)},
f_(a){return new A.y2(this,this.bT(a,t.H))},
hP(a,b){return new A.y4(this,this.dn(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aM)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.tp(q,b)},
tp(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkq().gjO()
if(s===B.aM)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fe(a,b){this.eP(this,a,b)},
mU(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
aX(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
es(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb8(),this,a,b,c,d)},
kC(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb8(),this,a,b,c,d,e,f)},
bT(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
dn(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb8(),this,a,b,c)},
fu(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb8(),this,a,b,c,d)},
mP(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb8(),this,a,b)},
cO(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb8(),this,a)},
jW(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
jV(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
gm6(){return this.a},
gm8(){return this.b},
gm7(){return this.c},
gm2(){return this.d},
gm3(){return this.e},
gm1(){return this.f},
glz(){return this.r},
gjE(){return this.w},
gls(){return this.x},
glr(){return this.y},
glW(){return this.z},
glC(){return this.Q},
gjo(){return this.as},
gjO(){return this.at},
gkq(){return this.ay}}
A.y3.prototype={
$0(){return this.a.aX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.y5.prototype={
$1(a){var s=this
return s.a.es(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").U(this.c).i("1(2)")}}
A.y2.prototype={
$0(){return this.a.fB(this.b)},
$S:0}
A.y4.prototype={
$1(a){return this.a.fC(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.o2.prototype={
gm6(){return B.dT},
gm8(){return B.dS},
gm7(){return B.dR},
gm2(){return B.dP},
gm3(){return B.dQ},
gm1(){return B.dO},
glz(){return B.dK},
gjE(){return B.dU},
gls(){return B.dJ},
glr(){return B.dI},
glW(){return B.dN},
glC(){return B.dL},
gjo(){return B.dM},
gjO(){return B.aM},
gkq(){return null},
glu(){var s=$.yX
return s==null?$.yX=new A.hK(this):s},
gb8(){var s=$.yX
return s==null?$.yX=new A.hK(this):s},
gc8(){return this},
fB(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.zW(null,null,this,a)}catch(q){s=A.D(q)
r=A.ag(q)
A.kh(s,r)}},
fC(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.zX(null,null,this,a,b)}catch(q){s=A.D(q)
r=A.ag(q)
A.kh(s,r)}},
nk(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.C3(null,null,this,a,b,c)}catch(q){s=A.D(q)
r=A.ag(q)
A.kh(s,r)}},
jR(a,b){return new A.yZ(this,a,b)},
f_(a){return new A.yY(this,a)},
hP(a,b){return new A.z_(this,a,b)},
h(a,b){return null},
fe(a,b){A.kh(a,b)},
mU(a,b){return A.EP(null,null,this,a,b)},
aX(a){if($.C===B.i)return a.$0()
return A.zW(null,null,this,a)},
es(a,b){if($.C===B.i)return a.$1(b)
return A.zX(null,null,this,a,b)},
kC(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.C3(null,null,this,a,b,c)},
bT(a){return a},
dn(a){return a},
fu(a){return a},
mP(a,b){return null},
cO(a){A.zY(null,null,this,a)},
jW(a,b){return A.BE(a,b)},
jV(a,b){return A.Dz(a,b)}}
A.yZ.prototype={
$0(){return this.a.aX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.yY.prototype={
$0(){return this.a.fB(this.b)},
$S:0}
A.z_.prototype={
$1(a){return this.a.fC(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hK.prototype={$iat:1}
A.zV.prototype={
$0(){A.CR(this.a,this.b)},
$S:0}
A.jt.prototype={}
A.dh.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gV(a){return this.a!==0},
gK(){return new A.eT(this,A.n(this).i("eT<1>"))},
gb3(){var s=A.n(this)
return A.dJ(new A.eT(this,s.i("eT<1>")),new A.yw(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ln(a)},
ln(a){var s=this.d
if(s==null)return!1
return this.c0(this.lj(s,a),a)>=0},
C(a,b){b.a1(0,new A.yv(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.DZ(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.DZ(q,b)
return r}else return this.lD(b)},
lD(a){var s,r,q=this.d
if(q==null)return null
s=this.lj(q,a)
r=this.c0(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.l9(s==null?q.b=A.BP():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.l9(r==null?q.c=A.BP():r,b,c)}else q.ma(b,c)},
ma(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.BP()
s=p.co(a)
r=o[s]
if(r==null){A.BQ(o,s,[a,b]);++p.a
p.e=null}else{q=p.c0(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a1(a,b){var s,r,q,p,o,n=this,m=n.li()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.ay(n))}},
li(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
l9(a,b,c){if(a[b]==null){++this.a
this.e=null}A.BQ(a,b,c)},
co(a){return J.a7(a)&1073741823},
lj(a,b){return a[this.co(b)]},
c0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.w(a[r],b))return r
return-1}}
A.yw.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.yv.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.dZ.prototype={
co(a){return A.kl(a)&1073741823},
c0(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jC.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.oB(b)},
j(a,b,c){this.oC(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.oA(a)},
co(a){return this.r.$1(a)&1073741823},
c0(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.y1.prototype={
$1(a){return this.a.b(a)},
$S:17}
A.eT.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.nK(s,s.li(),this.$ti.i("nK<1>"))},
F(a,b){return this.a.I(b)}}
A.nK.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ay(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.jN.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.ou(b)},
j(a,b,c){this.ow(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.ot(a)},
H(a,b){if(!this.y.$1(b))return null
return this.ov(b)},
ee(a){return this.x.$1(a)&1073741823},
di(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.yO.prototype={
$1(a){return this.a.b(a)},
$S:17}
A.di.prototype={
gt(a){var s=this,r=new A.e0(s,s.r,A.n(s).i("e0<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gE(a){return this.a===0},
gV(a){return this.a!==0},
F(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.py(b)},
py(a){var s=this.d
if(s==null)return!1
return this.c0(s[this.co(a)],a)>=0},
gG(a){var s=this.e
if(s==null)throw A.b(A.x("No elements"))
return s.a},
ga_(a){var s=this.f
if(s==null)throw A.b(A.x("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.l8(s==null?q.b=A.BR():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.l8(r==null?q.c=A.BR():r,b)}else return q.oU(b)},
oU(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.BR()
s=q.co(a)
r=p[s]
if(r==null)p[s]=[q.ju(a)]
else{if(q.c0(r,a)>=0)return!1
r.push(q.ju(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lk(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lk(s.c,b)
else return s.jB(b)},
jB(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.co(a)
r=n[s]
q=o.c0(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ll(p)
return!0},
a9(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.js()}},
l8(a,b){if(a[b]!=null)return!1
a[b]=this.ju(b)
return!0},
lk(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.ll(s)
delete a[b]
return!0},
js(){this.r=this.r+1&1073741823},
ju(a){var s,r=this,q=new A.yP(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.js()
return q},
ll(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.js()},
co(a){return J.a7(a)&1073741823},
c0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.w(a[r].a,b))return r
return-1}}
A.yP.prototype={}
A.e0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ay(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.tu.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:28}
A.et.prototype={
F(a,b){return b instanceof A.b4&&this===b.a},
gt(a){var s=this
return new A.nR(s,s.a,s.c,s.$ti.i("nR<1>"))},
gm(a){return this.b},
a9(a){var s,r,q,p=this;++p.a
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
ga_(a){var s
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
hn(a,b,c){var s,r,q=this
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
jJ(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.nR.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.ay(s))
if(r.b!==0)r=s.e&&s.d===r.gG(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b4.prototype={
gfo(){var s=this.a
if(s==null||this===s.gG(0))return null
return this.c}}
A.K.prototype={
gt(a){return new A.ar(a,this.gm(a),A.bx(a).i("ar<K.E>"))},
a6(a,b){return this.h(a,b)},
gE(a){return this.gm(a)===0},
gV(a){return!this.gE(a)},
gG(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,0)},
ga_(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aD())
if(this.gm(a)>1)throw A.b(A.iv())
return this.h(a,0)},
F(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.w(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.ay(a))}return!1},
cE(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.ay(a))}return!0},
fa(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.ay(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.vZ("",a,b)
return s.charCodeAt(0)==0?s:s},
dv(a,b){return new A.aj(a,b,A.bx(a).i("aj<K.E>"))},
kI(a,b){return new A.bG(a,b.i("bG<0>"))},
ce(a,b,c){return new A.X(a,b,A.bx(a).i("@<K.E>").U(c).i("X<1,2>"))},
bk(a,b){return A.cu(a,b,null,A.bx(a).i("K.E"))},
cL(a,b){return A.cu(a,0,A.bY(b,"count",t.S),A.bx(a).i("K.E"))},
fD(a){var s,r=A.lK(A.bx(a).i("K.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
hQ(a,b){return new A.bO(a,A.bx(a).i("@<K.E>").U(b).i("bO<1,2>"))},
ck(a,b){var s=b==null?A.Lh():b
A.mA(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bc(b,c,r)
s=A.N(this.fL(a,b,c),A.bx(a).i("K.E"))
return s},
b6(a,b){return this.T(a,b,null)},
fL(a,b,c){A.bc(b,c,this.gm(a))
return A.cu(a,b,c,A.bx(a).i("K.E"))},
k8(a,b,c,d){var s
A.bc(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ah(a,b,c,d,e){var s,r,q,p,o
A.bc(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.oR(d,e).cM(0,!1)
r=0}p=J.L(q)
if(r+s>p.gm(q))throw A.b(A.D1())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
au(a,b,c,d){return this.ah(a,b,c,d,0)},
cP(a,b,c){var s,r
if(t.j.b(c))this.au(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.rP(a,"[","]")},
$iJ:1,
$io:1,
$ip:1}
A.U.prototype={
c4(a,b,c){var s=A.n(this)
return A.Db(this,s.i("U.K"),s.i("U.V"),b,c)},
a1(a,b){var s,r,q,p
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gaa(){return J.b3(this.gK(),new A.tJ(this),A.n(this).i("R<U.K,U.V>"))},
aV(a,b,c,d){var s,r,q,p,o,n=A.u(c,d)
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.AW(this.gK(),a)},
gm(a){return J.ak(this.gK())},
gE(a){return J.by(this.gK())},
gV(a){return J.ea(this.gK())},
gb3(){return new A.jO(this,A.n(this).i("jO<U.K,U.V>"))},
l(a){return A.tK(this)},
$iF:1}
A.tJ.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.R(a,r,A.n(s).i("R<U.K,U.V>"))},
$S(){return A.n(this.a).i("R<U.K,U.V>(U.K)")}}
A.tL.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:41}
A.jO.prototype={
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gV(a){var s=this.a
return s.gV(s)},
gG(a){var s=this.a
s=s.h(0,J.ci(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.AX(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga_(a){var s=this.a
s=s.h(0,J.oQ(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.nT(J.E(s.gK()),s,this.$ti.i("nT<1,2>"))}}
A.nT.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.oi.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iH.prototype={
c4(a,b,c){return this.a.c4(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a1(a,b){this.a.a1(0,b)},
gE(a){var s=this.a
return s.gE(s)},
gV(a){var s=this.a
return s.gV(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gb3(){return this.a.gb3()},
gaa(){return this.a.gaa()},
aV(a,b,c,d){return this.a.aV(0,b,c,d)},
$iF:1}
A.cR.prototype={
c4(a,b,c){return new A.cR(this.a.c4(0,b,c),b.i("@<0>").U(c).i("cR<1,2>"))}}
A.iD.prototype={
gt(a){var s=this
return new A.nS(s,s.c,s.d,s.b,s.$ti.i("nS<1>"))},
gE(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gG(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aD())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga_(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aD())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gap(a){var s,r=this
if(r.b===r.c)throw A.b(A.aD())
if(r.gm(0)>1)throw A.b(A.iv())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a6(a,b){var s,r=this
A.D0(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.w(r.a[s],b)){r.jB(s);++r.d
return!0}return!1},
l(a){return A.rP(this,"{","}")},
jB(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.nS.prototype={
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
A.cq.prototype={
gE(a){return this.gm(this)===0},
gV(a){return this.gm(this)!==0},
C(a,b){var s
for(s=J.E(b);s.k();)this.u(0,s.gn())},
ce(a,b,c){return new A.em(this,b,A.n(this).i("@<1>").U(c).i("em<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iv())
s=r.gt(r)
if(!s.k())throw A.b(A.aD())
return s.gn()},
l(a){return A.rP(this,"{","}")},
dv(a,b){return new A.aj(this,b,A.n(this).i("aj<1>"))},
cE(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cL(a,b){return A.Dx(this,b,A.n(this).c)},
bk(a,b){return A.Dv(this,b,A.n(this).c)},
gG(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
a6(a,b){var s,r
A.bb(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lu(b,b-r,this,null,"index"))},
$iJ:1,
$io:1,
$ieG:1}
A.jW.prototype={}
A.k6.prototype={}
A.nO.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.t0(b):s}},
gm(a){return this.b==null?this.c.a:this.dI().length},
gE(a){return this.gm(0)===0},
gV(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.nP(this)},
gb3(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.n(s).i("ao<2>"))}return A.dJ(r.dI(),new A.yK(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.u4().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a1(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a1(0,b)
s=o.dI()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.zN(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ay(o))}},
dI(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
u4(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.u(t.N,t.z)
r=n.dI()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.a9(r)
n.a=n.b=null
return n.c=s},
t0(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.zN(this.a[a])
return this.b[a]=s}}
A.yK.prototype={
$1(a){return this.a.h(0,a)},
$S:58}
A.nP.prototype={
gm(a){return this.a.gm(0)},
a6(a,b){var s=this.a
return s.b==null?s.gK().a6(0,b):s.dI()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gt(s)}else{s=s.dI()
s=new J.fe(s,s.length,A.Z(s).i("fe<1>"))}return s},
F(a,b){return this.a.I(b)}}
A.yI.prototype={
p(){var s,r,q=this
q.oD()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aC(A.EL(r.charCodeAt(0)==0?r:r,q.b))
s.aS()}}
A.zq.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:50}
A.zp.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:50}
A.kA.prototype={
gaQ(){return"us-ascii"},
k5(a){return B.bu.v(a)}}
A.oh.prototype={
v(a){var s,r,q,p=A.bc(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aA(a,"string","Contains invalid characters."))
o[r]=q}return o},
bX(a){return new A.zh(new A.hj(a),this.a)}}
A.kB.prototype={}
A.zh.prototype={
p(){this.a.a.p()},
bL(a,b,c,d){var s,r,q,p
A.bc(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.cj(a)
p=this.a.a
p.u(0,s.T(s,b,c))
if(d)p.p()}}
A.kF.prototype={
gf5(){return this.a},
wL(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bc(a1,a2,a0.length)
s=$.Cp()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.As(a0.charCodeAt(l))
h=A.As(a0.charCodeAt(l+1))
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
d=A.bs(k)
e.a+=d
q=l
continue}}throw A.b(A.a8("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.CA(a0,n,a2,o,m,d)
else{c=B.c.ak(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dq(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.CA(a0,n,a2,o,m,b)
else{c=B.c.ak(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dq(a0,a2,a2,c===2?"==":"=")}return a0}}
A.i5.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.ns(this.a?u.G:u.U).mO(a,0,s,!0)
s.toString
return A.dS(s,0,null)},
bX(a){return new A.xd(a,new A.xu(this.a?u.G:u.U))}}
A.ns.prototype={
mF(a){return new Uint8Array(a)},
mO(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mF(o)
r.a=A.IM(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.xu.prototype={
mF(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bM(B.f.ga8(s),s.byteOffset,a)}}
A.xq.prototype={
u(a,b){this.lo(b,0,J.ak(b),!1)},
p(){this.lo(B.cA,0,0,!0)}}
A.xd.prototype={
lo(a,b,c,d){var s=this.b.mO(a,b,c,d)
if(s!=null)this.a.a.aC(A.dS(s,0,null))
if(d)this.a.a.aS()}}
A.kG.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.nr()
r=s.jY(a,0,q)
r.toString
s.jS(a,q)
return r},
bX(a){return new A.xp(a,new A.nr())}}
A.nr.prototype={
jY(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.DM(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.IJ(a,b,c,q)
r.a=A.IL(a,b,c,s,0,r.a)
return s},
jS(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.xp.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.jY(b,0,r)
if(s!=null)this.a.a.aC(s)},
p(){this.b.jS(null,null)
this.a.a.aS()},
bL(a,b,c,d){var s,r
A.bc(b,c,a.length)
if(b===c)return
s=this.b
r=s.jY(a,b,c)
if(r!=null)this.a.a.aC(r)
if(d){s.jS(a,c)
this.a.a.aS()}}}
A.p8.prototype={}
A.hj.prototype={
u(a,b){this.a.u(0,b)},
p(){this.a.p()}}
A.nv.prototype={
u(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.L(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.ae(s,1)
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
p(){this.a.$1(B.f.T(this.b,0,this.c))}}
A.kT.prototype={}
A.o8.prototype={
u(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.eQ.prototype={
u(a,b){this.b.u(0,b)},
bz(a,b){A.bY(a,"error",t.K)
this.a.bz(a,b)},
p(){this.b.p()},
$ibB:1}
A.kV.prototype={}
A.aB.prototype={
bX(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
uD(a){return new A.jz(new A.q5(this),a,t.fM.U(A.n(this).i("aB.T")).i("jz<1,2>"))}}
A.q5.prototype={
$1(a){return new A.eQ(a,this.a.bX(a),t.oW)},
$S:98}
A.eo.prototype={}
A.iB.prototype={
l(a){var s=A.ii(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lC.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.rS.prototype={
av(a,b){var s=A.EL(a,this.guW().a)
return s},
a5(a,b){var s=A.J5(a,this.gf5().b,null)
return s},
gf5(){return B.cb},
guW(){return B.ca}}
A.lE.prototype={
bX(a){return new A.yJ(null,this.b,new A.oa(a))}}
A.yJ.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.x("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a1("")
q=new A.ze(r,s)
A.E0(b,q,p.b,p.a)
if(r.a.length!==0)q.j9()
s.p()},
p(){}}
A.lD.prototype={
bX(a){return new A.yI(this.a,a,new A.a1(""))}}
A.yM.prototype={
nt(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iI(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iI(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iI(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b4(a)
else if(s<m)n.iI(a,s,m)},
j0(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.lC(a,null))}s.push(a)},
iH(a){var s,r,q,p,o=this
if(o.ns(a))return
o.j0(a)
try{s=o.b.$1(a)
if(!o.ns(s)){q=A.D8(a,null,o.glT())
throw A.b(q)}o.a.pop()}catch(p){r=A.D(p)
q=A.D8(a,r,o.glT())
throw A.b(q)}},
ns(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.y7(a)
return!0}else if(a===!0){r.b4("true")
return!0}else if(a===!1){r.b4("false")
return!0}else if(a==null){r.b4("null")
return!0}else if(typeof a=="string"){r.b4('"')
r.nt(a)
r.b4('"')
return!0}else if(t.j.b(a)){r.j0(a)
r.y5(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.j0(a)
s=r.y6(a)
r.a.pop()
return s}else return!1},
y5(a){var s,r,q=this
q.b4("[")
s=J.L(a)
if(s.gV(a)){q.iH(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b4(",")
q.iH(s.h(a,r))}}q.b4("]")},
y6(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.b4("{}")
return!0}s=a.gm(a)*2
r=A.ae(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a1(0,new A.yN(n,r))
if(!n.b)return!1
o.b4("{")
for(p='"';q<s;q+=2,p=',"'){o.b4(p)
o.nt(A.G(r[q]))
o.b4('":')
o.iH(r[q+1])}o.b4("}")
return!0}}
A.yN.prototype={
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
A.yL.prototype={
glT(){var s=this.c
return s instanceof A.a1?s.l(0):null},
y7(a){this.c.iG(B.x.l(a))},
b4(a){this.c.iG(a)},
iI(a,b,c){this.c.iG(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.lH.prototype={
gaQ(){return"iso-8859-1"},
k5(a){return B.cj.v(a)}}
A.lI.prototype={}
A.mK.prototype={
u(a,b){this.bL(b,0,b.length,!1)}}
A.ze.prototype={
ao(a){var s=this.a,r=A.bs(a)
if((s.a+=r).length>16)this.j9()},
iG(a){if(this.a.a.length!==0)this.j9()
this.b.u(0,a)},
j9(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.k_.prototype={
p(){},
bL(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bs(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
u(a,b){this.a.a+=b}}
A.oa.prototype={
u(a,b){this.a.a.aC(b)},
bL(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aC(a)
else r.aC(B.a.A(a,b,c))
if(d)r.aS()},
p(){this.a.a.aS()}}
A.zo.prototype={
p(){var s,r,q,p=this.c
this.a.vU(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bL(q,0,q.length,!0)}else r.p()},
u(a,b){this.bL(b,0,J.ak(b),!1)},
bL(a,b,c,d){var s,r=this.c,q=this.a.cW(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bL(s,0,s.length,!1)
r.a=""
return}}}
A.n3.prototype={
gaQ(){return"utf-8"},
uT(a,b){return new A.dk((b===!0?B.dE:B.aL).a).cW(a,0,null,!0)},
f0(a){return this.uT(a,null)},
k5(a){return B.e.v(a)}}
A.n4.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.ok(s)
if(r.lB(a,0,q)!==q)r.hH()
return B.f.T(s,0,r.b)},
bX(a){return new A.zr(new A.hj(a),new Uint8Array(1024))}}
A.ok.prototype={
hH(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.I(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mr(a,b){var s,r,q,p,o=this
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
return!0}else{o.hH()
return!1}},
lB(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.I(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mr(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hH()}else if(o<=2047){n=k.b
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
A.zr.prototype={
p(){if(this.a!==0){this.bL("",0,0,!0)
return}this.d.a.p()},
bL(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mr(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lB(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hH()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.T(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.jm.prototype={
bX(a){return new A.zo(new A.dk(this.a),new A.oa(a),new A.a1(""))}}
A.dk.prototype={
cW(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bc(b,c,J.ak(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.JB(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.JA(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.j5(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.En(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
j5(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.j5(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.j5(a,s,c,d)}return q.uV(a,b,c,d)},
vU(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bs(65533)
a.a+=s}else throw A.b(A.a8(A.En(77),null,null))},
uV(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a1(""),g=b+1,f=a[b]
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
h.a+=q}else{q=A.dS(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bs(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.ou.prototype={}
A.aI.prototype={
bB(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bH(p,r)
return new A.aI(p===0?!1:s,r,p)},
pO(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ch()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bH(s,q)
return new A.aI(n===0?!1:o,q,n)},
pR(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ch()
s=k-a
if(s<=0)return l.a?$.Cr():$.ch()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bH(s,q)
m=new A.aI(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fR(0,$.fb())
return m},
bC(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.ak(b,16)===0)return n.pO(r)
q=s+r+1
p=new Uint16Array(q)
A.DU(n.b,s,b,p)
s=n.a
o=A.bH(q,p)
return new A.aI(o===0?!1:s,p,o)},
dC(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.ak(b,16)
if(q===0)return j.pR(r)
p=s-r
if(p<=0)return j.a?$.Cr():$.ch()
o=j.b
n=new Uint16Array(p)
A.IS(o,s,b,n)
s=j.a
m=A.bH(p,n)
l=new A.aI(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bC(1,q)-1)>>>0!==0)return l.fR(0,$.fb())
for(k=0;k<r;++k)if(o[k]!==0)return l.fR(0,$.fb())}return l},
Z(a,b){var s,r=this.a
if(r===b.a){s=A.xr(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iW(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iW(p,b)
if(o===0)return $.ch()
if(n===0)return p.a===b?p:p.bB(0)
s=o+1
r=new Uint16Array(s)
A.IO(p.b,o,a.b,n,r)
q=A.bH(s,r)
return new A.aI(q===0?!1:b,r,q)},
fS(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ch()
s=a.c
if(s===0)return p.a===b?p:p.bB(0)
r=new Uint16Array(o)
A.nt(p.b,o,a.b,s,r)
q=A.bH(o,r)
return new A.aI(q===0?!1:b,r,q)},
fI(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iW(b,r)
if(A.xr(q.b,p,b.b,s)>=0)return q.fS(b,r)
return b.fS(q,!r)},
fR(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bB(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iW(b,r)
if(A.xr(q.b,p,b.b,s)>=0)return q.fS(b,r)
return b.fS(q,!r)},
bi(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ch()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.DV(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bH(s,p)
return new A.aI(m===0?!1:n,p,m)},
pN(a){var s,r,q,p
if(this.c<a.c)return $.ch()
this.lw(a)
s=$.BJ.bw()-$.jy.bw()
r=A.BL($.BI.bw(),$.jy.bw(),$.BJ.bw(),s)
q=A.bH(s,r)
p=new A.aI(!1,r,q)
return this.a!==a.a&&q>0?p.bB(0):p},
tr(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lw(a)
s=A.BL($.BI.bw(),0,$.jy.bw(),$.jy.bw())
r=A.bH($.jy.bw(),s)
q=new A.aI(!1,s,r)
if($.BK.bw()>0)q=q.dC(0,$.BK.bw())
return p.a&&q.c>0?q.bB(0):q},
lw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.DR&&a.c===$.DT&&c.b===$.DQ&&a.b===$.DS)return
s=a.b
r=a.c
q=16-B.c.gmA(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.DP(s,r,q,p)
n=new Uint16Array(b+5)
m=A.DP(c.b,b,q,n)}else{n=A.BL(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.BM(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.xr(n,m,j,i)>=0){g&2&&A.I(n)
n[m]=1
A.nt(n,h,j,i,n)}else{g&2&&A.I(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.nt(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.IP(l,n,e);--k
A.DV(d,f,0,n,k,o)
if(n[e]<d){i=A.BM(f,o,k,j)
A.nt(n,h,j,i,n)
while(--d,n[e]<d)A.nt(n,h,j,i,n)}--e}$.DQ=c.b
$.DR=b
$.DS=s
$.DT=r
$.BI.b=n
$.BJ.b=h
$.jy.b=o
$.BK.b=q},
gJ(a){var s,r,q,p=new A.xs(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.xt().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.aI&&this.Z(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bB(0):n
while(r.c>1){q=$.Cq()
if(q.c===0)A.v(B.bE)
p=r.tr(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pN(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bU(s,t.hF).ef(0)},
$iau:1}
A.xs.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:105}
A.xt.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:116}
A.nI.prototype={
my(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mL(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.zn.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:53}
A.qJ.prototype={
$0(){var s=this
return A.v(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:33}
A.aM.prototype={
iY(a){var s=1000,r=B.c.ak(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.ak(p,s),n=this.c
return new A.aM(A.la(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aM&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.c5(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
ki(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
Z(a,b){var s=B.c.Z(this.a,b.a)
if(s!==0)return s
return B.c.Z(this.b,b.b)},
xA(){var s=this
if(s.c)return s
return new A.aM(s.a,s.b,!0)},
l(a){var s=this,r=A.H1(A.Br(s)),q=A.l9(A.Bp(s)),p=A.l9(A.uO(s)),o=A.l9(A.Bn(s)),n=A.l9(A.Bo(s)),m=A.l9(A.Bq(s)),l=A.CP(A.Dl(s)),k=s.b,j=k===0?"":A.CP(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iau:1}
A.aC.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aC&&this.a===b.a},
gJ(a){return B.c.gJ(this.a)},
Z(a,b){return B.c.Z(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.M(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.M(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.M(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.iq(B.c.l(n%1e6),6,"0")},
$iau:1}
A.y8.prototype={
l(a){return this.a3()}}
A.ad.prototype={
gcl(){return A.HV(this)}}
A.kC.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ii(s)
return"Assertion failed"}}
A.dd.prototype={}
A.bz.prototype={
gj8(){return"Invalid argument"+(!this.a?"(s)":"")},
gj7(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gj8()+q+o
if(!s.a)return n
return n+s.gj7()+": "+A.ii(s.gkh())},
gkh(){return this.b}}
A.d8.prototype={
gkh(){return this.b},
gj8(){return"RangeError"},
gj7(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.is.prototype={
gkh(){return this.b},
gj8(){return"RangeError"},
gj7(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id8:1,
gm(a){return this.f}}
A.cS.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.mX.prototype={
l(a){return"UnimplementedError: "+this.a},
$icS:1}
A.bi.prototype={
l(a){return"Bad state: "+this.a}}
A.kY.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ii(s)+"."}}
A.m3.prototype={
l(a){return"Out of Memory"},
gcl(){return null},
$iad:1}
A.je.prototype={
l(a){return"Stack Overflow"},
gcl(){return null},
$iad:1}
A.nH.prototype={
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
k=""}return g+l+B.a.A(e,i,j)+k+"\n"+B.a.bi(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iH:1,
gkn(){return this.a},
gfP(){return this.b},
gar(){return this.c}}
A.lw.prototype={
gcl(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iad:1,
$icS:1,
$iH:1}
A.o.prototype={
hQ(a,b){return A.fg(this,A.n(this).i("o.E"),b)},
ce(a,b,c){return A.dJ(this,b,A.n(this).i("o.E"),c)},
dv(a,b){return new A.aj(this,b,A.n(this).i("aj<o.E>"))},
kI(a,b){return new A.bG(this,b.i("bG<0>"))},
F(a,b){var s
for(s=this.gt(this);s.k();)if(J.w(s.gn(),b))return!0
return!1},
vW(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
vX(a,b,c){return this.vW(0,b,c,t.z)},
cE(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
B(a,b){var s,r,q=this.gt(this)
if(!q.k())return""
s=J.a_(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.a_(q.gn())
while(q.k())}else{r=s
do r=r+b+J.a_(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bM(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cM(a,b){var s=A.n(this).i("o.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
eu(a){return this.cM(0,!0)},
fD(a){return A.d1(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gE(a){return!this.gt(this).k()},
gV(a){return!this.gE(this)},
cL(a,b){return A.Dx(this,b,A.n(this).i("o.E"))},
bk(a,b){return A.Dv(this,b,A.n(this).i("o.E"))},
gG(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
gap(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aD())
s=r.gn()
if(r.k())throw A.b(A.iv())
return s},
fa(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a6(a,b){var s,r
A.bb(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lu(b,b-r,this,null,"index"))},
l(a){return A.Ho(this,"(",")")}}
A.R.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gJ(a){return A.j.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
R(a,b){return this===b},
gJ(a){return A.eB(this)},
l(a){return"Instance of '"+A.mb(this)+"'"},
gal(a){return A.dr(this)},
toString(){return this.l(this)}}
A.oc.prototype={
l(a){return""},
$iaF:1}
A.jf.prototype={
gvy(){var s=this.gmN()
if($.kq()===1e6)return s
return s*1000},
gmM(){var s=this.gmN()
if($.kq()===1000)return s
return B.c.M(s,1000)},
aB(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mc.$0()-r)
s.b=null}},
gmN(){var s=this.b
if(s==null)s=$.mc.$0()
return s-this.a}}
A.j6.prototype={
gt(a){return new A.mr(this.a)},
ga_(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.x("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.Ew(r,s)}return s}}
A.mr.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.Ew(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a1.prototype={
gm(a){return this.a.length},
iG(a){var s=A.r(a)
this.a+=s},
ao(a){var s=A.bs(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.wA.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:166}
A.k7.prototype={
gmh(){var s,r,q,p,o=this,n=o.w
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
gwW(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ad(s,1)
r=s.length===0?B.p:A.d2(new A.X(A.l(s.split("/"),t.s),A.Lt(),t.iZ),t.N)
q.x!==$&&A.AO()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmh())
r.y!==$&&A.AO()
r.y=s
q=s}return q},
gkH(){return this.b},
gdh(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ac(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfn(){var s=this.d
return s==null?A.Ec(this.a):s},
gft(){var s=this.f
return s==null?"":s},
gi3(){var s=this.r
return s==null?"":s},
ws(a){var s=this.a
if(a.length!==s.length)return!1
return A.JO(a,s,0)>=0},
fz(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.BV(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.zj(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.zk(null,0,0,a)
else k=j.f
return A.k8(b,q,o,p,l,k,j.r)},
kA(a){return this.fz(a,null)},
ni(a){return this.fz(null,a)},
lP(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ac(b,"../",r);){r+=3;++s}q=B.a.dj(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.ii(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dq(a,q+1,null,B.a.ad(b,r-3*s))},
bt(a){return this.fA(A.n2(a))},
fA(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb0().length!==0)return a
else{s=h.a
if(a.gkc()){r=a.ni(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmV())m=a.gie()?a.gft():h.f
else{l=A.Jz(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gkb()?k+A.f_(a.gbr()):k+A.f_(h.lP(B.a.ad(n,k.length),a.gbr()))}else if(a.gkb())n=A.f_(a.gbr())
else if(n.length===0)if(p==null)n=s.length===0?a.gbr():A.f_(a.gbr())
else n=A.f_("/"+a.gbr())
else{j=h.lP(n,a.gbr())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f_(j)
else n=A.BX(j,!r||p!=null)}m=a.gie()?a.gft():null}}}i=a.gkd()?a.gi3():null
return A.k8(s,q,p,o,n,m,i)},
gkc(){return this.c!=null},
gie(){return this.f!=null},
gkd(){return this.r!=null},
gmV(){return this.e.length===0},
gkb(){return B.a.S(this.e,"/")},
kE(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdh()!=="")A.v(A.Y(u.Q))
s=r.gwW()
A.Js(s,!1)
q=A.vZ(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmh()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb0())if(p.c!=null===b.gkc())if(p.b===b.gkH())if(p.gdh()===b.gdh())if(p.gfn()===b.gfn())if(p.e===b.gbr()){r=p.f
q=r==null
if(!q===b.gie()){if(q)r=""
if(r===b.gft()){r=p.r
q=r==null
if(!q===b.gkd()){s=q?"":r
s=s===b.gi3()}}}}return s},
$in0:1,
gb0(){return this.a},
gbr(){return this.e}}
A.zm.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.hI(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.hI(1,b,B.k,!0)
s.a+=r}},
$S:173}
A.zl.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:53}
A.wz.prototype={
gnr(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.ca(m,"?",s)
q=m.length
if(r>=0){p=A.k9(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.nC("data","",n,n,A.k9(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cc.prototype={
gkc(){return this.c>0},
gke(){return this.c>0&&this.d+1<this.e},
gie(){return this.f<this.r},
gkd(){return this.r<this.a.length},
gkb(){return B.a.ac(this.a,"/",this.e)},
gmV(){return this.e===this.f},
gb0(){var s=this.w
return s==null?this.w=this.pw():s},
pw(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gkH(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdh(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfn(){var s,r=this
if(r.gke())return A.aG(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbr(){return B.a.A(this.a,this.e,this.f)},
gft(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
gi3(){var s=this.r,r=this.a
return s<r.length?B.a.ad(r,s+1):""},
lJ(a){var s=this.d+1
return s+a.length===this.e&&B.a.ac(this.a,a,s)},
xo(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cc(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.BV(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb0()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gke()?h.gfn():g
if(s)o=A.zj(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.zk(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ad(q,m+1):g
return A.k8(b,p,n,o,l,j,i)},
kA(a){return this.fz(a,null)},
ni(a){return this.fz(null,a)},
bt(a){return this.fA(A.n2(a))},
fA(a){if(a instanceof A.cc)return this.tQ(this,a)
return this.mj().fA(a)},
tQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lJ("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lJ("443")
if(p){o=r+1
return new A.cc(B.a.A(a.a,0,o)+B.a.ad(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mj().fA(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cc(B.a.A(a.a,0,r)+B.a.ad(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cc(B.a.A(a.a,0,r)+B.a.ad(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.xo()}s=b.a
if(B.a.ac(s,"/",n)){m=a.e
l=A.E4(this)
k=l>0?l:m
o=k-n
return new A.cc(B.a.A(a.a,0,k)+B.a.ad(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ac(s,"../",n))n+=3
o=j-n+1
return new A.cc(B.a.A(a.a,0,j)+"/"+B.a.ad(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.E4(this)
if(l>=0)g=l
else for(g=j;B.a.ac(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.ac(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.ac(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.cc(B.a.A(h,0,i)+d+B.a.ad(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kE(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb0()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.v(A.Y(u.Q))
q=B.a.A(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mj(){var s=this,r=null,q=s.gb0(),p=s.gkH(),o=s.c>0?s.gdh():r,n=s.gke()?s.gfn():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gft():r
return A.k8(q,p,o,n,k,l,j<m.length?s.gi3():r)},
l(a){return this.a},
$in0:1}
A.nC.prototype={}
A.li.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.m_.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iH:1}
A.re.prototype={
$2(a,b){this.a.bU(new A.rc(a),new A.rd(b),t.X)},
$S:175}
A.rc.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:177}
A.rd.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Le(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.v("Attempting to box non-Dart object.")
s={}
s[$.Ge()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:11}
A.Ax.prototype={
$1(a){var s,r,q,p
if(A.EK(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.C(p,J.b3(a,this,t.z))
return p}else return a},
$S:14}
A.AE.prototype={
$1(a){return this.a.aD(a)},
$S:26}
A.AF.prototype={
$1(a){if(a==null)return this.a.aT(new A.m_(a===undefined))
return this.a.aT(a)},
$S:26}
A.A9.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.EJ(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aM(A.la(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.O("structured clone of RegExp",null))
if(a instanceof Promise)return A.a5(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.u(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.az(o),q=s.gt(o);q.k();)n.push(A.oE(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.L(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:14}
A.yF.prototype={
cI(a){if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
return Math.random()*a>>>0},
n6(){return Math.random()}}
A.yG.prototype={
oQ(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cI(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.I(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.an(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bM(B.az.ga8(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.lg.prototype={}
A.a3.prototype={
h(a,b){var s,r=this
if(!r.jp(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jp(b))return
s.c.j(0,s.a.$1(b),new A.R(b,c,s.$ti.i("R<a3.K,a3.V>")))},
C(a,b){b.a1(0,new A.pa(this))},
c4(a,b,c){return this.c.c4(0,b,c)},
I(a){var s=this
if(!s.jp(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a3.K").a(a)))},
gaa(){var s=this.c,r=A.n(s).i("aN<1,2>")
return A.dJ(new A.aN(s,r),new A.pb(this),r.i("o.E"),this.$ti.i("R<a3.K,a3.V>"))},
a1(a,b){this.c.a1(0,new A.pc(this,b))},
gE(a){return this.c.a===0},
gV(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dJ(new A.ao(s,r),new A.pd(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aV(a,b,c,d){return this.c.aV(0,new A.pe(this,b,c,d),c,d)},
gb3(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dJ(new A.ao(s,r),new A.pf(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.tK(this)},
jp(a){return this.$ti.i("a3.K").b(a)},
$iF:1}
A.pa.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pb.prototype={
$1(a){var s=a.b
return new A.R(s.a,s.b,this.a.$ti.i("R<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("R<a3.K,a3.V>(R<a3.C,R<a3.K,a3.V>>)")}}
A.pc.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,R<a3.K,a3.V>)")}}
A.pd.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(R<a3.K,a3.V>)")}}
A.pe.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.U(this.c).U(this.d).i("R<1,2>(a3.C,R<a3.K,a3.V>)")}}
A.pf.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(R<a3.K,a3.V>)")}}
A.lc.prototype={
X(a,b){return J.w(a,b)},
ab(a){return J.a7(a)}}
A.iw.prototype={
X(a,b){var s,r,q,p
if(a===b)return!0
s=J.E(a)
r=J.E(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.X(s.gn(),r.gn()))return!1}},
ab(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();){q=q+r.ab(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.eu.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.L(a)
r=s.gm(a)
q=J.L(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.X(s.h(a,o),q.h(b,o)))return!1
return!0},
ab(a){var s,r,q,p
for(s=J.L(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ab(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hG.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.Ba(s.gvF(),s.gwn(),s.gwt(),A.n(this).i("hG.E"),t.S)
for(s=J.E(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.E(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ab(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();)q=q+r.ab(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.fY.prototype={}
A.hw.prototype={
gJ(a){var s=this.a
return 3*s.a.ab(this.b)+7*s.b.ab(this.c)&2147483647},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.hw){s=this.a
s=s.a.X(this.b,b.b)&&s.b.X(this.c,b.c)}else s=!1
return s}}
A.iG.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.Ba(null,null,null,t.mB,t.S)
for(r=J.E(a.gK());r.k();){q=r.gn()
p=new A.hw(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gK());r.k();){q=r.gn()
p=new A.hw(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ab(a){var s,r,q,p,o,n,m,l
for(s=J.E(a.gK()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ab(n)
l=a.h(0,n)
o=o+3*m+7*q.ab(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.lb.prototype={
X(a,b){var s,r=this
if(a instanceof A.cq)return b instanceof A.cq&&new A.fY(r,t.cu).X(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iG(r,r,t.a3).X(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.eu(r,t.hI).X(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iw(r,t.nZ).X(a,b)
return J.w(a,b)},
ab(a){var s=this
if(a instanceof A.cq)return new A.fY(s,t.cu).ab(a)
if(t.f.b(a))return new A.iG(s,s,t.a3).ab(a)
if(t.j.b(a))return new A.eu(s,t.hI).ab(a)
if(t.e7.b(a))return new A.iw(s,t.nZ).ab(a)
return J.a7(a)},
wu(a){return!0}}
A.lZ.prototype={
sm(a,b){A.Dg()},
u(a,b){return A.Dg()}}
A.n_.prototype={
j(a,b,c){return A.Iu()}}
A.ck.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.ck){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.ua(this.a)},
l(a){return A.aq(this.a)}}
A.c2.prototype={
u(a,b){if(this.a!=null)throw A.b(A.x("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.x("add must be called once."))}}
A.lo.prototype={
v(a){var s=new A.c2(),r=A.cW(s)
r.u(0,a)
r.p()
r=s.a
r.toString
return r}}
A.rj.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.x("Hash.add() called after close()."))
s.r=s.r+J.ak(b)
s.l7(b)},
l7(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.oN(B.f.ga8(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.L(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ah(i,j,n,a,o)
k.e=n
return}B.f.ah(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.I(s)
s[m]=l;++m}while(m<q)
k.xG(s)}},
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
n=J.oN(B.f.ga8(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.I(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.l7(q)
s=l.a
s.u(0,new A.ck(l.pf()))
s.p()},
pf(){var s,r,q,p,o,n,m
if(B.aR===$.kp())return J.Gr(B.y.ga8(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.oN(B.f.ga8(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.I(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.o5.prototype={
bX(a){var s=new Uint32Array(A.b2(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hj(new A.o6(s,r,a,q,new Uint32Array(16)))}}
A.z1.prototype={
xG(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
A.o6.prototype={}
A.kv.prototype={
gJ(a){return A.c5(B.dp,this.d,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.l4&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dr(s).l(0)+".with"+s.d*8+"bits()"
return A.dr(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.pl.prototype={}
A.iF.prototype={
gJ(a){return B.u.ab(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.iF&&B.u.X(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.j9.prototype={
l(a){return A.dr(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iH:1}
A.tI.prototype={
l(a){return A.dr(this).l(0)+"()"}}
A.j8.prototype={
gJ(a){return(B.u.ab(this.b.a)^B.u.ab(this.c)^B.u.ab(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.j8){s=B.u.X(this.b.a,b.b.a)
s=s&&B.u.X(this.c,b.c)&&B.u.X(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.vE.prototype={}
A.ja.prototype={
ge5(){return this.b},
gJ(a){var s=A.eB(B.dz),r=B.u.ab(this.ge5())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.ja&&B.u.X(this.ge5(),b.ge5())},
l(a){return"SecretKeyData(...)"}}
A.mw.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.l4.prototype={
uY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge5().gm(0),f=this.d
if(g!==f)throw A.b(A.aA(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.F3(c)
r=new Uint32Array(4)
A.oB(r,0,r,0,s)
r[0]=A.bw(r[0])
r[1]=A.bw(r[1])
r[2]=A.bw(r[2])
r[3]=A.bw(r[3])
q=A.CO(r,a.c)
p=J.Cu(B.f.ga8(q),0,null)
o=a.a
n=B.u.X(B.aP.le(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.j9())
A.A1(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oB(l,k,p,0,s)
A.A1(q,1)}j=J.bM(B.y.ga8(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.I(j)
j[k]=i^h}return j},
vC(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge5().gm(0),f=this.d
if(g!==f)throw A.b(A.aA(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.F3(d)
r=new Uint32Array(4)
A.oB(r,0,r,0,s)
r[0]=A.bw(r[0])
r[1]=A.bw(r[1])
r[2]=A.bw(r[2])
r[3]=A.bw(r[3])
q=A.CO(r,c)
p=J.Cu(B.f.ga8(q),0,null)
o=new Uint32Array(A.b2(p))
A.A1(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oB(l,k,p,0,s)
A.A1(q,1)}j=J.bM(B.y.ga8(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.I(j)
j[k]=i^h}return new A.j8(j,B.aP.le(j,b,s,r,o),c)}}
A.qn.prototype={
l(a){return"DartGcm()"},
le(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.l5(n,d,b)
A.l5(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.ak(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.ak(r,o),!1)
A.l5(n,d,J.bM(B.az.ga8(q),0,null))
p=new Uint32Array(4)
A.oB(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iF(J.bM(B.y.ga8(n),0,null))}}
A.nA.prototype={}
A.nB.prototype={}
A.q8.prototype={}
A.qo.prototype={}
A.xX.prototype={
X(a,b){var s,r,q=J.L(a),p=J.L(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ab(a){var s,r,q,p,o
for(s=J.L(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.ak(q,16)
r=(r^B.c.tP(p,o)^B.c.md(p,16-o))>>>0}return r}}
A.mn.prototype={}
A.kH.prototype={$iB_:1}
A.kI.prototype={
i2(){if(this.w)throw A.b(A.x("Can't finalize a finalized Request."))
this.w=!0
return B.by},
l(a){return this.a+" "+this.b.l(0)}}
A.kJ.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:215}
A.kK.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:72}
A.p4.prototype={
oG(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.r(s)+".",null))}}}
A.kP.prototype={
b5(a){return this.od(a)},
od(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b5=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.CL("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.i2().xz(),$async$b5)
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
f=A.u(a9,t.K)
e=b4.gmE()
d=null
if(e!=null){d=e
J.bZ(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.n(b0).i("aN<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.bZ(f,c.a,c.b)}f=A.f8(f)
f.toString
A.be(f)
b0=l.signal
s=8
return A.a(A.a5(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b5)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.j1(a,null):null
if(a0==null&&a!=null){f=A.CL("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.u(a9,a9)
b.headers.forEach(A.ow(new A.p7(a1)))
f=A.JE(b4,b)
a4=b.status
a6=a1
a8=a0
A.n2(b.url)
a9=b.statusText
f=new A.mJ(A.FH(f),a4,a8,a6)
f.oG(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ag(b3)
A.EO(a2,a3,b4)
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
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].abort()
this.b=!0}}
A.p7.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:80}
A.zJ.prototype={
$1(a){return A.hP(this.a,this.b,a)},
$S:82}
A.zS.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.zT.prototype={
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
n=A.D(k)
m=A.ag(k)
if(!o.a.b)A.EO(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:5}
A.du.prototype={
xz(){var s=new A.t($.C,t.jz),r=new A.aH(s,t.iq),q=new A.nv(new A.p9(r),new Uint8Array(1024))
this.a7(q.guo(q),!0,q.ge7(),r.guM())
return s}}
A.p9.prototype={
$1(a){return this.a.aD(new Uint8Array(A.b2(a)))},
$S:25}
A.eg.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iH:1}
A.lS.prototype={
gm(a){return this.b}}
A.u2.prototype={
gmE(){var s,r,q,p=this,o={},n=o.a=0
p.x.a1(0,new A.u3(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.q)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lH(q)).length+q.b+2)}return o.a+2+70+4},
i2(){var s=this,r=s.pb()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.l_()
return new A.du(s.bn(r))},
bn(a){return this.q2(a)},
q2(a){var $async$bn=A.c(function(b,c){switch(b){case 2:n=q
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
return A.bV(A.e_(e),$async$bn,r)
case 5:k=l.b
j=$.AT()
l=A.y(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.y(l,'"',"%22")+'"'
l=$.Cs()
s=6
q=[1]
return A.bV(A.e_(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bn,r)
case 6:s=7
q=[1]
return A.bV(A.e_(B.e.v(k)),$async$bn,r)
case 7:s=8
q=[1]
return A.bV(A.e_(B.b2),$async$bn,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bV(A.e_(e),$async$bn,r)
case 12:s=13
q=[1]
return A.bV(A.e_(B.e.v(m.lH(g))),$async$bn,r)
case 13:if(g.f)A.v(A.x("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bV(A.J3(g.e),$async$bn,r)
case 14:s=15
q=[1]
return A.bV(A.e_(B.b2),$async$bn,r)
case 15:case 10:f.length===l||(0,A.q)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bV(A.e_(d),$async$bn,r)
case 16:case 1:return A.bV(null,0,r)
case 2:return A.bV(o.at(-1),1,r)}})
var s=0,r=A.EI($async$bn,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.EX(r)},
rd(a,b){var s,r=$.AT()
r=A.y(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.y(r,'"',"%22")+'"'
r=$.Cs()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lH(a){var s=a.d.l(0),r=$.AT(),q=A.y(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.y(q,'"',"%22")+'"'
s=A.y(a.c,r,"%0D%0A")
p=p+'; filename="'+A.y(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pb(){var s,r=J.D5(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cF[$.FR().cI(66)]
return"dart-http-boundary-"+A.dS(r,0,null)}}
A.u3.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.rd(a,b)).length+B.e.v(b).length+2)},
$S:31}
A.vv.prototype={
gmE(){return this.y.length},
gk6(){var s,r
if(this.gcp()==null||!this.gcp().c.a.I("charset"))return B.k
s=this.gcp().c.a.h(0,"charset")
s.toString
r=A.H5(s)
return r==null?A.v(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
i2(){this.l_()
return new A.du(A.BA(this.y,t.L))},
gcp(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.HD(s)},
scp(a){this.r.j(0,"content-type",a.l(0))},
pi(){if(!this.w)return
throw A.b(A.x("Can't modify a finalized Request."))}}
A.ji.prototype={}
A.mJ.prototype={}
A.i7.prototype={}
A.fz.prototype={
l(a){var s=new A.a1(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a1(0,new A.tO(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.tM.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.w_(null,j),h=$.Gq()
i.iP(h)
s=$.Gp()
i.f7(s)
r=i.gkl().h(0,0)
r.toString
i.f7("/")
i.f7(s)
q=i.gkl().h(0,0)
q.toString
i.iP(h)
p=t.N
o=A.u(p,p)
for(;;){p=i.d=B.a.ej(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gN():n
if(!m)break
p=i.d=h.ej(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gN()
i.f7(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.f7("=")
n=i.d=s.ej(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gN()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.LC(i)
n=i.d=h.ej(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.vL()
return A.Bk(r,q,o)},
$S:103}
A.tO.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Gn()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.FE(b,$.Gc(),new A.tN(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:31}
A.tN.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:43}
A.Ak.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:43}
A.q3.prototype={
$1(a){return a.b===this.a},
$S:106}
A.q4.prototype={
$1(a){return a.b===this.a},
$S:112}
A.dy.prototype={}
A.kW.prototype={
gaA(){return"committedChange"},
q(){var s,r=this,q=A.u(t.N,t.X)
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
A.jo.prototype={
gaA(){return"watchSnapshot"},
q(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.u4.prototype={}
A.iM.prototype={}
A.iP.prototype={}
A.iN.prototype={}
A.iQ.prototype={}
A.iJ.prototype={}
A.iK.prototype={}
A.iI.prototype={}
A.iO.prototype={}
A.iL.prototype={}
A.zP.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:12}
A.vm.prototype={
q(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.u(k,j),h=t.d,g=A.l([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)g.push(s[q].q())
i.j(0,"where",g)
g=A.l([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=A.l([],h)
for(n=B.b.gt(p);n.k();)o.push(n.gn().q())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.q())
h=A.l([],h)
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
A.vn.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:12}
A.vo.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.a2("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Do(r.gn()))
return s},
$S:117}
A.eC.prototype={
q(){var s,r,q,p,o=this,n=A.u(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.q)(s),++p)r.push(A.oG(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.oG(o.c))
return n}}
A.vj.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:12}
A.vk.prototype={
$1(a){return a.b===this.a},
$S:124}
A.aY.prototype={
a3(){return"QueryConditionOp."+this.b}}
A.cJ.prototype={}
A.uM.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:12}
A.uL.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.a2("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.E(a);r.k();)s.push(A.Bm(r.gn()))
return s},
$S:128}
A.iC.prototype={
q(){var s=A.u(t.N,t.X)
s.j(0,"kind","leaf")
s.C(0,this.a.q())
return s}}
A.iX.prototype={
q(){return A.m(["kind","not","child",this.a.q()],t.N,t.X)}}
A.i1.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].q())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.i2.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].q())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mh.prototype={
q(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.vl.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:12}
A.cA.prototype={
a3(){return"AggregateFn."+this.b}}
A.vC.prototype={
q(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.vD.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:12}
A.mm.prototype={}
A.m2.prototype={
q(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.kQ.prototype={
q(){return B.n}}
A.lp.prototype={
q(){return B.n}}
A.kU.prototype={
q(){return B.n}}
A.ln.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mp.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lT.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.JZ(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mi.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l1.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l0.prototype={
q(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.q())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.ld.prototype={
q(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.q())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.ls.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kw.prototype={
q(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.q())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.lj.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mv.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dT.prototype={
a3(){return"TransactionDurability."+this.b}}
A.mQ.prototype={
q(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.mR.prototype={
q(){return A.m(["session",this.a],t.N,t.X)}}
A.mT.prototype={
q(){return A.m(["session",this.a],t.N,t.X)}}
A.mV.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.mU.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.mS.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.n9.prototype={
q(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.na.prototype={
q(){return A.m(["store",this.a,"spec",this.b.q()],t.N,t.X)}}
A.n8.prototype={
q(){return A.m(["subscription",this.a],t.N,t.X)}}
A.ky.prototype={
q(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.n7.prototype={
q(){return B.n}}
A.n5.prototype={
q(){return B.n}}
A.me.prototype={
q(){return B.n}}
A.kX.prototype={
q(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.mq.prototype={
q(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.aQ.prototype={}
A.fH.prototype={
gaA(){return"ok"},
q(){return B.n}}
A.kR.prototype={
gaA(){return"capabilities"},
q(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e],t.N,t.X)}}
A.lq.prototype={
gaA(){return"health"},
q(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.fU.prototype={
gaA(){return"row"},
q(){return A.m(["row",this.a],t.N,t.X)}}
A.fV.prototype={
gaA(){return"rows"},
q(){return A.m(["rows",this.a],t.N,t.X)}}
A.fD.prototype={
gaA(){return"mutation"},
q(){return A.m(["ids",this.a],t.N,t.X)}}
A.fP.prototype={
gaA(){return"queryRows"},
q(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fn.prototype={
gaA(){return"count"},
q(){return A.m(["value",this.a],t.N,t.X)}}
A.fo.prototype={
gaA(){return"distinct"},
q(){return A.m(["values",this.a],t.N,t.X)}}
A.fx.prototype={
gaA(){return"ids"},
q(){return A.m(["ids",this.a],t.N,t.X)}}
A.fd.prototype={
gaA(){return"aggregate"},
q(){return A.m(["value",this.a],t.N,t.X)}}
A.fs.prototype={
gaA(){return"explain"},
q(){return A.m(["plan",this.a],t.N,t.X)}}
A.fX.prototype={
gaA(){return"searchHits"},
q(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.mu.prototype={
q(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.h8.prototype={
gaA(){return"txBegin"},
q(){return A.m(["session",this.a],t.N,t.X)}}
A.jp.prototype={
gaA(){return"watchStarted"},
q(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fM.prototype={
gaA(){return"pruneOutbox"},
q(){return A.m(["removed",this.a],t.N,t.X)}}
A.fk.prototype={
gaA(){return"compact"},
q(){return A.m(["removed",this.a],t.N,t.X)}}
A.jr.prototype={
l(a){return"WireException: "+this.a},
$iH:1}
A.AP.prototype={
$1(a){return a.a===this.a},
$S:133}
A.AQ.prototype={
$2(a,b){return B.a.Z(a.a,b.a)},
$S:134}
A.ma.prototype={
a3(){return"PlatformProfile."+this.b}}
A.mG.prototype={
q(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.vN.prototype={
$1(a){return J.ci(a.gb3())},
$S:42}
A.vO.prototype={
$1(a){return B.a.F(a,"ENABLE_FTS5")},
$S:9}
A.i8.prototype={
a3(){return"ChangeOrigin."+this.b}}
A.dv.prototype={
a3(){return"ChangeAction."+this.b}}
A.aT.prototype={
q(){var s,r=this,q=A.u(t.N,t.X)
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
if(!(b instanceof A.aT))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.r.X(b.e,s.e)&&B.r.X(b.f,s.f)&&B.r.X(b.r,s.r)},
gJ(a){var s=this
return A.c5(s.a,s.b,s.c,s.d,B.r.ab(s.e),B.r.ab(s.f),B.r.ab(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a0.prototype={}
A.pi.prototype={
vz(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
vA(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.pj.prototype={}
A.pk.prototype={}
A.qW.prototype={}
A.oS.prototype={
vB(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cI(256)
q=this.b.vC(new Uint8Array(A.b2(a)),b,m,this.c)
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
uX(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.O("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.x("Unsupported ciphertext version 0x"+B.a.iq(B.c.kF(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b2(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b2(B.f.b6(a,n)))
q=new Uint8Array(A.b2(B.f.T(a,13,n)))
try{n=this.b.uY(new A.j8(q,new A.iF(r),s),b,this.c)
return n}catch(o){if(A.D(o) instanceof A.j9)throw A.b(A.x("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d0.prototype={
a3(){return"KindViolation."+this.b}}
A.A3.prototype={
$2(a,b){return B.a.Z(a.a,b.a)},
$S:149}
A.kZ.prototype={
a3(){return"ConflictAlgorithm."+this.b}}
A.ig.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
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
if(l!=null)l.unregister(m.d)}}}o.a9(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
cj(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(s!=null)s.p()}q=this.b.wX(a)
r.j(0,a,q)
return q},
oc(a,b){var s=this.cj(a).kS(new A.bP(b)),r=A.n(s).i("X<K.E,F<k,j?>>")
r=A.N(new A.X(s,new A.qT(),r),r.i("V.E"))
return r},
f6(a,b){this.cj(a).e9(new A.bP(b))},
k7(a){return this.f6(a,B.m)},
aF(a,b){return this.vI(a,b)},
O(a){return this.aF(a,B.m)},
vI(a,b){var s=0,r=A.h(t.H),q=this
var $async$aF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f6(a,b)
return A.e(null,r)}})
return A.f($async$aF,r)},
ag(a,b){return this.xa(a,b)},
b1(a){return this.ag(a,B.m)},
xa(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ag=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.oc(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ag,r)},
bR(a,b,c,d,e,f,g){return this.x7(a,b,c,d,e,f,g)},
aK(a,b,c,d){return this.bR(a,null,b,null,null,c,d)},
en(a,b,c,d,e){return this.bR(a,b,c,null,null,d,e)},
nc(a,b,c,d){return this.bR(a,b,null,null,null,c,d)},
cg(a,b,c){var s=null
return this.bR(a,s,s,s,s,b,c)},
x3(a,b,c,d){return this.bR(a,null,null,null,b,c,d)},
x4(a,b,c,d,e){return this.bR(a,b,c,d,e,null,null)},
x6(a,b,c,d,e,f){return this.bR(a,b,c,null,d,e,f)},
x5(a,b,c,d,e){return this.bR(a,null,b,null,c,d,e)},
x7(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bR=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.m:g
q=p.ag(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
cb(a,b,c,d){return this.wq(0,b,c,d)},
aE(a,b,c){return this.cb(0,b,c,null)},
wq(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cb=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dJ(new A.T(c,n),new A.qS(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.ae(c.a,"?",!1,m),", ")
j=A.CQ(d)
o=o.i("ao<2>")
o=A.N(new A.ao(c,o),o.i("o.E"))
p.f6("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.an(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cb,r)},
L(a,b,c,d){return this.xF(a,b,c,d)},
xF(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dJ(new A.T(b,n),new A.qU(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.CQ(null)+' "'+a+'" SET '+m
o=A.N(new A.ao(b,o.i("ao<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.C(o,d)}p.f6(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
W(a,b,c){return this.uZ(a,b,c)},
uZ(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$W=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.C(n,c)}p.f6(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$W,r)},
uP(a,b,c){this.b.uQ(B.bs,!0,!1,new A.qR(b),c)},
a0(a,b){return this.xB(a,b,b)},
xB(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a0=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.k7("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a0)
case 7:m=e
n.k7("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.k7("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a0,r)},
$iqq:1}
A.qT.prototype={
$1(a){return A.ba(a,t.N,t.X)},
$S:157}
A.qS.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.qU.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.qR.prototype={
$1(a){var s=a.gm(0)===0?null:a.gG(a)
return this.a.$1(s)},
$S:171}
A.pH.prototype={}
A.ie.prototype={
jT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aO(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=$.Cl()
if(!k.b.test(l))A.v(A.aR('Field "'+l+u.Z))
if(B.bd.F(0,l))throw A.b(A.aR('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aR('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aR(e+l+'" cannot be unique.'))
if(B.b.bM(o,new A.qQ(m)))throw A.b(A.aR(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.F(k,l)}else k=!1
if(k)throw A.b(A.aR(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.q)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ar(l,l.gm(0),k.i("ar<K.E>")),k=k.i("K.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.F(0,j)&&!B.bd.F(0,j))throw A.b(A.aR('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.af.X(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.H2(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.r9(u.r))
if(q.b&&!A.Dw(r.a,3,34))throw A.b(A.r9("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.ar(r,r.gm(0),p.i("ar<K.E>")),p=p.i("K.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.F(0,o))throw A.b(A.aR('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gaa(),r=r.gt(r);r.k();){q=r.gn()
A.CY(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aR('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aR('Ref field "'+m.a+'" must declare its target store.'))}return new A.pH(f.pe(a),f.pd(a),f.pc(a),d)},
pe(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.y(n,'"',i)+'"')+" "+o.gkW()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.qP(),A.Z(k).i("X<1,k>")).B(0,", ")
m+=" CHECK ("+('"'+A.y(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.J&&o.w){n=o.r
n.toString
n=A.y(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.y("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.y(a.a,'"',i)
r=B.b.B(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
pd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("X<K.E,k>")
j=A.N(new A.X(l,A.Aa(),k),k.i("V.E"))
if(!l.F(l,"id"))j.push('"'+A.y("id",e,d)+'"')
i=m.c===B.b1?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.y(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.y(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.y(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.y(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.q)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bM(s,new A.qO(h)))continue
k=h.a
g=A.y(p+k,e,d)
f=A.y(q,e,d)
k=A.y(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.y("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.q)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.y(o+s,e,d)
l=A.y(q,e,d)
g=A.y(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.y(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
pc(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.p
s=A.l([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<K.E,k>")
n=A.N(new A.X(p,A.Aa(),o),o.i("V.E"))
m=new A.qN(r,a0.c)
l=new A.X(p,new A.qK(m),o).B(0,f)
k=new A.X(p,new A.qL(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.y(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.y(r+"_ai",e,d)
o=A.y(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.y(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.y(r+"_ad",e,d)
o=A.y(r,e,d)
m=A.y(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.y(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.qM(),A.Z(n).i("X<1,k>")).B(0," OR ")
p=A.y(r+"_au",e,d)
o=A.y(r,e,d)
m=A.y(q,e,d)
h=A.y(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.y(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.qQ.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:65}
A.qP.prototype={
$1(a){return"'"+A.y(a,"'","''")+"'"},
$S:7}
A.qO.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:65}
A.qN.prototype={
$2(a,b){return A.Fn(this.a,this.b,a,b)},
$S:174}
A.qK.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.qL.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.qM.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dI.prototype={
l(a){return A.dr(this).l(0)+": "+this.a},
$iH:1}
A.eK.prototype={}
A.eJ.prototype={}
A.ez.prototype={}
A.fh.prototype={}
A.fK.prototype={}
A.fu.prototype={}
A.cM.prototype={}
A.fS.prototype={}
A.fW.prototype={}
A.eE.prototype={}
A.hc.prototype={}
A.fw.prototype={}
A.h1.prototype={}
A.fC.prototype={}
A.fl.prototype={}
A.el.prototype={}
A.fR.prototype={}
A.AJ.prototype={
$1(a){if(typeof a!="string")return a
return this.a.el(a)},
$S:14}
A.to.prototype={}
A.le.prototype={
a3(){return"DurabilityClass."+this.b}}
A.mH.prototype={}
A.uJ.prototype={
bV(a){var s,r=this.a
if(!r.I(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.ov(s)
r.toString
t.G.a(r)}return r},
kT(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(b==null)s=null
else{s=A.ov(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
wr(a){var s,r,q,p=a.a
if(p===0){this.a.a9(0)
return}s=this.a
if(p>=s.a){s.a9(0)
return}for(p=A.hv(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.lF.prototype={
aR(a){return this.xk(a)},
xk(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dx
h=a.a
if(i.I(h))throw A.b(A.aR('Duplicate store name "'+h+'" in this open call.'))
p=A.Bw(a)
o=q.w
if(o.e===B.aA&&p.b.length!==0)throw A.b(new A.hc('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fT(a,p),$async$aR)
case 2:n=new A.ie(o).jT(a)
o=a.w
if(o!=null)A.M6(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aK("lp_stores",1,"store = ?",[h]),$async$aR)
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
case 11:case 9:l.length===k||(0,A.q)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aR)
case 15:case 13:l.length===k||(0,A.q)(l),++j
s=12
break
case 14:l=a.b
k=q.ch
s=16
return A.a(o.aE(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a5(a.q(),null),"created_at",k.$0()],t.N,t.X)),$async$aR)
case 16:s=17
return A.a(A.fB(o,0,0,"create:"+h,k,l),$async$aR)
case 17:s=5
break
case 6:l=J.S(l.gG(m),"schema_ver")
l.toString
A.an(l)
k=a.b
if(l>k)throw A.b(A.Dt('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fA(q,a,l),$async$aR)
case 20:case 19:s=21
return A.a(q.bJ(a),$async$aR)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a5(a.q(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aR)
case 22:case 5:i.j(0,h,new A.mH(a,p,new A.uJ(A.u(t.N,t.b))))
s=23
return A.a(q.dT(h,p),$async$aR)
case 23:return A.e(null,r)}})
return A.f($async$aR,r)},
fT(a,b){return this.oZ(a,b)},
oZ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aK("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fT)
case 3:j=d
if(J.by(j)){s=1
break}o=null
try{n=J.S(J.ci(j),"v")
o=A.Ia(typeof n=="string"?B.h.av(n,null):n)}catch(i){if(A.D(i) instanceof A.dI){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.aq(B.l.v(B.e.v(A.ai(o.q()))).a)!==A.aq(B.l.v(B.e.v(A.ai(b.q()))).a))throw A.b(A.aR('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
dT(a,b){return this.rV(a,b)},
rV(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ai(b.q())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aK("lp_meta",1,"k = ?",[p]),$async$dT)
case 5:s=k.by(d)?2:4
break
case 2:s=6
return A.a(n.aE(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dT)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dT)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dT,r)},
hO(a){return this.uC(a)},
uC(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hO)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
bJ(a){return this.tk(a)},
tk(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bJ=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.en("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a1]),$async$bJ)
case 3:a2=a6
if(J.by(a2)){s=1
break}o=null
try{n=J.S(J.ci(a2),"definition_json")
m=typeof n=="string"?B.h.av(n,null):n
l=m
l.toString
k=t.X
o=A.po(A.ba(t.f.a(l),t.N,k),k)}catch(a4){if(A.D(a4) instanceof A.cM){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.af.X(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.jf()
$.kq()
f.aB()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.O("DROP TRIGGER IF EXISTS "+('"'+A.y(a1+d,'"','""')+'"')),$async$bJ)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.O("DROP TABLE IF EXISTS "+('"'+A.y(a1+"_fts",'"','""')+'"')),$async$bJ)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.ie(p.w).jT(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.O(l[e]),$async$bJ)
case 16:case 14:l.length===k||(0,A.q)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.y(l,'"','""')
s=17
return A.a(a0.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.y(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bJ)
case 17:k=h.a
c=k.$ti.i("X<K.E,k>")
b=new A.X(k,A.Aa(),c).B(0,", ")
a=new A.X(k,new A.tp(a3,h),c).B(0,", ")
l=A.y(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.y(a1,'"','""')+'"')),$async$bJ)
case 18:case 12:if(f.b==null)f.b=$.mc.$0()
l=a3.b
s=19
return A.a(A.fB(a0,f.gmM(),l,"fts:"+a1,p.ch,l),$async$bJ)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bJ,r)},
hW(a){return this.v0(a)},
v0(a){var s=0,r=A.h(t.H),q=this,p
var $async$hW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hW)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hW,r)},
az(a){var s=this.dx.h(0,a)
if(s==null)throw A.b(A.x('No store "'+a+'" registered in this LocalPocket.'))
return s},
aY(a,b,c){var s
if(A.mW(this)!=null)A.v(A.x(u.L))
s=this.b
s===$&&A.A()
return s.aY(a,b,c)},
a0(a,b){return this.aY(a,B.o,b)},
nn(a,b){++this.y.e
return this.r.aF(a,B.m)},
no(a,b){this.y.ne()
return this.r.ag(a,b)},
e4(a){return this.ux(a)},
uw(){return this.e4(null)},
ux(a){var s=0,r=A.h(t.H),q=this,p
var $async$e4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e4)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.y(a,'"','""')+'"')),$async$e4)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e4,r)},
fF(){var s=0,r=A.h(t.H),q=this
var $async$fF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fF)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fF,r)},
iE(){var s=0,r=A.h(t.H),q=this
var $async$iE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iE)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iE,r)},
iD(){var s=0,r=A.h(t.H),q=this
var $async$iD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.r.O("VACUUM"),$async$iD)
case 2:return A.e(null,r)}})
return A.f($async$iD,r)},
fp(){return this.wY()},
wY(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fp=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a0(new A.ts(o),t.P),$async$fp)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
ds(a){return this.xx(a)},
xx(a){var s=0,r=A.h(t.H),q=this,p
var $async$ds=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dx,p=new A.bD(p,p.r,p.e,A.n(p).i("bD<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e8(p.d,a),$async$ds)
case 4:s=2
break
case 3:s=5
return A.a(q.fp(),$async$ds)
case 5:s=6
return A.a(q.fF(),$async$ds)
case 6:s=7
return A.a(q.uw(),$async$ds)
case 7:return A.e(null,r)}})
return A.f($async$ds,r)},
e8(a,b){return this.uL(a,b)},
uL(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.ch.$0()
h=i-B.c.M(b.a,1000)
j.a=0
o=p.az(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ag("SELECT b.id FROM "+('"'+A.y(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e8)
case 5:l=d
if(J.by(l)){s=4
break}if(A.mW(p)!=null)A.v(A.x(u.L))
k=p.b
k===$&&A.A()
s=6
return A.a(k.aY(new A.tr(j,p,l,a,h,o),B.o,n),$async$e8)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e8,r)},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.dy){s=1
break}n.dy=!0
m=n.a$
m.a.p()
m.b.p()
n.fr.b.a9(0)
p=4
s=7
return A.a(n.r.O("PRAGMA optimize"),$async$p)
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
A.tp.prototype={
$1(a){return A.Fn(this.a.a,this.b.c,"",a)},
$S:7}
A.ts.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b1("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.E(c),o=q.a
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
A.tr.prototype={
$1(a){return this.nF(a)},
nF(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ax,h=h.ay
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.G(f)
a1=J
s=4
return A.a(a0.ag("SELECT b.id FROM "+('"'+A.y(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.by(a4)){s=2
break}s=5
return A.a(a0.ag("SELECT * FROM "+('"'+A.y(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.L(e)
c=d.gV(e)?A.cf(i,d.gG(e),g,h):null
s=6
return A.a(A.cz(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.W(n,"id = ?",[f]),$async$$1)
case 7:d=A.ap([f],m)
l.push(new A.a0(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("aj<o.E>")
a=A.lK(b.i("o.E"))
a.C(0,new A.aj(new A.T(c,d),new A.tq(),b))
a2.bd(new A.aT(n,f,B.H,B.aV,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tq.prototype={
$1(a){return a!=="id"},
$S:9}
A.ny.prototype={
xq(){var s,r,q=this,p=new A.aH(new A.t($.C,t.D),t.h)
q.e=p
s=q.a.a
s.d.aX(new A.xR(q,p),t.H)
r=s.as
s=q.gvV()
if(r.a>0)A.cP(r,s)
else A.cP(B.D,s)},
k9(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.an()},
cF(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cF=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.e;++b2.b
b2.c+=b1}b3=new A.jf()
$.kq()
b3.aB()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aW&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nn("PRAGMA synchronous=FULL",null),$async$cF)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a0(new A.xQ(m,i,h,l,g),t.P),$async$cF)
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
if((b8.a.a&30)!==0)A.v(A.x("Future already completed"))
b8.am(A.f1(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.v(A.x("Future already completed"))
b8.aM(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dx,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.wr(a0.b)
b6.vz(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a1=f[b7]
b6.vA(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.D(c2)
a3=A.ag(c2)
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
if((b6.a.a&30)!==0)A.v(A.x("Future already completed"))
b6.am(A.f1(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.v(A.x("Future already completed"))
b6.am(A.f1(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.nn("PRAGMA synchronous=NORMAL",null),$async$cF)
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
a4=k.gvy();++f.a
f.d+=a4
b1.ru()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.q)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.v(A.x("Future already completed"))
a4.am(A.f1(new A.bi("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cF,r)}}
A.xR.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cF(),$async$$0)
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
$S:5}
A.xQ.prototype={
$1(a){return this.o1(a)},
o1(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.BF(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.oI(new A.xO(a,a0),null,A.m([$.ks(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.eY([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.D(a1)
l=A.ag(a1)
o.e.push(new A.eY([B.b.gap(a.c),null,m,l]))
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
return A.a(A.oI(new A.xP(a0,k),null,A.m([$.ks(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.eY([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.D(a2)
h=A.ag(a2)
e.push(new A.eY([k,null,i,h]))
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
$S:48}
A.xO.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:49}
A.xP.prototype={
$0(){return this.a.a0(new A.xN(this.b),t.z)},
$S:49}
A.xN.prototype={
$1(a){return this.a.a.$1(a)},
$S:182}
A.hl.prototype={}
A.vu.prototype={}
A.wg.prototype={
aY(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.t($.C,t._)
r.c.push(new A.hl(a,new A.aH(s,t.jk)))
return s.aj(new A.wn(c),c)}return this.tR(a,b,c)},
tR(a,b,c){var s,r,q,p=this
if(p.a.as.a>0){s=p.c
if(s!=null)s.k9()}s=A.l([],t.i4)
r=new A.ny(p,b,s)
p.c=r
r.xq()
q=new A.t($.C,t._)
s.push(new A.hl(a,new A.aH(q,t.jk)))
return q.aj(new A.wj(c),c)},
xb(a,b){var s,r=this.a
if(r.as.a>0){s=this.c
if(s!=null)s.k9()}return r.d.aX(new A.wm(this,a,b),b)},
ru(){if(++this.d<64)return
this.d=0
A.cP(B.D,new A.wi(this))}}
A.wn.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.wj.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.wm.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a0(new A.wl(s,this.b,r),r)},
$S(){return this.c.i("z<0>()")}}
A.wl.prototype={
$1(a){return this.o0(a,this.c)},
o0(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.BF(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.oI(new A.wk(p.b,o,n),null,A.m([$.ks(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("z<0>(qq)")}}
A.wk.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("z<0>()")}}
A.wi.prototype={
$0(){this.a.a.a.iE().mB(new A.wh())},
$S:0}
A.wh.prototype={
$1(a){},
$S:27}
A.eZ.prototype={$iH:1}
A.of.prototype={}
A.hA.prototype={}
A.rT.prototype={
oH(a){var s=this,r=s.a.a.a$.b
r=new A.b0(r,A.n(r).i("b0<1>")).aU(new A.t6(s))
s.c!==$&&A.cy()
s.c=r},
vZ(a){var s,r,q,p=this
A:{if(a instanceof A.m2){s=p.hp(a.a,a.b)
break A}if(a instanceof A.kQ){r=p.a.c
s=A.bp(new A.kR(r.a,r.b,r.c,r.d,r.e===B.aA),t.V)
break A}if(a instanceof A.lp){s=A.bp(new A.lq(!0,p.a.c.a),t.V)
break A}if(a instanceof A.kU){s=p.p().aj(new A.t7(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ln){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.t8(s,p),new A.t9())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mp){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tg(s,p),new A.th())
break A}if(a instanceof A.lT){s=p.rq(a.a,a.b,a.c)
break A}if(a instanceof A.mi){s=p.rN(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.l1){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.ti(s,p),A.Fa())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.l0){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.by(q,new A.tj(s,p),A.Fa())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.ld){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.by(q,new A.tk(s,p),A.Lm())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ls){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tl(s,p),A.Lo())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kw){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
q=a.e
s.a=q
s=p.by(q,new A.tm(s,p),A.Ll())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lj){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tn(s,p),A.Ln())
break A}if(a instanceof A.mv){s=p.tD(a.a,a.b,a.c)
break A}if(a instanceof A.mQ){s=p.p5(a.a,a.b)
break A}if(a instanceof A.mR){s=p.eW(a.a,!0)
break A}if(a instanceof A.mT){s=p.eW(a.a,!1)
break A}if(a instanceof A.mV){s=p.hx(a.a,a.b)
break A}if(a instanceof A.mU){s=p.hw(a.a,a.b)
break A}if(a instanceof A.mS){s=p.hu(a.a,a.b)
break A}if(a instanceof A.n9){s=p.hE(a.a,a.b)
break A}if(a instanceof A.na){s=p.u9(a.a,a.b)
break A}if(a instanceof A.n8){s=p.jL(a.a)
break A}if(a instanceof A.ky){s=p.a.a.e4(a.a).aj(new A.ta(),t.V)
break A}if(a instanceof A.n7){s=p.a.a.fF().aj(new A.tb(),t.V)
break A}if(a instanceof A.n5){s=p.a.a.iD().aj(new A.tc(),t.V)
break A}if(a instanceof A.me){s=p.a.a.fp().aj(new A.td(),t.V)
break A}if(a instanceof A.kX){s=p.a.a.e8(a.a,A.dx(0,a.b,0)).aj(new A.te(),t.V)
break A}if(a instanceof A.mq){s=p.a.a.ds(A.dx(0,a.a,0)).aj(new A.tf(),t.V)
break A}throw A.b(A.fQ(u.P))}return s},
hp(a,b){return this.rL(a,b)},
rL(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hp=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dx,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.po(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:s=9
return A.a(n.aR(j),$async$hp)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.v(A.x('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.Bw(j)
e=new A.a1("")
A.cg(e,g.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cW(c)
b.u(0,d)
b.p()
b=A.aq(c.a.a)
e=new A.a1("")
A.cg(e,f.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
a=A.cW(c)
a.u(0,d)
a.p()
if(b!==A.aq(c.a.a))throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.v(A.x('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a1("")
A.cg(e,h.c.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cW(c)
b.u(0,d)
b.p()
b=a0!==A.aq(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.q)(a1),++k
s=3
break
case 5:q=B.t
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
dH(a,b){var s,r,q,p=this.a.a,o=p.az(a)
if(b!=null){s=this.d5(b)
r=A.D2(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.v(A.x('Transaction session "'+b+'" has no executor.'))
return new A.fj(p,o,q.b,this.d5(b).r)}return new A.fj(p,o,null,null)},
pk(a){return this.dH(a,null)},
rq(a,b,c){return this.by(c,new A.rW(this,a,c,b),new A.rX())},
ba(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.dH(a,c),e=t.fC,d=new A.mg(f.a,f.b.a,f.c,A.l([],e),A.l([],e),A.l([],t.k),A.l([],t.fi),g,!1,g,!1,!1,g,!1,!1)
for(f=b.a,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s)d=this.oY(d,f[s])
for(f=b.b,e=f.length,r=t.N,q=t.X,p=t.d,s=0;s<f.length;f.length===e||(0,A.q)(f),++s){o=f[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
if(l.b===B.bc)n.push(A.m([l.a,l.c],r,q))}d=d.wU(n)}k=b.c
if(k!=null){f=A.AC(k)
d.jM(f)
A.BZ(f)
j=A.zM(f,!0)
i=d.fV()
i.d.push(new A.b_(j.a,j.b))
i.f.push(f)
d=i}for(f=b.d,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s,d=i){h=f[s]
q=h.a
d.cT(q)
i=d.fV()
i.r.push(new A.cm(q,h.b))}f=b.r
if(f!=null)d=d.lp(A.bE(f,!0,r))
if(b.w)d=d.pB(!0)
if(b.x)d=d.pC(!0)
if(b.f)d=d.pz(!0)
else{f=b.e
if(f!=null){if(f<0)A.v(A.aw("Limit must be non-negative, got "+A.r(f)+".",g))
d=d.pD(f)}}return d},
oY(a,b){var s
switch(b.b.a){case 0:return a.xQ(0,b.a,b.c)
case 1:return a.xY(0,b.a,b.c)
case 2:return a.xR(0,b.a,b.c)
case 3:return a.xS(0,b.a,b.c)
case 4:return a.xW(0,b.a,b.c)
case 5:return a.xX(0,b.a,b.c)
case 6:return a.xT(0,b.a,b.d)
case 7:s=b.d
if(s==null)s=B.m
if(s.length!==2)throw A.b(A.O("between requires exactly two values.",null))
return a.xN(0,b.a,new A.a4(s[0],s[1]))
case 8:return a.xZ(0,b.a,A.a6(b.c))
case 9:return a.xP(0,b.a,A.a6(b.c))
case 10:return a.xO(0,b.a,A.a6(b.c))
case 11:return a.xV(0,b.a,!0)
case 12:return a.xU(0,b.a,!0)}},
rN(a,b,c){return this.by(c,new A.rY(this,b,a,c),new A.rZ())},
tD(a,b,c){return this.by(c,new A.t1(this,a,c,b),new A.t2())},
p5(a,b){var s,r,q,p,o,n,m,l=this.d
if(l.a!==0)throw A.b(A.x("A transaction session is already active on this database."))
s="tx"+ ++this.f
r=$.C
q=t.D
p=t.h
o=new A.t(r,q)
n=new A.of(new A.aH(new A.t(r,q),p),new A.aH(o,p),A.l([],t.mc))
l.j(0,s,n)
m=this.a.a
l=new A.rV(n)
if(a){if(A.mW(m)!=null)A.v(A.x(u.L))
r=m.b
r===$&&A.A()
l=r.xb(l,t.H)}else{r=b===B.bm?B.aW:B.o
r=m.aY(l,r,t.H)
l=r}n.w!==$&&A.cy()
n.w=l
return o.aj(new A.rU(s),t.V)},
eW(a,b){return this.tM(a,b)},
tM(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eW=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d5(a)
for(l=h.e,k=A.Z(l).i("bU<1>"),l=new A.bU(l,k),l=new A.ar(l,l.gm(0),k.i("ar<V.E>")),k=k.i("V.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.v(A.x("Future already completed"))
j.aM(null)}h.f=!b
h.c.an()
p=4
l=h.w
l===$&&A.A()
s=7
return A.a(l,$async$eW)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.D(g) instanceof A.eZ){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.H(0,a)
s=n.pop()
break
case 6:q=B.t
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eW,r)},
hx(a,b){return this.tA(a,b)},
tA(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d5(a)
n=$.C
m=t.D
l=t.h
k=new A.t(n,m)
j=new A.hA(b,new A.aH(new A.t(n,m),l),new A.aH(k,l))
l=o.r.a0(new A.t0(j),t.H)
j.f!==$&&A.cy()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hx)
case 3:q=B.t
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hx,r)},
hw(a,b){return this.ty(a,b)},
ty(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hw=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d5(a).e
f=B.b.mX(g,new A.t_(b))
if(f<0)throw A.b(A.x('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.Z(g).i("bU<1>")
l=A.N(new A.bU(g,l),l.i("V.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bO(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.v(A.x("Future already completed"))
i.aM(null)
p=7
i=m.f
i===$&&A.A()
s=10
return A.a(i,$async$hw)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.D(e) instanceof A.eZ))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:B.b.kz(g,f,g.length)
q=B.t
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hw,r)},
hu(a,b){return this.tq(a,b)},
tq(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hu=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d5(a).e
j=A.D2(k)
if(j==null||j.a!==b)throw A.b(A.x('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.A()
s=7
return A.a(m,$async$hu)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.D(i) instanceof A.eZ)throw i
else throw i
s=6
break
case 3:s=2
break
case 6:k.pop()
q=B.t
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hu,r)},
hE(a,b){return this.ua(a,b)},
ua(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.az(a)
s=3
return A.a(p.pk(a).bV(b),$async$hE)
case 3:o="w"+ ++p.f
n=A.BO()
n.smS(new A.m1(l,b,m,B.aX).iQ().wA(new A.t3(p,o),new A.t4(p,n,o)))
p.e.j(0,o,n.bb())
q=A.bp(new A.jp(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
u9(a,b){var s=this,r="w"+ ++s.f,q=s.ba(a,b,null)
s.e.j(0,r,new A.mj(q,q.ge0(),B.aX).iQ().aU(new A.t5(s,r)))
return A.bp(new A.jp(r),t.V)},
jL(a){return this.u1(a)},
u1(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.e.H(0,a)
if(o!=null)o.D()
q=B.t
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jL,r)},
d5(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.x('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.x('Transaction session "'+a+'" is not ready yet.'))
return s},
hF(a,b,c){return this.ue(a,b,c)},
by(a,b,c){return this.hF(a,b,c,t.z)},
ue(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hF=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d5(a)
o=c
s=3
return A.a(b.$0(),$async$hF)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
p(){var s=0,r=A.h(t.H),q=this,p,o
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.e,o=new A.aS(p,p.r,p.e,A.n(p).i("aS<2>"))
case 2:if(!o.k()){s=3
break}s=4
return A.a(o.d.D(),$async$p)
case 4:s=2
break
case 3:p.a9(0)
p=q.c
p===$&&A.A()
p.D()
s=5
return A.a(q.a.a.p(),$async$p)
case 5:s=6
return A.a(q.b.p(),$async$p)
case 6:return A.e(null,r)}})
return A.f($async$p,r)}}
A.t6.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cH(r,t.N,t.X)
s=a.f
s=s==null?null:A.cH(s,t.N,t.X)
this.a.b.u(0,new A.kW(a.a,a.b,a.c,a.d,r,s,A.d1(a.r,t.N)))},
$S:188}
A.t7.prototype={
$1(a){return B.t},
$S:16}
A.t8.prototype={
$0(){var s=this.a
return this.b.dH(s.c,s.a).bV(s.b)},
$S:191}
A.t9.prototype={
$1(a){return new A.fU(a)},
$S:206}
A.tg.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dH(o.c,o.a).bV(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.q)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:207}
A.th.prototype={
$1(a){return new A.fV(a)},
$S:211}
A.ti.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).hR()},
$S:54}
A.tj.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).hT(s.c)},
$S:54}
A.tk.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).hY(s.c)},
$S:236}
A.tl.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).ig()},
$S:55}
A.tm.prototype={
$0(){var s=this,r=s.a
switch(r.d.a){case 0:r=s.b.ba(r.e,r.b,r.a).cS("SUM",r.c)
break
case 1:r=s.b.ba(r.e,r.b,r.a).cS("AVG",r.c)
break
case 2:r=s.b.ba(r.e,r.b,r.a).cS("MIN",r.c)
break
case 3:r=s.b.ba(r.e,r.b,r.a).cS("MAX",r.c)
break
default:r=null}return r},
$S:73}
A.tn.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).i_()},
$S:74}
A.ta.prototype={
$1(a){return B.t},
$S:16}
A.tb.prototype={
$1(a){return B.t},
$S:16}
A.tc.prototype={
$1(a){return B.t},
$S:16}
A.td.prototype={
$1(a){return new A.fM(a)},
$S:75}
A.te.prototype={
$1(a){return new A.fk(a)},
$S:76}
A.tf.prototype={
$1(a){return B.t},
$S:16}
A.rW.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dH(p.b,a1)
a0.a.a.c===$&&A.A()
o=p.d
n=o instanceof A.iM
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.iu(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.hA(B.Z,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.p
q=a0
s=1
break
case 4:n=o instanceof A.iP
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.np(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.hA(B.a_,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.p
q=a0
s=1
break
case 11:k=o instanceof A.iN
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.nb(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.lX(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 18:k=o instanceof A.iQ
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nq(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bv(i,B.a_),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iJ
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.n8(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cr(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.iK
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.n9(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.eL(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.N(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iI
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mu(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.hz(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.iO
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.nj(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.hz(B.E,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.iL
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.ku(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.d3(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.fQ(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:55}
A.rX.prototype={
$1(a){return new A.fD(a)},
$S:77}
A.rY.prototype={
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
return A.a(o.ba(n,l,m).pE(!0,k).c9(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.ba(n,l,m).pA(k).c9(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.ba(p.c,l,p.d).c9()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:78}
A.rZ.prototype={
$1(a){return new A.fP(a.a,a.d,a.e,a.b,a.c)},
$S:79}
A.t1.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dH(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.vB(m,l,o.c,n.a)
if(l.w==null)A.v(A.r9('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.v(A.r9(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.v(A.aw("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.c9()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:71}
A.t2.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.mu(r.a,r.b))}return new A.fX(q)},
$S:81}
A.rV.prototype={
nD(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nD(a)},
$S:4}
A.rU.prototype={
$1(a){return new A.h8(this.a)},
$S:83}
A.t0.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.H),q=this,p
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
A.t_.prototype={
$1(a){return a.a===this.a},
$S:84}
A.t3.prototype={
$1(a){var s=a==null?B.b5:A.l([a],t.d)
this.a.b.u(0,new A.jo(this.b,s))},
$S:85}
A.t4.prototype={
$1(a){this.b.bb().D()
this.a.e.H(0,this.c)},
$S:27}
A.t5.prototype={
$1(a){this.a.b.u(0,new A.jo(this.b,a))},
$S:86}
A.nQ.prototype={}
A.u_.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:61}
A.u0.prototype={
$2(a,b){return B.c.Z(a.a,b.a)},
$S:88}
A.tX.prototype={
$1(a){return a.h(0,"name")},
$S:42}
A.tZ.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.ax,j=j.ay,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.cf(k,p,i,j)
n=o
A.HI(k,n)
g=J.S(o,"id")
g.toString
A.G(g)
m=A.dn(k,J.w(J.S(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aE(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:48}
A.m8.prototype={
x9(a){if(a>this.w)this.w=a},
ne(){return this.f++}}
A.d6.prototype={}
A.a9.prototype={}
A.c4.prototype={}
A.dt.prototype={}
A.cY.prototype={}
A.b_.prototype={}
A.cm.prototype={}
A.xZ.prototype={}
A.mg.prototype={
cu(a,b){var s=this.ge0(),r=this.c
if(r==null)return s.no(a,b)
s.y.ne()
return r.ag(a,b)},
c_(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bE(i.d,!0,h)
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
return new A.mg(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
fV(){var s=null
return this.c_(s,s,s,s,s,s,s,s,s)},
lp(a){var s=null
return this.c_(s,s,s,s,s,s,s,a,s)},
pB(a){var s=null
return this.c_(s,s,s,a,s,s,s,s,s)},
pC(a){var s=null
return this.c_(s,s,s,s,a,s,s,s,s)},
pz(a){var s=null
return this.c_(a,s,s,s,s,s,s,s,s)},
pD(a){var s=null
return this.c_(s,s,s,s,s,a,s,s,s)},
pF(a,b,c){var s=null
return this.c_(s,s,s,s,s,s,a,b,c)},
pE(a,b){var s=null
return this.c_(s,a,b,s,s,s,s,s,s)},
pA(a){var s=null
return this.c_(s,s,a,s,s,s,s,s,s)},
cT(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aR('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.aw('Unknown field "'+a+'" for query.',a))},
bg(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cT(a0)
s='"'+A.y(a0,'"','""')+'"'
r=A.l([],t.fC)
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
if(i)r.push(new A.b_(s+b,[A.kj(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b_(s+b,["%"+A.kj(a3)]))
g=a2!=null
if(g)r.push(new A.b_(s+b,["%"+A.kj(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b_(s+" IS NULL",B.m))
e=a8===!0
if(e)r.push(new A.b_(s+" IS NOT NULL",B.m))
d=this.fV()
B.b.C(d.d,r)
c=A.l([],t.k)
if(q)c.push(new A.a9(a0,"eq",[a4]))
if(p)c.push(new A.c4(new A.a9(a0,"eq",[b2])))
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
if(e)c.push(new A.c4(new A.a9(a0,"isNull",B.m)))
B.b.C(d.f,c)
return d},
xQ(a,b,c){var s=null
return this.bg(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xY(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xR(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xS(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xW(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xX(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xT(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
xN(a,b,c){var s=null
return this.bg(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xZ(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
xP(a,b,c){var s=null
return this.bg(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
xO(a,b,c){var s=null
return this.bg(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xV(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
xU(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
wU(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
p=A.l([],j)
q.a1(0,new A.vi(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.fV()
o.e.push(new A.b_("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.q)(a),++r){q=a[r]
if(q.gV(0)){m=A.l([],j)
for(l=q.gaa().gt(0);l.k();){k=l.gn()
m.push(new A.a9(k.a,"eq",[k.b]))}s.push(new A.dt(m))}}o.f.push(new A.cY(s))
return o},
jM(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.a9
r=s?a.a:l
if(s){this.cT(r)
break A}s=a instanceof A.c4
q=s?a.a:l
if(s){this.jM(q)
break A}p=a instanceof A.dt
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cY
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.q)(n),++m)this.jM(n[m])
break A}},
gcq(){var s,r=A.N(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga_(r).a!=="id"
else s=!1
if(s)r.push(B.cS)
return r},
glm(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gcq(),q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.push(new A.cm(o.a,!o.b))}}else s=this.gcq()
return s},
gme(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gcq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jC(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.Dd('Query on "'+this.gaQ()+'" requires .limit(n) or .all().'))
return s},
gaQ(){return this.b.a},
ge0(){return this.a},
eD(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
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
if(r!=null){n=f.pI(r)
m=f.lL(f.glm(),n.a)
d.push(m.a)
B.b.C(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.y(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.y(a,'"','""')+'"')+") AS v"}else r=f.gtF()
k=r}j=f.glm()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.vd(),A.Z(j).i("X<1,k>")).B(0,", ")
h=A.I1(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.ve(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jC():a3
g=e}return new A.a4(h+(g==null?"":" LIMIT "+A.r(g)),c)},
j2(a){return this.eD(null,null,!1,!1,a)},
pq(a,b){return this.eD(a,b,!1,!1,null)},
po(){return this.eD(null,null,!1,!1,null)},
pr(a,b,c){return this.eD(a,null,b,c,null)},
pp(a){return this.eD(null,null,!1,a,null)},
gtF(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.la())return"*"
o=A.N(o,t.N)
for(s=this.gcq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(!B.b.F(o,p))o.push(p)}return new A.X(o,A.Aa(),A.Z(o).i("X<1,k>")).B(0,", ")},
pI(a){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null
try{s=t.G.a(B.h.av(B.k.f0(B.ar.v(a)),null))
i=J.S(s,"store")
h=J.S(s,"schemaVer")
g=J.S(s,"shape")
q=t.lH
p=q.a(J.S(s,"sort"))
if(p==null)p=B.aj
f=A.bE(p,!0,t.N)
r=k.at?J.S(s,"pv"):J.S(s,"values")
q=q.a(r)
if(q==null)q=B.aj
e=A.bE(q,!0,t.X)}catch(o){q=A.Bz(j)
throw A.b(q)}n=k.gme()
q=k.b
if(!J.w(i,q.a)||!J.w(h,q.b)||!J.w(g,k.gmc())||!B.af.X(f,n)||J.ak(e)!==n.length)throw A.b(A.Bz("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=e,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bI(l)&&!A.ax(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.Bz(j))}return new A.xZ(e)},
gmc(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a5(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cE(a,new A.vf(a)),c=B.b.cE(b,new A.vg())
if(a.length>=2&&d&&!B.b.gG(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.q)(a),++q){p=a[q]
s.push('"'+A.y(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gG(a).b?"<":">"
return new A.a4("("+o+") "+n+" ("+B.b.B(A.ae(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.l([],s)
l=[]
for(k=0;k<a.length;++k){j=A.l([],s)
i=[]
g=0
for(;;){if(!(g<=k)){h=!0
break}r=a[g]
f='"'+A.y(r.a,'"','""')+'"'
e=b[g]
if(g===k)if(e==null){if(a[g].b){h=!1
break}j.push(f+" IS NOT NULL")}else{r=a[g].b
n=r?"<":">"
if(r)j.push("("+f+" "+n+" ? OR "+f+" IS NULL)")
else j.push(f+" "+n+" ?")
i.push(e)}else if(e==null)j.push(f+" IS NULL")
else{j.push(f+" = ?")
i.push(e)}++g}if(h){m.push("("+B.b.B(j," AND ")+")")
B.b.C(l,i)}}if(m.length===0)return B.d7
return new A.a4("("+B.b.B(m," OR ")+")",l)},
lM(a,b){var s,r,q,p=this,o=p.gcq(),n=p.b,m=p.gme(),l=p.gmc(),k=[]
for(s=o.length,r=0;q=o.length,r<q;o.length===s||(0,A.q)(o),++r)k.push(a.h(0,o[r].a))
s=[]
for(r=0;r<o.length;o.length===q||(0,A.q)(o),++r)s.push(b.h(0,o[r].a))
n=B.e.v(B.h.a5(A.m(["store",n.a,"schemaVer",n.b,"sort",m,"shape",l,"values",k,"pv",s],t.N,t.K),null))
return B.bv.gf5().v(n)},
ea(a){return this.vO(a)},
c9(){return this.ea(null)},
vO(a8){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ea=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a7=a8==null?p.jC():a8
if(a7===0){q=B.cT
s=1
break}o=a7==null
n=p.j2(o?null:a7+1)
s=3
return A.a(p.cu(n.a,n.b),$async$ea)
case 3:m=b0
l=!o&&J.ak(m)>a7
k=o?m:J.AY(m,a7).eu(0)
o=p.y
j=o!=null
i=j&&p.la()
h=p.b
if(i){i=A.N(o,t.N)
B.b.C(i,p.t3())
g=A.Lx(h,k,p.ge0().ax,i,p.ge0().ay)}else g=A.Lw(h,k,p.ge0().ax,p.ge0().ay)
i=p.at
if(i&&g.length!==0){h=A.Z(g).i("bU<1>")
f=A.N(new A.bU(g,h),h.i("V.E"))
B.b.a9(g)
B.b.C(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hq(g),$async$ea)
case 7:e=b0
d=l
l=e
s=5
break
case 6:d=p.as!=null&&g.length!==0
case 5:c=A.l([],t.d)
for(i=g.length,h=t.N,b=t.X,a=0;a0=g.length,a<a0;g.length===i||(0,A.q)(g),++a){a1=g[a]
if(j){a0=A.u(h,b)
for(a2=o.length,a3=0;a3<o.length;o.length===a2||(0,A.q)(o),++a3){a4=o[a3]
if(a1.I(a4))a0.j(0,a4,a1.h(0,a4))}c.push(a0)}else c.push(a1)}if(a0!==0){a5=l?p.lM(B.b.ga_(g),B.b.gG(g)):null
a6=d?p.lM(B.b.ga_(g),B.b.gG(g)):null}else{a5=null
a6=null}q=new A.co(c,a5,a6,l,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ea,r)},
hq(a){return this.rY(a)},
rY(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga_(a)
e=p.gcq()
n=[]
for(m=p.gcq(),l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k)n.push(o.h(0,m[k].a))
j=p.lL(e,n)
e=t.s
i=A.l([],e)
h=[]
g=A.l([],e)
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
return A.a(p.cu("SELECT 1 FROM "+('"'+A.y(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hq)
case 3:q=d.ea(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
la(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.f9(o)==null)return!1}return!0},
t3(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gcq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hR(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pp(!0)
m=A
s=3
return A.a(p.cu(o.a,o.b),$async$hR)
case 3:n=m.f6(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
hT(a){return this.uN(a)},
uN(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cT(a)
o=p.pr(a,!0,!0)
m=A
s=3
return A.a(p.cu(o.a,o.b),$async$hT)
case 3:n=m.f6(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
hY(a){return this.vt(a)},
vt(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cT(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pF(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.j2(h)
o=[]
f=J
s=3
return A.a(i.cu(B.a.kB(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hY)
case 3:n=f.E(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hY,r)},
rj(a){var s,r,q=this.b.f9(a)
if(q==null)return!1
s=q.b
A:{r=B.R===s||B.S===s||B.B===s||B.T===s
break A}return r},
cS(a,b){return this.oX(a,b)},
oX(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cT(b)
if(!p.rj(b))throw A.b(A.aw('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pq(b,a)
s=3
return A.a(p.cu(o.a,o.b),$async$cS)
case 3:n=d
m=J.L(n)
q=A.Eu(m.gE(n)?null:J.S(m.gG(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cS,r)},
ig(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$ig=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lp(A.l(["id"],m))
k=l.po()
s=3
return A.a(l.cu(k.a,k.b),$async$ig)
case 3:j=b
m=A.l([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.G(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ig,r)},
i_(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$i_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.j2(p.jC())
n=J
s=3
return A.a(p.cu("EXPLAIN QUERY PLAN "+o.a,o.b),$async$i_)
case 3:q=n.b3(b,new A.vh(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i_,r)}}
A.vi.prototype={
$2(a,b){this.a.cT(a)
this.b.push('"'+A.y(a,'"','""')+'" = ?')
this.c.push(b)},
$S:89}
A.vd.prototype={
$1(a){var s=A.y(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:90}
A.ve.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.y(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:91}
A.vf.prototype={
$1(a){return a.b===B.b.gG(this.a).b},
$S:92}
A.vg.prototype={
$1(a){return a!=null},
$S:17}
A.vh.prototype={
$1(a){return a.h(0,"detail")},
$S:42}
A.cL.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cL&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gJ(a){return A.c5(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.vB.prototype={
tE(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.Dd('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
c9(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$c9=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a4=n.d
if(B.a.ci(a4).length===0){q=B.cy
s=1
break}m=n.a
if(m==null)throw A.b(A.x("A compile-only SearchBuilder cannot execute fetch()."))
l=null
k=null
e=n.b
d=e.w
c=d.c.el(a4)
A.Ic(c)
if(d.b)A.Ib(c)
b=e.a
a=b+"_fts"
a0=A.l(['"'+A.y(a,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a0.push("b.archived = 0")
if(!n.w)a0.push("b.hidden = 0")
a4=B.b.B(a0," AND ")
a1=n.tE()
a2=a1==null?"":" LIMIT "+A.r(a1)
e=A.y(a,'"','""')
d=A.y(b,'"','""')
l="SELECT b.id, rank AS score FROM "+('"'+e+'"')+" JOIN "+('"'+d+'"')+" b ON b.rowid = "+('"'+A.y(a,'"','""')+'"')+".rowid"+(" WHERE "+a4)+" ORDER BY rank"+a2
k=[c]
p=4
j=n.c
s=j==null?7:9
break
case 7:s=10
return A.a(m.no(l,k),$async$c9)
case 10:s=8
break
case 9:s=11
return A.a(j.ag(l,k),$async$c9)
case 11:case 8:i=a7
h=A.l([],t.kj)
for(a4=J.E(i);a4.k();){g=a4.gn()
e=J.S(g,"id")
e.toString
A.G(e)
d=J.S(g,"score")
d.toString
J.aL(h,new A.cL(e,A.Et(d)))}q=h
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
h=A.D(a5)
if(h instanceof A.c7){f=h
throw A.b(A.aw("Invalid search term: "+f.a,null))}else throw a5
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c9,r)}}
A.c3.prototype={
a3(){return"FieldKind."+this.b}}
A.aX.prototype={
gkW(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aw===s||B.I===s||B.U===s||B.V===s||B.J===s){r="TEXT"
break A}if(B.R===s||B.B===s||B.T===s){r="INTEGER"
break A}if(B.S===s){r="REAL"
break A}throw A.b(A.fQ(u.P))}return r},
q(){var s,r=this,q=A.u(t.N,t.X)
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
A.qX.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fr(B.cv,A.G(m))
m=n.h(0,"name")
m.toString
A.G(m)
r=J.w(n.h(0,"required"),!0)
q=J.w(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aX(m,B.aw,r,J.w(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aX(m,B.R,r,!1,q,o,o,!1)
case 2:return new A.aX(m,B.S,r,!1,q,o,o,!1)
case 3:return new A.aX(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aX(m,B.T,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aX(m,B.I,r,!1,!1,A.d2(J.oO(t.j.a(n),p),p),o,!1)
case 6:return new A.aX(m,B.U,!1,!1,q,o,o,!1)
case 7:return new A.aX(m,B.V,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aX(m,B.J,!1,!1,!1,o,A.G(p),J.w(n.h(0,"enforceFk"),!0))}},
$S:93}
A.it.prototype={
a3(){return"IndexScope."+this.b}}
A.dC.prototype={
q(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.rG.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.oO(t.j.a(q),t.N)
s=J.w(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dC(q,s,A.fr(B.cq,A.G(r)))},
$S:94}
A.fv.prototype={
q(){var s,r=t.N,q=t.X,p=A.u(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gV(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fv&&r.b===b.b&&B.af.X(r.a,b.a)&&r.c.R(0,b.c)
else s=!0
return s},
gJ(a){return A.c5(A.ua(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.r8.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.oO(t.j.a(p),s)
r=J.w(r.h(0,"fuzzy"),!0)
return new A.fv(p,r,t.f.b(q)?A.He(q.c4(0,s,t.X)):B.c5)},
$S:95}
A.ep.prototype={
el(a){var s,r,q,p
for(s=this.a.gaa(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.F(r,p))continue
q=q.b
r=A.y(r,p,q)}return r},
q(){return A.m(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.ep&&A.Hd(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gK(),n=A.N(o,A.n(o).i("o.E"))
B.b.aG(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.q)(n),++r){q=n[r]
o.push(A.c5(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.ua(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.r7.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.u(s,s)
for(o=t.d2.a(o).gaa(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.G(p)
q=q.b
q.toString
A.G(q)
A.CY(p,q)
r.j(0,p,q)}return new A.ep(A.GV(r,s,s))},
$S:96}
A.c8.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].q())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.vR.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.an(o)
s=J.w(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.CT(q.a(p.gn())))
return new A.c8(o,s,r)},
$S:97}
A.u1.prototype={
a3(){return"MissingRemotePolicy."+this.b}}
A.pS.prototype={}
A.c0.prototype={
gdc(){var s,r,q,p,o=this,n=$.FN()
A.B5(o)
s=n.a.get(o)
if(s==null){s=A.aO(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
f9(a){var s,r,q,p,o,n=this,m=$.FO()
A.B5(n)
s=m.a.get(n)
if(s==null){s=A.u(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.S(m,a)},
q(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.u(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o)r.push(q[o].q())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.w
if(l!=null)j.j(0,"fts",l.q())
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.q)(k),++o)l.push(k[o].q())
j.j(0,"migrations",l)
return j}}
A.pp.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.G(j)
s=k.h(0,"version")
s.toString
A.an(s)
r=A.l([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.CT(o.a(q.gn())))
q=A.l([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.Hn(o.a(n.gn())))
p=J.w(k.h(0,"keepUnsyncedArchives"),!0)
n=J.w(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.Hf(o.a(m))}else m=null
l=A.l([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.E(k==null?B.aj:k)
while(k.k())l.push(A.Im(o.a(k.gn())))
return new A.c0(j,s,r,q,n,p,m,l,this.b.i("c0<0>"))},
$S(){return this.b.i("c0<0>()")}}
A.mt.prototype={
q(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.vx.prototype={
$1(a){return!1},
$S:61}
A.vy.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:12}
A.vz.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.eB)},
$S:63}
A.vA.prototype={
$1(a){return J.a_(a)},
$S:99}
A.u5.prototype={}
A.dM.prototype={
a3(){return"MutationAction."+this.b}}
A.co.prototype={}
A.fj.prototype={
gbm(){var s=this.c
return s==null?this.a.r:s},
gaQ(){return this.b.a.a},
eF(){var s=this.d
if(s!=null&&s.e){s=this.gaQ()
throw A.b(new A.fR('Cannot mutate "'+s+'" through a read-only Tx.'))}},
iu(a){var s=this
if(s.d!=null)return s.hA(B.Z,a)
return s.a.aY(new A.pD(s,a),B.o,t.H)},
np(a){var s=this
if(s.d!=null)return s.hA(B.a_,a)
return s.a.aY(new A.pG(s,a),B.o,t.H)},
nb(a){var s=this
if(s.d!=null)return s.lX(a)
return s.a.aY(new A.pC(s,a),B.o,t.H)},
nq(a){var s=this
if(s.d!=null)return s.bv(a,B.a_)
return s.a.aY(new A.pF(s,a),B.o,t.H)},
n8(a,b){var s=this
if(s.d!=null)return s.rP(a,b)
return s.a.aY(new A.pA(s,a,b),B.o,t.H)},
n9(a){var s=this
if(s.d!=null)return s.eL(a)
return s.a.aY(new A.pz(s,a),B.o,t.H)},
eL(a){return this.rR(a)},
rR(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$eL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eF()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aN(a,o.i("aN<1,2>")).gt(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cr(m.a,m.b,!0),$async$eL)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aO(t.N)
for(o=new A.bD(a,a.r,a.e,o.i("bD<1>"));o.k();)l.u(0,o.d)
n.Y(new A.a0(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
mu(a){var s=this
if(s.d!=null)return s.hz(B.C,a)
return s.a.aY(new A.py(s,a),B.o,t.H)},
nj(a){var s=this
if(s.d!=null)return s.hz(B.E,a)
return s.a.aY(new A.pE(s,a),B.o,t.H)},
ku(a){var s=this
if(s.d!=null)return s.d3(a)
return s.a.aY(new A.pB(s,a),B.o,t.H)},
d3(a){return this.t4(a)},
t4(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eF()
s=2
return A.a(q.dZ(a),$async$d3)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cz(n,m,a,!0),$async$d3)
case 3:s=4
return A.a(n.W(m,"id = ?",[a]),$async$d3)
case 4:l=t.N
o.Y(new A.a0(m,A.ap([a],l)))
if(p!=null){l=A.d1(p.gK(),l)
l.H(0,"id")
o.bd(new A.aT(m,a,B.H,B.aV,p,null,l))}return A.e(null,r)}})
return A.f($async$d3,r)},
cr(a,b,c){return this.rQ(a,b,c)},
rP(a,b){return this.cr(a,b,!1)},
rQ(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eF()
s=3
return A.a(p.gbm().ag("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cr)
case 3:o=e
n=J.L(o)
if(n.gV(o)){m=n.gG(o)
l=A.jl(m)
k=m.h(0,"o_kind")!=null?A.m4(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eM(a,b,l,k,c),$async$cr)
case 6:s=1
break
case 5:s=7
return A.a(p.d0(a,b,c,k,l),$async$cr)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cr,r)},
d0(a,b,c,d,e){return this.pZ(a,b,c,d,e)},
pZ(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dZ(a),$async$d0)
case 2:m=g
if(m==null)throw A.b(A.Bu("No record "+q.gaQ()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cH(m,p,o)
n.C(0,b)
o=A.u(p,o)
o.j(0,"id",a)
o.C(0,n)
s=3
return A.a(q.aN(B.K,c,m,a,d,e,o),$async$d0)
case 3:return A.e(null,r)}})
return A.f($async$d0,r)},
eM(a,b,c,d,e){return this.rS(a,b,c,d,e)},
rS(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eM=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.av(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.d0(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.w(i,a7)){q=n.d0(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.cH(a5,h,g)
f.C(0,a8)
m=f
J.bZ(m,"id",a7)
e=new A.a1("")
f=n.b
d=f.a
c=A.A2(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cH(m,h,g)
b.H(0,"id")
n.hB(a7,b,a,c)
a0=n.lv(a5,m,B.K)
l=null
b=a0.length===1&&d.gdc().F(0,B.b.gap(a0))
a1=n.a
a2=a1.ax
a3=a1.ay
if(b){a4=d.f9(B.b.gap(a0))
b=a4.a
l=A.m([b,A.Fi(d,a4,J.S(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dn(d,J.w(J.S(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbm().L(d.a,l,"id = ?",[a7]),$async$eM)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.D(a6)
h=A.FI(k,m)
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
return A.a(g.bp(B.K,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$eM)
case 8:if(!b1){g=n.d
if(g!=null)g.Y(new A.a0(d.a,A.ap([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bd(new A.aT(d.a,a7,B.H,B.A,a5,m,A.tv(a0,A.Z(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eM,r)},
aN(a,b,c,d,e,f,g){return this.rr(a,b,c,d,e,f,g)},
hA(a,b){var s=null
return this.aN(a,!1,s,s,s,s,b)},
hz(a,b){var s=null
return this.aN(a,!1,s,b,s,s,s)},
tU(a,b,c){var s=null
return this.aN(a,b,s,s,s,s,c)},
tV(a,b,c,d,e,f){return this.aN(a,b,c,null,d,e,f)},
rr(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aN=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eF()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.pt(b5,n,c2,c1)
s=b7===B.Z?3:5
break
case 3:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.hT()
g=$.oM()
if(!g.b.test(h))throw A.b(A.aw('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aN)
case 6:l=n.eI(c3,m)
b7=b5.a==null?B.b6:B.K
s=4
break
case 5:s=b7===B.K?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aN)
case 10:if(b5.a==null)throw A.b(A.Bu("No record "+n.gaQ()+"/"+A.r(m)+" to update."))
c3.toString
l=n.eI(c3,m)
s=8
break
case 9:s=b7===B.a_?11:13
break
case 11:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.hT()
g=$.oM()
if(!g.b.test(h))throw A.b(A.aw('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aN)
case 14:g=b5.a
if(g==null){l=n.eI(c3,m)
b7=B.b6}else{l=A.cH(g,t.N,t.X)
for(g=new A.aN(c3,A.n(c3).i("aN<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.bZ(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aN)
case 15:g=b5.a
if(g==null)throw A.b(A.Bu("No record "+n.gaQ()+"/"+A.r(m)+" to archive/restore."))
g=A.cH(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a1("")
g=n.b
e=g.a
c=l
b=A.A2(d,e,c,J.ak(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hB(m,l,a,b)
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
return A.a(c.bS(n.gbm(),e.a,m),$async$aN)
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
return A.a(c.ep(n.gbm(),e.a,m),$async$aN)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a4)throw A.b(A.CN("Record "+n.gaQ()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ai(A.bf(e,a3))
a2=A.aq(B.l.v(B.e.v(a6)).a)
a7=new A.p5(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ax
a8=a3.ay
a9=A.dn(e,J.w(J.S(l,"archived"),!0),a4,a8,c,a2)
b0=n.lv(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gdc().F(0,B.b.gap(b0))){b1=e.f9(B.b.gap(b0))
c=b1.a
k=A.m([c,A.Fi(e,b1,J.S(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
s=b5.a==null?34:36
break
case 34:s=37
return A.a(n.gbm().aE(0,c,k),$async$aN)
case 37:s=35
break
case 36:s=38
return A.a(n.gbm().L(c,k,"id = ?",[m]),$async$aN)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.D(b6)
g=A.FI(j,l)
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
return A.a(c.bp(b7,a7,b0,a2,a3,l,a4,a1,a,a9,a0,g),$async$aN)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.ab:B.A
break
case 3:b3=B.A
break
case 4:b3=B.bT
break
case 5:b3=B.bU
break
default:b3=null}if(b7===B.C||b7===B.E)b4=A.ap(["archived"],t.N)
else if(b5.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("aj<o.E>")
b4=A.d1(new A.aj(new A.T(g,c),new A.ps(),a2),a2.i("o.E"))}else b4=A.tv(b0,A.Z(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bd(new A.aT(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.Y(new A.a0(e.a,A.ap([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aN,r)},
bv(a,b){return this.tc(a,b)},
lX(a){return this.bv(a,B.Z)},
tc(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bv=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eF()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.l([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.q)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a6(a0)
a2=a1?A.hT():a0
a1=$.oM()
if(!a1.b.test(a2))throw A.b(A.aw('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aL(l,new A.a4(a2,a))}if(!c){a3=A.u(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ao(a3,a3.$ti.i("ao<2>")).bM(0,new A.px())}else a5=!1
s=c3===B.Z&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dX(m,l),$async$bv)
case 9:k=A.aO(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aL(k,i)}g.Y(new A.a0(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.D(c0) instanceof A.hi))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.u(k,t.G)
j=n.a,d=j.ax,j=j.ay,a1=t.s,a8=0
case 10:if(!(a8<J.ak(l))){s=12
break}a9=a8+2000
b0=B.c.bN(a9,0,J.ak(l))
a4=A.l([],a1)
for(b1=J.GB(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.q)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.cg(e,"id IN ("+B.b.B(A.ae(a4.length,"?",!1,k),", ")+")",a4),$async$bv)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.G(b2),A.cf(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.u(k,t.nw)
b4=A.u(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.N(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bN(a9,0,j))
b7=B.b.B(A.ae(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.C(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.cg("lp_sync_row",f,j),$async$bv)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.G(b1),A.jl(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.cg("lp_outbox",f,j),$async$bv)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.G(d),A.m4(f))
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
s=b8.F(0,a2)?28:30
break
case 28:a1=A.dH(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.tU(c3,!0,a1),$async$bv)
case 31:s=29
break
case 30:a1=A.dH(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.tV(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bv)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.q)(j),++b
s=25
break
case 27:g.Y(new A.a0(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bv,r)},
dX(a,b){return this.td(a,b)},
td(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dX=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a3=n.a
a4=a3.r
s=a4 instanceof A.ig?3:4
break
case 3:s=5
return A.a(n.dY(a6,a7),$async$dX)
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
return A.a(n.eB(a6,a4,h,g,m),$async$dX)
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
s=A.D(a5) instanceof A.c7?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aL(d,a7[c].a)
b=d
s=17
return A.a(n.cZ(a6,b),$async$dX)
case 17:throw A.b(new A.hi())
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
a3.bd(new A.aT(a,a2.a,B.H,B.ab,null,e,J.Cx(e.gK(),new A.pw()).fD(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dX,r)},
dY(a,b){return this.te(a,b)},
te(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dY=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.ch.$0()
d1=c9.r
d2=t.s
d3=A.l(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.q)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.hX(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.hX(B.X)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.hX(B.W)+") VALUES "
j=new A.pv()
b1=new A.a1("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.l([],t.jO):null
i=0,a9=b3==null,b4=c9.ax,b5=c9.ay,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bN(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eI(c2,c1):c2
b1.a=""
c4=A.A2(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hB(c1,c3,c5,c4)
A.KT(f,c8,J.w(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.CW
b7===$&&A.A()
c6=b7.fJ()
A.F5(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.F6(d,B.a5,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a4(c1,c3))}c=!1
b=!1
q=6
b7=d1.cj(A.r(m)+A.r(j.$2(J.ak(n),g)))
if(b7.r||b7.b.r)A.v(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bP(f))
b7.h_()
c=!0
b7=d1.cj(A.r(l)+A.r(j.$2(11,g)))
if(b7.r||b7.b.r)A.v(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bP(e))
b7.h_()
b=!0
b7=d1.cj(A.r(k)+A.r(j.$2(16,g)))
if(b7.r||b7.b.r)A.v(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bP(d))
b7.h_()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.D(d4) instanceof A.c7?9:11
break
case 9:a=A.l([],d2)
for(a0=0;a0<i;++a0)J.aL(a,d6[a0].a)
a1=a
s=12
return A.a(o.cZ(d5,a1),$async$dY)
case 12:s=c||b?13:14
break
case 13:a2=A.l([],d2)
for(a3=i;a3<h;++a3)J.aL(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.ae(J.ak(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.W(d3,"id IN ("+A.r(a5)+")",a4),$async$dY)
case 17:case 16:s=b?18:19
break
case 18:a6=A.l([d3],d2)
J.AU(a6,a4)
a7=a6
s=20
return A.a(d5.W("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dY)
case 20:case 19:case 14:throw A.b(new A.hi())
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
a8.bd(new A.aT(d3,a2.a,B.H,B.ab,null,c3,J.Cx(c3.gK(),new A.pu()).fD(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dY,r)},
eB(a,b,c,d,e){return this.p0(a,b,c,d,e)},
p0(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eB=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eI(b1,b0)
a3=new A.a1("")
a4=A.A2(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hB(b0,a2,a6,a4)
a5=n.a
m=A.dn(a1,J.w(a2.h(0,"archived"),!0),a5.ax,a5.ay,b0,a2)
a5=a5.CW
a5===$&&A.A()
e=a5.fJ()
a5=a1.a
l=A.F8("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.Ld('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dJ(new A.T(d,c),new A.pq(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.ae(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=a9.cj(f)
d=m
a=A.n(d).i("ao<2>")
d=A.N(new A.ao(d,a),a.i("o.E"))
c.e9(new A.bP(d))
j=!0
a9.cj("INSERT INTO lp_outbox ("+A.hX(B.X)+") VALUES ("+B.b.B(A.ae(11,"?",!1,b),", ")+")").e9(new A.bP(A.FC(l,B.X)))
i=!0
a9.cj("INSERT INTO lp_sync_row ("+A.hX(B.W)+") VALUES ("+B.b.B(A.ae(16,"?",!1,b),", ")+")").e9(new A.bP(A.FC(k,B.W)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.W(a5,"id = ?",[b0]),$async$eB)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.W("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$eB)
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
return A.f($async$eB,r)},
cZ(a,b){return this.pK(a,b)},
pK(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$cZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.ae(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.W(m,"id IN ("+o+")",b),$async$cZ)
case 3:m=A.l([m],t.s)
B.b.C(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.W("lp_outbox",n,m),$async$cZ)
case 4:s=5
return A.a(a.W("lp_sync_row",n,m),$async$cZ)
case 5:case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
eI(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=a.gaa(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.kv("archived",new A.pr())
return p},
lv(a,b,c){var s,r,q,p,o
if(a==null)return B.cC
s=t.N
r=A.aO(s)
s=A.d1(a.gK(),s)
s.C(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hv(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.r.X(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.N(r,r.$ti.c)
B.b.aG(o)
return o},
dZ(a){return this.ti(a)},
ti(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbm().ag('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dZ)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=p.a
q=A.cf(n,l.gG(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
hr(a){return this.rZ(a)},
rZ(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbm().ag('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hr)
case 3:j=c
k=J.L(j)
if(k.gE(j)){q=B.d9
s=1
break}o=k.gG(j)
k=p.a
n=A.cf(l,o,k.ax,k.ay)
m=o.h(0,"s_sync_state")!=null?A.jl(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eX(n,m,o.h(0,"o_kind")!=null?A.m4(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
bV(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.d==null
if(g&&p.b.e.a.I(a)){q=p.b.e.bV(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
s=m>1?3:5
break
case 3:s=6
return A.a(p.gbm().ag("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bV)
case 6:s=4
break
case 5:s=7
return A.a(p.gbm().ag('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bV)
case 7:case 4:k=c
l=J.L(k)
if(l.gE(k)){if(g)o.e.kT(a,null)
q=null
s=1
break}j=l.gG(k)
l=p.a
i=A.cf(n,j,l.ax,l.ay)
h=A.bd(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.KU(n,i,h,m)
if(g)o.e.kT(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
hB(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.aw('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.Ca(p,n)
if(m!=null)throw A.b(A.aw(A.GQ(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.aw("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.pD.prototype={
$1(a){return a.c5(this.a.b.a.a).iu(this.b)},
$S:4}
A.pG.prototype={
$1(a){return a.c5(this.a.b.a.a).np(this.b)},
$S:4}
A.pC.prototype={
$1(a){return a.c5(this.a.b.a.a).nb(this.b)},
$S:4}
A.pF.prototype={
$1(a){return a.c5(this.a.b.a.a).nq(this.b)},
$S:4}
A.pA.prototype={
$1(a){return a.c5(this.a.b.a.a).n8(this.b,this.c)},
$S:4}
A.pz.prototype={
$1(a){return a.c5(this.a.b.a.a).n9(this.b)},
$S:4}
A.py.prototype={
$1(a){return a.c5(this.a.b.a.a).mu(this.b)},
$S:4}
A.pE.prototype={
$1(a){return a.c5(this.a.b.a.a).nj(this.b)},
$S:4}
A.pB.prototype={
$1(a){return a.c5(this.a.b.a.a).ku(this.b)},
$S:4}
A.pt.prototype={
nw(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
$1(a){return this.nw(a)},
$S:100}
A.ps.prototype={
$1(a){return a!=="id"},
$S:9}
A.px.prototype={
$1(a){return a>1},
$S:101}
A.pw.prototype={
$1(a){return a!=="id"},
$S:9}
A.pv.prototype={
$2(a,b){var s=t.N
return B.b.B(A.ae(b,"("+B.b.B(A.ae(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:102}
A.pu.prototype={
$1(a){return a!=="id"},
$S:9}
A.pq.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.pr.prototype={
$0(){return!1},
$S:64}
A.hi.prototype={$iH:1}
A.nx.prototype={}
A.bF.prototype={
Y(a){this.c.push(a)
this.a.y.r+=a.b.a},
bd(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
c5(a){var s=this.a
return new A.fj(s,s.az(a),this.b,this)},
a0(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.x("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cB(o,a,b)},
cB(a,b,c){return this.ud(a,b,c,c)},
ud(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cB=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cB)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.y
k=e.r
p=5
d=A.BF(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.oI(new A.wo(a3,j,a4),null,A.m([$.ks(),j],f,f),a4.i("z<0>")),$async$cB)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cB)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cB)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cB)
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
if(a>m)B.b.kz(h,m,a)
a=g.length
if(a>l)B.b.kz(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cB,r)}}
A.wo.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("z<0>()")}}
A.z0.prototype={}
A.mj.prototype={
kV(a){return a.a===this.w.b.a},
f8(){var s=this.w
return s.ea(s.w==null&&!s.x?50:null).aj(new A.vq(),t.J)},
mD(a){return A.Li(a,new A.vp(this),this.w.r.length!==0)},
n7(a){var s=this.x
return s==null?null:s.u(0,a)},
kp(a,b){var s=this.x
return s==null?null:s.bz(a,b)},
iQ(){var s=this.x=A.vS(this.gk_(),new A.vr(this),null,!1,t.J)
return new A.b7(s,A.n(s).i("b7<1>"))},
f2(){this.l0()
var s=this.x
if(s!=null)s.p()}}
A.vq.prototype={
$1(a){return a.a},
$S:104}
A.vp.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.vr.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aB()
s=2
return A.a(p.e_(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.m1.prototype={
kV(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.F(0,this.x))return!1
return!0},
f8(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.r.aK(n.a,1,"id = ?",[p.x]),$async$f8)
case 3:m=b
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}q=A.cf(n,l.gG(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f8,r)},
mD(a){return a==null?"<null>":A.aq(B.l.v(B.e.v(A.ai(a))).a)},
n7(a){var s=this.y
return s==null?null:s.u(0,a)},
kp(a,b){var s=this.y
return s==null?null:s.bz(a,b)},
iQ(){var s=this.y=A.vS(this.gk_(),new A.ub(this),null,!1,t.b)
return new A.b7(s,A.n(s).i("b7<1>"))},
f2(){this.l0()
var s=this.y
if(s!=null)s.p()}}
A.ub.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aB()
s=2
return A.a(p.e_(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.fi.prototype={
kp(a,b){},
aB(){var s=this.a.a$.a
this.c=new A.b0(s,A.n(s).i("b0<1>")).aU(this.grw())},
rz(a){var s,r=this
if(!r.kV(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.D()
r.d=A.cP(r.b,r.gm0())},
e_(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$e_=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.f8(),$async$e_)
case 6:m=b
l=n.mD(m)
if(!J.w(l,n.r)){n.r=l;++i.z
n.n7(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.D(g)
j=A.ag(g)
n.kp(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.D()
n.d=A.cP(n.b,n.gm0())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e_,r)},
f2(){var s=this.d
if(s!=null)s.D()
s=this.c
if(s!=null)s.D()}}
A.x9.prototype={
aX(a,b){var s,r=this;++r.b
r.lR()
s=new A.t($.C,b.i("t<0>"))
r.a=r.a.aj(new A.xa(r,new A.aH(s,b.i("aH<0>")),a),t.H)
return s},
lR(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.xa.prototype={
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
m=A.D(i)
l=A.ag(i)
n.b.c6(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lR()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:37}
A.p6.prototype={}
A.ff.prototype={
l(a){return"BlobMissingError: "+this.a},
$iH:1}
A.kN.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iH:1}
A.mI.prototype={}
A.AD.prototype={
$1(a){return B.b.C(this.a,a)},
$S:107}
A.il.prototype={}
A.qZ.prototype={
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
return A.a(a3.f3(25),$async$bu)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b7?10:12
break
case 10:s=13
return A.a(n.cs(i,b2),$async$bu)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.n5(i.b),$async$bu)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b8?17:18
break
case 17:s=19
return A.a(n.eO(i),$async$bu)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.n5(i.b),$async$bu)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.D(b3)
j=!0
e=i.w+1
d=a5.mJ(e)
a8=i.b
a9=J.a_(f)
b0=a6.$0()
s=23
return A.a(a3.wI(a8,a9,e,b0+B.c.M(d.a,1000)),$async$bu)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.dx,a4=new A.bD(a3,a3.r,a3.e,A.n(a3).i("bD<1>")),a2=a2.r
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.v(A.x('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.cg("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bu)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.S(b,"ref_id")
a6.toString
a=A.G(a6)
a6=J.S(b,"record_id")
a6.toString
a0=A.G(a6)
a1=A.a6(J.S(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.de(a0,a,a1,c),$async$bu)
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
case 25:q=new A.il(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bu,r)},
cs(a,b){return this.t2(a,b)},
t2(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cs=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.av(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.G(a1)
l=a0.h(0,"hash")
l.toString
A.G(l)
k=A.a6(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bq(l),$async$cs)
case 3:if(!a6)throw A.b(A.x("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bj(l),$async$cs)
case 4:j=a6
if(j==null)throw A.b(A.x("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.y
i===$&&A.A()
s=9
return A.a(i.bW(a3.d),$async$cs)
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
if(m!=null){f=B.a.A(l,0,B.c.bN(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.xK(a3.d,A.m([k,new A.h3(k,j,new A.r0(a4,l))],t.N,t.h3)),$async$cs)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga_(l):k
case 11:s=14
return A.a(n.a.a0(new A.r1(a,a1,a3),t.P),$async$cs)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cs,r)},
eO(a){return this.t1(a)},
t1(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.av(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.G(l)
o=A.a6(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.G(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.xI(a.d,A.l([o],t.s)),$async$eO)
case 5:case 4:s=6
return A.a(p.a.a0(new A.r_(l,n,a),t.P),$async$eO)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eO,r)},
de(a,b,c,d){return this.vu(a,b,c,d)},
vu(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$de=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.y
l===$&&A.A()
k=m
s=4
return A.a(l.hZ(c,a,null),$async$de)
case 4:s=3
return A.a(k.iu(f),$async$de)
case 3:o=f
s=5
return A.a(m.bj(o),$async$de)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a0(new A.r2(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$de)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$de,r)},
dk(a,b,c,d){return this.wM(a,b,c,d)},
wM(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$dk=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cg("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$dk)
case 2:k=f
j=A.tv(c,A.Z(c).c)
i=J.az(k)
h=t.x
g=A.d1(new A.bG(i.ce(k,new A.r3(),t.v),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.F(0,n)?6:7
break
case 6:s=8
return A.a(a.cb(0,"lp_file_refs",A.m(["ref_id",A.hT(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bW),$async$dk)
case 8:case 7:case 4:c.length===h||(0,A.q)(c),++o
s=3
break
case 5:i=i.gt(k)
case 9:if(!i.k()){s=10
break}h=i.gn()
m=A.a6(h.h(0,"remote_name"))
if(m==null){s=9
break}if(j.F(0,m)){s=9
break}q=h.h(0,"state")
q.toString
A.G(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.W("lp_file_refs","ref_id = ?",[q]),$async$dk)
case 11:l=A.a6(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.S(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aF(u.y,[l]),$async$dk)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dk,r)}}
A.r0.prototype={
$0(){return this.a.cJ(this.b)},
$S:108}
A.r1.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.Y(new A.a0(p.c,A.ap([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r_.prototype={
$1(a){return this.ny(a)},
ny(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.W("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aF(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.Y(new A.a0(p.c,A.ap([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r2.prototype={
$1(a){return this.nA(a)},
nA(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.hZ(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.Y(new A.a0(q.f,A.ap([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r3.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:109}
A.bg.prototype={}
A.qY.prototype={
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
o=A.a6(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.G(n)
m=A.bd(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bd(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bg(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:110}
A.tz.prototype={
gm5(){return this.b},
gkj(){var s=0,r=A.h(t.y),q,p=this
var $async$gkj=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dQ()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gkj,r)},
eh(a,b,c){return this.wx(a,b,c)},
wx(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$eh=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.r.cg("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$eh)
case 3:o=n.b3(e,A.LD(),t.A)
o=A.N(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eh,r)},
d9(a,b,c,d,e,f,g,h){return this.uB(a,b,c,d,e,f,g,h)},
uB(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$d9=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.gm5()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dQ(),$async$d9)
case 5:j=!j
case 4:if(j)throw A.b(A.x("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.dm(b,c,d),$async$d9)
case 6:o=j
s=7
return A.a(m.bj(o),$async$d9)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.a0(new A.tA(p,h,g,e,o,n,A.hT(),f),t.A),$async$d9)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d9,r)},
fm(a,b,c,d,e){return this.wP(a,b,c,d,e)},
wP(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fm=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gm5()
s=3
return A.a(p.eh(a,c,e),$async$fm)
case 3:k=g
j=J.L(k)
if(j.gE(k))throw A.b(A.x("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.fa(k,new A.tC(d),new A.tD(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.x("File is remote_only; download it before opening."))
j=p.a
n=j.ch.$0()
m=o.e
s=4
return A.a(j.r.aF("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$fm)
case 4:q=l.cJ(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
fv(a,b,c,d,e,f){return this.xm(0,b,c,d,e,f)},
xm(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fv=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eh(b,d,f),$async$fv)
case 3:n=h
m=J.L(n)
if(m.gE(n)){s=1
break}o=e!=null?m.fa(n,new A.tE(e),new A.tF(e)):m.h(n,c)
s=4
return A.a(p.a.a0(new A.tG(p,o,f,d,b),t.P),$async$fv)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
bh(a,b){return this.o4(a,b)},
o4(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bh=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e6(a8),$async$bh)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.ch.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a0(new A.tB(a2,n),t.P),$async$bh)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.ff(),$async$bh)
case 13:l=b0
s=J.ea(l)?14:15
break
case 14:k=0
j=A.aO(t.N)
d=e.r,c=t.s
case 16:s=18
return A.a(d.x4("lp_blobs",A.l(["hash"],c),250,k,"hash ASC"),$async$bh)
case 18:i=b0
for(b=J.E(i);b.k();){h=b.gn()
a=J.S(h,"hash")
a.toString
J.aL(j,A.G(a))}if(J.ak(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.AW(j,g)){s=19
break}p=22
b=new A.t($.C,c)
b.aM(null)
s=25
return A.a(b,$async$bh)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.dd(g),$async$bh)
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
return A.a(e.x6("lp_blobs",A.l(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bh)
case 29:a1=b0
c=J.L(a1)
if(c.gE(a1)){s=28
break}c=c.gt(a1)
case 30:if(!c.k()){s=31
break}b=c.gn().h(0,"hash")
b.toString
A.G(b)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.dd(b),$async$bh)
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
cD(a){return this.vD(a)},
vD(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.r
e=A
s=3
return A.a(g.b1("SELECT SUM(size) as total FROM lp_blobs"),$async$cD)
case 3:f=e.f6(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.b1("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cD)
case 6:l=c
k=J.L(l)
if(k.gE(l)){s=5
break}k=k.gt(l)
case 7:if(!k.k()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.G(i)
j=j.h(0,"size")
j.toString
A.an(j)
s=9
return A.a(h.dd(i),$async$cD)
case 9:s=10
return A.a(g.L("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cD)
case 10:s=11
return A.a(g.W("lp_blobs","hash = ?",[i]),$async$cD)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cD,r)}}
A.tA.prototype={
$1(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.ch.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.en("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.L(c)
if(b.gV(c)){q=A.CU(b.gG(c))
s=1
break}s=4
return A.a(A.hZ(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.en("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.L(o)
n=h.gV(o)&&J.S(h.gG(o),"base_updated")==null?A.a6(J.S(h.gG(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cb(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.Q),$async$$1)
case 6:k=A.hT()
s=7
return A.a(j.aE(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a5(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.Y(new A.a0(g,A.ap([f],m)))
q=new A.bg(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:111}
A.tC.prototype={
$1(a){return a.a===this.a},
$S:44}
A.tD.prototype={
$0(){return A.v(A.x("FileRef "+this.a+" not found"))},
$S:33}
A.tE.prototype={
$1(a){return a.a===this.a},
$S:44}
A.tF.prototype={
$0(){return A.v(A.x("FileRef "+this.a+" not found"))},
$S:33}
A.tG.prototype={
$1(a){return this.nJ(a)},
nJ(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aE(0,"lp_op_queue",A.m(["op_id",A.hT(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a5(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.Y(new A.a0(q.c,A.ap([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tB.prototype={
$1(a){return this.nI(a)},
nI(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dx,p=new A.bD(p,p.r,p.e,A.n(p).i("bD<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ag('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.y(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
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
return A.a(i.W("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aF(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.L("lp_op_queue",A.m(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.wP.prototype={
eN(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.hY()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a5(n.getDirectory(),l),$async$eN)
case 7:m=b
s=8
return A.a(A.a5(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eN)
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
return A.f($async$eN,r)},
dQ(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eN(),$async$dQ)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
bo(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bo=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dQ(),$async$bo)
case 3:if(!b){q=null
s=1
break}p=5
m=A.hY()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a5(m.getDirectory(),k),$async$bo)
case 8:l=b
s=9
return A.a(A.a5(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bo)
case 9:k=b
q=new A.nV(k)
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
dm(a,b,c){return this.x0(a,b,c)},
iu(a){return this.dm(a,null,null)},
x0(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dm=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.xy(A.l([],t.bs))
s=3
return A.a(A.km(a,b,c,null,new A.wQ(o)),$async$dm)
case 3:n=e
m=o.kD()
s=4
return A.a(p.bo(),$async$dm)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.b_(k,m),$async$dm)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dm,r)},
cJ(a){return this.wR(a)},
wR(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cJ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.kO(a)
j=n.b
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.BA(j,t.L)
s=1
break}s=3
return A.a(n.bo(),$async$cJ)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.eo(a),$async$cJ)
case 10:l=c
j=A.BA(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.D(h)
if(!(k instanceof A.ff))throw A.b(A.CF(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.x("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cJ,r)},
dd(a){return this.v_(a)},
v_(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$dd=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.kO(a)
o.b.H(0,a)
s=2
return A.a(o.bo(),$async$dd)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.H(0,a),$async$dd)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.D(k)
if(!(m instanceof A.ff))throw A.b(A.CF(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dd,r)},
bq(a){return this.vJ(a)},
vJ(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kO(a)
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
bj(a){return this.oi(a)},
oi(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kO(a)
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
e6(a){return this.uI(a)},
uI(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e6=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bo(),$async$e6)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.eg(),$async$e6)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.GA(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.H(0,l),$async$e6)
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
return A.f($async$e6,r)},
ff(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ff=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.d1(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bo(),$async$ff)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.eg(),$async$ff)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Ck()
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
return A.f($async$ff,r)}}
A.wQ.prototype={
$1(a){return this.a.u(0,a)},
$S:25}
A.nV.prototype={
eo(a){return this.xc(a)},
xc(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$eo=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),i),$async$eo)
case 7:m=c
s=8
return A.a(A.a5(m.getFile(),i),$async$eo)
case 8:l=c
s=9
return A.a(A.a5(l.arrayBuffer(),t.a),$async$eo)
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
j=A.D(g)
if(A.DI(j))throw A.b(A.CE(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eo,r)},
b_(a,b){return this.y3(a,b)},
y3(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.m
n=A
s=3
return A.a(A.a5(q.a.getFileHandle(a,{create:!0}),p),$async$b_)
case 3:s=2
return A.a(n.a5(d.createWritable(),p),$async$b_)
case 2:o=d
p=t.X
s=4
return A.a(A.a5(o.write(t.a.a(B.f.ga8(b))),p),$async$b_)
case 4:s=5
return A.a(A.a5(o.close(),p),$async$b_)
case 5:return A.e(null,r)}})
return A.f($async$b_,r)},
H(a,b){return this.xn(0,b)},
xn(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.B7(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.D(l)
if(A.DI(n))throw A.b(A.CE(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
bq(a){return this.vK(a)},
vK(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),t.m),$async$bq)
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
bj(a){return this.oj(a)},
oj(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bj=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),k),$async$bj)
case 7:m=c
s=8
return A.a(A.a5(m.getFile(),k),$async$bj)
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
eg(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$eg=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.cd(A.bY(A.CV(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$eg)
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
return A.a(j.D(),$async$eg)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eg,r)},
$iDh:1}
A.mP.prototype={
gng(){return 1}}
A.p3.prototype={
dt(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dt=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eH(),$async$dt)
case 5:o=b
s=o.gng()<0.25?6:7
break
case 6:s=8
return A.a(p.iZ(o),$async$dt)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gng()<0.25?9:10
break
case 9:s=11
return A.a(p.iZ(m),$async$dt)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dt,r)},
ix(){var s=0,r=A.h(t.q),q,p=this
var $async$ix=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eH(),$async$ix)
case 3:q=p.iZ(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ix,r)},
eH(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eH=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.jX():j
p=3
s=6
return A.a(l,$async$eH)
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
return A.f($async$eH,r)},
iZ(a){var s=this.c
if(s!=null)return s
return this.c=this.fX(a)},
fX(a){return this.pQ(a)},
pQ(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fX=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.x("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.kw(l),$async$fX)
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
return A.f($async$fX,r)}}
A.m5.prototype={
oI(a,b,c,d,e,f,g,h){var s=this,r=new A.p3(s.b)
s.x!==$&&A.cy()
s.x=r
s.y!==$&&A.cy()
s.y=new A.us(s.w,s.a,r)},
ir(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$ir=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.as){s=1
break}n.as=!0
if(n.at){s=1
break}p=4
m=n.y
m===$&&A.A()
s=7
return A.a(m.it(),$async$ir)
case 7:n.Q=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.D(k)
if(m instanceof A.cE){n.Q=!1
n.at=!0}else if(m instanceof A.bu)n.as=n.Q=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ir,r)},
fQ(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.z!=null){s=1
break}o=p.y
o===$&&A.A()
n=A.HR(B.bX,o,A.l([p.r],t.s),p.grJ(),p.grG())
p.z=n
s=3
return A.a(n.aB(),$async$fQ)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
eA(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.z
o=o==null?null:o.aH()
s=2
return A.a(o instanceof A.t?o:A.bn(o,t.H),$async$eA)
case 2:q.z=null
for(o=q.ay,p=new A.aS(o,o.r,o.e,A.n(o).i("aS<2>"));p.k();)p.d.D()
o.a9(0)
q.ch.a9(0)
return A.e(null,r)}})
return A.f($async$eA,r)},
rH(){var s,r,q,p
for(s=this.CW,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
this.eE(p,new A.cB(p,B.a9,null))}},
rK(a){var s=a.b,r=s.b
if(!B.b.F(this.CW,r))return
if(a.a==="delete"){this.hD(s)
return}this.eE(r,new A.cB(r,B.a9,s))},
hD(a){return this.u7(a)},
u7(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hD=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.F(n.CW,j)){s=1
break}m=null
p=4
l=n.y
l===$&&A.A()
s=7
return A.a(l.bW(a.a),$async$hD)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.D(i)
if(l instanceof A.cI){n.eE(j,new A.cB(j,B.aO,null))
s=1
break}else if(l instanceof A.bu){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eE(j,new A.cB(j,B.aO,null))
s=1
break}n.eE(j,new A.cB(j,B.a9,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hD,r)},
eE(a,b){var s,r,q=this
q.ch.j(0,a,b)
s=q.ay
r=s.h(0,a)
if(r!=null)r.D()
s.j(0,a,A.cP(q.c,new A.uo(q,a)))},
xI(a,b){return this.iC(null,a,null,b,null)},
iC(a,b,c,d,e){return this.xL(a,b,c,d,e)},
xK(a,b){return this.iC(null,a,null,null,b)},
xL(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iC=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aV(0,new A.up(),t.N,t.co)
n=p.y
n===$&&A.A()
q=n.iB(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iC,r)}}
A.uo.prototype={
$0(){var s,r=this.a,q=this.b
r.ay.H(0,q)
s=r.ch.H(0,q)
if(s!=null&&(r.ax.c&4)===0)r.ax.u(0,s)},
$S:0}
A.up.prototype={
$2(a,b){return new A.R(a,new A.dA("imgs+",b.a,b.b,b.c),t.ia)},
$S:114}
A.uI.prototype={}
A.us.prototype={
fh(a,b,c,d,e,f){return this.wz(a,b,c,d,e,f)},
wz(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fh=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Mf(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.y(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.y(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.y(c,"'","\\'")+"'")}n=t.N
n=A.u(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.iA(B.c.bN(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.B(b,","))
k=p.b.bt("/api/collections/data/records").kA(n)
s=3
return A.a(p.m9("GET",k),$async$fh)
case 3:j=a0
p.d_(j,A.l([200],t.t),k)
i=p.cY(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bt("List response has no items array."))
h=J.b3(i,new A.uz(p),t.Q)
h=A.N(h,h.$ti.i("V.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
bW(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records/"+A.hI(2,a,B.k,!1))
s=3
return A.a(p.m9("GET",o),$async$bW)
case 3:n=c
if(n.a===404)throw A.b(A.HP("not found"))
p.d_(n,A.l([200],t.t),o)
q=p.dS(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
hV(a,b,c){return this.uS(a,b,c)},
uS(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records")
s=3
return A.a(p.eV("POST",o,B.h.a5(A.m(["id",b,"store",c,"data",B.h.av(a,null)],t.N,t.z),null)),$async$hV)
case 3:n=e
if(n.a===400&&p.rh(n))throw A.b(new A.fp(p.eG(n)))
p.d_(n,A.l([200,201],t.t),o)
q=p.dS(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
rh(a){var s,r,q,p,o,n
try{s=this.cY(a)
r=J.S(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.w(p,"validation_not_unique")||J.w(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fE(a,b,c){return this.xH(a,b,c)},
xH(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records/"+A.hI(2,c,B.k,!1))
s=3
return A.a(p.eV("PATCH",o,B.h.a5(A.m(["data",B.h.av(b,null)],t.N,t.z),null)),$async$fE)
case 3:n=e
p.d_(n,A.l([200],t.t),o)
q=p.dS(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
iB(a,b,c,d,e){return this.xJ(a,b,c,d,e)},
xJ(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iB=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bt("/api/collections/data/records/"+A.hI(2,b,B.k,!1))
m=t.N
l=A.u(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a5(d,null))
if(e==null)m=null
else{m=A.n(e).i("ao<2>")
m=A.N(new A.ao(e,m),m.i("o.E"))}s=3
return A.a(p.tJ(new A.lr("PATCH",n,B.ay,l,m==null?B.cz:m)),$async$iB)
case 3:o=g
p.d_(o,A.l([200],t.t),n)
q=p.dS(p.cY(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iB,r)},
hZ(a,b,c){return this.vv(a,b,c)},
vv(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hZ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.u(l,l)
o=p.b.bt("/api/files/data/"+A.hI(2,b,B.k,!1)+"/"+A.hI(2,a,B.k,!1))
n=l.a===0?o:o.kA(l)
s=3
return A.a(p.rM(new A.eq("GET",n,B.ay,null)),$async$hZ)
case 3:m=e
p.d_(new A.cF(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hZ,r)},
fq(a){return this.x_(a)},
x_(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$fq=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bt("/api/batch")
a3=A.l([],t.ic)
for(o=J.az(a4),n=o.gt(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.h.av(j.d,null)],m,l)],m,k))}s=3
return A.a(p.eV("POST",a2,B.h.a5(A.m(["requests",a3],m,t.ew),null)),$async$fq)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.Hc(p.eG(i)))
if(a3===400)throw A.b(new A.ec(p.eG(i)))
p.d_(i,A.l([200],t.t),a2)
h=B.h.av(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bt("Batch response has no results array."))}else throw A.b(A.bt("Batch response is not a list or envelope."))
g=e}a3=J.L(g)
if(a3.gm(g)!==o.gm(a4))throw A.b(A.bt("Batch response has "+a3.gm(g)+" results for "+o.gm(a4)+" requests."))
d=A.l([],t.g2)
for(n=t.f,c=0;c<o.gm(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bt("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dq(a)
a0=l.R(a,200)||l.R(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dS(a1):null
k=a0?null:p.pV(b)
j=a0&&n.b(a1)?B.h.a5(a1.h(0,"data"),null):null
d.push(new A.j4(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
it(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$it=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eV("POST",p.b.bt("/api/batch"),B.h.a5(A.m(["requests",[]],t.N,t.kS),null)),$async$it)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.GF(p.eG(o)))
if(n===408||n===429||n>=500)throw A.b(A.DB("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
eV(a,b,c){return this.c3(new A.uv(this,a,b,c),new A.uw(),t.w)},
m9(a,b){return this.eV(a,b,null)},
tJ(a){return this.c3(new A.ux(this,a),new A.uy(),t.w)},
rM(a){return this.c3(new A.ut(this,a),new A.uu(),t.lI)},
c3(a,b,c){return this.uc(a,b,c,c)},
uc(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c3=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dt(),$async$c3)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c3)
case 8:l=f
s=J.w(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.ix(),$async$c3)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c3)
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
if(i instanceof A.dB){j=i
throw A.b(A.DB(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c3,r)},
jF(a,b,c,d){return this.tH(a,b,c,d)},
tH(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jF=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.u(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b5(new A.eq(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jF,r)},
d_(a,b,c){if(B.b.F(b,a.a))return
throw A.b(this.rl(a,c))},
rl(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eG(a)
if(401===s)return new A.c_(q)
if(403===s)return new A.cE(q)
if(404===s)return new A.cI(q)
if(408===s||429===s)return new A.eF(r,q)
if(400===s)return new A.fJ(q)
if(s>=500)return new A.jb(q)
return new A.fL("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eG(a){var s,r,q,p,o
try{s=this.cY(a)
r=J.S(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.S(s,"data")
if(t.f.b(q)){p=q
p=p.gV(p)}else p=!1
if(p){p=B.h.a5(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
cY(a){var s,r,q,p=null
try{p=B.h.av(a.c,null)}catch(r){q=A.D(r)
if(t.Y.b(q)){s=q
throw A.b(A.bt("Response is not valid JSON: "+s.gkn()))}else throw r}if(t.f.b(p))return A.ba(p,t.N,t.X)
throw A.b(A.bt("Expected a JSON object, got "+J.bN(p).l(0)+"."))},
dS(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bt("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bt("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.ba(o,n,m):A.u(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.Cy(k,n)
j=A.N(j,j.$ti.i("o.E"))}else j=B.p
return new A.cK(s,p,q,l,j)},
pV(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.uz.prototype={
$1(a){return this.a.dS(a)},
$S:115}
A.uv.prototype={
$1(a){var s=this
return s.a.jF(s.b,s.c,s.d,a)},
$S:45}
A.uw.prototype={
$1(a){return a.a},
$S:70}
A.ux.prototype={
$1(a){var s=this.b,r=t.N
r=A.cH(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dA(new A.lr(s.a,s.b,r,s.d,s.e))},
$S:45}
A.uy.prototype={
$1(a){return a.a},
$S:70}
A.ut.prototype={
$1(a){var s=this.b,r=t.N
r=A.cH(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.em(new A.eq(s.a,s.b,r,s.d))},
$S:118}
A.uu.prototype={
$1(a){return a.a},
$S:119}
A.j0.prototype={}
A.hC.prototype={}
A.uA.prototype={
aB(){var s=0,r=A.h(t.H),q,p=this
var $async$aB=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eU()
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
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aH,r)},
eU(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eU=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.cV(),$async$eU)
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
return A.a(A.Hi(n.$1(k),m),$async$eU)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eU,r)},
cV(){return this.px()},
px(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.dt(),$async$cV)
case 3:m=b
l=t.N
s=4
return A.a(n.a.em(new A.eq("GET",n.b.bt("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cV)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.ir("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aU(new A.uD()).D(),$async$cV)
case 7:s=1
break
case 6:++p.as
p.z=new A.aH(new A.t($.C,t.D),t.h)
n=$.oL()
l=A.l([],t.s)
o.a=o.b=!1
p.y=k.c.bP(new A.uE(o,p,new A.z7(new A.xY(n),l),m),new A.uF(p),new A.uG(p))
s=8
return A.a(p.z.a,$async$cV)
case 8:p.y=null
if(o.a)throw A.b(A.ir("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cV,r)},
he(a,b){return this.qK(a,b)},
qK(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$he=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b5(new A.eq("POST",l.b.bt("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a5(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$he)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.ir("realtime subscribe status "+l,null))
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
if(t.j.b(f)){c=J.Cy(f,t.N)
c=A.N(c,c.$ti.i("o.E"))}else c=B.p
m=new A.cK(k,e,d,l,c)
p.w.$1(new A.j0(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$he,r)}}
A.uH.prototype={
$1(a){return A.Fl(a,this.a,this.b,A.M9())},
$S:120}
A.uD.prototype={
$1(a){},
$S:25}
A.uE.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.vN(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.q)(k),++n){m=k[n]
r.Q=r.Q.aj(new A.uB(q,r,m,p),o).mB(new A.uC())}},
$S:25}
A.uB.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=n.a
if(k.a){s=1
break}p=4
s=7
return A.a(n.b.he(n.c,n.d),$async$$1)
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
$S:121}
A.uC.prototype={
$1(a){},
$S:27}
A.uF.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.uG.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:27}
A.z7.prototype={
vN(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.kD()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.re(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dm(p,o,q)))
p=o+1
m=this.pM(B.a.xC(new A.dk(!0).cW(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.b6(s,p))
return r},
re(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
q3(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.a9(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.a9(k)
try{q=B.h.av(r,l)
if(t.f.b(q)){p=A.ba(q,t.N,t.X)
o=J.S(p,"clientId")
if(J.w(s,"PB_CONNECT")&&typeof o=="string")return new A.hC(o,l)
return new A.hC(l,p)}}catch(n){}return l},
pM(a){var s,r=this,q=null
if(a.length===0)return r.q3()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.a9(r.c)
return new A.hC(B.a.ci(B.a.ad(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.ci(B.a.ad(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.ci(B.a.ad(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eq.prototype={}
A.dA.prototype={
oq(){return this.d.$0()},
gm(a){return this.c}}
A.lr.prototype={}
A.cF.prototype={}
A.dB.prototype={
l(a){return"HttpTransportException: "+this.a},
$iH:1}
A.dR.prototype={}
A.uq.prototype={
b5(a){return this.oe(a)},
oe(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.em(a),$async$b5)
case 7:m=c
j=m.c
s=8
return A.a(B.aL.l1(j).ef(0).iz(B.ad),$async$b5)
case 8:l=c
j=m.a
i=m.b
q=new A.cF(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.D(g)
if(j instanceof A.dB)throw g
else{k=j
j=A.ir("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b5,r)},
dA(a){return this.of(a)},
of(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dA=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.HL(a6.a,a6.b)
h.r.C(0,a6.c)
h.x.C(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.oq(),$async$dA)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.FH(a0)
a3=new A.fz("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cR(A.u(d,d),e))
b.push(new A.lS(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.q)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b5(m).iz(B.ad),$async$dA)
case 11:k=a8
g=k.w
s=12
return A.a(B.aL.l1(g).ef(0).iz(B.ad),$async$dA)
case 12:j=a8
g=k.b
f=k.e
q=new A.cF(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.D(a5)
if(g instanceof A.dB)throw a5
else{i=g
g=A.ir("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dA,r)},
em(a){return this.wT(a)},
wT(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$em=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.I6(a,a0)
a1.r.C(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gk6().k5(j)
i.pi()
i.y=A.Mj(j)
h=i.gcp()
if(h==null){j=t.N
i.scp(A.Bk("text","plain",A.m(["charset",i.gk6().gaQ()],j,j)))}else{j=i.gcp()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c7(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gk6().gaQ()],j,j)
e=h.a
d=h.b
c=A.ba(h.c,j,j)
c.C(0,f)
i.scp(A.Bk(e,d,c))}}}p=4
s=7
return A.a(n.a.b5(a1).iz(B.ad),$async$em)
case 7:m=a5
j=t.N
l=A.u(j,j)
m.e.a1(0,new A.ur(l))
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
j=A.D(a2)
if(j instanceof A.dB)throw a2
else{k=j
a=A.ir("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$em,r)}}
A.ur.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:31}
A.oT.prototype={
aX(a,b){var s=this.a.aj(new A.oU(a,b),b)
this.a=s.bU(new A.oV(b),new A.oW(),t.H)
return s}}
A.oU.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("z<0>(~)")}}
A.oV.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.oW.prototype={
$2(a,b){},
$S:11}
A.bA.prototype={
gnh(){var s=this.e
return s.gm(s)===1&&J.w(s.h(0,"__lp_deleted__"),!0)}}
A.pT.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.G(d)
s=e.h(0,"record_id")
s.toString
A.G(s)
r=A.Ab(e.h(0,l),l,k)
q=A.Ab(e.h(0,j),j,k)
p=A.Ab(e.h(0,i),i,k)
o=A.Ff(e.h(0,h),h,k)
n=A.Ff(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.an(m)
return new A.bA(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Ab(e.h(0,f),f,k):null)},
$S:122}
A.pU.prototype={
fg(a){return this.wy(a)},
wy(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$fg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.r.x3("lp_conflicts","detected_at ASC",n,o),$async$fg)
case 3:o=m.b3(c,A.Lj(),t.n8)
o=A.N(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
dz(a,b){return this.o6(a,b)},
o6(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dz)
case 3:o=d
n=J.L(o)
if(n.gE(o)){q=null
s=1
break}q=A.B0(n.gG(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
xM(a){var s={},r=A.BO()
s.a=null
r.smS(A.dQ(new A.pX(s,r),new A.pY(s,this,a,new A.pZ(this,r,a)),t.ba))
return r.bb().gcR()},
eq(a,b,c){return this.xs(a,b,c)},
xs(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.az(c)
s=2
return A.a(p.a0(new A.pV(q,c,a,o.a,o,b),t.P),$async$eq)
case 2:return A.e(null,r)}})
return A.f($async$eq,r)},
eY(a,b){return this.um(a,b)},
um(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dz(a,b),$async$eY)
case 2:p=d
if(p==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eq(b,p.d,a),$async$eY)
case 3:return A.e(null,r)}})
return A.f($async$eY,r)},
e2(a,b){return this.un(a,b)},
un(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$e2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dz(a,b),$async$e2)
case 3:n=d
if(n==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=n.gnh()?4:5
break
case 4:o=p.a
if(A.mW(o)!=null)A.v(A.x(u.L))
s=6
return A.a(new A.fj(o,o.az(a),null,null).ku(b),$async$e2)
case 6:s=1
break
case 5:s=7
return A.a(p.eq(b,n.e,a),$async$e2)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e2,r)}}
A.pZ.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bb().gih()){s=1
break}p=4
s=7
return A.a(n.a.fg(n.c),$async$$0)
case 7:m=b
if(!i.bb().gih())J.aL(i.bb(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.D(h)
k=A.ag(h)
if(!i.bb().gih())i.bb().bz(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:5}
A.pY.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b0(p,A.n(p).i("b0<1>")).aU(new A.pW(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.pW.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:36}
A.pX.prototype={
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
$S:5}
A.pV.prototype={
$1(a){return this.nx(a)},
nx(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aK("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.L(a3)
if(a4.gE(a3))throw A.b(A.x("No conflict found for "+a1+"/"+a2))
o=A.B0(a4.gG(a3))
n=o.gnh()
m=n?null:A.ai(o.e)
l=n?"":A.aq(B.l.v(B.e.v(A.ai(A.bf(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aK(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.by(a8)?4:5
break
case 4:s=7
return A.a(a0.W("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.W("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.W("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.Y(new A.a0(a1,A.ap([a2],a4)))
a6.Y(new A.a0("lp_conflicts",A.ap([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aK("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.L(k)
if(i.gV(k)){h=A.a6(J.S(i.gG(k),"base_updated"))
i=h==null?A.a6(J.S(i.gG(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.W("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cH(p.f,i,h)
g.j(0,"id",a2)
f=J.w(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dn(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bJ(n?B.n:o.e,g)
d=A.N(a4,A.n(a4).c)
B.b.aG(d)
c=A.ai(A.bf(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a5(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aK("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.by(a8)?14:16
break
case 14:a4=p.a.a
b=a4.ch.$0()
h=f?B.L:B.v
e=B.h.a5(d,null)
a4=a4.CW
a4===$&&A.A()
s=18
return A.a(a0.aE(0,"lp_outbox",A.F8(l,j,b,e,h,a4.fJ(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.Y(new A.a0(a1,A.ap([a2],i)))
a6.Y(new A.a0("lp_conflicts",A.ap([a2],i)))
a4=o.d
a=A.bJ(a4,g)
a.H(0,"id")
a6.bd(new A.aT(a1,a2,B.ac,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:6}
A.mM.prototype={
aB(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aB=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dQ(null,null,t.n6)
n.ay=A.dQ(null,null,t.em)}n.z=!0
s=3
return A.a(n.aP(B.di),$async$aB)
case 3:p=5
l=n.b
s=8
return A.a(l.ir(),$async$aB)
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
n.fr=new A.b0(l,A.n(l).i("b0<1>")).aU(n.gwc())
l=n.b.ax
n.fx=new A.b0(l,A.n(l).i("b0<1>")).aU(n.gwa())
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
case 12:n.fy=A.Dy(B.av,new A.wc(n))
s=14
return A.a(n.aP(n.dJ()),$async$aB)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d6(),$async$aB)
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
dJ(){if(this.at)return B.bj
if(this.Q)return B.bh
if(this.as)return B.aC
return B.bi},
aP(a){return this.tZ(a)},
tZ(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.pS(),$async$aP)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aP,r)},
pS(){return this.p2=this.p2.aj(new A.w4(this),t.H)},
fW(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fW=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.hS(),$async$fW)
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
if((g.c&4)===0)g.u(0,new A.h6(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fW,r)},
wd(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.tC(B.ae)},
wb(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dx.I(s))return
r=a.c
if(r!=null&&a.b===B.a9){q.p1.push("fast:"+s)
q.dx=q.dx.aj(new A.wa(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hy(B.ae,A.l([s],t.s))},
h0(a){return this.q_(a)},
q_(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hy(B.ae,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.A()
s=7
return A.a(l.i0(a),$async$h0)
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
break}if(!m)n.hy(B.ae,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h0,r)},
wl(){if(!this.z)return
this.p1.push("cycle")
this.d6()},
hy(a,b){var s=this,r=s.go
if(r!=null)r.D()
if(b==null)s.k2=!0
else s.k3.C(0,b)
s.go=A.cP(a,new A.w9(s))},
tC(a){return this.hy(a,null)},
tB(a){var s=this.id
if(s!=null)s.D()
this.id=A.cP(B.D,new A.w8(this,a))},
jv(){this.as=!0
this.aP(B.aC)
A.ip(this.d,t.H)},
ei(){var s=0,r=A.h(t.H),q,p=this,o
var $async$ei=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.CW
o===$&&A.A()
s=3
return A.a(o.xp(),$async$ei)
case 3:s=4
return A.a(p.aP(p.dJ()),$async$ei)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d6(),$async$ei)
case 5:case 1:return A.e(q,r)}})
return A.f($async$ei,r)},
fO(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.H),q=this,p
var $async$fO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.D()
q.k1=A.cP(B.au,new A.wb(q))
s=3
break
case 4:s=5
return A.a(q.aP(B.bh),$async$fO)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fO,r)},
bs(){var s=0,r=A.h(t.H),q=this
var $async$bs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aP(B.bj),$async$bs)
case 2:return A.e(null,r)}})
return A.f($async$bs,r)},
bf(){var s=0,r=A.h(t.H),q,p=this
var $async$bf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aP(p.dJ()),$async$bf)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d6(),$async$bf)
case 4:case 1:return A.e(q,r)}})
return A.f($async$bf,r)},
jD(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.D()}s=t.mv
r=q.k4.aj(new A.w5(q,a),s)
q.k4=r.bU(new A.w6(),new A.w7(),s)
return r},
d6(){return this.jD(null)},
b7(a){return this.pP(a)},
pP(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b7=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.N
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aP(n.dJ()),$async$b7)
case 5:q=B.N
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
return A.a(n.aP(B.dj),$async$b7)
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
return A.a(a5.dl(h),$async$b7)
case 14:g=c0
J.bZ(m,h,g.b)
if(g.f&&g.b>0)J.aL(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.D(b4)
if(a5 instanceof A.c_){n.jv()
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
return A.a(n.aP(B.aC),$async$b7)
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
return A.a(b3.dE(e),$async$b7)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.S(l,c.a)
if(a5==null)a5=0
J.bZ(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.D(b5)
if(b3 instanceof A.bu){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aP(B.dk),$async$b7)
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
return A.a(b3.fs(),$async$b7)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b1("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b7)
case 36:a0=c0
if(J.ea(a0)&&typeof J.S(J.ci(a0),"last_error")=="string"){b3=J.S(J.ci(a0),"last_error")
b3.toString
n.ch=A.G(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.D(b6)
if(b3 instanceof A.c_)n.jv()
else if(b3 instanceof A.bu){a1=b3
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
a3=A.D(b7)
k=!0
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.N
s=1
break}if(J.ak(i)!==0)n.tB(i)
a9=k||a.f
b0=new A.aM(A.la(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dJ()
s=42
return A.a(n.aP(a9&&b1===B.bi?B.dl:b1),$async$b7)
case 42:q=n.ok=new A.bk(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b7,r)}}
A.wc.prototype={
$1(a){return this.a.wl()},
$S:47}
A.w4.prototype={
$1(a){return this.a.fW()},
$S:37}
A.wa.prototype={
$1(a){return this.a.h0(this.b)},
$S:37}
A.w9.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.N(q,A.n(q).c)
s.k2=!1
q.a9(0)
if(r||p.length===0)s.d6()
else s.jD(p)},
$S:0}
A.w8.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jD(this.b)},
$S:0}
A.wb.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aP(p.dJ()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d6(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.w5.prototype={
$1(a){return this.a.b7(this.b)},
$S:125}
A.w6.prototype={
$1(a){return B.N},
$S:126}
A.w7.prototype={
$1(a){return B.N},
$S:127}
A.d3.prototype={
l(a){return"MapFailure: "+this.a},
$iH:1}
A.ey.prototype={}
A.A6.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.A7.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.tP.prototype={}
A.dK.prototype={}
A.lN.prototype={}
A.yW.prototype={}
A.yU.prototype={}
A.xe.prototype={}
A.tW.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.tV(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:129}
A.tQ.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.tR.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.tS.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.tT.prototype={
$1(a){return a instanceof A.t?a:A.bp(a,t.X)},
$S:130}
A.tU.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hv(s,s.r,A.n(s).c),r=this.b,q=J.L(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:131}
A.uc.prototype={
f3(a){return this.vw(a)},
vw(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.ch.$0()
e=e.r
s=3
return A.a(e.x5("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f3)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.E(o);l.k();)m.push(A.HQ(l.gn()))
l=A.aO(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.q)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.kn(e,l),$async$f3)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.q)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.F(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f3,r)},
n5(a){return this.a.a0(new A.ue(a),t.H)},
wI(a,b,c,d){return this.a.a0(new A.uf(c,d,b,a),t.H)}}
A.ue.prototype={
$1(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.uf.prototype={
$1(a){return this.nM(a)},
nM(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.p5.prototype={}
A.iE.prototype={}
A.j5.prototype={}
A.uh.prototype={
fJ(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cI(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
ep(a,b,c){return this.xe(a,b,c)},
xe(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$ep=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$ep)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.m4(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ep,r)},
bS(a,b,c){return this.xg(a,b,c)},
xg(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aK("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bS)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.jl(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
bp(a,b,c,d,e,f,g,h,i,j,k,l){return this.uy(a,b,c,d,e,f,g,h,i,j,k,l)},
uy(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bp=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a4)throw A.b(A.CN("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ao
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.L
break A}if(B.E===a5){l=a6==null?B.v:B.a0
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.L
break B}if(B.E===a5){l=B.a0
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.E===a5){l=B.a0
break C}l=B.L
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.L
break D}if(B.E===a5){l=B.a0
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.W("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bp)
case 5:s=6
return A.a(a8.W("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bp)
case 6:s=7
return A.a(p.hC(a8,a2,a9),$async$bp)
case 7:s=8
return A.a(a8.W(a2,"id = ?",[a9]),$async$bp)
case 8:q=B.bM
s=1
break
case 4:k=p.a.ch.$0()
j=a4?null:b2.w
if(j==null)j=p.fJ()
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
b=B.h.a5(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.hX(B.X)
e=B.b.B(A.ae(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aF("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Fu(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bp)
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
l=B.b.B(A.ae(16,"?",!1,l),", ")
s=17
return A.a(a8.aF("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.FG(B.a5,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bp)
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
case 18:case 15:q=new A.iE()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bp,r)},
hC(a,b,c){return this.u6(a,b,c)},
u6(a,b,c){var s=0,r=A.h(t.H)
var $async$hC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cz(a,b,c,!1),$async$hC)
case 2:return A.e(null,r)}})
return A.f($async$hC,r)},
f4(a,b){return this.vx(a,b)},
vx(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a1("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.N([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ag("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f4)
case 3:o=d
f=J.L(o)
if(f.gE(o)){q=B.cB
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.k();)n.push(A.m4(f.gn()))
f=A.aO(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.q)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.kn(g,f),$async$f4)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.q)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.F(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
kU(a){if(a.length===0)return A.bp(null,t.H)
return this.a.a0(new A.un(this,a),t.H)},
aJ(a,b){return this.tO(a,b)},
tO(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aJ=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.az(a0).a
a4=a2.ch.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aK("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 5:o=a9
n=J.L(o)
s=!(n.gV(o)&&!J.w(J.S(n.gG(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aK(a,1,"id = ?",[a1]),$async$aJ)
case 8:m=a9
n=J.L(m)
l=n.gV(m)?A.cf(a3,n.gG(m),a2.ax,a2.ay):null
s=9
return A.a(b.L(a,A.dn(a3,J.w(a5.h(0,"archived"),!0),a2.ax,a2.ay,a1,a5),"id = ?",[a1]),$async$aJ)
case 9:a6.Y(new A.a0(a0,A.ap([a1],t.N)))
k=A.bJ(l==null?B.n:l,a5)
k.H(0,"id")
a6.bd(new A.aT(a0,a1,B.ac,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aK(a,1,"id = ?",[a1]),$async$aJ)
case 10:j=a9
a5=J.L(j)
s=a5.gE(j)?11:12
break
case 11:s=13
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 13:s=14
return A.a(p.d2(b,a0,a1,a7.c,a4),$async$aJ)
case 14:a6.Y(new A.a0(a0,A.ap([a1],t.N)))
s=1
break
case 12:n=a2.ax
a2=a2.ay
i=A.cf(a3,a5.gG(j),n,a2)
h=A.aq(B.l.v(B.e.v(A.ai(A.bf(a3,i)))).a)
a5=a7.b
g=A.aq(B.l.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 18:s=19
return A.a(p.d2(b,a0,a1,a7.c,a4),$async$aJ)
case 19:a6.Y(new A.a0(a0,A.ap([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.av(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.ba(d,a5,f):A.u(a5,f)
s=23
return A.a(b.L(a,A.dn(a3,J.w(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aJ)
case 23:s=24
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 24:s=25
return A.a(p.d2(b,a0,a1,a7.c,a4),$async$aJ)
case 25:a6.Y(new A.a0(a0,A.ap([a1],a5)))
k=A.bJ(i,c)
k.H(0,"id")
a6.bd(new A.aT(a0,a1,B.ac,B.A,i,c,k))
s=21
break
case 22:g=A.aq(B.l.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aJ)
case 28:a6.Y(new A.a0(a0,A.ap([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aJ,r)},
d2(a,b,c,d,e){return this.rm(a,b,c,d,e)},
rm(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d2=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d2)
case 2:s=3
return A.a(a.L(q.a.az(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d2)
case 3:return A.e(null,r)}})
return A.f($async$d2,r)},
xh(a,b,c,d,e){return this.a.a0(new A.ul(c,e,d,B.G,a,b),t.H)},
n4(a,b,c,d,e,f){return this.a.a0(new A.uk(this,c,f,b,a,d,e),t.H)},
fi(a,b,c,d,e){return this.n4(a,b,c,d,B.ao,e)},
n3(a,b,c){return this.a.a0(new A.uj(a,c,b),t.H)},
xp(){return this.a.a0(new A.um(null),t.S)},
eZ(a,b,c,d,e,f,g){return this.uv(a,b,c,d,e,f,g)},
uv(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eZ=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eZ)
case 2:p=A.u(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eZ)
case 3:return A.e(null,r)}})
return A.f($async$eZ,r)}}
A.un.prototype={
$1(a){return this.nR(a)},
nR(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
case 5:case 3:l.length===k||(0,A.q)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.ul.prototype={
$1(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.uk.prototype={
$1(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.uj.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.um.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:132}
A.eb.prototype={
a3(){return"ApplyResult."+this.b}}
A.mf.prototype={}
A.uX.prototype={
dl(a){return this.wZ(a)},
wZ(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dl=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iv(b4),$async$dl)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Gg().eb(n)
if(m==null)A.v(A.bt('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.v(A.bt('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.B1(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.uO(k))A.v(A.bt('Bad timestamp "'+n+'"'))
o=A.LF(A.B1(j,i,h,g,f,e,d).iY(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iA(B.c.bN(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dx,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.y
a4===$&&A.A()
s=6
return A.a(a4.fh(b4,null,a2,o,null,b),$async$dl)
case 6:a5=b6
a4=J.L(a5)
if(a4.gE(a5)){s=5
break}++a.ax
a6=p.ro(a5)
a7=k.h(0,b4)
if(a7==null)A.v(A.x(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.Cg(a7.a,a5),$async$dl)
case 8:s=7
return A.a(b0.aX(new b1.v4(b2,p,b3,b6,a6),l),$async$dl)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mf(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dl,r)},
ml(a,b){var s=B.a.Z(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.Z(a.a,b.b)<=0},
u_(a,b){var s=B.a.Z(a.c,b.c)
if(s!==0)return s>0
return B.a.Z(a.a,b.a)>0},
ro(a){var s,r,q,p=J.az(a),o=p.gG(a)
for(p=p.bk(a,1),s=p.$ti,p=new A.ar(p,p.gm(0),s.i("ar<V.E>")),s=s.i("V.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.u_(q,o))o=q}return o},
i0(a){return this.vM(a)},
vM(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$i0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aX(new A.uZ(o,p,a),t.P),$async$i0)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
df(a,b){return this.vP(a,b)},
vP(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$df=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bE(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dx,e=n.b,d=A.Z(j),c=d.c,d=d.i("ct<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ct(j,0,200,d)
a2.iT(j,0,200,c)
a3=a2.eu(0)
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
return A.a(a7.bW(l),$async$df)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.D(b1)
if(a7 instanceof A.cI){J.aL(m,l)
s=6
break}else if(a7 instanceof A.c_)throw b1
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
case 7:s=J.ak(m)!==0?13:14
break
case 13:s=15
return A.a(n.fk(b2,m),$async$df)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.v(A.x(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.q)(a5),++a6)a2.push(A.Ch(b0,a5[a6]))
s=16
return A.a(i.aX(new A.v0(n,a2,b2,b0),h),$async$df)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$df,r)},
dU(a,b,c,d){return this.rX(a,b,c,d)},
rX(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dU=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.u(c,t.nw)
a=A.u(c,t.G)
o=p.a,n=o.ax,m=o.ay,o=o.dx,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bN(i,0,j))
g=B.b.B(A.ae(h.length,"?",!1,c),", ")
j=[a2]
B.b.C(j,h)
a0=J
s=6
return A.a(a1.ag(u.m+g+")",j),$async$dU)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.G(e),A.jl(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.v(A.x(l))
a0=J
s=9
return A.a(a1.cg(d.a.a,"id IN ("+g+")",h),$async$dU)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.G(e),A.cf(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a4(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
mt(a,b,c,d,e){return this.a4(a,b,A.Ch(this.a.az(b).a,c),null,!1,d,e)},
uA(a,b,c){return this.mt(a,b,c,null,!1)},
a4(a,b,c,d,e,f,g){return this.uz(a,b,c,d,e,f,g)},
ms(a,b,c){return this.a4(a,b,c,null,!1,null,!1)},
uz(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a4=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.az(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bI(a4,a7,b2,a8,a9),$async$a4)
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
return A.a(n.bI(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a4)
case 8:q=B.a7
s=1
break
case 7:g=a8.a
f=$.oM()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bI(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a4)
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
return A.a(g.bS(a4,b2,a8.a),$async$a4)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aK(a6.a,1,"id = ?",[a8.a]),$async$a4)
case 19:c=b9
g=J.L(c)
d=g.gE(c)?null:A.cf(a7,g.gG(c),a5.ax,a5.ay)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dk(a4,a8.a,a8.e,b2),$async$a4)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Gv(a4,a6.a,A.dn(a7,J.w(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9)),$async$a4)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d8(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a4)
case 26:b1.Y(new A.a0(b2,A.ap([a8.a],t.N)))
b=A.bJ(B.n,a9)
b.H(0,"id")
b1.bd(new A.aT(b2,a8.a,B.at,B.ab,null,a9,b))
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
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a4)
case 31:q=B.a8
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dn(a7,J.w(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9),"id = ?",[a8.a]),$async$a4)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d8(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a4)
case 33:b1.Y(new A.a0(b2,A.ap([a8.a],t.N)))
b=A.bJ(d,a9)
b.H(0,"id")
b1.bd(new A.aT(b2,a8.a,B.at,B.A,d,a9,b))
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
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a4)
case 38:q=B.a8
s=1
break
case 37:s=a===B.a4?39:40
break
case 39:s=41
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a4)
case 41:q=B.a8
s=1
break
case 40:a0=A.bf(a7,d)
s=A.ai(a0)===i?42:43
break
case 42:s=44
return A.a(a4.W("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a4)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d8(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a4)
case 45:b1.Y(new A.a0(b2,A.ap([a8.a],t.N)))
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
a5=A.D(b0)
s=a5 instanceof A.d3?50:52
break
case 50:k=a5
s=53
return A.a(n.bI(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a4)
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
a9=A.Fs(l,a0,new A.lN(null,B.Y,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bn(a9,t.r),$async$a4)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eS(a4,b2,a8,a7,m,a0,l,a2),$async$a4)
case 57:s=58
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a4)
case 58:a5=t.N
b1.Y(new A.a0(b2,A.ap([a8.a],a5)))
b1.Y(new A.a0("lp_conflicts",A.ap([a8.a],a5)))
q=B.bt
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dn(a7,J.w(a3.h(0,"archived"),!0),a5.ax,a5.ay,a9,a3),"id = ?",[a8.a]),$async$a4)
case 59:a5=a5.CW
a5===$&&A.A()
s=60
return A.a(a5.eZ(a4,b2,a8.a,h,i,a8.c,A.ai(a3)),$async$a4)
case 60:s=61
return A.a(n.tX(b1,b2,a8.a,a8.c),$async$a4)
case 61:b1.Y(new A.a0(b2,A.ap([a8.a],t.N)))
b=A.bJ(d,a3)
b.H(0,"id")
b1.bd(new A.aT(b2,a8.a,B.ac,B.A,d,a3,b))
q=B.a6
s=1
break
case 35:q=B.a8
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a4,r)},
eS(a,b,c,d,e,f,g,h){return this.tm(a,b,c,d,e,f,g,h)},
tm(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eS=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bf(d,A.f9(d,c))
k=A.bJ(g,f)
j=A.N(k,A.n(k).c)
B.b.aG(j)
k=A.bJ(g,l)
p=A.N(k,A.n(k).c)
B.b.aG(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ai(g)
n=t.N
m=t.X
s=2
return A.a(a.cb(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ai(f),"remote_json",A.ai(l),"dirty_local",B.h.a5(j,null),"dirty_remote",B.h.a5(p,null),"detected_at",q.c.ay.$0()],n,m),B.Q),$async$eS)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(l),"base_hash",A.aq(B.l.v(B.e.v(A.ai(A.bf(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eS)
case 3:return A.e(null,r)}})
return A.f($async$eS,r)},
bI(a,b,c,d,e){return this.tf(a,b,c,d,e)},
tf(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bI=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a5(d.d,null)}catch(a1){o=t.N
e=B.h.a5(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aE(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bI)
case 2:j=q.a.CW
j===$&&A.A()
s=3
return A.a(j.bS(a,c,m),$async$bI)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.M(o.mJ(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aE(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bI)
case 7:s=5
break
case 6:s=8
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bI)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bI,r)},
d8(a,b,c,d,e,f,g,h){return this.u5(a,b,c,d,e,f,g,!0)},
u5(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d8=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.az(b)
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
return A.a(a.aE(0,"lp_sync_row",o),$async$d8)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$d8)
case 6:case 3:return A.e(null,r)}})
return A.f($async$d8,r)},
c2(a,b,c,d,e){return this.tY(a,b,c,d,e)},
tX(a,b,c,d){return this.c2(a,b,c,d,!0)},
tY(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c2=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.u(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c2)
case 2:s=3
return A.a(p.L(q.a.az(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c2)
case 3:if(g>0)a.Y(new A.a0(b,A.ap([c],o)))
return A.e(null,r)}})
return A.f($async$c2,r)},
fk(a,b){return this.wJ(a,b)},
wJ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bE(b,!0,t.N)
n=A.Z(o),m=n.c,n=n.i("ct<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ct(o,0,500,n)
i.iT(o,0,500,m)
h=i.eu(0)
g=h.length
l&1&&A.I(o,18)
A.bc(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aX(new A.v2(p,a,h),j),$async$fk)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fk,r)}}
A.v4.prototype={
$0(){var s=this,r=s.b
return r.a.a0(new A.v3(s.a,r,s.c,s.d,s.e),t.P)},
$S:19}
A.v3.prototype={
$1(a){return this.nW(a)},
nW(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.az(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.az(p),n=o.gt(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dU(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aO(t.N)
a2=o.gt(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.ml(i,c)){s=3
break}p=i.a
s=j.F(0,p)?5:7
break
case 5:s=8
return A.a(a.ms(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a4(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.ml(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.ev(b,a1,e,f),$async$$1)
case 10:d.a=new A.j3(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.uZ.prototype={
$0(){var s=this.b
return s.a.a0(new A.uY(this.a,s,this.c),t.P)},
$S:19}
A.uY.prototype={
$1(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.CW
k===$&&A.A()
o=p.c
n=o.b
s=3
return A.a(k.bS(a.b,n,o.a),$async$$1)
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
if(k!=null&&B.a.Z(o.c,k)<=0){s=1
break}s=7
return A.a(l.mt(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:6}
A.v0.prototype={
$0(){var s=this,r=s.a
return r.a.a0(new A.v_(r,s.b,s.c,s.d),t.P)},
$S:19}
A.v_.prototype={
$1(a){return this.nU(a)},
nU(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dU(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aO(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.F(0,g)?6:8
break
case 6:s=9
return A.a(o.ms(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a4(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.u(0,g)
case 7:case 4:p.length===e||(0,A.q)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.v2.prototype={
$0(){var s=this.a
return s.a.a0(new A.v1(s,this.b,this.c),t.P)},
$S:19}
A.v1.prototype={
$1(a){return this.nV(a)},
nV(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.az(g).a
e=h.az(g).a.a
d=q.c
c=t.N
b=B.b.B(A.ae(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.u(c,t.G)
a1=J
s=2
return A.a(i.cg(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.ax,h=h.ay
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.G(m),A.cf(f,n,o,h))
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
case 6:a2.Y(new A.a0(g,A.tv(d,A.Z(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.q)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dH(null,null,c,h)
p.C(0,j)
p.j(0,"hidden",!0)
a2.bd(new A.aT(g,k,B.at,B.bV,j,p,B.db))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.b5.prototype={}
A.v5.prototype={
fs(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.CW
f===$&&A.A()
s=3
return A.a(f.f4(25,p.c.ay.$0()),$async$fs)
case 3:o=b
f=J.L(o)
if(f.gE(o)){q=B.a1
s=1
break}if(p.f){q=p.b9(o)
s=1
break}f=f.gt(o),n=B.a1
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dV(f.gn()),$async$fs)
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
return A.f($async$fs,r)},
dV(a){return this.t8(a)},
t8(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.CW
l===$&&A.A()
m=m.r
s=3
return A.a(l.ep(m,a.a,a.b),$async$dV)
case 3:o=c
if(o==null){q=B.a1
s=1
break}s=4
return A.a(l.bS(m,o.a,o.b),$async$dV)
case 4:n=c
if(n==null){q=B.a1
s=1
break}if(o.e==null){q=p.t6(o,n)
s=1
break}q=p.jx(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
bF(a,b,c,d,e){return this.qU(a,b,c,d,e)},
qT(a,b,c,d){return this.bF(a,b,c,!1,d)},
qR(a,b,c){return this.bF(a,b,c,!1,!1)},
qS(a,b,c,d){return this.bF(a,b,c,d,!1)},
qU(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bF=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bF)
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
s=k instanceof A.c_?8:10
break
case 8:n.e.$0()
q=B.an
s=1
break
s=9
break
case 10:s=k instanceof A.cE?11:13
break
case 11:k=n.a.CW
k===$&&A.A()
s=14
return A.a(k.n3("forbidden_push",a.b,a.a),$async$bF)
case 14:q=B.cU
s=1
break
s=12
break
case 13:s=k instanceof A.fJ?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.cX(a,"validation_push",m.a),$async$bF)
case 20:q=B.M
s=1
break
case 19:q=n.ct(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cI){q=n.dO(a,b,!e)
s=1
break}else if(k instanceof A.bu){l=k
q=n.ct(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bF,r)},
jw(a,b,c){return this.t7(a,b,c)},
t6(a,b){return this.jw(a,b,!1)},
t7(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jw=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bF(a,b,new A.v7(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jw,r)},
jA(a,b,c){return this.tn(a,b,c)},
tn(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qT(a,b,new A.vc(p,a,p.a.az(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jA,r)},
jx(a,b){return this.t9(a,b)},
t9(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qR(a,b,new A.va(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jx,r)},
d4(a,b,c,d){return this.tb(a,b,c,d)},
ta(a,b,c){return this.d4(a,b,c,!1)},
tb(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d4=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.lb(a,c)
j=n.a.az(a.a).a
i=a.d
s=A.aq(B.l.v(B.e.v(A.ai(A.bf(j,A.f9(j,c))))).a)===A.aq(B.l.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eQ(a,c),$async$d4)
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
i=A.D(f)
s=i instanceof A.d3?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$d4)
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
return A.a(n.dR(a,b,c,j,m,l),$async$d4)
case 14:g=a0
if(g==null){q=B.bb
s=1
break}q=n.bF(a,b,new A.v8(n,a,A.ai(A.bf(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d4,r)},
b9(a){return this.t5(a)},
t5(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b9=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.l([],t.k1)
c0=t.N
c1=A.u(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.u(c0,c0)
c0=J.E(d0),d=n.a,c=d.y,b=n.b,a=d.dx,a0=d.r
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.CW
a2===$&&A.A()
s=5
return A.a(a2.ep(a0,a1.a,a1.b),$async$b9)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bS(a0,m.a,m.b),$async$b9)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.v(A.x('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.y
a5===$&&A.A()
s=11
return A.a(a5.bW(a1),$async$b9)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.D(c8)
s=a1 instanceof A.cI?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lG(m,l),$async$b9)
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
q=B.an
s=1
break
s=19
break
case 20:s=a1 instanceof A.cE?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.n3("forbidden_push",m.b,a1),$async$b9)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bu?25:27
break
case 25:i=a1
s=28
return A.a(n.ct(m,l,i),$async$b9)
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
if(a1!==a5)A.v(A.ev('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a1("")
A.cg(a7,A.bf(a4,A.f9(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c2()
a5=A.cW(a8)
a5.u(0,a1)
a5.p()
a9=A.aq(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c2()
a1=A.cW(a8)
a1.u(0,a5)
a1.p()
s=a9===A.aq(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eQ(m,k),$async$b9)
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
a1=A.D(c9)
s=a1 instanceof A.d3?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fi(e.a,a5,"corrupt_payload",m.d,a1),$async$b9)
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
return A.a(n.dR(m,l,k,a4,g,f),$async$b9)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a1("")
A.cg(a7,A.bf(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.fN(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.fN(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.c1(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b9)
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
dR(a,b,c,d,e,f){return this.rp(a,b,c,d,e,f)},
rp(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dR=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.f9(d,c)
n=A.Fs(e,f,new A.lN(null,B.Y,!1),a.b,A.bf(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bn(n,t.r),$async$dR)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.ht(a,b,c,m,e,f),$async$dR)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
c1(a,b,c){return this.tI(a,b,c)},
tI(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c1=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.y
a7===$&&A.A()
s=7
return A.a(a7.fq(b9),$async$c1)
case 7:m=c3
a7=t.N
l=A.u(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.q)(b9),++a9){k=b9[a9]
J.bZ(l,k.a,k)}j=l
i=A.aO(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aL(i,h.a)){l=A.bt("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.bt("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.S(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jq(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c2()
b2=A.cW(b1)
b2.u(0,b0)
b2.p()
b2=A.aq(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aL(g,new A.j5(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
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
return A.a(a8.fi(b4,b2,b3,e.d,b0),$async$c1)
case 13:++b7
case 11:s=8
break
case 9:l=a7.CW
l===$&&A.A()
s=14
return A.a(l.kU(g),$async$c1)
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
l=A.D(b8)
s=l instanceof A.ec?15:17
break
case 15:q=n.bZ(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cE?18:20
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
return A.a(n.dV(n.lN(a0)),$async$c1)
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
case 23:q=new A.b5(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.c_?25:27
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
a3=a2 instanceof A.eF?a2:new A.h9("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.CW
b0===$&&A.A()
s=34
return A.a(b0.bS(a8,a4.b,a4.c),$async$c1)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.ct(n.lN(a4),a5,a3),$async$c1)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.q)(b9),++a9
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
return A.f($async$c1,r)},
bZ(a,b,c){return this.p7(a,b,c)},
p7(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bZ=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.L(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.CW
h===$&&A.A()
b3=g.b
s=5
return A.a(h.fi("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bZ)
case 5:q=B.M
s=1
break
case 4:a0=B.c.M(b3.gm(b5),2)
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
return A.a(a6.fq(j),$async$bZ)
case 13:i=b9
h=A.u(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.bZ(h,g.a,g)}f=h
e=A.aO(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aL(e,d.a)){a6=A.bt("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.bt("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.S(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jq(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dW(a7,a8,a9,b0==null?b.d:b0),$async$bZ)
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
return A.a(a7.fi(b1,a9,b0,b.d,a8),$async$bZ)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.D(b4)
s=a6 instanceof A.ec?21:23
break
case 21:s=24
return A.a(n.bZ(j,b6,b7),$async$bZ)
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
case 8:q=new A.b5(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bZ,r)},
jq(a,b){var s=b==null?a.d:b
return new A.cn(a.b,a.c,B.v,s,a.e,A.aq(B.l.v(B.e.v(a.d)).a),B.p,a.a,0,null)},
lN(a){return this.jq(a,null)},
dW(a,b,c,d){return this.tN(a,b,c,d)},
eQ(a,b){return this.dW(a,b,null,null)},
tN(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dW=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.az(a.a).a
n=A.f9(o,b)
m=d==null
l=m?A.ai(A.bf(o,n)):d
p=p.CW
p===$&&A.A()
s=2
return A.a(p.kU(A.l([new A.j5(a,l,b.c,A.aq(B.l.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dW)
case 2:return A.e(null,r)}})
return A.f($async$dW,r)},
lb(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ev('record id "'+s+'" does not match requested "'+r+'"'))},
ct(a,b,c){return this.tw(a,b,c)},
tw(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$ct=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.eF?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.CW
o===$&&A.A()
s=5
return A.a(o.n4(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$ct)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mK(l,k)
m=p.a.CW
m===$&&A.A()
s=6
return A.a(m.xh(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$ct)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ct,r)},
cX(a,b,c){return this.pH(a,b,c)},
pG(a,b){return this.cX(a,b,null)},
pH(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.CW
o===$&&A.A()
p=c==null?b:c
s=2
return A.a(o.fi(p,a.b,b,a.d,a.a),$async$cX)
case 2:return A.e(null,r)}})
return A.f($async$cX,r)},
dO(a,b,c){return this.qM(a,b,c)},
lG(a,b){return this.dO(a,b,!0)},
qM(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dO=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.az(a.a)
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
i=A.D(h)
s=i instanceof A.d3?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$dO)
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
return A.a(n.fZ(a,b,m,l),$async$dO)
case 14:q=B.bb
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dO,r)},
fZ(a,b,c,d){return this.pW(a,b,c,d)},
pW(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$fZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bJ(c,d)
n=A.N(o,A.n(o).c)
B.b.aG(n)
p=b.r
if(p==null)p=A.ai(c)
s=2
return A.a(q.a.a0(new A.v6(q,a,p,d,n),t.P),$async$fZ)
case 2:return A.e(null,r)}})
return A.f($async$fZ,r)},
ht(a,b,c,d,e,f){return this.tl(a,b,c,d,e,f)},
tl(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$ht=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.az(a.a).a
m=A.bf(n,A.f9(n,c))
l=A.bJ(e,f)
k=A.N(l,A.n(l).c)
B.b.aG(k)
l=A.bJ(e,m)
p=A.N(l,A.n(l).c)
B.b.aG(p)
s=2
return A.a(o.a0(new A.vb(q,a,b,e,f,m,k,p,n,c),t.P),$async$ht)
case 2:return A.e(null,r)}})
return A.f($async$ht,r)}}
A.v7.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.A()
s=7
return A.a(j.hV(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eQ(k,m),$async$$0)
case 8:q=B.a2
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.D(h) instanceof A.fp){q=n.a.jA(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:20}
A.vc.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.A()
s=3
return A.a(l.bW(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.pG(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.aq(B.l.v(B.e.v(A.ai(A.bf(l,A.f9(l,o))))).a)===A.aq(B.l.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eQ(m,o),$async$$0)
case 9:q=B.a2
s=1
break
case 8:q=n.d4(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.va.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.A()
s=3
return A.a(l.bW(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lG(m,p.c)
s=1
break}n.lb(m,o)
if(o.c===m.e){l=p.c
q=n.qS(m,l,new A.v9(n,m,o,l),!0)
s=1
break}q=n.ta(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.v9.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.A()
s=7
return A.a(j.fE(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eQ(k,m),$async$$0)
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
$S:20}
A.v8.prototype={
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
return A.a(l.fE(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dW(j,b,p.e.a,m),$async$$0)
case 3:q=B.a2
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.v6.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cb(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ai(q.d),"remote_json",A.ai(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a5(q.e,null),"dirty_remote",B.h.a5(B.p,null),"detected_at",q.a.c.ay.$0()],k,j),B.Q),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.Y(new A.a0(n,A.ap([m],k)))
a.Y(new A.a0("lp_conflicts",A.ap([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.vb.prototype={
$1(a){return this.nY(a)},
nY(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cb(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ai(q.e),"remote_json",A.ai(o),"dirty_local",B.h.a5(q.r,null),"dirty_remote",B.h.a5(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.Q),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(o),"base_hash",A.aq(B.l.v(B.e.v(A.ai(A.bf(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.Y(new A.a0(j,A.ap([k],n)))
a.Y(new A.a0("lp_conflicts",A.ap([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.c9.prototype={
a3(){return"SyncEngineState."+this.b}}
A.bk.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.h6.prototype={}
A.h5.prototype={}
A.w1.prototype={
gld(){return 36},
dE(a){return this.oF(a)},
oF(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dE=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dx,g=new A.bD(g,g.r,g.e,A.n(g).i("bD<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iw(m),$async$dE)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gld():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.ak(c.a+1,n.gld())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bD(m,a),$async$dE)
case 13:a5.aL(a6,a9)
case 11:++j
s=10
break
case 12:if(A.mW(h)!=null)A.v(A.x(u.L))
b=h.b
b===$&&A.A()
s=14
return A.a(b.aY(new A.w2(c,n,m,a3),B.o,f),$async$dE)
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
return A.f($async$dE,r)},
bD(a,b){return this.oE(a,b)},
oE(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bD=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aO(t.N)
m=B.c.iA(B.c.bN(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.y
g===$&&A.A()
s=5
return A.a(g.fh(a4,B.cE,h,null,o,m),$async$bD)
case 5:f=a7
g=J.L(f)
if(g.gE(f)){s=4
break}for(e=g.gt(f);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=g.gt(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hs(a4,e),$async$bD)
case 6:c=a7
b=A.l([],l)
for(e=g.gt(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aN||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.df(a4,b),$async$bD)
case 9:i+=b.length
case 8:h=g.ga_(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ag("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bD)
case 10:a1=a7
a2=A.l([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.G(a)
if(!n.F(0,a)){if(J.w(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fk(a4,a2),$async$bD)
case 13:case 12:s=14
return A.a(k.ag("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bD)
case 14:a3=a7
k=J.L(a3)
s=k.gV(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.G(g))}s=17
return A.a(j.df(a4,l),$async$bD)
case 17:case 16:q=new A.h5(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bD,r)},
hs(a,b){return this.t_(a,b)},
t_(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.u(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bN(l,0,m))
j=B.b.B(A.ae(k.length,"?",!1,g),", ")
m=[a]
B.b.C(m,k)
e=J
s=6
return A.a(o.ag(u.m+j+")",m),$async$hs)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.G(h),A.jl(i))
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
A.w2.prototype={
$1(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.ew(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.bu.prototype={
l(a){return A.dr(this).l(0)+": "+this.a},
$iH:1}
A.h9.prototype={}
A.eF.prototype={}
A.jb.prototype={}
A.c_.prototype={}
A.cE.prototype={}
A.cI.prototype={}
A.fJ.prototype={}
A.fL.prototype={}
A.fp.prototype={}
A.ec.prototype={}
A.h3.prototype={
gm(a){return this.b}}
A.cK.prototype={}
A.fN.prototype={}
A.j4.prototype={}
A.kE.prototype={
a3(){return"BackendHintKind."+this.b}}
A.cB.prototype={}
A.Am.prototype={
$2(a,b){return B.a.iq(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:135}
A.w3.prototype={
mK(a,b){var s,r
if(b!=null){s=this.rO(b)
if(A.ax(s))return A.dx(0,0,s<0?0:s)
if(s instanceof A.aM){r=s.a-this.ay.$0()
return r<=0?B.D:A.dx(0,r,0)}return B.au}return A.Fl(a,B.au,B.av,this.at)},
mJ(a){return this.mK(a,null)},
rO(a){var s=B.a.ci(a),r=A.j1(s,null)
if(r!=null)return r
return A.Iq(s)}}
A.j3.prototype={}
A.jj.prototype={}
A.we.prototype={
iv(a){return this.xd(a)},
xd(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.en("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iv)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=A.a6(J.S(l.gG(m),"cursor_updated"))
n=A.a6(J.S(l.gG(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.j3(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
ev(a,b,c,d){return this.y4(a,b,c,d)},
y4(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ev=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ev)
case 5:s=m.by(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$ev)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$ev)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ev,r)},
iw(a){return this.xf(a)},
xf(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.en("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iw)
case 3:n=c
m=J.L(n)
if(m.gE(n)){q=B.dg
s=1
break}o=A.bd(J.S(m.gG(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jj(o,A.bd(J.S(m.gG(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ew(a,b,c,d){return this.y8(a,b,c,d)},
y8(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ew=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aK("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ew)
case 5:s=m.by(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$ew)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$ew)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ew,r)},
hS(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b1("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hS)
case 3:l=b
k=J.L(l)
j=k.gE(l)?B.n:k.gG(l)
k=A.bd(j.h(0,"pending"))
if(k==null)k=0
o=A.bd(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bd(j.h(0,"hidden"))
if(n==null)n=0
m=A.bd(j.h(0,"blocked"))
q=new A.o_([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)}}
A.cO.prototype={
a3(){return"SyncState."+this.b}}
A.i0.prototype={
a3(){return"AccessState."+this.b}}
A.fI.prototype={
a3(){return"OutboxKind."+this.b}}
A.iZ.prototype={
a3(){return"OpQueueKind."+this.b}}
A.AI.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cN.prototype={}
A.wd.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
i=j.h(0,"record_id")
i.toString
A.G(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.bd(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fr(B.co,A.G(p))
A.Fe(j.h(0,"dirty_fields"))
o=A.bd(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fr(B.cm,A.G(n))
A.a6(j.h(0,"op_id"))
m=A.bd(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bd(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.bd(j.h(0,"schema_ver"))
return new A.cN(i,s,r,q,p,o,n,m,l,k)},
$S:136}
A.cn.prototype={}
A.ui.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
s=j.h(0,"record_id")
s.toString
A.G(s)
r=j.h(0,"kind")
r.toString
r=A.fr(B.cx,A.G(r))
q=j.h(0,"payload_json")
q.toString
A.G(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Fe(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.G(m)
l=j.h(0,"created_at")
l.toString
A.an(l)
k=j.h(0,"updated_at")
k.toString
A.an(k)
return new A.cn(i,s,r,q,p,o,n,m,l,A.a6(j.h(0,"depends_on_op")))},
$S:137}
A.eA.prototype={}
A.ud.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.an(l)
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
q=A.fr(B.cs,A.G(q))
p=m.h(0,"payload_json")
p.toString
A.G(p)
o=m.h(0,"state")
o.toString
A.G(o)
o=A.bd(m.h(0,"attempt_count"))
if(o==null)o=0
A.bd(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.an(m)
return new A.eA(l,s,r,q,p,o,n)},
$S:138}
A.AG.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:51}
A.AH.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:51}
A.wr.prototype={}
A.tw.prototype={
cG(a,b){return this.w3(a,b)},
w3(a,b){var s=0,r=A.h(t.X),q,p
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.f8(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)},
ip(a,b,c,d){return this.wS(a,b,c,d)},
wS(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$ip=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.wO(a6,a7)
a=t.N
a0=new A.ig(A.u(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.a6(A.FA(a2?null:A.oE(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.tx(a3)
a0.e=new A.ty(a3)
p=4
b.O("PRAGMA journal_mode=TRUNCATE")
f=b.kR("PRAGMA journal_mode")
n=f.gG(f).b[0]
if(J.a_(n).toLowerCase()!=="truncate"){a=A.x("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.M2(a2?null:A.oE(a8))
e=t.bE.a(J.S(m,"stores"))
l=e==null?A.l([],t.aw):e
d=A.bd(J.S(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.Eq(J.S(m,"destructiveBackup"))
j=f!==!1
i=A.M1(A.FA(a2?null:A.oE(a8),"fieldCipher"))
if(A.LK(l,i)){a=A.aw("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.wP(A.u(a,t.p))
s=7
return A.a(A.d_(h,a0,j,i,k,a6,B.aA,l),$async$ip)
case 7:g=b0
a1=!0
a=b
a2=t.be
f=t.S
q=new A.lL(a,new A.x_(a,g,A.u(f,t.oS),new A.wv(A.LV(),A.u(f,t.oc)),A.aO(a2)),A.u(t.eg,a2))
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
return A.f($async$ip,r)}}
A.tx.prototype={
$1(a){return A.ox(this.a,a)},
$S:140}
A.ty.prototype={
$1(a){return A.oy(this.a,a)},
$S:141}
A.lL.prototype={
cG(a,b){return this.w4(a,b)},
w4(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.Bj(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.HB(n)
if(o==null){q=A.Bj(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.i9(p.e.kv(a,new A.tH(a)),o),$async$cG)
case 3:q=m.HC(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)}}
A.tH.prototype={
$0(){return new A.hn(this.a)},
$S:142}
A.hn.prototype={$ing:1}
A.Aj.prototype={
$2(a,b){this.a.j(0,J.a_(a),A.dp(b))},
$S:28}
A.Ad.prototype={
$2(a,b){this.a.j(0,J.a_(a),A.Ac(b))},
$S:28}
A.cT.prototype={}
A.wv.prototype={
gnm(){var s=this.r
return new A.ao(s,A.n(s).i("ao<2>")).vX(0,0,new A.wy())},
mR(){var s,r=this.r,q=A.n(r).i("ao<2>"),p=q.i("cl<o.E,i>"),o=A.N(new A.cl(new A.aj(new A.ao(r,q),new A.ww(this.f.$0()),q.i("aj<o.E>")),new A.wx(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.q)(o),++s)r.H(0,o[s])
return p}}
A.wy.prototype={
$2(a,b){return a+b.f},
$S:143}
A.ww.prototype={
$1(a){return!a.z.ki(this.a)},
$S:144}
A.wx.prototype={
$1(a){return a.a},
$S:145}
A.AA.prototype={
$1(a){return A.M3(a)},
$S:146}
A.Ar.prototype={
$1(a){return B.b.bM(a.c,new A.Aq())},
$S:147}
A.Aq.prototype={
$1(a){return a.e},
$S:52}
A.hg.prototype={
q(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.wU.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.eB)},
$S:63}
A.nb.prototype={
q(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.q())
else q.j(0,"r",r.c)
return q}}
A.wR.prototype={
q(){var s,r=A.u(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.j2.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iH:1}
A.aJ.prototype={
ai(a,b,c){var s,r,q=this.a.h(0,a)
if(!c.b(q)){s=A.DJ(c)
r=q==null?"null":A.DK(q)
throw A.b(A.d7('Missing or invalid "'+a+'" argument'+(" for "+b)+": expected "+s+", got "+r+"."))}return q},
aw(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.d7('Invalid "'+a+'" argument: expected '+A.DJ(b)+", got "+A.DK(s)+"."))
return b.a(s)}}
A.hh.prototype={}
A.js.prototype={}
A.eM.prototype={}
A.Ag.prototype={
$2(a,b){var s,r,q=J.a_(a)
if(t.f.b(b))this.a.j(0,q,A.f5(b))
else{s=this.a
if(t.j.b(b)){r=J.b3(b,new A.Af(),t.z)
r=A.N(r,r.$ti.i("V.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:41}
A.Af.prototype={
$1(a){return t.f.b(a)?A.f5(a):a},
$S:32}
A.nf.prototype={
d1(a,b){return this.q9(a,b)},
q9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$d1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cA(),$async$d1)
case 3:o=p.d,n=new A.aS(o,o.r,o.e,A.n(o).i("aS<2>"))
case 4:if(!n.k()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$d1)
case 6:s=4
break
case 5:o.a9(0)
o=p.f
if(o!=null)o.D()
p.f=null
p.e.r.a9(0)
o=p.as
o=o==null?null:o.D()
s=7
return A.a(o instanceof A.t?o:A.bn(o,t.H),$async$d1)
case 7:p.as=null
p.Q.a9(0)
s=8
return A.a(p.c.p(),$async$d1)
case 8:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d1,r)},
h7(a,b){return this.qo(a,b)},
qo(a3,a4){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$h7=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a1=a4.d.h(0,"request")
if(!t.f.b(a1))throw A.b(A.d7('Contract envelope requires a "request" map.'))
j=A.f5(a1)
i=j.h(0,"tag")
if(typeof i!="string")A.v(A.a2("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.v(A.a2("Missing request payload."))
g=A.oF(h)
j=t.G
if(!j.b(g))A.v(A.a2("Malformed request payload."))
f=A.GY(i,g)
if(f==null)A.v(A.a2("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.A()
s=7
return A.a(e.vZ(m),$async$h7)
case 7:l=a6
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gaA(),"payload",A.oG(e.q())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
k=A.D(a2)
e=k
b=J.a_(e)
if(e instanceof A.dI){a=A.Kn(e)
b=e.a
if(e instanceof A.eK&&e.b!=null)a0=A.m(["field",e.b],t.N,t.X)
else if(e instanceof A.eJ)a0=A.m(["field",e.b],t.N,t.X)
else a0=e instanceof A.ez?A.m(["field",e.b],t.N,t.X):null}else{if(e instanceof A.jr){b=e.a
a="WireException"}else if(e instanceof A.bi){b=e.a
a="StateError"}else if(e instanceof A.bz){b=A.r(e.d)
a="ArgumentError"}else if(t.b0.b(e)){b=A.r(e.d)
a="RangeError"}else a="unknown"
a0=null}e=t.N
d=A.u(e,t.X)
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
return A.f($async$h7,r)},
cA(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.w
q.w=null
p=q.y
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.t?p:A.bn(p,t.H),$async$cA)
case 2:q.y=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aH(),$async$cA)
case 5:s=6
return A.a(o.eA(),$async$cA)
case 6:o.eA()
p=o.ax
if((p.c&4)===0)p.p()
o.w.a.p()
case 4:q.z=q.x=null
return A.e(null,r)}})
return A.f($async$cA,r)}}
A.x_.prototype={
i9(a,b){return this.wi(a,b)},
wi(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$i9=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.Q.u(0,a)
if(n.as==null){i=n.c.e
i===$&&A.A()
i=i.b
n.as=new A.b0(i,A.n(i).i("b0<1>")).aU(new A.x0(n))}m=null
try{m=A.IA(b)}catch(d){l=A.D(d)
i=J.a_(l)
q=new A.eM("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eM("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.j6(a,m),$async$i9)
case 7:k=a0
i=m.b
q=new A.js(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.D(e)
i=m.b
g=J.a_(j)
f=A.m(["type",A.Ma(j)],t.N,t.X)
q=new A.eM("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i9,r)},
j6(a,b){return this.pL(a,b)},
pL(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$j6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.at
if(l===$){o=A.m(["capabilities",p.gq6(),"open",p.gqN(),"watch_cancel",p.gra(),"sync_start",p.gr2(),"sync_stop",p.gr6(),"sync_now",p.gqV(),"sync_pause",p.gqX(),"sync_resume",p.gqZ(),"sync_set_connectivity",p.gr0(),"sync_update_auth",p.gr8(),"sync_status",p.gr4(),"file_upload_begin",p.gqE(),"file_upload_chunk",p.gqG(),"file_upload_finish",p.gqI(),"file_upload_abort",p.gqC(),"file_list",p.gqu(),"file_open",p.gqw(),"file_remove",p.gqy(),"file_gc",p.gqs(),"file_enforce_storage_cap",p.gqq(),"file_storage_status",p.gqA(),"conflicts_list",p.gqh(),"conflicts_get",p.gqf(),"conflicts_resolve",p.gqj(),"conflicts_accept_local",p.gqb(),"conflicts_accept_remote",p.gqd(),"conflicts_watch",p.gql(),"contract_request",p.gqn(),"close",p.gq8()],t.N,t.n1)
p.at!==$&&A.AO()
p.at=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.d7("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j6,r)}}
A.x0.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gaA(),"payload",a.q()],r,q)],r,q)
for(r=this.a.Q,r=A.hv(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).a.da(A.f8(p))}},
$S:150}
A.nl.prototype={}
A.nd.prototype={
h5(a,b){return this.qi(a,b)},
qi(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$h5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.aJ(b.d).aw("store",o)
m=p.c.cy
m===$&&A.A()
l=J
s=3
return A.a(m.fg(n),$async$h5)
case 3:m=l.b3(d,A.F9(),t.G)
m=A.N(m,m.$ti.i("V.E"))
q=A.m(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)},
h4(a,b){return this.qg(a,b)},
qg(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$h4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.aJ(b.d)
m=t.N
l=n.ai("store","conflicts_get",m)
k=n.ai("id","conflicts_get",m)
m=p.c.cy
m===$&&A.A()
s=3
return A.a(m.dz(l,k),$async$h4)
case 3:o=d
q=o==null?null:A.Fh(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h4,r)},
h6(a,b){return this.qk(a,b)},
qk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$h6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=new A.aJ(n)
l=t.N
k=m.ai("store","conflicts_resolve",l)
j=m.ai("id","conflicts_resolve",l)
n=A.Ac(n.h(0,"merged"))
n.toString
t.G.a(n)
o=p.c.cy
o===$&&A.A()
s=3
return A.a(o.eq(j,n,k),$async$h6)
case 3:q=A.m(["ok",!0],l,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h6,r)},
h2(a,b){return this.qc(a,b)},
qc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$h2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.aJ(b.d)
n=t.N
m=o.ai("store","conflicts_accept_local",n)
l=o.ai("id","conflicts_accept_local",n)
k=p.c.cy
k===$&&A.A()
s=3
return A.a(k.eY(m,l),$async$h2)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h2,r)},
h3(a,b){return this.qe(a,b)},
qe(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$h3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.aJ(b.d)
n=t.N
m=o.ai("store","conflicts_accept_remote",n)
l=o.ai("id","conflicts_accept_remote",n)
k=p.c.cy
k===$&&A.A()
s=3
return A.a(k.e2(m,l),$async$h3)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h3,r)},
jc(a,b){return this.qm(a,b)},
qm(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$jc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.aJ(b.d)
n=t.S
m=o.ai("watchId","conflicts_watch",n)
l=t.N
k=o.aw("store",l)
j=p.c.cy
j===$&&A.A()
p.d.j(0,m,new A.nl(new A.wW(j.xM(k).aU(new A.wX(p,a,m)))))
q=A.m(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jc,r)},
hm(a,b){return this.rb(a,b)},
rb(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d.H(0,new A.aJ(b.d).ai("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$hm)
case 5:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hm,r)}}
A.wX.prototype={
$1(a){var s=J.b3(a,A.F9(),t.G)
s=A.N(s,s.$ti.i("V.E"))
this.b.a.da(A.f8(A.m(["v",3,"op","worker_event","watchId",this.c,"value",A.dp(s)],t.N,t.X)))},
$S:151}
A.wW.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.D(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.ne.prototype={
hf(a,b){return this.qO(a,b)},
qO(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$hf=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.aJ(a3).aw("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.u(a3,a3)
n=t.f
if(n.b(a5))a5.a1(0,new A.wY(o))
s=a4!=null?3:4
break
case 3:m=J.E(a4),l=p.c,k=l.dx,j=t.X,i=l.ax==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.v(A.a8("Schema must be a map: "+A.r(h),null,null))
g=A.po(A.f5(h),j)
if(B.b.bM(g.c,new A.wZ())&&i)throw A.b(A.aw('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.Bw(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a1("")
A.cg(c,f.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cW(a)
a0.u(0,b)
a0.p()
a0=d!==A.aq(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.d7('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.I(e)?7:9
break
case 7:s=10
return A.a(l.aR(g),$async$hf)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.v(A.x('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a1("")
A.cg(c,a1.c.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cW(a)
a0.u(0,b)
a0.p()
a0=A.aq(a.a.a)
c=new A.a1("")
A.cg(c,f.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a2=A.cW(a)
a2.u(0,b)
a2.p()
if(a0!==A.aq(a.a.a))throw A.b(A.d7('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)}}
A.wY.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:28}
A.wZ.prototype={
$1(a){return a.e},
$S:52}
A.nh.prototype={
pU(){if(this.f!=null)return
this.f=A.Dy(A.dx(9e8,0,0),new A.x1(this))},
jk(a,b){return this.qF(a,b)},
qF(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$jk=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:p.pU()
o=new A.aJ(b.d)
n=p.r++
m=p.e
l=t.N
k=o.ai("store","file_upload_begin",l)
j=o.ai("recordId","file_upload_begin",l)
i=o.aw("field",l)
if(i==null)i="imgs"
h=o.aw("name",l)
if(h==null)h="blob.bin"
g=t.S
f=o.ai("size","file_upload_begin",g)
e=o.aw("expectedSha256",l)
d=o.aw("allowVolatileBlobs",t.y)
m.mR()
c=m.r
if(c.a>=16)A.v(A.aw("Maximum concurrent uploads exceeded (16).",null))
if(f<0||f>268435456)A.v(A.aw("Invalid file size: "+f,null))
if(m.gnm()+f>536870912)A.v(A.aw("Aggregate upload quota exceeded: "+m.gnm()+" + "+f+" > 536870912",null))
m=m.f.$0().iY(18e8)
c.j(0,n,new A.cT(n,k,j,i,h,f,e,d===!0,A.l([],t.bs),m))
q=A.m(["uploadId",n],l,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jk,r)},
jl(a,b){return this.qH(a,b)},
qH(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$jl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=new A.aJ(i).ai("uploadId","file_upload_chunk",t.S)
i=A.Ac(i.h(0,"chunk"))
i.toString
o=p.e
i=new Uint8Array(A.b2(t.L.a(i)))
n=o.r
m=n.h(0,h)
if(m==null)A.v(A.aw("Unknown upload session: "+h,null))
o=o.f
if(!m.z.ki(o.$0())){n.H(0,h)
A.v(A.aw("Upload session expired: "+h,null))}l=i.length
if(l>262144){n.H(0,h)
A.v(A.aw("Chunk too large: "+l+" > 262144",null))}k=m.x
j=m.f
if(k+l>j){n.H(0,h)
A.v(A.aw("Upload exceeds declared size "+j,null))}m.y.push(i)
m.x+=l
m.z=o.$0().iY(18e8)
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jl,r)},
hd(a,b){return this.qJ(a,b)},
qJ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.aJ(b.d).ai("uploadId","file_upload_finish",t.S)
f=p.e
e=f.r.H(0,g)
if(e==null)A.v(A.aw("Unknown upload session: "+g,null))
if(!e.z.ki(f.f.$0()))A.v(A.aw("Upload session expired: "+g,null))
f=e.x
o=e.f
if(f!==o)A.v(A.aw("Upload size mismatch: expected "+o+" but got "+f,null))
f=p.c.db
f===$&&A.A()
n=e.b
m=e.c
l=new A.x2(e).$0()
k=e.d
j=e.e
i=e.r
s=3
return A.a(f.d9(e.w,l,i,o,k,j,m,n),$async$hd)
case 3:h=d
q=A.m(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
jj(a,b){return this.qD(a,b)},
qD(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$jj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.e.r.H(0,new A.aJ(b.d).ai("uploadId","file_upload_abort",t.S))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jj,r)},
ha(a,b){return this.qv(a,b)},
qv(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$ha=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.aJ(b.d)
j=p.c.db
j===$&&A.A()
o=t.N
n=k.ai("store","file_list",o)
m=k.ai("recordId","file_list",o)
l=k.aw("field",o)
i=J
s=3
return A.a(j.eh(l==null?"imgs":l,m,n),$async$ha)
case 3:j=i.b3(d,A.Mk(),t.G)
j=A.N(j,j.$ti.i("V.E"))
q=A.m(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
dN(a,b){return this.qx(a,b)},
qx(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dN=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.aJ(b.d)
c=m.c.db
c===$&&A.A()
i=t.N
h=d.ai("store","file_open",i)
g=d.ai("recordId","file_open",i)
f=d.aw("field",i)
if(f==null)f="imgs"
e=d.aw("index",t.S)
if(e==null)e=0
s=3
return A.a(c.fm(f,e,g,d.aw("refId",i),h),$async$dN)
case 3:l=a1
k=A.l([],t.t)
h=new A.cd(A.bY(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.k(),$async$dN)
case 9:if(!a1){s=8
break}j=h.gn()
J.AU(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.D(),$async$dN)
case 10:s=n.pop()
break
case 6:q=A.m(["bytes",A.dp(new Uint8Array(A.b2(k))),"size",J.ak(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dN,r)},
hb(a,b){return this.qz(a,b)},
qz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.aJ(b.d)
i=p.c.db
i===$&&A.A()
o=t.N
n=j.ai("store","file_remove",o)
m=j.ai("recordId","file_remove",o)
l=j.aw("field",o)
if(l==null)l="imgs"
k=j.aw("index",t.S)
if(k==null)k=0
s=3
return A.a(i.fv(0,l,k,m,j.aw("refId",o),n),$async$hb)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
h9(a,b){return this.qt(a,b)},
qt(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$h9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.aJ(b.d)
k=p.c.db
k===$&&A.A()
o=t.S
n=l.aw("blobGraceMs",o)
n=A.dx(0,n==null?6048e5:n,0)
m=l.aw("tmpGraceMs",o)
j=A
s=3
return A.a(k.bh(n,A.dx(0,m==null?864e5:m,0)),$async$h9)
case 3:q=j.m(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
h8(a,b){return this.qr(a,b)},
qr(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$h8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.db
n===$&&A.A()
o=t.S
m=A
s=3
return A.a(n.cD(new A.aJ(b.d).ai("maxBytes","file_enforce_storage_cap",o)),$async$h8)
case 3:q=m.m(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
hc(a,b){return this.qB(a,b)},
qB(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.db
o===$&&A.A()
n=A
s=3
return A.a(o.gkj(),$async$hc)
case 3:q=n.m(["durable",d],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)}}
A.x1.prototype={
$1(a){return this.a.e.mR()},
$S:47}
A.x2.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bV(A.e_(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:case 1:return A.bV(null,0,r)
case 2:return A.bV(o.at(-1),1,r)}})
var s=0,r=A.EI($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.EX(r)},
$S:152}
A.ni.prototype={
jb(a,b){return this.q7(a,b)},
q7(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$jb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.w
n=p.a.kR("PRAGMA journal_mode")
q=A.m(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gG(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jb,r)}}
A.zt.prototype={
jX(){var s=0,r=A.h(t.q),q,p=this,o
var $async$jX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.DA(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jX,r)},
kw(a){return this.xj(a)},
xj(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$kw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.DA(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kw,r)}}
A.nj.prototype={
dP(a,b){return this.r3(a,b)},
r3(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dP=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.aJ(a5.d)
a2=t.N
a3=a1.aw("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.aw("syncStart requires baseUrl.",null))
s=3
return A.a(p.cA(),$async$dP)
case 3:o=a1.aw("token",a2)
n=a1.aw("scopeId",a2)
if(n==null)n="web-sync"
m=new A.zt(o,n)
l=A.n2(a3)
k=p.c
j=k.dx
i=A.n(j).i("T<1>")
j=A.N(new A.T(j,i),i.i("o.E"))
i=t.hw
h=A.dQ(null,null,i)
g=$.C.h(0,B.dh)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.kP(A.l([],t.kG))
f=new A.uq(f)
e=new A.uI(j,l,m,B.aY,200,25,n,"data",f,h,A.u(a2,t.hU),A.u(a2,i))
e.oI(l,n,25,200,"data",B.aY,m,null)
d=A.BO()
i=A.dQ(null,null,t.n6)
h=A.dQ(null,null,t.em)
f=t.H
j=A.bp(null,f)
c=new A.oT(A.bp(null,f))
b=A.bp(B.N,t.mv)
a=A.l([],t.s)
f=A.bp(null,f)
a0=new A.w3(A.Mg(),k.ch)
f=new A.mM(k,e,a0,new A.x7(a4),B.a3,i,h,j,c,A.aO(a2),b,a,f)
l=f.e=new A.we(k,B.a.A(A.aq(B.l.v(B.e.v(l.l(0)+"|"+n)).a),0,12))
j=new A.qZ(k,e,a0,k.at)
f.x=j
j=new A.uX(k,e,a0,l,j,c)
f.f=j
f.r=new A.w1(k,e,a0,l,j)
f.w=new A.v5(k,e,a0,f.grv(),e.Q)
d.b=f
p.x=m
p.w=d.bb()
f=d.bb().ay
p.y=new A.b0(f,A.n(f).i("b0<1>")).aU(new A.x8(p,a4))
s=4
return A.a(d.bb().aB(),$async$dP)
case 4:s=5
return A.a(e.fQ(),$async$dP)
case 5:q=A.m(["ok",!0,"state",d.bb().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dP,r)},
hk(a,b){return this.r7(a,b)},
r7(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cA(),$async$hk)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
hg(a,b){return this.qW(a,b)},
qW(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w
if(n==null)throw A.b(A.x("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.d6(),$async$hg)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"blocked",o.e,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
hh(a,b){return this.qY(a,b)},
qY(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.w
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.bs(),$async$hh)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
hi(a,b){return this.r_(a,b)},
r_(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.w
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.bf(),$async$hi)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
hj(a,b){return this.r1(a,b)},
r1(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w
if(n==null)throw A.b(A.x("Sync is not started."))
o=t.y
s=3
return A.a(n.fO(new A.aJ(b.d).ai("online","sync_set_connectivity",o)),$async$hj)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
hl(a,b){return this.r9(a,b)},
r9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
m=p.w
if(n==null||m==null)throw A.b(A.x("Sync is not started."))
o=t.N
n.a=new A.aJ(b.d).aw("token",o)
s=3
return A.a(m.ei(),$async$hl)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
jn(a,b){return this.r5(a,b)},
r5(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$jn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.z
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.Fj(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jn,r)}}
A.x7.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.da(A.f8(A.m(["v",3,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.x8.prototype={
$1(a){this.a.z=a
this.b.a.da(A.f8(A.m(["v",3,"op","sync_status","status",A.Fj(a)],t.N,t.X)))},
$S:153}
A.ol.prototype={}
A.om.prototype={}
A.on.prototype={}
A.oo.prototype={}
A.op.prototype={}
A.q0.prototype={
ul(a){var s,r=null
A.F1("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b2(a)>0&&!s.cH(a)
if(s)return a
s=A.Fd()
return this.n2(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
v2(a){var s,r,q=A.dO(a,this.a)
q.fw()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.ky(s)
q.e.pop()
q.fw()
return q.l(0)},
n2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.F1("join",s)
return this.wv(new A.bG(s,t.x))},
wv(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.cU(s,new A.q1(),a.$ti.i("cU<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cH(m)&&o){l=A.dO(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.er(k,!0))
l.b=n
if(q.fl(n))l.e[0]=q.gdB()
n=l.l(0)}else if(q.b2(m)>0){o=!q.cH(m)
n=m}else{if(!(m.length!==0&&q.jU(m[0])))if(p)n+=q.gdB()
n+=m}p=q.fl(m)}return n.charCodeAt(0)==0?n:n},
cQ(a,b){var s=A.dO(b,this.a),r=s.d,q=A.Z(r).i("aj<1>")
r=A.N(new A.aj(r,new A.q2(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aE(r,0,q)
return s.d},
el(a){var s
if(!this.rt(a))return a
s=A.dO(a,this.a)
s.ko()
return s.l(0)},
rt(a){var s,r,q,p,o,n,m,l=this.a,k=l.b2(a)
if(k!==0){if(l===$.oK())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cc(n)){if(l===$.oK()&&n===47)return!0
if(q!=null&&l.cc(q))return!0
if(q===46)m=o==null||o===46||l.cc(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cc(q))return!0
if(q===46)l=o==null||l.cc(o)||o===46
else l=!1
if(l)return!0
return!1},
xl(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b2(a)
if(l<=0)return o.el(a)
s=A.Fd()
if(m.b2(s)<=0&&m.b2(a)>0)return o.el(a)
if(m.b2(a)<=0||m.cH(a))a=o.ul(a)
if(m.b2(a)<=0&&m.b2(s)>0)throw A.b(A.Di(n+a+'" from "'+s+'".'))
r=A.dO(s,m)
r.ko()
q=A.dO(a,m)
q.ko()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.ks(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.ks(l[0],p[0])}else l=!1
if(!l)break
B.b.iy(r.d,0)
B.b.iy(r.e,1)
B.b.iy(q.d,0)
B.b.iy(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Di(n+a+'" from "'+s+'".'))
l=t.N
B.b.kf(q.d,0,A.ae(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kf(p,1,A.ae(r.d.length,m.gdB(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga_(m)==="."){B.b.ky(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fw()
return q.l(0)},
na(a){var s,r,q=this,p=A.EM(a)
if(p.gb0()==="file"&&q.a===$.kr())return p.l(0)
else if(p.gb0()!=="file"&&p.gb0()!==""&&q.a!==$.kr())return p.l(0)
s=q.el(q.a.kr(A.EM(p)))
r=q.xl(s)
return q.cQ(0,r).length>q.cQ(0,s).length?s:r}}
A.q1.prototype={
$1(a){return a!==""},
$S:9}
A.q2.prototype={
$1(a){return a.length!==0},
$S:9}
A.zZ.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:154}
A.rO.prototype={
o8(a){var s=this.b2(a)
if(s>0)return B.a.A(a,0,s)
return this.cH(a)?a[0]:null},
ks(a,b){return a===b}}
A.m6.prototype={
gjQ(){var s=this,r=t.N,q=new A.m6(s.a,s.b,s.c,A.bE(s.d,!0,r),A.bE(s.e,!0,r))
q.fw()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga_(r)},
fw(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga_(s)===""))break
B.b.ky(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
ko(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kf(m,0,A.ae(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.ae(m.length+1,s.gdB(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fl(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.oK())n.b=A.y(r,"/","\\")
n.fw()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.m7.prototype={
l(a){return"PathException: "+this.a},
$iH:1}
A.w0.prototype={
l(a){return this.gaQ()}}
A.uK.prototype={
jU(a){return B.a.F(a,"/")},
cc(a){return a===47},
fl(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
er(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b2(a){return this.er(a,!1)},
cH(a){return!1},
kr(a){var s
if(a.gb0()===""||a.gb0()==="file"){s=a.gbr()
return A.BY(s,0,s.length,B.k,!1)}throw A.b(A.O("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaQ(){return"posix"},
gdB(){return"/"}}
A.wB.prototype={
jU(a){return B.a.F(a,"/")},
cc(a){return a===47},
fl(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c7(a,"://")&&this.b2(a)===s},
er(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.ca(a,"/",B.a.ac(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.Fg(a,q+1)
return p==null?q:p}}return 0},
b2(a){return this.er(a,!1)},
cH(a){return a.length!==0&&a.charCodeAt(0)===47},
kr(a){return a.l(0)},
gaQ(){return"url"},
gdB(){return"/"}}
A.wV.prototype={
jU(a){return B.a.F(a,"/")},
cc(a){return a===47||a===92},
fl(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
er(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.ca(a,"\\",2)
if(s>0){s=B.a.ca(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Fp(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b2(a){return this.er(a,!1)},
cH(a){return this.b2(a)===1},
kr(a){var s,r
if(a.gb0()!==""&&a.gb0()!=="file")throw A.b(A.O("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbr()
if(a.gdh()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Fg(s,1)!=null)s=B.a.kB(s,"/","")}else s="\\\\"+a.gdh()+s
r=A.y(s,"/","\\")
return A.BY(r,0,r.length,B.k,!1)},
uK(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
ks(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.uK(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaQ(){return"windows"},
gdB(){return"\\"}}
A.vJ.prototype={
gm(a){return this.c.length},
gww(){return this.b.length},
oK(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.I(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ey(a){var s,r=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aZ("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gG(s))return-1
if(a>=B.b.ga_(s))return s.length-1
if(r.ri(a)){s=r.d
s.toString
return s}return r.d=r.p6(a)-1},
ri(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
p6(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iO(a){var s,r,q=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aZ("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.ey(a)
r=q.b[s]
if(r>a)throw A.b(A.aZ("Line "+s+" comes after offset "+a+"."))
return a-r},
fK(a){var s,r,q,p
if(a<0)throw A.b(A.aZ("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aZ("Line "+a+" must be less than the number of lines in the file, "+this.gww()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aZ("Line "+a+" doesn't have 0 columns."))
return q}}
A.lm.prototype={
ga2(){return this.a.a},
gaf(){return this.a.ey(this.b)},
gaq(){return this.a.iO(this.b)},
gar(){return this.b}}
A.hs.prototype={
ga2(){return this.a.a},
gm(a){return this.c-this.b},
gP(){return A.B6(this.a,this.b)},
gN(){return A.B6(this.a,this.c)},
gaL(){return A.dS(B.y.T(this.a.c,this.b,this.c),0,null)},
gbe(){var s=this,r=s.a,q=s.c,p=r.ey(q)
if(r.iO(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dS(B.y.T(r.c,r.fK(p),r.fK(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fK(p+1)
return A.dS(B.y.T(r.c,r.fK(r.ey(s.b)),q),0,null)},
Z(a,b){var s
if(!(b instanceof A.hs))return this.oz(0,b)
s=B.c.Z(this.b,b.b)
return s===0?B.c.Z(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hs))return s.oy(0,b)
return s.b===b.b&&s.c===b.c&&J.w(s.a.a,b.a.a)},
gJ(a){return A.c5(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idb:1}
A.rk.prototype={
wo(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mp(B.b.gG(a1).c)
s=a.e
r=A.ae(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.w(m.c,l)){a.hI("\u2575")
q.a+="\n"
a.mp(l)}else if(m.b+1!==n.b){a.uk("...")
q.a+="\n"}}for(l=n.d,k=A.Z(l).i("bU<1>"),j=new A.bU(l,k),j=new A.ar(j,j.gm(0),k.i("ar<V.E>")),k=k.i("V.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP().gaf()!==f.gN().gaf()&&f.gP().gaf()===i&&a.rk(B.a.A(h,0,f.gP().gaq()))){e=B.b.bO(r,a0)
if(e<0)A.v(A.O(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.uj(i)
q.a+=" "
a.ui(n,r)
if(s)q.a+=" "
d=B.b.mX(l,new A.rF())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gP().gaf()===i?j.gP().gaq():0
a.ug(h,g,j.gN().gaf()===i?j.gN().gaq():h.length,p)}else a.hK(h)
q.a+="\n"
if(k)a.uh(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hI("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mp(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hI("\u2577")
else{q.hI("\u250c")
q.bl(new A.rs(q),"\x1b[34m")
s=q.r
r=" "+$.i_().na(a)
s.a+=r}q.r.a+="\n"},
hG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gP().gaf()
i=k?null:l.a.gN().gaf()
if(s&&l===c){h.bl(new A.rz(h,j,a),r)
n=!0}else if(n)h.bl(new A.rA(h,l),r)
else if(k)if(g.a)h.bl(new A.rB(h),g.b)
else o.a+=" "
else h.bl(new A.rC(g,h,c,j,a,l,i),p)}},
ui(a,b){return this.hG(a,b,null)},
ug(a,b,c,d){var s=this
s.hK(B.a.A(a,0,b))
s.bl(new A.rt(s,a,b,c),d)
s.hK(B.a.A(a,c,a.length))},
uh(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gP().gaf()===p.gN().gaf()){r.jN()
p=r.r
p.a+=" "
r.hG(a,c,b)
if(c.length!==0)p.a+=" "
r.mq(b,c,r.bl(new A.ru(r,a,b),q))}else{s=a.b
if(p.gP().gaf()===s){if(B.b.F(c,b))return
A.M7(c,b)
r.jN()
p=r.r
p.a+=" "
r.hG(a,c,b)
r.bl(new A.rv(r,a,b),q)
p.a+="\n"}else if(p.gN().gaf()===s){p=p.gN().gaq()
if(p===a.a.length){A.FB(c,b)
return}r.jN()
r.r.a+=" "
r.hG(a,c,b)
r.mq(b,c,r.bl(new A.rw(r,!1,a,b),q))
A.FB(c,b)}}},
mo(a,b,c){var s=c?0:1,r=this.r
s=B.a.bi("\u2500",1+b+this.j4(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
uf(a,b){return this.mo(a,b,!0)},
mq(a,b,c){this.r.a+="\n"
return},
hK(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),q=this.r,r=r.i("K.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bi(" ",4)
else{p=A.bs(p)
q.a+=p}}},
hJ(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bl(new A.rD(s,this,a),"\x1b[34m")},
hI(a){return this.hJ(a,null,null)},
uk(a){return this.hJ(null,null,a)},
uj(a){return this.hJ(null,a,null)},
jN(){return this.hJ(null,null,null)},
j4(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
rk(a){var s,r,q
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),r=r.i("K.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pl(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bl(a,b){return this.pl(a,b,t.z)}}
A.rE.prototype={
$0(){return this.a},
$S:155}
A.rm.prototype={
$1(a){var s=a.d
return new A.aj(s,new A.rl(),A.Z(s).i("aj<1>")).gm(0)},
$S:156}
A.rl.prototype={
$1(a){var s=a.a
return s.gP().gaf()!==s.gN().gaf()},
$S:38}
A.rn.prototype={
$1(a){return a.c},
$S:158}
A.rp.prototype={
$1(a){var s=a.a.ga2()
return s==null?new A.j():s},
$S:159}
A.rq.prototype={
$2(a,b){return a.a.Z(0,b.a)},
$S:240}
A.rr.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.az(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbe()
n=A.Al(o,p.gaL(),p.gP().gaq())
n.toString
m=B.a.hL("\n",B.a.A(o,0,n)).gm(0)
l=p.gP().gaf()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga_(b).b)b.push(new A.cx(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.q)(b),++k){j=b[k]
h&1&&A.I(i,16)
B.b.tt(i,new A.ro(j),!0)
f=i.length
for(q=s.bk(c,g),p=q.$ti,q=new A.ar(q,q.gm(0),p.i("ar<V.E>")),n=j.b,p=p.i("V.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gP().gaf()>n)break
i.push(e)}g+=i.length-f
B.b.C(j.d,i)}return b},
$S:161}
A.ro.prototype={
$1(a){return a.a.gN().gaf()<this.a.b},
$S:38}
A.rF.prototype={
$1(a){return!0},
$S:38}
A.rs.prototype={
$0(){this.a.r.a+=B.a.bi("\u2500",2)+">"
return null},
$S:0}
A.rz.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:3}
A.rA.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:3}
A.rB.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.rC.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bl(new A.rx(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bl(new A.ry(r,o),p.b)}}},
$S:3}
A.rx.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:3}
A.ry.prototype={
$0(){this.a.r.a+=this.b},
$S:3}
A.rt.prototype={
$0(){var s=this
return s.a.hK(B.a.A(s.b,s.c,s.d))},
$S:0}
A.ru.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP().gaq(),l=n.gN().gaq()
n=this.b.a
s=q.j4(B.a.A(n,0,m))
r=q.j4(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bi(" ",m))+B.a.bi("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.rv.prototype={
$0(){return this.a.uf(this.b,this.c.a.gP().gaq())},
$S:0}
A.rw.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bi("\u2500",3)
else r.mo(s.c,Math.max(s.d.a.gN().gaq()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.rD.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wV(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:3}
A.bo.prototype={
l(a){var s=this.a
s="primary "+(""+s.gP().gaf()+":"+s.gP().gaq()+"-"+s.gN().gaf()+":"+s.gN().gaq())
return s.charCodeAt(0)==0?s:s}}
A.yx.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Al(o.gbe(),o.gaL(),o.gP().gaq())!=null)){s=A.mB(o.gP().gar(),0,0,o.ga2())
r=o.gN().gar()
q=o.ga2()
p=A.Lu(o.gaL(),10)
o=A.vK(s,A.mB(r,A.E_(o.gaL()),p,q),o.gaL(),o.gaL())}return A.J_(A.J1(A.J0(o)))},
$S:162}
A.cx.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cr.prototype={
k0(a){var s=this.a
if(!J.w(s,a.ga2()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga2())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
Z(a,b){var s=this.a
if(!J.w(s,b.ga2()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga2())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.w(this.a,b.ga2())&&this.b===b.gar()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dr(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iau:1,
ga2(){return this.a},
gar(){return this.b},
gaf(){return this.c},
gaq(){return this.d}}
A.mC.prototype={
k0(a){if(!J.w(this.a.a,a.ga2()))throw A.b(A.O('Source URLs "'+A.r(this.ga2())+'" and "'+A.r(a.ga2())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
Z(a,b){if(!J.w(this.a.a,b.ga2()))throw A.b(A.O('Source URLs "'+A.r(this.ga2())+'" and "'+A.r(b.ga2())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.w(this.a.a,b.ga2())&&this.b===b.gar()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dr(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ey(r)+1)+":"+(q.iO(r)+1))+">"},
$iau:1,
$icr:1}
A.mE.prototype={
oL(a,b,c){var s,r=this.b,q=this.a
if(!J.w(r.ga2(),q.ga2()))throw A.b(A.O('Source URLs "'+A.r(q.ga2())+'" and  "'+A.r(r.ga2())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.O("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.k0(r))throw A.b(A.O('Text "'+s+'" must be '+q.k0(r)+" characters long.",null))}},
gP(){return this.a},
gN(){return this.b},
gaL(){return this.c}}
A.mF.prototype={
gkn(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gP().gaf()+1)+", column "+(p.gP().gaq()+1)
if(p.ga2()!=null){s=p.ga2()
r=$.i_()
s.toString
s=o+(" of "+r.na(s))
o=s}o+=": "+this.a
q=p.wp(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iH:1}
A.h_.prototype={
gar(){var s=this.b
s=A.B6(s.a,s.b)
return s.b},
$ibh:1,
gfP(){return this.c}}
A.h0.prototype={
ga2(){return this.gP().ga2()},
gm(a){return this.gN().gar()-this.gP().gar()},
Z(a,b){var s=this.gP().Z(0,b.gP())
return s===0?this.gN().Z(0,b.gN()):s},
wp(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.Hj(s,a).wo()},
R(a,b){if(b==null)return!1
return b instanceof A.h0&&this.gP().R(0,b.gP())&&this.gN().R(0,b.gN())},
gJ(a){return A.c5(this.gP(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dr(s).l(0)+": from "+s.gP().l(0)+" to "+s.gN().l(0)+' "'+s.gaL()+'">'},
$iau:1}
A.db.prototype={
gbe(){return this.d}}
A.jd.prototype={
a3(){return"SqliteUpdateKind."+this.b}}
A.cs.prototype={
gJ(a){return A.c5(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.cs&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.c7.prototype={
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
p=p!=null?s+(", parameters: "+J.b3(p,new A.vP(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iH:1}
A.vP.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a_(a)},
$S:163}
A.kx.prototype={}
A.qr.prototype={
u3(){var s=this,r=s.d
return r==null?s.d=new A.e3(s,A.l([],t.fU),new A.qA(s),new A.qB(s),t.jy):r},
tx(){var s=this,r=s.e
return r==null?s.e=new A.e3(s,A.l([],t.lw),new A.qx(s),new A.qy(s),t.lU):r},
pn(){var s=this,r=s.f
return r==null?s.f=new A.e3(s,A.l([],t.lw),new A.qt(s),new A.qu(s),t.ag):r},
uQ(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.v(A.aA(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b2(m))
r=n.a
q=r.e3(s,1)
s=r.d
p=A.C5(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.d9(new A.qC(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.AN(this,p,o,o,o)},
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
r=s.kX()
q=r!==0?A.C9(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aF(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.v(A.x("This database has already been closed"))
r=p.b
q=r.a
s=q.e3(B.e.v(a),1)
q=q.d
r=A.C5(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.AN(p,r,"executing",a,b)}else{s=p.is(a,!0)
try{s.e9(new A.bP(b))}finally{s.p()}}},
O(a){return this.aF(a,B.m)},
rW(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.v(A.x("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cC(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.wO(r,p,n,o)
l=A.l([],t.lE)
k=new A.qv(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kZ(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.AN(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ae(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h2(f,e,new A.dk(!1).cW(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kZ(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ae(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h2(f,e,""))
k.$0()
throw A.b(A.aA(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aA(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
is(a,b){var s=this.rW(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aA(a,"sql","Must contain an SQL statement."))
return B.b.gG(s)},
wX(a){return this.is(a,!1)},
oa(a,b){var s,r=this.is(a,!0)
try{s=r.kS(new A.bP(b))
return s}finally{r.p()}},
kR(a){return this.oa(a,B.m)}}
A.qA.prototype={
$0(){var s=this.a,r=s.b
r.a.mI(r.b,new A.qz(s))},
$S:0}
A.qz.prototype={
$3(a,b,c){var s=A.Ik(a)
if(s==null)return
this.a.d.jZ(new A.cs(s,b,c))},
$S:164}
A.qB.prototype={
$0(){var s=this.a.b
s.a.mI(s.b,null)
return null},
$S:0}
A.qx.prototype={
$0(){var s=this.a,r=s.b
r.a.mH(r.b,new A.qw(s))
return null},
$S:0}
A.qw.prototype={
$0(){this.a.e.jZ(null)},
$S:0}
A.qy.prototype={
$0(){var s=this.a.b
s.a.mH(s.b,null)
return null},
$S:0}
A.qt.prototype={
$0(){var s=this.a,r=s.b
r.a.mG(r.b,new A.qs(s))
return null},
$S:0}
A.qs.prototype={
$0(){var s=this.a.f
s.jZ(null)
return 0},
$S:10}
A.qu.prototype={
$0(){var s=this.a.b
s.a.mG(s.b,null)
return null},
$S:0}
A.qC.prototype={
$2(a,b){A.K0(a,this.a,b)},
$S:165}
A.qv.prototype={
$0(){var s,r,q,p,o,n
this.a.p()
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
A.n6.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.I3(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.I5(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.O("The argument list is unmodifiable",null))},
$ivM:1}
A.e3.prototype={
gcR(){var s=this.r
return s==null?this.r=this.q4(!1):s},
q4(a){return new A.dj(new A.za(this,!1),this.$ti.i("dj<1>"))},
jZ(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.v(o.bE())
if((n&1)!==0)o.gaO().aC(a)}else{n=o.b
if(n>=4)A.v(o.bE())
if((n&1)!==0)o.cv(a)
else if((n&3)===0){n=o.fY()
o=new A.ca(a,o.$ti.i("ca<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sek(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.za.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.zb(q,a,s)
a.r=a.e=new A.zc(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dL<1>)")}}
A.zb.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.jV(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.zc.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.jV(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.vL.prototype={
mY(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Ij(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wO(a,b){var s,r,q,p,o,n,m,l,k,j
this.mY()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e3(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e3(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d5(r.b.buffer,0,null)[B.c.ae(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.wH(r,l,o)
r=r.r
if(r!=null)r.my(k,l,o)
if(m!==0){j=A.C9(s,k,m,"opening the database",null,null)
k.kX()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.qr(s,k,!1)}}
A.h2.prototype={
gpm(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.nk(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dk(!1).cW(o,0,null,!0))}return q},
gtW(){return null},
bA(a,b){A.AN(this.b,a,b,this.d,this.e)},
ly(){if(this.r||this.b.r)throw A.b(A.x(u.f))},
h_(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dr()
if(s!==0?s!==101:q)r.bA(s,"executing statement")},
tG(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.tj(o))
l.push(p)}m.dr()
if(p!==0?p!==101:k)m.bA(p,"selecting from statement")
n=m.gpm()
m.gtW()
k=new A.mo(l,n,B.al)
k.pg()
return k},
tj(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.an(r.Number(s)):A.BN(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oo(a)
case 4:return s.kY(a)
case 5:default:return null}},
p9(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.v(A.aA(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.pa(a[s-1],s)
this.e=a},
pa(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.ax(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aI){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.CD(a).l(0)))
break A}if(A.bI(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.on(b,a)
break A}if(t.L.b(a)){s=q.a.om(b,a)
break A}s=q.p8(a,b)
break A}if(s!==0)q.bA(s,"binding parameter")},
p8(a,b){throw A.b(A.aA(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eC(a){A:{if(a instanceof A.bP){this.p9(a.a)
break A}if(a instanceof A.l3)a.a.$1(this)}},
dr(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.dr()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mL(s.d)}},
kS(a){var s=this
s.ly()
s.dr()
s.eC(a)
return s.tG()},
e9(a){var s=this
s.ly()
s.dr()
s.eC(a)
s.h_()}}
A.lt.prototype={
iJ(a,b){return this.d.I(a)?1:0},
kL(a,b){this.d.H(0,a)},
kM(a){return new v.G.URL(a,"file:///").pathname},
dw(a,b){var s,r=a.a
if(r==null)r=A.CZ(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cw(new Uint8Array(0),0))
else throw A.b(A.hd(14))
return new A.hz(new A.nL(this,r,(b&8)!==0),0)},
kO(a){}}
A.nL.prototype={
nd(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ah(a,0,s,J.bM(B.f.ga8(r.a),0,r.b),b)
return s},
kK(){return this.d>=2?1:0},
iK(){if(this.c)this.a.d.H(0,this.b)},
fG(){return this.a.d.h(0,this.b).b},
kN(a){this.d=a},
kP(a){},
fH(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cw(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kQ(a){this.d=a},
ex(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cw(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.au(0,b,s,a)}}
A.AB.prototype={
$1(a){return a.length!==0},
$S:9}
A.q6.prototype={
pg(){var s,r,q,p,o=A.u(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o.j(0,p,B.b.dj(s,p))}this.c=o}}
A.mo.prototype={
gt(a){return new A.yV(this)},
h(a,b){return new A.c6(this,A.d2(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iJ:1,
$io:1,
$ip:1}
A.c6.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.ax(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gb3(){return this.b},
$iF:1}
A.yV.prototype={
gn(){var s=this.a
return new A.c6(s,A.d2(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.o0.prototype={}
A.o1.prototype={}
A.o3.prototype={}
A.o4.prototype={}
A.ug.prototype={
a3(){return"OpenMode."+this.b}}
A.ei.prototype={}
A.bP.prototype={}
A.l3.prototype={}
A.df.prototype={
l(a){return"VfsException("+this.a+")"},
$iH:1}
A.jc.prototype={}
A.b6.prototype={}
A.kM.prototype={}
A.kL.prototype={
giL(){return 0},
nu(a,b){return 12},
giN(){return 4096},
iM(a,b){var s=this.nd(a,b),r=a.length
if(s<r){B.f.k8(a,s,r,0)
throw A.b(B.dG)}},
$ibl:1,
$ijn:1}
A.eN.prototype={}
A.AM.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.v(A.x("No such element"))
r=s.c
q=r.a
q.toString
q.jJ(A.n(r).i("b4.E").a(r))
r.d.$0()}},
$S:0}
A.AK.prototype={
$1(a){var s=this.a,r=s.b
s.hn(s.c,new A.eN(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:21}
A.AL.prototype={
$4(a,b,c,d){this.a.$1(c.f_(d))},
$S:167}
A.wM.prototype={}
A.wH.prototype={
kX(){var s=this.a,r=s.r
if(r!=null)r.mL(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.wO.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kZ(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.C5(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d5(o.b.buffer,0,null)[B.c.ae(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.wN(s,o,n)
o=o.w
if(o!=null)o.my(r,s,n)}return new A.nZ(r,p)}}
A.wN.prototype={
om(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cC(b),J.ak(b))},
on(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cC(s),s.length)},
kY(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.DL(s.b,q.sqlite3_column_blob(r,a),p)},
oo(a){var s=this.c
return A.dW(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dV.prototype={$iBs:1}
A.dg.prototype={$iBt:1}
A.hf.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dg(s,A.d5(s.b.buffer,0,null)[B.c.ae(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.l6.prototype={
wH(a){var s,r,q=this.b
q===$&&A.A()
s="[sqlite3] "+A.dW(q,a,null)
r=$.Kx
if(r==null)A.Fx(s)
else r.$1(s)},
wF(a,b){var s,r=new A.aM(A.la(A.an(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.A()
s=A.Df(q.buffer,b,8)
s.$flags&2&&A.I(s)
s[0]=A.Bq(r)
s[1]=A.Bo(r)
s[2]=A.Bn(r)
s[3]=A.uO(r)
s[4]=A.Bp(r)-1
s[5]=A.Br(r)-1900
s[6]=B.c.ak(A.HW(r),7)},
yt(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.A()
s=new A.jc(A.BH(j,b,k))
try{r=a.dw(s,d)
if(e!==0){p=r.b
o=A.d5(j.buffer,0,k)
n=B.c.ae(e,2)
o.$flags&2&&A.I(o)
o[n]=p}p=A.d5(j.buffer,0,k)
o=B.c.ae(c,2)
p.$flags&2&&A.I(p)
p[o]=0
m=r.a
return m}catch(l){p=A.D(l)
if(p instanceof A.df){q=p
p=q.a
j=A.d5(j.buffer,0,k)
o=B.c.ae(c,2)
j.$flags&2&&A.I(j)
j[o]=p}else{j=j.buffer
j=A.d5(j,0,k)
p=B.c.ae(c,2)
j.$flags&2&&A.I(j)
j[p]=1}}return k},
yi(a,b,c){var s=this.b
s===$&&A.A()
return A.bX(new A.qc(a,A.dW(s,b,null),c))},
ya(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bX(new A.q9(this,a,A.dW(s,b,null),c,d))},
yp(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bX(new A.qe(this,a,A.dW(s,b,null),c,d))},
yv(a,b,c){return A.bX(new A.qg(this,c,b,a))},
yA(a,b){return A.bX(new A.qi(a,b))},
yg(a,b){var s,r=Date.now(),q=this.b
q===$&&A.A()
s=v.G.BigInt(r)
A.Be(A.De(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
ye(a){return A.bX(new A.qb(a))},
yx(a,b,c,d){return A.bX(new A.qh(this,a,b,c,d))},
yI(a,b,c,d){return A.bX(new A.qm(this,a,b,c,d))},
yE(a,b){return A.bX(new A.qk(a,b))},
yC(a,b){return A.bX(new A.qj(a,b))},
yn(a,b){return A.bX(new A.qd(this,a,b))},
yr(a,b){return A.bX(new A.qf(a,b))},
yG(a,b){return A.bX(new A.ql(a,b))},
yc(a,b){return A.bX(new A.qa(this,a,b))},
yj(a){return a.giL()},
yl(a,b,c){if(t.j2.b(a))return a.nu(b,c)
return 12},
yy(a){if(t.j2.b(a))return a.giN()
return 4096},
vf(a){a.$0()},
va(a){return a.$0()},
vd(a,b,c,d,e){var s=this.b
s===$&&A.A()
a.$3(b,A.dW(s,d,null),A.an(v.G.Number(e)))},
vl(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dV(s,b),new A.hf(s,c,d))},
vp(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dV(s,b),new A.hf(s,c,d))},
vn(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.A()
null.$2(new A.dV(s,b),new A.hf(s,c,d))},
vr(a,b){var s
null.toString
s=this.a
s===$&&A.A()
null.$1(new A.dV(s,b))},
vj(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.A()
r.$1(new A.dV(s,b))},
vh(a,b,c,d,e){var s=this.b
s===$&&A.A()
return null.$2(A.BH(s,c,b),A.BH(s,e,d))},
v8(a,b){return a.$1(b)},
v6(a,b){return a.gyM().$1(b)},
v4(a,b,c){return a.gyL().$2(b,c)}}
A.qc.prototype={
$0(){return this.a.kL(this.b,this.c)},
$S:0}
A.q9.prototype={
$0(){var s,r=this,q=r.b.iJ(r.c,r.d),p=r.a.b
p===$&&A.A()
p=A.d5(p.buffer,0,null)
s=B.c.ae(r.e,2)
p.$flags&2&&A.I(p)
p[s]=q},
$S:0}
A.qe.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kM(q.c)),o=p.length
if(o>q.d)throw A.b(A.hd(14))
s=q.a.b
s===$&&A.A()
s=A.bT(s.buffer,0,null)
r=q.e
B.f.cP(s,r,p)
s.$flags&2&&A.I(s)
s[r+o]=0},
$S:0}
A.qg.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.A()
s=A.bT(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.CB(s,q.b)
else return A.CB(s,null)},
$S:0}
A.qi.prototype={
$0(){this.a.kO(A.dx(this.b,0,0))},
$S:0}
A.qb.prototype={
$0(){return this.a.iK()},
$S:0}
A.qh.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.iM(A.bT(r.buffer,s.c,s.d),A.an(v.G.Number(s.e)))},
$S:0}
A.qm.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.ex(A.bT(r.buffer,s.c,s.d),A.an(v.G.Number(s.e)))},
$S:0}
A.qk.prototype={
$0(){return this.a.fH(A.an(v.G.Number(this.b)))},
$S:0}
A.qj.prototype={
$0(){return this.a.kP(this.b)},
$S:0}
A.qd.prototype={
$0(){var s,r=this.b.fG(),q=this.a.b
q===$&&A.A()
q=A.d5(q.buffer,0,null)
s=B.c.ae(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.qf.prototype={
$0(){return this.a.kN(this.b)},
$S:0}
A.ql.prototype={
$0(){return this.a.kQ(this.b)},
$S:0}
A.qa.prototype={
$0(){var s,r=this.b.kK(),q=this.a.b
q===$&&A.A()
q=A.d5(q.buffer,0,null)
s=B.c.ae(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.d9.prototype={}
A.i4.prototype={
a7(a,b,c,d){var s,r=null,q={},p=A.be(A.Be(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.vS(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.oX(q,this,p,o)
o.d=s
o.f=new A.oY(q,o,s)
return new A.b7(o,A.n(o).i("b7<1>")).a7(a,b,c,d)},
bP(a,b,c){return this.a7(a,null,b,c)}}
A.oX.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a5(q,t.m).bU(new A.oZ(p,r.b,s,r),s.guq(),t.P)},
$S:0}
A.oZ.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaO().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:23}
A.oY.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaO().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eR.prototype={
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
return s==null?A.v(A.x("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.t($.C,t.g5)
s=new A.am(o,t.ex)
r=p.d
q=t.m
p.b=A.bm(r,"success",new A.y_(p,s),!1,q)
p.c=A.bm(r,"error",new A.y0(p,s),!1,q)
return o}}
A.y_.prototype={
$1(a){var s,r=this.a
r.D()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aD(s!=null)},
$S:2}
A.y0.prototype={
$1(a){var s=this.a
s.D()
s=s.d.error
if(s==null)s=a
this.b.aT(s)},
$S:2}
A.pK.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pL.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:2}
A.pP.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pQ.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:2}
A.pR.prototype={
$1(a){this.a.aT(new A.bi("IndexedDB open blocked"))},
$S:2}
A.r4.prototype={
$1(a){return A.be(a[1])},
$S:189}
A.wI.prototype={
uR(){var s={}
s.dart=new A.wJ(this).$0()
return s},
ik(a){return this.wB(a)},
wB(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ik=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(v.G.WebAssembly.instantiateStreaming(a,p.uR()),t.m),$async$ik)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)}}
A.wJ.prototype={
$0(){var s=this.a.a,r=A.be(v.G.Object),q=A.be(r.create.apply(r,[null]))
q.error_log=A.cX(s.gwG())
q.localtime=A.bW(s.gwE())
q.xOpen=A.C0(s.gys())
q.xDelete=A.ow(s.gyh())
q.xAccess=A.hN(s.gy9())
q.xFullPathname=A.hN(s.gyo())
q.xRandomness=A.ow(s.gyu())
q.xSleep=A.bW(s.gyz())
q.xCurrentTimeInt64=A.bW(s.gyf())
q.xClose=A.cX(s.gyd())
q.xRead=A.hN(s.gyw())
q.xWrite=A.hN(s.gyH())
q.xTruncate=A.bW(s.gyD())
q.xSync=A.bW(s.gyB())
q.xFileSize=A.bW(s.gym())
q.xLock=A.bW(s.gyq())
q.xUnlock=A.bW(s.gyF())
q.xCheckReservedLock=A.bW(s.gyb())
q.xDeviceCharacteristics=A.cX(s.giL())
q.xFileControl=A.ow(s.gyk())
q.xSectorSize=A.cX(s.giN())
q["dispatch_()v"]=A.cX(s.gve())
q["dispatch_()i"]=A.cX(s.gv9())
q.dispatch_update=A.C0(s.gvc())
q.dispatch_xFunc=A.hN(s.gvk())
q.dispatch_xStep=A.hN(s.gvo())
q.dispatch_xInverse=A.hN(s.gvm())
q.dispatch_xValue=A.bW(s.gvq())
q.dispatch_xFinal=A.bW(s.gvi())
q.dispatch_compare=A.C0(s.gvg())
q.dispatch_busy=A.bW(s.gv7())
q.changeset_apply_filter=A.bW(s.gv5())
q.changeset_apply_conflict=A.ow(s.gv3())
return q},
$S:35}
A.he.prototype={}
A.p_.prototype={
io(){var s=0,r=A.h(t.H),q=this,p,o
var $async$io=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.t($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cX(new A.p2(o))
new A.am(p,t.h1).aD(A.GU(o,t.m))
s=2
return A.a(p,$async$io)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$io,r)},
e1(a,b){return this.tz(a,b)},
tz(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$e1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Gm(),b)
o=A.J2(p)
s=2
return A.a(A.M8(new A.p1(a,o,p),t.mj),$async$e1)
case 2:s=3
return A.a(o.b.a,$async$e1)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$e1,r)},
rU(a){return this.e1(new A.p0(a),"readwrite")}}
A.p2.prototype={
$1(a){var s=A.be(this.a.result)
if(J.w(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:23}
A.p1.prototype={
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
$S:19}
A.p0.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aW(a),$async$$1)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.jL.prototype={
oP(a){var s=A.zR(new A.yA(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.zR(new A.yB(this))},
jy(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
tg(a){return this.jy(a,9007199254740992,0)},
th(a,b){return this.jy(a,9007199254740992,b)},
ij(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ij=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.u(t.N,t.S)
k=new A.eR(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$ij)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.v(A.x("Await moveNext() first"))
n=o.key
n.toString
A.G(n)
m=o.primaryKey
m.toString
l.j(0,n,A.an(A.f0(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
i1(a){return this.vQ(a)},
vQ(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$i1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cC(p.d.index("fileName").getKey(a),t.W),$async$i1)
case 3:q=o.an(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
jz(a){return A.cC(this.d.get(a),t.B).aj(new A.yz(a),t.m)},
ez(a,b){return this.op(a,b)},
op(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jz(a),$async$ez)
case 3:h=d
g=h.length
f=new A.cw(new Uint8Array(g),g)
e=new A.eR(p.e.openCursor(p.tg(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ez)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.v(A.x("Await moveNext() first"))
k=n.a(l.key)
j=A.an(A.f0(k[1]))
if(j>=h.length){s=5
break}i=new A.yC(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.vt(A.be(l.value)).aj(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ez,r)},
hU(a){return this.uO(a)},
uO(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
o=A
s=3
return A.a(A.cC(p.d.put({name:a,length:0}),t.W),$async$hU)
case 3:q=o.an(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)},
b_(a,b){return this.y0(a,b)},
y0(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$b_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
s=2
return A.a(q.jz(a),$async$b_)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.N(new A.T(o,n),n.i("o.E"))
B.b.aG(m)
s=3
return A.a(A.B9(new A.X(m,new A.yD(new A.yE(q,a),b),A.Z(m).i("X<1,z<~>>")),t.H),$async$b_)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eR(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$b_)
case 6:s=7
return A.a(A.cC(l.gn().update({name:p.name,length:b.c}),t.X),$async$b_)
case 7:case 5:return A.e(null,r)}})
return A.f($async$b_,r)},
du(a,b,c){return this.xD(0,b,c)},
xD(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$du=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
s=2
return A.a(q.jz(b),$async$du)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cC(q.e.delete(q.th(b,B.c.M(c,4096)*4096)),t.X),$async$du)
case 5:case 4:o=new A.eR(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$du)
case 6:s=7
return A.a(A.cC(o.gn().update({name:p.name,length:c}),t.X),$async$du)
case 7:return A.e(null,r)}})
return A.f($async$du,r)},
hX(a){return this.v1(a)},
v1(a){var s=0,r=A.h(t.H),q=this,p
var $async$hX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.B9(A.l([A.cC(q.e.delete(q.jy(a,9007199254740992,0)),p),A.cC(q.d.delete(a),p)],t.iw),t.H),$async$hX)
case 2:return A.e(null,r)}})
return A.f($async$hX,r)}}
A.yA.prototype={
$0(){this.a.b.an()},
$S:3}
A.yB.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aT(r)},
$S:3}
A.yz.prototype={
$1(a){if(a==null)throw A.b(A.aA(this.a,"fileId","File not found in database"))
else return a},
$S:192}
A.yC.prototype={
$1(a){var s=this.a
s.cP(s,this.b,J.bM(a,0,this.c))},
$S:193}
A.yE.prototype={
o3(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cC(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.ga8(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cC(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cC(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.o3(a,b)},
$S:194}
A.yD.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:195}
A.yb.prototype={
u2(a,b,c){B.f.cP(this.b.kv(a,new A.yc(this,a)),b,c)},
uu(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.ak(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.u2(p*4096,o,J.bM(B.f.ga8(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.yc.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cP(s,0,J.bM(B.f.ga8(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:196}
A.nU.prototype={}
A.dD.prototype={
eX(a){var s=this
if(s.e||s.d.a==null)A.v(A.hd(10))
if(a.kg(s.x)){s.cz(!0)
return a.d.a}else return A.bp(null,t.H)},
cz(a){return this.tT(a)},
tT(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.N(o,o.$ti.i("o.E"))
o.a9(0)
s=5
return A.a(p.d.rU(n).aZ(new A.rI(p,n,a)),$async$cz)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cz,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eX(new A.jJ(new A.rJ(),new A.am(new A.t($.C,t.D),t.F)))
p.e=!0
p.cz(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.ga_(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
dK(a,b){return this.q1(a,b)},
q1(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dK=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.i1(b),$async$dK)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dK,r)},
eR(){var s=0,r=A.h(t.H),q=this,p
var $async$eR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.e1(new A.rH(q,p),"readonly"),$async$eR)
case 2:s=3
return A.a(A.Hg(p,t.H),$async$eR)
case 3:return A.e(null,r)}})
return A.f($async$eR,r)},
cF(){return this.cz(!1)},
iJ(a,b){return this.w.d.I(a)?1:0},
kL(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.eX(new A.jD(s,a,new A.am(new A.t($.C,t.D),t.F)))},
kM(a){return new v.G.URL(a,"file:///").pathname},
dw(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.CZ(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dw(new A.jc(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.eX(new A.ho(p,o,new A.am(new A.t($.C,t.D),t.F)))
return new A.hz(new A.nM(p,q.a,o),0)},
kO(a){}}
A.rI.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.v(A.x("Future already completed"))
p.cn(null)}o.cz(this.c)},
$S:3}
A.rJ.prototype={
$1(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.rH.prototype={
$1(a){return this.nB(a)},
nB(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ij(),$async$$1)
case 2:m=c
l=q.a
l.z.C(0,m)
p=m.gaa(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.ez(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.nM.prototype={
iM(a,b){this.b.iM(a,b)},
giL(){return 0},
giN(){return 4096},
kK(){return this.b.d>=2?1:0},
iK(){},
fG(){return this.b.fG()},
kN(a){this.b.d=a
return null},
kP(a){},
nu(a,b){return 12},
fH(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.v(A.hd(10))
s.b.fH(a)
if(!r.y.F(0,s.c))r.eX(new A.jJ(new A.yy(s,a),new A.am(new A.t($.C,t.D),t.F)))},
kQ(a){this.b.d=a
return null},
ex(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.v(A.hd(10))
s=m.c
if(l.y.F(0,s)){m.b.ex(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cw(new Uint8Array(0),0)
q=J.bM(B.f.ga8(r.a),0,r.b)
m.b.ex(a,b)
p=new Uint8Array(a.length)
B.f.cP(p,0,a)
o=A.l([],t.p8)
n=$.C
o.push(new A.nU(b,p))
l.eX(new A.hJ(l,s,q,o,new A.am(new A.t(n,t.D),t.F)))},
$ibl:1,
$ijn:1}
A.yy.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dK(a,o.c),$async$$1)
case 3:q=n.du(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:24}
A.b8.prototype={
kg(a){a.hn(a.c,this,!1)
return!0}}
A.jJ.prototype={
aW(a){return this.w.$1(a)}}
A.jD.prototype={
kg(a){var s,r,q,p
if(!a.gE(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.jD)if(s.x===r)return!1
else s=s.gfo()
else if(s instanceof A.hJ){q=s.gfo()
if(s.x===r){p=s.a
p.toString
p.jJ(A.n(s).i("b4.E").a(s))}s=q}else if(s instanceof A.ho){if(s.x===r){r=s.a
r.toString
r.jJ(A.n(s).i("b4.E").a(s))
return!1}s=s.gfo()}else break}a.hn(a.c,this,!1)
return!0},
aW(a){return this.xv(a)},
xv(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dK(a,o),$async$aW)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.hX(n),$async$aW)
case 3:return A.e(null,r)}})
return A.f($async$aW,r)}}
A.ho.prototype={
aW(a){return this.xu(a)},
xu(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hU(p),$async$aW)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aW,r)}}
A.hJ.prototype={
kg(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.hJ)if(r.x===s){B.b.C(r.z,this.z)
return!1}else r=r.gfo()
else if(r instanceof A.ho){if(r.x===s)break
r=r.gfo()}else break
a.hn(a.c,this,!1)
return!0},
aW(a){return this.xw(a)},
xw(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.yb(m,A.u(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.q)(m),++o){n=m[o]
l.uu(n.a,n.b)}k=a
s=3
return A.a(q.w.dK(a,q.x),$async$aW)
case 3:s=2
return A.a(k.b_(c,l),$async$aW)
case 2:return A.e(null,r)}})
return A.f($async$aW,r)}}
A.ft.prototype={
a3(){return"FileType."+this.b}}
A.fZ.prototype={
bK(){var s=this.d
if(s!=null)return s
throw A.b(A.x("VFS closed"))},
iJ(a,b){var s=$.AR().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bK().bq(s)?1:0},
kL(a,b){var s=$.AR().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bK().fj(s,!1)},
kM(a){return new v.G.URL(a,"file:///").pathname},
dw(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dw(a,b)
s=$.AR().h(0,p)
if(s==null)return q.e.dw(a,b)
r=q.bK()
if(!r.bq(s))if((b&4)!==0){r.dg(s).truncate(0)
r.fj(s,!0)}else throw A.b(B.dF)
return new A.hz(new A.o9(q,s,(b&8)!==0),0)},
kO(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cK(a,b){return this.wQ(a,b)},
cJ(a){return this.cK(a,!1)},
wQ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.vI(a,b)
s=2
return A.a(m.$1("meta"),$async$cK)
case 2:l=d
k=J.w(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cK)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cK)
case 4:o=d
n=q.d=new A.yR(new Uint8Array(2),l,p,o)
if(k){n.fj(B.b_,p.getSize()>0)
n.fj(B.b0,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cK,r)}}
A.vI.prototype={
nZ(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.nZ(a)},
$S:197}
A.o9.prototype={
nd(a,b){return A.CW(this.a.bK().dg(this.b),a,{at:b})},
kK(){return this.d>=2?1:0},
iK(){var s=this.a,r=this.b
s.bK().dg(r).flush()
if(this.c)s.bK().fj(r,!1)},
fG(){return this.a.bK().dg(this.b).getSize()},
kN(a){this.d=a},
kP(a){this.a.bK().dg(this.b).flush()},
fH(a){this.a.bK().dg(this.b).truncate(a)},
kQ(a){this.d=a},
ex(a,b){if(A.CX(this.a.bK().dg(this.b),a,{at:b})<a.length)throw A.b(B.dH)}}
A.yR.prototype={
bq(a){var s=this.a
A.CW(this.b,s,{at:0})
return s[a.a]!==0},
fj(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.I(s)
s[a.a]=r
A.CX(this.b,s,{at:0})},
dg(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.wC.prototype={
oM(a,b){var s=this,r=s.c
r.a!==$&&A.cy()
r.a=s
r=t.S
A.yd(new A.wD(s),r)
A.yd(new A.wE(s),r)
s.r=A.yd(new A.wF(s),r)
s.w=A.yd(new A.wG(s),r)},
e3(a,b){var s=J.L(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bT(this.b.buffer,0,null)
B.f.au(q,r,r+s.gm(a),a)
B.f.k8(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cC(a){return this.e3(a,0)},
mI(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mG(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mH(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.wD.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.wE.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.wF.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.wG.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.ib.prototype={}
A.uR.prototype={
oJ(a){var s,r=this,q=r.a
q.start()
r.c=A.bm(q,"message",new A.uV(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kt()
q.toString
A.jq(q,s,null,null,!1).aj(new A.uW(r),t.P)}},
jm(a){return this.qL(a)},
qL(a){var s=0,r=A.h(t.H),q=this
var $async$jm=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Lz(a,new A.uS(q),q.gwe(),new A.uT(q),new A.uU(q))
return A.e(null,r)}})
return A.f($async$jm,r)},
fN(a,b,c){return this.og(a,b,c,c)},
og(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fN=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.GK(null))
o=p.e++
n=new A.t($.C,t.a7)
p.f.j(0,o,new A.am(n,t.h1))
a.i=o
p.a.postMessage(a,A.hS(a))
s=3
return A.a(n,$async$fN)
case 3:m=f
if(J.w(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.I7(m))
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
rn(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.D()
s=q.d
if(s!=null)s.D()
for(s=q.f,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();)r.d.aT(new A.i9(a))
s.a9(0)
p.an()},
lO(){return this.rn(null)}}
A.uV.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lO()
return}this.a.jm(A.be(a.data))},
$S:2}
A.uW.prototype={
$1(a){this.a.lO()
a.a.an()},
$S:198}
A.uU.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aD(a)},
$S:23}
A.uT.prototype={
$1(a){return this.nS(a)},
nS(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.vb(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bn(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.D(a0)
k=A.ag(a0)
if(!(l instanceof A.ds)){b.console.error("Error in worker: "+J.a_(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.c7){h=A.H8(b)
g=0}else{g=b instanceof A.ds?1:null
h=null}f={e:J.a_(b),s:g,r:h,i:e,t:"errorResponse"}
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
$S:199}
A.uS.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:23}
A.i9.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iH:1}
A.qp.prototype={
cd(a){return this.wC(a)},
wC(a){var s=0,r=A.h(t.n),q
var $async$cd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.wL(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cd,r)}}
A.l2.prototype={}
A.q7.prototype={}
A.eL.prototype={}
A.lk.prototype={
il(){var s=0,r=A.h(t.H),q=this
var $async$il=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cJ(q.b),$async$il)
case 4:case 3:return A.e(null,r)}})
return A.f($async$il,r)},
kx(){var s=0,r=A.h(t.H),q=this
var $async$kx=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$kx,r)}}
A.ri.prototype={
xy(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
q5(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.wS.prototype={
$1(a){var s=new A.t($.C,t.D),r=new A.cZ(new A.am(s,t.F))
this.a.a=r
this.b.aD(r)
return A.Hh(s)},
$S:200}
A.wT.prototype={
$2(a,b){var s,r,q
A.be(a)
s=J.w(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.c6(new A.ds("Operation was cancelled"),b)
else q.c6(a,b)}return null},
$S:201}
A.cZ.prototype={}
A.l7.prototype={
guG(){if(this.c.a)return!1
return!this.d||this.f!=null},
dF(a){return this.oT(a)},
oT(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dF=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kt()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jq(n,o.a,null,o.gqP(),!0),$async$dF)
case 6:m=c
s=7
return A.a(A.jq(n,o.b,a,null,!1),$async$dF)
case 7:l=c
j=o.e
j=j==null?null:j.il()
s=8
return A.a(j instanceof A.t?j:A.bn(j,t.H),$async$dF)
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
return A.f($async$dF,r)},
qQ(){this.nf()},
km(a,b,c){return this.c.iF(new A.qE(this,a,b,c),b,c)},
nf(){return this.c.kJ(new A.qF(this),t.H)}}
A.qE.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dF(r.c).aj(new A.qD(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.qD.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.qF.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kx()
s.a.an()
r.a.an()
p.f=null}},
$S:3}
A.iR.prototype={
iF(a,b,c){return this.y_(a,b,c,c)},
kJ(a,b){return this.iF(a,null,b)},
y_(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iF=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.w(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.u8(h,p)
if(!p.a){h.a=p.a=!0
q=A.ip(a,c).aZ(o)
s=1
break}else{n={}
m=new A.t($.C,c.i("t<0>"))
l=new A.am(m,c.i("am<0>"))
n.a=null
h=new A.u7(h,n,l,a,c)
if(!g)n.a=A.bm(b,"abort",new A.u6(n,p,l,h),!1,t.m)
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
B.b.ah(j,0,i,h,n)
B.b.ah(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aZ(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iF,r)}}
A.u8.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gE(0)){s=r.b
if(s===r.c)A.v(A.aD());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.u7.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.D()
r.c.aD(A.ip(r.d,r.e))},
$S:0}
A.u6.prototype={
$1(a){var s,r=this
r.a.a.D()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aT(B.ap)}},
$S:2}
A.ej.prototype={
gnl(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
B.b.C(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.qV.prototype={
$1(a){if(a!=null)return A.G(a)
return null},
$S:202}
A.lO.prototype={
a3(){return"MessageType."+this.b}}
A.vw.prototype={
vb(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.i7(a,b)
case"connect":return p.ka(a,b)
case"custom":return p.ec(a,b)
case"fileSystemExists":return p.fc(a,b)
case"fileSystemFlush":return p.fd(a,b)
case"fileSystemAccess":return p.fb(a,b)
case"runQuery":return p.ib(a,b)
case"exclusiveLock":return p.i6(a,b)
case"releaseLock":s=p.bx(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.v(A.x("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.i4(a,b)
case"openAdditionalConnection":return p.i8(a,b)
case"updateRequest":return p.ic(a,b)
case"rollbackRequest":return p.ia(a,b)
case"commitRequest":return p.i5(a,b)
case"dedicatedCompatibilityCheck":return p.dM(a,b)
case"sharedCompatibilityCheck":return p.dM(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dM(a,b)
default:r=A.f1(new A.bz(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.t($.C,t.hl)
q.cm(r)
return q}}}
A.dz.prototype={
a3(){return"FileSystemImplementation."+this.b}}
A.cv.prototype={
a3(){return"TypeCode."+this.b},
uU(a){var s=null
switch(this.a){case 0:s=A.v(A.O("Unsupported type code",null))
break
case 1:a=A.an(A.f0(a))
s=a
break
case 2:s=A.BN(t.bJ.a(a).toString(),null)
break
case 3:A.f0(a)
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
A.ek.prototype={
mz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aD:B.b3[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.an(A.f0(h))))
if(k!==0)a.bA(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bA(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f0(h))
if(k!==0)a.bA(k,e)
break
case 4:g=B.e.v(A.G(h))
k=s.dart_sqlite3_bind_text(d,i,c.cC(g),g.length)
if(k!==0)a.bA(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cC(h),h.length)
if(k!==0)a.bA(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bA(k,e)
break
case 7:f=A.hL(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bA(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mn()},
h(a,b){var s=this.c[b],r=s>=8?B.aD:B.b3[s]
return r.uU(this.a[b])},
j(a,b,c){this.mn()},
mn(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.A5.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:23}
A.pI.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pJ.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:2}
A.pM.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:2}
A.pN.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:2}
A.pO.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aT(s)},
$S:2}
A.uN.prototype={
vs(){var s,r,q,p
for(s=this.b,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.a9(0)}}
A.im.prototype={
a3(){return"FileType."+this.b}}
A.dP.prototype={
a3(){return"StorageMode."+this.b}}
A.fT.prototype={
l(a){return"Remote error: "+this.a},
$iH:1}
A.ds.prototype={}
A.zQ.prototype={
$1(a){return A.be(a.data)},
$S:204}
A.jZ.prototype={
D(){var s=this.a
if(s!=null)s.D()
this.a=null}}
A.hm.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.D()
q.d.D()
q.e.D()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)p[n].abort()
B.b.a9(p)
p=q.f
if(p!=null)p.b.an()
s=2
return A.a(q.a.f1(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
mf(a){var s=new v.G.AbortController()
a.onabort=A.zR(new A.xS(s))
this.w.push(s)
return s},
kG(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.guG()){r=p.mf(b)
o=s.km(c,r.signal,d).aZ(new A.xW(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.x("Requested operation on inactive lock state."))}if(o==null)o=A.ip(c,d)
q=p.a.z
return q instanceof A.dD?o.aZ(q.gvT()):o},
wN(a){var s=this,r=s.mf(a),q=new A.t($.C,t.hy),p=new A.aH(q,t.ho),o=t.H
A.B8(s.a.f.km(new A.xT(s,p),r.signal,o),new A.xU(p),o,t.K)
return q.aZ(new A.xV(s,r))}}
A.xS.prototype={
$0(){return this.a.abort()},
$S:0}
A.xW.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:3}
A.xT.prototype={
$0(){var s=this.a,r=s.r++,q=new A.t($.C,t.D)
s.f=new A.a4(r,new A.aH(q,t.h))
this.b.aD(r)
return q},
$S:5}
A.xU.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.c6(a,b)},
$S:11}
A.xV.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:3}
A.hk.prototype={
oO(a,b,c){this.b.a.aZ(new A.xC(this))},
dM(a,b){return this.qa(a,b)},
qa(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mC(a),$async$dM)
case 3:q={r:d.gnl(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dM,r)},
ka(a,b){return this.w1(a,b)},
w1(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ka=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glI()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hS(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ka,r)},
ec(a,b){return this.w2(a,b)},
w2(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ec=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lt(l)
n=a.r
s=7
return A.a(o.a.gcf(),$async$ec)
case 7:s=6
return A.a(d.cG(p,new A.q7(n)),$async$ec)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cG(p,new A.l2(a)),$async$ec)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ec,r)},
i7(a,b){return this.wg(a,b)},
wg(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kJ(new A.xH(p,a),t.m),$async$i7)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)},
ib(a,b){return this.wk(a,b)},
wk(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ib=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.a
s=3
return A.a(n.gcf(),$async$ib)
case 3:m=d
q=o.kG(a.z,b,new A.xK(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)},
i6(a,b){return this.w6(a,b)},
w6(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bx(a).wN(b),$async$i6)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i6,r)},
i5(a,b){return this.w0(a,b)},
w0(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dD(n,new A.xE(p,o),a),$async$i5)
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
return A.f($async$i5,r)},
ia(a,b){return this.wj(a,b)},
wj(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ia=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dD(n,new A.xJ(p,o),a),$async$ia)
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
return A.f($async$ia,r)},
ic(a,b){return this.wm(a,b)},
wm(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ic=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dD(n,new A.xM(p,o),a),$async$ic)
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
return A.f($async$ic,r)},
i8(a,b){return this.wh(a,b)},
wh(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bx(a).a;++m.w
s=3
return A.a(A.A8(),$async$i8)
case 3:o=d
n=o.a
p.w.l6(o.b).x.push(A.DW(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
i4(a,b){return this.w_(a,b)},
w_(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$i4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
B.b.H(p.x,o)
s=3
return A.a(o.p(),$async$i4)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i4,r)},
fd(a,b){return this.w9(a,b)},
w9(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bx(a).a.gcN(),$async$fd)
case 3:o=d
s=o instanceof A.dD?4:5
break
case 4:s=6
return A.a(o.cz(!1),$async$fd)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
fb(a,b){return this.w7(a,b)},
w7(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=B.b4[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcN(),$async$fb)
case 4:s=3
return A.a(l.kG(null,k,new j.xF(d,n,m,a),t.m),$async$fb)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fb,r)},
fc(a,b){return this.w8(a,b)},
w8(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcN(),$async$fc)
case 4:s=3
return A.a(n.kG(null,m,new l.xG(d,a),t.y),$async$fc)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fc,r)},
dD(a,b,c){return this.or(a,b,c)},
or(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dD=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dD)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dD,r)},
wf(a){},
da(a){var s=0,r=A.h(t.X),q,p=this
var $async$da=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fN({r:a,z:null,i:0,d:null,t:"custom"},B.cM,t.m),$async$da)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$da,r)},
lt(a){return B.b.mT(this.x,new A.xB(a))},
bx(a){var s=a.d
if(s!=null)return this.lt(s)
else throw A.b(A.O("Request requires database id",null))},
$iCK:1}
A.xC.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:B.b.a9(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.xH.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cd(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vR(h.d,A.Hb(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcN():m.gcf(),$async$$0)
case 8:l=A.DW(m,null)
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
return A.a(m.f1(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:205}
A.xK.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.x("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ek(s,r,A.bT(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.ob(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.an(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.vH(l,k.s,q)
s=o.d
return A.Ft(s.sqlite3_get_autocommit(p)!==0,m,A.an(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:35}
A.xE.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.pn().gcR().aU(new A.xD(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.xD.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hS(s))},
$S:68}
A.xJ.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.tx().gcR().aU(new A.xI(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.xI.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hS(s))},
$S:68}
A.xM.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.u3().gcR().aU(new A.xL(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:208}
A.xL.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hS(s))},
$S:209}
A.xF.prototype={
$0(){var s,r,q,p=this,o=p.a.dw(new A.jc(A.EC(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fH(s.byteLength)
o.ex(A.bT(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fG()
r=new Uint8Array(q)
o.iM(r,0)
q={r:t.a.a(J.Gt(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iK()}},
$S:35}
A.xG.prototype={
$0(){return this.a.iJ(A.EC(B.b4[this.b.f]),0)===1},
$S:64}
A.xB.prototype={
$1(a){return a.b===this.a},
$S:210}
A.l8.prototype={
gcN(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.ip(new A.qI(p),t.H):o,$async$gcN)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcN,r)},
gcf(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.ip(new A.qH(p),t.u):o,$async$gcf)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcf,r)},
f1(){var s=0,r=A.h(t.H),q=this
var $async$f1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$f1)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f1,r)},
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
if(j!=null)j.vs()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.Cn()
A.B5(m)
k=l.a.get(m)
if(k==null)A.v(A.x("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.t?j:A.bn(j,t.H),$async$p)
case 6:q.f.nf()
return A.e(null,r)}})
return A.f($async$p,r)},
lU(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a4(s,!0)
p=a.is(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gG(0)).p()
n.j(0,p.d,p)
return new A.a4(p,!0)}return new A.a4(p,!1)},
vH(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aF(b,B.m)
else{s=null
r=null
q=this.lU(a,b)
s=q.a
r=q.b
try{s.e9(new A.l3(c.guE()))}finally{if(r)s.dr()
else s.p()}}},
ob(a,b,c){var s,r=null,q=null,p=this.lU(a,b)
r=p.a
q=p.b
try{s=A.I8(r,c)
return s}finally{if(q)r.dr()
else r.p()}}}
A.qI.prototype={
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
return A.a(A.vH("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge7()
s=3
break
case 5:case 6:s=10
return A.a(A.ll("drift_db/"+l.c,k===B.ax,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge7()
s=3
break
case 7:s=11
return A.a(A.lv(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge7()
s=3
break
case 8:l.z=A.Bb("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.qH.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcN(),$async$$0)
case 4:n=b
o.mY()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e3(B.e.v(n.a),1),n,0)
if(m===0)A.v(A.x("could not register vfs"))
$.Cn().j(0,n,m)
s=5
return A.a(l.f.km(new A.qG(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:69}
A.qG.prototype={
$0(){var s=this.a
return s.a.b.ip(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:69}
A.x3.prototype={
glI(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.ol()
r.Q!==$&&A.AO()
r.Q=s
q=s}return q},
ed(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ed=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cd(A.bY(A.K_(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ed)
case 7:if(!b){s=6
break}m=h.gn()
s=J.w(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.ib(i.port,i.lockName,null)
n.l6(l)
s=9
break
case 10:s=A.LT(m.t)?11:12
break
case 11:s=13
return A.a(n.mC(m),$async$ed)
case 13:k=b
j.postMessage(k.gnl())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.D(),$async$ed)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ed,r)},
l6(a){var s=this,r=A.IU(a,s.d++,s)
s.c.push(r)
r.b.a.aZ(new A.x4(s,r))
return r},
mC(a){return this.x.kJ(new A.x5(this,a),t.p6)},
cd(a){return this.wD(a)},
wD(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.be(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.x("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bn(n,t.he),$async$cd)
case 5:s=3
break
case 4:o=A.B8(q.b.cd(m),new A.x6(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cd)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cd,r)},
vR(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ax||b===B.aZ
o=A.Bi(t.cj)
n=c===0?null:new A.uN(c,A.dH(null,null,t.N,t.fw))
n=new A.l8(this,r,a,b,d,new A.l7(q+"-outer",q,new A.iR(o),p),n)
s.j(0,r,n)
return n}}
A.x4.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.x5.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.w(d.t,"dedicatedCompatibilityCheck")||J.w(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
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
case 4:b=J.w(d.t,"dedicatedCompatibilityCheck")||J.w(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.oC(),$async$$0)
case 9:case 8:j=a1
i=A.aO(t.cU)
s=J.w(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glI()
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
return A.a(new A.hr(n,"message",!1,t.d4).gG(0),$async$$0)
case 15:e=b.GR(a.be(a1.data))
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
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a4(B.bf,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.A4(c),$async$$0)
case 23:if(a1)i.u(0,new A.a4(B.bg,c))
case 22:d=A.N(i,i.$ti.c)
q=new A.ej(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:212}
A.x6.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:213}
A.ka.prototype={}
A.nD.prototype={
gmW(){return new A.hr(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.o7.prototype={
gmW(){return new A.dj(new A.z5(this),t.k8)},
p(){}}
A.z5.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.bm(this.a.a,"connect",new A.z2(new A.z6(s,r,a)),!1,t.m))
a.r=new A.z3(r)},
$S:214}
A.z6.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bm(a,"message",new A.z4(this.c),!1,t.m))},
$S:2}
A.z4.prototype={
$1(a){this.a.ut(a)},
$S:2}
A.z2.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bO(r,A.Z(r).i("bO<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:2}
A.z3.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].D()},
$S:3}
A.nE.prototype={
ol(){var s=v.G
if(!("Worker" in s))return null
return new A.y6(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.y6.prototype={}
A.mL.prototype={
gfP(){return A.G(this.c)}}
A.w_.prototype={
gkl(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iP(a){var s,r=this,q=r.d=J.Gw(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
mQ(a,b){var s
if(this.iP(a))return
if(b==null)if(a instanceof A.es)b="/"+a.a+"/"
else{s=J.a_(a)
s=A.y(s,"\\","\\\\")
b='"'+A.y(s,'"','\\"')+'"'}this.lA(b)},
f7(a){return this.mQ(a,null)},
vL(){if(this.c===this.b.length)return
this.lA("no more input")},
vG(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.v(A.aZ("position must be greater than or equal to 0."))
else if(c>n.length)A.v(A.aZ("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.v(A.aZ("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.vJ(s,r,new Uint32Array(q))
p.oK(new A.cj(n),s)
o=c+b
if(o>q)A.v(A.aZ("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.v(A.aZ("Start may not be negative, was "+c+"."))
throw A.b(new A.mL(n,a,new A.hs(p,c,o)))},
lA(a){this.vG("expected "+a+".",0,this.c)}}
A.ha.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.D_(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.D_(b,this))
s=this.a
s.$flags&2&&A.I(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.I(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lq(b)
B.f.au(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.u0(q)
q=r.a
s=r.b++
q.$flags&2&&A.I(q)
q[s]=b},
lq(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
u0(a){var s=this.lq(null)
B.f.au(s,0,a,this.a)
this.a=s},
ah(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.as(c,0,s,null,null))
s=this.a
if(d instanceof A.cw)B.f.ah(s,b,c,d.a,e)
else B.f.ah(s,b,c,d,e)},
au(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.nN.prototype={}
A.cw.prototype={}
A.B3.prototype={}
A.hr.prototype={
a7(a,b,c,d){return A.bm(this.a,this.b,a,!1,this.$ti.c)},
bP(a,b,c){return this.a7(a,null,b,c)}}
A.jH.prototype={
D(){var s=this,r=A.bp(null,t.H)
if(s.b==null)return r
s.jK()
s.d=s.b=null
return r},
im(a){var s,r=this
if(r.b==null)throw A.b(A.x("Subscription has been canceled."))
r.jK()
s=A.F2(new A.ya(a),t.m)
s=s==null?null:A.cX(s)
r.d=s
r.jI()},
bs(){if(this.b==null)return;++this.a
this.jK()},
bf(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jI()},
jI(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jK(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibj:1}
A.y9.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.ya.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.dG.prototype
s.ox=s.l
s=A.bC.prototype
s.ot=s.mZ
s.ou=s.n_
s.ow=s.n1
s.ov=s.n0
s=A.b1.prototype
s.iR=s.aC
s.l3=s.aI
s.l4=s.aS
s=A.dh.prototype
s.oA=s.ln
s.oB=s.lD
s.oC=s.ma
s=A.K.prototype
s.l2=s.ah
s=A.aB.prototype
s.l1=s.uD
s=A.k_.prototype
s.oD=s.p
s=A.o.prototype
s.os=s.dv
s=A.kI.prototype
s.l_=s.i2
s=A.fi.prototype
s.l0=s.f2
s=A.h0.prototype
s.oz=s.Z
s.oy=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"K9","Hq",46)
r(A,"Km","HU",10)
q(A,"KV","IF",21)
q(A,"KW","IG",21)
q(A,"KX","IH",21)
q(A,"KY","Kp",17)
r(A,"F7","KM",0)
q(A,"KZ","Kq",26)
s(A,"L_","Ks",13)
r(A,"A0","Kr",0)
p(A,"L4",5,null,["$5"],["KG"],216,0)
p(A,"L9",4,null,["$1$4","$4"],["zW",function(a,b,c,d){return A.zW(a,b,c,d,t.z)}],217,0)
p(A,"Lb",5,null,["$2$5","$5"],["zX",function(a,b,c,d,e){var i=t.z
return A.zX(a,b,c,d,e,i,i)}],218,0)
p(A,"La",6,null,["$3$6"],["C3"],219,0)
p(A,"L7",4,null,["$1$4","$4"],["ER",function(a,b,c,d){return A.ER(a,b,c,d,t.z)}],220,0)
p(A,"L8",4,null,["$2$4","$4"],["ES",function(a,b,c,d){var i=t.z
return A.ES(a,b,c,d,i,i)}],221,0)
p(A,"L6",4,null,["$3$4","$4"],["EQ",function(a,b,c,d){var i=t.z
return A.EQ(a,b,c,d,i,i,i)}],222,0)
p(A,"L2",5,null,["$5"],["KF"],223,0)
p(A,"Lc",4,null,["$4"],["zY"],224,0)
p(A,"L1",5,null,["$5"],["KE"],225,0)
p(A,"L0",5,null,["$5"],["KD"],226,0)
p(A,"L5",4,null,["$4"],["KH"],227,0)
p(A,"L3",5,null,["$5"],["EP"],228,0)
var j
o(j=A.eO.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
n(A.eP.prototype,"guM",0,1,null,["$2","$1"],["c6","aT"],60,0,0)
m(A.t.prototype,"gj3","ps",13)
n(j=A.e2.prototype,"guq",0,1,null,["$2","$1"],["bz","ur"],60,0,0)
l(j,"gp_","aC",15)
m(j,"goW","aI",13)
o(j,"gpj","aS",0)
o(j=A.dY.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
o(j=A.b1.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
o(A.hq.prototype,"glS","rI",0)
l(j=A.cd.prototype,"grA","rB",15)
m(j,"grE","rF",13)
o(j,"grC","rD",0)
o(j=A.ht.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
l(j,"gjd","je",15)
m(j,"gjh","ji",148)
o(j,"gjf","jg",0)
o(j=A.hB.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
l(j,"gjd","je",15)
m(j,"gjh","ji",13)
o(j,"gjf","jg",0)
s(A,"C7","JT",29)
q(A,"C8","JU",30)
s(A,"Lh","Hy",46)
q(A,"Ls","JX",32)
k(j=A.nv.prototype,"guo","u",15)
o(j,"ge7","p",0)
q(A,"Fc","LM",30)
s(A,"Fb","LL",29)
q(A,"Lt","Iy",7)
p(A,"M_",2,null,["$1$2","$2"],["Fr",function(a,b){return A.Fr(a,b,t.o)}],229,0)
m(j=A.lb.prototype,"gvF","X",29)
l(j,"gwn","ab",30)
l(j,"gwt","wu",17)
q(A,"Lf","GJ",7)
q(A,"Fa","H_",230)
q(A,"Lm","H4",231)
q(A,"Lo","Hm",232)
q(A,"Ll","GE",233)
q(A,"Ln","Ha",234)
q(A,"Aa","H3",7)
r(A,"LW","JV",10)
o(A.ny.prototype,"gvV","k9",0)
r(A,"Nu","JW",10)
l(A.m8.prototype,"gx8","x9",8)
o(A.mj.prototype,"gk_","f2",0)
o(A.m1.prototype,"gk_","f2",0)
l(j=A.fi.prototype,"grw","rz",36)
o(j,"gm0","e_",5)
q(A,"LD","CU",235)
o(j=A.m5.prototype,"grG","rH",0)
l(j,"grJ","rK",113)
q(A,"M9","HS",66)
q(A,"Lj","B0",237)
l(j=A.mM.prototype,"gwc","wd",36)
l(j,"gwa","wb",123)
o(j,"grv","jv",0)
q(A,"Mg","Ip",66)
q(A,"Lq","dp",14)
q(A,"Lp","Ac",14)
r(A,"LV","KP",238)
q(A,"Mk","IC",239)
m(j=A.nf.prototype,"gq8","d1",1)
m(j,"gqn","h7",1)
m(j=A.nd.prototype,"gqh","h5",1)
m(j,"gqf","h4",1)
m(j,"gqj","h6",1)
m(j,"gqb","h2",1)
m(j,"gqd","h3",1)
m(j,"gql","jc",1)
m(j,"gra","hm",1)
m(A.ne.prototype,"gqN","hf",1)
m(j=A.nh.prototype,"gqE","jk",1)
m(j,"gqG","jl",1)
m(j,"gqI","hd",1)
m(j,"gqC","jj",1)
m(j,"gqu","ha",1)
m(j,"gqw","dN",1)
m(j,"gqy","hb",1)
m(j,"gqs","h9",1)
m(j,"gqq","h8",1)
m(j,"gqA","hc",1)
m(A.ni.prototype,"gq6","jb",1)
m(j=A.nj.prototype,"gr2","dP",1)
m(j,"gr6","hk",1)
m(j,"gqV","hg",1)
m(j,"gqX","hh",1)
m(j,"gqZ","hi",1)
m(j,"gr0","hj",1)
m(j,"gr8","hl",1)
m(j,"gr4","jn",1)
l(j=A.l6.prototype,"gwG","wH",8)
m(j,"gwE","wF",168)
n(j,"gys",0,5,null,["$5"],["yt"],169,0,0)
n(j,"gyh",0,3,null,["$3"],["yi"],170,0,0)
n(j,"gy9",0,4,null,["$4"],["ya"],56,0,0)
n(j,"gyo",0,4,null,["$4"],["yp"],56,0,0)
n(j,"gyu",0,3,null,["$3"],["yv"],172,0,0)
m(j,"gyz","yA",57)
m(j,"gyf","yg",57)
l(j,"gyd","ye",39)
n(j,"gyw",0,4,null,["$4"],["yx"],59,0,0)
n(j,"gyH",0,4,null,["$4"],["yI"],59,0,0)
m(j,"gyD","yE",176)
m(j,"gyB","yC",22)
m(j,"gym","yn",22)
m(j,"gyq","yr",22)
m(j,"gyF","yG",22)
m(j,"gyb","yc",22)
l(j,"giL","yj",39)
n(j,"gyk",0,3,null,["$3"],["yl"],178,0,0)
l(j,"giN","yy",39)
l(j,"gve","vf",21)
l(j,"gv9","va",179)
n(j,"gvc",0,5,null,["$5"],["vd"],180,0,0)
n(j,"gvk",0,4,null,["$4"],["vl"],40,0,0)
n(j,"gvo",0,4,null,["$4"],["vp"],40,0,0)
n(j,"gvm",0,4,null,["$4"],["vn"],40,0,0)
m(j,"gvq","vr",62)
m(j,"gvi","vj",62)
n(j,"gvg",0,5,null,["$5"],["vh"],183,0,0)
m(j,"gv7","v8",184)
m(j,"gv5","v6",185)
n(j,"gv3",0,3,null,["$3"],["v4"],186,0,0)
o(j=A.dD.prototype,"ge7","p",5)
o(j,"gvT","cF",5)
o(A.fZ.prototype,"ge7","p",0)
o(A.l7.prototype,"gqP","qQ",0)
l(A.ek.prototype,"guE","mz",203)
l(A.hk.prototype,"gwe","wf",2)
q(A,"F9","Fh",160)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.Bg,J.lx,A.j7,J.fe,A.xY,A.xy,A.o,A.kS,A.eh,A.U,A.ad,A.K,A.vF,A.ar,A.lM,A.cU,A.lh,A.mN,A.mz,A.lf,A.nc,A.io,A.mZ,A.jk,A.hy,A.iH,A.fm,A.hu,A.cq,A.wp,A.m0,A.ij,A.jX,A.tt,A.bD,A.aS,A.lJ,A.es,A.hx,A.no,A.h4,A.zd,A.nw,A.oj,A.cp,A.nJ,A.og,A.k0,A.ju,A.nq,A.jM,A.od,A.al,A.aa,A.b1,A.jA,A.mO,A.jK,A.eP,A.cb,A.t,A.np,A.e2,A.oe,A.jw,A.nm,A.nF,A.y7,A.e1,A.hq,A.cd,A.jG,A.zC,A.zE,A.zD,A.zA,A.zB,A.zz,A.zw,A.os,A.zv,A.zu,A.zy,A.zx,A.or,A.ot,A.oq,A.hK,A.jt,A.nK,A.yP,A.e0,A.nR,A.b4,A.nT,A.oi,A.nS,A.mK,A.kV,A.aB,A.ns,A.p8,A.nr,A.kT,A.o8,A.eQ,A.yM,A.ze,A.ok,A.dk,A.aI,A.nI,A.aM,A.aC,A.y8,A.m3,A.je,A.nH,A.bh,A.lw,A.R,A.W,A.oc,A.jf,A.mr,A.a1,A.k7,A.wz,A.cc,A.li,A.m_,A.yF,A.yG,A.lg,A.a3,A.lc,A.iw,A.eu,A.hG,A.hw,A.iG,A.lb,A.lZ,A.n_,A.ck,A.c2,A.rj,A.pl,A.iF,A.j9,A.tI,A.j8,A.vE,A.q8,A.qo,A.xX,A.eg,A.kH,A.kI,A.p4,A.lS,A.fz,A.dy,A.u4,A.vm,A.eC,A.cJ,A.mh,A.vC,A.mm,A.aQ,A.mu,A.jr,A.mG,A.aT,A.a0,A.pi,A.pj,A.pk,A.qW,A.ig,A.pH,A.ie,A.dI,A.to,A.mH,A.uJ,A.nQ,A.ny,A.hl,A.vu,A.wg,A.eZ,A.of,A.hA,A.rT,A.m8,A.d6,A.b_,A.cm,A.xZ,A.mg,A.cL,A.vB,A.aX,A.dC,A.fv,A.ep,A.c8,A.pS,A.c0,A.mt,A.u5,A.co,A.nx,A.hi,A.bF,A.z0,A.fi,A.x9,A.p6,A.ff,A.kN,A.mI,A.il,A.qZ,A.bg,A.tz,A.nV,A.mP,A.p3,A.m5,A.us,A.j0,A.hC,A.uA,A.z7,A.eq,A.dA,A.lr,A.cF,A.dB,A.dR,A.uq,A.oT,A.bA,A.pU,A.mM,A.d3,A.ey,A.tP,A.dK,A.lN,A.yW,A.yU,A.uc,A.p5,A.iE,A.j5,A.uh,A.mf,A.uX,A.b5,A.v5,A.bk,A.h6,A.h5,A.w1,A.bu,A.h3,A.cK,A.fN,A.j4,A.cB,A.w3,A.j3,A.jj,A.we,A.cN,A.cn,A.eA,A.wr,A.qp,A.eL,A.hn,A.cT,A.wv,A.hg,A.nb,A.wR,A.j2,A.aJ,A.hh,A.nf,A.nl,A.nd,A.ne,A.nh,A.ni,A.zt,A.nj,A.q0,A.w0,A.m6,A.m7,A.vJ,A.mC,A.h0,A.rk,A.bo,A.cx,A.cr,A.mF,A.cs,A.c7,A.kx,A.qr,A.e3,A.vL,A.ei,A.b6,A.kL,A.q6,A.o3,A.yV,A.bP,A.l3,A.df,A.jc,A.wM,A.wH,A.wO,A.wN,A.dV,A.dg,A.l6,A.d9,A.eR,A.wI,A.p_,A.jL,A.yb,A.nU,A.nM,A.yR,A.wC,A.ib,A.vw,A.i9,A.l2,A.lk,A.ri,A.cZ,A.l7,A.iR,A.ej,A.uN,A.fT,A.jZ,A.hm,A.l8,A.x3,A.ka,A.nE,A.y6,A.w_,A.B3,A.jH])
q(J.lx,[J.lz,J.iy,J.aE,J.bq,J.fy,J.er,J.dE])
q(J.aE,[J.dG,J.B,A.fF,A.iT])
q(J.dG,[J.m9,J.dU,J.bQ])
r(J.ly,A.j7)
r(J.rQ,J.B)
q(J.er,[J.ix,J.lA])
q(A.o,[A.dX,A.J,A.cl,A.aj,A.ik,A.eI,A.da,A.bG,A.eU,A.nn,A.ob,A.hE,A.et,A.j6])
q(A.dX,[A.ee,A.kb])
r(A.jE,A.ee)
r(A.jB,A.kb)
q(A.eh,[A.pn,A.pg,A.pm,A.rK,A.wf,A.At,A.Av,A.xg,A.xf,A.zH,A.zG,A.rg,A.rb,A.yf,A.ye,A.yq,A.yt,A.vW,A.vX,A.vU,A.y5,A.y4,A.z_,A.yw,A.y1,A.yO,A.tJ,A.yK,A.q5,A.xt,A.rc,A.Ax,A.AE,A.AF,A.A9,A.pb,A.pd,A.pf,A.kK,A.p7,A.zJ,A.p9,A.tN,A.Ak,A.q3,A.q4,A.vo,A.vk,A.uL,A.AP,A.vN,A.vO,A.qT,A.qS,A.qU,A.qR,A.qQ,A.qP,A.qO,A.qK,A.qL,A.qM,A.AJ,A.tp,A.ts,A.tr,A.tq,A.xQ,A.xN,A.wn,A.wj,A.wl,A.wh,A.t6,A.t7,A.t9,A.th,A.ta,A.tb,A.tc,A.td,A.te,A.tf,A.rX,A.rZ,A.t2,A.rV,A.rU,A.t0,A.t_,A.t3,A.t4,A.t5,A.u_,A.tX,A.tZ,A.vd,A.vf,A.vg,A.vh,A.vx,A.vA,A.pD,A.pG,A.pC,A.pF,A.pA,A.pz,A.py,A.pE,A.pB,A.pt,A.ps,A.px,A.pw,A.pu,A.pq,A.vq,A.vp,A.xa,A.AD,A.r1,A.r_,A.r2,A.r3,A.tA,A.tC,A.tE,A.tG,A.tB,A.wQ,A.uz,A.uv,A.uw,A.ux,A.uy,A.ut,A.uu,A.uH,A.uD,A.uE,A.uB,A.uC,A.uG,A.oU,A.oV,A.pW,A.pV,A.wc,A.w4,A.wa,A.w5,A.w6,A.w7,A.A6,A.A7,A.tW,A.tQ,A.tR,A.tS,A.tT,A.tU,A.ue,A.uf,A.un,A.ul,A.uk,A.uj,A.um,A.v3,A.uY,A.v_,A.v1,A.v6,A.vb,A.w2,A.Am,A.AI,A.AG,A.AH,A.tx,A.ty,A.ww,A.wx,A.AA,A.Ar,A.Aq,A.Af,A.x0,A.wX,A.wZ,A.x1,A.x8,A.q1,A.q2,A.zZ,A.rm,A.rl,A.rn,A.rp,A.rr,A.ro,A.rF,A.vP,A.qz,A.za,A.AB,A.AK,A.AL,A.oZ,A.y_,A.y0,A.pK,A.pL,A.pP,A.pQ,A.pR,A.r4,A.p2,A.p0,A.yz,A.yC,A.yD,A.rJ,A.rH,A.yy,A.vI,A.wD,A.wE,A.wF,A.wG,A.uV,A.uW,A.uU,A.uT,A.uS,A.wS,A.qD,A.u6,A.qV,A.A5,A.pI,A.pJ,A.pM,A.pN,A.pO,A.zQ,A.xD,A.xI,A.xL,A.xB,A.z5,A.z6,A.z4,A.z2,A.y9,A.ya])
q(A.pn,[A.xz,A.ph,A.q_,A.rR,A.Au,A.zI,A.A_,A.rh,A.ra,A.yg,A.yr,A.yu,A.xc,A.yv,A.tu,A.tL,A.yN,A.xs,A.zn,A.wA,A.zm,A.zl,A.re,A.rd,A.pa,A.pc,A.pe,A.kJ,A.u3,A.tO,A.zP,A.vn,A.vj,A.uM,A.vl,A.vD,A.AQ,A.A3,A.qN,A.u0,A.vi,A.vy,A.vz,A.pv,A.up,A.ur,A.oW,A.Aj,A.Ad,A.wy,A.wU,A.Ag,A.wY,A.rq,A.qC,A.yE,A.wT,A.xU,A.x6])
r(A.bO,A.jB)
q(A.U,[A.ef,A.bC,A.dh,A.nO])
q(A.ad,[A.dF,A.mk,A.dd,A.lB,A.mY,A.ms,A.nG,A.j_,A.iB,A.kC,A.bz,A.cS,A.mX,A.bi,A.kY])
q(A.K,[A.hb,A.mw,A.n6,A.hf,A.ek,A.ha])
r(A.cj,A.hb)
q(A.pm,[A.Az,A.uP,A.xh,A.xi,A.zg,A.zf,A.zF,A.xk,A.xl,A.xn,A.xo,A.xm,A.xj,A.rf,A.yh,A.ym,A.yl,A.yj,A.yi,A.yp,A.yo,A.yn,A.ys,A.vV,A.vY,A.vT,A.z9,A.z8,A.xb,A.xx,A.xw,A.yS,A.yQ,A.zK,A.zL,A.y3,A.y2,A.yZ,A.yY,A.zV,A.zq,A.zp,A.qJ,A.zS,A.zT,A.tM,A.xR,A.xO,A.xP,A.wm,A.wk,A.wi,A.t8,A.tg,A.ti,A.tj,A.tk,A.tl,A.tm,A.tn,A.rW,A.rY,A.t1,A.ve,A.qX,A.rG,A.r8,A.r7,A.vR,A.pp,A.pr,A.wo,A.vr,A.ub,A.r0,A.qY,A.tD,A.tF,A.uo,A.uF,A.pT,A.pZ,A.pY,A.pX,A.w9,A.w8,A.wb,A.v4,A.uZ,A.v0,A.v2,A.v7,A.vc,A.va,A.v9,A.v8,A.wd,A.ui,A.ud,A.tH,A.wW,A.x2,A.x7,A.rE,A.rs,A.rz,A.rA,A.rB,A.rC,A.rx,A.ry,A.rt,A.ru,A.rv,A.rw,A.rD,A.yx,A.qA,A.qB,A.qx,A.qw,A.qy,A.qt,A.qs,A.qu,A.qv,A.zb,A.zc,A.AM,A.qc,A.q9,A.qe,A.qg,A.qi,A.qb,A.qh,A.qm,A.qk,A.qj,A.qd,A.qf,A.ql,A.qa,A.oX,A.oY,A.wJ,A.p1,A.yA,A.yB,A.yc,A.rI,A.qE,A.qF,A.u8,A.u7,A.xS,A.xW,A.xT,A.xV,A.xC,A.xH,A.xK,A.xE,A.xJ,A.xM,A.xF,A.xG,A.qI,A.qH,A.qG,A.x4,A.x5,A.z3])
q(A.J,[A.V,A.en,A.T,A.ao,A.aN,A.eT,A.jO])
q(A.V,[A.ct,A.X,A.bU,A.iD,A.nP])
r(A.em,A.cl)
r(A.ih,A.eI)
r(A.fq,A.da)
q(A.hy,[A.nW,A.nX,A.nY])
q(A.nW,[A.a4,A.jU,A.jV,A.hz,A.nZ])
r(A.eX,A.nX)
q(A.nY,[A.eY,A.o_])
r(A.k6,A.iH)
r(A.cR,A.k6)
r(A.ic,A.cR)
q(A.fm,[A.aW,A.iq])
q(A.cq,[A.id,A.jW])
r(A.dw,A.id)
r(A.iu,A.rK)
r(A.iY,A.dd)
q(A.wf,[A.vQ,A.i6])
q(A.bC,[A.iA,A.iz,A.jN])
r(A.fE,A.fF)
q(A.iT,[A.iS,A.fG])
q(A.fG,[A.jQ,A.jS])
r(A.jR,A.jQ)
r(A.dN,A.jR)
r(A.jT,A.jS)
r(A.bS,A.jT)
q(A.dN,[A.lU,A.lV])
q(A.bS,[A.lW,A.lX,A.lY,A.iU,A.iV,A.iW,A.ex])
r(A.k1,A.nG)
q(A.aa,[A.hD,A.jh,A.jF,A.dj,A.jI,A.jz,A.i4,A.hr])
r(A.b7,A.hD)
r(A.b0,A.b7)
q(A.b1,[A.dY,A.ht,A.hB])
r(A.eO,A.dY)
r(A.jv,A.jA)
q(A.eP,[A.aH,A.am])
q(A.e2,[A.cV,A.hF])
r(A.jY,A.nm)
q(A.nF,[A.ca,A.hp])
r(A.jP,A.cV)
r(A.eV,A.jI)
q(A.oq,[A.nz,A.o2])
q(A.dh,[A.dZ,A.jC])
r(A.di,A.jW)
q(A.mK,[A.k_,A.zh,A.xp,A.oa])
r(A.yI,A.k_)
q(A.kV,[A.eo,A.kF,A.rS])
q(A.eo,[A.kA,A.lH,A.n3])
q(A.aB,[A.oh,A.i5,A.kG,A.lE,A.lD,A.n4,A.jm,A.lo])
q(A.oh,[A.kB,A.lI])
r(A.xu,A.ns)
q(A.p8,[A.xq,A.hj,A.nv,A.zo])
r(A.xd,A.xq)
r(A.lC,A.iB)
r(A.yJ,A.kT)
r(A.yL,A.yM)
r(A.ou,A.ok)
r(A.zr,A.ou)
q(A.bz,[A.d8,A.is])
r(A.nC,A.k7)
r(A.fY,A.hG)
r(A.o5,A.lo)
r(A.z1,A.rj)
r(A.o6,A.z1)
r(A.kv,A.pl)
r(A.ja,A.vE)
r(A.nA,A.kv)
r(A.l4,A.nA)
r(A.nB,A.tI)
r(A.qn,A.nB)
r(A.mn,A.eg)
r(A.kP,A.kH)
r(A.du,A.jh)
q(A.kI,[A.u2,A.vv])
r(A.ji,A.p4)
r(A.mJ,A.ji)
r(A.i7,A.a3)
q(A.dy,[A.kW,A.jo])
q(A.u4,[A.iM,A.iP,A.iN,A.iQ,A.iJ,A.iK,A.iI,A.iO,A.iL])
q(A.y8,[A.aY,A.cA,A.dT,A.ma,A.i8,A.dv,A.d0,A.kZ,A.le,A.c3,A.it,A.u1,A.dM,A.eb,A.c9,A.kE,A.cO,A.i0,A.fI,A.iZ,A.jd,A.ug,A.ft,A.lO,A.dz,A.cv,A.im,A.dP])
q(A.cJ,[A.iC,A.iX,A.i1,A.i2])
q(A.mm,[A.m2,A.kQ,A.lp,A.kU,A.ln,A.mp,A.lT,A.mi,A.l1,A.l0,A.ld,A.ls,A.kw,A.lj,A.mv,A.mQ,A.mR,A.mT,A.mV,A.mU,A.mS,A.n9,A.na,A.n8,A.ky,A.n7,A.n5,A.me,A.kX,A.mq])
q(A.aQ,[A.fH,A.kR,A.lq,A.fU,A.fV,A.fD,A.fP,A.fn,A.fo,A.fx,A.fd,A.fs,A.fX,A.h8,A.jp,A.fM,A.fk])
r(A.oS,A.qW)
q(A.dI,[A.eK,A.eJ,A.ez,A.fh,A.fK,A.fu,A.cM,A.fS,A.fW,A.eE,A.h1,A.fC,A.fl,A.el,A.fR])
q(A.eE,[A.hc,A.fw])
r(A.lF,A.nQ)
q(A.d6,[A.a9,A.c4,A.dt,A.cY])
r(A.fj,A.nx)
q(A.fi,[A.mj,A.m1])
r(A.wP,A.p6)
r(A.uI,A.m5)
r(A.xe,A.yU)
q(A.bu,[A.h9,A.eF,A.jb,A.c_,A.cE,A.cI,A.fJ,A.fL,A.fp,A.ec])
r(A.tw,A.qp)
r(A.lL,A.eL)
q(A.hh,[A.js,A.eM])
r(A.ol,A.nf)
r(A.om,A.ol)
r(A.on,A.om)
r(A.oo,A.on)
r(A.op,A.oo)
r(A.x_,A.op)
r(A.rO,A.w0)
q(A.rO,[A.uK,A.wB,A.wV])
r(A.lm,A.mC)
q(A.h0,[A.hs,A.mE])
r(A.h_,A.mF)
r(A.db,A.mE)
r(A.h2,A.ei)
r(A.kM,A.b6)
q(A.kM,[A.lt,A.dD,A.fZ])
q(A.kL,[A.nL,A.o9])
r(A.o0,A.q6)
r(A.o1,A.o0)
r(A.mo,A.o1)
r(A.o4,A.o3)
r(A.c6,A.o4)
q(A.b4,[A.eN,A.b8])
r(A.he,A.vL)
q(A.b8,[A.jJ,A.jD,A.ho,A.hJ])
r(A.uR,A.vw)
r(A.q7,A.l2)
r(A.ds,A.fT)
r(A.hk,A.uR)
q(A.ka,[A.nD,A.o7])
r(A.mL,A.h_)
r(A.nN,A.ha)
r(A.cw,A.nN)
s(A.hb,A.mZ)
s(A.kb,A.K)
s(A.jQ,A.K)
s(A.jR,A.io)
s(A.jS,A.K)
s(A.jT,A.io)
s(A.cV,A.jw)
s(A.hF,A.oe)
s(A.k6,A.oi)
s(A.ou,A.mK)
s(A.nA,A.q8)
s(A.nB,A.qo)
s(A.nQ,A.pj)
s(A.nx,A.pk)
s(A.ol,A.ne)
s(A.om,A.ni)
s(A.on,A.nj)
s(A.oo,A.nh)
s(A.op,A.nd)
s(A.o0,A.K)
s(A.o1,A.lZ)
s(A.o3,A.n_)
s(A.o4,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ab:"double",aV:"num",k:"String",Q:"bool",W:"Null",p:"List",j:"Object",F:"Map",M:"JSObject"},mangledNames:{},types:["~()","z<j?>(ng,hg)","~(M)","W()","z<~>(bF)","z<~>()","z<W>(bF)","k(k)","~(i)","Q(k)","i()","W(j,aF)","R<k,@>(@,@)","~(j,aF)","j?(j?)","~(j?)","fH(~)","Q(j?)","Q(@)","z<W>()","z<b5>()","~(~())","i(bl,i)","W(M)","z<~>(jL)","~(p<i>)","~(@)","W(j)","~(@,@)","Q(j?,j?)","i(j?)","~(k,k)","@(@)","0&()","W(@)","M()","~(a0)","z<~>(~)","Q(bo)","i(bl)","~(d9,i,i,i)","~(j?,j?)","j?(F<k,j?>)","k(ew)","Q(bg)","z<cF>(k)","i(@,@)","~(dc)","z<W>(qq)","z<@>()","@()","k(F<k,j?>)","Q(aX)","~(k,@)","z<i>()","z<p<k>>()","i(b6,i,i,i)","i(b6,i)","@(k)","i(bl,i,i,bq)","~(j[aF?])","Q(c8)","~(d9,i)","R<k,j?>(@,@)","Q()","Q(dC)","ab(i)","z<bj<~>>()","~(~)","z<eL>()","i(cF)","z<p<cL>>()","i(k)","z<aV?>()","z<k>()","fM(i)","fk(i)","fD(p<k>)","z<co>()","fP(co)","W(k,k[j?])","fX(p<cL>)","~(dL<p<i>>)","h8(~)","Q(hA)","~(F<k,j?>?)","~(p<F<k,j?>>)","~(i,@)","i(c8,c8)","~(k,j?)","k(cm)","k()","Q(cm)","aX()","dC()","fv()","ep()","c8()","eQ<@,@>(bB<@>)","k(@)","z<F<k,j?>?>(k)","Q(i)","k(i,i)","fz()","p<F<k,j?>>(co)","i(i,i)","Q(cA)","~(p<ck>)","z<aa<p<i>>>()","k?(F<k,j?>)","bg()","z<bg>(bF)","Q(dT)","~(j0)","R<k,dA>(k,h3)","cK(@)","i(i)","p<eC>(j?)","z<dR>(k)","i(dR)","aC(i)","z<W>(~)","bA()","~(cB)","Q(aY)","z<bk>(bk)","bk(bk)","bk(j)","p<cJ>(j?)","dK/(j?)","z<j?>(j?)","F<k,j?>(p<j?>)","z<i>(bF)","Q(+(k,j))","i(+(k,j),+(k,j))","k(i[i])","cN()","cn()","eA()","t<@>?()","z<Q>(k)","z<~>(k)","hn()","i(i,cT)","Q(cT)","i(cT)","c0<j?>(@)","Q(c0<j?>)","~(@,aF)","i(+(k,j?),+(k,j?))","~(dy)","~(p<bA>)","aa<p<i>>()","~(h6)","k(k?)","k?()","i(cx)","F<k,j?>(c6)","j(cx)","j(bo)","F<k,j?>(bA)","p<cx>(R<j,p<bo>>)","db()","k(j?)","~(i,k,i)","~(Bs,p<Bt>)","0&(k,i?)","~(P,at,P,~())","~(bq,i)","bl?(b6,i,i,i,i)","i(b6,i,i)","j?(vM)","i(b6?,i,i)","~(k,k?)","k(k,k)","W(bQ,bQ)","i(bl,bq)","j?(~)","i(bl,i,i)","i(i())","~(~(i,k,i),i,i,i,bq)","W(~())","z<@>(bF)","i(d9,i,i,i,i)","i(i(i),i)","i(Bx,i)","i(Bx,i,i)","@(@,k)","~(aT)","M(B<j?>)","W(@,aF)","z<F<k,j?>?>()","M(M?)","~(ed)","z<~>(i,cQ)","z<~>(i)","cQ()","z<M>(k)","W(cZ)","z<W>(M)","M(j)","W(j?,aF)","k?(j?)","~(ei)","M(M)","z<M>()","fU(F<k,j?>?)","z<p<F<k,j?>?>>()","z<bj<cs>>()","~(cs)","Q(hm)","fV(p<F<k,j?>?>)","z<ej>()","0&(j?,aF)","~(dL<M>)","Q(k,k)","~(P?,at?,P,j,aF)","0^(P?,at?,P,0^())<j?>","0^(P?,at?,P,0^(1^),1^)<j?,j?>","0^(P?,at?,P,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(P,at,P,0^())<j?>","0^(1^)(P,at,P,0^(1^))<j?,j?>","0^(1^,2^)(P,at,P,0^(1^,2^))<j?,j?,j?>","al?(P,at,P,j,aF?)","~(P?,at?,P,~())","dc(P,at,P,aC,~())","dc(P,at,P,aC,~(dc))","~(P,at,P,k)","P(P?,at?,P,jt?,F<j?,j?>?)","0^(0^,0^)<aV>","fn(i)","fo(p<j?>)","fx(p<k>)","fd(aV?)","fs(k)","bg(F<k,j?>)","z<p<j?>>()","bA(F<k,j?>)","aM()","F<k,j?>(bg)","i(bo,bo)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a4&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.jU&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.jV&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hz&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.nZ&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eX&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eY&&A.Fv(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.o_&&A.Fv(a,b.a)}}
A.Jo(v.typeUniverse,JSON.parse('{"bQ":"dG","m9":"dG","dU":"dG","MD":"fF","B":{"p":["1"],"aE":[],"J":["1"],"M":[],"o":["1"],"b9":["1"]},"lz":{"Q":[],"ah":[]},"iy":{"W":[],"ah":[]},"aE":{"M":[]},"dG":{"aE":[],"M":[]},"ly":{"j7":[]},"rQ":{"B":["1"],"p":["1"],"aE":[],"J":["1"],"M":[],"o":["1"],"b9":["1"]},"er":{"ab":[],"aV":[],"au":["aV"]},"ix":{"ab":[],"i":[],"aV":[],"au":["aV"],"ah":[]},"lA":{"ab":[],"aV":[],"au":["aV"],"ah":[]},"dE":{"k":[],"au":["k"],"b9":["@"],"ah":[]},"dX":{"o":["2"]},"ee":{"dX":["1","2"],"o":["2"],"o.E":"2"},"jE":{"ee":["1","2"],"dX":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"jB":{"K":["2"],"p":["2"],"dX":["1","2"],"J":["2"],"o":["2"]},"bO":{"jB":["1","2"],"K":["2"],"p":["2"],"dX":["1","2"],"J":["2"],"o":["2"],"K.E":"2","o.E":"2"},"ef":{"U":["3","4"],"F":["3","4"],"U.V":"4","U.K":"3"},"dF":{"ad":[]},"mk":{"ad":[]},"cj":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"J":{"o":["1"]},"V":{"J":["1"],"o":["1"]},"ct":{"V":["1"],"J":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cl":{"o":["2"],"o.E":"2"},"em":{"cl":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"X":{"V":["2"],"J":["2"],"o":["2"],"V.E":"2","o.E":"2"},"aj":{"o":["1"],"o.E":"1"},"ik":{"o":["2"],"o.E":"2"},"eI":{"o":["1"],"o.E":"1"},"ih":{"eI":["1"],"J":["1"],"o":["1"],"o.E":"1"},"da":{"o":["1"],"o.E":"1"},"fq":{"da":["1"],"J":["1"],"o":["1"],"o.E":"1"},"en":{"J":["1"],"o":["1"],"o.E":"1"},"bG":{"o":["1"],"o.E":"1"},"hb":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"bU":{"V":["1"],"J":["1"],"o":["1"],"V.E":"1","o.E":"1"},"ic":{"cR":["1","2"],"F":["1","2"]},"fm":{"F":["1","2"]},"aW":{"fm":["1","2"],"F":["1","2"]},"eU":{"o":["1"],"o.E":"1"},"iq":{"fm":["1","2"],"F":["1","2"]},"id":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"dw":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"iY":{"dd":[],"ad":[]},"lB":{"ad":[]},"mY":{"ad":[]},"m0":{"H":[]},"jX":{"aF":[]},"ms":{"ad":[]},"bC":{"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"T":{"J":["1"],"o":["1"],"o.E":"1"},"ao":{"J":["1"],"o":["1"],"o.E":"1"},"aN":{"J":["R<1,2>"],"o":["R<1,2>"],"o.E":"R<1,2>"},"iA":{"bC":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"iz":{"bC":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"hx":{"ml":[],"ew":[]},"nn":{"o":["ml"],"o.E":"ml"},"h4":{"ew":[]},"ob":{"o":["ew"],"o.E":"ew"},"fE":{"aE":[],"M":[],"ed":[],"ah":[]},"fF":{"aE":[],"M":[],"ed":[],"ah":[]},"iT":{"aE":[],"M":[]},"oj":{"ed":[]},"iS":{"aE":[],"AZ":[],"M":[],"ah":[]},"fG":{"bR":["1"],"aE":[],"M":[],"b9":["1"]},"dN":{"K":["ab"],"p":["ab"],"bR":["ab"],"aE":[],"J":["ab"],"M":[],"b9":["ab"],"o":["ab"]},"bS":{"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"]},"lU":{"dN":[],"r5":[],"K":["ab"],"p":["ab"],"bR":["ab"],"aE":[],"J":["ab"],"M":[],"b9":["ab"],"o":["ab"],"ah":[],"K.E":"ab"},"lV":{"dN":[],"r6":[],"K":["ab"],"p":["ab"],"bR":["ab"],"aE":[],"J":["ab"],"M":[],"b9":["ab"],"o":["ab"],"ah":[],"K.E":"ab"},"lW":{"bS":[],"rL":[],"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"],"ah":[],"K.E":"i"},"lX":{"bS":[],"rM":[],"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"],"ah":[],"K.E":"i"},"lY":{"bS":[],"rN":[],"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"],"ah":[],"K.E":"i"},"iU":{"bS":[],"ws":[],"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"],"ah":[],"K.E":"i"},"iV":{"bS":[],"wt":[],"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"],"ah":[],"K.E":"i"},"iW":{"bS":[],"wu":[],"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"],"ah":[],"K.E":"i"},"ex":{"bS":[],"cQ":[],"K":["i"],"p":["i"],"bR":["i"],"aE":[],"J":["i"],"M":[],"b9":["i"],"o":["i"],"ah":[],"K.E":"i"},"nG":{"ad":[]},"k1":{"dd":[],"ad":[]},"al":{"ad":[]},"t":{"z":["1"]},"dL":{"bB":["1"]},"k0":{"dc":[]},"ju":{"ia":["1"]},"hE":{"o":["1"],"o.E":"1"},"b0":{"b7":["1"],"hD":["1"],"aa":["1"],"aa.T":"1"},"eO":{"dY":["1"],"b1":["1"],"bj":["1"],"b1.T":"1"},"jA":{"bB":["1"]},"jv":{"jA":["1"],"bB":["1"]},"mO":{"H":[]},"j_":{"ad":[]},"eP":{"ia":["1"]},"aH":{"eP":["1"],"ia":["1"]},"am":{"eP":["1"],"ia":["1"]},"jh":{"aa":["1"]},"e2":{"bB":["1"]},"cV":{"jw":["1"],"e2":["1"],"bB":["1"]},"hF":{"e2":["1"],"bB":["1"]},"b7":{"hD":["1"],"aa":["1"],"aa.T":"1"},"dY":{"b1":["1"],"bj":["1"],"b1.T":"1"},"jY":{"nm":["1"]},"b1":{"bj":["1"],"b1.T":"1"},"hD":{"aa":["1"]},"hq":{"bj":["1"]},"jF":{"aa":["1"],"aa.T":"1"},"dj":{"aa":["1"],"aa.T":"1"},"jP":{"cV":["1"],"jw":["1"],"e2":["1"],"dL":["1"],"bB":["1"]},"jI":{"aa":["2"]},"ht":{"b1":["2"],"bj":["2"],"b1.T":"2"},"eV":{"jI":["1","2"],"aa":["2"],"aa.T":"2"},"jG":{"bB":["1"]},"hB":{"b1":["2"],"bj":["2"],"b1.T":"2"},"jz":{"aa":["2"],"aa.T":"2"},"oq":{"P":[]},"nz":{"P":[]},"o2":{"P":[]},"hK":{"at":[]},"dh":{"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"dZ":{"dh":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"jC":{"dh":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"eT":{"J":["1"],"o":["1"],"o.E":"1"},"jN":{"bC":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"di":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"et":{"o":["1"],"o.E":"1"},"K":{"p":["1"],"J":["1"],"o":["1"]},"U":{"F":["1","2"]},"jO":{"J":["2"],"o":["2"],"o.E":"2"},"iH":{"F":["1","2"]},"cR":{"F":["1","2"]},"iD":{"V":["1"],"J":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cq":{"eG":["1"],"J":["1"],"o":["1"]},"jW":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"eQ":{"bB":["1"]},"nO":{"U":["k","@"],"F":["k","@"],"U.V":"@","U.K":"k"},"nP":{"V":["k"],"J":["k"],"o":["k"],"V.E":"k","o.E":"k"},"kA":{"eo":[]},"oh":{"aB":["k","p<i>"]},"kB":{"aB":["k","p<i>"],"aB.T":"p<i>"},"i5":{"aB":["p<i>","k"],"aB.T":"k"},"kG":{"aB":["k","p<i>"],"aB.T":"p<i>"},"iB":{"ad":[]},"lC":{"ad":[]},"lE":{"aB":["j?","k"],"aB.T":"k"},"lD":{"aB":["k","j?"],"aB.T":"j?"},"lH":{"eo":[]},"lI":{"aB":["k","p<i>"],"aB.T":"p<i>"},"n3":{"eo":[]},"n4":{"aB":["k","p<i>"],"aB.T":"p<i>"},"jm":{"aB":["p<i>","k"],"aB.T":"k"},"CC":{"au":["CC"]},"aM":{"au":["aM"]},"ab":{"aV":[],"au":["aV"]},"aC":{"au":["aC"]},"i":{"aV":[],"au":["aV"]},"p":{"J":["1"],"o":["1"]},"aV":{"au":["aV"]},"ml":{"ew":[]},"eG":{"J":["1"],"o":["1"]},"k":{"au":["k"]},"aI":{"au":["CC"]},"kC":{"ad":[]},"dd":{"ad":[]},"bz":{"ad":[]},"d8":{"ad":[]},"is":{"d8":[],"ad":[]},"cS":{"ad":[]},"mX":{"cS":[],"ad":[]},"bi":{"ad":[]},"kY":{"ad":[]},"m3":{"ad":[]},"je":{"ad":[]},"nH":{"H":[]},"bh":{"H":[]},"lw":{"cS":[],"H":[],"ad":[]},"oc":{"aF":[]},"j6":{"o":["i"],"o.E":"i"},"k7":{"n0":[]},"cc":{"n0":[]},"nC":{"n0":[]},"m_":{"H":[]},"rN":{"p":["i"],"J":["i"],"o":["i"]},"cQ":{"p":["i"],"J":["i"],"o":["i"]},"wu":{"p":["i"],"J":["i"],"o":["i"]},"rL":{"p":["i"],"J":["i"],"o":["i"]},"ws":{"p":["i"],"J":["i"],"o":["i"]},"rM":{"p":["i"],"J":["i"],"o":["i"]},"wt":{"p":["i"],"J":["i"],"o":["i"]},"r5":{"p":["ab"],"J":["ab"],"o":["ab"]},"r6":{"p":["ab"],"J":["ab"],"o":["ab"]},"a3":{"F":["2","3"]},"fY":{"hG":["1","eG<1>"],"hG.E":"1"},"lo":{"aB":["p<i>","ck"]},"o5":{"aB":["p<i>","ck"],"aB.T":"ck"},"j9":{"H":[]},"mw":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"mn":{"H":[]},"kH":{"B_":[]},"kP":{"B_":[]},"du":{"aa":["p<i>"],"aa.T":"p<i>"},"eg":{"H":[]},"mJ":{"ji":[]},"i7":{"a3":["k","k","1"],"F":["k","1"],"a3.V":"1","a3.K":"k","a3.C":"k"},"fH":{"aQ":[]},"kR":{"aQ":[]},"lq":{"aQ":[]},"fU":{"aQ":[]},"fV":{"aQ":[]},"fD":{"aQ":[]},"fP":{"aQ":[]},"fn":{"aQ":[]},"fo":{"aQ":[]},"fx":{"aQ":[]},"fd":{"aQ":[]},"fs":{"aQ":[]},"fX":{"aQ":[]},"h8":{"aQ":[]},"jp":{"aQ":[]},"fM":{"aQ":[]},"fk":{"aQ":[]},"kW":{"dy":[]},"jo":{"dy":[]},"iC":{"cJ":[]},"iX":{"cJ":[]},"i1":{"cJ":[]},"i2":{"cJ":[]},"jr":{"H":[]},"ig":{"qq":[]},"dI":{"H":[]},"eK":{"H":[]},"eJ":{"H":[]},"ez":{"H":[]},"fh":{"H":[]},"fK":{"H":[]},"fu":{"H":[]},"cM":{"H":[]},"fS":{"H":[]},"fW":{"H":[]},"eE":{"H":[]},"hc":{"H":[]},"fw":{"H":[]},"h1":{"H":[]},"fC":{"H":[]},"fl":{"H":[]},"el":{"H":[]},"fR":{"H":[]},"eZ":{"H":[]},"a9":{"d6":[]},"c4":{"d6":[]},"dt":{"d6":[]},"cY":{"d6":[]},"hi":{"H":[]},"ff":{"H":[]},"kN":{"H":[]},"nV":{"Dh":[]},"dB":{"H":[]},"d3":{"H":[]},"bu":{"H":[]},"h9":{"H":[]},"eF":{"H":[]},"jb":{"H":[]},"c_":{"H":[]},"cE":{"H":[]},"cI":{"H":[]},"fJ":{"H":[]},"fL":{"H":[]},"fp":{"H":[]},"ec":{"H":[]},"hn":{"ng":[]},"lL":{"eL":[]},"j2":{"H":[]},"js":{"hh":[]},"eM":{"hh":[]},"m7":{"H":[]},"lm":{"cr":[],"au":["cr"]},"hs":{"db":[],"au":["mD"]},"cr":{"au":["cr"]},"mC":{"cr":[],"au":["cr"]},"mD":{"au":["mD"]},"mE":{"au":["mD"]},"mF":{"H":[]},"h_":{"bh":[],"H":[]},"h0":{"au":["mD"]},"db":{"au":["mD"]},"c7":{"H":[]},"vM":{"p":["j?"],"J":["j?"],"o":["j?"]},"n6":{"K":["j?"],"vM":[],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"h2":{"ei":[]},"lt":{"b6":[]},"nL":{"jn":[],"bl":[]},"c6":{"U":["k","@"],"F":["k","@"],"U.V":"@","U.K":"k"},"mo":{"K":["c6"],"p":["c6"],"J":["c6"],"o":["c6"],"K.E":"c6"},"df":{"H":[]},"kM":{"b6":[]},"kL":{"jn":[],"bl":[]},"eN":{"b4":["eN"],"b4.E":"eN"},"dg":{"Bt":[]},"dV":{"Bs":[]},"hf":{"K":["dg"],"p":["dg"],"J":["dg"],"o":["dg"],"K.E":"dg"},"i4":{"aa":["1"],"aa.T":"1"},"dD":{"b6":[]},"b8":{"b4":["b8"]},"nM":{"jn":[],"bl":[]},"jJ":{"b8":[],"b4":["b8"],"b4.E":"b8"},"jD":{"b8":[],"b4":["b8"],"b4.E":"b8"},"ho":{"b8":[],"b4":["b8"],"b4.E":"b8"},"hJ":{"b8":[],"b4":["b8"],"b4.E":"b8"},"fZ":{"b6":[]},"o9":{"jn":[],"bl":[]},"i9":{"H":[]},"ek":{"K":["j?"],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"fT":{"H":[]},"ds":{"H":[]},"hk":{"CK":[]},"nD":{"ka":["M"]},"o7":{"ka":["M"]},"mL":{"bh":[],"H":[]},"cw":{"ha":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"ha":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"nN":{"ha":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"]},"hr":{"aa":["1"],"aa.T":"1"},"jH":{"bj":["1"]}}'))
A.Jn(v.typeUniverse,JSON.parse('{"io":1,"mZ":1,"hb":1,"kb":2,"id":1,"fG":1,"bB":1,"jh":1,"oe":1,"nF":1,"oi":2,"iH":2,"jW":1,"k6":2,"kT":1,"kV":2,"k_":1,"lZ":1,"n_":2,"mm":1,"fi":1,"GD":1,"Il":1,"It":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("GD<j?>"),bG:s("eb"),om:s("i4<B<j?>>"),hw:s("cB"),lo:s("ed"),fW:s("AZ"),fo:s("i7<k>"),iv:s("a0"),eg:s("CK"),dF:s("B_()"),E:s("cj"),bU:s("c0<j?>"),fw:s("ei"),bP:s("au<@>"),p6:s("ej"),br:s("ia<M>"),n8:s("bA"),M:s("dw<k>"),lp:s("l8"),O:s("J<@>"),C:s("ad"),fq:s("dy"),mA:s("H"),eZ:s("lk"),d9:s("aX"),A:s("bg"),k4:s("il"),pk:s("r5"),kI:s("r6"),Y:s("bh"),gY:s("Mz"),nW:s("z<M>"),fr:s("z<dK>"),mj:s("z<W>"),g7:s("z<@>"),fP:s("z<cZ?>"),n1:s("z<j?>(ng,hg)"),jN:s("z<he?>"),co:s("dA"),w:s("cF"),cF:s("dD"),m6:s("rL"),bW:s("rM"),jx:s("rN"),nZ:s("iw<@>"),e7:s("o<@>"),gi:s("B<a0>"),aw:s("B<c0<@>>"),i5:s("B<ck>"),mK:s("B<aX>"),iw:s("B<z<~>>"),mr:s("B<dC>"),kG:s("B<M>"),bi:s("B<p<F<k,j?>>>"),h2:s("B<p<j>>"),ae:s("B<p<eC>>"),dO:s("B<p<j?>>"),ic:s("B<F<k,j>>"),d:s("B<F<k,j?>>"),e8:s("B<lS>"),i7:s("B<ey>"),hf:s("B<j>"),ox:s("B<eA>"),fi:s("B<cm>"),my:s("B<cn>"),k:s("B<d6>"),eK:s("B<cJ>"),k1:s("B<fN>"),g2:s("B<j4>"),bo:s("B<j5>"),cM:s("B<eC>"),gc:s("B<mh>"),eb:s("B<aT>"),fU:s("B<+controller,sync(dL<cs>,Q)>"),lw:s("B<+controller,sync(dL<~>,Q)>"),kC:s("B<+(dP,k)>"),jO:s("B<+(k,F<k,j?>)>"),l5:s("B<+(k,j)>"),fj:s("B<+(k,aX?)>"),iE:s("B<+(k,j?)>"),aY:s("B<+(hl,j?,j?,aF?)>"),g1:s("B<cK>"),cP:s("B<mu>"),kj:s("B<cL>"),lE:s("B<h2>"),c0:s("B<c8>"),dw:s("B<bj<@>>"),s:s("B<k>"),en:s("B<h5>"),bs:s("B<cQ>"),fC:s("B<b_>"),az:s("B<hk>"),i4:s("B<hl>"),fV:s("B<hm>"),pg:s("B<bo>"),dg:s("B<cx>"),p8:s("B<nU>"),mc:s("B<hA>"),gy:s("B<hC>"),gk:s("B<ab>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<al?>"),eU:s("B<F<k,j?>?>"),c:s("B<j?>"),mf:s("B<k?>"),iy:s("b9<@>"),T:s("iy"),m:s("M"),bJ:s("bq"),g:s("bQ"),dX:s("bR<@>"),aq:s("aE"),fZ:s("lF"),kk:s("et<eN>"),p3:s("et<b8>"),hI:s("eu<@>"),ba:s("p<bA>"),ck:s("p<bg>"),ip:s("p<M>"),ew:s("p<F<k,j>>"),J:s("p<F<k,j?>>"),eT:s("p<ey>"),hg:s("p<eA>"),a6:s("p<cn>"),jX:s("p<j4>"),kR:s("p<cK>"),fE:s("p<cL>"),i:s("p<k>"),bR:s("p<h5>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<F<k,j?>?>"),kS:s("p<j?>"),jD:s("iE"),ia:s("R<k,dA>"),af:s("R<k,k>"),I:s("R<k,@>"),eB:s("R<k,j?>"),a3:s("iG<@,@>"),cy:s("F<k,cN>"),dV:s("F<k,i>"),f:s("F<@,@>"),G:s("F<k,j?>"),d2:s("F<j?,j?>"),iZ:s("X<k,@>"),r:s("dK"),a:s("fE"),dQ:s("dN"),aj:s("bS"),Z:s("ex"),P:s("W"),K:s("j"),k5:s("cm"),dZ:s("cn"),i0:s("co"),jS:s("d6"),ot:s("mf"),gq:s("fN"),e:s("b5"),b0:s("d8"),lZ:s("MF"),oZ:s("aT"),aK:s("+()"),ja:s("+(M,ib)"),hP:s("+(F<k,cN>,F<k,F<k,j?>>)"),cU:s("+(dP,k)"),mk:s("+(Q,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(Q,Q)"),mt:s("+(M?,M)"),po:s("+(j?,i)"),g0:s("+(F<k,j?>?,cN?,cn?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("ml"),Q:s("cK"),V:s("aQ"),hF:s("bU<k>"),cu:s("fY<@>"),aJ:s("eG<k>"),g_:s("fZ"),hq:s("cr"),ol:s("db"),gE:s("mG"),l:s("aF"),ls:s("Il<j?>"),nv:s("mH"),h3:s("h3"),ha:s("bj<cs>"),dz:s("bj<@>"),ey:s("bj<~>"),bv:s("mI"),ku:s("aa<p<i>>"),lI:s("dR"),hL:s("ji"),N:s("k"),f_:s("h5"),k6:s("jj"),n6:s("c9"),mv:s("bk"),nw:s("cN"),em:s("h6"),hU:s("dc"),q:s("mP"),dH:s("ah"),do:s("dd"),nL:s("It<j?>"),hM:s("ws"),mC:s("wt"),oR:s("cw"),nn:s("wu"),p:s("cQ"),cx:s("dU"),ph:s("cR<k,k>"),eo:s("cS"),oc:s("cT"),jJ:s("n0"),e6:s("b6"),j2:s("jn"),n:s("he"),fA:s("b_"),gx:s("aj<cA>"),mz:s("aj<aY>"),mE:s("aj<dT>"),x:s("bG<k>"),u:s("eL"),bp:s("eM"),be:s("ng"),ec:s("hh"),oS:s("nl"),iq:s("aH<cQ>"),jk:s("aH<@>"),ho:s("aH<i>"),h:s("aH<~>"),oW:s("eQ<@,@>"),R:s("eR<M>"),d4:s("hr<M>"),nI:s("t<cZ>"),a7:s("t<M>"),hl:s("t<0&>"),os:s("t<k>"),jz:s("t<cQ>"),g5:s("t<Q>"),_:s("t<@>"),hy:s("t<i>"),jQ:s("t<i?>"),D:s("t<~>"),nf:s("bo"),mp:s("dZ<j?,j?>"),mB:s("hw"),k8:s("dj<M>"),fb:s("dj<p<i>>"),mI:s("o8<ck>"),jy:s("e3<cs,~()>"),ag:s("e3<~,Q()>"),lU:s("e3<~,~()>"),hT:s("cd<M>"),lj:s("cd<p<i>>"),aP:s("am<cZ>"),h1:s("am<M>"),ex:s("am<Q>"),F:s("am<~>"),g8:s("of"),y:s("Q"),W:s("ab"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aF)"),S:s("i"),ma:s("bA?"),gK:s("z<W>?"),b3:s("cZ?"),B:s("M?"),bE:s("p<c0<@>>?"),lH:s("p<@>?"),b:s("F<k,j?>?"),nh:s("dK?"),X:s("j?"),ad:s("Dh?"),dY:s("cn?"),lY:s("j3?"),jB:s("cK?"),v:s("k?"),f8:s("cN?"),a_:s("cw?"),he:s("he?"),dd:s("bo?"),o9:s("Q?"),dA:s("ab?"),U:s("i?"),jh:s("aV?"),o:s("aV"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aF)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.c7=J.lx.prototype
B.b=J.B.prototype
B.c=J.ix.prototype
B.x=J.er.prototype
B.a=J.dE.prototype
B.c8=J.bQ.prototype
B.c9=J.aE.prototype
B.az=A.iS.prototype
B.cN=A.iU.prototype
B.y=A.iV.prototype
B.f=A.ex.prototype
B.b9=J.m9.prototype
B.aK=J.dU.prototype
B.ap=new A.ds("Operation was cancelled")
B.a5=new A.i0(0,"visible")
B.aN=new A.i0(1,"hidden")
B.bs=new A.kx(1)
B.dV=new A.kx(-1)
B.a6=new A.eb(0,"applied")
B.a7=new A.eb(1,"quarantined")
B.bt=new A.eb(2,"conflict")
B.a8=new A.eb(3,"skipped")
B.bu=new A.kB(127)
B.a9=new A.kE(0,"changed")
B.aO=new A.kE(1,"deleted")
B.bw=new A.i5(!1)
B.aq=new A.kF(B.bw)
B.bx=new A.i5(!0)
B.bv=new A.kF(B.bx)
B.bS=new A.jF(A.ac("jF<p<i>>"))
B.by=new A.du(B.bS)
B.bz=new A.iu(A.M_(),A.ac("iu<i>"))
B.ar=new A.kG()
B.bA=new A.kQ()
B.bB=new A.kU()
B.F={}
B.Y=new A.aW(B.F,[],A.ac("aW<k,j>"))
B.e1=new A.u1(0,"conflict")
B.dW=new A.pS()
B.aP=new A.qn()
B.bC=new A.lc(A.ac("lc<0&>"))
B.r=new A.lb()
B.aQ=new A.lf(A.ac("lf<0&>"))
B.aR=new A.lg()
B.O=new A.lg()
B.bD=new A.lp()
B.bE=new A.lw()
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

B.h=new A.rS()
B.bL=new A.tw()
B.bM=new A.iE()
B.t=new A.fH()
B.bN=new A.m3()
B.bO=new A.me()
B.d=new A.vF()
B.k=new A.n3()
B.e=new A.n4()
B.bP=new A.n5()
B.bQ=new A.n7()
B.bR=new A.xe()
B.u=new A.xX()
B.aa=new A.y7()
B.as=new A.yF()
B.aU=new A.eZ()
B.i=new A.o2()
B.l=new A.o5()
B.P=new A.oc()
B.ab=new A.dv(0,"create")
B.A=new A.dv(1,"update")
B.bT=new A.dv(2,"archive")
B.bU=new A.dv(3,"restore")
B.aV=new A.dv(4,"purge")
B.bV=new A.dv(5,"hide")
B.H=new A.i8(0,"local")
B.at=new A.i8(1,"remote")
B.ac=new A.i8(2,"resolution")
B.bW=new A.kZ(3,"ignore")
B.Q=new A.kZ(4,"replace")
B.o=new A.le(0,"normal")
B.aW=new A.le(1,"full")
B.D=new A.aC(0)
B.au=new A.aC(1e6)
B.aX=new A.aC(16e3)
B.dX=new A.aC(18e8)
B.bX=new A.aC(2e5)
B.aY=new A.aC(3e5)
B.ad=new A.aC(3e7)
B.av=new A.aC(3e8)
B.ae=new A.aC(5e5)
B.dY=new A.aC(5e6)
B.dZ=new A.aC(6048e8)
B.e_=new A.aC(7776e9)
B.e0=new A.aC(864e8)
B.aw=new A.c3(0,"text")
B.R=new A.c3(1,"int")
B.S=new A.c3(2,"real")
B.B=new A.c3(3,"bool")
B.T=new A.c3(4,"date")
B.I=new A.c3(5,"enumValue")
B.U=new A.c3(6,"json")
B.V=new A.c3(7,"jsonList")
B.J=new A.c3(8,"ref")
B.bY=new A.il(!1)
B.ax=new A.dz("x",1,"opfsExternalLocks")
B.aZ=new A.dz("y",2,"opfsExternalLocksWorkaround")
B.b_=new A.ft("/database",0,"database")
B.b0=new A.ft("/database-journal",1,"journal")
B.c3=new A.bh("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.c4=new A.bh("fieldCipher envelope must be a map.",null,null)
B.ay=new A.aW(B.F,[],A.ac("aW<k,k>"))
B.c5=new A.ep(B.ay)
B.b1=new A.it(0,"live")
B.ca=new A.lD(null)
B.cb=new A.lE(null)
B.cc=new A.d0(0,"textExpected")
B.cd=new A.d0(1,"intExpected")
B.ce=new A.d0(2,"numberExpected")
B.cf=new A.d0(3,"boolExpected")
B.cg=new A.d0(4,"jsonExpected")
B.ch=new A.d0(5,"jsonListExpected")
B.ci=new A.d0(6,"enumValueRejected")
B.cj=new A.lI(255)
B.af=new A.eu(B.bC,A.ac("eu<k>"))
B.ck=s(["attempt_count","next_retry_at","last_error"],t.s)
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
B.cl=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.cm=s([B.a5,B.aN],A.ac("B<i0>"))
B.bc=new A.aY(0,"eq")
B.cV=new A.aY(1,"neq")
B.cZ=new A.aY(2,"gt")
B.d_=new A.aY(3,"gte")
B.d0=new A.aY(4,"lt")
B.d1=new A.aY(5,"lte")
B.d2=new A.aY(6,"inValues")
B.d3=new A.aY(7,"between")
B.d4=new A.aY(8,"startsWith")
B.d5=new A.aY(9,"endsWith")
B.cW=new A.aY(10,"contains")
B.cX=new A.aY(11,"isNull")
B.cY=new A.aY(12,"isNotNull")
B.cn=s([B.bc,B.cV,B.cZ,B.d_,B.d0,B.d1,B.d2,B.d3,B.d4,B.d5,B.cW,B.cX,B.cY],A.ac("B<aY>"))
B.c1=new A.im(0,"database")
B.c2=new A.im(1,"journal")
B.b4=s([B.c1,B.c2],A.ac("B<im>"))
B.z=new A.cO(0,"clean")
B.G=new A.cO(1,"dirty")
B.bk=new A.cO(2,"inFlight")
B.a4=new A.cO(3,"conflict")
B.ao=new A.cO(4,"error")
B.dm=new A.cO(5,"quarantine")
B.dn=new A.cO(6,"blocked")
B.co=s([B.z,B.G,B.bk,B.a4,B.ao,B.dm,B.dn],A.ac("B<cO>"))
B.W=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cp=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.c6=new A.it(1,"notArchived")
B.cq=s([B.b1,B.c6],A.ac("B<it>"))
B.cr=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b7=new A.iZ(0,"fileUpload")
B.b8=new A.iZ(1,"fileRemove")
B.cs=s([B.b7,B.b8],A.ac("B<iZ>"))
B.c0=new A.dz("s",0,"opfsShared")
B.bZ=new A.dz("i",3,"indexedDb")
B.c_=new A.dz("m",4,"inMemory")
B.ct=s([B.c0,B.ax,B.aZ,B.bZ,B.c_],A.ac("B<dz>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bo=new A.cA(0,"sum")
B.bp=new A.cA(1,"avg")
B.bq=new A.cA(2,"min")
B.br=new A.cA(3,"max")
B.cu=s([B.bo,B.bp,B.bq,B.br],A.ac("B<cA>"))
B.cv=s([B.aw,B.R,B.S,B.B,B.T,B.I,B.U,B.V,B.J],A.ac("B<c3>"))
B.j=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.X=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cw=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fI(0,"upsert")
B.L=new A.fI(1,"archive")
B.a0=new A.fI(2,"restore")
B.cx=s([B.v,B.L,B.a0],A.ac("B<fI>"))
B.cz=s([],A.ac("B<dA>"))
B.b5=s([],t.d)
B.cB=s([],t.my)
B.cy=s([],t.kj)
B.p=s([],t.s)
B.cA=s([],t.t)
B.aj=s([],t.dG)
B.m=s([],t.c)
B.cC=s(["*"],t.s)
B.cD=s([B.b_,B.b0],A.ac("B<ft>"))
B.cE=s(["id","updated"],t.s)
B.cF=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bf=new A.dP(0,"opfs")
B.bg=new A.dP(1,"indexedDb")
B.df=new A.dP(2,"inMemory")
B.cG=s([B.bf,B.bg,B.df],A.ac("B<dP>"))
B.bl=new A.dT(0,"normal")
B.bm=new A.dT(1,"full")
B.cH=s([B.bl,B.bm],A.ac("B<dT>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cI=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cJ=new A.iq([16,10,24,12,32,14],A.ac("iq<i,i>"))
B.cR={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.lH()
B.q=new A.kA()
B.cK=new A.aW(B.cR,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.k,B.k],A.ac("aW<k,eo>"))
B.al=new A.aW(B.F,[],A.ac("aW<k,i>"))
B.n=new A.aW(B.F,[],A.ac("aW<k,j?>"))
B.am=new A.aW(B.F,[],A.ac("aW<i,F<k,j?>(F<k,j?>)>"))
B.cM=new A.lO(11,"simpleSuccessResponse",A.ac("lO<M>"))
B.Z=new A.dM(0,"createOrUpdate")
B.a_=new A.dM(1,"createOrUpdateMerge")
B.b6=new A.dM(2,"create")
B.K=new A.dM(3,"update")
B.C=new A.dM(4,"archive")
B.E=new A.dM(5,"restore")
B.e2=new A.ug(2,"readWriteCreate")
B.cS=new A.cm("id",!1)
B.cT=new A.co(B.b5,null,null,!1,!1)
B.ba=new A.ma(0,"native")
B.aA=new A.ma(1,"web")
B.M=new A.b5(0,1,0,0,0,!1)
B.an=new A.b5(0,0,0,0,0,!0)
B.a1=new A.b5(0,0,0,0,0,!1)
B.cU=new A.b5(0,0,0,1,0,!1)
B.bb=new A.b5(0,0,1,0,0,!1)
B.a2=new A.b5(1,0,0,0,0,!1)
B.d6=new A.a4("archived",!0)
B.d7=new A.a4("0",B.m)
B.aB=new A.jU(!1,!1)
B.d8=new A.eX(0,0,0)
B.d9=new A.eX(null,null,null)
B.cP={open:0,close:1,worker_event:2,capabilities:3,watch_cancel:4,sync_start:5,sync_stop:6,sync_now:7,sync_status:8,auth_required:9,sync_pause:10,sync_resume:11,sync_update_auth:12,sync_set_connectivity:13,file_upload_begin:14,file_upload_chunk:15,file_upload_finish:16,file_upload_abort:17,file_list:18,file_open:19,file_remove:20,file_gc:21,file_enforce_storage_cap:22,file_storage_status:23,conflicts_list:24,conflicts_get:25,conflicts_resolve:26,conflicts_accept_local:27,conflicts_accept_remote:28,conflicts_watch:29,contract_request:30,contract_event:31}
B.da=new A.dw(B.cP,32,t.M)
B.cQ={hidden:0}
B.db=new A.dw(B.cQ,1,t.M)
B.cO={id:0,archived:1,hidden:2,extra:3}
B.bd=new A.dw(B.cO,4,t.M)
B.be=new A.dw(B.F,0,t.M)
B.dc=new A.jd(0,"insert")
B.dd=new A.jd(1,"update")
B.de=new A.jd(2,"delete")
B.dg=new A.jj(-1,null)
B.dh=new A.jk("_clientToken")
B.a3=new A.c9(0,"closed")
B.di=new A.c9(1,"opening")
B.bh=new A.c9(2,"offline")
B.aC=new A.c9(3,"authRequired")
B.bi=new A.c9(4,"idle")
B.dj=new A.c9(5,"pulling")
B.dk=new A.c9(6,"pushing")
B.dl=new A.c9(7,"backoff")
B.bj=new A.c9(8,"paused")
B.N=new A.bk(B.al,B.al,0,0,0,0,!1)
B.dp=A.bL("kv")
B.dq=A.bL("ed")
B.dr=A.bL("AZ")
B.ds=A.bL("r5")
B.dt=A.bL("r6")
B.du=A.bL("rL")
B.dv=A.bL("rM")
B.dw=A.bL("rN")
B.dx=A.bL("M")
B.dy=A.bL("j")
B.dz=A.bL("ja")
B.dA=A.bL("ws")
B.dB=A.bL("wt")
B.dC=A.bL("wu")
B.dD=A.bL("cQ")
B.aL=new A.jm(!1)
B.dE=new A.jm(!0)
B.dF=new A.df(14)
B.dG=new A.df(522)
B.dH=new A.df(778)
B.dI=new A.zu(B.i,A.L0())
B.dJ=new A.zv(B.i,A.L1())
B.dK=new A.zw(B.i,A.L2())
B.dL=new A.zx(B.i,A.L3())
B.dM=new A.or(B.i,A.L4())
B.dN=new A.zy(B.i,A.L5())
B.dO=new A.zz(B.i,A.L6())
B.dP=new A.zA(B.i,A.L7())
B.dQ=new A.zB(B.i,A.L8())
B.dR=new A.zD(B.i,A.La())
B.dS=new A.zE(B.i,A.Lb())
B.dT=new A.zC(B.i,A.L9())
B.dU=new A.os(B.i,A.Lc())
B.cL=new A.aW(B.F,[],A.ac("aW<j?,j?>"))
B.aM=new A.ot(B.i,B.cL)})();(function staticFields(){$.yH=null
$.f2=A.l([],t.hf)
$.Kx=null
$.Dk=null
$.uQ=0
$.mc=A.Km()
$.CI=null
$.CH=null
$.Fo=null
$.F4=null
$.Fy=null
$.Ai=null
$.Aw=null
$.Cd=null
$.yT=A.l([],A.ac("B<p<j>?>"))
$.hO=null
$.kd=null
$.ke=null
$.C2=!1
$.C=B.i
$.yX=null
$.DQ=null
$.DR=null
$.DS=null
$.DT=null
$.BI=A.xA("_lastQuoRemDigits")
$.BJ=A.xA("_lastQuoRemUsed")
$.jy=A.xA("_lastRemUsed")
$.BK=A.xA("_lastRem_nsh")
$.DF=""
$.DG=null
$.fO=function(){var s=t.N
return A.u(s,s)}()
$.Ey=null
$.zO=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Mv","FP",()=>A.Ao("_$dart_dartClosure"))
s($,"Mu","fa",()=>A.Ao("_$dart_dartClosure_dartJSInterop"))
s($,"N8","oL",()=>A.u9(0))
s($,"Nw","Go",()=>B.i.aX(new A.Az(),A.ac("z<~>")))
s($,"Nq","Gl",()=>A.l([new J.ly()],A.ac("B<j7>")))
s($,"MN","FT",()=>A.de(A.wq({
toString:function(){return"$receiver$"}})))
s($,"MO","FU",()=>A.de(A.wq({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"MP","FV",()=>A.de(A.wq(null)))
s($,"MQ","FW",()=>A.de(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"MT","FZ",()=>A.de(A.wq(void 0)))
s($,"MU","G_",()=>A.de(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"MS","FY",()=>A.de(A.DC(null)))
s($,"MR","FX",()=>A.de(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"MW","G1",()=>A.de(A.DC(void 0)))
s($,"MV","G0",()=>A.de(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"MZ","Co",()=>A.IE())
s($,"MB","e9",()=>$.Go())
s($,"MA","FQ",()=>A.IX(!1,B.i,t.y))
s($,"Ne","Gb",()=>A.u9(4096))
s($,"Nc","G9",()=>new A.zq().$0())
s($,"Nd","Ga",()=>new A.zp().$0())
s($,"N0","Cp",()=>A.HN(A.b2(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"N_","G2",()=>A.u9(0))
s($,"N7","ch",()=>A.jx(0))
s($,"N5","fb",()=>A.jx(1))
s($,"N6","G5",()=>A.jx(2))
s($,"N3","Cr",()=>$.fb().bB(0))
s($,"N1","Cq",()=>A.jx(1e4))
r($,"N4","G4",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"N2","G3",()=>A.u9(8))
s($,"N9","G6",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Na","G7",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Nb","G8",()=>typeof URLSearchParams=="function")
s($,"Nh","fc",()=>A.kl(B.dy))
s($,"MG","kq",()=>{A.HX()
return $.uQ})
s($,"Ni","Ge",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"ME","AS",()=>{var q=new A.yG(A.HM(8))
q.oQ()
return q})
s($,"Mw","kp",()=>A.GI(B.cN.ga8(A.HO(A.b2(A.l([1],t.t)))),0,null).getInt8(0)===1?B.O:B.aR)
s($,"Mn","Cj",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Nk","AT",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"MC","FR",()=>A.Dp())
s($,"Nf","Cs",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"Ng","Gc",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Ny","Gp",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Nj","Gf",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Nn","Gi",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Nm","Gh",()=>A.af("\\\\(.)",!0,!1))
s($,"Nv","Gn",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Nz","Gq",()=>A.af("(?:"+$.Gf().a+")*",!0,!1))
s($,"Np","Gk",()=>A.Dq())
s($,"Nx","oM",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"K5","Gd",()=>A.H0().a)
s($,"Mx","Cl",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"Ms","FN",()=>A.B4("declaredNames",t.aJ))
s($,"Mt","FO",()=>A.B4("fieldByName",A.ac("F<k,aX>")))
s($,"MM","ks",()=>new A.j())
s($,"Mr","Ck",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"Nl","Gg",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Ns","i_",()=>new A.q0($.Cm()))
s($,"MJ","FS",()=>new A.uK(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"ML","oK",()=>new A.wV(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"MK","kr",()=>new A.wB(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"MI","Cm",()=>A.Io())
s($,"Mq","FM",()=>$.fb().bC(0,63).bB(0))
s($,"Mp","FL",()=>{var q=$.fb()
return q.bC(0,63).fR(0,q)})
s($,"Mo","oJ",()=>A.Dq())
s($,"MX","Cn",()=>A.B4(null,t.S))
s($,"Nr","Gm",()=>A.HA(A.l([A.BB("files"),A.BB("blocks")],t.s)))
s($,"My","AR",()=>{var q,p,o=A.u(t.N,A.ac("ft"))
for(q=0;q<2;++q){p=B.cD[q]
o.j(0,p.c,p)}return o})
s($,"No","Gj",()=>A.Dp())
r($,"MY","kt",()=>{var q="navigator"
return A.Hr(A.Hs(A.Cb(A.FD(),q),A.BB("locks")))?A.Cb(A.Cb(A.FD(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fF,ArrayBuffer:A.fE,ArrayBufferView:A.iT,DataView:A.iS,Float32Array:A.lU,Float64Array:A.lV,Int16Array:A.lW,Int32Array:A.lX,Int8Array:A.lY,Uint16Array:A.iU,Uint32Array:A.iV,Uint8ClampedArray:A.iW,CanvasPixelArray:A.iW,Uint8Array:A.ex})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fG.$nativeSuperclassTag="ArrayBufferView"
A.jQ.$nativeSuperclassTag="ArrayBufferView"
A.jR.$nativeSuperclassTag="ArrayBufferView"
A.dN.$nativeSuperclassTag="ArrayBufferView"
A.jS.$nativeSuperclassTag="ArrayBufferView"
A.jT.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.LY
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
