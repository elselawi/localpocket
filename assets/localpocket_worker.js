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
if(a[b]!==s){A.MK(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Cx(b)
return new s(c,this)}:function(){if(s===null)s=A.Cx(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Cx(a).prototype
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
CI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
AR(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.CG==null){A.Mf()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.E5("Return interceptor for "+A.q(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.z6
if(o==null)o=$.z6=A.AQ(n)
p=q[o]}if(p!=null)return p
p=A.Mp(a)
if(p!=null)return p
if(typeof a=="function")return B.c7
s=Object.getPrototypeOf(a)
if(s==null)return B.b8
if(s===Object.prototype)return B.b8
if(typeof q=="function"){o=$.z6
if(o==null)o=$.z6=A.AQ(n)
Object.defineProperty(q,o,{value:B.aM,enumerable:false,writable:true,configurable:true})
return B.aM}return B.aM},
BE(a,b){if(a<0||a>4294967295)throw A.b(A.at(a,0,4294967295,"length",null))
return J.Dy(new Array(a),b)},
Dx(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
Dw(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("B<0>"))},
Dy(a,b){var s=A.l(a,b.i("B<0>"))
s.$flags=1
return s},
HX(a,b){return J.CY(a,b)},
Dz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
I_(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Dz(r))break;++b}return b},
DA(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Dz(r))break}return b},
dq(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iB.prototype
return J.lF.prototype}if(typeof a=="string")return J.dC.prototype
if(a==null)return J.iC.prototype
if(typeof a=="boolean")return J.lE.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.AR(a)},
L(a){if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.AR(a)},
aB(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.AR(a)},
M7(a){if(typeof a=="number")return J.ev.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dV.prototype
return a},
M8(a){if(typeof a=="number")return J.ev.prototype
if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dV.prototype
return a},
AP(a){if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dV.prototype
return a},
ko(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.AR(a)},
v(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dq(a).S(a,b)},
S(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.FW(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
c1(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.FW(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aB(a).j(a,b,c)},
aK(a,b){return J.aB(a).u(a,b)},
Bl(a,b){return J.aB(a).E(a,b)},
Bm(a,b){return J.AP(a).i7(a,b)},
oV(a){return J.ko(a).n0(a)},
CW(a,b,c){return J.ko(a).i8(a,b,c)},
CX(a,b,c){return J.ko(a).n1(a,b,c)},
GX(a){return J.ko(a).n2(a)},
bN(a,b,c){return J.ko(a).i9(a,b,c)},
i2(a,b){return J.aB(a).ic(a,b)},
GY(a,b,c){return J.M7(a).bS(a,b,c)},
CY(a,b){return J.M8(a).a1(a,b)},
Bn(a,b){return J.L(a).G(a,b)},
oW(a,b){return J.aB(a).a8(a,b)},
kz(a,b){return J.aB(a).cJ(a,b)},
GZ(a){return J.ko(a).ga9(a)},
c2(a){return J.aB(a).gD(a)},
a8(a){return J.dq(a).gJ(a)},
bz(a){return J.L(a).gF(a)},
ed(a){return J.L(a).gW(a)},
D(a){return J.aB(a).gt(a)},
oX(a){return J.aB(a).ga_(a)},
ai(a){return J.L(a).gm(a)},
bp(a){return J.dq(a).gan(a)},
Bo(a){return J.aB(a).gar(a)},
H_(a,b,c){return J.aB(a).fR(a,b,c)},
H0(a,b,c){return J.aB(a).aE(a,b,c)},
aL(a,b,c){return J.aB(a).cg(a,b,c)},
H1(a,b,c){return J.AP(a).en(a,b,c)},
H2(a,b){return J.L(a).sm(a,b)},
H3(a,b,c,d,e){return J.aB(a).al(a,b,c,d,e)},
oY(a,b){return J.aB(a).bj(a,b)},
CZ(a,b){return J.aB(a).cm(a,b)},
H4(a,b){return J.AP(a).cV(a,b)},
H5(a,b){return J.AP(a).T(a,b)},
H6(a,b,c){return J.aB(a).U(a,b,c)},
oZ(a,b){return J.aB(a).cQ(a,b)},
H7(a){return J.aB(a).dz(a)},
a_(a){return J.dq(a).l(a)},
D_(a,b){return J.aB(a).dC(a,b)},
D0(a,b){return J.aB(a).lf(a,b)},
lC:function lC(){},
lE:function lE(){},
iC:function iC(){},
aF:function aF(){},
dE:function dE(){},
md:function md(){},
dV:function dV(){},
bR:function bR(){},
bq:function bq(){},
fA:function fA(){},
B:function B(a){this.$ti=a},
lD:function lD(){},
t_:function t_(a){this.$ti=a},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ev:function ev(){},
iB:function iB(){},
lF:function lF(){},
dC:function dC(){}},A={BH:function BH(){},
fk(a,b,c){if(t.O.b(a))return new A.jI(a,b.i("@<0>").V(c).i("jI<1,2>"))
return new A.ei(a,b.i("@<0>").V(c).i("ei<1,2>"))},
DC(a){return new A.dD("Field '"+a+"' has been assigned during initialization.")},
DD(a){return new A.dD("Field '"+a+"' has not been initialized.")},
I3(a){return new A.dD("Field '"+a+"' has already been initialized.")},
fT(a){return new A.mo(a)},
AU(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ax(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ha(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
c_(a,b,c){return a},
CH(a){var s,r
for(s=$.f8.length,r=0;r<s;++r)if(a===$.f8[r])return!0
return!1},
cw(a,b,c,d){A.bb(b,"start")
if(c!=null){A.bb(c,"end")
if(b>c)A.u(A.at(b,0,c,"start",null))}return new A.cv(a,b,c,d.i("cv<0>"))},
dJ(a,b,c,d){if(t.O.b(a))return new A.eq(a,b,c.i("@<0>").V(d).i("eq<1,2>"))
return new A.cn(a,b,c.i("@<0>").V(d).i("cn<1,2>"))},
E_(a,b,c){var s="takeCount"
A.kE(b,s)
A.bb(b,s)
if(t.O.b(a))return new A.il(a,b,c.i("il<0>"))
return new A.eL(a,b,c.i("eL<0>"))},
DY(a,b,c){var s="count"
if(t.O.b(a)){A.kE(b,s)
A.bb(b,s)
return new A.fs(a,b,c.i("fs<0>"))}A.kE(b,s)
A.bb(b,s)
return new A.db(a,b,c.i("db<0>"))},
aE(){return new A.bj("No element")},
iz(){return new A.bj("Too many elements")},
Du(){return new A.bj("Too few elements")},
mE(a,b,c,d){if(c-b<=32)A.IM(a,b,c,d)
else A.IL(a,b,c,d)},
IM(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.L(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
IL(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.N(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.N(a4+a5,2),e=f-i,d=f+i,c=J.L(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.mE(a3,a4,r-2,a6)
A.mE(a3,q+2,a5,a6)
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
break}}A.mE(a3,r,q,a6)}else A.mE(a3,r,q,a6)},
yn:function yn(a){this.a=0
this.b=a},
xY:function xY(a){this.a=0
this.b=a},
dY:function dY(){},
kX:function kX(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b){this.a=a
this.$ti=b},
jI:function jI(a,b){this.a=a
this.$ti=b},
jF:function jF(){},
xZ:function xZ(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){this.a=a
this.$ti=b},
pp:function pp(a,b){this.a=a
this.b=b},
po:function po(a){this.a=a},
dD:function dD(a){this.a=a},
mo:function mo(a){this.a=a},
ck:function ck(a){this.a=a},
B0:function B0(){},
vM:function vM(){},
K:function K(){},
V:function V(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cn:function cn(a,b,c){this.a=a
this.b=b
this.$ti=c},
eq:function eq(a,b,c){this.a=a
this.b=b
this.$ti=c},
lR:function lR(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(a,b,c){this.a=a
this.b=b
this.$ti=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
ip:function ip(a,b,c){this.a=a
this.b=b
this.$ti=c},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eL:function eL(a,b,c){this.a=a
this.b=b
this.$ti=c},
il:function il(a,b,c){this.a=a
this.b=b
this.$ti=c},
mR:function mR(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
mD:function mD(a,b,c){this.a=a
this.b=b
this.$ti=c},
er:function er(a){this.$ti=a},
lk:function lk(a){this.$ti=a},
bI:function bI(a,b){this.a=a
this.$ti=b},
ng:function ng(a,b){this.a=a
this.$ti=b},
is:function is(){},
n1:function n1(){},
he:function he(){},
bW:function bW(a,b){this.a=a
this.$ti=b},
jq:function jq(a){this.a=a},
kf:function kf(){},
Hq(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bT(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aY(q,A.bT(new A.ar(a,m.i("ar<2>")),!0,c),b.i("@<0>").V(c).i("aY<1,2>"))
n.$keys=l
return n}return new A.ig(A.ba(a,b,c),b.i("@<0>").V(c).i("ig<1,2>"))},
Hr(){throw A.b(A.Z("Cannot modify unmodifiable Map"))},
Hs(){throw A.b(A.Z("Cannot modify constant Set"))},
Gf(a){var s=A.Ge(a)
if(s!=null)return s
return"minified:"+a},
FW(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a_(a)
return s},
eF(a){var s,r=$.DN
if(r==null)r=$.DN=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
j6(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
Iu(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.ck(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mf(a){var s,r,q,p
if(a instanceof A.j)return A.bw(A.by(a),null)
s=J.dq(a)
if(s===B.c6||s===B.c8||t.cx.b(a)){r=B.aU(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bw(A.by(a),null)},
DP(a){var s,r,q
if(a==null||typeof a=="number"||A.bv(a))return J.a_(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.el)return a.l(0)
if(a instanceof A.f1)return a.mR(!0)
s=$.GR()
for(r=0;r<1;++r){q=s[r].yQ(a)
if(q!=null)return q}return"Instance of '"+A.mf(a)+"'"},
Iq(){return Date.now()},
It(){var s,r
if($.uX!==0)return
$.uX=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.uX=1e6
$.mg=new A.uW(r)},
Ip(){if(!!self.location)return self.location.href
return null},
DM(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Iv(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(!A.an(q))throw A.b(A.fa(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ah(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fa(q))}return A.DM(p)},
DQ(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.an(q))throw A.b(A.fa(q))
if(q<0)throw A.b(A.fa(q))
if(q>65535)return A.Iv(a)}return A.DM(a)},
Iw(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bs(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ah(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.at(a,0,1114111,null,null))},
Ix(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.am(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.N(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
br(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
BS(a){return a.c?A.br(a).getUTCFullYear()+0:A.br(a).getFullYear()+0},
BQ(a){return a.c?A.br(a).getUTCMonth()+1:A.br(a).getMonth()+1},
uV(a){return a.c?A.br(a).getUTCDate()+0:A.br(a).getDate()+0},
BO(a){return a.c?A.br(a).getUTCHours()+0:A.br(a).getHours()+0},
BP(a){return a.c?A.br(a).getUTCMinutes()+0:A.br(a).getMinutes()+0},
BR(a){return a.c?A.br(a).getUTCSeconds()+0:A.br(a).getSeconds()+0},
DO(a){return a.c?A.br(a).getUTCMilliseconds()+0:A.br(a).getMilliseconds()+0},
Is(a){return B.c.am((a.c?A.br(a).getUTCDay()+0:A.br(a).getDay()+0)+6,7)+1},
Ir(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
mh(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aJ(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
AH(a,b){var s,r="index"
if(!A.an(b))return new A.bA(!0,b,r,null)
s=J.ai(a)
if(b<0||b>=s)return A.lz(b,s,a,null,r)
return A.vz(b,r)},
M_(a,b,c){if(a<0||a>c)return A.at(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.at(b,a,c,"end",null)
return new A.bA(!0,b,"end",null)},
fa(a){return new A.bA(!0,a,null,null)},
b(a){return A.aJ(a,new Error())},
aJ(a,b){var s
if(a==null)a=new A.de()
b.dartException=a
s=A.ML
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ML(){return J.a_(this.dartException)},
u(a,b){throw A.aJ(a,b==null?new Error():b)},
J(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.u(A.Ku(a,b,c),s)},
Ku(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cV("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.b(A.aA(a))},
df(a){var s,r,q,p,o,n
a=A.G4(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ww(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
wx(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
E4(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
BI(a,b){var s=b==null,r=s?null:b.method
return new A.lG(a,r,s?null:b.receiver)},
E(a){if(a==null)return new A.m5(a)
if(a instanceof A.io)return A.eb(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.eb(a,a.dartException)
return A.Lo(a)},
eb(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Lo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ah(r,16)&8191)===10)switch(q){case 438:return A.eb(a,A.BI(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.eb(a,new A.j1())}}if(a instanceof TypeError){p=$.Go()
o=$.Gp()
n=$.Gq()
m=$.Gr()
l=$.Gu()
k=$.Gv()
j=$.Gt()
$.Gs()
i=$.Gx()
h=$.Gw()
g=p.bW(s)
if(g!=null)return A.eb(a,A.BI(s,g))
else{g=o.bW(s)
if(g!=null){g.method="call"
return A.eb(a,A.BI(s,g))}else if(n.bW(s)!=null||m.bW(s)!=null||l.bW(s)!=null||k.bW(s)!=null||j.bW(s)!=null||m.bW(s)!=null||i.bW(s)!=null||h.bW(s)!=null)return A.eb(a,new A.j1())}return A.eb(a,new A.n0(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jk()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eb(a,new A.bA(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jk()
return a},
ad(a){var s
if(a instanceof A.io)return a.b
if(a==null)return new A.k0(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.k0(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kq(a){if(a==null)return J.a8(a)
if(typeof a=="object")return A.eF(a)
return J.a8(a)},
LQ(a){if(typeof a=="number")return B.x.gJ(a)
if(a instanceof A.ol)return A.eF(a)
if(a instanceof A.f1)return a.gJ(a)
if(a instanceof A.jq)return a.gJ(0)
return A.kq(a)},
FS(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
M5(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
KH(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Dk("Unsupported number of arguments for wrapped closure"))},
e8(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.LV(a,b)
a.$identity=s
return s},
LV(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.KH)},
Hk(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.vX().constructor.prototype):Object.create(new A.i9(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.De(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Hg(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.De(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Hg(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Hb)}throw A.b("Error in functionType of tearoff")},
Hh(a,b,c,d){var s=A.Db
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
De(a,b,c,d){if(c)return A.Hj(a,b,d)
return A.Hh(b.length,d,a,b)},
Hi(a,b,c,d){var s=A.Db,r=A.Hc
switch(b?-1:a){case 0:throw A.b(new A.mw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Hj(a,b,c){var s,r
if($.D9==null)$.D9=A.D8("interceptor")
if($.Da==null)$.Da=A.D8("receiver")
s=b.length
r=A.Hi(s,c,a,b)
return r},
Cx(a){return A.Hk(a)},
Hb(a,b){return A.k9(v.typeUniverse,A.by(a.a),b)},
Db(a){return a.a},
Hc(a){return a.b},
D8(a){var s,r,q,p=new A.i9("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
AQ(a){return v.getIsolateTag(a)},
MP(a,b){var s=$.C
if(s===B.i)return a
return s.ib(a,b)},
G8(){return v.G},
NW(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Mp(a){var s,r,q,p,o,n=$.FU.$1(a),m=$.AI[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.AY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Fx.$2(a,n)
if(q!=null){m=$.AI[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.AY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.B_(s)
$.AI[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.AY[n]=s
return s}if(p==="-"){o=A.B_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.G1(a,s)
if(p==="*")throw A.b(A.E5(n))
if(v.leafTags[n]===true){o=A.B_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.G1(a,s)},
G1(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.CI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
B_(a){return J.CI(a,!1,null,!!a.$ibS)},
Mr(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.B_(s)
else return J.CI(s,c,null,null)},
Mf(){if(!0===$.CG)return
$.CG=!0
A.Mg()},
Mg(){var s,r,q,p,o,n,m,l
$.AI=Object.create(null)
$.AY=Object.create(null)
A.Me()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.G3.$1(o)
if(n!=null){m=A.Mr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Me(){var s,r,q,p,o,n,m=B.bE()
m=A.hT(B.bF,A.hT(B.bG,A.hT(B.aV,A.hT(B.aV,A.hT(B.bH,A.hT(B.bI,A.hT(B.bJ(B.aU),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.FU=new A.AV(p)
$.Fx=new A.AW(o)
$.G3=new A.AX(n)},
hT(a,b){return a(b)||b},
JM(a,b){var s
for(s=0;s<a.length;++s)if(!J.v(a[s],b[s]))return!1
return!0},
LZ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
BG(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a9("Illegal RegExp pattern ("+String(o)+")",a,null))},
ME(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.ew){s=B.a.ag(a,c)
return b.b.test(s)}else return!J.Bm(b,B.a.ag(a,c)).gF(0)},
FQ(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
G4(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.MG(a,b,c)
if(b instanceof A.ew){s=b.gml()
s.lastIndex=0
return a.replace(s,A.FQ(c))}return A.MF(a,b,c)},
MF(a,b,c){var s,r,q,p
for(s=J.Bm(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gP())+c
r=p.gO()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
MG(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.G4(b),"g"),A.FQ(c))},
Fq(a){return a},
G9(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.i7(0,a),s=new A.nt(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.q(A.Fq(B.a.A(a,q,m)))+A.q(c.$1(o))
q=m+n[0].length}s=p+A.q(A.Fq(B.a.ag(a,q)))
return s.charCodeAt(0)==0?s:s},
MH(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.Ga(a,s,s+b.length,c)},
Ga(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a5:function a5(a,b){this.a=a
this.b=b},
jY:function jY(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
o3:function o3(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
o4:function o4(a){this.a=a},
ig:function ig(a,b){this.a=a
this.$ti=b},
fo:function fo(){},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
eY:function eY(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iu:function iu(a,b){this.a=a
this.$ti=b},
ih:function ih(){},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
rU:function rU(){},
iy:function iy(a,b){this.a=a
this.$ti=b},
uW:function uW(a){this.a=a},
jd:function jd(){},
ww:function ww(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j1:function j1(){},
lG:function lG(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(a){this.a=a},
m5:function m5(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
k0:function k0(a){this.a=a
this.b=null},
el:function el(){},
pu:function pu(){},
pv:function pv(){},
wm:function wm(){},
vX:function vX(){},
i9:function i9(a,b){this.a=a
this.b=b},
mw:function mw(a){this.a=a},
bE:function bE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
t0:function t0(a){this.a=a},
tA:function tA(a,b){var _=this
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
ar:function ar(a,b){this.a=a
this.$ti=b},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aO:function aO(a,b){this.a=a
this.$ti=b},
lO:function lO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iE:function iE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iD:function iD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
AV:function AV(a){this.a=a},
AW:function AW(a){this.a=a},
AX:function AX(a){this.a=a},
f1:function f1(){},
o0:function o0(){},
o1:function o1(){},
o2:function o2(){},
ew:function ew(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a){this.b=a},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
nt:function nt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h7:function h7(a,b){this.a=a
this.c=b},
og:function og(a,b,c){this.a=a
this.b=b
this.c=c},
zD:function zD(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
MK(a){throw A.aJ(A.DC(a),new Error())},
A(){throw A.aJ(A.DD(""),new Error())},
cA(){throw A.aJ(A.I3(""),new Error())},
Bf(){throw A.aJ(A.DC(""),new Error())},
Ce(){var s=new A.nB("")
return s.b=s},
y_(a){var s=new A.nB(a)
return s.b=s},
nB:function nB(a){this.a=a
this.b=null},
hO(a,b,c){},
b3(a){var s,r,q
if(t.iy.b(a))return a
s=J.L(a)
r=A.af(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
Ii(a){return new DataView(new ArrayBuffer(a))},
DH(a,b,c){A.hO(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d8(a,b,c){A.hO(a,b,c)
c=B.c.N(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Ij(a){return new Int8Array(a)},
Ik(a){return new Uint16Array(a)},
DI(a,b,c){A.hO(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
ug(a){return new Uint8Array(a)},
bV(a,b,c){A.hO(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dm(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.AH(b,a))},
dn(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.M_(a,b,c))
if(b==null)return c
return b},
fH:function fH(){},
fG:function fG(){},
iX:function iX(){},
oo:function oo(a){this.a=a},
iW:function iW(){},
fI:function fI(){},
dN:function dN(){},
bU:function bU(){},
lZ:function lZ(){},
m_:function m_(){},
m0:function m0(){},
m1:function m1(){},
m2:function m2(){},
iY:function iY(){},
iZ:function iZ(){},
j_:function j_(){},
eB:function eB(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
jX:function jX(){},
BW(a,b){var s=b.c
return s==null?b.c=A.k7(a,"y",[b.x]):s},
DV(a){var s=a.w
if(s===6||s===7)return A.DV(a.x)
return s===11||s===12},
IG(a){return a.as},
G0(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.zJ(v.typeUniverse,a,!1)},
Mj(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.e6(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
e6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e6(a1,s,a3,a4)
if(r===s)return a2
return A.EB(a1,r,!0)
case 7:s=a2.x
r=A.e6(a1,s,a3,a4)
if(r===s)return a2
return A.EA(a1,r,!0)
case 8:q=a2.y
p=A.hS(a1,q,a3,a4)
if(p===q)return a2
return A.k7(a1,a2.x,p)
case 9:o=a2.x
n=A.e6(a1,o,a3,a4)
m=a2.y
l=A.hS(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Ci(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hS(a1,j,a3,a4)
if(i===j)return a2
return A.EC(a1,k,i)
case 11:h=a2.x
g=A.e6(a1,h,a3,a4)
f=a2.y
e=A.Lj(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Ez(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hS(a1,d,a3,a4)
o=a2.x
n=A.e6(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Cj(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kI("Attempted to substitute unexpected RTI kind "+a0))}},
hS(a,b,c,d){var s,r,q,p,o=b.length,n=A.zT(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e6(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Lk(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.zT(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e6(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Lj(a,b,c,d){var s,r=b.a,q=A.hS(a,r,c,d),p=b.b,o=A.hS(a,p,c,d),n=b.c,m=A.Lk(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.nO()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
oK(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.M9(s)
return a.$S()}return null},
Mi(a,b){var s
if(A.DV(b))if(a instanceof A.el){s=A.oK(a)
if(s!=null)return s}return A.by(a)},
by(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a0(a)
return A.Cs(J.dq(a))},
a0(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Cs(a)},
Cs(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.KF(a,s)},
KF(a,b){var s=a instanceof A.el?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.JW(v.typeUniverse,s.name)
b.$ccache=r
return r},
M9(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.zJ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dr(a){return A.bL(A.n(a))},
CF(a){var s=A.oK(a)
return A.bL(s==null?A.by(a):s)},
Cv(a){var s
if(a instanceof A.f1)return a.ma()
s=a instanceof A.el?A.oK(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bp(a).a
if(Array.isArray(a))return A.a0(a)
return A.by(a)},
bL(a){var s=a.r
return s==null?a.r=new A.ol(a):s},
M2(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.k9(v.typeUniverse,A.Cv(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.EE(v.typeUniverse,s,A.Cv(q[r]))
return A.k9(v.typeUniverse,s,a)},
bM(a){return A.bL(A.zJ(v.typeUniverse,a,!1))},
KE(a){var s=this
s.b=A.Lh(s)
return s.b(a)},
Lh(a){var s,r,q,p
if(a===t.K)return A.KN
if(A.fc(a))return A.KR
s=a.w
if(s===6)return A.KB
if(s===1)return A.F9
if(s===7)return A.KI
r=A.Lg(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fc)){a.f="$i"+q
if(q==="p")return A.KL
if(a===t.m)return A.KK
return A.KQ}}else if(s===10){p=A.LZ(a.x,a.y)
return p==null?A.F9:p}return A.Kz},
Lg(a){if(a.w===8){if(a===t.S)return A.an
if(a===t.Y||a===t.cZ)return A.KM
if(a===t.N)return A.KP
if(a===t.y)return A.bv}return null},
KD(a){var s=this,r=A.Ky
if(A.fc(s))r=A.K9
else if(s===t.K)r=A.K8
else if(A.hW(s)){r=A.KA
if(s===t.o)r=A.be
else if(s===t.v)r=A.a7
else if(s===t.o9)r=A.ET
else if(s===t.jh)r=A.EX
else if(s===t.dz)r=A.EU
else if(s===t.k)r=A.EV}else if(s===t.S)r=A.am
else if(s===t.N)r=A.G
else if(s===t.y)r=A.hN
else if(s===t.cZ)r=A.EW
else if(s===t.Y)r=A.f6
else if(s===t.m)r=A.bf
s.a=r
return s.a(a)},
Kz(a){var s=this
if(a==null)return A.hW(s)
return A.Mm(v.typeUniverse,A.Mi(a,s),s)},
KB(a){if(a==null)return!0
return this.x.b(a)},
KQ(a){var s,r=this
if(a==null)return A.hW(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dq(a)[s]},
KL(a){var s,r=this
if(a==null)return A.hW(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dq(a)[s]},
KK(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
F8(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ky(a){var s=this
if(a==null){if(A.hW(s))return a}else if(s.b(a))return a
throw A.aJ(A.F2(a,s),new Error())},
KA(a){var s=this
if(a==null||s.b(a))return a
throw A.aJ(A.F2(a,s),new Error())},
F2(a,b){return new A.k5("TypeError: "+A.Eq(a,A.bw(b,null)))},
Eq(a,b){return A.im(a)+": type '"+A.bw(A.Cv(a),null)+"' is not a subtype of type '"+b+"'"},
cg(a,b){return new A.k5("TypeError: "+A.Eq(a,b))},
KI(a){var s=this
return s.x.b(a)||A.BW(v.typeUniverse,s).b(a)},
KN(a){return a!=null},
K8(a){if(a!=null)return a
throw A.aJ(A.cg(a,"Object"),new Error())},
KR(a){return!0},
K9(a){return a},
F9(a){return!1},
bv(a){return!0===a||!1===a},
hN(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aJ(A.cg(a,"bool"),new Error())},
ET(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aJ(A.cg(a,"bool?"),new Error())},
f6(a){if(typeof a=="number")return a
throw A.aJ(A.cg(a,"double"),new Error())},
EU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aJ(A.cg(a,"double?"),new Error())},
an(a){return typeof a=="number"&&Math.floor(a)===a},
am(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aJ(A.cg(a,"int"),new Error())},
be(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aJ(A.cg(a,"int?"),new Error())},
KM(a){return typeof a=="number"},
EW(a){if(typeof a=="number")return a
throw A.aJ(A.cg(a,"num"),new Error())},
EX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aJ(A.cg(a,"num?"),new Error())},
KP(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.aJ(A.cg(a,"String"),new Error())},
a7(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aJ(A.cg(a,"String?"),new Error())},
bf(a){if(A.F8(a))return a
throw A.aJ(A.cg(a,"JSObject"),new Error())},
EV(a){if(a==null)return a
if(A.F8(a))return a
throw A.aJ(A.cg(a,"JSObject?"),new Error())},
Fl(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bw(a[q],b)
return s},
L6(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Fl(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bw(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
F6(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bw(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bw(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bw(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bw(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bw(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bw(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bw(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bw(a.x,b)+">"
if(m===8){p=A.Ln(a.x)
o=a.y
return o.length>0?p+("<"+A.Fl(o,b)+">"):p}if(m===10)return A.L6(a,b)
if(m===11)return A.F6(a,b,null)
if(m===12)return A.F6(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
Ln(a){var s=A.Ge(a)
if(s!=null)return s
return"minified:"+a},
JX(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
JW(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.zJ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.k8(a,5,"#")
q=A.zT(s)
for(p=0;p<s;++p)q[p]=r
o=A.k7(a,b,q)
n[b]=o
return o}else return m},
JV(a,b){return A.ER(a.tR,b)},
JU(a,b){return A.ER(a.eT,b)},
zJ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ED(a,null,b,!1)
r.set(b,s)
return s},
k9(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ED(a,b,c,!0)
q.set(c,r)
return r},
EE(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Ci(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ED(a,b,c,d){return A.JK(A.JE(a,b,c,d))},
e5(a,b){b.a=A.KD
b.b=A.KE
return b},
k8(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cr(null,null)
s.w=b
s.as=c
r=A.e5(a,s)
a.eC.set(c,r)
return r},
EB(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.JS(a,b,r,c)
a.eC.set(r,s)
return s},
JS(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fc(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.hW(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cr(null,null)
q.w=6
q.x=b
q.as=c
return A.e5(a,q)},
EA(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.JQ(a,b,r,c)
a.eC.set(r,s)
return s},
JQ(a,b,c,d){var s,r
if(d){s=b.w
if(A.fc(b)||b===t.K)return b
else if(s===1)return A.k7(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cr(null,null)
r.w=7
r.x=b
r.as=c
return A.e5(a,r)},
JT(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cr(null,null)
s.w=13
s.x=b
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
k6(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
JP(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
k7(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.k6(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cr(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e5(a,r)
a.eC.set(p,q)
return q},
Ci(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.k6(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cr(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e5(a,o)
a.eC.set(q,n)
return n},
EC(a,b,c){var s,r,q="+"+(b+"("+A.k6(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cr(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
Ez(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.k6(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.k6(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.JP(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cr(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e5(a,p)
a.eC.set(r,o)
return o},
Cj(a,b,c,d){var s,r=b.as+("<"+A.k6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.JR(a,b,c,r,d)
a.eC.set(r,s)
return s},
JR(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.zT(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e6(a,b,r,0)
m=A.hS(a,c,r,0)
return A.Cj(a,n,m,c!==m)}}l=new A.cr(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e5(a,l)},
JE(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
JK(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.JG(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Ev(a,r,l,k,!1)
else if(q===46)r=A.Ev(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f0(a.u,a.e,k.pop()))
break
case 94:k.push(A.JT(a.u,k.pop()))
break
case 35:k.push(A.k8(a.u,5,"#"))
break
case 64:k.push(A.k8(a.u,2,"@"))
break
case 126:k.push(A.k8(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.JI(a,k)
break
case 38:A.JH(a,k)
break
case 63:p=a.u
k.push(A.EB(p,A.f0(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.EA(p,A.f0(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.JF(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Ew(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.JL(a.u,a.e,o)
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
return A.f0(a.u,a.e,m)},
JG(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Ev(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.JX(s,o.x)[p]
if(n==null)A.u('No "'+p+'" in "'+A.IG(o)+'"')
d.push(A.k9(s,o,n))}else d.push(p)
return m},
JI(a,b){var s,r=a.u,q=A.Eu(a,b),p=b.pop()
if(typeof p=="string")b.push(A.k7(r,p,q))
else{s=A.f0(r,a.e,p)
switch(s.w){case 11:b.push(A.Cj(r,s,q,a.n))
break
default:b.push(A.Ci(r,s,q))
break}}},
JF(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Eu(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f0(p,a.e,o)
q=new A.nO()
q.a=s
q.b=n
q.c=m
b.push(A.Ez(p,r,q))
return
case-4:b.push(A.EC(p,b.pop(),s))
return
default:throw A.b(A.kI("Unexpected state under `()`: "+A.q(o)))}},
JH(a,b){var s=b.pop()
if(0===s){b.push(A.k8(a.u,1,"0&"))
return}if(1===s){b.push(A.k8(a.u,4,"1&"))
return}throw A.b(A.kI("Unexpected extended operation "+A.q(s)))},
Eu(a,b){var s=b.splice(a.p)
A.Ew(a.u,a.e,s)
a.p=b.pop()
return s},
f0(a,b,c){if(typeof c=="string")return A.k7(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.JJ(a,b,c)}else return c},
Ew(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f0(a,b,c[s])},
JL(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f0(a,b,c[s])},
JJ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kI("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kI("Bad index "+c+" for "+b.l(0)))},
Mm(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aW(a,b,null,c,null)
r.set(c,s)}return s},
aW(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fc(d))return!0
s=b.w
if(s===4)return!0
if(A.fc(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aW(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aW(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aW(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aW(a,b.x,c,d,e))return!1
return A.aW(a,A.BW(a,b),c,d,e)}if(s===6)return A.aW(a,p,c,d,e)&&A.aW(a,b.x,c,d,e)
if(q===7){if(A.aW(a,b,c,d.x,e))return!0
return A.aW(a,b,c,A.BW(a,d),e)}if(q===6)return A.aW(a,b,c,p,e)||A.aW(a,b,c,d.x,e)
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
if(!A.aW(a,j,c,i,e)||!A.aW(a,i,e,j,c))return!1}return A.F7(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.F7(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.KJ(a,b,c,d,e)}if(o&&q===10)return A.KO(a,b,c,d,e)
return!1},
F7(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aW(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aW(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aW(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aW(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aW(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
KJ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.k9(a,b,r[o])
return A.ES(a,p,null,c,d.y,e)}return A.ES(a,b.y,null,c,d.y,e)},
ES(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aW(a,b[s],d,e[s],f))return!1
return!0},
KO(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aW(a,r[s],c,q[s],e))return!1
return!0},
hW(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fc(a))if(s!==6)r=s===7&&A.hW(a.x)
return r},
fc(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ER(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
zT(a){return a>0?new Array(a):v.typeUniverse.sEA},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
nO:function nO(){this.c=this.b=this.a=null},
ol:function ol(a){this.a=a},
nL:function nL(){},
k5:function k5(a){this.a=a},
Ja(){var s,r,q
if(self.scheduleImmediate!=null)return A.Lr()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e8(new A.xG(s),1)).observe(r,{childList:true})
return new A.xF(s,r,q)}else if(self.setImmediate!=null)return A.Ls()
return A.Lt()},
Jb(a){self.scheduleImmediate(A.e8(new A.xH(a),0))},
Jc(a){self.setImmediate(A.e8(new A.xI(a),0))},
Jd(a){A.C4(B.D,a)},
C4(a,b){var s=B.c.N(a.a,1000)
return A.JN(s<0?0:s,b)},
E1(a,b){var s=B.c.N(a.a,1000)
return A.JO(s<0?0:s,b)},
JN(a,b){var s=new A.k4(!0)
s.po(a,b)
return s},
JO(a,b){var s=new A.k4(!1)
s.pp(a,b)
return s},
h(a){return new A.jy(new A.t($.C,a.i("t<0>")),a.i("jy<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.EY(a,b)},
e(a,b){b.aD(a)},
d(a,b){b.bD(A.E(a),A.ad(a))},
EY(a,b){var s,r,q=new A.A7(b),p=new A.A8(b)
if(a instanceof A.t)a.mP(q,p,t.z)
else{s=t.z
if(a instanceof A.t)a.bE(q,p,s)
else{r=new A.t($.C,t._)
r.a=8
r.c=a
r.mP(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fD(new A.Aq(s),t.H,t.S,t.z)},
bX(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cZ(null)
else{s=c.a
s===$&&A.A()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.E(a)
q=A.ad(a)
s.ap(new A.ao(r,q))}else{s=A.E(a)
r=A.ad(a)
q=c.a
q===$&&A.A()
q.bC(s,r)
c.a.p()}return}if(a instanceof A.jQ){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.A()
r.u(0,s)
A.kt(new A.A5(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.A()
s.vB(p,!1).ao(new A.A6(c,b),t.P)
return}}A.EY(a,b)},
Fp(a){var s=a.a
s===$&&A.A()
return new A.b7(s,A.n(s).i("b7<1>"))},
Je(a,b){var s=new A.nv(b.i("nv<0>"))
s.pk(a,b)
return s},
Fa(a,b){return A.Je(a,b)},
JA(a){return new A.jQ(a,1)},
e0(a){return new A.jQ(a,0)},
Ey(a,b,c){return 0},
i6(a){var s
if(t.C.b(a)){s=a.gcn()
if(s!=null)return s}return B.P},
it(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.E(q)
r=A.ad(q)
p=new A.t($.C,b.i("t<0>"))
o=s
n=r
m=A.kg(o,n)
if(m==null)o=new A.ao(o,n==null?A.i6(o):n)
else o=m
p.co(o)
return p}return b.i("y<0>").b(l)?l:A.bd(l,b)},
bD(a,b){var s=a==null?b.a(a):a,r=new A.t($.C,b.i("t<0>"))
r.aP(s)
return r},
HP(a,b){var s
if(!b.b(null))throw A.b(A.az(null,"computation","The type parameter is not nullable"))
s=new A.t($.C,b.i("t<0>"))
A.cS(a,new A.rp(null,s,b))
return s},
BA(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.t($.C,b.i("t<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.rr(i,h,g,f)
try{for(n=J.D(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bE(new A.rq(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cZ(A.l([],b.i("B<0>")))
return n}i.a=A.af(n,null,!1,b.i("0?"))}catch(l){p=A.E(l)
o=A.ad(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kg(m,k)
if(j==null)m=new A.ao(m,k==null?A.i6(m):k)
else m=j
n.co(m)
return n}else{i.d=p
i.c=o}}return f},
Bz(a,b,c,d){var s=new A.rk(d,null,b,c),r=$.C,q=new A.t(r,c.i("t<0>"))
if(r!==B.i)s=r.fD(s,c.i("0/"),t.K,t.l)
a.dL(new A.cd(q,2,null,s,a.$ti.i("@<1>").V(c).i("cd<1,2>")))
return q},
HN(a,b){var s,r,q,p=A.l([],b.i("B<jO<0>>"))
for(s=a.length,r=b.i("jO<0>"),q=0;q<a.length;a.length===s||(0,A.r)(a),++q)p.push(new A.jO(a[q],r))
if(p.length===0)return A.bD(A.l([],b.i("B<0>")),b.i("p<0>"))
s=new A.t($.C,b.i("t<p<0>>"))
A.Ju(p,new A.rl(new A.ap(s,b.i("ap<p<0>>")),p,b))
return s},
KW(a){return a!=null},
Ju(a,b){var s,r={},q=r.a=r.b=0,p=new A.yE(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.r)(a),++q)a[q].vk(p)},
kg(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.nk(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mh(r,q)
return s},
f7(a,b){var s
if($.C!==B.i){s=A.kg(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcn()
if(b==null){A.mh(a,B.P)
b=B.P}}else b=B.P
else if(t.C.b(a))A.mh(a,b)
return new A.ao(a,b)},
Jt(a,b,c){var s=new A.t(b,c.i("t<0>"))
s.a=8
s.c=a
return s},
bd(a,b){var s=new A.t($.C,b.i("t<0>"))
s.a=8
s.c=a
return s},
yK(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.BZ()
b.co(new A.ao(new A.bA(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.mr(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.f0()
b.h0(p.a)
A.eW(b,q)
return}b.a^=2
b.b.cT(new A.yL(p,b))},
eW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fk(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eW(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gca()===k.gca())}else f=!1
if(f){f=g.a
r=f.c
f.b.fk(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.yP(s,g,p).$0()
else if(q){if((f&1)!==0)new A.yO(s,m).$0()}else if((f&2)!==0)new A.yN(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.t){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hS(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.yK(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hS(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
Ff(a,b){if(t.ng.b(a))return b.fD(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dt(a,t.z,t.K)
throw A.b(A.az(a,"onError",u.w))},
KV(){var s,r
for(s=$.hQ;s!=null;s=$.hQ){$.ki=null
r=s.b
$.hQ=r
if(r==null)$.kh=null
s.a.$0()}},
Li(){$.Ct=!0
try{A.KV()}finally{$.ki=null
$.Ct=!1
if($.hQ!=null)$.CR().$1(A.FA())}},
Fn(a){var s=new A.nu(a),r=$.kh
if(r==null){$.hQ=$.kh=s
if(!$.Ct)$.CR().$1(A.FA())}else $.kh=r.b=s},
Lf(a){var s,r,q,p=$.hQ
if(p==null){A.Fn(a)
$.ki=$.kh
return}s=new A.nu(a)
r=$.ki
if(r==null){s.b=p
$.hQ=$.ki=s}else{q=r.b
s.b=q
$.ki=r.b=s
if(q==null)$.kh=s}},
kt(a){var s,r=null,q=$.C
if(B.i===q){A.Ao(r,r,B.i,a)
return}if(B.i===q.gkc().a)s=B.i.gca()===q.gca()
else s=!1
if(s){A.Ao(r,r,q,q.bZ(a,t.H))
return}s=$.C
s.cT(s.f7(a))},
C0(a,b){var s=null,r=b.i("cY<0>"),q=new A.cY(s,s,s,s,r)
q.aC(a)
q.lN()
return new A.b7(q,r.i("b7<1>"))},
N9(a,b){return new A.cf(A.c_(a,"stream",t.K),b.i("cf<0>"))},
vZ(a,b,c,d,e){return d?new A.hH(b,null,c,a,e.i("hH<0>")):new A.cY(b,null,c,a,e.i("cY<0>"))},
dR(a,b,c){return new A.jz(b,a,c.i("jz<0>"))},
oG(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.E(q)
r=A.ad(q)
$.C.fk(s,r)}},
Jr(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.nz(s,b,f),o=A.xV(s,c),n=d==null?A.Ar():d
return new A.dZ(a,p,o,s.bZ(n,t.H),s,r|q,f.i("dZ<0>"))},
J9(a){return new A.xC(a)},
nz(a,b,c){var s=b==null?A.Lv():b
return a.dt(s,t.H,c)},
xV(a,b){if(b==null)b=A.Lw()
if(t.b9.b(b))return a.fD(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dt(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
KX(a){},
KZ(a,b){$.C.fk(a,b)},
KY(){},
Ep(a,b){var s=$.C,r=new A.hu(s,b.i("hu<0>"))
A.kt(r.gmn())
if(a!=null)r.c=s.bZ(a,t.H)
return r},
Kh(a,b,c){var s=a.C()
if(s!==$.ec())s.b_(new A.Aa(b,c))
else b.ap(c)},
Ki(a,b,c){var s=a.C()
if(s!==$.ec())s.b_(new A.Ab(b,c))
else b.cp(c)},
cS(a,b){var s=$.C
if(s===B.i)return s.kv(a,b)
return s.kv(a,s.f7(b))},
E0(a,b){var s,r=$.C
if(r===B.i)return r.ku(a,b)
s=r.ib(b,t.hU)
return $.C.ku(a,s)},
oQ(a,b,c,d){return A.Le(a,c,b,d)},
Le(a,b,c,d){return $.C.np(c,b).aY(a,d)},
Lc(a,b,c,d,e){A.kl(d,e)},
kl(a,b){A.Lf(new A.Al(a,b))},
Am(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
An(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
Cu(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
Fj(a,b,c,d){return d},
Fk(a,b,c,d){return d},
Fi(a,b,c,d){return d},
Lb(a,b,c,d,e){return null},
Ao(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gca()
r=c.gca()
d=s!==r?c.f7(d):c.kq(d,t.H)}A.Fn(d)},
La(a,b,c,d,e){return A.C4(d,B.i!==c?c.kq(e,t.H):e)},
L9(a,b,c,d,e){e=c.vO(e,t.H,t.hU)
return A.E1(d,e)},
Ld(a,b,c,d){A.G2(d)},
Fh(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.BB(o,o,o,s,s)
r.E(0,e)}else r=o
s=new A.nE(c.gmD(),c.gmF(),c.gmE(),c.gmz(),c.gmA(),c.gmy(),c.gm4(),c.gkc(),c.glY(),c.glX(),c.gms(),c.gm7(),c.gjT(),c.gkm(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.oz(s,q)
p=d.a
if(p!=null)s.as=new A.oy(s,p)}if(r!=null)s.at=new A.oA(s,r)
return s},
xG:function xG(a){this.a=a},
xF:function xF(a,b,c){this.a=a
this.b=b
this.c=c},
xH:function xH(a){this.a=a},
xI:function xI(a){this.a=a},
k4:function k4(a){this.a=a
this.b=null
this.c=0},
zG:function zG(a,b){this.a=a
this.b=b},
zF:function zF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a,b){this.a=a
this.b=!1
this.$ti=b},
A7:function A7(a){this.a=a},
A8:function A8(a){this.a=a},
Aq:function Aq(a){this.a=a},
A5:function A5(a,b){this.a=a
this.b=b},
A6:function A6(a,b){this.a=a
this.b=b},
nv:function nv(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
xK:function xK(a){this.a=a},
xL:function xL(a){this.a=a},
xN:function xN(a){this.a=a},
xO:function xO(a,b){this.a=a
this.b=b},
xM:function xM(a,b){this.a=a
this.b=b},
xJ:function xJ(a){this.a=a},
jQ:function jQ(a,b){this.a=a
this.b=b},
oi:function oi(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hG:function hG(a,b){this.a=a
this.$ti=b},
ao:function ao(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.$ti=b},
eS:function eS(a,b,c,d,e,f,g){var _=this
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
jE:function jE(){},
jz:function jz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
rp:function rp(a,b,c){this.a=a
this.b=b
this.c=c},
rr:function rr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rq:function rq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rk:function rk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mS:function mS(a,b){this.a=a
this.b=b},
rl:function rl(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c){this.c=a
this.d=b
this.$ti=c},
jO:function jO(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
yF:function yF(a,b){this.a=a
this.b=b},
yG:function yG(a,b){this.a=a
this.b=b},
yE:function yE(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(){},
ay:function ay(a,b){this.a=a
this.$ti=b},
ap:function ap(a,b){this.a=a
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
yH:function yH(a,b){this.a=a
this.b=b},
yM:function yM(a,b){this.a=a
this.b=b},
yL:function yL(a,b){this.a=a
this.b=b},
yJ:function yJ(a,b){this.a=a
this.b=b},
yI:function yI(a,b){this.a=a
this.b=b},
yP:function yP(a,b,c){this.a=a
this.b=b
this.c=c},
yQ:function yQ(a,b){this.a=a
this.b=b},
yR:function yR(a){this.a=a},
yO:function yO(a,b){this.a=a
this.b=b},
yN:function yN(a,b){this.a=a
this.b=b},
yS:function yS(a,b){this.a=a
this.b=b},
yT:function yT(a,b,c){this.a=a
this.b=b
this.c=c},
yU:function yU(a,b){this.a=a
this.b=b},
nu:function nu(a){this.a=a
this.b=null},
aa:function aa(){},
w1:function w1(a,b){this.a=a
this.b=b},
w2:function w2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w3:function w3(a,b){this.a=a
this.b=b},
w4:function w4(a,b){this.a=a
this.b=b},
w_:function w_(a){this.a=a},
w0:function w0(a,b,c){this.a=a
this.b=b
this.c=c},
jn:function jn(){},
e3:function e3(){},
zz:function zz(a){this.a=a},
zy:function zy(a){this.a=a},
oj:function oj(){},
jA:function jA(){},
cY:function cY(a,b,c,d,e){var _=this
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
nr:function nr(){},
xC:function xC(a){this.a=a},
xB:function xB(a){this.a=a},
k1:function k1(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b2:function b2(){},
xX:function xX(a,b,c){this.a=a
this.b=b
this.c=c},
xW:function xW(a){this.a=a},
hF:function hF(){},
nK:function nK(){},
cc:function cc(a,b){this.b=a
this.a=null
this.$ti=b},
ht:function ht(a,b){this.b=a
this.c=b
this.a=null},
yx:function yx(){},
e2:function e2(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
zh:function zh(a,b){this.a=a
this.b=b},
hu:function hu(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cf:function cf(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jJ:function jJ(a){this.$ti=a},
dk:function dk(a,b){this.b=a
this.$ti=b},
zf:function zf(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
Aa:function Aa(a,b){this.a=a
this.b=b},
Ab:function Ab(a,b){this.a=a
this.b=b},
jM:function jM(){},
hx:function hx(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
f_:function f_(a,b,c){this.b=a
this.a=b
this.$ti=c},
jK:function jK(a,b){this.a=a
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
jD:function jD(a,b,c){this.a=a
this.b=b
this.$ti=c},
A2:function A2(a,b){this.a=a
this.b=b},
A4:function A4(a,b){this.a=a
this.b=b},
A3:function A3(a,b){this.a=a
this.b=b},
A0:function A0(a,b){this.a=a
this.b=b},
A1:function A1(a,b){this.a=a
this.b=b},
A_:function A_(a,b){this.a=a
this.b=b},
zX:function zX(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
zW:function zW(a,b){this.a=a
this.b=b},
zV:function zV(a,b){this.a=a
this.b=b},
zZ:function zZ(a,b){this.a=a
this.b=b},
zY:function zY(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
oA:function oA(a,b){this.a=a
this.b=b},
ox:function ox(){},
nE:function nE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
yt:function yt(a,b,c){this.a=a
this.b=b
this.c=c},
yv:function yv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ys:function ys(a,b){this.a=a
this.b=b},
yu:function yu(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function o7(){},
zo:function zo(a,b,c){this.a=a
this.b=b
this.c=c},
zn:function zn(a,b){this.a=a
this.b=b},
zp:function zp(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a){this.a=a},
Al:function Al(a,b){this.a=a
this.b=b},
jx:function jx(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
BB(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.di(d.i("@<0>").V(e).i("di<1,2>"))
b=A.Cz()}else{if(A.FI()===b&&A.FH()===a)return new A.e_(d.i("@<0>").V(e).i("e_<1,2>"))
if(a==null)a=A.Cy()}else{if(b==null)b=A.Cz()
if(a==null)a=A.Cy()}return A.Js(a,b,c,d,e)},
Er(a,b){var s=a[b]
return s===a?null:s},
Cg(a,b,c){if(c==null)a[b]=a
else a[b]=c},
Cf(){var s=Object.create(null)
A.Cg(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Js(a,b,c,d,e){var s=c!=null?c:new A.yr(d)
return new A.jG(a,b,s,d.i("@<0>").V(e).i("jG<1,2>"))},
dF(a,b,c,d){if(b==null){if(a==null)return new A.bE(c.i("@<0>").V(d).i("bE<1,2>"))
b=A.Cz()}else{if(A.FI()===b&&A.FH()===a)return new A.iE(c.i("@<0>").V(d).i("iE<1,2>"))
if(a==null)a=A.Cy()}return A.JD(a,b,null,c,d)},
m(a,b,c){return A.FS(a,new A.bE(b.i("@<0>").V(c).i("bE<1,2>")))},
w(a,b){return new A.bE(a.i("@<0>").V(b).i("bE<1,2>"))},
JD(a,b,c,d,e){return new A.jR(a,b,new A.zd(d),d.i("@<0>").V(e).i("jR<1,2>"))},
lP(a){return new A.dj(a.i("dj<0>"))},
aP(a){return new A.dj(a.i("dj<0>"))},
as(a,b){return A.M5(a,new A.dj(b.i("dj<0>")))},
Ch(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eZ(a,b,c){var s=new A.e1(a,b,c.i("e1<0>"))
s.c=a.e
return s},
Kp(a,b){return J.v(a,b)},
Kq(a){return J.a8(a)},
Dv(a){if(a.length===0)return null
return B.b.ga_(a)},
ba(a,b,c){var s=A.dF(null,null,b,c)
a.a3(0,new A.tB(s,b,c))
return s},
dG(a,b,c){var s=A.dF(null,null,b,c)
s.E(0,a)
return s},
tC(a,b){var s,r,q=A.lP(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.u(0,b.a(a[r]))
return q},
dH(a,b){var s=A.lP(b)
s.E(0,a)
return s},
I4(a,b){var s=t.bP
return J.CY(s.a(a),s.a(b))},
tR(a){var s,r
if(A.CH(a))return"{...}"
s=new A.a2("")
try{r={}
$.f8.push(a)
s.a+="{"
r.a=!0
a.a3(0,new A.tS(r,s))
s.a+="}"}finally{$.f8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
BJ(a){return new A.iH(A.af(A.I5(null),null,!1,a.i("0?")),a.i("iH<0>"))},
I5(a){return 8},
di:function di(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
yW:function yW(a){this.a=a},
yV:function yV(a){this.a=a},
e_:function e_(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jG:function jG(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
yr:function yr(a){this.a=a},
eX:function eX(a,b){this.a=a
this.$ti=b},
nP:function nP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
jR:function jR(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
zd:function zd(a){this.a=a},
dj:function dj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ze:function ze(a){this.a=a
this.c=this.b=null},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
tB:function tB(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
nW:function nW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b4:function b4(){},
I:function I(){},
U:function U(){},
tQ:function tQ(a){this.a=a},
tS:function tS(a,b){this.a=a
this.b=b},
jS:function jS(a,b){this.a=a
this.$ti=b},
nY:function nY(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
on:function on(){},
iL:function iL(){},
cU:function cU(a,b){this.a=a
this.$ti=b},
iH:function iH(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
nX:function nX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cs:function cs(){},
k_:function k_(){},
ka:function ka(){},
Fd(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.E(r)
q=A.a9(String(s),null,null)
throw A.b(q)}q=A.Ad(p)
return q},
Ad(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.nT(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.Ad(a[s])
return a},
K7(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.GH()
else s=new Uint8Array(o)
for(r=J.L(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
K6(a,b,c,d){var s=a?$.GG():$.GF()
if(s==null)return null
if(0===c&&d===b.length)return A.EP(s,b)
return A.EP(s,b.subarray(c,d))},
EP(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
D2(a,b,c,d,e,f){if(B.c.am(f,4)!==0)throw A.b(A.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a9("Invalid base64 padding, more than two '=' characters",a,b))},
Ji(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.L(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
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
if(o<0||o>255)break;++q}throw A.b(A.az(b,"Not a byte value at index "+q+": 0x"+B.c.lb(s.h(b,q),16),null))},
Jh(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ah(f,2),i=f&3,h=$.CS()
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
if(i===3){if((j&3)!==0)throw A.b(A.a9(l,a,r))
s&2&&A.J(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a9(l,a,r))
s&2&&A.J(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.Ee(a,r+1,c,-m-1)}throw A.b(A.a9(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a9(k,a,r))},
Jf(a,b,c,d){var s=A.Jg(a,b,c),r=(d&3)+(s-b),q=B.c.ah(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Gy()},
Jg(a,b,c){var s,r=c,q=r,p=0
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
Ee(a,b,c,d){var s,r
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
HB(a){return B.cN.h(0,a.toLowerCase())},
DB(a,b,c){return new A.iF(a,b)},
Kt(a){return a.q()},
JB(a,b){return new A.za(a,[],A.LW())},
JC(a,b,c){var s,r=new A.a2("")
A.Et(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Et(a,b,c,d){var s=A.JB(b,c)
s.j6(a)},
EQ(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nT:function nT(a,b){this.a=a
this.b=b
this.c=null},
z9:function z9(a){this.a=a},
nU:function nU(a){this.a=a},
z7:function z7(a,b,c){this.b=a
this.c=b
this.a=c},
zR:function zR(){},
zQ:function zQ(){},
kF:function kF(){},
om:function om(){},
kG:function kG(a){this.a=a},
zI:function zI(a,b){this.a=a
this.b=b},
kK:function kK(a){this.a=a},
i8:function i8(a){this.a=a},
nx:function nx(a){this.a=0
this.b=a},
xU:function xU(a){this.c=null
this.a=0
this.b=a},
xQ:function xQ(){},
xD:function xD(a,b){this.a=a
this.b=b},
kL:function kL(){},
nw:function nw(){this.a=0},
xP:function xP(a,b){this.a=a
this.b=b},
pg:function pg(){},
hn:function hn(a){this.a=a},
nA:function nA(a,b){this.a=a
this.b=b
this.c=0},
kY:function kY(){},
od:function od(a,b,c){this.a=a
this.b=b
this.$ti=c},
eU:function eU(a,b,c){this.a=a
this.b=b
this.$ti=c},
l_:function l_(){},
aC:function aC(){},
qf:function qf(a){this.a=a},
es:function es(){},
iF:function iF(a,b){this.a=a
this.b=b},
lH:function lH(a,b){this.a=a
this.b=b},
t1:function t1(){},
lJ:function lJ(a){this.b=a},
z8:function z8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
lI:function lI(a){this.a=a},
zb:function zb(){},
zc:function zc(a,b){this.a=a
this.b=b},
za:function za(a,b,c){this.c=a
this.a=b
this.b=c},
lM:function lM(){},
lN:function lN(a){this.a=a},
mO:function mO(){},
zE:function zE(a,b){this.a=a
this.b=b},
k3:function k3(){},
of:function of(a){this.a=a},
zP:function zP(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(){},
n7:function n7(){},
op:function op(a){this.b=this.a=0
this.c=a},
zS:function zS(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
js:function js(a){this.a=a},
dl:function dl(a){this.a=a
this.b=16
this.c=0},
oB:function oB(){},
Cd(a,b){var s=A.Jp(a,b)
if(s==null)throw A.b(A.a9("Could not parse BigInt",a,null))
return s},
Jm(a,b){var s,r,q=$.cj(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bh(0,$.CT()).fO(0,A.jB(s))
s=0
o=0}}if(b)return q.bG(0)
return q},
Eg(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Jn(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.vQ(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.Eg(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.Eg(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cj()
l=A.bJ(j,i)
return new A.aI(l===0?!1:c,i,l)},
Jp(a,b){var s,r,q,p,o
if(a==="")return null
s=$.GA().ef(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.Jm(p,q)
if(o!=null)return A.Jn(o,2,q)
return null},
bJ(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
Cb(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
Ef(a){var s
if(a===0)return $.cj()
if(a===1)return $.ff()
if(a===2)return $.GB()
if(Math.abs(a)<4294967296)return A.jB(B.c.j_(a))
s=A.Jj(a)
return s},
jB(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bJ(4,s)
return new A.aI(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bJ(1,s)
return new A.aI(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ah(a,16)
r=A.bJ(2,s)
return new A.aI(r===0?!1:o,s,r)}r=B.c.N(B.c.gn5(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.N(a,65536)}r=A.bJ(r,s)
return new A.aI(r===0?!1:o,s,r)},
Jj(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.O("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cj()
r=$.Gz()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.J(r)
r[p]=0}q=J.oV(B.f.ga9(r))
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
l=new A.aI(!1,m,4)
if(n<0)k=l.dH(0,-n)
else k=n>0?l.bH(0,n):l
if(s)return k.bG(0)
return k},
Cc(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.J(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.J(d)
d[s]=0}return b+c},
Em(a,b,c,d){var s,r,q,p,o,n=B.c.N(c,16),m=B.c.am(c,16),l=16-m,k=B.c.bH(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dH(p,l)
r&2&&A.J(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bH((p&k)>>>0,m)}r&2&&A.J(d)
d[n]=q},
Eh(a,b,c,d){var s,r,q,p,o=B.c.N(c,16)
if(B.c.am(c,16)===0)return A.Cc(a,b,o,d)
s=b+o+1
A.Em(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.J(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
Jo(a,b,c,d){var s,r,q,p,o=B.c.N(c,16),n=B.c.am(c,16),m=16-n,l=B.c.bH(1,n)-1,k=B.c.dH(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bH((q&l)>>>0,m)
s&2&&A.J(d)
d[r]=(p|k)>>>0
k=B.c.dH(q,n)}s&2&&A.J(d)
d[j]=k},
xR(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Jk(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.J(e)
e[q]=r&65535
r=B.c.ah(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.J(e)
e[q]=r&65535
r=B.c.ah(r,16)}s&2&&A.J(e)
e[b]=r},
ny(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.J(e)
e[q]=r&65535
r=0-(B.c.ah(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.J(e)
e[q]=r&65535
r=0-(B.c.ah(r,16)&1)}},
En(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.J(d)
d[e]=p&65535
r=B.c.N(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.J(d)
d[e]=n&65535
r=B.c.N(n,65536)}},
Jl(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.ji((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Md(a){return A.kq(a)},
Bv(a,b){return new A.ln(new WeakMap(),a,b.i("ln<0>"))},
Bw(a){if(A.bv(a)||typeof a=="number"||typeof a=="string"||a instanceof A.f1)A.HG(a)},
HG(a){throw A.b(A.az(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
yD(a,b){var s=$.GC()
s=s==null?null:new s(A.e8(A.MP(a,b),1))
return new A.nN(s,b.i("nN<0>"))},
aH(a){var s=A.j6(a,null)
if(s!=null)return s
throw A.b(A.a9(a,null,null))},
M1(a){var s=A.Iu(a)
if(s!=null)return s
throw A.b(A.a9("Invalid double",a,null))},
HF(a,b){a=A.aJ(a,new Error())
a.stack=b.l(0)
throw a},
af(a,b,c,d){var s,r=c?J.Dx(a,d):J.BE(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bT(a,b,c){var s,r=A.l([],c.i("B<0>"))
for(s=J.D(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("B<0>"))
s=A.l([],b.i("B<0>"))
for(r=J.D(a);r.k();)s.push(r.gn())
return s},
cJ(a,b){var s=A.bT(a,!1,b)
s.$flags=3
return s},
dT(a,b,c){var s,r,q,p,o
A.bb(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.at(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.DQ(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.IU(a,b,c)
if(r)a=J.oZ(a,c)
if(b>0)a=J.oY(a,b)
s=A.N(a,t.S)
return A.DQ(s)},
IU(a,b,c){var s=a.length
if(b>=s)return""
return A.Iw(a,b,c==null||c>s?s:c)},
ag(a,b,c){return new A.ew(a,A.BG(a,!1,b,c,!1,""))},
Mc(a,b){return a==null?b==null:a===b},
w5(a,b,c){var s=J.D(b)
if(!s.k())return a
if(c.length===0){do a+=A.q(s.gn())
while(s.k())}else{a+=A.q(s.gn())
while(s.k())a=a+c+A.q(s.gn())}return a},
C6(){var s,r,q=A.Ip()
if(q==null)throw A.b(A.Z("'Uri.base' is not supported"))
s=$.E8
if(s!=null&&q===$.E7)return s
r=A.n5(q)
$.E8=r
$.E7=q
return r},
hK(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.l){s=$.GD()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bs(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
K1(a){var s,r,q
if(!$.GE())return A.K2(a)
s=new URLSearchParams()
a.a3(0,new A.zO(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
BZ(){return A.ad(new Error())},
Bs(a,b,c,d,e,f,g){var s=A.Ix(a,b,c,d,e,f,g,0,!0)
return new A.aM(s==null?new A.qT(a,b,c,d,e,f,g,0).$0():s,0,!0)},
Hw(){return new A.aM(Date.now(),0,!1)},
lf(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.at(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.at(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.az(b,s,u.B))
A.c_(c,"isUtc",t.y)
return a},
Hx(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Dh(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
le(a){if(a>=10)return""+a
return"0"+a},
d2(a,b,c){return new A.aD(a+1000*b+1e6*c)},
ft(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.az(b,"name","No enum value with that name"))},
im(a){if(typeof a=="number"||A.bv(a)||a==null)return J.a_(a)
if(typeof a=="string")return JSON.stringify(a)
return A.DP(a)},
Dj(a,b){A.c_(a,"error",t.K)
A.c_(b,"stackTrace",t.l)
A.HF(a,b)},
kI(a){return new A.kH(a)},
O(a,b){return new A.bA(!1,null,b,a)},
az(a,b,c){return new A.bA(!0,a,b,c)},
kE(a,b){return a},
b0(a){var s=null
return new A.d9(s,s,!1,s,s,a)},
vz(a,b){return new A.d9(null,null,!0,a,b,"Value not in range")},
at(a,b,c,d,e){return new A.d9(b,c,!0,a,d,"Invalid value")},
DU(a,b,c,d){if(a<b||a>c)throw A.b(A.at(a,b,c,d,null))
return a},
IA(a,b,c,d){return A.Dt(a,d,b,null,c)},
bc(a,b,c){if(0>a||a>c)throw A.b(A.at(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.at(b,a,c,"end",null))
return b}return c},
bb(a,b){if(a<0)throw A.b(A.at(a,0,null,b,null))
return a},
Ds(a,b){var s=b.b
return new A.iw(s,!0,a,null,"Index out of range")},
lz(a,b,c,d,e){return new A.iw(b,!0,a,e,"Index out of range")},
Dt(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lz(a,b,c,d,e==null?"index":e))
return a},
Z(a){return new A.cV(a)},
E5(a){return new A.n_(a)},
x(a){return new A.bj(a)},
aA(a){return new A.l3(a)},
Dk(a){return new A.nM(a)},
a9(a,b,c){return new A.bi(a,b,c)},
HV(a,b,c){var s,r
if(A.CH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.f8.push(a)
try{A.KS(a,s)}finally{$.f8.pop()}r=A.w5(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
rZ(a,b,c){var s,r
if(A.CH(a))return b+"..."+c
s=new A.a2(b)
$.f8.push(a)
try{r=s
r.a=A.w5(r.a,a,", ")}finally{$.f8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
KS(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
DE(a,b,c,d,e){return new A.ej(a,b.i("@<0>").V(c).V(d).V(e).i("ej<1,2,3,4>"))},
c7(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a8(a)
b=J.a8(b)
return A.ha(A.ax(A.ax($.fg(),s),b))}if(B.d===d){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
return A.ha(A.ax(A.ax(A.ax($.fg(),s),b),c))}if(B.d===e){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
return A.ha(A.ax(A.ax(A.ax(A.ax($.fg(),s),b),c),d))}if(B.d===f){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
return A.ha(A.ax(A.ax(A.ax(A.ax(A.ax($.fg(),s),b),c),d),e))}if(B.d===g){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
f=J.a8(f)
return A.ha(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax($.fg(),s),b),c),d),e),f))}s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
e=J.a8(e)
f=J.a8(f)
g=J.a8(g)
g=A.ha(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax($.fg(),s),b),c),d),e),f),g))
return g},
uh(a){var s,r=$.fg()
for(s=J.D(a);s.k();)r=A.ax(r,J.a8(s.gn()))
return A.ha(r)},
EZ(a,b){return 65536+((a&1023)<<10)+(b&1023)},
n5(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.E6(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnT()
else if(s===32)return A.E6(B.a.A(a5,5,a4),0,a3).gnT()}r=A.af(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Fm(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Fm(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.du(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.af(a5,"http",0)){if(i&&o+3===n&&B.a.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.du(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.af(a5,"https",0)){if(i&&o+4===n&&B.a.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.du(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.ce(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Cl(a5,0,q)
else{if(q===0)A.hJ(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.EL(a5,c,p-1):""
a=A.EJ(a5,p,o,!1)
i=o+1
if(i<n){a0=A.j6(B.a.A(a5,i,n),a3)
d=A.zK(a0==null?A.u(A.a9("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.EK(a5,n,m,a3,j,a!=null)
a2=m<l?A.zL(a5,m+1,l,a3):a3
return A.kc(j,b,a,d,a1,a2,l<a4?A.EI(a5,l+1,a4):a3)},
J4(a){return A.Co(a,0,a.length,B.l,!1)},
n4(a,b,c){throw A.b(A.a9("Illegal IPv4 address, "+a,b,c))},
J1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.n4("each part must be in the range 0..255",a,r)}A.n4("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.n4(k,a,q)}l=p+1
s&2&&A.J(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.n4(k,a,q)
p=l}A.n4("IPv4 address should contain exactly 4 parts",a,q)},
J2(a,b,c){var s
if(b===c)throw A.b(A.a9("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.J3(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.E9(a,b,c)
return!0},
J3(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
E9(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.wH(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.J1(a1,o,a3,s,q*2)
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
B.f.al(s,b,16,s,c)
B.f.kE(s,c,b,0)}}return s},
kc(a,b,c,d,e,f,g){return new A.kb(a,b,c,d,e,f,g)},
EF(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hJ(a,b,c){throw A.b(A.a9(c,a,b))},
JZ(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.G(q,"/")){s=A.Z("Illegal path character "+q)
throw A.b(s)}}},
zK(a,b){if(a!=null&&a===A.EF(b))return null
return a},
EJ(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hJ(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.K_(a,r,s)
if(p<s){o=p+1
q=A.EO(a,B.a.af(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.J2(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cc(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.EO(a,B.a.af(a,"25",o)?s+3:o,c,"%25")}else q=""
A.E9(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.K4(a,b,c)},
K_(a,b,c){var s=B.a.cc(a,"%",b)
return s>=b&&s<c?s:c},
EO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.Cm(a,s,!0)
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
m=A.Ck(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
K4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.Cm(a,s,!0)
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
k=A.Ck(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
Cl(a,b,c){var s,r,q
if(b===c)return""
if(!A.EH(a.charCodeAt(b)))A.hJ(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hJ(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.JY(r?a.toLowerCase():a)},
JY(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
EL(a,b,c){if(a==null)return""
return A.kd(a,b,c,16,!1,!1)},
EK(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kd(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.T(s,"/"))s="/"+s
return A.K3(s,e,f)},
K3(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.T(a,"/")&&!B.a.T(a,"\\"))return A.Cn(a,!s||c)
return A.f5(a)},
zL(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.kd(a,b,c,256,!0,!1)}if(d==null)return null
return A.K1(d)},
K2(a){var s={},r=new A.a2("")
s.a=""
a.a3(0,new A.zM(new A.zN(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
EI(a,b,c){if(a==null)return null
return A.kd(a,b,c,256,!0,!1)},
Cm(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.AU(s)
p=A.AU(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bs(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
Ck(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.mK(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dT(s,0,null)},
kd(a,b,c,d,e,f){var s=A.EN(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
EN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.Cm(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hJ(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.Ck(o)}if(p==null){p=new A.a2("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
EM(a){if(B.a.T(a,"."))return!0
return B.a.bU(a,"/.")!==-1},
f5(a){var s,r,q,p,o,n
if(!A.EM(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
Cn(a,b){var s,r,q,p,o,n
if(!A.EM(a))return!b?A.EG(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.EG(s[0])
return B.b.B(s,"/")},
EG(a){var s,r,q=a.length
if(q>=2&&A.EH(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ag(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
K5(a,b){if(a.xG("package")&&a.c==null)return A.Fo(b,0,b.length)
return-1},
K0(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
Co(a,b,c,d,e){var s,r,q,p,o=b
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
p.push(A.K0(a,o+1))
o+=2}else p.push(r)}}return d.f8(p)},
EH(a){var s=a|32
return 97<=s&&s<=122},
E6(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a9(k,a,r))}}if(q<0&&r>b)throw A.b(A.a9(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga_(j)
if(p!==44||r!==n+7||!B.a.af(a,"base64",n+1))throw A.b(A.a9("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aq.xY(a,m,s)
else{l=A.EN(a,m,s,256,!0,!1)
if(l!=null)a=B.a.du(a,m,s,l)}return new A.wG(a,j,c)},
Fm(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Ex(a){if(a.b===7&&B.a.T(a.a,"package")&&a.c<=0)return A.Fo(a.a,a.e,a.f)
return-1},
Fo(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
Kk(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
xS:function xS(){},
xT:function xT(){},
nN:function nN(a,b){this.a=a
this.$ti=b},
zO:function zO(a){this.a=a},
qT:function qT(a,b,c,d,e,f,g,h){var _=this
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
aD:function aD(a){this.a=a},
yy:function yy(){},
ae:function ae(){},
kH:function kH(a){this.a=a},
de:function de(){},
bA:function bA(a,b,c,d){var _=this
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
iw:function iw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cV:function cV(a){this.a=a},
n_:function n_(a){this.a=a},
bj:function bj(a){this.a=a},
l3:function l3(a){this.a=a},
m7:function m7(){},
jk:function jk(){},
nM:function nM(a){this.a=a},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
lB:function lB(){},
o:function o(){},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
oh:function oh(){},
jl:function jl(){this.b=this.a=0},
jc:function jc(a){this.a=a},
mv:function mv(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
wH:function wH(a){this.a=a},
kb:function kb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
zN:function zN(a,b){this.a=a
this.b=b},
zM:function zM(a){this.a=a},
wG:function wG(a,b,c){this.a=a
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
nH:function nH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
ln:function ln(a,b,c){this.a=a
this.b=b
this.$ti=c},
I6(a){return a},
HY(a){return a},
C1(a){return a},
HW(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.EV(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
HO(a){return new v.G.Promise(A.bY(new A.ro(a)))},
m4:function m4(a){this.a=a},
ro:function ro(a){this.a=a},
rm:function rm(a){this.a=a},
rn:function rn(a){this.a=a},
Ah(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Kb,a)
s[$.fe()]=a
return s},
d_(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Kc,a)
s[$.fe()]=a
return s},
bY(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.Kd,a)
s[$.fe()]=a
return s},
oD(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.Ke,a)
s[$.fe()]=a
return s},
hP(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.Kf,a)
s[$.fe()]=a
return s},
Cr(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Kg,a)
s[$.fe()]=a
return s},
Kb(a){return a.$0()},
Kc(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
Kd(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
Ke(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
Kf(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Kg(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Fc(a){return a==null||A.bv(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
ea(a){if(A.Fc(a))return a
return new A.AZ(new A.e_(t.mp)).$1(a)},
CE(a,b){return a[b]},
Cw(a,b,c){return a[b].apply(a,c)},
LL(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.b.E(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a6(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ay(s,b.i("ay<0>"))
a.then(A.e8(new A.B5(r),1),A.e8(new A.B6(r),1))
return s},
Fb(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
oL(a){if(A.Fb(a))return a
return new A.AA(new A.e_(t.mp)).$1(a)},
AZ:function AZ(a){this.a=a},
B5:function B5(a){this.a=a},
B6:function B6(a){this.a=a},
AA:function AA(a){this.a=a},
FX(a,b){return Math.max(a,b)},
DS(){return B.as},
DT(){return $.Bj()},
z4:function z4(){},
z5:function z5(a){this.a=a},
Hd(a,b,c){return J.CW(a,b,c)},
ll:function ll(){},
a3:function a3(){},
pi:function pi(a){this.a=a},
pj:function pj(a){this.a=a},
pk:function pk(a,b){this.a=a
this.b=b},
pl:function pl(a){this.a=a},
pm:function pm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pn:function pn(a){this.a=a},
lh:function lh(a){this.$ti=a},
iA:function iA(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b){this.a=a
this.$ti=b},
hI:function hI(){},
h0:function h0(a,b){this.a=a
this.$ti=b},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b,c){this.a=a
this.b=b
this.$ti=c},
lg:function lg(){},
DJ(){throw A.b(A.Z(u.O))},
J0(){throw A.b(A.Z("Cannot modify an unmodifiable Map"))},
m3:function m3(){},
n2:function n2(){},
aq(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dT(m,0,null)},
cm:function cm(a){this.a=a},
c5:function c5(){this.a=null},
lt:function lt(){},
rt:function rt(){},
cZ(a){var s=new Uint32Array(A.b3(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.ob(s,r,a,q,new Uint32Array(16))},
oa:function oa(){},
zr:function zr(){},
ob:function ob(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kA:function kA(){},
pt:function pt(){},
iJ:function iJ(a){this.a=a},
jf:function jf(){},
tP:function tP(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
vL:function vL(){},
jg:function jg(a,b){this.b=a
this.c=b},
mA:function mA(a){this.a=a},
bx(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
la(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bx(a5[0])
r=A.bx(a5[1])
q=A.bx(a5[2])
p=A.bx(a5[3])
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
g=B.c.am(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.am(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bH(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bx(s)
a5.$flags&2&&A.J(a5)
a5[0]=k
a5[1]=A.bx(r)
a5[2]=A.bx(q)
a5[3]=A.bx(p)},
Dg(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cU(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.N(q,n),!1)
r.setUint32(12,B.c.am(q,n),!1)
p=J.bN(B.aB.ga9(r),0,null)
o=new Uint32Array(4)
A.la(o,a,b)
A.la(o,a,p)
return J.bN(B.y.ga9(o),0,null)},
l9:function l9(a,b,c){this.c=a
this.d=b
this.a=c},
qx:function qx(){},
nF:function nF(){},
nG:function nG(){},
oI(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.ku()===B.O){a5=A.f9(a5)
a6=A.f9(a6)
a7=A.f9(a7)
a8=A.f9(a8)}a5^=b3[0]
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
if($.ku()===B.O){a1=A.f9(a1)
a2=A.f9(a2)
a3=A.f9(a3)
a4=A.f9(a4)}a9.$flags&2&&A.J(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Fw(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge8(),h=B.cM.h(0,i.gm(0))
if(h==null)throw A.b(A.O("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.CW(B.y.ga9(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.J(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.ku()===B.O)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.am(m,k)
if(n===0)j=A.Fs((j<<8|j>>>24)>>>0)^B.ck[B.c.ji(m,k)-1]<<24
else if(o&&n===4)j=A.Fs(j)
r[m]=(j^r[m-k])>>>0}return r},
Fs(a){return(B.k[a>>>24&255]<<24|B.k[a>>>16&255]<<16|B.k[a>>>8&255]<<8|B.k[a&255])>>>0},
f9(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qi:function qi(){},
qy:function qy(){},
ym:function ym(){},
ms:function ms(a,b){this.a=a
this.b=b},
kM:function kM(){},
kN:function kN(){},
kO:function kO(){},
kP:function kP(){},
pc:function pc(){},
Ft(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.ms("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.ek)){s=J.a_(a)
if(B.a.T(s,"TypeError: "))s=B.a.ag(s,11)
a=new A.ek(s,b.b)}return a},
Fg(a,b,c){A.Dj(A.Ft(a,c),b)},
Ka(a,b){return new A.dk(new A.A9(a,b),t.fb)},
hR(a,b,c){return A.L5(a,b,c)},
L5(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hR=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.p(),$async$hR)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.Ai(e)
a1.r=new A.Aj(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a6(c.read(),k),$async$hR)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.E(b)
l=A.ad(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Ft(m,a)
k=l
j=a1.b
if(j>=4)A.u(a1.bJ())
if((j&1)!==0){j=a1.gaR()
j.aH(d,k==null?B.P:k)}s=15
return A.a(a1.p(),$async$hR)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.vS()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.u(a1.bJ())
if((f&1)!==0)a1.gaR().aC(g)}g=a1.b
s=((g&1)!==0?(a1.gaR().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.ay(new A.t($.C,j),i):g).a,$async$hR)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hR,r)},
kU:function kU(a){this.b=!1
this.c=a},
pf:function pf(a){this.a=a},
A9:function A9(a,b){this.a=a
this.b=b},
Ai:function Ai(a){this.a=a},
Aj:function Aj(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a},
ph:function ph(a){this.a=a},
Dd(a,b){return new A.ek(a,b)},
ek:function ek(a,b){this.a=a
this.b=b},
lX:function lX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Ih(a,b){var s=t.N,r=A.l([],t.e8),q=$.CM()
if(!q.b.test(a))A.u(A.az(a,"method","Not a valid method"))
return new A.u9(A.w(s,s),r,a,b,A.dF(new A.kO(),new A.kP(),s,s))},
u9:function u9(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
ua:function ua(a,b){this.a=a
this.b=b},
ID(a,b){var s=new Uint8Array(0),r=$.CM()
if(!r.b.test(a))A.u(A.az(a,"method","Not a valid method"))
r=t.N
return new A.vC(s,a,b,A.dF(new A.kO(),new A.kP(),r,r))},
vC:function vC(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jo:function jo(){},
mN:function mN(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
He(a){return a.toLowerCase()},
ia:function ia(a,b,c){this.a=a
this.c=b
this.$ti=c},
I9(a){return A.MO("media type",a,new A.tT(a))},
BL(a,b,c){var s=t.N
if(c==null)s=A.w(s,s)
else{s=new A.ia(A.LM(),A.w(s,t.af),t.fo)
s.E(0,c)}return new A.fB(a.toLowerCase(),b.toLowerCase(),new A.cU(s,t.ph))},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
tT:function tT(a){this.a=a},
tV:function tV(a){this.a=a},
tU:function tU(){},
M3(a){var s
a.nl($.GO(),"quoted string")
s=a.gkR().h(0,0)
return A.G9(B.a.A(s,1,s.length-1),$.GN(),new A.AM(),null)},
AM:function AM(){},
Ht(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="spec",a0="field",a1="store"
switch(a2){case"open":s=a3.h(0,"stores")
r=a3.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.a4("Malformed open payload."))
q=A.l([],t.d)
for(p=J.D(s);p.k();)q.push(A.Hu(p.gn(),"stores"))
p=t.N
p=A.w(p,p)
for(o=r.gaj(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string"&&typeof n.b=="string")p.j(0,m,A.G(n.b))}return new A.m6(q,p)
case"capabilities":return B.bz
case"health":return B.bC
case"close":return B.bA
case"get":return new A.ls(A.cl(a3),A.qe(a3,"id"),A.cF(a3))
case"rows":l=a3.h(0,"ids")
if(!t.j.b(l))throw A.b(A.a4("Malformed rows payload."))
q=A.cl(a3)
p=A.l([],t.s)
for(o=J.D(l);o.k();)p.push(A.G(o.gn()))
return new A.mu(q,p,A.cF(a3))
case"mutate":return new A.lY(A.cl(a3),A.Ko(a3.h(0,"mutation")),A.cF(a3))
case"query":return new A.mm(A.cl(a3),A.fS(a3.h(0,a)),A.cF(a3))
case"count":return new A.l6(A.cl(a3),A.fS(a3.h(0,a)),A.cF(a3))
case"countDistinct":return new A.l5(A.cl(a3),A.qe(a3,a0),A.fS(a3.h(0,a)),A.cF(a3))
case"distinct":q=A.cl(a3)
p=A.qe(a3,a0)
if(A.an(a3.h(0,"limit"))){o=a3.h(0,"limit")
o.toString
A.am(o)}else o=null
return new A.li(q,p,o,A.cF(a3))
case"ids":return new A.lx(A.cl(a3),A.fS(a3.h(0,a)),A.cF(a3))
case"aggregate":k=a3.h(0,"fn")
j=A.BD(new A.al(B.ct,new A.qc(k),t.gx))
if(j==null)throw A.b(A.a4("Unknown aggregate: "+A.q(k)))
return new A.kB(A.cl(a3),j,A.qe(a3,a0),A.fS(a3.h(0,a)),A.cF(a3))
case"explain":return new A.lo(A.cl(a3),A.fS(a3.h(0,a)),A.cF(a3))
case"search":return new A.mz(A.cl(a3),A.IK(a3.h(0,a)),A.cF(a3))
case"txBegin":i=a3.h(0,"readOnly")
if(!A.bv(i))throw A.b(A.a4("Malformed txBegin payload."))
h=a3.h(0,"durability")
g=A.BD(new A.al(B.cK,new A.qd(h),t.mE))
if(typeof h=="string"&&g==null)throw A.b(A.a4("Unknown tx durability: "+h))
return new A.mU(i,g==null?B.bk:g)
case"txCommit":case"txRollback":f=a3.h(0,"session")
if(typeof f!="string")throw A.b(A.a4("Malformed tx payload."))
return a2==="txCommit"?new A.mV(f):new A.mX(f)
case"txSavepoint":case"txRollbackTo":case"txRelease":f=a3.h(0,"session")
e=a3.h(0,"name")
if(typeof f!="string"||typeof e!="string")throw A.b(A.a4("Malformed savepoint payload."))
A:{if("txSavepoint"===a2){q=new A.mZ(f,e)
break A}if("txRollbackTo"===a2){q=new A.mY(f,e)
break A}q=new A.mW(f,e)
break A}return q
case"watch":return new A.nc(A.cl(a3),A.fS(a3.h(0,a)))
case"watchCancel":d=a3.h(0,"subscription")
if(typeof d!="string")throw A.b(A.a4("Malformed watchCancel payload."))
return new A.nb(d)
case"analyze":if(typeof a3.h(0,a1)=="string"){q=a3.h(0,a1)
q.toString
A.G(q)}else q=null
return new A.kD(q)
case"walCheckpoint":return B.bP
case"vacuum":return B.bO
case"pruneOutbox":return B.bN
case"compact":c=a3.h(0,a1)
b=a3.h(0,"olderThanMs")
if(typeof c!="string"||!A.an(b))throw A.b(A.a4("Malformed compact payload."))
return new A.l1(c,b)
default:return null}},
cl(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.a4("Malformed store name."))
return s},
qe(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.a4('Malformed field "'+b+'".'))
return s},
cF(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.a4("Malformed session id."))
return s},
Hu(a,b){var s,r,q
if(t.f.b(a)){s=A.w(t.N,t.X)
for(r=a.gaj(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),q.b)}return s}throw A.b(A.a4('Malformed field "'+b+'".'))},
KU(a){var s
A:{if(a instanceof A.eO){s="ValidationException"
break A}if(a instanceof A.eN){s="UniqueConstraintException"
break A}if(a instanceof A.eD){s="NotNullConstraintException"
break A}if(a instanceof A.fl){s="CheckConstraintException"
break A}if(a instanceof A.fM){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fw){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hf){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fy){s="FtsUnavailableError"
break A}if(a instanceof A.eH){s="SchemaRegistrationError"
break A}if(a instanceof A.fZ){s="SchemaTooNewError"
break A}if(a instanceof A.cP){s="StorageError"
break A}if(a instanceof A.fV){s="RecordNotFoundException"
break A}if(a instanceof A.h4){s="StaleCursorError"
break A}if(a instanceof A.fE){s="MissingLimitError"
break A}if(a instanceof A.fn){s="ConflictBlockedError"
break A}if(a instanceof A.ep){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.fU){s="ReadOnlyTxError"
break A}throw A.b(A.fT(u.P))}return s},
Kv(a){var s
A:{if(a instanceof A.iQ){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.iT){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iR){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iU){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iN){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iO){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iM){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iS){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iP){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.fT(u.P))}return s},
Ko(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.a4("Malformed mutation payload."))
s=t.N
r=a.aL(0,new A.Af(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iQ(A.oH(r.h(0,n),n))
case"upsert":return new A.iT(A.oH(r.h(0,n),n))
case"putAll":return new A.iR(A.Fr(r.h(0,m),m))
case"upsertAll":return new A.iU(A.Fr(r.h(0,m),m))
case"patch":return new A.iN(A.Ak(r.h(0,l),l),A.oH(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.a4("Malformed patchAll patches."))
k=A.w(s,t.G)
for(s=p.gaj(),s=s.gt(s);s.k();){o=s.gn()
k.j(0,J.a_(o.a),A.oH(o.b,"patches"))}return new A.iO(k)
case"archive":return new A.iM(A.Ak(r.h(0,l),l))
case"restore":return new A.iS(A.Ak(r.h(0,l),l))
case"purge":return new A.iP(A.Ak(r.h(0,l),l))
default:throw A.b(A.a4("Unknown mutation kind: "+A.q(q)))}},
Ak(a,b){if(typeof a=="string")return a
throw A.b(A.a4('Malformed mutation field "'+b+'".'))},
oH(a,b){var s,r,q
if(t.f.b(a)){s=A.w(t.N,t.X)
for(r=a.gaj(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),q.b)}return s}throw A.b(A.a4('Malformed mutation field "'+b+'".'))},
Fr(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.D(a);r.k();)s.push(A.oH(r.gn(),b))
return s}throw A.b(A.a4('Malformed mutation field "'+b+'".'))},
fS(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="predicate",a=null,a0=t.f
if(!a0.b(a1))throw A.b(A.a4("Malformed query spec."))
s=a1.aL(0,new A.vu(),t.N,t.z)
r=new A.vv()
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
a0=a0.b(s.h(0,b))?A.BN(s.h(0,b)):a
h=A.l([],t.gc)
if(i.b(o))for(g=J.D(o);g.k();)h.push(A.Iz(g.gn()))
g=A.an(m)?m:a
f=J.v(s.h(0,"all"),!0)
if(i.b(n)){i=A.l([],t.s)
for(e=J.D(n);e.k();)i.push(J.a_(e.gn()))}else i=a
e=J.v(s.h(0,"includeArchived"),!0)
d=J.v(s.h(0,"includeHidden"),!0)
c=typeof l=="string"?l:a
return new A.mn(k,j,a0,h,g,f,i,e,d,c,J.v(s.h(0,"backward"),!0))},
DR(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.a4(l))
s=a.aL(0,new A.vq(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.a4(l))
p=A.BD(new A.al(B.cm,new A.vr(q),t.mz))
if(p==null)throw A.b(A.a4("Unknown query operator: "+q))
o=A.oM(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.D(n.a(s.h(0,"values")));n.k();)m.push(A.oM(n.gn()))
n=m}else n=null
return new A.eG(r,p,o,n)},
BN(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.a4("Malformed predicate tree."))
s=a.aL(0,new A.uT(),t.N,t.z)
r=new A.uS()
switch(s.h(0,"kind")){case"leaf":return new A.iG(A.DR(s))
case"not":return new A.j0(A.BN(s.h(0,"child")))
case"all":return new A.i4(r.$1(s.h(0,q)))
case"any":return new A.i5(r.$1(s.h(0,q)))
default:throw A.b(A.a4("Unknown predicate node kind: "+A.q(s.h(0,"kind"))))}},
Iz(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.a4(q))
s=a.aL(0,new A.vs(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.a4(q))
return new A.ml(r,J.v(s.h(0,"desc"),!0))},
IK(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.a4("Malformed search spec."))
s=a.aL(0,new A.vK(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.a4("Malformed search term."))
q=s.h(0,"limit")
p=A.an(q)?q:null
return new A.vJ(r,p,J.v(s.h(0,"all"),!0),J.v(s.h(0,"includeArchived"),!0),J.v(s.h(0,"includeHidden"),!0))},
Hv(a){return new A.fp(a)},
HA(a){return new A.fq(a)},
HT(a){return new A.fz(a)},
H9(a){return new A.fh(a)},
HH(a){return new A.fu(a)},
oO(a){var s,r,q
if(a instanceof A.aM)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gfc().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.oO(r.gn()))
return s}if(t.f.b(a)){s=A.w(t.N,t.X)
for(r=a.gaj(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),A.oO(q.b))}return s}if(a==null||A.bv(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.a4("Value of type "+J.bp(a).l(0)+" is not wire-safe."))},
oM(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value."
if(t.f.b(a)){r=a.h(0,"__lp_t")
q=J.dq(r)
if(q.S(r,"datetime")){s=a.h(0,"v")
if(A.an(s))return new A.aM(A.lf(s,0,!0),0,!0)
throw A.b(A.a4("Malformed datetime wire value."))}if(q.S(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{q=B.ar.v(s)
return q}catch(p){if(t.U.b(A.E(p)))throw A.b(A.a4(l))
else throw p}throw A.b(A.a4(l))}q=A.w(t.N,t.X)
for(o=a.gaj(),o=o.gt(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string")q.j(0,m,A.oM(n.b))}return q}if(t.j.b(a)){q=[]
for(o=J.D(a);o.k();)q.push(A.oM(o.gn()))
return q}return a},
a4(a){return new A.jv(a)},
qc:function qc(a){this.a=a},
qd:function qd(a){this.a=a},
dw:function dw(){},
l0:function l0(a,b){this.a=a
this.b=b},
nd:function nd(a,b){this.a=a
this.b=b},
ub:function ub(){},
iQ:function iQ(a){this.a=a},
iT:function iT(a){this.a=a},
iR:function iR(a){this.a=a},
iU:function iU(a){this.a=a},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
iM:function iM(a){this.a=a},
iS:function iS(a){this.a=a},
iP:function iP(a){this.a=a},
Af:function Af(){},
mn:function mn(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
vu:function vu(){},
vv:function vv(){},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vq:function vq(){},
vr:function vr(a){this.a=a},
b_:function b_(a,b){this.a=a
this.b=b},
cM:function cM(){},
uT:function uT(){},
uS:function uS(){},
iG:function iG(a){this.a=a},
j0:function j0(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
ml:function ml(a,b){this.a=a
this.b=b},
vs:function vs(){},
cC:function cC(a,b){this.a=a
this.b=b},
vJ:function vJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vK:function vK(){},
mr:function mr(){},
m6:function m6(a,b){this.a=a
this.b=b},
kV:function kV(){},
lu:function lu(){},
kZ:function kZ(){},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function mu(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
mm:function mm(a,b,c){this.a=a
this.b=b
this.c=c},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
l5:function l5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
li:function li(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lo:function lo(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b){this.a=a
this.b=b},
mU:function mU(a,b){this.a=a
this.b=b},
mV:function mV(a){this.a=a},
mX:function mX(a){this.a=a},
mZ:function mZ(a,b){this.a=a
this.b=b},
mY:function mY(a,b){this.a=a
this.b=b},
mW:function mW(a,b){this.a=a
this.b=b},
nc:function nc(a,b){this.a=a
this.b=b},
nb:function nb(a){this.a=a},
kD:function kD(a){this.a=a},
na:function na(){},
n8:function n8(){},
mi:function mi(){},
l1:function l1(a,b){this.a=a
this.b=b},
aR:function aR(){},
fJ:function fJ(){},
kW:function kW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lv:function lv(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
fF:function fF(a){this.a=a},
fR:function fR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fz:function fz(a){this.a=a},
fh:function fh(a){this.a=a},
fu:function fu(a){this.a=a},
h_:function h_(a){this.a=a},
my:function my(a,b){this.a=a
this.b=b},
hb:function hb(a){this.a=a},
ne:function ne(a){this.a=a},
fO:function fO(a){this.a=a},
fm:function fm(a){this.a=a},
jv:function jv(a){this.a=a},
ah(a){var s,r=new A.a2("")
A.ci(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
CL(a){var s,r,q
for(s=new A.mv(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
Kj(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c9(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
ci(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bv(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.an(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.Kj(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a7(b,h)
a.a+=r
return A.CL(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.L(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.ci(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.D(b.gL());s.k();){n=s.gn()
r=J.a_(n)
if(B.b.bR(o,new A.Bg(r)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a5(r,n))}B.b.cm(o,new A.Bh())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.r)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a7(k.a,h)
a.a+=j
i=A.CL(j)
a.a+=":"
q=q+i+1+A.ci(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.O("Cannot canonicalize value of type "+J.bp(b).l(0),h))},
Bg:function Bg(a){this.a=a},
Bh:function Bh(){},
IO(a){var s,r,q,p=A.ag("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ef(a)
if(p==null)return B.dc
s=p.b
r=s[1]
r.toString
r=A.aH(r)
q=s[2]
q.toString
q=A.aH(q)
s=s[3]
s=A.j6(s==null?"":s,null)
return new A.f2(r,q,s==null?0:s)},
DZ(a,b,c){var s,r=A.IO(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eK(a,b){return A.IP(a,b)},
IP(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eK=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b2("SELECT sqlite_version() AS v"),$async$eK)
case 3:g=d.S(c.c2(a2),"v")
g.toString
A.G(g)
k=t.B
d=A
c=A
b=J
s=4
return A.a(a.b2("PRAGMA compile_options"),$async$eK)
case 4:j=d.N(new c.bI(b.aL(a2,new A.vU(),t.X),k),k.i("o.E"))
n=B.b.bR(j,new A.vV())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.K("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eK)
case 11:s=12
return A.a(a.K("DROP TABLE lp__fts5_probe"),$async$eK)
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
k=a0===B.b9
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b2("PRAGMA journal_mode"),$async$eK)
case 19:l=a2
if(J.ed(l))m=A.a7(J.c2(J.c2(l).gaZ()))
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
case 18:case 14:h=A.DZ(g,3,37)
k=k&&J.v(m,"wal")
q=new A.mK(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eK,r)},
me:function me(a,b){this.a=a
this.b=b},
mK:function mK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vU:function vU(){},
vV:function vV(){},
ib:function ib(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
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
pq:function pq(a,b){this.a=a
this.b=b},
pr:function pr(){},
ps:function ps(){},
D1(a){return new Uint8Array(A.b3(a))},
r5:function r5(){},
p_:function p_(a,b,c){this.b=a
this.c=b
this.d=c},
CD(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cb
if(r===B.I){r=a.f
r.toString
r=!B.b.G(r,b)}else r=!1
if(r)return B.ch
return s
case 1:case 4:return!A.an(b)?B.cc:s
case 2:return typeof b!="number"?B.cd:s
case 3:return!A.bv(b)?B.ce:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cf:s
case 7:return!t.j.b(b)?B.cg:s}},
dp(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gdg(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.Cq(n,a0.h(0,l),new Uint8Array(A.b3(B.e.v(q+l+"\x00"+e))),m))}k=A.w(h,g)
for(h=new A.aO(a0,A.n(a0).i("aO<1,2>")).gt(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.G(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ah(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
FO(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.Cq(b,c,new Uint8Array(A.b3(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
Lp(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gdg()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.Cq(n,g.h(0,l),new Uint8Array(A.b3(B.e.v(q+l+"\x00"+f))),m))}k=A.w(t.N,t.X)
for(s=g.gaj(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.G(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ah(k))
a.push(c?1:0)
a.push(0)},
ch(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a7(b.h(0,"id"))
f.j(0,n,A.F1(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.v(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.aA(k,null)
if(t.f.b(j))f.E(0,A.ba(j,h,g))}return f},
CB(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.D(b);s.k();)r.push(A.ch(a,s.gn(),c,d))
return r},
CC(a,b,c,d,e){var s,r,q,p,o=A.l([],t.fj)
for(s=J.D(d),r=!1;s.k();){q=s.gn()
if(q==="id")continue
if(q==="archived"){r=!0
continue}o.push(new A.a5(q,a.ff(q)))}s=A.l([],t.d)
for(q=J.D(b),p=a.a;q.k();)s.push(A.Kn(q.gn(),o,r,c,e,p))
return s},
Kn(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a7(a.h(0,"id"))
l.j(0,p,A.F1(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.v(a.h(0,m),1))
return l},
F1(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.x('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.jm("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bp(b).l(0)+"."))
r=B.l.f8(s.w5(B.ar.v(b),new Uint8Array(A.b3(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.R===q||B.T===q){p=A.aH(r)
break A}if(B.S===q){p=A.M1(r)
break A}if(B.U===q||B.V===q){p=B.h.aA(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.v(b,1)
if(p===B.U||p===B.V){if(typeof b!="string")throw A.b(A.jm("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bp(b).l(0)+"."))
return B.h.aA(b,o)}return b},
Cq(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.x('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.v(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a_(b)
break
case 6:case 7:s=A.ah(b)
break
default:A.G(b)
s=b}r=d.wK(B.e.v(s),c)
return B.aq.gfc().v(r)}switch(a.b.a){case 3:return J.v(b,!0)?1:0
case 6:case 7:return A.ah(b)
default:return b}},
bg(a,b){var s,r,q,p,o,n="archived",m=a.gdg(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.r)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.v(o,!0):o)}for(l=b.gaj(),l=l.gt(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.G(0,p))continue
k.j(0,p,s.b)}if(J.v(b.h(0,n),!0))k.j(0,n,!0)
return k},
At(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gdg(),i=A.l([],t.iE)
i.push(new A.a5("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a5(o,p.b===B.B?J.v(n,!0):n))}for(s=c.gaj(),s=s.gt(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.G(0,o))continue
i.push(new A.a5(o,r.b))}if(J.v(c.h(0,"archived"),!0))i.push(B.da)
B.b.cm(i,new A.Au())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.r)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a7(r.a,null)
a.a+=k
o=A.CL(k)
a.a+=":"
m=m+o+1+A.ci(a,r.b)}a.a+="}"
return m+1},
d5:function d5(a,b){this.a=a
this.b=b},
Au:function Au(){},
AK(a4,a5,a6,a7){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$AK=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)A:switch(s){case 0:a2=a6.b
a3=a6.r
if(a2==="explain")a3="EXPLAIN QUERY PLAN "+a3
if(a2==="query"&&a7===0){q=A.m(["items",A.l([],t.d),"lastRow",null,"firstRow",null,"hasNext",!1],t.N,t.X)
s=1
break}s=3
return A.a(a5.$2(a3,a6.w),$async$AK)
case 3:p=a9
switch(a2){case"query":a2=a7==null
o=!a2&&J.ai(p)>a7
n=a2?p:J.oZ(p,a7).dz(0)
m=a4.ae(a6.d).a
l=a6.z
a2=a4.ax
k=a4.ay
j=l!=null?A.CC(m,n,a2,l,k):A.CB(m,n,a2,k)
i=a6.y
if(i==null)h=j
else{a2=A.l([],t.d)
for(k=j.length,g=i.$ti,f=g.i("aj<I.E>"),g=g.i("I.E"),e=t.N,d=t.X,c=0;c<j.length;j.length===k||(0,A.r)(j),++c){b=j[c]
a=A.w(e,d)
for(a0=new A.aj(i,i.gm(0),f);a0.k();){a1=a0.d
if(a1==null)a1=g.a(a1)
if(b.I(a1))a.j(0,a1,b.h(0,a1))}a2.push(a)}h=a2}a2=j.length!==0?B.b.ga_(j):null
q=A.m(["items",h,"lastRow",a2,"firstRow",j.length!==0?B.b.gD(j):null,"hasNext",o],t.N,t.X)
s=1
break A
case"count":case"countDistinct":a2=A.e9(p)
q=A.m(["value",a2==null?0:a2],t.N,t.X)
s=1
break A
case"distinct":a2=[]
for(k=J.D(p);k.k();){g=k.gn()
if(g.gW(g))a2.push(J.c2(g.gaZ()))}q=A.m(["values",a2],t.N,t.X)
s=1
break A
case"ids":a2=A.l([],t.s)
for(k=J.D(p);k.k();){g=k.gn().h(0,"id")
g.toString
a2.push(A.G(g))}q=A.m(["ids",a2],t.N,t.X)
s=1
break A
case"explain":a2=t.X
q=A.m(["plan",J.aL(p,new A.AL(),a2).B(0,"\n")],t.N,a2)
s=1
break A
case"sum":case"avg":case"min":case"max":a2=J.L(p)
q=A.m(["value",a2.gF(p)?null:J.S(a2.gD(p),"v")],t.N,t.X)
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
return A.f($async$AK,r)},
AL:function AL(){},
Di(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
l4:function l4(a,b){this.a=a
this.b=b},
ik:function ik(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
r2:function r2(){},
r1:function r1(){},
r3:function r3(){},
r0:function r0(a){this.a=a},
Hz(a){return'"'+A.z(a,'"','""')+'"'},
Hy(a,b){var s,r,q,p=a.a,o=J.L(p),n=b.a,m=J.L(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.v(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
pP:function pP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ij:function ij(a){this.a=a},
r_:function r_(a){this.a=a},
qZ:function qZ(){},
qY:function qY(a){this.a=a},
qX:function qX(a,b){this.a=a
this.b=b},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
qW:function qW(){},
au(a,b){return new A.eO(b,a)},
jm(a){return new A.cP(a)},
BV(a){return new A.fV(a)},
DW(a){return new A.fZ(a)},
aS(a){return new A.eH(a)},
rj(a){return new A.fy(a)},
C_(a){return new A.h4(a)},
DG(a){return new A.fE(a)},
Df(a){return new A.fn(a)},
Bt(a){return new A.ep(a)},
Gd(a,b){var s,r="UNIQUE constraint failed",q=J.a_(a),p=a instanceof A.c9,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.G(q,"PRIMARY KEY")&&!B.a.G(q,r)
else p=!0
if(p)return new A.fM("PRIMARY KEY constraint violated.")
if(o===2067||B.a.G(q,r)){s=A.F5(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.eN(s,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.G(q,"NOT NULL constraint failed")){p=A.F5(q,"NOT NULL constraint failed:")
return new A.eD(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.G(q,"CHECK constraint failed")||o===275||n===275)return new A.fl("CHECK constraint violated.")
if(B.a.G(q,"FOREIGN KEY")||o===787||n===787)return new A.fw("FOREIGN KEY constraint violated.")
if(B.a.G(q,"database or disk is full"))return new A.cP("Database full: "+A.q(a))
return new A.cP("SQLite error: "+A.q(a))},
F5(a,b){var s,r,q,p,o,n,m=B.a.bU(a,b)
if(m<0)return"?"
s=B.a.ag(a,m+b.length)
r=s.length
q=B.a.bU(s,",")
if(q>=0)r=q
p=B.a.bU(s,"(")
s=B.a.ck(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.dn(s,".")
s=B.a.ck(o>=0?B.a.ag(s,o+1):s)
if(B.a.T(s,'"')&&B.a.c9(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
dI:function dI(){},
eO:function eO(a,b){this.b=a
this.a=b},
eN:function eN(a,b){this.b=a
this.a=b},
eD:function eD(a,b){this.b=a
this.a=b},
fl:function fl(a){this.a=a},
fM:function fM(a){this.a=a},
fw:function fw(a){this.a=a},
cP:function cP(a){this.a=a},
fV:function fV(a){this.a=a},
fZ:function fZ(a){this.a=a},
eH:function eH(a){this.a=a},
hf:function hf(a){this.a=a},
fy:function fy(a){this.a=a},
h4:function h4(a){this.a=a},
fE:function fE(a){this.a=a},
fn:function fn(a){this.a=a},
ep:function ep(a){this.a=a},
fU:function fU(a){this.a=a},
Mz(a,b,c){a.vY(!0,new A.Ba(c),"lp_norm_"+b)},
FT(a,b,c,d){var s,r,q='""',p=b.a
if(p.gF(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
Ba:function Ba(a){this.a=a},
Kr(){return Date.now()},
oC(a){var s,r,q
if(t.G.b(a)){s=A.w(t.N,t.X)
for(r=a.gaj(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.oC(q.b))}return s}if(t.f.b(a)){s=A.w(t.z,t.X)
for(r=a.gaj(),r=r.gt(r);r.k();){q=r.gn()
s.j(0,q.a,A.oC(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.oC(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b3(a))
return a},
d4(a,b,c,d,e,f,g,h){var s=null,r=B.D,q=null,p=null
return A.I2(a,b,c,d,e,f,g,h)},
I2(b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d4=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a3=null
a4=B.D
a5=null
a6=null
a7=null
a7=b1
p=4
s=7
return A.a(A.cI(a7,b6),$async$d4)
case 7:s=8
return A.a(A.eK(a7,b6),$async$d4)
case 8:n=b9
i=0
case 9:if(!(i<3)){s=11
break}m=B.cq[i]
s=12
return A.a(a7.K(m),$async$d4)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cL[i]
s=16
return A.a(a7.K(l),$async$d4)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a5
if(f==null)f=A.Mo()
e=a6
d=a4
c=t.N
b=t.ls
a=new A.mc()
a0=new A.lK(b5,h,g,a,b4,b2,e,b0,b3,a3,f,A.w(c,t.nv),new A.wy(A.w(c,b),A.w(b,t.nL)),d,new A.pq(A.dR(null,null,t.iv),A.dR(null,null,t.oZ)))
b=new A.xz(A.bD(null,t.H),a.gyl())
a0.x=b
d=a0.a=new A.tv(a0,h,g,b,a,e,d)
a0.b=new A.wn(d)
a0.c=new A.uc()
a0.d=new A.vB(d)
d=A.I0(d)
a0.e!==$&&A.cA()
a0.e=d
d=$.Bj()
a0.CW!==$&&A.cA()
a0.CW=new A.uo(a0,d)
a0.cx!==$&&A.cA()
a0.cx=new A.uj(a0,d)
a0.cy!==$&&A.cA()
a0.cy=new A.q2(a0)
a0.db!==$&&A.cA()
a0.db=new A.tG(a0,b0)
k=a0
s=17
return A.a(A.lL(a7,k.ch),$async$d4)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aU(j),$async$d4)
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
cI(a,b){return A.I1(a,b)},
I1(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cI=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.b9?2:3
break
case 2:q=5
s=8
return A.a(a.K("PRAGMA journal_mode=WAL"),$async$cI)
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
return A.a(a.K("PRAGMA wal_autocheckpoint=0"),$async$cI)
case 9:s=10
return A.a(a.K("PRAGMA mmap_size=67108864"),$async$cI)
case 10:case 3:s=11
return A.a(a.K("PRAGMA synchronous=NORMAL"),$async$cI)
case 11:s=12
return A.a(a.K("PRAGMA foreign_keys=ON"),$async$cI)
case 12:s=13
return A.a(a.K("PRAGMA busy_timeout=5000"),$async$cI)
case 13:s=14
return A.a(a.K("PRAGMA cache_size=-8000"),$async$cI)
case 14:s=15
return A.a(a.K("PRAGMA temp_store=MEMORY"),$async$cI)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cI,r)},
lL(a,b){var s=0,r=A.h(t.H),q,p
var $async$lL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.cj("lp_migrations","version = ?",[1]),$async$lL)
case 3:if(p.ed(d)){s=1
break}s=4
return A.a(a.aE(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$lL)
case 4:case 1:return A.e(q,r)}})
return A.f($async$lL,r)},
I0(a){var s=t.N
s=new A.t2(a,A.dR(null,null,t.fq),A.w(s,t.g8),A.w(s,t.oF))
s.pe(a)
return s},
B3(a){var s,r,q,p
A:{if(a instanceof A.iG){s=A.L2(a.a)
break A}if(a instanceof A.j0){s=new A.cL(A.B3(a.a))
break A}if(a instanceof A.i4){r=a.a
s=A.l([],t.iR)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.B3(r[p]))
s=new A.ee(s)
break A}if(a instanceof A.i5){r=a.a
s=A.l([],t.iR)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.B3(r[p]))
s=new A.dt(s)
break A}throw A.b(A.fT(u.P))}return s},
L2(a){var s,r,q,p="isNull",o=a.a
switch(a.b.a){case 0:s=a.c
if(s==null)return new A.aN(o,p,B.m)
return new A.aN(o,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.O("neq(null) matches no rows; use isNotNull.",null))
return new A.cL(new A.aN(o,"eq",[s]))
case 2:return new A.aN(o,"gt",[a.c])
case 3:return new A.aN(o,"gte",[a.c])
case 4:return new A.aN(o,"lt",[a.c])
case 5:return new A.aN(o,"lte",[a.c])
case 6:r=a.d
return new A.aN(o,"inValues",r==null?B.m:r)
case 7:q=a.d
if(q==null)q=B.m
if(q.length!==2)throw A.b(A.O("between requires exactly two values.",null))
return new A.aN(o,"between",q)
case 8:return new A.aN(o,"startsWith",[a.c])
case 9:return new A.aN(o,"endsWith",[a.c])
case 10:return new A.aN(o,"contains",[a.c])
case 11:return new A.aN(o,p,B.m)
case 12:return new A.cL(new A.aN(o,p,B.m))}},
tv:function tv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.as=g},
lj:function lj(a,b){this.a=a
this.b=b},
mL:function mL(a,b,c){this.a=a
this.c=b
this.e=c},
uQ:function uQ(a){this.a=a},
lK:function lK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
tw:function tw(a,b){this.a=a
this.b=b},
tz:function tz(a){this.a=a},
ty:function ty(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tx:function tx(){},
nD:function nD(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
yg:function yg(a,b){this.a=a
this.b=b},
yf:function yf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yd:function yd(a,b){this.a=a
this.b=b},
ye:function ye(a,b){this.a=a
this.b=b},
yc:function yc(a){this.a=a},
hp:function hp(a,b){this.a=a
this.b=b},
vB:function vB(a){this.a=a},
wn:function wn(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
wu:function wu(a){this.a=a},
wq:function wq(a){this.a=a},
wt:function wt(a,b,c){this.a=a
this.b=b
this.c=c},
ws:function ws(a,b,c){this.a=a
this.b=b
this.c=c},
wr:function wr(a,b,c){this.a=a
this.b=b
this.c=c},
wp:function wp(a){this.a=a},
wo:function wo(){},
f4:function f4(){},
ok:function ok(a,b,c){var _=this
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
t2:function t2(a,b,c,d){var _=this
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
tn:function tn(a,b){this.a=a
this.b=b},
to:function to(){},
tp:function tp(a,b){this.a=a
this.b=b},
tq:function tq(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
ts:function ts(a,b){this.a=a
this.b=b},
tt:function tt(a,b){this.a=a
this.b=b},
tu:function tu(a,b){this.a=a
this.b=b},
ti:function ti(){},
tj:function tj(){},
tk:function tk(){},
tl:function tl(){},
tm:function tm(){},
t5:function t5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t6:function t6(){},
t7:function t7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t8:function t8(){},
tb:function tb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tc:function tc(){},
t4:function t4(a){this.a=a},
t3:function t3(a){this.a=a},
ta:function ta(a){this.a=a},
t9:function t9(a){this.a=a},
td:function td(a,b){this.a=a
this.b=b},
nV:function nV(){},
fC(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a0(h).i("al<1>")
f=A.N(new A.al(h,new A.u6(c,b),g),g.i("o.E"))
B.b.cm(f,new A.u7())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.ch,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aS('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jl()
$.kv()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aQ(a,b,m),$async$fC)
case 8:s=6
break
case 7:s=9
return A.a(A.lU(a,b,m),$async$fC)
case 9:case 6:if(j.b==null)j.b=$.mg.$0()
s=10
return A.a(A.fD(i,j.gnh(),o,q+l,p,l),$async$fC)
case 10:case 3:f.length===h||(0,A.r)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aS('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.M("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fC)
case 11:return A.e(null,r)}})
return A.f($async$fC,r)},
fD(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fD=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b2("SELECT MAX(version) AS m FROM lp_migrations"),$async$fD)
case 2:q=p.e9(h)
if(q==null)q=0
s=3
return A.a(a.aE(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fD)
case 3:return A.e(null,r)}})
return A.f($async$fD,r)},
lU(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$lU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.B
h=A
g=A
f=J
s=2
return A.a(l.b2("PRAGMA table_info("+('"'+A.z(k,'"','""')+'"')+")"),$async$lU)
case 2:i=h.dH(new g.bI(f.aL(e,new A.u3(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.CO()
if(!m.b.test(n))A.u(A.aS('Field "'+n+u.Z))
if(o.c)throw A.b(A.aS('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.G(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.K("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.glr()),$async$lU)
case 6:i.u(0,n)
case 4:j.length===q||(0,A.r)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$lU,r)},
aQ(a,b,c){return A.Id(a,b,c)},
Id(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aQ=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.Bt('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.ij(b0.w).ks(b1)
j=A.Ig(b0.f,a2,a3)
p=4
s=7
return A.a(A.u4(a7,l),$async$aQ)
case 7:i=b4
s=8
return A.a(b0.ia(j),$async$aQ)
case 8:h=b4
if(J.v(i,"done")&&h){a3=A.Bt('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.q(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.lW(a7,m),$async$aQ)
case 9:g=b4
s=10
return A.a(A.lW(a7,n),$async$aQ)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b2("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aQ)
case 13:a0=a9.e9(b4)
e=a0==null?0:a0
a3=A.z(m,'"','""')
s=14
return A.a(a7.K("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aQ)
case 14:s=15
return A.a(A.d7(b0,a7,b1,k,l,e),$async$aQ)
case 15:s=1
break
case 12:s=16
return A.a(a7.K("DROP TABLE IF EXISTS "+('"'+A.z(m,'"','""')+'"')),$async$aQ)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.il(j),$async$aQ)
case 19:case 18:s=20
return A.a(A.lV(a7,l,"rebuilding"),$async$aQ)
case 20:s=21
return A.a(a7.K("VACUUM INTO '"+A.z(j,"'","''")+"'"),$async$aQ)
case 21:a3=k.b
a4=A.z(n,'"','""')
d=B.a.l6(a3,'"'+a4+'"','"'+A.z(m,'"','""')+'"')
s=22
return A.a(a7.K(d),$async$aQ)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ad("SELECT rowid, * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aQ)
case 25:b=b4
if(J.bz(b)){s=24
break}s=26
return A.a(a7.a2(new A.u5(b,b1,b0,b2,m),a3),$async$aQ)
case 26:a4=J.S(J.oX(b),"rowid")
a4.toString
c=A.am(a4)
if(J.ai(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b2("SELECT COUNT(*) c FROM "+('"'+A.z(n,'"','""')+'"')),$async$aQ)
case 27:a5=a9.e9(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b2("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aQ)
case 28:e=a9.e9(b4)
a0=e==null?0:e
if(!J.v(a,a0)){a3=A.x('Rebuild of "'+a2+'" count mismatch: '+A.q(a)+" vs "+A.q(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.K("DROP TABLE "+('"'+A.z(n,'"','""')+'"')),$async$aQ)
case 29:a3=A.z(m,'"','""')
s=30
return A.a(a7.K("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aQ)
case 30:s=31
return A.a(A.d7(b0,a7,b1,k,l,a),$async$aQ)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.E(a8)
if(a3 instanceof A.ep)throw a8
else if(a3 instanceof A.c9){a1=a3
throw A.b(A.Bt('Destructive migration for "'+a2+'" failed: '+A.q(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aQ,r)},
d7(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l
var $async$d7=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.K(q[o]),$async$d7)
case 5:case 3:q.length===p||(0,A.r)(q),++o
s=2
break
case 4:q=c.w!=null
s=q?6:7
break
case 6:s=8
return A.a(b.K("DROP TABLE IF EXISTS "+('"'+A.z(c.a+"_fts",'"','""')+'"')),$async$d7)
case 8:case 7:p=d.d,n=p.length,o=0
case 9:if(!(o<p.length)){s=11
break}s=12
return A.a(b.K(p[o]),$async$d7)
case 12:case 10:p.length===n||(0,A.r)(p),++o
s=9
break
case 11:s=q?13:14
break
case 13:q=c.a+"_fts"
p=A.z(q,'"','""')
s=15
return A.a(b.K("INSERT INTO "+('"'+p+'"')+"("+('"'+A.z(q,'"','""')+'"')+") VALUES('rebuild')"),$async$d7)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.b2("SELECT COUNT(*) c FROM "+('"'+A.z(q,'"','""')+'"')),$async$d7)
case 16:m=l.e9(h)
if((m==null?0:m)!==f)throw A.b(A.x('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.lV(b,e,"done"),$async$d7)
case 17:return A.e(null,r)}})
return A.f($async$d7,r)},
lW(a,b){var s=0,r=A.h(t.y),q,p
var $async$lW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ad("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$lW)
case 3:q=p.ed(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lW,r)},
Ig(a,b,c){var s=null,r=$.i1(),q=r.wb(a),p=A.dO(a,r.a).gkp()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.ny(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
If(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.au('Field "'+s+'" is required.',s))}if(b==null)return
r=A.CD(a,b)
if(r!=null)throw A.b(A.au(A.Ic(a,b,r),a.a))},
Ie(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
A.If(p,b.h(0,p.a))}},
Ic(a,b,c){var s,r=a.a,q=J.bp(b)
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
u4(a,b){var s=0,r=A.h(t.v),q,p,o
var $async$u4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.nH("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$u4)
case 3:p=d
o=J.L(p)
q=o.gF(p)?null:A.a7(J.S(o.gD(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$u4,r)},
lV(a,b,c){var s=0,r=A.h(t.H)
var $async$lV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cd(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.Q),$async$lV)
case 2:return A.e(null,r)}})
return A.f($async$lV,r)},
Ks(){return Date.now()},
u6:function u6(a,b){this.a=a
this.b=b},
u7:function u7(){},
u3:function u3(){},
u5:function u5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mc:function mc(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
kn(a){var s=A.z(a,"\\","\\\\")
s=A.z(s,"%","\\%")
return A.z(s,"_","\\_")},
Cp(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.aN){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.u(A.az(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.az(q,l,'The "'+s+'" predicate carries exactly '+A.q(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.az(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gar(a.c)==null)throw A.b(A.az(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.cL){A.Cp(a.a)
break A}p=a instanceof A.ee
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.dt
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.az(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.r)(n),++m)A.Cp(n[m])}break A}},
Ac(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.aN)return A.F_(a,!1,b)
if(a instanceof A.cL){s=a.a
r=A.Ac(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.dt||s instanceof A.cL){s=new A.a5("NOT "+q,p)
break A}s=new A.a5("NOT ("+q+")",p)
break A}return s}if(a instanceof A.ee){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){l=A.Ac(s[m],!1)
o.push(l.a)
B.b.E(p,l.b)}k=B.b.B(o," AND ")
return new A.a5(b?k:"("+k+")",p)}if(a instanceof A.dt){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){j=A.Kl(s[m])
o.push(j.a)
B.b.E(p,j.b)}return new A.a5("("+B.b.B(o," OR ")+")",p)}throw A.b(A.fT(u.M))},
Kl(a){var s
A:{if(a instanceof A.aN){s=A.F_(a,!0,!1)
break A}s=A.Ac(a,!1)
break A}return s},
F_(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.z(a.a,'"','""')+'"',n=A.N(a.c,t.X),m=a.b
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
case"inValues":s=o+" IN ("+B.b.B(A.af(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.kn(A.G(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kn(A.G(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kn(A.G(r))+"%"
break
default:throw A.b(A.az(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a5(q?"("+s+")":s,n)},
dP:function dP(){},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a){this.a=a},
ee:function ee(a){this.a=a},
dt:function dt(a){this.a=a},
Iy(a,b){var s,r=$.fQ.H(0,a)
if(r!=null){$.fQ.j(0,a,r)
return r}s=b.$0()
if($.fQ.a>=512)$.fQ.H(0,new A.T($.fQ,A.n($.fQ).i("T<1>")).gD(0))
$.fQ.j(0,a,s)
return s},
b1:function b1(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
yo:function yo(a){this.a=a},
mk:function mk(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
vp:function vp(a,b,c){this.a=a
this.b=b
this.c=c},
vk:function vk(){},
vl:function vl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vm:function vm(a){this.a=a},
vn:function vn(){},
vo:function vo(){},
IJ(a){var s,r,q=B.a.ck(a)
if(q.length===0)return
s=!0
if(!B.a.G(q,'"')){r=A.ag("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.T(q,"-")){s=A.ag("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.au("Invalid search term: "+a,null))},
II(a){var s,r,q,p
for(s=B.a.cV(a,A.ag("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
if(p.length!==0&&new A.jc(p).gm(0)<3)throw A.b(A.au('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cO:function cO(a,b){this.a=a
this.b=b},
vI:function vI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
vt:function vt(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e
_.z=f},
kk(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.dI)throw q
else{s=r
r=A.jm("Malformed schema JSON: "+A.q(s))
throw A.b(r)}}},
Dl(a){return A.kk(new A.r6(a))},
HU(a){return A.kk(new A.rQ(a))},
HM(a){return A.kk(new A.ri(a))},
Dq(a,b){var s
if(new A.jc(a).gm(0)!==1)throw A.b(A.aS('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aS('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
HL(a){return A.kk(new A.rh(a))},
HK(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.gaj(),s=s.gt(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
IT(a){return A.kk(new A.vY(a))},
pw(a,b){return A.kk(new A.px(a,b))},
Lq(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.am.h(0,s)
return b},
c6:function c6(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
r6:function r6(a){this.a=a},
ix:function ix(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
rQ:function rQ(a){this.a=a},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a){this.a=a},
et:function et(a){this.a=a},
rh:function rh(a){this.a=a},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(a){this.a=a},
u8:function u8(a,b){this.a=a
this.b=b},
q0:function q0(){},
c4:function c4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
px:function px(a,b){this.a=a
this.b=b},
BX(a){var s=A.Km(a),r=A.l([],t.s)
if(B.Y.gW(B.Y))r.push("fieldResolvers")
if(B.b.bR(a.x,new A.vE()))r.push("migrationTransform")
if(B.am.gW(B.am))r.push("documentMigrations")
return new A.mx(s,A.cJ(r,t.N),1,a.a,a.b,2)},
IH(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aS("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aL(0,new A.vF(),s,r)
p=q.h(0,"formatVersion")
if(!A.an(p))throw A.b(A.aS("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.DW("Schema manifest format v"+A.q(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.an(n)||!j.b(m)||!t.j.b(l)||!A.an(k))throw A.b(A.aS('Malformed schema manifest for store "'+A.q(o==null?"???":o)+'"'))
return new A.mx(m.aL(0,new A.vG(),s,t.X),A.cJ(J.aL(l,new A.vH(),r),s),p,o,n,k)},
Km(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.dG(a.q(),n,m),k=B.Y.gL()
k=A.N(k,A.n(k).i("o.E"))
B.b.aO(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].q()
o=A.dF(null,null,n,m)
o.E(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gL()
n=A.N(n,A.n(n).i("o.E"))
B.b.aO(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
mx:function mx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vE:function vE(){},
vF:function vF(){},
vG:function vG(){},
vH:function vH(){},
Hl(a,b){var s,r=a.a
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
uc:function uc(){},
dM:function dM(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pL:function pL(a,b){this.a=a
this.b=b},
pO:function pO(a,b){this.a=a
this.b=b},
pK:function pK(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(a,b){this.a=a
this.b=b},
pG:function pG(a,b){this.a=a
this.b=b},
pM:function pM(a,b){this.a=a
this.b=b},
pJ:function pJ(a,b){this.a=a
this.b=b},
pB:function pB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pA:function pA(){},
pF:function pF(){},
pE:function pE(){},
pD:function pD(){},
pC:function pC(){},
py:function py(){},
pz:function pz(){},
hm:function hm(){},
nC:function nC(){},
C5(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bH(a,b,c,s,d,new A.zq())},
eM(a){var s=$.C.h(0,$.kx())
if(s instanceof A.bH&&s.a===a)return s
return null},
bH:function bH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wv:function wv(a,b,c){this.a=a
this.b=b
this.c=c},
zq:function zq(){this.a=0
this.b=null},
FC(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.D(a);s.k();){r=new A.a2("")
A.ci(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aO(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.aq(B.j.v(B.e.v(p)).a)},
jb:function jb(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
vx:function vx(){},
vw:function vw(a){this.a=a},
vy:function vy(a){this.a=a},
j2:function j2(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
ui:function ui(a){this.a=a},
bP:function bP(){},
xz:function xz(a,b){this.a=a
this.b=0
this.c=b},
xA:function xA(a,b,c){this.a=a
this.b=b
this.c=c},
kT(a){var s=$.CN()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
D6(a){return new A.fj(a)},
D7(a,b){return new A.kS(a,b)},
kr(a,b,c,d,e){return A.My(a,b,c,d,e)},
My(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$kr=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.hn(A.cZ(new A.od(new A.B4(g),A.l([],h),t.mI)))
e=0
h=new A.cf(A.c_(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$kr)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.t)){j=new A.t($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$kr)
case 9:f.a.u(0,m)
e+=J.ai(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.C(),$async$kr)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.v(e,c))throw A.b(A.x("Size mismatch: expected "+A.q(c)+" but got "+A.q(e)))
i=A.aq(B.b.gar(g).a)
A.kT(i)
if(b!=null&&i!==b)throw A.b(A.x("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.mM(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kr,r)},
pe:function pe(){},
fj:function fj(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b},
mM:function mM(a){this.a=a},
B4:function B4(a){this.a=a},
iq:function iq(a){this.d=a},
r8:function r8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ra:function ra(a,b){this.a=a
this.b=b},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rd:function rd(){},
Dm(a){return A.oP("lp_file_refs",new A.r7(a))},
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
r7:function r7(a){this.a=a},
tG:function tG(a,b){this.a=a
this.b=b},
tH:function tH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tJ:function tJ(a){this.a=a},
tK:function tK(a){this.a=a},
tL:function tL(a){this.a=a},
tM:function tM(a){this.a=a},
tN:function tN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tI:function tI(a,b){this.a=a
this.b=b},
Ea(a){var s
if(t.m.b(a))s=J.v(a.name,"NotFoundError")||J.v(a.name,"TypeMismatchError")
else s=!1
return s},
wW:function wW(a){this.b=a
this.d=null},
wX:function wX(a){this.a=a},
o_:function o_(a){this.a=a},
E2(a){var s=Date.now()
return new A.mT(a,new A.aM(s,0,!1))},
mT:function mT(a,b){this.a=a
this.c=b},
pb:function pb(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
m9:function m9(){},
uv:function uv(a,b){this.a=a
this.b=b},
uw:function uw(){},
uP:function uP(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
uz:function uz(a,b,c){this.a=a
this.b=b
this.c=c},
uG:function uG(a){this.a=a},
uC:function uC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uD:function uD(){},
uE:function uE(a,b){this.a=a
this.b=b},
uF:function uF(){},
uA:function uA(a,b){this.a=a
this.b=b},
uB:function uB(){},
In(a,b,c,d,e){var s=A.bD(null,t.H)
return new A.uH(b,c,new A.uO(a,B.ax,null),e,d,s)},
Io(a){return 0.5+B.as.nC()},
j5:function j5(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
uH:function uH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
uO:function uO(a,b,c){this.a=a
this.b=b
this.c=c},
uK:function uK(){},
uL:function uL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uI:function uI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uJ:function uJ(){},
uM:function uM(a){this.a=a},
uN:function uN(a){this.a=a},
zx:function zx(a,b){this.a=a
this.b=null
this.c=b},
iv(a,b){return new A.dz(a)},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lw:function lw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a){this.a=a},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
ux:function ux(a){this.a=a},
uy:function uy(a){this.a=a},
p0:function p0(a){this.a=a},
p1:function p1(a,b){this.a=a
this.b=b},
p2:function p2(a){this.a=a},
p3:function p3(){},
Br(a){return A.oP("lp_conflicts",new A.q1(a))},
bB:function bB(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
q1:function q1(a){this.a=a},
q2:function q2(a){this.a=a},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q4:function q4(a,b){this.a=a
this.b=b},
q5:function q5(a,b){this.a=a
this.b=b},
q3:function q3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mQ:function mQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
wj:function wj(a){this.a=a},
wb:function wb(a){this.a=a},
wh:function wh(a,b){this.a=a
this.b=b},
wg:function wg(a){this.a=a},
wf:function wf(a,b){this.a=a
this.b=b},
wi:function wi(a){this.a=a},
wc:function wc(a,b){this.a=a
this.b=b},
wd:function wd(){},
we:function we(){},
ez(a){return new A.d6(a)},
CK(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fd(a,b)
r=A.bg(a,s)
q=A.ah(r)
p=A.aq(B.j.v(B.e.v(q)).a)
return new A.eC(b,s,q,p,k)}catch(m){l=A.E(m)
if(l instanceof A.d6){o=l
return new A.eC(b,k,k,k,o.a)}else{n=l
l=A.q(n)
return new A.eC(b,k,k,k,l)}}},
Mt(a,b){var s,r=A.l([],t.i7)
for(s=J.D(b);s.k();)r.push(A.CK(a,s.gn()))
return r},
CJ(a,b){var s=0,r=A.h(t.eT),q
var $async$CJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Mt(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$CJ,r)},
fd(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.ba(b.d,j,i),g=a.gdg(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.v(f,s))throw A.b(A.ez('data.id "'+A.q(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bv(r))throw A.b(A.ez('Field "archived" must be a boolean, got '+J.bp(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.r)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ez('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.CD(o,n)
if(m!=null)throw A.b(A.ez(A.L7(o,n,m)))
q.j(0,s,n)}for(j=new A.aO(h,A.n(h).i("aO<1,2>")).gt(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.G(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.v(r,!0))
return q},
L7(a,b,c){var s,r=a.a,q=J.bp(b)
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
hY(a){var s,r,q,p
if(a==null||a.length===0)return B.o
s=null
try{s=B.h.aA(a,null)}catch(q){r=A.E(q)
p=A.ez("Corrupt payload JSON: "+A.q(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ez("Corrupt payload JSON: expected an object, got "+J.bp(s).l(0)+"."))
return A.ba(s,t.N,t.X)},
d6:function d6(a){this.a=a},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aP(i),g=A.dH(a.gL(),i)
g.E(0,b.gL())
for(g=A.eZ(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.r.Z(o,n)){h.u(0,p)
if(r.b(o)&&r.b(n)&&J.kz(o.gL(),new A.Ax())&&J.kz(n.gL(),new A.Ay())){m=A.bK(A.ba(o,i,q),A.ba(n,i,q))
for(l=A.n(m),k=new A.e1(m,m.r,l.i("e1<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.u(0,p+(j==null?l.a(j):j))}}}}return h},
Ia(a,b,c,d,e,f,g){return new A.tW()},
L1(a,b){var s,r,q=a.b
if(q.gF(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dn(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
BM(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$BM=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.Ib(B.bQ,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$BM,r)},
Ib(a,b,c,d,e,f,g){var s,r,q,p=A.bK(b,c),o=A.bK(b,f)
A.Ia(b,p,o,c,e,f,g)
s=t.N
r=A.dH(c.gL(),s)
r.E(0,new A.T(f,A.n(f).i("T<1>")))
r.E(0,b.gL())
q=A.N(r,A.n(r).c)
return A.u1(a,b,p,o,0,q,c,A.w(s,t.X),d,e,f,new A.zl(),g)},
u1(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
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
h.j(0,s,m)}return A.u1(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.DF(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.t)return l.ao(new A.u2(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.u1(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
DF(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.r.Z(a1,a4))return a1
if(B.r.Z(a1,a0))return a4
if(B.r.Z(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kz(a1.gL(),new A.tX()))if(J.kz(a4.gL(),new A.tY()))if(a0!=null)r=s.b(a0)&&J.kz(a0.gL(),new A.tZ())
else r=!0
if(r){r=t.N
q=t.X
p=A.ba(a1,r,q)
o=A.ba(a4,r,q)
n=a0==null?null:A.ba(s.a(a0),r,q)
s=A.aP(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.E(0,l)
s.E(0,new A.T(p,A.n(p).i("T<1>")))
s.E(0,new A.T(o,A.n(o).i("T<1>")))
k=A.w(r,q)
j=[]
for(r=s.$ti.c,l=A.eZ(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.DF(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.t)g=!0
j.push(d)}if(!g){for(s=A.eZ(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.BA(new A.Y(j,new A.u_(),A.a0(j).i("Y<1,y<j?>>")),q).ao(new A.u0(s,k),q)}A.L1(a3,a2)
return a4},
FY(a,b,c,d,e,f){return A.BM(a,b,c,d,e,f)},
Ax:function Ax(){},
Ay:function Ay(){},
tW:function tW(){},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
zl:function zl(){this.a=!1},
zj:function zj(){},
xE:function xE(){},
u2:function u2(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
tX:function tX(){},
tY:function tY(){},
tZ:function tZ(){},
u_:function u_(){},
u0:function u0(a,b){this.a=a
this.b=b},
uj:function uj(a,b){this.a=a
this.b=b},
ul:function ul(a){this.a=a},
um:function um(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pd:function pd(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(){},
ja:function ja(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uo:function uo(a,b){this.a=a
this.b=b},
uu:function uu(a,b){this.a=a
this.b=b},
us:function us(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ur:function ur(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
uq:function uq(a,b,c){this.a=a
this.b=b
this.c=c},
ut:function ut(a){this.a=a},
ef:function ef(a,b){this.a=a
this.b=b},
mj:function mj(a,b){this.b=a
this.f=b},
v3:function v3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vb:function vb(a,b,c,d,e){var _=this
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
v5:function v5(a,b,c){this.a=a
this.b=b
this.c=c},
v4:function v4(a,b,c){this.a=a
this.b=b
this.c=c},
v7:function v7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v6:function v6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v9:function v9(a,b,c){this.a=a
this.b=b
this.c=c},
v8:function v8(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vc:function vc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
ve:function ve(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vj:function vj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vh:function vh(a,b,c){this.a=a
this.b=b
this.c=c},
vg:function vg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vf:function vf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vd:function vd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vi:function vi(a,b,c,d,e,f,g,h,i,j){var _=this
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
bl:function bl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h9:function h9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
h8:function h8(a,b){this.a=a
this.b=b},
w8:function w8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w9:function w9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E3(a){return new A.hc(a)},
Ha(a){return new A.c3(a)},
HJ(a){return new A.cG(a)},
Il(a){return new A.cK(a)},
bt(a){return new A.fN(a)},
M6(a){var s=a.yM(),r=new A.AO()
return A.q(r.$2(A.BS(s),4))+"-"+A.q(r.$1(A.BQ(s)))+"-"+A.q(r.$1(A.uV(s)))+" "+A.q(r.$1(A.BO(s)))+":"+A.q(r.$1(A.BP(s)))+":"+A.q(r.$1(A.BR(s)))+"."+A.q(r.$2(A.DO(s),3))+"Z"},
bu:function bu(){},
hc:function hc(a){this.a=a},
eI:function eI(a,b){this.b=a
this.a=b},
jh:function jh(a){this.a=a},
c3:function c3(a){this.a=a},
cG:function cG(a){this.a=a},
cK:function cK(a){this.a=a},
fL:function fL(a){this.a=a},
fN:function fN(a){this.a=a},
fr:function fr(a){this.a=a},
eg:function eg(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fP:function fP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j9:function j9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kJ:function kJ(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
AO:function AO(){},
IW(a){return 0.5+B.as.nC()},
C2(a){var s,r=a.toLowerCase()
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
IX(a){var s,r,q,p,o,n,m,l,k=null,j=A.ag("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ef(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.C2(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aH(r)
p=s[1]
p.toString
p=A.aH(p)
o=s[4]
o.toString
o=A.aH(o)
n=s[5]
n.toString
n=A.aH(n)
s=s[6]
s.toString
return A.C3(r,q,p,o,n,A.aH(s))}j=A.ag("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ef(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.C2(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aH(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aH(r)
p=s[4]
p.toString
p=A.aH(p)
o=s[5]
o.toString
o=A.aH(o)
s=s[6]
s.toString
return A.C3(l,q,r,p,o,A.aH(s))}j=A.ag("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ef(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.C2(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aH(r)
p=s[2]
p.toString
p=A.aH(p)
o=s[3]
o.toString
o=A.aH(o)
n=s[4]
n.toString
n=A.aH(n)
s=s[5]
s.toString
return A.C3(r,q,p,o,n,A.aH(s))}return k},
C3(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.Bs(a,b,c,d,e,f,0)
return s}catch(r){return null}},
wa:function wa(a,b){this.at=a
this.ay=b},
j8:function j8(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
wl:function wl(a,b){this.a=a
this.b=b},
FB(a,b,c,d,e,f,g,h,i,j){var s,r=A.G_(a,b,c,null,d,e,f,g,h,i,j),q=A.w(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.X[s],r[s])
return q},
G_(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.Fy(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
Fy(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
LK(a,b,c,d,e,f,g){var s,r=null,q=A.Gb(B.a5,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.w(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.W[s],q[s])
return p},
Gb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.Fz(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
Fz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
G7(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
hZ(a){return new A.Y(a,new A.B9(),A.a0(a).i("Y<1,k>")).B(0,", ")},
jr(a){return A.oP("lp_sync_row",new A.wk(a))},
m8(a){return A.oP("lp_outbox",new A.up(a))},
Im(a){return A.oP("lp_op_queue",new A.uk(a))},
ks(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$ks=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aP(n)
l=A.N(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.af(k,"?",!1,n),", ")
k=a.ad("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$ks)
case 3:j.E(0,i.aL(h.a(d),new A.B7(),n))
k=A.N(l,n)
k.push("pending")
k.push("failed")
k=a.ad("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$ks)
case 4:j.E(0,i.aL(h.a(d),new A.B8(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ks,r)},
i0(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$i0=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.er("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$i0)
case 5:s=p.bz(o.a(f))?2:4
break
case 2:q=a.aE(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$i0)
case 6:s=3
break
case 4:q=a.aF("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$i0)
case 7:case 3:return A.e(null,r)}})
return A.f($async$i0,r)},
AE(a,b){var s=0,r=A.h(t.H),q,p
var $async$AE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aF(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$AE)
case 3:case 1:return A.e(q,r)}})
return A.f($async$AE,r)},
cB(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cB=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.nH("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cB)
case 2:m=l.D(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.Y("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cB)
case 5:o=A.a7(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.AE(a,o),$async$cB)
case 8:case 7:s=3
break
case 4:m=a.Y("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cB)
case 9:m=t.N
m=a.M("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cB)
case 10:s=d?11:12
break
case 11:m=a.Y("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cB)
case 13:n=a.Y("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cB)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cB,r)},
cR:function cR(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
fK:function fK(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
B9:function B9(){},
cQ:function cQ(a,b,c,d,e,f,g,h,i,j){var _=this
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
wk:function wk(a){this.a=a},
cp:function cp(a,b,c,d,e,f,g,h,i,j){var _=this
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
up:function up(a){this.a=a},
eE:function eE(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
uk:function uk(a){this.a=a},
B7:function B7(){},
B8:function B8(){},
wy:function wy(a,b){this.a=a
this.b=b},
l2:function l2(a,b,c,d,e,f,g,h,i){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.ax=g
_.a=h
_.b=i
_.d=_.c=null
_.f=_.e=!1
_.r=null},
pQ:function pQ(a){this.a=a},
I7(a){var s,r,q
try{s=A.oL(a)
if(t.f.b(s)){r=A.fb(s)
return r}}catch(q){}return null},
I8(a){if(a instanceof A.jw)return A.ea(new A.nf(3,a.a,a.b,null).q())
t.bp.a(a)
return A.BK(a.a,a.b,a.c,a.d)},
BK(a,b,c,d){return A.ea(new A.nf(3,a,null,new A.wY(b,c,d)).q())},
kj(a){return A.L_(a)},
L_(a){var s=0,r=A.h(t.k),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kj=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.i_()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a6(f.getDirectory(),k),$async$kj)
case 7:n=c
j=$.i1()
i=A.N(j.cV(0,"drift_db"),t.N)
m=i
J.Bl(m,j.cV(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ai(l)===0){s=9
break}s=11
return A.a(A.a6(n.getDirectoryHandle(l,{create:!1}),k),$async$kj)
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
return A.f($async$kj,r)},
oE(a,b){return A.L0(a,b)},
L0(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$oE=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kj(a),$async$oE)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a6(m.getFileHandle(A.dO(b,$.i1().a).gkp(),{create:!1}),t.m),$async$oE)
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
return A.f($async$oE,r)},
oF(a,b){return A.L8(a,b)},
L8(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$oF=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kj(a),$async$oF)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.By(m,A.dO(b,$.i1().a).gkp()),$async$oF)
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
return A.f($async$oF,r)},
tD:function tD(){},
tE:function tE(a){this.a=a},
tF:function tF(a){this.a=a},
lQ:function lQ(a,b,c){this.a=a
this.d=b
this.e=c},
tO:function tO(a){this.a=a},
hr:function hr(a){this.a=a},
c0(a){var s,r,q
if(a instanceof A.aM)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.aI){s=t.N
return A.m(["lp:bigint",a.l(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.cJ(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aL(a,A.FG(),s)
r=A.N(r,r.$ti.i("V.E"))
return A.cJ(r,s)}if(t.f.b(a)){q=A.w(t.N,t.X)
a.a3(0,new A.AJ(q))
return q}if(a==null||A.bv(a)||A.an(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.bp(a).l(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
oN(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gm(a)===1&&a.I(l)){s=a.h(0,l)
if(A.an(s)){r=B.c.am(s,1000)
q=B.c.N(s-r,1000)
if(q<-864e13||q>864e13)A.u(A.at(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.u(A.az(r,"microsecond",u.B))
A.c_(!0,"isUtc",t.y)
return new A.aM(q,r,!0)}throw A.b(A.O("Malformed wire DateTime: "+A.q(s),k))}if(a.gm(a)===1&&a.I(j)){s=a.h(0,j)
if(typeof s=="string")return A.Cd(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.q(s),k))}if(a.gm(a)===1&&a.I(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.L(s)
q=r.gm(s)
p=new Uint8Array(q)
for(o=0;o<r.gm(s);++o){n=r.h(s,o)
if(!A.an(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.q(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.q(s),k))}m=A.w(t.N,t.X)
a.a3(0,new A.AD(m))
return m}if(t.j.b(a)){r=t.X
q=J.aL(a,A.FF(),r)
q=A.N(q,q.$ti.i("V.E"))
return A.cJ(q,r)}return a},
AJ:function AJ(a){this.a=a},
AD:function AD(a){this.a=a},
kp(a,b,c,d,e){return A.Mh(a,b,c,d,e,e)},
Mh(a,b,c,d,e,f){var s=0,r=A.h(f),q,p=2,o=[],n,m,l
var $async$kp=A.c(function(g,h){if(g===1){o.push(h)
s=p}for(;;)switch(s){case 0:p=4
d.$0()
c.$0()
s=7
return A.a(b.$0(),$async$kp)
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
return A.a(a.$0(),$async$kp)
case 8:throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kp,r)},
Ll(){return new A.aM(Date.now(),0,!1)},
cW:function cW(a,b,c,d,e,f,g,h,i,j){var _=this
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
wC:function wC(a,b){this.f=a
this.r=b},
wF:function wF(){},
wD:function wD(a){this.a=a},
wE:function wE(){},
Mv(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.w(t.N,t.X)
try{if(t.f.b(a)){s=A.fb(a)
r=A.w(t.N,t.X)
q=t.j
if(q.b(J.S(s,n))){p=J.S(s,n)
p.toString
p=J.aL(q.a(p),new A.B1(),t.bU)
q=A.N(p,p.$ti.i("V.E"))
J.c1(r,n,q)}if(A.an(J.S(s,m)))J.c1(r,m,J.S(s,m))
if(A.bv(J.S(s,l)))J.c1(r,l,J.S(s,l))
return r}}catch(o){}return A.w(t.N,t.X)},
G5(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fb(a).h(0,b)
return s}}catch(r){}return null},
Mb(a,b){if(b!=null)return!1
return B.b.bR(a,new A.AT())},
B1:function B1(){},
AT:function AT(){},
AS:function AS(){},
MD(a){if(a instanceof A.dI){if(a instanceof A.eO)return"ValidationException"
if(a instanceof A.eN)return"UniqueConstraintException"
if(a instanceof A.eD)return"NotNullConstraintException"
if(a instanceof A.fl)return"CheckConstraintException"
if(a instanceof A.fM)return"PrimaryKeyConstraintException"
if(a instanceof A.fw)return"ForeignKeyConstraintException"
if(a instanceof A.cP)return"StorageError"
if(a instanceof A.fV)return"RecordNotFoundException"
if(a instanceof A.fZ)return"SchemaTooNewError"
if(a instanceof A.fy)return"FtsUnavailableError"
if(a instanceof A.hf)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eH)return"SchemaRegistrationError"
if(a instanceof A.h4)return"StaleCursorError"
if(a instanceof A.fE)return"MissingLimitError"
if(a instanceof A.fn)return"ConflictBlockedError"
if(a instanceof A.ep)return"DestructiveMigrationRefusedError"
if(a instanceof A.fU)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bu){if(a instanceof A.hc)return"TransientNetworkError"
if(a instanceof A.eI)return"ServerBusyError"
if(a instanceof A.jh)return"ServerError"
if(a instanceof A.c3)return"AuthError"
if(a instanceof A.cG)return"ForbiddenError"
if(a instanceof A.cK)return"NotFoundError"
if(a instanceof A.fL)return"PayloadError"
if(a instanceof A.fN)return"ProtocolError"
if(a instanceof A.fr)return"DuplicateIdError"
if(a instanceof A.eg)return"BatchFailedError"
return"SyncError"}if(a instanceof A.j7)return"ProtocolEnvelopeException"
if(a instanceof A.ii)return"DatabaseWorkerClosedException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bj)return"StateError"
if(a instanceof A.bA)return"ArgumentError"
if(t.U.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
J6(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.an(s))throw A.b(A.bG('Request "v" must be an int.'))
if(!A.an(r)||r<0)throw A.b(A.bG('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dg.G(0,q))throw A.b(A.bG("Unknown request operation: "+A.q(q)))
if(!t.f.b(p))throw A.b(A.bG('Request "a" must be a map.'))
return new A.hj(s,r,q,p.aL(0,new A.x0(),t.N,t.X))},
bG(a){return new A.j7(a)},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x0:function x0(){},
nf:function nf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wY:function wY(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a){this.a=a},
j7:function j7(a){this.a=a},
mq:function mq(a,b){this.a=a
this.b=b},
Eb(a){return A.bw(A.bL(a).a,null)},
Ec(a){return A.bw(J.bp(a).a,null)},
X:function X(a){this.a=a},
Mw(a){if(!t.f.b(a))throw A.b(A.a9("Schema must be a map: "+A.q(a),null,null))
return A.pw(A.fb(a),t.X)},
fb(a){var s=A.w(t.N,t.X)
a.a3(0,new A.AG(s))
return s},
J8(a){var s,r=A.w(t.N,t.X)
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
hk:function hk(){},
jw:function jw(a,b){this.b=a
this.a=b},
eQ:function eQ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
AG:function AG(a){this.a=a},
AF:function AF(){},
nj:function nj(){},
xa:function xa(a){this.a=a},
xb:function xb(a){this.a=a},
x8:function x8(){},
x9:function x9(){},
x7:function x7(a,b,c,d,e){var _=this
_.ch=$
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
_.ay=_.ax=null},
xc:function xc(a){this.a=a},
xd:function xd(a){this.a=a},
nh:function nh(){},
x3:function x3(a,b,c){this.a=a
this.b=b
this.c=c},
x2:function x2(a){this.a=a},
ni:function ni(){},
x4:function x4(a,b,c){this.a=a
this.b=b
this.c=c},
x5:function x5(a){this.a=a},
x6:function x6(){},
nl:function nl(){},
xe:function xe(a){this.a=a},
xf:function xf(a){this.a=a},
nm:function nm(){},
zU:function zU(a,b){this.a=a
this.b=b},
nn:function nn(){},
xk:function xk(a){this.a=a},
xl:function xl(a,b){this.a=a
this.b=b},
zH:function zH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
no:function no(){},
xm:function xm(){},
xn:function xn(){},
xo:function xo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hl:function hl(a){this.a=a},
np:function np(){},
xv:function xv(a,b,c){this.a=a
this.b=b
this.c=c},
xw:function xw(a){this.a=a},
xy:function xy(a,b,c){this.a=a
this.b=b
this.c=c},
xx:function xx(a,b,c){this.a=a
this.b=b
this.c=c},
xq:function xq(a){this.a=a},
xu:function xu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xp:function xp(a,b,c){this.a=a
this.b=b
this.c=c},
xt:function xt(a,b,c){this.a=a
this.b=b
this.c=c},
xs:function xs(a,b,c){this.a=a
this.b=b
this.c=c},
xr:function xr(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function oq(){},
or:function or(){},
os:function os(){},
ot:function ot(){},
ou:function ou(){},
ov:function ov(){},
ow:function ow(){},
Fe(a){return a},
Fu(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=a+"("
p.a=o
n=A.a0(b)
m=n.i("cv<1>")
l=new A.cv(b,0,s,m)
l.jj(b,0,s,n.c)
m=o+new A.Y(l,new A.Ap(),m.i("Y<V.E,k>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.l(0),null))}},
q9:function q9(a){this.a=a},
qa:function qa(){},
qb:function qb(){},
Ap:function Ap(){},
rY:function rY(){},
dO(a,b){var s,r,q,p,o,n=b.oD(a),m=b.cM(a)
if(n!=null)a=B.a.ag(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.ce(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.ce(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ag(a,p))
q.push("")}return new A.ma(b,n,m,r,q)},
ma:function ma(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
DL(a){return new A.mb(a)},
mb:function mb(a){this.a=a},
IV(){var s,r,q,p,o,n,m,l,k=null
if(A.C6().gb1()!=="file")return $.kw()
if(!B.a.c9(A.C6().gbs(),"/"))return $.kw()
s=A.EL(k,0,0)
r=A.EJ(k,0,0,!1)
q=A.zL(k,0,0,k)
p=A.EI(k,0,0)
o=A.zK(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.EK("a/b",0,3,k,"",m)
if(n&&!B.a.T(l,"/"))l=A.Cn(l,m)
else l=A.f5(l)
if(A.kc("",s,n&&B.a.T(l,"//")?"":r,o,l,q,p).la()==="a\\b")return $.oS()
return $.Gn()},
w7:function w7(){},
uR:function uR(a,b,c){this.d=a
this.e=b
this.f=c},
wI:function wI(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
x1:function x1(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
Bx(a,b){if(b<0)A.u(A.b0("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.u(A.b0("Offset "+b+u.D+a.gm(0)+"."))
return new A.lr(a,b)},
vQ:function vQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lr:function lr(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
HQ(a,b){var s=A.HR(A.l([A.Jv(a,!0)],t.pg)),r=new A.rO(b).$0(),q=B.c.l(B.b.ga_(s).b+1),p=A.HS(s)?0:3,o=A.a0(s)
return new A.ru(s,r,null,1+Math.max(q.length,p),new A.Y(s,new A.rw(),o.i("Y<1,i>")).yv(0,B.by),!A.Mk(new A.Y(s,new A.rx(),o.i("Y<1,j?>"))),new A.a2(""))},
HS(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.v(r.c,q.c))return!1}return!0},
HR(a){var s,r,q=A.Ma(a,new A.rz(),t.nf,t.K)
for(s=A.n(q),r=new A.aU(q,q.r,q.e,s.i("aU<2>"));r.k();)J.CZ(r.d,new A.rA())
s=s.i("aO<1,2>")
r=s.i("ip<o.E,cz>")
s=A.N(new A.ip(new A.aO(q,s),new A.rB(),r),r.i("o.E"))
return s},
Jv(a,b){var s=new A.yX(a).$0()
return new A.bo(s,!0,null)},
Jx(a){var s,r,q,p,o,n,m=a.gaN()
if(!B.a.G(m,"\r\n"))return a
s=a.gO().gav()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gP()
p=a.ga4()
o=a.gO().gak()
p=A.mF(s,a.gO().gau(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gbd()
return A.vR(r,p,o,A.z(n,"\r\n","\n"))},
Jy(a){var s,r,q,p,o,n,m
if(!B.a.c9(a.gbd(),"\n"))return a
if(B.a.c9(a.gaN(),"\n\n"))return a
s=B.a.A(a.gbd(),0,a.gbd().length-1)
r=a.gaN()
q=a.gP()
p=a.gO()
if(B.a.c9(a.gaN(),"\n")){o=A.AN(a.gbd(),a.gaN(),a.gP().gau())
o.toString
o=o+a.gP().gau()+a.gm(a)===a.gbd().length}else o=!1
if(o){r=B.a.A(a.gaN(),0,a.gaN().length-1)
if(r.length===0)p=q
else{o=a.gO().gav()
n=a.ga4()
m=a.gO().gak()
p=A.mF(o-1,A.Es(s),m-1,n)
q=a.gP().gav()===a.gO().gav()?p:a.gP()}}return A.vR(q,p,r,s)},
Jw(a){var s,r,q,p,o
if(a.gO().gau()!==0)return a
if(a.gO().gak()===a.gP().gak())return a
s=B.a.A(a.gaN(),0,a.gaN().length-1)
r=a.gP()
q=a.gO().gav()
p=a.ga4()
o=a.gO().gak()
p=A.mF(q-1,s.length-B.a.dn(s,"\n")-1,o-1,p)
return A.vR(r,p,s,B.a.c9(a.gbd(),"\n")?B.a.A(a.gbd(),0,a.gbd().length-1):a.gbd())},
Es(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.iI(a,"\n",s-2)-1
else return s-B.a.dn(a,"\n")-1},
ru:function ru(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rO:function rO(a){this.a=a},
rw:function rw(){},
rv:function rv(){},
rx:function rx(){},
rz:function rz(){},
rA:function rA(){},
rB:function rB(){},
ry:function ry(a){this.a=a},
rP:function rP(){},
rC:function rC(a){this.a=a},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(a,b){this.a=a
this.b=b},
rL:function rL(a){this.a=a},
rM:function rM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rH:function rH(a,b){this.a=a
this.b=b},
rI:function rI(a,b){this.a=a
this.b=b},
rD:function rD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rE:function rE(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(a,b,c){this.a=a
this.b=b
this.c=c},
rG:function rG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rN:function rN(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
yX:function yX(a){this.a=a},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mF(a,b,c,d){if(a<0)A.u(A.b0("Offset may not be negative, was "+a+"."))
else if(c<0)A.u(A.b0("Line may not be negative, was "+c+"."))
else if(b<0)A.u(A.b0("Column may not be negative, was "+b+"."))
return new A.ct(d,a,c,b)},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mG:function mG(){},
mI:function mI(){},
IN(a,b,c){return new A.h2(c,a,b)},
mJ:function mJ(){},
h2:function h2(a,b,c){this.c=a
this.a=b
this.b=c},
h3:function h3(){},
vR(a,b,c,d){var s=new A.dc(d,a,b,c)
s.pi(a,b,c)
if(!B.a.G(d,c))A.u(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.AN(d,c,a.gau())==null)A.u(A.O('The span text "'+c+'" must start at column '+(a.gau()+1)+' in a line within "'+d+'".',null))
return s},
dc:function dc(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
IR(a){var s
A:{if(18===a){s=B.dh
break A}if(23===a){s=B.di
break A}if(9===a){s=B.dj
break A}s=null
break A}return s},
jj:function jj(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
IQ(a,b,c,d,e,f,g){return new A.c9(d,b,c,e,f,a,g)},
c9:function c9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vW:function vW(){},
kC:function kC(a){this.a=a},
Kx(a,b,c){var s,r,q,p,o,n=new A.n9(c,A.af(c.b,null,!1,t.X))
try{A.F3(a,b.$1(n))}catch(r){s=A.E(r)
q=B.e.v(A.im(s))
p=a.a
o=p.cG(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
F3(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.an(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Ef(b).l(0)))
break A}if(b instanceof A.aI){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.D5(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bv(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Ef(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cG(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cG(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.ai(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.F3(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.u(A.az(b,"result","Unsupported type"))}return s},
qB:function qB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
qK:function qK(a){this.a=a},
qJ:function qJ(a){this.a=a},
qL:function qL(a){this.a=a},
qH:function qH(a){this.a=a},
qG:function qG(a){this.a=a},
qI:function qI(a){this.a=a},
qD:function qD(a){this.a=a},
qC:function qC(a){this.a=a},
qE:function qE(a){this.a=a},
qM:function qM(a){this.a=a},
qF:function qF(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
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
zA:function zA(a,b){this.a=a
this.b=b},
zB:function zB(a,b,c){this.a=a
this.b=b
this.c=c},
zC:function zC(a,b,c){this.a=a
this.b=b
this.c=c},
vS:function vS(){},
h5:function h5(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
BC(a,b){var s=$.oR()
return new A.ly(A.w(t.N,t.a_),s,a)},
ly:function ly(a,b,c){this.d=a
this.b=b
this.a=c},
nQ:function nQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Mx(a){var s=J.H4(new v.G.URL(a,"file:///").pathname,"/")
return new A.al(s,new A.B2(),A.a0(s).i("al<1>"))},
B2:function B2(){},
qg:function qg(){},
mt:function mt(a,b,c){this.d=a
this.a=b
this.c=c},
c8:function c8(a,b){this.a=a
this.b=b},
zk:function zk(a){this.a=a
this.b=-1},
o5:function o5(){},
o6:function o6(){},
o8:function o8(){},
o9:function o9(){},
un:function un(a,b){this.a=a
this.b=b},
IB(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bF(r,"step")}return s},
em:function em(){},
bQ:function bQ(a){this.a=a},
l8:function l8(a){this.a=a},
hg(a){return new A.dg(a)},
D3(a,b){var s,r,q,p
if(b==null)b=$.oR()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cN(256)
r&2&&A.J(a)
a[q]=p}},
dg:function dg(a){this.a=a},
ji:function ji(a){this.a=a},
b6:function b6(){},
kR:function kR(){},
kQ:function kQ(){},
MB(a,b){var s=null,r=new A.ex(t.kk)
return A.oQ(a,new A.jx(s,s,s,s,s,s,s,s,new A.Bc(new A.Bb(r,A.Ah(new A.Bd(r)))),s,s,s,s),s,b)},
eR:function eR(a){var _=this
_.d=a
_.c=_.b=_.a=null},
Bd:function Bd(a){this.a=a},
Bb:function Bb(a,b){this.a=a
this.b=b},
Bc:function Bc(a){this.a=a},
wT:function wT(a){this.a=a},
wO:function wO(a,b,c){this.a=a
this.b=b
this.c=c},
wV:function wV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wU:function wU(a,b,c){this.b=a
this.c=b
this.d=c},
dW:function dW(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
bZ(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.E(r)
if(q instanceof A.dg){s=q
return s.a}else return 1}},
lb:function lb(a){this.b=this.a=$
this.d=a},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qo:function qo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qq:function qq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qs:function qs(a,b){this.a=a
this.b=b},
ql:function ql(a){this.a=a},
qr:function qr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qw:function qw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qu:function qu(a,b){this.a=a
this.b=b},
qt:function qt(a,b){this.a=a
this.b=b},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a,b){this.a=a
this.b=b},
qv:function qv(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b){this.a=a
this.$ti=b},
p4:function p4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p6:function p6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
cE(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bn(a,"success",new A.pT(r,a,b),!1,q)
A.bn(a,"error",new A.pU(r,a),!1,q)
return s},
Hp(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bn(a,"success",new A.pY(r,a,b),!1,q)
A.bn(a,"error",new A.pZ(r,a),!1,q)
A.bn(a,"blocked",new A.q_(r),!1,q)
return s},
eV:function eV(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
yp:function yp(a,b){this.a=a
this.b=b},
yq:function yq(a,b){this.a=a
this.b=b},
pT:function pT(a,b,c){this.a=a
this.b=b
this.c=c},
pU:function pU(a,b){this.a=a
this.b=b},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a,b){this.a=a
this.b=b},
q_:function q_(a){this.a=a},
i_(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
Do(a,b,c){var s=a.read(b,c)
return s},
Dp(a,b,c){var s=a.write(b,c)
return s},
By(a,b){return A.a6(a.removeEntry(b,{recursive:!1}),t.X)},
Dn(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.u(A.O("Target object does not implement the async iterable interface",null))
return new A.f_(new A.re(),new A.i7(a,s),s.i("f_<aa.T,M>"))},
re:function re(){},
wP:function wP(a){this.a=a},
wQ:function wQ(a){this.a=a},
wS(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$wS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a6(p.fetch(new p.URL(a,A.bf(p.location).href),null),t.m),$async$wS)
case 3:q=o.wR(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wS,r)},
wR(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$wR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lb(A.w(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.wP(p).iK(a),$async$wR)
case 3:q=new o.hh(new n.wT(m.J5(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wR,r)},
hh:function hh(a){this.a=a},
Jz(a){var s=new A.jP(a,new A.ap(new A.t($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.pm(a)
return s},
lA(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$lA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.p7(a)
n=A.BC("dart-memory",null)
m=$.oR()
l=new A.dB(o,n,new A.ex(t.p3),A.aP(p),A.w(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.iO(),$async$lA)
case 3:s=4
return A.a(l.eZ(),$async$lA)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lA,r)},
p7:function p7(a){this.a=null
this.b=a},
pa:function pa(a){this.a=a},
p9:function p9(a,b,c){this.a=a
this.b=b
this.c=c},
p8:function p8(a){this.a=a},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
z_:function z_(a){this.a=a},
z0:function z0(a){this.a=a},
yZ:function yZ(a){this.a=a},
z1:function z1(a,b,c){this.a=a
this.b=b
this.c=c},
z3:function z3(a,b){this.a=a
this.b=b},
z2:function z2(a,b){this.a=a
this.b=b},
yB:function yB(a,b,c){this.a=a
this.b=b
this.c=c},
yC:function yC(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
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
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
rT:function rT(){},
rR:function rR(a,b){this.a=a
this.b=b},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
yY:function yY(a,b){this.a=a
this.b=b},
b8:function b8(){},
jN:function jN(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jH:function jH(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hs:function hs(a,b,c){var _=this
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
DX(a){var s=A.BC("dart-memory",null),r=$.oR()
return new A.h1(s,r,a)},
mB(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$mB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.i_()
if(j==null)throw A.b(A.hg(1))
p=t.m
s=3
return A.a(A.a6(j.getDirectory(),p),$async$mB)
case 3:o=d
n=A.Mx(a),m=J.D(n.a),n=new A.cX(m,n.b,n.$ti.i("cX<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a6(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$mB)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a5(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mB,r)},
mC(a){var s=0,r=A.h(t.m),q
var $async$mC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.mB(a,!0),$async$mC)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mC,r)},
vO(a,b){var s=0,r=A.h(t.g_),q,p
var $async$vO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.i_()==null)throw A.b(A.hg(1))
p=A
s=3
return A.a(A.mC(a),$async$vO)
case 3:q=p.vN(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vO,r)},
vN(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$vN=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.DX(c)
s=3
return A.a(p.cP(a,!1),$async$vN)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vN,r)},
fv:function fv(a,b,c){this.c=a
this.a=b
this.b=c},
h1:function h1(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
vP:function vP(a,b){this.a=a
this.b=b},
oe:function oe(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
zg:function zg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J5(a,b){var s=A.bf(a.exports.memory)
b.b!==$&&A.cA()
b.b=s
s=new A.wJ(s,b,a.exports)
s.pj(a,b)
return s},
nq(a,b){var s,r=A.bV(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dX(a,b,c){var s=a.buffer
return B.l.f8(A.bV(s,b,c==null?A.nq(a,b):c))},
C7(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.l.f8(A.bV(s,b,c==null?A.nq(a,b):c))},
Ed(a,b,c){var s=new Uint8Array(c)
B.f.cU(s,0,A.bV(a.buffer,b,c))
return s},
wJ:function wJ(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
wK:function wK(a){this.a=a},
wL:function wL(a){this.a=a},
wM:function wM(a){this.a=a},
wN:function wN(a){this.a=a},
Az(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.ky()
s=l!=null?3:5
break
case 3:p=A.L4()
s=6
return A.a(A.ju(l,p,null,null,!1),$async$Az)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a5({port:m.port1,lockName:p},new A.ie(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Az,r)},
L4(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bs(97+$.GP().cN(26))
return r.charCodeAt(0)==0?r:r},
Hf(a){return new A.ic(a)},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
uY:function uY(){},
v1:function v1(a){this.a=a},
v2:function v2(a){this.a=a},
v0:function v0(a){this.a=a},
v_:function v_(a){this.a=a},
uZ:function uZ(a){this.a=a},
ic:function ic(a){this.a=a},
qz:function qz(){},
l7:function l7(a){this.a=a},
qh:function qh(a){this.a=a},
eP:function eP(){},
lq(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.mC(a),$async$lq)
case 3:p=e
o=A.DX(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cP(p,!0),$async$lq)
case 6:case 5:q=new A.lp(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lq,r)},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
rs:function rs(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
ju(a,b,c,d,e){var s,r,q={},p=new A.t($.C,t.nI),o=new A.ap(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.Bz(A.a6(a.request(b,s,A.d_(new A.wZ(q,o))),r),new A.x_(q,d,o),r,t.K)
return p},
wZ:function wZ(a,b){this.a=a
this.b=b},
x_:function x_(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.a=a},
lc:function lc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
qO:function qO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qN:function qN(a,b){this.a=a
this.b=b},
qP:function qP(a){this.a=a},
iV:function iV(a){this.a=!1
this.b=a},
uf:function uf(a,b){this.a=a
this.b=b},
ue:function ue(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ud:function ud(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hm(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bO(n,A.a0(n).i("bO<1,k>"))
for(s=J.L(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a5(A.ft(B.cJ,s.h(m,q)),s.h(m,q+1)))}s=A.hN(a.b)
q=A.hN(a.c)
p=A.hN(a.d)
return new A.en(o,s,q,A.hN(a.g),p)},
en:function en(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
IE(a){var s
if(J.v(a.t,"errorResponse")){s=A.HC(a)
if(s!=null&&s instanceof A.ds)return s
else return new A.fW(a.e)}else return new A.fW("Did not respond with expected type, got "+A.q(a))},
HC(a){var s=a.s,r=s==null?null:A.am(s)
A:{if(0===r){s=A.HD(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
HD(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.x("Pattern matching error"))
n=new A.r4()
l=A.am(A.f6(l))
A.G(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.eo(i,h,A.bV(h,0,o))}else p=o
n=n.$1(k)
A.EU(g)
return new A.c9(s,r,l,g==null?o:A.am(g),n,q,p)},
HE(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.IZ(l)
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
IF(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.rs(a2,512,"transfer" in a2)
a5.n4(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.IB(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qA(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aG}else g=B.aH
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aI
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.nq(r,f)
f=new Uint8Array(e,f,d)
c=new A.dl(!1).d0(f,0,a,!0)
i=c
g=B.aJ
break
case 4:i=s.lt(j)
g=B.aK
break
case 5:default:i=a
g=B.aL}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.nq(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dl(!1).d0(a0,0,a,!0)}return A.FZ(!1,b,0,0,a1,a,a3.yK(0))},
Ml(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
r4:function r4(){},
FZ(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
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
M0(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
lT:function lT(a,b,c){this.a=a
this.b=b
this.$ti=c},
vD:function vD(){},
HI(a){var s,r
for(s=0;s<5;++s){r=B.cs[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
IY(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aL
break A}q=A.an(a)
p=q?a:j
if(q){s=p
r=B.aG
break A}q=a instanceof A.aI
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aH
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aI
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aJ
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aK
break A}q=A.bv(a)
k=q?a:j
if(q){s=k
r=B.bm
break A}throw A.b(A.O("Unsupported value: "+A.q(a),j))}return new A.a5(r,s)},
IZ(a){var s,r,q,p,o,n
if(a instanceof A.eo)return new A.a5(a.a,a.b)
s=[]
r=J.L(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.IY(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a5(s,t.a.a(B.f.ga9(p)))},
dx:function dx(a,b,c){this.c=a
this.a=b
this.b=c},
cx:function cx(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
oJ(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$oJ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bf(i.indexedDB)
i=$.ky()
i=i==null?null:A.ju(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bd(i,t.b3),$async$oJ)
case 3:l=b
p=5
s=8
return A.a(A.Ho(m.open("drift_mock_db"),t.m),$async$oJ)
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
return A.f($async$oJ,r)},
Av(a){return A.LN(a)},
LN(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$Av=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bf(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.d_(new A.Aw(j,m))
s=7
return A.a(A.Hn(m,t.m),$async$Av)
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
return A.f($async$Av,r)},
hX(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$hX=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.i_()
if(h==null){q=B.p
s=1
break}j=t.m
s=3
return A.a(A.a6(h.getDirectory(),j),$async$hX)
case 3:m=b
p=5
s=8
return A.a(A.a6(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$hX)
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
j=new A.cf(A.c_(A.Dn(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$hX)
case 14:if(!b){s=13
break}k=j.gn()
if(J.v(k.kind,"directory"))J.aK(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.C(),$async$hX)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hX,r)},
Hn(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bn(a,"success",new A.pR(r,a,b),!1,q)
A.bn(a,"error",new A.pS(r,a),!1,q)
return s},
Ho(a,b){var s=new A.t($.C,b.i("t<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bn(a,"success",new A.pV(r,a,b),!1,q)
A.bn(a,"error",new A.pW(r,a),!1,q)
A.bn(a,"blocked",new A.pX(r,a),!1,q)
return s},
Aw:function Aw(a,b){this.a=a
this.b=b},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a,b){this.a=a
this.b=b},
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
pW:function pW(a,b){this.a=a
this.b=b},
pX:function pX(a,b){this.a=a
this.b=b},
uU:function uU(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
fW:function fW(a){this.a=a},
ds:function ds(a){this.a=a},
Kw(a){var s=a.gnr()
return new A.f_(new A.Ag(),s,A.n(s).i("f_<aa.T,M>"))},
Eo(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hq(a,r,new A.k2(),new A.k2(),new A.k2(),s)},
Jq(a,b,c){var s=t.S
s=new A.ho(c,A.l([],t.fV),a.a,new A.ay(new A.t($.C,t.D),t.h),A.w(s,t.br),A.w(s,t.m))
s.pg(a)
s.pl(a,b,c)
return s},
F4(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e7(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e7=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.i_()
if(b==null){q=B.aD
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.ky()
d=d==null?null:A.ju(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bd(d,t.b3),$async$e7)
case 7:j=a1
d=t.m
s=8
return A.a(A.a6(b.getDirectory(),d),$async$e7)
case 8:m=a1
s=9
return A.a(A.a6(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e7)
case 9:l=a1
s=10
return A.a(A.km(l),$async$e7)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.BF(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a6(A.bf(e),t.X),$async$e7)
case 13:q=B.aD
n=[1]
s=5
break
case 12:g=i
q=new A.jY(!0,g)
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
if(g!=null)g.a.ai()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.By(m,"_drift_feature_detection"),$async$e7)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e7,r)},
km(a){return A.Lm(a)},
Lm(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$km=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a6(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$km)
case 7:j=c
s=8
return A.a(A.a6(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$km)
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
return A.a(A.a6(a.createSyncAccessHandle(),t.m),$async$km)
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
return A.f($async$km,r)},
Ag:function Ag(){},
k2:function k2(){this.a=null},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
yh:function yh(a){this.a=a},
yl:function yl(a,b){this.a=a
this.b=b},
yi:function yi(a,b){this.a=a
this.b=b},
yj:function yj(a){this.a=a},
yk:function yk(a,b){this.a=a
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
y1:function y1(a){this.a=a},
y6:function y6(a,b){this.a=a
this.b=b},
y9:function y9(a,b,c){this.a=a
this.b=b
this.c=c},
y3:function y3(a,b){this.a=a
this.b=b},
y2:function y2(a,b){this.a=a
this.b=b},
y8:function y8(a,b){this.a=a
this.b=b},
y7:function y7(a,b){this.a=a
this.b=b},
yb:function yb(a,b){this.a=a
this.b=b},
ya:function ya(a,b){this.a=a
this.b=b},
y4:function y4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y5:function y5(a,b){this.a=a
this.b=b},
y0:function y0(a){this.a=a},
ld:function ld(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
qS:function qS(a){this.a=a},
qR:function qR(a){this.a=a},
qQ:function qQ(a,b){this.a=a
this.b=b},
xg:function xg(a,b,c,d,e,f){var _=this
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
xh:function xh(a,b){this.a=a
this.b=b},
xi:function xi(a,b){this.a=a
this.b=b},
xj:function xj(a){this.a=a},
J7(){var s=v.G
if(A.HW(s,"DedicatedWorkerGlobalScope"))return new A.nI(s,new A.nJ(s.location.href))
else return new A.oc(s,new A.nJ(s.location.href))},
ke:function ke(){},
nI:function nI(a,b){this.a=a
this.b=b},
oc:function oc(a,b){this.a=a
this.b=b},
zv:function zv(a){this.a=a},
zw:function zw(a,b,c){this.a=a
this.b=b
this.c=c},
zu:function zu(a){this.a=a},
zs:function zs(a){this.a=a},
zt:function zt(a){this.a=a},
nJ:function nJ(a){this.a=a},
yw:function yw(a){this.a=a},
mP:function mP(a,b,c){this.c=a
this.a=b
this.b=c},
w6:function w6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hd:function hd(){},
nS:function nS(){},
cy:function cy(a,b){this.a=a
this.b=b},
bn(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Fv(new A.yz(c),t.m)
s=s==null?null:A.d_(s)}s=new A.jL(a,b,s,!1,e.i("jL<0>"))
s.kg()
return s},
Fv(a,b){var s=$.C
if(s===B.i)return a
return s.ib(a,b)},
Bu:function Bu(a,b){this.a=a
this.$ti=b},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jL:function jL(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
yz:function yz(a){this.a=a},
yA:function yA(a){this.a=a},
Ge(a){return v.mangledGlobalNames[a]},
G2(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
HZ(a,b){return b in a},
BF(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Ma(a,b,c,d){var s,r,q,p,o,n=A.w(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aK(p,q)}return n},
BD(a){var s=J.D(a.a)
if(new A.cX(s,a.b,a.$ti.i("cX<1>")).k())return s.gn()
return null},
As(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.J(a)
a[r]=s&255
b=s/256|0;--r}},
MM(a){return a},
Gc(a){if(a instanceof A.du)return a
return new A.du(a)},
MO(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.E(p)
if(q instanceof A.h2){s=q
throw A.b(A.IN("Invalid "+a+": "+s.a,s.b,s.gfW()))}else if(t.U.b(q)){r=q
throw A.b(A.a9("Invalid "+a+' "'+b+'": '+r.gkT(),r.gfW(),r.gav()))}else throw p}},
hV(){var s,r,q,p=$.GQ(),o=$.GJ()+1
$.KC=o
s=B.a.iQ(B.c.lb(o,36),8,"0")
r=J.Dw(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cN(36)]
return B.a.A(s+B.b.ej(r),0,15)},
oP(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.cP)throw q
else{s=r
r=A.jm("Corrupt "+a+" row: "+A.q(s))
throw A.b(r)}}},
AC(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.o
try{s=B.h.aA(a,null)
if(t.f.b(s)){q=A.ba(s,t.N,t.X)
return q}return B.o}catch(p){r=A.E(p)
q=A.jm("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
FL(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bd
try{s=B.h.aA(a,null)
if(t.j.b(s)){q=J.i2(s,t.N)
q=q.fK(q)
return q}return B.bd}catch(p){r=A.E(p)
q=A.jm("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
FK(a){var s,r,q,p,o=null
if(a==null)return B.p
A.G(a)
if(a.length===0)return B.p
s=B.h.aA(a,o)
if(!t.j.b(s))throw A.b(A.a9("expected a JSON array, got "+J.bp(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.D(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.u(A.a9("dirty-field member is "+J.bp(p).l(0)+", expected String",o,o)))}return r},
e9(a){var s,r=J.L(a)
if(r.gF(a))return null
s=J.c2(r.gD(a).gaZ())
if(A.an(s))return s
if(typeof s=="string")return A.j6(s,null)
return null},
MI(a,b,c){var s=A.z(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
FR(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.d2(B.x.yF(r*J.GY(d.$1(o),0.5,1.5)),0,0)},
Mu(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.c3)
s=a.h(0,"type")
if(!J.v(s,"aes-gcm"))throw A.b(A.a9("Unsupported fieldCipher type: "+A.q(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ai(r)!==32)throw A.b(B.c2)
q=new Uint8Array(32)
for(p=J.L(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.an(n)||n<0||n>255)throw A.b(A.a9("Malformed AES-256-GCM key byte at index "+o+": "+A.q(n),m,m))
q[o]=n}A.D1(q)
p=$.Bj()
if($.ku()!==B.O)A.u(A.x("BigEndian systems are unsupported"))
return new A.p_(new A.l9(12,32,m),new A.jg(new A.mA(A.D1(q)),m),p)},
FN(a){var s,r=A.w(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.c0(a.c))
r.j(0,"local",A.c0(a.d))
r.j(0,"remote",A.c0(a.e))
s=a.f
s=A.N(s,A.n(s).c)
B.b.aO(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.N(s,A.n(s).c)
B.b.aO(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.c0(s))
return r},
FP(a){var s,r=A.w(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.c0(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.c0(s))
return r},
Mq(){var s=A.J7(),r=t.cj
new A.xg(s,B.bK,A.l([],t.az),A.w(t.S,t.lp),new A.iV(A.BJ(r)),new A.iV(A.BJ(r))).eh()},
FJ(){var s,r,q,p,o=null
try{o=A.C6()}catch(s){if(t.mA.b(A.E(s))){r=$.Ae
if(r!=null)return r
throw s}else throw s}if(J.v(o,$.F0)){r=$.Ae
r.toString
return r}$.F0=o
if($.CP()===$.kw())r=$.Ae=o.bu(".").l(0)
else{q=o.la()
p=q.length-1
r=$.Ae=p===0?q:B.a.A(q,0,p)}return r},
FV(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
FM(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.FV(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Mk(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gD(0)
for(r=A.cw(a,1,null,a.$ti.i("V.E")),q=r.$ti,r=new A.aj(r,r.gm(0),q.i("aj<V.E>")),q=q.i("V.E");r.k();){p=r.d
if(!J.v(p==null?q.a(p):p,s))return!1}return!0},
MA(a,b){var s=B.b.bU(a,null)
if(s<0)throw A.b(A.O(A.q(a)+" contains no null elements.",null))
a[s]=b},
G6(a,b){var s=B.b.bU(a,b)
if(s<0)throw A.b(A.O(A.q(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
LY(a,b){var s,r,q,p
for(s=new A.ck(a),r=t.E,s=new A.aj(s,s.gm(0),r.i("aj<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
AN(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cc(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bU(a,b)
while(r!==-1){q=r===0?0:B.a.iI(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cc(a,b,r+1)}return null},
CA(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c9(A.dX(r.b,p.sqlite3_errmsg(q),null),A.dX(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.q(o)+")",c,n,d,e,f)},
Be(a,b,c,d,e){throw A.b(A.CA(a.a,a.b,b,c,d,e))},
D5(a){if(a.a1(0,$.Gh())<0||a.a1(0,$.Gg())>0)throw A.b(A.Dk("BigInt value exceeds the range of 64 bits"))
return a},
IC(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.am(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dX(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.Ed(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Dr(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bs("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cN(61)))
return s.charCodeAt(0)==0?s:s},
vA(a){var s=0,r=A.h(t.lo),q
var $async$vA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a6(a.arrayBuffer(),t.a),$async$vA)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$vA,r)}},B={}
var w=[A,J,B]
var $={}
A.BH.prototype={}
J.lC.prototype={
S(a,b){return a===b},
gJ(a){return A.eF(a)},
l(a){return"Instance of '"+A.mf(a)+"'"},
gan(a){return A.bL(A.Cs(this))}}
J.lE.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gan(a){return A.bL(t.y)},
$iak:1,
$iR:1}
J.iC.prototype={
S(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gan(a){return A.bL(t.P)},
$iak:1,
$iW:1}
J.aF.prototype={$iM:1}
J.dE.prototype={
gJ(a){return 0},
gan(a){return B.dC},
l(a){return String(a)}}
J.md.prototype={}
J.dV.prototype={}
J.bR.prototype={
l(a){var s=a[$.Gk()]
if(s==null)s=a[$.fe()]
if(s==null)return this.p0(a)
return"JavaScript function for "+J.a_(s)}}
J.bq.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fA.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.B.prototype={
ic(a,b){return new A.bO(a,A.a0(a).i("@<1>").V(b).i("bO<1,2>"))},
u(a,b){a.$flags&1&&A.J(a,29)
a.push(b)},
iY(a,b){var s
a.$flags&1&&A.J(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.vz(b,null))
return a.splice(b,1)[0]},
aE(a,b,c){var s
a.$flags&1&&A.J(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.vz(b,null))
a.splice(b,0,c)},
kL(a,b,c){var s,r
a.$flags&1&&A.J(a,"insertAll",2)
A.DU(b,0,a.length,"index")
if(!t.O.b(c))c=J.H7(c)
s=J.ai(c)
a.length=a.length+s
r=b+s
this.al(a,r,a.length,a,b)
this.aw(a,b,r,c)},
l3(a){a.$flags&1&&A.J(a,"removeLast",1)
if(a.length===0)throw A.b(A.AH(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.J(a,"remove",1)
for(s=0;s<a.length;++s)if(J.v(a[s],b)){a.splice(s,1)
return!0}return!1},
uE(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aA(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dC(a,b){return new A.al(a,b,A.a0(a).i("al<1>"))},
E(a,b){var s
a.$flags&1&&A.J(a,"addAll",2)
if(Array.isArray(b)){this.ps(a,b)
return}for(s=J.D(b);s.k();)a.push(s.gn())},
ps(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aA(a))
for(s=0;s<r;++s)a.push(b[s])},
aa(a){a.$flags&1&&A.J(a,"clear","clear")
a.length=0},
cg(a,b,c){return new A.Y(a,b,A.a0(a).i("@<1>").V(c).i("Y<1,2>"))},
B(a,b){var s,r=A.af(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.q(a[s])
return r.join(b)},
ej(a){return this.B(a,"")},
cQ(a,b){return A.cw(a,0,A.c_(b,"count",t.S),A.a0(a).c)},
bj(a,b){return A.cw(a,b,null,A.a0(a).c)},
fg(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aA(a))}if(c!=null)return c.$0()
throw A.b(A.aE())},
no(a,b){return this.fg(a,b,null)},
a8(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.at(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.at(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a0(a))
return A.l(a.slice(b,c),A.a0(a))},
b6(a,b){return this.U(a,b,null)},
fR(a,b,c){A.bc(b,c,a.length)
return A.cw(a,b,c,A.a0(a).c)},
gD(a){if(a.length>0)return a[0]
throw A.b(A.aE())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aE())},
gar(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aE())
throw A.b(A.iz())},
l4(a,b,c){a.$flags&1&&A.J(a,18)
A.bc(b,c,a.length)
a.splice(b,c-b)},
al(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.J(a,5)
A.bc(b,c,a.length)
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.oY(d,e).cR(0,!1)
q=0}p=J.L(r)
if(q+s>p.gm(r))throw A.b(A.Du())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aw(a,b,c,d){return this.al(a,b,c,d,0)},
bR(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aA(a))}return!1},
cJ(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aA(a))}return!0},
cm(a,b){var s,r,q,p,o
a.$flags&2&&A.J(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.KG()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a0(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e8(b,2))
if(p>0)this.uF(a,p)},
aO(a){return this.cm(a,null)},
uF(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bU(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.v(a[s],b))return s
return-1},
dn(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.v(a[s],b))return s
return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.v(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gW(a){return a.length!==0},
l(a){return A.rZ(a,"[","]")},
cR(a,b){var s=A.l(a.slice(0),A.a0(a))
return s},
dz(a){return this.cR(a,!0)},
gt(a){return new J.fi(a,a.length,A.a0(a).i("fi<1>"))},
gJ(a){return A.eF(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.J(a,"set length","change the length of")
if(b<0)throw A.b(A.at(b,0,null,"newLength",null))
if(b>a.length)A.a0(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.AH(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.J(a)
if(!(b>=0&&b<a.length))throw A.b(A.AH(a,b))
a[b]=c},
lf(a,b){return new A.bI(a,b.i("bI<0>"))},
ns(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gan(a){return A.bL(A.a0(a))},
$ib9:1,
$iK:1,
$io:1,
$ip:1}
J.lD.prototype={
yQ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mf(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.t_.prototype={}
J.fi.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ev.prototype={
a1(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkQ(b)
if(this.gkQ(a)===s)return 0
if(this.gkQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkQ(a){return a===0?1/a<0:a<0},
j_(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Z(""+a+".toInt()"))},
vQ(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Z(""+a+".ceil()"))},
x0(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Z(""+a+".floor()"))},
yF(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Z(""+a+".round()"))},
bS(a,b,c){if(this.a1(b,c)>0)throw A.b(A.fa(b))
if(this.a1(a,b)<0)return b
if(this.a1(a,c)>0)return c
return a},
lb(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.at(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.u(A.Z("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bh("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fO(a,b){return a+b},
am(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ji(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mN(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.mN(a,b)},
mN(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Z("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
bH(a,b){if(b<0)throw A.b(A.fa(b))
return b>31?0:a<<b>>>0},
v0(a,b){return b>31?0:a<<b>>>0},
dH(a,b){var s
if(b<0)throw A.b(A.fa(b))
if(a>0)s=this.ke(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ah(a,b){var s
if(a>0)s=this.ke(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mK(a,b){if(0>b)throw A.b(A.fa(b))
return this.ke(a,b)},
ke(a,b){return b>31?0:a>>>b},
oE(a,b){return a>b},
gan(a){return A.bL(t.cZ)},
$iaw:1,
$iab:1,
$iaX:1}
J.iB.prototype={
gn5(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.N(q,4294967296)
s+=32}return s-Math.clz32(q)},
gan(a){return A.bL(t.S)},
$iak:1,
$ii:1}
J.lF.prototype={
gan(a){return A.bL(t.Y)},
$iak:1}
J.dC.prototype={
kn(a,b,c){var s=b.length
if(c>s)throw A.b(A.at(c,0,s,null,null))
return new A.og(b,a,c)},
i7(a,b){return this.kn(a,b,0)},
en(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.at(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.h7(c,a)},
c9(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ag(a,r-s)},
l6(a,b,c){A.DU(0,0,a.length,"startIndex")
return A.MH(a,b,c,0)},
cV(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.ew){s=b.e
s=!(s==null?b.e=b.pZ():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.qc(a,b)}},
du(a,b,c,d){var s=A.bc(b,c,a.length)
return A.Ga(a,b,s,d)},
qc(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.Bm(b,a),s=s.gt(s),r=0,q=1;s.k();){p=s.gn()
o=p.gP()
n=p.gO()
q=n-o
if(q===0&&r===o)continue
m.push(this.A(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ag(a,r))
return m},
af(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.at(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.af(a,b,0)},
A(a,b,c){return a.substring(b,A.bc(b,c,a.length))},
ag(a,b){return this.A(a,b,null)},
ck(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.I_(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.DA(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
yO(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.DA(r,s))},
bh(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bM)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iQ(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bh(c,s)+a},
y9(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bh(" ",s)},
cc(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.at(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bU(a,b){return this.cc(a,b,0)},
iI(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.at(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dn(a,b){return this.iI(a,b,null)},
G(a,b){return A.ME(a,b,0)},
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
gan(a){return A.bL(t.N)},
gm(a){return a.length},
$ib9:1,
$iak:1,
$iaw:1,
$ik:1}
A.yn.prototype={
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
r.$flags&2&&A.J(r)
r[q+m]=l}k.a=s},
l9(){var s,r=this
if(r.a===0)return $.oT()
s=J.bN(B.f.ga9(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.oT()
return s},
gm(a){return this.a}}
A.xY.prototype={
u(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b3(b))
this.b.push(s)
this.a=this.a+s.length},
l9(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.oT()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.aa(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.r)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.aw(q,p,m,n)}l.a=0
B.b.aa(s)
return q},
gm(a){return this.a}}
A.dY.prototype={
gt(a){return new A.kX(J.D(this.gbb()),A.n(this).i("kX<1,2>"))},
gm(a){return J.ai(this.gbb())},
gF(a){return J.bz(this.gbb())},
gW(a){return J.ed(this.gbb())},
bj(a,b){var s=A.n(this)
return A.fk(J.oY(this.gbb(),b),s.c,s.y[1])},
cQ(a,b){var s=A.n(this)
return A.fk(J.oZ(this.gbb(),b),s.c,s.y[1])},
a8(a,b){return A.n(this).y[1].a(J.oW(this.gbb(),b))},
gD(a){return A.n(this).y[1].a(J.c2(this.gbb()))},
ga_(a){return A.n(this).y[1].a(J.oX(this.gbb()))},
gar(a){return A.n(this).y[1].a(J.Bo(this.gbb()))},
G(a,b){return J.Bn(this.gbb(),b)},
l(a){return J.a_(this.gbb())}}
A.kX.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ei.prototype={
gbb(){return this.a}}
A.jI.prototype={$iK:1}
A.jF.prototype={
h(a,b){return this.$ti.y[1].a(J.S(this.a,b))},
j(a,b,c){J.c1(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.H2(this.a,b)},
u(a,b){J.aK(this.a,this.$ti.c.a(b))},
cm(a,b){var s=b==null?null:new A.xZ(this,b)
J.CZ(this.a,s)},
fR(a,b,c){var s=this.$ti
return A.fk(J.H_(this.a,b,c),s.c,s.y[1])},
al(a,b,c,d,e){var s=this.$ti
J.H3(this.a,b,c,A.fk(d,s.y[1],s.c),e)},
aw(a,b,c,d){return this.al(0,b,c,d,0)},
$iK:1,
$ip:1}
A.xZ.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bO.prototype={
ic(a,b){return new A.bO(this.a,this.$ti.i("@<1>").V(b).i("bO<1,2>"))},
gbb(){return this.a}}
A.ej.prototype={
c8(a,b,c){return new A.ej(this.a,this.$ti.i("@<1,2>").V(b).V(c).i("ej<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a3(a,b){this.a.a3(0,new A.pp(this,b))},
gL(){var s=this.$ti
return A.fk(this.a.gL(),s.c,s.y[2])},
gaZ(){var s=this.$ti
return A.fk(this.a.gaZ(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gW(a){var s=this.a
return s.gW(s)},
gaj(){var s=this.a.gaj()
return s.cg(s,new A.po(this),this.$ti.i("Q<3,4>"))}}
A.pp.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.po.prototype={
$1(a){var s=this.a.$ti
return new A.Q(s.y[2].a(a.a),s.y[3].a(a.b),s.i("Q<3,4>"))},
$S(){return this.a.$ti.i("Q<3,4>(Q<1,2>)")}}
A.dD.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mo.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.ck.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.B0.prototype={
$0(){return A.bD(null,t.H)},
$S:2}
A.vM.prototype={}
A.K.prototype={}
A.V.prototype={
gt(a){var s=this
return new A.aj(s,s.gm(s),A.n(s).i("aj<V.E>"))},
gF(a){return this.gm(this)===0},
gD(a){if(this.gm(this)===0)throw A.b(A.aE())
return this.a8(0,0)},
ga_(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
return s.a8(0,s.gm(s)-1)},
gar(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
if(s.gm(s)>1)throw A.b(A.iz())
return s.a8(0,0)},
G(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.v(r.a8(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aA(r))}return!1},
cJ(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a8(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.aA(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.a8(0,0))
if(o!==p.gm(p))throw A.b(A.aA(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}},
ej(a){return this.B(0,"")},
dC(a,b){return this.oW(0,b)},
cg(a,b,c){return new A.Y(this,b,A.n(this).i("@<V.E>").V(c).i("Y<1,2>"))},
yv(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aE())
s=q.a8(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a8(0,r))
if(p!==q.gm(q))throw A.b(A.aA(q))}return s},
bj(a,b){return A.cw(this,b,null,A.n(this).i("V.E"))},
cQ(a,b){return A.cw(this,0,A.c_(b,"count",t.S),A.n(this).i("V.E"))}}
A.cv.prototype={
jj(a,b,c,d){var s,r=this.b
A.bb(r,"start")
s=this.c
if(s!=null){A.bb(s,"end")
if(r>s)throw A.b(A.at(r,0,s,"start",null))}},
gqn(){var s=J.ai(this.a),r=this.c
if(r==null||r>s)return s
return r},
gv3(){var s=J.ai(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ai(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a8(a,b){var s=this,r=s.gv3()+b
if(b<0||r>=s.gqn())throw A.b(A.lz(b,s.gm(0),s,null,"index"))
return J.oW(s.a,r)},
bj(a,b){var s,r,q=this
A.bb(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.er(q.$ti.i("er<1>"))
return A.cw(q.a,s,r,q.$ti.c)},
cQ(a,b){var s,r,q,p=this
A.bb(b,"count")
s=p.c
r=p.b
if(s==null)return A.cw(p.a,r,B.c.fO(r,b),p.$ti.c)
else{q=B.c.fO(r,b)
if(s<q)return p
return A.cw(p.a,r,q,p.$ti.c)}},
cR(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.L(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Dx(0,n):J.BE(0,n)}r=A.af(s,m.a8(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a8(n,o+q)
if(m.gm(n)<l)throw A.b(A.aA(p))}return r},
dz(a){return this.cR(0,!0)}}
A.aj.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.L(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a8(q,s);++r.c
return!0}}
A.cn.prototype={
gt(a){return new A.lR(J.D(this.a),this.b,A.n(this).i("lR<1,2>"))},
gm(a){return J.ai(this.a)},
gF(a){return J.bz(this.a)},
gD(a){return this.b.$1(J.c2(this.a))},
ga_(a){return this.b.$1(J.oX(this.a))},
gar(a){return this.b.$1(J.Bo(this.a))},
a8(a,b){return this.b.$1(J.oW(this.a,b))}}
A.eq.prototype={$iK:1}
A.lR.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.Y.prototype={
gm(a){return J.ai(this.a)},
a8(a,b){return this.b.$1(J.oW(this.a,b))}}
A.al.prototype={
gt(a){return new A.cX(J.D(this.a),this.b,this.$ti.i("cX<1>"))},
cg(a,b,c){return new A.cn(this,b,this.$ti.i("@<1>").V(c).i("cn<1,2>"))}}
A.cX.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.ip.prototype={
gt(a){return new A.lm(J.D(this.a),this.b,B.aS,this.$ti.i("lm<1,2>"))}}
A.lm.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.D(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eL.prototype={
gt(a){var s=this.a
return new A.mR(s.gt(s),this.b,A.n(this).i("mR<1>"))}}
A.il.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.oE(r,s))return s
return r},
$iK:1}
A.mR.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.db.prototype={
bj(a,b){A.kE(b,"count")
A.bb(b,"count")
return new A.db(this.a,this.b+b,A.n(this).i("db<1>"))},
gt(a){var s=this.a
return new A.mD(s.gt(s),this.b,A.n(this).i("mD<1>"))}}
A.fs.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bj(a,b){A.kE(b,"count")
A.bb(b,"count")
return new A.fs(this.a,this.b+b,this.$ti)},
$iK:1}
A.mD.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.er.prototype={
gt(a){return B.aS},
gF(a){return!0},
gm(a){return 0},
gD(a){throw A.b(A.aE())},
ga_(a){throw A.b(A.aE())},
gar(a){throw A.b(A.aE())},
a8(a,b){throw A.b(A.at(b,0,0,"index",null))},
G(a,b){return!1},
cJ(a,b){return!0},
dC(a,b){return this},
cg(a,b,c){return new A.er(c.i("er<0>"))},
bj(a,b){A.bb(b,"count")
return this},
cQ(a,b){A.bb(b,"count")
return this},
cR(a,b){var s=J.BE(0,this.$ti.c)
return s},
fK(a){return A.lP(this.$ti.c)}}
A.lk.prototype={
k(){return!1},
gn(){throw A.b(A.aE())}}
A.bI.prototype={
gt(a){return new A.ng(J.D(this.a),this.$ti.i("ng<1>"))}}
A.ng.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.is.prototype={
sm(a,b){throw A.b(A.Z(u.O))},
u(a,b){throw A.b(A.Z("Cannot add to a fixed-length list"))}}
A.n1.prototype={
j(a,b,c){throw A.b(A.Z("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Z("Cannot change the length of an unmodifiable list"))},
u(a,b){throw A.b(A.Z("Cannot add to an unmodifiable list"))},
cm(a,b){throw A.b(A.Z("Cannot modify an unmodifiable list"))},
al(a,b,c,d,e){throw A.b(A.Z("Cannot modify an unmodifiable list"))},
aw(a,b,c,d){return this.al(0,b,c,d,0)}}
A.he.prototype={}
A.bW.prototype={
gm(a){return J.ai(this.a)},
a8(a,b){var s=this.a,r=J.L(s)
return r.a8(s,r.gm(s)-1-b)}}
A.jq.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
S(a,b){if(b==null)return!1
return b instanceof A.jq&&this.a===b.a}}
A.kf.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.jY.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.jZ.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hB.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.o3.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.f2.prototype={$r:"+(1,2,3)",$s:6}
A.f3.prototype={$r:"+(1,2,3,4)",$s:7}
A.o4.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.ig.prototype={}
A.fo.prototype={
c8(a,b,c){var s=A.n(this)
return A.DE(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gW(a){return this.gm(this)!==0},
l(a){return A.tR(this)},
j(a,b,c){A.Hr()},
gaj(){return new A.hG(this.wN(),A.n(this).i("hG<Q<1,2>>"))},
wN(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gaj(a,b,c){if(b===1){p.push(c)
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
this.a3(0,new A.q8(this,b,s))
return s},
$iF:1}
A.q8.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aY.prototype={
gm(a){return this.b.length},
gmf(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a3(a,b){var s,r,q=this.gmf(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gL(){return new A.eY(this.gmf(),this.$ti.i("eY<1>"))},
gaZ(){return new A.eY(this.b,this.$ti.i("eY<2>"))}}
A.eY.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.hy(s,s.length,this.$ti.i("hy<1>"))}}
A.hy.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iu.prototype={
dP(){var s=this,r=s.$map
if(r==null){r=new A.iD(s.$ti.i("iD<1,2>"))
A.FS(s.a,r)
s.$map=r}return r},
I(a){return this.dP().I(a)},
h(a,b){return this.dP().h(0,b)},
a3(a,b){this.dP().a3(0,b)},
gL(){var s=this.dP()
return new A.T(s,A.n(s).i("T<1>"))},
gaZ(){var s=this.dP()
return new A.ar(s,A.n(s).i("ar<2>"))},
gm(a){return this.dP().a}}
A.ih.prototype={
u(a,b){A.Hs()}}
A.d1.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gW(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hy(s,s.length,r.$ti.i("hy<1>"))},
G(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.rU.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.iy&&this.a.S(0,b.a)&&A.CF(this)===A.CF(b)},
gJ(a){return A.c7(this.a,A.CF(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bL(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iy.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Mj(A.oK(this.a),this.$ti)}}
A.uW.prototype={
$0(){return B.x.x0(1000*this.a.now())},
$S:10}
A.jd.prototype={}
A.ww.prototype={
bW(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.j1.prototype={
l(a){return"Null check operator used on a null value"}}
A.lG.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.n0.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.m5.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iH:1}
A.io.prototype={}
A.k0.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaG:1}
A.el.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Gf(r==null?"unknown":r)+"'"},
gan(a){var s=A.oK(this)
return A.bL(s==null?A.by(this):s)},
gzV(){return this},
$C:"$1",
$R:1,
$D:null}
A.pu.prototype={$C:"$0",$R:0}
A.pv.prototype={$C:"$2",$R:2}
A.wm.prototype={}
A.vX.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Gf(s)+"'"}}
A.i9.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.i9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kq(this.a)^A.eF(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mf(this.a)+"'")}}
A.mw.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bE.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gW(a){return this.a!==0},
gL(){return new A.T(this,A.n(this).i("T<1>"))},
gaZ(){return new A.ar(this,A.n(this).i("ar<2>"))},
gaj(){return new A.aO(this,A.n(this).i("aO<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nu(a)},
nu(a){var s=this.d
if(s==null)return!1
return this.dm(this.m9(s,a),a)>=0},
E(a,b){b.a3(0,new A.t0(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nv(b)},
nv(a){var s,r,q=this.d
if(q==null)return null
s=this.m9(q,a)
r=this.dm(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.lB(s==null?q.b=q.jY():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.lB(r==null?q.c=q.jY():r,b,c)}else q.nx(b,c)},
nx(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jY()
s=p.ei(a)
r=o[s]
if(r==null)o[s]=[p.jl(a,b)]
else{q=p.dm(r,a)
if(q>=0)r[q].b=b
else r.push(p.jl(a,b))}},
l0(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.mB(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.mB(s.c,b)
else return s.nw(b)},
nw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ei(a)
r=n[s]
q=o.dm(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mT(p)
if(r.length===0)delete n[s]
return p.b},
aa(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.jk()}},
a3(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aA(s))
r=r.c}},
lB(a,b,c){var s=a[b]
if(s==null)a[b]=this.jl(b,c)
else s.b=c},
mB(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mT(s)
delete a[b]
return s.b},
jk(){this.r=this.r+1&1073741823},
jl(a,b){var s,r=this,q=new A.tA(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.jk()
return q},
mT(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.jk()},
ei(a){return J.a8(a)&1073741823},
m9(a,b){return a[this.ei(b)]},
dm(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1},
l(a){return A.tR(this)},
jY(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.t0.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.tA.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bF(s,s.r,s.e,this.$ti.i("bF<1>"))},
G(a,b){return this.a.I(b)}}
A.bF.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ar.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aU(s,s.r,s.e,this.$ti.i("aU<1>"))}}
A.aU.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aO.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.lO(s,s.r,s.e,this.$ti.i("lO<1,2>"))}}
A.lO.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.Q(s.a,s.b,r.$ti.i("Q<1,2>"))
r.c=s.c
return!0}}}
A.iE.prototype={
ei(a){return A.kq(a)&1073741823},
dm(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iD.prototype={
ei(a){return A.LQ(a)&1073741823},
dm(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.AV.prototype={
$1(a){return this.a(a)},
$S:36}
A.AW.prototype={
$2(a,b){return this.a(a,b)},
$S:179}
A.AX.prototype={
$1(a){return this.a(a)},
$S:68}
A.f1.prototype={
gan(a){return A.bL(this.ma())},
ma(){return A.M2(this.$r,this.h8())},
l(a){return this.mR(!1)},
mR(a){var s,r,q,p,o,n=this.qv(),m=this.h8(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.DP(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
qv(){var s,r=this.$s
while($.zi.length<=r)$.zi.push(null)
s=$.zi[r]
if(s==null){s=this.pY()
$.zi[r]=s}return s},
pY(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Dw(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.cJ(j,k)}}
A.o0.prototype={
h8(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.o0&&this.$s===b.$s&&J.v(this.a,b.a)&&J.v(this.b,b.b)},
gJ(a){return A.c7(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.o1.prototype={
h8(){return[this.a,this.b,this.c]},
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.o1&&s.$s===b.$s&&J.v(s.a,b.a)&&J.v(s.b,b.b)&&J.v(s.c,b.c)},
gJ(a){var s=this
return A.c7(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.o2.prototype={
h8(){return this.a},
S(a,b){if(b==null)return!1
return b instanceof A.o2&&this.$s===b.$s&&A.JM(this.a,b.a)},
gJ(a){return A.c7(this.$s,A.uh(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.ew.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gml(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.BG(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gtD(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.BG(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pZ(){var s,r=this.a
if(!B.a.G(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ef(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hA(s)},
kn(a,b,c){var s=b.length
if(c>s)throw A.b(A.at(c,0,s,null,null))
return new A.ns(this,b,c)},
i7(a,b){return this.kn(0,b,0)},
qs(a,b){var s,r=this.gml()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hA(s)},
qr(a,b){var s,r=this.gtD()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hA(s)},
en(a,b,c){if(c<0||c>b.length)throw A.b(A.at(c,0,b.length,null,null))
return this.qr(b,c)}}
A.hA.prototype={
gP(){return this.b.index},
gO(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieA:1,
$imp:1}
A.ns.prototype={
gt(a){return new A.nt(this.a,this.b,this.c)}}
A.nt.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.qs(l,s)
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
A.h7.prototype={
gO(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.vz(b,null))
return this.c},
$ieA:1,
gP(){return this.a}}
A.og.prototype={
gt(a){return new A.zD(this.a,this.b,this.c)},
gD(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h7(r,s)
throw A.b(A.aE())}}
A.zD.prototype={
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
A.nB.prototype={
bo(){var s=this.b
if(s===this)throw A.b(new A.dD("Local '"+this.a+"' has not been initialized."))
return s},
bz(){var s=this.b
if(s===this)throw A.b(A.DD(this.a))
return s},
snn(a){var s=this
if(s.b!==s)throw A.b(new A.dD("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fH.prototype={
gan(a){return B.dv},
i9(a,b,c){A.hO(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
n2(a){return this.i9(a,0,null)},
n1(a,b,c){A.hO(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
i8(a,b,c){A.hO(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
n0(a){return this.i8(a,0,null)},
$iak:1,
$ieh:1}
A.fG.prototype={$ifG:1}
A.iX.prototype={
ga9(a){if(((a.$flags|0)&2)!==0)return new A.oo(a.buffer)
else return a.buffer},
tr(a,b,c,d){var s=A.at(b,0,c,d,null)
throw A.b(s)},
lM(a,b,c,d){if(b>>>0!==b||b>c)this.tr(a,b,c,d)}}
A.oo.prototype={
i9(a,b,c){var s=A.bV(this.a,b,c)
s.$flags=3
return s},
n2(a){return this.i9(0,0,null)},
n1(a,b,c){var s=A.DI(this.a,b,c)
s.$flags=3
return s},
i8(a,b,c){var s=A.DH(this.a,b,c)
s.$flags=3
return s},
n0(a){return this.i8(0,0,null)},
$ieh:1}
A.iW.prototype={
gan(a){return B.dw},
$iak:1,
$iBp:1}
A.fI.prototype={
gm(a){return a.length},
mI(a,b,c,d,e){var s,r,q=a.length
this.lM(a,b,q,"start")
this.lM(a,c,q,"end")
if(b>c)throw A.b(A.at(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.O(e,null))
r=d.length
if(r-e<s)throw A.b(A.x("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ib9:1,
$ibS:1}
A.dN.prototype={
h(a,b){A.dm(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.J(a)
A.dm(b,a,a.length)
a[b]=c},
al(a,b,c,d,e){a.$flags&2&&A.J(a,5)
if(t.dQ.b(d)){this.mI(a,b,c,d,e)
return}this.ly(a,b,c,d,e)},
aw(a,b,c,d){return this.al(a,b,c,d,0)},
$iK:1,
$io:1,
$ip:1}
A.bU.prototype={
j(a,b,c){a.$flags&2&&A.J(a)
A.dm(b,a,a.length)
a[b]=c},
al(a,b,c,d,e){a.$flags&2&&A.J(a,5)
if(t.aj.b(d)){this.mI(a,b,c,d,e)
return}this.ly(a,b,c,d,e)},
aw(a,b,c,d){return this.al(a,b,c,d,0)},
$iK:1,
$io:1,
$ip:1}
A.lZ.prototype={
gan(a){return B.dx},
U(a,b,c){return new Float32Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$irf:1}
A.m_.prototype={
gan(a){return B.dy},
U(a,b,c){return new Float64Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$irg:1}
A.m0.prototype={
gan(a){return B.dz},
h(a,b){A.dm(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$irV:1}
A.m1.prototype={
gan(a){return B.dA},
h(a,b){A.dm(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$irW:1}
A.m2.prototype={
gan(a){return B.dB},
h(a,b){A.dm(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$irX:1}
A.iY.prototype={
gan(a){return B.dF},
h(a,b){A.dm(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$iwz:1}
A.iZ.prototype={
gan(a){return B.dG},
h(a,b){A.dm(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$iwA:1}
A.j_.prototype={
gan(a){return B.dH},
gm(a){return a.length},
h(a,b){A.dm(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$iwB:1}
A.eB.prototype={
gan(a){return B.dI},
gm(a){return a.length},
h(a,b){A.dm(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8Array(a.subarray(b,A.dn(b,c,a.length)))},
b6(a,b){return this.U(a,b,null)},
$iak:1,
$ieB:1,
$icT:1}
A.jU.prototype={}
A.jV.prototype={}
A.jW.prototype={}
A.jX.prototype={}
A.cr.prototype={
i(a){return A.k9(v.typeUniverse,this,a)},
V(a){return A.EE(v.typeUniverse,this,a)}}
A.nO.prototype={}
A.ol.prototype={
l(a){return A.bw(this.a,null)}}
A.nL.prototype={
l(a){return this.a}}
A.k5.prototype={$ide:1}
A.xG.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:24}
A.xF.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:176}
A.xH.prototype={
$0(){this.a.$0()},
$S:4}
A.xI.prototype={
$0(){this.a.$0()},
$S:4}
A.k4.prototype={
po(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e8(new A.zG(this,b),0),a)
else throw A.b(A.Z("`setTimeout()` not found."))},
pp(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e8(new A.zF(this,a,Date.now(),b),0),a)
else throw A.b(A.Z("Periodic timer."))},
C(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Z("Canceling a timer."))},
$idd:1}
A.zG.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.zF.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.ji(s,o)}q.c=p
r.d.$1(q)},
$S:4}
A.jy.prototype={
aD(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aP(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.lL(a)
else s.cZ(a)}},
bD(a,b){var s
if(b==null)b=A.i6(a)
s=this.a
if(this.b)s.ap(new A.ao(a,b))
else s.co(new A.ao(a,b))},
aJ(a){return this.bD(a,null)},
$iid:1}
A.A7.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.A8.prototype={
$2(a,b){this.a.$2(1,new A.io(a,b))},
$S:183}
A.Aq.prototype={
$2(a,b){this.a(a,b)},
$S:81}
A.A5.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.A()
s=q.b
if((s&1)!==0?(q.gaR().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.A6.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:24}
A.nv.prototype={
pk(a,b){var s=new A.xK(a)
this.a=A.vZ(new A.xM(this,a),new A.xN(s),new A.xO(this,s),!1,b)}}
A.xK.prototype={
$0(){A.kt(new A.xL(this.a))},
$S:4}
A.xL.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.xN.prototype={
$0(){this.a.$0()},
$S:0}
A.xO.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.xM.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.A()
if((r.b&4)===0){s.c=new A.t($.C,t._)
if(s.b){s.b=!1
A.kt(new A.xJ(this.b))}return s.c}},
$S:131}
A.xJ.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jQ.prototype={
l(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.oi.prototype={
gn(){return this.b},
uG(a,b){var s,r,q
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
o.d=null}q=o.uG(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Ey
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Ey
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.x("sync*"))}return!1},
zW(a){var s,r,q=this
if(a instanceof A.hG){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.D(a)
return 2}}}
A.hG.prototype={
gt(a){return new A.oi(this.a(),this.$ti.i("oi<1>"))}}
A.ao.prototype={
l(a){return A.q(this.a)},
$iae:1,
gcn(){return this.b}}
A.aT.prototype={}
A.eS.prototype={
bL(){},
bM(){}}
A.jE.prototype={
gcW(){return new A.aT(this,A.n(this).i("aT<1>"))},
giH(){return(this.c&4)!==0},
gjW(){return this.c<4},
uD(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
kf(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.Ep(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.nz(r,a,s.c)
n=A.xV(r,b)
m=c==null?A.Ar():c
l=new A.eS(j,o,n,r.bZ(m,t.H),r,q|p,s.i("eS<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.oG(j.a)
return l},
mu(a){var s,r=this
A.n(r).i("eS<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.uD(a)
if((r.c&2)===0&&r.d==null)r.pM()}return null},
mv(a){},
mw(a){},
jn(){if((this.c&4)!==0)return new A.bj("Cannot add new events after calling close")
return new A.bj("Cannot add new events while doing an addStream")},
u(a,b){if(!this.gjW())throw A.b(this.jn())
this.cA(b)},
bC(a,b){var s
if(!this.gjW())throw A.b(this.jn())
s=A.f7(a,b)
this.cB(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjW())throw A.b(q.jn())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.t($.C,t.D)
q.dc()
return r},
aH(a,b){this.cB(a,b)},
aW(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aP(null)},
pM(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aP(null)}A.oG(this.b)},
$ibC:1}
A.jz.prototype={
cA(a){var s,r
for(s=this.d,r=this.$ti.i("cc<1>");s!=null;s=s.ch)s.c1(new A.cc(a,r))},
cB(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.c1(new A.ht(a,b))},
dc(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.c1(B.aa)
else this.r.aP(null)}}
A.rp.prototype={
$0(){this.c.a(null)
this.b.cp(null)},
$S:0}
A.rr.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.ap(new A.ao(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.ap(new A.ao(q,r))}},
$S:13}
A.rq.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.c1(j,m.b,a)
if(J.v(k,0)){l=m.d
s=A.l([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aK(s,n)}m.c.cZ(s)}}else if(J.v(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ap(new A.ao(s,l))}},
$S(){return this.d.i("W(0)")}}
A.rk.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aG)")}}
A.mS.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iH:1}
A.rl.prototype={
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
l.a.aJ(new A.j4(B.b.no(s,A.Lu()),a,q.i("j4<p<0?>,p<ao?>>")))}},
$S:8}
A.j4.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.q(p.a)},
gcn(){var s=this.c
s=s==null?null:s.b
return s==null?A.ae.prototype.gcn.call(this):s}}
A.jO.prototype={
vk(a){this.a.bE(new A.yF(this,a),new A.yG(this,a),t.P)}}
A.yF.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.yG.prototype={
$2(a,b){this.a.c=new A.ao(a,b)
this.b.$1(1)},
$S:11}
A.yE.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eT.prototype={
bD(a,b){if((this.a.a&30)!==0)throw A.b(A.x("Future already completed"))
this.ap(A.f7(a,b))},
aJ(a){return this.bD(a,null)},
$iid:1}
A.ay.prototype={
aD(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.aP(a)},
ai(){return this.aD(null)},
ap(a){this.a.co(a)}}
A.ap.prototype={
aD(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.cp(a)},
ai(){return this.aD(null)},
ap(a){this.a.ap(a)}}
A.cd.prototype={
xX(a){if((this.c&15)!==6)return!0
return this.b.b.ex(this.d,a.a,t.y,t.K)},
xg(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.l8(r,n,a.b,p,o,t.l)
else q=m.ex(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.E(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.t.prototype={
bE(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.az(b,"onError",u.w))}else{a=q.dt(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.Ff(b,q)}s=new A.t($.C,c.i("t<0>"))
r=b==null?1:3
this.dL(new A.cd(s,r,a,b,this.$ti.i("@<1>").V(c).i("cd<1,2>")))
return s},
ao(a,b){return this.bE(a,null,b)},
mP(a,b,c){var s=new A.t($.C,c.i("t<0>"))
this.dL(new A.cd(s,19,a,b,this.$ti.i("@<1>").V(c).i("cd<1,2>")))
return s},
n6(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=A.Ff(a,r)
this.dL(new A.cd(q,2,null,a,s.i("cd<1,1>")))
return q},
b_(a){var s=this.$ti,r=$.C,q=new A.t(r,s)
if(r!==B.i)a=r.bZ(a,t.z)
this.dL(new A.cd(q,8,a,null,s.i("cd<1,1>")))
return q},
uW(a){this.a=this.a&1|16
this.c=a},
h0(a){this.a=a.a&30|this.a&1
this.c=a.c},
dL(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dL(a)
return}s.h0(r)}s.b.cT(new A.yH(s,a))}},
mr(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.mr(a)
return}n.h0(s)}m.a=n.hS(a)
n.b.cT(new A.yM(m,n))}},
f0(){var s=this.c
this.c=null
return this.hS(s)},
hS(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cp(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.yK(a,r,!0)
else{s=r.f0()
r.a=8
r.c=a
A.eW(r,s)}},
cZ(a){var s=this,r=s.f0()
s.a=8
s.c=a
A.eW(s,r)},
pX(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gca()===r.gca())}else s=!1
if(s)return
q=p.f0()
p.h0(a)
A.eW(p,q)},
ap(a){var s=this.f0()
this.uW(a)
A.eW(this,s)},
pW(a,b){this.ap(new A.ao(a,b))},
aP(a){if(this.$ti.i("y<1>").b(a)){this.lL(a)
return}this.lI(a)},
lI(a){this.a^=2
this.b.cT(new A.yJ(this,a))},
lL(a){A.yK(a,this,!1)
return},
co(a){this.a^=2
this.b.cT(new A.yI(this,a))},
iZ(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.t($.C,r.$ti)
q.aP(r)
return q}s=new A.t($.C,r.$ti)
q.a=null
q.a=A.cS(a,new A.yS(s,a))
r.bE(new A.yT(q,r,s),new A.yU(q,s),t.P)
return s},
$iy:1}
A.yH.prototype={
$0(){A.eW(this.a,this.b)},
$S:0}
A.yM.prototype={
$0(){A.eW(this.b,this.a.a)},
$S:0}
A.yL.prototype={
$0(){A.yK(this.a.a,this.b,!0)},
$S:0}
A.yJ.prototype={
$0(){this.a.cZ(this.b)},
$S:0}
A.yI.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.yP.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aY(q.d,t.z)}catch(p){s=A.E(p)
r=A.ad(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.i6(q)
n=k.a
n.c=new A.ao(q,o)
q=n}q.b=!0
return}if(j instanceof A.t&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.t){m=k.b.a
l=new A.t(m.b,m.$ti)
j.bE(new A.yQ(l,m),new A.yR(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.yQ.prototype={
$1(a){this.a.pX(this.b)},
$S:24}
A.yR.prototype={
$2(a,b){this.a.ap(new A.ao(a,b))},
$S:11}
A.yO.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.ex(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.E(n)
r=A.ad(n)
q=s
p=r
if(p==null)p=A.i6(q)
o=this.a
o.c=new A.ao(q,p)
o.b=!0}},
$S:0}
A.yN.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.xX(s)&&p.a.e!=null){p.c=p.a.xg(s)
p.b=!1}}catch(o){r=A.E(o)
q=A.ad(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.i6(p)
m=l.b
m.c=new A.ao(p,n)
p=m}p.b=!0}},
$S:0}
A.yS.prototype={
$0(){var s=A.BZ()
this.a.ap(new A.ao(new A.mS("Future not completed",this.b),s))},
$S:0}
A.yT.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.C()
this.c.cZ(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.yU.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.C()
this.b.ap(new A.ao(a,b))}},
$S:11}
A.nu.prototype={}
A.aa.prototype={
ej(a){var s=new A.t($.C,t.os),r=new A.a2(""),q=this.ac(null,!0,new A.w1(s,r),s.gju())
q.iM(new A.w2(this,r,q,s))
return s},
gm(a){var s={},r=new A.t($.C,t.hy)
s.a=0
this.ac(new A.w3(s,this),!0,new A.w4(s,r),r.gju())
return r},
gD(a){var s=new A.t($.C,A.n(this).i("t<aa.T>")),r=this.ac(null,!0,new A.w_(s),s.gju())
r.iM(new A.w0(this,r,s))
return s}}
A.w1.prototype={
$0(){var s=this.b.a
this.a.cp(s.charCodeAt(0)==0?s:s)},
$S:0}
A.w2.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.q(a)
q.a+=p}catch(o){s=A.E(o)
r=A.ad(o)
q=s
p=r
n=A.kg(q,p)
if(n==null)q=new A.ao(q,p)
else q=n
A.Kh(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.w3.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(aa.T)")}}
A.w4.prototype={
$0(){this.b.cp(this.a.a)},
$S:0}
A.w_.prototype={
$0(){var s,r=A.BZ(),q=new A.bj("No element")
A.mh(q,r)
s=A.kg(q,r)
if(s==null)s=new A.ao(q,r)
this.a.ap(s)},
$S:0}
A.w0.prototype={
$1(a){A.Ki(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.jn.prototype={
ac(a,b,c,d){return this.a.ac(a,b,c,d)},
bV(a,b,c){return this.ac(a,null,b,c)},
aK(a){return this.ac(a,null,null,null)}}
A.e3.prototype={
gcW(){return new A.b7(this,A.n(this).i("b7<1>"))},
giH(){return(this.b&4)!==0},
gu2(){if((this.b&8)===0)return this.a
return this.a.c},
h4(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e2(A.n(q).i("e2<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e2(A.n(q).i("e2<1>")):s},
gaR(){var s=this.a
return(this.b&8)!==0?s.c:s},
bJ(){if((this.b&4)!==0)return new A.bj("Cannot add event after closing")
return new A.bj("Cannot add event while adding a stream")},
vB(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bJ())
if((o&2)!==0){o=new A.t($.C,t._)
o.aP(null)
return o}o=p.a
s=b===!0
r=new A.t($.C,t._)
q=s?A.J9(p):p.gpt()
q=a.ac(p.gpy(),s,p.gpO(),q)
s=p.b
if((s&1)!==0?(p.gaR().e&4)!==0:(s&2)===0)q.bt()
p.a=new A.k1(o,r,q,A.n(p).i("k1<1>"))
p.b|=8
return r},
m2(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.ec():new A.t($.C,t.D)
return s},
u(a,b){if(this.b>=4)throw A.b(this.bJ())
this.aC(b)},
bC(a,b){var s
if(this.b>=4)throw A.b(this.bJ())
s=A.f7(a,b)
this.aH(s.a,s.b)},
vA(a){return this.bC(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.m2()
if(r>=4)throw A.b(s.bJ())
s.lN()
return s.m2()},
lN(){var s=this.b|=4
if((s&1)!==0)this.dc()
else if((s&3)===0)this.h4().u(0,B.aa)},
aC(a){var s=this,r=s.b
if((r&1)!==0)s.cA(a)
else if((r&3)===0)s.h4().u(0,new A.cc(a,A.n(s).i("cc<1>")))},
aH(a,b){var s=this.b
if((s&1)!==0)this.cB(a,b)
else if((s&3)===0)this.h4().u(0,new A.ht(a,b))},
aW(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aP(null)},
kf(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.x("Stream has already been listened to."))
s=A.Jr(p,a,b,c,d,A.n(p).c)
r=p.gu2()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.be()}else p.a=s
s.uX(r)
s.jD(new A.zz(p))
return s},
mu(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.C()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.t)k=r}catch(o){q=A.E(o)
p=A.ad(o)
n=new A.t($.C,t.D)
n.co(new A.ao(q,p))
k=n}else k=k.b_(s)
m=new A.zy(l)
if(k!=null)k=k.b_(m)
else m.$0()
return k},
mv(a){if((this.b&8)!==0)this.a.b.bt()
A.oG(this.e)},
mw(a){if((this.b&8)!==0)this.a.b.be()
A.oG(this.f)},
$ibC:1}
A.zz.prototype={
$0(){A.oG(this.a.d)},
$S:0}
A.zy.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aP(null)},
$S:0}
A.oj.prototype={
cA(a){this.gaR().aC(a)},
cB(a,b){this.gaR().aH(a,b)},
dc(){this.gaR().aW()}}
A.jA.prototype={
cA(a){this.gaR().c1(new A.cc(a,A.n(this).i("cc<1>")))},
cB(a,b){this.gaR().c1(new A.ht(a,b))},
dc(){this.gaR().c1(B.aa)}}
A.cY.prototype={}
A.hH.prototype={}
A.b7.prototype={
gJ(a){return(A.eF(this.a)^892482866)>>>0},
S(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b7&&b.a===this.a}}
A.dZ.prototype={
hL(){return this.w.mu(this)},
bL(){this.w.mv(this)},
bM(){this.w.mw(this)}}
A.nr.prototype={
C(){var s=this.b.C()
return s.b_(new A.xB(this))}}
A.xC.prototype={
$2(a,b){var s=this.a
s.aH(a,b)
s.aW()},
$S:11}
A.xB.prototype={
$0(){this.a.a.aP(null)},
$S:4}
A.k1.prototype={}
A.b2.prototype={
uX(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fS(s)}},
iM(a){this.a=A.nz(this.d,a,A.n(this).i("b2.T"))},
bt(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jD(q.geR())},
be(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fS(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jD(s.geS())}}},
C(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.jq()
r=s.f
return r==null?$.ec():r},
jq(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hL()},
aC(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cA(a)
else s.c1(new A.cc(a,A.n(s).i("cc<b2.T>")))},
aH(a,b){var s
if(t.C.b(a))A.mh(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cB(a,b)
else this.c1(new A.ht(a,b))},
aW(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.dc()
else s.c1(B.aa)},
bL(){},
bM(){},
hL(){return null},
c1(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e2(A.n(r).i("e2<b2.T>"))
q.u(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fS(r)}},
cA(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fJ(s.a,a,A.n(s).i("b2.T"))
s.e=(s.e&4294967231)>>>0
s.js((r&4)!==0)},
cB(a,b){var s,r=this,q=r.e,p=new A.xX(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.jq()
s=r.f
if(s!=null&&s!==$.ec())s.b_(p)
else p.$0()}else{p.$0()
r.js((q&4)!==0)}},
dc(){var s,r=this,q=new A.xW(r)
r.jq()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.ec())s.b_(q)
else q.$0()},
jD(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.js((r&4)!==0)},
js(a){var s,r,q=this,p=q.e
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
q.e=p}if((p&128)!==0&&p<256)q.r.fS(q)},
$ibk:1}
A.xX.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nO(s,o,this.c,r,t.l)
else q.fJ(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.xW.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fI(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hF.prototype={
ac(a,b,c,d){return this.a.kf(a,d,c,b===!0)},
bV(a,b,c){return this.ac(a,null,b,c)},
aK(a){return this.ac(a,null,null,null)}}
A.nK.prototype={
geo(){return this.a},
seo(a){return this.a=a}}
A.cc.prototype={
l_(a){a.cA(this.b)}}
A.ht.prototype={
l_(a){a.cB(this.b,this.c)}}
A.yx.prototype={
l_(a){a.dc()},
geo(){return null},
seo(a){throw A.b(A.x("No events after a done."))}}
A.e2.prototype={
fS(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kt(new A.zh(s,a))
s.a=1},
u(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.seo(b)
s.c=b}}}
A.zh.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.geo()
q.b=r
if(r==null)q.c=null
s.l_(this.b)},
$S:0}
A.hu.prototype={
iM(a){},
bt(){var s=this.a
if(s>=0)this.a=s+2},
be(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kt(s.gmn())}else s.a=r},
C(){this.a=-1
this.c=null
return $.ec()},
tR(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fI(s)}}else r.a=q},
$ibk:1}
A.cf.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.t($.C,t.g5)
r.b=s
r.c=!1
q.be()
return s}throw A.b(A.x("Already waiting for next."))}return r.tq()},
tq(){var s,r,q=this,p=q.b
if(p!=null){s=new A.t($.C,t.g5)
q.b=s
r=p.ac(q.gtJ(),!0,q.gtL(),q.gtN())
if(q.b!=null)q.a=r
return s}return $.Gl()},
C(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aP(!1)
else s.c=!1
return r.C()}return $.ec()},
tK(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cp(!0)
if(q.c){r=q.a
if(r!=null)r.bt()}},
tO(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ap(new A.ao(a,b))
else q.co(new A.ao(a,b))},
tM(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cZ(!1)
else q.lI(!1)}}
A.jJ.prototype={
ac(a,b,c,d){return A.Ep(c,this.$ti.c)},
bV(a,b,c){return this.ac(a,null,b,c)}}
A.dk.prototype={
ac(a,b,c,d){var s=null,r=new A.jT(s,s,s,s,this.$ti.i("jT<1>"))
r.d=new A.zf(this,r)
return r.kf(a,d,c,b===!0)},
bV(a,b,c){return this.ac(a,null,b,c)},
aK(a){return this.ac(a,null,null,null)}}
A.zf.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jT.prototype={
vC(a){var s=this.b
if(s>=4)throw A.b(this.bJ())
if((s&1)!==0)this.gaR().aC(a)},
vS(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bJ())
r|=4
s.b=r
if((r&1)!==0)s.gaR().aW()},
gcW(){throw A.b(A.Z("Not available"))},
$idL:1}
A.Aa.prototype={
$0(){return this.a.ap(this.b)},
$S:0}
A.Ab.prototype={
$0(){return this.a.cp(this.b)},
$S:0}
A.jM.prototype={
ac(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nz(r,a,s.y[1]),n=A.xV(r,d),m=c==null?A.Ar():c
s=new A.hx(this,o,n,r.bZ(m,t.H),r,q|p,s.i("hx<1,2>"))
s.x=this.a.bV(s.gjH(),s.gjJ(),s.gjL())
return s},
bV(a,b,c){return this.ac(a,null,b,c)}}
A.hx.prototype={
aC(a){if((this.e&2)!==0)return
this.jh(a)},
aH(a,b){if((this.e&2)!==0)return
this.lz(a,b)},
bL(){var s=this.x
if(s!=null)s.bt()},
bM(){var s=this.x
if(s!=null)s.be()},
hL(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
jI(a){this.w.r_(a,this)},
jM(a,b){this.aH(a,b)},
jK(){this.aW()}}
A.f_.prototype={
r_(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.E(q)
r=A.ad(q)
p=s
o=r
n=A.kg(p,o)
if(n!=null){p=n.a
o=n.b}b.aH(p,o)
return}b.aC(m)}}
A.jK.prototype={
u(a,b){var s=this.a
if((s.e&2)!==0)A.u(A.x("Stream is already closed"))
s.jh(b)},
bC(a,b){this.a.aH(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.u(A.x("Stream is already closed"))
s.lA()},
$ibC:1}
A.hD.prototype={
aC(a){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.jh(a)},
aH(a,b){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.lz(a,b)},
aW(){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.lA()},
bL(){var s=this.x
if(s!=null)s.bt()},
bM(){var s=this.x
if(s!=null)s.be()},
hL(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
jI(a){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.u(0,a)}catch(p){s=A.E(p)
r=A.ad(p)
this.aH(s,r)}},
jM(a,b){var s,r,q,p
try{q=this.w
q===$&&A.A()
q.bC(a,b)}catch(p){s=A.E(p)
r=A.ad(p)
if(s===a)this.aH(a,b)
else this.aH(s,r)}},
jK(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.A()
q.p()}catch(p){s=A.E(p)
r=A.ad(p)
this.aH(s,r)}}}
A.jD.prototype={
ac(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nz(r,a,s.y[1]),n=A.xV(r,d),m=c==null?A.Ar():c,l=new A.hD(o,n,r.bZ(m,t.H),r,q|p,s.i("hD<1,2>"))
l.w=this.a.$1(new A.jK(l,s.i("jK<2>")))
l.x=this.b.bV(l.gjH(),l.gjJ(),l.gjL())
return l},
bV(a,b,c){return this.ac(a,null,b,c)}}
A.A2.prototype={}
A.A4.prototype={}
A.A3.prototype={}
A.A0.prototype={}
A.A1.prototype={}
A.A_.prototype={}
A.zX.prototype={}
A.oz.prototype={}
A.zW.prototype={}
A.zV.prototype={}
A.zZ.prototype={}
A.zY.prototype={}
A.oy.prototype={
x8(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.oA.prototype={}
A.ox.prototype={
eX(a,b,c){var s,r,q,p,o,n,m=this.gjT(),l=m.a
if(l===B.i){A.kl(b,c)
return}o=l.gkW()
o.toString
s=o
r=$.C
try{$.C=s
m.x8(l,l.gb8(),a,b,c)
$.C=r}catch(n){q=A.E(n)
p=A.ad(n)
$.C=r
o=b===q?c:p
s.eX(l,q,o)}},
$iP:1}
A.nE.prototype={
gm_(){var s=this.ax
return s==null?this.ax=new A.hM(this):s},
gb8(){return this.ay.gm_()},
gca(){return this.as.a},
fI(a){var s,r,q
try{this.aY(a,t.H)}catch(q){s=A.E(q)
r=A.ad(q)
this.eX(this,s,r)}},
fJ(a,b,c){var s,r,q
try{this.ex(a,b,t.H,c)}catch(q){s=A.E(q)
r=A.ad(q)
this.eX(this,s,r)}},
nO(a,b,c,d,e){var s,r,q
try{this.l8(a,b,c,t.H,d,e)}catch(q){s=A.E(q)
r=A.ad(q)
this.eX(this,s,r)}},
kq(a,b){return new A.yt(this,this.bZ(a,b),b)},
vO(a,b,c){return new A.yv(this,this.dt(a,b,c),c,b)},
f7(a){return new A.ys(this,this.bZ(a,t.H))},
ib(a,b){return new A.yu(this,this.dt(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aO)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.uA(q,b)},
uA(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkW().gkm()
if(s===B.aO)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
fk(a,b){this.eX(this,a,b)},
np(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
aY(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
ex(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb8(),this,a,b,c,d)},
l8(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb8(),this,a,b,c,d,e,f)},
bZ(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
dt(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb8(),this,a,b,c)},
fD(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb8(),this,a,b,c,d)},
nk(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb8(),this,a,b)},
cT(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb8(),this,a)},
kv(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
ku(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
gmD(){return this.a},
gmF(){return this.b},
gmE(){return this.c},
gmz(){return this.d},
gmA(){return this.e},
gmy(){return this.f},
gm4(){return this.r},
gkc(){return this.w},
glY(){return this.x},
glX(){return this.y},
gms(){return this.z},
gm7(){return this.Q},
gjT(){return this.as},
gkm(){return this.at},
gkW(){return this.ay}}
A.yt.prototype={
$0(){return this.a.aY(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.yv.prototype={
$1(a){var s=this
return s.a.ex(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").V(this.c).i("1(2)")}}
A.ys.prototype={
$0(){return this.a.fI(this.b)},
$S:0}
A.yu.prototype={
$1(a){return this.a.fJ(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.o7.prototype={
gmD(){return B.dY},
gmF(){return B.dX},
gmE(){return B.dW},
gmz(){return B.dU},
gmA(){return B.dV},
gmy(){return B.dT},
gm4(){return B.dP},
gkc(){return B.dZ},
glY(){return B.dO},
glX(){return B.dN},
gms(){return B.dS},
gm7(){return B.dQ},
gjT(){return B.dR},
gkm(){return B.aO},
gkW(){return null},
gm_(){var s=$.zm
return s==null?$.zm=new A.hM(this):s},
gb8(){var s=$.zm
return s==null?$.zm=new A.hM(this):s},
gca(){return this},
fI(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.Am(null,null,this,a)}catch(q){s=A.E(q)
r=A.ad(q)
A.kl(s,r)}},
fJ(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.An(null,null,this,a,b)}catch(q){s=A.E(q)
r=A.ad(q)
A.kl(s,r)}},
nO(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.Cu(null,null,this,a,b,c)}catch(q){s=A.E(q)
r=A.ad(q)
A.kl(s,r)}},
kq(a,b){return new A.zo(this,a,b)},
f7(a){return new A.zn(this,a)},
ib(a,b){return new A.zp(this,a,b)},
h(a,b){return null},
fk(a,b){A.kl(a,b)},
np(a,b){return A.Fh(null,null,this,a,b)},
aY(a){if($.C===B.i)return a.$0()
return A.Am(null,null,this,a)},
ex(a,b){if($.C===B.i)return a.$1(b)
return A.An(null,null,this,a,b)},
l8(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.Cu(null,null,this,a,b,c)},
bZ(a){return a},
dt(a){return a},
fD(a){return a},
nk(a,b){return null},
cT(a){A.Ao(null,null,this,a)},
kv(a,b){return A.C4(a,b)},
ku(a,b){return A.E1(a,b)}}
A.zo.prototype={
$0(){return this.a.aY(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zn.prototype={
$0(){return this.a.fI(this.b)},
$S:0}
A.zp.prototype={
$1(a){return this.a.fJ(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hM.prototype={$iav:1}
A.Al.prototype={
$0(){A.Dj(this.a,this.b)},
$S:0}
A.jx.prototype={}
A.di.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gW(a){return this.a!==0},
gL(){return new A.eX(this,A.n(this).i("eX<1>"))},
gaZ(){var s=A.n(this)
return A.dJ(new A.eX(this,s.i("eX<1>")),new A.yW(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lT(a)},
lT(a){var s=this.d
if(s==null)return!1
return this.c4(this.lP(s,a),a)>=0},
E(a,b){b.a3(0,new A.yV(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Er(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Er(q,b)
return r}else return this.m8(b)},
m8(a){var s,r,q=this.d
if(q==null)return null
s=this.lP(q,a)
r=this.c4(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.lF(s==null?q.b=A.Cf():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.lF(r==null?q.c=A.Cf():r,b,c)}else q.mH(b,c)},
mH(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.Cf()
s=p.cq(a)
r=o[s]
if(r==null){A.Cg(o,s,[a,b]);++p.a
p.e=null}else{q=p.c4(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a3(a,b){var s,r,q,p,o,n=this,m=n.lO()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aA(n))}},
lO(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.af(i.a,null,!1,t.z)
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
lF(a,b,c){if(a[b]==null){++this.a
this.e=null}A.Cg(a,b,c)},
cq(a){return J.a8(a)&1073741823},
lP(a,b){return a[this.cq(b)]},
c4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.v(a[r],b))return r
return-1}}
A.yW.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.yV.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.e_.prototype={
cq(a){return A.kq(a)&1073741823},
c4(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jG.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.p8(b)},
j(a,b,c){this.p9(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.p7(a)},
cq(a){return this.r.$1(a)&1073741823},
c4(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.yr.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.eX.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.nP(s,s.lO(),this.$ti.i("nP<1>"))},
G(a,b){return this.a.I(b)}}
A.nP.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aA(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.jR.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.oY(b)},
j(a,b,c){this.p_(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.oX(a)},
H(a,b){if(!this.y.$1(b))return null
return this.oZ(b)},
ei(a){return this.x.$1(a)&1073741823},
dm(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.zd.prototype={
$1(a){return this.a.b(a)},
$S:15}
A.dj.prototype={
gt(a){var s=this,r=new A.e1(s,s.r,A.n(s).i("e1<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gF(a){return this.a===0},
gW(a){return this.a!==0},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.q1(b)},
q1(a){var s=this.d
if(s==null)return!1
return this.c4(s[this.cq(a)],a)>=0},
gD(a){var s=this.e
if(s==null)throw A.b(A.x("No elements"))
return s.a},
ga_(a){var s=this.f
if(s==null)throw A.b(A.x("No elements"))
return s.a},
u(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.lE(s==null?q.b=A.Ch():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.lE(r==null?q.c=A.Ch():r,b)}else return q.pr(b)},
pr(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.Ch()
s=q.cq(a)
r=p[s]
if(r==null)p[s]=[q.jZ(a)]
else{if(q.c4(r,a)>=0)return!1
r.push(q.jZ(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lQ(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lQ(s.c,b)
else return s.k9(b)},
k9(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cq(a)
r=n[s]
q=o.c4(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lR(p)
return!0},
aa(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.jX()}},
lE(a,b){if(a[b]!=null)return!1
a[b]=this.jZ(b)
return!0},
lQ(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lR(s)
delete a[b]
return!0},
jX(){this.r=this.r+1&1073741823},
jZ(a){var s,r=this,q=new A.ze(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jX()
return q},
lR(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jX()},
cq(a){return J.a8(a)&1073741823},
c4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.ze.prototype={}
A.e1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.tB.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:26}
A.ex.prototype={
G(a,b){return b instanceof A.b4&&this===b.a},
gt(a){var s=this
return new A.nW(s,s.a,s.c,s.$ti.i("nW<1>"))},
gm(a){return this.b},
aa(a){var s,r,q,p=this;++p.a
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
if(this.b===0)throw A.b(A.x("No such element"))
s=this.c
s.toString
return s},
ga_(a){var s
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
hK(a,b,c){var s,r,q=this
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
kh(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.nW.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.aA(s))
if(r.b!==0)r=s.e&&s.d===r.gD(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b4.prototype={
gfv(){var s=this.a
if(s==null||this===s.gD(0))return null
return this.c}}
A.I.prototype={
gt(a){return new A.aj(a,this.gm(a),A.by(a).i("aj<I.E>"))},
a8(a,b){return this.h(a,b)},
gF(a){return this.gm(a)===0},
gW(a){return!this.gF(a)},
gD(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,0)},
ga_(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,this.gm(a)-1)},
gar(a){if(this.gm(a)===0)throw A.b(A.aE())
if(this.gm(a)>1)throw A.b(A.iz())
return this.h(a,0)},
G(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.v(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aA(a))}return!1},
cJ(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aA(a))}return!0},
fg(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aA(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.w5("",a,b)
return s.charCodeAt(0)==0?s:s},
dC(a,b){return new A.al(a,b,A.by(a).i("al<I.E>"))},
lf(a,b){return new A.bI(a,b.i("bI<0>"))},
cg(a,b,c){return new A.Y(a,b,A.by(a).i("@<I.E>").V(c).i("Y<1,2>"))},
bj(a,b){return A.cw(a,b,null,A.by(a).i("I.E"))},
cQ(a,b){return A.cw(a,0,A.c_(b,"count",t.S),A.by(a).i("I.E"))},
fK(a){var s,r=A.lP(A.by(a).i("I.E"))
for(s=0;s<this.gm(a);++s)r.u(0,this.h(a,s))
return r},
u(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
ic(a,b){return new A.bO(a,A.by(a).i("@<I.E>").V(b).i("bO<1,2>"))},
cm(a,b){var s=b==null?A.LO():b
A.mE(a,0,this.gm(a)-1,s)},
U(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bc(b,c,r)
s=A.N(this.fR(a,b,c),A.by(a).i("I.E"))
return s},
b6(a,b){return this.U(a,b,null)},
fR(a,b,c){A.bc(b,c,this.gm(a))
return A.cw(a,b,c,A.by(a).i("I.E"))},
kE(a,b,c,d){var s
A.bc(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
al(a,b,c,d,e){var s,r,q,p,o
A.bc(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.oY(d,e).cR(0,!1)
r=0}p=J.L(q)
if(r+s>p.gm(q))throw A.b(A.Du())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aw(a,b,c,d){return this.al(a,b,c,d,0)},
cU(a,b,c){var s,r
if(t.j.b(c))this.aw(a,b,b+c.length,c)
else for(s=J.D(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.rZ(a,"[","]")},
$iK:1,
$io:1,
$ip:1}
A.U.prototype={
c8(a,b,c){var s=A.n(this)
return A.DE(this,s.i("U.K"),s.i("U.V"),b,c)},
a3(a,b){var s,r,q,p
for(s=J.D(this.gL()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gaj(){return J.aL(this.gL(),new A.tQ(this),A.n(this).i("Q<U.K,U.V>"))},
aL(a,b,c,d){var s,r,q,p,o,n=A.w(c,d)
for(s=J.D(this.gL()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.Bn(this.gL(),a)},
gm(a){return J.ai(this.gL())},
gF(a){return J.bz(this.gL())},
gW(a){return J.ed(this.gL())},
gaZ(){return new A.jS(this,A.n(this).i("jS<U.K,U.V>"))},
l(a){return A.tR(this)},
$iF:1}
A.tQ.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.Q(a,r,A.n(s).i("Q<U.K,U.V>"))},
$S(){return A.n(this.a).i("Q<U.K,U.V>(U.K)")}}
A.tS.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:33}
A.jS.prototype={
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gW(a){var s=this.a
return s.gW(s)},
gD(a){var s=this.a
s=s.h(0,J.c2(s.gL()))
return s==null?this.$ti.y[1].a(s):s},
gar(a){var s=this.a
s=s.h(0,J.Bo(s.gL()))
return s==null?this.$ti.y[1].a(s):s},
ga_(a){var s=this.a
s=s.h(0,J.oX(s.gL()))
return s==null?this.$ti.y[1].a(s):s},
gt(a){var s=this.a
return new A.nY(J.D(s.gL()),s,this.$ti.i("nY<1,2>"))}}
A.nY.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.on.prototype={
j(a,b,c){throw A.b(A.Z("Cannot modify unmodifiable map"))}}
A.iL.prototype={
c8(a,b,c){return this.a.c8(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a3(a,b){this.a.a3(0,b)},
gF(a){var s=this.a
return s.gF(s)},
gW(a){var s=this.a
return s.gW(s)},
gm(a){var s=this.a
return s.gm(s)},
gL(){return this.a.gL()},
l(a){return this.a.l(0)},
gaZ(){return this.a.gaZ()},
gaj(){return this.a.gaj()},
aL(a,b,c,d){return this.a.aL(0,b,c,d)},
$iF:1}
A.cU.prototype={
c8(a,b,c){return new A.cU(this.a.c8(0,b,c),b.i("@<0>").V(c).i("cU<1,2>"))}}
A.iH.prototype={
gt(a){var s=this
return new A.nX(s,s.c,s.d,s.b,s.$ti.i("nX<1>"))},
gF(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gD(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aE())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga_(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aE())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gar(a){var s,r=this
if(r.b===r.c)throw A.b(A.aE())
if(r.gm(0)>1)throw A.b(A.iz())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a8(a,b){var s,r=this
A.Dt(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.v(r.a[s],b)){r.k9(s);++r.d
return!0}return!1},
l(a){return A.rZ(this,"{","}")},
k9(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.nX.prototype={
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
A.cs.prototype={
gF(a){return this.gm(this)===0},
gW(a){return this.gm(this)!==0},
E(a,b){var s
for(s=J.D(b);s.k();)this.u(0,s.gn())},
cg(a,b,c){return new A.eq(this,b,A.n(this).i("@<1>").V(c).i("eq<1,2>"))},
gar(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iz())
s=r.gt(r)
if(!s.k())throw A.b(A.aE())
return s.gn()},
l(a){return A.rZ(this,"{","}")},
dC(a,b){return new A.al(this,b,A.n(this).i("al<1>"))},
cJ(a,b){var s
for(s=this.gt(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cQ(a,b){return A.E_(this,b,A.n(this).c)},
bj(a,b){return A.DY(this,b,A.n(this).c)},
gD(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aE())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aE())
do s=r.gn()
while(r.k())
return s},
a8(a,b){var s,r
A.bb(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lz(b,b-r,this,null,"index"))},
$iK:1,
$io:1,
$ieJ:1}
A.k_.prototype={}
A.ka.prototype={}
A.nT.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ua(b):s}},
gm(a){return this.b==null?this.c.a:this.dM().length},
gF(a){return this.gm(0)===0},
gW(a){return this.gm(0)>0},
gL(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.nU(this)},
gaZ(){var s,r=this
if(r.b==null){s=r.c
return new A.ar(s,A.n(s).i("ar<2>"))}return A.dJ(r.dM(),new A.z9(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.vg().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a3(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a3(0,b)
s=o.dM()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.Ad(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aA(o))}},
dM(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
vg(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.dM()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.aa(r)
n.a=n.b=null
return n.c=s},
ua(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.Ad(this.a[a])
return this.b[a]=s}}
A.z9.prototype={
$1(a){return this.a.h(0,a)},
$S:68}
A.nU.prototype={
gm(a){return this.a.gm(0)},
a8(a,b){var s=this.a
return s.b==null?s.gL().a8(0,b):s.dM()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gL()
s=s.gt(s)}else{s=s.dM()
s=new J.fi(s,s.length,A.a0(s).i("fi<1>"))}return s},
G(a,b){return this.a.I(b)}}
A.z7.prototype={
p(){var s,r,q=this
q.pa()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aC(A.Fd(r.charCodeAt(0)==0?r:r,q.b))
s.aW()}}
A.zR.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:55}
A.zQ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:55}
A.kF.prototype={
gaT(){return"us-ascii"},
kB(a){return B.bt.v(a)}}
A.om.prototype={
v(a){var s,r,q,p=A.bc(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.az(a,"string","Contains invalid characters."))
o[r]=q}return o},
c0(a){return new A.zI(new A.hn(a),this.a)}}
A.kG.prototype={}
A.zI.prototype={
p(){this.a.a.p()},
bQ(a,b,c,d){var s,r,q,p
A.bc(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.ck(a)
p=this.a.a
p.u(0,s.U(s,b,c))
if(d)p.p()}}
A.kK.prototype={
gfc(){return this.a},
xY(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bc(a1,a2,a0.length)
s=$.CS()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.AU(a0.charCodeAt(l))
h=A.AU(a0.charCodeAt(l+1))
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
d=A.bs(k)
e.a+=d
q=l
continue}}throw A.b(A.a9("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.D2(a0,n,a2,o,m,d)
else{c=B.c.am(d-1,4)+1
if(c===1)throw A.b(A.a9(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.du(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.D2(a0,n,a2,o,m,b)
else{c=B.c.am(b,4)
if(c===1)throw A.b(A.a9(a,a0,a2))
if(c>1)a0=B.a.du(a0,a2,a2,c===2?"==":"=")}return a0}}
A.i8.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.nx(this.a?u.G:u.U).nj(a,0,s,!0)
s.toString
return A.dT(s,0,null)},
c0(a){return new A.xD(a,new A.xU(this.a?u.G:u.U))}}
A.nx.prototype={
na(a){return new Uint8Array(a)},
nj(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.N(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.na(o)
r.a=A.Ji(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.xU.prototype={
na(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bN(B.f.ga9(s),s.byteOffset,a)}}
A.xQ.prototype={
u(a,b){this.lU(b,0,J.ai(b),!1)},
p(){this.lU(B.cC,0,0,!0)}}
A.xD.prototype={
lU(a,b,c,d){var s=this.b.nj(a,b,c,d)
if(s!=null)this.a.a.aC(A.dT(s,0,null))
if(d)this.a.a.aW()}}
A.kL.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.nw()
r=s.kx(a,0,q)
r.toString
s.kr(a,q)
return r},
c0(a){return new A.xP(a,new A.nw())}}
A.nw.prototype={
kx(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Ee(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Jf(a,b,c,q)
r.a=A.Jh(a,b,c,s,0,r.a)
return s},
kr(a,b){var s=this.a
if(s<-1)throw A.b(A.a9("Missing padding character",a,b))
if(s>0)throw A.b(A.a9("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.xP.prototype={
u(a,b){var s,r=b.length
if(r===0)return
s=this.b.kx(b,0,r)
if(s!=null)this.a.a.aC(s)},
p(){this.b.kr(null,null)
this.a.a.aW()},
bQ(a,b,c,d){var s,r
A.bc(b,c,a.length)
if(b===c)return
s=this.b
r=s.kx(a,b,c)
if(r!=null)this.a.a.aC(r)
if(d){s.kr(a,c)
this.a.a.aW()}}}
A.pg.prototype={}
A.hn.prototype={
u(a,b){this.a.u(0,b)},
p(){this.a.p()}}
A.nA.prototype={
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
p(){this.a.$1(B.f.U(this.b,0,this.c))}}
A.kY.prototype={}
A.od.prototype={
u(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.eU.prototype={
u(a,b){this.b.u(0,b)},
bC(a,b){A.c_(a,"error",t.K)
this.a.bC(a,b)},
p(){this.b.p()},
$ibC:1}
A.l_.prototype={}
A.aC.prototype={
c0(a){throw A.b(A.Z("This converter does not support chunked conversions: "+this.l(0)))},
vM(a){return new A.jD(new A.qf(this),a,t.fM.V(A.n(this).i("aC.T")).i("jD<1,2>"))}}
A.qf.prototype={
$1(a){return new A.eU(a,this.a.c0(a),t.oW)},
$S:82}
A.es.prototype={}
A.iF.prototype={
l(a){var s=A.im(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lH.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.t1.prototype={
aA(a,b){var s=A.Fd(a,this.gw4().a)
return s},
a7(a,b){var s=A.JC(a,this.gfc().b,null)
return s},
gfc(){return B.ca},
gw4(){return B.c9}}
A.lJ.prototype={
c0(a){return new A.z8(null,this.b,new A.of(a))}}
A.z8.prototype={
u(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.x("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a2("")
q=new A.zE(r,s)
A.Et(b,q,p.b,p.a)
if(r.a.length!==0)q.jC()
s.p()},
p(){}}
A.lI.prototype={
c0(a){return new A.z7(this.a,a,new A.a2(""))}}
A.zb.prototype={
nV(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.j7(a,s,r)
s=r+1
n.aq(92)
n.aq(117)
n.aq(100)
p=q>>>8&15
n.aq(p<10?48+p:87+p)
p=q>>>4&15
n.aq(p<10?48+p:87+p)
p=q&15
n.aq(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.j7(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.j7(a,s,r)
s=r+1
n.aq(92)
n.aq(q)}}if(s===0)n.b4(a)
else if(s<m)n.j7(a,s,m)},
jr(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.lH(a,null))}s.push(a)},
j6(a){var s,r,q,p,o=this
if(o.nU(a))return
o.jr(a)
try{s=o.b.$1(a)
if(!o.nU(s)){q=A.DB(a,null,o.gmp())
throw A.b(q)}o.a.pop()}catch(p){r=A.E(p)
q=A.DB(a,r,o.gmp())
throw A.b(q)}},
nU(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.zj(a)
return!0}else if(a===!0){r.b4("true")
return!0}else if(a===!1){r.b4("false")
return!0}else if(a==null){r.b4("null")
return!0}else if(typeof a=="string"){r.b4('"')
r.nV(a)
r.b4('"')
return!0}else if(t.j.b(a)){r.jr(a)
r.zh(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.jr(a)
s=r.zi(a)
r.a.pop()
return s}else return!1},
zh(a){var s,r,q=this
q.b4("[")
s=J.L(a)
if(s.gW(a)){q.j6(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b4(",")
q.j6(s.h(a,r))}}q.b4("]")},
zi(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.b4("{}")
return!0}s=a.gm(a)*2
r=A.af(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a3(0,new A.zc(n,r))
if(!n.b)return!1
o.b4("{")
for(p='"';q<s;q+=2,p=',"'){o.b4(p)
o.nV(A.G(r[q]))
o.b4('":')
o.j6(r[q+1])}o.b4("}")
return!0}}
A.zc.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:33}
A.za.prototype={
gmp(){var s=this.c
return s instanceof A.a2?s.l(0):null},
zj(a){this.c.j5(B.x.l(a))},
b4(a){this.c.j5(a)},
j7(a,b,c){this.c.j5(B.a.A(a,b,c))},
aq(a){this.c.aq(a)}}
A.lM.prototype={
gaT(){return"iso-8859-1"},
kB(a){return B.ci.v(a)}}
A.lN.prototype={}
A.mO.prototype={
u(a,b){this.bQ(b,0,b.length,!1)}}
A.zE.prototype={
aq(a){var s=this.a,r=A.bs(a)
if((s.a+=r).length>16)this.jC()},
j5(a){if(this.a.a.length!==0)this.jC()
this.b.u(0,a)},
jC(){var s=this.a,r=s.a
s.a=""
this.b.u(0,r.charCodeAt(0)==0?r:r)}}
A.k3.prototype={
p(){},
bQ(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bs(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
u(a,b){this.a.a+=b}}
A.of.prototype={
u(a,b){this.a.a.aC(b)},
bQ(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aC(a)
else r.aC(B.a.A(a,b,c))
if(d)r.aW()},
p(){this.a.a.aW()}}
A.zP.prototype={
p(){var s,r,q,p=this.c
this.a.x4(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bQ(q,0,q.length,!0)}else r.p()},
u(a,b){this.bQ(b,0,J.ai(b),!1)},
bQ(a,b,c,d){var s,r=this.c,q=this.a.d0(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bQ(s,0,s.length,!1)
r.a=""
return}}}
A.n6.prototype={
gaT(){return"utf-8"},
w1(a,b){return new A.dl((b===!0?B.dJ:B.aN).a).d0(a,0,null,!0)},
f8(a){return this.w1(a,null)},
kB(a){return B.e.v(a)}}
A.n7.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.op(s)
if(r.m6(a,0,q)!==q)r.i3()
return B.f.U(s,0,r.b)},
c0(a){return new A.zS(new A.hn(a),new Uint8Array(1024))}}
A.op.prototype={
i3(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.J(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mY(a,b){var s,r,q,p,o=this
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
return!0}else{o.i3()
return!1}},
m6(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.J(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mY(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.i3()}else if(o<=2047){n=k.b
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
A.zS.prototype={
p(){if(this.a!==0){this.bQ("",0,0,!0)
return}this.d.a.p()},
bQ(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mY(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.m6(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.i3()
else n.a=a.charCodeAt(b);++b}s.u(0,B.f.U(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.js.prototype={
c0(a){return new A.zP(new A.dl(this.a),new A.of(a),new A.a2(""))}}
A.dl.prototype={
d0(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bc(b,c,J.ai(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.K7(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.K6(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.jw(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.EQ(p)
m.b=0
throw A.b(A.a9(n,a,q+m.c))}return o},
jw(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.N(b+c,2)
r=q.jw(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.jw(a,s,c,d)}return q.w3(a,b,c,d)},
x4(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bs(65533)
a.a+=s}else throw A.b(A.a9(A.EQ(77),null,null))},
w3(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a2(""),g=b+1,f=a[b]
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
h.a+=q}else{q=A.dT(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bs(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.oB.prototype={}
A.aI.prototype={
bG(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bJ(p,r)
return new A.aI(p===0?!1:s,r,p)},
qi(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cj()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bJ(s,q)
return new A.aI(n===0?!1:o,q,n)},
ql(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cj()
s=k-a
if(s<=0)return l.a?$.CU():$.cj()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bJ(s,q)
m=new A.aI(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fY(0,$.ff())
return m},
bH(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.N(b,16)
if(B.c.am(b,16)===0)return n.qi(r)
q=s+r+1
p=new Uint16Array(q)
A.Em(n.b,s,b,p)
s=n.a
o=A.bJ(q,p)
return new A.aI(o===0?!1:s,p,o)},
dH(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.N(b,16)
q=B.c.am(b,16)
if(q===0)return j.ql(r)
p=s-r
if(p<=0)return j.a?$.CU():$.cj()
o=j.b
n=new Uint16Array(p)
A.Jo(o,s,b,n)
s=j.a
m=A.bJ(p,n)
l=new A.aI(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bH(1,q)-1)>>>0!==0)return l.fY(0,$.ff())
for(k=0;k<r;++k)if(o[k]!==0)return l.fY(0,$.ff())}return l},
a1(a,b){var s,r=this.a
if(r===b.a){s=A.xR(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
jm(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.jm(p,b)
if(o===0)return $.cj()
if(n===0)return p.a===b?p:p.bG(0)
s=o+1
r=new Uint16Array(s)
A.Jk(p.b,o,a.b,n,r)
q=A.bJ(s,r)
return new A.aI(q===0?!1:b,r,q)},
fZ(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cj()
s=a.c
if(s===0)return p.a===b?p:p.bG(0)
r=new Uint16Array(o)
A.ny(p.b,o,a.b,s,r)
q=A.bJ(o,r)
return new A.aI(q===0?!1:b,r,q)},
fO(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.jm(b,r)
if(A.xR(q.b,p,b.b,s)>=0)return q.fZ(b,r)
return b.fZ(q,!r)},
fY(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bG(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.jm(b,r)
if(A.xR(q.b,p,b.b,s)>=0)return q.fZ(b,r)
return b.fZ(q,!r)},
bh(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cj()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.En(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bJ(s,p)
return new A.aI(m===0?!1:n,p,m)},
qh(a){var s,r,q,p
if(this.c<a.c)return $.cj()
this.m1(a)
s=$.C9.bz()-$.jC.bz()
r=A.Cb($.C8.bz(),$.jC.bz(),$.C9.bz(),s)
q=A.bJ(s,r)
p=new A.aI(!1,r,q)
return this.a!==a.a&&q>0?p.bG(0):p},
uC(a){var s,r,q,p=this
if(p.c<a.c)return p
p.m1(a)
s=A.Cb($.C8.bz(),0,$.jC.bz(),$.jC.bz())
r=A.bJ($.jC.bz(),s)
q=new A.aI(!1,s,r)
if($.Ca.bz()>0)q=q.dH(0,$.Ca.bz())
return p.a&&q.c>0?q.bG(0):q},
m1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Ej&&a.c===$.El&&c.b===$.Ei&&a.b===$.Ek)return
s=a.b
r=a.c
q=16-B.c.gn5(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.Eh(s,r,q,p)
n=new Uint16Array(b+5)
m=A.Eh(c.b,b,q,n)}else{n=A.Cb(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.Cc(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.xR(n,m,j,i)>=0){g&2&&A.J(n)
n[m]=1
A.ny(n,h,j,i,n)}else{g&2&&A.J(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.ny(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Jl(l,n,e);--k
A.En(d,f,0,n,k,o)
if(n[e]<d){i=A.Cc(f,o,k,j)
A.ny(n,h,j,i,n)
while(--d,n[e]<d)A.ny(n,h,j,i,n)}--e}$.Ei=c.b
$.Ej=b
$.Ek=s
$.El=r
$.C8.b=n
$.C9.b=h
$.jC.b=o
$.Ca.b=q},
gJ(a){var s,r,q,p=new A.xS(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.xT().$1(s)},
S(a,b){if(b==null)return!1
return b instanceof A.aI&&this.a1(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bG(0):n
while(r.c>1){q=$.CT()
if(q.c===0)A.u(B.bD)
p=r.uC(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.qh(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bW(s,t.hF).ej(0)},
$iaw:1}
A.xS.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:86}
A.xT.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:104}
A.nN.prototype={
n3(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
ng(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.zO.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.D(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a7(b)}},
$S:66}
A.qT.prototype={
$0(){var s=this
return A.u(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:38}
A.aM.prototype={
jo(a){var s=1000,r=B.c.am(a,s),q=B.c.N(a-r,s),p=this.b+r,o=B.c.am(p,s),n=this.c
return new A.aM(A.lf(this.a+B.c.N(p-o,s)+q,o,n),o,n)},
S(a,b){if(b==null)return!1
return b instanceof A.aM&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.c7(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kO(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a1(a,b){var s=B.c.a1(this.a,b.a)
if(s!==0)return s
return B.c.a1(this.b,b.b)},
yM(){var s=this
if(s.c)return s
return new A.aM(s.a,s.b,!0)},
l(a){var s=this,r=A.Hx(A.BS(s)),q=A.le(A.BQ(s)),p=A.le(A.uV(s)),o=A.le(A.BO(s)),n=A.le(A.BP(s)),m=A.le(A.BR(s)),l=A.Dh(A.DO(s)),k=s.b,j=k===0?"":A.Dh(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaw:1}
A.aD.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a===b.a},
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
return s+m+":"+q+r+":"+o+p+"."+B.a.iQ(B.c.l(n%1e6),6,"0")},
$iaw:1}
A.yy.prototype={
l(a){return this.a5()}}
A.ae.prototype={
gcn(){return A.Ir(this)}}
A.kH.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.im(s)
return"Assertion failed"}}
A.de.prototype={}
A.bA.prototype={
gjB(){return"Invalid argument"+(!this.a?"(s)":"")},
gjA(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gjB()+q+o
if(!s.a)return n
return n+s.gjA()+": "+A.im(s.gkN())},
gkN(){return this.b}}
A.d9.prototype={
gkN(){return this.b},
gjB(){return"RangeError"},
gjA(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.iw.prototype={
gkN(){return this.b},
gjB(){return"RangeError"},
gjA(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id9:1,
gm(a){return this.f}}
A.cV.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.n_.prototype={
l(a){return"UnimplementedError: "+this.a},
$icV:1}
A.bj.prototype={
l(a){return"Bad state: "+this.a}}
A.l3.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.im(s)+"."}}
A.m7.prototype={
l(a){return"Out of Memory"},
gcn(){return null},
$iae:1}
A.jk.prototype={
l(a){return"Stack Overflow"},
gcn(){return null},
$iae:1}
A.nM.prototype={
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
k=""}return g+l+B.a.A(e,i,j)+k+"\n"+B.a.bh(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g},
$iH:1,
gkT(){return this.a},
gfW(){return this.b},
gav(){return this.c}}
A.lB.prototype={
gcn(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iae:1,
$icV:1,
$iH:1}
A.o.prototype={
ic(a,b){return A.fk(this,A.n(this).i("o.E"),b)},
cg(a,b,c){return A.dJ(this,b,A.n(this).i("o.E"),c)},
dC(a,b){return new A.al(this,b,A.n(this).i("al<o.E>"))},
lf(a,b){return new A.bI(this,b.i("bI<0>"))},
G(a,b){var s
for(s=this.gt(this);s.k();)if(J.v(s.gn(),b))return!0
return!1},
x6(a,b,c){var s,r
for(s=this.gt(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
x7(a,b,c){return this.x6(0,b,c,t.z)},
cJ(a,b){var s
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
bR(a,b){var s
for(s=this.gt(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cR(a,b){var s=A.n(this).i("o.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
dz(a){return this.cR(0,!0)},
fK(a){return A.dH(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gt(this).k()},
gW(a){return!this.gF(this)},
cQ(a,b){return A.E_(this,b,A.n(this).i("o.E"))},
bj(a,b){return A.DY(this,b,A.n(this).i("o.E"))},
gD(a){var s=this.gt(this)
if(!s.k())throw A.b(A.aE())
return s.gn()},
ga_(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aE())
do s=r.gn()
while(r.k())
return s},
gar(a){var s,r=this.gt(this)
if(!r.k())throw A.b(A.aE())
s=r.gn()
if(r.k())throw A.b(A.iz())
return s},
fg(a,b,c){var s,r
for(s=this.gt(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a8(a,b){var s,r
A.bb(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lz(b,b-r,this,null,"index"))},
l(a){return A.HV(this,"(",")")}}
A.Q.prototype={
l(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.W.prototype={
gJ(a){return A.j.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
S(a,b){return this===b},
gJ(a){return A.eF(this)},
l(a){return"Instance of '"+A.mf(this)+"'"},
gan(a){return A.dr(this)},
toString(){return this.l(this)}}
A.oh.prototype={
l(a){return""},
$iaG:1}
A.jl.prototype={
gwH(){var s=this.gni()
if($.kv()===1e6)return s
return s*1000},
gnh(){var s=this.gni()
if($.kv()===1000)return s
return B.c.N(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mg.$0()-r)
s.b=null}},
gni(){var s=this.b
if(s==null)s=$.mg.$0()
return s-this.a}}
A.jc.prototype={
gt(a){return new A.mv(this.a)},
ga_(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.x("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.EZ(r,s)}return s}}
A.mv.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.EZ(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a2.prototype={
gm(a){return this.a.length},
j5(a){var s=A.q(a)
this.a+=s},
aq(a){var s=A.bs(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.wH.prototype={
$2(a,b){throw A.b(A.a9("Illegal IPv6 address, "+a,this.a,b))},
$S:147}
A.kb.prototype={
gmO(){var s,r,q,p,o=this,n=o.w
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
gya(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ag(s,1)
r=s.length===0?B.p:A.cJ(new A.Y(A.l(s.split("/"),t.s),A.LX(),t.iZ),t.N)
q.x!==$&&A.Bf()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmO())
r.y!==$&&A.Bf()
r.y=s
q=s}return q},
gle(){return this.b},
gdl(){var s=this.c
if(s==null)return""
if(B.a.T(s,"[")&&!B.a.af(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfu(){var s=this.d
return s==null?A.EF(this.a):s},
gfC(){var s=this.f
return s==null?"":s},
giu(){var s=this.r
return s==null?"":s},
xG(a){var s=this.a
if(a.length!==s.length)return!1
return A.Kk(a,s,0)>=0},
fG(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.Cl(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.zK(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.T(n,"/"))n="/"+n
l=n
if(a!=null)k=A.zL(null,0,0,a)
else k=j.f
return A.kc(b,q,o,p,l,k,j.r)},
l5(a){return this.fG(a,null)},
nN(a){return this.fG(null,a)},
mk(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.af(b,"../",r);){r+=3;++s}q=B.a.dn(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.iI(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.du(a,q+1,null,B.a.ag(b,r-3*s))},
bu(a){return this.fH(A.n5(a))},
fH(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb1().length!==0)return a
else{s=h.a
if(a.gkI()){r=a.nN(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gnq())m=a.giE()?a.gfC():h.f
else{l=A.K5(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gkH()?k+A.f5(a.gbs()):k+A.f5(h.mk(B.a.ag(n,k.length),a.gbs()))}else if(a.gkH())n=A.f5(a.gbs())
else if(n.length===0)if(p==null)n=s.length===0?a.gbs():A.f5(a.gbs())
else n=A.f5("/"+a.gbs())
else{j=h.mk(n,a.gbs())
r=s.length===0
if(!r||p!=null||B.a.T(n,"/"))n=A.f5(j)
else n=A.Cn(j,!r||p!=null)}m=a.giE()?a.gfC():null}}}i=a.gkJ()?a.giu():null
return A.kc(s,q,p,o,n,m,i)},
gkI(){return this.c!=null},
giE(){return this.f!=null},
gkJ(){return this.r!=null},
gnq(){return this.e.length===0},
gkH(){return B.a.T(this.e,"/")},
la(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Z("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Z(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Z(u.A))
if(r.c!=null&&r.gdl()!=="")A.u(A.Z(u.Q))
s=r.gya()
A.JZ(s,!1)
q=A.w5(B.a.T(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmO()},
S(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb1())if(p.c!=null===b.gkI())if(p.b===b.gle())if(p.gdl()===b.gdl())if(p.gfu()===b.gfu())if(p.e===b.gbs()){r=p.f
q=r==null
if(!q===b.giE()){if(q)r=""
if(r===b.gfC()){r=p.r
q=r==null
if(!q===b.gkJ()){s=q?"":r
s=s===b.giu()}}}}return s},
$in3:1,
gb1(){return this.a},
gbs(){return this.e}}
A.zN.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.hK(1,a,B.l,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.hK(1,b,B.l,!0)
s.a+=r}},
$S:159}
A.zM.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.D(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:66}
A.wG.prototype={
gnT(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cc(m,"?",s)
q=m.length
if(r>=0){p=A.kd(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.nH("data","",n,n,A.kd(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.ce.prototype={
gkI(){return this.c>0},
gkK(){return this.c>0&&this.d+1<this.e},
giE(){return this.f<this.r},
gkJ(){return this.r<this.a.length},
gkH(){return B.a.af(this.a,"/",this.e)},
gnq(){return this.e===this.f},
gb1(){var s=this.w
return s==null?this.w=this.q_():s},
q_(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.T(r.a,"http"))return"http"
if(q===5&&B.a.T(r.a,"https"))return"https"
if(s&&B.a.T(r.a,"file"))return"file"
if(q===7&&B.a.T(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gle(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdl(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfu(){var s,r=this
if(r.gkK())return A.aH(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.T(r.a,"http"))return 80
if(s===5&&B.a.T(r.a,"https"))return 443
return 0},
gbs(){return B.a.A(this.a,this.e,this.f)},
gfC(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
giu(){var s=this.r,r=this.a
return s<r.length?B.a.ag(r,s+1):""},
me(a){var s=this.d+1
return s+a.length===this.e&&B.a.af(this.a,a,s)},
yB(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.ce(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.Cl(b,0,b.length)
s=!(h.b===b.length&&B.a.T(h.a,b))}else{b=h.gb1()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gkK()?h.gfu():g
if(s)o=A.zK(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.T(l,"/"))l="/"+l
if(a!=null)j=A.zL(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ag(q,m+1):g
return A.kc(b,p,n,o,l,j,i)},
l5(a){return this.fG(a,null)},
nN(a){return this.fG(null,a)},
bu(a){return this.fH(A.n5(a))},
fH(a){if(a instanceof A.ce)return this.v1(this,a)
return this.mQ().fH(a)},
v1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.T(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.T(a.a,"http"))p=!b.me("80")
else p=!(r===5&&B.a.T(a.a,"https"))||!b.me("443")
if(p){o=r+1
return new A.ce(B.a.A(a.a,0,o)+B.a.ag(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mQ().fH(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.ce(B.a.A(a.a,0,r)+B.a.ag(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.ce(B.a.A(a.a,0,r)+B.a.ag(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.yB()}s=b.a
if(B.a.af(s,"/",n)){m=a.e
l=A.Ex(this)
k=l>0?l:m
o=k-n
return new A.ce(B.a.A(a.a,0,k)+B.a.ag(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.af(s,"../",n))n+=3
o=j-n+1
return new A.ce(B.a.A(a.a,0,j)+"/"+B.a.ag(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Ex(this)
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
la(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.T(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Z("Cannot extract a file path from a "+r.gb1()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Z(u.z))
throw A.b(A.Z(u.A))}if(r.c<r.d)A.u(A.Z(u.Q))
q=B.a.A(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
S(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mQ(){var s=this,r=null,q=s.gb1(),p=s.gle(),o=s.c>0?s.gdl():r,n=s.gkK()?s.gfu():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfC():r
return A.kc(q,p,o,n,k,l,j<m.length?s.giu():r)},
l(a){return this.a},
$in3:1}
A.nH.prototype={}
A.ln.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.q(this.b)}}
A.m4.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iH:1}
A.ro.prototype={
$2(a,b){this.a.bE(new A.rm(a),new A.rn(b),t.X)},
$S:173}
A.rm.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:175}
A.rn.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.LL(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.u("Attempting to box non-Dart object.")
s={}
s[$.GK()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:11}
A.AZ.prototype={
$1(a){var s,r,q,p
if(A.Fc(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.D(a.gL());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.E(p,J.aL(a,this,t.z))
return p}else return a},
$S:16}
A.B5.prototype={
$1(a){return this.a.aD(a)},
$S:25}
A.B6.prototype={
$1(a){if(a==null)return this.a.aJ(new A.m4(a===undefined))
return this.a.aJ(a)},
$S:25}
A.AA.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Fb(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aM(A.lf(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.O("structured clone of RegExp",null))
if(a instanceof Promise)return A.a6(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.w(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aB(o),q=s.gt(o);q.k();)n.push(A.oL(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.L(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:16}
A.z4.prototype={
cN(a){if(a<=0||a>4294967296)throw A.b(A.b0(u.E+a))
return Math.random()*a>>>0},
nC(){return Math.random()}}
A.z5.prototype={
pn(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Z("No source of cryptographically secure random numbers available."))},
cN(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b0(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.J(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.am(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bN(B.aB.ga9(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.ll.prototype={}
A.a3.prototype={
h(a,b){var s,r=this
if(!r.jU(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jU(b))return
s.c.j(0,s.a.$1(b),new A.Q(b,c,s.$ti.i("Q<a3.K,a3.V>")))},
E(a,b){b.a3(0,new A.pi(this))},
c8(a,b,c){return this.c.c8(0,b,c)},
I(a){var s=this
if(!s.jU(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a3.K").a(a)))},
gaj(){var s=this.c,r=A.n(s).i("aO<1,2>")
return A.dJ(new A.aO(s,r),new A.pj(this),r.i("o.E"),this.$ti.i("Q<a3.K,a3.V>"))},
a3(a,b){this.c.a3(0,new A.pk(this,b))},
gF(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gL(){var s=this.c,r=A.n(s).i("ar<2>")
return A.dJ(new A.ar(s,r),new A.pl(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aL(a,b,c,d){return this.c.aL(0,new A.pm(this,b,c,d),c,d)},
gaZ(){var s=this.c,r=A.n(s).i("ar<2>")
return A.dJ(new A.ar(s,r),new A.pn(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.tR(this)},
jU(a){return this.$ti.i("a3.K").b(a)},
$iF:1}
A.pi.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pj.prototype={
$1(a){var s=a.b
return new A.Q(s.a,s.b,this.a.$ti.i("Q<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("Q<a3.K,a3.V>(Q<a3.C,Q<a3.K,a3.V>>)")}}
A.pk.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,Q<a3.K,a3.V>)")}}
A.pl.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(Q<a3.K,a3.V>)")}}
A.pm.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.V(this.c).V(this.d).i("Q<1,2>(a3.C,Q<a3.K,a3.V>)")}}
A.pn.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(Q<a3.K,a3.V>)")}}
A.lh.prototype={
Z(a,b){return J.v(a,b)},
ab(a){return J.a8(a)}}
A.iA.prototype={
Z(a,b){var s,r,q,p
if(a===b)return!0
s=J.D(a)
r=J.D(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.Z(s.gn(),r.gn()))return!1}},
ab(a){var s,r,q
for(s=J.D(a),r=this.a,q=0;s.k();){q=q+r.ab(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.ey.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.L(a)
r=s.gm(a)
q=J.L(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.Z(s.h(a,o),q.h(b,o)))return!1
return!0},
ab(a){var s,r,q,p
for(s=J.L(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ab(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hI.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.BB(s.gwO(),s.gxz(),s.gxH(),A.n(this).i("hI.E"),t.S)
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
A.h0.prototype={}
A.hz.prototype={
gJ(a){var s=this.a
return 3*s.a.ab(this.b)+7*s.b.ab(this.c)&2147483647},
S(a,b){var s
if(b==null)return!1
if(b instanceof A.hz){s=this.a
s=s.a.Z(this.b,b.b)&&s.b.Z(this.c,b.c)}else s=!1
return s}}
A.iK.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.BB(null,null,null,t.mB,t.S)
for(r=J.D(a.gL());r.k();){q=r.gn()
p=new A.hz(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.D(b.gL());r.k();){q=r.gn()
p=new A.hz(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ab(a){var s,r,q,p,o,n,m,l
for(s=J.D(a.gL()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ab(n)
l=a.h(0,n)
o=o+3*m+7*q.ab(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.lg.prototype={
Z(a,b){var s,r=this
if(a instanceof A.cs)return b instanceof A.cs&&new A.h0(r,t.cu).Z(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iK(r,r,t.a3).Z(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.ey(r,t.hI).Z(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iA(r,t.nZ).Z(a,b)
return J.v(a,b)},
ab(a){var s=this
if(a instanceof A.cs)return new A.h0(s,t.cu).ab(a)
if(t.f.b(a))return new A.iK(s,s,t.a3).ab(a)
if(t.j.b(a))return new A.ey(s,t.hI).ab(a)
if(t.e7.b(a))return new A.iA(s,t.nZ).ab(a)
return J.a8(a)},
xI(a){return!0}}
A.m3.prototype={
sm(a,b){A.DJ()},
u(a,b){return A.DJ()}}
A.n2.prototype={
j(a,b,c){return A.J0()}}
A.cm.prototype={
S(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cm){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.uh(this.a)},
l(a){return A.aq(this.a)}}
A.c5.prototype={
u(a,b){if(this.a!=null)throw A.b(A.x("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.x("add must be called once."))}}
A.lt.prototype={
v(a){var s=new A.c5(),r=A.cZ(s)
r.u(0,a)
r.p()
r=s.a
r.toString
return r}}
A.rt.prototype={
u(a,b){var s=this
if(s.w)throw A.b(A.x("Hash.add() called after close()."))
s.r=s.r+J.ai(b)
s.lD(b)},
lD(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.oV(B.f.ga9(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.L(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.al(i,j,n,a,o)
k.e=n
return}B.f.al(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.J(s)
s[m]=l;++m}while(m<q)
k.yS(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.u(A.Z("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.oV(B.f.ga9(q))
m=B.c.N(p,4294967296)
n.$flags&2&&A.J(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.lD(q)
s=l.a
s.u(0,new A.cm(l.pK()))
s.p()},
pK(){var s,r,q,p,o,n,m
if(B.aT===$.ku())return J.GX(B.y.ga9(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.oV(B.f.ga9(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.J(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oa.prototype={
c0(a){var s=new Uint32Array(A.b3(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hn(new A.ob(s,r,a,q,new Uint32Array(16)))}}
A.zr.prototype={
yS(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.co[q]+s[q]>>>0)>>>0)>>>0
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
A.ob.prototype={}
A.kA.prototype={
gJ(a){return A.c7(B.du,this.d,this.c,B.d,B.d,B.d,B.d)},
S(a,b){if(b==null)return!1
return b instanceof A.l9&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dr(s).l(0)+".with"+s.d*8+"bits()"
return A.dr(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.pt.prototype={}
A.iJ.prototype={
gJ(a){return B.t.ab(this.a)},
S(a,b){if(b==null)return!1
return b instanceof A.iJ&&B.t.Z(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jf.prototype={
l(a){return A.dr(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iH:1}
A.tP.prototype={
l(a){return A.dr(this).l(0)+"()"}}
A.je.prototype={
gJ(a){return(B.t.ab(this.b.a)^B.t.ab(this.c)^B.t.ab(this.a))>>>0},
S(a,b){var s
if(b==null)return!1
if(b instanceof A.je){s=B.t.Z(this.b.a,b.b.a)
s=s&&B.t.Z(this.c,b.c)&&B.t.Z(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.vL.prototype={}
A.jg.prototype={
ge8(){return this.b},
gJ(a){var s=A.eF(B.dE),r=B.t.ab(this.ge8())
return(s^r)>>>0},
S(a,b){if(b==null)return!1
return b instanceof A.jg&&B.t.Z(this.ge8(),b.ge8())},
l(a){return"SecretKeyData(...)"}}
A.mA.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Z("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Z("The bytes are unmodifiable."))}}
A.l9.prototype={
w6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge8().gm(0),f=this.d
if(g!==f)throw A.b(A.az(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Fw(c)
r=new Uint32Array(4)
A.oI(r,0,r,0,s)
r[0]=A.bx(r[0])
r[1]=A.bx(r[1])
r[2]=A.bx(r[2])
r[3]=A.bx(r[3])
q=A.Dg(r,a.c)
p=J.CX(B.f.ga9(q),0,null)
o=a.a
n=B.t.Z(B.aR.lK(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jf())
A.As(q,1)
n=o.length
m=B.c.N(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oI(l,k,p,0,s)
A.As(q,1)}j=J.bN(B.y.ga9(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.J(j)
j[k]=i^h}return j},
wL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge8().gm(0),f=this.d
if(g!==f)throw A.b(A.az(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Fw(d)
r=new Uint32Array(4)
A.oI(r,0,r,0,s)
r[0]=A.bx(r[0])
r[1]=A.bx(r[1])
r[2]=A.bx(r[2])
r[3]=A.bx(r[3])
q=A.Dg(r,c)
p=J.CX(B.f.ga9(q),0,null)
o=new Uint32Array(A.b3(p))
A.As(q,1)
n=a.length
m=(B.c.N(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oI(l,k,p,0,s)
A.As(q,1)}j=J.bN(B.y.ga9(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.J(j)
j[k]=i^h}return new A.je(j,B.aR.lK(j,b,s,r,o),c)}}
A.qx.prototype={
l(a){return"DartGcm()"},
lK(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.la(n,d,b)
A.la(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.N(s,o),!1)
q.setUint32(4,B.c.am(s,o),!1)
q.setUint32(8,B.c.N(r,o),!1)
q.setUint32(12,B.c.am(r,o),!1)
A.la(n,d,J.bN(B.aB.ga9(q),0,null))
p=new Uint32Array(4)
A.oI(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iJ(J.bN(B.y.ga9(n),0,null))}}
A.nF.prototype={}
A.nG.prototype={}
A.qi.prototype={}
A.qy.prototype={}
A.ym.prototype={
Z(a,b){var s,r,q=J.L(a),p=J.L(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ab(a){var s,r,q,p,o
for(s=J.L(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.am(q,16)
r=(r^B.c.v0(p,o)^B.c.mK(p,16-o))>>>0}return r}}
A.ms.prototype={}
A.kM.prototype={$iBq:1}
A.kN.prototype={
it(){if(this.w)throw A.b(A.x("Can't finalize a finalized Request."))
this.w=!0
return B.bx},
l(a){return this.a+" "+this.b.l(0)}}
A.kO.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:184}
A.kP.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:189}
A.pc.prototype={
pd(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.q(s)+".",null))}}}
A.kU.prototype={
b5(a){return this.oI(a)},
oI(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b5=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.Dd("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.it().yL(),$async$b5)
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
f=A.w(a9,t.K)
e=b4.gn9()
d=null
if(e!=null){d=e
J.c1(f,"content-length",d)}for(b0=b4.r,b0=new A.aO(b0,A.n(b0).i("aO<1,2>")).gt(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.c1(f,c.a,c.b)}f=A.ea(f)
f.toString
A.bf(f)
b0=l.signal
s=8
return A.a(A.a6(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b5)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.j6(a,null):null
if(a0==null&&a!=null){f=A.Dd("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.w(a9,a9)
b.headers.forEach(A.oD(new A.pf(a1)))
f=A.Ka(b4,b)
a4=b.status
a6=a1
a8=a0
A.n5(b.url)
a9=b.statusText
f=new A.mN(A.Gc(f),a4,a8,a6)
f.pd(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ad(b3)
A.Fg(a2,a3,b4)
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
A.pf.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:208}
A.A9.prototype={
$1(a){return A.hR(this.a,this.b,a)},
$S:213}
A.Ai.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ai()}},
$S:0}
A.Aj.prototype={
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
m=A.ad(k)
if(!o.a.b)A.Fg(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:2}
A.du.prototype={
yL(){var s=new A.t($.C,t.jz),r=new A.ay(s,t.iq),q=new A.nA(new A.ph(r),new Uint8Array(1024))
this.ac(q.gvy(q),!0,q.gea(),r.gvV())
return s}}
A.ph.prototype={
$1(a){return this.a.aD(new Uint8Array(A.b3(a)))},
$S:27}
A.ek.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iH:1}
A.lX.prototype={
gm(a){return this.b}}
A.u9.prototype={
gn9(){var s,r,q,p=this,o={},n=o.a=0
p.x.a3(0,new A.ua(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.r)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.mc(q)).length+q.b+2)}return o.a+2+70+4},
it(){var s=this,r=s.pG()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.lv()
return new A.du(s.bm(r))},
bm(a){return this.qx(a)},
qx(a){var $async$bm=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aO(f,A.n(f).i("aO<1,2>")).gt(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bX(A.e0(e),$async$bm,r)
case 5:k=l.b
j=$.Bk()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.CV()
s=6
q=[1]
return A.bX(A.e0(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bm,r)
case 6:s=7
q=[1]
return A.bX(A.e0(B.e.v(k)),$async$bm,r)
case 7:s=8
q=[1]
return A.bX(A.e0(B.b2),$async$bm,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bX(A.e0(e),$async$bm,r)
case 12:s=13
q=[1]
return A.bX(A.e0(B.e.v(m.mc(g))),$async$bm,r)
case 13:if(g.f)A.u(A.x("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bX(A.JA(g.e),$async$bm,r)
case 14:s=15
q=[1]
return A.bX(A.e0(B.b2),$async$bm,r)
case 15:case 10:f.length===l||(0,A.r)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bX(A.e0(d),$async$bm,r)
case 16:case 1:return A.bX(null,0,r)
case 2:return A.bX(o.at(-1),1,r)}})
var s=0,r=A.Fa($async$bm,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Fp(r)},
tn(a,b){var s,r=$.Bk()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.CV()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
mc(a){var s=a.d.l(0),r=$.Bk(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pG(){var s,r=J.Dy(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cI[$.Gm().cN(66)]
return"dart-http-boundary-"+A.dT(r,0,null)}}
A.ua.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.tn(a,b)).length+B.e.v(b).length+2)},
$S:37}
A.vC.prototype={
gn9(){return this.y.length},
gkC(){var s,r
if(this.gcr()==null||!this.gcr().c.a.I("charset"))return B.l
s=this.gcr().c.a.h(0,"charset")
s.toString
r=A.HB(s)
return r==null?A.u(A.a9('Unsupported encoding "'+s+'".',null,null)):r},
it(){this.lv()
return new A.du(A.C0(this.y,t.L))},
gcr(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.I9(s)},
scr(a){this.r.j(0,"content-type",a.l(0))},
pN(){if(!this.w)return
throw A.b(A.x("Can't modify a finalized Request."))}}
A.jo.prototype={}
A.mN.prototype={}
A.ia.prototype={}
A.fB.prototype={
l(a){var s=new A.a2(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a3(0,new A.tV(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.tT.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.w6(null,j),h=$.GW()
i.je(h)
s=$.GV()
i.fe(s)
r=i.gkR().h(0,0)
r.toString
i.fe("/")
i.fe(s)
q=i.gkR().h(0,0)
q.toString
i.je(h)
p=t.N
o=A.w(p,p)
for(;;){p=i.d=B.a.en(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gO():n
if(!m)break
p=i.d=h.en(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gO()
i.fe(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.fe("=")
n=i.d=s.en(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gO()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.M3(i)
n=i.d=h.en(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gO()
o.j(0,p,k)}i.wU()
return A.BL(r,q,o)},
$S:85}
A.tV.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.GT()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.G9(b,$.GI(),new A.tU(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:37}
A.tU.prototype={
$1(a){return"\\"+A.q(a.h(0,0))},
$S:64}
A.AM.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:64}
A.qc.prototype={
$1(a){return a.b===this.a},
$S:97}
A.qd.prototype={
$1(a){return a.b===this.a},
$S:102}
A.dw.prototype={}
A.l0.prototype={
gaB(){return"committedChange"},
q(){return A.m(["store",this.a,"ids",this.b],t.N,t.X)}}
A.nd.prototype={
gaB(){return"watchSnapshot"},
q(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.ub.prototype={}
A.iQ.prototype={}
A.iT.prototype={}
A.iR.prototype={}
A.iU.prototype={}
A.iN.prototype={}
A.iO.prototype={}
A.iM.prototype={}
A.iS.prototype={}
A.iP.prototype={}
A.Af.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.I)},
$S:12}
A.mn.prototype={
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
A.vu.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.I)},
$S:12}
A.vv.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.a4("Malformed query conditions."))
s=A.l([],t.jN)
for(r=J.D(a);r.k();)s.push(A.DR(r.gn()))
return s},
$S:110}
A.eG.prototype={
q(){var s,r,q,p,o=this,n=A.w(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)r.push(A.oO(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.oO(o.c))
return n}}
A.vq.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.I)},
$S:12}
A.vr.prototype={
$1(a){return a.b===this.a},
$S:114}
A.b_.prototype={
a5(){return"QueryConditionOp."+this.b}}
A.cM.prototype={}
A.uT.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.I)},
$S:12}
A.uS.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.a4("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.D(a);r.k();)s.push(A.BN(r.gn()))
return s},
$S:115}
A.iG.prototype={
q(){var s=A.w(t.N,t.X)
s.j(0,"kind","leaf")
s.E(0,this.a.q())
return s}}
A.j0.prototype={
q(){return A.m(["kind","not","child",this.a.q()],t.N,t.X)}}
A.i4.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].q())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.i5.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].q())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.ml.prototype={
q(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.vs.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.I)},
$S:12}
A.cC.prototype={
a5(){return"AggregateFn."+this.b}}
A.vJ.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.vK.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.I)},
$S:12}
A.mr.prototype={}
A.m6.prototype={
q(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.kV.prototype={
q(){return B.o}}
A.lu.prototype={
q(){return B.o}}
A.kZ.prototype={
q(){return B.o}}
A.ls.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mu.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lY.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.Kv(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mm.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l6.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.l5.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.q())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.li.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
s=r.c
if(s!=null)q.j(0,"limit",s)
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lx.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kB.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.q())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.lo.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mz.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.q())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dU.prototype={
a5(){return"TransactionDurability."+this.b}}
A.mU.prototype={
q(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.mV.prototype={
q(){return A.m(["session",this.a],t.N,t.X)}}
A.mX.prototype={
q(){return A.m(["session",this.a],t.N,t.X)}}
A.mZ.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.mY.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.mW.prototype={
q(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nc.prototype={
q(){return A.m(["store",this.a,"spec",this.b.q()],t.N,t.X)}}
A.nb.prototype={
q(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kD.prototype={
q(){var s=A.w(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.na.prototype={
q(){return B.o}}
A.n8.prototype={
q(){return B.o}}
A.mi.prototype={
q(){return B.o}}
A.l1.prototype={
q(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.aR.prototype={}
A.fJ.prototype={
gaB(){return"ok"},
q(){return B.o}}
A.kW.prototype={
gaB(){return"capabilities"},
q(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e],t.N,t.X)}}
A.lv.prototype={
gaB(){return"health"},
q(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.fX.prototype={
gaB(){return"row"},
q(){return A.m(["row",this.a],t.N,t.X)}}
A.fY.prototype={
gaB(){return"rows"},
q(){return A.m(["rows",this.a],t.N,t.X)}}
A.fF.prototype={
gaB(){return"mutation"},
q(){return A.m(["ids",this.a],t.N,t.X)}}
A.fR.prototype={
gaB(){return"queryRows"},
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fp.prototype={
gaB(){return"count"},
q(){return A.m(["value",this.a],t.N,t.X)}}
A.fq.prototype={
gaB(){return"distinct"},
q(){return A.m(["values",this.a],t.N,t.X)}}
A.fz.prototype={
gaB(){return"ids"},
q(){return A.m(["ids",this.a],t.N,t.X)}}
A.fh.prototype={
gaB(){return"aggregate"},
q(){return A.m(["value",this.a],t.N,t.X)}}
A.fu.prototype={
gaB(){return"explain"},
q(){return A.m(["plan",this.a],t.N,t.X)}}
A.h_.prototype={
gaB(){return"searchHits"},
q(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.my.prototype={
q(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.hb.prototype={
gaB(){return"txBegin"},
q(){return A.m(["session",this.a],t.N,t.X)}}
A.ne.prototype={
gaB(){return"watchStarted"},
q(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fO.prototype={
gaB(){return"pruneOutbox"},
q(){return A.m(["removed",this.a],t.N,t.X)}}
A.fm.prototype={
gaB(){return"compact"},
q(){return A.m(["removed",this.a],t.N,t.X)}}
A.jv.prototype={
l(a){return"WireException: "+this.a},
$iH:1}
A.Bg.prototype={
$1(a){return a.a===this.a},
$S:122}
A.Bh.prototype={
$2(a,b){return B.a.a1(a.a,b.a)},
$S:126}
A.me.prototype={
a5(){return"PlatformProfile."+this.b}}
A.mK.prototype={
q(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.vU.prototype={
$1(a){return J.c2(a.gaZ())},
$S:28}
A.vV.prototype={
$1(a){return B.a.G(a,"ENABLE_FTS5")},
$S:9}
A.ib.prototype={
a5(){return"ChangeOrigin."+this.b}}
A.dv.prototype={
a5(){return"ChangeAction."+this.b}}
A.aV.prototype={
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
B.b.aO(s)
q.j(0,"changedFields",s)
return q},
S(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aV))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.r.Z(b.e,s.e)&&B.r.Z(b.f,s.f)&&B.r.Z(b.r,s.r)},
gJ(a){var s=this
return A.c7(s.a,s.b,s.c,s.d,B.r.ab(s.e),B.r.ab(s.f),B.r.ab(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a1.prototype={}
A.pq.prototype={
wI(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)},
wJ(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.u(0,a)}}
A.pr.prototype={}
A.ps.prototype={}
A.r5.prototype={}
A.p_.prototype={
wK(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cN(256)
q=this.b.wL(new Uint8Array(A.b3(a)),b,m,this.c)
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
w5(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.O("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.x("Unsupported ciphertext version 0x"+B.a.iQ(B.c.lb(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b3(B.f.U(a,1,13)))
n-=16
r=new Uint8Array(A.b3(B.f.b6(a,n)))
q=new Uint8Array(A.b3(B.f.U(a,13,n)))
try{n=this.b.w6(new A.je(q,new A.iJ(r),s),b,this.c)
return n}catch(o){if(A.E(o) instanceof A.jf)throw A.b(A.x("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d5.prototype={
a5(){return"KindViolation."+this.b}}
A.Au.prototype={
$2(a,b){return B.a.a1(a.a,b.a)},
$S:137}
A.AL.prototype={
$1(a){return a.h(0,"detail")},
$S:28}
A.l4.prototype={
a5(){return"ConflictAlgorithm."+this.b}}
A.ik.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aU(o,o.r,o.e,A.n(o).i("aU<2>"));n.k();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.aa(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
cl(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gD(0))
if(s!=null)s.p()}q=this.b.yb(a)
r.j(0,a,q)
return q},
oH(a,b){var s=this.cl(a).lo(new A.bQ(b)),r=A.n(s).i("Y<I.E,F<k,j?>>")
r=A.N(new A.Y(s,new A.r2(),r),r.i("V.E"))
return r},
fd(a,b){this.cl(a).ed(new A.bQ(b))},
kD(a){return this.fd(a,B.m)},
aF(a,b){return this.wR(a,b)},
K(a){return this.aF(a,B.m)},
wR(a,b){var s=0,r=A.h(t.H),q=this
var $async$aF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.fd(a,b)
return A.e(null,r)}})
return A.f($async$aF,r)},
ad(a,b){return this.yn(a,b)},
b2(a){return this.ad(a,B.m)},
yn(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ad=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.oH(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ad,r)},
bX(a,b,c,d,e,f,g){return this.yk(a,b,c,d,e,f,g)},
aM(a,b,c,d){return this.bX(a,null,b,null,null,c,d)},
er(a,b,c,d,e){return this.bX(a,b,c,null,null,d,e)},
nH(a,b,c,d){return this.bX(a,b,null,null,null,c,d)},
cj(a,b,c){var s=null
return this.bX(a,s,s,s,s,b,c)},
yg(a,b,c,d){return this.bX(a,null,null,null,b,c,d)},
yh(a,b,c,d,e){return this.bX(a,b,c,d,e,null,null)},
yj(a,b,c,d,e,f){return this.bX(a,b,c,null,d,e,f)},
yi(a,b,c,d,e){return this.bX(a,null,b,null,c,d,e)},
yk(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bX=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.q(c)
if(d!=null)n+=" OFFSET "+A.q(d)
o=g==null?B.m:g
q=p.ad(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bX,r)},
cd(a,b,c,d){return this.xE(0,b,c,d)},
aE(a,b,c){return this.cd(0,b,c,null)},
xE(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cd=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dJ(new A.T(c,n),new A.r1(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.af(c.a,"?",!1,m),", ")
j=A.Di(d)
o=o.i("ar<2>")
o=A.N(new A.ar(c,o),o.i("o.E"))
p.fd("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.am(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cd,r)},
M(a,b,c,d){return this.yR(a,b,c,d)},
yR(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$M=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dJ(new A.T(b,n),new A.r3(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.Di(null)+' "'+a+'" SET '+m
o=A.N(new A.ar(b,o.i("ar<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.E(o,d)}p.fd(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$M,r)},
Y(a,b,c){return this.w7(a,b,c)},
w7(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$Y=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.E(n,c)}p.fd(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Y,r)},
vY(a,b,c){this.b.vZ(B.br,!0,!1,new A.r0(b),c)},
a2(a,b){return this.yN(a,b,b)},
yN(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.kD("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.kD("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.kD("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$iqA:1}
A.r2.prototype={
$1(a){return A.ba(a,t.N,t.X)},
$S:146}
A.r1.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.r3.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.r0.prototype={
$1(a){var s=a.gm(0)===0?null:a.gD(a)
return this.a.$1(s)},
$S:148}
A.pP.prototype={}
A.ij.prototype={
ks(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aP(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=$.CO()
if(!k.b.test(l))A.u(A.aS('Field "'+l+u.Z))
if(B.bc.G(0,l))throw A.b(A.aS('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.u(0,l))throw A.b(A.aS('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aS(e+l+'" cannot be unique.'))
if(B.b.bR(o,new A.r_(m)))throw A.b(A.aS(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.G(k,l)}else k=!1
if(k)throw A.b(A.aS(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.r)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.aj(l,l.gm(0),k.i("aj<I.E>")),k=k.i("I.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.G(0,j)&&!B.bc.G(0,j))throw A.b(A.aS('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.af.Z(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.Hy(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.rj(u.r))
if(q.b&&!A.DZ(r.a,3,34))throw A.b(A.rj("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.aj(r,r.gm(0),p.i("aj<I.E>")),p=p.i("I.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.G(0,o))throw A.b(A.aS('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gaj(),r=r.gt(r);r.k();){q=r.gn()
A.Dq(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aS('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aS('Ref field "'+m.a+'" must declare its target store.'))}return new A.pP(f.pJ(a),f.pI(a),f.pH(a),d)},
pJ(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.glr()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.Y(k,new A.qZ(),A.a0(k).i("Y<1,k>")).B(0,", ")
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
pI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("Y<I.E,k>")
j=A.N(new A.Y(l,A.AB(),k),k.i("V.E"))
if(!l.G(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.b1?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.r)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bR(s,new A.qY(h)))continue
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
pH(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.p
s=A.l([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("Y<I.E,k>")
n=A.N(new A.Y(p,A.AB(),o),o.i("V.E"))
m=new A.qX(r,a0.c)
l=new A.Y(p,new A.qU(m),o).B(0,f)
k=new A.Y(p,new A.qV(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.Y(n,new A.qW(),A.a0(n).i("Y<1,k>")).B(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.r_.prototype={
$1(a){var s=a.a
return s.G(s,this.a.a)},
$S:63}
A.qZ.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:7}
A.qY.prototype={
$1(a){var s=a.a
return s.G(s,this.a.a)},
$S:63}
A.qX.prototype={
$2(a,b){return A.FT(this.a,this.b,a,b)},
$S:168}
A.qU.prototype={
$1(a){return this.a.$2("new",a)},
$S:7}
A.qV.prototype={
$1(a){return this.a.$2("old",a)},
$S:7}
A.qW.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:7}
A.dI.prototype={
l(a){return A.dr(this).l(0)+": "+this.a},
$iH:1}
A.eO.prototype={}
A.eN.prototype={}
A.eD.prototype={}
A.fl.prototype={}
A.fM.prototype={}
A.fw.prototype={}
A.cP.prototype={}
A.fV.prototype={}
A.fZ.prototype={}
A.eH.prototype={}
A.hf.prototype={}
A.fy.prototype={}
A.h4.prototype={}
A.fE.prototype={}
A.fn.prototype={}
A.ep.prototype={}
A.fU.prototype={}
A.Ba.prototype={
$1(a){if(typeof a!="string")return a
return this.a.ep(a)},
$S:16}
A.tv.prototype={}
A.lj.prototype={
a5(){return"DurabilityClass."+this.b}}
A.mL.prototype={}
A.uQ.prototype={
bv(a){var s,r=this.a
if(!r.I(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.oC(s)
r.toString
t.G.a(r)}return r},
lp(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gD(0))
if(b==null)s=null
else{s=A.oC(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
xF(a){var s,r,q,p=a.a
if(p===0){this.a.aa(0)
return}s=this.a
if(p>=s.a){s.aa(0)
return}for(p=A.eZ(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.lK.prototype={
aU(a){return this.yx(a)},
yx(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dx
h=a.a
if(i.I(h))throw A.b(A.aS('Duplicate store name "'+h+'" in this open call.'))
p=A.BX(a)
o=q.w
if(o.e===B.aC&&p.b.length!==0)throw A.b(new A.hf('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.h_(a,p),$async$aU)
case 2:n=new A.ij(o).ks(a)
o=a.w
if(o!=null)A.Mz(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aM("lp_stores",1,"store = ?",[h]),$async$aU)
case 3:m=c
l=J.L(m)
s=l.gF(m)?4:6
break
case 4:s=7
return A.a(o.K(n.b),$async$aU)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.K(l[j]),$async$aU)
case 11:case 9:l.length===k||(0,A.r)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.K(l[j]),$async$aU)
case 15:case 13:l.length===k||(0,A.r)(l),++j
s=12
break
case 14:l=a.b
k=q.ch
s=16
return A.a(o.aE(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a7(a.q(),null),"created_at",k.$0()],t.N,t.X)),$async$aU)
case 16:s=17
return A.a(A.fD(o,0,0,"create:"+h,k,l),$async$aU)
case 17:s=5
break
case 6:l=J.S(l.gD(m),"schema_ver")
l.toString
A.am(l)
k=a.b
if(l>k)throw A.b(A.DW('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fC(q,a,l),$async$aU)
case 20:case 19:s=21
return A.a(q.bO(a),$async$aU)
case 21:s=22
return A.a(o.M("lp_stores",A.m(["definition_json",B.h.a7(a.q(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aU)
case 22:case 5:i.j(0,h,new A.mL(a,p,new A.uQ(A.w(t.N,t.b))))
s=23
return A.a(q.dX(h,p),$async$aU)
case 23:return A.e(null,r)}})
return A.f($async$aU,r)},
h_(a,b){return this.px(a,b)},
px(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$h_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aM("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$h_)
case 3:j=d
if(J.bz(j)){s=1
break}o=null
try{n=J.S(J.c2(j),"v")
o=A.IH(typeof n=="string"?B.h.aA(n,null):n)}catch(i){if(A.E(i) instanceof A.dI){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.aq(B.j.v(B.e.v(A.ah(o.q()))).a)!==A.aq(B.j.v(B.e.v(A.ah(b.q()))).a))throw A.b(A.aS('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$h_,r)},
dX(a,b){return this.u4(a,b)},
u4(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ah(b.q())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aM("lp_meta",1,"k = ?",[p]),$async$dX)
case 5:s=k.bz(d)?2:4
break
case 2:s=6
return A.a(n.aE(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dX)
case 6:s=3
break
case 4:s=7
return A.a(n.M("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dX)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dX,r)},
ia(a){return this.vL(a)},
vL(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$ia=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$ia)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
bO(a){return this.uw(a)},
uw(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bO=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.er("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a1]),$async$bO)
case 3:a2=a6
if(J.bz(a2)){s=1
break}o=null
try{n=J.S(J.c2(a2),"definition_json")
m=typeof n=="string"?B.h.aA(n,null):n
l=m
l.toString
k=t.X
o=A.pw(A.ba(t.f.a(l),t.N,k),k)}catch(a4){if(A.E(a4) instanceof A.cP){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.af.Z(i.a,h.a)&&i.b===h.b&&i.c.S(0,h.c)
g=l}}if(g){s=1
break}f=new A.jl()
$.kv()
f.az()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.K("DROP TRIGGER IF EXISTS "+('"'+A.z(a1+d,'"','""')+'"')),$async$bO)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.K("DROP TABLE IF EXISTS "+('"'+A.z(a1+"_fts",'"','""')+'"')),$async$bO)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.ij(p.w).ks(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.K(l[e]),$async$bO)
case 16:case 14:l.length===k||(0,A.r)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.z(l,'"','""')
s=17
return A.a(a0.K("INSERT INTO "+('"'+k+'"')+"("+('"'+A.z(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bO)
case 17:k=h.a
c=k.$ti.i("Y<I.E,k>")
b=new A.Y(k,A.AB(),c).B(0,", ")
a=new A.Y(k,new A.tw(a3,h),c).B(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.K("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bO)
case 18:case 12:if(f.b==null)f.b=$.mg.$0()
l=a3.b
s=19
return A.a(A.fD(a0,f.gnh(),l,"fts:"+a1,p.ch,l),$async$bO)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bO,r)},
il(a){return this.w9(a)},
w9(a){var s=0,r=A.h(t.H),q=this,p
var $async$il=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$il)
case 4:case 3:return A.e(null,r)}})
return A.f($async$il,r)},
ae(a){var s=this.dx.h(0,a)
if(s==null)throw A.b(A.x('No store "'+a+'" registered in this LocalPocket.'))
return s},
aV(a,b,c){var s
if(A.eM(this)!=null)A.u(A.x(u.L))
s=this.b
s===$&&A.A()
return s.aV(a,b,c)},
a2(a,b){return this.aV(a,B.n,b)},
nR(a,b){++this.y.e
return this.r.aF(a,B.m)},
j0(a,b){this.y.nJ()
return this.r.ad(a,b)},
de(a){return this.vG(a)},
vF(){return this.de(null)},
vG(a){var s=0,r=A.h(t.H),q=this,p
var $async$de=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.K("ANALYZE"),$async$de)
case 5:s=3
break
case 4:s=6
return A.a(p.K("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$de)
case 6:case 3:return A.e(null,r)}})
return A.f($async$de,r)},
ez(){var s=0,r=A.h(t.H),q=this
var $async$ez=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.K("PRAGMA wal_checkpoint(TRUNCATE)"),$async$ez)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ez,r)},
j3(){var s=0,r=A.h(t.H),q=this
var $async$j3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.K("PRAGMA wal_checkpoint(PASSIVE)"),$async$j3)
case 4:case 3:return A.e(null,r)}})
return A.f($async$j3,r)},
ey(a){return this.yZ(a)},
yY(){return this.ey(null)},
yZ(a){var s=0,r=A.h(t.H),q=this,p
var $async$ey=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a!=null?2:4
break
case 2:s=5
return A.a(p.K("PRAGMA incremental_vacuum("+A.q(a)+")"),$async$ey)
case 5:s=3
break
case 4:s=6
return A.a(p.K("VACUUM"),$async$ey)
case 6:case 3:return A.e(null,r)}})
return A.f($async$ey,r)},
fw(a){return this.yc(a)},
nF(){return this.fw(1e4)},
yc(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$fw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.tz(o),t.P),$async$fw)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
dw(a){return this.yJ(a)},
yJ(a){var s=0,r=A.h(t.H),q=this,p
var $async$dw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dx,p=new A.bF(p,p.r,p.e,A.n(p).i("bF<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.n8(p.d,a),$async$dw)
case 4:s=2
break
case 3:s=5
return A.a(q.nF(),$async$dw)
case 5:s=6
return A.a(q.ez(),$async$dw)
case 6:s=7
return A.a(q.vF(),$async$dw)
case 7:return A.e(null,r)}})
return A.f($async$dw,r)},
eb(a,b,c){return this.vU(a,b,c)},
n8(a,b){return this.eb(a,null,b)},
vU(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$eb=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:j={}
i=b==null?p.ch.$0():b
h=i-B.c.N(c.a,1000)
j.a=0
o=p.ae(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ad("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$eb)
case 5:l=e
if(J.bz(l)){s=4
break}if(A.eM(p)!=null)A.u(A.x(u.L))
k=p.b
k===$&&A.A()
s=6
return A.a(k.aV(new A.ty(j,p,l,a,h,o),B.n,n),$async$eb)
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
n.fr.b.aa(0)
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
A.tw.prototype={
$1(a){return A.FT(this.a.a,this.b.c,"",a)},
$S:7}
A.tz.prototype={
$1(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
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
return A.a(l.Y("lp_outbox","store = ? AND record_id = ?",[m,A.G(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ty.prototype={
$1(a){return this.o6(a)},
o6(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.D(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ax,h=h.ay
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.G(f)
a1=J
s=4
return A.a(a0.ad("SELECT b.id FROM "+('"'+A.z(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.bz(a4)){s=2
break}s=5
return A.a(a0.ad("SELECT * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.L(e)
c=d.gW(e)?A.ch(i,d.gD(e),g,h):null
s=6
return A.a(A.cB(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.Y(n,"id = ?",[f]),$async$$1)
case 7:d=A.as([f],m)
l.push(new A.a1(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("al<o.E>")
a=A.lP(b.i("o.E"))
a.E(0,new A.al(new A.T(c,d),new A.tx(),b))
a2.bc(new A.aV(n,f,B.H,B.aX,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tx.prototype={
$1(a){return a!=="id"},
$S:9}
A.nD.prototype={
yD(){var s,r,q=this,p=new A.ay(new A.t($.C,t.D),t.h)
q.e=p
s=q.a.a
s.d.aY(new A.yg(q,p),t.H)
r=s.as
s=q.gx5()
if(r.a>0)A.cS(r,s)
else A.cS(B.D,s)},
kF(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.ai()},
cK(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cK=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.e;++b2.b
b2.c+=b1}b3=new A.jl()
$.kv()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.au&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nR("PRAGMA synchronous=FULL",null),$async$cK)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.yf(m,i,h,l,g),t.P),$async$cK)
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
b8.ap(A.f7(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.u(A.x("Future already completed"))
b8.aP(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dx,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.xF(a0.b)
b6.wI(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a1=f[b7]
b6.wJ(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.E(c2)
a3=A.ad(c2)
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
b6.ap(A.f7(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.u(A.x("Future already completed"))
b6.ap(A.f7(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.nR("PRAGMA synchronous=NORMAL",null),$async$cK)
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
a4=k.gwH();++f.a
f.d+=a4
b1.tF()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.r)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.u(A.x("Future already completed"))
a4.ap(A.f7(new A.bj("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cK,r)}}
A.yg.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cK(),$async$$0)
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
$S:2}
A.yf.prototype={
$1(a){return this.ow(a)},
ow(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.C5(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.oQ(new A.yd(a,a0),null,A.m([$.kx(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.f3([B.b.gar(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.E(a1)
l=A.ad(a1)
o.e.push(new A.f3([B.b.gar(a.c),null,m,l]))
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
return A.a(A.oQ(new A.ye(a0,k),null,A.m([$.kx(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.f3([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.E(a2)
h=A.ad(a2)
e.push(new A.f3([k,null,i,h]))
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
$S:67}
A.yd.prototype={
$0(){return B.b.gar(this.a.c).a.$1(this.b)},
$S:69}
A.ye.prototype={
$0(){return this.a.a2(new A.yc(this.b),t.z)},
$S:69}
A.yc.prototype={
$1(a){return this.a.a.$1(a)},
$S:177}
A.hp.prototype={}
A.vB.prototype={}
A.wn.prototype={
aV(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.t($.C,t._)
r.c.push(new A.hp(a,new A.ay(s,t.jk)))
return s.ao(new A.wu(c),c)}return this.v2(a,b,c)},
v2(a,b,c){var s,r,q,p=this
if(p.a.as.a>0){s=p.c
if(s!=null)s.kF()}s=A.l([],t.i4)
r=new A.nD(p,b,s)
p.c=r
r.yD()
q=new A.t($.C,t._)
s.push(new A.hp(a,new A.ay(q,t.jk)))
return q.ao(new A.wq(c),c)},
yo(a,b){var s,r=this.a
if(r.as.a>0){s=this.c
if(s!=null)s.kF()}return r.d.aY(new A.wt(this,a,b),b)},
tF(){if(++this.d<64)return
this.d=0
A.cS(B.D,new A.wp(this))}}
A.wu.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.wq.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.wt.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.ws(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.ws.prototype={
$1(a){return this.ot(a,this.c)},
ot(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.C5(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.oQ(new A.wr(p.b,o,n),null,A.m([$.kx(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(qA)")}}
A.wr.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.wp.prototype={
$0(){this.a.a.a.j3().n6(new A.wo())},
$S:0}
A.wo.prototype={
$1(a){},
$S:41}
A.f4.prototype={$iH:1}
A.ok.prototype={}
A.hC.prototype={}
A.t2.prototype={
pe(a){var s=this,r=s.a.a.a$.a
r=new A.aT(r,A.n(r).i("aT<1>")).aK(new A.te(s))
s.c!==$&&A.cA()
s.c=r},
x9(a){var s,r,q,p=this
A:{if(a instanceof A.m6){s=p.hM(a.a,a.b)
break A}if(a instanceof A.kV){r=p.a.c
s=A.bD(new A.kW(r.a,r.b,r.c,r.d,r.e===B.aC),t.V)
break A}if(a instanceof A.lu){s=A.bD(new A.lv(!0,p.a.c.a),t.V)
break A}if(a instanceof A.kZ){s=p.p().ao(new A.tf(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ls){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.bB(q,new A.tg(s,p),new A.th())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mu){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.bB(q,new A.tn(s,p),new A.to())
break A}if(a instanceof A.lY){s=p.tB(a.a,a.b,a.c)
break A}if(a instanceof A.mm){s=p.tW(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.l6){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.bB(q,new A.tp(s,p),A.FE())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.l5){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.bB(q,new A.tq(s,p),A.FE())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.li){s.d=a.a
s.c=a.b
s.b=a.c
q=a.d
s.a=q
s=p.bB(q,new A.tr(s,p),A.LS())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lx){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.bB(q,new A.ts(s,p),A.LU())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kB){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
q=a.e
s.a=q
s=p.bB(q,new A.tt(s,p),A.LR())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lo){s.c=a.a
s.b=a.b
q=a.c
s.a=q
s=p.bB(q,new A.tu(s,p),A.LT())
break A}if(a instanceof A.mz){s=p.uP(a.a,a.b,a.c)
break A}if(a instanceof A.mU){s=p.pA(a.a,a.b)
break A}if(a instanceof A.mV){s=p.f3(a.a,!0)
break A}if(a instanceof A.mX){s=p.f3(a.a,!1)
break A}if(a instanceof A.mZ){s=p.hV(a.a,a.b)
break A}if(a instanceof A.mY){s=p.hT(a.a,a.b)
break A}if(a instanceof A.mW){s=p.hR(a.a,a.b)
break A}if(a instanceof A.nc){s=p.vl(a.a,a.b)
break A}if(a instanceof A.nb){s=p.kj(a.a)
break A}if(a instanceof A.kD){s=p.a.a.de(a.a).ao(new A.ti(),t.V)
break A}if(a instanceof A.na){s=p.a.a.ez().ao(new A.tj(),t.V)
break A}if(a instanceof A.n8){s=p.a.a.yY().ao(new A.tk(),t.V)
break A}if(a instanceof A.mi){s=p.a.a.nF().ao(new A.tl(),t.V)
break A}if(a instanceof A.l1){s=p.a.a.n8(a.a,A.d2(0,a.b,0)).ao(new A.tm(),t.V)
break A}throw A.b(A.fT(u.P))}return s},
hM(a,b){return this.tU(a,b)},
tU(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hM=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dx,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.pw(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:s=9
return A.a(n.aU(j),$async$hM)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.u(A.x('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.BX(j)
e=new A.a2("")
A.ci(e,g.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c5()
b=A.cZ(c)
b.u(0,d)
b.p()
b=A.aq(c.a.a)
e=new A.a2("")
A.ci(e,f.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c5()
a=A.cZ(c)
a.u(0,d)
a.p()
if(b!==A.aq(c.a.a))throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.u(A.x('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a2("")
A.ci(e,h.c.q())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c5()
b=A.cZ(c)
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
return A.f($async$hM,r)},
eI(a,b){var s,r,q,p=this.a.a,o=p.ae(a)
if(b!=null){s=this.d9(b)
r=A.Dv(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.u(A.x('Transaction session "'+b+'" has no executor.'))
return new A.d0(p,o,q.b,this.d9(b).r)}return new A.d0(p,o,null,null)},
tB(a,b,c){return this.bB(c,new A.t5(this,a,c,b),new A.t6())},
ba(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.eI(a,c),e=t.fC,d=new A.mk(f.a,f.b.a,f.c,A.l([],e),A.l([],e),A.l([],t.fi),g,!1,g,!1,!1,g,!1,!1)
for(f=b.a,e=f.length,s=0;s<f.length;f.length===e||(0,A.r)(f),++s)d=this.pv(d,f[s])
for(f=b.b,e=f.length,r=t.N,q=t.X,p=t.d,s=0;s<f.length;f.length===e||(0,A.r)(f),++s){o=f[s]
n=A.l([],p)
for(m=B.b.gt(o);m.k();){l=m.gn()
if(l.b===B.bb)n.push(A.m([l.a,l.c],r,q))}d=d.y8(n)}k=b.c
if(k!=null){f=A.B3(k)
d.kk(f)
A.Cp(f)
j=A.Ac(f,!0)
i=d.h1()
i.d.push(new A.b1(j.a,j.b))
d=i}for(f=b.d,e=f.length,s=0;s<f.length;f.length===e||(0,A.r)(f),++s,d=i){h=f[s]
q=h.a
d.cY(q)
i=d.h1()
i.f.push(new A.co(q,h.b))}f=b.r
if(f!=null)d=d.lV(A.bT(f,!0,r))
if(b.w)d=d.q4(!0)
if(b.x)d=d.q5(!0)
if(b.f)d=d.q2(!0)
else{f=b.e
if(f!=null){if(f<0)A.u(A.au("Limit must be non-negative, got "+A.q(f)+".",g))
d=d.q6(f)}}return d},
pv(a,b){var s
switch(b.b.a){case 0:return a.z3(0,b.a,b.c)
case 1:return a.zb(0,b.a,b.c)
case 2:return a.z4(0,b.a,b.c)
case 3:return a.z5(0,b.a,b.c)
case 4:return a.z9(0,b.a,b.c)
case 5:return a.za(0,b.a,b.c)
case 6:return a.z6(0,b.a,b.d)
case 7:s=b.d
if(s==null)s=B.m
if(s.length!==2)throw A.b(A.O("between requires exactly two values.",null))
return a.z0(0,b.a,new A.a5(s[0],s[1]))
case 8:return a.zc(0,b.a,A.a7(b.c))
case 9:return a.z2(0,b.a,A.a7(b.c))
case 10:return a.z1(0,b.a,A.a7(b.c))
case 11:return a.z8(0,b.a,!0)
case 12:return a.z7(0,b.a,!0)}},
tW(a,b,c){return this.bB(c,new A.t7(this,b,a,c),new A.t8())},
uP(a,b,c){return this.bB(c,new A.tb(this,a,c,b),new A.tc())},
pA(a,b){var s,r="tx"+ ++this.f,q=$.C,p=t.D,o=t.h,n=new A.t(q,p),m=new A.ok(new A.ay(new A.t(q,p),o),new A.ay(n,o),A.l([],t.mc))
this.d.j(0,r,m)
s=this.a.a
o=new A.t4(m)
if(a){if(A.eM(s)!=null)A.u(A.x(u.L))
q=s.b
q===$&&A.A()
o=q.yo(o,t.H)
q=o}else{q=b===B.bl?B.au:B.n
q=s.aV(o,q,t.H)}m.w!==$&&A.cA()
m.w=q
return n.ao(new A.t3(r),t.V)},
f3(a,b){return this.uY(a,b)},
uY(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$f3=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d9(a)
for(l=h.e,k=A.a0(l).i("bW<1>"),l=new A.bW(l,k),l=new A.aj(l,l.gm(0),k.i("aj<V.E>")),k=k.i("V.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.u(A.x("Future already completed"))
j.aP(null)}h.f=!b
h.c.ai()
p=4
l=h.w
l===$&&A.A()
s=7
return A.a(l,$async$f3)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.E(g) instanceof A.f4){if(b)throw g}else throw g
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
return A.f($async$f3,r)},
hV(a,b){return this.uM(a,b)},
uM(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d9(a)
n=$.C
m=t.D
l=t.h
k=new A.t(n,m)
j=new A.hC(b,new A.ay(new A.t(n,m),l),new A.ay(k,l))
l=o.r.a2(new A.ta(j),t.H)
j.f!==$&&A.cA()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hV)
case 3:q=B.v
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
hT(a,b){return this.uJ(a,b)},
uJ(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hT=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d9(a).e
f=B.b.ns(g,new A.t9(b))
if(f<0)throw A.b(A.x('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a0(g).i("bW<1>")
l=A.N(new A.bW(g,l),l.i("V.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bU(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.u(A.x("Future already completed"))
i.aP(null)
p=7
i=m.f
i===$&&A.A()
s=10
return A.a(i,$async$hT)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.E(e) instanceof A.f4))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:B.b.l4(g,f,g.length)
q=B.v
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hT,r)},
hR(a,b){return this.uB(a,b)},
uB(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hR=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d9(a).e
j=A.Dv(k)
if(j==null||j.a!==b)throw A.b(A.x('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.ai()
p=4
m=j.f
m===$&&A.A()
s=7
return A.a(m,$async$hR)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.E(i) instanceof A.f4)throw i
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
return A.f($async$hR,r)},
vl(a,b){var s=this,r="w"+ ++s.f,q=s.ba(a,b,null)
s.e.j(0,r,new A.jb(q,q.ge4(),B.aw).jg().aK(new A.td(s,r)))
return A.bD(new A.ne(r),t.V)},
kj(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$kj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.e.H(0,a)
if(o!=null)o.C()
q=B.v
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kj,r)},
d9(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.x('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.x('Transaction session "'+a+'" is not ready yet.'))
return s},
i1(a,b,c){return this.vo(a,b,c)},
bB(a,b,c){return this.i1(a,b,c,t.z)},
vo(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$i1=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d9(a)
o=c
s=3
return A.a(b.$0(),$async$i1)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
p(){var s=0,r=A.h(t.H),q=this,p,o
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.e,o=new A.aU(p,p.r,p.e,A.n(p).i("aU<2>"))
case 2:if(!o.k()){s=3
break}s=4
return A.a(o.d.C(),$async$p)
case 4:s=2
break
case 3:p.aa(0)
p=q.c
p===$&&A.A()
p.C()
s=5
return A.a(q.a.a.p(),$async$p)
case 5:s=6
return A.a(q.b.p(),$async$p)
case 6:return A.e(null,r)}})
return A.f($async$p,r)}}
A.te.prototype={
$1(a){var s=a.b
s=A.N(s,A.n(s).c)
this.a.b.u(0,new A.l0(a.a,s))},
$S:29}
A.tf.prototype={
$1(a){return B.v},
$S:30}
A.tg.prototype={
$0(){var s=this.a
return this.b.eI(s.c,s.a).bv(s.b)},
$S:73}
A.th.prototype={
$1(a){return new A.fX(a)},
$S:190}
A.tn.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.eI(o.c,o.a).bv(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.r)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:192}
A.to.prototype={
$1(a){return new A.fY(a)},
$S:193}
A.tp.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).ig()},
$S:57}
A.tq.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).ii(s.c)},
$S:57}
A.tr.prototype={
$0(){var s=this.a
return this.b.ba(s.d,new A.mn(B.cy,B.cz,null,B.cA,s.b,!1,null,!1,!1,null,!1),s.a).io(s.c)},
$S:209}
A.ts.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).iF()},
$S:52}
A.tt.prototype={
$0(){var s=this,r=s.a
switch(r.d.a){case 0:r=s.b.ba(r.e,r.b,r.a).cX("SUM",r.c)
break
case 1:r=s.b.ba(r.e,r.b,r.a).cX("AVG",r.c)
break
case 2:r=s.b.ba(r.e,r.b,r.a).cX("MIN",r.c)
break
case 3:r=s.b.ba(r.e,r.b,r.a).cX("MAX",r.c)
break
default:r=null}return r},
$S:217}
A.tu.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).iq()},
$S:238}
A.ti.prototype={
$1(a){return B.v},
$S:30}
A.tj.prototype={
$1(a){return B.v},
$S:30}
A.tk.prototype={
$1(a){return B.v},
$S:30}
A.tl.prototype={
$1(a){return new A.fO(a)},
$S:75}
A.tm.prototype={
$1(a){return new A.fm(a)},
$S:76}
A.t5.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.eI(p.b,a1)
a0.a.a.c===$&&A.A()
o=p.d
n=o instanceof A.iQ
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.fB(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.hY(B.Z,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.p
q=a0
s=1
break
case 4:n=o instanceof A.iT
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.lc(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.hY(B.a_,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.G(a0)],t.s)}else a0=B.p
q=a0
s=1
break
case 11:k=o instanceof A.iR
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.nG(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.mt(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 18:k=o instanceof A.iU
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nS(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.by(i,B.a_),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iN
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.kX(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cu(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.iO
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
return A.a(a2.eT(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.N(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iM
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.ko(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.hX(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.iS
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.l7(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.hX(B.E,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.iP
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.iU(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.d7(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.fT(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:52}
A.t6.prototype={
$1(a){return new A.fF(a)},
$S:77}
A.t7.prototype={
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
return A.a(o.ba(n,l,m).q7(!0,k).cb(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.ba(n,l,m).q3(k).cb(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.ba(p.c,l,p.d).cb()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:78}
A.t8.prototype={
$1(a){return new A.fR(a.a,a.d,a.e,a.b,a.c)},
$S:79}
A.tb.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.eI(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.vI(m,l,o.c,n.a)
if(l.w==null)A.u(A.rj('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.u(A.rj(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.u(A.au("Limit must be non-negative, got "+A.q(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cb()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:80}
A.tc.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.D(a);s.k();){r=s.gn()
q.push(new A.my(r.a,r.b))}return new A.h_(q)},
$S:74}
A.t4.prototype={
o4(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.ai()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aW)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.o4(a)},
$S:6}
A.t3.prototype={
$1(a){return new A.hb(this.a)},
$S:83}
A.ta.prototype={
$1(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.ai()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aW)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.t9.prototype={
$1(a){return a.a===this.a},
$S:84}
A.td.prototype={
$1(a){this.a.b.u(0,new A.nd(this.b,a))},
$S:46}
A.nV.prototype={}
A.u6.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:45}
A.u7.prototype={
$2(a,b){return B.c.a1(a.a,b.a)},
$S:87}
A.u3.prototype={
$1(a){return a.h(0,"name")},
$S:28}
A.u5.prototype={
$1(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.D(q.a),k=q.b,j=q.c,i=j.ax,j=j.ay,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.ch(k,p,i,j)
n=o
A.Ie(k,n)
g=J.S(o,"id")
g.toString
A.G(g)
m=A.dp(k,J.v(J.S(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aE(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:67}
A.mc.prototype={
ym(a){if(a>this.w)this.w=a},
nJ(){return this.f++}}
A.dP.prototype={}
A.aN.prototype={}
A.cL.prototype={}
A.ee.prototype={}
A.dt.prototype={}
A.b1.prototype={}
A.co.prototype={}
A.yo.prototype={}
A.mk.prototype={
cz(a,b){var s=this.ge4(),r=this.c
if(r==null)return s.j0(a,b)
s.y.nJ()
return r.ad(a,b)},
c3(a,b,c,d,e,f,g,a0,a1){var s,r,q,p,o,n,m,l,k,j=this,i=t.fA,h=A.bT(j.d,!0,i)
i=A.bT(j.e,!0,i)
s=g==null?A.bT(j.f,!0,t.k5):g
r=f==null?j.r:f
q=a==null?j.w:a
if(a0==null){p=j.x
p=p==null?null:A.bT(p,!0,t.N)}else p=a0
o=d==null?j.y:d
n=e==null?j.z:e
m=c==null?j.Q:c
l=b==null?j.as:b
k=a1==null?j.at:a1
return new A.mk(j.a,j.b,j.c,h,i,s,r,q,p,o,n,m,l,k)},
h1(){var s=null
return this.c3(s,s,s,s,s,s,s,s,s)},
lV(a){var s=null
return this.c3(s,s,s,s,s,s,s,a,s)},
q4(a){var s=null
return this.c3(s,s,s,a,s,s,s,s,s)},
q5(a){var s=null
return this.c3(s,s,s,s,a,s,s,s,s)},
q2(a){var s=null
return this.c3(a,s,s,s,s,s,s,s,s)},
q6(a){var s=null
return this.c3(s,s,s,s,s,a,s,s,s)},
q8(a,b,c){var s=null
return this.c3(s,s,s,s,s,s,a,b,c)},
q7(a,b){var s=null
return this.c3(s,a,b,s,s,s,s,s,s)},
q3(a){var s=null
return this.c3(s,s,a,s,s,s,s,s,s)},
cY(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aS('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.au('Unknown field "'+a+'" for query.',a))},
bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var s,r,q,p=" LIKE ? ESCAPE '\\'"
this.cY(b)
s='"'+A.z(b,'"','""')+'"'
r=A.l([],t.fC)
if(f!=null)r.push(new A.b1(s+" = ?",[f]))
if(n!=null)r.push(new A.b1(s+" <> ?",[n]))
if(g!=null)r.push(new A.b1(s+" > ?",[g]))
if(h!=null)r.push(new A.b1(s+" >= ?",[h]))
if(l!=null)r.push(new A.b1(s+" < ?",[l]))
if(m!=null)r.push(new A.b1(s+" <= ?",[m]))
if(i!=null)r.push(new A.b1(s+" IN ("+B.b.B(A.af(i.length,"?",!1,t.N),", ")+")",i))
if(c!=null)r.push(new A.b1(s+" >= ? AND "+s+" <= ?",[c.a,c.b]))
if(o!=null)r.push(new A.b1(s+p,[A.kn(o)+"%"]))
if(e!=null)r.push(new A.b1(s+p,["%"+A.kn(e)]))
if(d!=null)r.push(new A.b1(s+p,["%"+A.kn(d)+"%"]))
if(k===!0)r.push(new A.b1(s+" IS NULL",B.m))
if(j===!0)r.push(new A.b1(s+" IS NOT NULL",B.m))
q=this.h1()
B.b.E(q.d,r)
return q},
z3(a,b,c){var s=null
return this.bf(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
zb(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
z4(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
z5(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
z9(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
za(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
z6(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
z0(a,b,c){var s=null
return this.bf(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
zc(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
z2(a,b,c){var s=null
return this.bf(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
z1(a,b,c){var s=null
return this.bf(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
z8(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
z7(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
y8(a){var s,r,q,p,o,n=t.s,m=A.l([],n),l=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.l([],n)
q.a3(0,new A.vp(this,p,l))
if(p.length===0)continue
m.push("("+B.b.B(p," AND ")+")")}if(m.length===0)return this
o=this.h1()
o.e.push(new A.b1("("+B.b.B(m," OR ")+")",l))
return o},
kk(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.aN
r=s?a.a:l
if(s){this.cY(r)
break A}s=a instanceof A.cL
q=s?a.a:l
if(s){this.kk(q)
break A}p=a instanceof A.ee
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.dt
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.r)(n),++m)this.kk(n[m])
break A}},
gcs(){var s,r=A.N(this.f,t.k5)
if(!this.at)s=r.length===0||B.b.ga_(r).a!=="id"
else s=!1
if(s)r.push(B.cW)
return r},
glS(){var s,r,q,p,o
if(this.as){s=A.l([],t.fi)
for(r=this.gcs(),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
s.push(new A.co(o.a,!o.b))}}else s=this.gcs()
return s},
gmL(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gcs(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
ka(){if(this.w)return null
var s=this.r
if(s==null)throw A.b(A.DG('Query on "'+this.gaT()+'" requires .limit(n) or .all().'))
return s},
gaT(){return this.b.a},
ge4(){return this.a},
eJ(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
e=f.y
if(!e)b.push("archived = 0")
s=f.z
if(!s)b.push("hidden = 0")
if(b.length!==0)d.push(B.b.B(b," AND "))
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.E(c,o.b)}for(r=f.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.E(c,o.b)}r=f.Q
if(r!=null){n=f.qb(r)
m=f.mg(f.glS(),n.a)
d.push(m.a)
B.b.E(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.z(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.z(a,'"','""')+'"')+") AS v"}else r=f.guR()
k=r}j=f.glS()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.Y(j,new A.vk(),A.a0(j).i("Y<1,k>")).B(0,", ")
h=A.Iy(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.q(a0)+"|af:"+A.q(a)+"|df:null",new A.vl(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.ka():a3
g=e}return new A.a5(h+(g==null?"":" LIMIT "+A.q(g)),c)},
jt(a){return this.eJ(null,null,!1,!1,a)},
pU(a,b){return this.eJ(a,b,!1,!1,null)},
pS(){return this.eJ(null,null,!1,!1,null)},
pV(a,b,c){return this.eJ(a,null,b,c,null)},
pT(a){return this.eJ(null,null,!1,a,null)},
guR(){var s,r,q,p,o=this.x
if(o==null)return"*"
if(!this.lG())return"*"
o=A.N(o,t.N)
for(s=this.gcs(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(!B.b.G(o,p))o.push(p)}return new A.Y(o,A.AB(),A.a0(o).i("Y<1,k>")).B(0,", ")},
qb(a){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null
try{s=t.G.a(B.h.aA(B.l.f8(B.ar.v(a)),null))
i=J.S(s,"store")
h=J.S(s,"schemaVer")
g=J.S(s,"shape")
q=t.lH
p=q.a(J.S(s,"sort"))
if(p==null)p=B.aj
f=A.bT(p,!0,t.N)
r=k.as?J.S(s,"pv"):J.S(s,"values")
q=q.a(r)
if(q==null)q=B.aj
e=A.bT(q,!0,t.X)}catch(o){q=A.C_(j)
throw A.b(q)}n=k.gmL()
q=k.b
if(!J.v(i,q.a)||!J.v(h,q.b)||!J.v(g,k.gmJ())||!B.af.Z(f,n)||J.ai(e)!==n.length)throw A.b(A.C_("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=e,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bv(l)&&!A.an(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.C_(j))}return new A.yo(e)},
gmJ(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a7(A.m(["a",n.y,"h",n.z,"w",m,"p",n.x],t.N,t.X),null)},
mg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cJ(a,new A.vm(a)),c=B.b.cJ(b,new A.vn())
if(a.length>=2&&d&&!B.b.gD(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
s.push('"'+A.z(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gD(a).b?"<":">"
return new A.a5("("+o+") "+n+" ("+B.b.B(A.af(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
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
B.b.E(l,i)}}if(m.length===0)return B.db
return new A.a5("("+B.b.B(m," OR ")+")",l)},
mh(a,b){var s,r,q,p=this,o=p.gcs(),n=p.b,m=p.gmL(),l=p.gmJ(),k=[]
for(s=o.length,r=0;q=o.length,r<q;o.length===s||(0,A.r)(o),++r)k.push(a.h(0,o[r].a))
s=[]
for(r=0;r<o.length;o.length===q||(0,A.r)(o),++r)s.push(b.h(0,o[r].a))
n=B.e.v(B.h.a7(A.m(["store",n.a,"schemaVer",n.b,"sort",m,"shape",l,"values",k,"pv",s],t.N,t.K),null))
return B.bu.gfc().v(n)},
ee(a){return this.wX(a)},
cb(){return this.ee(null)},
wX(a8){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ee=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a7=a8==null?p.ka():a8
if(a7===0){q=B.cX
s=1
break}o=a7==null
n=p.jt(o?null:a7+1)
s=3
return A.a(p.cz(n.a,n.b),$async$ee)
case 3:m=b0
l=!o&&J.ai(m)>a7
k=o?m:J.oZ(m,a7).dz(0)
o=p.x
j=o!=null
i=j&&p.lG()
h=p.b
if(i){i=A.N(o,t.N)
B.b.E(i,p.ue())
g=A.CC(h,k,p.ge4().ax,i,p.ge4().ay)}else g=A.CB(h,k,p.ge4().ax,p.ge4().ay)
i=p.as
if(i&&g.length!==0){h=A.a0(g).i("bW<1>")
f=A.N(new A.bW(g,h),h.i("V.E"))
B.b.aa(g)
B.b.E(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hN(g),$async$ee)
case 7:e=b0
d=l
l=e
s=5
break
case 6:d=p.Q!=null&&g.length!==0
case 5:c=A.l([],t.d)
for(i=g.length,h=t.N,b=t.X,a=0;a0=g.length,a<a0;g.length===i||(0,A.r)(g),++a){a1=g[a]
if(j){a0=A.w(h,b)
for(a2=o.length,a3=0;a3<o.length;o.length===a2||(0,A.r)(o),++a3){a4=o[a3]
if(a1.I(a4))a0.j(0,a4,a1.h(0,a4))}c.push(a0)}else c.push(a1)}if(a0!==0){a5=l?p.mh(B.b.ga_(g),B.b.gD(g)):null
a6=d?p.mh(B.b.ga_(g),B.b.gD(g)):null}else{a5=null
a6=null}q=new A.cq(c,a5,a6,l,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ee,r)},
hN(a){return this.u7(a)},
u7(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga_(a)
e=p.gcs()
n=[]
for(m=p.gcs(),l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k)n.push(o.h(0,m[k].a))
j=p.mg(e,n)
e=t.s
i=A.l([],e)
h=[]
g=A.l([],e)
if(!p.y)g.push("archived = 0")
if(!p.z)g.push("hidden = 0")
if(g.length!==0)i.push(B.b.B(g," AND "))
for(e=p.d,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.E(h,f.b)}for(e=p.e,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.E(h,f.b)}i.push(j.a)
B.b.E(h,j.b)
d=J
s=3
return A.a(p.cz("SELECT 1 FROM "+('"'+A.z(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hN)
case 3:q=d.ed(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
lG(){var s,r,q,p,o
for(s=this.x,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.ff(o)==null)return!1}return!0},
ue(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gcs(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
ig(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$ig=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pT(!0)
m=A
s=3
return A.a(p.cz(o.a,o.b),$async$ig)
case 3:n=m.e9(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ig,r)},
ii(a){return this.vW(a)},
vW(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$ii=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cY(a)
o=p.pV(a,!0,!0)
m=A
s=3
return A.a(p.cz(o.a,o.b),$async$ii)
case 3:n=m.e9(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ii,r)},
io(a){return this.wC(a)},
wC(a){var s=0,r=A.h(t.W),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$io=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cY(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.f,l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.q8(n,o,!0)
if(i.w)h=null
else{o=i.r
h=o==null?1000:o}g=i.jt(h)
o=[]
f=J
s=3
return A.a(i.cz(B.a.l6(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$io)
case 3:n=f.D(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$io,r)},
tu(a){var s,r,q=this.b.ff(a)
if(q==null)return!1
s=q.b
A:{r=B.R===s||B.S===s||B.B===s||B.T===s
break A}return r},
cX(a,b){return this.pu(a,b)},
pu(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cY(b)
if(!p.tu(b))throw A.b(A.au('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pU(b,a)
s=3
return A.a(p.cz(o.a,o.b),$async$cX)
case 3:n=d
m=J.L(n)
q=A.EX(m.gF(n)?null:J.S(m.gD(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cX,r)},
iF(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$iF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lV(A.l(["id"],m))
k=l.pS()
s=3
return A.a(l.cz(k.a,k.b),$async$iF)
case 3:j=b
m=A.l([],m)
for(o=J.D(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.G(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iF,r)},
iq(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$iq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.jt(p.ka())
n=J
s=3
return A.a(p.cz("EXPLAIN QUERY PLAN "+o.a,o.b),$async$iq)
case 3:q=n.aL(b,new A.vo(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iq,r)}}
A.vp.prototype={
$2(a,b){this.a.cY(a)
this.b.push('"'+A.z(a,'"','""')+'" = ?')
this.c.push(b)},
$S:88}
A.vk.prototype={
$1(a){var s=A.z(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:89}
A.vl.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.z(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:90}
A.vm.prototype={
$1(a){return a.b===B.b.gD(this.a).b},
$S:91}
A.vn.prototype={
$1(a){return a!=null},
$S:15}
A.vo.prototype={
$1(a){return a.h(0,"detail")},
$S:28}
A.cO.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.q(this.b)+")"},
S(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cO&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gJ(a){return A.c7(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.vI.prototype={
uQ(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.DG('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cb(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$cb=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a4=n.d
if(B.a.ck(a4).length===0){q=B.cx
s=1
break}m=n.a
if(m==null)throw A.b(A.x("A compile-only SearchBuilder cannot execute fetch()."))
l=null
k=null
e=n.b
d=e.w
c=d.c.ep(a4)
A.IJ(c)
if(d.b)A.II(c)
b=e.a
a=b+"_fts"
a0=A.l(['"'+A.z(a,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a0.push("b.archived = 0")
if(!n.w)a0.push("b.hidden = 0")
a4=B.b.B(a0," AND ")
a1=n.uQ()
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
return A.a(m.j0(l,k),$async$cb)
case 10:s=8
break
case 9:s=11
return A.a(j.ad(l,k),$async$cb)
case 11:case 8:i=a7
h=A.l([],t.kj)
for(a4=J.D(i);a4.k();){g=a4.gn()
e=J.S(g,"id")
e.toString
A.G(e)
d=J.S(g,"score")
d.toString
J.aK(h,new A.cO(e,A.EW(d)))}q=h
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
h=A.E(a5)
if(h instanceof A.c9){f=h
throw A.b(A.au("Invalid search term: "+f.a,null))}else throw a5
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cb,r)}}
A.vt.prototype={}
A.c6.prototype={
a5(){return"FieldKind."+this.b}}
A.aZ.prototype={
glr(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.ay===s||B.I===s||B.U===s||B.V===s||B.J===s){r="TEXT"
break A}if(B.R===s||B.B===s||B.T===s){r="INTEGER"
break A}if(B.S===s){r="REAL"
break A}throw A.b(A.fT(u.P))}return r},
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
A.r6.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.ft(B.cu,A.G(m))
m=n.h(0,"name")
m.toString
A.G(m)
r=J.v(n.h(0,"required"),!0)
q=J.v(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aZ(m,B.ay,r,J.v(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aZ(m,B.R,r,!1,q,o,o,!1)
case 2:return new A.aZ(m,B.S,r,!1,q,o,o,!1)
case 3:return new A.aZ(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aZ(m,B.T,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aZ(m,B.I,r,!1,!1,A.cJ(J.i2(t.j.a(n),p),p),o,!1)
case 6:return new A.aZ(m,B.U,!1,!1,q,o,o,!1)
case 7:return new A.aZ(m,B.V,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aZ(m,B.J,!1,!1,!1,o,A.G(p),J.v(n.h(0,"enforceFk"),!0))}},
$S:92}
A.ix.prototype={
a5(){return"IndexScope."+this.b}}
A.dA.prototype={
q(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.rQ.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.i2(t.j.a(q),t.N)
s=J.v(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dA(q,s,A.ft(B.cp,A.G(r)))},
$S:93}
A.fx.prototype={
q(){var s,r=t.N,q=t.X,p=A.w(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gW(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
S(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fx&&r.b===b.b&&B.af.Z(r.a,b.a)&&r.c.S(0,b.c)
else s=!0
return s},
gJ(a){return A.c7(A.uh(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.ri.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.i2(t.j.a(p),s)
r=J.v(r.h(0,"fuzzy"),!0)
return new A.fx(p,r,t.f.b(q)?A.HL(q.c8(0,s,t.X)):B.c4)},
$S:94}
A.et.prototype={
ep(a){var s,r,q,p
for(s=this.a.gaj(),s=s.gt(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.G(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
q(){return A.m(["rules",this.a],t.N,t.X)},
S(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.et&&A.HK(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gL(),n=A.N(o,A.n(o).i("o.E"))
B.b.aO(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
o.push(A.c7(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.uh(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.rh.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.w(s,s)
for(o=t.d2.a(o).gaj(),o=o.gt(o);o.k();){q=o.gn()
p=q.a
p.toString
A.G(p)
q=q.b
q.toString
A.G(q)
A.Dq(p,q)
r.j(0,p,q)}return new A.et(A.Hq(r,s,s))},
$S:95}
A.ca.prototype={
q(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].q())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.vY.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.am(o)
s=J.v(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.D(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.Dl(q.a(p.gn())))
return new A.ca(o,s,r)},
$S:96}
A.u8.prototype={
a5(){return"MissingRemotePolicy."+this.b}}
A.q0.prototype={}
A.c4.prototype={
gdg(){var s,r,q,p,o=this,n=$.Gi()
A.Bw(o)
s=n.a.get(o)
if(s==null){s=A.aP(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.u(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
ff(a){var s,r,q,p,o,n=this,m=$.Gj()
A.Bw(n)
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
A.px.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.G(j)
s=k.h(0,"version")
s.toString
A.am(s)
r=A.l([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.D(p.a(q))
o=t.G
while(q.k())r.push(A.Dl(o.a(q.gn())))
q=A.l([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.D(p.a(n))
while(n.k())q.push(A.HU(o.a(n.gn())))
p=J.v(k.h(0,"keepUnsyncedArchives"),!0)
n=J.v(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.HM(o.a(m))}else m=null
l=A.l([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.D(k==null?B.aj:k)
while(k.k())l.push(A.IT(o.a(k.gn())))
return new A.c4(j,s,r,q,n,p,m,l,this.b.i("c4<0>"))},
$S(){return this.b.i("c4<0>()")}}
A.mx.prototype={
q(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.vE.prototype={
$1(a){return!1},
$S:45}
A.vF.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.I)},
$S:12}
A.vG.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.x)},
$S:31}
A.vH.prototype={
$1(a){return J.a_(a)},
$S:98}
A.uc.prototype={}
A.dM.prototype={
a5(){return"MutationAction."+this.b}}
A.cq.prototype={}
A.d0.prototype={
gbl(){var s=this.c
return s==null?this.a.r:s},
gaT(){return this.b.a.a},
eL(){var s=this.d
if(s!=null&&s.e){s=this.gaT()
throw A.b(new A.fU('Cannot mutate "'+s+'" through a read-only Tx.'))}},
fB(a){var s=this
if(s.d!=null)return s.hY(B.Z,a)
return s.a.aV(new A.pL(s,a),B.n,t.H)},
lc(a){var s=this
if(s.d!=null)return s.hY(B.a_,a)
return s.a.aV(new A.pO(s,a),B.n,t.H)},
nG(a){var s=this
if(s.d!=null)return s.mt(a)
return s.a.aV(new A.pK(s,a),B.n,t.H)},
nS(a){var s=this
if(s.d!=null)return s.by(a,B.a_)
return s.a.aV(new A.pN(s,a),B.n,t.H)},
kX(a,b){var s=this
if(s.d!=null)return s.tZ(a,b)
return s.a.aV(new A.pI(s,a,b),B.n,t.H)},
nD(a){var s=this
if(s.d!=null)return s.eT(a)
return s.a.aV(new A.pH(s,a),B.n,t.H)},
eT(a){return this.u0(a)},
u0(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$eT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eL()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aO(a,o.i("aO<1,2>")).gt(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cu(m.a,m.b,!0),$async$eT)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aP(t.N)
for(o=new A.bF(a,a.r,a.e,o.i("bF<1>"));o.k();)l.u(0,o.d)
n.a0(new A.a1(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$eT,r)},
ko(a){var s=this
if(s.d!=null)return s.hX(B.C,a)
return s.a.aV(new A.pG(s,a),B.n,t.H)},
l7(a){var s=this
if(s.d!=null)return s.hX(B.E,a)
return s.a.aV(new A.pM(s,a),B.n,t.H)},
iU(a){var s=this
if(s.d!=null)return s.d7(a)
return s.a.aV(new A.pJ(s,a),B.n,t.H)},
d7(a){return this.uf(a)},
uf(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eL()
s=2
return A.a(q.e2(a),$async$d7)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cB(n,m,a,!0),$async$d7)
case 3:s=4
return A.a(n.Y(m,"id = ?",[a]),$async$d7)
case 4:l=t.N
o.a0(new A.a1(m,A.as([a],l)))
if(p!=null){l=A.dH(p.gL(),l)
l.H(0,"id")
o.bc(new A.aV(m,a,B.H,B.aX,p,null,l))}return A.e(null,r)}})
return A.f($async$d7,r)},
cu(a,b,c){return this.u_(a,b,c)},
tZ(a,b){return this.cu(a,b,!1)},
u_(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cu=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eL()
s=3
return A.a(p.gbl().ad("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cu)
case 3:o=e
n=J.L(o)
if(n.gW(o)){m=n.gD(o)
l=A.jr(m)
k=m.h(0,"o_kind")!=null?A.m8(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eU(a,b,l,k,c),$async$cu)
case 6:s=1
break
case 5:s=7
return A.a(p.d5(a,b,c,k,l),$async$cu)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cu,r)},
d5(a,b,c,d,e){return this.qt(a,b,c,d,e)},
qt(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d5=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.e2(a),$async$d5)
case 2:m=g
if(m==null)throw A.b(A.BV("No record "+q.gaT()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.dG(m,p,o)
n.E(0,b)
o=A.w(p,o)
o.j(0,"id",a)
o.E(0,n)
s=3
return A.a(q.aQ(B.K,c,m,a,d,e,o),$async$d5)
case 3:return A.e(null,r)}})
return A.f($async$d5,r)},
eU(a,b,c,d,e){return this.u1(a,b,c,d,e)},
u1(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eU=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.aA(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.d5(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.v(i,a7)){q=n.d5(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.dG(a5,h,g)
f.E(0,a8)
m=f
J.c1(m,"id",a7)
e=new A.a2("")
f=n.b
d=f.a
c=A.At(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.dG(m,h,g)
b.H(0,"id")
n.hZ(a7,b,a,c)
a0=n.m0(a5,m,B.K)
l=null
b=a0.length===1&&d.gdg().G(0,B.b.gar(a0))
a1=n.a
a2=a1.ax
a3=a1.ay
if(b){a4=d.ff(B.b.gar(a0))
b=a4.a
l=A.m([b,A.FO(d,a4,J.S(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dp(d,J.v(J.S(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbl().M(d.a,l,"id = ?",[a7]),$async$eU)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.E(a6)
h=A.Gd(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.CW
g===$&&A.A()
b=n.gbl()
a1=l
s=8
return A.a(g.bp(B.K,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$eU)
case 8:if(!b1){g=n.d
if(g!=null)g.a0(new A.a1(d.a,A.as([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bc(new A.aV(d.a,a7,B.H,B.A,a5,m,A.tC(a0,A.a0(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eU,r)},
aQ(a,b,c,d,e,f,g){return this.tC(a,b,c,d,e,f,g)},
hY(a,b){var s=null
return this.aQ(a,!1,s,s,s,s,b)},
hX(a,b){var s=null
return this.aQ(a,!1,s,b,s,s,s)},
v5(a,b,c){var s=null
return this.aQ(a,b,s,s,s,s,c)},
v6(a,b,c,d,e,f){return this.aQ(a,b,c,null,d,e,f)},
tC(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aQ=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eL()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.pB(b5,n,c2,c1)
s=b7===B.Z?3:5
break
case 3:h=A.a7(c3.h(0,"id"))
if(h==null)h=A.hV()
g=$.oU()
if(!g.b.test(h))throw A.b(A.au('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aQ)
case 6:l=n.eQ(c3,m)
b7=b5.a==null?B.b5:B.K
s=4
break
case 5:s=b7===B.K?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aQ)
case 10:if(b5.a==null)throw A.b(A.BV("No record "+n.gaT()+"/"+A.q(m)+" to update."))
c3.toString
l=n.eQ(c3,m)
s=8
break
case 9:s=b7===B.a_?11:13
break
case 11:h=A.a7(c3.h(0,"id"))
if(h==null)h=A.hV()
g=$.oU()
if(!g.b.test(h))throw A.b(A.au('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aQ)
case 14:g=b5.a
if(g==null){l=n.eQ(c3,m)
b7=B.b5}else{l=A.dG(g,t.N,t.X)
for(g=new A.aO(c3,A.n(c3).i("aO<1,2>")).gt(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.c1(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aQ)
case 15:g=b5.a
if(g==null)throw A.b(A.BV("No record "+n.gaT()+"/"+A.q(m)+" to archive/restore."))
g=A.dG(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a2("")
g=n.b
e=g.a
c=l
b=A.At(d,e,c,J.ai(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hZ(m,l,a,b)
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
return A.a(c.bY(n.gbl(),e.a,m),$async$aQ)
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
return A.a(c.eu(n.gbl(),e.a,m),$async$aQ)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a4)throw A.b(A.Df("Record "+n.gaT()+"/"+A.q(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ah(A.bg(e,a3))
a2=A.aq(B.j.v(B.e.v(a6)).a)
a7=new A.pd(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ax
a8=a3.ay
a9=A.dp(e,J.v(J.S(l,"archived"),!0),a4,a8,c,a2)
b0=n.m0(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gdg().G(0,B.b.gar(b0))){b1=e.ff(B.b.gar(b0))
c=b1.a
k=A.m([c,A.FO(e,b1,J.S(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
s=b5.a==null?34:36
break
case 34:s=37
return A.a(n.gbl().aE(0,c,k),$async$aQ)
case 37:s=35
break
case 36:s=38
return A.a(n.gbl().M(c,k,"id = ?",[m]),$async$aQ)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.E(b6)
g=A.Gd(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.CW
c===$&&A.A()
a2=n.gbl()
a3=m
a4=b5.a
s=39
return A.a(c.bp(b7,a7,b0,a2,a3,l,a4,a1,a,a9,a0,g),$async$aQ)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.ab:B.A
break
case 3:b3=B.A
break
case 4:b3=B.bS
break
case 5:b3=B.bT
break
default:b3=null}if(b7===B.C||b7===B.E)b4=A.as(["archived"],t.N)
else if(b5.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("al<o.E>")
b4=A.dH(new A.al(new A.T(g,c),new A.pA(),a2),a2.i("o.E"))}else b4=A.tC(b0,A.a0(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bc(new A.aV(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.a0(new A.a1(e.a,A.as([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aQ,r)},
by(a,b){return this.un(a,b)},
mt(a){return this.by(a,B.Z)},
un(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$by=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eL()
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
a2=a1?A.hV():a0
a1=$.oU()
if(!a1.b.test(a2))throw A.b(A.au('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aK(l,new A.a5(a2,a))}if(!c){a3=A.w(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ar(a3,a3.$ti.i("ar<2>")).bR(0,new A.pF())}else a5=!1
s=c3===B.Z&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.e0(m,l),$async$by)
case 9:k=A.aP(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aK(k,i)}g.a0(new A.a1(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.E(c0) instanceof A.hm))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.w(k,t.G)
j=n.a,d=j.ax,j=j.ay,a1=t.s,a8=0
case 10:if(!(a8<J.ai(l))){s=12
break}a9=a8+2000
b0=B.c.bS(a9,0,J.ai(l))
a4=A.l([],a1)
for(b1=J.H6(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.r)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.cj(e,"id IN ("+B.b.B(A.af(a4.length,"?",!1,k),", ")+")",a4),$async$by)
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
b6=B.b.U(b5,a8,B.c.bS(a9,0,j))
b7=B.b.B(A.af(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.E(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.cj("lp_sync_row",f,j),$async$by)
case 19:d=c1.D(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.G(b1),A.jr(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.cj("lp_outbox",f,j),$async$by)
case 22:j=c1.D(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.G(d),A.m8(f))
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
s=b8.G(0,a2)?28:30
break
case 28:a1=A.dF(null,null,k,d)
a1.E(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.v5(c3,!0,a1),$async$by)
case 31:s=29
break
case 30:a1=A.dF(null,null,k,d)
a1.E(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.v6(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$by)
case 32:b8.u(0,a2)
case 29:case 26:j.length===f||(0,A.r)(j),++b
s=25
break
case 27:g.a0(new A.a1(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$by,r)},
e0(a,b){return this.uo(a,b)},
uo(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$e0=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a3=n.a
a4=a3.r
s=a4 instanceof A.ik?3:4
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
return A.a(n.eG(a6,a4,h,g,m),$async$e0)
case 13:e=a9
if(l)J.aK(k,new A.a5(h,e));++j
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
for(c=0;c<j;++c)J.aK(d,a7[c].a)
b=d
s=17
return A.a(n.d3(a6,b),$async$e0)
case 17:throw A.b(new A.hm())
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
a3.bc(new A.aV(a,a2.a,B.H,B.ab,null,e,J.D_(e.gL(),new A.pE()).fK(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e0,r)},
e1(a,b){return this.uq(a,b)},
uq(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
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
m='INSERT INTO "'+d3+'" ('+A.hZ(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.hZ(B.X)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.hZ(B.W)+") VALUES "
j=new A.pD()
b1=new A.a2("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.l([],t.jO):null
i=0,a9=b3==null,b4=c9.ax,b5=c9.ay,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bS(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eQ(c2,c1):c2
b1.a=""
c4=A.At(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hZ(c1,c3,c5,c4)
A.Lp(f,c8,J.v(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.CW
b7===$&&A.A()
c6=b7.fP()
A.Fy(e,"",null,d0,null,'["*"]',B.u,c6,c5,c1,d3,d0)
A.Fz(d,B.a5,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a5(c1,c3))}c=!1
b=!1
q=6
b7=d1.cl(A.q(m)+A.q(j.$2(J.ai(n),g)))
if(b7.r||b7.b.r)A.u(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eH(new A.bQ(f))
b7.h6()
c=!0
b7=d1.cl(A.q(l)+A.q(j.$2(11,g)))
if(b7.r||b7.b.r)A.u(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eH(new A.bQ(e))
b7.h6()
b=!0
b7=d1.cl(A.q(k)+A.q(j.$2(16,g)))
if(b7.r||b7.b.r)A.u(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eH(new A.bQ(d))
b7.h6()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.E(d4) instanceof A.c9?9:11
break
case 9:a=A.l([],d2)
for(a0=0;a0<i;++a0)J.aK(a,d6[a0].a)
a1=a
s=12
return A.a(o.d3(d5,a1),$async$e1)
case 12:s=c||b?13:14
break
case 13:a2=A.l([],d2)
for(a3=i;a3<h;++a3)J.aK(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.af(J.ai(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.Y(d3,"id IN ("+A.q(a5)+")",a4),$async$e1)
case 17:case 16:s=b?18:19
break
case 18:a6=A.l([d3],d2)
J.Bl(a6,a4)
a7=a6
s=20
return A.a(d5.Y("lp_outbox","store = ? AND record_id IN ("+A.q(a5)+")",a7),$async$e1)
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
c3=a2.b
a8.toString
a8.bc(new A.aV(d3,a2.a,B.H,B.ab,null,c3,J.D_(c3.gL(),new A.pC()).fK(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e1,r)},
eG(a,b,c,d,e){return this.pz(a,b,c,d,e)},
pz(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eG=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eQ(b1,b0)
a3=new A.a2("")
a4=A.At(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hZ(b0,a2,a6,a4)
a5=n.a
m=A.dp(a1,J.v(a2.h(0,"archived"),!0),a5.ax,a5.ay,b0,a2)
a5=a5.CW
a5===$&&A.A()
e=a5.fP()
a5=a1.a
l=A.FB("",null,b2,'["*"]',B.u,e,a6,b0,a5,b2)
k=A.LK('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dJ(new A.T(d,c),new A.py(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.af(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.q(h)+") VALUES ("+A.q(g)+")"
c=a9.cl(f)
d=m
a=A.n(d).i("ar<2>")
d=A.N(new A.ar(d,a),a.i("o.E"))
c.ed(new A.bQ(d))
j=!0
a9.cl("INSERT INTO lp_outbox ("+A.hZ(B.X)+") VALUES ("+B.b.B(A.af(11,"?",!1,b),", ")+")").ed(new A.bQ(A.G7(l,B.X)))
i=!0
a9.cl("INSERT INTO lp_sync_row ("+A.hZ(B.W)+") VALUES ("+B.b.B(A.af(16,"?",!1,b),", ")+")").ed(new A.bQ(A.G7(k,B.W)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.Y(a5,"id = ?",[b0]),$async$eG)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.Y("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$eG)
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
return A.f($async$eG,r)},
d3(a,b){return this.qd(a,b)},
qd(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$d3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.af(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.Y(m,"id IN ("+o+")",b),$async$d3)
case 3:m=A.l([m],t.s)
B.b.E(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.Y("lp_outbox",n,m),$async$d3)
case 4:s=5
return A.a(a.Y("lp_sync_row",n,m),$async$d3)
case 5:case 1:return A.e(q,r)}})
return A.f($async$d3,r)},
eQ(a,b){var s,r,q,p=A.w(t.N,t.X)
for(s=a.gaj(),s=s.gt(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.l0("archived",new A.pz())
return p},
m0(a,b,c){var s,r,q,p,o
if(a==null)return B.cF
s=t.N
r=A.aP(s)
s=A.dH(a.gL(),s)
s.E(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.eZ(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.r.Z(a.h(0,p),b.h(0,p)))r.u(0,p)}o=A.N(r,r.$ti.c)
B.b.aO(o)
return o},
e2(a){return this.uu(a)},
uu(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$e2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbl().ad('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$e2)
case 3:m=c
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.ch(n,l.gD(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e2,r)},
hO(a){return this.u8(a)},
u8(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbl().ad('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hO)
case 3:j=c
k=J.L(j)
if(k.gF(j)){q=B.dd
s=1
break}o=k.gD(j)
k=p.a
n=A.ch(l,o,k.ax,k.ay)
m=o.h(0,"s_sync_state")!=null?A.jr(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.f2(n,m,o.h(0,"o_kind")!=null?A.m8(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
bv(a){return this.oA(a)},
oA(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.d==null
if(g&&p.b.e.a.I(a)){q=p.b.e.bv(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
s=m>1?3:5
break
case 3:s=6
return A.a(p.gbl().ad("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bv)
case 6:s=4
break
case 5:s=7
return A.a(p.gbl().ad('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bv)
case 7:case 4:k=c
l=J.L(k)
if(l.gF(k)){if(g)o.e.lp(a,null)
q=null
s=1
break}j=l.gD(k)
l=p.a
i=A.ch(n,j,l.ax,l.ay)
h=A.be(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.Lq(n,i,h,m)
if(g)o.e.lp(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bv,r)},
hZ(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.au('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.CD(p,n)
if(m!=null)throw A.b(A.au(A.Hl(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.au("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.pL.prototype={
$1(a){return a.bq(this.a.b.a.a).fB(this.b)},
$S:6}
A.pO.prototype={
$1(a){return a.bq(this.a.b.a.a).lc(this.b)},
$S:6}
A.pK.prototype={
$1(a){return a.bq(this.a.b.a.a).nG(this.b)},
$S:6}
A.pN.prototype={
$1(a){return a.bq(this.a.b.a.a).nS(this.b)},
$S:6}
A.pI.prototype={
$1(a){return a.bq(this.a.b.a.a).kX(this.b,this.c)},
$S:6}
A.pH.prototype={
$1(a){return a.bq(this.a.b.a.a).nD(this.b)},
$S:6}
A.pG.prototype={
$1(a){return a.bq(this.a.b.a.a).ko(this.b)},
$S:6}
A.pM.prototype={
$1(a){return a.bq(this.a.b.a.a).l7(this.b)},
$S:6}
A.pJ.prototype={
$1(a){return a.bq(this.a.b.a.a).iU(this.b)},
$S:6}
A.pB.prototype={
nY(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.hO(a),$async$$1)
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
$1(a){return this.nY(a)},
$S:99}
A.pA.prototype={
$1(a){return a!=="id"},
$S:9}
A.pF.prototype={
$1(a){return a>1},
$S:100}
A.pE.prototype={
$1(a){return a!=="id"},
$S:9}
A.pD.prototype={
$2(a,b){var s=t.N
return B.b.B(A.af(b,"("+B.b.B(A.af(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:101}
A.pC.prototype={
$1(a){return a!=="id"},
$S:9}
A.py.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.pz.prototype={
$0(){return!1},
$S:44}
A.hm.prototype={$iH:1}
A.nC.prototype={}
A.bH.prototype={
a0(a){this.c.push(a)
this.a.y.r+=a.b.a},
bc(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bq(a){var s=this.a
return new A.d0(s,s.ae(a),this.b,this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.x("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cE(o,a,b)},
cE(a,b,c){return this.vn(a,b,c,c)},
vn(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cE=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.K("SAVEPOINT "+a2),$async$cE)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.y
k=e.r
p=5
d=A.C5(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.oQ(new A.wv(a3,j,a4),null,A.m([$.kx(),j],f,f),a4.i("y<0>")),$async$cE)
case 8:i=a7
s=9
return A.a(a.K("RELEASE "+a2),$async$cE)
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
return A.a(a.K("ROLLBACK TO "+a2),$async$cE)
case 14:s=15
return A.a(a.K("RELEASE "+a2),$async$cE)
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
if(a>m)B.b.l4(h,m,a)
a=g.length
if(a>l)B.b.l4(g,l,a)
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
A.wv.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.zq.prototype={}
A.jb.prototype={
jf(a){return a.a===this.w.b.a},
bT(){var s=this.w
return s.ee(s.r==null&&!s.w?50:null).ao(new A.vx(),t.J)},
ie(a){return A.FC(a,new A.vw(this),this.w.f.length!==0)},
kV(a){var s=this.x
return s==null?null:s.u(0,a)},
iN(a,b){var s=this.x
return s==null?null:s.bC(a,b)},
jg(){var s=this.x=A.vZ(this.gkz(),new A.vy(this),null,!1,t.J)
return new A.b7(s,A.n(s).i("b7<1>"))},
ec(){this.lw()
var s=this.x
if(s!=null)s.p()}}
A.vx.prototype={
$1(a){return a.a},
$S:103}
A.vw.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.vy.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e3(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.j2.prototype={
jf(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.G(0,this.x))return!1
return!0},
bT(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$bT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.r.aM(n.a,1,"id = ?",[p.x]),$async$bT)
case 3:m=b
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}q=A.ch(n,l.gD(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bT,r)},
ie(a){return a==null?"<null>":A.aq(B.j.v(B.e.v(A.ah(a))).a)},
kV(a){var s=this.y
return s==null?null:s.u(0,a)},
iN(a,b){var s=this.y
return s==null?null:s.bC(a,b)},
jg(){var s=this.y=A.vZ(this.gkz(),new A.ui(this),null,!1,t.b)
return new A.b7(s,A.n(s).i("b7<1>"))},
ec(){this.lw()
var s=this.y
if(s!=null)s.p()}}
A.ui.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e3(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.bP.prototype={
iN(a,b){},
az(){var s=this.a.a$.a
this.c=new A.aT(s,A.n(s).i("aT<1>")).aK(this.gtH())},
iG(){return this.xD(A.n(this).i("bP.T"))},
xD(a){var s=0,r=A.h(a),q,p=this,o
var $async$iG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bT(),$async$iG)
case 3:o=c
p.r=p.ie(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iG,r)},
tI(a){var s,r=this
if(!r.jf(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.C()
r.d=A.cS(r.b,r.gmx())},
e3(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$e3=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.bT(),$async$e3)
case 6:m=b
l=n.ie(m)
if(!J.v(l,n.r)){n.r=l;++i.z
n.kV(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.E(g)
j=A.ad(g)
n.iN(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.C()
n.d=A.cS(n.b,n.gmx())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e3,r)},
ec(){var s=this.d
if(s!=null)s.C()
s=this.c
if(s!=null)s.C()}}
A.xz.prototype={
aY(a,b){var s,r=this;++r.b
r.mm()
s=new A.t($.C,b.i("t<0>"))
r.a=r.a.ao(new A.xA(r,new A.ay(s,b.i("ay<0>")),a),t.H)
return s},
mm(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.xA.prototype={
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
l=A.ad(i)
n.b.bD(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.mm()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:42}
A.pe.prototype={}
A.fj.prototype={
l(a){return"BlobMissingError: "+this.a},
$iH:1}
A.kS.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.q(this.a)},
$iH:1}
A.mM.prototype={}
A.B4.prototype={
$1(a){return B.b.E(this.a,a)},
$S:105}
A.iq.prototype={}
A.r8.prototype={
bw(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bw=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.bX
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
return A.a(a3.fa(25),$async$bw)
case 3:a4=b5.D(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b6?10:12
break
case 10:s=13
return A.a(n.cv(i,b2),$async$bw)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.nB(i.b),$async$bw)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b7?17:18
break
case 17:s=19
return A.a(n.eW(i),$async$bw)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.nB(i.b),$async$bw)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.E(b3)
j=!0
e=i.w+1
d=a5.ne(e)
a8=i.b
a9=J.a_(f)
b0=a6.$0()
s=23
return A.a(a3.xV(a8,a9,e,b0+B.c.N(d.a,1000)),$async$bw)
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
return A.a(a2.cj("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bw)
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
return A.a(n.di(a0,a,a1,c),$async$bw)
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
case 25:q=new A.iq(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bw,r)},
cv(a,b){return this.ud(a,b)},
ud(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cv=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aA(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.G(a1)
l=a0.h(0,"hash")
l.toString
A.G(l)
k=A.a7(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.br(l),$async$cv)
case 3:if(!a6)throw A.b(A.x("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bi(l),$async$cv)
case 4:j=a6
if(j==null)throw A.b(A.x("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.y
i===$&&A.A()
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
if(m!=null){f=B.a.A(l,0,B.c.bS(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.T(b,f)||B.a.T(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.yW(a3.d,A.m([k,new A.h6(k,j,new A.ra(a4,l))],t.N,t.h3)),$async$cv)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga_(l):k
case 11:s=14
return A.a(n.a.a2(new A.rb(a,a1,a3),t.P),$async$cv)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cv,r)},
eW(a){return this.uc(a)},
uc(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aA(a.f,null))
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
return A.a(p.b.yU(a.d,A.l([o],t.s)),$async$eW)
case 5:case 4:s=6
return A.a(p.a.a2(new A.r9(l,n,a),t.P),$async$eW)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eW,r)},
di(a,b,c,d){return this.wD(a,b,c,d)},
wD(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$di=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.y
l===$&&A.A()
k=m
s=4
return A.a(l.ip(c,a,null),$async$di)
case 4:s=3
return A.a(k.fB(f),$async$di)
case 3:o=f
s=5
return A.a(m.bi(o),$async$di)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rc(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$di)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$di,r)},
dq(a,b,c,d){return this.xZ(a,b,c,d)},
xZ(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$dq=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cj("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$dq)
case 2:k=f
j=A.tC(c,A.a0(c).c)
i=J.aB(k)
h=t.B
g=A.dH(new A.bI(i.cg(k,new A.rd(),t.v),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.G(0,n)?6:7
break
case 6:s=8
return A.a(a.cd(0,"lp_file_refs",A.m(["ref_id",A.hV(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bV),$async$dq)
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
return A.a(a.Y("lp_file_refs","ref_id = ?",[q]),$async$dq)
case 11:l=A.a7(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.T(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aF(u.y,[l]),$async$dq)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dq,r)}}
A.ra.prototype={
$0(){return this.a.cO(this.b)},
$S:106}
A.rb.prototype={
$1(a){return this.o0(a)},
o0(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.M("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a0(new A.a1(p.c,A.as([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.r9.prototype={
$1(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.Y("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aF(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a0(new A.a1(p.c,A.as([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rc.prototype={
$1(a){return this.o1(a)},
o1(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.i0(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.M("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a0(new A.a1(q.f,A.as([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rd.prototype={
$1(a){return A.a7(a.h(0,"remote_name"))},
$S:107}
A.bh.prototype={}
A.r7.prototype={
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
m=A.be(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.be(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bh(j,s,r,q,p,o,n,m,l,A.a7(k.h(0,"last_error")))},
$S:108}
A.tG.prototype={
gmC(){return this.b},
gkP(){var s=0,r=A.h(t.y),q,p=this
var $async$gkP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dU()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gkP,r)},
el(a,b,c){return this.xL(a,b,c)},
xL(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$el=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.r.cj("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$el)
case 3:o=n.aL(e,A.M4(),t.A)
o=A.N(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$el,r)},
df(a,b,c,d,e,f,g,h){return this.vK(a,b,c,d,e,f,g,h)},
vK(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$df=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.gmC()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dU(),$async$df)
case 5:j=!j
case 4:if(j)throw A.b(A.x("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.ds(b,c,d),$async$df)
case 6:o=j
s=7
return A.a(m.bi(o),$async$df)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.a2(new A.tH(p,h,g,e,o,n,A.hV(),f),t.A),$async$df)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$df,r)},
ft(a,b,c,d,e){return this.y3(a,b,c,d,e)},
y3(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$ft=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gmC()
s=3
return A.a(p.el(a,c,e),$async$ft)
case 3:k=g
j=J.L(k)
if(j.gF(k))throw A.b(A.x("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.fg(k,new A.tJ(d),new A.tK(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.x("File is remote_only; download it before opening."))
j=p.a
n=j.ch.$0()
m=o.e
s=4
return A.a(j.r.aF("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$ft)
case 4:q=l.cO(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
fE(a,b,c,d,e,f){return this.yz(0,b,c,d,e,f)},
yz(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fE=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.el(b,d,f),$async$fE)
case 3:n=h
m=J.L(n)
if(m.gF(n)){s=1
break}o=e!=null?m.fg(n,new A.tL(e),new A.tM(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.tN(p,o,f,d,b),t.P),$async$fE)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
bg(a,b){return this.oz(a,b)},
oz(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bg=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e9(a8),$async$bg)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.ch.$0()-B.c.N(a7.a,1000)
s=6
return A.a(e.a2(new A.tI(a2,n),t.P),$async$bg)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fl(),$async$bg)
case 13:l=b0
s=J.ed(l)?14:15
break
case 14:k=0
j=A.aP(t.N)
d=e.r,c=t.s
case 16:s=18
return A.a(d.yh("lp_blobs",A.l(["hash"],c),250,k,"hash ASC"),$async$bg)
case 18:i=b0
for(b=J.D(i);b.k();){h=b.gn()
a=J.S(h,"hash")
a.toString
J.aK(j,A.G(a))}if(J.ai(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.D(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.Bn(j,g)){s=19
break}p=22
b=new A.t($.C,c)
b.aP(null)
s=25
return A.a(b,$async$bg)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.dh(g),$async$bg)
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
return A.a(e.yj("lp_blobs",A.l(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bg)
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
return A.a(a3.dh(b),$async$bg)
case 34:case 33:s=35
return A.a(e.Y("lp_blobs","hash = ?",[b]),$async$bg)
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
return A.f($async$bg,r)},
cI(a){return this.wM(a)},
wM(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.r
e=A
s=3
return A.a(g.b2("SELECT SUM(size) as total FROM lp_blobs"),$async$cI)
case 3:f=e.e9(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.b2("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cI)
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
A.am(j)
s=9
return A.a(h.dh(i),$async$cI)
case 9:s=10
return A.a(g.M("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cI)
case 10:s=11
return A.a(g.Y("lp_blobs","hash = ?",[i]),$async$cI)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cI,r)}}
A.tH.prototype={
$1(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.ch.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.er("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.L(c)
if(b.gW(c)){q=A.Dm(b.gD(c))
s=1
break}s=4
return A.a(A.i0(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.er("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.L(o)
n=h.gW(o)&&J.S(h.gD(o),"base_updated")==null?A.a7(J.S(h.gD(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cd(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.Q),$async$$1)
case 6:k=A.hV()
s=7
return A.a(j.aE(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a7(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a0(new A.a1(g,A.as([f],m)))
q=new A.bh(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:109}
A.tJ.prototype={
$1(a){return a.a===this.a},
$S:72}
A.tK.prototype={
$0(){return A.u(A.x("FileRef "+this.a+" not found"))},
$S:38}
A.tL.prototype={
$1(a){return a.a===this.a},
$S:72}
A.tM.prototype={
$0(){return A.u(A.x("FileRef "+this.a+" not found"))},
$S:38}
A.tN.prototype={
$1(a){return this.oa(a)},
oa(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.Y("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aF(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.M("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.M("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aE(0,"lp_op_queue",A.m(["op_id",A.hV(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a7(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a0(new A.a1(q.c,A.as([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tI.prototype={
$1(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dx,p=new A.bF(p,p.r,p.e,A.n(p).i("bF<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ad('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.z(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
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
return A.a(i.Y("lp_file_refs","ref_id = ?",[j]),$async$$1)
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
$S:5}
A.wW.prototype={
eV(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eV=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.i_()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a6(n.getDirectory(),l),$async$eV)
case 7:m=b
s=8
return A.a(A.a6(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eV)
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
return A.f($async$eV,r)},
dU(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eV(),$async$dU)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
bn(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bn=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dU(),$async$bn)
case 3:if(!b){q=null
s=1
break}p=5
m=A.i_()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a6(m.getDirectory(),k),$async$bn)
case 8:l=b
s=9
return A.a(A.a6(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bn)
case 9:k=b
q=new A.o_(k)
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
return A.f($async$bn,r)},
ds(a,b,c){return this.yf(a,b,c)},
fB(a){return this.ds(a,null,null)},
yf(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$ds=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.xY(A.l([],t.bs))
s=3
return A.a(A.kr(a,b,c,null,new A.wX(o)),$async$ds)
case 3:n=e
m=o.l9()
s=4
return A.a(p.bn(),$async$ds)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.b0(k,m),$async$ds)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ds,r)},
cO(a){return this.y5(a)},
y5(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cO=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.kT(a)
j=n.b
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.C0(j,t.L)
s=1
break}s=3
return A.a(n.bn(),$async$cO)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.es(a),$async$cO)
case 10:l=c
j=A.C0(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.E(h)
if(!(k instanceof A.fj))throw A.b(A.D7(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.x("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cO,r)},
dh(a){return this.w8(a)},
w8(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$dh=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.kT(a)
o.b.H(0,a)
s=2
return A.a(o.bn(),$async$dh)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.H(0,a),$async$dh)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.E(k)
if(!(m instanceof A.fj))throw A.b(A.D7(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dh,r)},
br(a){return this.wS(a)},
wS(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$br=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kT(a)
if(p.b.I(a)){q=!0
s=1
break}s=3
return A.a(p.bn(),$async$br)
case 3:o=c
if(o!=null){q=o.br(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$br,r)},
bi(a){return this.oN(a)},
oN(a){var s=0,r=A.h(t.o),q,p=this,o,n
var $async$bi=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kT(a)
o=p.b
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bn(),$async$bi)
case 3:n=c
if(n!=null){q=n.bi(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bi,r)},
e9(a){return this.vR(a)},
vR(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e9=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bn(),$async$e9)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.ek(),$async$e9)
case 8:k=f.D(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.H5(l,"tmp_")){s=9
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
fl(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fl=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.dH(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bn(),$async$fl)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ek(),$async$fl)
case 10:j=f.D(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.CN()
if(l.b.test(m))J.aK(i,m)
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
return A.f($async$fl,r)}}
A.wX.prototype={
$1(a){return this.a.u(0,a)},
$S:27}
A.o_.prototype={
es(a){return this.yp(a)},
yp(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$es=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a6(n.a.getFileHandle(a,{create:!1}),i),$async$es)
case 7:m=c
s=8
return A.a(A.a6(m.getFile(),i),$async$es)
case 8:l=c
s=9
return A.a(A.a6(l.arrayBuffer(),t.a),$async$es)
case 9:k=c
i=A.bV(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.E(g)
if(A.Ea(j))throw A.b(A.D6(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$es,r)},
b0(a,b){return this.zf(a,b)},
zf(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
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
return A.a(A.a6(o.write(t.a.a(B.f.ga9(b))),p),$async$b0)
case 4:s=5
return A.a(A.a6(o.close(),p),$async$b0)
case 5:return A.e(null,r)}})
return A.f($async$b0,r)},
H(a,b){return this.yA(0,b)},
yA(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.By(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.E(l)
if(A.Ea(n))throw A.b(A.D6(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
br(a){return this.wT(a)},
wT(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$br=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a6(n.a.getFileHandle(a,{create:!1}),t.m),$async$br)
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
bi(a){return this.oO(a)},
oO(a){var s=0,r=A.h(t.o),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bi=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a6(n.a.getFileHandle(a,{create:!1}),k),$async$bi)
case 7:m=c
s=8
return A.a(A.a6(m.getFile(),k),$async$bi)
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
return A.f($async$bi,r)},
ek(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ek=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.cf(A.c_(A.Dn(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ek)
case 8:if(!b){s=7
break}l=j.gn()
J.aK(k,l.name)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=9
return A.a(j.C(),$async$ek)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ek,r)},
$iDK:1}
A.mT.prototype={
gnL(){return 1}}
A.pb.prototype={
dA(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eP(),$async$dA)
case 5:o=b
s=o.gnL()<0.25?6:7
break
case 6:s=8
return A.a(p.jp(o),$async$dA)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnL()<0.25?9:10
break
case 9:s=11
return A.a(p.jp(m),$async$dA)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
iX(){var s=0,r=A.h(t.q),q,p=this
var $async$iX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eP(),$async$iX)
case 3:q=p.jp(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iX,r)},
eP(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eP=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.kw():j
p=3
s=6
return A.a(l,$async$eP)
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
return A.f($async$eP,r)},
jp(a){var s=this.c
if(s!=null)return s
return this.c=this.h3(a)},
h3(a){return this.qk(a)},
qk(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$h3=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.x("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.l1(l),$async$h3)
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
return A.f($async$h3,r)}}
A.m9.prototype={
pf(a,b,c,d,e,f,g,h){var s=this,r=new A.pb(s.b)
s.x!==$&&A.cA()
s.x=r
s.y!==$&&A.cA()
s.y=new A.uz(s.w,s.a,r)},
iR(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$iR=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.as){s=1
break}n.as=!0
if(n.at){s=1
break}p=4
m=n.y
m===$&&A.A()
s=7
return A.a(m.iT(),$async$iR)
case 7:n.Q=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.E(k)
if(m instanceof A.cG){n.Q=!1
n.at=!0}else if(m instanceof A.bu)n.as=n.Q=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iR,r)},
fX(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.z!=null){s=1
break}o=p.y
o===$&&A.A()
n=A.In(B.bW,o,A.l([p.r],t.s),p.gtS(),p.gtP())
p.z=n
s=3
return A.a(n.az(),$async$fX)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fX,r)},
eF(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.z
o=o==null?null:o.aG()
s=2
return A.a(o instanceof A.t?o:A.bd(o,t.H),$async$eF)
case 2:q.z=null
for(o=q.ay,p=new A.aU(o,o.r,o.e,A.n(o).i("aU<2>"));p.k();)p.d.C()
o.aa(0)
q.ch.aa(0)
return A.e(null,r)}})
return A.f($async$eF,r)},
tQ(){var s,r,q,p
for(s=this.CW,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
this.eK(p,new A.cD(p,B.a9,null))}},
tT(a){var s=a.b,r=s.b
if(!B.b.G(this.CW,r))return
if(a.a==="delete"){this.i0(s)
return}this.eK(r,new A.cD(r,B.a9,s))},
i0(a){return this.vj(a)},
vj(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$i0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.G(n.CW,j)){s=1
break}m=null
p=4
l=n.y
l===$&&A.A()
s=7
return A.a(l.c_(a.a),$async$i0)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.E(i)
if(l instanceof A.cK){n.eK(j,new A.cD(j,B.aQ,null))
s=1
break}else if(l instanceof A.bu){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eK(j,new A.cD(j,B.aQ,null))
s=1
break}n.eK(j,new A.cD(j,B.a9,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i0,r)},
eK(a,b){var s,r,q=this
q.ch.j(0,a,b)
s=q.ay
r=s.h(0,a)
if(r!=null)r.C()
s.j(0,a,A.cS(q.c,new A.uv(q,a)))},
yU(a,b){return this.j2(null,a,null,b,null)},
j2(a,b,c,d,e){return this.yX(a,b,c,d,e)},
yW(a,b){return this.j2(null,a,null,null,b)},
yX(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$j2=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aL(0,new A.uw(),t.N,t.co)
n=p.y
n===$&&A.A()
q=n.j1(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j2,r)}}
A.uv.prototype={
$0(){var s,r=this.a,q=this.b
r.ay.H(0,q)
s=r.ch.H(0,q)
if(s!=null&&(r.ax.c&4)===0)r.ax.u(0,s)},
$S:0}
A.uw.prototype={
$2(a,b){return new A.Q(a,new A.dy("imgs+",b.a,b.b,b.c),t.ia)},
$S:112}
A.uP.prototype={}
A.uz.prototype={
fn(a,b,c,d,e,f){return this.xN(a,b,c,d,e,f)},
xN(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fn=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.MI(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.z(c,"'","\\'")+"'")}n=t.N
n=A.w(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.j_(B.c.bS(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.B(b,","))
k=p.b.bu("/api/collections/data/records").l5(n)
s=3
return A.a(p.mG("GET",k),$async$fn)
case 3:j=a0
p.d4(j,A.l([200],t.t),k)
i=p.d2(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bt("List response has no items array."))
h=J.aL(i,new A.uG(p),t.Q)
h=A.N(h,h.$ti.i("V.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
c_(a){return this.oC(a)},
oC(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$c_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bu("/api/collections/data/records/"+A.hK(2,a,B.l,!1))
s=3
return A.a(p.mG("GET",o),$async$c_)
case 3:n=c
if(n.a===404)throw A.b(A.Il("not found"))
p.d4(n,A.l([200],t.t),o)
q=p.dW(p.d2(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
ik(a,b,c){return this.w0(a,b,c)},
w0(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$ik=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bu("/api/collections/data/records")
s=3
return A.a(p.f2("POST",o,B.h.a7(A.m(["id",b,"store",c,"data",B.h.aA(a,null)],t.N,t.z),null)),$async$ik)
case 3:n=e
if(n.a===400&&p.ts(n))throw A.b(new A.fr(p.eM(n)))
p.d4(n,A.l([200,201],t.t),o)
q=p.dW(p.d2(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
ts(a){var s,r,q,p,o,n
try{s=this.d2(a)
r=J.S(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.v(p,"validation_not_unique")||J.v(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fL(a,b,c){return this.yT(a,b,c)},
yT(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bu("/api/collections/data/records/"+A.hK(2,c,B.l,!1))
s=3
return A.a(p.f2("PATCH",o,B.h.a7(A.m(["data",B.h.aA(b,null)],t.N,t.z),null)),$async$fL)
case 3:n=e
p.d4(n,A.l([200],t.t),o)
q=p.dW(p.d2(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
j1(a,b,c,d,e){return this.yV(a,b,c,d,e)},
yV(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$j1=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bu("/api/collections/data/records/"+A.hK(2,b,B.l,!1))
m=t.N
l=A.w(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a7(d,null))
if(e==null)m=null
else{m=A.n(e).i("ar<2>")
m=A.N(new A.ar(e,m),m.i("o.E"))}s=3
return A.a(p.uV(new A.lw("PATCH",n,B.aA,l,m==null?B.cB:m)),$async$j1)
case 3:o=g
p.d4(o,A.l([200],t.t),n)
q=p.dW(p.d2(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j1,r)},
ip(a,b,c){return this.wE(a,b,c)},
wE(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$ip=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.w(l,l)
o=p.b.bu("/api/files/data/"+A.hK(2,b,B.l,!1)+"/"+A.hK(2,a,B.l,!1))
n=l.a===0?o:o.l5(l)
s=3
return A.a(p.tV(new A.eu("GET",n,B.aA,null)),$async$ip)
case 3:m=e
p.d4(new A.cH(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
fz(a){return this.ye(a)},
ye(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$fz=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bu("/api/batch")
a3=A.l([],t.ic)
for(o=J.aB(a4),n=o.gt(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.h.aA(j.d,null)],m,l)],m,k))}s=3
return A.a(p.f2("POST",a2,B.h.a7(A.m(["requests",a3],m,t.ew),null)),$async$fz)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.HJ(p.eM(i)))
if(a3===400)throw A.b(new A.eg(p.eM(i)))
p.d4(i,A.l([200],t.t),a2)
h=B.h.aA(i.c,null)
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
a0=l.S(a,200)||l.S(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dW(a1):null
k=a0?null:p.qp(b)
j=a0&&n.b(a1)?B.h.a7(a1.h(0,"data"),null):null
d.push(new A.j9(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
iT(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$iT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f2("POST",p.b.bu("/api/batch"),B.h.a7(A.m(["requests",[]],t.N,t.W),null)),$async$iT)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.Ha(p.eM(o)))
if(n===408||n===429||n>=500)throw A.b(A.E3("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iT,r)},
f2(a,b,c){return this.c7(new A.uC(this,a,b,c),new A.uD(),t.w)},
mG(a,b){return this.f2(a,b,null)},
uV(a){return this.c7(new A.uE(this,a),new A.uF(),t.w)},
tV(a){return this.c7(new A.uA(this,a),new A.uB(),t.lI)},
c7(a,b,c){return this.vm(a,b,c,c)},
vm(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c7=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dA(),$async$c7)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c7)
case 8:l=f
s=J.v(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.iX(),$async$c7)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c7)
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
if(i instanceof A.dz){j=i
throw A.b(A.E3(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c7,r)},
kd(a,b,c,d){return this.uT(a,b,c,d)},
uT(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$kd=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.w(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b5(new A.eu(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kd,r)},
d4(a,b,c){if(B.b.G(b,a.a))return
throw A.b(this.tw(a,c))},
tw(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eM(a)
if(401===s)return new A.c3(q)
if(403===s)return new A.cG(q)
if(404===s)return new A.cK(q)
if(408===s||429===s)return new A.eI(r,q)
if(400===s)return new A.fL(q)
if(s>=500)return new A.jh(q)
return new A.fN("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eM(a){var s,r,q,p,o
try{s=this.d2(a)
r=J.S(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.S(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.h.a7(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
d2(a){var s,r,q,p=null
try{p=B.h.aA(a.c,null)}catch(r){q=A.E(r)
if(t.U.b(q)){s=q
throw A.b(A.bt("Response is not valid JSON: "+s.gkT()))}else throw r}if(t.f.b(p))return A.ba(p,t.N,t.X)
throw A.b(A.bt("Expected a JSON object, got "+J.bp(p).l(0)+"."))},
dW(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bt("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bt("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.ba(o,n,m):A.w(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.D0(k,n)
j=A.N(j,j.$ti.i("o.E"))}else j=B.p
return new A.cN(s,p,q,l,j)},
qp(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.q(r)+")"}}
A.uG.prototype={
$1(a){return this.a.dW(a)},
$S:113}
A.uC.prototype={
$1(a){var s=this
return s.a.kd(s.b,s.c,s.d,a)},
$S:47}
A.uD.prototype={
$1(a){return a.a},
$S:61}
A.uE.prototype={
$1(a){var s=this.b,r=t.N
r=A.dG(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dF(new A.lw(s.a,s.b,r,s.d,s.e))},
$S:47}
A.uF.prototype={
$1(a){return a.a},
$S:61}
A.uA.prototype={
$1(a){var s=this.b,r=t.N
r=A.dG(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.eq(new A.eu(s.a,s.b,r,s.d))},
$S:116}
A.uB.prototype={
$1(a){return a.a},
$S:117}
A.j5.prototype={}
A.hE.prototype={}
A.uH.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.f1()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aG(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.C()
s=2
return A.a(n instanceof A.t?n:A.bd(n,t.H),$async$aG)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.ai()
return A.e(null,r)}})
return A.f($async$aG,r)},
f1(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$f1=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.d_(),$async$f1)
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
return A.a(A.HP(n.$1(k),m),$async$f1)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$f1,r)},
d_(){return this.q0()},
q0(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$d_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.dA(),$async$d_)
case 3:m=b
l=t.N
s=4
return A.a(n.a.eq(new A.eu("GET",n.b.bu("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$d_)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.iv("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aK(new A.uK()).C(),$async$d_)
case 7:s=1
break
case 6:++p.as
p.z=new A.ay(new A.t($.C,t.D),t.h)
n=$.oT()
l=A.l([],t.s)
o.a=o.b=!1
p.y=k.c.bV(new A.uL(o,p,new A.zx(new A.yn(n),l),m),new A.uM(p),new A.uN(p))
s=8
return A.a(p.z.a,$async$d_)
case 8:p.y=null
if(o.a)throw A.b(A.iv("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$d_,r)},
hn(a,b){return this.rl(a,b)},
rl(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hn=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b5(new A.eu("POST",l.b.bu("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a7(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$hn)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.iv("realtime subscribe status "+l,null))
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
l=l.b(j)?A.ba(j,t.N,t.X):B.o
if(t.j.b(f)){c=J.D0(f,t.N)
c=A.N(c,c.$ti.i("o.E"))}else c=B.p
m=new A.cN(k,e,d,l,c)
p.w.$1(new A.j5(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$hn,r)}}
A.uO.prototype={
$1(a){return A.FR(a,this.a,this.b,A.MC())},
$S:118}
A.uK.prototype={
$1(a){},
$S:27}
A.uL.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.wW(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.r)(k),++n){m=k[n]
r.Q=r.Q.ao(new A.uI(q,r,m,p),o).n6(new A.uJ())}},
$S:27}
A.uI.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=n.a
if(k.a){s=1
break}p=4
s=7
return A.a(n.b.hn(n.c,n.d),$async$$1)
case 7:p=2
s=6
break
case 4:p=3
j=o.pop()
k.a=!0
k=n.b
l=k.y
l=l==null?null:l.C()
s=8
return A.a(l instanceof A.t?l:A.bd(l,t.H),$async$$1)
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
$S:119}
A.uJ.prototype={
$1(a){},
$S:41}
A.uM.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.ai()},
$S:0}
A.uN.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.ai()},
$S:41}
A.zx.prototype={
wW(a){var s,r,q,p,o,n,m,l=this.a
l.u(0,a)
s=l.l9()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.tp(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dn(p,o,q)))
p=o+1
m=this.qg(B.a.yO(new A.dl(!0).d0(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.u(0,B.f.b6(s,p))
return r},
tp(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qy(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.aa(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.aa(k)
try{q=B.h.aA(r,l)
if(t.f.b(q)){p=A.ba(q,t.N,t.X)
o=J.S(p,"clientId")
if(J.v(s,"PB_CONNECT")&&typeof o=="string")return new A.hE(o,l)
return new A.hE(l,p)}}catch(n){}return l},
qg(a){var s,r=this,q=null
if(a.length===0)return r.qy()
if(B.a.T(a,"PB_CONNECT:")){r.b=null
B.b.aa(r.c)
return new A.hE(B.a.ck(B.a.ag(a,11)),q)}if(B.a.T(a,":"))return q
if(B.a.T(a,"event:")){r.b=B.a.ck(B.a.ag(a,6))
return q}if(B.a.T(a,"data:")){s=B.a.ck(B.a.ag(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eu.prototype={}
A.dy.prototype={
oU(){return this.d.$0()},
gm(a){return this.c}}
A.lw.prototype={}
A.cH.prototype={}
A.dz.prototype={
l(a){return"HttpTransportException: "+this.a},
$iH:1}
A.dS.prototype={}
A.ux.prototype={
b5(a){return this.oJ(a)},
oJ(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eq(a),$async$b5)
case 7:m=c
j=m.c
s=8
return A.a(B.aN.lx(j).ej(0).iZ(B.ad),$async$b5)
case 8:l=c
j=m.a
i=m.b
q=new A.cH(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.E(g)
if(j instanceof A.dz)throw g
else{k=j
j=A.iv("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b5,r)},
dF(a){return this.oK(a)},
oK(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dF=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Ih(a6.a,a6.b)
h.r.E(0,a6.c)
h.x.E(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.oU(),$async$dF)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.Gc(a0)
a3=new A.fB("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cU(A.w(d,d),e))
b.push(new A.lX(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.r)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b5(m).iZ(B.ad),$async$dF)
case 11:k=a8
g=k.w
s=12
return A.a(B.aN.lx(g).ej(0).iZ(B.ad),$async$dF)
case 12:j=a8
g=k.b
f=k.e
q=new A.cH(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.E(a5)
if(g instanceof A.dz)throw a5
else{i=g
g=A.iv("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dF,r)},
eq(a){return this.y7(a)},
y7(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eq=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.ID(a,a0)
a1.r.E(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gkC().kB(j)
i.pN()
i.y=A.MM(j)
h=i.gcr()
if(h==null){j=t.N
i.scr(A.BL("text","plain",A.m(["charset",i.gkC().gaT()],j,j)))}else{j=i.gcr()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c9(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gkC().gaT()],j,j)
e=h.a
d=h.b
c=A.ba(h.c,j,j)
c.E(0,f)
i.scr(A.BL(e,d,c))}}}p=4
s=7
return A.a(n.a.b5(a1).iZ(B.ad),$async$eq)
case 7:m=a5
j=t.N
l=A.w(j,j)
m.e.a3(0,new A.uy(l))
j=m.b
i=m.w
q=new A.dS(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.E(a2)
if(j instanceof A.dz)throw a2
else{k=j
a=A.iv("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eq,r)}}
A.uy.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:37}
A.p0.prototype={
aY(a,b){var s=this.a.ao(new A.p1(a,b),b)
this.a=s.bE(new A.p2(b),new A.p3(),t.H)
return s}}
A.p1.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.p2.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.p3.prototype={
$2(a,b){},
$S:11}
A.bB.prototype={
gnM(){var s=this.e
return s.gm(s)===1&&J.v(s.h(0,"__lp_deleted__"),!0)}}
A.q1.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.G(d)
s=e.h(0,"record_id")
s.toString
A.G(s)
r=A.AC(e.h(0,l),l,k)
q=A.AC(e.h(0,j),j,k)
p=A.AC(e.h(0,i),i,k)
o=A.FL(e.h(0,h),h,k)
n=A.FL(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.am(m)
return new A.bB(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.AC(e.h(0,f),f,k):null)},
$S:120}
A.q2.prototype={
fm(a){return this.xM(a)},
xM(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$fm=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.r.yg("lp_conflicts","detected_at ASC",n,o),$async$fm)
case 3:o=m.aL(c,A.LP(),t.n8)
o=A.N(o,o.$ti.i("V.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
dE(a,b){return this.oB(a,b)},
oB(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dE)
case 3:o=d
n=J.L(o)
if(n.gF(o)){q=null
s=1
break}q=A.Br(n.gD(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dE,r)},
z_(a){var s={},r=A.Ce()
s.a=null
r.snn(A.dR(new A.q5(s,r),new A.q6(s,this,a,new A.q7(this,r,a)),t.ba))
return r.bo().gcW()},
ev(a,b,c){return this.yE(a,b,c)},
yE(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ev=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.ae(c)
s=2
return A.a(p.a2(new A.q3(q,c,a,o.a,o,b),t.P),$async$ev)
case 2:return A.e(null,r)}})
return A.f($async$ev,r)},
f5(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$f5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dE(a,b),$async$f5)
case 2:p=d
if(p==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=3
return A.a(q.ev(b,p.d,a),$async$f5)
case 3:return A.e(null,r)}})
return A.f($async$f5,r)},
e6(a,b){return this.vx(a,b)},
vx(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$e6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dE(a,b),$async$e6)
case 3:n=d
if(n==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=n.gnM()?4:5
break
case 4:o=p.a
if(A.eM(o)!=null)A.u(A.x(u.L))
s=6
return A.a(new A.d0(o,o.ae(a),null,null).iU(b),$async$e6)
case 6:s=1
break
case 5:s=7
return A.a(p.ev(b,n.e,a),$async$e6)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e6,r)}}
A.q7.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bo().giH()){s=1
break}p=4
s=7
return A.a(n.a.fm(n.c),$async$$0)
case 7:m=b
if(!i.bo().giH())J.aK(i.bo(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.E(h)
k=A.ad(h)
if(!i.bo().giH())i.bo().bC(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:2}
A.q6.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.aT(p,A.n(p).i("aT<1>")).aK(new A.q4(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.q4.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:29}
A.q5.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.C()
s=2
return A.a(p instanceof A.t?p:A.bd(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bo().p(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.q3.prototype={
$1(a){return this.nZ(a)},
nZ(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.L(a3)
if(a4.gF(a3))throw A.b(A.x("No conflict found for "+a1+"/"+a2))
o=A.Br(a4.gD(a3))
n=o.gnM()
m=n?null:A.ah(o.e)
l=n?"":A.aq(B.j.v(B.e.v(A.ah(A.bg(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aM(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bz(a8)?4:5
break
case 4:s=7
return A.a(a0.Y("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.Y("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.Y("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a0(new A.a1(a1,A.as([a2],a4)))
a6.a0(new A.a1("lp_conflicts",A.as([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aM("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.L(k)
if(i.gW(k)){h=A.a7(J.S(i.gD(k),"base_updated"))
i=h==null?A.a7(J.S(i.gD(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.Y("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.dG(p.f,i,h)
g.j(0,"id",a2)
f=J.v(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.M(a4,A.dp(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bK(n?B.o:o.e,g)
d=A.N(a4,A.n(a4).c)
B.b.aO(d)
c=A.ah(A.bg(e,g))
s=13
return A.a(a0.M("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a7(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aM("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bz(a8)?14:16
break
case 14:a4=p.a.a
b=a4.ch.$0()
h=f?B.L:B.u
e=B.h.a7(d,null)
a4=a4.CW
a4===$&&A.A()
s=18
return A.a(a0.aE(0,"lp_outbox",A.FB(l,j,b,e,h,a4.fP(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.M("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a0(new A.a1(a1,A.as([a2],i)))
a6.a0(new A.a1("lp_conflicts",A.as([a2],i)))
a4=o.d
a=A.bK(a4,g)
a.H(0,"id")
a6.bc(new A.aV(a1,a2,B.ac,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.mQ.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dR(null,null,t.n6)
n.ay=A.dR(null,null,t.em)}n.z=!0
s=3
return A.a(n.aS(B.dn),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.iR(),$async$az)
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
n.fr=new A.aT(l,A.n(l).i("aT<1>")).aK(n.gxn())
l=n.b.ax
n.fx=new A.aT(l,A.n(l).i("aT<1>")).aK(n.gxl())
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
case 12:n.fy=A.E0(B.ax,new A.wj(n))
s=14
return A.a(n.aS(n.dN()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.da(),$async$az)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$az,r)},
aG(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1;++p.db
o=p.fy
if(o!=null)o.C()
o=p.go
if(o!=null)o.C()
o=p.id
if(o!=null)o.C()
o=p.k1
if(o!=null)o.C()
s=3
return A.a(p.k4,$async$aG)
case 3:s=4
return A.a(p.dx,$async$aG)
case 4:s=5
return A.a(p.dy.a,$async$aG)
case 5:s=6
return A.a(p.p2,$async$aG)
case 6:o=p.fr
o=o==null?null:o.C()
n=t.H
s=7
return A.a(o instanceof A.t?o:A.bd(o,n),$async$aG)
case 7:o=p.fx
o=o==null?null:o.C()
s=8
return A.a(o instanceof A.t?o:A.bd(o,n),$async$aG)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.a3
o.u(0,B.a3)
s=12
return A.a(p.ax.p(),$async$aG)
case 12:s=10
break
case 11:p.y=B.a3
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.p(),$async$aG)
case 15:case 14:p.y=B.a3
case 1:return A.e(q,r)}})
return A.f($async$aG,r)},
dN(){if(this.at)return B.bi
if(this.Q)return B.bg
if(this.as)return B.aE
return B.bh},
aS(a){return this.va(a)},
va(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.u(0,a)
s=3
return A.a(p.qm(),$async$aS)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aS,r)},
qm(){return this.p2=this.p2.ao(new A.wb(this),t.H)},
h2(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$h2=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.ih(),$async$h2)
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
if((g.c&4)===0)g.u(0,new A.h9(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h2,r)},
xo(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.uO(B.ae)},
xm(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dx.I(s))return
r=a.c
if(r!=null&&a.b===B.a9){q.p1.push("fast:"+s)
q.dx=q.dx.ao(new A.wh(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hW(B.ae,A.l([s],t.s))},
h7(a){return this.qu(a)},
qu(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h7=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hW(B.ae,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.A()
s=7
return A.a(l.ir(a),$async$h7)
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
break}if(!m)n.hW(B.ae,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h7,r)},
xx(){if(!this.z)return
this.p1.push("cycle")
this.da()},
hW(a,b){var s=this,r=s.go
if(r!=null)r.C()
if(b==null)s.k2=!0
else s.k3.E(0,b)
s.go=A.cS(a,new A.wg(s))},
uO(a){return this.hW(a,null)},
uN(a){var s=this.id
if(s!=null)s.C()
this.id=A.cS(B.D,new A.wf(this,a))},
k_(){this.as=!0
this.aS(B.aE)
A.it(this.d,t.H)},
em(){var s=0,r=A.h(t.H),q,p=this,o
var $async$em=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.CW
o===$&&A.A()
s=3
return A.a(o.yC(),$async$em)
case 3:s=4
return A.a(p.aS(p.dN()),$async$em)
case 4:p.p1.push("cycle")
s=5
return A.a(p.da(),$async$em)
case 5:case 1:return A.e(q,r)}})
return A.f($async$em,r)},
fV(a){return this.oM(a)},
oM(a){var s=0,r=A.h(t.H),q=this,p
var $async$fV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.C()
q.k1=A.cS(B.av,new A.wi(q))
s=3
break
case 4:s=5
return A.a(q.aS(B.bg),$async$fV)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fV,r)},
bt(){var s=0,r=A.h(t.H),q=this
var $async$bt=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aS(B.bi),$async$bt)
case 2:return A.e(null,r)}})
return A.f($async$bt,r)},
be(){var s=0,r=A.h(t.H),q,p=this
var $async$be=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aS(p.dN()),$async$be)
case 3:p.p1.push("cycle")
s=4
return A.a(p.da(),$async$be)
case 4:case 1:return A.e(q,r)}})
return A.f($async$be,r)},
kb(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.C()}s=t.mv
r=q.k4.ao(new A.wc(q,a),s)
q.k4=r.bE(new A.wd(),new A.we(),s)
return r},
da(){return this.kb(null)},
b7(a){return this.qj(a)},
qj(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b7=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.N
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aS(n.dN()),$async$b7)
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
return A.a(n.aS(B.dp),$async$b7)
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
return A.a(a5.dr(h),$async$b7)
case 14:g=c0
J.c1(m,h,g.b)
if(g.f&&g.b>0)J.aK(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.E(b4)
if(a5 instanceof A.c3){n.k_()
s=9
break}else if(a5 instanceof A.bu){f=a5
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
return A.a(n.aS(B.aE),$async$b7)
case 17:q=n.ok=new A.bl(m,B.al,0,0,0,0,!0)
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
return A.a(b3.dJ(e),$async$b7)
case 24:d=c0
for(b3=J.D(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.S(l,c.a)
if(a5==null)a5=0
J.c1(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.E(b5)
if(b3 instanceof A.bu){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aS(B.dq),$async$b7)
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
return A.a(b3.fA(),$async$b7)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b2("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b7)
case 36:a0=c0
if(J.ed(a0)&&typeof J.S(J.c2(a0),"last_error")=="string"){b3=J.S(J.c2(a0),"last_error")
b3.toString
n.ch=A.G(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.E(b6)
if(b3 instanceof A.c3)n.k_()
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
return A.a(b3.bw(),$async$b7)
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
break}if(J.ai(i)!==0)n.uN(i)
a9=k||a.f
b0=new A.aM(A.lf(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dN()
s=42
return A.a(n.aS(a9&&b1===B.bh?B.dr:b1),$async$b7)
case 42:q=n.ok=new A.bl(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b7,r)}}
A.wj.prototype={
$1(a){return this.a.xx()},
$S:49}
A.wb.prototype={
$1(a){return this.a.h2()},
$S:42}
A.wh.prototype={
$1(a){return this.a.h7(this.b)},
$S:42}
A.wg.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.N(q,A.n(q).c)
s.k2=!1
q.aa(0)
if(r||p.length===0)s.da()
else s.kb(p)},
$S:0}
A.wf.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.kb(this.b)},
$S:0}
A.wi.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aS(p.dN()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.da(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.wc.prototype={
$1(a){return this.a.b7(this.b)},
$S:123}
A.wd.prototype={
$1(a){return B.N},
$S:124}
A.we.prototype={
$1(a){return B.N},
$S:125}
A.d6.prototype={
l(a){return"MapFailure: "+this.a},
$iH:1}
A.eC.prototype={}
A.Ax.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.Ay.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.tW.prototype={}
A.dK.prototype={}
A.lS.prototype={}
A.zl.prototype={}
A.zj.prototype={}
A.xE.prototype={}
A.u2.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.u1(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:127}
A.tX.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.tY.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.tZ.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.u_.prototype={
$1(a){return a instanceof A.t?a:A.bD(a,t.X)},
$S:128}
A.u0.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.eZ(s,s.r,A.n(s).c),r=this.b,q=J.L(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:129}
A.uj.prototype={
fa(a){return this.wF(a)},
wF(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fa=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.ch.$0()
e=e.r
s=3
return A.a(e.yi("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$fa)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.D(o);l.k();)m.push(A.Im(l.gn()))
l=A.aP(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.r)(m),++j){i=m[j].z
if(i!=null)l.u(0,i)}s=4
return A.a(A.ks(e,l),$async$fa)
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
return A.f($async$fa,r)},
nB(a){return this.a.a2(new A.ul(a),t.H)},
xV(a,b,c,d){return this.a.a2(new A.um(c,d,b,a),t.H)}}
A.ul.prototype={
$1(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.um.prototype={
$1(a){return this.od(a)},
od(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pd.prototype={}
A.iI.prototype={}
A.ja.prototype={}
A.uo.prototype={
fP(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cN(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
eu(a,b,c){return this.yr(a,b,c)},
yr(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$eu=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$eu)
case 3:p=e
o=J.L(p)
q=o.gF(p)?null:A.m8(o.gD(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eu,r)},
bY(a,b,c){return this.yt(a,b,c)},
yt(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bY)
case 3:p=e
o=J.L(p)
q=o.gF(p)?null:A.jr(o.gD(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bY,r)},
bp(a,b,c,d,e,f,g,h,i,j,k,l){return this.vH(a,b,c,d,e,f,g,h,i,j,k,l)},
vH(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bp=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a4)throw A.b(A.Df("Record "+a2+"/"+a9+u.W))
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
return A.a(a8.Y("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bp)
case 5:s=6
return A.a(a8.Y("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bp)
case 6:s=7
return A.a(p.i_(a8,a2,a9),$async$bp)
case 7:s=8
return A.a(a8.Y(a2,"id = ?",[a9]),$async$bp)
case 8:q=B.bL
s=1
break
case 4:k=p.a.ch.$0()
j=a4?null:b2.w
if(j==null)j=p.fP()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
l=t.N
f=A.aP(l)
e=a4?null:b2.r
if(e!=null)f.E(0,e)
f.E(0,a7)
d=A.N(f,f.$ti.c)
B.b.aO(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a7(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.hZ(B.X)
e=B.b.B(A.af(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aF("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.G_(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bp)
case 12:s=10
break
case 11:s=13
return A.a(a8.aF('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bp)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.E(f,B.cv)
if(o)B.b.E(f,B.cj)
s=a3?14:16
break
case 14:a3=A.hZ(B.W)
l=B.b.B(A.af(16,"?",!1,l),", ")
s=17
return A.a(a8.aF("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.Gb(B.a5,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bp)
case 17:s=15
break
case 16:for(a3=f.length,a0=0,l="UPDATE lp_sync_row SET ";a0<a3;++a0){if(a0>0)l+=", "
l+='"'+f[a0]+'" = ?'}a3=l+' WHERE "store" = ? AND "record_id" = ?'
a1=["dirty",b,a+1,j,a1.b]
if(a4)B.b.E(a1,[i,h,g])
if(o)B.b.E(a1,[0,0,null])
a1.push(a2)
a1.push(a9)
s=18
return A.a(a8.aF(a3.charCodeAt(0)==0?a3:a3,a1),$async$bp)
case 18:case 15:q=new A.iI()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bp,r)},
i_(a,b,c){return this.vi(a,b,c)},
vi(a,b,c){var s=0,r=A.h(t.H)
var $async$i_=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cB(a,b,c,!1),$async$i_)
case 2:return A.e(null,r)}})
return A.f($async$i_,r)},
fb(a,b){return this.wG(a,b)},
wG(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a2("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.N([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ad("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$fb)
case 3:o=d
f=J.L(o)
if(f.gF(o)){q=B.cD
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gt(o);f.k();)n.push(A.m8(f.gn()))
f=A.aP(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l].z
if(k!=null)f.u(0,k)}s=4
return A.a(A.ks(g,f),$async$fb)
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
return A.f($async$fb,r)},
lq(a){if(a.length===0)return A.bD(null,t.H)
return this.a.a2(new A.uu(this,a),t.H)},
aI(a,b){return this.v_(a,b)},
v_(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aI=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.ae(a0).a
a4=a2.ch.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aM("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 5:o=a9
n=J.L(o)
s=!(n.gW(o)&&!J.v(J.S(n.gD(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aI)
case 8:m=a9
n=J.L(m)
l=n.gW(m)?A.ch(a3,n.gD(m),a2.ax,a2.ay):null
s=9
return A.a(b.M(a,A.dp(a3,J.v(a5.h(0,"archived"),!0),a2.ax,a2.ay,a1,a5),"id = ?",[a1]),$async$aI)
case 9:a6.a0(new A.a1(a0,A.as([a1],t.N)))
k=A.bK(l==null?B.o:l,a5)
k.H(0,"id")
a6.bc(new A.aV(a0,a1,B.ac,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aI)
case 10:j=a9
a5=J.L(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 13:s=14
return A.a(p.d6(b,a0,a1,a7.c,a4),$async$aI)
case 14:a6.a0(new A.a1(a0,A.as([a1],t.N)))
s=1
break
case 12:n=a2.ax
a2=a2.ay
i=A.ch(a3,a5.gD(j),n,a2)
h=A.aq(B.j.v(B.e.v(A.ah(A.bg(a3,i)))).a)
a5=a7.b
g=A.aq(B.j.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 18:s=19
return A.a(p.d6(b,a0,a1,a7.c,a4),$async$aI)
case 19:a6.a0(new A.a1(a0,A.as([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aA(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.ba(d,a5,f):A.w(a5,f)
s=23
return A.a(b.M(a,A.dp(a3,J.v(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aI)
case 23:s=24
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 24:s=25
return A.a(p.d6(b,a0,a1,a7.c,a4),$async$aI)
case 25:a6.a0(new A.a1(a0,A.as([a1],a5)))
k=A.bK(i,c)
k.H(0,"id")
a6.bc(new A.aV(a0,a1,B.ac,B.A,i,c,k))
s=21
break
case 22:g=A.aq(B.j.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.M("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 26:s=27
return A.a(b.M("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 27:s=28
return A.a(b.M(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aI)
case 28:a6.a0(new A.a1(a0,A.as([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aI,r)},
d6(a,b,c,d,e){return this.tx(a,b,c,d,e)},
tx(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d6=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.M("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d6)
case 2:s=3
return A.a(a.M(q.a.ae(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d6)
case 3:return A.e(null,r)}})
return A.f($async$d6,r)},
yu(a,b,c,d,e){return this.a.a2(new A.us(c,e,d,B.G,a,b),t.H)},
nA(a,b,c,d,e,f){return this.a.a2(new A.ur(this,c,f,b,a,d,e),t.H)},
fo(a,b,c,d,e){return this.nA(a,b,c,d,B.ao,e)},
nz(a,b,c){return this.a.a2(new A.uq(a,c,b),t.H)},
yC(){return this.a.a2(new A.ut(null),t.S)},
f6(a,b,c,d,e,f,g){return this.vE(a,b,c,d,e,f,g)},
vE(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$f6=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.M("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$f6)
case 2:p=A.w(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.M("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$f6)
case 3:return A.e(null,r)}})
return A.f($async$f6,r)}}
A.uu.prototype={
$1(a){return this.oi(a)},
oi(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
case 5:case 3:l.length===k||(0,A.r)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.us.prototype={
$1(a){return this.og(a)},
og(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.ur.prototype={
$1(a){return this.of(a)},
of(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
$S:6}
A.uq.prototype={
$1(a){return this.oe(a)},
oe(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.M("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.ut.prototype={
$1(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.M("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:130}
A.ef.prototype={
a5(){return"ApplyResult."+this.b}}
A.mj.prototype={}
A.v3.prototype={
dr(a){return this.yd(a)},
yd(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dr=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iV(b4),$async$dr)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.GM().ef(n)
if(m==null)A.u(A.bt('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aH(k)
k=l[2]
k.toString
i=A.aH(k)
k=l[3]
k.toString
h=A.aH(k)
k=l[4]
k.toString
g=A.aH(k)
k=l[5]
k.toString
f=A.aH(k)
k=l[6]
k.toString
e=A.aH(k)
l=l[7]
l.toString
d=A.aH(l)
if(i<1||i>12||g>23||f>59||e>59)A.u(A.bt('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.Bs(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.uV(k))A.u(A.bt('Bad timestamp "'+n+'"'))
o=A.M6(A.Bs(j,i,h,g,f,e,d).jo(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.j_(B.c.bS(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dx,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.y
a4===$&&A.A()
s=6
return A.a(a4.fn(b4,null,a2,o,null,b),$async$dr)
case 6:a5=b6
a4=J.L(a5)
if(a4.gF(a5)){s=5
break}++a.ax
a6=p.tz(a5)
a7=k.h(0,b4)
if(a7==null)A.u(A.x(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.CJ(a7.a,a5),$async$dr)
case 8:s=7
return A.a(b0.aY(new b1.vb(b2,p,b3,b6,a6),l),$async$dr)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mj(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
mS(a,b){var s=B.a.a1(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a1(a.a,b.b)<=0},
vb(a,b){var s=B.a.a1(a.c,b.c)
if(s!==0)return s>0
return B.a.a1(a.a,b.a)>0},
tz(a){var s,r,q,p=J.aB(a),o=p.gD(a)
for(p=p.bj(a,1),s=p.$ti,p=new A.aj(p,p.gm(0),s.i("aj<V.E>")),s=s.i("V.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.vb(q,o))o=q}return o},
ir(a){return this.wV(a)},
wV(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$ir=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aY(new A.v5(o,p,a),t.P),$async$ir)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
dj(a,b){return this.wY(a,b)},
wY(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dj=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bT(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dx,e=n.b,d=A.a0(j),c=d.c,d=d.i("cv<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cv(j,0,200,d)
a2.jj(j,0,200,c)
a3=a2.dz(0)
a4=a3.length
b&1&&A.J(j,18)
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
return A.a(a7.c_(l),$async$dj)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.E(b1)
if(a7 instanceof A.cK){J.aK(m,l)
s=6
break}else if(a7 instanceof A.c3)throw b1
else if(a7 instanceof A.bu){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aK(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.r)(a3),++a6
s=5
break
case 7:s=J.ai(m)!==0?13:14
break
case 13:s=15
return A.a(n.fq(b2,m),$async$dj)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.u(A.x(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.r)(a5),++a6)a2.push(A.CK(b0,a5[a6]))
s=16
return A.a(i.aY(new A.v7(n,a2,b2,b0),h),$async$dj)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dj,r)},
dY(a,b,c,d){return this.u6(a,b,c,d)},
u6(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dY=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.w(c,t.nw)
a=A.w(c,t.G)
o=p.a,n=o.ax,m=o.ay,o=o.dx,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.U(a4,k,B.c.bS(i,0,j))
g=B.b.B(A.af(h.length,"?",!1,c),", ")
j=[a2]
B.b.E(j,h)
a0=J
s=6
return A.a(a1.ad(u.m+g+")",j),$async$dY)
case 6:j=a0.D(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.G(e),A.jr(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.u(A.x(l))
a0=J
s=9
return A.a(a1.cj(d.a.a,"id IN ("+g+")",h),$async$dY)
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
n_(a,b,c,d,e){return this.a6(a,b,A.CK(this.a.ae(b).a,c),null,!1,d,e)},
vJ(a,b,c){return this.n_(a,b,c,null,!1)},
a6(a,b,c,d,e,f,g){return this.vI(a,b,c,d,e,f,g)},
mZ(a,b,c){return this.a6(a,b,c,null,!1,null,!1)},
vI(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a6=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.ae(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bN(a4,a7,b2,a8,a9),$async$a6)
case 5:q=B.a7
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
return A.a(n.bN(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a6)
case 8:q=B.a7
s=1
break
case 7:g=a8.a
f=$.oU()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bN(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a6)
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
return A.a(g.bY(a4,b2,a8.a),$async$a6)
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
d=g.gF(c)?null:A.ch(a7,g.gD(c),a5.ax,a5.ay)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dq(a4,a8.a,a8.e,b2),$async$a6)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.H0(a4,a6.a,A.dp(a7,J.v(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9)),$async$a6)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.dd(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a6)
case 26:b1.a0(new A.a1(b2,A.as([a8.a],t.N)))
b=A.bK(B.o,a9)
b.H(0,"id")
b1.bc(new A.aV(b2,a8.a,B.at,B.ab,null,a9,b))
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
return A.a(n.c6(b1,b2,a8.a,a8.c,!1),$async$a6)
case 31:q=B.a8
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.M(a6.a,A.dp(a7,J.v(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9),"id = ?",[a8.a]),$async$a6)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.dd(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a6)
case 33:b1.a0(new A.a1(b2,A.as([a8.a],t.N)))
b=A.bK(d,a9)
b.H(0,"id")
b1.bc(new A.aV(b2,a8.a,B.at,B.A,d,a9,b))
q=B.a6
s=1
break
case 28:s=a===B.G||a===B.bj||a===B.a4?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.c6(b1,b2,a8.a,a8.c,!1),$async$a6)
case 38:q=B.a8
s=1
break
case 37:s=a===B.a4?39:40
break
case 39:s=41
return A.a(n.c6(b1,b2,a8.a,a8.c,!1),$async$a6)
case 41:q=B.a8
s=1
break
case 40:a0=A.bg(a7,d)
s=A.ah(a0)===i?42:43
break
case 42:s=44
return A.a(a4.Y("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a6)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.dd(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a6)
case 45:b1.a0(new A.a1(b2,A.as([a8.a],t.N)))
q=B.a6
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
a5=A.E(b0)
s=a5 instanceof A.d6?50:52
break
case 50:k=a5
s=53
return A.a(n.bN(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a6)
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
a9=A.FY(l,a0,new A.lS(null,B.Y,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bd(a9,t.r),$async$a6)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.f_(a4,b2,a8,a7,m,a0,l,a2),$async$a6)
case 57:s=58
return A.a(n.c6(b1,b2,a8.a,a8.c,!1),$async$a6)
case 58:a5=t.N
b1.a0(new A.a1(b2,A.as([a8.a],a5)))
b1.a0(new A.a1("lp_conflicts",A.as([a8.a],a5)))
q=B.bs
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.M(a6.a,A.dp(a7,J.v(a3.h(0,"archived"),!0),a5.ax,a5.ay,a9,a3),"id = ?",[a8.a]),$async$a6)
case 59:a5=a5.CW
a5===$&&A.A()
s=60
return A.a(a5.f6(a4,b2,a8.a,h,i,a8.c,A.ah(a3)),$async$a6)
case 60:s=61
return A.a(n.v8(b1,b2,a8.a,a8.c),$async$a6)
case 61:b1.a0(new A.a1(b2,A.as([a8.a],t.N)))
b=A.bK(d,a3)
b.H(0,"id")
b1.bc(new A.aV(b2,a8.a,B.ac,B.A,d,a3,b))
q=B.a6
s=1
break
case 35:q=B.a8
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a6,r)},
f_(a,b,c,d,e,f,g,h){return this.uy(a,b,c,d,e,f,g,h)},
uy(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$f_=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bg(d,A.fd(d,c))
k=A.bK(g,f)
j=A.N(k,A.n(k).c)
B.b.aO(j)
k=A.bK(g,l)
p=A.N(k,A.n(k).c)
B.b.aO(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ah(g)
n=t.N
m=t.X
s=2
return A.a(a.cd(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ah(f),"remote_json",A.ah(l),"dirty_local",B.h.a7(j,null),"dirty_remote",B.h.a7(p,null),"detected_at",q.c.ay.$0()],n,m),B.Q),$async$f_)
case 2:s=3
return A.a(a.M("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ah(l),"base_hash",A.aq(B.j.v(B.e.v(A.ah(A.bg(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$f_)
case 3:return A.e(null,r)}})
return A.f($async$f_,r)},
bN(a,b,c,d,e){return this.ur(a,b,c,d,e)},
ur(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bN=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a7(d.d,null)}catch(a1){o=t.N
e=B.h.a7(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aE(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bN)
case 2:j=q.a.CW
j===$&&A.A()
s=3
return A.a(j.bY(a,c,m),$async$bN)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.N(o.ne(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aE(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bN)
case 7:s=5
break
case 6:s=8
return A.a(a.M("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bN)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bN,r)},
dd(a,b,c,d,e,f,g,h){return this.vh(a,b,c,d,e,f,g,!0)},
vh(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$dd=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.ae(b)
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
return A.a(a.aE(0,"lp_sync_row",o),$async$dd)
case 5:s=3
break
case 4:s=6
return A.a(a.M("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$dd)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dd,r)},
c6(a,b,c,d,e){return this.v9(a,b,c,d,e)},
v8(a,b,c,d){return this.c6(a,b,c,d,!0)},
v9(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c6=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.w(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.M("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c6)
case 2:s=3
return A.a(p.M(q.a.ae(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c6)
case 3:if(g>0)a.a0(new A.a1(b,A.as([c],o)))
return A.e(null,r)}})
return A.f($async$c6,r)},
fq(a,b){return this.xW(a,b)},
xW(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bT(b,!0,t.N)
n=A.a0(o),m=n.c,n=n.i("cv<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cv(o,0,500,n)
i.jj(o,0,500,m)
h=i.dz(0)
g=h.length
l&1&&A.J(o,18)
A.bc(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aY(new A.v9(p,a,h),j),$async$fq)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fq,r)}}
A.vb.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.va(s.a,r,s.c,s.d,s.e),t.P)},
$S:18}
A.va.prototype={
$1(a){return this.oo(a)},
oo(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.ae(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.aB(p),n=o.gt(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dY(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aP(t.N)
a2=o.gt(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mS(i,c)){s=3
break}p=i.a
s=j.G(0,p)?5:7
break
case 5:s=8
return A.a(a.mZ(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.mS(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eA(b,a1,e,f),$async$$1)
case 10:d.a=new A.j8(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.v5.prototype={
$0(){var s=this.b
return s.a.a2(new A.v4(this.a,s,this.c),t.P)},
$S:18}
A.v4.prototype={
$1(a){return this.ol(a)},
ol(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.CW
k===$&&A.A()
o=p.c
n=o.b
s=3
return A.a(k.bY(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.vJ(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a1(o.c,k)<=0){s=1
break}s=7
return A.a(l.n_(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.v7.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.v6(r,s.b,s.c,s.d),t.P)},
$S:18}
A.v6.prototype={
$1(a){return this.om(a)},
om(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
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
i=A.aP(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.G(0,g)?6:8
break
case 6:s=9
return A.a(o.mZ(a,m,h),$async$$1)
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
$S:5}
A.v9.prototype={
$0(){var s=this.a
return s.a.a2(new A.v8(s,this.b,this.c),t.P)},
$S:18}
A.v8.prototype={
$1(a){return this.on(a)},
on(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.ae(g).a
e=h.ae(g).a.a
d=q.c
c=t.N
b=B.b.B(A.af(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.w(c,t.G)
a1=J
s=2
return A.a(i.cj(e,a,d),$async$$1)
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
B.b.E(o,d)
s=5
return A.a(i.M("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.M(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a0(new A.a1(g,A.tC(d,A.a0(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.r)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dF(null,null,c,h)
p.E(0,j)
p.j(0,"hidden",!0)
a2.bc(new A.aV(g,k,B.at,B.bU,j,p,B.de))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b5.prototype={}
A.vc.prototype={
fA(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.CW
f===$&&A.A()
s=3
return A.a(f.fb(25,p.c.ay.$0()),$async$fA)
case 3:o=b
f=J.L(o)
if(f.gF(o)){q=B.a1
s=1
break}if(p.f){q=p.b9(o)
s=1
break}f=f.gt(o),n=B.a1
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dZ(f.gn()),$async$fA)
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
return A.f($async$fA,r)},
dZ(a){return this.uj(a)},
uj(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.CW
l===$&&A.A()
m=m.r
s=3
return A.a(l.eu(m,a.a,a.b),$async$dZ)
case 3:o=c
if(o==null){q=B.a1
s=1
break}s=4
return A.a(l.bY(m,o.a,o.b),$async$dZ)
case 4:n=c
if(n==null){q=B.a1
s=1
break}if(o.e==null){q=p.uh(o,n)
s=1
break}q=p.k5(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
bK(a,b,c,d,e){return this.rF(a,b,c,d,e)},
rE(a,b,c,d){return this.bK(a,b,c,!1,d)},
rC(a,b,c){return this.bK(a,b,c,!1,!1)},
rD(a,b,c,d){return this.bK(a,b,c,d,!1)},
rF(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
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
k=A.E(i)
s=k instanceof A.c3?8:10
break
case 8:n.e.$0()
q=B.an
s=1
break
s=9
break
case 10:s=k instanceof A.cG?11:13
break
case 11:k=n.a.CW
k===$&&A.A()
s=14
return A.a(k.nz("forbidden_push",a.b,a.a),$async$bK)
case 14:q=B.cY
s=1
break
s=12
break
case 13:s=k instanceof A.fL?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.d1(a,"validation_push",m.a),$async$bK)
case 20:q=B.M
s=1
break
case 19:q=n.cw(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cK){q=n.dS(a,b,!e)
s=1
break}else if(k instanceof A.bu){l=k
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
k0(a,b,c){return this.ui(a,b,c)},
uh(a,b){return this.k0(a,b,!1)},
ui(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$k0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bK(a,b,new A.ve(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k0,r)},
k8(a,b,c){return this.uz(a,b,c)},
uz(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$k8=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.rE(a,b,new A.vj(p,a,p.a.ae(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k8,r)},
k5(a,b){return this.uk(a,b)},
uk(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$k5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.rC(a,b,new A.vh(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k5,r)},
d8(a,b,c,d){return this.um(a,b,c,d)},
ul(a,b,c){return this.d8(a,b,c,!1)},
um(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d8=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.lH(a,c)
j=n.a.ae(a.a).a
i=a.d
s=A.aq(B.j.v(B.e.v(A.ah(A.bg(j,A.fd(j,c))))).a)===A.aq(B.j.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eY(a,c),$async$d8)
case 5:q=B.a2
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
i=A.E(f)
s=i instanceof A.d6?10:12
break
case 10:k=i
s=13
return A.a(n.d1(a,"corrupt_payload",k.a),$async$d8)
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
return A.a(n.dV(a,b,c,j,m,l),$async$d8)
case 14:g=a0
if(g==null){q=B.ba
s=1
break}q=n.bK(a,b,new A.vf(n,a,A.ah(A.bg(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d8,r)},
b9(a){return this.ug(a)},
ug(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
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
return A.a(a2.eu(a0,a1.a,a1.b),$async$b9)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bY(a0,m.a,m.b),$async$b9)
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
return A.a(a5.c_(a1),$async$b9)
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
return A.a(n.mb(m,l),$async$b9)
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
case 14:s=a1 instanceof A.c3?18:20
break
case 18:n.e.$0()
q=B.an
s=1
break
s=19
break
case 20:s=a1 instanceof A.cG?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.nz("forbidden_push",m.b,a1),$async$b9)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bu?25:27
break
case 25:i=a1
s=28
return A.a(n.cw(m,l,i),$async$b9)
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
if(a1!==a5)A.u(A.ez('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a2("")
A.ci(a7,A.bg(a4,A.fd(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c5()
a5=A.cZ(a8)
a5.u(0,a1)
a5.p()
a9=A.aq(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c5()
a1=A.cZ(a8)
a1.u(0,a5)
a1.p()
s=a9===A.aq(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eY(m,k),$async$b9)
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
a1=A.E(c9)
s=a1 instanceof A.d6?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fo(e.a,a5,"corrupt_payload",m.d,a1),$async$b9)
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
a7=new A.a2("")
A.ci(a7,A.bg(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.fP(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.fP(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.c5(B.b.U(b9,b5,b7<b6?b7:b6),c1,c7),$async$b9)
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
dV(a,b,c,d,e,f){return this.tA(a,b,c,d,e,f)},
tA(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dV=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.fd(d,c)
n=A.FY(e,f,new A.lS(null,B.Y,!1),a.b,A.bg(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bd(n,t.r),$async$dV)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hQ(a,b,c,m,e,f),$async$dV)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
c5(a,b,c){return this.uU(a,b,c)},
uU(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c5=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.y
a7===$&&A.A()
s=7
return A.a(a7.fz(b9),$async$c5)
case 7:m=c3
a7=t.N
l=A.w(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.r)(b9),++a9){k=b9[a9]
J.c1(l,k.a,k)}j=l
i=A.aP(a7)
for(l=J.D(m);l.k();){h=l.gn()
if(!J.aK(i,h.a)){l=A.bt("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.bt("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.D(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.S(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jV(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c5()
b2=A.cZ(b1)
b2.u(0,b0)
b2.p()
b2=A.aq(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aK(g,new A.ja(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
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
return A.a(a8.fo(b4,b2,b3,e.d,b0),$async$c5)
case 13:++b7
case 11:s=8
break
case 9:l=a7.CW
l===$&&A.A()
s=14
return A.a(l.lq(g),$async$c5)
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
s=l instanceof A.eg?15:17
break
case 15:q=n.c2(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cG?18:20
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
return A.a(n.dZ(n.mi(a0)),$async$c5)
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
case 20:s=l instanceof A.c3?25:27
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
a3=a2 instanceof A.eI?a2:new A.hc("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.CW
b0===$&&A.A()
s=34
return A.a(b0.bY(a8,a4.b,a4.c),$async$c5)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cw(n.mi(a4),a5,a3),$async$c5)
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
return A.f($async$c5,r)},
c2(a,b,c){return this.pC(a,b,c)},
pC(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$c2=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.L(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gar(b5)
h=n.a.CW
h===$&&A.A()
b3=g.b
s=5
return A.a(h.fo("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$c2)
case 5:q=B.M
s=1
break
case 4:a0=B.c.N(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.U(b5,0,a0),b3.b6(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.y
a6===$&&A.A()
s=13
return A.a(a6.fz(j),$async$c2)
case 13:i=b9
h=A.w(a2,a4)
for(a6=J.D(j);a6.k();){g=a6.gn()
J.c1(h,g.a,g)}f=h
e=A.aP(a2)
for(a6=J.D(i);a6.k();){d=a6.gn()
if(!J.aK(e,d.a)){a6=A.bt("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.bt("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.D(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.S(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jV(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.e_(a7,a8,a9,b0==null?b.d:b0),$async$c2)
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
return A.a(a7.fo(b1,a9,b0,b.d,a8),$async$c2)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.E(b4)
s=a6 instanceof A.eg?21:23
break
case 21:s=24
return A.a(n.c2(j,b6,b7),$async$c2)
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
return A.f($async$c2,r)},
jV(a,b){var s=b==null?a.d:b
return new A.cp(a.b,a.c,B.u,s,a.e,A.aq(B.j.v(B.e.v(a.d)).a),B.p,a.a,0,null)},
mi(a){return this.jV(a,null)},
e_(a,b,c,d){return this.uZ(a,b,c,d)},
eY(a,b){return this.e_(a,b,null,null)},
uZ(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$e_=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.ae(a.a).a
n=A.fd(o,b)
m=d==null
l=m?A.ah(A.bg(o,n)):d
p=p.CW
p===$&&A.A()
s=2
return A.a(p.lq(A.l([new A.ja(a,l,b.c,A.aq(B.j.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$e_)
case 2:return A.e(null,r)}})
return A.f($async$e_,r)},
lH(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ez('record id "'+s+'" does not match requested "'+r+'"'))},
cw(a,b,c){return this.uH(a,b,c)},
uH(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cw=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.eI?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.CW
o===$&&A.A()
s=5
return A.a(o.nA(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$cw)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.nf(l,k)
m=p.a.CW
m===$&&A.A()
s=6
return A.a(m.yu(a.a,a.b,l,c.a,o.ay.$0()+B.c.N(n.a,1000)),$async$cw)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cw,r)},
d1(a,b,c){return this.qa(a,b,c)},
q9(a,b){return this.d1(a,b,null)},
qa(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d1=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.CW
o===$&&A.A()
p=c==null?b:c
s=2
return A.a(o.fo(p,a.b,b,a.d,a.a),$async$d1)
case 2:return A.e(null,r)}})
return A.f($async$d1,r)},
dS(a,b,c){return this.rr(a,b,c)},
mb(a,b){return this.dS(a,b,!0)},
rr(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dS=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.ae(a.a)
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
i=A.E(h)
s=i instanceof A.d6?10:12
break
case 10:k=i
s=13
return A.a(n.d1(a,"corrupt_payload",k.a),$async$dS)
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
return A.a(n.h5(a,b,m,l),$async$dS)
case 14:q=B.ba
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dS,r)},
h5(a,b,c,d){return this.qq(a,b,c,d)},
qq(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$h5=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bK(c,d)
n=A.N(o,A.n(o).c)
B.b.aO(n)
p=b.r
if(p==null)p=A.ah(c)
s=2
return A.a(q.a.a2(new A.vd(q,a,p,d,n),t.P),$async$h5)
case 2:return A.e(null,r)}})
return A.f($async$h5,r)},
hQ(a,b,c,d,e,f){return this.ux(a,b,c,d,e,f)},
ux(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hQ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.ae(a.a).a
m=A.bg(n,A.fd(n,c))
l=A.bK(e,f)
k=A.N(l,A.n(l).c)
B.b.aO(k)
l=A.bK(e,m)
p=A.N(l,A.n(l).c)
B.b.aO(p)
s=2
return A.a(o.a2(new A.vi(q,a,b,e,f,m,k,p,n,c),t.P),$async$hQ)
case 2:return A.e(null,r)}})
return A.f($async$hQ,r)}}
A.ve.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.A()
s=7
return A.a(j.ik(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eY(k,m),$async$$0)
case 8:q=B.a2
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.E(h) instanceof A.fr){q=n.a.k8(n.b,n.c,n.d)
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
A.vj.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.A()
s=3
return A.a(l.c_(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.q9(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.aq(B.j.v(B.e.v(A.ah(A.bg(l,A.fd(l,o))))).a)===A.aq(B.j.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eY(m,o),$async$$0)
case 9:q=B.a2
s=1
break
case 8:q=n.d8(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.vh.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.A()
s=3
return A.a(l.c_(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.mb(m,p.c)
s=1
break}n.lH(m,o)
if(o.c===m.e){l=p.c
q=n.rD(m,l,new A.vg(n,m,o,l),!0)
s=1
break}q=n.ul(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.vg.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.A()
s=7
return A.a(j.fL(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eY(k,m),$async$$0)
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
A.vf.prototype={
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
return A.a(l.fL(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.e_(j,b,p.e.a,m),$async$$0)
case 3:q=B.a2
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.vd.prototype={
$1(a){return this.op(a)},
op(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cd(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ah(q.d),"remote_json",A.ah(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a7(q.e,null),"dirty_remote",B.h.a7(B.p,null),"detected_at",q.a.c.ay.$0()],k,j),B.Q),$async$$1)
case 2:s=3
return A.a(p.M("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a0(new A.a1(n,A.as([m],k)))
a.a0(new A.a1("lp_conflicts",A.as([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vi.prototype={
$1(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=q.b
j=k.a
k=k.b
p=q.c.r
if(p==null)p=A.ah(q.d)
o=q.f
n=t.N
m=t.X
s=2
return A.a(l.cd(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ah(q.e),"remote_json",A.ah(o),"dirty_local",B.h.a7(q.r,null),"dirty_remote",B.h.a7(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.Q),$async$$1)
case 2:s=3
return A.a(l.M("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ah(o),"base_hash",A.aq(B.j.v(B.e.v(A.ah(A.bg(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a0(new A.a1(j,A.as([k],n)))
a.a0(new A.a1("lp_conflicts",A.as([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.cb.prototype={
a5(){return"SyncEngineState."+this.b}}
A.bl.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.h9.prototype={}
A.h8.prototype={}
A.w8.prototype={
glJ(){return 36},
dJ(a){return this.pc(a)},
pc(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dJ=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dx,g=new A.bF(g,g.r,g.e,A.n(g).i("bF<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iW(m),$async$dJ)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glJ():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.am(c.a+1,n.glJ())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bI(m,a),$async$dJ)
case 13:a5.aK(a6,a9)
case 11:++j
s=10
break
case 12:if(A.eM(h)!=null)A.u(A.x(u.L))
b=h.b
b===$&&A.A()
s=14
return A.a(b.aV(new A.w9(c,n,m,a3),B.n,f),$async$dJ)
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
return A.f($async$dJ,r)},
bI(a,b){return this.pb(a,b)},
pb(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bI=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aP(t.N)
m=B.c.j_(B.c.bS(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.y
g===$&&A.A()
s=5
return A.a(g.fn(a4,B.cH,h,null,o,m),$async$bI)
case 5:f=a7
g=J.L(f)
if(g.gF(f)){s=4
break}for(e=g.gt(f);e.k();)n.u(0,e.gn().a)
e=A.l([],l)
for(d=g.gt(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hP(a4,e),$async$bI)
case 6:c=a7
b=A.l([],l)
for(e=g.gt(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aP||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dj(a4,b),$async$bI)
case 9:i+=b.length
case 8:h=g.ga_(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ad("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bI)
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
return A.a(j.fq(a4,a2),$async$bI)
case 13:case 12:s=14
return A.a(k.ad("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bI)
case 14:a3=a7
k=J.L(a3)
s=k.gW(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gt(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.G(g))}s=17
return A.a(j.dj(a4,l),$async$bI)
case 17:case 16:q=new A.h8(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bI,r)},
hP(a,b){return this.u9(a,b)},
u9(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.w(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.U(b,n,B.c.bS(l,0,m))
j=B.b.B(A.af(k.length,"?",!1,g),", ")
m=[a]
B.b.E(m,k)
e=J
s=6
return A.a(o.ad(u.m+j+")",m),$async$hP)
case 6:m=e.D(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.G(h),A.jr(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)}}
A.w9.prototype={
$1(a){return this.os(a)},
os(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eB(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bu.prototype={
l(a){return A.dr(this).l(0)+": "+this.a},
$iH:1}
A.hc.prototype={}
A.eI.prototype={}
A.jh.prototype={}
A.c3.prototype={}
A.cG.prototype={}
A.cK.prototype={}
A.fL.prototype={}
A.fN.prototype={}
A.fr.prototype={}
A.eg.prototype={}
A.h6.prototype={
gm(a){return this.b}}
A.cN.prototype={}
A.fP.prototype={}
A.j9.prototype={}
A.kJ.prototype={
a5(){return"BackendHintKind."+this.b}}
A.cD.prototype={}
A.AO.prototype={
$2(a,b){return B.a.iQ(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:133}
A.wa.prototype={
nf(a,b){var s,r
if(b!=null){s=this.tY(b)
if(A.an(s))return A.d2(0,0,s<0?0:s)
if(s instanceof A.aM){r=s.a-this.ay.$0()
return r<=0?B.D:A.d2(0,r,0)}return B.av}return A.FR(a,B.av,B.ax,this.at)},
ne(a){return this.nf(a,null)},
tY(a){var s=B.a.ck(a),r=A.j6(s,null)
if(r!=null)return r
return A.IX(s)}}
A.j8.prototype={}
A.jp.prototype={}
A.wl.prototype={
iV(a){return this.yq(a)},
yq(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.er("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iV)
case 3:m=c
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}o=A.a7(J.S(l.gD(m),"cursor_updated"))
n=A.a7(J.S(l.gD(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.j8(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iV,r)},
eA(a,b,c,d){return this.zg(a,b,c,d)},
zg(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eA=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eA)
case 5:s=m.bz(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eA)
case 6:s=3
break
case 4:s=7
return A.a(a.M("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eA)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eA,r)},
iW(a){return this.ys(a)},
ys(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.er("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iW)
case 3:n=c
m=J.L(n)
if(m.gF(n)){q=B.dl
s=1
break}o=A.be(J.S(m.gD(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jp(o,A.be(J.S(m.gD(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iW,r)},
eB(a,b,c,d){return this.zk(a,b,c,d)},
zk(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eB=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eB)
case 5:s=m.bz(f)?2:4
break
case 2:s=6
return A.a(a.aE(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eB)
case 6:s=3
break
case 4:s=7
return A.a(a.M("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eB)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eB,r)},
ih(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$ih=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b2("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$ih)
case 3:l=b
k=J.L(l)
j=k.gF(l)?B.o:k.gD(l)
k=A.be(j.h(0,"pending"))
if(k==null)k=0
o=A.be(j.h(0,"conflicts"))
if(o==null)o=0
n=A.be(j.h(0,"hidden"))
if(n==null)n=0
m=A.be(j.h(0,"blocked"))
q=new A.o4([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)}}
A.cR.prototype={
a5(){return"SyncState."+this.b}}
A.i3.prototype={
a5(){return"AccessState."+this.b}}
A.fK.prototype={
a5(){return"OutboxKind."+this.b}}
A.j3.prototype={
a5(){return"OpQueueKind."+this.b}}
A.B9.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cQ.prototype={}
A.wk.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
i=j.h(0,"record_id")
i.toString
A.G(i)
i=A.a7(j.h(0,"remote_updated"))
s=A.be(j.h(0,"last_seen_at"))
r=A.a7(j.h(0,"base_updated"))
A.a7(j.h(0,"base_hash"))
q=A.a7(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.ft(B.cn,A.G(p))
A.FK(j.h(0,"dirty_fields"))
o=A.be(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.ft(B.cl,A.G(n))
A.a7(j.h(0,"op_id"))
m=A.be(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.be(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a7(j.h(0,"last_error"))
A.be(j.h(0,"schema_ver"))
return new A.cQ(i,s,r,q,p,o,n,m,l,k)},
$S:134}
A.cp.prototype={}
A.up.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
s=j.h(0,"record_id")
s.toString
A.G(s)
r=j.h(0,"kind")
r.toString
r=A.ft(B.cw,A.G(r))
q=j.h(0,"payload_json")
q.toString
A.G(q)
p=A.a7(j.h(0,"base_updated"))
o=A.a7(j.h(0,"base_hash"))
if(o==null)o=""
n=A.FK(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.G(m)
l=j.h(0,"created_at")
l.toString
A.am(l)
k=j.h(0,"updated_at")
k.toString
A.am(k)
return new A.cp(i,s,r,q,p,o,n,m,l,A.a7(j.h(0,"depends_on_op")))},
$S:135}
A.eE.prototype={}
A.uk.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.am(l)
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
q=A.ft(B.cr,A.G(q))
p=m.h(0,"payload_json")
p.toString
A.G(p)
o=m.h(0,"state")
o.toString
A.G(o)
o=A.be(m.h(0,"attempt_count"))
if(o==null)o=0
A.be(m.h(0,"next_retry_at"))
A.a7(m.h(0,"last_error"))
n=A.a7(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.am(m)
return new A.eE(l,s,r,q,p,o,n)},
$S:136}
A.B7.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:53}
A.B8.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:53}
A.wy.prototype={}
A.l2.prototype={
jf(a){return a.a===this.w.a},
bT(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bT=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
s=3
return A.a(e.j0(p.x,p.y),$async$bT)
case 3:d=a1
c=p.Q
b=p.w
a=e.ax
e=e.ay
o=c!=null?A.CC(b,d,a,c,e):A.CB(b,d,a,e)
n=p.z
if(n==null){q=o
s=1
break}e=A.l([],t.d)
for(b=o.length,a=n.$ti,m=a.i("aj<I.E>"),a=a.i("I.E"),l=t.N,k=t.X,j=0;j<o.length;o.length===b||(0,A.r)(o),++j){i=o[j]
h=A.w(l,k)
for(g=new A.aj(n,n.gm(0),m);g.k();){f=g.d
if(f==null)f=a.a(f)
if(i.I(f))h.j(0,f,i.h(0,f))}e.push(h)}q=e
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bT,r)},
ie(a){return A.FC(a,new A.pQ(this),this.ax)},
kV(a){return this.as.$1(a)},
iN(a,b){return null}}
A.pQ.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.tD.prototype={
cL(a,b){return this.xe(a,b)},
xe(a,b){var s=0,r=A.h(t.X),q,p
var $async$cL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.ea(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cL,r)},
iP(a,b,c,d){return this.y6(a,b,c,d)},
y6(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$iP=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.y0(a6,a7)
a=t.N
a0=new A.ik(A.w(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.a7(A.G5(a2?null:A.oL(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.tE(a3)
a0.e=new A.tF(a3)
p=4
b.K("PRAGMA journal_mode=TRUNCATE")
f=b.fT("PRAGMA journal_mode")
n=f.gD(f).b[0]
if(J.a_(n).toLowerCase()!=="truncate"){a=A.x("journal_mode read-back was "+A.q(n)+", expected truncate")
throw A.b(a)}m=A.Mv(a2?null:A.oL(a8))
e=t.bE.a(J.S(m,"stores"))
l=e==null?A.l([],t.aw):e
d=A.be(J.S(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.ET(J.S(m,"destructiveBackup"))
j=f!==!1
i=A.Mu(A.G5(a2?null:A.oL(a8),"fieldCipher"))
if(A.Mb(l,i)){a=A.au("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.wW(A.w(a,t.p))
s=7
return A.a(A.d4(h,a0,j,i,k,a6,B.aC,l),$async$iP)
case 7:g=b0
a1=!0
a=b
a2=t.be
f=t.S
q=new A.lQ(a,new A.x7(a,g,A.w(f,t.oS),new A.wC(A.Mn(),A.w(f,t.oc)),A.aP(a2)),A.w(t.eg,a2))
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
return A.f($async$iP,r)}}
A.tE.prototype={
$1(a){return A.oE(this.a,a)},
$S:138}
A.tF.prototype={
$1(a){return A.oF(this.a,a)},
$S:139}
A.lQ.prototype={
cL(a,b){return this.xf(a,b)},
xf(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.BK(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.I7(n)
if(o==null){q=A.BK(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.iA(p.e.l0(a,new A.tO(a)),o),$async$cL)
case 3:q=m.I8(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cL,r)}}
A.tO.prototype={
$0(){return new A.hr(this.a)},
$S:140}
A.hr.prototype={$ink:1}
A.AJ.prototype={
$2(a,b){this.a.j(0,J.a_(a),A.c0(b))},
$S:26}
A.AD.prototype={
$2(a,b){this.a.j(0,J.a_(a),A.oN(b))},
$S:26}
A.cW.prototype={}
A.wC.prototype={
gnQ(){var s=this.r
return new A.ar(s,A.n(s).i("ar<2>")).x7(0,0,new A.wF())},
nm(){var s,r=this.r,q=A.n(r).i("ar<2>"),p=q.i("cn<o.E,i>"),o=A.N(new A.cn(new A.al(new A.ar(r,q),new A.wD(this.f.$0()),q.i("al<o.E>")),new A.wE(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.r)(o),++s)r.H(0,o[s])
return p}}
A.wF.prototype={
$2(a,b){return a+b.f},
$S:141}
A.wD.prototype={
$1(a){return!a.z.kO(this.a)},
$S:142}
A.wE.prototype={
$1(a){return a.a},
$S:143}
A.B1.prototype={
$1(a){return A.Mw(a)},
$S:144}
A.AT.prototype={
$1(a){return B.b.bR(a.c,new A.AS())},
$S:145}
A.AS.prototype={
$1(a){return a.e},
$S:54}
A.hj.prototype={
q(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.x0.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.x)},
$S:31}
A.nf.prototype={
q(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.q())
else q.j(0,"r",r.c)
return q}}
A.wY.prototype={
q(){var s,r=A.w(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.ii.prototype={
l(a){return"DatabaseWorkerClosedException: "+this.a},
$iH:1}
A.j7.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iH:1}
A.mq.prototype={
l(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iH:1}
A.X.prototype={
R(a,b,c){var s,r,q,p=this.a.h(0,a)
if(!c.b(p)){s=b==null?"":" for "+b
r=A.Eb(c)
q=p==null?"null":A.Ec(p)
throw A.b(A.bG('Missing or invalid "'+a+'" argument'+s+": expected "+r+", got "+q+"."))}return p},
X(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.bG('Invalid "'+a+'" argument: expected '+A.Eb(b)+", got "+A.Ec(s)+"."))
return b.a(s)}}
A.hk.prototype={}
A.jw.prototype={}
A.eQ.prototype={}
A.AG.prototype={
$2(a,b){var s,r,q=J.a_(a)
if(t.f.b(b))this.a.j(0,q,A.fb(b))
else{s=this.a
if(t.j.b(b)){r=J.aL(b,new A.AF(),t.z)
r=A.N(r,r.$ti.i("V.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:33}
A.AF.prototype={
$1(a){return t.f.b(a)?A.fb(a):a},
$S:36}
A.nj.prototype={
jF(a,b){return this.qL(a,b)},
qL(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$jF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.jy(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jF,r)},
mo(a){var s,r,q,p,o,n,m,l=a.h(0,"type"),k=a.h(0,"operation"),j=a.h(0,"compilerVersion"),i=a.h(0,"store"),h=a.h(0,"schemaVersion"),g=a.h(0,"schemaFingerprint"),f=a.h(0,"argumentCount"),e=a.h(0,"sql"),d=a.h(0,"args")
if(!J.v(l,"query_plan")||typeof k!="string"||!B.df.G(0,k)||!J.v(j,2)||typeof i!="string"||!A.an(h)||typeof g!="string"||!A.an(f)||typeof e!="string"||!t.j.b(d))throw A.b(A.bG("Malformed or stale compiled query plan."))
s=this.c.ae(i).a
r=A.aq(B.j.v(B.e.v(A.ah(s.q()))).a)
if(s.b!==h||r!==g||J.ai(d)!==f||!B.a.T(e,"SELECT "))throw A.b(A.bG("Stale or mismatched compiled query plan."))
q=a.h(0,"projection")
a.h(0,"limit")
a.h(0,"shape")
p=a.h(0,"decodeColumns")
l.toString
A.G(l)
o=t.X
n=J.aL(d,A.FF(),o)
n=A.N(n,n.$ti.i("V.E"))
o=A.cJ(n,o)
n=t.j
m=n.b(q)?J.i2(q,t.N):null
n=n.b(p)?J.i2(p,t.N):null
return new A.vt(k,i,e,o,m,n)},
jy(a){return this.qf(a)},
qf(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k,j
var $async$jy=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.mo(a)
n=a.h(0,"sessionId")
m=A.an(n)?new A.xa(p.cF(n)):new A.xb(p)
l=a.h(0,"pageLimit")
k=A.an(l)?l:null
j=p.c.d
j===$&&A.A()
q=A.AK(j.a.a,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jy,r)},
ct(a,b){return this.qG(a,b)},
qG(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$ct=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cD(),$async$ct)
case 3:o=p.f,n=new A.aU(o,o.r,o.e,A.n(o).i("aU<2>"))
case 4:if(!n.k()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$ct)
case 6:s=4
break
case 5:o.aa(0)
o=p.w
if(o!=null)o.C()
p.w=null
p.r.r.aa(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.aJ(new A.ii("Database closed."))
p.d=null
o=p.ax
o=o==null?null:o.C()
n=t.H
s=7
return A.a(o instanceof A.t?o:A.bd(o,n),$async$ct)
case 7:p.ax=null
o=p.ay
o=o==null?null:o.C()
s=8
return A.a(o instanceof A.t?o:A.bd(o,n),$async$ct)
case 8:p.ay=null
p.at.aa(0)
s=9
return A.a(p.c.p(),$async$ct)
case 9:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ct,r)},
hg(a,b){return this.qZ(a,b)},
qZ(a3,a4){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$hg=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a1=a4.d.h(0,"request")
if(!t.f.b(a1))throw A.b(A.bG('Contract envelope requires a "request" map.'))
j=A.fb(a1)
i=j.h(0,"tag")
if(typeof i!="string")A.u(A.a4("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.u(A.a4("Missing request payload."))
g=A.oM(h)
j=t.G
if(!j.b(g))A.u(A.a4("Malformed request payload."))
f=A.Ht(i,g)
if(f==null)A.u(A.a4("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.A()
s=7
return A.a(e.x9(m),$async$hg)
case 7:l=a6
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gaB(),"payload",A.oO(e.q())],d,t.X)],d,j)
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
b=J.a_(e)
if(e instanceof A.dI){a=A.KU(e)
b=e.a
if(e instanceof A.eO&&e.b!=null)a0=A.m(["field",e.b],t.N,t.X)
else if(e instanceof A.eN)a0=A.m(["field",e.b],t.N,t.X)
else a0=e instanceof A.eD?A.m(["field",e.b],t.N,t.X):null}else{if(e instanceof A.jv){b=e.a
a="WireException"}else if(e instanceof A.bj){b=e.a
a="StateError"}else if(e instanceof A.bA){b=A.q(e.d)
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
return A.f($async$hg,r)},
cD(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.y
q.y=null
p=q.Q
p=p==null?null:p.C()
s=2
return A.a(p instanceof A.t?p:A.bd(p,t.H),$async$cD)
case 2:q.Q=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aG(),$async$cD)
case 5:s=6
return A.a(o.eF(),$async$cD)
case 6:o.eF()
p=o.ax
if((p.c&4)===0)p.p()
o.w.a.p()
case 4:q.as=q.z=null
return A.e(null,r)}})
return A.f($async$cD,r)},
bx(a,b){return this.pw(a,b)},
pw(a,b){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i
var $async$bx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=t.f
if(!i.b(b))throw A.b(A.bG("Mutation element must be a map, got "+A.q(b==null?"null":J.bp(b))+"."))
q=t.N
p=t.X
o=new A.X(b.aL(0,new A.x8(),q,p))
n=o.R("action",null,q)
m=o.X("id",q)
l=b.h(0,"record")
if(l!=null){k=A.oN(l)
if(!i.b(k))throw A.b(A.bG('Mutation "record" must decode to a map, got '+J.bp(k).l(0)+"."))
j=k.aL(0,new A.x9(),q,p)}else j=null
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
return A.a(a.fB(j),$async$bx)
case 11:s=3
break
case 5:j.toString
s=12
return A.a(a.lc(j),$async$bx)
case 12:s=3
break
case 6:m.toString
j.toString
s=13
return A.a(a.kX(m,j),$async$bx)
case 13:s=3
break
case 7:m.toString
s=14
return A.a(a.ko(m),$async$bx)
case 14:s=3
break
case 8:m.toString
s=15
return A.a(a.l7(m),$async$bx)
case 15:s=3
break
case 9:m.toString
s=16
return A.a(a.iU(m),$async$bx)
case 16:s=3
break
case 10:throw A.b(A.au("Unknown mutation action: "+n,null))
case 3:return A.e(null,r)}})
return A.f($async$bx,r)},
jz(a,b,c){a.a.cH(A.ea(A.m(["v",3,"op","worker_event","watchId",b,"value",A.c0(c)],t.N,t.X)))},
cF(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.x("No active transaction session matching ID "+A.q(a)+"."))
s=this.d
s.toString
return s}}
A.xa.prototype={
$2(a,b){return this.a.c.b.ad(a,b)},
$S:56}
A.xb.prototype={
$2(a,b){return this.a.c.j0(a,b)},
$S:56}
A.x8.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.x)},
$S:31}
A.x9.prototype={
$2(a,b){return new A.Q(J.a_(a),b,t.x)},
$S:31}
A.x7.prototype={
iA(a,b){return this.xu(a,b)},
xu(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$iA=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.at.u(0,a)
if(n.ax==null){i=n.c.a$.b
n.ax=new A.aT(i,A.n(i).i("aT<1>")).aK(new A.xc(n))}if(n.ay==null){i=n.c.e
i===$&&A.A()
i=i.b
n.ay=new A.aT(i,A.n(i).i("aT<1>")).aK(new A.xd(n))}m=null
try{m=A.J6(b)}catch(d){l=A.E(d)
i=J.a_(l)
q=new A.eQ("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eQ("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.jx(a,m),$async$iA)
case 7:k=a0
i=m.b
q=new A.jw(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.E(e)
i=m.b
g=J.a_(j)
f=A.m(["type",A.MD(j)],t.N,t.X)
q=new A.eQ("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iA,r)},
jx(a,b){return this.qe(a,b)},
qe(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$jx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.ch
if(l===$){o=A.m(["health",p.gro(),"capabilities",p.gqD(),"get",p.grm(),"mutate_batch",p.grs(),"compiled_query",p.gqK(),"open",p.gru(),"analyze",p.gqB(),"wal_checkpoint",p.gtf(),"vacuum",p.gtd(),"prune_outbox",p.grA(),"compact",p.gqH(),"run_maintenance",p.grG(),"tx_begin",p.grY(),"tx_get",p.gt1(),"tx_mutate_batch",p.gt3(),"tx_savepoint",p.gtb(),"tx_rollback_to",p.gt9(),"tx_release",p.gt5(),"tx_commit",p.gt_(),"tx_rollback",p.gt7(),"watch_query",p.gtl(),"watch_one",p.gtj(),"watch_cancel",p.gth(),"sync_start",p.grQ(),"sync_stop",p.grU(),"sync_now",p.grI(),"sync_pause",p.grK(),"sync_resume",p.grM(),"sync_set_connectivity",p.grO(),"sync_update_auth",p.grW(),"sync_status",p.grS(),"file_upload_begin",p.grf(),"file_upload_chunk",p.grh(),"file_upload_finish",p.grj(),"file_upload_abort",p.grd(),"file_list",p.gr4(),"file_open",p.gr6(),"file_remove",p.gr8(),"file_gc",p.gr2(),"file_enforce_storage_cap",p.gr0(),"file_storage_status",p.gra(),"conflicts_list",p.gqS(),"conflicts_get",p.gqQ(),"conflicts_resolve",p.gqU(),"conflicts_accept_local",p.gqM(),"conflicts_accept_remote",p.gqO(),"conflicts_watch",p.gqW(),"contract_request",p.gqY(),"close",p.gqF()],t.N,t.n1)
p.ch!==$&&A.Bf()
p.ch=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.bG("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jx,r)}}
A.xc.prototype={
$1(a){var s,r,q,p=A.m(["v",3,"op","record_event","event",A.c0(a.q())],t.N,t.X)
for(s=this.a.at,s=A.eZ(s,s.r,A.n(s).c),r=s.$ti.c;s.k();){q=s.d;(q==null?r.a(q):q).a.cH(A.ea(p))}},
$S:149}
A.xd.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gaB(),"payload",a.q()],r,q)],r,q)
for(r=this.a.at,r=A.eZ(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).a.cH(A.ea(p))}},
$S:150}
A.nh.prototype={
he(a,b){return this.qT(a,b)},
qT(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$he=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.X(b.d).X("store",o)
m=p.c.cy
m===$&&A.A()
l=J
s=3
return A.a(m.fm(n),$async$he)
case 3:m=l.aL(d,A.FD(),t.G)
m=A.N(m,m.$ti.i("V.E"))
q=A.m(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
hd(a,b){return this.qR(a,b)},
qR(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$hd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.X(b.d)
m=t.N
l=n.R("store","conflicts_get",m)
k=n.R("id","conflicts_get",m)
m=p.c.cy
m===$&&A.A()
s=3
return A.a(m.dE(l,k),$async$hd)
case 3:o=d
q=o==null?null:A.FN(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
hf(a,b){return this.qV(a,b)},
qV(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$hf=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=new A.X(n)
l=t.N
k=m.R("store","conflicts_resolve",l)
j=m.R("id","conflicts_resolve",l)
n=A.oN(n.h(0,"merged"))
n.toString
t.G.a(n)
o=p.c.cy
o===$&&A.A()
s=3
return A.a(o.ev(j,n,k),$async$hf)
case 3:q=A.m(["ok",!0],l,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
hb(a,b){return this.qN(a,b)},
qN(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$hb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.X(b.d)
n=t.N
m=o.R("store","conflicts_accept_local",n)
l=o.R("id","conflicts_accept_local",n)
k=p.c.cy
k===$&&A.A()
s=3
return A.a(k.f5(m,l),$async$hb)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
hc(a,b){return this.qP(a,b)},
qP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$hc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.X(b.d)
n=t.N
m=o.R("store","conflicts_accept_remote",n)
l=o.R("id","conflicts_accept_remote",n)
k=p.c.cy
k===$&&A.A()
s=3
return A.a(k.e6(m,l),$async$hc)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
jG(a,b){return this.qX(a,b)},
qX(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$jG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.X(b.d)
n=t.S
m=o.R("watchId","conflicts_watch",n)
l=t.N
k=o.X("store",l)
j=p.c.cy
j===$&&A.A()
p.f.j(0,m,new A.hl(new A.x2(j.z_(k).aK(new A.x3(p,a,m)))))
q=A.m(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jG,r)}}
A.x3.prototype={
$1(a){var s=J.aL(a,A.FD(),t.G)
s=A.N(s,s.$ti.i("V.E"))
this.a.jz(this.b,this.c,s)},
$S:151}
A.x2.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.C(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.ni.prototype={
ho(a,b){return this.rn(a,b)},
rn(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$ho=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.X(b.d)
n=t.N
m=o.R("store","get",n)
l=o.R("id","get",n)
n=p.c
if(A.eM(n)!=null)A.u(A.x(u.L))
k=A
s=3
return A.a(new A.d0(n,n.ae(m),null,null).bv(l),$async$ho)
case 3:q=k.c0(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
eN(a,b){return this.rt(a,b)},
rt(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$eN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.X(b.d)
m=t.N
l=n.R("store","mutate_batch",m)
k=n.R("mutations","mutate_batch",t.W)
j=p.tX(n.X("durability",m),"mutate_batch")
i=J.L(k)
s=i.gm(k)===1&&j===B.n?3:4
break
case 3:o=p.c
if(A.eM(o)!=null)A.u(A.x(u.L))
s=5
return A.a(p.bx(new A.d0(o,o.ae(l),null,null),i.gD(k)),$async$eN)
case 5:q=A.m(["ok",!0],m,t.y)
s=1
break
case 4:s=6
return A.a(p.c.aV(new A.x4(p,l,k),j,t.P),$async$eN)
case 6:q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eN,r)},
tX(a,b){switch(a){case null:case void 0:return B.n
case"normal":return B.n
case"full":return B.au
default:throw A.b(A.bG('Invalid "'+b+'" durability argument: expected "normal" or "full", got "'+a+'".'))}},
hp(a,b){return this.rv(a,b)},
rv(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$hp=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.X(a3).X("stores",t.W)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.w(a3,a3)
n=t.f
if(n.b(a5))a5.a3(0,new A.x5(o))
s=a4!=null?3:4
break
case 3:m=J.D(a4),l=p.c,k=l.dx,j=t.X,i=l.ax==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.u(A.a9("Schema must be a map: "+A.q(h),null,null))
g=A.pw(A.fb(h),j)
if(B.b.bR(g.c,new A.x6())&&i)throw A.b(A.au('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.BX(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a2("")
A.ci(c,f.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c5()
a0=A.cZ(a)
a0.u(0,b)
a0.p()
a0=d!==A.aq(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.bG('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.I(e)?7:9
break
case 7:s=10
return A.a(l.aU(g),$async$hp)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.u(A.x('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a2("")
A.ci(c,a1.c.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c5()
a0=A.cZ(a)
a0.u(0,b)
a0.p()
a0=A.aq(a.a.a)
c=new A.a2("")
A.ci(c,f.q())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c5()
a2=A.cZ(a)
a2.u(0,b)
a2.p()
if(a0!==A.aq(a.a.a))throw A.b(A.bG('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)}}
A.x4.prototype={
$1(a){return this.ou(a)},
ou(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=a.bq(q.b)
p=J.D(q.c),o=q.a
case 2:if(!p.k()){s=3
break}s=4
return A.a(o.bx(n,p.gn()),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.x5.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:26}
A.x6.prototype={
$1(a){return a.e},
$S:54}
A.nl.prototype={
qo(){if(this.w!=null)return
this.w=A.E0(A.d2(9e8,0,0),new A.xe(this))},
jO(a,b){return this.rg(a,b)},
rg(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$jO=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:p.qo()
o=new A.X(b.d)
n=p.x++
m=p.r
l=t.N
k=o.R("store","file_upload_begin",l)
j=o.R("recordId","file_upload_begin",l)
i=o.X("field",l)
if(i==null)i="imgs"
h=o.X("name",l)
if(h==null)h="blob.bin"
g=t.S
f=o.R("size","file_upload_begin",g)
e=o.X("expectedSha256",l)
d=o.X("allowVolatileBlobs",t.y)
m.nm()
c=m.r
if(c.a>=16)A.u(A.au("Maximum concurrent uploads exceeded (16).",null))
if(f<0||f>268435456)A.u(A.au("Invalid file size: "+f,null))
if(m.gnQ()+f>536870912)A.u(A.au("Aggregate upload quota exceeded: "+m.gnQ()+" + "+f+" > 536870912",null))
m=m.f.$0().jo(18e8)
c.j(0,n,new A.cW(n,k,j,i,h,f,e,d===!0,A.l([],t.bs),m))
q=A.m(["uploadId",n],l,g)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jO,r)},
jP(a,b){return this.ri(a,b)},
ri(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$jP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=new A.X(i).R("uploadId","file_upload_chunk",t.S)
i=A.oN(i.h(0,"chunk"))
i.toString
o=p.r
i=new Uint8Array(A.b3(t.L.a(i)))
n=o.r
m=n.h(0,h)
if(m==null)A.u(A.au("Unknown upload session: "+h,null))
o=o.f
if(!m.z.kO(o.$0())){n.H(0,h)
A.u(A.au("Upload session expired: "+h,null))}l=i.length
if(l>262144){n.H(0,h)
A.u(A.au("Chunk too large: "+l+" > 262144",null))}k=m.x
j=m.f
if(k+l>j){n.H(0,h)
A.u(A.au("Upload exceeds declared size "+j,null))}m.y.push(i)
m.x+=l
m.z=o.$0().jo(18e8)
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jP,r)},
hm(a,b){return this.rk(a,b)},
rk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.X(b.d).R("uploadId","file_upload_finish",t.S)
f=p.r
e=f.r.H(0,g)
if(e==null)A.u(A.au("Unknown upload session: "+g,null))
if(!e.z.kO(f.f.$0()))A.u(A.au("Upload session expired: "+g,null))
f=e.x
o=e.f
if(f!==o)A.u(A.au("Upload size mismatch: expected "+o+" but got "+f,null))
f=p.c.db
f===$&&A.A()
n=e.b
m=e.c
l=new A.xf(e).$0()
k=e.d
j=e.e
i=e.r
s=3
return A.a(f.df(e.w,l,i,o,k,j,m,n),$async$hm)
case 3:h=d
q=A.m(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hm,r)},
jN(a,b){return this.re(a,b)},
re(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$jN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.r.r.H(0,new A.X(b.d).R("uploadId","file_upload_abort",t.S))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jN,r)},
hj(a,b){return this.r5(a,b)},
r5(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.X(b.d)
j=p.c.db
j===$&&A.A()
o=t.N
n=k.R("store","file_list",o)
m=k.R("recordId","file_list",o)
l=k.X("field",o)
i=J
s=3
return A.a(j.el(l==null?"imgs":l,m,n),$async$hj)
case 3:j=i.aL(d,A.MN(),t.G)
j=A.N(j,j.$ti.i("V.E"))
q=A.m(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
dR(a,b){return this.r7(a,b)},
r7(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dR=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.X(b.d)
c=m.c.db
c===$&&A.A()
i=t.N
h=d.R("store","file_open",i)
g=d.R("recordId","file_open",i)
f=d.X("field",i)
if(f==null)f="imgs"
e=d.X("index",t.S)
if(e==null)e=0
s=3
return A.a(c.ft(f,e,g,d.X("refId",i),h),$async$dR)
case 3:l=a1
k=A.l([],t.t)
h=new A.cf(A.c_(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.k(),$async$dR)
case 9:if(!a1){s=8
break}j=h.gn()
J.Bl(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.C(),$async$dR)
case 10:s=n.pop()
break
case 6:q=A.m(["bytes",A.c0(new Uint8Array(A.b3(k))),"size",J.ai(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dR,r)},
hk(a,b){return this.r9(a,b)},
r9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.X(b.d)
i=p.c.db
i===$&&A.A()
o=t.N
n=j.R("store","file_remove",o)
m=j.R("recordId","file_remove",o)
l=j.X("field",o)
if(l==null)l="imgs"
k=j.X("index",t.S)
if(k==null)k=0
s=3
return A.a(i.fE(0,l,k,m,j.X("refId",o),n),$async$hk)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
hi(a,b){return this.r3(a,b)},
r3(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.X(b.d)
k=p.c.db
k===$&&A.A()
o=t.S
n=l.X("blobGraceMs",o)
n=A.d2(0,n==null?6048e5:n,0)
m=l.X("tmpGraceMs",o)
j=A
s=3
return A.a(k.bg(n,A.d2(0,m==null?864e5:m,0)),$async$hi)
case 3:q=j.m(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
hh(a,b){return this.r1(a,b)},
r1(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.db
n===$&&A.A()
o=t.S
m=A
s=3
return A.a(n.cI(new A.X(b.d).R("maxBytes","file_enforce_storage_cap",o)),$async$hh)
case 3:q=m.m(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
hl(a,b){return this.rb(a,b)},
rb(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.db
o===$&&A.A()
n=A
s=3
return A.a(o.gkP(),$async$hl)
case 3:q=n.m(["durable",d],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)}}
A.xe.prototype={
$1(a){return this.a.r.nm()},
$S:49}
A.xf.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bX(A.e0(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:case 1:return A.bX(null,0,r)
case 2:return A.bX(o.at(-1),1,r)}})
var s=0,r=A.Fa($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Fp(r)},
$S:152}
A.nm.prototype={
jQ(a,b){return this.rp(a,b)},
rp(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$jQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.fT("SELECT sqlite_version() AS v")
m=n.gD(n).h(0,"v")
o=o.fT("PRAGMA journal_mode")
q=A.m(["ok",!0,"sqliteVersion",m,"journalMode",o.gD(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jQ,r)},
jE(a,b){return this.qE(a,b)},
qE(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$jE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.w
n=p.a.fT("PRAGMA journal_mode")
q=A.m(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gD(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jE,r)},
h9(a,b){return this.qC(a,b)},
qC(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$h9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.a(p.c.de(new A.X(b.d).X("store",o)),$async$h9)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
hG(a,b){return this.tg(a,b)},
tg(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.ez(),$async$hG)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
hF(a,b){return this.te(a,b)},
te(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.ey(new A.X(b.d).X("pages",t.S)),$async$hF)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
hq(a,b){return this.rB(a,b)},
rB(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.S
n=new A.X(b.d).X("maxEntries",o)
if(n==null)n=1e4
m=A
s=3
return A.a(p.c.fw(n),$async$hq)
case 3:q=m.m(["pruned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
ha(a,b){return this.qI(a,b)},
qI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$ha=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.X(b.d)
n=t.N
m=o.R("store","compact",n)
l=t.S
k=o.R("olderThanMs","compact",l)
j=A
s=3
return A.a(p.c.eb(m,o.X("nowMs",l),A.d2(0,k,0)),$async$ha)
case 3:q=j.m(["compacted",d],n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
hr(a,b){return this.rH(a,b)},
rH(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.X(b.d).X("compactOlderThanMs",t.S)
s=3
return A.a(p.c.dw(A.d2(0,o==null?7776e6:o,0)),$async$hr)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)}}
A.zU.prototype={
kw(){var s=0,r=A.h(t.q),q,p=this,o
var $async$kw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.E2(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kw,r)},
l1(a){return this.yw(a)},
yw(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$l1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.E2(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$l1,r)}}
A.nn.prototype={
dT(a,b){return this.rR(a,b)},
rR(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dT=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.X(a5.d)
a2=t.N
a3=a1.X("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.au("syncStart requires baseUrl.",null))
s=3
return A.a(p.cD(),$async$dT)
case 3:o=a1.X("token",a2)
n=a1.X("scopeId",a2)
if(n==null)n="web-sync"
m=new A.zU(o,n)
l=A.n5(a3)
k=p.c
j=k.dx
i=A.n(j).i("T<1>")
j=A.N(new A.T(j,i),i.i("o.E"))
i=t.hw
h=A.dR(null,null,i)
g=$.C.h(0,B.dm)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.kU(A.l([],t.kG))
f=new A.ux(f)
e=new A.uP(j,l,m,B.aY,200,25,n,"data",f,h,A.w(a2,t.hU),A.w(a2,i))
e.pf(l,n,25,200,"data",B.aY,m,null)
d=A.Ce()
i=A.dR(null,null,t.n6)
h=A.dR(null,null,t.em)
f=t.H
j=A.bD(null,f)
c=new A.p0(A.bD(null,f))
b=A.bD(B.N,t.mv)
a=A.l([],t.s)
f=A.bD(null,f)
a0=new A.wa(A.MJ(),k.ch)
f=new A.mQ(k,e,a0,new A.xk(a4),B.a3,i,h,j,c,A.aP(a2),b,a,f)
l=f.e=new A.wl(k,B.a.A(A.aq(B.j.v(B.e.v(l.l(0)+"|"+n)).a),0,12))
j=new A.r8(k,e,a0,k.at)
f.x=j
j=new A.v3(k,e,a0,l,j,c)
f.f=j
f.r=new A.w8(k,e,a0,l,j)
f.w=new A.vc(k,e,a0,f.gtG(),e.Q)
d.b=f
p.z=m
p.y=d.bo()
f=d.bo().ay
p.Q=new A.aT(f,A.n(f).i("aT<1>")).aK(new A.xl(p,a4))
s=4
return A.a(d.bo().az(),$async$dT)
case 4:s=5
return A.a(e.fX(),$async$dT)
case 5:q=A.m(["ok",!0,"state",d.bo().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
hw(a,b){return this.rV(a,b)},
rV(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$hw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cD(),$async$hw)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hw,r)},
hs(a,b){return this.rJ(a,b)},
rJ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.x("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.da(),$async$hs)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"blocked",o.e,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
ht(a,b){return this.rL(a,b)},
rL(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$ht=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.bt(),$async$ht)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
hu(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.be(),$async$hu)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
hv(a,b){return this.rP(a,b)},
rP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$hv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
if(n==null)throw A.b(A.x("Sync is not started."))
o=t.y
s=3
return A.a(n.fV(new A.X(b.d).R("online","sync_set_connectivity",o)),$async$hv)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
hx(a,b){return this.rX(a,b)},
rX(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
m=p.y
if(n==null||m==null)throw A.b(A.x("Sync is not started."))
o=t.N
n.a=new A.X(b.d).X("token",o)
s=3
return A.a(m.em(),$async$hx)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hx,r)},
jS(a,b){return this.rT(a,b)},
rT(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$jS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.as
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.FP(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jS,r)}}
A.xk.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.cH(A.ea(A.m(["v",3,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.xl.prototype={
$1(a){this.a.as=a
this.b.a.cH(A.ea(A.m(["v",3,"op","sync_status","status",A.FP(a)],t.N,t.X)))},
$S:153}
A.zH.prototype={}
A.no.prototype={
hy(a,b){return this.rZ(a,b)},
rZ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$hy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.x("A transaction session is already active on this database."))
o=p.e++
n=$.C
m=t.D
l=t.h
k=new A.t(n,m)
p.hU(new A.ay(new A.t(n,m),l),new A.ay(new A.t(n,m),l),new A.ay(k,l),o)
s=3
return A.a(k,$async$hy)
case 3:q=A.m(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
hU(a,b,c,d){return this.uL(a,b,c,d)},
uL(a,b,c,d){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$hU=A.c(function(e,f){if(e===1){p.push(f)
s=q}for(;;)switch(s){case 0:j=b.a
j.bE(new A.xm(),new A.xn(),t.H)
q=3
s=6
return A.a(n.c.a2(new A.xo(n,d,a,b,c),t.P),$async$hU)
case 6:if((j.a&30)===0)b.ai()
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.E(i)
l=A.ad(i)
if((j.a&30)===0)b.bD(m,l)
if((c.a.a&30)===0)c.bD(m,l)
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
return A.f($async$hU,r)},
hA(a,b){return this.t2(a,b)},
t2(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$hA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=p.cF(new A.X(m).X("sessionId",t.S))
k=new A.X(m)
m=t.N
o=k.R("store","tx_get",m)
n=k.R("id","tx_get",m)
j=A
s=3
return A.a(l.c.bq(o).bv(n),$async$hA)
case 3:q=j.c0(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
hB(a,b){return this.t4(a,b)},
t4(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=b.d
j=p.cF(new A.X(k).X("sessionId",t.S))
i=new A.X(k)
k=t.N
o=i.R("store","tx_mutate_batch",k)
n=i.R("mutations","tx_mutate_batch",t.W)
m=j.c.bq(o)
l=J.D(n)
case 3:if(!l.k()){s=4
break}s=5
return A.a(p.bx(m,l.gn()),$async$hB)
case 5:s=3
break
case 4:q=A.m(["ok",!0],k,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hB,r)},
hE(a,b){return this.tc(a,b)},
tc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.cF(new A.X(b.d).X("sessionId",t.S))
n=o.e
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.K("SAVEPOINT "+m),$async$hE)
case 3:n=t.N
q=A.m(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
eO(a,b){return this.ta(a,b)},
ta(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$eO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cF(new A.X(o).X("sessionId",t.S))
m=t.N
l=new A.X(o).R("savepoint","tx_rollback_to",m)
o=n.c.b
s=3
return A.a(o.K("ROLLBACK TO "+l),$async$eO)
case 3:s=4
return A.a(o.K("RELEASE "+l),$async$eO)
case 4:B.b.H(n.e,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eO,r)},
hC(a,b){return this.t6(a,b)},
t6(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$hC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.cF(new A.X(o).X("sessionId",t.S))
m=t.N
l=new A.X(o).R("savepoint","tx_release",m)
s=3
return A.a(n.c.b.K("RELEASE "+l),$async$hC)
case 3:B.b.H(n.e,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hC,r)},
hz(a,b){return this.t0(a,b)},
t0(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j
var $async$hz=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:j=m.cF(new A.X(b.d).X("sessionId",t.S))
p=3
l=m.d
k=j
if(l==null?k==null:l===k)m.d=null
j.b.ai()
s=6
return A.a(j.d.a,$async$hz)
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
return A.f($async$hz,r)},
hD(a,b){return this.t8(a,b)},
t8(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$hD=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=m.cF(new A.X(b.d).X("sessionId",t.S))
p=3
j=m.d
i=g
if(j==null?i==null:j===i)m.d=null
l=new A.mq("rollback","Transaction rolled back.")
g.b.aJ(l)
p=7
s=10
return A.a(g.d.a,$async$hD)
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
return A.f($async$hD,r)}}
A.xm.prototype={
$1(a){},
$S:154}
A.xn.prototype={
$1(a){},
$S:24}
A.xo.prototype={
$1(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
o=new A.zH(q.b,p,a,q.d,A.l([],t.s))
q.a.d=o
q.e.ai()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.hl.prototype={}
A.np.prototype={
hJ(a,b){return this.tm(a,b)},
tm(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$hJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=new A.X(m).R("watchId","watch_query",t.S)
k=p.mo(m)
j=J.v(m.h(0,"ordered"),!0)
m=p.c
o=new A.l2(m.ae(k.d).a,k.r,k.w,k.y,k.z,new A.xv(p,a,l),j,m,B.aw)
n=new A.hl(new A.xw(o))
i=J
s=3
return A.a(A.kp(new A.xx(p,l,n),o.gxC(),new A.xy(p,l,n),o.gP(),t.J),$async$hJ)
case 3:m=i.aL(d,A.FG(),t.X)
m=A.N(m,m.$ti.i("V.E"))
q=A.m(["watchId",l,"items",m],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
hI(a,b){return this.tk(a,b)},
tk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hI=A.c(function(c,a0){if(c===1)return A.d(a0,r)
for(;;)switch(s){case 0:o=new A.X(b.d)
n=o.R("watchId","watch_one",t.S)
m=t.N
l=o.R("store","watch_one",m)
k=o.R("id","watch_one",m)
j=p.c
i=j.ae(l)
h=A.Ce()
g=new A.hl(new A.xq(h))
f=A
e=n
d=A
s=3
return A.a(A.kp(new A.xr(p,n,g),new A.xs(p,l,k),new A.xt(p,n,g),new A.xu(p,h,new A.j2(i,k,j,B.aw),a,n),t.b),$async$hI)
case 3:q=f.m(["watchId",e,"item",d.c0(a0)],m,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
hH(a,b){return this.ti(a,b)},
ti(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$hH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.H(0,new A.X(b.d).R("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$hH)
case 5:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)}}
A.xv.prototype={
$1(a){return this.a.jz(this.b,this.c,a)},
$S:46}
A.xw.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.ec()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.xy.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.xx.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.H(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.xq.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.bo().C(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.xu.prototype={
$0(){var s=this
s.b.snn(s.c.jg().aK(new A.xp(s.a,s.d,s.e)))},
$S:0}
A.xp.prototype={
$1(a){this.a.jz(this.b,this.c,a)},
$S:155}
A.xt.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.xs.prototype={
$0(){var s=this.a.c
if(A.eM(s)!=null)A.u(A.x(u.L))
return new A.d0(s,s.ae(this.b),null,null).bv(this.c)},
$S:73}
A.xr.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.H(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.oq.prototype={}
A.or.prototype={}
A.os.prototype={}
A.ot.prototype={}
A.ou.prototype={}
A.ov.prototype={}
A.ow.prototype={}
A.q9.prototype={
vv(a){var s,r=null
A.Fu("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b3(a)>0&&!s.cM(a)
if(s)return a
s=A.FJ()
return this.ny(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
wb(a){var s,r,q=A.dO(a,this.a)
q.fF()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.l3(s)
q.e.pop()
q.fF()
return q.l(0)},
ny(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Fu("join",s)
return this.xJ(new A.bI(s,t.B))},
xJ(a){var s,r,q,p,o,n,m,l,k
for(s=a.gt(0),r=new A.cX(s,new A.qa(),a.$ti.i("cX<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cM(m)&&o){l=A.dO(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.ew(k,!0))
l.b=n
if(q.fs(n))l.e[0]=q.gdG()
n=l.l(0)}else if(q.b3(m)>0){o=!q.cM(m)
n=m}else{if(!(m.length!==0&&q.kt(m[0])))if(p)n+=q.gdG()
n+=m}p=q.fs(m)}return n.charCodeAt(0)==0?n:n},
cV(a,b){var s=A.dO(b,this.a),r=s.d,q=A.a0(r).i("al<1>")
r=A.N(new A.al(r,new A.qb(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aE(r,0,q)
return s.d},
ep(a){var s
if(!this.tE(a))return a
s=A.dO(a,this.a)
s.kU()
return s.l(0)},
tE(a){var s,r,q,p,o,n,m,l=this.a,k=l.b3(a)
if(k!==0){if(l===$.oS())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.ce(n)){if(l===$.oS()&&n===47)return!0
if(q!=null&&l.ce(q))return!0
if(q===46)m=o==null||o===46||l.ce(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.ce(q))return!0
if(q===46)l=o==null||l.ce(o)||o===46
else l=!1
if(l)return!0
return!1},
yy(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b3(a)
if(l<=0)return o.ep(a)
s=A.FJ()
if(m.b3(s)<=0&&m.b3(a)>0)return o.ep(a)
if(m.b3(a)<=0||m.cM(a))a=o.vv(a)
if(m.b3(a)<=0&&m.b3(s)>0)throw A.b(A.DL(n+a+'" from "'+s+'".'))
r=A.dO(s,m)
r.kU()
q=A.dO(a,m)
q.kU()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kZ(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kZ(l[0],p[0])}else l=!1
if(!l)break
B.b.iY(r.d,0)
B.b.iY(r.e,1)
B.b.iY(q.d,0)
B.b.iY(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.DL(n+a+'" from "'+s+'".'))
l=t.N
B.b.kL(q.d,0,A.af(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kL(p,1,A.af(r.d.length,m.gdG(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga_(m)==="."){B.b.l3(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fF()
return q.l(0)},
nE(a){var s,r,q=this,p=A.Fe(a)
if(p.gb1()==="file"&&q.a===$.kw())return p.l(0)
else if(p.gb1()!=="file"&&p.gb1()!==""&&q.a!==$.kw())return p.l(0)
s=q.ep(q.a.kY(A.Fe(p)))
r=q.yy(s)
return q.cV(0,r).length>q.cV(0,s).length?s:r}}
A.qa.prototype={
$1(a){return a!==""},
$S:9}
A.qb.prototype={
$1(a){return a.length!==0},
$S:9}
A.Ap.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:156}
A.rY.prototype={
oD(a){var s=this.b3(a)
if(s>0)return B.a.A(a,0,s)
return this.cM(a)?a[0]:null},
kZ(a,b){return a===b}}
A.ma.prototype={
gkp(){var s=this,r=t.N,q=new A.ma(s.a,s.b,s.c,A.bT(s.d,!0,r),A.bT(s.e,!0,r))
q.fF()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga_(r)},
fF(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga_(s)===""))break
B.b.l3(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kU(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kL(m,0,A.af(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.af(m.length+1,s.gdG(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fs(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.oS())n.b=A.z(r,"/","\\")
n.fF()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.mb.prototype={
l(a){return"PathException: "+this.a},
$iH:1}
A.w7.prototype={
l(a){return this.gaT()}}
A.uR.prototype={
kt(a){return B.a.G(a,"/")},
ce(a){return a===47},
fs(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
ew(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b3(a){return this.ew(a,!1)},
cM(a){return!1},
kY(a){var s
if(a.gb1()===""||a.gb1()==="file"){s=a.gbs()
return A.Co(s,0,s.length,B.l,!1)}throw A.b(A.O("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaT(){return"posix"},
gdG(){return"/"}}
A.wI.prototype={
kt(a){return B.a.G(a,"/")},
ce(a){return a===47},
fs(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c9(a,"://")&&this.b3(a)===s},
ew(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cc(a,"/",B.a.af(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.T(a,"file://"))return q
p=A.FM(a,q+1)
return p==null?q:p}}return 0},
b3(a){return this.ew(a,!1)},
cM(a){return a.length!==0&&a.charCodeAt(0)===47},
kY(a){return a.l(0)},
gaT(){return"url"},
gdG(){return"/"}}
A.x1.prototype={
kt(a){return B.a.G(a,"/")},
ce(a){return a===47||a===92},
fs(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
ew(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cc(a,"\\",2)
if(s>0){s=B.a.cc(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.FV(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b3(a){return this.ew(a,!1)},
cM(a){return this.b3(a)===1},
kY(a){var s,r
if(a.gb1()!==""&&a.gb1()!=="file")throw A.b(A.O("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbs()
if(a.gdl()===""){if(s.length>=3&&B.a.T(s,"/")&&A.FM(s,1)!=null)s=B.a.l6(s,"/","")}else s="\\\\"+a.gdl()+s
r=A.z(s,"/","\\")
return A.Co(r,0,r.length,B.l,!1)},
vT(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kZ(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.vT(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaT(){return"windows"},
gdG(){return"\\"}}
A.vQ.prototype={
gm(a){return this.c.length},
gxK(){return this.b.length},
ph(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.J(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
eD(a){var s,r=this
if(a<0)throw A.b(A.b0("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b0("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gD(s))return-1
if(a>=B.b.ga_(s))return s.length-1
if(r.tt(a)){s=r.d
s.toString
return s}return r.d=r.pB(a)-1},
tt(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pB(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.N(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
jd(a){var s,r,q=this
if(a<0)throw A.b(A.b0("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b0("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.eD(a)
r=q.b[s]
if(r>a)throw A.b(A.b0("Line "+s+" comes after offset "+a+"."))
return a-r},
fQ(a){var s,r,q,p
if(a<0)throw A.b(A.b0("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b0("Line "+a+" must be less than the number of lines in the file, "+this.gxK()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b0("Line "+a+" doesn't have 0 columns."))
return q}}
A.lr.prototype={
ga4(){return this.a.a},
gak(){return this.a.eD(this.b)},
gau(){return this.a.jd(this.b)},
gav(){return this.b}}
A.hw.prototype={
ga4(){return this.a.a},
gm(a){return this.c-this.b},
gP(){return A.Bx(this.a,this.b)},
gO(){return A.Bx(this.a,this.c)},
gaN(){return A.dT(B.y.U(this.a.c,this.b,this.c),0,null)},
gbd(){var s=this,r=s.a,q=s.c,p=r.eD(q)
if(r.jd(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dT(B.y.U(r.c,r.fQ(p),r.fQ(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fQ(p+1)
return A.dT(B.y.U(r.c,r.fQ(r.eD(s.b)),q),0,null)},
a1(a,b){var s
if(!(b instanceof A.hw))return this.p6(0,b)
s=B.c.a1(this.b,b.b)
return s===0?B.c.a1(this.c,b.c):s},
S(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hw))return s.p5(0,b)
return s.b===b.b&&s.c===b.c&&J.v(s.a.a,b.a.a)},
gJ(a){return A.c7(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idc:1}
A.ru.prototype={
xA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mW(B.b.gD(a1).c)
s=a.e
r=A.af(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.v(m.c,l)){a.i4("\u2575")
q.a+="\n"
a.mW(l)}else if(m.b+1!==n.b){a.vu("...")
q.a+="\n"}}for(l=n.d,k=A.a0(l).i("bW<1>"),j=new A.bW(l,k),j=new A.aj(j,j.gm(0),k.i("aj<V.E>")),k=k.i("V.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP().gak()!==f.gO().gak()&&f.gP().gak()===i&&a.tv(B.a.A(h,0,f.gP().gau()))){e=B.b.bU(r,a0)
if(e<0)A.u(A.O(A.q(r)+" contains no null elements.",a0))
r[e]=g}}a.vt(i)
q.a+=" "
a.vs(n,r)
if(s)q.a+=" "
d=B.b.ns(l,new A.rP())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gP().gak()===i?j.gP().gau():0
a.vq(h,g,j.gO().gak()===i?j.gO().gau():h.length,p)}else a.i6(h)
q.a+="\n"
if(k)a.vr(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.i4("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mW(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.i4("\u2577")
else{q.i4("\u250c")
q.bk(new A.rC(q),"\x1b[34m")
s=q.r
r=" "+$.i1().nE(a)
s.a+=r}q.r.a+="\n"},
i2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gP().gak()
i=k?null:l.a.gO().gak()
if(s&&l===c){h.bk(new A.rJ(h,j,a),r)
n=!0}else if(n)h.bk(new A.rK(h,l),r)
else if(k)if(g.a)h.bk(new A.rL(h),g.b)
else o.a+=" "
else h.bk(new A.rM(g,h,c,j,a,l,i),p)}},
vs(a,b){return this.i2(a,b,null)},
vq(a,b,c,d){var s=this
s.i6(B.a.A(a,0,b))
s.bk(new A.rD(s,a,b,c),d)
s.i6(B.a.A(a,c,a.length))},
vr(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gP().gak()===p.gO().gak()){r.kl()
p=r.r
p.a+=" "
r.i2(a,c,b)
if(c.length!==0)p.a+=" "
r.mX(b,c,r.bk(new A.rE(r,a,b),q))}else{s=a.b
if(p.gP().gak()===s){if(B.b.G(c,b))return
A.MA(c,b)
r.kl()
p=r.r
p.a+=" "
r.i2(a,c,b)
r.bk(new A.rF(r,a,b),q)
p.a+="\n"}else if(p.gO().gak()===s){p=p.gO().gau()
if(p===a.a.length){A.G6(c,b)
return}r.kl()
r.r.a+=" "
r.i2(a,c,b)
r.mX(b,c,r.bk(new A.rG(r,!1,a,b),q))
A.G6(c,b)}}},
mV(a,b,c){var s=c?0:1,r=this.r
s=B.a.bh("\u2500",1+b+this.jv(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
vp(a,b){return this.mV(a,b,!0)},
mX(a,b,c){this.r.a+="\n"
return},
i6(a){var s,r,q,p
for(s=new A.ck(a),r=t.E,s=new A.aj(s,s.gm(0),r.i("aj<I.E>")),q=this.r,r=r.i("I.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bh(" ",4)
else{p=A.bs(p)
q.a+=p}}},
i5(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bk(new A.rN(s,this,a),"\x1b[34m")},
i4(a){return this.i5(a,null,null)},
vu(a){return this.i5(null,null,a)},
vt(a){return this.i5(null,a,null)},
kl(){return this.i5(null,null,null)},
jv(a){var s,r,q,p
for(s=new A.ck(a),r=t.E,s=new A.aj(s,s.gm(0),r.i("aj<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
tv(a){var s,r,q
for(s=new A.ck(a),r=t.E,s=new A.aj(s,s.gm(0),r.i("aj<I.E>")),r=r.i("I.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pP(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bk(a,b){return this.pP(a,b,t.z)}}
A.rO.prototype={
$0(){return this.a},
$S:157}
A.rw.prototype={
$1(a){var s=a.d
return new A.al(s,new A.rv(),A.a0(s).i("al<1>")).gm(0)},
$S:158}
A.rv.prototype={
$1(a){var s=a.a
return s.gP().gak()!==s.gO().gak()},
$S:43}
A.rx.prototype={
$1(a){return a.c},
$S:160}
A.rz.prototype={
$1(a){var s=a.a.ga4()
return s==null?new A.j():s},
$S:242}
A.rA.prototype={
$2(a,b){return a.a.a1(0,b.a)},
$S:162}
A.rB.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aB(c),r=s.gt(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbd()
n=A.AN(o,p.gaN(),p.gP().gau())
n.toString
m=B.a.i7("\n",B.a.A(o,0,n)).gm(0)
l=p.gP().gak()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga_(b).b)b.push(new A.cz(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.r)(b),++k){j=b[k]
h&1&&A.J(i,16)
B.b.uE(i,new A.ry(j),!0)
f=i.length
for(q=s.bj(c,g),p=q.$ti,q=new A.aj(q,q.gm(0),p.i("aj<V.E>")),n=j.b,p=p.i("V.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gP().gak()>n)break
i.push(e)}g+=i.length-f
B.b.E(j.d,i)}return b},
$S:163}
A.ry.prototype={
$1(a){return a.a.gO().gak()<this.a.b},
$S:43}
A.rP.prototype={
$1(a){return!0},
$S:43}
A.rC.prototype={
$0(){this.a.r.a+=B.a.bh("\u2500",2)+">"
return null},
$S:0}
A.rJ.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:4}
A.rK.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:4}
A.rL.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.rM.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bk(new A.rH(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gO().gau()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bk(new A.rI(r,o),p.b)}}},
$S:4}
A.rH.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:4}
A.rI.prototype={
$0(){this.a.r.a+=this.b},
$S:4}
A.rD.prototype={
$0(){var s=this
return s.a.i6(B.a.A(s.b,s.c,s.d))},
$S:0}
A.rE.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP().gau(),l=n.gO().gau()
n=this.b.a
s=q.jv(B.a.A(n,0,m))
r=q.jv(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bh(" ",m))+B.a.bh("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.rF.prototype={
$0(){return this.a.vp(this.b,this.c.a.gP().gau())},
$S:0}
A.rG.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bh("\u2500",3)
else r.mV(s.c,Math.max(s.d.a.gO().gau()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.rN.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.y9(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:4}
A.bo.prototype={
l(a){var s=this.a
s="primary "+(""+s.gP().gak()+":"+s.gP().gau()+"-"+s.gO().gak()+":"+s.gO().gau())
return s.charCodeAt(0)==0?s:s}}
A.yX.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.AN(o.gbd(),o.gaN(),o.gP().gau())!=null)){s=A.mF(o.gP().gav(),0,0,o.ga4())
r=o.gO().gav()
q=o.ga4()
p=A.LY(o.gaN(),10)
o=A.vR(s,A.mF(r,A.Es(o.gaN()),p,q),o.gaN(),o.gaN())}return A.Jw(A.Jy(A.Jx(o)))},
$S:164}
A.cz.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.ct.prototype={
kA(a){var s=this.a
if(!J.v(s,a.ga4()))throw A.b(A.O('Source URLs "'+A.q(s)+'" and "'+A.q(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a1(a,b){var s=this.a
if(!J.v(s,b.ga4()))throw A.b(A.O('Source URLs "'+A.q(s)+'" and "'+A.q(b.ga4())+"\" don't match.",null))
return this.b-b.gav()},
S(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a,b.ga4())&&this.b===b.gav()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dr(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.q(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaw:1,
ga4(){return this.a},
gav(){return this.b},
gak(){return this.c},
gau(){return this.d}}
A.mG.prototype={
kA(a){if(!J.v(this.a.a,a.ga4()))throw A.b(A.O('Source URLs "'+A.q(this.ga4())+'" and "'+A.q(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gav())},
a1(a,b){if(!J.v(this.a.a,b.ga4()))throw A.b(A.O('Source URLs "'+A.q(this.ga4())+'" and "'+A.q(b.ga4())+"\" don't match.",null))
return this.b-b.gav()},
S(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a.a,b.ga4())&&this.b===b.gav()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dr(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.q(p==null?"unknown source":p)+":"+(q.eD(r)+1)+":"+(q.jd(r)+1))+">"},
$iaw:1,
$ict:1}
A.mI.prototype={
pi(a,b,c){var s,r=this.b,q=this.a
if(!J.v(r.ga4(),q.ga4()))throw A.b(A.O('Source URLs "'+A.q(q.ga4())+'" and  "'+A.q(r.ga4())+"\" don't match.",null))
else if(r.gav()<q.gav())throw A.b(A.O("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.kA(r))throw A.b(A.O('Text "'+s+'" must be '+q.kA(r)+" characters long.",null))}},
gP(){return this.a},
gO(){return this.b},
gaN(){return this.c}}
A.mJ.prototype={
gkT(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gP().gak()+1)+", column "+(p.gP().gau()+1)
if(p.ga4()!=null){s=p.ga4()
r=$.i1()
s.toString
s=o+(" of "+r.nE(s))
o=s}o+=": "+this.a
q=p.xB(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iH:1}
A.h2.prototype={
gav(){var s=this.b
s=A.Bx(s.a,s.b)
return s.b},
$ibi:1,
gfW(){return this.c}}
A.h3.prototype={
ga4(){return this.gP().ga4()},
gm(a){return this.gO().gav()-this.gP().gav()},
a1(a,b){var s=this.gP().a1(0,b.gP())
return s===0?this.gO().a1(0,b.gO()):s},
xB(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.HQ(s,a).xA()},
S(a,b){if(b==null)return!1
return b instanceof A.h3&&this.gP().S(0,b.gP())&&this.gO().S(0,b.gO())},
gJ(a){return A.c7(this.gP(),this.gO(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dr(s).l(0)+": from "+s.gP().l(0)+" to "+s.gO().l(0)+' "'+s.gaN()+'">'},
$iaw:1}
A.dc.prototype={
gbd(){return this.d}}
A.jj.prototype={
a5(){return"SqliteUpdateKind."+this.b}}
A.cu.prototype={
gJ(a){return A.c7(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
S(a,b){if(b==null)return!1
return b instanceof A.cu&&b.a===this.a&&b.b===this.b&&b.c===this.c},
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
p=p!=null?s+(", parameters: "+J.aL(p,new A.vW(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iH:1}
A.vW.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a_(a)},
$S:165}
A.kC.prototype={}
A.qB.prototype={
vf(){var s=this,r=s.d
return r==null?s.d=new A.e4(s,A.l([],t.fU),new A.qK(s),new A.qL(s),t.jy):r},
uI(){var s=this,r=s.e
return r==null?s.e=new A.e4(s,A.l([],t.lw),new A.qH(s),new A.qI(s),t.lU):r},
pR(){var s=this,r=s.f
return r==null?s.f=new A.e4(s,A.l([],t.lw),new A.qD(s),new A.qE(s),t.ag):r},
vZ(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.u(A.az(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b3(m))
r=n.a
q=r.e7(s,1)
s=r.d
p=A.Cw(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.da(new A.qM(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.Be(this,p,o,o,o)},
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
r=s.ls()
q=r!==0?A.CA(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aF(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.u(A.x("This database has already been closed"))
r=p.b
q=r.a
s=q.e7(B.e.v(a),1)
q=q.d
r=A.Cw(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.Be(p,r,"executing",a,b)}else{s=p.iS(a,!0)
try{s.ed(new A.bQ(b))}finally{s.p()}}},
K(a){return this.aF(a,B.m)},
u5(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.u(A.x("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cG(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.wV(r,p,n,o)
l=A.l([],t.lE)
k=new A.qF(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.lu(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.Be(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.N(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ah(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h5(f,e,new A.dl(!1).d0(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.lu(j,r-j,0)
n=q.buffer
h=B.c.N(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ah(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h5(f,e,""))
k.$0()
throw A.b(A.az(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.az(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
iS(a,b){var s=this.u5(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.az(a,"sql","Must contain an SQL statement."))
return B.b.gD(s)},
yb(a){return this.iS(a,!1)},
oF(a,b){var s,r=this.iS(a,!0)
try{s=r.lo(new A.bQ(b))
return s}finally{r.p()}},
fT(a){return this.oF(a,B.m)}}
A.qK.prototype={
$0(){var s=this.a,r=s.b
r.a.nd(r.b,new A.qJ(s))},
$S:0}
A.qJ.prototype={
$3(a,b,c){var s=A.IR(a)
if(s==null)return
this.a.d.ky(new A.cu(s,b,c))},
$S:166}
A.qL.prototype={
$0(){var s=this.a.b
s.a.nd(s.b,null)
return null},
$S:0}
A.qH.prototype={
$0(){var s=this.a,r=s.b
r.a.nc(r.b,new A.qG(s))
return null},
$S:0}
A.qG.prototype={
$0(){this.a.e.ky(null)},
$S:0}
A.qI.prototype={
$0(){var s=this.a.b
s.a.nc(s.b,null)
return null},
$S:0}
A.qD.prototype={
$0(){var s=this.a,r=s.b
r.a.nb(r.b,new A.qC(s))
return null},
$S:0}
A.qC.prototype={
$0(){var s=this.a.f
s.ky(null)
return 0},
$S:10}
A.qE.prototype={
$0(){var s=this.a.b
s.a.nb(s.b,null)
return null},
$S:0}
A.qM.prototype={
$2(a,b){A.Kx(a,this.a,b)},
$S:167}
A.qF.prototype={
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
A.n9.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Z("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.IA(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.IC(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.O("The argument list is unmodifiable",null))},
$ivT:1}
A.e4.prototype={
gcW(){var s=this.r
return s==null?this.r=this.qz(!1):s},
qz(a){return new A.dk(new A.zA(this,!1),this.$ti.i("dk<1>"))},
ky(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.u(o.bJ())
if((n&1)!==0)o.gaR().aC(a)}else{n=o.b
if(n>=4)A.u(o.bJ())
if((n&1)!==0)o.cA(a)
else if((n&3)===0){n=o.h4()
o=new A.cc(a,o.$ti.i("cc<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.seo(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.zA.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.zB(q,a,s)
a.r=a.e=new A.zC(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dL<1>)")}}
A.zB.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.jZ(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.zC.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.jZ(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.vS.prototype={
nt(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.IQ(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
y0(a,b){var s,r,q,p,o,n,m,l,k,j
this.nt()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e7(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e7(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d8(r.b.buffer,0,null)[B.c.ah(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.wO(r,l,o)
r=r.r
if(r!=null)r.n3(k,l,o)
if(m!==0){j=A.CA(s,k,m,"opening the database",null,null)
k.ls()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.qB(s,k,!1)}}
A.h5.prototype={
gpQ(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.nq(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dl(!1).d0(o,0,null,!0))}return q},
gv7(){return null},
bF(a,b){A.Be(this.b,a,b,this.d,this.e)},
m3(){if(this.r||this.b.r)throw A.b(A.x(u.f))},
h6(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dv()
if(s!==0?s!==101:q)r.bF(s,"executing statement")},
uS(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.uv(o))
l.push(p)}m.dv()
if(p!==0?p!==101:k)m.bF(p,"selecting from statement")
n=m.gpQ()
m.gv7()
k=new A.mt(l,n,B.al)
k.pL()
return k},
uv(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.am(r.Number(s)):A.Cd(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oS(a)
case 4:return s.lt(a)
case 5:default:return null}},
pE(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.u(A.az(a,"parameters","Expected "+A.q(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.pF(a[s-1],s)
this.e=a},
pF(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.an(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aI){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.D5(a).l(0)))
break A}if(A.bv(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oR(b,a)
break A}if(t.L.b(a)){s=q.a.oQ(b,a)
break A}s=q.pD(a,b)
break A}if(s!==0)q.bF(s,"binding parameter")},
pD(a,b){throw A.b(A.az(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eH(a){A:{if(a instanceof A.bQ){this.pE(a.a)
break A}if(a instanceof A.l8)a.a.$1(this)}},
dv(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.dv()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.ng(s.d)}},
lo(a){var s=this
s.m3()
s.dv()
s.eH(a)
return s.uS()},
ed(a){var s=this
s.m3()
s.dv()
s.eH(a)
s.h6()}}
A.ly.prototype={
j8(a,b){return this.d.I(a)?1:0},
li(a,b){this.d.H(0,a)},
lj(a){return new v.G.URL(a,"file:///").pathname},
dD(a,b){var s,r=a.a
if(r==null)r=A.Dr(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cy(new Uint8Array(0),0))
else throw A.b(A.hg(14))
return new A.hB(new A.nQ(this,r,(b&8)!==0),0)},
ll(a){}}
A.nQ.prototype={
nI(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.al(a,0,s,J.bN(B.f.ga9(r.a),0,r.b),b)
return s},
lh(){return this.d>=2?1:0},
j9(){if(this.c)this.a.d.H(0,this.b)},
fM(){return this.a.d.h(0,this.b).b},
lk(a){this.d=a},
lm(a){},
fN(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cy(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
ln(a){this.d=a},
eC(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cy(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.aw(0,b,s,a)}}
A.B2.prototype={
$1(a){return a.length!==0},
$S:9}
A.qg.prototype={
pL(){var s,r,q,p,o=A.w(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o.j(0,p,B.b.dn(s,p))}this.c=o}}
A.mt.prototype={
gt(a){return new A.zk(this)},
h(a,b){return new A.c8(this,A.cJ(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Z("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iK:1,
$io:1,
$ip:1}
A.c8.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.an(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gL(){return this.a.a},
gaZ(){return this.b},
$iF:1}
A.zk.prototype={
gn(){var s=this.a
return new A.c8(s,A.cJ(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.o5.prototype={}
A.o6.prototype={}
A.o8.prototype={}
A.o9.prototype={}
A.un.prototype={
a5(){return"OpenMode."+this.b}}
A.em.prototype={}
A.bQ.prototype={}
A.l8.prototype={}
A.dg.prototype={
l(a){return"VfsException("+this.a+")"},
$iH:1}
A.ji.prototype={}
A.b6.prototype={}
A.kR.prototype={}
A.kQ.prototype={
gja(){return 0},
nW(a,b){return 12},
gjc(){return 4096},
jb(a,b){var s=this.nI(a,b),r=a.length
if(s<r){B.f.kE(a,s,r,0)
throw A.b(B.dL)}},
$ibm:1,
$ijt:1}
A.eR.prototype={}
A.Bd.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.u(A.x("No such element"))
r=s.c
q=r.a
q.toString
q.kh(A.n(r).i("b4.E").a(r))
r.d.$0()}},
$S:0}
A.Bb.prototype={
$1(a){var s=this.a,r=s.b
s.hK(s.c,new A.eR(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:20}
A.Bc.prototype={
$4(a,b,c,d){this.a.$1(c.f7(d))},
$S:169}
A.wT.prototype={}
A.wO.prototype={
ls(){var s=this.a,r=s.r
if(r!=null)r.ng(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.wV.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
lu(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Cw(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d8(o.b.buffer,0,null)[B.c.ah(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.wU(s,o,n)
o=o.w
if(o!=null)o.n3(r,s,n)}return new A.o3(r,p)}}
A.wU.prototype={
oQ(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cG(b),J.ai(b))},
oR(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cG(s),s.length)},
lt(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.Ed(s.b,q.sqlite3_column_blob(r,a),p)},
oS(a){var s=this.c
return A.dX(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dW.prototype={$iBT:1}
A.dh.prototype={$iBU:1}
A.hi.prototype={
sm(a,b){throw A.b(A.Z("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dh(s,A.d8(s.b.buffer,0,null)[B.c.ah(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Z("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lb.prototype={
xU(a){var s,r,q=this.b
q===$&&A.A()
s="[sqlite3] "+A.dX(q,a,null)
r=$.L3
if(r==null)A.G2(s)
else r.$1(s)},
xS(a,b){var s,r=new A.aM(A.lf(A.am(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.A()
s=A.DI(q.buffer,b,8)
s.$flags&2&&A.J(s)
s[0]=A.BR(r)
s[1]=A.BP(r)
s[2]=A.BO(r)
s[3]=A.uV(r)
s[4]=A.BQ(r)-1
s[5]=A.BS(r)-1900
s[6]=B.c.am(A.Is(r),7)},
zF(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.A()
s=new A.ji(A.C7(j,b,k))
try{r=a.dD(s,d)
if(e!==0){p=r.b
o=A.d8(j.buffer,0,k)
n=B.c.ah(e,2)
o.$flags&2&&A.J(o)
o[n]=p}p=A.d8(j.buffer,0,k)
o=B.c.ah(c,2)
p.$flags&2&&A.J(p)
p[o]=0
m=r.a
return m}catch(l){p=A.E(l)
if(p instanceof A.dg){q=p
p=q.a
j=A.d8(j.buffer,0,k)
o=B.c.ah(c,2)
j.$flags&2&&A.J(j)
j[o]=p}else{j=j.buffer
j=A.d8(j,0,k)
p=B.c.ah(c,2)
j.$flags&2&&A.J(j)
j[p]=1}}return k},
zu(a,b,c){var s=this.b
s===$&&A.A()
return A.bZ(new A.qm(a,A.dX(s,b,null),c))},
zm(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bZ(new A.qj(this,a,A.dX(s,b,null),c,d))},
zB(a,b,c,d){var s=this.b
s===$&&A.A()
return A.bZ(new A.qo(this,a,A.dX(s,b,null),c,d))},
zH(a,b,c){return A.bZ(new A.qq(this,c,b,a))},
zM(a,b){return A.bZ(new A.qs(a,b))},
zs(a,b){var s,r=Date.now(),q=this.b
q===$&&A.A()
s=v.G.BigInt(r)
A.BF(A.DH(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
zq(a){return A.bZ(new A.ql(a))},
zJ(a,b,c,d){return A.bZ(new A.qr(this,a,b,c,d))},
zU(a,b,c,d){return A.bZ(new A.qw(this,a,b,c,d))},
zQ(a,b){return A.bZ(new A.qu(a,b))},
zO(a,b){return A.bZ(new A.qt(a,b))},
zz(a,b){return A.bZ(new A.qn(this,a,b))},
zD(a,b){return A.bZ(new A.qp(a,b))},
zS(a,b){return A.bZ(new A.qv(a,b))},
zo(a,b){return A.bZ(new A.qk(this,a,b))},
zv(a){return a.gja()},
zx(a,b,c){if(t.j2.b(a))return a.nW(b,c)
return 12},
zK(a){if(t.j2.b(a))return a.gjc()
return 4096},
wo(a){a.$0()},
wj(a){return a.$0()},
wm(a,b,c,d,e){var s=this.b
s===$&&A.A()
a.$3(b,A.dX(s,d,null),A.am(v.G.Number(e)))},
wu(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dW(s,b),new A.hi(s,c,d))},
wy(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.A()
r.$2(new A.dW(s,b),new A.hi(s,c,d))},
ww(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.A()
null.$2(new A.dW(s,b),new A.hi(s,c,d))},
wA(a,b){var s
null.toString
s=this.a
s===$&&A.A()
null.$1(new A.dW(s,b))},
ws(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.A()
r.$1(new A.dW(s,b))},
wq(a,b,c,d,e){var s=this.b
s===$&&A.A()
return null.$2(A.C7(s,c,b),A.C7(s,e,d))},
wh(a,b){return a.$1(b)},
wf(a,b){return a.gzY().$1(b)},
wd(a,b,c){return a.gzX().$2(b,c)}}
A.qm.prototype={
$0(){return this.a.li(this.b,this.c)},
$S:0}
A.qj.prototype={
$0(){var s,r=this,q=r.b.j8(r.c,r.d),p=r.a.b
p===$&&A.A()
p=A.d8(p.buffer,0,null)
s=B.c.ah(r.e,2)
p.$flags&2&&A.J(p)
p[s]=q},
$S:0}
A.qo.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.lj(q.c)),o=p.length
if(o>q.d)throw A.b(A.hg(14))
s=q.a.b
s===$&&A.A()
s=A.bV(s.buffer,0,null)
r=q.e
B.f.cU(s,r,p)
s.$flags&2&&A.J(s)
s[r+o]=0},
$S:0}
A.qq.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.A()
s=A.bV(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.D3(s,q.b)
else return A.D3(s,null)},
$S:0}
A.qs.prototype={
$0(){this.a.ll(A.d2(this.b,0,0))},
$S:0}
A.ql.prototype={
$0(){return this.a.j9()},
$S:0}
A.qr.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.jb(A.bV(r.buffer,s.c,s.d),A.am(v.G.Number(s.e)))},
$S:0}
A.qw.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.A()
s.b.eC(A.bV(r.buffer,s.c,s.d),A.am(v.G.Number(s.e)))},
$S:0}
A.qu.prototype={
$0(){return this.a.fN(A.am(v.G.Number(this.b)))},
$S:0}
A.qt.prototype={
$0(){return this.a.lm(this.b)},
$S:0}
A.qn.prototype={
$0(){var s,r=this.b.fM(),q=this.a.b
q===$&&A.A()
q=A.d8(q.buffer,0,null)
s=B.c.ah(this.c,2)
q.$flags&2&&A.J(q)
q[s]=r},
$S:0}
A.qp.prototype={
$0(){return this.a.lk(this.b)},
$S:0}
A.qv.prototype={
$0(){return this.a.ln(this.b)},
$S:0}
A.qk.prototype={
$0(){var s,r=this.b.lh(),q=this.a.b
q===$&&A.A()
q=A.d8(q.buffer,0,null)
s=B.c.ah(this.c,2)
q.$flags&2&&A.J(q)
q[s]=r},
$S:0}
A.da.prototype={}
A.i7.prototype={
ac(a,b,c,d){var s,r=null,q={},p=A.bf(A.BF(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.vZ(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.p4(q,this,p,o)
o.d=s
o.f=new A.p5(q,o,s)
return new A.b7(o,A.n(o).i("b7<1>")).ac(a,b,c,d)},
bV(a,b,c){return this.ac(a,null,b,c)}}
A.p4.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a6(q,t.m).bE(new A.p6(p,r.b,s,r),s.gvz(),t.P)},
$S:0}
A.p6.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.u(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaR().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:22}
A.p5.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaR().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eV.prototype={
C(){var s=0,r=A.h(t.H),q=this,p
var $async$C=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.C()
p=q.c
if(p!=null)p.C()
q.c=q.b=null
return A.e(null,r)}})
return A.f($async$C,r)},
gn(){var s=this.a
return s==null?A.u(A.x("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.t($.C,t.g5)
s=new A.ap(o,t.ex)
r=p.d
q=t.m
p.b=A.bn(r,"success",new A.yp(p,s),!1,q)
p.c=A.bn(r,"error",new A.yq(p,s),!1,q)
return o}}
A.yp.prototype={
$1(a){var s,r=this.a
r.C()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aD(s!=null)},
$S:3}
A.yq.prototype={
$1(a){var s=this.a
s.C()
s=s.d.error
if(s==null)s=a
this.b.aJ(s)},
$S:3}
A.pT.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:3}
A.pU.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aJ(s)},
$S:3}
A.pY.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:3}
A.pZ.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aJ(s)},
$S:3}
A.q_.prototype={
$1(a){this.a.aJ(new A.bj("IndexedDB open blocked"))},
$S:3}
A.re.prototype={
$1(a){return A.bf(a[1])},
$S:191}
A.wP.prototype={
w_(){var s={}
s.dart=new A.wQ(this).$0()
return s},
iK(a){return this.xO(a)},
xO(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a6(v.G.WebAssembly.instantiateStreaming(a,p.w_()),t.m),$async$iK)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iK,r)}}
A.wQ.prototype={
$0(){var s=this.a.a,r=A.bf(v.G.Object),q=A.bf(r.create.apply(r,[null]))
q.error_log=A.d_(s.gxT())
q.localtime=A.bY(s.gxR())
q.xOpen=A.Cr(s.gzE())
q.xDelete=A.oD(s.gzt())
q.xAccess=A.hP(s.gzl())
q.xFullPathname=A.hP(s.gzA())
q.xRandomness=A.oD(s.gzG())
q.xSleep=A.bY(s.gzL())
q.xCurrentTimeInt64=A.bY(s.gzr())
q.xClose=A.d_(s.gzp())
q.xRead=A.hP(s.gzI())
q.xWrite=A.hP(s.gzT())
q.xTruncate=A.bY(s.gzP())
q.xSync=A.bY(s.gzN())
q.xFileSize=A.bY(s.gzy())
q.xLock=A.bY(s.gzC())
q.xUnlock=A.bY(s.gzR())
q.xCheckReservedLock=A.bY(s.gzn())
q.xDeviceCharacteristics=A.d_(s.gja())
q.xFileControl=A.oD(s.gzw())
q.xSectorSize=A.d_(s.gjc())
q["dispatch_()v"]=A.d_(s.gwn())
q["dispatch_()i"]=A.d_(s.gwi())
q.dispatch_update=A.Cr(s.gwl())
q.dispatch_xFunc=A.hP(s.gwt())
q.dispatch_xStep=A.hP(s.gwx())
q.dispatch_xInverse=A.hP(s.gwv())
q.dispatch_xValue=A.bY(s.gwz())
q.dispatch_xFinal=A.bY(s.gwr())
q.dispatch_compare=A.Cr(s.gwp())
q.dispatch_busy=A.bY(s.gwg())
q.changeset_apply_filter=A.bY(s.gwe())
q.changeset_apply_conflict=A.oD(s.gwc())
return q},
$S:39}
A.hh.prototype={}
A.p7.prototype={
iO(){var s=0,r=A.h(t.H),q=this,p,o
var $async$iO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.t($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.d_(new A.pa(o))
new A.ap(p,t.h1).aD(A.Hp(o,t.m))
s=2
return A.a(p,$async$iO)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$iO,r)},
e5(a,b){return this.uK(a,b)},
uK(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$e5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.GS(),b)
o=A.Jz(p)
s=2
return A.a(A.MB(new A.p9(a,o,p),t.mj),$async$e5)
case 2:s=3
return A.a(o.b.a,$async$e5)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$e5,r)},
u3(a){return this.e5(new A.p8(a),"readwrite")}}
A.pa.prototype={
$1(a){var s=A.bf(this.a.result)
if(J.v(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:22}
A.p9.prototype={
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
A.p8.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.H),q=this,p,o,n
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
$S:23}
A.jP.prototype={
pm(a){var s=A.Ah(new A.z_(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.Ah(new A.z0(this))},
k6(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
us(a){return this.k6(a,9007199254740992,0)},
ut(a,b){return this.k6(a,9007199254740992,b)},
iJ(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$iJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.w(t.N,t.S)
k=new A.eV(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$iJ)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.u(A.x("Await moveNext() first"))
n=o.key
n.toString
A.G(n)
m=o.primaryKey
m.toString
l.j(0,n,A.am(A.f6(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iJ,r)},
is(a){return this.wZ(a)},
wZ(a){var s=0,r=A.h(t.o),q,p=this,o
var $async$is=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cE(p.d.index("fileName").getKey(a),t.Y),$async$is)
case 3:q=o.am(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)},
k7(a){return A.cE(this.d.get(a),t.k).ao(new A.yZ(a),t.m)},
eE(a,b){return this.oT(a,b)},
oT(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.k7(a),$async$eE)
case 3:h=d
g=h.length
f=new A.cy(new Uint8Array(g),g)
e=new A.eV(p.e.openCursor(p.us(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$eE)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.u(A.x("Await moveNext() first"))
k=n.a(l.key)
j=A.am(A.f6(k[1]))
if(j>=h.length){s=5
break}i=new A.z1(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.vA(A.bf(l.value)).ao(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eE,r)},
ij(a){return this.vX(a)},
vX(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$ij=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
o=A
s=3
return A.a(A.cE(p.d.put({name:a,length:0}),t.Y),$async$ij)
case 3:q=o.am(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
b0(a,b){return this.ze(a,b)},
ze(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$b0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
s=2
return A.a(q.k7(a),$async$b0)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.N(new A.T(o,n),n.i("o.E"))
B.b.aO(m)
s=3
return A.a(A.BA(new A.Y(m,new A.z2(new A.z3(q,a),b),A.a0(m).i("Y<1,y<~>>")),t.H),$async$b0)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eV(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$b0)
case 6:s=7
return A.a(A.cE(l.gn().update({name:p.name,length:b.c}),t.X),$async$b0)
case 7:case 5:return A.e(null,r)}})
return A.f($async$b0,r)},
dB(a,b,c){return this.yP(0,b,c)},
yP(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
s=2
return A.a(q.k7(b),$async$dB)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cE(q.e.delete(q.ut(b,B.c.N(c,4096)*4096)),t.X),$async$dB)
case 5:case 4:o=new A.eV(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dB)
case 6:s=7
return A.a(A.cE(o.gn().update({name:p.name,length:c}),t.X),$async$dB)
case 7:return A.e(null,r)}})
return A.f($async$dB,r)},
im(a){return this.wa(a)},
wa(a){var s=0,r=A.h(t.H),q=this,p
var $async$im=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.u(A.x("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.BA(A.l([A.cE(q.e.delete(q.k6(a,9007199254740992,0)),p),A.cE(q.d.delete(a),p)],t.iw),t.H),$async$im)
case 2:return A.e(null,r)}})
return A.f($async$im,r)}}
A.z_.prototype={
$0(){this.a.b.ai()},
$S:4}
A.z0.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aJ(r)},
$S:4}
A.yZ.prototype={
$1(a){if(a==null)throw A.b(A.az(this.a,"fileId","File not found in database"))
else return a},
$S:194}
A.z1.prototype={
$1(a){var s=this.a
s.cU(s,this.b,J.bN(a,0,this.c))},
$S:195}
A.z3.prototype={
oy(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cE(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.k),$async$$2)
case 2:m=d
l=t.a.a(B.f.ga9(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cE(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cE(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.oy(a,b)},
$S:196}
A.z2.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:197}
A.yB.prototype={
ve(a,b,c){B.f.cU(this.b.l0(a,new A.yC(this,a)),b,c)},
vD(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.N(q,4096)
o=B.c.am(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.ve(p*4096,o,J.bN(B.f.ga9(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.yC.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cU(s,0,J.bN(B.f.ga9(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:198}
A.nZ.prototype={}
A.dB.prototype={
f4(a){var s=this
if(s.e||s.d.a==null)A.u(A.hg(10))
if(a.kM(s.x)){s.cC(!0)
return a.d.a}else return A.bD(null,t.H)},
cC(a){return this.v4(a)},
v4(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.N(o,o.$ti.i("o.E"))
o.aa(0)
s=5
return A.a(p.d.u3(n).b_(new A.rS(p,n,a)),$async$cC)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cC,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.f4(new A.jN(new A.rT(),new A.ap(new A.t($.C,t.D),t.F)))
p.e=!0
p.cC(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.ga_(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
dO(a,b){return this.qw(a,b)},
qw(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
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
return A.a(a.is(b),$async$dO)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
eZ(){var s=0,r=A.h(t.H),q=this,p
var $async$eZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.e5(new A.rR(q,p),"readonly"),$async$eZ)
case 2:s=3
return A.a(A.HN(p,t.H),$async$eZ)
case 3:return A.e(null,r)}})
return A.f($async$eZ,r)},
cK(){return this.cC(!1)},
j8(a,b){return this.w.d.I(a)?1:0},
li(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.f4(new A.jH(s,a,new A.ap(new A.t($.C,t.D),t.F)))},
lj(a){return new v.G.URL(a,"file:///").pathname},
dD(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Dr(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dD(new A.ji(o),b)
if(r===0)if((b&8)!==0)p.y.u(0,o)
else p.f4(new A.hs(p,o,new A.ap(new A.t($.C,t.D),t.F)))
return new A.hB(new A.nR(p,q.a,o),0)},
ll(a){}}
A.rS.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.u(A.x("Future already completed"))
p.cp(null)}o.cC(this.c)},
$S:4}
A.rT.prototype={
$1(a){return this.o3(a)},
o3(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:23}
A.rR.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.iJ(),$async$$1)
case 2:m=c
l=q.a
l.z.E(0,m)
p=m.gaj(),p=p.gt(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.eE(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:23}
A.nR.prototype={
jb(a,b){this.b.jb(a,b)},
gja(){return 0},
gjc(){return 4096},
lh(){return this.b.d>=2?1:0},
j9(){},
fM(){return this.b.fM()},
lk(a){this.b.d=a
return null},
lm(a){},
nW(a,b){return 12},
fN(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.u(A.hg(10))
s.b.fN(a)
if(!r.y.G(0,s.c))r.f4(new A.jN(new A.yY(s,a),new A.ap(new A.t($.C,t.D),t.F)))},
ln(a){this.b.d=a
return null},
eC(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.u(A.hg(10))
s=m.c
if(l.y.G(0,s)){m.b.eC(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cy(new Uint8Array(0),0)
q=J.bN(B.f.ga9(r.a),0,r.b)
m.b.eC(a,b)
p=new Uint8Array(a.length)
B.f.cU(p,0,a)
o=A.l([],t.p8)
n=$.C
o.push(new A.nZ(b,p))
l.f4(new A.hL(l,s,q,o,new A.ap(new A.t(n,t.D),t.F)))},
$ibm:1,
$ijt:1}
A.yY.prototype={
$1(a){return this.ox(a)},
ox(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dO(a,o.c),$async$$1)
case 3:q=n.dB(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:23}
A.b8.prototype={
kM(a){a.hK(a.c,this,!1)
return!0}}
A.jN.prototype={
aX(a){return this.w.$1(a)}}
A.jH.prototype={
kM(a){var s,r,q,p
if(!a.gF(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.jH)if(s.x===r)return!1
else s=s.gfv()
else if(s instanceof A.hL){q=s.gfv()
if(s.x===r){p=s.a
p.toString
p.kh(A.n(s).i("b4.E").a(s))}s=q}else if(s instanceof A.hs){if(s.x===r){r=s.a
r.toString
r.kh(A.n(s).i("b4.E").a(s))
return!1}s=s.gfv()}else break}a.hK(a.c,this,!1)
return!0},
aX(a){return this.yH(a)},
yH(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dO(a,o),$async$aX)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.im(n),$async$aX)
case 3:return A.e(null,r)}})
return A.f($async$aX,r)}}
A.hs.prototype={
aX(a){return this.yG(a)},
yG(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.ij(p),$async$aX)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aX,r)}}
A.hL.prototype={
kM(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.hL)if(r.x===s){B.b.E(r.z,this.z)
return!1}else r=r.gfv()
else if(r instanceof A.hs){if(r.x===s)break
r=r.gfv()}else break
a.hK(a.c,this,!1)
return!0},
aX(a){return this.yI(a)},
yI(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.yB(m,A.w(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.r)(m),++o){n=m[o]
l.vD(n.a,n.b)}k=a
s=3
return A.a(q.w.dO(a,q.x),$async$aX)
case 3:s=2
return A.a(k.b0(c,l),$async$aX)
case 2:return A.e(null,r)}})
return A.f($async$aX,r)}}
A.fv.prototype={
a5(){return"FileType."+this.b}}
A.h1.prototype={
bP(){var s=this.d
if(s!=null)return s
throw A.b(A.x("VFS closed"))},
j8(a,b){var s=$.Bi().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bP().br(s)?1:0},
li(a,b){var s=$.Bi().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bP().fp(s,!1)},
lj(a){return new v.G.URL(a,"file:///").pathname},
dD(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dD(a,b)
s=$.Bi().h(0,p)
if(s==null)return q.e.dD(a,b)
r=q.bP()
if(!r.br(s))if((b&4)!==0){r.dk(s).truncate(0)
r.fp(s,!0)}else throw A.b(B.dK)
return new A.hB(new A.oe(q,s,(b&8)!==0),0)},
ll(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cP(a,b){return this.y4(a,b)},
cO(a){return this.cP(a,!1)},
y4(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.vP(a,b)
s=2
return A.a(m.$1("meta"),$async$cP)
case 2:l=d
k=J.v(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cP)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cP)
case 4:o=d
n=q.d=new A.zg(new Uint8Array(2),l,p,o)
if(k){n.fp(B.b_,p.getSize()>0)
n.fp(B.b0,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cP,r)}}
A.vP.prototype={
or(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.or(a)},
$S:199}
A.oe.prototype={
nI(a,b){return A.Do(this.a.bP().dk(this.b),a,{at:b})},
lh(){return this.d>=2?1:0},
j9(){var s=this.a,r=this.b
s.bP().dk(r).flush()
if(this.c)s.bP().fp(r,!1)},
fM(){return this.a.bP().dk(this.b).getSize()},
lk(a){this.d=a},
lm(a){this.a.bP().dk(this.b).flush()},
fN(a){this.a.bP().dk(this.b).truncate(a)},
ln(a){this.d=a},
eC(a,b){if(A.Dp(this.a.bP().dk(this.b),a,{at:b})<a.length)throw A.b(B.dM)}}
A.zg.prototype={
br(a){var s=this.a
A.Do(this.b,s,{at:0})
return s[a.a]!==0},
fp(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.J(s)
s[a.a]=r
A.Dp(this.b,s,{at:0})},
dk(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.wJ.prototype={
pj(a,b){var s=this,r=s.c
r.a!==$&&A.cA()
r.a=s
r=t.S
A.yD(new A.wK(s),r)
A.yD(new A.wL(s),r)
s.r=A.yD(new A.wM(s),r)
s.w=A.yD(new A.wN(s),r)},
e7(a,b){var s=J.L(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bV(this.b.buffer,0,null)
B.f.aw(q,r,r+s.gm(a),a)
B.f.kE(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cG(a){return this.e7(a,0)},
nd(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
nb(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
nc(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.wK.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.wL.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.wM.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.wN.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.ie.prototype={}
A.uY.prototype={
pg(a){var s,r=this,q=r.a
q.start()
r.c=A.bn(q,"message",new A.v1(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.ky()
q.toString
A.ju(q,s,null,null,!1).ao(new A.v2(r),t.P)}},
jR(a){return this.rq(a)},
rq(a){var s=0,r=A.h(t.H),q=this
var $async$jR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.M0(a,new A.uZ(q),q.gxp(),new A.v_(q),new A.v0(q))
return A.e(null,r)}})
return A.f($async$jR,r)},
fU(a,b,c){return this.oL(a,b,c,c)},
oL(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fU=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.Hf(null))
o=p.e++
n=new A.t($.C,t.a7)
p.f.j(0,o,new A.ap(n,t.h1))
a.i=o
p.a.postMessage(a,A.hU(a))
s=3
return A.a(n,$async$fU)
case 3:m=f
if(J.v(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.IE(m))
case 1:return A.e(q,r)}})
return A.f($async$fU,r)},
ty(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.C()
s=q.d
if(s!=null)s.C()
for(s=q.f,r=new A.aU(s,s.r,s.e,A.n(s).i("aU<2>"));r.k();)r.d.aJ(new A.ic(a))
s.aa(0)
p.ai()},
mj(){return this.ty(null)}}
A.v1.prototype={
$1(a){if(a.data=="_disconnect"){this.a.mj()
return}this.a.jR(A.bf(a.data))},
$S:3}
A.v2.prototype={
$1(a){this.a.mj()
a.a.ai()},
$S:200}
A.v0.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aD(a)},
$S:22}
A.v_.prototype={
$1(a){return this.oj(a)},
oj(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.wk(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bd(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.E(a0)
k=A.ad(a0)
if(!(l instanceof A.ds)){b.console.error("Error in worker: "+J.a_(l))
b.console.error("Original trace: "+A.q(k))}b=l
if(b instanceof A.c9){h=A.HE(b)
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
d.a.postMessage(c,A.hU(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:201}
A.uZ.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:22}
A.ic.prototype={
l(a){return"Channel to database worker is closed: "+A.q(this.a)},
$iH:1}
A.qz.prototype={
cf(a){return this.xP(a)},
xP(a){var s=0,r=A.h(t.n),q
var $async$cf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.wS(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cf,r)}}
A.l7.prototype={}
A.qh.prototype={}
A.eP.prototype={}
A.lp.prototype={
iL(){var s=0,r=A.h(t.H),q=this
var $async$iL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cO(q.b),$async$iL)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iL,r)},
l2(){var s=0,r=A.h(t.H),q=this
var $async$l2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$l2,r)}}
A.rs.prototype={
yK(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
qA(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.wZ.prototype={
$1(a){var s=new A.t($.C,t.D),r=new A.d3(new A.ap(s,t.F))
this.a.a=r
this.b.aD(r)
return A.HO(s)},
$S:202}
A.x_.prototype={
$2(a,b){var s,r,q
A.bf(a)
s=J.v(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bD(new A.ds("Operation was cancelled"),b)
else q.bD(a,b)}return null},
$S:203}
A.d3.prototype={}
A.lc.prototype={
gvP(){if(this.c.a)return!1
return!this.d||this.f!=null},
dK(a){return this.pq(a)},
pq(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dK=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.ky()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.ju(n,o.a,null,o.grw(),!0),$async$dK)
case 6:m=c
s=7
return A.a(A.ju(n,o.b,a,null,!1),$async$dK)
case 7:l=c
j=o.e
j=j==null?null:j.iL()
s=8
return A.a(j instanceof A.t?j:A.bd(j,t.H),$async$dK)
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
return A.f($async$dK,r)},
rz(){this.nK()},
kS(a,b,c){return this.c.j4(new A.qO(this,a,b,c),b,c)},
nK(){return this.c.lg(new A.qP(this),t.H)}}
A.qO.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dK(r.c).ao(new A.qN(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.qN.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.qP.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.l2()
s.a.ai()
r.a.ai()
p.f=null}},
$S:4}
A.iV.prototype={
j4(a,b,c){return this.zd(a,b,c,c)},
lg(a,b){return this.j4(a,null,b)},
zd(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$j4=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.v(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.uf(h,p)
if(!p.a){h.a=p.a=!0
q=A.it(a,c).b_(o)
s=1
break}else{n={}
m=new A.t($.C,c.i("t<0>"))
l=new A.ap(m,c.i("ap<0>"))
n.a=null
h=new A.ue(h,n,l,a,c)
if(!g)n.a=A.bn(b,"abort",new A.ud(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.af(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.al(j,0,i,h,n)
B.b.al(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.b_(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$j4,r)}}
A.uf.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gF(0)){s=r.b
if(s===r.c)A.u(A.aE());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.ue.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.C()
r.c.aD(A.it(r.d,r.e))},
$S:0}
A.ud.prototype={
$1(a){var s,r=this
r.a.a.C()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aJ(B.ap)}},
$S:3}
A.en.prototype={
gnP(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
B.b.E(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.r4.prototype={
$1(a){if(a!=null)return A.G(a)
return null},
$S:204}
A.lT.prototype={
a5(){return"MessageType."+this.b}}
A.vD.prototype={
wk(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.iy(a,b)
case"connect":return p.kG(a,b)
case"custom":return p.eg(a,b)
case"fileSystemExists":return p.fi(a,b)
case"fileSystemFlush":return p.fj(a,b)
case"fileSystemAccess":return p.fh(a,b)
case"runQuery":return p.iC(a,b)
case"exclusiveLock":return p.ix(a,b)
case"releaseLock":s=p.bA(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.u(A.x("Lock to be released is not active."))
q.b.ai()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.iv(a,b)
case"openAdditionalConnection":return p.iz(a,b)
case"updateRequest":return p.iD(a,b)
case"rollbackRequest":return p.iB(a,b)
case"commitRequest":return p.iw(a,b)
case"dedicatedCompatibilityCheck":return p.dQ(a,b)
case"sharedCompatibilityCheck":return p.dQ(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dQ(a,b)
default:r=A.f7(new A.bA(!1,o,o,"Unsupported request "+A.q(a.t)),o)
q=new A.t($.C,t.hl)
q.co(r)
return q}}}
A.dx.prototype={
a5(){return"FileSystemImplementation."+this.b}}
A.cx.prototype={
a5(){return"TypeCode."+this.b},
w2(a){var s=null
switch(this.a){case 0:s=A.u(A.O("Unsupported type code",null))
break
case 1:a=A.am(A.f6(a))
s=a
break
case 2:s=A.Cd(t.bJ.a(a).toString(),null)
break
case 3:A.f6(a)
s=a
break
case 4:A.G(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hN(a)
s=a
break
case 6:break}return s}}
A.eo.prototype={
n4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.q(r)+" parameters, got "+A.q(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aF:B.b3[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.am(A.f6(h))))
if(k!==0)a.bF(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bF(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f6(h))
if(k!==0)a.bF(k,e)
break
case 4:g=B.e.v(A.G(h))
k=s.dart_sqlite3_bind_text(d,i,c.cG(g),g.length)
if(k!==0)a.bF(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cG(h),h.length)
if(k!==0)a.bF(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bF(k,e)
break
case 7:f=A.hN(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bF(k,e)
break
case 0:throw A.b(A.Z("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mU()},
h(a,b){var s=this.c[b],r=s>=8?B.aF:B.b3[s]
return r.w2(this.a[b])},
j(a,b,c){this.mU()},
mU(){throw A.b(A.Z("decodeValues list is unmodifiable"))}}
A.Aw.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:22}
A.pR.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:3}
A.pS.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aJ(s)},
$S:3}
A.pV.prototype={
$1(a){this.a.aD(this.c.a(this.b.result))},
$S:3}
A.pW.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aJ(s)},
$S:3}
A.pX.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aJ(s)},
$S:3}
A.uU.prototype={
wB(){var s,r,q,p
for(s=this.b,r=new A.aU(s,s.r,s.e,A.n(s).i("aU<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aa(0)}}
A.ir.prototype={
a5(){return"FileType."+this.b}}
A.dQ.prototype={
a5(){return"StorageMode."+this.b}}
A.fW.prototype={
l(a){return"Remote error: "+this.a},
$iH:1}
A.ds.prototype={}
A.Ag.prototype={
$1(a){return A.bf(a.data)},
$S:206}
A.k2.prototype={
C(){var s=this.a
if(s!=null)s.C()
this.a=null}}
A.hq.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.C()
q.d.C()
q.e.C()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.r)(p),++n)p[n].abort()
B.b.aa(p)
p=q.f
if(p!=null)p.b.ai()
s=2
return A.a(q.a.f9(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
mM(a){var s=new v.G.AbortController()
a.onabort=A.Ah(new A.yh(s))
this.w.push(s)
return s},
ld(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gvP()){r=p.mM(b)
o=s.kS(c,r.signal,d).b_(new A.yl(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.x("Requested operation on inactive lock state."))}if(o==null)o=A.it(c,d)
q=p.a.z
return q instanceof A.dB?o.b_(q.gx3()):o},
y_(a){var s=this,r=s.mM(a),q=new A.t($.C,t.hy),p=new A.ay(q,t.ho),o=t.H
A.Bz(s.a.f.kS(new A.yi(s,p),r.signal,o),new A.yj(p),o,t.K)
return q.b_(new A.yk(s,r))}}
A.yh.prototype={
$0(){return this.a.abort()},
$S:0}
A.yl.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:4}
A.yi.prototype={
$0(){var s=this.a,r=s.r++,q=new A.t($.C,t.D)
s.f=new A.a5(r,new A.ay(q,t.h))
this.b.aD(r)
return q},
$S:2}
A.yj.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bD(a,b)},
$S:11}
A.yk.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:4}
A.ho.prototype={
pl(a,b,c){this.b.a.b_(new A.y1(this))},
dQ(a,b){return this.qJ(a,b)},
qJ(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.n7(a),$async$dQ)
case 3:q={r:d.gnP(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
kG(a,b){return this.xc(a,b)},
xc(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$kG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gmd()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hU(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kG,r)},
eg(a,b){return this.xd(a,b)},
xd(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lZ(l)
n=a.r
s=7
return A.a(o.a.gci(),$async$eg)
case 7:s=6
return A.a(d.cL(p,new A.qh(n)),$async$eg)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cL(p,new A.l7(a)),$async$eg)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
iy(a,b){return this.xs(a,b)},
xs(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$iy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.lg(new A.y6(p,a),t.m),$async$iy)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)},
iC(a,b){return this.xw(a,b)},
xw(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$iC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bA(a)
n=o.a
s=3
return A.a(n.gci(),$async$iC)
case 3:m=d
q=o.ld(a.z,b,new A.y9(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iC,r)},
ix(a,b){return this.xh(a,b)},
xh(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$ix=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bA(a).y_(b),$async$ix)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ix,r)},
iw(a,b){return this.xb(a,b)},
xb(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bA(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dI(n,new A.y3(p,o),a),$async$iw)
case 6:q=d
s=1
break
s=4
break
case 5:n.C()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
iB(a,b){return this.xv(a,b)},
xv(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bA(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dI(n,new A.y8(p,o),a),$async$iB)
case 6:q=d
s=1
break
s=4
break
case 5:n.C()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$iB,r)},
iD(a,b){return this.xy(a,b)},
xy(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$iD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bA(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dI(n,new A.yb(p,o),a),$async$iD)
case 6:q=d
s=1
break
s=4
break
case 5:n.C()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$iD,r)},
iz(a,b){return this.xt(a,b)},
xt(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$iz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bA(a).a;++m.w
s=3
return A.a(A.Az(),$async$iz)
case 3:o=d
n=o.a
p.w.lC(o.b).x.push(A.Eo(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iz,r)},
iv(a,b){return this.xa(a,b)},
xa(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$iv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bA(a)
B.b.H(p.x,o)
s=3
return A.a(o.p(),$async$iv)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
fj(a,b){return this.xk(a,b)},
xk(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bA(a).a.gcS(),$async$fj)
case 3:o=d
s=o instanceof A.dB?4:5
break
case 4:s=6
return A.a(o.cC(!1),$async$fj)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
fh(a,b){return this.xi(a,b)},
xi(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bA(a)
n=B.b4[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcS(),$async$fh)
case 4:s=3
return A.a(l.ld(null,k,new j.y4(d,n,m,a),t.m),$async$fh)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
fi(a,b){return this.xj(a,b)},
xj(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bA(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcS(),$async$fi)
case 4:s=3
return A.a(n.ld(null,m,new l.y5(d,a),t.y),$async$fi)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
dI(a,b,c){return this.oV(a,b,c)},
oV(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dI)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
xq(a){},
cH(a){var s=0,r=A.h(t.X),q,p=this
var $async$cH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fU({r:a,z:null,i:0,d:null,t:"custom"},B.cP,t.m),$async$cH)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cH,r)},
lZ(a){return B.b.no(this.x,new A.y0(a))},
bA(a){var s=a.d
if(s!=null)return this.lZ(s)
else throw A.b(A.O("Request requires database id",null))},
$iDc:1}
A.y1.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.r)(p),++n
s=2
break
case 4:B.b.aa(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.y6.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cf(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.x_(h.d,A.HI(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcS():m.gci(),$async$$0)
case 8:l=A.Eo(m,null)
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
return A.a(m.f9(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:207}
A.y9.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.x("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.eo(s,r,A.bV(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oG(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.am(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.wQ(l,k.s,q)
s=o.d
return A.FZ(s.sqlite3_get_autocommit(p)!==0,m,A.am(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:39}
A.y3.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gci(),$async$$0)
case 3:q=b.a.pR().gcW().aK(new A.y2(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:70}
A.y2.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hU(s))},
$S:71}
A.y8.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gci(),$async$$0)
case 3:q=b.a.uI().gcW().aK(new A.y7(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:70}
A.y7.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hU(s))},
$S:71}
A.yb.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gci(),$async$$0)
case 3:q=b.a.vf().gcW().aK(new A.ya(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:210}
A.ya.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hU(s))},
$S:211}
A.y4.prototype={
$0(){var s,r,q,p=this,o=p.a.dD(new A.ji(A.F4(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fN(s.byteLength)
o.eC(A.bV(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fM()
r=new Uint8Array(q)
o.jb(r,0)
q={r:t.a.a(J.GZ(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.j9()}},
$S:39}
A.y5.prototype={
$0(){return this.a.j8(A.F4(B.b4[this.b.f]),0)===1},
$S:44}
A.y0.prototype={
$1(a){return a.b===this.a},
$S:212}
A.ld.prototype={
gcS(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.it(new A.qS(p),t.H):o,$async$gcS)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcS,r)},
gci(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gci=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.it(new A.qR(p),t.u):o,$async$gci)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gci,r)},
f9(){var s=0,r=A.h(t.H),q=this
var $async$f9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$f9)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f9,r)},
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
if(j!=null)j.wB()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.CQ()
A.Bw(m)
k=l.a.get(m)
if(k==null)A.u(A.x("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.t?j:A.bd(j,t.H),$async$p)
case 6:q.f.nK()
return A.e(null,r)}})
return A.f($async$p,r)},
mq(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a5(s,!0)
p=a.iS(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gD(0)).p()
n.j(0,p.d,p)
return new A.a5(p,!0)}return new A.a5(p,!1)},
wQ(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aF(b,B.m)
else{s=null
r=null
q=this.mq(a,b)
s=q.a
r=q.b
try{s.ed(new A.l8(c.gvN()))}finally{if(r)s.dv()
else s.p()}}},
oG(a,b,c){var s,r=null,q=null,p=this.mq(a,b)
r=p.a
q=p.b
try{s=A.IF(r,c)
return s}finally{if(q)r.dv()
else r.p()}}}
A.qS.prototype={
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
return A.a(A.vO("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gea()
s=3
break
case 5:case 6:s=10
return A.a(A.lq("drift_db/"+l.c,k===B.az,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gea()
s=3
break
case 7:s=11
return A.a(A.lA(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gea()
s=3
break
case 8:l.z=A.BC("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:2}
A.qR.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcS(),$async$$0)
case 4:n=b
o.nt()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e7(B.e.v(n.a),1),n,0)
if(m===0)A.u(A.x("could not register vfs"))
$.CQ().j(0,n,m)
s=5
return A.a(l.f.kS(new A.qQ(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:58}
A.qQ.prototype={
$0(){var s=this.a
return s.a.b.iP(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:58}
A.xg.prototype={
gmd(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.oP()
r.Q!==$&&A.Bf()
r.Q=s
q=s}return q},
eh(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eh=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cf(A.c_(A.Kw(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$eh)
case 7:if(!b){s=6
break}m=h.gn()
s=J.v(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.ie(i.port,i.lockName,null)
n.lC(l)
s=9
break
case 10:s=A.Ml(m.t)?11:12
break
case 11:s=13
return A.a(n.n7(m),$async$eh)
case 13:k=b
j.postMessage(k.gnP())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.C(),$async$eh)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eh,r)},
lC(a){var s=this,r=A.Jq(a,s.d++,s)
s.c.push(r)
r.b.a.b_(new A.xh(s,r))
return r},
n7(a){return this.x.lg(new A.xi(this,a),t.p6)},
cf(a){return this.xQ(a)},
xQ(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bf(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.x("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.q(p)+", got "+m+")"))
s=5
return A.a(t.cM.b(n)?n:A.bd(n,t.he),$async$cf)
case 5:s=3
break
case 4:o=A.Bz(q.b.cf(m),new A.xj(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cf)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cf,r)},
x_(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aU(s,s.r,s.e,A.n(s).i("aU<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.az||b===B.aZ
o=A.BJ(t.cj)
n=c===0?null:new A.uU(c,A.dF(null,null,t.N,t.fw))
n=new A.ld(this,r,a,b,d,new A.lc(q+"-outer",q,new A.iV(o),p),n)
s.j(0,r,n)
return n}}
A.xh.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.xi.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.v(d.t,"dedicatedCompatibilityCheck")||J.v(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.e7(),$async$$0)
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
return A.a(A.oJ(),$async$$0)
case 9:case 8:j=a1
i=A.aP(t.cU)
s=J.v(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gmd()
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
return A.a(new A.hv(n,"message",!1,t.d4).gD(0),$async$$0)
case 15:e=b.Hm(a.bf(a1.data))
k=e.c
l=e.d
i.E(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.hX(),$async$$0)
case 18:d=b.D(a1)
case 19:if(!d.k()){s=20
break}i.u(0,new A.a5(B.be,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.Av(c),$async$$0)
case 23:if(a1)i.u(0,new A.a5(B.bf,c))
case 22:d=A.N(i,i.$ti.c)
q=new A.en(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.xj.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:215}
A.ke.prototype={}
A.nI.prototype={
gnr(){return new A.hv(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.oc.prototype={
gnr(){return new A.dk(new A.zv(this),t.k8)},
p(){}}
A.zv.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.bn(this.a.a,"connect",new A.zs(new A.zw(s,r,a)),!1,t.m))
a.r=new A.zt(r)},
$S:216}
A.zw.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bn(a,"message",new A.zu(this.c),!1,t.m))},
$S:3}
A.zu.prototype={
$1(a){this.a.vC(a)},
$S:3}
A.zs.prototype={
$1(a){var s,r=a.ports
r=J.D(t.ip.b(r)?r:new A.bO(r,A.a0(r).i("bO<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:3}
A.zt.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].C()},
$S:4}
A.nJ.prototype={
oP(){var s=v.G
if(!("Worker" in s))return null
return new A.yw(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.yw.prototype={}
A.mP.prototype={
gfW(){return A.G(this.c)}}
A.w6.prototype={
gkR(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
je(a){var s,r=this,q=r.d=J.H1(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gO()
return s},
nl(a,b){var s
if(this.je(a))return
if(b==null)if(a instanceof A.ew)b="/"+a.a+"/"
else{s=J.a_(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.m5(b)},
fe(a){return this.nl(a,null)},
wU(){if(this.c===this.b.length)return
this.m5("no more input")},
wP(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.u(A.b0("position must be greater than or equal to 0."))
else if(c>n.length)A.u(A.b0("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.u(A.b0("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.vQ(s,r,new Uint32Array(q))
p.ph(new A.ck(n),s)
o=c+b
if(o>q)A.u(A.b0("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.u(A.b0("Start may not be negative, was "+c+"."))
throw A.b(new A.mP(n,a,new A.hw(p,c,o)))},
m5(a){this.wP("expected "+a+".",0,this.c)}}
A.hd.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Ds(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Ds(b,this))
s=this.a
s.$flags&2&&A.J(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.J(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lW(b)
B.f.aw(p,0,o.b,o.a)
o.a=p}}o.b=b},
u(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.vc(q)
q=r.a
s=r.b++
q.$flags&2&&A.J(q)
q[s]=b},
lW(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
vc(a){var s=this.lW(null)
B.f.aw(s,0,a,this.a)
this.a=s},
al(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.at(c,0,s,null,null))
s=this.a
if(d instanceof A.cy)B.f.al(s,b,c,d.a,e)
else B.f.al(s,b,c,d,e)},
aw(a,b,c,d){return this.al(0,b,c,d,0)}}
A.nS.prototype={}
A.cy.prototype={}
A.Bu.prototype={}
A.hv.prototype={
ac(a,b,c,d){return A.bn(this.a,this.b,a,!1,this.$ti.c)},
bV(a,b,c){return this.ac(a,null,b,c)}}
A.jL.prototype={
C(){var s=this,r=A.bD(null,t.H)
if(s.b==null)return r
s.ki()
s.d=s.b=null
return r},
iM(a){var s,r=this
if(r.b==null)throw A.b(A.x("Subscription has been canceled."))
r.ki()
s=A.Fv(new A.yA(a),t.m)
s=s==null?null:A.d_(s)
r.d=s
r.kg()},
bt(){if(this.b==null)return;++this.a
this.ki()},
be(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.kg()},
kg(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
ki(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibk:1}
A.yz.prototype={
$1(a){return this.a.$1(a)},
$S:3}
A.yA.prototype={
$1(a){return this.a.$1(a)},
$S:3};(function aliases(){var s=J.dE.prototype
s.p0=s.l
s=A.bE.prototype
s.oX=s.nu
s.oY=s.nv
s.p_=s.nx
s.oZ=s.nw
s=A.b2.prototype
s.jh=s.aC
s.lz=s.aH
s.lA=s.aW
s=A.di.prototype
s.p7=s.lT
s.p8=s.m8
s.p9=s.mH
s=A.I.prototype
s.ly=s.al
s=A.aC.prototype
s.lx=s.vM
s=A.k3.prototype
s.pa=s.p
s=A.o.prototype
s.oW=s.dC
s=A.kN.prototype
s.lv=s.it
s=A.bP.prototype
s.lw=s.ec
s=A.h3.prototype
s.p6=s.a1
s.p5=s.S})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"KG","HX",48)
r(A,"KT","Iq",10)
q(A,"Lr","Jb",20)
q(A,"Ls","Jc",20)
q(A,"Lt","Jd",20)
q(A,"Lu","KW",15)
r(A,"FA","Li",0)
q(A,"Lv","KX",25)
s(A,"Lw","KZ",13)
r(A,"Ar","KY",0)
p(A,"LB",5,null,["$5"],["Lc"],218,0)
p(A,"LG",4,null,["$1$4","$4"],["Am",function(a,b,c,d){return A.Am(a,b,c,d,t.z)}],219,0)
p(A,"LI",5,null,["$2$5","$5"],["An",function(a,b,c,d,e){var i=t.z
return A.An(a,b,c,d,e,i,i)}],220,0)
p(A,"LH",6,null,["$3$6"],["Cu"],221,0)
p(A,"LE",4,null,["$1$4","$4"],["Fj",function(a,b,c,d){return A.Fj(a,b,c,d,t.z)}],222,0)
p(A,"LF",4,null,["$2$4","$4"],["Fk",function(a,b,c,d){var i=t.z
return A.Fk(a,b,c,d,i,i)}],223,0)
p(A,"LD",4,null,["$3$4","$4"],["Fi",function(a,b,c,d){var i=t.z
return A.Fi(a,b,c,d,i,i,i)}],224,0)
p(A,"Lz",5,null,["$5"],["Lb"],225,0)
p(A,"LJ",4,null,["$4"],["Ao"],226,0)
p(A,"Ly",5,null,["$5"],["La"],227,0)
p(A,"Lx",5,null,["$5"],["L9"],228,0)
p(A,"LC",4,null,["$4"],["Ld"],229,0)
p(A,"LA",5,null,["$5"],["Fh"],230,0)
var j
o(j=A.eS.prototype,"geR","bL",0)
o(j,"geS","bM",0)
n(A.eT.prototype,"gvV",0,1,null,["$2","$1"],["bD","aJ"],51,0,0)
m(A.t.prototype,"gju","pW",13)
n(j=A.e3.prototype,"gvz",0,1,null,["$2","$1"],["bC","vA"],51,0,0)
l(j,"gpy","aC",14)
m(j,"gpt","aH",13)
o(j,"gpO","aW",0)
o(j=A.dZ.prototype,"geR","bL",0)
o(j,"geS","bM",0)
o(j=A.b2.prototype,"geR","bL",0)
o(j,"geS","bM",0)
o(A.hu.prototype,"gmn","tR",0)
l(j=A.cf.prototype,"gtJ","tK",14)
m(j,"gtN","tO",13)
o(j,"gtL","tM",0)
o(j=A.hx.prototype,"geR","bL",0)
o(j,"geS","bM",0)
l(j,"gjH","jI",14)
m(j,"gjL","jM",132)
o(j,"gjJ","jK",0)
o(j=A.hD.prototype,"geR","bL",0)
o(j,"geS","bM",0)
l(j,"gjH","jI",14)
m(j,"gjL","jM",13)
o(j,"gjJ","jK",0)
s(A,"Cy","Kp",34)
q(A,"Cz","Kq",35)
s(A,"LO","I4",48)
q(A,"LW","Kt",36)
k(j=A.nA.prototype,"gvy","u",14)
o(j,"gea","p",0)
q(A,"FI","Md",35)
s(A,"FH","Mc",34)
q(A,"LX","J4",7)
p(A,"Ms",2,null,["$1$2","$2"],["FX",function(a,b){return A.FX(a,b,t.cZ)}],231,0)
m(j=A.lg.prototype,"gwO","Z",34)
l(j,"gxz","ab",35)
l(j,"gxH","xI",15)
q(A,"LM","He",7)
q(A,"FE","Hv",232)
q(A,"LS","HA",233)
q(A,"LU","HT",234)
q(A,"LR","H9",235)
q(A,"LT","HH",236)
q(A,"AB","Hz",7)
r(A,"Mo","Kr",10)
o(A.nD.prototype,"gx5","kF",0)
r(A,"NX","Ks",10)
l(A.mc.prototype,"gyl","ym",8)
o(A.jb.prototype,"gkz","ec",0)
o(A.j2.prototype,"gkz","ec",0)
o(j=A.bP.prototype,"gP","az",0)
o(j,"gxC","iG","y<bP.T>()")
l(j,"gtH","tI",29)
o(j,"gmx","e3",2)
q(A,"M4","Dm",237)
o(j=A.m9.prototype,"gtP","tQ",0)
l(j,"gtS","tT",111)
q(A,"MC","Io",50)
q(A,"LP","Br",239)
l(j=A.mQ.prototype,"gxn","xo",29)
l(j,"gxl","xm",121)
o(j,"gtG","k_",0)
q(A,"MJ","IW",50)
q(A,"FG","c0",16)
q(A,"FF","oN",16)
r(A,"Mn","Ll",240)
q(A,"MN","J8",241)
m(j=A.nj.prototype,"gqK","jF",1)
m(j,"gqF","ct",1)
m(j,"gqY","hg",1)
m(j=A.nh.prototype,"gqS","he",1)
m(j,"gqQ","hd",1)
m(j,"gqU","hf",1)
m(j,"gqM","hb",1)
m(j,"gqO","hc",1)
m(j,"gqW","jG",1)
m(j=A.ni.prototype,"grm","ho",1)
m(j,"grs","eN",1)
m(j,"gru","hp",1)
m(j=A.nl.prototype,"grf","jO",1)
m(j,"grh","jP",1)
m(j,"grj","hm",1)
m(j,"grd","jN",1)
m(j,"gr4","hj",1)
m(j,"gr6","dR",1)
m(j,"gr8","hk",1)
m(j,"gr2","hi",1)
m(j,"gr0","hh",1)
m(j,"gra","hl",1)
m(j=A.nm.prototype,"gro","jQ",1)
m(j,"gqD","jE",1)
m(j,"gqB","h9",1)
m(j,"gtf","hG",1)
m(j,"gtd","hF",1)
m(j,"grA","hq",1)
m(j,"gqH","ha",1)
m(j,"grG","hr",1)
m(j=A.nn.prototype,"grQ","dT",1)
m(j,"grU","hw",1)
m(j,"grI","hs",1)
m(j,"grK","ht",1)
m(j,"grM","hu",1)
m(j,"grO","hv",1)
m(j,"grW","hx",1)
m(j,"grS","jS",1)
m(j=A.no.prototype,"grY","hy",1)
m(j,"gt1","hA",1)
m(j,"gt3","hB",1)
m(j,"gtb","hE",1)
m(j,"gt9","eO",1)
m(j,"gt5","hC",1)
m(j,"gt_","hz",1)
m(j,"gt7","hD",1)
m(j=A.np.prototype,"gtl","hJ",1)
m(j,"gtj","hI",1)
m(j,"gth","hH",1)
l(j=A.lb.prototype,"gxT","xU",8)
m(j,"gxR","xS",170)
n(j,"gzE",0,5,null,["$5"],["zF"],171,0,0)
n(j,"gzt",0,3,null,["$3"],["zu"],172,0,0)
n(j,"gzl",0,4,null,["$4"],["zm"],59,0,0)
n(j,"gzA",0,4,null,["$4"],["zB"],59,0,0)
n(j,"gzG",0,3,null,["$3"],["zH"],174,0,0)
m(j,"gzL","zM",60)
m(j,"gzr","zs",60)
l(j,"gzp","zq",32)
n(j,"gzI",0,4,null,["$4"],["zJ"],62,0,0)
n(j,"gzT",0,4,null,["$4"],["zU"],62,0,0)
m(j,"gzP","zQ",178)
m(j,"gzN","zO",21)
m(j,"gzy","zz",21)
m(j,"gzC","zD",21)
m(j,"gzR","zS",21)
m(j,"gzn","zo",21)
l(j,"gja","zv",32)
n(j,"gzw",0,3,null,["$3"],["zx"],180,0,0)
l(j,"gjc","zK",32)
l(j,"gwn","wo",20)
l(j,"gwi","wj",181)
n(j,"gwl",0,5,null,["$5"],["wm"],182,0,0)
n(j,"gwt",0,4,null,["$4"],["wu"],40,0,0)
n(j,"gwx",0,4,null,["$4"],["wy"],40,0,0)
n(j,"gwv",0,4,null,["$4"],["ww"],40,0,0)
m(j,"gwz","wA",65)
m(j,"gwr","ws",65)
n(j,"gwp",0,5,null,["$5"],["wq"],185,0,0)
m(j,"gwg","wh",186)
m(j,"gwe","wf",187)
n(j,"gwc",0,3,null,["$3"],["wd"],188,0,0)
o(j=A.dB.prototype,"gea","p",2)
o(j,"gx3","cK",2)
o(A.h1.prototype,"gea","p",0)
o(A.lc.prototype,"grw","rz",0)
l(A.eo.prototype,"gvN","n4",205)
l(A.ho.prototype,"gxp","xq",3)
q(A,"FD","FN",161)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.BH,J.lC,A.jd,J.fi,A.yn,A.xY,A.o,A.kX,A.el,A.U,A.ae,A.I,A.vM,A.aj,A.lR,A.cX,A.lm,A.mR,A.mD,A.lk,A.ng,A.is,A.n1,A.jq,A.f1,A.iL,A.fo,A.hy,A.cs,A.ww,A.m5,A.io,A.k0,A.tA,A.bF,A.aU,A.lO,A.ew,A.hA,A.nt,A.h7,A.zD,A.nB,A.oo,A.cr,A.nO,A.ol,A.k4,A.jy,A.nv,A.jQ,A.oi,A.ao,A.aa,A.b2,A.jE,A.mS,A.jO,A.eT,A.cd,A.t,A.nu,A.e3,A.oj,A.jA,A.nr,A.nK,A.yx,A.e2,A.hu,A.cf,A.jK,A.A2,A.A4,A.A3,A.A0,A.A1,A.A_,A.zX,A.oz,A.zW,A.zV,A.zZ,A.zY,A.oy,A.oA,A.ox,A.hM,A.jx,A.nP,A.ze,A.e1,A.nW,A.b4,A.nY,A.on,A.nX,A.mO,A.l_,A.aC,A.nx,A.pg,A.nw,A.kY,A.od,A.eU,A.zb,A.zE,A.op,A.dl,A.aI,A.nN,A.aM,A.aD,A.yy,A.m7,A.jk,A.nM,A.bi,A.lB,A.Q,A.W,A.oh,A.jl,A.mv,A.a2,A.kb,A.wG,A.ce,A.ln,A.m4,A.z4,A.z5,A.ll,A.a3,A.lh,A.iA,A.ey,A.hI,A.hz,A.iK,A.lg,A.m3,A.n2,A.cm,A.c5,A.rt,A.pt,A.iJ,A.jf,A.tP,A.je,A.vL,A.qi,A.qy,A.ym,A.ek,A.kM,A.kN,A.pc,A.lX,A.fB,A.dw,A.ub,A.mn,A.eG,A.cM,A.ml,A.vJ,A.mr,A.aR,A.my,A.jv,A.mK,A.aV,A.a1,A.pq,A.pr,A.ps,A.r5,A.ik,A.pP,A.ij,A.dI,A.tv,A.mL,A.uQ,A.nV,A.nD,A.hp,A.vB,A.wn,A.f4,A.ok,A.hC,A.t2,A.mc,A.dP,A.b1,A.co,A.yo,A.mk,A.cO,A.vI,A.vt,A.aZ,A.dA,A.fx,A.et,A.ca,A.q0,A.c4,A.mx,A.uc,A.cq,A.nC,A.hm,A.bH,A.zq,A.bP,A.xz,A.pe,A.fj,A.kS,A.mM,A.iq,A.r8,A.bh,A.tG,A.o_,A.mT,A.pb,A.m9,A.uz,A.j5,A.hE,A.uH,A.zx,A.eu,A.dy,A.lw,A.cH,A.dz,A.dS,A.ux,A.p0,A.bB,A.q2,A.mQ,A.d6,A.eC,A.tW,A.dK,A.lS,A.zl,A.zj,A.uj,A.pd,A.iI,A.ja,A.uo,A.mj,A.v3,A.b5,A.vc,A.bl,A.h9,A.h8,A.w8,A.bu,A.h6,A.cN,A.fP,A.j9,A.cD,A.wa,A.j8,A.jp,A.wl,A.cQ,A.cp,A.eE,A.wy,A.qz,A.eP,A.hr,A.cW,A.wC,A.hj,A.nf,A.wY,A.ii,A.j7,A.mq,A.X,A.hk,A.nj,A.nh,A.ni,A.nl,A.nm,A.zU,A.nn,A.zH,A.no,A.hl,A.np,A.q9,A.w7,A.ma,A.mb,A.vQ,A.mG,A.h3,A.ru,A.bo,A.cz,A.ct,A.mJ,A.cu,A.c9,A.kC,A.qB,A.e4,A.vS,A.em,A.b6,A.kQ,A.qg,A.o8,A.zk,A.bQ,A.l8,A.dg,A.ji,A.wT,A.wO,A.wV,A.wU,A.dW,A.dh,A.lb,A.da,A.eV,A.wP,A.p7,A.jP,A.yB,A.nZ,A.nR,A.zg,A.wJ,A.ie,A.vD,A.ic,A.l7,A.lp,A.rs,A.d3,A.lc,A.iV,A.en,A.uU,A.fW,A.k2,A.hq,A.ld,A.xg,A.ke,A.nJ,A.yw,A.w6,A.Bu,A.jL])
q(J.lC,[J.lE,J.iC,J.aF,J.bq,J.fA,J.ev,J.dC])
q(J.aF,[J.dE,J.B,A.fH,A.iX])
q(J.dE,[J.md,J.dV,J.bR])
r(J.lD,A.jd)
r(J.t_,J.B)
q(J.ev,[J.iB,J.lF])
q(A.o,[A.dY,A.K,A.cn,A.al,A.ip,A.eL,A.db,A.bI,A.eY,A.ns,A.og,A.hG,A.ex,A.jc])
q(A.dY,[A.ei,A.kf])
r(A.jI,A.ei)
r(A.jF,A.kf)
q(A.el,[A.pv,A.po,A.pu,A.rU,A.wm,A.AV,A.AX,A.xG,A.xF,A.A7,A.A6,A.rq,A.rl,A.yF,A.yE,A.yQ,A.yT,A.w2,A.w3,A.w0,A.yv,A.yu,A.zp,A.yW,A.yr,A.zd,A.tQ,A.z9,A.qf,A.xT,A.rm,A.AZ,A.B5,A.B6,A.AA,A.pj,A.pl,A.pn,A.kP,A.pf,A.A9,A.ph,A.tU,A.AM,A.qc,A.qd,A.vv,A.vr,A.uS,A.Bg,A.vU,A.vV,A.AL,A.r2,A.r1,A.r3,A.r0,A.r_,A.qZ,A.qY,A.qU,A.qV,A.qW,A.Ba,A.tw,A.tz,A.ty,A.tx,A.yf,A.yc,A.wu,A.wq,A.ws,A.wo,A.te,A.tf,A.th,A.to,A.ti,A.tj,A.tk,A.tl,A.tm,A.t6,A.t8,A.tc,A.t4,A.t3,A.ta,A.t9,A.td,A.u6,A.u3,A.u5,A.vk,A.vm,A.vn,A.vo,A.vE,A.vH,A.pL,A.pO,A.pK,A.pN,A.pI,A.pH,A.pG,A.pM,A.pJ,A.pB,A.pA,A.pF,A.pE,A.pC,A.py,A.vx,A.vw,A.xA,A.B4,A.rb,A.r9,A.rc,A.rd,A.tH,A.tJ,A.tL,A.tN,A.tI,A.wX,A.uG,A.uC,A.uD,A.uE,A.uF,A.uA,A.uB,A.uO,A.uK,A.uL,A.uI,A.uJ,A.uN,A.p1,A.p2,A.q4,A.q3,A.wj,A.wb,A.wh,A.wc,A.wd,A.we,A.Ax,A.Ay,A.u2,A.tX,A.tY,A.tZ,A.u_,A.u0,A.ul,A.um,A.uu,A.us,A.ur,A.uq,A.ut,A.va,A.v4,A.v6,A.v8,A.vd,A.vi,A.w9,A.AO,A.B9,A.B7,A.B8,A.pQ,A.tE,A.tF,A.wD,A.wE,A.B1,A.AT,A.AS,A.AF,A.xc,A.xd,A.x3,A.x4,A.x6,A.xe,A.xl,A.xm,A.xn,A.xo,A.xv,A.xp,A.qa,A.qb,A.Ap,A.rw,A.rv,A.rx,A.rz,A.rB,A.ry,A.rP,A.vW,A.qJ,A.zA,A.B2,A.Bb,A.Bc,A.p6,A.yp,A.yq,A.pT,A.pU,A.pY,A.pZ,A.q_,A.re,A.pa,A.p8,A.yZ,A.z1,A.z2,A.rT,A.rR,A.yY,A.vP,A.wK,A.wL,A.wM,A.wN,A.v1,A.v2,A.v0,A.v_,A.uZ,A.wZ,A.qN,A.ud,A.r4,A.Aw,A.pR,A.pS,A.pV,A.pW,A.pX,A.Ag,A.y2,A.y7,A.ya,A.y0,A.zv,A.zw,A.zu,A.zs,A.yz,A.yA])
q(A.pv,[A.xZ,A.pp,A.q8,A.t0,A.AW,A.A8,A.Aq,A.rr,A.rk,A.yG,A.yR,A.yU,A.xC,A.yV,A.tB,A.tS,A.zc,A.xS,A.zO,A.wH,A.zN,A.zM,A.ro,A.rn,A.pi,A.pk,A.pm,A.kO,A.ua,A.tV,A.Af,A.vu,A.vq,A.uT,A.vs,A.vK,A.Bh,A.Au,A.qX,A.u7,A.vp,A.vF,A.vG,A.pD,A.uw,A.uy,A.p3,A.AJ,A.AD,A.wF,A.x0,A.AG,A.xa,A.xb,A.x8,A.x9,A.x5,A.rA,A.qM,A.z3,A.x_,A.yj,A.xj])
r(A.bO,A.jF)
q(A.U,[A.ej,A.bE,A.di,A.nT])
q(A.ae,[A.dD,A.mo,A.de,A.lG,A.n0,A.mw,A.nL,A.j4,A.iF,A.kH,A.bA,A.cV,A.n_,A.bj,A.l3])
q(A.I,[A.he,A.mA,A.n9,A.hi,A.eo,A.hd])
r(A.ck,A.he)
q(A.pu,[A.B0,A.uW,A.xH,A.xI,A.zG,A.zF,A.A5,A.xK,A.xL,A.xN,A.xO,A.xM,A.xJ,A.rp,A.yH,A.yM,A.yL,A.yJ,A.yI,A.yP,A.yO,A.yN,A.yS,A.w1,A.w4,A.w_,A.zz,A.zy,A.xB,A.xX,A.xW,A.zh,A.zf,A.Aa,A.Ab,A.yt,A.ys,A.zo,A.zn,A.Al,A.zR,A.zQ,A.qT,A.Ai,A.Aj,A.tT,A.yg,A.yd,A.ye,A.wt,A.wr,A.wp,A.tg,A.tn,A.tp,A.tq,A.tr,A.ts,A.tt,A.tu,A.t5,A.t7,A.tb,A.vl,A.r6,A.rQ,A.ri,A.rh,A.vY,A.px,A.pz,A.wv,A.vy,A.ui,A.ra,A.r7,A.tK,A.tM,A.uv,A.uM,A.q1,A.q7,A.q6,A.q5,A.wg,A.wf,A.wi,A.vb,A.v5,A.v7,A.v9,A.ve,A.vj,A.vh,A.vg,A.vf,A.wk,A.up,A.uk,A.tO,A.x2,A.xf,A.xk,A.xw,A.xy,A.xx,A.xq,A.xu,A.xt,A.xs,A.xr,A.rO,A.rC,A.rJ,A.rK,A.rL,A.rM,A.rH,A.rI,A.rD,A.rE,A.rF,A.rG,A.rN,A.yX,A.qK,A.qL,A.qH,A.qG,A.qI,A.qD,A.qC,A.qE,A.qF,A.zB,A.zC,A.Bd,A.qm,A.qj,A.qo,A.qq,A.qs,A.ql,A.qr,A.qw,A.qu,A.qt,A.qn,A.qp,A.qv,A.qk,A.p4,A.p5,A.wQ,A.p9,A.z_,A.z0,A.yC,A.rS,A.qO,A.qP,A.uf,A.ue,A.yh,A.yl,A.yi,A.yk,A.y1,A.y6,A.y9,A.y3,A.y8,A.yb,A.y4,A.y5,A.qS,A.qR,A.qQ,A.xh,A.xi,A.zt])
q(A.K,[A.V,A.er,A.T,A.ar,A.aO,A.eX,A.jS])
q(A.V,[A.cv,A.Y,A.bW,A.iH,A.nU])
r(A.eq,A.cn)
r(A.il,A.eL)
r(A.fs,A.db)
q(A.f1,[A.o0,A.o1,A.o2])
q(A.o0,[A.a5,A.jY,A.jZ,A.hB,A.o3])
r(A.f2,A.o1)
q(A.o2,[A.f3,A.o4])
r(A.ka,A.iL)
r(A.cU,A.ka)
r(A.ig,A.cU)
q(A.fo,[A.aY,A.iu])
q(A.cs,[A.ih,A.k_])
r(A.d1,A.ih)
r(A.iy,A.rU)
r(A.j1,A.de)
q(A.wm,[A.vX,A.i9])
q(A.bE,[A.iE,A.iD,A.jR])
r(A.fG,A.fH)
q(A.iX,[A.iW,A.fI])
q(A.fI,[A.jU,A.jW])
r(A.jV,A.jU)
r(A.dN,A.jV)
r(A.jX,A.jW)
r(A.bU,A.jX)
q(A.dN,[A.lZ,A.m_])
q(A.bU,[A.m0,A.m1,A.m2,A.iY,A.iZ,A.j_,A.eB])
r(A.k5,A.nL)
q(A.aa,[A.hF,A.jn,A.jJ,A.dk,A.jM,A.jD,A.i7,A.hv])
r(A.b7,A.hF)
r(A.aT,A.b7)
q(A.b2,[A.dZ,A.hx,A.hD])
r(A.eS,A.dZ)
r(A.jz,A.jE)
q(A.eT,[A.ay,A.ap])
q(A.e3,[A.cY,A.hH])
r(A.k1,A.nr)
q(A.nK,[A.cc,A.ht])
r(A.jT,A.cY)
r(A.f_,A.jM)
q(A.ox,[A.nE,A.o7])
q(A.di,[A.e_,A.jG])
r(A.dj,A.k_)
q(A.mO,[A.k3,A.zI,A.xP,A.of])
r(A.z7,A.k3)
q(A.l_,[A.es,A.kK,A.t1])
q(A.es,[A.kF,A.lM,A.n6])
q(A.aC,[A.om,A.i8,A.kL,A.lJ,A.lI,A.n7,A.js,A.lt])
q(A.om,[A.kG,A.lN])
r(A.xU,A.nx)
q(A.pg,[A.xQ,A.hn,A.nA,A.zP])
r(A.xD,A.xQ)
r(A.lH,A.iF)
r(A.z8,A.kY)
r(A.za,A.zb)
r(A.oB,A.op)
r(A.zS,A.oB)
q(A.bA,[A.d9,A.iw])
r(A.nH,A.kb)
r(A.h0,A.hI)
r(A.oa,A.lt)
r(A.zr,A.rt)
r(A.ob,A.zr)
r(A.kA,A.pt)
r(A.jg,A.vL)
r(A.nF,A.kA)
r(A.l9,A.nF)
r(A.nG,A.tP)
r(A.qx,A.nG)
r(A.ms,A.ek)
r(A.kU,A.kM)
r(A.du,A.jn)
q(A.kN,[A.u9,A.vC])
r(A.jo,A.pc)
r(A.mN,A.jo)
r(A.ia,A.a3)
q(A.dw,[A.l0,A.nd])
q(A.ub,[A.iQ,A.iT,A.iR,A.iU,A.iN,A.iO,A.iM,A.iS,A.iP])
q(A.yy,[A.b_,A.cC,A.dU,A.me,A.ib,A.dv,A.d5,A.l4,A.lj,A.c6,A.ix,A.u8,A.dM,A.ef,A.cb,A.kJ,A.cR,A.i3,A.fK,A.j3,A.jj,A.un,A.fv,A.lT,A.dx,A.cx,A.ir,A.dQ])
q(A.cM,[A.iG,A.j0,A.i4,A.i5])
q(A.mr,[A.m6,A.kV,A.lu,A.kZ,A.ls,A.mu,A.lY,A.mm,A.l6,A.l5,A.li,A.lx,A.kB,A.lo,A.mz,A.mU,A.mV,A.mX,A.mZ,A.mY,A.mW,A.nc,A.nb,A.kD,A.na,A.n8,A.mi,A.l1])
q(A.aR,[A.fJ,A.kW,A.lv,A.fX,A.fY,A.fF,A.fR,A.fp,A.fq,A.fz,A.fh,A.fu,A.h_,A.hb,A.ne,A.fO,A.fm])
r(A.p_,A.r5)
q(A.dI,[A.eO,A.eN,A.eD,A.fl,A.fM,A.fw,A.cP,A.fV,A.fZ,A.eH,A.h4,A.fE,A.fn,A.ep,A.fU])
q(A.eH,[A.hf,A.fy])
r(A.lK,A.nV)
q(A.dP,[A.aN,A.cL,A.ee,A.dt])
r(A.d0,A.nC)
q(A.bP,[A.jb,A.j2,A.l2])
r(A.wW,A.pe)
r(A.uP,A.m9)
r(A.xE,A.zj)
q(A.bu,[A.hc,A.eI,A.jh,A.c3,A.cG,A.cK,A.fL,A.fN,A.fr,A.eg])
r(A.tD,A.qz)
r(A.lQ,A.eP)
q(A.hk,[A.jw,A.eQ])
r(A.oq,A.nj)
r(A.or,A.oq)
r(A.os,A.or)
r(A.ot,A.os)
r(A.ou,A.ot)
r(A.ov,A.ou)
r(A.ow,A.ov)
r(A.x7,A.ow)
r(A.rY,A.w7)
q(A.rY,[A.uR,A.wI,A.x1])
r(A.lr,A.mG)
q(A.h3,[A.hw,A.mI])
r(A.h2,A.mJ)
r(A.dc,A.mI)
r(A.h5,A.em)
r(A.kR,A.b6)
q(A.kR,[A.ly,A.dB,A.h1])
q(A.kQ,[A.nQ,A.oe])
r(A.o5,A.qg)
r(A.o6,A.o5)
r(A.mt,A.o6)
r(A.o9,A.o8)
r(A.c8,A.o9)
q(A.b4,[A.eR,A.b8])
r(A.hh,A.vS)
q(A.b8,[A.jN,A.jH,A.hs,A.hL])
r(A.uY,A.vD)
r(A.qh,A.l7)
r(A.ds,A.fW)
r(A.ho,A.uY)
q(A.ke,[A.nI,A.oc])
r(A.mP,A.h2)
r(A.nS,A.hd)
r(A.cy,A.nS)
s(A.he,A.n1)
s(A.kf,A.I)
s(A.jU,A.I)
s(A.jV,A.is)
s(A.jW,A.I)
s(A.jX,A.is)
s(A.cY,A.jA)
s(A.hH,A.oj)
s(A.ka,A.on)
s(A.oB,A.mO)
s(A.nF,A.qi)
s(A.nG,A.qy)
s(A.nV,A.pr)
s(A.nC,A.ps)
s(A.oq,A.ni)
s(A.or,A.nm)
s(A.os,A.no)
s(A.ot,A.np)
s(A.ou,A.nn)
s(A.ov,A.nl)
s(A.ow,A.nh)
s(A.o5,A.I)
s(A.o6,A.m3)
s(A.o8,A.n2)
s(A.o9,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ab:"double",aX:"num",k:"String",R:"bool",W:"Null",p:"List",j:"Object",F:"Map",M:"JSObject"},mangledNames:{},types:["~()","y<j?>(nk,hj)","y<~>()","~(M)","W()","y<W>(bH)","y<~>(bH)","k(k)","~(i)","R(k)","i()","W(j,aG)","Q<k,@>(@,@)","~(j,aG)","~(j?)","R(j?)","j?(j?)","R(@)","y<W>()","y<b5>()","~(~())","i(bm,i)","W(M)","y<~>(jP)","W(@)","~(@)","~(@,@)","~(p<i>)","j?(F<k,j?>)","~(a1)","fJ(~)","Q<k,j?>(@,@)","i(bm)","~(j?,j?)","R(j?,j?)","i(j?)","@(@)","~(k,k)","0&()","M()","~(da,i,i,i)","W(j)","y<~>(~)","R(bo)","R()","R(ca)","~(p<F<k,j?>>)","y<cH>(k)","i(@,@)","~(dd)","ab(i)","~(j[aG?])","y<p<k>>()","k(F<k,j?>)","R(aZ)","@()","y<p<F<k,j?>>>(k,p<j?>)","y<i>()","y<eP>()","i(b6,i,i,i)","i(b6,i)","i(cH)","i(bm,i,i,bq)","R(dA)","k(eA)","~(da,i)","~(k,@)","y<W>(qA)","@(k)","y<@>()","y<bk<~>>()","~(~)","R(bh)","y<F<k,j?>?>()","h_(p<cO>)","fO(i)","fm(i)","fF(p<k>)","y<cq>()","fR(cq)","y<p<cO>>()","~(i,@)","eU<@,@>(bC<@>)","hb(~)","R(hC)","fB()","i(i,i)","i(ca,ca)","~(k,j?)","k(co)","k()","R(co)","aZ()","dA()","fx()","et()","ca()","R(cC)","k(@)","y<F<k,j?>?>(k)","R(i)","k(i,i)","R(dU)","p<F<k,j?>>(cq)","i(i)","~(p<cm>)","y<aa<p<i>>>()","k?(F<k,j?>)","bh()","y<bh>(bH)","p<eG>(j?)","~(j5)","Q<k,dy>(k,h6)","cN(@)","R(b_)","p<cM>(j?)","y<dS>(k)","i(dS)","aD(i)","y<W>(~)","bB()","~(cD)","R(+(k,j))","y<bl>(bl)","bl(bl)","bl(j)","i(+(k,j),+(k,j))","dK/(j?)","y<j?>(j?)","F<k,j?>(p<j?>)","y<i>(bH)","t<@>?()","~(@,aG)","k(i[i])","cQ()","cp()","eE()","i(+(k,j?),+(k,j?))","y<R>(k)","y<~>(k)","hr()","i(i,cW)","R(cW)","i(cW)","c4<j?>(@)","R(c4<j?>)","F<k,j?>(c8)","0&(k,i?)","j?(vT)","~(aV)","~(dw)","~(p<bB>)","aa<p<i>>()","~(h9)","W(~)","~(F<k,j?>?)","k(k?)","k?()","i(cz)","~(k,k?)","j(cz)","F<k,j?>(bB)","i(bo,bo)","p<cz>(Q<j,p<bo>>)","dc()","k(j?)","~(i,k,i)","~(BT,p<BU>)","k(k,k)","~(P,av,P,~())","~(bq,i)","bm?(b6,i,i,i,i)","i(b6,i,i)","W(bR,bR)","i(b6?,i,i)","j?(~)","W(~())","y<@>(bH)","i(bm,bq)","@(@,k)","i(bm,i,i)","i(i())","~(~(i,k,i),i,i,i,bq)","W(@,aG)","R(k,k)","i(da,i,i,i,i)","i(i(i),i)","i(BY,i)","i(BY,i,i)","i(k)","fX(F<k,j?>?)","M(B<j?>)","y<p<F<k,j?>?>>()","fY(p<F<k,j?>?>)","M(M?)","~(eh)","y<~>(i,cT)","y<~>(i)","cT()","y<M>(k)","W(d3)","y<W>(M)","M(j)","W(j?,aG)","k?(j?)","~(em)","M(M)","y<M>()","W(k,k[j?])","y<p<j?>>()","y<bk<cu>>()","~(cu)","R(hq)","~(dL<p<i>>)","y<en>()","0&(j?,aG)","~(dL<M>)","y<aX?>()","~(P?,av?,P,j,aG)","0^(P?,av?,P,0^())<j?>","0^(P?,av?,P,0^(1^),1^)<j?,j?>","0^(P?,av?,P,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(P,av,P,0^())<j?>","0^(1^)(P,av,P,0^(1^))<j?,j?>","0^(1^,2^)(P,av,P,0^(1^,2^))<j?,j?,j?>","ao?(P,av,P,j,aG?)","~(P?,av?,P,~())","dd(P,av,P,aD,~())","dd(P,av,P,aD,~(dd))","~(P,av,P,k)","P(P?,av?,P,jx?,F<j?,j?>?)","0^(0^,0^)<aX>","fp(i)","fq(p<j?>)","fz(p<k>)","fh(aX?)","fu(k)","bh(F<k,j?>)","y<k>()","bB(F<k,j?>)","aM()","F<k,j?>(bh)","j(bo)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.jY&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.jZ&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hB&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.o3&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.f2&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.f3&&A.G0(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.o4&&A.G0(a,b.a)}}
A.JV(v.typeUniverse,JSON.parse('{"bR":"dE","md":"dE","dV":"dE","N5":"fH","B":{"p":["1"],"aF":[],"K":["1"],"M":[],"o":["1"],"b9":["1"]},"lE":{"R":[],"ak":[]},"iC":{"W":[],"ak":[]},"aF":{"M":[]},"dE":{"aF":[],"M":[]},"lD":{"jd":[]},"t_":{"B":["1"],"p":["1"],"aF":[],"K":["1"],"M":[],"o":["1"],"b9":["1"]},"ev":{"ab":[],"aX":[],"aw":["aX"]},"iB":{"ab":[],"i":[],"aX":[],"aw":["aX"],"ak":[]},"lF":{"ab":[],"aX":[],"aw":["aX"],"ak":[]},"dC":{"k":[],"aw":["k"],"b9":["@"],"ak":[]},"dY":{"o":["2"]},"ei":{"dY":["1","2"],"o":["2"],"o.E":"2"},"jI":{"ei":["1","2"],"dY":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"jF":{"I":["2"],"p":["2"],"dY":["1","2"],"K":["2"],"o":["2"]},"bO":{"jF":["1","2"],"I":["2"],"p":["2"],"dY":["1","2"],"K":["2"],"o":["2"],"I.E":"2","o.E":"2"},"ej":{"U":["3","4"],"F":["3","4"],"U.V":"4","U.K":"3"},"dD":{"ae":[]},"mo":{"ae":[]},"ck":{"I":["i"],"p":["i"],"K":["i"],"o":["i"],"I.E":"i"},"K":{"o":["1"]},"V":{"K":["1"],"o":["1"]},"cv":{"V":["1"],"K":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cn":{"o":["2"],"o.E":"2"},"eq":{"cn":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"Y":{"V":["2"],"K":["2"],"o":["2"],"V.E":"2","o.E":"2"},"al":{"o":["1"],"o.E":"1"},"ip":{"o":["2"],"o.E":"2"},"eL":{"o":["1"],"o.E":"1"},"il":{"eL":["1"],"K":["1"],"o":["1"],"o.E":"1"},"db":{"o":["1"],"o.E":"1"},"fs":{"db":["1"],"K":["1"],"o":["1"],"o.E":"1"},"er":{"K":["1"],"o":["1"],"o.E":"1"},"bI":{"o":["1"],"o.E":"1"},"he":{"I":["1"],"p":["1"],"K":["1"],"o":["1"]},"bW":{"V":["1"],"K":["1"],"o":["1"],"V.E":"1","o.E":"1"},"ig":{"cU":["1","2"],"F":["1","2"]},"fo":{"F":["1","2"]},"aY":{"fo":["1","2"],"F":["1","2"]},"eY":{"o":["1"],"o.E":"1"},"iu":{"fo":["1","2"],"F":["1","2"]},"ih":{"cs":["1"],"eJ":["1"],"K":["1"],"o":["1"]},"d1":{"cs":["1"],"eJ":["1"],"K":["1"],"o":["1"]},"j1":{"de":[],"ae":[]},"lG":{"ae":[]},"n0":{"ae":[]},"m5":{"H":[]},"k0":{"aG":[]},"mw":{"ae":[]},"bE":{"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"T":{"K":["1"],"o":["1"],"o.E":"1"},"ar":{"K":["1"],"o":["1"],"o.E":"1"},"aO":{"K":["Q<1,2>"],"o":["Q<1,2>"],"o.E":"Q<1,2>"},"iE":{"bE":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"iD":{"bE":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"hA":{"mp":[],"eA":[]},"ns":{"o":["mp"],"o.E":"mp"},"h7":{"eA":[]},"og":{"o":["eA"],"o.E":"eA"},"fG":{"aF":[],"M":[],"eh":[],"ak":[]},"fH":{"aF":[],"M":[],"eh":[],"ak":[]},"iX":{"aF":[],"M":[]},"oo":{"eh":[]},"iW":{"aF":[],"Bp":[],"M":[],"ak":[]},"fI":{"bS":["1"],"aF":[],"M":[],"b9":["1"]},"dN":{"I":["ab"],"p":["ab"],"bS":["ab"],"aF":[],"K":["ab"],"M":[],"b9":["ab"],"o":["ab"]},"bU":{"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"]},"lZ":{"dN":[],"rf":[],"I":["ab"],"p":["ab"],"bS":["ab"],"aF":[],"K":["ab"],"M":[],"b9":["ab"],"o":["ab"],"ak":[],"I.E":"ab"},"m_":{"dN":[],"rg":[],"I":["ab"],"p":["ab"],"bS":["ab"],"aF":[],"K":["ab"],"M":[],"b9":["ab"],"o":["ab"],"ak":[],"I.E":"ab"},"m0":{"bU":[],"rV":[],"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"I.E":"i"},"m1":{"bU":[],"rW":[],"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"I.E":"i"},"m2":{"bU":[],"rX":[],"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"I.E":"i"},"iY":{"bU":[],"wz":[],"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"I.E":"i"},"iZ":{"bU":[],"wA":[],"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"I.E":"i"},"j_":{"bU":[],"wB":[],"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"I.E":"i"},"eB":{"bU":[],"cT":[],"I":["i"],"p":["i"],"bS":["i"],"aF":[],"K":["i"],"M":[],"b9":["i"],"o":["i"],"ak":[],"I.E":"i"},"nL":{"ae":[]},"k5":{"de":[],"ae":[]},"ao":{"ae":[]},"t":{"y":["1"]},"dL":{"bC":["1"]},"k4":{"dd":[]},"jy":{"id":["1"]},"hG":{"o":["1"],"o.E":"1"},"aT":{"b7":["1"],"hF":["1"],"aa":["1"],"aa.T":"1"},"eS":{"dZ":["1"],"b2":["1"],"bk":["1"],"b2.T":"1"},"jE":{"bC":["1"]},"jz":{"jE":["1"],"bC":["1"]},"mS":{"H":[]},"j4":{"ae":[]},"eT":{"id":["1"]},"ay":{"eT":["1"],"id":["1"]},"ap":{"eT":["1"],"id":["1"]},"jn":{"aa":["1"]},"e3":{"bC":["1"]},"cY":{"jA":["1"],"e3":["1"],"bC":["1"]},"hH":{"e3":["1"],"bC":["1"]},"b7":{"hF":["1"],"aa":["1"],"aa.T":"1"},"dZ":{"b2":["1"],"bk":["1"],"b2.T":"1"},"k1":{"nr":["1"]},"b2":{"bk":["1"],"b2.T":"1"},"hF":{"aa":["1"]},"hu":{"bk":["1"]},"jJ":{"aa":["1"],"aa.T":"1"},"dk":{"aa":["1"],"aa.T":"1"},"jT":{"cY":["1"],"jA":["1"],"e3":["1"],"dL":["1"],"bC":["1"]},"jM":{"aa":["2"]},"hx":{"b2":["2"],"bk":["2"],"b2.T":"2"},"f_":{"jM":["1","2"],"aa":["2"],"aa.T":"2"},"jK":{"bC":["1"]},"hD":{"b2":["2"],"bk":["2"],"b2.T":"2"},"jD":{"aa":["2"],"aa.T":"2"},"ox":{"P":[]},"nE":{"P":[]},"o7":{"P":[]},"hM":{"av":[]},"di":{"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"e_":{"di":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"jG":{"di":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"eX":{"K":["1"],"o":["1"],"o.E":"1"},"jR":{"bE":["1","2"],"U":["1","2"],"F":["1","2"],"U.V":"2","U.K":"1"},"dj":{"cs":["1"],"eJ":["1"],"K":["1"],"o":["1"]},"ex":{"o":["1"],"o.E":"1"},"I":{"p":["1"],"K":["1"],"o":["1"]},"U":{"F":["1","2"]},"jS":{"K":["2"],"o":["2"],"o.E":"2"},"iL":{"F":["1","2"]},"cU":{"F":["1","2"]},"iH":{"V":["1"],"K":["1"],"o":["1"],"V.E":"1","o.E":"1"},"cs":{"eJ":["1"],"K":["1"],"o":["1"]},"k_":{"cs":["1"],"eJ":["1"],"K":["1"],"o":["1"]},"eU":{"bC":["1"]},"nT":{"U":["k","@"],"F":["k","@"],"U.V":"@","U.K":"k"},"nU":{"V":["k"],"K":["k"],"o":["k"],"V.E":"k","o.E":"k"},"kF":{"es":[]},"om":{"aC":["k","p<i>"]},"kG":{"aC":["k","p<i>"],"aC.T":"p<i>"},"i8":{"aC":["p<i>","k"],"aC.T":"k"},"kL":{"aC":["k","p<i>"],"aC.T":"p<i>"},"iF":{"ae":[]},"lH":{"ae":[]},"lJ":{"aC":["j?","k"],"aC.T":"k"},"lI":{"aC":["k","j?"],"aC.T":"j?"},"lM":{"es":[]},"lN":{"aC":["k","p<i>"],"aC.T":"p<i>"},"n6":{"es":[]},"n7":{"aC":["k","p<i>"],"aC.T":"p<i>"},"js":{"aC":["p<i>","k"],"aC.T":"k"},"D4":{"aw":["D4"]},"aM":{"aw":["aM"]},"ab":{"aX":[],"aw":["aX"]},"aD":{"aw":["aD"]},"i":{"aX":[],"aw":["aX"]},"p":{"K":["1"],"o":["1"]},"aX":{"aw":["aX"]},"mp":{"eA":[]},"eJ":{"K":["1"],"o":["1"]},"k":{"aw":["k"]},"aI":{"aw":["D4"]},"kH":{"ae":[]},"de":{"ae":[]},"bA":{"ae":[]},"d9":{"ae":[]},"iw":{"d9":[],"ae":[]},"cV":{"ae":[]},"n_":{"cV":[],"ae":[]},"bj":{"ae":[]},"l3":{"ae":[]},"m7":{"ae":[]},"jk":{"ae":[]},"nM":{"H":[]},"bi":{"H":[]},"lB":{"cV":[],"H":[],"ae":[]},"oh":{"aG":[]},"jc":{"o":["i"],"o.E":"i"},"kb":{"n3":[]},"ce":{"n3":[]},"nH":{"n3":[]},"m4":{"H":[]},"rX":{"p":["i"],"K":["i"],"o":["i"]},"cT":{"p":["i"],"K":["i"],"o":["i"]},"wB":{"p":["i"],"K":["i"],"o":["i"]},"rV":{"p":["i"],"K":["i"],"o":["i"]},"wz":{"p":["i"],"K":["i"],"o":["i"]},"rW":{"p":["i"],"K":["i"],"o":["i"]},"wA":{"p":["i"],"K":["i"],"o":["i"]},"rf":{"p":["ab"],"K":["ab"],"o":["ab"]},"rg":{"p":["ab"],"K":["ab"],"o":["ab"]},"a3":{"F":["2","3"]},"h0":{"hI":["1","eJ<1>"],"hI.E":"1"},"lt":{"aC":["p<i>","cm"]},"oa":{"aC":["p<i>","cm"],"aC.T":"cm"},"jf":{"H":[]},"mA":{"I":["i"],"p":["i"],"K":["i"],"o":["i"],"I.E":"i"},"ms":{"H":[]},"kM":{"Bq":[]},"kU":{"Bq":[]},"du":{"aa":["p<i>"],"aa.T":"p<i>"},"ek":{"H":[]},"mN":{"jo":[]},"ia":{"a3":["k","k","1"],"F":["k","1"],"a3.V":"1","a3.K":"k","a3.C":"k"},"fJ":{"aR":[]},"kW":{"aR":[]},"lv":{"aR":[]},"fX":{"aR":[]},"fY":{"aR":[]},"fF":{"aR":[]},"fR":{"aR":[]},"fp":{"aR":[]},"fq":{"aR":[]},"fz":{"aR":[]},"fh":{"aR":[]},"fu":{"aR":[]},"h_":{"aR":[]},"hb":{"aR":[]},"ne":{"aR":[]},"fO":{"aR":[]},"fm":{"aR":[]},"l0":{"dw":[]},"nd":{"dw":[]},"iG":{"cM":[]},"j0":{"cM":[]},"i4":{"cM":[]},"i5":{"cM":[]},"jv":{"H":[]},"ik":{"qA":[]},"dI":{"H":[]},"eO":{"H":[]},"eN":{"H":[]},"eD":{"H":[]},"fl":{"H":[]},"fM":{"H":[]},"fw":{"H":[]},"cP":{"H":[]},"fV":{"H":[]},"fZ":{"H":[]},"eH":{"H":[]},"hf":{"H":[]},"fy":{"H":[]},"h4":{"H":[]},"fE":{"H":[]},"fn":{"H":[]},"ep":{"H":[]},"fU":{"H":[]},"f4":{"H":[]},"aN":{"dP":[]},"cL":{"dP":[]},"ee":{"dP":[]},"dt":{"dP":[]},"hm":{"H":[]},"jb":{"bP":["p<F<k,j?>>"],"bP.T":"p<F<k,j?>>"},"j2":{"bP":["F<k,j?>?"],"bP.T":"F<k,j?>?"},"fj":{"H":[]},"kS":{"H":[]},"o_":{"DK":[]},"dz":{"H":[]},"d6":{"H":[]},"bu":{"H":[]},"hc":{"H":[]},"eI":{"H":[]},"jh":{"H":[]},"c3":{"H":[]},"cG":{"H":[]},"cK":{"H":[]},"fL":{"H":[]},"fN":{"H":[]},"fr":{"H":[]},"eg":{"H":[]},"l2":{"bP":["p<F<k,j?>>"],"bP.T":"p<F<k,j?>>"},"hr":{"nk":[]},"lQ":{"eP":[]},"ii":{"H":[]},"j7":{"H":[]},"mq":{"H":[]},"jw":{"hk":[]},"eQ":{"hk":[]},"mb":{"H":[]},"lr":{"ct":[],"aw":["ct"]},"hw":{"dc":[],"aw":["mH"]},"ct":{"aw":["ct"]},"mG":{"ct":[],"aw":["ct"]},"mH":{"aw":["mH"]},"mI":{"aw":["mH"]},"mJ":{"H":[]},"h2":{"bi":[],"H":[]},"h3":{"aw":["mH"]},"dc":{"aw":["mH"]},"c9":{"H":[]},"vT":{"p":["j?"],"K":["j?"],"o":["j?"]},"n9":{"I":["j?"],"vT":[],"p":["j?"],"K":["j?"],"o":["j?"],"I.E":"j?"},"h5":{"em":[]},"ly":{"b6":[]},"nQ":{"jt":[],"bm":[]},"c8":{"U":["k","@"],"F":["k","@"],"U.V":"@","U.K":"k"},"mt":{"I":["c8"],"p":["c8"],"K":["c8"],"o":["c8"],"I.E":"c8"},"dg":{"H":[]},"kR":{"b6":[]},"kQ":{"jt":[],"bm":[]},"eR":{"b4":["eR"],"b4.E":"eR"},"dh":{"BU":[]},"dW":{"BT":[]},"hi":{"I":["dh"],"p":["dh"],"K":["dh"],"o":["dh"],"I.E":"dh"},"i7":{"aa":["1"],"aa.T":"1"},"dB":{"b6":[]},"b8":{"b4":["b8"]},"nR":{"jt":[],"bm":[]},"jN":{"b8":[],"b4":["b8"],"b4.E":"b8"},"jH":{"b8":[],"b4":["b8"],"b4.E":"b8"},"hs":{"b8":[],"b4":["b8"],"b4.E":"b8"},"hL":{"b8":[],"b4":["b8"],"b4.E":"b8"},"h1":{"b6":[]},"oe":{"jt":[],"bm":[]},"ic":{"H":[]},"eo":{"I":["j?"],"p":["j?"],"K":["j?"],"o":["j?"],"I.E":"j?"},"fW":{"H":[]},"ds":{"H":[]},"ho":{"Dc":[]},"nI":{"ke":["M"]},"oc":{"ke":["M"]},"mP":{"bi":[],"H":[]},"cy":{"hd":["i"],"I":["i"],"p":["i"],"K":["i"],"o":["i"],"I.E":"i"},"hd":{"I":["1"],"p":["1"],"K":["1"],"o":["1"]},"nS":{"hd":["i"],"I":["i"],"p":["i"],"K":["i"],"o":["i"]},"hv":{"aa":["1"],"aa.T":"1"},"jL":{"bk":["1"]}}'))
A.JU(v.typeUniverse,JSON.parse('{"is":1,"n1":1,"he":1,"kf":2,"ih":1,"fI":1,"bC":1,"jn":1,"oj":1,"nK":1,"on":2,"iL":2,"k_":1,"ka":2,"kY":1,"l_":2,"k3":1,"m3":1,"n2":2,"mr":1,"H8":1,"IS":1,"J_":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("H8<j?>"),bG:s("ef"),om:s("i7<B<j?>>"),hw:s("cD"),lo:s("eh"),fW:s("Bp"),fo:s("ia<k>"),iv:s("a1"),eg:s("Dc"),dF:s("Bq()"),E:s("ck"),bU:s("c4<j?>"),fw:s("em"),bP:s("aw<@>"),p6:s("en"),br:s("id<M>"),n8:s("bB"),M:s("d1<k>"),lp:s("ld"),O:s("K<@>"),C:s("ae"),fq:s("dw"),mA:s("H"),eZ:s("lp"),d9:s("aZ"),A:s("bh"),k4:s("iq"),pk:s("rf"),kI:s("rg"),U:s("bi"),gY:s("N1"),nW:s("y<M>"),fr:s("y<dK>"),mj:s("y<W>"),g7:s("y<@>"),fP:s("y<d3?>"),n1:s("y<j?>(nk,hj)"),cM:s("y<hh?>"),co:s("dy"),w:s("cH"),cF:s("dB"),m6:s("rV"),bW:s("rW"),jx:s("rX"),nZ:s("iA<@>"),e7:s("o<@>"),gi:s("B<a1>"),aw:s("B<c4<@>>"),i5:s("B<cm>"),mK:s("B<aZ>"),iw:s("B<y<~>>"),mr:s("B<dA>"),kG:s("B<M>"),bi:s("B<p<F<k,j?>>>"),h2:s("B<p<j>>"),ae:s("B<p<eG>>"),dO:s("B<p<j?>>"),ic:s("B<F<k,j>>"),d:s("B<F<k,j?>>"),e8:s("B<lX>"),i7:s("B<eC>"),hf:s("B<j>"),ox:s("B<eE>"),fi:s("B<co>"),my:s("B<cp>"),iR:s("B<dP>"),eK:s("B<cM>"),k1:s("B<fP>"),g2:s("B<j9>"),bo:s("B<ja>"),jN:s("B<eG>"),gc:s("B<ml>"),eb:s("B<aV>"),fU:s("B<+controller,sync(dL<cu>,R)>"),lw:s("B<+controller,sync(dL<~>,R)>"),kC:s("B<+(dQ,k)>"),jO:s("B<+(k,F<k,j?>)>"),l5:s("B<+(k,j)>"),fj:s("B<+(k,aZ?)>"),iE:s("B<+(k,j?)>"),aY:s("B<+(hp,j?,j?,aG?)>"),g1:s("B<cN>"),cP:s("B<my>"),kj:s("B<cO>"),lE:s("B<h5>"),c0:s("B<ca>"),dw:s("B<bk<@>>"),s:s("B<k>"),en:s("B<h8>"),bs:s("B<cT>"),fC:s("B<b1>"),az:s("B<ho>"),i4:s("B<hp>"),fV:s("B<hq>"),pg:s("B<bo>"),dg:s("B<cz>"),p8:s("B<nZ>"),mc:s("B<hC>"),gy:s("B<hE>"),gk:s("B<ab>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<ao?>"),eU:s("B<F<k,j?>?>"),c:s("B<j?>"),mf:s("B<k?>"),iy:s("b9<@>"),T:s("iC"),m:s("M"),bJ:s("bq"),g:s("bR"),dX:s("bS<@>"),aq:s("aF"),fZ:s("lK"),kk:s("ex<eR>"),p3:s("ex<b8>"),hI:s("ey<@>"),ba:s("p<bB>"),ck:s("p<bh>"),ip:s("p<M>"),ew:s("p<F<k,j>>"),J:s("p<F<k,j?>>"),eT:s("p<eC>"),hg:s("p<eE>"),a6:s("p<cp>"),jX:s("p<j9>"),kR:s("p<cN>"),fE:s("p<cO>"),i:s("p<k>"),bR:s("p<h8>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<F<k,j?>?>"),W:s("p<j?>"),jD:s("iI"),ia:s("Q<k,dy>"),af:s("Q<k,k>"),I:s("Q<k,@>"),x:s("Q<k,j?>"),a3:s("iK<@,@>"),cy:s("F<k,cQ>"),dV:s("F<k,i>"),f:s("F<@,@>"),G:s("F<k,j?>"),d2:s("F<j?,j?>"),iZ:s("Y<k,@>"),r:s("dK"),a:s("fG"),dQ:s("dN"),aj:s("bU"),Z:s("eB"),P:s("W"),K:s("j"),k5:s("co"),dZ:s("cp"),i0:s("cq"),ot:s("mj"),gq:s("fP"),e:s("b5"),b0:s("d9"),lZ:s("N7"),oZ:s("aV"),aK:s("+()"),ja:s("+(M,ie)"),hP:s("+(F<k,cQ>,F<k,F<k,j?>>)"),cU:s("+(dQ,k)"),mk:s("+(R,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(R,R)"),mt:s("+(M?,M)"),po:s("+(j?,i)"),g0:s("+(F<k,j?>?,cQ?,cp?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mp"),Q:s("cN"),V:s("aR"),hF:s("bW<k>"),cu:s("h0<@>"),aJ:s("eJ<k>"),g_:s("h1"),hq:s("ct"),ol:s("dc"),gE:s("mK"),l:s("aG"),ls:s("IS<j?>"),nv:s("mL"),h3:s("h6"),oF:s("bk<p<F<k,j?>>>"),ha:s("bk<cu>"),ey:s("bk<~>"),bv:s("mM"),ku:s("aa<p<i>>"),lI:s("dS"),hL:s("jo"),N:s("k"),f_:s("h8"),k6:s("jp"),n6:s("cb"),mv:s("bl"),nw:s("cQ"),em:s("h9"),hU:s("dd"),q:s("mT"),dH:s("ak"),do:s("de"),nL:s("J_<j?>"),hM:s("wz"),mC:s("wA"),oR:s("cy"),nn:s("wB"),p:s("cT"),cx:s("dV"),ph:s("cU<k,k>"),eo:s("cV"),oc:s("cW"),jJ:s("n3"),e6:s("b6"),j2:s("jt"),n:s("hh"),fA:s("b1"),gx:s("al<cC>"),mz:s("al<b_>"),mE:s("al<dU>"),B:s("bI<k>"),u:s("eP"),bp:s("eQ"),be:s("nk"),ec:s("hk"),oS:s("hl"),iq:s("ay<cT>"),jk:s("ay<@>"),ho:s("ay<i>"),h:s("ay<~>"),oW:s("eU<@,@>"),R:s("eV<M>"),d4:s("hv<M>"),nI:s("t<d3>"),a7:s("t<M>"),hl:s("t<0&>"),os:s("t<k>"),jz:s("t<cT>"),g5:s("t<R>"),_:s("t<@>"),hy:s("t<i>"),jQ:s("t<i?>"),D:s("t<~>"),nf:s("bo"),mp:s("e_<j?,j?>"),mB:s("hz"),k8:s("dk<M>"),fb:s("dk<p<i>>"),mI:s("od<cm>"),jy:s("e4<cu,~()>"),ag:s("e4<~,R()>"),lU:s("e4<~,~()>"),hT:s("cf<M>"),lj:s("cf<p<i>>"),aP:s("ap<d3>"),h1:s("ap<M>"),ex:s("ap<R>"),F:s("ap<~>"),g8:s("ok"),y:s("R"),Y:s("ab"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aG)"),S:s("i"),ma:s("bB?"),gK:s("y<W>?"),b3:s("d3?"),k:s("M?"),bE:s("p<c4<@>>?"),lH:s("p<@>?"),b:s("F<k,j?>?"),nh:s("dK?"),X:s("j?"),ad:s("DK?"),dY:s("cp?"),lY:s("j8?"),jB:s("cN?"),v:s("k?"),f8:s("cQ?"),a_:s("cy?"),he:s("hh?"),dd:s("bo?"),o9:s("R?"),dz:s("ab?"),o:s("i?"),jh:s("aX?"),cZ:s("aX"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aG)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.c6=J.lC.prototype
B.b=J.B.prototype
B.c=J.iB.prototype
B.x=J.ev.prototype
B.a=J.dC.prototype
B.c7=J.bR.prototype
B.c8=J.aF.prototype
B.aB=A.iW.prototype
B.cQ=A.iY.prototype
B.y=A.iZ.prototype
B.f=A.eB.prototype
B.b8=J.md.prototype
B.aM=J.dV.prototype
B.ap=new A.ds("Operation was cancelled")
B.a5=new A.i3(0,"visible")
B.aP=new A.i3(1,"hidden")
B.br=new A.kC(1)
B.e_=new A.kC(-1)
B.a6=new A.ef(0,"applied")
B.a7=new A.ef(1,"quarantined")
B.bs=new A.ef(2,"conflict")
B.a8=new A.ef(3,"skipped")
B.bt=new A.kG(127)
B.a9=new A.kJ(0,"changed")
B.aQ=new A.kJ(1,"deleted")
B.bv=new A.i8(!1)
B.aq=new A.kK(B.bv)
B.bw=new A.i8(!0)
B.bu=new A.kK(B.bw)
B.bR=new A.jJ(A.ac("jJ<p<i>>"))
B.bx=new A.du(B.bR)
B.by=new A.iy(A.Ms(),A.ac("iy<i>"))
B.ar=new A.kL()
B.bz=new A.kV()
B.bA=new A.kZ()
B.F={}
B.Y=new A.aY(B.F,[],A.ac("aY<k,j>"))
B.e6=new A.u8(0,"conflict")
B.e0=new A.q0()
B.aR=new A.qx()
B.bB=new A.lh(A.ac("lh<0&>"))
B.r=new A.lg()
B.aS=new A.lk(A.ac("lk<0&>"))
B.aT=new A.ll()
B.O=new A.ll()
B.bC=new A.lu()
B.bD=new A.lB()
B.aU=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bE=function() {
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
B.bJ=function(getTagFallback) {
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
B.bF=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bI=function(hooks) {
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
B.bH=function(hooks) {
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
B.bG=function(hooks) {
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
B.aV=function(hooks) { return hooks; }

B.h=new A.t1()
B.bK=new A.tD()
B.bL=new A.iI()
B.v=new A.fJ()
B.bM=new A.m7()
B.bN=new A.mi()
B.d=new A.vM()
B.l=new A.n6()
B.e=new A.n7()
B.bO=new A.n8()
B.bP=new A.na()
B.bQ=new A.xE()
B.t=new A.ym()
B.aa=new A.yx()
B.as=new A.z4()
B.aW=new A.f4()
B.i=new A.o7()
B.j=new A.oa()
B.P=new A.oh()
B.ab=new A.dv(0,"create")
B.A=new A.dv(1,"update")
B.bS=new A.dv(2,"archive")
B.bT=new A.dv(3,"restore")
B.aX=new A.dv(4,"purge")
B.bU=new A.dv(5,"hide")
B.H=new A.ib(0,"local")
B.at=new A.ib(1,"remote")
B.ac=new A.ib(2,"resolution")
B.bV=new A.l4(3,"ignore")
B.Q=new A.l4(4,"replace")
B.n=new A.lj(0,"normal")
B.au=new A.lj(1,"full")
B.D=new A.aD(0)
B.av=new A.aD(1e6)
B.aw=new A.aD(16e3)
B.e1=new A.aD(18e8)
B.bW=new A.aD(2e5)
B.aY=new A.aD(3e5)
B.ad=new A.aD(3e7)
B.ax=new A.aD(3e8)
B.ae=new A.aD(5e5)
B.e2=new A.aD(5e6)
B.e3=new A.aD(6048e8)
B.e4=new A.aD(7776e9)
B.e5=new A.aD(864e8)
B.ay=new A.c6(0,"text")
B.R=new A.c6(1,"int")
B.S=new A.c6(2,"real")
B.B=new A.c6(3,"bool")
B.T=new A.c6(4,"date")
B.I=new A.c6(5,"enumValue")
B.U=new A.c6(6,"json")
B.V=new A.c6(7,"jsonList")
B.J=new A.c6(8,"ref")
B.bX=new A.iq(!1)
B.az=new A.dx("x",1,"opfsExternalLocks")
B.aZ=new A.dx("y",2,"opfsExternalLocksWorkaround")
B.b_=new A.fv("/database",0,"database")
B.b0=new A.fv("/database-journal",1,"journal")
B.c2=new A.bi("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.c3=new A.bi("fieldCipher envelope must be a map.",null,null)
B.aA=new A.aY(B.F,[],A.ac("aY<k,k>"))
B.c4=new A.et(B.aA)
B.b1=new A.ix(0,"live")
B.c9=new A.lI(null)
B.ca=new A.lJ(null)
B.cb=new A.d5(0,"textExpected")
B.cc=new A.d5(1,"intExpected")
B.cd=new A.d5(2,"numberExpected")
B.ce=new A.d5(3,"boolExpected")
B.cf=new A.d5(4,"jsonExpected")
B.cg=new A.d5(5,"jsonListExpected")
B.ch=new A.d5(6,"enumValueRejected")
B.ci=new A.lN(255)
B.af=new A.ey(B.bB,A.ac("ey<k>"))
B.cj=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b2=s([13,10],t.t)
B.aF=new A.cx(0,"unknown")
B.aG=new A.cx(1,"integer")
B.aH=new A.cx(2,"bigInt")
B.aI=new A.cx(3,"float")
B.aJ=new A.cx(4,"text")
B.aK=new A.cx(5,"blob")
B.aL=new A.cx(6,"$null")
B.bm=new A.cx(7,"boolean")
B.b3=s([B.aF,B.aG,B.aH,B.aI,B.aJ,B.aK,B.aL,B.bm],A.ac("B<cx>"))
B.ck=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.cl=s([B.a5,B.aP],A.ac("B<i3>"))
B.bb=new A.b_(0,"eq")
B.cZ=new A.b_(1,"neq")
B.d2=new A.b_(2,"gt")
B.d3=new A.b_(3,"gte")
B.d4=new A.b_(4,"lt")
B.d5=new A.b_(5,"lte")
B.d6=new A.b_(6,"inValues")
B.d7=new A.b_(7,"between")
B.d8=new A.b_(8,"startsWith")
B.d9=new A.b_(9,"endsWith")
B.d_=new A.b_(10,"contains")
B.d0=new A.b_(11,"isNull")
B.d1=new A.b_(12,"isNotNull")
B.cm=s([B.bb,B.cZ,B.d2,B.d3,B.d4,B.d5,B.d6,B.d7,B.d8,B.d9,B.d_,B.d0,B.d1],A.ac("B<b_>"))
B.c0=new A.ir(0,"database")
B.c1=new A.ir(1,"journal")
B.b4=s([B.c0,B.c1],A.ac("B<ir>"))
B.z=new A.cR(0,"clean")
B.G=new A.cR(1,"dirty")
B.bj=new A.cR(2,"inFlight")
B.a4=new A.cR(3,"conflict")
B.ao=new A.cR(4,"error")
B.ds=new A.cR(5,"quarantine")
B.dt=new A.cR(6,"blocked")
B.cn=s([B.z,B.G,B.bj,B.a4,B.ao,B.ds,B.dt],A.ac("B<cR>"))
B.W=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.co=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.c5=new A.ix(1,"notArchived")
B.cp=s([B.b1,B.c5],A.ac("B<ix>"))
B.cq=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b6=new A.j3(0,"fileUpload")
B.b7=new A.j3(1,"fileRemove")
B.cr=s([B.b6,B.b7],A.ac("B<j3>"))
B.c_=new A.dx("s",0,"opfsShared")
B.bY=new A.dx("i",3,"indexedDb")
B.bZ=new A.dx("m",4,"inMemory")
B.cs=s([B.c_,B.az,B.aZ,B.bY,B.bZ],A.ac("B<dx>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bn=new A.cC(0,"sum")
B.bo=new A.cC(1,"avg")
B.bp=new A.cC(2,"min")
B.bq=new A.cC(3,"max")
B.ct=s([B.bn,B.bo,B.bp,B.bq],A.ac("B<cC>"))
B.cu=s([B.ay,B.R,B.S,B.B,B.T,B.I,B.U,B.V,B.J],A.ac("B<c6>"))
B.k=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.X=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cv=s(["base_updated","base_hash","base_json"],t.s)
B.u=new A.fK(0,"upsert")
B.L=new A.fK(1,"archive")
B.a0=new A.fK(2,"restore")
B.cw=s([B.u,B.L,B.a0],A.ac("B<fK>"))
B.cB=s([],A.ac("B<dy>"))
B.cz=s([],t.ae)
B.cD=s([],t.my)
B.cy=s([],t.jN)
B.cA=s([],t.gc)
B.cx=s([],t.kj)
B.p=s([],t.s)
B.cC=s([],t.t)
B.aj=s([],t.dG)
B.m=s([],t.c)
B.cF=s(["*"],t.s)
B.cG=s([B.b_,B.b0],A.ac("B<fv>"))
B.cH=s(["id","updated"],t.s)
B.cI=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.be=new A.dQ(0,"opfs")
B.bf=new A.dQ(1,"indexedDb")
B.dk=new A.dQ(2,"inMemory")
B.cJ=s([B.be,B.bf,B.dk],A.ac("B<dQ>"))
B.bk=new A.dU(0,"normal")
B.bl=new A.dU(1,"full")
B.cK=s([B.bk,B.bl],A.ac("B<dU>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cL=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cM=new A.iu([16,10,24,12,32,14],A.ac("iu<i,i>"))
B.cV={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.lM()
B.q=new A.kF()
B.cN=new A.aY(B.cV,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.l,B.l],A.ac("aY<k,es>"))
B.al=new A.aY(B.F,[],A.ac("aY<k,i>"))
B.o=new A.aY(B.F,[],A.ac("aY<k,j?>"))
B.am=new A.aY(B.F,[],A.ac("aY<i,F<k,j?>(F<k,j?>)>"))
B.cP=new A.lT(11,"simpleSuccessResponse",A.ac("lT<M>"))
B.Z=new A.dM(0,"createOrUpdate")
B.a_=new A.dM(1,"createOrUpdateMerge")
B.b5=new A.dM(2,"create")
B.K=new A.dM(3,"update")
B.C=new A.dM(4,"archive")
B.E=new A.dM(5,"restore")
B.e7=new A.un(2,"readWriteCreate")
B.cW=new A.co("id",!1)
B.cE=s([],t.d)
B.cX=new A.cq(B.cE,null,null,!1,!1)
B.b9=new A.me(0,"native")
B.aC=new A.me(1,"web")
B.M=new A.b5(0,1,0,0,0,!1)
B.an=new A.b5(0,0,0,0,0,!0)
B.a1=new A.b5(0,0,0,0,0,!1)
B.cY=new A.b5(0,0,0,1,0,!1)
B.ba=new A.b5(0,0,1,0,0,!1)
B.a2=new A.b5(1,0,0,0,0,!1)
B.da=new A.a5("archived",!0)
B.db=new A.a5("0",B.m)
B.aD=new A.jY(!1,!1)
B.dc=new A.f2(0,0,0)
B.dd=new A.f2(null,null,null)
B.cU={hidden:0}
B.de=new A.d1(B.cU,1,t.M)
B.cS={id:0,archived:1,hidden:2,extra:3}
B.bc=new A.d1(B.cS,4,t.M)
B.cT={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.df=new A.d1(B.cT,11,t.M)
B.bd=new A.d1(B.F,0,t.M)
B.cR={open:0,close:1,health:2,worker_event:3,record_event:4,capabilities:5,get:6,mutate_batch:7,compiled_query:8,analyze:9,wal_checkpoint:10,vacuum:11,prune_outbox:12,compact:13,run_maintenance:14,tx_begin:15,tx_get:16,tx_mutate_batch:17,tx_savepoint:18,tx_rollback_to:19,tx_release:20,tx_commit:21,tx_rollback:22,watch_query:23,watch_one:24,watch_cancel:25,sync_start:26,sync_stop:27,sync_now:28,sync_status:29,auth_required:30,sync_pause:31,sync_resume:32,sync_update_auth:33,sync_set_connectivity:34,file_upload_begin:35,file_upload_chunk:36,file_upload_finish:37,file_upload_abort:38,file_list:39,file_open:40,file_remove:41,file_gc:42,file_enforce_storage_cap:43,file_storage_status:44,conflicts_list:45,conflicts_get:46,conflicts_resolve:47,conflicts_accept_local:48,conflicts_accept_remote:49,conflicts_watch:50,contract_request:51,contract_event:52}
B.dg=new A.d1(B.cR,53,t.M)
B.dh=new A.jj(0,"insert")
B.di=new A.jj(1,"update")
B.dj=new A.jj(2,"delete")
B.dl=new A.jp(-1,null)
B.dm=new A.jq("_clientToken")
B.a3=new A.cb(0,"closed")
B.dn=new A.cb(1,"opening")
B.bg=new A.cb(2,"offline")
B.aE=new A.cb(3,"authRequired")
B.bh=new A.cb(4,"idle")
B.dp=new A.cb(5,"pulling")
B.dq=new A.cb(6,"pushing")
B.dr=new A.cb(7,"backoff")
B.bi=new A.cb(8,"paused")
B.N=new A.bl(B.al,B.al,0,0,0,0,!1)
B.du=A.bM("kA")
B.dv=A.bM("eh")
B.dw=A.bM("Bp")
B.dx=A.bM("rf")
B.dy=A.bM("rg")
B.dz=A.bM("rV")
B.dA=A.bM("rW")
B.dB=A.bM("rX")
B.dC=A.bM("M")
B.dD=A.bM("j")
B.dE=A.bM("jg")
B.dF=A.bM("wz")
B.dG=A.bM("wA")
B.dH=A.bM("wB")
B.dI=A.bM("cT")
B.aN=new A.js(!1)
B.dJ=new A.js(!0)
B.dK=new A.dg(14)
B.dL=new A.dg(522)
B.dM=new A.dg(778)
B.dN=new A.zV(B.i,A.Lx())
B.dO=new A.zW(B.i,A.Ly())
B.dP=new A.zX(B.i,A.Lz())
B.dQ=new A.zY(B.i,A.LA())
B.dR=new A.oy(B.i,A.LB())
B.dS=new A.zZ(B.i,A.LC())
B.dT=new A.A_(B.i,A.LD())
B.dU=new A.A0(B.i,A.LE())
B.dV=new A.A1(B.i,A.LF())
B.dW=new A.A3(B.i,A.LH())
B.dX=new A.A4(B.i,A.LI())
B.dY=new A.A2(B.i,A.LG())
B.dZ=new A.oz(B.i,A.LJ())
B.cO=new A.aY(B.F,[],A.ac("aY<j?,j?>"))
B.aO=new A.oA(B.i,B.cO)})();(function staticFields(){$.z6=null
$.f8=A.l([],t.hf)
$.L3=null
$.DN=null
$.uX=0
$.mg=A.KT()
$.Da=null
$.D9=null
$.FU=null
$.Fx=null
$.G3=null
$.AI=null
$.AY=null
$.CG=null
$.zi=A.l([],A.ac("B<p<j>?>"))
$.hQ=null
$.kh=null
$.ki=null
$.Ct=!1
$.C=B.i
$.zm=null
$.Ei=null
$.Ej=null
$.Ek=null
$.El=null
$.C8=A.y_("_lastQuoRemDigits")
$.C9=A.y_("_lastQuoRemUsed")
$.jC=A.y_("_lastRemUsed")
$.Ca=A.y_("_lastRem_nsh")
$.E7=""
$.E8=null
$.fQ=function(){var s=t.N
return A.w(s,s)}()
$.F0=null
$.Ae=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"MY","Gk",()=>A.AQ("_$dart_dartClosure"))
s($,"MX","fe",()=>A.AQ("_$dart_dartClosure_dartJSInterop"))
s($,"NB","oT",()=>A.ug(0))
s($,"NZ","GU",()=>B.i.aY(new A.B0(),A.ac("y<~>")))
s($,"NT","GR",()=>A.l([new J.lD()],A.ac("B<jd>")))
s($,"Nf","Go",()=>A.df(A.wx({
toString:function(){return"$receiver$"}})))
s($,"Ng","Gp",()=>A.df(A.wx({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Nh","Gq",()=>A.df(A.wx(null)))
s($,"Ni","Gr",()=>A.df(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Nl","Gu",()=>A.df(A.wx(void 0)))
s($,"Nm","Gv",()=>A.df(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Nk","Gt",()=>A.df(A.E4(null)))
s($,"Nj","Gs",()=>A.df(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"No","Gx",()=>A.df(A.E4(void 0)))
s($,"Nn","Gw",()=>A.df(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Nr","CR",()=>A.Ja())
s($,"N3","ec",()=>$.GU())
s($,"N2","Gl",()=>A.Jt(!1,B.i,t.y))
s($,"NH","GH",()=>A.ug(4096))
s($,"NF","GF",()=>new A.zR().$0())
s($,"NG","GG",()=>new A.zQ().$0())
s($,"Nt","CS",()=>A.Ij(A.b3(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Ns","Gy",()=>A.ug(0))
s($,"NA","cj",()=>A.jB(0))
s($,"Ny","ff",()=>A.jB(1))
s($,"Nz","GB",()=>A.jB(2))
s($,"Nw","CU",()=>$.ff().bG(0))
s($,"Nu","CT",()=>A.jB(1e4))
r($,"Nx","GA",()=>A.ag("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Nv","Gz",()=>A.ug(8))
s($,"NC","GC",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"ND","GD",()=>A.ag("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"NE","GE",()=>typeof URLSearchParams=="function")
s($,"NK","fg",()=>A.kq(B.dD))
s($,"N8","kv",()=>{A.It()
return $.uX})
s($,"NL","GK",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"N6","Bj",()=>{var q=new A.z5(A.Ii(8))
q.pn()
return q})
s($,"MZ","ku",()=>A.Hd(B.cQ.ga9(A.Ik(A.b3(A.l([1],t.t)))),0,null).getInt8(0)===1?B.O:B.aT)
s($,"MQ","CM",()=>A.ag("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"NN","Bk",()=>A.ag("\\r\\n|\\r|\\n",!0,!1))
s($,"N4","Gm",()=>A.DS())
s($,"NI","CV",()=>A.ag("^[\\x00-\\x7F]+$",!0,!1))
s($,"NJ","GI",()=>A.ag('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"O0","GV",()=>A.ag('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"NM","GL",()=>A.ag("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"NQ","GO",()=>A.ag('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"NP","GN",()=>A.ag("\\\\(.)",!0,!1))
s($,"NY","GT",()=>A.ag('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"O1","GW",()=>A.ag("(?:"+$.GL().a+")*",!0,!1))
s($,"NS","GQ",()=>A.DT())
s($,"O_","oU",()=>A.ag("^[a-z0-9]{15}$",!0,!1))
r($,"KC","GJ",()=>A.Hw().a)
s($,"N_","CO",()=>A.ag("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"MV","Gi",()=>A.Bv("declaredNames",t.aJ))
s($,"MW","Gj",()=>A.Bv("fieldByName",A.ac("F<k,aZ>")))
s($,"Ne","kx",()=>new A.j())
s($,"MU","CN",()=>A.ag("^[0-9a-f]{64}$",!0,!1))
s($,"NO","GM",()=>A.ag("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"NV","i1",()=>new A.q9($.CP()))
s($,"Nb","Gn",()=>new A.uR(A.ag("/",!0,!1),A.ag("[^/]$",!0,!1),A.ag("^/",!0,!1)))
s($,"Nd","oS",()=>new A.x1(A.ag("[/\\\\]",!0,!1),A.ag("[^/\\\\]$",!0,!1),A.ag("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ag("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"Nc","kw",()=>new A.wI(A.ag("/",!0,!1),A.ag("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ag("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ag("^/",!0,!1)))
s($,"Na","CP",()=>A.IV())
s($,"MT","Gh",()=>$.ff().bH(0,63).bG(0))
s($,"MS","Gg",()=>{var q=$.ff()
return q.bH(0,63).fY(0,q)})
s($,"MR","oR",()=>A.DT())
s($,"Np","CQ",()=>A.Bv(null,t.S))
s($,"NU","GS",()=>A.I6(A.l([A.C1("files"),A.C1("blocks")],t.s)))
s($,"N0","Bi",()=>{var q,p,o=A.w(t.N,A.ac("fv"))
for(q=0;q<2;++q){p=B.cG[q]
o.j(0,p.c,p)}return o})
s($,"NR","GP",()=>A.DS())
r($,"Nq","ky",()=>{var q="navigator"
return A.HY(A.HZ(A.CE(A.G8(),q),A.C1("locks")))?A.CE(A.CE(A.G8(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fH,ArrayBuffer:A.fG,ArrayBufferView:A.iX,DataView:A.iW,Float32Array:A.lZ,Float64Array:A.m_,Int16Array:A.m0,Int32Array:A.m1,Int8Array:A.m2,Uint16Array:A.iY,Uint32Array:A.iZ,Uint8ClampedArray:A.j_,CanvasPixelArray:A.j_,Uint8Array:A.eB})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fI.$nativeSuperclassTag="ArrayBufferView"
A.jU.$nativeSuperclassTag="ArrayBufferView"
A.jV.$nativeSuperclassTag="ArrayBufferView"
A.dN.$nativeSuperclassTag="ArrayBufferView"
A.jW.$nativeSuperclassTag="ArrayBufferView"
A.jX.$nativeSuperclassTag="ArrayBufferView"
A.bU.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.Mq
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
