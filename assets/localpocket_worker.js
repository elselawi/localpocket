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
if(a[b]!==s){A.Mq(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Cg(b)
return new s(c,this)}:function(){if(s===null)s=A.Cg(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Cg(a).prototype
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
Cq(a,b,c,d){return{i:a,p:b,e:c,x:d}},
Az(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Co==null){A.LX()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.DP("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.yS
if(o==null)o=$.yS=A.Ay(n)
p=q[o]}if(p!=null)return p
p=A.M5(a)
if(p!=null)return p
if(typeof a=="function")return B.c8
s=Object.getPrototypeOf(a)
if(s==null)return B.b9
if(s===Object.prototype)return B.b9
if(typeof q=="function"){o=$.yS
if(o==null)o=$.yS=A.Ay(n)
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
Bn(a,b){if(a<0||a>4294967295)throw A.b(A.as(a,0,4294967295,"length",null))
return J.Dh(new Array(a),b)},
Dg(a,b){if(a<0)throw A.b(A.N("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
Df(a,b){if(a<0)throw A.b(A.N("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
Dh(a,b){var s=A.k(a,b.i("B<0>"))
s.$flags=1
return s},
Hz(a,b){return J.CG(a,b)},
Di(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
HC(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Di(r))break;++b}return b},
Dj(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Di(r))break}return b},
dq(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iA.prototype
return J.lI.prototype}if(typeof a=="string")return J.dE.prototype
if(a==null)return J.iB.prototype
if(typeof a=="boolean")return J.lH.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.Az(a)},
L(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.Az(a)},
az(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.Az(a)},
LP(a){if(typeof a=="number")return J.er.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
LQ(a){if(typeof a=="number")return J.er.prototype
if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
Ax(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
km(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fz.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.Az(a)},
w(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dq(a).R(a,b)},
S(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.FA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
c_(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.FA(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.az(a).j(a,b,c)},
aL(a,b){return J.az(a).u(a,b)},
B3(a,b){return J.az(a).C(a,b)},
B4(a,b){return J.Ax(a).hF(a,b)},
oU(a){return J.km(a).mp(a)},
CE(a,b,c){return J.km(a).hG(a,b,c)},
CF(a,b,c){return J.km(a).mq(a,b,c)},
GB(a){return J.km(a).mr(a)},
bN(a,b,c){return J.km(a).hH(a,b,c)},
oV(a,b){return J.az(a).hK(a,b)},
GC(a,b,c){return J.LP(a).bN(a,b,c)},
CG(a,b){return J.LQ(a).Z(a,b)},
B5(a,b){return J.L(a).F(a,b)},
oW(a,b){return J.az(a).a7(a,b)},
kw(a,b){return J.az(a).cE(a,b)},
GD(a){return J.km(a).ga9(a)},
ci(a){return J.az(a).gG(a)},
a7(a){return J.dq(a).gJ(a)},
bA(a){return J.L(a).gE(a)},
ea(a){return J.L(a).gV(a)},
D(a){return J.az(a).gt(a)},
oX(a){return J.az(a).ga_(a)},
ak(a){return J.L(a).gm(a)},
bO(a){return J.dq(a).gak(a)},
B6(a){return J.az(a).gap(a)},
GE(a,b,c){return J.az(a).fL(a,b,c)},
GF(a,b,c){return J.az(a).aC(a,b,c)},
be(a,b,c){return J.az(a).ce(a,b,c)},
GG(a,b,c){return J.Ax(a).ej(a,b,c)},
GH(a,b){return J.L(a).sm(a,b)},
GI(a,b,c,d,e){return J.az(a).ai(a,b,c,d,e)},
oY(a,b){return J.az(a).bk(a,b)},
CH(a,b){return J.az(a).ck(a,b)},
GJ(a,b){return J.Ax(a).cQ(a,b)},
GK(a,b){return J.Ax(a).S(a,b)},
GL(a,b,c){return J.az(a).T(a,b,c)},
B7(a,b){return J.az(a).cL(a,b)},
GM(a){return J.az(a).eu(a)},
a0(a){return J.dq(a).l(a)},
CI(a,b){return J.az(a).dt(a,b)},
CJ(a,b){return J.az(a).kC(a,b)},
lF:function lF(){},
lH:function lH(){},
iB:function iB(){},
aE:function aE(){},
dG:function dG(){},
mh:function mh(){},
dU:function dU(){},
bR:function bR(){},
br:function br(){},
fz:function fz(){},
B:function B(a){this.$ti=a},
lG:function lG(){},
rX:function rX(a){this.$ti=a},
fd:function fd(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
er:function er(){},
iA:function iA(){},
lI:function lI(){},
dE:function dE(){}},A={Bq:function Bq(){},
ff(a,b,c){if(t.O.b(a))return new A.jG(a,b.i("@<0>").U(c).i("jG<1,2>"))
return new A.ee(a,b.i("@<0>").U(c).i("ee<1,2>"))},
Dl(a){return new A.dF("Field '"+a+"' has been assigned during initialization.")},
Dm(a){return new A.dF("Field '"+a+"' has not been initialized.")},
HG(a){return new A.dF("Field '"+a+"' has already been initialized.")},
fR(a){return new A.ms(a)},
AC(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
av(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h8(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bZ(a,b,c){return a},
Cp(a){var s,r
for(s=$.f2.length,r=0;r<s;++r)if(a===$.f2[r])return!0
return!1},
cu(a,b,c,d){A.b9(b,"start")
if(c!=null){A.b9(c,"end")
if(b>c)A.v(A.as(b,0,c,"start",null))}return new A.ct(a,b,c,d.i("ct<0>"))},
dJ(a,b,c,d){if(t.O.b(a))return new A.em(a,b,c.i("@<0>").U(d).i("em<1,2>"))
return new A.cl(a,b,c.i("@<0>").U(d).i("cl<1,2>"))},
DJ(a,b,c){var s="takeCount"
A.kD(b,s)
A.b9(b,s)
if(t.O.b(a))return new A.ik(a,b,c.i("ik<0>"))
return new A.eI(a,b,c.i("eI<0>"))},
DH(a,b,c){var s="count"
if(t.O.b(a)){A.kD(b,s)
A.b9(b,s)
return new A.fr(a,b,c.i("fr<0>"))}A.kD(b,s)
A.b9(b,s)
return new A.db(a,b,c.i("db<0>"))},
aD(){return new A.bk("No element")},
iy(){return new A.bk("Too many elements")},
Dd(){return new A.bk("Too few elements")},
mJ(a,b,c,d){if(c-b<=32)A.Io(a,b,c,d)
else A.In(a,b,c,d)},
Io(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.L(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
In(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.L(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.mJ(a3,a4,r-2,a6)
A.mJ(a3,q+2,a5,a6)
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
break}}A.mJ(a3,r,q,a6)}else A.mJ(a3,r,q,a6)},
y8:function y8(a){this.a=0
this.b=a},
xJ:function xJ(a){this.a=0
this.b=a},
dX:function dX(){},
kW:function kW(a,b){this.a=a
this.$ti=b},
ee:function ee(a,b){this.a=a
this.$ti=b},
jG:function jG(a,b){this.a=a
this.$ti=b},
jD:function jD(){},
xK:function xK(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){this.a=a
this.$ti=b},
po:function po(a,b){this.a=a
this.b=b},
pn:function pn(a){this.a=a},
dF:function dF(a){this.a=a},
ms:function ms(a){this.a=a},
cj:function cj(a){this.a=a},
AJ:function AJ(){},
vS:function vS(){},
J:function J(){},
W:function W(){},
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
lU:function lU(a,b,c){var _=this
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
io:function io(a,b,c){this.a=a
this.b=b
this.$ti=c},
lp:function lp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eI:function eI(a,b,c){this.a=a
this.b=b
this.$ti=c},
ik:function ik(a,b,c){this.a=a
this.b=b
this.$ti=c},
mW:function mW(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b,c){this.a=a
this.b=b
this.$ti=c},
mI:function mI(a,b,c){this.a=a
this.b=b
this.$ti=c},
en:function en(a){this.$ti=a},
ln:function ln(a){this.$ti=a},
bH:function bH(a,b){this.a=a
this.$ti=b},
nl:function nl(a,b){this.a=a
this.$ti=b},
ir:function ir(){},
n7:function n7(){},
hc:function hc(){},
bV:function bV(a,b){this.a=a
this.$ti=b},
jn:function jn(a){this.a=a},
kd:function kd(){},
H4(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bF(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.q)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aU(q,A.bF(new A.ao(a,m.i("ao<2>")),!0,c),b.i("@<0>").U(c).i("aU<1,2>"))
n.$keys=l
return n}return new A.ig(A.b8(a,b,c),b.i("@<0>").U(c).i("ig<1,2>"))},
H5(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
H6(){throw A.b(A.Y("Cannot modify constant Set"))},
FU(a){var s=A.FT(a)
if(s!=null)return s
return"minified:"+a},
FA(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
return s},
eB(a){var s,r=$.Dw
if(r==null)r=$.Dw=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
j4(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
I6(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.ci(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mj(a){var s,r,q,p
if(a instanceof A.j)return A.bx(A.bz(a),null)
s=J.dq(a)
if(s===B.c7||s===B.c9||t.cx.b(a)){r=B.aS(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bx(A.bz(a),null)},
Dy(a){var s,r,q
if(a==null||typeof a=="number"||A.bJ(a))return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eh)return a.l(0)
if(a instanceof A.hA)return a.me(!0)
s=$.Gv()
for(r=0;r<1;++r){q=s[r].xk(a)
if(q!=null)return q}return"Instance of '"+A.mj(a)+"'"},
I2(){return Date.now()},
I5(){var s,r
if($.v2!==0)return
$.v2=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.v2=1e6
$.mk=new A.v1(r)},
I1(){if(!!self.location)return self.location.href
return null},
Dv(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
I7(a){var s,r,q,p=A.k([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
if(!A.ax(q))throw A.b(A.f4(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ae(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.f4(q))}return A.Dv(p)},
Dz(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ax(q))throw A.b(A.f4(q))
if(q<0)throw A.b(A.f4(q))
if(q>65535)return A.I7(a)}return A.Dv(a)},
I8(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bt(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ae(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.as(a,0,1114111,null,null))},
I9(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.aj(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bs(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
BB(a){return a.c?A.bs(a).getUTCFullYear()+0:A.bs(a).getFullYear()+0},
Bz(a){return a.c?A.bs(a).getUTCMonth()+1:A.bs(a).getMonth()+1},
v0(a){return a.c?A.bs(a).getUTCDate()+0:A.bs(a).getDate()+0},
Bx(a){return a.c?A.bs(a).getUTCHours()+0:A.bs(a).getHours()+0},
By(a){return a.c?A.bs(a).getUTCMinutes()+0:A.bs(a).getMinutes()+0},
BA(a){return a.c?A.bs(a).getUTCSeconds()+0:A.bs(a).getSeconds()+0},
Dx(a){return a.c?A.bs(a).getUTCMilliseconds()+0:A.bs(a).getMilliseconds()+0},
I4(a){return B.c.aj((a.c?A.bs(a).getUTCDay()+0:A.bs(a).getDay()+0)+6,7)+1},
I3(a){var s=a.$thrownJsError
if(s==null)return null
return A.ag(s)},
ml(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
Ar(a,b){var s,r="index"
if(!A.ax(b))return new A.bB(!0,b,r,null)
s=J.ak(a)
if(b<0||b>=s)return A.lC(b,s,a,null,r)
return A.vF(b,r)},
LH(a,b,c){if(a<0||a>c)return A.as(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.as(b,a,c,"end",null)
return new A.bB(!0,b,"end",null)},
f4(a){return new A.bB(!0,a,null,null)},
b(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.de()
b.dartException=a
s=A.Mr
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Mr(){return J.a0(this.dartException)},
v(a,b){throw A.aK(a,b==null?new Error():b)},
I(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.v(A.K6(a,b,c),s)},
K6(a,b,c){var s,r,q,p,o,n,m,l,k
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
df(a){var s,r,q,p,o,n
a=A.FJ(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.wC(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
wD(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
DO(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Br(a,b){var s=b==null,r=s?null:b.method
return new A.lJ(a,r,s?null:b.receiver)},
E(a){if(a==null)return new A.m8(a)
if(a instanceof A.im)return A.e8(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e8(a,a.dartException)
return A.L0(a)},
e8(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
L0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ae(r,16)&8191)===10)switch(q){case 438:return A.e8(a,A.Br(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.e8(a,new A.j0())}}if(a instanceof TypeError){p=$.G2()
o=$.G3()
n=$.G4()
m=$.G5()
l=$.G8()
k=$.G9()
j=$.G7()
$.G6()
i=$.Gb()
h=$.Ga()
g=p.bQ(s)
if(g!=null)return A.e8(a,A.Br(s,g))
else{g=o.bQ(s)
if(g!=null){g.method="call"
return A.e8(a,A.Br(s,g))}else if(n.bQ(s)!=null||m.bQ(s)!=null||l.bQ(s)!=null||k.bQ(s)!=null||j.bQ(s)!=null||m.bQ(s)!=null||i.bQ(s)!=null||h.bQ(s)!=null)return A.e8(a,new A.j0())}return A.e8(a,new A.n6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jh()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e8(a,new A.bB(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jh()
return a},
ag(a){var s
if(a instanceof A.im)return a.b
if(a==null)return new A.jZ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jZ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kn(a){if(a==null)return J.a7(a)
if(typeof a=="object")return A.eB(a)
return J.a7(a)},
Lt(a){if(typeof a=="number")return B.x.gJ(a)
if(a instanceof A.on)return A.eB(a)
if(a instanceof A.hA)return a.gJ(a)
if(a instanceof A.jn)return a.gJ(0)
return A.kn(a)},
Fw(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
LN(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
Kj(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.D3("Unsupported number of arguments for wrapped closure"))},
e7(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.LA(a,b)
a.$identity=s
return s},
LA(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Kj)},
GZ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.w2().constructor.prototype):Object.create(new A.i9(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.CX(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.GV(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.CX(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
GV(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.GQ)}throw A.b("Error in functionType of tearoff")},
GW(a,b,c,d){var s=A.CU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
CX(a,b,c,d){if(c)return A.GY(a,b,d)
return A.GW(b.length,d,a,b)},
GX(a,b,c,d){var s=A.CU,r=A.GR
switch(b?-1:a){case 0:throw A.b(new A.mB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
GY(a,b,c){var s,r
if($.CS==null)$.CS=A.CR("interceptor")
if($.CT==null)$.CT=A.CR("receiver")
s=b.length
r=A.GX(s,c,a,b)
return r},
Cg(a){return A.GZ(a)},
GQ(a,b){return A.k7(v.typeUniverse,A.bz(a.a),b)},
CU(a){return a.a},
GR(a){return a.b},
CR(a){var s,r,q,p=new A.i9("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.N("Field name "+a+" not found.",null))},
Ay(a){return v.getIsolateTag(a)},
Mv(a,b){var s=$.C
if(s===B.i)return a
return s.hJ(a,b)},
FN(){return v.G},
NC(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
M5(a){var s,r,q,p,o,n=$.Fy.$1(a),m=$.As[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.AG[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Fg.$2(a,n)
if(q!=null){m=$.As[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.AG[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.AI(s)
$.As[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.AG[n]=s
return s}if(p==="-"){o=A.AI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.FG(a,s)
if(p==="*")throw A.b(A.DP(n))
if(v.leafTags[n]===true){o=A.AI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.FG(a,s)},
FG(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Cq(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
AI(a){return J.Cq(a,!1,null,!!a.$ibS)},
M7(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.AI(s)
else return J.Cq(s,c,null,null)},
LX(){if(!0===$.Co)return
$.Co=!0
A.LY()},
LY(){var s,r,q,p,o,n,m,l
$.As=Object.create(null)
$.AG=Object.create(null)
A.LW()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.FI.$1(o)
if(n!=null){m=A.M7(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
LW(){var s,r,q,p,o,n,m=B.bF()
m=A.hT(B.bG,A.hT(B.bH,A.hT(B.aT,A.hT(B.aT,A.hT(B.bI,A.hT(B.bJ,A.hT(B.bK(B.aS),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Fy=new A.AD(p)
$.Fg=new A.AE(o)
$.FI=new A.AF(n)},
hT(a,b){return a(b)||b},
Jo(a,b){var s
for(s=0;s<a.length;++s)if(!J.w(a[s],b[s]))return!1
return!0},
LE(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Bp(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
Mk(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.es){s=B.a.ad(a,c)
return b.b.test(s)}else return!J.B4(b,B.a.ad(a,c)).gE(0)},
Fu(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
FJ(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
y(a,b,c){var s
if(typeof b=="string")return A.Mm(a,b,c)
if(b instanceof A.es){s=b.glK()
s.lastIndex=0
return a.replace(s,A.Fu(c))}return A.Ml(a,b,c)},
Ml(a,b,c){var s,r,q,p
for(s=J.B4(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gP())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Mm(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.FJ(b),"g"),A.Fu(c))},
F9(a){return a},
FO(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hF(0,a),s=new A.nv(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.F9(B.a.A(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.F9(B.a.ad(a,q)))
return s.charCodeAt(0)==0?s:s},
Mn(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.FP(a,s,s+b.length,c)},
FP(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a4:function a4(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
o5:function o5(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a){this.a=a},
o6:function o6(a){this.a=a},
ig:function ig(a,b){this.a=a
this.$ti=b},
fn:function fn(){},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
eU:function eU(a,b){this.a=a
this.$ti=b},
hw:function hw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
it:function it(a,b){this.a=a
this.$ti=b},
ih:function ih(){},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
rR:function rR(){},
ix:function ix(a,b){this.a=a
this.$ti=b},
v1:function v1(a){this.a=a},
ja:function ja(){},
wC:function wC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j0:function j0(){},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(a){this.a=a},
m8:function m8(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a
this.b=null},
eh:function eh(){},
pt:function pt(){},
pu:function pu(){},
ws:function ws(){},
w2:function w2(){},
i9:function i9(a,b){this.a=a
this.b=b},
mB:function mB(a){this.a=a},
bD:function bD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
rY:function rY(a){this.a=a},
tG:function tG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
T:function T(a,b){this.a=a
this.$ti=b},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ao:function ao(a,b){this.a=a
this.$ti=b},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
lR:function lR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iD:function iD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iC:function iC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
AD:function AD(a){this.a=a},
AE:function AE(a){this.a=a},
AF:function AF(a){this.a=a},
hA:function hA(){},
o2:function o2(){},
o3:function o3(){},
o4:function o4(){},
es:function es(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hz:function hz(a){this.b=a},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function nv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h5:function h5(a,b){this.a=a
this.c=b},
oi:function oi(a,b,c){this.a=a
this.b=b
this.c=c},
zo:function zo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Mq(a){throw A.aK(A.Dl(a),new Error())},
A(){throw A.aK(A.Dm(""),new Error())},
cy(){throw A.aK(A.HG(""),new Error())},
AY(){throw A.aK(A.Dl(""),new Error())},
BY(){var s=new A.nD("")
return s.b=s},
xL(a){var s=new A.nD(a)
return s.b=s},
nD:function nD(a){this.a=a
this.b=null},
hO(a,b,c){},
b0(a){var s,r,q
if(t.iy.b(a))return a
s=J.L(a)
r=A.ae(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
HV(a){return new DataView(new ArrayBuffer(a))},
Dq(a,b,c){A.hO(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d6(a,b,c){A.hO(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
HW(a){return new Int8Array(a)},
HX(a){return new Uint16Array(a)},
Dr(a,b,c){A.hO(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
um(a){return new Uint8Array(a)},
bU(a,b,c){A.hO(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dm(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.Ar(b,a))},
dn(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.LH(a,b,c))
if(b==null)return c
return b},
fG:function fG(){},
fF:function fF(){},
iW:function iW(){},
oq:function oq(a){this.a=a},
iV:function iV(){},
fH:function fH(){},
dN:function dN(){},
bT:function bT(){},
m1:function m1(){},
m2:function m2(){},
m3:function m3(){},
m4:function m4(){},
m5:function m5(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
ex:function ex(){},
jS:function jS(){},
jT:function jT(){},
jU:function jU(){},
jV:function jV(){},
BF(a,b){var s=b.c
return s==null?b.c=A.k5(a,"z",[b.x]):s},
DE(a){var s=a.w
if(s===6||s===7)return A.DE(a.x)
return s===11||s===12},
Ii(a){return a.as},
FF(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.zt(v.typeUniverse,a,!1)},
M_(a,b){var s,r,q,p,o
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
return A.Ek(a1,r,!0)
case 7:s=a2.x
r=A.e5(a1,s,a3,a4)
if(r===s)return a2
return A.Ej(a1,r,!0)
case 8:q=a2.y
p=A.hS(a1,q,a3,a4)
if(p===q)return a2
return A.k5(a1,a2.x,p)
case 9:o=a2.x
n=A.e5(a1,o,a3,a4)
m=a2.y
l=A.hS(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.C1(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hS(a1,j,a3,a4)
if(i===j)return a2
return A.El(a1,k,i)
case 11:h=a2.x
g=A.e5(a1,h,a3,a4)
f=a2.y
e=A.KW(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Ei(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hS(a1,d,a3,a4)
o=a2.x
n=A.e5(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.C2(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kH("Attempted to substitute unexpected RTI kind "+a0))}},
hS(a,b,c,d){var s,r,q,p,o=b.length,n=A.zD(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e5(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
KX(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.zD(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e5(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
KW(a,b,c,d){var s,r=b.a,q=A.hS(a,r,c,d),p=b.b,o=A.hS(a,p,c,d),n=b.c,m=A.KX(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.nQ()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
oJ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.LR(s)
return a.$S()}return null},
LZ(a,b){var s
if(A.DE(b))if(a instanceof A.eh){s=A.oJ(a)
if(s!=null)return s}return A.bz(a)},
bz(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a_(a)
return A.Cb(J.dq(a))},
a_(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Cb(a)},
Cb(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Kh(a,s)},
Kh(a,b){var s=a instanceof A.eh?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Jy(v.typeUniverse,s.name)
b.$ccache=r
return r},
LR(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.zt(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dr(a){return A.bL(A.n(a))},
Cn(a){var s=A.oJ(a)
return A.bL(s==null?A.bz(a):s)},
Ce(a){var s
if(a instanceof A.hA)return a.lz()
s=a instanceof A.eh?A.oJ(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bO(a).a
if(Array.isArray(a))return A.a_(a)
return A.bz(a)},
bL(a){var s=a.r
return s==null?a.r=new A.on(a):s},
LK(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.k7(v.typeUniverse,A.Ce(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.En(v.typeUniverse,s,A.Ce(q[r]))
return A.k7(v.typeUniverse,s,a)},
bM(a){return A.bL(A.zt(v.typeUniverse,a,!1))},
Kg(a){var s=this
s.b=A.KU(s)
return s.b(a)},
KU(a){var s,r,q,p
if(a===t.K)return A.Kp
if(A.f7(a))return A.Kt
s=a.w
if(s===6)return A.Kd
if(s===1)return A.ET
if(s===7)return A.Kk
r=A.KT(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f7)){a.f="$i"+q
if(q==="p")return A.Kn
if(a===t.m)return A.Km
return A.Ks}}else if(s===10){p=A.LE(a.x,a.y)
return p==null?A.ET:p}return A.Kb},
KT(a){if(a.w===8){if(a===t.S)return A.ax
if(a===t.W||a===t.o)return A.Ko
if(a===t.N)return A.Kr
if(a===t.y)return A.bJ}return null},
Kf(a){var s=this,r=A.Ka
if(A.f7(s))r=A.JM
else if(s===t.K)r=A.JL
else if(A.hW(s)){r=A.Kc
if(s===t.U)r=A.bb
else if(s===t.v)r=A.a6
else if(s===t.o9)r=A.EC
else if(s===t.jh)r=A.EG
else if(s===t.dA)r=A.ED
else if(s===t.B)r=A.EE}else if(s===t.S)r=A.an
else if(s===t.N)r=A.F
else if(s===t.y)r=A.hN
else if(s===t.o)r=A.EF
else if(s===t.W)r=A.f0
else if(s===t.m)r=A.bc
s.a=r
return s.a(a)},
Kb(a){var s=this
if(a==null)return A.hW(s)
return A.M2(v.typeUniverse,A.LZ(a,s),s)},
Kd(a){if(a==null)return!0
return this.x.b(a)},
Ks(a){var s,r=this
if(a==null)return A.hW(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dq(a)[s]},
Kn(a){var s,r=this
if(a==null)return A.hW(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dq(a)[s]},
Km(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ES(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ka(a){var s=this
if(a==null){if(A.hW(s))return a}else if(s.b(a))return a
throw A.aK(A.EM(a,s),new Error())},
Kc(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.EM(a,s),new Error())},
EM(a,b){return new A.k3("TypeError: "+A.E9(a,A.bx(b,null)))},
E9(a,b){return A.il(a)+": type '"+A.bx(A.Ce(a),null)+"' is not a subtype of type '"+b+"'"},
ce(a,b){return new A.k3("TypeError: "+A.E9(a,b))},
Kk(a){var s=this
return s.x.b(a)||A.BF(v.typeUniverse,s).b(a)},
Kp(a){return a!=null},
JL(a){if(a!=null)return a
throw A.aK(A.ce(a,"Object"),new Error())},
Kt(a){return!0},
JM(a){return a},
ET(a){return!1},
bJ(a){return!0===a||!1===a},
hN(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.ce(a,"bool"),new Error())},
EC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.ce(a,"bool?"),new Error())},
f0(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"double"),new Error())},
ED(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"double?"),new Error())},
ax(a){return typeof a=="number"&&Math.floor(a)===a},
an(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.ce(a,"int"),new Error())},
bb(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.ce(a,"int?"),new Error())},
Ko(a){return typeof a=="number"},
EF(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"num"),new Error())},
EG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"num?"),new Error())},
Kr(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.aK(A.ce(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.ce(a,"String?"),new Error())},
bc(a){if(A.ES(a))return a
throw A.aK(A.ce(a,"JSObject"),new Error())},
EE(a){if(a==null)return a
if(A.ES(a))return a
throw A.aK(A.ce(a,"JSObject?"),new Error())},
F4(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bx(a[q],b)
return s},
KJ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.F4(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bx(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
EQ(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.k([],t.s)
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
if(m===8){p=A.L_(a.x)
o=a.y
return o.length>0?p+("<"+A.F4(o,b)+">"):p}if(m===10)return A.KJ(a,b)
if(m===11)return A.EQ(a,b,null)
if(m===12)return A.EQ(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
L_(a){var s=A.FT(a)
if(s!=null)return s
return"minified:"+a},
Jz(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Jy(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.zt(a,b,!1)
else if(typeof m=="number"){s=m
r=A.k6(a,5,"#")
q=A.zD(s)
for(p=0;p<s;++p)q[p]=r
o=A.k5(a,b,q)
n[b]=o
return o}else return m},
Jx(a,b){return A.EA(a.tR,b)},
Jw(a,b){return A.EA(a.eT,b)},
zt(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Em(a,null,b,!1)
r.set(b,s)
return s},
k7(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Em(a,b,c,!0)
q.set(c,r)
return r},
En(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.C1(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Em(a,b,c,d){return A.Jm(A.Jg(a,b,c,d))},
e4(a,b){b.a=A.Kf
b.b=A.Kg
return b},
k6(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cp(null,null)
s.w=b
s.as=c
r=A.e4(a,s)
a.eC.set(c,r)
return r},
Ek(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Ju(a,b,r,c)
a.eC.set(r,s)
return s},
Ju(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f7(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.hW(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cp(null,null)
q.w=6
q.x=b
q.as=c
return A.e4(a,q)},
Ej(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Js(a,b,r,c)
a.eC.set(r,s)
return s},
Js(a,b,c,d){var s,r
if(d){s=b.w
if(A.f7(b)||b===t.K)return b
else if(s===1)return A.k5(a,"z",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cp(null,null)
r.w=7
r.x=b
r.as=c
return A.e4(a,r)},
Jv(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=13
s.x=b
s.as=q
r=A.e4(a,s)
a.eC.set(q,r)
return r},
k4(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Jr(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
k5(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.k4(c)+">"
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
C1(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.k4(r)+">")
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
El(a,b,c){var s,r,q="+"+(b+"("+A.k4(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e4(a,s)
a.eC.set(q,r)
return r},
Ei(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.k4(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.k4(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Jr(i)+"}"}r=n+(g+")")
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
C2(a,b,c,d){var s,r=b.as+("<"+A.k4(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Jt(a,b,c,r,d)
a.eC.set(r,s)
return s},
Jt(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.zD(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e5(a,b,r,0)
m=A.hS(a,c,r,0)
return A.C2(a,n,m,c!==m)}}l=new A.cp(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e4(a,l)},
Jg(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Jm(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Ji(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Ee(a,r,l,k,!1)
else if(q===46)r=A.Ee(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eW(a.u,a.e,k.pop()))
break
case 94:k.push(A.Jv(a.u,k.pop()))
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
case 62:A.Jk(a,k)
break
case 38:A.Jj(a,k)
break
case 63:p=a.u
k.push(A.Ek(p,A.eW(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Ej(p,A.eW(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Jh(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Ef(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Jn(a.u,a.e,o)
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
Ji(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Ee(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Jz(s,o.x)[p]
if(n==null)A.v('No "'+p+'" in "'+A.Ii(o)+'"')
d.push(A.k7(s,o,n))}else d.push(p)
return m},
Jk(a,b){var s,r=a.u,q=A.Ed(a,b),p=b.pop()
if(typeof p=="string")b.push(A.k5(r,p,q))
else{s=A.eW(r,a.e,p)
switch(s.w){case 11:b.push(A.C2(r,s,q,a.n))
break
default:b.push(A.C1(r,s,q))
break}}},
Jh(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Ed(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eW(p,a.e,o)
q=new A.nQ()
q.a=s
q.b=n
q.c=m
b.push(A.Ei(p,r,q))
return
case-4:b.push(A.El(p,b.pop(),s))
return
default:throw A.b(A.kH("Unexpected state under `()`: "+A.r(o)))}},
Jj(a,b){var s=b.pop()
if(0===s){b.push(A.k6(a.u,1,"0&"))
return}if(1===s){b.push(A.k6(a.u,4,"1&"))
return}throw A.b(A.kH("Unexpected extended operation "+A.r(s)))},
Ed(a,b){var s=b.splice(a.p)
A.Ef(a.u,a.e,s)
a.p=b.pop()
return s},
eW(a,b,c){if(typeof c=="string")return A.k5(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Jl(a,b,c)}else return c},
Ef(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eW(a,b,c[s])},
Jn(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eW(a,b,c[s])},
Jl(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kH("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kH("Bad index "+c+" for "+b.l(0)))},
M2(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aS(a,b,null,c,null)
r.set(c,s)}return s},
aS(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f7(d))return!0
s=b.w
if(s===4)return!0
if(A.f7(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aS(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aS(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aS(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aS(a,b.x,c,d,e))return!1
return A.aS(a,A.BF(a,b),c,d,e)}if(s===6)return A.aS(a,p,c,d,e)&&A.aS(a,b.x,c,d,e)
if(q===7){if(A.aS(a,b,c,d.x,e))return!0
return A.aS(a,b,c,A.BF(a,d),e)}if(q===6)return A.aS(a,b,c,p,e)||A.aS(a,b,c,d.x,e)
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
if(!A.aS(a,j,c,i,e)||!A.aS(a,i,e,j,c))return!1}return A.ER(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ER(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Kl(a,b,c,d,e)}if(o&&q===10)return A.Kq(a,b,c,d,e)
return!1},
ER(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aS(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aS(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aS(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aS(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aS(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Kl(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.k7(a,b,r[o])
return A.EB(a,p,null,c,d.y,e)}return A.EB(a,b.y,null,c,d.y,e)},
EB(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aS(a,b[s],d,e[s],f))return!1
return!0},
Kq(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aS(a,r[s],c,q[s],e))return!1
return!0},
hW(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.f7(a))if(s!==6)r=s===7&&A.hW(a.x)
return r},
f7(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
EA(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
zD(a){return a>0?new Array(a):v.typeUniverse.sEA},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
nQ:function nQ(){this.c=this.b=this.a=null},
on:function on(a){this.a=a},
nN:function nN(){},
k3:function k3(a){this.a=a},
IN(){var s,r,q
if(self.scheduleImmediate!=null)return A.L3()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e7(new A.xr(s),1)).observe(r,{childList:true})
return new A.xq(s,r,q)}else if(self.setImmediate!=null)return A.L4()
return A.L5()},
IO(a){self.scheduleImmediate(A.e7(new A.xs(a),0))},
IP(a){self.setImmediate(A.e7(new A.xt(a),0))},
IQ(a){A.BO(B.D,a)},
BO(a,b){var s=B.c.M(a.a,1000)
return A.Jp(s<0?0:s,b)},
DL(a,b){var s=B.c.M(a.a,1000)
return A.Jq(s<0?0:s,b)},
Jp(a,b){var s=new A.k2(!0)
s.oL(a,b)
return s},
Jq(a,b){var s=new A.k2(!1)
s.oM(a,b)
return s},
h(a){return new A.jw(new A.t($.C,a.i("t<0>")),a.i("jw<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.EH(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.c6(A.E(a),A.ag(a))},
EH(a,b){var s,r,q=new A.zS(b),p=new A.zT(b)
if(a instanceof A.t)a.mc(q,p,t.z)
else{s=t.z
if(a instanceof A.t)a.bU(q,p,s)
else{r=new A.t($.C,t._)
r.a=8
r.c=a
r.mc(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fu(new A.Aa(s),t.H,t.S,t.z)},
bW(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cU(null)
else{s=c.a
s===$&&A.A()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.E(a)
q=A.ag(a)
s.am(new A.al(r,q))}else{s=A.E(a)
r=A.ag(a)
q=c.a
q===$&&A.A()
q.bz(s,r)
c.a.q()}return}if(a instanceof A.jO){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.A()
r.u(0,s)
A.kq(new A.zQ(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.A()
s.u7(p,!1).a2(new A.zR(c,b),t.P)
return}}A.EH(a,b)},
F8(a){var s=a.a
s===$&&A.A()
return new A.b5(s,A.n(s).i("b5<1>"))},
IR(a,b){var s=new A.nx(b.i("nx<0>"))
s.oH(a,b)
return s},
EU(a,b){return A.IR(a,b)},
Jc(a){return new A.jO(a,1)},
e_(a){return new A.jO(a,0)},
Eh(a,b,c){return 0},
i6(a){var s
if(t.C.b(a)){s=a.gcl()
if(s!=null)return s}return B.P},
is(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.E(q)
r=A.ag(q)
p=new A.t($.C,b.i("t<0>"))
o=s
n=r
m=A.ke(o,n)
if(m==null)o=new A.al(o,n==null?A.i6(o):n)
else o=m
p.cm(o)
return p}return b.i("z<0>").b(l)?l:A.bp(l,b)},
bj(a,b){var s=a==null?b.a(a):a,r=new A.t($.C,b.i("t<0>"))
r.aL(s)
return r},
Hr(a,b){var s
if(!b.b(null))throw A.b(A.aA(null,"computation","The type parameter is not nullable"))
s=new A.t($.C,b.i("t<0>"))
A.cP(a,new A.rm(null,s,b))
return s},
Bj(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.t($.C,b.i("t<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.ro(i,h,g,f)
try{for(n=J.D(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bU(new A.rn(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cU(A.k([],b.i("B<0>")))
return n}i.a=A.ae(n,null,!1,b.i("0?"))}catch(l){p=A.E(l)
o=A.ag(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.ke(m,k)
if(j==null)m=new A.al(m,k==null?A.i6(m):k)
else m=j
n.cm(m)
return n}else{i.d=p
i.c=o}}return f},
Bi(a,b,c,d){var s=new A.rh(d,null,b,c),r=$.C,q=new A.t(r,c.i("t<0>"))
if(r!==B.i)s=r.fu(s,c.i("0/"),t.K,t.l)
a.dE(new A.cb(q,2,null,s,a.$ti.i("@<1>").U(c).i("cb<1,2>")))
return q},
Hp(a,b){var s,r,q,p=A.k([],b.i("B<jM<0>>"))
for(s=a.length,r=b.i("jM<0>"),q=0;q<a.length;a.length===s||(0,A.q)(a),++q)p.push(new A.jM(a[q],r))
if(p.length===0)return A.bj(A.k([],b.i("B<0>")),b.i("p<0>"))
s=new A.t($.C,b.i("t<p<0>>"))
A.J6(p,new A.ri(new A.am(s,b.i("am<p<0>>")),p,b))
return s},
Ky(a){return a!=null},
J6(a,b){var s,r={},q=r.a=r.b=0,p=new A.yp(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.q)(a),++q)a[q].tP(p)},
ke(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.mJ(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.ml(r,q)
return s},
f1(a,b){var s
if($.C!==B.i){s=A.ke(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcl()
if(b==null){A.ml(a,B.P)
b=B.P}}else b=B.P
else if(t.C.b(a))A.ml(a,b)
return new A.al(a,b)},
J5(a,b,c){var s=new A.t(b,c.i("t<0>"))
s.a=8
s.c=a
return s},
bp(a,b){var s=new A.t($.C,b.i("t<0>"))
s.a=8
s.c=a
return s},
yv(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.BI()
b.cm(new A.al(new A.bB(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lP(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eT()
b.fU(p.a)
A.eS(b,q)
return}b.a^=2
b.b.cO(new A.yw(p,b))},
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
if((f&15)===8)new A.yA(s,g,p).$0()
else if(q){if((f&1)!==0)new A.yz(s,m).$0()}else if((f&2)!==0)new A.yy(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.t){r=s.a.$ti
r=r.i("z<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hp(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.yv(f,i,!0)
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
EZ(a,b){if(t.ng.b(a))return b.fu(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dl(a,t.z,t.K)
throw A.b(A.aA(a,"onError",u.w))},
Kx(){var s,r
for(s=$.hQ;s!=null;s=$.hQ){$.kg=null
r=s.b
$.hQ=r
if(r==null)$.kf=null
s.a.$0()}},
KV(){$.Cc=!0
try{A.Kx()}finally{$.kg=null
$.Cc=!1
if($.hQ!=null)$.Cz().$1(A.Fj())}},
F6(a){var s=new A.nw(a),r=$.kf
if(r==null){$.hQ=$.kf=s
if(!$.Cc)$.Cz().$1(A.Fj())}else $.kf=r.b=s},
KS(a){var s,r,q,p=$.hQ
if(p==null){A.F6(a)
$.kg=$.kf
return}s=new A.nw(a)
r=$.kg
if(r==null){s.b=p
$.hQ=$.kg=s}else{q=r.b
s.b=q
$.kg=r.b=s
if(q==null)$.kf=s}},
kq(a){var s,r=null,q=$.C
if(B.i===q){A.A8(r,r,B.i,a)
return}if(B.i===q.gjy().a)s=B.i.gc8()===q.gc8()
else s=!1
if(s){A.A8(r,r,q,q.bT(a,t.H))
return}s=$.C
s.cO(s.f_(a))},
BK(a,b){var s=null,r=b.i("cV<0>"),q=new A.cV(s,s,s,s,r)
q.aA(a)
q.lb()
return new A.b5(q,r.i("b5<1>"))},
MQ(a,b){return new A.cd(A.bZ(a,"stream",t.K),b.i("cd<0>"))},
w4(a,b,c,d,e){return d?new A.hH(b,null,c,a,e.i("hH<0>")):new A.cV(b,null,c,a,e.i("cV<0>"))},
dQ(a,b,c){return new A.jx(b,a,c.i("jx<0>"))},
oF(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.E(q)
r=A.ag(q)
$.C.fe(s,r)}},
J3(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.nB(s,b,f),o=A.xG(s,c),n=d==null?A.Ab():d
return new A.dY(a,p,o,s.bT(n,t.H),s,r|q,f.i("dY<0>"))},
IM(a){return new A.xn(a)},
nB(a,b,c){var s=b==null?A.L7():b
return a.dl(s,t.H,c)},
xG(a,b){if(b==null)b=A.L8()
if(t.b9.b(b))return a.fu(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dl(b,t.z,t.K)
throw A.b(A.N("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Kz(a){},
KB(a,b){$.C.fe(a,b)},
KA(){},
E8(a,b){var s=$.C,r=new A.hs(s,b.i("hs<0>"))
A.kq(r.glM())
if(a!=null)r.c=s.bT(a,t.H)
return r},
JU(a,b,c){var s=a.D()
if(s!==$.e9())s.aY(new A.zV(b,c))
else b.am(c)},
JV(a,b,c){var s=a.D()
if(s!==$.e9())s.aY(new A.zW(b,c))
else b.cn(c)},
cP(a,b){var s=$.C
if(s===B.i)return s.jQ(a,b)
return s.jQ(a,s.f_(b))},
DK(a,b){var s,r=$.C
if(r===B.i)return r.jP(a,b)
s=r.hJ(b,t.hU)
return $.C.jP(a,s)},
oP(a,b,c,d){return A.KR(a,c,b,d)},
KR(a,b,c,d){return $.C.mO(c,b).aW(a,d)},
KP(a,b,c,d,e){A.kj(d,e)},
kj(a,b){A.KS(new A.A5(a,b))},
A6(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
A7(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
Cd(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
F2(a,b,c,d){return d},
F3(a,b,c,d){return d},
F1(a,b,c,d){return d},
KO(a,b,c,d,e){return null},
A8(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gc8()
r=c.gc8()
d=s!==r?c.f_(d):c.jL(d,t.H)}A.F6(d)},
KN(a,b,c,d,e){return A.BO(d,B.i!==c?c.jL(e,t.H):e)},
KM(a,b,c,d,e){e=c.ul(e,t.H,t.hU)
return A.DL(d,e)},
KQ(a,b,c,d){A.FH(d)},
F0(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.Bk(o,o,o,s,s)
r.C(0,e)}else r=o
s=new A.nG(c.gm0(),c.gm2(),c.gm1(),c.glX(),c.glY(),c.glW(),c.glt(),c.gjy(),c.glm(),c.gll(),c.glQ(),c.glw(),c.gji(),c.gjI(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.oy(s,q)
p=d.a
if(p!=null)s.as=new A.ox(s,p)}if(r!=null)s.at=new A.oz(s,r)
return s},
xr:function xr(a){this.a=a},
xq:function xq(a,b,c){this.a=a
this.b=b
this.c=c},
xs:function xs(a){this.a=a},
xt:function xt(a){this.a=a},
k2:function k2(a){this.a=a
this.b=null
this.c=0},
zr:function zr(a,b){this.a=a
this.b=b},
zq:function zq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jw:function jw(a,b){this.a=a
this.b=!1
this.$ti=b},
zS:function zS(a){this.a=a},
zT:function zT(a){this.a=a},
Aa:function Aa(a){this.a=a},
zQ:function zQ(a,b){this.a=a
this.b=b},
zR:function zR(a,b){this.a=a
this.b=b},
nx:function nx(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
xv:function xv(a){this.a=a},
xw:function xw(a){this.a=a},
xy:function xy(a){this.a=a},
xz:function xz(a,b){this.a=a
this.b=b},
xx:function xx(a,b){this.a=a
this.b=b},
xu:function xu(a){this.a=a},
jO:function jO(a,b){this.a=a
this.b=b},
ok:function ok(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hG:function hG(a,b){this.a=a
this.$ti=b},
al:function al(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b){this.a=a
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
jC:function jC(){},
jx:function jx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
rm:function rm(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rn:function rn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rh:function rh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mX:function mX(a,b){this.a=a
this.b=b},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b,c){this.c=a
this.d=b
this.$ti=c},
jM:function jM(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
yq:function yq(a,b){this.a=a
this.b=b},
yr:function yr(a,b){this.a=a
this.b=b},
yp:function yp(a,b,c){this.a=a
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
ys:function ys(a,b){this.a=a
this.b=b},
yx:function yx(a,b){this.a=a
this.b=b},
yw:function yw(a,b){this.a=a
this.b=b},
yu:function yu(a,b){this.a=a
this.b=b},
yt:function yt(a,b){this.a=a
this.b=b},
yA:function yA(a,b,c){this.a=a
this.b=b
this.c=c},
yB:function yB(a,b){this.a=a
this.b=b},
yC:function yC(a){this.a=a},
yz:function yz(a,b){this.a=a
this.b=b},
yy:function yy(a,b){this.a=a
this.b=b},
yD:function yD(a,b){this.a=a
this.b=b},
yE:function yE(a,b,c){this.a=a
this.b=b
this.c=c},
yF:function yF(a,b){this.a=a
this.b=b},
nw:function nw(a){this.a=a
this.b=null},
aa:function aa(){},
w7:function w7(a,b){this.a=a
this.b=b},
w8:function w8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w9:function w9(a,b){this.a=a
this.b=b},
wa:function wa(a,b){this.a=a
this.b=b},
w5:function w5(a){this.a=a},
w6:function w6(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(){},
e2:function e2(){},
zk:function zk(a){this.a=a},
zj:function zj(a){this.a=a},
ol:function ol(){},
jy:function jy(){},
cV:function cV(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
hH:function hH(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
b5:function b5(a,b){this.a=a
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
nt:function nt(){},
xn:function xn(a){this.a=a},
xm:function xm(a){this.a=a},
k_:function k_(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b_:function b_(){},
xI:function xI(a,b,c){this.a=a
this.b=b
this.c=c},
xH:function xH(a){this.a=a},
hF:function hF(){},
nM:function nM(){},
ca:function ca(a,b){this.b=a
this.a=null
this.$ti=b},
hr:function hr(a,b){this.b=a
this.c=b
this.a=null},
yi:function yi(){},
e1:function e1(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
z2:function z2(a,b){this.a=a
this.b=b},
hs:function hs(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cd:function cd(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jH:function jH(a){this.$ti=a},
dk:function dk(a,b){this.b=a
this.$ti=b},
z0:function z0(a,b){this.a=a
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
zV:function zV(a,b){this.a=a
this.b=b},
zW:function zW(a,b){this.a=a
this.b=b},
jK:function jK(){},
hv:function hv(a,b,c,d,e,f,g){var _=this
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
jI:function jI(a,b){this.a=a
this.$ti=b},
hD:function hD(a,b,c,d,e,f){var _=this
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
zN:function zN(a,b){this.a=a
this.b=b},
zP:function zP(a,b){this.a=a
this.b=b},
zO:function zO(a,b){this.a=a
this.b=b},
zL:function zL(a,b){this.a=a
this.b=b},
zM:function zM(a,b){this.a=a
this.b=b},
zK:function zK(a,b){this.a=a
this.b=b},
zH:function zH(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
zG:function zG(a,b){this.a=a
this.b=b},
zF:function zF(a,b){this.a=a
this.b=b},
zJ:function zJ(a,b){this.a=a
this.b=b},
zI:function zI(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
ow:function ow(){},
nG:function nG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ye:function ye(a,b,c){this.a=a
this.b=b
this.c=c},
yg:function yg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yd:function yd(a,b){this.a=a
this.b=b},
yf:function yf(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function o9(){},
z9:function z9(a,b,c){this.a=a
this.b=b
this.c=c},
z8:function z8(a,b){this.a=a
this.b=b},
za:function za(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a){this.a=a},
A5:function A5(a,b){this.a=a
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
Bk(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.di(d.i("@<0>").U(e).i("di<1,2>"))
b=A.Ci()}else{if(A.Fn()===b&&A.Fm()===a)return new A.dZ(d.i("@<0>").U(e).i("dZ<1,2>"))
if(a==null)a=A.Ch()}else{if(b==null)b=A.Ci()
if(a==null)a=A.Ch()}return A.J4(a,b,c,d,e)},
Ea(a,b){var s=a[b]
return s===a?null:s},
C_(a,b,c){if(c==null)a[b]=a
else a[b]=c},
BZ(){var s=Object.create(null)
A.C_(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
J4(a,b,c,d,e){var s=c!=null?c:new A.yc(d)
return new A.jE(a,b,s,d.i("@<0>").U(e).i("jE<1,2>"))},
dH(a,b,c,d){if(b==null){if(a==null)return new A.bD(c.i("@<0>").U(d).i("bD<1,2>"))
b=A.Ci()}else{if(A.Fn()===b&&A.Fm()===a)return new A.iD(c.i("@<0>").U(d).i("iD<1,2>"))
if(a==null)a=A.Ch()}return A.Jf(a,b,null,c,d)},
m(a,b,c){return A.Fw(a,new A.bD(b.i("@<0>").U(c).i("bD<1,2>")))},
u(a,b){return new A.bD(a.i("@<0>").U(b).i("bD<1,2>"))},
Jf(a,b,c,d,e){return new A.jP(a,b,new A.yZ(d),d.i("@<0>").U(e).i("jP<1,2>"))},
lS(a){return new A.dj(a.i("dj<0>"))},
aO(a){return new A.dj(a.i("dj<0>"))},
ap(a,b){return A.LN(a,new A.dj(b.i("dj<0>")))},
C0(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hx(a,b,c){var s=new A.e0(a,b,c.i("e0<0>"))
s.c=a.e
return s},
K1(a,b){return J.w(a,b)},
K2(a){return J.a7(a)},
De(a){if(a.length===0)return null
return B.b.ga_(a)},
b8(a,b,c){var s=A.dH(null,null,b,c)
a.a1(0,new A.tH(s,b,c))
return s},
cH(a,b,c){var s=A.dH(null,null,b,c)
s.C(0,a)
return s},
tI(a,b){var s,r,q=A.lS(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.u(0,b.a(a[r]))
return q},
d2(a,b){var s=A.lS(b)
s.C(0,a)
return s},
HH(a,b){var s=t.bP
return J.CG(s.a(a),s.a(b))},
tX(a){var s,r
if(A.Cp(a))return"{...}"
s=new A.a2("")
try{r={}
$.f2.push(a)
s.a+="{"
r.a=!0
a.a1(0,new A.tY(r,s))
s.a+="}"}finally{$.f2.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Bs(a){return new A.iG(A.ae(A.HI(null),null,!1,a.i("0?")),a.i("iG<0>"))},
HI(a){return 8},
di:function di(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
yH:function yH(a){this.a=a},
yG:function yG(a){this.a=a},
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
yc:function yc(a){this.a=a},
eT:function eT(a,b){this.a=a
this.$ti=b},
nR:function nR(a,b,c){var _=this
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
yZ:function yZ(a){this.a=a},
dj:function dj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
z_:function z_(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
tH:function tH(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
nY:function nY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b2:function b2(){},
K:function K(){},
U:function U(){},
tW:function tW(a){this.a=a},
tY:function tY(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.$ti=b},
o_:function o_(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
op:function op(){},
iK:function iK(){},
cR:function cR(a,b){this.a=a
this.$ti=b},
iG:function iG(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
nZ:function nZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cq:function cq(){},
jY:function jY(){},
k8:function k8(){},
EX(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.E(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.zY(p)
return q},
zY(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.nV(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.zY(a[s])
return a},
JK(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Gl()
else s=new Uint8Array(o)
for(r=J.L(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
JJ(a,b,c,d){var s=a?$.Gk():$.Gj()
if(s==null)return null
if(0===c&&d===b.length)return A.Ey(s,b)
return A.Ey(s,b.subarray(c,d))},
Ey(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
CL(a,b,c,d,e,f){if(B.c.aj(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
IV(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.aA(b,"Not a byte value at index "+q+": 0x"+B.c.kz(s.h(b,q),16),null))},
IU(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ae(f,2),i=f&3,h=$.CA()
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
return A.DY(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
IS(a,b,c,d){var s=A.IT(a,b,c),r=(d&3)+(s-b),q=B.c.ae(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Gc()},
IT(a,b,c){var s,r=c,q=r,p=0
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
DY(a,b,c,d){var s,r
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
He(a){return B.cK.h(0,a.toLowerCase())},
Dk(a,b,c){return new A.iE(a,b)},
K5(a){return a.p()},
Jd(a,b){return new A.yW(a,[],A.LB())},
Je(a,b,c){var s,r=new A.a2("")
A.Ec(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ec(a,b,c,d){var s=A.Jd(b,c)
s.iB(a)},
Ez(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nV:function nV(a,b){this.a=a
this.b=b
this.c=null},
yV:function yV(a){this.a=a},
nW:function nW(a){this.a=a},
yT:function yT(a,b,c){this.b=a
this.c=b
this.a=c},
zB:function zB(){},
zA:function zA(){},
kE:function kE(){},
oo:function oo(){},
kF:function kF(a){this.a=a},
zs:function zs(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
i8:function i8(a){this.a=a},
nz:function nz(a){this.a=0
this.b=a},
xF:function xF(a){this.c=null
this.a=0
this.b=a},
xB:function xB(){},
xo:function xo(a,b){this.a=a
this.b=b},
kK:function kK(){},
ny:function ny(){this.a=0},
xA:function xA(a,b){this.a=a
this.b=b},
pf:function pf(){},
hl:function hl(a){this.a=a},
nC:function nC(a,b){this.a=a
this.b=b
this.c=0},
kX:function kX(){},
of:function of(a,b,c){this.a=a
this.b=b
this.$ti=c},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
kZ:function kZ(){},
aB:function aB(){},
qc:function qc(a){this.a=a},
eo:function eo(){},
iE:function iE(a,b){this.a=a
this.b=b},
lK:function lK(a,b){this.a=a
this.b=b},
rZ:function rZ(){},
lM:function lM(a){this.b=a},
yU:function yU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
lL:function lL(a){this.a=a},
yX:function yX(){},
yY:function yY(a,b){this.a=a
this.b=b},
yW:function yW(a,b,c){this.c=a
this.a=b
this.b=c},
lP:function lP(){},
lQ:function lQ(a){this.a=a},
mT:function mT(){},
zp:function zp(a,b){this.a=a
this.b=b},
k1:function k1(){},
oh:function oh(a){this.a=a},
zz:function zz(a,b,c){this.a=a
this.b=b
this.c=c},
nc:function nc(){},
nd:function nd(){},
or:function or(a){this.b=this.a=0
this.c=a},
zC:function zC(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jp:function jp(a){this.a=a},
dl:function dl(a){this.a=a
this.b=16
this.c=0},
oA:function oA(){},
BX(a,b){var s=A.J1(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
IZ(a,b){var s,r,q=$.ch(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bi(0,$.CB()).fI(0,A.jz(s))
s=0
o=0}}if(b)return q.bB(0)
return q},
E_(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
J_(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.un(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.E_(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.E_(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ch()
l=A.bI(j,i)
return new A.aI(l===0?!1:c,i,l)},
J1(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Ge().eb(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.IZ(p,q)
if(o!=null)return A.J_(o,2,q)
return null},
bI(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
BV(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
DZ(a){var s
if(a===0)return $.ch()
if(a===1)return $.fa()
if(a===2)return $.Gf()
if(Math.abs(a)<4294967296)return A.jz(B.c.iu(a))
s=A.IW(a)
return s},
jz(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bI(4,s)
return new A.aI(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bI(1,s)
return new A.aI(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ae(a,16)
r=A.bI(2,s)
return new A.aI(r===0?!1:o,s,r)}r=B.c.M(B.c.gmu(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bI(r,s)
return new A.aI(r===0?!1:o,s,r)},
IW(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.N("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.ch()
r=$.Gd()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.I(r)
r[p]=0}q=J.oU(B.f.ga9(r))
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
if(n<0)k=l.dA(0,-n)
else k=n>0?l.bC(0,n):l
if(s)return k.bB(0)
return k},
BW(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.I(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.I(d)
d[s]=0}return b+c},
E5(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.aj(c,16),l=16-m,k=B.c.bC(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dA(p,l)
r&2&&A.I(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bC((p&k)>>>0,m)}r&2&&A.I(d)
d[n]=q},
E0(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.aj(c,16)===0)return A.BW(a,b,o,d)
s=b+o+1
A.E5(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.I(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
J0(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.aj(c,16),m=16-n,l=B.c.bC(1,n)-1,k=B.c.dA(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bC((q&l)>>>0,m)
s&2&&A.I(d)
d[r]=(p|k)>>>0
k=B.c.dA(q,n)}s&2&&A.I(d)
d[j]=k},
xC(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
IX(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ae(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=B.c.ae(r,16)}s&2&&A.I(e)
e[b]=r},
nA(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ae(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.I(e)
e[q]=r&65535
r=0-(B.c.ae(r,16)&1)}},
E6(a,b,c,d,e,f){var s,r,q,p,o,n
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
IY(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iM((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
LV(a){return A.kn(a)},
Be(a,b){return new A.lq(new WeakMap(),a,b.i("lq<0>"))},
Bf(a){},
yo(a,b){var s=$.Gg()
s=s==null?null:new s(A.e7(A.Mv(a,b),1))
return new A.nP(s,b.i("nP<0>"))},
aG(a){var s=A.j4(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
LJ(a){var s=A.I6(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
Hi(a,b){a=A.aK(a,new Error())
a.stack=b.l(0)
throw a},
ae(a,b,c,d){var s,r=c?J.Dg(a,d):J.Bn(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bF(a,b,c){var s,r=A.k([],c.i("B<0>"))
for(s=J.D(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
O(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.i("B<0>"))
s=A.k([],b.i("B<0>"))
for(r=J.D(a);r.k();)s.push(r.gn())
return s},
d3(a,b){var s=A.bF(a,!1,b)
s.$flags=3
return s},
dS(a,b,c){var s,r,q,p,o
A.b9(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.as(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Dz(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Iw(a,b,c)
if(r)a=J.B7(a,c)
if(b>0)a=J.oY(a,b)
s=A.O(a,t.S)
return A.Dz(s)},
Iw(a,b,c){var s=a.length
if(b>=s)return""
return A.I8(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.es(a,A.Bp(a,!1,b,c,!1,""))},
LU(a,b){return a==null?b==null:a===b},
wb(a,b,c){var s=J.D(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
BQ(){var s,r,q=A.I1()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.DS
if(s!=null&&q===$.DR)return s
r=A.nb(q)
$.DS=r
$.DR=q
return r},
hK(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.Gh()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bt(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
JE(a){var s,r,q
if(!$.Gi())return A.JF(a)
s=new URLSearchParams()
a.a1(0,new A.zy(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
BI(){return A.ag(new Error())},
Bb(a,b,c,d,e,f,g){var s=A.I9(a,b,c,d,e,f,g,0,!0)
return new A.aM(s==null?new A.qQ(a,b,c,d,e,f,g,0).$0():s,0,!0)},
H9(){return new A.aM(Date.now(),0,!1)},
li(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.as(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.as(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aA(b,s,u.B))
A.bZ(c,"isUtc",t.y)
return a},
Ha(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
D0(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
lh(a){if(a>=10)return""+a
return"0"+a},
dy(a,b,c){return new A.aC(a+1000*b+1e6*c)},
fs(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aA(b,"name","No enum value with that name"))},
il(a){if(typeof a=="number"||A.bJ(a)||a==null)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Dy(a)},
D2(a,b){A.bZ(a,"error",t.K)
A.bZ(b,"stackTrace",t.l)
A.Hi(a,b)},
kH(a){return new A.kG(a)},
N(a,b){return new A.bB(!1,null,b,a)},
aA(a,b,c){return new A.bB(!0,a,b,c)},
kD(a,b){return a},
aX(a){var s=null
return new A.d9(s,s,!1,s,s,a)},
vF(a,b){return new A.d9(null,null,!0,a,b,"Value not in range")},
as(a,b,c,d,e){return new A.d9(b,c,!0,a,d,"Invalid value")},
DD(a,b,c,d){if(a<b||a>c)throw A.b(A.as(a,b,c,d,null))
return a},
Ic(a,b,c,d){return A.Dc(a,d,b,null,c)},
ba(a,b,c){if(0>a||a>c)throw A.b(A.as(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.as(b,a,c,"end",null))
return b}return c},
b9(a,b){if(a<0)throw A.b(A.as(a,0,null,b,null))
return a},
Db(a,b){var s=b.b
return new A.iv(s,!0,a,null,"Index out of range")},
lC(a,b,c,d,e){return new A.iv(b,!0,a,e,"Index out of range")},
Dc(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lC(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cS(a)},
DP(a){return new A.n5(a)},
x(a){return new A.bk(a)},
ay(a){return new A.l1(a)},
D3(a){return new A.nO(a)},
a8(a,b,c){return new A.bi(a,b,c)},
Hx(a,b,c){var s,r
if(A.Cp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
$.f2.push(a)
try{A.Ku(a,s)}finally{$.f2.pop()}r=A.wb(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
rW(a,b,c){var s,r
if(A.Cp(a))return b+"..."+c
s=new A.a2(b)
$.f2.push(a)
try{r=s
r.a=A.wb(r.a,a,", ")}finally{$.f2.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ku(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
Dn(a,b,c,d,e){return new A.ef(a,b.i("@<0>").U(c).U(d).U(e).i("ef<1,2,3,4>"))},
c5(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.h8(A.av(A.av($.fb(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.h8(A.av(A.av(A.av($.fb(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.h8(A.av(A.av(A.av(A.av($.fb(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.h8(A.av(A.av(A.av(A.av(A.av($.fb(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.h8(A.av(A.av(A.av(A.av(A.av(A.av($.fb(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.h8(A.av(A.av(A.av(A.av(A.av(A.av(A.av($.fb(),s),b),c),d),e),f),g))
return g},
un(a){var s,r=$.fb()
for(s=J.D(a);s.k();)r=A.av(r,J.a7(s.gn()))
return A.h8(r)},
EI(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nb(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.DQ(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnl()
else if(s===32)return A.DQ(B.a.A(a5,5,a4),0,a3).gnl()}r=A.ae(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.F5(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.F5(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.dm(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.ac(a5,"http",0)){if(i&&o+3===n&&B.a.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dm(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.ac(a5,"https",0)){if(i&&o+4===n&&B.a.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dm(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cc(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.C4(a5,0,q)
else{if(q===0)A.hJ(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Eu(a5,c,p-1):""
a=A.Es(a5,p,o,!1)
i=o+1
if(i<n){a0=A.j4(B.a.A(a5,i,n),a3)
d=A.zu(a0==null?A.v(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Et(a5,n,m,a3,j,a!=null)
a2=m<l?A.zv(a5,m+1,l,a3):a3
return A.ka(j,b,a,d,a1,a2,l<a4?A.Er(a5,l+1,a4):a3)},
IH(a){return A.C7(a,0,a.length,B.k,!1)},
na(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
IE(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.na("each part must be in the range 0..255",a,r)}A.na("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.na(k,a,q)}l=p+1
s&2&&A.I(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.na(k,a,q)
p=l}A.na("IPv4 address should contain exactly 4 parts",a,q)},
IF(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.IG(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.DT(a,b,c)
return!0},
IG(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bi(o,a,r)
s=r
break}return new A.bi("Unexpected character",a,r-1)}if(s-1===b)return new A.bi(o,a,s)
return new A.bi("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bi("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bi("Invalid IPvFuture address character",a,s)}},
DT(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.wN(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.IE(a1,o,a3,s,q*2)
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
B.f.ai(s,b,16,s,c)
B.f.jZ(s,c,b,0)}}return s},
ka(a,b,c,d,e,f,g){return new A.k9(a,b,c,d,e,f,g)},
Eo(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hJ(a,b,c){throw A.b(A.a8(c,a,b))},
JB(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.F(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
zu(a,b){if(a!=null&&a===A.Eo(b))return null
return a},
Es(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hJ(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.JC(a,r,s)
if(p<s){o=p+1
q=A.Ex(a,B.a.ac(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.IF(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.ca(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Ex(a,B.a.ac(a,"25",o)?s+3:o,c,"%25")}else q=""
A.DT(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.JH(a,b,c)},
JC(a,b,c){var s=B.a.ca(a,"%",b)
return s>=b&&s<c?s:c},
Ex(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.C5(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a2("")
m=i.a+=B.a.A(a,r,s)
if(n)o=B.a.A(a,s,s+3)
else if(o==="%")A.hJ(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a2("")
if(r<s){i.a+=B.a.A(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.A(a,r,s)
if(i==null){i=new A.a2("")
n=i}else n=i
n.a+=j
m=A.C3(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
JH(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.C5(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a2("")
l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.A(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a2("")
if(r<s){q.a+=B.a.A(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hJ(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a2("")
m=q}else m=q
m.a+=l
k=A.C3(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
C4(a,b,c){var s,r,q
if(b===c)return""
if(!A.Eq(a.charCodeAt(b)))A.hJ(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hJ(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.JA(r?a.toLowerCase():a)},
JA(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Eu(a,b,c){if(a==null)return""
return A.kb(a,b,c,16,!1,!1)},
Et(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kb(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.JG(s,e,f)},
JG(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.C6(a,!s||c)
return A.f_(a)},
zv(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.N("Both query and queryParameters specified",null))
return A.kb(a,b,c,256,!0,!1)}if(d==null)return null
return A.JE(d)},
JF(a){var s={},r=new A.a2("")
s.a=""
a.a1(0,new A.zw(new A.zx(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Er(a,b,c){if(a==null)return null
return A.kb(a,b,c,256,!0,!1)},
C5(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.AC(s)
p=A.AC(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bt(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
C3(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.m7(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dS(s,0,null)},
kb(a,b,c,d,e,f){var s=A.Ew(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
Ew(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.C5(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hJ(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.C3(o)}if(p==null){p=new A.a2("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Ev(a){if(B.a.S(a,"."))return!0
return B.a.bO(a,"/.")!==-1},
f_(a){var s,r,q,p,o,n
if(!A.Ev(a))return a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
C6(a,b){var s,r,q,p,o,n
if(!A.Ev(a))return!b?A.Ep(a):a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Ep(s[0])
return B.b.B(s,"/")},
Ep(a){var s,r,q=a.length
if(q>=2&&A.Eq(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ad(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
JI(a,b){if(a.w9("package")&&a.c==null)return A.F7(b,0,b.length)
return-1},
JD(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.N("Invalid URL encoding",null))}}return s},
C7(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.A(a,b,c)
else p=new A.cj(B.a.A(a,b,c))
else{p=A.k([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.N("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.N("Truncated URI",null))
p.push(A.JD(a,o+1))
o+=2}else p.push(r)}}return d.f0(p)},
Eq(a){var s=a|32
return 97<=s&&s<=122},
DQ(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.k([b-1],t.t)
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
if((j.length&1)===1)a=B.aq.ws(a,m,s)
else{l=A.Ew(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dm(a,m,s,l)}return new A.wM(a,j,c)},
F5(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Eg(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.F7(a.a,a.e,a.f)
return-1},
F7(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
JX(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
xD:function xD(){},
xE:function xE(){},
nP:function nP(a,b){this.a=a
this.$ti=b},
zy:function zy(a){this.a=a},
qQ:function qQ(a,b,c,d,e,f,g,h){var _=this
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
yj:function yj(){},
ad:function ad(){},
kG:function kG(a){this.a=a},
de:function de(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iv:function iv(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cS:function cS(a){this.a=a},
n5:function n5(a){this.a=a},
bk:function bk(a){this.a=a},
l1:function l1(a){this.a=a},
mb:function mb(){},
jh:function jh(){},
nO:function nO(a){this.a=a},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(){},
o:function o(){},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
V:function V(){},
j:function j(){},
oj:function oj(){},
ji:function ji(){this.b=this.a=0},
j9:function j9(a){this.a=a},
mA:function mA(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
wN:function wN(a){this.a=a},
k9:function k9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
zx:function zx(a,b){this.a=a
this.b=b},
zw:function zw(a){this.a=a},
wM:function wM(a,b,c){this.a=a
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
nJ:function nJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
lq:function lq(a,b,c){this.a=a
this.b=b
this.$ti=c},
HJ(a){return a},
HA(a){return a},
BL(a){return a},
Hy(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.EE(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Hq(a){return new v.G.Promise(A.bX(new A.rl(a)))},
m7:function m7(a){this.a=a},
rl:function rl(a){this.a=a},
rj:function rj(a){this.a=a},
rk:function rk(a){this.a=a},
A1(a){var s
if(typeof a=="function")throw A.b(A.N("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.JO,a)
s[$.f9()]=a
return s},
cX(a){var s
if(typeof a=="function")throw A.b(A.N("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.JP,a)
s[$.f9()]=a
return s},
bX(a){var s
if(typeof a=="function")throw A.b(A.N("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.JQ,a)
s[$.f9()]=a
return s},
oC(a){var s
if(typeof a=="function")throw A.b(A.N("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.JR,a)
s[$.f9()]=a
return s},
hP(a){var s
if(typeof a=="function")throw A.b(A.N("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.JS,a)
s[$.f9()]=a
return s},
Ca(a){var s
if(typeof a=="function")throw A.b(A.N("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.JT,a)
s[$.f9()]=a
return s},
JO(a){return a.$0()},
JP(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
JQ(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
JR(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
JS(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
JT(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
EW(a){return a==null||A.bJ(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
hX(a){if(A.EW(a))return a
return new A.AH(new A.dZ(t.mp)).$1(a)},
Cm(a,b){return a[b]},
Cf(a,b,c){return a[b].apply(a,c)},
Ln(a,b){var s,r
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
a.then(A.e7(new A.AO(r),1),A.e7(new A.AP(r),1))
return s},
EV(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
oK(a){if(A.EV(a))return a
return new A.Ak(new A.dZ(t.mp)).$1(a)},
AH:function AH(a){this.a=a},
AO:function AO(a){this.a=a},
AP:function AP(a){this.a=a},
Ak:function Ak(a){this.a=a},
FB(a,b){return Math.max(a,b)},
DB(){return B.as},
DC(){return $.B1()},
yQ:function yQ(){},
yR:function yR(a){this.a=a},
GS(a,b,c){return J.CE(a,b,c)},
lo:function lo(){},
a3:function a3(){},
ph:function ph(a){this.a=a},
pi:function pi(a){this.a=a},
pj:function pj(a,b){this.a=a
this.b=b},
pk:function pk(a){this.a=a},
pl:function pl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pm:function pm(a){this.a=a},
lk:function lk(a){this.$ti=a},
iz:function iz(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b){this.a=a
this.$ti=b},
hI:function hI(){},
fZ:function fZ(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
lj:function lj(){},
Ds(){throw A.b(A.Y(u.O))},
ID(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
m6:function m6(){},
n8:function n8(){},
aq(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dS(m,0,null)},
ck:function ck(a){this.a=a},
c2:function c2(){this.a=null},
lw:function lw(){},
rq:function rq(){},
cW(a){var s=new Uint32Array(A.b0(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.od(s,r,a,q,new Uint32Array(16))},
oc:function oc(){},
zc:function zc(){},
od:function od(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kz:function kz(){},
ps:function ps(){},
iI:function iI(a){this.a=a},
jc:function jc(){},
tV:function tV(){},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
vR:function vR(){},
jd:function jd(a,b){this.b=a
this.c=b},
mF:function mF(a){this.a=a},
by(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
ld(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
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
g=B.c.aj(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.aj(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bC(1,31-a))>>>0!==0){e=(e^s)>>>0
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
D_(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cP(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.aj(q,n),!1)
p=J.bN(B.az.ga9(r),0,null)
o=new Uint32Array(4)
A.ld(o,a,b)
A.ld(o,a,p)
return J.bN(B.y.ga9(o),0,null)},
lc:function lc(a,b,c){this.c=a
this.d=b
this.a=c},
qu:function qu(){},
nH:function nH(){},
nI:function nI(){},
oH(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kr()===B.O){a5=A.f3(a5)
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
if($.kr()===B.O){a1=A.f3(a1)
a2=A.f3(a2)
a3=A.f3(a3)
a4=A.f3(a4)}a9.$flags&2&&A.I(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Ff(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge4(),h=B.cJ.h(0,i.gm(0))
if(h==null)throw A.b(A.N("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.CE(B.y.ga9(r),r.byteOffset,i.gm(0))
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
n=B.c.aj(m,k)
if(n===0)j=A.Fb((j<<8|j>>>24)>>>0)^B.cl[B.c.iM(m,k)-1]<<24
else if(o&&n===4)j=A.Fb(j)
r[m]=(j^r[m-k])>>>0}return r},
Fb(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
f3(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qf:function qf(){},
qv:function qv(){},
y7:function y7(){},
mv:function mv(a,b){this.a=a
this.b=b},
kL:function kL(){},
kM:function kM(){},
kN:function kN(){},
kO:function kO(){},
pb:function pb(){},
Fc(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mv("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eg)){s=J.a0(a)
if(B.a.S(s,"TypeError: "))s=B.a.ad(s,11)
a=new A.eg(s,b.b)}return a},
F_(a,b,c){A.D2(A.Fc(a,c),b)},
JN(a,b){return new A.dk(new A.zU(a,b),t.fb)},
hR(a,b,c){return A.KI(a,b,c)},
KI(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
a1.f=new A.A2(e)
a1.r=new A.A3(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a5(c.read(),k),$async$hR)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.E(b)
l=A.ag(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Fc(m,a)
k=l
j=a1.b
if(j>=4)A.v(a1.bE())
if((j&1)!==0){j=a1.gaN()
j.aH(d,k==null?B.P:k)}s=15
return A.a(a1.q(),$async$hR)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.uq()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.v(a1.bE())
if((f&1)!==0)a1.gaN().aA(g)}g=a1.b
s=((g&1)!==0?(a1.gaN().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aH(new A.t($.C,j),i):g).a,$async$hR)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hR,r)},
kT:function kT(a){this.b=!1
this.c=a},
pe:function pe(a){this.a=a},
zU:function zU(a,b){this.a=a
this.b=b},
A2:function A2(a){this.a=a},
A3:function A3(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a},
pg:function pg(a){this.a=a},
CW(a,b){return new A.eg(a,b)},
eg:function eg(a,b){this.a=a
this.b=b},
m_:function m_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
HU(a,b){var s=t.N,r=A.k([],t.e8),q=$.Cu()
if(!q.b.test(a))A.v(A.aA(a,"method","Not a valid method"))
return new A.uf(A.u(s,s),r,a,b,A.dH(new A.kN(),new A.kO(),s,s))},
uf:function uf(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
ug:function ug(a,b){this.a=a
this.b=b},
If(a,b){var s=new Uint8Array(0),r=$.Cu()
if(!r.b.test(a))A.v(A.aA(a,"method","Not a valid method"))
r=t.N
return new A.vI(s,a,b,A.dH(new A.kN(),new A.kO(),r,r))},
vI:function vI(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jl:function jl(){},
mS:function mS(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
GT(a){return a.toLowerCase()},
ia:function ia(a,b,c){this.a=a
this.c=b
this.$ti=c},
HM(a){return A.Mu("media type",a,new A.tZ(a))},
Bu(a,b,c){var s=t.N
if(c==null)s=A.u(s,s)
else{s=new A.ia(A.Lo(),A.u(s,t.af),t.fo)
s.C(0,c)}return new A.fA(a.toLowerCase(),b.toLowerCase(),new A.cR(s,t.ph))},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
tZ:function tZ(a){this.a=a},
u0:function u0(a){this.a=a},
u_:function u_(){},
LL(a){var s
a.mK($.Gs(),"quoted string")
s=a.gkf().h(0,0)
return A.FO(B.a.A(s,1,s.length-1),$.Gr(),new A.Au(),null)},
Au:function Au(){},
H7(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2="id",a3="spec",a4="field",a5="store"
switch(a6){case"open":s=a7.h(0,"stores")
r=a7.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.Z("Malformed open payload."))
q=A.k([],t.d)
for(p=J.D(s);p.k();)q.push(A.CZ(p.gn(),"stores"))
p=t.N
p=A.u(p,p)
for(o=r.gaa(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string"&&typeof n.b=="string")p.j(0,m,A.F(n.b))}return new A.ma(q,p)
case"capabilities":return B.bA
case"health":return B.bD
case"close":return B.bB
case"get":return new A.lv(A.bg(a7),A.dx(a7,a2),A.cD(a7))
case"rows":l=a7.h(0,"ids")
if(!t.j.b(l))throw A.b(A.Z("Malformed rows payload."))
q=A.bg(a7)
p=A.k([],t.s)
for(o=J.D(l);o.k();)p.push(A.F(o.gn()))
return new A.my(q,p,A.cD(a7))
case"mutate":return new A.m0(A.bg(a7),A.K0(a7.h(0,"mutation")),A.cD(a7))
case"query":return new A.mq(A.bg(a7),A.eD(a7.h(0,a3)),A.cD(a7))
case"count":return new A.l9(A.bg(a7),A.eD(a7.h(0,a3)),A.cD(a7))
case"countDistinct":return new A.l8(A.bg(a7),A.dx(a7,a4),A.eD(a7.h(0,a3)),A.cD(a7))
case"distinct":q=A.bg(a7)
p=A.dx(a7,a4)
o=a7.h(0,a3)
return new A.ll(q,p,A.eD(o==null?B.n:o),A.cD(a7))
case"ids":return new A.lA(A.bg(a7),A.eD(a7.h(0,a3)),A.cD(a7))
case"aggregate":k=a7.h(0,"fn")
j=A.Bm(new A.aj(B.cu,new A.qa(k),t.gx))
if(j==null)throw A.b(A.Z("Unknown aggregate: "+A.r(k)))
return new A.kA(A.bg(a7),j,A.dx(a7,a4),A.eD(a7.h(0,a3)),A.cD(a7))
case"explain":return new A.lr(A.bg(a7),A.eD(a7.h(0,a3)),A.cD(a7))
case"search":return new A.mE(A.bg(a7),A.Im(a7.h(0,a3)),A.cD(a7))
case"txBegin":i=a7.h(0,"readOnly")
if(!A.bJ(i))throw A.b(A.Z("Malformed txBegin payload."))
h=a7.h(0,"durability")
g=A.Bm(new A.aj(B.cH,new A.qb(h),t.mE))
if(typeof h=="string"&&g==null)throw A.b(A.Z("Unknown tx durability: "+h))
return new A.mZ(i,g==null?B.bl:g)
case"txCommit":case"txRollback":f=a7.h(0,"session")
if(typeof f!="string")throw A.b(A.Z("Malformed tx payload."))
return a6==="txCommit"?new A.n_(f):new A.n1(f)
case"txSavepoint":case"txRollbackTo":case"txRelease":f=a7.h(0,"session")
e=a7.h(0,"name")
if(typeof f!="string"||typeof e!="string")throw A.b(A.Z("Malformed savepoint payload."))
A:{if("txSavepoint"===a6){q=new A.n3(f,e)
break A}if("txRollbackTo"===a6){q=new A.n2(f,e)
break A}q=new A.n0(f,e)
break A}return q
case"watchOne":return new A.ni(A.bg(a7),A.dx(a7,a2))
case"watch":return new A.nj(A.bg(a7),A.eD(a7.h(0,a3)))
case"watchCancel":d=a7.h(0,"subscription")
if(typeof d!="string")throw A.b(A.Z("Malformed watchCancel payload."))
return new A.nh(d)
case"analyze":if(typeof a7.h(0,a5)=="string"){q=a7.h(0,a5)
q.toString
A.F(q)}else q=a1
return new A.kC(q)
case"walCheckpoint":return B.bQ
case"vacuum":return B.bP
case"pruneOutbox":return B.bO
case"compact":c=a7.h(0,a5)
b=a7.h(0,"olderThanMs")
if(typeof c!="string"||!A.ax(b))throw A.b(A.Z("Malformed compact payload."))
return new A.l0(c,b)
case"runMaintenance":a=a7.h(0,"compactOlderThanMs")
if(!A.ax(a))throw A.b(A.Z("Malformed runMaintenance payload."))
return new A.mz(a)
case"conflictsList":c=a7.h(0,a5)
return new A.l5(typeof c=="string"?c:a1)
case"conflictGet":return new A.l4(A.bg(a7),A.dx(a7,a2))
case"conflictsResolve":a0=a7.h(0,"merged")
if(!t.f.b(a0))throw A.b(A.Z("Malformed conflictsResolve payload."))
return new A.mw(A.bg(a7),A.dx(a7,a2),A.CZ(a0,"merged"))
case"conflictsAcceptLocal":return new A.kx(A.bg(a7),A.dx(a7,a2))
case"conflictsAcceptRemote":return new A.ky(A.bg(a7),A.dx(a7,a2))
case"conflictsWatch":c=a7.h(0,a5)
return new A.l7(typeof c=="string"?c:a1)
default:return a1}},
bg(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.Z("Malformed store name."))
return s},
dx(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.Z('Malformed field "'+b+'".'))
return s},
cD(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.Z("Malformed session id."))
return s},
CZ(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.Z('Malformed field "'+b+'".'))},
Kw(a){var s
A:{if(a instanceof A.eK){s="ValidationException"
break A}if(a instanceof A.eJ){s="UniqueConstraintException"
break A}if(a instanceof A.ez){s="NotNullConstraintException"
break A}if(a instanceof A.fg){s="CheckConstraintException"
break A}if(a instanceof A.fL){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fv){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hd){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fx){s="FtsUnavailableError"
break A}if(a instanceof A.eE){s="SchemaRegistrationError"
break A}if(a instanceof A.fX){s="SchemaTooNewError"
break A}if(a instanceof A.cM){s="StorageError"
break A}if(a instanceof A.fT){s="RecordNotFoundException"
break A}if(a instanceof A.h2){s="StaleCursorError"
break A}if(a instanceof A.fD){s="MissingLimitError"
break A}if(a instanceof A.fk){s="ConflictBlockedError"
break A}if(a instanceof A.el){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.fS){s="ReadOnlyTxError"
break A}throw A.b(A.fR(u.P))}return s},
K7(a){var s
A:{if(a instanceof A.iP){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.iS){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iQ){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iT){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iM){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iN){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iL){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iR){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iO){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.fR(u.P))}return s},
K0(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.Z("Malformed mutation payload."))
s=t.N
r=a.aU(0,new A.A_(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iP(A.oG(r.h(0,n),n))
case"upsert":return new A.iS(A.oG(r.h(0,n),n))
case"putAll":return new A.iQ(A.Fa(r.h(0,m),m))
case"upsertAll":return new A.iT(A.Fa(r.h(0,m),m))
case"patch":return new A.iM(A.A4(r.h(0,l),l),A.oG(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.Z("Malformed patchAll patches."))
k=A.u(s,t.G)
for(s=p.gaa(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.a0(o.a),A.oG(o.b,"patches"))}return new A.iN(k)
case"archive":return new A.iL(A.A4(r.h(0,l),l))
case"restore":return new A.iR(A.A4(r.h(0,l),l))
case"purge":return new A.iO(A.A4(r.h(0,l),l))
default:throw A.b(A.Z("Unknown mutation kind: "+A.r(q)))}},
A4(a,b){if(typeof a=="string")return a
throw A.b(A.Z('Malformed mutation field "'+b+'".'))},
oG(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.Z('Malformed mutation field "'+b+'".'))},
Fa(a,b){var s,r
if(t.j.b(a)){s=A.k([],t.d)
for(r=J.D(a);r.k();)s.push(A.oG(r.gn(),b))
return s}throw A.b(A.Z('Malformed mutation field "'+b+'".'))},
eD(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="predicate",a=null,a0=t.f
if(!a0.b(a1))throw A.b(A.Z("Malformed query spec."))
s=a1.aU(0,new A.vA(),t.N,t.z)
r=new A.vB()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.k([],t.ae)
i=t.j
if(i.b(p))for(h=J.D(p);h.k();)j.push(r.$1(h.gn()))
a0=a0.b(s.h(0,b))?A.Bw(s.h(0,b)):a
h=A.k([],t.gc)
if(i.b(o))for(g=J.D(o);g.k();)h.push(A.Ib(g.gn()))
g=A.ax(m)?m:a
f=J.w(s.h(0,"all"),!0)
if(i.b(n)){i=A.k([],t.s)
for(e=J.D(n);e.k();)i.push(J.a0(e.gn()))}else i=a
e=J.w(s.h(0,"includeArchived"),!0)
d=J.w(s.h(0,"includeHidden"),!0)
c=typeof l=="string"?l:a
return new A.vz(k,j,a0,h,g,f,i,e,d,c,J.w(s.h(0,"backward"),!0))},
DA(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.Z(l))
s=a.aU(0,new A.vw(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.Z(l))
p=A.Bm(new A.aj(B.cn,new A.vx(q),t.mz))
if(p==null)throw A.b(A.Z("Unknown query operator: "+q))
o=A.oL(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.D(n.a(s.h(0,"values")));n.k();)m.push(A.oL(n.gn()))
n=m}else n=null
return new A.eC(r,p,o,n)},
Bw(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.Z("Malformed predicate tree."))
s=a.aU(0,new A.uZ(),t.N,t.z)
r=new A.uY()
switch(s.h(0,"kind")){case"leaf":return new A.iF(A.DA(s))
case"not":return new A.j_(A.Bw(s.h(0,"child")))
case"all":return new A.i4(r.$1(s.h(0,q)))
case"any":return new A.i5(r.$1(s.h(0,q)))
default:throw A.b(A.Z("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
Ib(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.Z(q))
s=a.aU(0,new A.vy(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.Z(q))
return new A.mp(r,J.w(s.h(0,"desc"),!0))},
Im(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.Z("Malformed search spec."))
s=a.aU(0,new A.vQ(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.Z("Malformed search term."))
q=s.h(0,"limit")
p=A.ax(q)?q:null
return new A.vP(r,p,J.w(s.h(0,"all"),!0),J.w(s.h(0,"includeArchived"),!0),J.w(s.h(0,"includeHidden"),!0))},
H8(a){return new A.fo(a)},
Hd(a){return new A.fp(a)},
Hv(a){return new A.fy(a)},
GO(a){return new A.fc(a)},
Hj(a){return new A.ft(a)},
oM(a){var s,r,q
if(a instanceof A.aM)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gf5().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.oM(r.gn()))
return s}if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),A.oM(q.b))}return s}if(a==null||A.bJ(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.Z("Value of type "+J.bO(a).l(0)+" is not wire-safe."))},
oL(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value."
if(t.f.b(a)){r=a.h(0,"__lp_t")
q=J.dq(r)
if(q.R(r,"datetime")){s=a.h(0,"v")
if(A.ax(s))return new A.aM(A.li(s,0,!0),0,!0)
throw A.b(A.Z("Malformed datetime wire value."))}if(q.R(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{q=B.ar.v(s)
return q}catch(p){if(t.Y.b(A.E(p)))throw A.b(A.Z(l))
else throw p}throw A.b(A.Z(l))}q=A.u(t.N,t.X)
for(o=a.gaa(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string")q.j(0,m,A.oL(n.b))}return q}if(t.j.b(a)){q=[]
for(o=J.D(a);o.k();)q.push(A.oL(o.gn()))
return q}return a},
Z(a){return new A.jt(a)},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
l3:function l3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
cZ:function cZ(){},
l_:function l_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l6:function l6(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
uh:function uh(){},
iP:function iP(a){this.a=a},
iS:function iS(a){this.a=a},
iQ:function iQ(a){this.a=a},
iT:function iT(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a){this.a=a},
iL:function iL(a){this.a=a},
iR:function iR(a){this.a=a},
iO:function iO(a){this.a=a},
A_:function A_(){},
vz:function vz(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
vA:function vA(){},
vB:function vB(){},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vw:function vw(){},
vx:function vx(a){this.a=a},
aW:function aW(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
uZ:function uZ(){},
uY:function uY(){},
iF:function iF(a){this.a=a},
j_:function j_(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
mp:function mp(a,b){this.a=a
this.b=b},
vy:function vy(){},
cA:function cA(a,b){this.a=a
this.b=b},
vP:function vP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vQ:function vQ(){},
mu:function mu(){},
ma:function ma(a,b){this.a=a
this.b=b},
kU:function kU(){},
lx:function lx(){},
kY:function kY(){},
lv:function lv(a,b,c){this.a=a
this.b=b
this.c=c},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function mq(a,b,c){this.a=a
this.b=b
this.c=c},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function l8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lA:function lA(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
mE:function mE(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b){this.a=a
this.b=b},
n_:function n_(a){this.a=a},
n1:function n1(a){this.a=a},
n3:function n3(a,b){this.a=a
this.b=b},
n2:function n2(a,b){this.a=a
this.b=b},
n0:function n0(a,b){this.a=a
this.b=b},
ni:function ni(a,b){this.a=a
this.b=b},
nj:function nj(a,b){this.a=a
this.b=b},
nh:function nh(a){this.a=a},
kC:function kC(a){this.a=a},
ng:function ng(){},
ne:function ne(){},
mm:function mm(){},
l0:function l0(a,b){this.a=a
this.b=b},
mz:function mz(a){this.a=a},
l5:function l5(a){this.a=a},
l4:function l4(a,b){this.a=a
this.b=b},
mw:function mw(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(a,b){this.a=a
this.b=b},
ky:function ky(a,b){this.a=a
this.b=b},
l7:function l7(a){this.a=a},
aJ:function aJ(){},
fI:function fI(){},
kV:function kV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ly:function ly(a,b){this.a=a
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
fc:function fc(a){this.a=a},
ft:function ft(a){this.a=a},
fY:function fY(a){this.a=a},
mD:function mD(a,b){this.a=a
this.b=b},
fm:function fm(a){this.a=a},
fl:function fl(a){this.a=a},
h9:function h9(a){this.a=a},
hh:function hh(a){this.a=a},
fN:function fN(a){this.a=a},
fj:function fj(a){this.a=a},
jt:function jt(a){this.a=a},
ai(a){var s,r=new A.a2("")
A.cg(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ct(a){var s,r,q
for(s=new A.mA(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
JW(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c7(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
cg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bJ(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.ax(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.JW(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a6(b,h)
a.a+=r
return A.Ct(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.L(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cg(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.k([],t.l5)
for(s=J.D(b.gK());s.k();){n=s.gn()
r=J.a0(n)
if(B.b.bM(o,new A.AZ(r)))throw A.b(A.N('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a4(r,n))}B.b.ck(o,new A.B_())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.q)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a6(k.a,h)
a.a+=j
i=A.Ct(j)
a.a+=":"
q=q+i+1+A.cg(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.N("Cannot canonicalize value of type "+J.bO(b).l(0),h))},
AZ:function AZ(a){this.a=a},
B_:function B_(){},
Iq(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).eb(a)
if(p==null)return B.d8
s=p.b
r=s[1]
r.toString
r=A.aG(r)
q=s[2]
q.toString
q=A.aG(q)
s=s[3]
s=A.j4(s==null?"":s,null)
return new A.eX(r,q,s==null?0:s)},
DI(a,b,c){var s,r=A.Iq(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eH(a,b){return A.Ir(a,b)},
Ir(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eH=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b0("SELECT sqlite_version() AS v"),$async$eH)
case 3:g=d.S(c.ci(a2),"v")
g.toString
A.F(g)
k=t.x
d=A
c=A
b=J
s=4
return A.a(a.b0("PRAGMA compile_options"),$async$eH)
case 4:j=d.O(new c.bH(b.be(a2,new A.w_(),t.X),k),k.i("o.E"))
n=B.b.bM(j,new A.w0())
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
return A.a(a.b0("PRAGMA journal_mode"),$async$eH)
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
case 18:case 14:h=A.DI(g,3,37)
k=k&&J.w(m,"wal")
q=new A.mP(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eH,r)},
mi:function mi(a,b){this.a=a
this.b=b},
mP:function mP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w_:function w_(){},
w0:function w0(){},
ib:function ib(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a1:function a1(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
pq:function pq(){},
pr:function pr(){},
CK(a){return new Uint8Array(A.b0(a))},
r2:function r2(){},
oZ:function oZ(a,b,c){this.b=a
this.c=b
this.d=c},
Cl(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cc
if(r===B.I){r=a.f
r.toString
r=!B.b.F(r,b)}else r=!1
if(r)return B.ci
return s
case 1:case 4:return!A.ax(b)?B.cd:s
case 2:return typeof b!="number"?B.ce:s
case 3:return!A.bJ(b)?B.cf:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cg:s
case 7:return!t.j.b(b)?B.ch:s}},
dp(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gd9(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.C9(n,a0.h(0,l),new Uint8Array(A.b0(B.e.v(q+l+"\x00"+e))),m))}k=A.u(h,g)
for(h=new A.aN(a0,A.n(a0).i("aN<1,2>")).gt(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.F(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ai(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
Fs(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.C9(b,c,new Uint8Array(A.b0(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
L1(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gd9()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.C9(n,g.h(0,l),new Uint8Array(A.b0(B.e.v(q+l+"\x00"+f))),m))}k=A.u(t.N,t.X)
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
f.j(0,n,A.EL(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.w(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.av(k,null)
if(t.f.b(j))f.C(0,A.b8(j,h,g))}return f},
LF(a,b,c,d){var s,r=A.k([],t.d)
for(s=J.D(b);s.k();)r.push(A.cf(a,s.gn(),c,d))
return r},
LG(a,b,c,d,e){var s,r,q,p,o,n,m=A.k([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.q)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a4(p,a.f9(p)))}s=A.k([],t.d)
for(o=J.D(b),n=a.a;o.k();)s.push(A.K_(o.gn(),m,r,c,e,n))
return s},
K_(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.EL(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.w(a.h(0,m),1))
return l},
EL(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.x('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.jj("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bO(b).l(0)+"."))
r=B.k.f0(s.uE(B.ar.v(b),new Uint8Array(A.b0(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.R===q||B.T===q){p=A.aG(r)
break A}if(B.S===q){p=A.LJ(r)
break A}if(B.U===q||B.V===q){p=B.h.av(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.w(b,1)
if(p===B.U||p===B.V){if(typeof b!="string")throw A.b(A.jj("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bO(b).l(0)+"."))
return B.h.av(b,o)}return b},
C9(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.x('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.w(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a0(b)
break
case 6:case 7:s=A.ai(b)
break
default:A.F(b)
s=b}r=d.vi(B.e.v(s),c)
return B.aq.gf5().v(r)}switch(a.b.a){case 3:return J.w(b,!0)?1:0
case 6:case 7:return A.ai(b)
default:return b}},
bd(a,b){var s,r,q,p,o,n="archived",m=a.gd9(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.q)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.w(o,!0):o)}for(l=b.gaa(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.F(0,p))continue
k.j(0,p,s.b)}if(J.w(b.h(0,n),!0))k.j(0,n,!0)
return k},
Ad(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gd9(),i=A.k([],t.iE)
i.push(new A.a4("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a4(o,p.b===B.B?J.w(n,!0):n))}for(s=c.gaa(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.F(0,o))continue
i.push(new A.a4(o,r.b))}if(J.w(c.h(0,"archived"),!0))i.push(B.d6)
B.b.ck(i,new A.Ae())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.q)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a6(r.a,null)
a.a+=k
o=A.Ct(k)
a.a+=":"
m=m+o+1+A.cg(a,r.b)}a.a+="}"
return m+1},
d1:function d1(a,b){this.a=a
this.b=b},
Ae:function Ae(){},
D1(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
l2:function l2(a,b){this.a=a
this.b=b},
ij:function ij(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
r_:function r_(){},
qZ:function qZ(){},
r0:function r0(){},
qY:function qY(a){this.a=a},
Hc(a){return'"'+A.y(a,'"','""')+'"'},
Hb(a,b){var s,r,q,p=a.a,o=J.L(p),n=b.a,m=J.L(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.w(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
pO:function pO(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ii:function ii(a){this.a=a},
qX:function qX(a){this.a=a},
qW:function qW(){},
qV:function qV(a){this.a=a},
qU:function qU(a,b){this.a=a
this.b=b},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
qT:function qT(){},
aw(a,b){return new A.eK(b,a)},
jj(a){return new A.cM(a)},
BE(a){return new A.fT(a)},
DF(a){return new A.fX(a)},
aQ(a){return new A.eE(a)},
rg(a){return new A.fx(a)},
BJ(a){return new A.h2(a)},
Dp(a){return new A.fD(a)},
CY(a){return new A.fk(a)},
Bc(a){return new A.el(a)},
FS(a,b){var s,r="UNIQUE constraint failed",q=J.a0(a),p=a instanceof A.c7,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.F(q,"PRIMARY KEY")&&!B.a.F(q,r)
else p=!0
if(p)return new A.fL("PRIMARY KEY constraint violated.")
if(o===2067||B.a.F(q,r)){s=A.EP(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.eJ(s,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.F(q,"NOT NULL constraint failed")){p=A.EP(q,"NOT NULL constraint failed:")
return new A.ez(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.F(q,"CHECK constraint failed")||o===275||n===275)return new A.fg("CHECK constraint violated.")
if(B.a.F(q,"FOREIGN KEY")||o===787||n===787)return new A.fv("FOREIGN KEY constraint violated.")
if(B.a.F(q,"database or disk is full"))return new A.cM("Database full: "+A.r(a))
return new A.cM("SQLite error: "+A.r(a))},
EP(a,b){var s,r,q,p,o,n,m=B.a.bO(a,b)
if(m<0)return"?"
s=B.a.ad(a,m+b.length)
r=s.length
q=B.a.bO(s,",")
if(q>=0)r=q
p=B.a.bO(s,"(")
s=B.a.ci(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.dh(s,".")
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
fg:function fg(a){this.a=a},
fL:function fL(a){this.a=a},
fv:function fv(a){this.a=a},
cM:function cM(a){this.a=a},
fT:function fT(a){this.a=a},
fX:function fX(a){this.a=a},
eE:function eE(a){this.a=a},
hd:function hd(a){this.a=a},
fx:function fx(a){this.a=a},
h2:function h2(a){this.a=a},
fD:function fD(a){this.a=a},
fk:function fk(a){this.a=a},
el:function el(a){this.a=a},
fS:function fS(a){this.a=a},
Mf(a,b,c){a.uw(!0,new A.AT(c),"lp_norm_"+b)},
Fx(a,b,c,d){var s,r,q='""',p=b.a
if(p.gE(p))return c+"."+('"'+A.y(d,'"',q)+'"')
s='"'+A.y(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.y(c,'"',q)+'".'+s
return'"'+A.y("lp_norm_"+a,'"',q)+'"('+r+")"},
AT:function AT(a){this.a=a},
K3(){return Date.now()},
oB(a){var s,r,q
if(t.G.b(a)){s=A.u(t.N,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.oB(q.b))}return s}if(t.f.b(a)){s=A.u(t.z,t.X)
for(r=a.gaa(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.oB(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.oB(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b0(a))
return a},
d0(a,b,c,d,e,f,g,h){var s=null,r=B.D,q=null,p=null
return A.HF(a,b,c,d,e,f,g,h)},
HF(b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d0=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a3=null
a4=B.D
a5=null
a6=null
a7=null
a7=b1
p=4
s=7
return A.a(A.cG(a7,b6),$async$d0)
case 7:s=8
return A.a(A.eH(a7,b6),$async$d0)
case 8:n=b9
i=0
case 9:if(!(i<3)){s=11
break}m=B.cr[i]
s=12
return A.a(a7.O(m),$async$d0)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cI[i]
s=16
return A.a(a7.O(l),$async$d0)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a5
if(f==null)f=A.M4()
e=a6
d=a4
c=t.N
b=t.ls
a=new A.mg()
a0=new A.lN(b5,h,g,a,b4,b2,e,b0,b3,a3,f,A.u(c,t.nv),new A.wE(A.u(c,b),A.u(b,t.nL)),d,new A.pp(A.dQ(null,null,t.iv),A.dQ(null,null,t.oZ)))
b=new A.xk(A.bj(null,t.H),a.gwO())
a0.x=b
d=a0.a=new A.tB(a0,h,g,b,a,e,d)
a0.b=new A.wt(d)
a0.c=new A.ui()
a0.d=new A.vH()
d=A.HD(d)
a0.e!==$&&A.cy()
a0.e=d
d=$.B1()
a0.CW!==$&&A.cy()
a0.CW=new A.uu(a0,d)
a0.cx!==$&&A.cy()
a0.cx=new A.up(a0,d)
a0.cy!==$&&A.cy()
a0.cy=new A.q0(a0)
a0.db!==$&&A.cy()
a0.db=new A.tM(a0,b0)
k=a0
s=17
return A.a(A.lO(a7,k.ch),$async$d0)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aQ(j),$async$d0)
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
return A.a(a7.q(),$async$d0)
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
return A.f($async$d0,r)},
cG(a,b){return A.HE(a,b)},
HE(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
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
lO(a,b){var s=0,r=A.h(t.H),q,p
var $async$lO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.cg("lp_migrations","version = ?",[1]),$async$lO)
case 3:if(p.ea(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$lO)
case 4:case 1:return A.e(q,r)}})
return A.f($async$lO,r)},
HD(a){var s=t.N
s=new A.t_(a,A.dQ(null,null,t.fq),A.u(s,t.g8),A.u(s,t.dz))
s.oB(a)
return s},
AM(a){var s,r,q,p
A:{if(a instanceof A.iF){s=A.KF(a.a)
break A}if(a instanceof A.j_){s=new A.c4(A.AM(a.a))
break A}if(a instanceof A.i4){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.AM(r[p]))
s=new A.dt(s)
break A}if(a instanceof A.i5){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.AM(r[p]))
s=new A.cY(s)
break A}throw A.b(A.fR(u.P))}return s},
KF(a){var s,r,q,p="isNull",o=a.a
switch(a.b.a){case 0:s=a.c
if(s==null)return new A.a9(o,p,B.m)
return new A.a9(o,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.N("neq(null) matches no rows; use isNotNull.",null))
return new A.c4(new A.a9(o,"eq",[s]))
case 2:return new A.a9(o,"gt",[a.c])
case 3:return new A.a9(o,"gte",[a.c])
case 4:return new A.a9(o,"lt",[a.c])
case 5:return new A.a9(o,"lte",[a.c])
case 6:r=a.d
return new A.a9(o,"inValues",r==null?B.m:r)
case 7:q=a.d
if(q==null)q=B.m
if(q.length!==2)throw A.b(A.N("between requires exactly two values.",null))
return new A.a9(o,"between",q)
case 8:return new A.a9(o,"startsWith",[a.c])
case 9:return new A.a9(o,"endsWith",[a.c])
case 10:return new A.a9(o,"contains",[a.c])
case 11:return new A.a9(o,p,B.m)
case 12:return new A.c4(new A.a9(o,p,B.m))}},
tB:function tB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.as=g},
lm:function lm(a,b){this.a=a
this.b=b},
mQ:function mQ(a,b,c){this.a=a
this.c=b
this.e=c},
uW:function uW(a){this.a=a},
lN:function lN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
tC:function tC(a,b){this.a=a
this.b=b},
tF:function tF(a){this.a=a},
tE:function tE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tD:function tD(){},
nF:function nF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
y1:function y1(a,b){this.a=a
this.b=b},
y0:function y0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xZ:function xZ(a,b){this.a=a
this.b=b},
y_:function y_(a,b){this.a=a
this.b=b},
xY:function xY(a){this.a=a},
hn:function hn(a,b){this.a=a
this.b=b},
vH:function vH(){},
wt:function wt(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
wA:function wA(a){this.a=a},
ww:function ww(a){this.a=a},
wz:function wz(a,b,c){this.a=a
this.b=b
this.c=c},
wy:function wy(a,b,c){this.a=a
this.b=b
this.c=c},
wx:function wx(a,b,c){this.a=a
this.b=b
this.c=c},
wv:function wv(a){this.a=a},
wu:function wu(){},
eZ:function eZ(){},
om:function om(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=!1
_.r=null
_.w=$},
hC:function hC(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
t_:function t_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=0},
te:function te(a){this.a=a},
tf:function tf(){},
tg:function tg(a,b){this.a=a
this.b=b},
th:function th(){},
ts:function ts(a,b){this.a=a
this.b=b},
tu:function tu(){},
tv:function tv(a,b){this.a=a
this.b=b},
tw:function tw(a,b){this.a=a
this.b=b},
tx:function tx(a,b){this.a=a
this.b=b},
ty:function ty(a,b){this.a=a
this.b=b},
tz:function tz(a,b){this.a=a
this.b=b},
tA:function tA(a,b){this.a=a
this.b=b},
ti:function ti(){},
tj:function tj(){},
tk:function tk(){},
tl:function tl(){},
tm:function tm(){},
tn:function tn(){},
to:function to(a){this.a=a},
tp:function tp(a){this.a=a},
tq:function tq(){},
tr:function tr(){},
tt:function tt(){},
t2:function t2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t3:function t3(){},
t4:function t4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t5:function t5(){},
t8:function t8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t9:function t9(){},
t1:function t1(a){this.a=a},
t0:function t0(a){this.a=a},
t7:function t7(a){this.a=a},
t6:function t6(a){this.a=a},
tb:function tb(a,b){this.a=a
this.b=b},
tc:function tc(a,b,c){this.a=a
this.b=b
this.c=c},
td:function td(a,b){this.a=a
this.b=b},
ta:function ta(a,b){this.a=a
this.b=b},
nX:function nX(){},
fB(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a_(h).i("aj<1>")
f=A.O(new A.aj(h,new A.uc(c,b),g),g.i("o.E"))
B.b.ck(f,new A.ud())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.ch,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aQ('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.ji()
$.ks()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aP(a,b,m),$async$fB)
case 8:s=6
break
case 7:s=9
return A.a(A.lX(a,b,m),$async$fB)
case 9:case 6:if(j.b==null)j.b=$.mk.$0()
s=10
return A.a(A.fC(i,j.gmG(),o,q+l,p,l),$async$fB)
case 10:case 3:f.length===h||(0,A.q)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aQ('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fB)
case 11:return A.e(null,r)}})
return A.f($async$fB,r)},
fC(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fC=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b0("SELECT MAX(version) AS m FROM lp_migrations"),$async$fC)
case 2:q=p.f6(h)
if(q==null)q=0
s=3
return A.a(a.aC(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fC)
case 3:return A.e(null,r)}})
return A.f($async$fC,r)},
lX(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$lX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.x
h=A
g=A
f=J
s=2
return A.a(l.b0("PRAGMA table_info("+('"'+A.y(k,'"','""')+'"')+")"),$async$lX)
case 2:i=h.d2(new g.bH(f.be(e,new A.u9(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Cw()
if(!m.b.test(n))A.v(A.aQ('Field "'+n+u.Z))
if(o.c)throw A.b(A.aQ('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.F(0,n)){s=4
break}m=A.y(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.y(n,'"','""')+'"')+" "+o.gkQ()),$async$lX)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.q)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$lX,r)},
aP(a,b,c){return A.HQ(a,b,c)},
HQ(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aP=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.Bc('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.ii(b0.w).jN(b1)
j=A.HT(b0.f,a2,a3)
p=4
s=7
return A.a(A.ua(a7,l),$async$aP)
case 7:i=b4
s=8
return A.a(b0.hI(j),$async$aP)
case 8:h=b4
if(J.w(i,"done")&&h){a3=A.Bc('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.lZ(a7,m),$async$aP)
case 9:g=b4
s=10
return A.a(A.lZ(a7,n),$async$aP)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.y(m,'"','""')+'"')),$async$aP)
case 13:a0=a9.f6(b4)
e=a0==null?0:a0
a3=A.y(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 14:s=15
return A.a(A.d5(b0,a7,b1,k,l,e),$async$aP)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.y(m,'"','""')+'"')),$async$aP)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.hQ(j),$async$aP)
case 19:case 18:s=20
return A.a(A.lY(a7,l,"rebuilding"),$async$aP)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.y(j,"'","''")+"'"),$async$aP)
case 21:a3=k.b
a4=A.y(n,'"','""')
d=B.a.kv(a3,'"'+a4+'"','"'+A.y(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aP)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ah("SELECT rowid, * FROM "+('"'+A.y(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aP)
case 25:b=b4
if(J.bA(b)){s=24
break}s=26
return A.a(a7.a0(new A.ub(b,b1,b0,b2,m),a3),$async$aP)
case 26:a4=J.S(J.oX(b),"rowid")
a4.toString
c=A.an(a4)
if(J.ak(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 27:a5=a9.f6(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.y(m,'"','""')+'"')),$async$aP)
case 28:e=a9.f6(b4)
a0=e==null?0:e
if(!J.w(a,a0)){a3=A.x('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 29:a3=A.y(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.y(n,'"','""')+'"')),$async$aP)
case 30:s=31
return A.a(A.d5(b0,a7,b1,k,l,a),$async$aP)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.E(a8)
if(a3 instanceof A.el)throw a8
else if(a3 instanceof A.c7){a1=a3
throw A.b(A.Bc('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
d5(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l
var $async$d5=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.O(q[o]),$async$d5)
case 5:case 3:q.length===p||(0,A.q)(q),++o
s=2
break
case 4:q=c.w!=null
s=q?6:7
break
case 6:s=8
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.y(c.a+"_fts",'"','""')+'"')),$async$d5)
case 8:case 7:p=d.d,n=p.length,o=0
case 9:if(!(o<p.length)){s=11
break}s=12
return A.a(b.O(p[o]),$async$d5)
case 12:case 10:p.length===n||(0,A.q)(p),++o
s=9
break
case 11:s=q?13:14
break
case 13:q=c.a+"_fts"
p=A.y(q,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+p+'"')+"("+('"'+A.y(q,'"','""')+'"')+") VALUES('rebuild')"),$async$d5)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.b0("SELECT COUNT(*) c FROM "+('"'+A.y(q,'"','""')+'"')),$async$d5)
case 16:m=l.f6(h)
if((m==null?0:m)!==f)throw A.b(A.x('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.lY(b,e,"done"),$async$d5)
case 17:return A.e(null,r)}})
return A.f($async$d5,r)},
lZ(a,b){var s=0,r=A.h(t.y),q,p
var $async$lZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ah("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$lZ)
case 3:q=p.ea(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lZ,r)},
HT(a,b,c){var s=null,r=$.i2(),q=r.uK(a),p=A.dO(a,r.a).gjK()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mX(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
HS(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.aw('Field "'+s+'" is required.',s))}if(b==null)return
r=A.Cl(a,b)
if(r!=null)throw A.b(A.aw(A.HP(a,b,r),a.a))},
HR(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
A.HS(p,b.h(0,p.a))}},
HP(a,b,c){var s,r=a.a,q=J.bO(b)
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
ua(a,b){var s=0,r=A.h(t.v),q,p,o
var $async$ua=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.n6("lp_meta",A.k(["v"],t.s),"k = ?",[b]),$async$ua)
case 3:p=d
o=J.L(p)
q=o.gE(p)?null:A.a6(J.S(o.gG(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ua,r)},
lY(a,b,c){var s=0,r=A.h(t.H)
var $async$lY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cb(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.Q),$async$lY)
case 2:return A.e(null,r)}})
return A.f($async$lY,r)},
K4(){return Date.now()},
uc:function uc(a,b){this.a=a
this.b=b},
ud:function ud(){},
u9:function u9(){},
ub:function ub(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mg:function mg(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
kl(a){var s=A.y(a,"\\","\\\\")
s=A.y(s,"%","\\%")
return A.y(s,"_","\\_")},
C8(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.a9){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.v(A.aA(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aA(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aA(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.aA(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c4){A.C8(a.a)
break A}p=a instanceof A.dt
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cY
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aA(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.q)(n),++m)A.C8(n[m])}break A}},
zX(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.a9)return A.EJ(a,!1,b)
if(a instanceof A.c4){s=a.a
r=A.zX(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cY||s instanceof A.c4){s=new A.a4("NOT "+q,p)
break A}s=new A.a4("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dt){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){l=A.zX(s[m],!1)
o.push(l.a)
B.b.C(p,l.b)}k=B.b.B(o," AND ")
return new A.a4(b?k:"("+k+")",p)}if(a instanceof A.cY){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){j=A.JY(s[m])
o.push(j.a)
B.b.C(p,j.b)}return new A.a4("("+B.b.B(o," OR ")+")",p)}throw A.b(A.fR(u.M))},
JY(a){var s
A:{if(a instanceof A.a9){s=A.EJ(a,!0,!1)
break A}s=A.zX(a,!1)
break A}return s},
EJ(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.y(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
n[0]=A.kl(A.F(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kl(A.F(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kl(A.F(r))+"%"
break
default:throw A.b(A.aA(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a4(q?"("+s+")":s,n)},
d7:function d7(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a){this.a=a},
dt:function dt(a){this.a=a},
cY:function cY(a){this.a=a},
Ia(a,b){var s,r=$.fP.H(0,a)
if(r!=null){$.fP.j(0,a,r)
return r}s=b.$0()
if($.fP.a>=512)$.fP.H(0,new A.T($.fP,A.n($.fP).i("T<1>")).gG(0))
$.fP.j(0,a,s)
return s},
aY:function aY(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
y9:function y9(a){this.a=a},
mo:function mo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
vv:function vv(a,b,c){this.a=a
this.b=b
this.c=c},
vq:function vq(){},
vr:function vr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vs:function vs(a){this.a=a},
vt:function vt(){},
vu:function vu(){},
Il(a){var s,r,q=B.a.ci(a)
if(q.length===0)return
s=!0
if(!B.a.F(q,'"')){r=A.af("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.af("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.aw("Invalid search term: "+a,null))},
Ik(a){var s,r,q,p
for(s=B.a.cQ(a,A.af("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
if(p.length!==0&&new A.j9(p).gm(0)<3)throw A.b(A.aw('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cL:function cL(a,b){this.a=a
this.b=b},
vO:function vO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
ki(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.dI)throw q
else{s=r
r=A.jj("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
D4(a){return A.ki(new A.r3(a))},
Hw(a){return A.ki(new A.rN(a))},
Ho(a){return A.ki(new A.rf(a))},
D9(a,b){var s
if(new A.j9(a).gm(0)!==1)throw A.b(A.aQ('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aQ('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Hn(a){return A.ki(new A.re(a))},
Hm(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.gaa(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Iv(a){return A.ki(new A.w3(a))},
pv(a,b){return A.ki(new A.pw(a,b))},
L2(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.am.h(0,s)
return b},
c3:function c3(a,b){this.a=a
this.b=b},
aV:function aV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
r3:function r3(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(a){this.a=a},
ep:function ep(a){this.a=a},
re:function re(a){this.a=a},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
w3:function w3(a){this.a=a},
ue:function ue(a,b){this.a=a
this.b=b},
pZ:function pZ(){},
c1:function c1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
pw:function pw(a,b){this.a=a
this.b=b},
BG(a){var s=A.JZ(a),r=A.k([],t.s)
if(B.Y.gV(B.Y))r.push("fieldResolvers")
if(B.b.bM(a.x,new A.vK()))r.push("migrationTransform")
if(B.am.gV(B.am))r.push("documentMigrations")
return new A.mC(s,A.d3(r,t.N),1,a.a,a.b,2)},
Ij(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aQ("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aU(0,new A.vL(),s,r)
p=q.h(0,"formatVersion")
if(!A.ax(p))throw A.b(A.aQ("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.DF("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.ax(n)||!j.b(m)||!t.j.b(l)||!A.ax(k))throw A.b(A.aQ('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.mC(m.aU(0,new A.vM(),s,t.X),A.d3(J.be(l,new A.vN(),r),s),p,o,n,k)},
JZ(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cH(a.p(),n,m),k=B.Y.gK()
k=A.O(k,A.n(k).i("o.E"))
B.b.aF(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.k([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].p()
o=A.dH(null,null,n,m)
o.C(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gK()
n=A.O(n,A.n(n).i("o.E"))
B.b.aF(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
mC:function mC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vK:function vK(){},
vL:function vL(){},
vM:function vM(){},
vN:function vN(){},
H_(a,b){var s,r=a.a
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
ui:function ui(){},
dM:function dM(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pK:function pK(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b},
pJ:function pJ(a,b){this.a=a
this.b=b},
pM:function pM(a,b){this.a=a
this.b=b},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
pG:function pG(a,b){this.a=a
this.b=b},
pF:function pF(a,b){this.a=a
this.b=b},
pL:function pL(a,b){this.a=a
this.b=b},
pI:function pI(a,b){this.a=a
this.b=b},
pA:function pA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pz:function pz(){},
pE:function pE(){},
pD:function pD(){},
pC:function pC(){},
pB:function pB(){},
px:function px(){},
py:function py(){},
hk:function hk(){},
nE:function nE(){},
BP(a,b,c,d,e){var s=e==null?A.k([],t.eb):e
return new A.bG(a,b,c,s,d,new A.zb())},
n4(a){var s=$.C.h(0,$.ku())
if(s instanceof A.bG&&s.a===a)return s
return null},
bG:function bG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wB:function wB(a,b,c){this.a=a
this.b=b
this.c=c},
zb:function zb(){this.a=0
this.b=null},
Lr(a,b,c){var s,r,q,p,o=A.k([],t.s)
for(s=J.D(a);s.k();){r=new A.a2("")
A.cg(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aF(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.aq(B.l.v(B.e.v(p)).a)},
mr:function mr(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
vD:function vD(){},
vC:function vC(a){this.a=a},
vE:function vE(a){this.a=a},
m9:function m9(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
uo:function uo(a){this.a=a},
fh:function fh(){},
xk:function xk(a,b){this.a=a
this.b=0
this.c=b},
xl:function xl(a,b,c){this.a=a
this.b=b
this.c=c},
kS(a){var s=$.Cv()
if(!s.b.test(a))throw A.b(A.N('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
CP(a){return new A.fe(a)},
CQ(a,b){return new A.kR(a,b)},
ko(a,b,c,d,e){return A.Me(a,b,c,d,e)},
Me(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$ko=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.k([],h)
f=new A.hl(A.cW(new A.of(new A.AN(g),A.k([],h),t.mI)))
e=0
h=new A.cd(A.bZ(a,"stream",t.K),t.lj)
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
e+=J.ak(m)
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
case 5:f.a.q()
if(c!=null&&!J.w(e,c))throw A.b(A.x("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.aq(B.b.gap(g).a)
A.kS(i)
if(b!=null&&i!==b)throw A.b(A.x("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.mR(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ko,r)},
pd:function pd(){},
fe:function fe(a){this.a=a},
kR:function kR(a,b){this.a=a
this.b=b},
mR:function mR(a){this.a=a},
AN:function AN(a){this.a=a},
ip:function ip(a){this.d=a},
r5:function r5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ra:function ra(){},
D5(a){return A.oO("lp_file_refs",new A.r4(a))},
bh:function bh(a,b,c,d,e,f,g,h,i,j){var _=this
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
r4:function r4(a){this.a=a},
tM:function tM(a,b){this.a=a
this.b=b},
tN:function tN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tP:function tP(a){this.a=a},
tQ:function tQ(a){this.a=a},
tR:function tR(a){this.a=a},
tS:function tS(a){this.a=a},
tT:function tT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tO:function tO(a,b){this.a=a
this.b=b},
DU(a){var s
if(t.m.b(a))s=J.w(a.name,"NotFoundError")||J.w(a.name,"TypeMismatchError")
else s=!1
return s},
x1:function x1(a){this.b=a
this.d=null},
x2:function x2(a){this.a=a},
o1:function o1(a){this.a=a},
DM(a){var s=Date.now()
return new A.mY(a,new A.aM(s,0,!1))},
mY:function mY(a,b){this.a=a
this.c=b},
pa:function pa(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
md:function md(){},
uB:function uB(a,b){this.a=a
this.b=b},
uC:function uC(){},
uV:function uV(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
uF:function uF(a,b,c){this.a=a
this.b=b
this.c=c},
uM:function uM(a){this.a=a},
uI:function uI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uJ:function uJ(){},
uK:function uK(a,b){this.a=a
this.b=b},
uL:function uL(){},
uG:function uG(a,b){this.a=a
this.b=b},
uH:function uH(){},
I_(a,b,c,d,e){var s=A.bj(null,t.H)
return new A.uN(b,c,new A.uU(a,B.av,null),e,d,s)},
I0(a){return 0.5+B.as.n0()},
j3:function j3(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
uN:function uN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
uU:function uU(a,b,c){this.a=a
this.b=b
this.c=c},
uQ:function uQ(){},
uR:function uR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uO:function uO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uP:function uP(){},
uS:function uS(a){this.a=a},
uT:function uT(a){this.a=a},
zi:function zi(a,b){this.a=a
this.b=null
this.c=b},
iu(a,b){return new A.dB(a)},
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
lz:function lz(a,b,c,d,e){var _=this
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
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
p_:function p_(a){this.a=a},
p0:function p0(a,b){this.a=a
this.b=b},
p1:function p1(a){this.a=a},
p2:function p2(){},
Ba(a){return A.oO("lp_conflicts",new A.q_(a))},
bf:function bf(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
q_:function q_(a){this.a=a},
q0:function q0(a){this.a=a},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
q4:function q4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q2:function q2(a,b){this.a=a
this.b=b},
q3:function q3(a,b){this.a=a
this.b=b},
q1:function q1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mV:function mV(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
wp:function wp(a){this.a=a},
wh:function wh(a){this.a=a},
wn:function wn(a,b){this.a=a
this.b=b},
wm:function wm(a){this.a=a},
wl:function wl(a,b){this.a=a
this.b=b},
wo:function wo(a){this.a=a},
wi:function wi(a,b){this.a=a
this.b=b},
wj:function wj(){},
wk:function wk(){},
ev(a){return new A.d4(a)},
Cs(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.f8(a,b)
r=A.bd(a,s)
q=A.ai(r)
p=A.aq(B.l.v(B.e.v(q)).a)
return new A.ey(b,s,q,p,k)}catch(m){l=A.E(m)
if(l instanceof A.d4){o=l
return new A.ey(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.ey(b,k,k,k,l)}}},
M9(a,b){var s,r=A.k([],t.i7)
for(s=J.D(b);s.k();)r.push(A.Cs(a,s.gn()))
return r},
Cr(a,b){var s=0,r=A.h(t.eT),q
var $async$Cr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.M9(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cr,r)},
f8(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.b8(b.d,j,i),g=a.gd9(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.w(f,s))throw A.b(A.ev('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bJ(r))throw A.b(A.ev('Field "archived" must be a boolean, got '+J.bO(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.q)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ev('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Cl(o,n)
if(m!=null)throw A.b(A.ev(A.KK(o,n,m)))
q.j(0,s,n)}for(j=new A.aN(h,A.n(h).i("aN<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.F(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.w(r,!0))
return q},
KK(a,b,c){var s,r=a.a,q=J.bO(b)
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
hZ(a){var s,r,q,p
if(a==null||a.length===0)return B.n
s=null
try{s=B.h.av(a,null)}catch(q){r=A.E(q)
p=A.ev("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ev("Corrupt payload JSON: expected an object, got "+J.bO(s).l(0)+"."))
return A.b8(s,t.N,t.X)},
d4:function d4(a){this.a=a},
ey:function ey(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aO(i),g=A.d2(a.gK(),i)
g.C(0,b.gK())
for(g=A.hx(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.t.X(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.kw(o.gK(),new A.Ah())&&J.kw(n.gK(),new A.Ai())){m=A.bK(A.b8(o,i,q),A.b8(n,i,q))
for(l=A.n(m),k=new A.e0(m,m.r,l.i("e0<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
HN(a,b,c,d,e,f,g){return new A.u1()},
KE(a,b){var s,r,q=a.b
if(q.gE(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dh(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
Bv(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$Bv=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.HO(B.bR,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Bv,r)},
HO(a,b,c,d,e,f,g){var s,r,q,p=A.bK(b,c),o=A.bK(b,f)
A.HN(b,p,o,c,e,f,g)
s=t.N
r=A.d2(c.gK(),s)
r.C(0,new A.T(f,A.n(f).i("T<1>")))
r.C(0,b.gK())
q=A.O(r,A.n(r).c)
return A.u7(a,b,p,o,0,q,c,A.u(s,t.X),d,e,f,new A.z6(),g)},
u7(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
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
h.j(0,s,m)}return A.u7(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.Do(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.t)return l.a2(new A.u8(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.u7(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
Do(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.t.X(a1,a4))return a1
if(B.t.X(a1,a0))return a4
if(B.t.X(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kw(a1.gK(),new A.u2()))if(J.kw(a4.gK(),new A.u3()))if(a0!=null)r=s.b(a0)&&J.kw(a0.gK(),new A.u4())
else r=!0
if(r){r=t.N
q=t.X
p=A.b8(a1,r,q)
o=A.b8(a4,r,q)
n=a0==null?null:A.b8(s.a(a0),r,q)
s=A.aO(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.C(0,l)
s.C(0,new A.T(p,A.n(p).i("T<1>")))
s.C(0,new A.T(o,A.n(o).i("T<1>")))
k=A.u(r,q)
j=[]
for(r=s.$ti.c,l=A.hx(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.Do(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.t)g=!0
j.push(d)}if(!g){for(s=A.hx(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.Bj(new A.X(j,new A.u5(),A.a_(j).i("X<1,z<j?>>")),q).a2(new A.u6(s,k),q)}A.KE(a3,a2)
return a4},
FC(a,b,c,d,e,f){return A.Bv(a,b,c,d,e,f)},
Ah:function Ah(){},
Ai:function Ai(){},
u1:function u1(){},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
z6:function z6(){this.a=!1},
z4:function z4(){},
xp:function xp(){},
u8:function u8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
u2:function u2(){},
u3:function u3(){},
u4:function u4(){},
u5:function u5(){},
u6:function u6(a,b){this.a=a
this.b=b},
up:function up(a,b){this.a=a
this.b=b},
ur:function ur(a){this.a=a},
us:function us(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pc:function pc(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(){},
j8:function j8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uu:function uu(a,b){this.a=a
this.b=b},
uA:function uA(a,b){this.a=a
this.b=b},
uy:function uy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ux:function ux(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
uw:function uw(a,b,c){this.a=a
this.b=b
this.c=c},
uz:function uz(a){this.a=a},
eb:function eb(a,b){this.a=a
this.b=b},
mn:function mn(a,b){this.b=a
this.f=b},
v9:function v9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vh:function vh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vg:function vg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vb:function vb(a,b,c){this.a=a
this.b=b
this.c=c},
va:function va(a,b,c){this.a=a
this.b=b
this.c=c},
vd:function vd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vc:function vc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vf:function vf(a,b,c){this.a=a
this.b=b
this.c=c},
ve:function ve(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vi:function vi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
vk:function vk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vp:function vp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vn:function vn(a,b,c){this.a=a
this.b=b
this.c=c},
vm:function vm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vl:function vl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vj:function vj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vo:function vo(a,b,c,d,e,f,g,h,i,j){var _=this
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
bm:function bm(a,b,c,d,e,f,g){var _=this
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
we:function we(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wf:function wf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
DN(a){return new A.ha(a)},
GP(a){return new A.c0(a)},
Hl(a){return new A.cE(a)},
HY(a){return new A.cI(a)},
bu(a){return new A.fM(a)},
LO(a){var s=a.xg(),r=new A.Aw()
return A.r(r.$2(A.BB(s),4))+"-"+A.r(r.$1(A.Bz(s)))+"-"+A.r(r.$1(A.v0(s)))+" "+A.r(r.$1(A.Bx(s)))+":"+A.r(r.$1(A.By(s)))+":"+A.r(r.$1(A.BA(s)))+"."+A.r(r.$2(A.Dx(s),3))+"Z"},
bv:function bv(){},
ha:function ha(a){this.a=a},
eF:function eF(a,b){this.b=a
this.a=b},
je:function je(a){this.a=a},
c0:function c0(a){this.a=a},
cE:function cE(a){this.a=a},
cI:function cI(a){this.a=a},
fK:function fK(a){this.a=a},
fM:function fM(a){this.a=a},
fq:function fq(a){this.a=a},
ec:function ec(a){this.a=a},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b,c,d,e){var _=this
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
j7:function j7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kI:function kI(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
Aw:function Aw(){},
Iy(a){return 0.5+B.as.n0()},
BM(a){var s,r=a.toLowerCase()
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
Iz(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).eb(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.BM(r)
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
return A.BN(r,q,p,o,n,A.aG(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).eb(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.BM(r)
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
return A.BN(l,q,r,p,o,A.aG(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).eb(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.BM(r)
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
return A.BN(r,q,p,o,n,A.aG(s))}return k},
BN(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.Bb(a,b,c,d,e,f,0)
return s}catch(r){return null}},
wg:function wg(a,b){this.at=a
this.ay=b},
j6:function j6(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
wr:function wr(a,b){this.a=a
this.b=b},
Fk(a,b,c,d,e,f,g,h,i,j){var s,r=A.FE(a,b,c,null,d,e,f,g,h,i,j),q=A.u(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.X[s],r[s])
return q},
FE(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.Fh(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
Fh(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Lm(a,b,c,d,e,f,g){var s,r=null,q=A.FQ(B.a5,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.u(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.W[s],q[s])
return p},
FQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.Fi(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
Fi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
FM(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i_(a){return new A.X(a,new A.AS(),A.a_(a).i("X<1,l>")).B(0,", ")},
jo(a){return A.oO("lp_sync_row",new A.wq(a))},
mc(a){return A.oO("lp_outbox",new A.uv(a))},
HZ(a){return A.oO("lp_op_queue",new A.uq(a))},
kp(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aO(n)
l=A.O(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.ae(k,"?",!1,n),", ")
k=a.ah("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kp)
case 3:j.C(0,i.be(h.a(d),new A.AQ(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ah("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kp)
case 4:j.C(0,i.be(h.a(d),new A.AR(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kp,r)},
i1(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$i1=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.en("lp_blobs",A.k(["hash"],q),1,"hash = ?",A.k([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$i1)
case 5:s=p.bA(o.a(f))?2:4
break
case 2:q=a.aC(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$i1)
case 6:s=3
break
case 4:q=a.aD("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.k([c,b],t.hf))
s=7
return A.a(q,$async$i1)
case 7:case 3:return A.e(null,r)}})
return A.f($async$i1,r)},
Ao(a,b){var s=0,r=A.h(t.H),q,p
var $async$Ao=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aD(u.y,A.k([b],t.s))
s=3
return A.a(p,$async$Ao)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Ao,r)},
cz(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.n6("lp_file_refs",A.k(["ref_id","hash"],n),"store = ? AND record_id = ?",A.k([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cz)
case 2:m=l.D(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.W("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cz)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Ao(a,o),$async$cz)
case 8:case 7:s=3
break
case 4:m=a.W("lp_conflicts","store = ? AND record_id = ?",A.k([b,c],n))
s=9
return A.a(m,$async$cz)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.k([b,c],n))
s=10
return A.a(m,$async$cz)
case 10:s=d?11:12
break
case 11:m=a.W("lp_outbox","store = ? AND record_id = ?",A.k([b,c],n))
s=13
return A.a(m,$async$cz)
case 13:n=a.W("lp_sync_row","store = ? AND record_id = ?",A.k([b,c],n))
s=14
return A.a(n,$async$cz)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cz,r)},
cO:function cO(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
AS:function AS(){},
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
wq:function wq(a){this.a=a},
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
uv:function uv(a){this.a=a},
eA:function eA(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
uq:function uq(a){this.a=a},
AQ:function AQ(){},
AR:function AR(){},
wE:function wE(a,b){this.a=a
this.b=b},
HK(a){var s,r,q
try{s=A.oK(a)
if(t.f.b(s)){r=A.f5(s)
return r}}catch(q){}return null},
HL(a){if(a instanceof A.ju)return A.hX(new A.nk(3,a.a,a.b,null).p())
t.bp.a(a)
return A.Bt(a.a,a.b,a.c,a.d)},
Bt(a,b,c,d){return A.hX(new A.nk(3,a,null,new A.x3(b,c,d)).p())},
kh(a){return A.KC(a)},
KC(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kh=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.i0()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a5(f.getDirectory(),k),$async$kh)
case 7:n=c
j=$.i2()
i=A.O(j.cQ(0,"drift_db"),t.N)
m=i
J.B3(m,j.cQ(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ak(l)===0){s=9
break}s=11
return A.a(A.a5(n.getDirectoryHandle(l,{create:!1}),k),$async$kh)
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
return A.f($async$kh,r)},
oD(a,b){return A.KD(a,b)},
KD(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$oD=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kh(a),$async$oD)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a5(m.getFileHandle(A.dO(b,$.i2().a).gjK(),{create:!1}),t.m),$async$oD)
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
return A.f($async$oD,r)},
oE(a,b){return A.KL(a,b)},
KL(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$oE=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kh(a),$async$oE)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.Bh(m,A.dO(b,$.i2().a).gjK()),$async$oE)
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
return A.f($async$oE,r)},
tJ:function tJ(){},
tK:function tK(a){this.a=a},
tL:function tL(a){this.a=a},
lT:function lT(a,b,c){this.a=a
this.d=b
this.e=c},
tU:function tU(a){this.a=a},
hp:function hp(a){this.a=a},
oN(a){var s,r,q
if(a instanceof A.aM)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.aI){s=t.N
return A.m(["lp:bigint",a.l(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.d3(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.be(a,A.Lz(),s)
r=A.O(r,r.$ti.i("W.E"))
return A.d3(r,s)}if(t.f.b(a)){q=A.u(t.N,t.X)
a.a1(0,new A.At(q))
return q}if(a==null||A.bJ(a)||A.ax(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.N("Value of type "+J.bO(a).l(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
Ck(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gm(a)===1&&a.I(l)){s=a.h(0,l)
if(A.ax(s)){r=B.c.aj(s,1000)
q=B.c.M(s-r,1000)
if(q<-864e13||q>864e13)A.v(A.as(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.v(A.aA(r,"microsecond",u.B))
A.bZ(!0,"isUtc",t.y)
return new A.aM(q,r,!0)}throw A.b(A.N("Malformed wire DateTime: "+A.r(s),k))}if(a.gm(a)===1&&a.I(j)){s=a.h(0,j)
if(typeof s=="string")return A.BX(s,k)
throw A.b(A.N("Malformed wire BigInt: "+A.r(s),k))}if(a.gm(a)===1&&a.I(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.L(s)
q=r.gm(s)
p=new Uint8Array(q)
for(o=0;o<r.gm(s);++o){n=r.h(s,o)
if(!A.ax(n)||n<0||n>255)throw A.b(A.N("Malformed wire byte at index "+o+": "+A.r(n),k))
p[o]=n}return p}throw A.b(A.N("Malformed wire bytes: "+A.r(s),k))}m=A.u(t.N,t.X)
a.a1(0,new A.An(m))
return m}if(t.j.b(a)){r=t.X
q=J.be(a,A.Ly(),r)
q=A.O(q,q.$ti.i("W.E"))
return A.d3(q,r)}return a},
At:function At(a){this.a=a},
An:function An(a){this.a=a},
KY(){return new A.aM(Date.now(),0,!1)},
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
wI:function wI(a,b){this.f=a
this.r=b},
wL:function wL(){},
wJ:function wJ(a){this.a=a},
wK:function wK(){},
Mb(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.u(t.N,t.X)
try{if(t.f.b(a)){s=A.f5(a)
r=A.u(t.N,t.X)
q=t.j
if(q.b(J.S(s,n))){p=J.S(s,n)
p.toString
p=J.be(q.a(p),new A.AK(),t.bU)
q=A.O(p,p.$ti.i("W.E"))
J.c_(r,n,q)}if(A.ax(J.S(s,m)))J.c_(r,m,J.S(s,m))
if(A.bJ(J.S(s,l)))J.c_(r,l,J.S(s,l))
return r}}catch(o){}return A.u(t.N,t.X)},
FK(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.f5(a).h(0,b)
return s}}catch(r){}return null},
LT(a,b){if(b!=null)return!1
return B.b.bM(a,new A.AB())},
AK:function AK(){},
AB:function AB(){},
AA:function AA(){},
Mj(a){if(a instanceof A.dI){if(a instanceof A.eK)return"ValidationException"
if(a instanceof A.eJ)return"UniqueConstraintException"
if(a instanceof A.ez)return"NotNullConstraintException"
if(a instanceof A.fg)return"CheckConstraintException"
if(a instanceof A.fL)return"PrimaryKeyConstraintException"
if(a instanceof A.fv)return"ForeignKeyConstraintException"
if(a instanceof A.cM)return"StorageError"
if(a instanceof A.fT)return"RecordNotFoundException"
if(a instanceof A.fX)return"SchemaTooNewError"
if(a instanceof A.fx)return"FtsUnavailableError"
if(a instanceof A.hd)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eE)return"SchemaRegistrationError"
if(a instanceof A.h2)return"StaleCursorError"
if(a instanceof A.fD)return"MissingLimitError"
if(a instanceof A.fk)return"ConflictBlockedError"
if(a instanceof A.el)return"DestructiveMigrationRefusedError"
if(a instanceof A.fS)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bv){if(a instanceof A.ha)return"TransientNetworkError"
if(a instanceof A.eF)return"ServerBusyError"
if(a instanceof A.je)return"ServerError"
if(a instanceof A.c0)return"AuthError"
if(a instanceof A.cE)return"ForbiddenError"
if(a instanceof A.cI)return"NotFoundError"
if(a instanceof A.fK)return"PayloadError"
if(a instanceof A.fM)return"ProtocolError"
if(a instanceof A.fq)return"DuplicateIdError"
if(a instanceof A.ec)return"BatchFailedError"
return"SyncError"}if(a instanceof A.j5)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bk)return"StateError"
if(a instanceof A.bB)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
IJ(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.ax(s))throw A.b(A.d8('Request "v" must be an int.'))
if(!A.ax(r)||r<0)throw A.b(A.d8('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.da.F(0,q))throw A.b(A.d8("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.d8('Request "a" must be a map.'))
return new A.hi(s,r,q,p.aU(0,new A.x6(),t.N,t.X))},
d8(a){return new A.j5(a)},
hi:function hi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x6:function x6(){},
nk:function nk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x3:function x3(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
DV(a){return A.bx(A.bL(a).a,null)},
DW(a){return A.bx(J.bO(a).a,null)},
bw:function bw(a){this.a=a},
Mc(a){if(!t.f.b(a))throw A.b(A.a8("Schema must be a map: "+A.r(a),null,null))
return A.pv(A.f5(a),t.X)},
f5(a){var s=A.u(t.N,t.X)
a.a1(0,new A.Aq(s))
return s},
IL(a){var s,r=A.u(t.N,t.X)
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
hj:function hj(){},
ju:function ju(a,b){this.b=a
this.a=b},
eM:function eM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
Aq:function Aq(a){this.a=a},
Ap:function Ap(){},
nn:function nn(){},
xa:function xa(a,b,c,d){var _=this
_.as=$
_.a=a
_.c=b
_.d=c
_.e=null
_.f=1
_.y=_.x=_.w=_.r=null
_.z=d
_.Q=null},
xb:function xb(a){this.a=a},
nm:function nm(){},
x8:function x8(a){this.a=a},
x9:function x9(){},
np:function np(){},
xc:function xc(a){this.a=a},
xd:function xd(a){this.a=a},
nq:function nq(){},
zE:function zE(a,b){this.a=a
this.b=b},
nr:function nr(){},
xi:function xi(a){this.a=a},
xj:function xj(a,b){this.a=a
this.b=b},
os:function os(){},
ot:function ot(){},
ou:function ou(){},
ov:function ov(){},
EY(a){return a},
Fd(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=a+"("
p.a=o
n=A.a_(b)
m=n.i("ct<1>")
l=new A.ct(b,0,s,m)
l.iN(b,0,s,n.c)
m=o+new A.X(l,new A.A9(),m.i("X<W.E,l>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.N(p.l(0),null))}},
q7:function q7(a){this.a=a},
q8:function q8(){},
q9:function q9(){},
A9:function A9(){},
rV:function rV(){},
dO(a,b){var s,r,q,p,o,n=b.o2(a),m=b.cH(a)
if(n!=null)a=B.a.ad(a,n.length)
s=t.s
r=A.k([],s)
q=A.k([],s)
s=a.length
if(s!==0&&b.cc(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cc(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ad(a,p))
q.push("")}return new A.me(b,n,m,r,q)},
me:function me(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Du(a){return new A.mf(a)},
mf:function mf(a){this.a=a},
Ix(){var s,r,q,p,o,n,m,l,k=null
if(A.BQ().gb_()!=="file")return $.kt()
if(!B.a.c7(A.BQ().gbr(),"/"))return $.kt()
s=A.Eu(k,0,0)
r=A.Es(k,0,0,!1)
q=A.zv(k,0,0,k)
p=A.Er(k,0,0)
o=A.zu(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Et("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.C6(l,m)
else l=A.f_(l)
if(A.ka("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).ky()==="a\\b")return $.oR()
return $.G1()},
wd:function wd(){},
uX:function uX(a,b,c){this.d=a
this.e=b
this.f=c},
wO:function wO(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
x7:function x7(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
Bg(a,b){if(b<0)A.v(A.aX("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.v(A.aX("Offset "+b+u.D+a.gm(0)+"."))
return new A.lu(a,b)},
vW:function vW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lu:function lu(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
Hs(a,b){var s=A.Ht(A.k([A.J7(a,!0)],t.pg)),r=new A.rL(b).$0(),q=B.c.l(B.b.ga_(s).b+1),p=A.Hu(s)?0:3,o=A.a_(s)
return new A.rr(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.rt(),o.i("X<1,i>")).wY(0,B.bz),!A.M0(new A.X(s,new A.ru(),o.i("X<1,j?>"))),new A.a2(""))},
Hu(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.w(r.c,q.c))return!1}return!0},
Ht(a){var s,r,q=A.LS(a,new A.rw(),t.nf,t.K)
for(s=A.n(q),r=new A.b1(q,q.r,q.e,s.i("b1<2>"));r.k();)J.CH(r.d,new A.rx())
s=s.i("aN<1,2>")
r=s.i("io<o.E,cx>")
s=A.O(new A.io(new A.aN(q,s),new A.ry(),r),r.i("o.E"))
return s},
J7(a,b){var s=new A.yI(a).$0()
return new A.bq(s,!0,null)},
J9(a){var s,r,q,p,o,n,m=a.gaK()
if(!B.a.F(m,"\r\n"))return a
s=a.gN().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gP()
p=a.ga3()
o=a.gN().gag()
p=A.mK(s,a.gN().gaq(),o,p)
o=A.y(m,"\r\n","\n")
n=a.gbe()
return A.vX(r,p,o,A.y(n,"\r\n","\n"))},
Ja(a){var s,r,q,p,o,n,m
if(!B.a.c7(a.gbe(),"\n"))return a
if(B.a.c7(a.gaK(),"\n\n"))return a
s=B.a.A(a.gbe(),0,a.gbe().length-1)
r=a.gaK()
q=a.gP()
p=a.gN()
if(B.a.c7(a.gaK(),"\n")){o=A.Av(a.gbe(),a.gaK(),a.gP().gaq())
o.toString
o=o+a.gP().gaq()+a.gm(a)===a.gbe().length}else o=!1
if(o){r=B.a.A(a.gaK(),0,a.gaK().length-1)
if(r.length===0)p=q
else{o=a.gN().gar()
n=a.ga3()
m=a.gN().gag()
p=A.mK(o-1,A.Eb(s),m-1,n)
q=a.gP().gar()===a.gN().gar()?p:a.gP()}}return A.vX(q,p,r,s)},
J8(a){var s,r,q,p,o
if(a.gN().gaq()!==0)return a
if(a.gN().gag()===a.gP().gag())return a
s=B.a.A(a.gaK(),0,a.gaK().length-1)
r=a.gP()
q=a.gN().gar()
p=a.ga3()
o=a.gN().gag()
p=A.mK(q-1,s.length-B.a.dh(s,"\n")-1,o-1,p)
return A.vX(r,p,s,B.a.c7(a.gbe(),"\n")?B.a.A(a.gbe(),0,a.gbe().length-1):a.gbe())},
Eb(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.ia(a,"\n",s-2)-1
else return s-B.a.dh(a,"\n")-1},
rr:function rr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rL:function rL(a){this.a=a},
rt:function rt(){},
rs:function rs(){},
ru:function ru(){},
rw:function rw(){},
rx:function rx(){},
ry:function ry(){},
rv:function rv(a){this.a=a},
rM:function rM(){},
rz:function rz(a){this.a=a},
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
rH:function rH(a,b){this.a=a
this.b=b},
rI:function rI(a){this.a=a},
rJ:function rJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rE:function rE(a,b){this.a=a
this.b=b},
rF:function rF(a,b){this.a=a
this.b=b},
rA:function rA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rB:function rB(a,b,c){this.a=a
this.b=b
this.c=c},
rC:function rC(a,b,c){this.a=a
this.b=b
this.c=c},
rD:function rD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rK:function rK(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
yI:function yI(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mK(a,b,c,d){if(a<0)A.v(A.aX("Offset may not be negative, was "+a+"."))
else if(c<0)A.v(A.aX("Line may not be negative, was "+c+"."))
else if(b<0)A.v(A.aX("Column may not be negative, was "+b+"."))
return new A.cr(d,a,c,b)},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mL:function mL(){},
mN:function mN(){},
Ip(a,b,c){return new A.h0(c,a,b)},
mO:function mO(){},
h0:function h0(a,b,c){this.c=a
this.a=b
this.b=c},
h1:function h1(){},
vX(a,b,c,d){var s=new A.dc(d,a,b,c)
s.oF(a,b,c)
if(!B.a.F(d,c))A.v(A.N('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Av(d,c,a.gaq())==null)A.v(A.N('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
dc:function dc(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
It(a){var s
A:{if(18===a){s=B.dc
break A}if(23===a){s=B.dd
break A}if(9===a){s=B.de
break A}s=null
break A}return s},
jg:function jg(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
Is(a,b,c,d,e,f,g){return new A.c7(d,b,c,e,f,a,g)},
c7:function c7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
w1:function w1(){},
kB:function kB(a){this.a=a},
K9(a,b,c){var s,r,q,p,o,n=new A.nf(c,A.ae(c.b,null,!1,t.X))
try{A.EN(a,b.$1(n))}catch(r){s=A.E(r)
q=B.e.v(A.il(s))
p=a.a
o=p.cC(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
EN(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.ax(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.DZ(b).l(0)))
break A}if(b instanceof A.aI){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.CO(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bJ(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.DZ(b?1:0).l(0)))
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
break A}if(t.po.b(b)){A.EN(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.v(A.aA(b,"result","Unsupported type"))}return s},
qy:function qy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
qH:function qH(a){this.a=a},
qG:function qG(a){this.a=a},
qI:function qI(a){this.a=a},
qE:function qE(a){this.a=a},
qD:function qD(a){this.a=a},
qF:function qF(a){this.a=a},
qA:function qA(a){this.a=a},
qz:function qz(a){this.a=a},
qB:function qB(a){this.a=a},
qJ:function qJ(a){this.a=a},
qC:function qC(a,b){this.a=a
this.b=b},
nf:function nf(a,b){this.a=a
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
zl:function zl(a,b){this.a=a
this.b=b},
zm:function zm(a,b,c){this.a=a
this.b=b
this.c=c},
zn:function zn(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(){},
h3:function h3(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
Bl(a,b){var s=$.oQ()
return new A.lB(A.u(t.N,t.a_),s,a)},
lB:function lB(a,b,c){this.d=a
this.b=b
this.a=c},
nS:function nS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Md(a){var s=J.GJ(new v.G.URL(a,"file:///").pathname,"/")
return new A.aj(s,new A.AL(),A.a_(s).i("aj<1>"))},
AL:function AL(){},
qd:function qd(){},
mx:function mx(a,b,c){this.d=a
this.a=b
this.c=c},
c6:function c6(a,b){this.a=a
this.b=b},
z5:function z5(a){this.a=a
this.b=-1},
o7:function o7(){},
o8:function o8(){},
oa:function oa(){},
ob:function ob(){},
ut:function ut(a,b){this.a=a
this.b=b},
Id(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bA(r,"step")}return s},
ei:function ei(){},
bQ:function bQ(a){this.a=a},
lb:function lb(a){this.a=a},
he(a){return new A.dg(a)},
CM(a,b){var s,r,q,p
if(b==null)b=$.oQ()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cI(256)
r&2&&A.I(a)
a[q]=p}},
dg:function dg(a){this.a=a},
jf:function jf(a){this.a=a},
b4:function b4(){},
kQ:function kQ(){},
kP:function kP(){},
Mh(a,b){var s=null,r=new A.et(t.kk)
return A.oP(a,new A.jv(s,s,s,s,s,s,s,s,new A.AV(new A.AU(r,A.A1(new A.AW(r)))),s,s,s,s),s,b)},
eN:function eN(a){var _=this
_.d=a
_.c=_.b=_.a=null},
AW:function AW(a){this.a=a},
AU:function AU(a,b){this.a=a
this.b=b},
AV:function AV(a){this.a=a},
wZ:function wZ(a){this.a=a},
wU:function wU(a,b,c){this.a=a
this.b=b
this.c=c},
x0:function x0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x_:function x_(a,b,c){this.b=a
this.c=b
this.d=c},
dV:function dV(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
bY(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.E(r)
if(q instanceof A.dg){s=q
return s.a}else return 1}},
le:function le(a){this.b=this.a=$
this.d=a},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qg:function qg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ql:function ql(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qn:function qn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qp:function qp(a,b){this.a=a
this.b=b},
qi:function qi(a){this.a=a},
qo:function qo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qt:function qt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qr:function qr(a,b){this.a=a
this.b=b},
qq:function qq(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a,b){this.a=a
this.b=b},
qs:function qs(a,b){this.a=a
this.b=b},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b){this.a=a
this.$ti=b},
p3:function p3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p5:function p5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p4:function p4(a,b,c){this.a=a
this.b=b
this.c=c},
cC(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bo(a,"success",new A.pR(r,a,b),!1,q)
A.bo(a,"error",new A.pS(r,a),!1,q)
return s},
H3(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bo(a,"success",new A.pW(r,a,b),!1,q)
A.bo(a,"error",new A.pX(r,a),!1,q)
A.bo(a,"blocked",new A.pY(r),!1,q)
return s},
eR:function eR(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
ya:function ya(a,b){this.a=a
this.b=b},
yb:function yb(a,b){this.a=a
this.b=b},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a,b){this.a=a
this.b=b},
pW:function pW(a,b,c){this.a=a
this.b=b
this.c=c},
pX:function pX(a,b){this.a=a
this.b=b},
pY:function pY(a){this.a=a},
i0(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
D7(a,b,c){var s=a.read(b,c)
return s},
D8(a,b,c){var s=a.write(b,c)
return s},
Bh(a,b){return A.a5(a.removeEntry(b,{recursive:!1}),t.X)},
D6(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.v(A.N("Target object does not implement the async iterable interface",null))
return new A.eV(new A.rb(),new A.i7(a,s),s.i("eV<aa.T,M>"))},
rb:function rb(){},
wV:function wV(a){this.a=a},
wW:function wW(a){this.a=a},
wY(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$wY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a5(p.fetch(new p.URL(a,A.bc(p.location).href),null),t.m),$async$wY)
case 3:q=o.wX(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wY,r)},
wX(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$wX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.le(A.u(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.wV(p).ic(a),$async$wX)
case 3:q=new o.hf(new n.wZ(m.II(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wX,r)},
hf:function hf(a){this.a=a},
Jb(a){var s=new A.jN(a,new A.am(new A.t($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oJ(a)
return s},
lD(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$lD=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.p6(a)
n=A.Bl("dart-memory",null)
m=$.oQ()
l=new A.dD(o,n,new A.et(t.p3),A.aO(p),A.u(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.ih(),$async$lD)
case 3:s=4
return A.a(l.eR(),$async$lD)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lD,r)},
p6:function p6(a){this.a=null
this.b=a},
p9:function p9(a){this.a=a},
p8:function p8(a,b,c){this.a=a
this.b=b
this.c=c},
p7:function p7(a){this.a=a},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
yL:function yL(a){this.a=a},
yM:function yM(a){this.a=a},
yK:function yK(a){this.a=a},
yN:function yN(a,b,c){this.a=a
this.b=b
this.c=c},
yP:function yP(a,b){this.a=a
this.b=b},
yO:function yO(a,b){this.a=a
this.b=b},
ym:function ym(a,b,c){this.a=a
this.b=b
this.c=c},
yn:function yn(a,b){this.a=a
this.b=b},
o0:function o0(a,b){this.a=a
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
rP:function rP(a,b,c){this.a=a
this.b=b
this.c=c},
rQ:function rQ(){},
rO:function rO(a,b){this.a=a
this.b=b},
nT:function nT(a,b,c){this.a=a
this.b=b
this.c=c},
yJ:function yJ(a,b){this.a=a
this.b=b},
b6:function b6(){},
jL:function jL(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jF:function jF(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hq:function hq(a,b,c){var _=this
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
DG(a){var s=A.Bl("dart-memory",null),r=$.oQ()
return new A.h_(s,r,a)},
mG(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$mG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.i0()
if(j==null)throw A.b(A.he(1))
p=t.m
s=3
return A.a(A.a5(j.getDirectory(),p),$async$mG)
case 3:o=d
n=A.Md(a),m=J.D(n.a),n=new A.cU(m,n.b,n.$ti.i("cU<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a5(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$mG)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a4(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mG,r)},
mH(a){var s=0,r=A.h(t.m),q
var $async$mH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.mG(a,!0),$async$mH)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mH,r)},
vU(a,b){var s=0,r=A.h(t.g_),q,p
var $async$vU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.i0()==null)throw A.b(A.he(1))
p=A
s=3
return A.a(A.mH(a),$async$vU)
case 3:q=p.vT(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vU,r)},
vT(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$vT=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.DG(c)
s=3
return A.a(p.cK(a,!1),$async$vT)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vT,r)},
fu:function fu(a,b,c){this.c=a
this.a=b
this.b=c},
h_:function h_(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
vV:function vV(a,b){this.a=a
this.b=b},
og:function og(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
z1:function z1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
II(a,b){var s=A.bc(a.exports.memory)
b.b!==$&&A.cy()
b.b=s
s=new A.wP(s,b,a.exports)
s.oG(a,b)
return s},
ns(a,b){var s,r=A.bU(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dW(a,b,c){var s=a.buffer
return B.k.f0(A.bU(s,b,c==null?A.ns(a,b):c))},
BR(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.f0(A.bU(s,b,c==null?A.ns(a,b):c))},
DX(a,b,c){var s=new Uint8Array(c)
B.f.cP(s,0,A.bU(a.buffer,b,c))
return s},
wP:function wP(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
wQ:function wQ(a){this.a=a},
wR:function wR(a){this.a=a},
wS:function wS(a){this.a=a},
wT:function wT(a){this.a=a},
Aj(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Aj=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kv()
s=l!=null?3:5
break
case 3:p=A.KH()
s=6
return A.a(A.js(l,p,null,null,!1),$async$Aj)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a4({port:m.port1,lockName:p},new A.ie(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Aj,r)},
KH(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bt(97+$.Gt().cI(26))
return r.charCodeAt(0)==0?r:r},
GU(a){return new A.ic(a)},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
v3:function v3(){},
v7:function v7(a){this.a=a},
v8:function v8(a){this.a=a},
v6:function v6(a){this.a=a},
v5:function v5(a){this.a=a},
v4:function v4(a){this.a=a},
ic:function ic(a){this.a=a},
qw:function qw(){},
la:function la(a){this.a=a},
qe:function qe(a){this.a=a},
eL:function eL(){},
lt(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lt=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.mH(a),$async$lt)
case 3:p=e
o=A.DG(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cK(p,!0),$async$lt)
case 6:case 5:q=new A.ls(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lt,r)},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
js(a,b,c,d,e){var s,r,q={},p=new A.t($.C,t.nI),o=new A.am(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.Bi(A.a5(a.request(b,s,A.cX(new A.x4(q,o))),r),new A.x5(q,d,o),r,t.K)
return p},
x4:function x4(a,b){this.a=a
this.b=b},
x5:function x5(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.a=a},
lf:function lf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
qL:function qL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qK:function qK(a,b){this.a=a
this.b=b},
qM:function qM(a){this.a=a},
iU:function iU(a){this.a=!1
this.b=a},
ul:function ul(a,b){this.a=a
this.b=b},
uk:function uk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uj:function uj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H0(a){var s,r,q,p,o=A.k([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bP(n,A.a_(n).i("bP<1,l>"))
for(s=J.L(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a4(A.fs(B.cG,s.h(m,q)),s.h(m,q+1)))}s=A.hN(a.b)
q=A.hN(a.c)
p=A.hN(a.d)
return new A.ej(o,s,q,A.hN(a.g),p)},
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ig(a){var s
if(J.w(a.t,"errorResponse")){s=A.Hf(a)
if(s!=null&&s instanceof A.ds)return s
else return new A.fU(a.e)}else return new A.fU("Did not respond with expected type, got "+A.r(a))},
Hf(a){var s=a.s,r=s==null?null:A.an(s)
A:{if(0===r){s=A.Hg(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
Hg(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.x("Pattern matching error"))
n=new A.r1()
l=A.an(A.f0(l))
A.F(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ek(i,h,A.bU(h,0,o))}else p=o
n=n.$1(k)
A.ED(g)
return new A.c7(s,r,l,g==null?o:A.an(g),n,q,p)},
Hh(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.IB(l)
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
Ih(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.rp(a2,512,"transfer" in a2)
a5.mt(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Id(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.q_(l)
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
d=A.ns(r,f)
f=new Uint8Array(e,f,d)
c=new A.dl(!1).cW(f,0,a,!0)
i=c
g=B.aH
break
case 4:i=s.kS(j)
g=B.aI
break
case 5:default:i=a
g=B.aJ}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.ns(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dl(!1).cW(a0,0,a,!0)}return A.FD(!1,b,0,0,a1,a,a3.xe(0))},
M1(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
r1:function r1(){},
FD(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
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
LI(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
lW:function lW(a,b,c){this.a=a
this.b=b
this.$ti=c},
vJ:function vJ(){},
Hk(a){var s,r
for(s=0;s<5;++s){r=B.ct[s]
if(r.c===a)return r}throw A.b(A.N("Unknown FS implementation: "+a,null))},
IA(a){var s,r,q,p,o,n,m,l,k,j=null
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
break A}q=A.bJ(a)
k=q?a:j
if(q){s=k
r=B.bn
break A}throw A.b(A.N("Unsupported value: "+A.r(a),j))}return new A.a4(r,s)},
IB(a){var s,r,q,p,o,n
if(a instanceof A.ek)return new A.a4(a.a,a.b)
s=[]
r=J.L(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.IA(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a4(s,t.a.a(B.f.ga9(p)))},
dz:function dz(a,b,c){this.c=a
this.a=b
this.b=c},
cv:function cv(a,b){this.a=a
this.b=b},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
oI(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$oI=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bc(i.indexedDB)
i=$.kv()
i=i==null?null:A.js(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bp(i,t.b3),$async$oI)
case 3:l=b
p=5
s=8
return A.a(A.H2(m.open("drift_mock_db"),t.m),$async$oI)
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
return A.f($async$oI,r)},
Af(a){return A.Lp(a)},
Lp(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$Af=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bc(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cX(new A.Ag(j,m))
s=7
return A.a(A.H1(m,t.m),$async$Af)
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
return A.f($async$Af,r)},
hY(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$hY=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.i0()
if(h==null){q=B.q
s=1
break}j=t.m
s=3
return A.a(A.a5(h.getDirectory(),j),$async$hY)
case 3:m=b
p=5
s=8
return A.a(A.a5(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$hY)
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
case 7:l=A.k([],t.s)
j=new A.cd(A.bZ(A.D6(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$hY)
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
return A.a(j.D(),$async$hY)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hY,r)},
H1(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bo(a,"success",new A.pP(r,a,b),!1,q)
A.bo(a,"error",new A.pQ(r,a),!1,q)
return s},
H2(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.am(s,b.i("am<0>")),q=t.m
A.bo(a,"success",new A.pT(r,a,b),!1,q)
A.bo(a,"error",new A.pU(r,a),!1,q)
A.bo(a,"blocked",new A.pV(r,a),!1,q)
return s},
Ag:function Ag(a,b){this.a=a
this.b=b},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a,b){this.a=a
this.b=b},
pT:function pT(a,b,c){this.a=a
this.b=b
this.c=c},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(a,b){this.a=a
this.b=b},
v_:function v_(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
ds:function ds(a){this.a=a},
K8(a){var s=a.gmQ()
return new A.eV(new A.A0(),s,A.n(s).i("eV<aa.T,M>"))},
E7(a,b){var s=A.k([],t.kG),r=b==null?a.b:b
return new A.ho(a,r,new A.k0(),new A.k0(),new A.k0(),s)},
J2(a,b,c){var s=t.S
s=new A.hm(c,A.k([],t.fV),a.a,new A.aH(new A.t($.C,t.D),t.h),A.u(s,t.br),A.u(s,t.m))
s.oD(a)
s.oI(a,b,c)
return s},
EO(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e6(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e6=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.i0()
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
return A.a(t.fP.b(d)?d:A.bp(d,t.b3),$async$e6)
case 7:j=a1
d=t.m
s=8
return A.a(A.a5(b.getDirectory(),d),$async$e6)
case 8:m=a1
s=9
return A.a(A.a5(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e6)
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
e=A.Bo(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a5(A.bc(e),t.X),$async$e6)
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
if(g!=null)g.a.an()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.Bh(m,"_drift_feature_detection"),$async$e6)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e6,r)},
kk(a){return A.KZ(a)},
KZ(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kk=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kk)
case 7:j=c
s=8
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kk)
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
return A.a(A.a5(a.createSyncAccessHandle(),t.m),$async$kk)
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
return A.f($async$kk,r)},
A0:function A0(){},
k0:function k0(){this.a=null},
ho:function ho(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
y2:function y2(a){this.a=a},
y6:function y6(a,b){this.a=a
this.b=b},
y3:function y3(a,b){this.a=a
this.b=b},
y4:function y4(a){this.a=a},
y5:function y5(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
xN:function xN(a){this.a=a},
xS:function xS(a,b){this.a=a
this.b=b},
xV:function xV(a,b,c){this.a=a
this.b=b
this.c=c},
xP:function xP(a,b){this.a=a
this.b=b},
xO:function xO(a,b){this.a=a
this.b=b},
xU:function xU(a,b){this.a=a
this.b=b},
xT:function xT(a,b){this.a=a
this.b=b},
xX:function xX(a,b){this.a=a
this.b=b},
xW:function xW(a,b){this.a=a
this.b=b},
xQ:function xQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xR:function xR(a,b){this.a=a
this.b=b},
xM:function xM(a){this.a=a},
lg:function lg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
qP:function qP(a){this.a=a},
qO:function qO(a){this.a=a},
qN:function qN(a,b){this.a=a
this.b=b},
xe:function xe(a,b,c,d,e,f){var _=this
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
xf:function xf(a,b){this.a=a
this.b=b},
xg:function xg(a,b){this.a=a
this.b=b},
xh:function xh(a){this.a=a},
IK(){var s=v.G
if(A.Hy(s,"DedicatedWorkerGlobalScope"))return new A.nK(s,new A.nL(s.location.href))
else return new A.oe(s,new A.nL(s.location.href))},
kc:function kc(){},
nK:function nK(a,b){this.a=a
this.b=b},
oe:function oe(a,b){this.a=a
this.b=b},
zg:function zg(a){this.a=a},
zh:function zh(a,b,c){this.a=a
this.b=b
this.c=c},
zf:function zf(a){this.a=a},
zd:function zd(a){this.a=a},
ze:function ze(a){this.a=a},
nL:function nL(a){this.a=a},
yh:function yh(a){this.a=a},
mU:function mU(a,b,c){this.c=a
this.a=b
this.b=c},
wc:function wc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hb:function hb(){},
nU:function nU(){},
cw:function cw(a,b){this.a=a
this.b=b},
bo(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Fe(new A.yk(c),t.m)
s=s==null?null:A.cX(s)}s=new A.jJ(a,b,s,!1,e.i("jJ<0>"))
s.jC()
return s},
Fe(a,b){var s=$.C
if(s===B.i)return a
return s.hJ(a,b)},
Bd:function Bd(a,b){this.a=a
this.$ti=b},
ht:function ht(a,b,c,d){var _=this
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
yk:function yk(a){this.a=a},
yl:function yl(a){this.a=a},
FT(a){return v.mangledGlobalNames[a]},
FH(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
HB(a,b){return b in a},
Bo(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
LS(a,b,c,d){var s,r,q,p,o,n=A.u(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.k([],s)
n.j(0,p,o)
p=o}else p=o
J.aL(p,q)}return n},
Bm(a){var s=J.D(a.a)
if(new A.cU(s,a.b,a.$ti.i("cU<1>")).k())return s.gn()
return null},
Ac(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.I(a)
a[r]=s&255
b=s/256|0;--r}},
Ms(a){return a},
FR(a){if(a instanceof A.du)return a
return new A.du(a)},
Mu(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.E(p)
if(q instanceof A.h0){s=q
throw A.b(A.Ip("Invalid "+a+": "+s.a,s.b,s.gfP()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gkh(),r.gfP(),r.gar()))}else throw p}},
hV(){var s,r,q,p=$.Gu(),o=$.Gn()+1
$.Ke=o
s=B.a.ij(B.c.kz(o,36),8,"0")
r=J.Df(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cI(36)]
return B.a.A(s+B.b.ef(r),0,15)},
oO(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.cM)throw q
else{s=r
r=A.jj("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
Am(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.n
try{s=B.h.av(a,null)
if(t.f.b(s)){q=A.b8(s,t.N,t.X)
return q}return B.n}catch(p){r=A.E(p)
q=A.jj("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Fq(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.be
try{s=B.h.av(a,null)
if(t.j.b(s)){q=J.oV(s,t.N)
q=q.fD(q)
return q}return B.be}catch(p){r=A.E(p)
q=A.jj("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Fp(a){var s,r,q,p,o=null
if(a==null)return B.q
A.F(a)
if(a.length===0)return B.q
s=B.h.av(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.bO(s).l(0),o,o))
r=A.k([],t.s)
for(q=J.D(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.v(A.a8("dirty-field member is "+J.bO(p).l(0)+", expected String",o,o)))}return r},
f6(a){var s,r=J.L(a)
if(r.gE(a))return null
s=J.ci(r.gG(a).gb3())
if(A.ax(s))return s
if(typeof s=="string")return A.j4(s,null)
return null},
Mo(a,b,c){var s=A.y(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.y(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.y(c,"'","\\'")+"'")+")"},
Fv(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.dy(B.x.x9(r*J.GC(d.$1(o),0.5,1.5)),0,0)},
Ma(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.c4)
s=a.h(0,"type")
if(!J.w(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ak(r)!==32)throw A.b(B.c3)
q=new Uint8Array(32)
for(p=J.L(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.ax(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.CK(q)
p=$.B1()
if($.kr()!==B.O)A.v(A.x("BigEndian systems are unsupported"))
return new A.oZ(new A.lc(12,32,m),new A.jd(new A.mF(A.CK(q)),m),p)},
Ft(a){var s,r=A.u(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.oN(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.oN(s))
return r},
M6(){var s=A.IK(),r=t.cj
new A.xe(s,B.bL,A.k([],t.az),A.u(t.S,t.lp),new A.iU(A.Bs(r)),new A.iU(A.Bs(r))).ed()},
Fo(){var s,r,q,p,o=null
try{o=A.BQ()}catch(s){if(t.mA.b(A.E(s))){r=$.zZ
if(r!=null)return r
throw s}else throw s}if(J.w(o,$.EK)){r=$.zZ
r.toString
return r}$.EK=o
if($.Cx()===$.kt())r=$.zZ=o.bt(".").l(0)
else{q=o.ky()
p=q.length-1
r=$.zZ=p===0?q:B.a.A(q,0,p)}return r},
Fz(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Fr(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Fz(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
M0(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gG(0)
for(r=A.cu(a,1,null,a.$ti.i("W.E")),q=r.$ti,r=new A.ar(r,r.gm(0),q.i("ar<W.E>")),q=q.i("W.E");r.k();){p=r.d
if(!J.w(p==null?q.a(p):p,s))return!1}return!0},
Mg(a,b){var s=B.b.bO(a,null)
if(s<0)throw A.b(A.N(A.r(a)+" contains no null elements.",null))
a[s]=b},
FL(a,b){var s=B.b.bO(a,b)
if(s<0)throw A.b(A.N(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
LD(a,b){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Av(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.ca(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bO(a,b)
while(r!==-1){q=r===0?0:B.a.ia(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.ca(a,b,r+1)}return null},
Cj(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c7(A.dW(r.b,p.sqlite3_errmsg(q),null),A.dW(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
AX(a,b,c,d,e){throw A.b(A.Cj(a.a,a.b,b,c,d,e))},
CO(a){if(a.Z(0,$.FW())<0||a.Z(0,$.FV())>0)throw A.b(A.D3("BigInt value exceeds the range of 64 bits"))
return a},
Ie(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.an(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dW(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.DX(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Da(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bt("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cI(61)))
return s.charCodeAt(0)==0?s:s},
vG(a){var s=0,r=A.h(t.lo),q
var $async$vG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(a.arrayBuffer(),t.a),$async$vG)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vG,r)}},B={}
var w=[A,J,B]
var $={}
A.Bq.prototype={}
J.lF.prototype={
R(a,b){return a===b},
gJ(a){return A.eB(a)},
l(a){return"Instance of '"+A.mj(a)+"'"},
gak(a){return A.bL(A.Cb(this))}}
J.lH.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gak(a){return A.bL(t.y)},
$iah:1,
$iQ:1}
J.iB.prototype={
R(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gak(a){return A.bL(t.P)},
$iah:1,
$iV:1}
J.aE.prototype={$iM:1}
J.dG.prototype={
gJ(a){return 0},
gak(a){return B.dx},
l(a){return String(a)}}
J.mh.prototype={}
J.dU.prototype={}
J.bR.prototype={
l(a){var s=a[$.FZ()]
if(s==null)s=a[$.f9()]
if(s==null)return this.or(a)
return"JavaScript function for "+J.a0(s)}}
J.br.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fz.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.B.prototype={
hK(a,b){return new A.bP(a,A.a_(a).i("@<1>").U(b).i("bP<1,2>"))},
u(a,b){a.$flags&1&&A.I(a,29)
a.push(b)},
is(a,b){var s
a.$flags&1&&A.I(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.vF(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.I(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.vF(b,null))
a.splice(b,0,c)},
k9(a,b,c){var s,r
a.$flags&1&&A.I(a,"insertAll",2)
A.DD(b,0,a.length,"index")
if(!t.O.b(c))c=J.GM(c)
s=J.ak(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.au(a,b,r,c)},
ks(a){a.$flags&1&&A.I(a,"removeLast",1)
if(a.length===0)throw A.b(A.Ar(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.I(a,"remove",1)
for(s=0;s<a.length;++s)if(J.w(a[s],b)){a.splice(s,1)
return!0}return!1},
t8(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.ay(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dt(a,b){return new A.aj(a,b,A.a_(a).i("aj<1>"))},
C(a,b){var s
a.$flags&1&&A.I(a,"addAll",2)
if(Array.isArray(b)){this.oP(a,b)
return}for(s=J.D(b);s.k();)a.push(s.gn())},
oP(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.ay(a))
for(s=0;s<r;++s)a.push(b[s])},
af(a){a.$flags&1&&A.I(a,"clear","clear")
a.length=0},
ce(a,b,c){return new A.X(a,b,A.a_(a).i("@<1>").U(c).i("X<1,2>"))},
B(a,b){var s,r=A.ae(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ef(a){return this.B(a,"")},
cL(a,b){return A.cu(a,0,A.bZ(b,"count",t.S),A.a_(a).c)},
bk(a,b){return A.cu(a,b,null,A.a_(a).c)},
fa(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.ay(a))}if(c!=null)return c.$0()
throw A.b(A.aD())},
mN(a,b){return this.fa(a,b,null)},
a7(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.as(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.as(c,b,a.length,"end",null))
if(b===c)return A.k([],A.a_(a))
return A.k(a.slice(b,c),A.a_(a))},
b6(a,b){return this.T(a,b,null)},
fL(a,b,c){A.ba(b,c,a.length)
return A.cu(a,b,c,A.a_(a).c)},
gG(a){if(a.length>0)return a[0]
throw A.b(A.aD())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aD())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aD())
throw A.b(A.iy())},
kt(a,b,c){a.$flags&1&&A.I(a,18)
A.ba(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.I(a,5)
A.ba(b,c,a.length)
s=c-b
if(s===0)return
A.b9(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.oY(d,e).cM(0,!1)
q=0}p=J.L(r)
if(q+s>p.gm(r))throw A.b(A.Dd())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
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
if(b==null)b=J.Ki()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a_(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e7(b,2))
if(p>0)this.t9(a,p)},
aF(a){return this.ck(a,null)},
t9(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bO(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.w(a[s],b))return s
return-1},
dh(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.w(a[s],b))return s
return-1},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.w(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gV(a){return a.length!==0},
l(a){return A.rW(a,"[","]")},
cM(a,b){var s=A.k(a.slice(0),A.a_(a))
return s},
eu(a){return this.cM(a,!0)},
gt(a){return new J.fd(a,a.length,A.a_(a).i("fd<1>"))},
gJ(a){return A.eB(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.I(a,"set length","change the length of")
if(b<0)throw A.b(A.as(b,0,null,"newLength",null))
if(b>a.length)A.a_(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.Ar(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
if(!(b>=0&&b<a.length))throw A.b(A.Ar(a,b))
a[b]=c},
kC(a,b){return new A.bH(a,b.i("bH<0>"))},
mR(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gak(a){return A.bL(A.a_(a))},
$ib7:1,
$iJ:1,
$io:1,
$ip:1}
J.lG.prototype={
xk(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mj(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.rX.prototype={}
J.fd.prototype={
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
else if(a===b){if(a===0){s=this.gke(b)
if(this.gke(a)===s)return 0
if(this.gke(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gke(a){return a===0?1/a<0:a<0},
iu(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
un(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
vz(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
x9(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bN(a,b,c){if(this.Z(b,c)>0)throw A.b(A.f4(b))
if(this.Z(a,b)<0)return b
if(this.Z(a,c)>0)return c
return a},
kz(a,b){var s,r,q,p
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
aj(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iM(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ma(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.ma(a,b)},
ma(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bC(a,b){if(b<0)throw A.b(A.f4(b))
return b>31?0:a<<b>>>0},
tv(a,b){return b>31?0:a<<b>>>0},
dA(a,b){var s
if(b<0)throw A.b(A.f4(b))
if(a>0)s=this.jA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ae(a,b){var s
if(a>0)s=this.jA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
m7(a,b){if(0>b)throw A.b(A.f4(b))
return this.jA(a,b)},
jA(a,b){return b>31?0:a>>>b},
o3(a,b){return a>b},
gak(a){return A.bL(t.o)},
$iau:1,
$iab:1,
$iaT:1}
J.iA.prototype={
gmu(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gak(a){return A.bL(t.S)},
$iah:1,
$ii:1}
J.lI.prototype={
gak(a){return A.bL(t.W)},
$iah:1}
J.dE.prototype={
jJ(a,b,c){var s=b.length
if(c>s)throw A.b(A.as(c,0,s,null,null))
return new A.oi(b,a,c)},
hF(a,b){return this.jJ(a,b,0)},
ej(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.as(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.h5(c,a)},
c7(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ad(a,r-s)},
kv(a,b,c){A.DD(0,0,a.length,"startIndex")
return A.Mn(a,b,c,0)},
cQ(a,b){var s
if(typeof b=="string")return A.k(a.split(b),t.s)
else{if(b instanceof A.es){s=b.e
s=!(s==null?b.e=b.pp():s)}else s=!1
if(s)return A.k(a.split(b.b),t.s)
else return this.pD(a,b)}},
dm(a,b,c,d){var s=A.ba(b,c,a.length)
return A.FP(a,b,s,d)},
pD(a,b){var s,r,q,p,o,n,m=A.k([],t.s)
for(s=J.B4(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
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
A(a,b,c){return a.substring(b,A.ba(b,c,a.length))},
ad(a,b){return this.A(a,b,null)},
ci(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.HC(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Dj(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
xi(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.Dj(r,s))},
bi(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bN)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ij(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bi(c,s)+a},
wC(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bi(" ",s)},
ca(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.as(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bO(a,b){return this.ca(a,b,0)},
ia(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.as(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dh(a,b){return this.ia(a,b,null)},
F(a,b){return A.Mk(a,b,0)},
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
gak(a){return A.bL(t.N)},
gm(a){return a.length},
$ib7:1,
$iah:1,
$iau:1,
$il:1}
A.y8.prototype={
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
kx(){var s,r=this
if(r.a===0)return $.oS()
s=J.bN(B.f.ga9(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.oS()
return s},
gm(a){return this.a}}
A.xJ.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b0(b))
this.b.push(s)
this.a=this.a+s.length},
kx(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.oS()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.af(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.q)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.au(q,p,m,n)}l.a=0
B.b.af(s)
return q},
gm(a){return this.a}}
A.dX.prototype={
gt(a){return new A.kW(J.D(this.gbc()),A.n(this).i("kW<1,2>"))},
gm(a){return J.ak(this.gbc())},
gE(a){return J.bA(this.gbc())},
gV(a){return J.ea(this.gbc())},
bk(a,b){var s=A.n(this)
return A.ff(J.oY(this.gbc(),b),s.c,s.y[1])},
cL(a,b){var s=A.n(this)
return A.ff(J.B7(this.gbc(),b),s.c,s.y[1])},
a7(a,b){return A.n(this).y[1].a(J.oW(this.gbc(),b))},
gG(a){return A.n(this).y[1].a(J.ci(this.gbc()))},
ga_(a){return A.n(this).y[1].a(J.oX(this.gbc()))},
gap(a){return A.n(this).y[1].a(J.B6(this.gbc()))},
F(a,b){return J.B5(this.gbc(),b)},
l(a){return J.a0(this.gbc())}}
A.kW.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ee.prototype={
gbc(){return this.a}}
A.jG.prototype={$iJ:1}
A.jD.prototype={
h(a,b){return this.$ti.y[1].a(J.S(this.a,b))},
j(a,b,c){J.c_(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.GH(this.a,b)},
u(a,b){J.aL(this.a,this.$ti.c.a(b))},
ck(a,b){var s=b==null?null:new A.xK(this,b)
J.CH(this.a,s)},
fL(a,b,c){var s=this.$ti
return A.ff(J.GE(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.GI(this.a,b,c,A.ff(d,s.y[1],s.c),e)},
au(a,b,c,d){return this.ai(0,b,c,d,0)},
$iJ:1,
$ip:1}
A.xK.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bP.prototype={
hK(a,b){return new A.bP(this.a,this.$ti.i("@<1>").U(b).i("bP<1,2>"))},
gbc(){return this.a}}
A.ef.prototype={
c4(a,b,c){return new A.ef(this.a,this.$ti.i("@<1,2>").U(b).U(c).i("ef<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a1(a,b){this.a.a1(0,new A.po(this,b))},
gK(){var s=this.$ti
return A.ff(this.a.gK(),s.c,s.y[2])},
gb3(){var s=this.$ti
return A.ff(this.a.gb3(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gV(a){var s=this.a
return s.gV(s)},
gaa(){var s=this.a.gaa()
return s.ce(s,new A.pn(this),this.$ti.i("R<3,4>"))}}
A.po.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pn.prototype={
$1(a){var s=this.a.$ti
return new A.R(s.y[2].a(a.a),s.y[3].a(a.b),s.i("R<3,4>"))},
$S(){return this.a.$ti.i("R<3,4>(R<1,2>)")}}
A.dF.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.ms.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cj.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.AJ.prototype={
$0(){return A.bj(null,t.H)},
$S:5}
A.vS.prototype={}
A.J.prototype={}
A.W.prototype={
gt(a){var s=this
return new A.ar(s,s.gm(s),A.n(s).i("ar<W.E>"))},
gE(a){return this.gm(this)===0},
gG(a){if(this.gm(this)===0)throw A.b(A.aD())
return this.a7(0,0)},
ga_(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
return s.a7(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
if(s.gm(s)>1)throw A.b(A.iy())
return s.a7(0,0)},
F(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.w(r.a7(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.ay(r))}return!1},
cE(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a7(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.ay(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a7(0,0))
if(o!==p.gm(p))throw A.b(A.ay(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a7(0,q))
if(o!==p.gm(p))throw A.b(A.ay(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a7(0,q))
if(o!==p.gm(p))throw A.b(A.ay(p))}return r.charCodeAt(0)==0?r:r}},
ef(a){return this.B(0,"")},
dt(a,b){return this.om(0,b)},
ce(a,b,c){return new A.X(this,b,A.n(this).i("@<W.E>").U(c).i("X<1,2>"))},
wY(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aD())
s=q.a7(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a7(0,r))
if(p!==q.gm(q))throw A.b(A.ay(q))}return s},
bk(a,b){return A.cu(this,b,null,A.n(this).i("W.E"))},
cL(a,b){return A.cu(this,0,A.bZ(b,"count",t.S),A.n(this).i("W.E"))}}
A.ct.prototype={
iN(a,b,c,d){var s,r=this.b
A.b9(r,"start")
s=this.c
if(s!=null){A.b9(s,"end")
if(r>s)throw A.b(A.as(r,0,s,"start",null))}},
gpN(){var s=J.ak(this.a),r=this.c
if(r==null||r>s)return s
return r},
gty(){var s=J.ak(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ak(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a7(a,b){var s=this,r=s.gty()+b
if(b<0||r>=s.gpN())throw A.b(A.lC(b,s.gm(0),s,null,"index"))
return J.oW(s.a,r)},
bk(a,b){var s,r,q=this
A.b9(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.en(q.$ti.i("en<1>"))
return A.cu(q.a,s,r,q.$ti.c)},
cL(a,b){var s,r,q,p=this
A.b9(b,"count")
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
return b?J.Dg(0,n):J.Bn(0,n)}r=A.ae(s,m.a7(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a7(n,o+q)
if(m.gm(n)<l)throw A.b(A.ay(p))}return r},
eu(a){return this.cM(0,!0)}}
A.ar.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.L(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.ay(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a7(q,s);++r.c
return!0}}
A.cl.prototype={
gt(a){return new A.lU(J.D(this.a),this.b,A.n(this).i("lU<1,2>"))},
gm(a){return J.ak(this.a)},
gE(a){return J.bA(this.a)},
gG(a){return this.b.$1(J.ci(this.a))},
ga_(a){return this.b.$1(J.oX(this.a))},
gap(a){return this.b.$1(J.B6(this.a))},
a7(a,b){return this.b.$1(J.oW(this.a,b))}}
A.em.prototype={$iJ:1}
A.lU.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.ak(this.a)},
a7(a,b){return this.b.$1(J.oW(this.a,b))}}
A.aj.prototype={
gt(a){return new A.cU(J.D(this.a),this.b,this.$ti.i("cU<1>"))},
ce(a,b,c){return new A.cl(this,b,this.$ti.i("@<1>").U(c).i("cl<1,2>"))}}
A.cU.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.io.prototype={
gt(a){return new A.lp(J.D(this.a),this.b,B.aQ,this.$ti.i("lp<1,2>"))}}
A.lp.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.D(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eI.prototype={
gt(a){var s=this.a
return new A.mW(s.gt(s),this.b,A.n(this).i("mW<1>"))}}
A.ik.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.o3(r,s))return s
return r},
$iJ:1}
A.mW.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.db.prototype={
bk(a,b){A.kD(b,"count")
A.b9(b,"count")
return new A.db(this.a,this.b+b,A.n(this).i("db<1>"))},
gt(a){var s=this.a
return new A.mI(s.gt(s),this.b,A.n(this).i("mI<1>"))}}
A.fr.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bk(a,b){A.kD(b,"count")
A.b9(b,"count")
return new A.fr(this.a,this.b+b,this.$ti)},
$iJ:1}
A.mI.prototype={
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
a7(a,b){throw A.b(A.as(b,0,0,"index",null))},
F(a,b){return!1},
cE(a,b){return!0},
dt(a,b){return this},
ce(a,b,c){return new A.en(c.i("en<0>"))},
bk(a,b){A.b9(b,"count")
return this},
cL(a,b){A.b9(b,"count")
return this},
cM(a,b){var s=J.Bn(0,this.$ti.c)
return s},
fD(a){return A.lS(this.$ti.c)}}
A.ln.prototype={
k(){return!1},
gn(){throw A.b(A.aD())}}
A.bH.prototype={
gt(a){return new A.nl(J.D(this.a),this.$ti.i("nl<1>"))}}
A.nl.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.ir.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
u(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.n7.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
ck(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
au(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.hc.prototype={}
A.bV.prototype={
gm(a){return J.ak(this.a)},
a7(a,b){var s=this.a,r=J.L(s)
return r.a7(s,r.gm(s)-1-b)}}
A.jn.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
R(a,b){if(b==null)return!1
return b instanceof A.jn&&this.a===b.a}}
A.kd.prototype={}
A.a4.prototype={$r:"+(1,2)",$s:1}
A.jW.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.jX.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hB.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.o5.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.eX.prototype={$r:"+(1,2,3)",$s:6}
A.eY.prototype={$r:"+(1,2,3,4)",$s:7}
A.o6.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.ig.prototype={}
A.fn.prototype={
c4(a,b,c){var s=A.n(this)
return A.Dn(this,s.c,s.y[1],b,c)},
gE(a){return this.gm(this)===0},
gV(a){return this.gm(this)!==0},
l(a){return A.tX(this)},
j(a,b,c){A.H5()},
gaa(){return new A.hG(this.vl(),A.n(this).i("hG<R<1,2>>"))},
vl(){var s=this
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
aU(a,b,c,d){var s=A.u(c,d)
this.a1(0,new A.q6(this,b,s))
return s},
$iG:1}
A.q6.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aU.prototype={
gm(a){return this.b.length},
glE(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a1(a,b){var s,r,q=this.glE(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.eU(this.glE(),this.$ti.i("eU<1>"))},
gb3(){return new A.eU(this.b,this.$ti.i("eU<2>"))}}
A.eU.prototype={
gm(a){return this.a.length},
gE(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hw(s,s.length,this.$ti.i("hw<1>"))}}
A.hw.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.it.prototype={
dJ(){var s=this,r=s.$map
if(r==null){r=new A.iC(s.$ti.i("iC<1,2>"))
A.Fw(s.a,r)
s.$map=r}return r},
I(a){return this.dJ().I(a)},
h(a,b){return this.dJ().h(0,b)},
a1(a,b){this.dJ().a1(0,b)},
gK(){var s=this.dJ()
return new A.T(s,A.n(s).i("T<1>"))},
gb3(){var s=this.dJ()
return new A.ao(s,A.n(s).i("ao<2>"))},
gm(a){return this.dJ().a}}
A.ih.prototype={
u(a,b){A.H6()}}
A.dw.prototype={
gm(a){return this.b},
gE(a){return this.b===0},
gV(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hw(s,s.length,r.$ti.i("hw<1>"))},
F(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.rR.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.ix&&this.a.R(0,b.a)&&A.Cn(this)===A.Cn(b)},
gJ(a){return A.c5(this.a,A.Cn(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bL(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.ix.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.M_(A.oJ(this.a),this.$ti)}}
A.v1.prototype={
$0(){return B.x.vz(1000*this.a.now())},
$S:11}
A.ja.prototype={}
A.wC.prototype={
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
A.j0.prototype={
l(a){return"Null check operator used on a null value"}}
A.lJ.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.n6.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.m8.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iH:1}
A.im.prototype={}
A.jZ.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaF:1}
A.eh.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.FU(r==null?"unknown":r)+"'"},
gak(a){var s=A.oJ(this)
return A.bL(s==null?A.bz(this):s)},
gyq(){return this},
$C:"$1",
$R:1,
$D:null}
A.pt.prototype={$C:"$0",$R:0}
A.pu.prototype={$C:"$2",$R:2}
A.ws.prototype={}
A.w2.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.FU(s)+"'"}}
A.i9.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.i9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kn(this.a)^A.eB(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mj(this.a)+"'")}}
A.mB.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bD.prototype={
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
return r[a]!=null}else return this.mT(a)},
mT(a){var s=this.d
if(s==null)return!1
return this.dg(this.ly(s,a),a)>=0},
C(a,b){b.a1(0,new A.rY(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mU(b)},
mU(a){var s,r,q=this.d
if(q==null)return null
s=this.ly(q,a)
r=this.dg(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.l_(s==null?q.b=q.jn():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.l_(r==null?q.c=q.jn():r,b,c)}else q.mW(b,c)},
mW(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jn()
s=p.ee(a)
r=o[s]
if(r==null)o[s]=[p.iP(a,b)]
else{q=p.dg(r,a)
if(q>=0)r[q].b=b
else r.push(p.iP(a,b))}},
kp(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.lZ(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lZ(s.c,b)
else return s.mV(b)},
mV(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ee(a)
r=n[s]
q=o.dg(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mg(p)
if(r.length===0)delete n[s]
return p.b},
af(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iO()}},
a1(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ay(s))
r=r.c}},
l_(a,b,c){var s=a[b]
if(s==null)a[b]=this.iP(b,c)
else s.b=c},
lZ(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mg(s)
delete a[b]
return s.b},
iO(){this.r=this.r+1&1073741823},
iP(a,b){var s,r=this,q=new A.tG(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iO()
return q},
mg(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iO()},
ee(a){return J.a7(a)&1073741823},
ly(a,b){return a[this.ee(b)]},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.w(a[r].a,b))return r
return-1},
l(a){return A.tX(this)},
jn(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.rY.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.tG.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bE(s,s.r,s.e,this.$ti.i("bE<1>"))},
F(a,b){return this.a.I(b)}}
A.bE.prototype={
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
return new A.b1(s,s.r,s.e,this.$ti.i("b1<1>"))}}
A.b1.prototype={
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
return new A.lR(s,s.r,s.e,this.$ti.i("lR<1,2>"))}}
A.lR.prototype={
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
A.iD.prototype={
ee(a){return A.kn(a)&1073741823},
dg(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iC.prototype={
ee(a){return A.Lt(a)&1073741823},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.w(a[r].a,b))return r
return-1}}
A.AD.prototype={
$1(a){return this.a(a)},
$S:32}
A.AE.prototype={
$2(a,b){return this.a(a,b)},
$S:80}
A.AF.prototype={
$1(a){return this.a(a)},
$S:45}
A.hA.prototype={
gak(a){return A.bL(this.lz())},
lz(){return A.LK(this.$r,this.h1())},
l(a){return this.me(!1)},
me(a){var s,r,q,p,o,n=this.pV(),m=this.h1(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Dy(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pV(){var s,r=this.$s
while($.z3.length<=r)$.z3.push(null)
s=$.z3[r]
if(s==null){s=this.po()
$.z3[r]=s}return s},
po(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Df(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.d3(j,k)}}
A.o2.prototype={
h1(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.o2&&this.$s===b.$s&&J.w(this.a,b.a)&&J.w(this.b,b.b)},
gJ(a){return A.c5(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.o3.prototype={
h1(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.o3&&s.$s===b.$s&&J.w(s.a,b.a)&&J.w(s.b,b.b)&&J.w(s.c,b.c)},
gJ(a){var s=this
return A.c5(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.o4.prototype={
h1(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.o4&&this.$s===b.$s&&A.Jo(this.a,b.a)},
gJ(a){return A.c5(this.$s,A.un(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.es.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glK(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Bp(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gr7(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Bp(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pp(){var s,r=this.a
if(!B.a.F(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
eb(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hz(s)},
jJ(a,b,c){var s=b.length
if(c>s)throw A.b(A.as(c,0,s,null,null))
return new A.nu(this,b,c)},
hF(a,b){return this.jJ(0,b,0)},
pS(a,b){var s,r=this.glK()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hz(s)},
pR(a,b){var s,r=this.gr7()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hz(s)},
ej(a,b,c){if(c<0||c>b.length)throw A.b(A.as(c,0,b.length,null,null))
return this.pR(b,c)}}
A.hz.prototype={
gP(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$iew:1,
$imt:1}
A.nu.prototype={
gt(a){return new A.nv(this.a,this.b,this.c)}}
A.nv.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pS(l,s)
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
A.h5.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.vF(b,null))
return this.c},
$iew:1,
gP(){return this.a}}
A.oi.prototype={
gt(a){return new A.zo(this.a,this.b,this.c)},
gG(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h5(r,s)
throw A.b(A.aD())}}
A.zo.prototype={
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
A.nD.prototype={
bb(){var s=this.b
if(s===this)throw A.b(new A.dF("Local '"+this.a+"' has not been initialized."))
return s},
bw(){var s=this.b
if(s===this)throw A.b(A.Dm(this.a))
return s},
smM(a){var s=this
if(s.b!==s)throw A.b(new A.dF("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fG.prototype={
gak(a){return B.dq},
hH(a,b,c){A.hO(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mr(a){return this.hH(a,0,null)},
mq(a,b,c){A.hO(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hG(a,b,c){A.hO(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mp(a){return this.hG(a,0,null)},
$iah:1,
$ied:1}
A.fF.prototype={$ifF:1}
A.iW.prototype={
ga9(a){if(((a.$flags|0)&2)!==0)return new A.oq(a.buffer)
else return a.buffer},
qW(a,b,c,d){var s=A.as(b,0,c,d,null)
throw A.b(s)},
la(a,b,c,d){if(b>>>0!==b||b>c)this.qW(a,b,c,d)}}
A.oq.prototype={
hH(a,b,c){var s=A.bU(this.a,b,c)
s.$flags=3
return s},
mr(a){return this.hH(0,0,null)},
mq(a,b,c){var s=A.Dr(this.a,b,c)
s.$flags=3
return s},
hG(a,b,c){var s=A.Dq(this.a,b,c)
s.$flags=3
return s},
mp(a){return this.hG(0,0,null)},
$ied:1}
A.iV.prototype={
gak(a){return B.dr},
$iah:1,
$iB8:1}
A.fH.prototype={
gm(a){return a.length},
m5(a,b,c,d,e){var s,r,q=a.length
this.la(a,b,q,"start")
this.la(a,c,q,"end")
if(b>c)throw A.b(A.as(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.N(e,null))
r=d.length
if(r-e<s)throw A.b(A.x("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ib7:1,
$ibS:1}
A.dN.prototype={
h(a,b){A.dm(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.I(a)
A.dm(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.dQ.b(d)){this.m5(a,b,c,d,e)
return}this.kX(a,b,c,d,e)},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.bT.prototype={
j(a,b,c){a.$flags&2&&A.I(a)
A.dm(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.I(a,5)
if(t.aj.b(d)){this.m5(a,b,c,d,e)
return}this.kX(a,b,c,d,e)},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.m1.prototype={
gak(a){return B.ds},
T(a,b,c){return new Float32Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$irc:1}
A.m2.prototype={
gak(a){return B.dt},
T(a,b,c){return new Float64Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$ird:1}
A.m3.prototype={
gak(a){return B.du},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$irS:1}
A.m4.prototype={
gak(a){return B.dv},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$irT:1}
A.m5.prototype={
gak(a){return B.dw},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$irU:1}
A.iX.prototype={
gak(a){return B.dA},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iwF:1}
A.iY.prototype={
gak(a){return B.dB},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iwG:1}
A.iZ.prototype={
gak(a){return B.dC},
gm(a){return a.length},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iwH:1}
A.ex.prototype={
gak(a){return B.dD},
gm(a){return a.length},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iah:1,
$iex:1,
$icQ:1}
A.jS.prototype={}
A.jT.prototype={}
A.jU.prototype={}
A.jV.prototype={}
A.cp.prototype={
i(a){return A.k7(v.typeUniverse,this,a)},
U(a){return A.En(v.typeUniverse,this,a)}}
A.nQ.prototype={}
A.on.prototype={
l(a){return A.bx(this.a,null)}}
A.nN.prototype={
l(a){return this.a}}
A.k3.prototype={$ide:1}
A.xr.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:34}
A.xq.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:136}
A.xs.prototype={
$0(){this.a.$0()},
$S:3}
A.xt.prototype={
$0(){this.a.$0()},
$S:3}
A.k2.prototype={
oL(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e7(new A.zr(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oM(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e7(new A.zq(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
D(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idd:1}
A.zr.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.zq.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iM(s,o)}q.c=p
r.d.$1(q)},
$S:3}
A.jw.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aL(a)
else{s=r.a
if(r.$ti.i("z<1>").b(a))s.l9(a)
else s.cU(a)}},
c6(a,b){var s
if(b==null)b=A.i6(a)
s=this.a
if(this.b)s.am(new A.al(a,b))
else s.cm(new A.al(a,b))},
aS(a){return this.c6(a,null)},
$iid:1}
A.zS.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.zT.prototype={
$2(a,b){this.a.$2(1,new A.im(a,b))},
$S:152}
A.Aa.prototype={
$2(a,b){this.a(a,b)},
$S:189}
A.zQ.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.A()
s=q.b
if((s&1)!==0?(q.gaN().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.zR.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:34}
A.nx.prototype={
oH(a,b){var s=new A.xv(a)
this.a=A.w4(new A.xx(this,a),new A.xy(s),new A.xz(this,s),!1,b)}}
A.xv.prototype={
$0(){A.kq(new A.xw(this.a))},
$S:3}
A.xw.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.xy.prototype={
$0(){this.a.$0()},
$S:0}
A.xz.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.xx.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.A()
if((r.b&4)===0){s.c=new A.t($.C,t._)
if(s.b){s.b=!1
A.kq(new A.xu(this.b))}return s.c}},
$S:238}
A.xu.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jO.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.ok.prototype={
gn(){return this.b},
ta(a,b){var s,r,q
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
o.d=null}q=o.ta(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Eh
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Eh
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.x("sync*"))}return!1},
yr(a){var s,r,q=this
if(a instanceof A.hG){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.D(a)
return 2}}}
A.hG.prototype={
gt(a){return new A.ok(this.a(),this.$ti.i("ok<1>"))}}
A.al.prototype={
l(a){return A.r(this.a)},
$iad:1,
gcl(){return this.b}}
A.aZ.prototype={}
A.eO.prototype={
bG(){},
bH(){}}
A.jC.prototype={
gcR(){return new A.aZ(this,A.n(this).i("aZ<1>"))},
gi9(){return(this.c&4)!==0},
gjl(){return this.c<4},
t7(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.E8(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.nB(r,a,s.c)
n=A.xG(r,b)
m=c==null?A.Ab():c
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
if(j.d===l)A.oF(j.a)
return l},
lS(a){var s,r=this
A.n(r).i("eO<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.t7(a)
if((r.c&2)===0&&r.d==null)r.pb()}return null},
lT(a){},
lU(a){},
iR(){if((this.c&4)!==0)return new A.bk("Cannot add new events after calling close")
return new A.bk("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjl())throw A.b(this.iR())
this.cv(b)},
bz(a,b){var s
if(!this.gjl())throw A.b(this.iR())
s=A.f1(a,b)
this.cw(s.a,s.b)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjl())throw A.b(q.iR())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.t($.C,t.D)
q.d6()
return r},
aH(a,b){this.cw(a,b)},
aR(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aL(null)},
pb(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aL(null)}A.oF(this.b)},
$ibC:1}
A.jx.prototype={
cv(a){var s,r
for(s=this.d,r=this.$ti.i("ca<1>");s!=null;s=s.ch)s.bY(new A.ca(a,r))},
cw(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bY(new A.hr(a,b))},
d6(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bY(B.aa)
else this.r.aL(null)}}
A.rm.prototype={
$0(){this.c.a(null)
this.b.cn(null)},
$S:0}
A.ro.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.am(new A.al(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.am(new A.al(q,r))}},
$S:14}
A.rn.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.c_(j,m.b,a)
if(J.w(k,0)){l=m.d
s=A.k([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aL(s,n)}m.c.cU(s)}}else if(J.w(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.am(new A.al(s,l))}},
$S(){return this.d.i("V(0)")}}
A.rh.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aF)")}}
A.mX.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iH:1}
A.ri.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.k([],l.c.i("B<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aB(s)}else{s=A.k([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(r[p].c)
q=l.c
n=A.k([],q.i("B<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.q)(r),++p)n.push(r[p].b)
l.a.aS(new A.j2(B.b.mN(s,A.L6()),a,q.i("j2<p<0?>,p<al?>>")))}},
$S:8}
A.j2.prototype={
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
A.jM.prototype={
tP(a){this.a.bU(new A.yq(this,a),new A.yr(this,a),t.P)}}
A.yq.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("V(1)")}}
A.yr.prototype={
$2(a,b){this.a.c=new A.al(a,b)
this.b.$1(1)},
$S:12}
A.yp.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eP.prototype={
c6(a,b){if((this.a.a&30)!==0)throw A.b(A.x("Future already completed"))
this.am(A.f1(a,b))},
aS(a){return this.c6(a,null)},
$iid:1}
A.aH.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.aL(a)},
an(){return this.aB(null)},
am(a){this.a.cm(a)}}
A.am.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.cn(a)},
an(){return this.aB(null)},
am(a){this.a.am(a)}}
A.cb.prototype={
wr(a){if((this.c&15)!==6)return!0
return this.b.b.es(this.d,a.a,t.y,t.K)},
vN(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kw(r,n,a.b,p,o,t.l)
else q=m.es(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.E(s))){if((this.c&1)!==0)throw A.b(A.N("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.N("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.t.prototype={
bU(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aA(b,"onError",u.w))}else{a=q.dl(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.EZ(b,q)}s=new A.t($.C,c.i("t<0>"))
r=b==null?1:3
this.dE(new A.cb(s,r,a,b,this.$ti.i("@<1>").U(c).i("cb<1,2>")))
return s},
a2(a,b){return this.bU(a,null,b)},
mc(a,b,c){var s=new A.t($.C,c.i("t<0>"))
this.dE(new A.cb(s,19,a,b,this.$ti.i("@<1>").U(c).i("cb<1,2>")))
return s},
mv(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=A.EZ(a,r)
this.dE(new A.cb(q,2,null,a,s.i("cb<1,1>")))
return q},
aY(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=r.bT(a,t.z)
this.dE(new A.cb(q,8,a,null,s.i("cb<1,1>")))
return q},
tq(a){this.a=this.a&1|16
this.c=a},
fU(a){this.a=a.a&30|this.a&1
this.c=a.c},
dE(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dE(a)
return}s.fU(r)}s.b.cO(new A.ys(s,a))}},
lP(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lP(a)
return}n.fU(s)}m.a=n.hp(a)
n.b.cO(new A.yx(m,n))}},
eT(){var s=this.c
this.c=null
return this.hp(s)},
hp(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cn(a){var s,r=this
if(r.$ti.i("z<1>").b(a))A.yv(a,r,!0)
else{s=r.eT()
r.a=8
r.c=a
A.eS(r,s)}},
cU(a){var s=this,r=s.eT()
s.a=8
s.c=a
A.eS(s,r)},
pn(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gc8()===r.gc8())}else s=!1
if(s)return
q=p.eT()
p.fU(a)
A.eS(p,q)},
am(a){var s=this.eT()
this.tq(a)
A.eS(this,s)},
pm(a,b){this.am(new A.al(a,b))},
aL(a){if(this.$ti.i("z<1>").b(a)){this.l9(a)
return}this.l6(a)},
l6(a){this.a^=2
this.b.cO(new A.yu(this,a))},
l9(a){A.yv(a,this,!1)
return},
cm(a){this.a^=2
this.b.cO(new A.yt(this,a))},
it(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.t($.C,r.$ti)
q.aL(r)
return q}s=new A.t($.C,r.$ti)
q.a=null
q.a=A.cP(a,new A.yD(s,a))
r.bU(new A.yE(q,r,s),new A.yF(q,s),t.P)
return s},
$iz:1}
A.ys.prototype={
$0(){A.eS(this.a,this.b)},
$S:0}
A.yx.prototype={
$0(){A.eS(this.b,this.a.a)},
$S:0}
A.yw.prototype={
$0(){A.yv(this.a.a,this.b,!0)},
$S:0}
A.yu.prototype={
$0(){this.a.cU(this.b)},
$S:0}
A.yt.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.yA.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aW(q.d,t.z)}catch(p){s=A.E(p)
r=A.ag(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.i6(q)
n=k.a
n.c=new A.al(q,o)
q=n}q.b=!0
return}if(j instanceof A.t&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.t){m=k.b.a
l=new A.t(m.b,m.$ti)
j.bU(new A.yB(l,m),new A.yC(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.yB.prototype={
$1(a){this.a.pn(this.b)},
$S:34}
A.yC.prototype={
$2(a,b){this.a.am(new A.al(a,b))},
$S:12}
A.yz.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.es(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.E(n)
r=A.ag(n)
q=s
p=r
if(p==null)p=A.i6(q)
o=this.a
o.c=new A.al(q,p)
o.b=!0}},
$S:0}
A.yy.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.wr(s)&&p.a.e!=null){p.c=p.a.vN(s)
p.b=!1}}catch(o){r=A.E(o)
q=A.ag(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.i6(p)
m=l.b
m.c=new A.al(p,n)
p=m}p.b=!0}},
$S:0}
A.yD.prototype={
$0(){var s=A.BI()
this.a.am(new A.al(new A.mX("Future not completed",this.b),s))},
$S:0}
A.yE.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.D()
this.c.cU(a)}},
$S(){return this.b.$ti.i("V(1)")}}
A.yF.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.D()
this.b.am(new A.al(a,b))}},
$S:12}
A.nw.prototype={}
A.aa.prototype={
ef(a){var s=new A.t($.C,t.os),r=new A.a2(""),q=this.a8(null,!0,new A.w7(s,r),s.giY())
q.ig(new A.w8(this,r,q,s))
return s},
gm(a){var s={},r=new A.t($.C,t.hy)
s.a=0
this.a8(new A.w9(s,this),!0,new A.wa(s,r),r.giY())
return r},
gG(a){var s=new A.t($.C,A.n(this).i("t<aa.T>")),r=this.a8(null,!0,new A.w5(s),s.giY())
r.ig(new A.w6(this,r,s))
return s}}
A.w7.prototype={
$0(){var s=this.b.a
this.a.cn(s.charCodeAt(0)==0?s:s)},
$S:0}
A.w8.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.E(o)
r=A.ag(o)
q=s
p=r
n=A.ke(q,p)
if(n==null)q=new A.al(q,p)
else q=n
A.JU(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.w9.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(aa.T)")}}
A.wa.prototype={
$0(){this.b.cn(this.a.a)},
$S:0}
A.w5.prototype={
$0(){var s,r=A.BI(),q=new A.bk("No element")
A.ml(q,r)
s=A.ke(q,r)
if(s==null)s=new A.al(q,r)
this.a.am(s)},
$S:0}
A.w6.prototype={
$1(a){A.JV(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.jk.prototype={
a8(a,b,c,d){return this.a.a8(a,b,c,d)},
bP(a,b,c){return this.a8(a,null,b,c)},
aT(a){return this.a8(a,null,null,null)}}
A.e2.prototype={
gcR(){return new A.b5(this,A.n(this).i("b5<1>"))},
gi9(){return(this.b&4)!==0},
grz(){if((this.b&8)===0)return this.a
return this.a.c},
fY(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e1(A.n(q).i("e1<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e1(A.n(q).i("e1<1>")):s},
gaN(){var s=this.a
return(this.b&8)!==0?s.c:s},
bE(){if((this.b&4)!==0)return new A.bk("Cannot add event after closing")
return new A.bk("Cannot add event while adding a stream")},
u7(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bE())
if((o&2)!==0){o=new A.t($.C,t._)
o.aL(null)
return o}o=p.a
s=b===!0
r=new A.t($.C,t._)
q=s?A.IM(p):p.goQ()
q=a.a8(p.goU(),s,p.gpd(),q)
s=p.b
if((s&1)!==0?(p.gaN().e&4)!==0:(s&2)===0)q.bs()
p.a=new A.k_(o,r,q,A.n(p).i("k_<1>"))
p.b|=8
return r},
lr(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.e9():new A.t($.C,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bE())
this.aA(b)},
bz(a,b){var s
if(this.b>=4)throw A.b(this.bE())
s=A.f1(a,b)
this.aH(s.a,s.b)},
u6(a){return this.bz(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lr()
if(r>=4)throw A.b(s.bE())
s.lb()
return s.lr()},
lb(){var s=this.b|=4
if((s&1)!==0)this.d6()
else if((s&3)===0)this.fY().u(0,B.aa)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.cv(a)
else if((r&3)===0)s.fY().u(0,new A.ca(a,A.n(s).i("ca<1>")))},
aH(a,b){var s=this.b
if((s&1)!==0)this.cw(a,b)
else if((s&3)===0)this.fY().u(0,new A.hr(a,b))},
aR(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aL(null)},
jB(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.x("Stream has already been listened to."))
s=A.J3(p,a,b,c,d,A.n(p).c)
r=p.grz()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.bf()}else p.a=s
s.tr(r)
s.j5(new A.zk(p))
return s},
lS(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.D()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.t)k=r}catch(o){q=A.E(o)
p=A.ag(o)
n=new A.t($.C,t.D)
n.cm(new A.al(q,p))
k=n}else k=k.aY(s)
m=new A.zj(l)
if(k!=null)k=k.aY(m)
else m.$0()
return k},
lT(a){if((this.b&8)!==0)this.a.b.bs()
A.oF(this.e)},
lU(a){if((this.b&8)!==0)this.a.b.bf()
A.oF(this.f)},
$ibC:1}
A.zk.prototype={
$0(){A.oF(this.a.d)},
$S:0}
A.zj.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aL(null)},
$S:0}
A.ol.prototype={
cv(a){this.gaN().aA(a)},
cw(a,b){this.gaN().aH(a,b)},
d6(){this.gaN().aR()}}
A.jy.prototype={
cv(a){this.gaN().bY(new A.ca(a,A.n(this).i("ca<1>")))},
cw(a,b){this.gaN().bY(new A.hr(a,b))},
d6(){this.gaN().bY(B.aa)}}
A.cV.prototype={}
A.hH.prototype={}
A.b5.prototype={
gJ(a){return(A.eB(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b5&&b.a===this.a}}
A.dY.prototype={
hi(){return this.w.lS(this)},
bG(){this.w.lT(this)},
bH(){this.w.lU(this)}}
A.nt.prototype={
D(){var s=this.b.D()
return s.aY(new A.xm(this))}}
A.xn.prototype={
$2(a,b){var s=this.a
s.aH(a,b)
s.aR()},
$S:12}
A.xm.prototype={
$0(){this.a.a.aL(null)},
$S:3}
A.k_.prototype={}
A.b_.prototype={
tr(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fM(s)}},
ig(a){this.a=A.nB(this.d,a,A.n(this).i("b_.T"))},
bs(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.j5(q.geJ())},
bf(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fM(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.j5(s.geK())}}},
D(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.iU()
r=s.f
return r==null?$.e9():r},
iU(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hi()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cv(a)
else s.bY(new A.ca(a,A.n(s).i("ca<b_.T>")))},
aH(a,b){var s
if(t.C.b(a))A.ml(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cw(a,b)
else this.bY(new A.hr(a,b))},
aR(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d6()
else s.bY(B.aa)},
bG(){},
bH(){},
hi(){return null},
bY(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e1(A.n(r).i("e1<b_.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fM(r)}},
cv(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fC(s.a,a,A.n(s).i("b_.T"))
s.e=(s.e&4294967231)>>>0
s.iW((r&4)!==0)},
cw(a,b){var s,r=this,q=r.e,p=new A.xI(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.iU()
s=r.f
if(s!=null&&s!==$.e9())s.aY(p)
else p.$0()}else{p.$0()
r.iW((q&4)!==0)}},
d6(){var s,r=this,q=new A.xH(r)
r.iU()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.e9())s.aY(q)
else q.$0()},
j5(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.iW((r&4)!==0)},
iW(a){var s,r,q=this,p=q.e
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
$ibl:1}
A.xI.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.ne(s,o,this.c,r,t.l)
else q.fC(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.xH.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fB(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hF.prototype={
a8(a,b,c,d){return this.a.jB(a,d,c,b===!0)},
bP(a,b,c){return this.a8(a,null,b,c)},
aT(a){return this.a8(a,null,null,null)},
wh(a,b){return this.a8(a,null,null,b)}}
A.nM.prototype={
gek(){return this.a},
sek(a){return this.a=a}}
A.ca.prototype={
kn(a){a.cv(this.b)}}
A.hr.prototype={
kn(a){a.cw(this.b,this.c)}}
A.yi.prototype={
kn(a){a.d6()},
gek(){return null},
sek(a){throw A.b(A.x("No events after a done."))}}
A.e1.prototype={
fM(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kq(new A.z2(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sek(b)
s.c=b}}}
A.z2.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gek()
q.b=r
if(r==null)q.c=null
s.kn(this.b)},
$S:0}
A.hs.prototype={
ig(a){},
bs(){var s=this.a
if(s>=0)this.a=s+2},
bf(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kq(s.glM())}else s.a=r},
D(){this.a=-1
this.c=null
return $.e9()},
rm(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fB(s)}}else r.a=q},
$ibl:1}
A.cd.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.t($.C,t.g5)
r.b=s
r.c=!1
q.bf()
return s}throw A.b(A.x("Already waiting for next."))}return r.qV()},
qV(){var s,r,q=this,p=q.b
if(p!=null){s=new A.t($.C,t.g5)
q.b=s
r=p.a8(q.gre(),!0,q.grg(),q.gri())
if(q.b!=null)q.a=r
return s}return $.G_()},
D(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aL(!1)
else s.c=!1
return r.D()}return $.e9()},
rf(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cn(!0)
if(q.c){r=q.a
if(r!=null)r.bs()}},
rj(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.am(new A.al(a,b))
else q.cm(new A.al(a,b))},
rh(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cU(!1)
else q.l6(!1)}}
A.jH.prototype={
a8(a,b,c,d){return A.E8(c,this.$ti.c)},
bP(a,b,c){return this.a8(a,null,b,c)}}
A.dk.prototype={
a8(a,b,c,d){var s=null,r=new A.jR(s,s,s,s,this.$ti.i("jR<1>"))
r.d=new A.z0(this,r)
return r.jB(a,d,c,b===!0)},
bP(a,b,c){return this.a8(a,null,b,c)},
aT(a){return this.a8(a,null,null,null)}}
A.z0.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jR.prototype={
u8(a){var s=this.b
if(s>=4)throw A.b(this.bE())
if((s&1)!==0)this.gaN().aA(a)},
uq(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bE())
r|=4
s.b=r
if((r&1)!==0)s.gaN().aR()},
gcR(){throw A.b(A.Y("Not available"))},
$idL:1}
A.zV.prototype={
$0(){return this.a.am(this.b)},
$S:0}
A.zW.prototype={
$0(){return this.a.cn(this.b)},
$S:0}
A.jK.prototype={
a8(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nB(r,a,s.y[1]),n=A.xG(r,d),m=c==null?A.Ab():c
s=new A.hv(this,o,n,r.bT(m,t.H),r,q|p,s.i("hv<1,2>"))
s.x=this.a.bP(s.gj7(),s.gj9(),s.gjb())
return s},
bP(a,b,c){return this.a8(a,null,b,c)}}
A.hv.prototype={
aA(a){if((this.e&2)!==0)return
this.iL(a)},
aH(a,b){if((this.e&2)!==0)return
this.kY(a,b)},
bG(){var s=this.x
if(s!=null)s.bs()},
bH(){var s=this.x
if(s!=null)s.bf()},
hi(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j8(a){this.w.q7(a,this)},
jc(a,b){this.aH(a,b)},
ja(){this.aR()}}
A.eV.prototype={
q7(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.E(q)
r=A.ag(q)
p=s
o=r
n=A.ke(p,o)
if(n!=null){p=n.a
o=n.b}b.aH(p,o)
return}b.aA(m)}}
A.jI.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.v(A.x("Stream is already closed"))
s.iL(b)},
bz(a,b){this.a.aH(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.v(A.x("Stream is already closed"))
s.kZ()},
$ibC:1}
A.hD.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.iL(a)},
aH(a,b){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.kY(a,b)},
aR(){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.kZ()},
bG(){var s=this.x
if(s!=null)s.bs()},
bH(){var s=this.x
if(s!=null)s.bf()},
hi(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j8(a){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.u(0,a)}catch(p){s=A.E(p)
r=A.ag(p)
this.aH(s,r)}},
jc(a,b){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.bz(a,b)}catch(p){s=A.E(p)
r=A.ag(p)
if(s===a)this.aH(a,b)
else this.aH(s,r)}},
ja(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.A()
q.q()}catch(p){s=A.E(p)
r=A.ag(p)
this.aH(s,r)}}}
A.jB.prototype={
a8(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nB(r,a,s.y[1]),n=A.xG(r,d),m=c==null?A.Ab():c,l=new A.hD(o,n,r.bT(m,t.H),r,q|p,s.i("hD<1,2>"))
l.w=this.a.$1(new A.jI(l,s.i("jI<2>")))
l.x=this.b.bP(l.gj7(),l.gj9(),l.gjb())
return l},
bP(a,b,c){return this.a8(a,null,b,c)}}
A.zN.prototype={}
A.zP.prototype={}
A.zO.prototype={}
A.zL.prototype={}
A.zM.prototype={}
A.zK.prototype={}
A.zH.prototype={}
A.oy.prototype={}
A.zG.prototype={}
A.zF.prototype={}
A.zJ.prototype={}
A.zI.prototype={}
A.ox.prototype={
vF(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.oz.prototype={}
A.ow.prototype={
eP(a,b,c){var s,r,q,p,o,n,m=this.gji(),l=m.a
if(l===B.i){A.kj(b,c)
return}o=l.gkk()
o.toString
s=o
r=$.C
try{$.C=s
m.vF(l,l.gb8(),a,b,c)
$.C=r}catch(n){q=A.E(n)
p=A.ag(n)
$.C=r
o=b===q?c:p
s.eP(l,q,o)}},
$iP:1}
A.nG.prototype={
glo(){var s=this.ax
return s==null?this.ax=new A.hM(this):s},
gb8(){return this.ay.glo()},
gc8(){return this.as.a},
fB(a){var s,r,q
try{this.aW(a,t.H)}catch(q){s=A.E(q)
r=A.ag(q)
this.eP(this,s,r)}},
fC(a,b,c){var s,r,q
try{this.es(a,b,t.H,c)}catch(q){s=A.E(q)
r=A.ag(q)
this.eP(this,s,r)}},
ne(a,b,c,d,e){var s,r,q
try{this.kw(a,b,c,t.H,d,e)}catch(q){s=A.E(q)
r=A.ag(q)
this.eP(this,s,r)}},
jL(a,b){return new A.ye(this,this.bT(a,b),b)},
ul(a,b,c){return new A.yg(this,this.dl(a,b,c),c,b)},
f_(a){return new A.yd(this,this.bT(a,t.H))},
hJ(a,b){return new A.yf(this,this.dl(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aM)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.t4(q,b)},
t4(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkk().gjI()
if(s===B.aM)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fe(a,b){this.eP(this,a,b)},
mO(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
aW(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
es(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb8(),this,a,b,c,d)},
kw(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb8(),this,a,b,c,d,e,f)},
bT(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
dl(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb8(),this,a,b,c)},
fu(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb8(),this,a,b,c,d)},
mJ(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb8(),this,a,b)},
cO(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb8(),this,a)},
jQ(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
jP(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
gm0(){return this.a},
gm2(){return this.b},
gm1(){return this.c},
glX(){return this.d},
glY(){return this.e},
glW(){return this.f},
glt(){return this.r},
gjy(){return this.w},
glm(){return this.x},
gll(){return this.y},
glQ(){return this.z},
glw(){return this.Q},
gji(){return this.as},
gjI(){return this.at},
gkk(){return this.ay}}
A.ye.prototype={
$0(){return this.a.aW(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.yg.prototype={
$1(a){var s=this
return s.a.es(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").U(this.c).i("1(2)")}}
A.yd.prototype={
$0(){return this.a.fB(this.b)},
$S:0}
A.yf.prototype={
$1(a){return this.a.fC(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.o9.prototype={
gm0(){return B.dT},
gm2(){return B.dS},
gm1(){return B.dR},
glX(){return B.dP},
glY(){return B.dQ},
glW(){return B.dO},
glt(){return B.dK},
gjy(){return B.dU},
glm(){return B.dJ},
gll(){return B.dI},
glQ(){return B.dN},
glw(){return B.dL},
gji(){return B.dM},
gjI(){return B.aM},
gkk(){return null},
glo(){var s=$.z7
return s==null?$.z7=new A.hM(this):s},
gb8(){var s=$.z7
return s==null?$.z7=new A.hM(this):s},
gc8(){return this},
fB(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.A6(null,null,this,a)}catch(q){s=A.E(q)
r=A.ag(q)
A.kj(s,r)}},
fC(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.A7(null,null,this,a,b)}catch(q){s=A.E(q)
r=A.ag(q)
A.kj(s,r)}},
ne(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.Cd(null,null,this,a,b,c)}catch(q){s=A.E(q)
r=A.ag(q)
A.kj(s,r)}},
jL(a,b){return new A.z9(this,a,b)},
f_(a){return new A.z8(this,a)},
hJ(a,b){return new A.za(this,a,b)},
h(a,b){return null},
fe(a,b){A.kj(a,b)},
mO(a,b){return A.F0(null,null,this,a,b)},
aW(a){if($.C===B.i)return a.$0()
return A.A6(null,null,this,a)},
es(a,b){if($.C===B.i)return a.$1(b)
return A.A7(null,null,this,a,b)},
kw(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.Cd(null,null,this,a,b,c)},
bT(a){return a},
dl(a){return a},
fu(a){return a},
mJ(a,b){return null},
cO(a){A.A8(null,null,this,a)},
jQ(a,b){return A.BO(a,b)},
jP(a,b){return A.DL(a,b)}}
A.z9.prototype={
$0(){return this.a.aW(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.z8.prototype={
$0(){return this.a.fB(this.b)},
$S:0}
A.za.prototype={
$1(a){return this.a.fC(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hM.prototype={$iat:1}
A.A5.prototype={
$0(){A.D2(this.a,this.b)},
$S:0}
A.jv.prototype={}
A.di.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gV(a){return this.a!==0},
gK(){return new A.eT(this,A.n(this).i("eT<1>"))},
gb3(){var s=A.n(this)
return A.dJ(new A.eT(this,s.i("eT<1>")),new A.yH(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lh(a)},
lh(a){var s=this.d
if(s==null)return!1
return this.c0(this.ld(s,a),a)>=0},
C(a,b){b.a1(0,new A.yG(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Ea(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Ea(q,b)
return r}else return this.lx(b)},
lx(a){var s,r,q=this.d
if(q==null)return null
s=this.ld(q,a)
r=this.c0(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.l3(s==null?q.b=A.BZ():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.l3(r==null?q.c=A.BZ():r,b,c)}else q.m4(b,c)},
m4(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.BZ()
s=p.co(a)
r=o[s]
if(r==null){A.C_(o,s,[a,b]);++p.a
p.e=null}else{q=p.c0(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a1(a,b){var s,r,q,p,o,n=this,m=n.lc()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.ay(n))}},
lc(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
l3(a,b,c){if(a[b]==null){++this.a
this.e=null}A.C_(a,b,c)},
co(a){return J.a7(a)&1073741823},
ld(a,b){return a[this.co(b)]},
c0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.w(a[r],b))return r
return-1}}
A.yH.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.yG.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.dZ.prototype={
co(a){return A.kn(a)&1073741823},
c0(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jE.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.ov(b)},
j(a,b,c){this.ow(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.ou(a)},
co(a){return this.r.$1(a)&1073741823},
c0(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.yc.prototype={
$1(a){return this.a.b(a)},
$S:17}
A.eT.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.nR(s,s.lc(),this.$ti.i("nR<1>"))},
F(a,b){return this.a.I(b)}}
A.nR.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ay(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.jP.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.oo(b)},
j(a,b,c){this.oq(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.on(a)},
H(a,b){if(!this.y.$1(b))return null
return this.op(b)},
ee(a){return this.x.$1(a)&1073741823},
dg(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.yZ.prototype={
$1(a){return this.a.b(a)},
$S:17}
A.dj.prototype={
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
return r[b]!=null}else return this.ps(b)},
ps(a){var s=this.d
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
return q.l2(s==null?q.b=A.C0():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.l2(r==null?q.c=A.C0():r,b)}else return q.oO(b)},
oO(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.C0()
s=q.co(a)
r=p[s]
if(r==null)p[s]=[q.jo(a)]
else{if(q.c0(r,a)>=0)return!1
r.push(q.jo(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.le(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.le(s.c,b)
else return s.jv(b)},
jv(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.co(a)
r=n[s]
q=o.c0(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lf(p)
return!0},
af(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.jm()}},
l2(a,b){if(a[b]!=null)return!1
a[b]=this.jo(b)
return!0},
le(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lf(s)
delete a[b]
return!0},
jm(){this.r=this.r+1&1073741823},
jo(a){var s,r=this,q=new A.z_(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jm()
return q},
lf(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jm()},
co(a){return J.a7(a)&1073741823},
c0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.w(a[r].a,b))return r
return-1}}
A.z_.prototype={}
A.e0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ay(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.tH.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:27}
A.et.prototype={
F(a,b){return b instanceof A.b2&&this===b.a},
gt(a){var s=this
return new A.nY(s,s.a,s.c,s.$ti.i("nY<1>"))},
gm(a){return this.b},
af(a){var s,r,q,p=this;++p.a
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
hh(a,b,c){var s,r,q=this
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
jD(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.nY.prototype={
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
A.b2.prototype={
gfo(){var s=this.a
if(s==null||this===s.gG(0))return null
return this.c}}
A.K.prototype={
gt(a){return new A.ar(a,this.gm(a),A.bz(a).i("ar<K.E>"))},
a7(a,b){return this.h(a,b)},
gE(a){return this.gm(a)===0},
gV(a){return!this.gE(a)},
gG(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,0)},
ga_(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aD())
if(this.gm(a)>1)throw A.b(A.iy())
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
s=A.wb("",a,b)
return s.charCodeAt(0)==0?s:s},
dt(a,b){return new A.aj(a,b,A.bz(a).i("aj<K.E>"))},
kC(a,b){return new A.bH(a,b.i("bH<0>"))},
ce(a,b,c){return new A.X(a,b,A.bz(a).i("@<K.E>").U(c).i("X<1,2>"))},
bk(a,b){return A.cu(a,b,null,A.bz(a).i("K.E"))},
cL(a,b){return A.cu(a,0,A.bZ(b,"count",t.S),A.bz(a).i("K.E"))},
fD(a){var s,r=A.lS(A.bz(a).i("K.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
hK(a,b){return new A.bP(a,A.bz(a).i("@<K.E>").U(b).i("bP<1,2>"))},
ck(a,b){var s=b==null?A.Lq():b
A.mJ(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.ba(b,c,r)
s=A.O(this.fL(a,b,c),A.bz(a).i("K.E"))
return s},
b6(a,b){return this.T(a,b,null)},
fL(a,b,c){A.ba(b,c,this.gm(a))
return A.cu(a,b,c,A.bz(a).i("K.E"))},
jZ(a,b,c,d){var s
A.ba(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.ba(b,c,this.gm(a))
s=c-b
if(s===0)return
A.b9(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.oY(d,e).cM(0,!1)
r=0}p=J.L(q)
if(r+s>p.gm(q))throw A.b(A.Dd())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
cP(a,b,c){var s,r
if(t.j.b(c))this.au(a,b,b+c.length,c)
else for(s=J.D(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.rW(a,"[","]")},
$iJ:1,
$io:1,
$ip:1}
A.U.prototype={
c4(a,b,c){var s=A.n(this)
return A.Dn(this,s.i("U.K"),s.i("U.V"),b,c)},
a1(a,b){var s,r,q,p
for(s=J.D(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gaa(){return J.be(this.gK(),new A.tW(this),A.n(this).i("R<U.K,U.V>"))},
aU(a,b,c,d){var s,r,q,p,o,n=A.u(c,d)
for(s=J.D(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.B5(this.gK(),a)},
gm(a){return J.ak(this.gK())},
gE(a){return J.bA(this.gK())},
gV(a){return J.ea(this.gK())},
gb3(){return new A.jQ(this,A.n(this).i("jQ<U.K,U.V>"))},
l(a){return A.tX(this)},
$iG:1}
A.tW.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.R(a,r,A.n(s).i("R<U.K,U.V>"))},
$S(){return A.n(this.a).i("R<U.K,U.V>(U.K)")}}
A.tY.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:38}
A.jQ.prototype={
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
s=s.h(0,J.B6(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga_(a){var s=this.a
s=s.h(0,J.oX(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.o_(J.D(s.gK()),s,this.$ti.i("o_<1,2>"))}}
A.o_.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.op.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iK.prototype={
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
aU(a,b,c,d){return this.a.aU(0,b,c,d)},
$iG:1}
A.cR.prototype={
c4(a,b,c){return new A.cR(this.a.c4(0,b,c),b.i("@<0>").U(c).i("cR<1,2>"))}}
A.iG.prototype={
gt(a){var s=this
return new A.nZ(s,s.c,s.d,s.b,s.$ti.i("nZ<1>"))},
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
if(r.gm(0)>1)throw A.b(A.iy())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a7(a,b){var s,r=this
A.Dc(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.w(r.a[s],b)){r.jv(s);++r.d
return!0}return!1},
l(a){return A.rW(this,"{","}")},
jv(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.nZ.prototype={
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
for(s=J.D(b);s.k();)this.u(0,s.gn())},
ce(a,b,c){return new A.em(this,b,A.n(this).i("@<1>").U(c).i("em<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iy())
s=r.gt(r)
if(!s.k())throw A.b(A.aD())
return s.gn()},
l(a){return A.rW(this,"{","}")},
dt(a,b){return new A.aj(this,b,A.n(this).i("aj<1>"))},
cE(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cL(a,b){return A.DJ(this,b,A.n(this).c)},
bk(a,b){return A.DH(this,b,A.n(this).c)},
gG(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
a7(a,b){var s,r
A.b9(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lC(b,b-r,this,null,"index"))},
$iJ:1,
$io:1,
$ieG:1}
A.jY.prototype={}
A.k8.prototype={}
A.nV.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rH(b):s}},
gm(a){return this.b==null?this.c.a:this.dG().length},
gE(a){return this.gm(0)===0},
gV(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.nW(this)},
gb3(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.n(s).i("ao<2>"))}return A.dJ(r.dG(),new A.yV(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tL().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a1(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a1(0,b)
s=o.dG()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.zY(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ay(o))}},
dG(){var s=this.c
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
tL(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.u(t.N,t.z)
r=n.dG()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.af(r)
n.a=n.b=null
return n.c=s},
rH(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.zY(this.a[a])
return this.b[a]=s}}
A.yV.prototype={
$1(a){return this.a.h(0,a)},
$S:45}
A.nW.prototype={
gm(a){return this.a.gm(0)},
a7(a,b){var s=this.a
return s.b==null?s.gK().a7(0,b):s.dG()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gt(s)}else{s=s.dG()
s=new J.fd(s,s.length,A.a_(s).i("fd<1>"))}return s},
F(a,b){return this.a.I(b)}}
A.yT.prototype={
q(){var s,r,q=this
q.ox()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.EX(r.charCodeAt(0)==0?r:r,q.b))
s.aR()}}
A.zB.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:46}
A.zA.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:46}
A.kE.prototype={
gaP(){return"us-ascii"},
jW(a){return B.bu.v(a)}}
A.oo.prototype={
v(a){var s,r,q,p=A.ba(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aA(a,"string","Contains invalid characters."))
o[r]=q}return o},
bX(a){return new A.zs(new A.hl(a),this.a)}}
A.kF.prototype={}
A.zs.prototype={
q(){this.a.a.q()},
bL(a,b,c,d){var s,r,q,p
A.ba(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.N("Source contains invalid character with code point: "+q+".",null))}s=new A.cj(a)
p=this.a.a
p.u(0,s.T(s,b,c))
if(d)p.q()}}
A.kJ.prototype={
gf5(){return this.a},
ws(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.ba(a1,a2,a0.length)
s=$.CA()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.AC(a0.charCodeAt(l))
h=A.AC(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a2("")
e=p}else e=p
e.a+=B.a.A(a0,q,r)
d=A.bt(k)
e.a+=d
q=l
continue}}throw A.b(A.a8("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.CL(a0,n,a2,o,m,d)
else{c=B.c.aj(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dm(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.CL(a0,n,a2,o,m,b)
else{c=B.c.aj(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dm(a0,a2,a2,c===2?"==":"=")}return a0}}
A.i8.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.nz(this.a?u.G:u.U).mI(a,0,s,!0)
s.toString
return A.dS(s,0,null)},
bX(a){return new A.xo(a,new A.xF(this.a?u.G:u.U))}}
A.nz.prototype={
mz(a){return new Uint8Array(a)},
mI(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mz(o)
r.a=A.IV(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.xF.prototype={
mz(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bN(B.f.ga9(s),s.byteOffset,a)}}
A.xB.prototype={
u(a,b){this.li(b,0,J.ak(b),!1)},
q(){this.li(B.cA,0,0,!0)}}
A.xo.prototype={
li(a,b,c,d){var s=this.b.mI(a,b,c,d)
if(s!=null)this.a.a.aA(A.dS(s,0,null))
if(d)this.a.a.aR()}}
A.kK.prototype={
v(a){var s,r,q=A.ba(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.ny()
r=s.jS(a,0,q)
r.toString
s.jM(a,q)
return r},
bX(a){return new A.xA(a,new A.ny())}}
A.ny.prototype={
jS(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.DY(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.IS(a,b,c,q)
r.a=A.IU(a,b,c,s,0,r.a)
return s},
jM(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.xA.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.jS(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.jM(null,null)
this.a.a.aR()},
bL(a,b,c,d){var s,r
A.ba(b,c,a.length)
if(b===c)return
s=this.b
r=s.jS(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.jM(a,c)
this.a.a.aR()}}}
A.pf.prototype={}
A.hl.prototype={
u(a,b){this.a.u(0,b)},
q(){this.a.q()}}
A.nC.prototype={
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
q(){this.a.$1(B.f.T(this.b,0,this.c))}}
A.kX.prototype={}
A.of.prototype={
u(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eQ.prototype={
u(a,b){this.b.u(0,b)},
bz(a,b){A.bZ(a,"error",t.K)
this.a.bz(a,b)},
q(){this.b.q()},
$ibC:1}
A.kZ.prototype={}
A.aB.prototype={
bX(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
uj(a){return new A.jB(new A.qc(this),a,t.fM.U(A.n(this).i("aB.T")).i("jB<1,2>"))}}
A.qc.prototype={
$1(a){return new A.eQ(a,this.a.bX(a),t.oW)},
$S:173}
A.eo.prototype={}
A.iE.prototype={
l(a){var s=A.il(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lK.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.rZ.prototype={
av(a,b){var s=A.EX(a,this.guD().a)
return s},
a6(a,b){var s=A.Je(a,this.gf5().b,null)
return s},
gf5(){return B.cb},
guD(){return B.ca}}
A.lM.prototype={
bX(a){return new A.yU(null,this.b,new A.oh(a))}}
A.yU.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.x("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a2("")
q=new A.zp(r,s)
A.Ec(b,q,p.b,p.a)
if(r.a.length!==0)q.j4()
s.q()},
q(){}}
A.lL.prototype={
bX(a){return new A.yT(this.a,a,new A.a2(""))}}
A.yX.prototype={
nn(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iC(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iC(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iC(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b4(a)
else if(s<m)n.iC(a,s,m)},
iV(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.lK(a,null))}s.push(a)},
iB(a){var s,r,q,p,o=this
if(o.nm(a))return
o.iV(a)
try{s=o.b.$1(a)
if(!o.nm(s)){q=A.Dk(a,null,o.glN())
throw A.b(q)}o.a.pop()}catch(p){r=A.E(p)
q=A.Dk(a,r,o.glN())
throw A.b(q)}},
nm(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xN(a)
return!0}else if(a===!0){r.b4("true")
return!0}else if(a===!1){r.b4("false")
return!0}else if(a==null){r.b4("null")
return!0}else if(typeof a=="string"){r.b4('"')
r.nn(a)
r.b4('"')
return!0}else if(t.j.b(a)){r.iV(a)
r.xL(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iV(a)
s=r.xM(a)
r.a.pop()
return s}else return!1},
xL(a){var s,r,q=this
q.b4("[")
s=J.L(a)
if(s.gV(a)){q.iB(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b4(",")
q.iB(s.h(a,r))}}q.b4("]")},
xM(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.b4("{}")
return!0}s=a.gm(a)*2
r=A.ae(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a1(0,new A.yY(n,r))
if(!n.b)return!1
o.b4("{")
for(p='"';q<s;q+=2,p=',"'){o.b4(p)
o.nn(A.F(r[q]))
o.b4('":')
o.iB(r[q+1])}o.b4("}")
return!0}}
A.yY.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:38}
A.yW.prototype={
glN(){var s=this.c
return s instanceof A.a2?s.l(0):null},
xN(a){this.c.iA(B.x.l(a))},
b4(a){this.c.iA(a)},
iC(a,b,c){this.c.iA(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.lP.prototype={
gaP(){return"iso-8859-1"},
jW(a){return B.cj.v(a)}}
A.lQ.prototype={}
A.mT.prototype={
u(a,b){this.bL(b,0,b.length,!1)}}
A.zp.prototype={
ao(a){var s=this.a,r=A.bt(a)
if((s.a+=r).length>16)this.j4()},
iA(a){if(this.a.a.length!==0)this.j4()
this.b.u(0,a)},
j4(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.k1.prototype={
q(){},
bL(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bt(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
u(a,b){this.a.a+=b}}
A.oh.prototype={
u(a,b){this.a.a.aA(b)},
bL(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.A(a,b,c))
if(d)r.aR()},
q(){this.a.a.aR()}}
A.zz.prototype={
q(){var s,r,q,p=this.c
this.a.vB(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bL(q,0,q.length,!0)}else r.q()},
u(a,b){this.bL(b,0,J.ak(b),!1)},
bL(a,b,c,d){var s,r=this.c,q=this.a.cW(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bL(s,0,s.length,!1)
r.a=""
return}}}
A.nc.prototype={
gaP(){return"utf-8"},
uA(a,b){return new A.dl((b===!0?B.dE:B.aL).a).cW(a,0,null,!0)},
f0(a){return this.uA(a,null)},
jW(a){return B.e.v(a)}}
A.nd.prototype={
v(a){var s,r,q=A.ba(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.or(s)
if(r.lv(a,0,q)!==q)r.hB()
return B.f.T(s,0,r.b)},
bX(a){return new A.zC(new A.hl(a),new Uint8Array(1024))}}
A.or.prototype={
hB(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.I(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
ml(a,b){var s,r,q,p,o=this
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
return!0}else{o.hB()
return!1}},
lv(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.I(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.ml(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hB()}else if(o<=2047){n=k.b
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
A.zC.prototype={
q(){if(this.a!==0){this.bL("",0,0,!0)
return}this.d.a.q()},
bL(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.ml(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lv(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hB()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.T(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jp.prototype={
bX(a){return new A.zz(new A.dl(this.a),new A.oh(a),new A.a2(""))}}
A.dl.prototype={
cW(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.ba(b,c,J.ak(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.JK(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.JJ(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.j0(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Ez(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
j0(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.j0(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.j0(a,s,c,d)}return q.uC(a,b,c,d)},
vB(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bt(65533)
a.a+=s}else throw A.b(A.a8(A.Ez(77),null,null))},
uC(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a2(""),g=b+1,f=a[b]
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
A.oA.prototype={}
A.aI.prototype={
bB(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bI(p,r)
return new A.aI(p===0?!1:s,r,p)},
pI(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ch()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bI(s,q)
return new A.aI(n===0?!1:o,q,n)},
pL(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ch()
s=k-a
if(s<=0)return l.a?$.CC():$.ch()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bI(s,q)
m=new A.aI(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fR(0,$.fa())
return m},
bC(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.N("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.aj(b,16)===0)return n.pI(r)
q=s+r+1
p=new Uint16Array(q)
A.E5(n.b,s,b,p)
s=n.a
o=A.bI(q,p)
return new A.aI(o===0?!1:s,p,o)},
dA(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.N("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.aj(b,16)
if(q===0)return j.pL(r)
p=s-r
if(p<=0)return j.a?$.CC():$.ch()
o=j.b
n=new Uint16Array(p)
A.J0(o,s,b,n)
s=j.a
m=A.bI(p,n)
l=new A.aI(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bC(1,q)-1)>>>0!==0)return l.fR(0,$.fa())
for(k=0;k<r;++k)if(o[k]!==0)return l.fR(0,$.fa())}return l},
Z(a,b){var s,r=this.a
if(r===b.a){s=A.xC(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iQ(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iQ(p,b)
if(o===0)return $.ch()
if(n===0)return p.a===b?p:p.bB(0)
s=o+1
r=new Uint16Array(s)
A.IX(p.b,o,a.b,n,r)
q=A.bI(s,r)
return new A.aI(q===0?!1:b,r,q)},
fS(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ch()
s=a.c
if(s===0)return p.a===b?p:p.bB(0)
r=new Uint16Array(o)
A.nA(p.b,o,a.b,s,r)
q=A.bI(o,r)
return new A.aI(q===0?!1:b,r,q)},
fI(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iQ(b,r)
if(A.xC(q.b,p,b.b,s)>=0)return q.fS(b,r)
return b.fS(q,!r)},
fR(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bB(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iQ(b,r)
if(A.xC(q.b,p,b.b,s)>=0)return q.fS(b,r)
return b.fS(q,!r)},
bi(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ch()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.E6(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bI(s,p)
return new A.aI(m===0?!1:n,p,m)},
pH(a){var s,r,q,p
if(this.c<a.c)return $.ch()
this.lq(a)
s=$.BT.bw()-$.jA.bw()
r=A.BV($.BS.bw(),$.jA.bw(),$.BT.bw(),s)
q=A.bI(s,r)
p=new A.aI(!1,r,q)
return this.a!==a.a&&q>0?p.bB(0):p},
t6(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lq(a)
s=A.BV($.BS.bw(),0,$.jA.bw(),$.jA.bw())
r=A.bI($.jA.bw(),s)
q=new A.aI(!1,s,r)
if($.BU.bw()>0)q=q.dA(0,$.BU.bw())
return p.a&&q.c>0?q.bB(0):q},
lq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.E2&&a.c===$.E4&&c.b===$.E1&&a.b===$.E3)return
s=a.b
r=a.c
q=16-B.c.gmu(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.E0(s,r,q,p)
n=new Uint16Array(b+5)
m=A.E0(c.b,b,q,n)}else{n=A.BV(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.BW(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.xC(n,m,j,i)>=0){g&2&&A.I(n)
n[m]=1
A.nA(n,h,j,i,n)}else{g&2&&A.I(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.nA(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.IY(l,n,e);--k
A.E6(d,f,0,n,k,o)
if(n[e]<d){i=A.BW(f,o,k,j)
A.nA(n,h,j,i,n)
while(--d,n[e]<d)A.nA(n,h,j,i,n)}--e}$.E1=c.b
$.E2=b
$.E3=s
$.E4=r
$.BS.b=n
$.BT.b=h
$.jA.b=o
$.BU.b=q},
gJ(a){var s,r,q,p=new A.xD(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.xE().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.aI&&this.Z(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.k([],t.s)
m=n.a
r=m?n.bB(0):n
while(r.c>1){q=$.CB()
if(q.c===0)A.v(B.bE)
p=r.t6(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pH(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bV(s,t.hF).ef(0)},
$iau:1}
A.xD.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:127}
A.xE.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:115}
A.nP.prototype={
ms(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mF(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.zy.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.D(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:50}
A.qQ.prototype={
$0(){var s=this
return A.v(A.N("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:33}
A.aM.prototype={
iS(a){var s=1000,r=B.c.aj(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.aj(p,s),n=this.c
return new A.aM(A.li(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aM&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.c5(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kc(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
Z(a,b){var s=B.c.Z(this.a,b.a)
if(s!==0)return s
return B.c.Z(this.b,b.b)},
xg(){var s=this
if(s.c)return s
return new A.aM(s.a,s.b,!0)},
l(a){var s=this,r=A.Ha(A.BB(s)),q=A.lh(A.Bz(s)),p=A.lh(A.v0(s)),o=A.lh(A.Bx(s)),n=A.lh(A.By(s)),m=A.lh(A.BA(s)),l=A.D0(A.Dx(s)),k=s.b,j=k===0?"":A.D0(k)
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
return s+m+":"+q+r+":"+o+p+"."+B.a.ij(B.c.l(n%1e6),6,"0")},
$iau:1}
A.yj.prototype={
l(a){return this.a4()}}
A.ad.prototype={
gcl(){return A.I3(this)}}
A.kG.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.il(s)
return"Assertion failed"}}
A.de.prototype={}
A.bB.prototype={
gj3(){return"Invalid argument"+(!this.a?"(s)":"")},
gj2(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gj3()+q+o
if(!s.a)return n
return n+s.gj2()+": "+A.il(s.gkb())},
gkb(){return this.b}}
A.d9.prototype={
gkb(){return this.b},
gj3(){return"RangeError"},
gj2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.iv.prototype={
gkb(){return this.b},
gj3(){return"RangeError"},
gj2(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id9:1,
gm(a){return this.f}}
A.cS.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.n5.prototype={
l(a){return"UnimplementedError: "+this.a},
$icS:1}
A.bk.prototype={
l(a){return"Bad state: "+this.a}}
A.l1.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.il(s)+"."}}
A.mb.prototype={
l(a){return"Out of Memory"},
gcl(){return null},
$iad:1}
A.jh.prototype={
l(a){return"Stack Overflow"},
gcl(){return null},
$iad:1}
A.nO.prototype={
l(a){return"Exception: "+this.a},
$iH:1}
A.bi.prototype={
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
gkh(){return this.a},
gfP(){return this.b},
gar(){return this.c}}
A.lE.prototype={
gcl(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iad:1,
$icS:1,
$iH:1}
A.o.prototype={
hK(a,b){return A.ff(this,A.n(this).i("o.E"),b)},
ce(a,b,c){return A.dJ(this,b,A.n(this).i("o.E"),c)},
dt(a,b){return new A.aj(this,b,A.n(this).i("aj<o.E>"))},
kC(a,b){return new A.bH(this,b.i("bH<0>"))},
F(a,b){var s
for(s=this.gt(this);s.k();)if(J.w(s.gn(),b))return!0
return!1},
vD(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
vE(a,b,c){return this.vD(0,b,c,t.z)},
cE(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
B(a,b){var s,r,q=this.gt(this)
if(!q.k())return""
s=J.a0(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.a0(q.gn())
while(q.k())}else{r=s
do r=r+b+J.a0(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bM(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cM(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
eu(a){return this.cM(0,!0)},
fD(a){return A.d2(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gE(a){return!this.gt(this).k()},
gV(a){return!this.gE(this)},
cL(a,b){return A.DJ(this,b,A.n(this).i("o.E"))},
bk(a,b){return A.DH(this,b,A.n(this).i("o.E"))},
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
if(r.k())throw A.b(A.iy())
return s},
fa(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a7(a,b){var s,r
A.b9(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lC(b,b-r,this,null,"index"))},
l(a){return A.Hx(this,"(",")")}}
A.R.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.V.prototype={
gJ(a){return A.j.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
R(a,b){return this===b},
gJ(a){return A.eB(this)},
l(a){return"Instance of '"+A.mj(this)+"'"},
gak(a){return A.dr(this)},
toString(){return this.l(this)}}
A.oj.prototype={
l(a){return""},
$iaF:1}
A.ji.prototype={
gvf(){var s=this.gmH()
if($.ks()===1e6)return s
return s*1000},
gmG(){var s=this.gmH()
if($.ks()===1000)return s
return B.c.M(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mk.$0()-r)
s.b=null}},
gmH(){var s=this.b
if(s==null)s=$.mk.$0()
return s-this.a}}
A.j9.prototype={
gt(a){return new A.mA(this.a)},
ga_(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.x("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.EI(r,s)}return s}}
A.mA.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.EI(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a2.prototype={
gm(a){return this.a.length},
iA(a){var s=A.r(a)
this.a+=s},
ao(a){var s=A.bt(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.wN.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:84}
A.k9.prototype={
gmb(){var s,r,q,p,o=this,n=o.w
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
gwD(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ad(s,1)
r=s.length===0?B.q:A.d3(new A.X(A.k(s.split("/"),t.s),A.LC(),t.iZ),t.N)
q.x!==$&&A.AY()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmb())
r.y!==$&&A.AY()
r.y=s
q=s}return q},
gkB(){return this.b},
gdf(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ac(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfn(){var s=this.d
return s==null?A.Eo(this.a):s},
gft(){var s=this.f
return s==null?"":s},
ghY(){var s=this.r
return s==null?"":s},
w9(a){var s=this.a
if(a.length!==s.length)return!1
return A.JX(a,s,0)>=0},
fz(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.C4(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.zu(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.zv(null,0,0,a)
else k=j.f
return A.ka(b,q,o,p,l,k,j.r)},
ku(a){return this.fz(a,null)},
nc(a){return this.fz(null,a)},
lJ(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ac(b,"../",r);){r+=3;++s}q=B.a.dh(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.ia(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dm(a,q+1,null,B.a.ad(b,r-3*s))},
bt(a){return this.fA(A.nb(a))},
fA(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb_().length!==0)return a
else{s=h.a
if(a.gk6()){r=a.nc(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmP())m=a.gi7()?a.gft():h.f
else{l=A.JI(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gk5()?k+A.f_(a.gbr()):k+A.f_(h.lJ(B.a.ad(n,k.length),a.gbr()))}else if(a.gk5())n=A.f_(a.gbr())
else if(n.length===0)if(p==null)n=s.length===0?a.gbr():A.f_(a.gbr())
else n=A.f_("/"+a.gbr())
else{j=h.lJ(n,a.gbr())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f_(j)
else n=A.C6(j,!r||p!=null)}m=a.gi7()?a.gft():null}}}i=a.gk7()?a.ghY():null
return A.ka(s,q,p,o,n,m,i)},
gk6(){return this.c!=null},
gi7(){return this.f!=null},
gk7(){return this.r!=null},
gmP(){return this.e.length===0},
gk5(){return B.a.S(this.e,"/")},
ky(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdf()!=="")A.v(A.Y(u.Q))
s=r.gwD()
A.JB(s,!1)
q=A.wb(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmb()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb_())if(p.c!=null===b.gk6())if(p.b===b.gkB())if(p.gdf()===b.gdf())if(p.gfn()===b.gfn())if(p.e===b.gbr()){r=p.f
q=r==null
if(!q===b.gi7()){if(q)r=""
if(r===b.gft()){r=p.r
q=r==null
if(!q===b.gk7()){s=q?"":r
s=s===b.ghY()}}}}return s},
$in9:1,
gb_(){return this.a},
gbr(){return this.e}}
A.zx.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.hK(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.hK(1,b,B.k,!0)
s.a+=r}},
$S:108}
A.zw.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.D(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:50}
A.wM.prototype={
gnl(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.ca(m,"?",s)
q=m.length
if(r>=0){p=A.kb(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.nJ("data","",n,n,A.kb(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cc.prototype={
gk6(){return this.c>0},
gk8(){return this.c>0&&this.d+1<this.e},
gi7(){return this.f<this.r},
gk7(){return this.r<this.a.length},
gk5(){return B.a.ac(this.a,"/",this.e)},
gmP(){return this.e===this.f},
gb_(){var s=this.w
return s==null?this.w=this.pq():s},
pq(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gkB(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdf(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfn(){var s,r=this
if(r.gk8())return A.aG(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbr(){return B.a.A(this.a,this.e,this.f)},
gft(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
ghY(){var s=this.r,r=this.a
return s<r.length?B.a.ad(r,s+1):""},
lD(a){var s=this.d+1
return s+a.length===this.e&&B.a.ac(this.a,a,s)},
x5(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cc(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.C4(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb_()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gk8()?h.gfn():g
if(s)o=A.zu(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.zv(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ad(q,m+1):g
return A.ka(b,p,n,o,l,j,i)},
ku(a){return this.fz(a,null)},
nc(a){return this.fz(null,a)},
bt(a){return this.fA(A.nb(a))},
fA(a){if(a instanceof A.cc)return this.tw(this,a)
return this.md().fA(a)},
tw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lD("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lD("443")
if(p){o=r+1
return new A.cc(B.a.A(a.a,0,o)+B.a.ad(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.md().fA(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cc(B.a.A(a.a,0,r)+B.a.ad(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cc(B.a.A(a.a,0,r)+B.a.ad(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.x5()}s=b.a
if(B.a.ac(s,"/",n)){m=a.e
l=A.Eg(this)
k=l>0?l:m
o=k-n
return new A.cc(B.a.A(a.a,0,k)+B.a.ad(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ac(s,"../",n))n+=3
o=j-n+1
return new A.cc(B.a.A(a.a,0,j)+"/"+B.a.ad(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Eg(this)
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
ky(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb_()+" URI"))
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
md(){var s=this,r=null,q=s.gb_(),p=s.gkB(),o=s.c>0?s.gdf():r,n=s.gk8()?s.gfn():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gft():r
return A.ka(q,p,o,n,k,l,j<m.length?s.ghY():r)},
l(a){return this.a},
$in9:1}
A.nJ.prototype={}
A.lq.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.m7.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iH:1}
A.rl.prototype={
$2(a,b){this.a.bU(new A.rj(a),new A.rk(b),t.X)},
$S:109}
A.rj.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:131}
A.rk.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Ln(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.v("Attempting to box non-Dart object.")
s={}
s[$.Go()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:12}
A.AH.prototype={
$1(a){var s,r,q,p
if(A.EW(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.D(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.C(p,J.be(a,this,t.z))
return p}else return a},
$S:15}
A.AO.prototype={
$1(a){return this.a.aB(a)},
$S:25}
A.AP.prototype={
$1(a){if(a==null)return this.a.aS(new A.m7(a===undefined))
return this.a.aS(a)},
$S:25}
A.Ak.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.EV(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aM(A.li(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.N("structured clone of RegExp",null))
if(a instanceof Promise)return A.a5(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.u(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.az(o),q=s.gt(o);q.k();)n.push(A.oK(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.L(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:15}
A.yQ.prototype={
cI(a){if(a<=0||a>4294967296)throw A.b(A.aX(u.E+a))
return Math.random()*a>>>0},
n0(){return Math.random()}}
A.yR.prototype={
oK(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cI(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aX(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.I(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.an(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bN(B.az.ga9(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.lo.prototype={}
A.a3.prototype={
h(a,b){var s,r=this
if(!r.jj(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jj(b))return
s.c.j(0,s.a.$1(b),new A.R(b,c,s.$ti.i("R<a3.K,a3.V>")))},
C(a,b){b.a1(0,new A.ph(this))},
c4(a,b,c){return this.c.c4(0,b,c)},
I(a){var s=this
if(!s.jj(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a3.K").a(a)))},
gaa(){var s=this.c,r=A.n(s).i("aN<1,2>")
return A.dJ(new A.aN(s,r),new A.pi(this),r.i("o.E"),this.$ti.i("R<a3.K,a3.V>"))},
a1(a,b){this.c.a1(0,new A.pj(this,b))},
gE(a){return this.c.a===0},
gV(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dJ(new A.ao(s,r),new A.pk(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aU(a,b,c,d){return this.c.aU(0,new A.pl(this,b,c,d),c,d)},
gb3(){var s=this.c,r=A.n(s).i("ao<2>")
return A.dJ(new A.ao(s,r),new A.pm(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.tX(this)},
jj(a){return this.$ti.i("a3.K").b(a)},
$iG:1}
A.ph.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pi.prototype={
$1(a){var s=a.b
return new A.R(s.a,s.b,this.a.$ti.i("R<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("R<a3.K,a3.V>(R<a3.C,R<a3.K,a3.V>>)")}}
A.pj.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,R<a3.K,a3.V>)")}}
A.pk.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(R<a3.K,a3.V>)")}}
A.pl.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.U(this.c).U(this.d).i("R<1,2>(a3.C,R<a3.K,a3.V>)")}}
A.pm.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(R<a3.K,a3.V>)")}}
A.lk.prototype={
X(a,b){return J.w(a,b)},
ab(a){return J.a7(a)}}
A.iz.prototype={
X(a,b){var s,r,q,p
if(a===b)return!0
s=J.D(a)
r=J.D(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.X(s.gn(),r.gn()))return!1}},
ab(a){var s,r,q
for(s=J.D(a),r=this.a,q=0;s.k();){q=q+r.ab(s.gn())&2147483647
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
A.hI.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.Bk(s.gvm(),s.gw4(),s.gwa(),A.n(this).i("hI.E"),t.S)
for(s=J.D(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.D(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ab(a){var s,r,q
for(s=J.D(a),r=this.a,q=0;s.k();)q=q+r.ab(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.fZ.prototype={}
A.hy.prototype={
gJ(a){var s=this.a
return 3*s.a.ab(this.b)+7*s.b.ab(this.c)&2147483647},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.hy){s=this.a
s=s.a.X(this.b,b.b)&&s.b.X(this.c,b.c)}else s=!1
return s}}
A.iJ.prototype={
X(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.Bk(null,null,null,t.mB,t.S)
for(r=J.D(a.gK());r.k();){q=r.gn()
p=new A.hy(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.D(b.gK());r.k();){q=r.gn()
p=new A.hy(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ab(a){var s,r,q,p,o,n,m,l
for(s=J.D(a.gK()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ab(n)
l=a.h(0,n)
o=o+3*m+7*q.ab(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.lj.prototype={
X(a,b){var s,r=this
if(a instanceof A.cq)return b instanceof A.cq&&new A.fZ(r,t.cu).X(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iJ(r,r,t.a3).X(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.eu(r,t.hI).X(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iz(r,t.nZ).X(a,b)
return J.w(a,b)},
ab(a){var s=this
if(a instanceof A.cq)return new A.fZ(s,t.cu).ab(a)
if(t.f.b(a))return new A.iJ(s,s,t.a3).ab(a)
if(t.j.b(a))return new A.eu(s,t.hI).ab(a)
if(t.e7.b(a))return new A.iz(s,t.nZ).ab(a)
return J.a7(a)},
wb(a){return!0}}
A.m6.prototype={
sm(a,b){A.Ds()},
u(a,b){return A.Ds()}}
A.n8.prototype={
j(a,b,c){return A.ID()}}
A.ck.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.ck){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.un(this.a)},
l(a){return A.aq(this.a)}}
A.c2.prototype={
u(a,b){if(this.a!=null)throw A.b(A.x("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.x("add must be called once."))}}
A.lw.prototype={
v(a){var s=new A.c2(),r=A.cW(s)
r.u(0,a)
r.q()
r=s.a
r.toString
return r}}
A.rq.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.x("Hash.add() called after close()."))
s.r=s.r+J.ak(b)
s.l1(b)},
l1(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.oU(B.f.ga9(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.L(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ai(i,j,n,a,o)
k.e=n
return}B.f.ai(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.I(s)
s[m]=l;++m}while(m<q)
k.xm(s)}},
q(){var s,r,q,p,o,n,m,l=this
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
n=J.oU(B.f.ga9(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.I(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.l1(q)
s=l.a
s.u(0,new A.ck(l.p9()))
s.q()},
p9(){var s,r,q,p,o,n,m
if(B.aR===$.kr())return J.GB(B.y.ga9(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.oU(B.f.ga9(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.I(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oc.prototype={
bX(a){var s=new Uint32Array(A.b0(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hl(new A.od(s,r,a,q,new Uint32Array(16)))}}
A.zc.prototype={
xm(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
A.od.prototype={}
A.kz.prototype={
gJ(a){return A.c5(B.dp,this.d,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.lc&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dr(s).l(0)+".with"+s.d*8+"bits()"
return A.dr(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.ps.prototype={}
A.iI.prototype={
gJ(a){return B.u.ab(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.iI&&B.u.X(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jc.prototype={
l(a){return A.dr(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iH:1}
A.tV.prototype={
l(a){return A.dr(this).l(0)+"()"}}
A.jb.prototype={
gJ(a){return(B.u.ab(this.b.a)^B.u.ab(this.c)^B.u.ab(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.jb){s=B.u.X(this.b.a,b.b.a)
s=s&&B.u.X(this.c,b.c)&&B.u.X(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.vR.prototype={}
A.jd.prototype={
ge4(){return this.b},
gJ(a){var s=A.eB(B.dz),r=B.u.ab(this.ge4())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.jd&&B.u.X(this.ge4(),b.ge4())},
l(a){return"SecretKeyData(...)"}}
A.mF.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.lc.prototype={
uF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge4().gm(0),f=this.d
if(g!==f)throw A.b(A.aA(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Ff(c)
r=new Uint32Array(4)
A.oH(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.D_(r,a.c)
p=J.CF(B.f.ga9(q),0,null)
o=a.a
n=B.u.X(B.aP.l8(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jc())
A.Ac(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oH(l,k,p,0,s)
A.Ac(q,1)}j=J.bN(B.y.ga9(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.I(j)
j[k]=i^h}return j},
vj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge4().gm(0),f=this.d
if(g!==f)throw A.b(A.aA(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Ff(d)
r=new Uint32Array(4)
A.oH(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.D_(r,c)
p=J.CF(B.f.ga9(q),0,null)
o=new Uint32Array(A.b0(p))
A.Ac(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oH(l,k,p,0,s)
A.Ac(q,1)}j=J.bN(B.y.ga9(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.I(j)
j[k]=i^h}return new A.jb(j,B.aP.l8(j,b,s,r,o),c)}}
A.qu.prototype={
l(a){return"DartGcm()"},
l8(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.ld(n,d,b)
A.ld(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.aj(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.aj(r,o),!1)
A.ld(n,d,J.bN(B.az.ga9(q),0,null))
p=new Uint32Array(4)
A.oH(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iI(J.bN(B.y.ga9(n),0,null))}}
A.nH.prototype={}
A.nI.prototype={}
A.qf.prototype={}
A.qv.prototype={}
A.y7.prototype={
X(a,b){var s,r,q=J.L(a),p=J.L(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ab(a){var s,r,q,p,o
for(s=J.L(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.aj(q,16)
r=(r^B.c.tv(p,o)^B.c.m7(p,16-o))>>>0}return r}}
A.mv.prototype={}
A.kL.prototype={$iB9:1}
A.kM.prototype={
hX(){if(this.w)throw A.b(A.x("Can't finalize a finalized Request."))
this.w=!0
return B.by},
l(a){return this.a+" "+this.b.l(0)}}
A.kN.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:159}
A.kO.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:168}
A.pb.prototype={
oA(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.N("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.N("Invalid content length "+A.r(s)+".",null))}}}
A.kT.prototype={
b5(a){return this.o7(a)},
o7(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b5=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.CW("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hX().xf(),$async$b5)
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
f=A.u(a9,t.K)
e=b4.gmy()
d=null
if(e!=null){d=e
J.c_(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.n(b0).i("aN<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.c_(f,c.a,c.b)}f=A.hX(f)
f.toString
A.bc(f)
b0=l.signal
s=8
return A.a(A.a5(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b5)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.j4(a,null):null
if(a0==null&&a!=null){f=A.CW("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.u(a9,a9)
b.headers.forEach(A.oC(new A.pe(a1)))
f=A.JN(b4,b)
a4=b.status
a6=a1
a8=a0
A.nb(b.url)
a9=b.statusText
f=new A.mS(A.FR(f),a4,a8,a6)
f.oA(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ag(b3)
A.F_(a2,a3,b4)
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
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].abort()
this.b=!0}}
A.pe.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:176}
A.zU.prototype={
$1(a){return A.hR(this.a,this.b,a)},
$S:179}
A.A2.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.A3.prototype={
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
n=A.E(k)
m=A.ag(k)
if(!o.a.b)A.F_(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:5}
A.du.prototype={
xf(){var s=new A.t($.C,t.jz),r=new A.aH(s,t.iq),q=new A.nC(new A.pg(r),new Uint8Array(1024))
this.a8(q.gu4(q),!0,q.ge6(),r.gut())
return s}}
A.pg.prototype={
$1(a){return this.a.aB(new Uint8Array(A.b0(a)))},
$S:24}
A.eg.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iH:1}
A.m_.prototype={
gm(a){return this.b}}
A.uf.prototype={
gmy(){var s,r,q,p=this,o={},n=o.a=0
p.x.a1(0,new A.ug(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.q)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lB(q)).length+q.b+2)}return o.a+2+70+4},
hX(){var s=this,r=s.p5()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kU()
return new A.du(s.bn(r))},
bn(a){return this.pX(a)},
pX(a){var $async$bn=A.c(function(b,c){switch(b){case 2:n=q
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
j=$.B2()
l=A.y(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.y(l,'"',"%22")+'"'
l=$.CD()
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
return A.bW(A.e_(B.e.v(m.lB(g))),$async$bn,r)
case 13:if(g.f)A.v(A.x("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bW(A.Jc(g.e),$async$bn,r)
case 14:s=15
q=[1]
return A.bW(A.e_(B.b2),$async$bn,r)
case 15:case 10:f.length===l||(0,A.q)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bW(A.e_(d),$async$bn,r)
case 16:case 1:return A.bW(null,0,r)
case 2:return A.bW(o.at(-1),1,r)}})
var s=0,r=A.EU($async$bn,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.F8(r)},
qT(a,b){var s,r=$.B2()
r=A.y(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.y(r,'"',"%22")+'"'
r=$.CD()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lB(a){var s=a.d.l(0),r=$.B2(),q=A.y(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.y(q,'"',"%22")+'"'
s=A.y(a.c,r,"%0D%0A")
p=p+'; filename="'+A.y(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
p5(){var s,r=J.Dh(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cF[$.G0().cI(66)]
return"dart-http-boundary-"+A.dS(r,0,null)}}
A.ug.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qT(a,b)).length+B.e.v(b).length+2)},
$S:31}
A.vI.prototype={
gmy(){return this.y.length},
gjX(){var s,r
if(this.gcp()==null||!this.gcp().c.a.I("charset"))return B.k
s=this.gcp().c.a.h(0,"charset")
s.toString
r=A.He(s)
return r==null?A.v(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
hX(){this.kU()
return new A.du(A.BK(this.y,t.L))},
gcp(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.HM(s)},
scp(a){this.r.j(0,"content-type",a.l(0))},
pc(){if(!this.w)return
throw A.b(A.x("Can't modify a finalized Request."))}}
A.jl.prototype={}
A.mS.prototype={}
A.ia.prototype={}
A.fA.prototype={
l(a){var s=new A.a2(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a1(0,new A.u0(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.tZ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.wc(null,j),h=$.GA()
i.iJ(h)
s=$.Gz()
i.f7(s)
r=i.gkf().h(0,0)
r.toString
i.f7("/")
i.f7(s)
q=i.gkf().h(0,0)
q.toString
i.iJ(h)
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
k=n}else k=A.LL(i)
n=i.d=h.ej(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.vs()
return A.Bu(r,q,o)},
$S:190}
A.u0.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Gx()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.FO(b,$.Gm(),new A.u_(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:31}
A.u_.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:61}
A.Au.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:61}
A.qa.prototype={
$1(a){return a.b===this.a},
$S:193}
A.qb.prototype={
$1(a){return a.b===this.a},
$S:110}
A.l3.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.cZ.prototype={}
A.l_.prototype={
gal(){return"committedChange"},
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
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"changedFields",s)
return q}}
A.l6.prototype={
gal(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jr.prototype={
gal(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.uh.prototype={}
A.iP.prototype={}
A.iS.prototype={}
A.iQ.prototype={}
A.iT.prototype={}
A.iM.prototype={}
A.iN.prototype={}
A.iL.prototype={}
A.iR.prototype={}
A.iO.prototype={}
A.A_.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:13}
A.vz.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.u(k,j),h=t.d,g=A.k([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)g.push(s[q].p())
i.j(0,"where",g)
g=A.k([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=A.k([],h)
for(n=B.b.gt(p);n.k();)o.push(n.gn().p())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.p())
h=A.k([],h)
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
A.vA.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:13}
A.vB.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.Z("Malformed query conditions."))
s=A.k([],t.cM)
for(r=J.D(a);r.k();)s.push(A.DA(r.gn()))
return s},
$S:217}
A.eC.prototype={
p(){var s,r,q,p,o=this,n=A.u(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.q)(s),++p)r.push(A.oM(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.oM(o.c))
return n}}
A.vw.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:13}
A.vx.prototype={
$1(a){return a.b===this.a},
$S:213}
A.aW.prototype={
a4(){return"QueryConditionOp."+this.b}}
A.cJ.prototype={}
A.uZ.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:13}
A.uY.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.Z("Malformed predicate children."))
s=A.k([],t.eK)
for(r=J.D(a);r.k();)s.push(A.Bw(r.gn()))
return s},
$S:209}
A.iF.prototype={
p(){var s=A.u(t.N,t.X)
s.j(0,"kind","leaf")
s.C(0,this.a.p())
return s}}
A.j_.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.i4.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.i5.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mp.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.vy.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:13}
A.cA.prototype={
a4(){return"AggregateFn."+this.b}}
A.vP.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.vQ.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:13}
A.mu.prototype={}
A.ma.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.kU.prototype={
p(){return B.n}}
A.lx.prototype={
p(){return B.n}}
A.kY.prototype={
p(){return B.n}}
A.lv.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.my.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.m0.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.K7(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mq.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l9.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l8.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.ll.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lA.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kA.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.lr.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mE.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dT.prototype={
a4(){return"TransactionDurability."+this.b}}
A.mZ.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.n_.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.n1.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.n3.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.n2.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.n0.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.ni.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nj.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.nh.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kC.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ng.prototype={
p(){return B.n}}
A.ne.prototype={
p(){return B.n}}
A.mm.prototype={
p(){return B.n}}
A.l0.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.mz.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.l5.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.l4.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.mw.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.kx.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.ky.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.l7.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.aJ.prototype={}
A.fI.prototype={
gal(){return"ok"},
p(){return B.n}}
A.kV.prototype={
gal(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e],t.N,t.X)}}
A.ly.prototype={
gal(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.fV.prototype={
gal(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.fW.prototype={
gal(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fE.prototype={
gal(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fQ.prototype={
gal(){return"queryRows"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fo.prototype={
gal(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fp.prototype={
gal(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fy.prototype={
gal(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fc.prototype={
gal(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.ft.prototype={
gal(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.fY.prototype={
gal(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.k([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.mD.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fm.prototype={
gal(){return"conflicts"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fl.prototype={
gal(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.h9.prototype={
gal(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hh.prototype={
gal(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fN.prototype={
gal(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fj.prototype={
gal(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.jt.prototype={
l(a){return"WireException: "+this.a},
$iH:1}
A.AZ.prototype={
$1(a){return a.a===this.a},
$S:192}
A.B_.prototype={
$2(a,b){return B.a.Z(a.a,b.a)},
$S:184}
A.mi.prototype={
a4(){return"PlatformProfile."+this.b}}
A.mP.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.w_.prototype={
$1(a){return J.ci(a.gb3())},
$S:42}
A.w0.prototype={
$1(a){return B.a.F(a,"ENABLE_FTS5")},
$S:9}
A.ib.prototype={
a4(){return"ChangeOrigin."+this.b}}
A.dv.prototype={
a4(){return"ChangeAction."+this.b}}
A.aR.prototype={
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
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"changedFields",s)
return q},
R(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aR))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.t.X(b.e,s.e)&&B.t.X(b.f,s.f)&&B.t.X(b.r,s.r)},
gJ(a){var s=this
return A.c5(s.a,s.b,s.c,s.d,B.t.ab(s.e),B.t.ab(s.f),B.t.ab(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a1.prototype={}
A.pp.prototype={
vg(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
vh(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.pq.prototype={}
A.pr.prototype={}
A.r2.prototype={}
A.oZ.prototype={
vi(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cI(256)
q=this.b.vj(new Uint8Array(A.b0(a)),b,m,this.c)
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
uE(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.N("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.x("Unsupported ciphertext version 0x"+B.a.ij(B.c.kz(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b0(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b0(B.f.b6(a,n)))
q=new Uint8Array(A.b0(B.f.T(a,13,n)))
try{n=this.b.uF(new A.jb(q,new A.iI(r),s),b,this.c)
return n}catch(o){if(A.E(o) instanceof A.jc)throw A.b(A.x("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d1.prototype={
a4(){return"KindViolation."+this.b}}
A.Ae.prototype={
$2(a,b){return B.a.Z(a.a,b.a)},
$S:177}
A.l2.prototype={
a4(){return"ConflictAlgorithm."+this.b}}
A.ij.prototype={
q(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.b1(o,o.r,o.e,A.n(o).i("b1<2>"));n.k();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.af(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
cj(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(s!=null)s.q()}q=this.b.wE(a)
r.j(0,a,q)
return q},
o6(a,b){var s=this.cj(a).kM(new A.bQ(b)),r=A.n(s).i("X<K.E,G<l,j?>>")
r=A.O(new A.X(s,new A.r_(),r),r.i("W.E"))
return r},
f6(a,b){this.cj(a).e9(new A.bQ(b))},
jY(a){return this.f6(a,B.m)},
aD(a,b){return this.vp(a,b)},
O(a){return this.aD(a,B.m)},
vp(a,b){var s=0,r=A.h(t.H),q=this
var $async$aD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f6(a,b)
return A.e(null,r)}})
return A.f($async$aD,r)},
ah(a,b){return this.wQ(a,b)},
b0(a){return this.ah(a,B.m)},
wQ(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ah=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.o6(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ah,r)},
bR(a,b,c,d,e,f,g){return this.wN(a,b,c,d,e,f,g)},
aJ(a,b,c,d){return this.bR(a,null,b,null,null,c,d)},
en(a,b,c,d,e){return this.bR(a,b,c,null,null,d,e)},
n6(a,b,c,d){return this.bR(a,b,null,null,null,c,d)},
cg(a,b,c){var s=null
return this.bR(a,s,s,s,s,b,c)},
wJ(a,b,c,d){return this.bR(a,null,null,null,b,c,d)},
wK(a,b,c,d,e){return this.bR(a,b,c,d,e,null,null)},
wM(a,b,c,d,e,f){return this.bR(a,b,c,null,d,e,f)},
wL(a,b,c,d,e){return this.bR(a,null,b,null,c,d,e)},
wN(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bR=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.m:g
q=p.ah(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
cb(a,b,c,d){return this.w7(0,b,c,d)},
aC(a,b,c){return this.cb(0,b,c,null)},
w7(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cb=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.N("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dJ(new A.T(c,n),new A.qZ(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.ae(c.a,"?",!1,m),", ")
j=A.D1(d)
o=o.i("ao<2>")
o=A.O(new A.ao(c,o),o.i("o.E"))
p.f6("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.an(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cb,r)},
L(a,b,c,d){return this.xl(a,b,c,d)},
xl(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dJ(new A.T(b,n),new A.r0(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.D1(null)+' "'+a+'" SET '+m
o=A.O(new A.ao(b,o.i("ao<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.C(o,d)}p.f6(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
W(a,b,c){return this.uG(a,b,c)},
uG(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
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
uw(a,b,c){this.b.ux(B.bs,!0,!1,new A.qY(b),c)},
a0(a,b){return this.xh(a,b,b)},
xh(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a0=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jY("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a0)
case 7:m=e
n.jY("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jY("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a0,r)},
$iqx:1}
A.r_.prototype={
$1(a){return A.b8(a,t.N,t.X)},
$S:175}
A.qZ.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.r0.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.qY.prototype={
$1(a){var s=a.gm(0)===0?null:a.gG(a)
return this.a.$1(s)},
$S:151}
A.pO.prototype={}
A.ii.prototype={
jN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.k([],t.s),c=A.aO(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=$.Cw()
if(!k.b.test(l))A.v(A.aQ('Field "'+l+u.Z))
if(B.bd.F(0,l))throw A.b(A.aQ('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aQ('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aQ(e+l+'" cannot be unique.'))
if(B.b.bM(o,new A.qX(m)))throw A.b(A.aQ(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.F(k,l)}else k=!1
if(k)throw A.b(A.aQ(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.q)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ar(l,l.gm(0),k.i("ar<K.E>")),k=k.i("K.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.F(0,j)&&!B.bd.F(0,j))throw A.b(A.aQ('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.af.X(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.Hb(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.rg(u.r))
if(q.b&&!A.DI(r.a,3,34))throw A.b(A.rg("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.ar(r,r.gm(0),p.i("ar<K.E>")),p=p.i("K.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.F(0,o))throw A.b(A.aQ('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gaa(),r=r.gt(r);r.k();){q=r.gn()
A.D9(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aQ('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aQ('Ref field "'+m.a+'" must declare its target store.'))}return new A.pO(f.p8(a),f.p7(a),f.p6(a),d)},
p8(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.k(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.y(n,'"',i)+'"')+" "+o.gkQ()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.qW(),A.a_(k).i("X<1,l>")).B(0,", ")
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
p7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.k([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("X<K.E,l>")
j=A.O(new A.X(l,A.Al(),k),k.i("W.E"))
if(!l.F(l,"id"))j.push('"'+A.y("id",e,d)+'"')
i=m.c===B.b1?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.y(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.y(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.y(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.y(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.q)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bM(s,new A.qV(h)))continue
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
p6(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.q
s=A.k([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<K.E,l>")
n=A.O(new A.X(p,A.Al(),o),o.i("W.E"))
m=new A.qU(r,a0.c)
l=new A.X(p,new A.qR(m),o).B(0,f)
k=new A.X(p,new A.qS(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.y(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.y(r+"_ai",e,d)
o=A.y(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.y(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.y(r+"_ad",e,d)
o=A.y(r,e,d)
m=A.y(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.y(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.qT(),A.a_(n).i("X<1,l>")).B(0," OR ")
p=A.y(r+"_au",e,d)
o=A.y(r,e,d)
m=A.y(q,e,d)
h=A.y(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.y(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.qX.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:47}
A.qW.prototype={
$1(a){return"'"+A.y(a,"'","''")+"'"},
$S:7}
A.qV.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:47}
A.qU.prototype={
$2(a,b){return A.Fx(this.a,this.b,a,b)},
$S:137}
A.qR.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.qS.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.qT.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dI.prototype={
l(a){return A.dr(this).l(0)+": "+this.a},
$iH:1}
A.eK.prototype={}
A.eJ.prototype={}
A.ez.prototype={}
A.fg.prototype={}
A.fL.prototype={}
A.fv.prototype={}
A.cM.prototype={}
A.fT.prototype={}
A.fX.prototype={}
A.eE.prototype={}
A.hd.prototype={}
A.fx.prototype={}
A.h2.prototype={}
A.fD.prototype={}
A.fk.prototype={}
A.el.prototype={}
A.fS.prototype={}
A.AT.prototype={
$1(a){if(typeof a!="string")return a
return this.a.el(a)},
$S:15}
A.tB.prototype={}
A.lm.prototype={
a4(){return"DurabilityClass."+this.b}}
A.mQ.prototype={}
A.uW.prototype={
bV(a){var s,r=this.a
if(!r.I(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.oB(s)
r.toString
t.G.a(r)}return r},
kN(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(b==null)s=null
else{s=A.oB(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
w8(a){var s,r,q,p=a.a
if(p===0){this.a.af(0)
return}s=this.a
if(p>=s.a){s.af(0)
return}for(p=A.hx(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.lN.prototype={
aQ(a){return this.x_(a)},
x_(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dx
h=a.a
if(i.I(h))throw A.b(A.aQ('Duplicate store name "'+h+'" in this open call.'))
p=A.BG(a)
o=q.w
if(o.e===B.aA&&p.b.length!==0)throw A.b(new A.hd('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fT(a,p),$async$aQ)
case 2:n=new A.ii(o).jN(a)
o=a.w
if(o!=null)A.Mf(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aJ("lp_stores",1,"store = ?",[h]),$async$aQ)
case 3:m=c
l=J.L(m)
s=l.gE(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$aQ)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$aQ)
case 11:case 9:l.length===k||(0,A.q)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aQ)
case 15:case 13:l.length===k||(0,A.q)(l),++j
s=12
break
case 14:l=a.b
k=q.ch
s=16
return A.a(o.aC(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a6(a.p(),null),"created_at",k.$0()],t.N,t.X)),$async$aQ)
case 16:s=17
return A.a(A.fC(o,0,0,"create:"+h,k,l),$async$aQ)
case 17:s=5
break
case 6:l=J.S(l.gG(m),"schema_ver")
l.toString
A.an(l)
k=a.b
if(l>k)throw A.b(A.DF('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fB(q,a,l),$async$aQ)
case 20:case 19:s=21
return A.a(q.bJ(a),$async$aQ)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a6(a.p(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aQ)
case 22:case 5:i.j(0,h,new A.mQ(a,p,new A.uW(A.u(t.N,t.b))))
s=23
return A.a(q.dS(h,p),$async$aQ)
case 23:return A.e(null,r)}})
return A.f($async$aQ,r)},
fT(a,b){return this.oT(a,b)},
oT(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aJ("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fT)
case 3:j=d
if(J.bA(j)){s=1
break}o=null
try{n=J.S(J.ci(j),"v")
o=A.Ij(typeof n=="string"?B.h.av(n,null):n)}catch(i){if(A.E(i) instanceof A.dI){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.aq(B.l.v(B.e.v(A.ai(o.p()))).a)!==A.aq(B.l.v(B.e.v(A.ai(b.p()))).a))throw A.b(A.aQ('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
dS(a,b){return this.rB(a,b)},
rB(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ai(b.p())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aJ("lp_meta",1,"k = ?",[p]),$async$dS)
case 5:s=k.bA(d)?2:4
break
case 2:s=6
return A.a(n.aC(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dS)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dS)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dS,r)},
hI(a){return this.ui(a)},
ui(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hI)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
bJ(a){return this.t0(a)},
t0(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bJ=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.en("lp_stores",A.k(["definition_json"],t.s),1,"store = ?",[a1]),$async$bJ)
case 3:a2=a6
if(J.bA(a2)){s=1
break}o=null
try{n=J.S(J.ci(a2),"definition_json")
m=typeof n=="string"?B.h.av(n,null):n
l=m
l.toString
k=t.X
o=A.pv(A.b8(t.f.a(l),t.N,k),k)}catch(a4){if(A.E(a4) instanceof A.cM){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.af.X(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.ji()
$.ks()
f.az()
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
case 11:l=new A.ii(p.w).jN(a3).d,k=l.length,e=0
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
c=k.$ti.i("X<K.E,l>")
b=new A.X(k,A.Al(),c).B(0,", ")
a=new A.X(k,new A.tC(a3,h),c).B(0,", ")
l=A.y(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.y(a1,'"','""')+'"')),$async$bJ)
case 18:case 12:if(f.b==null)f.b=$.mk.$0()
l=a3.b
s=19
return A.a(A.fC(a0,f.gmG(),l,"fts:"+a1,p.ch,l),$async$bJ)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bJ,r)},
hQ(a){return this.uI(a)},
uI(a){var s=0,r=A.h(t.H),q=this,p
var $async$hQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hQ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hQ,r)},
aw(a){var s=this.dx.h(0,a)
if(s==null)throw A.b(A.x('No store "'+a+'" registered in this LocalPocket.'))
return s},
aX(a,b,c){var s
if(A.n4(this)!=null)A.v(A.x(u.L))
s=this.b
s===$&&A.A()
return s.aX(a,b,c)},
a0(a,b){return this.aX(a,B.p,b)},
nh(a,b){++this.y.e
return this.r.aD(a,B.m)},
ni(a,b){this.y.n8()
return this.r.ah(a,b)},
e3(a){return this.ud(a)},
uc(){return this.e3(null)},
ud(a){var s=0,r=A.h(t.H),q=this,p
var $async$e3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e3)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.y(a,'"','""')+'"')),$async$e3)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e3,r)},
fF(){var s=0,r=A.h(t.H),q=this
var $async$fF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fF)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fF,r)},
iy(){var s=0,r=A.h(t.H),q=this
var $async$iy=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iy)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iy,r)},
ix(){var s=0,r=A.h(t.H),q=this
var $async$ix=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.r.O("VACUUM"),$async$ix)
case 2:return A.e(null,r)}})
return A.f($async$ix,r)},
fp(){return this.wF()},
wF(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fp=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a0(new A.tF(o),t.P),$async$fp)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
dq(a){return this.xd(a)},
xd(a){var s=0,r=A.h(t.H),q=this,p
var $async$dq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dx,p=new A.bE(p,p.r,p.e,A.n(p).i("bE<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e7(p.d,a),$async$dq)
case 4:s=2
break
case 3:s=5
return A.a(q.fp(),$async$dq)
case 5:s=6
return A.a(q.fF(),$async$dq)
case 6:s=7
return A.a(q.uc(),$async$dq)
case 7:return A.e(null,r)}})
return A.f($async$dq,r)},
e7(a,b){return this.us(a,b)},
us(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.ch.$0()
h=i-B.c.M(b.a,1000)
j.a=0
o=p.aw(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ah("SELECT b.id FROM "+('"'+A.y(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e7)
case 5:l=d
if(J.bA(l)){s=4
break}if(A.n4(p)!=null)A.v(A.x(u.L))
k=p.b
k===$&&A.A()
s=6
return A.a(k.aX(new A.tE(j,p,l,a,h,o),B.p,n),$async$e7)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e7,r)},
q(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$q=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.dy){s=1
break}n.dy=!0
m=n.a$
m.a.q()
m.b.q()
n.fr.b.af(0)
p=4
s=7
return A.a(n.r.O("PRAGMA optimize"),$async$q)
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
return A.a(n.r.q(),$async$q)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$q,r)}}
A.tC.prototype={
$1(a){return A.Fx(this.a.a,this.b.c,"",a)},
$S:7}
A.tF.prototype={
$1(a){return this.nA(a)},
nA(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b0("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.D(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.F(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.W("lp_outbox","store = ? AND record_id = ?",[m,A.F(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tE.prototype={
$1(a){return this.nz(a)},
nz(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.D(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ax,h=h.ay
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.F(f)
a1=J
s=4
return A.a(a0.ah("SELECT b.id FROM "+('"'+A.y(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.bA(a4)){s=2
break}s=5
return A.a(a0.ah("SELECT * FROM "+('"'+A.y(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.L(e)
c=d.gV(e)?A.cf(i,d.gG(e),g,h):null
s=6
return A.a(A.cz(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.W(n,"id = ?",[f]),$async$$1)
case 7:d=A.ap([f],m)
l.push(new A.a1(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("aj<o.E>")
a=A.lS(b.i("o.E"))
a.C(0,new A.aj(new A.T(c,d),new A.tD(),b))
a2.bd(new A.aR(n,f,B.H,B.aV,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tD.prototype={
$1(a){return a!=="id"},
$S:9}
A.nF.prototype={
x7(){var s,r,q=this,p=new A.aH(new A.t($.C,t.D),t.h)
q.e=p
s=q.a.a
s.d.aW(new A.y1(q,p),t.H)
r=s.as
s=q.gvC()
if(r.a>0)A.cP(r,s)
else A.cP(B.D,s)},
k_(){var s,r=this
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
b2.c+=b1}b3=new A.ji()
$.ks()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aW&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nh("PRAGMA synchronous=FULL",null),$async$cF)
case 5:b1.b="FULL"
case 4:i=A.k([],t.gi)
h=A.k([],t.eb)
g=A.k([],t.aY)
p=7
s=10
return A.a(b2.b.a0(new A.y0(m,i,h,l,g),t.P),$async$cF)
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
b8.aL(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dx,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.w8(a0.b)
b6.vg(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a1=f[b7]
b6.vh(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.E(c2)
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
return A.a(b4.nh("PRAGMA synchronous=NORMAL",null),$async$cF)
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
a4=k.gvf();++f.a
f.d+=a4
b1.r9()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.q)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.v(A.x("Future already completed"))
a4.am(A.f1(new A.bk("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cF,r)}}
A.y1.prototype={
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
A.y0.prototype={
$1(a){return this.nW(a)},
nW(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.BP(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.oP(new A.xZ(a,a0),null,A.m([$.ku(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.eY([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.E(a1)
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
return A.a(A.oP(new A.y_(a0,k),null,A.m([$.ku(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.eY([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.E(a2)
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
A.xZ.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:49}
A.y_.prototype={
$0(){return this.a.a0(new A.xY(this.b),t.z)},
$S:49}
A.xY.prototype={
$1(a){return this.a.a.$1(a)},
$S:119}
A.hn.prototype={}
A.vH.prototype={}
A.wt.prototype={
aX(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.t($.C,t._)
r.c.push(new A.hn(a,new A.aH(s,t.jk)))
return s.a2(new A.wA(c),c)}return this.tx(a,b,c)},
tx(a,b,c){var s,r,q,p=this
if(p.a.as.a>0){s=p.c
if(s!=null)s.k_()}s=A.k([],t.i4)
r=new A.nF(p,b,s)
p.c=r
r.x7()
q=new A.t($.C,t._)
s.push(new A.hn(a,new A.aH(q,t.jk)))
return q.a2(new A.ww(c),c)},
wR(a,b){var s,r=this.a
if(r.as.a>0){s=this.c
if(s!=null)s.k_()}return r.d.aW(new A.wz(this,a,b),b)},
r9(){if(++this.d<64)return
this.d=0
A.cP(B.D,new A.wv(this))}}
A.wA.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.ww.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.wz.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a0(new A.wy(s,this.b,r),r)},
$S(){return this.c.i("z<0>()")}}
A.wy.prototype={
$1(a){return this.nV(a,this.c)},
nV(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.BP(p.a.a.a,a,A.k([],t.gi),!0,null)
n=p.c
m=t.X
q=A.oP(new A.wx(p.b,o,n),null,A.m([$.ku(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("z<0>(qx)")}}
A.wx.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("z<0>()")}}
A.wv.prototype={
$0(){this.a.a.a.iy().mv(new A.wu())},
$S:0}
A.wu.prototype={
$1(a){},
$S:26}
A.eZ.prototype={$iH:1}
A.om.prototype={}
A.hC.prototype={}
A.t_.prototype={
oB(a){var s=this,r=s.a.a.a$.b
r=new A.aZ(r,A.n(r).i("aZ<1>")).aT(new A.te(s))
s.c!==$&&A.cy()
s.c=r},
vG(a){var s,r,q,p=this
A:{if(a instanceof A.ma){s=p.hj(a.a,a.b)
break A}if(a instanceof A.kU){r=p.a.c
s=A.bj(new A.kV(r.a,r.b,r.c,r.d,r.e===B.aA),t.V)
break A}if(a instanceof A.lx){s=A.bj(new A.ly(!0,p.a.c.a),t.V)
break A}if(a instanceof A.kY){s=p.q().a2(new A.tf(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lv){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tg(s,p),new A.th())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.my){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.ts(s,p),new A.tu())
break A}if(a instanceof A.m0){s=p.r5(a.a,a.b,a.c)
break A}if(a instanceof A.mq){s=p.rr(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.l9){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tv(s,p),A.Fl())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.l8){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.by(q,new A.tw(s,p),A.Fl())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.ll){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.by(q,new A.tx(s,p),A.Lv())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lA){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.ty(s,p),A.Lx())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kA){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
q=a.e
s.a=q
s=p.by(q,new A.tz(s,p),A.Lu())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lr){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.by(q,new A.tA(s,p),A.Lw())
break A}if(a instanceof A.mE){s=p.ti(a.a,a.b,a.c)
break A}if(a instanceof A.mZ){s=p.oW(a.a,a.b)
break A}if(a instanceof A.n_){s=p.eW(a.a,!0)
break A}if(a instanceof A.n1){s=p.eW(a.a,!1)
break A}if(a instanceof A.n3){s=p.hr(a.a,a.b)
break A}if(a instanceof A.n2){s=p.hq(a.a,a.b)
break A}if(a instanceof A.n0){s=p.ho(a.a,a.b)
break A}if(a instanceof A.ni){s=p.hy(a.a,a.b)
break A}if(a instanceof A.nj){s=p.tQ(a.a,a.b)
break A}if(a instanceof A.nh){s=p.jF(a.a)
break A}if(a instanceof A.kC){s=p.a.a.e3(a.a).a2(new A.ti(),t.V)
break A}if(a instanceof A.ng){s=p.a.a.fF().a2(new A.tj(),t.V)
break A}if(a instanceof A.ne){s=p.a.a.ix().a2(new A.tk(),t.V)
break A}if(a instanceof A.mm){s=p.a.a.fp().a2(new A.tl(),t.V)
break A}if(a instanceof A.l0){s=p.a.a.e7(a.a,A.dy(0,a.b,0)).a2(new A.tm(),t.V)
break A}if(a instanceof A.mz){s=p.a.a.dq(A.dy(0,a.a,0)).a2(new A.tn(),t.V)
break A}if(a instanceof A.l5){s=p.a.a.cy
s===$&&A.A()
s=s.fg(a.a).a2(new A.to(p),t.V)
break A}if(a instanceof A.l4){s=p.a.a.cy
s===$&&A.A()
s=s.dv(a.a,a.b).a2(new A.tp(p),t.V)
break A}if(a instanceof A.mw){s=p.a.a.cy
s===$&&A.A()
s=s.eq(a.b,a.c,a.a).a2(new A.tq(),t.V)
break A}if(a instanceof A.kx){s=p.a.a.cy
s===$&&A.A()
s=s.eY(a.a,a.b).a2(new A.tr(),t.V)
break A}if(a instanceof A.ky){s=p.a.a.cy
s===$&&A.A()
s=s.e1(a.a,a.b).a2(new A.tt(),t.V)
break A}if(a instanceof A.l7){s=p.tR(a.a)
break A}throw A.b(A.fR(u.P))}return s},
hj(a,b){return this.rp(a,b)},
rp(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hj=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dx,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.pv(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:s=9
return A.a(n.aQ(j),$async$hj)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.v(A.x('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.BG(j)
e=new A.a2("")
A.cg(e,g.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cW(c)
b.u(0,d)
b.q()
b=A.aq(c.a.a)
e=new A.a2("")
A.cg(e,f.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
a=A.cW(c)
a.u(0,d)
a.q()
if(b!==A.aq(c.a.a))throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.v(A.x('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a2("")
A.cg(e,h.c.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cW(c)
b.u(0,d)
b.q()
b=a0!==A.aq(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.q)(a1),++k
s=3
break
case 5:q=B.o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
dF(a,b){var s,r,q,p=this.a.a,o=p.aw(a)
if(b!=null){s=this.d4(b)
r=A.De(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.v(A.x('Transaction session "'+b+'" has no executor.'))
return new A.fi(p,o,q.b,this.d4(b).r)}return new A.fi(p,o,null,null)},
pe(a){return this.dF(a,null)},
r5(a,b,c){return this.by(c,new A.t2(this,a,c,b),new A.t3())},
ba(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.dF(a,c),e=t.fC,d=new A.mo(f.a,f.b.a,f.c,A.k([],e),A.k([],e),A.k([],t.k),A.k([],t.fi),g,!1,g,!1,!1,g,!1,!1)
for(f=b.a,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s)d=this.oS(d,f[s])
for(f=b.b,e=f.length,r=t.N,q=t.X,p=t.d,s=0;s<f.length;f.length===e||(0,A.q)(f),++s){o=f[s]
n=A.k([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
if(l.b===B.bc)n.push(A.m([l.a,l.c],r,q))}d=d.wB(n)}k=b.c
if(k!=null){f=A.AM(k)
d.jG(f)
A.C8(f)
j=A.zX(f,!0)
i=d.fV()
i.d.push(new A.aY(j.a,j.b))
i.f.push(f)
d=i}for(f=b.d,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s,d=i){h=f[s]
q=h.a
d.cT(q)
i=d.fV()
i.r.push(new A.cm(q,h.b))}f=b.r
if(f!=null)d=d.lj(A.bF(f,!0,r))
if(b.w)d=d.pv(!0)
if(b.x)d=d.pw(!0)
if(b.f)d=d.pt(!0)
else{f=b.e
if(f!=null){if(f<0)A.v(A.aw("Limit must be non-negative, got "+A.r(f)+".",g))
d=d.px(f)}}return d},
oS(a,b){var s
switch(b.b.a){case 0:return a.xx(0,b.a,b.c)
case 1:return a.xF(0,b.a,b.c)
case 2:return a.xy(0,b.a,b.c)
case 3:return a.xz(0,b.a,b.c)
case 4:return a.xD(0,b.a,b.c)
case 5:return a.xE(0,b.a,b.c)
case 6:return a.xA(0,b.a,b.d)
case 7:s=b.d
if(s==null)s=B.m
if(s.length!==2)throw A.b(A.N("between requires exactly two values.",null))
return a.xu(0,b.a,new A.a4(s[0],s[1]))
case 8:return a.xG(0,b.a,A.a6(b.c))
case 9:return a.xw(0,b.a,A.a6(b.c))
case 10:return a.xv(0,b.a,A.a6(b.c))
case 11:return a.xC(0,b.a,!0)
case 12:return a.xB(0,b.a,!0)}},
rr(a,b,c){return this.by(c,new A.t4(this,b,a,c),new A.t5())},
ti(a,b,c){return this.by(c,new A.t8(this,a,c,b),new A.t9())},
oW(a,b){var s,r,q,p,o,n,m,l=this.d
if(l.a!==0)throw A.b(A.x("A transaction session is already active on this database."))
s="tx"+ ++this.f
r=$.C
q=t.D
p=t.h
o=new A.t(r,q)
n=new A.om(new A.aH(new A.t(r,q),p),new A.aH(o,p),A.k([],t.mc))
l.j(0,s,n)
m=this.a.a
l=new A.t1(n)
if(a){if(A.n4(m)!=null)A.v(A.x(u.L))
r=m.b
r===$&&A.A()
l=r.wR(l,t.H)}else{r=b===B.bm?B.aW:B.p
r=m.aX(l,r,t.H)
l=r}n.w!==$&&A.cy()
n.w=l
return o.a2(new A.t0(s),t.V)},
eW(a,b){return this.ts(a,b)},
ts(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eW=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d4(a)
for(l=h.e,k=A.a_(l).i("bV<1>"),l=new A.bV(l,k),l=new A.ar(l,l.gm(0),k.i("ar<W.E>")),k=k.i("W.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.v(A.x("Future already completed"))
j.aL(null)}h.f=!b
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
if(A.E(g) instanceof A.eZ){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.H(0,a)
s=n.pop()
break
case 6:q=B.o
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eW,r)},
hr(a,b){return this.tf(a,b)},
tf(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d4(a)
n=$.C
m=t.D
l=t.h
k=new A.t(n,m)
j=new A.hC(b,new A.aH(new A.t(n,m),l),new A.aH(k,l))
l=o.r.a0(new A.t7(j),t.H)
j.f!==$&&A.cy()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hr)
case 3:q=B.o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
hq(a,b){return this.td(a,b)},
td(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hq=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d4(a).e
f=B.b.mR(g,new A.t6(b))
if(f<0)throw A.b(A.x('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a_(g).i("bV<1>")
l=A.O(new A.bV(g,l),l.i("W.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bO(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.v(A.x("Future already completed"))
i.aL(null)
p=7
i=m.f
i===$&&A.A()
s=10
return A.a(i,$async$hq)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.E(e) instanceof A.eZ))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:B.b.kt(g,f,g.length)
q=B.o
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hq,r)},
ho(a,b){return this.t5(a,b)},
t5(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$ho=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d4(a).e
j=A.De(k)
if(j==null||j.a!==b)throw A.b(A.x('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.A()
s=7
return A.a(m,$async$ho)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.E(i) instanceof A.eZ)throw i
else throw i
s=6
break
case 3:s=2
break
case 6:k.pop()
q=B.o
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ho,r)},
hy(a,b){return this.tS(a,b)},
tS(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.aw(a)
s=3
return A.a(p.pe(a).bV(b),$async$hy)
case 3:o="w"+ ++p.f
n=A.BY()
n.smM(new A.m9(l,b,m,B.aX).iK().wh(new A.tb(p,o),new A.tc(p,n,o)))
p.e.j(0,o,n.bb())
q=A.bj(new A.hh(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
tQ(a,b){var s=this,r="w"+ ++s.f,q=s.ba(a,b,null)
s.e.j(0,r,new A.mr(q,q.ge_(),B.aX).iK().aT(new A.td(s,r)))
return A.bj(new A.hh(r),t.V)},
jF(a){return this.tI(a)},
tI(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.e.H(0,a)
if(o!=null)o.D()
q=B.o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jF,r)},
iZ(a){return new A.l3(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
tR(a){var s=this,r="w"+ ++s.f,q=s.a.a.cy
q===$&&A.A()
s.e.j(0,r,q.xt(a).aT(new A.ta(s,r)))
return A.bj(new A.hh(r),t.V)},
d4(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.x('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.x('Transaction session "'+a+'" is not ready yet.'))
return s},
hz(a,b,c){return this.tV(a,b,c)},
by(a,b,c){return this.hz(a,b,c,t.z)},
tV(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hz=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d4(a)
o=c
s=3
return A.a(b.$0(),$async$hz)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.e,o=new A.b1(p,p.r,p.e,A.n(p).i("b1<2>"))
case 2:if(!o.k()){s=3
break}s=4
return A.a(o.d.D(),$async$q)
case 4:s=2
break
case 3:p.af(0)
p=q.c
p===$&&A.A()
p.D()
s=5
return A.a(q.a.a.q(),$async$q)
case 5:s=6
return A.a(q.b.q(),$async$q)
case 6:return A.e(null,r)}})
return A.f($async$q,r)}}
A.te.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cH(r,t.N,t.X)
s=a.f
s=s==null?null:A.cH(s,t.N,t.X)
this.a.b.u(0,new A.l_(a.a,a.b,a.c,a.d,r,s,A.d2(a.r,t.N)))},
$S:106}
A.tf.prototype={
$1(a){return B.o},
$S:10}
A.tg.prototype={
$0(){var s=this.a
return this.b.dF(s.c,s.a).bV(s.b)},
$S:101}
A.th.prototype={
$1(a){return new A.fV(a)},
$S:90}
A.ts.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.k([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dF(o.c,o.a).bV(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.q)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:76}
A.tu.prototype={
$1(a){return new A.fW(a)},
$S:72}
A.tv.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).hL()},
$S:51}
A.tw.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).hN(s.c)},
$S:51}
A.tx.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).hS(s.c)},
$S:71}
A.ty.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).i8()},
$S:69}
A.tz.prototype={
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
A.tA.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).hU()},
$S:74}
A.ti.prototype={
$1(a){return B.o},
$S:10}
A.tj.prototype={
$1(a){return B.o},
$S:10}
A.tk.prototype={
$1(a){return B.o},
$S:10}
A.tl.prototype={
$1(a){return new A.fN(a)},
$S:75}
A.tm.prototype={
$1(a){return new A.fj(a)},
$S:240}
A.tn.prototype={
$1(a){return B.o},
$S:10}
A.to.prototype={
$1(a){var s,r,q=A.k([],t.oS)
for(s=J.D(a),r=this.a;s.k();)q.push(r.iZ(s.gn()))
return new A.fm(q)},
$S:77}
A.tp.prototype={
$1(a){return new A.fl(a==null?null:this.a.iZ(a))},
$S:78}
A.tq.prototype={
$1(a){return B.o},
$S:10}
A.tr.prototype={
$1(a){return B.o},
$S:10}
A.tt.prototype={
$1(a){return B.o},
$S:10}
A.t2.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dF(p.b,a1)
a0.a.a.c===$&&A.A()
o=p.d
n=o instanceof A.iP
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.io(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.hu(B.Z,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.F(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 4:n=o instanceof A.iS
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nj(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.hu(B.a_,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.F(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 11:k=o instanceof A.iQ
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.n5(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.lR(i),$async$$0)
case 23:case 20:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 18:k=o instanceof A.iT
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nk(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bv(i,B.a_),$async$$0)
case 30:case 27:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iM
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.n2(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cr(b,c,!1),$async$$0)
case 37:case 34:q=A.k([b],t.s)
s=1
break
case 32:a0=o instanceof A.iN
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.n3(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.eL(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.O(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iL
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mo(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.ht(B.C,b),$async$$0)
case 51:case 48:q=A.k([b],t.s)
s=1
break
case 46:e=o instanceof A.iR
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.nd(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.ht(B.E,b),$async$$0)
case 58:case 55:q=A.k([b],t.s)
s=1
break
case 53:e=o instanceof A.iO
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.ko(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.d2(b),$async$$0)
case 65:case 62:q=A.k([b],t.s)
s=1
break
case 60:throw A.b(A.fR(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:69}
A.t3.prototype={
$1(a){return new A.fE(a)},
$S:79}
A.t4.prototype={
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
return A.a(o.ba(n,l,m).py(!0,k).c9(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.ba(n,l,m).pu(k).c9(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.ba(p.c,l,p.d).c9()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:120}
A.t5.prototype={
$1(a){return new A.fQ(a.a,a.d,a.e,a.b,a.c)},
$S:81}
A.t8.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dF(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.vO(m,l,o.c,n.a)
if(l.w==null)A.v(A.rg('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.v(A.rg(u.r))
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
$S:82}
A.t9.prototype={
$1(a){var s,r,q=A.k([],t.cP)
for(s=J.D(a);s.k();){r=s.gn()
q.push(new A.mD(r.a,r.b))}return new A.fY(q)},
$S:83}
A.t1.prototype={
nx(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nx(a)},
$S:4}
A.t0.prototype={
$1(a){return new A.h9(this.a)},
$S:85}
A.t7.prototype={
$1(a){return this.ny(a)},
ny(a){var s=0,r=A.h(t.H),q=this,p
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
A.t6.prototype={
$1(a){return a.a===this.a},
$S:86}
A.tb.prototype={
$1(a){var s=a==null?B.b5:A.k([a],t.d)
this.a.b.u(0,new A.jr(this.b,s))},
$S:87}
A.tc.prototype={
$1(a){this.b.bb().D()
this.a.e.H(0,this.c)},
$S:26}
A.td.prototype={
$1(a){this.a.b.u(0,new A.jr(this.b,a))},
$S:88}
A.ta.prototype={
$1(a){var s,r=this.a,q=A.k([],t.oS)
for(s=J.D(a);s.k();)q.push(r.iZ(s.gn()))
r.b.u(0,new A.l6(this.b,q))},
$S:89}
A.nX.prototype={}
A.uc.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:67}
A.ud.prototype={
$2(a,b){return B.c.Z(a.a,b.a)},
$S:91}
A.u9.prototype={
$1(a){return a.h(0,"name")},
$S:42}
A.ub.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.D(q.a),k=q.b,j=q.c,i=j.ax,j=j.ay,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.cf(k,p,i,j)
n=o
A.HR(k,n)
g=J.S(o,"id")
g.toString
A.F(g)
m=A.dp(k,J.w(J.S(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:48}
A.mg.prototype={
wP(a){if(a>this.w)this.w=a},
n8(){return this.f++}}
A.d7.prototype={}
A.a9.prototype={}
A.c4.prototype={}
A.dt.prototype={}
A.cY.prototype={}
A.aY.prototype={}
A.cm.prototype={}
A.y9.prototype={}
A.mo.prototype={
cu(a,b){var s=this.ge_(),r=this.c
if(r==null)return s.ni(a,b)
s.y.n8()
return r.ah(a,b)},
c_(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bF(i.d,!0,h)
h=A.bF(i.e,!0,h)
s=a0==null?A.bF(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bF(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bF(i.f,!0,t.jS)
return new A.mo(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
fV(){var s=null
return this.c_(s,s,s,s,s,s,s,s,s)},
lj(a){var s=null
return this.c_(s,s,s,s,s,s,s,a,s)},
pv(a){var s=null
return this.c_(s,s,s,a,s,s,s,s,s)},
pw(a){var s=null
return this.c_(s,s,s,s,a,s,s,s,s)},
pt(a){var s=null
return this.c_(a,s,s,s,s,s,s,s,s)},
px(a){var s=null
return this.c_(s,s,s,s,s,a,s,s,s)},
pz(a,b,c){var s=null
return this.c_(s,s,s,s,s,s,a,b,c)},
py(a,b){var s=null
return this.c_(s,a,b,s,s,s,s,s,s)},
pu(a){var s=null
return this.c_(s,s,a,s,s,s,s,s,s)},
cT(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aQ('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.aw('Unknown field "'+a+'" for query.',a))},
bg(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cT(a0)
s='"'+A.y(a0,'"','""')+'"'
r=A.k([],t.fC)
q=a4!=null
if(q)r.push(new A.aY(s+" = ?",[a4]))
p=b2!=null
if(p)r.push(new A.aY(s+" <> ?",[b2]))
o=a5!=null
if(o)r.push(new A.aY(s+" > ?",[a5]))
n=a6!=null
if(n)r.push(new A.aY(s+" >= ?",[a6]))
m=b0!=null
if(m)r.push(new A.aY(s+" < ?",[b0]))
l=b1!=null
if(l)r.push(new A.aY(s+" <= ?",[b1]))
k=a7!=null
if(k)r.push(new A.aY(s+" IN ("+B.b.B(A.ae(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.aY(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.aY(s+b,[A.kl(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.aY(s+b,["%"+A.kl(a3)]))
g=a2!=null
if(g)r.push(new A.aY(s+b,["%"+A.kl(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.aY(s+" IS NULL",B.m))
e=a8===!0
if(e)r.push(new A.aY(s+" IS NOT NULL",B.m))
d=this.fV()
B.b.C(d.d,r)
c=A.k([],t.k)
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
xx(a,b,c){var s=null
return this.bg(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xF(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xy(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xz(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xD(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xE(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xA(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
xu(a,b,c){var s=null
return this.bg(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xG(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
xw(a,b,c){var s=null
return this.bg(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
xv(a,b,c){var s=null
return this.bg(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xC(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
xB(a,b,c){var s=null
return this.bg(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
wB(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.k([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
p=A.k([],j)
q.a1(0,new A.vv(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.fV()
o.e.push(new A.aY("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.k([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.q)(a),++r){q=a[r]
if(q.gV(0)){m=A.k([],j)
for(l=q.gaa().gt(0);l.k();){k=l.gn()
m.push(new A.a9(k.a,"eq",[k.b]))}s.push(new A.dt(m))}}o.f.push(new A.cY(s))
return o},
jG(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.a9
r=s?a.a:l
if(s){this.cT(r)
break A}s=a instanceof A.c4
q=s?a.a:l
if(s){this.jG(q)
break A}p=a instanceof A.dt
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cY
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.q)(n),++m)this.jG(n[m])
break A}},
gcq(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga_(r).a!=="id"
else s=!1
if(s)r.push(B.cS)
return r},
glg(){var s,r,q,p,o
if(this.at){s=A.k([],t.fi)
for(r=this.gcq(),q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.push(new A.cm(o.a,!o.b))}}else s=this.gcq()
return s},
gm8(){var s,r,q,p,o,n=A.k([],t.s)
for(s=this.gcq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jw(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.Dp('Query on "'+this.gaP()+'" requires .limit(n) or .all().'))
return s},
gaP(){return this.b.a},
ge_(){return this.a},
eD(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.k([],e),c=[],b=A.k([],e)
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
if(r!=null){n=f.pC(r)
m=f.lF(f.glg(),n.a)
d.push(m.a)
B.b.C(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.y(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.y(a,'"','""')+'"')+") AS v"}else r=f.gtk()
k=r}j=f.glg()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.vq(),A.a_(j).i("X<1,l>")).B(0,", ")
h=A.Ia(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.vr(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jw():a3
g=e}return new A.a4(h+(g==null?"":" LIMIT "+A.r(g)),c)},
iX(a){return this.eD(null,null,!1,!1,a)},
pk(a,b){return this.eD(a,b,!1,!1,null)},
pi(){return this.eD(null,null,!1,!1,null)},
pl(a,b,c){return this.eD(a,null,b,c,null)},
pj(a){return this.eD(null,null,!1,a,null)},
gtk(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.l4())return"*"
o=A.O(o,t.N)
for(s=this.gcq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(!B.b.F(o,p))o.push(p)}return new A.X(o,A.Al(),A.a_(o).i("X<1,l>")).B(0,", ")},
pC(a){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null
try{s=t.G.a(B.h.av(B.k.f0(B.ar.v(a)),null))
i=J.S(s,"store")
h=J.S(s,"schemaVer")
g=J.S(s,"shape")
q=t.lH
p=q.a(J.S(s,"sort"))
if(p==null)p=B.aj
f=A.bF(p,!0,t.N)
r=k.at?J.S(s,"pv"):J.S(s,"values")
q=q.a(r)
if(q==null)q=B.aj
e=A.bF(q,!0,t.X)}catch(o){q=A.BJ(j)
throw A.b(q)}n=k.gm8()
q=k.b
if(!J.w(i,q.a)||!J.w(h,q.b)||!J.w(g,k.gm6())||!B.af.X(f,n)||J.ak(e)!==n.length)throw A.b(A.BJ("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=e,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bJ(l)&&!A.ax(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.BJ(j))}return new A.y9(e)},
gm6(){var s,r,q,p,o,n=this,m=A.k([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}return B.h.a6(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cE(a,new A.vs(a)),c=B.b.cE(b,new A.vt())
if(a.length>=2&&d&&!B.b.gG(a).b&&c){s=A.k([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.q)(a),++q){p=a[q]
s.push('"'+A.y(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gG(a).b?"<":">"
return new A.a4("("+o+") "+n+" ("+B.b.B(A.ae(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.k([],s)
l=[]
for(k=0;k<a.length;++k){j=A.k([],s)
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
lG(a,b){var s,r,q,p=this,o=p.gcq(),n=p.b,m=p.gm8(),l=p.gm6(),k=[]
for(s=o.length,r=0;q=o.length,r<q;o.length===s||(0,A.q)(o),++r)k.push(a.h(0,o[r].a))
s=[]
for(r=0;r<o.length;o.length===q||(0,A.q)(o),++r)s.push(b.h(0,o[r].a))
n=B.e.v(B.h.a6(A.m(["store",n.a,"schemaVer",n.b,"sort",m,"shape",l,"values",k,"pv",s],t.N,t.K),null))
return B.bv.gf5().v(n)},
ea(a){return this.vv(a)},
c9(){return this.ea(null)},
vv(a8){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ea=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a7=a8==null?p.jw():a8
if(a7===0){q=B.cT
s=1
break}o=a7==null
n=p.iX(o?null:a7+1)
s=3
return A.a(p.cu(n.a,n.b),$async$ea)
case 3:m=b0
l=!o&&J.ak(m)>a7
k=o?m:J.B7(m,a7).eu(0)
o=p.y
j=o!=null
i=j&&p.l4()
h=p.b
if(i){i=A.O(o,t.N)
B.b.C(i,p.rK())
g=A.LG(h,k,p.ge_().ax,i,p.ge_().ay)}else g=A.LF(h,k,p.ge_().ax,p.ge_().ay)
i=p.at
if(i&&g.length!==0){h=A.a_(g).i("bV<1>")
f=A.O(new A.bV(g,h),h.i("W.E"))
B.b.af(g)
B.b.C(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hk(g),$async$ea)
case 7:e=b0
d=l
l=e
s=5
break
case 6:d=p.as!=null&&g.length!==0
case 5:c=A.k([],t.d)
for(i=g.length,h=t.N,b=t.X,a=0;a0=g.length,a<a0;g.length===i||(0,A.q)(g),++a){a1=g[a]
if(j){a0=A.u(h,b)
for(a2=o.length,a3=0;a3<o.length;o.length===a2||(0,A.q)(o),++a3){a4=o[a3]
if(a1.I(a4))a0.j(0,a4,a1.h(0,a4))}c.push(a0)}else c.push(a1)}if(a0!==0){a5=l?p.lG(B.b.ga_(g),B.b.gG(g)):null
a6=d?p.lG(B.b.ga_(g),B.b.gG(g)):null}else{a5=null
a6=null}q=new A.co(c,a5,a6,l,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ea,r)},
hk(a){return this.rE(a)},
rE(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga_(a)
e=p.gcq()
n=[]
for(m=p.gcq(),l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k)n.push(o.h(0,m[k].a))
j=p.lF(e,n)
e=t.s
i=A.k([],e)
h=[]
g=A.k([],e)
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
return A.a(p.cu("SELECT 1 FROM "+('"'+A.y(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hk)
case 3:q=d.ea(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
l4(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.f9(o)==null)return!1}return!0},
rK(){var s,r,q,p,o=A.k([],t.s)
for(s=this.gcq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hL(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pj(!0)
m=A
s=3
return A.a(p.cu(o.a,o.b),$async$hL)
case 3:n=m.f6(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)},
hN(a){return this.uu(a)},
uu(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cT(a)
o=p.pl(a,!0,!0)
m=A
s=3
return A.a(p.cu(o.a,o.b),$async$hN)
case 3:n=m.f6(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
hS(a){return this.va(a)},
va(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cT(a)
o=A.k([a],t.s)
n=A.k([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pz(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.iX(h)
o=[]
f=J
s=3
return A.a(i.cu(B.a.kv(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hS)
case 3:n=f.D(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)},
qZ(a){var s,r,q=this.b.f9(a)
if(q==null)return!1
s=q.b
A:{r=B.R===s||B.S===s||B.B===s||B.T===s
break A}return r},
cS(a,b){return this.oR(a,b)},
oR(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cT(b)
if(!p.qZ(b))throw A.b(A.aw('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pk(b,a)
s=3
return A.a(p.cu(o.a,o.b),$async$cS)
case 3:n=d
m=J.L(n)
q=A.EG(m.gE(n)?null:J.S(m.gG(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cS,r)},
i8(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$i8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lj(A.k(["id"],m))
k=l.pi()
s=3
return A.a(l.cu(k.a,k.b),$async$i8)
case 3:j=b
m=A.k([],m)
for(o=J.D(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.F(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
hU(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.iX(p.jw())
n=J
s=3
return A.a(p.cu("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hU)
case 3:q=n.be(b,new A.vu(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)}}
A.vv.prototype={
$2(a,b){this.a.cT(a)
this.b.push('"'+A.y(a,'"','""')+'" = ?')
this.c.push(b)},
$S:92}
A.vq.prototype={
$1(a){var s=A.y(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:93}
A.vr.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.y(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:94}
A.vs.prototype={
$1(a){return a.b===B.b.gG(this.a).b},
$S:95}
A.vt.prototype={
$1(a){return a!=null},
$S:17}
A.vu.prototype={
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
A.vO.prototype={
tj(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.Dp('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
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
A.Il(c)
if(d.b)A.Ik(c)
b=e.a
a=b+"_fts"
a0=A.k(['"'+A.y(a,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a0.push("b.archived = 0")
if(!n.w)a0.push("b.hidden = 0")
a4=B.b.B(a0," AND ")
a1=n.tj()
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
return A.a(m.ni(l,k),$async$c9)
case 10:s=8
break
case 9:s=11
return A.a(j.ah(l,k),$async$c9)
case 11:case 8:i=a7
h=A.k([],t.kj)
for(a4=J.D(i);a4.k();){g=a4.gn()
e=J.S(g,"id")
e.toString
A.F(e)
d=J.S(g,"score")
d.toString
J.aL(h,new A.cL(e,A.EF(d)))}q=h
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
h=A.E(a5)
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
a4(){return"FieldKind."+this.b}}
A.aV.prototype={
gkQ(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aw===s||B.I===s||B.U===s||B.V===s||B.J===s){r="TEXT"
break A}if(B.R===s||B.B===s||B.T===s){r="INTEGER"
break A}if(B.S===s){r="REAL"
break A}throw A.b(A.fR(u.P))}return r},
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
A.r3.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fs(B.cv,A.F(m))
m=n.h(0,"name")
m.toString
A.F(m)
r=J.w(n.h(0,"required"),!0)
q=J.w(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aV(m,B.aw,r,J.w(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aV(m,B.R,r,!1,q,o,o,!1)
case 2:return new A.aV(m,B.S,r,!1,q,o,o,!1)
case 3:return new A.aV(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aV(m,B.T,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aV(m,B.I,r,!1,!1,A.d3(J.oV(t.j.a(n),p),p),o,!1)
case 6:return new A.aV(m,B.U,!1,!1,q,o,o,!1)
case 7:return new A.aV(m,B.V,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aV(m,B.J,!1,!1,!1,o,A.F(p),J.w(n.h(0,"enforceFk"),!0))}},
$S:96}
A.iw.prototype={
a4(){return"IndexScope."+this.b}}
A.dC.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.rN.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.oV(t.j.a(q),t.N)
s=J.w(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dC(q,s,A.fs(B.cq,A.F(r)))},
$S:97}
A.fw.prototype={
p(){var s,r=t.N,q=t.X,p=A.u(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gV(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fw&&r.b===b.b&&B.af.X(r.a,b.a)&&r.c.R(0,b.c)
else s=!0
return s},
gJ(a){return A.c5(A.un(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rf.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.oV(t.j.a(p),s)
r=J.w(r.h(0,"fuzzy"),!0)
return new A.fw(p,r,t.f.b(q)?A.Hn(q.c4(0,s,t.X)):B.c5)},
$S:98}
A.ep.prototype={
el(a){var s,r,q,p
for(s=this.a.gaa(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.F(r,p))continue
q=q.b
r=A.y(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.ep&&A.Hm(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gK(),n=A.O(o,A.n(o).i("o.E"))
B.b.aF(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.q)(n),++r){q=n[r]
o.push(A.c5(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.un(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.re.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.u(s,s)
for(o=t.d2.a(o).gaa(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.F(p)
q=q.b
q.toString
A.F(q)
A.D9(p,q)
r.j(0,p,q)}return new A.ep(A.H4(r,s,s))},
$S:99}
A.c8.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.w3.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.an(o)
s=J.w(p.h(0,"destructive"),!0)
r=A.k([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.D(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.D4(q.a(p.gn())))
return new A.c8(o,s,r)},
$S:100}
A.ue.prototype={
a4(){return"MissingRemotePolicy."+this.b}}
A.pZ.prototype={}
A.c1.prototype={
gd9(){var s,r,q,p,o=this,n=$.FX()
A.Bf(o)
s=n.a.get(o)
if(s==null){s=A.aO(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
f9(a){var s,r,q,p,o,n=this,m=$.FY()
A.Bf(n)
s=m.a.get(n)
if(s==null){s=A.u(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.S(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.u(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.k([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o)r.push(q[o].p())
j.j(0,"fields",r)
r=A.k([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.k([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.q)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.pw.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.F(j)
s=k.h(0,"version")
s.toString
A.an(s)
r=A.k([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.D(p.a(q))
o=t.G
while(q.k())r.push(A.D4(o.a(q.gn())))
q=A.k([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.D(p.a(n))
while(n.k())q.push(A.Hw(o.a(n.gn())))
p=J.w(k.h(0,"keepUnsyncedArchives"),!0)
n=J.w(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.Ho(o.a(m))}else m=null
l=A.k([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.D(k==null?B.aj:k)
while(k.k())l.push(A.Iv(o.a(k.gn())))
return new A.c1(j,s,r,q,n,p,m,l,this.b.i("c1<0>"))},
$S(){return this.b.i("c1<0>()")}}
A.mC.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.vK.prototype={
$1(a){return!1},
$S:67}
A.vL.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:13}
A.vM.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.eB)},
$S:66}
A.vN.prototype={
$1(a){return J.a0(a)},
$S:102}
A.ui.prototype={}
A.dM.prototype={
a4(){return"MutationAction."+this.b}}
A.co.prototype={}
A.fi.prototype={
gbm(){var s=this.c
return s==null?this.a.r:s},
gaP(){return this.b.a.a},
eF(){var s=this.d
if(s!=null&&s.e){s=this.gaP()
throw A.b(new A.fS('Cannot mutate "'+s+'" through a read-only Tx.'))}},
io(a){var s=this
if(s.d!=null)return s.hu(B.Z,a)
return s.a.aX(new A.pK(s,a),B.p,t.H)},
nj(a){var s=this
if(s.d!=null)return s.hu(B.a_,a)
return s.a.aX(new A.pN(s,a),B.p,t.H)},
n5(a){var s=this
if(s.d!=null)return s.lR(a)
return s.a.aX(new A.pJ(s,a),B.p,t.H)},
nk(a){var s=this
if(s.d!=null)return s.bv(a,B.a_)
return s.a.aX(new A.pM(s,a),B.p,t.H)},
n2(a,b){var s=this
if(s.d!=null)return s.rt(a,b)
return s.a.aX(new A.pH(s,a,b),B.p,t.H)},
n3(a){var s=this
if(s.d!=null)return s.eL(a)
return s.a.aX(new A.pG(s,a),B.p,t.H)},
eL(a){return this.rv(a)},
rv(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
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
for(o=new A.bE(a,a.r,a.e,o.i("bE<1>"));o.k();)l.u(0,o.d)
n.Y(new A.a1(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
mo(a){var s=this
if(s.d!=null)return s.ht(B.C,a)
return s.a.aX(new A.pF(s,a),B.p,t.H)},
nd(a){var s=this
if(s.d!=null)return s.ht(B.E,a)
return s.a.aX(new A.pL(s,a),B.p,t.H)},
ko(a){var s=this
if(s.d!=null)return s.d2(a)
return s.a.aX(new A.pI(s,a),B.p,t.H)},
d2(a){return this.rL(a)},
rL(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eF()
s=2
return A.a(q.dY(a),$async$d2)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cz(n,m,a,!0),$async$d2)
case 3:s=4
return A.a(n.W(m,"id = ?",[a]),$async$d2)
case 4:l=t.N
o.Y(new A.a1(m,A.ap([a],l)))
if(p!=null){l=A.d2(p.gK(),l)
l.H(0,"id")
o.bd(new A.aR(m,a,B.H,B.aV,p,null,l))}return A.e(null,r)}})
return A.f($async$d2,r)},
cr(a,b,c){return this.ru(a,b,c)},
rt(a,b){return this.cr(a,b,!1)},
ru(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eF()
s=3
return A.a(p.gbm().ah("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cr)
case 3:o=e
n=J.L(o)
if(n.gV(o)){m=n.gG(o)
l=A.jo(m)
k=m.h(0,"o_kind")!=null?A.mc(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
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
d0(a,b,c,d,e){return this.pT(a,b,c,d,e)},
pT(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dY(a),$async$d0)
case 2:m=g
if(m==null)throw A.b(A.BE("No record "+q.gaP()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cH(m,p,o)
n.C(0,b)
o=A.u(p,o)
o.j(0,"id",a)
o.C(0,n)
s=3
return A.a(q.aM(B.K,c,m,a,d,e,o),$async$d0)
case 3:return A.e(null,r)}})
return A.f($async$d0,r)},
eM(a,b,c,d,e){return this.rw(a,b,c,d,e)},
rw(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
J.c_(m,"id",a7)
e=new A.a2("")
f=n.b
d=f.a
c=A.Ad(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cH(m,h,g)
b.H(0,"id")
n.hv(a7,b,a,c)
a0=n.lp(a5,m,B.K)
l=null
b=a0.length===1&&d.gd9().F(0,B.b.gap(a0))
a1=n.a
a2=a1.ax
a3=a1.ay
if(b){a4=d.f9(B.b.gap(a0))
b=a4.a
l=A.m([b,A.Fs(d,a4,J.S(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dp(d,J.w(J.S(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbm().L(d.a,l,"id = ?",[a7]),$async$eM)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.E(a6)
h=A.FS(k,m)
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
if(g!=null)g.Y(new A.a1(d.a,A.ap([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bd(new A.aR(d.a,a7,B.H,B.A,a5,m,A.tI(a0,A.a_(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eM,r)},
aM(a,b,c,d,e,f,g){return this.r6(a,b,c,d,e,f,g)},
hu(a,b){var s=null
return this.aM(a,!1,s,s,s,s,b)},
ht(a,b){var s=null
return this.aM(a,!1,s,b,s,s,s)},
tA(a,b,c){var s=null
return this.aM(a,b,s,s,s,s,c)},
tB(a,b,c,d,e,f){return this.aM(a,b,c,null,d,e,f)},
r6(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aM=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eF()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.pA(b5,n,c2,c1)
s=b7===B.Z?3:5
break
case 3:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.hV()
g=$.oT()
if(!g.b.test(h))throw A.b(A.aw('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aM)
case 6:l=n.eI(c3,m)
b7=b5.a==null?B.b6:B.K
s=4
break
case 5:s=b7===B.K?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aM)
case 10:if(b5.a==null)throw A.b(A.BE("No record "+n.gaP()+"/"+A.r(m)+" to update."))
c3.toString
l=n.eI(c3,m)
s=8
break
case 9:s=b7===B.a_?11:13
break
case 11:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.hV()
g=$.oT()
if(!g.b.test(h))throw A.b(A.aw('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aM)
case 14:g=b5.a
if(g==null){l=n.eI(c3,m)
b7=B.b6}else{l=A.cH(g,t.N,t.X)
for(g=new A.aN(c3,A.n(c3).i("aN<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.c_(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aM)
case 15:g=b5.a
if(g==null)throw A.b(A.BE("No record "+n.gaP()+"/"+A.r(m)+" to archive/restore."))
g=A.cH(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a2("")
g=n.b
e=g.a
c=l
b=A.Ad(d,e,c,J.ak(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hv(m,l,a,b)
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
return A.a(c.bS(n.gbm(),e.a,m),$async$aM)
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
return A.a(c.ep(n.gbm(),e.a,m),$async$aM)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a4)throw A.b(A.CY("Record "+n.gaP()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ai(A.bd(e,a3))
a2=A.aq(B.l.v(B.e.v(a6)).a)
a7=new A.pc(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ax
a8=a3.ay
a9=A.dp(e,J.w(J.S(l,"archived"),!0),a4,a8,c,a2)
b0=n.lp(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gd9().F(0,B.b.gap(b0))){b1=e.f9(B.b.gap(b0))
c=b1.a
k=A.m([c,A.Fs(e,b1,J.S(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
s=b5.a==null?34:36
break
case 34:s=37
return A.a(n.gbm().aC(0,c,k),$async$aM)
case 37:s=35
break
case 36:s=38
return A.a(n.gbm().L(c,k,"id = ?",[m]),$async$aM)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.E(b6)
g=A.FS(j,l)
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
return A.a(c.bp(b7,a7,b0,a2,a3,l,a4,a1,a,a9,a0,g),$async$aM)
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
b4=A.d2(new A.aj(new A.T(g,c),new A.pz(),a2),a2.i("o.E"))}else b4=A.tI(b0,A.a_(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bd(new A.aR(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.Y(new A.a1(e.a,A.ap([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aM,r)},
bv(a,b){return this.rT(a,b)},
lR(a){return this.bv(a,B.Z)},
rT(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bv=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eF()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.k([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.q)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a6(a0)
a2=a1?A.hV():a0
a1=$.oT()
if(!a1.b.test(a2))throw A.b(A.aw('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aL(l,new A.a4(a2,a))}if(!c){a3=A.u(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ao(a3,a3.$ti.i("ao<2>")).bM(0,new A.pE())}else a5=!1
s=c3===B.Z&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dW(m,l),$async$bv)
case 9:k=A.aO(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aL(k,i)}g.Y(new A.a1(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.E(c0) instanceof A.hk))throw c0
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
a4=A.k([],a1)
for(b1=J.GL(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.q)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.cg(e,"id IN ("+B.b.B(A.ae(a4.length,"?",!1,k),", ")+")",a4),$async$bv)
case 13:a4=c1.D(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.F(b2),A.cf(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.u(k,t.nw)
b4=A.u(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.O(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bN(a9,0,j))
b7=B.b.B(A.ae(b6.length,"?",!1,k),", ")
j=A.k([e],a1)
B.b.C(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.cg("lp_sync_row",f,j),$async$bv)
case 19:d=c1.D(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.F(b1),A.jo(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.cg("lp_outbox",f,j),$async$bv)
case 22:j=c1.D(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.F(d),A.mc(f))
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
return A.a(n.tA(c3,!0,a1),$async$bv)
case 31:s=29
break
case 30:a1=A.dH(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.tB(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bv)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.q)(j),++b
s=25
break
case 27:g.Y(new A.a1(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bv,r)},
dW(a,b){return this.rU(a,b)},
rU(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dW=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a3=n.a
a4=a3.r
s=a4 instanceof A.ij?3:4
break
case 3:s=5
return A.a(n.dX(a6,a7),$async$dW)
case 5:s=1
break
case 4:m=a3.ch.$0()
a3=n.d
a=a3==null?null:a3.a.a$.b.d!=null
l=a===!0
k=A.k([],t.jO)
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
return A.a(n.eB(a6,a4,h,g,m),$async$dW)
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
s=A.E(a5) instanceof A.c7?14:16
break
case 14:d=A.k([],t.s)
for(c=0;c<j;++c)J.aL(d,a7[c].a)
b=d
s=17
return A.a(n.cZ(a6,b),$async$dW)
case 17:throw A.b(new A.hk())
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
a3.bd(new A.aR(a,a2.a,B.H,B.ab,null,e,J.CI(e.gK(),new A.pD()).fD(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dW,r)},
dX(a,b){return this.rV(a,b)},
rV(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dX=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.ch.$0()
d1=c9.r
d2=t.s
d3=A.k(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.q)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.i_(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.i_(B.X)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i_(B.W)+") VALUES "
j=new A.pC()
b1=new A.a2("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.k([],t.jO):null
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
c4=A.Ad(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hv(c1,c3,c5,c4)
A.L1(f,c8,J.w(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.CW
b7===$&&A.A()
c6=b7.fJ()
A.Fh(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.Fi(d,B.a5,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a4(c1,c3))}c=!1
b=!1
q=6
b7=d1.cj(A.r(m)+A.r(j.$2(J.ak(n),g)))
if(b7.r||b7.b.r)A.v(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bQ(f))
b7.h_()
c=!0
b7=d1.cj(A.r(l)+A.r(j.$2(11,g)))
if(b7.r||b7.b.r)A.v(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bQ(e))
b7.h_()
b=!0
b7=d1.cj(A.r(k)+A.r(j.$2(16,g)))
if(b7.r||b7.b.r)A.v(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bQ(d))
b7.h_()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.E(d4) instanceof A.c7?9:11
break
case 9:a=A.k([],d2)
for(a0=0;a0<i;++a0)J.aL(a,d6[a0].a)
a1=a
s=12
return A.a(o.cZ(d5,a1),$async$dX)
case 12:s=c||b?13:14
break
case 13:a2=A.k([],d2)
for(a3=i;a3<h;++a3)J.aL(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.ae(J.ak(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.W(d3,"id IN ("+A.r(a5)+")",a4),$async$dX)
case 17:case 16:s=b?18:19
break
case 18:a6=A.k([d3],d2)
J.B3(a6,a4)
a7=a6
s=20
return A.a(d5.W("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dX)
case 20:case 19:case 14:throw A.b(new A.hk())
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
a8.bd(new A.aR(d3,a2.a,B.H,B.ab,null,c3,J.CI(c3.gK(),new A.pB()).fD(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dX,r)},
eB(a,b,c,d,e){return this.oV(a,b,c,d,e)},
oV(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eB=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eI(b1,b0)
a3=new A.a2("")
a4=A.Ad(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hv(b0,a2,a6,a4)
a5=n.a
m=A.dp(a1,J.w(a2.h(0,"archived"),!0),a5.ax,a5.ay,b0,a2)
a5=a5.CW
a5===$&&A.A()
e=a5.fJ()
a5=a1.a
l=A.Fk("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.Lm('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dJ(new A.T(d,c),new A.px(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.ae(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=a9.cj(f)
d=m
a=A.n(d).i("ao<2>")
d=A.O(new A.ao(d,a),a.i("o.E"))
c.e9(new A.bQ(d))
j=!0
a9.cj("INSERT INTO lp_outbox ("+A.i_(B.X)+") VALUES ("+B.b.B(A.ae(11,"?",!1,b),", ")+")").e9(new A.bQ(A.FM(l,B.X)))
i=!0
a9.cj("INSERT INTO lp_sync_row ("+A.i_(B.W)+") VALUES ("+B.b.B(A.ae(16,"?",!1,b),", ")+")").e9(new A.bQ(A.FM(k,B.W)))
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
cZ(a,b){return this.pE(a,b)},
pE(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$cZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.ae(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.W(m,"id IN ("+o+")",b),$async$cZ)
case 3:m=A.k([m],t.s)
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
p.j(0,q,r.b)}p.kp("archived",new A.py())
return p},
lp(a,b,c){var s,r,q,p,o
if(a==null)return B.cC
s=t.N
r=A.aO(s)
s=A.d2(a.gK(),s)
s.C(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hx(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.t.X(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.O(r,r.$ti.c)
B.b.aF(o)
return o},
dY(a){return this.rZ(a)},
rZ(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbm().ah('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dY)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=p.a
q=A.cf(n,l.gG(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
hl(a){return this.rF(a)},
rF(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbm().ah('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hl)
case 3:j=c
k=J.L(j)
if(k.gE(j)){q=B.d9
s=1
break}o=k.gG(j)
k=p.a
n=A.cf(l,o,k.ax,k.ay)
m=o.h(0,"s_sync_state")!=null?A.jo(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eX(n,m,o.h(0,"o_kind")!=null?A.mc(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
bV(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
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
return A.a(p.gbm().ah("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bV)
case 6:s=4
break
case 5:s=7
return A.a(p.gbm().ah('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bV)
case 7:case 4:k=c
l=J.L(k)
if(l.gE(k)){if(g)o.e.kN(a,null)
q=null
s=1
break}j=l.gG(k)
l=p.a
i=A.cf(n,j,l.ax,l.ay)
h=A.bb(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.L2(n,i,h,m)
if(g)o.e.kN(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
hv(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.aw('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.Cl(p,n)
if(m!=null)throw A.b(A.aw(A.H_(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.aw("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.pK.prototype={
$1(a){return a.c5(this.a.b.a.a).io(this.b)},
$S:4}
A.pN.prototype={
$1(a){return a.c5(this.a.b.a.a).nj(this.b)},
$S:4}
A.pJ.prototype={
$1(a){return a.c5(this.a.b.a.a).n5(this.b)},
$S:4}
A.pM.prototype={
$1(a){return a.c5(this.a.b.a.a).nk(this.b)},
$S:4}
A.pH.prototype={
$1(a){return a.c5(this.a.b.a.a).n2(this.b,this.c)},
$S:4}
A.pG.prototype={
$1(a){return a.c5(this.a.b.a.a).n3(this.b)},
$S:4}
A.pF.prototype={
$1(a){return a.c5(this.a.b.a.a).mo(this.b)},
$S:4}
A.pL.prototype={
$1(a){return a.c5(this.a.b.a.a).nd(this.b)},
$S:4}
A.pI.prototype={
$1(a){return a.c5(this.a.b.a.a).ko(this.b)},
$S:4}
A.pA.prototype={
nq(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dY(a),$async$$1)
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
$1(a){return this.nq(a)},
$S:103}
A.pz.prototype={
$1(a){return a!=="id"},
$S:9}
A.pE.prototype={
$1(a){return a>1},
$S:104}
A.pD.prototype={
$1(a){return a!=="id"},
$S:9}
A.pC.prototype={
$2(a,b){var s=t.N
return B.b.B(A.ae(b,"("+B.b.B(A.ae(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:105}
A.pB.prototype={
$1(a){return a!=="id"},
$S:9}
A.px.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.py.prototype={
$0(){return!1},
$S:64}
A.hk.prototype={$iH:1}
A.nE.prototype={}
A.bG.prototype={
Y(a){this.c.push(a)
this.a.y.r+=a.b.a},
bd(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
c5(a){var s=this.a
return new A.fi(s,s.aw(a),this.b,this)},
a0(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.x("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cB(o,a,b)},
cB(a,b,c){return this.tU(a,b,c,c)},
tU(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
d=A.BP(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.oP(new A.wB(a3,j,a4),null,A.m([$.ku(),j],f,f),a4.i("z<0>")),$async$cB)
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
if(a>m)B.b.kt(h,m,a)
a=g.length
if(a>l)B.b.kt(g,l,a)
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
A.wB.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("z<0>()")}}
A.zb.prototype={}
A.mr.prototype={
kP(a){return a.a===this.w.b.a},
f8(){var s=this.w
return s.ea(s.w==null&&!s.x?50:null).a2(new A.vD(),t.J)},
mx(a){return A.Lr(a,new A.vC(this),this.w.r.length!==0)},
n1(a){var s=this.x
return s==null?null:s.u(0,a)},
kj(a,b){var s=this.x
return s==null?null:s.bz(a,b)},
iK(){var s=this.x=A.w4(this.gjU(),new A.vE(this),null,!1,t.J)
return new A.b5(s,A.n(s).i("b5<1>"))},
f2(){this.kV()
var s=this.x
if(s!=null)s.q()}}
A.vD.prototype={
$1(a){return a.a},
$S:107}
A.vC.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.vE.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.dZ(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.m9.prototype={
kP(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.F(0,this.x))return!1
return!0},
f8(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.r.aJ(n.a,1,"id = ?",[p.x]),$async$f8)
case 3:m=b
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}q=A.cf(n,l.gG(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f8,r)},
mx(a){return a==null?"<null>":A.aq(B.l.v(B.e.v(A.ai(a))).a)},
n1(a){var s=this.y
return s==null?null:s.u(0,a)},
kj(a,b){var s=this.y
return s==null?null:s.bz(a,b)},
iK(){var s=this.y=A.w4(this.gjU(),new A.uo(this),null,!1,t.b)
return new A.b5(s,A.n(s).i("b5<1>"))},
f2(){this.kV()
var s=this.y
if(s!=null)s.q()}}
A.uo.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.dZ(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.fh.prototype={
kj(a,b){},
az(){var s=this.a.a$.a
this.c=new A.aZ(s,A.n(s).i("aZ<1>")).aT(this.grb())},
rd(a){var s,r=this
if(!r.kP(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.D()
r.d=A.cP(r.b,r.glV())},
dZ(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$dZ=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.f8(),$async$dZ)
case 6:m=b
l=n.mx(m)
if(!J.w(l,n.r)){n.r=l;++i.z
n.n1(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.E(g)
j=A.ag(g)
n.kj(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.D()
n.d=A.cP(n.b,n.glV())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dZ,r)},
f2(){var s=this.d
if(s!=null)s.D()
s=this.c
if(s!=null)s.D()}}
A.xk.prototype={
aW(a,b){var s,r=this;++r.b
r.lL()
s=new A.t($.C,b.i("t<0>"))
r.a=r.a.a2(new A.xl(r,new A.aH(s,b.i("aH<0>")),a),t.H)
return s},
lL(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.xl.prototype={
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
m=A.E(i)
l=A.ag(i)
n.b.c6(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lL()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:37}
A.pd.prototype={}
A.fe.prototype={
l(a){return"BlobMissingError: "+this.a},
$iH:1}
A.kR.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iH:1}
A.mR.prototype={}
A.AN.prototype={
$1(a){return B.b.C(this.a,a)},
$S:142}
A.ip.prototype={}
A.r5.prototype={
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
case 3:a4=b5.D(b7),a5=n.c,a6=a5.ay
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
return A.a(a3.n_(i.b),$async$bu)
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
return A.a(a3.n_(i.b),$async$bu)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.E(b3)
j=!0
e=i.w+1
d=a5.mD(e)
a8=i.b
a9=J.a0(f)
b0=a6.$0()
s=23
return A.a(a3.wp(a8,a9,e,b0+B.c.M(d.a,1000)),$async$bu)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.dx,a4=new A.bE(a3,a3.r,a3.e,A.n(a3).i("bE<1>")),a2=a2.r
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
case 28:a5=b5.D(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.S(b,"ref_id")
a6.toString
a=A.F(a6)
a6=J.S(b,"record_id")
a6.toString
a0=A.F(a6)
a1=A.a6(J.S(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.dc(a0,a,a1,c),$async$bu)
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
case 25:q=new A.ip(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bu,r)},
cs(a,b){return this.rJ(a,b)},
rJ(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cs=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.av(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.F(a1)
l=a0.h(0,"hash")
l.toString
A.F(l)
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
return A.a(n.b.xq(a3.d,A.m([k,new A.h4(k,j,new A.r7(a4,l))],t.N,t.h3)),$async$cs)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga_(l):k
case 11:s=14
return A.a(n.a.a0(new A.r8(a,a1,a3),t.P),$async$cs)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cs,r)},
eO(a){return this.rI(a)},
rI(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.av(a.f,null))
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
return A.a(p.b.xo(a.d,A.k([o],t.s)),$async$eO)
case 5:case 4:s=6
return A.a(p.a.a0(new A.r6(l,n,a),t.P),$async$eO)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eO,r)},
dc(a,b,c,d){return this.vb(a,b,c,d)},
vb(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dc=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.y
l===$&&A.A()
k=m
s=4
return A.a(l.hT(c,a,null),$async$dc)
case 4:s=3
return A.a(k.io(f),$async$dc)
case 3:o=f
s=5
return A.a(m.bj(o),$async$dc)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a0(new A.r9(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$dc)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dc,r)},
di(a,b,c,d){return this.wt(a,b,c,d)},
wt(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$di=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cg("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$di)
case 2:k=f
j=A.tI(c,A.a_(c).c)
i=J.az(k)
h=t.x
g=A.d2(new A.bH(i.ce(k,new A.ra(),t.v),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.F(0,n)?6:7
break
case 6:s=8
return A.a(a.cb(0,"lp_file_refs",A.m(["ref_id",A.hV(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bW),$async$di)
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
A.F(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.W("lp_file_refs","ref_id = ?",[q]),$async$di)
case 11:l=A.a6(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.S(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aD(u.y,[l]),$async$di)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$di,r)}}
A.r7.prototype={
$0(){return this.a.cJ(this.b)},
$S:111}
A.r8.prototype={
$1(a){return this.nt(a)},
nt(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.Y(new A.a1(p.c,A.ap([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r6.prototype={
$1(a){return this.ns(a)},
ns(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.W("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aD(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.Y(new A.a1(p.c,A.ap([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.r9.prototype={
$1(a){return this.nu(a)},
nu(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.i1(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.Y(new A.a1(q.f,A.ap([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.ra.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:112}
A.bh.prototype={}
A.r4.prototype={
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
m=A.bb(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bb(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bh(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:113}
A.tM.prototype={
gm_(){return this.b},
gkd(){var s=0,r=A.h(t.y),q,p=this
var $async$gkd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dP()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gkd,r)},
eh(a,b,c){return this.we(a,b,c)},
we(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$eh=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.r.cg("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$eh)
case 3:o=n.be(e,A.LM(),t.A)
o=A.O(o,o.$ti.i("W.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eh,r)},
d8(a,b,c,d,e,f,g,h){return this.uh(a,b,c,d,e,f,g,h)},
uh(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$d8=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.gm_()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dP(),$async$d8)
case 5:j=!j
case 4:if(j)throw A.b(A.x("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.dk(b,c,d),$async$d8)
case 6:o=j
s=7
return A.a(m.bj(o),$async$d8)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.a0(new A.tN(p,h,g,e,o,n,A.hV(),f),t.A),$async$d8)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d8,r)},
fm(a,b,c,d,e){return this.ww(a,b,c,d,e)},
ww(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fm=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gm_()
s=3
return A.a(p.eh(a,c,e),$async$fm)
case 3:k=g
j=J.L(k)
if(j.gE(k))throw A.b(A.x("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.fa(k,new A.tP(d),new A.tQ(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.x("File is remote_only; download it before opening."))
j=p.a
n=j.ch.$0()
m=o.e
s=4
return A.a(j.r.aD("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$fm)
case 4:q=l.cJ(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
fv(a,b,c,d,e,f){return this.x3(0,b,c,d,e,f)},
x3(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fv=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eh(b,d,f),$async$fv)
case 3:n=h
m=J.L(n)
if(m.gE(n)){s=1
break}o=e!=null?m.fa(n,new A.tR(e),new A.tS(e)):m.h(n,c)
s=4
return A.a(p.a.a0(new A.tT(p,o,f,d,b),t.P),$async$fv)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
bh(a,b){return this.nZ(a,b)},
nZ(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bh=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e5(a8),$async$bh)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.ch.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a0(new A.tO(a2,n),t.P),$async$bh)
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
return A.a(d.wK("lp_blobs",A.k(["hash"],c),250,k,"hash ASC"),$async$bh)
case 18:i=b0
for(b=J.D(i);b.k();){h=b.gn()
a=J.S(h,"hash")
a.toString
J.aL(j,A.F(a))}if(J.ak(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.D(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.B5(j,g)){s=19
break}p=22
b=new A.t($.C,c)
b.aL(null)
s=25
return A.a(b,$async$bh)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.da(g),$async$bh)
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
return A.a(e.wM("lp_blobs",A.k(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bh)
case 29:a1=b0
c=J.L(a1)
if(c.gE(a1)){s=28
break}c=c.gt(a1)
case 30:if(!c.k()){s=31
break}b=c.gn().h(0,"hash")
b.toString
A.F(b)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.da(b),$async$bh)
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
cD(a){return this.vk(a)},
vk(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.r
e=A
s=3
return A.a(g.b0("SELECT SUM(size) as total FROM lp_blobs"),$async$cD)
case 3:f=e.f6(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.b0("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cD)
case 6:l=c
k=J.L(l)
if(k.gE(l)){s=5
break}k=k.gt(l)
case 7:if(!k.k()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.F(i)
j=j.h(0,"size")
j.toString
A.an(j)
s=9
return A.a(h.da(i),$async$cD)
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
A.tN.prototype={
$1(a){return this.nB(a)},
nB(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.ch.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.en("lp_file_refs",A.k(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.L(c)
if(b.gV(c)){q=A.D5(b.gG(c))
s=1
break}s=4
return A.a(A.i1(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.en("lp_outbox",A.k(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.L(o)
n=h.gV(o)&&J.S(h.gG(o),"base_updated")==null?A.a6(J.S(h.gG(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cb(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.Q),$async$$1)
case 6:k=A.hV()
s=7
return A.a(j.aC(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a6(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.Y(new A.a1(g,A.ap([f],m)))
q=new A.bh(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:114}
A.tP.prototype={
$1(a){return a.a===this.a},
$S:63}
A.tQ.prototype={
$0(){return A.v(A.x("FileRef "+this.a+" not found"))},
$S:33}
A.tR.prototype={
$1(a){return a.a===this.a},
$S:63}
A.tS.prototype={
$0(){return A.v(A.x("FileRef "+this.a+" not found"))},
$S:33}
A.tT.prototype={
$1(a){return this.nD(a)},
nD(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.aD(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.m(["op_id",A.hV(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a6(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.Y(new A.a1(q.c,A.ap([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.tO.prototype={
$1(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dx,p=new A.bE(p,p.r,p.e,A.n(p).i("bE<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ah('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.y(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.D(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.F(j)
k=k.h(0,"hash")
k.toString
A.F(k)
s=7
return A.a(i.W("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aD(u.y,[k]),$async$$1)
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
A.x1.prototype={
eN(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.i0()
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
dP(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eN(),$async$dP)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dP,r)},
bo(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bo=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dP(),$async$bo)
case 3:if(!b){q=null
s=1
break}p=5
m=A.i0()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a5(m.getDirectory(),k),$async$bo)
case 8:l=b
s=9
return A.a(A.a5(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bo)
case 9:k=b
q=new A.o1(k)
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
dk(a,b,c){return this.wI(a,b,c)},
io(a){return this.dk(a,null,null)},
wI(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dk=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.xJ(A.k([],t.bs))
s=3
return A.a(A.ko(a,b,c,null,new A.x2(o)),$async$dk)
case 3:n=e
m=o.kx()
s=4
return A.a(p.bo(),$async$dk)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.aZ(k,m),$async$dk)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
cJ(a){return this.wy(a)},
wy(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cJ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.kS(a)
j=n.b
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.BK(j,t.L)
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
j=A.BK(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.E(h)
if(!(k instanceof A.fe))throw A.b(A.CQ(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.x("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cJ,r)},
da(a){return this.uH(a)},
uH(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$da=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.kS(a)
o.b.H(0,a)
s=2
return A.a(o.bo(),$async$da)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.H(0,a),$async$da)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.E(k)
if(!(m instanceof A.fe))throw A.b(A.CQ(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$da,r)},
bq(a){return this.vq(a)},
vq(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kS(a)
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
bj(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kS(a)
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
e5(a){return this.uo(a)},
uo(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bo(),$async$e5)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.eg(),$async$e5)
case 8:k=f.D(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.GK(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.H(0,l),$async$e5)
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
return A.f($async$e5,r)},
ff(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ff=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.d2(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bo(),$async$ff)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.eg(),$async$ff)
case 10:j=f.D(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Cv()
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
j=A.O(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ff,r)}}
A.x2.prototype={
$1(a){return this.a.u(0,a)},
$S:24}
A.o1.prototype={
eo(a){return this.wS(a)},
wS(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
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
i=A.bU(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.E(g)
if(A.DU(j))throw A.b(A.CP(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eo,r)},
aZ(a,b){return this.xJ(a,b)},
xJ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.m
n=A
s=3
return A.a(A.a5(q.a.getFileHandle(a,{create:!0}),p),$async$aZ)
case 3:s=2
return A.a(n.a5(d.createWritable(),p),$async$aZ)
case 2:o=d
p=t.X
s=4
return A.a(A.a5(o.write(t.a.a(B.f.ga9(b))),p),$async$aZ)
case 4:s=5
return A.a(A.a5(o.close(),p),$async$aZ)
case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
H(a,b){return this.x4(0,b)},
x4(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.Bh(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.E(l)
if(A.DU(n))throw A.b(A.CP(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
bq(a){return this.vr(a)},
vr(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
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
bj(a){return this.od(a)},
od(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
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
s=p}for(;;)switch(s){case 0:k=A.k([],t.s)
j=new A.cd(A.bZ(A.D6(m.a),"stream",t.K),t.hT)
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
$iDt:1}
A.mY.prototype={
gna(){return 1}}
A.pa.prototype={
dr(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dr=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eH(),$async$dr)
case 5:o=b
s=o.gna()<0.25?6:7
break
case 6:s=8
return A.a(p.iT(o),$async$dr)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gna()<0.25?9:10
break
case 9:s=11
return A.a(p.iT(m),$async$dr)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
ir(){var s=0,r=A.h(t.q),q,p=this
var $async$ir=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eH(),$async$ir)
case 3:q=p.iT(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
eH(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eH=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.jR():j
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
iT(a){var s=this.c
if(s!=null)return s
return this.c=this.fX(a)},
fX(a){return this.pK(a)},
pK(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fX=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.x("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.kq(l),$async$fX)
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
A.md.prototype={
oC(a,b,c,d,e,f,g,h){var s=this,r=new A.pa(s.b)
s.x!==$&&A.cy()
s.x=r
s.y!==$&&A.cy()
s.y=new A.uF(s.w,s.a,r)},
ik(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$ik=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.as){s=1
break}n.as=!0
if(n.at){s=1
break}p=4
m=n.y
m===$&&A.A()
s=7
return A.a(m.im(),$async$ik)
case 7:n.Q=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.E(k)
if(m instanceof A.cE){n.Q=!1
n.at=!0}else if(m instanceof A.bv)n.as=n.Q=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ik,r)},
fQ(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.z!=null){s=1
break}o=p.y
o===$&&A.A()
n=A.I_(B.bX,o,A.k([p.r],t.s),p.grn(),p.grk())
p.z=n
s=3
return A.a(n.az(),$async$fQ)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
eA(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.z
o=o==null?null:o.aG()
s=2
return A.a(o instanceof A.t?o:A.bp(o,t.H),$async$eA)
case 2:q.z=null
for(o=q.ay,p=new A.b1(o,o.r,o.e,A.n(o).i("b1<2>"));p.k();)p.d.D()
o.af(0)
q.ch.af(0)
return A.e(null,r)}})
return A.f($async$eA,r)},
rl(){var s,r,q,p
for(s=this.CW,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
this.eE(p,new A.cB(p,B.a9,null))}},
ro(a){var s=a.b,r=s.b
if(!B.b.F(this.CW,r))return
if(a.a==="delete"){this.hx(s)
return}this.eE(r,new A.cB(r,B.a9,s))},
hx(a){return this.tO(a)},
tO(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hx=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.F(n.CW,j)){s=1
break}m=null
p=4
l=n.y
l===$&&A.A()
s=7
return A.a(l.bW(a.a),$async$hx)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.E(i)
if(l instanceof A.cI){n.eE(j,new A.cB(j,B.aO,null))
s=1
break}else if(l instanceof A.bv){s=1
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
return A.f($async$hx,r)},
eE(a,b){var s,r,q=this
q.ch.j(0,a,b)
s=q.ay
r=s.h(0,a)
if(r!=null)r.D()
s.j(0,a,A.cP(q.c,new A.uB(q,a)))},
xo(a,b){return this.iw(null,a,null,b,null)},
iw(a,b,c,d,e){return this.xs(a,b,c,d,e)},
xq(a,b){return this.iw(null,a,null,null,b)},
xs(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iw=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aU(0,new A.uC(),t.N,t.co)
n=p.y
n===$&&A.A()
q=n.iv(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)}}
A.uB.prototype={
$0(){var s,r=this.a,q=this.b
r.ay.H(0,q)
s=r.ch.H(0,q)
if(s!=null&&(r.ax.c&4)===0)r.ax.u(0,s)},
$S:0}
A.uC.prototype={
$2(a,b){return new A.R(a,new A.dA("imgs+",b.a,b.b,b.c),t.ia)},
$S:117}
A.uV.prototype={}
A.uF.prototype={
fh(a,b,c,d,e,f){return this.wg(a,b,c,d,e,f)},
wg(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fh=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Mo(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.y(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.y(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.y(c,"'","\\'")+"'")}n=t.N
n=A.u(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.iu(B.c.bN(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.B(b,","))
k=p.b.bt("/api/collections/data/records").ku(n)
s=3
return A.a(p.m3("GET",k),$async$fh)
case 3:j=a0
p.d_(j,A.k([200],t.t),k)
i=p.cY(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bu("List response has no items array."))
h=J.be(i,new A.uM(p),t.Q)
h=A.O(h,h.$ti.i("W.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
bW(a){return this.o1(a)},
o1(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records/"+A.hK(2,a,B.k,!1))
s=3
return A.a(p.m3("GET",o),$async$bW)
case 3:n=c
if(n.a===404)throw A.b(A.HY("not found"))
p.d_(n,A.k([200],t.t),o)
q=p.dR(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
hP(a,b,c){return this.uz(a,b,c)},
uz(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records")
s=3
return A.a(p.eV("POST",o,B.h.a6(A.m(["id",b,"store",c,"data",B.h.av(a,null)],t.N,t.z),null)),$async$hP)
case 3:n=e
if(n.a===400&&p.qX(n))throw A.b(new A.fq(p.eG(n)))
p.d_(n,A.k([200,201],t.t),o)
q=p.dR(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
qX(a){var s,r,q,p,o,n
try{s=this.cY(a)
r=J.S(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.w(p,"validation_not_unique")||J.w(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fE(a,b,c){return this.xn(a,b,c)},
xn(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bt("/api/collections/data/records/"+A.hK(2,c,B.k,!1))
s=3
return A.a(p.eV("PATCH",o,B.h.a6(A.m(["data",B.h.av(b,null)],t.N,t.z),null)),$async$fE)
case 3:n=e
p.d_(n,A.k([200],t.t),o)
q=p.dR(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
iv(a,b,c,d,e){return this.xp(a,b,c,d,e)},
xp(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iv=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bt("/api/collections/data/records/"+A.hK(2,b,B.k,!1))
m=t.N
l=A.u(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a6(d,null))
if(e==null)m=null
else{m=A.n(e).i("ao<2>")
m=A.O(new A.ao(e,m),m.i("o.E"))}s=3
return A.a(p.tp(new A.lz("PATCH",n,B.ay,l,m==null?B.cz:m)),$async$iv)
case 3:o=g
p.d_(o,A.k([200],t.t),n)
q=p.dR(p.cY(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
hT(a,b,c){return this.vc(a,b,c)},
vc(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hT=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.u(l,l)
o=p.b.bt("/api/files/data/"+A.hK(2,b,B.k,!1)+"/"+A.hK(2,a,B.k,!1))
n=l.a===0?o:o.ku(l)
s=3
return A.a(p.rq(new A.eq("GET",n,B.ay,null)),$async$hT)
case 3:m=e
p.d_(new A.cF(m.a,m.b,""),A.k([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
fq(a){return this.wH(a)},
wH(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$fq=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bt("/api/batch")
a3=A.k([],t.ic)
for(o=J.az(a4),n=o.gt(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.h.av(j.d,null)],m,l)],m,k))}s=3
return A.a(p.eV("POST",a2,B.h.a6(A.m(["requests",a3],m,t.ew),null)),$async$fq)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.Hl(p.eG(i)))
if(a3===400)throw A.b(new A.ec(p.eG(i)))
p.d_(i,A.k([200],t.t),a2)
h=B.h.av(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bu("Batch response has no results array."))}else throw A.b(A.bu("Batch response is not a list or envelope."))
g=e}a3=J.L(g)
if(a3.gm(g)!==o.gm(a4))throw A.b(A.bu("Batch response has "+a3.gm(g)+" results for "+o.gm(a4)+" requests."))
d=A.k([],t.g2)
for(n=t.f,c=0;c<o.gm(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bu("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dq(a)
a0=l.R(a,200)||l.R(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dR(a1):null
k=a0?null:p.pP(b)
j=a0&&n.b(a1)?B.h.a6(a1.h(0,"data"),null):null
d.push(new A.j7(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
im(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$im=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eV("POST",p.b.bt("/api/batch"),B.h.a6(A.m(["requests",[]],t.N,t.kS),null)),$async$im)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.GP(p.eG(o)))
if(n===408||n===429||n>=500)throw A.b(A.DN("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$im,r)},
eV(a,b,c){return this.c3(new A.uI(this,a,b,c),new A.uJ(),t.w)},
m3(a,b){return this.eV(a,b,null)},
tp(a){return this.c3(new A.uK(this,a),new A.uL(),t.w)},
rq(a){return this.c3(new A.uG(this,a),new A.uH(),t.lI)},
c3(a,b,c){return this.tT(a,b,c,c)},
tT(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c3=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dr(),$async$c3)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c3)
case 8:l=f
s=J.w(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.ir(),$async$c3)
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
i=A.E(g)
if(i instanceof A.dB){j=i
throw A.b(A.DN(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c3,r)},
jz(a,b,c,d){return this.tm(a,b,c,d)},
tm(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.u(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b5(new A.eq(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jz,r)},
d_(a,b,c){if(B.b.F(b,a.a))return
throw A.b(this.r0(a,c))},
r0(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eG(a)
if(401===s)return new A.c0(q)
if(403===s)return new A.cE(q)
if(404===s)return new A.cI(q)
if(408===s||429===s)return new A.eF(r,q)
if(400===s)return new A.fK(q)
if(s>=500)return new A.je(q)
return new A.fM("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eG(a){var s,r,q,p,o
try{s=this.cY(a)
r=J.S(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.S(s,"data")
if(t.f.b(q)){p=q
p=p.gV(p)}else p=!1
if(p){p=B.h.a6(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
cY(a){var s,r,q,p=null
try{p=B.h.av(a.c,null)}catch(r){q=A.E(r)
if(t.Y.b(q)){s=q
throw A.b(A.bu("Response is not valid JSON: "+s.gkh()))}else throw r}if(t.f.b(p))return A.b8(p,t.N,t.X)
throw A.b(A.bu("Expected a JSON object, got "+J.bO(p).l(0)+"."))},
dR(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bu("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bu("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.b8(o,n,m):A.u(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.CJ(k,n)
j=A.O(j,j.$ti.i("o.E"))}else j=B.q
return new A.cK(s,p,q,l,j)},
pP(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.uM.prototype={
$1(a){return this.a.dR(a)},
$S:118}
A.uI.prototype={
$1(a){var s=this
return s.a.jz(s.b,s.c,s.d,a)},
$S:62}
A.uJ.prototype={
$1(a){return a.a},
$S:43}
A.uK.prototype={
$1(a){var s=this.b,r=t.N
r=A.cH(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dw(new A.lz(s.a,s.b,r,s.d,s.e))},
$S:62}
A.uL.prototype={
$1(a){return a.a},
$S:43}
A.uG.prototype={
$1(a){var s=this.b,r=t.N
r=A.cH(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.em(new A.eq(s.a,s.b,r,s.d))},
$S:121}
A.uH.prototype={
$1(a){return a.a},
$S:122}
A.j3.prototype={}
A.hE.prototype={}
A.uN.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eU()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aG(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.D()
s=2
return A.a(n instanceof A.t?n:A.bp(n,t.H),$async$aG)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aG,r)},
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
return A.a(A.Hr(n.$1(k),m),$async$eU)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eU,r)},
cV(){return this.pr()},
pr(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.dr(),$async$cV)
case 3:m=b
l=t.N
s=4
return A.a(n.a.em(new A.eq("GET",n.b.bt("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cV)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.iu("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aT(new A.uQ()).D(),$async$cV)
case 7:s=1
break
case 6:++p.as
p.z=new A.aH(new A.t($.C,t.D),t.h)
n=$.oS()
l=A.k([],t.s)
o.a=o.b=!1
p.y=k.c.bP(new A.uR(o,p,new A.zi(new A.y8(n),l),m),new A.uS(p),new A.uT(p))
s=8
return A.a(p.z.a,$async$cV)
case 8:p.y=null
if(o.a)throw A.b(A.iu("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cV,r)},
h9(a,b){return this.qs(a,b)},
qs(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$h9=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b5(new A.eq("POST",l.b.bt("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a6(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$h9)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.iu("realtime subscribe status "+l,null))
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
l=l.b(j)?A.b8(j,t.N,t.X):B.n
if(t.j.b(f)){c=J.CJ(f,t.N)
c=A.O(c,c.$ti.i("o.E"))}else c=B.q
m=new A.cK(k,e,d,l,c)
p.w.$1(new A.j3(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$h9,r)}}
A.uU.prototype={
$1(a){return A.Fv(a,this.a,this.b,A.Mi())},
$S:123}
A.uQ.prototype={
$1(a){},
$S:24}
A.uR.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.vu(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.q)(k),++n){m=k[n]
r.Q=r.Q.a2(new A.uO(q,r,m,p),o).mv(new A.uP())}},
$S:24}
A.uO.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=n.a
if(k.a){s=1
break}p=4
s=7
return A.a(n.b.h9(n.c,n.d),$async$$1)
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
return A.a(l instanceof A.t?l:A.bp(l,t.H),$async$$1)
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
$S:124}
A.uP.prototype={
$1(a){},
$S:26}
A.uS.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.uT.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:26}
A.zi.prototype={
vu(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.kx()
r=A.k([],t.gy)
for(q=s.length,p=0;;){o=this.qU(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dn(p,o,q)))
p=o+1
m=this.pG(B.a.xi(new A.dl(!0).cW(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.b6(s,p))
return r},
qU(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
pY(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.af(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.af(k)
try{q=B.h.av(r,l)
if(t.f.b(q)){p=A.b8(q,t.N,t.X)
o=J.S(p,"clientId")
if(J.w(s,"PB_CONNECT")&&typeof o=="string")return new A.hE(o,l)
return new A.hE(l,p)}}catch(n){}return l},
pG(a){var s,r=this,q=null
if(a.length===0)return r.pY()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.af(r.c)
return new A.hE(B.a.ci(B.a.ad(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.ci(B.a.ad(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.ci(B.a.ad(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eq.prototype={}
A.dA.prototype={
oj(){return this.d.$0()},
gm(a){return this.c}}
A.lz.prototype={}
A.cF.prototype={}
A.dB.prototype={
l(a){return"HttpTransportException: "+this.a},
$iH:1}
A.dR.prototype={}
A.uD.prototype={
b5(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.em(a),$async$b5)
case 7:m=c
j=m.c
s=8
return A.a(B.aL.kW(j).ef(0).it(B.ad),$async$b5)
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
j=A.E(g)
if(j instanceof A.dB)throw g
else{k=j
j=A.iu("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b5,r)},
dw(a){return this.o9(a)},
o9(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dw=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.HU(a6.a,a6.b)
h.r.C(0,a6.c)
h.x.C(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.oj(),$async$dw)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.FR(a0)
a3=new A.fA("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cR(A.u(d,d),e))
b.push(new A.m_(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.q)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b5(m).it(B.ad),$async$dw)
case 11:k=a8
g=k.w
s=12
return A.a(B.aL.kW(g).ef(0).it(B.ad),$async$dw)
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
g=A.E(a5)
if(g instanceof A.dB)throw a5
else{i=g
g=A.iu("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dw,r)},
em(a){return this.wA(a)},
wA(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$em=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.If(a,a0)
a1.r.C(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjX().jW(j)
i.pc()
i.y=A.Ms(j)
h=i.gcp()
if(h==null){j=t.N
i.scp(A.Bu("text","plain",A.m(["charset",i.gjX().gaP()],j,j)))}else{j=i.gcp()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c7(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gjX().gaP()],j,j)
e=h.a
d=h.b
c=A.b8(h.c,j,j)
c.C(0,f)
i.scp(A.Bu(e,d,c))}}}p=4
s=7
return A.a(n.a.b5(a1).it(B.ad),$async$em)
case 7:m=a5
j=t.N
l=A.u(j,j)
m.e.a1(0,new A.uE(l))
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
a=A.iu("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$em,r)}}
A.uE.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:31}
A.p_.prototype={
aW(a,b){var s=this.a.a2(new A.p0(a,b),b)
this.a=s.bU(new A.p1(b),new A.p2(),t.H)
return s}}
A.p0.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("z<0>(~)")}}
A.p1.prototype={
$1(a){},
$S(){return this.a.i("V(0)")}}
A.p2.prototype={
$2(a,b){},
$S:12}
A.bf.prototype={
gnb(){var s=this.e
return s.gm(s)===1&&J.w(s.h(0,"__lp_deleted__"),!0)}}
A.q_.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.F(d)
s=e.h(0,"record_id")
s.toString
A.F(s)
r=A.Am(e.h(0,l),l,k)
q=A.Am(e.h(0,j),j,k)
p=A.Am(e.h(0,i),i,k)
o=A.Fq(e.h(0,h),h,k)
n=A.Fq(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.an(m)
return new A.bf(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Am(e.h(0,f),f,k):null)},
$S:125}
A.q0.prototype={
fg(a){return this.wf(a)},
wf(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$fg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.r.wJ("lp_conflicts","detected_at ASC",n,o),$async$fg)
case 3:o=m.be(c,A.Ls(),t.n8)
o=A.O(o,o.$ti.i("W.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
dv(a,b){return this.o0(a,b)},
o0(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dv)
case 3:o=d
n=J.L(o)
if(n.gE(o)){q=null
s=1
break}q=A.Ba(n.gG(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
xt(a){var s={},r=A.BY()
s.a=null
r.smM(A.dQ(new A.q3(s,r),new A.q4(s,this,a,new A.q5(this,r,a)),t.ba))
return r.bb().gcR()},
eq(a,b,c){return this.x8(a,b,c)},
x8(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(c)
s=2
return A.a(p.a0(new A.q1(q,c,a,o.a,o,b),t.P),$async$eq)
case 2:return A.e(null,r)}})
return A.f($async$eq,r)},
eY(a,b){return this.u2(a,b)},
u2(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dv(a,b),$async$eY)
case 2:p=d
if(p==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eq(b,p.d,a),$async$eY)
case 3:return A.e(null,r)}})
return A.f($async$eY,r)},
e1(a,b){return this.u3(a,b)},
u3(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$e1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dv(a,b),$async$e1)
case 3:n=d
if(n==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=n.gnb()?4:5
break
case 4:o=p.a
if(A.n4(o)!=null)A.v(A.x(u.L))
s=6
return A.a(new A.fi(o,o.aw(a),null,null).ko(b),$async$e1)
case 6:s=1
break
case 5:s=7
return A.a(p.eq(b,n.e,a),$async$e1)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e1,r)}}
A.q5.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bb().gi9()){s=1
break}p=4
s=7
return A.a(n.a.fg(n.c),$async$$0)
case 7:m=b
if(!i.bb().gi9())J.aL(i.bb(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.E(h)
k=A.ag(h)
if(!i.bb().gi9())i.bb().bz(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:5}
A.q4.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.aZ(p,A.n(p).i("aZ<1>")).aT(new A.q2(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.q2.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:36}
A.q3.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.t?p:A.bp(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bb().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.q1.prototype={
$1(a){return this.nr(a)},
nr(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.L(a3)
if(a4.gE(a3))throw A.b(A.x("No conflict found for "+a1+"/"+a2))
o=A.Ba(a4.gG(a3))
n=o.gnb()
m=n?null:A.ai(o.e)
l=n?"":A.aq(B.l.v(B.e.v(A.ai(A.bd(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aJ(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bA(a8)?4:5
break
case 4:s=7
return A.a(a0.W("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.W("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.W("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.Y(new A.a1(a1,A.ap([a2],a4)))
a6.Y(new A.a1("lp_conflicts",A.ap([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
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
return A.a(a0.L(a4,A.dp(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bK(n?B.n:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aF(d)
c=A.ai(A.bd(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a6(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aJ("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bA(a8)?14:16
break
case 14:a4=p.a.a
b=a4.ch.$0()
h=f?B.L:B.v
e=B.h.a6(d,null)
a4=a4.CW
a4===$&&A.A()
s=18
return A.a(a0.aC(0,"lp_outbox",A.Fk(l,j,b,e,h,a4.fJ(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.Y(new A.a1(a1,A.ap([a2],i)))
a6.Y(new A.a1("lp_conflicts",A.ap([a2],i)))
a4=o.d
a=A.bK(a4,g)
a.H(0,"id")
a6.bd(new A.aR(a1,a2,B.ac,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:6}
A.mV.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dQ(null,null,t.n6)
n.ay=A.dQ(null,null,t.em)}n.z=!0
s=3
return A.a(n.aO(B.di),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.ik(),$async$az)
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
n.fr=new A.aZ(l,A.n(l).i("aZ<1>")).aT(n.gvU())
l=n.b.ax
n.fx=new A.aZ(l,A.n(l).i("aZ<1>")).aT(n.gvS())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aG(),$async$az)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.DK(B.av,new A.wp(n))
s=14
return A.a(n.aO(n.dH()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d5(),$async$az)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$az,r)},
aG(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
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
return A.a(p.k4,$async$aG)
case 3:s=4
return A.a(p.dx,$async$aG)
case 4:s=5
return A.a(p.dy.a,$async$aG)
case 5:s=6
return A.a(p.p2,$async$aG)
case 6:o=p.fr
o=o==null?null:o.D()
n=t.H
s=7
return A.a(o instanceof A.t?o:A.bp(o,n),$async$aG)
case 7:o=p.fx
o=o==null?null:o.D()
s=8
return A.a(o instanceof A.t?o:A.bp(o,n),$async$aG)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.a3
o.u(0,B.a3)
s=12
return A.a(p.ax.q(),$async$aG)
case 12:s=10
break
case 11:p.y=B.a3
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aG)
case 15:case 14:p.y=B.a3
case 1:return A.e(q,r)}})
return A.f($async$aG,r)},
dH(){if(this.at)return B.bj
if(this.Q)return B.bh
if(this.as)return B.aC
return B.bi},
aO(a){return this.tF(a)},
tF(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.pM(),$async$aO)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aO,r)},
pM(){return this.p2=this.p2.a2(new A.wh(this),t.H)},
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
return A.a(g.hM(),$async$fW)
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
return A.f($async$fW,r)},
vV(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.th(B.ae)},
vT(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dx.I(s))return
r=a.c
if(r!=null&&a.b===B.a9){q.p1.push("fast:"+s)
q.dx=q.dx.a2(new A.wn(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hs(B.ae,A.k([s],t.s))},
h0(a){return this.pU(a)},
pU(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hs(B.ae,A.k([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.A()
s=7
return A.a(l.hV(a),$async$h0)
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
break}if(!m)n.hs(B.ae,A.k([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h0,r)},
w2(){if(!this.z)return
this.p1.push("cycle")
this.d5()},
hs(a,b){var s=this,r=s.go
if(r!=null)r.D()
if(b==null)s.k2=!0
else s.k3.C(0,b)
s.go=A.cP(a,new A.wm(s))},
th(a){return this.hs(a,null)},
tg(a){var s=this.id
if(s!=null)s.D()
this.id=A.cP(B.D,new A.wl(this,a))},
jp(){this.as=!0
this.aO(B.aC)
A.is(this.d,t.H)},
ei(){var s=0,r=A.h(t.H),q,p=this,o
var $async$ei=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.CW
o===$&&A.A()
s=3
return A.a(o.x6(),$async$ei)
case 3:s=4
return A.a(p.aO(p.dH()),$async$ei)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d5(),$async$ei)
case 5:case 1:return A.e(q,r)}})
return A.f($async$ei,r)},
fO(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.H),q=this,p
var $async$fO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.D()
q.k1=A.cP(B.au,new A.wo(q))
s=3
break
case 4:s=5
return A.a(q.aO(B.bh),$async$fO)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fO,r)},
bs(){var s=0,r=A.h(t.H),q=this
var $async$bs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aO(B.bj),$async$bs)
case 2:return A.e(null,r)}})
return A.f($async$bs,r)},
bf(){var s=0,r=A.h(t.H),q,p=this
var $async$bf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aO(p.dH()),$async$bf)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d5(),$async$bf)
case 4:case 1:return A.e(q,r)}})
return A.f($async$bf,r)},
jx(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.D()}s=t.mv
r=q.k4.a2(new A.wi(q,a),s)
q.k4=r.bU(new A.wj(),new A.wk(),s)
return r},
d5(){return this.jx(null)},
b7(a){return this.pJ(a)},
pJ(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b7=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.N
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aO(n.dH()),$async$b7)
case 5:q=B.N
s=1
break
case 4:b3=t.N
a4=t.S
m=A.u(b3,a4)
l=A.u(b3,a4)
k=!1
j=!1
i=A.k([],t.s)
s=6
return A.a(n.aO(B.dj),$async$b7)
case 6:b3=b8==null
if(b3){a4=n.a.dx
a5=A.n(a4).i("T<1>")
a6=A.O(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.A()
s=14
return A.a(a5.dj(h),$async$b7)
case 14:g=c0
J.c_(m,h,g.b)
if(g.f&&g.b>0)J.aL(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.E(b4)
if(a5 instanceof A.c0){n.jp()
s=9
break}else if(a5 instanceof A.bv){f=a5
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
return A.a(n.aO(B.aC),$async$b7)
case 17:q=n.ok=new A.bm(m,B.al,0,0,0,0,!0)
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
return A.a(b3.dC(e),$async$b7)
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
return A.a(n.aO(B.dk),$async$b7)
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
return A.a(n.a.r.b0("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b7)
case 36:a0=c0
if(J.ea(a0)&&typeof J.S(J.ci(a0),"last_error")=="string"){b3=J.S(J.ci(a0),"last_error")
b3.toString
n.ch=A.F(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.E(b6)
if(b3 instanceof A.c0)n.jp()
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
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.N
s=1
break}if(J.ak(i)!==0)n.tg(i)
a9=k||a.f
b0=new A.aM(A.li(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dH()
s=42
return A.a(n.aO(a9&&b1===B.bi?B.dl:b1),$async$b7)
case 42:q=n.ok=new A.bm(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b7,r)}}
A.wp.prototype={
$1(a){return this.a.w2()},
$S:59}
A.wh.prototype={
$1(a){return this.a.fW()},
$S:37}
A.wn.prototype={
$1(a){return this.a.h0(this.b)},
$S:37}
A.wm.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
q.af(0)
if(r||p.length===0)s.d5()
else s.jx(p)},
$S:0}
A.wl.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jx(this.b)},
$S:0}
A.wo.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aO(p.dH()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d5(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.wi.prototype={
$1(a){return this.a.b7(this.b)},
$S:128}
A.wj.prototype={
$1(a){return B.N},
$S:129}
A.wk.prototype={
$1(a){return B.N},
$S:130}
A.d4.prototype={
l(a){return"MapFailure: "+this.a},
$iH:1}
A.ey.prototype={}
A.Ah.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.Ai.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.u1.prototype={}
A.dK.prototype={}
A.lV.prototype={}
A.z6.prototype={}
A.z4.prototype={}
A.xp.prototype={}
A.u8.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.u7(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:132}
A.u2.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.u3.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.u4.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.u5.prototype={
$1(a){return a instanceof A.t?a:A.bj(a,t.X)},
$S:133}
A.u6.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hx(s,s.r,A.n(s).c),r=this.b,q=J.L(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:134}
A.up.prototype={
f3(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.ch.$0()
e=e.r
s=3
return A.a(e.wL("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f3)
case 3:o=c
n=t.ox
m=A.k([],n)
for(l=J.D(o);l.k();)m.push(A.HZ(l.gn()))
l=A.aO(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.q)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.kp(e,l),$async$f3)
case 4:h=c
g=A.k([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.q)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.F(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f3,r)},
n_(a){return this.a.a0(new A.ur(a),t.H)},
wp(a,b,c,d){return this.a.a0(new A.us(c,d,b,a),t.H)}}
A.ur.prototype={
$1(a){return this.nF(a)},
nF(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.us.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.pc.prototype={}
A.iH.prototype={}
A.j8.prototype={}
A.uu.prototype={
fJ(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cI(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
ep(a,b,c){return this.wU(a,b,c)},
wU(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$ep=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$ep)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.mc(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ep,r)},
bS(a,b,c){return this.wW(a,b,c)},
wW(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bS)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.jo(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
bp(a,b,c,d,e,f,g,h,i,j,k,l){return this.ue(a,b,c,d,e,f,g,h,i,j,k,l)},
ue(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bp=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a4)throw A.b(A.CY("Record "+a2+"/"+a9+u.W))
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
return A.a(p.hw(a8,a2,a9),$async$bp)
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
d=A.O(f,f.$ti.c)
B.b.aF(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a6(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.i_(B.X)
e=B.b.B(A.ae(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aD("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.FE(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bp)
case 12:s=10
break
case 11:s=13
return A.a(a8.aD('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bp)
case 13:case 10:f=A.k(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.C(f,B.cw)
if(o)B.b.C(f,B.ck)
s=a3?14:16
break
case 14:a3=A.i_(B.W)
l=B.b.B(A.ae(16,"?",!1,l),", ")
s=17
return A.a(a8.aD("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.FQ(B.a5,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bp)
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
return A.a(a8.aD(a3.charCodeAt(0)==0?a3:a3,a1),$async$bp)
case 18:case 15:q=new A.iH()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bp,r)},
hw(a,b,c){return this.tN(a,b,c)},
tN(a,b,c){var s=0,r=A.h(t.H)
var $async$hw=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cz(a,b,c,!1),$async$hw)
case 2:return A.e(null,r)}})
return A.f($async$hw,r)},
f4(a,b){return this.ve(a,b)},
ve(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a2("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ah("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f4)
case 3:o=d
f=J.L(o)
if(f.gE(o)){q=B.cB
s=1
break}e=t.my
n=A.k([],e)
for(f=f.gt(o);f.k();)n.push(A.mc(f.gn()))
f=A.aO(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.q)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.kp(g,f),$async$f4)
case 4:j=d
i=A.k([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.q)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.F(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
kO(a){if(a.length===0)return A.bj(null,t.H)
return this.a.a0(new A.uA(this,a),t.H)},
aI(a,b){return this.tu(a,b)},
tu(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aI=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.aw(a0).a
a4=a2.ch.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aJ("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 5:o=a9
n=J.L(o)
s=!(n.gV(o)&&!J.w(J.S(n.gG(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aI)
case 8:m=a9
n=J.L(m)
l=n.gV(m)?A.cf(a3,n.gG(m),a2.ax,a2.ay):null
s=9
return A.a(b.L(a,A.dp(a3,J.w(a5.h(0,"archived"),!0),a2.ax,a2.ay,a1,a5),"id = ?",[a1]),$async$aI)
case 9:a6.Y(new A.a1(a0,A.ap([a1],t.N)))
k=A.bK(l==null?B.n:l,a5)
k.H(0,"id")
a6.bd(new A.aR(a0,a1,B.ac,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aI)
case 10:j=a9
a5=J.L(j)
s=a5.gE(j)?11:12
break
case 11:s=13
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 13:s=14
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aI)
case 14:a6.Y(new A.a1(a0,A.ap([a1],t.N)))
s=1
break
case 12:n=a2.ax
a2=a2.ay
i=A.cf(a3,a5.gG(j),n,a2)
h=A.aq(B.l.v(B.e.v(A.ai(A.bd(a3,i)))).a)
a5=a7.b
g=A.aq(B.l.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 18:s=19
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aI)
case 19:a6.Y(new A.a1(a0,A.ap([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.av(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.b8(d,a5,f):A.u(a5,f)
s=23
return A.a(b.L(a,A.dp(a3,J.w(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aI)
case 23:s=24
return A.a(b.W("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 24:s=25
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aI)
case 25:a6.Y(new A.a1(a0,A.ap([a1],a5)))
k=A.bK(i,c)
k.H(0,"id")
a6.bd(new A.aR(a0,a1,B.ac,B.A,i,c,k))
s=21
break
case 22:g=A.aq(B.l.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aI)
case 28:a6.Y(new A.a1(a0,A.ap([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aI,r)},
d1(a,b,c,d,e){return this.r1(a,b,c,d,e)},
r1(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d1=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d1)
case 2:s=3
return A.a(a.L(q.a.aw(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d1)
case 3:return A.e(null,r)}})
return A.f($async$d1,r)},
wX(a,b,c,d,e){return this.a.a0(new A.uy(c,e,d,B.G,a,b),t.H)},
mZ(a,b,c,d,e,f){return this.a.a0(new A.ux(this,c,f,b,a,d,e),t.H)},
fi(a,b,c,d,e){return this.mZ(a,b,c,d,B.ao,e)},
mY(a,b,c){return this.a.a0(new A.uw(a,c,b),t.H)},
x6(){return this.a.a0(new A.uz(null),t.S)},
eZ(a,b,c,d,e,f,g){return this.ua(a,b,c,d,e,f,g)},
ua(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
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
A.uA.prototype={
$1(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aI(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.q)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.uy.prototype={
$1(a){return this.nJ(a)},
nJ(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.ux.prototype={
$1(a){return this.nI(a)},
nI(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aC(0,"lp_dead_letter",A.m(["at",q.a.a.ch.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.uw.prototype={
$1(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.uz.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.k(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:135}
A.eb.prototype={
a4(){return"ApplyResult."+this.b}}
A.mn.prototype={}
A.v9.prototype={
dj(a){return this.wG(a)},
wG(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dj=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.ip(b4),$async$dj)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Gq().eb(n)
if(m==null)A.v(A.bu('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.v(A.bu('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.Bb(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.v0(k))A.v(A.bu('Bad timestamp "'+n+'"'))
o=A.LO(A.Bb(j,i,h,g,f,e,d).iS(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iu(B.c.bN(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dx,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.y
a4===$&&A.A()
s=6
return A.a(a4.fh(b4,null,a2,o,null,b),$async$dj)
case 6:a5=b6
a4=J.L(a5)
if(a4.gE(a5)){s=5
break}++a.ax
a6=p.r3(a5)
a7=k.h(0,b4)
if(a7==null)A.v(A.x(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.Cr(a7.a,a5),$async$dj)
case 8:s=7
return A.a(b0.aW(new b1.vh(b2,p,b3,b6,a6),l),$async$dj)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mn(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dj,r)},
mf(a,b){var s=B.a.Z(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.Z(a.a,b.b)<=0},
tG(a,b){var s=B.a.Z(a.c,b.c)
if(s!==0)return s>0
return B.a.Z(a.a,b.a)>0},
r3(a){var s,r,q,p=J.az(a),o=p.gG(a)
for(p=p.bk(a,1),s=p.$ti,p=new A.ar(p,p.gm(0),s.i("ar<W.E>")),s=s.i("W.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.tG(q,o))o=q}return o},
hV(a){return this.vt(a)},
vt(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aW(new A.vb(o,p,a),t.P),$async$hV)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
dd(a,b){return this.vw(a,b)},
vw(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dd=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bF(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dx,e=n.b,d=A.a_(j),c=d.c,d=d.i("ct<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ct(j,0,200,d)
a2.iN(j,0,200,c)
a3=a2.eu(0)
a4=a3.length
b&1&&A.I(j,18)
A.ba(0,a4,j.length)
j.splice(0,a4)
m=A.k([],a)
a5=A.k([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.y
a7===$&&A.A()
s=12
return A.a(a7.bW(l),$async$dd)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.E(b1)
if(a7 instanceof A.cI){J.aL(m,l)
s=6
break}else if(a7 instanceof A.c0)throw b1
else if(a7 instanceof A.bv){s=6
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
return A.a(n.fk(b2,m),$async$dd)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.v(A.x(a1))
b0=a9.a
a2=A.k([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.q)(a5),++a6)a2.push(A.Cs(b0,a5[a6]))
s=16
return A.a(i.aW(new A.vd(n,a2,b2,b0),h),$async$dd)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dd,r)},
dT(a,b,c,d){return this.rD(a,b,c,d)},
rD(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dT=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
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
return A.a(a1.ah(u.m+g+")",j),$async$dT)
case 6:j=a0.D(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.F(e),A.jo(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.v(A.x(l))
a0=J
s=9
return A.a(a1.cg(d.a.a,"id IN ("+g+")",h),$async$dT)
case 9:j=a0.D(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.F(e),A.cf(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a4(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
mn(a,b,c,d,e){return this.a5(a,b,A.Cs(this.a.aw(b).a,c),null,!1,d,e)},
ug(a,b,c){return this.mn(a,b,c,null,!1)},
a5(a,b,c,d,e,f,g){return this.uf(a,b,c,d,e,f,g)},
mm(a,b,c){return this.a5(a,b,c,null,!1,null,!1)},
uf(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a5=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.aw(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bI(a4,a7,b2,a8,a9),$async$a5)
case 5:q=B.a7
s=1
break
case 4:a9=b3.b
a9.toString
j=A.bd(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bI(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a5)
case 8:q=B.a7
s=1
break
case 7:g=a8.a
f=$.oT()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bI(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a5)
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
return A.a(g.bS(a4,b2,a8.a),$async$a5)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aJ(a6.a,1,"id = ?",[a8.a]),$async$a5)
case 19:c=b9
g=J.L(c)
d=g.gE(c)?null:A.cf(a7,g.gG(c),a5.ax,a5.ay)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.di(a4,a8.a,a8.e,b2),$async$a5)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.GF(a4,a6.a,A.dp(a7,J.w(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9)),$async$a5)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d7(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 26:b1.Y(new A.a1(b2,A.ap([a8.a],t.N)))
b=A.bK(B.n,a9)
b.H(0,"id")
b1.bd(new A.aR(b2,a8.a,B.at,B.ab,null,a9,b))
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
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a5)
case 31:q=B.a8
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dp(a7,J.w(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9),"id = ?",[a8.a]),$async$a5)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d7(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 33:b1.Y(new A.a1(b2,A.ap([a8.a],t.N)))
b=A.bK(d,a9)
b.H(0,"id")
b1.bd(new A.aR(b2,a8.a,B.at,B.A,d,a9,b))
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
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a5)
case 38:q=B.a8
s=1
break
case 37:s=a===B.a4?39:40
break
case 39:s=41
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a5)
case 41:q=B.a8
s=1
break
case 40:a0=A.bd(a7,d)
s=A.ai(a0)===i?42:43
break
case 42:s=44
return A.a(a4.W("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a5)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d7(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a5)
case 45:b1.Y(new A.a1(b2,A.ap([a8.a],t.N)))
q=B.a6
s=1
break
case 43:l=null
p=47
a9=m
l=A.hZ(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.E(b0)
s=a5 instanceof A.d4?50:52
break
case 50:k=a5
s=53
return A.a(n.bI(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a5)
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
a9=A.FC(l,a0,new A.lV(null,B.Y,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bp(a9,t.r),$async$a5)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eS(a4,b2,a8,a7,m,a0,l,a2),$async$a5)
case 57:s=58
return A.a(n.c2(b1,b2,a8.a,a8.c,!1),$async$a5)
case 58:a5=t.N
b1.Y(new A.a1(b2,A.ap([a8.a],a5)))
b1.Y(new A.a1("lp_conflicts",A.ap([a8.a],a5)))
q=B.bt
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dp(a7,J.w(a3.h(0,"archived"),!0),a5.ax,a5.ay,a9,a3),"id = ?",[a8.a]),$async$a5)
case 59:a5=a5.CW
a5===$&&A.A()
s=60
return A.a(a5.eZ(a4,b2,a8.a,h,i,a8.c,A.ai(a3)),$async$a5)
case 60:s=61
return A.a(n.tD(b1,b2,a8.a,a8.c),$async$a5)
case 61:b1.Y(new A.a1(b2,A.ap([a8.a],t.N)))
b=A.bK(d,a3)
b.H(0,"id")
b1.bd(new A.aR(b2,a8.a,B.ac,B.A,d,a3,b))
q=B.a6
s=1
break
case 35:q=B.a8
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a5,r)},
eS(a,b,c,d,e,f,g,h){return this.t2(a,b,c,d,e,f,g,h)},
t2(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eS=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bd(d,A.f8(d,c))
k=A.bK(g,f)
j=A.O(k,A.n(k).c)
B.b.aF(j)
k=A.bK(g,l)
p=A.O(k,A.n(k).c)
B.b.aF(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ai(g)
n=t.N
m=t.X
s=2
return A.a(a.cb(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ai(f),"remote_json",A.ai(l),"dirty_local",B.h.a6(j,null),"dirty_remote",B.h.a6(p,null),"detected_at",q.c.ay.$0()],n,m),B.Q),$async$eS)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(l),"base_hash",A.aq(B.l.v(B.e.v(A.ai(A.bd(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eS)
case 3:return A.e(null,r)}})
return A.f($async$eS,r)},
bI(a,b,c,d,e){return this.rW(a,b,c,d,e)},
rW(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bI=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a6(d.d,null)}catch(a1){o=t.N
e=B.h.a6(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aC(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bI)
case 2:j=q.a.CW
j===$&&A.A()
s=3
return A.a(j.bS(a,c,m),$async$bI)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.M(o.mD(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aC(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bI)
case 7:s=5
break
case 6:s=8
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bI)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bI,r)},
d7(a,b,c,d,e,f,g,h){return this.tM(a,b,c,d,e,f,g,!0)},
tM(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d7=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aC(0,"lp_sync_row",o),$async$d7)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$d7)
case 6:case 3:return A.e(null,r)}})
return A.f($async$d7,r)},
c2(a,b,c,d,e){return this.tE(a,b,c,d,e)},
tD(a,b,c,d){return this.c2(a,b,c,d,!0)},
tE(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
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
return A.a(p.L(q.a.aw(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c2)
case 3:if(g>0)a.Y(new A.a1(b,A.ap([c],o)))
return A.e(null,r)}})
return A.f($async$c2,r)},
fk(a,b){return this.wq(a,b)},
wq(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bF(b,!0,t.N)
n=A.a_(o),m=n.c,n=n.i("ct<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ct(o,0,500,n)
i.iN(o,0,500,m)
h=i.eu(0)
g=h.length
l&1&&A.I(o,18)
A.ba(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aW(new A.vf(p,a,h),j),$async$fk)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fk,r)}}
A.vh.prototype={
$0(){var s=this,r=s.b
return r.a.a0(new A.vg(s.a,r,s.c,s.d,s.e),t.P)},
$S:19}
A.vg.prototype={
$1(a){return this.nQ(a)},
nQ(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.aw(a1)
a3=A.k([],t.s)
for(p=q.d,o=J.az(p),n=o.gt(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dT(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aO(t.N)
a2=o.gt(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mf(i,c)){s=3
break}p=i.a
s=j.F(0,p)?5:7
break
case 5:s=8
return A.a(a.mm(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a5(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.mf(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.ev(b,a1,e,f),$async$$1)
case 10:d.a=new A.j6(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.vb.prototype={
$0(){var s=this.b
return s.a.a0(new A.va(this.a,s,this.c),t.P)},
$S:19}
A.va.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
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
return A.a(l.ug(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.Z(o.c,k)<=0){s=1
break}s=7
return A.a(l.mn(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:6}
A.vd.prototype={
$0(){var s=this,r=s.a
return r.a.a0(new A.vc(r,s.b,s.c,s.d),t.P)},
$S:19}
A.vc.prototype={
$1(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.k([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dT(a.b,m,q.d,e),$async$$1)
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
return A.a(o.mm(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a5(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.u(0,g)
case 7:case 4:p.length===e||(0,A.q)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.vf.prototype={
$0(){var s=this.a
return s.a.a0(new A.ve(s,this.b,this.c),t.P)},
$S:19}
A.ve.prototype={
$1(a){return this.nP(a)},
nP(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.aw(g).a
e=h.aw(g).a.a
d=q.c
c=t.N
b=B.b.B(A.ae(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.u(c,t.G)
a1=J
s=2
return A.a(i.cg(e,a,d),$async$$1)
case 2:p=a1.D(a4),o=h.ax,h=h.ay
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.F(m),A.cf(f,n,o,h))
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
case 6:a2.Y(new A.a1(g,A.tI(d,A.a_(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.q)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dH(null,null,c,h)
p.C(0,j)
p.j(0,"hidden",!0)
a2.bd(new A.aR(g,k,B.at,B.bV,j,p,B.db))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.b3.prototype={}
A.vi.prototype={
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
return A.a(p.dU(f.gn()),$async$fs)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.b3(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)},
dU(a){return this.rP(a)},
rP(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.CW
l===$&&A.A()
m=m.r
s=3
return A.a(l.ep(m,a.a,a.b),$async$dU)
case 3:o=c
if(o==null){q=B.a1
s=1
break}s=4
return A.a(l.bS(m,o.a,o.b),$async$dU)
case 4:n=c
if(n==null){q=B.a1
s=1
break}if(o.e==null){q=p.rN(o,n)
s=1
break}q=p.jr(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
bF(a,b,c,d,e){return this.qC(a,b,c,d,e)},
qB(a,b,c,d){return this.bF(a,b,c,!1,d)},
qz(a,b,c){return this.bF(a,b,c,!1,!1)},
qA(a,b,c,d){return this.bF(a,b,c,d,!1)},
qC(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
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
k=A.E(i)
s=k instanceof A.c0?8:10
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
return A.a(k.mY("forbidden_push",a.b,a.a),$async$bF)
case 14:q=B.cU
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
return A.a(n.cX(a,"validation_push",m.a),$async$bF)
case 20:q=B.M
s=1
break
case 19:q=n.ct(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cI){q=n.dN(a,b,!e)
s=1
break}else if(k instanceof A.bv){l=k
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
jq(a,b,c){return this.rO(a,b,c)},
rN(a,b){return this.jq(a,b,!1)},
rO(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bF(a,b,new A.vk(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jq,r)},
ju(a,b,c){return this.t3(a,b,c)},
t3(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$ju=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qB(a,b,new A.vp(p,a,p.a.aw(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ju,r)},
jr(a,b){return this.rQ(a,b)},
rQ(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qz(a,b,new A.vn(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jr,r)},
d3(a,b,c,d){return this.rS(a,b,c,d)},
rR(a,b,c){return this.d3(a,b,c,!1)},
rS(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d3=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.l5(a,c)
j=n.a.aw(a.a).a
i=a.d
s=A.aq(B.l.v(B.e.v(A.ai(A.bd(j,A.f8(j,c))))).a)===A.aq(B.l.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eQ(a,c),$async$d3)
case 5:q=B.a2
s=1
break
case 4:m=null
l=null
p=7
m=A.hZ(b.r)
l=A.hZ(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.E(f)
s=i instanceof A.d4?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$d3)
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
return A.a(n.dQ(a,b,c,j,m,l),$async$d3)
case 14:g=a0
if(g==null){q=B.bb
s=1
break}q=n.bF(a,b,new A.vl(n,a,A.ai(A.bd(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d3,r)},
b9(a){return this.rM(a)},
rM(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b9=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.k([],t.k1)
c0=t.N
c1=A.u(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.u(c0,c0)
c0=J.D(d0),d=n.a,c=d.y,b=n.b,a=d.dx,a0=d.r
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
a1=A.E(c8)
s=a1 instanceof A.cI?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lA(m,l),$async$b9)
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
case 14:s=a1 instanceof A.c0?18:20
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
return A.a(a2.mY("forbidden_push",m.b,a1),$async$b9)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bv?25:27
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
a7=new A.a2("")
A.cg(a7,A.bd(a4,A.f8(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c2()
a5=A.cW(a8)
a5.u(0,a1)
a5.q()
a9=A.aq(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c2()
a1=A.cW(a8)
a1.u(0,a5)
a1.q()
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
g=A.hZ(l.r)
f=A.hZ(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.E(c9)
s=a1 instanceof A.d4?38:40
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
return A.a(n.dQ(m,l,k,a4,g,f),$async$b9)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a2("")
A.cg(a7,A.bd(a4,b1))
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
return A.a(n.c1(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b9)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b3(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b3(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b9,r)},
dQ(a,b,c,d,e,f){return this.r4(a,b,c,d,e,f)},
r4(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dQ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.f8(d,c)
n=A.FC(e,f,new A.lV(null,B.Y,!1),a.b,A.bd(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bp(n,t.r),$async$dQ)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hn(a,b,c,m,e,f),$async$dQ)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
c1(a,b,c){return this.tn(a,b,c)},
tn(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
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
J.c_(l,k.a,k)}j=l
i=A.aO(a7)
for(l=J.D(m);l.k();){h=l.gn()
if(!J.aL(i,h.a)){l=A.bu("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.bu("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.k([],t.bo)
l=J.D(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.S(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jk(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c2()
b2=A.cW(b1)
b2.u(0,b0)
b2.q()
b2=A.aq(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aL(g,new A.j8(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
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
return A.a(l.kO(g),$async$c1)
case 14:l=b6
a7=b7
q=new A.b3(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.E(b8)
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
return A.a(n.dU(n.lH(a0)),$async$c1)
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
case 23:q=new A.b3(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.c0?25:27
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
a3=a2 instanceof A.eF?a2:new A.ha("network error")
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
return A.a(n.ct(n.lH(a4),a5,a3),$async$c1)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.q)(b9),++a9
s=31
break
case 33:q=new A.b3(b6,b7,0,0,0,!0)
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
bZ(a,b,c){return this.oY(a,b,c)},
oY(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
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
case 16:a7=n.jk(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dV(a7,a8,a9,b0==null?b.d:b0),$async$bZ)
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
a6=A.E(b4)
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
case 8:q=new A.b3(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bZ,r)},
jk(a,b){var s=b==null?a.d:b
return new A.cn(a.b,a.c,B.v,s,a.e,A.aq(B.l.v(B.e.v(a.d)).a),B.q,a.a,0,null)},
lH(a){return this.jk(a,null)},
dV(a,b,c,d){return this.tt(a,b,c,d)},
eQ(a,b){return this.dV(a,b,null,null)},
tt(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(a.a).a
n=A.f8(o,b)
m=d==null
l=m?A.ai(A.bd(o,n)):d
p=p.CW
p===$&&A.A()
s=2
return A.a(p.kO(A.k([new A.j8(a,l,b.c,A.aq(B.l.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dV)
case 2:return A.e(null,r)}})
return A.f($async$dV,r)},
l5(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ev('record id "'+s+'" does not match requested "'+r+'"'))},
ct(a,b,c){return this.tb(a,b,c)},
tb(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$ct=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.eF?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.CW
o===$&&A.A()
s=5
return A.a(o.mZ(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$ct)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mE(l,k)
m=p.a.CW
m===$&&A.A()
s=6
return A.a(m.wX(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$ct)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ct,r)},
cX(a,b,c){return this.pB(a,b,c)},
pA(a,b){return this.cX(a,b,null)},
pB(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.CW
o===$&&A.A()
p=c==null?b:c
s=2
return A.a(o.fi(p,a.b,b,a.d,a.a),$async$cX)
case 2:return A.e(null,r)}})
return A.f($async$cX,r)},
dN(a,b,c){return this.qu(a,b,c)},
lA(a,b){return this.dN(a,b,!0)},
qu(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dN=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.aw(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:m=null
l=null
p=7
m=A.hZ(b.r)
l=A.hZ(a.d)
p=2
s=9
break
case 7:p=6
h=o.pop()
i=A.E(h)
s=i instanceof A.d4?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$dN)
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
return A.a(n.fZ(a,b,m,l),$async$dN)
case 14:q=B.bb
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dN,r)},
fZ(a,b,c,d){return this.pQ(a,b,c,d)},
pQ(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$fZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bK(c,d)
n=A.O(o,A.n(o).c)
B.b.aF(n)
p=b.r
if(p==null)p=A.ai(c)
s=2
return A.a(q.a.a0(new A.vj(q,a,p,d,n),t.P),$async$fZ)
case 2:return A.e(null,r)}})
return A.f($async$fZ,r)},
hn(a,b,c,d,e,f){return this.t1(a,b,c,d,e,f)},
t1(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hn=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.aw(a.a).a
m=A.bd(n,A.f8(n,c))
l=A.bK(e,f)
k=A.O(l,A.n(l).c)
B.b.aF(k)
l=A.bK(e,m)
p=A.O(l,A.n(l).c)
B.b.aF(p)
s=2
return A.a(o.a0(new A.vo(q,a,b,e,f,m,k,p,n,c),t.P),$async$hn)
case 2:return A.e(null,r)}})
return A.f($async$hn,r)}}
A.vk.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.A()
s=7
return A.a(j.hP(k.d,k.b,k.a),$async$$0)
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
if(A.E(h) instanceof A.fq){q=n.a.ju(n.b,n.c,n.d)
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
A.vp.prototype={
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
return A.a(n.pA(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.aq(B.l.v(B.e.v(A.ai(A.bd(l,A.f8(l,o))))).a)===A.aq(B.l.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eQ(m,o),$async$$0)
case 9:q=B.a2
s=1
break
case 8:q=n.d3(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.vn.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.A()
s=3
return A.a(l.bW(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lA(m,p.c)
s=1
break}n.l5(m,o)
if(o.c===m.e){l=p.c
q=n.qA(m,l,new A.vm(n,m,o,l),!0)
s=1
break}q=n.rR(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.vm.prototype={
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
A.vl.prototype={
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
return A.a(k.dV(j,b,p.e.a,m),$async$$0)
case 3:q=B.a2
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.vj.prototype={
$1(a){return this.nR(a)},
nR(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cb(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ai(q.d),"remote_json",A.ai(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a6(q.e,null),"dirty_remote",B.h.a6(B.q,null),"detected_at",q.a.c.ay.$0()],k,j),B.Q),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.Y(new A.a1(n,A.ap([m],k)))
a.Y(new A.a1("lp_conflicts",A.ap([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.vo.prototype={
$1(a){return this.nS(a)},
nS(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cb(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ai(q.e),"remote_json",A.ai(o),"dirty_local",B.h.a6(q.r,null),"dirty_remote",B.h.a6(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.Q),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(o),"base_hash",A.aq(B.l.v(B.e.v(A.ai(A.bd(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.Y(new A.a1(j,A.ap([k],n)))
a.Y(new A.a1("lp_conflicts",A.ap([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.c9.prototype={
a4(){return"SyncEngineState."+this.b}}
A.bm.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.h7.prototype={}
A.h6.prototype={}
A.we.prototype={
gl7(){return 36},
dC(a){return this.oz(a)},
oz(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dC=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.k([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dx,g=new A.bE(g,g.r,g.e,A.n(g).i("bE<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iq(m),$async$dC)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gl7():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.aj(c.a+1,n.gl7())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bD(m,a),$async$dC)
case 13:a5.aL(a6,a9)
case 11:++j
s=10
break
case 12:if(A.n4(h)!=null)A.v(A.x(u.L))
b=h.b
b===$&&A.A()
s=14
return A.a(b.aX(new A.wf(c,n,m,a3),B.p,f),$async$dC)
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
return A.f($async$dC,r)},
bD(a,b){return this.oy(a,b)},
oy(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bD=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.N("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aO(t.N)
m=B.c.iu(B.c.bN(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.y
g===$&&A.A()
s=5
return A.a(g.fh(a4,B.cE,h,null,o,m),$async$bD)
case 5:f=a7
g=J.L(f)
if(g.gE(f)){s=4
break}for(e=g.gt(f);e.k();)n.u(0,e.gn().a)
e=A.k([],l)
for(d=g.gt(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hm(a4,e),$async$bD)
case 6:c=a7
b=A.k([],l)
for(e=g.gt(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aN||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dd(a4,b),$async$bD)
case 9:i+=b.length
case 8:h=g.ga_(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ah("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bD)
case 10:a1=a7
a2=A.k([],l)
for(e=J.D(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.F(a)
if(!n.F(0,a)){if(J.w(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fk(a4,a2),$async$bD)
case 13:case 12:s=14
return A.a(k.ah("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bD)
case 14:a3=a7
k=J.L(a3)
s=k.gV(a3)?15:16
break
case 15:l=A.k([],l)
for(k=k.gt(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.F(g))}s=17
return A.a(j.dd(a4,l),$async$bD)
case 17:case 16:q=new A.h6(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bD,r)},
hm(a,b){return this.rG(a,b)},
rG(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(o.ah(u.m+j+")",m),$async$hm)
case 6:m=e.D(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.F(h),A.jo(i))
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
A.wf.prototype={
$1(a){return this.nU(a)},
nU(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.ew(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.bv.prototype={
l(a){return A.dr(this).l(0)+": "+this.a},
$iH:1}
A.ha.prototype={}
A.eF.prototype={}
A.je.prototype={}
A.c0.prototype={}
A.cE.prototype={}
A.cI.prototype={}
A.fK.prototype={}
A.fM.prototype={}
A.fq.prototype={}
A.ec.prototype={}
A.h4.prototype={
gm(a){return this.b}}
A.cK.prototype={}
A.fO.prototype={}
A.j7.prototype={}
A.kI.prototype={
a4(){return"BackendHintKind."+this.b}}
A.cB.prototype={}
A.Aw.prototype={
$2(a,b){return B.a.ij(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:138}
A.wg.prototype={
mE(a,b){var s,r
if(b!=null){s=this.rs(b)
if(A.ax(s))return A.dy(0,0,s<0?0:s)
if(s instanceof A.aM){r=s.a-this.ay.$0()
return r<=0?B.D:A.dy(0,r,0)}return B.au}return A.Fv(a,B.au,B.av,this.at)},
mD(a){return this.mE(a,null)},
rs(a){var s=B.a.ci(a),r=A.j4(s,null)
if(r!=null)return r
return A.Iz(s)}}
A.j6.prototype={}
A.jm.prototype={}
A.wr.prototype={
ip(a){return this.wT(a)},
wT(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$ip=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.en("lp_sync_state",A.k(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$ip)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=A.a6(J.S(l.gG(m),"cursor_updated"))
n=A.a6(J.S(l.gG(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.j6(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
ev(a,b,c,d){return this.xK(a,b,c,d)},
xK(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ev=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aJ("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ev)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$ev)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$ev)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ev,r)},
iq(a){return this.wV(a)},
wV(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.en("lp_sync_state",A.k(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iq)
case 3:n=c
m=J.L(n)
if(m.gE(n)){q=B.dg
s=1
break}o=A.bb(J.S(m.gG(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jm(o,A.bb(J.S(m.gG(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iq,r)},
ew(a,b,c,d){return this.xO(a,b,c,d)},
xO(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ew=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aJ("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ew)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$ew)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$ew)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ew,r)},
hM(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b0("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hM)
case 3:l=b
k=J.L(l)
j=k.gE(l)?B.n:k.gG(l)
k=A.bb(j.h(0,"pending"))
if(k==null)k=0
o=A.bb(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bb(j.h(0,"hidden"))
if(n==null)n=0
m=A.bb(j.h(0,"blocked"))
q=new A.o6([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)}}
A.cO.prototype={
a4(){return"SyncState."+this.b}}
A.i3.prototype={
a4(){return"AccessState."+this.b}}
A.fJ.prototype={
a4(){return"OutboxKind."+this.b}}
A.j1.prototype={
a4(){return"OpQueueKind."+this.b}}
A.AS.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cN.prototype={}
A.wq.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
i=j.h(0,"record_id")
i.toString
A.F(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.bb(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fs(B.co,A.F(p))
A.Fp(j.h(0,"dirty_fields"))
o=A.bb(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fs(B.cm,A.F(n))
A.a6(j.h(0,"op_id"))
m=A.bb(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bb(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.bb(j.h(0,"schema_ver"))
return new A.cN(i,s,r,q,p,o,n,m,l,k)},
$S:139}
A.cn.prototype={}
A.uv.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
s=j.h(0,"record_id")
s.toString
A.F(s)
r=j.h(0,"kind")
r.toString
r=A.fs(B.cx,A.F(r))
q=j.h(0,"payload_json")
q.toString
A.F(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Fp(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.F(m)
l=j.h(0,"created_at")
l.toString
A.an(l)
k=j.h(0,"updated_at")
k.toString
A.an(k)
return new A.cn(i,s,r,q,p,o,n,m,l,A.a6(j.h(0,"depends_on_op")))},
$S:140}
A.eA.prototype={}
A.uq.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.an(l)
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
q=A.fs(B.cs,A.F(q))
p=m.h(0,"payload_json")
p.toString
A.F(p)
o=m.h(0,"state")
o.toString
A.F(o)
o=A.bb(m.h(0,"attempt_count"))
if(o==null)o=0
A.bb(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.an(m)
return new A.eA(l,s,r,q,p,o,n)},
$S:141}
A.AQ.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:68}
A.AR.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:68}
A.wE.prototype={}
A.tJ.prototype={
cG(a,b){return this.vL(a,b)},
vL(a,b){var s=0,r=A.h(t.X),q,p
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.hX(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)},
ii(a,b,c,d){return this.wz(a,b,c,d)},
wz(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$ii=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.wv(a6,a7)
a=t.N
a0=new A.ij(A.u(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.a6(A.FK(a2?null:A.oK(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.tK(a3)
a0.e=new A.tL(a3)
p=4
b.O("PRAGMA journal_mode=TRUNCATE")
f=b.kL("PRAGMA journal_mode")
n=f.gG(f).b[0]
if(J.a0(n).toLowerCase()!=="truncate"){a=A.x("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.Mb(a2?null:A.oK(a8))
e=t.bE.a(J.S(m,"stores"))
l=e==null?A.k([],t.aw):e
d=A.bb(J.S(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.EC(J.S(m,"destructiveBackup"))
j=f!==!1
i=A.Ma(A.FK(a2?null:A.oK(a8),"fieldCipher"))
if(A.LT(l,i)){a=A.aw("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.x1(A.u(a,t.p))
s=7
return A.a(A.d0(h,a0,j,i,k,a6,B.aA,l),$async$ii)
case 7:g=b0
a1=!0
a=b
a2=t.be
q=new A.lT(a,new A.xa(a,g,new A.wI(A.M3(),A.u(t.S,t.oc)),A.aO(a2)),A.u(t.eg,a2))
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
if(!a1)b.q()
throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ii,r)}}
A.tK.prototype={
$1(a){return A.oD(this.a,a)},
$S:143}
A.tL.prototype={
$1(a){return A.oE(this.a,a)},
$S:144}
A.lT.prototype={
cG(a,b){return this.vM(a,b)},
vM(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.Bt(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.HK(n)
if(o==null){q=A.Bt(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.i3(p.e.kp(a,new A.tU(a)),o),$async$cG)
case 3:q=m.HL(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)}}
A.tU.prototype={
$0(){return new A.hp(this.a)},
$S:145}
A.hp.prototype={$ino:1}
A.At.prototype={
$2(a,b){this.a.j(0,J.a0(a),A.oN(b))},
$S:27}
A.An.prototype={
$2(a,b){this.a.j(0,J.a0(a),A.Ck(b))},
$S:27}
A.cT.prototype={}
A.wI.prototype={
gng(){var s=this.r
return new A.ao(s,A.n(s).i("ao<2>")).vE(0,0,new A.wL())},
mL(){var s,r=this.r,q=A.n(r).i("ao<2>"),p=q.i("cl<o.E,i>"),o=A.O(new A.cl(new A.aj(new A.ao(r,q),new A.wJ(this.f.$0()),q.i("aj<o.E>")),new A.wK(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.q)(o),++s)r.H(0,o[s])
return p}}
A.wL.prototype={
$2(a,b){return a+b.f},
$S:146}
A.wJ.prototype={
$1(a){return!a.z.kc(this.a)},
$S:147}
A.wK.prototype={
$1(a){return a.a},
$S:148}
A.AK.prototype={
$1(a){return A.Mc(a)},
$S:149}
A.AB.prototype={
$1(a){return B.b.bM(a.c,new A.AA())},
$S:150}
A.AA.prototype={
$1(a){return a.e},
$S:56}
A.hi.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.x6.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.eB)},
$S:66}
A.nk.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.x3.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.j5.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iH:1}
A.bw.prototype={
b1(a,b,c){var s,r,q=this.a.h(0,a)
if(!c.b(q)){s=A.DV(c)
r=q==null?"null":A.DW(q)
throw A.b(A.d8('Missing or invalid "'+a+'" argument'+(" for "+b)+": expected "+s+", got "+r+"."))}return q},
aE(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.d8('Invalid "'+a+'" argument: expected '+A.DV(b)+", got "+A.DW(s)+"."))
return b.a(s)}}
A.hj.prototype={}
A.ju.prototype={}
A.eM.prototype={}
A.Aq.prototype={
$2(a,b){var s,r,q=J.a0(a)
if(t.f.b(b))this.a.j(0,q,A.f5(b))
else{s=this.a
if(t.j.b(b)){r=J.be(b,new A.Ap(),t.z)
r=A.O(r,r.$ti.i("W.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:38}
A.Ap.prototype={
$1(a){return t.f.b(a)?A.f5(a):a},
$S:32}
A.nn.prototype={
dK(a,b){return this.q3(a,b)},
q3(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$dK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cA(),$async$dK)
case 3:o=p.e
if(o!=null)o.D()
p.e=null
p.d.r.af(0)
o=p.Q
o=o==null?null:o.D()
s=4
return A.a(o instanceof A.t?o:A.bp(o,t.H),$async$dK)
case 4:p.Q=null
p.z.af(0)
s=5
return A.a(p.c.q(),$async$dK)
case 5:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dK,r)},
h2(a,b){return this.q6(a,b)},
q6(a3,a4){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$h2=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a1=a4.d.h(0,"request")
if(!t.f.b(a1))throw A.b(A.d8('Contract envelope requires a "request" map.'))
j=A.f5(a1)
i=j.h(0,"tag")
if(typeof i!="string")A.v(A.Z("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.v(A.Z("Missing request payload."))
g=A.oL(h)
j=t.G
if(!j.b(g))A.v(A.Z("Malformed request payload."))
f=A.H7(i,g)
if(f==null)A.v(A.Z("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.A()
s=7
return A.a(e.vG(m),$async$h2)
case 7:l=a6
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gal(),"payload",A.oM(e.p())],d,t.X)],d,j)
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
b=J.a0(e)
if(e instanceof A.dI){a=A.Kw(e)
b=e.a
if(e instanceof A.eK&&e.b!=null)a0=A.m(["field",e.b],t.N,t.X)
else if(e instanceof A.eJ)a0=A.m(["field",e.b],t.N,t.X)
else a0=e instanceof A.ez?A.m(["field",e.b],t.N,t.X):null}else{if(e instanceof A.jt){b=e.a
a="WireException"}else if(e instanceof A.bk){b=e.a
a="StateError"}else if(e instanceof A.bB){b=A.r(e.d)
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
return A.f($async$h2,r)},
cA(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.r
q.r=null
p=q.x
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.t?p:A.bp(p,t.H),$async$cA)
case 2:q.x=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aG(),$async$cA)
case 5:s=6
return A.a(o.eA(),$async$cA)
case 6:o.eA()
p=o.ax
if((p.c&4)===0)p.q()
o.w.a.q()
case 4:q.y=q.w=null
return A.e(null,r)}})
return A.f($async$cA,r)}}
A.xa.prototype={
i3(a,b){return this.w_(a,b)},
w_(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$i3=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.z.u(0,a)
if(n.Q==null){i=n.c.e
i===$&&A.A()
i=i.b
n.Q=new A.aZ(i,A.n(i).i("aZ<1>")).aT(new A.xb(n))}m=null
try{m=A.IJ(b)}catch(d){l=A.E(d)
i=J.a0(l)
q=new A.eM("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eM("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.j1(a,m),$async$i3)
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
g=J.a0(j)
f=A.m(["type",A.Mj(j)],t.N,t.X)
q=new A.eM("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i3,r)},
j1(a,b){return this.pF(a,b)},
pF(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$j1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.as
if(l===$){o=A.m(["capabilities",p.gq0(),"open",p.gqv(),"sync_start",p.gqL(),"sync_stop",p.gqP(),"sync_now",p.gqD(),"sync_pause",p.gqF(),"sync_resume",p.gqH(),"sync_set_connectivity",p.gqJ(),"sync_update_auth",p.gqR(),"sync_status",p.gqN(),"file_upload_begin",p.gqm(),"file_upload_chunk",p.gqo(),"file_upload_finish",p.gqq(),"file_upload_abort",p.gqk(),"file_list",p.gqc(),"file_open",p.gqe(),"file_remove",p.gqg(),"file_gc",p.gqa(),"file_enforce_storage_cap",p.gq8(),"file_storage_status",p.gqi(),"contract_request",p.gq5(),"close",p.gq2()],t.N,t.n1)
p.as!==$&&A.AY()
p.as=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.d8("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j1,r)}}
A.xb.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gal(),"payload",a.p()],r,q)],r,q)
for(r=this.a.z,r=A.hx(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).a.e8(A.hX(p))}},
$S:153}
A.nm.prototype={
ha(a,b){return this.qw(a,b)},
qw(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$ha=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.bw(a3).aE("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.u(a3,a3)
n=t.f
if(n.b(a5))a5.a1(0,new A.x8(o))
s=a4!=null?3:4
break
case 3:m=J.D(a4),l=p.c,k=l.dx,j=t.X,i=l.ax==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.v(A.a8("Schema must be a map: "+A.r(h),null,null))
g=A.pv(A.f5(h),j)
if(B.b.bM(g.c,new A.x9())&&i)throw A.b(A.aw('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.BG(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a2("")
A.cg(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cW(a)
a0.u(0,b)
a0.q()
a0=d!==A.aq(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.d8('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.I(e)?7:9
break
case 7:s=10
return A.a(l.aQ(g),$async$ha)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.v(A.x('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a2("")
A.cg(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cW(a)
a0.u(0,b)
a0.q()
a0=A.aq(a.a.a)
c=new A.a2("")
A.cg(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a2=A.cW(a)
a2.u(0,b)
a2.q()
if(a0!==A.aq(a.a.a))throw A.b(A.d8('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)}}
A.x8.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:27}
A.x9.prototype={
$1(a){return a.e},
$S:56}
A.np.prototype={
pO(){if(this.e!=null)return
this.e=A.DK(A.dy(9e8,0,0),new A.xc(this))},
je(a,b){return this.qn(a,b)},
qn(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$je=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:p.pO()
o=new A.bw(b.d)
n=p.f++
m=p.d
l=t.N
k=o.b1("store","file_upload_begin",l)
j=o.b1("recordId","file_upload_begin",l)
i=o.aE("field",l)
if(i==null)i="imgs"
h=o.aE("name",l)
if(h==null)h="blob.bin"
g=t.S
f=o.b1("size","file_upload_begin",g)
e=o.aE("expectedSha256",l)
d=o.aE("allowVolatileBlobs",t.y)
m.mL()
c=m.r
if(c.a>=16)A.v(A.aw("Maximum concurrent uploads exceeded (16).",null))
if(f<0||f>268435456)A.v(A.aw("Invalid file size: "+f,null))
if(m.gng()+f>536870912)A.v(A.aw("Aggregate upload quota exceeded: "+m.gng()+" + "+f+" > 536870912",null))
m=m.f.$0().iS(18e8)
c.j(0,n,new A.cT(n,k,j,i,h,f,e,d===!0,A.k([],t.bs),m))
q=A.m(["uploadId",n],l,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$je,r)},
jf(a,b){return this.qp(a,b)},
qp(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$jf=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=new A.bw(i).b1("uploadId","file_upload_chunk",t.S)
i=A.Ck(i.h(0,"chunk"))
i.toString
o=p.d
i=new Uint8Array(A.b0(t.L.a(i)))
n=o.r
m=n.h(0,h)
if(m==null)A.v(A.aw("Unknown upload session: "+h,null))
o=o.f
if(!m.z.kc(o.$0())){n.H(0,h)
A.v(A.aw("Upload session expired: "+h,null))}l=i.length
if(l>262144){n.H(0,h)
A.v(A.aw("Chunk too large: "+l+" > 262144",null))}k=m.x
j=m.f
if(k+l>j){n.H(0,h)
A.v(A.aw("Upload exceeds declared size "+j,null))}m.y.push(i)
m.x+=l
m.z=o.$0().iS(18e8)
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jf,r)},
h8(a,b){return this.qr(a,b)},
qr(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$h8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.bw(b.d).b1("uploadId","file_upload_finish",t.S)
f=p.d
e=f.r.H(0,g)
if(e==null)A.v(A.aw("Unknown upload session: "+g,null))
if(!e.z.kc(f.f.$0()))A.v(A.aw("Upload session expired: "+g,null))
f=e.x
o=e.f
if(f!==o)A.v(A.aw("Upload size mismatch: expected "+o+" but got "+f,null))
f=p.c.db
f===$&&A.A()
n=e.b
m=e.c
l=new A.xd(e).$0()
k=e.d
j=e.e
i=e.r
s=3
return A.a(f.d8(e.w,l,i,o,k,j,m,n),$async$h8)
case 3:h=d
q=A.m(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
jd(a,b){return this.ql(a,b)},
ql(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$jd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.d.r.H(0,new A.bw(b.d).b1("uploadId","file_upload_abort",t.S))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jd,r)},
h5(a,b){return this.qd(a,b)},
qd(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$h5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.bw(b.d)
j=p.c.db
j===$&&A.A()
o=t.N
n=k.b1("store","file_list",o)
m=k.b1("recordId","file_list",o)
l=k.aE("field",o)
i=J
s=3
return A.a(j.eh(l==null?"imgs":l,m,n),$async$h5)
case 3:j=i.be(d,A.Mt(),t.G)
j=A.O(j,j.$ti.i("W.E"))
q=A.m(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)},
dM(a,b){return this.qf(a,b)},
qf(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dM=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.bw(b.d)
c=m.c.db
c===$&&A.A()
i=t.N
h=d.b1("store","file_open",i)
g=d.b1("recordId","file_open",i)
f=d.aE("field",i)
if(f==null)f="imgs"
e=d.aE("index",t.S)
if(e==null)e=0
s=3
return A.a(c.fm(f,e,g,d.aE("refId",i),h),$async$dM)
case 3:l=a1
k=A.k([],t.t)
h=new A.cd(A.bZ(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.k(),$async$dM)
case 9:if(!a1){s=8
break}j=h.gn()
J.B3(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.D(),$async$dM)
case 10:s=n.pop()
break
case 6:q=A.m(["bytes",A.oN(new Uint8Array(A.b0(k))),"size",J.ak(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dM,r)},
h6(a,b){return this.qh(a,b)},
qh(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$h6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.bw(b.d)
i=p.c.db
i===$&&A.A()
o=t.N
n=j.b1("store","file_remove",o)
m=j.b1("recordId","file_remove",o)
l=j.aE("field",o)
if(l==null)l="imgs"
k=j.aE("index",t.S)
if(k==null)k=0
s=3
return A.a(i.fv(0,l,k,m,j.aE("refId",o),n),$async$h6)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h6,r)},
h4(a,b){return this.qb(a,b)},
qb(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$h4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.bw(b.d)
k=p.c.db
k===$&&A.A()
o=t.S
n=l.aE("blobGraceMs",o)
n=A.dy(0,n==null?6048e5:n,0)
m=l.aE("tmpGraceMs",o)
j=A
s=3
return A.a(k.bh(n,A.dy(0,m==null?864e5:m,0)),$async$h4)
case 3:q=j.m(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h4,r)},
h3(a,b){return this.q9(a,b)},
q9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$h3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.db
n===$&&A.A()
o=t.S
m=A
s=3
return A.a(n.cD(new A.bw(b.d).b1("maxBytes","file_enforce_storage_cap",o)),$async$h3)
case 3:q=m.m(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h3,r)},
h7(a,b){return this.qj(a,b)},
qj(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$h7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.db
o===$&&A.A()
n=A
s=3
return A.a(o.gkd(),$async$h7)
case 3:q=n.m(["durable",d],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)}}
A.xc.prototype={
$1(a){return this.a.d.mL()},
$S:59}
A.xd.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bW(A.e_(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:case 1:return A.bW(null,0,r)
case 2:return A.bW(o.at(-1),1,r)}})
var s=0,r=A.EU($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.F8(r)},
$S:154}
A.nq.prototype={
j6(a,b){return this.q1(a,b)},
q1(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$j6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.w
n=p.a.kL("PRAGMA journal_mode")
q=A.m(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gG(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j6,r)}}
A.zE.prototype={
jR(){var s=0,r=A.h(t.q),q,p=this,o
var $async$jR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.DM(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jR,r)},
kq(a){return this.wZ(a)},
wZ(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$kq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.DM(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kq,r)}}
A.nr.prototype={
dO(a,b){return this.qM(a,b)},
qM(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dO=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.bw(a5.d)
a2=t.N
a3=a1.aE("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.aw("syncStart requires baseUrl.",null))
s=3
return A.a(p.cA(),$async$dO)
case 3:o=a1.aE("token",a2)
n=a1.aE("scopeId",a2)
if(n==null)n="web-sync"
m=new A.zE(o,n)
l=A.nb(a3)
k=p.c
j=k.dx
i=A.n(j).i("T<1>")
j=A.O(new A.T(j,i),i.i("o.E"))
i=t.hw
h=A.dQ(null,null,i)
g=$.C.h(0,B.dh)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.kT(A.k([],t.kG))
f=new A.uD(f)
e=new A.uV(j,l,m,B.aY,200,25,n,"data",f,h,A.u(a2,t.hU),A.u(a2,i))
e.oC(l,n,25,200,"data",B.aY,m,null)
d=A.BY()
i=A.dQ(null,null,t.n6)
h=A.dQ(null,null,t.em)
f=t.H
j=A.bj(null,f)
c=new A.p_(A.bj(null,f))
b=A.bj(B.N,t.mv)
a=A.k([],t.s)
f=A.bj(null,f)
a0=new A.wg(A.Mp(),k.ch)
f=new A.mV(k,e,a0,new A.xi(a4),B.a3,i,h,j,c,A.aO(a2),b,a,f)
l=f.e=new A.wr(k,B.a.A(A.aq(B.l.v(B.e.v(l.l(0)+"|"+n)).a),0,12))
j=new A.r5(k,e,a0,k.at)
f.x=j
j=new A.v9(k,e,a0,l,j,c)
f.f=j
f.r=new A.we(k,e,a0,l,j)
f.w=new A.vi(k,e,a0,f.gra(),e.Q)
d.b=f
p.w=m
p.r=d.bb()
f=d.bb().ay
p.x=new A.aZ(f,A.n(f).i("aZ<1>")).aT(new A.xj(p,a4))
s=4
return A.a(d.bb().az(),$async$dO)
case 4:s=5
return A.a(e.fQ(),$async$dO)
case 5:q=A.m(["ok",!0,"state",d.bb().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
hf(a,b){return this.qQ(a,b)},
qQ(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hf=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cA(),$async$hf)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
hb(a,b){return this.qE(a,b)},
qE(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.r
if(n==null)throw A.b(A.x("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.d5(),$async$hb)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"blocked",o.e,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
hc(a,b){return this.qG(a,b)},
qG(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.r
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.bs(),$async$hc)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
hd(a,b){return this.qI(a,b)},
qI(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.r
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.bf(),$async$hd)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
he(a,b){return this.qK(a,b)},
qK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$he=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.r
if(n==null)throw A.b(A.x("Sync is not started."))
o=t.y
s=3
return A.a(n.fO(new A.bw(b.d).b1("online","sync_set_connectivity",o)),$async$he)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
hg(a,b){return this.qS(a,b)},
qS(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w
m=p.r
if(n==null||m==null)throw A.b(A.x("Sync is not started."))
o=t.N
n.a=new A.bw(b.d).aE("token",o)
s=3
return A.a(m.ei(),$async$hg)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
jh(a,b){return this.qO(a,b)},
qO(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$jh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.Ft(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jh,r)}}
A.xi.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.e8(A.hX(A.m(["v",3,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.xj.prototype={
$1(a){this.a.y=a
this.b.a.e8(A.hX(A.m(["v",3,"op","sync_status","status",A.Ft(a)],t.N,t.X)))},
$S:155}
A.os.prototype={}
A.ot.prototype={}
A.ou.prototype={}
A.ov.prototype={}
A.q7.prototype={
u1(a){var s,r=null
A.Fd("absolute",A.k([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b2(a)>0&&!s.cH(a)
if(s)return a
s=A.Fo()
return this.mX(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
uK(a){var s,r,q=A.dO(a,this.a)
q.fw()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.ks(s)
q.e.pop()
q.fw()
return q.l(0)},
mX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.k([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Fd("join",s)
return this.wc(new A.bH(s,t.x))},
wc(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.cU(s,new A.q8(),a.$ti.i("cU<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cH(m)&&o){l=A.dO(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.er(k,!0))
l.b=n
if(q.fl(n))l.e[0]=q.gdz()
n=l.l(0)}else if(q.b2(m)>0){o=!q.cH(m)
n=m}else{if(!(m.length!==0&&q.jO(m[0])))if(p)n+=q.gdz()
n+=m}p=q.fl(m)}return n.charCodeAt(0)==0?n:n},
cQ(a,b){var s=A.dO(b,this.a),r=s.d,q=A.a_(r).i("aj<1>")
r=A.O(new A.aj(r,new A.q9(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aC(r,0,q)
return s.d},
el(a){var s
if(!this.r8(a))return a
s=A.dO(a,this.a)
s.ki()
return s.l(0)},
r8(a){var s,r,q,p,o,n,m,l=this.a,k=l.b2(a)
if(k!==0){if(l===$.oR())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cc(n)){if(l===$.oR()&&n===47)return!0
if(q!=null&&l.cc(q))return!0
if(q===46)m=o==null||o===46||l.cc(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cc(q))return!0
if(q===46)l=o==null||l.cc(o)||o===46
else l=!1
if(l)return!0
return!1},
x0(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b2(a)
if(l<=0)return o.el(a)
s=A.Fo()
if(m.b2(s)<=0&&m.b2(a)>0)return o.el(a)
if(m.b2(a)<=0||m.cH(a))a=o.u1(a)
if(m.b2(a)<=0&&m.b2(s)>0)throw A.b(A.Du(n+a+'" from "'+s+'".'))
r=A.dO(s,m)
r.ki()
q=A.dO(a,m)
q.ki()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.km(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.km(l[0],p[0])}else l=!1
if(!l)break
B.b.is(r.d,0)
B.b.is(r.e,1)
B.b.is(q.d,0)
B.b.is(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Du(n+a+'" from "'+s+'".'))
l=t.N
B.b.k9(q.d,0,A.ae(p,"..",!1,l))
p=q.e
p[0]=""
B.b.k9(p,1,A.ae(r.d.length,m.gdz(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga_(m)==="."){B.b.ks(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fw()
return q.l(0)},
n4(a){var s,r,q=this,p=A.EY(a)
if(p.gb_()==="file"&&q.a===$.kt())return p.l(0)
else if(p.gb_()!=="file"&&p.gb_()!==""&&q.a!==$.kt())return p.l(0)
s=q.el(q.a.kl(A.EY(p)))
r=q.x0(s)
return q.cQ(0,r).length>q.cQ(0,s).length?s:r}}
A.q8.prototype={
$1(a){return a!==""},
$S:9}
A.q9.prototype={
$1(a){return a.length!==0},
$S:9}
A.A9.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:156}
A.rV.prototype={
o2(a){var s=this.b2(a)
if(s>0)return B.a.A(a,0,s)
return this.cH(a)?a[0]:null},
km(a,b){return a===b}}
A.me.prototype={
gjK(){var s=this,r=t.N,q=new A.me(s.a,s.b,s.c,A.bF(s.d,!0,r),A.bF(s.e,!0,r))
q.fw()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga_(r)},
fw(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga_(s)===""))break
B.b.ks(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
ki(){var s,r,q,p,o,n=this,m=A.k([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.k9(m,0,A.ae(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.ae(m.length+1,s.gdz(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fl(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.oR())n.b=A.y(r,"/","\\")
n.fw()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.mf.prototype={
l(a){return"PathException: "+this.a},
$iH:1}
A.wd.prototype={
l(a){return this.gaP()}}
A.uX.prototype={
jO(a){return B.a.F(a,"/")},
cc(a){return a===47},
fl(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
er(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b2(a){return this.er(a,!1)},
cH(a){return!1},
kl(a){var s
if(a.gb_()===""||a.gb_()==="file"){s=a.gbr()
return A.C7(s,0,s.length,B.k,!1)}throw A.b(A.N("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaP(){return"posix"},
gdz(){return"/"}}
A.wO.prototype={
jO(a){return B.a.F(a,"/")},
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
p=A.Fr(a,q+1)
return p==null?q:p}}return 0},
b2(a){return this.er(a,!1)},
cH(a){return a.length!==0&&a.charCodeAt(0)===47},
kl(a){return a.l(0)},
gaP(){return"url"},
gdz(){return"/"}}
A.x7.prototype={
jO(a){return B.a.F(a,"/")},
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
if(!A.Fz(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b2(a){return this.er(a,!1)},
cH(a){return this.b2(a)===1},
kl(a){var s,r
if(a.gb_()!==""&&a.gb_()!=="file")throw A.b(A.N("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbr()
if(a.gdf()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Fr(s,1)!=null)s=B.a.kv(s,"/","")}else s="\\\\"+a.gdf()+s
r=A.y(s,"/","\\")
return A.C7(r,0,r.length,B.k,!1)},
ur(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
km(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.ur(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaP(){return"windows"},
gdz(){return"\\"}}
A.vW.prototype={
gm(a){return this.c.length},
gwd(){return this.b.length},
oE(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.I(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ey(a){var s,r=this
if(a<0)throw A.b(A.aX("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aX("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gG(s))return-1
if(a>=B.b.ga_(s))return s.length-1
if(r.qY(a)){s=r.d
s.toString
return s}return r.d=r.oX(a)-1},
qY(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
oX(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iI(a){var s,r,q=this
if(a<0)throw A.b(A.aX("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aX("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.ey(a)
r=q.b[s]
if(r>a)throw A.b(A.aX("Line "+s+" comes after offset "+a+"."))
return a-r},
fK(a){var s,r,q,p
if(a<0)throw A.b(A.aX("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aX("Line "+a+" must be less than the number of lines in the file, "+this.gwd()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aX("Line "+a+" doesn't have 0 columns."))
return q}}
A.lu.prototype={
ga3(){return this.a.a},
gag(){return this.a.ey(this.b)},
gaq(){return this.a.iI(this.b)},
gar(){return this.b}}
A.hu.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gP(){return A.Bg(this.a,this.b)},
gN(){return A.Bg(this.a,this.c)},
gaK(){return A.dS(B.y.T(this.a.c,this.b,this.c),0,null)},
gbe(){var s=this,r=s.a,q=s.c,p=r.ey(q)
if(r.iI(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dS(B.y.T(r.c,r.fK(p),r.fK(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fK(p+1)
return A.dS(B.y.T(r.c,r.fK(r.ey(s.b)),q),0,null)},
Z(a,b){var s
if(!(b instanceof A.hu))return this.ot(0,b)
s=B.c.Z(this.b,b.b)
return s===0?B.c.Z(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hu))return s.os(0,b)
return s.b===b.b&&s.c===b.c&&J.w(s.a.a,b.a.a)},
gJ(a){return A.c5(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idc:1}
A.rr.prototype={
w5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mj(B.b.gG(a1).c)
s=a.e
r=A.ae(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.w(m.c,l)){a.hC("\u2575")
q.a+="\n"
a.mj(l)}else if(m.b+1!==n.b){a.u0("...")
q.a+="\n"}}for(l=n.d,k=A.a_(l).i("bV<1>"),j=new A.bV(l,k),j=new A.ar(j,j.gm(0),k.i("ar<W.E>")),k=k.i("W.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP().gag()!==f.gN().gag()&&f.gP().gag()===i&&a.r_(B.a.A(h,0,f.gP().gaq()))){e=B.b.bO(r,a0)
if(e<0)A.v(A.N(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.u_(i)
q.a+=" "
a.tZ(n,r)
if(s)q.a+=" "
d=B.b.mR(l,new A.rM())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gP().gag()===i?j.gP().gaq():0
a.tX(h,g,j.gN().gag()===i?j.gN().gaq():h.length,p)}else a.hE(h)
q.a+="\n"
if(k)a.tY(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hC("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mj(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hC("\u2577")
else{q.hC("\u250c")
q.bl(new A.rz(q),"\x1b[34m")
s=q.r
r=" "+$.i2().n4(a)
s.a+=r}q.r.a+="\n"},
hA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gP().gag()
i=k?null:l.a.gN().gag()
if(s&&l===c){h.bl(new A.rG(h,j,a),r)
n=!0}else if(n)h.bl(new A.rH(h,l),r)
else if(k)if(g.a)h.bl(new A.rI(h),g.b)
else o.a+=" "
else h.bl(new A.rJ(g,h,c,j,a,l,i),p)}},
tZ(a,b){return this.hA(a,b,null)},
tX(a,b,c,d){var s=this
s.hE(B.a.A(a,0,b))
s.bl(new A.rA(s,a,b,c),d)
s.hE(B.a.A(a,c,a.length))},
tY(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gP().gag()===p.gN().gag()){r.jH()
p=r.r
p.a+=" "
r.hA(a,c,b)
if(c.length!==0)p.a+=" "
r.mk(b,c,r.bl(new A.rB(r,a,b),q))}else{s=a.b
if(p.gP().gag()===s){if(B.b.F(c,b))return
A.Mg(c,b)
r.jH()
p=r.r
p.a+=" "
r.hA(a,c,b)
r.bl(new A.rC(r,a,b),q)
p.a+="\n"}else if(p.gN().gag()===s){p=p.gN().gaq()
if(p===a.a.length){A.FL(c,b)
return}r.jH()
r.r.a+=" "
r.hA(a,c,b)
r.mk(b,c,r.bl(new A.rD(r,!1,a,b),q))
A.FL(c,b)}}},
mi(a,b,c){var s=c?0:1,r=this.r
s=B.a.bi("\u2500",1+b+this.j_(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tW(a,b){return this.mi(a,b,!0)},
mk(a,b,c){this.r.a+="\n"
return},
hE(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),q=this.r,r=r.i("K.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bi(" ",4)
else{p=A.bt(p)
q.a+=p}}},
hD(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bl(new A.rK(s,this,a),"\x1b[34m")},
hC(a){return this.hD(a,null,null)},
u0(a){return this.hD(null,null,a)},
u_(a){return this.hD(null,a,null)},
jH(){return this.hD(null,null,null)},
j_(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
r_(a){var s,r,q
for(s=new A.cj(a),r=t.E,s=new A.ar(s,s.gm(0),r.i("ar<K.E>")),r=r.i("K.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pf(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bl(a,b){return this.pf(a,b,t.z)}}
A.rL.prototype={
$0(){return this.a},
$S:157}
A.rt.prototype={
$1(a){var s=a.d
return new A.aj(s,new A.rs(),A.a_(s).i("aj<1>")).gm(0)},
$S:158}
A.rs.prototype={
$1(a){var s=a.a
return s.gP().gag()!==s.gN().gag()},
$S:39}
A.ru.prototype={
$1(a){return a.c},
$S:241}
A.rw.prototype={
$1(a){var s=a.a.ga3()
return s==null?new A.j():s},
$S:161}
A.rx.prototype={
$2(a,b){return a.a.Z(0,b.a)},
$S:162}
A.ry.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.k([],t.dg)
for(s=J.az(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbe()
n=A.Av(o,p.gaK(),p.gP().gaq())
n.toString
m=B.a.hF("\n",B.a.A(o,0,n)).gm(0)
l=p.gP().gag()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga_(b).b)b.push(new A.cx(j,l,d,A.k([],q)));++l}}i=A.k([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.q)(b),++k){j=b[k]
h&1&&A.I(i,16)
B.b.t8(i,new A.rv(j),!0)
f=i.length
for(q=s.bk(c,g),p=q.$ti,q=new A.ar(q,q.gm(0),p.i("ar<W.E>")),n=j.b,p=p.i("W.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gP().gag()>n)break
i.push(e)}g+=i.length-f
B.b.C(j.d,i)}return b},
$S:163}
A.rv.prototype={
$1(a){return a.a.gN().gag()<this.a.b},
$S:39}
A.rM.prototype={
$1(a){return!0},
$S:39}
A.rz.prototype={
$0(){this.a.r.a+=B.a.bi("\u2500",2)+">"
return null},
$S:0}
A.rG.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:3}
A.rH.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:3}
A.rI.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.rJ.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bl(new A.rE(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bl(new A.rF(r,o),p.b)}}},
$S:3}
A.rE.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:3}
A.rF.prototype={
$0(){this.a.r.a+=this.b},
$S:3}
A.rA.prototype={
$0(){var s=this
return s.a.hE(B.a.A(s.b,s.c,s.d))},
$S:0}
A.rB.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP().gaq(),l=n.gN().gaq()
n=this.b.a
s=q.j_(B.a.A(n,0,m))
r=q.j_(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bi(" ",m))+B.a.bi("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:11}
A.rC.prototype={
$0(){return this.a.tW(this.b,this.c.a.gP().gaq())},
$S:0}
A.rD.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bi("\u2500",3)
else r.mi(s.c,Math.max(s.d.a.gN().gaq()-1,0),!1)
return q.a.length-p.length},
$S:11}
A.rK.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wC(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:3}
A.bq.prototype={
l(a){var s=this.a
s="primary "+(""+s.gP().gag()+":"+s.gP().gaq()+"-"+s.gN().gag()+":"+s.gN().gaq())
return s.charCodeAt(0)==0?s:s}}
A.yI.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Av(o.gbe(),o.gaK(),o.gP().gaq())!=null)){s=A.mK(o.gP().gar(),0,0,o.ga3())
r=o.gN().gar()
q=o.ga3()
p=A.LD(o.gaK(),10)
o=A.vX(s,A.mK(r,A.Eb(o.gaK()),p,q),o.gaK(),o.gaK())}return A.J8(A.Ja(A.J9(o)))},
$S:164}
A.cx.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cr.prototype={
jV(a){var s=this.a
if(!J.w(s,a.ga3()))throw A.b(A.N('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
Z(a,b){var s=this.a
if(!J.w(s,b.ga3()))throw A.b(A.N('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.w(this.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dr(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iau:1,
ga3(){return this.a},
gar(){return this.b},
gag(){return this.c},
gaq(){return this.d}}
A.mL.prototype={
jV(a){if(!J.w(this.a.a,a.ga3()))throw A.b(A.N('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
Z(a,b){if(!J.w(this.a.a,b.ga3()))throw A.b(A.N('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.w(this.a.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dr(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ey(r)+1)+":"+(q.iI(r)+1))+">"},
$iau:1,
$icr:1}
A.mN.prototype={
oF(a,b,c){var s,r=this.b,q=this.a
if(!J.w(r.ga3(),q.ga3()))throw A.b(A.N('Source URLs "'+A.r(q.ga3())+'" and  "'+A.r(r.ga3())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.N("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.jV(r))throw A.b(A.N('Text "'+s+'" must be '+q.jV(r)+" characters long.",null))}},
gP(){return this.a},
gN(){return this.b},
gaK(){return this.c}}
A.mO.prototype={
gkh(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gP().gag()+1)+", column "+(p.gP().gaq()+1)
if(p.ga3()!=null){s=p.ga3()
r=$.i2()
s.toString
s=o+(" of "+r.n4(s))
o=s}o+=": "+this.a
q=p.w6(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iH:1}
A.h0.prototype={
gar(){var s=this.b
s=A.Bg(s.a,s.b)
return s.b},
$ibi:1,
gfP(){return this.c}}
A.h1.prototype={
ga3(){return this.gP().ga3()},
gm(a){return this.gN().gar()-this.gP().gar()},
Z(a,b){var s=this.gP().Z(0,b.gP())
return s===0?this.gN().Z(0,b.gN()):s},
w6(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.Hs(s,a).w5()},
R(a,b){if(b==null)return!1
return b instanceof A.h1&&this.gP().R(0,b.gP())&&this.gN().R(0,b.gN())},
gJ(a){return A.c5(this.gP(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dr(s).l(0)+": from "+s.gP().l(0)+" to "+s.gN().l(0)+' "'+s.gaK()+'">'},
$iau:1}
A.dc.prototype={
gbe(){return this.d}}
A.jg.prototype={
a4(){return"SqliteUpdateKind."+this.b}}
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
p=p!=null?s+(", parameters: "+J.be(p,new A.w1(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iH:1}
A.w1.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a0(a)},
$S:165}
A.kB.prototype={}
A.qy.prototype={
tK(){var s=this,r=s.d
return r==null?s.d=new A.e3(s,A.k([],t.fU),new A.qH(s),new A.qI(s),t.jy):r},
tc(){var s=this,r=s.e
return r==null?s.e=new A.e3(s,A.k([],t.lw),new A.qE(s),new A.qF(s),t.lU):r},
ph(){var s=this,r=s.f
return r==null?s.f=new A.e3(s,A.k([],t.lw),new A.qA(s),new A.qB(s),t.ag):r},
ux(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.v(A.aA(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b0(m))
r=n.a
q=r.e2(s,1)
s=r.d
p=A.Cf(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.da(new A.qJ(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.AX(this,p,o,o,o)},
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
r=s.kR()
q=r!==0?A.Cj(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aD(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.v(A.x("This database has already been closed"))
r=p.b
q=r.a
s=q.e2(B.e.v(a),1)
q=q.d
r=A.Cf(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.AX(p,r,"executing",a,b)}else{s=p.il(a,!0)
try{s.e9(new A.bQ(b))}finally{s.q()}}},
O(a){return this.aD(a,B.m)},
rC(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.v(A.x("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cC(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.x0(r,p,n,o)
l=A.k([],t.lE)
k=new A.qC(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kT(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.AX(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ae(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h3(f,e,new A.dl(!1).cW(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kT(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ae(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h3(f,e,""))
k.$0()
throw A.b(A.aA(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aA(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
il(a,b){var s=this.rC(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aA(a,"sql","Must contain an SQL statement."))
return B.b.gG(s)},
wE(a){return this.il(a,!1)},
o4(a,b){var s,r=this.il(a,!0)
try{s=r.kM(new A.bQ(b))
return s}finally{r.q()}},
kL(a){return this.o4(a,B.m)}}
A.qH.prototype={
$0(){var s=this.a,r=s.b
r.a.mC(r.b,new A.qG(s))},
$S:0}
A.qG.prototype={
$3(a,b,c){var s=A.It(a)
if(s==null)return
this.a.d.jT(new A.cs(s,b,c))},
$S:166}
A.qI.prototype={
$0(){var s=this.a.b
s.a.mC(s.b,null)
return null},
$S:0}
A.qE.prototype={
$0(){var s=this.a,r=s.b
r.a.mB(r.b,new A.qD(s))
return null},
$S:0}
A.qD.prototype={
$0(){this.a.e.jT(null)},
$S:0}
A.qF.prototype={
$0(){var s=this.a.b
s.a.mB(s.b,null)
return null},
$S:0}
A.qA.prototype={
$0(){var s=this.a,r=s.b
r.a.mA(r.b,new A.qz(s))
return null},
$S:0}
A.qz.prototype={
$0(){var s=this.a.f
s.jT(null)
return 0},
$S:11}
A.qB.prototype={
$0(){var s=this.a.b
s.a.mA(s.b,null)
return null},
$S:0}
A.qJ.prototype={
$2(a,b){A.K9(a,this.a,b)},
$S:167}
A.qC.prototype={
$0(){var s,r,q,p,o,n
this.a.q()
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
A.nf.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Ic(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.Ie(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.N("The argument list is unmodifiable",null))},
$ivZ:1}
A.e3.prototype={
gcR(){var s=this.r
return s==null?this.r=this.pZ(!1):s},
pZ(a){return new A.dk(new A.zl(this,!1),this.$ti.i("dk<1>"))},
jT(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.v(o.bE())
if((n&1)!==0)o.gaN().aA(a)}else{n=o.b
if(n>=4)A.v(o.bE())
if((n&1)!==0)o.cv(a)
else if((n&3)===0){n=o.fY()
o=new A.ca(a,o.$ti.i("ca<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sek(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.zl.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.zm(q,a,s)
a.r=a.e=new A.zn(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dL<1>)")}}
A.zm.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.jX(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.zn.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.jX(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.vY.prototype={
mS(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Is(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wv(a,b){var s,r,q,p,o,n,m,l,k,j
this.mS()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e2(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e2(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d6(r.b.buffer,0,null)[B.c.ae(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.wU(r,l,o)
r=r.r
if(r!=null)r.ms(k,l,o)
if(m!==0){j=A.Cj(s,k,m,"opening the database",null,null)
k.kR()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.qy(s,k,!1)}}
A.h3.prototype={
gpg(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.k([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.ns(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dl(!1).cW(o,0,null,!0))}return q},
gtC(){return null},
bA(a,b){A.AX(this.b,a,b,this.d,this.e)},
ls(){if(this.r||this.b.r)throw A.b(A.x(u.f))},
h_(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dn()
if(s!==0?s!==101:q)r.bA(s,"executing statement")},
tl(){var s,r,q,p,o,n,m=this,l=A.k([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.t_(o))
l.push(p)}m.dn()
if(p!==0?p!==101:k)m.bA(p,"selecting from statement")
n=m.gpg()
m.gtC()
k=new A.mx(l,n,B.al)
k.pa()
return k},
t_(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.an(r.Number(s)):A.BX(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oh(a)
case 4:return s.kS(a)
case 5:default:return null}},
p_(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.v(A.aA(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.p0(a[s-1],s)
this.e=a},
p0(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.ax(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aI){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.CO(a).l(0)))
break A}if(A.bJ(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.og(b,a)
break A}if(t.L.b(a)){s=q.a.of(b,a)
break A}s=q.oZ(a,b)
break A}if(s!==0)q.bA(s,"binding parameter")},
oZ(a,b){throw A.b(A.aA(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eC(a){A:{if(a instanceof A.bQ){this.p_(a.a)
break A}if(a instanceof A.lb)a.a.$1(this)}},
dn(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dn()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mF(s.d)}},
kM(a){var s=this
s.ls()
s.dn()
s.eC(a)
return s.tl()},
e9(a){var s=this
s.ls()
s.dn()
s.eC(a)
s.h_()}}
A.lB.prototype={
iD(a,b){return this.d.I(a)?1:0},
kF(a,b){this.d.H(0,a)},
kG(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r=a.a
if(r==null)r=A.Da(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cw(new Uint8Array(0),0))
else throw A.b(A.he(14))
return new A.hB(new A.nS(this,r,(b&8)!==0),0)},
kI(a){}}
A.nS.prototype={
n7(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bN(B.f.ga9(r.a),0,r.b),b)
return s},
kE(){return this.d>=2?1:0},
iE(){if(this.c)this.a.d.H(0,this.b)},
fG(){return this.a.d.h(0,this.b).b},
kH(a){this.d=a},
kJ(a){},
fH(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cw(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kK(a){this.d=a},
ex(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cw(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.au(0,b,s,a)}}
A.AL.prototype={
$1(a){return a.length!==0},
$S:9}
A.qd.prototype={
pa(){var s,r,q,p,o=A.u(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o.j(0,p,B.b.dh(s,p))}this.c=o}}
A.mx.prototype={
gt(a){return new A.z5(this)},
h(a,b){return new A.c6(this,A.d3(this.d[b],t.X))},
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
$iG:1}
A.z5.prototype={
gn(){var s=this.a
return new A.c6(s,A.d3(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.o7.prototype={}
A.o8.prototype={}
A.oa.prototype={}
A.ob.prototype={}
A.ut.prototype={
a4(){return"OpenMode."+this.b}}
A.ei.prototype={}
A.bQ.prototype={}
A.lb.prototype={}
A.dg.prototype={
l(a){return"VfsException("+this.a+")"},
$iH:1}
A.jf.prototype={}
A.b4.prototype={}
A.kQ.prototype={}
A.kP.prototype={
giF(){return 0},
no(a,b){return 12},
giH(){return 4096},
iG(a,b){var s=this.n7(a,b),r=a.length
if(s<r){B.f.jZ(a,s,r,0)
throw A.b(B.dG)}},
$ibn:1,
$ijq:1}
A.eN.prototype={}
A.AW.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.v(A.x("No such element"))
r=s.c
q=r.a
q.toString
q.jD(A.n(r).i("b2.E").a(r))
r.d.$0()}},
$S:0}
A.AU.prototype={
$1(a){var s=this.a,r=s.b
s.hh(s.c,new A.eN(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:21}
A.AV.prototype={
$4(a,b,c,d){this.a.$1(c.f_(d))},
$S:169}
A.wZ.prototype={}
A.wU.prototype={
kR(){var s=this.a,r=s.r
if(r!=null)r.mF(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.x0.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kT(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Cf(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d6(o.b.buffer,0,null)[B.c.ae(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.x_(s,o,n)
o=o.w
if(o!=null)o.ms(r,s,n)}return new A.o5(r,p)}}
A.x_.prototype={
of(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cC(b),J.ak(b))},
og(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cC(s),s.length)},
kS(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.DX(s.b,q.sqlite3_column_blob(r,a),p)},
oh(a){var s=this.c
return A.dW(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dV.prototype={$iBC:1}
A.dh.prototype={$iBD:1}
A.hg.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dh(s,A.d6(s.b.buffer,0,null)[B.c.ae(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.le.prototype={
wo(a){var s,r,q=this.b
q===$&&A.A()
s="[sqlite3] "+A.dW(q,a,null)
r=$.KG
if(r==null)A.FH(s)
else r.$1(s)},
wm(a,b){var s,r=new A.aM(A.li(A.an(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.A()
s=A.Dr(q.buffer,b,8)
s.$flags&2&&A.I(s)
s[0]=A.BA(r)
s[1]=A.By(r)
s[2]=A.Bx(r)
s[3]=A.v0(r)
s[4]=A.Bz(r)-1
s[5]=A.BB(r)-1900
s[6]=B.c.aj(A.I4(r),7)},
ya(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.A()
s=new A.jf(A.BR(j,b,k))
try{r=a.du(s,d)
if(e!==0){p=r.b
o=A.d6(j.buffer,0,k)
n=B.c.ae(e,2)
o.$flags&2&&A.I(o)
o[n]=p}p=A.d6(j.buffer,0,k)
o=B.c.ae(c,2)
p.$flags&2&&A.I(p)
p[o]=0
m=r.a
return m}catch(l){p=A.E(l)
if(p instanceof A.dg){q=p
p=q.a
j=A.d6(j.buffer,0,k)
o=B.c.ae(c,2)
j.$flags&2&&A.I(j)
j[o]=p}else{j=j.buffer
j=A.d6(j,0,k)
p=B.c.ae(c,2)
j.$flags&2&&A.I(j)
j[p]=1}}return k},
xY(a,b,c){var s=this.b
s===$&&A.A()
return A.bY(new A.qj(a,A.dW(s,b,null),c))},
xQ(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bY(new A.qg(this,a,A.dW(s,b,null),c,d))},
y6(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bY(new A.ql(this,a,A.dW(s,b,null),c,d))},
yc(a,b,c){return A.bY(new A.qn(this,c,b,a))},
yh(a,b){return A.bY(new A.qp(a,b))},
xW(a,b){var s,r=Date.now(),q=this.b
q===$&&A.A()
s=v.G.BigInt(r)
A.Bo(A.Dq(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xU(a){return A.bY(new A.qi(a))},
ye(a,b,c,d){return A.bY(new A.qo(this,a,b,c,d))},
yp(a,b,c,d){return A.bY(new A.qt(this,a,b,c,d))},
yl(a,b){return A.bY(new A.qr(a,b))},
yj(a,b){return A.bY(new A.qq(a,b))},
y4(a,b){return A.bY(new A.qk(this,a,b))},
y8(a,b){return A.bY(new A.qm(a,b))},
yn(a,b){return A.bY(new A.qs(a,b))},
xS(a,b){return A.bY(new A.qh(this,a,b))},
xZ(a){return a.giF()},
y0(a,b,c){if(t.j2.b(a))return a.no(b,c)
return 12},
yf(a){if(t.j2.b(a))return a.giH()
return 4096},
uX(a){a.$0()},
uS(a){return a.$0()},
uV(a,b,c,d,e){var s=this.b
s===$&&A.A()
a.$3(b,A.dW(s,d,null),A.an(v.G.Number(e)))},
v2(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dV(s,b),new A.hg(s,c,d))},
v6(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dV(s,b),new A.hg(s,c,d))},
v4(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.A()
null.$2(new A.dV(s,b),new A.hg(s,c,d))},
v8(a,b){var s
null.toString
s=this.a
s===$&&A.A()
null.$1(new A.dV(s,b))},
v0(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.A()
r.$1(new A.dV(s,b))},
uZ(a,b,c,d,e){var s=this.b
s===$&&A.A()
return null.$2(A.BR(s,c,b),A.BR(s,e,d))},
uQ(a,b){return a.$1(b)},
uO(a,b){return a.gyt().$1(b)},
uM(a,b,c){return a.gys().$2(b,c)}}
A.qj.prototype={
$0(){return this.a.kF(this.b,this.c)},
$S:0}
A.qg.prototype={
$0(){var s,r=this,q=r.b.iD(r.c,r.d),p=r.a.b
p===$&&A.A()
p=A.d6(p.buffer,0,null)
s=B.c.ae(r.e,2)
p.$flags&2&&A.I(p)
p[s]=q},
$S:0}
A.ql.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kG(q.c)),o=p.length
if(o>q.d)throw A.b(A.he(14))
s=q.a.b
s===$&&A.A()
s=A.bU(s.buffer,0,null)
r=q.e
B.f.cP(s,r,p)
s.$flags&2&&A.I(s)
s[r+o]=0},
$S:0}
A.qn.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.A()
s=A.bU(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.CM(s,q.b)
else return A.CM(s,null)},
$S:0}
A.qp.prototype={
$0(){this.a.kI(A.dy(this.b,0,0))},
$S:0}
A.qi.prototype={
$0(){return this.a.iE()},
$S:0}
A.qo.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.iG(A.bU(r.buffer,s.c,s.d),A.an(v.G.Number(s.e)))},
$S:0}
A.qt.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.ex(A.bU(r.buffer,s.c,s.d),A.an(v.G.Number(s.e)))},
$S:0}
A.qr.prototype={
$0(){return this.a.fH(A.an(v.G.Number(this.b)))},
$S:0}
A.qq.prototype={
$0(){return this.a.kJ(this.b)},
$S:0}
A.qk.prototype={
$0(){var s,r=this.b.fG(),q=this.a.b
q===$&&A.A()
q=A.d6(q.buffer,0,null)
s=B.c.ae(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.qm.prototype={
$0(){return this.a.kH(this.b)},
$S:0}
A.qs.prototype={
$0(){return this.a.kK(this.b)},
$S:0}
A.qh.prototype={
$0(){var s,r=this.b.kE(),q=this.a.b
q===$&&A.A()
q=A.d6(q.buffer,0,null)
s=B.c.ae(this.c,2)
q.$flags&2&&A.I(q)
q[s]=r},
$S:0}
A.da.prototype={}
A.i7.prototype={
a8(a,b,c,d){var s,r=null,q={},p=A.bc(A.Bo(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.w4(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.p3(q,this,p,o)
o.d=s
o.f=new A.p4(q,o,s)
return new A.b5(o,A.n(o).i("b5<1>")).a8(a,b,c,d)},
bP(a,b,c){return this.a8(a,null,b,c)}}
A.p3.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a5(q,t.m).bU(new A.p5(p,r.b,s,r),s.gu5(),t.P)},
$S:0}
A.p5.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaN().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:23}
A.p4.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaN().e&4)!==0:(r&2)===0)}else s=!1
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
p.b=A.bo(r,"success",new A.ya(p,s),!1,q)
p.c=A.bo(r,"error",new A.yb(p,s),!1,q)
return o}}
A.ya.prototype={
$1(a){var s,r=this.a
r.D()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:2}
A.yb.prototype={
$1(a){var s=this.a
s.D()
s=s.d.error
if(s==null)s=a
this.b.aS(s)},
$S:2}
A.pR.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:2}
A.pS.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:2}
A.pW.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:2}
A.pX.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:2}
A.pY.prototype={
$1(a){this.a.aS(new A.bk("IndexedDB open blocked"))},
$S:2}
A.rb.prototype={
$1(a){return A.bc(a[1])},
$S:191}
A.wV.prototype={
uy(){var s={}
s.dart=new A.wW(this).$0()
return s},
ic(a){return this.wi(a)},
wi(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ic=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(v.G.WebAssembly.instantiateStreaming(a,p.uy()),t.m),$async$ic)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ic,r)}}
A.wW.prototype={
$0(){var s=this.a.a,r=A.bc(v.G.Object),q=A.bc(r.create.apply(r,[null]))
q.error_log=A.cX(s.gwn())
q.localtime=A.bX(s.gwl())
q.xOpen=A.Ca(s.gy9())
q.xDelete=A.oC(s.gxX())
q.xAccess=A.hP(s.gxP())
q.xFullPathname=A.hP(s.gy5())
q.xRandomness=A.oC(s.gyb())
q.xSleep=A.bX(s.gyg())
q.xCurrentTimeInt64=A.bX(s.gxV())
q.xClose=A.cX(s.gxT())
q.xRead=A.hP(s.gyd())
q.xWrite=A.hP(s.gyo())
q.xTruncate=A.bX(s.gyk())
q.xSync=A.bX(s.gyi())
q.xFileSize=A.bX(s.gy3())
q.xLock=A.bX(s.gy7())
q.xUnlock=A.bX(s.gym())
q.xCheckReservedLock=A.bX(s.gxR())
q.xDeviceCharacteristics=A.cX(s.giF())
q.xFileControl=A.oC(s.gy_())
q.xSectorSize=A.cX(s.giH())
q["dispatch_()v"]=A.cX(s.guW())
q["dispatch_()i"]=A.cX(s.guR())
q.dispatch_update=A.Ca(s.guU())
q.dispatch_xFunc=A.hP(s.gv1())
q.dispatch_xStep=A.hP(s.gv5())
q.dispatch_xInverse=A.hP(s.gv3())
q.dispatch_xValue=A.bX(s.gv7())
q.dispatch_xFinal=A.bX(s.gv_())
q.dispatch_compare=A.Ca(s.guY())
q.dispatch_busy=A.bX(s.guP())
q.changeset_apply_filter=A.bX(s.guN())
q.changeset_apply_conflict=A.oC(s.guL())
return q},
$S:35}
A.hf.prototype={}
A.p6.prototype={
ih(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ih=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.t($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cX(new A.p9(o))
new A.am(p,t.h1).aB(A.H3(o,t.m))
s=2
return A.a(p,$async$ih)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$ih,r)},
e0(a,b){return this.te(a,b)},
te(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$e0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Gw(),b)
o=A.Jb(p)
s=2
return A.a(A.Mh(new A.p8(a,o,p),t.mj),$async$e0)
case 2:s=3
return A.a(o.b.a,$async$e0)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$e0,r)},
rA(a){return this.e0(new A.p7(a),"readwrite")}}
A.p9.prototype={
$1(a){var s=A.bc(this.a.result)
if(J.w(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:23}
A.p8.prototype={
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
A.p7.prototype={
$1(a){return this.np(a)},
np(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aV(a),$async$$1)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:28}
A.jN.prototype={
oJ(a){var s=A.A1(new A.yL(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.A1(new A.yM(this))},
js(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.k([a,c],s),A.k([a,b],s))},
rX(a){return this.js(a,9007199254740992,0)},
rY(a,b){return this.js(a,9007199254740992,b)},
ib(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ib=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.u(t.N,t.S)
k=new A.eR(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$ib)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.v(A.x("Await moveNext() first"))
n=o.key
n.toString
A.F(n)
m=o.primaryKey
m.toString
l.j(0,n,A.an(A.f0(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)},
hW(a){return this.vx(a)},
vx(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cC(p.d.index("fileName").getKey(a),t.W),$async$hW)
case 3:q=o.an(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
jt(a){return A.cC(this.d.get(a),t.B).a2(new A.yK(a),t.m)},
ez(a,b){return this.oi(a,b)},
oi(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jt(a),$async$ez)
case 3:h=d
g=h.length
f=new A.cw(new Uint8Array(g),g)
e=new A.eR(p.e.openCursor(p.rX(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ez)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.v(A.x("Await moveNext() first"))
k=n.a(l.key)
j=A.an(A.f0(k[1]))
if(j>=h.length){s=5
break}i=new A.yN(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.vG(A.bc(l.value)).a2(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ez,r)},
hO(a){return this.uv(a)},
uv(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
o=A
s=3
return A.a(A.cC(p.d.put({name:a,length:0}),t.W),$async$hO)
case 3:q=o.an(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
aZ(a,b){return this.xI(a,b)},
xI(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
s=2
return A.a(q.jt(a),$async$aZ)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.O(new A.T(o,n),n.i("o.E"))
B.b.aF(m)
s=3
return A.a(A.Bj(new A.X(m,new A.yO(new A.yP(q,a),b),A.a_(m).i("X<1,z<~>>")),t.H),$async$aZ)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eR(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$aZ)
case 6:s=7
return A.a(A.cC(l.gn().update({name:p.name,length:b.c}),t.X),$async$aZ)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
ds(a,b,c){return this.xj(0,b,c)},
xj(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ds=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
s=2
return A.a(q.jt(b),$async$ds)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cC(q.e.delete(q.rY(b,B.c.M(c,4096)*4096)),t.X),$async$ds)
case 5:case 4:o=new A.eR(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$ds)
case 6:s=7
return A.a(A.cC(o.gn().update({name:p.name,length:c}),t.X),$async$ds)
case 7:return A.e(null,r)}})
return A.f($async$ds,r)},
hR(a){return this.uJ(a)},
uJ(a){var s=0,r=A.h(t.H),q=this,p
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.v(A.x("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.Bj(A.k([A.cC(q.e.delete(q.js(a,9007199254740992,0)),p),A.cC(q.d.delete(a),p)],t.iw),t.H),$async$hR)
case 2:return A.e(null,r)}})
return A.f($async$hR,r)}}
A.yL.prototype={
$0(){this.a.b.an()},
$S:3}
A.yM.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aS(r)},
$S:3}
A.yK.prototype={
$1(a){if(a==null)throw A.b(A.aA(this.a,"fileId","File not found in database"))
else return a},
$S:194}
A.yN.prototype={
$1(a){var s=this.a
s.cP(s,this.b,J.bN(a,0,this.c))},
$S:195}
A.yP.prototype={
nY(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cC(p.openCursor(v.G.IDBKeyRange.only(A.k([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.ga9(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cC(p.put(l,A.k([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cC(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.nY(a,b)},
$S:196}
A.yO.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:197}
A.ym.prototype={
tJ(a,b,c){B.f.cP(this.b.kp(a,new A.yn(this,a)),b,c)},
u9(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.aj(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.tJ(p*4096,o,J.bN(B.f.ga9(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.yn.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cP(s,0,J.bN(B.f.ga9(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:198}
A.o0.prototype={}
A.dD.prototype={
eX(a){var s=this
if(s.e||s.d.a==null)A.v(A.he(10))
if(a.ka(s.x)){s.cz(!0)
return a.d.a}else return A.bj(null,t.H)},
cz(a){return this.tz(a)},
tz(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.af(0)
s=5
return A.a(p.d.rA(n).aY(new A.rP(p,n,a)),$async$cz)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cz,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eX(new A.jL(new A.rQ(),new A.am(new A.t($.C,t.D),t.F)))
p.e=!0
p.cz(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.ga_(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dI(a,b){return this.pW(a,b)},
pW(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dI=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hW(b),$async$dI)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
eR(){var s=0,r=A.h(t.H),q=this,p
var $async$eR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.k([],t.iw)
s=2
return A.a(q.d.e0(new A.rO(q,p),"readonly"),$async$eR)
case 2:s=3
return A.a(A.Hp(p,t.H),$async$eR)
case 3:return A.e(null,r)}})
return A.f($async$eR,r)},
cF(){return this.cz(!1)},
iD(a,b){return this.w.d.I(a)?1:0},
kF(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.eX(new A.jF(s,a,new A.am(new A.t($.C,t.D),t.F)))},
kG(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Da(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.du(new A.jf(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.eX(new A.hq(p,o,new A.am(new A.t($.C,t.D),t.F)))
return new A.hB(new A.nT(p,q.a,o),0)},
kI(a){}}
A.rP.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.v(A.x("Future already completed"))
p.cn(null)}o.cz(this.c)},
$S:3}
A.rQ.prototype={
$1(a){return this.nw(a)},
nw(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:28}
A.rO.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ib(),$async$$1)
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
$S:28}
A.nT.prototype={
iG(a,b){this.b.iG(a,b)},
giF(){return 0},
giH(){return 4096},
kE(){return this.b.d>=2?1:0},
iE(){},
fG(){return this.b.fG()},
kH(a){this.b.d=a
return null},
kJ(a){},
no(a,b){return 12},
fH(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.v(A.he(10))
s.b.fH(a)
if(!r.y.F(0,s.c))r.eX(new A.jL(new A.yJ(s,a),new A.am(new A.t($.C,t.D),t.F)))},
kK(a){this.b.d=a
return null},
ex(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.v(A.he(10))
s=m.c
if(l.y.F(0,s)){m.b.ex(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cw(new Uint8Array(0),0)
q=J.bN(B.f.ga9(r.a),0,r.b)
m.b.ex(a,b)
p=new Uint8Array(a.length)
B.f.cP(p,0,a)
o=A.k([],t.p8)
n=$.C
o.push(new A.o0(b,p))
l.eX(new A.hL(l,s,q,o,new A.am(new A.t(n,t.D),t.F)))},
$ibn:1,
$ijq:1}
A.yJ.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dI(a,o.c),$async$$1)
case 3:q=n.ds(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:28}
A.b6.prototype={
ka(a){a.hh(a.c,this,!1)
return!0}}
A.jL.prototype={
aV(a){return this.w.$1(a)}}
A.jF.prototype={
ka(a){var s,r,q,p
if(!a.gE(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.jF)if(s.x===r)return!1
else s=s.gfo()
else if(s instanceof A.hL){q=s.gfo()
if(s.x===r){p=s.a
p.toString
p.jD(A.n(s).i("b2.E").a(s))}s=q}else if(s instanceof A.hq){if(s.x===r){r=s.a
r.toString
r.jD(A.n(s).i("b2.E").a(s))
return!1}s=s.gfo()}else break}a.hh(a.c,this,!1)
return!0},
aV(a){return this.xb(a)},
xb(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dI(a,o),$async$aV)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.hR(n),$async$aV)
case 3:return A.e(null,r)}})
return A.f($async$aV,r)}}
A.hq.prototype={
aV(a){return this.xa(a)},
xa(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hO(p),$async$aV)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aV,r)}}
A.hL.prototype={
ka(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.hL)if(r.x===s){B.b.C(r.z,this.z)
return!1}else r=r.gfo()
else if(r instanceof A.hq){if(r.x===s)break
r=r.gfo()}else break
a.hh(a.c,this,!1)
return!0},
aV(a){return this.xc(a)},
xc(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.ym(m,A.u(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.q)(m),++o){n=m[o]
l.u9(n.a,n.b)}k=a
s=3
return A.a(q.w.dI(a,q.x),$async$aV)
case 3:s=2
return A.a(k.aZ(c,l),$async$aV)
case 2:return A.e(null,r)}})
return A.f($async$aV,r)}}
A.fu.prototype={
a4(){return"FileType."+this.b}}
A.h_.prototype={
bK(){var s=this.d
if(s!=null)return s
throw A.b(A.x("VFS closed"))},
iD(a,b){var s=$.B0().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bK().bq(s)?1:0},
kF(a,b){var s=$.B0().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bK().fj(s,!1)},
kG(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.du(a,b)
s=$.B0().h(0,p)
if(s==null)return q.e.du(a,b)
r=q.bK()
if(!r.bq(s))if((b&4)!==0){r.de(s).truncate(0)
r.fj(s,!0)}else throw A.b(B.dF)
return new A.hB(new A.og(q,s,(b&8)!==0),0)},
kI(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cK(a,b){return this.wx(a,b)},
cJ(a){return this.cK(a,!1)},
wx(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.vV(a,b)
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
n=q.d=new A.z1(new Uint8Array(2),l,p,o)
if(k){n.fj(B.b_,p.getSize()>0)
n.fj(B.b0,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cK,r)}}
A.vV.prototype={
nT(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.nT(a)},
$S:199}
A.og.prototype={
n7(a,b){return A.D7(this.a.bK().de(this.b),a,{at:b})},
kE(){return this.d>=2?1:0},
iE(){var s=this.a,r=this.b
s.bK().de(r).flush()
if(this.c)s.bK().fj(r,!1)},
fG(){return this.a.bK().de(this.b).getSize()},
kH(a){this.d=a},
kJ(a){this.a.bK().de(this.b).flush()},
fH(a){this.a.bK().de(this.b).truncate(a)},
kK(a){this.d=a},
ex(a,b){if(A.D8(this.a.bK().de(this.b),a,{at:b})<a.length)throw A.b(B.dH)}}
A.z1.prototype={
bq(a){var s=this.a
A.D7(this.b,s,{at:0})
return s[a.a]!==0},
fj(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.I(s)
s[a.a]=r
A.D8(this.b,s,{at:0})},
de(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.wP.prototype={
oG(a,b){var s=this,r=s.c
r.a!==$&&A.cy()
r.a=s
r=t.S
A.yo(new A.wQ(s),r)
A.yo(new A.wR(s),r)
s.r=A.yo(new A.wS(s),r)
s.w=A.yo(new A.wT(s),r)},
e2(a,b){var s=J.L(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bU(this.b.buffer,0,null)
B.f.au(q,r,r+s.gm(a),a)
B.f.jZ(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cC(a){return this.e2(a,0)},
mC(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mA(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mB(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.wQ.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.wR.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.wS.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.wT.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.ie.prototype={}
A.v3.prototype={
oD(a){var s,r=this,q=r.a
q.start()
r.c=A.bo(q,"message",new A.v7(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kv()
q.toString
A.js(q,s,null,null,!1).a2(new A.v8(r),t.P)}},
jg(a){return this.qt(a)},
qt(a){var s=0,r=A.h(t.H),q=this
var $async$jg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.LI(a,new A.v4(q),q.gvW(),new A.v5(q),new A.v6(q))
return A.e(null,r)}})
return A.f($async$jg,r)},
fN(a,b,c){return this.oa(a,b,c,c)},
oa(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fN=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.GU(null))
o=p.e++
n=new A.t($.C,t.a7)
p.f.j(0,o,new A.am(n,t.h1))
a.i=o
p.a.postMessage(a,A.hU(a))
s=3
return A.a(n,$async$fN)
case 3:m=f
if(J.w(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Ig(m))
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
r2(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.D()
s=q.d
if(s!=null)s.D()
for(s=q.f,r=new A.b1(s,s.r,s.e,A.n(s).i("b1<2>"));r.k();)r.d.aS(new A.ic(a))
s.af(0)
p.an()},
lI(){return this.r2(null)}}
A.v7.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lI()
return}this.a.jg(A.bc(a.data))},
$S:2}
A.v8.prototype={
$1(a){this.a.lI()
a.a.an()},
$S:200}
A.v6.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aB(a)},
$S:23}
A.v5.prototype={
$1(a){return this.nM(a)},
nM(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.uT(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bp(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.E(a0)
k=A.ag(a0)
if(!(l instanceof A.ds)){b.console.error("Error in worker: "+J.a0(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.c7){h=A.Hh(b)
g=0}else{g=b instanceof A.ds?1:null
h=null}f={e:J.a0(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.H(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.hU(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:201}
A.v4.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:23}
A.ic.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iH:1}
A.qw.prototype={
cd(a){return this.wj(a)},
wj(a){var s=0,r=A.h(t.n),q
var $async$cd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.wY(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cd,r)}}
A.la.prototype={}
A.qe.prototype={}
A.eL.prototype={}
A.ls.prototype={
ie(){var s=0,r=A.h(t.H),q=this
var $async$ie=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cJ(q.b),$async$ie)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ie,r)},
kr(){var s=0,r=A.h(t.H),q=this
var $async$kr=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kr,r)}}
A.rp.prototype={
xe(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
q_(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.x4.prototype={
$1(a){var s=new A.t($.C,t.D),r=new A.d_(new A.am(s,t.F))
this.a.a=r
this.b.aB(r)
return A.Hq(s)},
$S:202}
A.x5.prototype={
$2(a,b){var s,r,q
A.bc(a)
s=J.w(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.c6(new A.ds("Operation was cancelled"),b)
else q.c6(a,b)}return null},
$S:203}
A.d_.prototype={}
A.lf.prototype={
gum(){if(this.c.a)return!1
return!this.d||this.f!=null},
dD(a){return this.oN(a)},
oN(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dD=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kv()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.js(n,o.a,null,o.gqx(),!0),$async$dD)
case 6:m=c
s=7
return A.a(A.js(n,o.b,a,null,!1),$async$dD)
case 7:l=c
j=o.e
j=j==null?null:j.ie()
s=8
return A.a(j instanceof A.t?j:A.bp(j,t.H),$async$dD)
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
return A.f($async$dD,r)},
qy(){this.n9()},
kg(a,b,c){return this.c.iz(new A.qL(this,a,b,c),b,c)},
n9(){return this.c.kD(new A.qM(this),t.H)}}
A.qL.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dD(r.c).a2(new A.qK(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.qK.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.qM.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kr()
s.a.an()
r.a.an()
p.f=null}},
$S:3}
A.iU.prototype={
iz(a,b,c){return this.xH(a,b,c,c)},
kD(a,b){return this.iz(a,null,b)},
xH(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.w(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.ul(h,p)
if(!p.a){h.a=p.a=!0
q=A.is(a,c).aY(o)
s=1
break}else{n={}
m=new A.t($.C,c.i("t<0>"))
l=new A.am(m,c.i("am<0>"))
n.a=null
h=new A.uk(h,n,l,a,c)
if(!g)n.a=A.bo(b,"abort",new A.uj(n,p,l,h),!1,t.m)
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
B.b.ai(j,0,i,h,n)
B.b.ai(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aY(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iz,r)}}
A.ul.prototype={
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
A.uk.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.D()
r.c.aB(A.is(r.d,r.e))},
$S:0}
A.uj.prototype={
$1(a){var s,r=this
r.a.a.D()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aS(B.ap)}},
$S:2}
A.ej.prototype={
gnf(){var s,r,q,p,o,n=this,m=t.s,l=A.k([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
B.b.C(l,A.k([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.r1.prototype={
$1(a){if(a!=null)return A.F(a)
return null},
$S:204}
A.lW.prototype={
a4(){return"MessageType."+this.b}}
A.vJ.prototype={
uT(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.i1(a,b)
case"connect":return p.k0(a,b)
case"custom":return p.ec(a,b)
case"fileSystemExists":return p.fc(a,b)
case"fileSystemFlush":return p.fd(a,b)
case"fileSystemAccess":return p.fb(a,b)
case"runQuery":return p.i5(a,b)
case"exclusiveLock":return p.i0(a,b)
case"releaseLock":s=p.bx(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.v(A.x("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hZ(a,b)
case"openAdditionalConnection":return p.i2(a,b)
case"updateRequest":return p.i6(a,b)
case"rollbackRequest":return p.i4(a,b)
case"commitRequest":return p.i_(a,b)
case"dedicatedCompatibilityCheck":return p.dL(a,b)
case"sharedCompatibilityCheck":return p.dL(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dL(a,b)
default:r=A.f1(new A.bB(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.t($.C,t.hl)
q.cm(r)
return q}}}
A.dz.prototype={
a4(){return"FileSystemImplementation."+this.b}}
A.cv.prototype={
a4(){return"TypeCode."+this.b},
uB(a){var s=null
switch(this.a){case 0:s=A.v(A.N("Unsupported type code",null))
break
case 1:a=A.an(A.f0(a))
s=a
break
case 2:s=A.BX(t.bJ.a(a).toString(),null)
break
case 3:A.f0(a)
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
A.ek.prototype={
mt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.N("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
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
case 4:g=B.e.v(A.F(h))
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
case 7:f=A.hN(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bA(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mh()},
h(a,b){var s=this.c[b],r=s>=8?B.aD:B.b3[s]
return r.uB(this.a[b])},
j(a,b,c){this.mh()},
mh(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.Ag.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:23}
A.pP.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:2}
A.pQ.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:2}
A.pT.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:2}
A.pU.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:2}
A.pV.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:2}
A.v_.prototype={
v9(){var s,r,q,p
for(s=this.b,r=new A.b1(s,s.r,s.e,A.n(s).i("b1<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.af(0)}}
A.iq.prototype={
a4(){return"FileType."+this.b}}
A.dP.prototype={
a4(){return"StorageMode."+this.b}}
A.fU.prototype={
l(a){return"Remote error: "+this.a},
$iH:1}
A.ds.prototype={}
A.A0.prototype={
$1(a){return A.bc(a.data)},
$S:206}
A.k0.prototype={
D(){var s=this.a
if(s!=null)s.D()
this.a=null}}
A.ho.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.D()
q.d.D()
q.e.D()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)p[n].abort()
B.b.af(p)
p=q.f
if(p!=null)p.b.an()
s=2
return A.a(q.a.f1(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
m9(a){var s=new v.G.AbortController()
a.onabort=A.A1(new A.y2(s))
this.w.push(s)
return s},
kA(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gum()){r=p.m9(b)
o=s.kg(c,r.signal,d).aY(new A.y6(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.x("Requested operation on inactive lock state."))}if(o==null)o=A.is(c,d)
q=p.a.z
return q instanceof A.dD?o.aY(q.gvA()):o},
wu(a){var s=this,r=s.m9(a),q=new A.t($.C,t.hy),p=new A.aH(q,t.ho),o=t.H
A.Bi(s.a.f.kg(new A.y3(s,p),r.signal,o),new A.y4(p),o,t.K)
return q.aY(new A.y5(s,r))}}
A.y2.prototype={
$0(){return this.a.abort()},
$S:0}
A.y6.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:3}
A.y3.prototype={
$0(){var s=this.a,r=s.r++,q=new A.t($.C,t.D)
s.f=new A.a4(r,new A.aH(q,t.h))
this.b.aB(r)
return q},
$S:5}
A.y4.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.c6(a,b)},
$S:12}
A.y5.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:3}
A.hm.prototype={
oI(a,b,c){this.b.a.aY(new A.xN(this))},
dL(a,b){return this.q4(a,b)},
q4(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mw(a),$async$dL)
case 3:q={r:d.gnf(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dL,r)},
k0(a,b){return this.vJ(a,b)},
vJ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$k0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glC()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hU(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k0,r)},
ec(a,b){return this.vK(a,b)},
vK(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ec=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.ln(l)
n=a.r
s=7
return A.a(o.a.gcf(),$async$ec)
case 7:s=6
return A.a(d.cG(p,new A.qe(n)),$async$ec)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cG(p,new A.la(a)),$async$ec)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ec,r)},
i1(a,b){return this.vY(a,b)},
vY(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kD(new A.xS(p,a),t.m),$async$i1)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
i5(a,b){return this.w1(a,b)},
w1(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.a
s=3
return A.a(n.gcf(),$async$i5)
case 3:m=d
q=o.kA(a.z,b,new A.xV(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i5,r)},
i0(a,b){return this.vO(a,b)},
vO(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bx(a).wu(b),$async$i0)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
i_(a,b){return this.vI(a,b)},
vI(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.xP(p,o),a),$async$i_)
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
return A.f($async$i_,r)},
i4(a,b){return this.w0(a,b)},
w0(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.xU(p,o),a),$async$i4)
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
return A.f($async$i4,r)},
i6(a,b){return this.w3(a,b)},
w3(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.xX(p,o),a),$async$i6)
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
return A.f($async$i6,r)},
i2(a,b){return this.vZ(a,b)},
vZ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bx(a).a;++m.w
s=3
return A.a(A.Aj(),$async$i2)
case 3:o=d
n=o.a
p.w.l0(o.b).x.push(A.E7(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
hZ(a,b){return this.vH(a,b)},
vH(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
B.b.H(p.x,o)
s=3
return A.a(o.q(),$async$hZ)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hZ,r)},
fd(a,b){return this.vR(a,b)},
vR(a,b){var s=0,r=A.h(t.m),q,p=this,o
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
fb(a,b){return this.vP(a,b)},
vP(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
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
return A.a(l.kA(null,k,new j.xQ(d,n,m,a),t.m),$async$fb)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fb,r)},
fc(a,b){return this.vQ(a,b)},
vQ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bx(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcN(),$async$fc)
case 4:s=3
return A.a(n.kA(null,m,new l.xR(d,a),t.y),$async$fc)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fc,r)},
dB(a,b,c){return this.ol(a,b,c)},
ol(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dB)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dB,r)},
vX(a){},
e8(a){var s=0,r=A.h(t.X),q,p=this
var $async$e8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fN({r:a,z:null,i:0,d:null,t:"custom"},B.cM,t.m),$async$e8)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e8,r)},
ln(a){return B.b.mN(this.x,new A.xM(a))},
bx(a){var s=a.d
if(s!=null)return this.ln(s)
else throw A.b(A.N("Request requires database id",null))},
$iCV:1}
A.xN.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:B.b.af(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.xS.prototype={
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
m=i.vy(h.d,A.Hk(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcN():m.gcf(),$async$$0)
case 8:l=A.E7(m,null)
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
$S:207}
A.xV.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.x("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ek(s,r,A.bU(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.o5(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.an(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.vo(l,k.s,q)
s=o.d
return A.FD(s.sqlite3_get_autocommit(p)!==0,m,A.an(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:35}
A.xP.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.ph().gcR().aT(new A.xO(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:44}
A.xO.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hU(s))},
$S:60}
A.xU.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.tc().gcR().aT(new A.xT(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:44}
A.xT.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hU(s))},
$S:60}
A.xX.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.tK().gcR().aT(new A.xW(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:210}
A.xW.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hU(s))},
$S:211}
A.xQ.prototype={
$0(){var s,r,q,p=this,o=p.a.du(new A.jf(A.EO(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fH(s.byteLength)
o.ex(A.bU(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fG()
r=new Uint8Array(q)
o.iG(r,0)
q={r:t.a.a(J.GD(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iE()}},
$S:35}
A.xR.prototype={
$0(){return this.a.iD(A.EO(B.b4[this.b.f]),0)===1},
$S:64}
A.xM.prototype={
$1(a){return a.b===this.a},
$S:212}
A.lg.prototype={
gcN(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.is(new A.qP(p),t.H):o,$async$gcN)
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
return A.a(o==null?p.x=A.is(new A.qO(p),t.u):o,$async$gcf)
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
return A.a(q.q(),$async$f1)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f1,r)},
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
if(j!=null)j.v9()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.Cy()
A.Bf(m)
k=l.a.get(m)
if(k==null)A.v(A.x("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.t?j:A.bp(j,t.H),$async$q)
case 6:q.f.n9()
return A.e(null,r)}})
return A.f($async$q,r)},
lO(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a4(s,!0)
p=a.il(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gG(0)).q()
n.j(0,p.d,p)
return new A.a4(p,!0)}return new A.a4(p,!1)},
vo(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aD(b,B.m)
else{s=null
r=null
q=this.lO(a,b)
s=q.a
r=q.b
try{s.e9(new A.lb(c.guk()))}finally{if(r)s.dn()
else s.q()}}},
o5(a,b,c){var s,r=null,q=null,p=this.lO(a,b)
r=p.a
q=p.b
try{s=A.Ih(r,c)
return s}finally{if(q)r.dn()
else r.q()}}}
A.qP.prototype={
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
return A.a(A.vU("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge6()
s=3
break
case 5:case 6:s=10
return A.a(A.lt("drift_db/"+l.c,k===B.ax,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge6()
s=3
break
case 7:s=11
return A.a(A.lD(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge6()
s=3
break
case 8:l.z=A.Bl("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:5}
A.qO.prototype={
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
o.mS()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e2(B.e.v(n.a),1),n,0)
if(m===0)A.v(A.x("could not register vfs"))
$.Cy().j(0,n,m)
s=5
return A.a(l.f.kg(new A.qN(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:57}
A.qN.prototype={
$0(){var s=this.a
return s.a.b.ii(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:57}
A.xe.prototype={
glC(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.oe()
r.Q!==$&&A.AY()
r.Q=s
q=s}return q},
ed(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ed=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cd(A.bZ(A.K8(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ed)
case 7:if(!b){s=6
break}m=h.gn()
s=J.w(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.ie(i.port,i.lockName,null)
n.l0(l)
s=9
break
case 10:s=A.M1(m.t)?11:12
break
case 11:s=13
return A.a(n.mw(m),$async$ed)
case 13:k=b
j.postMessage(k.gnf())
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
l0(a){var s=this,r=A.J2(a,s.d++,s)
s.c.push(r)
r.b.a.aY(new A.xf(s,r))
return r},
mw(a){return this.x.kD(new A.xg(this,a),t.p6)},
cd(a){return this.wk(a)},
wk(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bc(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.x("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bp(n,t.he),$async$cd)
case 5:s=3
break
case 4:o=A.Bi(q.b.cd(m),new A.xh(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cd)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cd,r)},
vy(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.b1(s,s.r,s.e,A.n(s).i("b1<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ax||b===B.aZ
o=A.Bs(t.cj)
n=c===0?null:new A.v_(c,A.dH(null,null,t.N,t.fw))
n=new A.lg(this,r,a,b,d,new A.lf(q+"-outer",q,new A.iU(o),p),n)
s.j(0,r,n)
return n}}
A.xf.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.xg.prototype={
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
return A.a(A.oI(),$async$$0)
case 9:case 8:j=a1
i=A.aO(t.cU)
s=J.w(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glC()
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
return A.a(new A.ht(n,"message",!1,t.d4).gG(0),$async$$0)
case 15:e=b.H0(a.bc(a1.data))
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
return A.a(A.hY(),$async$$0)
case 18:d=b.D(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a4(B.bf,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.Af(c),$async$$0)
case 23:if(a1)i.u(0,new A.a4(B.bg,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.ej(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.xh.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:215}
A.kc.prototype={}
A.nK.prototype={
gmQ(){return new A.ht(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oe.prototype={
gmQ(){return new A.dk(new A.zg(this),t.k8)},
q(){}}
A.zg.prototype={
$1(a){var s=A.k([],t.kG),r=A.k([],t.dw)
r.push(A.bo(this.a.a,"connect",new A.zd(new A.zh(s,r,a)),!1,t.m))
a.r=new A.ze(r)},
$S:216}
A.zh.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bo(a,"message",new A.zf(this.c),!1,t.m))},
$S:2}
A.zf.prototype={
$1(a){this.a.u8(a)},
$S:2}
A.zd.prototype={
$1(a){var s,r=a.ports
r=J.D(t.ip.b(r)?r:new A.bP(r,A.a_(r).i("bP<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:2}
A.ze.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].D()},
$S:3}
A.nL.prototype={
oe(){var s=v.G
if(!("Worker" in s))return null
return new A.yh(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.yh.prototype={}
A.mU.prototype={
gfP(){return A.F(this.c)}}
A.wc.prototype={
gkf(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iJ(a){var s,r=this,q=r.d=J.GG(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
mK(a,b){var s
if(this.iJ(a))return
if(b==null)if(a instanceof A.es)b="/"+a.a+"/"
else{s=J.a0(a)
s=A.y(s,"\\","\\\\")
b='"'+A.y(s,'"','\\"')+'"'}this.lu(b)},
f7(a){return this.mK(a,null)},
vs(){if(this.c===this.b.length)return
this.lu("no more input")},
vn(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.v(A.aX("position must be greater than or equal to 0."))
else if(c>n.length)A.v(A.aX("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.v(A.aX("position plus length must not go beyond the end of the string."))
s=this.a
r=A.k([0],t.t)
q=n.length
p=new A.vW(s,r,new Uint32Array(q))
p.oE(new A.cj(n),s)
o=c+b
if(o>q)A.v(A.aX("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.v(A.aX("Start may not be negative, was "+c+"."))
throw A.b(new A.mU(n,a,new A.hu(p,c,o)))},
lu(a){this.vn("expected "+a+".",0,this.c)}}
A.hb.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Db(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Db(b,this))
s=this.a
s.$flags&2&&A.I(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.I(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lk(b)
B.f.au(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.tH(q)
q=r.a
s=r.b++
q.$flags&2&&A.I(q)
q[s]=b},
lk(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
tH(a){var s=this.lk(null)
B.f.au(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.as(c,0,s,null,null))
s=this.a
if(d instanceof A.cw)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
au(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.nU.prototype={}
A.cw.prototype={}
A.Bd.prototype={}
A.ht.prototype={
a8(a,b,c,d){return A.bo(this.a,this.b,a,!1,this.$ti.c)},
bP(a,b,c){return this.a8(a,null,b,c)}}
A.jJ.prototype={
D(){var s=this,r=A.bj(null,t.H)
if(s.b==null)return r
s.jE()
s.d=s.b=null
return r},
ig(a){var s,r=this
if(r.b==null)throw A.b(A.x("Subscription has been canceled."))
r.jE()
s=A.Fe(new A.yl(a),t.m)
s=s==null?null:A.cX(s)
r.d=s
r.jC()},
bs(){if(this.b==null)return;++this.a
this.jE()},
bf(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jC()},
jC(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jE(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibl:1}
A.yk.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.yl.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.dG.prototype
s.or=s.l
s=A.bD.prototype
s.on=s.mT
s.oo=s.mU
s.oq=s.mW
s.op=s.mV
s=A.b_.prototype
s.iL=s.aA
s.kY=s.aH
s.kZ=s.aR
s=A.di.prototype
s.ou=s.lh
s.ov=s.lx
s.ow=s.m4
s=A.K.prototype
s.kX=s.ai
s=A.aB.prototype
s.kW=s.uj
s=A.k1.prototype
s.ox=s.q
s=A.o.prototype
s.om=s.dt
s=A.kM.prototype
s.kU=s.hX
s=A.fh.prototype
s.kV=s.f2
s=A.h1.prototype
s.ot=s.Z
s.os=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Ki","Hz",52)
r(A,"Kv","I2",11)
q(A,"L3","IO",21)
q(A,"L4","IP",21)
q(A,"L5","IQ",21)
q(A,"L6","Ky",17)
r(A,"Fj","KV",0)
q(A,"L7","Kz",25)
s(A,"L8","KB",14)
r(A,"Ab","KA",0)
p(A,"Ld",5,null,["$5"],["KP"],218,0)
p(A,"Li",4,null,["$1$4","$4"],["A6",function(a,b,c,d){return A.A6(a,b,c,d,t.z)}],219,0)
p(A,"Lk",5,null,["$2$5","$5"],["A7",function(a,b,c,d,e){var i=t.z
return A.A7(a,b,c,d,e,i,i)}],220,0)
p(A,"Lj",6,null,["$3$6"],["Cd"],221,0)
p(A,"Lg",4,null,["$1$4","$4"],["F2",function(a,b,c,d){return A.F2(a,b,c,d,t.z)}],222,0)
p(A,"Lh",4,null,["$2$4","$4"],["F3",function(a,b,c,d){var i=t.z
return A.F3(a,b,c,d,i,i)}],223,0)
p(A,"Lf",4,null,["$3$4","$4"],["F1",function(a,b,c,d){var i=t.z
return A.F1(a,b,c,d,i,i,i)}],224,0)
p(A,"Lb",5,null,["$5"],["KO"],225,0)
p(A,"Ll",4,null,["$4"],["A8"],226,0)
p(A,"La",5,null,["$5"],["KN"],227,0)
p(A,"L9",5,null,["$5"],["KM"],228,0)
p(A,"Le",4,null,["$4"],["KQ"],229,0)
p(A,"Lc",5,null,["$5"],["F0"],230,0)
var j
o(j=A.eO.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
n(A.eP.prototype,"gut",0,1,null,["$2","$1"],["c6","aS"],58,0,0)
m(A.t.prototype,"giY","pm",14)
n(j=A.e2.prototype,"gu5",0,1,null,["$2","$1"],["bz","u6"],58,0,0)
l(j,"goU","aA",16)
m(j,"goQ","aH",14)
o(j,"gpd","aR",0)
o(j=A.dY.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
o(j=A.b_.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
o(A.hs.prototype,"glM","rm",0)
l(j=A.cd.prototype,"gre","rf",16)
m(j,"gri","rj",14)
o(j,"grg","rh",0)
o(j=A.hv.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
l(j,"gj7","j8",16)
m(j,"gjb","jc",183)
o(j,"gj9","ja",0)
o(j=A.hD.prototype,"geJ","bG",0)
o(j,"geK","bH",0)
l(j,"gj7","j8",16)
m(j,"gjb","jc",14)
o(j,"gj9","ja",0)
s(A,"Ch","K1",29)
q(A,"Ci","K2",30)
s(A,"Lq","HH",52)
q(A,"LB","K5",32)
k(j=A.nC.prototype,"gu4","u",16)
o(j,"ge6","q",0)
q(A,"Fn","LV",30)
s(A,"Fm","LU",29)
q(A,"LC","IH",7)
p(A,"M8",2,null,["$1$2","$2"],["FB",function(a,b){return A.FB(a,b,t.o)}],231,0)
m(j=A.lj.prototype,"gvm","X",29)
l(j,"gw4","ab",30)
l(j,"gwa","wb",17)
q(A,"Lo","GT",7)
q(A,"Fl","H8",232)
q(A,"Lv","Hd",233)
q(A,"Lx","Hv",234)
q(A,"Lu","GO",235)
q(A,"Lw","Hj",236)
q(A,"Al","Hc",7)
r(A,"M4","K3",11)
o(A.nF.prototype,"gvC","k_",0)
r(A,"ND","K4",11)
l(A.mg.prototype,"gwO","wP",8)
o(A.mr.prototype,"gjU","f2",0)
o(A.m9.prototype,"gjU","f2",0)
l(j=A.fh.prototype,"grb","rd",36)
o(j,"glV","dZ",5)
q(A,"LM","D5",237)
o(j=A.md.prototype,"grk","rl",0)
l(j,"grn","ro",116)
q(A,"Mi","I0",70)
q(A,"Ls","Ba",239)
l(j=A.mV.prototype,"gvU","vV",36)
l(j,"gvS","vT",126)
o(j,"gra","jp",0)
q(A,"Mp","Iy",70)
q(A,"Lz","oN",15)
q(A,"Ly","Ck",15)
r(A,"M3","KY",174)
q(A,"Mt","IL",160)
m(j=A.nn.prototype,"gq2","dK",1)
m(j,"gq5","h2",1)
m(A.nm.prototype,"gqv","ha",1)
m(j=A.np.prototype,"gqm","je",1)
m(j,"gqo","jf",1)
m(j,"gqq","h8",1)
m(j,"gqk","jd",1)
m(j,"gqc","h5",1)
m(j,"gqe","dM",1)
m(j,"gqg","h6",1)
m(j,"gqa","h4",1)
m(j,"gq8","h3",1)
m(j,"gqi","h7",1)
m(A.nq.prototype,"gq0","j6",1)
m(j=A.nr.prototype,"gqL","dO",1)
m(j,"gqP","hf",1)
m(j,"gqD","hb",1)
m(j,"gqF","hc",1)
m(j,"gqH","hd",1)
m(j,"gqJ","he",1)
m(j,"gqR","hg",1)
m(j,"gqN","jh",1)
l(j=A.le.prototype,"gwn","wo",8)
m(j,"gwl","wm",170)
n(j,"gy9",0,5,null,["$5"],["ya"],171,0,0)
n(j,"gxX",0,3,null,["$3"],["xY"],172,0,0)
n(j,"gxP",0,4,null,["$4"],["xQ"],55,0,0)
n(j,"gy5",0,4,null,["$4"],["y6"],55,0,0)
n(j,"gyb",0,3,null,["$3"],["yc"],208,0,0)
m(j,"gyg","yh",54)
m(j,"gxV","xW",54)
l(j,"gxT","xU",40)
n(j,"gyd",0,4,null,["$4"],["ye"],53,0,0)
n(j,"gyo",0,4,null,["$4"],["yp"],53,0,0)
m(j,"gyk","yl",178)
m(j,"gyi","yj",22)
m(j,"gy3","y4",22)
m(j,"gy7","y8",22)
m(j,"gym","yn",22)
m(j,"gxR","xS",22)
l(j,"giF","xZ",40)
n(j,"gy_",0,3,null,["$3"],["y0"],180,0,0)
l(j,"giH","yf",40)
l(j,"guW","uX",21)
l(j,"guR","uS",181)
n(j,"guU",0,5,null,["$5"],["uV"],182,0,0)
n(j,"gv1",0,4,null,["$4"],["v2"],41,0,0)
n(j,"gv5",0,4,null,["$4"],["v6"],41,0,0)
n(j,"gv3",0,4,null,["$4"],["v4"],41,0,0)
m(j,"gv7","v8",65)
m(j,"gv_","v0",65)
n(j,"guY",0,5,null,["$5"],["uZ"],185,0,0)
m(j,"guP","uQ",186)
m(j,"guN","uO",187)
n(j,"guL",0,3,null,["$3"],["uM"],188,0,0)
o(j=A.dD.prototype,"ge6","q",5)
o(j,"gvA","cF",5)
o(A.h_.prototype,"ge6","q",0)
o(A.lf.prototype,"gqx","qy",0)
l(A.ek.prototype,"guk","mt",205)
l(A.hm.prototype,"gvW","vX",2)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.Bq,J.lF,A.ja,J.fd,A.y8,A.xJ,A.o,A.kW,A.eh,A.U,A.ad,A.K,A.vS,A.ar,A.lU,A.cU,A.lp,A.mW,A.mI,A.ln,A.nl,A.ir,A.n7,A.jn,A.hA,A.iK,A.fn,A.hw,A.cq,A.wC,A.m8,A.im,A.jZ,A.tG,A.bE,A.b1,A.lR,A.es,A.hz,A.nv,A.h5,A.zo,A.nD,A.oq,A.cp,A.nQ,A.on,A.k2,A.jw,A.nx,A.jO,A.ok,A.al,A.aa,A.b_,A.jC,A.mX,A.jM,A.eP,A.cb,A.t,A.nw,A.e2,A.ol,A.jy,A.nt,A.nM,A.yi,A.e1,A.hs,A.cd,A.jI,A.zN,A.zP,A.zO,A.zL,A.zM,A.zK,A.zH,A.oy,A.zG,A.zF,A.zJ,A.zI,A.ox,A.oz,A.ow,A.hM,A.jv,A.nR,A.z_,A.e0,A.nY,A.b2,A.o_,A.op,A.nZ,A.mT,A.kZ,A.aB,A.nz,A.pf,A.ny,A.kX,A.of,A.eQ,A.yX,A.zp,A.or,A.dl,A.aI,A.nP,A.aM,A.aC,A.yj,A.mb,A.jh,A.nO,A.bi,A.lE,A.R,A.V,A.oj,A.ji,A.mA,A.a2,A.k9,A.wM,A.cc,A.lq,A.m7,A.yQ,A.yR,A.lo,A.a3,A.lk,A.iz,A.eu,A.hI,A.hy,A.iJ,A.lj,A.m6,A.n8,A.ck,A.c2,A.rq,A.ps,A.iI,A.jc,A.tV,A.jb,A.vR,A.qf,A.qv,A.y7,A.eg,A.kL,A.kM,A.pb,A.m_,A.fA,A.l3,A.cZ,A.uh,A.vz,A.eC,A.cJ,A.mp,A.vP,A.mu,A.aJ,A.mD,A.jt,A.mP,A.aR,A.a1,A.pp,A.pq,A.pr,A.r2,A.ij,A.pO,A.ii,A.dI,A.tB,A.mQ,A.uW,A.nX,A.nF,A.hn,A.vH,A.wt,A.eZ,A.om,A.hC,A.t_,A.mg,A.d7,A.aY,A.cm,A.y9,A.mo,A.cL,A.vO,A.aV,A.dC,A.fw,A.ep,A.c8,A.pZ,A.c1,A.mC,A.ui,A.co,A.nE,A.hk,A.bG,A.zb,A.fh,A.xk,A.pd,A.fe,A.kR,A.mR,A.ip,A.r5,A.bh,A.tM,A.o1,A.mY,A.pa,A.md,A.uF,A.j3,A.hE,A.uN,A.zi,A.eq,A.dA,A.lz,A.cF,A.dB,A.dR,A.uD,A.p_,A.bf,A.q0,A.mV,A.d4,A.ey,A.u1,A.dK,A.lV,A.z6,A.z4,A.up,A.pc,A.iH,A.j8,A.uu,A.mn,A.v9,A.b3,A.vi,A.bm,A.h7,A.h6,A.we,A.bv,A.h4,A.cK,A.fO,A.j7,A.cB,A.wg,A.j6,A.jm,A.wr,A.cN,A.cn,A.eA,A.wE,A.qw,A.eL,A.hp,A.cT,A.wI,A.hi,A.nk,A.x3,A.j5,A.bw,A.hj,A.nn,A.nm,A.np,A.nq,A.zE,A.nr,A.q7,A.wd,A.me,A.mf,A.vW,A.mL,A.h1,A.rr,A.bq,A.cx,A.cr,A.mO,A.cs,A.c7,A.kB,A.qy,A.e3,A.vY,A.ei,A.b4,A.kP,A.qd,A.oa,A.z5,A.bQ,A.lb,A.dg,A.jf,A.wZ,A.wU,A.x0,A.x_,A.dV,A.dh,A.le,A.da,A.eR,A.wV,A.p6,A.jN,A.ym,A.o0,A.nT,A.z1,A.wP,A.ie,A.vJ,A.ic,A.la,A.ls,A.rp,A.d_,A.lf,A.iU,A.ej,A.v_,A.fU,A.k0,A.ho,A.lg,A.xe,A.kc,A.nL,A.yh,A.wc,A.Bd,A.jJ])
q(J.lF,[J.lH,J.iB,J.aE,J.br,J.fz,J.er,J.dE])
q(J.aE,[J.dG,J.B,A.fG,A.iW])
q(J.dG,[J.mh,J.dU,J.bR])
r(J.lG,A.ja)
r(J.rX,J.B)
q(J.er,[J.iA,J.lI])
q(A.o,[A.dX,A.J,A.cl,A.aj,A.io,A.eI,A.db,A.bH,A.eU,A.nu,A.oi,A.hG,A.et,A.j9])
q(A.dX,[A.ee,A.kd])
r(A.jG,A.ee)
r(A.jD,A.kd)
q(A.eh,[A.pu,A.pn,A.pt,A.rR,A.ws,A.AD,A.AF,A.xr,A.xq,A.zS,A.zR,A.rn,A.ri,A.yq,A.yp,A.yB,A.yE,A.w8,A.w9,A.w6,A.yg,A.yf,A.za,A.yH,A.yc,A.yZ,A.tW,A.yV,A.qc,A.xE,A.rj,A.AH,A.AO,A.AP,A.Ak,A.pi,A.pk,A.pm,A.kO,A.pe,A.zU,A.pg,A.u_,A.Au,A.qa,A.qb,A.vB,A.vx,A.uY,A.AZ,A.w_,A.w0,A.r_,A.qZ,A.r0,A.qY,A.qX,A.qW,A.qV,A.qR,A.qS,A.qT,A.AT,A.tC,A.tF,A.tE,A.tD,A.y0,A.xY,A.wA,A.ww,A.wy,A.wu,A.te,A.tf,A.th,A.tu,A.ti,A.tj,A.tk,A.tl,A.tm,A.tn,A.to,A.tp,A.tq,A.tr,A.tt,A.t3,A.t5,A.t9,A.t1,A.t0,A.t7,A.t6,A.tb,A.tc,A.td,A.ta,A.uc,A.u9,A.ub,A.vq,A.vs,A.vt,A.vu,A.vK,A.vN,A.pK,A.pN,A.pJ,A.pM,A.pH,A.pG,A.pF,A.pL,A.pI,A.pA,A.pz,A.pE,A.pD,A.pB,A.px,A.vD,A.vC,A.xl,A.AN,A.r8,A.r6,A.r9,A.ra,A.tN,A.tP,A.tR,A.tT,A.tO,A.x2,A.uM,A.uI,A.uJ,A.uK,A.uL,A.uG,A.uH,A.uU,A.uQ,A.uR,A.uO,A.uP,A.uT,A.p0,A.p1,A.q2,A.q1,A.wp,A.wh,A.wn,A.wi,A.wj,A.wk,A.Ah,A.Ai,A.u8,A.u2,A.u3,A.u4,A.u5,A.u6,A.ur,A.us,A.uA,A.uy,A.ux,A.uw,A.uz,A.vg,A.va,A.vc,A.ve,A.vj,A.vo,A.wf,A.Aw,A.AS,A.AQ,A.AR,A.tK,A.tL,A.wJ,A.wK,A.AK,A.AB,A.AA,A.Ap,A.xb,A.x9,A.xc,A.xj,A.q8,A.q9,A.A9,A.rt,A.rs,A.ru,A.rw,A.ry,A.rv,A.rM,A.w1,A.qG,A.zl,A.AL,A.AU,A.AV,A.p5,A.ya,A.yb,A.pR,A.pS,A.pW,A.pX,A.pY,A.rb,A.p9,A.p7,A.yK,A.yN,A.yO,A.rQ,A.rO,A.yJ,A.vV,A.wQ,A.wR,A.wS,A.wT,A.v7,A.v8,A.v6,A.v5,A.v4,A.x4,A.qK,A.uj,A.r1,A.Ag,A.pP,A.pQ,A.pT,A.pU,A.pV,A.A0,A.xO,A.xT,A.xW,A.xM,A.zg,A.zh,A.zf,A.zd,A.yk,A.yl])
q(A.pu,[A.xK,A.po,A.q6,A.rY,A.AE,A.zT,A.Aa,A.ro,A.rh,A.yr,A.yC,A.yF,A.xn,A.yG,A.tH,A.tY,A.yY,A.xD,A.zy,A.wN,A.zx,A.zw,A.rl,A.rk,A.ph,A.pj,A.pl,A.kN,A.ug,A.u0,A.A_,A.vA,A.vw,A.uZ,A.vy,A.vQ,A.B_,A.Ae,A.qU,A.ud,A.vv,A.vL,A.vM,A.pC,A.uC,A.uE,A.p2,A.At,A.An,A.wL,A.x6,A.Aq,A.x8,A.rx,A.qJ,A.yP,A.x5,A.y4,A.xh])
r(A.bP,A.jD)
q(A.U,[A.ef,A.bD,A.di,A.nV])
q(A.ad,[A.dF,A.ms,A.de,A.lJ,A.n6,A.mB,A.nN,A.j2,A.iE,A.kG,A.bB,A.cS,A.n5,A.bk,A.l1])
q(A.K,[A.hc,A.mF,A.nf,A.hg,A.ek,A.hb])
r(A.cj,A.hc)
q(A.pt,[A.AJ,A.v1,A.xs,A.xt,A.zr,A.zq,A.zQ,A.xv,A.xw,A.xy,A.xz,A.xx,A.xu,A.rm,A.ys,A.yx,A.yw,A.yu,A.yt,A.yA,A.yz,A.yy,A.yD,A.w7,A.wa,A.w5,A.zk,A.zj,A.xm,A.xI,A.xH,A.z2,A.z0,A.zV,A.zW,A.ye,A.yd,A.z9,A.z8,A.A5,A.zB,A.zA,A.qQ,A.A2,A.A3,A.tZ,A.y1,A.xZ,A.y_,A.wz,A.wx,A.wv,A.tg,A.ts,A.tv,A.tw,A.tx,A.ty,A.tz,A.tA,A.t2,A.t4,A.t8,A.vr,A.r3,A.rN,A.rf,A.re,A.w3,A.pw,A.py,A.wB,A.vE,A.uo,A.r7,A.r4,A.tQ,A.tS,A.uB,A.uS,A.q_,A.q5,A.q4,A.q3,A.wm,A.wl,A.wo,A.vh,A.vb,A.vd,A.vf,A.vk,A.vp,A.vn,A.vm,A.vl,A.wq,A.uv,A.uq,A.tU,A.xd,A.xi,A.rL,A.rz,A.rG,A.rH,A.rI,A.rJ,A.rE,A.rF,A.rA,A.rB,A.rC,A.rD,A.rK,A.yI,A.qH,A.qI,A.qE,A.qD,A.qF,A.qA,A.qz,A.qB,A.qC,A.zm,A.zn,A.AW,A.qj,A.qg,A.ql,A.qn,A.qp,A.qi,A.qo,A.qt,A.qr,A.qq,A.qk,A.qm,A.qs,A.qh,A.p3,A.p4,A.wW,A.p8,A.yL,A.yM,A.yn,A.rP,A.qL,A.qM,A.ul,A.uk,A.y2,A.y6,A.y3,A.y5,A.xN,A.xS,A.xV,A.xP,A.xU,A.xX,A.xQ,A.xR,A.qP,A.qO,A.qN,A.xf,A.xg,A.ze])
q(A.J,[A.W,A.en,A.T,A.ao,A.aN,A.eT,A.jQ])
q(A.W,[A.ct,A.X,A.bV,A.iG,A.nW])
r(A.em,A.cl)
r(A.ik,A.eI)
r(A.fr,A.db)
q(A.hA,[A.o2,A.o3,A.o4])
q(A.o2,[A.a4,A.jW,A.jX,A.hB,A.o5])
r(A.eX,A.o3)
q(A.o4,[A.eY,A.o6])
r(A.k8,A.iK)
r(A.cR,A.k8)
r(A.ig,A.cR)
q(A.fn,[A.aU,A.it])
q(A.cq,[A.ih,A.jY])
r(A.dw,A.ih)
r(A.ix,A.rR)
r(A.j0,A.de)
q(A.ws,[A.w2,A.i9])
q(A.bD,[A.iD,A.iC,A.jP])
r(A.fF,A.fG)
q(A.iW,[A.iV,A.fH])
q(A.fH,[A.jS,A.jU])
r(A.jT,A.jS)
r(A.dN,A.jT)
r(A.jV,A.jU)
r(A.bT,A.jV)
q(A.dN,[A.m1,A.m2])
q(A.bT,[A.m3,A.m4,A.m5,A.iX,A.iY,A.iZ,A.ex])
r(A.k3,A.nN)
q(A.aa,[A.hF,A.jk,A.jH,A.dk,A.jK,A.jB,A.i7,A.ht])
r(A.b5,A.hF)
r(A.aZ,A.b5)
q(A.b_,[A.dY,A.hv,A.hD])
r(A.eO,A.dY)
r(A.jx,A.jC)
q(A.eP,[A.aH,A.am])
q(A.e2,[A.cV,A.hH])
r(A.k_,A.nt)
q(A.nM,[A.ca,A.hr])
r(A.jR,A.cV)
r(A.eV,A.jK)
q(A.ow,[A.nG,A.o9])
q(A.di,[A.dZ,A.jE])
r(A.dj,A.jY)
q(A.mT,[A.k1,A.zs,A.xA,A.oh])
r(A.yT,A.k1)
q(A.kZ,[A.eo,A.kJ,A.rZ])
q(A.eo,[A.kE,A.lP,A.nc])
q(A.aB,[A.oo,A.i8,A.kK,A.lM,A.lL,A.nd,A.jp,A.lw])
q(A.oo,[A.kF,A.lQ])
r(A.xF,A.nz)
q(A.pf,[A.xB,A.hl,A.nC,A.zz])
r(A.xo,A.xB)
r(A.lK,A.iE)
r(A.yU,A.kX)
r(A.yW,A.yX)
r(A.oA,A.or)
r(A.zC,A.oA)
q(A.bB,[A.d9,A.iv])
r(A.nJ,A.k9)
r(A.fZ,A.hI)
r(A.oc,A.lw)
r(A.zc,A.rq)
r(A.od,A.zc)
r(A.kz,A.ps)
r(A.jd,A.vR)
r(A.nH,A.kz)
r(A.lc,A.nH)
r(A.nI,A.tV)
r(A.qu,A.nI)
r(A.mv,A.eg)
r(A.kT,A.kL)
r(A.du,A.jk)
q(A.kM,[A.uf,A.vI])
r(A.jl,A.pb)
r(A.mS,A.jl)
r(A.ia,A.a3)
q(A.cZ,[A.l_,A.l6,A.jr])
q(A.uh,[A.iP,A.iS,A.iQ,A.iT,A.iM,A.iN,A.iL,A.iR,A.iO])
q(A.yj,[A.aW,A.cA,A.dT,A.mi,A.ib,A.dv,A.d1,A.l2,A.lm,A.c3,A.iw,A.ue,A.dM,A.eb,A.c9,A.kI,A.cO,A.i3,A.fJ,A.j1,A.jg,A.ut,A.fu,A.lW,A.dz,A.cv,A.iq,A.dP])
q(A.cJ,[A.iF,A.j_,A.i4,A.i5])
q(A.mu,[A.ma,A.kU,A.lx,A.kY,A.lv,A.my,A.m0,A.mq,A.l9,A.l8,A.ll,A.lA,A.kA,A.lr,A.mE,A.mZ,A.n_,A.n1,A.n3,A.n2,A.n0,A.ni,A.nj,A.nh,A.kC,A.ng,A.ne,A.mm,A.l0,A.mz,A.l5,A.l4,A.mw,A.kx,A.ky,A.l7])
q(A.aJ,[A.fI,A.kV,A.ly,A.fV,A.fW,A.fE,A.fQ,A.fo,A.fp,A.fy,A.fc,A.ft,A.fY,A.fm,A.fl,A.h9,A.hh,A.fN,A.fj])
r(A.oZ,A.r2)
q(A.dI,[A.eK,A.eJ,A.ez,A.fg,A.fL,A.fv,A.cM,A.fT,A.fX,A.eE,A.h2,A.fD,A.fk,A.el,A.fS])
q(A.eE,[A.hd,A.fx])
r(A.lN,A.nX)
q(A.d7,[A.a9,A.c4,A.dt,A.cY])
r(A.fi,A.nE)
q(A.fh,[A.mr,A.m9])
r(A.x1,A.pd)
r(A.uV,A.md)
r(A.xp,A.z4)
q(A.bv,[A.ha,A.eF,A.je,A.c0,A.cE,A.cI,A.fK,A.fM,A.fq,A.ec])
r(A.tJ,A.qw)
r(A.lT,A.eL)
q(A.hj,[A.ju,A.eM])
r(A.os,A.nn)
r(A.ot,A.os)
r(A.ou,A.ot)
r(A.ov,A.ou)
r(A.xa,A.ov)
r(A.rV,A.wd)
q(A.rV,[A.uX,A.wO,A.x7])
r(A.lu,A.mL)
q(A.h1,[A.hu,A.mN])
r(A.h0,A.mO)
r(A.dc,A.mN)
r(A.h3,A.ei)
r(A.kQ,A.b4)
q(A.kQ,[A.lB,A.dD,A.h_])
q(A.kP,[A.nS,A.og])
r(A.o7,A.qd)
r(A.o8,A.o7)
r(A.mx,A.o8)
r(A.ob,A.oa)
r(A.c6,A.ob)
q(A.b2,[A.eN,A.b6])
r(A.hf,A.vY)
q(A.b6,[A.jL,A.jF,A.hq,A.hL])
r(A.v3,A.vJ)
r(A.qe,A.la)
r(A.ds,A.fU)
r(A.hm,A.v3)
q(A.kc,[A.nK,A.oe])
r(A.mU,A.h0)
r(A.nU,A.hb)
r(A.cw,A.nU)
s(A.hc,A.n7)
s(A.kd,A.K)
s(A.jS,A.K)
s(A.jT,A.ir)
s(A.jU,A.K)
s(A.jV,A.ir)
s(A.cV,A.jy)
s(A.hH,A.ol)
s(A.k8,A.op)
s(A.oA,A.mT)
s(A.nH,A.qf)
s(A.nI,A.qv)
s(A.nX,A.pq)
s(A.nE,A.pr)
s(A.os,A.nm)
s(A.ot,A.nq)
s(A.ou,A.nr)
s(A.ov,A.np)
s(A.o7,A.K)
s(A.o8,A.m6)
s(A.oa,A.n8)
s(A.ob,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ab:"double",aT:"num",l:"String",Q:"bool",V:"Null",p:"List",j:"Object",G:"Map",M:"JSObject"},mangledNames:{},types:["~()","z<j?>(no,hi)","~(M)","V()","z<~>(bG)","z<~>()","z<V>(bG)","l(l)","~(i)","Q(l)","fI(~)","i()","V(j,aF)","R<l,@>(@,@)","~(j,aF)","j?(j?)","~(j?)","Q(j?)","Q(@)","z<V>()","z<b3>()","~(~())","i(bn,i)","V(M)","~(p<i>)","~(@)","V(j)","~(@,@)","z<~>(jN)","Q(j?,j?)","i(j?)","~(l,l)","@(@)","0&()","V(@)","M()","~(a1)","z<~>(~)","~(j?,j?)","Q(bq)","i(bn)","~(da,i,i,i)","j?(G<l,j?>)","i(cF)","z<bl<~>>()","@(l)","@()","Q(dC)","z<V>(qx)","z<@>()","~(l,@)","z<i>()","i(@,@)","i(bn,i,i,br)","i(b4,i)","i(b4,i,i,i)","Q(aV)","z<eL>()","~(j[aF?])","~(dd)","~(~)","l(ew)","z<cF>(l)","Q(bh)","Q()","~(da,i)","R<l,j?>(@,@)","Q(c8)","l(G<l,j?>)","z<p<l>>()","ab(i)","z<p<j?>>()","fW(p<G<l,j?>?>)","z<aT?>()","z<l>()","fN(i)","z<p<G<l,j?>?>>()","fm(p<bf>)","fl(bf?)","fE(p<l>)","@(@,l)","fQ(co)","z<p<cL>>()","fY(p<cL>)","0&(l,i?)","h9(~)","Q(hC)","~(G<l,j?>?)","~(p<G<l,j?>>)","~(p<bf>)","fV(G<l,j?>?)","i(c8,c8)","~(l,j?)","l(cm)","l()","Q(cm)","aV()","dC()","fw()","ep()","c8()","z<G<l,j?>?>()","l(@)","z<G<l,j?>?>(l)","Q(i)","l(i,i)","~(aR)","p<G<l,j?>>(co)","~(l,l?)","V(bR,bR)","Q(dT)","z<aa<p<i>>>()","l?(G<l,j?>)","bh()","z<bh>(bG)","i(i)","~(j3)","R<l,dA>(l,h4)","cK(@)","z<@>(bG)","z<co>()","z<dR>(l)","i(dR)","aC(i)","z<V>(~)","bf()","~(cB)","i(i,i)","z<bm>(bm)","bm(bm)","bm(j)","j?(~)","dK/(j?)","z<j?>(j?)","G<l,j?>(p<j?>)","z<i>(bG)","V(~())","l(l,l)","l(i[i])","cN()","cn()","eA()","~(p<ck>)","z<Q>(l)","z<~>(l)","hp()","i(i,cT)","Q(cT)","i(cT)","c1<j?>(@)","Q(c1<j?>)","j?(vZ)","V(@,aF)","~(cZ)","aa<p<i>>()","~(h7)","l(l?)","l?()","i(cx)","Q(l,l)","G<l,j?>(bh)","j(bq)","i(bq,bq)","p<cx>(R<j,p<bq>>)","dc()","l(j?)","~(i,l,i)","~(BC,p<BD>)","i(l)","~(P,at,P,~())","~(br,i)","bn?(b4,i,i,i,i)","i(b4,i,i)","eQ<@,@>(bC<@>)","aM()","G<l,j?>(c6)","V(l,l[j?])","i(+(l,j?),+(l,j?))","i(bn,br)","~(dL<p<i>>)","i(bn,i,i)","i(i())","~(~(i,l,i),i,i,i,br)","~(@,aF)","i(+(l,j),+(l,j))","i(da,i,i,i,i)","i(i(i),i)","i(BH,i)","i(BH,i,i)","~(i,@)","fA()","M(B<j?>)","Q(+(l,j))","Q(cA)","M(M?)","~(ed)","z<~>(i,cQ)","z<~>(i)","cQ()","z<M>(l)","V(d_)","z<V>(M)","M(j)","V(j?,aF)","l?(j?)","~(ei)","M(M)","z<M>()","i(b4?,i,i)","p<cJ>(j?)","z<bl<cs>>()","~(cs)","Q(ho)","Q(aW)","z<ej>()","0&(j?,aF)","~(dL<M>)","p<eC>(j?)","~(P?,at?,P,j,aF)","0^(P?,at?,P,0^())<j?>","0^(P?,at?,P,0^(1^),1^)<j?,j?>","0^(P?,at?,P,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(P,at,P,0^())<j?>","0^(1^)(P,at,P,0^(1^))<j?,j?>","0^(1^,2^)(P,at,P,0^(1^,2^))<j?,j?,j?>","al?(P,at,P,j,aF?)","~(P?,at?,P,~())","dd(P,at,P,aC,~())","dd(P,at,P,aC,~(dd))","~(P,at,P,l)","P(P?,at?,P,jv?,G<j?,j?>?)","0^(0^,0^)<aT>","fo(i)","fp(p<j?>)","fy(p<l>)","fc(aT?)","ft(l)","bh(G<l,j?>)","t<@>?()","bf(G<l,j?>)","fj(i)","j(cx)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a4&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.jW&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.jX&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hB&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.o5&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eX&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eY&&A.FF(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.o6&&A.FF(a,b.a)}}
A.Jx(v.typeUniverse,JSON.parse('{"bR":"dG","mh":"dG","dU":"dG","MM":"fG","B":{"p":["1"],"aE":[],"J":["1"],"M":[],"o":["1"],"b7":["1"]},"lH":{"Q":[],"ah":[]},"iB":{"V":[],"ah":[]},"aE":{"M":[]},"dG":{"aE":[],"M":[]},"lG":{"ja":[]},"rX":{"B":["1"],"p":["1"],"aE":[],"J":["1"],"M":[],"o":["1"],"b7":["1"]},"er":{"ab":[],"aT":[],"au":["aT"]},"iA":{"ab":[],"i":[],"aT":[],"au":["aT"],"ah":[]},"lI":{"ab":[],"aT":[],"au":["aT"],"ah":[]},"dE":{"l":[],"au":["l"],"b7":["@"],"ah":[]},"dX":{"o":["2"]},"ee":{"dX":["1","2"],"o":["2"],"o.E":"2"},"jG":{"ee":["1","2"],"dX":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"jD":{"K":["2"],"p":["2"],"dX":["1","2"],"J":["2"],"o":["2"]},"bP":{"jD":["1","2"],"K":["2"],"p":["2"],"dX":["1","2"],"J":["2"],"o":["2"],"K.E":"2","o.E":"2"},"ef":{"U":["3","4"],"G":["3","4"],"U.V":"4","U.K":"3"},"dF":{"ad":[]},"ms":{"ad":[]},"cj":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"J":{"o":["1"]},"W":{"J":["1"],"o":["1"]},"ct":{"W":["1"],"J":["1"],"o":["1"],"W.E":"1","o.E":"1"},"cl":{"o":["2"],"o.E":"2"},"em":{"cl":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"X":{"W":["2"],"J":["2"],"o":["2"],"W.E":"2","o.E":"2"},"aj":{"o":["1"],"o.E":"1"},"io":{"o":["2"],"o.E":"2"},"eI":{"o":["1"],"o.E":"1"},"ik":{"eI":["1"],"J":["1"],"o":["1"],"o.E":"1"},"db":{"o":["1"],"o.E":"1"},"fr":{"db":["1"],"J":["1"],"o":["1"],"o.E":"1"},"en":{"J":["1"],"o":["1"],"o.E":"1"},"bH":{"o":["1"],"o.E":"1"},"hc":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"bV":{"W":["1"],"J":["1"],"o":["1"],"W.E":"1","o.E":"1"},"ig":{"cR":["1","2"],"G":["1","2"]},"fn":{"G":["1","2"]},"aU":{"fn":["1","2"],"G":["1","2"]},"eU":{"o":["1"],"o.E":"1"},"it":{"fn":["1","2"],"G":["1","2"]},"ih":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"dw":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"j0":{"de":[],"ad":[]},"lJ":{"ad":[]},"n6":{"ad":[]},"m8":{"H":[]},"jZ":{"aF":[]},"mB":{"ad":[]},"bD":{"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"T":{"J":["1"],"o":["1"],"o.E":"1"},"ao":{"J":["1"],"o":["1"],"o.E":"1"},"aN":{"J":["R<1,2>"],"o":["R<1,2>"],"o.E":"R<1,2>"},"iD":{"bD":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"iC":{"bD":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"hz":{"mt":[],"ew":[]},"nu":{"o":["mt"],"o.E":"mt"},"h5":{"ew":[]},"oi":{"o":["ew"],"o.E":"ew"},"fF":{"aE":[],"M":[],"ed":[],"ah":[]},"fG":{"aE":[],"M":[],"ed":[],"ah":[]},"iW":{"aE":[],"M":[]},"oq":{"ed":[]},"iV":{"aE":[],"B8":[],"M":[],"ah":[]},"fH":{"bS":["1"],"aE":[],"M":[],"b7":["1"]},"dN":{"K":["ab"],"p":["ab"],"bS":["ab"],"aE":[],"J":["ab"],"M":[],"b7":["ab"],"o":["ab"]},"bT":{"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"]},"m1":{"dN":[],"rc":[],"K":["ab"],"p":["ab"],"bS":["ab"],"aE":[],"J":["ab"],"M":[],"b7":["ab"],"o":["ab"],"ah":[],"K.E":"ab"},"m2":{"dN":[],"rd":[],"K":["ab"],"p":["ab"],"bS":["ab"],"aE":[],"J":["ab"],"M":[],"b7":["ab"],"o":["ab"],"ah":[],"K.E":"ab"},"m3":{"bT":[],"rS":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"],"ah":[],"K.E":"i"},"m4":{"bT":[],"rT":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"],"ah":[],"K.E":"i"},"m5":{"bT":[],"rU":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"],"ah":[],"K.E":"i"},"iX":{"bT":[],"wF":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"],"ah":[],"K.E":"i"},"iY":{"bT":[],"wG":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"],"ah":[],"K.E":"i"},"iZ":{"bT":[],"wH":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"],"ah":[],"K.E":"i"},"ex":{"bT":[],"cQ":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"M":[],"b7":["i"],"o":["i"],"ah":[],"K.E":"i"},"nN":{"ad":[]},"k3":{"de":[],"ad":[]},"al":{"ad":[]},"t":{"z":["1"]},"dL":{"bC":["1"]},"k2":{"dd":[]},"jw":{"id":["1"]},"hG":{"o":["1"],"o.E":"1"},"aZ":{"b5":["1"],"hF":["1"],"aa":["1"],"aa.T":"1"},"eO":{"dY":["1"],"b_":["1"],"bl":["1"],"b_.T":"1"},"jC":{"bC":["1"]},"jx":{"jC":["1"],"bC":["1"]},"mX":{"H":[]},"j2":{"ad":[]},"eP":{"id":["1"]},"aH":{"eP":["1"],"id":["1"]},"am":{"eP":["1"],"id":["1"]},"jk":{"aa":["1"]},"e2":{"bC":["1"]},"cV":{"jy":["1"],"e2":["1"],"bC":["1"]},"hH":{"e2":["1"],"bC":["1"]},"b5":{"hF":["1"],"aa":["1"],"aa.T":"1"},"dY":{"b_":["1"],"bl":["1"],"b_.T":"1"},"k_":{"nt":["1"]},"b_":{"bl":["1"],"b_.T":"1"},"hF":{"aa":["1"]},"hs":{"bl":["1"]},"jH":{"aa":["1"],"aa.T":"1"},"dk":{"aa":["1"],"aa.T":"1"},"jR":{"cV":["1"],"jy":["1"],"e2":["1"],"dL":["1"],"bC":["1"]},"jK":{"aa":["2"]},"hv":{"b_":["2"],"bl":["2"],"b_.T":"2"},"eV":{"jK":["1","2"],"aa":["2"],"aa.T":"2"},"jI":{"bC":["1"]},"hD":{"b_":["2"],"bl":["2"],"b_.T":"2"},"jB":{"aa":["2"],"aa.T":"2"},"ow":{"P":[]},"nG":{"P":[]},"o9":{"P":[]},"hM":{"at":[]},"di":{"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"dZ":{"di":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"jE":{"di":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"eT":{"J":["1"],"o":["1"],"o.E":"1"},"jP":{"bD":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"dj":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"et":{"o":["1"],"o.E":"1"},"K":{"p":["1"],"J":["1"],"o":["1"]},"U":{"G":["1","2"]},"jQ":{"J":["2"],"o":["2"],"o.E":"2"},"iK":{"G":["1","2"]},"cR":{"G":["1","2"]},"iG":{"W":["1"],"J":["1"],"o":["1"],"W.E":"1","o.E":"1"},"cq":{"eG":["1"],"J":["1"],"o":["1"]},"jY":{"cq":["1"],"eG":["1"],"J":["1"],"o":["1"]},"eQ":{"bC":["1"]},"nV":{"U":["l","@"],"G":["l","@"],"U.V":"@","U.K":"l"},"nW":{"W":["l"],"J":["l"],"o":["l"],"W.E":"l","o.E":"l"},"kE":{"eo":[]},"oo":{"aB":["l","p<i>"]},"kF":{"aB":["l","p<i>"],"aB.T":"p<i>"},"i8":{"aB":["p<i>","l"],"aB.T":"l"},"kK":{"aB":["l","p<i>"],"aB.T":"p<i>"},"iE":{"ad":[]},"lK":{"ad":[]},"lM":{"aB":["j?","l"],"aB.T":"l"},"lL":{"aB":["l","j?"],"aB.T":"j?"},"lP":{"eo":[]},"lQ":{"aB":["l","p<i>"],"aB.T":"p<i>"},"nc":{"eo":[]},"nd":{"aB":["l","p<i>"],"aB.T":"p<i>"},"jp":{"aB":["p<i>","l"],"aB.T":"l"},"CN":{"au":["CN"]},"aM":{"au":["aM"]},"ab":{"aT":[],"au":["aT"]},"aC":{"au":["aC"]},"i":{"aT":[],"au":["aT"]},"p":{"J":["1"],"o":["1"]},"aT":{"au":["aT"]},"mt":{"ew":[]},"eG":{"J":["1"],"o":["1"]},"l":{"au":["l"]},"aI":{"au":["CN"]},"kG":{"ad":[]},"de":{"ad":[]},"bB":{"ad":[]},"d9":{"ad":[]},"iv":{"d9":[],"ad":[]},"cS":{"ad":[]},"n5":{"cS":[],"ad":[]},"bk":{"ad":[]},"l1":{"ad":[]},"mb":{"ad":[]},"jh":{"ad":[]},"nO":{"H":[]},"bi":{"H":[]},"lE":{"cS":[],"H":[],"ad":[]},"oj":{"aF":[]},"j9":{"o":["i"],"o.E":"i"},"k9":{"n9":[]},"cc":{"n9":[]},"nJ":{"n9":[]},"m7":{"H":[]},"rU":{"p":["i"],"J":["i"],"o":["i"]},"cQ":{"p":["i"],"J":["i"],"o":["i"]},"wH":{"p":["i"],"J":["i"],"o":["i"]},"rS":{"p":["i"],"J":["i"],"o":["i"]},"wF":{"p":["i"],"J":["i"],"o":["i"]},"rT":{"p":["i"],"J":["i"],"o":["i"]},"wG":{"p":["i"],"J":["i"],"o":["i"]},"rc":{"p":["ab"],"J":["ab"],"o":["ab"]},"rd":{"p":["ab"],"J":["ab"],"o":["ab"]},"a3":{"G":["2","3"]},"fZ":{"hI":["1","eG<1>"],"hI.E":"1"},"lw":{"aB":["p<i>","ck"]},"oc":{"aB":["p<i>","ck"],"aB.T":"ck"},"jc":{"H":[]},"mF":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"mv":{"H":[]},"kL":{"B9":[]},"kT":{"B9":[]},"du":{"aa":["p<i>"],"aa.T":"p<i>"},"eg":{"H":[]},"mS":{"jl":[]},"ia":{"a3":["l","l","1"],"G":["l","1"],"a3.V":"1","a3.K":"l","a3.C":"l"},"fI":{"aJ":[]},"kV":{"aJ":[]},"ly":{"aJ":[]},"fV":{"aJ":[]},"fW":{"aJ":[]},"fE":{"aJ":[]},"fQ":{"aJ":[]},"fo":{"aJ":[]},"fp":{"aJ":[]},"fy":{"aJ":[]},"fc":{"aJ":[]},"ft":{"aJ":[]},"fY":{"aJ":[]},"fm":{"aJ":[]},"fl":{"aJ":[]},"h9":{"aJ":[]},"hh":{"aJ":[]},"fN":{"aJ":[]},"fj":{"aJ":[]},"l_":{"cZ":[]},"l6":{"cZ":[]},"jr":{"cZ":[]},"iF":{"cJ":[]},"j_":{"cJ":[]},"i4":{"cJ":[]},"i5":{"cJ":[]},"jt":{"H":[]},"ij":{"qx":[]},"dI":{"H":[]},"eK":{"H":[]},"eJ":{"H":[]},"ez":{"H":[]},"fg":{"H":[]},"fL":{"H":[]},"fv":{"H":[]},"cM":{"H":[]},"fT":{"H":[]},"fX":{"H":[]},"eE":{"H":[]},"hd":{"H":[]},"fx":{"H":[]},"h2":{"H":[]},"fD":{"H":[]},"fk":{"H":[]},"el":{"H":[]},"fS":{"H":[]},"eZ":{"H":[]},"a9":{"d7":[]},"c4":{"d7":[]},"dt":{"d7":[]},"cY":{"d7":[]},"hk":{"H":[]},"fe":{"H":[]},"kR":{"H":[]},"o1":{"Dt":[]},"dB":{"H":[]},"d4":{"H":[]},"bv":{"H":[]},"ha":{"H":[]},"eF":{"H":[]},"je":{"H":[]},"c0":{"H":[]},"cE":{"H":[]},"cI":{"H":[]},"fK":{"H":[]},"fM":{"H":[]},"fq":{"H":[]},"ec":{"H":[]},"hp":{"no":[]},"lT":{"eL":[]},"j5":{"H":[]},"ju":{"hj":[]},"eM":{"hj":[]},"mf":{"H":[]},"lu":{"cr":[],"au":["cr"]},"hu":{"dc":[],"au":["mM"]},"cr":{"au":["cr"]},"mL":{"cr":[],"au":["cr"]},"mM":{"au":["mM"]},"mN":{"au":["mM"]},"mO":{"H":[]},"h0":{"bi":[],"H":[]},"h1":{"au":["mM"]},"dc":{"au":["mM"]},"c7":{"H":[]},"vZ":{"p":["j?"],"J":["j?"],"o":["j?"]},"nf":{"K":["j?"],"vZ":[],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"h3":{"ei":[]},"lB":{"b4":[]},"nS":{"jq":[],"bn":[]},"c6":{"U":["l","@"],"G":["l","@"],"U.V":"@","U.K":"l"},"mx":{"K":["c6"],"p":["c6"],"J":["c6"],"o":["c6"],"K.E":"c6"},"dg":{"H":[]},"kQ":{"b4":[]},"kP":{"jq":[],"bn":[]},"eN":{"b2":["eN"],"b2.E":"eN"},"dh":{"BD":[]},"dV":{"BC":[]},"hg":{"K":["dh"],"p":["dh"],"J":["dh"],"o":["dh"],"K.E":"dh"},"i7":{"aa":["1"],"aa.T":"1"},"dD":{"b4":[]},"b6":{"b2":["b6"]},"nT":{"jq":[],"bn":[]},"jL":{"b6":[],"b2":["b6"],"b2.E":"b6"},"jF":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hq":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hL":{"b6":[],"b2":["b6"],"b2.E":"b6"},"h_":{"b4":[]},"og":{"jq":[],"bn":[]},"ic":{"H":[]},"ek":{"K":["j?"],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"fU":{"H":[]},"ds":{"H":[]},"hm":{"CV":[]},"nK":{"kc":["M"]},"oe":{"kc":["M"]},"mU":{"bi":[],"H":[]},"cw":{"hb":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"hb":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"nU":{"hb":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"]},"ht":{"aa":["1"],"aa.T":"1"},"jJ":{"bl":["1"]}}'))
A.Jw(v.typeUniverse,JSON.parse('{"ir":1,"n7":1,"hc":1,"kd":2,"ih":1,"fH":1,"bC":1,"jk":1,"ol":1,"nM":1,"op":2,"iK":2,"jY":1,"k8":2,"kX":1,"kZ":2,"k1":1,"m6":1,"n8":2,"mu":1,"fh":1,"GN":1,"Iu":1,"IC":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("GN<j?>"),bG:s("eb"),om:s("i7<B<j?>>"),hw:s("cB"),lo:s("ed"),fW:s("B8"),fo:s("ia<l>"),iv:s("a1"),eg:s("CV"),dF:s("B9()"),E:s("cj"),bU:s("c1<j?>"),fw:s("ei"),bP:s("au<@>"),p6:s("ej"),br:s("id<M>"),n8:s("bf"),M:s("dw<l>"),lp:s("lg"),O:s("J<@>"),C:s("ad"),fq:s("cZ"),mA:s("H"),eZ:s("ls"),d9:s("aV"),A:s("bh"),k4:s("ip"),pk:s("rc"),kI:s("rd"),Y:s("bi"),gY:s("MI"),nW:s("z<M>"),fr:s("z<dK>"),mj:s("z<V>"),g7:s("z<@>"),fP:s("z<d_?>"),n1:s("z<j?>(no,hi)"),jN:s("z<hf?>"),co:s("dA"),w:s("cF"),cF:s("dD"),m6:s("rS"),bW:s("rT"),jx:s("rU"),nZ:s("iz<@>"),e7:s("o<@>"),gi:s("B<a1>"),aw:s("B<c1<@>>"),oS:s("B<l3>"),i5:s("B<ck>"),mK:s("B<aV>"),iw:s("B<z<~>>"),mr:s("B<dC>"),kG:s("B<M>"),bi:s("B<p<G<l,j?>>>"),h2:s("B<p<j>>"),ae:s("B<p<eC>>"),dO:s("B<p<j?>>"),ic:s("B<G<l,j>>"),d:s("B<G<l,j?>>"),e8:s("B<m_>"),i7:s("B<ey>"),hf:s("B<j>"),ox:s("B<eA>"),fi:s("B<cm>"),my:s("B<cn>"),k:s("B<d7>"),eK:s("B<cJ>"),k1:s("B<fO>"),g2:s("B<j7>"),bo:s("B<j8>"),cM:s("B<eC>"),gc:s("B<mp>"),eb:s("B<aR>"),fU:s("B<+controller,sync(dL<cs>,Q)>"),lw:s("B<+controller,sync(dL<~>,Q)>"),kC:s("B<+(dP,l)>"),jO:s("B<+(l,G<l,j?>)>"),l5:s("B<+(l,j)>"),fj:s("B<+(l,aV?)>"),iE:s("B<+(l,j?)>"),aY:s("B<+(hn,j?,j?,aF?)>"),g1:s("B<cK>"),cP:s("B<mD>"),kj:s("B<cL>"),lE:s("B<h3>"),c0:s("B<c8>"),dw:s("B<bl<@>>"),s:s("B<l>"),en:s("B<h6>"),bs:s("B<cQ>"),fC:s("B<aY>"),az:s("B<hm>"),i4:s("B<hn>"),fV:s("B<ho>"),pg:s("B<bq>"),dg:s("B<cx>"),p8:s("B<o0>"),mc:s("B<hC>"),gy:s("B<hE>"),gk:s("B<ab>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<al?>"),eU:s("B<G<l,j?>?>"),c:s("B<j?>"),mf:s("B<l?>"),iy:s("b7<@>"),T:s("iB"),m:s("M"),bJ:s("br"),g:s("bR"),dX:s("bS<@>"),aq:s("aE"),fZ:s("lN"),kk:s("et<eN>"),p3:s("et<b6>"),hI:s("eu<@>"),ba:s("p<bf>"),ck:s("p<bh>"),ip:s("p<M>"),ew:s("p<G<l,j>>"),J:s("p<G<l,j?>>"),eT:s("p<ey>"),hg:s("p<eA>"),a6:s("p<cn>"),jX:s("p<j7>"),kR:s("p<cK>"),fE:s("p<cL>"),i:s("p<l>"),bR:s("p<h6>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<G<l,j?>?>"),kS:s("p<j?>"),jD:s("iH"),ia:s("R<l,dA>"),af:s("R<l,l>"),I:s("R<l,@>"),eB:s("R<l,j?>"),a3:s("iJ<@,@>"),cy:s("G<l,cN>"),dV:s("G<l,i>"),f:s("G<@,@>"),G:s("G<l,j?>"),d2:s("G<j?,j?>"),iZ:s("X<l,@>"),r:s("dK"),a:s("fF"),dQ:s("dN"),aj:s("bT"),Z:s("ex"),P:s("V"),K:s("j"),k5:s("cm"),dZ:s("cn"),i0:s("co"),jS:s("d7"),ot:s("mn"),gq:s("fO"),e:s("b3"),b0:s("d9"),lZ:s("MO"),oZ:s("aR"),aK:s("+()"),ja:s("+(M,ie)"),hP:s("+(G<l,cN>,G<l,G<l,j?>>)"),cU:s("+(dP,l)"),mk:s("+(Q,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(Q,Q)"),mt:s("+(M?,M)"),po:s("+(j?,i)"),g0:s("+(G<l,j?>?,cN?,cn?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mt"),Q:s("cK"),V:s("aJ"),hF:s("bV<l>"),cu:s("fZ<@>"),aJ:s("eG<l>"),g_:s("h_"),hq:s("cr"),ol:s("dc"),gE:s("mP"),l:s("aF"),ls:s("Iu<j?>"),nv:s("mQ"),h3:s("h4"),ha:s("bl<cs>"),dz:s("bl<@>"),ey:s("bl<~>"),bv:s("mR"),ku:s("aa<p<i>>"),lI:s("dR"),hL:s("jl"),N:s("l"),f_:s("h6"),k6:s("jm"),n6:s("c9"),mv:s("bm"),nw:s("cN"),em:s("h7"),hU:s("dd"),q:s("mY"),dH:s("ah"),do:s("de"),nL:s("IC<j?>"),hM:s("wF"),mC:s("wG"),oR:s("cw"),nn:s("wH"),p:s("cQ"),cx:s("dU"),ph:s("cR<l,l>"),eo:s("cS"),oc:s("cT"),jJ:s("n9"),e6:s("b4"),j2:s("jq"),n:s("hf"),fA:s("aY"),gx:s("aj<cA>"),mz:s("aj<aW>"),mE:s("aj<dT>"),x:s("bH<l>"),u:s("eL"),bp:s("eM"),be:s("no"),ec:s("hj"),iq:s("aH<cQ>"),jk:s("aH<@>"),ho:s("aH<i>"),h:s("aH<~>"),oW:s("eQ<@,@>"),R:s("eR<M>"),d4:s("ht<M>"),nI:s("t<d_>"),a7:s("t<M>"),hl:s("t<0&>"),os:s("t<l>"),jz:s("t<cQ>"),g5:s("t<Q>"),_:s("t<@>"),hy:s("t<i>"),jQ:s("t<i?>"),D:s("t<~>"),nf:s("bq"),mp:s("dZ<j?,j?>"),mB:s("hy"),k8:s("dk<M>"),fb:s("dk<p<i>>"),mI:s("of<ck>"),jy:s("e3<cs,~()>"),ag:s("e3<~,Q()>"),lU:s("e3<~,~()>"),hT:s("cd<M>"),lj:s("cd<p<i>>"),aP:s("am<d_>"),h1:s("am<M>"),ex:s("am<Q>"),F:s("am<~>"),g8:s("om"),y:s("Q"),W:s("ab"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aF)"),S:s("i"),ma:s("bf?"),gK:s("z<V>?"),b3:s("d_?"),B:s("M?"),bE:s("p<c1<@>>?"),lH:s("p<@>?"),b:s("G<l,j?>?"),nh:s("dK?"),X:s("j?"),ad:s("Dt?"),dY:s("cn?"),lY:s("j6?"),jB:s("cK?"),v:s("l?"),f8:s("cN?"),a_:s("cw?"),he:s("hf?"),dd:s("bq?"),o9:s("Q?"),dA:s("ab?"),U:s("i?"),jh:s("aT?"),o:s("aT"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aF)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.c7=J.lF.prototype
B.b=J.B.prototype
B.c=J.iA.prototype
B.x=J.er.prototype
B.a=J.dE.prototype
B.c8=J.bR.prototype
B.c9=J.aE.prototype
B.az=A.iV.prototype
B.cN=A.iX.prototype
B.y=A.iY.prototype
B.f=A.ex.prototype
B.b9=J.mh.prototype
B.aK=J.dU.prototype
B.ap=new A.ds("Operation was cancelled")
B.a5=new A.i3(0,"visible")
B.aN=new A.i3(1,"hidden")
B.bs=new A.kB(1)
B.dV=new A.kB(-1)
B.a6=new A.eb(0,"applied")
B.a7=new A.eb(1,"quarantined")
B.bt=new A.eb(2,"conflict")
B.a8=new A.eb(3,"skipped")
B.bu=new A.kF(127)
B.a9=new A.kI(0,"changed")
B.aO=new A.kI(1,"deleted")
B.bw=new A.i8(!1)
B.aq=new A.kJ(B.bw)
B.bx=new A.i8(!0)
B.bv=new A.kJ(B.bx)
B.bS=new A.jH(A.ac("jH<p<i>>"))
B.by=new A.du(B.bS)
B.bz=new A.ix(A.M8(),A.ac("ix<i>"))
B.ar=new A.kK()
B.bA=new A.kU()
B.bB=new A.kY()
B.F={}
B.Y=new A.aU(B.F,[],A.ac("aU<l,j>"))
B.e1=new A.ue(0,"conflict")
B.dW=new A.pZ()
B.aP=new A.qu()
B.bC=new A.lk(A.ac("lk<0&>"))
B.t=new A.lj()
B.aQ=new A.ln(A.ac("ln<0&>"))
B.aR=new A.lo()
B.O=new A.lo()
B.bD=new A.lx()
B.bE=new A.lE()
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

B.h=new A.rZ()
B.bL=new A.tJ()
B.bM=new A.iH()
B.o=new A.fI()
B.bN=new A.mb()
B.bO=new A.mm()
B.d=new A.vS()
B.k=new A.nc()
B.e=new A.nd()
B.bP=new A.ne()
B.bQ=new A.ng()
B.bR=new A.xp()
B.u=new A.y7()
B.aa=new A.yi()
B.as=new A.yQ()
B.aU=new A.eZ()
B.i=new A.o9()
B.l=new A.oc()
B.P=new A.oj()
B.ab=new A.dv(0,"create")
B.A=new A.dv(1,"update")
B.bT=new A.dv(2,"archive")
B.bU=new A.dv(3,"restore")
B.aV=new A.dv(4,"purge")
B.bV=new A.dv(5,"hide")
B.H=new A.ib(0,"local")
B.at=new A.ib(1,"remote")
B.ac=new A.ib(2,"resolution")
B.bW=new A.l2(3,"ignore")
B.Q=new A.l2(4,"replace")
B.p=new A.lm(0,"normal")
B.aW=new A.lm(1,"full")
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
B.bY=new A.ip(!1)
B.ax=new A.dz("x",1,"opfsExternalLocks")
B.aZ=new A.dz("y",2,"opfsExternalLocksWorkaround")
B.b_=new A.fu("/database",0,"database")
B.b0=new A.fu("/database-journal",1,"journal")
B.c3=new A.bi("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.c4=new A.bi("fieldCipher envelope must be a map.",null,null)
B.ay=new A.aU(B.F,[],A.ac("aU<l,l>"))
B.c5=new A.ep(B.ay)
B.b1=new A.iw(0,"live")
B.ca=new A.lL(null)
B.cb=new A.lM(null)
B.cc=new A.d1(0,"textExpected")
B.cd=new A.d1(1,"intExpected")
B.ce=new A.d1(2,"numberExpected")
B.cf=new A.d1(3,"boolExpected")
B.cg=new A.d1(4,"jsonExpected")
B.ch=new A.d1(5,"jsonListExpected")
B.ci=new A.d1(6,"enumValueRejected")
B.cj=new A.lQ(255)
B.af=new A.eu(B.bC,A.ac("eu<l>"))
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
B.cm=s([B.a5,B.aN],A.ac("B<i3>"))
B.bc=new A.aW(0,"eq")
B.cV=new A.aW(1,"neq")
B.cZ=new A.aW(2,"gt")
B.d_=new A.aW(3,"gte")
B.d0=new A.aW(4,"lt")
B.d1=new A.aW(5,"lte")
B.d2=new A.aW(6,"inValues")
B.d3=new A.aW(7,"between")
B.d4=new A.aW(8,"startsWith")
B.d5=new A.aW(9,"endsWith")
B.cW=new A.aW(10,"contains")
B.cX=new A.aW(11,"isNull")
B.cY=new A.aW(12,"isNotNull")
B.cn=s([B.bc,B.cV,B.cZ,B.d_,B.d0,B.d1,B.d2,B.d3,B.d4,B.d5,B.cW,B.cX,B.cY],A.ac("B<aW>"))
B.c1=new A.iq(0,"database")
B.c2=new A.iq(1,"journal")
B.b4=s([B.c1,B.c2],A.ac("B<iq>"))
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
B.c6=new A.iw(1,"notArchived")
B.cq=s([B.b1,B.c6],A.ac("B<iw>"))
B.cr=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b7=new A.j1(0,"fileUpload")
B.b8=new A.j1(1,"fileRemove")
B.cs=s([B.b7,B.b8],A.ac("B<j1>"))
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
B.v=new A.fJ(0,"upsert")
B.L=new A.fJ(1,"archive")
B.a0=new A.fJ(2,"restore")
B.cx=s([B.v,B.L,B.a0],A.ac("B<fJ>"))
B.cz=s([],A.ac("B<dA>"))
B.b5=s([],t.d)
B.cB=s([],t.my)
B.cy=s([],t.kj)
B.q=s([],t.s)
B.cA=s([],t.t)
B.aj=s([],t.dG)
B.m=s([],t.c)
B.cC=s(["*"],t.s)
B.cD=s([B.b_,B.b0],A.ac("B<fu>"))
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
B.cJ=new A.it([16,10,24,12,32,14],A.ac("it<i,i>"))
B.cR={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.lP()
B.r=new A.kE()
B.cK=new A.aU(B.cR,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.k,B.k],A.ac("aU<l,eo>"))
B.al=new A.aU(B.F,[],A.ac("aU<l,i>"))
B.n=new A.aU(B.F,[],A.ac("aU<l,j?>"))
B.am=new A.aU(B.F,[],A.ac("aU<i,G<l,j?>(G<l,j?>)>"))
B.cM=new A.lW(11,"simpleSuccessResponse",A.ac("lW<M>"))
B.Z=new A.dM(0,"createOrUpdate")
B.a_=new A.dM(1,"createOrUpdateMerge")
B.b6=new A.dM(2,"create")
B.K=new A.dM(3,"update")
B.C=new A.dM(4,"archive")
B.E=new A.dM(5,"restore")
B.e2=new A.ut(2,"readWriteCreate")
B.cS=new A.cm("id",!1)
B.cT=new A.co(B.b5,null,null,!1,!1)
B.ba=new A.mi(0,"native")
B.aA=new A.mi(1,"web")
B.M=new A.b3(0,1,0,0,0,!1)
B.an=new A.b3(0,0,0,0,0,!0)
B.a1=new A.b3(0,0,0,0,0,!1)
B.cU=new A.b3(0,0,0,1,0,!1)
B.bb=new A.b3(0,0,1,0,0,!1)
B.a2=new A.b3(1,0,0,0,0,!1)
B.d6=new A.a4("archived",!0)
B.d7=new A.a4("0",B.m)
B.aB=new A.jW(!1,!1)
B.d8=new A.eX(0,0,0)
B.d9=new A.eX(null,null,null)
B.cP={open:0,close:1,capabilities:2,sync_start:3,sync_stop:4,sync_now:5,sync_status:6,auth_required:7,sync_pause:8,sync_resume:9,sync_update_auth:10,sync_set_connectivity:11,file_upload_begin:12,file_upload_chunk:13,file_upload_finish:14,file_upload_abort:15,file_list:16,file_open:17,file_remove:18,file_gc:19,file_enforce_storage_cap:20,file_storage_status:21,contract_request:22,contract_event:23}
B.da=new A.dw(B.cP,24,t.M)
B.cQ={hidden:0}
B.db=new A.dw(B.cQ,1,t.M)
B.cO={id:0,archived:1,hidden:2,extra:3}
B.bd=new A.dw(B.cO,4,t.M)
B.be=new A.dw(B.F,0,t.M)
B.dc=new A.jg(0,"insert")
B.dd=new A.jg(1,"update")
B.de=new A.jg(2,"delete")
B.dg=new A.jm(-1,null)
B.dh=new A.jn("_clientToken")
B.a3=new A.c9(0,"closed")
B.di=new A.c9(1,"opening")
B.bh=new A.c9(2,"offline")
B.aC=new A.c9(3,"authRequired")
B.bi=new A.c9(4,"idle")
B.dj=new A.c9(5,"pulling")
B.dk=new A.c9(6,"pushing")
B.dl=new A.c9(7,"backoff")
B.bj=new A.c9(8,"paused")
B.N=new A.bm(B.al,B.al,0,0,0,0,!1)
B.dp=A.bM("kz")
B.dq=A.bM("ed")
B.dr=A.bM("B8")
B.ds=A.bM("rc")
B.dt=A.bM("rd")
B.du=A.bM("rS")
B.dv=A.bM("rT")
B.dw=A.bM("rU")
B.dx=A.bM("M")
B.dy=A.bM("j")
B.dz=A.bM("jd")
B.dA=A.bM("wF")
B.dB=A.bM("wG")
B.dC=A.bM("wH")
B.dD=A.bM("cQ")
B.aL=new A.jp(!1)
B.dE=new A.jp(!0)
B.dF=new A.dg(14)
B.dG=new A.dg(522)
B.dH=new A.dg(778)
B.dI=new A.zF(B.i,A.L9())
B.dJ=new A.zG(B.i,A.La())
B.dK=new A.zH(B.i,A.Lb())
B.dL=new A.zI(B.i,A.Lc())
B.dM=new A.ox(B.i,A.Ld())
B.dN=new A.zJ(B.i,A.Le())
B.dO=new A.zK(B.i,A.Lf())
B.dP=new A.zL(B.i,A.Lg())
B.dQ=new A.zM(B.i,A.Lh())
B.dR=new A.zO(B.i,A.Lj())
B.dS=new A.zP(B.i,A.Lk())
B.dT=new A.zN(B.i,A.Li())
B.dU=new A.oy(B.i,A.Ll())
B.cL=new A.aU(B.F,[],A.ac("aU<j?,j?>"))
B.aM=new A.oz(B.i,B.cL)})();(function staticFields(){$.yS=null
$.f2=A.k([],t.hf)
$.KG=null
$.Dw=null
$.v2=0
$.mk=A.Kv()
$.CT=null
$.CS=null
$.Fy=null
$.Fg=null
$.FI=null
$.As=null
$.AG=null
$.Co=null
$.z3=A.k([],A.ac("B<p<j>?>"))
$.hQ=null
$.kf=null
$.kg=null
$.Cc=!1
$.C=B.i
$.z7=null
$.E1=null
$.E2=null
$.E3=null
$.E4=null
$.BS=A.xL("_lastQuoRemDigits")
$.BT=A.xL("_lastQuoRemUsed")
$.jA=A.xL("_lastRemUsed")
$.BU=A.xL("_lastRem_nsh")
$.DR=""
$.DS=null
$.fP=function(){var s=t.N
return A.u(s,s)}()
$.EK=null
$.zZ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ME","FZ",()=>A.Ay("_$dart_dartClosure"))
s($,"MD","f9",()=>A.Ay("_$dart_dartClosure_dartJSInterop"))
s($,"Nh","oS",()=>A.um(0))
s($,"NF","Gy",()=>B.i.aW(new A.AJ(),A.ac("z<~>")))
s($,"Nz","Gv",()=>A.k([new J.lG()],A.ac("B<ja>")))
s($,"MW","G2",()=>A.df(A.wD({
toString:function(){return"$receiver$"}})))
s($,"MX","G3",()=>A.df(A.wD({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"MY","G4",()=>A.df(A.wD(null)))
s($,"MZ","G5",()=>A.df(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"N1","G8",()=>A.df(A.wD(void 0)))
s($,"N2","G9",()=>A.df(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"N0","G7",()=>A.df(A.DO(null)))
s($,"N_","G6",()=>A.df(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"N4","Gb",()=>A.df(A.DO(void 0)))
s($,"N3","Ga",()=>A.df(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"N7","Cz",()=>A.IN())
s($,"MK","e9",()=>$.Gy())
s($,"MJ","G_",()=>A.J5(!1,B.i,t.y))
s($,"Nn","Gl",()=>A.um(4096))
s($,"Nl","Gj",()=>new A.zB().$0())
s($,"Nm","Gk",()=>new A.zA().$0())
s($,"N9","CA",()=>A.HW(A.b0(A.k([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"N8","Gc",()=>A.um(0))
s($,"Ng","ch",()=>A.jz(0))
s($,"Ne","fa",()=>A.jz(1))
s($,"Nf","Gf",()=>A.jz(2))
s($,"Nc","CC",()=>$.fa().bB(0))
s($,"Na","CB",()=>A.jz(1e4))
r($,"Nd","Ge",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Nb","Gd",()=>A.um(8))
s($,"Ni","Gg",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Nj","Gh",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Nk","Gi",()=>typeof URLSearchParams=="function")
s($,"Nq","fb",()=>A.kn(B.dy))
s($,"MP","ks",()=>{A.I5()
return $.v2})
s($,"Nr","Go",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"MN","B1",()=>{var q=new A.yR(A.HV(8))
q.oK()
return q})
s($,"MF","kr",()=>A.GS(B.cN.ga9(A.HX(A.b0(A.k([1],t.t)))),0,null).getInt8(0)===1?B.O:B.aR)
s($,"Mw","Cu",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Nt","B2",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"ML","G0",()=>A.DB())
s($,"No","CD",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"Np","Gm",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"NH","Gz",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Ns","Gp",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Nw","Gs",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Nv","Gr",()=>A.af("\\\\(.)",!0,!1))
s($,"NE","Gx",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"NI","GA",()=>A.af("(?:"+$.Gp().a+")*",!0,!1))
s($,"Ny","Gu",()=>A.DC())
s($,"NG","oT",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"Ke","Gn",()=>A.H9().a)
s($,"MG","Cw",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"MB","FX",()=>A.Be("declaredNames",t.aJ))
s($,"MC","FY",()=>A.Be("fieldByName",A.ac("G<l,aV>")))
s($,"MV","ku",()=>new A.j())
s($,"MA","Cv",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"Nu","Gq",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"NB","i2",()=>new A.q7($.Cx()))
s($,"MS","G1",()=>new A.uX(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"MU","oR",()=>new A.x7(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"MT","kt",()=>new A.wO(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"MR","Cx",()=>A.Ix())
s($,"Mz","FW",()=>$.fa().bC(0,63).bB(0))
s($,"My","FV",()=>{var q=$.fa()
return q.bC(0,63).fR(0,q)})
s($,"Mx","oQ",()=>A.DC())
s($,"N5","Cy",()=>A.Be(null,t.S))
s($,"NA","Gw",()=>A.HJ(A.k([A.BL("files"),A.BL("blocks")],t.s)))
s($,"MH","B0",()=>{var q,p,o=A.u(t.N,A.ac("fu"))
for(q=0;q<2;++q){p=B.cD[q]
o.j(0,p.c,p)}return o})
s($,"Nx","Gt",()=>A.DB())
r($,"N6","kv",()=>{var q="navigator"
return A.HA(A.HB(A.Cm(A.FN(),q),A.BL("locks")))?A.Cm(A.Cm(A.FN(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fG,ArrayBuffer:A.fF,ArrayBufferView:A.iW,DataView:A.iV,Float32Array:A.m1,Float64Array:A.m2,Int16Array:A.m3,Int32Array:A.m4,Int8Array:A.m5,Uint16Array:A.iX,Uint32Array:A.iY,Uint8ClampedArray:A.iZ,CanvasPixelArray:A.iZ,Uint8Array:A.ex})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fH.$nativeSuperclassTag="ArrayBufferView"
A.jS.$nativeSuperclassTag="ArrayBufferView"
A.jT.$nativeSuperclassTag="ArrayBufferView"
A.dN.$nativeSuperclassTag="ArrayBufferView"
A.jU.$nativeSuperclassTag="ArrayBufferView"
A.jV.$nativeSuperclassTag="ArrayBufferView"
A.bT.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.M6
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
